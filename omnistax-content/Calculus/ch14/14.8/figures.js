/* Figures for section 14.8 Lagrange Multipliers. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.8'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, arrow, dot, line, text, headline, register, tex, fmt, hover } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const fit = (xr, yr, t, b, cx = 700) => { const s = (b - t) / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b }; };
function levels(ctx, ax, f, xr, yr, cs, color, w = 2.5) {
  const W = xr[1] - xr[0], H = yr[1] - yr[0];
  cs.forEach((c) => SP.contours((s, t) => f(xr[0] + s * W, yr[0] + t * H), c, 72).forEach((pts) => {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    pts.forEach(([s, t], i) => { const X = ax.X(xr[0] + s * W), Y = ax.Y(yr[0] + t * H); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
    ctx.stroke(); ctx.restore();
  }));
}

/* a level-curve map with a straight constraint a x + b y = k, the level f = c bold, its crossings with the line, and at the
   tangency P* the two gradients */
function lagrangeMap(id, o) {
  const d = sim(id, 640);
  const cs = ctl(d.controls, { label: 'c', cls: 'function', key: 'c', min: o.cr[0], max: o.cr[1], step: 0.5, value: o.c0, unit: '', dec: 1, detents: o.book, specials: [{ at: o.cStar, label: 'the level curve touches the constraint' }] });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const box = fit(o.xr, o.yr, 90, 600), ax = axes(ctx, box, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny });
    const c = cs.v, cc = C('curve'), lc = C('line');
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    levels(ctx, ax, o.f, o.xr, o.yr, o.book, alpha(cc, 0.4));
    levels(ctx, ax, o.f, o.xr, o.yr, [c], cc, 5);
    const P = (t) => [o.p0[0] + t * o.dir[0], o.p0[1] + t * o.dir[1]];
    line(ctx, ax.X(P(-40)[0]), ax.Y(P(-40)[1]), ax.X(P(40)[0]), ax.Y(P(40)[1]), lc, 4);
    ctx.restore();
    /* where f = c along the line: sign changes of f − c */
    const meets = [];
    for (let i = 0, prev = null; i <= 2000; i++) { const t = -40 + (80 * i) / 2000, [x, y] = P(t), v = o.f(x, y) - c; if (prev !== null && Math.sign(v) !== Math.sign(prev.v)) meets.push(P((prev.t + t) / 2)); prev = { t, v }; }
    hits.length = 0;
    const seen = meets.filter(([x, y]) => x >= o.xr[0] && x <= o.xr[1] && y >= o.yr[0] && y <= o.yr[1]);
    meets.length = 0; meets.push(...seen);
    meets.forEach(([x, y]) => { { dot(ctx, ax.X(x), ax.Y(y), C('point'), true, 8); hits.push({ x: ax.X(x), y: ax.Y(y), r: 12, name: `f = ${n(c, 1)} on the constraint at (${n(x)}, ${n(y)})` }); } });
    const near = Math.abs(c - o.cStar) < 0.6, [px, py] = o.star;
    if (near) {
      const [fx, fy] = o.gf, [gx, gy] = o.gg, kf = o.len / Math.hypot(fx, fy), kg = (0.75 * o.len) / Math.hypot(gx, gy);
      arrow(ctx, ax.X(px), ax.Y(py), ax.X(px + fx * kf), ax.Y(py + fy * kf), C('vector'), 5);
      text(ctx, '$\\kgradf$', ax.X(px + fx * kf * 1.18), ax.Y(py + fy * kf * 1.18), C('vector'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
      arrow(ctx, ax.X(px), ax.Y(py), ax.X(px + gx * kg), ax.Y(py + gy * kg), alpha(C('vector'), 0.65), 4);
      text(ctx, '$\\kgradg$', ax.X(px + gx * kg) + 30, ax.Y(py + gy * kg) + 16, C('vector'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
      dot(ctx, ax.X(px), ax.Y(py), C('point'), true, 10);
    }
    text(ctx, o.lineName, ax.X(o.lab[0]), ax.Y(o.lab[1]), lc, { size: 20, weight: 600, bg: PAL.panel, tex: true });
    headline(ctx, near ? `c = ${n(c, 1)}: the level curve touches the constraint at (${px}, ${py})` : meets.length ? `c = ${n(c, 1)}: the level curve crosses the constraint at ${meets.length} point${meets.length > 1 ? 's' : ''}` : `c = ${n(c, 1)}: the level curve misses the constraint`);
    tex(d.readout, near ? o.roStar : `\\kf(x,y)=${n(c, 1)}\\;\\text{and}\\;${o.lineTex}:\\;${meets.length}\\;\\text{common point${meets.length === 1 ? '' : 's'}}`);
  }
  still(d, draw);
}
/* Figure 14.59 + 14.60: the golf-ball profit and the budget 20x + 4y = 216; axes 0–24 by 0–12, one scale. */
lagrangeMap('sim-lagrange-golf', {
  f: (x, y) => 48 * x + 96 * y - x * x - 2 * x * y - 9 * y * y, xr: [0, 24], yr: [0, 12], nx: 12, ny: 6, cr: [100, 640], c0: 395, book: [150, 250, 350, 400], cStar: 540,
  p0: [10.8, 0], dir: [-0.2, 1], star: [10, 4], gf: [20, 4], gg: [5, 1], len: 3.2, lineName: '$20x+4y=216$', lab: [4.4, 10.6], lineTex: '20x+4y=216',
  roStar: `\\kgradf(10,4)=\\langle 20,4\\rangle =4\\langle 5,1\\rangle =\\lambda \\kgradg(10,4),\\quad \\kf(10,4)=${hue('function', '540')}`,
});
/* Figure 14.61: Example 14.42's f = x² + 4y² − 2x + 8y and x + 2y = 7; axes −5 to 8 by −4 to 5, one scale. */
lagrangeMap('sim-lagrange-min', {
  f: (x, y) => x * x + 4 * y * y - 2 * x + 8 * y, xr: [-5, 8], yr: [-4, 5], nx: 13, ny: 9, cr: [-4, 50], c0: 10, book: [10, 26], cStar: 27,
  p0: [7, 0], dir: [-2, 1], star: [5, 1], gf: [8, 16], gg: [1, 2], len: 2.2, lineName: '$x+2y=7$', lab: [-2.6, 4.4], lineTex: 'x+2y=7',
  roStar: `\\kgradf(5,1)=\\langle 8,16\\rangle =8\\langle 1,2\\rangle =\\lambda \\kgradg(5,1),\\quad \\kf(5,1)=${hue('function', '27')}`,
});

/* Sim: Example 14.45's cone z² = x² + y² and plane x + y − z + 1 = 0 (box ±3.6), the curve where they meet (two branches, in
   polar form about the z-axis), and the sphere x² + y² + z² = R². */
(function () {
  const d = sim('sim-two-constraints');
  const box = [[-3.6, 3.6], [-3.6, 3.6], [-3.6, 3.6]], s2 = Math.SQRT2, R1 = Math.sqrt(6 - 4 * s2), R2 = Math.sqrt(6 + 4 * s2);
  const S = F.space3d(d, { box, h: 560 });
  const Rs = ctl(d.controls, { label: 'R', cls: '', key: 'R', min: 0.3, max: 3.6, step: 0.01, value: 1.6, unit: '', dec: 2, specials: [{ at: R1, label: 'R² = 6 − 4√2' }, { at: R2, label: 'R² = 6 + 4√2' }] });
  const inBox = (p) => p.every((v, i) => v >= box[i][0] && v <= box[i][1]);
  /* the branch z = σr, r = σ/(σ − cos φ − sin φ) where positive */
  const branch = (sg) => { const runs = []; let cur = [];
    for (let i = 0; i <= 720; i++) { const t = (i / 720) * TAU, den = sg - Math.cos(t) - Math.sin(t), r = sg / den, p = [r * Math.cos(t), r * Math.sin(t), sg * r];
      if (r > 0 && Number.isFinite(r) && inBox(p)) cur.push(p); else if (cur.length) { runs.push(cur); cur = []; } }
    if (cur.length) runs.push(cur); return runs; };
  const curve = [...branch(1), ...branch(-1)].filter((r) => r.length > 1).map((pts) => ({ k: 'line', pts, color: C('curve'), w: 5 }));
  function draw() {
    const R = Rs.v;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('cone', SP.surface((u, v) => [v * Math.cos(u), v * Math.sin(u), v], [0, TAU], [-3.4, 3.4], 'muted', { n: [48, 24], grid: 0, alpha: 0.18 }));
    S.set('plane', SP.plane([0, 0, 1], [1, 1, -1], C('plane'), { box, alpha: 0.16 }));
    S.set('curve', [...curve.map((m) => ({ ...m, color: C('curve') })),
      ...SP.point([-1 + s2 / 2, -1 + s2 / 2, -1 + s2], C('point'), { r: 9 }), ...SP.point([-1 - s2 / 2, -1 - s2 / 2, -1 - s2], C('point'), { r: 9 })]);
    S.set('sphere', SP.surface((u, v) => [R * Math.sin(v) * Math.cos(u), R * Math.sin(v) * Math.sin(u), R * Math.cos(v)], [0, TAU], [0, Math.PI], C('surface'), { n: [40, 20], grid: 8, alpha: 0.3 }));
    const touch = Math.abs(R - R1) < 0.01 ? `=6-4\\sqrt{2}` : Math.abs(R - R2) < 0.01 ? `=6+4\\sqrt{2}` : '';
    tex(d.readout, `\\kf(x,y,z)=x^{2}+y^{2}+z^{2}=R^{2}=${hue('function', n(R * R, 3))}${touch}\\quad(6\\mp 4\\sqrt{2}\\approx ${n(R1 * R1, 3)},\\,${n(R2 * R2, 3)})`);
  }
  still(d, draw);
})();
};
