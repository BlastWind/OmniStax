/* Figures for section 19.5 Capacitors and Dielectrics. Boots against the section's text article.
   A charged capacitor sitting on a battery has no time in it, so every figure
   here but the last is a still picture: it registers no cycle, carries no
   transport, and a slider or a choice alone redraws it. The membrane of
   Figure 19.19 is the one process in the section that runs in time, and it
   is the one figure that moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, register, cycle, begin, line, arrow, dot, text, topline, hbracket, vbracket, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- constants and small helpers ---------- */
const EPS0 = 8.85e-12;                       /* F/m, the permittivity of free space */
/* Table 19.1, the book's own values. A strength of null is the em dash the book prints. */
const MATERIALS = [
  { value: 'vacuum', label: 'Vacuum', k: 1.00000, strength: null },
  { value: 'air', label: 'Air', k: 1.00059, strength: 3e6 },
  { value: 'bakelite', label: 'Bakelite', k: 4.9, strength: 24e6 },
  { value: 'quartz', label: 'Fused quartz', k: 3.78, strength: 8e6 },
  { value: 'neoprene', label: 'Neoprene rubber', k: 6.7, strength: 12e6 },
  { value: 'nylon', label: 'Nylon', k: 3.4, strength: 14e6 },
  { value: 'paper', label: 'Paper', k: 3.7, strength: 16e6 },
  { value: 'polystyrene', label: 'Polystyrene', k: 2.56, strength: 24e6 },
  { value: 'pyrex', label: 'Pyrex glass', k: 5.6, strength: 14e6 },
  { value: 'oil', label: 'Silicon oil', k: 2.5, strength: 15e6 },
  { value: 'strontium', label: 'Strontium titanate', k: 233, strength: 8e6 },
  { value: 'teflon', label: 'Teflon', k: 2.1, strength: 60e6 },
  { value: 'water', label: 'Water', k: 80, strength: null },
];
const materialOf = (v) => MATERIALS.find((m) => m.value === v) || MATERIALS[1];
/* a number in scientific form for the readout, where a plain decimal would run long */
function sci(x, d) {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, d) + ' \\times 10^{' + e + '}';
}
/* the same number in plain text, for a headline or a note */
function sciText(x, d) {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
  return fmt(m, d) + ' × 10' + String(e).split('').map((c) => SUP[c]).join('');
}
/* a battery symbol standing at (x, y), h tall, its long plate the positive terminal */
function battery(ctx, x, y, h) {
  const g = 16;
  line(ctx, x - h * 0.30, y - g, x + h * 0.30, y - g, PAL.ink, 5);
  line(ctx, x - h * 0.14, y + g, x + h * 0.14, y + g, PAL.ink, 9);
  text(ctx, '+', x - h * 0.30 - 22, y - g, PAL.ink, { size: 24, weight: 600, align: 'center' });
  text(ctx, '−', x - h * 0.30 - 22, y + g, PAL.ink, { size: 24, weight: 600, align: 'center' });
}
/* a run of wire through the given points, in ink */
function wire(ctx, pts) { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 4); }
/* the + or − marks a charged plate carries, n of them down its face */
function marks(ctx, x, y0, y1, n, sign, color) {
  if (n <= 0) return;
  for (let i = 0; i < n; i++) {
    const y = y0 + ((i + 0.5) * (y1 - y0)) / n;
    text(ctx, sign, x, y, color, { size: 24, weight: 600, align: 'center' });
  }
}
/* one field line from the positive plate to the negative one, with its arrowhead midway */
function fieldLine(ctx, x0, x1, y, color) {
  line(ctx, x0, y, x1, y, color, 3);
  const dir = x1 > x0 ? 1 : -1, m = (x0 + x1) / 2;
  arrow(ctx, m - dir * 14, y, m + dir * 14, y, color, 3);
}

/* =====================================================================
   FIGURE 19.12: a capacitor on a battery, either the parallel plate one or
   the rolled one, holding +Q on the conductor wired to the positive
   terminal and −Q on the other. Still: a charged capacitor has no time in
   it, so the figure answers its choice and its slider and registers no
   cycle. The construction is a state and so is a choice, not a slider
   (rule 26.1).
===================================================================== */
(function () {
  const d = sim('sim-capacitor', 560);
  const kind = choice(d.controls, {
    label: '\\text{the capacitor}',
    options: [{ value: 'plates', label: 'parallel plate' }, { value: 'rolled', label: 'rolled' }],
    value: 'plates', aria: 'which kind of capacitor is drawn',
  });
  const Qs = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: 0, max: 60, step: 0.2, value: 26.6, unit: 'µC', dec: 1, aria: 'the charge the capacitor stores' });
  const BX = 210, BY = 300, PL = 640, PR = 900, PT = 150, PB = 430;
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), Q = Qs.v, n = Math.min(10, Math.round(Q / 5));
    const plus = Q > 0 ? '+' + fmt(Q, 1) : '0.0', minus = Q > 0 ? '−' + fmt(Q, 1) : '0.0';
    topline(ctx, Q > 0 ? 'The battery separates ' + fmt(Q, 1) + ' µC onto one conductor and −' + fmt(Q, 1) + ' µC onto the other, and the capacitor is neutral overall.'
      : 'With no charge separated, both conductors are neutral and the capacitor stores nothing.');
    battery(ctx, BX, BY, 150);
    text(ctx, 'the battery', BX + 14, BY + 58, PAL.muted, { size: 19 });
    if (kind.value === 'plates') {
      wire(ctx, [[BX, BY - 16], [BX, PT - 40], [PL, PT - 40], [PL, PT]]);
      wire(ctx, [[BX, BY + 16], [BX, PB + 40], [PR, PB + 40], [PR, PB]]);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.lineCap = 'butt';
      ctx.beginPath(); ctx.moveTo(PL, PT); ctx.lineTo(PL, PB); ctx.moveTo(PR, PT); ctx.lineTo(PR, PB); ctx.stroke(); ctx.restore();
      marks(ctx, PL + 32, PT, PB, n, '+', qc);
      marks(ctx, PR - 32, PT, PB, n, '−', qc);
      label(ctx, '+Q = ' + plus + ' µC', PL, PT - 8, { side: 'above', color: qc, gap: 16, size: 21 });
      label(ctx, '−Q = ' + minus + ' µC', PR, PB + 8, { side: 'below', color: qc, gap: 16, size: 21 });
      text(ctx, 'two conducting plates, not touching', (PL + PR) / 2, PB + 96, PAL.muted, { size: 19, align: 'center' });
    } else {
      const CX = 770, CY = 290, R0 = 34, K = 15.5, TURNS = 4.2;
      const spiral = (phase) => { const p = []; for (let t = 0; t <= TURNS * Math.PI * 2; t += 0.12) { const r = R0 + K * (t / (Math.PI * 2)) * 2; p.push([CX + r * Math.cos(t + phase), CY + r * Math.sin(t + phase)]); } return p; };
      const outer = spiral(0), inner = spiral(Math.PI);
      const strip = (pts, w, color) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); pts.forEach((p) => ctx.lineTo(p[0], p[1])); ctx.stroke(); ctx.restore(); };
      strip(outer, 13, alpha(PAL.ink, 0.35));                 /* the insulating sheet between them */
      strip(inner, 13, alpha(PAL.ink, 0.35));
      strip(outer, 7, PAL.ink);
      strip(inner, 7, PAL.ink);
      const end = outer[outer.length - 1], start = inner[0];
      wire(ctx, [[BX, BY - 16], [BX, 110], [end[0], 110], [end[0], end[1]]]);
      wire(ctx, [[BX, BY + 16], [BX, 470], [start[0] - 140, 470], [start[0] - 140, start[1]], [start[0], start[1]]]);
      label(ctx, '+Q = ' + plus + ' µC', end[0], end[1] - 10, { side: 'above', color: qc, gap: 18, size: 21 });
      label(ctx, '−Q = ' + minus + ' µC', start[0] - 140, start[1] - 10, { side: 'left', color: qc, gap: 14, size: 21 });
      text(ctx, 'two conducting sheets rolled up with an insulator between them', CX, 512, PAL.muted, { size: 19, align: 'center' });
    }
    readout(d.readout, '\\kQch = ' + fmt(Q, 1) + '\\ \\mu\\text{C}',
      'The capacitor stores a charge Q, which is the charge separated onto each of its two conductors, and not the total charge it carries, which is zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.13: the field lines of a parallel plate capacitor, one drawn
   for each unit of charge, so their number is proportional to Q. The
   voltage follows the field and so follows the charge, which is what
   Q = CV says. Still, for the same reason as Figure 19.12.
===================================================================== */
(function () {
  const d = sim('sim-field-charge', 560);
  const Qs = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: 0, max: 60, step: 0.2, value: 26.6, unit: 'µC', dec: 1, aria: 'the charge the capacitor stores' });
  const Cs = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 2, max: 20, step: 0.05, value: 8.85, unit: 'nF', dec: 2, aria: 'the capacitance of the capacitor' });
  const PL = 470, PR = 930, PT = 140, PB = 430;
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), ec = C('electric-field'), vc = C('voltage');
    const Q = Qs.v, Cv = Cs.v, V = (Q * 1e-6) / (Cv * 1e-9);     /* volts */
    const n = Math.min(16, Math.round(Q / 3.75));
    topline(ctx, 'A charge of ' + fmt(Q, 1) + ' µC on a capacitance of ' + fmt(Cv, 2) + ' nF needs ' + fmt(V / 1000, 2) + ' kV across the plates, because Q = CV.');
    battery(ctx, 200, 290, 150);
    text(ctx, 'the battery', 214, 348, PAL.muted, { size: 19 });
    wire(ctx, [[200, 274], [200, 100], [PL, 100], [PL, PT]]);
    wire(ctx, [[200, 306], [200, 470], [PR, 470], [PR, PB]]);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(PL, PT); ctx.lineTo(PL, PB); ctx.moveTo(PR, PT); ctx.lineTo(PR, PB); ctx.stroke(); ctx.restore();
    for (let i = 0; i < n; i++) {
      const y = PT + ((i + 0.5) * (PB - PT)) / n;
      fieldLine(ctx, PL + 10, PR - 10, y, ec);
      text(ctx, '+', PL - 18, y, qc, { size: 22, weight: 600, align: 'center' });
      text(ctx, '−', PR + 18, y, qc, { size: 22, weight: 600, align: 'center' });
    }
    if (n === 0) text(ctx, 'no charge, no field', (PL + PR) / 2, (PT + PB) / 2, PAL.muted, { size: 21, align: 'center' });
    label(ctx, 'E, one line for each unit of charge', (PL + PR) / 2, PT - 6, { side: 'above', color: ec, gap: 14, size: 21 });
    label(ctx, '+Q = ' + (Q > 0 ? '+' + fmt(Q, 1) : '0.0') + ' µC', PL - 30, PB + 14, { side: 'below', color: qc, gap: 12, size: 21 });
    label(ctx, '−Q = ' + (Q > 0 ? '−' + fmt(Q, 1) : '0.0') + ' µC', PR + 30, PB + 14, { side: 'below', color: qc, gap: 12, size: 21 });
    vbracket(ctx, PR + 120, PT, PB, vc, 'V = ' + fmt(V / 1000, 2) + ' kV', 1);
    readout(d.readout, '\\kQch = \\kCap\\kV = (' + fmt(Cv, 2) + '\\ \\text{nF})(' + fmt(V / 1000, 2) + '\\ \\text{kV}) = ' + fmt(Q, 1) + '\\ \\mu\\text{C}',
      'The number of field lines, and with it the field strength and the voltage across the plates, is proportional to the charge the capacitor holds.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.15: the parallel plate capacitor whose capacitance is set by
   the area of its plates and their separation. It opens on the plates of
   Example 19.8. Still: the reader is choosing a geometry, not watching a
   process.
===================================================================== */
(function () {
  const d = sim('sim-parallel-plate', 600);
  const As = ctl(d.controls, { label: 'A', cls: '', min: 0.1, max: 2, step: 0.05, value: 1, unit: 'm²', dec: 2, aria: 'the area of one plate' });
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.25, max: 5, step: 0.25, value: 1, unit: 'mm', dec: 2, aria: 'the distance between the plates' });
  const Vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0.5, max: 6, step: 0.25, value: 3, unit: 'kV', dec: 2, aria: 'the voltage applied to the capacitor' });
  /* One fixed scale for the scene, from the greatest extents the sliders reach:
     the separation runs 0.25 to 5 mm across 60 to 520 units, and the plate's
     height goes as the square root of the area, 0.1 to 2 m² across 90 to 260. */
  const CXC = 760, CY = 320;
  const gapOf = (mm) => 60 + ((mm - 0.25) / 4.75) * 460;
  const halfOf = (A) => 45 + ((Math.sqrt(A) - Math.sqrt(0.1)) / (Math.sqrt(2) - Math.sqrt(0.1))) * 85;
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), pc = C('position'), vc = C('voltage'), cc = C('capacitance');
    const A = As.v, mm = ds.v, kV = Vs.v;
    const Cf = (EPS0 * A) / (mm * 1e-3), Cn = Cf * 1e9, Q = Cf * kV * 1000 * 1e6;   /* nF and µC */
    const g = gapOf(mm), h = halfOf(A), xl = CXC - g / 2, xr = CXC + g / 2;
    topline(ctx, 'Plates of ' + fmt(A, 2) + ' m² a distance ' + fmt(mm, 2) + ' mm apart make a capacitance of ' + fmt(Cn, 2) + ' nF, which holds ' + fmt(Q, 1) + ' µC at ' + fmt(kV, 2) + ' kV.');
    battery(ctx, 190, CY, 150);
    text(ctx, 'the battery', 204, CY + 58, PAL.muted, { size: 19 });
    wire(ctx, [[190, CY - 16], [190, 130], [xl, 130], [xl, CY - h]]);
    wire(ctx, [[190, CY + 16], [190, 500], [xr, 500], [xr, CY + h]]);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(xl, CY - h); ctx.lineTo(xl, CY + h); ctx.moveTo(xr, CY - h); ctx.lineTo(xr, CY + h); ctx.stroke(); ctx.restore();
    const n = Math.max(1, Math.min(8, Math.round(h / 22)));
    marks(ctx, xl + 22, CY - h, CY + h, n, '+', qc);
    marks(ctx, xr - 22, CY - h, CY + h, n, '−', qc);
    hbracket(ctx, xl, xr, CY + h + 54, pc, 'd = ' + fmt(mm, 2) + ' mm');
    vbracket(ctx, xl - 42, CY - h, CY + h, PAL.ink, 'each plate has A = ' + fmt(A, 2) + ' m²', -1);
    label(ctx, 'V = ' + fmt(kV, 2) + ' kV', CXC, CY - h - 10, { side: 'above', color: vc, gap: 18, size: 21 });
    label(ctx, 'Q = ' + fmt(Q, 1) + ' µC', xr + 20, CY - h + 10, { side: 'right', color: qc, gap: 14, size: 21 });
    label(ctx, 'C = ' + fmt(Cn, 2) + ' nF', CXC, CY + h + 120, { side: 'below', color: cc, gap: 8, size: 22 });
    readout(d.readout, '\\kCap = \\varepsilon_0\\frac{A}{\\kd} = ' + sci(EPS0, 2) + '\\ \\frac{\\text{F}}{\\text{m}} \\cdot \\frac{' + fmt(A, 2) + '\\ \\text{m}^2}{' + sci(mm * 1e-3, 2) + '\\ \\text{m}} = ' + fmt(Cn, 2) + '\\ \\text{nF}',
      'The bigger the plates, the more charge they hold, because the charges can spread out more; the closer the plates, the greater the attraction between the opposite charges on them. The charge stored is Q = CV = ' + fmt(Q, 1) + ' µC.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.16: a dielectric between the plates. Its molecules turn to face
   them and present a layer of opposite charge at each face; the field
   inside falls by the factor κ, the voltage falls with it for the same
   stored charge, and the capacitance rises. Still: the molecules facing
   the plates is the state the material and the charge put them in and not a
   process with a clock, as the chapter's config records. The material is a
   state and so is a control with one option per state, a dropdown because a
   row of thirteen buttons would wrap (rule 26.1).
===================================================================== */
(function () {
  const d = sim('sim-dielectric', 640);
  const mat = select(d.controls, { label: '\\text{the dielectric}', options: MATERIALS.map((m) => ({ value: m.value, label: m.label })), value: 'teflon', aria: 'the material between the plates' });
  const Qs = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: 1, max: 60, step: 0.2, value: 26.6, unit: 'µC', dec: 1, aria: 'the charge the capacitor stores' });
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.25, max: 5, step: 0.25, value: 1, unit: 'mm', dec: 2, aria: 'the distance between the plates' });
  const A = 1.00;                              /* m², the plates of Example 19.8 */
  const CXC = 720, CY = 335, PH = 152;
  const gapOf = (mm) => 300 + ((mm - 0.25) / 4.75) * 420;
  /* a molecule of the dielectric drawn as an oval with its two ends marked,
     the negative end towards the positive plate on the left */
  function molecule(ctx, x, y, w, h, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, '−', x - w / 2 + 9, y, color, { size: 17, weight: 600, align: 'center' });
    text(ctx, '+', x + w / 2 - 9, y, color, { size: 17, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), pc = C('position'), vc = C('voltage'), cc = C('capacitance'), ec = C('electric-field');
    const m = materialOf(mat.value), Q = Qs.v, mm = ds.v, k = m.k;
    const Cair = (EPS0 * A) / (mm * 1e-3), Cf = k * Cair;
    const E0 = (Q * 1e-6) / (EPS0 * A), E = E0 / k, V = E * mm * 1e-3;
    const g = gapOf(mm), xl = CXC - g / 2, xr = CXC + g / 2;
    topline(ctx, m.label + ' has a dielectric constant of ' + fmt(k, k < 10 ? 2 : 0) + ', so the same ' + fmt(Q, 1) + ' µC gives a field of ' + sciText(E, 2) + ' V/m and a capacitance of ' + fmt(Cf * 1e9, 2) + ' nF.');
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(xl, CY - PH); ctx.lineTo(xl, CY + PH); ctx.moveTo(xr, CY - PH); ctx.lineTo(xr, CY + PH); ctx.stroke(); ctx.restore();
    /* the slab of dielectric, in ink, filling the space between the plates */
    if (m.value !== 'vacuum') {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, m.k > 1.01 ? 0.06 : 0.025); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2;
      ctx.fillRect(xl + 8, CY - PH, g - 16, 2 * PH); ctx.strokeRect(xl + 8, CY - PH, g - 16, 2 * PH); ctx.restore();
    }
    /* the plates' own charge, and the surface layer the dielectric presents to each */
    const np = Math.max(1, Math.min(9, Math.round(Q / 6)));
    marks(ctx, xl - 20, CY - PH, CY + PH, np, '+', qc);
    marks(ctx, xr + 20, CY - PH, CY + PH, np, '−', qc);
    const rows = 4, cols = Math.max(3, Math.min(9, Math.round((g - 52) / 78)));
    /* what is left of the field: fewer lines cross than would cross a vacuum, and they run
       in the lanes between the rows of molecules so that neither hides the other; the three
       inner lanes are taken first and the two at the plates' ends after them */
    const nl = Math.max(0, Math.min(5, Math.round(5 / k)));
    const lanes = [2, 1, 3, 0, 4].map((r) => CY - PH + (r * 2 * PH) / rows + (r === 0 ? 14 : r === rows ? -14 : 0));
    for (let i = 0; i < nl; i++) fieldLine(ctx, xl + 16, xr - 16, lanes[i], ec);
    /* a vacuum has nothing in it to polarize and air too little to draw, so the rows of
       molecules belong to the solids and liquids of the table */
    const solid = k > 1.01;
    if (solid) for (let r = 0; r < rows; r++) {
      const y = CY - PH + ((r + 0.5) * 2 * PH) / rows;
      for (let c = 0; c < cols; c++) molecule(ctx, xl + 30 + ((c + 0.5) * (g - 60)) / cols, y, 58, 28, PAL.muted);
      text(ctx, '−', xl + 20, y, qc, { size: 19, weight: 600, align: 'center' });
      text(ctx, '+', xr - 20, y, qc, { size: 19, weight: 600, align: 'center' });
    }
    hbracket(ctx, xl, xr, CY + PH + 60, pc, 'd = ' + fmt(mm, 2) + ' mm');
    label(ctx, solid ? 'the molecules turn to face the plates' : m.value === 'vacuum' ? 'nothing between the plates to polarize' : 'air, too thin to polarize by more than a part in two thousand',
      CXC, CY - PH - 6, { side: 'above', color: PAL.muted, gap: 14, size: 20 });
    label(ctx, 'V = ' + (V >= 1000 ? fmt(V / 1000, 2) + ' kV' : fmt(V, 0) + ' V'), xr + 60, CY - 70, { side: 'right', color: vc, gap: 10, size: 21 });
    label(ctx, 'C = ' + fmt(Cf * 1e9, 2) + ' nF', xr + 60, CY + 10, { side: 'right', color: cc, gap: 10, size: 21 });
    label(ctx, 'E = E₀/κ', xl - 60, CY + 10, { side: 'left', color: ec, gap: 10, size: 21 });
    text(ctx, 'each plate has an area A = ' + fmt(A, 2) + ' m²', CXC, 600, PAL.muted, { size: 19, align: 'center' });
    const limit = m.strength === null ? 'The book gives ' + m.label.toLowerCase() + ' no dielectric strength, so no voltage limit is quoted for it.'
      : 'Its dielectric strength of ' + (m.strength / 1e6) + ' × 10⁶ V/m allows at most ' + fmt((m.strength * mm * 1e-3) / 1000, 1) + ' kV across a separation of ' + fmt(mm, 2) + ' mm.';
    readout(d.readout, '\\kEf = \\frac{\\kEfo}{\\kappa} = \\frac{' + sci(E0, 2) + '\\ \\text{V/m}}{' + fmt(k, k < 10 ? 2 : 0) + '} = ' + sci(E, 2) + '\\ \\text{V/m}, \\quad \\kCap = \\kappa\\varepsilon_0\\frac{A}{\\kd} = ' + fmt(Cf * 1e9, 2) + '\\ \\text{nF}', limit);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.17: the submicroscopic origin of polarization, drawn as the
   book draws it, on its own and between two external charges. It is a
   faithful copy: the book's own picture is an artist's conception whose
   shift is drawn exaggerated and carries no number, so there is nothing
   honest for a slider to set, and polarization is already under the
   reader's hand in Figure 19.16. No controls and no motion.
===================================================================== */
(function () {
  const d = sim('sim-polarized-atom', 520);
  /* the nucleus and the electrons on an orbit that may be shifted and stretched */
  function atom(ctx, cx, cy, rx, ry, shift) {
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]);
    ctx.beginPath(); ctx.ellipse(cx + shift, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2 + Math.PI / 4;
      dot(ctx, cx + shift + rx * Math.cos(a), cy + ry * Math.sin(a), F.el('e-'), true, 11);
    }
    dot(ctx, cx - shift * 0.35, cy, F.el('p+'), true, 17);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge');
    topline(ctx, 'An atom on its own is symmetric; an atom between two external charges has its electrons drawn one way and its nucleus the other, and so is polarized.');
    const LX = 350, RX = 950, CY = 300, RX0 = 118, RY0 = 96;
    atom(ctx, LX, CY, RX0, RY0, 0);
    text(ctx, 'the nucleus', LX, CY - 34, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'the electrons', LX, CY + RY0 + 44, PAL.muted, { size: 19, align: 'center' });
    text(ctx, '(a) unpolarized', LX, 470, PAL.ink, { size: 22, weight: 600, align: 'center' });
    atom(ctx, RX, CY, RX0 + 26, RY0, 34);
    text(ctx, '(b) polarized by the external charges', RX, 470, PAL.ink, { size: 22, weight: 600, align: 'center' });
    dot(ctx, RX - 270, CY, PAL.ink, false, 16);
    dot(ctx, RX + 270, CY, PAL.ink, false, 16);
    text(ctx, '−', RX - 270, CY, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, '+', RX + 270, CY, PAL.ink, { size: 24, weight: 600, align: 'center' });
    label(ctx, 'an external negative charge', RX - 270, CY - 18, { side: 'above', color: qc, gap: 14, size: 20 });
    label(ctx, 'an external positive charge', RX + 270, CY - 18, { side: 'above', color: qc, gap: 14, size: 20 });
    line(ctx, RX - 240, CY, RX - 160, CY, alpha(PAL.ink, 0.3), 2, [6, 8]);
    line(ctx, RX + 160, CY, RX + 240, CY, alpha(PAL.ink, 0.3), 2, [6, 8]);
    d.readout.textContent = 'The atom stays neutral, but its charge is now separated, so it can be the source of a Coulomb force. The shift is drawn far larger than it is.';
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.18: the water molecule, drawn as the book draws it. A faithful
   copy: standardisation alone, no controls and no motion. The atoms are
   drawn in the element palette, since a molecule with an identity is always
   drawn in it (rule 7).
===================================================================== */
(function () {
  const d = sim('sim-water-molecule', 520);
  /* an atom in its element colour with an ink outline, so the light hydrogen fill reads on a light page */
  function atom(ctx, x, y, color, r) {
    ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const OC = F.el('O'), HC = F.el('H');
    topline(ctx, 'The two bonds of a water molecule are 104.5° apart, and its electrons gather about the oxygen nucleus, so the molecule is polar although it is neutral.');
    const LX = 400, RX = 1020, CY = 300, L = 150, half = 104.5 / 2;
    const rad = (deg) => (deg * Math.PI) / 180;
    const arms = (cx) => [-half, half].map((a) => ({ x: cx + L * Math.sin(rad(a)), y: CY - L * Math.cos(rad(a)) }));
    /* (a) the shape, with the angle between the bonds */
    const a1 = arms(LX);
    a1.forEach((p) => line(ctx, LX, CY, p.x, p.y, PAL.ink, 6));
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(LX, CY, 62, rad(-90 - half), rad(-90 + half)); ctx.stroke(); ctx.restore();
    text(ctx, '104.5°', LX, CY - 88, PAL.ink, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    a1.forEach((p) => { atom(ctx, p.x, p.y, HC, 26); text(ctx, 'H', p.x, p.y, PAL.ink, { size: 21, weight: 600, align: 'center' }); });
    atom(ctx, LX, CY, OC, 38); text(ctx, 'O', LX, CY, PAL.panel, { size: 26, weight: 600, align: 'center' });
    text(ctx, '(a) the shape of the molecule', LX, 492, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* (b) where the electrons gather, and the slight charges that leaves */
    const a2 = arms(RX);
    ctx.save(); ctx.fillStyle = alpha(OC, 0.22);
    ctx.beginPath(); ctx.ellipse(RX, CY + 16, 138, 118, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    a2.forEach((p) => line(ctx, RX, CY, p.x, p.y, PAL.ink, 6));
    a2.forEach((p, i) => {
      atom(ctx, p.x, p.y, HC, 26); text(ctx, 'H', p.x, p.y, PAL.ink, { size: 21, weight: 600, align: 'center' });
      label(ctx, 'slightly positive', p.x, p.y - 26, { side: i === 0 ? 'left' : 'right', color: C('charge'), gap: 16, size: 19 });
    });
    atom(ctx, RX, CY, OC, 38); text(ctx, 'O', RX, CY, PAL.panel, { size: 26, weight: 600, align: 'center' });
    label(ctx, 'slightly negative, where the electrons gather', RX, CY + 128, { side: 'below', color: C('charge'), gap: 8, size: 19 });
    text(ctx, '(b) where the electrons are', RX, 492, PAL.ink, { size: 22, weight: 600, align: 'center' });
    d.readout.textContent = 'Because its charge is already separated, a water molecule lines up with an external field readily, which is why water has a dielectric constant of 80.';
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.19: the cell membrane. Diffusion carries potassium out of the
   cell and chloride into it until the layers of charge left behind hold the
   rest back, which is a process in time and so the one figure of this
   section that moves: one loop of five seconds with a hold at its end. The
   thickness of the membrane stays the reader's to set, because the field
   across it is the voltage over that thickness.
===================================================================== */
(function () {
  const d = sim('sim-membrane', 700);
  const T = 5.0, V0 = -70e-3;                     /* the book's resting potential, in volts */
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 7, max: 10, step: 0.5, value: 8, unit: 'nm', dec: 1, aria: 'the thickness of the cell membrane' });
  const cy = cycle(() => T, 1.2);
  const MX = 700, MT = 200, MB = 500;
  /* one of n slots down the height of the scene */
  const ys = (n, i) => MT + 44 + (i * (MB - MT - 88)) / Math.max(1, n - 1);
  /* the ions, each with where it starts, where it ends and the moment it crosses.
     Potassium and chloride are given tidy rows so that none is hidden by another. */
  const IONS = [];
  for (let i = 0; i < 6; i++) IONS.push({ sym: 'K', sign: '+', x0: 250 + (i % 2) * 120, y0: ys(3, Math.floor(i / 2)), x1: MX + 150 + (i % 2) * 64, y1: ys(6, i), t: 0.10 + 0.13 * i });
  for (let i = 0; i < 5; i++) IONS.push({ sym: 'Cl', sign: '−', x0: 1210, y0: ys(5, i), x1: MX - 150 - (i % 2) * 64, y1: ys(5, i), t: 0.16 + 0.14 * i });
  for (let i = 0; i < 6; i++) IONS.push({ sym: 'Na', sign: '+', x0: 960 + (i % 2) * 110, y0: ys(3, Math.floor(i / 2)) + 26, x1: 960 + (i % 2) * 110, y1: ys(3, Math.floor(i / 2)) + 26, t: 9 });
  function ion(ctx, x, y, sym) {
    ctx.save(); ctx.fillStyle = F.el(sym); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  /* seventeen ions of three kinds: each kind is named once, in the legend, and not on every ion (rule 26.7) */
  function legend(ctx, y) {
    [['K', 'potassium, K⁺', 400], ['Cl', 'chloride, Cl⁻', 640], ['Na', 'sodium, Na⁺', 870]].forEach(([sym, name, lx]) => {
      ion(ctx, lx, y, sym);
      text(ctx, name, lx + 26, y, PAL.ink, { size: 19 });
    });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), vc = C('voltage'), ec = C('electric-field'), pc = C('position');
    const nm = ds.v, u = Math.min(1, cy.now() / T);
    const V = V0 * u, E = V / (nm * 1e-9);
    topline(ctx, u < 1 ? 'Potassium leaves the cell and chloride enters it, and the charge the crossings leave behind so far holds ' + fmt(V * 1000, 1) + ' mV across the membrane.'
      : 'The layers of charge left behind now hold the rest back, and the membrane carries its resting −70 mV across ' + fmt(nm, 1) + ' nm of thickness.');
    /* inside, the membrane and outside */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fillRect(90, MT, MX - 126, MB - MT); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.14); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.fillRect(MX - 36, MT, 72, MB - MT); ctx.strokeRect(MX - 36, MT, 72, MB - MT); ctx.restore();
    text(ctx, 'inside the cell', 330, MT - 28, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'outside the cell', 1080, MT - 28, PAL.muted, { size: 20, align: 'center' });
    /* the layers of charge the crossings leave behind, on the two faces */
    const layers = Math.round(6 * u);
    for (let i = 0; i < layers; i++) {
      const y = ys(6, i);
      text(ctx, '−', MX - 56, y, qc, { size: 22, weight: 600, align: 'center' });
      text(ctx, '+', MX + 56, y, qc, { size: 22, weight: 600, align: 'center' });
    }
    /* the ions, each moving across at its own moment */
    IONS.forEach((o) => {
      const s = o.t > 1 ? 0 : Math.max(0, Math.min(1, (u - o.t) / 0.34));
      ion(ctx, o.x0 + (o.x1 - o.x0) * s, o.y0 + (o.y1 - o.y0) * s, o.sym);
    });
    /* the two directions diffusion carries the ions, as the book draws them */
    arrow(ctx, MX - 130, MT - 76, MX + 130, MT - 76, alpha(PAL.ink, 0.45), 4);
    text(ctx, 'potassium out', MX, MT - 102, PAL.muted, { size: 19, align: 'center' });
    arrow(ctx, MX + 130, MB + 44, MX - 130, MB + 44, alpha(PAL.ink, 0.45), 4);
    text(ctx, 'chloride in', MX, MB + 70, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'sodium is held outside: the membrane is impermeable to it', 1090, MB + 70, PAL.muted, { size: 19, align: 'center' });
    hbracket(ctx, MX - 36, MX + 36, MB + 124, pc, 'the membrane, d = ' + fmt(nm, 1) + ' nm');
    legend(ctx, MB + 186);
    text(ctx, 'E = ' + fmt(E / 1e6, 2) + ' × 10⁶ V/m across the membrane', 300, MB + 132, ec, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'V = ' + fmt(V * 1000, 1) + ' mV across the membrane', 1090, MB + 132, vc, { size: 21, weight: 600, align: 'center' });
    readout(d.readout, '\\kEf = \\frac{\\kV}{\\kd} = \\frac{' + fmt(V * 1000, 1) + ' \\times 10^{-3}\\ \\text{V}}{' + fmt(nm, 1) + ' \\times 10^{-9}\\ \\text{m}} = ' + fmt(E / 1e6, 2) + ' \\times 10^{6}\\ \\text{V/m}',
      'A field of this size would break down air, and the membrane holds it across a few nanometers.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

};
