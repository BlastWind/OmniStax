/* Figures for section 11.2 Density. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a control's input
   alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, hover, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, pinned, fixed, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- Table 11.1, as the book prints it ----------
   `s` is the density as the table writes it, in 10³ kg/m³ (which is g/cm³ and
   g/mL), and `v` the same number; an entry the table gives as a range carries
   `lo` and `hi` instead. The gases are written with their factor of 10⁻³. */
const SUBST = [
  { n: 'Aluminum', p: 'solid', s: '2.7', v: 2.7 },
  { n: 'Brass', p: 'solid', s: '8.44', v: 8.44 },
  { n: 'Copper (average)', p: 'solid', s: '8.8', v: 8.8 },
  { n: 'Gold', p: 'solid', s: '19.32', v: 19.32 },
  { n: 'Iron or steel', p: 'solid', s: '7.8', v: 7.8 },
  { n: 'Lead', p: 'solid', s: '11.3', v: 11.3 },
  { n: 'Polystyrene', p: 'solid', s: '0.10', v: 0.10 },
  { n: 'Tungsten', p: 'solid', s: '19.30', v: 19.30 },
  { n: 'Uranium', p: 'solid', s: '18.70', v: 18.70 },
  { n: 'Concrete', p: 'solid', s: '2.30–3.0', lo: 2.30, hi: 3.0 },
  { n: 'Cork', p: 'solid', s: '0.24', v: 0.24 },
  { n: 'Glass, common (average)', p: 'solid', s: '2.6', v: 2.6 },
  { n: 'Granite', p: 'solid', s: '2.7', v: 2.7 },
  { n: 'Earth’s crust', p: 'solid', s: '3.3', v: 3.3 },
  { n: 'Wood', p: 'solid', s: '0.3–0.9', lo: 0.3, hi: 0.9 },
  { n: 'Ice (0°C)', p: 'solid', s: '0.917', v: 0.917 },
  { n: 'Bone', p: 'solid', s: '1.7–2.0', lo: 1.7, hi: 2.0 },
  { n: 'Silver', p: 'solid', s: '10.49', v: 10.49 },
  { n: 'Water (4°C)', p: 'liquid', s: '1.000', v: 1.000 },
  { n: 'Blood', p: 'liquid', s: '1.05', v: 1.05 },
  { n: 'Sea water', p: 'liquid', s: '1.025', v: 1.025 },
  { n: 'Mercury', p: 'liquid', s: '13.6', v: 13.6 },
  { n: 'Ethyl alcohol', p: 'liquid', s: '0.79', v: 0.79 },
  { n: 'Gasoline', p: 'liquid', s: '0.68', v: 0.68 },
  { n: 'Glycerin', p: 'liquid', s: '1.26', v: 1.26 },
  { n: 'Olive oil', p: 'liquid', s: '0.92', v: 0.92 },
  { n: 'Air', p: 'gas', s: '1.29 × 10⁻³', v: 1.29e-3 },
  { n: 'Carbon dioxide', p: 'gas', s: '1.98 × 10⁻³', v: 1.98e-3 },
  { n: 'Carbon monoxide', p: 'gas', s: '1.25 × 10⁻³', v: 1.25e-3 },
  { n: 'Hydrogen', p: 'gas', s: '0.090 × 10⁻³', v: 0.090e-3 },
  { n: 'Helium', p: 'gas', s: '0.18 × 10⁻³', v: 0.18e-3 },
  { n: 'Methane', p: 'gas', s: '0.72 × 10⁻³', v: 0.72e-3 },
  { n: 'Nitrogen', p: 'gas', s: '1.25 × 10⁻³', v: 1.25e-3 },
  { n: 'Nitrous oxide', p: 'gas', s: '1.98 × 10⁻³', v: 1.98e-3 },
  { n: 'Oxygen', p: 'gas', s: '1.43 × 10⁻³', v: 1.43e-3 },
  { n: 'Steam (100°C)', p: 'gas', s: '0.60 × 10⁻³', v: 0.60e-3 },
];
const PHASES = ['solid', 'liquid', 'gas'];
/* a substance's name in running text: the table's parentheticals dropped */
const PRETTY = { 'Water (4°C)': 'water', 'Copper (average)': 'copper', 'Glass, common (average)': 'common glass', 'Earth’s crust': 'the Earth’s crust', 'Ice (0°C)': 'ice', 'Steam (100°C)': 'steam' };
const lower = (n) => PRETTY[n] ?? n.charAt(0).toLowerCase() + n.slice(1);
const single = (r) => r.v !== undefined;                                                             /* one value, not a range */
/* a dropdown row is the substance's name as the table prints it; its density is drawn on the figure in the density hue */
const optionOf = (r) => ({ value: r.n, label: r.n });
const rowOf = (name) => SUBST.find((r) => r.n === name);
/* the density in LaTeX, in kg/m³, written with the table's own digits */
const rhoTex = (r) => (r.p === 'gas' ? r.s.replace(' × 10⁻³', '') : r.s + ' \\times 10^{3}') + '\\ \\text{kg/m}^3';
const rhoText = (r) => (r.p === 'gas' ? r.s.replace(' × 10⁻³', '') : r.s + ' × 10³') + ' kg/m³';   /* a range reads 2.30–3.0 × 10³ kg/m³ */

/* ---------- numbers ---------- */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a value to n significant figures as a mantissa and a power of ten */
function sci(v, n) {
  if (v === 0) return { ms: (0).toFixed(n - 1), e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), ms = (v / Math.pow(10, e)).toPrecision(n);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (v / Math.pow(10, e)).toPrecision(n); }
  return { ms, e };
}
const sciTex = (v, n) => { const { ms, e } = sci(v, n); return e === 0 ? ms : `${ms} \\times 10^{${e}}`; };
const sciText = (v, n) => { const { ms, e } = sci(v, n); return e === 0 ? ms : `${ms} × 10${sup(e)}`; };
/* a plain number to n significant figures, written out in full where it is between 0.01 and 1000 */
const sig = (v, n) => { const a = Math.abs(v); return a >= 0.01 && a < 1000 ? String(+v.toPrecision(n)).replace(/^(-?\d+)$/, (m) => (n > m.replace('-', '').length ? (+m).toFixed(n - m.replace('-', '').length) : m)) : sciText(v, n); };
/* the same, but keeping trailing zeros: 10.0, 0.370, 2.15 */
const sigz = (v, n) => { const a = Math.abs(v); if (!(a >= 0.01 && a < 1000)) return sciText(v, n); const d = Math.max(0, n - 1 - Math.floor(Math.log10(a))); return v.toFixed(d); };

/* =====================================================================
   FIGURE 11.3: the same mass of two substances on a balanced plank. Each
   pile is a cube of side ∛(m/ρ) drawn from one locked viewpoint, so its
   size is honest in three dimensions and the biggest cube the controls
   allow (2000 kg of polystyrene, 2.71 m on a side) still fits. Still: a
   balanced plank has no time in it, so the figure answers its controls and
   registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-ton', 680);
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 100, max: 2000, step: 10, value: 1000, unit: 'kg', dec: 0, aria: 'the mass of each pile', detents: [{ v: 1000, label: 'a ton' }] });
  const OPTS = SUBST.filter((r) => r.p !== 'gas' && single(r)).map(optionOf);
  const left = select(d.controls, { label: '\\text{left pile}', options: OPTS, value: 'Polystyrene', aria: 'the substance of the left pile' });
  const right = select(d.controls, { label: '\\text{right pile}', options: OPTS, value: 'Granite', aria: 'the substance of the right pile' });
  /* The scene scale is fixed from the slider maximum: 2000 kg of polystyrene is 20 m³, a cube 2.71 m on a
     side, and at 110 canvas units to the metre that cube is 298 units tall and clears the headline. */
  const PX = 110, PY = 470, CX = 700, PLANK = 940, DEPTH = 300, THICK = 14;
  /* the viewpoint: straight in front of the plank, so that it reads level (any yaw with a pitch would slope it on the canvas), and a little above, so the top of each cube shows as well as its front */
  const V = view({ yaw: 0, pitch: 0.32, dist: 3400, cx: CX, cy: PY });
  const kFront = V.shade([0, 0, 1]), kTop = V.shade([0, 1, 0]), kLeft = V.shade([-1, 0, 0]);
  const quad = (pts) => pts.map((p) => V.P(p));
  /* a cube of side S whose front-bottom-centre sits at x0 on the plank, the plank's depth behind it centred */
  function cube(x0, S) {
    const z0 = -DEPTH / 2 + S / 2, z1 = z0 - S, h = S / 2;
    face(ctx, quad([[x0 - h, 0, z0], [x0 - h, 0, z1], [x0 - h, S, z1], [x0 - h, S, z0]]), kLeft, 3);
    face(ctx, quad([[x0 - h, S, z0], [x0 + h, S, z0], [x0 + h, S, z1], [x0 - h, S, z1]]), kTop, 3);
    face(ctx, quad([[x0 - h, 0, z0], [x0 + h, 0, z0], [x0 + h, S, z0], [x0 - h, S, z0]]), kFront, 3);
  }
  let ctx;
  function draw() {
    ctx = begin(d.c).ctx;
    const dc = C('density');
    const m = ms.v, L = rowOf(left.value), R = rowOf(right.value);
    const VL = m / (L.v * 1e3), VR = m / (R.v * 1e3), sL = Math.cbrt(VL), sR = Math.cbrt(VR);
    /* the ground, the support and the plank, a slab seen from the same viewpoint as the cubes */
    const w = PLANK / 2;
    line(ctx, 150, 590, 1250, 590, PAL.muted, 4);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(CX, PY + THICK); ctx.lineTo(CX - 70, 590); ctx.lineTo(CX + 70, 590); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    face(ctx, quad([[-w, 0, 0], [-w, 0, -DEPTH], [-w, -THICK, -DEPTH], [-w, -THICK, 0]]), kLeft, 2.5);
    face(ctx, quad([[-w, 0, 0], [w, 0, 0], [w, 0, -DEPTH], [-w, 0, -DEPTH]]), kTop, 2.5);
    face(ctx, quad([[-w, -THICK, 0], [w, -THICK, 0], [w, 0, 0], [-w, 0, 0]]), kFront, 2.5);
    /* the two piles */
    cube(-270, sL * PX); cube(270, sR * PX);
    /* one metre, for scale */
    hbracket(ctx, 1170, 1170 + PX, 130, PAL.ink, '1 m');
    /* each pile named once, beneath its place on the plank, with its volume and its density */
    for (const [x, r, Vv, s] of [[CX - 270, L, VL, sL], [CX + 270, R, VR, sR]]) {
      text(ctx, lower(r.n) + ': ' + fmt(m, 0) + ' kg fills ' + sigz(Vv, 3) + ' m³, a cube ' + fmt(s, 2) + ' m on a side', x, 618, PAL.ink, { size: 19, align: 'center' });
      text(ctx, 'ρ = ' + rhoText(r), x, 652, dc, { size: 20, weight: 600, align: 'center' });
    }
    const same = L.n === R.n;
    topline(ctx, same ? fmt(m, 0) + ' kg of ' + lower(L.n) + ' on each side makes two cubes ' + fmt(sL, 2) + ' m on a side, and the plank balances.'
      : fmt(m, 0) + ' kg of ' + lower(L.n) + ' makes a cube ' + fmt(sL, 2) + ' m on a side and ' + fmt(m, 0) + ' kg of ' + lower(R.n) + ' a cube ' + fmt(sR, 2) + ' m on a side, and the plank balances.');
    const ratio = Math.max(VL, VR) / Math.min(VL, VR), big = VL >= VR ? L : R;
    readout(d.readout, `V = \\frac{m}{\\krho} = \\frac{${fmt(m, 0)}\\ \\text{kg}}{${rhoTex(L)}} = ${sigz(VL, 3)}\\ \\text{m}^3\\text{ of ${lower(L.n)}},\\quad \\frac{${fmt(m, 0)}\\ \\text{kg}}{${rhoTex(R)}} = ${sigz(VR, 3)}\\ \\text{m}^3\\text{ of ${lower(R.n)}}`,
      same ? 'The two piles are the same substance and the same mass, so they are the same size; the plank balances whatever the two substances are, because a balance compares masses and not volumes.'
        : 'The two piles have the same mass, so the plank balances, and their volumes are in the inverse ratio of their densities: the ' + lower(big.n) + ' pile is ' + sig(ratio, 2) + ' times the volume of the other, because the same mass has to be spread through ' + sig(ratio, 2) + ' times the space.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: Table 11.1 on one axis, and a measured density read against it.
   Every substance of the table is a row of a dot chart in the order of its
   density; the three ranged entries are bars; the mass and volume of a
   sample give a density drawn as a line across the chart, and the readout
   names what in the table matches it. Still: it answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-identify', 1000);
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 1000, step: 0.1, value: 240, unit: 'g', dec: 1, aria: 'the mass of the sample' });
  const vs = ctl(d.controls, { label: 'V', cls: '', min: 1, max: 1000, step: 0.5, value: 89, unit: 'cm³', dec: 1, aria: 'the volume of the sample' });
  const axis = choice(d.controls, { label: '\\text{axis}', options: [{ value: 'log', label: 'logarithmic' }, { value: 'lin', label: 'linear' }], value: 'log', aria: 'the scale of the density axis' });
  /* rows in the order of their densities, densest first; a range sorts by its upper end */
  const ROWS = SUBST.slice().sort((a, b) => (b.hi ?? b.v) - (a.hi ?? a.v));
  /* The axis is fixed and never rescales. The logarithmic one runs from 10⁻² to 10⁵ kg/m³ in decades,
     which holds every entry from hydrogen (0.090 kg/m³) to gold (19 320 kg/m³); the linear one runs from
     0 to 20 × 10³ kg/m³, the table's largest value rounded up. A density past either end goes through pinned(). */
  const BOX = { l: 330, t: 130, r: 1340, b: 900 };
  const LOGR = [0, 7], LINR = [0, 20];                              /* the log axis counts decades above 10⁻² kg/m³ */
  const TOL = 0.025;
  let hits = [];
  hover(d.stage, () => hits);
  const kgm3 = (r) => r.v * 1e3;
  function draw() {
    const { ctx } = begin(d.c);
    const dc = C('density'), phaseC = (p) => F.cat(PHASES.indexOf(p));
    const m = ms.v, Vv = vs.v, rho = m / Vv;                          /* g/cm³, which is 10³ kg/m³ */
    const log = axis.value === 'log';
    const xr = log ? LOGR : LINR;
    const fx = log ? (v) => { const e = Math.round(v) - 2; return e === 0 ? '1' : e === 1 ? '10' : '10' + sup(e); } : (v) => (v === 0 ? '0' : fmt(v, 0) + ' × 10³');
    const { X } = axes(ctx, BOX, xr, [0, 1], { nx: log ? 7 : 4, ny: 0, fx, fy: () => '', xl: 'density ρ (kg/m³)', xc: dc });
    const xOf = (g) => X(log ? Math.log10(g * 1e3) + 2 : g);       /* g in g/cm³ */
    const rowH = (BOX.b - BOX.t) / ROWS.length;
    /* which rows the measured density matches */
    const match = (r) => (single(r) ? Math.abs(r.v - rho) <= TOL * rho : r.lo <= rho * (1 + TOL) && r.hi >= rho * (1 - TOL));
    hits = [];
    ROWS.forEach((r, i) => {
      const y = BOX.t + rowH * (i + 0.5), c = phaseC(r.p), hit = match(r);
      text(ctx, r.n, BOX.l - 14, y, hit ? PAL.ink : PAL.muted, { size: 16, weight: hit ? 600 : 400, align: 'right' });
      if (single(r)) {
        dot(ctx, xOf(r.v), y, c, true, 7);
        if (hit) dot(ctx, xOf(r.v), y, dc, false, 12);
        hits.push({ x: xOf(r.v), y, r: 12, name: r.n + ', ' + rhoText(r) });
      } else {
        const x1 = xOf(r.lo), x2 = xOf(r.hi);
        line(ctx, x1, y, x2, y, alpha(c, 0.55), 10);
        dot(ctx, x1, y, c, true, 5); dot(ctx, x2, y, c, true, 5);
        if (hit) { ctx.save(); ctx.strokeStyle = dc; ctx.lineWidth = 3; ctx.strokeRect(x1 - 8, y - 10, x2 - x1 + 16, 20); ctx.restore(); }
        hits.push({ x: (x1 + x2) / 2, y, r: Math.max(12, (x2 - x1) / 2), name: r.n + ', ' + r.s + ' × 10³ kg/m³' });
      }
    });
    /* the legend: one mark per phase */
    PHASES.forEach((p, i) => { const x = BOX.l + 10 + i * 150; dot(ctx, x, BOX.b + 58, phaseC(p), true, 7); text(ctx, p === 'gas' ? 'gases' : p + 's', x + 16, BOX.b + 58, PAL.ink, { size: 18 }); });
    /* the measured density, a line across the chart, pinned at the edge when it is off the axis */
    const label = 'ρ = ' + sigz(rho, 3) + ' g/cm³ = ' + sciText(rho * 1e3, 3) + ' kg/m³';
    const p = pinned(ctx, BOX, X, () => BOX.t, log ? Math.log10(rho * 1e3) + 2 : rho, 0, dc);
    if (!p.out) line(ctx, p.x, BOX.t + 9, p.x, BOX.b, dc, 3, [10, 10]);
    text(ctx, label, Math.min(Math.max(p.x, 560), 1160), BOX.t - 28, dc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    /* the substances the sample could be */
    const found = ROWS.filter(match);
    const names = found.map((r) => lower(r.n) + (single(r) ? '' : ' (within its range)'));
    const list = names.length <= 1 ? names.join('') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
    const below = ROWS.filter((r) => (r.hi ?? r.v) < rho && !match(r)).sort((a, b) => (b.hi ?? b.v) - (a.hi ?? a.v))[0];
    const above = ROWS.filter((r) => (r.lo ?? r.v) > rho && !match(r)).sort((a, b) => (a.lo ?? a.v) - (b.lo ?? b.v))[0];
    const where = below && above ? 'It lies between ' + lower(below.n) + ' (' + rhoText(below) + ') and ' + lower(above.n) + ' (' + rhoText(above) + ').'
      : below ? 'It is greater than any density in the table; the nearest is ' + lower(below.n) + ' (' + rhoText(below) + ').'
      : above ? 'It is smaller than any density in the table; the nearest is ' + lower(above.n) + ' (' + rhoText(above) + ').' : '';
    topline(ctx, 'A mass of ' + fmt(m, 1) + ' g in a volume of ' + fmt(Vv, 1) + ' cm³ has a density of ' + sigz(rho, 3) + ' g/cm³, '
      + (found.length ? 'which is the density of ' + list + '.' : 'which matches no substance in the table.'));
    readout(d.readout, `\\krho = \\frac{m}{V} = \\frac{${fmt(m, 1)}\\ \\text{g}}{${fmt(Vv, 1)}\\ \\text{cm}^3} = ${sigz(rho, 3)}\\ \\text{g/cm}^3 = ${sciTex(rho * 1e3, 3)}\\ \\text{kg/m}^3`,
      found.length > 1 ? 'That density belongs to ' + list + ' alike, so a mass and a volume alone cannot say which of them the sample is, and something more than its average density is needed to tell.'
        : found.length === 1 ? 'That density belongs to ' + list + ' and to no other substance in the table, which is how a density can identify what an object is made of. ' + where
        : 'No substance in the table has that density. ' + where);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the reservoir of Example 11.1. A plan view drawn to its area and a
   section through the dam drawn to its average depth, with the liquid
   chosen from Table 11.1. Still: a reservoir held behind a dam has no time
   in it.
===================================================================== */
(function () {
  const d = sim('sim-reservoir', 660);
  const As = ctl(d.controls, { label: 'A', cls: '', min: 10, max: 200, step: 0.5, value: 50, unit: 'km²', dec: 1, aria: 'the surface area of the reservoir' });
  const hs = ctl(d.controls, { label: 'h', cls: '', min: 5, max: 100, step: 0.5, value: 40, unit: 'm', dec: 1, aria: 'the average depth of the reservoir' });
  const liq = select(d.controls, { label: '\\text{the liquid}', options: SUBST.filter((r) => r.p === 'liquid').map(optionOf), value: 'Water (4°C)', aria: 'the liquid the reservoir holds' });
  /* Both scales are fixed from the slider maxima and never follow a slider: the plan holds a square
     14.1 km across (200 km²) in 360 units, and the section holds 100 m of depth in 330 units. */
  const KM = 360 / Math.sqrt(200), MPX = 330 / 100;
  const PCX = 270, PCY = 340, SX1 = 640, SX2 = 1160, DAMW = 60, SURF = 160;
  /* the pale blue a colourless liquid is drawn in, the chapter's physical-fact colour (the manometer of 11.6 uses the same), tinted toward the ink for the darker liquids */
  const CLEAR = '#bfe0f2';
  const liquidFill = (r) => (r.v < 1.5 ? CLEAR : alpha(PAL.ink, 0.18));
  const G = 9.80;
  function draw() {
    const { ctx } = begin(d.c);
    const dc = C('density');
    const A = As.v, h = hs.v, r = rowOf(liq.value), Vv = A * 1e6 * h, m = r.v * 1e3 * Vv;
    const side = Math.sqrt(A) * KM;
    /* the plan: the reservoir as a square of its area, the dam along its right edge */
    text(ctx, 'seen from above', PCX, 108, PAL.muted, { size: 19, align: 'center' });
    ctx.save(); ctx.fillStyle = liquidFill(r); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(PCX - side / 2, PCY - side / 2, side, side); ctx.strokeRect(PCX - side / 2, PCY - side / 2, side, side); ctx.restore();
    fixed(ctx, PCX + side / 2, PCY - side / 2 - 10, 18, side + 20);
    text(ctx, 'the dam', PCX + side / 2 + 30, PCY, PAL.muted, { size: 17, align: 'left' });
    text(ctx, lower(r.n), PCX, PCY, PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.8) });
    hbracket(ctx, PCX - side / 2, PCX + side / 2, PCY + side / 2 + 28, PAL.ink, '');
    text(ctx, 'A = ' + fmt(A, 1) + ' km², ' + sigz(Math.sqrt(A), 3) + ' km across', PCX, PCY + side / 2 + 54, PAL.ink, { size: 19, weight: 600, align: 'center' });
    hbracket(ctx, 90, 90 + 5 * KM, 628, PAL.muted, '');
    text(ctx, '5 km', 90 + 5 * KM + 16, 628, PAL.muted, { size: 17 });
    /* the section: the liquid behind the dam, its average depth bracketed */
    text(ctx, 'in section through the dam', (SX1 + SX2 + DAMW) / 2, 108, PAL.muted, { size: 19, align: 'center' });
    const bottom = SURF + h * MPX;
    fixed(ctx, SX2, 130, DAMW, bottom + 34 - 130);
    fixed(ctx, SX1 - 20, bottom, SX2 - SX1 + 20, 34);
    ctx.save(); ctx.fillStyle = liquidFill(r); ctx.fillRect(SX1, SURF, SX2 - SX1, bottom - SURF); ctx.restore();
    line(ctx, SX1, SURF, SX2, SURF, PAL.ink, 3, [14, 10]);
    line(ctx, SX1, bottom, SX2, bottom, PAL.ink, 2);
    text(ctx, lower(r.n), (SX1 + SX2) / 2, (SURF + bottom) / 2, PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.8) });
    text(ctx, 'the dam', SX2 + DAMW / 2, bottom + 56, PAL.muted, { size: 17, align: 'center' });
    vbracket(ctx, SX1 - 36, SURF, bottom, PAL.ink, '', -1);
    text(ctx, 'h = ' + fmt(h, 1) + ' m', SX1 - 52, (SURF + bottom) / 2, PAL.ink, { size: 19, weight: 600, align: 'right' });
    text(ctx, 'the average depth', SX1 - 52, (SURF + bottom) / 2 + 26, PAL.muted, { size: 15, align: 'right' });
    text(ctx, 'ρ = ' + rhoText(r), (SX1 + SX2) / 2, bottom + 58, dc, { size: 20, weight: 600, align: 'center' });
    topline(ctx, 'A reservoir of ' + fmt(A, 1) + ' km² and average depth ' + fmt(h, 1) + ' m holds ' + sciText(Vv, 3) + ' m³ of ' + lower(r.n) + ', a mass of ' + sciText(m, 3) + ' kg.');
    readout(d.readout, `m = \\krho V = \\krho A h = (${rhoTex(r)})(${sciTex(Vv, 3)}\\ \\text{m}^3) = ${sciTex(m, 3)}\\ \\text{kg}`,
      'The volume is V = Ah = (' + fmt(A, 1) + ' km²)(' + fmt(h, 1) + ' m) = ' + sciText(Vv, 3) + ' m³, and the weight of that ' + lower(r.n) + ' is mg = ' + sciText(m * G, 3) + ' N, which, as the following sections show, is not the force the dam must supply.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
