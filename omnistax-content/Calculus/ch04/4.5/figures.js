/* Figures for section 4.5 Derivatives and the Shape of a Graph. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, drag } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const fx = (v) => fmt(v, Number.isInteger(v) ? 0 : 1);
const slope = (f, x) => (f(x + 1e-4) - f(x - 1e-4)) / 2e-4;
const seg = (ctx, ax, f, c, h, color) => { const m = slope(f, c), y = f(c); line(ctx, ax.X(c - h), ax.Y(y - m * h), ax.X(c + h), ax.Y(y + m * h), color, 3); };
const tx = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, align: 'center', bg: PAL.panel, tex: s.includes('$'), weight: o.weight, ...o });

/* Four small panels side by side, each a curve over [a, b] with two short tangent lines and its note. */
function panels(id, P, H = 330) {
  const d = sim(id, H);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    P.forEach((p, i) => {
      const l = 50 + i * 340, box = { l, r: l + 280, t: 30, b: 220 };
      const ax = axes(ctx, box, [0, 4], [0, 4], { nx: 0, ny: 0 });
      plot(ctx, ax, [{ f: p.f, x: [0.5, 3.5], ends: '[]' }], fc);
      p.t.forEach((c) => seg(ctx, ax, p.f, c, 0.45, lc));
      tx(ctx, 'a', ax.X(0.5), box.b + 22, PAL.ink); tx(ctx, 'b', ax.X(3.5), box.b + 22, PAL.ink);
      p.notes.forEach((s, k) => tx(ctx, s, (box.l + box.r) / 2, box.b + 54 + k * 28, k ? PAL.ink : C('derivative')));
      tx(ctx, p.tag, (box.l + box.r) / 2, box.b + 54 + p.notes.length * 28, PAL.ink);
    });
  });
}

/* A still graph with marked points and short notes, as the book draws each example's function. */
function graph(id, o) {
  const d = sim(id, o.H || 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const ax = axes(ctx, o.box || { l: 360, r: 1040, t: 40, b: (o.H || 420) - 60 }, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fx: o.fx || fx, fy: o.fy || fx });
    plot(ctx, ax, o.pieces || o.f, fc);
    (o.tangents || []).forEach((c) => seg(ctx, ax, o.f, c, o.half || 0.5, alpha(C('line'), 0.9)));
    hits = (o.points || []).map((p) => { dot(ctx, ax.X(p.x), ax.Y(p.y), pc, true, 9); return { x: ax.X(p.x), y: ax.Y(p.y), r: 16, name: p.name }; });
    (o.notes || []).forEach(([s, x, y, c]) => tx(ctx, s, ax.X(x), ax.Y(y), c === 'd' ? C('derivative') : PAL.ink));
    (o.ticks || []).forEach(([x, s]) => { drop(ctx, ax.X(x), ax.Y(o.f(x)), ax.X(x), ax.Y(o.yr[0])); tx(ctx, s, ax.X(x), ax.box.b + 22, PAL.ink); });
    if (o.label) text(ctx, o.label[0], ax.X(o.label[1]), ax.Y(o.label[2]), fc, { size: 24, weight: 600, align: 'center', tex: true });
  });
}

/* Figure 4.30: increasing over (a, b) with f′ > 0, curving either way (a), (b); decreasing with f′ < 0 (c), (d). */
panels('fig-increasing-decreasing', [
  { tag: '(a)', f: (x) => 0.6 + 0.25 * x * x, t: [1.3, 2.9], notes: ["$\\kfprime\\gt 0$", 'f increasing'] },
  { tag: '(b)', f: (x) => 0.4 + 2 * Math.sqrt(x - 0.3), t: [1.1, 2.9], notes: ["$\\kfprime\\gt 0$", 'f increasing'] },
  { tag: '(c)', f: (x) => 3.6 - 0.25 * x * x, t: [1.3, 2.9], notes: ["$\\kfprime\\lt 0$", 'f decreasing'] },
  { tag: '(d)', f: (x) => 3.6 - 2 * Math.sqrt(x - 0.3), t: [1.1, 2.9], notes: ["$\\kfprime\\lt 0$", 'f decreasing'] },
], 360);

/* Figure 4.31: four critical points on a stand-in close to the book's sketch (it prints no formula): a corner
   maximum at a = 1, a minimum at b = 2, a flat point with no extremum at c = 3 and the maximum at d = 4.
   Between b and d, g′(x) = 6(x − 2)(x − 3)²(4 − x), integrated. */
(function () {
  const A = 1, B = 2, Cc = 3, D = 4;
  const G = (x) => -(x ** 5) / 5 + 3 * x ** 4 - (53 * x ** 3) / 3 + 51 * x * x - 72 * x;
  const g = (x) => (x <= A ? 3 - 1.4 * (A - x) : x <= B ? 1.5 + 1.5 * (x - B) ** 2 : x <= D ? 1.5 + 6 * (G(x) - G(B)) : 3.1 - 1.2 * (x - D) ** 2);
  graph('fig-four-critical-points', { f: g, xr: [0, 5.4], yr: [0, 4], nx: 0, ny: 0,
    points: [{ x: A, y: g(A), name: 'a: f′(a) is undefined, a local maximum' }, { x: B, y: g(B), name: 'b: f′(b) = 0, a local minimum' }, { x: Cc, y: g(Cc), name: 'c: f′(c) = 0, no extremum' }, { x: D, y: g(D), name: 'd: f′(d) = 0, a local maximum' }],
    ticks: [[A, 'a'], [B, 'b'], [Cc, 'c'], [D, 'd']], tangents: [B, Cc, D], half: 0.4,
    notes: [["$\\kfprime\\gt 0$", 0.45, 2.7, 'd'], ["$\\kfprime\\lt 0$", 1.6, 3.0, 'd'], ["$\\kfprime\\gt 0$", 2.4, 1.2, 'd'], ["$\\kfprime\\gt 0$", 3.45, 3.3, 'd'], ["$\\kfprime\\lt 0$", 4.85, 3.4, 'd']] });
})();

/* Figures 4.32 and 4.33, Examples 4.17 and 4.18. */
graph('fig-first-test-cubic', { f: (x) => x ** 3 - 3 * x * x - 9 * x - 1, xr: [-3, 5], yr: [-30, 10], nx: 8, ny: 4, fy: (v) => fmt(v, 0),
  points: [{ x: -1, y: 4, name: 'the local maximum at x = −1, f(−1) = 4' }, { x: 3, y: -28, name: 'the local minimum at x = 3, f(3) = −28' }], label: ['$\\kf(x)=x^3-3x^2-9x-1$', 3.2, 6] });
graph('fig-first-test-root', { f: (x) => 5 * Math.cbrt(x) - Math.cbrt(x) ** 5, xr: [-3, 3], yr: [-5, 5], nx: 6, ny: 5,
  points: [{ x: -1, y: -4, name: 'the local minimum at x = −1, f(−1) = −4' }, { x: 1, y: 4, name: 'the local maximum at x = 1, f(1) = 4' }, { x: 0, y: 0, name: 'x = 0, where f′ is undefined: no extremum' }],
  label: ['$\\kf(x)=5x^{1/3}-x^{5/3}$', 2.0, 4.3] });

/* Figure 4.34: f′ increasing, f concave up (a), (c); f′ decreasing, f concave down (b), (d). */
panels('fig-concavity-cases', [
  { tag: '(a)', f: (x) => 0.6 + 0.25 * x * x, t: [1.3, 2.9], notes: ["$\\kfprime$ increasing", 'f concave up'] },
  { tag: '(b)', f: (x) => 0.4 + 2 * Math.sqrt(x - 0.3), t: [1.1, 2.9], notes: ["$\\kfprime$ decreasing", 'f concave down'] },
  { tag: '(c)', f: (x) => 0.4 + 2 * (Math.sqrt(3.7 - x)), t: [1.1, 2.9], notes: ["$\\kfprime$ increasing", 'f concave up'] },
  { tag: '(d)', f: (x) => 3.6 - 0.25 * x * x, t: [1.3, 2.9], notes: ["$\\kfprime$ decreasing", 'f concave down'] },
], 360);

/* Figure 4.35: concave up before the inflection point (a, f(a)), concave down after; stand-in 2 − cos x. */
graph('fig-inflection-point', { f: (x) => 2 - Math.cos(x), xr: [-1, 4.2], yr: [0, 3.6], nx: 0, ny: 0,
  points: [{ x: Math.PI / 2, y: 2, name: '(a, f(a)), the inflection point' }], ticks: [[Math.PI / 2, 'a']],
  notes: [["$\\kfprime\\lt 0,\\ \\kfdprime\\gt 0$", -0.45, 1.9], ["$\\kfprime\\gt 0,\\ \\kfdprime\\gt 0$", 1.0, 0.45], ["$\\kfprime\\gt 0,\\ \\kfdprime\\lt 0$", 2.3, 3.35], ["$\\kfprime\\lt 0,\\ \\kfdprime\\lt 0$", 3.75, 3.35]] });

/* Figure 4.36, Example 4.19: x³ − 6x² + 9x + 30 and its inflection point (2, 32). */
graph('fig-concavity-cubic', { f: (x) => x ** 3 - 6 * x * x + 9 * x + 30, xr: [-1, 5], yr: [10, 40], nx: 6, ny: 6, fy: (v) => fmt(v, 0),
  points: [{ x: 2, y: 32, name: 'the inflection point (2, 32)' }], label: ['$\\kf(x)=x^3-6x^2+9x+30$', 3.3, 38] });

/* Figure 4.37 made live: f, f′ and f″ in three panels on one x, a point x dragged along f; each panel's
   sign is painted as a band, and the readout names the row of Table 4.1 the point is in. The choice
   carries the book's stand-in curve (2 − cos x, as the figure) and the functions of Examples 4.17, 4.19, 4.20. */
(function () {
  const d = sim('sim-shape-signs', 720);
  const FN = {
    s: { f: (x) => 2 - Math.cos(x), d1: (x) => Math.sin(x), d2: (x) => Math.cos(x), xr: [-1, 4.2], yr: [0.5, 3.5], d1r: [-1.2, 1.2], d2r: [-1.2, 1.2], x0: 0.8, tex: '2-\\cos x' },
    a: { f: (x) => x ** 3 - 3 * x * x - 9 * x - 1, d1: (x) => 3 * x * x - 6 * x - 9, d2: (x) => 6 * x - 6, xr: [-3, 5], yr: [-30, 10], d1r: [-15, 40], d2r: [-25, 25], x0: 0, tex: 'x^3-3x^2-9x-1' },
    b: { f: (x) => x ** 3 - 6 * x * x + 9 * x + 30, d1: (x) => 3 * x * x - 12 * x + 9, d2: (x) => 6 * x - 12, xr: [-1, 5], yr: [10, 40], d1r: [-5, 25], d2r: [-20, 20], x0: 1, tex: 'x^3-6x^2+9x+30' },
    c: { f: (x) => x ** 5 - 5 * x ** 3, d1: (x) => 5 * x ** 4 - 15 * x * x, d2: (x) => 20 * x ** 3 - 30 * x, xr: [-2.4, 2.4], yr: [-15, 15], d1r: [-15, 40], d2r: [-60, 60], x0: 1, tex: 'x^5-5x^3' },
  };
  const pick = choice(d.controls, { label: '', options: [{ value: 's', label: 'Figure 4.37' }, { value: 'a', label: 'Example 4.17' }, { value: 'b', label: 'Example 4.19' }, { value: 'c', label: 'Example 4.20' }], value: 's', aria: 'which function', ms: 0,
    onInput: () => { const q = FN[pick.value]; xs.range({ min: q.xr[0], max: q.xr[1], step: 0.01, value: q.x0 }); } });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -1, max: 4.2, step: 0.01, value: 0.8, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: (x) => FN[pick.value].f(x) });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const sgn = (v) => (Math.abs(v) < 1e-9 ? 0 : v > 0 ? 1 : -1);
  function bands(ctx, ax, g, color) {
    const N = 400, [a, b] = ax.xr, X = (i) => a + ((b - a) * i) / N;
    let start = null;
    for (let i = 0; i <= N; i++) {
      const on = i < N && g((X(i) + X(i + 1)) / 2) > 0;
      if (on && start === null) start = i;
      if (!on && start !== null) { ctx.save(); ctx.fillStyle = alpha(color, 0.15); ctx.fillRect(ax.X(X(start)), ax.box.t, ax.X(X(i)) - ax.X(X(start)), ax.box.b - ax.box.t); ctx.restore(); start = null; }
    }
  }
  still(d, () => {
    const { ctx } = begin(d.c);
    const q = FN[pick.value], fc = C('function'), dc = C('derivative'), pc = C('point'), x = xs.v;
    const s1 = sgn(q.d1(x)), s2 = sgn(q.d2(x));
    const word1 = s1 > 0 ? 'increasing' : s1 < 0 ? 'decreasing' : 'at a critical point', word2 = s2 > 0 ? 'concave up' : s2 < 0 ? 'concave down' : 'where f″ = 0';
    headline(ctx, `At x = ${fmt(x, 2)}, f′ is ${s1 > 0 ? 'positive' : s1 < 0 ? 'negative' : 'zero'} and f″ is ${s2 > 0 ? 'positive' : s2 < 0 ? 'negative' : 'zero'}: f is ${word1} and ${word2}.`);
    const A = axes(ctx, { l: 300, r: 1100, t: 80, b: 260 }, q.xr, q.yr, { xl: 'x', yl: 'f', yc: fc, nx: 6, ny: 4, nice: true });
    const B1 = axes(ctx, { l: 300, r: 1100, t: 345, b: 470 }, q.xr, q.d1r, { xl: 'x', yl: 'f′', yc: dc, nx: 6, ny: 2, nice: true });
    const B2 = axes(ctx, { l: 300, r: 1100, t: 555, b: 680 }, q.xr, q.d2r, { xl: 'x', yl: 'f″', yc: dc, nx: 6, ny: 2, nice: true });
    bands(ctx, B1, q.d1, dc); bands(ctx, B2, q.d2, dc);
    plot(ctx, A, q.f, fc); plot(ctx, B1, q.d1, dc); plot(ctx, B2, q.d2, dc);
    [B1, B2].forEach((ax) => line(ctx, ax.X(ax.xr[0]), ax.Y(0), ax.X(ax.xr[1]), ax.Y(0), alpha(PAL.ink, 0.5), 2));
    line(ctx, A.X(x), A.box.t, A.X(x), B2.box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    P.draw(ctx, A, pc);
    dot(ctx, B1.X(x), B1.Y(Math.max(q.d1r[0], Math.min(q.d1r[1], q.d1(x)))), dc, true, 8);
    dot(ctx, B2.X(x), B2.Y(Math.max(q.d2r[0], Math.min(q.d2r[1], q.d2(x)))), dc, false, 8);
    hits = [{ x: B1.X(x), y: B1.Y(q.d1(x)), r: 14, name: `f′(${fmt(x, 2)}) = ${fmt(q.d1(x), 3)}` }, { x: B2.X(x), y: B2.Y(q.d2(x)), r: 14, name: `f″(${fmt(x, 2)}) = ${fmt(q.d2(x), 3)}` },
      { x: 330, y: 360, r: 20, name: 'shaded: f′ > 0' }, { x: 330, y: 550, r: 20, name: 'shaded: f″ > 0' }];
    ro.set(`\\kf(x)=${q.tex} \\qquad \\kfprime(${n(x)}) = ${n(q.d1(x), 3)} \\qquad \\kfdprime(${n(x)}) = ${n(q.d2(x), 3)}`, `f is ${word1} and ${word2}.`);
  });
})();

/* Figure 4.38: the second derivative test on a stand-in (the book draws no formula): a local maximum at a,
   where f′(a) = 0 and f″(a) < 0, and a local minimum at b, where f′(b) = 0 and f″(b) > 0. */
graph('fig-second-test', { f: (x) => 2 + 0.6 * x ** 3 - 1.8 * x, xr: [-2.2, 2.2], yr: [0, 4], nx: 0, ny: 0, tangents: [-1, 1], half: 0.5,
  points: [{ x: -1, y: 3.2, name: 'a: f′(a) = 0 and f″(a) < 0, a local maximum' }, { x: 1, y: 0.8, name: 'b: f′(b) = 0 and f″(b) > 0, a local minimum' }],
  ticks: [[-1, 'a'], [1, 'b']], notes: [["$\\kfprime(a)=0,\\ \\kfdprime(a)\\lt 0$", -1, 3.7], ["$\\kfprime(b)=0,\\ \\kfdprime(b)\\gt 0$", 1, 0.3]] });

/* Figure 4.39, Example 4.20: x⁵ − 5x³, its local maximum at −√3 and minimum at √3. */
graph('fig-second-test-quintic', { f: (x) => x ** 5 - 5 * x ** 3, xr: [-2.5, 2.5], yr: [-15, 15], nx: 5, ny: 6, fy: (v) => fmt(v, 0),
  points: [{ x: -Math.sqrt(3), y: 6 * Math.sqrt(3), name: 'the local maximum at x = −√3, f(−√3) = 6√3' }, { x: Math.sqrt(3), y: -6 * Math.sqrt(3), name: 'the local minimum at x = √3, f(√3) = −6√3' }, { x: 0, y: 0, name: 'x = 0: f′(0) = f″(0) = 0, no extremum' }],
  label: ['$\\kf(x)=x^5-5x^3$', 1.6, 12] });
};
