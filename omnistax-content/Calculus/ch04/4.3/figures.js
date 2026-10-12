/* Figures for section 4.3 Maxima and Minima. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, dot, line, text, headline, register, readout, fmt, hover, shade } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const fx = (v) => fmt(v, Number.isInteger(v) ? 0 : 1);

/* A still graph of one function with its marked points: each { x, y, name, open } a `point` dot
   (hollow where the function does not reach it), named on hover; o.label sets f's name on the curve. */
function graph(id, o) {
  const d = sim(id, o.H || 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const ax = axes(ctx, o.box || { l: 360, r: 1040, t: 40, b: (o.H || 420) - 60 }, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fx: o.fx || fx, fy: o.fy || fx });
    plot(ctx, ax, o.pieces || o.f, fc, o.plot || {});
    (o.tangents || []).forEach((t) => tangent(ctx, ax, o.f, t, alpha(C('line'), 0.8), { df: () => 0, dash: [10, 10] }));
    hits = (o.points || []).map((p) => { dot(ctx, ax.X(p.x), ax.Y(p.y), pc, !p.open, 9); return { x: ax.X(p.x), y: ax.Y(p.y), r: 16, name: p.name }; });
    if (o.label) text(ctx, o.label[0], ax.X(o.label[1]), ax.Y(o.label[2]), fc, { size: 24, weight: 600, align: 'center', tex: true });
  });
}

/* Figure 4.12: x² + 1 with its absolute minimum 1 at x = 0. Axes −3 to 3 by −1 to 9. */
graph('fig-parabola-minimum', { f: (x) => x * x + 1, xr: [-3, 3], yr: [-1, 9], nx: 6, ny: 5,
  points: [{ x: 0, y: 1, name: 'the absolute minimum, f(0) = 1' }], label: ['$\\kf(x)=x^2+1$', 2.15, 7.6] });

/* Figure 4.13: the book's six graphs side by side, three over (−∞, ∞) and three over bounded intervals,
   each panel's absolute extrema marked and named. */
(function () {
  const d = sim('fig-extrema-cases', 790);
  const P = [
    { tag: '(a)', f: (x) => x ** 3, xr: [-2, 2], yr: [-6, 6], name: 'f(x) = x³', note: 'no absolute maximum or minimum', pts: [] },
    { tag: '(b)', f: (x) => 1 / (x * x + 1), xr: [-4, 4], yr: [-0.5, 1.5], name: 'f(x) = 1/(x² + 1)', note: 'absolute maximum 1 at x = 0|no absolute minimum', pts: [[0, 1, 'the absolute maximum, f(0) = 1']] },
    { tag: '(c)', f: Math.cos, xr: [-7, 7], yr: [-1.5, 1.5], name: 'f(x) = cos x', note: 'absolute maxima 1 at 0, ±2π, …|absolute minima −1 at ±π, ±3π, …',
      pts: [[0, 1, 'an absolute maximum, cos 0 = 1'], [2 * Math.PI, 1, 'an absolute maximum at 2π'], [-2 * Math.PI, 1, 'an absolute maximum at −2π'], [Math.PI, -1, 'an absolute minimum at π'], [-Math.PI, -1, 'an absolute minimum at −π']] },
    { tag: '(d)', pieces: [{ f: (x) => 2 - x * x, x: [0, 2], ends: '[)' }, { f: (x) => x - 3, x: [2, 4], ends: '[]' }], xr: [-0.5, 4.5], yr: [-3, 3], name: 'f(x) = 2 − x² on [0, 2), x − 3 on [2, 4]', note: 'absolute maximum 2 at x = 0|no absolute minimum', pts: [[0, 2, 'the absolute maximum, f(0) = 2']] },
    { tag: '(e)', pieces: [{ f: (x) => (x - 2) ** 2, x: [1, 4], ends: '[]' }], xr: [-0.5, 4.5], yr: [-1, 5], name: 'f(x) = (x − 2)² on [1, 4]', note: 'absolute maximum 4 at x = 4|absolute minimum 0 at x = 2', pts: [[4, 4, 'the absolute maximum, f(4) = 4'], [2, 0, 'the absolute minimum, f(2) = 0']] },
    { tag: '(f)', pieces: [{ f: (x) => x / (2 - x), x: [0, 1.96], ends: '[-' }], xr: [-0.5, 2.5], yr: [-1, 8], poles: [2], name: 'f(x) = x/(2 − x) on [0, 2)', note: 'absolute minimum 0 at x = 0|no absolute maximum', pts: [[0, 0, 'the absolute minimum, f(0) = 0']] },
  ];
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    hits = [];
    P.forEach((p, i) => {
      const col = i % 3, row = Math.floor(i / 3), l = 60 + col * 450, t = 30 + row * 370;
      const ax = axes(ctx, { l, r: l + 360, t, b: t + 230 }, p.xr, p.yr, { nx: 0, ny: 0 });
      plot(ctx, ax, p.pieces || p.f, fc, p.poles ? { poles: p.poles } : {});
      p.pts.forEach(([x, y, name]) => { dot(ctx, ax.X(x), ax.Y(y), pc, true, 8); hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name }); });
      text(ctx, p.tag, l + 180, t + 262, PAL.ink, { size: 22, align: 'center' });
      text(ctx, p.name, l + 180, t + 292, fc, { size: 18, align: 'center' });
      p.note.split('|').forEach((s, k) => text(ctx, s, l + 180, t + 318 + k * 22, PAL.muted, { size: 17, align: 'center' }));
    });
  });
})();

/* Figure 4.14: two mountains and a valley. The book prints no formula: the stand-in is 2x³ − 3x² + 1 up to x = 2
   (a local maximum 1 at 0, a local minimum 0 at 1) and 5 − 6(x − 2) after, a corner at the absolute maximum 5.
   The reader sets c and the half-width of an open interval I about c; the readout tests the definition on I.
   Axes −1.2 to 3 by −5 to 6. */
(function () {
  const d = sim('sim-local-extremum', 500);
  const f = (x) => (x <= 2 ? 2 * x ** 3 - 3 * x * x + 1 : 5 - 6 * (x - 2));
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -1, max: 2.8, step: 0.01, value: 0, unit: '', dec: 2, specials: [{ at: 0 }, { at: 1 }, { at: 2 }] });
  const ws = ctl(d.controls, { label: '\\text{half-width of }\\kI', cls: 'set', key: 'w', min: 0.05, max: 0.8, step: 0.01, value: 0.3, unit: '', dec: 2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function onI(c, w) {
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i <= 400; i++) { const v = f(c - w + (2 * w * i) / 400); lo = Math.min(lo, v); hi = Math.max(hi, v); }
    return { lo, hi };
  }
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), sc = C('set'), c = cs.v, w = ws.v, fcv = f(c), { lo, hi } = onI(c, w);
    const isMax = fcv >= hi - 1e-9, isMin = fcv <= lo + 1e-9;
    const verdict = isMax ? 'local maximum' : isMin ? 'local minimum' : 'neither';
    headline(ctx, isMax ? `f(${fmt(c, 2)}) = ${fmt(fcv, 2)} is the largest value on I: a local maximum at c = ${fmt(c, 2)}.`
      : isMin ? `f(${fmt(c, 2)}) = ${fmt(fcv, 2)} is the smallest value on I: a local minimum at c = ${fmt(c, 2)}.`
      : `On I, f takes values from ${fmt(lo, 2)} to ${fmt(hi, 2)} around f(${fmt(c, 2)}) = ${fmt(fcv, 2)}: no extremum at c.`);
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 440 }, [-1.2, 3], [-5, 6], { xl: 'x', yl: 'y', nx: 7, ny: 11, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    const X = ax.X, Y = ax.Y;
    ctx.save(); ctx.fillStyle = alpha(sc, 0.16); ctx.fillRect(X(c - w), 90, X(c + w) - X(c - w), 350); ctx.restore();
    line(ctx, X(c - w), Y(0), X(c + w), Y(0), sc, 6);
    dot(ctx, X(c - w), Y(0), sc, false, 7); dot(ctx, X(c + w), Y(0), sc, false, 7);
    text(ctx, 'I', X(c), Y(0) + 26, sc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    plot(ctx, ax, f, fc);
    hits = [[0, 'the local maximum f(0) = 1'], [1, 'the local minimum f(1) = 0'], [2, 'the absolute maximum f(2) = 5, at a corner']].map(([x, name]) => ({ x: X(x), y: Y(f(x)), r: 14, name }));
    drop(ctx, X(c), Y(fcv), X(c), Y(0));
    dot(ctx, X(c), Y(fcv), isMax || isMin ? pc : fc, true, 9);
    text(ctx, '$\\kf(x)$', X(2.55), Y(f(2.55)) - 28, fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits.push({ x: X(c), y: Y(fcv), r: 16, name: `(c, f(c)) = (${fmt(c, 2)}, ${fmt(fcv, 2)})` });
    ro.set(`I = (${n(c - w)}, ${n(c + w)}) \\qquad \\min_{I} \\kf = ${n(lo)} \\qquad \\kf(${n(c)}) = ${n(fcv)} \\qquad \\max_{I} \\kf = ${n(hi)}`, `${verdict}`);
  });
})();

/* Figure 4.15: the book's five kinds of critical number, side by side: (a) a peak with f′(c) = 0, (b) a pole
   on both sides of c, (c) a corner, (d) a horizontal tangent with no extremum, (e) a vertical tangent. */
(function () {
  const d = sim('fig-critical-cases', 360);
  const P = [
    { tag: '(a)', f: (x) => 2.4 - 0.5 * (x - 2) ** 2, note: "f′(c) = 0", flat: true },
    { tag: '(b)', f: (x) => 0.4 + 0.5 / ((x - 2) ** 2), note: "f′(c) undefined", pole: true },
    { tag: '(c)', f: (x) => 0.6 + 0.9 * Math.abs(x - 2), note: "f′(c) undefined" },
    { tag: '(d)', f: (x) => 1.5 + 0.35 * (x - 2) ** 3, note: "f′(c) = 0", flat: true },
    { tag: '(e)', f: (x) => 1.5 + 0.7 * Math.cbrt(x - 2), note: "f′(c) undefined", vertical: true },
  ];
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('line');
    hits = [];
    P.forEach((p, i) => {
      const l = 40 + i * 272, box = { l, r: l + 220, t: 30, b: 250 };
      const ax = axes(ctx, box, [0, 4], [0, 3], { nx: 0, ny: 0 });
      plot(ctx, ax, p.f, fc, p.pole ? { poles: [2] } : {});
      if (p.flat) line(ctx, ax.X(1.1), ax.Y(p.f(2)), ax.X(2.9), ax.Y(p.f(2)), lc, 3);
      if (p.vertical) line(ctx, ax.X(2), ax.Y(0.4), ax.X(2), ax.Y(2.6), lc, 3);
      if (!p.pole) { dot(ctx, ax.X(2), ax.Y(p.f(2)), pc, true, 8); hits.push({ x: ax.X(2), y: ax.Y(p.f(2)), r: 14, name: `the critical point (c, f(c)): ${p.note}` }); }
      text(ctx, 'c', ax.X(2), box.b + 22, PAL.ink, { size: 22, align: 'center' });
      text(ctx, p.note, ax.X(2), box.b + 54, PAL.ink, { size: 19, align: 'center' });
      text(ctx, p.tag, ax.X(2), box.b + 84, PAL.ink, { size: 20, align: 'center' });
    });
  });
})();

/* Figures 4.16–4.18, Example 4.12's three functions with their critical points; dashed lines are the horizontal tangents. */
graph('fig-critical-cubic', { f: (x) => x ** 3 / 3 - 2.5 * x * x + 4 * x, xr: [-1, 6], yr: [-4, 4], nx: 7, ny: 8, tangents: [1, 4],
  points: [{ x: 1, y: 11 / 6, name: 'a local maximum at x = 1, f(1) = 11/6' }, { x: 4, y: -8 / 3, name: 'a local minimum at x = 4, f(4) = −8/3' }],
  label: ['$\\kf(x)=\\frac{1}{3}x^3-\\frac{5}{2}x^2+4x$', 4.6, 2.9] });
graph('fig-critical-sixth', { f: (x) => (x * x - 1) ** 3, xr: [-2, 2], yr: [-2, 3], nx: 4, ny: 5, tangents: [-1, 0, 1],
  points: [{ x: 0, y: -1, name: 'the local and absolute minimum at x = 0, f(0) = −1' }, { x: -1, y: 0, name: 'a critical point at x = −1, no extremum' }, { x: 1, y: 0, name: 'a critical point at x = 1, no extremum' }],
  label: ['$\\kf(x)=(x^2-1)^3$', 1.0, 2.3] });
graph('fig-critical-rational', { f: (x) => (4 * x) / (1 + x * x), xr: [-6, 6], yr: [-3, 3], nx: 6, ny: 6, tangents: [-1, 1],
  points: [{ x: 1, y: 2, name: 'the local and absolute maximum at x = 1, f(1) = 2' }, { x: -1, y: -2, name: 'the local and absolute minimum at x = −1, f(−1) = −2' }],
  label: ['$\\kf(x)=\\frac{4x}{1+x^2}$', 3.6, 2.2] });

/* Figure 4.19: −x² + 3x − 2 over [a, b], the reader moving either end. The candidates of the strategy are
   the endpoints and the critical point 3/2 when it lies inside; the largest and smallest are named.
   Axes −1 to 5 by −7 to 1. */
(function () {
  const d = sim('sim-closed-interval', 500);
  const f = (x) => -x * x + 3 * x - 2, C0 = 1.5;
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -1, max: 4.9, step: 0.05, value: 1, unit: '', dec: 2, specials: [{ at: C0 }], onInput: () => { if (bs.v < as.v + 0.1) bs.set(Math.min(5, as.v + 0.1)); } });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -0.9, max: 5, step: 0.05, value: 3, unit: '', dec: 2, specials: [{ at: C0 }], onInput: () => { if (as.v > bs.v - 0.1) as.set(Math.max(-1, bs.v - 0.1)); } });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), sc = C('set'), a = as.v, b = bs.v;
    const cand = [[a, 'endpoint'], ...(a < C0 && C0 < b ? [[C0, 'critical point']] : []), [b, 'endpoint']].map(([x, k]) => ({ x, y: f(x), k }));
    const max = cand.reduce((p, q) => (q.y > p.y ? q : p)), min = cand.reduce((p, q) => (q.y < p.y ? q : p));
    headline(ctx, `Over [${fmt(a, 2)}, ${fmt(b, 2)}], the absolute maximum ${fmt(max.y, 2)} is at x = ${fmt(max.x, 2)} and the absolute minimum ${fmt(min.y, 2)} at x = ${fmt(min.x, 2)}.`);
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 440 }, [-1, 5], [-7, 1], { xl: 'x', yl: 'y', nx: 6, ny: 8 });
    plot(ctx, ax, f, alpha(fc, 0.25));
    plot(ctx, ax, [{ f, x: [a, b], ends: '[]' }], fc);
    line(ctx, ax.X(a), ax.Y(0), ax.X(b), ax.Y(0), sc, 6);
    hits = cand.map((p) => {
      const tagd = p === max ? 'the absolute maximum' : p === min ? 'the absolute minimum' : 'a candidate';
      dot(ctx, ax.X(p.x), ax.Y(p.y), p === max || p === min ? pc : fc, true, 10);
      return { x: ax.X(p.x), y: ax.Y(p.y), r: 16, name: `${tagd}: the ${p.k} x = ${fmt(p.x, 2)}, f = ${fmt(p.y, 3)}` };
    });
    if (Math.hypot(ax.X(max.x) - ax.X(min.x), ax.Y(max.y) - ax.Y(min.y)) > 180) {
      text(ctx, 'absolute maximum', ax.X(max.x), ax.Y(max.y) - 30, pc, { size: 20, align: 'center', bg: PAL.panel });
      text(ctx, 'absolute minimum', ax.X(min.x), ax.Y(min.y) + 34, pc, { size: 20, align: 'center', bg: PAL.panel });
    }
    text(ctx, '$\\kf(x)=-x^2+3x-2$', ax.X(1.5), ax.Y(-5.2), fc, { size: 24, weight: 600, align: 'center', tex: true });
    ro.set(cand.map((p) => `\\kf(${n(p.x)}) = ${n(p.y, 3)}`).join('\\qquad '));
  });
})();

/* Figure 4.20: x² − 3x^{2/3} over [0, 2], its absolute maximum 0 at the endpoint 0 and its minimum −2 at x = 1. */
graph('fig-endpoint-maximum', { f: (x) => x * x - 3 * Math.cbrt(x * x), pieces: [{ f: (x) => x * x - 3 * Math.cbrt(x * x), x: [0, 2], ends: '[]' }], xr: [-0.5, 2.5], yr: [-2.5, 1], nx: 6, ny: 7, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1),
  points: [{ x: 0, y: 0, name: 'the absolute maximum at the endpoint x = 0, f(0) = 0' }, { x: 1, y: -2, name: 'the absolute minimum at x = 1, f(1) = −2' }, { x: 2, y: 4 - 3 * Math.cbrt(4), name: 'the endpoint x = 2, f(2) ≈ −0.762' }],
  label: ['$\\kf(x)=x^2-3x^{2/3}$', 1.9, 0.4] });
};
