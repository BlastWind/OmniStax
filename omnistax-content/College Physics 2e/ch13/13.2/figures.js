/* Figures for section 13.2 Thermal Expansion of Solids and Liquids. Boots against the section's text article.
   A body at one temperature change is a picture and not a motion, so every
   figure here is still: none registers a cycle, none carries a transport,
   and a slider's or a dropdown's input alone redraws it. The temperature
   hue sits on the symbol, the slider and the axis, never as a tint on a
   body; a warmed plate is the same ink as the cold one, told apart by its
   dashed outline. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, curve, pinned, view, face, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- Table 13.2, the coefficients the figures draw from ---------- */
/* name, α and β in 10⁻⁶ per °C. Marble's β is the table's 2.1 × 10⁻⁵. */
const SOLIDS = [
  ['Aluminum', 25, 75], ['Brass', 19, 56], ['Copper', 17, 51], ['Gold', 14, 42], ['Iron or steel', 12, 35],
  ['Invar (nickel-iron alloy)', 0.9, 2.7], ['Lead', 29, 87], ['Silver', 18, 54], ['Glass (ordinary)', 9, 27],
  ['Glass (Pyrex)', 3, 9], ['Quartz', 0.4, 1], ['Concrete or brick', 12, 36], ['Marble', 7, 21],
];
const LIQUIDS = [['Ether', 1650], ['Ethyl alcohol', 1100], ['Gasoline (petrol)', 950], ['Glycerin', 500], ['Mercury', 180], ['Water', 210]];
const optionOf = (r) => ({ value: r[0], label: r[0] });
const solidOf = (name) => SOLIDS.find((r) => r[0] === name);
const liquidOf = (name) => LIQUIDS.find((r) => r[0] === name);
/* the value of a coefficient written the way the table writes it, as a count of 10⁻⁶ per °C */
const coef = (v) => (v >= 1 ? fmt(v, 0) : fmt(v, 1));
const coefTex = (v) => coef(v) + ' \\times 10^{-6}/^\\circ\\text{C}';
/* a number to three significant figures, as the book writes its results */
function sig(v, n = 3) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), d = n - 1 - e;
  if (d >= 0) return fmt(v, d);
  const m = Math.pow(10, -d); return fmt(Math.round(v / m) * m, 0);
}
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (s) => String(s).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific form: for a canvas label, and for a readout in LaTeX */
function sciParts(v, d = 2) { const e = Math.floor(Math.log10(Math.abs(v))); return { m: fmt(v / Math.pow(10, e), d), e }; }
const sciText = (v, d = 2) => { const { m, e } = sciParts(v, d); return m + ' × 10' + sup(e); };
const sciTex = (v, d = 2) => { const { m, e } = sciParts(v, d); return m + ' \\times 10^{' + e + '}'; };
/* the hatching that tells a liquid from the air above it, in ink and never a tint */
function hatch(ctx, x, y, w, h) {
  if (h <= 0 || w <= 0) return;
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 1.5; ctx.beginPath();
  for (let s = x - h; s < x + w; s += 16) { ctx.moveTo(s, y + h); ctx.lineTo(s + h, y); }
  ctx.stroke(); ctx.restore();
}
/* a dashed outline in ink, the book's convention for the warmed boundary */
function dashRect(ctx, x, y, w, h, color, wd = 3) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = wd; ctx.setLineDash([10, 8]); ctx.strokeRect(x, y, w, h); ctx.restore();
}
function circle(ctx, x, y, r, fill, stroke, wd = 3, dash) {
  ctx.save(); if (dash) ctx.setLineDash(dash); ctx.lineWidth = wd; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); } ctx.restore();
}

/* =====================================================================
   SIM: linear thermal expansion. A span of the chosen material at its cold
   length and after warming, the extension drawn larger than life by a
   factor the reader sets (root rule 28.4), and a graph of the extension
   against the temperature change. Still: one warming is one picture.
===================================================================== */
(function () {
  const d = sim('sim-linear-expansion', 760);
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: -60, max: 100, step: 1, value: 55, unit: '°C', dec: 0, aria: 'the change in temperature' });
  const Ls = ctl(d.controls, { label: 'L', cls: '', min: 100, max: 2000, step: 5, value: 1275, unit: 'm', dec: 0, aria: 'the length of the span before it warms' });
  const ks = ctl(d.controls, { label: '\\text{drawn}', cls: '', min: 1, max: 1000, step: 1, value: 400, unit: '× life', dec: 0, aria: 'the factor the extension is drawn larger than life', detents: [{ v: 1, label: 'true scale' }, { v: 100 }, { v: 400 }, { v: 1000 }], snap: true });
  const mat = select(d.controls, { label: '\\text{material}', options: SOLIDS.map(optionOf), value: 'Iron or steel', aria: 'the material of the span' });
  /* The scene scale is fixed from the slider maximum: 2000 m of span is 1000 units. The graph's axes
     are fixed from the slider ranges, −60 to 100 °C and −2 to 4 m, and a value past an edge is pinned. */
  const X0 = 200, PXM = 0.5, YC = 170, YW = 252, BEAM = 26, XMAX = 1300;
  const GB = { l: 190, r: 1250, t: 372, b: 640 };
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), pc = C('position');
    const [name, a] = solidOf(mat.value), al = a * 1e-6, L = Ls.v, dt = dT.v, k = ks.v;
    const dL = al * L * dt, Lpx = L * PXM, ext = dL * k * PXM;
    const xEnd = X0 + Lpx, xWarm = Math.min(XMAX, xEnd + ext), clipped = xEnd + ext > XMAX;
    /* the tower the span is fixed to, and the two spans */
    fixed(ctx, 110, YC - 44, 90, YW - YC + 88);
    text(ctx, 'fixed end', 155, YW + 70, PAL.muted, { size: 17, align: 'center' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([10, 8]);
    ctx.fillRect(X0, YC - BEAM / 2, Lpx, BEAM); ctx.strokeRect(X0, YC - BEAM / 2, Lpx, BEAM); ctx.restore();
    text(ctx, 'before warming', X0 + 14, YC - BEAM / 2 - 18, PAL.muted, { size: 17 });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
    ctx.fillRect(X0, YW - BEAM / 2, xWarm - X0, BEAM); ctx.strokeRect(X0, YW - BEAM / 2, xWarm - X0, BEAM); ctx.restore();
    if (clipped) { line(ctx, xWarm - 10, YW - 24, xWarm + 12, YW + 24, PAL.panel, 9); line(ctx, xWarm - 10, YW - 24, xWarm + 12, YW + 24, PAL.ink, 3); }
    text(ctx, 'after warming by ' + fmt(dt, 0) + ' °C', X0 + 14, YW + BEAM / 2 + 20, PAL.muted, { size: 17 });
    /* the cold end carried down to the warm span, and the extension bracketed in the position hue */
    line(ctx, xEnd, YC + BEAM / 2, xEnd, YW + BEAM / 2 + 4, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, xEnd, YW, PAL.ink, false, 8);
    hbracket(ctx, X0, xEnd, YC - 54, PAL.ink, 'L = ' + fmt(L, 0) + ' m');
    if (Math.abs(ext) >= 3) {
      const bx1 = Math.min(xEnd, xWarm), bx2 = Math.max(xEnd, xWarm);
      hbracket(ctx, bx1, bx2, YW + 62, pc);
      text(ctx, 'ΔL = ' + sig(dL, 2) + ' m, drawn ' + fmt(k, 0) + '× life', bx2 > 1000 ? bx1 - 16 : bx2 + 16, YW + 62, pc, { size: 20, weight: 600, align: bx2 > 1000 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    } else if (dt !== 0) {
      text(ctx, 'ΔL = ' + sig(dL, 2) + ' m is too small to see here', xEnd + 16, YW + 62, pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    /* the graph: the extension against the temperature change, for this material and this length */
    const { X, Y } = axes(ctx, GB, [-60, 100], [-2, 4], { xl: 'ΔT (°C)', xc: tc, yl: 'ΔL (m)', yc: pc, nx: 8, ny: 6, fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(GB.l, GB.t, GB.r - GB.l, GB.b - GB.t); ctx.clip();
    curve(ctx, (t) => al * L * t, -60, 100, X, Y, pc, 4, 2);
    ctx.restore();
    const p = pinned(ctx, GB, X, Y, dt, dL, pc, sig(dL, 2) + ' m');
    line(ctx, p.x, p.y, p.x, GB.b, alpha(tc, 0.6), 2, [4, 8]);
    line(ctx, GB.l, p.y, p.x, p.y, alpha(pc, 0.6), 2, [4, 8]);
    text(ctx, name + ': α = ' + coef(a) + ' × 10⁻⁶ per °C', GB.r - 10, GB.t + 22, PAL.muted, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.85) });
    const lo = name.toLowerCase().replace(' (nickel-iron alloy)', '').replace('iron or steel', 'steel').replace('glass (ordinary)', 'ordinary glass').replace('glass (pyrex)', 'Pyrex').replace('concrete or brick', 'concrete');
    topline(ctx, dt === 0 ? 'A ' + lo + ' span ' + fmt(L, 0) + ' m long at its original temperature has not changed length at all.'
      : 'A ' + lo + ' span ' + fmt(L, 0) + ' m long ' + (dt > 0 ? 'warms' : 'cools') + ' by ' + fmt(Math.abs(dt), 0) + ' °C and ' + (dt > 0 ? 'grows' : 'shrinks') + ' ' + sig(Math.abs(dL), 2) + ' m, drawn here ' + (k === 1 ? 'at true scale.' : fmt(k, 0) + ' times larger than life.'));
    readout(d.readout, `\\kdL = \\alpha L\\kdTemp = (${coefTex(a)})(${fmt(L, 0)}\\ \\text{m})(${fmt(dt, 0)}^\\circ\\text{C}) = ${sig(dL, 2)}\\ \\text{m}`,
      (k === 1 ? 'The extension is drawn at true scale, and it is too small to see: ' : 'The extension is drawn ' + fmt(k, 0) + ' times larger than life; at true scale it is ') + sig(Math.abs(dL), 2) + ' m on a span of ' + fmt(L, 0) + ' m, ' + sig(Math.abs(al * dt) * 100, 2) + '% of the length. The graph is a straight line through the origin because the change in length is proportional to the change in temperature, and its slope is αL, so a longer span or a material with a larger coefficient tips it up.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.12: a plate with a plug, the plate with the plug removed, and
   a box, each at its original size in solid lines and after warming in
   dashed lines, the growth drawn larger than life by a factor the reader
   sets. The box is the one the book prints in perspective and is drawn on
   a locked view from the book's own viewpoint (root rule 28.2). Still:
   the three panels are three views of one warmed body.
===================================================================== */
(function () {
  const d = sim('sim-expanding-plate', 640);
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 0, max: 200, step: 1, value: 100, unit: '°C', dec: 0, aria: 'the change in temperature' });
  const ks = ctl(d.controls, { label: '\\text{drawn}', cls: '', min: 1, max: 100, step: 1, value: 50, unit: '× life', dec: 0, aria: 'the factor the growth is drawn larger than life', detents: [{ v: 1, label: 'true scale' }, { v: 50 }, { v: 100 }], snap: true });
  const mat = select(d.controls, { label: '\\text{material}', options: SOLIDS.map(optionOf), value: 'Aluminum', aria: 'the material of the plate and the box' });
  /* The scene scale is fixed from the slider maxima: lead at 200 °C drawn 100 times larger grows 58% in
     each length, so a cold half-side of 118 units warms to 186 and stays inside its 440-unit panel. */
  const HALF = 118, RP = 46, YP = 300, CX = [250, 700, 1150];
  const V = view({ yaw: 0.62, pitch: 0.34, dist: 2600, cx: CX[2] + 10, cy: YP + 6 });
  const kFront = V.shade([0, 0, 1]), kTop = V.shade([0, 1, 0]), kRight = V.shade([1, 0, 0]);
  const corner = (h, sx, sy, sz) => [sx * h, sy * h, sz * h];
  function cube(ctx, h, dashed) {
    const c = (sx, sy, sz) => V.P(corner(h, sx, sy, sz));
    const front = [c(-1, -1, 1), c(1, -1, 1), c(1, 1, 1), c(-1, 1, 1)];
    const top = [c(-1, 1, 1), c(1, 1, 1), c(1, 1, -1), c(-1, 1, -1)];
    const right = [c(1, -1, 1), c(1, -1, -1), c(1, 1, -1), c(1, 1, 1)];
    if (!dashed) { face(ctx, front, kFront, 3); face(ctx, top, kTop, 3); face(ctx, right, kRight, 3); return; }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([10, 8]);
    for (const f of [front, top, right]) { ctx.beginPath(); f.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.stroke(); }
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    C('temperature');
    const [name, a, b] = solidOf(mat.value), al = a * 1e-6, dt = dT.v, k = ks.v;
    const f = al * dt, fd = f * k, g = 1 + fd;                    /* the true fraction, and the one drawn */
    /* (a) the plate and its plug, (b) the plate with the plug removed */
    for (const [i, hole] of [[0, false], [1, true]]) {
      const cx = CX[i];
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.fillRect(cx - HALF, YP - HALF, 2 * HALF, 2 * HALF); ctx.strokeRect(cx - HALF, YP - HALF, 2 * HALF, 2 * HALF); ctx.restore();
      circle(ctx, cx, YP, RP, hole ? PAL.panel : PAL.soft2 || PAL.soft, PAL.ink, 3);
      dashRect(ctx, cx - HALF * g, YP - HALF * g, 2 * HALF * g, 2 * HALF * g, PAL.ink);
      circle(ctx, cx, YP, RP * g, null, PAL.ink, 3, [10, 8]);
      text(ctx, hole ? 'the hole' : 'the plug', cx, YP + RP * g + 22, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.8) });
    }
    /* (c) the box, cold in shaded faces and warm as a dashed outline */
    cube(ctx, 92, false); cube(ctx, 92 * g, true);
    for (const [i, s] of [[0, '(a) a plate and its plug'], [1, '(b) the plug removed'], [2, '(c) a box']]) text(ctx, s, CX[i], 540, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the legend for the two outlines */
    line(ctx, 430, 598, 490, 598, PAL.ink, 3); text(ctx, 'before warming', 502, 598, PAL.muted, { size: 17 });
    line(ctx, 700, 598, 760, 598, PAL.ink, 3, [10, 8]); text(ctx, 'after warming, drawn ' + fmt(k, 0) + '× life', 772, 598, PAL.muted, { size: 17 });
    const pct = (x, n = 2) => sig(100 * x, n) + '%';
    const lo = name.toLowerCase().replace(' (nickel-iron alloy)', '').replace('iron or steel', 'steel').replace('glass (ordinary)', 'ordinary glass').replace('glass (pyrex)', 'Pyrex').replace('concrete or brick', 'concrete');
    topline(ctx, dt === 0 ? 'At its original temperature nothing has grown, and the dashed outlines lie on the solid ones.'
      : lo[0].toUpperCase() + lo.slice(1) + ' warmed by ' + fmt(dt, 0) + ' °C grows ' + pct(f) + ' in every length, ' + pct(2 * f) + ' in area and ' + pct(3 * f) + ' in volume, drawn here ' + (k === 1 ? 'at true scale.' : fmt(k, 0) + ' times larger than life.'));
    const exact = Math.pow(1 + f, 3) - 1;
    const pctTex = (x) => sig(100 * x, 2) + '\\%';
    readout(d.readout, `\\frac{\\Delta V}{V} = \\beta\\kdTemp \\approx 3\\alpha\\kdTemp = 3(${coefTex(a)})(${fmt(dt, 0)}^\\circ\\text{C}) = ${pctTex(3 * f)}`,
      'Every length grows by αΔT = ' + pct(f) + ', so an area, which is a length times a length, grows by 2αΔT = ' + pct(2 * f) + ' and a volume by three times the fraction. The hole grows by the same fraction as the plug that filled it, ' + pct(2 * f) + ' in area, because the ring of material around it expands exactly as it would with the plug in place. The exact growth in volume, (1 + αΔT)³ − 1 = ' + pct(exact, 3) + ', is so close to 3αΔT that the table writes β = ' + coef(b) + ' × 10⁻⁶ per °C for ' + lo + ', almost exactly 3α' + (k === 1 ? '. At true scale the dashed outlines sit on the solid ones, which is why the book draws the expansion larger than it is.' : '.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.13: the density of freshwater against temperature. The graph
   is the scene; a point on it marks the temperature the reader chooses,
   and a hollow one marks the maximum at 4 °C. Still: a curve with a point.
===================================================================== */
(function () {
  const d = sim('sim-water-density', 560);
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 0, max: 12, step: 0.1, value: 4, unit: '°C', dec: 1, aria: 'the temperature of the water', detents: [{ v: 0 }, { v: 4, label: 'densest' }, { v: 12 }], snap: false });
  /* the density of freshwater at whole degrees, in g/cm³, the values the book's graph plots */
  const RHO = [0.999840, 0.999899, 0.999940, 0.999964, 0.999972, 0.999964, 0.999940, 0.999901, 0.999848, 0.999781, 0.999700, 0.999605, 0.999498];
  /* a smooth curve through the table: cubic Hermite pieces with finite-difference slopes */
  function rho(t) {
    const i = Math.min(11, Math.max(0, Math.floor(t))), u = t - i;
    const m = (j) => (RHO[Math.min(12, j + 1)] - RHO[Math.max(0, j - 1)]) / (Math.min(12, j + 1) - Math.max(0, j - 1));
    const p0 = RHO[i], p1 = RHO[i + 1], m0 = m(i), m1 = m(i + 1);
    const u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * p0 + (u3 - 2 * u2 + u) * m0 + (-2 * u3 + 3 * u2) * p1 + (u3 - u2) * m1;
  }
  const MAX = RHO[4];
  /* the axes are the book's: 0 to 12 °C and 0.99950 to 1.00000 g/cm³, and they never rescale */
  const GB = { l: 220, r: 1260, t: 150, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), rc = C('density');
    const T = Ts.v, r = rho(T), short = (MAX - r) / MAX;
    const { X, Y } = axes(ctx, GB, [0, 12], [0.9995, 1.0], { xl: 'temperature (°C)', xc: tc, yl: 'density of freshwater (g/cm³)', yc: rc, nx: 6, ny: 5, fy: (v) => fmt(v, 5), fx: (v) => fmt(v, 0) });
    curve(ctx, rho, 0, 12, X, Y, rc, 5, 120);
    for (let t = 0; t <= 12; t++) dot(ctx, X(t), Y(RHO[t]), rc, true, 5);
    /* the maximum at 4 °C, and the chosen temperature */
    if (Math.abs(T - 4) > 0.05) { dot(ctx, X(4), Y(MAX), rc, false, 9); text(ctx, 'densest, at 4 °C', X(4), Y(MAX) - 30, rc, { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) }); }
    const p = pinned(ctx, GB, X, Y, T, r, rc);
    line(ctx, p.x, p.y, p.x, GB.b, alpha(tc, 0.7), 2, [4, 8]);
    line(ctx, GB.l, p.y, p.x, p.y, alpha(rc, 0.7), 2, [4, 8]);
    text(ctx, 'T = ' + fmt(T, 1) + ' °C', p.x + (p.x > 1160 ? -10 : 10), GB.b - 18, tc, { size: 18, weight: 600, align: p.x > 1160 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'ρ = ' + fmt(r, 5) + ' g/cm³', p.x + (p.x > 1000 ? -16 : 16), p.y + (p.y < (GB.t + GB.b) / 2 ? 34 : -28), rc, { size: 20, weight: 600, align: p.x > 1000 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, Math.abs(T - 4) <= 0.05 ? 'At 4 °C water is at its densest, ' + fmt(MAX, 5) + ' g/cm³, and water at any other temperature between 0 and 12 °C floats on it.'
      : 'At ' + fmt(T, 1) + ' °C water has a density of ' + fmt(r, 5) + ' g/cm³, ' + sig(100 * short, 2) + '% below its maximum at 4 °C, so it floats on 4 °C water.');
    readout(d.readout, `\\krho = ${fmt(r, 5)}\\ \\text{g/cm}^3 \\text{ at } \\kTemp = ${fmt(T, 1)}^\\circ\\text{C}, \\qquad \\frac{\\krho_{\\text{max}} - \\krho}{\\krho_{\\text{max}}} = ${sig(100 * short, 2)}\\%`,
      (T < 3.95 ? 'Water at ' + fmt(T, 1) + ' °C is lighter than the water at 4 °C beneath it, so in a cooling pond it stays at the surface and freezes there while the 4 °C water below keeps the fish alive. '
        : T > 4.05 ? 'Water at ' + fmt(T, 1) + ' °C is lighter than water at 4 °C, so as the surface of a pond cools toward 4 °C it grows denser, sinks, and turns the pond over until the whole of it is at 4 °C. '
          : 'Water at 4 °C sinks beneath water at any other temperature in this range, so a pond cools to 4 °C throughout before its surface can freeze. ')
      + 'The whole curve spans only ' + sig(100 * (MAX - RHO[12]) / MAX, 2) + '% in density, which is why the book says the expansion is very small.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: what spills when a full tank and its liquid warm together. The
   tank's capacity and the liquid's volume are drawn as heights in a tank
   of fixed width, grown larger than life by a factor the reader sets, and
   three bars measure the two changes and their difference. Still: two
   volumes after one warming are a picture.
===================================================================== */
(function () {
  const d = sim('sim-tank-spill', 640);
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 0, max: 40, step: 0.5, value: 20, unit: '°C', dec: 1, aria: 'the change in temperature' });
  const Vs = ctl(d.controls, { label: 'V', cls: '', min: 10, max: 100, step: 1, value: 60, unit: 'L', dec: 1, aria: 'the volume of the full tank before it warms' });
  const ks = ctl(d.controls, { label: '\\text{drawn}', cls: '', min: 1, max: 50, step: 1, value: 20, unit: '× life', dec: 0, aria: 'the factor the growth is drawn larger than life', detents: [{ v: 1, label: 'true scale' }, { v: 20 }, { v: 50 }], snap: true });
  const liq = select(d.controls, { label: '\\text{liquid}', options: LIQUIDS.map(optionOf), value: 'Gasoline (petrol)', aria: 'the liquid in the tank' });
  const TANKS = ['Iron or steel', 'Aluminum', 'Brass', 'Copper', 'Glass (ordinary)', 'Glass (Pyrex)', 'Quartz'];
  const tank = select(d.controls, { label: '\\text{tank}', options: TANKS.map((n) => ({ value: n, label: n })), value: 'Iron or steel', aria: 'the material of the tank' });
  /* The tank is 300 units tall for its cold volume and the room above its rim is half that, so a drawn
     rise past 50% of the volume is cut off at the top with a break mark. The bars hold 7 L in 400 units,
     the largest change a slider can ask for (ether, 100 L, 40 °C). */
  const TX = 250, TW = 300, TH = 300, TB = 580, ROOM = 150, BX = [860, 1030, 1200], BW = 80, BB = 560, LPX = 400 / 7;
  function draw() {
    const { ctx } = begin(d.c);
    C('temperature');
    const [ln, bl] = liquidOf(liq.value), [tn, , bs] = solidOf(tank.value);
    const dt = dT.v, V = Vs.v, k = ks.v;
    const dVl = bl * 1e-6 * V * dt, dVs = bs * 1e-6 * V * dt, spill = dVl - dVs;
    const rimCold = TB - TH, hs = Math.min(ROOM, bs * 1e-6 * dt * k * TH), hl = Math.min(ROOM, bl * 1e-6 * dt * k * TH), cut = bl * 1e-6 * dt * k * TH > ROOM;
    /* the liquid to its warm level, the cold tank in solid ink, the warm rim dashed above it */
    hatch(ctx, TX, rimCold - hl, TW, TH + hl);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(TX, rimCold); ctx.lineTo(TX, TB); ctx.lineTo(TX + TW, TB); ctx.lineTo(TX + TW, rimCold); ctx.stroke();
    ctx.setLineDash([10, 8]); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(TX, rimCold - hs); ctx.lineTo(TX, rimCold); ctx.moveTo(TX + TW, rimCold - hs); ctx.lineTo(TX + TW, rimCold); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(TX - 14, rimCold - hs); ctx.lineTo(TX + TW + 14, rimCold - hs); ctx.stroke();
    ctx.restore();
    line(ctx, TX - 14, rimCold, TX + TW + 14, rimCold, PAL.ink, 2.5);
    if (cut) { line(ctx, TX - 10, rimCold - hl - 8, TX + TW + 10, rimCold - hl + 8, PAL.panel, 10); line(ctx, TX - 10, rimCold - hl - 8, TX + TW + 10, rimCold - hl + 8, PAL.ink, 3); }
    /* the part above the warm rim is what spills, drawn running over the lip into a tray */
    if (hl > hs + 1) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.setLineDash([10, 8]); ctx.strokeRect(TX, rimCold - hl, TW, hl - hs); ctx.restore();
      hatch(ctx, TX + TW + 2, rimCold - hs - 4, 12, TB - rimCold + hs + 4);
      hatch(ctx, TX + TW + 14, TB - 14, 60, 14);
      line(ctx, TX + TW + 14, TB, TX + TW + 74, TB, PAL.ink, 3); line(ctx, TX + TW + 74, TB, TX + TW + 74, TB - 24, PAL.ink, 3);
      text(ctx, 'spilled', TX + TW + 44, TB + 22, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'the tank, filled to the brim before warming', TX + TW / 2, TB + 26, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'rim before', TX - 22, rimCold, PAL.muted, { size: 16, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (hs > 12) text(ctx, 'rim after', TX - 22, rimCold - hs, PAL.muted, { size: 16, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (hl > hs + 20) text(ctx, 'would reach here', TX + TW + 22, rimCold - hl, PAL.muted, { size: 16, bg: alpha(PAL.panel, 0.85) });
    /* the three volumes as bars, in litres */
    const bars = [['ΔV of the liquid', dVl], ['ΔV of the tank', dVs], ['spilled', spill]];
    line(ctx, BX[0] - 60, BB, BX[2] + BW + 20, BB, PAL.muted, 2);
    bars.forEach(([nm, v], i) => {
      const h = Math.max(0, v) * LPX;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, i === 2 ? 0.55 : 0.28); ctx.fillRect(BX[i], BB - h, BW, h); ctx.restore();
      line(ctx, BX[i], BB - h, BX[i] + BW, BB - h, PAL.ink, 3);
      text(ctx, sig(v, i === 1 ? 2 : 3) + ' L', BX[i] + BW / 2, BB - h - 18, PAL.ink, { size: 19, weight: 600, align: 'center' });
      text(ctx, nm, BX[i] + BW / 2, BB + 24, PAL.muted, { size: 16, align: 'center' });
    });
    for (let L = 0; L <= 7; L += 1) { line(ctx, BX[0] - 60, BB - L * LPX, BX[0] - 48, BB - L * LPX, PAL.muted, 2); if (L % 1 === 0) text(ctx, fmt(L, 0) + ' L', BX[0] - 68, BB - L * LPX, PAL.muted, { size: 15, align: 'right' }); }
    const lname = ln.toLowerCase().replace(' (petrol)', ''), tname = tn.toLowerCase().replace('iron or steel', 'steel').replace('glass (ordinary)', 'glass').replace('glass (pyrex)', 'Pyrex');
    topline(ctx, dt === 0 ? 'The ' + tname + ' tank holds ' + fmt(V, 1) + ' L of ' + lname + ' to the brim, and until they warm nothing spills.'
      : fmt(V, 1) + ' L of ' + lname + ' in a ' + tname + ' tank warms by ' + fmt(dt, 1) + ' °C, and ' + sig(spill) + ' L spills, because the ' + lname + ' grows ' + sig(dVl) + ' L while the tank grows only ' + sig(dVs, 2) + ' L.');
    const gs = ln.startsWith('Gasoline') ? 'gas' : 'liq', ss = tn === 'Iron or steel' ? 's' : 'tank';
    readout(d.readout, `V_{\\text{spill}} = (\\beta_{\\text{${gs}}} - \\beta_{\\text{${ss}}})V\\kdTemp = [(${coef(bl)} - ${coef(bs)}) \\times 10^{-6}/^\\circ\\text{C}](${fmt(V, 1)}\\ \\text{L})(${fmt(dt, 1)}^\\circ\\text{C}) = ${sig(spill)}\\ \\text{L}`,
      (k === 1 ? 'The growth is drawn at true scale, and it is barely visible: ' : 'The growth is drawn ' + fmt(k, 0) + ' times larger than life, each volume shown as a height in a tank of fixed width; in truth ') + 'the ' + lname + ' grows ' + sig(100 * bl * 1e-6 * dt, 2) + '% of its volume and the ' + tname + ' tank ' + sig(100 * bs * 1e-6 * dt, 2) + '%. The spill is the difference of the two changes, and because the two original volumes are equal it is one coefficient less the other, times the volume, times the temperature change.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: thermal stress. The tank of Example 13.4 sealed so the liquid
   cannot grow, and a gauge reading the pressure that squeezes its would-be
   spill back into the original volume. Still: one warming, one reading.
===================================================================== */
(function () {
  const d = sim('sim-thermal-stress', 600);
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 0, max: 40, step: 0.5, value: 20, unit: '°C', dec: 1, aria: 'the change in temperature' });
  const Bs = ctl(d.controls, { label: '\\kBb', cls: 'elastic-modulus', min: 0.5, max: 3, step: 0.05, value: 1, unit: '× 10⁹ N/m²', dec: 2, aria: 'the bulk modulus of the liquid' });
  const liq = select(d.controls, { label: '\\text{liquid}', options: LIQUIDS.map(optionOf), value: 'Gasoline (petrol)', aria: 'the liquid sealed in the tank' });
  /* The tank holds the example's 60.0 L in a steel tank: the pressure does not depend on the volume,
     so the volume is not a slider. The gauge runs to 2 × 10⁸ Pa, the most a slider can ask for (ether
     at 40 °C with B = 3 × 10⁹ N/m²), and never rescales. */
  const V0 = 60, BS = 35, TX = 260, TW = 280, TH = 280, TB = 540, GX = 1000, GY = 330, GR = 170, PMAX = 2e8, ATM = 1.013e5;
  function draw() {
    const { ctx } = begin(d.c);
    C('temperature'); const pc = C('pressure'), bc = C('elastic-modulus');
    const [ln, bl] = liquidOf(liq.value), dt = dT.v, B = Bs.v * 1e9;
    const dV = (bl - BS) * 1e-6 * V0 * dt, P = (dV / V0) * B;
    const rim = TB - TH, hw = Math.min(90, (dV / V0) * 20 * TH);       /* the would-be spill as a height, drawn 20 times larger than life */
    /* the sealed tank: liquid to the lid, a bolted lid, and the dashed level the liquid would have reached */
    hatch(ctx, TX, rim, TW, TH);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(TX, rim, TW, TH); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(TX - 16, rim - 18, TW + 32, 18); ctx.strokeRect(TX - 16, rim - 18, TW + 32, 18); ctx.restore();
    for (const x of [TX - 4, TX + TW / 2, TX + TW + 4]) dot(ctx, x, rim - 9, PAL.ink, true, 4);
    text(ctx, 'sealed lid', TX - 26, rim - 9, PAL.muted, { size: 17, align: 'right' });
    if (hw > 2) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2; ctx.setLineDash([10, 8]); ctx.strokeRect(TX, rim - 18 - hw, TW, hw); ctx.restore();
      vbracket(ctx, TX + TW + 30, rim - 18 - hw, rim - 18, PAL.ink, 'ΔV = ' + sig(dV) + ' L', 1);
    }
    text(ctx, ln.replace(' (petrol)', '').toLowerCase() + ', ' + fmt(V0, 1) + ' L, in a steel tank', TX + TW / 2, TB + 26, PAL.muted, { size: 17, align: 'center' });
    /* the pipe to the gauge, and the gauge itself in the pressure hue */
    line(ctx, TX + TW, rim + 60, GX - GR - 30, rim + 60, PAL.ink, 4); line(ctx, GX - GR - 30, rim + 60, GX - GR - 30, GY, PAL.ink, 4); line(ctx, GX - GR - 30, GY, GX - GR, GY, PAL.ink, 4);
    circle(ctx, GX, GY, GR, PAL.panel, PAL.ink, 4);
    const a0 = Math.PI * 0.8, a1 = Math.PI * 2.2, ang = (p) => a0 + (a1 - a0) * Math.min(1, p / PMAX);
    ctx.save(); ctx.strokeStyle = pc; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(GX, GY, GR - 22, a0, a1); ctx.stroke(); ctx.restore();
    for (let i = 0; i <= 8; i++) {
      const p = (i / 8) * PMAX, t = ang(p), major = i % 2 === 0;
      line(ctx, GX + (GR - 22) * Math.cos(t), GY + (GR - 22) * Math.sin(t), GX + (GR - (major ? 44 : 34)) * Math.cos(t), GY + (GR - (major ? 44 : 34)) * Math.sin(t), PAL.ink, major ? 3 : 2);
      if (major) text(ctx, fmt(p / 1e8, 1), GX + (GR - 62) * Math.cos(t), GY + (GR - 62) * Math.sin(t), PAL.ink, { size: 17, weight: 600, align: 'center' });
    }
    text(ctx, '× 10⁸ Pa', GX, GY + 64, PAL.ink, { size: 17, weight: 600, align: 'center' });
    const t = ang(P);
    arrow(ctx, GX - 22 * Math.cos(t), GY - 22 * Math.sin(t), GX + (GR - 92) * Math.cos(t), GY + (GR - 92) * Math.sin(t), PAL.ink, 8);
    arrow(ctx, GX - 22 * Math.cos(t), GY - 22 * Math.sin(t), GX + (GR - 92) * Math.cos(t), GY + (GR - 92) * Math.sin(t), pc, 4);
    dot(ctx, GX, GY, PAL.ink, true, 8);
    text(ctx, 'P = ' + (P > 0 ? sciText(P) : '0') + ' Pa', GX, GY + GR + 30, pc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'B = ' + fmt(Bs.v, 2) + ' × 10⁹ N/m²', GX, GY + GR + 60, bc, { size: 19, weight: 600, align: 'center' });
    const lname = ln.replace(' (petrol)', '').toLowerCase();
    topline(ctx, dt === 0 ? 'Until the ' + lname + ' warms it presses on the sealed tank with no more than it did when it was filled.'
      : lname[0].toUpperCase() + lname.slice(1) + ' sealed in a steel tank and warmed by ' + fmt(dt, 1) + ' °C would press on it with ' + sciText(P) + ' Pa, about ' + sig(P / 6895, 3) + ' lb/in², which is ' + sig(P / ATM, 3) + ' times the atmosphere.');
    readout(d.readout, `\\kPr = \\frac{\\Delta V}{V_0}\\kBb = \\frac{${sig(dV)}\\ \\text{L}}{${fmt(V0, 1)}\\ \\text{L}}(${fmt(Bs.v, 2)} \\times 10^{9}\\ \\text{N/m}^2) = ${P > 0 ? sciTex(P) : '0'}\\ \\text{Pa}`,
      'The ΔV of the equation is the volume the ' + lname + ' would have spilled had the lid been off, ' + sig(dV) + ' L for a warming of ' + fmt(dt, 1) + ' °C, and the pressure is what it takes to squeeze that much back into the original ' + fmt(V0, 1) + ' L. The ratio ΔV/V₀ is (β of the liquid − β of steel) times ΔT and does not depend on the volume, so a small can and a large tank feel the same pressure, and it is the bulk modulus that turns a fraction of a percent into ' + (P > 0 ? sig(P / ATM, 3) + ' atmospheres.' : 'nothing at all until the liquid warms.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
