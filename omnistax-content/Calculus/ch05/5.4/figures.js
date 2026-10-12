/* Figures for section 5.4 Integration Formulas and the Net Change Theorem. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.4'] = function (root, F) {
const { C, PAL, alpha, begin, axes, plot, shade, dot, line, arrow, text, headline, register, readout, fmt, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Figure 5.32, a faithful copy: the car's velocity, 40 mph from 2 to 4 p.m. and −30 mph from 4 to 5 p.m., the areas between
   the graph and the axis shaded. Axes t 0 to 6 by −40 to 50. */
(function () {
  const d = sim('fig-car-velocity', 420);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 370 }, [0, 6], [-40, 50], { xl: 't', yl: 'v', nx: 6, ny: 9, fy: (v) => (v % 20 === 0 ? fmt(v, 0) : '') });
    shade(ctx, ax, () => 40, 0, 2, 4, ic, { alpha: 0.3 }); shade(ctx, ax, () => -30, 0, 4, 5, ic, { alpha: 0.3 });
    plot(ctx, ax, () => 40, fc, { x: [2, 4] }); plot(ctx, ax, () => -30, fc, { x: [4, 5] });
    text(ctx, '$y=40$', ax.X(3), ax.Y(40) - 20, fc, { size: 22, weight: 600, align: 'center', tex: true });
    text(ctx, '$y=-30$', ax.X(4.5), ax.Y(-30) + 30, fc, { size: 22, weight: 600, align: 'center', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.33 (Examples 5.24 and 5.25): a particle with velocity v(t) = 3t − 5 m/sec for 0 ≤ t ≤ 3 sec on its line above, the
   graph of v below with the areas between it and the axis filling in as time runs. The particle's position from its start is
   s(t) = 3t²/2 − 5t, least at t = 5/3, where it turns. Five real seconds a run. Line −5 to 1 m; graph t 0 to 3.5 by v −6 to 5. */
(function () {
  const d = sim('sim-particle', 560);
  const v = (t) => 3 * t - 5, s = (t) => 1.5 * t * t - 5 * t, T = 3, TURN = 5 / 3;
  const dist = (t) => (t <= TURN ? -s(t) : -s(TURN) + (s(t) - s(TURN)));
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), t = Math.min(cy.now(), T);
    const L = { l: 260, r: 1140, y: 150 }, LX = (m) => L.l + ((m + 5) / 6) * (L.r - L.l);
    line(ctx, L.l, L.y, L.r, L.y, PAL.muted, 3);
    [-5, -4, -3, -2, -1, 0, 1].forEach((m) => { line(ctx, LX(m), L.y - 6, LX(m), L.y + 6, PAL.muted, 2); text(ctx, `${fmt(m, 0)}`, LX(m), L.y + 28, PAL.muted, { size: 17, align: 'center' }); });
    text(ctx, 'm', L.r + 18, L.y + 28, PAL.muted, { size: 17, align: 'left' });
    dot(ctx, LX(0), L.y, PAL.ink, false, 8);
    const x = s(t), dir = v(t) >= 0 ? 1 : -1;
    dot(ctx, LX(x), L.y, PAL.ink, true, 11);
    if (Math.abs(v(t)) > 0.2 && t < T) arrow(ctx, LX(x) + dir * 16, L.y - 30, LX(x) + dir * (16 + 9 * Math.abs(v(t))), L.y - 30, fc, 4);
    const ax = axes(ctx, { l: 330, r: 1070, t: 250, b: 500 }, [0, 3.5], [-6, 5], { xl: 't (sec)', yl: 'v (m/sec)', nx: 7, ny: 11, fx: (u) => fmt(u, 1).replace(/\.0$/, ''), fy: (u) => (u % 2 === 0 ? String(u) : '') });
    if (t > 0) shade(ctx, ax, v, 0, 0, Math.min(t, TURN), ic, { alpha: 0.3 });
    if (t > TURN) shade(ctx, ax, v, 0, TURN, t, ic, { alpha: 0.3 });
    plot(ctx, ax, v, fc, { x: [0, 3] });
    line(ctx, ax.X(t), ax.box.t, ax.X(t), ax.box.b, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    text(ctx, '$\\kv(t)=3t-5$', ax.X(3) - 8, ax.Y(4) - 20, fc, { size: 22, weight: 600, align: 'right', tex: true });
    headline(ctx, `t = ${fmt(t, 2)} sec: the particle is ${fmt(Math.abs(x), 2)} m to the ${x < 0 ? 'left' : 'right'} of its start, after ${fmt(dist(t), 2)} m of travel.`);
    ro.set(`\\int_{0}^{${n(t, 2)}}\\kv(t)\\,dt=${typed('integral', n(x, 3))}\\text{ m}\\qquad \\int_{0}^{${n(t, 2)}}|\\kv(t)|\\,dt=${typed('integral', n(dist(t), 3))}\\text{ m}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* Figure 5.35 (Example 5.28), a faithful copy: f(x) = 3x⁸ − 2 at two zooms, (a) the positive area between the curve and the
   axis toward x = ±2, (b) the negative area between the zeros ±(2/3)^(1/8). */
(function () {
  const d = sim('fig-even-function', 440);
  const f = (x) => 3 * x ** 8 - 2, z = (2 / 3) ** (1 / 8);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const a = axes(ctx, { l: 110, r: 640, t: 40, b: 360 }, [-2.2, 2.2], [-100, 800], { xl: 'x', yl: 'y', nx: 0, ny: 9, fy: (v) => (v % 200 === 0 ? fmt(v, 0) : '') });
    [-2, -1, 1, 2].forEach((v) => text(ctx, String(v).replace('-', '−'), a.X(v), a.Y(-100) + 26, PAL.muted, { size: 17, align: 'center' }));
    shade(ctx, a, f, 0, -2, -z, ic, { alpha: 0.32 }); shade(ctx, a, f, 0, z, 2, ic, { alpha: 0.32 });
    plot(ctx, a, f, fc, { x: [-2.05, 2.05] });
    text(ctx, '(a)', 375, 420, PAL.ink, { size: 22, align: 'center' });
    const b = axes(ctx, { l: 790, r: 1320, t: 40, b: 360 }, [-1.2, 1.2], [-2.5, 1], { xl: 'x', yl: 'y', nx: 0, ny: 7, fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    [-1, 1].forEach((v) => text(ctx, String(v).replace('-', '−'), b.X(v), b.Y(-2.5) + 26, PAL.muted, { size: 17, align: 'center' }));
    shade(ctx, b, f, 0, -z, z, ic, { alpha: 0.32 });
    plot(ctx, b, f, fc, { x: [-1.15, 1.15] });
    text(ctx, '$\\kf(x)=3x^8-2$', b.X(0), b.Y(0.6), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '(b)', 1055, 420, PAL.ink, { size: 22, align: 'center' });
  }
  still(d, draw);
})();

/* Figure 5.36 (Example 5.29), a faithful copy: f(x) = −5 sin x on [−π, π], the area above the axis on [−π, 0] and below it
   on [0, π] shaded. Axes −π to π by −6 to 6. */
(function () {
  const d = sim('fig-odd-function', 420);
  const f = (x) => -5 * Math.sin(x), P = Math.PI;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 370 }, [-P, P], [-6, 6], { xl: 'x', yl: 'y', nx: 4, ny: 6, fx: (v) => ['−π', '−π/2', '0', 'π/2', 'π'][Math.round((v / P) * 2) + 2] });
    shade(ctx, ax, f, 0, -P, 0, ic, { alpha: 0.32 }); shade(ctx, ax, f, 0, 0, P, ic, { alpha: 0.32 });
    plot(ctx, ax, f, fc);
    text(ctx, '$\\kf(x)=-5\\sin x$', ax.X(1.7), ax.Y(3.2), fc, { size: 22, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();
};
