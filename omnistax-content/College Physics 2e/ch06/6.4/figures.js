/* Figures for section 6.4 Fictitious Forces and Non-inertial Frames: The Coriolis Force.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI, DEG = 180 / Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
/* a number written plainly where it is of a readable size and in powers of ten where it is not */
function sci(x, d) {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  if (e >= -2 && e <= 3) return fmt(x, Math.max(0, d - e));
  return fmt(x / Math.pow(10, e), d) + ' × 10' + sup(e);
}
function sciTex(x, d) {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  if (e >= -2 && e <= 3) return fmt(x, Math.max(0, d - e));
  return `${fmt(x / Math.pow(10, e), d)} \\times 10^{${e}}`;
}
/* a curved arrow round the top of a circle, counterclockwise, for ω */
function curl(ctx, cx, cy, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI * 0.35, -Math.PI * 0.65, true); ctx.stroke(); ctx.restore();
  const a = -Math.PI * 0.65, tx = cx + r * Math.cos(a), ty = cy + r * Math.sin(a);
  arrow(ctx, tx + 14 * Math.sin(a), ty - 14 * Math.cos(a), tx - 2 * Math.sin(a), ty + 2 * Math.cos(a), color, 3);
}
/* the heading over one half of a two-panel figure, and the rule between the halves */
const panelTitle = (ctx, s, x, y) => text(ctx, s, x, y, PAL.muted, { size: 20, weight: 600, align: 'center' });
const divider = (ctx, x, y1, y2) => line(ctx, x, y1, x, y2, PAL.rule, 2);
/* a disc of boards with its eight spokes, turned through φ */
function disc(ctx, cx, cy, R, phi) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill(); ctx.restore();
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke(); ctx.restore();
  for (let k = 0; k < 8; k++) { const a = phi + (k * TAU) / 8; line(ctx, cx, cy, cx + R * Math.cos(a), cy - R * Math.sin(a), PAL.panel, 3); }
  dot(ctx, cx, cy, PAL.muted, true, 6);
}
/* a car seen from above, its nose along (ux, uy), centred on (x, y) */
function carTop(ctx, x, y, ux, uy, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(Math.atan2(uy, ux) + Math.PI / 2); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4 / s;
  ctx.beginPath(); ctx.moveTo(-52, -96); ctx.quadraticCurveTo(0, -122, 52, -96); ctx.lineTo(52, 96); ctx.quadraticCurveTo(0, 118, -52, 96); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3 / s;
  ctx.beginPath(); ctx.moveTo(-44, -52); ctx.lineTo(44, -52); ctx.moveTo(-44, 20); ctx.lineTo(44, 20); ctx.stroke();
  ctx.restore();
}
/* a test tube whose mouth is at (x, y) and whose rounded end is `len` along (ux, uy) */
function tube(ctx, x, y, ux, uy, len, half, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(Math.atan2(uy, ux)); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(0, -half); ctx.lineTo(len - half, -half); ctx.arc(len - half, 0, half, -Math.PI / 2, Math.PI / 2); ctx.lineTo(0, half); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 6.12: the tight right turn, drawn twice on one clock. On the
   right, from Earth: the car follows the bend under a real force toward
   the centre while the driver keeps the straight line she was already
   travelling. On the left, from inside the car: the car stands still and
   the driver slides to the door under a fictitious force. The car
   travels while the clock runs, so the figure moves.
===================================================================== */
(function () {
  const d = sim('sim-turn', 640);
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 30, step: 1, value: 15, unit: 'm/s', dec: 0, onInput: reset, aria: 'speed of the car' });
  const R = ctl(d.controls, { label: '\\kr', cls: 'position', min: 10, max: 80, step: 1, value: 25, unit: 'm', dec: 0, onInput: reset, aria: 'radius of the bend' });
  const SWEEP = Math.PI / 2;                                  /* one quarter turn to the right per loop */
  const T = () => (SWEEP * R.v) / V.v;
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  const OY = 556, SEATX = 350, SEATY = 345, DOOR = 0.6;   /* she is against the door 0.6 m across the seat */
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), a = (V.v / R.v) * t, Rp = 150 + 1.4 * R.v, k = Rp / R.v, OX = 1035 + Rp / 2;
    const lateral = R.v * (Math.cos(a) - 1 + a * Math.sin(a));   /* how far she has moved across the seat, in metres */
    panelTitle(ctx, 'In the car’s frame of reference', SEATX, 98);
    panelTitle(ctx, 'In Earth’s frame of reference', 1035, 98);
    divider(ctx, 700, 128, 596);

    /* ---- left: the car stands still and the driver slides toward the door ---- */
    carTop(ctx, SEATX, SEATY, 0, -1, PAL.ink, 1.2);
    const slide = Math.min(1, lateral / DOOR), px = SEATX - slide * 40;
    dot(ctx, px, SEATY - 24, PAL.ink, true, 12);
    text(ctx, 'the driver', SEATX + 76, SEATY - 24, PAL.ink, { size: 17 });
    const L = 40 + 96 * Math.min(1, (V.v * V.v) / R.v / 15);
    arrow(ctx, px - 22, SEATY - 24, px - 22 - L, SEATY - 24, C('force'), 5);
    text(ctx, 'fictitious force', px - 26 - L / 2, SEATY - 56, C('force'), { size: 18, weight: 600, align: 'center', bg: PAL.bg });
    text(ctx, slide >= 1 ? 'she is against the door' : 'she has slid ' + fmt(lateral * 100, 0) + ' cm across the seat',
      SEATX, 512, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'and nothing real is pushing her', SEATX, 542, PAL.muted, { size: 17, align: 'center' });

    /* ---- right: the bend, the car on it, and the straight line the driver keeps ---- */
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 60; ctx.beginPath(); ctx.arc(OX, OY, Rp, Math.PI, Math.PI + SWEEP); ctx.stroke(); ctx.restore();
    for (const e of [-30, 30]) { ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(OX, OY, Rp + e, Math.PI, Math.PI + SWEEP); ctx.stroke(); ctx.restore(); }
    dot(ctx, OX, OY, PAL.muted, true, 7);
    text(ctx, 'centre of the bend', OX + 18, OY + 4, PAL.muted, { size: 17 });
    const th = Math.PI + a, cxp = OX + Rp * Math.cos(th), cyp = OY + Rp * Math.sin(th);
    line(ctx, OX, OY, cxp, cyp, C('position'), 2, [10, 10]);
    const ux = -Math.sin(th), uy = Math.cos(th);
    text(ctx, 'r = ' + fmt(R.v, 0) + ' m', OX + Rp * 0.25 * Math.cos(th) - 26 * ux, OY + Rp * 0.25 * Math.sin(th) - 26 * uy, C('position'), { size: 18, weight: 600, align: 'center', bg: PAL.bg });
    carTop(ctx, cxp, cyp, ux, uy, PAL.ink, 0.55);
    const fx = cxp + (OX - cxp) * 0.5, fy = cyp + (OY - cyp) * 0.5;
    arrow(ctx, cxp, cyp, fx, fy, C('force'), 5);
    text(ctx, 'the road’s real force', fx + 36 * ux, fy + 36 * uy, C('force'), { size: 18, weight: 600, align: 'center', bg: PAL.bg });
    const sx = OX - Rp, sy = OY, dy = sy - V.v * t * k;
    line(ctx, sx, sy, sx, dy, C('velocity'), 3, [12, 10]);
    dot(ctx, sx, sy, PAL.muted, false, 9);
    dot(ctx, sx, dy, C('velocity'), true, 11);
    text(ctx, 'her straight line', sx - 16, (sy + dy) / 2, C('velocity'), { size: 18, weight: 600, align: 'right', bg: PAL.bg });

    headline(ctx, 'the car has come ' + fmt(a * DEG, 0) + '° round the bend, and the driver has gone ' + fmt(V.v * t, 1) + ' m in a straight line');
    readout(d.readout, `\\kv = ${fmt(V.v, 0)}\\ \\text{m/s},\\quad \\kr = ${fmt(R.v, 0)}\\ \\text{m}\\ \\Rightarrow\\ \\text{the car has come } ${fmt(a * DEG, 0)}°\\ \\text{round the bend}`,
      'There is no real force to the left on the driver. In Earth’s frame she keeps the straight line she was already travelling and the car is pushed to the right underneath her; in the car’s frame the same thing is felt as a push toward the door, a fictitious force with no physical origin.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 6.13 + 6.15: the merry-go-round, drawn twice on one clock. From
   the ground, a real force holds the rider on his circle, an unshaded
   rider leaves along the tangent, and the ball runs straight to the rim.
   On the boards, the rider sits still under an outward fictitious force
   and the ball's trail curves to the right. The ball crosses the boards
   while the clock runs, so the figure moves.
===================================================================== */
(function () {
  const d = sim('sim-merry', 800);
  const W = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0.3, max: 2, step: 0.05, value: 1, unit: 'rad/s', dec: 2, onInput: reset, aria: 'angular velocity' });
  const RR = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.6, max: 2.8, step: 0.1, value: 2.2, unit: 'm', dec: 1, onInput: reset, aria: 'radius of the rider’s circle' });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1, max: 6, step: 0.1, value: 3, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the ball' });
  const RD = 3;                                               /* the boards reach 3.00 m from the middle */
  const T = () => RD / V.v;
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  const LX = 370, RX = 1030, CY = 450, RP = 250, S = RP / RD, A0 = Math.PI / 4;   /* the rider starts a quarter turn round from the line to B */
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), phi = W.v * t, br = Math.min(RD, V.v * t);
    panelTitle(ctx, 'From the ground', LX, 98);
    panelTitle(ctx, 'On the boards', RX, 98);
    divider(ctx, 700, 128, 762);

    /* ---- left: Earth's frame ---- */
    disc(ctx, LX, CY, RP, phi);
    curl(ctx, LX, CY, RP + 30, C('angular-rate'));
    text(ctx, 'ω', LX, CY - RP - 54, C('angular-rate'), { weight: 600, align: 'center' });
    /* the unshaded rider: no net force on him, so he keeps the tangent he was on */
    const rr = RR.v * S, c0 = Math.cos(A0), s0 = Math.sin(A0);
    const gx0 = LX + rr * c0, gy0 = CY - rr * s0;
    const cap = Math.max(0, Math.min(1.2 * RP, (gy0 - 168) / c0, (gx0 - 70) / s0));
    const glen = Math.min(cap, rr * W.v * t), gx = gx0 - glen * s0, gy = gy0 - glen * c0;
    line(ctx, gx0, gy0, gx, gy, PAL.muted, 2, [8, 8]);
    dot(ctx, gx, gy, PAL.muted, false, 12);
    text(ctx, 'Fnet = 0', gx - 18, gy, PAL.muted, { size: 17, weight: 600, align: 'right', bg: PAL.bg });
    /* the rider, held on his circle by a real force toward the middle */
    const rx = LX + rr * Math.cos(phi + A0), ry = CY - rr * Math.sin(phi + A0);
    line(ctx, LX, CY, rx, ry, C('position'), 2, [8, 8]);
    dot(ctx, rx, ry, PAL.ink, true, 12);
    arrow(ctx, rx, ry, rx + (LX - rx) * 0.46, ry + (CY - ry) * 0.46, C('force'), 5);
    text(ctx, 'he must hang on', rx + (LX - rx) * 0.54, ry + (CY - ry) * 0.54 - 22, C('force'), { size: 17, weight: 600, align: 'center', bg: PAL.bg });
    /* the ball, dead straight over the ground */
    line(ctx, LX, CY, LX + br * S, CY, C('velocity'), 5);
    dot(ctx, LX + br * S, CY, C('velocity'), true, 10);
    dot(ctx, LX, CY, PAL.muted, false, 8);
    text(ctx, 'A', LX - 10, CY + 28, PAL.ink, { size: 20, weight: 600, align: 'right' });
    dot(ctx, LX + RP, CY, PAL.muted, false, 9);
    text(ctx, 'B', LX + RP + 8, CY + 26, PAL.muted, { size: 20, weight: 600 });
    const bx = LX + RP * Math.cos(phi), by = CY - RP * Math.sin(phi);
    dot(ctx, bx, by, PAL.ink, false, 10);
    text(ctx, 'B′', bx + 24 * Math.cos(phi), by - 24 * Math.sin(phi), PAL.ink, { size: 20, weight: 600, align: 'center' });

    /* ---- right: the boards' own frame ---- */
    disc(ctx, RX, CY, RP, 0);
    const qx = RX + rr * Math.cos(A0), qy = CY - rr * Math.sin(A0);
    line(ctx, RX, CY, RX + RP, CY, PAL.muted, 2, [8, 8]);
    dot(ctx, qx, qy, PAL.ink, true, 12);
    const ax2 = qx + 78 * Math.cos(A0), ay2 = qy - 78 * Math.sin(A0);
    arrow(ctx, qx, qy, ax2, ay2, C('force'), 5);
    text(ctx, 'centrifugal force', (qx + ax2) / 2 - 20, (qy + ay2) / 2 - 26, C('force'), { size: 17, weight: 600, align: 'center', bg: PAL.bg });
    /* the ball's trail in the dust: straight over the ground, curved to the right here */
    ctx.save(); ctx.strokeStyle = C('velocity'); ctx.lineWidth = 5; ctx.beginPath();
    const n = 120;
    for (let i = 0; i <= n; i++) { const s = (br * i) / n, ang = -W.v * (s / V.v), ex = RX + s * S * Math.cos(ang), ey = CY - s * S * Math.sin(ang); if (i) ctx.lineTo(ex, ey); else ctx.moveTo(ex, ey); }
    ctx.stroke(); ctx.restore();
    const ea = -W.v * t, hx = RX + br * S * Math.cos(ea), hy = CY - br * S * Math.sin(ea);
    dot(ctx, hx, hy, C('velocity'), true, 10);
    dot(ctx, RX, CY, PAL.muted, false, 8);
    text(ctx, 'A', RX - 10, CY + 28, PAL.ink, { size: 20, weight: 600, align: 'right' });
    dot(ctx, RX + RP, CY, PAL.ink, false, 10);
    text(ctx, 'B', RX + RP + 24, CY + 22, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'the trail in the dust curves to the right', RX, CY + RP + 48, PAL.muted, { size: 18, align: 'center' });

    headline(ctx, 'in the ' + fmt(T(), 2) + ' s the ball takes to cross, the boards turn ' + fmt(W.v * T() * DEG, 0) + '°, so its trail bends that far to the right');
    readout(d.readout, `\\kt = \\frac{${fmt(RD, 2)}\\ \\text{m}}{\\kv} = \\frac{${fmt(RD, 2)}\\ \\text{m}}{${fmt(V.v, 2)}\\ \\text{m/s}} = ${fmt(T(), 2)}\\ \\text{s},\\qquad \\kw\\kt = ${fmt(W.v * T(), 2)}\\ \\text{rad} = ${fmt(W.v * T() * DEG, 0)}°`,
      'Nothing pushes the ball sideways. It travels in a straight line over the ground, and the trail it leaves in the dust curves to the right only because the boards turn underneath it. In the merry-go-round’s own frame that curve is explained by the fictitious Coriolis force, and the rider is thrown outward by the fictitious centrifugal force; neither force has a physical origin.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 6.14: the centrifuge. From the ground, the tangent along which
   a particle's inertia would carry it and the real force from the wall
   of the tube; in the tube's own frame, the particles pressed to the
   outer end. A rotor at 200 rad/s turns thirty-two times a second, so
   there is no honest way to animate it and none is drawn: the figure
   answers its sliders, registers no cycle and takes no transport.
===================================================================== */
(function () {
  const d = sim('sim-centrifuge', 600);
  const W = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 20, max: 400, step: 5, value: 200, unit: 'rad/s', dec: 0, aria: 'angular velocity' });
  const R = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.05, max: 0.3, step: 0.005, value: 0.15, unit: 'm', dec: 3, aria: 'radius of the tube' });
  const G = 9.8, AX = 270, AY = 350;
  function draw() {
    const { ctx } = begin(d.c);
    const ac = R.v * W.v * W.v, ratio = ac / G;
    panelTitle(ctx, 'From the ground', 380, 96);
    panelTitle(ctx, 'In the tube’s frame of reference', 1035, 96);
    divider(ctx, 700, 126, 512);

    /* ---- left: the rotor seen from above ---- */
    const Rp = 85 + 340 * (R.v - 0.05);                       /* 0.05 m to 0.30 m across 85 to 170 logical units */
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([12, 12]); ctx.beginPath(); ctx.arc(AX, AY, Rp, 0, TAU); ctx.stroke(); ctx.restore();
    curl(ctx, AX, AY, Rp + 34, C('angular-rate'));
    text(ctx, 'ω', AX, AY - Rp - 52, C('angular-rate'), { weight: 600, align: 'center' });
    line(ctx, AX, AY, AX + Rp, AY, PAL.muted, 5);
    dot(ctx, AX, AY, PAL.muted, true, 8);
    text(ctx, 'the axis', AX - 18, AY, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'r = ' + fmt(R.v, 3) + ' m', AX + Rp * 0.5, AY - 46, C('position'), { size: 18, weight: 600, align: 'center', bg: PAL.bg });
    tube(ctx, AX + Rp - 30, AY, 1, 0, 126, 30, PAL.ink);
    const qx = AX + Rp + 40, qy = AY;
    line(ctx, qx, qy + 66, qx, qy - 130, PAL.muted, 2, [10, 10]);
    text(ctx, 'inertia carries it along the tangent', qx, qy + 94, PAL.muted, { size: 17, align: 'center', bg: PAL.bg });
    dot(ctx, qx, qy, PAL.ink, true, 9);
    arrow(ctx, qx, qy, qx - 74, qy, C('force'), 5);
    text(ctx, 'the wall’s real force', qx - 37, qy + 54, C('force'), { size: 17, weight: 600, align: 'center', bg: PAL.bg });

    /* ---- right: the tube as the sample meets it ---- */
    const TX = 1035, TY = 150, TL = 320;
    tube(ctx, TX, TY, 0, 1, TL, 52, PAL.ink);
    ctx.save(); ctx.fillStyle = alpha(C('force'), 0.1); ctx.beginPath(); ctx.rect(TX - 48, TY + 6, 96, TL - 12); ctx.fill(); ctx.restore();
    const pellet = Math.min(0.46, 0.1 + 0.14 * Math.log10(Math.max(2, ratio)));
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.3); ctx.beginPath(); ctx.rect(TX - 48, TY + TL - 24 - pellet * TL, 96, pellet * TL); ctx.fill(); ctx.restore();
    for (let i = 0; i < 12; i++) { const fr = ((i * 7) % 12) / 12, yy = TY + TL - 40 - fr * fr * (TL - 90); dot(ctx, TX - 32 + ((i * 23) % 66), yy, PAL.ink, true, 6); }
    arrow(ctx, TX + 90, TY + 56, TX + 90, TY + TL - 34, C('force'), 5);
    text(ctx, 'centrifugal force', TX + 104, TY + TL / 2 - 12, C('force'), { size: 18, weight: 600 });
    text(ctx, 'with no physical origin', TX + 104, TY + TL / 2 + 16, PAL.muted, { size: 17 });
    text(ctx, 'the axis is this way', TX, TY - 26, PAL.muted, { size: 17, align: 'center' });

    /* the ladder of accelerations, in multiples of g */
    const LL = 200, LR = 1200, LY = 540, X = (u) => LL + ((LR - LL) * Math.log10(u)) / 4;
    line(ctx, LL, LY, LR, LY, PAL.muted, 3);
    for (let e = 0; e <= 4; e++) { const xx = X(Math.pow(10, e)); line(ctx, xx, LY - 9, xx, LY + 9, PAL.muted, 2); text(ctx, e === 0 ? '1 g' : '10' + sup(e) + ' g', xx, LY + 30, PAL.muted, { size: 17, align: 'center' }); }
    const mark = X(Math.min(10000, Math.max(1, ratio)));
    dot(ctx, mark, LY, C('acceleration'), true, 10);
    text(ctx, fmt(ratio, 0) + ' g', mark, LY - 28, C('acceleration'), { size: 18, weight: 600, align: 'center', bg: PAL.bg });

    headline(ctx, fmt(W.v, 0) + ' rad/s at ' + fmt(R.v, 3) + ' m from the axis accelerates the tube’s contents ' + fmt(ratio, 0) + ' times as strongly as gravity');
    readout(d.readout, `\\kac = \\kr\\kw^2 = (${fmt(R.v, 3)}\\ \\text{m})(${fmt(W.v, 0)}\\ \\text{rad/s})^2 = ${sciTex(ac, 2)}\\ \\text{m/s}^2 = ${fmt(ratio, 0)}\\,\\kg`,
      'The greater the angular velocity, the greater the fictitious centrifugal force in the tube’s frame and the quicker the particles settle. What really happens is that the inertia of each particle carries it along a line tangent to the circle while the wall of the tube forces it round a circle of constant radius.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the winds round a low, once in each hemisphere. Air flows in from
   every side and is turned to the right of its motion in the north and
   to the left in the south, so the inward winds become a circulation.
   The parcels travel while the clock runs, so the figure moves.
===================================================================== */
(function () {
  const d = sim('sim-cyclone', 780);
  const R = ctl(d.controls, { label: '\\kr', cls: 'position', min: 50, max: 2000, step: 50, value: 1000, unit: 'km', dec: 0, onInput: reset, aria: 'radius of the weather system' });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 40, step: 1, value: 20, unit: 'm/s', dec: 0, onInput: reset, aria: 'wind speed' });
  const FC = 1.0e-4;                                          /* Earth turns a moving parcel about this many radians each second */
  const cy = cycle(() => 1, 1.2);
  function reset() { cy.reset(); }
  const LX = 370, RX = 1030, CY = 440, RP = 250, EYE = 0.08;
  const secs = () => (R.v * 1000) / V.v;
  const inflow = () => Math.min(80 / DEG, FC * secs());       /* the angle the wind is turned from the straight line in */
  function at(cx, ang, a0, sgn, tau) {
    const rho = 1 - (1 - EYE) * tau, ph = a0 + sgn * Math.tan(ang) * Math.log(1 / rho);
    return [cx + RP * rho * Math.cos(ph), CY - RP * rho * Math.sin(ph)];
  }
  function panel(ctx, cx, sgn, title) {
    const ang = inflow(), tau = cy.now();
    panelTitle(ctx, title, cx, 98);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([12, 12]); ctx.beginPath(); ctx.arc(cx, CY, RP, 0, TAU); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.beginPath(); ctx.arc(cx, CY, 40, 0, TAU); ctx.fill(); ctx.restore();
    for (let q = 0; q < 4; q++) {
      const a0 = (q * TAU) / 4;
      line(ctx, cx + RP * Math.cos(a0), CY - RP * Math.sin(a0), cx + RP * EYE * Math.cos(a0), CY - RP * EYE * Math.sin(a0), PAL.rule, 2, [10, 10]);
      ctx.save(); ctx.strokeStyle = C('velocity'); ctx.lineWidth = 5; ctx.beginPath();
      const n = 220;
      for (let i = 0; i <= n; i++) { const [x, y] = at(cx, ang, a0, sgn, (tau * i) / n); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
      const [hx, hy] = at(cx, ang, a0, sgn, tau), [bx, by] = at(cx, ang, a0, sgn, Math.max(0, tau - 0.01));
      if (tau > 0.012) arrow(ctx, bx, by, hx, hy, C('velocity'), 5);
      dot(ctx, cx + RP * Math.cos(a0), CY - RP * Math.sin(a0), PAL.muted, false, 8);
    }
    text(ctx, 'LOW', cx, CY, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.bg });
    text(ctx, sgn > 0 ? 'turned to the right, into a counterclockwise circulation' : 'turned to the left, into a clockwise circulation',
      cx, CY + RP + 60, PAL.muted, { size: 18, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = secs(), turn = FC * t, hours = t / 3600;
    panel(ctx, LX, 1, 'Northern hemisphere');
    panel(ctx, RX, -1, 'Southern hemisphere');
    divider(ctx, 700, 128, 742);
    const clause = turn < 0.3 ? 'so the air blows almost straight in'
      : turn < 1.5 ? 'so the air spirals in rather than blowing straight in'
        : 'so the air circles the low rather than blowing into it';
    headline(ctx, fmt(hours, 1) + ' h to the centre · Earth turns the wind through ' + fmt(turn, 1) + ' rad on the way, ' + clause);
    readout(d.readout, `\\kt = \\frac{\\kr}{\\kv} = \\frac{${sciTex(R.v * 1000, 2)}\\ \\text{m}}{${fmt(V.v, 0)}\\ \\text{m/s}} = ${sciTex(t, 1)}\\ \\text{s} = ${fmt(hours, 1)}\\ \\text{h}`,
      'Earth’s rotation turns a moving parcel of air to the right in the northern hemisphere and to the left in the southern one, at about 10⁻⁴ radian each second. Over a street that is nothing, which is why the Coriolis force is usually negligible; over the hours the air takes to cross a thousand kilometres it is more than a right angle, and the inward winds become a circulation, counterclockwise round a low in the north and clockwise round one in the south.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.2), draw });
})();
};
