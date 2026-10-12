/* Figures for section 4.10 Antiderivatives. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.10'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Figure 4.85 made live: the family x² + C, antiderivatives of 2x. The reader picks C and a point x; every curve
   of the family has the same slope 2x there, so their tangents are parallel: they differ only by a shift.
   Axes −2.5 to 2.5 by −3 to 7. */
(function () {
  const d = sim('sim-antiderivative-family', 500);
  const cs = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: -2, max: 2, step: 0.1, value: 0, unit: '', dec: 1, detents: [-2, -1, 0, 1, 2] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2, max: 2, step: 0.01, value: 1, unit: '', dec: 2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ic = C('integral'), lc = C('line'), Cv = cs.v, x = xs.v;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 440 }, [-3, 3], [-3, 7], { xl: 'x', yl: 'y', nx: 6, ny: 10 });
    hits = [];
    [-2, -1, 0, 1, 2].forEach((k) => {
      plot(ctx, ax, (t) => t * t + k, alpha(ic, 0.3), { w: 3 });
      tangent(ctx, ax, (t) => t * t + k, x, alpha(lc, 0.3), { df: (t) => 2 * t, w: 2 });
      hits.push({ x: ax.X(-2.1), y: ax.Y(4.41 + k), r: 14, name: k ? `y = x² ${k < 0 ? '−' : '+'} ${Math.abs(k)}` : 'y = x²' });
    });
    plot(ctx, ax, (t) => t * t + Cv, ic);
    tangent(ctx, ax, (t) => t * t + Cv, x, lc, { df: (t) => 2 * t });
    line(ctx, ax.X(x), ax.box.t, ax.X(x), ax.box.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    dot(ctx, ax.X(x), ax.Y(x * x + Cv), C('point'), true, 9);
    text(ctx, Math.abs(Cv) < 1e-9 ? '$\\kF(x)=x^2$' : `$\\kF(x)=x^2${Cv < 0 ? '-' : '+'}${n(Math.abs(Cv), 1)}$`, ax.X(1.7), ax.Y(1.7 ** 2 + Cv) - 30, ic, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    headline(ctx, `At x = ${fmt(x, 2)}, every curve x² + C has slope ${fmt(2 * x, 2)}: the tangent lines are parallel.`);
    ro.set(`\\kF(x)=x^2+C \\qquad \\kFprime(${n(x)})=2(${n(x)})=${n(2 * x)} \\qquad \\int 2x\\,dx=x^2+C`);
  });
})();

/* Figure 4.86 made live: solution curves y = 2x³ + C of dy/dx = 6x², the reader moving C until the curve passes
   through the initial point (1, 5), at C = 3. Axes −2 to 2 by −10 to 15. */
(function () {
  const d = sim('sim-initial-value', 500);
  const cs = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: -4, max: 7, step: 0.1, value: 0, unit: '', dec: 1, specials: [{ at: 3 }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const ic = C('integral'), Cv = cs.v, on = Math.abs(Cv - 3) < 1e-9;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 440 }, [-2, 2], [-10, 15], { xl: 'x', yl: 'y', nx: 4, ny: 5, fy: (v) => fmt(v, 0) });
    [-3, 0, 6].forEach((k) => plot(ctx, ax, (t) => 2 * t ** 3 + k, alpha(ic, 0.3), { w: 3 }));
    plot(ctx, ax, (t) => 2 * t ** 3 + Cv, ic);
    dot(ctx, ax.X(1), ax.Y(5), C('point'), on, 10);
    text(ctx, '(1, 5)', ax.X(1) + 16, ax.Y(5) + 4, PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, Math.abs(Cv) < 1e-9 ? '$y=2x^3$' : `$y=2x^3${Cv < 0 ? '-' : '+'}${n(Math.abs(Cv), 1)}$`, ax.X(-1.1), ax.Y(2 * (-1.1) ** 3 + Cv) - 32, ic, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    headline(ctx, on ? 'y = 2x³ + 3 passes through (1, 5): it solves the initial-value problem.' : `y(1) = 2 ${Cv < 0 ? '−' : '+'} ${fmt(Math.abs(Cv), 1)} = ${fmt(2 + Cv, 1)}, not 5: this curve misses the initial point.`);
    hits = [{ x: ax.X(1), y: ax.Y(5), r: 16, name: 'the initial condition y(1) = 5' }];
    ro.set(`\\kdydx=6x^2 \\qquad y=2x^3+C \\qquad y(1)=2(1)^3${Cv < 0 ? '-' : '+'}${n(Math.abs(Cv), 1)}=${n(2 + Cv, 1)}`);
  });
})();
};
