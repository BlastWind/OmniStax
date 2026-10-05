/* Figures for section 18.4 Electric Field: Concept of a Field Revisited. Boots against the section's text article.
   The figures colour charge, force, electric field and the distance
   (position). The point charges, test charges and probe the text names are
   referents, outlined in their referent colours. A charge's sign is told by the sign on its label and by the
   + or − drawn on the body, never by a hue: both signs are charge and wear the
   one charge hue. Coulomb's constant stays in ink. Neither figure has a clock in it, so
   neither registers a cycle and neither carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the two figures ---------- */
const TAU = 2 * Math.PI;
const K = 8.99e9;                                   /* Coulomb's constant, N·m²/C² */
/* a number with the typographic minus, and one that always carries its sign */
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
const plus = (v, d) => (v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* the same in LaTeX, always signed */
const texSign = (v, d) => (v < 0 ? '-' : '+') + fmt(Math.abs(v), d);
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
/* a positive number in scientific notation for the canvas, and for the readout */
function sci(v, d) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return fmt(m, d) + ' × 10' + String(e).split('').map((c) => SUP[c]).join('');
}
function sciTex(v, d) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return `${fmt(m, d)} \\times 10^{${e}}`;
}
/* a label kept inside the canvas, whatever the sliders do */
const clampX = (x, half = 110) => Math.min(Math.max(x, half + 20), 1400 - half - 20);
/* a point charge: a ring with its sign drawn inside it, so that the
   figure stays legible with the hues turned off */
function pointCharge(ctx, x, y, q, r, stroke = PAL.ink) {
  ctx.save(); ctx.lineWidth = 3.5; ctx.strokeStyle = stroke; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  const g = q > 0 ? '+' : q < 0 ? '−' : '0';
  text(ctx, g, x, y + 1, PAL.ink, { size: r * 1.6, weight: 700, align: 'center' });
}
/* the distance between two points, drawn as a thin rule with end ticks and its
   value written above the middle of it */
function span(ctx, x1, x2, y, label) {
  const pc = C('position');
  line(ctx, x1, y, x2, y, pc, 2);
  line(ctx, x1, y - 10, x1, y + 10, pc, 2); line(ctx, x2, y - 10, x2, y + 10, pc, 2);
  text(ctx, label, (x1 + x2) / 2, y - 20, pc, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.9) });
}

/* =====================================================================
   FIGURE 18.18: one positive charge Q, and two different test charges set
   down the same distance from it. The book draws two panels, one repulsion
   and one attraction; here both test charges are the reader's, through zero
   and across sign, so that the force field is seen to answer the test charge
   and not only the charge that creates it. Still: two charges held at a
   fixed separation while the reader decides how much charge each carries
   have no time in them, so the figure answers its sliders, registers no
   cycle and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-force-field', 660);
  const Qs = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: 0.5, max: 3, step: 0.1, value: 2, unit: 'μC', dec: 1, aria: 'the charge that creates the force field' });
  const q1s = ctl(d.controls, { label: '\\kqone', cls: 'charge', min: -4, max: 4, step: 0.1, value: 1, unit: 'μC', dec: 1, aria: 'the first test charge' });
  const q2s = ctl(d.controls, { label: '\\kqtwo', cls: 'charge', min: -4, max: 4, step: 0.1, value: -3, unit: 'μC', dec: 1, aria: 'the second test charge' });
  const rs = ctl(d.controls, { label: '\\text{separation}', cls: 'position', min: 4, max: 10, step: 0.1, value: 6, unit: 'cm', dec: 1, aria: 'the distance from the charge to each test charge' });
  const QX = 180, S = 78, ROW = [270, 500], MAXLEN = 280;
  /* the Coulomb force in newtons, for charges in microcoulombs and a separation in centimetres */
  const force = (Q, q, r) => K * Math.abs(Q * q) * 1e-12 / Math.pow(r * 1e-2, 2);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), fc = C('force');
    const Q = Qs.v, r = rs.v, qq = [q1s.v, q2s.v];
    const Fv = qq.map((q) => force(Q, q, r));
    const big = Math.max(Fv[0], Fv[1], 1e-9);
    qq.forEach((q, i) => {
      const y = ROW[i], tx = QX + r * S;
      /* the charge that creates the field, drawn again in each row because it is the same charge */
      pointCharge(ctx, QX, y, Q, 30, F.ref('source-charge'));
      text(ctx, 'Q = ' + plus(Q, 1) + ' μC', QX, y + 58, qc, { size: 22, weight: 600, align: 'center' });
      span(ctx, QX + 30, tx - 26, y - 74, 'r = ' + fmt(r, 1) + ' cm');
      /* the test charge, and the Coulomb force the field exerts on it */
      pointCharge(ctx, tx, y, q, 26, F.ref(i ? 'test-2' : 'test-1'));
      text(ctx, (i ? 'q₂ = ' : 'q₁ = ') + plus(q, 1) + ' μC', tx, y + 54, qc, { size: 22, weight: 600, align: 'center' });
      const away = Q * q > 0 ? 1 : -1, L = Math.min((Fv[i] / big) * MAXLEN, away > 0 ? MAXLEN : r * S - 30 - 30 - 24);
      if (L > 6) {
        arrow(ctx, tx + away * 30, y, tx + away * (30 + L), y, fc, 5);
        /* the label sits above the middle of the arrow, so that it never lands on
           the charge the arrow points at however long or short the arrow is */
        const lx = clampX(tx + away * (30 + L / 2));
        text(ctx, (i ? 'F₂ = ' : 'F₁ = ') + fmt(Fv[i], 2) + ' N', lx, y - 30, fc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
        text(ctx, away > 0 ? 'repelled' : 'attracted', lx, y + 26, PAL.muted, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.9) });
      } else {
        text(ctx, q === 0 ? 'no charge here, and so no force' : 'the force is too small to draw', tx + 44, y, PAL.muted, { size: 19 });
      }
      text(ctx, i ? '(b)' : '(a)', 96, y - 74, PAL.muted, { size: 21, weight: 600 });
    });
    const ratio = Fv[0] > 0 ? Fv[1] / Fv[0] : 0;
    topline(ctx, q1s.v === 0 || q2s.v === 0
      ? 'A test charge of nothing feels no force, however much charge Q carries, because the Coulomb force is proportional to both charges.'
      : 'At the same distance from the same charge Q, the force on q₂ is ' + fmt(ratio, 2) + ' times the force on q₁, and the two point '
        + (Math.sign(q1s.v) === Math.sign(q2s.v) ? 'the same way' : 'opposite ways') + '.');
    readout(d.readout, `\\kFone = k\\frac{|\\kqone\\kQch|}{\\krad^2} = (8.99 \\times 10^{9})\\frac{(${fmt(Math.abs(q1s.v), 1)} \\times 10^{-6})(${fmt(Qs.v, 1)} \\times 10^{-6})}{(${fmt(rs.v / 100, 3)})^2}\\ \\text{N} = ${fmt(Fv[0], 2)}\\ \\text{N}`,
      `The same law gives $\\kFtwo = ${fmt(Fv[1], 2)}\\ \\text{N}$ on $\\kqtwo$. The longer arrow is drawn at a fixed length and the shorter in proportion to it.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the field of a point charge, and the force it exerts on a test
   charge set down in it. The field arrow at the probe is what the point
   charge alone makes there, so it holds still while the test charge is
   taken through zero and across sign and the force arrow shrinks, vanishes
   and turns about. The graph below gives the inverse square its shape.
   The defaults are Example 18.2 and Example 18.3. Still: a charge held at a
   distance from another has no clock in it.
===================================================================== */
(function () {
  const d = sim('sim-point-charge-field', 940);
  const Qs = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: -5, max: 5, step: 0.25, value: 2, unit: 'nC', dec: 2, aria: 'the point charge that creates the field' });
  const rs = ctl(d.controls, { label: '\\text{distance}', cls: 'position', min: 2, max: 20, step: 0.25, value: 5, unit: 'mm', dec: 2, aria: 'the distance from the point charge to the probe' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: -1, max: 1, step: 0.05, value: -0.25, unit: 'μC', dec: 2, aria: 'the test charge set down at the probe' });
  const QX = 200, YS = 300, S = 44, BOX = { l: 180, r: 1250, t: 590, b: 850 };
  /* the ranges are fixed from the sliders: r runs the whole slider, and E is
     cut at 2.0 × 10⁶ N/C, above which the marker is pinned at the top edge */
  const RX = [0, 20], RY = [0, 2e6];
  /* the field in N/C for a charge in nanocoulombs at a distance in millimetres */
  const field = (Q, r) => K * Math.abs(Q) * 1e-9 / Math.pow(r * 1e-3, 2);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), fc = C('force'), ec = C('electric-field'), prc = F.ref('probe');
    const Q = Qs.v, r = rs.v, q = qs.v;
    const E = field(Q, r), Fv = Math.abs(q) * 1e-6 * E;
    const px = QX + r * S;
    /* the charge, the probe, and the distance between them */
    pointCharge(ctx, QX, YS, Q, 32, F.ref('point-charge'));
    text(ctx, 'Q = ' + plus(Q, 2) + ' nC', QX - 44, YS, qc, { size: 22, weight: 600, align: 'right' });
    span(ctx, QX + 32, px, YS - 110, 'r = ' + fmt(r, 2) + ' mm');
    line(ctx, px, YS - 56, px, YS + 20, prc, 2, [4, 8]);
    text(ctx, 'the probe', px, YS + 180, prc, { size: 19, align: 'center' });
    /* the field at the probe: away from a positive charge, towards a negative one */
    const eDir = Q >= 0 ? 1 : -1;
    const eLen = Math.max(30, Math.min(240, 150 * Math.sqrt(E / 7.19e5)));
    arrow(ctx, px, YS - 44, px + eDir * eLen, YS - 44, ec, 5);
    text(ctx, 'E = ' + sci(E, 2) + ' N/C', clampX(px + eDir * eLen / 2), YS - 76, ec, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    /* the test charge at the probe, and the force on it */
    pointCharge(ctx, px, YS + 44, q, 24, F.ref('test-charge'));
    text(ctx, 'q = ' + plus(q, 2) + ' μC', px, YS + 92, qc, { size: 22, weight: 600, align: 'center' });
    if (Math.abs(q) > 1e-9) {
      const fDir = q > 0 ? eDir : -eDir, fLen = Math.max(28, Math.min(240, fDir < 0 ? px - 24 - 60 : 240, 120 * Math.sqrt(Fv / 0.18)));
      arrow(ctx, px + fDir * 24, YS + 44, px + fDir * (24 + fLen), YS + 44, fc, 5);
      text(ctx, 'F = ' + fmt(Fv, 3) + ' N', clampX(px + fDir * (24 + fLen / 2)), YS + 136, fc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    } else {
      text(ctx, 'no test charge, and so no force, but the field is here all the same', clampX(px, 320), YS + 136, PAL.muted, { size: 19, align: 'center' });
    }
    /* the inverse square, with the probe's reading on it */
    const { X, Y } = axes(ctx, BOX, RX, RY, { xl: 'r (mm)', xc: C('position'), yl: 'E (N/C)', nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => (v === 0 ? '0' : sci(v, 1)), yc: ec });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (t) => field(Q, t), 1.2, RX[1], X, Y, ec, 5, 160);
    ctx.restore();
    line(ctx, X(r), BOX.t, X(r), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, BOX, X, Y, r, E, ec);   /* the number itself is in the headline and the readout */
    text(ctx, 'the field falls as the square of the distance', BOX.r - 12, BOX.t + 30, PAL.muted, { size: 19, align: 'right' });
    topline(ctx, Q === 0 ? 'A charge of nothing makes no field, and a test charge set down anywhere near it feels no force.'
      : 'A charge of ' + plus(Q, 2) + ' nC makes a field of ' + sci(E, 2) + ' N/C at ' + fmt(r, 2) + ' mm, pointing '
        + (Q > 0 ? 'away from it' : 'towards it') + ', and that field pushes the ' + (q === 0 ? 'test charge' : q > 0 ? 'positive test charge along itself' : 'negative test charge against itself') + '.');
    readout(d.readout, `\\kF = |\\kq|\\kEf = (${fmt(Math.abs(q), 2)} \\times 10^{-6}\\ \\text{C})(${sciTex(E, 2)}\\ \\text{N/C}) = ${fmt(Fv, 3)}\\ \\text{N}`,
      'The arrows are drawn shorter than in proportion so that small and large readings both show; the numbers beside them are the true values.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
