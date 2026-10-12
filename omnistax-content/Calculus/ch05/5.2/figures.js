/* Figures for section 5.2 The Definite Integral. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, dot, line, arrow, text, headline, register, readout, fmt, cycle, car } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const one = (v) => fmt(v, 1).replace(/\.0$/, '');
/* left-endpoint rectangles of f on [a, b]; a cell below the axis is outlined dashed, since it counts against the sum */
const bars = (ctx, ax, f, a, b, k, color) => {
  const { X, Y, box } = ax, dx = (b - a) / k;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 6, box.r - box.l, box.b - box.t + 12); ctx.clip();
  ctx.fillStyle = ctx.strokeStyle = color; ctx.lineWidth = 2;
  const base = ctx.globalAlpha;
  let up = 0, down = 0;
  for (let i = 0; i < k; i += 1) {
    const x0 = a + i * dx, h = f(x0);
    if (h >= 0) up += h * dx; else down -= h * dx;
    ctx.setLineDash(h < 0 ? [8, 6] : []);
    ctx.beginPath(); ctx.rect(X(x0), Math.min(Y(0), Y(h)), X(x0 + dx) - X(x0), Math.abs(Y(h) - Y(0)));
    ctx.globalAlpha = base * 0.24; ctx.fill(); ctx.globalAlpha = base; ctx.stroke();
  }
  ctx.restore();
  return { up, down };
};

/* Figure 5.16 (Example 5.8), a faithful copy: the semicircle y = √(9 − (x − 3)²) on [0, 6], the quarter over [3, 6] shaded.
   Axes 0 to 6.5 by 0 to 3.5. */
(function () {
  const d = sim('fig-quarter-circle', 400);
  const f = (x) => Math.sqrt(Math.max(0, 9 - (x - 3) ** 2));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 340 }, [0, 6.5], [0, 3.5], { xl: 'x', yl: 'y', nx: 13, ny: 7, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : ''), fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, 3, 6, ic, { alpha: 0.32 });
    plot(ctx, ax, f, fc, { x: [0, 6] });
    text(ctx, '$\\kf(x)=\\sqrt{9-(x-3)^2}$', ax.X(4.6), ax.Y(3.15), fc, { size: 22, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.17 + 5.18: f(x) = 2 − 2x² on [0, 2], left-endpoint rectangles, n with a detent at the book's 8; the regions A₁
   above the axis on [0, 1] and A₂ below it on [1, 2] stay lightly shaded under the rectangles. Axes −1.5 to 2.5 by −6.5 to 2.5. */
(function () {
  const d = sim('sim-net-signed-area', 520);
  const f = (x) => 2 - 2 * x * x, A1 = 4 / 3, A2 = 8 / 3;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 64, step: 1, value: 8, unit: '', dec: 0, detents: [8] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), k = ns.v;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 470 }, [-1.5, 2.5], [-7, 3], { xl: 'x', yl: 'y', nx: 8, ny: 10, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : ''), fy: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, 0, 1, ic, { alpha: 0.12 }); shade(ctx, ax, f, 0, 1, 2, ic, { alpha: 0.12 });
    const { up, down } = bars(ctx, ax, f, 0, 2, k, ic);
    plot(ctx, ax, f, fc, { x: [-1.4, 2.12] });
    text(ctx, '$\\kA_{1}$', ax.X(0.3), ax.Y(0.75), ic, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kA_{2}$', ax.X(1.38), ax.Y(-1.5), ic, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x)=2-2x^2$', ax.X(-1.35), ax.Y(-3.2), fc, { size: 24, weight: 600, align: 'left', tex: true });
    const sum = up - down;
    headline(ctx, `${k} ${k === 1 ? 'rectangle' : 'rectangles'}: ${fmt(up, 4)} of area above the axis less ${fmt(down, 4)} below it gives a Riemann sum of ${fmt(sum, 4)}.`);
    ro.set(`\\sum_{i=1}^{${k}}\\kf(x_i^{*})\\,\\Delta x=${typed('integral', n(up, 4))}-${typed('integral', n(down, 4))}=${typed('integral', n(sum, 4))}\\qquad \\kA_{1}-\\kA_{2}=${typed('integral', n(A1 - A2, 4))}`);
  }
  still(d, draw);
})();

/* Figure 5.19 (Example 5.9), a faithful copy: f(x) = 2x on −4 to 4, the triangles A₁ above the axis on [0, 3] and A₂ below it
   on [−3, 0]. Axes −4 to 4 by −8 to 8. */
(function () {
  const d = sim('fig-odd-triangles', 460);
  const f = (x) => 2 * x;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 420 }, [-4, 4], [-8, 8], { xl: 'x', yl: 'y', nx: 8, ny: 8, fy: (v) => (v % 4 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, 0, 3, ic, { alpha: 0.3 }); shade(ctx, ax, f, 0, -3, 0, ic, { alpha: 0.3 });
    plot(ctx, ax, f, fc);
    text(ctx, '$\\kA_{1}$', ax.X(2), ax.Y(1.5), ic, { size: 26, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kA_{2}$', ax.X(-2), ax.Y(-1.5), ic, { size: 26, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kf(x)=2x$', ax.X(2.6), ax.Y(7.2), fc, { size: 24, weight: 600, align: 'right', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.20 + 5.21: the car's two trips, its velocity v(t) in mph over t hours below and the car on its road above, north to
   the right. The motion has a clock: five real seconds a trip. Road 0 to 150 mi; graph t 0 to 5 by v −50 to 80. */
(function () {
  const d = sim('sim-car-trips', 560);
  const TRIPS = {
    one: { T: 2, legs: [[0, 2, 70]] },
    two: { T: 5, legs: [[0, 2, 60], [2, 5, -40]] },
  };
  const trip = choice(d.controls, { label: '\\text{trip}', options: [{ value: 'one', label: '70 mph for 2 hours' }, { value: 'two', label: '60 north, then 40 south' }], value: 'two', onInput: () => cy.reset() });
  const cy = cycle(() => TRIPS[trip.value].T, 1.2);
  const ro = readout(d);
  const vOf = (legs, t) => (legs.find(([a, b]) => t >= a && t <= b) ?? legs[legs.length - 1])[2];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), { T, legs } = TRIPS[trip.value];
    const t = Math.min(cy.now(), T);
    const done = legs.map(([a, b, v]) => [a, Math.min(b, t), v]).filter(([a, b]) => b > a);
    const disp = done.reduce((s, [a, b, v]) => s + v * (b - a), 0), dist = done.reduce((s, [a, b, v]) => s + Math.abs(v) * (b - a), 0);
    /* the road */
    const R = { l: 200, r: 1200, y: 150 }, RX = (m) => R.l + (m / 150) * (R.r - R.l);
    line(ctx, R.l, R.y, R.r, R.y, PAL.muted, 3);
    [0, 50, 100, 150].forEach((m) => { line(ctx, RX(m), R.y - 6, RX(m), R.y + 6, PAL.muted, 2); text(ctx, `${m} mi`, RX(m), R.y + 28, PAL.muted, { size: 17, align: 'center' }); });
    arrow(ctx, R.r - 70, 72, R.r - 10, 72, PAL.muted, 3); text(ctx, 'north', R.r - 80, 72, PAL.muted, { size: 18, align: 'right', base: 'middle' });
    const dir = vOf(legs, t) < 0 && t < T ? -1 : 1;
    ctx.save(); ctx.translate(RX(disp), R.y - 14); ctx.scale(dir, 1); car(ctx, 0, 0, PAL.ink, 0.9); ctx.restore();
    dot(ctx, RX(0), R.y, PAL.ink, false, 7);
    /* the velocity graph */
    const ax = axes(ctx, { l: 330, r: 1070, t: 250, b: 500 }, [0, 5], [-50, 80], { xl: 't (hours)', yl: 'v (mi/hr)', nx: 5, ny: 13, fy: (v) => (v % 20 === 0 ? fmt(v, 0) : '') });
    done.forEach(([a, b, v]) => shade(ctx, ax, () => v, 0, a, b, ic, { alpha: 0.3 }));
    legs.forEach(([a, b, v]) => plot(ctx, ax, () => v, fc, { x: [a, b] }));
    line(ctx, ax.X(t), ax.box.t, ax.X(t), ax.box.b, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    text(ctx, '$\\kv(t)$', ax.X(legs[0][1]) - 10, ax.Y(legs[0][2]) - 18, fc, { size: 22, weight: 600, align: 'right', tex: true });
    headline(ctx, `t = ${fmt(t, 1)} h: the car is ${fmt(Math.abs(disp), 0)} mi ${disp < -0.5 ? 'south' : 'north'} of its start, after ${fmt(dist, 0)} mi of driving.`);
    const ints = done.map(([a, b, v]) => `\\int_{${one(a)}}^{${one(b)}}${v < 0 ? `(${v})` : v}\\,dt`).join('+') || '0';
    const parts = done.map(([a, b, v]) => n(v * (b - a), 0)).join('+').split('+-').join('-');
    ro.set(`${ints}=${parts === '' ? '0' : parts}=${typed('integral', n(disp, 0))}\\text{ mi}`, `Total distance traveled: ${fmt(dist, 0)} mi, the total area between the graph and the axis.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TRIPS[trip.value].T / 5), draw });
})();

/* Figure 5.22 (Example 5.10), a faithful copy: f(x) = x − 2 on −2 to 6, A₂ below the axis on [0, 2] and A₁ above it on [2, 6].
   Axes −2 to 7 by −5 to 5. */
(function () {
  const d = sim('fig-total-area', 440);
  const f = (x) => x - 2;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 360, r: 1040, t: 40, b: 400 }, [-2, 7], [-5, 5], { xl: 'x', yl: 'y', nx: 9, ny: 10, fy: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, f, 0, 0, 2, ic, { alpha: 0.3 }); shade(ctx, ax, f, 0, 2, 6, ic, { alpha: 0.3 });
    line(ctx, ax.X(6), ax.Y(0), ax.X(6), ax.Y(4), alpha(PAL.ink, 0.45), 2.5);
    plot(ctx, ax, f, fc);
    text(ctx, '$\\kA_{1}$', ax.X(4.6), ax.Y(1.1), ic, { size: 26, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kA_{2}$', ax.X(0.75), ax.Y(-0.6), ic, { size: 24, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kf(x)=x-2$', ax.X(6.2), ax.Y(4.4), fc, { size: 24, weight: 600, align: 'right', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.23 + 5.24 (Example 5.13): f(x) = √(1 + x²) and g(x) = √(1 + x), the two referents, (a) on −2 to 3 with the region
   under g on [0, 1] shaded, (b) zoomed to [0, 1] with the thin gap between them shaded. */
(function () {
  const d = sim('fig-compare-roots', 460);
  const f = (x) => Math.sqrt(1 + x * x), g = (x) => Math.sqrt(1 + x);
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('integral'), cf = F.ref('curve-f'), cg = F.ref('curve-g');
    const a = axes(ctx, { l: 110, r: 640, t: 50, b: 380 }, [-2, 3], [0, 3.5], { xl: 'x', yl: 'y', nx: 5, ny: 7, fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    shade(ctx, a, g, 0, 0, 1, ic, { alpha: 0.3 });
    plot(ctx, a, f, cf, { x: [-2, 3] }); plot(ctx, a, g, cg, { x: [-1, 3] });
    text(ctx, '$\\kf(x)$', a.X(-1.75), a.Y(2.45), cf, { size: 22, weight: 600, align: 'left', tex: true });
    text(ctx, '$\\kg(x)$', a.X(2.2), a.Y(1.35), cg, { size: 22, weight: 600, align: 'left', tex: true });
    text(ctx, '(a)', 375, 436, PAL.ink, { size: 22, align: 'center' });
    const b = axes(ctx, { l: 790, r: 1320, t: 50, b: 380 }, [0, 1], [1, 1.5], { xl: 'x', yl: 'y', nx: 4, ny: 5, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 1) });
    shade(ctx, b, g, f, 0, 1, ic, { alpha: 0.4 });
    plot(ctx, b, f, cf, { x: [0, 1] }); plot(ctx, b, g, cg, { x: [0, 1] });
    text(ctx, '$\\kf(x)$', b.X(0.62), b.Y(1.12), cf, { size: 22, weight: 600, align: 'left', tex: true });
    text(ctx, '$\\kg(x)$', b.X(0.3), b.Y(1.2), cg, { size: 22, weight: 600, align: 'right', tex: true });
    text(ctx, '(b)', 1055, 436, PAL.ink, { size: 22, align: 'center' });
  }
  still(d, draw);
})();

/* Figure 5.25 (Example 5.14), a faithful copy: the trapezoid under f(x) = x + 1 on [0, 5]. Axes 0 to 6 by 0 to 7. */
(function () {
  const d = sim('fig-trapezoid', 420);
  const f = (x) => x + 1;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 380 }, [0, 6], [0, 7], { xl: 'x', yl: 'y', nx: 6, ny: 7 });
    shade(ctx, ax, f, 0, 0, 5, ic, { alpha: 0.32 });
    line(ctx, ax.X(5), ax.Y(0), ax.X(5), ax.Y(6), alpha(PAL.ink, 0.45), 2.5);
    plot(ctx, ax, f, fc, { x: [0, 5.8] });
    text(ctx, '$\\kf(x)=x+1$', ax.X(3.4), ax.Y(5.6), fc, { size: 24, weight: 600, align: 'right', tex: true });
  }
  still(d, draw);
})();
};
