/* Figures for section 12.2 Vectors in Three Dimensions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const PITCH = [-0.2, 1.4];
const live = (d, box, o = {}) => F.space3d(d, { box, h: 520, pitch: PITCH, fit: 3.2, ...o });
const locked = (d, box, o = {}) => F.space3d(d, { box, h: 480, locked: true, fit: 3.4, ...o });
const seg = (a, b, color, w = 2.5, dash) => ({ k: 'line', pts: [a, b], color, w, dash });
/* the twelve edges of the box with opposite corners a and b, dashed */
function boxEdges(a, b, color = 'guide') {
  const c = (i, j, k) => [[a[0], b[0]][i], [a[1], b[1]][j], [a[2], b[2]][k]], out = [];
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    out.push(seg(c(i, j, 0), c(i, j, 1), color, 2.5, [4, 8]), seg(c(i, 0, j), c(i, 1, j), color, 2.5, [4, 8]), seg(c(0, i, j), c(1, i, j), color, 2.5, [4, 8]));
  }
  return out;
}
const sphere = (c, r) => (u, v) => [c[0] + r * Math.sin(v) * Math.cos(u), c[1] + r * Math.sin(v) * Math.sin(u), c[2] + r * Math.cos(v)];
const label = (s, p, color) => ({ k: 'label', s, p, color });
const vt = (a, dec = 2) => `\\langle ${a.map((x) => n(x, Number.isInteger(x) ? 0 : dec)).join(',')}\\rangle`;

/* Figure 12.23: the axes and the right hand's curl from +x round to +y about +z. Box −1 to 3 each way. */
(function () {
  const d = sim('sim-axes');
  const box = [[-1, 3], [-1, 3], [-1, 3.6]];
  const S = live(d, box, { fit: 2.6 });
  S.headline('Fingers along $x$ curl toward $y$; the thumb points along $z$.');
  still(d, () => {
    const curl = [];
    for (let i = 0; i <= 40; i++) { const t = (i / 40) * (Math.PI / 2) * 0.92; curl.push([1.3 * Math.cos(t), 1.3 * Math.sin(t), 1.4]); }
    const L = curl.length;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('hand', [
      { k: 'line', pts: curl, color: 'ink', w: 5 }, { k: 'arrow', a: curl[L - 3], b: [1.3 * Math.cos(Math.PI / 2), 1.3 * Math.sin(Math.PI / 2), 1.4], color: 'ink', w: 5 },
      { k: 'arrow', a: [0, 0, 1.6], b: [0, 0, 2.7], color: 'ink', w: 6 },
      label('fingers', [1.25, 0.6, 1.65], 'ink'), label('thumb', [0, 0.15, 2.85], 'ink'),
    ]);
  });
})();

/* Figures 12.24 + 12.25: the point (x, y, z) at the far corner of its box from the origin. Box −4 to 4 each way. */
(function () {
  const d = sim('sim-point-in-space');
  const box = [[-4, 4], [-4, 4], [-4, 4]];
  const S = live(d, box);
  const c = (label, key, v) => ctl(d.controls, { label, cls: '', key, min: -4, max: 4, step: 0.5, value: v, unit: '', dec: 1 });
  const xs = c('x', 'x', 1), ys = c('y', 'y', -2), zs = c('z', 'z', 3);
  const OCT = { '+++': 'I', '-++': 'II', '--+': 'III', '+-+': 'IV', '++-': 'V', '-+-': 'VI', '---': 'VII', '+--': 'VIII' };
  still(d, () => {
    const p = [xs.v, ys.v, zs.v], key = p.map((v) => (v > 0 ? '+' : '-')).join('');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('box', boxEdges([0, 0, 0], p));
    S.set('pt', SP.point(p, C('point'), { name: `$(${n(p[0], 1)},${n(p[1], 1)},${n(p[2], 1)})$` }));
    const where = p.some((v) => v === 0) ? 'on a coordinate plane, in no octant' : `in octant ${OCT[key]}`;
    tex(d.readout, `(x,y,z)=(${n(p[0], 1)},${n(p[1], 1)},${n(p[2], 1)}):\\ \\text{${n(Math.abs(p[0]), 1)} along }x,\\ \\text{${n(Math.abs(p[1]), 1)} along }y,\\ \\text{${n(Math.abs(p[2]), 1)} along }z,\\ \\text{${where}}`);
  });
})();

/* Figures 12.26 + 12.27, a faithful copy: the three coordinate planes and the eight octants with their signs. */
(function () {
  const d = sim('fig-octants');
  const box = [[-3, 3], [-3, 3], [-3, 3]];
  const S = locked(d, box);
  still(d, () => {
    const pl = C('plane'), sq = (f) => [[-2.5, -2.5], [2.5, -2.5], [2.5, 2.5], [-2.5, 2.5]].map(([a, b]) => f(a, b));
    S.set('axes', SP.axes(box, { ticks: 0 }));
    S.set('planes', [
      { k: 'faces', faces: [sq((a, b) => [a, b, 0])], color: pl, alpha: 0.18 }, { k: 'faces', faces: [sq((a, b) => [a, 0, b])], color: pl, alpha: 0.18 }, { k: 'faces', faces: [sq((a, b) => [0, a, b])], color: pl, alpha: 0.18 },
      label('$xy$-plane', [2.4, 2.4, 0], pl), label('$xz$-plane', [2.4, 0, 2.4], pl), label('$yz$-plane', [0, 2.4, 2.4], pl),
    ]);
    const OCT = [['I', 1, 1, 1], ['II', -1, 1, 1], ['III', -1, -1, 1], ['IV', 1, -1, 1], ['V', 1, 1, -1], ['VI', -1, 1, -1], ['VII', -1, -1, -1], ['VIII', 1, -1, -1]];
    const sg = (v) => (v > 0 ? '+' : '-');
    S.set('oct', OCT.map(([s, a, b, c]) => label(`$${s}\\ (${sg(a)},${sg(b)},${sg(c)})$`, [2 * a, 2 * b, 2 * c], C('region'))));
  });
})();

/* Figures 12.28 + 12.29: P₁ = (3, −1, 5) fixed and P₂ by sliders at opposite corners of a box; d₁ across its base. */
(function () {
  const d = sim('sim-distance');
  const box = [[-4, 6], [-4, 6], [-4, 6]], P1 = [3, -1, 5];
  const S = live(d, box);
  const c = (label, key, v) => ctl(d.controls, { label, cls: '', key, min: -4, max: 6, step: 0.5, value: v, unit: '', dec: 1 });
  const xs = c('x_2', 'x2', 2), ys = c('y_2', 'y2', 1), zs = c('z_2', 'z2', -1);
  still(d, () => {
    const P2 = [xs.v, ys.v, zs.v], M = [P2[0], P2[1], P1[2]], dz = Math.abs(P2[2] - P1[2]);
    const d1 = Math.hypot(P2[0] - P1[0], P2[1] - P1[1]), D = Math.hypot(d1, dz);
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('box', boxEdges(P1, P2));
    S.set('parts', [seg(P1, M, 'ink', 3), seg(M, P2, 'ink', 3), seg(P1, P2, 'ink', 5), label('$d_{1}$', SP.mul(SP.add(P1, M), 0.5), 'ink'), label('$d$', SP.mul(SP.add(P1, P2), 0.5), 'ink'),
      ...SP.point(P1, C('point'), { name: '$P_{1}$' }), ...SP.point(P2, C('point'), { name: '$P_{2}$' })]);
    tex(d.readout, `d=\\sqrt{(${n(P2[0], 1)}-3)^{2}+(${n(P2[1], 1)}+1)^{2}+(${n(P2[2], 1)}-5)^{2}}=\\sqrt{${n(D * D, 2)}}\\approx ${n(D, 2)},\\quad d_{1}=${n(d1, 2)},\\ |z_{2}-z_{1}|=${n(dz, 1)}`);
  });
})();

/* Figure 12.30, a faithful copy: the line z = 3 along y and the line y = 2 along x, neither parallel nor meeting. */
(function () {
  const d = sim('fig-lines-not-meeting');
  const box = [[-1, 4], [-1, 4], [-1, 4]];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('lines', [...SP.line([0, 0, 3], [0, 1, 0], C('line'), { box }), ...SP.line([0, 2, 0], [1, 0, 0], C('line'), { box }),
      label('$z=3$', [0, 3.3, 3], C('line')), label('$y=2$', [3.3, 2, 0], C('line'))]);
  });
})();

/* Figure 12.31, a faithful copy: the circle of radius 2 about the z-axis at z = 1 and the vertical circle on [0, 6] of the x-axis. */
(function () {
  const d = sim('fig-linked-circles');
  const box = [[-2.5, 6.5], [-2.5, 2.5], [-3.5, 3.5]];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 0 }));
    S.set('marks', [label('$6$', [6, 0, -0.4], 'muted')]);
    S.set('circles', [{ k: 'line', pts: SP.circle([0, 0, 1], [0, 0, 1], 2), color: C('curve'), w: 5 }, { k: 'line', pts: SP.circle([3, 0, 0], [0, 1, 0], 3), color: C('curve'), w: 5 }]);
  });
})();

/* Figure 12.32, a faithful copy: x = 0 in ℝ (a point), in ℝ² (the y-axis) and in ℝ³ (the yz-plane). */
(function () {
  const d = sim('fig-x-equals-zero', 300);
  const box = [[-2, 2], [-2, 2], [-2, 2]];
  const S = locked(d, box, { h: 360 });
  still(d, () => {
    const { ctx } = begin(d.c);
    line(ctx, 120, 150, 560, 150, PAL.muted, 2.5); [-2, -1, 0, 1, 2].forEach((v) => { line(ctx, 340 + v * 100, 142, 340 + v * 100, 158, PAL.muted, 2); text(ctx, fmt(v, 0), 340 + v * 100, 182, PAL.muted, { size: 17, align: 'center' }); });
    dot(ctx, 340, 150, C('point'), true, 9);
    text(ctx, '(a) $x=0$ in $\\mathbb{R}$', 340, 260, PAL.muted, { size: 20, align: 'center', tex: true });
    const ax = axes(ctx, { l: 860, r: 1100, t: 30, b: 240 }, [-2, 2], [-2, 2], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    line(ctx, ax.X(0), ax.Y(-2), ax.X(0), ax.Y(2), C('line'), 5);
    text(ctx, '(b) $x=0$ in $\\mathbb{R}^{2}$', 980, 280, PAL.muted, { size: 20, align: 'center', tex: true });
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('plane', [...SP.plane([0, 0, 0], [1, 0, 0], C('plane'), { size: 1.8, alpha: 0.35 }), label('(c) $x=0$ in $\\mathbb{R}^{3}$', [0, 0, -2.6], PAL.muted)]);
  });
})();

/* Figure 12.33: the plane x = c, y = c or z = c parallel to its coordinate plane; c = 0 is the coordinate plane. Box ±3. */
(function () {
  const d = sim('sim-plane-x-equals-c');
  const box = [[-3, 3], [-3, 3], [-3, 3]];
  const S = locked(d, box);
  const pick = choice(d.controls, { label: '', key: 'var', options: [{ value: 'z', label: 'z = c' }, { value: 'y', label: 'y = c' }, { value: 'x', label: 'x = c' }], value: 'z', aria: 'variable held constant', ms: 0 });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -3, max: 3, step: 0.1, value: 0, unit: '', dec: 1, specials: [{ at: 0 }] });
  const NAME = { z: 'xy', y: 'xz', x: 'yz' }, NORM = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
  still(d, () => {
    const v = pick.value, c = cs.v, nrm = NORM[v], p = SP.mul(nrm, c);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('plane', SP.plane(p, nrm, C('plane'), { box, alpha: 0.4 }));
    S.headline(c === 0 ? `$${v}=0$ is the $${NAME[v]}$-plane.` : `$${v}=${n(c, 1)}$ is parallel to the $${NAME[v]}$-plane.`);
    tex(d.readout, `\\{(x,y,z): ${v}=${n(c, 1)}\\}`);
  });
})();

/* Figures 12.34 + 12.35: the sphere with center (a, b, c) through the fixed point (−1, 3, −2). */
(function () {
  const d = sim('sim-sphere');
  const box = [[-16, 26], [-14, 26], [-16, 26]], Q = [-1, 3, -2];
  const S = locked(d, box, { h: 520, turn: -1.6 });
  const c = (label, key, min, max, v) => ctl(d.controls, { label, cls: '', key, min, max, step: 0.5, value: v, unit: '', dec: 1 });
  const as = c('a', 'a', 6, 14, 10), bs = c('b', 'b', 3, 11, 7), cs = c('c', 'c', 0, 8, 4);
  still(d, () => {
    const C0 = [as.v, bs.v, cs.v], r2 = (Q[0] - C0[0]) ** 2 + (Q[1] - C0[1]) ** 2 + (Q[2] - C0[2]) ** 2, r = Math.sqrt(r2);
    S.set('axes', SP.axes(box, { ticks: 10 }));
    S.set('sphere', SP.surface(sphere(C0, r), [0, 2 * Math.PI], [0.02, Math.PI - 0.02], C('surface'), { n: [36, 18], grid: 6, alpha: 0.35 }));
    S.set('pts', [seg(C0, Q, 'ink', 3, [10, 10]), label('$r$', SP.mul(SP.add(C0, Q), 0.5), 'ink'), ...SP.point(C0, C('point'), { name: '$C$' }), ...SP.point(Q, C('point'), { name: '$(-1,3,-2)$' })]);
    const sq = (s, v) => (v < 0 ? `(${s}+${n(-v, 1)})` : `(${s}-${n(v, 1)})`);
    tex(d.readout, `${sq('x', C0[0])}^{2}+${sq('y', C0[1])}^{2}+${sq('z', C0[2])}^{2}=${n(r2, 2)},\\quad r\\approx ${n(r, 2)}`);
  });
})();

/* Figure 12.36, a faithful copy: the segment PQ, P = (−5, 2, 3), Q = (3, 4, −1). */
(function () {
  const d = sim('fig-diameter');
  const box = [[-6, 4], [-1, 5], [-2, 4]], P = [-5, 2, 3], Q = [3, 4, -1];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('seg', [seg(P, Q, 'ink', 4), ...SP.point(P, C('point'), { name: '$P=(-5,2,3)$' }), ...SP.point(Q, C('point'), { name: '$Q=(3,4,-1)$' })]);
  });
})();

/* Figure 12.37, a faithful copy: the planes x = 4 and z = 2. */
(function () {
  const d = sim('fig-two-planes');
  const box = [[-1, 6], [-1, 6], [-1, 4]];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('planes', [...SP.plane([4, 0, 0], [1, 0, 0], C('plane'), { box, alpha: 0.35 }), ...SP.plane([0, 0, 2], [0, 0, 1], C('plane'), { box, alpha: 0.35 }),
      label('$x=4$', [4, 5.5, 3.6], C('plane')), label('$z=2$', [0.2, 5.5, 2], C('plane'))]);
  });
})();

/* Figure 12.38, a faithful copy: the cylinder (x − 2)² + (y − 1)² = 4 about the line x = 2, y = 1. */
(function () {
  const d = sim('fig-cylinder-21');
  const box = [[-1, 5], [-2, 4], [-2, 4]];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('cyl', [...SP.surface((u, v) => [2 + 2 * Math.cos(u), 1 + 2 * Math.sin(u), v], [0, 2 * Math.PI], [-2, 4], C('surface'), { n: [48, 6], grid: 8, alpha: 0.45 }),
      ...SP.line([2, 1, 0], [0, 0, 1], 'guide', { box, w: 2.5, dash: [10, 10] })]);
  });
})();

/* Figures 12.39 + 12.41: v = ⟨x, y, z⟩ with its components laid along the axes, w = ⟨1, −2, 2⟩ and their sum. */
(function () {
  const d = sim('sim-vector-in-space');
  const box = [[-4, 5], [-6, 5], [-4, 6]], W = [1, -2, 2];
  const S = live(d, box);
  const c = (label, key, v) => ctl(d.controls, { label, cls: 'vector', key, min: -4, max: 4, step: 0.5, value: v, unit: '', dec: 1 });
  const xs = c('x', 'x', 2), ys = c('y', 'y', 4), zs = c('z', 'z', 1);
  still(d, () => {
    const v = [xs.v, ys.v, zs.v], s = SP.add(v, W), col = C('vector');
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('vw', [...SP.vector([0, 0, 0], v, col, { name: '$\\kvecv$', drop: true }), ...SP.vector([0, 0, 0], W, col, { name: '$\\kvecw$' }),
      seg(v, s, 'guide', 2.5, [10, 10]), seg(W, s, 'guide', 2.5, [10, 10]), ...SP.vector([0, 0, 0], s, col, { name: '$\\kvecv+\\kvecw$', w: 6 })]);
    const N = Math.hypot(...v), term = (k, e, first) => (k === 0 ? '' : `${k < 0 ? '-' : first ? '' : '+'}${Math.abs(k) === 1 ? '' : n(Math.abs(k), 1)}${e}`);
    const ijk = [term(v[0], '\\kveci', true), term(v[1], '\\kvecj', !v[0]), term(v[2], '\\kveck', !v[0] && !v[1])].join('') || '\\kveczero';
    tex(d.readout, `\\kvecv=${vt(v, 1)}=${ijk},\\quad \\|\\kvecv\\|=${n(N, 3)},\\quad \\kvecv+\\kvecw=${vt(s, 1)}`);
  });
})();

/* Figures 12.40 and 12.42, faithful copies: PQ from P(3, 12, 6) to Q(−4, −3, 2); v = ⟨−2, 9, 5⟩ and w = ⟨1, −1, 0⟩. */
(function () {
  const d = sim('fig-pq-space');
  const box = [[-5, 4], [-4, 13], [0, 7]], P = [3, 12, 6], Q = [-4, -3, 2];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('pq', [...SP.vector(P, Q, C('vector')), label('$\\kPQ$', SP.add(SP.mul(SP.add(P, Q), 0.5), [0, 0, 0.8]), C('vector')), ...SP.point(P, C('point'), { name: '$P=(3,12,6)$' }), ...SP.point(Q, C('point'), { name: '$Q=(-4,-3,2)$' })]);
  });
})();
(function () {
  const d = sim('fig-v-w-space');
  const box = [[-3, 2], [-2, 10], [0, 6]];
  const S = locked(d, box);
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('vw', [...SP.vector([0, 0, 0], [-2, 9, 5], C('vector'), { name: '$\\kvecv=\\langle -2,9,5\\rangle$' }), ...SP.vector([0, 0, 0], [1, -1, 0], C('vector'), { name: '$\\kvecw=\\langle 1,-1,0\\rangle$' })]);
  });
})();

/* Example 12.20: the receiver 20 yd down the field (x) and 15 yd to the left (y); w aims above his head at the
   throw's upward angle, and v = kw has the throw's speed (drawn a third of a yard per mph). */
(function () {
  const d = sim('sim-forward-pass');
  const box = [[0, 22], [0, 17], [0, 26]];
  const S = live(d, box, { turn: -0.55, tilt: 0.3, fit: 2.3 });
  const sp = ctl(d.controls, { label: 'speed', cls: 'vector', key: 'speed', min: 20, max: 80, step: 1, value: 60, unit: ' mph', dec: 0 });
  const an = ctl(d.controls, { label: 'angle', cls: 'angle', key: 'angle', min: 10, max: 45, step: 1, value: 30, unit: '°', dec: 0 });
  still(d, () => {
    const th = (an.v * Math.PI) / 180, R = [20, 15, 0], h = 25 * Math.tan(th), w = [20, 15, h], k = sp.v / Math.hypot(...w), v = SP.mul(w, k);
    S.set('axes', SP.axes(box, { ticks: 5, names: ['$x$', '$y$', '$z$'] }));
    S.set('field', [seg([0, 0, 0], [20, 0, 0], 'guide', 2.5, [4, 8]), seg([20, 0, 0], R, 'guide', 2.5, [4, 8]), seg([0, 0, 0], R, 'guide', 2.5, [10, 10]), seg(R, w, 'guide', 2.5, [10, 10]),
      ...SP.point([0, 0, 0], C('point'), { name: 'quarterback' }), ...SP.point(R, C('point'), { name: 'receiver' }),
      ...SP.vector([0, 0, 0], w, alpha(C('vector'), 0.5), { name: '$\\kvecw$', w: 4 }), ...SP.vector([0, 0, 0], SP.mul(SP.unit(w), sp.v / 3), C('vector'), { name: '$\\kvecv$', w: 6 })]);
    tex(d.readout, `\\kvecw=\\langle 20,15,${n(h, 2)}\\rangle,\\quad k=\\frac{${sp.v}}{\\|\\kvecw\\|}=${n(k, 3)},\\quad \\kvecv=k\\kvecw=${vt(v, 2)}`);
  });
})();
};
