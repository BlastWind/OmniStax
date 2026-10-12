/* Figures for section 14.4 Tangent Planes and Linear Approximations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, dot, line, text, headline, plot, tangent, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const sgn = (v, dec = 2) => (v < 0 ? `-${n(-v, dec)}` : `+${n(v, dec)}`);
/* axes whose z ticks read K times the drawn height, for a graph drawn at 1/K of its scale */
function scaledAxes(box, K, step) {
  const org = box.map(([a, b]) => (a <= 0 && b >= 0 ? 0 : a));
  const out = SP.axes(box, { ticks: [1, 1, 0] });
  for (let v = step; v < box[2][1] - step * 0.3; v += step) {
    out.push({ k: 'segs', segs: [[[org[0] - 0.06, org[1], v], [org[0] + 0.06, org[1], v]]], color: 'muted', w: 2 });
    out.push({ k: 'label', s: String(Math.round(v * K)), p: [org[0] - 0.22, org[1], v], cls: 'tick' });
  }
  return out;
}

/* Figure 14.27 + 14.28: Example 14.21's surface over [0.3, 3.7] × [−2.2, 0.2], heights at 1/20 (box z 0–5); the tangent plane
   z = 13x − 26y − 18 at (2, −1, 34) and a curve of S through P₀ in the direction θ with its tangent line. */
(function () {
  const d = sim('sim-tangent-plane');
  const K = 20, f = (x, y) => 2 * x * x - 3 * x * y + 8 * y * y + 2 * x - 4 * y + 4, fs = (x, y) => f(x, y) / K;
  const x0 = 2, y0 = -1, box = [[0.3, 3.7], [-2.2, 0.2], [0, 5]];
  const S = F.space3d(d, { box, h: 540, turn: -0.75, tilt: 0.3 });
  const th = ctl(d.controls, { label: 'θ', cls: 'angle', key: 'theta', min: 0, max: 360, step: 1, value: 40, unit: '°', dec: 0, detents: [0, 90, 180, 270] });
  function draw() {
    const t = (th.v * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t), D = 13 * c - 26 * s, z0 = fs(x0, y0);
    const reach = (lo, hi, p, u) => (u > 1e-9 ? (hi - p) / u : u < -1e-9 ? (lo - p) / u : 9);
    const smax = Math.min(reach(box[0][0], box[0][1], x0, c), reach(box[1][0], box[1][1], y0, s), 1.4);
    const smin = -Math.min(reach(box[0][0], box[0][1], x0, -c), reach(box[1][0], box[1][1], y0, -s), 1.4);
    const cur = (u) => [x0 + u * c, y0 + u * s, fs(x0 + u * c, y0 + u * s)];
    S.set('axes', scaledAxes(box, K, 1));
    S.set('graph', SP.graph(fs, { x: [0.3, 3.7], y: [-2.2, 0.2] }, C('surface'), { n: 32, grid: 8, alpha: 0.55 }));
    S.set('plane', SP.tangent(fs, x0, y0, C('plane'), { size: 0.9, alpha: 0.4 }));
    S.set('traces', [...SP.curve((u) => [u, y0, fs(u, y0)], [0.3, 3.7], alpha(C('curve'), 0.45), { w: 3 }), ...SP.curve((u) => [x0, u, fs(x0, u)], [-2.2, 0.2], alpha(C('curve'), 0.45), { w: 3 })]);
    S.set('curve', [...SP.curve(cur, [smin, smax], C('curve'), { w: 5 }), ...SP.line([x0, y0, z0], [c, s, D / K], C('line'), { t: [-0.8, 0.8], w: 4 }),
      ...SP.point([x0, y0, z0], C('point'), { name: '$P_{0}$' })]);
    tex(d.readout, `z=13x-26y-18;\\quad \\text{slope of the tangent line at }\\theta =${th.v}^{\\circ}:\\;13\\cos \\theta -26\\sin \\theta =${hue('derivative', n(D))}`);
  }
  still(d, draw);
})();

/* Figure 14.29 + 14.32: f = xy/√(x² + y²) on the disk of radius 2 (box ±2 by ±1.2), the plane z = 0 that f_x = f_y = 0 would
   give, and the slice through the origin at the angle θ: z = |s| cos θ sin θ, a corner unless θ is a multiple of 90°. */
(function () {
  const d = sim('sim-no-tangent-plane');
  const f = (x, y) => { const r = Math.hypot(x, y); return r < 1e-12 ? 0 : (x * y) / r; }, box = [[-2, 2], [-2, 2], [-1.2, 1.2]];
  const S = F.space3d(d, { box, h: 540 });
  const th = ctl(d.controls, { label: 'θ', cls: 'angle', key: 'theta', min: 0, max: 180, step: 1, value: 45, unit: '°', dec: 0, detents: [0, 90, 180], specials: [{ at: 45 }] });
  function draw() {
    const t = (th.v * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t), k = c * s;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(f, { theta: [0, 2 * Math.PI], r: [0, 2] }, C('surface'), { n: 44, grid: 8, alpha: 0.5 }));
    S.set('flat', SP.plane([0, 0, 0], [0, 0, 1], C('plane'), { size: 2, alpha: 0.07 }));
    S.set('slice', [...SP.plane([0, 0, 0], [-s, c, 0], 'guide', { box, alpha: 0.08 }),
      ...SP.curve((u) => [u * c, u * s, Math.abs(u) * k], [-2, 2], C('curve'), { w: 5 }),
      ...SP.line([0, 0, 0], [c, s, k], C('line'), { t: [0, 1.6], w: 3, dash: [10, 10] }), ...SP.line([0, 0, 0], [-c, -s, k], C('line'), { t: [0, 1.6], w: 3, dash: [10, 10] }),
      { k: 'dot', p: [0, 0, 0], color: C('point') }]);
    tex(d.readout, `\\kf(s\\cos \\theta ,s\\sin \\theta )=|s|\\cos \\theta \\sin \\theta :\\;\\text{slope }${hue('derivative', n(k, 3))}\\text{ for }s\\gt 0,\\;${hue('derivative', n(-k, 3))}\\text{ for }s\\lt 0`);
  }
  still(d, draw);
})();

/* Figure 14.30: f(x) = √(32 − 4x²) and its tangent line at a = 2; axes 0 to 3 by 0 to 7. */
(function () {
  const d = sim('sim-tangent-line-approximation', 480);
  const f = (x) => Math.sqrt(32 - 4 * x * x), a = 2, L = (x) => 4 - 2 * (x - a);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 2.8, step: 0.01, value: 2.4, unit: '', dec: 2, specials: [{ at: 2 }] });
  const P = drag(d, { x: xs, y: f });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 260, r: 1140, t: 80, b: 420 }, [0, 3], [0, 7], { xl: 'x', yl: 'y', nx: 6, ny: 7, fx: (v) => n(v, 1) });
    plot(ctx, ax, f, C('function'), { x: [0, Math.sqrt(8) - 1e-6] });
    tangent(ctx, ax, f, a, C('line'), { df: () => -2 });
    const x = xs.v, y = f(x), l = L(x);
    dot(ctx, ax.X(a), ax.Y(4), C('point'), true, 9);
    line(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(l), C('error'), 5);
    dot(ctx, ax.X(x), ax.Y(l), C('line'), true, 7);
    P.draw(ctx, ax, C('function'));
    hits.length = 0; hits.push({ x: ax.X(a), y: ax.Y(4), r: 12, name: 'the point (2, 4) where the line touches' }, { x: ax.X(x), y: (ax.Y(y) + ax.Y(l)) / 2, r: 12, name: `the error f(x) − L(x) = ${n(y - l, 3)}` });
    text(ctx, 'tangent line', ax.X(0.95), ax.Y(L(0.95)) - 16, C('line'), { size: 20, weight: 600, bg: PAL.panel });
    headline(ctx, `At x = ${n(x)}: f(x) = ${n(y, 3)}, the tangent line gives ${n(l, 3)}`);
    tex(d.readout, `\\kf(${n(x)})=\\sqrt{32-4(${n(x)})^{2}}=${hue('function', n(y, 3))},\\quad 4-2(${n(x)}-2)=${hue('line', n(l, 3))},\\quad \\text{error }${hue('error', n(y - l, 3))}`);
  }
  still(d, draw);
})();

/* Figure 14.31 + 14.33: the step (Δx, Δy) from (x₀, y₀); Example 14.23 (f = √(41 − 4x² − y²) at (2, 3), box ±3.4, ±6.6, 0–6.6)
   or Example 14.25 (f = 3x² − 2xy + y² at (2, −3), heights at 1/25, box 0.5–3.5, −4.5 to −1.5, 0–3.8). */
(function () {
  const d = sim('sim-plane-approximation');
  const EX = {
    a: { f: (x, y) => Math.sqrt(Math.max(0, 41 - 4 * x * x - y * y)), x0: 2, y0: 3, K: 1, box: [[-3.4, 3.4], [-6.6, 6.6], [0, 6.6]], dx: 0.1, dy: -0.1,
         R: { x: [-3.2, 3.2], y: [(x) => -0.995 * Math.sqrt(Math.max(0, 41 - 4 * x * x)), (x) => 0.995 * Math.sqrt(Math.max(0, 41 - 4 * x * x))] }, step: 2, size: 1.4 },
    b: { f: (x, y) => 3 * x * x - 2 * x * y + y * y, x0: 2, y0: -3, K: 25, box: [[0.5, 3.5], [-4.5, -1.5], [0, 3.8]], dx: 0.1, dy: -0.05,
         R: { x: [0.5, 3.5], y: [-4.5, -1.5] }, step: 1, size: 0.9 },
  };
  const pick = choice(d.controls, { label: 'example', options: [{ value: 'a', label: 'Example 14.23' }, { value: 'b', label: 'Example 14.25' }], value: 'a', ms: 0, onInput: () => { const o = EX[pick.value]; dxs.drive(o.dx); dys.drive(o.dy); } });
  const dxs = ctl(d.controls, { label: 'Δx', cls: '', key: 'dx', min: -1, max: 1, step: 0.01, value: 0.1, unit: '', dec: 2 });
  const dys = ctl(d.controls, { label: 'Δy', cls: '', key: 'dy', min: -1, max: 1, step: 0.01, value: -0.1, unit: '', dec: 2 });
  let S = null, at = '';
  function draw() {
    const o = EX[pick.value], fs = (x, y) => o.f(x, y) / o.K;
    if (at !== pick.value) { at = pick.value; S?.v?.dispose?.(); d.stage.replaceChildren(); S = F.space3d(d, { box: o.box, h: 540 }); }
    const [fx, fy] = SP.partials(o.f, o.x0, o.y0), z0 = o.f(o.x0, o.y0), x1 = o.x0 + dxs.v, y1 = o.y0 + dys.v;
    const dz = fx * dxs.v + fy * dys.v, Dz = o.f(x1, y1) - z0, ok = 41 - 4 * x1 * x1 - y1 * y1 >= 0 || pick.value === 'b';
    S.set('axes', o.K === 1 ? SP.axes(o.box, { ticks: o.step }) : scaledAxes(o.box, o.K, o.step));
    S.set('graph', SP.graph(fs, o.R, C('surface'), { n: 36, grid: 8, alpha: 0.5 }));
    S.set('plane', SP.tangent(fs, o.x0, o.y0, C('plane'), { size: o.size, alpha: 0.45 }));
    const ps = [x1, y1, (z0 + Dz) / o.K], pl = [x1, y1, (z0 + dz) / o.K];
    S.set('step', [...SP.point([o.x0, o.y0, z0 / o.K], C('point')), { k: 'segs', segs: [[[x1, y1, 0], ps]], color: 'guide', w: 2 },
      { k: 'dot', p: ps, color: C('function') }, { k: 'dot', p: pl, color: C('plane') }, { k: 'line', pts: [ps, pl], color: C('error'), w: 5 }]);
    tex(d.readout, ok ? `dz=\\kfx\\,\\Delta x+\\kfy\\,\\Delta y=${n(fx, 3)}(${n(dxs.v)})${sgn(fy, 3)}(${n(dys.v)})=${hue('plane', n(dz, 4))},\\quad \\Delta z=${hue('function', n(Dz, 4))}`
      : `(x_{0}+\\Delta x,y_{0}+\\Delta y)\\;\\text{lies outside the domain of }\\kf`);
  }
  still(d, draw);
})();
};
