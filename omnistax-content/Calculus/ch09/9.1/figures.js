/* Figures for section 9.1 Sequences. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, label } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const inside = (ax, y) => y >= ax.yr[0] && y <= ax.yr[1];
/* the dots (k, a(k)) for k = k0 … k1 that fall inside the frame */
const dots = (ctx, ax, a, k0, k1, color, r = 8, filled = true) => {
  for (let k = k0; k <= k1; k += 1) { const y = a(k); if (Number.isFinite(y) && inside(ax, y)) dot(ctx, ax.X(k), ax.Y(y), color, filled, r); }
};
const level = (ctx, ax, y, color, w = 3) => line(ctx, ax.box.l, ax.Y(y), ax.box.r, ax.Y(y), color, w, [10, 10]);
const frac = (num, den) => (den === 1 ? `${num}` : `${num < 0 ? '−' : ''}${Math.abs(num)}/${den}`);

/* Figure 9.2: the graph of {2ⁿ}, five points, beside the section's arithmetic sequence 4n − 1 and geometric
   sequence 2(−1/3)ⁿ⁻¹. Each sequence keeps its own frame: 0 to 35, 0 to 22, −1 to 2.2. */
(function () {
  const d = sim('sim-sequence-graph', 480);
  const SEQ = {
    pow: { a: (k) => 2 ** k, y: [0, 35], ny: 7, lab: (k) => `(${k}, ${2 ** k})`, f: '\\kaseq_{n}=2^{n}', r: '\\kaseq_{1}=2,\\ \\kaseq_{n}=2\\kaseq_{n-1}',
      head: 'each term is twice the one before, from $\\kaseq_{1}=2$ to $\\kaseq_{5}=32.$' },
    arith: { a: (k) => 4 * k - 1, y: [0, 22], ny: 11, lab: (k) => `(${k}, ${4 * k - 1})`, f: '\\kaseq_{n}=4n-1', r: '\\kaseq_{1}=3,\\ \\kaseq_{n}=\\kaseq_{n-1}+4',
      head: 'each term is 4 more than the one before, from $\\kaseq_{1}=3$ to $\\kaseq_{5}=19.$' },
    geom: { a: (k) => 2 * (-1 / 3) ** (k - 1), y: [-1, 2.2], ny: 16, lab: (k) => `(${k}, ${frac(2 * (k % 2 ? 1 : -1), 3 ** (k - 1))})`, f: '\\kaseq_{n}=2\\left(-\\tfrac{1}{3}\\right)^{n-1}', r: '\\kaseq_{1}=2,\\ \\kaseq_{n}=-\\tfrac{1}{3}\\kaseq_{n-1}',
      head: 'each term is $-\\frac{1}{3}$ times the one before, so the signs alternate and the terms shrink toward 0.' },
  };
  const pick = choice(d.controls, { label: '\\text{sequence}', options: [{ value: 'pow', label: '2ⁿ' }, { value: 'arith', label: '4n − 1' }, { value: 'geom', label: '2(−1/3)ⁿ⁻¹' }], value: 'pow' });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), S = SEQ[pick.value];
    const ax = axes(ctx, { l: 330, r: 1070, t: 100, b: 420 }, [0, 6], S.y, { xl: 'n', yl: 'aₙ', yc: sc, nx: 6, ny: pick.value === 'geom' ? 8 : pick.value === 'pow' ? 7 : 11, nice: pick.value === 'geom', fy: pick.value === 'geom' ? (v) => fmt(v, 1) : undefined });
    if (S.y[0] < 0) line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
    for (let k = 1; k <= 5; k += 1) {
      const y = S.a(k);
      dot(ctx, ax.X(k), ax.Y(y), sc, true, 9);
      label(ctx, S.lab(k), ax.X(k), ax.Y(y), { side: pick.value === 'geom' && k % 2 === 0 ? 'below' : 'above', size: 18, color: sc, gap: 22 });
    }
    headline(ctx, `$${S.f}:$ ${S.head}`);
    ro.set(`${S.f}\\qquad ${S.r}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 9.3: the four sequences of the text in the book's four panels, N terms each. Panel (a)'s range
   follows N (a zoom: its terms grow without bound); the others keep 0 to 1.1, −1.4 to 1.4, −1.1 to 0.7. */
(function () {
  const d = sim('sim-four-sequences', 680);
  const N = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 5, max: 40, step: 1, value: 5, unit: '', dec: 0, detents: [5] });
  const P = [
    { tag: '(a)', tex: '\\{1+3n\\}', a: (k) => 1 + 3 * k, L: null },
    { tag: '(b)', tex: '\\{1-(\\frac{1}{2})^{n}\\}', a: (k) => 1 - 0.5 ** k, L: 1, y: [0, 1.1], ny: 4 },
    { tag: '(c)', tex: '\\{(-1)^{n}\\}', a: (k) => (k % 2 ? -1 : 1), L: null, y: [-1.4, 1.4], ny: 4 },
    { tag: '(d)', tex: '\\{\\frac{(-1)^{n}}{n}\\}', a: (k) => (k % 2 ? -1 : 1) / k, L: 0, y: [-1.1, 0.7], ny: 4 },
  ];
  const BOX = [{ l: 120, r: 640, t: 150, b: 350 }, { l: 820, r: 1340, t: 150, b: 350 }, { l: 120, r: 640, t: 460, b: 630 }, { l: 820, r: 1340, t: 460, b: 630 }];
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), lc = C('limit'), k1 = N.v, r = k1 <= 10 ? 8 : k1 <= 20 ? 6 : 5;
    P.forEach((p, i) => {
      const yr = p.y ?? [0, 1 + 3 * k1 + 4];
      const ax = axes(ctx, BOX[i], [0, k1 + 1], yr, { xl: 'n', nx: 5, ny: p.ny ?? 4, nice: true });
      if (yr[0] < 0) line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
      if (p.L !== null) { level(ctx, ax, p.L, lc); text(ctx, `$\\kL=${p.L}$`, ax.box.r + 8, ax.Y(p.L) - 16, lc, { size: 18, weight: 600, align: 'right', tex: true, bg: PAL.panel }); }
      dots(ctx, ax, p.a, 1, k1, sc, r);
      text(ctx, `${p.tag} $${p.tex}$`, BOX[i].l + 8, BOX[i].t - 30, sc, { size: 22, weight: 600, tex: true });
    });
    const a = 1 + 3 * k1, b = 1 - 0.5 ** k1, c = k1 % 2 ? -1 : 1, dd = c / k1;
    const gap = 0.5 ** k1 < 1e-4 ? 'less than 0.0001' : fmt(0.5 ** k1, 4);
    headline(ctx, `N = ${k1}: (a) has climbed to ${a}, (b) is within ${gap} of 1, (c) still jumps between −1 and 1, (d) is within ${fmt(1 / k1, 3)} of 0.`);
    ro.set(`\\kaseq_{${k1}}:\\quad ${a},\\quad ${n(b, 5)},\\quad ${c},\\quad ${n(dd, 4)}`);
  }
  still(d, draw);
})();

/* Figure 9.4: the ε–N picture. The book draws no formula; the default is the stand-in aₙ = 2 + 3(−1)ⁿ⁺¹/n,
   whose terms fall above and below L = 2 in the first quadrant as the sketch's do; the choice adds the text's
   1 − (1/2)ⁿ and (−1)ⁿ/n. n runs 1 to 40; the frames are 0 to 5.2, 0 to 1.4 and −1.2 to 1.2. */
(function () {
  const d = sim('sim-epsilon-n', 540);
  const SEQ = {
    stand: { a: (k) => 2 + (3 * (k % 2 ? 1 : -1)) / k, L: 2, y: [0, 5.2], ny: 5, tex: '2+\\frac{3(-1)^{n+1}}{n}' },
    b: { a: (k) => 1 - 0.5 ** k, L: 1, y: [0, 1.4], ny: 7, tex: '1-(\\frac{1}{2})^{n}' },
    d: { a: (k) => (k % 2 ? -1 : 1) / k, L: 0, y: [-1.2, 1.2], ny: 6, tex: '\\frac{(-1)^{n}}{n}' },
  };
  const pick = choice(d.controls, { label: '\\kaseq_{n}', options: [{ value: 'stand', label: '2 + 3(−1)ⁿ⁺¹/n' }, { value: 'b', label: '1 − (1/2)ⁿ' }, { value: 'd', label: '(−1)ⁿ/n' }], value: 'stand' });
  const eps = ctl(d.controls, { label: '\\varepsilon', cls: '', key: 'eps', min: 0.1, max: 1.5, step: 0.01, value: 0.75, unit: '', dec: 2 });
  const ro = readout(d);
  const firstN = (S, e) => { let last = 0; for (let k = 1; k <= 4000; k += 1) if (!(Math.abs(S.a(k) - S.L) < e)) last = k; return last + 1; };
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), lc = C('limit'), S = SEQ[pick.value], e = eps.v, NN = firstN(S, e);
    const ax = axes(ctx, { l: 300, r: 1100, t: 100, b: 450 }, [0, 41], S.y, { xl: 'n', yl: 'aₙ', yc: sc, nx: 8, ny: S.ny, nice: true });
    if (S.y[0] < 0) line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
    const top = Math.min(S.L + e, S.y[1]), bot = Math.max(S.L - e, S.y[0]);
    ctx.save(); ctx.fillStyle = alpha(lc, 0.12); ctx.fillRect(ax.box.l, ax.Y(top), ax.box.r - ax.box.l, ax.Y(bot) - ax.Y(top)); ctx.restore();
    level(ctx, ax, S.L, lc, 3);
    [S.L + e, S.L - e].forEach((y) => { if (inside(ax, y)) line(ctx, ax.box.l, ax.Y(y), ax.box.r, ax.Y(y), alpha(lc, 0.7), 2, [4, 8]); });
    if (ax.Y(S.L) - ax.Y(S.L + e) < 24) text(ctx, '$\\kL\\pm\\varepsilon$', ax.box.r + 14, ax.Y(S.L), lc, { size: 20, weight: 600, tex: true });
    else {
      text(ctx, '$\\kL$', ax.box.r + 14, ax.Y(S.L), lc, { size: 22, weight: 600, tex: true });
      if (inside(ax, S.L + e)) text(ctx, '$\\kL+\\varepsilon$', ax.box.r + 14, ax.Y(S.L + e), lc, { size: 18, weight: 600, tex: true });
      if (inside(ax, S.L - e)) text(ctx, '$\\kL-\\varepsilon$', ax.box.r + 14, ax.Y(S.L - e), lc, { size: 18, weight: 600, tex: true });
    }
    if (NN <= 40) {
      line(ctx, ax.X(NN), ax.box.t, ax.X(NN), ax.box.b, alpha(PAL.ink, 0.45), 2, [4, 8]);
      text(ctx, `N = ${NN}`, ax.X(NN), ax.box.b + 52, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    }
    ctx.save(); ctx.globalAlpha *= 0.35; dots(ctx, ax, S.a, 1, Math.min(NN - 1, 40), sc, 7); ctx.restore();
    dots(ctx, ax, S.a, NN, 40, sc, 7);
    headline(ctx, `ε = ${fmt(e, 2)}: from N = ${NN} on, every term lies within ${fmt(e, 2)} of L = ${S.L}${NN > 40 ? ', past the edge of the frame' : ''}.`);
    ro.set(`|\\kaseq_{n}-\\kL|<\\varepsilon\\ \\text{for all}\\ n\\ge N:\\quad \\left|${S.tex}-${S.L}\\right|<${n(e, 2)}\\ \\text{for}\\ n\\ge ${NN}`);
  }
  still(d, draw);
})();

/* Figure 9.5: a continuous f on a convergent sequence, the text's two cases: f(x) = √x on aₙ = 5 − 3/n² → 5
   (after Checkpoint 9.3) and f(x) = cos x on aₙ = 3/n² → 0 (Example 9.4). Frames 0 to 6 by 0 to 2.6, and
   −0.5 to 3.5 by −1.2 to 1.2. */
(function () {
  const d = sim('sim-continuous-on-sequence', 540);
  const CASE = {
    sqrt: { f: Math.sqrt, a: (k) => 5 - 3 / (k * k), L: 5, fL: Math.sqrt(5), x: [0, 6], y: [0, 2.6], nx: 6, ny: 5, fx: [0, 6], ftex: '\\kf(x)=\\sqrt{x}', atex: '5-\\frac{3}{n^{2}}', fLtex: '\\sqrt{5}', Ltex: '5' },
    cos: { f: Math.cos, a: (k) => 3 / (k * k), L: 0, fL: 1, x: [-0.5, 3.5], y: [-1.2, 1.2], nx: 8, ny: 6, fx: [-0.5, 3.5], ftex: '\\kf(x)=\\cos x', atex: '\\frac{3}{n^{2}}', fLtex: '\\cos 0=1', Ltex: '0' },
  };
  const pick = choice(d.controls, { label: '\\kf', options: [{ value: 'sqrt', label: '√x on 5 − 3/n²' }, { value: 'cos', label: 'cos x on 3/n²' }], value: 'sqrt' });
  const kk = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 12, step: 1, value: 2, unit: '', dec: 0 });
  const ro = readout(d);
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), fc = C('function'), lc = C('limit'), S = CASE[pick.value], k = kk.v;
    const ax = axes(ctx, { l: 300, r: 1100, t: 100, b: 450 }, S.x, S.y, { xl: 'x', yl: 'y', nx: S.nx, ny: S.ny, nice: true });
    if (S.y[0] < 0) line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
    const x0 = Math.max(S.x[0], 0) === 0 && S.x[0] < 0 ? ax.X(0) : ax.box.l, y0 = S.y[0] < 0 ? ax.Y(0) : ax.box.b;
    plot(ctx, ax, S.f, fc, { x: S.fx });
    const ak = S.a(k), fk = S.f(ak);
    line(ctx, ax.X(ak), y0, ax.X(ak), ax.Y(fk), alpha(PAL.ink, 0.45), 2, [4, 8]);
    line(ctx, ax.X(ak), ax.Y(fk), x0, ax.Y(fk), alpha(PAL.ink, 0.45), 2, [4, 8]);
    hits.length = 0;
    for (let j = 1; j <= 12; j += 1) {
      const a = S.a(j), fa = S.f(a), on = j === k;
      if (a < S.x[0] || a > S.x[1]) continue;
      ctx.save(); if (!on) ctx.globalAlpha *= 0.5;
      dot(ctx, ax.X(a), y0, sc, true, on ? 9 : 6); dot(ctx, x0, ax.Y(fa), sc, true, on ? 9 : 6);
      ctx.restore();
      hits.push({ x: ax.X(a), y: y0, r: 10, name: `a${j} = ${fmt(a, 4)}` }, { x: x0, y: ax.Y(fa), r: 10, name: `f(a${j}) = ${fmt(fa, 4)}` });
    }
    dot(ctx, ax.X(ak), ax.Y(fk), fc, true, 8);
    dot(ctx, ax.X(S.L), y0, lc, false, 11); dot(ctx, x0, ax.Y(S.fL), lc, false, 11);
    dot(ctx, ax.X(S.L), ax.Y(S.fL), lc, false, 9);
    text(ctx, `$\\kL=${S.Ltex}$`, ax.X(S.L), y0 + 54, lc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, `$\\kf(\\kL)$`, x0 - 16, ax.Y(S.fL) - 28, lc, { size: 20, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, `$\\kaseq_{${k}}$`, ax.X(ak), y0 + 26, sc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, `$${S.ftex}$`, ax.X(S.fx[1]) - 10, ax.Y(S.f(S.fx[1])) - 28, fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    headline(ctx, `n = ${k}: $\\kaseq_{${k}}=${n(ak, 4)}$ and $\\kf(\\kaseq_{${k}})=${n(fk, 4)},$ approaching $\\kf(\\kL)=${S.fLtex}${pick.value === 'sqrt' ? '\\approx 2.2361' : ''}.$`);
    ro.set(`\\kaseq_{${k}}=${S.atex.replace(/n/g, `${k}`)}=${n(ak, 4)},\\quad \\kf(\\kaseq_{${k}})=${n(fk, 4)}\\to \\kf(\\kL)=${typed('limit', n(S.fL, 4))}`);
  }
  still(d, draw);
})();

/* Figure 9.6: the Squeeze Theorem, Example 9.5's two squeezes, the three sequences in their referent
   colours, n = 1 to 20. Frames −1.1 to 1.1 and −0.6 to 0.6. */
(function () {
  const d = sim('sim-squeeze-sequences', 540);
  const CASE = {
    cos: { lo: (k) => -1 / (k * k), mid: (k) => Math.cos(k) / (k * k), hi: (k) => 1 / (k * k), y: [-1.1, 1.1], tex: ['-1/n^{2}', '(\\cos n)/n^{2}', '1/n^{2}'] },
    half: { lo: (k) => -(0.5 ** k), mid: (k) => (-0.5) ** k, hi: (k) => 0.5 ** k, y: [-0.6, 0.6], tex: ['-1/2^{n}', '(-1/2)^{n}', '1/2^{n}'] },
  };
  const pick = choice(d.controls, { label: '\\text{squeeze}', options: [{ value: 'cos', label: 'cos n/n²' }, { value: 'half', label: '(−1/2)ⁿ' }], value: 'cos' });
  const kk = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 20, step: 1, value: 3, unit: '', dec: 0 });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const lc = C('limit'), S = CASE[pick.value], k = kk.v;
    const cl = F.ref('squeeze-lower'), cm = F.ref('squeeze-middle'), cu = F.ref('squeeze-upper');
    const ax = axes(ctx, { l: 300, r: 1100, t: 110, b: 460 }, [0, 21], S.y, { xl: 'n', nx: 7, ny: 4, nice: true });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
    level(ctx, ax, 0, lc);
    text(ctx, '$\\kL=0$', ax.box.r + 14, ax.Y(0), lc, { size: 20, weight: 600, tex: true });
    const a = S.lo(k), b = S.mid(k), c = S.hi(k);
    line(ctx, ax.X(k), ax.Y(a), ax.X(k), ax.Y(c), alpha(PAL.ink, 0.5), 3);
    [[cl, S.lo], [cu, S.hi], [cm, S.mid]].forEach(([col, f]) => dots(ctx, ax, f, 1, 20, col, 7));
    [[cl, a], [cm, b], [cu, c]].forEach(([col, y]) => dot(ctx, ax.X(k), ax.Y(y), col, true, 10));
    const lx = 860;
    [[cu, `$\\kcseq_{n}=${S.tex[2]}$`, 140], [cm, `$\\kbseq_{n}=${S.tex[1]}$`, 185], [cl, `$\\kaseq_{n}=${S.tex[0]}$`, 230]].forEach(([col, s, y]) => {
      dot(ctx, lx, y, col, true, 8); text(ctx, s, lx + 18, y, col, { size: 22, weight: 600, tex: true, bg: PAL.panel });
    });
    headline(ctx, `n = ${k}: $${n(a, 4)}\\le ${n(b, 4)}\\le ${n(c, 4)}$; the bounds close on 0, and $\\kbseq_{n}$ with them.`);
    ro.set(`\\kaseq_{${k}}=${n(a, 4)}\\ \\le\\ \\kbseq_{${k}}=${n(b, 4)}\\ \\le\\ \\kcseq_{${k}}=${n(c, 4)}`);
  }
  still(d, draw);
})();

/* Figure 9.7: the Monotone Convergence Theorem on the text's sequences: n/(n + 1) increasing and bounded above
   by 1; Example 9.6(b)'s recursion decreasing to 1, bounded below; Example 9.6(a)'s 4ⁿ/n!, decreasing from
   n = 3 and bounded below by 0. A bound M on a slider; n runs 1 to 20. Frames 0 to 1.6, 0 to 2.3, −2.5 to 12. */
(function () {
  const d = sim('sim-monotone-convergence', 520);
  const rec = [2]; for (let k = 1; k < 25; k += 1) rec.push(rec[k - 1] / 2 + 1 / (2 * rec[k - 1]));
  const fact = (k) => { let v = 1; for (let j = 1; j <= k; j += 1) v *= 4 / j; return v; };
  const CASE = {
    inc: { a: (k) => k / (k + 1), L: 1, up: true, y: [0, 1.6], ny: 8, M: { min: 0.5, max: 1.5, value: 1.2 }, tex: '\\frac{n}{n+1}', name: 'n/(n + 1)', how: 'increase' },
    rec: { a: (k) => rec[k - 1], L: 1, up: false, y: [0, 2.3], ny: 5, M: { min: 0, max: 2, value: 0.8 }, tex: '\\frac{\\kaseq_{n-1}}{2}+\\frac{1}{2\\kaseq_{n-1}}', name: 'the recursion', how: 'decrease' },
    fact: { a: fact, L: 0, up: false, y: [-2.5, 12], ny: 6, M: { min: -2, max: 3, value: -0.5 }, tex: '\\frac{4^{n}}{n!}', name: '4ⁿ/n!', how: 'decrease from n = 3' },
  };
  const pick = choice(d.controls, { label: '\\kaseq_{n}', options: [{ value: 'inc', label: 'n/(n + 1)' }, { value: 'rec', label: 'aₙ₊₁ = aₙ/2 + 1/(2aₙ)' }, { value: 'fact', label: '4ⁿ/n!' }], value: 'inc',
    onInput: () => { const r = CASE[pick.value].M; M.range({ min: r.min, max: r.max, step: 0.01, value: r.value }); } });
  const M = ctl(d.controls, { label: 'M', cls: '', key: 'M', min: 0.5, max: 1.5, step: 0.01, value: 1.2, unit: '', dec: 2, specials: [{ at: () => CASE[pick.value].L }] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), lc = C('limit'), S = CASE[pick.value], m = M.v;
    const ax = axes(ctx, { l: 300, r: 1100, t: 100, b: 440 }, [0, 21], S.y, { xl: 'n', yl: 'aₙ', yc: sc, nx: 7, ny: S.ny, nice: true });
    if (S.y[0] < 0) line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
    level(ctx, ax, S.L, lc);
    text(ctx, `$\\kL=${S.L}$`, ax.box.r + 14, ax.Y(S.L), lc, { size: 20, weight: 600, tex: true });
    line(ctx, ax.box.l, ax.Y(m), ax.box.r, ax.Y(m), alpha(PAL.ink, 0.7), 3, [10, 10]);
    text(ctx, `M = ${fmt(m, 2)}`, ax.box.r + 14, ax.Y(m) + (Math.abs(ax.Y(m) - ax.Y(S.L)) < 26 ? (m > S.L ? -24 : 24) : 0), PAL.ink, { size: 20, weight: 600 });
    let first = 0;
    for (let k = 1; k <= 20; k += 1) {
      const y = S.a(k), bad = S.up ? y > m : y < m;
      if (bad && !first) first = k;
      if (inside(ax, y)) dot(ctx, ax.X(k), ax.Y(y), sc, !bad, 7);
    }
    if (!first) { for (let k = 21; k <= 4000 && !first; k += 1) { const y = S.a(k); if (S.up ? y > m : y < m) first = k; } }
    const side = S.up ? 'above' : 'below', cmp = S.up ? '\\le' : '\\ge';
    if (first) {
      headline(ctx, `M = ${fmt(m, 2)} is passed by $\\kaseq_{${first}}=${n(S.a(first), 4)}$${first <= 20 ? '' : ' (past the frame)'}: only an M on the far side of the limit ${S.L} bounds every term from ${side}.`);
      ro.set(`\\kaseq_{${first}}=${n(S.a(first), 4)}\\ ${S.up ? '>' : '<'}\\ M=${n(m, 2)}`);
    } else {
      headline(ctx, `M = ${fmt(m, 2)} bounds every term of ${S.name} from ${side}; the terms ${S.how} to their limit ${S.L}.`);
      ro.set(`\\kaseq_{n}${cmp} M=${n(m, 2)}\\ \\text{for all}\\ n,\\qquad \\lim_{n\\to\\infty}\\kaseq_{n}=\\kL=${typed('limit', S.L)}`);
    }
  }
  still(d, draw);
})();
};
