/* Figures for section 15.7 Change of Variables in Multiple Integrals. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.7'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, register, tex, fmt, begin, axes, line, dot, text, arrow } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
const nt = (v) => String(+v.toFixed(2)).replace('-', '−');
const PI = Math.PI;
const span = (a, b, n) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* A region of a plane in its own coordinates (s, t): s in [a, b], t from lo(s) to hi(s); with swap the
   first coordinate is the second axis (v outer). P(s, t) gives the point as [u, v]. */
const reg = (a, b, lo, hi, swap = false) => ({ a, b, lo, hi, swap, P: (s, t) => (swap ? [t, s] : [s, t]) });
function ring(R, n = 40) {
  const out = [];
  span(R.a, R.b, n).forEach((s) => out.push(R.P(s, R.lo(s))));
  span(R.lo(R.b), R.hi(R.b), n).forEach((t) => out.push(R.P(R.b, t)));
  span(R.b, R.a, n).forEach((s) => out.push(R.P(s, R.hi(s))));
  span(R.hi(R.a), R.lo(R.a), n).forEach((t) => out.push(R.P(R.a, t)));
  return out;
}
const inside = (R, u, v) => { const s = R.swap ? v : u, t = R.swap ? u : v; return s >= R.a - 1e-9 && s <= R.b + 1e-9 && t >= R.lo(s) - 1e-9 && t <= R.hi(s) + 1e-9; };
/* the grid curves u = c and v = c of a region, as polylines in (u, v), cut where they leave it */
function gridOf(R, box, k = 6) {
  const lines = [], piece = (pts) => { let cur = []; pts.forEach((p) => { if (inside(R, p[0], p[1])) cur.push(p); else { if (cur.length > 1) lines.push(cur); cur = []; } }); if (cur.length > 1) lines.push(cur); };
  span(box[0][0], box[0][1], k).forEach((u) => piece(span(box[1][0], box[1][1], 120).map((v) => [u, v])));
  span(box[1][0], box[1][1], k).forEach((v) => piece(span(box[0][0], box[0][1], 120).map((u) => [u, v])));
  return lines;
}
const poly = (ctx, ax, pts, close) => { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); if (close) ctx.closePath(); };
const fillPoly = (ctx, ax, pts, color, a, w = 3) => { ctx.save(); ctx.fillStyle = alpha(color, a); poly(ctx, ax, pts, true); ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke(); ctx.restore(); };
const strokePoly = (ctx, ax, pts, color, w) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; poly(ctx, ax, pts, false); ctx.stroke(); ctx.restore(); };
/* two equal-scale frames side by side: the uv-plane on the left, the xy-plane on the right */
function pair(ctx, H, L, Rt) {
  const fit = (xr, yr, cx) => { const s = Math.min((H - 100) / (yr[1] - yr[0]), 520 / (xr[1] - xr[0])), w = (xr[1] - xr[0]) * s, h = (yr[1] - yr[0]) * s; return { l: cx - w / 2, r: cx + w / 2, t: 40, b: 40 + h }; };
  const A = axes(ctx, fit(L.xr, L.yr, 360), L.xr, L.yr, { xl: L.names[0], yl: L.names[1], nx: 5, ny: 5, nice: true });
  const B = axes(ctx, fit(Rt.xr, Rt.yr, 1040), Rt.xr, Rt.yr, { xl: 'x', yl: 'y', nx: 5, ny: 5, nice: true });
  return [A, B];
}
const mapAll = (T, pts) => pts.map((p) => T(p[0], p[1]));
/* the shoelace area of a closed polygon */
const areaOf = (pts) => Math.abs(pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p[0] * q[1] - q[0] * p[1]; }, 0)) / 2;

const MAPS = {
  polar: { T: (r, t) => [r * Math.cos(t), r * Math.sin(t)], G: reg(0, 1, () => 0, () => PI / 2), names: ['r', 'θ'], L: { xr: [-0.2, 1.3], yr: [-0.2, 1.8] }, R: { xr: [-0.2, 1.3], yr: [-0.2, 1.3] },
    box: [[0, 1], [0, PI / 2]], J: (r) => r, Jt: 'r', Tt: '(r\\cos\\theta,\\,r\\sin\\theta)', u0: [0.7, 0.6] },
  square: { T: (u, v) => [u * u - v * v, u * v], G: reg(0, 1, () => 0, (v) => v, true), names: ['u', 'v'], L: { xr: [-0.2, 1.3], yr: [-0.2, 1.3] }, R: { xr: [-1.2, 0.3], yr: [-0.15, 1.2] },
    box: [[0, 1], [0, 1]], J: (u, v) => 2 * u * u + 2 * v * v, Jt: '2u^{2}+2v^{2}', Tt: '(u^{2}-v^{2},\\,u\\cdot v)', u0: [0.4, 0.7] },
};

/* Figure 15.71 + 15.72 + 15.73: a region G of the uv-plane, its grid curves, and its image R = T(G) under the polar map of Example 15.65 or the map of Example 15.66 */
(function () {
  const H = 520, d = sim('sim-transformation', H);
  const pick = choice(d.controls, { label: '\\kT', options: [{ value: 'polar', label: 'T(r, θ) = (r cos θ, r sin θ)' }, { value: 'square', label: 'T(u, v) = (u² − v², uv)' }], value: 'polar', ms: 0 });
  const us = ctl(d.controls, { label: 'u', cls: '', key: 'u', min: 0, max: 1, step: 0.01, value: 0.7, unit: '', dec: 2 });
  const vs = ctl(d.controls, { label: 'v', cls: '', key: 'v', min: 0, max: 1.57, step: 0.01, value: 0.6, unit: '', dec: 2 });
  still(d, () => {
    const M = MAPS[pick.value], { ctx } = begin(d.c), [A, B] = pair(ctx, H, { ...M.L, names: M.names }, M.R), rc = C('region'), g = alpha(PAL.ink, 0.3);
    const G = ring(M.G), grid = gridOf(M.G, M.box, 8);
    fillPoly(ctx, A, G, rc, 0.22); fillPoly(ctx, B, mapAll(M.T, G), rc, 0.22);
    grid.forEach((l) => { strokePoly(ctx, A, l, g, 1.5); strokePoly(ctx, B, mapAll(M.T, l), g, 1.5); });
    text(ctx, '$\\kG$', A.X(M.box[0][1] * 0.35), A.Y(M.box[1][1] * 0.8), rc, { size: 24, tex: true, bg: PAL.panel, align: 'center' });
    const c = M.T(0.45 * M.box[0][1], 0.5 * M.box[1][1]);
    text(ctx, '$\\kR$', B.X(c[0]), B.Y(c[1]), rc, { size: 24, tex: true, bg: PAL.panel, align: 'center' });
    if (pick.value === 'square') [['A', [0, 0.5], [-0.5, 0]], ['B', [0.5, 0.5], [0, 0.25]], ['C', [0.5, 1], [-0.75, 0.5]]].forEach(([n, p, q]) => {
      text(ctx, `$${n}$`, A.X(p[0]) + 14, A.Y(p[1]) - 10, PAL.ink, { size: 20, tex: true, bg: PAL.panel });
      text(ctx, `$${n}'$`, B.X(q[0]) + 12, B.Y(q[1]) - 12, PAL.ink, { size: 20, tex: true, bg: PAL.panel });
    });
    let u = us.v, v = vs.v;
    if (pick.value === 'polar') { u = clamp(u, 0, 1); v = clamp(v, 0, PI / 2); } else { v = clamp(v, 0, 1); u = clamp(u, 0, v); }
    const p = M.T(u, v), pc = C('point');
    dot(ctx, A.X(u), A.Y(v), pc, true, 9); dot(ctx, B.X(p[0]), B.Y(p[1]), pc, true, 9);
    arrow(ctx, 650, 70, 760, 70, PAL.ink, 3); text(ctx, '$\\kT$', 705, 46, C('function'), { size: 24, tex: true, align: 'center' });
    tex(d.readout, `\\kT(${nt(u)},${nt(v)})=${M.Tt.replace(/[uvr]|\\theta/g, (s) => (s === 'u' || s === 'r' ? nt(u) : nt(v)))}=${hue('point', `(${nt(p[0])},${nt(p[1])})`)}`);
  });
})();

/* Figure 15.74 + 15.75: the subrectangles S_ij of a rectangle S and their images; one cell, its image, and the parallelogram of Δu r_u and Δv r_v */
(function () {
  const H = 540, d = sim('sim-jacobian', H);
  const S = { polar: { box: [[0.3, 1], [0, PI / 2]] }, square: { box: [[0.3, 1], [0.1, 0.8]] } };
  const pick = choice(d.controls, { label: '\\kT', options: [{ value: 'polar', label: 'T(r, θ) = (r cos θ, r sin θ)' }, { value: 'square', label: 'T(u, v) = (u² − v², uv)' }], value: 'square', ms: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 12, step: 1, value: 5, unit: '', dec: 0 });
  const us = ctl(d.controls, { label: 'u', cls: '', key: 'u', min: 0, max: 1, step: 0.01, value: 0.55, unit: '', dec: 2 });
  const vs = ctl(d.controls, { label: 'v', cls: '', key: 'v', min: 0, max: 1, step: 0.01, value: 0.45, unit: '', dec: 2 });
  still(d, () => {
    const M = MAPS[pick.value], box = S[pick.value].box, n = ns.v, du = (box[0][1] - box[0][0]) / n, dv = (box[1][1] - box[1][0]) / n;
    const L = { xr: [-0.1, 1.15], yr: [-0.1, pick.value === 'polar' ? 1.75 : 1] }, Rr = pick.value === 'polar' ? { xr: [-0.15, 1.15], yr: [-0.15, 1.15] } : { xr: [-0.75, 1.1], yr: [-0.05, 1] };
    const { ctx } = begin(d.c), [A, B] = pair(ctx, H, { ...L, names: M.names }, Rr), rc = C('region'), g = alpha(PAL.ink, 0.35);
    const Sreg = reg(box[0][0], box[0][1], () => box[1][0], () => box[1][1]), Sr = ring(Sreg);
    fillPoly(ctx, A, Sr, rc, 0.15); fillPoly(ctx, B, mapAll(M.T, Sr), rc, 0.15);
    let sum = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const cell = ring(reg(box[0][0] + i * du, box[0][0] + (i + 1) * du, () => box[1][0] + j * dv, () => box[1][0] + (j + 1) * dv), 8);
      strokePoly(ctx, A, [...cell, cell[0]], g, 1.2); strokePoly(ctx, B, [...mapAll(M.T, cell), M.T(...cell[0])], g, 1.2);
      sum += Math.abs(M.J(box[0][0] + (i + 0.5) * du, box[1][0] + (j + 0.5) * dv)) * du * dv;
    }
    const i = clamp(Math.floor((box[0][0] + us.v * (box[0][1] - box[0][0]) - box[0][0]) / du), 0, n - 1), j = clamp(Math.floor((vs.v * (box[1][1] - box[1][0])) / dv), 0, n - 1);
    const u0 = box[0][0] + i * du, v0 = box[1][0] + j * dv, cell = ring(reg(u0, u0 + du, () => v0, () => v0 + dv), 16), img = mapAll(M.T, cell);
    fillPoly(ctx, A, cell, rc, 0.6, 3); fillPoly(ctx, B, img, rc, 0.6, 3);
    text(ctx, '$\\kS_{ij}$', A.X(u0 + du / 2), A.Y(v0 + dv) - 16, rc, { size: 20, tex: true, bg: PAL.panel, align: 'center' });
    const h = 1e-5, p0 = M.T(u0, v0), ru = M.T(u0 + h, v0).map((c, k) => (c - p0[k]) / h), rv = M.T(u0, v0 + h).map((c, k) => (c - p0[k]) / h), vc = C('vector');
    const a = [p0[0] + ru[0] * du, p0[1] + ru[1] * du], b = [p0[0] + rv[0] * dv, p0[1] + rv[1] * dv], ab = [a[0] + b[0] - p0[0], a[1] + b[1] - p0[1]];
    strokePoly(ctx, B, [a, ab, b], alpha(PAL.ink, 0.6), 2);
    arrow(ctx, B.X(p0[0]), B.Y(p0[1]), B.X(a[0]), B.Y(a[1]), vc, 3.5); arrow(ctx, B.X(p0[0]), B.Y(p0[1]), B.X(b[0]), B.Y(b[1]), vc, 3.5);
    text(ctx, '$\\Delta u\\,\\mathbf{r}_{u}$', B.X(a[0]) + 10, B.Y(a[1]) + 16, vc, { size: 18, tex: true, bg: PAL.panel });
    text(ctx, '$\\Delta v\\,\\mathbf{r}_{v}$', B.X(b[0]) - 10, B.Y(b[1]) - 14, vc, { size: 18, tex: true, bg: PAL.panel, align: 'right' });
    arrow(ctx, 650, 70, 760, 70, PAL.ink, 3); text(ctx, '$\\kT$', 705, 46, C('function'), { size: 24, tex: true, align: 'center' });
    const J = M.J(u0, v0), area = areaOf(img), tot = areaOf(mapAll(M.T, ring(Sreg, 80)));
    tex(d.readout, `\\kJ(${nt(u0)},${nt(v0)})=${M.Jt}=${hue('matrix', nt(J))},\\quad |\\kJ|\\Delta u\\,\\Delta v=${hue('integral', n2(Math.abs(J) * du * dv, 4))}\\approx\\Delta A=${hue('integral', n2(area, 4))},\\quad \\sum|\\kJ|\\Delta u\\,\\Delta v=${hue('integral', n2(sum, 3))}\\approx \\kA(\\kR)=${hue('integral', n2(tot, 3))}`);
  });
})();

/* Figure 15.76, a still copy: Example 15.69's region under y = √(2x − x²), the upper half of the circle r = 2 cos θ; frame −0.3 to 2.3 by −0.3 to 1.3 */
(function () {
  const H = 380, d = sim('fig-half-disk', H);
  still(d, () => {
    const { ctx } = begin(d.c), s = Math.min((H - 100) / 1.6, 1000 / 2.6), w = 2.6 * s;
    const ax = axes(ctx, { l: 700 - w / 2, r: 700 + w / 2, t: 40, b: 40 + 1.6 * s }, [-0.3, 2.3], [-0.3, 1.3], { xl: 'x', yl: 'y', nx: 5, ny: 3, nice: true });
    const pts = span(0, PI / 2, 60).map((t) => [2 * Math.cos(t) * Math.cos(t), 2 * Math.cos(t) * Math.sin(t)]);
    fillPoly(ctx, ax, pts, C('region'), 0.3);
    text(ctx, '$y=\\sqrt{2x-x^{2}},\\;r=2\\cos\\theta$', ax.X(1.6), ax.Y(1.12), C('function'), { size: 20, tex: true, bg: PAL.panel });
    text(ctx, '$\\kR$', ax.X(1), ax.Y(0.45), C('region'), { size: 24, tex: true, bg: PAL.panel, align: 'center' });
  });
})();

/* the uv-region S and its image R, drawn side by side with their grid curves (still copies) */
function pairCopy(id, cfg) {
  const H = cfg.H ?? 460, d = sim(id, H);
  still(d, () => {
    const { ctx } = begin(d.c), [A, B] = pair(ctx, H, { ...cfg.L, names: ['u', 'v'] }, cfg.R), rc = C('region'), g = alpha(PAL.ink, 0.35);
    const Sr = ring(cfg.S);
    fillPoly(ctx, A, Sr, rc, 0.25); fillPoly(ctx, B, mapAll(cfg.T, Sr), rc, 0.25);
    gridOf(cfg.S, cfg.box, cfg.k ?? 6).forEach((l) => { strokePoly(ctx, A, l, g, 1.5); strokePoly(ctx, B, mapAll(cfg.T, l), g, 1.5); });
    cfg.labels(ctx, A, B);
    arrow(ctx, 650, 70, 760, 70, PAL.ink, 3); text(ctx, '$\\kT$', 705, 46, C('function'), { size: 24, tex: true, align: 'center' });
    tex(d.readout, cfg.readout);
  });
}
const put = (ctx, ax, s, x, y, color, al = 'left') => text(ctx, s, ax.X(x), ax.Y(y), color, { size: 18, tex: true, bg: PAL.panel, align: al });

/* Figure 15.77 + 15.78, a still copy: Example 15.70's parallelogram between x − y = ±1 and x − 3y = −5, −9, from S = [−1, 1] × [−9, −5] */
pairCopy('fig-parallelogram', {
  S: reg(-1, 1, () => -9, () => -5), box: [[-1, 1], [-9, -5]], T: (u, v) => [(3 * u - v) / 2, (u - v) / 2], k: 4,
  L: { xr: [-1.6, 1.6], yr: [-9.6, -4.4] }, R: { xr: [0, 7], yr: [0.5, 5.8] },
  labels: (ctx, A, B) => {
    const fc = C('function');
    put(ctx, B, '$x-y=1$', 4.9, 3.6, fc); put(ctx, B, '$x-y=-1$', 1.5, 3.1, fc, 'right'); put(ctx, B, '$x-3y=-5$', 4.3, 2.6, fc); put(ctx, B, '$x-3y=-9$', 3.6, 4.6, fc, 'right');
    put(ctx, A, '$\\kS$', 0, -7, C('region'), 'center'); put(ctx, B, '$\\kR$', 3.5, 3.5, C('region'), 'center');
  },
  readout: `\\kT(u,v)=\\Big(\\frac{3u-v}{2},\\frac{u-v}{2}\\Big),\\quad u=x-y,\\;v=x-3y,\\quad \\kJ(u,v)=${hue('matrix', '-\\tfrac{1}{2}')}`,
});

/* Figure 15.79, a still copy: Example 15.71's region R between x + y = 1, 3 and x² − y² = ±1, and S: 1 ≤ v ≤ 3, −1/v ≤ u ≤ 1/v */
pairCopy('fig-hyperbolas', {
  S: reg(1, 3, (v) => -1 / v, (v) => 1 / v, true), box: [[-1, 1], [1, 3]], T: (u, v) => [(u + v) / 2, (v - u) / 2], k: 6,
  L: { xr: [-1.3, 1.3], yr: [0.6, 3.3] }, R: { xr: [-0.2, 2.2], yr: [-0.2, 2.2] },
  labels: (ctx, A, B) => {
    const fc = C('function');
    put(ctx, A, '$uv=1$', 0.6, 1.9, fc); put(ctx, A, '$uv=-1$', -0.6, 1.9, fc, 'right'); put(ctx, A, '$v=3$', 0.45, 3.12, fc); put(ctx, A, '$v=1$', 1.0, 0.85, fc);
    put(ctx, B, '$x^{2}-y^{2}=1$', 1.75, 0.6, fc); put(ctx, B, '$x^{2}-y^{2}=-1$', 0.3, 2.05, fc); put(ctx, B, '$x+y=3$', 1.65, 1.6, fc); put(ctx, B, '$x+y=1$', 0.32, 0.42, fc);
    put(ctx, A, '$\\kS$', 0, 2, C('region'), 'center'); put(ctx, B, '$\\kR$', 1, 1, C('region'), 'center');
  },
  readout: `u=x-y,\\;v=x+y,\\quad \\kT(u,v)=\\Big(\\frac{u+v}{2},\\frac{v-u}{2}\\Big),\\quad \\kJ(u,v)=${hue('matrix', '\\tfrac{1}{2}')}`,
});

/* Figure 15.80 + 15.81 + 15.82 + 15.83: a box G in uvw-space carried by a transformation T to the solid D in xyz-space, morphing from one to the other */
(function () {
  const d = sim('sim-solid-transformation');
  const TS = {
    cyl: { G: [[0.3, 1.5], [0, PI], [0, 2]], T: ([r, t, z]) => [r * Math.cos(t), r * Math.sin(t), z], names: ['$r$', '$\\theta$', '$z$'], J: '|\\kJ(r,\\theta,z)|=r', box: [[-1.6, 1.6], [-0.2, 3.3], [-0.1, 2.2]] },
    sph: { G: [[0.3, 1.5], [0, PI], [0.15, PI / 2]], T: ([p, t, f]) => [p * Math.sin(f) * Math.cos(t), p * Math.sin(f) * Math.sin(t), p * Math.cos(f)], names: ['$\\rho$', '$\\theta$', '$\\varphi$'], J: '|\\kJ(\\rho,\\theta,\\varphi)|=\\rho^{2}\\sin\\varphi', box: [[-1.6, 1.6], [-0.2, 3.3], [-0.1, 1.7]] },
    lin: { G: [[0, 1], [0, 2], [0, 1]], T: ([u, v, w]) => [u + v, 2 * v, 3 * w], names: ['$u$', '$v$', '$w$'], J: '\\kJ(u,v,w)=6', box: [[-0.1, 3.2], [-0.1, 4.2], [-0.1, 3.2]] },
  };
  const pickT = choice(d.controls, { label: '\\kT', options: [{ value: 'cyl', label: 'cylindrical' }, { value: 'sph', label: 'spherical' }, { value: 'lin', label: 'Example 15.73' }], value: 'lin', ms: 0 });
  const view = choice(d.controls, { label: 'show', options: [{ value: 'G', label: 'G' }, { value: 'D', label: 'D = T(G)' }], value: 'D' });
  let S = null, at = '';
  /* the six faces of the box G as grids, carried part way (k) from G to T(G) */
  function skin(t, k) {
    const M = (p) => { const q = t.T(p); return [0, 1, 2].map((i) => p[i] + (q[i] - p[i]) * k); }, g = t.G, n = 14, out = [];
    for (let a = 0; a < 3; a++) for (const side of [0, 1]) {
      const b = (a + 1) % 3, c = (a + 2) % 3;
      out.push(span(g[c][0], g[c][1], n).map((tc) => span(g[b][0], g[b][1], n).map((tb) => { const p = [0, 0, 0]; p[a] = g[a][side]; p[b] = tb; p[c] = tc; return M(p); })));
    }
    const edges = [];
    for (let a = 0; a < 3; a++) for (const s1 of [0, 1]) for (const s2 of [0, 1]) {
      const b = (a + 1) % 3, c = (a + 2) % 3;
      edges.push(span(g[a][0], g[a][1], 30).map((ta) => { const p = [0, 0, 0]; p[a] = ta; p[b] = g[b][s1]; p[c] = g[c][s2]; return M(p); }));
    }
    return { faces: out, edges };
  }
  function draw() {
    const t = TS[pickT.value];
    if (at !== pickT.value) { at = pickT.value; S?.v?.dispose?.(); d.stage.replaceChildren(); S = F.space3d(d, { box: t.box, h: 520, pitch: [0.1, 1.4] }); }
    const toD = view.value === 'D', k0 = view.from === undefined || view.from === view.value ? 1 : view.k, k = toD ? k0 : 1 - k0;
    const { faces, edges } = skin(t, k), rc = C('region');
    S.set('axes', SP.axes(t.box, { ticks: 1, names: k > 0.5 ? ['$x$', '$y$', '$z$'] : t.names }));
    S.set('solid', [...faces.map((rows) => ({ k: 'sheet', rows, color: rc, alpha: 0.45 })), ...edges.map((pts) => ({ k: 'line', pts, color: 'ink', w: 2.5 })),
      { k: 'label', s: k > 0.5 ? '$\\kD$' : '$\\kG$', p: edges[0][15], color: rc }]);
    tex(d.readout, `${t.J},\\qquad \\iiint_{\\kD}F\\,dV=\\iiint_{\\kG}\\kH(u,v,w)\\,|\\kJ|\\,du\\,dv\\,dw`);
  }
  still(d, draw);
})();
};
