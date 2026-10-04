/* Figures for section 28.6 Relativistic Energy. The figures draw energy (E, E0,
   KE_rel, KE_class), velocity (v, c), momentum (p) and the triangle's angle θ; the
   rest energy and the classical kinetic energy are the dashed variants of the
   energy hue. γ and v/c are untyped and in ink; m wears mass in the readouts. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['28.6'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, register, begin, line, text, topline, label, axes, curve, pinned, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);

const gammaOf = (b) => 1 / Math.sqrt(1 - b * b);
const ME = 9.11e-31, CL = 3.00e8, MEV = 1.60e-13;
const REST_MEV = ME * CL * CL / MEV;
const sig = (n, k) => {
  if (!n) return fmt(0, k - 1);
  const e = Math.floor(Math.log10(Math.abs(n)));
  return fmt(n, Math.max(0, k - 1 - e));
};
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp) + ' \\times 10^{' + e + '}';
}

/* =====================================================================
   Figure 28.22 · sim-ke-graph · still · flat (root rule 28.1)
   KE/(mc²) against v/c on fixed axes, 0 to 1 and 0 to 8. The relativistic
   curve γ − 1 reaches 9.01 at 0.995, past the top of the box, so the clip
   keeps it inside; the classical ½(v/c)² is dashed and never passes 0.5.
===================================================================== */
(function () {
  const d = sim('sim-ke-graph', 560);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.995, step: 0.001, value: 0.99, unit: '', dec: 3,
    aria: 'the speed of the object as a fraction of the speed of light',
    specials: [{ at: 0.99, label: 'Example 28.8, 0.990c' }, { at: 0.992, label: 'Check Your Understanding, 0.992c' }] });

  const TOP = 8;
  const box = { l: 200, r: 1060, t: 110, b: 470 };

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, g = gammaOf(b), E = C('energy'), V = C('velocity');
    const rel = g - 1, cls = 0.5 * b * b;

    topline(ctx, b < 0.0005 ? 'At rest both kinetic energies are zero.'
      : 'At ' + fmt(b, 3) + 'c the relativistic kinetic energy is ' + sig(rel / cls, 3) + ' times the classical value.');

    const { X, Y } = axes(ctx, box, [0, 1], [0, TOP], {
      xl: 'speed v/c', xc: V, yl: 'kinetic energy KE/(mc²)', yc: E,
      nx: 5, ny: 4, fx: (t) => fmt(t, 1), fy: (t) => fmt(t, 0),
    });

    ctx.save(); ctx.setLineDash([10, 8]);
    line(ctx, X(1), box.t, X(1), box.b, V, 3);
    ctx.restore();
    text(ctx, 'v = c', X(1) + 14, box.t + 20, V, { size: 20, weight: 600, align: 'left', bg: PAL.panel });

    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 4, box.r - box.l, box.b - box.t + 8); ctx.clip();
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (s) => 0.5 * s * s, 0, 1, X, Y, alpha(E, 0.8), 3, 60);
    ctx.restore();
    curve(ctx, (s) => gammaOf(s) - 1, 0, 0.995, X, Y, E, 5, 240);
    ctx.restore();

    label(ctx, 'KE_{rel}', X(0.955), Y(gammaOf(0.955) - 1), { side: 'left', color: E, size: 22, gap: 30 });
    text(ctx, 'KE_{class}', X(1) + 14, Y(0.5), E, { size: 22, weight: 600, align: 'left', bg: PAL.panel });

    line(ctx, X(b), Y(cls), X(b), Y(Math.min(rel, TOP)), alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, box, X, Y, b, cls, alpha(E, 0.8));
    pinned(ctx, box, X, Y, b, rel, E, fmt(rel, 2) + ' mc²');

    const J = rel * ME * CL * CL;
    tex(d.readout, '\\kKErel = (\\gamma - 1)\\km\\kc^{2} = (' + fmt(g, 3) + ' - 1)(9.11\\times 10^{-31}\\;\\text{kg})(3.00\\times 10^{8}\\;\\text{m/s})^{2} = '
      + (J > 0 ? sciTex(J, 2) : '0') + '\\;\\text{J}');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-energy-triangle · still · flat
   E² = (pc)² + (mc²)² as a right triangle with the hypotenuse E held at a
   fixed length R, the base mc² = E cos θ and the upright pc = E sin θ, where
   sin θ = v/c. The corner O sits at (470, 500); at v = 0 the triangle lies
   flat along its base, and near c it stands almost on its upright.
===================================================================== */
(function () {
  const d = sim('sim-energy-triangle', 560);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.9999, step: 0.0001, value: 0.99, unit: '', dec: 4,
    aria: 'the speed of the particle as a fraction of the speed of light',
    specials: [{ at: 0.99, label: 'Example 28.8, 0.990c' }, { at: Math.sqrt(1 - 1 / 900), label: 'γ = 30.0' }] });

  const O = { x: 470, y: 500 }, R = 380;

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, g = gammaOf(b), th = Math.asin(b);
    const E = C('energy'), P = C('momentum'), AN = C('angle');
    const A = { x: O.x + R * Math.cos(th), y: O.y };
    const B = { x: A.x, y: O.y - R * Math.sin(th) };

    topline(ctx, b < 0.00005 ? 'At rest the total energy is the rest energy, and pc is zero.'
      : 'At ' + fmt(b, 4) + 'c the total energy is ' + sig(g, 3) + ' times the rest energy, and pc is ' + fmt(100 * b, 2) + '% of it.');

    ctx.save(); ctx.setLineDash([12, 9]);
    line(ctx, O.x, O.y, A.x, A.y, E, 5);
    ctx.restore();
    if (B.y < O.y - 1) line(ctx, A.x, A.y, B.x, B.y, P, 5);
    line(ctx, O.x, O.y, B.x, B.y, E, 5);

    if (th > 0.12 && A.x - O.x > 30) {
      const s = 18;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.beginPath();
      ctx.moveTo(A.x - s, A.y); ctx.lineTo(A.x - s, A.y - s); ctx.lineTo(A.x, A.y - s); ctx.stroke(); ctx.restore();
    }
    if (th > 0.05) angleArc(ctx, O, 70, 0, th, 'θ', undefined, AN);

    const mx = (O.x + B.x) / 2, my = (O.y + B.y) / 2;
    const nx = -Math.sin(th), ny = -Math.cos(th);
    text(ctx, 'E', mx + 34 * nx, my + 34 * ny, E, { size: 26, weight: 600, align: 'center', bg: PAL.panel });
    label(ctx, 'mc²', (O.x + A.x) / 2, O.y, { side: 'below', color: E, size: 24, gap: 20 });
    if (B.y < O.y - 40) label(ctx, 'pc', A.x, (A.y + B.y) / 2, { side: 'right', color: P, size: 24, gap: 20 });

    text(ctx, 'sin θ = v/c = ' + fmt(b, 4), 1080, 300, PAL.ink, { size: 22, align: 'center', bg: PAL.panel });
    text(ctx, 'γ = E/(mc²) = ' + sig(g, 4), 1080, 350, PAL.ink, { size: 22, align: 'center', bg: PAL.panel });

    const Em = g * REST_MEV, pm = g * b * REST_MEV;
    tex(d.readout, '\\kE^{2} = (\\kp\\kc)^{2} + (\\km\\kc^{2})^{2}: \\quad (' + sig(Em, 3) + '\\;\\text{MeV})^{2} = ('
      + sig(pm, 3) + '\\;\\text{MeV})^{2} + (' + fmt(REST_MEV, 3) + '\\;\\text{MeV})^{2}');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
