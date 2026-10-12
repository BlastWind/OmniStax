/* Figures for section 10.1 Power Series and Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, line, dot, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const f2 = (v, d = 2) => fmt(v, d).replace('−', '-');

/* Figure 10.2: the three ways a power series converges, as the series of Example 10.1 and the geometric series.
   term(n, x) is the nth term; sum(x) the series' sum where it converges; lo, hi the interval of convergence and its ends
   ('[' closed, '(' open; Infinity for the whole line); xr the probe's range and the number line's; yr the partial sums' box. */
const fact = (n) => { let p = 1; for (let k = 2; k <= n; k++) p *= k; return p; };
const SERIES = {
  shift: { label: '(x − 2)ⁿ/((n + 1)3ⁿ)', tex: '\\sum_{n=0}^{\\infty}\\frac{(x-2)^{n}}{(n+1)3^{n}}', a: 2, lo: -1, hi: 5, ends: '[)', xr: [-3, 7], yr: [-2, 6], x0: 4,
    term: (n, x) => Math.pow((x - 2) / 3, n) / (n + 1),
    sum: (x) => { const t = (x - 2) / 3; return t === 0 ? 1 : -Math.log(1 - t) / t; },
    rho: (x) => [`\\rho=\\frac{|x-2|}{3}=${f2(Math.abs(x - 2) / 3)}`, Math.abs(x - 2) / 3],
    end: (x) => (Math.abs(x + 1) < 1e-9 ? 'At $x=-1$ the series is the alternating harmonic series, which converges.' : Math.abs(x - 5) < 1e-9 ? 'At $x=5$ the series is the harmonic series, which diverges.' : null) },
  exp: { label: 'xⁿ/n!', tex: '\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}', a: 0, lo: -Infinity, hi: Infinity, ends: '()', xr: [-4, 4], yr: [-20, 60], x0: 2,
    term: (n, x) => Math.pow(x, n) / fact(n), sum: Math.exp,
    rho: () => ['\\rho=\\lim_{n\\to\\infty}\\frac{|x|}{n+1}=0', 0], end: () => null },
  factorial: { label: 'n! xⁿ', tex: '\\sum_{n=0}^{\\infty}n!\\,x^{n}', a: 0, lo: 0, hi: 0, ends: '[]', xr: [-0.5, 0.5], yr: [-2, 8], x0: 0.25,
    term: (n, x) => (n === 0 ? 1 : fact(n) * Math.pow(x, n)), sum: (x) => (x === 0 ? 1 : NaN),
    rho: (x) => (x === 0 ? ['x=0', 0] : ['\\rho=\\lim_{n\\to\\infty}(n+1)|x|=\\infty', Infinity]),
    end: (x) => (x === 0 ? 'At its center $x=0$ every term after $c_{0}=1$ is zero, so the series converges there and nowhere else.' : null) },
  geom: { label: 'xⁿ', tex: '\\sum_{n=0}^{\\infty}x^{n}', a: 0, lo: -1, hi: 1, ends: '()', xr: [-2, 2], yr: [-2, 8], x0: 0.5,
    term: (n, x) => Math.pow(x, n), sum: (x) => 1 / (1 - x),
    rho: (x) => [`\\rho=|x|=${f2(Math.abs(x))}`, Math.abs(x)],
    end: (x) => (Math.abs(Math.abs(x) - 1) < 1e-9 ? `At $x=${x > 0 ? '' : '-'}1$ the terms do not tend to zero, so the series diverges by the divergence test.` : null) },
};
const ORDER = ['shift', 'exp', 'factorial', 'geom'];
const NMAX = 24;
const inside = (K, x) => (x > K.lo && x < K.hi) || (x === K.lo && K.ends[0] === '[') || (x === K.hi && K.ends[1] === ']');
const intervalTex = (K) => (K.lo === -Infinity ? '(-\\infty,\\infty)' : K.lo === K.hi ? '\\{0\\}' : `${K.ends[0]}${K.lo},${K.hi}${K.ends[1]}`);
(function () {
  const d = sim('sim-convergence', 600);
  const pick = choice(d.controls, { label: '', aria: 'which power series', value: 'shift', options: ORDER.map((k) => ({ value: k, label: SERIES[k].label })),
    onInput: () => { const K = SERIES[pick.value]; xs.range({ min: K.xr[0], max: K.xr[1], step: 0.01, value: K.x0, dec: 2 }); } });
  const ends = () => { const K = SERIES[pick.value]; return K.lo === -Infinity ? [] : K.lo === K.hi ? [K.lo] : [K.lo, K.hi]; };
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 7, step: 0.01, value: 4, unit: '', dec: 2, aria: 'the value of x',
    specials: [{ at: () => ends()[0] ?? null }, { at: () => ends()[1] ?? null }] });
  const ro = readout(d);
  const LINE = { l: 130, r: 1270, y: 150 }, BOX = { l: 130, r: 1270, t: 250, b: 540 };
  function draw() {
    const { ctx } = begin(d.c);
    const K = SERIES[pick.value], x = xs.v, setC = C('set'), serC = C('series');
    const X = (v) => LINE.l + ((v - K.xr[0]) / (K.xr[1] - K.xr[0])) * (LINE.r - LINE.l);
    /* the number line, its ticks on round values, the interval of convergence over it */
    line(ctx, LINE.l, LINE.y, LINE.r, LINE.y, PAL.ink, 2);
    const span = K.xr[1] - K.xr[0], step = span > 4 ? 1 : span > 2 ? 0.5 : 0.25;
    for (let v = Math.ceil(K.xr[0] / step) * step; v <= K.xr[1] + 1e-9; v += step) {
      line(ctx, X(v), LINE.y - 8, X(v), LINE.y + 8, PAL.muted, 2);
      text(ctx, fmt(v, step < 1 ? 2 : 0), X(v), LINE.y + 30, PAL.muted, { size: 17, align: 'center' });
    }
    const l = Math.max(K.lo, K.xr[0]), r = Math.min(K.hi, K.xr[1]);
    if (K.lo === K.hi) dot(ctx, X(K.lo), LINE.y, setC, true, 11);
    else {
      line(ctx, X(l), LINE.y, X(r), LINE.y, setC, 10);
      if (K.lo > -Infinity) { dot(ctx, X(K.lo), LINE.y, setC, K.ends[0] === '[', 11); dot(ctx, X(K.hi), LINE.y, setC, K.ends[1] === ']', 11); }
    }
    text(ctx, 'converges', (X(l) + X(r)) / 2, LINE.y - 34, setC, { size: 20, align: 'center', weight: 600 });
    if (K.lo > K.xr[0]) text(ctx, 'diverges', (LINE.l + X(K.lo)) / 2, LINE.y - 34, PAL.muted, { size: 20, align: 'center' });
    if (K.hi < K.xr[1]) text(ctx, 'diverges', (X(K.hi) + LINE.r) / 2, LINE.y - 34, PAL.muted, { size: 20, align: 'center' });
    text(ctx, `center $a=${K.a}$`, X(K.a), LINE.y + 58, PAL.ink, { size: 17, align: 'center', tex: true });
    /* the probe */
    line(ctx, X(x), LINE.y - 18, X(x), LINE.y + 18, PAL.ink, 3);
    dot(ctx, X(x), LINE.y, PAL.ink, true, 8);
    /* the partial sums at the probe against N */
    const ax = axes(ctx, BOX, [0, NMAX], K.yr, { xl: 'N', yl: `S_{N}(${fmt(x, 2)})`, yc: serC, nx: 6, ny: K.yr[1] - K.yr[0] === 10 ? 5 : 4 });
    const conv = inside(K, x), s = K.sum(x);
    if (conv && Number.isFinite(s) && s >= K.yr[0] && s <= K.yr[1]) {
      line(ctx, BOX.l, ax.Y(s), BOX.r, ax.Y(s), alpha(serC, 0.7), 3, [10, 10]);
      text(ctx, `sum $${f2(s, 3)}$`, BOX.r - 6, ax.Y(s) - 18, serC, { size: 17, align: 'right', tex: true, bg: PAL.panel });
    }
    let S = 0;
    for (let n = 0; n <= NMAX; n++) {
      S += K.term(n, x);
      const py = ax.Y(S), out = !Number.isFinite(S) || S > K.yr[1] || S < K.yr[0];
      const cy = out ? (S < K.yr[0] ? BOX.b : BOX.t) : py;
      dot(ctx, ax.X(n), cy, serC, !out, 6);
    }
    const [rhoTex, rho] = K.rho(x), endNote = K.end(x);
    const where = K.lo === -Infinity ? 'for every $x$' : K.lo === K.hi ? 'only at $x=0$' : `on $${typed('set', intervalTex(K))}$`;
    headline(ctx, `$${K.tex}$ converges ${where}; at $x=${f2(x)}$ ${conv ? (Number.isFinite(s) ? `the partial sums settle on $${f2(s, 3)}$` : 'it converges') : 'the partial sums run off'}`);
    const verdict = endNote ? '' : rho < 1 ? '\\lt 1,\\ \\text{converges absolutely}' : rho > 1 ? '\\gt 1,\\ \\text{diverges}' : '=1,\\ \\text{test the endpoint}';
    ro.set(`${rhoTex}${verdict}`, endNote || `The interval of convergence is $${typed('set', intervalTex(K))}$.`);
  }
  still(d, draw);
})();

/* Figure 10.3: 1/(1 − x) and the partial sums of its geometric series. x on [−1.5, 1.5], y on [−2, 8] (the book's (−1, 1)
   with room beyond each end to see the partial sums peel away). */
(function () {
  const d = sim('sim-partial-sums', 540);
  const nS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 0, max: 20, step: 1, value: 6, unit: '', dec: 0, aria: 'the number N of the partial sum', detents: [2, 4, 6] });
  const xS = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -0.95, max: 0.95, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'the point x' });
  const ro = readout(d);
  const BOX = { l: 160, r: 1240, t: 110, b: 470 };
  const S = (N) => (x) => { let s = 0, p = 1; for (let n = 0; n <= N; n++) { s += p; p *= x; } return s; };
  const f = (x) => 1 / (1 - x);
  function draw() {
    const { ctx } = begin(d.c);
    const N = nS.v, x = xS.v, serC = C('series');
    const ax = axes(ctx, BOX, [-1.5, 1.5], [-2, 8], { xl: 'x', yl: 'y', nx: 6, ny: 5, fx: (t) => fmt(t, Number.isInteger(t) ? 0 : 1) });
    line(ctx, ax.X(-1), ax.Y(0), ax.X(1), ax.Y(0), alpha(C('set'), 0.85), 8);
    dot(ctx, ax.X(-1), ax.Y(0), C('set'), false, 9); dot(ctx, ax.X(1), ax.Y(0), C('set'), false, 9);
    [N - 4, N - 2].filter((k) => k >= 0).forEach((k, i, all) => plot(ctx, ax, S(k), alpha(serC, all.length === 2 && i === 0 ? 0.3 : 0.5), { w: 3 }));
    plot(ctx, ax, S(N), serC, { w: 4 });
    plot(ctx, ax, f, C('function'), { w: 5, poles: [1] });
    const sx = S(N)(x), fx = f(x);
    line(ctx, ax.X(x), ax.Y(sx), ax.X(x), ax.Y(fx), C('error'), 5);
    dot(ctx, ax.X(x), ax.Y(fx), C('function'), true, 8);
    dot(ctx, ax.X(x), ax.Y(sx), serC, true, 8);
    text(ctx, '$\\kf(x)=\\frac{1}{1-x}$', ax.X(0.62), ax.Y(5.6), C('function'), { size: 22, tex: true, align: 'right', bg: PAL.panel });
    text(ctx, `$\\kS_{${N}}$`, ax.X(-1.42), ax.Y(S(N)(-1.42) > 7.5 ? 7.4 : Math.max(-1.6, S(N)(-1.42))) - 20, serC, { size: 22, tex: true, bg: PAL.panel });
    headline(ctx, `$N=${N}$: $\\kS_{${N}}(${f2(x)})=${f2(sx, 4)}$ and $\\kf(${f2(x)})=${f2(fx, 4)}$, a gap of $${f2(Math.abs(fx - sx), 4)}$`);
    ro.set(`\\kS_{${N}}(${f2(x)})=\\sum_{n=0}^{${N}}(${f2(x)})^{n}=${f2(sx, 4)}`, `The gap $${typed('error', `\\kf(${f2(x)})-\\kS_{${N}}(${f2(x)})=${f2(fx - sx, 4)}`)}$ shrinks as $N$ grows, since $|x|\\lt 1.$`);
  }
  still(d, draw);
})();
};
