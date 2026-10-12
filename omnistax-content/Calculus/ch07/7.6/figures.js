/* Figures for section 7.6 Numerical Integration. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, riemann, line, dot, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n3 = (v, dec = 4) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* The functions the figures offer: the book's sketch (it prints no formula; a curve that rises and falls stands in) and
   the integrals of the section's examples. A box per function, fixed from its own range. exact is the integral, m2 the
   largest |f″| and m4 the largest |f⁽⁴⁾| on [a, b]. */
const FUN = {
  f: { label: 'f', tex: '\\kf(x)', a: 0.5, b: 4.5, xr: [0, 5], yr: [0, 5], f: (x) => 1 + 3 * Math.sin(Math.PI * x / 5),
    exact: 4 + (30 / Math.PI) * Math.cos(Math.PI / 10), m2: 3 * (Math.PI / 5) ** 2, m4: 3 * (Math.PI / 5) ** 4, sketch: true },
  sq: { label: 'x²', tex: 'x^{2}', a: 0, b: 1, xr: [0, 1], yr: [0, 1], f: (x) => x * x, exact: 1 / 3, m2: 2, m4: 0 },
  arc: { label: '√(1 + x²)', tex: '\\sqrt{1+x^{2}}', a: 1, b: 4, xr: [0, 5], yr: [0, 5], f: (x) => Math.sqrt(1 + x * x),
    exact: (2 * Math.sqrt(17) + 0.5 * Math.asinh(4)) - (Math.SQRT2 / 2 + 0.5 * Math.asinh(1)), m2: Math.pow(2, -1.5),
    m4: Math.max(...Array.from({ length: 301 }, (_, i) => { const x = 1 + i / 100; return Math.abs((12 * x * x - 3) / Math.pow(1 + x * x, 3.5)); })) },
  ex2: { label: 'e^(x²)', tex: 'e^{x^{2}}', a: 0, b: 1, xr: [0, 1], yr: [0, 3], ny: 3, f: (x) => Math.exp(x * x), exact: 1.4626517459, m2: 6 * Math.E, m4: 76 * Math.E },
  cube: { label: 'x³', tex: 'x^{3}', a: 0, b: 1, xr: [0, 1], yr: [0, 1], f: (x) => x ** 3, exact: 0.25, m2: 6, m4: 0 },
};
const BOX = { l: 160, r: 1240, t: 110, b: 450 };
/* the frame of a function: round ticks on its own box; the sketch's axis is labelled by its points as the book's is */
function frame(ctx, K, nIn, marks) {
  const ax = axes(ctx, BOX, K.xr, K.yr, K.sketch ? { xl: 'x', yl: 'y', nx: 0, ny: 0 } : { xl: 'x', yl: 'y', nx: 5, ny: K.ny ?? 5, fx: (t) => fmt(t, Number.isInteger(t) ? 0 : 1), fy: (t) => fmt(t, Number.isInteger(t) ? 0 : 1) });
  if (K.sketch && nIn <= 4) marks.forEach(([x, s]) => text(ctx, s, ax.X(x), BOX.b + 26, PAL.ink, { size: 20, align: 'center', tex: true }));
  else if (K.sketch) { text(ctx, '$a$', ax.X(K.a), BOX.b + 26, PAL.ink, { size: 20, align: 'center', tex: true }); text(ctx, '$b$', ax.X(K.b), BOX.b + 26, PAL.ink, { size: 20, align: 'center', tex: true }); }
  return ax;
}
const xs = (K, n) => Array.from({ length: n + 1 }, (_, i) => K.a + ((K.b - K.a) * i) / n);
const fnPicker = (d, keys, onInput) => choice(d.controls, { label: '', aria: 'which function', value: keys[0], options: keys.map((k) => ({ value: k, label: FUN[k].label })), onInput });
/* the area between f and an approximation g over [a, b], shaded in the error colour */
const sliver = (ctx, ax, K, g) => shade(ctx, ax, K.f, g, K.a, K.b, C('error'), { alpha: 0.45 });

/* Figure 7.13: the midpoint rule. */
(function () {
  const d = sim('sim-midpoint', 540);
  const pick = fnPicker(d, ['f', 'sq', 'arc', 'ex2']);
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 16, step: 1, value: 4, unit: '', dec: 0, aria: 'the number of subintervals', detents: [4, 6, 9] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const K = FUN[pick.value], n = nS.v, w = (K.b - K.a) / n, X = xs(K, n), mids = X.slice(0, -1).map((x) => x + w / 2);
    const marks = K.sketch ? [[X[0], 'a = x_{0}'], ...mids.map((m, i) => [m, `m_{${i + 1}}`]), ...X.slice(1, -1).map((x, i) => [x, `x_{${i + 1}}`]), [X[n], `b = x_{${n}}`]].map(([x, s]) => [x, `$${s}$`]) : [];
    const ax = frame(ctx, K, n, marks);
    const Mn = riemann(ctx, ax, K.f, K.a, K.b, n, C('integral'), { rule: 'mid' });
    plot(ctx, ax, K.f, C('function'), { x: K.xr });
    mids.forEach((m) => dot(ctx, ax.X(m), ax.Y(K.f(m)), C('function'), true, 6));
    const err = Math.abs(K.exact - Mn), bound = K.m2 * (K.b - K.a) ** 3 / (24 * n * n);
    headline(ctx, `$n = ${n}$: $\\kM_{${n}} = ${n3(Mn)}$, the integral is $${n3(K.exact)}$, and the error is $${n3(err)}$`);
    ro.set(`${typed('integral', `\\kM_{${n}}`)} = \\sum_{i=1}^{${n}}\\kf(m_{i})\\Delta x = ${n3(Mn)}`, `The error $${typed('error', `|${n3(K.exact)} - ${n3(Mn)}| = ${n3(err)}`)}$ is within the bound $\\frac{M(b-a)^{3}}{24n^{2}} = ${n3(bound)}$.`);
  }
  still(d, draw);
})();

/* Figures 7.14 + 7.15: trapezoids, or the midpoint rectangles over the same subintervals, with the error shaded. */
(function () {
  const d = sim('sim-trapezoid', 540);
  const rule = choice(d.controls, { label: '', aria: 'which rule', value: 'trap', options: [{ value: 'trap', label: 'trapezoids' }, { value: 'mid', label: 'midpoints' }] });
  const pick = fnPicker(d, ['f', 'sq', 'arc', 'ex2']);
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 16, step: 1, value: 4, unit: '', dec: 0, aria: 'the number of subintervals', detents: [4] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const K = FUN[pick.value], n = nS.v, w = (K.b - K.a) / n, X = xs(K, n), trap = rule.value === 'trap';
    const marks = K.sketch ? X.map((x, i) => [x, i === 0 ? '$a = x_{0}$' : i === n ? `$b = x_{${n}}$` : `$x_{${i}}$`]) : [];
    const ax = frame(ctx, K, n, marks);
    const cell = (x) => Math.min(n - 1, Math.max(0, Math.floor((x - K.a) / w)));
    const top = trap ? (x) => { const i = cell(x), x0 = X[i]; return K.f(x0) + ((K.f(x0 + w) - K.f(x0)) * (x - x0)) / w; } : (x) => K.f(X[cell(x)] + w / 2);
    const A = riemann(ctx, ax, K.f, K.a, K.b, n, C('integral'), { rule: trap ? 'trap' : 'mid' });
    sliver(ctx, ax, K, top);
    plot(ctx, ax, K.f, C('function'), { x: K.xr });
    const err = A - K.exact, bound = K.m2 * (K.b - K.a) ** 3 / ((trap ? 12 : 24) * n * n), sym = trap ? 'T' : 'M';
    headline(ctx, `$n = ${n}$: $\\k${sym}_{${n}} = ${n3(A)}$ ${err > 0 ? 'overestimates' : 'underestimates'} the integral $${n3(K.exact)}$ by $${n3(Math.abs(err))}$`);
    const sum = trap ? `\\frac{1}{2}\\Delta x(\\kf(x_{0})+2\\kf(x_{1})+\\cdots+\\kf(x_{${n}}))` : `\\sum_{i=1}^{${n}}\\kf(m_{i})\\Delta x`;
    ro.set(`${typed('integral', `\\k${sym}_{${n}}`)} = ${sum} = ${n3(A)}`, `The error $${typed('error', n3(Math.abs(err)))}$ is within the bound $\\frac{M(b-a)^{3}}{${trap ? 12 : 24}n^{2}} = ${n3(bound)}$.`);
  }
  still(d, draw);
})();

/* Figure 7.16: Simpson's rule, one parabola over each pair of subintervals. */
(function () {
  const d = sim('sim-simpson', 540);
  const pick = fnPicker(d, ['f', 'cube', 'arc']);
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 12, step: 2, value: 4, unit: '', dec: 0, aria: 'the number of subintervals, an even number' });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const K = FUN[pick.value], n = nS.v, w = (K.b - K.a) / n, X = xs(K, n);
    const marks = K.sketch ? X.map((x, i) => [x, `$x_{${i}}$`]) : [];
    const ax = frame(ctx, K, n, marks);
    /* the parabola through (x₀, f(x₀)), (x₁, f(x₁)), (x₂, f(x₂)) of the pair that holds x, in Lagrange's form */
    const pair = (x) => Math.min(n / 2 - 1, Math.max(0, Math.floor((x - K.a) / (2 * w))));
    const par = (x) => {
      const k = pair(x), x0 = X[2 * k], x1 = X[2 * k + 1], x2 = X[2 * k + 2], [y0, y1, y2] = [x0, x1, x2].map(K.f);
      return y0 * ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2)) + y1 * ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2)) + y2 * ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
    };
    shade(ctx, ax, par, 0, K.a, K.b, C('integral'), { alpha: 0.28 });
    X.forEach((x) => line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(K.f(x)), alpha(PAL.ink, 0.35), 2, [4, 8]));
    plot(ctx, ax, K.f, C('function'), { x: K.xr });
    ctx.save(); ctx.setLineDash([10, 10]);
    for (let k = 0; k < n / 2; k++) plot(ctx, ax, par, C('function'), { x: [X[2 * k], X[2 * k + 2]], w: 3 });
    ctx.restore();
    X.forEach((x) => dot(ctx, ax.X(x), ax.Y(K.f(x)), C('function'), true, 6));
    const Sn = (w / 3) * X.reduce((s, x, i) => s + (i === 0 || i === n ? 1 : i % 2 ? 4 : 2) * K.f(x), 0);
    const err = Math.abs(Sn - K.exact), bound = K.m4 * (K.b - K.a) ** 5 / (180 * n ** 4);
    headline(ctx, `$n = ${n}$: ${n / 2} parabola${n > 2 ? 's' : ''}, $\\kS_{${n}} = ${n3(Sn, 5)}$, the integral is $${n3(K.exact, 5)}$, and the error is $${n3(err, 5)}$`);
    ro.set(`${typed('integral', `\\kS_{${n}}`)} = \\frac{\\Delta x}{3}(\\kf(x_{0})+4\\kf(x_{1})+2\\kf(x_{2})+\\cdots+\\kf(x_{${n}})) = ${n3(Sn, 5)}`, `The error $${typed('error', n3(err, 5))}$ is within the bound $\\frac{M(b-a)^{5}}{180n^{4}} = ${n3(bound, 5)}$.`);
  }
  still(d, draw);
})();
};
