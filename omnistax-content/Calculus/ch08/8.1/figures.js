/* Figures for section 8.1 Basics of Differential Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, fmt, cycle, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);

/* Figure 8.2 and Example 8.3: the family y = x² + C of y′ = 2x, the book's C = −4, −2, 0, 2, 4 faint, and the one
   parabola through the dragged initial point. Axes −4 to 4 by −5 to 10, which hold the point's whole range. */
(function () {
  const d = sim('sim-family-parabolas', 520);
  const FAM = [-4, -2, 0, 2, 4];
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -3, max: 3, step: 0.1, value: 2, unit: '', dec: 1 });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -4, max: 9, step: 0.1, value: 7, unit: '', dec: 1, specials: FAM.map((c) => ({ at: () => x0.v * x0.v + c })) });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  const BOX = { l: 230, r: 1170, t: 96, b: 470 };
  let ax = null;
  hover(d.stage, () => (ax ? FAM.map((c) => ({ x: ax.X(0), y: ax.Y(c), r: 16, name: `y = x² ${c < 0 ? '−' : '+'} ${Math.abs(c)}` })) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), c = y0.v - x0.v * x0.v;
    ax = axes(ctx, BOX, [-4, 4], [-5, 10], { xl: 'x', yl: 'y', nx: 8, ny: 15, fy: (v) => (v % 5 === 0 ? fmt(v, 0) : '') });
    FAM.forEach((k) => plot(ctx, ax, (x) => x * x + k, alpha(fc, 0.32), { w: 3 }));
    plot(ctx, ax, (x) => x * x + c, fc);
    FAM.forEach((k) => text(ctx, `C = ${fmt(k, 0)}`, ax.X(-0.12), ax.Y(k) + 2, fc, { size: 17, align: 'right', base: 'top', bg: PAL.panel }));
    P.draw(ctx, ax, pc);
    const cs = n(c, 1), sign = c < 0 ? '-' : '+';
    headline(ctx, `Through (${fmt(x0.v, 1)}, ${fmt(y0.v, 1)}): C = ${fmt(c, 1)}, the particular solution $\\kyfn = x^2 ${sign} ${n(Math.abs(c), 1)}$.`);
    ro.set(`\\kyfn = x^2 + C:\\quad ${n(y0.v, 1)} = (${n(x0.v, 1)})^2 + C,\\quad C = ${cs}`);
  }
  still(d, draw);
})();

/* Figure 8.3: the family y = 2e^(−2t) + Ce^t of y′ + 2y = 3e^t, the book's labelled members C = 1, 0.5 and −0.2 faint,
   the member for the slider's C full, and its initial value y(0) = 2 + C. Axes −1 to 4 by −4 to 6. */
(function () {
  const d = sim('sim-family-exponential', 500);
  const FAM = [1, 0.5, -0.2];
  const cs = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: -1, max: 2, step: 0.01, value: 1, unit: '', dec: 2, detents: FAM, specials: [{ at: 0 }] });
  const ro = readout(d);
  const y = (c) => (t) => 2 * Math.exp(-2 * t) + c * Math.exp(t);
  const BOX = { l: 230, r: 1170, t: 96, b: 450 };
  let ax = null;
  hover(d.stage, () => (ax ? FAM.flatMap((c) => [0.6, 1.2, 1.8].map((t) => ({ x: ax.X(t), y: ax.Y(y(c)(t)), r: 14, name: `y = 2e^(−2t) ${c < 0 ? '−' : '+'} ${Math.abs(c)}e^t` }))) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), c = cs.v;
    ax = axes(ctx, BOX, [-1, 4], [-4, 6], { xl: 't', yl: 'y', nx: 5, ny: 10 });
    FAM.forEach((k) => plot(ctx, ax, y(k), alpha(fc, 0.32), { w: 3 }));
    plot(ctx, ax, y(c), fc);
    dot(ctx, ax.X(0), ax.Y(2 + c), pc, true, 10);
    const tail = c > 0 ? 'the solution turns and grows as t grows.' : c < 0 ? 'the solution keeps decreasing as t grows.' : 'the solution goes to 0 as t grows.';
    headline(ctx, `C = ${fmt(c, 2)}: y(0) = ${fmt(2 + c, 2)}, and ${tail}`);
    const sg = c < 0 ? '-' : '+', a = n(Math.abs(c), 2);
    ro.set(`\\kyfn = 2e^{-2t} ${sg} ${a}e^{t},\\quad \\kyfn(0) = 2 ${sg} ${a} = ${n(2 + c, 2)}`);
  }
  still(d, draw);
})();

/* Figures 8.4 + 8.5, Examples 8.6 and 8.7: a baseball thrown up from 3 m with initial velocity v₀ under gravity alone,
   v(t) = −9.8t + v₀ and s(t) = −4.9t² + v₀t + 3, the ball on a height scale and both graphs beside it as time runs to
   the landing. Scale 0 to 15 m; graphs t 0 to 3.5 s, s 0 to 15 m, v −20 to 15 m/s, which hold v₀ up to 15. */
(function () {
  const d = sim('sim-baseball', 600);
  const v0 = ctl(d.controls, { label: 'v_0', cls: '', key: 'v0', min: 0, max: 15, step: 0.5, value: 10, unit: 'm/s', dec: 1, onInput: () => cy.reset() });
  const land = () => (v0.v + Math.sqrt(v0.v * v0.v + 58.8)) / 9.8;
  const cy = cycle(() => land(), 1.2);
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), t = Math.min(cy.now(), land());
    const v = (u) => -9.8 * u + v0.v, s = (u) => -4.9 * u * u + v0.v * u + 3;
    const S = { x: 250, t: 110, b: 560 }, SY = (m) => S.b - (m / 15) * (S.b - S.t);
    line(ctx, S.x - 120, S.b, S.x + 120, S.b, PAL.muted, 3);
    for (let m = 0; m <= 15; m += 5) { line(ctx, S.x - 120, SY(m), S.x - 108, SY(m), PAL.muted, 2); text(ctx, `${m} m`, S.x - 128, SY(m), PAL.muted, { size: 17, align: 'right', base: 'middle' }); }
    const by = SY(Math.max(0, s(t)));
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(S.x, by - 18, 18, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(S.x - 26, by - 18, 16, -0.7, 0.7); ctx.stroke(); ctx.beginPath(); ctx.arc(S.x + 26, by - 18, 16, Math.PI - 0.7, Math.PI + 0.7); ctx.stroke(); ctx.restore();
    const vt = v(t), L = Math.sign(vt) * Math.min(150, Math.max(34, Math.abs(vt) * 9));
    if (Math.abs(vt) > 0.3 && t < land()) {
      arrow(ctx, S.x + 52, by - 18, S.x + 52, by - 18 - L, fc, 4);
      text(ctx, vt > 0 ? '$\\kv(t) > 0$' : '$\\kv(t) < 0$', S.x + 66, by - 18 - L / 2, fc, { size: 20, weight: 600, align: 'left', base: 'middle', tex: true });
    }
    arrow(ctx, S.x - 52, by - 30, S.x - 52, by + 40, PAL.ink, 4);
    text(ctx, 'g', S.x - 64, by + 12, PAL.ink, { size: 22, align: 'right', base: 'middle' });
    const A = axes(ctx, { l: 640, r: 1320, t: 96, b: 280 }, [0, 3.5], [0, 15], { xl: 't (s)', yl: 's (m)', nx: 7, ny: 3, fx: (u) => (Number.isInteger(u) ? fmt(u, 0) : '') });
    const B = axes(ctx, { l: 640, r: 1320, t: 376, b: 560 }, [0, 3.5], [-20, 15], { xl: 't (s)', yl: 'v (m/s)', nx: 7, ny: 7, fx: (u) => (Number.isInteger(u) ? fmt(u, 0) : ''), fy: (u) => (u % 10 === 0 ? fmt(u, 0) : '') });
    plot(ctx, A, s, alpha(fc, 0.3), { w: 3, x: [0, land()] }); plot(ctx, B, v, alpha(fc, 0.3), { w: 3, x: [0, land()] });
    if (t > 0) { plot(ctx, A, s, fc, { x: [0, t] }); plot(ctx, B, v, fc, { x: [0, t] }); }
    dot(ctx, A.X(t), A.Y(s(t)), fc, true, 9); dot(ctx, B.X(t), B.Y(vt), fc, true, 9);
    drop(ctx, A.X(t), A.box.t, A.X(t), B.box.b);
    const tp = v0.v / 9.8, te = Math.min(land(), 3.4);
    text(ctx, '$\\ks(t)$', A.X(tp) + 16, A.Y(s(tp)) - 8, fc, { size: 22, weight: 600, align: 'left', base: 'bottom', tex: true });
    text(ctx, '$\\kv(t)$', B.X(te) - 30, B.Y(v(te)) - 12, fc, { size: 22, weight: 600, align: 'right', base: 'bottom', tex: true });
    const state = Math.abs(vt) < 0.05 ? 'at the top of its flight' : vt > 0 ? 'rising' : 'falling';
    headline(ctx, `t = ${fmt(t, 2)} s: v(t) = ${fmt(vt, 2)} m/s, the ball is ${state}, ${fmt(Math.max(0, s(t)), 2)} m above the ground.`);
    ro.set(`\\kvprime(t) = -9.8,\\quad \\kv(${n(t)}) = -9.8(${n(t)}) + ${n(v0.v, 1)} = ${n(vt)},\\quad \\ks(${n(t)}) = -4.9(${n(t)})^2 + ${n(v0.v, 1)}(${n(t)}) + 3 = ${n(Math.max(0, s(t)))}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => land() / 5), draw });
})();
};
