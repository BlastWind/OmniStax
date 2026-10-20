/* Figures for section 4.3 Nonlinear atomic response.
   The book gives no numbers: distance is in units of 1/α₀ (Figure 4.3), and frequencies are
   angular frequencies in μs⁻¹ as in 2.1 (Figures 4.4 + 4.5). The strong field ℰ₊ (pump) and
   the weak field ℰ₋ (probe) are the section's referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, label, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const sgn = (x, d) => (x < -0.5 * 10 ** -d ? '−' + fmt(-x, d) : fmt(Math.abs(x), d));
const sgnTex = (x, d) => (x < -0.5 * 10 ** -d ? '-' + fmt(-x, d) : fmt(Math.abs(x), d));
/* a closed region between two functions of x, filled */
function band(ctx, lo, hi, x0, x1, X, Y, color, n = 400) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const x = x0 + ((x1 - x0) * i) / n; if (i) ctx.lineTo(X(x), Y(hi(x))); else ctx.moveTo(X(x), Y(hi(x))); }
  for (let i = n; i >= 0; i--) { const x = x0 + ((x1 - x0) * i) / n; ctx.lineTo(X(x), Y(lo(x))); }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 4.3 · sim-saturated-decay · still, graph alone
   dI/dz = −α₀ I/(1 + I/I_sat), from α = k̄ Im[χ_n(0)] (4.36, 4.61) with s = I/I_sat.
   Exact profile: α₀z = ln(I(0)/I) + (I(0) − I)/I_sat, solved for I by bisection on ln I.
   Axes fixed: α₀z 0…12 (I(0) = 8 I_sat falls to 1 % of itself at 12.5), I/I(0) 0…1.
===================================================================== */
(function () {
  const d = sim('sim-saturated-decay', 560);
  const s0 = ctl(d.controls, { label: '\\kIint(0)/\\kIint_\\mathrm{sat}', cls: 'intensity', key: 'I0', min: 0.05, max: 8, step: 0.01, value: 1, unit: '', dec: 2,
    aria: 'the entering intensity, in units of the saturation intensity', specials: [{ at: 1, label: 'saturation intensity' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 170, r: 1250, t: 120, b: 470 }, ZM = 12;
  /* I(z)/I(0) for an entering s₀ = I(0)/I_sat */
  const u = (z, s) => { let lo = -80, hi = 0; for (let i = 0; i < 60; i++) { const L = (lo + hi) / 2; if (-L + s * (1 - Math.exp(L)) - z > 0) lo = L; else hi = L; } return Math.exp((lo + hi) / 2); };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const s = s0.v, cI = C('intensity');
    const { X, Y } = axes(ctx, BOX, [0, ZM], [0, 1], { nx: 6, ny: 5, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kalpha_0 z$', BOX.r, BOX.b + 58, C('susceptibility'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kIint/\\kIint(0)$', BOX.l, BOX.t - 26, cI, { size: 20, weight: 600, tex: true });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (z) => Math.exp(-z), 0, ZM, X, Y, alpha(cI, 0.75), 3, 240); ctx.restore();
    curve(ctx, (z) => u(z, s), 0, ZM, X, Y, cI, 5, 300);
    /* the saturation intensity as a level, where the beam starts at or above it */
    if (s >= 1) {
      const yl = 1 / s, zc = Math.log(s) + s - 1;
      line(ctx, BOX.l, Y(yl), BOX.r, Y(yl), alpha(cI, 0.5), 2, [4, 8]);
      dot(ctx, X(zc), Y(yl), cI, true, 9);
      hits.push({ x: X(zc), y: Y(yl), r: 18, name: `the beam reaches the saturation intensity at α₀z = ${fmt(zc, 2)}` });
      if (zc > 1.2) text(ctx, 'saturated regime', X(zc / 2) + 20, Y(u(zc / 2, s)) - 6, PAL.muted, { size: 20, weight: 600 });
    }
    const zc = s >= 1 ? Math.log(s) + s - 1 : 0, zl = Math.min(ZM - 1.4, zc + Math.max(1.2, (ZM - zc) / 2));
    let yL = Y(u(zl, s)) - 30; if (s >= 1 && Math.abs(yL - Y(1 / s)) < 20) yL = Y(1 / s) - 24;
    text(ctx, 'linear regime', X(zl), yL, PAL.muted, { size: 20, weight: 600, align: 'center' });
    /* legend */
    const lx = BOX.r - 330, ly = BOX.t + 16;
    line(ctx, lx, ly, lx + 44, ly, cI, 5); text(ctx, 'this beam', lx + 56, ly, cI, { size: 18, weight: 600 });
    line(ctx, lx, ly + 30, lx + 44, ly + 30, alpha(cI, 0.75), 3, [10, 10]); text(ctx, 'a weak beam, $e^{-\\kalpha_0 z}$', lx + 56, ly + 30, cI, { size: 18, weight: 600, tex: true });
    if (s >= 1) { line(ctx, lx, ly + 60, lx + 44, ly + 60, alpha(cI, 0.5), 2, [4, 8]); text(ctx, '$\\kIint = \\kIint_\\mathrm{sat}$', lx + 56, ly + 60, cI, { size: 18, weight: 600, tex: true }); }
    const zh = Math.LN2 + s / 2;
    topline(ctx, `Entering at $\\kIint(0)$ = ${fmt(s, 2)} $\\kIint_\\mathrm{sat}$, the beam falls to half its intensity at $\\kalpha_0 z$ = ${fmt(zh, 2)}; a weak beam does so at ${fmt(Math.LN2, 2)}.`);
    ro.set(`\\frac{d\\kIint}{dz} = -\\frac{\\kalpha_0\\kIint}{1 + \\kIint/\\kIint_\\mathrm{sat}},\\qquad \\kalpha(0) = \\frac{\\kalpha_0}{1 + ${fmt(s, 2)}} = ${fmt(1 / (1 + s), 2)}\\,\\kalpha_0`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.4 + 4.5 · sim-saturation-spectroscopy · still, two graphs on one x scale
   Eq. (4.74) to all orders in Ω₊, integrated numerically: n(v_z) the Gaussian of Eq. (4.51)
   with kv_T = 12 μs⁻¹, radiatively broadened (γ = 2γ₁₂), so S(δ − kv_z) of Eq. (4.71)
   is 2|Ω₊|²/(γ₁₂² + (δ − kv_z)²). Upper: n(v_z)(ρ₁₁ − ρ₂₂)^{(v_z)} against kv_z, the pump's
   hole at kv_z = δ (the text's ν = Δ + kv_z), the probe's class at kv_z = −δ with area ∝ α₋.
   Lower: α₋ against δ relative to its peak without the pump. Axes fixed: −36…36 μs⁻¹.
===================================================================== */
(function () {
  const d = sim('sim-saturation-spectroscopy', 830);
  const KVT = 12, XM = 36;
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -30, max: 30, step: 0.1, value: -12, unit: 'μs⁻¹', dec: 1,
    aria: 'the detuning delta of both beams from the atomic resonance, in inverse microseconds', specials: [{ at: 0, label: 'resonance' }] });
  const om = ctl(d.controls, { label: '|\\kOmegap|', cls: 'coupling', key: 'Omega', min: 0, max: 3, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the Rabi frequency of the pump, in inverse microseconds', specials: [{ at: 0, label: 'no pump' }] });
  const gm = ctl(d.controls, { label: '\\kgammaonetwo', cls: 'rate', key: 'gamma12', min: 0.5, max: 4, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the coherence decay rate gamma 1 2, in inverse microseconds' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const B1 = { l: 170, r: 1250, t: 150, b: 390 }, B2 = { l: 170, r: 1250, t: 510, b: 730 };
  const nv = (x) => Math.exp(-((x / KVT) ** 2));
  const S = (x, o, g) => (2 * o * o) / (g * g + x * x);
  /* α₋(δ) ∝ ∫ n(v_z) γ₁₂/(γ₁₂² + (δ + kv_z)²) / (1 + S(δ − kv_z)) d(kv_z) */
  const absorb = (de, o, g) => {
    const h = Math.min(0.05, g / 12); let a = 0;
    for (let x = -64; x <= 64; x += h) a += (nv(x) * g) / (g * g + (de + x) ** 2) / (1 + S(de - x, o, g));
    return a * h;
  };
  let key = '', spec = null;
  const spectrum = (o, g) => {
    const k = `${o}|${g}`; if (k === key) return spec;
    const N = 288, norm = absorb(0, 0, g), de = [], with_ = [], without = [];
    for (let i = 0; i <= N; i++) { const x = -XM + (2 * XM * i) / N; de.push(x); with_.push(absorb(x, o, g) / norm); without.push(absorb(x, 0, g) / norm); }
    key = k; spec = { de, with_, without, norm, N }; return spec;
  };
  const at = (arr, sp, x) => { const f = ((x + XM) / (2 * XM)) * sp.N, i = Math.max(0, Math.min(sp.N - 1, Math.floor(f))), t = f - i; return arr[i] * (1 - t) + arr[i + 1] * t; };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const de = dl.v, o = om.v, g = gm.v, cN = C('density'), cX = C('susceptibility'), cF = C('frequency'), rp = F.ref('pump'), rq = F.ref('probe');
    const k = F.arrival(d);
    const pop = (x) => nv(x) / (1 + S(de - x, o, g));
    const cls = (x) => (pop(x) * g * g) / (g * g + (de + x) ** 2);
    /* upper graph: the velocity classes */
    const A = axes(ctx, B1, [-XM, XM], [0, 1.2], { nx: 6, ny: 0 });
    text(ctx, '$\\kkmag\\kvz$ (μs⁻¹)', B1.r, B1.b + 58, cF, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\knv(\\krhooneone - \\krhotwotwo)^{(\\kvz)}$', B1.l, B1.t - 26, cN, { size: 20, weight: 600, tex: true });
    if (o > 1e-6) band(ctx, pop, nv, -XM, XM, A.X, A.Y, alpha(rp, 0.55 * k), 600);
    band(ctx, () => 0, cls, -XM, XM, A.X, A.Y, alpha(rq, 0.6 * k), 900);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, nv, -XM, XM, A.X, A.Y, alpha(cN, 0.8), 3, 300); ctx.restore();
    curve(ctx, pop, -XM, XM, A.X, A.Y, cN, 5, 900);
    curve(ctx, cls, -XM, XM, A.X, A.Y, rq, 2, 900);
    /* the two classes named, pushed apart where they meet */
    const xp = A.X(de), xq = A.X(-de), close = Math.abs(xp - xq) < 170, side = de >= 0 ? 1 : -1;
    const lp = close ? (xp + xq) / 2 + side * 90 : xp, lq = close ? (xp + xq) / 2 - side * 90 : xq;
    if (o > 1e-6) text(ctx, 'pump $\\kEp$', lp, A.Y(nv(de)) - 30, rp, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, 'probe $\\kEm$', lq, Math.min(A.Y(pop(-de)) - 30, A.Y(nv(-de)) - (close ? 62 : 30)), rq, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    if (o > 1e-6) hits.push({ x: xp, y: A.Y((nv(de) + pop(de)) / 2), r: 22, name: `the atoms the pump saturates, kv_z = ${sgn(de, 1)} μs⁻¹: ρ₁₁ − ρ₂₂ falls to ${fmt(1 / (1 + S(0, o, g)), 2)}` });
    hits.push({ x: xq, y: A.Y(cls(-de) / 2), r: 22, name: `the atoms that absorb the probe, kv_z = ${sgn(-de, 1)} μs⁻¹` });
    const lx = B1.l + 18, ly = B1.t + 6;
    line(ctx, lx, ly, lx + 40, ly, alpha(cN, 0.8), 3, [10, 10]); text(ctx, 'without the pump', lx + 52, ly, cN, { size: 17, weight: 600 });
    line(ctx, lx, ly + 28, lx + 40, ly + 28, cN, 5); text(ctx, 'with the pump', lx + 52, ly + 28, cN, { size: 17, weight: 600 });
    /* lower graph: the probe's absorption */
    const sp = spectrum(o, g);
    const Bq = axes(ctx, B2, [-XM, XM], [0, 1], { nx: 6, ny: 2, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kdelta = \\knu - \\kDelta$ (μs⁻¹)', B2.r, B2.b + 58, cF, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kalpha_-$', B2.l, B2.t - 26, cX, { size: 20, weight: 600, tex: true });
    const fW = (x) => at(sp.with_, sp, x), fO = (x) => at(sp.without, sp, x);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, fO, -XM, XM, Bq.X, Bq.Y, alpha(cX, 0.8), 3, sp.N); ctx.restore();
    curve(ctx, fW, -XM, XM, Bq.X, Bq.Y, cX, 5, sp.N);
    const a = fW(de), a0 = fO(de);
    line(ctx, Bq.X(de), Bq.Y(a) + 10, Bq.X(de), B2.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, Bq.X(de), B1.b, Bq.X(de), A.Y(pop(de)) + 4, alpha(PAL.ink, 0.25), 2, [4, 8]);
    dot(ctx, Bq.X(de), Bq.Y(a), cX);
    hits.push({ x: Bq.X(de), y: Bq.Y(a), r: 18, name: `the probe's absorption at δ = ${sgn(de, 1)} μs⁻¹: ${fmt(a, 2)} of its peak without the pump` });
    const dip = fO(0) - fW(0);
    if (dip > 0.02 && Math.abs(Bq.X(de) - Bq.X(0)) > 60 && Bq.Y(fW(0)) + 34 < B2.b - 24) {
      label(ctx, 'dip', Bq.X(0), Bq.Y(fW(0)) + 34, { side: 'below', color: cX, gap: 6, leader: false, size: 18 });
    }
    if (dip > 0.02) hits.push({ x: Bq.X(0), y: Bq.Y(fW(0)), r: 18, name: `the saturated absorption dip at δ = 0: ${fmt(fW(0), 2)} against ${fmt(fO(0), 2)} without the pump` });
    const pc = a0 > 1e-9 ? (100 * a) / a0 : 100;
    topline(ctx, o < 1e-6
      ? `Without the pump the probe reads the atoms at $\\kkmag\\kvz$ = ${sgn(-de, 1)} μs⁻¹, and its absorption traces the whole Doppler profile.`
      : `At $\\kdelta$ = ${sgn(de, 1)} μs⁻¹ the pump saturates the atoms at $\\kkmag\\kvz$ = ${sgn(de, 1)} μs⁻¹ and the probe reads those at ${sgn(-de, 1)} μs⁻¹; it absorbs ${fmt(pc, 0)} % of what it would without the pump.`);
    const Sq = S(2 * de, o, g);
    ro.set(`S(\\kdelta - k\\kvz) = \\frac{4|\\kOmegap|^2(\\kgammaonetwo/\\kgamma)}{\\kgammaonetwo^2 + (\\kdelta - k\\kvz)^2} = \\frac{2(${fmt(o, 2)})^2}{(${fmt(g, 2)})^2 + (${sgnTex(2 * de, 1)})^2} = ${fmt(Sq, Sq < 0.01 ? 4 : 2)}`,
      `at $\\kkmag\\kvz = -\\kdelta$, the atoms the probe reads, with $\\kgamma = 2\\kgammaonetwo$.`, { form: 'S' });
  }
  register(d.fig, { update: () => {}, draw });
})();

};
