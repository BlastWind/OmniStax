/* Figures for section 8.5 First-Order Linear Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, text, headline, register, readout, fmt, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);

/* Figure 8.24 (Example 8.18): the racquetball hit up at 2 m/s from 1 m, m = 0.0427 kg, air resistance −kv:
   v(t) = (v₀ + mg/k)e^(−kt/m) − mg/k and h(t) = 1 + (m/k)(v₀ + mg/k)(1 − e^(−kt/m)) − (mg/k)t, run until it lands, 5 s a flight.
   Gravity's force mg and air resistance's −kv are drawn as forces (notation), the velocity as the ball's motion.
   Scale 0 to 1.3 m; graph t 0 to 2.5 s by v −2.5 to 2.5 m/s, which hold the terminal velocity −mg/k for k ≥ 0.2. */
(function () {
  const d = sim('sim-air-resistance', 560);
  const M = 0.0427, G = 9.8, V0 = 2;
  const k = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.2, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, onInput: () => cy.reset() });
  const v = (t) => (V0 + (M * G) / k.v) * Math.exp((-k.v * t) / M) - (M * G) / k.v;
  const h = (t) => 1 + (M / k.v) * (V0 + (M * G) / k.v) * (1 - Math.exp((-k.v * t) / M)) - ((M * G) / k.v) * t;
  const land = () => { let t = 0.01; while (h(t) > 0 && t < 2.5) t += 0.002; return t; };
  const cy = cycle(() => land(), 1.2);
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), T = land(), t = Math.min(cy.now(), T), vt = v(t), ht = Math.max(0, h(t)), vT = -(M * G) / k.v;
    const S = { x: 300, t: 110, b: 520 }, SY = (m) => S.b - (m / 1.3) * (S.b - S.t);
    line(ctx, S.x - 140, S.b, S.x + 140, S.b, PAL.muted, 3);
    [0, 0.5, 1].forEach((m) => { line(ctx, S.x - 140, SY(m), S.x - 128, SY(m), PAL.muted, 2); text(ctx, `${fmt(m, 1)} m`, S.x - 148, SY(m), PAL.muted, { size: 17, align: 'right', base: 'middle' }); });
    const by = SY(ht) - 16;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(S.x, by, 16, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    const NPX = 110, gL = M * G * NPX, aL = -k.v * vt * NPX;
    arrow(ctx, S.x - 46, by, S.x - 46, by + gL, PAL.ink, 4);
    text(ctx, 'mg', S.x - 58, by + gL / 2, PAL.ink, { size: 20, align: 'right', base: 'middle' });
    if (Math.abs(aL) > 6 && t < T) { arrow(ctx, S.x - 46 - 50, by, S.x - 96, by - aL, PAL.ink, 4); text(ctx, '−kv', S.x - 108, by - aL / 2, PAL.ink, { size: 20, align: 'right', base: 'middle' }); }
    if (Math.abs(vt) > 0.05 && t < T) {
      const L = Math.sign(vt) * Math.max(30, Math.abs(vt) * 60);
      arrow(ctx, S.x + 44, by, S.x + 44, by - L, fc, 4);
      text(ctx, '$\\kv$', S.x + 58, by - L / 2, fc, { size: 22, weight: 600, align: 'left', base: 'middle', tex: true });
    }
    const ax = axes(ctx, { l: 680, r: 1320, t: 100, b: 500 }, [0, 2.5], [-2.5, 2.5], { xl: 't (s)', yl: 'v (m/s)', nx: 5, ny: 10, fx: (u) => (Number.isInteger(u) ? fmt(u, 0) : fmt(u, 1)), fy: (u) => (Number.isInteger(u) ? fmt(u, 0) : '') });
    line(ctx, ax.box.l, ax.Y(vT), ax.box.r, ax.Y(vT), alpha(fc, 0.6), 3, [10, 10]);
    text(ctx, `terminal velocity ${fmt(vT, 3)} m/s`, ax.box.r - 6, ax.Y(vT) + 10, fc, { size: 17, align: 'right', base: 'top', bg: PAL.panel });
    plot(ctx, ax, v, alpha(fc, 0.3), { w: 3, x: [0, T] });
    if (t > 0) plot(ctx, ax, v, fc, { x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(vt), fc, true, 9);
    drop(ctx, ax.X(t), ax.Y(vt), ax.X(t), ax.Y(0));
    const state = Math.abs(vt) < 0.01 ? 'at the top' : vt > 0 ? 'rising' : 'falling';
    headline(ctx, `t = ${fmt(t, 3)} s: v = ${fmt(vt, 2)} m/s, the ball is ${state}, ${fmt(ht, 3)} m up.`);
    ro.set(`m\\kdvdt = -k\\kv - mg:\\quad 0.0427\\kdvdt = -${n(k.v)}(${n(vt)}) - 0.0427(9.8) = ${n(-k.v * vt - M * G, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => land() / 5), draw });
})();

/* Figure 8.25: the circuit with the voltage generator V_S, the capacitor C, the inductor L and the resistor R, a faithful copy. */
(function () {
  const d = sim('fig-circuit', 460);
  function draw() {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, W = 4, L = 420, Rt = 1000, T = 90, B = 390, mid = (T + B) / 2;
    line(ctx, L, T, 690, T, ink, W); line(ctx, 730, T, Rt, T, ink, W);
    line(ctx, 690, T - 40, 690, T + 40, ink, W); line(ctx, 730, T - 40, 730, T + 40, ink, W);
    text(ctx, 'C', 710, T - 52, ink, { size: 24, align: 'center', base: 'bottom' });
    line(ctx, Rt, T, Rt, mid - 80, ink, W); line(ctx, Rt, mid + 80, Rt, B, ink, W);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = W; ctx.beginPath();
    for (let i = 0; i < 4; i++) ctx.arc(Rt, mid - 60 + i * 40, 20, -Math.PI / 2, Math.PI / 2);
    ctx.stroke(); ctx.restore();
    text(ctx, 'L', Rt + 46, mid, ink, { size: 24, align: 'left', base: 'middle' });
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = W; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(Rt, B); ctx.lineTo(790, B);
    for (let i = 0; i < 6; i++) ctx.lineTo(790 - 15 - i * 30, B + (i % 2 ? 22 : -22));
    ctx.lineTo(610, B); ctx.lineTo(L, B); ctx.stroke(); ctx.restore();
    text(ctx, 'R', 700, B - 34, ink, { size: 24, align: 'center', base: 'bottom' });
    line(ctx, L, B, L, mid + 56, ink, W); line(ctx, L, T, L, mid - 56, ink, W);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = W; ctx.beginPath(); ctx.arc(L, mid, 56, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(L - 28, mid + 10); ctx.bezierCurveTo(L - 14, mid - 26, L - 4, mid - 26, L, mid + 6); ctx.bezierCurveTo(L + 4, mid + 30, L + 14, mid + 30, L + 28, mid - 6); ctx.stroke(); ctx.restore();
    text(ctx, '+', L, mid - 30, ink, { size: 24, align: 'center', base: 'middle' });
    text(ctx, 'V_S', L + 72, mid, ink, { size: 24, align: 'left', base: 'middle' });
  }
  still(d, draw);
})();

/* Figure 8.26 (Example 8.19): the current i(t) = (250 sin 20t − 400 cos 20t)/89 + 400e^(−12.5t)/89, its steady-state
   amplitude ±50√89/89 dashed. Axes t 0 to 5.5 by i −6 to 6. */
(function () {
  const d = sim('fig-rl-current', 440);
  const i = (t) => (250 * Math.sin(20 * t) - 400 * Math.cos(20 * t)) / 89 + (400 * Math.exp(-12.5 * t)) / 89, A = (50 * Math.sqrt(89)) / 89;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 200, r: 1240, t: 90, b: 400 }, [0, 5.5], [-6, 6], { xl: 't', yl: 'i', nx: 11, ny: 12, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : ''), fy: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    [A, -A].forEach((a) => line(ctx, ax.box.l, ax.Y(a), ax.box.r, ax.Y(a), alpha(PAL.ink, 0.4), 2.5, [10, 10]));
    plot(ctx, ax, i, fc, { w: 3 });
    headline(ctx, '$i(t) = -\\frac{50\\sqrt{89}}{89}\\cos(20t + \\varphi) + \\frac{400e^{-12.5t}}{89}$');
  }
  still(d, draw);
})();
};
