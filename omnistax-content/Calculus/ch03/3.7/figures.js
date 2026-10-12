/* Figures for section 3.7 Derivatives of Inverse Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.7'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, curve, tangent, drag, dot, line, text, label, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const through = (ctx, ax, x0, y0, m, color, o = {}) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w: 4, ...o });

/* Figure 3.28: the stand-in f(x) = x³/8 + x/2 + 1 on [0, 3], one-to-one and increasing, its inverse as the mirror
   across y = x, and the two tangents (the referents tangent-f, tangent-inverse) at a point and its mirror. Axes fixed
   at 0 to 6 by 0 to 6 so the mirror is true. */
(function () {
  const d = sim('sim-inverse-tangents', 670);
  const f = (x) => x ** 3 / 8 + x / 2 + 1, df = (x) => (3 * x * x) / 8 + 0.5;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 3, step: 0.01, value: 2, unit: '', dec: 2, detents: [2] });
  const P = drag(d, { x: xs, y: f });
  const ro = readout(d);
  const BOX = { l: 445, r: 955, t: 100, b: 610 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), tf = F.ref('tangent-f'), ti = F.ref('tangent-inverse');
    const x = xs.v, a = f(x), m = df(x);
    const ax = axes(ctx, BOX, [0, 6], [0, 6], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    line(ctx, ax.X(0), ax.Y(0), ax.X(6), ax.Y(6), alpha(lc, 0.7), 2.5, [10, 10]);
    plot(ctx, ax, f, fc, { x: [0, 3] });
    curve(ctx, (t) => t, 0, 3, (t) => ax.X(f(t)), ax.Y, fc, 5, 120);
    through(ctx, ax, x, a, m, tf);
    through(ctx, ax, a, x, 1 / m, ti);
    line(ctx, ax.X(x), ax.Y(a), ax.X(a), ax.Y(x), alpha(PAL.ink, 0.35), 2, [4, 8]);
    P.draw(ctx, ax, fc);
    dot(ctx, ax.X(a), ax.Y(x), fc, true, 9);
    text(ctx, '$\\kf$', ax.X(1.2) - 14, ax.Y(f(1.2)) - 14, fc, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kfinv$', ax.X(f(2.6)) + 8, ax.Y(2.6) + 30, fc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, 'y = x', ax.X(5.6), ax.Y(5.6) - 22, lc, { size: 20, weight: 600, align: 'right' });
    label(ctx, `(${fmt(x, 2)}, ${fmt(a, 2)})`, ax.X(x), ax.Y(a), { side: 'left', gap: 26 });
    label(ctx, `(${fmt(a, 2)}, ${fmt(x, 2)})`, ax.X(a), ax.Y(x), { side: 'right', gap: 26 });
    hits = [
      { x: ax.X(x), y: ax.Y(a), r: 18, name: `(f⁻¹(a), a) = (${fmt(x, 2)}, ${fmt(a, 2)}) on f` },
      { x: ax.X(a), y: ax.Y(x), r: 18, name: `(a, f⁻¹(a)) = (${fmt(a, 2)}, ${fmt(x, 2)}) on f⁻¹` },
      { x: ax.X(Math.max(0.2, x - 0.6)), y: ax.Y(a - 0.6 * m), r: 14, name: `the tangent of f, slope ${fmt(m, 3)}` },
      { x: ax.X(Math.min(5.8, a + 0.6)), y: ax.Y(x + 0.6 / m), r: 14, name: `the tangent of f⁻¹, slope ${fmt(1 / m, 3)}` },
    ];
    headline(ctx, `The slope of f at (${fmt(x, 2)}, ${fmt(a, 2)}) is ${fmt(m, 3)}; the slope of f⁻¹ at (${fmt(a, 2)}, ${fmt(x, 2)}) is ${fmt(1 / m, 3)}.`);
    ro.set(`\\kfinvprime(${n(a)}) = \\frac{1}{\\kfprime(\\kfinv(${n(a)}))} = \\frac{1}{\\kfprime(${n(x)})} = \\frac{1}{${n(m, 3)}} = ${n(1 / m, 3)}`);
  }
  still(d, draw);
})();

/* Figure 3.29, a faithful copy: the right triangle with acute angle θ, hypotenuse 1, opposite side x and adjacent
   side √(1 − x²), drawn for x = 0.6. */
(function () {
  const d = sim('fig-sin-inverse-triangle', 380);
  const X = 0.6, S = 520, x0 = 440, y0 = 320;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const thc = C('angle');
    const ad = Math.sqrt(1 - X * X), A = [x0, y0], B = [x0 + ad * S, y0], Cc = [x0 + ad * S, y0 - X * S];
    line(ctx, ...A, ...B, PAL.ink, 3); line(ctx, ...B, ...Cc, PAL.ink, 3); line(ctx, ...A, ...Cc, PAL.ink, 3);
    line(ctx, B[0] - 22, B[1], B[0] - 22, B[1] - 22, PAL.ink, 2); line(ctx, B[0] - 22, B[1] - 22, B[0], B[1] - 22, PAL.ink, 2);
    F.angleArc(ctx, { x: A[0], y: A[1] }, 70, 0, Math.atan2(X, ad), '', null, thc);
    text(ctx, '$\\ktheta$', A[0] + 92, A[1] - 22, thc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, '1', (A[0] + Cc[0]) / 2 - 16, (A[1] + Cc[1]) / 2 - 18, PAL.ink, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'x', B[0] + 18, (B[1] + Cc[1]) / 2, PAL.ink, { size: 24, weight: 600, align: 'left' });
    text(ctx, '$\\sqrt{1-x^2}$', (A[0] + B[0]) / 2, B[1] + 34, PAL.ink, { size: 24, weight: 600, align: 'center', tex: true });
    hits = [{ x: A[0] + 60, y: A[1] - 14, r: 20, name: 'the angle θ = sin⁻¹x' }];
  }
  still(d, draw);
})();
};
