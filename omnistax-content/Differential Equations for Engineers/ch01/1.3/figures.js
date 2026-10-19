/* Figures for section 1.3 Separable equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, text, label, headline, register, readout, fmt, hover, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const level = (ctx, ax, v, color, dash = [10, 10], w = 3) => line(ctx, ax.box.l, ax.Y(v), ax.box.r, ax.Y(v), color, w, dash);

/* Figure 1.8: the implicit solution y² + 2 ln|y| = x² + D of y′ = xy/(y² + 1). With h(y) = y² + 2 ln y, h is increasing
   on y > 0 from −∞ to ∞, so for each x the equation has one y > 0, y = h⁻¹(x² + D), and one y < 0, its mirror: the top
   and the bottom curve. The dragged initial point (x₀, y₀) fixes D = y₀² + 2 ln|y₀| − x₀² and picks the curve through it;
   on the axis it is the singular solution y = 0. The book's D = 0 pair stays faint. Axes −3 to 3 by −3 to 3, the book's. */
(function () {
  const d = sim('sim-implicit', 580);
  const h = (y) => y * y + 2 * Math.log(y);
  const hinv = (v) => { let lo = 1e-12, hi = Math.sqrt(Math.max(v, 0)) + 2; for (let i = 0; i < 60; i++) { const m = 0.5 * (lo + hi); if (h(m) < v) lo = m; else hi = m; } return 0.5 * (lo + hi); };
  const x0 = ctl(d.controls, { label: 'x_0', cls: 'point', key: 'x0', min: -3, max: 3, step: 0.05, value: 1, unit: '', dec: 2 });
  const y0 = ctl(d.controls, { label: 'y_0', cls: 'point', key: 'y0', min: -3, max: 3, step: 0.05, value: 1, unit: '', dec: 2,
    specials: [{ at: 0, label: 'y = 0' }, { at: () => hinv(x0.v * x0.v), label: 'D = 0' }, { at: () => -hinv(x0.v * x0.v) }] });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 110, b: 520 };
  const top = (D) => (x) => hinv(x * x + D), bot = (D) => (x) => -hinv(x * x + D);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const X0 = x0.v, Y0 = y0.v, sing = Math.abs(Y0) < 1e-9, up = Y0 > 0;
    const D = sing ? 0 : Y0 * Y0 + 2 * Math.log(Math.abs(Y0)) - X0 * X0;
    const ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    hits = [];
    const bookToo = sing || Math.abs(D) > 1e-9;
    if (bookToo) {
      plot(ctx, ax, top(0), alpha(fc, 0.32), { w: 3 });
      plot(ctx, ax, bot(0), alpha(fc, 0.32), { w: 3 });
      [-2.2, 2.2].forEach((x) => { hits.push({ x: ax.X(x), y: ax.Y(top(0)(x)), r: 14, name: 'the book’s D = 0 curves' }); hits.push({ x: ax.X(x), y: ax.Y(bot(0)(x)), r: 14, name: 'the book’s D = 0 curves' }); });
    }
    level(ctx, ax, 0, sing ? fc : alpha(fc, 0.6), [10, 10], sing ? 5 : 3);
    text(ctx, 'y = 0', ax.box.r - 8, ax.Y(0) - 8, fc, { size: 20, weight: 600, align: 'right', base: 'bottom', bg: PAL.panel });
    [-1.5, 1.5].forEach((x) => hits.push({ x: ax.X(x), y: ax.Y(0), r: 14, name: 'the singular solution y = 0' }));
    if (!sing) {
      plot(ctx, ax, up ? top(D) : bot(D), fc);
      plot(ctx, ax, up ? bot(D) : top(D), fc, { w: 2.5 });
      [-1.5, 1.5].forEach((x) => {
        hits.push({ x: ax.X(x), y: ax.Y(top(D)(x)), r: 14, name: `the top curve, y > 0, D = ${fmt(D, 2)}${up ? ': the solution through the point' : ''}` });
        hits.push({ x: ax.X(x), y: ax.Y(bot(D)(x)), r: 14, name: `the bottom curve, y < 0, D = ${fmt(D, 2)}${up ? '' : ': the solution through the point'}` });
      });
    }
    const at = P.draw(ctx, ax, pc);
    if (at) hits.push({ x: at.x, y: at.y, r: 16, name: `the initial condition y(${fmt(X0, 2)}) = ${fmt(Y0, 2)}` });
    if (sing) {
      headline(ctx, `Through (${fmt(X0, 2)}, 0): the singular solution $\\ky = 0$.`);
      ro.set('\\ky = 0:\\quad \\kyprime = 0 = \\frac{x \\cdot 0}{0^2 + 1}', undefined, { form: 'sing' });
    } else {
      headline(ctx, `Through (${fmt(X0, 2)}, ${fmt(Y0, 2)}): D = ${fmt(D, 2)}, and the solution is the ${up ? 'top' : 'bottom'} curve.`);
      ro.set(`\\ky^2 + 2\\ln\\lvert\\ky\\rvert = x^2 + D:\\quad (${n(Y0)})^2 + 2\\ln\\lvert ${n(Y0)} \\rvert = (${n(X0)})^2 + D,\\quad D = ${n(D)}`, undefined, { form: 'gen' });
    }
  }
  still(d, draw);
})();

/* Figure 1.9 and Example 1.3.3: the coffee, T = A + (T(0) − A)e^(−kt) with k = −ln((T(1) − A)/(T(0) − A)) from the two
   measurements, the book's 89, 85 and 22 the defaults (T(1) stays below T(0) and above A on its range, so k > 0). Left
   panel t 0 to 12.5 min, T 55 to 95 (the book's window, holding T(0) up to 92); right t 0 to 80, T 10 to 100 with the
   level A. The time to 60° is the drop line; past 12.5 min it is pinned at the left panel's edge and read on the right. */
(function () {
  const d = sim('sim-coffee', 560);
  const T0 = ctl(d.controls, { label: 'T(0)', cls: 'point', key: 'T0', min: 87, max: 92, step: 0.1, value: 89, unit: '°C', dec: 1, detents: [89] });
  const T1 = ctl(d.controls, { label: 'T(1)', cls: 'point', key: 'T1', min: 81, max: 86.5, step: 0.1, value: 85, unit: '°C', dec: 1, detents: [85] });
  const Am = ctl(d.controls, { label: 'A', cls: '', key: 'A', min: 19, max: 25, step: 0.1, value: 22, unit: '°C', dec: 1, detents: [22] });
  const ro = readout(d);
  const LB = { l: 150, r: 640, t: 110, b: 470 }, RB = { l: 830, r: 1320, t: 110, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), mu = PAL.muted;
    const a = T0.v, b = T1.v, A = Am.v, Dd = a - A, k = -Math.log((b - A) / Dd);
    const T = (t) => A + Dd * Math.exp(-k * t), t60 = -Math.log((60 - A) / Dd) / k;
    hits = [];
    /* left: the first 12.5 minutes */
    const L = axes(ctx, LB, [0, 12.5], [55, 95], { xl: 't (min)', yl: 'T (°C)', nx: 5, ny: 4 });
    [a, b, 60].forEach((v) => level(ctx, L, v, alpha(PAL.ink, 0.35), [4, 8], 2));
    drop(ctx, L.X(1), L.Y(b), L.X(1), L.box.b);
    plot(ctx, L, T, fc);
    const hit = pinned(ctx, L.box, L.X, L.Y, t60, 60, fc, `t = ${fmt(t60, 2)}`);
    if (!hit.out) {
      drop(ctx, L.X(t60), L.Y(60), L.X(t60), L.box.b);
      dot(ctx, L.X(t60), L.Y(60), fc, true, 10);
      text(ctx, `t = ${fmt(t60, 2)}`, L.X(t60) + 10, L.box.b - 8, PAL.ink, { size: 17, align: 'left', base: 'bottom', bg: PAL.panel });
    }
    hits.push({ x: hit.x, y: hit.y, r: 16, name: `the coffee reaches 60 °C at t = ${fmt(t60, 2)} min` });
    text(ctx, 't = 1', L.X(1) + 8, L.box.b - 8, PAL.ink, { size: 17, align: 'left', base: 'bottom', bg: PAL.panel });
    text(ctx, '60 °C', L.box.l + 8, L.Y(60) - 6, PAL.ink, { size: 17, align: 'left', base: 'bottom', bg: PAL.panel });
    dot(ctx, L.X(0), L.Y(a), pc, true, 10);
    dot(ctx, L.X(1), L.Y(b), pc, true, 10);
    label(ctx, `T(0) = ${fmt(a, 1)}`, L.X(0), L.Y(a), { side: 'right', color: pc, size: 20, weight: 600 });
    label(ctx, `T(1) = ${fmt(b, 1)}`, L.X(1), L.Y(b), { side: 'right', color: pc, size: 20, weight: 600 });
    hits.push({ x: L.X(0), y: L.Y(a), r: 16, name: `T(0) = ${fmt(a, 1)} °C, measured when the coffee was poured` });
    hits.push({ x: L.X(1), y: L.Y(b), r: 16, name: `T(1) = ${fmt(b, 1)} °C, measured a minute later` });
    /* right: 80 minutes, with the ambient level */
    const R = axes(ctx, RB, [0, 80], [10, 100], { xl: 't (min)', yl: 'T (°C)', nx: 4, ny: 3 });
    level(ctx, R, A, mu, [10, 10], 3);
    text(ctx, `A = ${fmt(A, 1)}`, R.box.r - 8, R.Y(A) - 8, mu, { size: 20, weight: 600, align: 'right', base: 'bottom', bg: PAL.panel });
    plot(ctx, R, T, fc);
    if (t60 <= 80) { drop(ctx, R.X(t60), R.Y(60), R.X(t60), R.box.b); dot(ctx, R.X(t60), R.Y(60), fc, true, 8); }
    [20, 50].forEach((t) => hits.push({ x: R.X(t), y: R.Y(T(t)), r: 14, name: `T(${t}) = ${fmt(T(t), 1)} °C` }));
    hits.push({ x: R.X(40), y: R.Y(A), r: 14, name: `the ambient temperature A = ${fmt(A, 1)} °C` });
    headline(ctx, `k = ${fmt(k, 4)}: the coffee reaches 60° at t = ${fmt(t60, 2)} minutes.`);
    ro.set(`k = -\\ln\\tfrac{${n(b, 1)} - ${n(A, 1)}}{${n(a, 1)} - ${n(A, 1)}} = ${n(k, 4)},\\quad \\kT = ${n(A, 1)} + ${n(Dd, 1)}\\,e^{-${n(k, 4)}\\,t},\\quad \\kT(${n(t60, 2)}) = 60`);
  }
  still(d, draw);
})();
};
