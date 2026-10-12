/* Figures for section 6.9 Calculus of the Hyperbolic Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.9'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, text, headline, register, readout, fmt, drag, choice } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const { sinh, cosh, tanh } = Math;
/* each function: itself, its derivative (Table 6.2), its TeX, its derivative's TeX, and the x where it is undefined */
const HYP = {
  sinh: { f: sinh, d: cosh, tex: '\\sinh x', dtex: '\\cosh x' },
  cosh: { f: cosh, d: sinh, tex: '\\cosh x', dtex: '\\sinh x' },
  tanh: { f: tanh, d: (x) => 1 / cosh(x) ** 2, tex: '\\tanh x', dtex: '\\text{sech}^{2}x' },
  coth: { f: (x) => 1 / tanh(x), d: (x) => -1 / sinh(x) ** 2, tex: '\\coth x', dtex: '-\\text{csch}^{2}x', pole: 0 },
  sech: { f: (x) => 1 / cosh(x), d: (x) => -tanh(x) / cosh(x), tex: '\\text{sech}\\,x', dtex: '-\\text{sech}\\,x\\tanh x' },
  csch: { f: (x) => 1 / sinh(x), d: (x) => -cosh(x) / sinh(x) ** 2, tex: '\\text{csch}\\,x', dtex: '-\\text{csch}\\,x\\coth x', pole: 0 },
};
const NAMES = Object.keys(HYP);

/* Figure 6.81: one hyperbolic function at a time above its derivative; the tangent at the dragged x has slope f′(x). */
(function () {
  const d = sim('sim-hyperbolic', 660);
  const pick = choice(d.controls, { label: '', options: NAMES.map((n) => ({ value: n, label: n })), value: 'sinh', aria: 'which hyperbolic function' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2.5, max: 2.5, step: 0.01, value: 0.8, unit: '', dec: 2 });
  const ro = readout(d);
  const P = drag(d, { x: xs, y: (x) => HYP[pick.value].f(x) });
  function draw() {
    const { ctx } = begin(d.c);
    const h = HYP[pick.value], fc = C('function'), dc = C('derivative'), lc = C('line');
    let x = xs.v; if (h.pole !== undefined && Math.abs(x) < 0.08) x = x < 0 ? -0.08 : 0.08;
    const y = h.f(x), m = h.d(x);
    const A = axes(ctx, { l: 300, r: 1100, t: 90, b: 320 }, [-3, 3], [-4, 4], { xl: 'x', yl: 'y', nx: 6, ny: 4 });
    const poles = h.pole !== undefined ? { poles: [0] } : {};
    plot(ctx, A, h.f, fc, { x: [-3, 3], ...poles });
    const dx = 0.9 / Math.sqrt(1 + m * m);
    line(ctx, A.X(x - dx), A.Y(y - m * dx), A.X(x + dx), A.Y(y + m * dx), lc, 3);
    P.draw(ctx, A, fc); dot(ctx, A.X(x), A.Y(y), fc, true, 8);
    text(ctx, `$y=${h.tex}$`, A.X(-2.9), A.Y(3.3), fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    const B = axes(ctx, { l: 300, r: 1100, t: 400, b: 630 }, [-3, 3], [-4, 4], { xl: 'x', yl: 'y', yc: dc, nx: 6, ny: 4 });
    plot(ctx, B, h.d, dc, { x: [-3, 3], ...poles });
    line(ctx, B.X(x), B.Y(0), B.X(x), B.Y(m), alpha(dc, 0.6), 2.5, [8, 6]);
    dot(ctx, B.X(x), B.Y(m), dc, true, 8);
    text(ctx, `$y=${h.dtex}$`, B.X(-2.9), B.Y(3.3), dc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    headline(ctx, `At x = ${fmt(x, 2)} the tangent to y = ${pick.value} x has slope ${fmt(m, 3)}, the value of its derivative there.`);
    ro.set(`\\frac{d}{dx}\\left(${h.tex}\\right)=${h.dtex}\\qquad \\text{at } x=${n2(x, 2)}:\\ ${typed('derivative', n2(m))}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 6.82: one inverse hyperbolic function at a time, with the hyperbolic function it inverts (restricted where it must be)
   faint, and the mirror line y = x. */
(function () {
  const d = sim('sim-inverse-hyperbolic', 560);
  const ln = Math.log;
  const INV = {
    sinh: { f: (x) => ln(x + Math.sqrt(x * x + 1)), g: sinh, gx: [-3, 3], tex: '\\sinh^{-1}x', dom: '(-\\infty,\\infty)' },
    cosh: { f: (x) => (x >= 1 ? ln(x + Math.sqrt(x * x - 1)) : NaN), fx: [1, 4], g: cosh, gx: [0, 3], tex: '\\cosh^{-1}x', dom: '[1,\\infty)' },
    tanh: { f: (x) => (Math.abs(x) < 1 ? 0.5 * ln((1 + x) / (1 - x)) : NaN), fx: [-0.999, 0.999], g: tanh, gx: [-4, 4], tex: '\\tanh^{-1}x', dom: '(-1,1)' },
    coth: { f: (x) => (Math.abs(x) > 1 ? 0.5 * ln((x + 1) / (x - 1)) : NaN), g: (x) => 1 / tanh(x), gx: [-4, 4], tex: '\\coth^{-1}x', dom: '(-\\infty,-1)\\cup(1,\\infty)', pole: 0 },
    sech: { f: (x) => (x > 0 && x <= 1 ? ln((1 + Math.sqrt(1 - x * x)) / x) : NaN), fx: [0.02, 1], g: (x) => 1 / cosh(x), gx: [0, 4], tex: '\\text{sech}^{-1}x', dom: '(0,1]' },
    csch: { f: (x) => (x !== 0 ? ln(1 / x + Math.sqrt(1 / (x * x) + 1)) : NaN), g: (x) => 1 / sinh(x), gx: [-4, 4], tex: '\\text{csch}^{-1}x', dom: '(-\\infty,0)\\cup(0,\\infty)', pole: 0 },
  };
  const pick = choice(d.controls, { label: '', options: NAMES.map((n) => ({ value: n, label: `${n}⁻¹` })), value: 'sinh', aria: 'which inverse hyperbolic function' });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const h = INV[pick.value], fc = C('function');
    const ax = axes(ctx, { l: 450, r: 950, t: 95, b: 535 }, [-4, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 8, ny: 8 });
    line(ctx, ax.X(-4), ax.Y(-4), ax.X(4), ax.Y(4), alpha(C('line'), 0.8), 2.5, [10, 8]);
    const poles = h.pole !== undefined ? { poles: [0] } : {};
    plot(ctx, ax, h.g, alpha(fc, 0.3), { x: h.gx, ...poles });
    if (h.fx) plot(ctx, ax, h.f, fc, { x: h.fx });
    else if (pick.value === 'coth') { plot(ctx, ax, h.f, fc, { x: [-4, -1.0005] }); plot(ctx, ax, h.f, fc, { x: [1.0005, 4] }); }
    else plot(ctx, ax, h.f, fc, { x: [-4, 4], ...poles });
    text(ctx, `$y=${h.tex}$`, ax.X(-3.8), ax.Y(3.2), fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, 'y = x', ax.X(3.4), ax.Y(3.4) + 26, C('line'), { size: 18, weight: 600, align: 'left' });
    headline(ctx, `y = ${pick.value}⁻¹ x is the reflection in y = x of y = ${pick.value} x${pick.value === 'cosh' || pick.value === 'sech' ? ' for x ≥ 0' : ''}.`);
    ro.set(`y=${h.tex}\\qquad \\text{domain } ${h.dom}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 6.84: the catenary y = a cosh(x/a), the book's a = 2, its lowest point at (0, a), and its length over [−4, 4]. */
(function () {
  const d = sim('sim-catenary', 520);
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.8, max: 5, step: 0.05, value: 2, unit: '', dec: 2, specials: [{ at: 2, label: 'the book’s' }] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const a = as.v, f = (x) => a * cosh(x / a), L = 2 * a * sinh(4 / a), fc = C('function');
    const top = Math.max(10, f(4) * 1.25), ax = axes(ctx, { l: 340, r: 1060, t: 100, b: 460 }, [-5, 5], [0, top], { xl: 'x', yl: 'y', nx: 10, ny: 4, fy: (v) => fmt(v, 1) });
    plot(ctx, ax, f, alpha(fc, 0.35), { x: [-5, 5] });
    plot(ctx, ax, f, C('integral'), { x: [-4, 4], w: 6 });
    [-4, 4].forEach((x) => { line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(f(x)), PAL.ink, 5); dot(ctx, ax.X(x), ax.Y(f(x)), PAL.ink, true, 7); });
    dot(ctx, ax.X(0), ax.Y(a), fc, true, 8);
    text(ctx, `(0, ${fmt(a, 2)})`, ax.X(0) + 16, ax.Y(a) + 20, fc, { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, `$y=${n2(a, 2)}\\cosh(x/${n2(a, 2)})$`, ax.X(-4.9), ax.Y(top * 0.92), fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    headline(ctx, `a = ${fmt(a, 2)}: the cable between posts at x = ±4 is ${fmt(L, 3)} long and sags to height ${fmt(a, 2)}.`);
    ro.set(`\\int_{-4}^{4}\\sqrt{1+\\sinh^{2}(x/${n2(a, 2)})}\\,dx=2(${n2(a, 2)})\\sinh\\frac{4}{${n2(a, 2)}}=${typed('integral', n2(L))}`);
  }
  still(d, draw);
})();
};
