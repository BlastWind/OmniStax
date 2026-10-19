/* Figures for section 3.9 Derivatives of Exponential and Logarithmic Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.9'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, drag, dot, line, text, label, hbracket, headline, register, readout, fmt, hover, presence } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Figures 3.33 and 3.34: B(x) = bˣ for b from 2 to 3 with its tangent at a point x the reader drags, opening at (0, 1),
   where the slope is B′(0) = ln b; the book's bases 2 and 3 are detents (2.7 and 2.8, too near e to snap to, are reached by
   sliding) and e the special, where the tangent at 0 is y = x + 1. At every x the slope over the height is B′(0), so the
   tangent meets the x-axis 1/B′(0) behind x, bracketed where it falls inside the box. Axes fixed at −2 to 2 by −1 to 6;
   x stops at 1.6, where 3^1.6 = 5.8 is still inside. */
(function () {
  const d = sim('sim-find-e', 540);
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 2, max: 3, step: 0.001, value: 2, unit: '', dec: 3, detents: [2, 3], snap: true, specials: [{ at: Math.E }] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2, max: 1.6, step: 0.01, value: 0, unit: '', dec: 2, detents: [0] });
  const P = drag(d, { x: xs, y: (x) => bs.v ** x });
  const pr = presence(d);
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 90, b: 470 };
  const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), dc = C('derivative');
    const b = bs.v, isE = Math.abs(b - Math.E) < 1e-9, m = Math.log(b), H = 0.00001, x = xs.v, h = b ** x, sl = m * h, at0 = Math.abs(x) < 1e-9;
    pr.show('e', isE && at0, { ms: 600 });
    const ax = axes(ctx, BOX, [-2, 2], [-1, 6], { xl: 'x', yl: 'y', nx: 4, ny: 7, fy: (v) => fmt(v, 0), fx: (v) => fmt(v, 0) });
    tangent(ctx, ax, (t) => b ** t, x, lc, { df: (t) => m * b ** t, w: 4 });
    plot(ctx, ax, (t) => b ** t, fc);
    if (!at0) {
      line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(h), alpha(PAL.ink, 0.45), 2.5, [4, 8]);
      if (x - 1 / m > -2) hbracket(ctx, ax.X(x - 1 / m), ax.X(x), ax.Y(0) + 12, PAL.ink, `1/B′(0) = ${fmt(1 / m, 3)}`, { side: 'below' });
    }
    dot(ctx, ax.X(0), ax.Y(1), fc, true, 9);
    text(ctx, isE ? '$\\kE(x) = e^x$' : `$\\kB(x) = ${n(b, 3)}^{x}$`, ax.X(1.05), ax.Y(b ** 1.05) - 30, fc, { size: 24, weight: 600, align: 'right', tex: true });
    F.faded(ctx, pr.a('e'), [0, 0], () => text(ctx, '$y = x + 1$', ax.X(1.9), ax.Y(2.9) + 34, lc, { size: 22, weight: 600, align: 'right', tex: true }));
    label(ctx, '(0, 1)', ax.X(0), ax.Y(1), { side: x > -0.6 && x < 0.9 && !at0 ? 'left' : 'right', gap: 26 });
    P.draw(ctx, ax, fc);
    hits = [{ x: ax.X(0), y: ax.Y(1), r: 16, name: '(0, 1), on every bˣ' }, { x: ax.X(x), y: ax.Y(h), r: 16, name: `(${fmt(x, 2)}, ${fmt(h, 4)}): the tangent there has slope ${fmt(sl, 4)}` }];
    headline(ctx, at0 ? (isE ? 'b = e ≈ 2.718: the slope at 0 is 1, and the tangent is y = x + 1.'
      : `b = ${fmt(b, 3)}: the tangent at 0 has slope ${fmt(m, 4)}${m < 1 ? ', less than 1' : ', more than 1'}.`)
      : `x = ${fmt(x, 2)}: slope ${fmt(sl, 4)} over height ${fmt(h, 4)} is ${fmt(m, 4)}, the slope at 0${isE ? ', so the slope of eˣ is its height' : ''}.`);
    const s5 = Number(sl.toFixed(5)), h5 = Number(h.toFixed(5));
    const ratio = isE ? `\\frac{\\kEprime(${n(x, 2)})}{\\kE(${n(x, 2)})}=\\frac{${typed('derivative', n(s5, 5))}}{${typed('function', n(h5, 5))}}=${n(s5 / h5, 3)}`
      : `\\frac{\\kBprime(${n(x, 2)})}{\\kB(${n(x, 2)})}=\\frac{${typed('derivative', n(s5, 5))}}{${typed('function', n(h5, 5))}}=${n(s5 / h5, 3)}`;
    ro.set(isE ? `\\kEprime(0) = \\lim_{h\\to 0}\\frac{e^{h}-1}{h} = 1\\qquad ${ratio}`
      : `\\kBprime(0) = \\lim_{h\\to 0}\\frac{b^{h}-1}{h} \\approx \\frac{${n(b, 3)}^{0.00001}-1}{0.00001} = ${n((b ** H - 1) / H, 5)}\\qquad ${ratio}`, undefined, { form: isE });
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
