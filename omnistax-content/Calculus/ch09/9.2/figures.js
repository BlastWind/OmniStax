/* Figures for section 9.2 Infinite Series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, select, begin, axes, dot, line, text, headline, register, readout, fmt, hover, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const z = (v, dec = 6) => n(v, dec).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const level = (ctx, ax, y, color, w = 3) => line(ctx, ax.box.l, ax.Y(y), ax.box.r, ax.Y(y), color, w, [10, 10]);
const zero = (ctx, ax) => { if (ax.yr[0] < 0 && ax.yr[1] > 0) line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2); };
const sums = (a, k) => { const s = []; let t = 0; for (let j = 1; j <= k; j += 1) { t += a(j); s.push(t); } return s; };
/* the point (k, v) in the frame, pinned at its edge when it falls outside */
const pt = (ctx, ax, k, v, color, r) => {
  if (v >= ax.yr[0] && v <= ax.yr[1]) { dot(ctx, ax.X(k), ax.Y(v), color, true, r); return; }
  dot(ctx, ax.X(k), ax.Y(v > ax.yr[1] ? ax.yr[1] : ax.yr[0]), color, false, r);
};

/* Figure 9.10: a series' terms below and its partial sums above, k on a slider. The oil series Σ(1/2)ⁿ⁻¹
   (the book's), Example 9.7's three series and the harmonic series, each in its own fixed frames for k up to 40. */
(function () {
  const d = sim('sim-partial-sums', 640);
  const H = (k) => sums((j) => 1 / j, k)[k - 1];
  const SER = {
    oil: { a: (j) => 0.5 ** (j - 1), S: 2, top: [0, 2.4], bot: [0, 1.1], tex: '(\\tfrac{1}{2})^{n-1}' },
    frac: { a: (j) => j / (j + 1), S: null, top: [0, 40], bot: [0, 1.1], tex: '\\tfrac{n}{n+1}' },
    alt: { a: (j) => (j % 2 ? -1 : 1), S: null, top: [-1.4, 0.6], bot: [-1.2, 1.2], tex: '(-1)^{n}' },
    tel: { a: (j) => 1 / (j * (j + 1)), S: 1, top: [0, 1.2], bot: [0, 0.55], tex: '\\tfrac{1}{n(n+1)}' },
    harm: { a: (j) => 1 / j, S: null, top: [0, 5], bot: [0, 1.1], tex: '\\tfrac{1}{n}' },
  };
  const pick = select(d.controls, { label: '\\text{series}', options: [{ value: 'oil', label: 'Σ(1/2)ⁿ⁻¹, the oil' }, { value: 'frac', label: 'Σn/(n + 1)' }, { value: 'alt', label: 'Σ(−1)ⁿ' }, { value: 'tel', label: 'Σ1/(n(n + 1))' }, { value: 'harm', label: 'Σ1/n, harmonic' }], value: 'oil' });
  const K = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 1, max: 40, step: 1, value: 5, unit: '', dec: 0, detents: [5] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('series'), sc = C('sequence'), lc = C('limit'), S = SER[pick.value], k = K.v, r = k <= 10 ? 9 : k <= 20 ? 7 : 6;
    const top = axes(ctx, { l: 300, r: 1100, t: 100, b: 360 }, [0, 41], S.top, { yl: 'Sₖ', yc: qc, nx: 8, ny: 4, nice: true });
    const bot = axes(ctx, { l: 300, r: 1100, t: 440, b: 580 }, [0, 41], S.bot, { xl: 'n', yl: 'aₙ', yc: sc, nx: 8, ny: 2, nice: true });
    zero(ctx, top); zero(ctx, bot);
    if (S.S !== null) { level(ctx, top, S.S, lc); text(ctx, `$\\kSsum=${S.S}$`, top.box.r + 14, top.Y(S.S), lc, { size: 20, weight: 600, tex: true }); }
    const s = sums(S.a, k);
    s.forEach((v, i) => pt(ctx, top, i + 1, v, qc, r));
    for (let j = 1; j <= k; j += 1) pt(ctx, bot, j, S.a(j), sc, r - 2);
    const sk = s[k - 1];
    const head = {
      oil: `k = ${k}: $\\kS_{${k}}=${z(sk)},$ ${z(2 - sk)} short of 2; each week adds half as much oil as the week before.`,
      frac: `k = ${k}: $\\kS_{${k}}=${n(sk, 3)}\\gt k/2=${n(k / 2, 1)}$: the terms approach 1, and the partial sums grow without bound.`,
      alt: `k = ${k}: $\\kS_{${k}}=${sk}$; the partial sums jump between −1 and 0 and never settle.`,
      tel: `k = ${k}: $\\kS_{${k}}=\\frac{${k}}{${k + 1}}=${n(sk, 4)},$ ${fmt(1 - sk, 4)} short of 1.`,
      harm: `k = ${k}: $\\kS_{${k}}=${n(sk, 4)}$; the terms shrink to 0, but the partial sums keep growing, slowly and without bound.`,
    }[pick.value];
    headline(ctx, head);
    ro.set(`\\kS_{${k}}=\\sum_{n=1}^{${k}}${S.tex}=${typed('series', n(sk, 5))}${S.S !== null ? `\\qquad \\kSsum=${S.S}` : ''}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Sim: a geometric series with its initial term a and ratio r on sliders, k up to 25. The frames follow the
   values (a zoom): the partial sums run off when |r| ≥ 1, and a fixed frame would lose them. */
(function () {
  const d = sim('sim-geometric-series', 640);
  const A = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -2, max: 2, step: 0.05, value: 1, unit: '', dec: 2 });
  const R = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: -1.2, max: 1.2, step: 0.01, value: 0.5, unit: '', dec: 2, specials: [{ at: -1 }, { at: 1 }] });
  const ro = readout(d);
  const span = (vals) => { let lo = Math.min(0, ...vals), hi = Math.max(0, ...vals); if (hi - lo < 1e-9) { lo -= 1; hi += 1; } const pad = 0.08 * (hi - lo); return [lo - pad, hi + pad]; };
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('series'), sc = C('sequence'), lc = C('limit'), a = A.v, r = R.v, KMAX = 25;
    const terms = Array.from({ length: KMAX }, (_, i) => a * r ** i), s = sums((j) => terms[j - 1], KMAX);
    const conv = Math.abs(r) < 1, S = conv ? a / (1 - r) : null;
    const top = axes(ctx, { l: 300, r: 1100, t: 100, b: 360 }, [0, 26], span(conv ? [...s, S] : s), { yl: 'Sₖ', yc: qc, nx: 5, ny: 4, nice: true });
    const bot = axes(ctx, { l: 300, r: 1100, t: 440, b: 580 }, [0, 26], span(terms), { xl: 'n', yl: 'arⁿ⁻¹', yc: sc, nx: 5, ny: 3, nice: true });
    zero(ctx, top); zero(ctx, bot);
    if (conv) { level(ctx, top, S, lc); text(ctx, `$\\frac{a}{1-r}=${n(S, 3)}$`, top.box.r + 14, top.Y(S), lc, { size: 20, weight: 600, tex: true }); }
    s.forEach((v, i) => dot(ctx, top.X(i + 1), top.Y(v), qc, true, 7));
    terms.forEach((v, i) => dot(ctx, bot.X(i + 1), bot.Y(v), sc, true, 6));
    const s25 = s[KMAX - 1];
    if (Math.abs(a) < 1e-9) headline(ctx, 'a = 0: every term is 0, and so is every partial sum.');
    else if (conv) headline(ctx, `r = ${fmt(r, 2)}: the partial sums close on $\\frac{a}{1-r}=${n(S, 4)}$; after 25 terms they are ${fmt(Math.abs(S - s25), 6)} from it.`);
    else if (Math.abs(r - 1) < 1e-9) headline(ctx, `r = 1: $\\kS_{k}=ak$ grows by ${fmt(a, 2)} each step and never settles, so the series diverges.`);
    else if (Math.abs(r + 1) < 1e-9) headline(ctx, `r = −1: the partial sums jump between ${fmt(a, 2)} and 0, so the series diverges.`);
    else headline(ctx, `r = ${fmt(r, 2)}: |r| > 1, the terms grow, and the partial sums ${r > 0 ? 'run off' : 'swing ever wider'}: the series diverges.`);
    ro.set(conv ? `\\kS_{25}=\\frac{a(1-r^{25})}{1-r}=${n(s25, 4)},\\qquad \\sum_{n=1}^{\\infty}ar^{n-1}=\\frac{${n(a, 2)}}{1-(${n(r, 2)})}=${typed('limit', n(S, 4))}`
      : `\\kS_{25}=${Math.abs(r - 1) < 1e-9 ? '25a' : '\\frac{a(1-r^{25})}{1-r}'}=${n(s25, 2)},\\qquad |r|=${n(Math.abs(r), 2)}\\ge 1:\\ \\text{diverges}`);
  }
  still(d, draw);
})();

/* Figure 9.11 (Example 9.11): Koch's snowflake, the four figures F_{n−3} … F_n side by side (F₀ to F₃ at the
   book's n = 3), the last one large, with the counts and limits of the example. */
(function () {
  const d = sim('sim-koch-snowflake', 560);
  const Ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 0, max: 6, step: 1, value: 3, unit: '', dec: 0, detents: [0, 1, 2, 3] });
  const ro = readout(d);
  const cache = {};
  /* the outline of F_m on the unit triangle, vertices clockwise on the canvas, so each peak points outward */
  const koch = (m) => {
    if (cache[m]) return cache[m];
    let p = [[0, 0], [0.5, -Math.sqrt(3) / 2], [1, 0]];
    for (let s = 0; s < m; s += 1) {
      const q = [];
      p.forEach((a, i) => {
        const b = p[(i + 1) % p.length], dx = (b[0] - a[0]) / 3, dy = (b[1] - a[1]) / 3;
        const u = [a[0] + dx, a[1] + dy], v = [a[0] + 2 * dx, a[1] + 2 * dy];
        const c = Math.cos(-Math.PI / 3), sn = Math.sin(-Math.PI / 3);
        q.push(a, u, [u[0] + dx * c - dy * sn, u[1] + dx * sn + dy * c], v);
      });
      p = q;
    }
    cache[m] = p; return p;
  };
  const paint = (ctx, m, cx, cy, size, w, strong) => {
    const p = koch(m), x0 = cx - size / 2, y0 = cy + (size * Math.sqrt(3)) / 6;
    ctx.save(); ctx.beginPath();
    p.forEach(([x, y], i) => { const X = x0 + x * size, Y = y0 + y * size; if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
    ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, strong ? 0.14 : 0.08); ctx.fill();
    ctx.strokeStyle = strong ? PAL.ink : alpha(PAL.ink, 0.6); ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
  };
  function draw() {
    const { ctx } = begin(d.c);
    const m = Ns.v, first = Math.max(0, m - 3), A = (k) => (Math.sqrt(3) / 4) * (8 / 5 - (3 / 5) * (4 / 9) ** k), Alim = (2 * Math.sqrt(3)) / 5;
    for (let k = first; k <= m; k += 1) {
      const i = k - first, cx = 190 + i * 340, cy = 300, strong = k === m;
      paint(ctx, k, cx, cy, 250, strong ? 2.5 : 2, strong);
      text(ctx, `$F_{${k}}$`, cx, 480, strong ? PAL.ink : PAL.muted, { size: 24, weight: 600, align: 'center', tex: true });
    }
    const N = 3 * 4 ** m, L = 3 * (4 / 3) ** m;
    headline(ctx, `$F_{${m}}$: ${N.toLocaleString('en-US')} sides of length ${m ? `1/${3 ** m}` : '1'}, perimeter ${fmt(L, 2)}, area ${fmt(A(m), 4)} of the limit ${fmt(Alim, 4)}.`);
    ro.set(`L_{${m}}=3\\left(\\tfrac{4}{3}\\right)^{${m}}=${n(L, 3)}\\to\\infty,\\qquad A_{${m}}=\\tfrac{\\sqrt{3}}{4}\\left[\\tfrac{8}{5}-\\tfrac{3}{5}\\left(\\tfrac{4}{9}\\right)^{${m}}\\right]=${n(A(m), 4)}\\to\\tfrac{2\\sqrt{3}}{5}`);
  }
  still(d, draw);
})();

/* Sim: a telescoping series on a number line. Term n is the stretch from b_{n+1} to b_n, one row each; the
   rows lie end to end, so S_k is the stretch from b_{k+1} to b_1. bₙ = 1/n on 0 to 1.1; bₙ = cos(1/n)
   (Example 9.12) on 0.5 to 1.05. */
(function () {
  const d = sim('sim-telescoping', 600);
  const SEQ = {
    inv: { b: (j) => 1 / j, x: [0, 1.1], tex: '\\tfrac{1}{n}', sum: 1, sumtex: '1' },
    cos: { b: (j) => Math.cos(1 / j), x: [0.5, 1.05], tex: '\\cos(\\tfrac{1}{n})', sum: Math.cos(1) - 1, sumtex: '\\cos 1-1' },
  };
  const pick = choice(d.controls, { label: '\\kbseq_{n}', options: [{ value: 'inv', label: '1/n' }, { value: 'cos', label: 'cos(1/n)' }], value: 'inv' });
  const K = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 1, max: 30, step: 1, value: 3, unit: '', dec: 0 });
  const ro = readout(d);
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('series'), sc = C('sequence'), S = SEQ[pick.value], k = K.v;
    const ax = axes(ctx, { l: 200, r: 1200, t: 470, b: 500 }, S.x, [0, 1], { nx: pick.value === 'inv' ? 11 : 11, ny: 0, nice: true });
    line(ctx, ax.box.l, ax.box.b, ax.box.r, ax.box.b, PAL.muted, 2);
    const rows = Math.min(k, 30), dy = Math.min(34, 300 / rows), y0 = 110;
    hits.length = 0;
    for (let j = 1; j <= rows; j += 1) {
      const xa = ax.X(S.b(j)), xb = ax.X(S.b(j + 1)), y = y0 + (j - 0.5) * dy;
      line(ctx, ax.X(S.b(j)), y, ax.X(S.b(j)), ax.box.b, alpha(PAL.ink, 0.12), 1.5);
      line(ctx, xa, y, xb, y, sc, Math.max(3, Math.min(9, dy * 0.45)));
      if (rows <= 6) text(ctx, `$\\kbseq_{${j}}-\\kbseq_{${j + 1}}$`, Math.max(xa, xb) + 14, y, sc, { size: 18, weight: 600, tex: true });
      hits.push({ x: (xa + xb) / 2, y, r: 12, name: `b${j} − b${j + 1} = ${fmt(S.b(j) - S.b(j + 1), 4)}` });
    }
    const xb1 = ax.X(S.b(1)), xbk = ax.X(S.b(k + 1)), yb = y0 + rows * dy + 34;
    line(ctx, xb1, yb, xbk, yb, qc, 5);
    [xb1, xbk].forEach((x) => line(ctx, x, yb - 12, x, yb + 12, qc, 3));
    text(ctx, `$\\kS_{${k}}=${n(S.b(1) - S.b(k + 1), 4)}$`, (xb1 + xbk) / 2, yb + 30, qc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    dot(ctx, xb1, ax.box.b, sc, true, 7); dot(ctx, xbk, ax.box.b, sc, true, 7);
    text(ctx, '$\\kbseq_{1}$', xb1, ax.box.b - 22, sc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, `$\\kbseq_{${k + 1}}$`, xbk, ax.box.b - 22, sc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    const sk = S.b(1) - S.b(k + 1);
    headline(ctx, `k = ${k}: the ${k === 1 ? 'one stretch runs' : `${k} stretches run end to end`} from $\\kbseq_{${k + 1}}=${n(S.b(k + 1), 4)}$ to $\\kbseq_{1}=${n(S.b(1), 4)},$ so $\\kS_{${k}}=${n(sk, 4)}.$`);
    const mid = k <= 3 ? Array.from({ length: k }, (_, i) => `(\\kbseq_{${i + 1}}-\\kbseq_{${i + 2}})`).join('+') + '=' : '';
    ro.set(`\\kS_{${k}}=${mid}\\kbseq_{1}-\\kbseq_{${k + 1}}=${typed('series', n(sk, 4))}\\ \\to\\ ${S.sumtex}=${n(S.sum, 4)}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();
};
