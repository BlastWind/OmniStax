/* Figures for section 3.9 Derivatives of Exponential and Logarithmic Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.9'] = function (root, F) {
const { C, PAL, ctl, begin, axes, plot, tangent, drag, dot, text, label, headline, register, readout, fmt, hover, presence } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Figures 3.33 and 3.34: B(x) = bˣ for b from 2 to 3 with its tangent at (0, 1), of slope B′(0) = ln b; the book's
   bases 2 and 3 are detents (2.7 and 2.8, too near e to snap to, are reached by sliding) and e the special, where the tangent is y = x + 1. Axes fixed at −2 to 2 by
   −1 to 6, past 3² = 9 only off the box's top, where the curve is clipped. */
(function () {
  const d = sim('sim-find-e', 540);
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 2, max: 3, step: 0.001, value: 2, unit: '', dec: 3, detents: [2, 3], snap: true, specials: [{ at: Math.E }] });
  const pr = presence(d);
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 90, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const b = bs.v, isE = Math.abs(b - Math.E) < 1e-9, m = Math.log(b), H = 0.00001;
    pr.show('e', isE, { ms: 600 });
    const ax = axes(ctx, BOX, [-2, 2], [-1, 6], { xl: 'x', yl: 'y', nx: 4, ny: 7, fy: (v) => fmt(v, 0), fx: (v) => fmt(v, 0) });
    tangent(ctx, ax, () => 1, 0, lc, { df: () => m, w: 4 });
    plot(ctx, ax, (x) => b ** x, fc);
    dot(ctx, ax.X(0), ax.Y(1), fc, true, 9);
    text(ctx, isE ? '$\\kE(x) = e^x$' : `$\\kB(x) = ${n(b, 3)}^{x}$`, ax.X(1.05), ax.Y(b ** 1.05) - 30, fc, { size: 24, weight: 600, align: 'right', tex: true });
    F.faded(ctx, pr.a('e'), [0, 0], () => text(ctx, '$y = x + 1$', ax.X(1.9), ax.Y(2.9) + 34, lc, { size: 22, weight: 600, align: 'right', tex: true }));
    label(ctx, '(0, 1)', ax.X(0), ax.Y(1), { side: 'right', gap: 26 });
    hits = [{ x: ax.X(0), y: ax.Y(1), r: 16, name: '(0, 1), on every bˣ' }, { x: ax.X(-1.2), y: ax.Y(1 - 1.2 * m), r: 14, name: `the tangent line at 0, slope ${fmt(m, 4)}` }];
    headline(ctx, isE ? 'b = e ≈ 2.718: the slope at 0 is 1, and the tangent is y = x + 1.'
      : `b = ${fmt(b, 3)}: the tangent at 0 has slope ${fmt(m, 4)}${m < 1 ? ', less than 1' : ', more than 1'}.`);
    ro.set(isE ? '\\kEprime(0) = \\lim_{h\\to 0}\\frac{e^{h}-1}{h} = 1'
      : `\\kBprime(0) = \\lim_{h\\to 0}\\frac{b^{h}-1}{h} \\approx \\frac{${n(b, 3)}^{0.00001}-1}{0.00001} = ${n((b ** H - 1) / H, 5)}`, undefined, { form: isE });
  }
  still(d, draw);
})();

/* Figure 3.35: a point dragged along y = ln x carries its tangent; below, the point (x, 1/x) traces the derivative,
   on 0 to 5 (ln x by −3 to 2, 1/x by 0 to 5). */
(function () {
  const d = sim('sim-ln-derivative', 640);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.2, max: 5, step: 0.01, value: 1, unit: '', dec: 2, detents: [1] });
  const T = F.deriv({ f: Math.log, df: (x) => 1 / x });
  const P = drag(d, { x: xs, y: Math.log });
  const ro = readout(d);
  const TOP = { l: 260, r: 1180, t: 100, b: 320 }, LOW = { l: 260, r: 1180, t: 390, b: 600 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), dc = C('derivative');
    const x = xs.v;
    const top = axes(ctx, TOP, [0, 5], [-3, 2], { xl: 'x', yl: 'y', nx: 5, ny: 5 });
    const low = axes(ctx, LOW, [0, 5], [0, 5], { xl: 'x', yl: 'y', nx: 5, ny: 5 });
    const m = T.draw(ctx, top, low, x, { fc, lc, dc });
    P.draw(ctx, top, fc);
    text(ctx, '$y = \\ln x$', top.X(4.9), top.Y(Math.log(4.9)) + 34, fc, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kdydx = \\dfrac{1}{x}$', low.X(4.9), low.Y(4), dc, { size: 24, weight: 600, align: 'right', tex: true });
    hits = [
      { x: top.X(x), y: top.Y(Math.log(x)), r: 18, name: `(${fmt(x, 2)}, ${fmt(Math.log(x), 3)}) on ln x` },
      ...(m <= 5 ? [{ x: low.X(x), y: low.Y(m), r: 16, name: `(${fmt(x, 2)}, ${fmt(m, 3)}) on 1/x` }] : []),
    ];
    headline(ctx, `x = ${fmt(x, 2)}: the slope of the tangent to ln x is ${fmt(m, 3)} = 1/${fmt(x, 2)}.`);
    ro.set(`\\kdydx\\Big|_{x=${n(x)}} = \\frac{1}{${n(x)}} = ${n(m, 3)}`);
  }
  still(d, draw);
})();
};
