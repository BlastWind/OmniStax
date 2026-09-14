/* Figures for section 10.4 Rotational Kinetic Energy: Work and Energy Revisited. Boots against the section's text article.
   Two of the four figures have a clock in them and register a cycle: the grindstone spins up from rest under a
   constant torque, and the three cans race down their inclines. The disk of Figure 10.17 and the helicopter's two
   energies only answer their sliders, so they are still pictures with no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, labeller, pinned, person } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') ? String(Math.round(Number(s))) : s); };
/* a circle stroked and filled */
function disc(ctx, x, y, r, fill, stroke, w = 3) { ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore(); }
/* an arc of the rim from canvas angle a0 to a1, stroked in a colour */
function rimArc(ctx, x, y, r, a0, a1, color, w = 6, ccw = false) { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, a0, a1, ccw); ctx.stroke(); ctx.restore(); }
/* the turning a torque produces: a counterclockwise arc about (x, y) with an arrowhead at its end */
function turnArc(ctx, x, y, R, color, mid = -Math.PI / 2, half = 0.9) {
  const a0 = mid + half, a1 = mid - half;   /* counterclockwise on the canvas runs toward decreasing angle */
  rimArc(ctx, x, y, R, a0, a1, color, 4, true);
  const t = a1 + Math.PI / 2, hx = x + R * Math.cos(a1), hy = y + R * Math.sin(a1);
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(hx + 12 * Math.cos(t - Math.PI), hy + 12 * Math.sin(t - Math.PI));
  ctx.lineTo(hx + 8 * Math.cos(t - Math.PI / 2), hy + 8 * Math.sin(t - Math.PI / 2)); ctx.lineTo(hx + 8 * Math.cos(t + Math.PI / 2), hy + 8 * Math.sin(t + Math.PI / 2)); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a vertical bar on a fixed cap. The bar is filled to its value; a value past the cap fills the bar and pins a
   hollow marker at the top with the value written beside it, as pinned() does on a graph, and never rescales. */
function bar(ctx, x, w, base, top, v, cap, color, label, hatch) {
  const h = (Math.min(v, cap) / cap) * (base - top), y = base - h;
  ctx.save(); ctx.fillStyle = hatch ? alpha(color, 0.18) : color; ctx.fillRect(x, y, w, h);
  if (hatch) { ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); for (let s = x - h; s < x + w; s += 14) { ctx.moveTo(s, base); ctx.lineTo(s + h, y); } ctx.stroke(); }
  ctx.restore();
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(x, y, w, h); ctx.restore();
  text(ctx, label, x + w / 2, base + 26, color, { size: 20, weight: 600, align: 'center' });
  if (v > cap) { dot(ctx, x + w / 2, top, color, false, 9); arrow(ctx, x + w / 2, top + 30, x + w / 2, top + 8, color, 3); }
  return y;
}
/* a vertical scale beside the bars, ticks every `step` from 0 to cap */
function vscale(ctx, x, base, top, cap, step, unit) {
  line(ctx, x, base, x, top, PAL.muted, 2);
  for (let v = 0; v <= cap + 1e-9; v += step) { const y = base - (v / cap) * (base - top); line(ctx, x - 8, y, x, y, PAL.muted, 2); text(ctx, fmt(v, 0) + (v === cap && unit ? ' ' + unit : ''), x - 14, y, PAL.muted, { size: 17, align: 'right' }); }
}
/* an angle arc about (x, y) from canvas angle 0 counterclockwise through th radians, labelled at its middle */
function angleArc(ctx, L, x, y, r, th, label, color) {
  if (th < 0.05) return;
  rimArc(ctx, x, y, r, 0, -th, color, 2.5, true);
  const a = -th / 2; L.add(label, x + r * Math.cos(a), y + r * Math.sin(a), Math.cos(a), Math.sin(a), color, 20, 30);
}
/* the label of a force arrow: beside its head along the arrow, unless the arrow points up into the headline band,
   when the label steps sideways, away from the axis, so that it never lands on the headline */
function forceLabel(L, s, cx, hx, hy, ux, uy, color) {
  if (hy - 60 < 100) L.add(s, hx, hy, hx >= cx ? 1 : -1, 0, color, 22, 22); else L.add(s, hx, hy, ux, uy, color, 22, 22);
}
/* a helicopter in side view, nose to the right, centred on its cabin at (x, y); the rotor is drawn by the caller */
function helicopter(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-40, -22); ctx.lineTo(36, -22); ctx.quadraticCurveTo(70, -18, 66, 8); ctx.quadraticCurveTo(50, 26, 10, 26); ctx.lineTo(-40, 20);
  ctx.lineTo(-130, 4); ctx.lineTo(-130, -8); ctx.lineTo(-44, -8); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(-130, -8); ctx.lineTo(-136, -40); ctx.lineTo(-118, -40); ctx.lineTo(-124, -8); ctx.fill();   /* the fin */
  ctx.beginPath(); ctx.moveTo(-20, 26); ctx.lineTo(-30, 44); ctx.lineTo(50, 44); ctx.moveTo(30, 26); ctx.lineTo(40, 44); ctx.moveTo(-2, -22); ctx.lineTo(-2, -36); ctx.stroke();   /* skids and mast */
  ctx.restore();
}

/* =====================================================================
   FIGURE 10.17: the disk turned by a force kept perpendicular to its
   radius. The point of application travels the arc Δs; the work is the
   force times that arc, and it is the torque times the angle, which is
   the area under the flat torque line on the graph beside the disk. The
   angle is the reader's choice, so the figure is still.
===================================================================== */
(function () {
  const d = sim('sim-disk-work', 600);
  const Fc = ctl(d.controls, { label: '\\kF', cls: 'force', min: 50, max: 400, step: 5, value: 200, unit: 'N', dec: 0, aria: 'net force at the rim' });
  const rc = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.1, max: 0.5, step: 0.005, value: 0.32, unit: 'm', dec: 3, aria: 'radius of the disk' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 6.28, step: 0.01, value: 1, unit: 'rad', dec: 2, aria: 'angle turned through',
    detents: [1, { v: 1.57, label: 'π/2' }, { v: 3.14, label: 'π' }, { v: 6.28, label: '2π' }], snap: true });
  const PI_TICK = ['0', 'π/2', 'π', '3π/2', '2π'];
  function draw() {
    const { ctx, H } = begin(d.c);
    const Fv = Fc.v, r = rc.v, t = th.v, tau = Fv * r, ds = r * t, W = tau * t;
    const L = labeller(ctx, H); L.block(0, 0, 1400, 96);
    /* the disk: its drawn radius runs 100 to 220 units over the slider's range, so the radius is visibly a variable,
       and the centre sits low enough that the force arrow at the rim never reaches the headline band */
    const cx = 340, cy = 370, R = 100 + ((r - 0.1) / 0.4) * 120;
    disc(ctx, cx, cy, R, PAL.soft, PAL.muted, 3);
    dot(ctx, cx, cy, PAL.ink, true, 6);
    /* the start of the turn, hollow, and the arc Δs from it to the point of application */
    dot(ctx, cx + R, cy, C('position'), false, 8);
    if (t > 0.02) rimArc(ctx, cx, cy, R, 0, -t, C('position'), 7, true);
    const px = cx + R * Math.cos(-t), py = cy + R * Math.sin(-t);
    line(ctx, cx, cy, px, py, C('position'), 3);
    L.add('r = ' + fmt(r, 3) + ' m', cx + (R / 2) * Math.cos(-t), cy + (R / 2) * Math.sin(-t), -Math.sin(-t), Math.cos(-t), C('position'), 20, 22);
    if (t > 0.3) { const a = -t / 2; L.add('Δs = ' + fmt(ds, 3) + ' m', cx + R * Math.cos(a), cy + R * Math.sin(a), Math.cos(a), Math.sin(a), C('position'), 20, 26); }
    angleArc(ctx, L, cx, cy, 52, Math.min(t, TAU - 0.01), 'θ = ' + fmt(t, 2) + ' rad', PAL.ink);
    /* the force, tangent to the rim in the direction of the turn */
    const ux = Math.sin(-t), uy = -Math.cos(-t), Lf = 20 + Fv * 0.22;
    arrow(ctx, px, py, px + ux * Lf, py + uy * Lf, C('force'), 5); forceLabel(L, 'net F = ' + fmt(Fv, 0) + ' N', cx, px + ux * Lf, py + uy * Lf, ux, uy, C('force'));
    dot(ctx, px, py, C('force'), true, 8);
    /* the turning the torque produces, about the axis */
    if (tau > 0) { turnArc(ctx, cx, cy, 28, C('torque'), Math.PI / 2 + 0.6, 1.1); L.add('net τ = ' + fmt(tau, 1) + ' N·m', cx, cy + 34, 0, 1, C('torque'), 20, 26); }
    /* the graph: torque against angle, the work as the area beneath. Axes fixed at 0 to 2π rad and 0 to 200 N·m,
       the slider maxima (400 N × 0.5 m), never rescaled. */
    const box = { l: 800, r: 1320, t: 170, b: 470 };
    const g = axes(ctx, box, [0, TAU], [0, 200], { xl: 'θ (rad)', xc: PAL.ink, yl: 'net τ (N·m)', yc: C('torque'), nx: 4, ny: 4, fx: (v) => PI_TICK[Math.round(v / (Math.PI / 2))] });
    if (t > 0 && tau > 0) { ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.35); ctx.fillRect(g.X(0), g.Y(tau), g.X(t) - g.X(0), g.Y(0) - g.Y(tau)); ctx.restore(); }
    line(ctx, g.X(0), g.Y(tau), g.X(t), g.Y(tau), C('torque'), 5);
    if (t < TAU) line(ctx, g.X(t), g.Y(tau), g.X(TAU), g.Y(tau), C('torque'), 3, [10, 10]);
    if (t > 0) line(ctx, g.X(t), g.Y(0), g.X(t), g.Y(tau), PAL.ink, 2, [4, 8]);
    dot(ctx, g.X(t), g.Y(tau), C('torque'), true, 9);
    /* the area's name sits inside the shaded rectangle where it is wide enough, and otherwise to the right of it */
    const wide = g.X(t) - g.X(0) > 250, tall = g.Y(0) - g.Y(tau) > 44;
    if (wide && tall) text(ctx, 'net W = area = ' + fmt(W, 1) + ' J', g.X(t / 2), g.Y(tau / 2), C('energy'), { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    else { const right = g.X(t) < 1080; text(ctx, 'net W = area = ' + fmt(W, 1) + ' J', g.X(t) + (right ? 18 : -18), tall ? g.Y(tau / 2) : g.Y(tau) - 26, C('energy'), { size: 20, weight: 600, align: right ? 'left' : 'right', bg: alpha(PAL.panel, 0.85) }); }
    L.flush();
    topline(ctx, t === 0 ? 'A force of ' + fmt(Fv, 0) + ' N at ' + fmt(r, 3) + ' m from the axis makes a torque of ' + fmt(tau, 1) + ' N·m, but the disk has not turned, so no work is done yet.'
      : 'A force of ' + fmt(Fv, 0) + ' N at ' + fmt(r, 3) + ' m from the axis, kept perpendicular through ' + fmt(t, 2) + ' rad, does ' + fmt(W, 1) + ' J of work.');
    readout(d.readout, `\\text{net}\\;\\kW = (\\text{net}\\;\\ktau)\\theta = (${fmt(tau, 1)}\\ \\text{N}\\cdot\\text{m})(${fmt(t, 2)}\\ \\text{rad}) = ${fmt(W, 1)}\\ \\text{J}`,
      'The same work as force times arc length: (net F)Δs = (' + fmt(Fv, 0) + ' N)(' + fmt(ds, 3) + ' m) = ' + fmt(W, 1) + ' J, since Δs = rθ.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.19: the large grindstone of Example 10.8. The stone starts
   from rest and turns under the constant torque of the hand at its edge;
   the work done so far and the rotational kinetic energy so far rise as
   two bars that are equal at every instant. One spin-up per loop, so the
   figure gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-grindstone', 640);
  const Fc = ctl(d.controls, { label: '\\kF', cls: 'force', min: 50, max: 400, step: 5, value: 200, unit: 'N', dec: 0, onInput: reset, aria: 'force at the edge' });
  const rc = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.1, max: 0.5, step: 0.005, value: 0.32, unit: 'm', dec: 3, onInput: reset, aria: 'radius of the grindstone' });
  const Mc = ctl(d.controls, { label: 'M', cls: '', min: 20, max: 150, step: 0.5, value: 85, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the grindstone' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0.25, max: 3.14, step: 0.01, value: 1, unit: 'rad', dec: 2, onInput: reset, aria: 'angle turned through' });
  /* the model: a uniform disk of radius r pushed at its edge with F, starting from rest */
  const model = () => { const tau = Fc.v * rc.v, I = 0.5 * Mc.v * rc.v * rc.v, a = tau / I; return { tau, I, a, T: Math.sqrt((2 * th.v) / a) }; };
  const cy = cycle(() => model().T, 1.2);
  function reset() { cy.reset(); }
  const CAP = 200;   /* J; the bars' fixed cap, in which the example's 64.0 J stands a third of the way up */
  function draw() {
    const { ctx, H } = begin(d.c);
    const m = model(), t = cy.now(), done = t >= m.T - 1e-9;
    const phi = Math.min(th.v, 0.5 * m.a * t * t), w = m.a * t, W = m.tau * phi, KE = 0.5 * m.I * w * w;
    const L = labeller(ctx, H); L.block(0, 0, 1400, 96);
    /* the stone, face on, standing on a mount; its drawn radius runs 100 to 210 units over the slider's range, and the
       centre sits low enough that the hand's force arrow never reaches the headline band */
    const cx = 420, cyy = 370, R = 100 + ((rc.v - 0.1) / 0.4) * 110, ground = cyy + 232;
    line(ctx, 60, ground, 1000, ground, PAL.muted, 3);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx - 70, ground); ctx.lineTo(cx - 40, cyy + 20); ctx.lineTo(cx + 40, cyy + 20); ctx.lineTo(cx + 70, ground); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    disc(ctx, cx, cyy, R, PAL.soft, PAL.muted, 4);
    /* four marks on the stone turn with it, so the turning can be seen */
    for (let k = 0; k < 4; k++) { const a = -phi + (k * TAU) / 4; line(ctx, cx + 0.35 * R * Math.cos(a), cyy + 0.35 * R * Math.sin(a), cx + (R - 8) * Math.cos(a), cyy + (R - 8) * Math.sin(a), alpha(PAL.muted, 0.7), 2); }
    disc(ctx, cx, cyy, 14, PAL.panel, PAL.ink, 3);
    /* the start of the push, hollow, the arc turned through so far, and the point of application */
    dot(ctx, cx + R, cyy, C('position'), false, 8);
    if (phi > 0.02) rimArc(ctx, cx, cyy, R, 0, -phi, C('position'), 6, true);
    const px = cx + R * Math.cos(-phi), py = cyy + R * Math.sin(-phi);
    line(ctx, cx, cyy, px, py, C('position'), 3);
    L.add('r = ' + fmt(rc.v, 3) + ' m', cx + (R / 2) * Math.cos(-phi), cyy + (R / 2) * Math.sin(-phi), -Math.sin(-phi), Math.cos(-phi), C('position'), 20, 22);
    angleArc(ctx, L, cx, cyy, 46, phi, 'θ = ' + fmt(phi, 2) + ' rad', PAL.ink);
    /* the person at the stone's edge, her hands on the point of application; she stands to the right of the mount */
    const ppx = cx + R + 60, S = 2.3;
    person(ctx, ppx, ground, PAL.ink, { face: -1, s: S, lean: 0.15, reach: { x: px, y: py } });
    /* the force, tangent to the rim in the direction of the turn */
    const ux = Math.sin(-phi), uy = -Math.cos(-phi), Lf = 30 + Fc.v * 0.25;
    arrow(ctx, px, py, px + ux * Lf, py + uy * Lf, C('force'), 5);
    forceLabel(L, 'F = ' + fmt(Fc.v, 0) + ' N', cx, px + ux * Lf, py + uy * Lf, ux, uy, C('force'));
    dot(ctx, px, py, C('force'), true, 8);
    turnArc(ctx, cx, cyy, 30, C('torque'), Math.PI / 2 + 0.6, 1.1);
    L.add('net τ = ' + fmt(m.tau, 1) + ' N·m', cx, cyy + 36, 0, 1, C('torque'), 20, 26);
    /* the two bars: the work done so far and the rotational kinetic energy so far, on one fixed cap */
    const base = 560, top = 170;
    vscale(ctx, 1010, base, top, CAP, 50, 'J');
    const y1 = bar(ctx, 1060, 100, base, top, W, CAP, C('energy'), 'net W', false);
    const y2 = bar(ctx, 1210, 100, base, top, KE, CAP, C('energy'), 'KE_rot', true);
    text(ctx, fmt(W, 1) + ' J', 1110, y1 - 20, C('energy'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(KE, 1) + ' J', 1260, y2 - 20, C('energy'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    if (W > 1) line(ctx, 1060, y1, 1310, y2, alpha(PAL.ink, 0.35), 2, [6, 6]);
    L.flush();
    topline(ctx, t < 1e-9 ? 'The stone is at rest, and the hand is about to push with ' + fmt(Fc.v, 0) + ' N at ' + fmt(rc.v, 3) + ' m from the axle.'
      : done ? 'After ' + fmt(m.T, 2) + ' s the stone has turned through ' + fmt(th.v, 2) + ' rad and spins at ' + fmt(w, 2) + ' rad/s: the hand did ' + fmt(W, 1) + ' J of work and the stone holds ' + fmt(KE, 1) + ' J.'
      : 'After ' + fmt(t, 2) + ' s the stone has turned through ' + fmt(phi, 2) + ' rad, the hand has done ' + fmt(W, 1) + ' J of work, and the stone’s rotational kinetic energy is ' + fmt(KE, 1) + ' J.');
    readout(d.readout, `\\text{net}\\;\\kW = (\\text{net}\\;\\ktau)\\theta = (${fmt(m.tau, 1)}\\ \\text{N}\\cdot\\text{m})(${fmt(phi, 2)}\\ \\text{rad}) = ${fmt(W, 1)}\\ \\text{J} = \\frac{1}{2}\\kI\\kw^2 = \\kKErot`,
      'The stone is a disk with I = ½MR² = ' + fmt(m.I, 3) + ' kg·m² turning at ' + fmt(w, 2) + ' rad/s so far, and the torque of ' + fmt(m.tau, 1) + ' N·m gives it an angular acceleration of ' + fmt(m.a, 1) + ' rad/s².');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => model().T / 5), draw });
})();

/* =====================================================================
   SIM: the two kinetic energies of a rescue helicopter, Example 10.9. The
   rotational energy of the four blades stands beside the translational
   energy of the whole craft, and a height scale shows how far the blades'
   energy alone could lift it. A comparison at one moment, so still.
===================================================================== */
(function () {
  const d = sim('sim-helicopter', 620);
  const rpm = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 100, max: 500, step: 10, value: 300, unit: 'rpm', dec: 0, aria: 'rotor speed' });
  const ell = ctl(d.controls, { label: '\\ell', cls: '', min: 2, max: 6, step: 0.05, value: 4, unit: 'm', dec: 2, aria: 'blade length' });
  const vc = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 60, step: 0.5, value: 20, unit: 'm/s', dec: 1, aria: 'flight speed' });
  const mc = ctl(d.controls, { label: 'm', cls: '', min: 500, max: 3000, step: 50, value: 1000, unit: 'kg', dec: 0, aria: 'loaded mass' });
  const MB = 50.0;   /* kg, the mass of one blade, the example's */
  const CAP = 1000;  /* kJ; the bars' fixed cap, in which the example's 526 kJ and 200 kJ are both legible */
  const HMAX = 200;  /* m; the height scale's fixed top, the example's 53.7 m a quarter of the way up */
  function draw() {
    const { ctx, H } = begin(d.c);
    const w = (rpm.v * TAU) / 60, I = (4 * MB * ell.v * ell.v) / 3, KEr = 0.5 * I * w * w, KEt = 0.5 * mc.v * vc.v * vc.v, h = KEr / (mc.v * G);
    const L = labeller(ctx, H); L.block(0, 0, 1400, 96);
    /* the helicopter, its rotor drawn to the blade length, its velocity to the right */
    const hx = 330, hy = 360, half = 34 * ell.v;
    helicopter(ctx, hx, hy, PAL.ink, 1.1);
    line(ctx, hx - 2 - half, hy - 40, hx - 2 + half, hy - 40, PAL.ink, 5);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(hx - 2, hy - 40, half, 16, 0, 0, TAU); ctx.stroke(); ctx.restore();
    hbracket(ctx, hx - 2, hx - 2 + half, hy - 90, PAL.ink, 'ℓ = ' + fmt(ell.v, 2) + ' m');
    turnArc(ctx, hx - 2, hy - 40, 26, C('angular-rate'), -Math.PI / 2, 1.2);
    L.add('ω = ' + fmt(rpm.v, 0) + ' rpm = ' + fmt(w, 1) + ' rad/s', hx - 2, hy - 60, 0, -1, C('angular-rate'), 20, 92);
    if (vc.v > 0) { const Lv = 20 + vc.v * 3; arrow(ctx, hx + 80, hy, hx + 80 + Lv, hy, C('velocity'), 5); L.add('v = ' + fmt(vc.v, 1) + ' m/s', hx + 80 + Lv, hy, 1, 0, C('velocity'), 22, 22); }
    text(ctx, 'm = ' + fmt(mc.v, 0) + ' kg, four blades of ' + fmt(MB, 1) + ' kg', hx - 30, hy + 80, PAL.muted, { size: 18, align: 'center' });
    /* the two energies on one fixed cap */
    const base = 520, top = 150;
    vscale(ctx, 720, base, top, CAP, 250, 'kJ');
    const y1 = bar(ctx, 770, 100, base, top, KEr / 1000, CAP, C('energy'), 'KE_rot', false);
    const y2 = bar(ctx, 920, 100, base, top, KEt / 1000, CAP, C('energy'), 'KE_trans', true);
    text(ctx, sig3(KEr / 1000) + ' kJ', 820, y1 - 20, C('energy'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, sig3(KEt / 1000) + ' kJ', 970, y2 - 20, C('energy'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the height the blades' energy could lift the craft, on a fixed scale with the overflow pinned */
    const box = { l: 1150, r: 1300, t: top, b: base };
    const Y = (v) => base - (v / HMAX) * (base - top), X = () => 1230;
    line(ctx, 1230, base, 1230, top, PAL.muted, 2);
    for (let v = 0; v <= HMAX + 1e-9; v += 50) { line(ctx, 1222, Y(v), 1238, Y(v), PAL.muted, 2); text(ctx, fmt(v, 0) + (v === HMAX ? ' m' : ''), 1214, Y(v), PAL.muted, { size: 17, align: 'right' }); }
    text(ctx, 'height the blades’ energy could lift it', 1230, top - 30, C('position'), { size: 18, weight: 600, align: 'center' });
    const p = pinned(ctx, box, X, Y, 0, h, C('position'));
    if (!p.out) line(ctx, 1230, base, 1230, p.y, C('position'), 5);
    L.add('h = ' + sig3(h) + ' m', p.x, p.y, 1, 0, C('position'), 20, 24);
    L.flush();
    topline(ctx, 'At ' + fmt(rpm.v, 0) + ' rpm the four blades hold ' + sig3(KEr / 1000) + ' kJ, the helicopter flying at ' + fmt(vc.v, 1) + ' m/s carries ' + sig3(KEt / 1000) + ' kJ, and the blades’ energy could lift it ' + sig3(h) + ' m.');
    readout(d.readout, `\\kKErot = \\frac{1}{2}\\kI\\kw^2 = ${sig3(KEr / 1000)}\\ \\text{kJ} \\qquad \\kKEtrans = \\frac{1}{2}m\\kv^2 = ${sig3(KEt / 1000)}\\ \\text{kJ}`,
      'With I = 4Mℓ²/3 = ' + fmt(I, 0) + ' kg·m² and ω = ' + fmt(w, 1) + ' rad/s, the ratio of translational to rotational kinetic energy is ' + sig3(KEt / KEr) + ', and h = KE_rot / mg = ' + sig3(h) + ' m.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.21: three cans of soup race down three identical inclines.
   The first slides, the second holds thin soup so that only the can
   turns, and the third holds thick soup that turns with the can, or a
   body of the reader's choice. Beside each lane a bar divides the can's
   starting energy into potential, translational and rotational at every
   instant. A race has a start and a finish, so the figure gets the
   transport.
===================================================================== */
(function () {
  const d = sim('sim-cans-race', 720);
  const hc = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0.5, max: 4, step: 0.05, value: 2, unit: 'm', dec: 2, onInput: reset, aria: 'height of the incline' });
  const sc = ctl(d.controls, { label: '\\text{slope}', cls: '', min: 10, max: 40, step: 1, value: 20, unit: '°', dec: 0, onInput: reset, aria: 'angle of the incline' });
  const BODIES = { cylinder: { beta: 0.5, name: 'thick soup', I: '½mR²' }, hoop: { beta: 1, name: 'hoop', I: 'mR²' }, shell: { beta: 2 / 3, name: 'spherical shell', I: '⅔mR²' }, sphere: { beta: 0.4, name: 'solid sphere', I: '⅖mR²' } };
  const pick = choice(d.controls, { label: '\\text{third lane}', options: [{ value: 'cylinder', label: 'thick soup' }, { value: 'hoop', label: 'hoop' }, { value: 'shell', label: 'spherical shell' }, { value: 'sphere', label: 'solid sphere' }], value: 'cylinder', aria: 'what rolls in the third lane', onInput: reset });
  const M = 0.75, RC = 0.04;   /* kg and m, the can of Example 10.10 */
  const THIN = 0.1;            /* the fraction of the mass in the wall of the thin-soup can, which turns as a hoop while the soup does not */
  const lanes = () => { const b3 = BODIES[pick.value]; return [{ beta: 0, name: 'slides' }, { beta: THIN, name: 'thin soup' }, { beta: b3.beta, name: b3.name, I: b3.I }]; };
  /* the model: each can runs the incline of length L = h / sin(slope) from rest with a = g sin(slope) / (1 + β) */
  function model() {
    const s = sc.v * RAD, Lm = hc.v / Math.sin(s), ls = lanes().map((l) => { const a = (G * Math.sin(s)) / (1 + l.beta); return { ...l, a, T: Math.sqrt((2 * Lm) / a), vf: Math.sqrt((2 * G * hc.v) / (1 + l.beta)) }; });
    return { s, Lm, ls, T: Math.max(...ls.map((l) => l.T)), E: M * G * hc.v };
  }
  const cy = cycle(() => model().T, 1.5);
  function reset() { cy.reset(); }
  /* a can seen end on, turned through phi, with a mark so its turning shows */
  function can(ctx, x, y, r, phi, color, turning) {
    disc(ctx, x, y, r, PAL.panel, color, 4);
    if (turning) { line(ctx, x, y, x + (r - 5) * Math.cos(phi), y + (r - 5) * Math.sin(phi), color, 3); dot(ctx, x + (r - 5) * Math.cos(phi), y + (r - 5) * Math.sin(phi), color, true, 4); }
    else { dot(ctx, x, y, color, true, 4); }
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const m = model(), t = cy.now(), done = t >= m.T - 1e-9;
    const L = labeller(ctx, H); L.block(0, 0, 1400, 96);
    /* the scene: three inclines one above another, each 120 units tall at the slope's true angle, the horizontal run
       120 / tan(slope) so that the 10° incline just fills the left half; the drawn height is fixed and h is read
       from its label */
    const rise = 100, run = rise / Math.tan(m.s), x0 = 220, x1 = x0 + run, CR = 20;
    const nx = -Math.sin(m.s), ny = -Math.cos(m.s);   /* the outward normal of the surface, pointing up and left */
    const ux = Math.cos(m.s), uy = Math.sin(m.s);     /* down the slope */
    const legendY = 118;
    /* the legend for the bars, once */
    const sw = (x, label, mode) => {
      ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 3; ctx.fillStyle = mode === 'solid' ? C('energy') : mode === 'hatch' ? alpha(C('energy'), 0.18) : PAL.panel;
      ctx.fillRect(x, legendY - 11, 30, 22); ctx.strokeRect(x, legendY - 11, 30, 22);
      if (mode === 'hatch') { ctx.beginPath(); ctx.rect(x, legendY - 11, 30, 22); ctx.clip(); ctx.beginPath(); for (let s = x - 22; s < x + 30; s += 10) { ctx.moveTo(s, legendY + 11); ctx.lineTo(s + 22, legendY - 11); } ctx.stroke(); }
      ctx.restore(); text(ctx, label, x + 40, legendY, C('energy'), { size: 18, weight: 600 });
    };
    sw(900, 'still potential', 'hollow'); sw(1060, 'translational', 'solid'); sw(1220, 'rotational', 'hatch');
    const finals = [];
    m.ls.forEach((l, i) => {
      const yc = 240 + i * 175, top = yc - 50, bot = top + rise, col = F.cat(i);
      /* the incline as a filled wedge */
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x0, top); ctx.lineTo(x1, bot); ctx.lineTo(x0, bot); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
      line(ctx, x0, bot, x1 + 40, bot, PAL.muted, 3);
      if (i === 0) vbracket(ctx, x0 - 40, top, bot, C('position'), 'h = ' + fmt(hc.v, 2) + ' m', -1);
      if (i === 2) text(ctx, fmt(sc.v, 0) + '°', x1 - 26, bot + 24, PAL.ink, { size: 18, align: 'right' });
      /* where the can is: its distance down the slope, and its speed */
      const tt = Math.min(t, l.T), sm = Math.min(m.Lm, 0.5 * l.a * tt * tt), v = l.a * tt, f = sm / m.Lm;
      const px = x0 + f * run + nx * CR, py = top + f * rise + ny * CR;
      const phi = l.beta > 0 ? (f * Math.hypot(run, rise)) / CR : 0;
      can(ctx, px, py, CR, phi, col, l.beta > 0);
      text(ctx, String(i + 1) + '  ' + l.name, x0 - 40 + 0, top - 22, col, { size: 20, weight: 600, align: 'left' });
      if (v > 0.3) { const Lv = v * 14; arrow(ctx, px + nx * 30, py + ny * 30, px + nx * 30 + ux * Lv, py + ny * 30 + uy * Lv, C('velocity'), 4); L.add('v = ' + fmt(v, 2) + ' m/s', px + nx * 30 + ux * Lv, py + ny * 30 + uy * Lv, ux, uy, C('velocity'), 18, 18); }
      if (t >= l.T - 1e-9) { text(ctx, fmt(l.T, 2) + ' s', x1 + 50, bot - 30, PAL.ink, { size: 18, weight: 600, align: 'left', bg: PAL.panel }); finals.push(l); }
      /* the bar: the can's starting energy divided at this instant */
      const KEt = 0.5 * M * v * v, KEr = l.beta * KEt, PE = Math.max(0, m.E - KEt - KEr);
      const bx = 900, bw = 420, by = yc - 22, bh = 44, k = bw / m.E;
      const wPE = PE * k, wT = KEt * k, wR = KEr * k;
      ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 3;
      ctx.fillStyle = PAL.panel; ctx.fillRect(bx, by, wPE, bh);
      ctx.fillStyle = C('energy'); ctx.fillRect(bx + wPE, by, wT, bh);
      ctx.fillStyle = alpha(C('energy'), 0.18); ctx.fillRect(bx + wPE + wT, by, wR, bh);
      if (wR > 1) { ctx.save(); ctx.beginPath(); ctx.rect(bx + wPE + wT, by, wR, bh); ctx.clip(); ctx.beginPath(); for (let s = bx + wPE + wT - bh; s < bx + wPE + wT + wR; s += 12) { ctx.moveTo(s, by + bh); ctx.lineTo(s + bh, by); } ctx.stroke(); ctx.restore(); }
      ctx.strokeRect(bx, by, bw, bh); if (wPE > 1 && wPE < bw - 1) line(ctx, bx + wPE, by, bx + wPE, by + bh, C('energy'), 3); if (wR > 1 && wT > 1) line(ctx, bx + wPE + wT, by, bx + wPE + wT, by + bh, C('energy'), 3);
      ctx.restore();
      const pct = (e) => fmt((100 * e) / m.E, 0) + '%';
      if (wPE > 70) text(ctx, pct(PE), bx + wPE / 2, yc, C('energy'), { size: 17, weight: 600, align: 'center' });
      if (wT > 70) text(ctx, pct(KEt), bx + wPE + wT / 2, yc, PAL.panel, { size: 17, weight: 600, align: 'center' });
      if (wR > 70) text(ctx, pct(KEr), bx + wPE + wT + wR / 2, yc, C('energy'), { size: 17, weight: 600, align: 'center' });
      if (i === 0) text(ctx, 'each can starts with mgh = ' + fmt(m.E, 1) + ' J', bx + bw, by - 16, C('energy'), { size: 16, align: 'right' });
    });
    L.flush();
    const [l1, l2, l3] = m.ls;
    topline(ctx, t < 1e-9 ? 'Three cans wait at the top, ' + fmt(hc.v, 2) + ' m above the bottom of a ' + fmt(sc.v, 0) + '° incline, each with ' + fmt(m.E, 1) + ' J of potential energy.'
      : done ? 'The sliding can reaches the bottom first at ' + fmt(l1.vf, 2) + ' m/s; the thin soup follows at ' + fmt(l2.vf, 2) + ' m/s and the ' + l3.name + ' last at ' + fmt(l3.vf, 2) + ' m/s.'
      : finals.length ? 'After ' + fmt(t, 2) + ' s the sliding can has reached the bottom at ' + fmt(l1.vf, 2) + ' m/s while the rolling cans are still on the slope.'
      : 'After ' + fmt(t, 2) + ' s the sliding can leads: nothing of its energy has gone into turning, so more of it is in its speed.');
    const KEt3 = 0.5 * M * l3.vf * l3.vf, KEr3 = l3.beta * KEt3;
    readout(d.readout, `m\\kg\\kh = \\frac{1}{2}m\\kv^2 + \\frac{1}{2}\\kI\\kw^2 \\;\\Rightarrow\\; ${fmt(m.E, 1)}\\ \\text{J} = ${fmt(KEt3, 1)}\\ \\text{J} + ${fmt(KEr3, 1)}\\ \\text{J}`,
      'At the bottom the ' + l3.name + ', with I = ' + l3.I + ', has put ' + fmt((100 * l3.beta) / (1 + l3.beta), 0) + '% of its energy into rotation and reaches ' + fmt(l3.vf, 2) + ' m/s; the sliding can reaches ' + fmt(l1.vf, 2) + ' m/s and the thin soup ' + fmt(l2.vf, 2) + ' m/s. The slope changes the times but not these speeds.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => model().T / 5), draw });
})();
};
