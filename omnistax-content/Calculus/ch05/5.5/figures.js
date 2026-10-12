/* Figures for section 5.5 Substitution. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, line, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const integral = (f, a, b) => { const k = 200, h = (b - a) / k; let s = f(a) + f(b); for (let i = 1; i < k; i += 1) s += (i % 2 ? 4 : 2) * f(a + i * h); return (s * h) / 3; };

/* Sim: Example 5.34's substitution u = 1 + 2x³, du = 6x² dx, so that ∫₀ᵇ x²(1 + 2x³)⁵ dx = (1/6)∫₁^(1+2b³) u⁵ du. Left, the
   region in x, tall and narrow; right, the region in u, low and wide. A thin strip at the top of the x-interval and the strip
   it becomes in u are picked out: they have the same area. Axes x 0 to 1.05 by 0 to 250, u 0.8 to 3.2 by 0 to 45. */
(function () {
  const d = sim('sim-substitution', 500);
  const h = (x) => x * x * (1 + 2 * x ** 3) ** 5, k = (u) => u ** 5 / 6, g = (x) => 1 + 2 * x ** 3;
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.05, max: 1, step: 0.01, value: 1, unit: '', dec: 2, detents: [1] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), b = bs.v, ub = g(b), dx = Math.min(0.05, b);
    const L = axes(ctx, { l: 110, r: 560, t: 90, b: 420 }, [0, 1.05], [0, 250], { xl: 'x', yl: 'y', nx: 0, ny: 5, fy: (v) => fmt(v, 0) });
    [0, 0.5, 1].forEach((v) => text(ctx, fmt(v, 1), L.X(v), L.box.b + 26, PAL.muted, { size: 17, align: 'center' }));
    shade(ctx, L, h, 0, 0, b, ic, { alpha: 0.22 });
    shade(ctx, L, h, 0, b - dx, b, ic, { alpha: 0.5 });
    plot(ctx, L, h, fc, { x: [0, 1.02] });
    text(ctx, '$x^{2}(1+2x^{3})^{5}$', L.X(0.05), L.box.t + 4, fc, { size: 22, weight: 600, align: 'left', base: 'top', tex: true, bg: PAL.panel });
    const R = axes(ctx, { l: 760, r: 1320, t: 90, b: 420 }, [0.8, 3.2], [0, 45], { xl: 'u', yl: 'y', nx: 12, ny: 9, fx: (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : ''), fy: (v) => (v % 10 === 0 ? fmt(v, 0) : '') });
    shade(ctx, R, k, 0, 1, ub, ic, { alpha: 0.22 });
    shade(ctx, R, k, 0, g(b - dx), ub, ic, { alpha: 0.5 });
    plot(ctx, R, k, fc, { x: [0.85, 3.15] });
    text(ctx, '$\\frac{1}{6}u^{5}$', R.X(1.05), R.box.t + 4, fc, { size: 22, weight: 600, align: 'left', base: 'top', tex: true, bg: PAL.panel });
    const A = integral(h, 0, b), B = integral(k, 1, ub), strip = integral(h, b - dx, b);
    headline(ctx, `b = ${fmt(b, 2)}: x runs from 0 to ${fmt(b, 2)} while u runs from 1 to ${fmt(ub, 3)}; both regions have area ${fmt(A, 3)}, and the picked-out strips ${fmt(strip, 3)} each.`);
    ro.set(`\\int_{0}^{${n(b, 2)}}x^{2}(1+2x^{3})^{5}\\,dx=\\frac{1}{6}\\int_{1}^{${n(ub, 3)}}u^{5}\\,du=${typed('integral', n(B, 3))}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
