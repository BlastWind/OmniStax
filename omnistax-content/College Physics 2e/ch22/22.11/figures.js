/* Figures for section 22.11 More Applications of Magnetism. Boots against the
   section's text article.

   The section is a list of things built out of the chapter's two results, so
   each figure takes one of them apart. Figure 22.41 is the mass spectrometer:
   the radius r = mv/qB read as a weighing machine, with the selector in front
   of it and a detector wall behind it. The sim beside it is the selector on
   its own, where three speeds go in and one comes out, which is the only piece
   of new physics the section proves. Figure 22.42 is the cathode ray tube,
   where the gun's voltage sets the speed and a coil's field bends the beam.
   The third sim is the magnet of an MRI unit, whose field rises across the
   patient so that every slice answers a broadcast of its own; the fourth sets
   every field strength the chapter has named on one logarithmic scale, which
   is the only way the sentence "10^-6 to 10^-8 less than the Earth's" becomes
   a picture.

   One of the four has a clock in it and moves: the ions flying through the
   spectrometer, where the lighter one lands first because its arc is shorter.
   The other three answer their controls and register no cycle.

   The page binds magnetic-field, electric-field, velocity, voltage, position,
   charge and force. The first five are the list ch22/COLOR.md gives it; force
   and charge are the two the plan adds, since the selector draws qE against
   qvB and every readout of the first three figures writes the charge that
   cancels out of the balance. No body is tinted: the source, the plates, the
   chamber wall, the tube, the bore and the patient are all ink. The two
   isotopes of the spectrometer are told apart with F.cat, which ch22/COLOR.md
   names as one of the chapter's two categorical cases, while the three ions of
   the selector are one species at three speeds and are drawn in oxygen's own
   colour from the element palette, as the electron of the tube and the protons
   of the MRI slice are drawn in theirs. The dot that stands for a field out of
   the page and the cross for one into it wear the field hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.11'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, labeller, hbracket, vbracket, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sciParts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return e === 0 ? m : m + ' × 10' + sup(e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return e === 0 ? m : m + ' \\times 10^{' + e + '}'; };
const QE = 1.60e-19;                 /* the size of one electron charge, in coulombs */
const ME = 9.11e-31;                 /* the mass of an electron, in kilograms */
const M16 = 2.66e-26;                /* the mass of an oxygen-16 ion, the book's own number */
const B_EARTH = 5.00e-5;             /* the Earth's field strength, the book's own number */

/* the mark for a field perpendicular to the page: a dot in a circle for a field
   coming out, a cross for one going in. Both wear the field hue, since both are
   field lines seen end-on (ch22/COLOR.md). */
function outOfPage(ctx, x, y, color, s = 8) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(x, y, s, 0, TAU); ctx.stroke();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, 3.0, 0, TAU); ctx.fill(); ctx.restore();
}
function intoPage(ctx, x, y, color, s = 8) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.6; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - s, y - s); ctx.lineTo(x + s, y + s); ctx.moveTo(x + s, y - s); ctx.lineTo(x - s, y + s); ctx.stroke(); ctx.restore();
}
/* one polyline through a list of [x, y] points */
function poly(ctx, pts, color, w, dash) {
  if (pts.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.lineJoin = 'round';
  ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
}
/* A person lying on her back, drawn as one filled outline from the crown at (x, y)
   to the feet L units away along the page. The library's silhouette stands on its
   feet and has no supine pose, and a standing pose turned on its side reads as a
   person falling over, so this figure draws its own patient (rule 25). The half
   width at each point down the body is given as a fraction of the body's length,
   and the outline is that profile taken down one side and back up the other. */
const BODY = [[0, 0.050], [0.05, 0.062], [0.10, 0.058], [0.13, 0.030], [0.16, 0.080],
  [0.20, 0.088], [0.34, 0.070], [0.45, 0.082], [0.55, 0.070], [0.72, 0.052], [0.93, 0.034], [0.97, 0.044], [1, 0.030]];
function supine(ctx, x, y, L, color) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.lineJoin = 'round';
  ctx.beginPath();
  BODY.forEach(([u, w], i) => (i ? ctx.lineTo(x + u * L, y - w * L) : ctx.moveTo(x + u * L, y - w * L)));
  for (let i = BODY.length - 1; i >= 0; i--) ctx.lineTo(x + BODY[i][0] * L, y + BODY[i][1] * L);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a legend line: the mark, then its name set to the right of it */
function legend(ctx, mark, x, y, s, color) {
  mark(ctx, x, y, color, 8);
  text(ctx, s, x + 24, y, color, { size: 19, weight: 600 });
}

/* =====================================================================
   FIGURE 22.41: the mass spectrometer. Ions leave the source together,
   cross a velocity selector that passes one speed, and turn half circles
   of radius r = mv/qB in the chamber, landing 2r from where they entered.
   Moving: the flight has a clock in it, and the lighter ion, whose arc is
   the shorter, lands first (rule 14). One fixed scale, 270 units to the
   metre, from the widest pair of arcs the sliders reach (2.69 m).
===================================================================== */
(function () {
  const H = 960, d = sim('sim-mass-spectrometer', H);
  function reset() { cy.reset(); }
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1.70, max: 3.60, step: 0.01, value: 2.50, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed the velocity selector lets through', onInput: reset });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.500, max: 0.700, step: 0.005, value: 0.600, unit: 'T', dec: 3, aria: 'the strength of the field in the separation chamber', onInput: reset });
  const SC = 270;                                        /* units to the metre, fixed from the widest pair of arcs */
  const XW = 560, Y0 = 130;                              /* the entry point on the detector wall */
  const CH_R = 1000, CH_B = 890;                         /* the chamber's right edge and floor */
  const XS = 150;                                        /* where the beam leaves the ion source */
  const RUN = (XW - XS) / SC;                            /* the straight run, in metres */
  const rOf = (m) => (m * vS.v * 1e6) / (QE * bS.v);     /* the radius of the arc, in metres */
  const flight = (m) => (RUN + Math.PI * rOf(m)) / (vS.v * 1e6);
  const period = () => flight(M16 * 18 / 16);            /* the heavier ion is the last to land */
  const cy = cycle(period, 1.0);

  /* where an ion of mass m has got to after t seconds of model time */
  function at(m, t) {
    const s = vS.v * 1e6 * t, r = rOf(m), R = r * SC;
    if (s <= RUN) return { x: XS + s * SC, y: Y0, done: false };
    const a = (s - RUN) / r;
    if (a >= Math.PI) return { x: XW, y: Y0 + 2 * R, done: true };
    const th = -Math.PI / 2 + a;
    return { x: XW + R * Math.cos(th), y: Y0 + R + R * Math.sin(th), done: false };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), E: C('electric-field'), v: C('velocity'), r: C('position') };
    const ions = [{ a: 16, m: M16, c: cat(0), name: 'oxygen-16' }, { a: 18, m: M16 * 18 / 16, c: cat(1), name: 'oxygen-18' }];
    const t = cy.now();
    /* the chamber, and the field that fills it, out of the page */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.22); ctx.lineWidth = 2; ctx.strokeRect(XW, 92, CH_R - XW, CH_B - 92); ctx.restore();
    for (let x = XW + 42; x < CH_R; x += 84) for (let y = 130; y < CH_B; y += 84) outOfPage(ctx, x, y, alpha(col.B, 0.55));
    /* the ion source */
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.rect(40, 96, 110, 68); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'ion', 95, 120, PAL.ink, { size: 18, align: 'center' });
    text(ctx, 'source', 95, 142, PAL.ink, { size: 18, align: 'center' });
    /* the velocity selector: two plates, the field between them and the beam through the middle */
    line(ctx, 220, 96, 500, 96, PAL.ink, 4);
    line(ctx, 220, 164, 500, 164, PAL.ink, 4);
    text(ctx, '−', 210, 96, PAL.ink, { size: 24, weight: 700, align: 'right' });
    text(ctx, '+', 210, 164, PAL.ink, { size: 24, weight: 700, align: 'right' });
    for (let x = 250; x < 500; x += 62) outOfPage(ctx, x, 112, alpha(col.B, 0.55), 7);
    arrow(ctx, 470, 158, 470, 102, col.E, 4);
    text(ctx, 'E', 482, 128, col.E, { size: 22, weight: 600 });
    text(ctx, 'velocity selector', 360, 190, PAL.muted, { size: 19, weight: 600, align: 'center' });
    line(ctx, XS, Y0, XW, Y0, alpha(col.v, 0.45), 3, [10, 10]);
    arrow(ctx, 520, Y0, 556, Y0, col.v, 4);
    /* the detector wall, and the arcs the two ions turn */
    line(ctx, XW, Y0, XW, CH_B - 6, PAL.ink, 5);
    text(ctx, 'detector', XW + 16, Y0 - 22, PAL.ink, { size: 19, weight: 600 });
    ions.forEach((ion, i) => {
      const R = rOf(ion.m) * SC, cyc = Y0 + R;
      ctx.save(); ctx.strokeStyle = alpha(ion.c, 0.25); ctx.lineWidth = 3; ctx.setLineDash([9, 9]);
      ctx.beginPath(); ctx.arc(XW, cyc, R, -Math.PI / 2, Math.PI / 2); ctx.stroke(); ctx.restore();
      const p = at(ion.m, t), a = Math.min(Math.PI, Math.max(0, (vS.v * 1e6 * t - RUN) / rOf(ion.m)));
      if (a > 0) { ctx.save(); ctx.strokeStyle = ion.c; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(XW, cyc, R, -Math.PI / 2, -Math.PI / 2 + a); ctx.stroke(); ctx.restore(); }
      else poly(ctx, [[XS, Y0], [p.x, p.y]], ion.c, 5);
      dot(ctx, p.x, p.y, ion.c, true, 11);
      /* the landing mark, its name, and the guide out to the bracket */
      const land = Y0 + 2 * R;
      dot(ctx, XW, land, ion.c, true, 9);
      label(ctx, ion.name, XW, land, { side: 'right', size: 20, color: ion.c, gap: 22 });
      line(ctx, XW, land, 1010 + i * 130, land, alpha(ion.c, 0.35), 2, [8, 8]);
      vbracket(ctx, 1020 + i * 130, Y0, land, ion.c, '2r = ' + fmt(2 * rOf(ion.m), 3) + ' m', 1, { H, side: 'right', size: 20 });
    });
    line(ctx, XW, Y0, 1010, Y0, alpha(PAL.ink, 0.28), 2, [8, 8]);
    /* the bar that fixes the scale of the drawing */
    line(ctx, 600, 920, 600 + SC, 920, PAL.muted, 3);
    line(ctx, 600, 912, 600, 928, PAL.muted, 2); line(ctx, 600 + SC, 912, 600 + SC, 928, PAL.muted, 2);
    text(ctx, '1 m', 600 + SC / 2, 944, PAL.muted, { size: 17, align: 'center' });
    /* the legend and the two sentences that say what to watch */
    legend(ctx, outOfPage, 200, 300, 'the magnetic field B, out of the page', col.B);
    ['The selector passes one speed only, so the', 'two ions enter the chamber together and', 'differ in nothing but their mass.'].forEach((s, i) =>
      text(ctx, s, 190, 370 + i * 28, PAL.muted, { size: 18 }));
    ['The radius is proportional to the mass, so', 'the heavier isotope swings round the wider', 'arc and lands the further down the wall.'].forEach((s, i) =>
      text(ctx, s, 190, 480 + i * 28, PAL.muted, { size: 18 }));
    const sep = 2 * (rOf(ions[1].m) - rOf(ions[0].m));
    topline(ctx, `At ${sci(vS.v * 1e6, 2)} m/s in a ${fmt(bS.v, 3)} T field, oxygen-16 turns a half circle ${fmt(rOf(M16), 3)} m in radius and oxygen-18 one of ${fmt(rOf(ions[1].m), 3)} m, so the two land ${fmt(sep, 3)} m apart on the detector.`);
    readout(d.readout,
      `\\kr = \\frac{m\\kv}{\\kq\\kBmag} = \\frac{(${sciTex(M16, 2)}\\,\\text{kg})(${sciTex(vS.v * 1e6, 2)}\\,\\text{m/s})}{(1.60 \\times 10^{-19}\\,\\text{C})(${fmt(bS.v, 3)}\\,\\text{T})} = ${fmt(rOf(M16), 3)}\\ \\text{m} \\qquad 2\\kr_{18} - 2\\kr_{16} = ${fmt(sep, 3)}\\ \\text{m}`,
      `Drag the speed or the field and both arcs tighten together, but the gap between the two landing points shrinks with them, which is why a spectrometer is built to hold the speed and the field steady while the sample changes. The lighter ion lands first, since its arc is the shorter and both ions travel at the same speed.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 5), draw });
})();

/* =====================================================================
   A SIM OF ITS OWN: the velocity selector. Three ions of one kind enter
   at three speeds, carrying the electric force one way and the magnetic
   force the other, and only the one for which they balance reaches the
   slit. Still: which ion gets through is a state of the two fields and
   nothing about it is a fact about time. One fixed scale, 6000 units to
   the metre, over a channel 0.200 m long and 0.0300 m across.
===================================================================== */
(function () {
  const H = 700, d = sim('sim-velocity-selector', H);
  const eS = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 1.00, max: 2.00, step: 0.01, value: 1.50, unit: '× 10⁶ V/m', dec: 2, aria: 'the electric field between the plates' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.500, max: 0.700, step: 0.005, value: 0.600, unit: 'T', dec: 3, aria: 'the magnetic field across the plates' });
  const signC = choice(d.controls, { label: '\\text{the ions}', options: [{ value: 'pos', label: 'positive' }, { value: 'neg', label: 'negative' }], value: 'pos', aria: 'the sign of the charge on the ions' });
  const SC = 6000;                                       /* units to the metre */
  const X0 = 140, AX = 330, L = 0.200, GAP = 0.0300;     /* the channel: where it starts, its axis, its length and its gap */
  const XE = X0 + L * SC, HALF = (GAP / 2) * SC;
  const SLIT = 0.0020;                                   /* the half width of the slit at the far end, in metres */
  const SPEEDS = [1.50, 2.50, 3.50];                     /* the three speeds that enter, in 10^6 m/s */

  const sel = () => (eS.v * 1e6) / bS.v;                 /* the speed the setting passes */
  const accel = (v) => (signC.value === 'neg' ? -1 : 1) * (QE * (eS.v * 1e6 - v * bS.v)) / M16;   /* upward, in m/s^2 */
  /* how far the ion has been pushed across the channel after travelling x metres */
  const rise = (v, x) => 0.5 * accel(v) * Math.pow(x / v, 2);
  /* where it ends: at the plate it strikes, or at the far end of the channel */
  function track(v) {
    const a = accel(v), hit = Math.abs(a) < 1e-6 ? Infinity : v * Math.sqrt(GAP / Math.abs(a));
    const xEnd = Math.min(L, hit), pts = [];
    for (let i = 0; i <= 40; i++) { const x = (xEnd * i) / 40; pts.push([X0 + x * SC, AX - rise(v, x) * SC]); }
    return { pts, xEnd, stopped: hit < L, exit: rise(v, L), passes: hit >= L && Math.abs(rise(v, L)) <= SLIT };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), E: C('electric-field'), v: C('velocity'), F: C('force') };
    const ION = el('O'), neg = signC.value === 'neg';
    /* the plates, their charges and the two fields between them */
    line(ctx, X0, AX - HALF, XE, AX - HALF, PAL.ink, 5);
    line(ctx, X0, AX + HALF, XE, AX + HALF, PAL.ink, 5);
    text(ctx, '−   −   −   −   −   −   −   −   −   −', (X0 + XE) / 2, AX - HALF - 24, PAL.ink, { size: 20, weight: 700, align: 'center' });
    text(ctx, '+   +   +   +   +   +   +   +   +   +', (X0 + XE) / 2, AX + HALF + 24, PAL.ink, { size: 20, weight: 700, align: 'center' });
    for (let x = X0 + 90; x < XE - 40; x += 130) { outOfPage(ctx, x, AX - 56, alpha(col.B, 0.45)); outOfPage(ctx, x, AX + 56, alpha(col.B, 0.45)); }
    [X0 + 34, XE - 46].forEach((x) => arrow(ctx, x, AX + HALF - 8, x, AX - HALF + 8, alpha(col.E, 0.8), 4));
    text(ctx, 'E', X0 + 50, AX - HALF + 28, col.E, { size: 22, weight: 600 });
    legend(ctx, outOfPage, X0 + 130, 162, 'the magnetic field B, out of the page', col.B);
    /* the wall at the far end, with its slit on the axis */
    line(ctx, XE, AX - HALF, XE, AX - SLIT * SC, PAL.ink, 6);
    line(ctx, XE, AX + SLIT * SC, XE, AX + HALF, PAL.ink, 6);
    text(ctx, 'slit', XE + 14, AX - 34, PAL.muted, { size: 18 });
    /* the three tracks, each named where the three have parted company */
    SPEEDS.forEach((v6, i) => {
      const v = v6 * 1e6, tr = track(v), end = tr.pts[tr.pts.length - 1];
      poly(ctx, tr.pts, tr.passes ? ION : alpha(ION, 0.6), tr.passes ? 5 : 3.5, tr.passes ? null : [12, 8]);
      if (tr.passes) poly(ctx, [[XE, AX], [XE + 50, AX]], ION, 5);
      dot(ctx, end[0], end[1], ION, true, 10);
      const at = tr.pts[[30, 9, 34][i]];
      label(ctx, fmt(v6, 2) + ' × 10⁶ m/s', at[0], at[1], { side: at[1] <= AX ? 'above' : 'below', size: 20, color: ION, gap: 24 });
    });
    /* the two forces on an ion at the selected speed, drawn at the middle of the channel */
    const mx = (X0 + XE) / 2;
    dot(ctx, mx, AX, ION, true, 11);
    arrow(ctx, mx, AX, mx, AX - 70, col.F, 5);
    arrow(ctx, mx, AX, mx, AX + 70, col.F, 5);
    text(ctx, neg ? 'qvB' : 'qE', mx + 16, AX - 56, col.F, { size: 22, weight: 600 });
    text(ctx, neg ? 'qE' : 'qvB', mx + 16, AX + 56, col.F, { size: 22, weight: 600 });
    arrow(ctx, 40, AX, X0 - 8, AX, col.v, 5);
    text(ctx, 'ions in', 40, AX - 28, col.v, { size: 19, weight: 600 });
    /* the sentences that say what is being watched */
    const passing = SPEEDS.filter((v6) => track(v6 * 1e6).passes);
    ['A slow ion is turned aside by the electric force and a fast one by the', 'magnetic force, so only the ion traveling at E/B holds the axis as far', 'as the slit. Both forces reverse together when the ions are negative,', 'so the speed that is selected does not depend on the sign of the charge.'].forEach((s, i) =>
      text(ctx, s, X0, 540 + i * 28, PAL.muted, { size: 18 }));
    topline(ctx, `A field of ${sci(eS.v * 1e6, 2)} V/m crossed with ${fmt(bS.v, 3)} T passes ${sci(sel(), 2)} m/s, so ${passing.length ? 'that is the one ion of the three that reaches the slit' : 'none of the three ions reaches the slit'}.`);
    readout(d.readout,
      `\\kq\\kEf = \\kq\\kv\\kBmag \\qquad \\kv = \\frac{\\kEf}{\\kBmag} = \\frac{${sciTex(eS.v * 1e6, 2)}\\,\\text{V/m}}{${fmt(bS.v, 3)}\\,\\text{T}} = ${sciTex(sel(), 2)}\\ \\text{m/s}`,
      `The charge cancels from the balance, so the speed that is selected is the same for an ion of any charge and any mass. Raise the electric field and the selected speed rises with it; raise the magnetic field and it falls.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.42: the cathode ray tube. The gun's voltage sets the speed,
   the coil's field bends the beam into an arc of radius r = mv/qB, and
   the spot lands where the straight run from the coil meets the screen.
   Still: where the spot sits is a state of the two settings, and the
   flight of the electron is not what the figure teaches (rule 14). One
   fixed scale, 2750 units to the metre.
===================================================================== */
(function () {
  const H = 700, d = sim('sim-crt-steering', H);
  const uS = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 5.0, max: 20.0, step: 0.1, value: 10.0, unit: 'kV', dec: 1, aria: 'the accelerating voltage of the electron gun' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.200, max: 1.000, step: 0.005, value: 0.500, unit: 'mT', dec: 3, aria: 'the strength of the steering coil’s field' });
  const dirC = choice(d.controls, { label: '\\text{the coil’s field}', options: [{ value: 'in', label: 'into the page' }, { value: 'out', label: 'out of the page' }], value: 'in', aria: 'the direction of the steering coil’s field' });
  const SC = 2750;                                       /* units to the metre */
  const AX = 280, XG = 240, XC = 420, LC = 0.0500;       /* the axis, the gun's mouth, the coil's near edge and its length */
  const XCE = XC + LC * SC, XS = 1180;                   /* the coil's far edge and the screen */
  const DRIFT = (XS - XCE) / SC;                         /* the run from the coil to the screen, in metres */
  const speed = () => Math.sqrt((2 * QE * uS.v * 1e3) / ME);
  const radius = () => (ME * speed()) / (QE * bS.v * 1e-3);
  const angle = () => Math.asin(Math.min(0.999, LC / radius()));
  const drop = () => radius() * (1 - Math.cos(angle())) + DRIFT * Math.tan(angle());

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), v: C('velocity'), F: C('force'), V: C('voltage'), r: C('position') };
    const E = el('e-'), into = dirC.value === 'in', s = into ? 1 : -1;   /* +1 sends the beam down the screen */
    const r = radius(), th = angle(), R = r * SC;
    /* the envelope of the tube, drawn in ink */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(XG, AX - 46); ctx.lineTo(XC - 20, AX - 62); ctx.lineTo(XS, AX - 190);
    ctx.moveTo(XG, AX + 46); ctx.lineTo(XC - 20, AX + 62); ctx.lineTo(XS, AX + 250); ctx.stroke(); ctx.restore();
    /* the gun: a cathode, an anode and the voltage between them */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(90, AX - 34); ctx.lineTo(90, AX + 34); ctx.moveTo(180, AX - 34); ctx.lineTo(180, AX - 12); ctx.moveTo(180, AX + 12); ctx.lineTo(180, AX + 34); ctx.stroke(); ctx.restore();
    text(ctx, 'cathode', 90, AX - 52, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'anode', 182, AX - 52, PAL.muted, { size: 18, align: 'center' });
    text(ctx, fmt(uS.v, 1) + ' kV', 135, AX + 62, col.V, { size: 21, weight: 600, align: 'center' });
    /* the coil's field, drawn between the pole faces of the coil pair */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 3;
    ctx.strokeRect(XC, AX - 110, XCE - XC, 220); ctx.restore();
    for (let x = XC + 34; x < XCE; x += 68) for (let y = AX - 76; y <= AX + 76; y += 76) (into ? intoPage : outOfPage)(ctx, x, y, alpha(col.B, 0.85));
    text(ctx, 'steering coil', (XC + XCE) / 2, AX - 130, PAL.muted, { size: 19, weight: 600, align: 'center' });
    /* the beam: straight to the coil, an arc across it, straight on to the screen */
    line(ctx, 180, AX, XC, AX, E, 5);
    const cyC = AX + s * R;                               /* the centre of the arc */
    ctx.save(); ctx.strokeStyle = E; ctx.lineWidth = 5; ctx.beginPath();
    if (s > 0) ctx.arc(XC, cyC, R, -Math.PI / 2, -Math.PI / 2 + th);
    else ctx.arc(XC, cyC, R, Math.PI / 2, Math.PI / 2 - th, true);
    ctx.stroke(); ctx.restore();
    const xe = XC + R * Math.sin(th), ye = AX + s * R * (1 - Math.cos(th));
    const spotY = AX + s * drop() * SC;
    line(ctx, xe, ye, XS, spotY, E, 5);
    /* the screen and the spot */
    line(ctx, XS, AX - 190, XS, AX + 250, PAL.ink, 6);
    text(ctx, 'screen', XS + 16, AX - 170, PAL.muted, { size: 19, weight: 600 });
    dot(ctx, XS, spotY, E, true, 12);
    line(ctx, XC, AX, XS, AX, alpha(PAL.ink, 0.28), 2, [10, 10]);
    vbracket(ctx, XS - 34, AX, spotY, col.r, fmt(drop() * 100, 2) + ' cm', -1, { H, side: 'left', size: 20 });
    /* the force on the electron where it enters the field */
    arrow(ctx, XC + 8, AX, XC + 8, AX + s * 92, col.F, 5);
    text(ctx, 'F', XC - 8, AX + s * 70, col.F, { size: 22, weight: 600, align: 'right' });
    arrow(ctx, 250, AX - 60, 330, AX - 60, col.v, 4);
    text(ctx, 'v', 290, AX - 80, col.v, { size: 22, weight: 600, align: 'center' });
    /* right hand rule 1, in the corner, as the book's own figure draws it */
    const rx = 200, ry = 580;
    text(ctx, 'Right hand rule 1', rx - 80, ry - 150, PAL.muted, { size: 20, weight: 600 });
    arrow(ctx, rx, ry, rx + 110, ry, col.v, 4); text(ctx, 'v', rx + 122, ry, col.v, { size: 22, weight: 600 });
    (into ? intoPage : outOfPage)(ctx, rx + 54, ry - 40, col.B, 9); text(ctx, 'B', rx + 78, ry - 40, col.B, { size: 22, weight: 600 });
    arrow(ctx, rx, ry, rx, ry - s * 70, col.F, 4); text(ctx, 'F on a positive charge', rx + 16, ry - s * 86, col.F, { size: 19, weight: 600 });
    arrow(ctx, rx, ry, rx, ry + s * 70, E, 4); text(ctx, 'F on the electron', rx + 16, ry + s * 86, E, { size: 19, weight: 600 });
    ['The gun sets the speed and the coil sets the radius, so a faster', 'electron crosses the field in less time and is turned less. A', 'second pair of coils, set at right angles to this one, carries the', 'spot across the screen the other way.'].forEach((str, i) =>
      text(ctx, str, 700, 500 + i * 28, PAL.muted, { size: 18, bg: PAL.panel }));
    topline(ctx, `A ${fmt(uS.v, 1)} kV gun sends electrons across the coil at ${sci(speed(), 2)} m/s, and a ${fmt(bS.v, 3)} mT field bends them onto a circle ${fmt(r, 3)} m in radius, putting the spot ${fmt(drop() * 100, 2)} cm ${into ? 'below' : 'above'} the axis.`);
    readout(d.readout,
      `\\kq\\kV = \\tfrac{1}{2}m\\kv^2 \\;\\Rightarrow\\; \\kv = ${sciTex(speed(), 2)}\\ \\text{m/s} \\qquad \\kr = \\frac{m\\kv}{\\kq\\kBmag} = ${fmt(r, 3)}\\ \\text{m}`,
      `Raise the voltage and the spot climbs back toward the axis, because the radius grows with the speed; raise the field and the spot runs away from it. Reversing the coil's field sends the beam the other way, which is how a pair of coils reaches every point on the screen.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   A SIM OF ITS OWN: the field of an MRI magnet, made to rise a little
   along the patient so that each slice sits in a field of its own and
   answers a broadcast of its own. Still: the tuning of the receiver is a
   state, and the sweep it stands for is not drawn. Scene above, graph
   below, since the patient lies across the page.
===================================================================== */
(function () {
  const H = 920, d = sim('sim-mri-gradient', H);
  const b0S = ctl(d.controls, { label: '\\kBmag_0', cls: 'magnetic-field', min: 1.00, max: 2.00, step: 0.01, value: 1.50, unit: 'T', dec: 2, aria: 'the field of the magnet at the patient’s head' });
  const gS = ctl(d.controls, { label: '\\text{the gradient}', cls: '', min: 0, max: 20.0, step: 0.5, value: 10.0, unit: 'mT/m', dec: 1, aria: 'how fast the field rises along the patient' });
  const tS = ctl(d.controls, { label: '\\kBmag_\\text{tuned}', cls: 'magnetic-field', min: 1.000, max: 2.050, step: 0.001, value: 1.509, unit: 'T', dec: 3, aria: 'the field strength the broadcast frequency answers to' });
  const SC = 250, XH = 475, LEN = 1.80;                  /* units to the metre, the patient's head, and how tall the patient is */
  const XF = XH + LEN * SC;                              /* the patient's feet */
  const fieldAt = (p) => b0S.v + (gS.v / 1000) * p;      /* the field a distance p from the head, in tesla */
  const slice = () => (gS.v > 1e-6 ? (tS.v - b0S.v) / (gS.v / 1000) : NaN);

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), x: C('position') };
    const p = slice(), inside = p >= 0 && p <= LEN;
    /* the bore of the magnet, in ink, and the field that fills it */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(330, 160, 740, 290); ctx.stroke(); ctx.restore();
    text(ctx, 'the bore of the superconducting magnet', 700, 138, PAL.muted, { size: 19, weight: 600, align: 'center' });
    for (let x = 372; x < 1060; x += 96) arrow(ctx, x, 196, x + 58, 196, alpha(col.B, 0.55), 3);
    text(ctx, 'B', 350, 196, col.B, { size: 22, weight: 600 });
    /* the slice the receiver has picked out */
    if (inside) {
      const sx = XH + p * SC;
      ctx.save(); ctx.fillStyle = alpha(col.B, 0.22); ctx.fillRect(sx - 12, 168, 24, 274); ctx.restore();
      line(ctx, sx, 168, sx, 442, col.B, 3);
      [0, 1, 2].forEach((i) => dot(ctx, sx, 246 + i * 42, el('p+'), true, 7));
      text(ctx, 'the slice in resonance', sx, 470, col.B, { size: 20, weight: 600, align: 'center' });
    }
    /* the patient, lying head to the left with the feet to the right */
    supine(ctx, XH, 330, LEN * SC, alpha(PAL.ink, 0.55));
    text(ctx, 'head', XH, 402, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'feet', XF, 402, PAL.muted, { size: 18, align: 'center' });
    /* the graph: how far the field stands above the magnet's own value, along the patient */
    const box = { l: 200, r: 1280, t: 570, b: 830 };
    const { X, Y } = axes(ctx, box, [0, LEN], [0, 40], {
      xl: 'distance from the head (m)', xc: col.x, yl: 'the field above ' + fmt(b0S.v, 2) + ' T (mT)', yc: col.B, nx: 6, ny: 4,
      fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0),
    });
    line(ctx, X(0), Y(0), X(LEN), Y(gS.v * LEN), col.B, 5);
    const lvl = (tS.v - b0S.v) * 1000;
    line(ctx, box.l, Y(Math.min(40, Math.max(0, lvl))), box.r, Y(Math.min(40, Math.max(0, lvl))), alpha(col.B, 0.55), 3, [10, 10]);
    text(ctx, 'the field the broadcast answers to', box.r - 12, Y(Math.min(40, Math.max(0, lvl))) - 18, alpha(col.B, 0.8), { size: 18, align: 'right', bg: PAL.panel });
    if (inside) { pinned(ctx, box, X, Y, p, lvl, col.x, fmt(p, 2) + ' m'); line(ctx, X(p), Y(lvl), X(p), box.b, alpha(col.x, 0.5), 2, [4, 8]); }
    topline(ctx, gS.v < 1e-6
      ? `With no gradient every slice of the patient sits in the same ${fmt(b0S.v, 2)} T field, so the whole body answers one broadcast at once and the signal that comes back carries no position in it.`
      : inside
        ? `The field rises by ${fmt(gS.v, 1)} mT every meter, so the slice ${fmt(p, 2)} m from the head sits in ${fmt(fieldAt(p), 3)} T and is the one the broadcast flips.`
        : `The field runs from ${fmt(b0S.v, 3)} T at the head to ${fmt(fieldAt(LEN), 3)} T at the feet, and ${fmt(tS.v, 3)} T lies outside that range, so no slice of the patient is in resonance.`);
    readout(d.readout,
      `\\kBmag = ${fmt(b0S.v, 2)}\\,\\text{T} + (${fmt(gS.v, 1)}\\,\\text{mT/m})\\,\\kx \\qquad \\kx = ${inside ? fmt(p, 2) : '\\text{---}'}\\ \\text{m} \\;\\Rightarrow\\; \\kBmag = ${inside ? fmt(fieldAt(p), 3) : '\\text{---}'}\\ \\text{T}`,
      `Nuclei absorb and reemit a broadcast only where the field has the right strength, so a field that varies along the patient turns a frequency into a position. Flatten the gradient and the position is lost; steepen it and a given tuning picks out a thinner slice.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   A SIM OF ITS OWN: every field strength the chapter has named, set on
   one scale a decade to the step, so that the distance between an MRI
   magnet and a beating heart can be looked at rather than imagined.
   Still: a scale of strengths has no clock. Both controls are choices,
   since the source is a discrete state and the book gives the biomagnetic
   fields as three decades rather than a range to be dialled (rule 26.1).
===================================================================== */
(function () {
  const H = 680, d = sim('sim-field-scale', H);
  const srcC = choice(d.controls, {
    label: '\\text{the source}', value: 'earth', aria: 'the source of the magnetic field',
    options: [{ value: 'mri', label: 'an MRI magnet' }, { value: 'perm', label: 'a permanent magnet' }, { value: 'earth', label: 'the Earth' }, { value: 'body', label: 'the heart and the brain' }],
  });
  const facC = choice(d.controls, {
    label: '\\text{below the Earth by}', value: '-7', aria: 'how far the heart’s and the brain’s fields fall below the Earth’s',
    options: [{ value: '-6', label: '10⁻⁶' }, { value: '-7', label: '10⁻⁷' }, { value: '-8', label: '10⁻⁸' }],
  });
  const LO = -13, HI = 1, XL = 130, XR = 1320, AXY = 300;   /* the decades the scale covers, and where it sits */
  const X = (b) => XL + ((Math.log10(b) - LO) / (HI - LO)) * (XR - XL);
  const factor = () => Math.pow(10, Number(facC.value));
  const bodyB = () => B_EARTH * factor();
  const chosen = () => ({ mri: 1.50, perm: 0.500, earth: B_EARTH, body: bodyB() }[srcC.value]);

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field') };
    /* the scale: one tick to the decade, a label every second one */
    line(ctx, XL, AXY, XR, AXY, PAL.muted, 3);
    for (let e = LO; e <= HI; e++) {
      const x = XL + ((e - LO) / (HI - LO)) * (XR - XL);
      line(ctx, x, AXY - 10, x, AXY + 10, PAL.muted, 2);
      if ((e - LO) % 2 === 0) text(ctx, '10' + sup(e), x, AXY + 34, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'magnetic field strength (T)', XL, AXY - 130, col.B, { size: 20, weight: 600 });
    /* the marks, each one the book's own number */
    const marks = [
      { key: 'mri', b: 1.50, lo: 1.00, hi: 2.00, name: 'an MRI magnet, 1 to 2 T', up: true },
      { key: 'perm', b: 0.500, name: 'a permanent magnet, 0.500 T', up: false },
      { key: 'earth', b: B_EARTH, name: 'the Earth, ' + sci(B_EARTH, 2) + ' T', up: true },
      { key: 'body', b: bodyB(), name: 'the heart and the brain, ' + sci(bodyB(), 2) + ' T', up: false },
    ];
    const lab = labeller(ctx, H, { headline: 2 });
    marks.forEach((m) => {
      const x = X(m.b), on = srcC.value === m.key, c = on ? col.B : alpha(PAL.ink, 0.5);
      if (m.lo) { ctx.save(); ctx.fillStyle = alpha(col.B, on ? 0.3 : 0.14); ctx.fillRect(X(m.lo), AXY - 26, X(m.hi) - X(m.lo), 52); ctx.restore(); }
      line(ctx, x, m.up ? AXY - 74 : AXY + 74, x, AXY, c, on ? 5 : 3);
      dot(ctx, x, AXY, c, true, on ? 12 : 8);
      lab.beside({ x1: x, y1: AXY, x2: x, y2: m.up ? AXY - 74 : AXY + 74 }, m.up ? 'left' : 'right', m.name, c, on ? 21 : 19, { offset: 1, gap: 20 });
    });
    lab.flush();
    /* the span the scale covers, so the gap is a length on the page */
    hbracket(ctx, X(bodyB()), X(1.50), AXY + 150, alpha(PAL.ink, 0.5),
      fmt(Math.log10(1.50 / bodyB()), 0) + ' decades from an MRI magnet to a beating heart', { H, side: 'below', size: 19 });
    ['Each step across the scale is a factor of ten, so the distance between two marks is', 'the number of times over that one field stands above the other. The fields of the heart', 'and the brain are the reason a magnetocardiogram and a magnetoencephalogram are read', 'with a detector held at the temperature of liquid helium.'].forEach((s, i) =>
      text(ctx, s, XL, 520 + i * 28, PAL.muted, { size: 18 }));
    const b = chosen();
    topline(ctx, `${{ mri: 'The magnet of an MRI unit', perm: 'A permanent magnet', earth: 'The Earth', body: 'The field of the heart and of the brain' }[srcC.value]} reaches about ${sci(b, 2)} T, which is ${srcC.value === 'earth' ? 'the field every compass on the planet answers to' : sci(b / B_EARTH, 2) + ' times the Earth’s own field'}.`);
    readout(d.readout,
      `\\kBmag = ${sciTex(b, 2)}\\ \\text{T} \\qquad \\frac{\\kBmag}{\\kBmag_\\text{Earth}} = ${sciTex(b / B_EARTH, 2)}`,
      `The field of the heart and of the brain is 10⁻⁶ to 10⁻⁸ of the Earth's, and the three buttons set each of those three decades in turn.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
