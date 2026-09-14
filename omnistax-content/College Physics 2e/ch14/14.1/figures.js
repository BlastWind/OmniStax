/* Figures for section 14.1 Heat. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const sgn = (v) => (v < 0 ? '−' : '');
/* a temperature in degrees with one decimal and a proper minus sign */
const deg = (T) => sgn(T) + fmt(Math.abs(T), 1) + ' °C';
const degTex = (T) => (T < 0 ? '-' : '') + fmt(Math.abs(T), 1) + '^\\circ\\text{C}';
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return sgn(x) + (s.includes('e') || Math.abs(x) >= 1000 ? String(Math.round(Number(s))) : s); };
/* a wavy heat arrow from (x1, y) to (x2, y): the book's convention for heat in transit, drawn moving with the phase ph */
function wavy(ctx, x1, x2, y, color, w, amp, ph) {
  const dir = Math.sign(x2 - x1), L = Math.abs(x2 - x1) - 26, n = Math.max(24, Math.round(L / 6));
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const s = (i / n) * L, px = x1 + dir * s, py = y + amp * Math.sin((s / 22) * TAU - ph); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x1 + dir * L, y, x2, y, color, w);
}
/* a vertical temperature bar beside a body: a frame from lo to hi and a column in the temperature hue up to T */
function tempBar(ctx, x, yb, h, lo, hi, T, label, side) {
  const Y = (v) => yb - ((v - lo) / (hi - lo)) * h;
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x - 12, yb - h, 24, h); ctx.restore();
  ctx.save(); ctx.fillStyle = C('temperature'); ctx.fillRect(x - 12, Y(T), 24, yb - Y(T)); ctx.restore();
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(x - 12, yb - h, 24, h); ctx.restore();
  for (let v = lo; v <= hi + 1e-9; v += 20) { line(ctx, x - 12 - 6 * (side < 0 ? 1 : 0), Y(v), x + 12 + 6 * (side > 0 ? 1 : 0), Y(v), PAL.muted, 1.5); if (v === lo || v === hi || v === 0) text(ctx, fmt(v, 0), x + side * 24, Y(v), PAL.muted, { size: 15, align: side > 0 ? 'left' : 'right' }); }
  text(ctx, label, x, yb - h - 22, C('temperature'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
}
/* a cylinder (a can) standing on the bench, centre x, bottom yb, in ink with a soft fill */
function can(ctx, x, yb, w, h) {
  const r = w / 2, e = w * 0.16;
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x - r, yb - h); ctx.lineTo(x - r, yb); ctx.ellipse(x, yb, r, e, 0, Math.PI, 0, true); ctx.lineTo(x + r, yb - h); ctx.ellipse(x, yb - h, r, e, 0, 0, Math.PI, true); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x, yb - h, r, e, 0, 0, TAU); ctx.stroke();
  line(ctx, x - r, yb - h + 14, x + r, yb - h + 14, PAL.muted, 2); line(ctx, x - r, yb - 14, x + r, yb - 14, PAL.muted, 2);
  ctx.restore();
}
/* an ice cube, a rounded block with two facets, centre x, bottom yb */
function cube(ctx, x, yb, s) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.roundRect(x - s / 2, yb - s, s, s, 14); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - s * 0.3, yb - s * 0.75); ctx.lineTo(x + s * 0.1, yb - s * 0.4); ctx.lineTo(x + s * 0.3, yb - s * 0.55); ctx.moveTo(x - s * 0.25, yb - s * 0.3); ctx.lineTo(x + s * 0.2, yb - s * 0.2); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   FIGURE 14.2: the soft drink and the ice cube. Apart for the first minute,
   then in contact; from then on heat crosses from the hotter body to the
   colder at a rate set by the temperature difference until the two bars
   meet at T'. The graph below follows both temperatures against time.
   Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-equilibrium', 780);
  const T1 = ctl(d.controls, { label: '\\kTempone', cls: 'temperature', min: -20, max: 60, step: 1, value: 30, unit: '°C', dec: 0, onInput: reset, aria: 'temperature of the soft drink' });
  const T2 = ctl(d.controls, { label: '\\kTemptwo', cls: 'temperature', min: -20, max: 60, step: 1, value: -10, unit: '°C', dec: 0, onInput: reset, aria: 'temperature of the ice' });
  const PERIOD = 12, TC = 1.0, TAUR = 1.6;   /* minutes: the loop, the moment of contact, the relaxation time */
  const cy = cycle(() => PERIOD, 1.2);
  function reset() { cy.reset(); }
  const prime = () => (T1.v + T2.v) / 2;
  const temps = (t) => { const k = t < TC ? 1 : Math.exp(-(t - TC) / TAUR); return [prime() + (T1.v - prime()) * k, prime() + (T2.v - prime()) * k]; };
  /* the scene: the bench, the can at a fixed place, the ice sliding in from the right between 0.6 and 1.0 min */
  const BENCH = 392, CANX = 470, CANW = 150, CANH = 220, CUBE = 130, FAR = 880, NEAR = CANX + CANW / 2 + CUBE / 2 + 2, BARB = BENCH - 12;
  const LO = -20, HI = 60;
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), [a, b] = temps(t), diff = a - b, Tp = prime();
    const slide = Math.min(1, Math.max(0, (t - 0.6) / (TC - 0.6))), cx = FAR + (NEAR - FAR) * slide, touching = t >= TC;
    const same = Math.abs(T1.v - T2.v) < 0.5, settled = touching && Math.abs(diff) < 0.1;
    fixed(ctx, 90, BENCH, 1220, 40);
    can(ctx, CANX, BENCH, CANW, CANH);
    text(ctx, 'soft drink', CANX, BENCH - CANH / 2, PAL.ink, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    cube(ctx, cx, BENCH, CUBE);
    text(ctx, 'ice', cx, BENCH - CUBE / 2, PAL.ink, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the temperature bars, one beside each body, the ice's travelling with it */
    tempBar(ctx, CANX - CANW / 2 - 60, BARB, CANH, LO, HI, a, 'T_1 = ' + deg(a), -1);
    tempBar(ctx, cx + CUBE / 2 + 60, BARB, CANH, LO, HI, b, 'T_2 = ' + deg(b), 1);
    /* heat in transit, from the hotter body into the colder, its weight set by the difference that drives it */
    if (touching && !settled) {
      const k = Math.min(1, Math.abs(diff) / 40), hot = diff > 0;
      const x1 = hot ? CANX : cx, x2 = hot ? cx : CANX, y = BENCH - 38;
      wavy(ctx, x1, x2, y, C('energy'), 3 + 4 * k, 4 + 5 * k, t * 6);
      text(ctx, 'Q', (CANX + cx) / 2, y - 26 - 5 * k, C('energy'), { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    }
    if (settled) text(ctx, 'no heat transfer', cx, BENCH - CUBE - 28, PAL.muted, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the heat transferred so far, a bar whose full length is the largest transfer the sliders allow */
    const BX = 1090, BW = 250, BY = 250, moved = Math.abs(T1.v - a);
    text(ctx, 'heat transferred so far', BX, BY - 34, PAL.ink, { size: 18, align: 'left' });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(BX, BY - 14, BW, 28); ctx.fillStyle = C('energy'); ctx.fillRect(BX, BY - 14, BW * (moved / 40), 28); ctx.restore();
    if (moved > 0.5) text(ctx, 'Q', BX + BW * (moved / 40) + 12, BY, C('energy'), { size: 24, weight: 600, align: 'left' });
    /* the graph: both temperatures against time, T' as a level */
    const box = { l: 150, r: 1320, t: 490, b: 700 };
    const { X, Y } = axes(ctx, box, [0, PERIOD], [LO, HI], { xl: 't (min)', xc: C('time'), yl: 'T (°C)', yc: C('temperature'), nx: 6, ny: 4 });
    line(ctx, box.l, Y(Tp), box.r, Y(Tp), alpha(C('temperature'), 0.6), 2, [4, 8]);
    text(ctx, "T′ = " + deg(Tp), box.r - 8, Y(Tp) - 16 < box.t + 10 ? Y(Tp) + 16 : Y(Tp) - 16, C('temperature'), { size: 17, weight: 600, align: 'right', bg: PAL.panel });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => temps(s)[1], 0, PERIOD, X, Y, alpha(C('temperature'), 0.3), 3, 160); ctx.restore();
    curve(ctx, (s) => temps(s)[0], 0, PERIOD, X, Y, alpha(C('temperature'), 0.3), 3, 160);
    if (t > 0.01) {
      ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => temps(s)[1], 0, t, X, Y, C('temperature'), 4, 160); ctx.restore();
      curve(ctx, (s) => temps(s)[0], 0, t, X, Y, C('temperature'), 5, 160);
      line(ctx, X(t), box.b, X(t), Math.min(Y(a), Y(b)), alpha(PAL.ink, 0.35), 2, [4, 8]);
    }
    dot(ctx, X(t), Y(a), C('temperature'), true, 9); dot(ctx, X(t), Y(b), C('temperature'), false, 9);
    /* the two starting labels, the upper one above its curve and the lower one below, kept inside the box; one label when the two start together */
    const up = Math.max(T1.v, T2.v), lo = Math.min(T1.v, T2.v), yUp = Math.max(box.t + 14, Y(up) - 20), yLo = Math.min(box.b - 14, Y(lo) + 20);
    if (same) text(ctx, 'T_1 = T_2', X(0) + 16, Y(up) - 20 < box.t + 10 ? yLo : yUp, C('temperature'), { size: 20, weight: 600, bg: PAL.panel });
    else { text(ctx, T1.v >= T2.v ? 'T_1' : 'T_2', X(0) + 16, yUp, C('temperature'), { size: 20, weight: 600, bg: PAL.panel }); text(ctx, T1.v >= T2.v ? 'T_2' : 'T_1', X(0) + 16, yLo, C('temperature'), { size: 20, weight: 600, bg: PAL.panel }); }
    line(ctx, X(TC), box.t, X(TC), box.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'contact', X(TC) + 8, box.t + 14, PAL.muted, { size: 15, align: 'left' });
    /* the headline and the readout */
    const who = diff > 0 ? 'from the drink to the ice' : 'from the ice to the drink';
    topline(ctx, same ? 'Both at ' + deg(T1.v) + ', the drink and the ice are already in thermal equilibrium, and no heat flows between them.'
      : !touching ? 'Apart on the bench, the drink at ' + deg(a) + ' and the ice at ' + deg(b) + ' are not in thermal equilibrium.'
      : settled ? 'After ' + fmt(t, 1) + ' min both are at T′ = ' + deg(Tp) + ': with no temperature difference, the transfer has stopped.'
      : 'After ' + fmt(t, 1) + ' min the drink is at ' + deg(a) + ' and the ice at ' + deg(b) + ', and heat still flows ' + who + '.');
    if (same || settled) readout(d.readout, `\\kTempone = \\kTemptwo = \\kTemppr = ${degTex(Tp)}`, 'There is no temperature difference, so there is no heat transfer; the energy each body gained or lost is now part of its internal energy, not a heat it holds.');
    else if (!touching) readout(d.readout, `\\kTempone = ${degTex(a)},\\quad \\kTemptwo = ${degTex(b)},\\quad \\kTempone \\neq \\kTemptwo`, 'The two bodies are not yet in contact. Once they touch, the temperature difference will drive energy from the hotter to the colder one.');
    else readout(d.readout, `\\kTempone = ${degTex(a)},\\quad \\kTemptwo = ${degTex(b)},\\quad \\kTempone - \\kTemptwo = ${degTex(diff)}`, 'Heat flows ' + who + ', and the rate falls as the difference closes.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => PERIOD / 6), draw });
})();

/* =====================================================================
   FIGURE 14.3: Joule's apparatus. Two weights descend a measured height,
   turning paddles in an insulated can of water; the thermometer rises by
   what the same energy delivered as heat would give. The graph beside the
   scene follows the rise against the work done. Finite motion, so it gets
   the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-joule', 880);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 2, max: 20, step: 0.5, value: 10, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of each weight' });
  const h = ctl(d.controls, { label: 'h', cls: '', min: 0.5, max: 2, step: 0.05, value: 1.5, unit: 'm', dec: 2, onInput: reset, aria: 'height of descent' });
  const mw = ctl(d.controls, { label: 'm_{\\text{w}}', cls: '', min: 0.5, max: 5, step: 0.1, value: 1, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of water in the can' });
  const G = 9.80, KCAL = 4186, PERIOD = 5;
  const cy = cycle(() => PERIOD, 1.2);
  function reset() { cy.reset(); }
  /* the scene: the drum and handle at the top, two pulleys, two weights, the can with its paddles and thermometer */
  const DRUMX = 430, DRUMY = 200, DRUMR = 26, PULY = 280, LP = 170, RP = 690, WTOP = 350, WS = 64, CANX = 430, CANW = 230, CANB = 750, CANH = 250, THX = 500;
  const PX = 130;   /* canvas units per metre of descent */
  function drum(ctx, ang) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(DRUMX - DRUMR, DRUMY - 50, 2 * DRUMR, 100); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; for (let i = 0; i < 6; i++) { const yy = DRUMY - 40 + i * 16 + 8 * ((ang / TAU) % 1); if (yy > DRUMY - 48 && yy < DRUMY + 48) line(ctx, DRUMX - DRUMR, yy, DRUMX + DRUMR, yy, PAL.muted, 2); }
    /* the handle above, turning with the drum */
    const hx = DRUMX + 40 * Math.cos(ang), hy = DRUMY - 80 + 10 * Math.sin(ang);
    line(ctx, DRUMX, DRUMY - 50, DRUMX, DRUMY - 80, PAL.ink, 4); line(ctx, DRUMX, DRUMY - 80, hx, hy, PAL.ink, 4); dot(ctx, hx, hy, PAL.ink, true, 7);
    ctx.restore();
  }
  function pulley(ctx, x, y) { dot(ctx, x, y, PAL.soft, true, 22); ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 22, 0, TAU); ctx.stroke(); ctx.restore(); dot(ctx, x, y, PAL.ink, true, 4); }
  function weight(ctx, x, y, label) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(x - WS / 2, y, WS, WS, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, x, y, x, y - 14, PAL.ink, 3);
    text(ctx, label, x, y + WS / 2, PAL.ink, { size: 22, weight: 600, align: 'center' });
  }
  function paddles(ctx, ang, level) {
    const top = CANB - CANH + 40;
    line(ctx, CANX, DRUMY + 50, CANX, CANB - 30, PAL.ink, 4);
    /* the fixed vanes on the can wall, then three tiers of four blades seen from the side: a blade's arm foreshortens as it turns and a blade behind the shaft is drawn faint */
    for (let i = 0; i < 3; i++) { const y = top + 80 + i * 60; line(ctx, CANX - CANW / 2 + 3, y, CANX - CANW / 2 + 28, y, PAL.muted, 3); line(ctx, CANX + CANW / 2 - 3, y, CANX + CANW / 2 - 28, y, PAL.muted, 3); }
    for (let i = 0; i < 3; i++) {
      const y = top + 50 + i * 60;
      for (let k = 0; k < 4; k++) {
        const a = ang + (k * TAU) / 4 + (i * TAU) / 12, bx = CANX + 62 * Math.cos(a), behind = Math.sin(a) < 0, w = 6 + 12 * Math.abs(Math.sin(a));
        ctx.save(); ctx.globalAlpha = behind ? 0.35 : 1; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 3;
        line(ctx, CANX, y, bx, y, PAL.ink, 3); ctx.fillRect(bx - w / 2, y - 13, w, 26); ctx.restore();
      }
    }
  }
  function thermometer(ctx, rise) {
    const yb = CANB - 90, ytop = CANB - CANH - 60, tube = yb - ytop - 20, colH = Math.min(1, rise / 0.4) * tube;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.roundRect(THX - 9, ytop, 18, yb - ytop, 9); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = C('temperature'); ctx.fillRect(THX - 5, yb - 20 - colH, 10, colH + 20); ctx.restore();
    dot(ctx, THX, yb, C('temperature'), true, 13); ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(THX, yb, 13, 0, TAU); ctx.stroke(); ctx.restore();
    for (let v = 0; v <= 0.4 + 1e-9; v += 0.1) { const yy = yb - 20 - (v / 0.4) * tube; line(ctx, THX + 9, yy, THX + 16, yy, PAL.muted, 1.5); text(ctx, fmt(v, 1), THX + 22, yy, PAL.muted, { size: 14, align: 'left' }); }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), f = t / PERIOD, fallen = h.v * f, W = 2 * m.v * G * fallen, Wfull = 2 * m.v * G * h.v, kcal = W / KCAL, rise = kcal / mw.v, done = f >= 1 - 1e-9;
    const ang = (fallen * PX) / DRUMR;
    /* the frame: a table under the can, the drum, the cords over the pulleys, the weights */
    fixed(ctx, CANX - 200, CANB, 400, 24);
    pulley(ctx, LP, PULY); pulley(ctx, RP, PULY);
    line(ctx, DRUMX - DRUMR, PULY - 22, LP, PULY - 22, PAL.ink, 2.5); line(ctx, DRUMX + DRUMR, PULY - 22, RP, PULY - 22, PAL.ink, 2.5);
    const wy = WTOP + fallen * PX;
    line(ctx, LP - 22, PULY, LP - 22, wy - 14, PAL.ink, 2.5); line(ctx, RP + 22, PULY, RP + 22, wy - 14, PAL.ink, 2.5);
    drum(ctx, ang);
    weight(ctx, LP - 22, wy, 'm'); weight(ctx, RP + 22, wy, 'm');
    /* the measured height of descent beside the left weight */
    const hb = WTOP + WS, hpx = h.v * PX;
    line(ctx, LP - 22 - WS / 2 - 10, hb, 70, hb, alpha(PAL.ink, 0.4), 2, [6, 6]); line(ctx, LP - 22 - WS / 2 - 10, hb + hpx, 70, hb + hpx, alpha(PAL.ink, 0.4), 2, [6, 6]);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(84, hb); ctx.lineTo(84, hb + hpx); ctx.moveTo(78, hb); ctx.lineTo(90, hb); ctx.moveTo(78, hb + hpx); ctx.lineTo(90, hb + hpx); ctx.stroke(); ctx.restore();
    text(ctx, 'h = ' + fmt(h.v, 2) + ' m', 100, hb + hpx / 2, PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    /* the can of water, its paddles and its thermometer */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.rect(CANX - CANW / 2, CANB - CANH, CANW, CANH); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.soft; ctx.fillRect(CANX - CANW / 2 + 3, CANB - CANH + 40, CANW - 6, CANH - 43); ctx.restore();
    line(ctx, CANX - CANW / 2, CANB - CANH + 40, CANX + CANW / 2, CANB - CANH + 40, PAL.muted, 2);
    paddles(ctx, ang, CANB - CANH + 40);
    thermometer(ctx, rise);
    text(ctx, 'ΔT = ' + fmt(rise, 3) + ' °C', THX - 30, CANB - CANH - 84, C('temperature'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'insulated can of water, m_w = ' + fmt(mw.v, 2) + ' kg', CANX, CANB + 46, PAL.ink, { size: 17, align: 'center' });
    /* the graph beside the scene: the rise against the work done, a line whose slope is the mechanical equivalent over the water's mass */
    const box = { l: 990, r: 1330, t: 210, b: 720 };   /* fixed: 0 to 800 J across, 0 to 0.40 °C up, from the slider maxima */
    const { X, Y } = axes(ctx, box, [0, 800], [0, 0.4], { xl: 'W (J)', xc: C('energy'), yl: 'ΔT (°C)', yc: C('temperature'), nx: 4, ny: 4, fy: (v) => fmt(v, 1) });
    curve(ctx, (w) => w / KCAL / mw.v, 0, 800, X, Y, alpha(PAL.ink, 0.3), 3, 8);
    curve(ctx, (w) => w / KCAL / mw.v, 0, W, X, Y, C('energy'), 5, 8);
    line(ctx, X(W), Y(rise), X(W), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]); line(ctx, box.l, Y(rise), X(W), Y(rise), alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, X(W), Y(rise), C('temperature'), true, 10);
    text(ctx, '1 kcal = 4186 J', box.r - 8, box.t + 20, PAL.muted, { size: 16, align: 'right' });
    /* the headline and the readout */
    topline(ctx, done ? 'After the full ' + fmt(h.v, 2) + ' m descent the weights have done ' + sig3(Wfull) + ' J = ' + sig3(Wfull / KCAL) + ' kcal of work, and the water has warmed by ' + fmt(rise, 3) + ' °C, the rise that much heat would give.'
      : t < 0.01 ? 'The weights hang ' + fmt(h.v, 2) + ' m above their lowest point, about to fall and turn the paddles in ' + fmt(mw.v, 2) + ' kg of water.'
      : 'The weights have fallen ' + fmt(fallen, 2) + ' m of ' + fmt(h.v, 2) + ' m and done ' + sig3(W) + ' J of work on the water, which has warmed by ' + fmt(rise, 3) + ' °C.');
    readout(d.readout, `\\kW = 2mgh = 2(${fmt(m.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(h.v, 2)}\\ \\text{m}) = ${sig3(Wfull)}\\ \\text{J} = ${sig3(Wfull / KCAL)}\\ \\text{kcal}`,
      done ? 'One kilocalorie warms 1.00 kg of water by 1.00 °C, so ' + sig3(Wfull / KCAL) + ' kcal warms the ' + fmt(mw.v, 2) + ' kg in the can by ' + fmt(rise, 3) + ' °C, which is what the thermometer shows.'
      : 'So far the weights have fallen ' + fmt(fallen, 2) + ' m and done ' + sig3(W) + ' J = ' + sig3(kcal) + ' kcal of work, which has warmed the ' + fmt(mw.v, 2) + ' kg of water by ' + fmt(rise, 3) + ' °C, since one kilocalorie warms 1.00 kg of water by 1.00 °C.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
