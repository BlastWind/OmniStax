/* Figures for section 19.3 Electrical Potential Due to a Point Charge. Boots against the section's text article.
   The section states one formula and draws one consequence of it. The first
   sim is the point charge itself, its equipotential circles and the two
   graphs that separate a potential falling as 1/r from a field falling as
   1/r². The second is the sentence that voltages add as numbers and fields
   add as vectors, drawn as two numbers with a plus sign between them beside
   two arrows with a resultant. The third is Figure 19.7, the demonstration
   Van de Graaff generator, whose sphere and voltmeter give the excess charge
   of Example 19.7. Nothing in V = kQ/r has a time in it, so all three
   figures are still and none takes a transport. The page binds voltage,
   charge, position, electric-field and energy; Coulomb's constant, the
   frames of the scenes and the generator's belt, pulleys and motor are ink,
   and the sign of a charge is told by its label, never by a hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, hbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the three figures ---------- */
const K = 8.99e9;                                        /* Coulomb's constant, as the examples of this section use it */
const E_BREAKDOWN = 3.0e6;                               /* the field dry air will support, from Example 19.4 */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sciParts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const s = x < 0 ? '−' : ''; const { m, e } = sciParts(Math.abs(x), d); return s + m + ' × 10' + sup(e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const s = x < 0 ? '-' : ''; const { m, e } = sciParts(Math.abs(x), d); return s + m + ' \\times 10^{' + e + '}'; };
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
const signed = (v, d) => (v < 0 ? '−' : '+') + fmt(Math.abs(v), d);

/* =====================================================================
   SIM: the potential of a point charge. The charge sits at the centre of
   its equipotential circles and a marker sits at the distance r, with the
   potential and the field graphed against that distance side by side.
   Still: V = kQ/r has no time in it, so the figure answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-point-charge-potential', 1040);
  const Qm = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: 0.5, max: 10, step: 0.1, value: 3, unit: 'nC', dec: 2, aria: 'magnitude of the point charge' });
  const sgn = choice(d.controls, { label: '\\text{The charge is}', options: [{ value: 'pos', label: 'Positive' }, { value: 'neg', label: 'Negative' }], value: 'neg', aria: 'sign of the point charge' });
  const R = ctl(d.controls, { label: '\\kr', cls: 'position', min: 1, max: 20, step: 0.25, value: 5, unit: 'cm', dec: 2, aria: 'distance from the charge' });
  const cx = 700, cy = 360, PPC = 13;                     /* 13 logical units to the centimetre, so 20 cm reaches 260 */
  /* The ranges are set from the default state, not from the slider maxima, which would leave the
     −539 V and 1.08 × 10⁴ N/C of Example 19.6 a flat line at the axis; a larger charge or a smaller
     distance runs off the top and is pinned there (root rule of interactive-figures § 2). */
  const Vmax = 1500, Emax = 6e4;
  const gV = { l: 130, r: 660, t: 700, b: 940 };          /* 0 to 20 cm across, ±1500 V up */
  const gE = { l: 810, r: 1340, t: 700, b: 940 };         /* 0 to 20 cm across, 0 to 6 × 10⁴ N/C up */
  const RINGS = [5, 10, 15, 20];
  function draw() {
    const { ctx } = begin(d.c);
    const s = sgn.value === 'neg' ? -1 : 1;
    const Q = s * Qm.v * 1e-9, rm = R.v / 100;
    const V = (K * Q) / rm, E = (K * Math.abs(Q)) / (rm * rm);
    /* the equipotential circles, each labelled with the potential on it */
    RINGS.forEach((rc, i) => {
      const rad = rc * PPC, Vc = (K * Q) / (rc / 100);
      ctx.save(); ctx.strokeStyle = alpha(C('voltage'), 0.75); ctx.lineWidth = 3; ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      const a = 138 * (Math.PI / 180);
      text(ctx, num(Vc, 0) + ' V', cx + rad * Math.cos(a) - 6, cy - rad * Math.sin(a), C('voltage'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    });
    /* the charge itself */
    dot(ctx, cx, cy, C('charge'), true, 16);
    text(ctx, s < 0 ? '−' : '+', cx, cy, PAL.panel, { size: 22, weight: 600, align: 'center', base: 'middle' });
    text(ctx, 'Q = ' + num(s * Qm.v, 2) + ' nC', cx, cy + 42, C('charge'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    /* the marker at the distance r, with the radius and the field arrow */
    const ang = -32 * (Math.PI / 180), px = cx + R.v * PPC * Math.cos(ang), py = cy - R.v * PPC * Math.sin(ang);
    line(ctx, cx, cy, px, py, C('position'), 3, [10, 10]);
    dot(ctx, px, py, PAL.ink, false, 10);
    const ux = Math.cos(ang), uy = -Math.sin(ang), aL = 26 + 64 * Math.min(1, E / 6e4);
    if (s > 0) arrow(ctx, px + 12 * ux, py + 12 * uy, px + (12 + aL) * ux, py + (12 + aL) * uy, C('electric-field'), 4);
    else arrow(ctx, px + (12 + aL) * ux, py + (12 + aL) * uy, px + 12 * ux, py + 12 * uy, C('electric-field'), 4);
    /* both readings for the marked point are stacked past the tip of the field arrow, so that they
       never sit on the equipotential circles however near the charge the marker is brought */
    const tx = cx + (R.v * PPC + 12 + aL + 18) * ux, ty = cy - R.v * PPC * Math.sin(ang) + (12 + aL + 18) * uy;
    text(ctx, 'r = ' + fmt(R.v, 2) + ' cm', tx, ty - 34, C('position'), { size: 21, weight: 600, bg: PAL.panel });
    text(ctx, 'V = ' + num(V, 0) + ' V here', tx, ty, C('voltage'), { size: 21, weight: 600, bg: PAL.panel });
    text(ctx, 'E = ' + sci(E, 2) + ' N/C', tx, ty + 34, C('electric-field'), { size: 21, weight: 600, bg: PAL.panel });
    /* the two graphs: the potential falls as 1/r, the field as 1/r² */
    const a1 = axes(ctx, gV, [0, 20], [-Vmax, Vmax], { nx: 4, ny: 4, xl: 'distance r (cm)', xc: C('position'), yl: 'V (V)', yc: C('voltage') });
    line(ctx, a1.X(0), a1.Y(0), a1.X(20), a1.Y(0), alpha(PAL.ink, 0.35), 2);
    curve(ctx, (r) => Math.max(-Vmax, Math.min(Vmax, (K * Q) / (r / 100))), 1, 20, a1.X, a1.Y, C('voltage'), 5, 140);
    pinned(ctx, gV, a1.X, a1.Y, R.v, V, C('voltage'));
    const a2 = axes(ctx, gE, [0, 20], [0, Emax], { nx: 4, ny: 3, xl: 'distance r (cm)', xc: C('position'), yl: 'E (N/C)', yc: C('electric-field'), fy: (v) => (v === 0 ? '0' : sci(v, 1)) });
    curve(ctx, (r) => Math.min(Emax, (K * Math.abs(Q)) / Math.pow(r / 100, 2)), 1, 20, a2.X, a2.Y, C('electric-field'), 5, 140);
    pinned(ctx, gE, a2.X, a2.Y, R.v, E, C('electric-field'));
    topline(ctx, fmt(R.v, 2) + ' cm from a ' + num(s * Qm.v, 2) + ' nC charge the potential is ' + num(V, 0) + ' V and the field is ' + sci(E, 2) + ' N/C.');
    readout(d.readout, `\\kV = \\frac{k\\kQch}{\\kr} = \\frac{(${sciTex(K, 2)}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2)(${sciTex(Q, 2)}\\ \\text{C})}{${fmt(rm, 4)}\\ \\text{m}} = ${num(V, 0)}\\ \\text{V}`,
      'The field of the same charge at the same place is E = kQ/r² = ' + sci(E, 2) + ' N/C. '
      + (R.v <= 10 ? 'Move the marker to twice the distance, ' + fmt(R.v * 2, 2) + ' cm, and the potential falls to half of what it is here while the field falls to a quarter of it.'
        : 'Move the marker in to half the distance, ' + fmt(R.v / 2, 2) + ' cm, and the potential doubles while the field goes up four times.')
      + ' That is why the equipotential circles are far apart out here and crowd together near the charge.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: voltages add as numbers, fields add as vectors. Two charges on a
   line and a point above them: two potentials and their sum, two field
   arrows and their resultant. Still: a sum has no clock.
===================================================================== */
(function () {
  const d = sim('sim-potentials-add', 940);
  const Q2m = ctl(d.controls, { label: '\\kQch_2', cls: 'charge', min: 0.5, max: 5, step: 0.1, value: 3, unit: 'µC', dec: 2, aria: 'magnitude of the second charge' });
  const s2 = choice(d.controls, { label: '\\text{The second charge is}', options: [{ value: 'pos', label: 'Positive' }, { value: 'neg', label: 'Negative' }], value: 'neg', aria: 'sign of the second charge' });
  const D = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.4, max: 2, step: 0.05, value: 1.2, unit: 'm', dec: 2, aria: 'separation of the charges' });
  const XP = ctl(d.controls, { label: 'x', cls: 'position', min: -1, max: 2.5, step: 0.05, value: 0.6, unit: 'm', dec: 2, aria: 'position of the marked point' });
  const Q1 = 2e-6, YP = 0.35;                             /* the first charge is held at +2.00 µC; the point runs 0.35 m above the line */
  const y0 = 430, PPM = 300, X = (m) => 200 + PPM * (m + 1);   /* −1.00 m at x = 200, 2.50 m at x = 1250 */
  /* The graph stands under the scene at the same scale across, so a place on the line and a place on
     the curve are the same place. The potential range is set from the default pair, and a larger
     second charge runs off the top and is pinned there. */
  const gx = { l: 200, r: 1250, t: 620, b: 840 };         /* −1.00 to 2.50 m across, −80 to 80 kV up, both fixed */
  function draw() {
    const { ctx } = begin(d.c);
    const q2 = (s2.value === 'neg' ? -1 : 1) * Q2m.v * 1e-6;
    const Vat = (x) => {
      const r1 = Math.hypot(x, YP), r2 = Math.hypot(x - D.v, YP);
      return { r1, r2, v1: (K * Q1) / r1, v2: (K * q2) / r2 };
    };
    const { r1, r2, v1, v2 } = Vat(XP.v), Vp = v1 + v2;
    const px = X(XP.v), py = y0 - YP * PPM;
    /* the line the charges stand on */
    line(ctx, X(-1), y0, X(2.5), y0, alpha(PAL.ink, 0.35), 2);
    const x1 = X(0), x2 = X(D.v);
    dot(ctx, x1, y0, C('charge'), true, 15); text(ctx, '+', x1, y0, PAL.panel, { size: 21, weight: 600, align: 'center', base: 'middle' });
    dot(ctx, x2, y0, C('charge'), true, 15); text(ctx, q2 < 0 ? '−' : '+', x2, y0, PAL.panel, { size: 21, weight: 600, align: 'center', base: 'middle' });
    text(ctx, 'Q₁ = +2.00 µC', x1, y0 + 42, C('charge'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'Q₂ = ' + signed(q2 * 1e6, 2) + ' µC', x2, y0 + (x2 - x1 < 300 ? 84 : 42), C('charge'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    hbracket(ctx, x1, x2, y0 + 120, C('position'), 'd = ' + fmt(D.v, 2) + ' m');
    /* the marked point, its two field arrows and their resultant */
    const scale = 110 / 6e4;
    const e1 = (K * Q1) / (r1 * r1), e2 = (K * Math.abs(q2)) / (r2 * r2);
    const u1 = [(px - x1) / (r1 * PPM), (py - y0) / (r1 * PPM)];
    const u2 = [((px - x2) / (r2 * PPM)) * (q2 < 0 ? -1 : 1), ((py - y0) / (r2 * PPM)) * (q2 < 0 ? -1 : 1)];
    const cap = (v) => Math.min(v, 150), l1 = cap(18 + e1 * scale), l2 = cap(18 + e2 * scale);
    const Ex = e1 * u1[0] + e2 * u2[0], Ey = e1 * u1[1] + e2 * u2[1], Em = Math.hypot(Ex, Ey);
    const lr = cap(18 + Em * scale);
    arrow(ctx, px, py, px + l1 * u1[0], py + l1 * u1[1], alpha(C('electric-field'), 0.55), 4);
    arrow(ctx, px, py, px + l2 * u2[0], py + l2 * u2[1], alpha(C('electric-field'), 0.55), 4);
    if (Em > 0) arrow(ctx, px, py, px + (lr * Ex) / Em, py + (lr * Ey) / Em, C('electric-field'), 6);
    dot(ctx, px, py, PAL.ink, false, 10);
    text(ctx, 'P', px - 20, py - 14, PAL.ink, { size: 22, weight: 600, align: 'right' });
    const lx = Math.min(Math.max(px, 300), 1120);
    text(ctx, 'V = ' + num(Vp / 1000, 1) + ' kV', lx, py - 44, C('voltage'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    if (Em > 0) text(ctx, 'the resultant field, ' + sci(Em, 2) + ' N/C', lx, py - 80, C('electric-field'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    /* the potential along the line the point runs on */
    const a = axes(ctx, gx, [-1, 2.5], [-80, 80], { nx: 7, ny: 4, xl: 'position along the line (m)', xc: C('position'), yl: 'V (kV)', yc: C('voltage'), fx: (v) => fmt(v, 1) });
    line(ctx, a.X(-1), a.Y(0), a.X(2.5), a.Y(0), alpha(PAL.ink, 0.35), 2);
    curve(ctx, (x) => { const w = Vat(x); return Math.max(-80, Math.min(80, (w.v1 + w.v2) / 1000)); }, -1, 2.5, a.X, a.Y, C('voltage'), 5, 200);
    pinned(ctx, gx, a.X, a.Y, XP.v, Vp / 1000, C('voltage'));
    topline(ctx, 'At the marked point the two charges contribute ' + num(v1 / 1000, 1) + ' kV and ' + num(v2 / 1000, 1) + ' kV, so the potential there is ' + num(Vp / 1000, 1) + ' kV.');
    readout(d.readout, `\\kV = \\frac{k\\kQch_1}{\\kr_1} + \\frac{k\\kQch_2}{\\kr_2} = ${num(v1 / 1000, 1)}\\ \\text{kV} + (${num(v2 / 1000, 1)}\\ \\text{kV}) = ${num(Vp / 1000, 1)}\\ \\text{kV}`,
      'The two fields do not add that way. At the same point they are ' + sci(e1, 2) + ' N/C and ' + sci(e2, 2) + ' N/C, and because they point in different directions their resultant is '
      + sci(Em, 2) + ' N/C rather than the sum of the two numbers. The energy stored in the pair of charges is PE = kQ₁Q₂/d = ' + sci((K * Q1 * q2) / D.v, 2) + ' J.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.7: the demonstration Van de Graaff generator. Its sphere is at
   the potential of an equal point charge at its centre, so the voltmeter's
   reading and the radius give the excess charge of Example 19.7. Still:
   nothing the figure computes changes with time.
===================================================================== */
(function () {
  const d = sim('sim-van-de-graaff', 860);
  const DIA = ctl(d.controls, { label: '\\text{diameter}', cls: 'position', min: 10, max: 50, step: 0.5, value: 25, unit: 'cm', dec: 1, aria: 'diameter of the sphere' });
  const V = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 10, max: 300, step: 5, value: 100, unit: 'kV', dec: 0, aria: 'voltage at the surface of the sphere' });
  const cx = 470, cy = 340, PPC = 8;                      /* 8 logical units to the centimetre, so a 50 cm sphere reaches 200 */
  const base = 720, lower = 630;
  function draw() {
    const { ctx } = begin(d.c);
    const rm = DIA.v / 200, Vv = V.v * 1000, Q = (rm * Vv) / K, E = Vv / rm;
    const rad = (DIA.v / 2) * PPC, broken = E >= E_BREAKDOWN;
    /* the belt over its two pulleys, the motor and the stand: the frame, in ink */
    line(ctx, cx - 26, cy, cx - 26, lower, PAL.rule, 3);
    line(ctx, cx + 26, cy, cx + 26, lower, PAL.rule, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.arc(cx, cy, 26, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, lower, 26, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.fillRect(cx - 120, base, 240, 46); ctx.strokeRect(cx - 120, base, 240, 46);
    ctx.restore();
    text(ctx, 'motor', cx, base + 23, PAL.ink, { size: 20, align: 'center', base: 'middle' });
    text(ctx, 'belt', cx - 44, (cy + lower) / 2, PAL.muted, { size: 20, align: 'right' });
    /* the sphere, its excess charge and the field at its surface */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = alpha(PAL.soft, 0.6);
    ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    const n = Math.max(6, Math.min(18, Math.round(6 + Q * 1.2e6)));
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      text(ctx, '+', cx + (rad - 13) * Math.cos(a), cy + (rad - 13) * Math.sin(a), C('charge'), { size: 21, weight: 600, align: 'center', base: 'middle' });
      arrow(ctx, cx + (rad + 4) * Math.cos(a), cy + (rad + 4) * Math.sin(a), cx + (rad + 30) * Math.cos(a), cy + (rad + 30) * Math.sin(a), C('electric-field'), 3);
    }
    line(ctx, cx, cy, cx - rad, cy, C('position'), 3, [10, 10]);
    text(ctx, 'r = ' + fmt(DIA.v / 2, 2) + ' cm', cx - rad - 44, cy - 14, C('position'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'Q = ' + fmt(Q * 1e6, Q * 1e6 < 0.5 ? 3 : 2) + ' µC on the surface', cx, Math.max(100, cy - rad - 54), C('charge'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the lead to the voltmeter, and the voltmeter reading against ground */
    const mx = 1070, my = 360;
    line(ctx, cx + rad, cy, mx - 90, cy, PAL.ink, 3);
    line(ctx, mx - 90, cy, mx - 90, my - 60, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.arc(mx, my, 92, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    const sweep = -Math.PI * 0.75 + (Math.PI * 1.5 * V.v) / 300;
    line(ctx, mx, my + 34, mx + 64 * Math.cos(sweep - Math.PI / 2), my + 34 + 64 * Math.sin(sweep - Math.PI / 2), C('voltage'), 4);
    dot(ctx, mx, my + 34, PAL.ink, true, 7);
    text(ctx, fmt(V.v, 0) + ' kV', mx, my + 70, C('voltage'), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'voltmeter', mx, my + 126, PAL.ink, { size: 21, align: 'center' });
    /* ground, the zero of potential */
    line(ctx, mx, my + 148, mx, base + 10, PAL.ink, 3);
    for (let i = 0; i < 3; i++) line(ctx, mx - 44 + 12 * i, base + 10 + 14 * i, mx + 44 - 12 * i, base + 10 + 14 * i, PAL.ink, 3);
    text(ctx, 'ground, taken as zero', mx + 62, base + 22, PAL.muted, { size: 19 });
    topline(ctx, 'A ' + fmt(DIA.v, 1) + ' cm sphere held at ' + fmt(V.v, 0) + ' kV carries an excess charge of ' + fmt(Q * 1e6, Q * 1e6 < 0.5 ? 3 : 2) + ' µC.');
    readout(d.readout, `\\kQch = \\frac{\\kr\\kV}{k} = \\frac{(${fmt(rm, 4)}\\ \\text{m})(${sciTex(Vv, 2)}\\ \\text{V})}{${sciTex(K, 2)}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2} = ${sciTex(Q, 2)}\\ \\text{C} = ${fmt(Q * 1e6, Q * 1e6 < 0.5 ? 3 : 2)}\\ \\mu\\text{C}`,
      'At the surface the field is E = V/r = ' + sci(E, 2) + ' N/C. '
      + (broken ? 'Dry air will support only about ' + sci(E_BREAKDOWN, 1) + ' N/C, so a sphere this small held at this voltage ionizes the air around it and leaks its charge away as fast as the belt brings it up.'
        : 'Dry air will support about ' + sci(E_BREAKDOWN, 1) + ' N/C, so this sphere holds its charge; at ' + fmt((E_BREAKDOWN * rm) / 1000, 0) + ' kV the air around it would begin to break down.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
