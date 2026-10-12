/* Figures for section 3.2 The Derivative as a Function. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, tangent, drag, dot, line, text, label, headline, register, readout, fmt, hover, presence, hbracket, vbracket, cart } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const blank = () => '';
const through = (ctx, ax, x0, y0, m, color, o = {}) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w: 4, ...o });

/* Figure 3.11, a faithful copy: a rising curve, the stand-in f(x) = 4 − 0.18(x − 4.5)², with the secant through
   (a, f(a)) and (a + Δx, f(a) + Δy) at a = 1, Δx = 3, and Δx and Δy as the legs of its triangle. */
(function () {
  const d = sim('fig-delta-secant', 470);
  const f = (x) => 4 - 0.18 * (x - 4.5) ** 2, A = 1, B = 4, FA = f(A), FB = f(B);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const ax = axes(ctx, { l: 470, r: 1010, t: 40, b: 400 }, [-0.6, 5.2], [-0.6, 5], { xl: 'x', yl: 'y', nx: 0, ny: 0, fx: blank, fy: blank });
    F.secant(ctx, ax, f, A, B, lc, { w: 4 });
    plot(ctx, ax, f, fc, { x: [-0.45, 5] });
    line(ctx, ax.X(A - 0.6), ax.Y(FA), ax.X(B + 0.6), ax.Y(FA), alpha(lc, 0.8), 2.5, [8, 8]);
    line(ctx, ax.X(B), ax.Y(FA - 0.6), ax.X(B), ax.Y(FB + 0.4), alpha(lc, 0.8), 2.5, [8, 8]);
    [[A, FA], [B, FB]].forEach(([x, y]) => dot(ctx, ax.X(x), ax.Y(y), fc, true, 8));
    text(ctx, 'Δx', ax.X((A + B) / 2), ax.Y(FA) + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'Δy', ax.X(B) + 16, ax.Y((FA + FB) / 2), PAL.ink, { size: 22, weight: 600, align: 'left' });
    text(ctx, 'a', ax.X(A), ax.box.b + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'a + Δx', ax.X(B), ax.box.b + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'f(a)', ax.box.l - 14, ax.Y(FA), PAL.ink, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'f(a) + Δy', ax.box.l - 14, ax.Y(FB), PAL.ink, { size: 22, weight: 600, align: 'right' });
    text(ctx, '$y = \\kf(x)$', ax.X(2.6), ax.Y(f(2.6)) - 34, fc, { size: 24, weight: 600, align: 'right', tex: true });
    hits = [
      { x: ax.X(A), y: ax.Y(FA), r: 16, name: '(a, f(a))' }, { x: ax.X(B), y: ax.Y(FB), r: 16, name: '(a + Δx, f(a) + Δy)' },
      { x: ax.X(0), y: ax.Y(FA + ((FB - FA) / 3) * (0 - A)), r: 14, name: 'the secant line, slope Δy/Δx' },
    ];
  }
  still(d, draw);
})();

/* Figures 3.12 and 3.13: a point dragged along f carries the tangent; below, on the same x-range, the point
   (x, f′(x)) traces f′. √x on 0 to 4 (f′ to 3 shown; it grows without bound toward 0) or x² − 2x on −1 to 3,
   as the book's two figures draw them. */
(function () {
  const d = sim('sim-derivative-tracer', 660);
  const FNS = {
    root: { f: Math.sqrt, df: (x) => 1 / (2 * Math.sqrt(x)), xr: [0, 4], yr: [0, 2], dr: [0, 3], ny: 4, dn: 3, fy: (v) => fmt(v, 1), lt: [0.15, 1.85], ld: [1.2, 2.6], slider: { min: 0.02, max: 4, step: 0.01, value: 2, unit: '', dec: 2 }, sp: [],
      ft: '$\\kf(x) = \\sqrt{x}$', dt: '$\\kfprime(x) = \\dfrac{1}{2\\sqrt{x}}$', dec: 3 },
    quad: { f: (x) => x * x - 2 * x, df: (x) => 2 * x - 2, xr: [-1, 3], yr: [-2, 4], dr: [-4, 4], ny: 3, dn: 4, lt: [-0.9, 3.6], ld: [-0.9, 3.2], slider: { min: -1, max: 3, step: 0.01, value: 0, unit: '', dec: 2 }, sp: [{ at: 1 }],
      ft: '$\\kf(x) = x^2 - 2x$', dt: '$\\kfprime(x) = 2x - 2$', dec: 2 },
  };
  let cur = FNS.root;
  const which = choice(d.controls, { label: 'f', options: [{ value: 'root', label: '√x' }, { value: 'quad', label: 'x² − 2x' }], value: 'root', aria: 'function', onInput: () => {
    cur = FNS[which.value]; xs.range(cur.slider); xs.mark(cur.sp); T = F.deriv(cur); } });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', ...FNS.root.slider, snap: true, specials: [] });
  let T = F.deriv(cur);
  const P = drag(d, { x: xs, y: (x) => cur.f(x) });
  const ro = readout(d);
  const TOP = { l: 260, r: 1180, t: 100, b: 320 }, LOW = { l: 260, r: 1180, t: 390, b: 600 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), dc = C('derivative');
    const x = xs.v, fx = cur.f(x), quad = cur === FNS.quad;
    const top = axes(ctx, TOP, cur.xr, cur.yr, { xl: 'x', yl: 'y', nx: 4, ny: cur.ny, fy: cur.fy });
    const low = axes(ctx, LOW, cur.xr, cur.dr, { xl: 'x', yl: 'y', nx: 4, ny: cur.dn });
    const m = T.draw(ctx, top, low, x, { fc, lc, dc });
    P.draw(ctx, top, fc);
    text(ctx, cur.ft, top.X(cur.lt[0]), top.Y(cur.lt[1]), fc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, cur.dt, low.X(cur.ld[0]), low.Y(cur.ld[1]), dc, { size: 24, weight: 600, align: 'left', tex: true });
    const flat = quad && Math.abs(x - 1) < 1e-9;
    hits = [
      { x: top.X(x), y: top.Y(fx), r: 18, name: `(${fmt(x, 2)}, ${fmt(fx, 3)}) on f` },
      ...(m < cur.dr[1] && m > cur.dr[0] ? [{ x: low.X(x), y: low.Y(m), r: 16, name: `(${fmt(x, 2)}, ${fmt(m, 3)}) on f′` }] : []),
      { x: top.X(Math.min(cur.xr[1], x + 0.5)), y: top.Y(fx + 0.5 * m), r: 14, name: `the tangent line at x = ${fmt(x, 2)}, slope ${fmt(m, 3)}` },
    ];
    headline(ctx, flat ? 'x = 1: the tangent is horizontal, and $\\kfprime(1) = 0$.'
      : `x = ${fmt(x, 2)}: the slope of the tangent is $\\kfprime(${n(x)}) = ${n(m, cur.dec)}$${m > 0 ? ', and $\\kf$ is increasing here.' : m < 0 ? ', and $\\kf$ is decreasing here.' : '.'}`);
    ro.set(quad ? `\\kfprime(${n(x)}) = 2(${n(x)}) - 2 = ${n(m, 2)}` : `\\kfprime(${n(x)}) = \\frac{1}{2\\sqrt{${n(x)}}} = ${n(m, 3)}`, undefined, { form: which.value });
  }
  still(d, draw);
})();

/* Figures 3.14, 3.15 and 3.16: the secants from (0, f(0)) to the points at −h, dashed, and +h, dotted, for the
   book's three functions, on −1.2 to 1.2 by −1.2 to 1.2. x sin(1/x) is filled between ±|x| where it swings
   faster than the canvas resolves, inside √(6·1.2/(1160π)) ≈ 0.044 of 0. */
(function () {
  const d = sim('sim-three-failures', 560);
  const W0 = Math.sqrt((6 * 1.2) / (1160 * Math.PI));
  const FNS = {
    abs: { f: Math.abs, tex: '$\\kf(x) = |x|$', at: [0, 1.05], al: 'center' },
    cbrt: { f: Math.cbrt, tex: '$\\kf(x) = \\sqrt[3]{x}$', at: [-1.15, 1.05], al: 'left' },
    wig: { f: (x) => (x === 0 ? 0 : x * Math.sin(1 / x)), tex: '$\\kf(x) = x\\sin\\dfrac{1}{x}$', at: [0, 1.05], al: 'center' },
  };
  const which = choice(d.controls, { label: 'f', options: [{ value: 'abs', label: '|x|' }, { value: 'cbrt', label: '∛x' }, { value: 'wig', label: 'x sin(1/x)' }], value: 'abs', aria: 'function' });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.01, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, detents: [1, 0.5, 0.1, 0.01] });
  const ro = readout(d);
  const BOX = { l: 400, r: 1000, t: 90, b: 500 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const k = which.value, { f } = FNS[k], h = hs.v;
    const ax = axes(ctx, BOX, [-1.2, 1.2], [-1.2, 1.2], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    const s = F.secants(ctx, ax, f, 0, h, lc);
    if (k === 'wig') {
      shade(ctx, ax, (x) => Math.abs(x), (x) => -Math.abs(x), -W0, W0, fc, { alpha: 0.5 });
      plot(ctx, ax, [{ f, x: [-1.2, -W0] }, { f, x: [W0, 1.2] }], fc, { w: 4 });
    } else plot(ctx, ax, f, fc);
    [[-h, f(-h)], [h, f(h)], [0, 0]].forEach(([x, y]) => dot(ctx, ax.X(x), ax.Y(y), fc, true, x ? 8 : 9));
    text(ctx, FNS[k].tex, ax.X(FNS[k].at[0]), ax.Y(FNS[k].at[1]), fc, { size: 24, weight: 600, align: FNS[k].al, tex: true });
    hits = [
      { x: ax.X(-h), y: ax.Y(f(-h)), r: 16, name: `(−h, f(−h)) = (${fmt(-h, 2)}, ${fmt(f(-h), 3)})` },
      { x: ax.X(h), y: ax.Y(f(h)), r: 16, name: `(h, f(h)) = (${fmt(h, 2)}, ${fmt(f(h), 3)})` },
      { x: ax.X(0), y: ax.Y(0), r: 14, name: '(0, f(0)) = (0, 0)' },
    ];
    const big = Math.abs(s.left) > 10 || Math.abs(s.right) > 10;
    headline(ctx, `h = ${fmt(h, 2)}: secant slope from the left ${fmt(s.left, big ? 1 : 2)}, from the right ${fmt(s.right, big ? 1 : 2)}.`);
    ro.set(`\\frac{\\kf(0)-\\kf(-${n(h)})}{${n(h)}} = ${n(s.left, big ? 1 : 3)} \\qquad \\frac{\\kf(${n(h)})-\\kf(0)}{${n(h)}} = ${n(s.right, big ? 1 : 3)}`);
  }
  still(d, draw);
})();

/* Figure 3.17 (Example 3.14): the track f(x) = x²/10 + bx + c for x < −10 and −x/4 + 5/2 for x ≥ −10, with
   c = 10b − 5 so that it is continuous at (−10, 5). Its two slopes there, b − 2 from the left and −1/4 from
   the right, are drawn as short tangents; they agree at b = 7/4. Axes fixed at −24 to 12 by −4 to 28. */
(function () {
  const d = sim('sim-smooth-track', 520);
  const B0 = 7 / 4;
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0, max: 3.5, step: 0.01, value: 1, unit: '', dec: 2, snap: true, specials: [{ at: B0 }] });
  const pr = presence(d);
  const ro = readout(d);
  const BOX = { l: 220, r: 1220, t: 90, b: 450 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const b = bs.v, c = 10 * b - 5, smooth = Math.abs(b - B0) < 1e-9, mL = b - 2, mR = -0.25;
    const par = (x) => x * x / 10 + b * x + c, lin = (x) => -x / 4 + 2.5;
    pr.show('one', smooth, { ms: 600 });
    const ax = axes(ctx, BOX, [-24, 12], [-4, 28], { xl: 'x', yl: 'y', nx: 9, ny: 8 });
    plot(ctx, ax, [{ f: par, x: [-24, -10] }, { f: lin, x: [-10, 12], ends: '[' }], fc);
    const k = pr.a('one');
    F.faded(ctx, 1 - k, [0, 0], () => {
      line(ctx, ax.X(-14), ax.Y(5 - 4 * mL), ax.X(-10), ax.Y(5), lc, 4);
      line(ctx, ax.X(-10), ax.Y(5), ax.X(-6), ax.Y(5 + 4 * mR), lc, 4);
    });
    F.faded(ctx, k, [0, 0], () => through(ctx, ax, -10, 5, mR, lc));
    dot(ctx, ax.X(-10), ax.Y(5), fc, true, 9);
    const xc = -19, yc = par(xc), ang = Math.atan2(ax.Y(par(xc + 0.5)) - ax.Y(yc), ax.X(xc + 0.5) - ax.X(xc));
    if (yc < 28 && yc > -4) { ctx.save(); ctx.translate(ax.X(xc), ax.Y(yc)); ctx.rotate(ang); cart(ctx, 0, -30, 64, 30, PAL.ink); ctx.restore(); }
    label(ctx, '(−10, 5)', ax.X(-10), ax.Y(5), { side: 'above', gap: 26 });
    hits = [
      { x: ax.X(-10), y: ax.Y(5), r: 16, name: '(−10, 5), where the parabola meets the line' },
      { x: ax.X(-12), y: ax.Y(5 - 2 * mL), r: 14, name: smooth ? 'the tangent line at −10, slope −1/4' : `the tangent from the left, slope b − 2 = ${fmt(mL, 2)}` },
      { x: ax.X(-8), y: ax.Y(5 + 2 * mR), r: 14, name: smooth ? 'the tangent line at −10, slope −1/4' : 'the tangent from the right, slope −1/4' },
      { x: ax.X(xc), y: ax.Y(yc) - 40, r: 34, name: 'the toy car' },
    ];
    headline(ctx, smooth ? 'b = 7/4, c = 25/2: the slopes from the left and right agree, and the track is differentiable at −10.'
      : `b = ${fmt(b, 2)}, c = ${fmt(c, 2)}: slope from the left ${fmt(mL, 2)}, from the right −0.25, a corner at −10.`);
    ro.set(smooth ? '\\lim_{x\\to -10^{-}}\\frac{\\kf(x)-\\kf(-10)}{x+10} = b-2 = \\frac{7}{4}-2 = -\\frac{1}{4} = \\lim_{x\\to -10^{+}}\\frac{\\kf(x)-\\kf(-10)}{x+10}'
      : `\\lim_{x\\to -10^{-}}\\frac{\\kf(x)-\\kf(-10)}{x+10} = b-2 = ${n(mL)} \\ne -\\frac{1}{4} = \\lim_{x\\to -10^{+}}\\frac{\\kf(x)-\\kf(-10)}{x+10}`, undefined, { form: smooth });
  }
  still(d, draw);
})();
};
