/* Figures for section 14.6 Directional Derivatives and the Gradient. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, headline, register, tex, fmt, hover, drag, angleArc } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const DEG = Math.PI / 180, TAU = 2 * Math.PI;
const fit = (xr, yr, t, b, cx = 700) => { const s = (b - t) / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b }; };
function scaledAxes(box, K, step) {
  const org = box.map(([a, b]) => (a <= 0 && b >= 0 ? 0 : a));
  const out = SP.axes(box, { ticks: [1, 1, 0] });
  for (let v = step; v < box[2][1] - step * 0.3; v += step) {
    out.push({ k: 'segs', segs: [[[org[0] - 0.06, org[1], v], [org[0] + 0.06, org[1], v]]], color: 'muted', w: 2 });
    out.push({ k: 'label', s: String(Math.round(v * K)), p: [org[0] - 0.22, org[1], v], cls: 'tick' });
  }
  return out;
}
/* the level curves f = c over the window, on the axes */
function levels(ctx, ax, f, xr, yr, cs, color, w = 2.5) {
  const W = xr[1] - xr[0], H = yr[1] - yr[0];
  cs.forEach((c) => SP.contours((s, t) => f(xr[0] + s * W, yr[0] + t * H), c, 64).forEach((pts) => {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    pts.forEach(([s, t], i) => { const X = ax.X(xr[0] + s * W), Y = ax.Y(yr[0] + t * H); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
    ctx.stroke(); ctx.restore();
  }));
}
const clip = (ctx, box, fn) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); fn(); ctx.restore(); };

/* Figure 14.39 + 14.40: Example 14.31's f = x² − xy + 3y² over [−2.5, 0.5] × [0.5, 3.5], heights at 1/12 (box z 0–4.6); at
   (−1, 2, 15) the tangent plane, the direction u at the angle θ on the floor, the curve of the surface over that direction and
   the arrow along the plane whose slope is D_u f. */
(function () {
  const d = sim('sim-directional');
  const K = 12, f = (x, y) => x * x - x * y + 3 * y * y, fs = (x, y) => f(x, y) / K, a = -1, b = 2, box = [[-2.5, 0.5], [0.5, 3.5], [0, 4.6]];
  const S = F.space3d(d, { box, h: 540, turn: -0.9, tilt: 0.35 });
  const fx = 2 * a - b, fy = -a + 6 * b, gAng = Math.atan2(fy, fx) / DEG;
  const th = ctl(d.controls, { label: 'θ', cls: 'angle', key: 'theta', min: 0, max: 360, step: 0.1, value: Math.acos(0.6) / DEG, unit: '°', dec: 1,
    specials: [{ at: Math.acos(0.6) / DEG, label: 'θ = arccos(3/5)' }, { at: gAng, label: 'the direction of the gradient' }] });
  function draw() {
    const t = th.v * DEG, c = Math.cos(t), s = Math.sin(t), D = fx * c + fy * s, z0 = fs(a, b), floor = 0.02;
    S.set('axes', scaledAxes(box, K, 1));
    S.set('graph', SP.graph(fs, { x: [-2.5, 0.5], y: [0.5, 3.5] }, C('surface'), { n: 32, grid: 8, alpha: 0.5 }));
    S.set('plane', SP.tangent(fs, a, b, C('plane'), { size: 0.9, alpha: 0.3 }));
    S.set('dir', [...SP.vector([a, b, floor], [a + c, b + s, floor], C('vector'), { name: '$\\kvecu$' }),
      ...SP.vector([a, b, floor], [a + fx / 14, b + fy / 14, floor], alpha(C('vector'), 0.45), { name: '$\\kgradf$', w: 3 }),
      { k: 'segs', segs: [[[a, b, floor], [a, b, z0]]], color: 'guide', w: 2 }, { k: 'dot', p: [a, b, floor], color: C('point') }]);
    const reach = Math.min(...[[box[0], a, c], [box[1], b, s]].map(([[lo, hi], p, u]) => (u > 1e-9 ? (hi - p) / u : u < -1e-9 ? (lo - p) / u : 9)), 1.6);
    S.set('curve', [...SP.curve((u) => [a + u * c, b + u * s, fs(a + u * c, b + u * s)], [0, reach], C('curve'), { w: 4 }),
      ...SP.vector([a, b, z0], [a + 0.9 * c, b + 0.9 * s, z0 + (0.9 * D) / K], C('line'), { w: 5 }), { k: 'dot', p: [a, b, z0], color: C('point') }]);
    tex(d.readout, `\\kDuf(-1,2)=\\kfx\\cos \\ktheta +\\kfy\\sin \\ktheta =(-4)\\cos ${n(th.v, 1)}^{\\circ}+13\\sin ${n(th.v, 1)}^{\\circ}=${hue('derivative', n(D, 3))}`);
  }
  still(d, draw);
})();

/* Figure 14.41 + 14.42: Example 14.34's f = 3x² − 4xy + 2y² near (−2, 3): its contour map (−4.5 to 0.5 by 0.5 to 5.5, one scale)
   with u at the angle θ and ∇f, beside the graph of D_u f(−2, 3) = ‖∇f‖ cos φ against θ from 0° to 360°. */
(function () {
  const d = sim('sim-gradient-max', 520);
  const f = (x, y) => 3 * x * x - 4 * x * y + 2 * y * y, a = -2, b = 3, fx = 6 * a - 4 * b, fy = -4 * a + 4 * b, G = Math.hypot(fx, fy);
  const gA = ((Math.atan2(fy, fx) / DEG) + 360) % 360, Du = (t) => fx * Math.cos(t * DEG) + fy * Math.sin(t * DEG);
  const th = ctl(d.controls, { label: 'θ', cls: 'angle', key: 'theta', min: 0, max: 360, step: 0.1, value: 60, unit: '°', dec: 1,
    specials: [{ at: gA, label: 'along the gradient' }, { at: (gA + 180) % 360, label: 'against the gradient' }] });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const xr = [-4.5, 0.5], yr = [0.5, 5.5], box = fit(xr, yr, 90, 490, 300);
    const ax = axes(ctx, box, xr, yr, { xl: 'x', yl: 'y', nx: 5, ny: 5 });
    clip(ctx, box, () => levels(ctx, ax, f, xr, yr, [6, 20, 36, 54, 76, 100, 130], alpha(C('curve'), 0.5)));
    const t = th.v * DEG, k = 0.9, P0 = [ax.X(a), ax.Y(b)];
    arrow(ctx, P0[0], P0[1], ax.X(a + (k * fx) / G * 1.4), ax.Y(b + (k * fy) / G * 1.4), C('vector'), 4);
    text(ctx, '$\\kgradf$', ax.X(a + (fx / G) * 1.75), ax.Y(b + (fy / G) * 1.75), C('vector'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
    arrow(ctx, P0[0], P0[1], ax.X(a + Math.cos(t)), ax.Y(b + Math.sin(t)), C('vector'), 5);
    text(ctx, '$\\kvecu$', ax.X(a + 1.3 * Math.cos(t)), ax.Y(b + 1.3 * Math.sin(t)), C('vector'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
    dot(ctx, P0[0], P0[1], C('point'), true, 8);
    const g = axes(ctx, { l: 680, r: 1330, t: 90, b: 490 }, [0, 360], [-35, 35], { xl: 'θ', yl: '', nx: 4, ny: 7 });
    F.plot(ctx, g, Du, C('derivative'), { x: [0, 360], w: 4 });
    line(ctx, g.X(gA), g.Y(-35), g.X(gA), g.Y(35), alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, g.X(th.v), g.Y(Du(th.v)), C('derivative'), true, 9);
    text(ctx, '$\\kDuf(-2,3)$', g.X(10), g.Y(31), C('derivative'), { size: 20, tex: true, bg: PAL.panel });
    hits.length = 0; hits.push({ x: g.X(gA), y: g.Y(G), r: 14, name: `the maximum 4√61 ≈ ${n(G)} at θ ≈ ${n(gA, 1)}°` }, { x: P0[0], y: P0[1], r: 12, name: 'the point (−2, 3)' });
    const phi = Math.acos(Math.max(-1, Math.min(1, Du(th.v) / G))) / DEG;
    headline(ctx, `θ = ${n(th.v, 1)}°: u is ${n(phi, 1)}° from ∇f`);
    tex(d.readout, `\\kDuf(-2,3)=\\|\\kgradf(-2,3)\\|\\cos \\kphi =4\\sqrt{61}\\cos ${n(phi, 1)}^{\\circ}=${hue('derivative', n(Du(th.v), 3))}`);
  }
  still(d, draw);
})();

/* Figure 14.43: f = 3 + sin x sin y over [−3, 3]² (box z 0–4.2); at the dragged point ∇f on the floor and the arrow of steepest
   ascent along the surface. */
(function () {
  const d = sim('sim-steepest');
  const f = (x, y) => 3 + Math.sin(x) * Math.sin(y), box = [[-3, 3], [-3, 3], [0, 4.2]];
  const S = F.space3d(d, { box, h: 540 });
  const xs = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -2.8, max: 2.8, step: 0.01, value: 0.6, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -2.8, max: 2.8, step: 0.01, value: 0.9, unit: '', dec: 2 });
  S.drag({ at: () => [xs.v, ys.v, f(xs.v, ys.v)], on: 'graph', move: ([x, y]) => { xs.drive(x); ys.drive(y); } });
  function draw() {
    const a = xs.v, b = ys.v, gx = Math.cos(a) * Math.sin(b), gy = Math.sin(a) * Math.cos(b), G = Math.hypot(gx, gy), z = f(a, b);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(f, { x: [-3, 3], y: [-3, 3] }, C('surface'), { n: 44, grid: 10, alpha: 0.55 }));
    const L = 1.5, ux = G > 1e-9 ? gx / G : 0, uy = G > 1e-9 ? gy / G : 0;
    S.set('grad', [...SP.vector([a, b, 0], [a + 1.6 * gx, b + 1.6 * gy, 0], C('vector'), { name: '$\\kgradf$' }), { k: 'segs', segs: [[[a, b, 0], [a, b, z]]], color: 'guide', w: 2 },
      ...SP.vector([a, b, z], [a + L * ux, b + L * uy, z + L * G], C('line'), { w: 5 }), { k: 'dot', p: [a, b, z], color: C('point') }]);
    tex(d.readout, `\\kgradf(${n(a)},${n(b)})=\\langle \\cos a\\sin b,\\sin a\\cos b\\rangle =\\langle ${n(gx, 3)},${n(gy, 3)}\\rangle ,\\quad \\|\\kgradf\\|=${hue('derivative', n(G, 3))}`);
  }
  still(d, draw);
})();

/* Figures 14.44 and 14.45: a contour map with a dragged point on a level curve, ∇f normal to it and a tangent vector. */
function normalMap(id, o) {
  const d = sim(id, 600);
  const xs = o.on ? ctl(d.controls, { label: 'φ', cls: '', key: 'phi', aria: 'the angle of the point seen from the center of the ellipse', min: 0, max: 360, step: 0.1, value: o.p0[0], unit: '°', dec: 1, specials: [{ at: o.p0[0], label: 'the point (−2, 1)' }] })
    : ctl(d.controls, { label: 'x', cls: '', key: 'x', min: o.xr[0], max: o.xr[1], step: 0.01, value: o.p0[0], unit: '', dec: 2 });
  const ys = o.on ? null : ctl(d.controls, { label: 'y', cls: '', key: 'y', min: o.yr[0], max: o.yr[1], step: 0.01, value: o.p0[1], unit: '', dec: 2 });
  const P = o.on ? null : drag(d, { x: xs, y: ys });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const box = fit(o.xr, o.yr, 110, 580), ax = axes(ctx, box, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.xr[1] - o.xr[0], ny: o.yr[1] - o.yr[0] });
    const [x, y] = o.on ? o.on(xs.v) : [xs.v, ys.v], [gx, gy] = o.grad(x, y), c = o.f(x, y), k = o.scale;
    clip(ctx, box, () => { levels(ctx, ax, o.f, o.xr, o.yr, o.cs, alpha(C('curve'), 0.45)); levels(ctx, ax, o.f, o.xr, o.yr, [c], C('curve'), 4); });
    arrow(ctx, ax.X(x), ax.Y(y), ax.X(x + gx * k), ax.Y(y + gy * k), C('vector'), 4);
    text(ctx, '$\\kgradf$', ax.X(x + gx * k * 1.15), ax.Y(y + gy * k * 1.15) - 6, C('vector'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
    arrow(ctx, ax.X(x), ax.Y(y), ax.X(x - gy * k), ax.Y(y + gx * k), alpha(C('vector'), 0.6), 3);
    text(ctx, 'tangent vector', ax.X(x - gy * k * 1.15), ax.Y(y + gx * k * 1.15) - 6, C('vector'), { size: 18, align: 'center', bg: PAL.panel });
    if (P) P.draw(ctx, ax, C('point')); else dot(ctx, ax.X(x), ax.Y(y), C('point'), true, 9);
    hits.length = 0; hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `(${n(x)}, ${n(y)}) on the level curve f = ${n(c)}` });
    headline(ctx, `At (${n(x)}, ${n(y)}): ∇f = ⟨${n(gx)}, ${n(gy)}⟩, normal to the level curve f(x, y) = ${n(c)}`);
    tex(d.readout, `\\kgradf(${n(x)},${n(y)})=${o.gradT}=\\langle ${n(gx)},${n(gy)}\\rangle ,\\quad \\|\\kgradf\\|=${hue('derivative', n(Math.hypot(gx, gy)))}`);
  }
  still(d, draw);
}
normalMap('sim-gradient-normal', { f: (x, y) => x * x - y * y, grad: (x, y) => [2 * x, -2 * y], gradT: '\\langle 2x,-2y\\rangle', xr: [-3, 3], yr: [-3, 3], p0: [1.6, 0.8],
  cs: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], scale: 0.25, xl: 'x', yl: 'y' });
/* Example 14.35's level curve f = 18 about its centre (−4/11, 2/11), by the angle φ from the centre */
(function () {
  const f = (x, y) => 2 * x * x - 3 * x * y + 8 * y * y + 2 * x - 4 * y + 4, cx = -4 / 11, cy = 2 / 11, fc = f(cx, cy);
  const at = (deg) => { const t = deg * DEG, u = Math.cos(t), v = Math.sin(t), r = Math.sqrt((18 - fc) / (2 * u * u - 3 * u * v + 8 * v * v)); return [cx + r * u, cy + r * v]; };
  const start = (Math.atan2(1 - cy, -2 - cx) / DEG + 360) % 360;
  normalMap('sim-level-gradient', { f, grad: (x, y) => [4 * x - 3 * y + 2, -3 * x + 16 * y - 4], gradT: '\\langle 4x-3y+2,\\,-3x+16y-4\\rangle', xr: [-4, 3], yr: [-2, 3.5], p0: [start, 0],
    cs: [6, 12, 24, 32], scale: 1 / 9, xl: 'φ', yl: '', on: at });
})();
};
