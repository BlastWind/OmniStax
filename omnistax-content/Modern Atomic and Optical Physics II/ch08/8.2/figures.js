/* Figures for section 8.2 Semiclassical description.
   The book gives no numbers: frequencies are in units of γ₁₂ (the dipole regime needs |δ| ≫ γ₁₂)
   and position in optical wavelengths λ. The generic atom is ink (COLOR.md); no referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, axes, curve, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const sgn = (x, d) => (x < 0 ? '−' + fmt(-x, d) : fmt(x, d));
const sgnTex = (x, d) => (x < 0 ? '-' + fmt(-x, d) : fmt(x, d));

/* =====================================================================
   SIM · sim-dipole-potential · still, 2D, strip above graph
   V_eff/ℏ = |Ω(x)|²/δ, Eq. (8.20), for a focused Gaussian beam
   |Ω(x)|² = |Ω₀|² exp(−2x²/w²), w = 0.7λ, or a standing wave
   |Ω(x)|² = |Ω₀|² cos²(2πx/λ). Force arrows F = −dV_eff/dx (symbolic).
   Axes fixed: x −2…2 λ, V_eff/ℏ −2…2 γ₁₂ (the deepest the sliders reach
   is 4²/10 = 1.6). A choice morphs the curve: hills bend into wells.
   Note: R_opt = 2γ₁₂|Ω|²/(γ₁₂² + δ²) at the atoms, Eq. (8.23) at v = 0.
===================================================================== */
(function () {
  const d = sim('sim-dipole-potential', 640);
  const W0 = 0.7;
  const PROF = { trap: (x) => Math.exp((-2 * x * x) / (W0 * W0)), lattice: (x) => Math.cos(2 * Math.PI * x) ** 2 };
  /* where the atoms settle: the intensity maxima for δ < 0, the dark for δ > 0 */
  const ATOMS = {
    'trap-red': [-0.16, 0, 0.16],
    'trap-blue': [-1.85, -1.55, 1.55, 1.85],
    'lattice-red': [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2],
    'lattice-blue': [-1.75, -1.25, -0.75, -0.25, 0.25, 0.75, 1.25, 1.75],
  };
  /* largest |dV/dx| per geometry over the sliders, so arrows keep one scale per light */
  const FMAX = { trap: 1.6 * (2 / W0) * Math.exp(-0.5), lattice: 1.6 * 2 * Math.PI };
  /* longest arrow per light: the lattice's slopes are a quarter wavelength apart */
  const LMAX = { trap: 150, lattice: 62 };
  const ARROWS = { trap: [-0.35, 0.35], lattice: [-0.375, -0.125, 0.125, 0.375] };
  const beam = choice(d.controls, { label: '\\text{light}', key: 'beam', value: 'trap', aria: 'the light: a focused beam or a standing wave',
    options: [{ value: 'trap', label: 'focused beam' }, { value: 'lattice', label: 'standing wave' }] });
  const det = choice(d.controls, { label: '\\text{detuning}', key: 'sign', value: 'red', aria: 'the sign of the detuning',
    options: [{ value: 'red', label: 'red, δ < 0' }, { value: 'blue', label: 'blue, δ > 0' }] });
  const dl = ctl(d.controls, { label: '|\\kdelta|', cls: 'frequency', key: 'delta', min: 10, max: 100, step: 1, value: 20, unit: 'γ₁₂', dec: 0,
    aria: 'the size of the detuning, in units of gamma 1 2' });
  const om = ctl(d.controls, { label: '|\\kOmega_0|', cls: 'coupling', key: 'Omega', min: 0, max: 4, step: 0.05, value: 3, unit: 'γ₁₂', dec: 2,
    aria: 'the Rabi frequency at the intensity maximum, in units of gamma 1 2', specials: [{ at: 0, label: 'no light' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const S = { l: 170, r: 1310, t: 96, b: 186 };
  const P = { l: 170, r: 1310, t: 268, b: 548 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const cp = C('coupling'), E = C('energy'), fo = C('force'), len = C('length');
    const O2 = om.v * om.v, de = det.value === 'red' ? -dl.v : dl.v;
    const s = det.mix((v) => (v === 'red' ? -1 : 1));
    const prof = (x) => beam.mix((v) => PROF[v](x));
    const V = (x) => (s * O2 * prof(x)) / dl.v;
    const { X, Y } = axes(ctx, P, [-2, 2], [-2, 2], { nx: 4, ny: 4, xc: len, yc: E, fx: (v) => (v === 0 ? '0' : sgn(v, 0) + 'λ') });
    text(ctx, '$x$', P.r, P.b + 58, len, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kVeff/\\hbar$ (γ₁₂)', P.l, P.t - 26, E, { size: 20, weight: 600, tex: true });
    /* the intensity across the light, on the same x */
    const SY = (u) => S.b - u * (S.b - S.t);
    ctx.save(); ctx.beginPath(); ctx.moveTo(X(-2), S.b);
    for (let i = 0; i <= 400; i++) { const x = -2 + i / 100; ctx.lineTo(X(x), SY(prof(x) * O2 / 16)); }
    ctx.lineTo(X(2), S.b); ctx.closePath(); ctx.fillStyle = alpha(cp, 0.22); ctx.fill(); ctx.restore();
    curve(ctx, (x) => prof(x) * O2 / 16, -2, 2, X, SY, cp, 4, 400);
    line(ctx, S.l, S.b, S.r, S.b, PAL.muted, 2);
    text(ctx, '$|\\kOmega(x)|^2$', S.l - 14, (S.t + S.b) / 2, cp, { size: 20, weight: 600, align: 'right', tex: true });
    hits.push({ x: X(0), y: SY(0.5 * O2 / 16), r: 30, name: 'the intensity |Ω(x)|² of the light' });
    /* the potential and the force on its slopes */
    curve(ctx, V, -2, 2, X, Y, E, 5, 400);
    const fmax = beam.mix((v) => FMAX[v]), lmax = beam.mix((v) => LMAX[v]), h = 1e-3;
    const pts = [...new Set([...ARROWS.trap, ...ARROWS.lattice])].filter((x) => ARROWS[beam.value].includes(x) || ARROWS[beam.from].includes(x));
    let tag = null;
    pts.forEach((x) => {
      const f = -(V(x + h) - V(x - h)) / (2 * h), L = (lmax * f) / fmax;
      const a = (ARROWS[beam.value].includes(x) ? beam.a(beam.value) : 0) + (beam.from !== beam.value && ARROWS[beam.from].includes(x) ? beam.a(beam.from) : 0);
      if (Math.abs(L) < 8 || a <= 0) return;
      const x0 = X(x), y0 = Y(V(x)) - 22;
      F.faded(ctx, Math.min(1, a), [0, 0], () => arrow(ctx, x0, y0, x0 + L, y0, fo, 4));
      hits.push({ x: x0 + L / 2, y: y0, r: 20, name: `the dipole force at x = ${sgn(x, 3)}λ, F = −dV_eff/dx, toward ${L < 0 ? '−' : '+'}x` });
      if (x > 0 && (!tag || x > tag.x)) tag = { x0, y0, L, x };
    });
    if (tag) text(ctx, '$\\kFmag$', tag.x0 + tag.L / 2, tag.y0 - 24, fo, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    /* the atoms where the light leaves them */
    const show = Math.min(1, om.v / 0.3);
    F.faded(ctx, show, [0, 0], () => beam.only(ctx, 'lattice', () => hbracket(ctx, X(0), X(0.5), S.b + 22, PAL.ink, 'λ/2', { side: 'below' })));
    Object.entries(ATOMS).forEach(([key, xs]) => {
      const [b, sg] = key.split('-'), a = beam.a(b) * det.a(sg) * show;
      if (a <= 0) return;
      F.faded(ctx, a, [0, 0], () => xs.forEach((x) => dot(ctx, X(x), Y(V(x)) - 13, PAL.ink, true, 11)));
      if (a > 0.5) xs.forEach((x) => hits.push({ x: X(x), y: Y(V(x)) - 13, r: 16, name: `an atom at x = ${sgn(x, 2)}λ, where V_eff/ℏ = ${sgn(V(x), 2)} γ₁₂` }));
    });
    /* the headline and readout of the state at rest */
    const xs = ATOMS[`${beam.value}-${det.value}`], depth = O2 / dl.v;
    const at = xs.reduce((m, x) => m + PROF[beam.value](x), 0) / xs.length;
    const R = (2 * O2 * at) / (1 + dl.v * dl.v);
    const D = fmt(depth, 2) + ' γ₁₂';
    const HEAD = {
      'trap-red': `Red detuning: the atoms gather in the focus, in a well ${D} deep.`,
      'lattice-red': `Red detuning: the atoms gather at the antinodes, λ/2 apart, in wells ${D} deep.`,
      'trap-blue': `Blue detuning: a hill ${D} high pushes the atoms out of the beam.`,
      'lattice-blue': `Blue detuning: the atoms gather at the nodes, λ/2 apart, between hills ${D} high.`,
    };
    topline(ctx, om.v < 1e-9 ? 'With no light there is no potential, and nothing holds the atoms.' : HEAD[`${beam.value}-${det.value}`]);
    ro.set(`\\kVeff/\\hbar = |\\kOmega_0|^2/\\kdelta = ${fmt(om.v, 2)}^2/${de < 0 ? `(${sgnTex(de, 0)})` : fmt(de, 0)} = ${sgnTex(O2 / de, 3)}\\ \\kgammaonetwo`,
      `At the atoms $\\kRopt = 2\\kgammaonetwo|\\kOmega|^2/(\\kgammaonetwo^2 + \\kdelta^2) = ${fmt(R, 4)}\\,\\kgammaonetwo$.`, { form: 'veff' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
