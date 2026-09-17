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
