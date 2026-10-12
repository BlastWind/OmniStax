/* Figures for section 15.2 Double Integrals over General Regions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, register, tex, fmt, begin, axes, plot, line, dot, text } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
const nt = (v) => String(+v.toFixed(2)).replace('-', '−');
const lab3 = (s, p, color) => ({ k: 'label', s, p, color });

/* an equal-scale frame holding xr × yr, centred, under a band of 30 */
function frame(ctx, xr, yr, H, o = {}) {
  const s = Math.min((H - 110) / (yr[1] - yr[0]), 1060 / (xr[1] - xr[0])), w = (xr[1] - xr[0]) * s, h = (yr[1] - yr[0]) * s, t = 40;
  return axes(ctx, { l: 700 - w / 2, r: 700 + w / 2, t, b: t + h }, xr, yr, o.nice ? { xl: 'x', yl: 'y', nx: o.nx ?? 6, ny: o.ny ?? 6, nice: true } : { xl: 'x', yl: 'y', nx: o.nx ?? Math.round(xr[1] - xr[0]), ny: o.ny ?? Math.round(yr[1] - yr[0]) });
}
/* a plane region filled from its outline, no edge */
function fill(ctx, ax, R, color, a = 0.25) {
  const ol = SP.outline(R, 48);
  ctx.save(); ctx.fillStyle = alpha(color, a); ctx.beginPath(); ol.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a bounding curve: y = f(x) on [a, b], or x = h(y) on [c, d]; its equation at the point at */
function curve(ctx, ax, c) {
  const color = c.color();
  if (c.y) plot(ctx, ax, c.y, color, { w: 4, x: c.on }); else F.polar.path(ctx, ax, (t) => [c.x(t), t], c.on, color, { w: 4 });
  if (c.label) text(ctx, c.label, ax.X(c.at[0]), ax.Y(c.at[1]), color, { size: 20, tex: true, bg: PAL.panel, align: c.align ?? 'left' });
}
const piece = (list, v) => list.find((q) => v >= q.on[0] - 1e-9 && v <= q.on[1] + 1e-9);
/* A region read both ways: a vertical strip at x from its lower to its upper curve (Type I pieces),
   a horizontal strip at y from its left to its right curve (Type II pieces), ends dotted. */
function regionFig(id, cfg) {
  const H = cfg.H ?? 540, d = sim(id, H);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: cfg.x[0], max: cfg.x[1], step: cfg.step ?? 0.01, value: cfg.x[2], unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: cfg.y[0], max: cfg.y[1], step: cfg.step ?? 0.01, value: cfg.y[2], unit: '', dec: 2 });
  still(d, () => {
    const { ctx } = begin(d.c), ax = frame(ctx, cfg.xr, cfg.yr, H, cfg.ticks ?? {});
    cfg.I.forEach((q) => fill(ctx, ax, { x: q.on, y: [q.lo, q.hi] }, C('region')));
    cfg.curves.forEach((c) => curve(ctx, ax, c));
    const x = xs.v, y = ys.v, p = piece(cfg.I, x), q = piece(cfg.II, y), ink = PAL.ink, guide = alpha(PAL.ink, 0.35);
    line(ctx, ax.X(x), ax.box.t, ax.X(x), ax.box.b, guide, 2, [6, 8]);
    line(ctx, ax.box.l, ax.Y(y), ax.box.r, ax.Y(y), guide, 2, [6, 8]);
    let tI = '', tII = '';
    if (p) { const a = p.lo(x), b = p.hi(x); line(ctx, ax.X(x), ax.Y(a), ax.X(x), ax.Y(b), ink, 5); dot(ctx, ax.X(x), ax.Y(a), ink, true, 7); dot(ctx, ax.X(x), ax.Y(b), ink, true, 7); tI = `${cfg.tI ?? ''}${nt(a)}\\le y\\le ${nt(b)}`; }
    if (q) { const a = q.lo(y), b = q.hi(y); line(ctx, ax.X(a), ax.Y(y), ax.X(b), ax.Y(y), ink, 5); dot(ctx, ax.X(a), ax.Y(y), ink, true, 7); dot(ctx, ax.X(b), ax.Y(y), ink, true, 7); tII = `${cfg.tII ?? ''}${nt(a)}\\le x\\le ${nt(b)}`; }
    if (cfg.marks) cfg.marks(ctx, ax);
    const strips = `x=${nt(x)}:\\;${tI},\\qquad y=${nt(y)}:\\;${tII}`;
    tex(d.readout, cfg.tail ? `\\begin{gathered}${strips}\\\\ ${cfg.tail}\\end{gathered}` : strips);
  });
}
const RD = () => C('region'), FN = () => C('function');

/* Figure 15.12: the extension g of f over R = [0, 4] × [0, 3], equal to f on the oval D and 0 elsewhere, and its Riemann boxes; box 0 to 4.3 by 0 to 3.3 by 0 to 2.8 */
(function () {
  const d = sim('sim-extension');
  const e = (x) => Math.sqrt(Math.max(0, 1 - ((x - 2) / 1.3) ** 2));
  const lo = (x) => 1.5 - 1.05 * e(x), hi = (x) => 1.5 + 0.95 * e(x);
  const D = { x: [0.7, 3.3], y: [lo, hi] }, R = { x: [0, 4], y: [0, 3] }, box = [[0, 4.3], [0, 3.3], [0, 2.8]];
  const f = (x, y) => 1.6 + 0.3 * x - 0.2 * (y - 1.5) ** 2;
  const inD = (x, y) => x >= 0.7 && x <= 3.3 && y >= lo(x) && y <= hi(x);
  const g = (x, y) => (inD(x, y) ? f(x, y) : 0);
  const exact = SP.riemann2(D, f, 300, 300).sum;
  const S = F.space3d(d, { box, h: 540, pitch: [0.1, 1.4] });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 24, step: 1, value: 8, unit: '', dec: 0 });
  const flat = (Rg, color, a) => ({ k: 'faces', faces: [SP.outline(Rg, 48).map((p) => [p[0], p[1], 0])], color, alpha: a });
  function draw() {
    const n = ns.v, { cells, sum } = SP.riemann2(R, g, n, n, 'mid');
    const grid = [];
    for (let i = 0; i <= n; i++) { grid.push([[4 * i / n, 0, 0], [4 * i / n, 3, 0]], [[0, 3 * i / n, 0], [4, 3 * i / n, 0]]); }
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('floor', [flat(R, C('region'), 0.12), flat(D, C('region'), 0.35), { k: 'segs', segs: grid, color: 'guide', w: 1 },
      ...SP.edges(D, 64).map((pts) => ({ k: 'line', pts, color: C('region'), w: 3 })),
      lab3('$\\kR$', [3.9, 0.15, 0], C('region')), lab3('$\\kD$', [2, 1.5, 0], C('region')), lab3('$\\kg=0$', [3.7, 2.8, 0.05], C('function'))]);
    S.set('graph', [...SP.graph(f, D, C('surface'), { alpha: 0.45, grid: 8, n: 40 }), lab3('$\\kg=\\kf(x,y)$', [3.3, 1.5, f(3.3, 1.5) + 0.35], C('function'))]);
    S.set('boxes', SP.boxes(cells.filter((c) => c.h > 0), C('integral'), { alpha: 0.16 }));
    tex(d.readout, `\\sum_{i=1}^{${n}}\\sum_{j=1}^{${n}}\\kg(x_{ij}^{*},y_{ij}^{*})\\,\\Delta A=${hue('integral', n2(sum, 3))},\\qquad \\iint_{\\kD}\\kf(x,y)\\,dA=\\iint_{\\kR}\\kg(x,y)\\,dA=${hue('integral', n2(exact, 3))}`);
  }
  still(d, draw);
})();

/* Figure 15.13 + 15.14 + 15.15: Example 15.11's region between y = √x and y = x³, Type I and Type II at once; frame −0.1 to 1.2 both ways */
regionFig('sim-region-types', {
  xr: [-0.1, 1.2], yr: [-0.1, 1.2], ticks: { nice: true }, x: [0, 1, 0.5], y: [0, 1, 0.5],
  I: [{ on: [0, 1], lo: (x) => x ** 3, hi: (x) => Math.sqrt(x) }], II: [{ on: [0, 1], lo: (y) => y * y, hi: (y) => Math.cbrt(y) }],
  curves: [
    { y: (x) => Math.sqrt(x), on: [0, 1.15], color: () => F.ref('curve-root'), label: '$y=\\sqrt{x},\\;x=y^{2}$', at: [0.42, 0.8], align: 'right' },
    { y: (x) => x ** 3, on: [0, 1.06], color: () => F.ref('curve-cube'), label: '$y=x^{3},\\;x=\\sqrt[3]{y}$', at: [0.82, 0.3] },
  ],
  tI: '\\text{Type I}\\;', tII: '\\text{Type II}\\;',
});

/* Figure 15.16 + 15.17: Example 15.12's triangle, ½x ≤ y ≤ 1 and 0 ≤ x ≤ 2y; frame −0.2 to 2.4 by −0.2 to 1.4 */
regionFig('sim-example-type-i', {
  xr: [-0.2, 2.4], yr: [-0.2, 1.4], H: 460, ticks: { nice: true }, x: [0, 2, 1.2], y: [0, 1, 0.4],
  I: [{ on: [0, 2], lo: (x) => x / 2, hi: () => 1 }], II: [{ on: [0, 1], lo: () => 0, hi: (y) => 2 * y }],
  curves: [
    { y: (x) => x / 2, on: [0, 2.3], color: FN, label: '$y=\\frac{1}{2}x,\\;x=2y$', at: [1.75, 0.62] },
    { y: () => 1, on: [0, 2.3], color: FN, label: '$y=1$', at: [2.05, 1.12] },
  ],
  tail: `\\iint_{\\kD}x^{2}e^{xy}\\,dA=${hue('integral', '2')}`,
});

/* Figure 15.18: Example 15.13's region between x = y² − 3 and x = y + 3; frame −3.5 to 6.5 by −2.5 to 3.5 */
regionFig('fig-example-type-ii', {
  xr: [-3.5, 6.5], yr: [-2.5, 3.5], x: [-3, 6, 1], y: [-2, 3, 1],
  I: [{ on: [-3, 1], lo: (x) => -Math.sqrt(Math.max(0, x + 3)), hi: (x) => Math.sqrt(Math.max(0, x + 3)) }, { on: [1, 6], lo: (x) => x - 3, hi: (x) => Math.sqrt(x + 3) }],
  II: [{ on: [-2, 3], lo: (y) => y * y - 3, hi: (y) => y + 3 }],
  curves: [
    { x: (y) => y * y - 3, on: [-2.4, 3.1], color: FN, label: '$x=y^{2}-3$', at: [-1.2, 2.6], align: 'right' },
    { x: (y) => y + 3, on: [-2.4, 3.4], color: FN, label: '$x=y+3$', at: [4.3, 0.6] },
  ],
  tail: `\\iint_{\\kD}(3x^{2}+y^{2})\\,dA=${hue('integral', '\\tfrac{2375}{7}')}`,
});

/* Figure 15.19 + 15.20: Example 15.14's region and its pieces D₁ (Type I), D₂ and D₃ (Type II); frame −3 to 3 by −4.5 to 4.5 */
(function () {
  const H = 600, d = sim('fig-decomposition', H);
  const pick = choice(d.controls, { label: 'view', options: [{ value: 'D', label: 'D' }, { value: 'pieces', label: 'D₁, D₂, D₃' }], value: 'pieces', ms: 0 });
  const cub = (y) => y - y ** 3 / 16;
  const P = [
    { id: 'piece-d1', R: { x: [-2, 0], y: [0, (x) => (x + 2) ** 2] }, name: '$\\kD_{1}$', at: [-0.6, 1.1], val: '\\tfrac{40}{3}' },
    { id: 'piece-d2', R: { y: [0, 4], x: [0, cub] }, name: '$\\kD_{2}$', at: [0.9, 2.4], val: '\\tfrac{1664}{35}' },
    { id: 'piece-d3', R: { y: [-4, 0], x: [-2, cub] }, name: '$\\kD_{3}$', at: [-1.3, -2.2], val: '-\\tfrac{1696}{35}' },
  ];
  still(d, () => {
    const { ctx } = begin(d.c), ax = frame(ctx, [-3, 3], [-4.5, 4.5], H), split = pick.value === 'pieces';
    P.forEach((p) => fill(ctx, ax, p.R, split ? F.ref(p.id) : C('region'), split ? 0.35 : 0.25));
    const fc = C('function');
    plot(ctx, ax, (x) => (x + 2) ** 2, fc, { w: 4, x: [-2, 0.08] });
    F.polar.path(ctx, ax, (t) => [cub(t), t], [-4, 4], fc, { w: 4 });
    line(ctx, ax.X(-2), ax.Y(0), ax.X(-2), ax.Y(-4), fc, 4); line(ctx, ax.X(-2), ax.Y(-4), ax.X(0), ax.Y(-4), fc, 4);
    text(ctx, '$y=(x+2)^{2}$', ax.X(-0.75), ax.Y(3.3), fc, { size: 20, tex: true, bg: PAL.panel, align: 'right' });
    text(ctx, '$x=y-\\frac{1}{16}y^{3}$', ax.X(1.75), ax.Y(1.5), fc, { size: 20, tex: true, bg: PAL.panel });
    if (split) P.forEach((p) => text(ctx, p.name, ax.X(p.at[0]), ax.Y(p.at[1]), F.ref(p.id), { size: 24, tex: true, bg: PAL.panel, align: 'center' }));
    else text(ctx, '$\\kD$', ax.X(-0.9), ax.Y(-1.2), C('region'), { size: 24, tex: true, bg: PAL.panel, align: 'center' });
    tex(d.readout, split ? `\\iint_{\\kD}(2x+5y)\\,dA=${P.map((p, i) => (i && p.val[0] !== '-' ? '+' : '') + (p.val[0] === '-' ? '-' + hue('integral', p.val.slice(1)) : hue('integral', p.val))).join('')}=${hue('integral', '\\tfrac{1304}{105}')}`
      : `\\kD=\\kD_{1}\\cup \\kD_{2}\\cup \\kD_{3},\\qquad \\iint_{\\kD}(2x+5y)\\,dA=${hue('integral', '\\tfrac{1304}{105}')}`);
  });
})();

/* Figure 15.21: Example 15.15's region under y = 2 − x², 0 ≤ x ≤ √2; frame −0.2 to 1.8 by −0.2 to 2.4 */
regionFig('fig-reverse-order', {
  xr: [-0.2, 1.8], yr: [-0.2, 2.4], ticks: { nice: true }, x: [0, Math.SQRT2, 0.8], y: [0, 2, 1],
  I: [{ on: [0, Math.SQRT2], lo: () => 0, hi: (x) => 2 - x * x }], II: [{ on: [0, 2], lo: () => 0, hi: (y) => Math.sqrt(2 - y) }],
  curves: [{ y: (x) => 2 - x * x, on: [0, 1.5], color: FN, label: '$y=2-x^{2},\\;x=\\sqrt{2-y}$', at: [0.85, 1.65] }],
  tail: `\\iint_{\\kD}xe^{x^{2}}\\,dA=${hue('integral', '\\tfrac{1}{2}(e^{2}-3)')}`,
});

/* Figure 15.22: Example 15.16's triangle under x + y = 1; frame −0.2 to 1.3 both ways */
regionFig('fig-triangle', {
  xr: [-0.2, 1.3], yr: [-0.2, 1.3], H: 500, ticks: { nice: true }, x: [0, 1, 0.4], y: [0, 1, 0.3],
  I: [{ on: [0, 1], lo: () => 0, hi: (x) => 1 - x }], II: [{ on: [0, 1], lo: () => 0, hi: (y) => 1 - y }],
  curves: [{ y: (x) => 1 - x, on: [-0.05, 1.05], color: FN, label: '$x+y=1$', at: [0.62, 0.55] }],
  tail: `\\iint_{\\kR}(x-2y)\\,dA=${hue('integral', '-\\tfrac{1}{6}')}`,
});

/* Figure 15.23, a still copy: Example 15.17's tetrahedron under z = 6 − 2x − 3y over its base D; box 0 to 3.4 by 0 to 2.4 by 0 to 6.4 */
(function () {
  const d = sim('fig-tetrahedron');
  const box = [[0, 3.4], [0, 2.4], [0, 6.4]], D = { x: [0, 3], y: [0, (x) => 2 - 2 * x / 3] }, top = (x, y) => 6 - 2 * x - 3 * y;
  const S = F.space3d(d, { box: [box[0], box[1], [0, 3.2]], h: 460, locked: true, turn: -2.0, tilt: 0.38 }), k = 2;
  still(d, () => {
    const ax = SP.axes([box[0], box[1], [0, 3.2]], { ticks: [1, 1, 0] });
    [2, 4, 6].forEach((z) => ax.push({ k: 'label', s: String(z), p: [0, -0.15, z / k], cls: 'tick' }, { k: 'segs', segs: [[[0, -0.04, z / k], [0, 0.04, z / k]]], color: 'muted', w: 2 }));
    S.set('axes', ax);
    S.set('solid', [...SP.solid({ x: [0, 3], y: [0, (x) => 2 - 2 * x / 3], z: [0, (x, y) => top(x, y) / k] }, C('region'), { alpha: 0.3 }),
      ...SP.graph((x, y) => top(x, y) / k, D, C('surface'), { alpha: 0.55, grid: 6, n: 24 }), { k: 'faces', faces: [SP.outline(D, 24).map((p) => [p[0], p[1], 0])], color: C('region'), alpha: 0.4 },
      lab3('$z=6-2x-3y$', [0.25, 0.35, top(0.25, 0.35) / k + 0.3], C('surface')), lab3('$\\kD$', [0.8, 0.5, 0], C('region')), lab3('$2x+3y=6$', [2.0, 1.0, 0], C('function'))]);
    tex(d.readout, `\\kV=\\int_{0}^{3}\\int_{0}^{2-2x/3}(6-2x-3y)\\,dy\\,dx=${hue('integral', '6')}`);
  });
})();

/* Figure 15.24: Example 15.18's region between y = x² and y = 2x; frame −0.3 to 2.5 by −0.3 to 4.4 */
regionFig('fig-parabola-line', {
  xr: [-0.3, 2.5], yr: [-0.3, 4.4], x: [0, 2, 1], y: [0, 4, 2], ticks: { nice: true },
  I: [{ on: [0, 2], lo: (x) => x * x, hi: (x) => 2 * x }], II: [{ on: [0, 4], lo: (y) => y / 2, hi: (y) => Math.sqrt(y) }],
  curves: [
    { y: (x) => x * x, on: [0, 2.08], color: FN, label: '$y=x^{2}$', at: [1.75, 2.2] },
    { y: (x) => 2 * x, on: [0, 2.15], color: FN, label: '$y=2x$', at: [0.95, 2.6], align: 'right' },
  ],
  tail: `\\kA=\\int_{0}^{2}\\int_{x^{2}}^{2x}dy\\,dx=${hue('integral', '\\tfrac{4}{3}')}`,
});

/* Figure 15.25: Example 15.19's region between x = y and x = √y; frame −0.1 to 1.2 both ways */
regionFig('fig-average-region', {
  xr: [-0.1, 1.2], yr: [-0.1, 1.2], H: 500, x: [0, 1, 0.5], y: [0, 1, 0.5], ticks: { nice: true },
  I: [{ on: [0, 1], lo: (x) => x * x, hi: (x) => x }], II: [{ on: [0, 1], lo: (y) => y, hi: (y) => Math.sqrt(y) }],
  curves: [
    { y: (x) => x, on: [0, 1.1], color: FN, label: '$x=y$', at: [0.85, 1.0], align: 'right' },
    { y: (x) => x * x, on: [0, 1.08], color: FN, label: '$x=\\sqrt{y}$', at: [0.88, 0.62] },
  ],
  tail: `\\kA(\\kD)=${hue('integral', '\\tfrac{1}{6}')},\\;\\kfave=${hue('function', '\\tfrac{21}{20}')}`,
});

/* Figure 15.26: Example 15.20's region x ≤ y ≤ √x, also y² ≤ x ≤ y, with the origin left out; frame −0.1 to 1.2 both ways */
regionFig('fig-improper-region', {
  xr: [-0.1, 1.2], yr: [-0.1, 1.2], H: 500, x: [0, 1, 0.5], y: [0, 1, 0.6], ticks: { nice: true },
  I: [{ on: [0, 1], lo: (x) => x, hi: (x) => Math.sqrt(x) }], II: [{ on: [0, 1], lo: (y) => y * y, hi: (y) => y }],
  curves: [
    { y: (x) => x, on: [0, 1.1], color: FN, label: '$y=x$', at: [0.86, 0.68] },
    { y: (x) => Math.sqrt(x), on: [0, 1.15], color: FN, label: '$y=\\sqrt{x},\\;x=y^{2}$', at: [0.62, 1.0], align: 'right' },
  ],
  marks: (ctx, ax) => dot(ctx, ax.X(0), ax.Y(0), C('point'), false, 9),
  tail: `\\iint_{\\kD}\\frac{e^{y}}{y}\\,dA=${hue('integral', 'e-2')}`,
});

/* Figure 15.27: the region x + y ≤ t in the first quadrant over the restaurant's joint density; axes 0 to 240 minutes both ways */
(function () {
  const H = 600, d = sim('sim-waiting-time', H);
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 10, max: 240, step: 1, value: 90, unit: ' min', dec: 0, detents: [90] });
  const dens = (x, y) => Math.exp(-x / 15 - y / 40) / 600;
  const P = (t) => 1 + 0.6 * Math.exp(-t / 15) - 1.6 * Math.exp(-t / 40);
  still(d, () => {
    const { ctx } = begin(d.c), t = ts.v, ax = axes(ctx, { l: 330, r: 830, t: 40, b: 540 }, [0, 240], [0, 240], { xl: 'x', yl: 'y', nx: 8, ny: 8 });
    const k = 40, w = 240 / k, fc = C('function');
    for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) {
      const a = dens((i + 0.5) * w, (j + 0.5) * w) * 600;
      if (a > 0.004) { ctx.save(); ctx.fillStyle = alpha(fc, 0.85 * a); ctx.fillRect(ax.X(i * w), ax.Y((j + 1) * w), ax.X((i + 1) * w) - ax.X(i * w) + 0.5, ax.Y(j * w) - ax.Y((j + 1) * w) + 0.5); ctx.restore(); }
    }
    const c = Math.min(t, 240);
    ctx.save(); ctx.fillStyle = alpha(C('region'), 0.22); ctx.beginPath(); ctx.moveTo(ax.X(0), ax.Y(0)); ctx.lineTo(ax.X(c), ax.Y(0)); ctx.lineTo(ax.X(0), ax.Y(c)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, ax.X(c), ax.Y(0), ax.X(0), ax.Y(c), C('region'), 4);
    text(ctx, `$x+y=${t}$`, ax.X(c / 2) + 12, ax.Y(c / 2) - 14, C('region'), { size: 20, tex: true, bg: PAL.panel });
    text(ctx, '$\\kD$', ax.X(c / 4), ax.Y(c / 4), C('region'), { size: 24, tex: true, bg: PAL.panel, align: 'center' });
    /* the legend: the density on one scale */
    const lx = 900, ly = 140, lh = 300;
    for (let s = 0; s < 20; s++) { ctx.save(); ctx.fillStyle = alpha(fc, 0.85 * (1 - s / 20)); ctx.fillRect(lx, ly + (s * lh) / 20, 34, lh / 20 + 0.5); ctx.restore(); }
    line(ctx, lx, ly, lx, ly + lh, alpha(PAL.ink, 0.4), 1.5); line(ctx, lx + 34, ly, lx + 34, ly + lh, alpha(PAL.ink, 0.4), 1.5);
    text(ctx, '$\\kf(x,y)=\\frac{1}{600}$', lx + 46, ly + 4, fc, { size: 18, tex: true });
    text(ctx, '$0$', lx + 46, ly + lh, fc, { size: 18, tex: true });
    tex(d.readout, `P(X+Y\\le ${t})=\\iint_{\\kD}\\frac{1}{600}e^{-x/15}e^{-y/40}\\,dA=${hue('integral', n2(P(t), 4))}`);
  });
})();
};
