/* Figures for section 9.4 Comparison Tests. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.4'] = function (root, F) {
const { C, PAL, ctl, choice, select, begin, axes, dot, line, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const level = (ctx, ax, y, color, w = 3) => line(ctx, ax.box.l, ax.Y(y), ax.box.r, ax.Y(y), color, w, [10, 10]);

/* Figure 9.16: the partial sums of the given series and of the series it is compared with, their terms below,
   k up to 30. (a) Σ1/(n² + 1) under Σ1/n², frames 0 to 1.8 and 0 to 1.1; (b) Σ1/(n − 1/2) over Σ1/n, frames 0 to 6 and 0 to 2.1. */
(function () {
  const d = sim('sim-comparison', 640);
  const CASE = {
    a: { g: (j) => 1 / (j * j + 1), k: (j) => 1 / (j * j), top: [0, 1.8], bot: [0, 1.1], gt: '\\frac{1}{n^{2}+1}', kt: '\\frac{1}{n^{2}}', rel: '\\lt', gname: 'Σ1/(n² + 1)', kname: 'Σ1/n², a p-series with p = 2' },
    b: { g: (j) => 1 / (j - 0.5), k: (j) => 1 / j, top: [0, 6], bot: [0, 2.1], gt: '\\frac{1}{n-1/2}', kt: '\\frac{1}{n}', rel: '\\gt', gname: 'Σ1/(n − 1/2)', kname: 'Σ1/n, the harmonic series' },
  };
  const pick = choice(d.controls, { label: '\\text{panel}', options: [{ value: 'a', label: '(a) Σ1/(n² + 1)' }, { value: 'b', label: '(b) Σ1/(n − 1/2)' }], value: 'a' });
  const K = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 1, max: 30, step: 1, value: 8, unit: '', dec: 0, detents: [8] });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const cg = F.ref('cmp-given'), ck = F.ref('cmp-known'), S = CASE[pick.value], k = K.v, r = k <= 10 ? 8 : 6;
    const top = axes(ctx, { l: 300, r: 1100, t: 110, b: 370 }, [0, 31], S.top, { yl: 'Sₖ', yc: C('series'), nx: 6, ny: 4, nice: true });
    const bot = axes(ctx, { l: 300, r: 1100, t: 450, b: 580 }, [0, 31], S.bot, { xl: 'n', yl: 'terms', nx: 6, ny: 2, nice: true });
    let sg = 0, sk = 0;
    for (let j = 1; j <= k; j += 1) {
      sg += S.g(j); sk += S.k(j);
      dot(ctx, top.X(j), top.Y(sk), ck, true, r); dot(ctx, top.X(j), top.Y(sg), cg, true, r);
      dot(ctx, bot.X(j), bot.Y(S.k(j)), ck, true, r - 2); dot(ctx, bot.X(j), bot.Y(S.g(j)), cg, true, r - 2);
    }
    text(ctx, `● ${S.gname}`, 1120, 150, cg, { size: 20, weight: 600 });
    text(ctx, `● ${S.kname.split(',')[0]}`, 1120, 186, ck, { size: 20, weight: 600 });
    headline(ctx, pick.value === 'a' ? `k = ${k}: ${fmt(sg, 4)} < ${fmt(sk, 4)}; the smaller partial sums are bounded by those of the convergent p-series, so Σ1/(n² + 1) converges.`
      : `k = ${k}: ${fmt(sg, 4)} > ${fmt(sk, 4)}; the larger partial sums outgrow those of the divergent harmonic series, so Σ1/(n − 1/2) diverges.`);
    ro.set(`\\sum_{n=1}^{${k}}${S.gt}=${typed('series', n(sg, 4))}\\ ${S.rel}\\ \\sum_{n=1}^{${k}}${S.kt}=${typed('series', n(sk, 4))}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Sim: the limit comparison test, the ratio aₙ/bₙ of the section's pairs against n, up to 60, with its limit L.
   Each pair keeps its own frame. */
(function () {
  const d = sim('sim-limit-comparison', 540);
  const PAIR = {
    sq: { a: (j) => 1 / (j * j - 1), b: (j) => 1 / (j * j), n0: 2, L: 1, y: [0.9, 1.4], at: '\\frac{1}{n^{2}-1}', bt: '\\frac{1}{n^{2}}', end: 'L = 1 ≠ 0 and Σ1/n² converges, so Σ1/(n² − 1) converges.' },
    root: { a: (j) => 1 / (Math.sqrt(j) + 1), b: (j) => 1 / Math.sqrt(j), n0: 1, L: 1, y: [0, 1.1], at: '\\frac{1}{\\sqrt{n}+1}', bt: '\\frac{1}{\\sqrt{n}}', end: 'L = 1 ≠ 0 and Σ1/√n diverges, so Σ1/(√n + 1) diverges.' },
    geo: { a: (j) => (2 ** j + 1) / 3 ** j, b: (j) => (2 / 3) ** j, n0: 1, L: 1, y: [0.9, 1.6], at: '\\frac{2^{n}+1}{3^{n}}', bt: '(\\frac{2}{3})^{n}', end: 'L = 1 ≠ 0 and Σ(2/3)ⁿ converges, so Σ(2ⁿ + 1)/3ⁿ converges.' },
    ln1: { a: (j) => Math.log(j) / (j * j), b: (j) => 1 / j, n0: 1, L: 0, y: [0, 0.4], at: '\\frac{\\ln n}{n^{2}}', bt: '\\frac{1}{n}', end: 'L = 0 but Σ1/n diverges: no information.' },
    ln2: { a: (j) => Math.log(j) / (j * j), b: (j) => 1 / (j * j), n0: 1, L: null, y: [0, 4.5], at: '\\frac{\\ln n}{n^{2}}', bt: '\\frac{1}{n^{2}}', end: 'the ratio ln n grows without bound, but Σ1/n² converges: no information.' },
    ln3: { a: (j) => Math.log(j) / (j * j), b: (j) => 1 / j ** 1.5, n0: 1, L: 0, y: [0, 0.8], at: '\\frac{\\ln n}{n^{2}}', bt: '\\frac{1}{n^{3/2}}', end: 'L = 0 and Σ1/n³ᐟ² converges, so Σ ln n/n² converges.' },
  };
  const pick = select(d.controls, { label: '\\text{pair}', options: [{ value: 'sq', label: '1/(n² − 1) with 1/n²' }, { value: 'root', label: '9.18(a): 1/(√n + 1) with 1/√n' }, { value: 'geo', label: '9.18(b): (2ⁿ + 1)/3ⁿ with (2/3)ⁿ' },
    { value: 'ln1', label: '9.18(c): ln n/n² with 1/n' }, { value: 'ln2', label: '9.18(c): ln n/n² with 1/n²' }, { value: 'ln3', label: '9.18(c): ln n/n² with 1/n³ᐟ²' }], value: 'sq' });
  const Nn = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 60, step: 1, value: 10, unit: '', dec: 0 });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), lc = C('limit'), P = PAIR[pick.value], m = Math.max(P.n0, Nn.v);
    const ax = axes(ctx, { l: 300, r: 1100, t: 110, b: 450 }, [0, 61], P.y, { xl: 'n', yl: 'aₙ/bₙ', yc: sc, nx: 6, ny: 5, nice: true });
    if (P.L !== null) { level(ctx, ax, P.L, lc); text(ctx, `$\\kL=${P.L}$`, ax.box.r + 14, ax.Y(P.L), lc, { size: 20, weight: 600, tex: true }); }
    for (let j = P.n0; j <= 60; j += 1) {
      const v = P.a(j) / P.b(j); if (v < P.y[0] || v > P.y[1]) continue;
      dot(ctx, ax.X(j), ax.Y(v), sc, true, j === m ? 10 : 5);
    }
    const v = P.a(m) / P.b(m);
    line(ctx, ax.X(m), ax.box.b, ax.X(m), ax.Y(Math.min(Math.max(v, P.y[0]), P.y[1])), PAL.muted, 2, [4, 8]);
    headline(ctx, `n = ${m}: the ratio is ${fmt(v, 4)}; ${P.end}`);
    ro.set(`\\frac{\\kaseq_{${m}}}{\\kbseq_{${m}}}=\\frac{${P.at}}{${P.bt}}\\Big|_{n=${m}}=${typed('sequence', n(v, 4))}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();
};
