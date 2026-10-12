/* Figures for section 5.6 Integrals Involving Exponential and Logarithmic Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, dot, line, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Figure 5.37 (Example 5.38), a faithful copy: f(x) = eˣ√(1 + eˣ) on [−3, 1]. Axes −3 to 1 by 0 to 6. */
(function () {
  const d = sim('fig-exp-root', 400);
  const f = (x) => Math.exp(x) * Math.sqrt(1 + Math.exp(x));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 350 }, [-3, 1], [0, 6], { xl: 'x', yl: 'y', nx: 4, ny: 6 });
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(0), ax.Y(Math.SQRT2), pc, true, 8);
    text(ctx, '$(0,\\sqrt{2})$', ax.X(0) - 14, ax.Y(Math.SQRT2) - 22, pc, { size: 20, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x)=e^{x}\\sqrt{1+e^{x}}$', ax.X(-2.9), ax.Y(4.8), fc, { size: 22, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.38 (Example 5.40), a faithful copy: f(x) = e^(1−x) on [0, 3], the region under it on [1, 2] shaded. Axes 0 to 3 by 0 to 3. */
(function () {
  const d = sim('fig-exp-area', 400);
  const f = (x) => Math.exp(1 - x);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 350 }, [0, 3], [0, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: (v) => fmt(v, 1).replace(/\.0$/, ''), fy: (v) => fmt(v, 1).replace(/\.0$/, '') });
    shade(ctx, ax, f, 0, 1, 2, ic, { alpha: 0.32 });
    plot(ctx, ax, f, fc);
    text(ctx, '$\\kf(x)=e^{1-x}$', ax.X(0.45), ax.Y(2.2), fc, { size: 22, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.39 (Example 5.45), a faithful copy: f(x) = 3/(x − 10) and its vertical asymptote x = 10. Axes 0 to 20 by −6 to 6. */
(function () {
  const d = sim('fig-reciprocal-shift', 400);
  const f = (x) => 3 / (x - 10);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 350 }, [0, 20], [-6, 6], { xl: 'x', yl: 'y', nx: 4, ny: 6 });
    line(ctx, ax.X(10), ax.box.t, ax.X(10), ax.box.b, lc, 3, [10, 10]);
    plot(ctx, ax, f, fc);
    text(ctx, '$x=10$', ax.X(10) + 12, ax.box.t + 14, lc, { size: 20, weight: 600, align: 'left', base: 'top', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x)=\\frac{3}{x-10}$', ax.X(14), ax.Y(3.8), fc, { size: 22, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Sim: why ∫ dx/x is ln|x| + C. The area under 1/t from 1 to x is ln x for x > 0; for x < 0 the area under 1/t from −1 to x is
   ln|x|, the same number, by the symmetry of 1/t about the origin. Axes −4 to 4 by −4 to 4. */
(function () {
  const d = sim('sim-reciprocal-log', 500);
  const side = choice(d.controls, { label: '\\text{side}', options: [{ value: 'pos', label: 'x > 0' }, { value: 'neg', label: 'x < 0' }], value: 'pos' });
  const xs = ctl(d.controls, { label: '|x|', cls: '', key: 'x', min: 0.25, max: 4, step: 0.01, value: 3, unit: '', dec: 2, detents: [1] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), pc = C('point'), s = side.value === 'pos' ? 1 : -1, x = s * xs.v, a = s;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 450 }, [-4, 4], [-4, 4], { xl: 't', yl: 'y', nx: 8, ny: 8 });
    const lo = Math.min(a, x), hi = Math.max(a, x);
    if (hi > lo) shade(ctx, ax, (t) => 1 / t, 0, lo, hi, ic, { alpha: 0.32 });
    plot(ctx, ax, (t) => 1 / t, fc, { poles: [0] });
    plot(ctx, ax, (t) => Math.log(Math.abs(t)), alpha(ic, 0.9), { w: 3, poles: [0] });
    dot(ctx, ax.X(x), ax.Y(Math.log(Math.abs(x))), ic, true, 9);
    dot(ctx, ax.X(a), ax.Y(0), pc, false, 8);
    line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(1 / x), alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    text(ctx, '$y=\\frac{1}{t}$', ax.X(0.3), ax.Y(3.6), fc, { size: 22, weight: 600, align: 'left', tex: true });
    text(ctx, '$y=\\ln|t|$', ax.X(-3.9), ax.Y(1.6), ic, { size: 22, weight: 600, align: 'left', tex: true });
    const area = Math.log(Math.abs(x));
    headline(ctx, `The signed area under 1/t from ${s > 0 ? '1' : '−1'} to x = ${fmt(x, 2)} is ${fmt(area, 3)}, which is ln|x|.`);
    ro.set(`\\int_{${a}}^{${n(x, 2)}}\\frac{dt}{t}=${typed('integral', n(area, 3))}=\\ln\\left|${n(x, 2)}\\right|`, undefined, { form: side.value });
  }
  still(d, draw);
})();
};
