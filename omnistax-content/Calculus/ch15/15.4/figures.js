/* Figures for section 15.4 Triple Integrals. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, register, tex, fmt, begin, axes, plot, line, dot, text } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
const nt = (v) => String(+v.toFixed(2)).replace('-', '−');
const lab3 = (s, p, color) => ({ k: 'label', s, p, color });
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
/* a flat region of the plane laid in space by its outline: to(p) puts its point p = [a, b, 0] where it belongs */
const shadow = (R, to, color, a = 0.3) => [{ k: 'faces', faces: [SP.outline(R, 48).map(to)], color, alpha: a }, ...SP.edges(R, 48).map((pts) => ({ k: 'line', pts: pts.map(to), color, w: 2.5 }))];

/* Figure 15.40: Example 15.36's box [−1, 5] × [2, 4] × [0, 1] cut into l m n subboxes, f = x + yz²; scene box −1.3 to 5.3 by 0 to 4.3 by 0 to 1.3 */
(function () {
  const d = sim('sim-subboxes');
  const B = [[-1, 5], [2, 4], [0, 1]], f = (x, y, z) => x + y * z * z, box = [[-1.3, 5.3], [0, 4.3], [0, 1.3]];
  const S = F.space3d(d, { box, h: 500, pitch: [0.1, 1.4] });
  const ls = ctl(d.controls, { label: 'l', cls: '', key: 'l', min: 1, max: 6, step: 1, value: 3, unit: '', dec: 0 });
  const ms = ctl(d.controls, { label: 'm', cls: '', key: 'm', min: 1, max: 6, step: 1, value: 2, unit: '', dec: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 6, step: 1, value: 2, unit: '', dec: 0 });
  function draw() {
    const N = [ls.v, ms.v, ns.v], dd = B.map(([a, b], k) => (b - a) / N[k]), segs = [];
    const P = (k, i) => B[k][0] + i * dd[k];
    for (let i = 0; i <= N[0]; i++) for (let j = 0; j <= N[1]; j++) segs.push([[P(0, i), P(1, j), 0], [P(0, i), P(1, j), 1]]);
    for (let i = 0; i <= N[0]; i++) for (let k = 0; k <= N[2]; k++) segs.push([[P(0, i), 2, P(2, k)], [P(0, i), 4, P(2, k)]]);
    for (let j = 0; j <= N[1]; j++) for (let k = 0; k <= N[2]; k++) segs.push([[-1, P(1, j), P(2, k)], [5, P(1, j), P(2, k)]]);
    let sum = 0;
    for (let i = 0; i < N[0]; i++) for (let j = 0; j < N[1]; j++) for (let k = 0; k < N[2]; k++) sum += f(P(0, i + 0.5), P(1, j + 0.5), P(2, k + 0.5)) * dd[0] * dd[1] * dd[2];
    const I = Math.min(1, N[0] - 1), J = Math.min(1, N[1] - 1), K = Math.min(1, N[2] - 1), c = [P(0, I + 0.5), P(1, J + 0.5), P(2, K + 0.5)];
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('box', [...SP.solid({ x: B[0], y: B[1], z: B[2] }, C('region'), { alpha: 0.12 }), { k: 'segs', segs, color: C('region'), w: 1.5 }, lab3('$\\kB$', [5, 2, 1.05], C('region'))]);
    S.set('one', [...SP.solid({ x: [P(0, I), P(0, I + 1)], y: [P(1, J), P(1, J + 1)], z: [P(2, K), P(2, K + 1)] }, C('integral'), { alpha: 0.7 }), { k: 'dot', p: c, color: C('point'), r: 7 },
      lab3(`$\\kB_{${I + 1}${J + 1}${K + 1}}$`, [c[0], 2, P(2, K + 1) + 0.12], C('region'))]);
    tex(d.readout, `\\sum_{i=1}^{${N[0]}}\\sum_{j=1}^{${N[1]}}\\sum_{k=1}^{${N[2]}}\\kf(x_{ijk}^{*},y_{ijk}^{*},z_{ijk}^{*})\\,\\Delta x\\,\\Delta y\\,\\Delta z=${hue('integral', n2(sum, 3))},\\qquad \\iiint_{\\kB}(x+yz^{2})\\,dV=${hue('integral', '36')}`);
  }
  still(d, draw);
})();

/* Figure 15.41, a still copy: Example 15.37's box [−2, 1] × [0, 3] × [1, 5]; scene box −2.3 to 1.3 by 0 to 3.3 by 0 to 5.3 */
(function () {
  const d = sim('fig-example-box');
  const box = [[-2.3, 1.3], [0, 3.3], [0, 5.3]];
  const S = F.space3d(d, { box, h: 420, locked: true, turn: -2.3, tilt: 0.38 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('box', [...SP.solid({ x: [-2, 1], y: [0, 3], z: [1, 5] }, C('region'), { alpha: 0.4 }), lab3('$\\kB$', [-2, 3, 5.2], C('region'))]);
    tex(d.readout, `\\iiint_{\\kB}x^{2}yz\\,dV=\\int_{1}^{5}\\int_{-2}^{1}\\int_{0}^{3}x^{2}yz\\,dy\\,dx\\,dz=${hue('integral', '162')}`);
  });
})();

/* Figure 15.42 + 15.43 + 15.44: a solid E between z = u₁(x, y) and z = u₂(x, y) over D of Type I or Type II (stand-ins); scene box 0 to 4 by 0 to 3 by 0 to 3 */
(function () {
  const d = sim('sim-solid-over-d');
  const box = [[0, 4], [0, 3], [0, 3]];
  const u1 = (x, y) => 0.5 + 0.12 * x + 0.15 * Math.sin(1.5 * y), u2 = (x, y) => 2.6 - 0.08 * (x - 2) ** 2 - 0.12 * (y - 1.5) ** 2;
  const g1 = (x) => 0.45 + 0.25 * Math.sin(x), g2 = (x) => 2.25 + 0.35 * Math.cos(1.2 * x), h1 = (y) => 0.6 + 0.35 * (y - 1.5) ** 2, h2 = (y) => 3.3 - 0.3 * Math.sin(2 * y);
  const T = {
    I: { D: { x: [0.5, 3.5], y: [g1, g2] }, E: { x: [0.5, 3.5], y: [g1, g2], z: [(x, y) => u1(x, y), (x, y) => u2(x, y)] } },
    II: { D: { y: [0.4, 2.6], x: [h1, h2] }, E: { y: [0.4, 2.6], x: [h1, h2], z: [(y, x) => u1(x, y), (y, x) => u2(x, y)] } },
  };
  const S = F.space3d(d, { box, h: 540, pitch: [0.1, 1.4] });
  const pick = choice(d.controls, { label: 'D', options: [{ value: 'I', label: 'Type I' }, { value: 'II', label: 'Type II' }], value: 'I', ms: 0 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.5, max: 3.5, step: 0.02, value: 2.2, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: 0.4, max: 2.6, step: 0.02, value: 1.4, unit: '', dec: 2 });
  function draw() {
    const t = T[pick.value], one = pick.value === 'I';
    let x = xs.v, y = ys.v;
    if (one) y = clamp(y, g1(x), g2(x)); else { y = clamp(y, 0.4, 2.6); x = clamp(x, h1(y), h2(y)); }
    const a = u1(x, y), b = u2(x, y);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('floor', [...shadow(t.D, (p) => [p[0], p[1], 0], C('region'), 0.3), lab3('$\\kD$', [one ? 3.3 : 3.0, one ? 0.6 : 0.5, 0], C('region'))]);
    S.set('solid', [...SP.solid(t.E, C('region'), { alpha: 0.18 }),
      ...SP.graph(u1, t.D, C('surface'), { alpha: 0.5, grid: 6, n: 28 }), ...SP.graph(u2, t.D, C('surface'), { alpha: 0.5, grid: 6, n: 28 }),
      lab3('$z=\\kufn_{2}(x,y)$', [0.5, 1.2, u2(0.5, 1.2) + 0.25], C('surface')), lab3('$z=\\kufn_{1}(x,y)$', [3.6, 1.6, u1(3.6, 1.6) - 0.1], C('surface')), lab3('$\\kE$', [2, 1.4, 2.0], C('region'))]);
    const strip = one ? [[x, g1(x), 0], [x, g2(x), 0]] : [[h1(y), y, 0], [h2(y), y, 0]];
    S.set('column', [{ k: 'line', pts: strip, color: 'ink', w: 4 }, { k: 'line', pts: [[x, y, 0], [x, y, a]], color: 'guide', w: 2.5, dash: [4, 8] },
      { k: 'line', pts: [[x, y, a], [x, y, b]], color: 'ink', w: 5 }, { k: 'dot', p: [x, y, a], color: 'ink', r: 6 }, { k: 'dot', p: [x, y, b], color: 'ink', r: 6 }, { k: 'dot', p: [x, y, 0], color: C('point'), r: 6 }]);
    tex(d.readout, `(x,y)=(${nt(x)},${nt(y)}):\\;${nt(a)}\\le z\\le ${nt(b)},\\qquad \\iiint_{\\kE}\\kf\\,dV=${one ? '\\int_{a}^{b}\\int_{\\kg_{1}(x)}^{\\kg_{2}(x)}\\int_{\\kufn_{1}(x,y)}^{\\kufn_{2}(x,y)}\\kf\\,dz\\,dy\\,dx' : '\\int_{c}^{d}\\int_{\\kh_{1}(y)}^{\\kh_{2}(y)}\\int_{\\kufn_{1}(x,y)}^{\\kufn_{2}(x,y)}\\kf\\,dz\\,dx\\,dy'}`);
  }
  still(d, draw);
})();

/* Figure 15.45, a still copy: Example 15.38's tetrahedron under x + y + z = 1 and its projection D; scene box 0 to 1.3 on each axis */
(function () {
  const d = sim('fig-tetrahedron-e');
  const box = [[0, 1.3], [0, 1.3], [0, 1.3]], D = { x: [0, 1], y: [0, (x) => 1 - x] };
  const S = F.space3d(d, { box, h: 420, locked: true, turn: -2.3, tilt: 0.4 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('solid', [...SP.solid({ x: [0, 1], y: [0, (x) => 1 - x], z: [0, (x, y) => 1 - x - y] }, C('region'), { alpha: 0.35 }), ...shadow(D, (p) => [p[0], p[1], 0], C('region'), 0.35),
      lab3('$x+y+z=1$', [0.2, 0.2, 0.75], C('surface')), lab3('$\\kD$', [0.35, 0.3, 0], C('region')), lab3('$\\kE$', [0.25, 0.25, 0.3], C('region'))]);
    tex(d.readout, `\\iiint_{\\kE}(5x-3y)\\,dV=\\int_{0}^{1}\\int_{0}^{1-x}\\int_{0}^{1-x-y}(5x-3y)\\,dz\\,dy\\,dx=${hue('integral', '\\tfrac{1}{12}')}`);
  });
})();

/* Figure 15.46: Example 15.39's pyramid over [−1, 1]² with vertex (0, 0, 1) and its square section at height z; scene box ±1.3 by ±1.3 by 0 to 1.3 */
(function () {
  const d = sim('sim-pyramid');
  const box = [[-1.3, 1.3], [-1.3, 1.3], [0, 1.3]];
  const S = F.space3d(d, { box, h: 480, pitch: [0.1, 1.4] });
  const zs = ctl(d.controls, { label: 'z', cls: '', key: 'z', min: 0, max: 1, step: 0.01, value: 0.4, unit: '', dec: 2 });
  function draw() {
    const z = zs.v, s = 1 - z, sq = [[-s, -s, z], [s, -s, z], [s, s, z], [-s, s, z]];
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('pyramid', SP.solid({ z: [0, 1], y: [(t) => -1 + t, (t) => 1 - t], x: [(t) => -1 + t, (t) => 1 - t] }, C('region'), { alpha: 0.25 }));
    S.set('section', s > 0.01 ? [{ k: 'faces', faces: [sq], color: C('integral'), alpha: 0.7 }, { k: 'line', pts: [...sq, sq[0]], color: C('integral'), w: 3 }, lab3(`$[-1+z,1-z]^{2}$`, [s, -s, z + 0.08], C('integral'))] : []);
    tex(d.readout, `\\text{at }z=${nt(z)}:\\;(2-2z)^{2}=${hue('integral', n2((2 - 2 * z) ** 2, 3))},\\qquad \\kV=\\int_{0}^{1}(2-2z)^{2}\\,dz=${hue('integral', '\\tfrac{4}{3}')}`);
  }
  still(d, draw);
})();

/* Figure 15.47: Example 15.40's solid 0 ≤ x ≤ 1, 0 ≤ y ≤ x², 0 ≤ z ≤ y² and its three projections on the coordinate planes; scene box 0 to 1.25 on each axis */
(function () {
  const d = sim('sim-three-projections');
  const box = [[0, 1.25], [0, 1.25], [0, 1.25]];
  const S = F.space3d(d, { box, h: 520, pitch: [0.1, 1.4], turn: -2.35, tilt: 0.5 });
  still(d, () => {
    const rc = C('region');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('solid', [...SP.solid({ x: [0, 1], y: [0, (x) => x * x], z: [0, (x, y) => y * y] }, rc, { alpha: 0.55 }), lab3('$\\kE$', [1, 0.8, 0.75], rc)]);
    S.set('shadows', [
      ...shadow({ x: [0, 1], y: [0, (x) => x * x] }, (p) => p, rc, 0.25), lab3('$\\kD_{1}$', [0.8, 0.25, 0], rc),
      ...shadow({ y: [0, 1], z: [0, (y) => y * y] }, (p) => p, rc, 0.25), lab3('$\\kD_{2}$', [0, 0.8, 0.25], rc),
      ...shadow({ x: [0, 1], z: [0, (x) => x ** 4] }, (p) => p, rc, 0.25), lab3('$\\kD_{3}$', [0.85, 0, 0.2], rc),
    ]);
    tex(d.readout, `\\kD_{1}:\\,0\\le y\\le 1,\\;\\sqrt{y}\\le x\\le 1;\\quad \\kD_{2}:\\,0\\le y\\le 1,\\;0\\le z\\le y^{2};\\quad \\kD_{3}:\\,0\\le x\\le 1,\\;0\\le z\\le x^{4}`);
  });
})();

/* Figure 15.48, a still copy: Example 15.41's solid between y = x² + z² and y = 4; scene box ±2.3 by 0 to 4.4 by ±2.3 */
(function () {
  const d = sim('fig-paraboloid-y');
  const box = [[-2.3, 2.3], [0, 4.4], [-2.3, 2.3]];
  const S = F.space3d(d, { box, h: 440, locked: true, turn: -2.0, tilt: 0.35 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('solid', [...SP.solid({ x: [-2, 2], z: [(x) => -Math.sqrt(Math.max(0, 4 - x * x)), (x) => Math.sqrt(Math.max(0, 4 - x * x))], y: [(x, z) => x * x + z * z, 4] }, C('region'), { alpha: 0.4, n: 40 }),
      lab3('$y=x^{2}+z^{2}$', [1.7, 3.2, 0.9], C('surface')), lab3('$y=4$', [0, 4.2, 2.1], C('surface'))]);
    tex(d.readout, `\\iiint_{\\kE}\\sqrt{x^{2}+z^{2}}\\,dV=\\int_{0}^{2\\pi}\\int_{0}^{2}(4-r^{2})\\,r\\,r\\,dr\\,d\\theta=${hue('integral', '\\tfrac{128\\pi}{15}')}`);
  });
})();

/* Figure 15.49: that solid's projection onto the xy-plane, between y = x² and y = 4, read both ways; frame −2.5 to 2.5 by −0.5 to 4.5 */
(function () {
  const H = 500, d = sim('fig-cross-section', H);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2, max: 2, step: 0.01, value: 1, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: 0, max: 4, step: 0.01, value: 2, unit: '', dec: 2 });
  still(d, () => {
    const { ctx } = begin(d.c), s = Math.min((H - 110) / 5, 1060 / 5), w = 5 * s;
    const ax = axes(ctx, { l: 700 - w / 2, r: 700 + w / 2, t: 40, b: 40 + 5 * s }, [-2.5, 2.5], [-0.5, 4.5], { xl: 'x', yl: 'y', nx: 5, ny: 5 });
    const ol = SP.outline({ x: [-2, 2], y: [(x) => x * x, 4] }, 64), rc = C('region'), fc = C('function'), ink = PAL.ink;
    ctx.save(); ctx.fillStyle = alpha(rc, 0.25); ctx.beginPath(); ol.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); ctx.closePath(); ctx.fill(); ctx.restore();
    plot(ctx, ax, (x) => x * x, fc, { w: 4, x: [-2.15, 2.15] }); line(ctx, ax.X(-2.3), ax.Y(4), ax.X(2.3), ax.Y(4), fc, 4);
    text(ctx, '$y=x^{2}$', ax.X(1.75), ax.Y(2.4), fc, { size: 20, tex: true, bg: PAL.panel }); text(ctx, '$y=4$', ax.X(2.05), ax.Y(4.25), fc, { size: 20, tex: true, bg: PAL.panel });
    const x = xs.v, y = ys.v, r = Math.sqrt(y);
    line(ctx, ax.X(x), ax.Y(x * x), ax.X(x), ax.Y(4), ink, 5); dot(ctx, ax.X(x), ax.Y(x * x), ink, true, 7); dot(ctx, ax.X(x), ax.Y(4), ink, true, 7);
    line(ctx, ax.X(-r), ax.Y(y), ax.X(r), ax.Y(y), ink, 5); dot(ctx, ax.X(-r), ax.Y(y), ink, true, 7); dot(ctx, ax.X(r), ax.Y(y), ink, true, 7);
    tex(d.readout, `x=${nt(x)}:\\;${nt(x * x)}\\le y\\le 4,\\qquad y=${nt(y)}:\\;${nt(-r)}\\le x\\le ${nt(r)}`);
  });
})();
};
