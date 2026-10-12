/* Figures for section 2.1 A Preview of Calculus. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, riemann, tangent, secant, drag, dot, line, arrow, text, label, headline, register, readout, tex, fmt, hover, presence, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const blank = () => '';
const lerp = (p, q, k) => p + (q - p) * k;
/* the line through (x0, y0) with slope m, drawn across the axes as a tangent is */
const through = (ctx, ax, x0, y0, m, color, w = 4) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w });

/* Figure 2.2, a faithful copy: the three lines on three panels, on the book's −5 to 5 grids. */
(function () {
  const d = sim('fig-three-lines', 510);
  const LINES = [
    { f: (x) => -2 * x - 3, s: '$\\kf(x) = -2x - 3$' },
    { f: (x) => x / 2 + 1, s: '$\\kg(x) = \\dfrac{x}{2} + 1$' },
    { f: () => 2, s: '$\\kh(x) = 2$' },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    LINES.forEach(({ f, s }, i) => {
      const l = 70 + i * 450, box = { l, r: l + 340, t: 50, b: 390 };
      const ax = axes(ctx, box, [-5, 5], [-5, 5], { xl: 'x', yl: 'y', nx: 10, ny: 10, fx: blank, fy: blank });
      plot(ctx, ax, f, fc);
      text(ctx, s, (box.l + box.r) / 2, 486, fc, { size: 24, weight: 600, align: 'center', tex: true });
    });
  }
  still(d, draw);
})();

/* Figure 2.3, a faithful copy: k(x) = x² on the book's −5 to 5 by −5 to 6 grid. */
(function () {
  const d = sim('fig-parabola', 470);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 500, r: 900, t: 40, b: 410 }, [-5, 5], [-5, 6], { xl: 'x', yl: 'y', nx: 10, ny: 11, fx: blank, fy: blank });
    plot(ctx, ax, (x) => x * x, fc);
    text(ctx, '$\\kk(x) = x^2$', ax.X(2.6), ax.Y(5.2), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figures 2.4, 2.5 and 2.6: the point (x, f(x)) dragged toward (a, f(a)) on the stand-in f(x) = 2 arctan x
   with a = 1, where the tangent's slope is 1. Axes fixed at −3 to 6 by −3 to 4, past the slider's reach. */
(function () {
  const d = sim('sim-secant-to-tangent', 540);
  const f = (x) => 2 * Math.atan(x), A = 1, FA = f(A), DFA = 1;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2.5, max: 5.5, step: 0.01, value: 4, unit: '', dec: 2, detents: [2.5, 4], snap: true, specials: [{ at: A }] });
  const P = drag(d, { x: xs, y: f });
  const pr = presence(d);
  const ro = readout(d);
  const BOX = { l: 230, r: 1230, t: 100, b: 480 };
  let hits = [], lastM = (f(4) - FA) / 3;
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point');
    const x = xs.v, fx = f(x), at = Math.abs(x - A) < 1e-9;
    if (!at) lastM = (fx - FA) / (x - A);
    pr.show('tan', at, { ms: 700 });
    const k = pr.a('tan'), m = lerp(lastM, DFA, k);
    const ax = axes(ctx, BOX, [-3, 6], [-3, 4], { xl: 'x', yl: 'y', nx: 9, ny: 7 });
    plot(ctx, ax, f, fc);
    through(ctx, ax, A, FA, m, lc);
    if (!at) { drop(ctx, ax.X(x), ax.Y(fx), ax.X(x), ax.Y(0)); }
    drop(ctx, ax.X(A), ax.Y(FA), ax.X(A), ax.Y(0));
    dot(ctx, ax.X(A), ax.Y(FA), pc, true, 10);
    label(ctx, '(a, f(a))', ax.X(A), ax.Y(FA), { side: 'right', gap: 26 });
    text(ctx, '$\\kf(x)$', ax.X(5.6), ax.Y(f(5.6)) - 30, fc, { size: 24, weight: 600, align: 'right', tex: true });
    P.draw(ctx, ax, pc);
    const xl = -1.6, yl = FA + m * (xl - A);
    hits = [
      { x: ax.X(A), y: ax.Y(FA), r: 18, name: `(a, f(a)) = (1, ${fmt(FA, 2)})` },
      ...(at ? [] : [{ x: ax.X(x), y: ax.Y(fx), r: 18, name: `(x, f(x)) = (${fmt(x, 2)}, ${fmt(fx, 2)})` }]),
      ...(yl > -3 && yl < 4 ? [{ x: ax.X(xl), y: ax.Y(yl), r: 16, name: at ? 'the tangent line at a, slope 1' : `the secant line, slope ${fmt(m, 3)}` }] : []),
    ];
    headline(ctx, at ? 'x = a: the secant has become the tangent, with slope 1.'
      : `x = ${fmt(x, 2)}: the secant through (1, ${fmt(FA, 2)}) and (${fmt(x, 2)}, ${fmt(fx, 2)}) has slope ${fmt(m, 3)}.`);
    ro.set(at ? `x = a = 1:\\quad \\text{slope of the tangent} = f^{\\prime}(1) = 1`
      : `\\kmsec = \\frac{\\kf(${n(x)}) - \\kf(1)}{${n(x)} - 1} = \\frac{${n(fx, 3)} - ${n(FA, 3)}}{${n(x - A)}} = ${n(m, 3)}`, undefined, { form: at });
  }
  still(d, draw);
})();

/* Figure 2.7, a faithful copy: f(x) = x² and the secants through (1, 1), on the book's −2 to 3 by −4 to 6. */
(function () {
  const d = sim('fig-example-secants', 560);
  const f = (x) => x * x;
  const PANELS = [{ b: 2, p: '(2, 4)', m: '3', tag: '(a)' }, { b: 1.5, p: '(3/2, 9/4)', m: '2.5', tag: '(b)' }];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point');
    PANELS.forEach(({ b, p, m, tag }, i) => {
      const l = 170 + i * 620, box = { l, r: l + 440, t: 40, b: 470 };
      const ax = axes(ctx, box, [-2, 3], [-4, 6], { xl: 'x', yl: 'y', nx: 5, ny: 10 });
      plot(ctx, ax, f, fc, { x: [-2, Math.sqrt(6)] });
      secant(ctx, ax, f, 1, b, lc, { w: 4 });
      dot(ctx, ax.X(1), ax.Y(1), pc, true, 9); dot(ctx, ax.X(b), ax.Y(f(b)), pc, true, 9);
      label(ctx, '(1, 1)', ax.X(1), ax.Y(1), { side: 'right', gap: 24 });
      label(ctx, p, ax.X(b), ax.Y(f(b)), { side: 'left', gap: 26 });
      text(ctx, `$\\kmsec = ${m}$`, ax.X(2.9), ax.Y(-3.3), lc, { size: 22, weight: 600, align: 'right', tex: true });
      text(ctx, tag, (box.l + box.r) / 2, 530, PAL.ink, { size: 22, align: 'center' });
    });
  }
  still(d, draw);
})();

/* Example 2.2: the rock beside s(t) = −16t² + 64 on 0 ≤ t ≤ 2, on one height scale. Axes fixed at 0 to 2 s
   by 0 to 70 ft, the example's domain and the drop from 64 ft. */
(function () {
  const d = sim('sim-average-velocity', 520);
  const s = (t) => -16 * t * t + 64, A = 0.5, SA = s(A), DSA = -16;
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: 2, step: 0.01, value: 0.49, unit: 's', dec: 2, detents: [0.49, 0.51], snap: true, specials: [{ at: A }] });
  const P = drag(d, { x: ts, y: s });
  const pr = presence(d);
  const ro = readout(d);
  const BOX = { l: 470, r: 1290, t: 100, b: 440 }, BX = 250, R = 16;
  let hits = [], lastM = (SA - s(0.49)) / 0.01;
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point');
    const t = ts.v, st = s(t), at = Math.abs(t - A) < 1e-9, lo = Math.min(t, A), hi = Math.max(t, A);
    if (!at) lastM = (st - SA) / (t - A);
    pr.show('tan', at, { ms: 700 });
    const k = pr.a('tan'), m = lerp(lastM, DSA, k);
    const ax = axes(ctx, BOX, [0, 2], [0, 70], { xl: 't, time in seconds', yl: 's(t), height in feet', yc: fc, nx: 4, ny: 7, fx: (v) => fmt(v, 1) });
    line(ctx, BX - 90, ax.Y(0), BX + 90, ax.Y(0), PAL.ink, 3);
    plot(ctx, ax, s, fc);
    through(ctx, ax, A, SA, m, lc);
    if (!at) hbracket(ctx, ax.X(lo), ax.X(hi), ax.Y(0) - 18, lc, `[${fmt(lo, 2)}, ${fmt(hi, 2)}]`);
    drop(ctx, BX + R + 6, ax.Y(SA), ax.X(A), ax.Y(SA));
    if (!at) drop(ctx, BX + R + 6, ax.Y(st), ax.X(t), ax.Y(st));
    dot(ctx, BX, ax.Y(SA), PAL.ink, false, R);
    dot(ctx, BX, ax.Y(st), PAL.ink, true, R);
    dot(ctx, ax.X(A), ax.Y(SA), pc, true, 10);
    P.draw(ctx, ax, pc);
    hits = [
      { x: BX, y: ax.Y(st), r: R + 4, name: `the rock at t = ${fmt(t, 2)} s, ${fmt(st, 2)} ft up` },
      ...(at ? [] : [{ x: BX, y: ax.Y(SA), r: R + 4, name: `the rock at t = 0.5 s, ${fmt(SA, 0)} ft up` }]),
      { x: ax.X(A), y: ax.Y(SA), r: 16, name: `(0.5, ${fmt(SA, 0)})` },
      ...(at ? [] : [{ x: ax.X(t), y: ax.Y(st), r: 16, name: `(${fmt(t, 2)}, ${fmt(st, 4)})` }]),
      { x: ax.X(1.2), y: ax.Y(SA + m * (1.2 - A)), r: 16, name: at ? 'the tangent line at t = 0.5, slope −16' : `the secant line, slope ${fmt(m, 2)}` },
    ];
    const ds = Math.abs(st - SA), dsS = fmt(ds, ds < 1 ? 4 : 2);
    headline(ctx, at ? 'At t = 0.5 s the interval has shrunk to an instant: the instantaneous velocity is −16 ft/sec.'
      : `Over [${fmt(lo, 2)}, ${fmt(hi, 2)}] the rock falls ${dsS} ft: $\\kvave$ = ${fmt(m, 2)} ft/sec.`);
    ro.set(at ? `\\text{instantaneous velocity at } t = 0.5:\\quad ${typed('derivative', '-16')}\\ \\text{ft/sec}`
      : `\\kvave = \\frac{\\ks(${n(hi)}) - \\ks(${n(lo)})}{${n(hi)} - ${n(lo)}} = \\frac{${n(s(hi), 4)} - ${n(s(lo), 4)}}{${n(hi - lo)}} = ${n(m, 2)}\\ \\text{ft/sec}`, undefined, { form: at });
  }
  still(d, draw);
})();

/* Figures 2.8 and 2.9: the region under the stand-in hill f(x) = 0.2x(7.6 − x) over [a, b] = [1, 4.6] and its
   n midpoint rectangles, nine as the book draws. Axes fixed at −1 to 6 by −1 to 4. */
(function () {
  const d = sim('sim-area-rectangles', 500);
  const f = (x) => 0.2 * x * (7.6 - x), A = 1, B = 4.6;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 50, step: 1, value: 9, unit: '', dec: 0, detents: [9] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1230, t: 100, b: 420 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), nv = ns.v;
    const ax = axes(ctx, BOX, [-1, 6], [-1, 4], { xl: 'x', yl: 'y', nx: 7, ny: 5, fx: (v) => (v === 1 ? '' : fmt(v, 0)) });
    const area = shade(ctx, ax, f, 0, A, B, ic, { alpha: 0.2 });
    const sum = riemann(ctx, ax, f, A, B, nv, ic, { rule: 'mid' });
    plot(ctx, ax, f, fc, { x: [-0.25, 6] });
    text(ctx, 'a', ax.X(A), BOX.b + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'b', ax.X(B), BOX.b + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '$\\kf(x)$', ax.X(5.3), ax.Y(f(5.3)) - 34, fc, { size: 24, weight: 600, align: 'left', tex: true });
    headline(ctx, `${nv} ${nv === 1 ? 'rectangle' : 'rectangles'}: their areas sum to ${fmt(sum, 3)}; the area under the curve is ${fmt(area, 3)}.`);
    ro.set(`\\text{sum of the areas of } ${nv} \\text{ ${nv === 1 ? 'rectangle' : 'rectangles'}} = ${typed('integral', n(sum, 4))} \\qquad \\text{area of the region} = ${typed('integral', n(area, 4))}`);
  }
  still(d, draw);
})();

/* Figure 2.10, a faithful copy: f(x) = x² + 1 and the three rectangles of Example 2.3 on the book's grid,
   −2 to 5 by −1 to 11. */
(function () {
  const d = sim('fig-three-rectangles', 560);
  const f = (x) => x * x + 1;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 490, r: 910, t: 40, b: 470 }, [-2, 5], [-1, 11], { xl: 'x', yl: 'y', nx: 7, ny: 12 });
    riemann(ctx, ax, f, 0, 3, 3, ic, { rule: 'left' });
    plot(ctx, ax, f, fc, { x: [-2, Math.sqrt(10)] });
    [0, 1, 2].forEach((i) => text(ctx, String(f(i)), ax.X(i + 0.5), ax.Y(f(i) / 2), ic, { size: 22, weight: 600, align: 'center', bg: PAL.panel }));
    text(ctx, '$\\kf(x) = x^2 + 1$', ax.X(3.4), ax.Y(10.2), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 2.11: the solid under z = f(x, y) = 2 − 0.2(x² + y²) over [0, 1.6] × [0, 1.6], a locked view from the
   book's viewpoint: x toward the reader on the left, y to the right, z up. */
(function () {
  const d = sim('fig-volume-surface', 600);
  const z = (x, y) => 2 - 0.2 * (x * x + y * y), S = 150, Q = 1.6, N = 8;
  /* a point (x, y, z) of the book as the drawing layer's scene point: y right, z up, x toward the viewer */
  const V = F.view({ yaw: 0.62, pitch: 0.42, dist: 1900, cx: 700, cy: 350 });
  const P = (x, y, h) => V.P([(y - 0.8) * S, (h - 1) * S, (x - 0.8) * S]);
  const nrm = (a, b, c) => { const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]]; return [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; };
  const sc = (x, y, h) => [y, h, x];
  const edge = (fn, t0, t1, k = 24) => Array.from({ length: k + 1 }, (_, i) => fn(t0 + ((t1 - t0) * i) / k));
  const stroke = (ctx, pts, color, w, dash) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink;
    const O = P(0, 0, 0);
    arrow(ctx, ...O, ...P(2.5, 0, 0), ink, 3);
    arrow(ctx, ...O, ...P(0, 2.7, 0), ink, 3);
    stroke(ctx, [O, P(0, 0, 2)], alpha(ink, 0.5), 2.5, [6, 8]);
    text(ctx, 'x', ...P(2.75, 0, 0), ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'y', ...P(0, 2.95, 0), ink, { size: 24, weight: 600, align: 'center' });
    /* the two faces toward the reader, then the top */
    const side = (fn) => { const top = edge(fn, 0, Q); return [...top.map(([x, y]) => P(x, y, z(x, y))), ...top.reverse().map(([x, y]) => P(x, y, 0))]; };
    F.face(ctx, side((t) => [Q, t]), V.shade(sc(1, 0, 0)), 0);
    F.face(ctx, side((t) => [t, Q]), V.shade(sc(0, 1, 0)), 0);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x0 = (Q * i) / N, x1 = (Q * (i + 1)) / N, y0 = (Q * j) / N, y1 = (Q * (j + 1)) / N;
      const w = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
      const n3 = nrm(...w.slice(0, 3).map(([x, y]) => sc(x, y, z(x, y))));
      F.face(ctx, w.map(([x, y]) => P(x, y, z(x, y))), V.shade(n3[1] < 0 ? n3.map((c) => -c) : n3), 0);
    }
    /* the hidden edges dashed, the seen ones solid, the top's edges in the function's colour */
    [[[0, 0], [Q, 0]], [[0, 0], [0, Q]]].forEach(([a, b]) => stroke(ctx, [P(...a, 0), P(...b, 0)], alpha(ink, 0.5), 2.5, [6, 8]));
    [[Q, 0], [Q, Q], [0, Q]].forEach(([x, y]) => stroke(ctx, [P(x, y, 0), P(x, y, z(x, y))], ink, 3));
    stroke(ctx, [P(Q, 0, 0), P(Q, Q, 0), P(0, Q, 0)], ink, 3);
    [(t) => [Q, t], (t) => [t, Q], (t) => [t, 0], (t) => [0, t]].forEach((fn) => stroke(ctx, edge(fn, 0, Q).map(([x, y]) => P(x, y, z(x, y))), fc, 4));
    arrow(ctx, ...P(0, 0, z(0, 0)), ...P(0, 0, 3), ink, 3);
    text(ctx, 'z', ...P(0, 0, 3.2), ink, { size: 24, weight: 600, align: 'center' });
    const [lx, ly] = P(0, 0, 2.5);
    text(ctx, '$z = \\kf(x, y)$', lx + 30, ly, fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();
};
