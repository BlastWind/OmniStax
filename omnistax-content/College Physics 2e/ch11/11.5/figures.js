/* Figures for section 11.5 Pascal's Principle. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture: none
   registers a cycle, none carries a transport, and a slider's input alone
   redraws it. The page binds pressure and force; every area, diameter, lever
   arm, piston travel and volume is untyped and in ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers ---------- */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c]).join('');
/* a number in scientific notation, "1.25 × 10⁴", with d decimals in the mantissa */
function sciParts(v, d) {
  if (v === 0) return { m: '0', e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (+m.toFixed(d) >= 10) { e += 1; m /= 10; }
  return { m: m.toFixed(d), e };
}
const sci = (v, d) => { const p = sciParts(v, d); return v === 0 ? '0' : p.m + ' × 10' + sup(p.e); };
const sciTex = (v, d) => { const p = sciParts(v, d); return v === 0 ? '0' : p.m + '\\times 10^{' + p.e + '}'; };
/* three significant figures, the way the book writes its numbers */
const sig3 = (v) => (Math.abs(v) >= 1e4 ? sci(v, 2) : Math.abs(v) >= 1000 ? fmt(v, 0) : v.toPrecision(3));
const sig3Tex = (v) => (Math.abs(v) >= 1e4 ? sciTex(v, 2) : Math.abs(v) >= 1000 ? fmt(v, 0) : v.toPrecision(3));
/* a force written as the book writes it: whole newtons up to 9999, then scientific */
const N = (v) => (Math.abs(v) >= 1e4 ? sci(v, 2) : fmt(v, 0)) + ' N';
const NTex = (v) => (Math.abs(v) >= 1e4 ? sciTex(v, 2) : fmt(v, 0)) + '\\ \\text{N}';

/* ---------- a force arrow that may be longer than its room ----------
   The arrow is drawn by its tip, (tx, ty), pointing along the unit direction
   (ux, uy), L units long. When L is more than the room the scene leaves it,
   the arrow is drawn to the room and broken with the two slashes the book puts
   on the F_2 arrows of Figure 11.12, and its label carries the number. */
function push(ctx, tx, ty, ux, uy, L, room, color) {
  if (L < 2) return { x: tx, y: ty, broken: false };
  const broken = L > room, len = broken ? room : L, sx = tx - ux * len, sy = ty - uy * len;
  if (!broken) { arrow(ctx, sx, sy, tx, ty, color, 5); return { x: sx, y: sy, broken }; }
  const mx = tx - ux * len * 0.55, my = ty - uy * len * 0.55, px = -uy, py = ux;
  line(ctx, sx, sy, mx - ux * 8, my - uy * 8, color, 5);
  arrow(ctx, mx + ux * 8, my + uy * 8, tx, ty, color, 5);
  for (const k of [-5, 5]) line(ctx, mx + ux * (k - 6) - px * 13, my + uy * (k - 6) - py * 13, mx + ux * (k + 6) + px * 13, my + uy * (k + 6) + py * 13, color, 3);
  return { x: sx, y: sy, broken };
}
/* the same arrow drawn from its tail, (x, y), for a force that pushes away from the body it is drawn on */
function pushFrom(ctx, x, y, ux, uy, L, room, color) {
  if (L < 2) return { x, y, broken: false };
  const len = Math.min(L, room), r = push(ctx, x + ux * len, y + uy * len, ux, uy, L, room, color);
  return { x: x + ux * len, y: y + uy * len, broken: r.broken };
}
/* a small pressure arrow inside the fluid, its tip on the wall at (tx, ty) and pointing along (ux, uy) onto it */
function press(ctx, tx, ty, ux, uy, L, color) { arrow(ctx, tx - ux * L, ty - uy * L, tx, ty, color, 2.5); }
/* a row of pressure arrows along a wall: n of them spaced `gap` apart, centred on (cx, cy), stepping along (sx, sy) */
function pressRow(ctx, cx, cy, sx, sy, span, gap, ux, uy, L, color) {
  const n = Math.max(1, Math.floor((span - 20) / gap) + 1), off = -((n - 1) / 2) * gap;
  for (let i = 0; i < n; i++) press(ctx, cx + sx * (off + i * gap), cy + sy * (off + i * gap), ux, uy, L, color);
}
/* a piston: a slab of ink-outlined panel centred on (x, y), w wide and h tall */
function piston(ctx, x, y, w, h, dashed) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.fillStyle = PAL.panel;
  if (dashed) { ctx.setLineDash([8, 8]); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.strokeRect(x - w / 2, y - h / 2, w, h); }
  else { ctx.fillRect(x - w / 2, y - h / 2, w, h); ctx.strokeRect(x - w / 2, y - h / 2, w, h); }
  ctx.restore();
}
/* the vessel of Figure 11.11: two open cylinders on one floor joined by a line
   along the floor. The fluid is filled first, then the one outline is stroked. */
function vessel(ctx, LX, w1, RX, w2, top, lineTop, floor, fy1, fy2) {
  ctx.save(); ctx.fillStyle = PAL.soft;
  ctx.fillRect(LX - w1 / 2, fy1, w1, floor - fy1);
  ctx.fillRect(RX - w2 / 2, fy2, w2, floor - fy2);
  ctx.fillRect(LX + w1 / 2, lineTop, RX - w2 / 2 - LX - w1 / 2, floor - lineTop);
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(LX - w1 / 2, top); ctx.lineTo(LX - w1 / 2, floor); ctx.lineTo(RX + w2 / 2, floor); ctx.lineTo(RX + w2 / 2, top);
  ctx.moveTo(LX + w1 / 2, top); ctx.lineTo(LX + w1 / 2, lineTop); ctx.lineTo(RX - w2 / 2, lineTop); ctx.lineTo(RX - w2 / 2, top);
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 11.11: the simple hydraulic system. Two cylinders capped with
   pistons of different area on one enclosed fluid. The force on the left
   piston raises the pressure everywhere at once, which the small arrows on
   every wall say, and the right piston feels that pressure over its larger
   area. Still: a hydraulic system holding a load has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-hydraulic', 680);
  const Fs = ctl(d.controls, { label: '\\kFone', cls: 'force', min: 0, max: 500, step: 10, value: 100, unit: 'N', dec: 0, aria: 'the force on the left piston' });
  const A1 = ctl(d.controls, { label: 'A_1', cls: '', min: 2, max: 50, step: 1, value: 10, unit: 'cm²', dec: 1, detents: [10], aria: 'the area of the left piston' });
  const A2 = ctl(d.controls, { label: 'A_2', cls: '', min: 10, max: 250, step: 5, value: 50, unit: 'cm²', dec: 0, detents: [50], aria: 'the area of the right piston' });
  /* Geometry, fixed: the two pistons at one height, the vessel from y = 250 to the floor at 600.
     A piston is drawn as wide as its diameter, 24 units per centimetre; a force arrow is 0.55
     units per newton, so that F_2 = 5F_1 reads as five times the length; the pressure arrows
     are 10 to 52 units long on the square root of the pressure over its slider maximum,
     2.5 × 10⁶ N/m², so that the smallest pressure is still visible. */
  const LX = 380, RX = 980, PY = 400, PH = 28, TOP = 250, LT = 540, FL = 600, KW = 24, KF = 0.55, PMAX = 500 / 2e-4;
  let hits = [];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('pressure');
    const F1 = Fs.v, a1 = A1.v, a2 = A2.v, P = F1 / (a1 * 1e-4), F2 = P * a2 * 1e-4;
    const w1 = KW * Math.sqrt(a1), w2 = KW * Math.sqrt(a2), L = P > 0 ? 10 + 42 * Math.sqrt(P / PMAX) : 0;
    const pb = PY + PH / 2, pt = PY - PH / 2;
    vessel(ctx, LX, w1, RX, w2, TOP, LT, FL, pb, pb);
    /* the pressure, the same on every wall and under both pistons */
    if (L > 0) {
      for (const [cx, w] of [[LX, w1], [RX, w2]]) {
        pressRow(ctx, cx, pb + 2, 1, 0, w - 8, 36, 0, -1, L, pc);                              /* up onto the piston */
        if (w >= 2 * L + 12) pressRow(ctx, cx - w / 2 + 2, (pb + FL) / 2 + 20, 0, 1, FL - pb - 60, 36, -1, 0, L, pc); /* onto the outer wall, where the cylinder is wide enough for the arrows not to cross */
      }
      if (w1 >= 2 * L + 12) pressRow(ctx, LX + w1 / 2 - 2, (pb + LT) / 2, 0, 1, LT - pb - 30, 36, 1, 0, L, pc);       /* the inner walls above the line */
      if (w2 >= 2 * L + 12) pressRow(ctx, RX - w2 / 2 + 2, (pb + LT) / 2, 0, 1, LT - pb - 30, 36, -1, 0, L, pc);
      pressRow(ctx, (LX + RX) / 2, LT + 2, 1, 0, RX - w2 / 2 - LX - w1 / 2 - 20, 40, 0, -1, L, pc); /* the roof of the line */
      pressRow(ctx, (LX + RX) / 2 + 20, FL - 2, 1, 0, RX + w2 / 2 - LX + w1 / 2 - 60, 40, 0, 1, L, pc); /* the floor */
    }
    piston(ctx, LX, PY, w1, PH); piston(ctx, RX, PY, w2, PH);
    /* the two forces */
    const t1 = push(ctx, LX, pt, 0, 1, F1 * KF, pt - 96, fc);
    const t2 = pushFrom(ctx, RX, pt, 0, -1, F2 * KF, pt - 96, fc);
    if (F1 > 0) {
      text(ctx, 'F_1 = ' + N(F1), LX + w1 / 2 + 12, Math.min((t1.y + pt) / 2, pt - 24), fc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'F_2 = ' + N(F2), RX + w2 / 2 + 12, Math.min((t2.y + pt) / 2, pt - 24), fc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, 'A_1 = ' + fmt(a1, 1) + ' cm²', LX - w1 / 2 - 16, PY, PAL.ink, { size: 22, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'A_2 = ' + fmt(a2, 0) + ' cm²', RX + w2 / 2 + 16, PY, PAL.ink, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, F1 > 0 ? 'P_1 = P_2 = ' + sci(P, 2) + ' N/m²' : 'P_1 = P_2 = 0', (LX + RX) / 2, FL + 40, pc, { size: 22, weight: 600, align: 'center' });
    hits = [
      { x: LX, y: PY, r: w1 / 2 + 6, name: 'the left piston, of area ' + fmt(a1, 1) + ' cm²' },
      { x: RX, y: PY, r: w2 / 2 + 6, name: 'the right piston, of area ' + fmt(a2, 0) + ' cm²' },
      { x: (LX + RX) / 2, y: (LT + FL) / 2, r: 40, name: 'the hydraulic line, part of the one enclosed fluid' },
      { x: LX, y: (pb + LT) / 2, r: 50, name: 'the enclosed fluid' },
      { x: RX, y: (pb + LT) / 2, r: 60, name: 'the enclosed fluid' },
    ];
    topline(ctx, F1 === 0 ? 'With no force on the left piston the pressure in the fluid is not raised, and nothing pushes on the right piston.'
      : 'A force of ' + N(F1) + ' on the ' + fmt(a1, 1) + ' cm² piston raises the pressure everywhere in the fluid by ' + sci(P, 2) + ' N/m², which lifts the ' + fmt(a2, 0) + ' cm² piston with ' + N(F2) + '.');
    readout(d.readout, `\\kProne = \\frac{\\kFone}{A_1} = ${sciTex(P, 2)}\\ \\text{N/m}^2 = \\kPrtwo \\qquad \\kFtwo = \\frac{A_2}{A_1}\\kFone = ${sig3Tex(a2 / a1)}\\times ${fmt(F1, 0)}\\ \\text{N} = ${NTex(F2)}`,
      'The pressure is the same on every wall and under both pistons, so the force on each piston is that one pressure times the piston\u2019s own area, and the right piston, with ' + sig3(a2 / a1) + ' times the area, is pushed with ' + sig3(a2 / a1) + ' times the force. The pistons are at the same height, so no part of the pressure comes from a difference in depth.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.12: the hydraulic brakes of Example 11.6. The push on the pedal
   is multiplied by the pedal's lever, the pedal cylinder turns it into a
   pressure, and the line carries that pressure undiminished to every wheel
   cylinder, each of which pushes out with the same force. Still: the brakes
   are applied and held.
===================================================================== */
(function () {
  const d = sim('sim-brakes', 730);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 200, step: 5, value: 100, unit: 'N', dec: 0, aria: 'the force of the foot on the brake pedal' });
  const D1 = ctl(d.controls, { label: '\\text{pedal cylinder}', cls: '', min: 0.3, max: 1.5, step: 0.05, value: 0.5, unit: 'cm', dec: 2, detents: [0.5], aria: 'the diameter of the pedal cylinder' });
  const D2 = ctl(d.controls, { label: '\\text{wheel cylinder}', cls: '', min: 1, max: 4, step: 0.1, value: 2.5, unit: 'cm', dec: 2, detents: [2.5], aria: 'the diameter of each wheel cylinder' });
  const count = choice(d.controls, { label: '\\text{wheel cylinders}', options: [{ value: '2', label: 'two' }, { value: '4', label: 'four' }], value: '4', aria: 'how many wheel cylinders the line feeds' });
  /* Geometry, fixed: the lever's arms are the book's 0.20 m and 0.040 m at 1400 units per metre; a
     cylinder is drawn 34 units per centimetre of diameter, one scale for both kinds; force arrows are
     0.6 units per newton from the pedal force and broken where the output force outruns its room;
     pressure arrows are 8 to 38 units on the square root of the pressure over its maximum, which is
     the largest pedal force on the narrowest pedal cylinder, 1.41 × 10⁸ N/m². */
  const PV = { x: 300, y: 150 }, ROD = 206, PAD = 420, CX0 = 420, CX1 = 540, KD = 30, KF = 0.6, MAN = 760, WX = 1080, WL = 200, PW = 22;
  const PMAX = (5 * 200) / (Math.PI * 0.0015 * 0.0015), MA = 0.2 / 0.04;
  const rowsOf = (n) => (n === 4 ? [160, 305, 450, 595] : [300, 500]);
  let hits = [];
  function tube(ctx, pts) {
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'butt';
    for (const [c, w] of [[PAL.ink, 14], [PAL.soft, 9]]) { ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
    ctx.restore();
  }
  function cylinder(ctx, x0, x1, yc, h, openLeft) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x0, yc - h / 2, x1 - x0, h);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(x0, yc - h / 2); ctx.lineTo(x1, yc - h / 2); if (!openLeft) ctx.lineTo(x1, yc + h / 2); else ctx.moveTo(x1, yc + h / 2);
    ctx.lineTo(x0, yc + h / 2); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('pressure');
    const Fp = Fs.v, d1 = D1.v, d2 = D2.v, n = +count.value, rows = rowsOf(n);
    const F1 = MA * Fp, a1 = Math.PI * (d1 / 2) ** 2, a2 = Math.PI * (d2 / 2) ** 2, P = F1 / (a1 * 1e-4), F2 = P * a2 * 1e-4;
    const h1 = KD * d1, h2 = KD * d2, L = P > 0 ? 8 + 30 * Math.sqrt(P / PMAX) : 0;
    /* the hydraulic line: out of the bottom of the pedal cylinder, along to the manifold, and a branch to each wheel cylinder */
    const branchY = rows.map((yc) => yc + h2 / 2 + 12);
    tube(ctx, [[520, ROD + h1 / 2], [520, 330], [MAN, 330], [MAN, branchY[0]], [MAN, branchY[branchY.length - 1]]]);
    for (const y of branchY) tube(ctx, [[MAN, y], [WX - 50, y], [WX - 50, y - 14]]);
    /* the pedal and its lever: pivot at the top, the pushrod 0.040 m below it, the pad 0.20 m below it */
    fixed(ctx, PV.x - 30, PV.y - 36, 60, 26);
    line(ctx, PV.x, PV.y, PV.x, PAD + 14, PAL.ink, 9);
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.fillRect(PV.x - 14, PAD + 8, 28, 14); ctx.restore();
    line(ctx, PV.x, ROD, CX0 + 4, ROD, PAL.ink, 6);
    dot(ctx, PV.x, PV.y, PAL.ink, false, 10);
    dot(ctx, PV.x, ROD, PAL.ink, true, 6);
    vbracket(ctx, 250, PV.y, ROD, PAL.ink, '0.040 m', -1);
    vbracket(ctx, 130, PV.y, PAD, PAL.ink, '0.20 m', -1);
    /* the pedal cylinder, its piston on the pushrod, and the pressure in it */
    cylinder(ctx, CX0, CX1, ROD, h1, true);
    piston(ctx, CX0 + 8, ROD, 16, h1);
    if (L > 0) {
      press(ctx, CX0 + 18, ROD, -1, 0, L, pc); press(ctx, CX1 - 2, ROD, 1, 0, L, pc);
      if (h1 / 2 - 4 >= L) for (const x of [460, 500]) { press(ctx, x, ROD - h1 / 2 + 2, 0, -1, L, pc); press(ctx, x, ROD + h1 / 2 - 2, 0, 1, L, pc); }
    }
    vbracket(ctx, CX1 + 22, ROD - h1 / 2, ROD + h1 / 2, PAL.ink, fmt(d1, 2) + ' cm', 1);
    text(ctx, 'A_1 = ' + sig3(a1) + ' cm²', CX0 + 20, ROD - h1 / 2 - 26, PAL.ink, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the wheel cylinders, each with two pistons pushed outward by the same pressure */
    rows.forEach((yc, i) => {
      ctx.save(); ctx.strokeStyle = alpha(PAL.muted, 0.55); ctx.lineWidth = 10; ctx.lineCap = 'butt';
      const R = Math.max(72, h2 / 2 + 30);
      ctx.beginPath(); ctx.arc(WX, yc, R, -0.78, 0.78); ctx.stroke(); ctx.beginPath(); ctx.arc(WX, yc, R, Math.PI - 0.78, Math.PI + 0.78); ctx.stroke(); ctx.restore();
      cylinder(ctx, WX - WL / 2, WX + WL / 2, yc, h2, false);
      piston(ctx, WX - WL / 2 + PW / 2, yc, PW, h2); piston(ctx, WX + WL / 2 - PW / 2, yc, PW, h2);
      if (L > 0) {
        const ys = h2 >= 96 ? [yc - h2 / 4, yc, yc + h2 / 4] : [yc];
        for (const y of ys) { press(ctx, WX - WL / 2 + PW + 2, y, -1, 0, L, pc); press(ctx, WX + WL / 2 - PW - 2, y, 1, 0, L, pc); }
        if (h2 / 2 - 4 >= L) for (const x of [WX - 40, WX, WX + 40]) { press(ctx, x, yc - h2 / 2 + 2, 0, -1, L, pc); press(ctx, x, yc + h2 / 2 - 2, 0, 1, L, pc); }
      }
      const room = 172;
      pushFrom(ctx, WX - WL / 2 - 2, yc, -1, 0, F2 * KF, room, fc);
      pushFrom(ctx, WX + WL / 2 + 2, yc, 1, 0, F2 * KF, room, fc);
      if (i === 0 && F2 > 0) text(ctx, 'F_2 = ' + N(F2), WX + WL / 2 + 2 + Math.max(60, Math.min(F2 * KF, room)) / 2, yc - 28, fc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      if (i === rows.length - 1) {
        vbracket(ctx, WX + 30, yc - h2 / 2, yc + h2 / 2, PAL.ink, undefined, 1);
        text(ctx, fmt(d2, 2) + ' cm', WX + 30, yc + h2 / 2 + 22, PAL.ink, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
        text(ctx, 'A_2 = ' + sig3(a2) + ' cm²', WX + 30, yc + h2 / 2 + 52, PAL.ink, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      }
    });
    /* the foot on the pedal and the force on the pedal cylinder */
    const tf = push(ctx, PV.x - 5, PAD, 1, 0, Fp * KF, 160, fc);
    push(ctx, CX0 + 2, ROD, 1, 0, F1 * KF, CX0 - PV.x - 16, fc);
    if (Fp > 0) {
      text(ctx, 'F = ' + N(Fp), tf.x - 10, PAD, fc, { size: 22, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'F_1 = ' + N(F1), (PV.x + CX0) / 2 + 6, ROD - 34, fc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    }
    hits = [
      { x: PV.x, y: PAD + 6, r: 30, name: 'the brake pedal, pushed by the driver\u2019s foot with ' + N(Fp) },
      { x: PV.x, y: PV.y, r: 22, name: 'the pivot of the pedal\u2019s lever' },
      { x: PV.x, y: ROD, r: 16, name: 'the pushrod, carrying ' + N(F1) + ' to the pedal cylinder' },
      { x: (CX0 + CX1) / 2, y: ROD, r: 44, name: 'the pedal cylinder, ' + fmt(d1, 2) + ' cm across' },
      { x: MAN, y: (330 + branchY[branchY.length - 1]) / 2, r: 40, name: 'the hydraulic line, carrying the same pressure to every wheel cylinder' },
      ...rows.map((yc, i) => ({ x: WX, y: yc, r: 70, name: 'wheel cylinder ' + (i + 1) + ', ' + fmt(d2, 2) + ' cm across, pushing out with ' + N(F2) + ' on each side' })),
    ];
    const word = n === 4 ? 'four' : 'two';
    topline(ctx, Fp === 0 ? 'With no push on the pedal there is no force on the pedal cylinder, no pressure in the line, and nothing at the wheels.'
      : 'A push of ' + N(Fp) + ' on the pedal becomes ' + N(F1) + ' on the pedal cylinder, and the pressure it makes gives each of the ' + word + ' wheel cylinders ' + N(F2) + '.');
    readout(d.readout, `\\kFtwo = \\frac{A_2}{A_1}\\kFone = \\frac{\\pi r_2^2}{\\pi r_1^2}\\kFone = \\frac{(${sig3Tex(d2 / 2)}\\ \\text{cm})^2}{(${sig3Tex(d1 / 2)}\\ \\text{cm})^2}\\times ${NTex(F1)} = ${NTex(F2)}`,
      'The lever\u2019s arms are 0.20 m and 0.040 m, so the ' + N(Fp) + ' on the pedal becomes F\u2081 = ' + N(F1) + ' on the pedal cylinder. That force on ' + sig3(a1) + ' cm² makes a pressure of ' + sci(P, 2) + ' N/m², and the fluid carries the same pressure to every wheel cylinder, so each pushes out with the same ' + N(F2) + ' whether there are two of them or four.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: force is multiplied, but work is not. The small piston of Figure
   11.11 is pushed down a chosen distance; the fluid it sweeps out goes under
   the large piston, which rises by the smaller distance that takes the same
   volume, so the larger force moves the shorter way and the two products of
   force and distance agree. Still: the picture is the before and after of
   one push, and the push is the reader's slider.
===================================================================== */
(function () {
  const d = sim('sim-hydraulic-work', 700);
  const Fs = ctl(d.controls, { label: '\\kFone', cls: 'force', min: 0, max: 500, step: 10, value: 100, unit: 'N', dec: 0, aria: 'the force on the small piston' });
  const A2 = ctl(d.controls, { label: 'A_2', cls: '', min: 10, max: 250, step: 5, value: 50, unit: 'cm²', dec: 0, detents: [50], aria: 'the area of the large piston' });
  const Ds = ctl(d.controls, { label: 'd_1', cls: '', min: 0, max: 10, step: 0.25, value: 5, unit: 'cm', dec: 2, aria: 'how far the small piston is pushed down' });
  /* Geometry, fixed: the pistons start level at y = 400, the small one drawn for its fixed 10.0 cm²,
     both as wide as their diameters at 24 units per centimetre; a piston's travel is 12 units per
     centimetre, so the small piston at 10.0 cm sits 120 units below its start and the large one can
     rise by at most the same; force arrows are 0.55 units per newton as in Figure 11.11. */
  const A1 = 10, LX = 380, RX = 980, Y0 = 400, PH = 28, TOP = 200, LT = 560, FL = 600, KW = 24, KD = 12, KF = 0.55;
  let hits = [];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force');
    const F1 = Fs.v, a2 = A2.v, d1 = Ds.v, d2 = d1 * A1 / a2, F2 = F1 * a2 / A1, V = A1 * d1, W = F1 * d1 / 100;
    const w1 = KW * Math.sqrt(A1), w2 = KW * Math.sqrt(a2), y1 = Y0 + KD * d1, y2 = Y0 - KD * d2;
    vessel(ctx, LX, w1, RX, w2, TOP, LT, FL, y1 + PH / 2, y2 + PH / 2);
    /* where each piston started, and the volume that moved */
    if (d1 > 0) {
      piston(ctx, LX, Y0, w1, PH, true); piston(ctx, RX, Y0, w2, PH, true);
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
      ctx.strokeRect(LX - w1 / 2 + 4, Y0 + PH / 2, w1 - 8, y1 - Y0);
      ctx.strokeRect(RX - w2 / 2 + 4, y2 + PH / 2, w2 - 8, Y0 - y2);
      ctx.restore();
      vbracket(ctx, LX - w1 / 2 - 30, Y0, y1, PAL.ink, 'd_1 = ' + sig3(d1) + ' cm', -1);
      vbracket(ctx, RX + w2 / 2 + 30, y2, Y0, PAL.ink, 'd_2 = ' + sig3(d2) + ' cm', 1);
      text(ctx, 'A_1 d_1 = ' + sig3(V) + ' cm³', LX - w1 / 2 - 46, (Y0 + y1) / 2 + 30, PAL.muted, { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'A_2 d_2 = ' + sig3(V) + ' cm³', RX + w2 / 2 + 46, (Y0 + y2) / 2 + 30, PAL.muted, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    piston(ctx, LX, y1, w1, PH); piston(ctx, RX, y2, w2, PH);
    const pt1 = y1 - PH / 2, pt2 = y2 - PH / 2;
    const t1 = push(ctx, LX, pt1, 0, 1, F1 * KF, pt1 - 96, fc);
    const t2 = pushFrom(ctx, RX, pt2, 0, -1, F2 * KF, pt2 - 96, fc);
    if (F1 > 0) {
      text(ctx, 'F_1 = ' + N(F1), LX + w1 / 2 + 12, Math.min((t1.y + pt1) / 2, pt1 - 24), fc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'F_2 = ' + N(F2), RX - w2 / 2 - 12, Math.min((t2.y + pt2) / 2, pt2 - 24), fc, { size: 22, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, 'A_1 = ' + fmt(A1, 1) + ' cm²', LX, FL + 40, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'A_2 = ' + fmt(a2, 0) + ' cm²', RX, FL + 40, PAL.ink, { size: 22, weight: 600, align: 'center' });
    hits = [
      { x: LX, y: y1, r: w1 / 2 + 6, name: 'the small piston, of area 10.0 cm², pushed down ' + sig3(d1) + ' cm' },
      { x: RX, y: y2, r: w2 / 2 + 6, name: 'the large piston, of area ' + fmt(a2, 0) + ' cm², raised ' + sig3(d2) + ' cm' },
      { x: (LX + RX) / 2, y: (LT + FL) / 2, r: 40, name: 'the enclosed fluid, whose volume does not change' },
    ];
    topline(ctx, d1 === 0 ? 'Until the small piston is pushed down, no fluid moves, the large piston stays where it is, and no work is done.'
      : F1 === 0 ? 'With no force on the small piston, pushing it ' + sig3(d1) + ' cm moves ' + sig3(V) + ' cm³ of fluid and raises the large piston ' + sig3(d2) + ' cm, but no work is done.'
      : 'Pushing the small piston down ' + sig3(d1) + ' cm moves ' + sig3(V) + ' cm³ of fluid across and raises the large piston ' + sig3(d2) + ' cm, so ' + N(F2) + ' through ' + sig3(d2) + ' cm is the same work as ' + N(F1) + ' through ' + sig3(d1) + ' cm.');
    readout(d.readout, `\\kFtwo d_2 = \\kFone d_1:\\quad (${NTex(F2)})(${sig3Tex(d2 / 100)}\\ \\text{m}) = (${NTex(F1)})(${sig3Tex(d1 / 100)}\\ \\text{m}) = ${sig3Tex(W)}\\ \\text{J}`,
      'The force is multiplied by A\u2082/A\u2081 = ' + sig3(a2 / A1) + ' and the distance is divided by the same factor, because the volume of the fluid does not change: A\u2081d\u2081 = A\u2082d\u2082 = ' + sig3(V) + ' cm³, so the large piston moves only ' + sig3(A1 / a2) + ' times as far as the small one. The work done on the small piston and the work done by the large one are both ' + sig3(W) + ' J, which is what conservation of energy requires of a machine with no friction.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();
};
