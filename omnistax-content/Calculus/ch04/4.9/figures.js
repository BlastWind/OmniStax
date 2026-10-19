/* Figures for section 4.9 Newton’s Method. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.9'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sub = (k) => String(k).split('').map((c) => '₀₁₂₃₄₅₆₇₈₉'[+c]).join('');
const clip = (ctx, b, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(b.l, b.t, b.r - b.l, b.b - b.t); ctx.clip(); draw(); ctx.restore(); };

/* The Newton steps from x0 drawn on ax: up to f, along the tangent to the axis; k may be fractional, the last
   step growing (the vertical drop first, then the tangent). Returns the iterates. */
function newton(ctx, ax, f, df, x0, k) {
  const lc = C('line'), xs = [x0];
  for (let i = 0; i < Math.ceil(k); i++) { const x = xs[i], s = df(x); xs.push(Math.abs(s) < 1e-12 ? NaN : x - f(x) / s); }
  clip(ctx, ax.box, () => {
    for (let i = 0; i < Math.ceil(k); i++) {
      const x = xs[i], x1 = xs[i + 1], part = Math.min(1, k - i), up = Math.min(1, part * 2), along = Math.max(0, part * 2 - 1);
      if (!isFinite(x1)) break;
      line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(f(x) * up), alpha(PAL.ink, 0.45), 2.5, [4, 8]);
      if (along > 0) line(ctx, ax.X(x), ax.Y(f(x)), ax.X(x + (x1 - x) * along), ax.Y(f(x) * (1 - along)), lc, 3);
    }
  });
  xs.forEach((x, i) => { if (i <= k && isFinite(x)) dot(ctx, ax.X(x), ax.Y(0), C('point'), i === Math.floor(k), 7); });
  return xs;
}

/* Figure 4.77 made live on Example 4.46's x³ − 3x + 1 from x₀ = 2: a story of steps, each going up to the curve
   and down its tangent to the axis. The book's figure draws a generic f. x₀ is kept in [1.1, 3], near the root in
   [1, 2] (Checkpoint 4.45 starts at 0). Axes 0 to 3.2 by −2 to 10. */
(function () {
  const d = sim('sim-newton', 480);
  const f = (x) => x ** 3 - 3 * x + 1, df = (x) => 3 * x * x - 3, ROOT = 1.532088886;
  const x0s = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: 1.1, max: 3, step: 0.01, value: 2, unit: '', dec: 2 });
  const ks = ctl(d.controls, { label: 'step', cls: '', key: 'k', min: 0, max: 5, step: 0.01, value: 5, unit: '', dec: 0 });
  F.story(d, ks, { stops: [0, 1, 2, 3, 4, 5].map((v) => ({ v, label: v ? `x${sub(v)}` : `x₀` })), ms: 1400, rest: 900 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const k = ks.v, ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 420 }, [0, 3.2], [-2, 10], { xl: 'x', yl: 'y', nx: 8, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    plot(ctx, ax, f, C('function'));
    const xs = newton(ctx, ax, f, df, x0s.v, k), j = Math.floor(k), xj = xs[j];
    text(ctx, '$\\kf(x)=x^3-3x+1$', ax.X(2.3), ax.Y(f(2.3)) - 30, C('function'), { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    headline(ctx, `x${sub(j)} = ${fmt(xj, 9)}, ${fmt(Math.abs(xj - ROOT), 9)} from the root x* ≈ 1.532088886.`);
    hits = xs.slice(0, j + 1).map((x, i) => ({ x: ax.X(x), y: ax.Y(0), r: 12, name: `x${sub(i)} = ${fmt(x, 9)}` }));
    const xp = xs[Math.max(0, j - 1)];
    ro.set(j ? `x_{${j}} = x_{${j - 1}} - \\frac{\\kf(x_{${j - 1}})}{\\kfprime(x_{${j - 1}})} = ${n(xp, 6)} - \\frac{${n(f(xp), 6)}}{${n(df(xp), 6)}} = ${n(xj, 9)}` : `x_0 = ${n(x0s.v, 2)}`);
  });
})();

/* A still graph of one function with its Newton steps, as the book draws Figures 4.78–4.81. */
function steps(id, o) {
  const d = sim(id, o.H || 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: (o.H || 420) - 60 }, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fx: o.fx, fy: o.fy });
    plot(ctx, ax, o.f, C('function'));
    const xs = o.x0 !== undefined ? newton(ctx, ax, o.f, o.df, o.x0, o.k) : [];
    (o.roots || []).forEach(([x, name]) => dot(ctx, ax.X(x), ax.Y(0), C('point'), false, 9));
    if (o.label) text(ctx, o.label[0], ax.X(o.label[1]), ax.Y(o.label[2]), C('function'), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    (o.notes || []).forEach(([s, x, y]) => text(ctx, s, ax.X(x), ax.Y(y), PAL.ink, { size: 20, align: 'center', bg: PAL.panel }));
    hits = [...xs.slice(0, Math.floor(o.k ?? 0) + 1).map((x, i) => ({ x: ax.X(x), y: ax.Y(0), r: 12, name: `x${sub(i)} = ${fmt(x, 4)}` })), ...(o.roots || []).map(([x, name]) => ({ x: ax.X(x), y: ax.Y(0), r: 12, name }))];
  });
}
steps('fig-cubic-root', { f: (x) => x ** 3 - 3 * x + 1, xr: [-2.5, 2.5], yr: [-4, 6], nx: 5, ny: 5, roots: [[-1.879385, 'a root near −1.879'], [0.347296, 'a root near 0.347'], [1.532089, 'the root in [1, 2], near 1.532']], label: ['$\\kf(x)=x^3-3x+1$', 1.6, 4.8] });
steps('fig-square-root-two', { f: (x) => x * x - 2, df: (x) => 2 * x, x0: 2, k: 2, xr: [0, 2.5], yr: [-2, 4.5], nx: 5, ny: 6, fx: (v) => fmt(v, 1), roots: [[Math.SQRT2, '√2 ≈ 1.414213562']], label: ['$\\kf(x)=x^2-2$', 0.9, 2.5] });
steps('fig-two-cycle', { f: (x) => x ** 3 - 2 * x + 2, df: (x) => 3 * x * x - 2, x0: 0, k: 4, xr: [-2.5, 2], yr: [-3, 5], nx: 9, ny: 8, fx: (v) => fmt(v, 1), roots: [[-1.769292, 'the root, near −1.769, in [−2, −1]']], label: ['$\\kf(x)=x^3-2x+2$', -1.2, 3.8] });

/* Figure 4.80 made live on its stand-in f(x) = x³/4 − x (the book prints no formula), roots −2, 0 and 2: x₀ dragged on the
   axis, the Newton steps from it, and a band under the graph coloured at every start by the root the method reaches. Near
   x = ±2/√3, where f′ = 0, a start is thrown far and the colours interleave. x₀ = 1 is the book's picture: one step lands on
   −2, though 0 is as near. Axes −3 to 3 by −2.5 to 2.5. */
(function () {
  const d = sim('sim-wrong-root', 500);
  const f = (x) => x ** 3 / 4 - x, df = (x) => 0.75 * x * x - 1, ROOTS = [-2, 0, 2], CRIT = 2 / Math.sqrt(3);
  const x0s = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -3, max: 3, step: 0.01, value: 1, unit: '', dec: 2, detents: [1], specials: [{ at: -CRIT, label: 'f′ = 0' }, { at: CRIT, label: 'f′ = 0' }] });
  const P = F.drag(d, { x: x0s, y: 0 });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 90, b: 380 };
  const reach = (x) => { for (let i = 0; i < 80; i++) { const s = df(x); if (Math.abs(s) < 1e-12 || !isFinite(x)) return -1; x -= f(x) / s; } return ROOTS.findIndex((r) => Math.abs(x - r) < 1e-6); };
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const x0 = x0s.v, flat = Math.abs(Math.abs(x0) - CRIT) < 1e-9, cat = ROOTS.map((_, i) => F.cat(i));
    const ax = axes(ctx, BOX, [-3, 3], [-2.5, 2.5], { xl: 'x', yl: 'y', nx: 6, ny: 5 });
    const y0 = BOX.b + 52, bh = 22, step = 1.5;
    for (let px = BOX.l; px < BOX.r; px += step) {
      const k = reach(-3 + (6 * (px + step / 2 - BOX.l)) / (BOX.r - BOX.l));
      if (k < 0) continue;
      ctx.fillStyle = cat[k]; ctx.fillRect(px, y0, step + 0.6, bh);
    }
    text(ctx, 'root reached', BOX.l - 14, y0 + bh / 2, PAL.muted, { size: 17, align: 'right', base: 'middle' });
    line(ctx, ax.X(x0), y0 - 6, ax.X(x0), y0 + bh + 6, PAL.ink, 3);
    plot(ctx, ax, f, C('function'));
    const k = flat ? -1 : reach(x0);
    let K = 0; if (!flat) { let x = x0; while (K < 10 && Math.abs(f(x)) > 1e-9 && isFinite(x)) { x -= f(x) / df(x); K++; } }
    const xs = newton(ctx, ax, f, df, x0, Math.max(K, flat ? 0 : 1));
    const order = ROOTS.map((r, i) => i).sort((i, j) => Math.abs(x0 - ROOTS[i]) - Math.abs(x0 - ROOTS[j]) || Math.abs(ROOTS[i]) - Math.abs(ROOTS[j]));
    const near = order[0];
    ROOTS.forEach((r, i) => dot(ctx, ax.X(r), ax.Y(0), cat[i], i === k, 10));
    if (k >= 0) text(ctx, 'root found', ax.X(ROOTS[k]), ax.Y(0.45), PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    if (k !== near) text(ctx, 'root sought', ax.X(ROOTS[near]), ax.Y(k >= 0 && Math.abs(ROOTS[k] - ROOTS[near]) < 1.6 ? 0.95 : 0.45), PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'x₀', ax.X(x0), ax.Y(-0.4), PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, '$\\kf(x)=\\frac{x^3}{4}-x$', ax.X(-2.2), ax.Y(2.1), C('function'), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    P.draw(ctx, ax, C('point'));
    hits = [...ROOTS.map((r, i) => ({ x: ax.X(r), y: ax.Y(0), r: 12, name: `the root ${fmt(r, 0)}${i === k ? ', reached from x₀' : ''}` })),
      ...xs.slice(1, K + 1).filter(isFinite).map((x, i) => ({ x: ax.X(x), y: ax.Y(0), r: 10, name: `x${sub(i + 1)} = ${fmt(x, 4)}` }))];
    const r = (i) => fmt(ROOTS[i], 0);
    headline(ctx, flat ? `x₀ = ${fmt(x0, 3)}: f′(x₀) = 0, so the tangent is horizontal and never meets the axis.`
      : k < 0 ? `From x₀ = ${fmt(x0, 2)} the approximations do not settle on a root.`
      : k === near ? `From x₀ = ${fmt(x0, 2)} the approximations approach ${r(k)}, the root nearest x₀.`
      : `From x₀ = ${fmt(x0, 2)} the approximations approach ${r(k)}, not ${r(near)}, the root nearest x₀.`);
    ro.set(flat ? `\\kfprime(x_0)=\\tfrac{3}{4}(${n(x0, 3)})^{2}-1=0`
      : `x_1=x_0-\\frac{\\kf(x_0)}{\\kfprime(x_0)}=${n(x0, 2)}-\\frac{${n(f(x0), 4)}}{${n(df(x0), 4)}}=${n(xs[1], 4)}${k >= 0 ? `\\qquad x_n\\to ${r(k).replace('−', '-')}` : ''}`, undefined, { form: flat });
  });
})();

/* The cobweb of an iterative process x_n = F(x_{n−1}): from (x₀, 0) up to the graph of F, across to y = x, up again… */
function cobweb(ctx, ax, Fn, x0, N, skip, color, y0 = 0) {
  let x = x0, y = y0; const pts = [];
  for (let i = 0; i < N + skip; i++) {
    const y1 = Fn(x);
    if (i >= skip) { line(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(y1), color, 2.5); line(ctx, ax.X(x), ax.Y(y1), ax.X(y1), ax.Y(y1), color, 2.5); }
    pts.push(x); y = y1; x = y1;
  }
  return pts;
}
/* Figure 4.82 made live: F(x) = x/2 + 4 (Example 4.49), the cobweb from x₀ the reader sets, trapped between
   F and y = x and closing on the fixed point 8. Axes 0 to 12. Checkpoint 4.48's x/3 + 6 is not drawn. */
(function () {
  const d = sim('sim-cobweb', 520);
  const Fn = (x) => x / 2 + 4;
  const x0s = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: 0, max: 12, step: 0.1, value: 0, unit: '', dec: 1, specials: [{ at: 8 }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 380, r: 1020, t: 80, b: 470 }, [0, 12], [0, 12], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    line(ctx, ax.X(0), ax.Y(0), ax.X(12), ax.Y(12), C('line'), 3);
    plot(ctx, ax, Fn, C('function'));
    const xs = cobweb(ctx, ax, Fn, x0s.v, 9, 0, alpha(PAL.ink, 0.7), x0s.v);
    dot(ctx, ax.X(8), ax.Y(8), C('point'), true, 9);
    text(ctx, '$\\kF(x)=\\frac{x}{2}+4$', ax.X(10.5), ax.Y(Fn(10.5)) + 34, C('function'), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$y=x$', ax.X(11), ax.Y(11) - 30, C('line'), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    headline(ctx, `From x₀ = ${fmt(x0s.v, 1)}: x₅ = ${fmt(xs[5], 4)}, x₉ = ${fmt(xs[9] ?? Fn(xs[8]), 4)}, closing on the fixed point x* = 8.`);
    hits = [{ x: ax.X(8), y: ax.Y(8), r: 16, name: 'the fixed point x* = 8, where F(x) = x' }];
    ro.set(`x_n=\\kF(x_{n-1})=\\frac{x_{n-1}}{2}+4 \\qquad ${xs.slice(1, 5).map((v, i) => `x_{${i + 1}}=${n(v, 4)}`).join(',\\ ')}`);
  });
})();

/* Figure 4.84 made live: the logistic map f(x) = rx(1 − x) of the Student Project, its cobweb from x₀ = 0.2 after
   the first 100 iterations; r = 3.55 gives the book's 8-cycle. Axes 0 to 1. */
(function () {
  const d = sim('sim-logistic-cobweb', 520);
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.5, max: 4, step: 0.01, value: 3.55, unit: '', dec: 2, detents: [3.55] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const r = rs.v, Fn = (x) => r * x * (1 - x);
    const ax = axes(ctx, { l: 380, r: 1020, t: 80, b: 470 }, [0, 1], [0, 1], { xl: 'x', yl: 'y', nx: 5, ny: 5, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    line(ctx, ax.X(0), ax.Y(0), ax.X(1), ax.Y(1), C('line'), 3);
    plot(ctx, ax, Fn, C('function'));
    const xs = cobweb(ctx, ax, Fn, 0.2, 60, 100, alpha(PAL.ink, 0.6));
    const tail = xs.slice(-32);
    let period = 0; for (let p = 1; p <= 16; p++) { if (tail.slice(-p * 2).every((v, i, a) => i < p || Math.abs(v - a[i - p]) < 1e-6)) { period = p; break; } }
    headline(ctx, period === 1 ? `r = ${fmt(r, 2)}: the values settle on a fixed point, ${fmt(tail[tail.length - 1], 4)}.` : period ? `r = ${fmt(r, 2)}: the values settle into a ${period}-cycle.` : `r = ${fmt(r, 2)}: the values never settle into a cycle.`);
    text(ctx, `$f(x)=${n(r, 2)}x(1-x)$`, ax.X(0.5), ax.Y(Math.min(0.96, Fn(0.5))) - 26, C('function'), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(0.9), y: ax.Y(0.9), r: 14, name: 'the line y = x' }];
    ro.set(`x_{n}=${n(r, 2)}\\,x_{n-1}(1-x_{n-1}) \\qquad x_{101},\\ldots,x_{104} = ${xs.slice(100, 104).map((v) => n(v, 4)).join(',\\ ')}`);
  });
})();
};
