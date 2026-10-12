/* Figures for section 17.4 Series Solutions of Differential Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });

/* Example 17.26: the Bessel series y = Σ (−1)ᵏx²ᵏ/(2²ᵏ(k!)²) with a₀ = 1, summed to 60 terms for the solution (exact to
   double precision on the window), beside its partial sum through x^(2K). Axes x −12.5 to 12.5 by y −0.6 to 1.2, the
   book's window. */
(function () {
  const d = sim('sim-bessel', 500);
  const kS = ctl(d.controls, { label: 'K', cls: '', key: 'K', min: 0, max: 20, step: 1, value: 4, unit: '', dec: 0, aria: 'the number K of the last term', detents: [4] });
  const ro = readout(d);
  const S = (K) => (x) => { let s = 0, t = 1; for (let k = 0; k <= K; k++) { s += t; t *= -(x * x) / (4 * (k + 1) * (k + 1)); } return s; };
  const J = S(60);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const K = kS.v, P = S(K), fc = C('function'), sc = C('series');
    const ax = axes(ctx, { l: 170, r: 1250, t: 100, b: 420 }, [-12.5, 12.5], [-0.6, 1.2], { xl: 'x', yl: 'y', nx: 10, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, ax, J, fc, { w: 5 });
    plot(ctx, ax, P, sc, { w: 4 });
    let R = 0; const h = 0.01;
    while (R + h <= 12.5 && Math.abs(P(R + h) - J(R + h)) < 0.01) R += h;
    text(ctx, '$\\kyfn$', ax.X(-12.2), ax.Y(1.05), fc, { size: 24, tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(0), y: ax.Y(1), r: 14, name: 'y(0) = a₀ = 1' }, { x: ax.X(2.405), y: ax.Y(0), r: 14, name: 'the first zero of the solution, near x = 2.405' }];
    headline(ctx, `Through the term in $x^{${2 * K}}$ the partial sum stays within $0.01$ of the solution for $|x|\\le ${fmt(R, 2)}$`);
    const term = (k) => (k === 0 ? '1' : `${k % 2 ? '-' : '+'}\\frac{x^{${2 * k}}}{${k <= 3 ? 4 ** k * fact(k) ** 2 : `2^{${2 * k}}(${k}!)^{2}`}}`);
    const shown = K <= 3 ? Array.from({ length: K + 1 }, (_, k) => term(k)).join('') : `${term(0)}${term(1)}${term(2)}+\\cdots${term(K)}`;
    ro.set(`\\kyfn\\approx\\sum_{k=0}^{${K}}\\frac{(-1)^{k}}{2^{2k}(k!)^{2}}x^{2k}=${shown}`, undefined, { form: K <= 3 ? K : 'long' });
  }
  const fact = (n) => { let p = 1; for (let j = 2; j <= n; j++) p *= j; return p; };
  still(d, draw);
})();
};
