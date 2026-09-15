/* Figures for section 12.3 The Most General Applications of Bernoulli's Equation. Boots against the section's text article.
   Every flow in this section is steady, so every figure is a still picture
   that answers its sliders: none registers a cycle, none carries a transport,
   and a slider's input alone redraws it (ch12/config.md). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, vbracket, axes, pinned, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, RHO = 1000, TAU = 2 * Math.PI;
/* a pressure or an energy per unit volume written in millions, as the book writes them */
const e6 = (v, d) => fmt(v / 1e6, d) + ' × 10⁶';
const e6tex = (v, d) => fmt(v / 1e6, d) + ' \\times 10^6';
/* a filled polygon with a stroke */
function poly(ctx, pts, fill, stroke, w = 2.5) {
  ctx.save(); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); }
  ctx.restore();
}
/* a rounded box in the panel colour with an ink outline */
function rbox(ctx, x, y, w, h, r) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a filled rectangle, and one with a diagonal hatch, for the segments of a stacked bar */
function bar(ctx, x, y, w, h, color) { if (h <= 0) return; ctx.save(); ctx.fillStyle = color; ctx.fillRect(x, y, w, h); ctx.restore(); }
function hatched(ctx, x, y, w, h, color) {
  if (h <= 0) return;
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.fillStyle = alpha(color, 0.18); ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath();
  for (let s = x - h; s < x + w; s += 12) { ctx.moveTo(s, y + h); ctx.lineTo(s + h, y); }
  ctx.stroke(); ctx.restore();
}
/* a pipe: an ink wall with the fluid drawn inside it in the flow-rate hue */
function pipe(ctx, pts, w, fluid) {
  const path = () => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); };
  ctx.save(); ctx.lineCap = 'butt'; ctx.lineJoin = 'round';
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = w; path(); ctx.stroke();
  ctx.strokeStyle = fluid; ctx.lineWidth = Math.max(2, w - 7); path(); ctx.stroke();
  ctx.restore();
}
/* a vertical scale for a bar chart: ticks and faint gridlines from 0 to `top` every `step`, title above */
function vscale(ctx, box, top, step, fx, title, color) {
  for (let v = 0; v <= top + 1e-9; v += step) {
    const y = box.b - (v / top) * (box.b - box.t);
    if (v > 0) line(ctx, box.l, y, box.r, y, PAL.rule, 1.5);
    line(ctx, box.l - 8, y, box.l, y, PAL.muted, 2);
    text(ctx, fx(v), box.l - 14, y, PAL.muted, { size: 17, align: 'right' });
  }
  line(ctx, box.l, box.t, box.l, box.b, PAL.muted, 2); line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
  text(ctx, title, box.l, box.t - 24, color ?? PAL.ink, { size: 20, weight: 600 });
}

/* =====================================================================
   FIGURE 12.11: the dam and its reservoir. Water leaves through an opening
   a depth h below the surface, both pressures are atmospheric, and the speed
   comes out as that of a body that has fallen h. Still: a reservoir draining
   steadily is a steady state with no clock in it, so the figure answers its
   sliders and registers no cycle. Scene beside its graph, since the scene is
   vertical. The scene is 18 px per metre with the outlet fixed at y = 560,
   so 20 m of depth puts the surface at y = 200; the graph's axes are fixed
   at 0 to 20 m and 0 to 20 m/s from the slider maxima.
===================================================================== */
(function () {
  const d = sim('sim-torricelli', 760);
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0.5, max: 20, step: 0.1, value: 5, unit: 'm', dec: 2, aria: 'the depth of the opening below the surface' });
  const v1s = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 0, max: 3, step: 0.05, value: 0, unit: 'm/s', dec: 2, aria: 'the speed of the water at the surface' });
  const As = ctl(d.controls, { label: 'A', cls: '', min: 2, max: 50, step: 0.5, value: 10, unit: 'cm²', dec: 1, aria: 'the area of the opening' });
  const S = 18, YOUT = 560, YBED = 660, YTW = YOUT + 1.5 * S, XL = 80;
  /* the dam: a tapered wall, its upstream face from (600, 140) down to (470, 660) and its downstream face from (640, 140) down to (700, 660) */
  const upX = (y) => 600 - ((y - 140) / (YBED - 140)) * 130, dnX = (y) => 640 + ((y - 140) / (YBED - 140)) * 60;
  const box = { l: 1000, r: 1340, t: 150, b: 560 };
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('position'), ac = C('acceleration'), prc = C('pressure'), qc = C('flow-rate');
    const h = hs.v, v1 = v1s.v, A = As.v * 1e-4;
    const v2 = Math.sqrt(v1 * v1 + 2 * G * h), Q = A * v2;
    const ys = YOUT - h * S, half = 6 + 8 * Math.sqrt(As.v / 50);      /* the opening, drawn wider than its true size */
    /* the reservoir, the dam and the tailwater */
    const water = alpha(PAL.muted, 0.22);
    poly(ctx, [[XL, ys], [upX(ys), ys], [upX(YBED), YBED], [XL, YBED]], water, null);
    line(ctx, XL, ys, upX(ys), ys, PAL.muted, 2.5);
    poly(ctx, [[600, 140], [640, 140], [dnX(YBED), YBED], [upX(YBED), YBED]], alpha(PAL.ink, 0.3), PAL.ink, 2.5);
    poly(ctx, [[dnX(YTW), YTW], [900, YTW], [900, YBED], [dnX(YBED), YBED]], water, null);
    line(ctx, dnX(YTW), YTW, 900, YTW, PAL.muted, 2.5);
    line(ctx, 60, YBED, 900, YBED, PAL.muted, 4);
    /* the opening through the base of the dam, and the jet that leaves it */
    const x0 = upX(YOUT) - 4, x1 = dnX(YOUT) + 2;
    ctx.save(); ctx.fillStyle = water; ctx.fillRect(x0, YOUT - half, x1 - x0, 2 * half); ctx.restore();
    line(ctx, x0, YOUT - half, x1, YOUT - half, PAL.ink, 2.5); line(ctx, x0, YOUT + half, x1, YOUT + half, PAL.ink, 2.5);
    const tl = Math.sqrt(2 * 1.5 / G);
    const jet = (dy) => { ctx.beginPath(); for (let i = 0; i <= 40; i++) { const t = (tl * i) / 40, x = x1 + v2 * t * S, y = YOUT + 0.5 * G * t * t * S + dy; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); } };
    ctx.save(); ctx.strokeStyle = water; ctx.lineWidth = 2 * half; ctx.lineCap = 'butt'; jet(0); ctx.stroke();
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; jet(-half); ctx.stroke(); jet(half); ctx.stroke(); ctx.restore();
    /* the two levels, and the height dropped between them */
    line(ctx, dnX(ys) + 4, ys, 830, ys, alpha(PAL.ink, 0.35), 2, [10, 10]);
    line(ctx, x1, YOUT, 830, YOUT, alpha(PAL.ink, 0.35), 2, [10, 10]);
    vbracket(ctx, 830, ys, YOUT, pc, 'h = ' + fmt(h, 2) + ' m', 1);
    text(ctx, 'h_1', 768, ys - 18, pc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'h_2', 878, YOUT + 24, pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* point 1 at the surface and point 2 at the outlet */
    dot(ctx, 150, ys, PAL.ink, true, 9);
    text(ctx, '1', 128, ys - 14, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'P_1 = atmospheric', 172, ys - 38, prc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'v_1 = ' + fmt(v1, 2) + ' m/s', 172, ys - 12, vc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    dot(ctx, x1, YOUT, PAL.ink, true, 9);
    text(ctx, '2', x1 + 4, YOUT - half - 18, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'opening A = ' + fmt(As.v, 1) + ' cm²', (x0 + x1) / 2, 692, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'P_2 = atmospheric', 760, 692, prc, { size: 20, weight: 600 });
    text(ctx, 'v_2 = ' + fmt(v2, 2) + ' m/s', 760, 720, vc, { size: 20, weight: 600 });
    text(ctx, 'Q = Av_2 = ' + fmt(Q * 1000, 2) + ' L/s', 60, 720, qc, { size: 20, weight: 600 });
    text(ctx, 'g = 9.80 m/s²', 60, 692, ac, { size: 19, weight: 600 });
    /* the graph beside: the outlet speed against the depth, for the surface speed set */
    const { X, Y } = axes(ctx, box, [0, 20], [0, 20], { xl: 'h (m)', xc: pc, yl: 'v_2 (m/s)', yc: vc, nx: 4, ny: 4 });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 3, box.r - box.l, box.b - box.t + 3); ctx.clip();
    curve(ctx, (x) => Math.sqrt(v1 * v1 + 2 * G * x), 0, 20, X, Y, vc, 5, 120);
    ctx.restore();
    const p = pinned(ctx, box, X, Y, h, v2, vc, fmt(v2, 1) + ' m/s');
    line(ctx, p.x, p.y, p.x, box.b, alpha(pc, 0.6), 2, [4, 8]);
    line(ctx, box.l, p.y, p.x, p.y, alpha(vc, 0.6), 2, [4, 8]);
    topline(ctx, v1 < 0.005
      ? 'Water ' + fmt(h, 2) + ' m below the surface leaves the opening at ' + fmt(v2, 2) + ' m/s, the speed it would have after falling ' + fmt(h, 2) + ' m.'
      : 'Water ' + fmt(h, 2) + ' m below a surface moving at ' + fmt(v1, 2) + ' m/s leaves the opening at ' + fmt(v2, 2) + ' m/s.');
    readout(d.readout, `\\kvtwo = \\sqrt{\\kvone^2 + 2\\kg\\kh} = \\sqrt{(${fmt(v1, 2)}\\ \\text{m/s})^2 + 2(9.80\\ \\text{m/s}^2)(${fmt(h, 2)}\\ \\text{m})} = ${fmt(v2, 2)}\\ \\text{m/s}`,
      'Both pressures are atmospheric and the density cancels, so the size of the opening has no say in the speed. The opening of ' + fmt(As.v, 1) + ' cm² passes Q = Av₂ = ' + fmt(Q * 1000, 2) + ' L/s, and a larger one passes more water at the very same speed. The opening and the jet are drawn wider than their true size so that they can be seen against the dam.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.12: the fire hose run up a ladder. Pressure, speed and height
   all change between the base and the nozzle, and the three terms of
   Bernoulli's equation at each point are stacked into two columns whose
   totals are the same height. Still: a hose held at one setting is a steady
   flow with no clock in it. Scene at 24 px per metre with the ground at
   y = 660, so a nozzle 20 m up sits at y = 180; the bar axis is fixed at 0
   to 6.0 × 10⁶ J/m³, above the 5.3 × 10⁶ the slider extremes reach.
===================================================================== */
(function () {
  const d = sim('sim-fire-hose', 760);
  const Qs = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 10, max: 50, step: 0.5, value: 40, unit: 'L/s', dec: 1, aria: 'the flow rate through the hose' });
  const hs = ctl(d.controls, { label: '\\khtwo', cls: 'position', min: 0, max: 20, step: 0.1, value: 10, unit: 'm', dec: 1, aria: 'the height of the nozzle above the ground' });
  const ds = ctl(d.controls, { label: '\\text{nozzle bore}', cls: '', min: 2.5, max: 6.4, step: 0.05, value: 3, unit: 'cm', dec: 2, aria: 'the inside diameter of the nozzle' });
  const S = 24, YG = 660, D1 = 0.064, A1 = Math.PI * (D1 / 2) ** 2, TOP = 6e6;
  const bx = { l: 880, r: 1340, t: 150, b: 560 }, KB = (bx.b - bx.t) / TOP, COLS = [[900, 'at the base (1)'], [1180, 'in the nozzle (2)']], CW = 120;
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('position'), ac = C('acceleration'), prc = C('pressure'), qc = C('flow-rate'), ec = C('energy'), dc = C('density');
    const Q = Qs.v / 1000, h2 = hs.v, A2 = Math.PI * (ds.v / 200) ** 2;
    const v1 = Q / A1, v2 = Q / A2;
    const k1 = 0.5 * RHO * v1 * v1, k2 = 0.5 * RHO * v2 * v2, g2 = RHO * G * h2, P1 = k2 - k1 + g2, total = P1 + k1;
    const yn = YG - h2 * S - 12;
    /* the ground, the building and the pump */
    line(ctx, 40, YG, 740, YG, PAL.muted, 4);
    fixed(ctx, 690, 110, 40, YG - 110);
    text(ctx, 'the building', 710, YG + 24, PAL.muted, { size: 17, align: 'center' });
    rbox(ctx, 80, 596, 150, 64, 8);
    text(ctx, 'pump', 155, 628, PAL.ink, { size: 20, align: 'center' });
    /* the ladder from the ground to the nozzle, and the hose that follows it */
    const lx0 = 300, lx1 = 620, ly1 = yn + 8, L = Math.hypot(lx1 - lx0, ly1 - YG), nx = -(ly1 - YG) / L, ny = (lx1 - lx0) / L;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.lineCap = 'round';
    for (const s of [-9, 9]) { ctx.beginPath(); ctx.moveTo(lx0 + nx * s, YG + ny * s); ctx.lineTo(lx1 + nx * s, ly1 + ny * s); ctx.stroke(); }
    for (let k = 40; k < L; k += 40) { const x = lx0 + ((lx1 - lx0) * k) / L, y = YG + ((ly1 - YG) * k) / L; ctx.beginPath(); ctx.moveTo(x - nx * 9, y - ny * 9); ctx.lineTo(x + nx * 9, y + ny * 9); ctx.stroke(); }
    ctx.restore();
    pipe(ctx, [[230, 640], [300, 640], [lx0 + 10, YG - 12], [lx1, yn]], 14, alpha(qc, 0.8));
    const nw = 6 + 8 * (ds.v / 6.4);
    pipe(ctx, [[lx1, yn], [lx1 + 36, yn]], nw, alpha(qc, 0.8));
    for (const s of [-8, 0, 8]) line(ctx, lx1 + 40, yn + s * 0.3, 688, yn + s, alpha(qc, 0.7), 3);
    /* the two points, and what the water has at each */
    dot(ctx, 265, 640, PAL.ink, true, 9);
    text(ctx, '1', 265, 616, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'P_1 = ' + e6(P1, 2) + ' N/m² (gauge)', 60, 696, prc, { size: 20, weight: 600 });
    text(ctx, 'v_1 = ' + fmt(v1, 1) + ' m/s in the 6.40 cm hose', 60, 724, vc, { size: 20, weight: 600 });
    dot(ctx, lx1, yn, PAL.ink, true, 9);
    text(ctx, '2', lx1 + 4, yn - 28, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'P_2 = 0 (gauge)', 590, yn - 40, prc, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'v_2 = ' + fmt(v2, 1) + ' m/s in the ' + fmt(ds.v, 2) + ' cm bore', 590, yn - 14, vc, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (h2 > 0.2) vbracket(ctx, 752, YG, yn, pc, 'h_2 = ' + fmt(h2, 1) + ' m', 1);
    else text(ctx, 'h_2 = 0', 768, YG - 14, pc, { size: 20, weight: 600 });
    text(ctx, 'Q = ' + fmt(Qs.v, 1) + ' L/s', 430, 696, qc, { size: 20, weight: 600 });
    text(ctx, 'ρ = 1000 kg/m³', 430, 724, dc, { size: 20, weight: 600 });
    text(ctx, 'g = 9.80 m/s²', 620, 724, ac, { size: 20, weight: 600 });
    /* the three terms of Bernoulli's equation at each point, stacked; the total ruled across both in ink */
    vscale(ctx, bx, TOP, 1e6, (v) => fmt(v / 1e6, 0), 'energy per unit volume (× 10⁶ J/m³)', PAL.ink);
    const stacks = [[P1, k1, 0], [0, k2, g2]];
    COLS.forEach(([x, name], i) => {
      const [p, k, g] = stacks[i];
      let y = bx.b;
      bar(ctx, x, y - p * KB, CW, p * KB, prc); y -= p * KB;
      bar(ctx, x, y - k * KB, CW, k * KB, ec); y -= k * KB;
      hatched(ctx, x, y - g * KB, CW, g * KB, ec); y -= g * KB;
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(x, y, CW, bx.b - y); ctx.restore();
      const cx = x + CW / 2;
      text(ctx, name, cx, bx.b + 30, PAL.ink, { size: 19, weight: 600, align: 'center' });
      text(ctx, 'ρgh_' + (i + 1) + ' = ' + e6(g, 2), cx, bx.b + 62, ec, { size: 18, weight: 600, align: 'center' });
      text(ctx, '½ρv_' + (i + 1) + '² = ' + e6(k, 2), cx, bx.b + 88, ec, { size: 18, weight: 600, align: 'center' });
      text(ctx, 'P_' + (i + 1) + ' = ' + e6(p, 2), cx, bx.b + 114, prc, { size: 18, weight: 600, align: 'center' });
    });
    const yt = bx.b - total * KB;
    line(ctx, COLS[0][0] - 10, yt, COLS[1][0] + CW + 10, yt, PAL.ink, 3);
    text(ctx, 'the same total at both points, ' + e6(total, 2), (COLS[0][0] + COLS[1][0] + CW) / 2, yt - 18, PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'hatched: ρgh', bx.r, bx.t - 24, ec, { size: 17, align: 'right' });
    text(ctx, 'J/m³ = N/m²', bx.r, bx.t - 46, PAL.muted, { size: 17, align: 'right' });
    topline(ctx, h2 < 0.05
      ? 'With the nozzle at ground level, leaving it at ' + fmt(v2, 1) + ' m/s takes a gauge pressure of ' + e6(P1, 2) + ' N/m² at the base of the hose.'
      : 'To reach a nozzle ' + fmt(h2, 1) + ' m up and leave it at ' + fmt(v2, 1) + ' m/s, the water at the base of the hose needs a gauge pressure of ' + e6(P1, 2) + ' N/m².');
    readout(d.readout, `\\kProne = \\kPrtwo + \\tfrac{1}{2}\\krho(\\kvtwo^2 - \\kvone^2) + \\krho\\kg\\khtwo = 0 + \\tfrac{1}{2}(1000\\ \\text{kg/m}^3)[(${fmt(v2, 1)}\\ \\text{m/s})^2 - (${fmt(v1, 1)}\\ \\text{m/s})^2] + (1000\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2)(${fmt(h2, 1)}\\ \\text{m}) = ${e6tex(P1, 2)}\\ \\text{N/m}^2`,
      'The speeds follow from the flow rate and the two cross-sections, v₁ = Q/A₁ = ' + fmt(v1, 1) + ' m/s in the hose and v₂ = Q/A₂ = ' + fmt(v2, 1) + ' m/s in the nozzle. Every term is an energy per unit volume, and the pressure the pump supplies at the base is spent on the speed in the nozzle and on the climb up the ladder.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the power a pump supplies. Each term of Bernoulli's equation times
   the flow rate is a power, and a pump that gives the water a pressure, a
   speed and a height supplies three powers at once. At the defaults only
   the pressure term is set, which is Example 12.6. Still: a pump running
   steadily is a steady state the sliders describe. Scene at 16 px per
   metre with the outlet pipe at y = 600, so 20 m of lift puts the outlet
   at y = 280; the bar axis is fixed at 0 to 120 kW, above the 114 kW the
   slider extremes reach.
===================================================================== */
(function () {
  const d = sim('sim-fluid-power', 720);
  const Ps = ctl(d.controls, { label: '\\kPr', cls: 'pressure', min: 0, max: 1.5, step: 0.01, value: 0.92, unit: '× 10⁶ N/m²', dec: 3, aria: 'the gauge pressure the pump gives the water' });
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 0, unit: 'm/s', dec: 1, aria: 'the speed the pump gives the water' });
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0, max: 20, step: 0.5, value: 0, unit: 'm', dec: 1, aria: 'the height the pump lifts the water to' });
  const Qs = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 5, max: 60, step: 0.5, value: 40, unit: 'L/s', dec: 1, aria: 'the flow rate through the pump' });
  const S = 16, YG = 660, YP = 600, TOPW = 120e3;
  const bx = { l: 880, r: 1340, t: 150, b: 540 }, KB = (bx.b - bx.t) / TOPW;
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('position'), ac = C('acceleration'), prc = C('pressure'), qc = C('flow-rate'), wc = C('power'), dc = C('density');
    const P = Ps.v * 1e6, v = vs.v, h = hs.v, Q = Qs.v / 1000;
    const Wp = P * Q, Wk = 0.5 * RHO * v * v * Q, Wg = RHO * G * h * Q, W = Wp + Wk + Wg;
    const yt = YP - h * S;
    /* the ground, the hydrant, the pump and its pipes */
    line(ctx, 40, YG, 800, YG, PAL.muted, 4);
    rbox(ctx, 78, 556, 30, YG - 556, 6);
    rbox(ctx, 72, 546, 42, 14, 5);
    text(ctx, 'hydrant', 93, YG + 24, PAL.muted, { size: 17, align: 'center' });
    pipe(ctx, [[108, YP], [250, YP]], 22, alpha(qc, 0.8));
    const riser = h > 0.05 ? [[340, YP], [460, YP], [460, yt], [620, yt]] : [[340, YP], [620, YP]];
    pipe(ctx, riser, 22, alpha(qc, 0.8));
    rbox(ctx, 250, 556, 90, YG - 556, 10);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5;
    for (let k = 0; k < 3; k++) { const a = (k * TAU) / 3; ctx.beginPath(); ctx.arc(295 + 12 * Math.cos(a + 1.2), YP + 12 * Math.sin(a + 1.2), 20, a, a + 1.6); ctx.stroke(); }
    ctx.restore();
    dot(ctx, 295, YP, PAL.ink, true, 5);
    text(ctx, 'pump', 295, YG + 24, PAL.ink, { size: 20, align: 'center' });
    /* the flow, the pressure gauge on the outlet pipe, the jet and its speed, and the lift */
    arrow(ctx, 150, YP - 34, 220, YP - 34, qc, 4);
    text(ctx, 'Q = ' + fmt(Qs.v, 1) + ' L/s', 185, YP - 60, qc, { size: 20, weight: 600, align: 'center' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(400, YP + 36, 20, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, 400, YP + 11, 400, YP + 16, PAL.ink, 3);
    const ga = Math.PI * (1 + Ps.v / 1.5);   /* the needle sweeps from the left round the bottom to the right as the pressure grows */
    line(ctx, 400, YP + 36, 400 + 14 * Math.cos(ga), YP + 36 + 14 * Math.sin(ga), prc, 3);
    text(ctx, 'P = ' + fmt(Ps.v, 3) + ' × 10⁶ N/m²', 430, YP + 36, prc, { size: 20, weight: 600 });
    if (v > 0.05) arrow(ctx, 626, yt, 626 + 5 * v, yt, vc, 4);
    text(ctx, 'v = ' + fmt(v, 1) + ' m/s', 632, yt - 30, vc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    if (h > 0.2) vbracket(ctx, 690, YP, yt, pc, 'h = ' + fmt(h, 1) + ' m', 1);
    else text(ctx, 'h = 0', 706, YP, pc, { size: 20, weight: 600 });
    line(ctx, 470, YP, 680, YP, alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'ρ = 1000 kg/m³', 430, YG + 24, dc, { size: 20, weight: 600 });
    text(ctx, 'g = 9.80 m/s²', 650, YG + 24, ac, { size: 20, weight: 600 });
    /* the three powers and their total */
    vscale(ctx, bx, TOPW, 30e3, (x) => fmt(x / 1000, 0), 'power (kW)', wc);
    const cols = [['PQ', Wp, 900, 0.55], ['½ρv²Q', Wk, 1010, 0.55], ['ρghQ', Wg, 1120, 0.55], ['total', W, 1250, 0.9]];
    cols.forEach(([nm, val, x, a]) => {
      const hh = Math.min(val, TOPW) * KB;
      bar(ctx, x, bx.b - hh, 80, hh, alpha(wc, a));
      ctx.save(); ctx.strokeStyle = wc; ctx.lineWidth = 2; ctx.strokeRect(x, bx.b - hh, 80, hh); ctx.restore();
      text(ctx, nm, x + 40, bx.b + 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
      text(ctx, fmt(val / 1000, 1) + ' kW', x + 40, bx.b + 60, wc, { size: 19, weight: 600, align: 'center' });
    });
    const parts = [];
    if (Wp > 0.5) parts.push(fmt(Wp / 1000, 1) + ' kW to pressure');
    if (Wk > 0.5) parts.push(fmt(Wk / 1000, 1) + ' kW to kinetic energy');
    if (Wg > 0.5) parts.push(fmt(Wg / 1000, 1) + ' kW to lift the water ' + fmt(h, 1) + ' m');
    topline(ctx, W < 0.5 ? 'A pump that gives the water no pressure, no speed and no height supplies no power at all.'
      : parts.length === 1 && Wp > 0.5 ? 'The pump supplies ' + fmt(W / 1000, 1) + ' kW, all of it to raise the pressure by ' + fmt(Ps.v, 3) + ' × 10⁶ N/m² in a flow of ' + fmt(Qs.v, 1) + ' L/s.'
      : 'The pump supplies ' + fmt(W / 1000, 1) + ' kW: ' + parts.join(', ') + '.');
    readout(d.readout, `\\text{power} = \\left(\\kPr + \\tfrac{1}{2}\\krho\\kv^2 + \\krho\\kg\\kh\\right)\\kQ = (${e6tex(P, 3)} + ${e6tex(0.5 * RHO * v * v, 3)} + ${e6tex(RHO * G * h, 3)}\\ \\text{N/m}^2)(${fmt(Qs.v, 1)} \\times 10^{-3}\\ \\text{m}^3\\text{/s}) = ${fmt(W / 1000, 1)}\\ \\text{kW}`,
      'Each term of Bernoulli’s equation is an energy per unit volume, and multiplied by the volume that passes each second it becomes a power. ' + fmt(W / 1000, 1) + ' kW is about ' + fmt(W / 745.7, 0) + ' hp' + (Wk + Wg < 0.5 && Wp > 0.5 ? ', the pump of a fire truck that raises only the pressure of the water it passes on.' : '.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
