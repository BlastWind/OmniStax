/* Figures for section 9.3 The Divergence and Integral Tests. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, line, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
/* unit-width rectangles [x0, x0 + 1] of height h, lightly filled and outlined, clipped to the frame */
const rects = (ctx, ax, list, color) => {
  const { X, Y, box } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 4, box.r - box.l, box.b - box.t + 8); ctx.clip();
  ctx.strokeStyle = ctx.fillStyle = color; ctx.lineWidth = 2; const base = ctx.globalAlpha;
  list.forEach(([x0, h]) => { ctx.beginPath(); ctx.rect(X(x0), Y(h), X(x0 + 1) - X(x0), Y(0) - Y(h)); ctx.globalAlpha = base * 0.22; ctx.fill(); ctx.globalAlpha = base; ctx.stroke(); });
  ctx.restore();
};
/* ∫ from a to b of 1/x^p dx, b may be Infinity */
const intp = (p, a, b) => {
  if (Math.abs(p - 1) < 1e-9) return b === Infinity ? Infinity : Math.log(b / a);
  if (b === Infinity) return p > 1 ? a ** (1 - p) / (p - 1) : Infinity;
  return (b ** (1 - p) - a ** (1 - p)) / (1 - p);
};

/* Figure 9.12 + 9.13 + 9.14: the terms of Σ1/nᵖ as rectangles over or under f(x) = 1/xᵖ, p and k on sliders.
   The book's two cases are p = 1 over the curve (Figure 9.12) and p = 2 under it (Figure 9.13); Figure 9.14
   draws the two placements for a general f. The frame is 0 to max(6, k + 1) by 0 to 1.1 (the x-range follows k). */
(function () {
  const d = sim('sim-integral-test', 560);
  const place = choice(d.controls, { label: '\\text{rectangles}', options: [{ value: 'over', label: 'Over the curve' }, { value: 'under', label: 'Under the curve' }], value: 'over' });
  const P = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 0.5, max: 3, step: 0.01, value: 1, unit: '', dec: 2, detents: [1, 2], specials: [{ at: 1 }] });
  const Kk = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 1, max: 20, step: 1, value: 5, unit: '', dec: 0, detents: [5] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), sc = C('sequence'), p = P.v, k = Kk.v, over = place.value === 'over';
    const f = (x) => 1 / x ** p, xmax = Math.max(6, k + 1);
    const ax = axes(ctx, { l: 300, r: 1100, t: 125, b: 450 }, [0, xmax + 0.5], [0, 1.15], { xl: 'x', yl: 'y', nx: 6, ny: 5, nice: true });
    const b = over ? k + 1 : k;
    shade(ctx, ax, f, 0, 1, b, ic, { alpha: 0.28 });
    rects(ctx, ax, Array.from({ length: k }, (_, i) => [over ? i + 1 : i, f(i + 1)]), sc);
    plot(ctx, ax, f, fc, { x: [over ? 0.85 : 0.85, xmax + 0.5] });
    text(ctx, `$\\kf(x)=1/x^{${n(p, 2)}}$`, ax.X(xmax + 0.5) - 6, ax.Y(f(xmax + 0.5)) - 30, fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    let s = 0; for (let j = 1; j <= k; j += 1) s += f(j);
    const I = intp(p, 1, b), Iinf = intp(p, 1, Infinity), fin = Iinf !== Infinity;
    const tail = fin ? `$\\int_{1}^{\\infty}\\kf(x)\\,dx=\\frac{1}{p-1}=${n(Iinf, 3)}$ is finite, so the series converges.` : '$\\int_{1}^{\\infty}\\kf(x)\\,dx$ is infinite, so the series diverges.';
    headline(ctx, over ? `p = ${fmt(p, 2)}: $\\kS_{${k}}=${n(s, 4)}\\gt\\int_{1}^{${k + 1}}\\kf(x)\\,dx=${n(I, 4)},$ and ${tail}`
      : `p = ${fmt(p, 2)}: $\\kS_{${k}}=${n(s, 4)}\\lt 1+\\int_{1}^{${k}}\\kf(x)\\,dx=${n(1 + I, 4)},$ and ${tail}`);
    ro.set(over ? `\\kS_{${k}}=\\sum_{n=1}^{${k}}\\frac{1}{n^{${n(p, 2)}}}=${typed('series', n(s, 4))}\\ \\gt\\ \\int_{1}^{${k + 1}}\\frac{dx}{x^{${n(p, 2)}}}=${typed('integral', n(I, 4))}`
      : `\\kS_{${k}}=\\sum_{n=1}^{${k}}\\frac{1}{n^{${n(p, 2)}}}=${typed('series', n(s, 4))}\\ \\lt\\ 1+\\int_{1}^{${k}}\\frac{dx}{x^{${n(p, 2)}}}=${n(1 + I, 4)}`, undefined, { form: place.value });
  }
  still(d, draw);
})();

/* Figure 9.15: the remainder estimate on Example 9.16's f(x) = 1/x³, N on a slider. The tail terms a_{N+1},
   a_{N+2}, … are rectangles under the curve from N on (a) or over it from N + 1 on (b). The frame follows N:
   N − 1 to N + 7 across, 0 to 1.15 f(N) up (a zoom: the tail shrinks like 1/N³). */
(function () {
  const d = sim('sim-remainder-estimate', 540);
  const place = choice(d.controls, { label: '\\text{panel}', options: [{ value: 'a', label: '(a) Under the curve' }, { value: 'b', label: '(b) Over the curve' }], value: 'a' });
  const Nn = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 12, step: 1, value: 3, unit: '', dec: 0 });
  const ro = readout(d);
  const ZETA3 = 1.2020569031595942, f = (x) => 1 / x ** 3;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), ec = C('error'), N = Nn.v, under = place.value === 'a';
    const ax = axes(ctx, { l: 300, r: 1100, t: 100, b: 430 }, [N - 1, N + 7], [0, 1.15 * f(N)], { xl: 'x', yl: 'y', nx: 8, ny: 4, nice: true });
    const from = under ? N : N + 1;
    shade(ctx, ax, f, 0, from, N + 7, ic, { alpha: 0.28 });
    rects(ctx, ax, Array.from({ length: 10 }, (_, i) => [under ? N + i : N + 1 + i, f(N + 1 + i)]), ec);
    plot(ctx, ax, f, fc, { x: [Math.max(0.6, N - 1), N + 7] });
    line(ctx, ax.X(N), ax.box.b, ax.X(N), ax.Y(f(N)), alpha(PAL.ink, 0.45), 2, [4, 8]);
    text(ctx, '$\\kf(x)=1/x^{3}$', ax.X(N) + 12, ax.Y(f(N)) - 18, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    let s = 0; for (let j = 1; j <= N; j += 1) s += f(j);
    const R = ZETA3 - s, lo = 1 / (2 * (N + 1) ** 2), hi = 1 / (2 * N * N);
    headline(ctx, under ? `N = ${N}: the tail's rectangles fit under the curve from ${N}, so $\\kR_{${N}}=${n(R, 4)}\\lt\\int_{${N}}^{\\infty}\\kf(x)\\,dx=${n(hi, 4)}.$`
      : `N = ${N}: the tail's rectangles cover the curve from ${N + 1}, so $\\kR_{${N}}=${n(R, 4)}\\gt\\int_{${N + 1}}^{\\infty}\\kf(x)\\,dx=${n(lo, 4)}.$`);
    ro.set(`\\int_{${N + 1}}^{\\infty}\\frac{dx}{x^{3}}=\\frac{1}{2(${N + 1})^{2}}=${n(lo, 4)}\\ \\lt\\ \\kR_{${N}}=${typed('error', n(R, 4))}\\ \\lt\\ \\int_{${N}}^{\\infty}\\frac{dx}{x^{3}}=\\frac{1}{2(${N})^{2}}=${n(hi, 4)}`);
  }
  still(d, draw);
})();
};
