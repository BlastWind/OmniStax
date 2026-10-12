/* Figures for section 4.4 The Mean Value Theorem. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, secant, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const fx = (v) => fmt(v, Number.isInteger(v) ? 0 : 1);
/* a short tangent segment through (c, f(c)) with slope m, half-length h in x */
const seg = (ctx, ax, c, y, m, h, color, dash) => line(ctx, ax.X(c - h), ax.Y(y - m * h), ax.X(c + h), ax.Y(y + m * h), color, 3, dash);

/* Figure 4.21: Rolle's theorem's three cases, (a) a cap, (b) a cup, (c) one period of a wave, with equal values
   at a and b and the horizontal tangents at the points c. Stand-in curves close to the book's sketches. */
(function () {
  const d = sim('fig-rolle-cases', 380);
  const P = [
    { tag: '(a)', f: (x) => 2.6 - 0.45 * (x - 2) ** 2, cs: [[2, 'c']] },
    { tag: '(b)', f: (x) => 0.7 + 0.45 * (x - 2) ** 2, cs: [[2, 'c']] },
    { tag: '(c)', f: (x) => 1.6 + 0.9 * Math.sin((Math.PI / 2) * (x - 0.6)), cs: [[1.6, 'c_1'], [3.6, 'c_2']], b: 4.6 },
  ];
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('line');
    hits = [];
    P.forEach((p, i) => {
      const l = 60 + i * 450, box = { l, r: l + 380, t: 30, b: 270 }, A = 0.6, B = p.b ?? 3.4;
      const ax = axes(ctx, box, [0, 5.2], [0, 3.2], { nx: 0, ny: 0 });
      plot(ctx, ax, [{ f: p.f, x: [A, B], ends: '[]' }], fc);
      drop(ctx, ax.X(A), ax.Y(p.f(A)), ax.X(A), ax.Y(0)); drop(ctx, ax.X(B), ax.Y(p.f(B)), ax.X(B), ax.Y(0));
      text(ctx, 'a', ax.X(A), ax.Y(0) + 24, PAL.ink, { size: 22, align: 'center' }); text(ctx, 'b', ax.X(B), ax.Y(0) + 24, PAL.ink, { size: 22, align: 'center' });
      p.cs.forEach(([c, name]) => {
        seg(ctx, ax, c, p.f(c), 0, 0.7, lc);
        dot(ctx, ax.X(c), ax.Y(p.f(c)), pc, true, 8);
        drop(ctx, ax.X(c), ax.Y(p.f(c)), ax.X(c), ax.Y(0));
        text(ctx, name, ax.X(c), ax.Y(0) + 24, PAL.ink, { size: 22, align: 'center' });
        hits.push({ x: ax.X(c), y: ax.Y(p.f(c)), r: 14, name: `(${name.replace('_', '')}, f(${name.replace('_', '')})), where f′ = 0` });
      });
      text(ctx, p.tag, (box.l + box.r) / 2, box.b + 64, PAL.ink, { size: 22, align: 'center' });
    });
  });
})();

/* Still graphs of one function over [a, b] with its marked points, the dashed horizontal lines at
   f(a) = f(b) and at the points c of Rolle's theorem, or its secant and parallel tangents (o.mvt). */
function graph(id, o) {
  const d = sim(id, o.H || 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('line');
    const ax = axes(ctx, o.box || { l: 360, r: 1040, t: 40, b: (o.H || 420) - 60 }, o.xr, o.yr, { xl: o.xl || 'x', yl: o.yl || 'y', nx: o.nx, ny: o.ny, fx: o.fx || fx, fy: o.fy || fx });
    plot(ctx, ax, o.pieces || o.f, fc);
    if (o.level !== undefined) line(ctx, ax.X(o.xr[0]), ax.Y(o.level), ax.X(o.xr[1]), ax.Y(o.level), alpha(PAL.ink, 0.45), 2.5, [10, 10]);
    if (o.mvt) {
      const [a, b] = o.mvt, m = (o.f(b) - o.f(a)) / (b - a);
      line(ctx, ax.X(a), ax.Y(o.f(a)), ax.X(b), ax.Y(o.f(b)), lc, 3);
      (o.cs || []).forEach((c) => seg(ctx, ax, c, o.f(c), m, o.half || 1, lc, [10, 8]));
    } else (o.cs || []).forEach((c) => seg(ctx, ax, c, o.f(c), 0, o.half || 0.6, lc, [10, 8]));
    hits = (o.points || []).map((p) => { dot(ctx, ax.X(p.x), ax.Y(p.y), pc, !p.open, 9); return { x: ax.X(p.x), y: ax.Y(p.y), r: 16, name: p.name }; });
    if (o.label) text(ctx, o.label[0], ax.X(o.label[1]), ax.Y(o.label[2]), fc, { size: 24, weight: 600, align: 'center', tex: true });
    (o.notes || []).forEach(([s, x, y]) => text(ctx, s, ax.X(x), ax.Y(y), PAL.ink, { size: 20, align: 'center', bg: PAL.panel, tex: true }));
  });
}

/* Figure 4.22: |x| − 1 over [−1, 1]: f(−1) = 0 = f(1), and no horizontal tangent. Axes −2 to 2 by −1.5 to 1.5. */
graph('fig-rolle-fails', { f: (x) => Math.abs(x) - 1, pieces: [{ f: (x) => Math.abs(x) - 1, x: [-1, 1], ends: '[]' }], xr: [-2, 2], yr: [-1.5, 1.5], nx: 4, ny: 6, level: 0, fy: (v) => fmt(v, 1),
  points: [{ x: -1, y: 0, name: 'f(−1) = 0' }, { x: 1, y: 0, name: 'f(1) = 0' }, { x: 0, y: -1, name: 'the corner at x = 0, where f is not differentiable' }],
  label: ['$\\kf(x)=|x|-1$', 1.25, 1.0], notes: [['no $c$ with $\\kfprime(c)=0$', 0, -1.35]] });
/* Figures 4.23 and 4.24, Example 4.14: x² + 2x over [−2, 0] and x³ − 4x over [−2, 2], with their points c. */
graph('fig-rolle-parabola', { f: (x) => x * x + 2 * x, pieces: [{ f: (x) => x * x + 2 * x, x: [-2, 0], ends: '[]' }], xr: [-3, 1], yr: [-2, 2], nx: 4, ny: 4, level: 0, cs: [-1],
  points: [{ x: -2, y: 0, name: 'f(−2) = 0' }, { x: 0, y: 0, name: 'f(0) = 0' }, { x: -1, y: -1, name: 'c = −1, where f′(c) = 0' }], label: ['$\\kf(x)=x^2+2x$', 0.3, 1.4] });
graph('fig-rolle-cubic', { f: (x) => x ** 3 - 4 * x, pieces: [{ f: (x) => x ** 3 - 4 * x, x: [-2, 2], ends: '[]' }], xr: [-3, 3], yr: [-4, 4], nx: 6, ny: 8, level: 0, cs: [-2 / Math.sqrt(3), 2 / Math.sqrt(3)], half: 0.7,
  points: [{ x: -2, y: 0, name: 'f(−2) = 0' }, { x: 2, y: 0, name: 'f(2) = 0' }, { x: -2 / Math.sqrt(3), y: 16 / (3 * Math.sqrt(3)), name: 'c = −2/√3, where f′(c) = 0' }, { x: 2 / Math.sqrt(3), y: -16 / (3 * Math.sqrt(3)), name: 'c = 2/√3, where f′(c) = 0' }],
  label: ['$\\kf(x)=x^3-4x$', 2.3, 3.3] });

/* Figures 4.25 + 4.26: the Mean Value Theorem and the g of its proof, on a stand-in −x³/4 + 3x²/2 − 9x/4 + 5/2
   (the book draws no formula), which falls to c₁, rises to c₂ and falls to b as the book's curve does.
   Above, f over [a, b] with the secant and the tangents parallel to it; below, g(x) = f(x) − (the secant),
   which is 0 at a and b and has its horizontal tangents at the same points c: Rolle's theorem for g.
   Axes x 0 to 4; f from 0 to 3.5; g from −1.2 to 1.2. */
(function () {
  const d = sim('sim-mean-value', 640);
  const f = (x) => -0.25 * x ** 3 + 1.5 * x * x - 2.25 * x + 2.5, df = (x) => -0.75 * x * x + 3 * x - 2.25;
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 3.8, step: 0.01, value: 0, unit: '', dec: 2, onInput: () => { if (bs.v < as.v + 0.2) bs.set(Math.min(4, as.v + 0.2)); } });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.2, max: 4, step: 0.01, value: 4, unit: '', dec: 2, onInput: () => { if (as.v > bs.v - 0.2) as.set(Math.max(0, bs.v - 0.2)); },
    specials: [{ at: () => { const a = as.v, r = F.solve((b) => f(b) - f(a), Math.max(a + 0.25, 0.2), 4); return r; } }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('line'), a = as.v, b = bs.v, m = (f(b) - f(a)) / (b - a);
    const sec = (x) => f(a) + m * (x - a), g = (x) => f(x) - sec(x);
    /* f′(c) = m: −0.75c² + 3c − 2.25 − m = 0 */
    const disc = 9 - 3 * (2.25 + m), cs = disc < 0 ? [] : [(-3 + Math.sqrt(disc)) / -1.5, (-3 - Math.sqrt(disc)) / -1.5].filter((c) => c > a + 1e-6 && c < b - 1e-6).sort((p, q) => p - q);
    headline(ctx, cs.length ? `The secant's slope is ${fmt(m, 3)}; the tangent has that slope at ${cs.map((c, i) => `c${cs.length > 1 ? (i ? '₂' : '₁') : ''} = ${fmt(c, 3)}`).join(' and ')}.` : `The secant's slope is ${fmt(m, 3)}.`);
    const ax = axes(ctx, { l: 300, r: 1100, t: 80, b: 340 }, [0, 4], [0, 3.5], { xl: 'x', yl: 'y', nx: 8, ny: 7, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    plot(ctx, ax, f, alpha(fc, 0.25));
    plot(ctx, ax, [{ f, x: [a, b], ends: '[]' }], fc);
    line(ctx, ax.X(a), ax.Y(f(a)), ax.X(b), ax.Y(f(b)), lc, 3.5);
    dot(ctx, ax.X(a), ax.Y(f(a)), fc, true, 8); dot(ctx, ax.X(b), ax.Y(f(b)), fc, true, 8);
    const gx = axes(ctx, { l: 300, r: 1100, t: 440, b: 590 }, [0, 4], [-1.2, 1.2], { xl: 'x', yl: 'g(x)', nx: 8, ny: 2, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    plot(ctx, gx, [{ f: g, x: [a, b], ends: '[]' }], fc);
    hits = [{ x: ax.X(a), y: ax.Y(f(a)), r: 14, name: `(a, f(a)) = (${fmt(a, 2)}, ${fmt(f(a), 3)})` }, { x: ax.X(b), y: ax.Y(f(b)), r: 14, name: `(b, f(b)) = (${fmt(b, 2)}, ${fmt(f(b), 3)})` },
      { x: ax.X((a + b) / 2), y: ax.Y(sec((a + b) / 2)), r: 14, name: `the secant line, slope ${fmt(m, 3)}` }];
    cs.forEach((c, i) => {
      seg(ctx, ax, c, f(c), m, 0.65, lc, [10, 8]);
      dot(ctx, ax.X(c), ax.Y(f(c)), pc, true, 9);
      line(ctx, ax.X(c), ax.Y(f(c)), ax.X(c), gx.Y(g(c)), alpha(PAL.ink, 0.3), 2, [4, 8]);
      line(ctx, ax.X(c), ax.Y(f(c)), ax.X(c), ax.Y(sec(c)), alpha(fc, 0.8), 3);
      seg(ctx, gx, c, g(c), 0, 0.4, lc, [10, 8]);
      dot(ctx, gx.X(c), gx.Y(g(c)), pc, true, 8);
      const nm = cs.length > 1 ? (i ? 'c₂' : 'c₁') : 'c';
      text(ctx, nm, ax.X(c), ax.Y(f(c)) + (g(c) > 0 ? -30 : 32), pc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x: ax.X(c), y: ax.Y(f(c)), r: 16, name: `${nm} = ${fmt(c, 3)}: f′(${nm}) = ${fmt(df(c), 3)}, the secant's slope` },
        { x: gx.X(c), y: gx.Y(g(c)), r: 14, name: `g′(${nm}) = 0: g(${nm}) = ${fmt(g(c), 3)}, the gap between the curve and the secant` });
    });
    text(ctx, '$\\kf(x)$', ax.X(1.6), ax.Y(f(1.6)) + 36, fc, { size: 24, weight: 600, align: 'center', tex: true });
    ro.set(`\\frac{\\kf(b)-\\kf(a)}{b-a} = \\frac{${n(f(b), 3)} - (${n(f(a), 3)})}{${n(b)} - ${n(a)}} = ${n(m, 3)}${cs.length ? ' \\qquad ' + cs.map((c) => `\\kfprime(${n(c, 3)}) = ${n(df(c), 3)}`).join('\\qquad ') : ''}`);
  });
})();

/* Figure 4.27, Example 4.15: √x over [0, 9], its secant of slope 1/3 and the parallel tangent at c = 9/4. */
graph('fig-mvt-root', { f: Math.sqrt, pieces: [{ f: Math.sqrt, x: [0, 9], ends: '[]' }], xr: [0, 10], yr: [0, 4], nx: 10, ny: 4, mvt: [0, 9], cs: [2.25], half: 1.6,
  points: [{ x: 0, y: 0, name: '(0, 0)' }, { x: 9, y: 3, name: '(9, 3)' }, { x: 2.25, y: 1.5, name: 'c = 9/4, where f′(c) = 1/3, the secant’s slope' }], label: ['$\\kf(x)=\\sqrt{x}$', 6.5, 3.2] });
/* Figure 4.28, Example 4.16: s(t) = −16t² + 100 over [0, 5/2], its secant of slope −40 and the parallel tangent at t = 5/4. */
graph('fig-mvt-rock', { f: (t) => -16 * t * t + 100, pieces: [{ f: (t) => -16 * t * t + 100, x: [0, 2.5], ends: '[]' }], xr: [0, 3], yr: [0, 120], nx: 6, ny: 6, mvt: [0, 2.5], cs: [1.25], half: 0.5,
  xl: 't, seconds', yl: 's(t), feet', fy: (v) => fmt(v, 0), points: [{ x: 0, y: 100, name: '(0, 100)' }, { x: 2.5, y: 0, name: '(5/2, 0)' }, { x: 1.25, y: 75, name: 't = 5/4 sec, where s′(t) = −40 ft/sec, the average velocity' }],
  label: ['$\\ks(t)=-16t^2+100$', 2.1, 85] });

/* Figure 4.29: Corollary 3 on a stand-in cubic with a local maximum at a and a local minimum at b (the book draws
   no formula): f′ > 0, f′ < 0, f′ > 0 on the three stretches. */
(function () {
  const d = sim('fig-sign-of-derivative', 420);
  const f = (x) => 0.5 * x ** 3 - 1.5 * x + 2, A = -1, B = 1;
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), dc = C('derivative');
    const ax = axes(ctx, { l: 360, r: 1040, t: 40, b: 360 }, [-2.2, 2.2], [0, 4], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    plot(ctx, ax, f, fc);
    [[A, 'a'], [B, 'b']].forEach(([x, s]) => { dot(ctx, ax.X(x), ax.Y(f(x)), pc, true, 9); drop(ctx, ax.X(x), ax.Y(f(x)), ax.X(x), ax.Y(0)); text(ctx, s, ax.X(x), ax.Y(0) + 24, PAL.ink, { size: 22, align: 'center' }); });
    text(ctx, "$\\kfprime\\gt 0$", ax.X(-1.75), ax.Y(f(-1.75)) - 40, dc, { size: 22, weight: 600, align: 'center', tex: true });
    text(ctx, "$\\kfprime\\lt 0$", ax.X(0), ax.Y(f(0)) + 44, dc, { size: 22, weight: 600, align: 'center', tex: true });
    text(ctx, "$\\kfprime\\gt 0$", ax.X(1.75), ax.Y(f(1.75)) - 40, dc, { size: 22, weight: 600, align: 'center', tex: true });
    hits = [{ x: ax.X(A), y: ax.Y(f(A)), r: 16, name: '(a, f(a)): f′ changes from positive to negative' }, { x: ax.X(B), y: ax.Y(f(B)), r: 16, name: '(b, f(b)): f′ changes from negative to positive' }];
  });
})();
};
