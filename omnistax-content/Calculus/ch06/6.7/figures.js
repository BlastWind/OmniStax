/* Figures for section 6.7 Integrals, Exponential Functions, and Logarithms. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.7'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, dot, line, text, headline, register, readout, fmt, drag } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2, c = alpha(PAL.ink, 0.4)) => line(ctx, x1, y1, x2, y2, c, 2.5, [10, 10]);

/* Figures 6.75 + 6.76 + 6.77: at the left the area under y = 1/t from 1 to x, signed (below x = 1 it counts negative, hatched);
   at the right the point (x, ln x) on the graph of ln. At x = e the area is 1. */
(function () {
  const d = sim('sim-ln-area', 500);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.2, max: 4, step: 0.005, value: 2.5, unit: '', dec: 3, specials: [{ at: 1, label: '1' }, { at: Math.E, label: 'e' }] });
  const ro = readout(d);
  const P = drag(d, { x: xs, y: Math.log });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), x = xs.v, L = Math.log(x), at = (v) => Math.abs(x - v) < 0.004;
    const A = axes(ctx, { l: 90, r: 640, t: 80, b: 440 }, [0, 4.4], [0, 5.2], { xl: 't', yl: 'y', nx: 4, ny: 5 });
    const lo = Math.min(1, x), hi = Math.max(1, x);
    shade(ctx, A, (t) => 1 / t, 0, lo, hi, ic, { alpha: x >= 1 ? 0.35 : 0.18 });
    if (x < 1) {
      ctx.save(); ctx.beginPath(); ctx.moveTo(A.X(lo), A.Y(0)); for (let k = 0; k <= 60; k++) { const t = lo + ((hi - lo) * k) / 60; ctx.lineTo(A.X(t), A.Y(1 / t)); } ctx.lineTo(A.X(hi), A.Y(0)); ctx.closePath(); ctx.clip();
      ctx.strokeStyle = alpha(ic, 0.7); ctx.lineWidth = 2; ctx.beginPath(); for (let s = A.X(lo) - 400; s < A.X(hi) + 10; s += 14) { ctx.moveTo(s, A.Y(0)); ctx.lineTo(s + 400, A.Y(0) - 400); } ctx.stroke(); ctx.restore();
    }
    plot(ctx, A, (t) => 1 / t, fc, { x: [0.19, 4.3] });
    text(ctx, 'y = 1/t', A.X(3.2), A.Y(1 / 3.2) - 26, fc, { size: 20, weight: 600, align: 'center' });
    dash(ctx, A.X(1), A.Y(0), A.X(1), A.Y(1)); dash(ctx, A.X(x), A.Y(0), A.X(x), A.Y(1 / x));
    text(ctx, at(Math.E) ? 'e' : 'x', A.X(x), A.Y(0) + 24, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, at(Math.E) ? 'area = 1' : x >= 1 ? `area = ${fmt(L, 3)}` : `area = ${fmt(-L, 3)}, counted negative`, x >= 1 ? (A.X(lo) + A.X(hi)) / 2 : A.X(hi) + 10, x >= 1 ? A.Y(0.18) : A.Y(1.6), ic, { size: 18, weight: 600, align: x >= 1 ? 'center' : 'left', bg: PAL.panel });
    /* the graph of ln */
    const B = axes(ctx, { l: 760, r: 1300, t: 80, b: 440 }, [0, 4.4], [-2, 1.8], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    plot(ctx, B, Math.log, fc, { x: [0.14, 4.3] });
    plot(ctx, B, Math.log, fc, { x: [Math.min(1, x), Math.max(1, x)], w: 6 });
    text(ctx, 'y = ln x', B.X(3.3), B.Y(Math.log(3.3)) - 26, fc, { size: 20, weight: 600, align: 'center' });
    dash(ctx, B.X(x), B.Y(0), B.X(x), B.Y(L));
    P.draw(ctx, B, fc);
    dot(ctx, B.X(x), B.Y(L), fc, true, 8);
    headline(ctx, at(1) ? 'At x = 1 there is no area: ln 1 = 0.' : at(Math.E) ? 'At x = e the area under 1/t from 1 is exactly 1: ln e = 1.' : x > 1 ? `x = ${fmt(x, 3)}: the area from 1 to x is ln x = ${fmt(L, 3)}.` : `x = ${fmt(x, 3)} < 1: the area from x to 1 is ${fmt(-L, 3)}, so ln x = ${fmt(L, 3)}.`);
    ro.set(`\\ln ${at(Math.E) ? 'e' : n2(x, 3)}=\\int_{1}^{${at(Math.E) ? 'e' : n2(x, 3)}}\\frac{1}{t}\\,dt=${typed('integral', n2(L))}`);
  }
  still(d, draw);
})();

/* Figure 6.78, a faithful copy: ln x and exp x, mirror images in the line y = x. */
(function () {
  const d = sim('fig-ln-exp', 460);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 480, r: 900, t: 25, b: 445 }, [-3.2, 4.2], [-3.2, 4.2], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    line(ctx, ax.X(-3.2), ax.Y(-3.2), ax.X(4.2), ax.Y(4.2), C('line'), 2.5, [10, 8]);
    const cl = F.ref('ln-curve'), ce = F.ref('exp-curve');
    plot(ctx, ax, Math.log, cl, { x: [0.04, 4.2] }); plot(ctx, ax, Math.exp, ce, { x: [-3.2, 1.43] });
    text(ctx, 'y = ln x', ax.X(4.1), ax.Y(Math.log(4)) + 40, cl, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'y = exp x', ax.X(1.3) - 12, ax.Y(Math.exp(1.3)), ce, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'y = x', ax.X(3.6) + 8, ax.Y(3.6) + 22, C('line'), { size: 18, weight: 600, align: 'left' });
  }
  still(d, draw);
})();
};
