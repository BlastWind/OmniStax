/* Figures for section 3.5 Addition of Velocities. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, axes, nice, curve, plane, labeller, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a note line set through the macros, for a note that names symbols */
function texNote(host, s) { const sm = el('small', null, ''); host.appendChild(sm); tex(sm, s); }

/* ---------- small helpers shared by the figures ---------- */
const DEG = Math.PI / 180, G = 9.8;
/* three significant figures, never in exponent form, and no negative zero */
const sf = (x, n = 3) => { if (Math.abs(x) < 1e-9) return '0'; const s = x.toPrecision(n); return s.includes('e') ? String(Number(s)) : s; };
const cardinal = (deg) => fmt(deg, 1) + '°';
/* a direction in the book's compass words: "20.0° west of north", "8.0° south of west" */
function compass(vx, vy) {
  if (Math.hypot(vx, vy) < 1e-6) return '无';
  const ax = Math.abs(vx), ay = Math.abs(vy);
  if (ay <= ax) { const off = Math.atan(ay / ax) / DEG, base = vx > 0 ? '东' : '西', side = vy >= 0 ? '北' : '南'; return off < 0.05 ? '正' + base : base + '偏' + side + ' ' + cardinal(off); }
  const off = Math.atan(ax / ay) / DEG, base = vy > 0 ? '北' : '南', side = vx >= 0 ? '东' : '西'; return off < 0.05 ? '正' + base : base + '偏' + side + ' ' + cardinal(off);
}
/* what a wind is to a plane heading north: the parts of it, in words */
function windWords(vwx, vwy) {
  const parts = []; if (vwy < -0.05) parts.push('逆风'); if (vwy > 0.05) parts.push('顺风'); if (Math.abs(vwx) > 0.05) parts.push('侧风');
  return parts.length === 2 ? '一部分是' + parts[0] + '，一部分是' + parts[1] : parts.length ? '是' + parts[0] : '';
}
/* an arc of angle from a0 to a1 (degrees, counterclockwise from +x) about (x, y), with its label just outside */
function angleArc(ctx, x, y, r, a0, a1, color, label, lab) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r, -a0 * DEG, -a1 * DEG, a1 > a0); ctx.stroke(); ctx.restore();
  if (!label) return;
  if (lab) { const m = ((a0 + a1) / 2) * DEG; lab.add(label, x + r * Math.cos(m), y - r * Math.sin(m), Math.cos(m), -Math.sin(m), color, 20, 26); return; }
  const w = F.measure(ctx, label, { size: 20, weight: 600 });
  const m = ((a0 + a1) / 2) * DEG, half = Math.max(0.05, Math.abs(Math.sin(((a1 - a0) / 2) * DEG))), rho = Math.max(r + 26, w / (2 * half) + 24);
  text(ctx, label, x + rho * Math.cos(m), y - rho * Math.sin(m), color, { size: 20, weight: 600, align: 'center' });
}
/* a title over one panel of a figure */
const title = (ctx, s, x, y) => text(ctx, s, x, y, PAL.ink, { size: 20, weight: 600, align: 'center' });
/* a label beside the midpoint of an arrow, pushed off it to one side */
function alongLabel(ctx, s, x1, y1, x2, y2, color, side = 1, size = 20, lab) {
  const L = Math.hypot(x2 - x1, y2 - y1) || 1, nx = (-(y2 - y1) / L) * side, ny = ((x2 - x1) / L) * side;
  if (lab) { lab.add(s, (x1 + x2) / 2, (y1 + y2) / 2, nx, ny, color, size, 22); return; }
  const ox = nx * 16, oy = ny * 16, align = ox > 5 ? 'left' : ox < -5 ? 'right' : 'center';
  text(ctx, s, (x1 + x2) / 2 + ox, (y1 + y2) / 2 + oy, color, { size, weight: 600, align, bg: alpha(PAL.panel, 0.75) });
}

/* ---------- sprites, in the colour they are given ---------- */
/* a rowing boat centred on (x, y), its bow pointing along heading (degrees counterclockwise from +x) */
function boat(ctx, x, y, heading, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-heading * DEG); ctx.scale(s, s); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(34, 0); ctx.quadraticCurveTo(14, -14, -20, -14); ctx.quadraticCurveTo(-30, -14, -30, 0); ctx.quadraticCurveTo(-30, 14, -20, 14); ctx.quadraticCurveTo(14, 14, 34, 0); ctx.closePath(); ctx.fill();   /* the hull, bow to the right */
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.moveTo(24, 0); ctx.quadraticCurveTo(10, -8, -18, -8); ctx.quadraticCurveTo(-24, -8, -24, 0); ctx.quadraticCurveTo(-24, 8, -18, 8); ctx.quadraticCurveTo(10, 8, 24, 0); ctx.closePath(); ctx.fill();   /* the well */
  ctx.fillStyle = color; ctx.fillRect(-6, -8, 5, 16); ctx.fillRect(12, -8, 4, 16);   /* two thwarts */
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(2, -10); ctx.lineTo(-14, -30); ctx.moveTo(2, 10); ctx.lineTo(-14, 30); ctx.stroke();   /* the oars */
  ctx.beginPath(); ctx.ellipse(-16, -33, 6, 3, 0.9, 0, Math.PI * 2); ctx.ellipse(-16, 33, 6, 3, -0.9, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}
/* a sailing ship: the deck at (x, y), the hull below it, a mast H tall with a sail */
function ship(ctx, x, y, H, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x - 78, y); ctx.lineTo(x + 84, y); ctx.lineTo(x + 62, y + 22); ctx.lineTo(x - 62, y + 22); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.soft2; ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(x - 4, y - H + 14); ctx.lineTo(x - 4, y - 16); ctx.lineTo(x - Math.min(70, H * 0.42), y - 16); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  line(ctx, x, y, x, y - H, color, 5);
}
/* a person standing on (x, y): the library's figure, facing the way `face` says */
const person = (ctx, x, y, color, face = 1, s = 0.9) => F.person(ctx, x, y, color, { face, s });
/* a galaxy centred on (x, y): a tilted disc with a bright core */
function galaxy(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.18); ctx.beginPath(); ctx.ellipse(x, y, 54, 20, -0.35, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = alpha(color, 0.35); ctx.beginPath(); ctx.ellipse(x, y, 30, 11, -0.35, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.restore();
}
/* a short streak, for water or air moving past */
const streak = (ctx, x, y, dx, dy, color) => line(ctx, x, y, x + dx, y + dy, color, 2.5);

/* =====================================================================
   FIGURE 3.40: the boat on the river. Pointed straight across, it is
   carried downstream as it crosses; the triangle beside the river adds
   its velocity relative to the water to the velocity of the water.
   Finite motion (one crossing), so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-boat', 640);
  const vb = ctl(d.controls, { label: '\\kvboat', cls: 'velocity', min: 0.1, max: 3, step: 0.01, value: 0.75, unit: 'm/s', dec: 2, onInput: reset, aria: '小船相对于水的速率' });
  const vr = ctl(d.controls, { label: '\\kvriver', cls: 'velocity', min: 0, max: 3, step: 0.01, value: 1.2, unit: 'm/s', dec: 2, onInput: reset, aria: '河水相对于岸的速率' });
  const ph = ctl(d.controls, { label: '\\text{航向}', cls: 'angle', min: 30, max: 150, step: 1, value: 90, unit: '°', dec: 0, specials: [{ at: 90, label: '正对对岸' }], onInput: reset, aria: '小船的航向，与下游方向的夹角（度）' });
  /* The example gives no width for the river, so one is assumed here and the reader may set it. */
  const WC = ctl(d.controls, { label: '\\text{河宽}', cls: 'position', min: 10, max: 30, step: 1, value: 25, unit: 'm', dec: 0, onInput: reset, aria: '河的宽度' });
  const vx = () => vr.v + vb.v * Math.cos(ph.v * DEG), vy = () => vb.v * Math.sin(ph.v * DEG), T = () => WC.v / vy();
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  const L = 70, R = 770, PT = 100, PB = 580;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, ux = vx(), uy = vy(), drift = ux * Tc, vt = Math.hypot(ux, uy), th = Math.atan2(uy, ux) / DEG;
    const straight = ph.v === 90;
    /* the scene at one fixed scale, 14 units to the metre, which holds the widest river the slider allows
       (30 m) in the panel; the boat sets out 100 units in from the panel's upstream end, or from its downstream
       end when it is headed upstream, and a landing beyond the panel is pinned at its edge and named */
    const W = WC.v, s = 14, X0 = ux >= 0 ? L + 100 : R - 100;
    const X = (m) => X0 + m * s, Y = (m) => 340 + (W / 2 - m) * s;
    const lab = labeller(ctx, 640); lab.block(0, 0, 1400, 96);
    ctx.save(); ctx.beginPath(); ctx.rect(L, PT, R - L, PB - PT); ctx.clip();
    ctx.fillStyle = PAL.soft2; ctx.fillRect(L, PT, R - L, PB - PT);
    ctx.fillStyle = PAL.soft; ctx.fillRect(L, Y(W), R - L, W * s);
    const cr = F.ref('river');
    line(ctx, L, Y(W), R, Y(W), cr, 2); line(ctx, L, Y(0), R, Y(0), cr, 2);
    /* the current, as streaks drifting downstream at the river's speed */
    for (let i = 0; i < 18; i++) { const yy = Y(W * ((i % 6) + 0.5) / 6), base = (i * 173) % 700, xx = L + ((base + vr.v * tau * s) % 700 + 700) % 700; streak(ctx, xx, yy, 34, 0, alpha(cr, 0.6)); }
    /* the path relative to the shore, from where the boat set out to where it lands */
    line(ctx, X(0), Y(0), X(drift), Y(W), PAL.muted, 3, [10, 10]);
    const bx = X(ux * tau), by = Y(uy * tau), lx = X(drift), off = lx < L + 10 || lx > R - 10;
    line(ctx, X(0), Y(0), bx, by, PAL.ink, 2.5);
    dot(ctx, X(0), Y(0), PAL.ink, false, 9); if (!off) dot(ctx, lx, Y(W), PAL.ink, true, 9);
    /* the boat, rowed along its heading, and the three velocities riding on it: its own, the river's from
       the head of that, and their sum */
    boat(ctx, bx, by, ph.v, F.ref('boat'), 1.4);
    const k = 70, hx = bx + vb.v * Math.cos(ph.v * DEG) * k, hy = by - vb.v * Math.sin(ph.v * DEG) * k;
    arrow(ctx, bx, by, hx, hy, alpha(C('velocity'), 0.55), 3);
    if (vr.v > 0.02) arrow(ctx, hx, hy, hx + vr.v * k, hy, alpha(C('velocity'), 0.55), 3);
    arrow(ctx, bx, by, bx + ux * k, by - uy * k, C('velocity'), 5);
    ctx.restore();
    if (off) { const ex = lx > R ? R - 12 : L + 12, dir = lx > R ? 1 : -1; arrow(ctx, ex - dir * 30, Y(W), ex, Y(W), PAL.ink, 3); lab.add('靠岸处在' + (drift > 0 ? '下游' : '上游') + ' ' + fmt(Math.abs(drift), 0) + ' m，已超出画面', ex, Y(W), -dir, 0.6, PAL.ink, 17, 26); }
    text(ctx, '下游 →', R - 8, PB + 22, PAL.muted, { size: 17, align: 'right' });
    text(ctx, '对岸', L + 8, Y(W) - 20, F.ref('river'), { size: 17 }); text(ctx, '近岸', L + 8, Y(0) + 22, F.ref('river'), { size: 17 });
    /* the velocity triangle, drawn as the book draws it: the boat's velocity, then the river's head to tail, then the sum */
    const cx = vb.v * Math.cos(ph.v * DEG), sy = vb.v * Math.sin(ph.v * DEG);
    const xs = [0, cx, cx + vr.v], ys = [0, sy], xspan = Math.max(0.6, Math.max(...xs) - Math.min(...xs)), yspan = Math.max(0.6, sy);
    const K = Math.min(400 / xspan, 380 / yspan, 320), Ox = 880 - Math.min(...xs) * K + (460 - xspan * K) / 2, Oy = 540;
    line(ctx, Ox - 40, Oy, Ox + 60, Oy, PAL.muted, 2); line(ctx, Ox, Oy + 30, Ox, Oy - 60, PAL.muted, 2);
    text(ctx, 'x', Ox + 72, Oy, PAL.muted, { size: 18 }); lab.add('y', Ox, Oy - 60, 0, -1, PAL.muted, 18, 14);
    const Hx = Ox + cx * K, Hy = Oy - sy * K, Tx = Ox + ux * K, Ty = Oy - uy * K;
    arrow(ctx, Ox, Oy, Hx, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v（小船）= ' + sf(vb.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), -1, 18, lab);
    if (vr.v > 0.02) { arrow(ctx, Hx, Hy, Hx + vr.v * K, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v（河水）= ' + sf(vr.v) + ' m/s', Hx, Hy, Hx + vr.v * K, Hy, C('velocity'), -1, 18, lab); }
    arrow(ctx, Ox, Oy, Tx, Ty, C('velocity'), 5); alongLabel(ctx, 'v（合）= ' + sf(vt) + ' m/s', Ox, Oy, Tx, Ty, C('velocity'), 1, 20, lab);
    if (vt > 0.05) angleArc(ctx, Ox, Oy, 48, 0, th, C('angle'), th > 8 && th < 172 ? 'θ = ' + fmt(th, 1) + '°' : '', lab);   /* a sliver of an angle is named in the readout only */
    dot(ctx, Ox, Oy, PAL.ink, true, 5);
    lab.flush();
    /* what the numbers say */
    const where = Math.abs(drift) < 0.3 ? '正好在出发点的对面' : '在出发点的' + (drift > 0 ? '下游' : '上游') + ' ' + fmt(Math.abs(drift), 1) + ' m 处';
    topline(ctx, done ? '经过 ' + fmt(Tc, 1) + ' s 后，小船到达对岸，' + where + '，速率为 ' + sf(vt) + ' m/s，与河岸成 ' + fmt(th, 1) + '°。'
      : '经过 ' + fmt(tau, 1) + ' s 后，小船已渡过 ' + fmt(uy * tau, 1) + ' m（河宽 ' + WC.v + ' m），位于出发点' + (ux >= 0 ? '下游' : '上游') + ' ' + fmt(Math.abs(ux * tau), 1) + ' m 处。');
    const main = straight
      ? `\\kvtot = \\sqrt{\\kvx^2 + \\kvy^2} = \\sqrt{(${sf(vr.v)})^2 + (${sf(vb.v)})^2} = ${sf(vt)}\\ \\text{m/s}\\qquad \\ktheta = \\tan^{-1}(\\kvy/\\kvx) = \\tan^{-1}(${sf(vb.v)}/${sf(vr.v)}) = ${fmt(th, 1)}^\\circ`
      : `\\kvx = \\kvriver + \\kvboat\\cos ${ph.v}^\\circ = ${sf(ux)}\\ \\text{m/s},\\quad \\kvy = \\kvboat\\sin ${ph.v}^\\circ = ${sf(uy)}\\ \\text{m/s},\\quad \\kvtot = ${sf(vt)}\\ \\text{m/s，方向角 } ${fmt(th, 1)}^\\circ`;
    const small = straight
      ? (vr.v > vb.v ? '因为河水的速度比小船的速度大，所以小船被迅速冲向下游，合速度与河岸只成一个很小的角。'
        : '因为小船的速度比河水的速度大，所以它只被冲向下游一小段，合速度与河岸成一个很大的角。')
      : '船头比正对对岸偏向' + (ph.v > 90 ? '上游' : '下游') + ' ' + Math.abs(ph.v - 90) + '°，小船' + (Math.abs(drift) < 0.3 ? '抵消了水流，在出发点的正对面靠岸，这正是居家实验要你找出的情形。' : where + '靠岸。');
    readout(d.readout, main, small);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 3.41: the plane in a wind. Pointed north, it moves along its
   total velocity relative to the ground; the triangle beside the map
   adds its velocity relative to the air to the velocity of the air.
   Finite motion (the plane crosses the map), so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-plane', 640);
  const vp = ctl(d.controls, { label: '\\kvp', cls: 'velocity', min: 0, max: 70, step: 0.5, value: 45, unit: 'm/s', dec: 1, onInput: reset, aria: '飞机相对于空气的速率' });
  const vw = ctl(d.controls, { label: '\\kvw', cls: 'velocity', min: 0, max: 40, step: 0.1, value: 16, unit: 'm/s', dec: 1, onInput: reset, aria: '风的速率' });
  const dir = ctl(d.controls, { label: '\\text{风吹向}', cls: 'angle', min: 0, max: 360, step: 0.1, value: 215.6, unit: '°', dec: 1, onInput: reset, aria: '风吹向的方向，自正东起逆时针计的度数' });
  const wx = () => vw.v * Math.cos(dir.v * DEG), wy = () => vw.v * Math.sin(dir.v * DEG), tx = () => wx(), ty = () => vp.v + wy();
  const L = 70, R = 770, PT = 100, PB = 600, x0 = 420;
  const y0 = () => (ty() >= 0 ? 540 : 160);
  function T() { const ax = Math.abs(tx()), ay = Math.abs(ty()); const t = Math.min(ax > 0.05 ? 310 / ax : Infinity, ay > 0.05 ? 400 / ay : Infinity); return isFinite(t) ? t : 5; }
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, ux = tx(), uy = ty(), vt = Math.hypot(ux, uy), vwx = wx(), vwy = wy();
    const lab = labeller(ctx, 640); lab.block(0, 0, 1400, 96);
    /* the map, one unit one meter, with the wind's streaks drifting across it */
    ctx.save(); ctx.beginPath(); ctx.rect(L, PT, R - L, PB - PT); ctx.clip();
    ctx.fillStyle = PAL.soft2; ctx.fillRect(L, PT, R - L, PB - PT);
    ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(L, 300); for (let x = L; x <= R; x += 35) ctx.lineTo(x, 300 + 10 * Math.sin(x / 40)); ctx.lineTo(R, 348); for (let x = R; x >= L; x -= 35) ctx.lineTo(x, 348 + 10 * Math.sin(x / 40 + 1)); ctx.closePath(); ctx.fill();
    const pw = R - L, phh = PB - PT, sl = Math.min(36, 4 + vw.v * 1.6), ux0 = vw.v > 0.02 ? vwx / vw.v : 1, uy0 = vw.v > 0.02 ? -vwy / vw.v : 0;
    for (let i = 0; i < 22; i++) { const bx = (i * 211) % pw, by = (i * 137) % phh, xx = L + (((bx + vwx * tau) % pw) + pw) % pw, yy = PT + (((by - vwy * tau) % phh) + phh) % phh; streak(ctx, xx, yy, sl * ux0, sl * uy0, alpha(F.ref('air'), 0.55)); }
    /* the track over the ground, and the plane on it, still pointed north */
    const sx = x0, sy = y0(), ex = sx + ux * Tc, ey = sy - uy * Tc, px = sx + ux * tau, py = sy - uy * tau;
    line(ctx, sx, sy, ex, ey, PAL.muted, 3, [10, 10]);
    line(ctx, sx, sy, px, py, PAL.ink, 2.5); dot(ctx, sx, sy, PAL.ink, false, 8);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-Math.PI / 2); plane(ctx, 0, 0, F.ref('plane'), 0.9); ctx.restore();
    const k = 4, hx = px, hy = py - vp.v * k;
    arrow(ctx, px, py, hx, hy, alpha(C('velocity'), 0.55), 3);
    if (vw.v > 0.02) arrow(ctx, hx, hy, hx + vwx * k, hy - vwy * k, alpha(C('velocity'), 0.55), 3);
    arrow(ctx, px, py, px + ux * k, py - uy * k, C('velocity'), 5);
    ctx.restore();
    arrow(ctx, L + 30, PB - 30, L + 100, PB - 30, PAL.muted, 3); text(ctx, 'x（东）', L + 110, PB - 30, PAL.muted, { size: 17 });
    arrow(ctx, L + 30, PB - 30, L + 30, PB - 100, PAL.muted, 3); text(ctx, 'y（北）', L + 30, PB - 114, PAL.muted, { size: 17, align: 'center' });
    /* the velocity triangle: the plane's velocity, the wind's from its head, and the sum, at a fixed
       4.2 units per m/s, which holds the tallest triangle the sliders allow (70 m/s of plane and 40 of
       tailwind) in the box beside the map */
    const K = 4.2, Ox = 1090, Oy = Math.min(580, 630 + Math.min(0, uy) * K);   /* a southward total lifts the origin so the triangle stays on the canvas */
    line(ctx, Ox - 180, Oy, Ox + 180, Oy, PAL.muted, 2); line(ctx, Ox, Oy + 40, Ox, Oy - 60, PAL.muted, 2);
    text(ctx, 'x（东）', Ox + 190, Oy, PAL.muted, { size: 17 }); lab.add('y（北）', Ox, Oy - 60, 0, -1, PAL.muted, 17, 14);
    const Hx = Ox, Hy = Oy - vp.v * K, Tx = Ox + ux * K, Ty = Oy - uy * K;
    if (vp.v > 0.02) { arrow(ctx, Ox, Oy, Hx, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v（飞机）= ' + sf(vp.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), ux <= 0 ? 1 : -1, 18, lab); }
    if (vw.v > 0.02) { arrow(ctx, Hx, Hy, Hx + vwx * K, Hy - vwy * K, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v（风）= ' + sf(vw.v) + ' m/s', Hx, Hy, Hx + vwx * K, Hy - vwy * K, C('velocity'), vwy <= 0 ? -1 : 1, 18, lab); }
    arrow(ctx, Ox, Oy, Tx, Ty, C('velocity'), 5); alongLabel(ctx, 'v（合）= ' + sf(vt) + ' m/s', Ox, Oy, Tx, Ty, C('velocity'), ux <= 0 ? -1 : 1, 20, lab);
    if (vt > 0.05) angleArc(ctx, Ox, Oy, 44, 0, Math.atan2(uy, ux) / DEG, C('angle'), fmt(Math.atan2(uy, ux) / DEG, 1) + '°', lab);
    dot(ctx, Ox, Oy, PAL.ink, true, 5);
    lab.flush();
    /* what the numbers say */
    topline(ctx, done ? '飞机的机头指向正北，相对于空气的速率为 ' + sf(vp.v) + ' m/s，但它相对于地面的速率为 ' + sf(vt) + ' m/s，方向为' + compass(ux, uy) + '。'
      : '经过 ' + fmt(tau, 1) + ' s 后，飞机的机头仍指向正北，但它在地面上的航迹方向为' + compass(ux, uy) + '。');
    const words = windWords(vwx, vwy);
    readout(d.readout, `\\kvtotx = \\kvpx + \\kvwx = 0 + (${sf(vwx)}) = ${sf(ux)}\\ \\text{m/s},\\quad \\kvtoty = \\kvpy + \\kvwy = ${sf(vp.v)} + (${sf(vwy)}) = ${sf(uy)}\\ \\text{m/s},\\quad \\kvtot = ${sf(vt)}\\ \\text{m/s}`,
      vw.v < 0.02 ? '没有风时，飞机相对于地面的运动与它在空气中的运动完全一样，以 ' + sf(vp.v) + ' m/s 的速率向正北飞行。'
        : '风' + words + '，所以飞机相对于地面的速率 ' + sf(vt) + ' m/s ' + (Math.abs(vt - vp.v) < 0.05 ? '等于' : vt < vp.v ? '小于' : '大于') + '它相对于空气的 ' + sf(vp.v) + ' m/s，其航迹方向为' + compass(ux, uy) + '。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 3.42: a velocity and its components. Set the magnitude and the
   angle and the components follow; run back the other way, they return
   what was set. A still picture: no cycle, no transport.
===================================================================== */
(function () {
  const d = sim('sim-components', 760);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.2, max: 3, step: 0.01, value: 1.42, unit: 'm/s', dec: 2, aria: '速度的大小' });
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: -180, max: 180, step: 0.5, value: 32, unit: '°', dec: 1, aria: '速度的方向，与 x 轴的夹角（度）' });
  const Ox = 640, Oy = 420;
  function draw() {
    const { ctx } = begin(d.c);
    /* a fixed 110 units per m/s: the longest velocity the slider allows, 3 m/s, is 330 units in any direction */
    const vx = v.v * Math.cos(th.v * DEG), vy = v.v * Math.sin(th.v * DEG), K = 110;
    const lab = labeller(ctx, 760); lab.block(0, 0, 1400, 96);
    /* the axes */
    arrow(ctx, 160, Oy, 1230, Oy, PAL.muted, 2); arrow(ctx, Ox, 740, Ox, 80, PAL.muted, 2);
    text(ctx, 'x', 1246, Oy, PAL.ink, { size: 22, weight: 600 }); text(ctx, 'y', Ox + 22, 86, PAL.ink, { size: 22, weight: 600 });
    /* the components along the axes, then the velocity itself */
    const Hx = Ox + vx * K, Hy = Oy - vy * K;
    if (Math.abs(vx) > 0.01) { arrow(ctx, Ox, Oy, Hx, Oy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vx = ' + sf(vx) + ' m/s', (Ox + Hx) / 2, Oy + (vy >= 0 ? 30 : -30), C('velocity'), { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.75) }); }
    if (Math.abs(vy) > 0.01) { arrow(ctx, Hx, Oy, Hx, Hy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vy = ' + sf(vy) + ' m/s', Hx + (vx >= 0 ? 18 : -18), (Oy + Hy) / 2, C('velocity'), { size: 20, weight: 600, align: vx >= 0 ? 'left' : 'right', bg: alpha(PAL.panel, 0.75) }); }
    arrow(ctx, Ox, Oy, Hx, Hy, C('velocity'), 5);
    alongLabel(ctx, 'v = ' + sf(v.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), vy >= 0 ? -1 : 1, 22, lab);
    if (Math.abs(th.v) > 2) angleArc(ctx, Ox, Oy, 58, 0, th.v, C('angle'), 'θ = ' + fmt(th.v, 1) + '°', lab);
    dot(ctx, Ox, Oy, PAL.ink, true, 5); dot(ctx, Hx, Hy, C('velocity'), true, 7);
    lab.flush();
    /* what the numbers say */
    topline(ctx, '大小为 ' + sf(v.v) + ' m/s、与 x 轴成 ' + fmt(th.v, 1) + '° 的速度，其沿 x 的分量为 ' + sf(vx) + ' m/s，沿 y 的分量为 ' + sf(vy) + ' m/s。');
    const back = Math.hypot(vx, vy), calc = Math.abs(vx) < 1e-9 ? null : Math.atan(vy / vx) / DEG;
    readout(d.readout, `\\kvx = \\kv\\cos\\ktheta = (${sf(v.v)})\\cos ${fmt(th.v, 1)}^\\circ = ${sf(vx)}\\ \\text{m/s}\\qquad \\kvy = \\kv\\sin\\ktheta = (${sf(v.v)})\\sin ${fmt(th.v, 1)}^\\circ = ${sf(vy)}\\ \\text{m/s}`);
    texNote(d.readout, `\\text{再返回来：} \\kv = \\sqrt{\\kvx^2 + \\kvy^2} = ${sf(back)}\\ \\text{m/s}` + (calc === null ? `\\text{，且当 } \\kvx = 0 \\text{ 时，角为 } ${vy > 0 ? '+' : '-'}90^\\circ.`
      : vx < 0 ? `\\text{，而 } \\tan^{-1}(\\kvy/\\kvx) = ${fmt(calc, 1)}^\\circ \\text{ 与 } \\ktheta \\text{ 相差 180°，因为 } \\kvx < 0.` : `\\text{，而 } \\tan^{-1}(\\kvy/\\kvx) = ${fmt(th.v, 1)}^\\circ.`));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.44: the wind found from the total velocity, Example 3.7. The
   plane's velocity and its velocity over the ground are known; the wind
   is what has to be added to one to give the other. A still picture.
===================================================================== */
(function () {
  const d = sim('sim-wind', 600);
  const vp = ctl(d.controls, { label: '\\kvp', cls: 'velocity', min: 10, max: 70, step: 0.5, value: 45, unit: 'm/s', dec: 1, aria: '飞机相对于空气的速率' });
  const vt = ctl(d.controls, { label: '\\kvtot', cls: 'velocity', min: 5, max: 70, step: 0.5, value: 38, unit: 'm/s', dec: 1, aria: '飞机相对于地面的速率' });
  const b = ctl(d.controls, { label: '\\text{北偏西}', cls: 'angle', min: -60, max: 60, step: 0.5, value: 20, unit: '°', dec: 1, aria: '合速度的方向，北偏西的度数' });
  function draw() {
    const { ctx } = begin(d.c);
    const a = 90 + b.v, ux = vt.v * Math.cos(a * DEG), uy = vt.v * Math.sin(a * DEG), vwx = ux, vwy = uy - vp.v, vw = Math.hypot(vwx, vwy);
    /* the triangle at a fixed 6 units per m/s, which holds the tallest the sliders allow, 70 m/s straight
       north, above the origin; the plane sits at the origin, headed north, as the book draws it */
    const K = 6, Ox = 460, Oy = 540;
    const lab = labeller(ctx, 600); lab.block(0, 0, 1400, 96);
    line(ctx, Ox - 340, Oy, Ox + 340, Oy, PAL.muted, 2); line(ctx, Ox, Oy + 40, Ox, Oy - 60, PAL.muted, 2);
    text(ctx, 'x（东）', Ox + 350, Oy, PAL.muted, { size: 17 }); lab.add('y（北）', Ox, Oy - 60, 0, -1, PAL.muted, 17, 14);
    ctx.save(); ctx.translate(Ox, Oy + 34); ctx.rotate(-Math.PI / 2); plane(ctx, 0, 0, PAL.muted, 0.6); ctx.restore();
    const Hx = Ox, Hy = Oy - vp.v * K, Tx = Ox + ux * K, Ty = Oy - uy * K;
    arrow(ctx, Ox, Oy, Hx, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v（飞机）= ' + sf(vp.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), b.v >= 0 ? 1 : -1, 18, lab);
    if (vw > 0.05) { arrow(ctx, Hx, Hy, Tx, Ty, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v（风）= ' + sf(vw) + ' m/s', Hx, Hy, Tx, Ty, C('velocity'), vwy <= 0 ? -1 : 1, 18, lab); }
    arrow(ctx, Ox, Oy, Tx, Ty, C('velocity'), 5); alongLabel(ctx, 'v（合）= ' + sf(vt.v) + ' m/s', Ox, Oy, Tx, Ty, C('velocity'), b.v >= 0 ? -1 : 1, 20, lab);
    angleArc(ctx, Ox, Oy, 48, 0, a, C('angle'), fmt(a, 1) + '°', lab);
    if (Math.abs(b.v) > 2) angleArc(ctx, Ox, Oy, 110, 90, a, C('angle'), (b.v >= 0 ? '北偏西 ' : '北偏东 ') + fmt(Math.abs(b.v), 1) + '°', lab);
    dot(ctx, Ox, Oy, PAL.ink, true, 5);
    lab.flush();
    /* what the numbers say */
    topline(ctx, vw < 0.05 ? '两个速度相等，不需要风来解释飞机的航迹。'
      : '能解释飞机航迹的风，速率为 ' + sf(vw) + ' m/s，吹向' + compass(vwx, vwy) + '。');
    const calc = Math.abs(vwx) < 1e-9 ? null : Math.atan(vwy / vwx) / DEG;
    readout(d.readout, `\\kvwx = \\kvtot\\cos ${fmt(a, 1)}^\\circ = ${sf(vwx)}\\ \\text{m/s},\\quad \\kvwy = \\kvtot\\sin ${fmt(a, 1)}^\\circ - \\kvp = ${sf(vwy)}\\ \\text{m/s},\\quad \\kvw = \\sqrt{\\kvwx^2 + \\kvwy^2} = ${sf(vw)}\\ \\text{m/s}`,
      vw < 0.05 ? '飞机相对于地面的运动与它在空气中的运动完全一样，所以空气没有运动。'
        : (calc === null ? '风没有东西方向的分量，所以它吹向正' + (vwy < 0 ? '南' : '北') : '方向为 tan⁻¹(' + sf(vwy) + '/' + sf(vwx) + ') = ' + fmt(calc, 1) + '°，从 x 轴的' + (vwx < 0 ? '负' : '正') + '方向量起，所以风吹向' + compass(vwx, vwy)) + '；风' + windWords(vwx, vwy) + '。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.45: the binoculars dropped from the mast, seen from the ship
   and from the shore. Finite motion (one fall), so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-binoculars', 600);
  const vs = ctl(d.controls, { label: '\\kv_{\\text{ship}}', cls: 'velocity', min: 0, max: 15, step: 0.5, value: 6, unit: 'm/s', dec: 1, onInput: reset, aria: '船的速率' });
  const h = ctl(d.controls, { label: 'h', cls: 'position', min: 4, max: 20, step: 0.5, value: 12, unit: 'm', dec: 1, onInput: reset, aria: '桅杆的高度' });
  const T = () => Math.sqrt(2 * h.v / G);
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  const DECK = 452, WATER = 474, PT = 90, PB = 560;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, drop = 0.5 * G * tau * tau, vyNow = -G * tau, vyLand = -G * Tc, dShip = vs.v * Tc;
    /* a fixed 13 units to the metre: the tallest mast the slider allows, 20 m, is 260 units, and the
       farthest the ship moves in that fall, 30 m at 15 m/s, keeps it inside the shore panel */
    const s = 13, H = h.v * s, k = 4;
    const panels = [[60, 660, '在船上看'], [740, 1340, '在岸上看']];
    panels.forEach(([L, R, name], i) => {
      const shore = i === 1;
      title(ctx, name, (L + R) / 2, PT + 22);
      ctx.save(); ctx.beginPath(); ctx.rect(L, PT + 44, R - L, PB - PT - 44); ctx.clip();
      ctx.fillStyle = PAL.soft; ctx.fillRect(L, WATER, R - L, PB - WATER);
      /* the water: still for the observer on shore, sliding past for the one on the ship */
      for (let j = 0; j < 9; j++) { const base = (j * 151) % 600, xx = L + ((((base - (shore ? 0 : vs.v * tau * s)) % 600) + 600) % 600), yy = WATER + 18 + (j % 3) * 26; streak(ctx, xx, yy, 28, 0, alpha(PAL.muted, 0.7)); }
      /* the ship: fixed in its own frame, moving in the shore's */
      const mx = shore ? L + 170 + vs.v * tau * s : (L + R) / 2;
      if (shore) { ctx.save(); ctx.globalAlpha = 0.22; ship(ctx, L + 170, DECK, H, F.ref('ship')); ctx.restore(); }
      ship(ctx, mx, DECK, H, F.ref('ship'));
      /* the observer: on the deck beside the mast, or on a strip of shore */
      if (shore) { ctx.save(); ctx.fillStyle = PAL.soft2; ctx.fillRect(L, WATER - 2, 70, PB - WATER + 2); ctx.restore(); person(ctx, L + 35, WATER - 2, F.ref('shore-observer'), 1); }
      else person(ctx, mx + 44, DECK, F.ref('ship-observer'), -1);
      /* the path so far, and the binoculars on it with their velocity in this frame */
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath();
      for (let j = 0; j <= 40; j++) { const t = (tau * j) / 40, x = shore ? L + 170 + vs.v * t * s : mx, y = DECK - H + 0.5 * G * t * t * s; if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
      const bx = mx, by = DECK - H + drop * s;
      dot(ctx, bx, by, F.ref('binoculars'), true, 9);
      const ax = shore ? vs.v * k : 0, ay = -vyNow * k;
      if (Math.hypot(ax, ay) > 4) arrow(ctx, bx, by, bx + ax, by + ay, C('velocity'), 4);
      if (!shore) text(ctx, '双筒望远镜', mx - 14, DECK - H, F.ref('binoculars'), { size: 17, align: 'right' });   /* named where they start; the readout carries the velocities */
      ctx.restore();
    });
    /* what the numbers say */
    topline(ctx, done
      ? (vs.v < 0.05 ? '船静止不动，所以两个观察者看到的是同样的笔直下落，用时 ' + fmt(Tc, 2) + ' s 落到桅杆底部的甲板上。'
        : '双筒望远镜经过 ' + fmt(Tc, 2) + ' s 落在桅杆底部，其间随船向前移动了 ' + fmt(dShip, 1) + ' m。')
      : '经过 ' + fmt(tau, 2) + ' s 后，双筒望远镜已下落 ' + fmt(drop, 1) + ' m，在岸上看，已随船向前移动了 ' + fmt(vs.v * tau, 1) + ' m。');
    readout(d.readout, `\\text{在岸上看：} \\kv = (${fmt(vs.v, 1)},\\ ${sf(vyLand)})\\ \\text{m/s}\\qquad \\text{在船上看：} \\kv = (0,\\ ${sf(vyLand)})\\ \\text{m/s}`);
    texNote(d.readout, `\\text{两者都得到 } \\kvy = -\\sqrt{2\\kg h} = ${sf(vyLand)}\\ \\text{m/s（在甲板处），二者只在水平方向上相差船的 ${fmt(vs.v, 1)} m/s。}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 3.46: the coin dropped in the airliner, Example 3.8. Relative
   to the plane it falls straight down; relative to the Earth it keeps
   the plane's velocity and moves 144 m while it falls. Finite motion.
===================================================================== */
(function () {
  const d = sim('sim-coin', 620);
  const vp = ctl(d.controls, { label: '\\kv_{\\text{plane}}', cls: 'velocity', min: 50, max: 300, step: 1, value: 260, unit: 'm/s', dec: 0, onInput: reset, aria: '飞机的速率' });
  const h = ctl(d.controls, { label: 'h', cls: 'position', min: 0.5, max: 2, step: 0.05, value: 1.5, unit: 'm', dec: 2, onInput: reset, aria: '下落的高度' });
  const T = () => Math.sqrt(2 * h.v / G);
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  /* the cabin of an airliner seen from the aisle: the floor, a wall curving in to the ceiling, two windows
     and the overhead bins; (l, t, r, b) is the box it fills and `floor` the height of the floor line */
  function cabin(ctx, l, t, r, b, floor, color) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = color; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(l, b); ctx.lineTo(l, t + 90); ctx.quadraticCurveTo(l, t, l + 90, t); ctx.lineTo(r - 90, t); ctx.quadraticCurveTo(r, t, r, t + 90); ctx.lineTo(r, b); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.soft2; ctx.fillRect(l + 30, t + 26, r - l - 60, 44); ctx.strokeRect(l + 30, t + 26, r - l - 60, 44);   /* the overhead bins */
    ctx.fillStyle = PAL.panel; for (const wx of [l + 80, r - 80]) { ctx.beginPath(); ctx.roundRect(wx - 26, t + 120, 52, 70, 22); ctx.fill(); ctx.stroke(); }   /* the windows */
    ctx.restore();
    line(ctx, l, floor, r, floor, color, 3);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, drop = 0.5 * G * tau * tau, vy = -G * Tc, R = vp.v * Tc, v = Math.hypot(vp.v, vy), th = Math.atan2(vy, vp.v) / DEG;
    /* left: the cabin, where the coin falls straight down from the passenger's hand, at a fixed 150 units
       to the metre (the highest drop the slider allows, 2 m, is 300 units) */
    title(ctx, '相对于飞机', 290, 112);
    const s = 150, FLOOR = 520, top = FLOOR - h.v * s, CX = 330;
    cabin(ctx, 100, 140, 480, FLOOR, FLOOR, F.ref('airliner')); text(ctx, '地板', 470, FLOOR + 20, F.ref('airliner'), { size: 17, align: 'right' });
    F.person(ctx, CX - 70, FLOOR, F.ref('passenger'), { face: 1, s: 3, reach: { x: CX - 6, y: top } });
    line(ctx, CX, top, CX, FLOOR, PAL.muted, 2, [6, 8]); dot(ctx, CX, top, F.ref('coin'), false, 7);
    vbracket(ctx, CX + 100, top, FLOOR, PAL.ink, fmt(h.v, 2) + ' m', 1);
    const cyy = top + drop * s, k = 8;
    dot(ctx, CX, cyy, F.ref('coin'), true, 9);
    if (tau > 0.02) arrow(ctx, CX, cyy, CX, cyy + G * tau * k, C('velocity'), 4);
    /* right: the ground's view, a graph of the path with the plane above it */
    title(ctx, '相对于地球', 990, 100);
    /* fixed axes: the farthest the coin can travel is 192 m (300 m/s for the 0.64 s fall from 2 m) */
    const box = { l: 700, r: 1320, t: 190, b: 380 }, xr = { lo: 0, hi: 200, n: 4 }, yr = { lo: 0, hi: 2, n: 4 };
    const { X, Y } = axes(ctx, box, [0, xr.hi], [-yr.hi, 0], { xl: 'x (m)', xc: PAL.ink, yl: 'y (m)', yc: PAL.ink, nx: xr.n, ny: yr.n, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 1) });
    curve(ctx, (x) => -0.5 * G * (x / vp.v) * (x / vp.v), 0, R, X, Y, PAL.muted, 3, 60);
    const px = X(vp.v * tau);
    plane(ctx, px, 124, F.ref('airliner'), 0.55);
    line(ctx, px, 146, px, Y(-drop) - 12, PAL.muted, 1.5, [4, 8]);
    dot(ctx, X(0), Y(0), PAL.ink, false, 7); dot(ctx, X(R), Y(-h.v), PAL.ink, true, 7);
    dot(ctx, px, Y(-drop), F.ref('coin'), true, 9);
    /* the velocity at the floor, to one scale: the fall is a stub beside the plane's speed */
    text(ctx, '硬币在地板处相对于地球的速度', 700, 448, PAL.muted, { size: 17 });
    const kx = 540 / 300, ox = 700, oy = 500, tipx = ox + vp.v * kx, tipy = oy - vy * kx;
    arrow(ctx, ox, oy, tipx, oy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vx = ' + sf(vp.v) + ' m/s', (ox + tipx) / 2, oy - 22, C('velocity'), { size: 18, weight: 600, align: 'center' });
    arrow(ctx, tipx, oy, tipx, tipy, alpha(C('velocity'), 0.6), 3.5); const far = tipx > 1100; text(ctx, 'vy = ' + sf(vy) + ' m/s', far ? tipx : tipx + 16, far ? oy + 30 : tipy, C('velocity'), { size: 18, weight: 600, align: far ? 'right' : 'left' });   /* under the tip where the stage edge is near */
    arrow(ctx, ox, oy, tipx, tipy, C('velocity'), 5);
    text(ctx, 'v = ' + sf(v, 5) + ' m/s，方向角 ' + fmt(th, 2) + '°', ox, oy + 48, C('velocity'), { size: 20, weight: 600 });
    /* what the numbers say */
    topline(ctx, done ? '硬币经过 ' + fmt(Tc, 3) + ' s 落地，落在掉落处下方 ' + fmt(h.v, 2) + ' m、沿地面 ' + fmt(R, 0) + ' m 处，速率为 ' + sf(v, 5) + ' m/s。'
      : '经过 ' + fmt(tau, 2) + ' s 后，硬币已下落 ' + fmt(drop, 2) + ' m，并沿地面运动了 ' + fmt(vp.v * tau, 0) + ' m，始终在乘客的正下方。');
    readout(d.readout, `\\kv = \\sqrt{\\kvx^2 + \\kvy^2} = \\sqrt{(${sf(vp.v)})^2 + (${sf(vy)})^2} = ${sf(v, 5)}\\ \\text{m/s}\\qquad \\ktheta = \\tan^{-1}(\\kvy/\\kvx) = \\tan^{-1}(${sf(vy)}/${sf(vp.v)}) = ${fmt(th, 2)}^\\circ`,
      '相对于飞机，硬币在地板处的速度只有 ' + sf(vy) + ' m/s，笔直向下，与它在地面上从静止释放时相同。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE: the five galaxies of problems 12 and 13, copied faithfully
   with the book's numbers. No sliders, no motion.
===================================================================== */
(function () {
  const d = sim('fig-galaxies', 320);
  const ROWS = [[1, '300 百万光年', -4500, 190], [2, '150 百万光年', -2200, 470], [3, '', 0, 700], [4, '190 百万光年', 2830, 930], [5, '450 百万光年', 6700, 1200]];
  function draw() {
    const { ctx } = begin(d.c);
    line(ctx, 60, 165, 1340, 165, PAL.rule, 1.5);
    ROWS.forEach(([n, dist, vel, x]) => {
      const cg = n === 3 ? F.ref('milky-way') : PAL.ink;
      text(ctx, n === 3 ? '星系 3' : '星系 ' + n, x, 62, cg, { size: 22, weight: 600, align: 'center' });
      text(ctx, n === 3 ? 'MW' : dist, x, 92, n === 3 ? cg : C('position'), { size: 20, align: 'center' });
      galaxy(ctx, x, 165, cg);
      if (vel) {
        const len = vel * 0.026; arrow(ctx, x, 235, x + len, 235, C('velocity'), 4);
        text(ctx, 'v' + '₁₂₃₄₅'[n - 1] + ' = ' + (vel < 0 ? '−' : '') + Math.abs(vel) + ' km/s', x, 278, C('velocity'), { size: 20, weight: 600, align: 'center' });
      }
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
