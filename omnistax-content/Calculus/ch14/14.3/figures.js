/* Figures for section 14.3 Partial Derivatives. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, dot, text, register, cycle, tex, fmt, hover } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;

/* Figure 14.21: the stand-in surface f = 2 + sin x cos(y/2) over [−2.5, 2.5] × [−3, 3] (box z 0–3.4), the trace through (x₀, y₀)
   parallel to the chosen axis, the secant to the point h along it and, dashed, the tangent with slope f_x or f_y. */
(function () {
  const d = sim('sim-partial-secant');
  const f = (x, y) => 2 + Math.sin(x) * Math.cos(y / 2), box = [[-2.5, 2.5], [-3, 3], [0, 3.4]];
  const S = F.space3d(d, { box, h: 540 });
  const v = choice(d.controls, { label: 'vary', options: [{ value: 'x', label: 'x' }, { value: 'y', label: 'y' }], value: 'x', ms: 0 });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.02, max: 1.5, step: 0.01, value: 0.9, unit: '', dec: 2 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2.4, max: 1, step: 0.01, value: -0.6, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: -2.9, max: 1.4, step: 0.01, value: 0.5, unit: '', dec: 2 });
  S.drag({ at: () => [xs.v, ys.v, f(xs.v, ys.v)], on: 'graph', move: ([x, y]) => { xs.drive(Math.min(1, x)); ys.drive(Math.min(1.4, y)); } });
  function draw() {
    const x = xs.v, y = ys.v, h = hs.v, onX = v.value === 'x', z = f(x, y), [fx, fy] = SP.partials(f, x, y);
    const Q = onX ? [x + h, y, f(x + h, y)] : [x, y + h, f(x, y + h)], m = (Q[2] - z) / h, t = onX ? fx : fy;
    const dir = (k) => (onX ? [1, 0, k] : [0, 1, k]), lo = onX ? box[0][0] - x : box[1][0] - y, hi = onX ? box[0][1] - x : box[1][1] - y;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(f, { x: [-2.5, 2.5], y: [-3, 3] }, C('surface'), { n: 36, grid: 8, alpha: 0.5 }));
    S.set('trace', [...SP.plane([x, y, 1.7], onX ? [0, 1, 0] : [1, 0, 0], C('plane'), { box, alpha: 0.06 }),
      ...SP.curve(onX ? (s) => [s, y, f(s, y)] : (s) => [x, s, f(x, s)], onX ? box[0] : box[1], C('curve'), { w: 4 })]);
    S.set('lines', [...SP.line([x, y, z], dir(m), C('line'), { t: [Math.max(lo, -1.6), Math.min(hi, 2.2)], w: 5 }),
      ...SP.line([x, y, z], dir(t), C('line'), { t: [-1, 1], w: 3, dash: [10, 10] }),
      ...SP.point([x, y, z], C('point')), ...SP.point(Q, C('point'))]);
    tex(d.readout, onX ? `\\frac{\\kf(x+h,y)-\\kf(x,y)}{h}=\\frac{${n(Q[2], 3)}-${n(z, 3)}}{${n(h)}}=${hue('derivative', n(m, 3))}\\;\\to\\;\\kfx(${n(x)},${n(y)})=${hue('derivative', n(fx, 3))}`
      : `\\frac{\\kf(x,y+h)-\\kf(x,y)}{h}=\\frac{${n(Q[2], 3)}-${n(z, 3)}}{${n(h)}}=${hue('derivative', n(m, 3))}\\;\\to\\;\\kfy(${n(x)},${n(y)})=${hue('derivative', n(fy, 3))}`);
  }
  still(d, draw);
})();

/* Figure 14.22, a faithful copy: the level curves c = 0, 1, 2 of g = √(9 − x² − y²); axes −4 to 4, one scale. */
(function () {
  const d = sim('fig-contour-g', 520);
  const hits = []; hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), s = 440 / 8, box = { l: 700 - 220, r: 700 + 220, t: 40, b: 480 };
    const ax = axes(ctx, box, [-4, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 8, ny: 8 });
    hits.length = 0;
    [[0, 3], [1, Math.sqrt(8)], [2, Math.sqrt(5)]].forEach(([c, r], i) => {
      ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(ax.X(0), ax.Y(0), r * s, 0, TAU); ctx.stroke(); ctx.restore();
      const a = [2.3, 3.75, 0.9][i], rr = i === 2 ? r - 0.75 : r + 0.15;
      text(ctx, `c = ${c}`, ax.X(rr * Math.cos(a)) - 6, ax.Y(rr * Math.sin(a)) - 4, cc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    });
    [[Math.sqrt(5), '(√5, 0)', -26], [Math.sqrt(8), '(2√2, 0)', 30]].forEach(([x, name, dy]) => {
      dot(ctx, ax.X(x), ax.Y(0), pc, true, 8);
      text(ctx, name, ax.X(x) + 8, ax.Y(0) + dy, pc, { size: 20, weight: 600, bg: PAL.panel });
      hits.push({ x: ax.X(x), y: ax.Y(0), r: 12, name: `the point ${name}` });
    });
  });
})();

/* Figure 14.23: u = 2 sin(x/3) sin(y/4) e^(−25t/16) over [−20, 20]², x and y drawn at a fifth of the scale of u (box ±4 by
   ±2.2); t runs 0 to 3 in 6 s. */
(function () {
  const d = sim('sim-heat-snapshot');
  const T = 3, cy = cycle(() => T, 1.2), K = 5;
  const box = [[-4, 4], [-4, 4], [-2.2, 2.2]];
  const S = F.space3d(d, { box, h: 520 });
  const ticks = [-4, -2, 2, 4].flatMap((v) => [{ k: 'label', s: String(v * K).replace('-', '−'), p: [v, -0.45, 0], cls: 'tick' }, { k: 'label', s: String(v * K).replace('-', '−'), p: [-0.45, v, 0], cls: 'tick' }]);
  function draw() {
    const t = Math.min(cy.now(), T), e = Math.exp((-25 * t) / 16);
    const u = (X, Y) => 2 * Math.sin((K * X) / 3) * Math.sin((K * Y) / 4) * e;
    S.set('axes', [...SP.axes(box, { ticks: [0, 0, 1], names: ['$x$', '$y$', '$u$'] }), ...ticks]);
    S.set('graph', SP.graph(u, { x: [-4, 4], y: [-4, 4] }, C('surface'), { n: 44, grid: 10, alpha: 0.75 }));
    tex(d.readout, `t=${n(t)}:\\;u(x,y,t)=2\\sin (\\tfrac{x}{3})\\sin (\\tfrac{y}{4})\\,e^{-25t/16},\\quad 2e^{-25t/16}=${hue('function', n(2 * e, 3))}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* Figure 14.24: u_m(x, t) = e^(−π²m²c²t) sin(mπx) on 0 ≤ x ≤ 1, 0 ≤ t ≤ 1 (box 0–1, 0–1, −1–1); the profile at the moving t, 5 s. */
(function () {
  const d = sim('sim-heat-wire');
  const cy = cycle(() => 1, 1.2), box = [[0, 1], [0, 1], [-1, 1]];
  const S = F.space3d(d, { box, h: 520 });
  const ms = choice(d.controls, { label: 'm', options: [1, 2, 3].map((k) => ({ value: String(k), label: String(k) })), value: '1', ms: 0, onInput: () => cy.reset?.() });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0.2, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, onInput: () => cy.reset?.() });
  function draw() {
    const m = +ms.value, c = cs.v, t = Math.min(cy.now(), 1), PI = Math.PI;
    const u = (x, s) => Math.exp(-PI * PI * m * m * c * c * s) * Math.sin(m * PI * x), amp = Math.exp(-PI * PI * m * m * c * c * t);
    S.set('axes', SP.axes(box, { ticks: [0.5, 0.5, 0.5], names: ['$x$', '$t$', '$u$'] }));
    S.set('graph', SP.graph(u, { x: [0, 1], y: [0, 1] }, C('surface'), { n: 36, grid: 8, alpha: 0.5 }));
    S.set('profile', [...SP.curve((x) => [x, t, u(x, t)], [0, 1], C('function'), { w: 6 }), ...SP.line([0, t, 0], [1, 0, 0], 'guide', { t: [0, 1], w: 2 })]);
    tex(d.readout, `t=${n(t)}:\\;u_{${m}}(x,t)=e^{-\\pi^{2}(${m})^{2}(${n(c)})^{2}t}\\sin (${m === 1 ? '' : m}\\pi x)=${hue('function', n(amp, 3))}\\sin (${m === 1 ? '' : m}\\pi x)`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();
};
