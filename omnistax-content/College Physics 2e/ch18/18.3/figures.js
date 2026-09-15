/* Figures for section 18.3 Coulomb's Law. Boots against the section's text article.
   Electrostatics held still has no time in it: two charges at a chosen
   separation, and an electron and a proton at a chosen separation, are each
   one state of a formula and not one moment of a motion, so neither figure
   registers a cycle and neither carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, hbracket, axes, pinned, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* the constants this section uses, in SI units */
const K = 8.99e9, QE = 1.60e-19, GRAV = 6.67e-11, ME = 9.11e-31, MP = 1.67e-27;

/* a number in scientific notation, for the readout's LaTeX and for the canvas */
function parts(v, d) {
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (Math.abs(+fmt(m, d)) >= 10) { m /= 10; e += 1; }
  return { m: fmt(m, d), e };
}
const sci = (v, d) => { if (!v) return '0'; const p = parts(v, d); return p.m + ' \\times 10^{' + p.e + '}'; };
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
const sciText = (v, d) => { if (!v) return '0'; const p = parts(v, d); return p.m + ' × 10' + sup(p.e); };
/* a signed number with the typographic minus */
const signed = (v, d) => (v < 0 ? '−' : '+') + fmt(Math.abs(v), d);

/* =====================================================================
   FIGURE 18.17: two point charges a chosen distance apart, with the force
   on each of them, and the force plotted against the separation beneath.
   The book draws two panels, like charges and unlike charges; here the
   signs of the two charges are the reader's, and the panels are two of the
   states the sliders reach. Still: the charges are held where they are put,
   so the figure answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-coulomb-pair', 820);
  const q1s = ctl(d.controls, { label: '\\kqone', cls: 'charge', min: -5, max: 5, step: 0.25, value: 2, unit: 'μC', dec: 2, aria: 'the first charge, in microcoulombs' });
  const q2s = ctl(d.controls, { label: '\\kqtwo', cls: 'charge', min: -5, max: 5, step: 0.25, value: 2, unit: 'μC', dec: 2, aria: 'the second charge, in microcoulombs' });
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 2, max: 20, step: 0.5, value: 10, unit: 'cm', dec: 1, aria: 'the separation of the two charges, in centimetres' });
  const CX = 700, CY = 250, S = 30;              /* 30 logical units to the centimetre */
  const BOX = { l: 190, r: 1250, t: 450, b: 750 };
  const XR = [2, 20], YR = [0, 20];              /* fixed: the slider's own range, and 0 to 20 N */
  const force = (q1, q2, rcm) => K * Math.abs(q1 * q2) * 1e-12 / Math.pow(rcm / 100, 2);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), fc = C('force');
    const q1 = q1s.v, q2 = q2s.v, r = rs.v, Fv = force(q1, q2, r);
    const half = (r * S) / 2, x1 = CX - half, x2 = CX + half;
    const prod = q1 * q2, away = prod > 0 ? 1 : -1;               /* like charges push apart */
    /* the line the two charges sit on, and the separation between them */
    line(ctx, x1 - 40, CY, x2 + 40, CY, PAL.rule, 2, [10, 10]);
    hbracket(ctx, x1, x2, CY + 96, PAL.ink, 'r = ' + fmt(r, 1) + ' cm');
    /* the force on each charge: away from the other where the product is positive */
    if (Fv > 0) {
      const L = Math.min(300, 40 + 26 * Math.sqrt(Fv));
      arrow(ctx, x1, CY, x1 - away * L, CY, fc, 5);
      arrow(ctx, x2, CY, x2 + away * L, CY, fc, 5);
      /* each label sits over the middle of its own arrow; when the charges attract the
         two arrows share the gap, so the second label goes under its arrow instead */
      const Fs = 'F = ' + fmt(Fv, Fv < 10 ? 2 : 1) + ' N';
      text(ctx, Fs, x1 - away * L / 2, CY - 36, fc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
      text(ctx, Fs, x2 + away * L / 2, away > 0 ? CY - 36 : CY + 40, fc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    }
    /* the charges themselves, ink bodies whose signs are written on them */
    /* the two labels are stepped apart in height, and leadered back to their own
       charge, so that they stay legible when the charges are brought as close
       together as the slider allows */
    for (const [x, q, nm, up] of [[x1, q1, 'q_1', 148], [x2, q2, 'q_2', 66]]) {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(x, CY, 20, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, q > 0 ? '+' : q < 0 ? '−' : '0', x, CY, PAL.ink, { size: 24, weight: 600, align: 'center' });
      line(ctx, x, CY - 24, x, CY - up + 14, alpha(PAL.ink, 0.35), 2, [4, 8]);
      text(ctx, nm + ' = ' + signed(q, 2) + ' μC', x, CY - up, qc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    }
    /* the same force plotted against the separation, for the charges as they stand */
    const { X, Y } = axes(ctx, BOX, XR, YR, { xl: 'r (cm)', nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    if (Fv > 0) {
      ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
      curve(ctx, (t) => force(q1, q2, t), XR[0], XR[1], X, Y, fc, 5, 160);
      ctx.restore();
      line(ctx, X(r), Y(Math.min(Fv, YR[1])), X(r), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
      pinned(ctx, BOX, X, Y, r, Fv, fc);   /* the number itself is in the headline and the readout */
    }
    text(ctx, 'F (N)', BOX.r, BOX.t - 24, fc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'the force between the two charges you have set', BOX.l, BOX.t - 56, PAL.muted, { size: 19 });
    topline(ctx, Fv === 0 ? 'With one of the charges set to zero there is no force between them at all.'
      : 'Charges of ' + signed(q1, 2) + ' μC and ' + signed(q2, 2) + ' μC, ' + fmt(r, 1) + ' cm apart, ' + (prod > 0 ? 'repel' : 'attract') + ' one another with ' + fmt(Fv, Fv < 10 ? 2 : 1) + ' N on each.');
    readout(d.readout, `\\kF = k\\frac{|\\kqone\\kqtwo|}{r^2} = (8.99 \\times 10^{9}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2)\\frac{|(${sci(q1 * 1e-6, 2)}\\ \\text{C})(${sci(q2 * 1e-6, 2)}\\ \\text{C})|}{(${fmt(r / 100, 3)}\\ \\text{m})^2} = ${Fv === 0 ? '0' : sci(Fv, 2)}\\ \\text{N}`,
      Fv === 0 ? 'A charge of zero exerts no force and feels none, and the graph has nothing to draw.'
        : 'The two arrows are equal in length and opposite in direction whatever the two charges are, since Newton’s third law holds here as it does everywhere else. On the drawing an arrow’s length follows the square root of the force, so that a force of a fraction of a newton and one of several hundred newtons both fit the same picture; the numbers above and on the arrows are the true ones.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the Coulomb force and the gravitational force between the electron
   and the proton of a hydrogen atom. The two differ by thirty-nine orders
   of magnitude, so they are drawn on an axis laid out by powers of ten.
   Still: the two particles are held at the separation the reader chooses.
===================================================================== */
(function () {
  const d = sim('sim-coulomb-versus-gravity', 700);
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 0.1, max: 5, step: 0.01, value: 0.53, unit: '× 10⁻¹⁰ m', dec: 3, aria: 'the separation of the electron and the proton, in units of ten to the minus ten metres' });
  const PX = 240, CY = 250, AL = 220, AR = 1290, AY = 560;
  const LO = -50, HI = -5;                       /* fixed: the axis runs from 10^-50 N to 10^-5 N */
  const X = (lv) => AL + ((Math.min(HI, Math.max(LO, lv)) - LO) / (HI - LO)) * (AR - AL);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), qc = C('charge');
    const r = rs.v * 1e-10;
    const Fc = K * QE * QE / (r * r), Fg = GRAV * ME * MP / (r * r), ratio = Fc / Fg;
    const ex = PX + 160 + rs.v * 150;
    /* the atom: a proton, an electron, and the attraction each of them feels */
    line(ctx, PX, CY, ex, CY, PAL.rule, 2, [10, 10]);
    arrow(ctx, ex, CY, ex - 64, CY, fc, 5);
    arrow(ctx, PX, CY, PX + 64, CY, fc, 5);
    dot(ctx, PX, CY, F.el('p+'), true, 26);
    dot(ctx, ex, CY, F.el('e-'), true, 15);
    text(ctx, 'the proton', PX, CY - 96, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'the electron', ex, CY - 96, PAL.ink, { size: 20, align: 'center' });
    text(ctx, '+q_e', PX, CY - 58, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, '−q_e', ex, CY - 58, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'F = ' + sciText(Fc, 2) + ' N', (PX + ex) / 2, CY + 48, fc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    hbracket(ctx, PX, ex, CY + 116, PAL.ink, 'r = ' + fmt(rs.v, 3) + ' × 10⁻¹⁰ m');
    /* the two forces set side by side on an axis laid out by powers of ten */
    line(ctx, AL, AY, AR, AY, PAL.muted, 2);
    for (let lv = LO; lv <= HI; lv += 5) {
      line(ctx, X(lv), AY - 9, X(lv), AY + 9, PAL.muted, 2);
      text(ctx, '10' + sup(lv), X(lv), AY + 32, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'the force (N)', AR, AY + 72, fc, { size: 20, weight: 600, align: 'right' });
    const mark = (v, filled, up, label) => {
      const x = X(Math.log10(v));
      line(ctx, x, AY - 6, x, AY - up, alpha(PAL.ink, 0.35), 2, [4, 8]);
      dot(ctx, x, AY, fc, filled, 11);
      const align = x > AR - 300 ? 'right' : 'left';
      text(ctx, label + ' = ' + sciText(v, 2) + ' N', x + (align === 'right' ? -16 : 16), AY - up - 16, fc, { size: 21, weight: 600, align, bg: alpha(PAL.panel, 0.85) });
      return x;
    };
    const xg = mark(Fg, false, 96, 'F_G');
    const xc = mark(Fc, true, 96, 'F');
    hbracket(ctx, xg, xc, AY - 178, PAL.ink, 'a factor of ' + sciText(ratio, 2));
    topline(ctx, 'At a separation of ' + fmt(rs.v, 3) + ' × 10⁻¹⁰ m the Coulomb attraction is ' + sciText(Fc, 2) + ' N and the gravitational attraction is ' + sciText(Fg, 2) + ' N, so the first is ' + sciText(ratio, 2) + ' times the second.');
    readout(d.readout, `\\kF = k\\frac{\\kqe^2}{r^2} = ${sci(Fc, 2)}\\ \\text{N}, \\qquad \\kFG = G\\frac{mM}{r^2} = ${sci(Fg, 2)}\\ \\text{N}, \\qquad \\frac{\\kF}{\\kFG} = ${sci(ratio, 2)}`,
      'Both forces fall off as the inverse square of the separation, so moving the electron out weakens each of them by the same factor and the distance between the two marks on the axis never changes. Only the Coulomb force is drawn on the atom itself: an arrow for the gravitational attraction, drawn to the same scale, would be shorter than an atomic nucleus by a factor no picture can hold, which is why the two are set beside one another by powers of ten.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
