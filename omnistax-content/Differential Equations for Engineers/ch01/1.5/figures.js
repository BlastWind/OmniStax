/* Figures for section 1.5 Substitution. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, label, headline, register, readout, fmt, hover, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
const dashed = (ctx, draw) => { ctx.save(); ctx.setLineDash([10, 10]); draw(); ctx.restore(); };

/* Sim: the solutions of y′ = (x − y + 1)², found by the substitution v = x − y + 1. The slope field, the curve
   y = (Dxe^(2x) − x − 2)/(De^(2x) − 1) for the slider's D, and the two line solutions y = x and y = x + 2 that
   v = ±1 gave, dashed. D = 0 is the line y = x + 2 itself (a dashed special); D > 0 puts a pole at x = −ln(D)/2,
   the left branch above y = x + 2 and the right one rising to y = x from below; D < 0 runs smoothly from y = x + 2
   on the left to y = x on the right, crossing the y-axis at y(0) = 2/(1 − D). No D gives y = x: the gap to it is
   y − x = −2/(De^(2x) − 1), never zero. Axes x −2 to 3, y −2 to 5, the window of the plan. */
(function () {
  const d = sim('sim-substitution-family', 560);
  const Ds = ctl(d.controls, { label: 'D', cls: '', key: 'D', min: -5, max: 5, step: 0.05, value: 1, unit: '', dec: 2,
    specials: [{ at: 0, label: 'y = x + 2' }] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 110, b: 500 };
  const XR = [-2, 3], YR = [-2, 5];
  const f = (x, y) => (x - y + 1) * (x - y + 1);
  const sol = (D) => (x) => (D * x * Math.exp(2 * x) - x - 2) / (D * Math.exp(2 * x) - 1);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative');
    const D = Ds.v, zero = Math.abs(D) < 1e-9, pole = D > 0 ? -Math.log(D) / 2 : null;
    const ax = axes(ctx, BOX, XR, YR, { xl: 'x', yl: 'y', nx: 5, ny: 7 });
    SF.field(ctx, ax, f, alpha(dc, 0.62), { n: [20, 14] });
    hits = [];
    /* the two line solutions */
    dashed(ctx, () => {
      plot(ctx, ax, (x) => x, alpha(fc, 0.7), { w: 3 });
      plot(ctx, ax, (x) => x + 2, alpha(fc, zero ? 0.7 : 0.7), { w: 3 });
    });
    [-1.2, 0.8, 2.4].forEach((x) => {
      hits.push({ x: ax.X(x), y: ax.Y(x), r: 14, name: 'the line solution y = x, which no value of D gives' });
      hits.push({ x: ax.X(x), y: ax.Y(x + 2), r: 14, name: 'the line solution y = x + 2, which D = 0 gives' });
    });
    label(ctx, 'y = x + 2', ax.X(2.2), ax.Y(4.2), { side: 'left', color: fc, size: 20, weight: 600 });
    label(ctx, 'y = x', ax.X(2.6), ax.Y(2.6), { side: 'below', color: fc, size: 20, weight: 600 });
    /* the slider's solution */
    const y = zero ? (x) => x + 2 : sol(D);
    const inWindow = pole !== null && pole > XR[0] && pole < XR[1];
    plot(ctx, ax, y, fc, { w: 5, poles: inWindow ? [pole] : [] });
    [-1.6, -0.6, 0.4, 1.4, 2.4].forEach((x) => {
      const v = y(x);
      if (pole !== null && Math.abs(x - pole) < 0.25) return;
      if (v >= YR[0] && v <= YR[1]) hits.push({ x: ax.X(x), y: ax.Y(v), r: 14, name: zero ? 'the solution for D = 0: the line y = x + 2' : `the solution for D = ${fmt(D, 2)}` });
    });
    /* headline and readout, true in every state */
    const y0 = 2 / (1 - D);
    if (zero) {
      headline(ctx, 'D = 0: the solution is the line $\\ky = x + 2$ itself.');
      ro.set('\\frac{x - \\ky + 2}{x - \\ky} = 0 \\cdot e^{2x}:\\quad \\ky = \\frac{-x - 2}{-1} = x + 2', undefined, { form: 'zero' });
    } else if (D < 0) {
      headline(ctx, `D = ${fmt(D, 2)}: the solution runs from $\\ky = x + 2$ on the left to $\\ky = x$ on the right, crossing the $\\ky$-axis at $\\ky(0) = ${n(y0)}$.`);
      ro.set(`\\frac{x - \\ky + 2}{x - \\ky} = ${par(D)}\\,e^{2x},\\quad \\ky = \\frac{${par(D)}\\,x e^{2x} - x - 2}{${par(D)}\\,e^{2x} - 1},\\quad \\ky(0) = \\frac{-2}{${par(D)} - 1} = ${n(y0)}`, undefined, { form: 'neg' });
    } else {
      const where = inWindow ? `blows up at $x = ${n(pole)}$` : `blows up at $x = ${n(pole)}$, past the right edge`;
      headline(ctx, `D = ${fmt(D, 2)}: the solution ${where}; to the left it climbs away from $\\ky = x + 2$, to the right it rises toward $\\ky = x$ from below.`);
      ro.set(`\\frac{x - \\ky + 2}{x - \\ky} = ${n(D)}\\,e^{2x},\\quad \\ky = \\frac{${n(D)}\\,x e^{2x} - x - 2}{${n(D)}\\,e^{2x} - 1},\\quad \\ky - x = \\frac{-2}{${n(D)}\\,e^{2x} - 1} \\neq 0`, undefined, { form: 'pos' });
    }
  }
  still(d, draw);
})();
};
