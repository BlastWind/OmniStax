/* Figures for section 22.9 Magnetic Fields Produced by Currents: Ampere's Law.
   The page binds magnetic-field, current and position, which is what ch22/COLOR.md
   gives it; the permeability of free space, the number of turns, the turns per
   metre, the length of the coil and every label on a frame are untyped and in ink,
   and no conductor is tinted. One full three-dimensional scene folds the book's
   three arrangements of a current, argued in plan.md under root rule 28.3, and one
   still figure on a locked view bends the solenoid of Example 22.7 into a ring.
   Both answer their controls and register no cycle: the field of a steady current
   is a state of the arrangement, and nothing on this page has a clock (rule 14).
   Field lines that close on themselves carry no arrowhead here, as ch22/COLOR.md allows;
   the sense of the circles is told by the field vectors drawn on them, by the
   right hand of the rule and by the north and south ends of the solenoid. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, axes, curve, pinned, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = 2 * Math.PI, MU0 = 4e-7 * Math.PI;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lastLabel = (host) => host.lastElementChild;
const add3 = (a, b, k = 1) => [a[0] + k * b[0], a[1] + k * b[1], a[2] + k * b[2]];
const unit3 = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
/* a number as a×10^b, for the canvas and for KaTeX */
function sci(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  const sup = String(e).replace(/-/g, '−').replace(/[0-9]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]);
  return fmt(m, dp ?? 2) + ' × 10' + sup;
}
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}
/* the points of an ellipse of semi-axes A and B about c, in the plane spanned by u and v */
function oval(c, A, B, u, v, n = 72) {
  const pts = [];
  for (let i = 0; i <= n; i++) { const t = (i / n) * TAU; pts.push(add3(add3(c, u, A * Math.cos(t)), v, B * Math.sin(t))); }
  return pts;
}

/* =====================================================================
   FIGURE 22.37 + 22.38 + 22.39 · sim-field-of-a-current · still · a full
   3D scene (root rules 28.3, 26.2; granted in ch22/config.md)
   One current wound three ways. The straight wire opens on Example 22.6,
   25 A at 5.0 cm, and gives its 1.00 × 10⁻⁴ T; the loop opens on the same
   current at the same radius, so the reader can read the two results
   against each other; the solenoid opens on Example 22.7, 1000 turns per
   metre at 1600 A, and gives its 2.01 T. Each arrangement holds one fixed
   scale taken from its greatest extent: 1.7 scene units to 12 cm for the
   wire and the loop, and a coil 3.2 units long standing for the book's
   2.00 m solenoid, whose winding is drawn one turn to every hundred the
   metre really holds, which the readout states. The orbit's pitch runs
   from 17° below the horizontal to 86° above it, the yaw is free, and
   plan.md argues both.
===================================================================== */
(function () {
  const THREE = window.THREE;
  /* a browser may define the constructor and still refuse a context, so the
     scene is attempted only where one can really be made; otherwise the flat
     drawing below takes the canvas and the figure loses nothing but the turn */
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const H2D = hasGL ? 360 : 780;              /* with no scene to mount, the canvas draws the arrangement flat as well as the graph */
  const d = sim('sim-field-of-a-current', H2D);
  const arrC = F.select(d.controls, {
    label: '\\text{the wire is}',
    options: [{ value: 'wire', label: 'straight' }, { value: 'loop', label: 'a circular loop' }, { value: 'sol', label: 'a solenoid' }],
    value: 'wire', aria: 'the shape the current-carrying wire is wound in', onInput: () => { show(); },
  });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 5, max: 50, step: 1, value: 25, unit: 'A', dec: 0, aria: 'the current in the wire or the loop' });
  const iBox = lastLabel(d.controls);
  const rS = ctl(d.controls, { label: '\\kr', cls: 'position', min: 2, max: 12, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'the shortest distance from the wire to the point where the field is wanted' });
  const rBox = lastLabel(d.controls);
  const RS = ctl(d.controls, { label: '\\kR', cls: 'position', min: 2, max: 12, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'the radius of the circular loop' });
  const RBox = lastLabel(d.controls);
  const NS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 4, step: 1, value: 1, unit: 'turns', dec: 0, detents: [1, 2, 3, 4], aria: 'the number of turns in the flat coil' });
  const NBox = lastLabel(d.controls);
  const iSol = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 200, max: 2000, step: 50, value: 1600, unit: 'A', dec: 0, aria: 'the current in the solenoid' });
  const iSolBox = lastLabel(d.controls);
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 400, max: 2000, step: 50, value: 1000, unit: '/m', dec: 0, aria: 'the number of turns per meter of the solenoid' });
  const nBox = lastLabel(d.controls);
  const handC = choice(d.controls, { label: '\\text{the right hand}', options: [{ value: 'on', label: 'shown' }, { value: 'off', label: 'hidden' }], value: 'on', aria: 'whether the right hand of rule 2 is drawn gripping the wire' });

  function show() {
    const a = arrC.value;
    iBox.style.display = a === 'sol' ? 'none' : '';
    rBox.style.display = a === 'wire' ? '' : 'none';
    RBox.style.display = a === 'loop' ? '' : 'none';
    NBox.style.display = a === 'loop' ? '' : 'none';
    iSolBox.style.display = a === 'sol' ? '' : 'none';
    nBox.style.display = a === 'sol' ? '' : 'none';
  }
  show();

  const SOL_L = 2.00;                          /* the book's solenoid is two metres long */
  const RHO = (cm) => (1.7 * cm) / 12;         /* the fixed scale of the wire and the loop: 1.7 scene units to 12 cm */
  const state = () => {
    const a = arrC.value;
    if (a === 'wire') { const r = rS.v / 100, I = iS.v; return { a, I, r, B: (MU0 * I) / (TAU * r) }; }
    if (a === 'loop') { const R = RS.v / 100, I = iS.v, N = NS.v; return { a, I, R, N, B: (N * MU0 * I) / (2 * R) }; }
    const I = iSol.v, n = nS.v;
    return { a, I, n, N: Math.round(n * SOL_L), B: MU0 * n * I };
  };
  const headlineOf = (st) => {
    if (st.a === 'wire') return `A current of ${fmt(st.I, 0)} A makes ${sci(st.B, 2)} T at ${fmt(rS.v, 1)} cm from the wire, in circles centered on it.`;
    if (st.a === 'loop') return st.N === 1
      ? `The same current, closed into a loop of radius ${fmt(RS.v, 1)} cm, makes ${sci(st.B, 2)} T at its center.`
      : `${fmt(st.N, 0)} turns of radius ${fmt(RS.v, 1)} cm carrying ${fmt(st.I, 0)} A make ${sci(st.B, 2)} T at the center.`;
    return `A solenoid of ${fmt(st.n, 0)} turns per meter carrying ${fmt(st.I, 0)} A holds ${fmt(st.B, 2)} T all through its interior, and almost nothing outside.`;
  };

  /* ---------- the scene ---------- */
  let V = null, S = null, g3 = null, key = '';
  const paint = [];                            /* every material and the palette colour it takes, re-read each frame for a change of theme */
  const pmat = (col, extra) => { const m = F.mesh.mat(col(), extra); paint.push({ m, col }); return m; };
  const pline = (g, pts, col, op) => {
    const l = F.mesh.polyline(g, pts, col()); paint.push({ m: l.material, col });
    if (op) { l.material.transparent = true; l.material.opacity = op; }
    return l;
  };
  const pstick = (g, a, b, r, col) => { const m = new THREE.Mesh(F.mesh.geo().cyl, pmat(col)); m.scale.set(r, 1, r); F.mesh.setStick(m, a, b); g.add(m); return m; };
  /* an arrow from a to b of shaft radius r, in the palette colour col */
  function pvec(g, a, b, r, col, name) {
    const A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
    const dd = B.clone().sub(A), L = dd.length();
    if (L < 0.02) return;
    const hl = Math.min(0.30, L * 0.45), u = dd.clone().normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
    const shaft = pstick(g, a, base.toArray(), r, col);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col));
    cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
    cone.scale.set(r * 3.2, hl, r * 3.2); g.add(cone);
    if (name) { V.pickable(shaft, name); V.pickable(cone, name); }
  }
  /* a name in the page's own face, on the label's panel so that it stays legible
     wherever the orbit carries it over a body of the scene */
  const dim = (e, col) => { e.style.fontWeight = '600'; e.style.color = col; return e; };
  const INK = () => PAL.ink, MUT = () => PAL.muted;
  const BC = () => C('magnetic-field'), IC = () => C('current'), PC = () => C('position');
  const FAINT = () => C('magnetic-field'), OP = 0.38;   /* a guide line is the field's own hue at a third of its weight */

  /* The right hand of rule 2, gripping the conductor: the thumb along the current
     and the four fingers curling the way the field goes. It is a symbol of the rule
     rather than a body in the scene, so it is drawn at a size that can be read
     rather than at the scale the sliders set. Built about a rod along +y with the
     palm on the +x side, then turned onto the current where it grips. */
  function buildHand(g, grip, iDir, outDir, s) {
    const h = new THREE.Group();
    const hm = pmat(MUT, { transparent: true, opacity: 0.5 });
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.40, 0.26), hm); palm.position.set(0.30, -0.03, 0.02); h.add(palm);
    V.pickable(palm, 'the palm of the right hand, which grips the wire');
    const thumb = new THREE.Mesh(F.mesh.geo().cyl, hm); thumb.scale.set(0.048, 1, 0.048);
    F.mesh.setStick(thumb, [0.24, 0.12, 0.06], [0.12, 0.78, 0.04]); h.add(thumb);
    V.pickable(thumb, 'the thumb, pointing the way the current runs');
    [0.12, 0.02, -0.08, -0.18].forEach((yF, fi) => {
      const span = 2.5 - 0.16 * fi;
      for (let k = 0; k < 5; k++) {
        const a0 = -(span / 5) * k, a1 = -(span / 5) * (k + 1), rr = 0.30 - 0.026 * k;
        const p0 = [rr * Math.cos(a0), yF, rr * Math.sin(a0)], p1 = [(rr - 0.026) * Math.cos(a1), yF, (rr - 0.026) * Math.sin(a1)];
        const f2 = new THREE.Mesh(F.mesh.geo().cyl, hm); f2.scale.set(0.034, 1, 0.034);
        F.mesh.setStick(f2, p0, p1); h.add(f2);
        V.pickable(f2, 'the fingers, curling the way the magnetic field goes');
      }
    });
    const wrist = new THREE.Mesh(F.mesh.geo().cyl, hm); wrist.scale.set(0.10, 1, 0.10);
    F.mesh.setStick(wrist, [0.34, -0.10, 0.06], [0.74, -0.32, 0.34]); h.add(wrist);
    V.pickable(wrist, 'the wrist');
    const u = new THREE.Vector3(...unit3(outDir)), t = new THREE.Vector3(...unit3(iDir));
    const w = new THREE.Vector3().crossVectors(u, t);
    h.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, t, w));
    h.position.set(grip[0], grip[1], grip[2]); h.scale.setScalar(s);
    h.visible = handC.value === 'on';
    g.add(h); return h;
  }

  function build() {
    if (!V || !V.scene || !g3) return;
    V.clear(); paint.length = 0;
    const st = state();
    S = { labs: {} };
    if (st.a === 'wire') buildWire(st);
    else if (st.a === 'loop') buildLoop(st);
    else buildSolenoid(st);
    V.invalidate();
  }

  /* A straight wire running across the scene, the current along it, and the field
     in circles centred on it. Three planes of guide circles at fixed radii say
     that the picture is the same all along the wire, and the circle through the
     field point is drawn over them. */
  function buildWire(st) {
    const rho = RHO(rS.v);
    const w = pstick(g3, [-3.0, 0, 0], [3.0, 0, 0], 0.030, INK); V.pickable(w, 'the long straight wire');
    pvec(g3, [-2.6, 0, 0], [2.6, 0, 0], 0.046, IC, 'I, the current in the wire');
    const ring = (R, x, col, op) => {
      const pts = [];
      for (let i = 0; i <= 84; i++) { const t = (i / 84) * TAU; pts.push([x, R * Math.sin(t), R * Math.cos(t)]); }
      return pline(g3, pts, col, op);
    };
    [-1.5, 1.5].forEach((x) => [4, 8, 12].forEach((cm) => ring(RHO(cm), x, FAINT, OP)));
    [4, 8, 12].forEach((cm) => ring(RHO(cm), 0, FAINT, OP));
    ring(rho, 0, BC);
    /* the field at three points of that circle, as vectors tangent to it: for a
       current along +x the field at the radial direction e is the way the right
       hand's fingers curl, which is x-hat crossed with e */
    const at = (t) => [0, rho * Math.sin(t), rho * Math.cos(t)];
    const tang = (t) => [0, Math.cos(t), -Math.sin(t)];
    const tP = -2.0;
    [0.6, 2.4].forEach((t) => pvec(g3, at(t), add3(at(t), tang(t), 0.36), 0.028, BC, 'the magnetic field, tangent to the circle'));
    const p = at(tP);
    pvec(g3, p, add3(p, tang(tP), 0.66), 0.040, BC, 'B, the magnetic field at this point');
    pstick(g3, [0, 0, 0], p, 0.016, PC);
    F.mesh.sphere(g3, p, 0.058, PAL.ink);
    S.labs.I = dim(V.label('I = ' + fmt(st.I, 0) + ' A', [2.30, 0, 0], g3, 22), C('current'));
    S.labs.B = dim(V.label('B = ' + sci(st.B, 2) + ' T', add3(p, tang(tP), 0.88), g3, -8), C('magnetic-field'));
    S.labs.r = dim(V.label('r = ' + fmt(rS.v, 1) + ' cm', add3(p, unit3(p), 0.58), g3, -10), C('position'));
    buildHand(g3, [-1.1, 0, 0], [1, 0, 0], [0, 1, 0], 1);
  }

  /* A circular loop lying flat, the current running round it so that the field at
     the centre points up. Every field line of a loop closes round the wire itself,
     so the lines are ovals about the wire's cross-section in two vertical planes,
     the largest of them passing up through the hole and back round outside. */
  function buildLoop(st) {
    const rho = RHO(RS.v);
    for (let k = 0; k < st.N; k++) {
      const rim = new THREE.Mesh(new THREE.TorusGeometry(rho + (k - (st.N - 1) / 2) * 0.052, 0.026, 10, 72), pmat(INK));
      rim.rotation.x = Math.PI / 2; g3.add(rim); V.pickable(rim, st.N === 1 ? 'the loop of wire' : 'one turn of the flat coil');
    }
    const at = (t) => [rho * Math.cos(t), 0, rho * Math.sin(t)];
    const iDir = (t) => [Math.sin(t), 0, -Math.cos(t)];          /* the current runs so that the field at the centre is upward */
    const tI = 1.15;
    pvec(g3, add3(at(tI), iDir(tI), -0.30), add3(at(tI), iDir(tI), 0.42), 0.046, IC, 'I, the current in the loop');
    [0, Math.PI / 2, Math.PI, -Math.PI / 2].forEach((al) => {
      const e = [Math.cos(al), 0, Math.sin(al)], up = [0, 1, 0];
      [[rho, 0.30 * rho, 0.30 * rho], [rho, 0.62 * rho, 0.62 * rho], [1.125 * rho, 0.975 * rho, 0.90 * rho]].forEach(([c, A, Bh]) => {
        pline(g3, oval(add3([0, 0, 0], e, c), A, Bh, e, up, 64), FAINT, OP);
      });
    });
    pvec(g3, [0, -0.40, 0], [0, 0.86, 0], 0.042, BC, 'B, the magnetic field at the center of the loop');
    const tR = 3.9;
    pstick(g3, [0, 0, 0], at(tR), 0.018, PC);
    S.labs.I = dim(V.label('I = ' + fmt(st.I, 0) + ' A', add3(at(tI), iDir(tI), 0.40), g3, -20), C('current'));
    S.labs.B = dim(V.label('B = ' + sci(st.B, 2) + ' T', [0.0, 1.0, 0], g3, 26), C('magnetic-field'));
    S.labs.R = dim(V.label('R = ' + fmt(RS.v, 1) + ' cm', add3([0, 0, 0], at(tR), 0.55), g3, 0), C('position'));
    buildHand(g3, at(2.55), iDir(2.55), unit3(at(2.55)), 0.9);
  }

  /* A solenoid along the axis, its winding drawn one turn to every hundred the
     metre really holds. The field runs straight down the inside and leaves at the
     north end; outside, every line closes round the winding itself, so the outside
     lines are long ovals about the wire and the space between them is the nearly
     empty region the section describes. */
  function buildSolenoid(st) {
    const a = 0.55, HX = 1.6, turns = Math.round(st.n / 100);      /* one turn drawn to every hundred the metre holds, 4 to 20 across the slider */
    const pts = [];
    const npt = turns * 26;
    for (let i = 0; i <= npt; i++) { const s = i / npt, u = TAU * turns * s; pts.push([-HX + 2 * HX * s, -a * Math.sin(u), a * Math.cos(u)]); }
    const coil = pline(g3, pts, INK); V.pickable(coil, 'the winding of the solenoid');
    /* the current, along the winding where it crosses the front of the coil */
    const j = Math.round(npt * 0.62), p0 = pts[Math.max(0, j - 3)], p1 = pts[Math.min(npt, j + 3)];
    pvec(g3, p0, p1, 0.040, IC, 'I, the current in the winding');
    [[0, 0], [0.30, 0], [-0.30, 0], [0, 0.30], [0, -0.30]].forEach(([dy, dz]) =>
      pvec(g3, [-1.25, dy, dz], [1.25, dy, dz], 0.030, BC, 'B, the field inside the solenoid, the same everywhere in the interior'));
    /* the lines outside, closing round the winding */
    [[0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].forEach((nrm) => {
      [[2.10, 0.38], [2.52, 0.78]].forEach(([A, Bh]) => pline(g3, oval(add3([0, 0, 0], nrm, a), A, Bh, [1, 0, 0], nrm, 72), FAINT, OP));
    });
    S.labs.I = dim(V.label('I = ' + fmt(st.I, 0) + ' A', add3(p1, unit3([0, p1[1], p1[2]]), 0.62), g3, 8), C('current'));
    S.labs.B = dim(V.label('B = ' + fmt(st.B, 2) + ' T', [-0.6, -1.35, 0], g3, 0), C('magnetic-field'));
    S.labs.N = dim(V.label('N', [HX + 0.46, 0, 0], g3, 0), PAL.ink);
    S.labs.S = dim(V.label('S', [-HX - 0.46, 0, 0], g3, 0), PAL.ink);
    const jh = Math.round(npt * 0.26), ph0 = pts[Math.max(0, jh - 3)], ph1 = pts[Math.min(npt, jh + 3)];
    const u0 = unit3([0, pts[jh][1], pts[jh][2]]);
    buildHand(g3, add3(pts[jh], u0, 0.04), unit3([ph1[0] - ph0[0], ph1[1] - ph0[1], ph1[2] - ph0[2]]), u0, 0.62);
  }

  /* ---------- the arrangement flat, where there is no WebGL for the scene ---------- */
  function ovalPath(ctx, cx, cy, A, B, col, w) {
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.ellipse(cx, cy, A, B, 0, 0, TAU); ctx.stroke(); ctx.restore();
  }
  function drawFlat(ctx, st) {
    const cx = 700, cy = 262;
    if (st.a === 'wire') {
      const K = 150 / RHO(12), rho = RHO(rS.v) * K;
      [4, 8, 12].forEach((cm) => { const R = RHO(cm); ovalPath(ctx, cx, cy, R * K, R * K, alpha(C('magnetic-field'), 0.5), 2.5); });
      ovalPath(ctx, cx, cy, rho, rho, C('magnetic-field'), 4);
      /* the wire runs out of the page, drawn as 22.3 draws a vector coming toward the reader */
      dot(ctx, cx, cy, C('current'), true, 11);
      ovalPath(ctx, cx, cy, 20, 20, C('current'), 3.5);
      text(ctx, 'I = ' + fmt(st.I, 0) + ' A, out of the page', cx + 30, cy - 26, C('current'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      const px = cx + rho * 0.72, py = cy + rho * 0.69;
      line(ctx, cx, cy, px, py, C('position'), 3);
      dot(ctx, px, py, PAL.ink, true, 8);
      text(ctx, 'r = ' + fmt(rS.v, 1) + ' cm', (cx + px) / 2 + 8, (cy + py) / 2 + 20, C('position'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
      arrow(ctx, px, py, px - 52, py + 54, C('magnetic-field'), 5);
      text(ctx, 'B = ' + sci(st.B, 2) + ' T', px - 58, py + 74, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    } else if (st.a === 'loop') {
      const K = 150 / RHO(12), rho = RHO(RS.v) * K;
      [1, -1].forEach((s) => {
        [[rho, 0.30 * rho, 0.30 * rho], [rho, 0.62 * rho, 0.62 * rho], [1.125 * rho, 0.975 * rho, 0.90 * rho]].forEach(([c, A, B]) =>
          ovalPath(ctx, cx + s * c, cy, A, B, alpha(C('magnetic-field'), 0.5), 2.5));
        for (let k = 0; k < st.N; k++) {
          const xk = cx + s * (rho + (k - (st.N - 1) / 2) * 5);
          if (s > 0) { dot(ctx, xk, cy, C('current'), true, 9); }
          else { ctx.save(); ctx.strokeStyle = C('current'); ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(xk - 6, cy - 6); ctx.lineTo(xk + 6, cy + 6); ctx.moveTo(xk + 6, cy - 6); ctx.lineTo(xk - 6, cy + 6); ctx.stroke(); ctx.restore(); }
        }
      });
      text(ctx, 'I = ' + fmt(st.I, 0) + ' A, out of the page here', cx + rho + 24, cy + 26, C('current'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, 'and into it there', cx - rho - 24, cy + 26, C('current'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
      arrow(ctx, cx, cy + 46, cx, cy - 104, C('magnetic-field'), 5);
      text(ctx, 'B = ' + sci(st.B, 2) + ' T', cx + 14, cy - 92, C('magnetic-field'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      line(ctx, cx, cy, cx + rho, cy, C('position'), 3);
      text(ctx, 'R = ' + fmt(RS.v, 1) + ' cm', cx + rho / 2, cy - 18, C('position'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    } else {
      const HX = 300, a = 80, turns = Math.round(st.n / 100);
      for (let k = 0; k < turns; k++) {
        const x = cx - HX + ((2 * HX) / (turns - 1)) * k;
        dot(ctx, x, cy - a, C('current'), true, 7);
        ctx.save(); ctx.strokeStyle = C('current'); ctx.lineWidth = 3; ctx.beginPath();
        ctx.moveTo(x - 5, cy + a - 5); ctx.lineTo(x + 5, cy + a + 5); ctx.moveTo(x + 5, cy + a - 5); ctx.lineTo(x - 5, cy + a + 5); ctx.stroke(); ctx.restore();
      }
      [-46, 0, 46].forEach((dy) => arrow(ctx, cx - 250, cy + dy, cx + 250, cy + dy, C('magnetic-field'), 4));
      [1, -1].forEach((s) => [[330, 36], [380, 66]].forEach(([A, B]) => ovalPath(ctx, cx, cy + s * a, A, B, alpha(C('magnetic-field'), 0.5), 2.5)));
      text(ctx, 'N', cx + HX + 64, cy, PAL.ink, { size: 24, weight: 600, align: 'center' });
      text(ctx, 'S', cx - HX - 64, cy, PAL.ink, { size: 24, weight: 600, align: 'center' });
      text(ctx, 'I = ' + fmt(st.I, 0) + ' A', cx, cy - a - 34, C('current'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, 'B = ' + fmt(st.B, 2) + ' T', cx, cy - 70, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    }
    text(ctx, 'This browser cannot turn the scene, so the arrangement is drawn flat: the wire end-on, the loop and the coil in section.', 700, 440, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, headlineOf(st));
  }

  /* ---------- the graph below the scene ----------
     The axes are fixed per arrangement and never rescale: the wire runs to 20 cm
     and 5 × 10⁻⁴ T, the loop to 20 cm and 20 × 10⁻⁴ T, and the solenoid to 2000
     turns per metre and 5 T. A curve that leaves the frame is clipped to it and
     the live point goes through pinned(). */
  function drawGraph(ctx, st, y0) {
    const box = { l: 180, r: 1270, t: y0 + 54, b: y0 + 238 };
    const clipped = (fn) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); fn(); ctx.restore(); };
    if (st.a === 'wire') {
      const { X, Y } = axes(ctx, box, [0, 12], [0, 5], {
        xl: 'r, the shortest distance to the wire (cm)', xc: C('position'), yl: 'B (10⁻⁴ T)', yc: C('magnetic-field'),
        nx: 6, ny: 5, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      });
      const t0 = Math.max(0.8, ((MU0 * st.I) / (TAU * 5e-4)) * 100);
      clipped(() => curve(ctx, (t) => (MU0 * st.I) / (TAU * (t / 100)) / 1e-4, t0, 12, X, Y, C('magnetic-field'), 5, 140));
      const p = pinned(ctx, box, X, Y, rS.v, st.B / 1e-4, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'the field falls off as one over the distance, not as one over its square', box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' });
    } else if (st.a === 'loop') {
      const { X, Y } = axes(ctx, box, [0, 12], [0, 20], {
        xl: 'R, the radius of the loop (cm)', xc: C('position'), yl: 'B (10⁻⁴ T)', yc: C('magnetic-field'),
        nx: 6, ny: 5, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      });
      const t0 = Math.max(0.8, ((st.N * MU0 * st.I) / (2 * 20e-4)) * 100);
      clipped(() => curve(ctx, (t) => (st.N * MU0 * st.I) / (2 * (t / 100)) / 1e-4, t0, 12, X, Y, C('magnetic-field'), 5, 140));
      const p = pinned(ctx, box, X, Y, RS.v, st.B / 1e-4, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'the larger the loop, the weaker its center, because the current is farther away', box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' });
    } else {
      const { X, Y } = axes(ctx, box, [0, 2000], [0, 5], {
        xl: 'n, the number of turns per meter (1/m)', xc: PAL.ink, yl: 'B (T)', yc: C('magnetic-field'),
        nx: 4, ny: 5, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      });
      clipped(() => curve(ctx, (t) => MU0 * t * st.I, 0, 2000, X, Y, C('magnetic-field'), 5, 60));
      const p = pinned(ctx, box, X, Y, st.n, st.B, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'no radius enters it: the field grows straight with the turns per meter', box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' });
    }
  }

  function draw() {
    const st = state();
    const k = [st.a, iS.v, rS.v, RS.v, NS.v, iSol.v, nS.v, handC.value].join('|');
    if (V && k !== key) { key = k; try { build(); } catch (e) { console.error('sim-field-of-a-current: the scene could not be built', e); S = null; } }
    if (V && S) {
      paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
      if (S.labs.I) S.labs.I.style.color = C('current');
      if (S.labs.B) S.labs.B.style.color = C('magnetic-field');
      if (S.labs.r) S.labs.r.style.color = C('position');
      if (S.labs.R) S.labs.R.style.color = C('position');
      if (S.labs.N) { S.labs.N.style.color = PAL.ink; S.labs.S.style.color = PAL.ink; }
      V.headline(headlineOf(st));
      V.invalidate();
    }
    const { ctx } = begin(d.c);
    if (!V) drawFlat(ctx, st);
    drawGraph(ctx, st, V ? 40 : 456);
    if (st.a === 'wire') {
      readout(d.readout,
        `\\kBmag = \\frac{\\mu_0\\kIcur}{2\\pi\\kr} = \\frac{(4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.I, 0)}\\ \\text{A})}{2\\pi(${fmt(st.r, 3)}\\ \\text{m})} = ${sciTex(st.B, 2)}\\ \\text{T}`,
        `The figure opens on Example 22.6: a current of 25 A makes 1.00 × 10⁻⁴ T at 5.0 cm, which is twice the Earth’s field of about 5 × 10⁻⁵ T, and that is why an overhead power line disturbs a surveyor’s compass. The field lines are circles centered on the wire, and because the wire is long the picture is the same everywhere along it. Point the thumb of your right hand along the wire the way the current runs, and your fingers curl the way the field goes.`);
    } else if (st.a === 'loop') {
      readout(d.readout,
        `\\kBmag = \\frac{N\\mu_0\\kIcur}{2\\kR} = \\frac{(${fmt(st.N, 0)})(4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.I, 0)}\\ \\text{A})}{2(${fmt(st.R, 3)}\\ \\text{m})} = ${sciTex(st.B, 2)}\\ \\text{T}`,
        `The loop opens on the same 25 A at the same 5.0 cm as the straight wire, so the two results can be read against each other: closing the wire into a circle multiplies the field at the center by π, since every part of the loop is now curling its field the same way through the middle. Each field line closes around the wire itself, and the ones large enough to pass through the hole are what makes the loop look like a small bar magnet from outside.`);
    } else {
      readout(d.readout,
        `\\kBmag = \\mu_0 n\\kIcur = (4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.n, 0)}\\ \\text{m}^{-1})(${fmt(st.I, 0)}\\ \\text{A}) = ${fmt(st.B, 2)}\\ \\text{T}`,
        `The solenoid opens on Example 22.7, a coil 2.00 m long of 2000 turns carrying 1600 A, which is ${fmt(st.n, 0)} turns per meter here and holds ${fmt(st.B, 2)} T through the whole of its interior. The winding is drawn one turn to every hundred the meter really holds, so that the turns can be told apart; at this setting the coil has ${fmt(st.N, 0)} turns in its 2.00 m. There is no radius in the formula at all, which is why a solenoid is how a strong and uniform field over a large volume is made.`);
    }
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 620, dist: 7.0, tilt: 0.34, spin: 'off',
      views: [{ label: 'three quarters on', yaw: -0.55, pitch: 0.34 }, { label: 'along the wire', yaw: 1.50, pitch: 0.03 }, { label: 'from above', yaw: 0, pitch: 1.45 }],
      pitch: [-0.30, 1.50], yaw: 'free', zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { g3 = V.part(0); V.setView(-0.55, 0.34); d.stage.appendChild(d.c); }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-field-of-a-current-tour · a story slider (layer C) · mathematical 3D
   (root rule 28.3): ink and the type hues, flat unlit colour, no materials.
   The figure above told as one story on a slider s: at 0 the camera looks
   down a straight wire at its circles, at 1 it has turned to three quarters
   where the circles are rings all along the wire, at 2 the wire has bent into
   a loop and at 3 the loop has stacked into a solenoid. The camera, the bend,
   the stacking, the fades between the three arrangements and the morph of the
   formula are functions of s; the current, the distances and the turns are
   the reader's, and the story never moves them.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const H2D = hasGL ? 360 : 780;
  const d = sim('sim-field-of-a-current-tour', H2D);
  const STOPS = [{ v: 0, label: 'along the wire' }, { v: 1, label: 'the wire' }, { v: 2, label: 'a loop' }, { v: 3, label: 'a solenoid' }];
  const sS = ctl(d.controls, { label: '\\text{the wire}', cls: '', min: 0, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: 'how far the story has gone, from the straight wire seen along its length, through the loop, to the solenoid' });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 5, max: 50, step: 1, value: 25, unit: 'A', dec: 0, aria: 'the current in the wire or the loop' });
  const iBox = lastLabel(d.controls);
  const rS = ctl(d.controls, { label: '\\kr', cls: 'position', min: 2, max: 12, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'the shortest distance from the wire to the point where the field is wanted' });
  const rBox = lastLabel(d.controls);
  const RS = ctl(d.controls, { label: '\\kR', cls: 'position', min: 2, max: 12, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'the radius of the circular loop' });
  const RBox = lastLabel(d.controls);
  const NS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 4, step: 1, value: 1, unit: 'turns', dec: 0, detents: [1, 2, 3, 4], aria: 'the number of turns in the flat coil' });
  const NBox = lastLabel(d.controls);
  const iSol = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 200, max: 2000, step: 50, value: 1600, unit: 'A', dec: 0, aria: 'the current in the solenoid' });
  const iSolBox = lastLabel(d.controls);
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 400, max: 2000, step: 50, value: 1000, unit: '/m', dec: 0, aria: 'the number of turns per meter of the solenoid' });
  const nBox = lastLabel(d.controls);
  const handC = choice(d.controls, { label: '\\text{the right hand}', options: [{ value: 'on', label: 'shown' }, { value: 'off', label: 'hidden' }], value: 'on', aria: 'whether the right hand of rule 2 is drawn gripping the wire' });

  /* ---------- the story: which arrangement s is at, and how present each one's own parts are ---------- */
  const arrOf = (s) => (s < 1.5 ? 'wire' : s < 2.5 ? 'loop' : 'sol');
  const ramp = (s, a, b) => F.ease.smooth(clamp((s - a) / (b - a), 0, 1));
  const setA = (s) => ({ wire: 1 - ramp(s, 1.15, 1.4), loop: ramp(s, 1.6, 1.85) * (1 - ramp(s, 2.15, 2.4)), sol: ramp(s, 2.6, 2.85) });
  /* a part arriving slides in from before its stop, and one leaving slides on past it */
  const CENTRE = { wire: 0, loop: 2, sol: 3 };
  const slide = (a, s, A) => (1 - A[a]) * (s < CENTRE[a] ? -1 : 1);

  /* the reader's controls for each arrangement, swapped with a fade */
  const BOXES = { wire: [iBox, rBox], loop: [iBox, RBox, NBox], sol: [iSolBox, nBox] };
  const ALL = [iBox, rBox, RBox, NBox, iSolBox, nBox];
  let shown = '';
  function showControls(a, ms = 500) {
    if (a === shown) return;
    shown = a;
    ALL.forEach((b) => {
      if (BOXES[a].includes(b)) { b.style.display = ''; F.fadeEl(b, true, { ms, shift: [0, 8] }); return; }
      F.fadeEl(b, false, { ms, shift: [0, 8] });
      setTimeout(() => { if (b.style.opacity === '0') b.style.display = 'none'; }, ms);
    });
  }
  showControls(arrOf(sS.v), 0);

  const SOL_L = 2.00;
  const RHO = (cm) => (1.7 * cm) / 12;
  const stOf = (a) => {
    if (a === 'wire') { const r = rS.v / 100, I = iS.v; return { a, I, r, B: (MU0 * I) / (TAU * r) }; }
    if (a === 'loop') { const R = RS.v / 100, I = iS.v, N = NS.v; return { a, I, R, N, B: (N * MU0 * I) / (2 * R) }; }
    const I = iSol.v, n = nS.v;
    return { a, I, n, N: Math.round(n * SOL_L), B: MU0 * n * I };
  };
  const headlineOf = (st) => {
    if (st.a === 'wire') return `A current of ${fmt(st.I, 0)} A makes ${sci(st.B, 2)} T at ${fmt(rS.v, 1)} cm from the wire, in circles centered on it.`;
    if (st.a === 'loop') return st.N === 1
      ? `The same current, closed into a loop of radius ${fmt(RS.v, 1)} cm, makes ${sci(st.B, 2)} T at its center.`
      : `${fmt(st.N, 0)} turns of radius ${fmt(RS.v, 1)} cm carrying ${fmt(st.I, 0)} A make ${sci(st.B, 2)} T at the center.`;
    return `A solenoid of ${fmt(st.n, 0)} turns per meter carrying ${fmt(st.I, 0)} A holds ${fmt(st.B, 2)} T all through its interior, and almost nothing outside.`;
  };

  /* ---------- the scene, in the Manim look: flat colour, round-ended tubes, no plates ---------- */
  let V = null, S = null, g3 = null, key = '';
  const paint = [];
  const pmat = (col, op = 1) => {
    const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(col()), transparent: op < 1, opacity: op, depthWrite: op >= 1 });
    paint.push({ m, col }); return m;
  };
  const V3 = (p) => new THREE.Vector3(p[0], p[1], p[2]);
  /* a stroke along pts as a tube of radius r, with round ends where it is open */
  function tube(g, pts, r, col, op = 1, closed = false) {
    if (pts.length < 2 || op <= 0.01) return null;
    const m = pmat(col, op);
    const t = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(V3), closed), Math.max(8, pts.length), r, 8, closed), m);
    g.add(t);
    if (!closed) [pts[0], pts[pts.length - 1]].forEach((p) => { const c = new THREE.Mesh(F.mesh.geo().sphere, m); c.position.copy(V3(p)); c.scale.setScalar(r); g.add(c); });
    return t;
  }
  /* an arrow along the path pts, its plain cone tip on the last point */
  function parrow(g, pts, r, col, op = 1, name) {
    if (pts.length < 2 || op <= 0.01) return;
    const B = V3(pts[pts.length - 1]), A = V3(pts[Math.max(0, pts.length - 3)]);
    let L = 0; for (let i = 1; i < pts.length; i++) L += V3(pts[i]).distanceTo(V3(pts[i - 1]));
    if (L < 0.03) return;
    const hl = Math.min(0.26, L * 0.45), u = B.clone().sub(A).normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
    const shaft = F.partial(pts, (L - hl * 0.8) / L);
    const t = tube(g, shaft.length >= 2 ? shaft : [pts[0], base.toArray()], r, col, op);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col, op));
    cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
    cone.scale.set(r * 3.4, hl, r * 3.4); g.add(cone);
    if (name) { if (t) V.pickable(t, name); V.pickable(cone, name); }
  }
  const seg = (a, b) => [a, b];
  const lab = (s, p, g, dy, col, op = 1) => {
    if (op <= 0.01) return null;
    const e = V.label(s, p, g, dy);
    e.style.fontWeight = '600'; e.style.color = col; e.style.background = 'transparent'; e.style.border = 'none'; e.style.opacity = String(op);
    return e;
  };
  const INK = () => PAL.ink, MUT = () => PAL.muted;
  const BC = () => C('magnetic-field'), IC = () => C('current'), PC = () => C('position');
  const OP = 0.45, THIN = 0.009, MAIN = 0.017, WIRE_R = 0.026;
  const stag = (k, i, n, lag = 0.12) => clamp((k - i * lag) / (1 - (n - 1) * lag), 0, 1);
  const lerp = (a, b, k) => a + (b - a) * k;
  const lerp3 = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)];
  const scale3 = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const circle = (c, q, u, v, n = 72) => { const pts = []; for (let i = 0; i <= n; i++) { const t = (i / n) * TAU; pts.push(add3(add3(c, u, q * Math.cos(t)), v, q * Math.sin(t))); } return pts; };

  /* The right hand of rule 2, in a frame with the wire along y and the forearm leaving along +x:
     the thumb lies along the wire the way the current runs, and the four fingers leave the palm and
     curl round the far side of the wire, which for a right hand is the way the field goes. Parts
     are ellipsoids (c, radii) and round-ended segments (a, b, r); lengths in scene units. */
  const HAND = (() => {
    const P = [], RG = 0.056, zP = -RG - 0.004;
    const E = (c, r, n) => P.push({ c, r, n }), K = (a, b, r, n) => P.push({ a, b, r, n });
    E([0.115, -0.090, zP], [0.125, 0.098, 0.030], 'the palm of the right hand');
    E([0.130, -0.012, zP + 0.016], [0.062, 0.050, 0.032], 'the palm of the right hand');
    K([0.225, -0.088, zP], [0.34, -0.090, zP - 0.002], 0.056, 'the wrist');
    [[-0.024, 0.020, 1.0], [-0.068, 0.021, 1.08], [-0.112, 0.020, 1.02], [-0.152, 0.017, 0.84]].forEach(([y, r, len]) => {
      const q = [0, 1.7, 2.9, 3.9].map((t) => -Math.PI / 2 - t * len).map((t) => [RG * Math.cos(t), y, RG * Math.sin(t)]);
      for (let i = 0; i < 3; i++) K(q[i], q[i + 1], r * (1 - 0.07 * i), 'the fingers, curling the way the magnetic field goes');
    });
    const th = [[0.140, -0.035, zP + 0.016], [0.074, 0.030, -0.036], [0.050, 0.098, -0.030], [0.042, 0.160, -0.026]];
    [0.026, 0.024, 0.022].forEach((r, i) => K(th[i], th[i + 1], r, 'the thumb, pointing the way the current runs'));
    return P;
  })();
  /* Drawn after the field: a depth pass, then an ink outline from the back faces of a slightly
     larger hand, then the half-opacity fill, so the field behind shows through the fill and the
     overlapping parts read as one hand rather than a stack. */
  function buildHand(g, grip, iDir, outDir, hs, op) {
    if (handC.value !== 'on' || op <= 0.01) return;
    const h = new THREE.Group(), G = F.mesh.geo(), D = 0.0065;
    const pre = new THREE.MeshBasicMaterial({ colorWrite: false, transparent: true, depthWrite: true });
    const hull = new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.ink), side: THREE.BackSide, transparent: true, opacity: op, depthWrite: false });
    const fill = new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.muted), transparent: true, opacity: 0.5 * op, depthWrite: false });
    paint.push({ m: hull, col: INK }, { m: fill, col: MUT });
    const add = (geo, mat, order, name, place) => { const m = new THREE.Mesh(geo, mat); m.renderOrder = order; place(m); h.add(m); if (name) V.pickable(m, name); };
    [[pre, 10, 0], [hull, 11, D], [fill, 12, 0]].forEach(([mat, order, dd]) => HAND.forEach((p) => {
      const name = mat === fill ? p.n : null;
      if (p.c) { add(G.sphere, mat, order, name, (m) => { m.position.set(p.c[0], p.c[1], p.c[2]); m.scale.set(p.r[0] + dd, p.r[1] + dd, p.r[2] + dd); }); return; }
      add(G.cyl, mat, order, name, (m) => { m.scale.set(p.r + dd, 1, p.r + dd); F.mesh.setStick(m, p.a, p.b); });
      [p.a, p.b].forEach((q) => add(G.sphere, mat, order, name, (m) => { m.position.set(q[0], q[1], q[2]); m.scale.setScalar(p.r + dd); }));
    }));
    const u = new THREE.Vector3(...unit3(outDir)), t = new THREE.Vector3(...unit3(iDir));
    const w = new THREE.Vector3().crossVectors(u, t);
    h.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, t, w));
    h.position.set(grip[0], grip[1], grip[2]); h.scale.setScalar(hs);
    g.add(h);
  }

  /* where the loop's hand grips it and where its radius is drawn, as angles round the loop */
  /* The loop is seen from LOOP_YAW, so the plane through its axis at that azimuth faces the reader:
     its field lines are drawn there, at the loop's right and left (TH_R, TH_L), the hand grips
     the front (TH_F), the current is marked coming round to it from the left and R runs back right. */
  const LOOP_YAW = -0.5, TH_R = Math.PI / 2 - LOOP_YAW, TH_L = TH_R - Math.PI, TH_F = -LOOP_YAW;
  const HAND_AZ = TH_F, R_AZ = TH_R + 0.8, I_AZ = [TH_F - 1.25, TH_F - 0.55], FIELD_AL = [LOOP_YAW, LOOP_YAW + Math.PI];
  const HS_WIRE = 2.4, HS_SOL = 1.4;
  const loopScale = (rho) => clamp(rho / RHO(5), 0.5, 1.3), loopHand = (rho) => 1.7 * loopScale(rho);

  function build() {
    if (!V || !V.scene || !g3) return;
    V.clear(); paint.length = 0;
    const s = sS.v, A = setA(s);
    S = { labs: [] };
    if (s <= 2) buildLine(clamp(s - 1, 0, 1), s, A); else buildSolenoid(s - 2, A);
    V.invalidate();
  }
  const keep = (e, col) => { if (e) S.labs.push({ e, col }); };

  /* One wire that bends. At b = 0 it is the straight wire along x, six units
     long; at b = 1 it is the loop of radius rho lying flat and centred on the
     origin. Between, it is an arc of constant curvature b/rho and of length
     running from 6 to 2π rho, so the bend is continuous and the rings round the
     wire ride along with it until they are the loop's own field lines. */
  function bendOf(b, rho) {
    const L = lerp(6.0, TAU * rho, b), kap = b / rho;
    const P = (s) => (kap < 1e-4 ? [s, 0, 0] : [Math.sin(kap * s) / kap, 0, -(1 - Math.cos(kap * s)) / kap + b * rho]);
    const T = (s) => [Math.cos(kap * s), 0, -Math.sin(kap * s)];
    const Out = (s) => [Math.sin(kap * s), 0, Math.cos(kap * s)];
    const path = (s0, s1, n = 60) => Array.from({ length: n + 1 }, (_, i) => P(s0 + ((s1 - s0) * i) / n));
    return { L, P, T, Out, path };
  }

  function buildLine(b, s, A) {
    const rhoL = RHO(RS.v), W = bendOf(b, rhoL), UP = [0, 1, 0];
    const closed = b > 0.999, N = closed ? NS.v : 1;
    for (let k = 0; k < N; k++) {
      const dq = (k - (N - 1) / 2) * 0.052;
      const wire = closed ? tube(g3, circle([0, 0, 0], rhoL + dq, [0, 0, 1], [1, 0, 0], 96), WIRE_R, INK, 1, true) : tube(g3, W.path(-W.L / 2, W.L / 2, 96), WIRE_R, INK);
      if (wire) V.pickable(wire, b < 0.5 ? 'the long straight wire' : N === 1 ? 'the loop of wire' : 'one turn of the flat coil');
    }
    /* the current, an arrow along the wire that shortens to the loop's own arrow */
    const i0 = lerp(0.7, I_AZ[0] * rhoL, b), i1 = lerp(2.5, I_AZ[1] * rhoL, b);
    const sc = loopScale(rhoL);
    parrow(g3, W.path(i0, i1, 40), lerp(0.040, 0.032 * sc, b), IC, 1, 'I, the current');
    keep(lab('I = ' + fmt(iS.v, 0) + ' A', add3(add3(W.P(i1), UP, 0.26), W.Out(i1), 0.55), g3, 0, C('current')), IC);
    /* the rings round the wire: three at its middle, and as the camera turns, three more swept out to
       each side; as the wire bends, two sets slide to the loop's right and left and the third leaves */
    const ringAt = (at, q, op) => tube(g3, circle(W.P(at), q, W.Out(at), UP, 72), MAIN, BC, op, true);
    const qs = [lerp(RHO(4), 0.30 * rhoL, b), lerp(RHO(8), 0.62 * rhoL, b), RHO(12)];
    const ops = [OP, OP, OP * (1 - b)];
    const w = clamp(s, 0, 1);
    qs.forEach((q, i) => ringAt(lerp(0, TH_L * rhoL, b), q, ops[i]));
    if (w > 0) qs.forEach((q, i) => ringAt(lerp((W.L / 4) * w, TH_R * rhoL, b), q, ops[i] * Math.min(1, w * 3)));
    if (w > 0) qs.forEach((q, i) => ringAt(-(W.L / 4) * w, q, ops[i] * Math.min(1, w * 3) * (1 - b)));
    /* the loop's large field lines, up through the hole and back round outside */
    if (b > 0) FIELD_AL.forEach((al) => {
      const e = [Math.cos(al), 0, Math.sin(al)];
      tube(g3, oval(add3([0, 0, 0], e, 1.125 * rhoL), 0.975 * rhoL, 0.90 * rhoL, e, UP, 64), THIN, BC, OP * b * b, true);
    });
    /* the loop's centre: the field there grows up through the hole with the bend */
    if (b > 0) parrow(g3, seg([0, -0.56 * rhoL, 0], [0, (-0.56 + 1.56 * b) * rhoL, 0]), 0.034 * sc, BC, 1, 'B, the magnetic field at the center of the loop');

    /* the wire's own parts: the circle through the field point, the field there, r, and the hand */
    const ow = A.wire;
    if (ow > 0.01) {
      const rho = RHO(rS.v), c0 = W.P(0), O = W.Out(0);
      const at = (t) => add3(add3(c0, UP, rho * Math.sin(t)), O, rho * Math.cos(t));
      const fld = (t) => add3(scale3(UP, -Math.cos(t)), O, Math.sin(t));
      tube(g3, circle(c0, rho, O, UP, 72), MAIN, BC, ow, true);
      const tP = -2.0, p = at(tP);
      [0.6, 2.4].forEach((t) => parrow(g3, seg(at(t), add3(at(t), fld(t), 0.36)), 0.022, BC, ow, 'the magnetic field, tangent to the circle'));
      parrow(g3, seg(p, add3(p, fld(tP), 0.66)), 0.032, BC, ow, 'B, the magnetic field at this point');
      tube(g3, seg(c0, p), 0.013, PC, ow);
      F.mesh.sphere(g3, p, 0.05, PAL.ink);
      const st = stOf('wire');
      keep(lab('B = ' + sci(st.B, 2) + ' T', p, g3, -30, C('magnetic-field'), ow), BC);
      keep(lab('r = ' + fmt(rS.v, 1) + ' cm', add3(add3(lerp3(c0, p, 0.55), fld(tP), -0.42), W.T(0), -0.3), g3, 0, C('position'), ow), PC);
      const sh = -1.9;
      buildHand(g3, W.P(sh), W.T(sh), scale3(UP, -1), HS_WIRE, ow * ramp(s, 0.25, 0.75));
    }
    /* the loop's own parts, round the centre of the arc as it closes: R, the value at the centre, and the hand */
    const ol = A.loop;
    if (ol > 0.01 && b > 0.5) {
      const cc = [0, 0, rhoL * (b - 1 / b)], sr = clamp((R_AZ * rhoL) / b, -W.L / 2, W.L / 2), pR = W.P(sr);
      tube(g3, seg(cc, pR), 0.014, PC, ol);
      const st = stOf('loop');
      keep(lab('B = ' + sci(st.B, 2) + ' T', add3(add3(cc, UP, 0.75 * rhoL), [Math.sin(TH_L), 0, Math.cos(TH_L)], 0.56 * rhoL), g3, 0, C('magnetic-field'), ol), BC);
      keep(lab('R = ' + fmt(RS.v, 1) + ' cm', lerp3(cc, pR, 0.8), g3, 12, C('position'), ol), PC);
      const sh = (HAND_AZ * rhoL) / b;
      buildHand(g3, W.P(sh), W.T(sh), W.Out(sh), loopHand(rhoL), ramp(s, 1.6, 1.85));
    }
  }

  /* The loop stacks into the solenoid. The helix is built along x in a group
     turned a quarter about z at k = 0, which stands its axis upright where the
     loop's is and puts turn angle u where the loop has angle u; as k runs to 1
     the turns spread along the axis, the radius goes from the loop's to the
     coil's and the group turns the axis level. */
  function buildSolenoid(k, A) {
    const a = 0.55, HX = 1.6, turns = Math.round(nS.v / 100), rhoL = RHO(RS.v), UP = [0, 1, 0];
    const sub = new THREE.Group(); sub.rotation.z = (1 - k) * Math.PI / 2; g3.add(sub);
    const rr = lerp(rhoL, a, k), npt = turns * 26, pts = [], sc = loopScale(rhoL);
    const at = (s) => { const u = TAU * turns * s; return [k * (-HX + 2 * HX * s), -rr * Math.sin(u), rr * Math.cos(u)]; };
    for (let i = 0; i <= npt; i++) pts.push(at(i / npt));
    const coil = tube(sub, pts, 0.022, INK); if (coil) V.pickable(coil, 'the winding of the solenoid');
    const onTurn = (m, th) => (Math.round(m * turns) + th / TAU) / turns;
    parrow(sub, Array.from({ length: 21 }, (_, i) => at(onTurn(0.62, lerp(I_AZ[0], I_AZ[1], i / 20)))), lerp(0.032 * sc, 0.030, k), IC, 1, 'I, the current in the winding');
    const pI = at(onTurn(0.62, I_AZ[1]));
    keep(lab('I = ' + fmt(iSol.v, 0) + ' A', [pI[0], a + 0.34, 0.2], sub, 0, C('current'), A.sol), IC);
    keep(lab('I = ' + fmt(iS.v, 0) + ' A', add3(add3(pI, [1, 0, 0], 0.26), unit3([0, pI[1], pI[2]]), 0.55), sub, 0, C('current'), 1 - ramp(k + 2, 2.3, 2.5)), IC);
    /* the loop's field lines leave as the turns spread */
    if (k < 1) FIELD_AL.forEach((al) => {
      const e = [Math.cos(al), 0, Math.sin(al)];
      [[rhoL, 0.30 * rhoL, 0.30 * rhoL], [rhoL, 0.62 * rhoL, 0.62 * rhoL], [1.125 * rhoL, 0.975 * rhoL, 0.90 * rhoL]].forEach(([cc, A2, Bh]) =>
        tube(g3, oval(add3([0, 0, 0], e, cc), A2, Bh, e, UP, 64), THIN, BC, OP * (1 - k), true));
    });
    /* the field inside: the loop's own arrow stretches down the axis, and four more grow beside it */
    const tip = lerp(1.0 * rhoL, 1.25, k);
    parrow(sub, seg([lerp(-0.56 * rhoL, -1.25, k), 0, 0], [tip, 0, 0]), lerp(0.034 * sc, 0.030, k), BC, 1, 'B, the field inside the solenoid, the same everywhere in the interior');
    if (k > 0.02) [[0.30, 0], [-0.30, 0], [0, 0.30], [0, -0.30]].forEach(([dy, dz], i) => {
      const g = stag(k, i, 4, 0.1);
      if (g > 0) parrow(sub, seg([-1.25, dy, dz], [-1.25 + 2.5 * g, dy, dz]), 0.024, BC, 1, 'B, the field inside the solenoid, the same everywhere in the interior');
    });
    [[0, 1, 0], [0, -1, 0]].forEach((nrm) =>
      [[2.10, 0.38], [2.52, 0.78]].forEach(([A2, Bh]) => tube(sub, oval(add3([0, 0, 0], nrm, a), A2, Bh, [1, 0, 0], nrm, 72), THIN, BC, OP * k * k, true)));
    /* the loop's labels leave with it, and the solenoid's arrive */
    if (A.loop > 0.01) {
      const stL = stOf('loop'), pR = at(onTurn(0.5, R_AZ));
      tube(sub, seg([pR[0], 0, 0], pR), 0.014, PC, A.loop);
      keep(lab('B = ' + sci(stL.B, 2) + ' T', [0.75 * rhoL, -0.56 * rhoL * Math.sin(TH_L), 0.56 * rhoL * Math.cos(TH_L)], sub, 0, C('magnetic-field'), A.loop), BC);
      keep(lab('R = ' + fmt(RS.v, 1) + ' cm', lerp3([pR[0], 0, 0], pR, 0.8), sub, 12, C('position'), A.loop), PC);
    }
    const st = stOf('sol');
    keep(lab('B = ' + fmt(st.B, 2) + ' T', [0, -a - 0.5, 0.4], sub, 0, C('magnetic-field'), A.sol), BC);
    keep(lab('N', [HX + 0.46, 0, 0], sub, 0, PAL.ink, A.sol), INK);
    keep(lab('S', [-HX - 0.46, 0, 0], sub, 0, PAL.ink, A.sol), INK);
    /* the loop's hand rides one middle turn as the loop becomes the coil */
    const sh = onTurn(0.5, HAND_AZ), e = 0.5 / npt;
    const ph = at(sh), tg = add3(at(sh + e), at(sh - e), -1);
    buildHand(sub, ph, tg, unit3([0, ph[1], ph[2]]), lerp(loopHand(rhoL), HS_SOL, k), 1);
  }

  /* ---------- the arrangement flat, where there is no WebGL for the scene ---------- */
  function ovalPath(ctx, cx, cy, A, B, col, w) {
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.ellipse(cx, cy, A, B, 0, 0, TAU); ctx.stroke(); ctx.restore();
  }
  function drawFlat(ctx, st) {
    const cx = 700, cy = 262;
    if (st.a === 'wire') {
      const K = 150 / RHO(12), rho = RHO(rS.v) * K;
      [4, 8, 12].forEach((cm) => { const R = RHO(cm); ovalPath(ctx, cx, cy, R * K, R * K, alpha(C('magnetic-field'), 0.5), 2.5); });
      ovalPath(ctx, cx, cy, rho, rho, C('magnetic-field'), 4);
      /* the wire runs out of the page, drawn as 22.3 draws a vector coming toward the reader */
      dot(ctx, cx, cy, C('current'), true, 11);
      ovalPath(ctx, cx, cy, 20, 20, C('current'), 3.5);
      text(ctx, 'I = ' + fmt(st.I, 0) + ' A, out of the page', cx + 30, cy - 26, C('current'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      const px = cx + rho * 0.72, py = cy + rho * 0.69;
      line(ctx, cx, cy, px, py, C('position'), 3);
      dot(ctx, px, py, PAL.ink, true, 8);
      text(ctx, 'r = ' + fmt(rS.v, 1) + ' cm', (cx + px) / 2 + 8, (cy + py) / 2 + 20, C('position'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
      arrow(ctx, px, py, px + 52, py - 54, C('magnetic-field'), 5);
      text(ctx, 'B = ' + sci(st.B, 2) + ' T', px + 58, py - 74, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    } else if (st.a === 'loop') {
      const K = 150 / RHO(12), rho = RHO(RS.v) * K;
      [1, -1].forEach((s) => {
        [[rho, 0.30 * rho, 0.30 * rho], [rho, 0.62 * rho, 0.62 * rho], [1.125 * rho, 0.975 * rho, 0.90 * rho]].forEach(([c, A, B]) =>
          ovalPath(ctx, cx + s * c, cy, A, B, alpha(C('magnetic-field'), 0.5), 2.5));
        for (let k = 0; k < st.N; k++) {
          const xk = cx + s * (rho + (k - (st.N - 1) / 2) * 5);
          if (s > 0) { dot(ctx, xk, cy, C('current'), true, 9); }
          else { ctx.save(); ctx.strokeStyle = C('current'); ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(xk - 6, cy - 6); ctx.lineTo(xk + 6, cy + 6); ctx.moveTo(xk + 6, cy - 6); ctx.lineTo(xk - 6, cy + 6); ctx.stroke(); ctx.restore(); }
        }
      });
      text(ctx, 'I = ' + fmt(st.I, 0) + ' A, out of the page here', cx + rho + 24, cy + 26, C('current'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, 'and into it there', cx - rho - 24, cy + 26, C('current'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
      arrow(ctx, cx, cy + 46, cx, cy - 104, C('magnetic-field'), 5);
      text(ctx, 'B = ' + sci(st.B, 2) + ' T', cx + 14, cy - 92, C('magnetic-field'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      line(ctx, cx, cy, cx + rho, cy, C('position'), 3);
      text(ctx, 'R = ' + fmt(RS.v, 1) + ' cm', cx + rho / 2, cy - 18, C('position'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    } else {
      const HX = 300, a = 80, turns = Math.round(st.n / 100);
      for (let k = 0; k < turns; k++) {
        const x = cx - HX + ((2 * HX) / (turns - 1)) * k;
        dot(ctx, x, cy - a, C('current'), true, 7);
        ctx.save(); ctx.strokeStyle = C('current'); ctx.lineWidth = 3; ctx.beginPath();
        ctx.moveTo(x - 5, cy + a - 5); ctx.lineTo(x + 5, cy + a + 5); ctx.moveTo(x + 5, cy + a - 5); ctx.lineTo(x - 5, cy + a + 5); ctx.stroke(); ctx.restore();
      }
      [-46, 0, 46].forEach((dy) => arrow(ctx, cx - 250, cy + dy, cx + 250, cy + dy, C('magnetic-field'), 4));
      [1, -1].forEach((s) => [[330, 36], [380, 66]].forEach(([A, B]) => ovalPath(ctx, cx, cy + s * a, A, B, alpha(C('magnetic-field'), 0.5), 2.5)));
      text(ctx, 'N', cx + HX + 64, cy, PAL.ink, { size: 24, weight: 600, align: 'center' });
      text(ctx, 'S', cx - HX - 64, cy, PAL.ink, { size: 24, weight: 600, align: 'center' });
      text(ctx, 'I = ' + fmt(st.I, 0) + ' A', cx, cy - a - 34, C('current'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, 'B = ' + fmt(st.B, 2) + ' T', cx, cy - 70, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    }
    text(ctx, 'This browser cannot turn the scene, so the arrangement is drawn flat: the wire end-on, the loop and the coil in section.', 700, 440, PAL.muted, { size: 17, align: 'center' });
  }

  /* ---------- the graph below the scene ----------
     The axes are fixed per arrangement and never rescale: the wire runs to 12 cm
     and 5 × 10⁻⁴ T, the loop to 12 cm and 20 × 10⁻⁴ T, and the solenoid to 2000
     turns per metre and 5 T. A curve that leaves the frame is clipped to it and
     the live point goes through pinned(). */
  function drawGraph(ctx, st, y0) {
    const box = { l: 180, r: 1270, t: y0 + 54, b: y0 + 238 };
    const clipped = (fn) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); fn(); ctx.restore(); };
    if (st.a === 'wire') {
      const { X, Y } = axes(ctx, box, [0, 12], [0, 5], {
        xl: 'r, the shortest distance to the wire (cm)', xc: C('position'), yl: 'B (10⁻⁴ T)', yc: C('magnetic-field'),
        nx: 6, ny: 5, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      });
      const t0 = Math.max(0.8, ((MU0 * st.I) / (TAU * 5e-4)) * 100);
      clipped(() => curve(ctx, (t) => (MU0 * st.I) / (TAU * (t / 100)) / 1e-4, t0, 12, X, Y, C('magnetic-field'), 5, 140));
      const p = pinned(ctx, box, X, Y, rS.v, st.B / 1e-4, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'the field falls off as one over the distance, not as one over its square', box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' });
    } else if (st.a === 'loop') {
      const { X, Y } = axes(ctx, box, [0, 12], [0, 20], {
        xl: 'R, the radius of the loop (cm)', xc: C('position'), yl: 'B (10⁻⁴ T)', yc: C('magnetic-field'),
        nx: 6, ny: 5, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      });
      const t0 = Math.max(0.8, ((st.N * MU0 * st.I) / (2 * 20e-4)) * 100);
      clipped(() => curve(ctx, (t) => (st.N * MU0 * st.I) / (2 * (t / 100)) / 1e-4, t0, 12, X, Y, C('magnetic-field'), 5, 140));
      const p = pinned(ctx, box, X, Y, RS.v, st.B / 1e-4, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'the larger the loop, the weaker its center, because the current is farther away', box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' });
    } else {
      const { X, Y } = axes(ctx, box, [0, 2000], [0, 5], {
        xl: 'n, the number of turns per meter (1/m)', xc: PAL.ink, yl: 'B (T)', yc: C('magnetic-field'),
        nx: 4, ny: 5, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      });
      clipped(() => curve(ctx, (t) => MU0 * t * st.I, 0, 2000, X, Y, C('magnetic-field'), 5, 60));
      const p = pinned(ctx, box, X, Y, st.n, st.B, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'no radius enters it: the field grows straight with the turns per meter', box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' });
    }
  }
  /* each arrangement's own layer, at its presence and slid by its shift */
  function layer(ctx, a, s, A, fn) {
    if (A[a] <= 0.01) return;
    ctx.save(); ctx.globalAlpha = A[a]; ctx.translate(0, 18 * slide(a, s, A)); fn(); ctx.restore();
  }

  /* ---------- the readout: the law, set large, morphing by shape between the arrangements; the numbers on their own line ---------- */
  const fx = el('div'), nums = el('div'), note = el('small');
  fx.style.fontSize = '1.75em'; fx.style.margin = '0.1em 0 0.3em';
  d.readout.append(fx, nums, note);
  const LAW = {
    wire: () => '\\mk{B}{\\kBmag} = \\frac{\\mk{mu}{\\mu_0}\\mk{I}{\\kIcur}}{\\mk{two}{2}\\mk{pi}{\\pi}\\mk{r}{\\kr}}',
    loop: () => `\\mk{B}{\\kBmag} = \\frac{${NS.v > 1 ? '\\mk{N}{N}' : ''}\\mk{mu}{\\mu_0}\\mk{I}{\\kIcur}}{\\mk{two}{2}\\mk{R}{\\kR}}`,
    sol: () => '\\mk{B}{\\kBmag} = \\mk{mu}{\\mu_0}\\mk{n}{n}\\mk{I}{\\kIcur}',
  };
  const numsOf = (st) => {
    if (st.a === 'wire') return `\\kBmag = \\frac{(4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.I, 0)}\\ \\text{A})}{2\\pi(${fmt(st.r, 3)}\\ \\text{m})} = ${sciTex(st.B, 2)}\\ \\text{T}`;
    if (st.a === 'loop') return `\\kBmag = \\frac{${st.N === 1 ? '' : `(${fmt(st.N, 0)})`}(4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.I, 0)}\\ \\text{A})}{2(${fmt(st.R, 3)}\\ \\text{m})} = ${sciTex(st.B, 2)}\\ \\text{T}`;
    return `\\kBmag = (4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.n, 0)}\\ \\text{m}^{-1})(${fmt(st.I, 0)}\\ \\text{A}) = ${fmt(st.B, 2)}\\ \\text{T}`;
  };
  const NOTE = {
    wire: 'The field lines are circles centered on the wire, and because the wire is long the picture is the same everywhere along it. Point the thumb of your right hand along the wire the way the current runs, and your fingers curl the way the field goes.',
    loop: 'Bent into a circle, every part of the wire curls its field the same way through the middle, so the circles crowd together at the center and the field there is π times the straight wire’s at the same distance. The thumb along the current, the fingers curl up through the loop.',
    sol: 'Stacked side by side, the loops add their fields inside and cancel them outside, so the field is uniform through the whole interior. No radius enters the formula. The winding is drawn one turn to every hundred the meter really holds.',
  };
  let numsNow = '', noteNow = '';
  const win = (s, a, b) => clamp((s - a) / (b - a), 0, 1);
  function readoutOf(s, A) {
    if (s < 2) F.morphAt(fx, LAW.wire(), LAW.loop(), win(s, 1.35, 1.65), { keyMap: { r: 'R' } });
    else F.morphAt(fx, LAW.loop(), LAW.sol(), win(s, 2.35, 2.65), NS.v > 1 ? { keyMap: { N: 'n' } } : {});
    const a = arrOf(s), n = numsOf(stOf(a));
    if (n !== numsNow) { numsNow = n; tex(nums, n); }
    if (NOTE[a] !== noteNow) { noteNow = NOTE[a]; note.textContent = noteNow; }
    nums.style.opacity = note.style.opacity = String(A[a]);
  }

  /* ---------- the camera: keyframes on s, the loop's framed by the reader's radius ---------- */
  const camAt = (s) => {
    const q = RHO(RS.v);
    return F.keyframes(s, [
      { at: 0, yaw: Math.PI / 2, pitch: 0, zoom: 1.0 },
      { at: 1, yaw: -0.55, pitch: 0.30, zoom: 0.92 },
      { at: 2, yaw: LOOP_YAW, pitch: 0.60, zoom: clamp(1.75 / (1.3 * q + 0.3), 0.7, 2.3) },
      { at: 3, yaw: -0.38, pitch: 0.26, zoom: 1.15 },
    ]);
  };
  let own = false, lastS = sS.v;

  function draw() {
    const s = sS.v, A = setA(s), a = arrOf(s), st = stOf(a);
    showControls(a);
    if (V) {
      if (s !== lastS) { own = false; lastS = s; }
      if (!own) V.look(camAt(s));
      const k = [s, iS.v, rS.v, RS.v, NS.v, iSol.v, nS.v, handC.value].join('|');
      if (k !== key) { key = k; try { build(); } catch (e) { console.error('sim-field-of-a-current-tour: the scene could not be built', e); S = null; } }
      if (S) {
        paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* left as it was */ } });
        S.labs.forEach((l) => { l.e.style.color = l.col(); });
        V.headline(headlineOf(st)).style.opacity = String(A[a]);
        V.invalidate();
      }
    }
    const { ctx } = begin(d.c);
    if (!V) layer(ctx, a, s, A, () => { drawFlat(ctx, st); topline(ctx, headlineOf(st)); });
    ['wire', 'loop', 'sol'].forEach((x) => layer(ctx, x, s, A, () => drawGraph(ctx, stOf(x), V ? 40 : 456)));
    readoutOf(s, A);
  }

  if (hasGL) {
    V = F.view3d(d.stage, { h: 620, dist: 7.0, tilt: 0.03, spin: 'off', pitch: [-0.30, 1.50], yaw: 'free', zoomMin: 0.7, zoomMax: 2.4 });
    if (!V.scene) V = null;
    else { g3 = V.part(0); V.look(camAt(sS.v)); d.stage.appendChild(d.c); V.onReader(() => { own = true; }); }
  }
  register(d.fig, { update: () => {}, draw });
  const story = F.story(d, sS, { stops: STOPS, ms: 2400, rest: 1400 });
  if (story && V) story.bar.addEventListener('click', () => { own = false; V.look(camAt(sS.v)); });
})();

/* =====================================================================
   SIM · sim-toroid · still · a locked view (root rule 28.2)
   The 2000-turn coil of Example 22.7, drawn straight and then bent into a
   ring. Bending it takes away the two ends, so the field that used to
   leave the north pole and swing round outside continues round the inside
   instead; the turns per metre, and so the field, are the same either way,
   which is the whole of the comparison. Drawn from one viewpoint a little
   above the plane of the ring, which shows the winding, the hole and the
   closed interior field at once; nothing about the arrangement changes
   with where the reader stands, so there is no orbit. The coil is 2.00 m
   long and the ring its mean circumference, so the ring's mean radius is
   2.00 m / 2π = 0.318 m; the winding is drawn with one turn to every two
   hundred the coil holds, which the readout states.
===================================================================== */
(function () {
  const d = sim('sim-toroid', 560);
  const shapeC = choice(d.controls, {
    label: '\\text{the coil is}',
    options: [{ value: 'straight', label: 'straight' }, { value: 'ring', label: 'bent into a ring' }],
    value: 'straight', aria: 'whether the coil is drawn straight or bent into a ring',
  });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 200, max: 2000, step: 50, value: 1600, unit: 'A', dec: 0, aria: 'the current in the winding' });
  const NS = ctl(d.controls, { label: 'N', cls: '', min: 1200, max: 4000, step: 100, value: 2000, unit: 'turns', dec: 0, aria: 'the number of turns in the coil' });

  const L = 2.00;                              /* the book's coil is two metres long */
  const drawn = (N) => Math.round(N / 200);    /* one turn drawn to every two hundred the coil holds: 6 to 20 across the slider */
  const RBAR = L / TAU;                        /* the mean radius of the ring the same coil makes: 0.318 m */
  const state = () => { const n = NS.v / L, B = MU0 * n * iS.v; return { n, B, I: iS.v, N: NS.v }; };

  const V = view({ yaw: 0.0, pitch: 0.58, dist: 2400, cx: 700, cy: 252 });
  const P = V.P;
  const RC = 212, A = 44;                      /* the ring's mean radius and the tube's radius, in canvas units */
  const HX = 330, AS = 62;                     /* the straight coil's half-length and radius */

  /* one turn of the winding, as the circle of the tube's cross-section at azimuth
     al of the ring, or at the distance x along the straight coil */
  const ringTurn = (al, n = 40) => {
    const e = [Math.cos(al), 0, Math.sin(al)], pts = [];
    for (let i = 0; i <= n; i++) { const t = (i / n) * TAU; pts.push([(RC + A * Math.cos(t)) * e[0], A * Math.sin(t), (RC + A * Math.cos(t)) * e[2]]); }
    return pts;
  };
  const lineTurn = (x, n = 40) => {
    const pts = [];
    for (let i = 0; i <= n; i++) { const t = (i / n) * TAU; pts.push([x, AS * Math.sin(t), AS * Math.cos(t)]); }
    return pts;
  };
  function poly(ctx, pts, color, w, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    pts.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.stroke(); ctx.restore();
  }
  const depth = (p) => -p[2] * Math.cos(0.58) + p[1] * Math.sin(0.58);   /* how far a point sits from the eye, for the painter's order */

  function drawRing(ctx, st) {
    const turns = [], D = drawn(st.N);
    for (let k = 0; k < D; k++) { const al = (k / D) * TAU; turns.push({ al, pts: ringTurn(al), z: depth([RC * Math.cos(al), 0, RC * Math.sin(al)]) }); }
    turns.sort((a, b) => b.z - a.z);
    /* the field: circles about the ring's own axis, all of them inside the tube and
       none of them outside it. The half that runs behind the ring's centre is drawn
       before the far turns and the half in front of it after them, so the field
       really does pass inside the winding. */
    const fieldArc = (a0, a1) => [RC - A * 0.5, RC, RC + A * 0.5].forEach((R, i) => {
      const pts = [];
      for (let j = 0; j <= 48; j++) { const t = a0 + ((a1 - a0) * j) / 48; pts.push([R * Math.cos(t), 0, R * Math.sin(t)]); }
      poly(ctx, pts, C('magnetic-field'), i === 1 ? 4.5 : 2.5);
    });
    fieldArc(Math.PI, TAU);
    turns.filter((t) => t.z > 0).forEach((t) => poly(ctx, t.pts, alpha(PAL.ink, 0.28), 2.5));
    fieldArc(0, Math.PI);
    turns.filter((t) => t.z <= 0).forEach((t) => poly(ctx, t.pts, PAL.ink, 3));
    /* the current, on the turn nearest the reader */
    const near = turns[turns.length - 1], p0 = P(near.pts[4]), p1 = P(near.pts[13]);
    arrow(ctx, p0[0], p0[1], p1[0], p1[1], C('current'), 5);
    text(ctx, 'I = ' + fmt(st.I, 0) + ' A', p1[0] + 18, p1[1] + 10, C('current'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'B = ' + fmt(st.B, 2) + ' T, round and round inside', 700, 482, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'and nothing outside: no end for a field line, or a charged particle, to leave by', 700, 512, PAL.muted, { size: 18, align: 'center' });
    const cm = P([0, 0, 0]), rm = P([RC, 0, 0]);
    line(ctx, cm[0], cm[1], rm[0], rm[1], C('position'), 3, [10, 10]);
    text(ctx, 'mean radius 0.318 m', (cm[0] + rm[0]) / 2, (cm[1] + rm[1]) / 2 - 30, C('position'), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
  }

  function drawStraight(ctx, st) {
    /* the field: straight down the inside, out at the north end and round outside */
    [-34, 0, 34].forEach((dy) => arrow(ctx, P([-HX + 40, dy, 0])[0], P([-HX + 40, dy, 0])[1], P([HX - 40, dy, 0])[0], P([HX - 40, dy, 0])[1], C('magnetic-field'), 4));
    [1, -1].forEach((s) => [[HX + 110, AS + 32], [HX + 168, AS + 88]].forEach(([Aw, Bh]) => {
      const pts = [];
      for (let i = 0; i <= 96; i++) { const t = (i / 96) * TAU; pts.push([Aw * Math.cos(t), s * (AS + Bh * Math.sin(t)), 0]); }
      poly(ctx, pts, alpha(C('magnetic-field'), 0.5), 2.5);
    }));
    const turns = [], D = drawn(st.N);
    for (let k = 0; k < D; k++) turns.push(lineTurn(-HX + ((2 * HX) / (D - 1)) * k));
    turns.forEach((t) => poly(ctx, t, PAL.ink, 3));
    const near = turns[Math.floor(D / 2)], p0 = P(near[3]), p1 = P(near[10]);
    arrow(ctx, p0[0], p0[1], p1[0], p1[1], C('current'), 5);
    text(ctx, 'I = ' + fmt(st.I, 0) + ' A', p1[0] + 14, p1[1] + 4, C('current'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    const nn = P([HX + 96, 0, 0]), ss = P([-HX - 96, 0, 0]);
    text(ctx, 'N', nn[0], nn[1], PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'S', ss[0], ss[1], PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'B = ' + fmt(st.B, 2) + ' T inside, and the field leaves at the north end', 700, 482, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'and swings back around the outside to the south end', 700, 512, PAL.muted, { size: 18, align: 'center' });
  }

  function draw() {
    const st = state(), { ctx } = begin(d.c);
    if (shapeC.value === 'ring') drawRing(ctx, st); else drawStraight(ctx, st);
    topline(ctx, `The same ${fmt(st.N, 0)} turns carrying ${fmt(st.I, 0)} A make ${fmt(st.B, 2)} T inside, whether the coil is straight or bent into a ring.`);
    readout(d.readout,
      `\\kBmag = \\mu_0 n\\kIcur = (4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.n, 0)}\\ \\text{m}^{-1})(${fmt(st.I, 0)}\\ \\text{A}) = ${fmt(st.B, 2)}\\ \\text{T}`,
      `The coil is the 2.00 m coil of Example 22.7, so ${fmt(st.N, 0)} turns are ${fmt(st.n, 0)} turns per meter whether the coil is laid out straight or bent round until its two ends meet, and the field inside is the same either way. What the bending changes is the shape of the field rather than its strength: a straight coil has a north end the field leaves by and a south end it returns to, and the ring has neither, so the field simply goes round and round inside it. That is why a charged particle following a field line round a toroid never reaches a place where the line leaves, which is what confines the particles in a tokamak. The ring's mean radius is 2.00 m / 2π = 0.318 m, and the winding is drawn with one turn to every two hundred the coil holds, ${fmt(drawn(st.N), 0)} of them here, so that the turns can be told apart.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
