/* Figures for section 7.2 Trigonometric Integrals. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, line, text, headline, register, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Sim: a product of sines and cosines of ax and bx as the two half waves of (a − b)x and (a + b)x that it equals.
   Axes fixed at −π to π by −1.25 to 1.25, the reach of the product and of either half wave. */
(function () {
  const d = sim('sim-product-to-sum', 540);
  const kind = choice(d.controls, {
    label: '', aria: 'which product', value: 'sc',
    options: [{ value: 'ss', label: 'sin · sin' }, { value: 'sc', label: 'sin · cos' }, { value: 'cc', label: 'cos · cos' }],
  });
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 1, max: 8, step: 1, value: 5, unit: '', dec: 0, aria: 'the factor a of x' });
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 1, max: 8, step: 1, value: 3, unit: '', dec: 0, aria: 'the factor b of x', specials: [{ at: () => a.v }] });
  const ro = readout(d);
  const BOX = { l: 140, r: 1010, t: 110, b: 470 };
  const NAME = { s: '\\sin', c: '\\cos' };
  /* the product and its two halves: [first trig, second trig, half-wave trig, sign of the (a + b) half] */
  const FORM = { ss: ['s', 's', 'c', -1], sc: ['s', 'c', 's', 1], cc: ['c', 'c', 'c', 1] };
  const tr = (t) => (t === 's' ? Math.sin : Math.cos);
  const kx = (k) => (k === 1 ? 'x' : k === -1 ? '-x' : `${k}x`);
  function draw() {
    const { ctx } = begin(d.c);
    const [p, q, h, sg0] = FORM[kind.value], av = a.v, bv = b.v, sk = av + bv;
    /* the (a − b) half with a positive frequency: cos is even, and sin(−kx) = −sin(kx) */
    const dk = Math.abs(av - bv), ds = h === 's' && av < bv ? -1 : 1, sg = sg0;
    const prod = (x) => tr(p)(av * x) * tr(q)(bv * x);
    const diff = (x) => ds * 0.5 * tr(h)(dk * x), sum = (x) => sg * 0.5 * tr(h)(sk * x);
    const fc = C('function'), wd = F.ref('wave-diff'), ws = F.ref('wave-sum');
    const ax = axes(ctx, BOX, [-Math.PI, Math.PI], [-1.5, 1.5], { xl: 'x', yl: 'y', nx: 4, ny: 6, fx: (t) => ['−π', '−π/2', '0', 'π/2', 'π'][Math.round(t / (Math.PI / 2)) + 2] ?? '', fy: (t) => F.fmt(t, 1) });
    plot(ctx, ax, diff, wd, { w: 3 });
    plot(ctx, ax, sum, ws, { w: 3 });
    plot(ctx, ax, prod, fc, { w: 5 });
    const lhs = `${NAME[p]}(${kx(av)})${NAME[q]}(${kx(bv)})`;
    const half = (k, s) => (h === 's' && k === 0 ? '0' : h === 'c' && k === 0 ? `${s < 0 ? '-' : ''}\\tfrac{1}{2}` : `${s < 0 ? '-' : ''}\\tfrac{1}{2}${NAME[h]}(${kx(k)})`);
    const rhs = `${half(dk, ds)} ${sg < 0 ? '' : '+'} ${half(sk, sg)}`.replace('+ -', '- ').replace('0 + ', '').replace('0 - ', '-');
    headline(ctx, `$${lhs} = ${rhs}$`);
    /* a legend of the three curves in the top band */
    const items = [[`$${lhs}$`, fc, 5], [`$${half(dk, ds)}$`, wd, 3], [`$${half(sk, sg)}$`, ws, 3]];
    items.forEach(([s, c, w], i) => { const y = BOX.t + 40 + i * 56; line(ctx, 1060, y, 1110, y, c, w); text(ctx, s, 1124, y, PAL.ink, { size: 22, tex: true }); });
    /* each half integrated: (1/2)∫cos(kx) dx = sin(kx)/(2k), (1/2)∫sin(kx) dx = −cos(kx)/(2k), a constant term ∫(1/2) dx = x/2 */
    const prim = (k, s) => {
      if (k === 0) return h === 'c' ? `${s < 0 ? '-' : ''}\\tfrac{x}{2}` : '';
      const c = 2 * k, neg = (h === 's') !== (s < 0) !== (c < 0);
      return `${neg ? '-' : '+'}\\tfrac{1}{${Math.abs(c)}}${h === 's' ? '\\cos' : '\\sin'}(${kx(k)})`;
    };
    const antider = `${prim(dk, ds)} ${prim(sk, sg)}`.trim().replace(/^\+/, '');
    ro.set(`${typed('integral', `\\int ${lhs}\\,dx`)} = ${antider} + C`);
  }
  still(d, draw);
})();
};
