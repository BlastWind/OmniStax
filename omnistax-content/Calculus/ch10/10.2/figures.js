/* Figures for section 10.2 Properties of Power Series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, line, dot, text, headline, register, readout, hover, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const f2 = (v, d = 2) => fmt(v, d).replace('−', '-');

/* Example 10.7: the present value of n annual payments of C at the rate r. Years on [0, 100]; the running sum on [0, 50]
   million (C/r reaches 200 at the sliders' extremes and is pinned at the top), each year's value on [0, 2] below. */
(function () {
  const d = sim('sim-present-value', 600);
  const cS = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: 0.5, max: 2, step: 0.05, value: 1.5, unit: 'million', dec: 2, aria: 'the annual payment C in millions of dollars', detents: [1, 1.5] });
  const rS = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.01, max: 0.1, step: 0.005, value: 0.05, unit: '', dec: 3, aria: 'the annual interest rate r', detents: [0.05] });
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 100, step: 1, value: 20, unit: 'years', dec: 0, aria: 'the number of years n', detents: [20] });
  const ro = readout(d);
  const TOP = { l: 170, r: 1250, t: 100, b: 330 }, LOW = { l: 170, r: 1250, t: 390, b: 530 };
  function draw() {
    const { ctx } = begin(d.c);
    const Cv = cS.v, r = rS.v, n = nS.v, serC = C('series'), seqC = C('sequence');
    const top = axes(ctx, TOP, [0, 100], [0, 50], { xl: '', yl: 'P (million dollars)', yc: serC, nx: 0, ny: 5 });
    const low = axes(ctx, LOW, [0, 100], [0, 2], { xl: 'year k', yl: 'C/(1 + r)^{k}', yc: seqC, nx: 5, ny: 2 });
    const w = Math.max(2, (LOW.r - LOW.l) / 100 - 2);
    let P = 0; const pts = [[0, 0]];
    for (let k = 1; k <= n; k++) {
      const v = Cv / Math.pow(1 + r, k); P += v; pts.push([k, P]);
      ctx.fillStyle = alpha(seqC, 0.75); ctx.fillRect(low.X(k) - w / 2, low.Y(v), w, low.Y(0) - low.Y(v));
    }
    const lim = Cv / r, lump = 20;
    if (lim <= 50) { line(ctx, TOP.l, top.Y(lim), TOP.r, top.Y(lim), alpha(serC, 0.8), 3, [10, 10]); text(ctx, `$\\frac{C}{r}=${f2(lim, 3)}$`, TOP.r - 8, top.Y(lim) - 20, serC, { size: 20, align: 'right', tex: true, bg: PAL.panel }); }
    else text(ctx, `$\\frac{C}{r}=${f2(lim, 1)}$ above the frame`, TOP.r - 8, TOP.t + 18, serC, { size: 20, align: 'right', tex: true, bg: PAL.panel });
    line(ctx, TOP.l, top.Y(lump), TOP.r, top.Y(lump), alpha(PAL.ink, 0.45), 2, [4, 8]);
    text(ctx, 'lump sum 20', TOP.l + 10, top.Y(lump) - 16, PAL.muted, { size: 17, bg: PAL.panel });
    ctx.save(); ctx.strokeStyle = serC; ctx.lineWidth = 5; ctx.beginPath();
    pts.forEach(([k, v], i) => { const x = top.X(k), y = top.Y(Math.min(v, 50)); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
    ctx.stroke(); ctx.restore();
    dot(ctx, top.X(n), top.Y(Math.min(P, 50)), serC, true, 9);
    const cmp = Math.abs(P - lump) < 0.0005 ? 'equal to' : P < lump ? 'less than' : 'more than';
    headline(ctx, `$n=${n}$ years at $r=${f2(r, 3)}$: $\\kP=${f2(P, 3)}$ million dollars, ${cmp} the lump sum of 20 million`);
    ro.set(`\\kP=\\sum_{k=1}^{${n}}\\frac{${f2(Cv)}}{(1+${f2(r, 3)})^{k}}=\\frac{${f2(Cv)}\\,(1-(1+${f2(r, 3)})^{-${n}})}{${f2(r, 3)}}=${f2(P, 3)}`,
      `Paid indefinitely, the payments are worth the sum of the $${typed('series', '\\text{geometric series}')}$, $\\frac{C}{r}=${f2(lim, 3)}$ million.`);
  }
  still(d, draw);
})();

/* The Cauchy product as a grid: c_i along the rows, d_j along the columns, e_n the sum on the diagonal i + j = n. */
const PRODUCTS = {
  ex: { label: '1/(1 − x) · 1/(1 − x²)', c: () => 1, d: (j) => (j % 2 ? 0 : 1), fTex: '\\frac{1}{(1-x)(1-x^{2})}' },
  cp: { label: '1/(1 − x) · 1/(1 − x)', c: () => 1, d: () => 1, fTex: '\\frac{1}{(1-x)(1-x)}' },
};
(function () {
  const d = sim('sim-cauchy-product', 670);
  const pick = choice(d.controls, { label: '', aria: 'which product', value: 'ex', options: Object.entries(PRODUCTS).map(([value, p]) => ({ value, label: p.label })) });
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 0, max: 8, step: 1, value: 4, unit: '', dec: 0, aria: 'the power n' });
  const ro = readout(d);
  const M = 9, S = 44, G = { l: 470, t: 165 };
  const cx = (j) => G.l + j * S + S / 2, cy = (i) => G.t + i * S + S / 2;
  hover(d.stage, () => { const P = PRODUCTS[pick.value]; const hs = []; for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) hs.push({ x: cx(j), y: cy(i), r: S / 2, name: `c${i}·d${j} = ${P.c(i) * P.d(j)}, a term of x^${i + j}` }); return hs; });
  function draw() {
    const { ctx } = begin(d.c);
    const P = PRODUCTS[pick.value], n = nS.v, serC = C('series');
    text(ctx, '$d_{j}$', G.l + (M * S) / 2, G.t - 50, PAL.ink, { size: 22, align: 'center', tex: true });
    text(ctx, '$c_{i}$', G.l - 92, G.t + (M * S) / 2, PAL.ink, { size: 22, align: 'center', tex: true });
    for (let j = 0; j < M; j++) text(ctx, `${P.d(j)}`, cx(j), G.t - 18, PAL.muted, { size: 17, align: 'center' });
    for (let i = 0; i < M; i++) text(ctx, `${P.c(i)}`, G.l - 24, cy(i), PAL.muted, { size: 17, align: 'center' });
    for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) {
      const v = P.c(i) * P.d(j), on = i + j === n;
      ctx.fillStyle = on ? alpha(serC, v ? 0.55 : 0.18) : v ? alpha(PAL.ink, 0.12) : 'transparent';
      ctx.fillRect(G.l + j * S + 2, G.t + i * S + 2, S - 4, S - 4);
      if (on) text(ctx, `${v}`, cx(j), cy(i), PAL.ink, { size: 20, align: 'center', weight: 600 });
    }
    ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1;
    for (let k = 0; k <= M; k++) { line(ctx, G.l, G.t + k * S, G.l + M * S, G.t + k * S, PAL.rule, 1); line(ctx, G.l + k * S, G.t, G.l + k * S, G.t + M * S, PAL.rule, 1); }
    const e = (m) => { let s = 0; for (let k = 0; k <= m; k++) s += P.c(k) * P.d(m - k); return s; };
    const rowY = G.t + M * S + 46;
    text(ctx, '$e_{n}$', G.l - 92, rowY, serC, { size: 22, align: 'center', tex: true });
    for (let m = 0; m < M; m++) text(ctx, `${e(m)}`, cx(m), rowY, m === n ? serC : PAL.muted, { size: m === n ? 22 : 17, align: 'center', weight: m === n ? 600 : 400 });
    const terms = Array.from({ length: n + 1 }, (_, k) => `c_{${k}}d_{${n - k}}`).join('+');
    const nums = Array.from({ length: n + 1 }, (_, k) => P.c(k) * P.d(n - k)).join('+');
    const series = Array.from({ length: Math.min(n, 5) + 1 }, (_, m) => { const c = e(m); return m === 0 ? `${c}` : `${c === 1 ? '' : c}x${m > 1 ? `^{${m}}` : ''}`; }).join('+');
    headline(ctx, `$n=${n}$: $e_{${n}}=${e(n)}$, so $${P.fTex}=${typed('series', `${series}+\\cdots`)}$`);
    ro.set(`e_{${n}}=${terms}=${nums}=${e(n)}`, `The $${typed('series', '\\text{Cauchy product}')}$ $${typed('series', '\\sum e_{n}x^{n}')}$ converges to the product on $${typed('set', '(-1,1)')}.$`);
  }
  still(d, draw);
})();

/* Examples 10.9 and 10.10: series found by differentiating or integrating a geometric series term by term.
   x on [−1.5, 1.5]; each function its own y-range, rounded to ticks. */
const TBT = {
  diff: { label: '1/(1 − x)²', fTex: '\\frac{1}{(1-x)^{2}}', f: (x) => 1 / ((1 - x) * (1 - x)), poles: [1], yr: [-2, 10], ny: 6,
    term: (n, x) => (n + 1) * Math.pow(x, n), n0: 0, sTex: (N) => `\\sum_{n=0}^{${N}}(n+1)x^{n}`, I: '(-1,1)', lo: '(', hi: ')', at1: 'diverges by the divergence test' },
  ln: { label: 'ln(1 + x)', fTex: '\\ln(1+x)', f: (x) => Math.log(1 + x), poles: [], yr: [-3, 1.5], ny: 3,
    term: (n, x) => (n === 0 ? 0 : (n % 2 ? 1 : -1) * Math.pow(x, n) / n), n0: 1, sTex: (N) => `\\sum_{n=1}^{${N}}(-1)^{n+1}\\frac{x^{n}}{n}`, I: '(-1,1]', lo: '(', hi: ']', at1: 'converges, the alternating harmonic series', v1: Math.LN2, v1Tex: '\\ln 2' },
  atan: { label: 'tan⁻¹x', fTex: '\\tan^{-1}x', f: Math.atan, poles: [], yr: [-1.5, 1.5], ny: 6,
    term: (n, x) => (n % 2 ? ((n - 1) / 2 % 2 ? -1 : 1) * Math.pow(x, n) / n : 0), n0: 0, sTex: (N) => `\\sum_{n=0}^{${Math.floor((N - 1) / 2)}}(-1)^{n}\\frac{x^{2n+1}}{2n+1}`, I: '[-1,1]', lo: '[', hi: ']', at1: 'converges by the alternating series test', v1: Math.PI / 4, v1Tex: '\\frac{\\pi}{4}' },
};
(function () {
  const d = sim('sim-term-by-term', 560);
  const pick = choice(d.controls, { label: '', aria: 'which series', value: 'diff', options: Object.entries(TBT).map(([value, k]) => ({ value, label: k.label })) });
  const nS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0, aria: 'the degree N of the partial sum' });
  const ro = readout(d);
  const BOX = { l: 160, r: 1240, t: 110, b: 470 };
  function draw() {
    const { ctx } = begin(d.c);
    const K = TBT[pick.value], N = nS.v, serC = C('series'), setC = C('set');
    const ax = axes(ctx, BOX, [-1.5, 1.5], K.yr, { xl: 'x', yl: 'y', nx: 6, ny: K.ny, fx: (t) => fmt(t, Number.isInteger(t) ? 0 : 1), fy: (t) => fmt(t, Number.isInteger(t) ? 0 : 1) });
    const S = (x) => { let s = 0; for (let n = 0; n <= N; n++) s += K.term(n, x); return s; };
    const y0 = ax.Y(Math.max(K.yr[0], Math.min(K.yr[1], 0)));
    line(ctx, ax.X(-1), y0, ax.X(1), y0, alpha(setC, 0.85), 8);
    dot(ctx, ax.X(-1), y0, setC, K.lo === '[', 9); dot(ctx, ax.X(1), y0, setC, K.hi === ']', 9);
    plot(ctx, ax, K.f, C('function'), { w: 5, poles: K.poles });
    plot(ctx, ax, S, serC, { w: 4 });
    const s1 = S(1);
    if (s1 <= K.yr[1]) dot(ctx, ax.X(1), ax.Y(s1), serC, true, 8);
    if (K.v1 !== undefined) dot(ctx, ax.X(1), ax.Y(K.v1), C('function'), false, 10);
    text(ctx, `$${K.fTex}$`, ax.X(-1.42), ax.Y(K.yr[1]) + 26, C('function'), { size: 22, tex: true, bg: PAL.panel });
    const at1 = K.v1 !== undefined ? `$\\kS_{${N}}(1)=${f2(s1, 4)}$ against $${K.v1Tex}=${f2(K.v1, 4)}$` : `$\\kS_{${N}}(1)=${f2(s1, 0)}$ grows without bound`;
    headline(ctx, `The series for $${K.fTex}$ converges on $${typed('set', K.I)}$; at $x=1$, ${at1}`);
    ro.set(`\\kS_{${N}}(x)=${K.sTex(N)}`, `At $x=1$ the series ${K.at1}; the $${typed('set', '\\text{interval of convergence}')}$ is $${typed('set', K.I)}.$`);
  }
  still(d, draw);
})();
};
