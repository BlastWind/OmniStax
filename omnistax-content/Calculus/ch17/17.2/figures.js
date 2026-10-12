/* Figures for section 17.2 Nonhomogeneous Linear Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-').replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const signed = (v, dec = 2) => (v < 0 ? '-' : '+') + n(Math.abs(v), dec);
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw) => { ctx.save(); ctx.setLineDash([12, 10]); draw(); ctx.restore(); };

/* Example 17.12: y = c₁e^(−x) + c₂e^(−3x) + x − 4/3 for the slider constants, five other members faint, the particular
   solution y_p = x − 4/3 dashed, the gap at x = 3 bracketed. Axes x 0 to 5 by y −4 to 6 (the sliders' ±3 at x = 0 reach
   −7.3 and 4.7; the box clips). */
(function () {
  const d = sim('sim-nonhomogeneous', 500);
  const c1 = ctl(d.controls, { label: 'c_{1}', cls: '', key: 'c1', min: -3, max: 3, step: 0.1, value: 2, unit: '', dec: 1, aria: 'the constant c₁' });
  const c2 = ctl(d.controls, { label: 'c_{2}', cls: '', key: 'c2', min: -3, max: 3, step: 0.1, value: -1, unit: '', dec: 1, aria: 'the constant c₂' });
  const ro = readout(d);
  const yp = (x) => x - 4 / 3, OTHERS = [[-3, 1], [3, 2], [-1, -3], [1.5, -2.5], [-2.5, 3]];
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), f = (x) => c1.v * Math.exp(-x) + c2.v * Math.exp(-3 * x) + yp(x);
    const ax = axes(ctx, { l: 170, r: 1250, t: 100, b: 430 }, [0, 5], [-4, 6], { xl: 'x', yl: 'y', nx: 5, ny: 5 });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    OTHERS.forEach(([a, b]) => plot(ctx, ax, (x) => a * Math.exp(-x) + b * Math.exp(-3 * x) + yp(x), alpha(fc, 0.25), { w: 2 }));
    dashed(ctx, () => plot(ctx, ax, yp, fc, { w: 3 }));
    plot(ctx, ax, f, fc, { w: 5 });
    const gap = f(3) - yp(3);
    if (Math.abs(ax.Y(f(3)) - ax.Y(yp(3))) > 14) vbracket(ctx, ax.X(3) - 16, ax.Y(yp(3)), ax.Y(f(3)), PAL.ink, '', -1);
    text(ctx, '$\\kyp=x-\\frac{4}{3}$', ax.X(4.6), ax.Y(yp(4.6)) + 34, fc, { size: 22, tex: true, align: 'center', bg: PAL.panel });
    text(ctx, '$\\kyfn$', ax.X(0.12), ax.Y(Math.max(-3.6, Math.min(5.6, f(0.12)))) - 26, fc, { size: 24, tex: true, align: 'left', bg: PAL.panel });
    hits = [{ x: ax.X(3), y: (ax.Y(yp(3)) + ax.Y(f(3))) / 2, r: 18, name: `the gap y − y_p = c₁e^(−3) + c₂e^(−9) = ${fmt(gap, 3)} at x = 3` },
      { x: ax.X(4), y: ax.Y(yp(4)), r: 14, name: 'the particular solution y_p = x − 4/3' }];
    headline(ctx, `At $x=3$ the solution is $${n(gap, 3)}$ from $\\kyp$: the part solving the complementary equation dies away`);
    const k = (v, lead) => (Math.abs(v) === 1 ? (v < 0 ? '-' : lead ? '' : '+') : lead ? n(v, 1) : signed(v, 1));
    ro.set(`\\kyfn=${k(c1.v, true)}e^{-x}${k(c2.v, false)}e^{-3x}+x-\\frac{4}{3}`);
  }
  still(d, draw);
})();

/* The pitfall of undetermined coefficients: y″ + 5y′ + 6y = 3e^(−2x), whose complementary equation is solved by e^(−2x).
   The left side of each guess: L[Ae^(−2x)] = 0, L[Axe^(−2x)] = Ae^(−2x), L[Ax²e^(−2x)] = A(2 + 2x)e^(−2x).
   Axes x 0 to 3 by −1 to 6 (A ≤ 5 at x = 0 reaches 5, and 10 for the third guess, which the box clips). */
(function () {
  const d = sim('sim-undetermined-guess', 500);
  const G = {
    e: { tex: 'Ae^{-2x}', left: (A) => () => 0, say: (A) => `the left side is $0$ for every $A$: $Ae^{-2x}$ solves the complementary equation` },
    xe: { tex: 'Axe^{-2x}', left: (A) => (x) => A * Math.exp(-2 * x), say: (A) => (Math.abs(A - 3) < 1e-9 ? `$A=3$: the left side is $3e^{-2x}$, so $\\kyp=3xe^{-2x}$` : `the left side is $${n(A)}e^{-2x}$; it meets $3e^{-2x}$ only at $A=3$`) },
    x2e: { tex: 'Ax^{2}e^{-2x}', left: (A) => (x) => A * (2 + 2 * x) * Math.exp(-2 * x), say: () => 'the left side $A(2+2x)e^{-2x}$ has an $x$ that $3e^{-2x}$ lacks: no $A$ works' },
  };
  const pick = choice(d.controls, { label: 'guess', key: 'guess', value: 'e', options: [{ value: 'e', label: 'Ae⁻²ˣ' }, { value: 'xe', label: 'Axe⁻²ˣ' }, { value: 'x2e', label: 'Ax²e⁻²ˣ' }],
    onInput: (v) => aS.mark(v === 'xe' ? [{ at: 3 }] : []) });
  const aS = ctl(d.controls, { label: 'A', cls: '', key: 'A', min: -1, max: 5, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the coefficient A of the guess' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const g = G[pick.value], A = aS.v, fc = C('function'), r = (x) => 3 * Math.exp(-2 * x), L = g.left(A);
    const ax = axes(ctx, { l: 170, r: 1250, t: 100, b: 430 }, [0, 3], [-1, 6], { xl: 'x', yl: 'y', nx: 6, ny: 7, fx: (v) => fmt(v, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    dashed(ctx, () => plot(ctx, ax, r, fc, { w: 3 }));
    plot(ctx, ax, L, fc, { w: 5 });
    text(ctx, '$\\krfn(x)=3e^{-2x}$', ax.X(0.45), ax.Y(r(0.45)) - 30, fc, { size: 22, tex: true, align: 'left', bg: PAL.panel });
    text(ctx, '$\\kypdprime+5\\kypprime+6\\kyp$', ax.X(2.2), ax.Y(Math.max(-0.6, Math.min(5.5, L(2.2)))) - 30, fc, { size: 22, tex: true, align: 'center', bg: PAL.panel });
    hits = [{ x: ax.X(1), y: ax.Y(r(1)), r: 14, name: 'r(x) = 3e^(−2x), the right side' }, { x: ax.X(1.6), y: ax.Y(L(1.6)), r: 14, name: 'the left side of the guess' }];
    headline(ctx, `With $\\kyp=${g.tex}$, ${g.say(A)}`);
    const lhs = pick.value === 'e' ? '0' : pick.value === 'xe' ? `${n(A)}e^{-2x}` : `${n(A)}(2+2x)e^{-2x}`;
    ro.set(`\\kypdprime+5\\kypprime+6\\kyp=${lhs},\\quad \\krfn(x)=3e^{-2x}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();
};
