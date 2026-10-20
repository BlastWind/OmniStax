/* Figures for section 8.5 The Heisenberg-Langevin formalism applied to Doppler cooling.
   The book gives no numbers: frequencies are in units of γ₁₂ (γ₁₂ = γ/2, radiative broadening),
   D in (ħk)²γ₁₂, m|η| in ħk², k_BT_D in ħγ₁₂. The figure uses |η| and |δ| (correction c-eq-8-95). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.5'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, curve, vbracket, hover, tex } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-doppler-limit · still, 2D, two graphs on one δ axis
   D/(ħk)²γ₁₂ = 4Ω²/(1 + δ²)            Eq. (8.91), Ω̃ = 2Ω, γ/2 = γ₁₂
   m|η|/ħk²   = 8Ω²|δ|/(1 + δ²)²        Eq. (8.93) with R_opt = 2Ω²/(1 + δ²)
   k_BT_D/ħγ₁₂ = (1 + δ²)/2|δ|          Eq. (8.95), corrected
   Axes fixed: δ −5…0; above log₁₀ −4…0 (the sliders reach 5.9 × 10⁻⁴ to 0.96);
   below 0…3 (the ends of the δ range reach 2.6).
===================================================================== */
(function () {
  const d = sim('sim-doppler-limit', 700);
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -5, max: -0.2, step: 0.01, value: -1, unit: 'γ₁₂', dec: 2,
    aria: 'the detuning, in units of gamma 1 2', specials: [{ at: -1, label: 'optimum' }] });
  const om = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0.1, max: 0.5, step: 0.01, value: 0.3, unit: 'γ₁₂', dec: 2,
    aria: 'the Rabi frequency of each beam, in units of gamma 1 2' });
  const hits = []; hover(d.stage, () => hits, d.c);
  const A = { l: 190, r: 1300, t: 110, b: 340 };
  const B = { l: 190, r: 1300, t: 410, b: 610 };
  const Dp = (x, o2) => (4 * o2) / (1 + x * x);
  const Ep = (x, o2) => (8 * o2 * Math.abs(x)) / (1 + x * x) ** 2;
  const Tp = (x) => (1 + x * x) / (2 * Math.abs(x));
  const pow = (v) => (v === 0 ? '1' : '10^{−' + -v + '}');
  const sig = (v) => Number(v.toPrecision(3));
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const cD = C('diffusion'), cE = C('friction'), cT = C('temperature');
    const o2 = om.v * om.v, x0 = dl.v;
    /* above: heating and friction on one log scale */
    const top = axes(ctx, A, [-5, 0], [-4, 0], { nx: 0, ny: 4, fy: pow });
    text(ctx, '$\\kDdiff/(\\hbar\\kkmag)^2\\kgammaonetwo$ and $\\km|\\keta|/\\hbar\\kkmag^2$, logarithmic', A.l, A.t - 24, PAL.ink, { size: 20, weight: 600, tex: true });
    curve(ctx, (x) => Math.log10(Dp(x, o2)), -5, -0.2, top.X, top.Y, cD, 5, 200);
    curve(ctx, (x) => Math.log10(Ep(x, o2)), -5, -0.2, top.X, top.Y, cE, 5, 200);
    /* the curve names stand clear of the drop line: at the left end, or mid-way when δ is there */
    const xl = dl.v < -3.6 ? -2.4 : -4.6;
    text(ctx, '$\\kDdiff$', top.X(xl), top.Y(Math.log10(Dp(xl, o2))) - 22, cD, { size: 22, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\km|\\keta|$', top.X(xl), top.Y(Math.log10(Ep(xl, o2))) + 24, cE, { size: 22, weight: 600, align: 'center', tex: true });
    /* below: their ratio, the temperature */
    const bot = axes(ctx, B, [-5, 0], [0, 3], { nx: 5, ny: 3, fx: (v) => (v === 0 ? '0' : '−' + fmt(-v, 0)) });
    text(ctx, '$k_B\\kTD/\\hbar\\kgammaonetwo$', B.l, B.t - 24, cT, { size: 20, weight: 600, tex: true });
    text(ctx, '$\\kdelta/\\kgammaonetwo$', B.r, B.b + 58, C('frequency'), { size: 20, weight: 600, align: 'right', tex: true });
    line(ctx, B.l, bot.Y(1), B.r, bot.Y(1), alpha(cT, 0.55), 2, [10, 10]);
    text(ctx, 'Doppler limit $\\hbar\\kgammaonetwo$', B.r - 8, bot.Y(1) + 22, cT, { size: 17, align: 'right', tex: true });
    curve(ctx, Tp, -5, -0.2, bot.X, bot.Y, cT, 5, 200);
    /* the present detuning through both */
    const X = top.X(x0), D = Dp(x0, o2), E = Ep(x0, o2), T = Tp(x0);
    const yD = top.Y(Math.log10(D)), yE = top.Y(Math.log10(E)), yT = bot.Y(T);
    line(ctx, X, A.t, X, B.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    if (yE - yD > 18) { vbracket(ctx, X + 24, yD, yE, cT); text(ctx, '$k_B\\kTD$', X + 42, (yD + yE) / 2, cT, { size: 20, weight: 600, tex: true, bg: PAL.panel }); }
    dot(ctx, X, yD, cD, true, 9); dot(ctx, X, yE, cE, true, 9); dot(ctx, X, yT, cT, true, 10);
    hits.push({ x: X, y: yD, r: 18, name: `momentum diffusion D = ${sig(D)} (ħk)²γ₁₂` });
    hits.push({ x: X, y: yE, r: 18, name: `friction m|η| = ${sig(E)} ħk²` });
    hits.push({ x: X, y: yT, r: 18, name: `temperature k_BT_D = ${fmt(T, 2)} ħγ₁₂` });
    if (yE - yD > 18) hits.push({ x: X + 24, y: (yD + yE) / 2, r: 20, name: 'the gap between the curves: log of k_BT_D in units of ħγ₁₂' });
    /* headline and readout; the result is the ratio of the numbers shown */
    const Ds = sig(D), Es = sig(E), Ts = Ds / Es, at = Math.abs(x0 + 1) < 0.005;
    topline(ctx, at
      ? 'At the optimal detuning $\\kdelta = -\\kgammaonetwo$ heating and friction balance at the Doppler limit, $k_B\\kTD = \\hbar\\kgammaonetwo$.'
      : `At $\\kdelta = -${fmt(-x0, 2)}\\,\\kgammaonetwo$ heating and friction balance at $k_B\\kTD = ${fmt(Ts, 2)}\\,\\hbar\\kgammaonetwo$.`);
    tex(d.readout, `k_B\\kTD = \\frac{\\kDdiff}{\\km|\\keta|} = \\frac{${Ds}\\,(\\hbar\\kkmag)^2\\kgammaonetwo}{${Es}\\,\\hbar\\kkmag^2} = ${fmt(Ts, 2)}\\,\\hbar\\kgammaonetwo`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
