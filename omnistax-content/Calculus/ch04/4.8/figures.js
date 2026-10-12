/* Figures for section 4.8 L’Hôpital’s Rule. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.8'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, tangent, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Figure 4.71 made live: sin(πx) and ln x, both 0 at a = 1 (Example 4.38b), with their tangent lines there, in
   windows about a that shrink by a morph; near a each curve is its tangent, so f(x)/g(x) is the ratio of the
   two slopes, f′(1)/g′(1) = −π. The two curves are instances told apart by name (F.cat). */
(function () {
  const d = sim('sim-lhopital-zoom', 480);
  const f = (x) => Math.sin(Math.PI * x), g = Math.log, A = 1;
  const ws = choice(d.controls, { label: 'window', options: ['0.8', '0.3', '0.1', '0.03'].map((v) => ({ value: v, label: `|x − 1| ≤ ${v}` })), value: '0.8', aria: 'window', ms: 1100 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const w = Math.exp(ws.mix((v) => Math.log(+v))), cf = F.cat(0), cg = F.cat(1), lc = C('line'), pc = C('point');
    const ym = Math.PI * w * 1.15;
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 420 }, [A - w, A + w], [-ym, ym], { xl: 'x', yl: 'y', nx: 4, ny: 4, nice: true });
    tangent(ctx, ax, f, A, alpha(lc, 0.9), { df: () => -Math.PI, dash: [10, 8] });
    tangent(ctx, ax, g, A, alpha(lc, 0.9), { df: () => 1, dash: [10, 8] });
    plot(ctx, ax, f, cf, { x: [Math.max(0.02, A - w), A + w] });
    plot(ctx, ax, g, cg, { x: [Math.max(0.02, A - w), A + w] });
    dot(ctx, ax.X(A), ax.Y(0), pc, true, 9);
    const xp = A + 0.6 * w, r = f(xp) / g(xp);
    line(ctx, ax.X(xp), ax.box.t, ax.X(xp), ax.box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, ax.X(xp), ax.Y(f(xp)), cf, true, 7); dot(ctx, ax.X(xp), ax.Y(g(xp)), cg, true, 7);
    text(ctx, '$\\kf(x)=\\sin(\\pi x)$', ax.X(A - 0.55 * w), ax.Y(f(A - 0.55 * w)) - 30, cf, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kg(x)=\\ln x$', ax.X(A - 0.6 * w), ax.Y(g(A - 0.6 * w)) + 34, cg, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    headline(ctx, `At x = ${fmt(xp, 4)}, f(x)/g(x) = ${fmt(r, 4)}; the ratio of the tangents' slopes is −π ≈ −3.1416.`);
    hits = [{ x: ax.X(A), y: ax.Y(0), r: 16, name: '(1, 0), where f and g are both 0' }, { x: ax.X(xp), y: ax.Y(f(xp)), r: 14, name: `f(${fmt(xp, 4)}) = ${fmt(f(xp), 5)}` }, { x: ax.X(xp), y: ax.Y(g(xp)), r: 14, name: `g(${fmt(xp, 4)}) = ${fmt(g(xp), 5)}` }];
    ro.set(`\\frac{\\kf(${n(xp, 4)})}{\\kg(${n(xp, 4)})} = \\frac{${n(f(xp), 5)}}{${n(g(xp), 5)}} = ${n(r, 4)} \\qquad \\frac{\\kfprime(1)}{\\kgprime(1)} = \\frac{\\pi\\cos\\pi}{1} = -\\pi`);
  });
})();

/* A still graph of several named curves, each an instance in its own colour (F.cat). */
function curves(id, o) {
  const d = sim(id, o.H || 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: (o.H || 420) - 60 }, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fy: o.fy, fx: o.fx });
    hits = [];
    o.c.forEach(([f, name, lx, dy, dom], i) => {
      const col = F.cat(i);
      plot(ctx, ax, f, col, dom ? { x: dom } : {});
      text(ctx, name, ax.X(lx), Math.min(ax.box.b - 10, Math.max(ax.box.t + 12, ax.Y(f(lx)) + dy)), col, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      hits.push({ x: ax.X(lx), y: ax.Y(f(lx)), r: 14, name: name.replace(/\$/g, '').replace(/\\/g, '') });
    });
    (o.points || []).forEach((p) => { dot(ctx, ax.X(p.x), ax.Y(p.y), C('point'), !p.open, 9); hits.push({ x: ax.X(p.x), y: ax.Y(p.y), r: 14, name: p.name }); });
  });
}
/* Figure 4.72: x ln x approaching 0 as x → 0⁺. */
curves('fig-x-ln-x', { xr: [0, 2], yr: [-0.6, 1.5], nx: 4, ny: 7, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1), c: [[(x) => x * Math.log(x), '$\\kf(x)=x\\ln x$', 1.6, -34, [0.0005, 2]]],
  points: [{ x: 0, y: 0, open: true, name: 'the limit 0 as x → 0⁺; f is not defined at 0' }] });
/* Figures 4.73 and 4.74, Example 4.44. */
curves('fig-exp-vs-square', { xr: [0, 5], yr: [0, 30], nx: 5, ny: 6, fy: (v) => fmt(v, 0), c: [[Math.exp, '$y=e^x$', 3.1, -30], [(x) => x * x, '$y=x^2$', 4.2, 30]] });
curves('fig-square-vs-log', { xr: [0, 5], yr: [-2, 10], nx: 5, ny: 6, fy: (v) => fmt(v, 0), c: [[(x) => x * x, '$y=x^2$', 2.6, -30], [Math.log, '$y=\\ln x$', 4, 30, [0.01, 5]]] });

/* Figure 4.75 made live: eˣ against xᵖ for a power p the reader sets; the window runs past the last crossing,
   so whatever p, the exponential is seen to overtake the power. The book's (a) and (b) are p = 3 and p = 4. */
(function () {
  const d = sim('sim-exp-vs-power', 480);
  const ps = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 1, max: 6, step: 0.1, value: 3, unit: '', dec: 1, detents: [1, 2, 3, 4, 5, 6] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const p = ps.v, h = (x) => x - p * Math.log(x), pd = Number.isInteger(Math.round(p * 10) / 10) ? 0 : 1;
    let last = null; for (let x = 1.01; x < 40; x += 0.01) if (h(x) < 0 && h(x + 0.01) >= 0) last = x;
    const X = Math.max(4, (last || 3) * 1.25), Y = Math.max(Math.exp(X), X ** p) * 1.05;
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 420 }, [0, X], [0, Y], { xl: 'x', yl: 'y', nx: 5, ny: 4, nice: true });
    const ce = F.cat(0), cp = F.cat(1);
    plot(ctx, ax, Math.exp, ce); plot(ctx, ax, (x) => x ** p, cp);
    if (last) dot(ctx, ax.X(last), ax.Y(Math.exp(last)), C('point'), true, 9);
    text(ctx, '$y=e^x$', ax.X(X * 0.93), ax.Y(Math.min(Y * 0.9, Math.exp(X * 0.93))), ce, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, `$y=x^{${n(p, pd)}}$`, ax.X(X * 0.55), ax.Y((X * 0.55) ** p) - 30, cp, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    headline(ctx, last ? `For x > ${fmt(last, 2)}, eˣ stays above x^${fmt(p, pd)}, and the gap only widens.` : `eˣ is above x^${fmt(p, pd)} for every x > 0.`);
    hits = last ? [{ x: ax.X(last), y: ax.Y(Math.exp(last)), r: 16, name: `the last crossing, x ≈ ${fmt(last, 3)}` }] : [];
    ro.set(`\\frac{x^{${n(p, pd)}}}{e^{x}}\\Big|_{x=${n(X, 1)}} = ${n(X ** p / Math.exp(X), 4)} \\qquad \\lim_{x\\to\\infty}\\frac{x^{p}}{e^{x}} = 0`);
  });
})();

/* Figure 4.76: ln x below √x and ∛x. */
curves('fig-log-vs-roots', { xr: [0, 100], yr: [0, 12], nx: 5, ny: 6, fy: (v) => fmt(v, 0), c: [[Math.sqrt, '$y=\\sqrt{x}$', 70, -30], [Math.cbrt, '$y=\\sqrt[3]{x}$', 80, 30], [Math.log, '$y=\\ln x$', 60, 30, [0.01, 100]]] });
};
