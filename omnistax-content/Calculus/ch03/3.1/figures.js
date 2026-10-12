/* Figures for section 3.1 Defining the Derivative. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, tangent, drag, dot, line, text, label, headline, register, readout, fmt, hover, presence, spring, block } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const lerp = (p, q, k) => p + (q - p) * k;
/* the line through (x0, y0) with slope m, drawn across the axes as a tangent is */
const through = (ctx, ax, x0, y0, m, color, o = {}) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w: 4, ...o });

/* Figures 3.3 and 3.4: on f(x) = x² with a = 3 the second point is dragged toward (3, 9), named (x, f(x)) or
   (a + h, f(a + h)) by the choice of form; at x = a the dashed secant becomes the solid tangent of slope 6.
   Axes fixed at −1 to 6 by −6 to 36, past f(5.5) = 30.25. */
(function () {
  const d = sim('sim-secant-to-tangent-h', 560);
  const f = (x) => x * x, A = 3, FA = 9, DFA = 6;
  const form = choice(d.controls, { label: 'form', options: [{ value: 'x', label: 'x' }, { value: 'h', label: 'a + h' }], value: 'x', aria: 'form of the difference quotient', onInput: () => xs.relabel(form.value === 'x' ? 'x' : 'a + h') });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.5, max: 5.5, step: 0.01, value: 4, unit: '', dec: 2, detents: [2.9, 3.1], snap: true, specials: [{ at: A }] });
  const P = drag(d, { x: xs, y: f });
  const pr = presence(d);
  const ro = readout(d);
  const BOX = { l: 240, r: 1220, t: 100, b: 470 };
  let hits = [], lastM = (f(4) - FA) / 1;
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const x = xs.v, fx = f(x), h = x - A, at = Math.abs(h) < 1e-9, hf = form.value === 'h';
    if (!at) lastM = (fx - FA) / h;
    pr.show('tan', at, { ms: 700 });
    const k = pr.a('tan'), m = lerp(lastM, DFA, k);
    const ax = axes(ctx, BOX, [-1, 6], [-6, 36], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    plot(ctx, ax, f, fc);
    through(ctx, ax, A, FA, m, lc, { dash: k > 0.5 ? undefined : [10, 10] });
    drop(ctx, ax.X(A), ax.Y(FA), ax.X(A), ax.Y(0));
    if (!at) drop(ctx, ax.X(x), ax.Y(fx), ax.X(x), ax.Y(0));
    dot(ctx, ax.X(A), ax.Y(FA), fc, true, 10);
    label(ctx, '(a, f(a))', ax.X(A), ax.Y(FA), { side: x > A ? 'left' : 'right', gap: 26 });
    if (!at) label(ctx, hf ? '(a + h, f(a + h))' : '(x, f(x))', ax.X(x), ax.Y(fx), { side: x > A ? 'right' : 'left', gap: 26 });
    text(ctx, '$\\kf(x) = x^2$', ax.X(4.75), ax.Y(27), fc, { size: 24, weight: 600, align: 'right', tex: true });
    P.draw(ctx, ax, fc);
    const xl = A + 1.8, yl = FA + m * 1.8;
    hits = [
      { x: ax.X(A), y: ax.Y(FA), r: 18, name: '(a, f(a)) = (3, 9)' },
      ...(at ? [] : [{ x: ax.X(x), y: ax.Y(fx), r: 18, name: `${hf ? '(a + h, f(a + h))' : '(x, f(x))'} = (${fmt(x, 2)}, ${fmt(fx, 2)})` }]),
      ...(yl > -6 && yl < 36 ? [{ x: ax.X(xl), y: ax.Y(yl), r: 16, name: at ? 'the tangent line at a = 3, slope 6' : `the secant line, slope ${fmt(m, 3)}` }] : []),
    ];
    const name = hf ? `h = ${fmt(h, 2)}` : `x = ${fmt(x, 2)}`;
    headline(ctx, at ? (hf ? 'h = 0: the secant has become the tangent line, with slope 6.' : 'x = a: the secant has become the tangent line, with slope 6.')
      : `${name}: the secant through (3, 9) and (${fmt(x, 2)}, ${fmt(fx, 2)}) has slope ${fmt(m, 3)}.`);
    if (at) ro.set(hf ? '\\kmtan = \\lim_{h\\to 0}\\frac{\\kf(3+h)-\\kf(3)}{h} = 6' : '\\kmtan = \\lim_{x\\to 3}\\frac{\\kf(x)-\\kf(3)}{x-3} = 6', undefined, { form: 'tan' + form.value });
    else if (hf) ro.set(`\\kQ = \\frac{\\kf(3 ${h < 0 ? '-' : '+'} ${n(Math.abs(h))}) - \\kf(3)}{${n(h)}} = \\frac{${n(fx, 4)} - 9}{${n(h)}} = ${n(m, 3)}`, undefined, { form: 'h' });
    else ro.set(`\\kQ = \\frac{\\kf(${n(x)}) - \\kf(3)}{${n(x)} - 3} = \\frac{${n(fx, 4)} - 9}{${n(h)}} = ${n(m, 3)}`, undefined, { form: 'x' });
  }
  still(d, draw);
})();

/* Figure 3.5: f(x) = √x and its tangent y = (x + 1)/2 at (1, 1) in the window 1 ± w by 1 ± 0.6w, the book's
   four panels being w = 2, 1 and 0.1; the zoom is the lesson, so the axes follow w with round ticks. */
(function () {
  const d = sim('sim-local-linearity', 520);
  const f = Math.sqrt, T = (x) => (x + 1) / 2;
  const ws = ctl(d.controls, { label: 'w', cls: '', key: 'w', min: 0.01, max: 2, step: 0.01, value: 2, unit: '', dec: 2, detents: [2, 1, 0.1] });
  const ro = readout(d);
  const BOX = { l: 330, r: 1130, t: 90, b: 450 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), w = ws.v;
    const lo = Math.max(0, 1 - w), hi = 1 + w;
    let gap = 0;
    for (let i = 0; i <= 400; i++) { const x = lo + ((hi - lo) * i) / 400; gap = Math.max(gap, Math.abs(f(x) - T(x))); }
    const ax = axes(ctx, BOX, [1 - w, 1 + w], [1 - 0.6 * w, 1 + 0.6 * w], { xl: 'x', yl: 'y', nx: 4, ny: 4, nice: true });
    through(ctx, ax, 1, 1, 0.5, lc, { w: 4 });
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(1), ax.Y(1), fc, true, 9);
    const pct = (100 * gap) / (1.2 * w);
    hits = [
      { x: ax.X(1), y: ax.Y(1), r: 16, name: '(1, 1)' },
      { x: ax.X(1 + 0.7 * w), y: ax.Y(T(1 + 0.7 * w)), r: 14, name: 'the tangent line y = (x + 1)/2' },
      { x: ax.X(1 + 0.7 * w), y: ax.Y(f(1 + 0.7 * w)), r: 14, name: 'f(x) = √x' },
    ];
    const dec = gap < 0.001 ? 6 : gap < 0.01 ? 5 : 4;
    headline(ctx, `Window 1 ± ${fmt(w, 2)}: the largest gap is ${fmt(gap, dec)}, ${fmt(pct, pct < 1 ? 2 : 1)} % of the window’s height.`);
    ro.set(`\\max_{${n(lo)}\\le x\\le ${n(hi)}}\\left|\\kf(x)-\\htmlClass{kv-line}{\\tfrac{x+1}{2}}\\right| = ${n(gap, dec)}`);
  }
  still(d, draw);
})();

/* Figure 3.6, a faithful copy: f(x) = x² and its tangent y = 6x − 9 at (3, 9), on the book's −1 to 4 by −15 to 20. */
(function () {
  const d = sim('fig-tangent-square', 480);
  const f = (x) => x * x;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const ax = axes(ctx, { l: 430, r: 990, t: 40, b: 420 }, [-1, 4], [-15, 20], { xl: 'x', yl: 'y', nx: 5, ny: 7 });
    through(ctx, ax, 3, 9, 6, lc, { w: 4 });
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(3), ax.Y(9), fc, true, 9);
    text(ctx, '$\\kf(x) = x^2$', ax.X(2.25), ax.Y(16), fc, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$y = 6x - 9$', ax.X(3.35), ax.Y(5.5), lc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: ax.X(3), y: ax.Y(9), r: 16, name: '(3, 9)' }];
  }
  still(d, draw);
})();

/* Figure 3.7, a faithful copy: f(x) = 1/x and its tangent y = −x/4 + 1 at (2, 1/2), on the book's −6 to 6 by −3 to 4. */
(function () {
  const d = sim('fig-tangent-reciprocal', 480);
  const f = (x) => 1 / x;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const ax = axes(ctx, { l: 320, r: 1080, t: 40, b: 420 }, [-6, 6], [-3, 4], { xl: 'x', yl: 'y', nx: 6, ny: 7 });
    through(ctx, ax, 2, 0.5, -0.25, lc, { w: 4 });
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(2), ax.Y(0.5), fc, true, 9);
    text(ctx, '$\\kf(x) = \\dfrac{1}{x}$', ax.X(3), ax.Y(2.2), fc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, '$y = -\\dfrac{x}{4} + 1$', ax.X(-4.6), ax.Y(2.85), lc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: ax.X(2), y: ax.Y(0.5), r: 16, name: '(2, 1/2)' }];
  }
  still(d, draw);
})();

/* Figure 3.8, a faithful copy: a position s(t), the stand-in 1 + 3 sin(πt/9) for the book's unformulated curve,
   with its secant over [a, t] = [1.5, 4] and its tangent at a; their slopes are the average and the
   instantaneous velocity. */
(function () {
  const d = sim('fig-velocity-secant-tangent', 460);
  const s = (t) => 1 + 3 * Math.sin((Math.PI * t) / 9), A = 1.5, T1 = 4;
  const ds = (t) => (3 * Math.PI / 9) * Math.cos((Math.PI * t) / 9);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const blank = () => '';
    const ax = axes(ctx, { l: 360, r: 1040, t: 40, b: 390 }, [0, 5], [0, 5.5], { xl: 't', yl: 'y', nx: 0, ny: 0, fx: blank, fy: blank });
    const vt = ds(A), va = (s(T1) - s(A)) / (T1 - A);
    through(ctx, ax, A, s(A), vt, lc, { w: 4 });
    through(ctx, ax, A, s(A), va, lc, { w: 4, dash: [10, 10] });
    plot(ctx, ax, s, fc);
    [A, T1].forEach((t) => { drop(ctx, ax.X(t), ax.Y(s(t)), ax.X(t), ax.Y(0)); dot(ctx, ax.X(t), ax.Y(s(t)), fc, true, 9); });
    text(ctx, 'a', ax.X(A), ax.box.b + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 't', ax.X(T1), ax.box.b + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '$y = \\ks(t)$', ax.X(4.3), ax.Y(s(4.3)) + 34, fc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, 'tangent', ax.X(3.3), ax.Y(s(A) + vt * 1.8) - 18, lc, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'secant', ax.X(3.2), ax.Y(s(A) + va * 1.7) + 30, lc, { size: 22, weight: 600, align: 'left' });
    hits = [
      { x: ax.X(A), y: ax.Y(s(A)), r: 16, name: '(a, s(a))' },
      { x: ax.X(T1), y: ax.Y(s(T1)), r: 16, name: '(t, s(t))' },
      { x: ax.X(3), y: ax.Y(s(A) + vt * 1.5), r: 14, name: 'the tangent line; its slope is the instantaneous velocity v(a)' },
      { x: ax.X(2.6), y: ax.Y(s(A) + va * 1.1), r: 14, name: 'the secant line; its slope is the average velocity over [a, t]' },
    ];
  }
  still(d, draw);
})();

/* Figure 3.9, a faithful copy: the lead weight on its spring, a little below the dashed level 0 its position is
   measured from. */
(function () {
  const d = sim('fig-spring', 380);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const X0 = 700, Y0 = 210, top = 24;
    line(ctx, 520, top, 520, 360, PAL.ink, 3);
    line(ctx, 520, top, 900, top, PAL.ink, 3);
    line(ctx, 520, Y0, 900, Y0, PAL.muted, 3, [10, 10]);
    text(ctx, '0', 500, Y0, PAL.ink, { size: 22, weight: 600, align: 'right' });
    spring(ctx, X0, top, X0, 262, 9, 34, PAL.ink, 3);
    block(ctx, X0, 290, 110, 56, PAL.ink);
    hits = [{ x: X0, y: 290, r: 40, name: 'the lead weight' }, { x: X0, y: 140, r: 36, name: 'the spring' }, { x: 860, y: Y0, r: 14, name: 'the fixed horizontal line, position 0' }];
  }
  still(d, draw);
})();
};
