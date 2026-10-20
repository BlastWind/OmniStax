/* Figures for section 2.2 Bound to Continuum Transitions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, curve, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM: |1⟩ decaying into a flat continuum. Moving: the clock is t,
   0 to 8 μs. The continuum is 81 levels spaced DW = 0.15 μs⁻¹ in δ_k,
   |Ω_k|² = γ·DW/2π from Eq. (2.51); its recurrence time 2π/DW ≈ 42 μs
   lies beyond the window, so Eq. (2.54) holds for every bar, and summed
   over a flat continuum it gives Σ|c_k|² = 1 − e^{−γt} exactly.
   Axes fixed: t 0–8 μs, population 0–1; δ_k −6–6 μs⁻¹, |c_k|² 0–0.2
   (the long-time peak 2·DW/(πγ) is 0.19 at the smallest γ, 0.5).
===================================================================== */
(function () {
  const d = sim('sim-continuum-decay', 560);
  const T = 8, DW = 0.15, NK = 81, D0 = -6;
  const cy = cycle(() => T, 1.2);
  const g = ctl(d.controls, { label: '\\kgamma', cls: 'rate', min: 0.5, max: 2, step: 0.05, value: 1, unit: 'μs⁻¹', dec: 2, onInput: () => cy.reset() });
  const ro = F.readout(d);
  const LT = { l: 130, r: 500, t: 150, b: 470 }, RT = { l: 690, r: 1330, t: 150, b: 470 };
  /* |c_k(t)|² from Eq. (2.54): |Ω_k|² |1 − e^{−(γ/2 + iδ)t}|² / (γ²/4 + δ²) */
  const ck2 = (gm, dl, t) => (gm * DW / (2 * Math.PI)) * (1 - 2 * Math.exp(-gm * t / 2) * Math.cos(dl * t) + Math.exp(-gm * t)) / (gm * gm / 4 + dl * dl);
  const lor = (gm, dl) => (gm * DW / (2 * Math.PI)) / (gm * gm / 4 + dl * dl);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const gm = g.v, t = cy.now(), p1 = Math.exp(-gm * t);
    const cb = F.ref('bound-1'), ck = F.ref('continuum-k');
    /* left: p₁ and Σ|c_k|², faint in full, bold up to t */
    const L = axes(ctx, LT, [0, T], [0, 1], {
      nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2),
      xl: 't (μs)', xc: C('time'), yl: 'population', yc: C('population'),
    });
    const P = (s) => Math.exp(-gm * s), S = (s) => 1 - Math.exp(-gm * s);
    curve(ctx, P, 0, T, L.X, L.Y, alpha(cb, 0.3), 3, 120);
    curve(ctx, S, 0, T, L.X, L.Y, alpha(ck, 0.3), 3, 120);
    if (t > 0) {
      curve(ctx, P, 0, t, L.X, L.Y, cb, 5, 120);
      ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, S, 0, t, L.X, L.Y, ck, 5, 120); ctx.restore();
    }
    line(ctx, L.X(t), LT.t, L.X(t), LT.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, L.X(t), L.Y(p1), cb, true, 9);
    dot(ctx, L.X(t), L.Y(1 - p1), ck, true, 9);
    hits.push({ x: L.X(t), y: L.Y(p1), r: 14, name: `p₁ = ${fmt(p1, 3)} at t = ${fmt(t, 1)} μs` });
    hits.push({ x: L.X(t), y: L.Y(1 - p1), r: 14, name: `Σ|c_k|² = ${fmt(1 - p1, 3)} at t = ${fmt(t, 1)} μs` });
    text(ctx, 'p_1', LT.r + 22, L.Y(P(T)), cb, { size: 22, weight: 600 });
    text(ctx, 'Σ|c_k|^2', LT.r + 22, L.Y(S(T)), ck, { size: 22, weight: 600 });
    /* right: one bar per level |k⟩ at its δ_k, and the long-time Lorentzian */
    const R = axes(ctx, RT, [D0, -D0], [0, 0.2], {
      nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2),
      xl: 'δ_k (μs⁻¹)', xc: C('frequency'), yl: '|c_k|^2', yc: C('population'),
    });
    const bw = (R.X(DW) - R.X(0)) * 0.62;
    ctx.save(); ctx.fillStyle = ck;
    for (let j = 0; j < NK; j++) {
      const dl = D0 + j * DW, v = Math.min(ck2(gm, dl, t), 0.2), x = R.X(dl);
      if (v > 0) ctx.fillRect(x - bw / 2, R.Y(v), bw, R.Y(0) - R.Y(v));
      hits.push({ x, y: R.Y(v / 2), r: Math.max(6, (R.Y(0) - R.Y(v)) / 2), name: `|k⟩ at δ_k = ${fmt(dl, 2)} μs⁻¹: |c_k|² = ${fmt(ck2(gm, dl, t), 4)}` });
    }
    ctx.restore();
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => lor(gm, s), D0, -D0, R.X, R.Y, alpha(ck, 0.8), 3, 240); ctx.restore();
    const pk = lor(gm, 0);
    /* the peak and its width named out to the right, where the bars stay below them */
    const lx = R.X(1.5 * gm) + 10, guide = alpha(PAL.ink, 0.35);
    hbracket(ctx, R.X(-gm / 2), R.X(gm / 2), R.Y(pk / 2), C('rate'));
    line(ctx, R.X(0) + 6, R.Y(pk), lx - 8, R.Y(pk), guide, 2, [4, 8]);
    line(ctx, R.X(gm / 2) + 6, R.Y(pk / 2), lx - 8, R.Y(pk / 2), guide, 2, [4, 8]);
    text(ctx, 't → ∞', lx, R.Y(pk), ck, { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, 'γ', lx, R.Y(pk / 2), C('rate'), { size: 24, weight: 600, bg: PAL.panel });
    topline(ctx, `The continuum fills toward a peak about resonance, $\\kdeltak$ = 0, of full width $\\kgamma$ = ${fmt(gm, 2)} μs⁻¹ at half height.`);
    ro.set(`\\kpone(\\kt) = \\kpone(0)\\,e^{-\\kgamma\\kt} = 1 \\times e^{-(${fmt(gm, 2)}\\,\\mu\\text{s}^{-1})(${fmt(t, 2)}\\,\\mu\\text{s})} = ${fmt(p1, 3)}`,
      `$\\sum_k |\\kck|^2 = 1 - \\kpone = ${fmt(1 - p1, 3)}$, the population the outgoing wavepacket carries away.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();
};
