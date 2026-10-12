/* Figures for section 9.6 Ratio and Root Tests. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, select, begin, axes, dot, line, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const sci = (v) => { const [m, e] = v.toExponential(0).split('e'); const sup = String(+e).split('').map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹⁻'['0123456789-'.indexOf(c)]).join(''); return `${m === '1' ? '' : m + '×'}10${sup}`; };

/* Sim: the ratio and root tests on the section's series, n up to 30. Terms are computed through their
   logarithms, ln n! summed directly. The upper frame is 0 to 1.3 (0 to 3.2 for nⁿ/n!); the lower frame
   follows the partial sums (a zoom: those of nⁿ/n! run past 10¹¹). */
(function () {
  const d = sim('sim-ratio-root', 660);
  const LF = [0]; for (let k = 1; k <= 130; k += 1) LF.push(LF[k - 1] + Math.log(k));
  const SER = {
    f2: { l: (k) => k * Math.log(2) - LF[k], sg: () => 1, rho: 0, rt: '0', name: '2ⁿ/n!', tex: '\\frac{2^{n}}{n!}' },
    nn: { l: (k) => k * Math.log(k) - LF[k], sg: () => 1, rho: Math.E, rt: 'e', name: 'nⁿ/n!', tex: '\\frac{n^{n}}{n!}' },
    cc: { l: (k) => 2 * LF[k] - LF[2 * k], sg: (k) => (k % 2 ? -1 : 1), rho: 0.25, rt: '\\frac{1}{4}', name: '(−1)ⁿ(n!)²/(2n)!', tex: '\\frac{(-1)^{n}(n!)^{2}}{(2n)!}' },
    n3: { l: (k) => 3 * Math.log(k) - k * Math.log(3), sg: () => 1, rho: 1 / 3, rt: '\\frac{1}{3}', name: 'n³/3ⁿ', tex: '\\frac{n^{3}}{3^{n}}' },
    pw: { l: (k) => k * Math.log((k * k + 3 * k) / (4 * k * k + 5)), sg: () => 1, rho: 0.25, rt: '\\frac{1}{4}', name: '(n² + 3n)ⁿ/(4n² + 5)ⁿ', tex: '\\frac{(n^{2}+3n)^{n}}{(4n^{2}+5)^{n}}' },
    p2: { l: (k) => -2 * Math.log(k), sg: () => 1, rho: 1, rt: '1', name: '1/n²', tex: '\\frac{1}{n^{2}}' },
  };
  const test = choice(d.controls, { label: '\\text{test}', options: [{ value: 'ratio', label: 'Ratio test' }, { value: 'root', label: 'Root test' }], value: 'ratio' });
  const pick = select(d.controls, { label: '\\kaseq_{n}', options: [{ value: 'f2', label: '2ⁿ/n! (9.23a)' }, { value: 'nn', label: 'nⁿ/n! (9.23b)' }, { value: 'cc', label: '(−1)ⁿ(n!)²/(2n)! (9.23c)' },
    { value: 'n3', label: 'n³/3ⁿ (Checkpoint 9.21)' }, { value: 'pw', label: '(n² + 3n)ⁿ/(4n² + 5)ⁿ (9.24a)' }, { value: 'p2', label: '1/n²' }], value: 'f2' });
  const Nn = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 5, unit: '', dec: 0 });
  const ro = readout(d);
  const span = (vals) => { const lo = Math.min(0, ...vals), hi = Math.max(0, ...vals), pad = 0.08 * (hi - lo || 1); return [lo - pad, hi + pad]; };
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('sequence'), qc = C('series'), lc = C('limit'), S = SER[pick.value], rat = test.value === 'ratio', m = Nn.v;
    const q = (k) => (rat ? Math.exp(S.l(k + 1) - S.l(k)) : Math.exp(S.l(k) / k));
    const top = axes(ctx, { l: 300, r: 1100, t: 110, b: 380 }, [0, 31], [0, pick.value === 'nn' ? 3.2 : 1.3], { yl: rat ? '|aₙ₊₁/aₙ|' : 'ⁿ√|aₙ|', yc: sc, nx: 6, ny: 4, nice: true });
    line(ctx, top.box.l, top.Y(1), top.box.r, top.Y(1), alpha(PAL.ink, 0.5), 2, [4, 8]);
    text(ctx, '1', top.box.r + 14, top.Y(1) + (Math.abs(S.rho - 1) < 0.08 ? 20 : 0), PAL.muted, { size: 18, weight: 600 });
    line(ctx, top.box.l, top.Y(S.rho), top.box.r, top.Y(S.rho), lc, 3, [10, 10]);
    text(ctx, `$\\krho=${S.rt}$`, top.box.r + 14, top.Y(S.rho) - (Math.abs(S.rho - 1) < 0.08 ? 10 : 0), lc, { size: 20, weight: 600, tex: true });
    for (let k = 1; k <= 30; k += 1) { const v = q(k); if (v <= top.yr[1]) dot(ctx, top.X(k), top.Y(v), sc, true, k === m ? 10 : 5); }
    const sums = []; let s = 0; for (let k = 1; k <= 30; k += 1) { s += S.sg(k) * Math.exp(S.l(k)); sums.push(s); }
    const bot = axes(ctx, { l: 300, r: 1100, t: 460, b: 600 }, [0, 31], span(sums), { xl: 'n', yl: 'Sₙ', yc: qc, nx: 6, ny: 2, nice: true, fy: (v) => (Math.abs(v) >= 1e5 ? sci(v) : fmt(v, Math.abs(v) < 10 ? 1 : 0)) });
    if (bot.yr[0] < 0) line(ctx, bot.box.l, bot.Y(0), bot.box.r, bot.Y(0), PAL.muted, 2);
    sums.forEach((v, i) => dot(ctx, bot.X(i + 1), bot.Y(v), qc, true, 5));
    const v = q(m), verdict = S.rho < 1 ? `ρ = ${S.rho ? fmt(S.rho, 4).replace(/0+$/, '') : '0'} < 1, so the series converges absolutely` : S.rho > 1 ? 'ρ = e > 1, so the series diverges' : 'ρ = 1, so the test does not decide: this series converges, as a p-series with p = 2';
    headline(ctx, `${rat ? 'Ratio' : 'Root'} test on ${S.name}: at n = ${m} the ${rat ? 'ratio' : 'root'} is ${fmt(v, 4)}, and ${verdict}.`);
    ro.set(rat ? `\\left|\\frac{\\kaseq_{${m + 1}}}{\\kaseq_{${m}}}\\right|=${typed('sequence', n(v, 4))}\\to\\krho=${S.rt}` : `\\sqrt[${m}]{|\\kaseq_{${m}}|}=${typed('sequence', n(v, 4))}\\to\\krho=${S.rt}`, undefined, { form: test.value });
  }
  still(d, draw);
})();
};
