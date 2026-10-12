/* Figures for section 8.2 Direction Fields and Numerical Methods. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, text, headline, register, readout, fmt, hover, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const level = (ctx, ax, k, color) => line(ctx, ax.box.l, ax.Y(k), ax.box.r, ax.Y(k), color, 3, [10, 10]);
const fieldColor = () => alpha(C('derivative'), 0.62);

/* Figure 8.6: the direction field of T′ = −0.4(T − 72), the equilibrium T = 72 dashed, and two solutions
   T = 72 + (T₀ − 72)e^(−0.4t), from T(0) = 100 and T(0) = 50 (the book prints no starts). Axes t 0 to 10 by T 40 to 110. */
(function () {
  const d = sim('fig-cooling-field', 470);
  const f = (_t, T) => -0.4 * (T - 72), sol = (T0) => (t) => 72 + (T0 - 72) * Math.exp(-0.4 * t);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 230, r: 1170, t: 96, b: 420 }, [0, 10], [40, 110], { xl: 't', yl: 'T', nx: 10, ny: 7 });
    SF.field(ctx, ax, f, fieldColor(), { n: [20, 12] });
    level(ctx, ax, 72, alpha(fc, 0.6));
    plot(ctx, ax, sol(100), fc); plot(ctx, ax, sol(50), fc);
    text(ctx, '$\\kT(0) = 100$', ax.X(0.25), ax.Y(100) - 12, fc, { size: 20, weight: 600, align: 'left', base: 'bottom', tex: true, bg: PAL.panel });
    text(ctx, '$\\kT(0) = 50$', ax.X(0.25), ax.Y(50) + 12, fc, { size: 20, weight: 600, align: 'left', base: 'top', tex: true, bg: PAL.panel });
    text(ctx, '$\\kT = 72$', ax.box.r - 8, ax.Y(72) - 10, fc, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel });
    headline(ctx, '$\\kTprime(t) = -0.4(\\kT - 72)$: the slope at each point of the field, and two solutions drawn along it.');
  }
  still(d, draw);
})();

/* Figures 8.7 + 8.8: the direction field of y′ = 3x + 2y − 4 and the solution curve through the dragged point, with the
   short tangent L(x) = y₀ + y′(x − x₀) there. Opens on (0, 1), whose solution is y = −(3/2)x + 5/4 − e^(2x)/4.
   Axes −5 to 5 by −10 to 10. */
(function () {
  const d = sim('sim-direction-field', 540);
  const f = (x, y) => 3 * x + 2 * y - 4;
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -5, max: 5, step: 0.1, value: 0, unit: '', dec: 1 });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -10, max: 10, step: 0.1, value: 1, unit: '', dec: 1 });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  let ax = null;
  hover(d.stage, () => (ax ? [{ x: ax.X(x0.v), y: ax.Y(y0.v), r: 20, name: `(x₀, y₀) = (${fmt(x0.v, 1)}, ${fmt(y0.v, 1)}), the initial value` }] : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point'), m = f(x0.v, y0.v);
    ax = axes(ctx, { l: 250, r: 1150, t: 96, b: 490 }, [-5, 5], [-10, 10], { xl: 'x', yl: 'y', nx: 10, ny: 10 });
    SF.field(ctx, ax, f, fieldColor(), { n: [20, 14] });
    SF.curve(ctx, ax, f, [x0.v, y0.v], fc);
    const sg = SF.segment(x0.v, y0.v, m, 150, (ax.box.r - ax.box.l) / 10, (ax.box.b - ax.box.t) / 20);
    if (sg) line(ctx, ax.X(sg[0][0]), ax.Y(sg[0][1]), ax.X(sg[1][0]), ax.Y(sg[1][1]), lc, 4);
    P.draw(ctx, ax, pc);
    headline(ctx, `Through (${fmt(x0.v, 1)}, ${fmt(y0.v, 1)}): the slope is $\\kyprime = 3(${n(x0.v, 1)}) + 2(${n(y0.v, 1)}) - 4 = ${n(m, 1)}$.`);
    ro.set(`\\kyprime = 3x + 2\\kyfn - 4 = ${n(m, 1)},\\quad \\kL(x) = ${n(y0.v, 1)} ${m < 0 ? '-' : '+'} ${n(Math.abs(m), 1)}(x ${x0.v < 0 ? '+' : '-'} ${n(Math.abs(x0.v), 1)})`);
  }
  still(d, draw);
})();

/* Figures 8.9 + 8.10 + 8.11: the direction field of y′ = (x − 3)(y² − 4), its equilibria y = ±2 dashed, and the solution
   through the dragged point; y₀ has detents at the book's 0.5 and −3 and at −1.9 and −2.1 either side of −2.
   Axes −2 to 8 by −5 to 5. */
(function () {
  const d = sim('sim-equilibria', 540);
  const f = (x, y) => (x - 3) * (y * y - 4);
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -2, max: 8, step: 0.1, value: 0, unit: '', dec: 1 });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -5, max: 5, step: 0.05, value: -1.9, unit: '', dec: 2, detents: [0.5, -3, -1.9, -2.1], specials: [{ at: 2 }, { at: -2 }] });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  function fate(pts) {
    const last = pts[pts.length - 1], y = y0.v;
    if (Math.abs(Math.abs(y) - 2) < 1e-9) return `is the equilibrium solution y = ${fmt(y, 0)}.`;
    if (last[0] < 7.999) return last[1] > 0 ? 'grows without bound.' : 'falls without bound.';
    if (Math.abs(last[1] + 2) < 0.05) return 'approaches y = −2 as x grows.';
    return last[1] > 5 ? 'grows without bound.' : last[1] < -5 ? 'falls without bound.' : `reaches y = ${fmt(last[1], 2)} at x = 8.`;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), m = f(x0.v, y0.v);
    const ax = axes(ctx, { l: 250, r: 1150, t: 96, b: 490 }, [-2, 8], [-5, 5], { xl: 'x', yl: 'y', nx: 10, ny: 10 });
    SF.field(ctx, ax, f, fieldColor(), { n: [20, 14] });
    [2, -2].forEach((k) => { level(ctx, ax, k, alpha(fc, 0.6)); text(ctx, `$\\kyfn = ${k}$`, ax.box.r - 8, ax.Y(k) - 10, fc, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel }); });
    const pts = SF.curve(ctx, ax, f, [x0.v, y0.v], fc);
    P.draw(ctx, ax, pc);
    headline(ctx, `From y(${fmt(x0.v, 1)}) = ${fmt(y0.v, 2)} the solution ${fate(pts)}`);
    ro.set(`\\kyprime = (x - 3)(\\kyfn^2 - 4) = (${n(x0.v, 1)} - 3)((${n(y0.v)})^2 - 4) = ${n(m)}`);
  }
  still(d, draw);
})();

/* Figure 8.12 (Example 8.8): the direction field of y′ = (y − 3)²(y² + y − 2), its equilibria y = −2, 1 and 3 dashed.
   Axes −4 to 4 by −4 to 6. */
(function () {
  const d = sim('fig-stability', 470);
  const f = (_x, y) => (y - 3) ** 2 * (y * y + y - 2);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 250, r: 1150, t: 96, b: 430 }, [-4, 4], [-4, 6], { xl: 'x', yl: 'y', nx: 8, ny: 10 });
    SF.field(ctx, ax, f, fieldColor(), { n: [20, 15] });
    [-2, 1, 3].forEach((k) => { level(ctx, ax, k, alpha(fc, 0.7)); text(ctx, `$\\kyfn = ${k}$`, ax.box.r - 8, ax.Y(k) - 10, fc, { size: 20, weight: 600, align: 'right', base: 'bottom', tex: true, bg: PAL.panel }); });
    headline(ctx, '$\\kyprime = (\\kyfn - 3)^2(\\kyfn^2 + \\kyfn - 2)$ is zero along three levels.');
  }
  still(d, draw);
})();

/* Figures 8.13 + 8.14: Euler's Method for y′ = 2x − 3 from the dragged point, opening on y(0) = 3, whose solution is
   y = x² − 3x + 3: steps of h to x = 3 in the colour of a line, the exact solution through the same point, the field faint
   behind. h has detents at the book's 0.5 and 0.25. Axes −1 to 4 by −4 to 5, the book's −1 to 4 widened for the starts the point reaches. */
(function () {
  const d = sim('sim-euler', 540);
  const f = (x) => 2 * x - 3;
  const h = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.05, max: 1, step: 0.05, value: 0.5, unit: '', dec: 2, detents: [0.5, 0.25] });
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -0.5, max: 1.5, step: 0.1, value: 0, unit: '', dec: 1 });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -1, max: 4, step: 0.1, value: 3, unit: '', dec: 1 });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  let ax = null, pts = [];
  hover(d.stage, () => (ax ? pts.map(([x, y], i) => ({ x: ax.X(x), y: ax.Y(y), r: 10, name: `(x${'₀₁₂₃₄₅₆₇₈₉'[i] ?? `_${i}`}, y${'₀₁₂₃₄₅₆₇₈₉'[i] ?? `_${i}`}) = (${fmt(x, 2)}, ${fmt(y, 3)})` })) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point'), hv = h.v;
    const N = Math.max(0, Math.round((3 - x0.v) / hv - 1e-9));
    ax = axes(ctx, { l: 300, r: 1100, t: 96, b: 490 }, [-1, 4], [-4, 5], { xl: 'x', yl: 'y', nx: 10, ny: 9, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : fmt(v, 1)), fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : fmt(v, 1)) });
    SF.field(ctx, ax, f, alpha(C('derivative'), 0.3), { n: [16, 16] });
    const c = y0.v - x0.v * x0.v + 3 * x0.v, exact = (x) => x * x - 3 * x + c;
    plot(ctx, ax, exact, fc);
    pts = SF.euler(ctx, ax, f, [x0.v, y0.v], hv, N, lc);
    P.draw(ctx, ax, pc);
    const [xe, ye] = pts[pts.length - 1];
    headline(ctx, `h = ${fmt(hv, 2)}: ${N} steps reach x = ${fmt(xe, 2)} at y = ${fmt(ye, 2)}, where the solution is ${fmt(exact(xe), 2)}.`);
    if (N > 0) {
      const [xp, yp] = pts[N - 1];
      ro.set(`y_{${N}} = y_{${N - 1}} + h\\kf(x_{${N - 1}}, y_{${N - 1}}) = ${n(yp, 3)} + ${n(hv, 2)}(2(${n(xp, 2)}) - 3) = ${n(ye, 3)}`);
    } else ro.set(`y_{0} = ${n(y0.v, 1)}`);
  }
  still(d, draw);
})();
};
