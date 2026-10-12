/* Figures for section 7.4 Partial Fractions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, line, dot, text, label, headline, register, readout, fmt, drag } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Sim: a rational function beside the partial fractions it is the sum of. Axes fixed at −3 to 3 by −6 to 6, which hold
   every pole of the four functions and the branches near them. */
(function () {
  const d = sim('sim-partial-fractions', 560);
  const CASES = {
    intro: { f: (x) => (3 * x) / (x * x - x - 2), tex: '\\frac{3x}{x^{2}-x-2}', poles: [-1, 2],
      terms: [[(x) => 1 / (x + 1), '\\frac{1}{x+1}'], [(x) => 2 / (x - 2), '\\frac{2}{x-2}']] },
    linear: { f: (x) => (3 * x + 2) / (x ** 3 - x * x - 2 * x), tex: '\\frac{3x+2}{x^{3}-x^{2}-2x}', poles: [-1, 0, 2],
      terms: [[(x) => -1 / x, '-\\frac{1}{x}'], [(x) => 4 / 3 / (x - 2), '\\frac{4}{3}\\cdot\\frac{1}{x-2}'], [(x) => -1 / 3 / (x + 1), '-\\frac{1}{3}\\cdot\\frac{1}{x+1}']] },
    repeated: { f: (x) => (x - 2) / ((2 * x - 1) ** 2 * (x - 1)), tex: '\\frac{x-2}{(2x-1)^{2}(x-1)}', poles: [0.5, 1],
      terms: [[(x) => 2 / (2 * x - 1), '\\frac{2}{2x-1}'], [(x) => 3 / (2 * x - 1) ** 2, '\\frac{3}{(2x-1)^{2}}'], [(x) => -1 / (x - 1), '-\\frac{1}{x-1}']] },
    quadratic: { f: (x) => (2 * x - 3) / (x ** 3 + x), tex: '\\frac{2x-3}{x^{3}+x}', poles: [0],
      terms: [[(x) => (3 * x + 2) / (x * x + 1), '\\frac{3x+2}{x^{2}+1}'], [(x) => -3 / x, '-\\frac{3}{x}']] },
  };
  const pick = F.select(d.controls, {
    label: '', aria: 'which rational function', value: 'intro',
    options: [{ value: 'intro', label: '3x/(x² − x − 2)' }, { value: 'linear', label: 'Example 7.29' }, { value: 'repeated', label: 'Example 7.32' }, { value: 'quadratic', label: 'Example 7.33' }],
  });
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 3, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'the input x' });
  const P = drag(d, { x });
  const ro = readout(d);
  const BOX = { l: 120, r: 940, t: 100, b: 500 };
  function draw() {
    const { ctx } = begin(d.c);
    const K = CASES[pick.value], xv = x.v, fc = C('function');
    const cols = K.terms.map((_, i) => F.ref(`term-${i + 1}`));
    const ax = axes(ctx, BOX, [-3, 3], [-6, 6], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    K.terms.forEach(([g], i) => plot(ctx, ax, g, cols[i], { w: 3 }));
    plot(ctx, ax, K.f, fc, { w: 5, poles: K.poles });
    const near = K.poles.some((p) => Math.abs(p - xv) < 1e-6);
    const vals = K.terms.map(([g]) => g(xv)), fv = K.f(xv);
    if (!near) {
      vals.forEach((v, i) => { if (Math.abs(v) <= 6) dot(ctx, ax.X(xv), ax.Y(v), cols[i], true, 7); });
      P.draw(ctx, ax, fc);
      if (Math.abs(fv) <= 6) dot(ctx, ax.X(xv), ax.Y(fv), fc, true, 9);
    }
    line(ctx, ax.X(xv), BOX.t, ax.X(xv), BOX.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    /* the legend: the function and each partial fraction */
    [[K.tex, fc, 5], ...K.terms.map(([, t], i) => [t, cols[i], 3])].forEach(([t, c, w], i) => {
      const y = 140 + i * 80; line(ctx, 980, y, 1030, y, c, w); text(ctx, `$${t}$`, 1046, y, PAL.ink, { size: 24, tex: true });
    });
    const sum = vals.map((v, i) => `${i && v >= 0 ? '+' : ''}${n(v)}`).join('');
    if (near) {
      headline(ctx, `$x = ${n(xv)}$ is a zero of the denominator: the function and one of its fractions are undefined there`);
      ro.set(`x = ${n(xv)}\\ \\text{is a pole}`);
    } else {
      headline(ctx, `At $x = ${n(xv)}$ the fractions add up to the function: $${sum} = ${n(fv)}$`);
      ro.set(`\\htmlClass{kv-function}{${K.tex}} = ${K.terms.map(([, t], i) => (i && !t.startsWith('-') ? '+' : '') + t).join('')} \\qquad x = ${n(xv)}:\\ ${n(fv)} = ${sum}`);
    }
  }
  still(d, draw);
})();

/* Figure 7.11: the region under x²/(x² + 1)² on [0, 1], a faithful copy drawn live. Axes −3 to 3 by 0 to 0.3. */
(function () {
  const d = sim('fig-shell-rational', 420);
  const f = (t) => (t * t) / (t * t + 1) ** 2;
  const BOX = { l: 160, r: 1240, t: 60, b: 360 };
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, BOX, [-3, 3], [0, 0.3], { xl: 'x', yl: 'y', nx: 6, ny: 3, fy: (t) => fmt(t, 1) });
    shade(ctx, ax, f, 0, 0, 1, C('integral'), { alpha: 0.3 });
    plot(ctx, ax, f, C('function'));
    label(ctx, 'f(x) = x²/(x² + 1)²', ax.X(1.9), ax.Y(f(1.9)), { side: 'above', color: C('function'), size: 22, gap: 28 });
  });
})();
};
