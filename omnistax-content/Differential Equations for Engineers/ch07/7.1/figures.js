/* Figures for section 7.1 Power series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.1'] = function (root, F) {
const { C, PAL, alpha, ctl, select, begin, axes, plot, line, dot, text, label, hbracket, headline, register, readout, fmt, hover, drag, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number for TeX: an ASCII minus */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const fact = (k) => { let p = 1; for (let j = 2; j <= k; j++) p *= j; return p; };
/* a value for the readout: four decimals, or powers of ten once it is large */
const big = (v) => {
  if (!Number.isFinite(v)) return '\\infty';
  if (Math.abs(v) < 1e5) return n(v, 4);
  const e = Math.floor(Math.log10(Math.abs(v)));
  return `${n(v / 10 ** e, 2)} \\times 10^{${e}}`;
};

/* Figure 7.1: the number line of a chosen series of the section, its interval of absolute convergence
   (x0 − ρ, x0 + ρ) shaded and lettered as the book's sketch, and above it the partial sums S_n(x) for
   the last few n up to N, in series, closing on the function the series defines (function) inside the
   interval and running off outside it, where the function itself is drawn faint. a(k) is the
   coefficient from k0 on; lim the sum where it converges; ends the endpoints' verdicts.
   Axes x −4 to 4 (every series' interval and some of the line beyond it fit), y −4 to 6. Still: a family
   under N has no clock. The probe x is dragged along the number line. */
const SUMKK = (x) => { let s = 0; for (let k = 1; k <= 60; k++) { const t = Math.pow(x / k, k); s += t; if (Math.abs(t) < 1e-16) break; } return s; };
const SERIES = {
  ex3: { label: 'Σ 2⁻ᵏ(x − 1)ᵏ (Example 7.1.3)', tex: '\\sum_{k=0}^\\infty 2^{-k}(x-1)^k', k0: 0, x0: 1, rho: 2, a: (k) => Math.pow(2, -k),
    lim: (x) => 2 / (3 - x), limTex: '\\frac{2}{3-x}', limName: '2/(3 − x)',
    A: '\\lim_{k\\to\\infty}\\frac{\\lvert \\ka_{k+1} \\rvert}{\\lvert \\ka_k \\rvert} = \\lim_{k\\to\\infty}\\frac{2^{-k-1}}{2^{-k}} = \\frac{1}{2}', rhoTex: '\\rho = \\frac{1}{A} = 2',
    ends: { '-1': 'the terms are $(-1)^k$, which do not shrink, so the series diverges', '3': 'every term is $1$, so the series diverges' } },
  exp: { label: 'Σ xᵏ/k! (Example 7.1.1)', tex: '\\sum_{k=0}^\\infty \\frac{x^k}{k!}', k0: 0, x0: 0, rho: Infinity, a: (k) => 1 / fact(k),
    lim: Math.exp, limTex: 'e^x', limName: 'eˣ',
    A: '\\lim_{k\\to\\infty}\\frac{\\lvert \\ka_{k+1} \\rvert}{\\lvert \\ka_k \\rvert} = \\lim_{k\\to\\infty}\\frac{1}{k+1} = 0', rhoTex: '\\rho = \\infty', ends: {} },
  log: { label: 'Σ xᵏ/k (Example 7.1.2)', tex: '\\sum_{k=1}^\\infty \\frac{x^k}{k}', k0: 1, x0: 0, rho: 1, a: (k) => 1 / k,
    lim: (x) => -Math.log(1 - x), limTex: '-\\ln(1-x)', limName: '−ln(1 − x)',
    A: '\\lim_{k\\to\\infty}\\frac{\\lvert \\ka_{k+1} \\rvert}{\\lvert \\ka_k \\rvert} = \\lim_{k\\to\\infty}\\frac{k}{k+1} = 1', rhoTex: '\\rho = \\frac{1}{A} = 1',
    ends: { '-1': 'the series converges (conditionally) by the alternating series test, to $-\\ln 2$', '1': 'it is $\\sum 1/k$, which diverges' }, closed: -1 },
  kk: { label: 'Σ xᵏ/kᵏ (Example 7.1.4)', tex: '\\sum_{k=1}^\\infty \\frac{x^k}{k^k}', k0: 1, x0: 0, rho: Infinity, a: (k) => Math.pow(k, -k),
    lim: SUMKK, limTex: null, limName: 'the sum Σ xᵏ/kᵏ',
    A: '\\lim_{k\\to\\infty}\\sqrt[k]{\\lvert \\ka_k \\rvert} = \\lim_{k\\to\\infty}\\frac{1}{k} = 0', rhoTex: '\\rho = \\infty', ends: {} },
  geom: { label: 'Σ xᵏ (geometric series)', tex: '\\sum_{k=0}^\\infty x^k', k0: 0, x0: 0, rho: 1, a: () => 1,
    lim: (x) => 1 / (1 - x), limTex: '\\frac{1}{1-x}', limName: '1/(1 − x)',
    A: '\\lim_{k\\to\\infty}\\frac{\\lvert \\ka_{k+1} \\rvert}{\\lvert \\ka_k \\rvert} = \\lim_{k\\to\\infty}\\frac{1}{1} = 1', rhoTex: '\\rho = \\frac{1}{A} = 1',
    ends: { '-1': 'the terms are $(-1)^k$, which do not shrink, so the series diverges', '1': 'every term is $1$, so the series diverges' } },
  ex6: { label: 'Σ (−1)ᵏ⁺¹k xᵏ (Example 7.1.6)', tex: '\\sum_{k=1}^\\infty (-1)^{k+1}k\\,x^k', k0: 1, x0: 0, rho: 1, a: (k) => (k % 2 ? 1 : -1) * k,
    lim: (x) => x / ((1 + x) * (1 + x)), limTex: '\\frac{x}{(1+x)^2}', limName: 'x/(1 + x)²',
    A: '\\lim_{k\\to\\infty}\\frac{\\lvert \\ka_{k+1} \\rvert}{\\lvert \\ka_k \\rvert} = \\lim_{k\\to\\infty}\\frac{k+1}{k} = 1', rhoTex: '\\rho = \\frac{1}{A} = 1',
    ends: { '-1': 'the terms are $-k$, which grow, so the series diverges', '1': 'the terms are $\\pm k$, which grow, so the series diverges' } },
};
const ORDER = ['ex3', 'exp', 'log', 'kk', 'geom', 'ex6'];
const XR = [-4, 4], YR = [-4, 6];
const Sn = (K, N) => (x) => { let s = 0; for (let k = K.k0; k <= N; k++) s += K.a(k) * Math.pow(x - K.x0, k); return s; };
const endsOf = (K) => (K.rho === Infinity ? [] : [K.x0 - K.rho, K.x0 + K.rho]);
const isEnd = (K, x) => endsOf(K).find((e) => Math.abs(x - e) < 1e-9);
const converges = (K, x) => Math.abs(x - K.x0) < K.rho || (K.closed !== undefined && Math.abs(x - K.closed) < 1e-9);
(function () {
  const d = sim('sim-convergence-interval', 680);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: XR[0], max: XR[1], step: 0.01, value: 2, unit: '', dec: 2, aria: 'the point x',
    specials: [{ at: () => endsOf(SERIES[pick.value])[0] ?? null, label: 'x₀ − ρ' }, { at: () => endsOf(SERIES[pick.value])[1] ?? null, label: 'x₀ + ρ' }] });
  const pick = select(d.controls, { label: 'series', key: 'series', value: 'ex3', options: ORDER.map((v) => ({ value: v, label: SERIES[v].label })),
    onInput: () => xs.refresh() });
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 30, step: 1, value: 8, unit: '', dec: 0, aria: 'the number N of terms of the partial sum' });
  const ro = readout(d);
  const BOX = { l: 160, r: 1250, t: 120, b: 430 }, LY = 540;
  /* the number line as a frame of its own, for the probe's drag: the graph's x scale, y the level of the line */
  let lineAx = null, hits = [];
  const probe = drag(d, { x: xs, y: 0 });
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const K = SERIES[pick.value], N = Math.max(Math.round(Ns.v), K.k0), x = xs.v;
    const sc = C('series'), fc = C('function');
    const ax = axes(ctx, BOX, XR, YR, { xl: 'x', yl: 'y', nx: 8, ny: 5 });
    hits = [];
    /* the interval, bending into the next series' on a change (ends held inside the drawn line) */
    const lohi = pick.mix((v) => { const S = SERIES[v]; return [Math.max(S.x0 - S.rho, XR[0] - 0.3), Math.min(S.x0 + S.rho, XR[1] + 0.3)]; });
    const [lo, hi] = lohi, X = ax.X;
    /* the function the series defines: faint beyond the interval, full inside */
    const k = pick.k, from = SERIES[pick.from], mixF = (f, g) => (pick.from === pick.value || k >= 1 ? g : (t) => (1 - k) * f(t) + k * g(t));
    const limF = mixF(from.lim, K.lim);
    plot(ctx, ax, limF, alpha(fc, 0.35), { w: 3 });
    plot(ctx, ax, limF, fc, { w: 5, x: [Math.max(lo, XR[0]), Math.min(hi, XR[1])] });
    /* the partial sums up to N: the earlier ones faint, S_N full */
    for (let j = Math.max(K.k0, N - 4); j < N; j++) plot(ctx, ax, mixF(Sn(from, Math.max(j, from.k0)), Sn(K, j)), alpha(sc, 0.18 + 0.1 * (j - N + 5)), { w: 2.5 });
    const SN = mixF(Sn(from, Math.max(N, from.k0)), Sn(K, N));
    plot(ctx, ax, SN, sc, { w: 4 });
    /* names: the function at the left inside the interval, S_N where it stands at the right of the box */
    const lx = Math.max(lo, XR[0]) + 0.35 * (Math.min(hi, XR[1]) - Math.max(lo, XR[0]));
    const ly = K.lim(lx);
    if (Number.isFinite(ly) && ly > YR[0] && ly < YR[1]) label(ctx, K.limName, X(lx), ax.Y(ly), { side: 'above', color: fc, size: 20, gap: 34 });
    /* the number line, the book's sketch: ticks at the integers, x0 − ρ, x0, x0 + ρ named beneath */
    line(ctx, BOX.l, LY, BOX.r, LY, PAL.ink, 2);
    for (let v = XR[0]; v <= XR[1]; v++) { line(ctx, X(v), LY - 7, X(v), LY + 7, PAL.muted, 2); text(ctx, fmt(v, 0), X(v), LY + 26, PAL.muted, { size: 17, align: 'center' }); }
    const L = Math.max(lo, XR[0]), R = Math.min(hi, XR[1]);
    ctx.save(); ctx.fillStyle = alpha(sc, 0.22); ctx.fillRect(X(L), LY - 14, X(R) - X(L), 28); ctx.restore();
    line(ctx, X(L), LY, X(R), LY, sc, 6);
    text(ctx, 'converges absolutely', (X(L) + X(R)) / 2, LY - 36, sc, { size: 20, align: 'center', weight: 600, bg: PAL.panel });
    if (lo > XR[0]) text(ctx, 'diverges', (BOX.l + X(lo)) / 2, LY - 36, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    if (hi < XR[1]) text(ctx, 'diverges', (X(hi) + BOX.r) / 2, LY - 36, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    const marks = [[K.x0, 'x_0']];
    if (K.rho < Infinity) marks.push([K.x0 - K.rho, 'x_0 − ρ'], [K.x0 + K.rho, 'x_0 + ρ']);
    marks.forEach(([v, s]) => { line(ctx, X(v), LY - 12, X(v), LY + 12, PAL.ink, 3); text(ctx, s, X(v), LY + 60, PAL.ink, { size: 20, align: 'center' }); });
    endsOf(K).forEach((e) => {
      const ok = K.closed !== undefined && Math.abs(e - K.closed) < 1e-9;
      dot(ctx, X(e), LY, sc, ok, 9);
      hits.push({ x: X(e), y: LY, r: 14, name: `the endpoint x = ${fmt(e, 0)}: ${ok ? 'the series converges here' : 'the series diverges here'}` });
    });
    /* the probe: dragged on the line, its partial sum and the function's value above it */
    lineAx = { X, Y: (v) => LY - v * 20, box: { l: BOX.l, r: BOX.r, t: LY - 20, b: LY + 20 }, xr: XR, yr: [-1, 1] };
    line(ctx, X(x), LY - 14, X(x), BOX.t, alpha(PAL.ink, 0.35), 2, [4, 8]);
    probe.draw(ctx, lineAx, PAL.ink);
    const s = Sn(K, N)(x), conv = converges(K, x), lim = conv ? (K.closed !== undefined && Math.abs(x - K.closed) < 1e-9 ? -Math.log(2) : K.lim(x)) : NaN;
    if (conv && Number.isFinite(lim)) { const p = pinned(ctx, BOX, X, ax.Y, x, lim, fc); hits.push({ x: p.x, y: p.y, r: 14, name: `the sum at x = ${fmt(x, 2)}: ${fmt(lim, 4)}` }); }
    const ps = pinned(ctx, BOX, X, ax.Y, x, s, sc);
    hits.push({ x: ps.x, y: ps.y, r: 14, name: `S${N}(${fmt(x, 2)}) = ${Number.isFinite(s) ? fmt(s, 4) : 'too large to draw'}` });
    /* S_N named where it stands inside the box, away from the probe: near the right edge, else the left, else further in */
    const at = [3.8, -3.8, 2.6, -2.6, 1.4, -1.4].find((v) => { const y = SN(v); return Number.isFinite(y) && y > YR[0] + 0.6 && y < YR[1] - 0.6 && Math.abs(v - x) > 0.7; }) ?? 3.8;
    const atY = Math.min(Math.max(SN(at), YR[0] + 0.3), YR[1] - 0.3);
    label(ctx, `S_{${N}}`, X(at), ax.Y(Number.isFinite(atY) ? atY : YR[1] - 0.3), { side: at > 0 ? 'left' : 'right', color: sc, size: 20, gap: 18 });
    /* headline and readout */
    const end = isEnd(K, x), where = K.rho === Infinity ? 'for every $x$' : `on $(${n(K.x0 - K.rho, 0)}, ${n(K.x0 + K.rho, 0)})$`;
    const verdict = end !== undefined ? `at the endpoint $x = ${n(end, 0)}$ the partial sums ${conv ? 'still settle' : 'do not settle'}`
      : conv ? `at $x = ${n(x)}$ the partial sums settle on ${fmt(lim, 4)}` : `at $x = ${n(x)}$, outside, the partial sums run off`;
    headline(ctx, `$${K.tex}$ converges absolutely ${where}; ${verdict}.`);
    const dist = Math.abs(x - K.x0);
    let note;
    if (end !== undefined) note = `At the endpoint $x = ${n(end, 0)}$, ${K.ends[String(end)]}; $\\kS_{${N}}(${n(x)}) = ${big(s)}$.`;
    else if (conv) note = `$\\lvert x - x_0 \\rvert = ${n(dist)} ${K.rho === Infinity ? '' : `\\lt \\rho = ${n(K.rho, 0)}`}$: $\\kS_{${N}}(${n(x)}) = ${big(s)}$, and the series converges to ${K.limTex ? `$${K.limTex} = ${n(lim, 4)}$` : `$${n(lim, 4)}$`}.`;
    else note = `$\\lvert x - x_0 \\rvert = ${n(dist)} \\gt \\rho = ${n(K.rho, 0)}$: the terms grow, and $\\kS_{${N}}(${n(x)}) = ${big(s)}$ runs off as $N$ grows.`;
    ro.set(`A = ${K.A},\\qquad ${K.rhoTex}`, note, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 7.2: sin x and its Taylor series around x0 cut off at degree n, S_n(x) = Σ_{k≤n} f^(k)(x0)/k! (x − x0)^k
   with f = sin, against the book's window x −10 to 10, y −3 to 3 (the book draws −2 to 2; the extra room keeps
   the polynomials in view a little longer as they leave). The degree n − 4 is kept faint, so the default n = 9
   with its faint 5 is the book's picture. On the axis, the stretch around x0 where |sin x − S_n(x)| ≤ 0.1 is
   bracketed in error (the faint degree's beneath it), found by walking out from x0. Still: n and x0 are the
   reader's, not a clock. */
(function () {
  const d = sim('sim-taylor-sin', 600);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 25, step: 1, value: 9, unit: '', dec: 0, detents: [5, 9], aria: 'the degree n of the truncation' });
  const x0s = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -6, max: 6, step: 0.05, value: 0, unit: '', dec: 2, detents: [0], aria: 'the center x0' });
  const ro = readout(d);
  const BOX = { l: 130, r: 1270, t: 110, b: 470 }, XW = [-10, 10], YW = [-3, 3], TOL = 0.1;
  const dk = (x0, k) => [Math.sin(x0), Math.cos(x0), -Math.sin(x0), -Math.cos(x0)][k % 4];
  const T = (n, x0) => (x) => { let s = 0, p = 1; for (let k = 0; k <= n; k++) { s += (dk(x0, k) / fact(k)) * p; p *= x - x0; } return s; };
  /* the stretch around x0 where the truncation stays within TOL of sin x: walked out in steps of 0.005, then halved down */
  const reach = (n, x0, side) => {
    const f = T(n, x0), bad = (x) => !(Math.abs(f(x) - Math.sin(x)) <= TOL);
    let a = x0, h = 0.005 * side;
    while (!bad(a + h) && Math.abs(a + h - x0) < 40) a += h;
    let b = a + h; for (let i = 0; i < 30; i++) { const m = (a + b) / 2; if (bad(m)) b = m; else a = m; }
    return a;
  };
  /* the first few nonzero terms of S_n, written out: x^k/k! at x0 = 0, else f^(k)(x0)/k! (x − x0)^k with f^(k)(x0) to four places */
  const written = (nn, x0) => {
    const at0 = Math.abs(x0) < 1e-9, base = at0 ? 'x' : `(x ${x0 < 0 ? '+' : '-'} ${n(Math.abs(x0))})`;
    const terms = [];
    for (let k = 0; k <= nn; k++) { const c = dk(x0, k); if (Math.abs(c) > 1e-12) terms.push({ k, c }); }
    const show = (t, first) => {
      const sgn = t.c < 0 ? '-' : first ? '' : '+', a = n(Math.abs(t.c), 4), k = t.k;
      const pw = k === 0 ? '' : k === 1 ? base : `${base}^{${k}}`;
      const body = at0 ? (k <= 1 ? pw || '1' : `\\frac{x^{${k}}}{${k}!}`) : k === 0 ? a : k === 1 ? `${a}${pw}` : `\\frac{${a}}{${k}!}${pw}`;
      return `${sgn} ${body}`;
    };
    if (terms.length <= 4) return terms.map((t, i) => show(t, i === 0)).join(' ');
    return `${terms.slice(0, 3).map((t, i) => show(t, i === 0)).join(' ')} + \\cdots ${show(terms[terms.length - 1], false)}`;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const nn = Math.round(ns.v), x0 = x0s.v, m = nn - 4;
    const fc = C('function'), sc = C('series'), ec = C('error');
    const ax = axes(ctx, BOX, XW, YW, { xl: 'x', yl: 'y', nx: 10, ny: 6 });
    if (m >= 1) plot(ctx, ax, T(m, x0), alpha(sc, 0.4), { w: 3 });
    plot(ctx, ax, Math.sin, fc, { w: 5 });
    plot(ctx, ax, T(nn, x0), sc, { w: 4 });
    /* the center on the axis */
    line(ctx, ax.X(x0), ax.Y(0) - 10, ax.X(x0), ax.Y(0) + 10, PAL.ink, 3);
    dot(ctx, ax.X(x0), ax.Y(Math.sin(x0)), PAL.ink, true, 7);
    text(ctx, 'x_0', ax.X(x0), ax.Y(0) + 30, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    /* the stretches within 0.1, clipped to the window */
    const L = reach(nn, x0, -1), R = reach(nn, x0, 1);
    const clip = (v) => Math.min(Math.max(v, XW[0]), XW[1]);
    const by = BOX.b - 40;
    hbracket(ctx, ax.X(clip(L)), ax.X(clip(R)), by, ec, `within ${fmt(TOL, 1)} of sin x`, { side: 'above', size: 20 });
    let Lm = null, Rm = null;
    if (m >= 1) { Lm = reach(m, x0, -1); Rm = reach(m, x0, 1); hbracket(ctx, ax.X(clip(Lm)), ax.X(clip(Rm)), by + 26, alpha(ec, 0.45)); }
    /* names */
    const yAt = (f, x) => Math.min(Math.max(f(x), YW[0] + 0.2), YW[1] - 0.2);
    label(ctx, 'sin x', ax.X(x0 + 1.55), ax.Y(Math.sin(x0 + 1.55)), { side: 'above', color: fc, size: 20, gap: 30 });
    const xr = clip(R + 0.6), xl = clip(L - 0.6);
    label(ctx, `degree ${nn}`, ax.X(xr), ax.Y(yAt(T(nn, x0), xr)), { side: 'right', color: sc, size: 20, gap: 14 });
    if (m >= 1) label(ctx, `degree ${m}`, ax.X(clip(Lm - 0.3)), ax.Y(yAt(T(m, x0), clip(Lm - 0.3))), { side: 'left', color: alpha(sc, 0.7), size: 18, gap: 14 });
    const span = (a, b) => `$${n(a)} < x < ${n(b)}$`;
    headline(ctx, `Degree ${nn} around $x_0 = ${n(x0)}$: within ${fmt(TOL, 1)} of $\\sin x$ for ${span(L, R)}${m >= 1 ? `; degree ${m} only for ${span(Lm, Rm)}` : ''}.`);
    ro.set(`\\kS_{${nn}}(x) = \\sum_{k=0}^{${nn}} \\frac{\\kfk(x_0)}{k!}(x - x_0)^k = ${written(nn, x0)}`,
      `With $\\kf(x) = \\sin x$, the derivatives $\\kfk(x_0)$ run through $\\sin x_0, \\cos x_0, -\\sin x_0, -\\cos x_0$; the gap $\\lvert \\sin x - \\kS_{${nn}}(x) \\rvert$ stays at most $0.1$ for $${n(L)} < x < ${n(R)}$.`);
  }
  still(d, draw);
})();
};
