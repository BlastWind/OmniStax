/* Figures for section 1.1 Integrals as solutions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, drag, dot, line, label, vbracket, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
const guide = () => alpha(PAL.ink, 0.4);

/* Sim: Example 1.1.2, y′ = e^(−x²), y(0) = y₀, whose solution (1.2) is y(x) = ∫₀ˣ e^(−t²) dt + y₀. Above, the
   integrand e^(−t²) with the area from 0 to x shaded; below, y(x) with the point (x, y(x)) the reader drags along
   it, the dashed level y₀ and a bracket from y₀ up to y(x) carrying the area. ∫₀ˣ e^(−t²) dt = (√π/2) erf(x), erf
   by Abramowitz–Stegun 7.1.26 (error under 1.5e−7). Axes: t −3 to 3 by 0 to 1.2 above; x −3 to 3 by y −3 to 4
   below, which hold y₀ ± √π/2 for every y₀ on the slider. */
(function () {
  const d = sim('sim-integral-solution', 700);
  const erf = (u) => {
    const s = u < 0 ? -1 : 1, a = Math.abs(u), t = 1 / (1 + 0.3275911 * a);
    return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-a * a));
  };
  const I = (u) => (Math.sqrt(Math.PI) / 2) * erf(u);
  const f = (t) => Math.exp(-t * t);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 3, step: 0.01, value: 1, unit: '', dec: 2, detents: [0, 1] });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -2, max: 3, step: 0.1, value: 1, unit: '', dec: 1, detents: [1] });
  const P = drag(d, { x: xs, y: (u) => I(u) + y0.v });
  const ro = readout(d);
  const TOP = { l: 230, r: 1170, t: 92, b: 300 }, BOT = { l: 230, r: 1170, t: 380, b: 640 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), pc = C('point');
    const x = xs.v, b = y0.v, A = I(x), y = A + b;
    const xr = +x.toFixed(2), Ar = +A.toFixed(3), yr = +(Ar + b).toFixed(3);
    hits = [];
    /* the integrand and the area from 0 to x */
    const aT = axes(ctx, TOP, [-3, 3], [0, 1.2], { xl: 't', yl: 'f(t)', yc: fc, nx: 6, ny: 6, fy: (v) => fmt(v, 1) });
    if (Math.abs(x) > 1e-9) shade(ctx, aT, f, 0, Math.min(0, x), Math.max(0, x), ic, { alpha: 0.35 });
    plot(ctx, aT, f, fc);
    line(ctx, aT.X(x), aT.Y(0), aT.X(x), aT.Y(f(x)), guide(), 2.5, [4, 8]);
    label(ctx, 'f(t) = e^{−t^2}', aT.X(-2.1), aT.Y(f(-2.1)), { side: 'above', color: fc, size: 20, weight: 600 });
    if (Math.abs(x) >= 0.6) {
      label(ctx, `area ${n(Ar, 3)}`, aT.X(x / 2), aT.Y(Math.max(f(x / 2) / 2, 0.22)), { side: 'above', color: ic, size: 20, weight: 600, gap: 0 });
      hits.push({ x: aT.X(x / 2), y: aT.Y(f(x / 2) / 2), r: 22, name: `the area under e^(−t²) from 0 to x = ${n(xr)}, which is ∫₀ˣ e^(−t²) dt = ${n(Ar, 3)}` });
    } else if (Math.abs(x) > 1e-9) {
      label(ctx, `area ${n(Ar, 3)}`, aT.X(x), aT.Y(0.5), { side: x < 0 ? 'left' : 'right', color: ic, size: 20, weight: 600 });
    }
    /* the solution y(x) = ∫₀ˣ e^(−t²) dt + y₀ */
    const aB = axes(ctx, BOT, [-3, 3], [-3, 4], { xl: 'x', yl: 'y', yc: fc, nx: 6, ny: 7 });
    line(ctx, aB.box.l, aB.Y(b), aB.box.r, aB.Y(b), guide(), 2.5, [10, 10]);
    plot(ctx, aB, (u) => I(u) + b, fc);
    label(ctx, 'y(x)', aB.X(2.4), aB.Y(I(2.4) + b), { side: 'above', color: fc, size: 20, weight: 600 });
    label(ctx, `y_0 = ${n(b, 1)}`, aB.box.l + 8, aB.Y(b), { side: 'right', color: PAL.muted, size: 17, gap: 8 });
    if (Math.abs(x) >= 0.15) vbracket(ctx, aB.X(x) + (x < 0 ? -16 : 16), aB.Y(b), aB.Y(y), ic, n(Ar, 3), x < 0 ? -1 : 1, { size: 18 });
    dot(ctx, aB.X(0), aB.Y(b), pc, false, 10);
    hits.push({ x: aB.X(0), y: aB.Y(b), r: 16, name: `(0, y₀) = (0, ${n(b, 1)}), the initial condition` });
    const at = P.draw(ctx, aB, fc);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `(x, y(x)) = (${n(xr)}, ${n(yr, 3)}) on the solution` });
    const tail = x < -0.005 ? ': the integral runs from 0 back to $x$, so the area counts negative.' : '.';
    headline(ctx, `$\\ky(${n(xr)}) = \\int_0^{${n(xr)}} e^{-t^2}\\,dt + ${n(b, 1)} = ${n(yr, 3)}$${tail}`);
    ro.set(`\\ky(x) = \\int_0^x e^{-t^2}\\,dt + y_0,\\quad \\ky(${n(xr)}) = ${n(Ar, 3)} + ${par(b, 1)} = ${n(yr, 3)}`);
  }
  still(d, draw);
})();

/* Figure 1.1 and Example 1.1.4: y = 1/(C − x), the solution of y′ = y² through the dragged initial point (x₀, y₀),
   with C = x₀ + 1/y₀; the branch on the side of x = C that holds x₀ is the solution, drawn full, the other branch
   faint, the line x = C dashed. y₀ = 0 is the constant solution y = 0. Detents at the book's (0, 1) and (2, −1).
   Axes x −3 to 3 by y −3 to 3, the book's window. */
(function () {
  const d = sim('sim-blowup', 520);
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -3, max: 3, step: 0.1, value: 0, unit: '', dec: 1, detents: [0, 2] });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -3, max: 3, step: 0.1, value: 1, unit: '', dec: 1, detents: [1, -1], specials: [{ at: 0, label: 'y = 0' }] });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  const BOX = { l: 230, r: 1170, t: 96, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const a = +x0.v.toFixed(1), b = +y0.v.toFixed(1), zero = Math.abs(b) < 1e-9;
    const ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', yc: fc, nx: 6, ny: 6 });
    hits = [];
    if (zero) {
      plot(ctx, ax, () => 0, fc);
      hits.push({ x: ax.X(-1.5), y: ax.Y(0), r: 14, name: 'the constant solution y = 0' });
      P.draw(ctx, ax, pc);
      headline(ctx, `Through (${n(a, 1)}, 0): $y_0 = 0$, so the solution is the constant $\\ky = 0$, defined for every $x$.`);
      ro.set('\\ky = 0,\\quad \\text{the solution of } \\kyprime = \\ky^2 \\text{ with } y_0 = 0', undefined, { form: 'zero' });
      return;
    }
    const c = a + 1 / b, cr = +c.toFixed(2), f = (u) => 1 / (c - u), left = b > 0;
    const sol = left ? [-3, Math.min(c, 3)] : [Math.max(c, -3), 3];
    const other = left ? (c < 3 ? [c, 3] : null) : (c > -3 ? [-3, c] : null);
    if (other) {
      plot(ctx, ax, f, alpha(fc, 0.32), { w: 3, x: other });
      const m = (other[0] + other[1]) / 2;
      hits.push({ x: ax.X(m), y: ax.Y(Math.max(-3, Math.min(3, f(m)))), r: 16, name: `the other branch of 1/(C − x), on ${left ? `(${n(cr)}, ∞)` : `(−∞, ${n(cr)})`}: not the solution through (x₀, y₀)` });
    }
    plot(ctx, ax, f, fc, { x: sol });
    if (c > -3 && c < 3) {
      line(ctx, ax.X(c), ax.box.t, ax.X(c), ax.box.b, guide(), 2.5, [10, 10]);
      label(ctx, `x = C = ${n(cr)}`, ax.X(c), ax.box.t + 6, { side: left ? 'right' : 'left', color: PAL.muted, size: 17, gap: 8 });
      hits.push({ x: ax.X(c), y: ax.Y(0), r: 16, name: `x = C = ${n(cr)}, where the solution blows up` });
    }
    const at = P.draw(ctx, ax, pc);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `(x₀, y₀) = (${n(a, 1)}, ${n(b, 1)}), the initial condition` });
    const where = left ? `(-\\infty, ${n(cr)})` : `(${n(cr)}, \\infty)`;
    headline(ctx, `Through (${n(a, 1)}, ${n(b, 1)}): $C = ${n(cr)}$, and $\\ky = \\frac{1}{${n(cr)} - x}$ is defined on $${where}$.`);
    ro.set(`\\ky = \\frac{1}{C - x},\\quad C = x_0 + \\frac{1}{y_0} = ${par(a, 1)} + \\frac{1}{${par(b, 1)}} = ${n(cr)}`, undefined, { form: 'branch' });
  }
  still(d, draw);
})();
};
