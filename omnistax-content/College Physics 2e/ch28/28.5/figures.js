/* Figures for section 28.5 Relativistic Momentum. The figure draws momentum (p) and
   velocity (u, c); the classical momentum mu is the dashed variant of the momentum
   hue. γ and u/c are untyped and in ink; the rest mass m wears mass in the readout. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['28.5'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, text, topline, label, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);

const gammaOf = (b) => 1 / Math.sqrt(1 - b * b);
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
   Figure 28.19 · sim-momentum-graph · still · flat (root rule 28.1)
   p/(mc) against u/c on fixed axes, 0 to 1 and 0 to 8. The relativistic
   curve γu/c stops at 0.995, where it is 9.96, past the top of the box, so
   the clip keeps it inside; the classical line u/c is dashed. The wall at
   u = c is dashed in the velocity hue.
===================================================================== */
(function () {
  const d = sim('sim-momentum-graph', 560);
  const part = choice(d.controls, { label: 'particle', options: [{ value: 'e', label: 'electron' }, { value: 'he', label: 'helium nucleus' }], value: 'e', aria: 'the particle whose momentum the readout gives' });
  const uS = ctl(d.controls, { label: '\\ku/\\kc', cls: 'velocity', min: 0, max: 0.99, step: 0.001, value: 0.985, unit: '', dec: 3,
    aria: 'the speed of the particle as a fraction of the speed of light',
    specials: [{ at: 0.985, label: 'electron, 0.985c' }, { at: 0.2, label: 'helium, 0.200c' }] });

  const MASS = { e: 9.11e-31, he: 6.68e-27 }, CL = 3.00e8, TOP = 8;
  const box = { l: 200, r: 1060, t: 110, b: 470 };

  function draw() {
    const { ctx } = begin(d.c);
    const b = uS.v, g = gammaOf(b), P = C('momentum'), V = C('velocity');

    topline(ctx, b < 0.0005 ? 'At rest the momentum is zero.' : 'At ' + fmt(b, 3) + 'c the momentum is ' + sig(g, 3) + ' times the classical mu.');

    const { X, Y } = axes(ctx, box, [0, 1], [0, TOP], {
      xl: 'speed u/c', xc: V, yl: 'momentum p/(mc)', yc: P,
      nx: 5, ny: 4, fx: (t) => fmt(t, 1), fy: (t) => fmt(t, 0),
    });

    ctx.save(); ctx.setLineDash([10, 8]);
    line(ctx, X(1), box.t, X(1), box.b, V, 3);
    ctx.restore();
    text(ctx, 'u = c', X(1) + 14, box.t + 20, V, { size: 20, weight: 600, align: 'left', bg: PAL.panel });

    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 4, box.r - box.l, box.b - box.t + 8); ctx.clip();
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (s) => s, 0, 1, X, Y, alpha(P, 0.75), 3, 40);
    ctx.restore();
    curve(ctx, (s) => s * gammaOf(s), 0, 0.995, X, Y, P, 5, 240);
    ctx.restore();

    label(ctx, 'γmu', X(0.93), Y(0.93 * gammaOf(0.93)), { side: 'left', color: P, size: 22, gap: 30 });
    label(ctx, 'mu, classical', X(0.62), Y(0.62), { side: 'below', color: P, size: 20, gap: 18 });

    line(ctx, X(b), Y(b), X(b), Y(Math.min(b * g, TOP)), alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, box, X, Y, b, b, alpha(P, 0.75));
    pinned(ctx, box, X, Y, b, b * g, P, fmt(b * g, 2) + ' mc');

    const m = MASS[part.value], p = g * m * b * CL;
    const mt = sciTex(m, 2) + '\\;\\text{kg}';
    tex(d.readout, '\\kp = \\gamma\\km\\ku = \\frac{(' + mt + ')(' + fmt(b, 3) + ')(3.00\\times 10^{8}\\;\\text{m/s})}{\\sqrt{1 - ' + fmt(b, 3) + '^{2}}} = ' + (p > 0 ? sciTex(p, 2) : '0') + '\\;\\text{kg}\\cdot\\text{m/s}');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
