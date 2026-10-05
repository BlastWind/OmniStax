/* Figures for section 33.1 The Yukawa Particle and the Heisenberg Uncertainty Principle Revisited.
   The page binds energy, time, position, velocity and mass. The proton is F.el('p+'), the
   neutron F.el('n0'); the pion is the section's referent, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['33.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, arrow, text, topline, label, hbracket, hover, readout, axes, curve, mixColor } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 33.3 · sim-pion-exchange · moving · flat (rule 28.1)
   Time runs in units of 10⁻²⁴ s. The pion moves at c = 0.3 fm per unit, so
   the scene's x in fm and the graph's t share one horizontal scale:
   3 fm above 10 units below. The borrowed energy is ΔE = K/Δt with
   K = h/4π = 6.63e-34 / 4π J·s, in MeV·units 329.7 (1 MeV = 1.6e-13 J,
   the book's). Ranges fixed: t 0 to 10 (d = 3.00 fm), ΔE 0 to 400 MeV
   (d = 0.30 fm needs 330). The readout follows the book's rounding:
   Δt to two figures, then ΔE from it.
===================================================================== */
(function () {
  const H = 700, RATE = 1.2, LEAD = 0.5, NY = 190, NR = 22, PR = 15;
  const H_PL = 6.63e-34, MEV = 1.6e-13, K = H_PL / (4 * Math.PI) / MEV / 1e-24;
  const GB = { l: 190, r: 1270, t: 340, b: 600 };
  const DSTAR = 0.3 * K / 139.6;
  const d = sim('sim-pion-exchange', H);
  const D = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.3, max: 3, step: 0.05, value: 1, unit: 'fm', dec: 2, onInput: reset,
    aria: 'the range of the force', specials: [{ at: DSTAR, label: 'π± mass' }] });
  const span = () => D.v / 0.3;
  const cy = cycle(() => span() + 2 * LEAD, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const sig2 = (v) => Number(v.toPrecision(2));
  const sci = (v) => {
    const e = Math.floor(Math.log10(v) + 1e-9), m = v / 10 ** e;
    return fmt(m, 1) + '\\times 10^{' + e + '}';
  };
  const clamp01 = (x) => Math.min(1, Math.max(0, x));

  function draw() {
    const { ctx } = begin(d.c);
    const dt = span(), E = K / dt, t = cy.now() - LEAD;
    const atStar = Math.abs(D.v - DSTAR) < 1e-6;
    const dtR = sig2(dt), eR = sig2(K / dtR);
    const PC = C('position'), TC = C('time'), EC = C('energy'), VC = C('velocity');
    const PI = F.ref('pion'), PRO = F.el('p+'), NEU = F.el('n0');
    hits = [];

    topline(ctx, atStar
      ? 'At $\\kd = ' + fmt(D.v, 2) + '\\;\\text{fm}$ the estimate lands on the measured $\\pi^{\\pm}$ mass, $139.6\\;\\text{MeV}/c^{2}$.'
      : 'A pion with range $\\kd = ' + fmt(D.v, 2) + '\\;\\text{fm}$, moving at nearly $\\kc$, can exist for $\\kdt \\approx \\kd/\\kc = ' + sci(dtR * 1e-24) + '\\;\\text{s}$.');

    const { X, Y } = axes(ctx, GB, [0, 10], [0, 400], { nx: 5, ny: 4, xl: 't (10⁻²⁴ s)', xc: TC, yl: 'ΔE (MeV)', yc: EC });
    const x0 = X(0), x1 = X(dt);

    /* the energy borrowed: the whole allowance dashed, the part used so far filled */
    const used = clamp01(t / dt) * dt;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.setLineDash([10, 10]);
    ctx.strokeRect(x0, Y(E), x1 - x0, GB.b - Y(E)); ctx.restore();
    if (used > 0) {
      ctx.save(); ctx.fillStyle = alpha(EC, 0.2); ctx.fillRect(x0, Y(E), X(used) - x0, GB.b - Y(E));
      ctx.strokeStyle = EC; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x0, Y(E)); ctx.lineTo(X(used), Y(E)); ctx.stroke(); ctx.restore();
    }
    hits.push({ x: (x0 + x1) / 2, y: (Y(E) + GB.b) / 2, r: Math.max(16, Math.min(60, (x1 - x0) / 2)), name: 'the energy borrowed, ' + fmt(E, 0) + ' MeV, held for ' + fmt(dt, 1) + ' × 10⁻²⁴ s' });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => K / s, K / 400, 10, X, Y, alpha(PAL.ink, 0.55), 3, 200); ctx.restore();
    hits.push({ x: X(5), y: Y(K / 5), r: 14, name: 'every pair ΔE, Δt the uncertainty principle allows at its limit, ΔE Δt = h/4π' });
    label(ctx, 'ΔE Δt = h/4π', X(3), Y(K / 3), { side: 'above', gap: 64, size: 20, H });

    /* the bracket of the range, under the nucleons */
    hbracket(ctx, x0, x1, NY + NR + 22, PC, 'd = ' + fmt(D.v, 2) + ' fm', { side: 'below', H });

    /* the pion, from the proton to the neutron at c */
    const flying = t >= 0 && t <= dt;
    if (flying) {
      const px = X(t), grow = clamp01(t / 0.15) * clamp01((dt - t) / 0.15), r = PR * Math.max(0.15, grow);
      line(ctx, px, NY + r + 4, px, Y(E) - 12, alpha(PAL.ink, 0.35), 2, [4, 8]);
      dot(ctx, px, Y(E), EC, true, 9);
      if (x1 - px > 70) arrow(ctx, px + r + 4, NY, Math.min(px + r + 60, x1 - NR - 6), NY, VC, 4);
      hits.push({ x: px, y: NY, r: 22, name: 'the virtual pion π⁺, moving at nearly the speed of light' });
    }

    /* the two nucleons trade identities: the proton becomes a neutron as it lets the pion go,
       and the neutron a proton as it takes it in */
    const kL = clamp01(t / 0.25), kR = clamp01((t - dt) / 0.25);
    const left = kL < 0.5 ? 'proton' : 'neutron', right = kR < 0.5 ? 'neutron' : 'proton';
    dot(ctx, x0, NY, mixColor(PRO, NEU, kL), true, NR);
    dot(ctx, x1, NY, mixColor(NEU, PRO, kR), true, NR);
    hits.push({ x: x0, y: NY, r: NR + 4, name: 'the ' + left + (left === 'neutron' ? ', a proton before it let the pion go' : '') });
    hits.push({ x: x1, y: NY, r: NR + 4, name: 'the ' + right + (right === 'proton' ? ', a neutron before it caught the pion' : '') });
    if (flying) {
      const px = X(t), grow = clamp01(t / 0.15) * clamp01((dt - t) / 0.15);
      dot(ctx, px, NY, PI, true, PR * Math.max(0.15, grow));
    }
    label(ctx, left, x0, NY, { side: 'above', gap: 44, size: 20, H });
    label(ctx, right, x1, NY, { side: 'above', gap: 44, size: 20, H });

    /* the legend: the pion, which moves and so carries no label of its own */
    dot(ctx, 52, NY, PI, true, PR);
    text(ctx, 'π⁺', 76, NY, PAL.ink, { size: 22, weight: 600 });

    ro.set('\\kdE \\approx \\frac{h}{4\\pi\\,\\kdt} = \\frac{6.63\\times 10^{-34}\\;\\text{J}\\cdot\\text{s}}{4\\pi(' + sci(dtR * 1e-24) + '\\;\\text{s})} \\approx ' + fmt(eR, 0) + '\\;\\text{MeV}, \\text{ so } \\km \\approx ' + fmt(eR, 0) + '\\;\\text{MeV}/\\kc^{2}');
  }
  register(d.fig, { update: (s) => cy.step(s, () => RATE), draw });
})();
};
