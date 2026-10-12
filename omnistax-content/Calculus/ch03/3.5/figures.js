/* Figures for section 3.5 Derivatives of Trigonometric Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.5'] = function (root, F) {
const { C, PAL, ctl, begin, axes, plot, drag, dot, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI;
const piTick = (v) => { const k = Math.round(v / PI); return k === 0 ? '0' : k === 1 ? 'π' : k === -1 ? '−π' : `${k < 0 ? '−' : ''}${Math.abs(k)}π`; };
const halfPi = (v) => { const k = Math.round((2 * v) / PI); if (k === 0) return '0'; const s = k < 0 ? '−' : '', a = Math.abs(k); return a % 2 ? `${s}${a === 1 ? '' : a}π/2` : `${s}${a / 2 === 1 ? '' : a / 2}π`; };

/* Figure 3.25: D(x) = (sin(x + h) − sin x)/h over cos x on −2π to 2π by −1.5 to 1.5; the book draws h = 0.01. */
(function () {
  const d = sim('sim-sine-difference-quotient', 480);
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.01, max: 2, step: 0.01, value: 0.01, unit: '', dec: 2, detents: [0.01, 0.5, 1, 2] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 90, b: 410 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), h = hs.v;
    const D = (x) => (Math.sin(x + h) - Math.sin(x)) / h;
    let gap = 0;
    for (let i = 0; i <= 600; i++) { const x = -2 * PI + (4 * PI * i) / 600; gap = Math.max(gap, Math.abs(D(x) - Math.cos(x))); }
    const ax = axes(ctx, BOX, [-2 * PI, 2 * PI], [-1.5, 1.5], { xl: 'x', yl: 'y', nx: 4, ny: 6, fx: piTick, fy: (v) => fmt(v, 1) });
    plot(ctx, ax, Math.cos, dc, { w: 6 });
    plot(ctx, ax, D, fc, { w: 3.5 });
    text(ctx, '$\\cos x$', ax.X(-2 * PI) + 12, ax.Y(1) - 22, dc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, '$\\kD(x)$', ax.X(PI * 0.62), ax.Y(D(PI * 0.62)) + 34, fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: ax.X(0), y: ax.Y(1), r: 16, name: 'cos x at x = 0' }, { x: ax.X(-PI / 2), y: ax.Y(D(-PI / 2)), r: 16, name: `D(x) at x = −π/2: ${fmt(D(-PI / 2), 3)}` }];
    headline(ctx, `h = ${fmt(h, 2)}: $\\kD(x)$ is never more than ${fmt(gap, gap < 0.1 ? 3 : 2)} from $\\cos x$ on the window.`);
    ro.set(`\\kD(x)=\\frac{\\sin(x+${n(h)})-\\sin x}{${n(h)}},\\qquad \\max\\left|\\kD(x)-\\cos x\\right| = ${n(gap, 3)}`);
  }
  still(d, draw);
})();

/* Figure 3.26, a faithful copy: y = (sin h)/h and y = (cos h − 1)/h with their holes at (0, 1) and (0, 0), on −2π
   to 2π by −1.2 to 1.2. */
(function () {
  const d = sim('fig-two-trig-limits', 460);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const opts = { xl: 'h', yl: 'y', nx: 4, ny: 4, fx: piTick, fy: (v) => fmt(v, 1) };
    const L = axes(ctx, { l: 110, r: 640, t: 50, b: 380 }, [-2 * PI, 2 * PI], [-1.2, 1.2], opts);
    const R = axes(ctx, { l: 790, r: 1320, t: 50, b: 380 }, [-2 * PI, 2 * PI], [-1.2, 1.2], opts);
    plot(ctx, L, (h) => Math.sin(h) / h, fc, { holes: [[0, 1]] });
    plot(ctx, R, (h) => (Math.cos(h) - 1) / h, fc, { holes: [[0, 0]] });
    text(ctx, '$y = \\dfrac{\\sin h}{h}$', L.X(PI * 0.5), L.Y(1.0), fc, { size: 22, weight: 600, align: 'left', tex: true });
    text(ctx, '$y = \\dfrac{\\cos h - 1}{h}$', R.X(-PI * 1.95), R.Y(1.0), fc, { size: 22, weight: 600, align: 'left', tex: true });
    text(ctx, '(a)', 375, 440, PAL.ink, { size: 22, align: 'center' }); text(ctx, '(b)', 1055, 440, PAL.ink, { size: 22, align: 'center' });
    hits = [{ x: L.X(0), y: L.Y(1), r: 14, name: 'the hole at (0, 1): the limit of (sin h)/h is 1' }, { x: R.X(0), y: R.Y(0), r: 14, name: 'the hole at (0, 0): the limit of (cos h − 1)/h is 0' }];
  }
  still(d, draw);
})();

/* Figure 3.27: a point dragged along f(x) = sin x carries its tangent, and the point (x, f′(x)) traces cos x below,
   on −2π to 2π; the book's dots mark the horizontal tangents at ±π/2 and ±3π/2 and the zeros of cos x there. */
(function () {
  const d = sim('sim-sine-derivative-trace', 640);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2 * PI, max: 2 * PI, step: 0.01, value: 1, unit: '', dec: 2, snap: true, specials: [-1.5, -0.5, 0.5, 1.5].map((k) => ({ at: k * PI })) });
  const T = F.deriv({ f: Math.sin, df: Math.cos });
  const P = drag(d, { x: xs, y: Math.sin });
  const ro = readout(d);
  const TOP = { l: 230, r: 1210, t: 90, b: 300 }, LOW = { l: 230, r: 1210, t: 380, b: 590 };
  const FLAT = [-1.5, -0.5, 0.5, 1.5].map((k) => k * PI);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), dc = C('derivative');
    const x = xs.v;
    const o = { xl: 'x', yl: 'y', nx: 8, ny: 2, fx: halfPi, fy: (v) => fmt(v, 0) };
    const yo = { ...o, ny: 6, fy: (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : '') };
    const top = axes(ctx, TOP, [-2 * PI, 2 * PI], [-1.5, 1.5], yo);
    const low = axes(ctx, LOW, [-2 * PI, 2 * PI], [-1.5, 1.5], yo);
    const m = T.draw(ctx, top, low, x, { fc, lc, dc });
    FLAT.forEach((a) => { dot(ctx, top.X(a), top.Y(Math.sin(a)), fc, true, 7); dot(ctx, low.X(a), low.Y(0), dc, true, 7); });
    P.draw(ctx, top, fc);
    text(ctx, '$\\kf(x) = \\sin x$', top.X(-2 * PI) + 10, top.Y(1.5) + 18, fc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, '$\\kfprime(x) = \\cos x$', low.X(-2 * PI) + 10, low.Y(1.5) + 18, dc, { size: 24, weight: 600, align: 'left', tex: true });
    const flat = FLAT.some((a) => Math.abs(x - a) < 1e-9);
    hits = [
      { x: top.X(x), y: top.Y(Math.sin(x)), r: 18, name: `(${fmt(x, 2)}, ${fmt(Math.sin(x), 3)}) on sin x` },
      { x: low.X(x), y: low.Y(m), r: 16, name: `(${fmt(x, 2)}, ${fmt(m, 3)}) on cos x` },
      ...FLAT.map((a) => ({ x: top.X(a), y: top.Y(Math.sin(a)), r: 12, name: `a horizontal tangent of sin x at x = ${halfPi(a)}` })),
    ];
    headline(ctx, flat ? `x = ${halfPi(x)}: the tangent is horizontal and $\\kfprime(x) = \\cos x = 0$.`
      : `x = ${fmt(x, 2)}: the slope of the tangent to sin x is ${fmt(m, 3)} = cos ${fmt(x, 2)}.`);
    ro.set(`\\kfprime(${n(x)}) = \\cos(${n(x)}) = ${n(m, 3)}`);
  }
  still(d, draw);
})();
};
