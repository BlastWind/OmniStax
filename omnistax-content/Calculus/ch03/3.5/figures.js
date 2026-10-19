/* Figures for section 3.5 Derivatives of Trigonometric Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, text, headline, register, readout, fmt, hover } = F;
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

/* Sim: the unit circle with the point P at angle θ nudged to Q at θ + Δθ. The small right triangle P, K, Q has its
   hypotenuse across the arc Δθ and its angle at Q equal to θ + Δθ/2, so it closes on a copy of the big triangle O, (cos θ, 0), P
   turned a quarter turn: Δ(sin θ) ≈ cos θ · Δθ and Δ(cos θ) ≈ −sin θ · Δθ. θ + Δθ stays within the first quadrant. The inset
   magnifies the small triangle so its chord is 300 units long. */
(function () {
  const d = sim('sim-unit-circle-nudge', 580);
  const ths = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0.1, max: 1.2, step: 0.01, value: 0.7, unit: '', dec: 2 });
  const dts = ctl(d.controls, { label: '\\Delta\\ktheta', cls: 'angle', key: 'dtheta', min: 0.01, max: 0.37, step: 0.01, value: 0.25, unit: '', dec: 2 });
  const ro = readout(d);
  const O = [330, 320], R = 220, IN = { l: 690, r: 1350, t: 96, b: 560 };
  const M = (p) => [O[0] + p[0] * R, O[1] - p[1] * R];
  let hits = [];
  hover(d.stage, () => hits);
  const seg = (ctx, a, b, color, w = 3, dash) => line(ctx, a[0], a[1], b[0], b[1], color, w, dash);
  const arcPts = (t0, t1, map) => Array.from({ length: 41 }, (_, i) => { const t = t0 + ((t1 - t0) * i) / 40; return map([Math.cos(t), Math.sin(t)]); });
  const poly = (ctx, pts, color, w) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(...p) : ctx.moveTo(...p))); ctx.stroke(); ctx.restore(); };
  function draw() {
    const { ctx } = begin(d.c);
    const th = ths.v, dt = dts.v, ac = C('angle'), c0 = F.cat(0), c1 = F.cat(1), dc = C('derivative');
    const P = [Math.cos(th), Math.sin(th)], Q = [Math.cos(th + dt), Math.sin(th + dt)], K = [Q[0], P[1]];
    const ds = Q[1] - P[1], dcos = Q[0] - P[0], chord = Math.hypot(ds, dcos);
    line(ctx, O[0] - 1.18 * R, O[1], O[0] + 1.18 * R, O[1], PAL.muted, 2); line(ctx, O[0], O[1] + 1.0 * R, O[0], O[1] - 1.18 * R, PAL.muted, 2);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(O[0], O[1], R, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    const Pm = M(P), Qm = M(Q), Km = M(K), Fm = M([P[0], 0]);
    seg(ctx, O, Pm, PAL.ink, 3); seg(ctx, O, Fm, c0, 5); seg(ctx, Fm, Pm, c1, 5);
    poly(ctx, arcPts(0, th, (p) => [O[0] + p[0] * 52, O[1] - p[1] * 52]), ac, 3);
    text(ctx, 'θ', O[0] + 70 * Math.cos(th / 2), O[1] - 70 * Math.sin(th / 2), ac, { size: 24, weight: 600, align: 'center', base: 'middle' });
    text(ctx, 'cos θ', (O[0] + Fm[0]) / 2, O[1] + 26, c0, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'sin θ', Fm[0] + 12, (Fm[1] + O[1]) / 2 + 30, c1, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, '1', (O[0] + Pm[0]) / 2 - 14 * Math.sin(th), (O[1] + Pm[1]) / 2 - 14 * Math.cos(th), PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    poly(ctx, arcPts(th, th + dt, M), ac, 6);
    seg(ctx, Km, Qm, c0, 3); seg(ctx, Km, Pm, c1, 3);
    dot(ctx, ...Pm, PAL.ink, true, 7); dot(ctx, ...Qm, PAL.ink, true, 7);
    text(ctx, 'P', Pm[0] + 16 * Math.cos(th), Pm[1] - 16 * Math.sin(th), PAL.ink, { size: 22, weight: 600, align: 'left', base: 'middle' });
    text(ctx, 'Q', Qm[0] + 16 * Math.cos(th + dt), Qm[1] - 16 * Math.sin(th + dt) - 6, PAL.ink, { size: 22, weight: 600, align: 'left', base: 'bottom' });
    const half = Math.max(18, (Math.max(Math.abs(ds), Math.abs(dcos)) * R) / 2 + 12), mid = [(Pm[0] + Qm[0]) / 2, (Pm[1] + Qm[1]) / 2];
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.strokeRect(mid[0] - half, mid[1] - half, 2 * half, 2 * half);
    ctx.beginPath(); ctx.moveTo(mid[0] + half, mid[1] - half); ctx.lineTo(IN.l, IN.t); ctx.moveTo(mid[0] + half, mid[1] + half); ctx.lineTo(IN.l, IN.b); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(IN.l, IN.t, IN.r - IN.l, IN.b - IN.t); ctx.restore();
    const s = 300 / chord, G = [(P[0] + Q[0] + K[0]) / 3, (P[1] + Q[1] + K[1]) / 3], C0 = [(IN.l + IN.r) / 2, (IN.t + IN.b) / 2 + 10];
    const Z = (p) => [C0[0] + (p[0] - G[0]) * s, C0[1] - (p[1] - G[1]) * s];
    const Pz = Z(P), Qz = Z(Q), Kz = Z(K);
    seg(ctx, Pz, Qz, alpha(PAL.ink, 0.5), 2.5);
    poly(ctx, arcPts(th, th + dt, Z), ac, 6);
    seg(ctx, Kz, Qz, c0, 5); seg(ctx, Kz, Pz, c1, 5);
    const sq = 16; ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(Kz[0], Kz[1] - sq); ctx.lineTo(Kz[0] + sq, Kz[1] - sq); ctx.lineTo(Kz[0] + sq, Kz[1]); ctx.stroke(); ctx.restore();
    const down = Math.PI / 2, toP = Math.atan2(Pz[1] - Qz[1], Pz[0] - Qz[0]);
    ctx.save(); ctx.strokeStyle = ac; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(Qz[0], Qz[1], 46, toP, down); ctx.stroke(); ctx.restore();
    const bis = (toP + down) / 2;
    text(ctx, 'θ + Δθ/2', Qz[0] + 74 * Math.cos(bis) + 6, Qz[1] + 74 * Math.sin(bis) + 8, ac, { size: 20, weight: 600, align: 'left', base: 'middle', bg: PAL.panel });
    dot(ctx, ...Pz, PAL.ink, true, 7); dot(ctx, ...Qz, PAL.ink, true, 7);
    text(ctx, 'P', Pz[0] + 14, Pz[1] + 4, PAL.ink, { size: 22, weight: 600, align: 'left', base: 'middle' });
    text(ctx, 'Q', Qz[0] - 4, Qz[1] - 16, PAL.ink, { size: 22, weight: 600, align: 'center', base: 'bottom' });
    text(ctx, 'Δ(sin θ)', Kz[0] - 14, (Kz[1] + Qz[1]) / 2, c0, { size: 22, weight: 600, align: 'right', base: 'middle', bg: PAL.panel });
    text(ctx, '|Δ(cos θ)|', (Kz[0] + Pz[0]) / 2, Kz[1] + 26, c1, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    const am = Z([Math.cos(th + dt / 2), Math.sin(th + dt / 2)]), nx = Math.cos(th + dt / 2), ny = -Math.sin(th + dt / 2);
    text(ctx, 'Δθ', am[0] + nx * 28, am[1] + ny * 28, ac, { size: 22, weight: 600, align: 'left', base: 'middle', bg: PAL.panel });
    text(ctx, `×${fmt(s / R, 0)}`, IN.r - 12, IN.b - 12, PAL.muted, { size: 17, align: 'right', base: 'bottom' });
    hits = [
      { x: (Kz[0] + Qz[0]) / 2, y: (Kz[1] + Qz[1]) / 2, r: 20, name: `Δ(sin θ) = ${fmt(ds, 4)}, near cos θ · Δθ = ${fmt(Math.cos(th) * dt, 4)}` },
      { x: (Kz[0] + Pz[0]) / 2, y: Kz[1], r: 20, name: `Δ(cos θ) = ${fmt(dcos, 4)}, near −sin θ · Δθ = ${fmt(-Math.sin(th) * dt, 4)}` },
      { x: (O[0] + Fm[0]) / 2, y: O[1], r: 20, name: `cos θ = ${fmt(P[0], 4)}` },
      { x: Fm[0], y: (Fm[1] + O[1]) / 2, r: 20, name: `sin θ = ${fmt(P[1], 4)}` },
    ];
    headline(ctx, `Δθ = ${fmt(dt, 2)}: the small triangle's angle, θ + Δθ/2 = ${fmt(th + dt / 2, 3)}, closes on θ = ${fmt(th, 2)} as Δθ shrinks.`);
    ro.set(`\\frac{\\Delta(\\sin \\ktheta)}{\\Delta \\ktheta}=${n(ds / dt, 3)},\\ \\cos \\ktheta=\\htmlClass{kv-derivative}{${n(Math.cos(th), 3)}}\\qquad \\frac{\\Delta(\\cos \\ktheta)}{\\Delta \\ktheta}=${n(dcos / dt, 3)},\\ -\\sin \\ktheta=\\htmlClass{kv-derivative}{${n(-Math.sin(th), 3)}}`);
  }
  still(d, draw);
})();
};
