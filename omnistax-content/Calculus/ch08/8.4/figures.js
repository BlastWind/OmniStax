/* Figures for section 8.4 The Logistic Equation. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, arrow, text, headline, register, readout, fmt, hover, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const big = (v) => Math.round(v).toLocaleString('en-US').replace('-', '−');
const bigTex = (v) => Math.round(v).toLocaleString('en-US').replace(/,/g, '{,}');
const R = 0.2311, K = 1072764;
const logistic = (P0, t0 = 0) => (t) => { const E = Math.exp(R * (t - t0)); return (P0 * K * E) / (K - P0 + P0 * E); };
const yTicks = (v) => (v % 400000 === 0 ? big(v) : '');

/* Figure 8.18: the exponential growth model P(t) = 100e^(0.03t). Axes t 0 to 55 by P 0 to 450. */
(function () {
  const d = sim('fig-exponential-growth', 420);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 330, r: 1070, t: 50, b: 370 }, [0, 55], [0, 450], { xl: 't', yl: 'P(t)', nx: 11, ny: 9, fx: (v) => (v % 10 === 0 ? fmt(v, 0) : ''), fy: (v) => (v % 100 === 0 ? fmt(v, 0) : '') });
    plot(ctx, ax, (t) => 100 * Math.exp(0.03 * t), fc, { x: [0, 52] });
    text(ctx, '$\\kP(t) = 100e^{0.03t}$', ax.X(30), ax.Y(300), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
  }
  still(d, draw);
})();

/* Figure 8.19: the phase line of dP/dt = rP(1 − P/K): the P-line with P = K and P = 0 marked, solutions moving down above K,
   up between 0 and K and down below 0. The arrows are notation. */
(function () {
  const d = sim('fig-phase-line', 440);
  function draw() {
    const { ctx } = begin(d.c);
    const lim = C('limit'), dc = C('derivative'), X = 700, yK = 170, y0 = 300;
    arrow(ctx, X, 250, X, 40, PAL.ink, 4); arrow(ctx, X, 250, X, 420, PAL.ink, 4);
    dot(ctx, X, yK, lim, true, 11); dot(ctx, X, y0, PAL.ink, true, 11);
    text(ctx, '$\\kP = \\kK$', X - 40, yK, lim, { size: 24, weight: 600, align: 'right', base: 'middle', tex: true });
    text(ctx, '$\\kP = 0$', X - 40, y0, PAL.ink, { size: 24, weight: 600, align: 'right', base: 'middle', tex: true });
    arrow(ctx, X + 70, 80, X + 70, 140, dc, 5); arrow(ctx, X + 70, 270, X + 70, 200, dc, 5); arrow(ctx, X + 70, 330, X + 70, 390, dc, 5);
    text(ctx, 'P decreases', X + 96, 110, dc, { size: 20, align: 'left', base: 'middle' });
    text(ctx, 'P increases', X + 96, 235, dc, { size: 20, align: 'left', base: 'middle' });
    text(ctx, 'P decreases', X + 96, 360, dc, { size: 20, align: 'left', base: 'middle' });
  }
  still(d, draw);
})();

/* Figures 8.21 + 8.22 (Example 8.14): the direction field of dP/dt = 0.2311P(1 − P/1,072,764) and the logistic curve
   through the dragged point (t₀, P₀); P₀ has detents at the book's 900,000 and 1,200,000 and a dashed circle at K.
   The inflection point, where P = K/2, is marked when the curve crosses it. Axes t −20 to 20 by P 0 to 1,400,000. */
(function () {
  const d = sim('sim-deer-logistic', 560);
  const f = (_t, P) => R * P * (1 - P / K);
  const t0 = ctl(d.controls, { label: 't_0', cls: '', key: 't0', min: -20, max: 20, step: 0.5, value: 0, unit: '', dec: 1 });
  const P0 = ctl(d.controls, { label: '\\kPzero', cls: 'function', key: 'P0', min: 0, max: 1400000, step: 1000, value: 900000, unit: '', dec: 0, detents: [900000, 1200000], specials: [{ at: K }] });
  const P = drag(d, { x: t0, y: P0 });
  const ro = readout(d);
  let ax = null, infl = null;
  hover(d.stage, () => (ax && infl !== null ? [{ x: ax.X(infl), y: ax.Y(K / 2), r: 16, name: `the point of inflection, t = ${fmt(infl, 2)}, P = K/2` }] : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lim = C('limit'), pc = C('point'), p0 = P0.v, s0 = t0.v;
    ax = axes(ctx, { l: 300, r: 1200, t: 96, b: 500 }, [-20, 20], [0, 1400000], { xl: 't', yl: 'P', nx: 8, ny: 7, fy: yTicks });
    SF.field(ctx, ax, f, alpha(C('derivative'), 0.55), { n: [20, 14] });
    line(ctx, ax.box.l, ax.Y(K), ax.box.r, ax.Y(K), lim, 3, [10, 10]);
    text(ctx, '$\\kK = 1{,}072{,}764$', ax.box.r - 6, ax.Y(K) - 10, lim, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel });
    const g = logistic(p0, s0), pole = p0 > K ? s0 + Math.log((p0 - K) / p0) / R : -Infinity;
    plot(ctx, ax, g, fc, { x: [Math.max(-20, pole + 1e-6), 20] });
    infl = p0 > 0 && p0 < K ? s0 + Math.log((K - p0) / p0) / R : null;
    if (infl !== null && infl >= -20 && infl <= 20) dot(ctx, ax.X(infl), ax.Y(K / 2), pc, true, 9);
    P.draw(ctx, ax, pc);
    const ahead = g(s0 + 3);
    const fate = p0 === 0 ? 'there is no herd, and it never changes' : Math.abs(p0 - K) < 1 ? 'the herd stays at the carrying capacity' : p0 < K ? 'the herd levels off toward K = 1,072,764' : 'the herd falls toward K = 1,072,764';
    headline(ctx, `From P₀ = ${big(p0)} ${fate}; three years later P ≈ ${big(ahead)}.`);
    const tt = s0 === 0 ? 't' : `(t ${s0 < 0 ? '+' : '-'} ${fmt(Math.abs(s0), 1)})`;
    ro.set(`\\kP(t) = \\frac{\\kPzero\\kK e^{r${tt}}}{(\\kK - \\kPzero) + \\kPzero e^{r${tt}}} = \\frac{${bigTex(p0)}(1{,}072{,}764)e^{0.2311${tt}}}{${bigTex(K - p0)} + ${bigTex(p0)}e^{0.2311${tt}}}`);
  }
  still(d, draw);
})();

/* Figure 8.23: the logistic curve and the exponential curve from 900,000 deer at 23.11 %, each in its referent's colour,
   the carrying capacity K dashed. Axes t −20 to 20 by P 0 to 1,400,000. */
(function () {
  const d = sim('fig-logistic-vs-exponential', 480);
  let ax = null;
  const ex = (t) => 900000 * Math.exp(R * t), lg = logistic(900000);
  hover(d.stage, () => (ax ? [-14, -8, -4].map((t) => ({ x: ax.X(t), y: ax.Y(lg(t)), r: 14, name: 'the logistic curve' })).concat([-10, -5, -1].map((t) => ({ x: ax.X(t), y: ax.Y(ex(t)), r: 14, name: 'the exponential curve' }))) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const lim = C('limit'), lc = F.ref('logistic-curve'), ec = F.ref('exponential-curve');
    ax = axes(ctx, { l: 300, r: 1200, t: 60, b: 420 }, [-20, 20], [0, 1400000], { xl: 't', yl: 'P', nx: 8, ny: 7, fy: yTicks });
    line(ctx, ax.box.l, ax.Y(K), ax.box.r, ax.Y(K), lim, 3, [10, 10]);
    text(ctx, '$\\kK = 1{,}072{,}764$', ax.box.r - 6, ax.Y(K) - 10, lim, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel });
    plot(ctx, ax, ex, ec); plot(ctx, ax, lg, lc);
    dot(ctx, ax.X(0), ax.Y(900000), lc, true, 9);
    text(ctx, '$\\kPzero = 900{,}000$', ax.X(0) + 18, ax.Y(900000) + 8, lc, { size: 20, weight: 600, align: 'left', base: 'top', tex: true, bg: PAL.panel });
    text(ctx, 'exponential growth', ax.X(-3.2) - 12, ax.Y(ex(-3.2)), ec, { size: 20, align: 'right', base: 'middle', bg: PAL.panel });
  }
  still(d, draw);
})();
};
