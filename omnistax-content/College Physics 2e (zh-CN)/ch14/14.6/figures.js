/* Figures for section 14.6 Convection. Boots against the section's text article.
   Two figures move: the convective loop of the room and the pot, and the loops in
   the pockets of fur, both steady flows with no end and so no scrubber. The house
   turnover, the wind chill and the sweat are rates and amounts that answer their
   sliders. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, pinned, curve, labeller, silhouette } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

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
  const hs = [f.rho * scale, warmRho(f, dT) * scale], names = ['在远处', '被加热'], vals = [f.rho, warmRho(f, dT)];
  text(ctx, '密度 ρ (kg/m³)', x + w + gap / 2, yb - unitTop - 44, dc, { size: 20, weight: 600, align: 'center' });
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
   there is no scrubber. Changing the scene carries the parcels from one loop
   onto the other and the density bars across, while the house and the pot
   fade past each other.
===================================================================== */
(function () {
  const d = sim('sim-convective-loop', 620);
  const scene = choice(d.controls, { label: '\\text{场景}', options: [{ value: 'room', label: '装有重力式热风炉的房间' }, { value: 'pot', label: '炉灶上的一锅水' }], value: 'room', aria: '房间或锅' });
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 5, max: 80, step: 1, value: 40, unit: '°C', dec: 0, aria: '加热处的流体比其余部分高出的温度' });
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
    const rh = F.ref('house');
    line(ctx, L - 40, FL, R + 40, FL, PAL.ink, 4); line(ctx, L, FL, L, CE, rh, 3); line(ctx, R, FL, R, CE, rh, 3);
    ctx.save(); ctx.strokeStyle = rh; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L - 40, CE); ctx.lineTo(700, 100); ctx.lineTo(R + 40, CE); ctx.closePath(); ctx.stroke(); ctx.restore();
    line(ctx, 175, FL - 20, 175, 116, PAL.muted, 6); line(ctx, 175, FL - 20, 220, FL - 20, PAL.muted, 6);
    /* the window on the back wall and the sofa against it, both behind the loop */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.strokeRect(620, 230, 160, 100); ctx.beginPath(); ctx.moveTo(700, 230); ctx.lineTo(700, 330); ctx.moveTo(620, 280); ctx.lineTo(780, 280); ctx.stroke();
    ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.fillRect(560, 470, 280, 70); ctx.fillRect(560, 440, 40, 40); ctx.fillRect(800, 440, 40, 40); ctx.fillRect(600, 450, 200, 30); ctx.restore();
    /* the gravity furnace with its flame */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('furnace'); ctx.lineWidth = 3; ctx.fillRect(210, 430, 90, 130); ctx.strokeRect(210, 430, 90, 130); ctx.restore();
    flame(ctx, 255, 548, 80, F.fact(FLAME.furnace));
    /* the loop and the parcels on it */
    const lp = rectLoop(345, 1110, 205, 515, 60);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.setLineDash([6, 10]); ctx.beginPath();
    for (let i = 0; i <= 200; i++) { const p = lp.at((lp.P * i) / 200); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); } ctx.stroke(); ctx.restore();
    arrow(ctx, 345, 420, 345, 330, PAL.ink, 4); arrow(ctx, 1110, 300, 1110, 390, PAL.ink, 4);
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 95);
    lab.add('热空气上升', 345, 380, 1, 0, PAL.ink, 22, 30);
    lab.add('被房间冷却的空气下沉', 1110, 345, -1, 0, PAL.ink, 22, 30);
    lab.add('重力式热风炉', 300, 470, 1, 0, F.ref('furnace'), 20, 24);
    lab.flush();
    text(ctx, '每个点是沿着环流运动的一个气块。', 200, 596, PAL.muted, { size: 17 });
  }
  function pot(ctx, ph) {
    const L = 470, R = 930, TOP = 190, BOT = 510, WL = 235;
    /* the burner ring and its flames, the pot cut away to show the water */
    const rb = F.ref('burner'), rp = F.ref('pot');
    line(ctx, 540, 560, 860, 560, rb, 5); line(ctx, 560, 560, 560, 590, rb, 4); line(ctx, 840, 560, 840, 590, rb, 4);
    for (let i = 0; i < 8; i++) flame(ctx, 575 + i * 36, 556, 40, F.fact(FLAME.burner), 14);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(L, WL, R - L, BOT - WL); ctx.restore();
    ctx.save(); ctx.strokeStyle = rp; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(L - 30, TOP); ctx.lineTo(L, TOP); ctx.lineTo(L, BOT); ctx.lineTo(R, BOT); ctx.lineTo(R, TOP); ctx.lineTo(R + 30, TOP); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L, WL); ctx.lineTo(R, WL); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = rp; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(L - 30, TOP + 40); ctx.lineTo(L - 70, TOP + 40); ctx.moveTo(R + 30, TOP + 40); ctx.lineTo(R + 70, TOP + 40); ctx.stroke(); ctx.restore();
    /* two loops: water rises through the middle, spreads at the surface and sinks at the walls */
    const cx = [590, 810], cy0 = 372, rx = 96, ry = 120;
    cx.forEach((c, k) => {
      const sgn = k ? 1 : -1;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.setLineDash([6, 10]); ctx.beginPath(); ctx.ellipse(c, cy0, rx, ry, 0, 0, TAU); ctx.stroke(); ctx.restore();
    });
    arrow(ctx, 700, 430, 700, 330, PAL.ink, 4); arrow(ctx, 500, 320, 500, 420, PAL.ink, 4); arrow(ctx, 900, 320, 900, 420, PAL.ink, 4);
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 95);
    lab.add('热水上升', 700, 300, 0, -1, PAL.ink, 22, 30);
    lab.add('较冷的水下沉', 500, 470, -1, 0.3, PAL.ink, 22, 40);
    lab.add('灶头', 860, 585, 1, 0, rb, 20, 24);
    lab.flush();
    text(ctx, '每个点是沿着环流运动的一个水团。', 200, 596, PAL.muted, { size: 17 });
  }
  /* the 28 parcels as one flat list of x, y: on the room's loop, or 14 on each of the pot's two loops */
  const N = 28, ROOMLOOP = rectLoop(345, 1110, 205, 515, 60);
  const parcels = {
    room: (ph) => Array.from({ length: N }, (_, i) => ROOMLOOP.at((ph / TAU) * ROOMLOOP.P + (i * ROOMLOOP.P) / N)).flat(),
    pot: (ph) => Array.from({ length: N }, (_, i) => { const k = i % 2, sgn = k ? 1 : -1, a = sgn * ph + (Math.floor(i / 2) * TAU) / (N / 2); return [[590, 810][k] + 96 * Math.cos(a), 372 + 120 * Math.sin(a)]; }).flat(),
  };
  function draw() {
    const { ctx } = begin(d.c);
    const ph = phaseOf(cy), isRoom = scene.value === 'room', f = isRoom ? FLUIDS.air : FLUIDS.water, pct = pctLighter(f, dT.v);
    for (const [v, paint] of [['room', room], ['pot', pot]]) {
      const a = scene.a(v); if (!(a > 0)) continue;
      const [ox, oy] = scene.off(v, [0, 24]);
      ctx.save(); ctx.globalAlpha = a; ctx.translate(ox, oy); paint(ctx, ph); ctx.restore();
    }
    const pts = scene.mix((v) => parcels[v](ph));
    for (let i = 0; i < pts.length; i += 2) parcel(ctx, pts[i], pts[i + 1]);
    densityBars(ctx, scene.mix((v) => (v === 'room' ? 1238 : 1160)), 470, f, dT.v, 220);
    topline(ctx, isRoom
      ? `比房间空气暖 ${fmt(dT.v, 0)} °C 的空气轻 ${fmt(pct, 1)}%，所以房间里的空气把它托起：它沿墙上升，沿天花板冷却，再从另一侧下沉。`
      : `比其余部分暖 ${fmt(dT.v, 0)} °C 的水轻 ${fmt(pct, 2)}%，所以它从锅的中部上升，在水面和锅壁处冷却，然后下沉。`);
    readout(d.readout, rhoReadout(f, dT.v),
      isRoom ? '作用在被加热空气上的浮力，即它所排开的房间空气的重力，大于它自身的重力。'
        : '水的膨胀比空气小得多，但作用在被加热的水上的浮力仍然超过它的重力。');
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
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 0, max: 30, step: 0.5, value: 10, unit: '°C', dec: 1, aria: '进入空气的温度变化' });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.25, max: 6, step: 0.05, value: 0.5, unit: 'h', dec: 2, aria: '空气的换气时间', detents: [{ v: 0.5 }, { v: 2, label: '新建住宅' }, { v: 6, label: '密封良好' }] });
  const Vs = ctl(d.controls, { label: '\\kvol', cls: 'volume', min: 100, max: 1500, step: 1, value: 648, unit: 'm³', dec: 0, aria: '房屋中空气的体积' });
  const RHO = 1.29, CP = 1000;
  /* the bar holds 70 kW, the largest rate the sliders can ask for (1500 m³, 30 °C, a quarter hour) */
  const BAR = { l: 800, r: 1340, y: 190, h: 40, max: 70 };
  const GRID = { l: 800, t: 290, cols: 40, dx: 13.5, dy: 15, rows: 17 };
  function house(ctx) {
    const L = 120, R = 640, FL = 470, CE = 220, rh = F.ref('leaky-house');
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(L, CE, R - L, FL - CE); ctx.restore();
    line(ctx, L - 40, FL, R + 40, FL, PAL.ink, 4); line(ctx, L, FL, L, CE, rh, 3); line(ctx, R, FL, R, CE, rh, 3);
    ctx.save(); ctx.strokeStyle = rh; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L - 40, CE); ctx.lineTo((L + R) / 2, 130); ctx.lineTo(R + 40, CE); ctx.closePath(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.strokeRect(330, 280, 110, 80); ctx.strokeRect(160, 340, 60, 130); ctx.restore();
    /* cold air in at the cracks of the left wall, warm air out at the right: symbolic arrows in ink */
    [300, 420].forEach((y) => arrow(ctx, L - 70, y, L + 40, y, PAL.ink, 4));
    [270, 400].forEach((y) => arrow(ctx, R - 40, y, R + 70, y, PAL.ink, 4));
    text(ctx, '冷空气进入', L - 70, 350, PAL.ink, { size: 20, weight: 600 });
    text(ctx, '暖空气排出', R + 70, 330, PAL.ink, { size: 20, weight: 600, align: 'right' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('power'), m = RHO * Vs.v, Q = m * CP * dT.v, tsec = ts.v * 3600, P = Q / tsec, kW = P / 1000, bulbs = Math.round(P / 100);
    house(ctx);
    text(ctx, `V = ${fmt(Vs.v, 0)} m³ 的空气`, 380, 240, C('volume'), { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, `m = ρV = ${fmt(m, 0)} kg`, 380, 264, C('mass'), { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, `每 ${fmt(ts.v, 2)} h 更换一次，`, 430, 408, PAL.ink, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, `升温 ${fmt(dT.v, 1)} °C`, 430, 434, PAL.ink, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the bar of watts */
    text(ctx, '热传递速率 Q/t (kW)', BAR.l, BAR.y - 34, pc, { size: 20, weight: 600 });
    ctx.save(); ctx.fillStyle = alpha(pc, 0.15); ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, BAR.r - BAR.l, BAR.h);
    ctx.fillStyle = pc; ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, Math.min(1, kW / BAR.max) * (BAR.r - BAR.l), BAR.h); ctx.restore();
    for (let k = 0; k <= BAR.max; k += 10) { const x = BAR.l + (k / BAR.max) * (BAR.r - BAR.l); line(ctx, x, BAR.y + BAR.h / 2, x, BAR.y + BAR.h / 2 + 8, PAL.muted, 2); text(ctx, String(k), x, BAR.y + BAR.h / 2 + 24, PAL.muted, { size: 17, align: 'center' }); }
    const bx = BAR.l + Math.min(1, kW / BAR.max) * (BAR.r - BAR.l);
    text(ctx, fmt(kW, 2) + ' kW', Math.min(bx + 12, BAR.r - 90), BAR.y, pc, { size: 22, weight: 600, bg: PAL.panel });
    /* the bulbs, one per 100 W */
    const cap = GRID.cols * GRID.rows, shown = Math.min(bulbs, cap);
    for (let i = 0; i < shown; i++) { const cx = GRID.l + 6 + (i % GRID.cols) * GRID.dx, cyy = GRID.t + Math.floor(i / GRID.cols) * GRID.dy; dot(ctx, cx, cyy, pc, true, 5); }
    text(ctx, `${bulbs} 个 100 W 灯泡` + (bulbs > cap ? `，另有 ${bulbs - cap} 个排不下` : ''), BAR.l, GRID.t - 34, pc, { size: 20, weight: 600 });
    topline(ctx, bulbs === 0 ? `没有温度变化时，进入的空气不需要加热，取暖器无需工作。`
      : `每 ${fmt(ts.v, 2)} h 使 ${fmt(m, 0)} kg 空气升温 ${fmt(dT.v, 1)} °C，需要 ${fmt(kW, 2)} kW，相当于 ${bulbs} 个 100 W 灯泡的功率。`);
    readout(d.readout, `\\frac{\\kQh}{\\kt} = \\frac{\\km\\,\\kcspec\\,\\kdTemp}{\\kt} = \\frac{(${fmt(m, 0)}\\ \\text{kg})(1000\\ \\text{J/kg}\\cdot{}^\\circ\\text{C})(${fmt(dT.v, 1)}^\\circ\\text{C})}{${fmt(tsec, 0)}\\ \\text{s}} = \\htmlClass{kv-power}{${fmt(kW, 2)}\\ \\text{kW}}`,
      `空气的质量为 $\\km = \\krho\\kvol = (1.29\\ \\text{kg/m}^3)(${fmt(Vs.v, 0)}\\ \\text{m}^3) = ${fmt(m, 0)}\\ \\text{kg}$。`);
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
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -40, max: 5, step: 1, value: 0, unit: '°C', dec: 0, aria: '流动空气的温度', detents: ROWS.map((v) => ({ v })) });
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 15, unit: 'm/s', dec: 1, aria: '风速', detents: COLS.map((v) => ({ v })) });
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
  function thermometer(ctx, x, T, name, tc, rc) {
    const lines = Array.isArray(name) ? name : [name];
    const Y = (v) => TH.bot - ((v - TH.lo) / (TH.hi - TH.lo)) * (TH.bot - TH.top);
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel; rrect(ctx, x - 14, TH.top - 14, 28, TH.bot - TH.top + 14, 14); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, TH.bot + 20, 24, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = tc; ctx.beginPath(); ctx.arc(x, TH.bot + 20, 17, 0, TAU); ctx.fill(); ctx.fillRect(x - 6, Y(T), 12, TH.bot + 12 - Y(T)); ctx.restore();
    for (let v = TH.lo; v <= TH.hi; v += 10) { line(ctx, x + 14, Y(v), x + 22, Y(v), PAL.muted, 2); if (v % 20 === -10 || v === 10) text(ctx, neg(v), x + 28, Y(v), PAL.muted, { size: 15 }); }
    lines.forEach((ln, i) => text(ctx, ln, x, TH.top - 36 - (lines.length - 1 - i) * 22, rc, { size: 18, weight: 600, align: 'center' }));
    text(ctx, neg(fmt(T, 0)) + ' °C', x, TH.bot + 62, tc, { size: 22, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), vc = C('velocity'), T = Ts.v, v = vs.v, W = chill(T, v);
    hits.length = 0;
    /* the person in the wind, the wind drawn as arrows whose length follows the speed */
    line(ctx, 60, 520, 470, 520, PAL.muted, 3);
    silhouette(ctx, { x: 300, y: 520, s: 2.4, face: -1, pose: 'lean', color: F.ref('person-wind') });   /* leaning into the wind, which comes from the left */
    if (v > 0) [230, 300, 370].forEach((y, i) => { const L = 40 + v * 7; arrow(ctx, 60 + (i % 2) * 20, y, 60 + (i % 2) * 20 + L, y, vc, 4); });
    text(ctx, v > 0 ? `风速 ${fmt(v, 1)} m/s` : '静止空气', 70, 440, vc, { size: 20, weight: 600 });
    thermometer(ctx, 570, T, '流动空气', tc, F.ref('air-thermometer'));
    thermometer(ctx, 720, W, ['产生同样风寒的', '静止空气'], tc, F.ref('chill-thermometer'));
    /* the table as one curve per row, the current row picked out, the reader's point on it */
    const { X, Y } = axes(ctx, GB, [0, 20], [-90, 10], { xl: '风速 (m/s)', xc: vc, yl: '产生同样风寒的静止空气 (°C)', yc: tc, nx: 4, ny: 5, fy: (y) => neg(fmt(y, 0)) });
    ROWS.forEach((Tr, r) => { curve(ctx, (x) => chillRow(r, x), 0, 20, X, Y, alpha(PAL.muted, 0.6), 2, 40); hits.push({ x: X(20), y: Y(chillRow(r, 20)), r: 14, name: `${neg(Tr)} °C 的流动空气` }); dot(ctx, X(20), Y(chillRow(r, 20)), PAL.muted, false, 5); });
    curve(ctx, (x) => chill(T, x), 0, 20, X, Y, tc, 5, 40);
    line(ctx, X(v), Y(W), X(v), GB.b, vc, 2, [4, 8]); line(ctx, GB.l, Y(W), X(v), Y(W), tc, 2, [4, 8]);
    pinned(ctx, GB, X, Y, v, W, PAL.ink);
    text(ctx, `${neg(fmt(T, 0))} °C 的流动空气`, X(10), Y(chill(T, 10)) - 22, tc, { size: 17, weight: 600, align: 'center', bg: PAL.panel });
    topline(ctx, v === 0 ? `${neg(fmt(T, 0))} °C 的静止空气，其致冷效果就是读数本身，因为没有风把被加热的空气从身体带走。`
      : `${fmt(v, 1)} m/s 的风在 ${neg(fmt(T, 0))} °C 时，其寒冷程度相当于约 ${neg(fmt(W, 0))} °C 的静止空气。`);
    readout(d.readout, `\\kTemp = ${fmt(T, 0)}^\\circ\\text{C},\\quad \\kv = ${fmt(v, 1)}\\ \\text{m/s} \\quad\\Rightarrow\\quad \\text{风寒温度} = ${fmt(W, 0)}^\\circ\\text{C}`,
      v === 0 ? '在静止空气中，风寒温度就是空气温度本身；表 14.4 从 2 m/s 开始。'
        : onGrid(T, v) ? '该数值读自表 14.4：流动空气通过对流把热量从身体带走的速率，与温度低这么多的静止空气仅靠热传导带走热量的速率一样快。'
          : '在表 14.4 的各表项之间，图中画的是直线，所以这个数是近似的；表本身只给出各行各列处的值。');
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
  const ds = ctl(d.controls, { label: 'd', cls: 'position', min: 1, max: 100, step: 1, value: 1, unit: 'mm', dec: 0, aria: '气室的大小', detents: [{ v: 1 }, { v: 10, label: '双层玻璃' }, { v: 90, label: '墙体空腔' }] });
  const dT = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 5, max: 40, step: 1, value: 20, unit: '°C', dec: 0, aria: '气室两侧的温差' });
  const cy = cycle(() => Infinity, 0);
  /* the buoyant drive of a pocket against the viscous drag on it grows as d³ΔT (the Rayleigh number of air,
     1.06 × 10⁸ ΔT d³ with d in metres), and a loop begins to turn where it passes about 1700 */
  const RA = (dmm, dt) => 1.062e8 * dt * Math.pow(dmm / 1000, 3), RAC = 1708;
  const rate = () => { const ra = RA(ds.v, dT.v); return 2.5 * Math.tanh(Math.sqrt(Math.max(0, ra - RAC) / RAC) / 8) + 0.03 * Math.min(1, ra / RAC); };
  const state = () => { const w = rate(); return w < 0.05 ? 'still' : w < 0.6 ? 'creep' : 'free'; };
  const names = () => (ds.v <= 3 ? { layer: '皮毛', warm: '身体（温暖）', cold: '空气（寒冷）' } : ds.v <= 20 ? { layer: '两层玻璃之间的间隙', warm: '内侧玻璃（温暖）', cold: '外侧玻璃（寒冷）' } : { layer: '墙体空腔', warm: '内墙（温暖）', cold: '外墙（寒冷）' });
  const LAY = { l: 430, r: 800, t: 150, b: 550 };
  const LOOPS = []; for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) LOOPS.push({ x: LAY.l + 62 + c * 123, y: LAY.t + 55 + r * 96 });
  const hits = LOOPS.map((p) => ({ x: p.x, y: p.y, r: 44, name: '一个气室中的对流环流' }));
  hover(d.stage, () => hits);
  /* the fibres of the fur, drawn once from a fixed seed so they do not shimmer */
  const FIB = []; { let s = 7; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; for (let i = 0; i < 260; i++) FIB.push([LAY.l + rnd() * (LAY.r - LAY.l), LAY.t + rnd() * (LAY.b - LAY.t), (rnd() - 0.5) * 1.2, 14 + rnd() * 18]); }
  function draw() {
    const { ctx } = begin(d.c);
    const ph = phaseOf(cy), nm = names(), st = state(), f = FLUIDS.air, pct = pctLighter(f, dT.v);
    /* the warm side, the cold side and the layer between */
    const rw = F.ref('warm-side'), rl = F.ref('layer'), rc = F.ref('cold-side');
    ctx.save(); ctx.fillStyle = alpha(rw, 0.16); ctx.fillRect(LAY.r, LAY.t, 1400 - LAY.r - 60, LAY.b - LAY.t); ctx.fillStyle = PAL.soft; ctx.fillRect(LAY.l, LAY.t, LAY.r - LAY.l, LAY.b - LAY.t); ctx.restore();
    line(ctx, LAY.l, LAY.t, LAY.l, LAY.b, rl, 3); line(ctx, LAY.r, LAY.t, LAY.r, LAY.b, rl, 3);
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
    hbracket(ctx, LOOPS[0].x - 40, LOOPS[0].x + 40, LAY.t - 18, C('position'), `d = ${fmt(ds.v, 0)} mm`);
    const lab = labeller(ctx, 600); lab.block(0, 0, 1400, 95);
    lab.add(nm.cold, 300, 330, 0, 0, rc, 22, 0);
    lab.add(nm.warm, 1080, 330, 0, 0, rw, 22, 0);
    lab.add(nm.layer, 615, 578, 0, 0, rl, 22, 0);
    lab.add(st === 'still' ? '每个气室中的空气静止不动' : '每个气室中的对流环流', LOOPS[2].x + 40, LOOPS[2].y, 1, -0.35, PAL.ink, 18, 30);
    lab.flush();
    topline(ctx, st === 'still' ? `在宽 ${fmt(ds.v, 0)} mm 的气室中，空气的黏度使它保持静止，热量只能通过空气的热传导穿过${ds.v <= 3 ? '皮毛' : '空气层'}，而空气是不良导体。`
      : st === 'creep' ? `在 ${fmt(ds.v, 0)} mm 的间隙中，被加热的空气几乎只是缓慢蠕动，所以对流几乎停止，间隙靠空气的低热导率隔热。`
        : `在 ${fmt(ds.v, 0)} mm 的空腔中，被加热的空气自由上升，环流把热量带过空腔：对流起作用，需要隔热来阻止它。`);
    readout(d.readout, rhoReadout(f, dT.v),
      `温暖一侧的空气轻 ${fmt(pct, 1)}%；它所受的浮力按 $d^3$ 增大，而黏性阻力只按 $d$ 增大，所以${st === 'still' ? '这么小的气室使空气保持静止' : st === 'creep' ? '这么大的气室只让空气勉强流动' : '这么大的气室让环流自由转动'}。`);
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
  const Ps = ctl(d.controls, { label: '\\kQh/\\kt', cls: 'power', min: 50, max: 500, step: 1, value: 120, unit: 'W', dec: 0, aria: '身体必须散发的功率', detents: [{ v: 83, label: '睡眠' }, { v: 120 }, { v: 210, label: '静坐' }] });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 5, max: 120, step: 1, value: 60, unit: 'min', dec: 0, aria: '汗液蒸发所经历的时间' });
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
    silhouette(ctx, { x: 250, y: 480, s: 2.6, pose: 'sit', color: F.ref('person-shade') });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.setLineDash([4, 7]);
    for (let i = 0; i < 4; i++) { const x = 180 + i * 34, y = 300 - (i % 2) * 20; ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - 10, y - 30, x + 4, y - 55); ctx.quadraticCurveTo(x + 14, y - 75, x, y - 95); ctx.stroke(); }
    ctx.restore();
    text(ctx, '蒸发的汗液', 40, 120, PAL.ink, { size: 20, weight: 600 });
    text(ctx, `身体散发 ${fmt(P, 0)} W`, 250, 515, pc, { size: 20, weight: 600, align: 'center' });
    /* the bar of grams a minute, in ink since a mass per time carries no type */
    text(ctx, '每分钟蒸发的水 (g/min)', BAR.l, BAR.y - 34, PAL.ink, { size: 20, weight: 600 });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, BAR.r - BAR.l, BAR.h); ctx.fillStyle = PAL.ink; ctx.fillRect(BAR.l, BAR.y - BAR.h / 2, Math.min(1, gpm / BAR.max) * (BAR.r - BAR.l), BAR.h); ctx.restore();
    for (let k = 0; k <= BAR.max; k += 2) { const x = BAR.l + (k / BAR.max) * (BAR.r - BAR.l); line(ctx, x, BAR.y + BAR.h / 2, x, BAR.y + BAR.h / 2 + 8, PAL.muted, 2); text(ctx, String(k), x, BAR.y + BAR.h / 2 + 24, PAL.muted, { size: 17, align: 'center' }); }
    const bx = BAR.l + Math.min(1, gpm / BAR.max) * (BAR.r - BAR.l);
    text(ctx, fmt(gpm, 2) + ' g/min', Math.min(bx + 12, BAR.r - 110), BAR.y, PAL.ink, { size: 22, weight: 600, bg: PAL.panel });
    /* the jug that collects the water evaporated in the time chosen */
    const level = JUG.b - Math.min(1, m / JUG.max) * (JUG.b - JUG.t);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.fillRect(JUG.l, level, JUG.r - JUG.l, JUG.b - level); ctx.restore();
    ctx.save(); ctx.strokeStyle = F.ref('cup'); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(JUG.l - 10, JUG.t); ctx.lineTo(JUG.l, JUG.b); ctx.lineTo(JUG.r, JUG.b); ctx.lineTo(JUG.r + 10, JUG.t); ctx.stroke(); ctx.restore();
    for (let g = 0; g <= JUG.max; g += 250) { const y = JUG.b - (g / JUG.max) * (JUG.b - JUG.t); line(ctx, JUG.r - 12, y, JUG.r, y, PAL.muted, 2); if (g % 500 === 0) text(ctx, g + ' g', JUG.r + 16, y, PAL.muted, { size: 15 }); }
    line(ctx, JUG.l, level, JUG.r, level, PAL.ink, 3);
    text(ctx, `${fmt(tmin, 0)} min 内 ${fmt(m, 0)} g`, (JUG.l + JUG.r) / 2, JUG.t - 30, C('mass'), { size: 20, weight: 600, align: 'center' });
    text(ctx, '蒸发出的水', (JUG.l + JUG.r) / 2, JUG.b + 30, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, `仅靠出汗散发 ${fmt(P, 0)} W，每分钟必须蒸发 ${fmt(gpm, 2)} g 水，${fmt(tmin, 0)} min 内共 ${fmt(m, 0)} g。`);
    readout(d.readout, `\\frac{\\km}{\\kt} = \\frac{\\kQh/\\kt}{\\kLv} = \\frac{${fmt(P, 0)}\\ \\text{J/s}}{2430\\ \\text{J/g}} = ${fmt(gps, 4)}\\ \\text{g/s} = ${fmt(gpm, 2)}\\ \\text{g/min}`,
      `${tmin === 60 && P === 120 ? '休息时一小时约 7 oz，例题认为这是合理的。' : ''}空气必须保持流动，因为没有流动，皮肤旁边的空气就会饱和，蒸发便停止。`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
