/* Figures for section 15.6 Calculating Centers of Mass and Moments of Inertia. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, register, tex, fmt, begin, axes, plot, line, dot, text } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
const lab3 = (s, p, color) => ({ k: 'label', s, p, color });

/* an equal-scale frame holding xr × yr */
function frame(ctx, xr, yr, H, o = {}) {
  const s = Math.min((H - 110) / (yr[1] - yr[0]), 900 / (xr[1] - xr[0])), w = (xr[1] - xr[0]) * s, h = (yr[1] - yr[0]) * s, t = 40;
  return axes(ctx, { l: 640 - w / 2, r: 640 + w / 2, t, b: t + h }, xr, yr, { xl: 'x', yl: 'y', nx: 6, ny: 6, nice: true });
}
const path = (ctx, ax, pts) => { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); ctx.closePath(); };
/* the lamina R cut n by n, each cell shaded by the density at its midpoint on one scale up to top; returns the sum of ρ ΔA */
function lamina(ctx, ax, R, rho, top, n) {
  const { cells, sum } = SP.riemann2(R, rho, n, n, 'mid'), fc = C('function');
  cells.forEach((c) => { ctx.save(); ctx.fillStyle = alpha(fc, 0.08 + 0.72 * Math.min(1, c.h / top)); path(ctx, ax, c.outline); ctx.fill(); if (n <= 16) { ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 1; ctx.stroke(); } ctx.restore(); });
  ctx.save(); ctx.strokeStyle = C('region'); ctx.lineWidth = 3.5; path(ctx, ax, SP.outline(R, 64)); ctx.stroke(); ctx.restore();
  return sum;
}
/* the density's scale, darker for denser, from 0 to its top value */
function legend(ctx, x, y, h, top) {
  const fc = C('function');
  for (let s = 0; s < 20; s++) { ctx.save(); ctx.fillStyle = alpha(fc, 0.08 + 0.72 * (1 - s / 20)); ctx.fillRect(x, y + (s * h) / 20, 30, h / 20 + 0.5); ctx.restore(); }
  text(ctx, `$\\krho=${top}$`, x + 40, y + 6, fc, { size: 18, tex: true }); text(ctx, '$\\krho=0$', x + 40, y + h, fc, { size: 18, tex: true });
}
const mark = (ctx, ax, p, filled, s, dx = 16, dy = -18) => { dot(ctx, ax.X(p[0]), ax.Y(p[1]), C('point'), filled, 10); text(ctx, s, ax.X(p[0]) + dx, ax.Y(p[1]) + dy, C('point'), { size: 20, tex: true, bg: PAL.panel }); };

/* Figure 15.64 + 15.65 + 15.66 + 15.67: the triangle with vertices (0, 0), (0, 3), (3, 0), uniform or with ρ = xy; frame −0.4 to 3.6 both ways */
(function () {
  const H = 540, d = sim('sim-lamina', H);
  const R = { x: [0, 3], y: [0, (x) => 3 - x] };
  const D = { one: { rho: () => 1, top: '1', m: '\\tfrac{9}{2}', c: [1, 1], ct: '(1,1)' }, xy: { rho: (x, y) => x * y, top: '\\tfrac{9}{4}', m: '\\tfrac{27}{8}', c: [1.2, 1.2], ct: '(\\tfrac{6}{5},\\tfrac{6}{5})' } };
  const pick = choice(d.controls, { label: '\\krho', options: [{ value: 'one', label: 'ρ = 1' }, { value: 'xy', label: 'ρ = xy' }], value: 'xy', ms: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 30, step: 1, value: 6, unit: '', dec: 0 });
  still(d, () => {
    const { ctx } = begin(d.c), ax = frame(ctx, [-0.4, 3.6], [-0.4, 3.6], H), q = D[pick.value];
    const sum = lamina(ctx, ax, R, q.rho, pick.value === 'one' ? 1 : 2.25, ns.v);
    legend(ctx, 1040, 100, 300, q.top);
    mark(ctx, ax, [1, 1], false, '$(\\kxc,\\kyc)$', -20, 26);
    if (pick.value === 'xy') mark(ctx, ax, q.c, true, '$(\\kxbar,\\kybar)$');
    tex(d.readout, `\\km\\approx\\sum\\sum\\krho(x_{ij}^{*},y_{ij}^{*})\\,\\Delta A=${hue('integral', n2(sum, 3))},\\quad \\km=\\iint_{\\kR}\\krho\\,dA=${hue('integral', q.m)},\\quad (\\kxbar,\\kybar)=${hue('point', q.ct)}`);
  });
})();

/* Figure 15.68, a still copy: Example 15.58's lamina under y = x² on [0, 2] with ρ = x + y and its center of mass; frame −0.3 to 2.4 by −0.3 to 4.4 */
(function () {
  const H = 520, d = sim('fig-lamina-parabola', H);
  still(d, () => {
    const { ctx } = begin(d.c), ax = frame(ctx, [-0.3, 2.4], [-0.3, 4.4], H);
    lamina(ctx, ax, { x: [0, 2], y: [0, (x) => x * x] }, (x, y) => x + y, 6, 24);
    legend(ctx, 1040, 100, 300, '6');
    plot(ctx, ax, (x) => x * x, C('function'), { w: 3, x: [0, 2.1] });
    text(ctx, '$y=x^{2}$', ax.X(1.55), ax.Y(3.1), C('function'), { size: 20, tex: true, bg: PAL.panel, align: 'right' });
    mark(ctx, ax, [44 / 27, 100 / 63], true, '$(\\tfrac{44}{27},\\tfrac{100}{63})$');
    tex(d.readout, `\\krho=x+y:\\quad \\km=${hue('integral', '\\tfrac{36}{5}')},\\;\\kMx=${hue('integral', '\\tfrac{80}{7}')},\\;\\kMy=${hue('integral', '\\tfrac{176}{15}')},\\;(\\kxbar,\\kybar)=${hue('point', '(\\tfrac{44}{27},\\tfrac{100}{63})')}`);
  });
})();

/* Figure 15.69, a still copy: Example 15.59's region under y = eˣ on [1, 3] and its centroid; frame −0.2 to 3.4 by −1 to 21 */
(function () {
  const H = 520, d = sim('fig-centroid-exp', H);
  still(d, () => {
    const { ctx } = begin(d.c), ax = axes(ctx, { l: 300, r: 1000, t: 40, b: H - 60 }, [-0.2, 3.4], [-1, 21], { xl: 'x', yl: 'y', nx: 18, ny: 11, fx: (v) => (Math.abs(v - Math.round(v)) < 1e-6 ? n2(v, 0) : ''), fy: (v) => n2(v, 0) });
    const R = { x: [1, 3], y: [0, (x) => Math.exp(x)] };
    ctx.save(); ctx.fillStyle = alpha(C('region'), 0.3); path(ctx, ax, SP.outline(R, 64)); ctx.fill(); ctx.restore();
    plot(ctx, ax, Math.exp, C('function'), { w: 4, x: [0, 3.1] });
    text(ctx, '$y=e^{x}$', ax.X(2.6), ax.Y(17), C('function'), { size: 20, tex: true, bg: PAL.panel, align: 'right' });
    const e = Math.E, xc = (2 * e * e) / (e * e - 1), yc = (e * (e * e + 1)) / 4;
    mark(ctx, ax, [xc, yc], false, '$(\\kxc,\\kyc)$');
    tex(d.readout, `(\\kxc,\\kyc)=\\Big(\\frac{2e^{2}}{e^{2}-1},\\frac{1}{4}e(e^{2}+1)\\Big)\\approx${hue('point', `(${n2(xc)},${n2(yc)})`)}`);
  });
})();

/* Figure 15.70: Examples 15.62–15.64's tetrahedron under x + 2y + 3z = 6 with ρ = x²yz and its center of mass; box 0 to 6.3 by 0 to 3.3 by 0 to 2.3 */
(function () {
  const d = sim('sim-tetrahedron-mass');
  const box = [[0, 6.3], [0, 3.3], [0, 2.3]], P = [2.25, 0.75, 0.5];
  const S = F.space3d(d, { box, h: 480, pitch: [0.1, 1.4], turn: -1.9, tilt: 0.5, fit: 2.5 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('solid', [...SP.solid({ x: [0, 6], y: [0, (x) => (6 - x) / 2], z: [0, (x, y) => (6 - x - 2 * y) / 3] }, C('region'), { alpha: 0.3 }), lab3('$\\kQ$', [0.6, 0.4, 0.25], C('region')), lab3('$x+2y+3z=6$', [4.2, 0.5, 0.5], C('surface'))]);
    S.set('com', SP.point(P, C('point'), { name: '$(\\bar{x},\\bar{y},\\bar{z})$', drop: true }));
    tex(d.readout, `\\krho=x^{2}yz:\\quad \\km=${hue('integral', '\\tfrac{108}{35}')},\\quad (\\kxbar,\\kybar,\\kzbar)=\\Big(\\frac{\\kMyz}{\\km},\\frac{\\kMxz}{\\km},\\frac{\\kMxy}{\\km}\\Big)=${hue('point', '(2.25,0.75,0.5)')}`);
  });
})();
};
