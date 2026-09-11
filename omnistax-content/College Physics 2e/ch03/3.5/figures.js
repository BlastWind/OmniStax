/* Figures for section 3.5 Addition of Velocities. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, axes, nice, curve, plane, FONT } = F;
const demo = (id, H) => F.demo(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const DEG = Math.PI / 180, G = 9.8;
/* three significant figures, never in exponent form, and no negative zero */
const sf = (x, n = 3) => { if (Math.abs(x) < 1e-9) return '0'; const s = x.toPrecision(n); return s.includes('e') ? String(Number(s)) : s; };
const cardinal = (deg) => fmt(deg, 1) + '°';
/* a direction in the book's compass words: "20.0° west of north", "8.0° south of west" */
function compass(vx, vy) {
  if (Math.hypot(vx, vy) < 1e-6) return 'in no direction at all';
  const ax = Math.abs(vx), ay = Math.abs(vy);
  if (ay <= ax) { const off = Math.atan(ay / ax) / DEG, base = vx > 0 ? 'east' : 'west', side = vy >= 0 ? 'north' : 'south'; return off < 0.05 ? 'due ' + base : cardinal(off) + ' ' + side + ' of ' + base; }
  const off = Math.atan(ax / ay) / DEG, base = vy > 0 ? 'north' : 'south', side = vx >= 0 ? 'east' : 'west'; return off < 0.05 ? 'due ' + base : cardinal(off) + ' ' + side + ' of ' + base;
}
/* what a wind is to a plane heading north: the parts of it, in words */
function windWords(vwx, vwy) {
  const parts = []; if (vwy < -0.05) parts.push('a headwind'); if (vwy > 0.05) parts.push('a tailwind'); if (Math.abs(vwx) > 0.05) parts.push('a crosswind');
  return parts.length === 2 ? 'partly ' + parts[0] + ' and partly ' + parts[1] : parts[0] ?? '';
}
/* an arc of angle from a0 to a1 (degrees, counterclockwise from +x) about (x, y), with its label just outside */
function angleArc(ctx, x, y, r, a0, a1, color, label) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r, -a0 * DEG, -a1 * DEG, a1 > a0); ctx.stroke(); ctx.restore();
  if (!label) return;
  ctx.save(); ctx.font = `600 20px ${FONT}`; const w = ctx.measureText(label).width; ctx.restore();
  const m = ((a0 + a1) / 2) * DEG, half = Math.max(0.05, Math.abs(Math.sin(((a1 - a0) / 2) * DEG))), rho = Math.max(r + 26, w / (2 * half) + 24);
  text(ctx, label, x + rho * Math.cos(m), y - rho * Math.sin(m), color, { size: 20, weight: 600, align: 'center' });
}
/* a title over one panel of a figure */
const title = (ctx, s, x, y) => text(ctx, s, x, y, PAL.ink, { size: 20, weight: 600, align: 'center' });
/* a label beside the midpoint of an arrow, pushed off it to one side */
function alongLabel(ctx, s, x1, y1, x2, y2, color, side = 1, size = 20) {
  const L = Math.hypot(x2 - x1, y2 - y1) || 1, ox = (-(y2 - y1) / L) * 16 * side, oy = ((x2 - x1) / L) * 16 * side;
  const align = ox > 5 ? 'left' : ox < -5 ? 'right' : 'center';
  text(ctx, s, (x1 + x2) / 2 + ox, (y1 + y2) / 2 + oy, color, { size, weight: 600, align, bg: alpha(PAL.panel, 0.75) });
}

/* ---------- sprites, in ink ---------- */
/* a rowing boat centred on (x, y), its bow pointing along heading (degrees counterclockwise from +x) */
function boat(ctx, x, y, heading, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-heading * DEG); ctx.scale(s, s); ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(30, 0); ctx.quadraticCurveTo(10, -13, -20, -13); ctx.lineTo(-26, 0); ctx.lineTo(-20, 13); ctx.quadraticCurveTo(10, 13, 30, 0); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.fillRect(-12, -7, 8, 14); ctx.restore();
}
/* a sailing ship: the deck at (x, y), the hull below it, a mast H tall with a sail */
function ship(ctx, x, y, H, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x - 78, y); ctx.lineTo(x + 84, y); ctx.lineTo(x + 62, y + 22); ctx.lineTo(x - 62, y + 22); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.soft2; ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(x - 4, y - H + 14); ctx.lineTo(x - 4, y - 16); ctx.lineTo(x - Math.min(70, H * 0.42), y - 16); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  line(ctx, x, y, x, y - H, color, 5);
}
/* a person standing on (x, y), facing the reader */
function person(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(x, y - 48, 8, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x, y - 40); ctx.lineTo(x, y - 16); ctx.moveTo(x, y - 16); ctx.lineTo(x - 8, y); ctx.moveTo(x, y - 16); ctx.lineTo(x + 8, y); ctx.moveTo(x - 12, y - 24); ctx.lineTo(x + 12, y - 24); ctx.stroke(); ctx.restore();
}
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
  const d = demo('demo-boat', 640);
  const vb = ctl(d.controls, { label: '\\kvboat', cls: 'velocity', min: 0.1, max: 3, step: 0.01, value: 0.75, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed of the boat relative to the water' });
  const vr = ctl(d.controls, { label: '\\kvriver', cls: 'velocity', min: 0, max: 3, step: 0.01, value: 1.2, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed of the river relative to the shore' });
  const ph = ctl(d.controls, { label: '\\text{heading}', cls: '', min: 30, max: 150, step: 1, value: 90, unit: '°', dec: 0, onInput: reset, aria: 'heading of the boat, degrees from downstream' });
  const W = 25;   /* the river's width in meters, which the book does not give */
  const vx = () => vr.v + vb.v * Math.cos(ph.v * DEG), vy = () => vb.v * Math.sin(ph.v * DEG), T = () => W / vy();
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  const L = 70, R = 770, PT = 100, PB = 580;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, ux = vx(), uy = vy(), drift = ux * Tc, vt = Math.hypot(ux, uy), th = Math.atan2(uy, ux) / DEG;
    const straight = ph.v === 90;
    /* the scene: one scale for both axes, chosen so the whole crossing fits the panel */
    const margin = 5, xmin = Math.min(0, drift) - margin, span = Math.max(drift, 0) - Math.min(drift, 0) + 2 * margin;
    const s = Math.max(Math.min(430 / W, 700 / span), 130 / W), X = (m) => L + (m - xmin) * s, Y = (m) => 340 + (W / 2 - m) * s;
    ctx.save(); ctx.beginPath(); ctx.rect(L, PT, R - L, PB - PT); ctx.clip();
    ctx.fillStyle = PAL.soft2; ctx.fillRect(L, PT, R - L, PB - PT);
    ctx.fillStyle = PAL.soft; ctx.fillRect(L, Y(W), R - L, W * s);
    line(ctx, L, Y(W), R, Y(W), PAL.muted, 2); line(ctx, L, Y(0), R, Y(0), PAL.muted, 2);
    /* the current, as streaks drifting downstream at the river's speed */
    for (let i = 0; i < 18; i++) { const yy = Y(W * ((i % 6) + 0.5) / 6), base = (i * 173) % 700, xx = L + ((base + vr.v * tau * s) % 700 + 700) % 700; streak(ctx, xx, yy, 34, 0, alpha(PAL.muted, 0.6)); }
    /* the path relative to the shore, from where the boat set out to where it lands */
    line(ctx, X(0), Y(0), X(drift), Y(W), PAL.muted, 3, [10, 10]);
    const bx = X(ux * tau), by = Y(uy * tau);
    line(ctx, X(0), Y(0), bx, by, PAL.ink, 2.5);
    dot(ctx, X(0), Y(0), PAL.ink, false, 9); dot(ctx, X(drift), Y(W), PAL.ink, true, 9);
    boat(ctx, bx, by, ph.v, PAL.ink, 1.5);
    /* the three velocities ride on the boat: the boat's own, the river's from its head, and their sum */
    const k = 70, hx = bx + vb.v * Math.cos(ph.v * DEG) * k, hy = by - vb.v * Math.sin(ph.v * DEG) * k;
    arrow(ctx, bx, by, hx, hy, alpha(C('velocity'), 0.55), 3);
    if (vr.v > 0.02) arrow(ctx, hx, hy, hx + vr.v * k, hy, alpha(C('velocity'), 0.55), 3);
    arrow(ctx, bx, by, bx + ux * k, by - uy * k, C('velocity'), 5);
    text(ctx, 'v (total)', bx + ux * k + 12, by - uy * k - 12, C('velocity'), { size: 17, weight: 600 });
    ctx.restore();
    text(ctx, 'downstream →', R - 8, PB + 22, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'far bank', L + 8, Y(W) - 20, PAL.muted, { size: 17 }); text(ctx, 'near bank', L + 8, Y(0) + 22, PAL.muted, { size: 17 });
    /* the velocity triangle, drawn as the book draws it: the boat's velocity, then the river's head to tail, then the sum */
    const cx = vb.v * Math.cos(ph.v * DEG), sy = vb.v * Math.sin(ph.v * DEG);
    const xs = [0, cx, cx + vr.v], ys = [0, sy], xspan = Math.max(0.6, Math.max(...xs) - Math.min(...xs)), yspan = Math.max(0.6, sy);
    const K = Math.min(400 / xspan, 380 / yspan, 320), Ox = 880 - Math.min(...xs) * K + (460 - xspan * K) / 2, Oy = 540;
    line(ctx, Ox - 40, Oy, Ox + 60, Oy, PAL.muted, 2); line(ctx, Ox, Oy + 30, Ox, Oy - 60, PAL.muted, 2);
    text(ctx, 'x', Ox + 72, Oy, PAL.muted, { size: 18 }); text(ctx, 'y', Ox, Oy - 74, PAL.muted, { size: 18, align: 'center' });
    const Hx = Ox + cx * K, Hy = Oy - sy * K, Tx = Ox + ux * K, Ty = Oy - uy * K;
    arrow(ctx, Ox, Oy, Hx, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v (boat) = ' + sf(vb.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), -1, 18);
    if (vr.v > 0.02) { arrow(ctx, Hx, Hy, Hx + vr.v * K, Hy, alpha(C('velocity'), 0.55), 3); text(ctx, 'v (river) = ' + sf(vr.v) + ' m/s', (2 * Hx + vr.v * K) / 2, Hy - 24, C('velocity'), { size: 18, weight: 600, align: 'center' }); }
    arrow(ctx, Ox, Oy, Tx, Ty, C('velocity'), 5); alongLabel(ctx, 'v (total) = ' + sf(vt) + ' m/s', Ox, Oy, Tx, Ty, C('velocity'), 1);
    if (vt > 0.05) angleArc(ctx, Ox, Oy, 48, 0, th, PAL.ink, 'θ = ' + fmt(th, 1) + '°');
    dot(ctx, Ox, Oy, PAL.ink, true, 5);
    /* what the numbers say */
    const where = Math.abs(drift) < 0.3 ? 'straight across from where it set out' : fmt(Math.abs(drift), 1) + ' m ' + (drift > 0 ? 'downstream' : 'upstream');
    headline(ctx, done ? 'after ' + fmt(Tc, 1) + ' s the boat reaches the far bank ' + where + ', moving at ' + sf(vt) + ' m/s, ' + fmt(th, 1) + '° from the bank'
      : 't = ' + fmt(tau, 1) + ' s · the boat has crossed ' + fmt(uy * tau, 1) + ' m of the ' + W + ' m river and is ' + fmt(Math.abs(ux * tau), 1) + ' m ' + (ux >= 0 ? 'downstream' : 'upstream') + ' of where it set out');
    const main = straight
      ? `\\kvtot = \\sqrt{\\kvx^2 + \\kvy^2} = \\sqrt{(${sf(vr.v)})^2 + (${sf(vb.v)})^2} = ${sf(vt)}\\ \\text{m/s}\\qquad \\theta = \\tan^{-1}(\\kvy/\\kvx) = \\tan^{-1}(${sf(vb.v)}/${sf(vr.v)}) = ${fmt(th, 1)}^\\circ`
      : `\\kvx = \\kvriver + \\kvboat\\cos ${ph.v}^\\circ = ${sf(ux)}\\ \\text{m/s},\\quad \\kvy = \\kvboat\\sin ${ph.v}^\\circ = ${sf(uy)}\\ \\text{m/s},\\quad \\kvtot = ${sf(vt)}\\ \\text{m/s at } ${fmt(th, 1)}^\\circ`;
    const small = straight
      ? (vr.v > vb.v ? 'Because the river is fast compared with the boat, the boat is swept rapidly downstream, and the total velocity makes only a small angle with the bank.'
        : 'Because the boat is fast compared with the river, it is carried only a little downstream, and the total velocity makes a large angle with the bank.')
      : 'Pointed ' + Math.abs(ph.v - 90) + '° ' + (ph.v > 90 ? 'upstream' : 'downstream') + ' of straight across, the boat ' + (Math.abs(drift) < 0.3 ? 'cancels the current and lands straight across, which is what the take-home experiment asks you to find.' : 'lands ' + where + ' of where it set out.');
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
  const d = demo('demo-plane', 640);
  const vp = ctl(d.controls, { label: '\\kvp', cls: 'velocity', min: 0, max: 70, step: 0.5, value: 45, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the plane relative to the air' });
  const vw = ctl(d.controls, { label: '\\kvw', cls: 'velocity', min: 0, max: 40, step: 0.1, value: 16, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the wind' });
  const dir = ctl(d.controls, { label: '\\text{wind toward}', cls: '', min: 0, max: 360, step: 0.1, value: 215.6, unit: '°', dec: 1, onInput: reset, aria: 'direction the wind blows toward, degrees counterclockwise from east' });
  const wx = () => vw.v * Math.cos(dir.v * DEG), wy = () => vw.v * Math.sin(dir.v * DEG), tx = () => wx(), ty = () => vp.v + wy();
  const L = 70, R = 770, PT = 100, PB = 600, x0 = 420;
  const y0 = () => (ty() >= 0 ? 540 : 160);
  function T() { const ax = Math.abs(tx()), ay = Math.abs(ty()); const t = Math.min(ax > 0.05 ? 310 / ax : Infinity, ay > 0.05 ? 400 / ay : Infinity); return isFinite(t) ? t : 5; }
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, ux = tx(), uy = ty(), vt = Math.hypot(ux, uy), vwx = wx(), vwy = wy();
    /* the map, one unit one meter, with the wind's streaks drifting across it */
    ctx.save(); ctx.beginPath(); ctx.rect(L, PT, R - L, PB - PT); ctx.clip();
    ctx.fillStyle = PAL.soft2; ctx.fillRect(L, PT, R - L, PB - PT);
    ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(L, 300); for (let x = L; x <= R; x += 35) ctx.lineTo(x, 300 + 10 * Math.sin(x / 40)); ctx.lineTo(R, 348); for (let x = R; x >= L; x -= 35) ctx.lineTo(x, 348 + 10 * Math.sin(x / 40 + 1)); ctx.closePath(); ctx.fill();
    const pw = R - L, phh = PB - PT, sl = Math.min(36, 4 + vw.v * 1.6), ux0 = vw.v > 0.02 ? vwx / vw.v : 1, uy0 = vw.v > 0.02 ? -vwy / vw.v : 0;
    for (let i = 0; i < 22; i++) { const bx = (i * 211) % pw, by = (i * 137) % phh, xx = L + (((bx + vwx * tau) % pw) + pw) % pw, yy = PT + (((by - vwy * tau) % phh) + phh) % phh; streak(ctx, xx, yy, sl * ux0, sl * uy0, alpha(PAL.muted, 0.55)); }
    /* the track over the ground, and the plane on it, still pointed north */
    const sx = x0, sy = y0(), ex = sx + ux * Tc, ey = sy - uy * Tc, px = sx + ux * tau, py = sy - uy * tau;
    line(ctx, sx, sy, ex, ey, PAL.muted, 3, [10, 10]);
    line(ctx, sx, sy, px, py, PAL.ink, 2.5); dot(ctx, sx, sy, PAL.ink, false, 8);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-Math.PI / 2); plane(ctx, 0, 0, PAL.ink, 0.9); ctx.restore();
    const k = 4, hx = px, hy = py - vp.v * k;
    arrow(ctx, px, py, hx, hy, alpha(C('velocity'), 0.55), 3);
    if (vw.v > 0.02) arrow(ctx, hx, hy, hx + vwx * k, hy - vwy * k, alpha(C('velocity'), 0.55), 3);
    arrow(ctx, px, py, px + ux * k, py - uy * k, C('velocity'), 5);
    text(ctx, 'v (total)', px + ux * k + (ux >= 0 ? 12 : -12), py - uy * k - 12, C('velocity'), { size: 17, weight: 600, align: ux >= 0 ? 'left' : 'right' });
    ctx.restore();
    arrow(ctx, L + 30, PB - 30, L + 100, PB - 30, PAL.muted, 3); text(ctx, 'x (east)', L + 110, PB - 30, PAL.muted, { size: 17 });
    arrow(ctx, L + 30, PB - 30, L + 30, PB - 100, PAL.muted, 3); text(ctx, 'y (north)', L + 30, PB - 114, PAL.muted, { size: 17, align: 'center' });
    /* the velocity triangle: the plane's velocity, the wind's from its head, and the sum */
    const xs = [0, vwx, ux], ys = [0, vp.v, uy], xspan = Math.max(8, Math.max(...xs) - Math.min(...xs)), yspan = Math.max(8, Math.max(...ys) - Math.min(...ys));
    const K = Math.min(440 / xspan, 430 / yspan, 9), Ox = 840 + (0 - Math.min(...xs)) * K + (500 - xspan * K) / 2, Oy = 560 - (0 - Math.min(...ys)) * K - (470 - yspan * K) / 2;
    line(ctx, Ox - 50, Oy, Ox + 50, Oy, PAL.muted, 2); line(ctx, Ox, Oy + 40, Ox, Oy - 50, PAL.muted, 2);
    text(ctx, 'x (east)', Ox + 60, Oy, PAL.muted, { size: 17 }); text(ctx, 'y (north)', Ox - 12, Oy - 54, PAL.muted, { size: 17, align: 'right' });
    const Hx = Ox, Hy = Oy - vp.v * K, Tx = Ox + ux * K, Ty = Oy - uy * K;
    if (vp.v > 0.02) { arrow(ctx, Ox, Oy, Hx, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v (plane) = ' + sf(vp.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), ux <= 0 ? 1 : -1, 18); }
    if (vw.v > 0.02) { arrow(ctx, Hx, Hy, Hx + vwx * K, Hy - vwy * K, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v (wind) = ' + sf(vw.v) + ' m/s', Hx, Hy, Hx + vwx * K, Hy - vwy * K, C('velocity'), vwy <= 0 ? -1 : 1, 18); }
    arrow(ctx, Ox, Oy, Tx, Ty, C('velocity'), 5); alongLabel(ctx, 'v (total) = ' + sf(vt) + ' m/s', Ox, Oy, Tx, Ty, C('velocity'), ux <= 0 ? -1 : 1);
    if (vt > 0.05) angleArc(ctx, Ox, Oy, 44, 0, Math.atan2(uy, ux) / DEG, PAL.ink, fmt(Math.atan2(uy, ux) / DEG, 1) + '°');
    dot(ctx, Ox, Oy, PAL.ink, true, 5);
    /* what the numbers say */
    headline(ctx, done ? 'the plane points north at ' + sf(vp.v) + ' m/s but moves at ' + sf(vt) + ' m/s, ' + compass(ux, uy) + ', relative to the ground'
      : 't = ' + fmt(tau, 1) + ' s · the plane points north, but its track over the ground runs ' + compass(ux, uy));
    const words = windWords(vwx, vwy);
    readout(d.readout, `\\kvtotx = \\kvpx + \\kvwx = 0 + (${sf(vwx)}) = ${sf(ux)}\\ \\text{m/s},\\quad \\kvtoty = \\kvpy + \\kvwy = ${sf(vp.v)} + (${sf(vwy)}) = ${sf(uy)}\\ \\text{m/s},\\quad \\kvtot = ${sf(vt)}\\ \\text{m/s}`,
      vw.v < 0.02 ? 'With no wind, the plane moves over the ground exactly as it moves through the air, due north at ' + sf(vp.v) + ' m/s.'
        : 'The wind is ' + words + ', so the plane’s speed over the ground, ' + sf(vt) + ' m/s, is ' + (Math.abs(vt - vp.v) < 0.05 ? 'the same as' : vt < vp.v ? 'less than' : 'greater than') + ' its ' + sf(vp.v) + ' m/s relative to the air, and its track runs ' + compass(ux, uy) + '.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 3.42: a velocity and its components. Set the magnitude and the
   angle and the components follow; run back the other way, they return
   what was set. A still picture: no cycle, no transport.
===================================================================== */
(function () {
  const d = demo('demo-components', 760);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.2, max: 5, step: 0.01, value: 1.42, unit: 'm/s', dec: 2, aria: 'magnitude of the velocity' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: -180, max: 180, step: 0.5, value: 32, unit: '°', dec: 1, aria: 'direction of the velocity, degrees from the x-axis' });
  const Ox = 640, Oy = 420;
  function draw() {
    const { ctx } = begin(d.c);
    const vx = v.v * Math.cos(th.v * DEG), vy = v.v * Math.sin(th.v * DEG), K = 330 / Math.max(1.42, v.v);
    /* the axes */
    arrow(ctx, 160, Oy, 1230, Oy, PAL.muted, 2); arrow(ctx, Ox, 740, Ox, 80, PAL.muted, 2);
    text(ctx, 'x', 1246, Oy, PAL.ink, { size: 22, weight: 600 }); text(ctx, 'y', Ox + 22, 86, PAL.ink, { size: 22, weight: 600 });
    /* the components along the axes, then the velocity itself */
    const Hx = Ox + vx * K, Hy = Oy - vy * K;
    if (Math.abs(vx) > 0.01) { arrow(ctx, Ox, Oy, Hx, Oy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vx = ' + sf(vx) + ' m/s', (Ox + Hx) / 2, Oy + (vy >= 0 ? 30 : -30), C('velocity'), { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.75) }); }
    if (Math.abs(vy) > 0.01) { arrow(ctx, Hx, Oy, Hx, Hy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vy = ' + sf(vy) + ' m/s', Hx + (vx >= 0 ? 18 : -18), (Oy + Hy) / 2, C('velocity'), { size: 20, weight: 600, align: vx >= 0 ? 'left' : 'right', bg: alpha(PAL.panel, 0.75) }); }
    arrow(ctx, Ox, Oy, Hx, Hy, C('velocity'), 5);
    alongLabel(ctx, 'v = ' + sf(v.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), vy >= 0 ? -1 : 1, 22);
    if (Math.abs(th.v) > 2) angleArc(ctx, Ox, Oy, 58, 0, th.v, PAL.ink, 'θ = ' + fmt(th.v, 1) + '°');
    dot(ctx, Ox, Oy, PAL.ink, true, 5); dot(ctx, Hx, Hy, C('velocity'), true, 7);
    /* what the numbers say */
    headline(ctx, 'a velocity of ' + sf(v.v) + ' m/s at ' + fmt(th.v, 1) + '° has components ' + sf(vx) + ' m/s along x and ' + sf(vy) + ' m/s along y');
    const back = Math.hypot(vx, vy), calc = Math.abs(vx) < 1e-9 ? null : Math.atan(vy / vx) / DEG;
    const angleNote = calc === null ? ' Because the x component is zero here, the ratio of the y component to it is undefined, and the angle is ' + (vy > 0 ? '+90°' : '−90°') + ' by inspection.'
      : vx < 0 ? ' Because the x component is negative, the angle is 180° away from the ' + fmt(calc, 1) + '° a calculator’s tan⁻¹ returns.' : '';
    readout(d.readout, `\\kvx = \\kv\\cos\\theta = (${sf(v.v)})\\cos ${fmt(th.v, 1)}^\\circ = ${sf(vx)}\\ \\text{m/s}\\qquad \\kvy = \\kv\\sin\\theta = (${sf(v.v)})\\sin ${fmt(th.v, 1)}^\\circ = ${sf(vy)}\\ \\text{m/s}`,
      'The last two equations return what you set: √(' + sf(vx) + '² + ' + sf(vy) + '²) = ' + sf(back) + ' m/s' + (calc === null ? '.' : ', and tan⁻¹(' + sf(vy) + '/' + sf(vx) + ') gives ' + fmt(th.v, 1) + '°.') + angleNote);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.44: the wind found from the total velocity, Example 3.7. The
   plane's velocity and its velocity over the ground are known; the wind
   is what has to be added to one to give the other. A still picture.
===================================================================== */
(function () {
  const d = demo('demo-wind', 600);
  const vp = ctl(d.controls, { label: '\\kvp', cls: 'velocity', min: 10, max: 70, step: 0.5, value: 45, unit: 'm/s', dec: 1, aria: 'speed of the plane relative to the air' });
  const vt = ctl(d.controls, { label: '\\kvtot', cls: 'velocity', min: 5, max: 70, step: 0.5, value: 38, unit: 'm/s', dec: 1, aria: 'speed of the plane relative to the ground' });
  const b = ctl(d.controls, { label: '\\text{west of north}', cls: '', min: -60, max: 60, step: 0.5, value: 20, unit: '°', dec: 1, aria: 'direction of the total velocity, degrees west of north' });
  function draw() {
    const { ctx } = begin(d.c);
    const a = 90 + b.v, ux = vt.v * Math.cos(a * DEG), uy = vt.v * Math.sin(a * DEG), vwx = ux, vwy = uy - vp.v, vw = Math.hypot(vwx, vwy);
    /* the triangle, centred in its box */
    const xs = [0, ux], ys = [0, vp.v, uy], xspan = Math.max(10, Math.max(...xs) - Math.min(...xs)), yspan = Math.max(10, Math.max(...ys) - Math.min(...ys));
    const K = Math.min(560 / xspan, 430 / yspan, 8), Ox = 120 + (0 - Math.min(...xs)) * K + (700 - xspan * K) / 2, Oy = 550 - (0 - Math.min(...ys)) * K - (460 - yspan * K) / 2;
    line(ctx, Ox - 70, Oy, Ox + 70, Oy, PAL.muted, 2); line(ctx, Ox, Oy + 40, Ox, Oy - 50, PAL.muted, 2);
    text(ctx, 'x (east)', Ox + 82, Oy, PAL.muted, { size: 17 }); text(ctx, 'y (north)', Ox - 12, Oy - 54, PAL.muted, { size: 17, align: 'right' });
    ctx.save(); ctx.globalAlpha = 0.35; ctx.translate(Ox, Oy); ctx.rotate(-Math.PI / 2); plane(ctx, 0, 0, PAL.ink, 0.9); ctx.restore();
    const Hx = Ox, Hy = Oy - vp.v * K, Tx = Ox + ux * K, Ty = Oy - uy * K;
    arrow(ctx, Ox, Oy, Hx, Hy, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v (plane) = ' + sf(vp.v) + ' m/s', Ox, Oy, Hx, Hy, C('velocity'), b.v >= 0 ? 1 : -1, 18);
    if (vw > 0.05) { arrow(ctx, Hx, Hy, Tx, Ty, alpha(C('velocity'), 0.55), 3); alongLabel(ctx, 'v (wind) = ' + sf(vw) + ' m/s', Hx, Hy, Tx, Ty, C('velocity'), vwy <= 0 ? -1 : 1, 18); }
    arrow(ctx, Ox, Oy, Tx, Ty, C('velocity'), 5); alongLabel(ctx, 'v (total) = ' + sf(vt.v) + ' m/s', Ox, Oy, Tx, Ty, C('velocity'), b.v >= 0 ? -1 : 1);
    angleArc(ctx, Ox, Oy, 48, 0, a, PAL.ink, fmt(a, 1) + '°');
    if (Math.abs(b.v) > 2) angleArc(ctx, Ox, Oy, 110, 90, a, PAL.ink, fmt(Math.abs(b.v), 1) + '°');
    dot(ctx, Ox, Oy, PAL.ink, true, 5);
    /* the three velocities in words, beside the triangle */
    const tx = 900, rows = [
      ['plane relative to the air', 'v (plane) = ' + sf(vp.v) + ' m/s, due north'],
      ['plane relative to the ground', 'v (total) = ' + sf(vt.v) + ' m/s, ' + compass(ux, uy)],
      ['wind, found from the two', 'v (wind) = ' + sf(vw) + ' m/s, ' + (vw < 0.05 ? 'no wind at all' : compass(vwx, vwy))],
      ['its components', 'x: ' + sf(vwx) + ' m/s, y: ' + sf(vwy) + ' m/s'],
    ];
    rows.forEach(([lab, val], i) => { text(ctx, lab, tx, 150 + i * 96, PAL.muted, { size: 17 }); text(ctx, val, tx, 150 + i * 96 + 30, C('velocity'), { size: 20, weight: 600 }); });
    /* what the numbers say */
    headline(ctx, vw < 0.05 ? 'with the two velocities equal, no wind is needed to account for the plane’s track'
      : 'the wind that accounts for the plane’s track is ' + sf(vw) + ' m/s toward ' + compass(vwx, vwy));
    const calc = Math.abs(vwx) < 1e-9 ? null : Math.atan(vwy / vwx) / DEG;
    readout(d.readout, `\\kvwx = \\kvtot\\cos ${fmt(a, 1)}^\\circ = ${sf(vwx)}\\ \\text{m/s},\\quad \\kvwy = \\kvtot\\sin ${fmt(a, 1)}^\\circ - \\kvp = ${sf(vwy)}\\ \\text{m/s},\\quad \\kvw = \\sqrt{\\kvwx^2 + \\kvwy^2} = ${sf(vw)}\\ \\text{m/s}`,
      vw < 0.05 ? 'The plane moves over the ground exactly as it moves through the air, so the air is not moving.'
        : (calc === null ? 'The wind has no east–west part, so it blows due ' + (vwy < 0 ? 'south' : 'north') : 'The direction is tan⁻¹(' + sf(vwy) + '/' + sf(vwx) + ') = ' + fmt(calc, 1) + '°, measured from the ' + (vwx < 0 ? 'negative' : 'positive') + ' x-axis, so the wind blows ' + compass(vwx, vwy)) + '; it is ' + windWords(vwx, vwy) + '.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.45: the binoculars dropped from the mast, seen from the ship
   and from the shore. Finite motion (one fall), so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-binoculars', 600);
  const vs = ctl(d.controls, { label: '\\kv_{\\text{ship}}', cls: 'velocity', min: 0, max: 15, step: 0.5, value: 6, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the ship' });
  const h = ctl(d.controls, { label: 'h', cls: '', min: 4, max: 20, step: 0.5, value: 12, unit: 'm', dec: 1, onInput: reset, aria: 'height of the mast' });
  const T = () => Math.sqrt(2 * h.v / G);
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  const DECK = 452, WATER = 474, PT = 90, PB = 560;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, drop = 0.5 * G * tau * tau, vyNow = -G * tau, vyLand = -G * Tc, dShip = vs.v * Tc;
    const s = Math.min(300 / h.v, 520 / (dShip + 16)), H = h.v * s, k = 7;
    const panels = [[60, 660, 'seen from the ship'], [740, 1340, 'seen from shore']];
    panels.forEach(([L, R, name], i) => {
      const shore = i === 1;
      title(ctx, name, (L + R) / 2, PT + 22);
      ctx.save(); ctx.beginPath(); ctx.rect(L, PT + 44, R - L, PB - PT - 44); ctx.clip();
      ctx.fillStyle = PAL.soft; ctx.fillRect(L, WATER, R - L, PB - WATER);
      /* the water: still for the observer on shore, sliding past for the one on the ship */
      for (let j = 0; j < 9; j++) { const base = (j * 151) % 600, xx = L + ((((base - (shore ? 0 : vs.v * tau * s)) % 600) + 600) % 600), yy = WATER + 18 + (j % 3) * 26; streak(ctx, xx, yy, 28, 0, alpha(PAL.muted, 0.7)); }
      /* the ship: fixed in its own frame, moving in the shore's */
      const mx = shore ? L + 160 + vs.v * tau * s : (L + R) / 2;
      if (shore) { ctx.save(); ctx.globalAlpha = 0.22; ship(ctx, L + 160, DECK, H, PAL.ink); ctx.restore(); }
      ship(ctx, mx, DECK, H, PAL.ink);
      /* the observer: on the deck beside the mast, or on a strip of shore */
      if (shore) { ctx.save(); ctx.fillStyle = PAL.soft2; ctx.fillRect(L, WATER - 2, 70, PB - WATER + 2); ctx.restore(); person(ctx, L + 35, WATER + 2, PAL.ink); }
      else person(ctx, mx + 40, DECK, PAL.ink);
      /* the path so far, and the binoculars on it with their velocity in this frame */
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath();
      for (let j = 0; j <= 40; j++) { const t = (tau * j) / 40, x = shore ? L + 160 + vs.v * t * s : mx, y = DECK - H + 0.5 * G * t * t * s; if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
      const bx = mx, by = DECK - H + drop * s;
      dot(ctx, bx, by, PAL.ink, true, 9);
      const ax = shore ? vs.v * k : 0, ay = -vyNow * k;
      if (Math.hypot(ax, ay) > 4) arrow(ctx, bx, by, bx + ax, by + ay, C('velocity'), 4);
      text(ctx, shore ? 'v = (' + fmt(vs.v, 1) + ', ' + sf(vyNow) + ') m/s' : 'v = (0, ' + sf(vyNow) + ') m/s', bx + 22 + ax, by + ay / 2, C('velocity'), { size: 17, weight: 600, bg: alpha(PAL.panel, 0.75) });
      ctx.restore();
    });
    /* what the numbers say */
    headline(ctx, done
      ? (vs.v < 0.05 ? 'the ship is at rest, so both observers see the same straight fall, ' + fmt(Tc, 2) + ' s to the deck at the base of the mast'
        : 'the binoculars land at the base of the mast after ' + fmt(Tc, 2) + ' s, having moved ' + fmt(dShip, 1) + ' m forward with the ship')
      : 't = ' + fmt(tau, 2) + ' s · the binoculars have fallen ' + fmt(drop, 1) + ' m and, seen from shore, moved ' + fmt(vs.v * tau, 1) + ' m forward with the ship');
    readout(d.readout, `\\text{from shore: } \\kv = (${fmt(vs.v, 1)},\\ ${sf(vyLand)})\\ \\text{m/s}\\qquad \\text{from the ship: } \\kv = (0,\\ ${sf(vyLand)})\\ \\text{m/s}`,
      'Both observers find the vertical velocity at the deck to be −√(2gh) = ' + sf(vyLand) + ' m/s and disagree about the horizontal velocity by exactly the ship’s ' + fmt(vs.v, 1) + ' m/s, so both see the binoculars strike the deck at the base of the mast.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 3.46: the coin dropped in the airliner, Example 3.8. Relative
   to the plane it falls straight down; relative to the Earth it keeps
   the plane's velocity and moves 144 m while it falls. Finite motion.
===================================================================== */
(function () {
  const d = demo('demo-coin', 620);
  const vp = ctl(d.controls, { label: '\\kv_{\\text{plane}}', cls: 'velocity', min: 50, max: 300, step: 1, value: 260, unit: 'm/s', dec: 0, onInput: reset, aria: 'speed of the plane' });
  const h = ctl(d.controls, { label: 'h', cls: '', min: 0.5, max: 3, step: 0.05, value: 1.5, unit: 'm', dec: 2, onInput: reset, aria: 'height of the drop' });
  const T = () => Math.sqrt(2 * h.v / G);
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), Tc = T(), done = tau >= Tc - 1e-9, drop = 0.5 * G * tau * tau, vy = -G * Tc, R = vp.v * Tc, v = Math.hypot(vp.v, vy), th = Math.atan2(vy, vp.v) / DEG;
    /* left: the cabin, where the coin falls straight down */
    title(ctx, 'relative to the plane', 290, 112);
    const s = 300 / Math.max(h.v, 1.5), FLOOR = 520, top = FLOOR - h.v * s;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.fillRect(100, 150, 380, 380); ctx.strokeRect(100, 150, 380, 380);
    ctx.fillStyle = PAL.panel; [170, 410].forEach((wx) => { ctx.beginPath(); ctx.ellipse(wx, 240, 26, 38, 0, 0, Math.PI * 2); ctx.fill(); }); ctx.restore();
    line(ctx, 110, FLOOR, 470, FLOOR, PAL.muted, 3); text(ctx, 'floor', 460, FLOOR + 20, PAL.muted, { size: 17, align: 'right' });
    line(ctx, 290, top, 290, FLOOR, PAL.muted, 2, [6, 8]); dot(ctx, 290, top, PAL.ink, false, 7);
    vbracket(ctx, 360, top, FLOOR, PAL.ink, fmt(h.v, 2) + ' m', 1);
    const cyy = top + drop * s, k = 8;
    dot(ctx, 290, cyy, PAL.ink, true, 9);
    if (tau > 0.02) { arrow(ctx, 290, cyy, 290, cyy + G * tau * k, C('velocity'), 4); text(ctx, 'vy = ' + sf(-G * tau) + ' m/s', 272, cyy + G * tau * k / 2, C('velocity'), { size: 17, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.75) }); }
    /* right: the ground's view, a graph of the path with the plane above it */
    title(ctx, 'relative to the Earth', 990, 100);
    const box = { l: 700, r: 1320, t: 190, b: 380 }, xr = nice(0, R, 4), yr = nice(0, h.v, 3);
    const { X, Y } = axes(ctx, box, [0, xr.hi], [-yr.hi, 0], { xl: 'x (m)', xc: PAL.ink, yl: 'y (m)', yc: PAL.ink, nx: xr.n, ny: yr.n, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 1) });
    curve(ctx, (x) => -0.5 * G * (x / vp.v) * (x / vp.v), 0, R, X, Y, PAL.muted, 3, 60);
    const px = X(vp.v * tau);
    plane(ctx, px, 150, PAL.ink, 0.55);
    line(ctx, px, 172, px, Y(-drop) - 12, PAL.muted, 1.5, [4, 8]);
    dot(ctx, X(0), Y(0), PAL.ink, false, 7); dot(ctx, X(R), Y(-h.v), PAL.ink, true, 7);
    dot(ctx, px, Y(-drop), PAL.ink, true, 9);
    /* the velocity at the floor, to one scale: the fall is a stub beside the plane's speed */
    text(ctx, 'the coin’s velocity at the floor, relative to the Earth', 700, 448, PAL.muted, { size: 17 });
    const kx = 540 / 300, ox = 700, oy = 500, tipx = ox + vp.v * kx, tipy = oy - vy * kx;
    arrow(ctx, ox, oy, tipx, oy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vx = ' + sf(vp.v) + ' m/s', (ox + tipx) / 2, oy - 22, C('velocity'), { size: 18, weight: 600, align: 'center' });
    arrow(ctx, tipx, oy, tipx, tipy, alpha(C('velocity'), 0.6), 3.5); text(ctx, 'vy = ' + sf(vy) + ' m/s', tipx + 16, tipy, C('velocity'), { size: 18, weight: 600 });
    arrow(ctx, ox, oy, tipx, tipy, C('velocity'), 5);
    text(ctx, 'v = ' + sf(v, 5) + ' m/s at ' + fmt(th, 2) + '°', ox, oy + 48, C('velocity'), { size: 20, weight: 600 });
    /* what the numbers say */
    headline(ctx, done ? 'the coin lands after ' + fmt(Tc, 3) + ' s, ' + fmt(h.v, 2) + ' m below where it was dropped and ' + fmt(R, 0) + ' m along the ground, at ' + sf(v, 5) + ' m/s'
      : 't = ' + fmt(tau, 2) + ' s · the coin has fallen ' + fmt(drop, 2) + ' m and moved ' + fmt(vp.v * tau, 0) + ' m along the ground, staying directly below the passenger');
    readout(d.readout, `\\kv = \\sqrt{\\kvx^2 + \\kvy^2} = \\sqrt{(${sf(vp.v)})^2 + (${sf(vy)})^2} = ${sf(v, 5)}\\ \\text{m/s}\\qquad \\theta = \\tan^{-1}(\\kvy/\\kvx) = \\tan^{-1}(${sf(vy)}/${sf(vp.v)}) = ${fmt(th, 2)}^\\circ`,
      'Relative to the plane the coin’s velocity at the floor is ' + sf(vy) + ' m/s alone, straight down, the same as if it had been dropped from rest on the ground.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE: the five galaxies of problems 12 and 13, copied faithfully
   with the book's numbers. No sliders, no motion.
===================================================================== */
(function () {
  const d = demo('fig-galaxies', 320);
  const ROWS = [[1, '300 Mly', -4500, 190], [2, '150 Mly', -2200, 470], [3, '', 0, 700], [4, '190 Mly', 2830, 930], [5, '450 Mly', 6700, 1200]];
  function draw() {
    const { ctx } = begin(d.c);
    line(ctx, 60, 165, 1340, 165, PAL.rule, 1.5);
    ROWS.forEach(([n, dist, vel, x]) => {
      text(ctx, n === 3 ? 'Galaxy 3' : 'Galaxy ' + n, x, 62, PAL.ink, { size: 22, weight: 600, align: 'center' });
      text(ctx, n === 3 ? 'MW' : dist, x, 92, PAL.ink, { size: 20, align: 'center' });
      galaxy(ctx, x, 165, PAL.ink);
      if (vel) {
        const len = vel * 0.03; arrow(ctx, x, 235, x + len, 235, C('velocity'), 4);
        text(ctx, 'v' + '₁₂₃₄₅'[n - 1] + ' = ' + (vel < 0 ? '−' : '') + Math.abs(vel) + ' km/s', x, 278, C('velocity'), { size: 20, weight: 600, align: 'center' });
      }
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
