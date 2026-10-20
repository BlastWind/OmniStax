/* Figures for section 11.1 Introduction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM: a slice of a uniform ⁸⁷Rb gas, each atom with a wavepacket λ_dB
   across, Eq. (11.1). Still: T and n are parameters, not a clock. The
   atoms sit on a jittered lattice of spacing n^(−1/3); below T_c the atoms
   of lowest fixed rank join the condensate, a uniform tint as deep as
   N_g.s./N of Eq. (11.9). Graph axes fixed: T 0 to 2000 nK, N_g.s./N 0 to 1.
===================================================================== */
(function () {
  const d = sim('sim-degeneracy', 820);
  const HBAR = 1.054571817e-34, KB = 1.380649e-23, M = 86.909 * 1.66053907e-27, ZETA = 2.612;
  /* λ_dB in µm at T in nK; spacing n^(−1/3) in µm at n in 10¹⁴ cm⁻³ (= 10²⁰ m⁻³) */
  const lam = (T) => 1e6 * Math.sqrt((2 * Math.PI * HBAR * HBAR) / (M * KB * T * 1e-9));
  const gap = (n) => 1e6 * Math.pow(n * 1e20, -1 / 3);
  /* T_c in nK from Eq. (11.3); the density at which a gas at T condenses, in 10¹⁴ cm⁻³ */
  const Tc = (n) => 1e9 * ((2 * Math.PI * HBAR * HBAR) / (M * KB)) * Math.pow((n * 1e20) / ZETA, 2 / 3);
  const nc = (T) => ZETA / (100 * Math.pow(lam(T), 3));
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 20, max: 2000, step: 10, value: 600, unit: 'nK', dec: 0,
    specials: [{ at: () => Tc(n.v), label: 'critical temperature' }] });
  const n = ctl(d.controls, { label: '\\kndens', cls: 'density', min: 0.25, max: 4, step: 0.05, value: 1, unit: '× 10¹⁴ cm⁻³', dec: 2,
    specials: [{ at: () => nc(T.v), label: 'condensation at this temperature' }] });
  const ro = F.readout(d);

  /* the slice: 6 µm by 1.40 µm, one spacing thick */
  const S = { l: 80, r: 1320, t: 110, b: 400 }, PX = (S.r - S.l) / 6;
  const cx = (S.l + S.r) / 2, cy = (S.t + S.b) / 2;
  let seed = 11;
  const rnd = () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const ATOMS = [];
  for (let i = -26; i <= 26; i++) for (let j = -7; j <= 7; j++) ATOMS.push({ u: i + 0.6 * (rnd() - 0.5), v: j + 0.6 * (rnd() - 0.5), rank: rnd() });
  const G = { l: 180, r: 1260, t: 540, b: 760 };
  let hits = []; F.hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const t = T.v, dn = n.v, tc = Tc(dn), L = lam(t), s = gap(dn);
    const f0 = t < tc ? 1 - Math.pow(t / tc, 1.5) : 0;
    const pct = fmt(100 * f0, f0 > 0.99 ? 1 : 0), fd = f0 > 0.99 ? 3 : 2;
    const rb = F.el('Rb'), cT = C('temperature'), cL = C('length'), cN = C('density');

    /* the slice: condensate tint, then the thermal atoms' wavepackets and the atoms */
    ctx.save(); ctx.beginPath(); ctx.rect(S.l, S.t, S.r - S.l, S.b - S.t); ctx.clip();
    if (f0 > 0) { ctx.fillStyle = alpha(rb, 0.5 * f0); ctx.fillRect(S.l, S.t, S.r - S.l, S.b - S.t); }
    const shown = ATOMS.map((a) => ({ x: cx + a.u * s * PX, y: cy + a.v * s * PX, rank: a.rank }))
      .filter((a) => a.x > S.l && a.x < S.r && a.y > S.t && a.y < S.b && a.rank >= f0);
    const R = (L * PX) / 2;
    ctx.fillStyle = alpha(rb, 0.14);
    shown.forEach((a) => { ctx.beginPath(); ctx.arc(a.x, a.y, R, 0, 2 * Math.PI); ctx.fill(); });
    ctx.fillStyle = rb;
    shown.forEach((a) => { ctx.beginPath(); ctx.arc(a.x, a.y, 5, 0, 2 * Math.PI); ctx.fill(); });
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(S.l, S.t, S.r - S.l, S.b - S.t); ctx.restore();
    const atomName = `⁸⁷Rb atom, its wavepacket λ_dB = ${fmt(L, 3)} µm across`;
    shown.forEach((a) => hits.push({ x: a.x, y: a.y, r: 10, name: atomName }));

    /* the two lengths the criterion compares, from one left edge */
    const bar = (y, len, color, lab) => {
      line(ctx, S.l, y, S.l + len, y, color, 4);
      line(ctx, S.l, y - 9, S.l, y + 9, color, 3); line(ctx, S.l + len, y - 9, S.l + len, y + 9, color, 3);
      text(ctx, lab, S.l + len + 16, y, color, { size: 20, weight: 600 });
    };
    bar(440, L * PX, cL, `λ_{dB} = ${fmt(L, 3)} µm`);
    bar(480, s * PX, cN, `n^{−1/3} = ${fmt(s, 3)} µm`);
    if (f0 > 0) {
      ctx.save(); ctx.fillStyle = alpha(rb, 0.5 * Math.max(f0, 0.2)); ctx.fillRect(S.r - 330, 428, 28, 24); ctx.restore();
      text(ctx, `condensate, ${pct} % of the atoms`, S.r - 290, 440, PAL.ink, { size: 20 });
    }

    /* N_g.s./N against T: Eq. (11.9), and Eq. (11.10) at the same T_c */
    const { X, Y } = axes(ctx, G, [0, 2000], [0, 1], {
      nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2),
      xl: 'T (nK)', xc: cT, yl: 'N_{g.s.}/N', yc: PAL.ink,
    });
    line(ctx, X(tc), G.t, X(tc), G.b, alpha(cT, 0.6), 2, [10, 10]);
    text(ctx, `T_c = ${fmt(tc, 0)} nK`, X(tc) + 10, G.t + 14, cT, { size: 20, weight: 600, bg: PAL.panel });
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (x) => Math.max(0, 1 - Math.pow(x / tc, 3)), 0, 2000, X, Y, alpha(PAL.ink, 0.55), 3, 240);
    ctx.restore();
    curve(ctx, (x) => Math.max(0, 1 - Math.pow(x / tc, 1.5)), 0, 2000, X, Y, PAL.ink, 5, 240);
    line(ctx, X(t), Y(f0), X(t), G.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    const p = pinned(ctx, G, X, Y, t, f0, PAL.ink);
    hits.push({ x: p.x, y: p.y, r: 14, name: `T = ${fmt(t, 0)} nK: N_g.s./N = ${fmt(f0, fd)}` });
    const LX = G.r - 300;
    line(ctx, LX, G.t + 20, LX + 44, G.t + 20, PAL.ink, 5);
    text(ctx, 'uniform gas, (11.9)', LX + 56, G.t + 20, PAL.ink, { size: 17 });
    line(ctx, LX, G.t + 50, LX + 44, G.t + 50, alpha(PAL.ink, 0.55), 3, [10, 10]);
    text(ctx, 'harmonic trap, (11.10)', LX + 56, G.t + 50, PAL.ink, { size: 17 });

    /* headline and readout: Eq. (11.2) with the live numbers, Eq. (11.9) below T_c */
    const at = Math.abs(t - tc) < 1e-6 * tc;
    topline(ctx, at
      ? `At $\\kTc$ = ${fmt(tc, 0)} nK neighbouring wavepackets overlap and $\\kndens\\klambdadB^3$ reaches 2.612.`
      : t > tc
        ? `At ${fmt(t, 0)} nK each wavepacket is ${fmt(L, 3)} µm across, ${L < s ? 'less than' : 'more than'} the ${fmt(s, 3)} µm between atoms, and the gas ${t > 2 * tc ? 'is classical' : 'nears condensation'}.`
        : `Below $\\kTc$ = ${fmt(tc, 0)} nK, ${pct} % of the atoms share the lowest state, one wave through the whole gas.`);
    const Ls = +L.toFixed(4), val = 100 * dn * Ls * Ls * Ls;
    const rel = at ? '\\approx' : t > tc ? '<' : '>';
    ro.set(`\\kndens\\klambdadB^3 = (${fmt(dn, 2)}\\times 10^{14}\\ \\text{cm}^{-3})(${fmt(Ls, 4)}\\ \\mu\\text{m})^3 = ${fmt(val, val < 100 ? 2 : 1)} ${rel} \\zeta(3/2) \\approx 2.612`,
      t < tc
        ? `$\\kNgs = N\\left(1 - (\\kT/\\kTc)^{3/2}\\right) = N\\left(1 - (${fmt(t, 0)}/${fmt(tc, 0)})^{3/2}\\right) = ${fmt(f0, fd)}\\,N$`
        : `$\\kTc$ = ${fmt(tc, 0)} nK at this density, by Eq. (11.3).`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
