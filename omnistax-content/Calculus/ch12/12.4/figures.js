/* Figures for section 12.4 The Cross Product. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, arrow, line, text, headline, register, tex, fmt, angleArc } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const PITCH = [-0.2, 1.4];
const label = (s, p, color) => ({ k: 'label', s, p, color });
const seg = (a, b, color, w = 2.5, dash) => ({ k: 'line', pts: [a, b], color, w, dash });
const vt = (a, dec = 2) => `\\langle ${a.map((x) => n(x, Number.isInteger(x) ? 0 : dec)).join(',')}\\rangle`;
const boxOf = (pts, pad = 1) => [0, 1, 2].map((i) => [Math.floor(Math.min(0, ...pts.map((p) => p[i]))) - pad, Math.ceil(Math.max(0, ...pts.map((p) => p[i]))) + pad]);
/* the arc from direction a toward direction b at radius r about the origin, as points */
function arcPts(a, b, r, m = 32) {
  const ua = SP.unit(a), w = SP.unit(SP.sub(b, SP.mul(ua, SP.dot(ua, SP.unit(b))))), th = Math.acos(Math.max(-1, Math.min(1, SP.dot(ua, SP.unit(b))))), out = [];
  for (let i = 0; i <= m; i++) { const t = (i / m) * th; out.push(SP.mul(SP.add(SP.mul(ua, Math.cos(t)), SP.mul(w, Math.sin(t))), r)); }
  return out;
}

/* Figure 12.53, a faithful copy: Example 12.31's p = ⟨−1, 2, 5⟩ and q = ⟨4, 0, −3⟩ in standard position. */
(function () {
  const d = sim('fig-pq-cross');
  const box = [[-2, 5], [-1, 3], [-4, 6]];
  const S = F.space3d(d, { box, h: 460, locked: true, fit: 3.2 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('pq', [...SP.vector([0, 0, 0], [-1, 2, 5], C('vector'), { name: '$\\kvecp=\\langle -1,2,5\\rangle$' }), ...SP.vector([0, 0, 0], [4, 0, -3], C('vector'), { name: '$\\kvecq=\\langle 4,0,-3\\rangle$' })]);
  });
})();

/* Figures 12.54 + 12.55 + 12.56: Example 12.32's u = ⟨0, 2, 1⟩ and v = ⟨3, −1, 0⟩, their parallelogram, and
   u × v or v × u with the right hand's curl from the first factor toward the second. */
(function () {
  const d = sim('sim-cross-product');
  const U = [0, 2, 1], V = [3, -1, 0], box = [[-2, 4], [-4, 4], [-7, 7]];
  const S = F.space3d(d, { box, h: 560, pitch: PITCH, fit: 3 });
  const ord = choice(d.controls, { label: '', key: 'order', options: [{ value: 'uv', label: 'u × v' }, { value: 'vu', label: 'v × u' }], value: 'uv', aria: 'order of the factors', ms: 0 });
  still(d, () => {
    const [a, b] = ord.value === 'uv' ? [U, V] : [V, U], [na, nb] = ord.value === 'uv' ? ['\\kvecu', '\\kvecv'] : ['\\kvecv', '\\kvecu'];
    const w = SP.cross(a, b), col = C('vector'), reg = C('region');
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('par', [{ k: 'faces', faces: [[[0, 0, 0], U, SP.add(U, V), V]], color: reg, alpha: 0.25 }, seg(U, SP.add(U, V), 'guide', 2.5, [10, 10]), seg(V, SP.add(U, V), 'guide', 2.5, [10, 10])]);
    const curl = arcPts(a, b, 1.2), L = curl.length;
    S.set('vec', [...SP.vector([0, 0, 0], U, col, { name: '$\\kvecu$' }), ...SP.vector([0, 0, 0], V, col, { name: '$\\kvecv$' }),
      ...SP.vector([0, 0, 0], w, col, { name: `$${na}\\times ${nb}$`, w: 7 }),
      { k: 'line', pts: curl, color: 'ink', w: 4 }, { k: 'arrow', a: curl[L - 4], b: curl[L - 1], color: 'ink', w: 4 }]);
    S.headline(`Fingers along $${na}$ curl toward $${nb}$; the thumb points along $${na}\\times ${nb}$.`);
    tex(d.readout, `${na}\\times ${nb}=${vt(w)},\\quad \\|${na}\\times ${nb}\\|=${n(Math.hypot(...w), 3)}=\\text{area of the parallelogram},\\quad (${na}\\times ${nb})\\cdot\\kvecu=(${na}\\times ${nb})\\cdot\\kvecv=0`);
  });
})();

/* Example 12.36's array: the first row's entry a chosen crosses out its row and column, leaving its minor. */
(function () {
  const d = sim('sim-minors', 420);
  const A = [[2, 5, -1], [-1, 1, 3], [-2, 3, 4]];
  const pick = choice(d.controls, { label: '', key: 'term', options: [{ value: '0', label: 'a₁' }, { value: '1', label: 'a₂' }, { value: '2', label: 'a₃' }], value: '0', aria: 'entry of the first row' });
  const minor = (j) => { const c = [0, 1, 2].filter((k) => k !== j); return A[1][c[0]] * A[2][c[1]] - A[2][c[0]] * A[1][c[1]]; };
  const SIGN = [1, -1, 1];
  still(d, () => {
    const { ctx } = begin(d.c);
    const j = +pick.value, mx = C('matrix'), X0 = 260, Y0 = 130, G = 90;
    const cx = (k) => X0 + k * G, cy = (i) => Y0 + i * G;
    [0, 1, 2].forEach((i) => [0, 1, 2].forEach((k) => {
      const lit = i > 0 && k !== j;
      if (lit) { ctx.save(); ctx.fillStyle = alpha(mx, 0.16); ctx.fillRect(cx(k) - 40, cy(i) - 36, 80, 72); ctx.restore(); }
      text(ctx, fmt(A[i][k], 0), cx(k), cy(i), i === 0 && k === j ? mx : lit ? mx : alpha(PAL.ink, 0.45), { size: 30, weight: i === 0 && k === j ? 700 : 400, align: 'center' });
    }));
    [X0 - 60, X0 + 2 * G + 60].forEach((x) => line(ctx, x, Y0 - 50, x, Y0 + 2 * G + 50, mx, 4));
    line(ctx, X0 - 50, Y0, X0 + 2 * G + 50, Y0, alpha(PAL.ink, 0.5), 3);
    line(ctx, cx(j), Y0 - 50, cx(j), Y0 + 2 * G + 50, alpha(PAL.ink, 0.5), 3);
    const m = minor(j), term = SIGN[j] * A[0][j] * m, c = [0, 1, 2].filter((k) => k !== j);
    text(ctx, `$${SIGN[j] < 0 ? '-' : '+'}\\,${A[0][j] < 0 ? `(${A[0][j]})` : A[0][j]}\\begin{vmatrix}${A[1][c[0]]}&${A[1][c[1]]}\\\\${A[2][c[0]]}&${A[2][c[1]]}\\end{vmatrix}=${SIGN[j] < 0 ? '-' : ''}${A[0][j] < 0 ? `(${A[0][j]})` : A[0][j]}(${m})=${term}$`, 900, Y0 + G, mx, { size: 28, align: 'center', tex: true });
    headline(ctx, `Cross out the row and column of $a_{${j + 1}}$: the $2\\times 2$ determinant left is its minor, taken with sign ${SIGN[j] < 0 ? '−' : '+'}.`);
    tex(d.readout, `\\begin{vmatrix}2&5&-1\\\\-1&1&3\\\\-2&3&4\\end{vmatrix}=${[0, 1, 2].map((k) => (k === j ? `\\boxed{${SIGN[k] * A[0][k] * minor(k)}}` : `(${SIGN[k] * A[0][k] * minor(k)})`)).join('+')}=-19`);
  });
})();

/* Figure 12.57: the parallelogram on u and v, its base ‖u‖ and height ‖v‖ sin θ. 60 canvas units a unit. */
(function () {
  const d = sim('sim-parallelogram-area', 460);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 180, step: 1, value: 60, unit: '°', dec: 0, specials: [{ at: 90 }] });
  const us = ctl(d.controls, { label: '\\|\\kvecu\\|', cls: 'vector', key: 'u', min: 1, max: 5, step: 0.1, value: 4, unit: '', dec: 1 });
  const vs = ctl(d.controls, { label: '\\|\\kvecv\\|', cls: 'vector', key: 'v', min: 1, max: 4, step: 0.1, value: 2.5, unit: '', dec: 1 });
  still(d, () => {
    const { ctx } = begin(d.c);
    const K = 60, th = (ts.v * Math.PI) / 180, ox = 450, oy = 380, col = C('vector'), reg = C('region');
    const ux = ox + us.v * K, vx = ox + vs.v * K * Math.cos(th), vy = oy - vs.v * K * Math.sin(th);
    ctx.save(); ctx.fillStyle = alpha(reg, 0.2); ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ux, oy); ctx.lineTo(ux + vx - ox, vy); ctx.lineTo(vx, vy); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, ux, oy, ux + vx - ox, vy, alpha(PAL.ink, 0.4), 2.5, [10, 10]); line(ctx, vx, vy, ux + vx - ox, vy, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    arrow(ctx, ox, oy, ux, oy, col, 5); arrow(ctx, ox, oy, vx, vy, col, 5);
    text(ctx, '$\\kvecu$', (ox + ux) / 2, oy + 28, col, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kvecv$', (ox + vx) / 2 - 26 * Math.sin(th), (oy + vy) / 2 - 26 * Math.cos(th), col, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    if (Math.sin(th) > 0.05) {
      line(ctx, vx, vy, vx, oy, PAL.ink, 2.5, [4, 8]);
      text(ctx, '$\\|\\kvecv\\|\\sin\\ktheta$', vx + (Math.cos(th) < 0 ? -12 : 12), (vy + oy) / 2, PAL.ink, { size: 20, align: Math.cos(th) < 0 ? 'right' : 'left', tex: true, bg: PAL.panel });
      angleArc(ctx, { x: ox, y: oy }, 44, 0, th, undefined, undefined, C('angle'));
      text(ctx, '$\\ktheta$', ox + 66 * Math.cos(th / 2), oy - 66 * Math.sin(th / 2), C('angle'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
    }
    const A = us.v * vs.v * Math.sin(th);
    headline(ctx, ts.v === 90 ? 'At $90^{\\circ}$ the height is all of $\\|\\kvecv\\|$ and the area is greatest.' : `The area is base times height, $${n(A, 2)}$ square units.`);
    tex(d.readout, `\\|\\kvecu\\times\\kvecv\\|=\\|\\kvecu\\|\\|\\kvecv\\|\\sin\\ktheta=${n(us.v, 1)}(${n(vs.v, 1)})\\sin ${ts.v}^{\\circ}=${n(A, 2)}`);
  });
})();

/* Figure 12.58, a faithful copy: the triangle P(1, 0, 0), Q(0, 1, 0), R(0, 0, 1). */
(function () {
  const d = sim('fig-triangle-pqr');
  const box = [[-0.5, 1.6], [-0.5, 1.6], [-0.5, 1.6]], P = [1, 0, 0], Q = [0, 1, 0], R = [0, 0, 1];
  const S = F.space3d(d, { box, h: 460, locked: true, fit: 3.4 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('tri', [{ k: 'faces', faces: [[P, Q, R]], color: C('region'), alpha: 0.3 }, { k: 'line', pts: [P, Q, R, P], color: 'ink', w: 3 },
      ...SP.point(P, C('point'), { name: '$P(1,0,0)$' }), ...SP.point(Q, C('point'), { name: '$Q(0,1,0)$' }), ...SP.point(R, C('point'), { name: '$R(0,0,1)$' })]);
  });
})();

/* Figures 12.59 + 12.60: the parallelepiped on u, v, w, the normal v × w of its base and its height
   proj_{v×w} u; Example 12.42's coplanar vectors flatten it. */
(function () {
  const d = sim('sim-parallelepiped');
  const EX = { a: [[-1, -2, 1], [4, 3, 2], [0, -5, -2]], b: [[2, 0, 5], [2, 2, 4], [1, -1, 3]] };
  const box = [[-3, 7], [-8, 6], [-4, 8]];
  const S = F.space3d(d, { box, h: 560, pitch: PITCH, fit: 2.6 });
  const pick = choice(d.controls, { label: '', key: 'ex', options: [{ value: 'a', label: 'Example 12.41' }, { value: 'b', label: 'Example 12.42 (coplanar)' }], value: 'a', aria: 'example', ms: 0 });
  still(d, () => {
    const [u, v, w] = EX[pick.value], o = [0, 0, 0], col = C('vector'), reg = C('region');
    const A = SP.add, c = [o, u, v, w, A(u, v), A(u, w), A(v, w), A(A(u, v), w)];
    const faces = [[0, 2, 6, 3], [1, 4, 7, 5], [0, 1, 5, 3], [2, 4, 7, 6], [0, 1, 4, 2], [3, 5, 7, 6]].map((f) => f.map((i) => c[i]));
    const edges = [[1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]].map(([i, j]) => [c[i], c[j]]);
    const nvw = SP.cross(v, w), t = SP.dot(u, nvw) / SP.dot(nvw, nvw), h = SP.mul(nvw, t), V = SP.dot(u, nvw);
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('solid', [{ k: 'faces', faces, color: reg, alpha: 0.22 }, { k: 'segs', segs: edges, color: 'guide', w: 2 }]);
    S.set('vec', [...SP.vector(o, u, col, { name: '$\\kvecu$' }), ...SP.vector(o, v, col, { name: '$\\kvecv$' }), ...SP.vector(o, w, col, { name: '$\\kvecw$' }),
      ...(Math.hypot(...h) > 0.05 ? [...SP.vector(o, h, col, { name: '$\\text{proj}_{\\kvecv\\times\\kvecw}\\kvecu$', w: 4 }), seg(h, u, 'guide', 2.5, [4, 8])] : [])]);
    tex(d.readout, `\\kvecu\\cdot(\\kvecv\\times\\kvecw)=\\begin{vmatrix}${u.join('&')}\\\\${v.join('&')}\\\\${w.join('&')}\\end{vmatrix}=${V},\\quad V=|${V}|=${Math.abs(V)}`);
    S.headline(V === 0 ? 'The triple scalar product is 0: the three vectors lie in one plane.' : `The parallelepiped's volume is $${Math.abs(V)}$ cubic units.`);
  });
})();

/* Figures 12.61 + 12.62: the wrench r in the xy-plane from the bolt, the force F at angle θ to it in that plane,
   and the torque τ = r × F along the bolt's axis. Lengths in the scene: r in decimetres, F and τ scaled to fit. */
(function () {
  const d = sim('sim-torque');
  const box = [[-0.5, 3.5], [-0.5, 3], [-0.5, 3]];
  const S = F.space3d(d, { box, h: 540, pitch: PITCH, fit: 3.6 });
  const fs = ctl(d.controls, { label: '\\|\\kvecF\\|', cls: 'vector', key: 'F', min: 0, max: 10, step: 0.1, value: 6, unit: ' N', dec: 1 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 180, step: 1, value: 40, unit: '°', dec: 0, specials: [{ at: 90 }] });
  const rs = ctl(d.controls, { label: '\\|\\kvecr\\|', cls: 'vector', key: 'r', min: 0.05, max: 0.3, step: 0.01, value: 0.15, unit: ' m', dec: 2 });
  still(d, () => {
    const R = rs.v * 10, th = (ts.v * Math.PI) / 180, r = [R, 0, 0], Fv = [fs.v * 0.25 * Math.cos(th), fs.v * 0.25 * Math.sin(th), 0];
    const tau = SP.cross(r, Fv), T = rs.v * fs.v * Math.sin(th), col = C('vector');
    S.set('axes', SP.axes(box, { ticks: 0, names: ['', '', ''] }));
    S.set('wrench', [{ k: 'line', pts: [[0, 0, 0], r], color: alpha(PAL.ink, 0.5), w: 16 }, { k: 'line', pts: [[0, 0, -0.4], [0, 0, 0.3]], color: alpha(PAL.ink, 0.5), w: 12 }]);
    S.set('vec', [...SP.vector([0, 0, 0], r, col, { name: '$\\kvecr$' }), ...(fs.v ? SP.vector(r, SP.add(r, Fv), col, { name: '$\\kvecF$' }) : []),
      ...(T > 0.005 ? SP.vector([0, 0, 0], SP.mul(tau, 1 / 1.5), col, { name: '$\\ktau$', w: 7 }) : [])]);
    S.headline(`The torque points along the bolt, $\\|\\ktau\\|\\approx ${n(T, 2)}$ N·m.`);
    tex(d.readout, `\\|\\ktau\\|=\\|\\kvecr\\times\\kvecF\\|=\\|\\kvecr\\|\\|\\kvecF\\|\\sin\\ktheta=(${n(rs.v, 2)})(${n(fs.v, 1)})\\sin ${ts.v}^{\\circ}\\approx ${n(T, 2)}\\;\\text{N}\\cdot\\text{m}`);
  });
})();
};
