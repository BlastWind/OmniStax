/* Figures for section 14.6 Convection. Boots against the section's text article.
   Two figures move: the convective loop of the room and the pot, and the loops in
   the pockets of fur, both steady flows with no end and so no scrubber. The house
   turnover, the wind chill and the sweat are rates and amounts that answer their
   sliders. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, pinned, curve, labeller, silhouette } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas above a thousand */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s); };
/* the phase of an endless cycle: zero where reduced motion has parked it at infinity */
/* a rounded rectangle path */
function rrect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r); ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r); ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r); ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath(); }
/* a number for the canvas with a true minus sign */
const neg = (s) => String(s).replace(/-/g, '−');
const phaseOf = (cy) => { const t = cy.now(); return isFinite(t) ? t : 0; };
/* the two fluids of the loop, with Table 13.2's volume coefficients and the book's densities */
const FLUIDS = {
  air: { name: 'air', rho: 1.29, rhoTex: '1.29', beta: 3400e-6, betaTex: '3400 \\times 10^{-6}', dec: 3 },
  water: { name: 'water', rho: 1000, rhoTex: '1000', beta: 210e-6, betaTex: '210 \\times 10^{-6}', dec: 1 },
};
/* the density of the warmed fluid, from ΔV = βVΔT */
const warmRho = (f, dT) => f.rho * (1 - f.beta * dT);
const pctLighter = (f, dT) => 100 * f.beta * dT;
const rhoReadout = (f, dT) => `\\krho_{\\text{warm}} = \\krho\\,(1 - \\beta\\,\\kdTemp) = (${f.rhoTex}\\ \\text{kg/m}^3)\\left[1 - (${f.betaTex}/{}^\\circ\\text{C})(${fmt(dT, 0)}^\\circ\\text{C})\\right] = ${fmt(warmRho(f, dT), f.dec)}\\ \\text{kg/m}^3`;
/* a flame: the colour is the physical fact, an orange for the furnace and a gas-blue for the burner */
const FLAME = { furnace: '#e8892b', burner: '#4a90d9' };
function flame(ctx, x, y, h, color, w = h * 0.55) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x, y); ctx.quadraticCurveTo(x - w, y - h * 0.45, x - w * 0.15, y - h); ctx.quadraticCurveTo(x + w * 0.05, y - h * 0.55, x + w * 0.2, y - h * 0.8);
  ctx.quadraticCurveTo(x + w, y - h * 0.4, x, y); ctx.fill();
  ctx.fillStyle = alpha(PAL.panel, 0.55); ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - w * 0.35, y - h * 0.3, x, y - h * 0.5); ctx.quadraticCurveTo(x + w * 0.35, y - h * 0.3, x, y); ctx.fill(); ctx.restore();
}
/* two bars of density side by side, the fluid at large and the warmed fluid, in the density hue */
function densityBars(ctx, x, yb, f, dT, unitTop = 250) {
  const dc = C('density'), scale = unitTop / f.rho, w = 54, gap = 40;
  const hs = [f.rho * scale, warmRho(f, dT) * scale], names = ['at large', 'warmed'], vals = [f.rho, warmRho(f, dT)];
  text(ctx, 'density ρ (kg/m³)', x + w + gap / 2, yb - unitTop - 44, dc, { size: 20, weight: 600, align: 'center' });
  hs.forEach((h, i) => {
    const bx = x + i * (w + gap);
    ctx.save(); ctx.fillStyle = i ? alpha(dc, 0.55) : dc; ctx.fillRect(bx, yb - h, w, h); ctx.restore();
    line(ctx, bx - 6, yb, bx + w + 6, yb, PAL.muted, 2);
    text(ctx, fmt(vals[i], f.dec), bx + w / 2, yb - h - 16, dc, { size: 18, weight: 600, align: 'center' });
    text(ctx, names[i], bx + w / 2, yb + 22, PAL.muted, { size: 17, align: 'center' });
  });
}

/* =====================================================================
   FIGURE 14.21 + 14.22: the convective loop, drawn as the book draws it
   twice, a room with a gravity furnace and a pot of water on a stove. The
   fluid warmed at the heater is lighter than the rest and the buoyant force
   lifts it; parcels ride the loop at a rate set by how much lighter it is
   and by the size of the loop. A steady flow, so the cycle is endless and
   there is no scrubber.
===================================================================== */
(function () {
  const d = sim('sim-convective-loop', 620);
  const scene = choice(d.controls, { label: '\\text{scene}', options: [{ value: 'room', label: 'Room with a gravity furnace' }, { value: 'pot', label: 'Pot of water on a stove' }], value: 'room', aria: 'the room or the pot' });
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 5, max: 80, step: 1, value: 40, unit: '°C', dec: 0, aria: 'the temperature rise of the fluid at the heater above the rest' });
  const cy = cycle(() => Infinity, 0);
  /* the angular rate of the loop: the buoyant speed sqrt(g β ΔT L) over the loop's size L, drawn 1.5 times faster */
  const Lloop = { room: 3.0, pot: 0.15 };
  const rate = () => { const f = scene.value === 'room' ? FLUIDS.air : FLUIDS.water; return 1.5 * Math.sqrt((G * f.beta * dT.v) / Lloop[scene.value]); };
  /* a rounded-rectangle loop walked by arc length, up the left, right along the top, down the right, left along the bottom */
  function rectLoop(l, r, t, b, R) {
    const w = r - l - 2 * R, h = b - t - 2 * R, q = (Math.PI / 2) * R, P = 2 * w + 2 * h + 4 * q;
    const at = (s) => {
      s = ((s % P) + P) % P;
      if (s < h) return [l, b - R - s];                                                   /* up the left */
      s -= h; if (s < q) { const a = Math.PI + (s / q) * (Math.PI / 2); return [l + R + R * Math.cos(a), t + R + R * Math.sin(a)]; }
      s -= q; if (s < w) return [l + R + s, t];                                            /* along the top */
      s -= w; if (s < q) { const a = -Math.PI / 2 + (s / q) * (Math.PI / 2); return [r - R + R * Math.cos(a), t + R + R * Math.sin(a)]; }
      s -= q; if (s < h) return [r, t + R + s];                                            /* down the right */
      s -= h; if (s < q) { const a = (s / q) * (Math.PI / 2); return [r - R + R * Math.cos(a), b - R + R * Math.sin(a)]; }
      s -= q; if (s < w) return [r - R - s, b];                                            /* along the bottom */
      s -= w; const a = Math.PI / 2 + (s / q) * (Math.PI / 2); return [l + R + R * Math.cos(a), b - R + R * Math.sin(a)];
    };
    return { P, at };
  }
  function parcel(ctx, x, y) { dot(ctx, x, y, PAL.ink, true, 6); }
  function room(ctx, ph) {
    const L = 200, R = 1200, FL = 560, CE = 150;
    /* the house: floor, walls, ceiling, roof and the chimney of the furnace */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(L, CE, R - L, FL - CE); ctx.restore();
    line(ctx, L - 40, FL, R + 40, FL, PAL.ink, 4); line(ctx, L, FL, L, CE, PAL.ink, 3); line(ctx, R, FL, R, CE, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L - 40, CE); ctx.lineTo(700, 100); ctx.lineTo(R + 40, CE); ctx.closePath(); ctx.stroke(); ctx.restore();
    line(ctx, 175, FL - 20, 175, 116, PAL.muted, 6); line(ctx, 175, FL - 20, 220, FL - 20, PAL.muted, 6);
    /* the window on the back wall and the sofa against it, both behind the loop */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.strokeRect(620, 230, 160, 100); ctx.beginPath(); ctx.moveTo(700, 230); ctx.lineTo(700, 330); ctx.moveTo(620, 280); ctx.lineTo(780, 280); ctx.stroke();
    ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.fillRect(560, 470, 280, 70); ctx.fillRect(560, 440, 40, 40); ctx.fillRect(800, 440, 40, 40); ctx.fillRect(600, 450, 200, 30); ctx.restore();
    /* the gravity furnace with its flame */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(210, 430, 90, 130); ctx.strokeRect(210, 430, 90, 130); ctx.restore();
    flame(ctx, 255, 548, 80, FLAME.furnace);
    /* the loop and the parcels on it */
    const lp = rectLoop(345, 1110, 205, 515, 60);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.setLineDash([6, 10]); ctx.beginPath();
    for (let i = 0; i <= 200; i++) { const p = lp.at((lp.P * i) / 200); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); } ctx.stroke(); ctx.restore();
    const N = 28; for (let i = 0; i < N; i++) { const p = lp.at((ph / TAU) * lp.P + (i * lp.P) / N); parcel(ctx, p[0], p[1]); }
    arrow(ctx, 345, 420, 345, 330, PAL.ink, 4); arrow(ctx, 1110, 300, 1110, 390, PAL.ink, 4);
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 95);
    lab.add('Hot air rises', 345, 380, 1, 0, PAL.ink, 22, 30);
    lab.add('Air cooled by the room sinks', 1110, 345, -1, 0, PAL.ink, 22, 30);
    lab.add('Gravity furnace', 300, 470, 1, 0, PAL.ink, 20, 24);
    lab.flush();
    text(ctx, 'Each dot is a parcel of air riding the loop.', 200, 596, PAL.muted, { size: 17 });
    densityBars(ctx, 1238, 470, FLUIDS.air, dT.v, 220);
  }
  function pot(ctx, ph) {
    const L = 470, R = 930, TOP = 190, BOT = 510, WL = 235;
    /* the burner ring and its flames, the pot cut away to show the water */
    line(ctx, 540, 560, 860, 560, PAL.ink, 5); line(ctx, 560, 560, 560, 590, PAL.ink, 4); line(ctx, 840, 560, 840, 590, PAL.ink, 4);
    for (let i = 0; i < 8; i++) flame(ctx, 575 + i * 36, 556, 40, FLAME.burner, 14);
    ctx.save(); ctx.fillStyle = alpha(C('density'), 0.10); ctx.fillRect(L, WL, R - L, BOT - WL); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(L - 30, TOP); ctx.lineTo(L, TOP); ctx.lineTo(L, BOT); ctx.lineTo(R, BOT); ctx.lineTo(R, TOP); ctx.lineTo(R + 30, TOP); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L, WL); ctx.lineTo(R, WL); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(L - 30, TOP + 40); ctx.lineTo(L - 70, TOP + 40); ctx.moveTo(R + 30, TOP + 40); ctx.lineTo(R + 70, TOP + 40); ctx.stroke(); ctx.restore();
    /* two loops: water rises through the middle, spreads at the surface and sinks at the walls */
    const cx = [590, 810], cy0 = 372, rx = 96, ry = 120;
    cx.forEach((c, k) => {
      const sgn = k ? 1 : -1;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.setLineDash([6, 10]); ctx.beginPath(); ctx.ellipse(c, cy0, rx, ry, 0, 0, TAU); ctx.stroke(); ctx.restore();
      const N = 14; for (let i = 0; i < N; i++) { const a = sgn * ph + (i * TAU) / N; parcel(ctx, c + rx * Math.cos(a), cy0 + ry * Math.sin(a)); }
    });
    arrow(ctx, 700, 430, 700, 330, PAL.ink, 4); arrow(ctx, 500, 320, 500, 420, PAL.ink, 4); arrow(ctx, 900, 320, 900, 420, PAL.ink, 4);
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 95);
    lab.add('Hot water rises', 700, 300, 0, -1, PAL.ink, 22, 30);
    lab.add('Cooler water sinks', 500, 470, -1, 0.3, PAL.ink, 22, 40);
    lab.add('Burner', 860, 585, 1, 0, PAL.ink, 20, 24);
    lab.flush();
    text(ctx, 'Each dot is a parcel of water riding a loop.', 200, 596, PAL.muted, { size: 17 });
    densityBars(ctx, 1160, 470, FLUIDS.water, dT.v, 220);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ph = phaseOf(cy), isRoom = scene.value === 'room', f = isRoom ? FLUIDS.air : FLUIDS.water, pct = pctLighter(f, dT.v);
    if (isRoom) room(ctx, ph); else pot(ctx, ph);
    topline(ctx, isRoom
      ? `Air ${fmt(dT.v, 0)} °C warmer than the room's is ${fmt(pct, 1)}% lighter, so the room's air lifts it: it rises up the wall, cools along the ceiling and sinks down the far side.`
      : `Water ${fmt(dT.v, 0)} °C warmer than the rest is ${fmt(pct, 2)}% lighter, so it rises through the middle of the pot, cools at the surface and the walls, and sinks.`);
    readout(d.readout, rhoReadout(f, dT.v),
      isRoom ? `The warmed air is ${fmt(pct, 1)}% lighter than the room's air, so the buoyant force on it, the weight of the room air it displaces, is greater than its own weight and it rises; cooled at the ceiling and the outside walls, it contracts, becomes denser than the air around it, and sinks to the floor.`
        : `Water expands far less than air, so the warmed water is only ${fmt(pct, 2)}% lighter than the rest, but that is enough: the buoyant force on it exceeds its weight and it rises, while the water cooled at the surface and the walls sinks to the bottom, and the process keeps repeating.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, rate), draw });
})();

/* =====================================================================
   SIM: the leaking house of Example 14.7. All of its air is replaced once
   in the turnover time and every kilogram must be warmed by the same
   temperature change; the heat that takes over the turnover time is the
   rate, drawn as a bar of watts and as the 100 W bulbs it would light. A
   rate and an amount, so the figure answers its sliders and never plays.
===================================================================== */
(function () {
  const d = sim('sim-house-turnover', 560);
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 0, max: 30, step: 0.5, value: 10, unit: '°C', dec: 1, aria: 'the temperature change of the incoming air' });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.25, max: 6, step: 0.05, value: 0.5, unit: 'h', dec: 2, aria: 'the turnover time of the air', detents: [{ v: 0.5 }, { v: 2, label: 'new home' }, { v: 6, label: 'tight' }] });
  const Vs = ctl(d.controls, { label: 'V', cls: '', min: 100, max: 1500, step: 1, value: 648, unit: 'm³', dec: 0, aria: 'the volume of air in the house' });
  const RHO = 1.29, CP = 1000;
  /* the bar holds 70 kW, the largest rate the sliders can ask for (1500 m³, 30 °C, a quarter hour) */
  const BAR = { l: 800, r: 1340, y: 190, h: 40, max: 70 };
  const GRID = { l: 800, t: 290, cols: 40, dx: 13.5, dy: 15, rows: 17 };
  function house(ctx) {
    const L = 120, R = 640, FL = 470, CE = 220;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(L, CE, R - L, FL - CE); ctx.restore();
    line(ctx, L - 40, FL, R + 40, FL, PAL.ink, 4); line(ctx, L, FL, L, CE, PAL.ink, 3); line(ctx, R, FL, R, CE, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L - 40, CE); ctx.lineTo((L + R) / 2, 130); ctx.lineTo(R + 40, CE); ctx.closePath(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.strokeRect(330, 280, 110, 80); ctx.strokeRect(160, 340, 60, 130); ctx.restore();
    /* cold air in at the cracks of the left wall, warm air out at the right: symbolic arrows in ink */
    [300, 420].forEach((y) => arrow(ctx, L - 70, y, L + 40, y, PAL.ink, 4));
    [270, 400].forEach((y) => arrow(ctx, R - 40, y, R + 70, y, PAL.ink, 4));
    text(ctx, 'cold air in', L - 70, 350, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'warm air out', R + 70, 330, PAL.ink, { size: 20, weight: 600, align: 'right' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('power'), m = RHO * Vs.v, Q = m * CP * dT.v, tsec = ts.v * 3600, P = Q / tsec, kW = P / 1000, bulbs = Math.round(P / 100);
    house(ctx);
    text(ctx, `V = ${fmt(Vs.v, 0)} m³ of air, m = ρV = ${fmt(m, 0)} kg`, 380, 245, PAL.ink, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, `replaced once every ${fmt(ts.v, 2)} h, warmed by ${fmt(dT.v, 1)} °C`, 420, 425, PAL.ink, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the bar of watts */
    text(ctx, 'rate of heat transfer Q/t (kW)', BAR.l, BAR.y - 34, pc, { size: 20, weight: 600 });
    ctx.save(); ctx.fillStyle = alpha(pc, 0.15); ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, BAR.r - BAR.l, BAR.h);
    ctx.fillStyle = pc; ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, Math.min(1, kW / BAR.max) * (BAR.r - BAR.l), BAR.h); ctx.restore();
    for (let k = 0; k <= BAR.max; k += 10) { const x = BAR.l + (k / BAR.max) * (BAR.r - BAR.l); line(ctx, x, BAR.y + BAR.h / 2, x, BAR.y + BAR.h / 2 + 8, PAL.muted, 2); text(ctx, String(k), x, BAR.y + BAR.h / 2 + 24, PAL.muted, { size: 17, align: 'center' }); }
    const bx = BAR.l + Math.min(1, kW / BAR.max) * (BAR.r - BAR.l);
    text(ctx, fmt(kW, 2) + ' kW', Math.min(bx + 12, BAR.r - 90), BAR.y, pc, { size: 22, weight: 600, bg: PAL.panel });
    /* the bulbs, one per 100 W */
    const cap = GRID.cols * GRID.rows, shown = Math.min(bulbs, cap);
    for (let i = 0; i < shown; i++) { const cx = GRID.l + 6 + (i % GRID.cols) * GRID.dx, cyy = GRID.t + Math.floor(i / GRID.cols) * GRID.dy; dot(ctx, cx, cyy, pc, true, 5); }
    text(ctx, bulbs === 1 ? 'one bulb of 100 W' : `${bulbs} bulbs of 100 W` + (bulbs > cap ? `, ${bulbs - cap} more than the row can hold` : ''), BAR.l, GRID.t - 34, pc, { size: 20, weight: 600 });
    topline(ctx, bulbs === 0 ? `With no temperature change the incoming air needs no warming and the heater does no work.`
      : `Warming ${fmt(m, 0)} kg of air by ${fmt(dT.v, 1)} °C every ${fmt(ts.v, 2)} h takes ${fmt(kW, 2)} kW, the power of ${bulbs} bulb${bulbs === 1 ? '' : 's'} of 100 W.`);
    readout(d.readout, `\\frac{\\kQh}{\\kt} = \\frac{m\\,c\\,\\kdTemp}{\\kt} = \\frac{(${fmt(m, 0)}\\ \\text{kg})(1000\\ \\text{J/kg}\\cdot{}^\\circ\\text{C})(${fmt(dT.v, 1)}^\\circ\\text{C})}{${fmt(tsec, 0)}\\ \\text{s}} = \\htmlClass{kv-power}{${fmt(kW, 2)}\\ \\text{kW}}`,
      `The mass of air is m = ρV = (1.29 kg/m³)(${fmt(Vs.v, 0)} m³) = ${fmt(m, 0)} kg, and it is replaced once every ${fmt(ts.v, 2)} h = ${fmt(tsec, 0)} s, so the heat of ${sig3(Q / 1e6)} × 10⁶ J is needed that often.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: wind chill. Table 14.4 read as two thermometers, the moving air's
   own temperature and the still air that chills the same, with the whole
   table drawn beside as one curve per row. A state of the table, not a
   motion, so the figure answers its sliders and never plays.
===================================================================== */
(function () {
  const d = sim('sim-wind-chill', 600);
  const ROWS = [5, 2, 0, -5, -10, -20, -40], COLS = [2, 5, 10, 15, 20];
  const TABLE = [[3, -1, -8, -10, -12], [0, -7, -12, -16, -18], [-2, -9, -15, -18, -20], [-7, -15, -22, -26, -29], [-12, -21, -29, -34, -36], [-23, -34, -44, -50, -52], [-44, -59, -73, -82, -84]];
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -40, max: 5, step: 1, value: 0, unit: '°C', dec: 0, aria: 'the temperature of the moving air', detents: ROWS.map((v) => ({ v })) });
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 15, unit: 'm/s', dec: 1, aria: 'the wind speed', detents: COLS.map((v) => ({ v })) });
  /* the table read along a row: the air's own temperature in still air, the entries at the columns, straight lines between */
  const lerp = (a, b, f) => a + (b - a) * f;
  function chillRow(r, v) {
    const xs = [0, ...COLS], ys = [ROWS[r], ...TABLE[r]];
    for (let i = 1; i < xs.length; i++) if (v <= xs[i]) return lerp(ys[i - 1], ys[i], (v - xs[i - 1]) / (xs[i] - xs[i - 1]));
    return ys[ys.length - 1];
  }
  function chill(T, v) {
    if (T >= ROWS[0]) return chillRow(0, v);
    for (let i = 1; i < ROWS.length; i++) if (T >= ROWS[i]) return lerp(chillRow(i, v), chillRow(i - 1, v), (T - ROWS[i]) / (ROWS[i - 1] - ROWS[i]));
    return chillRow(ROWS.length - 1, v);
  }
  const onGrid = (T, v) => ROWS.includes(T) && (v === 0 || COLS.includes(v));
  /* the graph's axes are fixed from the slider ranges: 0 to 20 m/s, −90 to 10 °C */
  const GB = { l: 860, r: 1300, t: 150, b: 470 };
  const TH = { top: 180, bot: 470, lo: -90, hi: 10 };
  const hits = [];
  hover(d.stage, () => hits);
  function thermometer(ctx, x, T, name, tc) {
    const lines = Array.isArray(name) ? name : [name];
    const Y = (v) => TH.bot - ((v - TH.lo) / (TH.hi - TH.lo)) * (TH.bot - TH.top);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel; rrect(ctx, x - 14, TH.top - 14, 28, TH.bot - TH.top + 14, 14); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, TH.bot + 20, 24, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = tc; ctx.beginPath(); ctx.arc(x, TH.bot + 20, 17, 0, TAU); ctx.fill(); ctx.fillRect(x - 6, Y(T), 12, TH.bot + 12 - Y(T)); ctx.restore();
    for (let v = TH.lo; v <= TH.hi; v += 10) { line(ctx, x + 14, Y(v), x + 22, Y(v), PAL.muted, 2); if (v % 20 === -10 || v === 10) text(ctx, neg(v), x + 28, Y(v), PAL.muted, { size: 15 }); }
    lines.forEach((ln, i) => text(ctx, ln, x, TH.top - 36 - (lines.length - 1 - i) * 22, PAL.ink, { size: 18, weight: 600, align: 'center' }));
    text(ctx, neg(fmt(T, 0)) + ' °C', x, TH.bot + 62, tc, { size: 22, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), vc = C('velocity'), T = Ts.v, v = vs.v, W = chill(T, v);
    hits.length = 0;
    /* the person in the wind, the wind drawn as arrows whose length follows the speed */
    line(ctx, 60, 520, 470, 520, PAL.muted, 3);
    silhouette(ctx, { x: 300, y: 520, s: 2.4, face: -1, pose: 'lean' });   /* leaning into the wind, which comes from the left */
    if (v > 0) [230, 300, 370].forEach((y, i) => { const L = 40 + v * 7; arrow(ctx, 60 + (i % 2) * 20, y, 60 + (i % 2) * 20 + L, y, vc, 4); });
    text(ctx, v > 0 ? `wind ${fmt(v, 1)} m/s` : 'still air', 70, 190, vc, { size: 20, weight: 600 });
    thermometer(ctx, 570, T, 'moving air', tc);
    thermometer(ctx, 720, W, ['still air that', 'chills the same'], tc);
    /* the table as one curve per row, the current row picked out, the reader's point on it */
    const { X, Y } = axes(ctx, GB, [0, 20], [-90, 10], { xl: 'wind speed (m/s)', xc: vc, yl: 'still air that chills the same (°C)', yc: tc, nx: 4, ny: 5, fy: (y) => neg(fmt(y, 0)) });
    ROWS.forEach((Tr, r) => { curve(ctx, (x) => chillRow(r, x), 0, 20, X, Y, alpha(PAL.muted, 0.6), 2, 40); hits.push({ x: X(20), y: Y(chillRow(r, 20)), r: 14, name: `moving air at ${neg(Tr)} °C` }); dot(ctx, X(20), Y(chillRow(r, 20)), PAL.muted, false, 5); });
    curve(ctx, (x) => chill(T, x), 0, 20, X, Y, tc, 5, 40);
    line(ctx, X(v), Y(W), X(v), GB.b, vc, 2, [4, 8]); line(ctx, GB.l, Y(W), X(v), Y(W), tc, 2, [4, 8]);
    pinned(ctx, GB, X, Y, v, W, PAL.ink);
    text(ctx, `moving air at ${neg(fmt(T, 0))} °C`, X(10), Y(chill(T, 10)) - 22, tc, { size: 17, weight: 600, align: 'center', bg: PAL.panel });
    topline(ctx, v === 0 ? `Still air at ${neg(fmt(T, 0))} °C chills as it reads, since no wind carries the warmed air away from the body.`
      : `A ${fmt(v, 1)} m/s wind at ${neg(fmt(T, 0))} °C chills like still air at about ${neg(fmt(W, 0))} °C.`);
    readout(d.readout, `\\kTemp = ${fmt(T, 0)}^\\circ\\text{C},\\quad \\kv = ${fmt(v, 1)}\\ \\text{m/s} \\quad\\Rightarrow\\quad \\text{wind-chill factor} = ${fmt(W, 0)}^\\circ\\text{C}`,
      v === 0 ? 'In still air the wind-chill factor is the air temperature itself; Table 14.4 begins at 2 m/s.'
        : onGrid(T, v) ? 'The entry is read from Table 14.4: the moving air carries heat away from the body by convection as fast as still air this much colder would by conduction alone.'
          : 'Between the entries of Table 14.4 the figure draws a straight line, so the number is approximate; the table itself gives only the values at its rows and columns.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 14.23: the air pockets of fur. A warm side, a cold side and a
   layer of air between them broken into pockets; in each pocket the air
   next to the warm side is lighter, and whether it rises depends on the
   size of the pocket, since the buoyant force grows with the pocket's
   volume while the viscous drag grows only with its width. The loops turn
   at a rate that follows that rule: still at 1 mm, a crawl at 10 mm,
   vigorous at 90 mm. A steady flow, so the cycle is endless.
===================================================================== */
(function () {
  const d = sim('sim-fur', 600);
  const ds = ctl(d.controls, { label: 'd', cls: '', min: 1, max: 100, step: 1, value: 1, unit: 'mm', dec: 0, aria: 'the size of an air pocket', detents: [{ v: 1 }, { v: 10, label: 'double pane' }, { v: 90, label: 'wall cavity' }] });
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 5, max: 40, step: 1, value: 20, unit: '°C', dec: 0, aria: 'the temperature difference across a pocket' });
  const cy = cycle(() => Infinity, 0);
  /* the buoyant drive of a pocket against the viscous drag on it grows as d³ΔT (the Rayleigh number of air,
     1.06 × 10⁸ ΔT d³ with d in metres), and a loop begins to turn where it passes about 1700 */
  const RA = (dmm, dt) => 1.062e8 * dt * Math.pow(dmm / 1000, 3), RAC = 1708;
  const rate = () => { const ra = RA(ds.v, dT.v); return 2.5 * Math.tanh(Math.sqrt(Math.max(0, ra - RAC) / RAC) / 8) + 0.03 * Math.min(1, ra / RAC); };
  const state = () => { const w = rate(); return w < 0.05 ? 'still' : w < 0.6 ? 'creep' : 'free'; };
  const names = () => (ds.v <= 3 ? { layer: 'Fur', warm: 'Body (warm)', cold: 'Air (cold)' } : ds.v <= 20 ? { layer: 'Gap between the panes', warm: 'Inside pane (warm)', cold: 'Outside pane (cold)' } : { layer: 'Wall cavity', warm: 'Inside wall (warm)', cold: 'Outside wall (cold)' });
  const LAY = { l: 430, r: 800, t: 150, b: 550 };
  const LOOPS = []; for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) LOOPS.push({ x: LAY.l + 62 + c * 123, y: LAY.t + 55 + r * 96 });
  const hits = LOOPS.map((p) => ({ x: p.x, y: p.y, r: 44, name: 'a convection loop in one pocket of air' }));
  hover(d.stage, () => hits);
  /* the fibres of the fur, drawn once from a fixed seed so they do not shimmer */
  const FIB = []; { let s = 7; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; for (let i = 0; i < 260; i++) FIB.push([LAY.l + rnd() * (LAY.r - LAY.l), LAY.t + rnd() * (LAY.b - LAY.t), (rnd() - 0.5) * 1.2, 14 + rnd() * 18]); }
  function draw() {
    const { ctx } = begin(d.c);
    const ph = phaseOf(cy), nm = names(), st = state(), f = FLUIDS.air, pct = pctLighter(f, dT.v);
    /* the warm side, the cold side and the layer between */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.18); ctx.fillRect(LAY.r, LAY.t, 1400 - LAY.r - 60, LAY.b - LAY.t); ctx.fillStyle = PAL.soft; ctx.fillRect(LAY.l, LAY.t, LAY.r - LAY.l, LAY.b - LAY.t); ctx.restore();
    line(ctx, LAY.l, LAY.t, LAY.l, LAY.b, PAL.ink, 3); line(ctx, LAY.r, LAY.t, LAY.r, LAY.b, PAL.ink, 3);
    if (ds.v <= 3) { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.28); ctx.lineWidth = 1.5; ctx.beginPath(); FIB.forEach(([x, y, a, L]) => { ctx.moveTo(x, y); ctx.lineTo(x + Math.sin(a) * L, y - Math.cos(a) * L); }); ctx.stroke(); ctx.restore(); }
    else if (ds.v <= 20) { line(ctx, LAY.l + 8, LAY.t, LAY.l + 8, LAY.b, alpha(PAL.ink, 0.35), 2); line(ctx, LAY.r - 8, LAY.t, LAY.r - 8, LAY.b, alpha(PAL.ink, 0.35), 2); }
    else { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; for (let y = LAY.t; y <= LAY.b; y += 28) { ctx.beginPath(); ctx.moveTo(LAY.l - 22, y); ctx.lineTo(LAY.l - 4, y + 12); ctx.moveTo(LAY.r + 4, y); ctx.lineTo(LAY.r + 22, y + 12); ctx.stroke(); } ctx.restore(); }
    /* the loops: parcels on each, warmed air rising on the warm side and sinking on the cold, drawn at the same
       phase in every pocket; a still pocket keeps its parcels where they are */
    LOOPS.forEach((p) => {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, st === 'still' ? 0.15 : 0.3); ctx.lineWidth = 2; ctx.setLineDash([5, 8]); ctx.beginPath(); ctx.arc(p.x, p.y, 40, 0, TAU); ctx.stroke(); ctx.restore();
      for (let i = 0; i < 6; i++) { const a = -ph + (i * TAU) / 6; dot(ctx, p.x + 40 * Math.cos(a), p.y + 40 * Math.sin(a), PAL.ink, true, 5); }
    });
    if (st !== 'still') { arrow(ctx, LAY.r - 30, 340, LAY.r - 30, 280, PAL.ink, 3); arrow(ctx, LAY.l + 30, 280, LAY.l + 30, 340, PAL.ink, 3); }
    /* the scale bar of one pocket and the labels */
    hbracket(ctx, LOOPS[0].x - 40, LOOPS[0].x + 40, LAY.t - 18, PAL.ink, `d = ${fmt(ds.v, 0)} mm`);
    const lab = labeller(ctx, 600); lab.block(0, 0, 1400, 95);
    lab.add(nm.cold, 300, 330, 0, 0, PAL.ink, 22, 0);
    lab.add(nm.warm, 1080, 330, 0, 0, PAL.ink, 22, 0);
    lab.add(nm.layer, 615, 578, 0, 0, PAL.ink, 22, 0);
    lab.add(st === 'still' ? 'the air in each pocket stands still' : 'a convection loop in each pocket', LOOPS[2].x + 40, LOOPS[2].y, 1, -0.35, PAL.ink, 18, 30);
    lab.flush();
    topline(ctx, st === 'still' ? `In pockets ${fmt(ds.v, 0)} mm across the air's viscosity holds it still, and heat crosses the ${ds.v <= 3 ? 'fur' : 'layer'} only by conduction through air, a poor conductor.`
      : st === 'creep' ? `In a ${fmt(ds.v, 0)} mm gap the warmed air barely creeps, so convection is all but stopped and the gap insulates by the low conductivity of air.`
        : `In a ${fmt(ds.v, 0)} mm cavity the warmed air rises freely and a loop carries heat across it: convection works, and insulation is needed to stop it.`);
    readout(d.readout, rhoReadout(f, dT.v),
      `The air next to the warm side is ${fmt(pct, 1)}% lighter than the air next to the cold side. The buoyant force that lifts it grows with the volume of the pocket, as d³, while the viscous drag that resists the motion grows only with the width d, so ${st === 'still' ? 'a pocket this small holds still' : st === 'creep' ? 'a pocket this size lets the air move only just' : 'a pocket this large lets a loop turn freely'}.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, rate), draw });
})();

/* =====================================================================
   SIM: the sweat of Example 14.8. Every gram that evaporates carries away
   the heat of vaporization of a gram of water, so the rate of evaporation
   is the power to be shed over L_v, drawn as a bar of grams a minute and
   as the water collected over the time chosen. A rate and an amount, so
   the figure answers its sliders and never plays.
===================================================================== */
(function () {
  const d = sim('sim-sweat', 540);
  const Ps = ctl(d.controls, { label: '\\kQh/\\kt', cls: 'power', min: 50, max: 500, step: 1, value: 120, unit: 'W', dec: 0, aria: 'the power the body must shed', detents: [{ v: 83, label: 'sleeping' }, { v: 120 }, { v: 210, label: 'sitting' }] });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 5, max: 120, step: 1, value: 60, unit: 'min', dec: 0, aria: 'the time over which the sweat evaporates' });
  const LV = 2430;   /* J/g, Table 14.2's heat of vaporization of water at 37 °C */
  /* the bar holds 13 g/min and the jug 1500 g, the most the sliders can ask for (500 W for 120 min) */
  const BAR = { l: 640, r: 1000, y: 200, h: 40, max: 13 };
  const JUG = { l: 1120, r: 1300, t: 130, b: 470, max: 1500 };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('power'), P = Ps.v, tmin = ts.v, gps = P / LV, gpm = gps * 60, m = gpm * tmin;
    /* the person in the shade, the sweat leaving as vapour */
    line(ctx, 80, 480, 560, 480, PAL.muted, 3);
    /* a parasol on a pole: a canopy of arcs with a scalloped edge, its pole planted behind the bench */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(400, 480); ctx.lineTo(400, 170); ctx.stroke();
    ctx.fillStyle = alpha(PAL.muted, 0.3); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(240, 210); ctx.quadraticCurveTo(400, 60, 560, 210);
    for (let i = 0; i < 6; i++) ctx.arc(560 - (i + 0.5) * (320 / 6), 210, 320 / 12, 0, Math.PI, false); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(400, 170); ctx.lineTo(400, 90); ctx.stroke(); ctx.restore();
    /* the bench, and the person sitting on it in the shade */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(150, 362, 300, 22, 4); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, 170, 384, 170, 480, PAL.ink, 4); line(ctx, 430, 384, 430, 480, PAL.ink, 4);
    silhouette(ctx, { x: 250, y: 480, s: 2.6, pose: 'sit' });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.setLineDash([4, 7]);
    for (let i = 0; i < 4; i++) { const x = 180 + i * 34, y = 300 - (i % 2) * 20; ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - 10, y - 30, x + 4, y - 55); ctx.quadraticCurveTo(x + 14, y - 75, x, y - 95); ctx.stroke(); }
    ctx.restore();
    text(ctx, 'sweat evaporating', 60, 180, PAL.ink, { size: 20, weight: 600 });
    text(ctx, `the body sheds ${fmt(P, 0)} W`, 250, 515, pc, { size: 20, weight: 600, align: 'center' });
    /* the bar of grams a minute, in ink since a mass per time carries no type */
    text(ctx, 'water evaporated each minute (g/min)', BAR.l, BAR.y - 34, PAL.ink, { size: 20, weight: 600 });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, BAR.r - BAR.l, BAR.h); ctx.fillStyle = PAL.ink; ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, Math.min(1, gpm / BAR.max) * (BAR.r - BAR.l), BAR.h); ctx.restore();
    for (let k = 0; k <= BAR.max; k += 2) { const x = BAR.l + (k / BAR.max) * (BAR.r - BAR.l); line(ctx, x, BAR.y + BAR.h / 2, x, BAR.y + BAR.h / 2 + 8, PAL.muted, 2); text(ctx, String(k), x, BAR.y + BAR.h / 2 + 24, PAL.muted, { size: 17, align: 'center' }); }
    const bx = BAR.l + Math.min(1, gpm / BAR.max) * (BAR.r - BAR.l);
    text(ctx, fmt(gpm, 2) + ' g/min', Math.min(bx + 12, BAR.r - 110), BAR.y, PAL.ink, { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, `at ${fmt(P, 0)} W and L_v = 2430 J/g, that is ${fmt(gps, 4)} g each second`, BAR.l, BAR.y + 80, PAL.muted, { size: 18 });
    /* the jug that collects the water evaporated in the time chosen */
    const level = JUG.b - Math.min(1, m / JUG.max) * (JUG.b - JUG.t);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.fillRect(JUG.l, level, JUG.r - JUG.l, JUG.b - level); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(JUG.l - 10, JUG.t); ctx.lineTo(JUG.l, JUG.b); ctx.lineTo(JUG.r, JUG.b); ctx.lineTo(JUG.r + 10, JUG.t); ctx.stroke(); ctx.restore();
    for (let g = 0; g <= JUG.max; g += 250) { const y = JUG.b - (g / JUG.max) * (JUG.b - JUG.t); line(ctx, JUG.r - 12, y, JUG.r, y, PAL.muted, 2); if (g % 500 === 0) text(ctx, g + ' g', JUG.r + 16, y, PAL.muted, { size: 15 }); }
    line(ctx, JUG.l, level, JUG.r, level, PAL.ink, 3);
    text(ctx, `${fmt(m, 0)} g in ${fmt(tmin, 0)} min`, (JUG.l + JUG.r) / 2, JUG.t - 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'the water evaporated', (JUG.l + JUG.r) / 2, JUG.b + 30, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, `To shed ${fmt(P, 0)} W by sweat alone, ${fmt(gpm, 2)} g of water must evaporate every minute, ${fmt(m, 0)} g in ${fmt(tmin, 0)} min.`);
    readout(d.readout, `\\frac{m}{\\kt} = \\frac{\\kQh/\\kt}{L_{\\text{v}}} = \\frac{${fmt(P, 0)}\\ \\text{J/s}}{2430\\ \\text{J/g}} = ${fmt(gps, 4)}\\ \\text{g/s} = ${fmt(gpm, 2)}\\ \\text{g/min}`,
      `In ${fmt(tmin, 0)} min that is ${fmt(m, 0)} g of water${tmin === 60 && P === 120 ? ', about 7 oz, the amount the example finds reasonable for an hour at rest' : ''}. The air must keep moving, since without it the air next to the skin saturates and evaporation stops.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
