/* Figures for section 12.1 Vectors in the Plane. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, headline, register, tex, fmt, hover, drag, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const vc = () => C('vector'), pc = () => C('point');
const guide = () => alpha(PAL.ink, 0.4);
const vtex = (a) => `\\langle ${a.map((x) => n(x, Number.isInteger(x) ? 0 : 2)).join(',')}\\rangle`;

/* an equal-scale frame: graph units in xr × yr at s canvas units each, centred at cx, top at t */
function frame(ctx, xr, yr, H, o = {}) {
  const s = Math.min((H - 140) / (yr[1] - yr[0]), 1100 / (xr[1] - xr[0])), cx = 700, t = 86;
  const w = (xr[1] - xr[0]) * s, h = (yr[1] - yr[0]) * s;
  return axes(ctx, { l: cx - w / 2, r: cx + w / 2, t, b: t + h }, xr, yr, { xl: 'x', yl: 'y', nx: xr[1] - xr[0], ny: yr[1] - yr[0], ...o });
}
/* an arrow between two graph points with its name beside its middle, on the left of the arrow's direction */
function vec(ctx, ax, a, b, color, name, o = {}) {
  const x1 = ax.X(a[0]), y1 = ax.Y(a[1]), x2 = ax.X(b[0]), y2 = ax.Y(b[1]);
  if (Math.hypot(x2 - x1, y2 - y1) < 2) { dot(ctx, x1, y1, color, true, 6); return; }
  ctx.save(); if (o.dash) ctx.setLineDash(o.dash);
  arrow(ctx, x1, y1, x2, y2, color, o.w ?? 5); ctx.restore();
  if (!name) return;
  const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L, ny = (x2 - x1) / L, side = o.side ?? 1, at = o.at ?? 0.55;
  text(ctx, name, x1 + (x2 - x1) * at - nx * 26 * side, y1 + (y2 - y1) * at - ny * 26 * side, color, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
}
/* an arrow on the bare canvas, in canvas units */
function cvec(ctx, x1, y1, x2, y2, color, name, side = 1, w = 5) {
  arrow(ctx, x1, y1, x2, y2, color, w);
  if (!name) return;
  const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L, ny = (x2 - x1) / L;
  text(ctx, name, (x1 + x2) / 2 - nx * 26 * side, (y1 + y2) / 2 - ny * 26 * side, color, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
}
const pt = (ctx, ax, p, name, dx = 14, dy = -18, align = 'left') => {
  dot(ctx, ax.X(p[0]), ax.Y(p[1]), pc(), true, 8);
  if (name) text(ctx, name, ax.X(p[0]) + dx, ax.Y(p[1]) + dy, pc(), { size: 22, weight: 600, align, tex: true, bg: PAL.panel });
};

/* Figure 12.2, a faithful copy: (a) one directed segment with its two points named, (b) five equal arrows. */
(function () {
  const d = sim('fig-vector', 380);
  still(d, () => {
    const { ctx } = begin(d.c);
    const v = vc(), p = pc();
    text(ctx, '(a)', 330, 350, PAL.muted, { size: 22, align: 'center' });
    text(ctx, '(b)', 1000, 350, PAL.muted, { size: 22, align: 'center' });
    cvec(ctx, 170, 270, 470, 90, v, '$\\kvecv$');
    dot(ctx, 170, 270, p, true, 9); dot(ctx, 470, 90, p, false, 9);
    text(ctx, 'initial point', 160, 300, p, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'terminal point', 480, 60, p, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    [[760, 250], [850, 300], [930, 220], [1010, 290], [1090, 240]].forEach(([x, y], i) => cvec(ctx, x, y, x + 110, y - 170, v, `$\\kvecv_{${i + 1}}$`, 1, 4));
  });
})();

/* Figure 12.3, a faithful copy: PQ from (1, 1) to (8, 5). Axes 0 to 9 by 0 to 6. */
(function () {
  const d = sim('fig-pq', 480);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [0, 9], [0, 6], 480);
    vec(ctx, ax, [1, 1], [8, 5], vc(), '$\\kPQ$');
    pt(ctx, ax, [1, 1], '$P(1,1)$', 14, 22); pt(ctx, ax, [8, 5], '$Q(8,5)$', 14, -18);
  });
})();

/* Figure 12.4: kv for the scalar k, v = ⟨2, 1⟩ fixed. Axes −5 to 7 by −3 to 4, which hold kv for k in [−2, 3]. */
(function () {
  const d = sim('sim-scalar-multiple', 520);
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: -2, max: 3, step: 0.05, value: 2, unit: '', dec: 2, detents: [{ v: 1, label: '1' }, { v: 2, label: '2' }, { v: 0.5, label: '½' }, { v: -1, label: '−1' }], specials: [{ at: 0 }] });
  const V = [2, 1], N = Math.hypot(...V);
  still(d, () => {
    const { ctx } = begin(d.c);
    const k = ks.v, ax = frame(ctx, [-5, 7], [-3, 4], 520), kv = [k * V[0], k * V[1]];
    vec(ctx, ax, [0, 0], V, alpha(vc(), 0.35), '$\\kvecv$', { side: -1, at: 0.8 });
    vec(ctx, ax, [0, 0], kv, vc(), `$${n(k)}\\kvecv$`, { at: 0.75 });
    headline(ctx, k === 0 ? '$k=0$: $k\\kvecv$ is the zero vector.' : k > 0 ? `$k=${n(k)}>0$: $k\\kvecv$ points the way $\\kvecv$ does, $${n(Math.abs(k))}$ times as long.` : `$k=${n(k)}<0$: $k\\kvecv$ points the opposite way, $${n(Math.abs(k))}$ times as long.`);
    tex(d.readout, `k\\kvecv=${n(k)}\\langle 2,1\\rangle=${vtex(kv)},\\qquad \\|k\\kvecv\\|=|k|\\,\\|\\kvecv\\|=${n(Math.abs(k))}\\cdot ${n(N, 3)}=${n(Math.abs(k) * N, 3)}`);
  });
})();

/* Figures 12.5 + 12.6: v and w dragged by their heads; their sum by the triangle or the parallelogram
   method, or their difference. Components −3 to 3, so sums and differences stay inside −6 to 6. */
(function () {
  const d = sim('sim-vector-sum', 700);
  const pick = choice(d.controls, { label: '', key: 'method', options: [{ value: 'tri', label: 'triangle method' }, { value: 'par', label: 'parallelogram method' }, { value: 'diff', label: 'difference' }], value: 'tri', aria: 'method' });
  const c = (label, key, v) => ctl(d.controls, { label, cls: 'vector', key, min: -3, max: 3, step: 0.5, value: v, unit: '', dec: 1 });
  const vx = c('v_1', 'vx', 1), vy = c('v_2', 'vy', 3), wx = c('w_1', 'wx', 2), wy = c('w_2', 'wy', -1);
  const P = drag(d, { x: vx, y: vy }), Q = drag(d, { x: wx, y: wy });
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-6, 6], [-6, 6], 700), m = pick.value, col = vc(), g = guide();
    const v = [vx.v, vy.v], w = [wx.v, wy.v], s = [v[0] + w[0], v[1] + w[1]], df = [v[0] - w[0], v[1] - w[1]];
    if (m === 'tri') {
      vec(ctx, ax, [0, 0], v, col, '$\\kvecv$'); vec(ctx, ax, v, s, col, '$\\kvecw$');
      vec(ctx, ax, [0, 0], s, col, '$\\kvecv+\\kvecw$', { side: -1, w: 6 });
    } else if (m === 'par') {
      line(ctx, ax.X(v[0]), ax.Y(v[1]), ax.X(s[0]), ax.Y(s[1]), g, 2.5, [10, 10]);
      line(ctx, ax.X(w[0]), ax.Y(w[1]), ax.X(s[0]), ax.Y(s[1]), g, 2.5, [10, 10]);
      vec(ctx, ax, [0, 0], v, col, '$\\kvecv$'); vec(ctx, ax, [0, 0], w, col, '$\\kvecw$', { side: -1 });
      vec(ctx, ax, [0, 0], s, col, '$\\kvecv+\\kvecw$', { w: 6, at: 0.7 });
    } else {
      vec(ctx, ax, v, df, alpha(col, 0.4), '$-\\kvecw$', { dash: [10, 8], w: 4 });
      vec(ctx, ax, [0, 0], v, col, '$\\kvecv$'); vec(ctx, ax, [0, 0], w, col, '$\\kvecw$', { side: -1 });
      vec(ctx, ax, w, v, col, '$\\kvecv-\\kvecw$', { w: 6 });
    }
    P.draw(ctx, ax, col); if (m !== 'tri') Q.draw(ctx, ax, col);
    const r = m === 'diff' ? df : s, nr = Math.hypot(...r), nv = Math.hypot(...v), nw = Math.hypot(...w);
    headline(ctx, m === 'diff' ? `$\\kvecv-\\kvecw=${vtex(df)}$ runs from the head of $\\kvecw$ to the head of $\\kvecv$.` : `$\\kvecv+\\kvecw=${vtex(s)}$, the same arrow by either method.`);
    tex(d.readout, m === 'diff'
      ? `\\kvecv-\\kvecw=\\langle ${n(v[0], 1)}-(${n(w[0], 1)}),${n(v[1], 1)}-(${n(w[1], 1)})\\rangle=${vtex(df)}`
      : `\\kvecv+\\kvecw=\\langle ${n(v[0], 1)}+(${n(w[0], 1)}),${n(v[1], 1)}+(${n(w[1], 1)})\\rangle=${vtex(s)},\\quad \\|\\kvecv+\\kvecw\\|=${n(nr)}\\le \\|\\kvecv\\|+\\|\\kvecw\\|=${n(nv + nw)}`);
  });
})();

/* Figures 12.7 + 12.8 + 12.9, a faithful copy: Example 12.2's v and w drawn for each part. */
(function () {
  const d = sim('fig-combining', 560);
  const pick = choice(d.controls, { label: '', key: 'part', options: [{ value: 'g', label: 'v and w' }, { value: 'a', label: 'a. 3w' }, { value: 'b', label: 'b. v + w' }, { value: 'c', label: 'c. 2v − w' }], value: 'g', aria: 'part of Example 12.2' });
  const V = [1.4, 2.8], W = [2, -1], S = 70;
  still(d, () => {
    const { ctx } = begin(d.c);
    const col = vc(), g = guide(), m = pick.value;
    const at = (o) => (p) => [o[0] + p[0] * S, o[1] - p[1] * S];
    const draw = (o, a, b, name, side = 1, w = 5) => { const T = at(o), A = T(a), B = T(b); cvec(ctx, A[0], A[1], B[0], B[1], col, name, side, w); };
    const pts = (o, ps) => ps.forEach((p) => { const q = at(o)(p); dot(ctx, q[0], q[1], PAL.ink, true, 6); });
    if (m === 'g') { draw([480, 420], [0, 0], V, '$\\kvecv$'); draw([780, 330], [0, 0], W, '$\\kvecw$', -1); pts([480, 420], [[0, 0]]); pts([780, 330], [[0, 0]]); }
    if (m === 'a') { draw([400, 220], [0, 0], W, '$\\kvecw$', -1); draw([640, 140], [0, 0], [3 * W[0], 3 * W[1]], '$3\\kvecw$', -1); }
    if (m === 'b') {
      const o1 = [330, 380], T = at(o1), s = [V[0] + W[0], V[1] + W[1]];
      [[V, s], [W, s]].forEach(([a, b]) => { const A = T(a), B = T(b); line(ctx, A[0], A[1], B[0], B[1], g, 2.5, [10, 10]); });
      draw(o1, [0, 0], V, '$\\kvecv$'); draw(o1, [0, 0], W, '$\\kvecw$', -1); draw(o1, [0, 0], s, '$\\kvecv+\\kvecw$', 1, 6); pts(o1, [[0, 0]]);
      const o2 = [860, 440]; draw(o2, [0, 0], V, '$\\kvecv$'); draw(o2, V, s, '$\\kvecw$'); draw(o2, [0, 0], s, '$\\kvecv+\\kvecw$', -1, 6); pts(o2, [[0, 0], V]);
      text(ctx, '(a)', 400, 530, PAL.muted, { size: 22, align: 'center' }); text(ctx, '(b)', 960, 530, PAL.muted, { size: 22, align: 'center' });
    }
    if (m === 'c') {
      const o = [560, 525], v2 = [2 * V[0], 2 * V[1]], e = [v2[0] - W[0], v2[1] - W[1]];
      draw(o, [0, 0], v2, '$2\\kvecv$', -1); draw(o, v2, e, '$-\\kvecw$', -1); draw(o, [0, 0], e, '$2\\kvecv-\\kvecw$', 1, 6); pts(o, [[0, 0], v2]);
    }
  });
})();

/* Figures 12.10 and 12.11, faithful copies of Example 12.3's two pairs. */
function pair(id, xr, yr, H, v, w) {
  const d = sim(id, H);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, xr, yr, H);
    vec(ctx, ax, v[0], v[1], vc(), '$\\kvecv$'); vec(ctx, ax, w[0], w[1], vc(), '$\\kvecw$', { side: -1 });
    [v, w].forEach((u) => dot(ctx, ax.X(u[0][0]), ax.Y(u[0][1]), pc(), true, 7));
  });
}
pair('fig-not-equivalent', [-1, 8], [-5, 3], 560, [[3, 2], [7, 2]], [[1, -4], [1, 0]]);
pair('fig-equivalent', [-3, 2], [-1, 4], 500, [[0, 0], [1, 1]], [[-2, 2], [-1, 3]]);

/* Figures 12.12 + 12.14: a vector from (xᵢ, yᵢ) to (xₜ, yₜ) and the equivalent vector in standard position.
   Axes −4 to 14 both ways, which hold Example 12.4's and Example 12.5's points and every drag. */
(function () {
  const d = sim('sim-component-form', 720);
  const EX = { a: [[-3, 4], [1, 2]], b: [[2, 5], [8, 13]] };
  const pick = choice(d.controls, { label: '', key: 'example', options: [{ value: 'a', label: 'Example 12.4' }, { value: 'b', label: 'Example 12.5' }], value: 'a', aria: 'example', onInput: (k) => { const [i, t] = EX[k]; xi.set(i[0]); yi.set(i[1]); xt.set(t[0]); yt.set(t[1]); } });
  const c = (label, key, v) => ctl(d.controls, { label, cls: '', key, min: -4, max: 14, step: 0.5, value: v, unit: '', dec: 1 });
  const xi = c('x_i', 'xi', -3), yi = c('y_i', 'yi', 4), xt = c('x_t', 'xt', 1), yt = c('y_t', 'yt', 2);
  const A = drag(d, { x: xi, y: yi }), B = drag(d, { x: xt, y: yt });
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-4, 14], [-4, 14], 720, { nx: 9, ny: 9 }), col = vc(), g = guide();
    const p = [xi.v, yi.v], q = [xt.v, yt.v], v = [q[0] - p[0], q[1] - p[1]];
    const legs = (o, lab) => {
      line(ctx, ax.X(o[0]), ax.Y(o[1]), ax.X(o[0] + v[0]), ax.Y(o[1]), g, 2.5, [4, 8]);
      line(ctx, ax.X(o[0] + v[0]), ax.Y(o[1]), ax.X(o[0] + v[0]), ax.Y(o[1] + v[1]), g, 2.5, [4, 8]);
      if (!lab) return;
      if (Math.abs(v[0]) > 0.6) text(ctx, `${n(Math.abs(v[0]), 1)} units`, ax.X(o[0] + v[0] / 2), ax.Y(o[1]) + (v[1] > 0 ? 20 : -20), PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
      if (Math.abs(v[1]) > 0.6) text(ctx, `${n(Math.abs(v[1]), 1)} units`, ax.X(o[0] + v[0]) + (v[0] > 0 ? 10 : -10), ax.Y(o[1] + v[1] / 2), PAL.muted, { size: 17, align: v[0] > 0 ? 'left' : 'right', bg: PAL.panel });
    };
    legs(p, true); legs([0, 0], false);
    vec(ctx, ax, [0, 0], v, alpha(col, 0.55), `$${vtex(v)}$`, { side: -1 });
    vec(ctx, ax, p, q, col, '$\\kvecv$');
    A.draw(ctx, ax, pc()); B.draw(ctx, ax, pc());
    headline(ctx, `$\\kvecv=${vtex(v)}$ wherever its initial point sits.`);
    tex(d.readout, `\\kvecv=\\langle x_{t}-x_{i},y_{t}-y_{i}\\rangle=\\langle ${n(q[0], 1)}-(${n(p[0], 1)}),${n(q[1], 1)}-(${n(p[1], 1)})\\rangle=${vtex(v)}`);
  });
})();

/* Figures 12.13 + 12.15 + 12.16: the components as the legs of a right triangle. Axes −6 to 6 both ways. */
(function () {
  const d = sim('sim-magnitude-direction', 700);
  const ms = ctl(d.controls, { label: '\\|\\kvecv\\|', cls: '', key: 'm', min: 0, max: 6, step: 0.1, value: 4, unit: '', dec: 1 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: -180, max: 180, step: 1, value: -45, unit: '°', dec: 0, detents: [-150, -120, -90, -60, -45, -30, 0, 30, 45, 60, 90, 120, 150] });
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-6, 6], [-6, 6], 700), col = vc(), g = guide();
    const th = (ts.v * Math.PI) / 180, m = ms.v, x = m * Math.cos(th), y = m * Math.sin(th);
    line(ctx, ax.X(0), ax.Y(0), ax.X(x), ax.Y(0), g, 3, [4, 8]); line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(y), g, 3, [4, 8]);
    if (Math.abs(x) > 0.5) text(ctx, '$\\|\\kvecv\\|\\cos\\ktheta$', ax.X(x / 2), ax.Y(0) + (y < 0 ? -22 : 22), PAL.ink, { size: 20, align: 'center', tex: true, bg: PAL.panel });
    if (Math.abs(y) > 0.5) text(ctx, '$\\|\\kvecv\\|\\sin\\ktheta$', ax.X(x) + (x < 0 ? -12 : 12), ax.Y(y / 2), PAL.ink, { size: 20, align: x < 0 ? 'right' : 'left', tex: true, bg: PAL.panel });
    if (m > 0.3 && Math.abs(th) > 0.05) { angleArc(ctx, { x: ax.X(0), y: ax.Y(0) }, 46, Math.min(0, th), Math.max(0, th), undefined, undefined, C('angle')); text(ctx, '$\\ktheta$', ax.X(0) + 72 * Math.cos(th / 2), ax.Y(0) - 72 * Math.sin(th / 2), C('angle'), { size: 22, align: 'center', tex: true, bg: PAL.panel }); }
    vec(ctx, ax, [0, 0], [x, y], col, '$\\kvecv$', { side: y < 0 ? 1 : -1 });
    headline(ctx, `$\\kvecv=\\langle ${n(x)},${n(y)}\\rangle$, the legs of a right triangle with hypotenuse $\\|\\kvecv\\|=${n(m, 1)}$.`);
    tex(d.readout, `x=\\|\\kvecv\\|\\cos\\ktheta=${n(m, 1)}\\cos(${ts.v}^{\\circ})=${n(x)},\\quad y=\\|\\kvecv\\|\\sin\\ktheta=${n(y)},\\quad \\sqrt{x^{2}+y^{2}}=${n(Math.hypot(x, y))}`);
  });
})();

/* Figures 12.17 + 12.20: v dragged by its head; its unit vector on the unit circle. Axes −4 to 4 both ways. */
(function () {
  const d = sim('sim-unit-vector', 680);
  const c = (label, key, v) => ctl(d.controls, { label, cls: 'vector', key, min: -4, max: 4, step: 0.1, value: v, unit: '', dec: 1 });
  const xs = c('v_1', 'vx', 1), ys = c('v_2', 'vy', 2);
  const P = drag(d, { x: xs, y: ys });
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-4, 4], [-4, 4], 680), col = vc();
    ctx.save(); ctx.strokeStyle = guide(); ctx.lineWidth = 2.5; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(ax.X(0), ax.Y(0), ax.X(1) - ax.X(0), 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    const v = [xs.v, ys.v], N = Math.hypot(...v);
    if (N < 1e-9) { P.draw(ctx, ax, col); headline(ctx, 'The zero vector has no direction, so it has no unit vector.'); tex(d.readout, '\\kvecv=\\kveczero'); return; }
    const u = [v[0] / N, v[1] / N];
    vec(ctx, ax, [0, 0], v, alpha(col, 0.55), '$\\kvecv$', { side: -1, at: 0.8 });
    vec(ctx, ax, [0, 0], u, col, '$\\kvecu$', { w: 6, at: 0.5 });
    dot(ctx, ax.X(u[0]), ax.Y(u[1]), pc(), true, 7);
    { const px = -u[1], py = u[0], sd = 0.62; text(ctx, '$(\\cos\\ktheta,\\sin\\ktheta)$', ax.X(u[0] - px * sd), ax.Y(u[1] - py * sd), pc(), { size: 20, align: 'center', tex: true, bg: PAL.panel }); }
    P.draw(ctx, ax, col);
    headline(ctx, `$\\kvecu=\\frac{1}{\\|\\kvecv\\|}\\kvecv$ has length 1 however long $\\kvecv$ is.`);
    tex(d.readout, `\\kvecu=\\frac{1}{${n(N, 3)}}${vtex(v.map((x) => +x.toFixed(1)))}=${vtex(u)},\\quad \\|\\kvecu\\|=1`);
  });
})();

/* Figures 12.18 + 12.19: i, j and v = xi + yj as its horizontal and vertical legs. Axes −5 to 5 both ways. */
(function () {
  const d = sim('sim-standard-unit', 680);
  const c = (label, key, v) => ctl(d.controls, { label, cls: '', key, min: -4, max: 4, step: 0.5, value: v, unit: '', dec: 1 });
  const xs = c('x', 'x', 3), ys = c('y', 'y', -4);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-5, 5], [-5, 5], 680), col = vc(), x = xs.v, y = ys.v;
    if (x) vec(ctx, ax, [0, 0], [x, 0], alpha(col, 0.6), `$${n(x, 1)}\\kveci$`, { side: y > 0 ? -1 : 1, w: 4 });
    if (y) vec(ctx, ax, [x, 0], [x, y], alpha(col, 0.6), `$${n(y, 1)}\\kvecj$`, { side: x > 0 ? -1 : 1, w: 4 });
    vec(ctx, ax, [0, 0], [1, 0], col, '$\\kveci$', { side: -1, w: 6 }); vec(ctx, ax, [0, 0], [0, 1], col, '$\\kvecj$', { w: 6 });
    if (x || y) vec(ctx, ax, [0, 0], [x, y], col, '$\\kvecv$', { side: x * y > 0 ? -1 : 1 });
    headline(ctx, `$\\kvecv=\\langle ${n(x, 1)},${n(y, 1)}\\rangle$ is ${n(Math.abs(x), 1)} of $\\kveci$ across and ${n(Math.abs(y), 1)} of $\\kvecj$ ${y < 0 ? 'down' : 'up'}.`);
    tex(d.readout, `\\kvecv=\\langle ${n(x, 1)},${n(y, 1)}\\rangle=${n(x, 1)}\\langle 1,0\\rangle+${y < 0 ? `(${n(y, 1)})` : n(y, 1)}\\langle 0,1\\rangle=${n(x, 1)}\\kveci${y < 0 ? '-' : '+'}${n(Math.abs(y), 1)}\\kvecj`);
  });
})();

/* Figure 12.21: the truck's pull along +x and the push at an angle above it, and their sum. 1.1 canvas
   units a pound from the car's front, so the largest sum (800 lb) stays on the canvas. */
(function () {
  const d = sim('sim-resultant-force', 460);
  const pull = ctl(d.controls, { label: 'pull', cls: 'vector', key: 'pull', min: 100, max: 500, step: 10, value: 300, unit: ' lb', dec: 0 });
  const push = ctl(d.controls, { label: 'push', cls: 'vector', key: 'push', min: 0, max: 300, step: 10, value: 150, unit: ' lb', dec: 0 });
  const ang = ctl(d.controls, { label: 'angle', cls: 'angle', key: 'angle', min: 0, max: 60, step: 1, value: 15, unit: '°', dec: 0 });
  still(d, () => {
    const { ctx } = begin(d.c);
    const col = vc(), g = guide(), K = 1.1, ox = 290, oy = 330, th = (ang.v * Math.PI) / 180;
    F.car(ctx, 200, oy + 6, alpha(PAL.ink, 0.35), 2);
    line(ctx, 60, oy + 40, 1360, oy + 40, alpha(PAL.ink, 0.25), 2);
    const a = [pull.v, 0], b = [push.v * Math.cos(th), push.v * Math.sin(th)], r = [a[0] + b[0], a[1] + b[1]];
    const X = (p) => ox + p[0] * K, Y = (p) => oy - p[1] * K;
    line(ctx, X(a), Y(a), X(r), Y(r), g, 2.5, [10, 10]); line(ctx, X(b), Y(b), X(r), Y(r), g, 2.5, [10, 10]);
    cvec(ctx, ox, oy, X(a), Y(a), col, `$${pull.v}$ lb`, -1);
    if (push.v) cvec(ctx, ox, oy, X(b), Y(b), col, `$${push.v}$ lb`, 1);
    if (push.v && th > 0.02) { angleArc(ctx, { x: ox, y: oy }, 90, 0, th, undefined, undefined, C('angle')); text(ctx, `$${ang.v}^{\\circ}$`, ox + 118 * Math.cos(th / 2), oy - 118 * Math.sin(th / 2), C('angle'), { size: 20, align: 'left', tex: true, bg: PAL.panel }); }
    cvec(ctx, ox, oy, X(r), Y(r), col, '$\\kvecr$', 1, 7);
    const R = Math.hypot(...r), dir = (Math.atan2(r[1], r[0]) * 180) / Math.PI;
    headline(ctx, `The resultant force is about ${n(R, 1)} lb at ${n(dir, 1)}° above the horizontal.`);
    tex(d.readout, `\\|\\kvecr\\|=\\sqrt{(${pull.v}+${push.v}\\cos ${ang.v}^{\\circ})^{2}+(${push.v}\\sin ${ang.v}^{\\circ})^{2}}\\approx ${n(R, 1)},\\quad \\tan\\ktheta=\\frac{${push.v}\\sin ${ang.v}^{\\circ}}{${pull.v}+${push.v}\\cos ${ang.v}^{\\circ}}\\approx ${n(Math.tan((dir * Math.PI) / 180), 3)}`);
  });
})();

/* Figure 12.22: the plane's velocity due west, the wind blowing from a compass bearing, and the ground
   velocity by the triangle method; 0.9 canvas units per mph from the plane at the right. */
(function () {
  const d = sim('sim-ground-speed', 520);
  const air = ctl(d.controls, { label: 'airspeed', cls: 'vector', key: 'air', min: 300, max: 600, step: 5, value: 425, unit: ' mph', dec: 0 });
  const wind = ctl(d.controls, { label: 'wind', cls: 'vector', key: 'wind', min: 0, max: 150, step: 5, value: 40, unit: ' mph', dec: 0 });
  const from = ctl(d.controls, { label: 'wind from', cls: 'angle', key: 'from', min: 0, max: 355, step: 5, value: 45, unit: '°', dec: 0, detents: [0, 45, 90, 135, 180, 225, 270, 315] });
  const COMPASS = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  still(d, () => {
    const { ctx } = begin(d.c);
    const col = vc(), K = 0.9, ox = 1060, oy = 230;
    const b = (from.v * Math.PI) / 180, w = [-wind.v * Math.sin(b), -wind.v * Math.cos(b)], p = [-air.v, 0], g = [p[0] + w[0], p[1] + w[1]];
    const X = (q) => ox + q[0] * K, Y = (q) => oy - q[1] * K;
    [['N', 0, -1], ['S', 0, 1], ['E', 1, 0], ['W', -1, 0]].forEach(([s, dx, dy]) => {
      line(ctx, 1260, 420, 1260 + dx * 50, 420 + dy * 50, alpha(PAL.ink, 0.4), 2);
      text(ctx, s, 1260 + dx * 70, 420 + dy * 70, PAL.muted, { size: 17, align: 'center' });
    });
    ctx.save(); ctx.translate(ox + 70, oy); ctx.scale(-1, 1); F.plane(ctx, 0, 0, alpha(PAL.ink, 0.35), 1.1); ctx.restore();
    cvec(ctx, ox, oy, X(p), Y(p), col, '$\\kvecp$', -1);
    if (wind.v) cvec(ctx, X(p), Y(p), X(g), Y(g), col, '$\\kvecw$', 1, 4);
    if (wind.v) cvec(ctx, ox, oy, X(g), Y(g), col, '$\\kvecp+\\kvecw$', 1, 6);
    const G = Math.hypot(...g), off = (Math.atan2(g[1], -g[0]) * 180) / Math.PI;
    const side = Math.abs(off) < 0.005 ? 'due west' : `${n(Math.abs(off), 2)}° ${off < 0 ? 'south' : 'north'} of west`;
    const named = from.v % 45 === 0 ? ` from the ${COMPASS[from.v / 45]}` : ` from ${from.v}°`;
    headline(ctx, `With the wind${named}, the ground speed is about ${n(G, 2)} mph, ${side}.`);
    tex(d.readout, `\\|\\kvecp+\\kvecw\\|=\\sqrt{(${n(g[0], 2)})^{2}+(${n(g[1], 2)})^{2}}\\approx ${n(G, 2)}\\;\\text{mph}`);
  });
})();
};
