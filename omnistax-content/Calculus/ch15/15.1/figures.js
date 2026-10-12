/* Figures for section 15.1 Double Integrals over Rectangular Regions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.1'] = function (root, F) {
const { C, PAL, ctl, choice, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
/* the plane region R drawn on the floor z = 0 */
const floor = (R, color, alpha = 0.22) => [{ k: 'faces', faces: [SP.outline(R, 16).map((p) => [p[0], p[1], 0])], color, alpha }, ...SP.edges(R, 16).map((pts) => ({ k: 'line', pts: pts.map((p) => [p[0], p[1], 0]), color, w: 2.5 }))];
const lab = (s, p, color) => ({ k: 'label', s, p, color });
/* a scene whose z is drawn k times shorter than x and y, its z ticks labelled in true units every zstep */
function tall(d, box, k, zstep, o = {}) {
  const b = [box[0], box[1], [box[2][0] / k, box[2][1] / k]];
  const S = F.space3d(d, { ...o, box: b });
  const axes = () => {
    const out = SP.axes(b, { ticks: [o.tx ?? 1, o.ty ?? 1, 0] }), tl = Math.hypot(...b.map(([a, c]) => c - a)) * 0.012;
    const x0 = b[0][0] <= 0 && b[0][1] >= 0 ? 0 : b[0][0], y0 = b[1][0] <= 0 && b[1][1] >= 0 ? 0 : b[1][0];
    for (let z = Math.ceil(box[2][0] / zstep) * zstep; z < box[2][1] - zstep * 0.4; z += zstep) {
      if (Math.abs(z) < 1e-9) continue;
      out.push({ k: 'segs', segs: [[[x0, y0 - tl, z / k], [x0, y0 + tl, z / k]]], color: 'muted', w: 2 });
      out.push({ k: 'label', s: String(+z.toFixed(6)).replace('-', '−'), p: [x0, y0 - tl * 4, z / k], cls: 'tick' });
    }
    return out;
  };
  return { S, axes, z: (v) => v / k, f: (fn) => (x, y) => fn(x, y) / k };
}
const SAMPLE = [{ value: 'll', label: 'lower left' }, { value: 'ur', label: 'upper right' }, { value: 'mid', label: 'midpoint' }];

/* Figure 15.2 + 15.3 + 15.4: boxes over the m by n subrectangles of R = [0, 4] × [0, 3] under a stand-in surface; box 0 to 4.4, 0 to 3.4, 0 to 3.4 */
(function () {
  const d = sim('sim-double-riemann');
  const f = (x, y) => 2 + 0.5 * Math.sin(1.2 * x) + 0.35 * y * Math.cos(0.9 * x);
  const R = { x: [0, 4], y: [0, 3] }, box = [[0, 4.4], [0, 3.4], [0, 3.4]];
  const exact = SP.riemann2(R, f, 300, 300).sum;
  const S = F.space3d(d, { box, h: 560, pitch: [0.1, 1.4] });
  const ms = ctl(d.controls, { label: 'm', cls: '', key: 'm', min: 1, max: 12, step: 1, value: 4, unit: '', dec: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 12, step: 1, value: 3, unit: '', dec: 0 });
  const pick = choice(d.controls, { label: 'sample', options: SAMPLE, value: 'mid', ms: 0 });
  function draw() {
    const m = ms.v, n = ns.v, { cells, sum } = SP.riemann2(R, f, m, n, pick.value);
    const i = Math.min(1, m - 1), j = Math.min(1, n - 1), one = cells[i * n + j];
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('base', [...floor(R, C('region')), lab('$\\kR$', [4.15, -0.25, 0], C('region'))]);
    S.set('graph', [...SP.graph(f, R, C('surface'), { alpha: 0.55, grid: 8, n: 40 }), lab('$z=\\kf(x,y)$', [0, 3, f(0, 3) + 0.35], C('surface'))]);
    S.set('boxes', SP.boxes(cells.filter((c) => c !== one), C('integral'), { alpha: 0.18 }));
    S.set('one', [...SP.boxes([one], C('integral'), { alpha: 0.9 }),
      lab(`$\\kR_{${i + 1}${j + 1}}$`, [one.at[0], one.at[1] - 3 / n / 2 - 0.12, 0], C('region')),
      lab(`$\\kf(x_{${i + 1}${j + 1}}^{*},y_{${i + 1}${j + 1}}^{*})$`, [one.at[0], one.at[1], one.h + 0.35], C('function'))]);
    S.set('samples', m * n <= 36 ? cells.map((c) => ({ k: 'dot', p: c.at, color: C('point'), r: 6 })) : []);
    tex(d.readout, `\\kV\\approx\\sum_{i=1}^{${m}}\\sum_{j=1}^{${n}}\\kf(x_{ij}^{*},y_{ij}^{*})\\,\\Delta A=${hue('integral', n2(sum, 3))},\\qquad \\iint_{\\kR}\\kf(x,y)\\,dA=${hue('integral', n2(exact, 3))}`);
  }
  still(d, draw);
})();

/* Figure 15.5 + 15.6: Example 15.1, z = 3x² − y over R = [0, 2] × [0, 2]; the boxes below the plane count negatively. Box 0 to 2.3 by 0 to 2.3 by −2.5 to 12.5, z drawn a quarter of its length */
(function () {
  const d = sim('sim-example-riemann');
  const f = (x, y) => 3 * x * x - y;
  const R = { x: [0, 2], y: [0, 2] }, T = tall(d, [[0, 2.3], [0, 2.3], [-2.5, 12.5]], 4, 2, { h: 560, pitch: [-0.3, 1.4] }), S = T.S;
  const ms = ctl(d.controls, { label: 'm = n', cls: '', key: 'm', min: 1, max: 12, step: 1, value: 2, unit: '', dec: 0, detents: [2] });
  const pick = choice(d.controls, { label: 'sample', options: SAMPLE.slice(1), value: 'ur', ms: 0 });
  function draw() {
    const m = ms.v, { cells } = SP.riemann2(R, T.f(f), m, m, pick.value), sum = SP.riemann2(R, f, m, m, pick.value).sum;
    S.set('axes', T.axes());
    S.set('base', [...floor(R, C('region')), lab('$\\kR$', [2.2, -0.2, 0], C('region'))]);
    S.set('graph', [...SP.graph(T.f(f), R, C('surface'), { alpha: 0.5, grid: 8, n: 40 }), lab('$z=3x^{2}-y$', [2, 0, T.z(12) + 0.15], C('surface'))]);
    S.set('boxes', SP.boxes(cells, C('integral'), { alpha: 0.3 }));
    S.set('samples', m <= 6 ? cells.map((c) => ({ k: 'dot', p: c.at, color: C('point'), r: 6 })) : []);
    const terms = m === 2 ? `=${[0, 1].flatMap((j) => [0, 1].map((i) => cells[i * 2 + j].h * 4)).map((h) => n2(h, h % 1 ? 2 : 0)).join('+').replace(/\+-/g, '-')}` : '';
    tex(d.readout, `\\kV\\approx ${m === 2 ? terms.slice(1) : `\\sum_{i=1}^{${m}}\\sum_{j=1}^{${m}}\\kf(x_{ij}^{*},y_{ij}^{*})\\,\\Delta A`}=${hue('integral', n2(sum, 3))},\\qquad \\iint_{\\kR}\\kf(x,y)\\,dA=${hue('integral', '12')}`);
  }
  still(d, draw);
})();

/* Figure 15.7: the slices at x and at y under Example 15.6's z = 3x² − y over [0, 2] × [0, 3]; box 0 to 2.3 by 0 to 3.3 by −3.5 to 12.5, z drawn a quarter of its length */
(function () {
  const d = sim('sim-fubini-slices');
  const f = (x, y) => 3 * x * x - y;
  const R = { x: [0, 2], y: [0, 3] }, T = tall(d, [[0, 2.3], [0, 3.3], [-3.5, 12.5]], 4, 2, { h: 560, pitch: [-0.3, 1.4] }), S = T.S;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 2, step: 0.02, value: 1.2, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: 0, max: 3, step: 0.02, value: 1.5, unit: '', dec: 2 });
  /* the slice under the surface along the segment from p to q, cut into k strips from z = 0 to the graph */
  const slice = (p, q, k, color) => {
    const faces = [], top = [];
    for (let s = 0; s <= k; s++) { const t = s / k, x = p[0] + (q[0] - p[0]) * t, y = p[1] + (q[1] - p[1]) * t; top.push([x, y, T.z(f(x, y))]); }
    for (let s = 0; s < k; s++) { const a = top[s], b = top[s + 1]; faces.push([[a[0], a[1], 0], [b[0], b[1], 0], b, a]); }
    return [{ k: 'faces', faces, color, alpha: 0.75 }, { k: 'line', pts: top, color: C('surface'), w: 4 }, { k: 'line', pts: [[p[0], p[1], 0], [q[0], q[1], 0]], color: 'ink', w: 2.5 }];
  };
  function draw() {
    const x = xs.v, y = ys.v, Ax = 9 * x * x - 4.5, Ay = 8 - 2 * y;
    S.set('axes', T.axes());
    S.set('base', floor(R, C('region'), 0.15));
    S.set('graph', [...SP.graph(T.f(f), R, C('surface'), { alpha: 0.3, grid: 8, n: 40 }), lab('$z=3x^{2}-y$', [2, 0, T.z(12) + 0.15], C('surface'))]);
    S.set('sx', [...slice([x, 0], [x, 3], 30, C('integral')), lab('$\\kA(x)$', [x, 3, T.z(Math.max(f(x, 3), 0)) + 0.25], C('integral'))]);
    S.set('sy', [...slice([0, y], [2, y], 30, C('integral')), lab('$\\kA(y)$', [2, y, T.z(Math.max(f(2, y), 0)) + 0.25], C('integral'))]);
    tex(d.readout, `\\kA(x)=9x^{2}-\\tfrac{9}{2}=${hue('integral', n2(Ax))},\\quad \\kA(y)=8-2y=${hue('integral', n2(Ay))},\\quad \\int_{0}^{2}\\kA(x)\\,dx=\\int_{0}^{3}\\kA(y)\\,dy=${hue('integral', '15')}`);
  }
  still(d, draw);
})();

/* Figure 15.8, a still copy: Example 15.7's z = x sin(xy) over [0, π] × [1, 2]; box 0 to 3.4 by 0 to 2.3 by −3.3 to 3.3, z drawn at half its length */
(function () {
  const d = sim('fig-x-sin-xy');
  const f = (x, y) => x * Math.sin(x * y), R = { x: [0, Math.PI], y: [1, 2] };
  const T = tall(d, [[0, 3.4], [0, 2.3], [-3.3, 3.3]], 2, 1, { h: 420, locked: true, turn: -2.5, tilt: 0.45 }), S = T.S;
  still(d, () => {
    S.set('axes', T.axes());
    S.set('base', floor(R, C('region')));
    S.set('graph', [...SP.graph(T.f(f), R, C('surface'), { alpha: 0.75, grid: 10, n: 48 }), lab('$z=x\\sin(xy)$', [Math.PI, 2, T.z(f(Math.PI, 2)) + 0.3], C('surface'))]);
  });
})();

/* Figure 15.9, a still copy: Example 15.9's z = 27 − 2x² − y² over R₁ = [−3, 3]² (a) and the solid S over R₂ = [0, 3]² (b); box ±3.3 by ±3.3 by 0 to 28, z drawn at a fifth of its length */
(function () {
  const d = sim('fig-paraboloid');
  const f = (x, y) => 27 - 2 * x * x - y * y;
  const R1 = { x: [-3, 3], y: [-3, 3] }, R2 = { x: [0, 3], y: [0, 3] };
  const T = tall(d, [[-3.3, 3.3], [-3.3, 3.3], [0, 28]], 5, 5, { h: 460, locked: true, turn: -2.25, tilt: 0.4 }), S = T.S;
  const pick = choice(d.controls, { label: 'part', options: [{ value: 'a', label: '(a)' }, { value: 'b', label: '(b)' }], value: 'a', ms: 0 });
  still(d, () => {
    const b = pick.value === 'b';
    S.set('axes', T.axes());
    S.set('base', [...floor(b ? R2 : R1, C('region')), lab(b ? '$\\kR_{2}$' : '$\\kR_{1}$', b ? [3.2, 1.5, 0] : [3.2, -3.2, 0], C('region'))]);
    S.set('graph', b ? [...SP.solid({ x: [0, 3], y: [0, 3], z: [0, (x, y) => T.z(f(x, y))] }, C('region'), { alpha: 0.5 }), lab('$\\kS$', [1.5, 1.5, T.z(f(1.5, 1.5)) + 0.4], C('region'))]
      : [...SP.graph(T.f(f), R1, C('surface'), { alpha: 0.75, grid: 10, n: 40 }), lab('$z=27-2x^{2}-y^{2}$', [0, 0, T.z(27) + 0.35], C('surface'))]);
    tex(d.readout, b ? `\\kV=\\int_{0}^{3}\\int_{0}^{3}(27-2x^{2}-y^{2})\\,dx\\,dy=${hue('integral', '162')}` : `z=27-2x^{2}-y^{2}\\;\\text{over}\\;\\kR_{1}=[-3,3]\\times[-3,3]`);
  });
})();

/* Sim: the box of height h over R₂ = [0, 3]² beside Example 15.9's solid; equal volumes at h = f_ave = 18. Box 0 to 3.3 by 0 to 3.3 by 0 to 28, z drawn at a fifth of its length */
(function () {
  const d = sim('sim-average-height');
  const f = (x, y) => 27 - 2 * x * x - y * y;
  const T = tall(d, [[0, 3.3], [0, 3.3], [0, 28]], 5, 5, { h: 520, pitch: [0.1, 1.4] }), S = T.S;
  const hs = ctl(d.controls, { label: 'h', cls: 'function', key: 'h', min: 0, max: 27, step: 0.1, value: 10, unit: '', dec: 1, specials: [{ at: 18 }] });
  function draw() {
    const h = hs.v, at = Math.abs(h - 18) < 0.05;
    S.set('axes', T.axes());
    S.set('solid', [...SP.solid({ x: [0, 3], y: [0, 3], z: [0, (x, y) => T.z(f(x, y))] }, C('region'), { alpha: 0.4 }), lab('$\\kS$', [1, 1, T.z(f(1, 1)) + 0.4], C('region'))]);
    S.set('lid', h > 0.05 ? [...SP.solid({ x: [0, 3], y: [0, 3], z: [0, T.z(h)] }, C('integral'), { alpha: 0.18 }), lab(`$h=${n2(h, 1)}$`, [0, 3, T.z(h) + 0.3], C('function'))] : []);
    tex(d.readout, at ? `\\kfave=\\frac{\\kV}{\\kA(\\kR_{2})}=\\frac{162}{9}=${hue('function', '18')}:\\;18\\cdot 9=${hue('integral', '162')}=\\kV`
      : `h\\cdot \\kA(\\kR_{2})=${n2(h, 1)}\\cdot 9=${hue('integral', n2(9 * h, 1))},\\qquad \\kV=\\iint_{\\kR_{2}}(27-2x^{2}-y^{2})\\,dA=${hue('integral', '162')}`);
  }
  still(d, draw);
})();
};
