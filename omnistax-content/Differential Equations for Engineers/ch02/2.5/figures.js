/* Figures for section 2.5 Nonhomogeneous equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, text, label, vbracket, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sgn = (v) => (v < 0 ? '-' : '+');
const guide = () => alpha(PAL.ink, 0.4);
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;

/* Sim: y = y_c + y_p for (2.6), y″ + 5y′ + 6y = 2x + 1. The particular solution y_p = (3x − 1)/9 never changes;
   the initial conditions y(0) = b₀ and y′(0) = b₁ pick C₁ = 3b₀ + b₁ and C₂ = −2b₀ − b₁ + 1/9 of
   y_c = C₁e^(−2x) + C₂e^(−3x) (from y(0) = C₁ + C₂ − 1/9 and y′(0) = −2C₁ − 3C₂ + 1/3; the book's y(0) = 0,
   y′(0) = 1/3 give C₁ = 1/3, C₂ = −2/9). A probe at x stacks y_p and y_c into y. The headline's numbers come
   from the constants as shown (two decimals) so that the sum it prints is the sum of the heights it prints.
   Axes x 0 to 4, y −1.5 to 1.5: over the sliders' extremes y and y_c stay between −1.15 and 1.23. */
(function () {
  const d = sim('sim-yc-yp', 560);
  const b0 = ctl(d.controls, { label: 'y(0)', cls: 'point', key: 'y0', min: -1, max: 1, step: 0.05, value: 0, unit: '', dec: 2, detents: [0] });
  const b1 = ctl(d.controls, { label: 'y′(0)', cls: 'point', key: 'dy0', min: -2, max: 2, step: 1 / 60, value: 1 / 3, unit: '', dec: 2, detents: [1 / 3] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 4, step: 0.01, value: 1, unit: '', dec: 2, detents: [1] });
  const yp = (x) => (3 * x - 1) / 9;
  const consts = () => ({ c1: 3 * b0.v + b1.v, c2: -2 * b0.v - b1.v + 1 / 9 });
  const ycOf = (c1, c2) => (x) => c1 * Math.exp(-2 * x) + c2 * Math.exp(-3 * x);
  const yc = (x) => { const { c1, c2 } = consts(); return ycOf(c1, c2)(x); };
  const y = (x) => yc(x) + yp(x);
  const P = drag(d, { x: xs, y });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 120, b: 490 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), pc = C('point'), cc = F.ref('yc'), pcol = F.ref('yp');
    const { c1, c2 } = consts(), c1r = r2(c1), c2r = r2(c2), x0 = xs.v, xr = r2(x0);
    const ypv = yp(x0), ycv = yc(x0), yv = ypv + ycv;
    const ypr = r3(yp(xr)), ycr = r3(ycOf(c1r, c2r)(xr)), yr = r3(ypr + ycr);
    const ax = axes(ctx, BOX, [0, 4], [-1.5, 1.5], { xl: 'x', yl: 'y', yc: fc, nx: 4, ny: 6, fy: (v) => fmt(v, 1) });
    hits = [];
    /* the three curves */
    plot(ctx, ax, yp, pcol, { w: 4 });
    plot(ctx, ax, yc, cc, { w: 4 });
    plot(ctx, ax, y, fc, { w: 5 });
    [0.6, 1.6, 2.8].forEach((u) => {
      hits.push({ x: ax.X(u), y: ax.Y(yp(u)), r: 14, name: 'y_p = (3x − 1)/9, the particular solution: the same for every initial condition' });
      hits.push({ x: ax.X(u), y: ax.Y(yc(u)), r: 14, name: `y_c = ${n(c1r)}e^(−2x) ${sgn(c2r)} ${n(Math.abs(c2r))}e^(−3x), the complementary solution` });
      hits.push({ x: ax.X(u), y: ax.Y(y(u)), r: 14, name: 'y = y_c + y_p, the solution through the initial conditions' });
    });
    /* the probe: y_p from the axis, y_c from there up (or down) to y */
    line(ctx, ax.X(x0), ax.box.t, ax.X(x0), ax.box.b, guide(), 2.5, [4, 8]);
    /* each bracket's label sits on a panel beside it (label clamps it inside the canvas); y_c's bracket stands
       left of the probe, and right of y_p's where the axis labels would be in its way */
    const near = x0 < 0.7;
    if (Math.abs(ax.Y(ypv) - ax.Y(0)) > 8) {
      vbracket(ctx, ax.X(x0) + 18, ax.Y(0), ax.Y(ypv), pcol);
      label(ctx, `y_p = ${n(ypr, 3)}`, ax.X(x0) + 18, (ax.Y(0) + ax.Y(ypv)) / 2, { side: 'right', color: pcol, size: 18, gap: 8 });
    }
    if (Math.abs(ax.Y(yv) - ax.Y(ypv)) > 8) {
      const bx = ax.X(x0) + (near ? 46 : -18);
      vbracket(ctx, bx, ax.Y(ypv), ax.Y(yv), cc);
      label(ctx, `y_c = ${n(ycr, 3)}`, bx, (ax.Y(ypv) + ax.Y(yv)) / 2, { side: near ? 'right' : 'left', color: cc, size: 18, gap: 8 });
    }
    dot(ctx, ax.X(x0), ax.Y(ypv), pcol, true, 7);
    dot(ctx, ax.X(x0), ax.Y(ycv), cc, true, 7);
    hits.push({ x: ax.X(x0), y: ax.Y(ypv), r: 14, name: `(x, y_p) = (${n(xr)}, ${n(ypr, 3)})` });
    hits.push({ x: ax.X(x0), y: ax.Y(ycv), r: 14, name: `(x, y_c) = (${n(xr)}, ${n(ycr, 3)})` });
    /* the initial condition: the point (0, y(0)) and its slope y′(0) */
    const sl = 0.3;
    ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
    line(ctx, ax.X(0), ax.Y(b0.v), ax.X(sl), ax.Y(b0.v + sl * b1.v), dc, 3);
    ctx.restore();
    dot(ctx, ax.X(0), ax.Y(b0.v), pc, false, 10);
    hits.push({ x: ax.X(0), y: ax.Y(b0.v), r: 16, name: `(0, y(0)) = (0, ${n(b0.v)}), the initial condition` });
    hits.push({ x: ax.X(sl / 2), y: ax.Y(b0.v + (sl / 2) * b1.v), r: 12, name: `the slope y′(0) = ${n(b1.v)} at the initial point` });
    const at = P.draw(ctx, ax, fc);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `(x, y) = (${n(xr)}, ${n(yr, 3)}) on the solution` });
    /* legend, bottom right, where no curve reaches; on a panel so the probe's line passes behind it */
    [['y = y_c + y_p', fc], ['y_c', cc], ['y_p', pcol]].forEach(([s, col], i) => {
      const lx = ax.box.r - 250, ly = ax.box.b - 24 - (2 - i) * 30;
      line(ctx, lx, ly, lx + 40, ly, col, 4);
      text(ctx, s, lx + 52, ly, col, { size: 20, weight: 600, align: 'left', base: 'middle', bg: PAL.panel });
    });
    headline(ctx, `$\\ky(0) = ${n(b0.v)}$, $\\kyprime(0) = ${n(b1.v)}$: $C_1 = ${n(c1r)}$, $C_2 = ${n(c2r)}$, and at $x = ${n(xr)}$ the heights $\\kyp = ${n(ypr, 3)}$ and $\\kyc = ${n(ycr, 3)}$ add to $\\ky = ${n(yr, 3)}$.`);
    ro.set(`\\ky = \\kyc + \\kyp = ${n(c1r)}\\,e^{-2x} ${sgn(c2r)} ${n(Math.abs(c2r))}\\,e^{-3x} + \\frac{3x-1}{9}`);
  }
  still(d, draw);
})();
};
