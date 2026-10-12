/* Figures for section 9.5 Alternating Series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, dot, line, arrow, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Figure 9.17 + 9.18: the partial sums of an alternating series as jumps along a number line, one row per term:
   bₙ = 1/n (the alternating harmonic series, S = ln 2) or bₙ = 1/n² (Example 9.20, S = π²/12). Line 0 to 1.05. */
(function () {
  const d = sim('sim-alternating', 600);
  const SER = {
    inv: { b: (j) => 1 / j, S: Math.log(2), St: '\\ln 2', bt: (j) => (j === 1 ? '1' : `\\tfrac{1}{${j}}`) },
    sq: { b: (j) => 1 / (j * j), S: (Math.PI * Math.PI) / 12, St: '\\tfrac{\\pi^{2}}{12}', bt: (j) => (j === 1 ? '1' : `\\tfrac{1}{${j * j}}`) },
  };
  const pick = choice(d.controls, { label: '\\kbseq_{n}', options: [{ value: 'inv', label: '1/n' }, { value: 'sq', label: '1/n²' }], value: 'inv' });
  const Nn = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 20, step: 1, value: 5, unit: '', dec: 0, detents: [5] });
  const ro = readout(d);
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('series'), sc = C('sequence'), lc = C('limit'), ec = C('error'), S = SER[pick.value], N = Nn.v;
    const ax = axes(ctx, { l: 200, r: 1200, t: 500, b: 520 }, [0, 1.05], [0, 1], { nx: 11, ny: 0, nice: true });
    line(ctx, ax.box.l, ax.box.b, ax.box.r, ax.box.b, PAL.muted, 2);
    const dy = Math.min(42, 330 / N), y0 = 100;
    line(ctx, ax.X(S.S), y0 - 10, ax.X(S.S), ax.box.b, lc, 3, [10, 10]);
    text(ctx, `$\\kSsum=${S.St}$`, ax.X(S.S), y0 - 26, lc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    hits.length = 0;
    let s = 0;
    for (let k = 1; k <= N; k += 1) {
      const t = (k % 2 ? 1 : -1) * S.b(k), y = y0 + (k - 0.5) * dy, xa = ax.X(s), xb = ax.X(s + t);
      if (k > 1) line(ctx, xa, y - dy, xa, y, alpha(PAL.ink, 0.25), 1.5, [3, 5]);
      arrow(ctx, xa, y, xb, y, sc, Math.max(2.5, Math.min(4, dy / 9)));
      s += t;
      dot(ctx, xb, y, qc, true, Math.min(8, dy / 4 + 3));
      if (N <= 6) {
        text(ctx, `$${t > 0 ? '+' : '-'}${S.bt(k)}$`, (xa + xb) / 2, y - 16, sc, { size: 18, weight: 600, align: 'center', tex: true, bg: PAL.panel });
        text(ctx, `$\\kS_{${k}}$`, xb + (t > 0 ? 18 : -18), y, qc, { size: 18, weight: 600, align: t > 0 ? 'left' : 'right', tex: true, bg: PAL.panel });
      }
      hits.push({ x: xb, y, r: 10, name: `S${k} = ${fmt(s, 4)}` });
    }
    const err = Math.abs(S.S - s), bn = S.b(N + 1), yb = ax.box.b - 34;
    line(ctx, ax.X(Math.min(s, S.S)), yb, ax.X(Math.max(s, S.S)), yb, ec, 6);
    dot(ctx, ax.X(s), ax.box.b, qc, true, 8);
    text(ctx, `$\\kS_{${N}}$`, ax.X(s), ax.box.b + 54, qc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, `$|\\kR_{${N}}|$`, ax.X(Math.max(s, S.S)) + 14, yb, ec, { size: 18, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    headline(ctx, `N = ${N}: $\\kS_{${N}}=${n(s, 4)},$ ${fmt(err, 4)} from $\\kSsum=${n(S.S, 4)},$ within $\\kbseq_{${N + 1}}=${n(bn, 4)}.$`);
    ro.set(`|\\kR_{${N}}|=|\\kSsum-\\kS_{${N}}|=${typed('error', n(err, 4))}\\ \\le\\ \\kbseq_{${N + 1}}=${S.bt(N + 1)}=${n(bn, 4)}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Sim: the alternating harmonic series rearranged to reach a target: positive terms 1, 1/3, 1/5, … while the sum
   is below the target, negative terms −1/2, −1/4, … while it is not; 200 terms, frame 0 to 200 by −1.6 to 3. */
(function () {
  const d = sim('sim-rearrangement', 540);
  const L2 = Math.log(2);
  const A = ctl(d.controls, { label: '\\text{target}', cls: '', key: 'target', min: -1, max: 2.5, step: 0.0001, value: 1.5 * L2, unit: '', dec: 4,
    detents: [{ v: L2, label: 'ln 2' }, { v: 1.5 * L2, label: '3 ln 2/2' }], snap: true });
  const ro = readout(d);
  const M = 200;
  const plan = (tgt) => {
    let s = 0, p = 1, q = 2; const terms = [], sums = [];
    for (let m = 0; m < M; m += 1) {
      if (s < tgt) { terms.push(1 / p); s += 1 / p; p += 2; } else { terms.push(-1 / q); s -= 1 / q; q += 2; }
      sums.push(s);
    }
    return { terms, sums };
  };
  const own = []; { let s = 0; for (let j = 1; j <= M; j += 1) { s += (j % 2 ? 1 : -1) / j; own.push(s); } }
  const frac = (t) => (Math.abs(Math.abs(t) - 1) < 1e-12 ? '1' : `\\tfrac{1}{${Math.round(1 / Math.abs(t))}}`);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('series'), lc = C('limit'), tgt = A.v, R = plan(tgt);
    const ax = axes(ctx, { l: 300, r: 1100, t: 110, b: 450 }, [0, M], [-1.6, 3], { xl: 'n', yl: 'Sₙ', yc: qc, nx: 4, ny: 4, nice: true });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), PAL.muted, 2);
    line(ctx, ax.box.l, ax.Y(L2), ax.box.r, ax.Y(L2), alpha(PAL.ink, 0.45), 2, [10, 10]);
    text(ctx, 'ln 2', ax.box.r + 14, ax.Y(L2) + (Math.abs(ax.Y(L2) - ax.Y(tgt)) < 24 ? 18 : 0), PAL.muted, { size: 18, weight: 600 });
    line(ctx, ax.box.l, ax.Y(tgt), ax.box.r, ax.Y(tgt), lc, 3, [10, 10]);
    text(ctx, `target ${fmt(tgt, 4)}`, ax.box.r + 14, ax.Y(tgt) - (Math.abs(ax.Y(L2) - ax.Y(tgt)) < 24 ? 18 : 0), lc, { size: 18, weight: 600 });
    ctx.save(); ctx.globalAlpha *= 0.3; own.forEach((v, i) => dot(ctx, ax.X(i + 1), ax.Y(v), PAL.ink, true, 3)); ctx.restore();
    R.sums.forEach((v, i) => dot(ctx, ax.X(i + 1), ax.Y(v), qc, true, 3.5));
    const sM = R.sums[M - 1];
    headline(ctx, `Target ${fmt(tgt, 4)}: after ${M} terms the rearranged sum is ${fmt(sM, 4)}; in its own order the series gives ${fmt(own[M - 1], 4)}, near ln 2.`);
    const first = R.terms.slice(0, 8).map((t, i) => `${i && t > 0 ? '+' : t < 0 ? '-' : ''}${frac(t)}`).join('');
    ro.set(`${first}+\\cdots,\\qquad \\kS_{${M}}=${typed('series', n(sM, 4))}`);
  }
  still(d, draw);
})();
};
