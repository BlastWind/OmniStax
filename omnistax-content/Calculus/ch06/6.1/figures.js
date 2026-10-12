/* Figures for section 6.1 Areas between Curves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, drag, dot, line, text, label, headline, register, readout, fmt, hover, hbracket, vbracket, choice } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('\u2212', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
const simpson = (h, a, b, n = 400) => { const w = (b - a) / n; let s = h(a) + h(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * h(a + i * w); return (s * w) / 3; };

/* a rectangle of the plane in axis units, filled faintly and outlined */
function cell(ctx, ax, x0, x1, y0, y1, color, k = 1, strong = false) {
  const X0 = ax.X(x0), X1 = ax.X(x1), Y0 = ax.Y(y0), Y1 = ax.Y(y1);
  ctx.save(); ctx.globalAlpha *= k * (strong ? 0.42 : 0.2); ctx.fillStyle = color;
  ctx.fillRect(Math.min(X0, X1), Math.min(Y0, Y1), Math.abs(X1 - X0), Math.abs(Y1 - Y0));
  ctx.globalAlpha = k; ctx.strokeStyle = color; ctx.lineWidth = strong ? 3.5 : 2;
  ctx.strokeRect(Math.min(X0, X1), Math.min(Y0, Y1), Math.abs(X1 - X0), Math.abs(Y1 - Y0)); ctx.restore();
}
/* the curve x = u(y) for y in [c, d] */
function plotY(ctx, ax, u, c, d, color, w = 5) {
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l - 6, ax.box.t - 6, ax.box.r - ax.box.l + 12, ax.box.b - ax.box.t + 12); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const y = c + ((d - c) * i) / 160, X = ax.X(u(y)), Y = ax.Y(y); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
  ctx.stroke(); ctx.restore();
}
/* the region between x = v(y) on the left and x = u(y) on the right over [c, d] */
function shadeY(ctx, ax, u, v, c, d, color, a = 0.18) {
  ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const y = c + ((d - c) * i) / 160; const p = [ax.X(v(y)), ax.Y(y)]; if (i) ctx.lineTo(...p); else ctx.moveTo(...p); }
  for (let i = 160; i >= 0; i--) { const y = c + ((d - c) * i) / 160; ctx.lineTo(ax.X(u(y)), ax.Y(y)); }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

/* Figures 6.2 + 6.3: n rectangles between the stand-in curves f(x) = 0.25x² − x + 4 and g(x) = 0.5 + 0.35x on [1, 5],
   each from g to f at the left endpoint, the book's choice. Axes fixed at 0 to 6 by 0 to 6. */
(function () {
  const d = sim('sim-area-between', 560);
  const f = (x) => 0.25 * x * x - x + 4, g = (x) => 0.5 + 0.35 * x, A = 1, B = 5, AREA = simpson((x) => f(x) - g(x), A, B);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 50, step: 1, value: 10, unit: '', dec: 0, detents: [10] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: A, max: B - 0.001, step: 0.01, value: 2.25, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: 0 });
  const ro = readout(d);
  const BOX = { l: 220, r: 1220, t: 96, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = F.ref('curve-f'), gc = F.ref('curve-g'), ic = C('integral'), rc = C('region');
    const n = ns.v, w = (B - A) / n, i = Math.min(n - 1, Math.floor((xs.v - A) / w)), x0 = A + i * w, xi = x0;
    const ax = axes(ctx, BOX, [0, 6], [0, 6], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: (v) => (v === 1 || v === 5 ? '' : fmt(v, 0)) });
    shade(ctx, ax, f, g, A, B, rc, { alpha: 0.14 });
    let sum = 0;
    for (let k = 0; k < n; k++) { const s = A + k * w; sum += (f(s) - g(s)) * w; if (k !== i) cell(ctx, ax, s, s + w, g(s), f(s), ic); }
    cell(ctx, ax, x0, x0 + w, g(xi), f(xi), ic, 1, true);
    dash(ctx, ax.X(A), ax.Y(g(A)), ax.X(A), ax.Y(0)); dash(ctx, ax.X(B), ax.Y(f(B)), ax.X(B), ax.Y(0));
    plot(ctx, ax, f, fc, { x: [0.3, 5.7] }); plot(ctx, ax, g, gc, { x: [0, 6] });
    text(ctx, '$\\kf(x)$', ax.X(5.0) - 34, ax.Y(f(5.0)) - 26, fc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kg(x)$', ax.X(5.7), ax.Y(g(5.7)) + 30, gc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, 'a', ax.X(A), BOX.b + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'b', ax.X(B), BOX.b + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
    dot(ctx, ax.X(xi), ax.Y(f(xi)), fc, true, 7); dot(ctx, ax.X(xi), ax.Y(g(xi)), gc, true, 7);
    label(ctx, 'f(xᵢ*)', ax.X(xi), ax.Y(f(xi)), { side: 'left', gap: 22, color: fc });
    label(ctx, 'g(xᵢ*)', ax.X(xi), ax.Y(g(xi)), { side: 'left', gap: 22, color: gc });
    if (ax.X(x0 + w) - ax.X(x0) > 26) hbracket(ctx, ax.X(x0), ax.X(x0 + w), ax.Y(g(xi)) + 26, PAL.ink, 'Δx');
    P.draw(ctx, ax, PAL.ink);
    hits = [
      { x: ax.X(xi + w / 2), y: ax.Y((f(xi) + g(xi)) / 2), r: 24, name: `rectangle ${i + 1} of ${n}: height ${fmt(f(xi) - g(xi), 2)}, width ${fmt(w, 3)}` },
      { x: ax.X(3), y: ax.Y(f(3)), r: 18, name: 'the graph of f, the upper boundary' },
      { x: ax.X(3), y: ax.Y(g(3)), r: 18, name: 'the graph of g, the lower boundary' },
    ];
    headline(ctx, `${n} ${n === 1 ? 'rectangle' : 'rectangles'}: their areas add to ${fmt(sum, 3)}; the area between the curves is ${fmt(AREA, 3)}.`);
    ro.set(`\\kA\\approx\\sum_{i=1}^{${n}}[\\kf(x_i^{*})-\\kg(x_i^{*})]\\Delta x=${typed('integral', n2(sum))}\\qquad \\kA=\\int_{1}^{5}[\\kf(x)-\\kg(x)]\\,dx=${typed('integral', n2(AREA))}`);
  }
  still(d, draw);
})();

/* a still copy of an example's region between two curves */
function copy(id, H, o) {
  const d = sim(id, H);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = F.ref(o.refs[0]), gc = F.ref(o.refs[1]), rc = C('region');
    const ax = axes(ctx, o.box, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : ''), fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    shade(ctx, ax, o.top, o.bottom, o.a, o.b, rc, { alpha: 0.22 });
    (o.edges ?? []).forEach((x) => dash(ctx, ax.X(x), ax.Y(Math.max(o.top(x), o.bottom(x))), ax.X(x), ax.Y(Math.min(0, o.bottom(x)))));
    plot(ctx, ax, o.f, fc, { x: o.fx }); plot(ctx, ax, o.g, gc, { x: o.gx });
    o.labels.forEach(([s, x, y, i]) => text(ctx, s, ax.X(x), ax.Y(y), i ? gc : fc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel }));
    if (o.R) text(ctx, '$\\kR$', ax.X(o.R[0]), ax.Y(o.R[1]), C('region'), { size: 26, weight: 600, align: 'center', tex: true });
  }
  still(d, draw);
}
/* Figure 6.4, Example 6.1: f(x) = x + 4 above g(x) = 3 − x/2 on [1, 4], on 0 to 5 by 0 to 9. */
copy('fig-example-lines', 500, { box: { l: 420, r: 980, t: 40, b: 440 }, xr: [0, 5], yr: [0, 9], nx: 5, ny: 9, refs: ['ex1-f', 'ex1-g'],
  f: (x) => x + 4, g: (x) => 3 - x / 2, top: (x) => x + 4, bottom: (x) => 3 - x / 2, a: 1, b: 4, edges: [1, 4], fx: [0, 5], gx: [0, 5],
  labels: [['$\\kf(x)=x+4$', 2.2, 7.6, 0], ['$\\kg(x)=3-\\frac{x}{2}$', 4.2, 2.3, 1]] });
/* Figure 6.5, Example 6.2: 9 − (x/2)² above 6 − x between their crossings at −2 and 6, on −4 to 8 by −2 to 10. */
copy('fig-example-parabola', 520, { box: { l: 300, r: 1100, t: 40, b: 460 }, xr: [-4, 8], yr: [-2, 10], nx: 12, ny: 12, refs: ['ex2-f', 'ex2-g'],
  f: (x) => 9 - (x / 2) ** 2, g: (x) => 6 - x, top: (x) => 9 - (x / 2) ** 2, bottom: (x) => 6 - x, a: -2, b: 6, fx: [-4, 8], gx: [-4, 8],
  labels: [['$\\kf(x)=9-\\left(\\frac{x}{2}\\right)^{2}$', 4.3, 9.3, 0], ['$\\kg(x)=6-x$', 2.2, 2.4, 1]] });

/* Figure 6.6, Example 6.3: sin x and cos x from 0 to a right end b dragged over [0, 2π]; the area integral beside the
   signed one. The book's interval is [0, π]; the curves cross at π/4 and 5π/4. Axes fixed at 0 to 2π by −1.5 to 1.5. */
(function () {
  const d = sim('sim-curves-cross', 520);
  const f = Math.sin, g = Math.cos, PI = Math.PI;
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: PI / 72, max: 2 * PI, step: PI / 360, value: PI, unit: '', dec: 3,
    specials: [{ at: PI / 4, label: 'π/4' }, { at: PI, label: 'π' }, { at: 5 * PI / 4, label: '5π/4' }] });
  const P = drag(d, { x: bs, y: 0 });
  const ro = readout(d);
  const BOX = { l: 170, r: 1250, t: 100, b: 440 };
  const F1 = (x) => Math.sin(x) + Math.cos(x);   /* an antiderivative of cos − sin */
  const signed = (b) => (1 - Math.cos(b)) - Math.sin(b);
  const absArea = (b) => { const cut = [0, PI / 4, 5 * PI / 4, b].filter((x) => x <= b).sort((p, q) => p - q); let s = 0; for (let i = 0; i + 1 < cut.length; i++) s += Math.abs(F1(cut[i + 1]) - F1(cut[i])); return s; };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = F.ref('sine'), cc = F.ref('cosine'), rc = C('region');
    const b = bs.v;
    const ax = axes(ctx, BOX, [0, 2 * PI], [-1.5, 1.5], { xl: 'x', yl: 'y', nx: 8, ny: 6, fy: (v) => (Number.isInteger(Math.round(v * 1e6) / 1e6) ? fmt(v, 0) : ''), fx: (v) => ({ 0: '0', 1: 'π/4', 2: 'π/2', 3: '3π/4', 4: 'π', 5: '5π/4', 6: '3π/2', 7: '7π/4', 8: '2π' })[Math.round(v / (PI / 4))] ?? '' });
    const pieces = [[0, PI / 4, 'R_1'], [PI / 4, 5 * PI / 4, 'R_2'], [5 * PI / 4, 2 * PI, 'R_3']];
    pieces.forEach(([p, q, nm]) => {
      const r = Math.min(q, b); if (r <= p) return;
      shade(ctx, ax, (x) => Math.max(f(x), g(x)), (x) => Math.min(f(x), g(x)), p, r, rc, { alpha: 0.24 });
      if (r - p > 0.45) { const m = (p + r) / 2; text(ctx, nm, ax.X(m), ax.Y((f(m) + g(m)) / 2), rc, { size: 24, weight: 600, align: 'center', bg: PAL.panel }); }
    });
    dash(ctx, ax.X(b), ax.Y(Math.max(f(b), g(b))), ax.X(b), ax.Y(Math.min(f(b), g(b))));
    plot(ctx, ax, f, sc); plot(ctx, ax, g, cc);
    text(ctx, '$\\kf(x)=\\sin x$', ax.X(1.9), ax.Y(1.18), sc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kg(x)=\\cos x$', ax.X(3.6), ax.Y(-1.22), cc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    P.draw(ctx, ax, PAL.ink);
    const A = absArea(b), S = signed(b);
    hits = [{ x: ax.X(b), y: ax.Y(0), r: 18, name: `the right end of the interval, b = ${fmt(b, 3)}` },
      { x: ax.X(PI / 4), y: ax.Y(Math.SQRT1_2), r: 16, name: 'the curves cross at x = π/4' }, { x: ax.X(5 * PI / 4), y: ax.Y(-Math.SQRT1_2), r: 16, name: 'the curves cross again at x = 5π/4' }];
    const at = (v) => Math.abs(b - v) < 1e-6;
    const bs_ = at(PI) ? '\\pi' : at(PI / 4) ? '\\pi/4' : at(5 * PI / 4) ? '5\\pi/4' : n2(b, 3);
    headline(ctx, `On [0, ${at(PI) ? 'π' : fmt(b, 3)}]: the area between the curves is ${fmt(A, 3)}, while the integral of sin x − cos x is ${fmt(S, 3)}.`);
    ro.set(`\\kA=\\int_{0}^{${bs_}}|\\kf(x)-\\kg(x)|\\,dx=${typed('integral', n2(A))}\\qquad \\int_{0}^{${bs_}}(\\kf(x)-\\kg(x))\\,dx=${typed('integral', n2(S))}`);
  }
  still(d, draw);
})();

/* Figure 6.7, Example 6.4: the region under x² up to x = 1 and under 2 − x from 1 to 2, on 0 to 2.5 by 0 to 2.5. */
copy('fig-compound-region', 500, { box: { l: 470, r: 930, t: 30, b: 450 }, xr: [0, 2.5], yr: [0, 2.5], nx: 5, ny: 5, refs: ['left-curve', 'right-curve'],
  f: (x) => x * x, g: (x) => 2 - x, top: (x) => Math.min(x * x, 2 - x), bottom: () => 0, a: 0, b: 2, fx: [0, Math.sqrt(2.5)], gx: [0, 2],
  labels: [['$\\kf(x)=x^{2}$', 1.85, 2.3, 0], ['$\\kg(x)=2-x$', 2.0, 0.95, 1]], R: [1, 0.35] });

/* Figures 6.8 + 6.9: horizontal rectangles between the stand-ins v(y) = 0.5 + 0.3 sin(1.4y) + 0.2y on the left and
   u(y) = 4 − 0.15(y − 2)² on the right over [c, d] = [0.5, 4], each from v to u at the lower endpoint, the book's
   choice. Axes fixed at 0 to 5 by 0 to 4.5. */
(function () {
  const d = sim('sim-area-along-y', 560);
  const u = (y) => 4 - 0.15 * (y - 2) ** 2, v = (y) => 0.5 + 0.3 * Math.sin(1.4 * y) + 0.2 * y, Cc = 0.5, D = 4, AREA = simpson((y) => u(y) - v(y), Cc, D);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 50, step: 1, value: 10, unit: '', dec: 0, detents: [10] });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: Cc, max: D - 0.001, step: 0.01, value: 2.2, unit: '', dec: 2 });
  const ro = readout(d);
  const BOX = { l: 330, r: 1120, t: 96, b: 480 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const uc = F.ref('curve-u'), vc = F.ref('curve-v'), ic = C('integral'), rc = C('region');
    const n = ns.v, h = (D - Cc) / n, i = Math.min(n - 1, Math.floor((ys.v - Cc) / h)), y0 = Cc + i * h;
    const ax = axes(ctx, BOX, [0, 5], [0, 4.5], { xl: 'x', yl: 'y', nx: 5, ny: 9, fy: (t) => (Math.abs(t - Math.round(t)) < 1e-9 ? fmt(t, 0) : '') });
    shadeY(ctx, ax, u, v, Cc, D, rc, 0.14);
    let sum = 0;
    for (let k = 0; k < n; k++) { const s = Cc + k * h; sum += (u(s) - v(s)) * h; if (k !== i) cell(ctx, ax, v(s), u(s), s, s + h, ic); }
    cell(ctx, ax, v(y0), u(y0), y0, y0 + h, ic, 1, true);
    [Cc, D].forEach((y) => dash(ctx, ax.X(0), ax.Y(y), ax.X(u(y)), ax.Y(y)));
    plotY(ctx, ax, u, 0.1, 4.4, uc); plotY(ctx, ax, v, 0.1, 4.4, vc);
    text(ctx, '$\\kufn(y)$', ax.X(u(4.3)) + 48, ax.Y(4.3), uc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kv(y)$', ax.X(v(4.3)) - 44, ax.Y(4.3), vc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, 'c', BOX.l - 48, ax.Y(Cc), PAL.ink, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'd', BOX.l - 48, ax.Y(D), PAL.ink, { size: 22, weight: 600, align: 'right' });
    dot(ctx, ax.X(v(y0)), ax.Y(y0), vc, true, 7); dot(ctx, ax.X(u(y0)), ax.Y(y0), uc, true, 7);
    if (ax.Y(y0) - ax.Y(y0 + h) > 26) vbracket(ctx, ax.X(u(y0)) + 20, ax.Y(y0), ax.Y(y0 + h), PAL.ink, 'Δy', 1);
    label(ctx, 'v(yᵢ*)', ax.X(v(y0)), ax.Y(y0), { side: 'below', gap: 16, color: vc });
    label(ctx, 'u(yᵢ*)', ax.X(u(y0)), ax.Y(y0), { side: 'below', gap: 16, color: uc });
    hits = [
      { x: ax.X((u(y0) + v(y0)) / 2), y: ax.Y(y0 + h / 2), r: 24, name: `rectangle ${i + 1} of ${n}: width ${fmt(u(y0) - v(y0), 2)}, height ${fmt(h, 3)}` },
      { x: ax.X(u(1.5)), y: ax.Y(1.5), r: 18, name: 'the graph of u, the right boundary' }, { x: ax.X(v(1.5)), y: ax.Y(1.5), r: 18, name: 'the graph of v, the left boundary' },
    ];
    headline(ctx, `${n} horizontal ${n === 1 ? 'rectangle' : 'rectangles'}: their areas add to ${fmt(sum, 3)}; the area of the region is ${fmt(AREA, 3)}.`);
    ro.set(`\\kA\\approx\\sum_{i=1}^{${n}}[\\kufn(y_i^{*})-\\kv(y_i^{*})]\\Delta y=${typed('integral', n2(sum))}\\qquad \\kA=\\int_{0.5}^{4}[\\kufn(y)-\\kv(y)]\\,dy=${typed('integral', n2(AREA))}`);
  }
  still(d, draw);
})();

/* Figure 6.10, Example 6.5: the region of Figure 6.7 cut into vertical or horizontal rectangles (midpoints).
   Vertical ones change their top at x = 1; horizontal ones always run from x = √y to x = 2 − y. Axes 0 to 2.5 by 0 to 2.5. */
(function () {
  const d = sim('sim-x-or-y', 540);
  const lc_ = (x) => x * x, rl = (x) => 2 - x, top = (x) => Math.min(x * x, 2 - x), vy = (y) => Math.sqrt(y), uy = (y) => 2 - y;
  const pick = choice(d.controls, { label: '', options: [{ value: 'vertical', label: 'vertical rectangles' }, { value: 'horizontal', label: 'horizontal rectangles' }], value: 'horizontal', aria: 'which way the rectangles run' });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0 });
  const ro = readout(d);
  const BOX = { l: 470, r: 930, t: 96, b: 500 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const lc = F.ref('left-curve'), rc2 = F.ref('right-curve'), ic = C('integral'), rc = C('region');
    const n = ns.v, ax = axes(ctx, BOX, [0, 2.5], [0, 2.5], { xl: 'x', yl: 'y', nx: 5, ny: 5, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : ''), fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    shade(ctx, ax, top, 0, 0, 2, rc, { alpha: 0.14 });
    let sv = 0, sh = 0;
    const wv = 2 / n, wh = 1 / n;
    for (let k = 0; k < n; k++) { const m = (k + 0.5) * wv; sv += top(m) * wv; }
    for (let k = 0; k < n; k++) { const m = (k + 0.5) * wh; sh += (uy(m) - vy(m)) * wh; }
    const kv = pick.a('vertical'), kh = pick.a('horizontal');
    if (kv > 0) for (let k = 0; k < n; k++) { const m = (k + 0.5) * wv; cell(ctx, ax, k * wv, (k + 1) * wv, 0, top(m), ic, kv); }
    if (kh > 0) for (let k = 0; k < n; k++) { const m = (k + 0.5) * wh; cell(ctx, ax, vy(m), uy(m), k * wh, (k + 1) * wh, ic, kh); }
    F.faded(ctx, kv, [0, 0], () => dash(ctx, ax.X(1), ax.Y(2.4), ax.X(1), ax.Y(0)));
    plot(ctx, ax, lc_, lc, { x: [0, Math.sqrt(2.5)] }); plot(ctx, ax, rl, rc2, { x: [0, 2] });
    text(ctx, pick.value === 'vertical' ? '$y=x^{2}$' : '$x=\\kv(y)=\\sqrt{y}$', ax.X(1.48) - 10, ax.Y(2.32), lc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, pick.value === 'vertical' ? '$y=2-x$' : '$x=\\kufn(y)=2-y$', ax.X(1.75) + 14, ax.Y(0.5), rc2, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$\\kR$', ax.X(1), ax.Y(0.38), rc, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    dot(ctx, ax.X(1), ax.Y(1), C('point'), true, 8); label(ctx, '(1, 1)', ax.X(1), ax.Y(1), { side: 'right', gap: 18 });
    hits = [{ x: ax.X(1), y: ax.Y(1), r: 16, name: 'the curves meet at (1, 1)' }, { x: ax.X(1.3), y: ax.Y(1.69), r: 16, name: 'the curve y = x², or x = √y' }, { x: ax.X(1.6), y: ax.Y(0.4), r: 16, name: 'the line y = 2 − x, or x = 2 − y' }];
    if (pick.value === 'vertical') {
      headline(ctx, `Vertical rectangles change their top at x = 1, so the area takes two integrals: ${n} of them add to ${fmt(sv, 3)}.`);
      ro.set(`\\kA=\\int_{0}^{1}x^{2}\\,dx+\\int_{1}^{2}(2-x)\\,dx=\\frac{1}{3}+\\frac{1}{2}=${typed('integral', '\\frac{5}{6}')}\\qquad \\sum=${typed('integral', n2(sv))}`, undefined, { form: 'v' });
    } else {
      headline(ctx, `Horizontal rectangles all run from the parabola to the line, so one integral does: ${n} of them add to ${fmt(sh, 3)}.`);
      ro.set(`\\kA=\\int_{0}^{1}[\\kufn(y)-\\kv(y)]\\,dy=\\int_{0}^{1}[(2-y)-\\sqrt{y}]\\,dy=${typed('integral', '\\frac{5}{6}')}\\qquad \\sum=${typed('integral', n2(sh))}`, undefined, { form: 'h' });
    }
  }
  still(d, draw);
})();
};
