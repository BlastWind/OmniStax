/* Figures for section 7.5 Other Strategies for Integration. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, line, dot, text, headline, register, readout, fmt, drag, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 3) => fmt(v, dec).replace('−', '-');

/* Figure 7.12, with Example 7.37 as a second state: two antiderivatives of one integrand on one graph. Axes fixed per
   state: −2π to 2π by −1 to 1 for sin³x, −8 to 8 by −1 to 3 for 1/√(x² − 4). */
(function () {
  const d = sim('sim-equivalent-antiderivatives', 520);
  const CASES = {
    sin: { xr: [-2 * Math.PI, 2 * Math.PI], yr: [-1, 1], x0: 1,
      hand: (x) => Math.cos(x) ** 3 / 3 - Math.cos(x), cas: (x) => (Math.cos(3 * x) - 9 * Math.cos(x)) / 12,
      th: '\\frac{1}{3}\\cos^{3}x-\\cos x', tc: '\\frac{1}{12}(\\cos(3x)-9\\cos x)' },
    root: { xr: [-8, 8], yr: [-1, 3], x0: 4,
      hand: (x) => (Math.abs(x) >= 2 ? Math.log(Math.abs(Math.sqrt(x * x - 4) / 2 + x / 2)) : NaN),
      cas: (x) => (Math.abs(x) >= 2 ? Math.log(Math.abs(Math.sqrt(x * x - 4) + x)) : NaN),
      th: '\\ln\\left|\\frac{\\sqrt{x^{2}-4}}{2}+\\frac{x}{2}\\right|', tc: '\\ln\\left|\\sqrt{x^{2}-4}+x\\right|' },
  };
  const pick = choice(d.controls, { label: '', aria: 'which pair of antiderivatives', value: 'sin',
    options: [{ value: 'sin', label: '∫ sin³x dx' }, { value: 'root', label: '∫ dx/√(x² − 4)' }],
    onInput: (v) => { x.range(v === 'sin' ? { min: -6, max: 6, step: 0.01, dec: 2 } : { min: 2, max: 8, step: 0.01, dec: 2 }); x.set(CASES[v].x0); } });
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -6, max: 6, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the input x' });
  const P = drag(d, { x, y: (t) => CASES[pick.value].hand(t) });
  const ro = readout(d);
  const BOX = { l: 140, r: 980, t: 100, b: 460 };
  function draw() {
    const { ctx } = begin(d.c);
    const K = CASES[pick.value], xv = x.v, ch = F.ref('antiderivative-hand'), cc = F.ref('antiderivative-cas');
    const fy = (t) => fmt(t, Number.isInteger(t) ? 0 : 1);
    const ax = axes(ctx, BOX, K.xr, K.yr, pick.value === 'sin'
      ? { xl: 'x', yl: 'y', nx: 4, ny: 4, fx: (t) => ['−2π', '−π', '0', 'π', '2π'][Math.round(t / Math.PI) + 2] ?? '', fy }
      : { xl: 'x', yl: 'y', nx: 8, ny: 4, fy });
    plot(ctx, ax, K.cas, cc, { w: 7 });
    plot(ctx, ax, K.hand, ch, { w: 3 });
    const a = K.hand(xv), b = K.cas(xv), gap = b - a;
    if (Math.abs(gap) > 0.02) vbracket(ctx, ax.X(xv) + 16, ax.Y(a), ax.Y(b), PAL.ink, 'ln 2', 1);
    P.draw(ctx, ax, ch);
    dot(ctx, ax.X(xv), ax.Y(b), cc, true, 8);
    [[K.th, ch, 3], [K.tc, cc, 7]].forEach(([t, c, w], i) => { const y = 160 + i * 80; line(ctx, 1010, y, 1056, y, c, w); text(ctx, `$${t}$`, 1068, y, PAL.ink, { size: 22, tex: true }); });
    headline(ctx, pick.value === 'sin' ? `At $x = ${n(xv, 2)}$ both antiderivatives equal $${n(a)}$: the graphs are identical` : `At $x = ${n(xv, 2)}$ the antiderivatives are $${n(a)}$ and $${n(b)}$, a gap of $${n(gap)} = \\ln 2$`);
    ro.set(`${K.tc} - \\left(${K.th}\\right) = ${n(gap)}${pick.value === 'root' ? ' = \\ln 2' : ''}`);
  }
  still(d, draw);
})();
};
