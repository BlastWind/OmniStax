/* Figures for section 11.5 Excitations in a Bose condensate. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.5'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, text, label, dot, topline, axes, curve } = F;
const HBAR = 1.054571817e-34, H = 2 * Math.PI * HBAR, U = 1.66053906660e-27;

/* the graph box and its legend, shared by both figures */
const G = { l: 150, r: 1340, t: 130, b: 600 };
const clipTo = (ctx, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(G.l, G.t - 4, G.r - G.l, G.b - G.t + 4); ctx.clip(); draw(); ctx.restore(); };
const legend = (ctx, x, y, rows) => rows.forEach(([name, color, w, dash, a = 1], i) => F.faded(ctx, a, [0, 0], () => {
  line(ctx, x, y + 30 * i, x + 44, y + 30 * i, color, w, dash);
  text(ctx, name, x + 56, y + 30 * i, PAL.ink, { size: 17, bg: PAL.panel });
}));
const along = (f, q0, q1, name, n = 8) => Array.from({ length: n + 1 }, (_, i) => q0 + ((q1 - q0) * i) / n)
  .map((q) => ({ q, y: f(q) })).filter((p) => Number.isFinite(p.y)).map((p) => ({ ...p, name }));

/* =====================================================================
   FIGURE 11.10 · sim-bogoliubov · still
   The Bogoliubov spectrum of a uniform ⁸⁷Rb condensate, Eq. (11.151), in
   frequency units f = ω/2π (kHz), with ϵ_q/h, the sound line qs/2π and an
   object's line qv/2π. Axes fixed: q 0 to 8 µm⁻¹, f 0 to 8 kHz (at
   n₀U₀/h = 3 kHz the spectrum reaches 6.0 kHz at q = 8; the object's line
   leaves through the top and is clipped).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-bogoliubov', 690);
  const M = 86.909 * U;
  const eps = (q) => (HBAR * q * q * 1e12) / (4 * Math.PI * M) / 1e3;          /* ϵ_q/h in kHz, q in µm⁻¹ */
  const sOf = (g) => 1e3 * Math.sqrt(Math.max(g, 0) * 1e3 * H / M);              /* s in mm/s, g = n₀U₀/h in kHz */
  const lineF = (q, v) => (q * 1e6 * v * 1e-3) / (2 * Math.PI) / 1e3;             /* qv/2π in kHz */
  const nU = ctl(d.controls, { label: '\\knzero\\kUzero/h', cls: 'energy', min: -1, max: 3, step: 0.01, value: 1, unit: 'kHz', dec: 2,
    specials: [{ at: 0, label: 'no interactions' }] });
  const v = ctl(d.controls, { label: '\\kvmag', cls: 'velocity', min: 0, max: 6, step: 0.01, value: 1.2, unit: 'mm/s', dec: 2,
    specials: [{ at: () => (nU.v > 0 ? sOf(nU.v) : null), label: 'speed of sound' }] });
  const ro = F.readout(d);
  let hits = []; F.hover(d.stage, () => hits, d.c);

  function draw() {
    const { ctx } = begin(d.c);
    const g = nU.v, vv = v.v, s = sOf(g);
    const cF = C('frequency'), cV = C('velocity'), cQ = C('wavevector'), cE = C('energy');
    const re = (q) => { const e = eps(q), x = e * (e + 2 * g); return x >= -1e-9 ? Math.sqrt(Math.max(x, 0)) : NaN; };
    const im = (q) => { const e = eps(q), x = e * (e + 2 * g); return x <= 1e-9 ? Math.sqrt(Math.max(-x, 0)) : NaN; };
    /* q* (µm⁻¹), below which ω_q is imaginary; the object excites q* < q < qx, Eq. (11.151) against qv */
    const qs = g < 0 ? 2e-6 * Math.sqrt(M * -g * 1e3 * H) / HBAR : 0;
    const qx = vv * 1e-3 * vv * 1e-3 > g * 1e3 * H / M ? 2e-6 * M * Math.sqrt(vv * vv * 1e-6 - g * 1e3 * H / M) / HBAR : 0;
    const qc = g > 0 ? 1e-6 * Math.sqrt(2 * M * g * 1e3 * H) / HBAR : 0;

    const { X, Y } = axes(ctx, G, [0, 8], [0, 8], { nx: 8, ny: 4, fx: (x) => fmt(x, 0), fy: (y) => fmt(y, 0),
      xl: 'q (µm^{−1})', xc: cQ, yl: 'ω_q/2π (kHz)', yc: cF });
    const q1 = Math.min(qx, 8);
    clipTo(ctx, () => {
      if (q1 > qs) {
        ctx.save(); ctx.fillStyle = alpha(cV, 0.16); ctx.beginPath();
        for (let i = 0; i <= 80; i++) { const q = qs + ((q1 - qs) * i) / 80; ctx.lineTo(X(q), Y(lineF(q, vv))); }
        for (let i = 80; i >= 0; i--) { const q = qs + ((q1 - qs) * i) / 80; ctx.lineTo(X(q), Y(re(q) || 0)); }
        ctx.closePath(); ctx.fill(); ctx.restore();
      }
      ctx.save(); ctx.setLineDash([3, 7]); curve(ctx, eps, 0, 8, X, Y, alpha(PAL.ink, 0.6), 3, 160); ctx.restore();
      if (g > 0) { ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (q) => lineF(q, s), 0, 8, X, Y, cV, 3, 2); ctx.restore(); }
      if (g < 0) { ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, im, 0, qs, X, Y, cF, 4, 120); ctx.restore(); }
      curve(ctx, re, qs, 8, X, Y, cF, 5, 240);
      curve(ctx, (q) => lineF(q, vv), 0, 8, X, Y, cV, 3, 2);
    });
    if (q1 > qs && qx <= 8) dot(ctx, X(qx), Y(re(qx)), cV, true, 8);

    /* the cross-over q_c ∼ 1/ξ, and the book's two regimes */
    if (qc > 0.15 && qc < 8) {
      line(ctx, X(qc), Y(re(qc)), X(qc), G.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      label(ctx, 'q_c ∼ 1/ξ', X(qc), G.b - 24, { side: 'right', color: cQ, size: 20 });
    }
    if (g > 0.05) {
      const qa = Math.min(0.45 * qc, 2.4), qb = Math.min(Math.max(1.7 * qc, qc + 1.2), 7.2);
      label(ctx, 'sound-like', X(qa), Y(re(qa)), { side: 'above', gap: 52, size: 20, weight: 400 });
      if (Y(re(qb)) > G.t + 30) label(ctx, 'particle-like', X(qb), Y(re(qb)), { side: 'left', gap: 26, size: 20, weight: 400 });
    }
    legend(ctx, G.l + 30, G.t + 20, [
      ['ω_q/2π, Eq. (11.151)', cF, 5],
      ['ϵ_q/h, a free particle', alpha(PAL.ink, 0.6), 3, [3, 7]],
      ['qs/2π, the sound line', cV, 3, [10, 10], g > 0 ? 1 : 0.25],
      ['qv/2π, the object', cV, 3],
      ['|Im ω_q|/2π, imaginary', cF, 4, [10, 10], g < 0 ? 1 : 0.25],
    ]);

    hits = [
      ...along(re, qs, 8, `ω_q/2π, the Bogoliubov spectrum at n₀U₀/h = ${fmt(g, 2)} kHz`),
      ...along(eps, 0, 8, 'ϵ_q/h, the free-particle energy'),
      ...along((q) => lineF(q, vv), 0, 8, `qv/2π, an object at v = ${fmt(vv, 2)} mm/s`),
      ...(g > 0 ? along((q) => lineF(q, s), 0, 8, `qs/2π, the sound line, s = ${fmt(s, 2)} mm/s`) : []),
      ...(g < 0 ? along(im, 0, qs, '|Im ω_q|/2π: these modes grow instead of oscillating', 5) : []),
    ].filter((p) => p.y <= 8).map((p) => ({ x: X(p.q), y: Y(p.y), r: 12, name: p.name }));
    if (q1 > qs) hits.push({ x: X((qs + q1) / 2), y: Y(0.5 * (lineF((qs + q1) / 2, vv) + (re((qs + q1) / 2) || 0))), r: 18, name: `excitations the object can create, q from ${fmt(qs, 2)} to ${fmt(qx, 2)} µm⁻¹` });

    /* headline and readout */
    const atS = g > 0 && Math.abs(vv - s) < 5e-3;
    topline(ctx, g < 0
      ? `With $\\kUzero$ < 0 every mode below $\\kq$ = ${fmt(qs, 2)} µm⁻¹ has an imaginary frequency: the uniform condensate is unstable.`
      : g === 0
        ? `Without interactions $\\hbar\\komegaq = \\kepsq$, and an object at any speed can excite waves long enough.`
        : atS
          ? `At $\\kvmag = \\kssound$ = ${fmt(s, 2)} mm/s the object's line just touches the spectrum at $\\kq \\rightarrow 0$.`
          : vv < s
            ? `At $\\kvmag$ = ${fmt(vv, 2)} mm/s, below $\\kssound$ = ${fmt(s, 2)} mm/s, the object's line stays under the spectrum: no drag.`
            : `At $\\kvmag$ = ${fmt(vv, 2)} mm/s, above $\\kssound$ = ${fmt(s, 2)} mm/s, the object can excite every $\\kq$ up to ${fmt(qx, 2)} µm⁻¹.`);
    if (g > 0) {
      ro.set(`\\kvc = \\min_{\\kq}\\frac{\\komegaq}{\\kq} = \\kssound = \\sqrt{\\knzero\\kUzero/\\km} = ${fmt(s, 2)}\\ \\text{mm/s}`,
        `$\\kq_c \\sim \\sqrt{2\\km\\knzero\\kUzero}/\\hbar$ = ${fmt(qc, 2)} µm⁻¹: sound-like below, particle-like above.`, { form: 'repulsive' });
    } else if (g < 0) {
      ro.set(`\\hbar\\komegaq = \\sqrt{\\kepsq^2 - 2\\knzero|\\kUzero|\\kepsq}\\ \\text{is imaginary for}\\ \\kq < \\frac{2\\sqrt{\\km\\knzero|\\kUzero|}}{\\hbar} = ${fmt(qs, 2)}\\ \\mu\\text{m}^{-1}`,
        `The largest $|\\mathrm{Im}\\,\\komegaq|/2\\pi$, $\\knzero|\\kUzero|/h$ = ${fmt(-g, 2)} kHz, is at $\\kepsq = \\knzero|\\kUzero|$.`, { form: 'attractive' });
    } else {
      ro.set('\\hbar\\komegaq = \\kepsq = \\frac{\\hbar^2\\kq^2}{2\\km},\\quad \\kvc = \\kssound = 0',
        'The free particle has no sound-like branch.', { form: 'free' });
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-attractive · still
   The spectrum of a ⁷Li condensate (U₀ < 0), Eq. (11.161), with the band
   q < q_min = 1/a_t that a cloud of size a_t does not hold, Eq. (11.160);
   stable when (11.162) holds. Axes fixed: q 0 to 2 µm⁻¹, f 0 to 800 Hz
   (the imaginary branch peaks at n₀|U₀|/h ≤ 400 Hz).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-attractive', 690);
  const M = 7.016 * U;
  const eps = (q) => (HBAR * q * q * 1e12) / (4 * Math.PI * M);                 /* ϵ_q/h in Hz, q in µm⁻¹ */
  let at = null;
  const nU = ctl(d.controls, { label: '\\knzero|\\kUzero|/h', cls: 'energy', min: 0, max: 400, step: 1, value: 60, unit: 'Hz', dec: 0,
    specials: [{ at: () => (at ? eps(1 / at.v) / 2 : null), label: 'stability limit' }] });
  at = ctl(d.controls, { label: '\\kat', cls: 'length', min: 0.5, max: 5, step: 0.01, value: 2, unit: 'µm', dec: 2,
    specials: [{ at: () => (nU.v > 0 ? Math.sqrt(eps(1) / (2 * nU.v)) : null), label: 'stability limit' }] });
  nU.refresh();
  const ro = F.readout(d);
  let hits = []; F.hover(d.stage, () => hits, d.c);

  function draw() {
    const { ctx } = begin(d.c);
    const g = nU.v, a = at.v, qm = 1 / a, cF = C('frequency'), cQ = C('wavevector');
    const re = (q) => { const e = eps(q), x = e * (e - 2 * g); return x >= -1e-9 ? Math.sqrt(Math.max(x, 0)) : NaN; };
    const im = (q) => { const e = eps(q), x = e * (e - 2 * g); return x <= 1e-9 ? Math.sqrt(Math.max(-x, 0)) : NaN; };
    const qs = Math.sqrt((2 * g) / eps(1));                                       /* ϵ_q = 2n₀|U₀| */
    const em = eps(qm), lhs = 2 * em, rhs = 4 * g, stable = lhs >= rhs - 1e-9;

    const { X, Y } = axes(ctx, G, [0, 2], [0, 800], { nx: 4, ny: 4, fx: (x) => fmt(x, 1), fy: (y) => fmt(y, 0),
      xl: 'q (µm^{−1})', xc: cQ, yl: 'ω_q/2π (Hz)', yc: cF });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(G.l, G.t, X(qm) - G.l, G.b - G.t); ctx.restore();
    line(ctx, X(qm), G.t, X(qm), G.b, alpha(PAL.ink, 0.5), 3, [10, 10]);
    label(ctx, 'q_min = 1/a_t', X(qm), G.t + 20, { side: 'right', color: cQ, size: 20 });
    clipTo(ctx, () => {
      ctx.save(); ctx.setLineDash([3, 7]); curve(ctx, eps, 0, 2, X, Y, alpha(PAL.ink, 0.6), 3, 120); ctx.restore();
      if (qs > 0) { ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, im, 0, qs, X, Y, cF, 4, 120); ctx.restore(); }
      curve(ctx, re, qs, 2, X, Y, cF, 5, 240);
    });
    const ym = stable ? re(qm) : im(qm);
    if (ym <= 800) {
      dot(ctx, X(qm), Y(ym), cF, stable, 10);
      label(ctx, stable ? 'ω_min' : 'ω_min imaginary', X(qm), Y(ym), { side: 'right', gap: 24, color: cF, size: 20 });
    }
    legend(ctx, G.r - 330, G.t + (qm > 1.3 ? 70 : 20), [
      ['ω_q/2π, real', cF, 5],
      ['|Im ω_q|/2π, imaginary', cF, 4, [10, 10], g > 0 ? 1 : 0.25],
      ['ϵ_q/h, a free particle', alpha(PAL.ink, 0.6), 3, [3, 7]],
    ]);
    hits = [
      ...along(re, qs, 2, 'ω_q/2π, a real frequency: the mode oscillates'),
      ...along(im, 0, qs, '|Im ω_q|/2π: the mode grows instead of oscillating', 6),
      ...along(eps, 0, 2, 'ϵ_q/h, the free-particle energy'),
    ].filter((p) => p.y <= 800).map((p) => ({ x: X(p.q), y: Y(p.y), r: 12, name: p.name }));
    hits.push({ x: (G.l + X(qm)) / 2, y: (G.t + G.b) / 2, r: Math.max(20, (X(qm) - G.l) / 2), name: `no mode here: waves longer than the cloud, q < 1/a_t = ${fmt(qm, 2)} µm⁻¹` });

    topline(ctx, g === 0
      ? 'Without interactions every mode is real and the condensate is stable.'
      : stable
        ? `The cloud holds no $\\kq$ below ${fmt(qm, 2)} µm⁻¹, which clears the imaginary branch ending at ${fmt(qs, 2)} µm⁻¹: stable.`
        : `Modes from $\\kq$ = ${fmt(qm, 2)} to ${fmt(qs, 2)} µm⁻¹ fit in the cloud with imaginary frequency: the condensate collapses.`);
    const rel = Math.abs(lhs - rhs) < 0.5e-2 * Math.max(lhs, 1) ? '=' : stable ? '\\geq' : '<';
    ro.set(`\\frac{\\hbar^2}{\\kat^2\\km} = h\\times ${fmt(lhs, 0)}\\ \\text{Hz}\\ ${rel}\\ 4\\knzero|\\kUzero| = h\\times ${fmt(rhs, 0)}\\ \\text{Hz}`,
      stable ? `$\\komega_\\mathrm{min}/2\\pi$ = ${fmt(re(qm), 0)} Hz, by Eq. (11.161).` : `$\\hbar\\komega_\\mathrm{min}$ of Eq. (11.161) is imaginary.`, { form: stable ? 'stable' : 'collapse' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
