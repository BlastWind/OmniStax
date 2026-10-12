/* Figures for section 16.5 Divergence and Curl. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.5'] = function (root, F) {
const { C, PAL, alpha, ctl, select, cycle, begin, axes, dot, line, text, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const fit = (xr, yr, t, h, cx = 700) => { const s = h / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b: t + h }; };
const ticks = (hi) => (v) => (Math.abs(v - hi) < 1e-9 ? '' : fmt(v, 0).replace('-', '−'));
function poly(ctx, ax, pts, color, w, fill) {
  ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (color) { ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke(); }
  ctx.restore();
}
/* one fourth-order Runge–Kutta step of length h along a plane field */
function rk(Fv, p, h) {
  const k1 = Fv(p), k2 = Fv([p[0] + (h / 2) * k1[0], p[1] + (h / 2) * k1[1]]), k3 = Fv([p[0] + (h / 2) * k2[0], p[1] + (h / 2) * k2[1]]), k4 = Fv([p[0] + h * k3[0], p[1] + h * k3[1]]);
  return [p[0] + (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), p[1] + (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
}
const areaOf = (pts) => pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;

/* Figure 16.50 + 16.51 + 16.52 + 16.53: an elastic circle of radius 0.5 dropped into a fluid flows with it for model time τ in 5 s;
   its area holds where div F = 0 and shrinks or grows where it is not. Axes −4 to 5 by −3 to 6, one scale. */
(function () {
  const d = sim('sim-elastic-circle', 640);
  const FIELDS = [
    { label: '⟨1, 2⟩', F: () => [1, 2], div: () => 0, tex: '0', c: [-2, -2.5], T: 2.6 },
    { label: '⟨−y, x⟩', F: ([x, y]) => [-y, x], div: () => 0, tex: '0', c: [2.5, 0], T: Math.PI },
    { label: '⟨−x, −y⟩', F: ([x, y]) => [-x, -y], div: () => -2, tex: '-2', c: [3, 3], T: 1.2 },
    { label: '⟨x²y, y − xy²⟩', F: ([x, y]) => [x * x * y, y - x * y * y], div: () => 1, tex: '1', c: [1, 1], T: 1 },
    { label: '⟨−xy, y⟩', F: ([x, y]) => [-x * y, y], div: (x, y) => 1 - y, tex: '1-y', c: [1, 4], T: 0.3 },
  ];
  const pick = select(d.controls, { label: 'F', key: 'field', options: FIELDS.map((f, i) => ({ value: String(i), label: f.label })), value: '2', ms: 0 });
  const cy = cycle(() => 5, 1.2);
  const N = 72, R0 = 0.5;
  function draw() {
    const { ctx } = begin(d.c), o = FIELDS[+pick.value], vf = C('vector-field'), rc = C('region');
    const ax = axes(ctx, fit([-4, 5], [-3, 6], 30, 570), [-4, 5], [-3, 6], { xl: 'x', yl: 'y', nx: 9, ny: 9, fx: ticks(5), fy: ticks(6) });
    SP.field2(ctx, ax, o.F, alpha(vf, 0.5), { n: [9, 9], w: 2 });
    const tau = (Math.min(1, cy.now() / 5)) * o.T, steps = Math.max(1, Math.ceil(tau / 0.01)), h = tau / steps;
    let pts = Array.from({ length: N }, (_, i) => [o.c[0] + R0 * Math.cos((TAU * i) / N), o.c[1] + R0 * Math.sin((TAU * i) / N)]);
    poly(ctx, ax, pts, alpha(rc, 0.5), 2, null);
    for (let s = 0; s < steps; s++) pts = pts.map((p) => rk(o.F, p, h));
    poly(ctx, ax, pts, rc, 4, alpha(rc, 0.3));
    const A0 = Math.PI * R0 * R0, A = areaOf(pts);
    tex(d.readout, `\\kdivF=${o.tex}=${hue('function', n2(o.div(...o.c)))}\\;\\text{at the start}\\;(${n2(o.c[0], 0)},${n2(o.c[1], 0)}),\\quad \\text{area}=${n2(A, 3)}=${n2(A / A0, 3)}\\times\\text{its start}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 16.54 + 16.55: a small paddlewheel at the dragged point (x₀, y₀) turns at the rate (Q_x − P_y)/2, half the k-component
   of curl F; the wheel's angle runs on a 2π s loop, a whole number of quarter turns at these rates. Axes −4 to 4, one scale. */
(function () {
  const d = sim('sim-paddlewheel', 620);
  const FIELDS = [
    { label: '⟨y, 0⟩', F: ([, y]) => [y, 0], curl: () => -1, tex: '-\\kveck' },
    { label: '⟨−y, x⟩', F: ([x, y]) => [-y, x], curl: () => 2, tex: '2\\kveck' },
    { label: '⟨1, 2⟩', F: () => [1, 2], curl: () => 0, tex: '\\mathbf{0}' },
    { label: '⟨−y, x⟩/(x² + y²)', F: ([x, y]) => { const q = x * x + y * y; return [-y / q, x / q]; }, curl: () => 0, tex: '\\mathbf{0}', scale: 0.5 },
  ];
  const pick = select(d.controls, { label: 'F', key: 'field', options: FIELDS.map((f, i) => ({ value: String(i), label: f.label })), value: '0', ms: 0 });
  const xs = ctl(d.controls, { label: 'x₀', cls: '', key: 'x', min: -3.5, max: 3.5, step: 0.05, value: 1.5, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y₀', cls: '', key: 'y', min: -3.5, max: 3.5, step: 0.05, value: 1.5, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: ys });
  const cy = cycle(() => TAU, 0);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), o = FIELDS[+pick.value], vf = C('vector-field'), wc = PAL.ink;
    const ax = axes(ctx, fit([-4, 4], [-4, 4], 30, 560), [-4, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 8, ny: 8, fx: ticks(4), fy: ticks(4) });
    SP.field2(ctx, ax, o.F, alpha(vf, 0.55), { n: [8, 8], w: 2.5, scale: o.scale });
    const x0 = xs.v, y0 = ys.v, w = o.curl(x0, y0) / 2, ang = w * cy.now(), R = 0.6, px = ax.X(R) - ax.X(0);
    const p = P.draw(ctx, ax, C('point'));
    if (p) {
      ctx.save(); ctx.strokeStyle = wc; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(p.x, p.y, px * 0.25, 0, TAU); ctx.stroke(); ctx.restore();
      for (let k = 0; k < 4; k++) { const a = ang + (k * Math.PI) / 2; line(ctx, p.x + 0.25 * px * Math.cos(a), p.y - 0.25 * px * Math.sin(a), p.x + px * Math.cos(a), p.y - px * Math.sin(a), wc, 6); }
      hits.length = 0; hits.push({ x: p.x, y: p.y, r: 24, name: `the paddlewheel at (${n2(x0)}, ${n2(y0)})` });
    }
    const spin = w > 1e-9 ? '\\text{counterclockwise}' : w < -1e-9 ? '\\text{clockwise}' : '\\text{no spin}';
    tex(d.readout, `\\kcurlF=(\\kQ_{x}-\\kP_{y})\\kveck=${o.tex},\\quad \\text{spin}\\;\\tfrac{1}{2}(\\kQ_{x}-\\kP_{y})=${hue('vector-field', n2(w))}:\\;${spin}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 16.56: Example 16.57's ⟨yz, xz, xy⟩ in the box [−2, 2]³, whose curl is zero */
(function () {
  const d = sim('sim-curl-free-field');
  const box = [[-2, 2], [-2, 2], [-2, 2]], Fv = (p) => [p[1] * p[2], p[0] * p[2], p[0] * p[1]];
  const S = F.space3d(d, { box, h: 540, pitch: [-1.4, 1.4] });
  function draw() {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('field', SP.field(Fv, box, C('vector-field'), { n: [4, 4, 4] }));
    tex(d.readout, `\\kcurlF=(x-x)\\kveci+(y-y)\\kvecj+(z-z)\\kveck=\\mathbf{0}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
