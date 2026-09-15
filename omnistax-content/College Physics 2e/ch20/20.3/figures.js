/* Figures for section 20.3 Resistance and Resistivity.
   The section says two things and this file draws them twice each. A
   resistance is the material times the shape: Figure 20.10 is the cylinder
   whose length and diameter the reader sets and whose material comes from
   Table 20.1, and the sim after it lays the whole of Table 20.1 on one
   logarithmic scale, where the twenty-four decades between silver and quartz
   can be seen rather than counted. A resistance also depends on temperature:
   Figure 20.11 is the mercury sample whose resistance falls to nothing below
   4.2 K, and the sim after it is R = R0(1 + a dT) for the fifteen materials
   of Table 20.2. None of the four ideas has a time in it, so every figure
   here is still: no cycle is registered and none takes a transport.
   The page binds resistance, position and temperature. The resistivity, the
   temperature coefficient, the cross-sectional area and the length of the
   book's own untyped row stay in ink; the three groups of Table 20.1 are told
   apart on the scale by the categorical palette, never by a bound hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, curve, pinned, note, select, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers and formatting shared by the four figures ---------- */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function parts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const p = parts(x, d); return p.m + ' × 10' + sup(p.e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const p = parts(x, d); return p.m + ' \\times 10^{' + p.e + '}'; };
/* a resistance written the way a reader would say it, whatever its size */
const ohms = (R) => (R >= 1e5 || (R > 0 && R < 1e-3) ? sci(R, 2) : fmt(R, R >= 100 ? 0 : R >= 1 ? 2 : 4));
const ratio = (x) => (x < 1000 ? fmt(x, x < 10 ? 1 : 0) : sci(x, 1));
const ohmsTex = (R) => (R >= 1e5 || (R > 0 && R < 1e-3) ? sciTex(R, 2) : fmt(R, R >= 100 ? 0 : R >= 1 ? 2 : 4));

/* Table 20.1, the entries the book gives one number for, which are the ones a
   resistance can be computed from. The ranges are drawn on the scale below. */
const RHO = [
  { k: 'silver', n: 'Silver', r: 1.59e-8, g: 0 },
  { k: 'copper', n: 'Copper', r: 1.72e-8, g: 0 },
  { k: 'gold', n: 'Gold', r: 2.44e-8, g: 0 },
  { k: 'aluminum', n: 'Aluminum', r: 2.65e-8, g: 0 },
  { k: 'tungsten', n: 'Tungsten', r: 5.6e-8, g: 0 },
  { k: 'iron', n: 'Iron', r: 9.71e-8, g: 0 },
  { k: 'platinum', n: 'Platinum', r: 10.6e-8, g: 0 },
  { k: 'steel', n: 'Steel', r: 20e-8, g: 0 },
  { k: 'lead', n: 'Lead', r: 22e-8, g: 0 },
  { k: 'manganin', n: 'Manganin', r: 44e-8, g: 0 },
  { k: 'constantan', n: 'Constantan', r: 49e-8, g: 0 },
  { k: 'mercury', n: 'Mercury', r: 96e-8, g: 0 },
  { k: 'nichrome', n: 'Nichrome', r: 100e-8, g: 0 },
  { k: 'carbon', n: 'Carbon (pure)', r: 3.5e-5, g: 1 },
  { k: 'germanium', n: 'Germanium (pure)', r: 600e-3, g: 1 },
  { k: 'silicon', n: 'Silicon (pure)', r: 2300, g: 1 },
  { k: 'amber', n: 'Amber', r: 5e14, g: 2 },
  { k: 'quartz', n: 'Quartz (fused)', r: 75e16, g: 2 },
  { k: 'sulfur', n: 'Sulfur', r: 1e15, g: 2 },
];
const rhoOf = (k) => RHO.find((m) => m.k === k) ?? RHO[4];
const rhoOptions = RHO.map((m) => ({ value: m.k, label: m.n }));
/* the whole of Table 20.1, the ranges included, for the scale */
const SCALE = RHO.map((m) => ({ n: m.n, lo: m.r, hi: m.r, g: m.g })).concat([
  { n: 'Carbon', lo: 3.5e-5, hi: 60e-5, g: 1 },
  { n: 'Germanium', lo: 1e-3, hi: 600e-3, g: 1 },
  { n: 'Silicon', lo: 0.1, hi: 2300, g: 1 },
  { n: 'Glass', lo: 1e9, hi: 1e14, g: 2 },
  { n: 'Lucite', lo: 1e13, hi: 1e15, g: 2 },
  { n: 'Mica', lo: 1e11, hi: 1e15, g: 2 },
  { n: 'Rubber (hard)', lo: 1e13, hi: 1e16, g: 2 },
  { n: 'Teflon', lo: 1e13, hi: 1e15, g: 2 },
  { n: 'Wood', lo: 1e8, hi: 1e11, g: 2 },
]);
const GROUPS = ['Conductors', 'Semiconductors', 'Insulators'];

/* Table 20.2, the temperature coefficients, in 1/°C */
const ALPHA = [
  { k: 'silver', n: 'Silver', a: 3.8e-3 }, { k: 'copper', n: 'Copper', a: 3.9e-3 },
  { k: 'gold', n: 'Gold', a: 3.4e-3 }, { k: 'aluminum', n: 'Aluminum', a: 3.9e-3 },
  { k: 'tungsten', n: 'Tungsten', a: 4.5e-3 }, { k: 'iron', n: 'Iron', a: 5.0e-3 },
  { k: 'platinum', n: 'Platinum', a: 3.93e-3 }, { k: 'lead', n: 'Lead', a: 3.9e-3 },
  { k: 'manganin', n: 'Manganin', a: 0 }, { k: 'constantan', n: 'Constantan', a: 0.002e-3 },
  { k: 'mercury', n: 'Mercury', a: 0.89e-3 }, { k: 'nichrome', n: 'Nichrome', a: 0.4e-3 },
  { k: 'carbon', n: 'Carbon (pure)', a: -0.5e-3 }, { k: 'germanium', n: 'Germanium (pure)', a: -50e-3 },
  { k: 'silicon', n: 'Silicon (pure)', a: -70e-3 },
];
const alphaOf = (k) => ALPHA.find((m) => m.k === k) ?? ALPHA[4];

/* =====================================================================
   FIGURE 20.10: the uniform cylinder. Its length, its diameter and the
   material it is cut from give its resistance through R = rho L / A, and
   the resistor it stands for is drawn beside it with that resistance on
   its label. Still: a resistance computed from a shape has no clock in it.
   Drawn from one locked view, because the book draws the cylinder in
   perspective; the length and the diameter are drawn on scales of their
   own, since a filament 4 cm long and 0.09 mm across cannot be drawn on
   one, and the note under the cylinder says so.
===================================================================== */
(function () {
  const d = sim('sim-cylinder', 600);
  const mat = select(d.controls, { label: '\\text{Material}', options: rhoOptions, value: 'tungsten', aria: 'the material the cylinder is cut from' });
  const L = ctl(d.controls, { label: 'L', cls: '', min: 0.5, max: 20, step: 0.1, value: 4, unit: 'cm', dec: 2, detents: [{ v: 4, label: '4.00' }], snap: true, aria: 'length of the cylinder' });
  const D = ctl(d.controls, { label: '\\kD', cls: 'position', min: 0.02, max: 1, step: 0.005, value: 0.09, unit: 'mm', dec: 3, detents: [{ v: 0.09, label: '0.090' }], snap: true, aria: 'diameter of the cylinder' });
  const x0 = 170, yc = 270;
  function draw() {
    const { ctx } = begin(d.c);
    const m = rhoOf(mat.value);
    const Lm = L.v / 100, Dm = D.v / 1000, A = (Math.PI * Dm * Dm) / 4, R = (m.r * Lm) / A;
    /* the drawn length runs 260 to 760 units over the slider, the drawn radius 9 to 46 */
    const len = 260 + (500 * (L.v - 0.5)) / 19.5, ry = 9 + (37 * (D.v - 0.02)) / 0.98, rx = Math.max(10, ry * 0.36);
    const x1 = x0 + len;
    /* the body of the cylinder, seen a little from above and to the left */
    ctx.save();
    ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x0, yc - ry); ctx.lineTo(x1, yc - ry);
    ctx.ellipse(x1, yc, rx, ry, 0, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(x0, yc + ry);
    ctx.ellipse(x0, yc, rx, ry, 0, Math.PI / 2, -Math.PI / 2, true);
    ctx.closePath(); ctx.fill();
    const shade = ctx.createLinearGradient(0, yc - ry, 0, yc + ry);
    shade.addColorStop(0, alpha(PAL.ink, 0.02)); shade.addColorStop(0.35, alpha(PAL.ink, 0.0)); shade.addColorStop(1, alpha(PAL.ink, 0.28));
    ctx.fillStyle = shade; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x1, yc, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fill(); ctx.stroke();
    ctx.restore();
    /* the cross-section at the near end, and the diameter across it */
    vbracket(ctx, x1 + rx + 46, yc - ry, yc + ry, C('position'), 'D = ' + fmt(D.v, 3) + ' mm', 1);
    text(ctx, 'A = ' + sci(A, 2) + ' m²', x1 + rx + 90, 180, PAL.ink, { size: 22, weight: 600, bg: PAL.panel });
    /* the length along it, bracketed at one fixed height so nothing below it moves */
    hbracket(ctx, x0, x1, 380, PAL.ink, 'L = ' + fmt(L.v, 2) + ' cm');
    text(ctx, m.n + ',  ρ = ' + sci(m.r, m.r >= 1000 ? 1 : 2) + ' Ω·m', (x0 + x1) / 2, 180, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the resistor the cylinder stands for */
    const zx = 360, zy = 480, zw = 300;
    text(ctx, 'stands for', zx - 120, zy, PAL.muted, { size: 19, align: 'right' });
    line(ctx, zx - 100, zy, zx, zy, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(zx, zy);
    for (let i = 0; i < 6; i++) ctx.lineTo(zx + (zw * (i + 0.5)) / 6, zy + (i % 2 ? 22 : -22));
    ctx.lineTo(zx + zw, zy); ctx.stroke(); ctx.restore();
    line(ctx, zx + zw, zy, zx + zw + 100, zy, PAL.ink, 3);
    text(ctx, 'R = ' + ohms(R) + ' Ω', zx + zw / 2, zy - 54, C('resistance'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'The diameter is drawn much larger than its true scale, so that a thin wire can be seen at all.', 700, 575, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, 'A ' + fmt(L.v, 2) + ' cm cylinder of ' + m.n.toLowerCase() + ' ' + fmt(D.v, 3) + ' mm across has a resistance of ' + ohms(R) + ' Ω.');
    readout(d.readout, `\\kRes = \\frac{\\rho L}{A} = \\frac{(${sciTex(m.r, m.r >= 1000 ? 1 : 2)}\\ \\Omega\\cdot\\text{m})(${fmt(Lm, 4)}\\ \\text{m})}{${sciTex(A, 2)}\\ \\text{m}^2} = ${ohmsTex(R)}\\ \\Omega`,
      'Stretching the cylinder to twice its length doubles its resistance, because the charges make twice as many collisions on the way through. Doubling its diameter quarters the resistance, because the area goes as the square of the diameter and a wider cylinder carries more current for the same push. On load the cylinder is the tungsten filament of Example 20.5: 4.00 cm long and 0.090 mm across, which comes to the 0.350 Ω the example started from.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the whole of Table 20.1 on one scale. Resistivities run from
   1.59 x 10^-8 to 7.5 x 10^17 ohm-metres, twenty-six decades, and a column
   of numbers hides how far apart those are. Each material is a mark on a
   scale that steps by a factor of ten, the ranges the book gives drawn as
   bars, the three groups told apart by the categorical palette and named on
   the scale. The chosen material is labelled and its resistance as a sample
   is given, so the scale is read as a resistance and not only as a constant
   of a material. Still: a table has no clock.
===================================================================== */
(function () {
  const d = sim('sim-resistivity-scale', 660);
  const mat = select(d.controls, { label: '\\text{Material}', options: rhoOptions, value: 'copper', aria: 'the material to find on the scale' });
  const L = ctl(d.controls, { label: 'L', cls: '', min: 1, max: 100, step: 1, value: 20, unit: 'cm', dec: 0, aria: 'length of the sample' });
  const gx = { l: 120, r: 1320 };                    /* log10 of rho, from -8 to 18, fixed */
  const LO = -8, HI = 18, yAx = 470;
  const X = (lg) => gx.l + ((lg - LO) / (HI - LO)) * (gx.r - gx.l);
  const marks = () => SCALE.map((s, i) => ({ s, y: yAx - 40 - 46 * (i % 3), x: X(Math.log10(Math.sqrt(s.lo * s.hi))) }));
  hover(d.stage, () => marks().map((m) => ({ x: m.x, y: m.y, r: 18, name: m.s.n + ': ' + (m.s.lo === m.s.hi ? sci(m.s.lo, 2) : sci(m.s.lo, 1) + ' to ' + sci(m.s.hi, 1)) + ' Ω·m' })));
  function draw() {
    const { ctx } = begin(d.c);
    const m = rhoOf(mat.value), Lm = L.v / 100, A = 1e-6, R = (m.r * Lm) / A;
    /* the scale itself, a tick every two decades */
    line(ctx, gx.l, yAx, gx.r, yAx, PAL.muted, 2);
    for (let e = LO; e <= HI; e += 2) {
      line(ctx, X(e), yAx - 8, X(e), yAx + 8, PAL.muted, 2);
      text(ctx, '10' + sup(e), X(e), yAx + 30, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'resistivity ρ (Ω·m), each step a factor of ten', gx.r, yAx + 66, PAL.ink, { align: 'right', weight: 600, size: 20 });
    /* the three bands the groups occupy, named once each */
    [[-8, -5.5], [-5.5, 4.5], [8, 18]].forEach((b, g) => {
      const c = F.cat(g);
      line(ctx, X(b[0]), yAx - 214, X(b[1]), yAx - 214, alpha(c, 0.55), 5);
      text(ctx, GROUPS[g], (X(b[0]) + X(b[1])) / 2, yAx - 240, c, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    });
    /* every entry of the table, a dot for one value and a bar for a range */
    marks().forEach((mk) => {
      const c = F.cat(mk.s.g), chosen = mk.s.n === m.n;
      if (mk.s.lo !== mk.s.hi) {
        line(ctx, X(Math.log10(mk.s.lo)), mk.y, X(Math.log10(mk.s.hi)), mk.y, c, 6);
        dot(ctx, X(Math.log10(mk.s.lo)), mk.y, c, false, 7); dot(ctx, X(Math.log10(mk.s.hi)), mk.y, c, false, 7);
      } else dot(ctx, mk.x, mk.y, c, true, chosen ? 12 : 8);
      if (chosen) {
        line(ctx, mk.x, yAx - 176, mk.x, yAx - 6, alpha(PAL.ink, 0.35), 2, [4, 8]);
        text(ctx, mk.s.n, mk.x, yAx - 176, c, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      }
    });
    /* the sample the resistance is quoted for */
    text(ctx, 'A sample ' + fmt(L.v, 0) + ' cm long and 1 mm² in cross-section, cut from ' + m.n.toLowerCase() + ', would measure ' + ohms(R) + ' Ω.', 720, yAx + 128, PAL.ink, { size: 22, align: 'center' });
    topline(ctx, m.k === 'silver'
      ? 'Silver has a resistivity of ' + sci(m.r, 2) + ' Ω·m, the smallest in the table, which is why every other material on the scale stands to the right of it.'
      : m.n + ' has a resistivity of ' + sci(m.r, 2) + ' Ω·m, which is ' + ratio(m.r / RHO[0].r) + ' times that of silver, the best conductor in the table.');
    readout(d.readout, `\\kRes = \\frac{\\rho L}{A} = \\frac{(${sciTex(m.r, m.r >= 1000 ? 1 : 2)}\\ \\Omega\\cdot\\text{m})(${fmt(Lm, 2)}\\ \\text{m})}{1.00 \\times 10^{-6}\\ \\text{m}^2} = ${ohmsTex(R)}\\ \\Omega`,
      'The conductors fill the left-hand end of the scale within a factor of a hundred of one another, the insulators sit twenty and more decades away at the right, and the semiconductors lie between them, which is what makes them useful: a small change in the impurities moves a semiconductor a long way along this scale. Hover over any mark to read the material and the resistivity the book gives it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 20.11: the mercury sample. The book prints one curve whose whole
   point is a threshold, so here the sample's own temperature is the
   reader's to set and the resistance follows it through the critical
   temperature. The straight climb the resistance would have kept had
   mercury stayed an ordinary metal is continued below 4.2 K as a dashed
   line, which is the contrast the text draws in words. Still: a sample
   held at a temperature has no clock.
===================================================================== */
(function () {
  const d = sim('sim-mercury-superconductor', 620);
  const T = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 0, max: 6, step: 0.05, value: 5, unit: 'K', dec: 2, detents: [{ v: 4.2, label: '4.2' }], snap: true, aria: 'temperature of the mercury sample' });
  const TC = 4.2, R0 = 0.11, SLOPE = 0.006;          /* the jump and the nearly linear climb the book's graph shows */
  const gx = { l: 200, r: 1240, t: 150, b: 450 };    /* 0 to 6 K across, 0 to 0.15 Ω up, both fixed */
  const Rof = (t) => (t < TC ? 0 : R0 + SLOPE * (t - TC));
  const Rlin = (t) => R0 + SLOPE * (t - TC);
  function draw() {
    const { ctx } = begin(d.c);
    const R = Rof(T.v), cold = T.v < TC;
    const { X, Y } = axes(ctx, gx, [0, 6], [0, 0.15], { nx: 6, ny: 3, xl: 'temperature T (K)', xc: C('temperature'), yl: 'R (Ω)', yc: C('resistance'), fy: (v) => fmt(v, 2) });
    /* the line an ordinary metal would have kept below the critical temperature */
    line(ctx, X(0), Y(Rlin(0)), X(TC), Y(Rlin(TC)), alpha(PAL.ink, 0.65), 4, [10, 10]);
    text(ctx, 'what an ordinary metal would have done', X(0.2), Y(0.055), PAL.muted, { size: 17, bg: PAL.panel });
    /* the measured curve: nothing at all below 4.2 K, a jump, then a near-straight climb */
    line(ctx, X(0), Y(0), X(TC), Y(0), C('resistance'), 5);
    line(ctx, X(TC), Y(0), X(TC), Y(R0), C('resistance'), 3, [10, 10]);
    curve(ctx, Rof, TC, 6, X, Y, C('resistance'), 5, 40);
    line(ctx, X(TC), gx.t, X(TC), gx.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'T_c = 4.2 K', X(TC) + 14, gx.t + 22, C('temperature'), { size: 20, weight: 600, bg: PAL.panel });
    /* where the sample sits */
    pinned(ctx, gx, X, Y, T.v, R, C('resistance'));
    line(ctx, X(T.v), Y(R), X(T.v), gx.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    /* the sample itself, a short bar of mercury under the graph */
    const bx = 480, by = 560;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(bx, by - 22, 440, 44); ctx.strokeRect(bx, by - 22, 440, 44); ctx.restore();
    text(ctx, 'a sample of mercury at ' + fmt(T.v, 2) + ' K', bx + 220, by, PAL.ink, { size: 20, align: 'center' });
    text(ctx, cold ? 'R = 0: a current set going in it would keep going' : 'R = ' + fmt(R, 3) + ' Ω', bx + 220, by + 52, C('resistance'), { size: 22, weight: 600, align: 'center' });
    topline(ctx, cold
      ? 'At ' + fmt(T.v, 2) + ' K the mercury is below its critical temperature of 4.2 K, and its resistance is not small but zero.'
      : 'At ' + fmt(T.v, 2) + ' K the mercury is above its critical temperature of 4.2 K, and its resistance is ' + fmt(R, 3) + ' Ω.');
    readout(d.readout, `\\kRes = ${fmt(R, 3)}\\ \\Omega \\quad\\text{at}\\quad \\kTemp = ${fmt(T.v, 2)}\\ \\text{K}`,
      cold
        ? 'Below 4.2 K mercury is a superconductor, and a superconductor has no resistance at all rather than a very small one: a current once started in a loop of it carries on with no continual supply of energy, which is the saving 20.1 pointed to.'
        : 'Above the critical temperature the resistance jumps to about 0.11 Ω and then climbs nearly in a straight line, the way an ordinary metal does. Drag the temperature below 4.2 K and it does not climb down that line but falls to nothing.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the resistance of an object against its temperature. The relation
   R = R0(1 + a dT) is a straight line whose sign and steepness belong to
   the material, and the fifteen materials of Table 20.2 make three very
   different lines: the metals climb, manganin lies flat, and the
   semiconductors fall. The bar beside the graph reads the one temperature
   the reader has set against the original resistance. Still: a sample held
   at a temperature has no clock.
===================================================================== */
(function () {
  const d = sim('sim-temperature-resistance', 600);
  const mat = select(d.controls, { label: '\\text{Material}', options: ALPHA.map((m) => ({ value: m.k, label: m.n })), value: 'tungsten', aria: 'the material of the sample' });
  const T = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -200, max: 3000, step: 10, value: 2850, unit: '°C', dec: 0, detents: [{ v: 20, label: '20' }, { v: 2850, label: '2850' }], snap: true, aria: 'temperature of the sample' });
  const R0 = ctl(d.controls, { label: '\\kReso', cls: 'resistance', min: 0.1, max: 1, step: 0.005, value: 0.35, unit: 'Ω', dec: 3, detents: [{ v: 0.35, label: '0.350' }], snap: true, aria: 'resistance of the sample at 20 °C' });
  const gx = { l: 420, r: 1300, t: 150, b: 470 };    /* −200 to 3000 °C across, 0 to 16 Ω up, both fixed from the slider maxima */
  function draw() {
    const { ctx } = begin(d.c);
    const m = alphaOf(mat.value), dT = T.v - 20, raw = R0.v * (1 + m.a * dT), R = Math.max(0, raw);
    const { X, Y } = axes(ctx, gx, [-200, 3000], [0, 16], { nx: 4, ny: 4, xl: 'temperature T (°C)', xc: C('temperature'), yl: 'R (Ω)', yc: C('resistance') });
    /* the line the material makes, cut off where the linear form would go negative */
    const zero = m.a < 0 ? 20 - 1 / m.a : 3000;
    curve(ctx, (t) => Math.max(0, R0.v * (1 + m.a * (t - 20))), -200, Math.min(3000, zero), X, Y, C('resistance'), 5, 80);
    if (zero < 3000) {
      line(ctx, X(zero), gx.b, X(3000), gx.b, alpha(PAL.ink, 0.35), 3, [10, 10]);
      text(ctx, 'beyond ' + fmt(zero, 0) + ' °C the linear form has failed: a resistance cannot be negative', gx.l + 20, gx.t + 30, PAL.muted, { size: 17, bg: PAL.panel });
    }
    dot(ctx, X(20), Y(R0.v), C('resistance'), false, 11);
    text(ctx, 'R_0 at 20 °C', X(20) + 18, Y(R0.v) + (m.a > 0 ? 30 : -30), C('resistance'), { size: 19, weight: 600, bg: PAL.panel });
    pinned(ctx, gx, X, Y, T.v, R, C('resistance'), ohms(R) + ' Ω');
    line(ctx, X(T.v), Y(Math.min(R, 16)), X(T.v), gx.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    /* the two resistances as bars, beside the graph */
    const bx = 170, base = gx.b, hOf = (v) => Math.min(320, (v / 16) * 320);
    ctx.save(); ctx.fillStyle = alpha(C('resistance'), 0.25); ctx.strokeStyle = C('resistance'); ctx.lineWidth = 3;
    ctx.fillRect(bx - 78, base - hOf(R0.v), 62, hOf(R0.v)); ctx.strokeRect(bx - 78, base - hOf(R0.v), 62, hOf(R0.v));
    ctx.fillStyle = alpha(C('resistance'), 0.55);
    ctx.fillRect(bx + 16, base - hOf(R), 62, hOf(R)); ctx.strokeRect(bx + 16, base - hOf(R), 62, hOf(R));
    ctx.restore();
    text(ctx, 'R_0', bx - 47, base + 26, C('resistance'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'R', bx + 47, base + 26, C('resistance'), { size: 20, weight: 600, align: 'center' });
    text(ctx, fmt(R0.v, 3) + ' Ω', bx - 47, base - hOf(R0.v) - 22, C('resistance'), { size: 19, weight: 600, align: 'center' });
    text(ctx, ohms(R) + ' Ω', bx + 47, base - hOf(R) - 22, C('resistance'), { size: 19, weight: 600, align: 'center' });
    line(ctx, bx - 100, base, bx + 100, base, PAL.muted, 2);
    text(ctx, 'ΔT = ' + (dT < 0 ? '−' : '') + fmt(Math.abs(dT), 0) + ' °C', bx, base + 70, C('temperature'), { size: 22, weight: 600, align: 'center' });
    topline(ctx, m.n + ', whose coefficient is ' + (m.a === 0 ? '0' : sci(m.a, 2).replace('-', '−')) + '/°C: taken from 20 °C to ' + fmt(T.v, 0) + ' °C, a ' + fmt(R0.v, 3) + ' Ω sample measures ' + ohms(R) + ' Ω.');
    readout(d.readout, `\\kRes = \\kReso(1 + \\alpha\\kdTemp) = (${fmt(R0.v, 3)}\\ \\Omega)[1 + (${sciTex(m.a, 2)}/^\\circ\\text{C})(${(dT < 0 ? '-' : '') + fmt(Math.abs(dT), 0)}^\\circ\\text{C})] = ${ohmsTex(R)}\\ \\Omega`,
      m.a > 0
        ? 'The coefficient is positive, as it is for every metal in Table 20.2: the atoms vibrate more rapidly and over larger distances as the sample is heated, the electrons make more collisions, and the resistance climbs. On load the sample is the tungsten filament of Example 20.6, which goes from 0.350 Ω cold to 4.8 Ω at its operating temperature of 2850 °C.'
        : m.a === 0
          ? 'Manganin is an alloy of copper, manganese and nickel developed to have a coefficient close to zero, so its line is flat and its resistance is very nearly the same however warm it is. That is what a temperature-independent resistance standard is made of.'
          : 'The coefficient is negative, as it is for the semiconductors of Table 20.2: heating one increases the number of free charges available to carry current, so its resistance falls. Caution is needed well away from 20 °C, since the coefficient may itself vary and the linear form here would eventually take the resistance below zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
