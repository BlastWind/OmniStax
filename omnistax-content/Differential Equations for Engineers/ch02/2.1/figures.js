/* Figures for section 2.1 Second-order linear ODEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, label, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sgn = (v) => (v < 0 ? '-' : '+');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Sim: Theorem 2.1.2 for y″ + k²y = 0 and y″ − k²y = 0. The two initial conditions y(0) = b₀ and y′(0) = b₁ pick
   one solution, the book's b₀ cos(kx) + (b₁/k) sin(kx) or b₀ cosh(kx) + (b₁/k) sinh(kx); the point (0, b₀) alone
   does not, so the solutions through it at four other slopes are drawn faint. The slope b₁ is a short tangent
   through the point. Axes x −4 to 4, y −4 to 4; a cosh branch past the box is clipped by plot. */
(function () {
  const d = sim('sim-two-conditions', 540);
  const EQS = {
    o: { f: (b0, b1, k) => (x) => b0 * Math.cos(k * x) + (b1 / k) * Math.sin(k * x), c: '\\cos', s: '\\sin', name: 'y″ + k²y = 0' },
    h: { f: (b0, b1, k) => (x) => b0 * Math.cosh(k * x) + (b1 / k) * Math.sinh(k * x), c: '\\cosh', s: '\\sinh', name: 'y″ − k²y = 0' },
  };
  const eq = choice(d.controls, { label: 'equation', key: 'eq', value: 'o', options: [
    { value: 'o', label: 'y″ + k²y = 0' }, { value: 'h', label: 'y″ − k²y = 0' }] });
  const b0 = ctl(d.controls, { label: 'b_0', cls: '', key: 'b0', min: -2, max: 2, step: 0.05, value: 1, unit: '', dec: 2, detents: [0, 1] });
  const b1 = ctl(d.controls, { label: 'b_1', cls: '', key: 'b1', min: -3, max: 3, step: 0.05, value: 0, unit: '', dec: 2, detents: [0] });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.5, max: 3, step: 0.05, value: 1, unit: '', dec: 2, detents: [1] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 120, b: 470 };
  const OTHERS = [-2, -1, 1, 2];                           /* the faint fan: slopes b₁ + these */
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), pc = C('point');
    const a = +b0.v.toFixed(2), s = +b1.v.toFixed(2), k = +ks.v.toFixed(2);
    const E = EQS[eq.value], f = E.f(a, s, k);
    const ax = axes(ctx, BOX, [-4, 4], [-4, 4], { xl: 'x', yl: 'y', yc: fc, nx: 8, ny: 8 });
    hits = [];
    clip(ctx, ax.box, () => {
      OTHERS.forEach((ds) => {
        eq.curve(ctx, (v) => EQS[v].f(a, s + ds, k), -4, 4, ax.X, ax.Y, alpha(fc, 0.3), 3, 240);
        const g = E.f(a, s + ds, k), xh = 0.9;
        hits.push({ x: ax.X(xh), y: ax.Y(Math.max(-4, Math.min(4, g(xh)))), r: 14, name: `another solution through (0, ${n(a)}), leaving at slope y′(0) = ${n(s + ds)}` });
      });
      eq.curve(ctx, (v) => EQS[v].f(a, s, k), -4, 4, ax.X, ax.Y, fc, 5, 240);
    });
    /* the slope at the point: a short tangent of slope b₁ through (0, b₀), in the derivative's colour */
    const L = 0.9, dx = L / Math.sqrt(1 + s * s), dy = s * dx;
    line(ctx, ax.X(-dx), ax.Y(a - dy), ax.X(dx), ax.Y(a + dy), dc, 4);
    hits.push({ x: ax.X(dx), y: ax.Y(a + dy), r: 14, name: `the slope y′(0) = b₁ = ${n(s)}` });
    dot(ctx, ax.X(0), ax.Y(a), pc, true, 10);
    hits.push({ x: ax.X(0), y: ax.Y(a), r: 16, name: `(0, b₀) = (0, ${n(a)}), where y(0) = b₀` });
    label(ctx, `(0, ${n(a)})`, ax.X(0), ax.Y(a), { side: s >= 0 ? 'right' : 'left', color: pc, size: 20, weight: 600, gap: 14 });
    label(ctx, 'y(x)', ax.X(-3.2), ax.Y(Math.max(-4, Math.min(4, f(-3.2)))), { side: 'above', color: fc, size: 20, weight: 600 });
    const which = Math.abs(s) < 1e-9 ? 'leaves the point flat' : s > 0 ? 'leaves the point rising' : 'leaves the point falling';
    headline(ctx, `$\\ky(0) = ${n(a)}$ and $\\kyprime(0) = ${n(s)}$ pick one solution of $${E.name.replace('″', "''").replace('²', '^2').replace('−', '-')}$: it ${which}, and no other solution through $(0, ${n(a)})$ does so.`);
    const b1k = s / k;
    ro.set(`\\ky = b_0 ${E.c}(kx) + \\tfrac{b_1}{k} ${E.s}(kx) = ${n(a)}\\,${E.c}(${n(k)}x) ${sgn(b1k)} ${n(Math.abs(b1k))}\\,${E.s}(${n(k)}x),\\quad \\ky(0) = ${n(a)},\\ \\kyprime(0) = ${n(s)}`, undefined, { form: eq.value });
  }
  still(d, draw);
})();
};
