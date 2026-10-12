/* Figures for section 5.3 The Fundamental Theorem of Calculus. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, tangent, drag, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
/* ∫ₐᵇ f by Simpson's rule on 200 cells */
const integral = (f, a, b) => {
  const k = 200, h = (b - a) / k;
  let s = f(a) + f(b);
  for (let i = 1; i < k; i += 1) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (s * h) / 3;
};

/* Sim: the Mean Value Theorem for Integrals on Figure 5.2's curve f(x) = 0.15(x − 3)³ − 0.9(x − 3) + 3, with a and b on
   sliders. Axes 0 to 6 by 0 to 5, fixed: the sliders keep [a, b] inside [0.3, 5.7]. */
(function () {
  const d = sim('sim-mean-value', 520);
  const f = (x) => 0.15 * (x - 3) ** 3 - 0.9 * (x - 3) + 3;
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.3, max: 2.9, step: 0.01, value: 1, unit: '', dec: 2, detents: [1] });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 3.1, max: 5.7, step: 0.01, value: 5, unit: '', dec: 2, detents: [5] });
  const ro = readout(d);
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), pc = C('point'), a = as.v, b = bs.v;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 450 }, [0, 6], [0, 5], { xl: 'x', yl: 'y', nx: 6, ny: 5 });
    const area = integral(f, a, b), avg = area / (b - a);
    const xs = Array.from({ length: 401 }, (_, i) => a + ((b - a) * i) / 400), ys = xs.map(f);
    const m = Math.min(...ys), M = Math.max(...ys);
    const cs = [];
    for (let i = 1; i < xs.length; i += 1) {
      const g0 = ys[i - 1] - avg, g1 = ys[i] - avg;
      if (g0 === 0) cs.push(xs[i - 1]);
      else if (g0 * g1 < 0) { let lo = xs[i - 1], hi = xs[i]; for (let k = 0; k < 40; k += 1) { const mid = (lo + hi) / 2; if ((f(mid) - avg) * g0 > 0) lo = mid; else hi = mid; } cs.push((lo + hi) / 2); }
    }
    shade(ctx, ax, f, 0, a, b, ic, { alpha: 0.16 });
    ctx.save(); ctx.strokeStyle = ic; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.strokeRect(ax.X(a), ax.Y(avg), ax.X(b) - ax.X(a), ax.Y(0) - ax.Y(avg)); ctx.restore();
    [[m, 'm'], [M, 'M']].forEach(([v, s]) => { line(ctx, ax.X(a), ax.Y(v), ax.X(b), ax.Y(v), alpha(PAL.ink, 0.35), 2, [4, 8]); text(ctx, s, ax.X(b) + 14, ax.Y(v), PAL.muted, { size: 20, base: 'middle' }); });
    line(ctx, ax.X(0), ax.Y(avg), ax.X(6), ax.Y(avg), fc, 3, [10, 10]);
    text(ctx, '$\\kfave$', ax.X(0.08), ax.Y(avg) - 18, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    [a, b].forEach((x) => line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(f(x)), alpha(PAL.ink, 0.45), 2.5));
    plot(ctx, ax, f, fc, { x: [0.25, 5.75] });
    text(ctx, 'a', ax.X(a), ax.Y(0) + 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'b', ax.X(b), ax.Y(0) + 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    hits.length = 0;
    cs.forEach((c) => { drop(ctx, ax.X(c), ax.Y(avg), ax.X(c), ax.Y(0)); dot(ctx, ax.X(c), ax.Y(avg), pc, true, 9); hits.push({ x: ax.X(c), y: ax.Y(avg), r: 16, name: `(c, f(c)) = (${fmt(c, 2)}, ${fmt(avg, 2)})` }); });
    if (cs.length <= 3) cs.forEach((c) => text(ctx, '$c$', ax.X(c), ax.Y(avg) - 26, pc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }));
    text(ctx, '$\\kf(x)$', ax.X(0.25) - 12, ax.Y(f(0.25)), fc, { size: 24, weight: 600, align: 'right', tex: true });
    const cl = cs.map((c) => fmt(c, 2)).join(', ');
    headline(ctx, `On [${fmt(a, 2)}, ${fmt(b, 2)}]: m = ${fmt(m, 2)} ≤ average ${fmt(avg, 2)} ≤ M = ${fmt(M, 2)}, taken at c = ${cl}.`);
    ro.set(`\\kfave=\\frac{1}{b-a}\\int_{a}^{b}\\kf(x)\\,dx=\\frac{${typed('integral', n(area, 3))}}{${n(b - a, 2)}}=${typed('function', n(avg, 3))}=\\kf(c)`, undefined);
  }
  still(d, draw);
})();

/* Figure 5.26 (Example 5.15), a faithful copy: f(x) = 8 − 2x on −1 to 4.5, the level y = 4 over [0, 4] with the region under it
   shaded, drops from (2, 4) to the x-axis and from (4, 4) to the y-axis. Axes −1 to 5 by −1 to 9. */
(function () {
  const d = sim('fig-average-line', 440);
  const f = (x) => 8 - 2 * x;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), pc = C('point');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 390 }, [-1, 5], [-1, 9], { xl: 'x', yl: 'y', nx: 6, ny: 10, fy: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, () => 4, 0, 0, 4, ic, { alpha: 0.3 });
    line(ctx, ax.X(0), ax.Y(4), ax.X(4), ax.Y(4), fc, 3, [10, 10]);
    drop(ctx, ax.X(2), ax.Y(4), ax.X(2), ax.Y(0)); drop(ctx, ax.X(4), ax.Y(4), ax.X(4), ax.Y(0));
    plot(ctx, ax, f, fc, { x: [-0.5, 4.5] });
    dot(ctx, ax.X(2), ax.Y(4), pc, true, 9);
    text(ctx, '(2, 4)', ax.X(2) + 16, ax.Y(4) - 22, pc, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, '$\\kf(x)=8-2x$', ax.X(0.5), ax.Y(8.6), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.27 (Example 5.16), a faithful copy: f(x) = x² on −2 to 3, the region under it on [0, 3] shaded and the point
   (√3, 3) marked. Axes −2 to 3 by −1 to 9. */
(function () {
  const d = sim('fig-average-parabola', 440);
  const f = (x) => x * x, c = Math.sqrt(3);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), pc = C('point');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 390 }, [-2, 3], [-1, 9], { xl: 'x', yl: 'y', nx: 5, ny: 10, fy: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, 0, 3, ic, { alpha: 0.3 });
    drop(ctx, ax.X(c), ax.Y(3), ax.X(c), ax.Y(0));
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(c), ax.Y(3), pc, true, 9);
    text(ctx, '$(\\sqrt{3},\\,3)$', ax.X(c) - 16, ax.Y(3) - 24, pc, { size: 20, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x)=x^2$', ax.X(-1.9), ax.Y(5.5), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Sim: the Fundamental Theorem of Calculus, Part 1. Above, f(t) and the area from a to x; below, F(x) = ∫ₐˣ f(t) dt drawn
   as far as x, with its tangent there. The integrands are Example 5.17's 1/(t³ + 1) from a = 1 and Example 5.20's t² − 4
   from a = −2; each fixes its own axes. */
(function () {
  const d = sim('sim-ftc', 640);
  const CASES = {
    cube: { f: (t) => 1 / (t ** 3 + 1), a: 1, x: [0, 4], y: [0, 1.25], ny: 5, start: 2.5, tex: '\\frac{1}{t^{3}+1}' },
    square: { f: (t) => t * t - 4, a: -2, x: [-2, 3], y: [-5, 6], ny: 11, start: 1, tex: 't^{2}-4' },
  };
  Object.values(CASES).forEach((c) => {
    const xs = Array.from({ length: 81 }, (_, i) => c.x[0] + ((c.x[1] - c.x[0]) * i) / 80), Fs = xs.map((x) => integral(c.f, c.a, x));
    const nc = F.nice(Math.min(...Fs), Math.max(...Fs), 4);
    c.F = [nc.lo, nc.hi]; c.nF = nc.n;
  });
  const pick = choice(d.controls, { label: '\\kf(t)', options: [{ value: 'cube', label: '1/(t³ + 1), a = 1' }, { value: 'square', label: 't² − 4, a = −2' }], value: 'cube',
    onInput: () => { const c = CASES[pick.value]; xs.range({ min: c.x[0], max: c.x[1], step: 0.01, value: c.start }); } });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 4, step: 0.01, value: 2.5, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: (x) => CASES[pick.value].f(x) });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), lc = C('line'), pc = C('point'), c = CASES[pick.value], x = xs.v;
    const top = axes(ctx, { l: 330, r: 1070, t: 90, b: 290 }, c.x, c.y, { xl: 't', yl: 'y', nx: c.x[1] - c.x[0], ny: c.ny, fy: (v) => (Math.abs(v) < 1e-9 || Number.isInteger(v) && Math.abs(v) % (c.ny > 6 ? 2 : 1) === 0 ? fmt(v, 0) : (c.ny <= 6 ? fmt(v, 2) : '')) });
    const Fx = integral(c.f, c.a, x), fx = c.f(x);
    if (x !== c.a) shade(ctx, top, c.f, 0, Math.min(c.a, x), Math.max(c.a, x), ic, { alpha: 0.3 });
    line(ctx, top.X(c.a), top.box.t, top.X(c.a), top.box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    plot(ctx, top, c.f, fc);
    P.draw(ctx, top, fc);
    text(ctx, `$\\kf(t)=${c.tex}$`, top.box.r - 6, top.box.t + 6, fc, { size: 22, weight: 600, align: 'right', base: 'top', tex: true, bg: PAL.panel });
    const bot = axes(ctx, { l: 330, r: 1070, t: 400, b: 590 }, c.x, c.F, { xl: 'x', yl: 'y', nx: c.x[1] - c.x[0], ny: c.nF, nice: true });
    plot(ctx, bot, (t) => integral(c.f, c.a, t), alpha(ic, 0.3), { w: 3 });
    plot(ctx, bot, (t) => integral(c.f, c.a, t), ic, { x: [c.x[0], x] });
    tangent(ctx, bot, () => Fx, x, lc, { df: () => fx, w: 3 });
    dot(ctx, bot.X(x), bot.Y(Fx), ic, true, 9);
    line(ctx, top.X(x), top.Y(fx), bot.X(x), bot.Y(Fx), alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, `$\\kF(x)=\\int_{${c.a}}^{x}\\kf(t)\\,dt$`, bot.box.r - 6, bot.box.t + 6, ic, { size: 22, weight: 600, align: 'right', base: 'top', tex: true, bg: PAL.panel });
    headline(ctx, `x = ${fmt(x, 2)}: the area from ${fmt(c.a, 0)} to x is F(x) = ${fmt(Fx, 3)}, and F changes at the rate f(x) = ${fmt(fx, 3)}, the height of f there.`);
    ro.set(`\\kF(${n(x, 2)})=\\int_{${c.a}}^{${n(x, 2)}}\\kf(t)\\,dt=${typed('integral', n(Fx, 3))}\\qquad \\kFprime(${n(x, 2)})=\\kf(${n(x, 2)})=${typed('derivative', n(fx, 3))}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 5.28 (Example 5.20), a faithful copy: f(t) = t² − 4 on −4 to 4, the region above it and below the axis on [−2, 2]
   shaded. Axes −4 to 4 by −5 to 12. */
(function () {
  const d = sim('fig-negative-integral', 440);
  const f = (t) => t * t - 4;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 390 }, [-4, 4], [-5, 12], { xl: 't', yl: 'y', nx: 8, ny: 17, fy: (v) => (v % 4 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, -2, 2, ic, { alpha: 0.32 });
    plot(ctx, ax, f, fc);
    text(ctx, '$\\kf(t)=t^2-4$', ax.X(2.2), ax.Y(10), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.29 (Example 5.21), a faithful copy: f(x) = (x − 1)/√x on 0 to 9, the region under it on [1, 9] shaded. Axes 0 to
   9.5 by −2 to 3. */
(function () {
  const d = sim('fig-root-quotient', 420);
  const f = (x) => (x - 1) / Math.sqrt(x);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 370 }, [0, 9.5], [-2, 3], { xl: 'x', yl: 'y', nx: 19, ny: 5, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, 1, 9, ic, { alpha: 0.32 });
    plot(ctx, ax, f, fc, { x: [0.12, 9.4] });
    text(ctx, '$\\kf(x)=\\frac{x-1}{\\sqrt{x}}$', ax.X(6), ax.Y(2.75), fc, { size: 24, weight: 600, align: 'right', tex: true });
  }
  still(d, draw);
})();
};
