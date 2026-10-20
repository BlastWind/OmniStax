/* Figures for section 6.2 Example: Decay of a two-level atom. The book draws none. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-no-jump · still, 2D, graph alone
   Eq. (6.26) with γ = 1 and b = |a₂|²: the no-jump population
   p₂ = b e^{−t}/(1 − b + b e^{−t}), the chance of no photon yet
   1 − b + b e^{−t} (the squared norm), and their product b e^{−t},
   the average. Half-times: ln 2 for the average, ln((2 − b)/(1 − b))
   for the no-jump curve. Axes fixed: t 0–5/γ, p₂ 0–1.
===================================================================== */
(function () {
  const d = sim('sim-no-jump', 560);
  const T = 5;
  const bS = ctl(d.controls, { label: '|\\katwo|^2', cls: 'population', key: 'a2', min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2,
    aria: 'the initial population of the excited state, the squared amplitude a2' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 130, r: 980, t: 120, b: 470 };
  const LX = 1030;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const b = bS.v, a = 1 - b;
    const noJump = (t) => (b ? b * Math.exp(-t) / (a + b * Math.exp(-t)) : 0);
    const avg = (t) => b * Math.exp(-t);
    const none = (t) => a + b * Math.exp(-t);
    const pop = C('population');
    const { X, Y } = axes(ctx, BOX, [0, T], [0, 1], { nx: 5, ny: 4, xc: C('time'), yc: pop, fy: (v) => fmt(v, 2) });
    text(ctx, '$\\kt$ (1/$\\kgamma$)', BOX.r, BOX.b + 58, C('time'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kptwo$', BOX.l, BOX.t - 26, pop, { size: 22, weight: 600, tex: true });
    curve(ctx, none, 0, T, X, Y, alpha(pop, 0.4), 3, 200);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, avg, 0, T, X, Y, pop, 3, 200); ctx.restore();
    curve(ctx, noJump, 0, T, X, Y, pop, 5, 200);
    const tA = Math.LN2, tN = b < 1 ? Math.log((2 - b) / (1 - b)) : Infinity;
    if (b > 0) {
      const yh = Y(b / 2), tEnd = Math.min(T, tN);
      line(ctx, X(0), yh, X(tEnd), yh, alpha(PAL.ink, 0.35), 2, [4, 8]);
      [[tA, 'the average at half its start: t = ' + fmt(tA, 2) + '/γ'], [tN, 'p₂ with no photon, at half its start: t = ' + fmt(tN, 2) + '/γ']].forEach(([t, name]) => {
        if (t > T) return;
        line(ctx, X(t), yh, X(t), Y(0), alpha(PAL.ink, 0.35), 2, [4, 8]);
        dot(ctx, X(t), yh, pop, true, 10);
        hits.push({ x: X(t), y: yh, r: 16, name });
      });
    }
    const keys = [
      ['$\\kptwo$ if no photon', (y) => line(ctx, LX, y, LX + 44, y, pop, 5)],
      ['no photon yet', (y) => line(ctx, LX, y, LX + 44, y, alpha(pop, 0.4), 3)],
      ['average', (y) => line(ctx, LX, y, LX + 44, y, pop, 3, [10, 10])],
    ];
    keys.forEach(([name, mark], k) => { const y = BOX.t + 20 + 44 * k; mark(y); text(ctx, name, LX + 60, y, PAL.ink, { size: 20, base: 'middle', tex: true }); });
    if (b === 0) topline(ctx, 'With $|\\katwo|^2$ = 0 the atom starts in $|1\\rangle$: nothing decays and no photon comes.');
    else if (b === 1) topline(ctx, 'Started in $|2\\rangle$, an atom that emits no photon stays there: $\\kptwo$ = 1 until it jumps.');
    else topline(ctx, `With no photon, $\\kptwo$ falls to half its start by $\\kt$ = ${fmt(tN, 2)}/$\\kgamma$; the average, by ${fmt(tA, 2)}/$\\kgamma$.`);
    const B = fmt(b, 2), A = fmt(a, 2);
    ro.set(`\\kptwo = \\frac{|\\katwo|^2e^{-\\kgamma\\kt}}{|\\kaone|^2 + |\\katwo|^2e^{-\\kgamma\\kt}} = \\frac{${B}\\,e^{-\\kgamma\\kt}}{${A} + ${B}\\,e^{-\\kgamma\\kt}}`,
      `Times the chance $|\\kaone|^2 + |\\katwo|^2e^{-\\kgamma\\kt}$ that no photon has come, it is $${B}\\,e^{-\\kgamma\\kt}$, the average over trajectories.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
