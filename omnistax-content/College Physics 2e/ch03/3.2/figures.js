/* Figures for section 3.2 Vector Addition and Subtraction: Graphical Methods. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, person, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const RAD = Math.PI / 180;
const cos = (deg) => Math.cos(deg * RAD), sin = (deg) => Math.sin(deg * RAD);
/* an angle folded into (-180, 180], so that 190° reads as -170° */
const fold = (deg) => { let a = ((deg % 360) + 540) % 360 - 180; if (a <= -180) a += 360; return a; };
/* a direction in the words the book uses: measured from east, north of it when positive and south of it when negative */
const compass = (deg, dec = 1) => { const a = fold(deg); return a >= 0 ? fmt(a, dec) + '° north of east' : fmt(-a, dec) + '° south of east'; };
/* the magnitude and direction of a vector given by its east and north parts */
const polar = (x, y) => ({ r: Math.hypot(x, y), deg: Math.atan2(y, x) / RAD });
/* the tip of an arrow of length L at angle deg (counterclockwise from east) drawn from (x, y) on the canvas, where y runs down */
const tip = (x, y, L, deg) => [x + L * cos(deg), y - L * sin(deg)];
/* a label beside the middle of a segment, offset to its left (side 1) or right (side -1) as one walks along it */
function beside(ctx, x1, y1, x2, y2, s, color, side = 1, gap = 26, size = 22) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1, nx = (dy / L) * side, ny = (-dx / L) * side;
  text(ctx, s, (x1 + x2) / 2 + nx * gap, (y1 + y2) / 2 + ny * gap, color, { weight: 600, size, align: 'center', bg: PAL.panel });
}
/* an arrowhead alone, pointing along deg, for a path drawn as a polyline */
function arrowhead(ctx, x, y, deg, color) {
  const a = -deg * RAD, hl = 18;
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x, y);
  ctx.lineTo(x - hl * Math.cos(a - 0.42), y - hl * Math.sin(a - 0.42)); ctx.lineTo(x - hl * Math.cos(a + 0.42), y - hl * Math.sin(a + 0.42)); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* the compass rose the book draws beside its maps, centred on (x, y) */
function rose(ctx, x, y, r = 40) {
  line(ctx, x - r, y, x + r, y, PAL.ink, 2); arrow(ctx, x, y + r, x, y - r, PAL.ink, 3);
  text(ctx, 'N', x, y - r - 16, PAL.ink, { size: 20, align: 'center', weight: 600 }); text(ctx, 'S', x, y + r + 16, PAL.ink, { size: 20, align: 'center' });
  text(ctx, 'E', x + r + 16, y, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'W', x - r - 16, y, PAL.ink, { size: 20, align: 'center' });
}
/* a grid of city blocks nx east and ny north of the origin (ox, oy), b units to a block, with the axes ticked in blocks */
function cityGrid(ctx, ox, oy, b, nx, ny) {
  ctx.save(); ctx.fillStyle = PAL.soft;
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) ctx.fillRect(ox + i * b + b * 0.1, oy - (j + 1) * b + b * 0.1, b * 0.8, b * 0.8);
  ctx.restore();
  arrow(ctx, ox, oy, ox + nx * b + 34, oy, PAL.ink, 2); arrow(ctx, ox, oy, ox, oy - ny * b - 34, PAL.ink, 2);
  for (let i = 0; i <= nx; i++) { line(ctx, ox + i * b, oy - 5, ox + i * b, oy + 5, PAL.ink, 1.5); text(ctx, String(i), ox + i * b, oy + 22, PAL.muted, { size: 15, align: 'center' }); }
  for (let j = 1; j <= ny; j++) { line(ctx, ox - 5, oy - j * b, ox + 5, oy - j * b, PAL.ink, 1.5); text(ctx, String(j), ox - 14, oy - j * b, PAL.muted, { size: 15, align: 'right' }); }
  text(ctx, 'blocks east', ox + nx * b + 46, oy, PAL.ink, { size: 17, align: 'left' });
  text(ctx, 'blocks north', ox + 12, oy - ny * b - 30, PAL.ink, { size: 17, align: 'left' });
}
/* a ruler laid along a line from (x, y) at angle deg, lenPx long, with a tick every unitPx and a number every `every` units;
   side 1 lays it on the left of the line as one walks along it, side -1 on the right */
function ruler(ctx, x, y, deg, lenPx, unitPx, every, side = 1, offset = 22, mul = 1) {
  const h = 34, top = side > 0 ? -offset - h : offset, edge = side > 0 ? top + h : top, far = side > 0 ? top + 13 : top + h - 13;
  ctx.save(); ctx.translate(x, y); ctx.rotate(-deg * RAD);
  ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
  ctx.fillRect(-16, top, lenPx + 32, h); ctx.strokeRect(-16, top, lenPx + 32, h);
  const n = Math.floor(lenPx / unitPx + 1e-6);
  for (let k = 0; k <= 2 * n; k++) {
    const px = (k * unitPx) / 2, big = k % 2 === 0, len = big ? 11 : 6;
    line(ctx, px, edge, px, edge + (side > 0 ? -len : len), PAL.ink, big ? 2 : 1.2);
    if (big && (k / 2) % every === 0) text(ctx, String((k / 2) * mul), px, far, PAL.ink, { size: 14, align: 'center' });
  }
  ctx.restore();
}
/* a protractor at (x, y): a half disc on the side of the angle, ticks every 10°, and the angle swept from the east-west line;
   the label is placed by the caller so that it never mirrors */
function protractor(ctx, x, y, r, deg) {
  const below = deg < 0, sgn = below ? 1 : -1, a = Math.abs(deg);
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI, !below); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  for (let k = 0; k <= 18; k++) {
    const t = k * 10 * RAD, big = k % 3 === 0, len = big ? 14 : 8;
    line(ctx, x + r * Math.cos(t), y + sgn * r * Math.sin(t), x + (r - len) * Math.cos(t), y + sgn * (r - len) * Math.sin(t), PAL.muted, big ? 2 : 1.2);
    if (big && k > 0 && k < 18) text(ctx, String(k * 10), x + (r + 16) * Math.cos(t), y + sgn * (r + 16) * Math.sin(t), PAL.muted, { size: 12, align: 'center' });
  }
  if (a > 0.05) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r * 0.5, 0, sgn * a * RAD, !below); ctx.stroke(); ctx.restore(); }
}
/* the angle written along the bisector of the swept angle, pushed clear of the east-west line when the angle is small */
function thetaLabel(ctx, ox, oy, deg, dec = 1, R = 128, push = 24) {
  const a = Math.abs(deg); if (a < 0.05) return;
  const small = a < 12, x = ox + R * cos(deg / 2) + (small ? 20 : 0), y = oy - R * sin(deg / 2) + (small ? (deg < 0 ? push : -push) : 0);
  text(ctx, 'θ = ' + fmt(a, dec) + '°', x, y, PAL.ink, { weight: 600, size: 20, bg: PAL.panel });
}
/* the library's walker set on a map: walking east she is drawn upright with her feet on the street, and walking
   in any other direction the drawing is turned so that she walks along the leg; `deg` is the leg's direction */
function walker(ctx, x, y, deg, phase, color) {
  ctx.save(); ctx.translate(x, y);
  if (Math.abs(deg) > 1) ctx.rotate(-deg * RAD);
  person(ctx, 0, 0, color, { face: 1, phase, s: 0.8 });
  ctx.restore();
}
/* a sailing boat whose waterline is centred on (x, y), in ink */
function boat(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(-38, 0); ctx.lineTo(40, 0); ctx.lineTo(30, 14); ctx.quadraticCurveTo(0, 20, -26, 14); ctx.closePath(); ctx.fill();   /* the hull */
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -56); ctx.stroke();   /* the mast */
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.moveTo(3, -52); ctx.lineTo(34, -8); ctx.lineTo(3, -8); ctx.closePath(); ctx.fill(); ctx.stroke();   /* the mainsail */
  ctx.beginPath(); ctx.moveTo(-3, -44); ctx.lineTo(-30, -8); ctx.lineTo(-3, -8); ctx.closePath(); ctx.fill(); ctx.stroke();   /* the jib */
  ctx.restore();
}
/* a dock: a short pier on two posts, its landing end at (x, y) */
function dock(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.fillRect(x - 10, y - 8, 96, 12);
  for (const px of [x + 4, x + 38, x + 72]) { ctx.fillRect(px, y + 4, 7, 26); }
  ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 10, y - 8); ctx.lineTo(x - 10, y - 34); ctx.moveTo(x + 86, y - 8); ctx.lineTo(x + 86, y - 34); ctx.stroke();   /* two mooring posts */
  ctx.restore();
}
/* the three legs of Example 3.1 and the two of Example 3.2, as the book gives them */
const WALK_DEG = [49, 15, -68];
const ORDERS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
const NAMES = ['A', 'B', 'C'];
const orderName = (k) => ORDERS[k].map((i) => NAMES[i]).join(', then ');

/* =====================================================================
   FIGURE 3.8 (and 3.9): a vector in two dimensions. The total displacement
   of the walk in the city drawn as an arrow on the grid of blocks, a ruler
   along it and a protractor at its tail. No motion.
===================================================================== */
(function () {
  const d = sim('sim-vector-2d', 660);
  const D = ctl(d.controls, { label: '\\kD\\ \\text{(blocks)}', cls: 'position', min: 1, max: 12, step: 0.1, value: 10.3, unit: '', dec: 1, aria: 'magnitude in blocks' });
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 90, step: 0.1, value: 29.1, unit: '°', dec: 1, aria: 'direction' });
  const ox = 330, oy = 590, b = 40;
  function draw() {
    const { ctx } = begin(d.c);
    const Dm = D.v, th = TH.v, [hx, hy] = tip(ox, oy, Dm * b, th);
    cityGrid(ctx, ox, oy, b, 12, 12);
    rose(ctx, 140, 250);
    /* the protractor at the tail and the ruler along the arrow */
    protractor(ctx, ox, oy, 100, th);
    ruler(ctx, ox, oy, th, Math.max(Dm, 1) * b + b * 0.5, b, 1, 1, 24);
    /* the vector itself */
    arrow(ctx, ox, oy, hx, hy, C('position'), 6);
    dot(ctx, ox, oy, PAL.ink, true, 6);
    text(ctx, 'D', (ox + hx) / 2 + 30 * sin(th), (oy + hy) / 2 + 30 * cos(th), C('position'), { weight: 700, size: 26, align: 'center', bg: PAL.panel });
    thetaLabel(ctx, ox, oy, th);
    /* the two readings, on the right */
    text(ctx, 'the ruler along the arrow reads', 900, 200, PAL.ink, { size: 20 });
    text(ctx, 'D = ' + fmt(Dm, 1) + ' blocks', 900, 236, C('position'), { size: 26, weight: 600 });
    text(ctx, 'the protractor at its tail reads', 900, 310, PAL.ink, { size: 20 });
    text(ctx, 'θ = ' + compass(th), 900, 346, PAL.ink, { size: 26, weight: 600 });
    text(ctx, 'starting point', ox - 8, oy + 48, PAL.muted, { size: 15, align: 'left' });
    topline(ctx, 'The ruler along the arrow reads ' + fmt(Dm, 1) + ' blocks and the protractor at its tail reads ' + fmt(th, 1) + '°, so D is ' + fmt(Dm, 1) + ' blocks at ' + compass(th) + '.');
    readout(d.readout, `\\kD = ${fmt(Dm, 1)}\\ \\text{blocks},\\quad \\theta = ${fmt(th, 1)}^\\circ\\ \\text{north of east}`,
      'The length of the arrow is proportional to the magnitude of the vector and the arrow points in its direction, so the two numbers and the arrow say the same thing.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.10 (and 3.11 to 3.13): the head-to-tail method. The person
   walks the first leg east and the second leg north from the head of the
   first; then the resultant is drawn from the tail of the first to the
   head of the last and measured. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-head-to-tail', 660);
  const E = ctl(d.controls, { label: '\\text{blocks east}', cls: 'position', min: 1, max: 12, step: 1, value: 9, unit: '', dec: 0, onInput: reset, aria: 'blocks east' });
  const N = ctl(d.controls, { label: '\\text{blocks north}', cls: 'position', min: 0, max: 8, step: 1, value: 5, unit: '', dec: 0, onInput: reset, aria: 'blocks north' });
  const TW = 3.4, TR = 0.9, T = TW + TR;
  const cy = cycle(() => T, 1.5);
  function reset() { cy.reset(); }
  const ox = 330, oy = 590, b = 40;
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, n = N.v, L = e + n, tau = cy.now();
    const tA = (TW * e) / L, walked = Math.min(L, (L * Math.min(tau, TW)) / TW);
    const ax = ox + Math.min(e, walked) * b, ny = oy - Math.max(0, walked - e) * b;
    const { r, deg } = polar(e, n), phase = tau < TW ? 1 : tau < T ? 2 : 3, done = tau >= T - 1e-9;
    cityGrid(ctx, ox, oy, b, 12, 12);
    rose(ctx, 140, 250);
    /* step 1: the first vector, drawn as she walks it */
    if (walked > 0.02) arrow(ctx, ox, oy, ax, oy, C('position'), 5);
    if (walked >= e) text(ctx, fmt(e, 0) + ' blocks east', ox + e * b * 0.86, oy - 24, C('position'), { weight: 600, size: 18, align: 'center', bg: PAL.panel });
    /* step 2: the second vector from the head of the first */
    if (walked > e + 0.02) arrow(ctx, ox + e * b, oy, ox + e * b, ny, C('position'), 5);
    if (walked >= L - 1e-9 && n > 0) beside(ctx, ox + e * b, oy, ox + e * b, oy - n * b, fmt(n, 0) + ' blocks north', C('position'), -1, 26, 18);
    /* step 4: the resultant, from the tail of the first to the head of the last */
    if (tau > TW) {
      const f = Math.min(1, (tau - TW) / TR), [hx, hy] = tip(ox, oy, f * r * b, deg);
      if (done) { protractor(ctx, ox, oy, 100, deg); ruler(ctx, ox, oy, deg, r * b + b * 0.5, b, 1, 1, 24); }
      arrow(ctx, ox, oy, hx, hy, C('position'), 6);
      text(ctx, 'D', (ox + hx) / 2 + 26 * sin(deg), (oy + hy) / 2 + 26 * cos(deg), C('position'), { weight: 700, size: 26, align: 'center', bg: PAL.panel });
      if (done) thetaLabel(ctx, ox, oy, deg, 1, 150, 44);
    }
    /* the walker */
    if (!done) walker(ctx, tau < TW ? ax : ox + e * b, tau < TW ? ny : oy - n * b, tau < TW && walked > e ? 90 : 0, tau < TW ? tau * 14 : 0, PAL.ink);
    dot(ctx, ox, oy, PAL.ink, true, 6);
    /* the steps of the book, the current one in ink */
    const steps = [['Step 1', 'draw the first vector, ' + fmt(e, 0) + ' blocks east'], ['Step 2', 'draw the second, ' + fmt(n, 0) + ' blocks north, with its tail at the head of the first'],
      ['Step 4', 'draw the resultant from the tail of the first to the head of the last'], ['Steps 5 and 6', 'measure its length with a ruler and its angle with a protractor']];
    const cur = tau < tA ? 0 : tau < TW ? 1 : !done ? 2 : 3;
    steps.forEach(([k, s], i) => { const on = i === cur, col = on ? PAL.ink : PAL.muted, y = 150 + 78 * i; text(ctx, k, 880, y, col, { size: 19, weight: 600 }); text(ctx, s, 880, y + 26, col, { size: 18 }); });
    topline(ctx, done ? 'The resultant D is ' + fmt(r, 1) + ' blocks at ' + compass(deg) + ', measured with a ruler and a protractor.'
      : cur === 0 ? 'In step 1 she walks ' + fmt(e, 0) + ' blocks east, and the first arrow is drawn with a ruler.'
        : cur === 1 ? 'In step 2 she walks ' + fmt(n, 0) + ' blocks north, and the second arrow starts at the head of the first.'
          : 'In step 4 the resultant is drawn from the tail of the first vector to the head of the last.');
    readout(d.readout, `\\kD = ${fmt(r, 1)}\\ \\text{blocks},\\quad \\theta = ${fmt(deg, 1)}^\\circ\\ \\text{north of east}`,
      'A ruler along the resultant reads ' + fmt(r, 1) + ' blocks and a protractor at its tail reads ' + fmt(deg, 1) + '°; the Pythagorean theorem gives the same length, √(' + fmt(e, 0) + '² + ' + fmt(n, 0) + '²) = ' + fmt(r, 1) + '.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 3.14 (and 3.15 to 3.17): Example 3.1, the woman who takes a walk.
   Three legs walked in turn and laid head to tail, then the resultant
   drawn and measured. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-walk', 640);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 40, step: 0.5, value: 25, unit: 'm', dec: 1, onInput: reset, aria: 'first leg' });
  const B = ctl(d.controls, { label: '\\kB', cls: 'position', min: 5, max: 40, step: 0.5, value: 23, unit: 'm', dec: 1, onInput: reset, aria: 'second leg' });
  const Cm = ctl(d.controls, { label: '\\kC', cls: 'position', min: 5, max: 40, step: 0.5, value: 32, unit: 'm', dec: 1, onInput: reset, aria: 'third leg' });
  const TW = 3.6, TR = 0.9, T = TW + TR, S = 7.5;   /* canvas units to a meter */
  const cy = cycle(() => T, 1.5);
  function reset() { cy.reset(); }
  const ox = 330, oy = 370;
  function draw() {
    const { ctx } = begin(d.c);
    const mags = [A.v, B.v, Cm.v], L = mags[0] + mags[1] + mags[2], tau = cy.now(), done = tau >= T - 1e-9;
    const walked = (L * Math.min(tau, TW)) / TW;
    /* the axes through the starting point, ticked every 10 m */
    arrow(ctx, ox - 40, oy, 960, oy, PAL.ink, 2); arrow(ctx, ox, oy + 270, ox, 70, PAL.ink, 2);
    for (let m = 10; m <= 80; m += 10) line(ctx, ox + m * S, oy - 5, ox + m * S, oy + 5, PAL.ink, 1.5);
    for (let m = 10; m <= 30; m += 10) line(ctx, ox - 5, oy - m * S, ox + 5, oy - m * S, PAL.ink, 1.5);
    text(ctx, 'x (east), a tick every 10 m', 972, oy, PAL.ink, { size: 17, align: 'left' }); text(ctx, 'y (north)', ox + 12, 76, PAL.ink, { size: 17 });
    rose(ctx, 1240, 500, 36);
    /* the legs, laid down as she walks them */
    let px = ox, py = oy, left = walked, cur = -1, wx = ox, wy = oy;
    for (let i = 0; i < 3; i++) {
      const seg = Math.min(mags[i], Math.max(0, left)); left -= mags[i];
      const [fx, fy] = tip(px, py, mags[i] * S, WALK_DEG[i]), [hx, hy] = tip(px, py, seg * S, WALK_DEG[i]);
      if (seg > 0.05) arrow(ctx, px, py, hx, hy, C('position'), 5);
      if (seg >= mags[i] - 1e-9) beside(ctx, px, py, fx, fy, NAMES[i] + ' = ' + fmt(mags[i], 1) + ' m', C('position'), i === 2 ? -1 : 1, 26, 18);
      if (seg > 0 && seg < mags[i]) { cur = i; wx = hx; wy = hy; } else if (seg >= mags[i] - 1e-9) { wx = fx; wy = fy; }
      px = fx; py = fy;
    }
    const pol = polar(px - ox, oy - py), r = pol.r / S, deg = pol.deg;
    /* the resultant */
    if (tau > TW) {
      const f = Math.min(1, (tau - TW) / TR), [hx, hy] = tip(ox, oy, f * r * S, deg);
      if (done) { protractor(ctx, ox, oy, 96, deg); ruler(ctx, ox, oy, deg, r * S + 2 * S, 10 * S, 1, -1, 22, 10); }
      arrow(ctx, ox, oy, hx, hy, C('position'), 6);
      if (done) {
        beside(ctx, ox, oy, hx, hy, 'R = ' + fmt(r, 1) + ' m', C('position'), 1, 34, 22);
        thetaLabel(ctx, ox, oy, deg, 2, 150, deg < 0 ? 92 : 30);
      }
    }
    if (!done) walker(ctx, wx, wy, cur >= 0 ? WALK_DEG[cur] : 0, tau < TW ? tau * 14 : 0, PAL.ink);
    dot(ctx, ox, oy, PAL.ink, true, 6);
    /* the legs of the example, the current one in ink, and the resultant when it is drawn */
    const legs = ['A = ' + fmt(mags[0], 1) + ' m at 49.0° north of east', 'B = ' + fmt(mags[1], 1) + ' m at 15.0° north of east', 'C = ' + fmt(mags[2], 1) + ' m at 68.0° south of east'];
    legs.forEach((s, i) => text(ctx, s, 1000, 150 + 44 * i, i === cur ? PAL.ink : PAL.muted, { size: 19, weight: i === cur ? 600 : 400 }));
    text(ctx, done ? 'R = ' + fmt(r, 1) + ' m at ' + compass(deg, 2) : tau > TW ? 'R is being drawn from the tail of A to the head of C' : 'R waits until every leg is walked', 1000, 310, done ? PAL.ink : PAL.muted, { size: 19, weight: done ? 600 : 400 });
    topline(ctx, done ? 'The resultant R is ' + fmt(r, 1) + ' m at ' + compass(deg, 2) + ', measured with a ruler and a protractor.'
      : cur >= 0 ? 'She walks leg ' + NAMES[cur] + ', ' + fmt(mags[cur], 1) + ' m, with its tail at the head of the leg before.'
        : 'The resultant is drawn from the tail of the first vector to the head of the last.');
    readout(d.readout, `\\kR = ${fmt(r, 1)}\\ \\text{m},\\quad \\theta = ${fmt(Math.abs(deg), 2)}^\\circ\\ \\text{${deg < 0 ? 'south' : 'north'} of east}`,
      'The head-to-tail method works for any number of vectors and is limited in accuracy only by the precision of the drawing and of the ruler and protractor.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 3.18: vector addition is commutative. The walk of Example 3.1
   laid head to tail in the order A, B, C and again in the chosen order;
   the two end at one point and the resultant is one arrow. No motion.
===================================================================== */
(function () {
  const d = sim('sim-order', 940);
  /* The order of addition is one of six arrangements, not a quantity to slide through, and six
     options would wrap a button row, so it is a dropdown (rule 26.1). */
  const O = F.select(d.controls, { label: '\\text{order}', options: ORDERS.map((o, i) => ({ value: String(i), label: o.map((j) => NAMES[j]).join(' + ') })), value: '4', aria: 'order of addition' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: -180, max: 180, step: 1, value: 49, unit: '°', dec: 0, aria: 'direction of A' });
  const TB = ctl(d.controls, { label: '\\theta_{\\text{B}}', cls: '', min: -180, max: 180, step: 1, value: 15, unit: '°', dec: 0, aria: 'direction of B' });
  const TC = ctl(d.controls, { label: '\\theta_{\\text{C}}', cls: '', min: -180, max: 180, step: 1, value: -68, unit: '°', dec: 0, aria: 'direction of C' });
  /* The three legs are 25, 23 and 32 m, so the walk can reach 80 m from the start when all three
     point the same way. At 5.2 units to the metre that is 416 units, which the canvas holds in every
     direction about the origin at (640, 520), so the walk never leaves the drawing at any setting. */
  const MAG = [25, 23, 32], S = 5.2, ox = 640, oy = 520;
  function path(ctx, order, degs, color, w, lab) {
    let px = ox, py = oy;
    for (const i of order) {
      const [hx, hy] = tip(px, py, MAG[i] * S, degs[i]);
      arrow(ctx, px, py, hx, hy, color, w);
      if (lab) { const nx = (hy - py) / (MAG[i] * S), ny = -(hx - px) / (MAG[i] * S); lab.add(NAMES[i], (px + hx) / 2, (py + hy) / 2, nx, ny, color, 22, 22); }
      px = hx; py = hy;
    }
    return [px, py];
  }
  function draw() {
    const { ctx } = begin(d.c);
    const k = Number(O.value), degs = [TA.v, TB.v, TC.v];
    const lab = labeller(ctx, 940); lab.block(0, 0, 1400, 96); lab.block(1040, 96, 1400, 220);
    line(ctx, ox - 430, oy, ox + 430, oy, PAL.rule, 2); line(ctx, ox, oy - 420, ox, oy + 410, PAL.rule, 2);
    text(ctx, 'east', ox + 430, oy + 20, PAL.muted, { size: 15, align: 'right' });
    /* the reference walk, A then B then C, carries no labels: each leg is named once, on the chosen order */
    if (k !== 0) path(ctx, ORDERS[0], degs, alpha(PAL.ink, 0.45), 3, null);
    const [ex, ey] = path(ctx, ORDERS[k], degs, C('position'), 5, lab);
    const pol = polar(ex - ox, oy - ey), r = pol.r / S, deg = pol.deg;
    arrow(ctx, ox, oy, ex, ey, C('position'), 6.5);
    if (r > 0.5) { const L = r * S, nx = (ey - oy) / L, ny = -(ex - ox) / L; lab.add('R = ' + fmt(r, 1) + ' m', (ox + ex) / 2, (oy + ey) / 2, nx, ny, C('position'), 22, 30); }
    dot(ctx, ox, oy, PAL.ink, true, 6); dot(ctx, ex, ey, PAL.ink, true, 6);
    lab.add('start', ox, oy, -0.7, 0.7, PAL.muted, 17, 22);
    lab.flush();
    text(ctx, 'A = 25.0 m, B = 23.0 m, C = 32.0 m', 1080, 130, PAL.muted, { size: 17 });
    if (k !== 0) { line(ctx, 1080, 168, 1140, 168, alpha(PAL.ink, 0.45), 3); text(ctx, 'the walk A, then B, then C', 1152, 168, PAL.muted, { size: 17 }); }
    topline(ctx, k === 0 ? 'Added as A, then B, then C, the resultant R is ' + fmt(r, 1) + ' m at ' + compass(deg, 2) + '.'
      : 'Added as ' + orderName(k) + ', the sum ends at the same point, so R is again ' + fmt(r, 1) + ' m at ' + compass(deg, 2) + '.');
    const lhs = ORDERS[k].map((i) => '\\mathbf{' + NAMES[i] + '}').join(' + ');
    readout(d.readout, (k === 0 ? lhs : lhs + ' = \\mathbf{A} + \\mathbf{B} + \\mathbf{C}') + ` = \\mathbf{R},\\quad \\kR = ${fmt(r, 1)}\\ \\text{m}`,
      'Vector addition is commutative, so the sum is the same in whatever order the vectors are added, just as 2 + 3 and 3 + 2 are both 5.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.19 (and 3.20 to 3.23): the negative of a vector and Example
   3.2, the woman sailing a boat. A, then B to the dock and −B to where she
   ends up, with both resultants from the starting point. No motion.
===================================================================== */
(function () {
  const d = sim('sim-subtraction', 780);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 35, step: 0.5, value: 27.5, unit: 'm', dec: 1, aria: 'first leg' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: 0, max: 180, step: 1, value: 66, unit: '°', dec: 0, aria: 'direction of A' });
  const B = ctl(d.controls, { label: '\\kB', cls: 'position', min: 5, max: 35, step: 0.5, value: 30, unit: 'm', dec: 1, aria: 'second leg' });
  const TB = ctl(d.controls, { label: '\\theta_{\\text{B}}', cls: '', min: 0, max: 180, step: 1, value: 112, unit: '°', dec: 0, aria: 'direction of B' });
  /* Six units to the metre, fixed. Both legs point into the northern half, so the drawing reaches at most
     70 m north of the start (A + B straight up), 35 m south (A along the shore and −B straight down) and
     70 m east or west; with the start at (560, 530) the canvas holds every setting of the four sliders. */
  const S = 6, ox = 560, oy = 530;
  function draw() {
    const { ctx } = begin(d.c);
    const [ax, ay] = tip(ox, oy, A.v * S, TA.v), [bx, by] = tip(ax, ay, B.v * S, TB.v), [nx, ny] = tip(ax, ay, B.v * S, TB.v + 180);
    const sum = polar((bx - ox) / S, (oy - by) / S), dif = polar((nx - ox) / S, (oy - ny) / S);
    const lab = labeller(ctx, 780); lab.block(0, 0, 1400, 96); lab.block(1000, 96, 1400, 380);
    const side = (s, x1, y1, x2, y2, color, sgn, size, start) => { const L = Math.hypot(x2 - x1, y2 - y1) || 1; lab.add(s, (x1 + x2) / 2, (y1 + y2) / 2, ((y2 - y1) / L) * sgn, (-(x2 - x1) / L) * sgn, color, size, start); };
    line(ctx, ox - 430, oy, ox + 430, oy, PAL.rule, 2); text(ctx, 'east', ox + 430, oy - 16, PAL.muted, { size: 15, align: 'right' });
    line(ctx, ax - 60, ay, ax + 60, ay, PAL.rule, 1.5, [6, 6]);
    /* the dock at the head of B and the boat where she ends up, under the arrows so that every head shows */
    dock(ctx, bx + 6, by - 10, PAL.ink); boat(ctx, nx, ny + 8, PAL.ink, 0.9);
    /* the two resultants, then the legs on top of them */
    arrow(ctx, ox, oy, bx, by, C('position'), 6.5); arrow(ctx, ox, oy, nx, ny, C('position'), 6.5);
    arrow(ctx, ox, oy, ax, ay, C('position'), 4); arrow(ctx, ax, ay, bx, by, C('position'), 4); arrow(ctx, ax, ay, nx, ny, C('position'), 4);
    side('A', ox, oy, ax, ay, C('position'), 1, 22, 22); side('B', ax, ay, bx, by, C('position'), 1, 22, 22); side('−B', ax, ay, nx, ny, C('position'), 1, 22, 22);
    side('R′ = ' + fmt(sum.r, 1) + ' m', ox, oy, bx, by, C('position'), -1, 20, 30);
    side('R = ' + fmt(dif.r, 1) + ' m', ox, oy, nx, ny, C('position'), -1, 20, 30);
    /* each named beside itself */
    lab.add('the dock, at A + B', bx + 50, by - 24, 1, -1, PAL.ink, 18, 40);
    lab.add('where she ends up, at A − B', nx, ny + 20, 1, 1, PAL.ink, 18, 50);
    dot(ctx, ox, oy, PAL.ink, true, 6); lab.add('start', ox, oy, -1, 0.6, PAL.muted, 17, 22);
    lab.flush();
    /* the comparison, on the right */
    text(ctx, 'the dock is at A + B:', 1030, 130, PAL.ink, { size: 18 });
    text(ctx, fmt(sum.r, 1) + ' m at ' + compass(sum.deg), 1030, 160, C('position'), { size: 20, weight: 600 });
    text(ctx, 'she arrives at A + (−B) = A − B:', 1030, 220, PAL.ink, { size: 18 });
    text(ctx, fmt(dif.r, 1) + ' m at ' + compass(dif.deg), 1030, 250, C('position'), { size: 20, weight: 600 });
    text(ctx, '−B has the magnitude of B, ' + fmt(B.v, 1) + ' m,', 1030, 310, PAL.muted, { size: 16 });
    text(ctx, 'and points the opposite way, ' + compass(TB.v + 180, 0), 1030, 334, PAL.muted, { size: 16 });
    topline(ctx, 'A − B is ' + fmt(dif.r, 1) + ' m at ' + compass(dif.deg) + ', while the dock at A + B is ' + fmt(sum.r, 1) + ' m at ' + compass(sum.deg) + '.');
    readout(d.readout, `\\mathbf{A} - \\mathbf{B} = \\mathbf{A} + (-\\mathbf{B}),\\quad \\kR = ${fmt(dif.r, 1)}\\ \\text{m}`,
      'The dock and the place she reaches are 2B = ' + fmt(2 * B.v, 1) + ' m apart, since B and −B lead away from the head of A in opposite directions. '
      + 'These numbers are computed from the two legs, while the example measures its own drawing with a ruler and a protractor and reports 23.0 m at 7.5° south of east. A reading taken off a drawing is good to about a part in fifty, so the two agree as closely as the graphical method allows.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: multiplying a vector by a scalar. The first leg of the sailing
   example and the same vector times c, which keeps the direction when c is
   positive and reverses it when c is negative. No motion.
===================================================================== */
(function () {
  const d = sim('sim-scalar', 740);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 30, step: 0.5, value: 27.5, unit: 'm', dec: 1, aria: 'magnitude of A' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: 0, max: 180, step: 1, value: 66, unit: '°', dec: 0, aria: 'direction of A' });
  const K = ctl(d.controls, { label: 'c', cls: '', min: -3, max: 3, step: 0.5, value: 3, unit: '', dec: 1, aria: 'scalar' });
  /* 3.4 units to the metre, fixed: cA reaches 90 m, which is 306 units, and the canvas holds that above
     and below the origin of the right-hand drawing at every setting of the three sliders. */
  const S = 3.4, o1 = [300, 410], o2 = [950, 410];
  function arc(ctx, x, y, deg, r) {
    if (deg < 0.5) return;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, 0, -deg * RAD, true); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const c = K.v, mag = Math.abs(c) * A.v, deg = c < 0 ? TA.v + 180 : TA.v;
    const lab = labeller(ctx, 740); lab.block(0, 0, 1400, 96);
    for (const [x, y] of [o1, o2]) { line(ctx, x - 200, y, x + 320, y, PAL.rule, 2); text(ctx, 'east', x + 320, y + 20, PAL.muted, { size: 15, align: 'right' }); }
    const [ax, ay] = tip(o1[0], o1[1], A.v * S, TA.v);
    arrow(ctx, o1[0], o1[1], ax, ay, C('position'), 5);
    lab.add('A = ' + fmt(A.v, 1) + ' m', (o1[0] + ax) / 2, (o1[1] + ay) / 2, (ay - o1[1]) / (A.v * S), -(ax - o1[0]) / (A.v * S), C('position'), 22, 26);
    arc(ctx, o1[0], o1[1], TA.v, 44); lab.add('θ = ' + fmt(TA.v, 0) + '°', o1[0] + 44 * cos(TA.v / 2), o1[1] - 44 * sin(TA.v / 2), cos(TA.v / 2), -sin(TA.v / 2), PAL.ink, 18, 26);
    const cs = (c < 0 ? '−' : '') + fmt(Math.abs(c), 1);
    text(ctx, '× ' + cs, 640, 400, PAL.ink, { size: 34, weight: 600, align: 'center' });
    if (mag > 0.01) {
      const [hx, hy] = tip(o2[0], o2[1], mag * S, deg);
      arrow(ctx, o2[0], o2[1], hx, hy, C('position'), 5);
      lab.add(cs + 'A = ' + fmt(mag, 1) + ' m', (o2[0] + hx) / 2, (o2[1] + hy) / 2, (hy - o2[1]) / (mag * S), -(hx - o2[0]) / (mag * S), C('position'), 22, 26);
      arc(ctx, o2[0], o2[1], deg, 44); lab.add(fmt(deg, 0) + '°', o2[0] + 44 * cos(deg / 2), o2[1] - 44 * sin(deg / 2), cos(deg / 2), -sin(deg / 2), PAL.ink, 18, 26);
    } else text(ctx, '0A: the vector vanishes', o2[0], o2[1] - 30, PAL.muted, { size: 17, align: 'center' });
    for (const [x, y] of [o1, o2]) dot(ctx, x, y, PAL.ink, true, 6);
    lab.flush();
    topline(ctx, c === 0 ? 'Multiplying ' + fmt(A.v, 1) + ' m by zero leaves no vector at all.'
      : 'Multiplying ' + fmt(A.v, 1) + ' m by ' + cs + ' gives ' + fmt(mag, 1) + ' m ' + (c < 0 ? 'in the opposite direction, ' : 'in the same direction, ') + compass(deg, 1) + '.');
    readout(d.readout, `|c|\\,\\kA = ${fmt(Math.abs(c), 1)} \\times ${fmt(A.v, 1)}\\ \\text{m} = ${fmt(mag, 1)}\\ \\text{m}`,
      c < 0 ? 'The magnitude is |c| times the original and the minus sign reverses the direction.'
        : Math.abs(c) < 1 && c !== 0 ? 'A scalar between 0 and 1 divides the vector, so multiplying by ' + fmt(c, 1) + ' is dividing by ' + fmt(1 / c, 0) + ', and the direction is unchanged.'
          : 'The magnitude is c times the original and the direction is unchanged, so dividing by 2 would be multiplying by one half.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: resolving a vector into components. The total displacement of the
   walk in the city and the two displacements, east and north, that add to
   it head to tail, each measured with a ruler. No motion.
===================================================================== */
(function () {
  const d = sim('sim-components', 700);
  const D = ctl(d.controls, { label: '\\kD\\ \\text{(blocks)}', cls: 'position', min: 1, max: 12, step: 0.1, value: 10.3, unit: '', dec: 1, aria: 'magnitude in blocks' });
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 90, step: 0.1, value: 29.0, unit: '°', dec: 1, aria: 'direction' });
  const ox = 330, oy = 590, b = 40;
  function draw() {
    const { ctx } = begin(d.c);
    const Dm = D.v, th = TH.v, ex = Dm * cos(th), no = Dm * sin(th), [hx, hy] = tip(ox, oy, Dm * b, th);
    cityGrid(ctx, ox, oy, b, 12, 12);
    rose(ctx, 140, 250);
    protractor(ctx, ox, oy, 100, th);
    /* the rulers along the two components */
    if (ex > 0.3) ruler(ctx, ox, oy, 0, ex * b, b, 1, -1, 40);
    if (no > 0.3) ruler(ctx, ox + ex * b, oy, 90, no * b, b, 1, -1, 22);
    /* the total displacement and its two parts, head to tail */
    arrow(ctx, ox, oy, hx, hy, C('position'), 6);
    if (ex > 0.1) arrow(ctx, ox, oy, ox + ex * b, oy, C('position'), 4);
    if (no > 0.1) arrow(ctx, ox + ex * b, oy, hx, hy, C('position'), 4);
    text(ctx, 'D', (ox + hx) / 2 - 26 * sin(th), (oy + hy) / 2 - 26 * cos(th), C('position'), { weight: 700, size: 26, align: 'center', bg: PAL.panel });
    if (ex > 0.3) text(ctx, fmt(ex, 1) + ' blocks east', ox + (ex * b) / 2, oy + 100, C('position'), { weight: 600, size: 18, align: 'center', bg: PAL.panel });
    if (no > 0.3) text(ctx, fmt(no, 1) + ' blocks north', ox + ex * b + 76, oy - (no * b) / 2, C('position'), { weight: 600, size: 18, align: 'left', bg: PAL.panel });
    thetaLabel(ctx, ox, oy, th);
    dot(ctx, ox, oy, PAL.ink, true, 6);
    /* the finding, on the right */
    text(ctx, 'the total displacement', 900, 150, PAL.ink, { size: 18 });
    text(ctx, 'D = ' + fmt(Dm, 1) + ' blocks at ' + compass(th), 900, 182, C('position'), { size: 20, weight: 600 });
    text(ctx, 'is the sum of two displacements,', 900, 240, PAL.ink, { size: 18 });
    text(ctx, fmt(ex, 1) + ' blocks east', 900, 272, C('position'), { size: 20, weight: 600 });
    text(ctx, 'and then', 900, 304, PAL.ink, { size: 18 });
    text(ctx, fmt(no, 1) + ' blocks north,', 900, 336, C('position'), { size: 20, weight: 600 });
    text(ctx, 'which are its components along the east and north directions.', 900, 372, PAL.muted, { size: 15 });
    topline(ctx, 'A displacement of ' + fmt(Dm, 1) + ' blocks at ' + compass(th) + ' is ' + fmt(ex, 1) + ' blocks east and ' + fmt(no, 1) + ' blocks north.');
    readout(d.readout, `\\kD = ${fmt(Dm, 1)}\\ \\text{blocks at } ${fmt(th, 1)}^\\circ\\ \\text{north of east:}\\quad ${fmt(ex, 1)}\\ \\text{blocks east},\\ ${fmt(no, 1)}\\ \\text{blocks north}`,
      'The two components added head to tail give back the vector, so finding them is the inverse of the head-to-tail method.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE: the map of paths that problems 1 and 2 refer to (and problems 1
   and 2 of section 3.3). A faithful copy: no sliders, no motion.
===================================================================== */
(function () {
  const d = sim('fig-paths', 610);
  const X0 = 320, Y0 = 540, P = 100, G = 18;
  const SX = (i) => X0 + P * i + P - G / 2, SY = (j) => Y0 - P * j + G / 2;   /* the street right of block column i, and below block row j */
  const PATHS = [
    { n: 'A', pts: [[0, 1], [0, 4], [1, 4]], dash: null, label: [385, 330] },
    { n: 'B', pts: [[0, 1], [4, 1], [4, 4], [1, 4]], dash: [18, 12], label: [600, 445] },
    { n: 'C', pts: [[1, 2], [1, 3], [6, 3], [6, 1], [5, 1], [5, 2], [2, 2]], dash: [3, 10], label: [640, 305] },
    { n: 'D', pts: [[1, 2], [1, 0], [7, 0], [7, 4], [6, 4]], dash: [22, 8, 3, 8], label: [545, 545] },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    ctx.save(); ctx.fillStyle = PAL.soft;
    for (let c = 0; c < 8; c++) for (let r = 0; r < 5; r++) ctx.fillRect(X0 + P * c, Y0 - P * r - (P - G), P - G, P - G);
    ctx.restore();
    rose(ctx, 150, 200, 44);
    for (const { n, pts, dash, label } of PATHS) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); pts.forEach(([i, j], k) => (k ? ctx.lineTo(SX(i), SY(j)) : ctx.moveTo(SX(i), SY(j)))); ctx.stroke(); ctx.restore();
      const [a, b2] = pts, [y, z] = pts.slice(-2), mid = [(SX(a[0]) + SX(b2[0])) / 2, (SY(a[1]) + SY(b2[1])) / 2];
      arrowhead(ctx, mid[0], mid[1], Math.atan2(SY(a[1]) - SY(b2[1]), SX(b2[0]) - SX(a[0])) / RAD, PAL.ink);
      arrowhead(ctx, SX(z[0]), SY(z[1]), Math.atan2(SY(y[1]) - SY(z[1]), SX(z[0]) - SX(y[0])) / RAD, PAL.ink);
      text(ctx, n, label[0], label[1], PAL.ink, { size: 24, weight: 700, align: 'center', bg: PAL.panel });
    }
    dot(ctx, SX(0), SY(1), PAL.ink, true, 8); dot(ctx, SX(1), SY(2), PAL.ink, true, 8);
    line(ctx, 300, SY(1), SX(0) - 14, SY(1), PAL.ink, 2); text(ctx, 'Start', 290, SY(1), PAL.ink, { size: 20, align: 'right' });
    /* a key to the dash patterns */
    text(ctx, 'the paths', 1180, 120, PAL.ink, { size: 17, weight: 600 });
    PATHS.forEach(({ n, dash }, i) => { const y = 156 + 34 * i; line(ctx, 1180, y, 1260, y, PAL.ink, 5, dash ?? undefined); text(ctx, n, 1276, y, PAL.ink, { size: 20, weight: 600 }); });
    headline(ctx, 'All blocks are 120 m on a side, and each path is walked in the direction of its arrowheads.');
    readout(d.readout, '\\text{one block} = 120\\ \\text{m}');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
