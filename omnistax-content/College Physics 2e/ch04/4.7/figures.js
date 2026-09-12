/* Figures for section 4.7 Further Applications of Newton's Laws of Motion.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, strip, axes, nice, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const RAD = Math.PI / 180;
const cos = (deg) => Math.cos(deg * RAD), sin = (deg) => Math.sin(deg * RAD);
const G = 9.80;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a number in scientific notation for a readout, 4.5 \times 10^{5} */
function sci(v, d = 1) { const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times 10^{${e}}`; }
/* the same, for a headline written in plain text */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sciP(v, d = 1) { const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return fmt(m, d) + ' × 10' + String(e).split('').map((c) => SUP[c] ?? c).join(''); }
/* an arc between two directions at a point, the angles measured above the horizontal */
function angleArc(ctx, x, y, a0, a1, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
  ctx.arc(x, y, r, -Math.max(a0, a1) * RAD, -Math.min(a0, a1) * RAD); ctx.stroke(); ctx.restore();
}
/* a tugboat seen from above, its bow along the direction (ux, uy) */
function tug(ctx, x, y, ux, uy, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(Math.atan2(uy, ux)); ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(-46, -20); ctx.lineTo(18, -20); ctx.lineTo(48, 0); ctx.lineTo(18, 20); ctx.lineTo(-46, 20); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.fillRect(-30, -11, 26, 22); ctx.restore();
}
/* a person standing on (x, y), about 132 units tall at s = 1 */
function person(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(0, -116, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(0, -100); ctx.lineTo(0, -44);
  ctx.moveTo(0, -44); ctx.lineTo(-17, 0); ctx.moveTo(0, -44); ctx.lineTo(17, 0);
  ctx.moveTo(0, -90); ctx.lineTo(-24, -52); ctx.moveTo(0, -90); ctx.lineTo(24, -52);
  ctx.stroke(); ctx.restore();
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
  const d = sim('sim-barge', 800);
  const fx = ctl(d.controls, { label: '\\kFx', cls: 'force', min: 1, max: 5, step: 0.1, value: 2.7, unit: '×10⁵ N', dec: 1, aria: 'force of the first tugboat' });
  const fy = ctl(d.controls, { label: '\\kFy', cls: 'force', min: 1, max: 5, step: 0.1, value: 3.6, unit: '×10⁵ N', dec: 1, aria: 'force of the second tugboat' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 2, max: 8, step: 0.1, value: 5, unit: '×10⁶ kg', dec: 1, aria: 'mass of the barge' });
  const ac = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0, max: 0.2, step: 0.005, value: 0.075, unit: 'm/s²', dec: 3, aria: 'acceleration of the barge' });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), acc = C('acceleration');
    const app = Math.hypot(fx.v, fy.v), th = Math.atan2(fy.v, fx.v) / RAD;   /* forces in units of 10⁵ N */
    const ma = 10 * mm.v * ac.v, drag = app - ma, ok = drag > 0.004;
    /* (a) the scene from above: the barge, the two tugs and the acceleration */
    const bx = 380, by = 360, S = 34;
    text(ctx, '(a) seen from above', 110, 116, PAL.muted, { size: 19 });
    block(ctx, bx, by, 250, 104, PAL.ink);
    text(ctx, 'barge', bx, by, PAL.ink, { size: 20, weight: 600, align: 'center' });
    tug(ctx, bx - 125 - 56, by, 1, 0, PAL.muted);
    tug(ctx, bx, by + 52 + 56, 0, -1, PAL.muted);
    arrow(ctx, bx + 125, by, bx + 125 + fx.v * S, by, fc, 5);
    text(ctx, 'F_x = ' + fmt(fx.v, 1) + ' × 10⁵ N', bx + 131 + fx.v * S, by + 30, fc, { size: 20, weight: 600 });
    arrow(ctx, bx, by - 52, bx, by - 52 - fy.v * S, fc, 5);
    text(ctx, 'F_y = ' + fmt(fy.v, 1) + ' × 10⁵ N', bx + 14, by - 58 - fy.v * S, fc, { size: 20, weight: 600 });
    if (ac.v > 0.0001) {
      const al = 56 + 620 * ac.v;
      arrow(ctx, bx, by, bx + al * cos(th), by - al * sin(th), acc, 5);
      text(ctx, 'a = ' + fmt(ac.v, 3) + ' m/s²', bx + (al + 12) * cos(th), by - (al + 12) * sin(th) - 16, acc, { size: 20, weight: 600 });
    }
    /* (b) the free-body diagram: the two pushes, their resultant and the drag back along it */
    const ox = 1010, oy = 360, S2 = 36;
    text(ctx, '(b) the free-body diagram of the barge', 790, 116, PAL.muted, { size: 19 });
    const hx = ox + fx.v * S2, hy = oy - fy.v * S2;
    line(ctx, ox, oy, hx, oy, fc, 2.5, [10, 10]); line(ctx, hx, oy, hx, hy, fc, 2.5, [10, 10]);
    text(ctx, 'F_x', (ox + hx) / 2, oy + 26, fc, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'F_y', hx + 30, (oy + hy) / 2, fc, { size: 20, weight: 600 });
    arrow(ctx, ox, oy, hx, hy, fc, 5);
    text(ctx, 'F_app = ' + fmt(app, 1) + ' × 10⁵ N', hx, hy - 28, fc, { size: 20, weight: 600, align: 'center' });
    angleArc(ctx, ox, oy, 0, th, 56, PAL.ink);
    text(ctx, fmt(th, 1) + '°', ox + 96 * cos(th / 2), oy - 96 * sin(th / 2) + 4, PAL.ink, { size: 19, align: 'center' });
    if (ok) {
      const dl = drag * S2;
      arrow(ctx, ox, oy, ox - dl * cos(th), oy + dl * sin(th), fc, 5);
      text(ctx, 'F_D = ' + fmt(drag, 2) + ' × 10⁵ N', ox - dl * cos(th) - 14, oy + dl * sin(th) + 26, fc, { size: 20, weight: 600, align: 'right' });
    }
    dot(ctx, ox, oy, PAL.ink, true, 8);
    /* the subtraction, as one bar along the direction of the applied force */
    const l = 200, bw = 120, ybar = 630;
    text(ctx, 'along the direction of the applied force', l, ybar - 54, PAL.muted, { size: 19 });
    ctx.save(); ctx.fillStyle = alpha(fc, 0.22); ctx.fillRect(l, ybar - 20, app * bw, 40); ctx.restore();
    if (ok) { ctx.save(); ctx.fillStyle = alpha(fc, 0.55); ctx.fillRect(l, ybar - 20, ma * bw, 40); ctx.restore(); }
    line(ctx, l, ybar - 20, l + app * bw, ybar - 20, fc, 2); line(ctx, l, ybar + 20, l + app * bw, ybar + 20, fc, 2);
    line(ctx, l, ybar - 20, l, ybar + 20, fc, 2); line(ctx, l + app * bw, ybar - 20, l + app * bw, ybar + 20, fc, 2);
    text(ctx, 'F_app = ' + fmt(app, 1) + ' × 10⁵ N', l + app * bw + 16, ybar, fc, { size: 20, weight: 600 });
    if (ok) {
      line(ctx, l + ma * bw, ybar - 20, l + ma * bw, ybar + 20, PAL.ink, 3);
      hbracket(ctx, l, l + ma * bw, ybar + 64, acc, 'F_net = ma = ' + fmt(ma, 2) + ' × 10⁵ N');
      hbracket(ctx, l + ma * bw, l + app * bw, ybar + 126, fc, 'F_D = ' + fmt(drag, 2) + ' × 10⁵ N');
    }
    headline(ctx, ok
      ? 'the tugs push with ' + fmt(app, 1) + ' × 10⁵ N together, the barge takes ' + fmt(ma, 2) + ' × 10⁵ N of it, and the water drags back with ' + fmt(drag, 2) + ' × 10⁵ N'
      : 'these pushes cannot accelerate ' + fmt(mm.v, 1) + ' × 10⁶ kg at ' + fmt(ac.v, 3) + ' m/s², so no drag force is left to find');
    readout(d.readout, `\\kFD = \\kFa - m\\ka = ${sci(app * 1e5)}\\ \\text{N} - (${sci(mm.v * 1e6)}\\ \\text{kg})(${fmt(ac.v, 3)}\\ \\text{m/s}^2) = ${ok ? sci(drag * 1e5, 2) : '-\\,' + sci(Math.abs(drag) * 1e5 + 1e-9, 2)}\\ \\text{N}`,
      ok ? 'The weight of the barge is ' + sciP(mm.v * 1e6 * G) + ' N, so the drag on it is only one ' + fmt(mm.v * 1e6 * G / (drag * 1e5), 0) + 'th of that. A well-designed hull needs very little push at a low speed.'
        : 'The drag opposes the motion, so it cannot be negative: the applied force has to be at least as large as the mass times the acceleration. Lower the acceleration, or have the tugs push harder.');
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
  const t1 = ctl(d.controls, { label: '\\theta_1', cls: '', min: 10, max: 80, step: 0.5, value: 30, unit: '°', dec: 1, aria: 'angle of the left wire above the horizontal' });
  const t2 = ctl(d.controls, { label: '\\theta_2', cls: '', min: 10, max: 80, step: 0.5, value: 45, unit: '°', dec: 1, aria: 'angle of the right wire above the horizontal' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 5, max: 40, step: 0.5, value: 15, unit: 'kg', dec: 1, aria: 'mass of the traffic light' });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), w = mm.v * G, sm = sin(t1.v + t2.v);
    const T1 = w * cos(t2.v) / sm, T2 = w * cos(t1.v) / sm;
    /* the scene: two poles, the two wires and the light */
    const px = 420, py = 340, L = 260, gy = 660;
    const ax = px - L * cos(t1.v), ay = py - L * sin(t1.v), bx = px + L * cos(t2.v), bgy = py - L * sin(t2.v);
    strip(ctx, 80, 800, gy, 26);
    line(ctx, ax, ay, ax, gy, PAL.muted, 8); line(ctx, bx, bgy, bx, gy, PAL.muted, 8);
    line(ctx, ax, ay, px, py, PAL.ink, 4); line(ctx, px, py, bx, bgy, PAL.ink, 4);
    trafficLight(ctx, px, py, PAL.ink);
    angleArc(ctx, px, py, 180 - t1.v, 180, 76, PAL.muted); angleArc(ctx, px, py, 0, t2.v, 76, PAL.muted);
    text(ctx, fmt(t1.v, 1) + '°', px - 112 * cos(t1.v / 2), py - 112 * sin(t1.v / 2), PAL.ink, { size: 19, align: 'center' });
    text(ctx, fmt(t2.v, 1) + '°', px + 112 * cos(t2.v / 2), py - 112 * sin(t2.v / 2), PAL.ink, { size: 19, align: 'center' });
    line(ctx, px - 150, py, px + 150, py, PAL.rule, 2, [8, 8]);
    dot(ctx, px, py, PAL.ink, true, 7);
    text(ctx, 'm = ' + fmt(mm.v, 1) + ' kg', px + 46, py + 78, PAL.ink, { size: 20, weight: 600 });
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
    dot(ctx, ox, oy, PAL.ink, true, 8);
    /* the balance the horizontal axis gives, as the book's part (e) */
    const cyy = 660, hb = T1 * S * cos(t1.v);
    text(ctx, 'the horizontal components cancel', 880, cyy - 56, PAL.muted, { size: 19 });
    arrow(ctx, ox, cyy, ox - hb, cyy, fc, 4); arrow(ctx, ox, cyy, ox + hb, cyy, fc, 4);
    dot(ctx, ox, cyy, PAL.ink, true, 6);
    text(ctx, 'T₁ₓ = T₂ₓ = ' + fmt(T1 * cos(t1.v), 1) + ' N', ox, cyy + 36, fc, { size: 20, weight: 600, align: 'center' });
    headline(ctx, 'at ' + fmt(t1.v, 1) + '° and ' + fmt(t2.v, 1) + '° the wires carry ' + fmt(T1, 0) + ' N and ' + fmt(T2, 0) + ' N, and together they hold up ' + fmt(w, 0) + ' N');
    readout(d.readout, `\\kTone\\cos\\theta_1 = \\kTtwo\\cos\\theta_2,\\quad \\kTone\\sin\\theta_1 + \\kTtwo\\sin\\theta_2 = \\kwgt = ${fmt(w, 0)}\\ \\text{N}\\;\\Rightarrow\\;\\kTone = ${fmt(T1, 0)}\\ \\text{N},\\ \\kTtwo = ${fmt(T2, 0)}\\ \\text{N}`,
      Math.abs(t1.v - t2.v) < 0.26 ? 'The angles on either side are equal, so the two tensions are equal, as they were for the tightrope walker.'
        : 'The wire at ' + fmt(Math.max(t1.v, t2.v), 1) + '° is nearer the vertical and carries the larger tension, because it holds up the greater part of the weight. Bring both wires toward the horizontal and both tensions grow.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.23: the bathroom scale in a lift. The lift starts from rest,
   speeds up for three seconds, rides four at a constant velocity and
   slows to a stop in the last three, and the dial follows it. Moves:
   the reading changes as the ride does, so the ten seconds of the ride
   run in about five real seconds, with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-elevator-scale', 800);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 120, step: 0.5, value: 75, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the person' });
  const ac = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0.2, max: 3, step: 0.05, value: 1.2, unit: 'm/s²', dec: 2, onInput: reset, aria: 'acceleration of the lift' });
  const T = 10, TA = 3, TB = 7;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const aAt = (t) => (t < TA ? ac.v : t < TB ? 0 : -ac.v);
  const vAt = (t) => (t < TA ? ac.v * t : t < TB ? ac.v * TA : ac.v * (T - t));
  const sAt = (t) => (t < TA ? 0.5 * ac.v * t * t
    : t < TB ? 0.5 * ac.v * TA * TA + ac.v * TA * (t - TA)
      : 0.5 * ac.v * TA * TA + ac.v * TA * (TB - TA) + ac.v * TA * (t - TB) - 0.5 * ac.v * (t - TB) * (t - TB));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), acc = C('acceleration'), vc = C('velocity');
    const t = REDUCED ? T : cy.now();
    const w = mm.v * G, Fs = mm.v * (G + aAt(t)), top = mm.v * (G + ac.v);
    /* the scene: the shaft, the car, the person on the scale */
    const sl = 140, sr = 500, floor = 560 - 170 * (sAt(t) / sAt(T));
    fixed(ctx, sl - 34, 60, 34, 540); fixed(ctx, sr, 60, 34, 540);
    const carT = floor - 300;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(sl, carT, sr - sl, 300); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.strokeRect(sl, carT, sr - sl, 300); ctx.restore();
    line(ctx, (sl + sr) / 2, 60, (sl + sr) / 2, carT, PAL.muted, 5);
    block(ctx, 320, floor - 16, 150, 32, PAL.ink);
    person(ctx, 320, floor - 32, PAL.ink, 1.05);
    arrow(ctx, 400, floor - 170, 400, floor - 170 - 92 * (Fs / top), fc, 5);
    text(ctx, 'F_s = ' + fmt(Fs, 0) + ' N', 412, floor - 178 - 92 * (Fs / top), fc, { size: 20, weight: 600 });
    arrow(ctx, 240, floor - 170, 240, floor - 170 + 92 * (w / top), fc, 5);
    text(ctx, 'w = ' + fmt(w, 0) + ' N', 228, floor - 162 + 92 * (w / top), fc, { size: 20, weight: 600, align: 'right' });
    if (vAt(t) > 0.01) { const vl = 26 + 58 * (vAt(t) / (ac.v * TA)); arrow(ctx, sr + 86, floor - 130, sr + 86, floor - 130 - vl, vc, 4); text(ctx, 'v', sr + 100, floor - 138 - vl, vc, { size: 20, weight: 600 }); }
    if (Math.abs(aAt(t)) > 0.01) { const sgn = aAt(t) > 0 ? -1 : 1; arrow(ctx, sr + 86, floor - 262, sr + 86, floor - 262 + sgn * 66, acc, 4); text(ctx, 'a', sr + 100, floor - 262 + sgn * 82, acc, { size: 20, weight: 600 }); }
    /* the dial of the scale, under the shaft */
    const dx = 320, dy = 700, r = 58;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(dx, dy, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let i = 0; i <= 8; i++) { const g = (-210 + 30 * i) * RAD; line(ctx, dx + (r - 12) * Math.cos(g), dy + (r - 12) * Math.sin(g), dx + (r - 3) * Math.cos(g), dy + (r - 3) * Math.sin(g), PAL.muted, 2); }
    const ang = (-210 + 240 * Math.min(1, Fs / (2 * w))) * RAD;
    line(ctx, dx, dy, dx + (r - 16) * Math.cos(ang), dy + (r - 16) * Math.sin(ang), fc, 5); dot(ctx, dx, dy, fc, true, 6);
    text(ctx, 'the dial reads ' + fmt(Fs, 0) + ' N', dx, dy + r + 26, fc, { size: 20, weight: 600, align: 'center' });
    /* the two graphs, beside the vertical scene */
    const fr = nice(0, mm.v * (G + ac.v) * 1.12, 4), b1 = { l: 760, r: 1330, t: 140, b: 350 };
    const g1 = axes(ctx, b1, [0, T], [0, fr.hi], { yl: 'the scale reading Fs (N)', yc: fc, nx: 5, ny: fr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, b1.l, g1.Y(w), b1.r, g1.Y(w), fc, 2, [10, 10]);
    text(ctx, 'his weight, ' + fmt(w, 0) + ' N', b1.r - 8, g1.Y(w) - 20, fc, { size: 18, align: 'right' });
    [[0, TA], [TA, TB], [TB, T]].forEach(([p, q]) => { const y = g1.Y(mm.v * (G + aAt((p + q) / 2))); line(ctx, g1.X(p), y, g1.X(q), y, fc, 5); });
    line(ctx, g1.X(TA), g1.Y(mm.v * (G + ac.v)), g1.X(TA), g1.Y(w), fc, 5);
    line(ctx, g1.X(TB), g1.Y(w), g1.X(TB), g1.Y(mm.v * (G - ac.v)), fc, 5);
    dot(ctx, g1.X(t), g1.Y(Fs), fc, true, 9);
    const vr = nice(0, ac.v * TA * 1.15, 4), b2 = { l: 760, r: 1330, t: 470, b: 660 };
    const g2 = axes(ctx, b2, [0, T], [0, vr.hi], { xl: 'time t (s)', xc: C('time'), yl: 'the velocity of the lift v (m/s)', yc: vc, nx: 5, ny: vr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    line(ctx, g2.X(0), g2.Y(0), g2.X(TA), g2.Y(ac.v * TA), vc, 5);
    line(ctx, g2.X(TA), g2.Y(ac.v * TA), g2.X(TB), g2.Y(ac.v * TA), vc, 5);
    line(ctx, g2.X(TB), g2.Y(ac.v * TA), g2.X(T), g2.Y(0), vc, 5);
    dot(ctx, g2.X(t), g2.Y(vAt(t)), vc, true, 9);
    const phase = t < TA ? 'speeding up at ' + fmt(ac.v, 2) + ' m/s², and the dial reads ' + fmt(Fs, 0) + ' N against his ' + fmt(w, 0) + ' N weight'
      : t < TB ? 'riding at a constant ' + fmt(ac.v * TA, 2) + ' m/s, and the dial reads his weight of ' + fmt(w, 0) + ' N exactly'
        : 'slowing to a stop, and the dial reads only ' + fmt(Fs, 0) + ' N against his ' + fmt(w, 0) + ' N weight';
    headline(ctx, 't = ' + fmt(t, 1) + ' s · the lift is ' + phase);
    readout(d.readout, `\\kFs = m\\ka + m\\kg = (${fmt(mm.v, 1)}\\ \\text{kg})(${fmt(aAt(t), 2)}\\ \\text{m/s}^2) + (${fmt(mm.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${fmt(Fs, 0)}\\ \\text{N}`,
      'Were the cable to break, the man and the lift would fall together, the acceleration would be −9.80 m/s², and the dial would read zero: he would appear to be weightless.');
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
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 100, step: 0.5, value: 70, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the player' });
  const cy = cycle(() => el1.v, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), acc = C('acceleration'), vc = C('velocity');
    const t = REDUCED ? el1.v : cy.now(), a = vf.v / el1.v, Fn = mm.v * a;
    const stot = 0.5 * a * el1.v * el1.v, s = 0.5 * a * t * t, v = a * t;
    const x0 = 140, x1 = 1120, X = (metres) => x0 + (x1 - x0) * (stot > 0 ? metres / stot : 0);
    strip(ctx, 80, 1340, 300, 46);
    F.scale(ctx, X, 0, Math.floor(stot), Math.max(1, Math.round(stot / 8)), 345, 'm', 2);
    const px = X(s);
    person(ctx, px, 300, PAL.ink, 0.85);
    const late = px > 760, fl = 70 + 130 * (Fn / 1200), vl = 180 * (v / vf.v);
    arrow(ctx, px + 36, 122, px + 36 + fl, 122, fc, 5);
    text(ctx, 'F_net = ' + fmt(Fn, 0) + ' N, the forward push of the ground', late ? px + 24 : px + 48 + fl, 122, fc,
      { size: 20, weight: 600, align: late ? 'right' : 'left' });
    if (v > 0.02) {
      arrow(ctx, px + 36, 182, px + 36 + vl, 182, vc, 4);
      text(ctx, 'v = ' + fmt(v, 2) + ' m/s', late ? px + 24 : px + 48 + vl, 182, vc, { size: 20, weight: 600, align: late ? 'right' : 'left' });
    }
    /* the graph: the velocity against time, whose slope is the average acceleration */
    const vr = nice(0, vf.v * 1.12, 4), box = { l: 210, r: 1300, t: 430, b: 620 };
    const g = axes(ctx, box, [0, el1.v], [0, vr.hi], { xl: 'time t (s)', xc: C('time'), yl: 'v (m/s)', yc: vc, nx: 5, ny: vr.n, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 0) });
    line(ctx, g.X(0), g.Y(0), g.X(el1.v), g.Y(vf.v), vc, 5);
    line(ctx, g.X(el1.v * 0.30), g.Y(vf.v * 0.30), g.X(el1.v * 0.70), g.Y(vf.v * 0.30), acc, 2.5, [6, 6]);
    line(ctx, g.X(el1.v * 0.70), g.Y(vf.v * 0.30), g.X(el1.v * 0.70), g.Y(vf.v * 0.70), acc, 2.5, [6, 6]);
    text(ctx, 'the slope is a = ' + fmt(a, 2) + ' m/s²', g.X(el1.v * 0.72), g.Y(vf.v * 0.50), acc, { size: 20, weight: 600 });
    line(ctx, g.X(t), box.b, g.X(t), g.Y(v), PAL.ink, 2, [4, 8]);
    dot(ctx, g.X(t), g.Y(v), vc, true, 9);
    headline(ctx, 't = ' + fmt(t, 2) + ' s · he is at ' + fmt(v, 2) + ' m/s, and the ground has pushed him forward with ' + fmt(Fn, 0) + ' N all the way');
    readout(d.readout, `\\ka = \\frac{\\kdv}{\\kdt} = \\frac{${fmt(vf.v, 2)}\\ \\text{m/s}}{${fmt(el1.v, 2)}\\ \\text{s}} = ${fmt(a, 2)}\\ \\text{m/s}^2,\\qquad \\kFnet = m\\ka = (${fmt(mm.v, 1)}\\ \\text{kg})(${fmt(a, 2)}\\ \\text{m/s}^2) = ${fmt(Fn, 0)}\\ \\text{N}`,
      'That is about ' + fmt(Fn / 4.45, 0) + ' pounds, a reasonable average force, and he covers ' + fmt(stot, 1) + ' m while he is getting up to speed.');
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
    text(ctx, 'the burning building', 185, 108, PAL.muted, { size: 19, align: 'center' });
    strip(ctx, 80, 1340, 460, 24);
    line(ctx, px, py, e1x, e1y, PAL.ink, 4); line(ctx, px, py, e2x, e2y, PAL.ink, 4);
    person(ctx, px, py + 120, PAL.muted, 0.8);
    line(ctx, px, py, px, py - 180, PAL.rule, 2, [8, 8]);
    line(ctx, px, py, px + 240, py, PAL.rule, 2, [8, 8]);
    angleArc(ctx, px, py, 90, a1, 120, PAL.muted); angleArc(ctx, px, py, 0, a2, 180, PAL.muted);
    arrow(ctx, px, py, px + 170 * cos(a1), py - 170 * sin(a1), fc, 5);
    text(ctx, 'T₁', px + 170 * cos(a1) - 30, py - 170 * sin(a1) - 8, fc, { size: 22, weight: 600, align: 'right' });
    arrow(ctx, px, py, px + 330 * cos(a2), py - 330 * sin(a2), fc, 5);
    text(ctx, 'T₂', px + 344 * cos(a2), py - 344 * sin(a2) - 18, fc, { size: 22, weight: 600 });
    arrow(ctx, px, py, px, py + 160, fc, 5);
    text(ctx, 'w', px + 16, py + 150, fc, { size: 22, weight: 600 });
    dot(ctx, px, py, PAL.ink, true, 8);
    text(ctx, 'the left rope makes 15° with the vertical', 200, 222, PAL.ink, { size: 20 });
    text(ctx, 'the right rope rises 10° above the horizontal', 900, 130, PAL.ink, { size: 20 });
    text(ctx, 'the person, of mass 76.0 kg, is momentarily motionless', px, 502, PAL.ink, { size: 20, weight: 600, align: 'center' });
    headline(ctx, 'a person held by two ropes, one 15° from the vertical and the other 10° above the horizontal');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
