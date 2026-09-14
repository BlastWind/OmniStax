/* Figures for section 15.4 Carnot's Perfect Heat Engine: The Second Law of Thermodynamics Restated.
   Boots against the section's text article. One figure moves, the Carnot cycle,
   because a cycle has a clock in it and the area filling leg by leg is the idea;
   the other three answer their sliders, register no cycle and carry no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, hover, register, begin, line, arrow, dot, text, topline, axes, curve, pinned, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, R_GAS = 8.314;
const pct = (x, d = 1) => fmt(100 * x, d) + '%';
const K = (T) => fmt(T, 0) + ' K';
const kJ = (E, d = 2) => fmt(E, d) + ' kJ';
const degC = (T, d = 0) => fmt(T, d) + ' °C';
/* a filled band arrow from (x1, y1) to (x2, y2) of body width w, the head a little wider; dashed draws
   only the outline, which is how the figures mark what a Carnot engine would do in place of the real one */
function band(ctx, x1, y1, x2, y2, w, color, dashed) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4 || w < 0.5) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
  const hw = Math.max(w * 0.9, 12), hl = Math.min(Math.max(w * 1.1, 22), L * 0.6), bx = x2 - ux * hl, by = y2 - uy * hl, h = w / 2;
  const pts = [[x1 + px * h, y1 + py * h], [bx + px * h, by + py * h], [bx + px * (h + hw), by + py * (h + hw)], [x2, y2], [bx - px * (h + hw), by - py * (h + hw)], [bx - px * h, by - py * h], [x1 - px * h, y1 - py * h]];
  ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
  if (dashed) { ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]); ctx.stroke(); }
  else { ctx.fillStyle = color; ctx.fill(); }
  ctx.restore();
}
/* a reservoir: a box in ink with a soft fill and its temperature written in the temperature hue */
function reservoir(ctx, x1, y1, x2, y2, name, label) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(x1, y1, x2 - x1, y2 - y1); ctx.strokeRect(x1, y1, x2 - x1, y2 - y1); ctx.restore();
  text(ctx, name, (x1 + x2) / 2, y1 + 24, PAL.muted, { size: 17, align: 'center' });
  text(ctx, label, (x1 + x2) / 2, (y1 + y2) / 2 + 12, C('temperature'), { size: 24, weight: 600, align: 'center' });
}
/* the engine itself, a circle in ink */
function engine(ctx, x, y, r, name) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, name, x, y, PAL.muted, { size: 19, align: 'center' });
}

/* =====================================================================
   FIGURE 15.21: the Carnot cycle on a PV diagram, and the engine it drives
   beside it. One mole of a monatomic ideal gas starts at A with V = 3.0 L
   and is walked A→B→C→D→A: an isothermal expansion at T_h, an adiabatic
   expansion down to T_c, an isothermal compression at T_c and an adiabatic
   compression back to A. Moving: the loop has a clock, and what the still
   cannot show is that Q_h arrives during AB alone, Q_c leaves during CD
   alone, and the area inside the loop is what the expansion legs gave
   less what the compression legs took back. Axes fixed at 0 to 35 L and
   0 to 2.0 MPa, which hold the loop at every slider position (V_A = 3.0 L,
   T_h at most 650 K and V_B/V_A at most 3 put C at 33 L and A at 1.8 MPa).
===================================================================== */
(function () {
  const d = sim('sim-carnot-cycle', 690);
  const Th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 350, max: 650, step: 1, value: 573, unit: 'K', dec: 0, onInput: reset, aria: 'the temperature of the hot reservoir' });
  const Tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 273, max: 350, step: 1, value: 300, unit: 'K', dec: 0, onInput: reset, aria: 'the temperature of the cold reservoir' });
  const rs = ctl(d.controls, { label: 'V_{\\text{B}}/V_{\\text{A}}', cls: '', min: 1.5, max: 3, step: 0.1, value: 2.5, unit: '', dec: 1, onInput: reset, aria: 'the ratio of the volumes at B and A, how far the gas expands along the hot isotherm' });
  const PERIOD = 6, HOLD = 1.4, GAM = 5 / 3, VA = 3.0;      /* seconds per cycle; the hold at the end; γ for a monatomic gas; V_A in litres */
  const cy = cycle(() => PERIOD, HOLD);
  function reset() { cy.reset(); }
  /* the four corners in litres and MPa: nRT/V with V in litres gives kPa, so /1000 for MPa */
  function corners() {
    const th = Th.v, tc = Tc.v, r = rs.v, k = Math.pow(th / tc, 1 / (GAM - 1));
    const P = (T, V) => (R_GAS * T / V) / 1000;
    const VB = VA * r, VC = VB * k, VD = VA * k;
    return { th, tc, r, A: [VA, P(th, VA)], B: [VB, P(th, VB)], C: [VC, P(tc, VC)], D: [VD, P(tc, VD)] };
  }
  /* the point on each leg at fraction s of its volume change: isotherms at PV = nRT, adiabats at PV^γ constant */
  const onIso = (T, V) => (R_GAS * T / V) / 1000;
  const onAd = (P0, V0, V) => P0 * Math.pow(V0 / V, GAM);
  function legPoint(c, leg, s) {
    if (leg === 0) { const V = c.A[0] + s * (c.B[0] - c.A[0]); return [V, onIso(c.th, V)]; }
    if (leg === 1) { const V = c.B[0] + s * (c.C[0] - c.B[0]); return [V, onAd(c.B[1], c.B[0], V)]; }
    if (leg === 2) { const V = c.C[0] + s * (c.D[0] - c.C[0]); return [V, onIso(c.tc, V)]; }
    const V = c.D[0] + s * (c.A[0] - c.D[0]); return [V, onAd(c.D[1], c.D[0], V)];
  }
  const legPts = (c, leg, s0, s1, n = 40) => { const out = []; for (let i = 0; i <= n; i++) out.push(legPoint(c, leg, s0 + (s1 - s0) * i / n)); return out; };
  const box = { l: 120, r: 880, t: 120, b: 600 };
  const NAMES = ['isothermal expansion at T_h, A to B', 'adiabatic expansion, B to C', 'isothermal compression at T_c, C to D', 'adiabatic compression, D to A'];
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), tc = C('temperature'), pc = C('pressure');
    const c = corners(), t = cy.now(), done = t >= PERIOD - 1e-6;
    const leg = done ? 3 : Math.min(3, Math.floor(t / (PERIOD / 4))), s = done ? 1 : (t - leg * (PERIOD / 4)) / (PERIOD / 4);
    const Qh = R_GAS * c.th * Math.log(c.r) / 1000, Qc = R_GAS * c.tc * Math.log(c.r) / 1000, W = Qh - Qc, eff = 1 - c.tc / c.th;
    /* the PV diagram: pressure is a type and wears its hue on the vertical axis; volume is not and its axis is ink */
    const { X, Y } = axes(ctx, box, [0, 35], [0, 2], { xl: 'volume V (L)', xc: PAL.ink, yl: 'pressure P (MPa)', yc: pc, nx: 7, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    const P = (p) => [X(p[0]), Y(p[1])];
    /* the two isotherms run on past the loop, faintly, so that each leg is seen to lie on a curve of constant temperature */
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    for (const T of [c.th, c.tc]) curve(ctx, (V) => onIso(T, V), 1.5, 35, X, Y, alpha(tc, 0.35), 2, 120);
    ctx.restore();
    /* the region the walk has swept: under the expansion legs walked so far, less what the compression legs walked so far have taken back */
    const upper = leg === 0 ? legPts(c, 0, 0, s) : legPts(c, 0, 0, 1).concat(legPts(c, 1, 0, leg === 1 ? s : 1));
    const lower = leg < 2 ? [] : leg === 2 ? legPts(c, 2, 0, s) : legPts(c, 2, 0, 1).concat(legPts(c, 3, 0, s));
    const poly = upper.concat(lower);
    const last = poly[poly.length - 1];
    ctx.save(); ctx.fillStyle = alpha(ec, 0.3); ctx.beginPath();
    poly.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.lineTo(X(last[0]), Y(0)); ctx.lineTo(X(c.A[0]), Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    /* the whole loop faintly, then the part walked in full ink: isotherms solid, adiabats dashed */
    const strokeLeg = (k, s1, col, w) => {
      const pts = legPts(c, k, 0, s1); ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; if (k % 2) ctx.setLineDash([12, 10]);
      ctx.beginPath(); pts.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }); ctx.stroke(); ctx.restore();
    };
    for (let k = 0; k < 4; k++) strokeLeg(k, 1, alpha(PAL.ink, 0.3), 3);
    for (let k = 0; k < leg; k++) strokeLeg(k, 1, PAL.ink, 5);
    if (s > 0) strokeLeg(leg, s, PAL.ink, 5);
    /* the arrowheads that say which way the loop is walked, one per leg at its middle */
    for (let k = 0; k < 4; k++) { const a = P(legPoint(c, k, 0.5)), b = P(legPoint(c, k, 0.53)); arrow(ctx, a[0] - (b[0] - a[0]) * 6, a[1] - (b[1] - a[1]) * 6, b[0], b[1], k <= leg ? PAL.ink : alpha(PAL.ink, 0.3), 4); }
    /* the four corners, named, and the working point; the labels step out with a leader when the loop is small */
    const L = labeller(ctx, 690); L.block(0, 0, 1400, 92); L.block(box.l, box.b + 12, box.r, 690); L.block(box.r - 260, box.t, box.r, box.t + 66);
    const lab = [['A', c.A, -0.7, -0.7], ['B', c.B, 0.7, -0.7], ['C', c.C, 0.85, -0.5], ['D', c.D, -0.85, 0.5]];
    for (const [nm, p, ux, uy] of lab) { const q = P(p); dot(ctx, q[0], q[1], PAL.ink, false, 8); L.add(nm, q[0], q[1], ux, uy, PAL.ink, 22, 22); }
    const cur = P(legPoint(c, leg, s)); dot(ctx, cur[0], cur[1], PAL.ink, true, 10);
    /* each isotherm named once, at the middle of its leg, outside the loop */
    const mAB = P(legPoint(c, 0, 0.5)), mCD = P(legPoint(c, 2, 0.5));
    L.add('isotherm, T_h = ' + K(c.th), mAB[0], mAB[1], 0.7, -0.7, tc, 19, 30);
    L.add('isotherm, T_c = ' + K(c.tc), mCD[0], mCD[1], -0.7, 0.7, tc, 19, 36);
    L.flush();
    /* the legend for the two kinds of leg */
    line(ctx, box.r - 250, box.t + 22, box.r - 200, box.t + 22, PAL.ink, 4); text(ctx, 'isotherm', box.r - 190, box.t + 22, PAL.ink, { size: 17 });
    line(ctx, box.r - 250, box.t + 50, box.r - 200, box.t + 50, PAL.ink, 4, [12, 10]); text(ctx, 'adiabat', box.r - 190, box.t + 50, PAL.ink, { size: 17 });
    /* the engine beside the diagram: hot reservoir above, engine, cold reservoir below, the three energies as bands whose widths are the energies */
    const EX = 1150, kW = 5.0;
    reservoir(ctx, 1030, 120, 1270, 215, 'hot reservoir', 'T_h = ' + K(c.th));
    reservoir(ctx, 1030, 545, 1270, 640, 'cold reservoir', 'T_c = ' + K(c.tc));
    engine(ctx, EX, 380, 92, 'Carnot engine');
    const onQh = leg === 0 && !done, onQc = leg === 2 && !done, onW = done;
    band(ctx, EX, 215, EX, 292, kW * Qh, alpha(ec, onQh || done ? 1 : 0.28));
    text(ctx, 'Q_h = ' + kJ(Qh), EX + kW * Qh / 2 + 22, 253, alpha(ec, onQh || done ? 1 : 0.45), { size: 21, weight: 600 });
    band(ctx, EX, 468, EX, 545, kW * Qc, alpha(ec, onQc || done ? 1 : 0.28));
    text(ctx, 'Q_c = ' + kJ(Qc), EX + kW * Qc / 2 + 22, 507, alpha(ec, onQc || done ? 1 : 0.45), { size: 21, weight: 600 });
    band(ctx, EX + 88, 380, 1385, 380, kW * W, alpha(ec, onW ? 1 : 0.28));
    text(ctx, 'W = ' + kJ(W), 1312, 380 - kW * W / 2 - 20, alpha(ec, onW ? 1 : 0.45), { size: 21, weight: 600, align: 'center' });
    /* what the leg being walked is doing */
    const doing = done ? 'one cycle complete: W = Q_h − Q_c' : ['isothermal expansion at T_h: Q_h in', 'adiabatic expansion: no heat transfer', 'isothermal compression at T_c: Q_c out', 'adiabatic compression: no heat transfer'][leg];
    text(ctx, doing, EX, 665, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, 'Between ' + K(c.th) + ' and ' + K(c.tc) + ' a Carnot engine turns ' + pct(eff) + ' of the heat transfer it takes in into work, whatever the size of the loop.');
    readout(d.readout, `\\frac{\\kQC}{\\kQH} = \\frac{\\kTempc}{\\kTemph} = \\frac{${fmt(c.tc, 0)}\\ \\text{K}}{${fmt(c.th, 0)}\\ \\text{K}} = ${fmt(c.tc / c.th, 3)},\\quad \\text{Eff}_{\\text{C}} = 1 - \\frac{\\kTempc}{\\kTemph} = ${fmt(eff, 3)}`,
      'For one mole of a monatomic ideal gas expanding from ' + fmt(VA, 1) + ' L to ' + fmt(c.B[0], 1) + ' L along the hot isotherm, Q_h = ' + kJ(Qh) + ', Q_c = ' + kJ(Qc) + ' and W = Q_h − Q_c = ' + kJ(W) + ', the area inside the loop. The ratio Q_c/Q_h = ' + fmt(Qc / Qh, 3) + ' is the ratio of the two temperatures, which is why the efficiency depends on the temperatures alone: widening the expansion makes every energy larger and leaves the efficiency exactly where it was.');
    hits = [0, 1, 2, 3].map((k) => { const m = P(legPoint(c, k, 0.5)); return { x: m[0], y: m[1], r: 34, name: NAMES[k] }; })
      .concat([{ x: EX, y: 167, r: 60, name: 'the hot reservoir at T_h' }, { x: EX, y: 592, r: 60, name: 'the cold reservoir at T_c' }, { x: EX, y: 380, r: 92, name: 'the Carnot engine' }]);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the Carnot efficiency against the hot reservoir temperature, for
   the cold reservoir temperature the reader chooses. The graph is the
   idea: the curve climbs toward 100% and never reaches it, and only a cold
   reservoir at absolute zero would lift it to 100% everywhere. Still: it
   answers its sliders. Axes fixed at 0 to 1000 K and 0 to 100%.
===================================================================== */
(function () {
  const d = sim('sim-efficiency-map', 560);
  const Tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 0, max: 400, step: 5, value: 300, unit: 'K', dec: 0, detents: [{ v: 0, label: '0 K' }, { v: 273, label: '273 K' }], aria: 'the temperature of the cold reservoir' });
  const Th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 300, max: 1000, step: 1, value: 573, unit: 'K', dec: 0, aria: 'the temperature of the hot reservoir' });
  const box = { l: 140, r: 1300, t: 130, b: 440 };
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), th = Th.v, tcv = Tc.v, eff = th > tcv ? 1 - tcv / th : 0;
    const { X, Y } = axes(ctx, box, [0, 1000], [0, 100], { xl: 'hot reservoir temperature T_h (K)', xc: tc, yl: 'Carnot efficiency Eff_C (%)', yc: PAL.ink, nx: 10, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* the ceiling no engine passes, and the curve for the chosen cold reservoir */
    line(ctx, box.l, Y(100), box.r, Y(100), alpha(PAL.ink, 0.5), 2, [10, 10]);
    text(ctx, '100%, reached only with the cold reservoir at absolute zero', box.r - 10, Y(100) + 20, PAL.muted, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.85) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    if (tcv === 0) line(ctx, X(0), Y(100), X(1000), Y(100), PAL.ink, 5);
    else curve(ctx, (T) => 100 * (1 - tcv / T), tcv, 1000, X, Y, PAL.ink, 5, 200);
    ctx.restore();
    /* where the curve leaves the axis, which is the hot reservoir no hotter than the cold one */
    if (tcv > 0) { line(ctx, X(tcv), box.b, X(tcv), box.t, alpha(tc, 0.5), 2, [4, 8]); text(ctx, 'T_c = ' + K(tcv), X(tcv) + 10, box.t + 16, tc, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) }); }
    /* the engine the sliders have set */
    const p = pinned(ctx, box, X, Y, th, 100 * eff, tc);
    line(ctx, p.x, box.b, p.x, p.y, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, box.l, p.y, p.x, p.y, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'T_h = ' + K(th), p.x, box.b - 18, tc, { size: 19, weight: 600, align: th > 900 ? 'right' : 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'Eff_C = ' + pct(eff), p.x + 18, p.y - 24, PAL.ink, { size: 20, weight: 600, align: th > 900 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, tcv === 0 ? 'With the cold reservoir at absolute zero every hot reservoir temperature would give 100%, but no cold reservoir can be at 0 K.'
      : th <= tcv ? 'A hot reservoir at ' + K(th) + ' is no hotter than the cold reservoir at ' + K(tcv) + ', so no heat engine runs between them at all.'
      : 'With the cold reservoir at ' + K(tcv) + ', a hot reservoir at ' + K(th) + ' allows ' + pct(eff) + ' at most; only a cold reservoir at absolute zero would allow 100%.');
    readout(d.readout, `\\text{Eff}_{\\text{C}} = 1 - \\frac{\\kTempc}{\\kTemph} = 1 - \\frac{${fmt(tcv, 0)}\\ \\text{K}}{${fmt(th, 0)}\\ \\text{K}} = ${fmt(Math.max(0, eff), 3)}`,
      'Raising T_h moves the point along the curve toward 100% without ever reaching it, and the gain from each further kelvin gets smaller. Lowering T_c lifts the whole curve, and the greatest efficiencies come when the ratio T_c/T_h is as small as possible.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.22: a pressurized water reactor drawn as the heat engine it
   is. The core heats water held under pressure, that water boils a second
   loop into steam in the steam generator, the steam drives two turbines
   and the generator, and the spent steam is condensed and its heat sent
   to the cooling tower. Still: the plant runs steadily, and a flow drawn
   moving through the pipes would only replay the book's arrows; the two
   temperatures set the widths of the three energy bands and the readout.
===================================================================== */
(function () {
  const d = sim('sim-reactor', 620);
  const Th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 250, max: 350, step: 1, value: 300, unit: '°C', dec: 0, aria: 'the temperature of the pressurized water' });
  const Tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 10, max: 60, step: 0.5, value: 27, unit: '°C', dec: 1, aria: 'the temperature of the condensed steam' });
  /* a pipe: an ink line with a small arrowhead at its end saying which way the water goes */
  function pipe(ctx, pts, w, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    const a = pts[pts.length - 2], b = pts[pts.length - 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    arrow(ctx, b[0] - (b[0] - a[0]) / L * 22, b[1] - (b[1] - a[1]) / L * 22, b[0], b[1], color, w);
  }
  function turbine(ctx, x1, x2, y, h1, h2) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(x1, y - h1 / 2); ctx.lineTo(x2, y - h2 / 2); ctx.lineTo(x2, y + h2 / 2); ctx.lineTo(x1, y + h1 / 2); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath();
    for (let k = 1; k < 4; k++) { const x = x1 + (x2 - x1) * k / 4, h = h1 + (h2 - h1) * k / 4; ctx.moveTo(x, y - h / 2); ctx.lineTo(x, y + h / 2); }
    ctx.stroke(); ctx.restore();
  }
  hover(d.stage, () => [
    { x: 205, y: 365, r: 55, name: 'control rods' }, { x: 205, y: 450, r: 30, name: 'the reactor core' }, { x: 205, y: 420, r: 60, name: 'the pressure vessel, holding the pressurized water' },
    { x: 395, y: 400, r: 50, name: 'the steam generator' }, { x: 305, y: 450, r: 40, name: 'heat transfer from the pressurized water into the steam loop' },
    { x: 680, y: 205, r: 45, name: 'the high-pressure turbine' }, { x: 815, y: 205, r: 60, name: 'the low-pressure turbine' }, { x: 960, y: 205, r: 45, name: 'the generator' },
    { x: 815, y: 400, r: 45, name: 'the condenser, where the steam becomes water again' }, { x: 1240, y: 380, r: 90, name: 'the cooling tower' },
  ]);
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), ec = C('energy');
    const ThK = Th.v + 273.15, TcK = Tc.v + 273.15, eff = 1 - TcK / ThK, actual = 0.35;
    const GY = 540, SHAFT = 205;
    line(ctx, 30, GY, 1370, GY, PAL.muted, 3);
    /* the containment dome around the vessel and the steam generator */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(300, GY, 275, Math.PI, TAU); ctx.stroke(); ctx.restore();
    text(ctx, 'containment structure', 300, GY - 275 - 18, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the pressure vessel, its core and control rods */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(150, GY); ctx.lineTo(150, 340); ctx.arc(205, 340, 55, Math.PI, TAU); ctx.lineTo(260, GY); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(180, 420, 50, 60); ctx.strokeRect(180, 420, 50, 60); ctx.restore();
    for (const x of [192, 205, 218]) line(ctx, x, 310, x, 424, PAL.ink, 3);
    text(ctx, 'core', 205, 450, PAL.ink, { size: 16, align: 'center' });
    text(ctx, 'pressure vessel', 205, GY + 24, PAL.muted, { size: 16, align: 'center' });
    text(ctx, 'T_h = ' + degC(Th.v), 205, 510, tc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the steam generator and the primary loop of pressurized water */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(350, GY); ctx.lineTo(350, 335); ctx.arc(395, 335, 45, Math.PI, TAU); ctx.lineTo(440, GY); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'steam generator', 395, GY + 24, PAL.muted, { size: 16, align: 'center' });
    pipe(ctx, [[260, 400], [350, 400]], 5, PAL.ink);
    pipe(ctx, [[350, 500], [260, 500]], 5, PAL.ink);
    text(ctx, 'pressurized water', 305, 380, PAL.muted, { size: 15, align: 'center', bg: alpha(PAL.panel, 0.85) });
    band(ctx, 262, 450, 350, 450, 26, ec);
    text(ctx, 'Q_h', 305, 450 - 30, ec, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the steam line to the turbines, the shaft to the generator, and the exhaust down to the condenser */
    pipe(ctx, [[395, 290], [395, 175], [640, 175]], 5, PAL.ink);
    text(ctx, 'steam', 500, 155, PAL.muted, { size: 16, align: 'center' });
    turbine(ctx, 640, 720, SHAFT, 60, 120);
    turbine(ctx, 750, 880, SHAFT, 80, 170);
    line(ctx, 720, SHAFT, 750, SHAFT, PAL.ink, 6); line(ctx, 880, SHAFT, 915, SHAFT, PAL.ink, 6);
    text(ctx, 'high-pressure turbine', 680, 118, PAL.ink, { size: 16, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'low-pressure turbine', 836, 322, PAL.ink, { size: 16, align: 'left', bg: alpha(PAL.panel, 0.85) });
    pipe(ctx, [[720, SHAFT + 40], [735, SHAFT + 40], [735, SHAFT - 20], [750, SHAFT - 20]], 4, PAL.ink);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(960, SHAFT, 45, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'G', 960, SHAFT, PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'generator', 960, SHAFT + 66, PAL.ink, { size: 16, align: 'center' });
    band(ctx, 1005, SHAFT, 1125, SHAFT, 26 * eff, ec);
    text(ctx, 'W', 1065, SHAFT - 13 * eff - 22, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'electrical energy', 1065, SHAFT + 13 * eff + 22, PAL.muted, { size: 15, align: 'center' });
    /* the condenser, the water back to the steam generator, and the heat carried off to the cooling tower */
    pipe(ctx, [[815, SHAFT + 85], [815, 360]], 5, PAL.ink);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(700, 360, 230, 80); ctx.strokeRect(700, 360, 230, 80); ctx.restore();
    text(ctx, 'condenser', 815, 380, PAL.muted, { size: 16, align: 'center' });
    text(ctx, 'T_c = ' + degC(Tc.v, 1), 815, 414, tc, { size: 21, weight: 600, align: 'center' });
    pipe(ctx, [[700, 420], [560, 420], [560, 500], [444, 500]], 5, PAL.ink);
    text(ctx, 'water', 630, 442, PAL.muted, { size: 16, align: 'center' });
    band(ctx, 932, 400, 1165, 400, 26 * (1 - eff), ec);
    text(ctx, 'Q_c', 1048, 400 - 13 * (1 - eff) - 22, ec, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the cooling tower, with the vapour that leaves it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(1140, GY); ctx.quadraticCurveTo(1195, 330, 1180, 190); ctx.lineTo(1300, 190); ctx.quadraticCurveTo(1285, 330, 1340, GY); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath();
    ctx.arc(1215, 150, 22, Math.PI * 0.9, Math.PI * 1.9); ctx.moveTo(1290, 140); ctx.arc(1268, 140, 22, 0, Math.PI * 1.1, true); ctx.moveTo(1262, 105); ctx.arc(1242, 105, 20, 0, Math.PI, true);
    ctx.stroke(); ctx.restore();
    text(ctx, 'cooling tower', 1240, GY + 24, PAL.muted, { size: 16, align: 'center' });
    text(ctx, 'water evaporates', 1240, 470, PAL.muted, { size: 15, align: 'center' });
    text(ctx, 'into the environment', 1240, 492, PAL.muted, { size: 15, align: 'center' });
    topline(ctx, 'Pressurized water at ' + degC(Th.v) + ' and condensed steam at ' + degC(Tc.v, 1) + ' allow a maximum efficiency of ' + pct(eff) + '; a real station reaches about 35%.');
    readout(d.readout, `\\text{Eff}_{\\text{C}} = 1 - \\frac{\\kTempc}{\\kTemph} = 1 - \\frac{${fmt(TcK, 0)}\\ \\text{K}}{${fmt(ThK, 0)}\\ \\text{K}} = ${fmt(eff, 3)}`,
      'The temperatures are converted to kelvins first: ' + degC(Th.v) + ' is ' + K(ThK) + ' and ' + degC(Tc.v, 1) + ' is ' + K(TcK) + '. Of the heat transfer Q_h from the pressurized water, at most ' + pct(eff) + ' can come out of the generator as work, and the rest, Q_c, goes to the cooling tower; the water sent to the tower never touches the steam. A typical nuclear station actually reaches about 35%, which is ' + fmt(actual / eff, 2) + ' of this maximum.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.24: a real engine against a Carnot engine, and the friction
   of its output mechanisms. Q_h is held at 100 kJ a cycle; the solid
   bands are what the real engine does with it, the dashed outlines what a
   Carnot engine between the same reservoirs would do, and Q_f is the part
   of the work that friction turns back into heat transfer to the cold
   reservoir. Still: a balance of energies per cycle, not a motion.
===================================================================== */
(function () {
  const d = sim('sim-real-engine', 680);
  const Th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 350, max: 700, step: 1, value: 573, unit: 'K', dec: 0, aria: 'the temperature of the hot reservoir' });
  const Tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 273, max: 350, step: 1, value: 300, unit: 'K', dec: 0, aria: 'the temperature of the cold reservoir' });
  const sh = ctl(d.controls, { label: '\\text{Eff}/\\text{Eff}_{\\text{C}}', cls: '', min: 0, max: 1, step: 0.01, value: 0.7, unit: '', dec: 2, aria: 'how close the real engine comes to the Carnot efficiency' });
  const fr = ctl(d.controls, { label: '\\kQf/\\kW', cls: '', min: 0, max: 50, step: 1, value: 15, unit: '%', dec: 0, aria: 'the share of the work output that friction turns back into heat transfer' });
  const QH = 100, kW = 0.55;   /* kJ a cycle, and canvas units per kJ of band width */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const effC = 1 - Tc.v / Th.v, eff = sh.v * effC, W = QH * eff, Qc = QH - W, Qf = W * fr.v / 100, Wleft = W - Qf, WC = QH * effC, QcC = QH - WC;
    const EX = 560, EY = 375, ER = 105;
    reservoir(ctx, 380, 110, 800, 200, 'hot reservoir', 'T_h = ' + K(Th.v));
    reservoir(ctx, 380, 545, 800, 635, 'cold reservoir', 'T_c = ' + K(Tc.v));
    engine(ctx, EX, EY, ER, 'real engine');
    /* what a Carnot engine would do, as dashed outlines, behind the solid bands of the real engine */
    band(ctx, EX + ER - 4, EY - 30, 1010, EY - 30, kW * WC, ec, true);
    band(ctx, 500, EY + ER - 6, 500, 545, kW * QcC, ec, true);
    /* the real engine: heat in, work out, heat to the cold reservoir, and the friction that returns part of the work */
    band(ctx, EX, 200, EX, EY - ER + 6, kW * QH, ec);
    text(ctx, 'Q_h = ' + kJ(QH, 0), EX + kW * QH / 2 + 60, 236, ec, { size: 21, weight: 600 });
    band(ctx, 500, EY + ER - 6, 500, 545, kW * Qc, ec);
    text(ctx, 'Q_c = ' + kJ(Qc, 1), 500 - kW * Math.max(Qc, QcC) / 2 - Math.max(0.9 * kW * Math.max(Qc, QcC), 12) - 12, 500, ec, { size: 21, weight: 600, align: 'right' });
    if (W > 0.05) {
      /* the work leaves as a bar; at x = 760 its lower part turns down to the cold reservoir as Q_f and the rest carries on */
      const y0 = EY - 30 - kW * W / 2, x1 = EX + ER - 4, xb = 760;
      ctx.save(); ctx.fillStyle = ec; ctx.fillRect(x1, y0, xb - x1, kW * W); ctx.restore();
      if (Qf > 0.05) band(ctx, xb - kW * Qf / 2, y0 + kW * W - 1, xb - kW * Qf / 2, 545, kW * Qf, ec);
      if (Wleft > 0.05) band(ctx, xb - 1, y0 + kW * Wleft / 2, 1010, y0 + kW * Wleft / 2, kW * Wleft, ec);
      text(ctx, 'W = ' + kJ(W, 1), 710, EY - 30 - kW * Math.max(W, WC) / 2 - 22, ec, { size: 21, weight: 600, align: 'center' });
      if (Qf > 0.05) text(ctx, 'Q_f = ' + kJ(Qf, 1), xb + 16, 500, ec, { size: 21, weight: 600 });
      text(ctx, 'W − Q_f = ' + kJ(Wleft, 1), 1010, Math.max(y0 + kW * Wleft, EY - 30 + kW * WC / 2 + Math.max(0.9 * kW * WC, 12)) + 22, ec, { size: 21, weight: 600, align: 'right' });
    } else text(ctx, 'W = 0', 710, EY - 30 - kW * WC / 2 - 22, ec, { size: 21, weight: 600, align: 'center' });
    /* the legend for the two kinds of band */
    ctx.save(); ctx.fillStyle = ec; ctx.fillRect(850, 118, 44, 14); ctx.restore();
    text(ctx, 'the real engine', 906, 125, PAL.ink, { size: 17 });
    ctx.save(); ctx.strokeStyle = ec; ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]); ctx.strokeRect(850, 148, 44, 14); ctx.restore();
    text(ctx, 'a Carnot engine between the same reservoirs', 906, 155, PAL.ink, { size: 17 });
    /* the three efficiencies as bars in ink, since an efficiency is a pure number */
    const BX = 1090, BW = 220, rows = [['Carnot efficiency', effC], ['this engine', eff], ['after friction', Wleft / QH]];
    rows.forEach(([nm, v], i) => {
      const y = 250 + i * 96;
      text(ctx, nm, BX, y - 26, PAL.ink, { size: 18, weight: 600 });
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(BX, y - 10, BW, 24); ctx.fillStyle = i ? PAL.muted : PAL.ink; ctx.fillRect(BX, y - 10, BW * Math.max(0, v), 24); ctx.restore();
      text(ctx, pct(v), BX + BW + 12, y + 2, PAL.ink, { size: 18, weight: 600 });
    });
    line(ctx, BX + BW * effC, 226, BX + BW * effC, 470, alpha(PAL.ink, 0.5), 2, [4, 8]);
    topline(ctx, 'A real engine reaching ' + fmt(sh.v, 2) + ' of the Carnot efficiency between ' + K(Th.v) + ' and ' + K(Tc.v) + ' delivers ' + kJ(W, 1) + ' of work from every 100 kJ, and friction in its output mechanisms returns ' + kJ(Qf, 1) + ' of that to the cold reservoir.');
    readout(d.readout, `\\text{Eff} = \\frac{\\kW}{\\kQH} = \\frac{${fmt(W, 1)}\\ \\text{kJ}}{${fmt(QH, 0)}\\ \\text{kJ}} = ${fmt(eff, 3)},\\quad \\text{Eff}_{\\text{C}} = 1 - \\frac{\\kTempc}{\\kTemph} = ${fmt(effC, 3)}`,
      'A Carnot engine between the same reservoirs would deliver W = ' + kJ(WC, 1) + ' and send only Q_c = ' + kJ(QcC, 1) + ' to the cold reservoir. Friction in the output mechanisms turns Q_f = ' + kJ(Qf, 1) + ' of the real engine’s work back into heat transfer, so the work that is left is W − Q_f = ' + kJ(Wleft, 1) + ', an overall efficiency of ' + fmt(Wleft / QH, 3) + ', and the cold reservoir receives Q_c + Q_f = ' + kJ(Qc + Qf, 1) + ' in all.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
