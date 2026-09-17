/* Figures for section 22.7 Magnetic Force on a Current-Carrying Conductor.
   The page binds magnetic-field, current and force, the three types ch22/COLOR.md
   gives it: the field arrows and the field slider wear the field hue, the arrow
   along a wire and the current slider the current hue, and every force arrow the
   force hue. A magnetic force is a force and gets no hue of its own for being
   magnetic. The length of wire in the field, the diameter of the duct and the
   angle between the current and the field are untyped and in ink, and no body is
   tinted: a pole piece is ink with N or S lettered on it, a wire is ink and a duct
   is ink whose carriers are lettered with their sign.

   All three figures answer their controls and register no cycle (rule 14): a wire
   held in a field feels a force, an angle the reader sets is a state, and the
   fluid in the pump is pushed steadily along, so none of the three has a clock in
   it. All three are drawn on one locked view (rule 28.2), the book's own
   three-quarter view from above and a little to the right, so that the duct of the
   pump is read as the wire of the first figure with the wire taken away; there is
   no orbit, because the arrangement is one the reader can see whole from where the
   book stands. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, note, axes, curve, pinned, hover, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180;
/* One viewpoint for the whole page: from a little to the right and well above, so
   that a wire running away from the reader stays in the column of canvas between
   the two poles it passes, and so that a direction lying in the horizontal plane
   never points the same way on the canvas as one standing out of it, which is the
   whole difficulty of this chapter. Never changed, and never turned by the reader
   (rule 28.2). */
const YAW = 0.26, PITCH = 0.42, DIST = 3200;
const CAM = [Math.sin(YAW) * Math.cos(PITCH), Math.sin(PITCH), Math.cos(YAW) * Math.cos(PITCH)];
const facing = (n) => n[0] * CAM[0] + n[1] * CAM[1] + n[2] * CAM[2];
const mkView = (cx, cy) => view({ yaw: YAW, pitch: PITCH, dist: DIST, cx, cy });

/* a straight line and an arrow between two points of the scene */
const line3 = (ctx, V, a, b, color, w, dash) => { const A = V.P(a), B = V.P(b); line(ctx, A[0], A[1], B[0], B[1], color, w, dash); };
const arr3 = (ctx, V, a, b, color, w) => { const A = V.P(a), B = V.P(b); arrow(ctx, A[0], A[1], B[0], B[1], color, w); };

/* A convex solid: every face that turns toward the viewpoint is filled and shaded
   by its own outward normal, and every face that turns away is dropped. The faces
   of a convex solid never overlap on the canvas, so no sorting is needed. */
function solid(ctx, V, faces) {
  faces.forEach((f) => { if (facing(f.n) > 0.02) face(ctx, f.pts.map((p) => V.P(p)), V.shade(f.n), f.w === undefined ? 2.5 : f.w); });
}
function boxOf(x0, x1, y0, y1, z0, z1) {
  return [
    { n: [0, 0, 1], pts: [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]] },
    { n: [0, 0, -1], pts: [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]] },
    { n: [0, 1, 0], pts: [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]] },
    { n: [0, -1, 0], pts: [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]] },
    { n: [1, 0, 0], pts: [[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]] },
    { n: [-1, 0, 0], pts: [[x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]] },
  ];
}
/* a tube down the z axis: the strips of its wall, overlapped a little so no seam
   shows between them, and the cap at the end nearest the viewer */
function tubeOf(R, z0, z1, n = 32) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a0 = (2 * Math.PI * i) / n, a1 = (2 * Math.PI * (i + 1)) / n + 0.04, am = (a0 + a1) / 2;
    const c0 = [R * Math.cos(a0), R * Math.sin(a0)], c1 = [R * Math.cos(a1), R * Math.sin(a1)];
    out.push({ n: [Math.cos(am), Math.sin(am), 0], w: 0, pts: [[c0[0], c0[1], z0], [c1[0], c1[1], z0], [c1[0], c1[1], z1], [c0[0], c0[1], z1]] });
  }
  const cap = [];
  for (let i = 0; i < n; i++) { const a = (2 * Math.PI * i) / n; cap.push([R * Math.cos(a), R * Math.sin(a), z1]); }
  out.push({ n: [0, 0, 1], pts: cap });
  return out;
}
/* a band round the tube, stroked only where it comes round the near side, so that
   it reads as a coil wrapping the duct rather than a circle floating beside it */
function ring(ctx, V, R, z, color, w, n = 64) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round';
  let open = false;
  for (let i = 0; i <= n; i++) {
    const a = (2 * Math.PI * i) / n;
    if (facing([Math.cos(a), Math.sin(a), 0]) <= 0) { if (open) { ctx.stroke(); open = false; } continue; }
    const p = V.P([R * Math.cos(a), R * Math.sin(a), z]);
    if (!open) { ctx.beginPath(); ctx.moveTo(p[0], p[1]); open = true; } else ctx.lineTo(p[0], p[1]);
  }
  if (open) ctx.stroke();
  ctx.restore();
}
const deg = (x) => fmt(x, 0) + '°';

/* =====================================================================
   FIGURE 22.29: a wire carrying a current through the gap of a magnet.
   Still: the force is a state of the arrangement, not a process in time.
   The book's numbers are the defaults, so the figure reads Example 22.4's
   1.50 N on load.
===================================================================== */
(function () {
  const d = sim('sim-wire-in-field', 820);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 40, step: 0.5, value: 20, unit: 'A', dec: 1, aria: 'the current in the wire' });
  const lS = ctl(d.controls, { label: 'l', cls: '', min: 1, max: 10, step: 0.25, value: 5, unit: 'cm', dec: 2, aria: 'the length of wire that lies in the field' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 2.5, step: 0.05, value: 1.5, unit: 'T', dec: 2, aria: 'the strength of the magnetic field between the poles' });
  const dirC = choice(d.controls, { label: '\\text{the current runs}', options: [{ value: 'out', label: 'toward you' }, { value: 'in', label: 'away from you' }], value: 'out', aria: 'which way the current runs through the gap' });
  const V = mkView(620, 450);
  /* 34 canvas units to the centimeter of wire in the field, so the widest pole
     pieces the slider reaches (10.0 cm) are 340 units deep and still clear the
     canvas; the force arrow is a fixed 33 units to the newton, from the greatest
     force the three sliders can make together, 40.0 A × 0.100 m × 2.50 T = 10.0 N,
     which is drawn 330 units long. */
  const SL = 50, SF = 90, FCAP = 420, GAP = 170, PW = 280, PY = 150;
  /* revised for the figure pass: 50 units to the centimetre and 90 to the newton, so that
     the book's own 1.50 N is an arrow 135 units long; a force past 4.7 N is drawn at the
     cap of 420 units and told by the number written on it, as pinned() tells an
     overflow on a graph */

  function draw() {
    const { ctx } = begin(d.c);
    const I = iS.v, lcm = lS.v, B = bS.v, out = dirC.value === 'out';
    const half = (lcm * SL) / 2, Fn = I * (lcm / 100) * B, sgn = out ? 1 : -1;
    const cB = C('magnetic-field'), cI = C('current'), cF = C('force');
    /* the magnet: a pole piece on each side of the gap, as deep along the wire as
       the length of wire that lies in the field, lettered on the face turned to the
       reader so that the gap between them is left clear */
    solid(ctx, V, boxOf(-GAP - PW, -GAP, -PY, PY, -half, half));
    solid(ctx, V, boxOf(GAP, GAP + PW, -PY, PY, -half, half));
    const nF = V.P([-GAP - PW / 2, 0, half]), sF = V.P([GAP + PW / 2, 0, half]);
    text(ctx, 'N', nF[0], nF[1], PAL.ink, { size: 46, weight: 700, align: 'center' });
    text(ctx, 'S', sF[0], sF[1], PAL.ink, { size: 46, weight: 700, align: 'center' });
    /* the field across the gap, from the north face to the south face; the arrows
       thicken with the field strength and go altogether when it is zero */
    const lw = 2 + 4.5 * (B / 2.5);
    if (B > 0.001) [90, -90].forEach((y) => [-half * 0.5, half * 0.5].forEach((z) => arr3(ctx, V, [-GAP + 4, y, z], [GAP - 4, y, z], cB, lw)));
    /* the wire, ink, running through the gap and well out of it at both ends, with
       the current drawn on each end so that both arrowheads point the same way */
    const reach = half + 300;
    line3(ctx, V, [0, 0, -reach], [0, 0, reach], PAL.ink, 10);
    arr3(ctx, V, [0, 0, sgn * (half + 80)], [0, 0, sgn * (half + 270)], cI, 6);
    arr3(ctx, V, [0, 0, -sgn * (half + 270)], [0, 0, -sgn * (half + 80)], cI, 6);
    /* the two ends of the length that lies in the field, marked on the wire */
    [-half, half].forEach((z) => line3(ctx, V, [0, -56, z], [0, 56, z], alpha(PAL.ink, 0.6), 3, [7, 7]));
    /* the force on that length, at right angles to both the current and the field */
    const Flen = Math.min(FCAP, Fn * SF);
    if (Flen > 8) arr3(ctx, V, [0, 0, 0], [0, sgn * Flen, 0], cF, 7);
    /* the names: five of them, none on a thing that moves far (rule 26.7) */
    const pF = V.P([0, sgn * Flen, 0]), pB = V.P([GAP - 4, 90, -half * 0.5]);
    const pI = V.P([0, 0, sgn * (half + 270)]), pL = V.P([0, -56, 0]), pW = V.P([0, 0, -sgn * reach]);
    if (Flen > 8) label(ctx, 'F = ' + fmt(Fn, 2) + ' N', pF[0], pF[1], { side: sgn > 0 ? 'above' : 'below', size: 22, color: cF, leader: false });
    label(ctx, 'B = ' + fmt(B, 2) + ' T', pB[0], pB[1], { side: 'right', size: 21, color: cB });
    label(ctx, 'I = ' + fmt(I, 1) + ' A', pI[0], pI[1], { side: out ? 'below' : 'above', size: 21, color: cI });
    label(ctx, 'l = ' + fmt(lcm, 2) + ' cm', pL[0], pL[1], { side: 'below', size: 21, gap: 30 });
    label(ctx, 'the wire', pW[0], pW[1], { side: 'above', size: 19, color: PAL.muted });
    text(ctx, 'Point the thumb of the right hand along the current and the fingers along the field,', 700, 762, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'and a perpendicular to the palm points the way the wire is pushed.', 700, 790, PAL.muted, { size: 18, align: 'center' });
    topline(ctx, Fn < 0.005
      ? 'With no current or no field there is no force at all, however much of the wire lies between the poles.'
      : `A current of ${fmt(I, 1)} A through ${fmt(lcm, 2)} cm of wire in a ${fmt(B, 2)} T field is pushed ${sgn > 0 ? 'upward' : 'downward'} with a force of ${fmt(Fn, 2)} N.`);
    readout(d.readout,
      `\\kF = \\kIcur l \\kBmag \\sin\\theta = (${fmt(I, 1)}\\ \\text{A})(${fmt(lcm / 100, 4)}\\ \\text{m})(${fmt(B, 2)}\\ \\text{T})\\sin 90^\\circ = ${fmt(Fn, 2)}\\ \\text{N}`,
      'The wire lies across the field here, so the angle between the current and the field is 90° and the sine is 1. Send the current the other way and the force turns over, because the field and the length in the field have not changed.');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const half = (lS.v * SL) / 2, out = dirC.value === 'out';
    const p = (q) => { const a = V.P(q); return { x: a[0], y: a[1] }; };
    return [
      { ...p([-GAP - PW / 2, 0, 0]), r: 100, name: 'the north pole of the magnet' },
      { ...p([GAP + PW / 2, 0, 0]), r: 100, name: 'the south pole of the magnet' },
      { ...p([0, 0, 0]), r: 46, name: 'the length of wire that lies in the field, ' + fmt(lS.v, 2) + ' cm of it' },
      { ...p([0, 0, (out ? 1 : -1) * (half + 180)]), r: 70, name: 'the current in the wire, ' + fmt(iS.v, 1) + ' A' },
    ];
  });
})();

/* =====================================================================
   FIGURE 22.30: the current and the field in one plane, the force at
   right angles to it, and the sine of the angle between them carried on
   a curve below. Still: an angle the reader sets is a state. The length
   is held at one meter, so the figure reads the force per unit length,
   which is the section's second result and has no drawing of its own.
===================================================================== */
(function () {
  const d = sim('sim-angle-and-force', 880);
  const thS = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 180, step: 1, value: 90, unit: '°', dec: 0, detents: [0, 90, 180], aria: 'the angle between the current and the magnetic field' });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 40, step: 0.5, value: 20, unit: 'A', dec: 1, aria: 'the current in the wire' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 2.5, step: 0.05, value: 1.5, unit: 'T', dec: 2, aria: 'the strength of the magnetic field' });
  const V = mkView(620, 330);
  /* The graph runs 0 to 60 N/m and never rescales: the default state, 30.0 N/m, then
     stands half way up it, and the greatest the two sliders can make together,
     40.0 A × 2.50 T = 100 N/m, is pinned at the top edge with its value written
     beside it. The force arrow is a fixed 2 units to the newton per meter. */
  const ARM = 250, SF = 2, PX = 290, PZ = 300;
  const BOX = { l: 200, r: 1260, t: 560, b: 780 };

  function draw() {
    const { ctx } = begin(d.c);
    const th = thS.v, I = iS.v, B = bS.v, s = Math.sin(th * RAD), FL = I * B * s;
    const cB = C('magnetic-field'), cI = C('current'), cF = C('force');
    /* the plane the current and the field both lie in, seen from above */
    face(ctx, [[-PX, 0, -PZ], [PX, 0, -PZ], [PX, 0, PZ], [-PX, 0, PZ]].map((q) => V.P(q)), V.shade([0, 1, 0]), 2);
    /* the wire and the current along it, running toward the reader as the wire of
       Figure 22.29 does, so that the two drawings are read in one arrangement */
    line3(ctx, V, [0, 0, -ARM * 0.9], [0, 0, ARM * 1.04], PAL.ink, 7);
    arr3(ctx, V, [0, 0, 0], [0, 0, ARM], cI, 6);
    /* the field, turned away from the current by the angle, within the same plane */
    const bx = Math.sin(th * RAD) * ARM, bz = Math.cos(th * RAD) * ARM;
    arr3(ctx, V, [0, 0, 0], [bx, 0, bz], cB, 6);
    /* the angle between them, an arc lying in the plane itself */
    const R = 110;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= 48; i++) { const a = (th * RAD * i) / 48, q = V.P([R * Math.sin(a), 0, R * Math.cos(a)]); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
    ctx.stroke(); ctx.restore();
    /* the force, straight out of the plane, and nothing at all when the current and
       the field lie along one line */
    const Flen = FL * SF;
    if (Flen > 8) arr3(ctx, V, [0, 0, 0], [0, Flen, 0], cF, 6);
    else { const o = V.P([0, 0, 0]); dot(ctx, o[0], o[1], cF, false, 11); }
    const pB = V.P([bx, 0, bz]), pI = V.P([0, 0, ARM]);
    const pA = V.P([R * 1.35 * Math.sin((th * RAD) / 2), 0, R * 1.35 * Math.cos((th * RAD) / 2)]);
    const pF = V.P([0, Math.max(Flen, 24), 0]);
    label(ctx, 'I = ' + fmt(I, 1) + ' A', pI[0], pI[1], { side: 'below', size: 21, color: cI });
    label(ctx, 'B = ' + fmt(B, 2) + ' T', pB[0], pB[1], { side: th > 120 ? 'below' : 'right', size: 21, color: cB });
    label(ctx, 'θ = ' + deg(th), pA[0], pA[1], { side: 'right', size: 21, gap: 14, leader: false });
    label(ctx, Flen > 8 ? 'F/l = ' + fmt(FL, 1) + ' N/m' : 'no force on the wire', pF[0], pF[1], { side: Flen > 8 ? 'above' : 'left', size: 22, color: cF, leader: false });
    text(ctx, 'The force stands at right angles to the plane, whichever way the field is turned within it.', 700, 520, PAL.muted, { size: 18, align: 'center' });
    /* the curve the sine draws, with the state now set pinned on it */
    const { X, Y } = axes(ctx, BOX, [0, 180], [0, 60], { xl: 'θ, the angle between the current and the field (degrees)', yl: 'F/l (N/m)', yc: cF, nx: 6, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (t) => I * B * Math.sin(t * RAD), 0, 180, X, Y, cF, 5, 120);
    ctx.restore();
    line(ctx, X(th), Math.max(Y(FL), BOX.t), X(th), BOX.b, alpha(PAL.ink, 0.35), 2.5, [4, 8]);
    pinned(ctx, BOX, X, Y, th, FL, cF, fmt(FL, 1) + ' N/m');
    note(ctx, BOX, 'The force is greatest when the wire lies across the field and nothing at all when it lies along it.', [{ l: X(th) - 170, r: X(th) + 170, t: BOX.t, b: BOX.b }]);
    topline(ctx, FL < 0.05
      ? (s < 0.02 ? 'The current runs along the field, so there is no force on the wire at all, however large the current and the field are.' : 'With no current or no field there is no force on the wire.')
      : `A ${fmt(I, 1)} A current across a ${fmt(B, 2)} T field at ${deg(th)} is pushed with ${fmt(FL, 1)} N on every meter of wire.`);
    readout(d.readout,
      `\\frac{\\kF}{l} = \\kIcur\\kBmag\\sin\\theta = (${fmt(I, 1)}\\ \\text{A})(${fmt(B, 2)}\\ \\text{T})\\sin ${deg(th)} = ${fmt(FL, 1)}\\ \\text{N/m}`,
      'The force stands at right angles to the plane the current and the field lie in, so turning the field within that plane changes how hard the wire is pushed but never which way.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.31 + 22.32: the magnetohydrodynamic pump, in the laboratory
   and in a submarine. Still: the fluid is driven steadily along the duct,
   and the figure's subject is which way it is driven and how hard. The
   carriers are a choice, because the section's own conceptual question
   asks the reader to show that their sign does not move the force.
===================================================================== */
(function () {
  const d = sim('sim-mhd-pump', 780);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 150, step: 5, value: 100, unit: 'A', dec: 0, aria: 'the current driven across the duct' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 3, step: 0.1, value: 2, unit: 'T', dec: 2, aria: 'the strength of the magnetic field across the duct' });
  const lS = ctl(d.controls, { label: 'l', cls: '', min: 10, max: 40, step: 1, value: 25, unit: 'cm', dec: 1, aria: 'the diameter of the duct the current crosses' });
  const carC = choice(d.controls, { label: '\\text{the carriers}', options: [{ value: 'pos', label: 'positive' }, { value: 'neg', label: 'negative' }, { value: 'both', label: 'both signs' }], value: 'both', aria: 'the sign of the charges that carry the current across the fluid' });
  const sceneC = choice(d.controls, { label: '\\text{the pump}', options: [{ value: 'lab', label: 'between magnet poles' }, { value: 'sub', label: 'in a submarine' }], value: 'lab', aria: 'where the pump stands' });
  const V = mkView(620, 330);
  /* 11 canvas units to the centimeter of duct, so the widest duct the slider reaches
     (40.0 cm) is 440 units across and still clears the canvas with the poles beside
     it; the force arrow is a fixed 1.83 units to the newton, from the greatest force
     the sliders can make together, 150 A × 0.400 m × 3.00 T = 180 N, drawn 330 long. */
  const SD = 11, SF = 1.83, ZD = 240, ZP = 180, PW = 200;

  function draw() {
    const { ctx } = begin(d.c);
    const I = iS.v, B = bS.v, lcm = lS.v, R = (lcm * SD) / 2, Fn = I * (lcm / 100) * B;
    const lab = sceneC.value === 'lab', car = carC.value;
    const cB = C('magnetic-field'), cI = C('current'), cF = C('force');
    const h = Math.max(110, R * 0.8), g = R + 34;
    /* what stands round the duct: the poles of a laboratory magnet, or nothing yet,
       since a thruster's coils are drawn over the duct rather than beside it */
    if (lab) {
      solid(ctx, V, boxOf(-g - PW, -g, -h, h, -ZP, ZP));
      solid(ctx, V, boxOf(g, g + PW, -h, h, -ZP, ZP));
      const nT = V.P([-g - PW / 2, h, 0]), sT = V.P([g + PW / 2, h, 0]);
      text(ctx, 'N', nT[0], nT[1], PAL.ink, { size: 36, weight: 700, align: 'center' });
      text(ctx, 'S', sT[0], sT[1], PAL.ink, { size: 36, weight: 700, align: 'center' });
    }
    /* the duct, ink, lying along the line the fluid is driven down; the book draws
       it over the poles too, since the tube passes between them and out at both ends */
    solid(ctx, V, tubeOf(R, -ZD, ZD));
    if (!lab) {
      [-170, -50, 70, 190].forEach((z) => ring(ctx, V, R + 16, z, alpha(PAL.ink, 0.72), 9));
      text(ctx, 'Each duct is wrapped in saddle-shaped superconducting coils, and the field they make', 700, 700, PAL.muted, { size: 18, align: 'center' });
      text(ctx, 'crosses the duct just as the poles of a magnet do.', 700, 728, PAL.muted, { size: 18, align: 'center' });
    }
    /* the field across the duct, thickening with its strength */
    const lw = 2 + 4.5 * (B / 3);
    if (B > 0.001) [R * 0.4, -R * 0.4].forEach((y) => [-70, 70].forEach((z) => arr3(ctx, V, [-g - 10, y, z], [g + 10, y, z], cB, lw)));
    /* the two electrodes inside the duct and the current that runs between them */
    const ez = ZD;
    [1, -1].forEach((s) => line3(ctx, V, [-R * 0.4, s * R * 0.86, ez], [R * 0.4, s * R * 0.86, ez], PAL.ink, 8));
    if (I > 0.5) arr3(ctx, V, [0, R * 0.78, ez], [0, -R * 0.78, ez], cI, 6);
    /* the carriers: ink dots lettered with their sign, each beside an arrow for the
       way it drifts. A positive carrier drifts along the current and a negative one
       against it, and either way the force comes out the same. */
    const rr = Math.max(11, Math.min(18, R * 0.16));
    const rows = car === 'both' ? [['+', -1, -R * 0.46], ['−', 1, R * 0.46]] : car === 'pos' ? [['+', -1, 0]] : [['−', 1, 0]];
    rows.forEach(([sign, way, off]) => {
      const p = V.P([off, 0, ez + 8]);
      dot(ctx, p[0], p[1], PAL.panel, true, rr);
      dot(ctx, p[0], p[1], PAL.ink, false, rr);
      text(ctx, sign, p[0], p[1], PAL.ink, { size: Math.max(17, Math.round(rr * 1.3)), weight: 700, align: 'center' });
      const ax = off + Math.sign(off || 1) * rr * 2.2;      /* the drift arrow on the carrier's outer side, clear of the current */
      arr3(ctx, V, [ax, -way * R * 0.36, ez + 8], [ax, way * R * 0.36, ez + 8], alpha(PAL.ink, 0.8), 4.5);
    });
    /* the force on the fluid, along the duct and out toward the reader */
    const Flen = Fn * SF;
    if (Flen > 8) arr3(ctx, V, [0, 0, ez + 50], [0, 0, ez + 50 + Flen], cF, 7);
    const pF = V.P([0, 0, ez + 50 + Math.max(Flen, 50)]), pB = V.P([g + 10, -R * 0.4, -70]);
    const pI = V.P([0, -R * 0.78, ez]), pD = V.P([0, -R, ez]), pE = V.P([R * 0.4, R * 0.86, ez]);
    if (Flen > 8) label(ctx, 'F = ' + fmt(Fn, 1) + ' N', pF[0], pF[1], { side: 'left', size: 22, color: cF, leader: false });
    label(ctx, 'B = ' + fmt(B, 2) + ' T', pB[0], pB[1], { side: 'right', size: 21, color: cB });
    label(ctx, 'I = ' + fmt(I, 0) + ' A', pI[0], pI[1], { side: 'right', size: 21, color: cI });
    label(ctx, 'l = ' + fmt(lcm, 1) + ' cm', pD[0], pD[1], { side: 'below', size: 21, gap: 34 });
    label(ctx, 'the electrodes', pE[0], pE[1], { side: 'right', size: 19, color: PAL.muted });
    topline(ctx, Fn < 0.05
      ? 'With no current across the duct, or no field through it, the fluid is not driven anywhere.'
      : `A ${fmt(I, 0)} A current across a ${fmt(lcm, 1)} cm duct in a ${fmt(B, 2)} T field drives the fluid along the tube with a force of ${fmt(Fn, 1)} N.`);
    readout(d.readout,
      `\\kF = \\kIcur l \\kBmag \\sin\\theta = (${fmt(I, 0)}\\ \\text{A})(${fmt(lcm / 100, 3)}\\ \\text{m})(${fmt(B, 2)}\\ \\text{T})\\sin 90^\\circ = ${fmt(Fn, 1)}\\ \\text{N}`,
      car === 'both'
        ? 'Both signs of carrier are here at once. The positive ones drift the way the current runs and the negative ones drift against it, so both are pushed the same way and the fluid moves as one.'
        : `The carriers are ${car === 'pos' ? 'positive and drift along the current' : 'negative and drift against the current'}. Change them for the other sign and the force does not move, because the sign of the charge and the direction it drifts reverse together.`);
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const R = (lS.v * SD) / 2, ez = ZD;
    const p = (q) => { const a = V.P(q); return { x: a[0], y: a[1] }; };
    return [
      { ...p([0, 0, 0]), r: Math.max(R * 0.8, 40), name: 'the duct, ' + fmt(lS.v, 1) + ' cm across, with the conducting fluid in it' },
      { ...p([0, R * 0.86, ez]), r: 40, name: 'an electrode, one of the pair the current runs between' },
      { ...p([0, -R * 0.86, ez]), r: 40, name: 'an electrode, one of the pair the current runs between' },
      { ...p([0, 0, ez + 140]), r: 80, name: 'the force on the fluid, ' + fmt(iS.v * (lS.v / 100) * bS.v, 1) + ' N along the duct' },
    ];
  });
})();

};
