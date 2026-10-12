/* Figures for section 3.3 Differentiation Rules. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, dot, line, text, label, headline, register, readout, fmt, hover, presence, hbracket, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const blank = () => '';
const through = (ctx, ax, x0, y0, m, color, o = {}) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w: 4, ...o });

/* Figure 3.18 (Example 3.20), a faithful copy: f(x) = x² and g(x) = 3x² on the left, f′(x) = 2x and g′(x) = 6x
   on the right, on the book's −0.5 to 2 by −2 to 12; f and g are the figure's two referents. */
(function () {
  const d = sim('fig-constant-multiple', 470);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const rf = F.ref('const-f'), rg = F.ref('const-g');
    const L = axes(ctx, { l: 120, r: 640, t: 50, b: 410 }, [-0.5, 2], [-2, 12], { xl: 'x', yl: 'y', nx: 5, ny: 7, fx: (v) => fmt(v, 1) });
    const R = axes(ctx, { l: 820, r: 1340, t: 50, b: 410 }, [-0.5, 2], [-2, 12], { xl: 'x', yl: 'y', nx: 5, ny: 7, fx: (v) => fmt(v, 1) });
    plot(ctx, L, (x) => x * x, rf); plot(ctx, L, (x) => 3 * x * x, rg);
    plot(ctx, R, (x) => 2 * x, rf); plot(ctx, R, (x) => 6 * x, rg);
    text(ctx, '$\\kg(x) = 3x^2$', L.X(1.45), L.Y(7.6), rg, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kf(x) = x^2$', L.X(1.6), L.Y(1.2), rf, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, '$\\kgprime(x) = 6x$', R.X(1.3), R.Y(9.4), rg, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kfprime(x) = 2x$', R.X(1.5), R.Y(1.6), rf, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [
      { x: L.X(1.8), y: L.Y(3 * 3.24), r: 14, name: 'g(x) = 3x²' }, { x: L.X(1.8), y: L.Y(3.24), r: 14, name: 'f(x) = x²' },
      { x: R.X(1.8), y: R.Y(10.8), r: 14, name: 'g′(x) = 6x' }, { x: R.X(1.8), y: R.Y(3.6), r: 14, name: 'f′(x) = 2x' },
    ];
  }
  still(d, draw);
})();

/* Sim: the product f(x)g(x) of Example 3.24, f(x) = x² + 2 and g(x) = 3x³ − 5x, as the area of a rectangle with
   sides g(x) across and f(x) up; moving x to x + h grows the sides by Δg and Δf and the area by a strip f·Δg,
   a strip g·Δf and a corner Δf·Δg. The two sides are drawn to their own scales, fixed from the sliders' reach
   (g(2.4) ≈ 29.5 across, f(2.4) = 7.76 up). */
(function () {
  const d = sim('sim-product-rule-area', 560);
  const f = (x) => x * x + 2, g = (x) => 3 * x ** 3 - 5 * x, df = (x) => 2 * x, dg = (x) => 9 * x * x - 5;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 1.5, max: 2.2, step: 0.01, value: 2, unit: '', dec: 2, detents: [2] });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0, max: 0.2, step: 0.005, value: 0.2, unit: '', dec: 3, snap: true, specials: [{ at: 0 }] });
  const pr = presence(d);
  const ro = readout(d);
  const X0 = 270, Y0 = 470, SX = 1040 / 30, SY = 340 / 8;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const rf = F.ref('factor-f'), rg = F.ref('factor-g');
    const x = xs.v, h = hs.v, fx = f(x), gx = g(x), Df = f(x + h) - fx, Dg = g(x + h) - gx, zero = h === 0;
    pr.show('rate', zero, { ms: 600 });
    const W = gx * SX, Hh = fx * SY, dW = Dg * SX, dH = Df * SY;
    const box = (x1, y1, w, hh, color, a) => { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.fillRect(x1, y1, w, hh); ctx.restore(); };
    box(X0, Y0 - Hh, W, Hh, PAL.ink, 0.08);
    box(X0, Y0 - Hh - dH, W, dH, rf, 0.35);
    box(X0 + W, Y0 - Hh, dW, Hh, rg, 0.35);
    box(X0 + W, Y0 - Hh - dH, dW, dH, PAL.ink, 0.3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.strokeRect(X0, Y0 - Hh, W, Hh); ctx.setLineDash([8, 6]); ctx.strokeRect(X0, Y0 - Hh - dH, W + dW, Hh + dH); ctx.restore();
    hbracket(ctx, X0, X0 + W, Y0 + 26, rg, `g(x) = ${fmt(gx, 2)}`, { side: 'below' });
    vbracket(ctx, X0 - 18, Y0 - Hh, Y0, rf, `f(x) = ${fmt(fx, 2)}`, -1);
    const A = fx * gx, sF = gx * Df, sG = fx * Dg, cr = Df * Dg;
    text(ctx, `f(x)g(x) = ${fmt(A, 2)}`, X0 + W / 2, Y0 - Hh / 2, PAL.ink, { size: 22, weight: 600, align: 'center' });
    if (dH > 22) text(ctx, `g·Δf = ${fmt(sF, 2)}`, X0 + W / 2, Y0 - Hh - dH / 2, PAL.ink, { size: 20, align: 'center' });
    if (dW > 120) text(ctx, `f·Δg = ${fmt(sG, 2)}`, X0 + W + dW / 2, Y0 - Hh / 2, PAL.ink, { size: 20, align: 'center' });
    hits = [
      { x: X0 + W / 2, y: Y0 - Hh / 2, r: 60, name: `the area f(x)g(x) = ${fmt(fx, 2)} · ${fmt(gx, 2)} = ${fmt(A, 2)}` },
      ...(zero ? [] : [
        { x: X0 + W / 2, y: Y0 - Hh - dH / 2, r: Math.max(12, dH / 2), name: `the strip g(x)Δf = ${fmt(gx, 2)} · ${fmt(Df, 3)} = ${fmt(sF, 3)}` },
        { x: X0 + W + dW / 2, y: Y0 - Hh / 2, r: Math.max(12, dW / 2), name: `the strip f(x)Δg = ${fmt(fx, 2)} · ${fmt(Dg, 3)} = ${fmt(sG, 3)}` },
        { x: X0 + W + dW / 2, y: Y0 - Hh - dH / 2, r: Math.max(12, Math.min(dW, dH) / 2), name: `the corner ΔfΔg = ${fmt(cr, 3)}` }]),
    ];
    const rate = df(x) * gx + dg(x) * fx;
    headline(ctx, zero ? `h = 0: the corner is gone, and the area grows at the rate f′(x)g(x) + g′(x)f(x) = ${fmt(rate, 2)}.`
      : `h = ${fmt(h, 3)}: the area grows by ${fmt(sF + sG + cr, 2)}: strips ${fmt(sF, 2)} and ${fmt(sG, 2)}, corner ${fmt(cr, 2)}.`);
    ro.set(zero ? `\\kfprime(${n(x)})\\kg(${n(x)})+\\kgprime(${n(x)})\\kf(${n(x)}) = ${n(df(x))}\\cdot ${n(gx)} + ${n(dg(x))}\\cdot ${n(fx)} = ${n(rate)}`
      : `\\frac{\\Delta(\\kf\\kg)}{h} = \\frac{\\kg\\,\\Delta \\kf}{h}+\\frac{\\kf\\,\\Delta \\kg}{h}+\\frac{\\Delta \\kf\\,\\Delta \\kg}{h} = ${n(sF / h)} + ${n(sG / h)} + ${n(cr / h)} = ${n((sF + sG + cr) / h)}`, undefined, { form: zero });
  }
  still(d, draw);
})();

/* Figure 3.19 (Example 3.31), a faithful copy: f(x) = x³ − 7x² + 8x + 1 and its horizontal tangents at x = 2/3 and
   x = 4, on −1 to 6 by −16 to 10. */
(function () {
  const d = sim('fig-horizontal-tangents', 470);
  const f = (x) => x ** 3 - 7 * x * x + 8 * x + 1;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 420 }, [-1, 6], [-16, 10], { xl: 'x', yl: 'y', nx: 7, ny: 13, fy: (v) => (v % 4 ? '' : fmt(v, 0)) });
    [2 / 3, 4].forEach((a) => through(ctx, ax, a, f(a), 0, lc));
    plot(ctx, ax, f, fc);
    [2 / 3, 4].forEach((a) => dot(ctx, ax.X(a), ax.Y(f(a)), fc, true, 9));
    text(ctx, '$\\kf(x) = x^3 - 7x^2 + 8x + 1$', ax.X(1.3), ax.Y(8), fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [
      { x: ax.X(2 / 3), y: ax.Y(f(2 / 3)), r: 16, name: `(2/3, ${fmt(f(2 / 3), 2)}), where the tangent is horizontal` },
      { x: ax.X(4), y: ax.Y(f(4)), r: 16, name: '(4, −15), where the tangent is horizontal' },
    ];
  }
  still(d, draw);
})();

/* Figure 3.21, a faithful copy for the Student Project: (a) f(x) = x³ + 3x² + x on −5 to 5 by −5 to 5, (b) the same
   track with the two grandstands and the front corner (−1.9, 2.8). */
(function () {
  const d = sim('fig-racetrack', 560);
  const f = (x) => x ** 3 + 3 * x * x + x;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const A = axes(ctx, { l: 100, r: 620, t: 40, b: 480 }, [-5, 5], [-5, 5], { xl: 'x', yl: 'y', nx: 10, ny: 10 });
    const B = axes(ctx, { l: 780, r: 1300, t: 40, b: 480 }, [-5, 5], [-5, 5], { xl: 'x', yl: 'y', nx: 0, ny: 0, fx: blank, fy: blank });
    plot(ctx, A, f, fc); plot(ctx, B, f, fc);
    text(ctx, '$\\kf(x) = x^3 + 3x^2 + x$', A.X(-1.2), A.Y(3.2), fc, { size: 22, weight: 600, align: 'right', tex: true });
    const stand = (pts) => { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(B.X(x), B.Y(y)) : ctx.moveTo(B.X(x), B.Y(y)))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); };
    stand([[-3.6, -1], [-3.3, 1.6], [-2.95, 1.5], [-3.25, -1.1]]);
    stand([[-2.65, 2.25], [-1.9, 2.8], [-1.75, 2.6], [-2.45, 2.05]]);
    dot(ctx, B.X(-1.9), B.Y(2.8), PAL.ink, true, 6);
    label(ctx, '(−1.9, 2.8)', B.X(-1.9), B.Y(2.8), { side: 'above', gap: 30 });
    text(ctx, '(a)', 360, 540, PAL.ink, { size: 22, align: 'center' });
    text(ctx, '(b)', 1040, 540, PAL.ink, { size: 22, align: 'center' });
    hits = [{ x: B.X(-3.27), y: B.Y(0.3), r: 26, name: 'the grandstand along the straightaway' }, { x: B.X(-2.2), y: B.Y(2.4), r: 24, name: 'the grandstand at the first curve' }];
  }
  still(d, draw);
})();
};
