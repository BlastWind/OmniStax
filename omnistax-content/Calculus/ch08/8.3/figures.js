/* Figures for section 8.3 Separable Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, text, headline, register, readout, fmt, cycle, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const level = (ctx, ax, k, color, dash = [10, 10]) => line(ctx, ax.box.l, ax.Y(k), ax.box.r, ax.Y(k), color, 3, dash);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);

/* Figure 8.15 (Example 8.11): the solution y = (2 − 6e^(4x² + 12x))/(1 + 3e^(4x² + 12x)) of y′ = (2x + 3)(y² − 4), y(0) = −1,
   over the faint field of the equation, the constant solutions y = ±2 dashed. Axes −5 to 3 by −3 to 3, the book's. */
(function () {
  const d = sim('fig-separable-ivp', 460);
  const f = (x, y) => (2 * x + 3) * (y * y - 4);
  const sol = (x) => { const E = Math.exp(4 * x * x + 12 * x); return Number.isFinite(E) ? (2 - 6 * E) / (1 + 3 * E) : -2; };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const ax = axes(ctx, { l: 250, r: 1150, t: 96, b: 420 }, [-5, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 8, ny: 6 });
    SF.field(ctx, ax, f, alpha(C('derivative'), 0.32), { n: [24, 12] });
    [2, -2].forEach((k) => { level(ctx, ax, k, alpha(fc, 0.55)); text(ctx, `$\\kyfn = ${k}$`, ax.box.l + 8, ax.Y(k) + (k > 0 ? -10 : 10), fc, { size: 20, weight: 600, align: 'left', base: k > 0 ? 'bottom' : 'top', tex: true, bg: PAL.panel }); });
    plot(ctx, ax, sol, fc);
    dot(ctx, ax.X(0), ax.Y(-1), pc, true, 10);
    headline(ctx, 'The solution through $(0, -1)$ runs between the constant solutions $\\kyfn = -2$ and $\\kyfn = 2$.');
  }
  still(d, draw);
})();

/* Figure 8.16 (Example 8.12): a 100 L tank of brine, 2 L/min of 0.5 kg/L solution flowing in and 2 L/min of the mixture
   flowing out, the salt u(t) = 50 − (50 − u₀)e^(−t/50) drawn beside as time runs, the constant solution u = 50 dashed.
   300 minutes of the tank in 5 s. Graph t 0 to 300 min by u 0 to 100 kg. */
(function () {
  const d = sim('sim-brine-tank', 560);
  const u0 = ctl(d.controls, { label: 'u(0)', cls: 'function', key: 'u0', min: 0, max: 100, step: 1, value: 4, unit: 'kg', dec: 0, specials: [{ at: 50 }], onInput: () => cy.reset() });
  const TT = 300, cy = cycle(() => TT, 1.2);
  const ro = readout(d);
  const u = (t) => 50 - (50 - u0.v) * Math.exp(-t / 50);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), t = Math.min(cy.now(), TT), ut = u(t), rate = 1 - ut / 50;
    const T = { l: 130, r: 410, t: 190, b: 500 };
    ctx.save(); ctx.fillStyle = alpha(fc, 0.08 + 0.5 * Math.min(1, ut / 100)); ctx.fillRect(T.l, T.t + 30, T.r - T.l, T.b - T.t - 30); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(T.l, T.t); ctx.lineTo(T.l, T.b); ctx.lineTo(T.r, T.b); ctx.lineTo(T.r, T.t); ctx.stroke(); ctx.restore();
    line(ctx, T.l, T.t + 30, T.r, T.t + 30, alpha(PAL.ink, 0.4), 2);
    text(ctx, '100 L', (T.l + T.r) / 2, T.b - 24, PAL.ink, { size: 20, align: 'center', base: 'bottom' });
    const pipe = [[60, 120], [220, 120], [220, 200]], out = [[T.r, 470], [490, 470], [490, 540]];
    const run = (pts) => { line(ctx, pts[0][0], pts[0][1], pts[1][0], pts[1][1], PAL.muted, 8); line(ctx, pts[1][0], pts[1][1], pts[2][0], pts[2][1], PAL.muted, 8); };
    run(pipe); run(out);
    arrow(ctx, 220, 160, 220, 214, PAL.ink, 4); arrow(ctx, 490, 500, 490, 552, PAL.ink, 4);
    const drops = (pts, color) => {
      const L1 = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]), L2 = Math.hypot(pts[2][0] - pts[1][0], pts[2][1] - pts[1][1]);
      for (let k = 0; k < 8; k++) {
        const sAt = ((k / 8) + (t / 20)) % 1 * (L1 + L2);
        const [a, b, sl] = sAt < L1 ? [pts[0], pts[1], sAt / L1] : [pts[1], pts[2], (sAt - L1) / L2];
        dot(ctx, a[0] + (b[0] - a[0]) * sl, a[1] + (b[1] - a[1]) * sl, color, true, 4);
      }
    };
    if (t < TT) { drops(pipe, alpha(fc, 0.6)); drops(out, alpha(fc, 0.08 + 0.5 * Math.min(1, ut / 100))); }
    text(ctx, '0.5 kg/L, 2 L/min', 60, 104, PAL.ink, { size: 20, align: 'left', base: 'bottom' });
    text(ctx, '2 L/min', 506, 520, PAL.ink, { size: 20, align: 'left', base: 'middle' });
    const ax = axes(ctx, { l: 700, r: 1320, t: 110, b: 500 }, [0, 300], [0, 100], { xl: 't (min)', yl: 'u (kg)', nx: 6, ny: 10, fy: (v) => (v % 20 === 0 ? fmt(v, 0) : '') });
    level(ctx, ax, 50, alpha(fc, 0.6));
    text(ctx, '$\\kufn = 50$', ax.box.r - 6, ax.Y(50) - 10, fc, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel });
    plot(ctx, ax, u, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, u, fc, { x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(ut), fc, true, 9);
    drop(ctx, ax.X(t), ax.Y(ut), ax.X(t), ax.box.b);
    headline(ctx, `t = ${fmt(t, 0)} min: the tank holds ${fmt(ut, 1)} kg of salt, ${rate >= 0 ? 'gaining' : 'losing'} ${fmt(Math.abs(rate), 2)} kg/min.`);
    ro.set(`\\kdudt = 1 - \\frac{\\kufn}{50} = 1 - \\frac{${n(ut, 1)}}{50} = ${n(rate, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TT / 5), draw });
})();

/* Figure 8.17 (Example 8.13): the pizza out of the oven at 200 °F in a 75 °F kitchen, T(t) = 75 + 125e^(kt) with
   k = ln(23/25) ≈ −0.08338, its thermometer falling as time runs and the curve drawn beside, the kitchen's 75 °F dashed
   and the 150 °F the example waits for dotted. 15 minutes in 5 s. Graph t 0 to 15 min by T 60 to 210 °F. */
(function () {
  const d = sim('sim-pizza', 520);
  const k = Math.log(23 / 25), TT = 15, cy = cycle(() => TT, 1.2);
  const ro = readout(d);
  const T = (t) => 75 + 125 * Math.exp(k * t), tWait = Math.log(0.6) / k;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), t = Math.min(cy.now(), TT), Tt = T(t), rate = k * (Tt - 75);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.ellipse(230, 320, 150, 92, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    [[-70, -20], [-20, 30], [40, -35], [80, 20], [10, -5], [-50, 40], [60, 50], [-90, 15]].forEach(([dx, dy]) => dot(ctx, 230 + dx, 320 + dy, PAL.muted, false, 9));
    const th = { x: 470, t: 130, b: 480 }, TY = (v) => th.b - ((v - 60) / 150) * (th.b - th.t);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(th.x - 12, th.t, 24, th.b - th.t); ctx.restore();
    ctx.save(); ctx.fillStyle = fc; ctx.fillRect(th.x - 8, TY(Tt), 16, th.b - TY(Tt)); ctx.restore();
    [75, 100, 150, 200].forEach((v) => { line(ctx, th.x + 12, TY(v), th.x + 24, TY(v), PAL.muted, 2); text(ctx, `${v} °F`, th.x + 30, TY(v), PAL.muted, { size: 17, align: 'left', base: 'middle' }); });
    const ax = axes(ctx, { l: 700, r: 1320, t: 100, b: 470 }, [0, 15], [60, 210], { xl: 't (min)', yl: 'T (°F)', nx: 5, ny: 5 });
    level(ctx, ax, 75, alpha(fc, 0.6));
    level(ctx, ax, 150, alpha(PAL.ink, 0.4), [3, 7]);
    text(ctx, '$\\kT = 75$', ax.box.r - 6, ax.Y(75) - 10, fc, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel });
    text(ctx, '150 °F', ax.box.r - 6, ax.Y(150) - 8, PAL.ink, { size: 17, align: 'right', base: 'bottom', bg: PAL.panel });
    plot(ctx, ax, T, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, T, fc, { x: [0, t] });
    if (t >= tWait) { dot(ctx, ax.X(tWait), ax.Y(150), pc, true, 9); drop(ctx, ax.X(tWait), ax.Y(150), ax.X(tWait), ax.box.b); }
    dot(ctx, ax.X(t), ax.Y(Tt), fc, true, 9);
    headline(ctx, `t = ${fmt(t, 2)} min: the pizza is at ${fmt(Tt, 1)} °F, cooling at ${fmt(-rate, 1)} °F per minute.`);
    ro.set(`\\kdTdt = k(\\kT - 75) = -0.08338(${n(Tt, 1)} - 75) = ${n(rate, 2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TT / 5), draw });
})();
};
