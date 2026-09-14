/* Figures for section 15.5 Applications of Thermodynamics: Heat Pumps and Refrigerators.
   Boots against the section's text article. A heat pump between two fixed
   temperatures has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider's or a
   choice's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, topline, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const K0 = 273.15;
const kelvin = (c) => c + K0;
/* a number written with the typographic minus */
const num = (v, d) => (v < 0 && Math.abs(v) >= 0.5 * Math.pow(10, -d) ? '−' : '') + fmt(Math.abs(v), d);
/* a wide arrow for an energy in transit: the shaft is w wide, the head wider,
   so the size of a transfer is read from the width of its arrow */
function fat(ctx, x1, y1, x2, y2, w, color) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
  const hw = w + 22, hl = Math.min(L * 0.55, 0.55 * w + 22), bx = x2 - hl * ux, by = y2 - hl * uy;
  ctx.save(); ctx.fillStyle = alpha(color, 0.78); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x1 + nx * w / 2, y1 + ny * w / 2); ctx.lineTo(bx + nx * w / 2, by + ny * w / 2); ctx.lineTo(bx + nx * hw / 2, by + ny * hw / 2);
  ctx.lineTo(x2, y2); ctx.lineTo(bx - nx * hw / 2, by - ny * hw / 2); ctx.lineTo(bx - nx * w / 2, by - ny * w / 2); ctx.lineTo(x1 - nx * w / 2, y1 - ny * w / 2);
  ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a reservoir, drawn in ink as every body is, its temperature in the temperature hue */
function reservoir(ctx, x, y, w, h, name, tlabel) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h); ctx.restore();
  text(ctx, name, x + w / 2, y + h / 2 - 16, PAL.muted, { size: 19, align: 'center' });
  text(ctx, tlabel, x + w / 2, y + h / 2 + 16, C('temperature'), { size: 22, weight: 600, align: 'center' });
}
/* the machine, a circle in ink with its name inside */
function machine(ctx, x, y, r, name) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, name, x, y, PAL.ink, { size: 20, weight: 600, align: 'center' });
}
/* diagonal hatching inside the current path, for an area that counts as negative */
function hatch(ctx, pathFn, color) {
  ctx.save(); ctx.beginPath(); pathFn(); ctx.clip(); ctx.strokeStyle = alpha(color, 0.75); ctx.lineWidth = 2;
  ctx.beginPath(); for (let s = -800; s < 1400; s += 16) { ctx.moveTo(s, 700); ctx.lineTo(s + 700, 0); } ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 15.26: the heat pump's three arrows and the reversed Carnot loop.
   The same cycle drawn as an engine and as a pump: a choice turns every
   arrow and the walk round the loop about together, and the two reservoir
   temperatures set the sizes. Still: what the figure teaches is which way
   the transfers go and that Q_h = Q_c + W, which one state shows.
===================================================================== */
(function () {
  const d = sim('sim-heat-pump-backward', 640);
  const mode = choice(d.controls, { label: '\\text{the cycle}', options: [{ value: 'engine', label: 'heat engine' }, { value: 'pump', label: 'heat pump' }], value: 'pump', aria: 'whether the cycle is run as a heat engine or as a heat pump' });
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 300, max: 400, step: 2, value: 318, unit: 'K', dec: 0, aria: 'the hot reservoir temperature' });
  const tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 220, max: 300, step: 2, value: 258, unit: 'K', dec: 0, aria: 'the cold reservoir temperature' });
  /* a fixed amount of gas, nR = 2 J/K, expanded from 2.0 L to 4.0 L on the hot isotherm;
     with V in litres and P in kPa, PV is in joules. Axes fixed at V 0 to 10 L and P 0 to
     500 kPa, which hold the loop at both slider extremes (V_C = 9.8 L at 400 K and 220 K,
     P_A = 400 kPa at 400 K). */
  const NR = 2, VA = 2.0, VB = 4.0, GAM = 5 / 3;
  const box = { l: 780, r: 1340, t: 130, b: 540 };
  const MX = 290, HOT = { x: 110, y: 90, w: 360, h: 100 }, COLD = { x: 110, y: 500, w: 360, h: 100 }, MY = 345, MR = 78;
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure'), tcol = C('temperature');
    const Th = th.v, Tc = tc.v, pump = mode.value === 'pump';
    const Qh = NR * Th * Math.log(VB / VA), Qc = NR * Tc * Math.log(VB / VA), W = Qh - Qc;
    const wOf = (Q) => Math.max(3, Q / 8);
    /* ---- the schematic: hot reservoir above, cold below, the machine between ---- */
    reservoir(ctx, HOT.x, HOT.y, HOT.w, HOT.h, 'hot reservoir', 'T_h = ' + fmt(Th, 0) + ' K');
    reservoir(ctx, COLD.x, COLD.y, COLD.w, COLD.h, 'cold reservoir', 'T_c = ' + fmt(Tc, 0) + ' K');
    const top = HOT.y + HOT.h, bot = COLD.y;
    if (pump) {
      if (Qc > 0) fat(ctx, MX, bot, MX, MY + MR + 2, wOf(Qc), ec);
      fat(ctx, MX, MY - MR - 2, MX, top, wOf(Qh), ec);
      if (W > 0.5) fat(ctx, 600, MY, MX + MR + 2, MY, wOf(W), ec);
    } else {
      fat(ctx, MX, top, MX, MY - MR - 2, wOf(Qh), ec);
      if (Qc > 0) fat(ctx, MX, MY + MR + 2, MX, bot, wOf(Qc), ec);
      if (W > 0.5) fat(ctx, MX + MR + 2, MY, 600, MY, wOf(W), ec);
    }
    machine(ctx, MX, MY, MR, pump ? 'heat pump' : 'heat engine');
    text(ctx, 'Q_h = ' + fmt(Qh, 0) + ' J', MX - wOf(Qh) / 2 - 22, (top + MY - MR) / 2, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'Q_c = ' + fmt(Qc, 0) + ' J', MX - wOf(Qc) / 2 - 22, (bot + MY + MR) / 2, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'W = ' + fmt(W, 0) + ' J', 500, MY - wOf(W) / 2 - 30, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, pump ? 'work put in' : 'work got out', 500, MY + wOf(W) / 2 + 30, PAL.muted, { size: 17, align: 'center' });
    /* ---- the PV diagram: pressure wears its hue on the vertical axis, volume is ink ---- */
    const { X, Y } = axes(ctx, box, [0, 10], [0, 500], { xl: 'V (L)', yl: 'P (kPa)', yc: pc, nx: 5, ny: 5 });
    const k = 1 / (GAM - 1), VC = VB * Math.pow(Th / Tc, k), VD = VA * Math.pow(Th / Tc, k);
    const Ph = (V) => NR * Th / V, Pc = (V) => NR * Tc / V;
    const adia = (V0, T0) => (V) => NR * T0 / V0 * Math.pow(V0 / V, GAM);   /* the adiabat through (V0, T0) */
    const aBC = adia(VB, Th), aDA = adia(VA, Th);
    const walk = (fn) => {
      const N = 40, seg = (f, v0, v1, first) => { for (let i = 0; i <= N; i++) { const V = v0 + (v1 - v0) * i / N; const p = [X(V), Y(f(V))]; if (first && i === 0) fn.move(p); else fn.line(p); } };
      seg(Ph, VA, VB, true); seg(aBC, VB, VC, false); seg(Pc, VC, VD, false); seg(aDA, VD, VA, false);
    };
    const pathFn = () => walk({ move: (p) => ctx.moveTo(p[0], p[1]), line: (p) => ctx.lineTo(p[0], p[1]) });
    /* the two isotherms extended beyond the loop, as the book dashes them */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
    for (const [f, v0, v1] of [[Ph, Math.max(0.9, NR * Th / 500), Math.min(10, VB * 1.5)], [Pc, Math.max(0.9, NR * Tc / 500), 8.5]]) {
      ctx.beginPath(); for (let i = 0; i <= 60; i++) { const V = v0 + (v1 - v0) * i / 60; const p = Math.min(500, f(V)); if (i) ctx.lineTo(X(V), Y(p)); else ctx.moveTo(X(V), Y(p)); } ctx.stroke();
    }
    ctx.restore();
    /* the area inside the loop is the work: filled for an engine, hatched for a pump */
    if (W > 0.5) {
      if (pump) hatch(ctx, pathFn, ec);
      else { ctx.save(); ctx.fillStyle = alpha(ec, 0.28); ctx.beginPath(); pathFn(); ctx.fill(); ctx.restore(); }
    }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); pathFn(); ctx.closePath(); ctx.stroke(); ctx.restore();
    /* the way the loop is walked: an arrowhead at the middle of each leg */
    const legs = [[Ph, VA, VB], [aBC, VB, VC], [Pc, VC, VD], [aDA, VD, VA]];
    for (const [f, v0, v1] of legs) {
      const vm = (v0 + v1) / 2, dv = (v1 - v0) * 0.02 * (pump ? -1 : 1);
      const ax = X(vm - dv), ay = Y(f(vm - dv)), bx = X(vm + dv), by = Y(f(vm + dv));
      const L = Math.hypot(bx - ax, by - ay); if (L > 1) arrow(ctx, ax, ay, ax + (bx - ax) / L * 26, ay + (by - ay) / L * 26, PAL.ink, 4);
    }
    /* the corners and the isotherms named */
    const corners = [['A', VA, Ph(VA), -20, -8, 'right'], ['B', VB, Ph(VB), 16, -14, 'left'], ['C', VC, Pc(VC), 6, 26, 'left'], ['D', VD, Pc(VD), -18, 20, 'right']];
    for (const [nm, V, P, dx, dy, al] of corners) { dot(ctx, X(V), Y(P), PAL.ink, true, 7); text(ctx, nm, X(V) + dx, Y(P) + dy, PAL.ink, { size: 22, weight: 600, align: al, bg: alpha(PAL.panel, 0.85) }); }
    text(ctx, 'isotherm at T_h', X(Math.max(0.9, NR * Th / 500)) + 16, box.t + 18, tcol, { size: 18, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'isotherm at T_c', X(10) - 8, Y(Pc(8.5)) - 26, tcol, { size: 18, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the two heat transfers at the isotherms: in on one, out on the other */
    const hx = X((VA + VB) / 2), hy = Y(Ph((VA + VB) / 2)), vq = VD + 0.3 * (VC - VD), cx = X(vq), cy = Y(Pc(vq));
    const cb = Math.min(cy + 84, box.b - 4);      /* the cold arrow stays inside the axes when the loop sits low */
    if (pump) { fat(ctx, hx, hy - 14, hx, hy - 84, 12, ec); fat(ctx, cx, cb, cx, cy + 14, 12, ec); }
    else { fat(ctx, hx, hy - 84, hx, hy - 14, 12, ec); fat(ctx, cx, cy + 14, cx, cb, 12, ec); }
    text(ctx, 'Q_h', hx + 26, hy - 50, ec, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'Q_c', cx - 26, (cy + 14 + cb) / 2, ec, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, pump ? 'walked ADCBA, a net work input' : 'walked ABCDA, a net work output', box.l, box.b + 58, PAL.muted, { size: 17 });
    topline(ctx, W < 0.5
      ? 'With both reservoirs at ' + fmt(Th, 0) + ' K the loop has no area, so no work is needed as a pump and none is got out as an engine.'
      : pump
        ? 'Run as a heat pump between ' + fmt(Tc, 0) + ' K and ' + fmt(Th, 0) + ' K, the cycle takes ' + fmt(Qc, 0) + ' J from the cold reservoir and ' + fmt(W, 0) + ' J of work and delivers ' + fmt(Qh, 0) + ' J to the hot reservoir.'
        : 'Run as a heat engine between ' + fmt(Th, 0) + ' K and ' + fmt(Tc, 0) + ' K, the cycle takes ' + fmt(Qh, 0) + ' J from the hot reservoir, gives out ' + fmt(W, 0) + ' J of work and rejects ' + fmt(Qc, 0) + ' J to the cold reservoir.');
    readout(d.readout, pump
      ? `\\kQH = \\kQC + \\kW = ${fmt(Qc, 0)}\\ \\text{J} + ${fmt(W, 0)}\\ \\text{J} = ${fmt(Qh, 0)}\\ \\text{J}`
      : `\\kW = \\kQH - \\kQC = ${fmt(Qh, 0)}\\ \\text{J} - ${fmt(Qc, 0)}\\ \\text{J} = ${fmt(W, 0)}\\ \\text{J}`,
      'The Carnot cycle fixes Q_c/Q_h = T_c/T_h = ' + fmt(Tc / Th, 3) + ', and the area inside the loop is the work: the closer the two temperatures, the thinner the loop and the less work a cycle needs as a pump or gives as an engine. Run backward, every transfer keeps its size and turns about.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.27: the four components of a heat pump. A choice swaps heating
   for cooling, reversing the flow and exchanging the roles of the two
   coils, which the text says in one sentence and the book never draws.
   Still: an animation of the fluid would replay the book's arrows; the
   arrowheads on the pipe say which way it flows.
===================================================================== */
(function () {
  const d = sim('sim-heat-pump-components', 640);
  const mode = choice(d.controls, { label: '\\text{the mode}', options: [{ value: 'heat', label: 'heating' }, { value: 'cool', label: 'cooling' }], value: 'heat', aria: 'whether the heat pump is warming or cooling the room' });
  const WX = 700, TOP = 200, BOT = 500, OX = 430, IX = 970, CW = 150, CH = 190, CY = 350;
  const parts = () => {
    const heating = mode.value === 'heat';
    return [
      { x: OX, y: CY, r: 100, name: heating ? 'Evaporator (3): the working fluid boils here and takes heat transfer Q_c from the cold outdoor air' : 'Condenser (1): the hot gas condenses here and gives heat transfer Q_h to the outdoor air' },
      { x: IX, y: CY, r: 100, name: heating ? 'Condenser (1): the hot gas condenses here and gives heat transfer Q_h to the room' : 'Evaporator (3): the working fluid boils here and takes heat transfer Q_c from the room' },
      { x: WX, y: TOP, r: 36, name: 'Expansion valve (2): the liquid drops in pressure and cools as it expands' },
      { x: WX, y: BOT, r: 40, name: 'Compressor (4): the electrically driven pump that raises the temperature and pressure of the gas' },
    ];
  };
  hover(d.stage, parts);
  function coil(ctx, x, y, w, h) {
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.roundRect(x - w / 2, y - h / 2, w, h, 22); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath();
    for (let k = -2; k <= 2; k++) { ctx.moveTo(x - w / 2 + 12, y + k * 22); ctx.lineTo(x + w / 2 - 12, y + k * 22); }
    ctx.stroke(); ctx.restore();
  }
  function pipe(ctx, pts) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); }
  function head(ctx, x, y, dx, dy) { arrow(ctx, x - dx * 14, y - dy * 14, x + dx * 14, y + dy * 14, PAL.ink, 6); }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), heating = mode.value === 'heat';
    /* the wall, and which side is which */
    line(ctx, WX, 130, WX, 610, PAL.muted, 3, [12, 10]);
    text(ctx, 'outside', WX - 16, 112, PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'inside', WX + 16, 112, PAL.ink, { size: 20, weight: 600 });
    /* the loop of pipe through the four components */
    pipe(ctx, [[OX, CY - CH / 2], [OX, TOP + 26], [OX + 26, TOP], [WX - 36, TOP]]);
    pipe(ctx, [[WX + 36, TOP], [IX - 26, TOP], [IX, TOP + 26], [IX, CY - CH / 2]]);
    pipe(ctx, [[IX, CY + CH / 2], [IX, BOT - 26], [IX - 26, BOT], [WX + 40, BOT]]);
    pipe(ctx, [[WX - 40, BOT], [OX + 26, BOT], [OX, BOT - 26], [OX, CY + CH / 2]]);
    /* which way the fluid flows: down the outdoor side and along the bottom in heating mode, the reverse in cooling */
    const s = heating ? 1 : -1;
    head(ctx, (OX + WX - 40) / 2, BOT, s, 0); head(ctx, (WX + 40 + IX) / 2, BOT, s, 0);
    head(ctx, (WX + 36 + IX) / 2, TOP, -s, 0); head(ctx, (OX + WX - 36) / 2, TOP, -s, 0);
    /* the four components */
    coil(ctx, OX, CY, CW, CH); coil(ctx, IX, CY, CW, CH);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(WX, TOP, 30, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(WX, BOT, 34, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, WX - 16, TOP - 16, WX + 16, TOP + 16, PAL.ink, 3); line(ctx, WX - 16, TOP + 16, WX + 16, TOP - 16, PAL.ink, 3);
    text(ctx, '4', WX, BOT, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, heating ? '3' : '1', OX, CY, PAL.ink, { size: 26, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, heating ? '1' : '3', IX, CY, PAL.ink, { size: 26, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'expansion valve (2)', WX, TOP - 52, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'compressor (4)', WX - 48, BOT + 44, PAL.ink, { size: 19, weight: 600, align: 'right' });
    text(ctx, 'outdoor coil', OX, CY - CH / 2 + 24, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, heating ? 'evaporator (3)' : 'condenser (1)', OX, CY + CH / 2 - 24, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'indoor coil', IX, CY - CH / 2 + 24, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, heating ? 'condenser (1)' : 'evaporator (3)', IX, CY + CH / 2 - 24, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    /* the state of the fluid on each leg */
    const gas = 'gas, low pressure', hot = 'hot gas, high pressure', liq = 'liquid, high pressure', cold = 'cold liquid and gas';
    text(ctx, heating ? gas : hot, (OX + WX - 40) / 2, BOT - 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, heating ? hot : gas, (WX + 40 + IX) / 2, BOT - 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, heating ? cold : liq, (OX + WX - 36) / 2, TOP + 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, heating ? liq : cold, (WX + 36 + IX) / 2, TOP + 30, PAL.muted, { size: 17, align: 'center' });
    /* the three transfers across the boundary: heat into the evaporator, heat out of the condenser, work into the compressor */
    const QC = 26, QH = 38, WW = 12;
    const L0 = 120, L1 = OX - CW / 2 - 4, R0 = IX + CW / 2 + 4, R1 = 1300;
    if (heating) {
      fat(ctx, L0, CY, L1, CY, QC, ec); text(ctx, 'Q_c', L0, CY - 44, ec, { size: 21, weight: 600 }); text(ctx, 'from the cold outdoor air', L0, CY + 44, PAL.muted, { size: 17 });
      fat(ctx, R0, CY, R1, CY, QH, ec); text(ctx, 'Q_h', R0, CY - 50, ec, { size: 21, weight: 600 }); text(ctx, 'into the room', R0, CY + 50, PAL.muted, { size: 17 });
    } else {
      fat(ctx, R1, CY, R0, CY, QC, ec); text(ctx, 'Q_c', R0, CY - 44, ec, { size: 21, weight: 600 }); text(ctx, 'from the room', R0, CY + 44, PAL.muted, { size: 17 });
      fat(ctx, L1, CY, L0, CY, QH, ec); text(ctx, 'Q_h', L0, CY - 50, ec, { size: 21, weight: 600 }); text(ctx, 'into the outdoor air', L0, CY + 50, PAL.muted, { size: 17 });
    }
    fat(ctx, WX, 612, WX, BOT + 38, WW, ec); text(ctx, 'W, electrical', WX + 22, 585, ec, { size: 19, weight: 600 });
    topline(ctx, heating
      ? 'In heating mode the working fluid takes Q_c from the outdoor air and delivers Q_h = Q_c + W to the room.'
      : 'In cooling mode the flow is reversed: the fluid takes Q_c from the room and delivers Q_h = Q_c + W to the outdoor air.');
    readout(d.readout, '\\kQH = \\kQC + \\kW', heating
      ? 'In heating mode the outdoor coil is the evaporator, where heat transfer Q_c occurs into the working fluid from the cold air and the fluid boils, and the indoor coil is the condenser, where the hot gas the compressor has made gives Q_h to the room as it condenses. The expansion valve drops the liquid’s pressure so that it is cold again when it reaches the outdoor coil.'
      : 'In cooling mode the two coils exchange roles and the flow reverses: the indoor coil is the evaporator, where heat transfer Q_c occurs from the room into the working fluid, and the outdoor coil is the condenser, where the hot gas gives Q_h to the outdoor air. The compressor still supplies the work W, and the room is cooled by the same machine that warmed it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.28: a real heat pump, some of whose work input is lost to
   friction before it reaches the pump. Still: it answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-friction', 640);
  const ws = ctl(d.controls, { label: '\\kW', cls: 'energy', min: 20, max: 200, step: 5, value: 100, unit: 'J', dec: 0, aria: 'the work put in' });
  const fs = ctl(d.controls, { label: '\\text{lost to friction}', cls: '', min: 0, max: 60, step: 5, value: 20, unit: '%', dec: 0, aria: 'the share of the work lost to friction' });
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 25, max: 80, step: 1, value: 45, unit: '°C', dec: 1, aria: 'the hot reservoir temperature' });
  const tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: -40, max: 15, step: 1, value: -15, unit: '°C', dec: 1, aria: 'the cold reservoir temperature' });
  const MX = 400, MY = 345, MR = 80, HOT = { x: 200, y: 90, w: 480, h: 100 }, COLD = { x: 200, y: 500, w: 480, h: 100 }, JX = 590, PX = 900;
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const W = ws.v, f = fs.v / 100, r = kelvin(tc.v) / kelvin(th.v);
    const Wp = W * (1 - f), Qf = W - Wp, Qh = Wp / (1 - r), Qc = Qh - Wp, cop = Qh / W, cop0 = 1 / (1 - r);
    const wOf = (Q) => Math.max(3, 92 * Q / Qh);     /* widths in proportion, the delivered heat transfer widest */
    reservoir(ctx, HOT.x, HOT.y, HOT.w, HOT.h, 'hot reservoir', 'T_h = ' + num(th.v, 1) + ' °C');
    reservoir(ctx, COLD.x, COLD.y, COLD.w, COLD.h, 'cold reservoir', 'T_c = ' + num(tc.v, 1) + ' °C');
    const top = HOT.y + HOT.h, bot = COLD.y;
    /* the work arrives from the right and splits at a junction: W′ on into the pump, Q_f down to the cold reservoir */
    fat(ctx, 800, MY, JX + 8, MY, wOf(W), ec);
    if (Wp > 0.01) fat(ctx, JX + 8, MY, MX + MR + 2, MY, wOf(Wp), ec);
    if (Qf > 0.01) fat(ctx, JX, MY + wOf(W) / 2, JX, bot, wOf(Qf), ec);
    fat(ctx, MX, bot, MX, MY + MR + 2, wOf(Qc), ec);
    fat(ctx, MX, MY - MR - 2, MX, top, wOf(Qh), ec);
    machine(ctx, MX, MY, MR, 'heat pump');
    text(ctx, 'Q_h = ' + fmt(Qh, 0) + ' J', MX - wOf(Qh) / 2 - 20, (top + MY - MR) / 2, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'Q_c = ' + fmt(Qc, 0) + ' J', MX - wOf(Qc) / 2 - 20, (bot + MY + MR) / 2, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'W = ' + fmt(W, 0) + ' J', 700, MY - wOf(W) / 2 - 28, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (Wp > 0.01) text(ctx, 'W′ = ' + fmt(Wp, 0) + ' J', (JX + MX + MR) / 2, MY - wOf(Wp) / 2 - 26, ec, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (Qf > 0.01) text(ctx, 'Q_f = ' + fmt(Qf, 0) + ' J', JX + wOf(Qf) / 2 + 16, (MY + bot) / 2 + 20, ec, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    if (Qf > 0.01) text(ctx, 'lost to the cold reservoir', JX + wOf(Qf) / 2 + 16, (MY + bot) / 2 + 50, PAL.muted, { size: 17 });
    /* what the pump makes of it, read at the right */
    text(ctx, 'what you pay for and what you get', PX, 150, PAL.muted, { size: 19 });
    text(ctx, 'W = ' + fmt(W, 0) + ' J put in', PX, 196, ec, { size: 22, weight: 600 });
    text(ctx, 'W′ = ' + fmt(Wp, 0) + ' J reaches the pump', PX, 238, ec, { size: 22, weight: 600 });
    text(ctx, 'Q_f = ' + fmt(Qf, 0) + ' J lost to friction', PX, 280, ec, { size: 22, weight: 600 });
    text(ctx, 'Q_h = ' + fmt(Qh, 0) + ' J delivered', PX, 322, ec, { size: 22, weight: 600 });
    text(ctx, 'COP_hp = Q_h/W = ' + fmt(cop, 2), PX, 372, PAL.ink, { size: 22, weight: 600 });
    text(ctx, 'without friction it would be ' + fmt(cop0, 2), PX, 410, PAL.muted, { size: 19 });
    topline(ctx, Qf < 0.01
      ? 'All ' + fmt(W, 0) + ' J of work reaches the pump, which delivers ' + fmt(Qh, 0) + ' J to the hot reservoir, the best these two temperatures allow.'
      : 'Of ' + fmt(W, 0) + ' J of work put in, ' + fmt(Qf, 0) + ' J is lost to friction, and the ' + fmt(Wp, 0) + ' J that reaches the pump delivers ' + fmt(Qh, 0) + ' J to the hot reservoir instead of ' + fmt(cop0 * W, 0) + ' J.');
    readout(d.readout, `\\kQH = \\kQC + \\kWprime = ${fmt(Qc, 0)}\\ \\text{J} + ${fmt(Wp, 0)}\\ \\text{J} = ${fmt(Qh, 0)}\\ \\text{J}`,
      'The coefficient of performance is judged on the work you pay for, COP_hp = Q_h/W = ' + fmt(cop, 2) + ', against the ' + fmt(cop0, 2) + ' a pump with no friction would give between ' + num(tc.v, 1) + ' °C and ' + num(th.v, 1) + ' °C. The pump itself is taken to be the best possible, so Q_c/Q_h = T_c/T_h in kelvins, and every joule lost to friction is a joule that never lifts anything from the cold reservoir.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.29: the heat pump of Example 15.5 across a house wall, with
   the coefficient of performance drawn against the cold reservoir
   temperature below. Still: a pump between two fixed temperatures has no
   time in it.
===================================================================== */
(function () {
  const d = sim('sim-heat-pump-house', 820);
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 25, max: 80, step: 0.5, value: 45, unit: '°C', dec: 1, aria: 'the hot reservoir temperature the working fluid reaches indoors' });
  const tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: -40, max: -5, step: 0.5, value: -15, unit: '°C', dec: 1, aria: 'the cold reservoir temperature the working fluid reaches outdoors' });
  const OUT = -5, IN = 20, WX = 700, GY = 470;
  /* the graph's axes are fixed at −40 to 15 °C and 0 to 12, whatever the sliders do */
  const box = { l: 200, r: 1300, t: 540, b: 740 };
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), tcol = C('temperature');
    const Th = th.v, Tc = tc.v, ThK = kelvin(Th), TcK = kelvin(Tc), eff = 1 - TcK / ThK, cop = 1 / eff;
    /* ---- the house and the outside ---- */
    line(ctx, 60, GY, 1340, GY, PAL.muted, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(WX, GY); ctx.lineTo(WX, 190); ctx.lineTo(1000, 128); ctx.lineTo(1300, 190); ctx.lineTo(1300, GY); ctx.stroke(); ctx.restore();
    text(ctx, 'wall', WX + 14, 208, PAL.muted, { size: 17 });
    text(ctx, 'inside air ' + fmt(IN, 0) + ' °C', 1000, 214, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'outside air ' + num(OUT, 0) + ' °C', 300, 214, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* ---- the pump across the wall: the outdoor coil and the indoor coil ---- */
    const CY = 320, CH = 120, OC = { x: 520, w: 180 }, IC = { x: 700, w: 180 };
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(OC.x, CY - CH / 2, OC.w + IC.w, CH); ctx.strokeRect(OC.x, CY - CH / 2, OC.w + IC.w, CH); ctx.restore();
    line(ctx, WX, CY - CH / 2, WX, CY + CH / 2, PAL.ink, 3);
    text(ctx, 'outdoor coil', OC.x + OC.w / 2, CY - 22, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'T_c = ' + num(Tc, 1) + ' °C', OC.x + OC.w / 2, CY + 14, tcol, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'indoor coil', IC.x + IC.w / 2, CY - 22, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'T_h = ' + fmt(Th, 1) + ' °C', IC.x + IC.w / 2, CY + 14, tcol, { size: 22, weight: 600, align: 'center' });
    /* ---- the three transfers, drawn in units of the work ---- */
    const U = 11, wQh = Math.min(100, U * cop), wQc = Math.min(100, U * (cop - 1)), wW = U;
    fat(ctx, 330, CY, OC.x - 4, CY, wQc, ec);
    text(ctx, 'Q_c = ' + fmt(cop - 1, 2) + ' W', 300, CY - wQc / 2 - 26, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'from the cold air, at no cost', 300, CY + wQc / 2 + 30, PAL.muted, { size: 17, align: 'center' });
    fat(ctx, IC.x + IC.w + 4, CY, 1080, CY, wQh, ec);
    text(ctx, 'Q_h = ' + fmt(cop, 2) + ' W', 1170, CY - wQh / 2 - 26, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'into the house', 1170, CY + wQh / 2 + 30, PAL.muted, { size: 17, align: 'center' });
    fat(ctx, 790, GY - 6, 790, CY + CH / 2 + 4, wW, ec);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.fillRect(826, GY - 40, 40, 34); ctx.strokeRect(826, GY - 40, 40, 34); ctx.restore();
    dot(ctx, 838, GY - 23, PAL.muted, true, 3); dot(ctx, 854, GY - 23, PAL.muted, true, 3);
    text(ctx, 'W from the electrical outlet', 812, (GY + CY + CH / 2) / 2 - 14, ec, { size: 20, weight: 600 });
    /* ---- the coefficient of performance against the cold reservoir temperature ---- */
    const { X, Y } = axes(ctx, box, [-40, 15], [0, 12], { xl: 'T_c (°C)', xc: tcol, yl: 'COP_hp for T_h = ' + fmt(Th, 1) + ' °C', nx: 11, ny: 4, fx: (v) => num(v, 0) });
    const copAt = (t) => ThK / (Th - t);
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    const trace = (t0, t1, color, w, dash) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath(); for (let i = 0; i <= 80; i++) { const t = t0 + (t1 - t0) * i / 80; const p = [X(t), Y(copAt(t))]; if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); } ctx.stroke(); ctx.restore(); };
    trace(-40, OUT, PAL.ink, 5);
    trace(OUT, 15, alpha(PAL.ink, 0.35), 3, [8, 8]);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(X(OUT), box.t, X(15) - X(OUT), box.b - box.t); ctx.restore();
    ctx.restore();
    line(ctx, X(OUT), box.t, X(OUT), box.b, tcol, 2, [6, 8]);
    text(ctx, 'outside air −5 °C: the fluid must be colder than this', X(OUT) + 10, box.b - 18, PAL.muted, { size: 17 });
    line(ctx, X(Tc), Y(Math.min(cop, 12)), X(Tc), box.b, tcol, 2, [4, 8]);
    pinned(ctx, box, X, Y, Tc, cop, tcol, 'COP_hp = ' + fmt(cop, 2));
    if (cop <= 12) text(ctx, 'COP_hp = ' + fmt(cop, 2), X(Tc) + 18, Y(cop) - 20, PAL.ink, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    topline(ctx, 'Between ' + num(Tc, 1) + ' °C and ' + fmt(Th, 1) + ' °C the best coefficient of performance is ' + fmt(cop, 2) + ', so each joule from the outlet brings ' + fmt(cop - 1, 2) + ' J in from the cold air.');
    readout(d.readout, `\\text{COP}_{\\text{hp}} = \\frac{1}{\\text{Eff}_{\\text{C}}} = \\frac{1}{1 - \\kTempc/\\kTemph} = \\frac{1}{1 - ${fmt(TcK, 0)}\\ \\text{K}/${fmt(ThK, 0)}\\ \\text{K}} = ${fmt(cop, 2)}`,
      'The heat transfer into the house is Q_h = COP_hp W = ' + fmt(cop, 2) + ' W, and Q_c = ' + fmt(cop - 1, 2) + ' W of it comes in from the cold air at no cost. In kelvins the temperatures are ' + fmt(TcK, 0) + ' K and ' + fmt(ThK, 0) + ' K. The curve shows the same pump in every climate: the colder the outdoor coil must be, the smaller the coefficient of performance.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the two ratios of one machine. The same energies drawn as bars in
   units of the work, so that Q_h/W and Q_c/W are seen to differ by the bar
   for W itself. Still: it answers its sliders and its choice.
===================================================================== */
(function () {
  const d = sim('sim-two-ratios', 640);
  const use = choice(d.controls, { label: '\\text{used to}', options: [{ value: 'warm', label: 'warm the space' }, { value: 'cool', label: 'cool the space' }], value: 'cool', aria: 'whether the machine is used as a heat pump or as a refrigerator or air conditioner' });
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 25, max: 80, step: 0.5, value: 45, unit: '°C', dec: 1, aria: 'the hot reservoir temperature' });
  const tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: -40, max: 15, step: 0.5, value: -15, unit: '°C', dec: 1, aria: 'the cold reservoir temperature' });
  const MX = 300, MY = 345, MR = 74, HOT = { x: 110, y: 96, w: 380, h: 96 }, COLD = { x: 110, y: 500, w: 380, h: 96 };
  /* the bar scale is fixed at 0 to 12 units of the work; a taller bar is broken at the top and carries its number */
  const B0 = 540, BT = 150, PER = (B0 - BT) / 12, BX = [820, 1040, 1260], BW = 110;
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), warm = use.value === 'warm';
    const r = kelvin(tc.v) / kelvin(th.v), cophp = 1 / (1 - r), copref = cophp - 1;
    const wOf = (v) => Math.max(3, 92 * v / cophp);
    reservoir(ctx, HOT.x, HOT.y, HOT.w, HOT.h, warm ? 'hot reservoir, the space to warm' : 'hot reservoir, the outdoors', 'T_h = ' + num(th.v, 1) + ' °C');
    reservoir(ctx, COLD.x, COLD.y, COLD.w, COLD.h, warm ? 'cold reservoir, the outdoors' : 'cold reservoir, the space to cool', 'T_c = ' + num(tc.v, 1) + ' °C');
    const top = HOT.y + HOT.h, bot = COLD.y;
    fat(ctx, MX, bot, MX, MY + MR + 2, wOf(copref), ec);
    fat(ctx, MX, MY - MR - 2, MX, top, wOf(cophp), ec);
    fat(ctx, 600, MY, MX + MR + 2, MY, wOf(1), ec);
    machine(ctx, MX, MY, MR, warm ? 'heat pump' : 'refrigerator');
    text(ctx, 'Q_h = ' + fmt(cophp, 2) + ' W', MX - wOf(cophp) / 2 - 18, (top + MY - MR) / 2, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'Q_c = ' + fmt(copref, 2) + ' W', MX - wOf(copref) / 2 - 18, (bot + MY + MR) / 2, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'W', 520, MY - wOf(1) / 2 - 26, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'what you pay', 520, MY + wOf(1) / 2 + 26, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'what you get', MX + wOf(warm ? cophp : copref) / 2 + 16, warm ? (top + MY - MR) / 2 : (bot + MY + MR) / 2, PAL.ink, { size: 18, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the three energies as bars in units of W */
    line(ctx, BX[0] - BW, B0, BX[2] + BW, B0, PAL.muted, 2);
    for (let k = 0; k <= 12; k += 2) { line(ctx, BX[0] - BW, B0 - k * PER, BX[0] - BW + 10, B0 - k * PER, PAL.muted, 2); text(ctx, fmt(k, 0), BX[0] - BW - 12, B0 - k * PER, PAL.muted, { size: 17, align: 'right' }); }
    text(ctx, 'the three energies in units of the work W', BX[1], B0 + 58, PAL.ink, { size: 18, weight: 600, align: 'center' });
    const bars = [['Q_h/W', cophp, warm], ['Q_c/W', copref, !warm], ['W/W', 1, false]];
    bars.forEach(([nm, v, chosen], i) => {
      const h = Math.min(v, 12) * PER, y = B0 - h, x = BX[i] - BW / 2;
      ctx.save(); ctx.fillStyle = alpha(ec, chosen ? 0.8 : 0.35); ctx.fillRect(x, y, BW, h); ctx.strokeStyle = ec; ctx.lineWidth = 2; ctx.strokeRect(x, y, BW, h); ctx.restore();
      if (v > 12) { ctx.save(); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x - 6, y + 22); ctx.lineTo(x + BW / 3, y + 10); ctx.lineTo(x + 2 * BW / 3, y + 26); ctx.lineTo(x + BW + 6, y + 14); ctx.stroke(); ctx.restore(); }
      text(ctx, nm + ' = ' + fmt(v, 2), BX[i], y - 22, ec, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, i === 0 ? 'COP_hp' : i === 1 ? 'COP_ref' : 'one unit', BX[i], B0 + 26, i === 2 ? PAL.muted : PAL.ink, { size: 19, weight: i === 2 ? 400 : 600, align: 'center' });
    });
    /* the difference between the two coefficients is the third bar */
    if (cophp <= 12) {
      const y1 = B0 - cophp * PER, y2 = B0 - copref * PER, xb = BX[1] + BW / 2 + 22;
      line(ctx, BX[0] + BW / 2, y1, xb + 10, y1, PAL.ink, 2, [4, 6]); line(ctx, BX[1] + BW / 2, y2, xb + 10, y2, PAL.ink, 2, [4, 6]);
      line(ctx, xb, y1, xb, y2, PAL.ink, 3); line(ctx, xb - 8, y1, xb + 8, y1, PAL.ink, 3); line(ctx, xb - 8, y2, xb + 8, y2, PAL.ink, 3);
      text(ctx, '1', xb + 14, (y1 + y2) / 2, PAL.ink, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    topline(ctx, warm
      ? 'Used to warm the space, the machine delivers ' + fmt(cophp, 2) + ' J to the hot reservoir for every joule of work, and its coefficient of performance is ' + fmt(cophp, 2) + '.'
      : 'Used to cool the space, the machine removes ' + fmt(copref, 2) + ' J from the cold reservoir for every joule of work, and its coefficient of performance is ' + fmt(copref, 2) + '.');
    readout(d.readout, warm
      ? `\\text{COP}_{\\text{hp}} = \\frac{\\kQH}{\\kW} = \\frac{${fmt(cophp, 2)}\\ \\text{J}}{1.00\\ \\text{J}} = ${fmt(cophp, 2)}`
      : `\\text{COP}_{\\text{ref}} = \\frac{\\kQC}{\\kW} = \\frac{${fmt(copref, 2)}\\ \\text{J}}{1.00\\ \\text{J}} = ${fmt(copref, 2)}`,
      'Because Q_h = Q_c + W, dividing through by W gives COP_hp = COP_ref + 1, so the two coefficients differ by exactly 1 whatever the temperatures: the work put in reaches the hot reservoir as well. The machine here is the best possible, with Q_c/Q_h = T_c/T_h in kelvins, so both coefficients climb as the two temperatures come together.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
