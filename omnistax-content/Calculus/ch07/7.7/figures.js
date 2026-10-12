/* Figures for section 7.7 Improper Integrals. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.7'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, line, text, label, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const BOX = { l: 140, r: 1010, t: 110, b: 450 };

/* A gauge beside the graph: a bar as tall as the area so far, on its own scale from 0 to top, with the limit drawn as a
   dashed line where the integral converges; a bar that would pass the top is cut there with an arrow. */
function gauge(ctx, value, top, lim, color, x0 = 1120, name = '') {
  const y = (v) => BOX.b - ((BOX.b - BOX.t) * Math.min(v, top)) / top;
  line(ctx, x0 - 50, BOX.b, x0 + 50, BOX.b, PAL.ink, 2);
  ctx.save(); ctx.fillStyle = alpha(color, 0.45); ctx.strokeStyle = color; ctx.lineWidth = 2;
  ctx.fillRect(x0 - 28, y(value), 56, BOX.b - y(value)); ctx.strokeRect(x0 - 28, y(value), 56, BOX.b - y(value)); ctx.restore();
  if (value > top) F.arrow(ctx, x0, BOX.t + 40, x0, BOX.t - 6, color, 4);
  if (lim !== null) { line(ctx, x0 - 50, y(lim), x0 + 50, y(lim), C('limit'), 3, [10, 10]); text(ctx, n(lim), x0 + 58, y(lim), C('limit'), { size: 20 }); }
  if (name) text(ctx, name, x0, BOX.b + 30, PAL.ink, { size: 20, align: 'center', tex: true });
}

/* Figure 7.17: ∫ from 1 to t of 1/x², a stand-in for the book's decreasing curve. Axes 0 to 10 by 0 to 1.2. */
(function () {
  const d = sim('sim-improper-infinite', 520);
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: 1.2, max: 40, step: 0.1, value: 3, unit: '', dec: 1, aria: 'the upper limit t' });
  const ro = readout(d);
  const f = (x) => 1 / (x * x);
  function draw() {
    const { ctx } = begin(d.c);
    const tv = t.v, A = 1 - 1 / tv;
    headline(ctx, `$t = ${n(tv, 1)}$: $\\int_1^{t}\\frac{1}{x^{2}}dx = 1-\\frac{1}{t} = ${n(A)}$, and as $t\\to+\\infty$ it approaches $1$`);
    const ax = axes(ctx, BOX, [0, 10], [0, 1.2], { xl: 'x', yl: 'y', nx: 5, ny: 6, fy: (v) => fmt(v, 1) });
    shade(ctx, ax, f, 0, 1, Math.min(tv, 10), C('integral'), { alpha: 0.3 });
    plot(ctx, ax, f, C('function'), { x: [0.9, 10] });
    if (tv <= 10) line(ctx, ax.X(tv), ax.Y(0), ax.X(tv), ax.Y(f(tv)), alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    text(ctx, '$a$', ax.X(1), BOX.b + 46, PAL.ink, { size: 20, align: 'center', tex: true });
    if (tv <= 10) text(ctx, '$t$', ax.X(tv), BOX.b + 46, PAL.ink, { size: 20, align: 'center', tex: true });
    gauge(ctx, A, 1.2, 1, C('integral'), 1120, '$\\int_1^{t}$');
    ro.set(`${typed('integral', `\\int_1^{${n(tv, 1)}}\\frac{1}{x^{2}}dx`)} = ${n(A)} \\qquad ${typed('integral', '\\int_1^{+\\infty}\\frac{1}{x^{2}}dx')} = \\lim_{t\\to+\\infty}\\left(1-\\frac{1}{t}\\right) = ${typed('limit', '1')}`);
  }
  still(d, draw);
})();

/* Figure 7.18: the area under 1/x from 1 to t, ln t. Axes 0 to 10 by 0 to 2. */
(function () {
  const d = sim('sim-area-reciprocal', 520);
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: 1.2, max: 400, step: 0.1, value: 4, unit: '', dec: 1, aria: 'the upper limit t', specials: [{ at: 4 }] });
  const ro = readout(d);
  const f = (x) => 1 / x;
  function draw() {
    const { ctx } = begin(d.c);
    const tv = t.v, A = Math.log(tv);
    headline(ctx, `$t = ${n(tv, 1)}$: the area $\\int_1^{t}\\frac{1}{x}dx = \\ln t = ${n(A)}$ keeps growing`);
    const ax = axes(ctx, BOX, [0, 10], [0, 2], { xl: 'x', yl: 'y', nx: 5, ny: 4, fy: (v) => fmt(v, 1) });
    shade(ctx, ax, f, 0, 1, Math.min(tv, 10), C('integral'), { alpha: 0.3 });
    plot(ctx, ax, f, C('function'), { x: [0.05, 10], poles: [0] });
    if (tv <= 10) line(ctx, ax.X(tv), ax.Y(0), ax.X(tv), ax.Y(f(tv)), alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    gauge(ctx, A, 4, null, C('integral'), 1120, '$\\ln t$');
    ro.set(`${typed('integral', `\\int_1^{${n(tv, 1)}}\\frac{1}{x}dx`)} = \\ln ${n(tv, 1)} = ${n(A)} \\qquad \\lim_{t\\to+\\infty}\\ln t = +\\infty`);
  }
  still(d, draw);
})();

/* Figure 7.19: Gabriel's horn, the region under 1/x on [1, t] turned about the x-axis. Scene units: 0.8 per unit, the
   horn's mouth at x = 1. */
(function () {
  const d = sim('sim-gabriels-horn');
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: 1.5, max: 10, step: 0.1, value: 6, unit: '', dec: 1, aria: 'the end t of the horn' });
  const ro = readout(d);
  const v = F.view3d(d.stage, { h: 420, dist: 6.2, tilt: 0.3, yaw: 'free', pitch: [-1.3, 1.3] });
  const g = v.part(0);
  const K = 0.8, f = (x) => 1 / x;
  function draw() {
    v.clear();
    const tv = t.v, X0 = -K * (1 + tv) / 2;
    g.position.x = X0;
    const horn = F.revolve.mesh(g, F.revolve.between(f, () => 0, 1, tv, 96).map(([a, b]) => [K * a, K * b]), { y: 0 }, C('region'), { alpha: 0.5 });
    v.pickable(horn, 'Gabriel’s horn, cut at x = t');
    F.mesh.polyline(g, Array.from({ length: 61 }, (_, i) => { const x = 1 + ((tv - 1) * i) / 60; return [K * x, K * f(x), 0]; }), C('function'));
    F.mesh.polyline(g, [[0, 0, 0], [K * (tv + 0.8), 0, 0]], PAL.muted);
    v.label('y = 1/x', [K * 1.6, K * f(1.6) + 0.12, 0], g, -12);
    v.headline(`Cut at $t = ${n(tv, 1)}$: volume $\\pi(1-\\frac{1}{t}) = ${n(Math.PI * (1 - 1 / tv))}$, profile area $\\ln t = ${n(Math.log(tv))}$`);
    ro.set(`${typed('integral', 'V')} = \\pi\\int_1^{${n(tv, 1)}}\\frac{1}{x^{2}}dx = ${n(Math.PI * (1 - 1 / tv))} \\to ${typed('limit', '\\pi')} \\qquad \\int_1^{${n(tv, 1)}}\\frac{1}{x}dx = ${n(Math.log(tv))} \\to +\\infty`);
  }
  still(d, draw);
})();

/* Figure 7.21: the integral up to t of a function with a vertical asymptote at b = 4. Axes 0 to 5 by 0 to 5. */
(function () {
  const d = sim('sim-improper-discontinuous', 520);
  const CASES = {
    root: { f: (x) => 1 / Math.sqrt(4 - x), F: (s) => 4 - 2 * Math.sqrt(4 - s), lim: 4, tex: '\\frac{1}{\\sqrt{4-x}}', anti: (s) => `4-2\\sqrt{4-${n(s, 3)}}` },
    recip: { f: (x) => 1 / (4 - x), F: (s) => Math.log(4) - Math.log(4 - s), lim: null, tex: '\\frac{1}{4-x}', anti: (s) => `\\ln 4-\\ln(4-${n(s, 3)})` },
  };
  const pick = choice(d.controls, { label: '', aria: 'which integrand', value: 'root', options: [{ value: 'root', label: '1/√(4 − x)' }, { value: 'recip', label: '1/(4 − x)' }] });
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0.5, max: 3.999, step: 0.001, value: 3, unit: '', dec: 3, aria: 'the upper limit t, approaching 4 from the left' });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const K = CASES[pick.value], tv = t.v, A = K.F(tv);
    headline(ctx, `$t = ${n(tv)}$: $\\int_0^{t}${K.tex}\\,dx = ${n(A)}$${K.lim === null ? ', with no bound as $t\\to 4^{-}$' : `, approaching $${K.lim}$ as $t\\to 4^{-}$`}`);
    const ax = axes(ctx, BOX, [0, 5], [0, 5], { xl: 'x', yl: 'y', nx: 5, ny: 5 });
    shade(ctx, ax, K.f, 0, 0, tv, C('integral'), { alpha: 0.3 });
    line(ctx, ax.X(4), BOX.t, ax.X(4), BOX.b, C('line'), 3, [10, 10]);
    plot(ctx, ax, K.f, C('function'), { x: [0, 3.9999] });
    line(ctx, ax.X(tv), ax.Y(0), ax.X(tv), ax.Y(Math.min(5, K.f(tv))), alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    label(ctx, 'x = b', ax.X(4), BOX.t + 20, { side: 'right', color: C('line'), size: 20, gap: 14 });
    text(ctx, '$t$', ax.X(tv), BOX.b + 46, PAL.ink, { size: 20, align: 'center', tex: true });
    gauge(ctx, A, 6, K.lim, C('integral'), 1120, '$\\int_0^{t}$');
    ro.set(`${typed('integral', `\\int_0^{${n(tv)}}${K.tex}\\,dx`)} = ${K.anti(tv)} = ${n(A)}`);
  }
  still(d, draw);
})();

/* Figure 7.22: 0 ≤ 1/(x eˣ) ≤ e⁻ˣ on [1, +∞), the pair of Example 7.55. Axes 0 to 6 by 0 to 0.4. */
(function () {
  const d = sim('sim-comparison', 520);
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: 1.2, max: 6, step: 0.01, value: 3, unit: '', dec: 2, aria: 'the upper limit t' });
  const ro = readout(d);
  const f = (x) => 1 / (x * Math.exp(x)), g = (x) => Math.exp(-x);
  /* ∫ from 1 to t of 1/(x eˣ), by Simpson's rule on 200 steps */
  const If = (s) => { const m = 200, h = (s - 1) / m; let a = f(1) + f(s); for (let i = 1; i < m; i++) a += (i % 2 ? 4 : 2) * f(1 + i * h); return (a * h) / 3; };
  function draw() {
    const { ctx } = begin(d.c);
    const tv = t.v, cf = F.ref('lower-f'), cg = F.ref('upper-g'), A = If(tv), B = Math.exp(-1) - Math.exp(-tv);
    headline(ctx, `$t = ${n(tv, 2)}$: $\\int_1^{t}\\kf(x)dx = ${n(A)} \\le \\int_1^{t}\\kg(x)dx = ${n(B)}$, and $\\int_1^{t}\\kg(x)dx \\to e^{-1} = ${n(Math.exp(-1))}$`);
    const ax = axes(ctx, BOX, [0, 6], [0, 0.4], { xl: 'x', yl: 'y', nx: 6, ny: 4, fy: (v) => fmt(v, 1) });
    shade(ctx, ax, g, f, 1, tv, cg, { alpha: 0.25 });
    shade(ctx, ax, f, 0, 1, tv, cf, { alpha: 0.35 });
    plot(ctx, ax, g, cg, { x: [0.5, 6] });
    plot(ctx, ax, f, cf, { x: [0.5, 6] });
    line(ctx, ax.X(tv), ax.Y(0), ax.X(tv), ax.Y(g(tv)), alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    label(ctx, 'g(x) = e⁻ˣ', ax.X(0.9), ax.Y(g(0.9)), { side: 'right', color: cg, size: 22, gap: 30 });
    label(ctx, 'f(x) = 1/(xeˣ)', ax.X(1.6), ax.Y(f(1.6)), { side: 'below', color: cf, size: 22, gap: 40 });
    gauge(ctx, A, 0.4, null, cf, 1085, '$\\int \\kf$');
    gauge(ctx, B, 0.4, Math.exp(-1), cg, 1185, '$\\int \\kg$');
    ro.set(`0 \\le ${typed('integral', `\\int_1^{${n(tv, 2)}}\\frac{dx}{xe^{x}}`)} = ${n(A)} \\le ${typed('integral', `\\int_1^{${n(tv, 2)}}e^{-x}dx`)} = ${n(B)} \\le ${typed('limit', 'e^{-1}')}`);
  }
  still(d, draw);
})();
};
