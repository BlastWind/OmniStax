/* Figures for section 12.5 Equations of Lines and Planes in Space. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, headline, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const PITCH = [-0.2, 1.4];
const label = (s, p, color) => ({ k: 'label', s, p, color });
const seg = (a, b, color, w = 2.5, dash) => ({ k: 'line', pts: [a, b], color, w, dash });
const vt = (a, dec = 2) => `\\langle ${a.map((x) => n(x, Number.isInteger(x) ? 0 : dec)).join(',')}\\rangle`;
const live = (d, box, o = {}) => F.space3d(d, { box, h: 540, pitch: PITCH, fit: 3, ...o });
const locked = (d, box, o = {}) => F.space3d(d, { box, h: 480, locked: true, fit: 3.2, ...o });
const sgn = (v, dec = 2) => (v < 0 ? `-${n(-v, dec)}` : `+${n(v, dec)}`);
/* the small square marking a right angle at p between directions a and b */
const square = (p, a, b, s = 0.45) => { const A = SP.mul(SP.unit(a), s), B = SP.mul(SP.unit(b), s); return { k: 'line', pts: [SP.add(p, A), SP.add(SP.add(p, A), B), SP.add(p, B)], color: 'ink', w: 2.5 }; };

/* Figure 12.63: Q = P + tv slides along the line through P(1, 4, −2) and (−3, 5, 0); 0 ≤ t ≤ 1 is the segment. */
(function () {
  const d = sim('sim-line-in-space');
  const P = [1, 4, -2], R = [-3, 5, 0], v = SP.sub(R, P), box = [[-8, 8], [-1, 7], [-6, 3]];
  const S = live(d, box, { fit: 2.8 });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -1.5, max: 2, step: 0.05, value: 0.6, unit: '', dec: 2, specials: [{ at: 0 }, { at: 1 }] });
  still(d, () => {
    const t = ts.v, Q = SP.add(P, SP.mul(v, t)), col = C('vector');
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('line', [...SP.line(P, v, C('line'), { box, w: 4 }), seg(P, R, C('line'), 8)]);
    S.set('vec', [...SP.vector([0, 0, 0], P, alpha(col, 0.45), { name: '$\\kvecr_{0}$', w: 3 }), ...SP.vector([0, 0, 0], Q, alpha(col, 0.45), { name: '$\\kvecr$', w: 3 }),
      ...(Math.abs(t) > 0.02 ? SP.vector(P, Q, col, { name: '$t\\kvecv$' }) : []), ...SP.vector([4, 0, 0], SP.add([4, 0, 0], v), col, { name: '$\\kvecv=\\langle -4,1,2\\rangle$' }),
      ...SP.point(P, C('point'), { name: '$P$' }), ...SP.point(R, C('point'), { name: '$(-3,5,0)$' }), ...SP.point(Q, C('point'), { name: '$Q$' })]);
    tex(d.readout, `\\kvecr=\\kvecr_{0}+t\\kvecv=\\langle 1,4,-2\\rangle+${n(t, 2)}\\langle -4,1,2\\rangle=${vt(Q)}\\quad ${t >= 0 && t <= 1 ? '0\\le t\\le 1:\\ \\text{on the segment}' : '\\text{off the segment}'}`);
  });
})();

/* Figures 12.64 + 12.65: P slides along L; the parallelogram on PM and v keeps the height d. Axes −4 to 8 by −2 to 8. */
(function () {
  const d = sim('sim-point-line-distance', 600);
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -3, max: 3, step: 0.05, value: 0, unit: '', dec: 2 });
  const A = [0, 1], V = [2, 0.8], M = [2, 5];
  still(d, () => {
    const { ctx } = begin(d.c);
    const W = 12, Hh = 10, sc = Math.min((600 - 140) / Hh, 1100 / W), ax = axes(ctx, { l: 700 - (W * sc) / 2, r: 700 + (W * sc) / 2, t: 86, b: 86 + Hh * sc }, [-4, 8], [-2, 8], { xl: 'x', yl: 'y', nx: 12, ny: 10 });
    const P = [A[0] + ss.v * V[0], A[1] + ss.v * V[1]], PM = [M[0] - P[0], M[1] - P[1]], col = C('vector'), X = (p) => ax.X(p[0]), Y = (p) => ax.Y(p[1]);
    const t0 = -10, t1 = 10, bx = ax.box;
    ctx.save(); ctx.beginPath(); ctx.rect(bx.l, bx.t, bx.r - bx.l, bx.b - bx.t); ctx.clip();
    line(ctx, X([A[0] + t0 * V[0], 0]), Y([0, A[1] + t0 * V[1]]), X([A[0] + t1 * V[0], 0]), Y([0, A[1] + t1 * V[1]]), C('line'), 4);
    const c = [P, [P[0] + V[0], P[1] + V[1]], [M[0] + V[0], M[1] + V[1]], M];
    ctx.fillStyle = alpha(C('region'), 0.18); ctx.beginPath(); c.forEach((p, i) => (i ? ctx.lineTo(X(p), Y(p)) : ctx.moveTo(X(p), Y(p)))); ctx.closePath(); ctx.fill();
    line(ctx, X(c[1]), Y(c[1]), X(c[2]), Y(c[2]), alpha(PAL.ink, 0.4), 2.5, [10, 10]); line(ctx, X(c[2]), Y(c[2]), X(c[3]), Y(c[3]), alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    ctx.restore();
    const vv = V[0] ** 2 + V[1] ** 2, k = ((M[0] - A[0]) * V[0] + (M[1] - A[1]) * V[1]) / vv, foot = [A[0] + k * V[0], A[1] + k * V[1]];
    line(ctx, X(M), Y(M), X(foot), Y(foot), PAL.ink, 3, [4, 8]);
    text(ctx, '$d$', (X(M) + X(foot)) / 2 + 16, (Y(M) + Y(foot)) / 2, PAL.ink, { size: 22, align: 'left', tex: true, bg: PAL.panel });
    arrow(ctx, X(P), Y(P), X(M), Y(M), col, 5); arrow(ctx, X(P), Y(P), X(c[1]), Y(c[1]), col, 5);
    text(ctx, '$\\vec{PM}$', (X(P) + X(M)) / 2 - 30, (Y(P) + Y(M)) / 2, col, { size: 22, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$\\kvecv$', (X(P) + X(c[1])) / 2, (Y(P) + Y(c[1])) / 2 + 26, col, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    dot(ctx, X(P), Y(P), C('point'), true, 8); dot(ctx, X(M), Y(M), C('point'), true, 8);
    text(ctx, '$P$', X(P) - 14, Y(P) + 22, C('point'), { size: 22, align: 'right', tex: true, bg: PAL.panel }); text(ctx, '$M$', X(M) + 14, Y(M) - 16, C('point'), { size: 22, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$L$', X([A[0] + 3.6 * V[0], 0]), Y([0, A[1] + 3.6 * V[1]]) + 24, C('line'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
    const area = Math.abs(PM[0] * V[1] - PM[1] * V[0]), nv = Math.sqrt(vv);
    headline(ctx, `Wherever $P$ sits on $L$, the parallelogram has area ${n(area, 2)} over base ${n(nv, 2)}: $d=${n(area / nv, 2)}$.`);
    tex(d.readout, `d=\\frac{\\|\\vec{PM}\\times\\kvecv\\|}{\\|\\kvecv\\|}=\\frac{${n(area, 2)}}{${n(nv, 3)}}=${n(area / nv, 3)}`);
  });
})();

/* Figure 12.66, a faithful copy: M = (1, 1, 3), the line (x − 3)/4 = (y + 1)/2 = z − 3 and the perpendicular to it. */
(function () {
  const d = sim('fig-point-line-box');
  const box = [[-6, 8], [-4, 4], [0, 5]], P = [3, -1, 3], v = [4, 2, 1], M = [1, 1, 3];
  const S = locked(d, box);
  still(d, () => {
    const t = SP.dot(SP.sub(M, P), v) / SP.dot(v, v), foot = SP.add(P, SP.mul(v, t));
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('m', [...SP.line(P, v, C('line'), { box, w: 4 }), label('$L$', SP.add(P, SP.mul(v, 0.9)), C('line')), seg(M, foot, 'ink', 3, [4, 8]), square(foot, SP.sub(M, foot), v, 0.3),
      ...SP.point(M, C('point'), { name: '$(1,1,3)$' })]);
  });
})();

/* Figure 12.67: two lines in space and Example 12.48's three pairs; the readout answers the table's two questions. */
(function () {
  const d = sim('sim-line-pairs');
  const PAIRS = {
    f: [[[-4, 0, 2], [1, 0, 0.2]], [[0, -4, -1], [0, 1, 0.3]]],
    a: [[[-1, -1, -4], [2, 1, 1]], [[-3, 8, 5], [1, 3, -2]]],
    b: [[[0, 0, 0], [1, -1, 1]], [[3, 0, 2], [2, 1, 1]]],
    c: [[[-1, 0, 1], [6, -2, 3]], [[4, -3, 1], [6, -2, 3]]],
  };
  const box = [[-6, 6], [-6, 6], [-6, 6]];
  const S = live(d, box, { fit: 2.8 });
  const pick = choice(d.controls, { label: '', key: 'pair', options: [{ value: 'f', label: 'Figure 12.67' }, { value: 'a', label: '12.48 a' }, { value: 'b', label: '12.48 b' }, { value: 'c', label: '12.48 c' }], value: 'f', aria: 'pair of lines', ms: 0 });
  still(d, () => {
    const [[p1, v1], [p2, v2]] = PAIRS[pick.value], c = SP.cross(v1, v2), w = SP.sub(p2, p1), par = SP.norm(c) < 1e-9;
    let meet = null, cls;
    if (par) cls = SP.norm(SP.cross(w, v1)) < 1e-9 ? 'equal' : 'parallel but not equal';
    else {
      const t = SP.dot(SP.cross(w, v2), c) / SP.dot(c, c), s = SP.dot(SP.cross(w, v1), c) / SP.dot(c, c), A = SP.add(p1, SP.mul(v1, t)), B = SP.add(p2, SP.mul(v2, s));
      if (SP.norm(SP.sub(A, B)) < 1e-6) { meet = A; cls = 'intersecting'; } else { cls = 'skew'; meet = [A, B]; }
    }
    S.set('axes', SP.axes(box, { ticks: 2 }));
    const marks = [...SP.line(p1, v1, C('line'), { box, w: 5 }), ...SP.line(p2, v2, C('line'), { box, w: 5 }),
      label('$L_{1}$', SP.add(p1, SP.mul(SP.unit(v1), 4)), C('line')), label('$L_{2}$', SP.add(p2, SP.mul(SP.unit(v2), 4)), C('line'))];
    if (cls === 'intersecting') marks.push(...SP.point(meet, C('point'), { name: `$(${meet.map((x) => n(x, 0)).join(',')})$` }));
    if (cls === 'skew') marks.push(seg(meet[0], meet[1], 'guide', 2.5, [4, 8]));
    S.set('lines', marks);
    S.headline(`$L_{1}$ and $L_{2}$ are ${cls}.`);
    tex(d.readout, `\\text{direction vectors parallel? ${par ? 'yes' : 'no'}}\\qquad\\text{common point? ${cls === 'intersecting' || cls === 'equal' ? 'yes' : 'no'}}`);
  });
})();

/* Figure 12.68, a faithful copy: the table of the four relationships. */
(function () {
  const d = sim('fig-line-table', 360);
  still(d, () => {
    const { ctx } = begin(d.c);
    const L = 520, T = 110, cw = 260, rh = 80, g = alpha(PAL.ink, 0.5);
    text(ctx, 'Lines share a common point?', L + cw, T - 70, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'yes', L + cw / 2, T - 30, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'no', L + 1.5 * cw, T - 30, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'Direction vectors', L - 230, T + rh - 14, PAL.ink, { size: 22, align: 'center' }); text(ctx, 'are parallel?', L - 230, T + rh + 14, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'yes', L - 40, T + rh / 2, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'no', L - 40, T + 1.5 * rh, PAL.ink, { size: 20, align: 'center' });
    [0, 1, 2].forEach((i) => { line(ctx, L, T + i * rh, L + 2 * cw, T + i * rh, g, 2.5); line(ctx, L + i * cw, T, L + i * cw, T + 2 * rh, g, 2.5); });
    [['equal', 0, 0], ['parallel but not equal', 1, 0], ['intersecting', 0, 1], ['skew', 1, 1]].forEach(([s, c, r]) => text(ctx, s, L + (c + 0.5) * cw, T + (r + 0.5) * rh, C('line'), { size: 22, weight: 600, align: 'center' }));
  });
})();

/* Figure 12.69: Q dragged over the plane through P(1, 1, −2) with normal n = ⟨8, −4, 4⟩; PQ stays orthogonal to n. */
(function () {
  const d = sim('sim-plane-normal');
  const P = [1, 1, -2], N = [8, -4, 4], e1 = SP.perp(N), e2 = SP.cross(SP.unit(N), e1), box = [[-2, 4], [-2, 4], [-5, 2]];
  const S = live(d, box);
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -2, max: 2, step: 0.05, value: 1.2, unit: '', dec: 2 });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -2, max: 2, step: 0.05, value: 0.8, unit: '', dec: 2 });
  const at = (s, t) => SP.add(P, SP.add(SP.mul(e1, s), SP.mul(e2, t)));
  S.drag({ at: () => at(ss.v, ts.v), on: 'plane', move: ([u, v]) => { ss.drive(u); ts.drive(v); } });
  still(d, () => {
    const Q = at(ss.v, ts.v), PQ = SP.sub(Q, P), col = C('vector');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('plane', SP.surface(at, [-2.4, 2.4], [-2.4, 2.4], C('plane'), { n: [8, 8], grid: 4, alpha: 0.4 }));
    S.set('vec', [...SP.vector(P, SP.add(P, SP.mul(SP.unit(N), 1.8)), col, { name: '$\\kvecn$' }), ...(SP.norm(PQ) > 0.1 ? [...SP.vector(P, Q, col, { name: '$\\kPQ$' }), square(P, N, PQ, 0.35)] : []),
      ...SP.point(P, C('point'), { name: '$P$' }), ...SP.point(Q, C('point'), { name: '$Q$' })]);
    tex(d.readout, `\\kvecn\\cdot\\kPQ=8(${n(PQ[0], 2)})-4(${n(PQ[1], 2)})+4(${n(PQ[2], 2)})=${n(Math.abs(SP.dot(N, PQ)) < 5e-9 ? 0 : SP.dot(N, PQ), 2)}`);
  });
})();

/* Figure 12.70: Q slides over the plane x − 2y + z = 5; the projection of QP onto n is always the distance to P(3, 1, 2). */
(function () {
  const d = sim('sim-point-plane-distance');
  const N = [1, -2, 1], P = [3, 1, 2], Q0 = [5, 0, 0], e1 = SP.perp(N), e2 = SP.cross(SP.unit(N), e1), box = [[0, 8], [-3, 3], [-3, 5]];
  const S = locked(d, box, { turn: -1.6 });
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -2, max: 2, step: 0.05, value: 0, unit: '', dec: 2 });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -2, max: 2, step: 0.05, value: 0, unit: '', dec: 2 });
  still(d, () => {
    const Q = SP.add(Q0, SP.add(SP.mul(e1, ss.v), SP.mul(e2, ts.v))), QP = SP.sub(P, Q), k = SP.dot(QP, N) / SP.dot(N, N), pr = SP.mul(N, k), R = SP.sub(P, pr), col = C('vector');
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('plane', SP.plane(Q0, N, C('plane'), { size: 3.2, alpha: 0.35 }));
    S.set('vec', [...SP.vector(Q, P, col, { name: '$\\vec{QP}$' }), ...SP.vector(Q, SP.add(Q, pr), alpha(col, 0.6), { name: '$\\text{proj}_{\\kvecn}\\vec{QP}$', w: 4 }),
      seg(R, P, 'ink', 3, [4, 8]), seg(SP.add(Q, pr), P, 'guide', 2, [10, 10]), ...SP.point(P, C('point'), { name: '$P$' }), ...SP.point(Q, C('point'), { name: '$Q$' }), ...SP.point(R, C('point'), { name: '$R$' })]);
    tex(d.readout, `d=\\frac{|\\vec{QP}\\cdot\\kvecn|}{\\|\\kvecn\\|}=\\frac{|${n(SP.dot(QP, N), 2)}|}{\\sqrt{6}}=${n(Math.abs(SP.dot(QP, N)) / Math.sqrt(6), 3)}`);
  });
})();

/* Figures 12.71 + 12.72: Example 12.53's pairs of planes, their normals, the line where they meet and the angle. */
(function () {
  const d = sim('sim-two-planes');
  const PAIRS = { a: [[1, 2, -1, 8], [2, 4, -2, 10]], b: [[2, -3, 2, 3], [6, 2, -3, 1]], c: [[1, 1, 1, 4], [1, -3, 5, 1]] };
  const box = [[-5, 5], [-5, 5], [-5, 5]];
  const S = live(d, box, { fit: 2.8 });
  const pick = choice(d.controls, { label: '', key: 'pair', options: [{ value: 'a', label: 'a' }, { value: 'b', label: 'b' }, { value: 'c', label: 'c' }], value: 'c', aria: 'pair of planes in Example 12.53', ms: 0 });
  still(d, () => {
    const [A, B] = PAIRS[pick.value], n1 = A.slice(0, 3), n2 = B.slice(0, 3), p1 = SP.mul(n1, A[3] / SP.dot(n1, n1)), p2 = SP.mul(n2, B[3] / SP.dot(n2, n2));
    const dir = SP.cross(n1, n2), par = SP.norm(dir) < 1e-9, col = C('vector'), pl = C('plane');
    const marks = [], c = Math.abs(SP.dot(n1, n2)) / (SP.norm(n1) * SP.norm(n2)), th = Math.acos(Math.min(1, c));
    if (!par) {
      const m = SP.cross(SP.sub(SP.mul(n2, A[3]), SP.mul(n1, B[3])), dir);
      const pt = SP.mul(m, 1 / SP.dot(dir, dir));
      marks.push(...SP.line(pt, dir, C('line'), { box, w: 5 }), ...SP.vector(pt, SP.add(pt, SP.mul(SP.unit(n1), 2)), col, { name: '$\\kvecn_{1}$' }), ...SP.vector(pt, SP.add(pt, SP.mul(SP.unit(n2), 2)), col, { name: '$\\kvecn_{2}$' }));
    } else {
      marks.push(...SP.vector(p1, SP.add(p1, SP.mul(SP.unit(n1), 2)), col, { name: '$\\kvecn_{1}$' }), ...SP.vector(p2, SP.add(p2, SP.mul(SP.unit(n2), 2)), col, { name: '$\\kvecn_{2}$' }));
    }
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('planes', [...SP.plane(p1, n1, pl, { box, alpha: 0.32 }), ...SP.plane(p2, n2, pl, { box, alpha: 0.32 })]);
    S.set('marks', marks);
    const kind = par ? 'parallel' : Math.abs(c) < 1e-9 ? 'orthogonal' : `at ${n(th, 2)} rad`;
    S.headline(`The planes are ${kind}.`);
    tex(d.readout, `\\cos\\ktheta=\\frac{|\\kvecn_{1}\\cdot\\kvecn_{2}|}{\\|\\kvecn_{1}\\|\\|\\kvecn_{2}\\|}=\\frac{${Math.abs(SP.dot(n1, n2))}}{${n(SP.norm(n1) * SP.norm(n2), 3)}}=${n(c, 3)},\\quad \\ktheta=${n(th, 2)}\\;\\text{rad}`);
  });
})();

/* Figure 12.74, a faithful copy: the 10 × 15 × 4 m frame unit, L₁ along its main diagonal and L₂ across its base. */
(function () {
  const d = sim('fig-frame-unit');
  const box = [[0, 11], [0, 16], [0, 5]], c = (x, y, z) => [x * 10, y * 15, z * 4];
  const S = locked(d, box, { fit: 3 });
  still(d, () => {
    const E = [];
    for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) E.push(seg(c(a, b, 0), c(a, b, 1), 'guide'), seg(c(a, 0, b), c(a, 1, b), 'guide'), seg(c(0, a, b), c(1, a, b), 'guide'));
    S.set('axes', SP.axes(box, { ticks: 0 }));
    S.set('frame', [...E, seg(c(0, 0, 0), c(1, 1, 1), C('line'), 5), seg(c(1, 0, 0), c(0, 1, 0), C('line'), 5), label('$L_{1}$', c(0.7, 0.7, 0.75), C('line')), label('$L_{2}$', c(0.3, 0.72, 0), C('line')),
      label('10 m', c(0.5, 0, 0), 'ink'), label('15 m', c(1, 0.5, 0), 'ink'), label('4 m', c(1, 1, 0.5), 'ink')]);
  });
})();
};
