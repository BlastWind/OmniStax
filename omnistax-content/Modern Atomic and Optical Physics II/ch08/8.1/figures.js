/* Figures for section 8.1 Incorporating center of mass motion into atom-light interactions.
   The book names no atom, so momentum is in units of ℏk and frequency in units of
   ω_R = ℏk²/2m; in those units E/ℏ = (p/ℏk)² ω_R and Eq. (8.8) reads
   ω_res − ω₁₂ = 2(p/ℏk) ω_R + ω_R. The levels |1⟩ and |2⟩ are the section's referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, arrow, dot, axes, curve, vbracket, label, topline, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const term = (x) => (x < -1e-9 ? '- ' + fmt(-x, 1) : '+ ' + fmt(x, 1));

/* =====================================================================
   SIM · sim-recoil · still, 2D, graph alone
   The two levels as parabolas against momentum, the energy axis broken
   between them (ω₁₂ ≫ ω_R), and a column beside it stacking the two shifts. Absorption steps from (p, p²) on |1⟩ to
   (p + 1, (p + 1)²) on |2⟩: the tangent at p rises 2p (Doppler), the
   parabola bends 1 above it (recoil). Axes fixed: p −3…3 ℏk (the slider
   runs −2…2, so p + ℏk reaches 3); each panel −1…9 ω_R (the tangent's foot
   p² + 2p reaches −1 at p = −1).
===================================================================== */
(function () {
  const d = sim('sim-recoil', 810);
  const p = ctl(d.controls, { label: '\\kpcm', cls: 'momentum', key: 'p', min: -2, max: 2, step: 0.05, value: 1, unit: 'ℏk', dec: 2,
    aria: 'the momentum of the atom before it absorbs, in units of hbar k' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const UP = { l: 200, r: 1200, t: 140, b: 400 }, LO = { l: 200, r: 1200, t: 460, b: 720 };
  const C1 = UP.r + 30, C2 = UP.r + 58, YR = [-1, 9], ticks = (v) => (Math.round(v) % 3 === 0 ? v : null);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const mo = C('momentum'), E = C('energy'), f = C('frequency'), r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), guide = alpha(PAL.ink, 0.35);
    const u = axes(ctx, UP, [-3, 3], YR, { nx: 0, ny: 10, yl: 'E/ℏ (ω_R)', yc: E, fy: (v) => (ticks(v) === null ? '' : v === 0 ? 'ω₁₂' : '+' + fmt(v, 0)) });
    const l = axes(ctx, LO, [-3, 3], YR, { nx: 6, ny: 10, xl: 'p (ℏk)', xc: mo, fy: (v) => (ticks(v) === null ? '' : fmt(v, 0)) });
    const X = l.X, Yu = u.Y, Yl = l.Y;
    /* the break in the energy axis */
    const m = (UP.b + LO.t) / 2;
    line(ctx, UP.l - 12, m - 2, UP.l + 12, m - 14, PAL.muted, 2); line(ctx, UP.l - 12, m + 10, UP.l + 12, m - 2, PAL.muted, 2);
    curve(ctx, (x) => x * x, -3, 3, X, Yl, r1, 5, 160);
    curve(ctx, (x) => x * x, -3, 3, X, Yu, r2, 5, 160);
    label(ctx, '|1⟩', X(-2.75), Yl(7.6), { side: 'right', color: r1, leader: false, gap: 14, size: 24 });
    label(ctx, '|2⟩', X(-2.75), Yu(7.6), { side: 'right', color: r2, leader: false, gap: 14, size: 24 });
    const a = p.v, b = a + 1, dop = 2 * a, shift = dop + 1;
    const xa = X(a), xb = X(b), ya = Yl(a * a), ya2 = Yu(a * a), yt = Yu(a * a + dop), yb = Yu(b * b);
    /* the tangent to |2⟩'s parabola at p, from a little before p to T, clipped to its panel */
    ctx.save(); ctx.beginPath(); ctx.rect(UP.l, UP.t, UP.r - UP.l, UP.b - UP.t); ctx.clip();
    line(ctx, X(a - 0.6), Yu(a * a - 0.6 * dop), xb, yt, alpha(PAL.ink, 0.55), 3);
    ctx.restore();
    line(ctx, xa, ya - 10, xa, ya2 + 8, alpha(f, 0.7), 3, [10, 10]);
    label(ctx, 'ω₁₂', xa, (ya + ya2) / 2, { side: 'left', color: f, leader: false, gap: 14 });
    /* the two shifts stacked in a column beside the panel: p² to the tangent's T (Doppler), T to the parabola (recoil) */
    line(ctx, xa, ya2, C1, ya2, guide, 2, [4, 8]); line(ctx, xb, yt, C2, yt, guide, 2, [4, 8]); line(ctx, xb, yb, C2, yb, guide, 2, [4, 8]);
    const md = (ya2 + yt) / 2, mr = (yt + yb) / 2, apart = Math.abs(md - mr) < 32 ? (32 - Math.abs(md - mr)) / 2 * (md > mr ? 1 : -1) : 0;
    if (Math.abs(dop) > 0.04) {
      vbracket(ctx, C1, ya2, yt, f);
      label(ctx, 'pk/m', C2, md + apart, { side: 'right', color: f, leader: false, gap: 18 });
    }
    vbracket(ctx, C2, yt, yb, f);
    label(ctx, 'ℏk²/2m', C2, mr - apart, { side: 'right', color: f, leader: false, gap: 18 });
    arrow(ctx, xa, ya, xb, yb, f, 5);
    label(ctx, 'ω_{res}', (xa + xb) / 2, (ya + yb) / 2, { side: 'right', color: f, leader: false, gap: 22 });
    dot(ctx, xa, ya2, r2, false, 7);
    dot(ctx, xa, ya, r1, false, 10);
    dot(ctx, xb, yb, r2, true, 10);
    hits.push(
      { x: xa, y: ya, r: 18, name: `before: |p⟩|1⟩ at p = ${fmt(a, 2)} ℏk, kinetic energy ${fmt(a * a, 2)} ℏω_R` },
      { x: xb, y: yb, r: 18, name: `after: |p + ℏk⟩|2⟩ at ${fmt(b, 2)} ℏk, ${fmt(b * b, 2)} ℏω_R above ℏω₁₂` },
      { x: xa, y: ya2, r: 14, name: '|p⟩|2⟩, which ω₁₂ alone would reach with no change of momentum' },
      { x: (xa + xb) / 2, y: (ya + yb) / 2, r: 22, name: `the absorbed photon: momentum ℏk, frequency ω_res = ω₁₂ ${term(shift)} ω_R` },
      { x: C1, y: (ya2 + yt) / 2, r: 16, name: `the Doppler shift pk/m = ${fmt(dop, 1)} ω_R, the tangent's rise over one ℏk` },
      { x: C2, y: (yt + yb) / 2, r: 16, name: 'the recoil shift ℏk²/2m = ω_R, the parabola\'s bend above its tangent' },
      { x: X(-1.6), y: Yl(2.56), r: 18, name: 'the ground level |1⟩: kinetic energy p²/2m' },
      { x: X(-1.6), y: Yu(2.56), r: 18, name: 'the excited level |2⟩: ℏω₁₂ + p²/2m' });
    const where = Math.abs(shift) < 0.04 ? 'exactly at $\\komega_{12}$' : `${fmt(Math.abs(shift), 1)} $\\komegaR$ ${shift > 0 ? 'above' : 'below'} $\\komega_{12}$`;
    topline(ctx, `From $|p\\rangle|1\\rangle$ at $\\kpcm$ = ${fmt(a, 2)} ℏk the atom absorbs ${where}, landing in $|p + \\hbar k\\rangle|2\\rangle$.`);
    ro.set(`\\komegares = \\komega_{12} + \\frac{\\kpcm\\kkmag}{\\km} + \\frac{\\hbar\\kkmag^2}{2\\km} = \\komega_{12} ${term(dop)}\\,\\komegaR + \\komegaR = \\komega_{12} ${term(shift)}\\,\\komegaR`, '', { form: 'res' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
