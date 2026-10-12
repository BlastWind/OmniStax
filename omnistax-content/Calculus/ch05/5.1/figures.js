/* Figures for section 5.1 Approximating Areas. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
/* the n cells of a rule on [a, b]: each cell's ends, its sample point and its height */
const cells = (f, a, b, k, rule) => {
  const dx = (b - a) / k;
  return Array.from({ length: k }, (_, i) => {
    const x0 = a + i * dx, x1 = x0 + dx;
    let xs = rule === 'left' ? x0 : rule === 'right' ? x1 : (x0 + x1) / 2;
    if (rule === 'upper' || rule === 'lower') {
      let best = x0, bv = f(x0);
      for (let j = 1; j <= 48; j += 1) { const x = x0 + (dx * j) / 48, v = f(x); if (rule === 'upper' ? v > bv : v < bv) { bv = v; best = x; } }
      xs = best;
    }
    return { x0, x1, xs, h: f(xs) };
  });
};
/* rectangles of the given heights on the cells, filled lightly and outlined, in color */
const bars = (ctx, ax, cs, hs, color) => {
  const { X, Y, box } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 6, box.r - box.l, box.b - box.t + 12); ctx.clip();
  ctx.fillStyle = ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.lineJoin = 'round';
  const base = ctx.globalAlpha;
  cs.forEach((c, i) => {
    const h = hs[i]; if (!Number.isFinite(h)) return;
    ctx.beginPath(); ctx.rect(X(c.x0), Math.min(Y(0), Y(h)), X(c.x1) - X(c.x0), Math.abs(Y(h) - Y(0)));
    ctx.globalAlpha = base * 0.24; ctx.fill(); ctx.globalAlpha = base; ctx.stroke();
  });
  ctx.restore();
};
const RULE = { left: 'left endpoints', right: 'right endpoints', mid: 'midpoints', upper: 'the highest point of each subinterval', lower: 'the lowest point of each subinterval' };

/* Figure 5.2: the region under a curve on [a, b]. The book prints no formula; the stand-in is
   f(x) = 0.15(x − 3)³ − 0.9(x − 3) + 3 on [1, 5], rising, then falling, concave down then up past x = 3,
   and rising again shortly before b, as the sketch is. Axes 0 to 6 by 0 to 5. */
const BUMP = (x) => 0.15 * (x - 3) ** 3 - 0.9 * (x - 3) + 3;
(function () {
  const d = sim('fig-area-region', 470);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 400 }, [0, 6], [0, 5], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    shade(ctx, ax, BUMP, 0, 1, 5, ic, { alpha: 0.3 });
    [1, 5].forEach((x) => line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(BUMP(x)), alpha(PAL.ink, 0.45), 2.5));
    plot(ctx, ax, BUMP, fc, { x: [0.25, 5.75] });
    text(ctx, 'a', ax.X(1), 430, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'b', ax.X(5), 430, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '$\\kA$', ax.X(3), ax.Y(1.4), ic, { size: 28, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kf(x)$', ax.X(5.75) + 14, ax.Y(BUMP(5.75)), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.3 + 5.4 + 5.5: f(x) = x²/2 on [0, 3] (Figure 5.5's curve; the sketches 5.3 and 5.4 draw a parabola
   with its vertex at the origin and no formula), rectangles on a regular partition, heights from the left
   or the right endpoints. Axes 0 to 3.5 by 0 to 5, fixed from n's whole range. */
(function () {
  const d = sim('sim-endpoint-rules', 520);
  const f = (x) => (x * x) / 2, A = 0, B = 3;
  const rule = choice(d.controls, { label: '\\text{heights from}', options: [{ value: 'left', label: 'Left endpoints' }, { value: 'right', label: 'Right endpoints' }], value: 'left' });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 6, unit: '', dec: 0, detents: [6] });
  const ro = readout(d);
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), k = ns.v, r = rule.value;
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 440 }, [0, 3.5], [0, 5], { xl: 'x', yl: 'y', nx: 7, ny: 5, fx: (v) => (v === 0 || v === 3 ? '' : fmt(v, 1).replace(/\.0$/, '')) });
    const cs = cells(f, A, B, k, r), hs = rule.mix((v) => cells(f, A, B, k, v).map((c) => c.h));
    shade(ctx, ax, f, 0, A, B, ic, { alpha: 0.1 });
    bars(ctx, ax, cs, hs, ic);
    plot(ctx, ax, f, fc, { x: [0, 3.15] });
    hits.length = 0;
    cs.forEach((c, i) => { const xs = rule.mix((v) => (v === 'left' ? c.x0 : c.x1)); if (k <= 30) dot(ctx, ax.X(xs), ax.Y(hs[i]), fc, true, 6); hits.push({ x: ax.X(c.x0), y: ax.Y(0), r: 14, name: i ? `the left endpoint of subinterval ${i + 1}` : 'x₀ = a' }); });
    hits.push({ x: ax.X(B), y: ax.Y(0), r: 14, name: `x${k} = b` });
    text(ctx, '$x_0=a$', ax.X(0), 466, PAL.ink, { size: 20, align: 'center', tex: true });
    text(ctx, `$x_{${k}}=b$`, ax.X(3), 466, PAL.ink, { size: 20, align: 'center', tex: true });
    text(ctx, '$\\kf(x)=\\frac{x^2}{2}$', ax.X(3.15) + 12, ax.Y(f(3.15)) + 20, fc, { size: 24, weight: 600, align: 'left', tex: true });
    const sum = cells(f, A, B, k, r).reduce((s, c) => s + c.h * (B - A) / k, 0);
    const L = r === 'left' ? 'L' : 'R';
    headline(ctx, `${k} ${k === 1 ? 'rectangle' : 'rectangles'} of width ${fmt(3 / k, 3)}, each as tall as the curve at its ${r} endpoint: their areas sum to ${fmt(sum, 4)}.`);
    const term = r === 'left' ? '\\kf(x_{i-1})' : '\\kf(x_{i})';
    ro.set(`\\k${L}_{${k}}=\\sum_{i=1}^{${k}}${term}\\,\\Delta x=${typed('integral', n(sum, 4))}`, undefined, { form: r });
  }
  still(d, draw);
})();

/* Figure 5.6 + 5.7 (Example 5.4): f(x) = x² on [0, 2] with n = 4, left or right endpoints. Axes 0 to 2.5 by 0 to 4.5. */
(function () {
  const d = sim('fig-example-endpoints', 470);
  const f = (x) => x * x;
  const rule = choice(d.controls, { label: '\\text{heights from}', options: [{ value: 'left', label: 'Left endpoints' }, { value: 'right', label: 'Right endpoints' }], value: 'left' });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), r = rule.value;
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 400 }, [0, 2.5], [0, 4.5], { xl: 'x', yl: 'y', nx: 5, ny: 9, fx: (v) => fmt(v, 1).replace(/\.0$/, ''), fy: (v) => fmt(v, 1).replace(/\.0$/, '') });
    const cs = cells(f, 0, 2, 4, r), hs = rule.mix((v) => cells(f, 0, 2, 4, v).map((c) => c.h));
    bars(ctx, ax, cs, hs, ic);
    plot(ctx, ax, f, fc, { x: [0, 2.12] });
    hs.forEach((h, i) => text(ctx, fmt(h, 2), ax.X(cs[i].x0 + 0.25), ax.Y(h) - 18, ic, { size: 18, weight: 600, align: 'center', bg: PAL.panel }));
    text(ctx, '$\\kf(x)=x^2$', ax.X(2.12) + 12, ax.Y(4.2), fc, { size: 24, weight: 600, align: 'left', tex: true });
    const sum = cells(f, 0, 2, 4, r).reduce((s, c) => s + c.h * 0.5, 0);
    ro.set(r === 'left' ? `\\kL_{4}=0(0.5)+0.25(0.5)+1(0.5)+2.25(0.5)=${typed('integral', n(sum, 2))}` : `\\kR_{4}=0.25(0.5)+1(0.5)+2.25(0.5)+4(0.5)=${typed('integral', n(sum, 2))}`, undefined, { form: r });
  }
  still(d, draw);
})();

/* Figure 5.8 + 5.9 + 5.10 + 5.11 + 5.12 + 5.13: f(x) = (x − 1)³ + 4 on [0, 2], left or right endpoints, n with
   soft detents at the book's 4, 8 and 32. Axes 0 to 2.5 by 0 to 6. */
(function () {
  const d = sim('sim-converging-sums', 500);
  const f = (x) => (x - 1) ** 3 + 4;
  const rule = choice(d.controls, { label: '\\text{heights from}', options: [{ value: 'left', label: 'Left endpoints' }, { value: 'right', label: 'Right endpoints' }], value: 'left' });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 64, step: 1, value: 4, unit: '', dec: 0, detents: [4, 8, 32] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), k = ns.v, r = rule.value;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 440 }, [0, 2.5], [0, 6], { xl: 'x', yl: 'y', nx: 5, ny: 6, fx: (v) => fmt(v, 1).replace(/\.0$/, '') });
    const cs = cells(f, 0, 2, k, r), hs = rule.mix((v) => cells(f, 0, 2, k, v).map((c) => c.h));
    shade(ctx, ax, f, 0, 0, 2, ic, { alpha: 0.1 });
    bars(ctx, ax, cs, hs, ic);
    plot(ctx, ax, f, fc, { x: [0, 2.2] });
    text(ctx, '$\\kf(x)=(x-1)^3+4$', ax.X(2.2) + 12, ax.Y(f(2.2)) + 34, fc, { size: 24, weight: 600, align: 'left', tex: true });
    const sum = cs.reduce((s, c) => s + c.h * (2 / k), 0), L = r === 'left' ? 'L' : 'R';
    const gap = Math.abs(8 - sum);
    headline(ctx, `${k} ${k === 1 ? 'rectangle' : 'rectangles'}: the ${r}-endpoint sum is ${fmt(sum, 4)}, ${fmt(gap, 4)} ${sum < 8 ? 'below' : 'above'} 8.`);
    ro.set(`\\k${L}_{${k}}=\\sum_{i=1}^{${k}}\\kf(x_{${r === 'left' ? 'i-1' : 'i'}})\\,\\Delta x=${typed('integral', n(sum, 4))}`, undefined, { form: r });
  }
  still(d, draw);
})();

/* Figure 5.14 (Example 5.5), a faithful copy: f(x) = 10 − x² on the book's 0 to 2 window, the right-endpoint
   rectangles of n = 4 on [1, 2], a lower sum. Axes 0 to 2 by 0 to 10. */
(function () {
  const d = sim('fig-lower-sum', 470);
  const f = (x) => 10 - x * x;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 400 }, [0, 2], [0, 10], { xl: 'x', yl: 'y', nx: 4, ny: 5, fx: (v) => fmt(v, 1).replace(/\.0$/, '') });
    const cs = cells(f, 1, 2, 4, 'right');
    bars(ctx, ax, cs, cs.map((c) => c.h), ic);
    plot(ctx, ax, f, fc);
    ['x_0=a', 'x_1', 'x_2', 'x_3', 'x_4=b'].forEach((s, i) => text(ctx, `$${s}$`, ax.X(1 + i / 4), 452, PAL.ink, { size: 18, align: 'center', tex: true }));
    text(ctx, '$\\kf(x)=10-x^2$', ax.X(0.2), ax.Y(10.9), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 5.15 (Example 5.6), a faithful copy: y = sin x on 0 to π, the left-endpoint rectangles of n = 6 on
   [0, π/2], a lower sum. Axes 0 to π by 0 to 1.2. */
(function () {
  const d = sim('fig-sine-lower-sum', 440);
  const f = Math.sin, P = Math.PI;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 370 }, [0, P], [0, 1.2], { xl: 'x', yl: 'y', nx: 4, ny: 6, fx: (v) => ['0', 'π/4', 'π/2', '3π/4', 'π'][Math.round((v / P) * 4)], fy: (v) => fmt(v, 1) });
    const cs = cells(f, 0, P / 2, 6, 'left');
    bars(ctx, ax, cs, cs.map((c) => c.h), ic);
    plot(ctx, ax, f, fc);
    text(ctx, '$y=\\sin x$', ax.X(2.6), ax.Y(0.75), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Sim: the Riemann sum of Figure 5.2's curve on [1, 5] with its sample points chosen by a rule, n on a slider.
   The area is 12 exactly: the cubic and linear parts are odd about x = 3. Axes 0 to 6 by 0 to 5. */
(function () {
  const d = sim('sim-riemann-sum', 520);
  const f = BUMP, A = 1, B = 5, AREA = 12;
  const rule = choice(d.controls, { label: '\\text{sample point}', options: [{ value: 'left', label: 'Left' }, { value: 'mid', label: 'Middle' }, { value: 'right', label: 'Right' }, { value: 'upper', label: 'Highest' }, { value: 'lower', label: 'Lowest' }], value: 'upper' });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 50, step: 1, value: 4, unit: '', dec: 0 });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), k = ns.v, r = rule.value;
    const ax = axes(ctx, { l: 330, r: 1070, t: 90, b: 440 }, [0, 6], [0, 5], { xl: 'x', yl: 'y', nx: 6, ny: 5 });
    const cs = cells(f, A, B, k, r), hs = rule.mix((v) => cells(f, A, B, k, v).map((c) => c.h)), xs = rule.mix((v) => cells(f, A, B, k, v).map((c) => c.xs));
    shade(ctx, ax, f, 0, A, B, ic, { alpha: 0.1 });
    bars(ctx, ax, cs, hs, ic);
    plot(ctx, ax, f, fc, { x: [0.25, 5.75] });
    if (k <= 25) xs.forEach((x, i) => dot(ctx, ax.X(x), ax.Y(hs[i]), fc, true, 6));
    text(ctx, '$\\kf(x)$', ax.X(5.75) + 14, ax.Y(f(5.75)), fc, { size: 24, weight: 600, align: 'left', tex: true });
    const sum = cs.reduce((s, c) => s + c.h * ((B - A) / k), 0), off = sum - AREA;
    headline(ctx, `${k} ${k === 1 ? 'rectangle' : 'rectangles'}, heights at ${RULE[r]}: the Riemann sum is ${fmt(sum, 3)}, ${Math.abs(off) < 0.0005 ? 'the area itself' : `${fmt(Math.abs(off), 3)} ${off > 0 ? 'above' : 'below'} the area 12`}.`);
    ro.set(`\\sum_{i=1}^{${k}}\\kf(x_i^{*})\\,\\Delta x=${typed('integral', n(sum, 3))}\\qquad \\kA=${typed('integral', n(AREA, 0))}`);
  }
  still(d, draw);
})();
};
