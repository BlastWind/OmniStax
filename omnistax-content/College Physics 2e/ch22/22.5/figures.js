/* Figures for section 22.5 Force on a Moving Charge in a Magnetic Field:
   Examples and Applications. Boots against the section's text article.

   The section has one result, r = mv/qB, and three readings of it. Figure
   22.18 + 22.19 is the result itself, a charge running round its circle with
   the force always square to the velocity; the sim beside it holds the field
   and the speed still and varies the mass, which is how a sample is weighed.
   Figure 22.20 + 22.21 tips the velocity out of the plane, so the circle
   becomes a spiral that walks along a field line and is turned back where the
   lines crowd. Figure 22.22 + 22.23 is the Earth doing the same thing, and
   Figure 22.25 is a chamber built to do it on purpose.

   Two of the five have a clock in them and move: the circling charge, whose
   period is 2*pi*m/qB, and the charge that walks into the crowded field and
   comes back. The other three answer their controls and register no cycle.

   The page binds magnetic-field, velocity, force, charge and position, which
   is the list ch22/COLOR.md gives it. The mass, the angle, the latitude and
   every count and ratio are untyped and in ink; no body is tinted, so Earth,
   the bar magnet, the detector and the tokamak's chamber and windings are all
   ink; and the two oxygen ions are told apart with F.cat, which the chapter's
   colour plan names as one of its two categorical cases. The dot and the
   cross that stand for a field out of and into the page wear the field hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, labeller, hbracket, vbracket, angleArc, hover, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sciParts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return m + ' × 10' + sup(e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return m + ' \\times 10^{' + e + '}'; };
const QE = 1.60e-19;                 /* the charge the book uses in Example 22.2, in coulombs */
const ME = 9.11e-31;                 /* the mass of an electron, in kilograms */
const U16 = 2.66e-26 / 16;           /* one unit of mass, from the book's own mass for oxygen-16 */

/* the mark for a magnetic field perpendicular to the page: a cross for a field
   going in, a dot inside a small circle for one coming out. Both wear the field
   hue, since both are field lines seen end-on (ch22/COLOR.md). */
function intoPage(ctx, x, y, color, s = 9) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.6; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - s, y - s); ctx.lineTo(x + s, y + s); ctx.moveTo(x + s, y - s); ctx.lineTo(x - s, y + s); ctx.stroke(); ctx.restore();
}
function outOfPage(ctx, x, y, color, s = 9) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(x, y, s, 0, TAU); ctx.stroke();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, 3.2, 0, TAU); ctx.fill(); ctx.restore();
}
/* a bar magnet: an ink outline with a rule across its middle and a letter in each half */
function bar(ctx, cx, cy, L, T, first, second) {
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.rect(cx - L / 2, cy - T / 2, L, T); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, cy - T / 2); ctx.lineTo(cx, cy + T / 2); ctx.stroke(); ctx.restore();
  const sz = Math.min(T * 0.6, L * 0.3);
  text(ctx, first, cx - L * 0.25, cy, PAL.ink, { size: sz, weight: 700, align: 'center' });
  text(ctx, second, cx + L * 0.25, cy, PAL.ink, { size: sz, weight: 700, align: 'center' });
}
/* one polyline through a list of [x, y] points */
function poly(ctx, pts, color, w, dash) {
  if (pts.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.lineJoin = 'round';
  ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
}
/* a legend line: the mark, then its name set to the right of it */
function legend(ctx, mark, x, y, s, color) {
  mark(ctx, x, y, color, 9);
  text(ctx, s, x + 26, y, color, { size: 19, weight: 600 });
}

/* =====================================================================
   FIGURE 22.18 + 22.19: a charge crossing a uniform field into the page,
   the track it leaves and the circle it closes. Moving: the idea has the
   clock in it, since the period 2*pi*m/qB is the fact that the speed does
   not enter (rule 14). One fixed scale, 184 units to the millimetre, from
   the widest circle the sliders reach (1.52 mm).
===================================================================== */
(function () {
  const H = 760, d = sim('sim-circle-radius', H);
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 4, max: 8, step: 0.05, value: 6, unit: '× 10⁷ m/s', dec: 2, aria: 'the speed of the electron' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.3, max: 0.9, step: 0.01, value: 0.5, unit: 'T', dec: 3, aria: 'the strength of the magnetic field' });
  const signC = choice(d.controls, { label: '\\text{the charge}', options: [{ value: 'neg', label: 'negative' }, { value: 'pos', label: 'positive' }], value: 'neg', aria: 'the sign of the charge' });
  const CX = 520, CY = 378, SCALE = 184;                 /* units to the millimetre, fixed from the largest circle */
  const FL = 60, FR = 1000, FT = 96, FB = 656;           /* the region the field fills */
  const RULER_Y = 700;
  const rOf = () => (ME * vS.v * 1e7) / (QE * bS.v);     /* the radius in metres */
  const period = () => (TAU * ME) / (QE * bS.v);         /* the true period in seconds */
  /* the loop is one revolution, its length in proportion to the true period, so
     a stronger field both tightens the circle and quickens the lap */
  const lap = () => 5 * (0.5 / bS.v);
  const cy = cycle(lap, 1.0);

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), v: C('velocity'), F: C('force'), q: C('charge'), r: C('position') };
    const rmm = rOf() * 1000, R = rmm * SCALE, neg = signC.value === 'neg';
    /* the uniform field, into the page */
    for (let x = FL + 44; x < FR; x += 78) for (let y = FT + 40; y < FB; y += 76) intoPage(ctx, x, y, alpha(col.B, 0.85), 8);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.strokeRect(FL, FT, FR - FL, FB - FT); ctx.restore();
    /* the circle the charge closes, and the track it has left so far */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.22); ctx.lineWidth = 2; ctx.setLineDash([9, 9]);
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.stroke(); ctx.restore();
    const swept = (cy.now() / lap()) * TAU, a0 = Math.PI, a = a0 + (neg ? swept : -swept);
    ctx.save(); ctx.strokeStyle = alpha(col.q, 0.55); ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(CX, CY, R, neg ? a0 : a, neg ? a : a0); ctx.stroke(); ctx.restore();
    /* the charge, its velocity along the tangent and the force toward the centre */
    const px = CX + R * Math.cos(a), py = CY + R * Math.sin(a);
    const ux = (neg ? -1 : 1) * -Math.sin(a), uy = (neg ? -1 : 1) * Math.cos(a);
    const fl = Math.max(52, Math.min(96, R - 14));
    line(ctx, CX, CY, px, py, alpha(col.r, 0.8), 2.5, [8, 8]);
    dot(ctx, CX, CY, PAL.muted, true, 6);
    arrow(ctx, px, py, px + ux * 128, py + uy * 128, col.v, 5);
    arrow(ctx, px, py, px - Math.cos(a) * fl, py - Math.sin(a) * fl, col.F, 5);
    dot(ctx, px, py, col.q, true, 12);
    text(ctx, neg ? '−' : '+', px, py - 1, PAL.panel, { size: 19, weight: 700, align: 'center' });
    /* the names: the two vectors ride with their arrows and the radius with its
       line, and the labeller steps them apart wherever the charge has got to */
    const lab = labeller(ctx, H, { headline: 2 });
    lab.beside({ x1: px, y1: py, x2: px + ux * 128, y2: py + uy * 128 }, 'left', 'v', col.v, 24, { offset: 0.9, gap: 24 });
    lab.beside({ x1: px, y1: py, x2: px - Math.cos(a) * fl, y2: py - Math.sin(a) * fl }, 'right', 'F', col.F, 24, { offset: 0.85, gap: 24 });
    lab.beside({ x1: CX, y1: CY, x2: px, y2: py }, 'left', 'r = ' + fmt(rmm, 3) + ' mm', col.r, 20, { offset: 0.45, gap: 26 });
    lab.flush();
    /* the ruler, so the size of the circle can be read off the page */
    const X = (mm) => 100 + mm * SCALE;
    line(ctx, X(0), RULER_Y, X(3), RULER_Y, PAL.muted, 2.5);
    for (let m = 0; m <= 3.0001; m += 0.5) {
      line(ctx, X(m), RULER_Y - 9, X(m), RULER_Y + 9, PAL.muted, 2);
      if (m % 1 < 1e-6) text(ctx, fmt(m, 0) + ' mm', X(m), RULER_Y + 30, PAL.muted, { size: 17, align: 'center' });
    }
    /* the legend for the mark the book uses for a field into the page */
    legend(ctx, intoPage, 1050, 196, 'the magnetic field B,', col.B);
    text(ctx, 'perpendicular into the page', 1076, 222, col.B, { size: 19, weight: 600 });
    ['The force is square to the velocity', 'at every point of the circle, so it', 'does no work: the direction changes', 'and the speed does not.'].forEach((s, i) =>
      text(ctx, s, 1044, 322 + i * 28, PAL.muted, { size: 18 }));
    ['One lap takes 2πm/qB, which has no', 'speed in it: a faster charge runs a', 'wider circle in the same time.'].forEach((s, i) =>
      text(ctx, s, 1044, 472 + i * 28, PAL.muted, { size: 18 }));
    topline(ctx, `A ${neg ? 'negative' : 'positive'} charge at ${sci(vS.v * 1e7, 2)} m/s across a ${fmt(bS.v, 3)} T field runs round a circle ${fmt(rmm, 3)} mm in radius, once every ${fmt(period() * 1e12, 1)} ps.`);
    readout(d.readout,
      `\\kq\\kv\\kBmag = \\frac{m\\kv^2}{\\kr} \\qquad \\kr = \\frac{m\\kv}{\\kq\\kBmag} = \\frac{(9.11 \\times 10^{-31}\\,\\text{kg})(${sciTex(vS.v * 1e7, 2)}\\,\\text{m/s})}{(1.60 \\times 10^{-19}\\,\\text{C})(${fmt(bS.v, 3)}\\,\\text{T})} = ${fmt(rmm, 3)}\\ \\text{mm}`,
      `Drag the speed and the radius grows with it, but the time for one turn, ${fmt(period() * 1e12, 1)} ps, does not change; only the field changes that. Turn the charge positive and it goes round the other way.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   A SIM OF ITS OWN: two oxygen ions of different mass, launched together
   into one field, parting company because r = mv/qB carries the mass.
   Still: where each one lands is a state of the field, the speed and the
   mass, and nothing about the gap between them is a fact about time.
===================================================================== */
(function () {
  const H = 740, d = sim('sim-isotope-arcs', H);
  const mS = ctl(d.controls, { label: '\\text{the heavier ion}', cls: '', min: 17, max: 22, step: 1, value: 18, unit: 'u', dec: 0, detents: [18, 20, 22], aria: 'the mass of the heavier ion, in unified mass units' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 1, max: 1.6, step: 0.05, value: 1.2, unit: 'T', dec: 2, aria: 'the strength of the magnetic field' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 4.2, max: 6, step: 0.1, value: 5, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed at which the ions enter the field' });
  const SX = 180, SY = 620, SCALE = 350;                 /* units to the metre, fixed from the widest pair of arcs */
  const FT = 176, FB = SY - 26, FR = 1200;               /* the region the field fills */
  const rOf = (A) => (A * U16 * vS.v * 1e6) / (QE * bS.v);

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), v: C('velocity'), r: C('position') };
    const r1 = rOf(16), r2 = rOf(mS.v), R1 = r1 * SCALE, R2 = r2 * SCALE, gap = 2 * (r2 - r1);
    const heavy = mS.v === 18 ? 'oxygen-18' : 'an ion of ' + fmt(mS.v, 0) + ' u';
    /* the field, out of the page, over the whole chamber */
    for (let x = 84; x < FR; x += 84) for (let y = FT + 20; y < FB; y += 82) outOfPage(ctx, x, y, alpha(col.B, 0.7), 8);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.22); ctx.lineWidth = 2; ctx.strokeRect(60, FT, FR - 60, FB - FT); ctx.restore();
    /* the source, and the detector the ions come back to */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.14); ctx.fillRect(SX + 46, SY + 8, FR - SX - 46, 24); ctx.restore();
    line(ctx, SX + 46, SY + 8, FR, SY + 8, PAL.muted, 3);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(SX - 120, SY - 30, 104, 60); ctx.strokeRect(SX - 120, SY - 30, 104, 60); ctx.restore();
    line(ctx, SX - 16, SY, SX, SY, PAL.ink, 3);
    arrow(ctx, SX, SY, SX, SY - 92, col.v, 5);
    /* the two half circles: up, over and back down to the detector */
    [[R1, cat(0)], [R2, cat(1)]].forEach(([R, c]) => {
      const pts = [];
      for (let i = 0; i <= 96; i++) { const a = Math.PI + (i / 96) * Math.PI; pts.push([SX + R + R * Math.cos(a), SY + R * Math.sin(a)]); }
      poly(ctx, pts, c, 4.5);
      dot(ctx, SX + 2 * R, SY, c, true, 10);
    });
    /* the two arcs are named in a key rather than on the curves, which cross and
       come together as the sliders move (rule 26.6) */
    [['oxygen-16', cat(0)], [heavy, cat(1)]].forEach(([name, c], i) => {
      const y = 470 + i * 34;
      line(ctx, 1000, y, 1044, y, c, 4.5);
      text(ctx, name, 1056, y, c, { size: 19, weight: 600, bg: PAL.panel });
    });
    /* the gap between the two landing points, which is what a spectrometer reads */
    hbracket(ctx, SX + 2 * R1, SX + 2 * R2, SY + 62, col.r, fmt(gap, 3) + ' m', { side: 'below', H });
    label(ctx, 'the source', SX - 68, SY + 30, { side: 'below', size: 19, gap: 20, H });
    label(ctx, 'the detector', FR - 110, SY + 20, { side: 'above', size: 19, gap: 30, H });
    legend(ctx, outOfPage, 1000, 130, 'the magnetic field B, out of the page', col.B);
    text(ctx, 'The heavier ion swings wider.', 1000, 424, PAL.muted, { size: 18, bg: PAL.panel });
    topline(ctx, `Oxygen-16 and ${heavy} enter at ${sci(vS.v * 1e6, 2)} m/s, cross a ${fmt(bS.v, 2)} T field and land ${fmt(gap, 3)} m apart.`);
    readout(d.readout,
      `\\kr = \\frac{m\\kv}{\\kq\\kBmag}: \\quad ${fmt(r1, 3)}\\ \\text{m and } ${fmt(r2, 3)}\\ \\text{m} \\qquad \\text{apart by } 2(\\kr_2 - \\kr_1) = ${fmt(gap, 3)}\\ \\text{m}`,
      'The two ions carry the same charge and enter at the same speed in the same field, so the only thing that sets them apart is mass, and the gap they open grows in proportion to the difference between their masses.');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const r1 = rOf(16), r2 = rOf(mS.v);
    return [
      { x: SX + 2 * r1 * SCALE, y: SY, r: 24, name: `oxygen-16, radius ${fmt(r1, 3)} m` },
      { x: SX + 2 * r2 * SCALE, y: SY, r: 24, name: `an ion of ${fmt(mS.v, 0)} u, radius ${fmt(r2, 3)} m` },
    ];
  });
})();

/* =====================================================================
   FIGURE 22.20 + 22.21: the charge that is not square to the field spirals
   along a line, and where the lines crowd it is turned back. Moving: the
   clock is the round trip in and out again (rule 14).
===================================================================== */
(function () {
  const H = 700, d = sim('sim-spiral-mirror', H);
  const thS = ctl(d.controls, { label: '\\theta', cls: '', min: 10, max: 60, step: 1, value: 30, unit: '°', dec: 0, aria: 'the angle between the velocity and the field where the charge enters' });
  const btS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.05, max: 0.5, step: 0.005, value: 0.25, unit: 'T', dec: 3, aria: 'the strength of the field where the lines are most crowded' });
  const B0 = 0.050, XL = 80, XR = 1108, YC = 350, D = 92;
  const sOf = (x) => (x - XL) / (XR - XL);
  const bAt = (s) => B0 + (btS.v - B0) * s * s;
  const width = (s) => Math.sqrt(B0 / bAt(s));

  /* where the charge is turned back, as a fraction of the way along, or 1 when it gets through */
  function turnAt() {
    const need = B0 / Math.pow(Math.sin(thS.v * RAD), 2);
    if (need >= btS.v) return { s: 1, mirrored: false, need };
    return { s: Math.sqrt((need - B0) / (btS.v - B0)), mirrored: true, need };
  }
  const cy = cycle(() => (turnAt().mirrored ? 5 : 2.6), 1.0);
  /* the time to walk from the entry to each fraction of the way to the turning point */
  function table() {
    const { s: sm } = turnAt(), n = 260, ts = [0];
    const sin2 = Math.pow(Math.sin(thS.v * RAD), 2);
    let t = 0;
    for (let i = 1; i <= n; i++) {
      const s = (sm * (i - 0.5)) / n;
      const par = Math.sqrt(Math.max(1e-4, 1 - (sin2 * bAt(s)) / B0));
      t += (sm / n) / par; ts.push(t);
    }
    return { ts, total: t, sm, n };
  }
  const sAtTime = (tab, t) => {
    const { ts, sm, n } = tab, u = Math.min(t, tab.total);
    let lo = 0, hi = n;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (ts[mid] <= u) lo = mid; else hi = mid; }
    const span = ts[hi] - ts[lo] || 1;
    return (sm * (lo + (u - ts[lo]) / span)) / n;
  };

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), v: C('velocity'), F: C('force'), q: C('charge') };
    const { mirrored, need } = turnAt(), tab = table();
    /* the field lines, spread at the left and crowded toward the pole of the magnet */
    for (let k = -2; k <= 2; k++) {
      const pts = [];
      for (let i = 0; i <= 80; i++) { const x = XL + ((XR - XL) * i) / 80; pts.push([x, YC + k * D * width(sOf(x))]); }
      poly(ctx, pts, alpha(col.B, k === 0 ? 0.95 : 0.65), k === 0 ? 3.5 : 2.6);
    }
    bar(ctx, 1218, YC, 180, 104, 'N', 'S');
    /* the charge's path: a gyration about the middle line whose swing narrows as the field rises */
    const P = mirrored ? 5 : 2.6, half = !mirrored || cy.now() <= P / 2;
    const tt = ((half ? cy.now() : P - cy.now()) / (mirrored ? P / 2 : P)) * tab.total;
    const sNow = sAtTime(tab, tt);
    const swing = (s) => 46 * width(s);
    const path = [], steps = 420;
    for (let i = 0; i <= steps; i++) {
      const s = (sNow * i) / steps, x = XL + s * (XR - XL);
      const ph = 26 * Math.pow(s, 0.72) * Math.sqrt(btS.v / B0);
      path.push([x, YC + swing(s) * Math.sin(ph)]);
    }
    poly(ctx, path, alpha(col.q, 0.5), 3.5);
    const p = path[path.length - 1], pPrev = path[Math.max(0, path.length - 4)];
    let dx = p[0] - pPrev[0], dy = p[1] - pPrev[1];
    if (!half) { dx = -dx; dy = -dy; }
    const L = Math.hypot(dx, dy) || 1;
    arrow(ctx, p[0], p[1], p[0] + (dx / L) * 92, p[1] + (dy / L) * 92, col.v, 5);
    if (mirrored) arrow(ctx, p[0], p[1], p[0] - 96, p[1], col.F, 5);
    dot(ctx, p[0], p[1], col.q, true, 11);
    /* where the turn happens, and what the field is at each end */
    if (mirrored) {
      const xm = XL + turnAt().s * (XR - XL);
      line(ctx, xm, YC - 190, xm, YC + 190, alpha(PAL.ink, 0.4), 2, [9, 9]);
      label(ctx, 'turned back here, where B = ' + fmt(need, 3) + ' T', xm, YC + 190, { side: 'below', size: 19, gap: 24, H });
    }
    text(ctx, 'the lines are spread here, B = ' + fmt(B0, 3) + ' T', XL + 26, YC + 268, col.B, { size: 19, weight: 600 });
    text(ctx, 'the lines crowd here, B = ' + fmt(btS.v, 3) + ' T', XR - 10, YC + 268, col.B, { size: 19, weight: 600, align: 'right' });
    /* the three names that ride with the charge go through the labeller, so that
       they step apart wherever along the tube it has got to */
    const lab = labeller(ctx, H, { headline: 2 });
    lab.beside({ x1: p[0], y1: p[1], x2: p[0] + (dx / L) * 92, y2: p[1] + (dy / L) * 92 }, 'left', 'v', col.v, 24, { offset: 0.9, gap: 22 });
    if (mirrored) lab.beside({ x1: p[0], y1: p[1], x2: p[0] - 96, y2: p[1] }, 'left', 'F along the line', col.F, 19, { offset: 0.9, gap: 24 });
    lab.add('the charge', p[0], p[1], 0, 1, col.q, 19, 34);
    lab.flush();
    label(ctx, 'magnetic field lines', XL + 210, YC - 2 * D * width(sOf(XL + 210)), { side: 'above', size: 19, color: col.B, gap: 24, H });
    topline(ctx, mirrored
      ? `Entering at ${fmt(thS.v, 0)}° where the field is ${fmt(B0, 3)} T, the charge is turned back where the field reaches ${fmt(need, 3)} T, short of the ${fmt(btS.v, 3)} T at the crowded end.`
      : `Entering at ${fmt(thS.v, 0)}° where the field is ${fmt(B0, 3)} T, the charge would need ${fmt(need, 3)} T to be turned back, more than the ${fmt(btS.v, 3)} T at the crowded end, so it goes through.`);
    readout(d.readout,
      `\\theta = ${fmt(thS.v, 0)}^\\circ \\qquad \\kBmag = ${fmt(B0, 3)}\\ \\text{T} \\longrightarrow ${fmt(btS.v, 3)}\\ \\text{T} \\qquad \\text{${mirrored ? 'turned back where } \\kBmag = ' + fmt(need, 3) + '\\ \\text{T' : 'never turned back'}}`,
      'Only the part of the velocity across the lines is bent into circles; the part along them carries the charge forward. Where the field rises, more and more of the speed is turned into the circling, until nothing is left for the walk along the line and the charge comes back.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 22.22 + 22.23: the Earth's field lines, the cosmic rays that
   follow them to the poles and the two belts of trapped particles. Still:
   what becomes of a particle is decided by where it arrives.
===================================================================== */
(function () {
  const H = 700, d = sim('sim-earth-trap', H);
  const latS = ctl(d.controls, { label: '\\text{latitude}', cls: '', min: 0, max: 80, step: 1, value: 72, unit: '°', dec: 0, aria: 'the latitude at which the particle arrives, or at which a trapped particle is turned back' });
  const whatC = choice(d.controls, { label: '\\text{the particle}', options: [{ value: 'ray', label: 'a cosmic ray arriving' }, { value: 'inner', label: 'trapped, inner belt' }, { value: 'outer', label: 'trapped, outer belt' }], value: 'ray', aria: 'which particle the figure follows' });
  const EX = 680, EY = 420, RE = 90, R0 = 2.2;           /* the Earth, and where an arriving ray meets the field */
  const shell = (L, lat) => [EX + RE * L * Math.pow(Math.cos(lat), 3), EY - RE * L * Math.cos(lat) * Math.cos(lat) * Math.sin(lat)];
  const latMax = (L) => Math.acos(Math.min(1, Math.sqrt(1 / L)));
  const lineOf = (L) => { const lm = latMax(L), pts = []; for (let i = 0; i <= 96; i++) pts.push(shell(L, -lm + (2 * lm * i) / 96)); return pts; };
  const band = (ctx, a, b, fill) => {
    const inner = lineOf(a), outer = lineOf(b);
    [1, -1].forEach((sgn) => {
      ctx.save(); ctx.fillStyle = fill; ctx.beginPath();
      outer.forEach((p, i) => { const x = EX + sgn * (p[0] - EX); i ? ctx.lineTo(x, p[1]) : ctx.moveTo(x, p[1]); });
      for (let i = inner.length - 1; i >= 0; i--) ctx.lineTo(EX + sgn * (inner[i][0] - EX), inner[i][1]);
      ctx.closePath(); ctx.fill(); ctx.restore();
    });
  };

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), v: C('velocity'), q: F.el('p+') };
    const lat = latS.v * RAD, what = whatC.value;
    /* the two belts, then the field lines they sit on */
    band(ctx, 1.3, 1.9, alpha(PAL.ink, 0.13));
    band(ctx, 3.1, 4.5, alpha(PAL.ink, 0.08));
    [1.5, 2.2, 3.1, 4.3, 5.6].forEach((L) => {
      const pts = lineOf(L);
      poly(ctx, pts, alpha(col.B, 0.85), 2.6);
      poly(ctx, pts.map(([x, y]) => [2 * EX - x, y]), alpha(col.B, 0.85), 2.6);
    });
    /* the Earth, its axis, its equator and its poles */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(EX, EY, RE, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, EX, EY - RE - 44, EX, EY + RE + 44, alpha(PAL.ink, 0.4), 2, [10, 10]);
    line(ctx, EX - RE - 30, EY, EX + RE + 30, EY, alpha(PAL.ink, 0.3), 2, [6, 8]);
    text(ctx, 'N', EX, EY - RE + 26, PAL.ink, { size: 22, weight: 700, align: 'center' });
    text(ctx, 'S', EX, EY + RE - 26, PAL.ink, { size: 22, weight: 700, align: 'center' });
    text(ctx, 'the equator', EX + RE + 40, EY, PAL.muted, { size: 18 });
    /* the angle the arriving velocity makes with the field line where it meets it */
    const cosA = (2 * Math.sin(lat)) / Math.sqrt(1 + 3 * Math.sin(lat) * Math.sin(lat));
    const ang = Math.acos(Math.min(1, cosA)) / RAD, guided = ang < 45;
    const belt = what === 'inner' ? 1.6 : 3.8;
    if (what === 'ray') {
      const L = R0 / Math.pow(Math.cos(lat), 2);
      const meet = [EX + RE * R0 * Math.cos(lat), EY - RE * R0 * Math.sin(lat)];
      const ur = [Math.cos(lat), -Math.sin(lat)];
      const far = [meet[0] + ur[0] * 118, meet[1] + ur[1] * 118];
      arrow(ctx, far[0], far[1], meet[0] + ur[0] * 22, meet[1] + ur[1] * 22, col.v, 5);
      label(ctx, 'a cosmic ray proton', (far[0] + meet[0]) / 2, (far[1] + meet[1]) / 2, { side: 'right', size: 19, color: col.v, gap: 34, H });
      if (guided) {                                     /* it meets the lines nearly end-on and rides them down */
        const lend = Math.acos(Math.cos(lat) / Math.sqrt(R0)), pts = [];
        for (let i = 0; i <= 70; i++) { const la = lat + ((lend - lat) * i) / 70; const p = shell(L, la); pts.push([p[0] + 10 * Math.sin(i * 0.8), p[1] + 10 * Math.cos(i * 0.8)]); }
        poly(ctx, pts, col.q, 4);
        const end = pts[pts.length - 1];
        dot(ctx, end[0], end[1], col.q, true, 10);
        label(ctx, 'carried down to the atmosphere', end[0], end[1], { side: 'right', size: 19, color: col.q, gap: 34, H });
      } else {                                          /* it must cross the lines, and is turned back out */
        const rc = 78, nx = -ur[1], ny = ur[0];          /* the centre of its circle, square to the way it came */
        const c = [meet[0] + nx * rc, meet[1] + ny * rc], a0 = Math.atan2(meet[1] - c[1], meet[0] - c[0]), pts = [];
        for (let i = 0; i <= 80; i++) { const a2 = a0 - (i / 80) * 4.2; pts.push([c[0] + rc * Math.cos(a2), c[1] + rc * Math.sin(a2)]); }
        poly(ctx, pts, col.q, 4);
        const end = pts[pts.length - 1];
        dot(ctx, end[0], end[1], col.q, true, 10);
        label(ctx, 'turned aside, never reaching the air', end[0], end[1], { side: end[0] > EX ? 'right' : 'left', size: 19, color: col.q, gap: 30, H });
      }
      const nxt = shell(L, lat + 0.05);
      angleArc(ctx, { x: meet[0], y: meet[1] }, 50, Math.atan2(-(far[1] - meet[1]), far[0] - meet[0]), Math.atan2(-(nxt[1] - meet[1]), nxt[0] - meet[0]), fmt(ang, 0) + '°');
    } else {
      const lm = Math.min(latMax(belt) - 0.06, lat), pts = [];
      for (let i = 0; i <= 150; i++) { const la = -lm + (2 * lm * i) / 150; const p = shell(belt, la); pts.push([p[0] + 12 * Math.sin(i * 0.5), p[1] + 12 * Math.cos(i * 0.5)]); }
      poly(ctx, pts, col.q, 4);
      [pts[0], pts[pts.length - 1]].forEach((p) => dot(ctx, p[0], p[1], col.q, true, 10));
      label(ctx, 'turned back where the lines crowd', pts[pts.length - 1][0], pts[pts.length - 1][1], { side: 'right', size: 19, color: col.q, gap: 30, H });
      label(ctx, 'and turned back again at the other end', pts[0][0], pts[0][1], { side: 'right', size: 19, color: col.q, gap: 30, H });
    }
    text(ctx, 'the Van Allen belts, where protons and electrons are held', 40, 618, PAL.muted, { size: 19, weight: 600 });
    text(ctx, 'the Earth’s magnetic field lines', 40, 646, col.B, { size: 19, weight: 600 });
    const turned = fmt(Math.min(latS.v, latMax(belt) / RAD - 4), 0);
    topline(ctx, what === 'ray'
      ? (guided
        ? `A cosmic ray arriving at ${fmt(latS.v, 0)}° of latitude meets the field lines at ${fmt(ang, 0)}°, almost end-on, so it spirals along them and reaches the atmosphere near the pole.`
        : `A cosmic ray arriving at ${fmt(latS.v, 0)}° of latitude meets the field lines at ${fmt(ang, 0)}°, nearly square to them, so it must cross them and is turned aside.`)
      : `A particle trapped in the ${what === 'inner' ? 'inner' : 'outer'} belt runs along its field line and is turned back at ${turned}° of latitude, where the lines crowd together.`);
    readout(d.readout,
      what === 'ray'
        ? `\\text{latitude } ${fmt(latS.v, 0)}^\\circ \\qquad \\kv \\text{ meets } \\kBmag \\text{ at } ${fmt(ang, 0)}^\\circ \\qquad \\text{${guided ? 'carried along the lines' : 'turned aside'}}`
        : `\\text{the ${what === 'inner' ? 'inner' : 'outer'} belt} \\qquad \\text{turned back at } ${turned}^\\circ \\text{ of latitude}`,
      'A charge whose velocity lies nearly along a field line spirals about that line and is carried with it; one whose velocity is nearly square to the lines must cross them, and the same force that bends a circle turns it away. That is why the dose from cosmic rays is higher at the poles than at the equator.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.25: the tokamak. A locked view (rule 28.2) of the book's own
   perspective drawing: a doughnut wound with a coil, the field running the
   whole way round inside it and a deuteron circling a field line as it
   goes. Still: what is asked is how wide that circle is.
===================================================================== */
(function () {
  const H = 700, d = sim('sim-tokamak', H);
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 1, max: 5, step: 0.1, value: 3, unit: 'T', dec: 1, aria: 'the strength of the field inside the chamber' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 2, max: 10, step: 0.1, value: 5, unit: '× 10⁵ m/s', dec: 1, aria: 'the speed of the proton' });
  const MP = 1.67e-27;                                   /* the mass of a proton, in kilograms */
  const BIG = 50;                                        /* the factor the spiral is drawn at, since it is far too small to see */
  const RMAJ = 3.0, AMIN = 1.0;                          /* the chamber, in metres */
  const SC = 98;                                         /* canvas units to the metre of the chamber */
  const V = view({ yaw: 0.42, pitch: 0.58, dist: 2600, cx: 800, cy: 356 });
  const P3 = (x, y, z) => V.P([x * SC, y * SC, z * SC]);
  const ring = (rr, yy) => { const pts = []; for (let i = 0; i <= 120; i++) { const a = (i / 120) * TAU; pts.push(P3(rr * Math.cos(a), yy, rr * Math.sin(a))); } return pts; };
  const rOf = () => (MP * vS.v * 1e5) / (QE * bS.v);     /* the radius of the proton's circle, in metres */

  function draw() {
    const { ctx } = begin(d.c);
    const col = { B: C('magnetic-field'), q: F.el('p+'), r: C('position') };
    /* the chamber: its outer and inner equators and its top and bottom circles */
    poly(ctx, ring(RMAJ + AMIN, 0), PAL.ink, 3);
    poly(ctx, ring(RMAJ - AMIN, 0), PAL.ink, 3);
    poly(ctx, ring(RMAJ, AMIN), alpha(PAL.ink, 0.5), 2.5);
    poly(ctx, ring(RMAJ, -AMIN), alpha(PAL.ink, 0.28), 2.5, [8, 8]);
    /* the coil wound round it */
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * TAU, ca = Math.cos(a), sa = Math.sin(a), pts = [];
      for (let i = 0; i <= 48; i++) {
        const t = (i / 48) * TAU, rr = RMAJ + AMIN * 1.18 * Math.cos(t);
        pts.push(P3(rr * ca, AMIN * 1.18 * Math.sin(t), rr * sa));
      }
      poly(ctx, pts, alpha(PAL.ink, 0.34), 2.2);
    }
    /* the field line that runs the whole way round inside, and the deuteron's spiral about it */
    const centre = ring(RMAJ, 0);
    poly(ctx, centre, col.B, 4);
    const rg = rOf(), rd = rg * BIG, pts = [];
    for (let i = 0; i <= 520; i++) {
      const a = (i / 520) * TAU, ca = Math.cos(a), sa = Math.sin(a), ph = a * 26;
      const rr = RMAJ + rd * Math.cos(ph);
      pts.push(P3(rr * ca, rd * Math.sin(ph), rr * sa));
    }
    poly(ctx, pts, col.q, 2.6);
    /* the half width of the chamber, bracketed against the circle the deuteron makes */
    const top = P3(RMAJ, AMIN, 0), mid = P3(RMAJ, 0, 0);
    vbracket(ctx, mid[0] + 104, top[1], mid[1], col.r, fmt(AMIN, 1) + ' m', 1, { side: 'right', H });
    const outer = ring(RMAJ + AMIN, 0);
    label(ctx, 'the field runs all the way around', centre[0][0], centre[0][1], { side: 'right', size: 19, color: col.B, gap: 34, H });
    label(ctx, 'the chamber and its coil', outer[60][0], outer[60][1], { side: 'left', size: 19, gap: 34, H });
    label(ctx, 'a proton of the plasma and its path', pts[390][0], pts[390][1], { side: 'below', size: 19, color: col.q, gap: 40, H });
    ['The spiral is drawn', BIG + ' times its true size.', 'At its true size the', 'circle would be a', fmt(AMIN / rg, 0) + 'th of the chamber’s', 'half width, which is', 'why the plasma never', 'reaches the wall.'].forEach((s, i) =>
      text(ctx, s, 34, 180 + i * 28, PAL.muted, { size: 18 }));
    topline(ctx, `A proton at ${sci(vS.v * 1e5, 1)} m/s in a ${fmt(bS.v, 1)} T field circles a field line every ${fmt(rg * 1000, 2)} mm, a ${fmt(AMIN / rg, 0)}th of the chamber’s half width, so it follows the ring round without touching the wall.`);
    readout(d.readout,
      `\\kr = \\frac{m\\kv}{\\kq\\kBmag} = \\frac{(1.67 \\times 10^{-27}\\,\\text{kg})(${sciTex(vS.v * 1e5, 1)}\\,\\text{m/s})}{(1.60 \\times 10^{-19}\\,\\text{C})(${fmt(bS.v, 1)}\\,\\text{T})} = ${fmt(rg * 1000, 2)}\\ \\text{mm} \\qquad \\frac{\\kr}{1.0\\ \\text{m}} = \\frac{1}{${fmt(AMIN / rg, 0)}}`,
      `The spiral is drawn ${BIG} times its true width so that it can be seen at all. Raise the speed or lower the field and the circle widens, and a chamber holds its plasma only while that circle stays small against the chamber itself.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
