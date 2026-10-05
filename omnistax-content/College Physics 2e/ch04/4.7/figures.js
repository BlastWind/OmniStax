/* Figures for section 4.7 Further Applications of Newton's Laws of Motion.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, measure, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, labeller, hbracket, strip, axes, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const RAD = Math.PI / 180;
const cos = (deg) => Math.cos(deg * RAD), sin = (deg) => Math.sin(deg * RAD);
const G = 9.80;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a number in scientific notation for a readout, 4.5 \times 10^{5} */
function sci(v, d = 1) { const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times 10^{${e}}`; }
/* an arc between two directions at a point, the angles measured above the horizontal */
function angleArc(ctx, x, y, a0, a1, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
  ctx.arc(x, y, r, -Math.max(a0, a1) * RAD, -Math.min(a0, a1) * RAD); ctx.stroke(); ctx.restore();
}
/* a tugboat seen from above, its bow at (x, y) and pointing `heading` degrees
   counterclockwise from +x: the hull with its rubber fender round the bow, and the
   wheelhouse; about 106 by 36 */
function tug(ctx, x, y, heading, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-heading * RAD); ctx.lineJoin = 'round';
  ctx.fillStyle = alpha(color, 0.3); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-100, -18); ctx.lineTo(-18, -18); ctx.arc(-18, 0, 18, -Math.PI / 2, Math.PI / 2); ctx.lineTo(-100, 18); ctx.quadraticCurveTo(-108, 0, -100, -18); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = color; ctx.fillRect(-68, -11, 30, 22);
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(-18, 0, 16, -1.2, 1.2); ctx.stroke();
  ctx.restore();
}
/* the angle th (radians) above the horizontal at (x, y), between arms at least len long: its name
   centred on the bisector inside the wedge where the wedge is wide and long enough to hold it, and
   otherwise set below the horizontal arm, leadered, by the labeller */
function angleMark(ctx, x, y, r0, th, len, lab, color) {
  const r = Math.min(r0, 0.55 * len);
  F.angleArc(ctx, { x, y }, r, 0, th, '', null, color);
  const m = th / 2, s = fmt(th / RAD, 1) + '°';
  if (th < 30 * RAD || r + 30 > len) { lab.add(s, x + r * Math.cos(m), y - r * Math.sin(m), 0.45, 0.9, color, 20, 30); return; }
  const cx = x + (r + 30) * Math.cos(m), cy = y - (r + 30) * Math.sin(m), hw = measure(ctx, s, { size: 20, weight: 600 }) / 2 + 7;
  lab.place({ l: cx - hw, t: cy - 14, r: cx + hw, b: cy + 14 });
  text(ctx, s, cx, cy, color, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
}
/* a cargo barge seen from above, centred on (x, y), w long and h wide, with four hatches */
function barge(ctx, x, y, w, h, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.14); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 10); ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(color, 0.3);
  for (let i = 0; i < 4; i++) ctx.fillRect(x - w / 2 + 18 + i * (w - 36) / 4 + 6, y - h / 2 + 16, (w - 36) / 4 - 12, h - 32);
  ctx.restore();
}
/* a traffic light hanging from (x, y) */
function trafficLight(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.fillRect(x - 26, y, 52, 120); ctx.strokeRect(x - 26, y, 52, 120);
  ctx.fillStyle = PAL.muted;
  ctx.beginPath(); ctx.arc(x, y + 26, 12, 0, Math.PI * 2); ctx.arc(x, y + 60, 12, 0, Math.PI * 2); ctx.arc(x, y + 94, 12, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 4.21: the barge. Two tugboats push at right angles, seen from
   above, with the free-body diagram beside the scene and a bar beneath
   that takes the drag out of the applied force. Still: the drag follows
   from the two pushes, the mass and the observed acceleration, and
   nothing in the idea runs on a clock.
===================================================================== */
(function () {
  const H = 860;
  const d = sim('sim-barge', H);
  const fx = ctl(d.controls, { label: '\\kFx', cls: 'force', min: 1, max: 5, step: 0.1, value: 2.7, unit: '×10⁵ N', dec: 1, aria: 'force of the first tugboat' });
  const fy = ctl(d.controls, { label: '\\kFy', cls: 'force', min: 1, max: 5, step: 0.1, value: 3.6, unit: '×10⁵ N', dec: 1, aria: 'force of the second tugboat' });
  const mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 2, max: 8, step: 0.1, value: 5, unit: '×10⁶ kg', dec: 1, aria: 'mass of the barge' });
  const ac = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0, max: 0.2, step: 0.005, value: 0.075, unit: 'm/s²', dec: 3, aria: 'acceleration of the barge' });
  /* one scale for every force arrow: 40 units to 10⁵ N in the scene, 36 in the free-body
     diagram, so the largest push (5 × 10⁵ N) stays on its panel and the largest resultant
     (7.1 × 10⁵ N) stays clear of the bar */
  const K = 40, K2 = 36, BW = 100;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), acc = C('acceleration'), ang = C('angle');
    /* forces in units of 10⁵ N, each rounded to 10³ N so the readout's numbers add up as shown */
    const app = Math.round(100 * Math.hypot(fx.v, fy.v)) / 100, th = Math.atan2(fy.v, fx.v);
    const ma = Math.round(1000 * mm.v * ac.v) / 100, drag = Math.round(100 * (app - ma)) / 100, ok = drag > 0;
    const rows = topline(ctx, ok && ma === 0
      ? 'The barge is not accelerating, so the water drags back with all $' + fmt(app, 2) + ' \\times 10^{5}$ N the tugs push with'
      : ok
      ? 'The tugs push with $' + fmt(app, 2) + ' \\times 10^{5}$ N together, the barge takes $' + fmt(ma, 2) + ' \\times 10^{5}$ N of it, and the water drags back with $' + fmt(drag, 2) + ' \\times 10^{5}$ N'
      : 'These pushes cannot accelerate $' + fmt(mm.v, 1) + ' \\times 10^{6}$ kg at $' + fmt(ac.v, 3) + '$ m/s², so no drag force is left to find');
    const lab = labeller(ctx, H, { headline: rows });
    text(ctx, '(a) seen from above', 60, 126, PAL.muted, { size: 19 });
    text(ctx, '(b) the free-body diagram of the barge', 860, 126, PAL.muted, { size: 19 });
    lab.block(50, 112, 260, 140); lab.block(850, 112, 1220, 140);
    /* (a) the scene: the barge, the first tug's bow on its stern, the second's on its side */
    const bx = 380, by = 380, BL = 320, BH = 100;
    barge(ctx, bx, by, BL, BH, F.ref('barge'));
    tug(ctx, bx - BL / 2, by, 0, F.ref('tug-1'));
    tug(ctx, bx + 60, by + BH / 2, 90, F.ref('tug-2'));
    lab.place({ l: bx - BL / 2, t: by - BH / 2, r: bx + BL / 2, b: by + BH / 2 });
    lab.place({ l: bx - BL / 2 - 108, t: by - 20, r: bx - BL / 2, b: by + 20 });
    lab.place({ l: bx + 40, t: by + BH / 2, r: bx + 80, b: by + BH / 2 + 108 });
    /* each push is drawn from the bow it leaves, on into the hull it pushes */
    const sx = bx - BL / 2, sy = by + BH / 2, ex = sx + fx.v * K, ey = sy - fy.v * K;
    lab.halo({ x1: sx, y1: by, x2: ex, y2: by }); arrow(ctx, sx, by, ex, by, fc, 5);
    lab.halo({ x1: bx + 60, y1: sy, x2: bx + 60, y2: ey }); arrow(ctx, bx + 60, sy, bx + 60, ey, fc, 5);
    lab.place({ l: sx, t: by - 8, r: ex + 4, b: by + 8 }); lab.place({ l: bx + 52, t: ey - 4, r: bx + 68, b: sy });
    lab.add('F_x = ' + fmt(fx.v, 1) + ' × 10⁵ N', sx - 50, by + 20, 0, 1, fc, 20, 28);
    lab.add('F_y = ' + fmt(fy.v, 1) + ' × 10⁵ N', bx + 80, by + BH / 2 + 70, 1, 0, fc, 20, 26);
    lab.add('the barge', bx - 70, by - BH / 2, 0, -1, F.ref('barge'), 19, 22);
    /* the acceleration leaves the top of the hull along the resultant, at most 140 units long
       so its head and its name stay inside panel (a) */
    if (ac.v > 0.0001) {
      const al = 40 + 500 * ac.v, ax0 = bx + 120, ay0 = by - BH / 2;
      const ahx = ax0 + al * Math.cos(th), ahy = ay0 - al * Math.sin(th);
      arrow(ctx, ax0, ay0, ahx, ahy, acc, 5);
      angleMark(ctx, ax0, ay0, 34, th, al, lab, ang);
      lab.add('a = ' + fmt(ac.v, 3) + ' m/s²', ahx, ahy, 0, -1, acc, 20, 16);
    }
    /* (b) the free-body diagram: the two pushes as components, their resultant and the drag back along it */
    const ox = 1010, oy = 400, hx = ox + fx.v * K2, hy = oy - fy.v * K2;
    line(ctx, ox, oy, hx, oy, fc, 2.5, [10, 10]); line(ctx, hx, oy, hx, hy, fc, 2.5, [10, 10]);
    arrow(ctx, ox, oy, hx, hy, fc, 5);
    angleMark(ctx, ox, oy, 56, th, Math.min(fx.v, app) * K2, lab, ang);
    if (ok) {
      const dl = drag * K2, dx = ox - dl * Math.cos(th), dy = oy + dl * Math.sin(th);
      arrow(ctx, ox, oy, dx, dy, fc, 5);
      lab.add('F_D = ' + fmt(drag, 2) + ' × 10⁵ N', dx, dy, -1, 0, fc, 20, 18);
    }
    dot(ctx, ox, oy, F.ref('barge'), true, 8);
    lab.add('F_app = ' + fmt(app, 2) + ' × 10⁵ N', hx, hy, 0, -1, fc, 20, 18);
    lab.beside({ x1: ox, y1: oy, x2: hx, y2: oy }, 'right', 'F_x', fc, 20, { gap: 18, offset: 0.75 });
    lab.beside({ x1: hx, y1: oy, x2: hx, y2: hy }, 'right', 'F_y', fc, 20, { gap: 18 });
    /* the subtraction, as one bar along the direction of the applied force, 100 units to 10⁵ N */
    const l = 100, yb = 690;
    text(ctx, 'along the direction of the applied force', l, yb - 50, PAL.muted, { size: 19 });
    ctx.save(); ctx.fillStyle = alpha(fc, 0.22); ctx.fillRect(l, yb - 20, app * BW, 40);
    if (ok) { ctx.fillStyle = alpha(fc, 0.55); ctx.fillRect(l, yb - 20, ma * BW, 40); }
    ctx.strokeStyle = fc; ctx.lineWidth = 2; ctx.strokeRect(l, yb - 20, app * BW, 40); ctx.restore();
    text(ctx, 'F_app = ' + fmt(app, 2) + ' × 10⁵ N', l + app * BW + 16, yb, fc, { size: 20, weight: 600 });
    if (ok && ma > 0) {
      line(ctx, l + ma * BW, yb - 20, l + ma * BW, yb + 20, PAL.ink, 3);
      hbracket(ctx, l, l + ma * BW, yb + 64, fc, 'F_net = ma = ' + fmt(ma, 2) + ' × 10⁵ N', { size: 20 });
    }
    if (ok) {
      hbracket(ctx, l + ma * BW, l + app * BW, yb + 126, fc, 'F_D = ' + fmt(drag, 2) + ' × 10⁵ N', { size: 20 });
    }
    lab.flush();
    const A = sci(app * 1e5, 2), B = ma > 0 ? sci(ma * 1e5, 2) : '0';
    tex(d.readout, ok
      ? `\\kFD = \\kFa - \\km\\ka = ${A}\\ \\text{N} - ${B}\\ \\text{N} = ${sci(drag * 1e5, 2)}\\ \\text{N}`
      : `\\kFa - \\km\\ka = ${A}\\ \\text{N} - ${B}\\ \\text{N} < 0`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.22: the traffic light. Two wires at unequal angles, with the
   free-body diagram and its components beside the scene and the
   horizontal balance under it. Still: the light hangs at rest, so there
   is no time in the idea.
===================================================================== */
(function () {
  const d = sim('sim-traffic-light', 780);
  const t1 = ctl(d.controls, { label: '\\ktheta_1', cls: 'angle', min: 10, max: 80, step: 0.5, value: 30, unit: '°', dec: 1, aria: 'angle of the left wire above the horizontal' });
  const t2 = ctl(d.controls, { label: '\\ktheta_2', cls: 'angle', min: 10, max: 80, step: 0.5, value: 45, unit: '°', dec: 1, aria: 'angle of the right wire above the horizontal' });
  const mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 5, max: 40, step: 0.5, value: 15, unit: 'kg', dec: 1, aria: 'mass of the traffic light' });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), w = mm.v * G, sm = sin(t1.v + t2.v);
    const T1 = w * cos(t2.v) / sm, T2 = w * cos(t1.v) / sm;
    /* the scene: two poles, the two wires and the light */
    const px = 420, py = 340, L = 260, gy = 660;
    const ax = px - L * cos(t1.v), ay = py - L * sin(t1.v), bx = px + L * cos(t2.v), bgy = py - L * sin(t2.v);
    strip(ctx, 80, 800, gy, 26);
    line(ctx, ax, ay, ax, gy, PAL.muted, 8); line(ctx, bx, bgy, bx, gy, PAL.muted, 8);
    line(ctx, ax, ay, px, py, F.ref('wire-1'), 4); line(ctx, px, py, bx, bgy, F.ref('wire-2'), 4);
    trafficLight(ctx, px, py, F.ref('light'));
    angleArc(ctx, px, py, 180 - t1.v, 180, 76, C('angle')); angleArc(ctx, px, py, 0, t2.v, 76, C('angle'));
    text(ctx, fmt(t1.v, 1) + '°', px - 112 * cos(t1.v / 2), py - 112 * sin(t1.v / 2), C('angle'), { size: 19, align: 'center' });
    text(ctx, fmt(t2.v, 1) + '°', px + 112 * cos(t2.v / 2), py - 112 * sin(t2.v / 2), C('angle'), { size: 19, align: 'center' });
    line(ctx, px - 150, py, px + 150, py, PAL.rule, 2, [8, 8]);
    dot(ctx, px, py, PAL.ink, true, 7);
    text(ctx, 'm = ' + fmt(mm.v, 1) + ' kg', px + 46, py + 78, C('mass'), { size: 20, weight: 600 });
    /* the free-body diagram with the components dashed */
    const ox = 1090, oy = 330, S = 175 / Math.max(T1, T2, w);
    text(ctx, 'the free-body diagram of the light', 880, 116, PAL.muted, { size: 19 });
    const h1x = ox - T1 * S * cos(t1.v), h1y = oy - T1 * S * sin(t1.v);
    const h2x = ox + T2 * S * cos(t2.v), h2y = oy - T2 * S * sin(t2.v);
    line(ctx, ox, h1y, h1x, h1y, fc, 2, [8, 8]); line(ctx, h1x, oy, h1x, h1y, fc, 2, [8, 8]);
    line(ctx, ox, h2y, h2x, h2y, fc, 2, [8, 8]); line(ctx, h2x, oy, h2x, h2y, fc, 2, [8, 8]);
    arrow(ctx, ox, oy, h1x, h1y, fc, 5); arrow(ctx, ox, oy, h2x, h2y, fc, 5);
    arrow(ctx, ox, oy, ox, oy + w * S, fc, 5);
    text(ctx, 'T₁ = ' + fmt(T1, 0) + ' N', h1x - 12, h1y - 22, fc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'T₂ = ' + fmt(T2, 0) + ' N', h2x + 12, h2y - 22, fc, { size: 20, weight: 600 });
    text(ctx, 'w = ' + fmt(w, 0) + ' N', ox + 16, oy + w * S + 8, fc, { size: 20, weight: 600 });
    dot(ctx, ox, oy, F.ref('light'), true, 8);
    /* the balance the horizontal axis gives, as the book's part (e) */
    const cyy = 660, hb = T1 * S * cos(t1.v);
    text(ctx, 'the horizontal components cancel', 880, cyy - 56, PAL.muted, { size: 19 });
    arrow(ctx, ox, cyy, ox - hb, cyy, fc, 4); arrow(ctx, ox, cyy, ox + hb, cyy, fc, 4);
    dot(ctx, ox, cyy, F.ref('light'), true, 6);
    text(ctx, 'T₁ₓ = T₂ₓ = ' + fmt(T1 * cos(t1.v), 1) + ' N', ox, cyy + 36, fc, { size: 20, weight: 600, align: 'center' });
    headline(ctx, 'At ' + fmt(t1.v, 1) + '° and ' + fmt(t2.v, 1) + '° the wires carry ' + fmt(T1, 0) + ' N and ' + fmt(T2, 0) + ' N, and together they hold up ' + fmt(w, 0) + ' N');
    readout(d.readout, `\\kTone\\sin\\ktheta_1 + \\kTtwo\\sin\\ktheta_2 = (${fmt(T1, 0)}\\ \\text{N})\\sin ${fmt(t1.v, 1)}^\\circ + (${fmt(T2, 0)}\\ \\text{N})\\sin ${fmt(t2.v, 1)}^\\circ = ${fmt(w, 0)}\\ \\text{N} = \\kwgt`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.23: the bathroom scale in a lift. The lift starts from rest,
   speeds up for three seconds, rides four at a constant velocity and
   slows to a stop in the last three, and the dial follows it. Moves:
   the reading changes as the ride does, so the ten seconds of the ride
   run in about five real seconds, with the scrubber. The shaft keeps to
   the left third; the dial and the free-body diagram sit under it, out
   of the lift's travel, and the graphs beside it.
===================================================================== */
(function () {
  const H = 820;
  const d = sim('sim-elevator-scale', H);
  const mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 120, step: 0.5, value: 75, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the person' });
  const ac = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0.2, max: 3, step: 0.05, value: 1.2, unit: 'm/s²', dec: 2, onInput: reset, aria: 'acceleration of the lift' });
  const T = 10, TA = 3, TB = 7;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const aAt = (t) => (t < TA ? ac.v : t < TB ? 0 : -ac.v);
  const vAt = (t) => (t < TA ? ac.v * t : t < TB ? ac.v * TA : ac.v * (T - t));
  const sAt = (t) => (t < TA ? 0.5 * ac.v * t * t
    : t < TB ? 0.5 * ac.v * TA * TA + ac.v * TA * (t - TA)
      : 0.5 * ac.v * TA * TA + ac.v * TA * (TB - TA) + ac.v * TA * (t - TB) - 0.5 * ac.v * (t - TB) * (t - TB));
  /* the shaft, the car and the man on his scale; the car rises 160 units over the ride whatever
     the sliders, and every force arrow is drawn on one fixed scale, the largest reading the sliders
     allow (120 × (9.80 + 3.00) = 1,536 N) being 115 units in the car */
  const SL = 110, SR = 370, PX = 240, PS = 1.35, KS = 120 / 1600;
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), acc = C('acceleration'), vc = C('velocity');
    const t = REDUCED ? T : cy.now();
    const w = mm.v * G, Fs = mm.v * (G + aAt(t)), KF = 56 / w;
    const phase = t < TA ? 'speeding up at ' + fmt(ac.v, 2) + ' m/s², and the dial reads ' + fmt(Fs, 0) + ' N against his ' + fmt(w, 0) + ' N weight'
      : t < TB ? 'riding at a constant ' + fmt(ac.v * TA, 2) + ' m/s, and the dial reads his weight of ' + fmt(w, 0) + ' N exactly'
        : 'slowing to a stop, and the dial reads only ' + fmt(Fs, 0) + ' N against his ' + fmt(w, 0) + ' N weight';
    const rows = topline(ctx, 'After ' + fmt(t, 1) + ' s the lift is ' + phase);
    const lab = labeller(ctx, H, { headline: rows });
    const floor = 600 - 160 * (sAt(t) / sAt(T)), carT = floor - 300, feet = floor - 32;
    line(ctx, SL - 12, 104, SL - 12, 612, PAL.muted, 3); line(ctx, SR + 12, 104, SR + 12, 612, PAL.muted, 3);
    line(ctx, (SL + SR) / 2, 104, (SL + SR) / 2, carT, PAL.muted, 5);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(SL, carT, SR - SL, 300);
    ctx.strokeStyle = F.ref('elevator'); ctx.lineWidth = 4; ctx.strokeRect(SL, carT, SR - SL, 300); ctx.restore();
    block(ctx, PX, floor - 16, 150, 32, F.ref('scale'));
    F.silhouette(ctx, { x: PX, y: feet, s: PS, pose: 'stand', color: F.ref('man') });
    /* the book's part (b): the person alone is the system of interest, ringed in a dashed box */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.setLineDash([12, 10]);
    ctx.strokeRect(PX - 92, feet - 258, 184, 262); ctx.restore();
    text(ctx, 'system of interest', PX, feet - 240, PAL.muted, { size: 17, align: 'center' });
    /* the two forces on him, named outside the car's walls */
    const Lw = w * KS, Ls = Fs * KS, wy = feet - 110;
    arrow(ctx, PX - 34, wy, PX - 34, wy + Lw, fc, 5);
    arrow(ctx, PX + 34, feet, PX + 34, feet - Ls, fc, 5);
    lab.add('w', PX - 34, wy + Lw, -1, 0, fc, 22, PX - 34 - (SL - 24));
    lab.add('F_s', PX + 34, feet - Ls, 1, 0, fc, 22, SR + 24 - (PX + 34));
    /* the lift's velocity and acceleration, beside the shaft */
    if (vAt(t) > 0.01) { const vl = 20 + 50 * (vAt(t) / 9); arrow(ctx, 450, floor - 120, 450, floor - 120 - vl, vc, 4); lab.add('v', 450, floor - 120 - vl, 1, 0, vc, 22, 14); }
    if (Math.abs(aAt(t)) > 0.01) { const sg = aAt(t) > 0 ? -1 : 1; arrow(ctx, 450, floor - 250 - sg * 33, 450, floor - 250 + sg * 33, acc, 4); lab.add('a', 450, floor - 250 + sg * 33, 1, 0, acc, 22, 14); }
    /* the dial of the scale, under the shaft */
    const dx = 160, dy = 712, r = 52;
    ctx.save(); ctx.strokeStyle = F.ref('scale'); ctx.fillStyle = PAL.panel; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(dx, dy, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let i = 0; i <= 8; i++) { const g = (-210 + 30 * i) * RAD; line(ctx, dx + (r - 12) * Math.cos(g), dy + (r - 12) * Math.sin(g), dx + (r - 3) * Math.cos(g), dy + (r - 3) * Math.sin(g), PAL.muted, 2); }
    const ang = (-210 + 240 * Math.min(1, Fs / (2 * w))) * RAD;
    line(ctx, dx, dy, dx + (r - 14) * Math.cos(ang), dy + (r - 14) * Math.sin(ang), fc, 5); dot(ctx, dx, dy, fc, true, 6);
    text(ctx, 'the dial reads ' + fmt(Fs, 0) + ' N', dx, dy + r + 24, fc, { size: 20, weight: 600, align: 'center' });
    /* the free-body diagram of the system of interest, beside the dial: his weight and the push of the scale */
    const fx0 = 430, fy0 = 712;
    text(ctx, 'free-body diagram', fx0 - 26, fy0, PAL.muted, { size: 17, align: 'right' });
    lab.block(fx0 - 170, fy0 - 14, fx0 - 18, fy0 + 14);
    arrow(ctx, fx0, fy0, fx0, fy0 - Fs * KF, fc, 5);
    arrow(ctx, fx0, fy0, fx0, fy0 + w * KF, fc, 5);   /* his weight is always 56 units here, so the diagram shows the ratio of the reading to it */
    dot(ctx, fx0, fy0, F.ref('man'), true, 9);
    lab.add('F_s', fx0, fy0 - Fs * KF, 1, 0, fc, 22, 14);
    lab.add('w', fx0, fy0 + w * KF, 1, 0, fc, 22, 14);
    /* the two graphs, beside the vertical scene */
    /* fixed axes: the ride always lasts 10 s, and the largest reading the sliders allow is the
       heaviest person under the hardest acceleration, 120 × (9.80 + 3) = 1,536 N, so the reading axis
       is always 0 to 1,600 N, ticked every 400 N, and neither range changes as a slider moves */
    const FR = 1600, b1 = { l: 610, r: 1340, t: 150, b: 380 };
    const g1 = axes(ctx, b1, [0, T], [0, FR], { yl: 'the scale reading F_s (N)', yc: fc, nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, b1.l, g1.Y(w), b1.r, g1.Y(w), fc, 2, [10, 10]);
    text(ctx, 'his weight, ' + fmt(w, 0) + ' N', b1.r - 8, g1.Y(w) - 20, fc, { size: 18, align: 'right', bg: PAL.panel });
    [[0, TA], [TA, TB], [TB, T]].forEach(([p, q]) => { const y = g1.Y(mm.v * (G + aAt((p + q) / 2))); line(ctx, g1.X(p), y, g1.X(q), y, fc, 5); });
    line(ctx, g1.X(TA), g1.Y(mm.v * (G + ac.v)), g1.X(TA), g1.Y(w), fc, 5);
    line(ctx, g1.X(TB), g1.Y(w), g1.X(TB), g1.Y(mm.v * (G - ac.v)), fc, 5);
    dot(ctx, g1.X(t), g1.Y(Fs), fc, true, 9);
    /* fixed axes: the lift speeds up for the first 3 s, so the hardest acceleration the slider allows
       gives it 3 × 3 = 9 m/s, and the velocity axis is always 0 to 9 m/s, ticked every 3 m/s */
    const VR = 9, b2 = { l: 610, r: 1340, t: 480, b: 710 };
    const g2 = axes(ctx, b2, [0, T], [0, VR], { xl: 'time t (s)', xc: C('time'), yl: 'the velocity of the lift v (m/s)', yc: vc, nx: 5, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, g2.X(0), g2.Y(0), g2.X(TA), g2.Y(ac.v * TA), vc, 5);
    line(ctx, g2.X(TA), g2.Y(ac.v * TA), g2.X(TB), g2.Y(ac.v * TA), vc, 5);
    line(ctx, g2.X(TB), g2.Y(ac.v * TA), g2.X(T), g2.Y(0), vc, 5);
    dot(ctx, g2.X(t), g2.Y(vAt(t)), vc, true, 9);
    lab.flush();
    hits = [
      { x: PX, y: feet - 130, r: 90, name: 'the system of interest: the man alone' },
      { x: PX, y: floor - 16, r: 70, name: 'the bathroom scale' },
      { x: (SL + SR) / 2, y: floor - 150, r: 150, name: 'the lift' },
      { x: dx, y: dy, r: r, name: 'the dial of the scale' },
    ];
    tex(d.readout, `\\kFs = \\km\\ka + \\km\\kg = (${fmt(mm.v, 1)}\\ \\text{kg})(${fmt(aAt(t), 2)}\\ \\text{m/s}^2) + (${fmt(mm.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${fmt(Fs, 0)}\\ \\text{N}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   SIM: the soccer player. He starts from rest and reaches his top speed
   over the elapsed time, and the slope of the graph beneath the strip is
   the average acceleration that the push of the ground gives him. Moves:
   the run is what the example is about, so it takes about five real
   seconds, with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-soccer', 700);
  const vf = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 4, max: 12, step: 0.1, value: 8, unit: 'm/s', dec: 2, onInput: reset, aria: 'top speed reached' });
  const el1 = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 1, max: 5, step: 0.05, value: 2.5, unit: 's', dec: 2, onInput: reset, aria: 'time taken' });
  const mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 100, step: 0.5, value: 70, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the player' });
  const cy = cycle(() => el1.v, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), acc = C('acceleration'), vc = C('velocity');
    const t = REDUCED ? el1.v : cy.now(), a = vf.v / el1.v, Fn = mm.v * a;
    const stot = 0.5 * a * el1.v * el1.v, s = 0.5 * a * t * t, v = a * t;
    const x0 = 140, x1 = 1120, X = (meters) => x0 + (x1 - x0) * (stot > 0 ? meters / stot : 0);
    strip(ctx, 80, 1340, 300, 46);
    line(ctx, 80, 277, 1340, 277, F.ref('ground'), 3); line(ctx, 80, 323, 1340, 323, F.ref('ground'), 3);
    F.scale(ctx, X, 0, Math.floor(stot), Math.max(1, Math.round(stot / 8)), 345, 'm', 2);
    const px = X(s);
    F.person(ctx, px, 300, F.ref('player'), { s: 1.35, lean: 0.2, phase: t > 0 && t < el1.v ? t * 8 : 0 });
    const late = px > 760, fl = 70 + 130 * (Fn / 1200), vl = 180 * (v / vf.v);
    /* the push of the ground is drawn from his body, at the height of his hips, and the velocity
       from his chest, ahead of him */
    arrow(ctx, px + 14, 246, px + 14 + fl, 246, fc, 5);
    text(ctx, 'F_net = ' + fmt(Fn, 0) + ' N, the forward push of the ground', late ? px - 30 : px + 26 + fl, 246, fc,
      { size: 20, weight: 600, align: late ? 'right' : 'left', bg: PAL.panel });
    if (v > 0.02) {
      arrow(ctx, px + 30, 190, px + 30 + vl, 190, vc, 4);
      text(ctx, 'v = ' + fmt(v, 2) + ' m/s', late ? px - 30 : px + 42 + vl, 190, vc, { size: 20, weight: 600, align: late ? 'right' : 'left', bg: PAL.panel });
    }
    /* the graph: the velocity against time, whose slope is the average acceleration */
    /* fixed axes: the two sliders stop at 5 s and 12 m/s, so the graph is always 0 to 5 s by
       0 to 12 m/s, ticked every second and every 3 m/s, and it never rescales as a slider moves */
    const TR = 5, VR = 12, box = { l: 210, r: 1300, t: 430, b: 620 };
    const g = axes(ctx, box, [0, TR], [0, VR], { xl: 'time t (s)', xc: C('time'), yl: 'v (m/s)', yc: vc, nx: 5, ny: 4, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0) });
    line(ctx, g.X(0), g.Y(0), g.X(el1.v), g.Y(vf.v), vc, 5);
    line(ctx, g.X(el1.v * 0.30), g.Y(vf.v * 0.30), g.X(el1.v * 0.70), g.Y(vf.v * 0.30), acc, 2.5, [6, 6]);
    line(ctx, g.X(el1.v * 0.70), g.Y(vf.v * 0.30), g.X(el1.v * 0.70), g.Y(vf.v * 0.70), acc, 2.5, [6, 6]);
    text(ctx, 'the slope is a = ' + fmt(a, 2) + ' m/s²', g.X(el1.v * 0.72), g.Y(vf.v * 0.50), acc, { size: 20, weight: 600 });
    line(ctx, g.X(t), box.b, g.X(t), g.Y(v), PAL.ink, 2, [4, 8]);
    dot(ctx, g.X(t), g.Y(v), vc, true, 9);
    headline(ctx, 'After ' + fmt(t, 2) + ' s he is at ' + fmt(v, 2) + ' m/s, and the ground has pushed him forward with ' + fmt(Fn, 0) + ' N all the way');
    readout(d.readout, `\\kFnet = \\km\\frac{\\kdv}{\\kdt} = (${fmt(mm.v, 1)}\\ \\text{kg})\\frac{${fmt(vf.v, 2)}\\ \\text{m/s}}{${fmt(el1.v, 2)}\\ \\text{s}} = ${fmt(Fn, 0)}\\ \\text{N}`,
      'The force is about ' + fmt(Fn / 4.45, 0) + ' pounds.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.max(0.2, el1.v / 5)), draw });
})();

/* =====================================================================
   FIGURE (unnumbered): the rescue of the problems. A faithful copy of
   the drawing the keyed problem refers to: no sliders, and still, since
   the person is held motionless between the two ropes.
===================================================================== */
(function () {
  const d = sim('fig-rescue', 540);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), px = 600, py = 270;
    const a1 = 105, a2 = 10;                              /* the two ropes, in degrees above the horizontal */
    const e1x = px + 205 * cos(a1), e1y = py - 205 * sin(a1);
    const e2x = px + 580 * cos(a2), e2y = py - 580 * sin(a2);
    fixed(ctx, 110, 130, 150, 330);
    text(ctx, 'the burning building', 280, 152, PAL.muted, { size: 19 });
    strip(ctx, 80, 1340, 460, 24);
    line(ctx, px, py, e1x, e1y, F.ref('rope-left'), 4); line(ctx, px, py, e2x, e2y, F.ref('rope-right'), 4);
    F.person(ctx, px, py + 120, F.ref('rescued'), { s: 1.3, reach: { x: px, y: py } });
    line(ctx, px, py, px, py - 180, PAL.rule, 2, [8, 8]);
    line(ctx, px, py, px + 240, py, PAL.rule, 2, [8, 8]);
    angleArc(ctx, px, py, 90, a1, 120, C('angle')); angleArc(ctx, px, py, 0, a2, 180, C('angle'));
    arrow(ctx, px, py, px + 170 * cos(a1), py - 170 * sin(a1), fc, 5);
    text(ctx, 'T₁', px + 170 * cos(a1) - 30, py - 170 * sin(a1) - 8, fc, { size: 22, weight: 600, align: 'right' });
    arrow(ctx, px, py, px + 330 * cos(a2), py - 330 * sin(a2), fc, 5);
    text(ctx, 'T₂', px + 344 * cos(a2), py - 344 * sin(a2) - 18, fc, { size: 22, weight: 600 });
    arrow(ctx, px, py, px, py + 160, fc, 5);
    text(ctx, 'w', px + 16, py + 150, fc, { size: 22, weight: 600 });
    dot(ctx, px, py, F.ref('rescued'), true, 8);
    /* the two notes sit clear of the ropes: the left one above the building, the right one above the
       long rope, so neither line is crossed by a word */
    text(ctx, 'the left rope makes 15° with the vertical', 110, 52, F.ref('rope-left'), { size: 20 });
    text(ctx, 'the right rope rises 10° above the horizontal', 900, 130, F.ref('rope-right'), { size: 20 });
    text(ctx, 'the person, of mass 76.0 kg, is momentarily motionless', px, 502, F.ref('rescued'), { size: 20, weight: 600, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
