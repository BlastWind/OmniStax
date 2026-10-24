/* Figures for section 11.2 Density. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a control's input
   alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, hover, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, pinned, fixed, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- Table 11.1, as the book prints it ----------
   `s` is the density as the table writes it, in 10³ kg/m³ (which is g/cm³ and
   g/mL), and `v` the same number; an entry the table gives as a range carries
   `lo` and `hi` instead. The gases are written with their factor of 10⁻³. */
const SUBST = [
  { n: '铝', p: 'solid', s: '2.7', v: 2.7 },
  { n: '黄铜', p: 'solid', s: '8.44', v: 8.44 },
  { n: '铜（平均）', p: 'solid', s: '8.8', v: 8.8 },
  { n: '金', p: 'solid', s: '19.32', v: 19.32 },
  { n: '铁或钢', p: 'solid', s: '7.8', v: 7.8 },
  { n: '铅', p: 'solid', s: '11.3', v: 11.3 },
  { n: '聚苯乙烯', p: 'solid', s: '0.10', v: 0.10 },
  { n: '钨', p: 'solid', s: '19.30', v: 19.30 },
  { n: '铀', p: 'solid', s: '18.70', v: 18.70 },
  { n: '混凝土', p: 'solid', s: '2.30–3.0', lo: 2.30, hi: 3.0 },
  { n: '软木', p: 'solid', s: '0.24', v: 0.24 },
  { n: '普通玻璃（平均）', p: 'solid', s: '2.6', v: 2.6 },
  { n: '花岗岩', p: 'solid', s: '2.7', v: 2.7 },
  { n: '地壳', p: 'solid', s: '3.3', v: 3.3 },
  { n: '木材', p: 'solid', s: '0.3–0.9', lo: 0.3, hi: 0.9 },
  { n: '冰（0°C）', p: 'solid', s: '0.917', v: 0.917 },
  { n: '骨', p: 'solid', s: '1.7–2.0', lo: 1.7, hi: 2.0 },
  { n: '银', p: 'solid', s: '10.49', v: 10.49 },
  { n: '水（4°C）', p: 'liquid', s: '1.000', v: 1.000 },
  { n: '血液', p: 'liquid', s: '1.05', v: 1.05 },
  { n: '海水', p: 'liquid', s: '1.025', v: 1.025 },
  { n: '汞', p: 'liquid', s: '13.6', v: 13.6 },
  { n: '乙醇', p: 'liquid', s: '0.79', v: 0.79 },
  { n: '汽油', p: 'liquid', s: '0.68', v: 0.68 },
  { n: '丙三醇', p: 'liquid', s: '1.26', v: 1.26 },
  { n: '橄榄油', p: 'liquid', s: '0.92', v: 0.92 },
  { n: '空气', p: 'gas', s: '1.29 × 10⁻³', v: 1.29e-3 },
  { n: '二氧化碳', p: 'gas', s: '1.98 × 10⁻³', v: 1.98e-3 },
  { n: '一氧化碳', p: 'gas', s: '1.25 × 10⁻³', v: 1.25e-3 },
  { n: '氢', p: 'gas', s: '0.090 × 10⁻³', v: 0.090e-3 },
  { n: '氦', p: 'gas', s: '0.18 × 10⁻³', v: 0.18e-3 },
  { n: '甲烷', p: 'gas', s: '0.72 × 10⁻³', v: 0.72e-3 },
  { n: '氮', p: 'gas', s: '1.25 × 10⁻³', v: 1.25e-3 },
  { n: '一氧化二氮', p: 'gas', s: '1.98 × 10⁻³', v: 1.98e-3 },
  { n: '氧', p: 'gas', s: '1.43 × 10⁻³', v: 1.43e-3 },
  { n: '蒸汽（100°C）', p: 'gas', s: '0.60 × 10⁻³', v: 0.60e-3 },
];
const PHASES = ['solid', 'liquid', 'gas'];
/* a substance's name in running text: the table's parentheticals dropped */
const PRETTY = { '水（4°C）': '水', '铜（平均）': '铜', '普通玻璃（平均）': '普通玻璃', '地壳': '地壳', '冰（0°C）': '冰', '蒸汽（100°C）': '蒸汽' };
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
  const ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 100, max: 2000, step: 10, value: 1000, unit: 'kg', dec: 0, aria: '每堆的质量', detents: [{ v: 1000, label: '一吨' }] });
  const OPTS = SUBST.filter((r) => r.p !== 'gas' && single(r)).map(optionOf);
  const left = select(d.controls, { label: '\\text{左堆}', options: OPTS, value: '聚苯乙烯', aria: '左堆的物质' });
  const right = select(d.controls, { label: '\\text{右堆}', options: OPTS, value: '花岗岩', aria: '右堆的物质' });
  /* The scene scale is fixed from the slider maximum: 2000 kg of polystyrene is 20 m³, a cube 2.71 m on a
     side, and at 110 canvas units to the metre that cube is 298 units tall and clears the headline. */
  const PX = 110, PY = 470, CX = 700, PLANK = 940, DEPTH = 300, THICK = 14;
  /* the viewpoint: straight in front of the plank, so that it reads level (any yaw with a pitch would slope it on the canvas), and a little above, so the top of each cube shows as well as its front */
  const V = view({ yaw: 0, pitch: 0.32, dist: 3400, cx: CX, cy: PY });
  const kFront = V.shade([0, 0, 1]), kTop = V.shade([0, 1, 0]), kLeft = V.shade([-1, 0, 0]);
  const quad = (pts) => pts.map((p) => V.P(p));
  /* a cube of side S whose front-bottom-centre sits at x0 on the plank, the plank's depth behind it centred */
  /* a shaded face outlined in its pile's referent colour */
  function rface(pts, k, color) {
    face(ctx, pts, k);
    ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
  }
  function cube(x0, S, color) {
    const z0 = -DEPTH / 2 + S / 2, z1 = z0 - S, h = S / 2;
    rface(quad([[x0 - h, 0, z0], [x0 - h, 0, z1], [x0 - h, S, z1], [x0 - h, S, z0]]), kLeft, color);
    rface(quad([[x0 - h, S, z0], [x0 + h, S, z0], [x0 + h, S, z1], [x0 - h, S, z1]]), kTop, color);
    rface(quad([[x0 - h, 0, z0], [x0 + h, 0, z0], [x0 + h, S, z0], [x0 - h, S, z0]]), kFront, color);
  }
  let ctx;
  function draw() {
    ctx = begin(d.c).ctx;
    const dc = C('density');
    const m = ms.v, L = rowOf(left.value), R = rowOf(right.value);
    const VL = m / (L.v * 1e3), VR = m / (R.v * 1e3), sL = Math.cbrt(VL), sR = Math.cbrt(VR);
    const side = (n) => Math.cbrt(m / (rowOf(n).v * 1e3));          /* a new substance grows or shrinks the pile into its own cube */
    /* the ground, the support and the plank, a slab seen from the same viewpoint as the cubes */
    const w = PLANK / 2;
    line(ctx, 150, 590, 1250, 590, PAL.muted, 4);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(CX, PY + THICK); ctx.lineTo(CX - 70, 590); ctx.lineTo(CX + 70, 590); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    face(ctx, quad([[-w, 0, 0], [-w, 0, -DEPTH], [-w, -THICK, -DEPTH], [-w, -THICK, 0]]), kLeft, 2.5);
    face(ctx, quad([[-w, 0, 0], [w, 0, 0], [w, 0, -DEPTH], [-w, 0, -DEPTH]]), kTop, 2.5);
    face(ctx, quad([[-w, -THICK, 0], [w, -THICK, 0], [w, 0, 0], [-w, 0, 0]]), kFront, 2.5);
    /* the two piles */
    cube(-270, left.mix(side) * PX, F.ref('pile-left')); cube(270, right.mix(side) * PX, F.ref('pile-right'));
    /* one metre, for scale */
    hbracket(ctx, 1170, 1170 + PX, 130, PAL.ink, '1 m');
    /* each pile named once, beneath its place on the plank, with its volume and its density */
    for (const [x, r, Vv, s, id] of [[CX - 270, L, VL, sL, 'pile-left'], [CX + 270, R, VR, sR, 'pile-right']]) {
      text(ctx, lower(r.n) + '：' + fmt(m, 0) + ' kg 的体积为 ' + sigz(Vv, 3) + ' m³', x, 612, F.ref(id), { size: 19, align: 'center' });
      text(ctx, '边长 ' + fmt(s, 2) + ' m 的立方体', x, 638, F.ref(id), { size: 17, align: 'center' });
      text(ctx, 'ρ = ' + rhoText(r), x, 664, dc, { size: 20, weight: 600, align: 'center' });
    }
    const same = L.n === R.n;
    topline(ctx, same ? fmt(m, 0) + ' kg ' + lower(L.n) + '放在每一边，做成两个边长 ' + fmt(sL, 2) + ' m 的立方体，木板保持平衡。'
      : fmt(m, 0) + ' kg ' + lower(L.n) + '做成边长 ' + fmt(sL, 2) + ' m 的立方体，' + fmt(m, 0) + ' kg ' + lower(R.n) + '做成边长 ' + fmt(sR, 2) + ' m 的立方体，木板保持平衡。');
    const ratio = Math.max(VL, VR) / Math.min(VL, VR), big = VL >= VR ? L : R;
    readout(d.readout, `\\kvol = \\frac{\\km}{\\krho} = \\frac{${fmt(m, 0)}\\ \\text{kg}}{${rhoTex(L)}} = ${sigz(VL, 3)}\\ \\text{m}^3\\text{ 的${lower(L.n)}},\\quad \\frac{${fmt(m, 0)}\\ \\text{kg}}{${rhoTex(R)}} = ${sigz(VR, 3)}\\ \\text{m}^3\\text{ 的${lower(R.n)}}`,
      same ? '两堆是同一种物质，质量也相同，所以大小相同；无论两边是什么物质，木板都保持平衡，因为天平比较的是质量而不是体积。'
        : '两堆的质量相同，所以木板保持平衡，而它们的体积与密度成反比：' + lower(big.n) + '那一堆的体积是另一堆的 ' + sig(ratio, 2) + ' 倍，因为相同的质量必须分布在 ' + sig(ratio, 2) + ' 倍的空间之中。');
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
  const ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 0.1, max: 1000, step: 0.1, value: 240, unit: 'g', dec: 1, aria: '样品的质量' });
  const vs = ctl(d.controls, { label: '\\kvol', cls: 'volume', min: 1, max: 1000, step: 0.5, value: 89, unit: 'cm³', dec: 1, aria: '样品的体积' });
  /* rows in the order of their densities, densest first; a range sorts by its upper end */
  const ROWS = SUBST.slice().sort((a, b) => (b.hi ?? b.v) - (a.hi ?? a.v));
  /* The axis is logarithmic, fixed and never rescales: it runs from 10⁻² to 10⁵ kg/m³ in decades, the only
     scale that holds every entry from hydrogen (0.090 kg/m³) to gold (19 320 kg/m³). A density past either end goes through pinned(). */
  const BOX = { l: 330, t: 150, r: 1340, b: 900 };
  const LOGR = [0, 7];                                              /* the axis counts decades above 10⁻² kg/m³ */
  const TOL = 0.025;
  let hits = [];
  hover(d.stage, () => hits);
  const kgm3 = (r) => r.v * 1e3;
  function draw() {
    const { ctx } = begin(d.c);
    const dc = C('density'), phaseC = (p) => F.cat(PHASES.indexOf(p));
    const m = ms.v, Vv = vs.v, rho = m / Vv;                          /* g/cm³, which is 10³ kg/m³ */
    const fx = (v) => { const e = Math.round(v) - 2; return e === 0 ? '1' : e === 1 ? '10' : '10' + sup(e); };
    const { X } = axes(ctx, BOX, LOGR, [0, 1], { nx: 7, ny: 0, fx, fy: () => '', xl: '密度 ρ (kg/m³)', xc: dc });
    const xOf = (g) => X(Math.log10(g * 1e3) + 2);                  /* g in g/cm³ */
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
        hits.push({ x: xOf(r.v), y, r: 12, name: r.n + '，' + rhoText(r) });
      } else {
        const x1 = xOf(r.lo), x2 = xOf(r.hi);
        line(ctx, x1, y, x2, y, alpha(c, 0.55), 10);
        dot(ctx, x1, y, c, true, 5); dot(ctx, x2, y, c, true, 5);
        if (hit) { ctx.save(); ctx.strokeStyle = dc; ctx.lineWidth = 3; ctx.strokeRect(x1 - 8, y - 10, x2 - x1 + 16, 20); ctx.restore(); }
        hits.push({ x: (x1 + x2) / 2, y, r: Math.max(12, (x2 - x1) / 2), name: r.n + '，' + r.s + ' × 10³ kg/m³' });
      }
    });
    /* the legend: one mark per phase */
    PHASES.forEach((p, i) => { const x = BOX.l + 10 + i * 150; dot(ctx, x, BOX.b + 58, phaseC(p), true, 7); text(ctx, ({ solid: '固体', liquid: '液体', gas: '气体' })[p], x + 16, BOX.b + 58, PAL.ink, { size: 18 }); });
    /* the measured density, a line across the chart, pinned at the edge when it is off the axis */
    const label = 'ρ = ' + sigz(rho, 3) + ' g/cm³ = ' + sciText(rho * 1e3, 3) + ' kg/m³';
    const p = pinned(ctx, BOX, X, () => BOX.t, Math.log10(rho * 1e3) + 2, 0, dc);
    if (!p.out) line(ctx, p.x, BOX.t + 9, p.x, BOX.b, dc, 3, [10, 10]);
    text(ctx, label, Math.min(Math.max(p.x, 560), 1160), BOX.t - 28, dc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    /* the substances the sample could be */
    const found = ROWS.filter(match);
    const names = found.map((r) => lower(r.n) + (single(r) ? '' : '（落在其范围内）'));
    const list = names.length <= 1 ? names.join('') : names.slice(0, -1).join('、') + '和' + names[names.length - 1];
    const below = ROWS.filter((r) => (r.hi ?? r.v) < rho && !match(r)).sort((a, b) => (b.hi ?? b.v) - (a.hi ?? a.v))[0];
    const above = ROWS.filter((r) => (r.lo ?? r.v) > rho && !match(r)).sort((a, b) => (a.lo ?? a.v) - (b.lo ?? b.v))[0];
    const where = below && above ? '它介于' + lower(below.n) + '（' + rhoText(below) + '）和' + lower(above.n) + '（' + rhoText(above) + '）之间。'
      : below ? '它比表中任何一个密度都大；最接近的是' + lower(below.n) + '（' + rhoText(below) + '）。'
      : above ? '它比表中任何一个密度都小；最接近的是' + lower(above.n) + '（' + rhoText(above) + '）。' : '';
    topline(ctx, '质量 ' + fmt(m, 1) + ' g 占 ' + fmt(Vv, 1) + ' cm³ 的体积，密度为 ' + sigz(rho, 3) + ' g/cm³，'
      + (found.length ? '这就是' + list + '的密度。' : '与表中任何物质都不吻合。'));
    readout(d.readout, `\\krho = \\frac{\\km}{\\kvol} = \\frac{${fmt(m, 1)}\\ \\text{g}}{${fmt(Vv, 1)}\\ \\text{cm}^3} = ${sigz(rho, 3)}\\ \\text{g/cm}^3 = ${sciTex(rho * 1e3, 3)}\\ \\text{kg/m}^3`,
      found.length > 1 ? '这个密度同属于' + list + '，所以仅凭质量和体积无法说出样品是其中哪一种，要分辨还需要平均密度之外的信息。'
        : found.length === 1 ? '这个密度属于' + list + '，表中没有别的物质具有这个密度，密度就是这样识别物体由什么构成的。' + where
        : '表中没有任何物质具有这个密度。' + where);
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
  const As = ctl(d.controls, { label: '\\karea', cls: 'area', min: 10, max: 200, step: 0.5, value: 50, unit: 'km²', dec: 1, aria: '水库的表面积' });
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 5, max: 100, step: 0.5, value: 40, unit: 'm', dec: 1, aria: '水库的平均深度' });
  const liq = select(d.controls, { label: '\\text{该液体}', options: SUBST.filter((r) => r.p === 'liquid').map(optionOf), value: '水（4°C）', aria: '水库所蓄的液体' });
  /* Both scales are fixed from the slider maxima and never follow a slider: the plan holds a square
     14.1 km across (200 km²) in 360 units, and the section holds 100 m of depth in 330 units. */
  const KM = 360 / Math.sqrt(200), MPX = 330 / 100;
  const PCX = 250, PCY = 340, SX1 = 760, SX2 = 1220, DAMW = 60, SURF = 160;
  /* the pale blue a colourless liquid is drawn in, the chapter's physical-fact colour (the manometer of 11.6 uses the same), tinted toward the ink for the darker liquids */
  const CLEAR = () => (F.shown.facts ? F.fact('#bfe0f2') : alpha(PAL.ink, 0.18));
  /* the share of the pale blue in the fill, 1 for a colourless liquid; a new liquid's tint blends in */
  const clear = (n) => (rowOf(n).v < 1.5 ? 1 : 0);
  function fill(ctx, x, y, w, h) {
    const k = liq.mix(clear);
    ctx.save(); ctx.globalAlpha = k; ctx.fillStyle = CLEAR(); ctx.fillRect(x, y, w, h);
    ctx.globalAlpha = 1 - k; ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.fillRect(x, y, w, h); ctx.restore();
  }
  const G = 9.80;
  function draw() {
    const { ctx } = begin(d.c);
    const dc = C('density');
    const A = As.v, h = hs.v, r = rowOf(liq.value), Vv = A * 1e6 * h, m = r.v * 1e3 * Vv;
    const side = Math.sqrt(A) * KM;
    /* the plan: the reservoir as a square of its area, the dam along its right edge */
    text(ctx, '从上方看', PCX, 108, PAL.muted, { size: 19, align: 'center' });
    fill(ctx, PCX - side / 2, PCY - side / 2, side, side);
    const rc = F.ref('reservoir'), dmc = F.ref('dam');
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 3; ctx.strokeRect(PCX - side / 2, PCY - side / 2, side, side); ctx.restore();
    fixed(ctx, PCX + side / 2, PCY - side / 2 - 10, 18, side + 20);
    ctx.save(); ctx.strokeStyle = dmc; ctx.lineWidth = 3; ctx.strokeRect(PCX + side / 2, PCY - side / 2 - 10, 18, side + 20); ctx.restore();
    text(ctx, '水坝', PCX + side / 2 + 30, PCY, dmc, { size: 17, align: 'left' });
    text(ctx, lower(r.n), PCX, PCY, rc, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.8) });
    hbracket(ctx, PCX - side / 2, PCX + side / 2, PCY + side / 2 + 28, PAL.ink, '');
    text(ctx, 'A = ' + fmt(A, 1) + ' km²，宽 ' + sigz(Math.sqrt(A), 3) + ' km', PCX, PCY + side / 2 + 54, C('area'), { size: 19, weight: 600, align: 'center' });
    hbracket(ctx, 90, 90 + 5 * KM, 628, PAL.muted, '');
    text(ctx, '5 km', 90 + 5 * KM + 16, 628, PAL.muted, { size: 17 });
    /* the section: the liquid behind the dam, its average depth bracketed */
    text(ctx, '穿过水坝的剖面', (SX1 + SX2 + DAMW) / 2, 108, PAL.muted, { size: 19, align: 'center' });
    const bottom = SURF + h * MPX;
    fixed(ctx, SX2, 130, DAMW, bottom + 34 - 130);
    ctx.save(); ctx.strokeStyle = dmc; ctx.lineWidth = 3; ctx.strokeRect(SX2, 130, DAMW, bottom + 34 - 130); ctx.restore();
    fixed(ctx, SX1 - 20, bottom, SX2 - SX1 + 20, 34);
    fill(ctx, SX1, SURF, SX2 - SX1, bottom - SURF);
    line(ctx, SX1, SURF, SX2, SURF, rc, 3, [14, 10]);
    line(ctx, SX1, bottom, SX2, bottom, rc, 2);
    text(ctx, lower(r.n), (SX1 + SX2) / 2, (SURF + bottom) / 2, rc, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.8) });
    text(ctx, '水坝', SX2 + DAMW / 2, bottom + 56, dmc, { size: 17, align: 'center' });
    vbracket(ctx, SX1 - 36, SURF, bottom, C('position'), '', -1);
    text(ctx, 'h = ' + fmt(h, 1) + ' m', SX1 - 52, (SURF + bottom) / 2, C('position'), { size: 19, weight: 600, align: 'right' });
    text(ctx, '平均深度', SX1 - 52, (SURF + bottom) / 2 + 26, PAL.muted, { size: 15, align: 'right' });
    text(ctx, 'ρ = ' + rhoText(r), (SX1 + SX2) / 2, bottom + 58, dc, { size: 20, weight: 600, align: 'center' });
    topline(ctx, '一座面积 ' + fmt(A, 1) + ' km²、平均深度 ' + fmt(h, 1) + ' m 的水库蓄有 ' + sciText(Vv, 3) + ' m³ 的' + lower(r.n) + '，质量为 ' + sciText(m, 3) + ' kg。');
    readout(d.readout, `\\km = \\krho \\kvol = \\krho \\karea \\kh = (${rhoTex(r)})(${sciTex(Vv, 3)}\\ \\text{m}^3) = ${sciTex(m, 3)}\\ \\text{kg}`,
      '体积为 $\\kvol = \\karea\\kh = (' + fmt(A, 1) + '\\ \\text{km}^2)(' + fmt(h, 1) + '\\ \\text{m}) = ' + sciTex(Vv, 3) + '\\ \\text{m}^3$，这些' + lower(r.n) + '的重力为 $\\km g = ' + sciTex(m * G, 3) + '\\ \\text{N}$，正如后面几节所表明的，它并不是水坝必须提供的力。');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
