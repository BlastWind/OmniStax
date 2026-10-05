/* Figures for section 22.9 Magnetic Fields Produced by Currents: Ampere's Law.
   The page colours magnetic-field, current and position; the permeability of free
   space, the number of turns and the turns per metre stay ink. The wire (straight,
   then bent into a loop), the solenoid it is stacked into and the right hand of
   rule 2 are the section's referents, and the toroid is the same solenoid bent
   round, so it wears the solenoid's colour. One full three-dimensional scene folds the book's
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
   FIGURE 22.37 + 22.38 + 22.39 · sim-field-of-a-current · a story slider ·
   mathematical 3D (root rule 28.3): ink and the type hues, flat unlit colour,
   no materials. The book's three arrangements of a current told as one story
   on a slider s: at 0 the camera looks down a straight wire at its circles, at 1 it has turned to three quarters
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
  const d = sim('sim-field-of-a-current', H2D);
  const STOPS = [{ v: 0, label: 'along the wire' }, { v: 1, label: 'the wire' }, { v: 2, label: 'a loop' }, { v: 3, label: 'a solenoid' }];
  const sS = ctl(d.controls, { label: '\\text{the wire}', cls: '', min: 0, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: 'how far the story has gone, from the straight wire seen along its length, through the loop, to the solenoid' });
  /* one I throughout, its range carried to the solenoid's; one distance from the current, r along the wire and R round the loop */
  const I_LOW = { min: 5, max: 50, step: 1, unit: 'A', dec: 0 }, I_SOL = { min: 200, max: 2000, step: 50, unit: 'A', dec: 0 };
  const iOf = { low: 25, sol: 1600 };
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', ...I_LOW, value: iOf.low, aria: 'the current in the wire, the loop or the solenoid', onInput: () => { iOf[sS.v < 2.5 ? 'low' : 'sol'] = iS.v; } });
  const iLow = { get v() { return iOf.low; } }, iSol = { get v() { return iOf.sol; } };
  const rS = ctl(d.controls, { label: '\\kr', cls: 'position', min: 2, max: 12, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'the shortest distance from the wire to the point where the field is wanted' });
  const RS = rS;
  const NS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 4, step: 1, value: 1, unit: 'turns', dec: 0, detents: [1, 2, 3, 4], aria: 'the number of turns in the flat coil' });
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 400, max: 2000, step: 50, value: 1000, unit: '/m', dec: 0, aria: 'the number of turns per meter of the solenoid' });

  /* ---------- the story: which arrangement s is at, and how present each one's own parts are ---------- */
  const arrOf = (s) => (s < 1.5 ? 'wire' : s < 2.5 ? 'loop' : 'sol');
  const ramp = (s, a, b) => F.ease.smooth(clamp((s - a) / (b - a), 0, 1));
  const setA = (s) => ({ wire: 1 - ramp(s, 1.15, 1.4), loop: ramp(s, 1.6, 1.85) * (1 - ramp(s, 2.15, 2.4)), sol: ramp(s, 2.6, 2.85) });
  /* a part arriving slides in from before its stop, and one leaving slides on past it */
  const CENTRE = { wire: 0, loop: 2, sol: 3 };
  const slide = (a, s, A) => (1 - A[a]) * (s < CENTRE[a] ? -1 : 1);

  /* the reader's controls: I and the distance carry over, bending as functions of s; N and n enter and leave */
  const OWN = { wire: [rS], loop: [rS, NS], sol: [nS] };
  const ARIA_R = ['the shortest distance from the wire to the point where the field is wanted', 'the radius of the circular loop'];
  const lin = (s, a, b) => clamp((s - a) / (b - a), 0, 1);
  let shown = arrOf(sS.v);
  [rS, NS, nS].forEach((c) => { if (!OWN[shown].includes(c)) c.show(false, { ms: 0 }); });
  function controlsAt(s) {
    const r = lin(s, 1.35, 1.65);
    rS.relabelAt('\\kr', '\\kR', r);
    rS.el.querySelector('input').setAttribute('aria-label', ARIA_R[r < 0.5 ? 0 : 1]);
    iS.rangeAt({ ...I_LOW, value: iOf.low }, { ...I_SOL, value: iOf.sol }, lin(s, 2.35, 2.65));
    const a = arrOf(s); if (a === shown) return;
    const plan = F.layoutPlan(OWN[shown], OWN[a]); shown = a;
    F.regroup(d.controls, plan.enter.map((c) => c.el), plan.leave.map((c) => c.el));
  }

  const SOL_L = 2.00;
  const RHO = (cm) => (1.7 * cm) / 12;
  const stOf = (a) => {
    if (a === 'wire') { const r = rS.v / 100, I = iLow.v; return { a, I, r, B: (MU0 * I) / (TAU * r) }; }
    if (a === 'loop') { const R = RS.v / 100, I = iLow.v, N = NS.v; return { a, I, R, N, B: (N * MU0 * I) / (2 * R) }; }
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
    e.style.fontWeight = '600'; e.style.color = col; e.style.background = alpha(PAL.panel, 0.85); e.style.border = 'none'; e.style.opacity = String(op);
    return e;
  };
  const INK = () => PAL.ink, MUT = () => PAL.muted, WC = () => F.ref('wire'), SC = () => F.ref('solenoid'), HC = () => F.ref('hand');
  const BC = () => C('magnetic-field'), IC = () => C('current'), PC = () => C('position');
  const OP = 0.45, THIN = 0.009, MAIN = 0.017, WIRE_R = 0.026;
  const stag = (k, i, n, lag = 0.12) => clamp((k - i * lag) / (1 - (n - 1) * lag), 0, 1);
  const lerp = (a, b, k) => a + (b - a) * k;
  const lerp3 = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)];
  const scale3 = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const circle = (c, q, u, v, n = 72) => { const pts = []; for (let i = 0; i <= n; i++) { const t = (i / n) * TAU; pts.push(add3(add3(c, u, q * Math.cos(t)), v, q * Math.sin(t))); } return pts; };

  /* The right hand of rule 2 (F.mesh.hand), gripping the wire at grip: the thumb along the wire the
     way the current runs, the forearm leaving along outDir, and the four fingers closing round the
     far side of the wire, which for a right hand is the way the field goes. */
  const HAND_NAMES = { palm: 'the palm of the right hand', wrist: 'the wrist', thumb: 'the thumb, pointing the way the current runs' };
  const FINGERS_NAME = 'the fingers, curling the way the magnetic field goes';
  function buildHand(g, grip, iDir, outDir, hs, op, curl = 1) {
    if (op <= 0.01) return;
    const h = F.mesh.hand({ curl, thumb: 'up', aim: scale3(outDir, -1), palm: cross3(outDir, iDir), grip, scale: hs, ink: HC(), color: MUT(), opacity: op });
    paint.push({ m: h.userData.ink, col: HC }, { m: h.userData.fill, col: MUT });
    h.children.forEach((m) => { if (m.material === h.userData.fill) V.pickable(m, HAND_NAMES[m.userData.part] ?? FINGERS_NAME); });
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
      const wire = closed ? tube(g3, circle([0, 0, 0], rhoL + dq, [0, 0, 1], [1, 0, 0], 96), WIRE_R, WC, 1, true) : tube(g3, W.path(-W.L / 2, W.L / 2, 96), WIRE_R, WC);
      if (wire) V.pickable(wire, b < 0.5 ? 'the long straight wire' : N === 1 ? 'the loop of wire' : 'one turn of the flat coil');
    }
    /* the current, an arrow along the wire that shortens to the loop's own arrow */
    const i0 = lerp(0.7, I_AZ[0] * rhoL, b), i1 = lerp(2.5, I_AZ[1] * rhoL, b);
    const sc = loopScale(rhoL);
    parrow(g3, W.path(i0, i1, 40), lerp(0.040, 0.032 * sc, b), IC, 1, 'I, the current');
    keep(lab('I = ' + fmt(iLow.v, 0) + ' A', add3(add3(W.P(i1), UP, 0.26), W.Out(i1), 0.55 * lerp(1, Math.max(1, rhoL / RHO(5)), b)), g3, 0, C('current')), IC);
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
      const sh = -2.6;
      buildHand(g3, W.P(sh), W.T(sh), scale3(UP, -1), HS_WIRE, ow * ramp(s, 0.25, 0.75), ramp(s, 0.25, 0.95));
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
      buildHand(g3, W.P(sh), W.T(sh), W.Out(sh), loopHand(rhoL), ramp(s, 1.6, 1.85), ramp(s, 1.6, 1.95));
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
    const coil = tube(sub, pts, 0.022, SC); if (coil) V.pickable(coil, 'the winding of the solenoid');
    const onTurn = (m, th) => (Math.round(m * turns) + th / TAU) / turns;
    parrow(sub, Array.from({ length: 21 }, (_, i) => at(onTurn(0.62, lerp(I_AZ[0], I_AZ[1], i / 20)))), lerp(0.032 * sc, 0.030, k), IC, 1, 'I, the current in the winding');
    const pI = at(onTurn(0.62, I_AZ[1]));
    keep(lab('I = ' + fmt(iSol.v, 0) + ' A', [pI[0], a + 0.34, 0.2], sub, 0, C('current'), A.sol), IC);
    keep(lab('I = ' + fmt(iLow.v, 0) + ' A', add3(add3(pI, [1, 0, 0], 0.26), unit3([0, pI[1], pI[2]]), 0.55), sub, 0, C('current'), 1 - ramp(k + 2, 2.3, 2.5)), IC);
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
     One frame through the story. The wire's and the loop's graphs are the same
     kind, B against the distance from the current to where B is read, so from the
     wire to the loop the curve reshapes, the marker moves, the r of the x-axis
     becomes R and the B-scale eases from 5 to 20 × 10⁻⁴ T. The solenoid's is B
     against the turns per metre: its x-axis, ticks and curve replace the loop's
     with a fade, and the B-scale eases on to 5 T. All of it is a function of s. */
  const GM = (s) => ramp(s, 1.35, 1.65), GQ = (s) => ramp(s, 2.35, 2.65);
  const bWire = (t) => (MU0 * iLow.v) / (TAU * (t / 100));
  const bLoop = (t) => (NS.v * MU0 * iLow.v) / (2 * (t / 100));
  const yTop = (m, q) => Math.exp(lerp(Math.log(lerp(5e-4, 20e-4, m)), Math.log(5), q));
  function drawGraph(ctx, s, y0) {
    const box = { l: 180, r: 1270, t: y0 + 54, b: y0 + 238 };
    const m = GM(s), q = GQ(s), top = yTop(m, q), sh = 18;
    const Y = (v) => box.b - (v / top) * (box.b - box.t);
    const Xd = (v) => box.l + (v / 12) * (box.r - box.l), Xn = (v) => box.l + (v / 2000) * (box.r - box.l);
    const clipped = (fn) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); fn(); ctx.restore(); };
    const yTicks = (step, unit, a, dy) => F.faded(ctx, a * clamp((box.b - Y(step) - 12) / 12, 0, 1), [0, dy], () => {
      for (let v = 0; Y(v) >= box.t - 1; v += step) {
        if (v) line(ctx, box.l, Y(v), box.r, Y(v), PAL.rule, 1.5);
        text(ctx, fmt(v / unit, 0), box.l - 14, Y(v), PAL.muted, { size: 17, align: 'right' });
      }
    });
    const xTicks = (X, hi, n, a, dy) => F.faded(ctx, a, [0, dy], () => {
      for (let i = 0; i <= n; i++) { const v = (hi * i) / n; if (i) line(ctx, X(v), box.t, X(v), box.b, PAL.rule, 1.5); text(ctx, fmt(v, 0), X(v), box.b + 26, PAL.muted, { size: 17, align: 'center' }); }
    });
    const xl = (s0, col, a, dy) => F.faded(ctx, a, [0, dy], () => text(ctx, s0, box.r, box.b + 58, col, { align: 'right', weight: 600, size: 20 }));
    const yl = (s0, a, dy) => F.faded(ctx, a, [0, dy], () => text(ctx, s0, box.l, box.t - 24, C('magnetic-field'), { align: 'left', weight: 600, size: 20 }));
    const tip = (s0, a, dy) => F.faded(ctx, a, [0, dy], () => text(ctx, s0, box.r - 12, box.t + 22, PAL.muted, { size: 17, align: 'right' }));

    /* the scale in 10⁻⁴ T through the wire and the loop, in T for the solenoid */
    yTicks(1e-4, 1e-4, (1 - m) * (1 - q), 0);
    yTicks(4e-4, 1e-4, m * (1 - q), 0);
    yTicks(1, 1, q, 0);
    yl('B (10⁻⁴ T)', 1 - q, sh * q);
    yl('B (T)', q, -sh * (1 - q));
    xTicks(Xd, 12, 6, 1 - q, sh * q);
    xTicks(Xn, 2000, 4, q, -sh * (1 - q));
    line(ctx, box.l, box.t, box.l, box.b, PAL.muted, 2); line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
    xl('r, the shortest distance to the wire (cm)', C('position'), (1 - m) * (1 - q), 0);
    xl('R, the radius of the loop (cm)', C('position'), m * (1 - q), sh * q);
    xl('n, the number of turns per meter (1/m)', PAL.ink, q, -sh * (1 - q));

    /* the curve of the distance, reshaping from the wire's into the loop's */
    const fD = (t) => lerp(bWire(t), bLoop(t), m);
    F.faded(ctx, 1 - q, [0, sh * q], () => {
      clipped(() => curve(ctx, (t) => fD(t), 0.3, 12, Xd, Y, C('magnetic-field'), 5, 160));
      const xv = lerp(rS.v, RS.v, m), p = pinned(ctx, box, Xd, Y, xv, fD(xv), C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    });
    F.faded(ctx, q, [0, -sh * (1 - q)], () => {
      clipped(() => curve(ctx, (t) => MU0 * t * iSol.v, 0, 2000, Xn, Y, C('magnetic-field'), 5, 60));
      const p = pinned(ctx, box, Xn, Y, nS.v, MU0 * nS.v * iSol.v, C('magnetic-field'));
      if (!p.out) line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    });
    tip('the field falls off as one over the distance, not as one over its square', (1 - m) * (1 - q), sh * m);
    tip('the larger the loop, the weaker its center, because the current is farther away', m * (1 - q), -sh * (1 - m) + sh * q);
    tip('no radius enters it: the field grows straight with the turns per meter', q, -sh * (1 - q));
  }
  /* each arrangement's own layer, at its presence and slid by its shift */
  function layer(ctx, a, s, A, fn) {
    F.faded(ctx, A[a], [0, 18 * slide(a, s, A)], fn);
  }

  /* ---------- the readout: one equation, the law = its numbers = the field, bending by meaning between the arrangements ---------- */
  const { formula: fx, note } = F.readout(d);
  const UNIT = (x, u) => `(${x}\\ ${u})`;
  const MUV = '\\mk{muval}{(4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})}';
  const EQ = {
    wire: () => {
      const st = stOf('wire');
      return '\\mk{B}{\\kBmag} = \\frac{\\mk{mu}{\\mu_0}\\mk{I}{\\kIcur}}{\\mk{two}{2}\\mk{pi}{\\pi}\\mk{r}{\\kr}}'
        + ` = \\frac{${MUV}\\mk{Ival}{${UNIT(fmt(st.I, 0), '\\text{A}')}}}{\\mk{twoval}{2}\\mk{pival}{\\pi}\\mk{rval}{${UNIT(fmt(st.r, 3), '\\text{m}')}}}`
        + ` = \\mk{Bval}{${sciTex(st.B, 2)}\\ \\text{T}}`;
    },
    loop: () => {
      const st = stOf('loop'), many = st.N > 1;
      return `\\mk{B}{\\kBmag} = \\frac{${many ? '\\mk{N}{N}' : ''}\\mk{mu}{\\mu_0}\\mk{I}{\\kIcur}}{\\mk{two}{2}\\mk{R}{\\kR}}`
        + ` = \\frac{${many ? `\\mk{Nval}{(${fmt(st.N, 0)})}` : ''}${MUV}\\mk{Ival}{${UNIT(fmt(st.I, 0), '\\text{A}')}}}{\\mk{twoval}{2}\\mk{Rval}{${UNIT(fmt(st.R, 3), '\\text{m}')}}}`
        + ` = \\mk{Bval}{${sciTex(st.B, 2)}\\ \\text{T}}`;
    },
    sol: () => {
      const st = stOf('sol');
      return '\\mk{B}{\\kBmag} = \\mk{mu}{\\mu_0}\\mk{n}{n}\\mk{I}{\\kIcur}'
        + ` = ${MUV}\\mk{nval}{${UNIT(fmt(st.n, 0), '\\text{m}^{-1}')}}\\mk{Ival}{${UNIT(fmt(st.I, 0), '\\text{A}')}}`
        + ` = \\mk{Bval}{${fmt(st.B, 2)}\\ \\text{T}}`;
    },
  };
  /* r and R are both the distance from the current to where B is read */
  const KEYS_LOOP = { r: 'R', rval: 'Rval' };
  const NOTE = {
    wire: 'Because the wire is long, the picture is the same everywhere along it.',
    loop: 'At the center the field is π times the straight wire’s at the same distance.',
    sol: 'The winding is drawn one turn to every hundred the meter really holds.',
  };
  let noteNow = '';
  const win = (s, a, b) => clamp((s - a) / (b - a), 0, 1);
  function readoutOf(s, A) {
    const [ta, tb, k, keyMap] = s < 2 ? [EQ.wire(), EQ.loop(), win(s, 1.35, 1.65), KEYS_LOOP] : [EQ.loop(), EQ.sol(), win(s, 2.35, 2.65), {}];
    if (k > 0 && k < 1) F.morphAt(fx, ta, tb, k, { keyMap });
    else F.morph(fx, k <= 0 ? ta : tb);
    const a = arrOf(s);
    if (NOTE[a] !== noteNow) { noteNow = NOTE[a]; note.textContent = noteNow; }
    note.style.opacity = String(A[a]);
  }

  /* ---------- the camera: keyframes on s, the loop's framed by the reader's radius ---------- */
  const camAt = (s) => {
    const q = RHO(RS.v);
    return F.keyframes(s, [
      { at: 0, yaw: Math.PI / 2, pitch: 0, zoom: 0.72 },
      { at: 1, yaw: -0.55, pitch: 0.30, zoom: 0.72 },
      { at: 2, yaw: LOOP_YAW, pitch: 0.60, zoom: clamp(1.5 / (1.3 * q + 0.3), 0.7, 2.0) },
      { at: 3, yaw: -0.38, pitch: 0.26, zoom: 0.95 },
    ]);
  };
  let own = false, lastS = sS.v;

  function draw() {
    const s = sS.v, A = setA(s), a = arrOf(s), st = stOf(a);
    controlsAt(s);
    if (V) {
      if (s !== lastS) { own = false; lastS = s; }
      if (!own) V.look(camAt(s));
      const k = [s, iLow.v, rS.v, RS.v, NS.v, iSol.v, nS.v].join('|');
      if (k !== key) { key = k; try { build(); } catch (e) { console.error('sim-field-of-a-current: the scene could not be built', e); S = null; } }
      if (S) {
        paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* left as it was */ } });
        S.labs.forEach((l) => { l.e.style.color = l.col(); l.e.style.background = alpha(PAL.panel, 0.85); });   /* a panel under each name, so no line runs through it */
        V.headline(headlineOf(st)).style.opacity = String(A[a]);
        V.invalidate();
      }
    }
    const { ctx } = begin(d.c);
    if (!V) layer(ctx, a, s, A, () => { drawFlat(ctx, st); topline(ctx, headlineOf(st)); });
    drawGraph(ctx, s, V ? 40 : 456);
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
    value: 'straight', aria: 'whether the coil is straight or bent into a ring',
  });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 200, max: 2000, step: 50, value: 1600, unit: 'A', dec: 0, aria: 'the current in the winding' });
  const NS = ctl(d.controls, { label: 'N', cls: '', min: 1200, max: 4000, step: 100, value: 2000, unit: 'turns', dec: 0, aria: 'the number of turns in the coil' });

  const L = 2.00;                              /* the book's coil is two metres long */
  const drawn = (N) => Math.round(N / 200);    /* one turn drawn to every two hundred the coil holds: 6 to 20 across the slider */
  const RBAR = L / TAU;                        /* the mean radius of the ring the same coil makes: 0.318 m */
  const state = () => { const n = NS.v / L, B = MU0 * n * iS.v; return { n, B, I: iS.v, N: NS.v }; };

  const V = view({ yaw: 0.0, pitch: 0.58, dist: 2400, cx: 700, cy: 266 });
  const P = V.P;
  const RC = 212, A = 44;                      /* the ring's mean radius and the tube's radius, in canvas units */
  const HX = 330, AS = 62;                     /* the straight coil's half-length and radius */

  function poly(ctx, pts, color, w, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    pts.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.stroke(); ctx.restore();
  }
  const depth = (p) => -p[2] * Math.cos(0.58) + p[1] * Math.sin(0.58);   /* how far a point sits from the eye, for the painter's order */

  /* The coil at bend b: 0 is the straight coil along x, 1 the ring about the y axis.
     Its axis is an arc of angle 2πb whose length grows from the straight coil's to the
     ring's mean circumference, shifted so that the ring comes to rest centred; every
     turn and every field line inside is carried on that axis, so bending the coil
     bends them with it (manim 16). */
  function bent(b) {
    const len = 2 * HX + (TAU * RC - 2 * HX) * b, Phi = TAU * b, a = AS + (A - AS) * b;
    const rho = Phi > 1e-4 ? len / Phi : Infinity;
    const axis = (u) => {
      if (!isFinite(rho)) return { c: [len * u, 0, 0], w: [0, 0, 1], t: [1, 0, 0] };
      const ph = Phi * u;
      return { c: [rho * Math.sin(ph), 0, rho * (1 - Math.cos(ph)) - b * b * rho], w: [-Math.sin(ph), 0, Math.cos(ph)], t: [Math.cos(ph), 0, Math.sin(ph)] };
    };
    const turnAt = (u, n = 40) => {
      const { c, w } = axis(u), pts = [];
      for (let i = 0; i <= n; i++) { const t = (i / n) * TAU; pts.push([c[0] + a * Math.cos(t) * w[0], a * Math.sin(t), c[2] + a * Math.cos(t) * w[2]]); }
      return pts;
    };
    /* a field line inside: off across the tube, in the plane of the page while the coil is
       straight and in the plane of the ring once it is bent */
    const lineAt = (off, u0, u1) => {
      const pts = [];
      for (let j = 0; j <= 64; j++) {
        const { c, w } = axis(u0 + ((u1 - u0) * j) / 64);
        pts.push([c[0] + off * b * w[0], off * (1 - b), c[2] + off * b * w[2]]);
      }
      return pts;
    };
    return { axis, turnAt, lineAt, a };
  }

  function drawCoil(ctx, st, b, aS, aR) {
    const G = bent(b), D = drawn(st.N);
    const turns = [];
    for (let k = 0; k < D; k++) {
      const u = k / (D - 1 + b) - 0.5, pts = G.turnAt(u);
      turns.push({ u, pts, z: depth(G.axis(u).c) });
    }
    turns.sort((p, q) => q.z - p.z);
    const back = turns.filter((t) => t.z > 0), front = turns.filter((t) => t.z <= 0);
    const sc = F.ref('solenoid');
    back.forEach((t) => poly(ctx, t.pts, alpha(sc, 1 - 0.72 * b), 3 - 0.5 * b));
    /* the field inside, which the bend carries round until its ends meet */
    const span = 0.5 - 0.06 * (1 - b);
    [-0.5, 0, 0.5].forEach((f, i) => {
      const pts = G.lineAt(f * 68, -span, span);
      poly(ctx, pts, C('magnetic-field'), i === 1 ? 4.5 - 0.5 * (1 - b) : 2.5 + 1.5 * (1 - b));
      if (aS > 0) {
        const q0 = P(pts[pts.length - 4]), q1 = P(pts[pts.length - 1]);
        ctx.save(); ctx.globalAlpha = aS; arrow(ctx, q0[0], q0[1], q1[0], q1[1], C('magnetic-field'), 4); ctx.restore();
      }
    });
    /* outside a straight coil the field swings round from the north end to the south;
       a ring has no ends, so that part fades as the ends close */
    if (aS > 0) {
      ctx.save(); ctx.globalAlpha = aS;
      [1, -1].forEach((s) => [[HX + 110, AS + 26], [HX + 168, AS + 64]].forEach(([Aw, Bh]) => {
        const pts = [];
        for (let i = 0; i <= 96; i++) { const t = (i / 96) * TAU; pts.push([Aw * Math.cos(t), s * (AS + Bh * Math.sin(t)), 0]); }
        poly(ctx, pts, alpha(C('magnetic-field'), 0.5), 2.5);
      }));
      const nn = P([HX + 96, 0, 0]), ss = P([-HX - 96, 0, 0]);
      text(ctx, 'N', nn[0], nn[1], PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, 'S', ss[0], ss[1], PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, 'B = ' + fmt(st.B, 2) + ' T inside, and the field leaves at the north end', 700, 482, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      ctx.restore();
    }
    front.forEach((t) => poly(ctx, t.pts, sc, 3));
    /* the current, on the turn nearest the reader */
    const near = front.length ? front[front.length - 1] : turns[turns.length - 1];
    const p0 = P(near.pts[4]), p1 = P(near.pts[13]);
    arrow(ctx, p0[0], p0[1], p1[0], p1[1], C('current'), 5);
    text(ctx, 'I = ' + fmt(st.I, 0) + ' A', p1[0] + 18, p1[1] + 10, C('current'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    if (aR > 0) {
      ctx.save(); ctx.globalAlpha = aR;
      text(ctx, 'B = ' + fmt(st.B, 2) + ' T, round and round inside', 700, 482, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      ctx.restore();
    }
  }

  function draw() {
    const st = state(), { ctx } = begin(d.c);
    drawCoil(ctx, st, shapeC.mix((v) => (v === 'ring' ? 1 : 0)), shapeC.a('straight'), shapeC.a('ring'));
    topline(ctx, `The same ${fmt(st.N, 0)} turns carrying ${fmt(st.I, 0)} A make ${fmt(st.B, 2)} T inside, whether the coil is straight or bent into a ring.`);
    readout(d.readout,
      `\\kBmag = \\mu_0 n\\kIcur = (4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(st.n, 0)}\\ \\text{m}^{-1})(${fmt(st.I, 0)}\\ \\text{A}) = ${fmt(st.B, 2)}\\ \\text{T}`,
      `The 2.00 m coil of Example 22.7 has ${fmt(st.n, 0)} turns per meter straight or bent; the ring's mean radius is 2.00 m / 2π = 0.318 m, and one turn is drawn for every two hundred.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
