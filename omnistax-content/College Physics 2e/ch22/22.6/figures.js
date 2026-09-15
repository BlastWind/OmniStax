/* Figures for section 22.6 The Hall Effect. Boots against the section's text
   article.
   The page binds seven types: magnetic-field, current, charge, velocity,
   force, electric-field and voltage. The first six of them are the bindings
   ch22/COLOR.md expects of this page; force is bound here as well, and the
   plan says why, since the whole section is one force set against another and
   both are drawn as arrows. The conductor, the vessel and the magnet are the
   frame of a diagram and are drawn in ink, with N and S lettered on the poles;
   a carrier's sign is told by the letter on it and never by a second hue, and
   the width of a conductor and the bore of a vessel are lengths, which this
   book leaves untyped. All three figures answer their controls and register no
   cycle: the pile-up is over as soon as it begins, and what each figure draws
   is the state it settles into. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, vbracket, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const QE = 1.60e-19;                       /* the size of the charge one carrier holds, in coulombs */

/* a number in scientific notation, as LaTeX */
function sci(x, dec) {
  if (!x) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dec) + ' \\times 10^{' + e + '}';
}
/* a voltage in whichever of the three units reads best */
function volt(v) {
  const a = Math.abs(v);
  if (a < 1e-3) return { n: fmt(v * 1e6, a < 1e-5 ? 2 : 1), u: 'μV', tex: '\\mu\\text{V}' };
  if (a < 1) return { n: fmt(v * 1e3, 2), u: 'mV', tex: '\\text{mV}' };
  return { n: fmt(v, 3), u: 'V', tex: '\\text{V}' };
}
/* the mark for a field that comes straight out of the page or out of a face:
   a circled dot, which is a field line seen end on */
function outDot(ctx, x, y, color, r) {
  ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = color; ctx.fillStyle = color;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, r * 0.34, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
}
/* one carrier: a disc in the charge hue with its sign lettered on it */
function carrier(ctx, x, y, color, sign, r) {
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = color; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, sign, x, y + 1, color, { size: r * 1.5, weight: 700, align: 'center' });
}

/* =====================================================================
   FIGURE 22.26: the flat conductor, the field out of the page, and the
   carriers driven to one face. A choice swaps what carries the current,
   which is the one thing the book draws twice. Still: the separation is
   over as soon as it begins (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-hall-carriers', 700);
  const who = choice(d.controls, { label: '\\text{the carriers}', options: [
    { value: 'e', label: 'electrons' },
    { value: 'p', label: 'positive carriers' }], value: 'e', aria: 'what carries the current' });
  const bs = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.02, max: 0.50, step: 0.01, value: 0.10, unit: 'T', dec: 2, aria: 'the strength of the magnetic field out of the page' });
  const vs = ctl(d.controls, { label: '\\kvd', cls: 'velocity', min: 0.10, max: 2.00, step: 0.05, value: 0.50, unit: 'mm/s', dec: 2, aria: 'the drift speed of the carriers' });

  const X0 = 280, X1 = 1080, YT = 200, YB = 520, YM = 360;        /* the conductor */
  const HX = 700;                                                  /* the carrier that is singled out */
  const SIGNX = [340, 440, 540, 640, 740, 840, 940, 1040];         /* where the gathered charge is drawn */
  const DOTY = [288, 432];                                         /* the two rows that mark the field */
  const CARX = [330, 420, 510, 890, 980, 1070];

  function draw() {
    const { ctx } = begin(d.c);
    const bc = C('magnetic-field'), ic = C('current'), qc = C('charge'), vc = C('velocity'), fc = C('force'), ec = C('voltage');
    const neg = who.value === 'e';
    const B = bs.v, vd = vs.v * 1e-3, Fm = QE * vd * B;

    /* the conductor, an ink slab */
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = alpha(PAL.ink, 0.045);
    ctx.beginPath(); ctx.rect(X0, YT, X1 - X0, YB - YT); ctx.fill(); ctx.stroke(); ctx.restore();

    /* the conventional current, to the right whichever sign carries it */
    arrow(ctx, 540, 152, 860, 152, ic, 5);
    text(ctx, 'I, the conventional current', 700, 120, ic, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'B = ' + fmt(B, 2) + ' T, out of the page', X0, 176, bc, { size: 22, weight: 600 });

    /* the field, straight out of the page, drawn as the book draws it */
    for (const y of DOTY) for (const x of SIGNX) outDot(ctx, x, y, bc, 11);

    /* the charge that has gathered on the two faces: the carriers are driven
       to the lower face whichever sign they carry, so the lower face takes
       their sign and the upper face the other */
    const lower = neg ? '−' : '+', upper = neg ? '+' : '−';
    for (const x of SIGNX) {
      text(ctx, upper, x, YT + 26, qc, { size: 30, weight: 700, align: 'center' });
      text(ctx, lower, x, YB - 26, qc, { size: 30, weight: 700, align: 'center' });
    }

    /* the carriers, drifting against the current when they are negative and
       with it when they are positive */
    for (const x of CARX) carrier(ctx, x, YM, qc, neg ? '−' : '+', 13);
    const vx = neg ? -1 : 1, tip = HX + vx * 130;
    arrow(ctx, HX + vx * 24, YM, tip, YM, vc, 5);
    label(ctx, 'v_d = ' + fmt(vs.v, 2) + ' mm/s', (HX + tip) / 2, YM, { side: 'above', size: 21, color: vc, gap: 30 });
    carrier(ctx, HX, YM, qc, neg ? '−' : '+', 16);
    arrow(ctx, HX, YM + 26, HX, YM + 96, fc, 5);
    label(ctx, 'F', HX, YM + 62, { side: 'left', size: 22, color: fc, gap: 18 });

    /* the leads and the meter that reads the Hall emf across the conductor */
    const MX = 1230, MY = YM;
    line(ctx, X1, YT + 40, MX, YT + 40, PAL.muted, 3); line(ctx, MX, YT + 40, MX, MY - 44, PAL.muted, 3);
    line(ctx, X1, YB - 40, MX, YB - 40, PAL.muted, 3); line(ctx, MX, YB - 40, MX, MY + 44, PAL.muted, 3);
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.arc(MX, MY, 44, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, neg ? 'ε' : '−ε', MX, MY, ec, { size: 28, weight: 700, align: 'center' });
    text(ctx, neg ? 'positive at the top' : 'negative at the top', MX, MY + 74, PAL.muted, { size: 18, align: 'center' });

    /* what the two marks in the slab are */
    text(ctx, 'F is the magnetic force on that carrier, and the circled dots are the magnetic field coming out of the page.', 680, 590, PAL.muted, { size: 19, align: 'center' });

    topline(ctx, neg
      ? 'The carriers are electrons and drift to the left, against the conventional current, so the magnetic force drives them to the lower face and the Hall emf stands positive at the upper face.'
      : 'The carriers are positive and drift to the right, with the conventional current, so the magnetic force drives them to the lower face and the Hall emf stands negative at the upper face.');

    readout(d.readout,
      `\\kF = \\kq\\kvd\\kBmag = (${sci(QE, 2)}\\ \\text{C})(${sci(vd, 2)}\\ \\text{m/s})(${fmt(B, 2)}\\ \\text{T}) = ${sci(Fm, 2)}\\ \\text{N}`,
      neg
        ? 'The force on each electron is the same force on a moving charge that the last two sections gave, and it points to the lower face, so the lower face gathers electrons and turns negative while the upper face is left positive.'
        : 'The force on each positive carrier points to the lower face as well, because reversing both the sign of the charge and the direction it moves leaves the force where it was, so this time the lower face turns positive and the Hall emf comes out with the opposite sign.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.27: the conductor in the locked view the book draws it in
   (rule 28.2), with the magnetic force on one electron held level by the
   electric force of the charge that force has separated. Still: the
   section says the equilibrium is quickly reached, and what is drawn is
   the state after it.
===================================================================== */
(function () {
  const d = sim('sim-hall-balance', 720);
  const bs = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.02, max: 0.50, step: 0.01, value: 0.10, unit: 'T', dec: 3, aria: 'the strength of the magnetic field out of the front face' });
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.05, max: 0.50, step: 0.01, value: 0.20, unit: 'm/s', dec: 3, aria: 'the speed of the carriers along the conductor' });
  const ls = ctl(d.controls, { label: 'l', cls: '', min: 3.0, max: 10.0, step: 0.25, value: 4.0, unit: 'mm', dec: 2, aria: 'the width of the conductor across which the Hall emf appears' });

  /* the viewpoint, fixed: a little to the right of the conductor and a little
     above it, which is the book's own viewpoint, so that the front face, the
     top face and one end all show at once. There is no orbit and no button,
     since nothing the reader could turn the slab to would show more than the
     book's own viewpoint does (rule 28.2). */
  const V = view({ yaw: 0.38, pitch: 0.26, dist: 3000, cx: 660, cy: 330 });
  const kF = V.shade([0, 0, 1]), kT = V.shade([0, 1, 0]), kR = V.shade([1, 0, 0]);
  /* half-length, half-depth, and the one fixed scale: 1 mm of width is 30 units,
     so the widest conductor the slider reaches, 10.0 mm, stands 300 units tall */
  const LX = 360, DZ = 100, PXMM = 30;
  const SIGNX = [-330, -120, 120, 330], EX = [-250, 250], BX = [-300, -190, 190, 300];

  function draw() {
    const { ctx } = begin(d.c);
    const bc = C('magnetic-field'), ec = C('electric-field'), fc = C('force'), vc = C('velocity'), qc = C('charge'), uc = C('voltage');
    const B = bs.v, v = vs.v, lmm = ls.v, l = lmm * 1e-3;
    const E = v * B, emf = B * l * v, HY = (lmm * PXMM) / 2, inset = Math.min(14, HY * 0.3);
    const P = (x, y, z) => V.P([x, y, z]);
    const quad = (pts) => pts.map((p) => V.P(p));

    /* the slab: the end the viewpoint shows, the top, and the front face last */
    face(ctx, quad([[LX, -HY, DZ], [LX, -HY, -DZ], [LX, HY, -DZ], [LX, HY, DZ]]), kR, 3);
    face(ctx, quad([[-LX, HY, DZ], [LX, HY, DZ], [LX, HY, -DZ], [-LX, HY, -DZ]]), kT, 3);
    face(ctx, quad([[-LX, -HY, DZ], [LX, -HY, DZ], [LX, HY, DZ], [-LX, HY, DZ]]), kF, 3);

    /* the field, coming straight out of the front face */
    for (const x of BX) { const p = P(x, 0, DZ); outDot(ctx, p[0], p[1], bc, 10); }

    /* the charge the magnetic force has gathered on the two faces */
    for (const x of SIGNX) {
      const t = P(x, HY - inset, DZ), b = P(x, -HY + inset, DZ);
      text(ctx, '+', t[0], t[1], qc, { size: 26, weight: 700, align: 'center' });
      text(ctx, '−', b[0], b[1], qc, { size: 26, weight: 700, align: 'center' });
    }

    /* the electric field that gathered charge maintains, from the positive
       face down to the negative one */
    for (const x of EX) {
      const a = P(x, HY - inset - 12, DZ), b = P(x, -HY + inset + 12, DZ);
      arrow(ctx, a[0], a[1], b[0], b[1], ec, 4.5);
    }

    /* the one electron, its velocity along the conductor, and the two forces
       on it, drawn the same length on the page because they are equal */
    const pe = P(0, 0, DZ), pv = P(-140, 0, DZ);
    arrow(ctx, pe[0] - 26, pe[1], pv[0], pv[1], vc, 5);
    label(ctx, 'v = ' + fmt(v, 3) + ' m/s', (pe[0] + pv[0]) / 2, (pe[1] + pv[1]) / 2, { side: 'above', size: 21, color: vc, gap: 30 });
    arrow(ctx, pe[0], pe[1] + 22, pe[0], pe[1] + 106, fc, 5);
    arrow(ctx, pe[0], pe[1] - 22, pe[0], pe[1] - 106, fc, 5);
    label(ctx, 'F', pe[0], pe[1] + 106, { side: 'below', size: 22, color: fc, gap: 18 });
    label(ctx, 'F_e', pe[0], pe[1] - 106, { side: 'above', size: 22, color: fc, gap: 18 });
    carrier(ctx, pe[0], pe[1], qc, '−', 14);

    /* the width the emf appears across, bracketed at the free end */
    const tl = P(-LX, HY, DZ), bl = P(-LX, -HY, DZ);
    vbracket(ctx, Math.min(tl[0], bl[0]) - 48, tl[1], bl[1], PAL.ink, 'l = ' + fmt(lmm, 2) + ' mm', -1, { side: 'left' });
    text(ctx, 'ε = ' + volt(emf).n + ' ' + volt(emf).u + ' across the width', 680, 566, uc, { size: 23, weight: 600, align: 'center' });

    /* what each mark in the slab is, once, in a legend */
    text(ctx, 'B = ' + fmt(B, 3) + ' T, coming out of the front face, drawn as circled dots', 60, 608, bc, { size: 20, weight: 600 });
    text(ctx, 'E = ' + fmt(E, 4) + ' V/m, running from the positive face down to the negative one', 60, 638, ec, { size: 20, weight: 600 });
    text(ctx, 'F = qvB downward and F_e = qE upward, equal at the balance, so the gathering stops', 60, 668, fc, { size: 20, weight: 600 });

    topline(ctx, 'The electric force on the electron is as large as the magnetic force and points the other way, so the field between the faces holds at ' + fmt(E, 4) + ' V/m and the charge stops gathering.');
    readout(d.readout,
      `\\kq\\kEf = \\kq\\kv\\kBmag,\\ \\text{so}\\ \\kEf = \\kv\\kBmag = ${fmt(E, 4)}\\ \\text{V/m},\\quad \\kemfhall = \\kBmag l \\kv = ${volt(emf).n}\\ ${volt(emf).tex}`,
      'The charge cancels from the balance, so the field the separation settles at does not depend on how much charge each carrier holds; the width of the conductor then turns that field into the Hall emf, which is why a wider conductor gives a larger reading at the same field and the same speed.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.28: the flow probe across a vessel, seen end on with the flow
   coming out of the page, and a scale of voltage beneath it that puts the
   reading beside the voltages of the beating heart, which is what the
   section's Discussion says makes the measurement hard. Still.
===================================================================== */
(function () {
  const d = sim('sim-flow-probe', 900);
  const bs = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.010, max: 0.500, step: 0.005, value: 0.100, unit: 'T', dec: 3, aria: 'the strength of the magnetic field across the vessel' });
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.02, max: 1.00, step: 0.01, value: 0.20, unit: 'm/s', dec: 3, aria: 'the average speed of the flow' });
  const ls = ctl(d.controls, { label: 'l', cls: '', min: 3.0, max: 10.0, step: 0.25, value: 4.0, unit: 'mm', dec: 2, aria: 'the bore of the vessel' });

  /* the vessel, on one fixed scale: 1 mm of bore is 19 units of radius, so the
     widest vessel the slider reaches, 10.0 mm, is 190 units in radius and
     still clears the pole faces */
  const CX = 650, CY = 310, PXMM = 19;
  /* the scale of voltage below the scene is fixed once from the sliders: the
     emf runs from 0.6 μV at the bottom of all three to 5 mV at the top of
     them, so a scale from 0.1 μV to 100 mV holds every reading it can give */
  const SX0 = 230, SX1 = 1170, SY = 730;
  const DEC = [-7, -6, -5, -4, -3, -2, -1];
  const TICK = ['0.1 μV', '1 μV', '10 μV', '100 μV', '1 mV', '10 mV', '100 mV'];
  const sx = (v) => SX0 + ((Math.log10(v) + 7) / 6) * (SX1 - SX0);

  function draw() {
    const { ctx } = begin(d.c);
    const bc = C('magnetic-field'), vc = C('velocity'), qc = C('charge'), fc = C('force'), uc = C('voltage');
    const B = bs.v, v = vs.v, lmm = ls.v, l = lmm * 1e-3, emf = B * l * v, R = lmm * PXMM;

    /* the two pole pieces of the magnet, in ink with their poles lettered */
    for (const [x0, nm] of [[280, 'N'], [900, 'S']]) {
      ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft;
      ctx.beginPath(); ctx.rect(x0, 200, 120, 220); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, nm, x0 + 60, 310, PAL.ink, { size: 44, weight: 700, align: 'center' });
    }
    text(ctx, 'B = ' + fmt(B, 3) + ' T, across the vessel', 300, 160, bc, { size: 21, weight: 600, align: 'center' });

    /* the vessel, seen end on, with the flow coming straight out of the page */
    ctx.save(); ctx.lineWidth = 4; ctx.strokeStyle = PAL.ink; ctx.fillStyle = alpha(PAL.ink, 0.045);
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the field, crossing the vessel from the north pole to the south */
    arrow(ctx, 410, CY, 890, CY, bc, 5);
    if (R >= 90) for (const a of [0.86, 2.28, 4.00, 5.42]) outDot(ctx, CX + Math.cos(a) * R * 0.60, CY + Math.sin(a) * R * 0.60, vc, 10);
    else { outDot(ctx, CX, CY - R * 0.55, vc, 9); outDot(ctx, CX, CY + R * 0.55, vc, 9); }

    /* the charge that gathers on the two walls, and one carrier of each sign
       with the force on it: the positive carriers are driven one way and the
       negative the other, so the sign of the emf is the same either way */
    const n = R >= 110 ? 3 : 1;
    for (let i = 0; i < n; i++) {
      const off = (i - (n - 1) / 2) * 0.58, a = -Math.PI / 2 + off;
      text(ctx, '+', CX + Math.cos(a) * R * 0.84, CY + Math.sin(a) * R * 0.84, qc, { size: 26, weight: 700, align: 'center' });
      text(ctx, '−', CX + Math.cos(a) * R * 0.84, CY - Math.sin(a) * R * 0.84, qc, { size: 26, weight: 700, align: 'center' });
    }
    const AL = Math.min(0.62 * R, 84);
    carrier(ctx, CX - R * 0.48, CY, qc, '+', 12);
    arrow(ctx, CX - R * 0.48, CY - 20, CX - R * 0.48, CY - 20 - AL, fc, 4.5);
    label(ctx, 'F', CX - R * 0.48, CY - 20 - AL, { side: 'left', size: 22, color: fc, gap: 16 });
    carrier(ctx, CX + R * 0.48, CY, qc, '−', 12);
    arrow(ctx, CX + R * 0.48, CY + 20, CX + R * 0.48, CY + 20 + AL, fc, 4.5);
    label(ctx, 'F', CX + R * 0.48, CY + 20 + AL, { side: 'right', size: 22, color: fc, gap: 16 });

    /* the bore, and the leads that carry the Hall emf out to a meter */
    /* the bore, bracketed with its label lifted off the field arrow that
       crosses the vessel on the center line */
    const bx = CX - R - 38;
    vbracket(ctx, bx, CY - R, CY + R, PAL.ink);
    label(ctx, 'l = ' + fmt(lmm, 2) + ' mm', bx, CY - R * 0.52, { side: 'left', size: 21, gap: 14 });
    const MX = 1230, MY = CY;
    line(ctx, CX, CY - R, CX, 108, PAL.muted, 3); line(ctx, CX, 108, MX, 108, PAL.muted, 3); line(ctx, MX, 108, MX, MY - 46, PAL.muted, 3);
    line(ctx, CX, CY + R, CX, 618, PAL.muted, 3); line(ctx, CX, 618, MX, 618, PAL.muted, 3); line(ctx, MX, 618, MX, MY + 46, PAL.muted, 3);
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.arc(MX, MY, 46, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'ε', MX, MY, uc, { size: 30, weight: 700, align: 'center' });
    text(ctx, volt(emf).n + ' ' + volt(emf).u, MX, MY + 76, uc, { size: 21, weight: 600, align: 'center' });

    text(ctx, 'v = ' + fmt(v, 3) + ' m/s, the flow, straight out of the page', CX, 530, vc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'The magnetic force takes the positive carriers to one wall and the negative carriers to the other,', 700, 562, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
    text(ctx, 'so the emf comes out the same way whichever sign of carrier is free to move.', 700, 588, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });

    /* the scale of voltage, with the heart's own voltages shaded on it */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    ctx.fillRect(sx(3e-4), SY - 20, sx(5e-3) - sx(3e-4), 40); ctx.restore();
    line(ctx, SX0, SY, SX1, SY, PAL.ink, 3);
    for (let i = 0; i < DEC.length; i++) {
      const x = sx(Math.pow(10, DEC[i]));
      line(ctx, x, SY - 9, x, SY + 9, PAL.ink, 2.5);
      text(ctx, TICK[i], x, SY + 32, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'the voltages the beating heart itself produces', (sx(3e-4) + sx(5e-3)) / 2, SY + 62, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'the voltage the probe has to measure', (SX0 + SX1) / 2, SY + 96, PAL.muted, { size: 19, align: 'center' });
    const px = sx(emf);
    line(ctx, px, SY - 32, px, SY + 12, uc, 4);
    dot(ctx, px, SY - 32, uc, true, 9);
    text(ctx, 'ε = ' + volt(emf).n + ' ' + volt(emf).u, px, SY - 58, uc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });

    topline(ctx, 'A field of ' + fmt(B, 3) + ' T across a vessel ' + fmt(lmm, 2) + ' mm wide, with the flow moving at ' + fmt(v, 3) + ' m/s, gives a Hall emf of ' + volt(emf).n + ' ' + volt(emf).u + '.');
    readout(d.readout,
      `\\kemfhall = \\kBmag l \\kv = (${fmt(B, 3)}\\ \\text{T})(${sci(l, 2)}\\ \\text{m})(${fmt(v, 3)}\\ \\text{m/s}) = ${volt(emf).n}\\ ${volt(emf).tex}`,
      'The sign of the emf is settled by the directions of the field and the flow alone, since the positive and the negative carriers are driven to opposite walls, and a fluid carrying both signs still gives a reading. The scale shows how small that reading is beside the millivolts of a heartbeat, which is why the probe applies an alternating field and the amplifier listens at that one frequency.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
