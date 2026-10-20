/* Figures for section 3.3 The dynamics of an open system.
   One moving Sim: realizations of the spin in a fluctuating field (Eqs. 3.32–3.36), free or with a spin echo. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-spin-echo · moving, 2D, the equatorial plane from the pole with two graphs beside
   δf(t) is a stationary Gaussian process with ⟨δf(t)δf(t′)⟩ = σ²e^{−|t−t′|/τ_c} (Ornstein–Uhlenbeck),
   σ = 6 μs⁻¹, drawn in the frame turning at ⟨f⟩. One realization's phase φ = ∫δf dt′; the echo's
   π pulse at T/2 sends φ → −φ. Ensemble average |⟨Ŝ₊(t)⟩|/|⟨Ŝ₊(0)⟩| = e^{−⟨φ²⟩/2}, with
   V(s) = 2σ²τ_c²(s/τ_c − 1 + e^{−s/τ_c}) the variance of ∫₀ˢδf; echo, t > T/2, s = t − T/2:
   ⟨φ²⟩ = V(T/2) + V(s) − 2σ²τ_c²(1 − e^{−T/2τ_c})(1 − e^{−s/τ_c}).
   Model time runs 0..T (+W in echo: the pulse takes no physical time and is drawn over a pause W).
   Axes fixed: t 0–1 μs; δf −20…20 μs⁻¹ (±3.3σ, clipped); coherence 0–1. τ_c track is log₁₀ τ_c, −1…2: below 0.1 μs the field averages itself out (σ²τ_c ≪ 1/t) and
   the spins barely spread at all, which is not the limit the text draws.
===================================================================== */
(function () {
  const d = sim('sim-spin-echo', 650);
  const T = 1, SIG = 6, N = 60, M = 400, DT = T / M, W = 0.12, HALF = T / 2;
  /* fixed draws, so a realization keeps its own history as τ_c moves */
  let seed = 0x3a3c1f;
  const rnd = () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const gauss = () => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd());
  const Z0 = Array.from({ length: N }, gauss), XI = Array.from({ length: N }, () => Float64Array.from({ length: M }, gauss));
  const field = Array.from({ length: N }, () => new Float64Array(M + 1)), phase = Array.from({ length: N }, () => new Float64Array(M + 1));
  let tauc = 10;
  function histories() {
    const a = Math.exp(-DT / tauc), b = SIG * Math.sqrt(1 - a * a);
    for (let k = 0; k < N; k++) {
      const f = field[k], p = phase[k]; f[0] = SIG * Z0[k]; p[0] = 0;
      for (let n = 0; n < M; n++) { f[n + 1] = a * f[n] + b * XI[k][n]; p[n + 1] = p[n] + 0.5 * (f[n] + f[n + 1]) * DT; }
    }
  }
  const at = (arr, t) => { const x = Math.min(M, Math.max(0, t / DT)), i = Math.min(M - 1, Math.floor(x)), u = x - i; return arr[i] * (1 - u) + arr[i + 1] * u; };
  const V = (s) => { const x = s / tauc; return 2 * SIG * SIG * tauc * tauc * (Math.expm1(-x) + x); };
  const phi2 = (echo, t) => {
    if (!echo || t <= HALF) return V(t);
    const s = t - HALF;
    return V(HALF) + V(s) - 2 * SIG * SIG * tauc * tauc * -Math.expm1(-HALF / tauc) * -Math.expm1(-s / tauc);
  };
  const coh = (echo, t) => Math.exp(-phi2(echo, t) / 2);
  const tauStr = (v) => { const r = Number(v.toPrecision(2)); return fmt(r, r < 1 ? 2 : r < 10 ? 1 : 0) + ' μs'; };

  const mode = choice(d.controls, { label: '', key: 'mode', value: 'free', aria: 'free precession or a spin echo halfway',
    options: [{ value: 'free', label: 'free precession' }, { value: 'echo', label: 'spin echo' }], onInput: () => cy.reset() });
  const tc = ctl(d.controls, { label: '\\ktauc', cls: 'time', key: 'tauc', min: -1, max: 2, step: 0.01, value: 1, unit: '', dec: 2,
    aria: 'the correlation time, on a logarithmic scale from 0.1 to 100 microseconds',
    specials: [{ at: 0, label: 'τc = t' }], onInput: () => { tauc = Math.pow(10, tc.v); histories(); cy.reset(); } });
  const valEl = tc.el.querySelector('.ctl-val'), inp = tc.el.querySelector('input');
  const cy = cycle(() => (mode.value === 'echo' ? T + W : T), 1.2);
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  histories();

  const CX = 300, CY = 375, R = 215;
  const B1 = { l: 730, r: 1340, t: 120, b: 300 }, B2 = { l: 730, r: 1340, t: 390, b: 560 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const echo = mode.value === 'echo', Tm = Math.min(cy.now(), echo ? T + W : T);
    /* physical time, and the pulse's progress while the clock pauses for it */
    const tp = !echo || Tm <= HALF ? Tm : Tm < HALF + W ? HALF : Tm - W;
    const u = echo && Tm > HALF && Tm < HALF + W ? (Tm - HALF) / W : null;
    const Cc = C('coherence'), Cf = C('frequency'), Ct = C('time'), Cp = C('phase');
    const ts = tauStr(tauc); valEl.textContent = ts; inp.setAttribute('aria-valuetext', ts);

    /* the equatorial plane seen from the pole */
    dot(ctx, CX, CY, PAL.rule, false, R);
    line(ctx, CX - R - 20, CY, CX + R + 20, CY, alpha(PAL.ink, 0.3), 2, [4, 8]);
    line(ctx, CX, CY + R + 20, CX, CY - R - 20, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'x', CX + R + 34, CY, PAL.muted, { size: 20, italic: true, align: 'center' });
    text(ctx, 'y', CX, CY - R - 34, PAL.muted, { size: 20, italic: true, align: 'center' });
    let mx = 0, my = 0;
    const tip = [];
    for (let k = 0; k < N; k++) {
      let ph, sy = 1;
      if (u !== null) { ph = at(phase[k], HALF); sy = Math.cos(Math.PI * u); }
      else ph = echo && tp > HALF ? at(phase[k], tp) - 2 * at(phase[k], HALF) : at(phase[k], tp);
      const vx = Math.cos(ph), vy = Math.sin(ph) * sy; mx += vx / N; my += vy / N;
      tip.push([vx, vy, ph]);
    }
    for (let k = N - 1; k >= 0; k--) {
      const [vx, vy, ph] = tip[k], x = CX + R * vx, y = CY - R * vy;
      arrow(ctx, CX, CY, x, y, k ? alpha(Cc, 0.4) : PAL.ink, k ? 2 : 3);
      const deg = ((((ph * 180) / Math.PI) % 360) + 540) % 360 - 180;
      hits.push({ x, y, r: 9, name: k ? `one realization, turned ${fmt(deg, 0)}°` : `the realization traced in ink on the graph above, turned ${fmt(deg, 0)}°` });
    }
    const mlen = Math.hypot(mx, my);
    if (mlen > 0.02) arrow(ctx, CX, CY, CX + R * mx, CY - R * my, Cc, 6);
    dot(ctx, CX, CY, PAL.ink, true, 5);
    hits.push({ x: CX + R * mx, y: CY - R * my, r: 14, name: `the average of the ${N} spins: ${fmt(mlen, 2)} of its length at the start` });

    /* the field each realization sees */
    const g1 = axes(ctx, B1, [0, T], [-20, 20], { nx: 4, ny: 4, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0) });
    text(ctx, '$\\delta\\kft$ (μs⁻¹)', B1.l, B1.t - 26, Cf, { size: 20, weight: 600, tex: true });
    ctx.save(); ctx.beginPath(); ctx.rect(B1.l, B1.t, B1.r - B1.l, B1.b - B1.t); ctx.clip();
    for (let k = N - 1; k >= 1; k--) curve(ctx, (t) => at(field[k], t), 0, T, g1.X, g1.Y, alpha(Cf, 0.16), 1.5, 160);
    curve(ctx, (t) => at(field[0], t), 0, T, g1.X, g1.Y, PAL.ink, 2.5, 200);
    ctx.restore();

    /* the coherence averaged over all realizations */
    const g2 = axes(ctx, B2, [0, T], [0, 1], { nx: 4, ny: 4, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 2) });
    text(ctx, '$|\\langle\\hat{S}_+(\\kt)\\rangle| / |\\langle\\hat{S}_+(0)\\rangle|$', B2.l, B2.t - 26, Cc, { size: 20, weight: 600, tex: true });
    text(ctx, '$\\kt$ (μs)', B2.r, B2.b + 58, Ct, { size: 20, weight: 600, align: 'right', tex: true });
    mode.curve(ctx, (m) => (t) => coh(m === 'echo', t), 0, T, g2.X, g2.Y, Cc, 5, 200);
    const c = coh(echo, tp);
    dot(ctx, g2.X(tp), g2.Y(c), Cc);
    hits.push({ x: g2.X(tp), y: g2.Y(c), r: 14, name: `the average over all realizations: ${fmt(c, 2)}` });

    /* the π pulse and the clock, across both graphs */
    mode.only(ctx, 'echo', () => {
      for (const b of [B1, B2]) line(ctx, g1.X(HALF), b.t, g1.X(HALF), b.b, alpha(Cp, 0.6), 2, [10, 10]);
      text(ctx, 'π pulse', g1.X(HALF), B1.t - 26, Cp, { size: 17, align: 'center' });
    }, [0, 0]);
    if (echo) hits.push({ x: g1.X(HALF), y: B2.t + 20, r: 14, name: 'the π pulse at t = 0.5 μs, which reverses every spin' });
    for (const b of [B1, B2]) line(ctx, g1.X(tp), b.t, g1.X(tp), b.b, alpha(PAL.ink, 0.4), 2, [4, 8]);

    const lim = tauc >= 3 * T ? 'slow' : tauc <= T / 3 ? 'fast' : 'mid';
    const head = { slow: echo ? 'the field holds still while the spins spread, and the echo brings them back together.' : 'each spin turns at a nearly fixed rate of its own, so the spread could be undone.',
      fast: echo ? 'the field has changed many times over, and the echo finds no history to undo.' : 'the field forgets itself many times over, and the spread is irreversible.',
      mid: echo ? 'the field changes during the evolution, and the echo undoes only part of the spread.' : 'the field changes during the evolution itself.' }[lim];
    topline(ctx, `$\\ktauc$ = ${ts} ${lim === 'slow' ? '≫' : lim === 'fast' ? '≪' : 'against'} $\\kt$ = 1 μs: ${head}`);
    const x0 = phi2(echo, tp) / 2, dx = x0 >= 10 ? 1 : 2, x = Math.round(x0 * 10 ** dx) / 10 ** dx, xs = fmt(x, dx);
    ro.set(`|\\langle\\hat{S}_+(\\kt)\\rangle| / |\\langle\\hat{S}_+(0)\\rangle| = e^{-\\langle\\kphi^2\\rangle/2} = e^{-${xs}} = ${fmt(Math.exp(-x), 2)}`, '', { form: 'coh' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.2), draw });
})();
};
