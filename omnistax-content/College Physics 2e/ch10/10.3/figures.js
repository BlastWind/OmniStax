/* Figures for section 10.3 Dynamics of Rotational Motion: Rotational Inertia. Boots against the section's text article.
   Two of the four figures have a clock in them: a force changes an angular velocity, and the change
   takes time, so the bike wheel and the merry-go-round start from rest and spin up while the push
   lasts, register a cycle and get the app's transport. The free-body picture of the point mass and
   the table of moments of inertia are relations between quantities, so they answer their sliders,
   register no cycle and carry no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, hover, cycle, register, begin, line, arrow, dot, text, headline, topline, hbracket, axes, curve, pinned, view, face, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* the turning a torque produces, drawn as an arc about (cx, cy) with an arrowhead at the end the
   turn runs towards; `mid` is the canvas angle the arc is centred on, and the turn is counterclockwise
   on the screen */
function turnArc(ctx, cx, cy, R, color, mid, w = 5) {
  const a0 = mid - 0.7, a1 = mid + 0.7;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke(); ctx.restore();
  const hx = cx + R * Math.cos(a0), hy = cy + R * Math.sin(a0), t = a0 - Math.PI / 2;
  arrow(ctx, hx - 30 * Math.cos(t), hy - 30 * Math.sin(t), hx, hy, color, w);
}
/* a hand, in ink, gripping at (x, y) and reaching back along the direction (ux, uy): a palm and a thumb */
function hand(ctx, x, y, ux, uy, color) {
  const px = -uy, py = ux;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x + px * 16, y + py * 16); ctx.lineTo(x + ux * 30 + px * 18, y + uy * 30 + py * 18); ctx.lineTo(x + ux * 62 + px * 12, y + uy * 62 + py * 12);
  ctx.lineTo(x + ux * 62 - px * 12, y + uy * 62 - py * 12); ctx.lineTo(x + ux * 30 - px * 18, y + uy * 30 - py * 18); ctx.lineTo(x - px * 16, y - py * 16); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x + ux * 30 + px * 18, y + uy * 30 + py * 18); ctx.lineTo(x + ux * 8 + px * 26, y + uy * 8 + py * 26); ctx.lineTo(x + px * 14, y + py * 14); ctx.stroke();
  ctx.restore();
}
/* a fist gripping at (x, y) with the forearm reaching back along (ux, uy): a tapered forearm, a rounded fist,
   the knuckles along its leading edge and a thumb closed over the grip, in ink on a light fill */
function fist(ctx, x, y, ux, uy, color) {
  const px = -uy, py = ux, P = (a, b) => [x + ux * a + px * b, y + uy * a + py * b], ang = Math.atan2(uy, ux);
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(...P(26, 15)); ctx.lineTo(...P(112, 12)); ctx.lineTo(...P(112, -12)); ctx.lineTo(...P(26, -15)); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(...P(12, 0), 23, 19, ang, 0, TAU); ctx.fill(); ctx.stroke();
  for (const b of [-11, 0, 11]) { ctx.beginPath(); ctx.arc(...P(-8, b), 5, ang + Math.PI / 2, ang + 3 * Math.PI / 2); ctx.stroke(); }
  ctx.beginPath(); ctx.moveTo(...P(14, -16)); ctx.quadraticCurveTo(...P(-6, -22), ...P(-10, -4)); ctx.stroke();
  ctx.restore();
}
/* a person seen from above at (x, y), s times the base size: the shoulders as a lens across the heading, the head on
   them, and the arms reaching to the two points given, if any */
function personAbove(ctx, x, y, s, heading, color, reach) {
  const ux = Math.cos(heading), uy = Math.sin(heading), px = -uy, py = ux;
  const L = { x: x + px * 24 * s, y: y + py * 24 * s }, R = { x: x - px * 24 * s, y: y - py * 24 * s };
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineCap = 'round'; ctx.lineWidth = 3;
  if (reach) { for (const [sh, to] of [[L, reach[0]], [R, reach[1]]]) { ctx.lineWidth = 7 * Math.min(1, s); ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(to.x, to.y); ctx.stroke(); } }
  ctx.beginPath(); ctx.ellipse(x, y, 26 * s, 11 * s, heading, 0, TAU); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(x + ux * 3 * s, y + uy * 3 * s, 12 * s, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.restore();
}
/* a clock and a reading, stacked in a panel at (x, y): the label in muted ink and the value in its type colour */
function reading(ctx, x, y, label, value, color) {
  text(ctx, label, x, y, PAL.muted, { size: 18 });
  text(ctx, value, x, y + 30, color, { size: 22, weight: 600 });
}

/* =====================================================================
   FIGURE 10.10: the bike wheel pulled by a hand. A hoop of the book's
   radius on an axle, a hand on the tire or on a spoke, and a pull that
   lasts 2.00 s. Moving: the sentence the figure illustrates is that force
   is needed to change angular velocity, and the change happens in time,
   so the wheel spins up from rest while the pull lasts and then holds.
===================================================================== */
(function () {
  const d = sim('sim-bike-wheel', 620);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 20, step: 0.5, value: 10, unit: 'N', dec: 1, onInput: reset, aria: 'the size of the pull' });
  const rs = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.05, max: 0.33, step: 0.01, value: 0.33, unit: 'm', dec: 2, onInput: reset, aria: 'the distance from the axle to the pull' });
  const Ms = ctl(d.controls, { label: 'M', cls: '', min: 0.5, max: 5, step: 0.1, value: 2, unit: 'kg', dec: 1, onInput: reset, aria: 'the mass of the wheel' });
  const R = 0.33, T = 2, CX = 470, CY = 365, S = 640, KF = 14, PX = 940;   /* 1 m is 640 units, so the arc over the wheel clears the headline's second line */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const model = () => { const tau = rs.v * Fs.v, I = Ms.v * R * R; return { tau, I, al: tau / I }; };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), ic = C('rotational-inertia'), ac = C('angular-acceleration'), wc = C('angular-rate'), tc = C('time'), qc = C('torque');
    const m = model(), t = cy.now(), th = 0.5 * m.al * t * t, w = m.al * t, done = t >= T - 1e-9;
    const Rp = R * S, px = CX, py = CY + rs.v * S;               /* the pull is applied at the bottom of the wheel, on the tire or on a spoke */
    /* the tire, the spokes turning counterclockwise, the hub and the axle */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(CX, CY, Rp, 0, TAU); ctx.stroke();
    ctx.lineWidth = 3; ctx.strokeStyle = PAL.muted;
    for (let k = 0; k < 16; k++) { const a = -th + (k / 16) * TAU; ctx.beginPath(); ctx.moveTo(CX + 22 * Math.cos(a), CY + 22 * Math.sin(a)); ctx.lineTo(CX + (Rp - 8) * Math.cos(a), CY + (Rp - 8) * Math.sin(a)); ctx.stroke(); }
    ctx.restore();
    /* one spoke marked so the turn can be followed */
    const a0 = -th + Math.PI / 2; line(ctx, CX + 22 * Math.cos(a0), CY + 22 * Math.sin(a0), CX + (Rp - 8) * Math.cos(a0), CY + (Rp - 8) * Math.sin(a0), PAL.ink, 5);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(CX, CY, 22, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    dot(ctx, CX, CY, PAL.ink, true, 6);
    text(ctx, 'axle', CX + 34, CY - 2, PAL.ink, { size: 19, bg: alpha(PAL.panel, 0.9) });
    /* the distance from the axle to the pull, then the hand and its pull, backward along the tire */
    line(ctx, CX, CY, px, py, pc, 3, [6, 8]);
    fist(ctx, px, py, 1, 0, PAL.ink);
    text(ctx, 'the hand', px + 130, py + 4, PAL.ink, { size: 19, bg: alpha(PAL.panel, 0.9) });
    /* the distance label sits beside the dashed line, or above the forearm when the pull is close to the axle */
    if (rs.v * S > 90) text(ctx, 'r = ' + fmt(rs.v, 2) + ' m', CX + 14, (CY + py) / 2 + 20, pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) });
    else text(ctx, 'r = ' + fmt(rs.v, 2) + ' m', px + 130, py - 26, pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) });
    if (Fs.v > 0) {
      arrow(ctx, px, py, px - Fs.v * KF, py, fc, 5);
      text(ctx, 'F = ' + fmt(Fs.v, 1) + ' N', px - Fs.v * KF - 14, py - 26, fc, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.9) });
      turnArc(ctx, CX, CY, Rp + 44, ac, -Math.PI / 2);
      text(ctx, 'α = ' + fmt(m.al, 1) + ' rad/s²', CX + (Rp + 44) * Math.cos(-0.87) + 14, CY + (Rp + 44) * Math.sin(-0.87) + 6, ac, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.9) });
    }
    /* the readings beside the wheel */
    text(ctx, 'the wheel is a hoop of radius R = 0.330 m', PX, 130, PAL.muted, { size: 18 });
    reading(ctx, PX, 176, 'torque of the pull', 'τ = rF = ' + fmt(m.tau, 2) + ' N·m', qc);
    reading(ctx, PX, 250, 'moment of inertia', 'I = MR² = ' + fmt(m.I, 3) + ' kg·m²', ic);
    reading(ctx, PX, 324, 'angular acceleration', 'α = τ/I = ' + fmt(m.al, 1) + ' rad/s²', ac);
    reading(ctx, PX, 398, 'time the pull has lasted', 't = ' + fmt(t, 2) + ' s', tc);
    reading(ctx, PX, 472, 'angular velocity', 'ω = αt = ' + fmt(w, 1) + ' rad/s', wc);
    topline(ctx, Fs.v === 0 ? 'With no pull on the wheel there is no torque, and the wheel stays as it is.'
      : t < 1e-9 ? 'The wheel is at rest, and a pull of ' + fmt(Fs.v, 1) + ' N at ' + fmt(rs.v, 2) + ' m from the axle is about to start it turning.'
      : done ? 'A pull of ' + fmt(Fs.v, 1) + ' N at ' + fmt(rs.v, 2) + ' m from the axle of a ' + fmt(Ms.v, 1) + ' kg wheel gives it ' + fmt(m.al, 1) + ' rad/s², and after 2.00 s it turns at ' + fmt(w, 1) + ' rad/s.'
      : 'After ' + fmt(t, 2) + ' s of pulling at ' + fmt(Fs.v, 1) + ' N the wheel turns at ' + fmt(w, 1) + ' rad/s and is still gaining ' + fmt(m.al, 1) + ' rad/s every second.');
    readout(d.readout, `\\kalpha = \\frac{\\text{net}\\;\\ktau}{\\kI} = \\frac{\\kr\\kF}{M\\kR^2} = \\frac{(${fmt(rs.v, 2)}\\ \\text{m})(${fmt(Fs.v, 1)}\\ \\text{N})}{(${fmt(Ms.v, 1)}\\ \\text{kg})(0.330\\ \\text{m})^2} = ${fmt(m.al, 1)}\\ \\text{rad/s}^2`,
      Fs.v === 0 ? 'Without a torque the angular velocity does not change, which is the rotational form of Newton’s first law.'
        : 'The angular velocity grows steadily while the pull lasts, ω = αt, and reaches ' + fmt(m.al * T, 1) + ' rad/s after 2.00 s. The same pull nearer the axle makes a smaller torque, and a heavier wheel has a larger moment of inertia, so either change spins the wheel up more slowly.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 10.11: the point mass on a frictionless table, tethered to a
   pivot and pushed perpendicular to the cord. Still: it is the free-body
   picture the derivation reads its three equalities from, a relation
   between quantities, so it answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-point-mass', 620);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 10, step: 0.1, value: 4, unit: 'N', dec: 1, aria: 'the force on the mass' });
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 2, step: 0.05, value: 0.5, unit: 'kg', dec: 2, aria: 'the mass' });
  const rs = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.6, unit: 'm', dec: 2, aria: 'the length of the cord, the distance from the pivot to the mass' });
  const PXV = 440, PY = 350, S = 190, KF = 22, KA = 10, AMAX = 200, ANG = 0.75, PX = 980;   /* the mass sits at the lower right and the force runs up and to the right, inside the table at every radius */
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), ac = C('acceleration'), gc = C('angular-acceleration'), qc = C('torque');
    const Fv = Fs.v, m = ms.v, r = rs.v, a = Fv / m, al = a / r, tau = r * Fv;
    const rp = r * S, mx = PXV + rp * Math.cos(ANG), my = PY + rp * Math.sin(ANG);
    const ux = Math.sin(ANG), uy = -Math.cos(ANG);                       /* the tangent, counterclockwise on the screen */
    /* the table top seen from above, the circular path and the cord */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(120, 92, 700, 516, 26); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'frictionless tabletop', 150, 128, PAL.muted, { size: 18 });
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.setLineDash([8, 10]); ctx.beginPath(); ctx.arc(PXV, PY, rp, 0, TAU); ctx.stroke(); ctx.restore();
    const small = rp < 90;                                                   /* a short cord leaves no room beside it, so its labels step out */
    text(ctx, 'circular path of radius r', PXV, small ? PY + 120 : PY + rp + 26, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.soft, 0.9) });
    line(ctx, PXV, PY, mx, my, PAL.ink, 3);
    if (small) text(ctx, 'r = ' + fmt(r, 2) + ' m', mx + 26, my + 44, pc, { size: 20, weight: 600, bg: alpha(PAL.soft, 0.9) });
    else text(ctx, 'r = ' + fmt(r, 2) + ' m', (PXV + mx) / 2 - 14, (PY + my) / 2 + 16, pc, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.soft, 0.9) });
    dot(ctx, PXV, PY, PAL.ink, false, 10);
    text(ctx, 'pivot', PXV - 18, PY + 26, PAL.ink, { size: 19, align: 'right', bg: alpha(PAL.soft, 0.9) });
    /* the force on the mass and the acceleration it produces, both along the tangent */
    if (Fv > 0) {
      const LF = Fv * KF, rx = Math.cos(ANG), ry = Math.sin(ANG);                 /* (rx, ry) points outward along the cord */
      arrow(ctx, mx, my, mx + LF * ux, my + LF * uy, fc, 5);
      /* the force label sits on the inner side of its arrow, between the arrow and the cord */
      text(ctx, 'F = ' + fmt(Fv, 1) + ' N', mx + LF * 0.55 * ux - 26 * rx, my + LF * 0.55 * uy - 26 * ry, fc, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.soft, 0.9) });
      const La = Math.min(a * KA, AMAX), ox = rx * 34, oy = ry * 34;     /* the acceleration arrow sits just outside the path, parallel to the force */
      if (a * KA > AMAX) line(ctx, mx + ox, my + oy, mx + ox + La * ux, my + oy + La * uy, ac, 3, [8, 8]);
      arrow(ctx, mx + ox, my + oy, mx + ox + La * ux, my + oy + La * uy, ac, a * KA > AMAX ? 2 : 4);
      text(ctx, 'a = F/m = ' + fmt(a, 1) + ' m/s²', mx + ox + La * 0.5 * ux + 22 * rx, my + oy + La * 0.5 * uy + 22 * ry + 8, ac, { size: 20, weight: 600, bg: alpha(PAL.soft, 0.9) });
      turnArc(ctx, PXV, PY, 62, gc, 4.0, 4);                                    /* the turn about the pivot, drawn above and to its left */
      text(ctx, 'α = ' + fmt(al, 1) + ' rad/s²', PXV - 60, PY - 70, gc, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.soft, 0.9) });
    }
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(mx, my, 16, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'm = ' + fmt(m, 2) + ' kg', mx - 22, my + 36, PAL.ink, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.soft, 0.9) });
    /* the three equalities of the derivation, with the live numbers */
    text(ctx, 'the same force, read three ways', PX, 130, PAL.muted, { size: 18 });
    reading(ctx, PX, 176, 'Newton’s second law along the force', 'a = F/m = ' + fmt(a, 1) + ' m/s²', ac);
    reading(ctx, PX, 250, 'the tangential acceleration is rα', 'α = a/r = ' + fmt(al, 1) + ' rad/s²', gc);
    reading(ctx, PX, 324, 'the torque about the pivot', 'τ = rF = ' + fmt(tau, 2) + ' N·m', qc);
    reading(ctx, PX, 398, 'and the same torque as mr²α', 'mr²α = ' + fmt(m * r * r * al, 2) + ' N·m', qc);
    reading(ctx, PX, 472, 'the moment of inertia of the point mass', 'mr² = ' + fmt(m * r * r, 3) + ' kg·m²', C('rotational-inertia'));
    topline(ctx, Fv === 0 ? 'With no force on the mass there is no acceleration, no angular acceleration and no torque.'
      : 'A force of ' + fmt(Fv, 1) + ' N on a ' + fmt(m, 2) + ' kg mass ' + fmt(r, 2) + ' m from the pivot gives it ' + fmt(a, 1) + ' m/s² along the force and ' + fmt(al, 1) + ' rad/s² about the pivot.');
    readout(d.readout, `\\ktau = \\kr\\kF = m\\kr^2\\kalpha = (${fmt(m, 2)}\\ \\text{kg})(${fmt(r, 2)}\\ \\text{m})^2(${fmt(al, 1)}\\ \\text{rad/s}^2) = ${fmt(tau, 2)}\\ \\text{N}\\cdot\\text{m}`,
      Fv === 0 ? 'Move the force slider and the mass begins to accelerate along the force, which is also an angular acceleration about the pivot.'
        : 'The force is perpendicular to the cord, so a = F/m = ' + fmt(a, 1) + ' m/s² is the tangential acceleration, and a = rα gives α = ' + fmt(al, 1) + ' rad/s². Multiplying F = mrα by r puts the torque on the left, and mr² = ' + fmt(m * r * r, 3) + ' kg·m² stands where the mass stands in F = ma.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.12: the ten rotational inertias. One body at a time, chosen
   from a dropdown, drawn from a locked view with its axis, its moment of
   inertia worked from the book's formula and compared with all of its
   mass at the farthest point from the axis. Still: a body and its axis
   have no time in them.
===================================================================== */
(function () {
  const d = sim('sim-inertias', 640);
  const SHAPES = [
    { value: 'hoop-axis', label: 'Hoop about cylinder axis', ktex: '\\kI = M\\kR^2', uses: { R: true } , I: (M, R) => M * R * R, far: (R) => R },
    { value: 'annular', label: 'Annular cylinder (or ring) about cylinder axis', ktex: '\\kI = \\frac{M}{2}(R_1^2 + R_2^2)', uses: { R: true, R1: true }, I: (M, R, l, R1) => 0.5 * M * (R1 * R1 + R * R), far: (R) => R },
    { value: 'disk-axis', label: 'Solid cylinder (or disk) about cylinder axis', ktex: '\\kI = \\frac{1}{2}M\\kR^2', uses: { R: true }, I: (M, R) => 0.5 * M * R * R, far: (R) => R },
    { value: 'disk-diameter', label: 'Solid cylinder (or disk) about central diameter', ktex: '\\kI = \\frac{1}{4}M\\kR^2 + \\frac{1}{12}M\\ell^2', uses: { R: true, l: true }, I: (M, R, l) => M * R * R / 4 + M * l * l / 12, far: (R, l) => Math.hypot(R, l / 2) },
    { value: 'rod-center', label: 'Thin rod about axis through center, perpendicular to length', ktex: '\\kI = \\frac{1}{12}M\\ell^2', uses: { l: true }, I: (M, R, l) => M * l * l / 12, far: (R, l) => l / 2 },
    { value: 'rod-end', label: 'Thin rod about axis through one end, perpendicular to length', ktex: '\\kI = \\frac{1}{3}M\\ell^2', uses: { l: true }, I: (M, R, l) => M * l * l / 3, far: (R, l) => l },
    { value: 'sphere', label: 'Solid sphere about any diameter', ktex: '\\kI = \\frac{2}{5}M\\kR^2', uses: { R: true }, I: (M, R) => 0.4 * M * R * R, far: (R) => R },
    { value: 'shell', label: 'Thin spherical shell about any diameter', ktex: '\\kI = \\frac{2}{3}M\\kR^2', uses: { R: true }, I: (M, R) => (2 / 3) * M * R * R, far: (R) => R },
    { value: 'hoop-diameter', label: 'Hoop about any diameter', ktex: '\\kI = \\frac{1}{2}M\\kR^2', uses: { R: true }, I: (M, R) => 0.5 * M * R * R, far: (R) => R },
    { value: 'slab', label: 'Slab about perpendicular axis through center', ktex: '\\kI = \\frac{1}{12}M(a^2 + b^2)', uses: { R: true, l: true }, I: (M, R, l) => M * (l * l + R * R) / 12, far: (R, l) => Math.hypot(R / 2, l / 2) },
  ];
  const shape = select(d.controls, { label: '\\text{the body}', options: SHAPES.map((s) => ({ value: s.value, label: s.label })), value: 'disk-axis', aria: 'the shape and the axis it turns about', onInput: hold });
  const Ms = ctl(d.controls, { label: 'M', cls: '', min: 10, max: 100, step: 0.5, value: 50, unit: 'kg', dec: 1, aria: 'the mass of the body' });
  const Rs = ctl(d.controls, { label: '\\kR', cls: 'position', min: 0.25, max: 2, step: 0.05, value: 1.5, unit: 'm', dec: 2, aria: 'the radius of the body, the slab’s width b or the outer radius of the ring' });
  const ls = ctl(d.controls, { label: '\\ell', cls: '', min: 0.25, max: 3, step: 0.05, value: 1, unit: 'm', dec: 2, aria: 'the length of the body or the slab’s length a' });
  const R1s = ctl(d.controls, { label: 'R_1', cls: 'position', min: 0.05, max: 1.9, step: 0.05, value: 1, unit: 'm', dec: 2, aria: 'the inner radius of the ring' });
  const cur = () => SHAPES.find((s) => s.value === shape.value);
  /* the sliders a formula has no use for are held (root rule 24.6) */
  function hold() { const u = cur().uses; Rs.disable(!u.R); ls.disable(!u.l); R1s.disable(!u.R1); }
  hold();
  /* the locked view: one viewpoint above and to the right of the body, as the book draws each shape */
  const YAW = 0.62, PITCH = 0.42, DIST = 3400, CX = 430, CY = 360, S = 120;      /* 1 m of body is 120 canvas units */
  const V = view({ yaw: YAW, pitch: PITCH, dist: DIST, cx: CX, cy: CY });
  const EYE = [DIST * Math.sin(YAW) * Math.cos(PITCH), DIST * Math.sin(PITCH), DIST * Math.cos(YAW) * Math.cos(PITCH)];
  const dist2 = (p) => Math.hypot(p[0] - EYE[0], p[1] - EYE[1], p[2] - EYE[2]);
  /* n points round a circle of radius r about the centre c in the plane spanned by the unit vectors u and v */
  const ring = (c, u, v, r, n = 56) => Array.from({ length: n }, (_, i) => { const a = (i / n) * TAU; return [c[0] + r * (u[0] * Math.cos(a) + v[0] * Math.sin(a)), c[1] + r * (u[1] * Math.cos(a) + v[1] * Math.sin(a)), c[2] + r * (u[2] * Math.cos(a) + v[2] * Math.sin(a))]; });
  /* the convex hull of projected points, so a cylinder's side is one silhouette */
  function hull(pts) {
    const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
    for (const q of p.reverse()) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }
  const X = [1, 0, 0], Y = [0, 1, 0], Z = [0, 0, 1];
  const neg = (v) => [-v[0], -v[1], -v[2]];
  /* a solid cylinder from centre a to centre b (world), radius r, with u and v spanning its end planes */
  function cylinder(ctx, a, b, r, u, v, axisN, open) {
    const ra = ring(a, u, v, r), rb = ring(b, u, v, r);
    face(ctx, hull(ra.concat(rb).map(V.P)), 0.16 + 0.1 * (1 - Math.abs(axisN[1])), 2.5);
    const nearA = dist2(a) < dist2(b), n = nearA ? neg(axisN) : axisN;      /* the cap the camera sees, and its outward normal */
    face(ctx, (nearA ? ra : rb).map(V.P), open ? null : V.shade(n), 3);
  }
  /* a sphere: a filled disc of the projected radius, shaded from the lamp's side */
  function sphere(ctx, c, r, hollow) {
    const q = V.P(c), rp = (r * DIST) / dist2(c);
    ctx.save(); ctx.beginPath(); ctx.arc(q[0], q[1], rp, 0, TAU);
    const g = ctx.createRadialGradient(q[0] - rp * 0.35, q[1] - rp * 0.4, rp * 0.1, q[0], q[1], rp);
    g.addColorStop(0, hollow ? alpha(PAL.ink, 0.06) : PAL.soft); g.addColorStop(1, alpha(PAL.ink, hollow ? 0.22 : 0.42));
    ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    if (hollow) { ctx.save(); ctx.setLineDash([6, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(q[0], q[1], rp, rp * 0.36, 0, 0, TAU); ctx.stroke(); ctx.restore(); }
    return rp;
  }
  /* a hoop: a thick stroked ring of radius r about c in the plane of u and v */
  function hoop(ctx, c, u, v, r) {
    const pts = ring(c, u, v, r, 72).map(V.P);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.panel, 0.35); ctx.lineWidth = 4; ctx.stroke(); ctx.restore();
  }
  /* a box centred on the origin with half sizes hx, hy, hz: the three faces the camera sees */
  function box(ctx, hx, hy, hz) {
    const P = (x, y, z) => V.P([x * hx, y * hy, z * hz]);
    const faces = [
      { n: [0, 1, 0], pts: [P(-1, 1, -1), P(1, 1, -1), P(1, 1, 1), P(-1, 1, 1)] },
      { n: [1, 0, 0], pts: [P(1, -1, -1), P(1, 1, -1), P(1, 1, 1), P(1, -1, 1)] },
      { n: [0, 0, 1], pts: [P(-1, -1, 1), P(1, -1, 1), P(1, 1, 1), P(-1, 1, 1)] },
    ];
    faces.forEach((f) => face(ctx, f.pts, V.shade(f.n), 3));
  }
  /* the axis of rotation: a dashed line through the body, drawn under it and then again above its top */
  function axis(ctx, top, bottom) {
    const a = V.P([0, top, 0]), b = V.P([0, bottom, 0]);
    a[1] = Math.max(a[1], 128);                                             /* the axis stops under the headline */
    line(ctx, a[0], a[1], b[0], b[1], PAL.muted, 3, [10, 10]);
    text(ctx, 'axis', a[0] + 14, a[1] - 4, PAL.ink, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) });
    return a;
  }
  function axisOver(ctx, top, y) { const a = V.P([0, top, 0]), b = V.P([0, y, 0]); a[1] = Math.max(a[1], 128); line(ctx, a[0], a[1], b[0], b[1], PAL.muted, 3, [10, 10]); }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('position'), ic = C('rotational-inertia');
    const s = cur(), M = Ms.v, R = Rs.v, l = ls.v;
    if (s.uses.R1 && R1s.v >= R) R1s.set(Math.max(0.05, R - 0.05));        /* the hole stays inside the ring */
    const R1 = R1s.v;
    const I = s.I(M, R, l, R1), far = s.far(R, l), ref = M * far * far, share = I / ref;
    const r = R * S, L = l * S, r1 = R1 * S, labs = [];
    const dim = (p, str) => labs.push([V.P(p), str]);
    /* the body and its axis, one shape at a time; the axis is always vertical */
    let top = 0;
    switch (s.value) {
      case 'hoop-axis': top = 0; axis(ctx, 1.9 * r + 80, -1.2 * r - 40); hoop(ctx, [0, 0, 0], X, Z, r); dim([r, 0, 0], 'R = ' + fmt(R, 2) + ' m'); axisOver(ctx, 1.9 * r + 80, 0); break;
      case 'hoop-diameter': top = r; axis(ctx, 1.3 * r + 80, -1.2 * r - 40); hoop(ctx, [0, 0, 0], X, Y, r); dim([r, 0, 0], 'R = ' + fmt(R, 2) + ' m'); axisOver(ctx, 1.3 * r + 80, r); break;
      case 'annular': { const h = Math.max(40, 0.45 * r); top = h / 2; axis(ctx, h / 2 + 1.1 * r + 80, -h / 2 - 1.1 * r - 40);
        cylinder(ctx, [0, -h / 2, 0], [0, h / 2, 0], r, X, Z, Y, true);
        /* the top face is an annulus, and the hole shows its inner wall */
        const outer = ring([0, h / 2, 0], X, Z, r).map(V.P), inner = ring([0, h / 2, 0], X, Z, r1).map(V.P), innerLow = ring([0, -h / 2, 0], X, Z, r1).map(V.P);
        ctx.save(); ctx.beginPath(); inner.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.clip();
        face(ctx, hull(inner.concat(innerLow)), 0.34, 0); ctx.restore();
        ctx.save(); ctx.beginPath(); outer.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
        inner.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
        ctx.fillStyle = PAL.soft; ctx.fill('evenodd'); ctx.fillStyle = alpha(PAL.ink, V.shade(Y)); ctx.fill('evenodd');
        ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
        dim([r, h / 2, 0], 'R_2 = ' + fmt(R, 2) + ' m'); dim([-r1 * 0.7, h / 2, r1 * 0.7], 'R_1 = ' + fmt(R1, 2) + ' m'); axisOver(ctx, h / 2 + 1.1 * r + 80, h / 2); break; }
      case 'disk-axis': { const h = Math.max(36, 0.3 * r); top = h / 2; axis(ctx, h / 2 + 1.1 * r + 80, -h / 2 - 1.1 * r - 40); cylinder(ctx, [0, -h / 2, 0], [0, h / 2, 0], r, X, Z, Y, false); dim([r, h / 2, 0], 'R = ' + fmt(R, 2) + ' m'); axisOver(ctx, h / 2 + 1.1 * r + 80, h / 2); break; }
      case 'disk-diameter': top = r; axis(ctx, r + 120, -r - 40); cylinder(ctx, [-L / 2, 0, 0], [L / 2, 0, 0], r, Y, Z, X, false); dim([L / 2 + 10, -r, 0], 'R = ' + fmt(R, 2) + ' m'); dim([0, -r - 24, r], 'ℓ = ' + fmt(l, 2) + ' m'); axisOver(ctx, r + 120, r); break;
      case 'rod-center': top = 12; axis(ctx, 160, -80); cylinder(ctx, [-L / 2, 0, 0], [L / 2, 0, 0], 12, Y, Z, X, false); dim([0, -40, 14], 'ℓ = ' + fmt(l, 2) + ' m'); axisOver(ctx, 160, 12); break;
      case 'rod-end': top = 12; axis(ctx, 160, -80); cylinder(ctx, [0, 0, 0], [L, 0, 0], 12, Y, Z, X, false); dim([L / 2, -40, 14], 'ℓ = ' + fmt(l, 2) + ' m'); axisOver(ctx, 160, 12); break;
      case 'sphere': case 'shell': { top = r; axis(ctx, r + 120, -r - 40); const rp = sphere(ctx, [0, 0, 0], r, s.value === 'shell'); labs.push([[CX + rp + 4, CY + 10], 'R = ' + fmt(R, 2) + ' m']); axisOver(ctx, r + 120, r); break; }
      case 'slab': top = 8; axis(ctx, 170, -90); box(ctx, L / 2, 8, r / 2); dim([0, -30, r / 2 + 10], 'a = ' + fmt(l, 2) + ' m'); dim([L / 2 + 10, -30, 0], 'b = ' + fmt(R, 2) + ' m'); axisOver(ctx, 170, 8); break;
    }
    labs.forEach(([p, str]) => text(ctx, str, Math.min(760, Math.max(60, p[0] + 16)), Math.min(600, Math.max(100, p[1] + 20)), pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) }));
    /* the body's name, its formula and its moment of inertia, then the share of the farthest-mass value */
    const PX = 880;
    /* a long name breaks at its comma onto a second line, so it stays inside the canvas */
    const cut = s.label.length > 34 ? s.label.indexOf(', ') : -1;
    if (cut < 0) text(ctx, s.label, PX, 128, PAL.ink, { size: 21, weight: 600 });
    else { text(ctx, s.label.slice(0, cut + 1), PX, 118, PAL.ink, { size: 21, weight: 600 }); text(ctx, s.label.slice(cut + 2), PX, 144, PAL.ink, { size: 21, weight: 600 }); }
    text(ctx, 'M = ' + fmt(M, 1) + ' kg', PX, 174, PAL.ink, { size: 20 });
    reading(ctx, PX, 214, 'moment of inertia about the axis', 'I = ' + fmt(I, I < 10 ? 3 : 1) + ' kg·m²', ic);
    text(ctx, 'compared with all the mass ' + fmt(far, 2) + ' m from the axis,', PX, 300, PAL.muted, { size: 18 });
    text(ctx, 'the farthest any of it sits: M·(' + fmt(far, 2) + ' m)² = ' + fmt(ref, ref < 10 ? 3 : 1) + ' kg·m²', PX, 326, PAL.muted, { size: 18 });
    const bx = PX, bw = 440, by = 372;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(bx, by, bw, 30); ctx.fillStyle = alpha(ic, 0.55); ctx.fillRect(bx, by, bw * Math.min(1, share), 30); ctx.restore();
    line(ctx, bx + bw * Math.min(1, share), by - 6, bx + bw * Math.min(1, share), by + 36, ic, 3);
    line(ctx, bx + bw, by - 6, bx + bw, by + 36, PAL.muted, 2);
    text(ctx, fmt(100 * share, 0) + '%', bx + bw * Math.min(1, share) + (share > 0.8 ? -10 : 10), by + 60, ic, { size: 20, weight: 600, align: share > 0.8 ? 'right' : 'left' });
    text(ctx, 'a hoop about its axis reaches 100%, because every bit of it is at the rim', PX, by + 100, PAL.muted, { size: 17 });
    topline(ctx, (/^[aeiou]/i.test(s.label) ? 'An ' : 'A ') + s.label.charAt(0).toLowerCase() + s.label.slice(1).replace(' (or disk)', '').replace(' (or ring)', '') + ' of ' + fmt(M, 1) + ' kg has a moment of inertia of ' + fmt(I, I < 10 ? 3 : 1) + ' kg·m², ' + fmt(100 * share, 0) + '% of what all its mass at ' + fmt(far, 2) + ' m would give.');
    const nums = s.value === 'annular' ? `\\frac{${fmt(M, 1)}\\ \\text{kg}}{2}\\left[(${fmt(R1, 2)}\\ \\text{m})^2 + (${fmt(R, 2)}\\ \\text{m})^2\\right]`
      : s.value === 'disk-diameter' ? `\\frac{(${fmt(M, 1)}\\ \\text{kg})(${fmt(R, 2)}\\ \\text{m})^2}{4} + \\frac{(${fmt(M, 1)}\\ \\text{kg})(${fmt(l, 2)}\\ \\text{m})^2}{12}`
      : s.value === 'slab' ? `\\frac{(${fmt(M, 1)}\\ \\text{kg})\\left[(${fmt(l, 2)}\\ \\text{m})^2 + (${fmt(R, 2)}\\ \\text{m})^2\\right]}{12}`
      : s.uses.l ? `${s.value === 'rod-center' ? '\\frac{1}{12}' : '\\frac{1}{3}'}(${fmt(M, 1)}\\ \\text{kg})(${fmt(l, 2)}\\ \\text{m})^2`
      : `${s.ktex.split('= ')[1].split('M')[0]}(${fmt(M, 1)}\\ \\text{kg})(${fmt(R, 2)}\\ \\text{m})^2`;
    readout(d.readout, `${s.ktex} = ${nums} = ${fmt(I, I < 10 ? 3 : 1)}\\ \\text{kg}\\cdot\\text{m}^2`,
      'The formulas differ only in how far from the axis the mass sits on the whole. The mass of a hoop is all at the rim, so its moment of inertia is the largest a body of that mass and radius can have; a disk of the same mass and radius has half as much, because most of its mass is nearer the axis than the rim.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.13: the father pushing the merry-go-round of Example 10.7,
   seen from above, with a graph of the angular velocity against time
   beside it. Moving: the discussion times the push at 2.00 s and reads
   the angular velocity it produces, so the platform spins up from rest
   for 2.00 s and holds; the cycle is the push.
===================================================================== */
(function () {
  const d = sim('sim-merry-go-round', 620);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 400, step: 5, value: 250, unit: 'N', dec: 0, onInput: reset, aria: 'the father’s push at the edge' });
  const mc = ctl(d.controls, { label: 'm_{\\text{child}}', cls: '', min: 0, max: 40, step: 0.5, value: 18, unit: 'kg', dec: 1, onInput: reset, aria: 'the mass of the child, zero when no one is on the platform' });
  const rc = ctl(d.controls, { label: '\\kr_{\\text{c}}', cls: 'position', min: 0, max: 1.5, step: 0.05, value: 1.25, unit: 'm', dec: 2, onInput: reset, aria: 'the distance from the center to the child' });
  const Ms = ctl(d.controls, { label: 'M', cls: '', min: 20, max: 100, step: 0.5, value: 50, unit: 'kg', dec: 1, onInput: reset, aria: 'the mass of the platform' });
  const R = 1.5, T = 2, CX = 400, CY = 350, S = 140, KF = 0.5, BOX = { l: 900, r: 1320, t: 130, b: 470 }, WMAX = 30;   /* the graph is fixed at 0 to 2.00 s and 0 to 30 rad/s, twice the book's 13.3 rad/s rounded */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function model() {
    const tau = R * Fs.v, Id = 0.5 * Ms.v * R * R, Ic = mc.v * rc.v * rc.v, I = Id + Ic;
    return { tau, Id, Ic, I, al: tau / I, al0: tau / Id };
  }
  let childAt = { x: 0, y: 0 };
  hover(d.stage, () => (mc.v > 0 ? [{ x: childAt.x, y: childAt.y, r: 24, name: 'the child, ' + fmt(mc.v, 1) + ' kg at ' + fmt(rc.v, 2) + ' m from the center' }] : []));
  function draw() {
    const { ctx, H } = begin(d.c);
    const fc = C('force'), pc = C('position'), ic = C('rotational-inertia'), ac = C('angular-acceleration'), wc = C('angular-rate'), tc = C('time'), qc = C('torque');
    const m = model(), t = cy.now(), th = 0.5 * m.al * t * t, w = m.al * t, done = t >= T - 1e-9, loaded = mc.v > 0;
    const Rp = R * S;
    const L = labeller(ctx, H); L.block(0, 0, 1400, 96); L.block(BOX.l - 80, BOX.t - 60, 1400, H);
    /* the platform from above, its handrails turning counterclockwise, and the child on it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(CX, CY, Rp, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4;
    for (let k = 0; k < 4; k++) { const a = -th + (k / 4) * TAU; ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(CX + (Rp - 10) * Math.cos(a), CY + (Rp - 10) * Math.sin(a)); ctx.stroke(); }
    ctx.restore();
    const a0 = -th + Math.PI; line(ctx, CX, CY, CX + (Rp - 10) * Math.cos(a0), CY + (Rp - 10) * Math.sin(a0), PAL.ink, 5);   /* one rail marked so the turn can be followed */
    dot(ctx, CX, CY, PAL.ink, true, 8);
    text(ctx, 'center', CX + 16, CY - 20, PAL.ink, { size: 18, bg: alpha(PAL.soft, 0.9) });
    /* the radius, read out where the push is applied */
    const ph = Math.PI / 2, ex = CX + Rp * Math.cos(ph), ey = CY + Rp * Math.sin(ph);
    line(ctx, CX, CY, ex, ey, pc, 3, [6, 8]);
    text(ctx, 'R = 1.50 m', CX + 14, (CY + ey) / 2 + 30, pc, { size: 20, weight: 600, bg: alpha(PAL.soft, 0.9) });
    if (loaded) {
      const ca = -th + Math.PI / 2 - 1.1, cx = CX + rc.v * S * Math.cos(ca), cyy = CY + rc.v * S * Math.sin(ca);
      childAt = { x: cx, y: cyy };
      if (rc.v > 0.1) line(ctx, CX, CY, cx, cyy, pc, 2, [4, 8]);
      personAbove(ctx, cx, cyy, 0.8, ca + Math.PI / 2, PAL.ink);   /* the child sits facing the way the platform carries her */
      const rx = cx - CX, ry = cyy - CY, rl = Math.hypot(rx, ry) || 1;
      L.add('child, ' + fmt(mc.v, 1) + ' kg at ' + fmt(rc.v, 2) + ' m', cx, cyy, rx / rl, ry / rl, PAL.ink, 19, 30);
    } else text(ctx, 'no one is on the platform', CX, CY + 60, PAL.muted, { size: 18, align: 'center', bg: alpha(PAL.soft, 0.9) });
    /* the father's push at the edge, perpendicular to the radius, and the turn it makes */
    if (Fs.v > 0) {
      arrow(ctx, ex, ey, ex - Fs.v * KF, ey, fc, 5);
      text(ctx, 'F = ' + fmt(Fs.v, 0) + ' N', ex - Fs.v * KF - 12, ey + 30, fc, { size: 21, weight: 600, align: Fs.v * KF > 120 ? 'left' : 'right', bg: alpha(PAL.panel, 0.9) });
      /* the father stands outside the rim behind his push, seen from above, both hands on the edge */
      const fx = ex + 58, fy = ey + 34, fh = Math.atan2(ey - fy, ex - fx);
      personAbove(ctx, fx, fy, 1, fh, PAL.ink, [{ x: ex + 2, y: ey + 2 }, { x: ex + 14, y: ey + 10 }]);
      text(ctx, 'the father', fx + 40, fy + 4, PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.9) });
      turnArc(ctx, CX, CY, Rp + 40, ac, -Math.PI / 2);
      L.add('α = ' + fmt(m.al, 2) + ' rad/s²', CX + (Rp + 40) * Math.cos(-0.87), CY + (Rp + 40) * Math.sin(-0.87), 0.7, -0.5, ac, 21, 24);
    }
    L.flush();
    /* the graph beside: the angular velocity against time, the loaded platform solid and the empty one dashed */
    const g = axes(ctx, BOX, [0, T], [0, WMAX], { xl: 't (s)', xc: tc, yl: 'ω (rad/s)', yc: wc, nx: 4, ny: 3, fx: (v) => fmt(v, 1) });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => Math.min(WMAX, m.al0 * s), 0, T, g.X, g.Y, alpha(wc, 0.55), 3, 40); ctx.restore();
    if (loaded) curve(ctx, (s) => Math.min(WMAX, m.al * s), 0, t, g.X, g.Y, wc, 5, 40); else curve(ctx, (s) => Math.min(WMAX, m.al0 * s), 0, t, g.X, g.Y, wc, 5, 40);
    const p = pinned(ctx, BOX, g.X, g.Y, t, w, wc, 'ω = ' + fmt(w, 1) + ' rad/s');
    if (!p.out && t > 0.05) line(ctx, p.x, p.y, p.x, BOX.b, tc, 2, [4, 8]);
    text(ctx, 'with no one on it (dashed)', BOX.r, BOX.t - 24, alpha(wc, 0.7), { size: 17, align: 'right' });
    /* the readings under the graph */
    text(ctx, 'τ = RF = ' + fmt(m.tau, 0) + ' N·m', 900, 548, qc, { size: 20, weight: 600 });
    text(ctx, 'I = ' + fmt(m.I, 1) + ' kg·m²', 1140, 548, ic, { size: 20, weight: 600 });
    text(ctx, 'ω = ' + fmt(w, 2) + ' rad/s = ' + fmt(w / TAU, 2) + ' rev/s', 900, 586, wc, { size: 20, weight: 600 });
    text(ctx, 't = ' + fmt(t, 2) + ' s', 1200, 586, tc, { size: 20, weight: 600 });
    const who = loaded ? 'With a ' + fmt(mc.v, 1) + ' kg child ' + fmt(rc.v, 2) + ' m from the center' : 'With no one on the platform';
    topline(ctx, Fs.v === 0 ? 'Without a push there is no torque, and the platform stays at rest whoever sits on it.'
      : t < 1e-9 ? who + ' the platform is at rest, and a push of ' + fmt(Fs.v, 0) + ' N at its edge is about to start it turning.'
      : done ? who + ' the push makes ' + fmt(m.tau, 0) + ' N·m, the moment of inertia is ' + fmt(m.I, 1) + ' kg·m² and after 2.00 s the platform turns at ' + fmt(w, 2) + ' rad/s.'
      : 'After ' + fmt(t, 2) + ' s of pushing the platform turns at ' + fmt(w, 2) + ' rad/s, gaining ' + fmt(m.al, 2) + ' rad/s every second.');
    readout(d.readout, `\\kalpha = \\frac{\\ktau}{\\kI} = \\frac{${fmt(m.tau, 0)}\\ \\text{N}\\cdot\\text{m}}{${fmt(m.I, 1)}\\ \\text{kg}\\cdot\\text{m}^2} = ${fmt(m.al, 2)}\\ \\text{rad/s}^2`,
      (loaded ? 'The moment of inertia is the disk’s plus the child’s, I = ½MR² + m r_c² = ' + fmt(m.Id, 1) + ' + ' + fmt(m.Ic, 1) + ' = ' + fmt(m.I, 1) + ' kg·m². '
        : 'The moment of inertia is the disk’s alone, I = ½MR² = ' + fmt(m.Id, 1) + ' kg·m². ')
      + 'After 2.00 s of pushing the platform turns at ω = αt = ' + fmt(m.al * T, 2) + ' rad/s, which is ' + fmt(m.al * T / TAU, 2) + ' rev/s; the same push on the empty platform would reach ' + fmt(m.al0 * T, 1) + ' rad/s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();
};
