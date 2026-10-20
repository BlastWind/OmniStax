/* Figures for section 8.4 Dissipation and quantum noise: the Heisenberg-Langevin approach.
   One moving Sim: Brownian momenta under the Langevin equation (8.34) in the rapid-collision limit. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, curve, pinned, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-brownian · moving, 2D, two graphs on one time axis
   dp/dt = −ηp + f(t), ⟨f(t)f(t′)⟩ = 2Dδ(t − t′), stepped exactly (Ornstein–Uhlenbeck):
   p(t + Δ) = p(t)e^{−ηΔ} + σξ, σ² = (D/η)(1 − e^{−2ηΔ}), or 2DΔ at η = 0, so the ensemble
   follows (8.44) p̄² = p(0)²e^{−2ηt} + (D/η)(1 − e^{−2ηt}), and p(0)² + 2Dt at η = 0.
   The book gives no numbers: momentum in ℏk, time in μs. Axes fixed: t 0–100 μs;
   p −60…60 ℏk (the default band ±2√(D/η) = ±20; random-walk traces leave it, clipped);
   p̄² 0–1000 (ℏk)², from the default state (400 relaxing to 100) rather than the extremes:
   p(0) = ±40 starts above it and the default random walk leaves it at 60 μs, both pinned.
===================================================================== */
(function () {
  const d = sim('sim-brownian', 770);
  const T = 100, N = 60, M = 400, DT = T / M, PY = 60, QY = 1000;
  /* fixed draws, so each particle keeps its own history of kicks as the sliders move */
  let seed = 0x5b17e3;
  const rnd = () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const gauss = () => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd());
  const XI = Array.from({ length: N }, () => Float64Array.from({ length: M }, gauss));
  const P = Array.from({ length: N }, () => new Float64Array(M + 1)), MS = new Float64Array(M + 1);

  const eta = ctl(d.controls, { label: '\\keta', cls: 'friction', key: 'eta', min: 0, max: 0.2, step: 0.005, value: 0.05, unit: 'μs⁻¹', dec: 3,
    aria: 'the friction coefficient eta, in inverse microseconds', specials: [{ at: 0, label: 'random walk' }], onInput: () => reset() });
  const D = ctl(d.controls, { label: '\\kDdiff', cls: 'diffusion', key: 'D', min: 1, max: 10, step: 0.5, value: 5, unit: '(ℏk)²/μs', dec: 1,
    aria: 'the diffusion coefficient D, in hbar k squared per microsecond', onInput: () => reset() });
  const p0 = ctl(d.controls, { label: '\\kpcm(0)', cls: 'momentum', key: 'p0', min: -40, max: 40, step: 1, value: 20, unit: 'ℏk', dec: 0,
    aria: 'the momentum every particle starts with, in units of hbar k', onInput: () => reset() });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);

  function histories() {
    const h = eta.v, a = Math.exp(-h * DT), s = h > 0 ? Math.sqrt((D.v / h) * -Math.expm1(-2 * h * DT)) : Math.sqrt(2 * D.v * DT);
    MS.fill(0);
    for (let k = 0; k < N; k++) {
      const p = P[k]; p[0] = p0.v;
      for (let n = 0; n < M; n++) p[n + 1] = a * p[n] + s * XI[k][n];
      for (let n = 0; n <= M; n++) MS[n] += (p[n] * p[n]) / N;
    }
  }
  function reset() { histories(); cy.reset(); }
  histories();
  const at = (arr, t) => { const x = Math.min(M, Math.max(0, t / DT)), i = Math.min(M - 1, Math.floor(x)), u = x - i; return arr[i] * (1 - u) + arr[i + 1] * u; };
  const msq = (t) => { const h = eta.v; return p0.v * p0.v * Math.exp(-2 * h * t) + (h > 0 ? (D.v / h) * -Math.expm1(-2 * h * t) : 2 * D.v * t); };

  const B1 = { l: 170, r: 1250, t: 140, b: 370 }, B2 = { l: 170, r: 1250, t: 460, b: 680 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const tp = Math.min(cy.now(), T), h = eta.v, Dv = D.v, q0 = p0.v;
    const Cm = C('momentum'), Ct = C('time'), guide = alpha(PAL.ink, 0.4);
    const nT = Math.max(2, Math.round((tp / T) * 240));

    /* the momentum of every particle */
    const g1 = axes(ctx, B1, [0, T], [-PY, PY], { nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    text(ctx, '$\\kpcm$ (ℏk)', B1.l, B1.t - 26, Cm, { size: 20, weight: 600, tex: true });
    ctx.save(); ctx.beginPath(); ctx.rect(B1.l, B1.t, B1.r - B1.l, B1.b - B1.t); ctx.clip();
    if (tp > 0) {
      for (let k = N - 1; k >= 1; k--) curve(ctx, (t) => at(P[k], t), 0, tp, g1.X, g1.Y, alpha(Cm, 0.18), 1.5, nT);
      curve(ctx, (t) => at(P[0], t), 0, tp, g1.X, g1.Y, PAL.ink, 2.5, nT);
    }
    ctx.setLineDash([10, 10]);
    curve(ctx, (t) => q0 * Math.exp(-h * t), 0, T, g1.X, g1.Y, Cm, 4, 160);
    ctx.restore();
    const mEnd = q0 * Math.exp(-h * T);
    text(ctx, '$\\overline{\\kpcm}$', B1.r + 16, Math.min(B1.b - 12, Math.max(B1.t + 12, g1.Y(mEnd))), Cm, { size: 22, weight: 600, tex: true });
    hits.push({ x: g1.X(60), y: g1.Y(q0 * Math.exp(-h * 60)), r: 14, name: `the average momentum p(0)e^{−ηt}, ${fmt(q0 * Math.exp(-h * 60), 1)} ℏk at 60 μs` });
    const p1 = at(P[0], tp);
    if (Math.abs(p1) <= PY) { dot(ctx, g1.X(tp), g1.Y(p1), PAL.ink, true, 7); hits.push({ x: g1.X(tp), y: g1.Y(p1), r: 12, name: `the particle traced in ink: ${fmt(p1, 1)} ℏk` }); }

    /* the mean square momentum */
    const g2 = axes(ctx, B2, [0, T], [0, QY], { nx: 5, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    text(ctx, '$\\overline{\\kpcm^2}$ ((ℏk)²)', B2.l, B2.t - 26, Cm, { size: 20, weight: 600, tex: true });
    text(ctx, '$\\kt$ (μs)', B2.r, B2.b + 58, Ct, { size: 20, weight: 600, align: 'right', tex: true });
    const lev = h > 0 ? Dv / h : Infinity;
    ctx.save(); ctx.beginPath(); ctx.rect(B2.l, B2.t, B2.r - B2.l, B2.b - B2.t); ctx.clip();
    if (lev <= QY) line(ctx, B2.l, g2.Y(lev), B2.r, g2.Y(lev), alpha(Cm, 0.7), 3, [10, 10]);
    curve(ctx, msq, 0, T, g2.X, g2.Y, Cm, 5, 200);
    if (tp > 0) curve(ctx, (t) => at(MS, t), 0, tp, g2.X, g2.Y, PAL.ink, 2, nT);
    ctx.restore();
    if (lev <= QY) {
      text(ctx, '$\\kDdiff/\\keta$', B2.r + 16, g2.Y(lev), Cm, { size: 22, weight: 600, tex: true });
      hits.push({ x: g2.X(90), y: g2.Y(lev), r: 12, name: `the equilibrium D/η = ${fmt(lev, 0)} (ℏk)²` });
    }
    const a0 = q0 * q0, xs = fmt(2 * h * tp, 2), e = Math.exp(-Number(xs)), t1 = Math.round(a0 * e), t2 = Math.round(Math.round(lev) * (1 - e));
    const ts = fmt(tp, 1), shown = h > 0 ? t1 + t2 : Math.round(a0 + 2 * Dv * Number(ts));
    const pt = pinned(ctx, B2, g2.X, g2.Y, tp, msq(tp), Cm, msq(tp) > QY ? fmt(shown, 0) : undefined);
    hits.push({ x: pt.x, y: pt.y, r: 14, name: `Eq. (8.44) at ${fmt(tp, 0)} μs: ${fmt(shown, 0)} (ℏk)²` });
    const ms = at(MS, tp);
    if (ms <= QY) { dot(ctx, g2.X(tp), g2.Y(ms), PAL.ink, true, 6); hits.push({ x: g2.X(tp), y: g2.Y(ms), r: 10, name: `the average of p² over the ${N} particles: ${fmt(ms, 0)} (ℏk)²` }); }

    for (const b of [B1, B2]) line(ctx, g1.X(tp), b.t, g1.X(tp), b.b, guide, 2, [4, 8]);

    const hs = fmt(h, 3);
    topline(ctx, h > 0
      ? `$\\keta$ = ${hs} μs⁻¹: the kicks and the drag balance at $\\overline{\\kpcm^2} = \\kDdiff/\\keta$ = ${fmt(lev, 0)} (ℏk)², reached over a few $1/2\\keta$ = ${fmt(1 / (2 * h), 0)} μs.`
      : `$\\keta$ = 0: with no drag the kicks only add up, and $\\overline{\\kpcm^2}$ grows as $2\\kDdiff\\kt$ without limit.`);

    if (h > 0) ro.set(`\\overline{\\kpcm^2} = \\overline{\\kpcm(0)^2}e^{-2\\keta\\kt} + \\frac{\\kDdiff}{\\keta}\\left(1 - e^{-2\\keta\\kt}\\right) = ${fmt(a0, 0)}\\,e^{-${xs}} + ${fmt(lev, 0)}\\left(1 - e^{-${xs}}\\right) = ${t1} + ${t2} = ${shown}\\ (\\hbar\\kkmag)^2`,
      `$\\kDdiff/\\keta = \\km k_B\\kT$ = ${fmt(lev, 0)} (ℏk)²`, { form: 'drag' });
    else ro.set(`\\overline{\\kpcm^2} = \\overline{\\kpcm(0)^2} + 2\\kDdiff\\kt = ${fmt(a0, 0)} + 2 \\times ${fmt(Dv, 1)} \\times ${ts} = ${shown}\\ (\\hbar\\kkmag)^2`, '', { form: 'walk' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 20), draw });
})();
};
