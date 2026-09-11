/* Figures for section 3.2 Vector Addition and Subtraction: Graphical Methods. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, runner } = F;
const demo = (id, H) => F.demo(root, id, H);
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
/* a sailing boat whose waterline is centred on (x, y), in ink */
function boat(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-34, 0); ctx.lineTo(34, 0); ctx.lineTo(24, 14); ctx.lineTo(-24, 14); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(2, 0); ctx.lineTo(2, -46); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(4, -44); ctx.lineTo(30, -8); ctx.lineTo(4, -8); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a dock: a short pier on two posts, its landing end at (x, y) */
function dock(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.fillRect(x - 8, y - 6, 70, 10); ctx.fillRect(x + 6, y + 4, 6, 18); ctx.fillRect(x + 46, y + 4, 6, 18); ctx.restore();
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
  const d = demo('demo-vector-2d', 660);
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
    headline(ctx, 'D = ' + fmt(Dm, 1) + ' blocks at ' + compass(th) + ': the ruler reads ' + fmt(Dm, 1) + ' and the protractor ' + fmt(th, 1) + '°');
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
  const d = demo('demo-head-to-tail', 660);
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
    if (!done) runner(ctx, tau < TW ? ax : ox + e * b, (tau < TW ? ny : oy - n * b) - 20, PAL.ink, tau < TW ? tau * 14 : 0);
    dot(ctx, ox, oy, PAL.ink, true, 6);
    /* the steps of the book, the current one in ink */
    const steps = [['Step 1', 'draw the first vector, ' + fmt(e, 0) + ' blocks east'], ['Step 2', 'draw the second, ' + fmt(n, 0) + ' blocks north, with its tail at the head of the first'],
      ['Step 4', 'draw the resultant from the tail of the first to the head of the last'], ['Steps 5 and 6', 'measure its length with a ruler and its angle with a protractor']];
    const cur = tau < tA ? 0 : tau < TW ? 1 : !done ? 2 : 3;
    steps.forEach(([k, s], i) => { const on = i === cur, col = on ? PAL.ink : PAL.muted, y = 150 + 72 * i; text(ctx, k, 880, y, col, { size: 17, weight: 600 }); text(ctx, s, 880, y + 24, col, { size: 17 }); });
    headline(ctx, done ? 'the resultant D is ' + fmt(r, 1) + ' blocks at ' + compass(deg) + ', measured with a ruler and a protractor'
      : cur === 0 ? 'step 1: she walks ' + fmt(e, 0) + ' blocks east, and the first arrow is drawn with a ruler'
        : cur === 1 ? 'step 2: she walks ' + fmt(n, 0) + ' blocks north, and the second arrow starts at the head of the first'
          : 'step 4: the resultant is drawn from the tail of the first vector to the head of the last');
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
  const d = demo('demo-walk', 640);
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
    for (let m = 10; m <= 80; m += 10) { line(ctx, ox + m * S, oy - 5, ox + m * S, oy + 5, PAL.ink, 1.5); if (m % 20 === 0) text(ctx, m + ' m', ox + m * S, oy + 22, PAL.muted, { size: 15, align: 'center' }); }
    text(ctx, 'x (east)', 972, oy, PAL.ink, { size: 17, align: 'left' }); text(ctx, 'y (north)', ox + 12, 76, PAL.ink, { size: 17 });
    rose(ctx, 1240, 520, 36);
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
        beside(ctx, ox, oy, hx, hy, 'R = ' + fmt(r, 1) + ' m', C('position'), 1, 30, 22);
        thetaLabel(ctx, ox, oy, deg, 2, 150, deg < 0 ? 92 : 30);
      }
    }
    if (!done) runner(ctx, wx, wy - 20, PAL.ink, tau < TW ? tau * 14 : 0);
    dot(ctx, ox, oy, PAL.ink, true, 6);
    /* the legs of the example, the current one in ink, and the resultant when it is drawn */
    const legs = ['A = ' + fmt(mags[0], 1) + ' m at 49.0° north of east', 'B = ' + fmt(mags[1], 1) + ' m at 15.0° north of east', 'C = ' + fmt(mags[2], 1) + ' m at 68.0° south of east'];
    legs.forEach((s, i) => text(ctx, s, 1000, 150 + 44 * i, i === cur ? PAL.ink : PAL.muted, { size: 19, weight: i === cur ? 600 : 400 }));
    text(ctx, done ? 'R = ' + fmt(r, 1) + ' m at ' + compass(deg, 2) : tau > TW ? 'R is being drawn from the tail of A to the head of C' : 'R waits until every leg is walked', 1000, 310, done ? PAL.ink : PAL.muted, { size: 19, weight: done ? 600 : 400 });
    headline(ctx, done ? 'the resultant R is ' + fmt(r, 1) + ' m at ' + compass(deg, 2) + ', measured with a ruler and a protractor'
      : cur >= 0 ? 'she walks leg ' + NAMES[cur] + ', ' + fmt(mags[cur], 1) + ' m, with its tail at the head of the leg before'
        : 'the resultant is drawn from the tail of the first vector to the head of the last');
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
  const d = demo('demo-order', 620);
  const O = ctl(d.controls, { label: '\\text{order}', cls: '', min: 1, max: 6, step: 1, value: 5, unit: '', dec: 0, aria: 'order of addition' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: -180, max: 180, step: 1, value: 49, unit: '°', dec: 0, aria: 'direction of A' });
  const TB = ctl(d.controls, { label: '\\theta_{\\text{B}}', cls: '', min: -180, max: 180, step: 1, value: 15, unit: '°', dec: 0, aria: 'direction of B' });
  const TC = ctl(d.controls, { label: '\\theta_{\\text{C}}', cls: '', min: -180, max: 180, step: 1, value: -68, unit: '°', dec: 0, aria: 'direction of C' });
  const MAG = [25, 23, 32], S = 6, ox = 600, oy = 330;
  function path(ctx, order, degs, color, w, size) {
    let px = ox, py = oy;
    for (const i of order) { const [hx, hy] = tip(px, py, MAG[i] * S, degs[i]); arrow(ctx, px, py, hx, hy, color, w); beside(ctx, px, py, hx, hy, NAMES[i], color, 1, 22, size); px = hx; py = hy; }
    return [px, py];
  }
  function draw() {
    const { ctx } = begin(d.c);
    const k = O.v - 1, degs = [TA.v, TB.v, TC.v];
    line(ctx, ox - 340, oy, ox + 380, oy, PAL.rule, 2); line(ctx, ox, oy - 260, ox, oy + 260, PAL.rule, 2);
    text(ctx, 'east', ox + 380, oy + 20, PAL.muted, { size: 15, align: 'right' });
    if (k !== 0) path(ctx, ORDERS[0], degs, PAL.muted, 3, 17);
    const [ex, ey] = path(ctx, ORDERS[k], degs, C('position'), 5, 20);
    const pol = polar(ex - ox, oy - ey), r = pol.r / S, deg = pol.deg;
    arrow(ctx, ox, oy, ex, ey, C('position'), 6);
    beside(ctx, ox, oy, ex, ey, 'R = ' + fmt(r, 1) + ' m', C('position'), 1, 36, 22);
    dot(ctx, ox, oy, PAL.ink, true, 6); dot(ctx, ex, ey, PAL.ink, true, 6);
    /* the six orders, the chosen one in ink */
    text(ctx, 'the order of addition', 1080, 110, PAL.ink, { size: 17, weight: 600 });
    ORDERS.forEach((o, i) => text(ctx, (i + 1) + '   ' + o.map((j) => NAMES[j]).join(' + '), 1080, 142 + 28 * i, i === k ? PAL.ink : PAL.muted, { size: 17, weight: i === k ? 600 : 400 }));
    text(ctx, 'A = 25.0 m, B = 23.0 m, C = 32.0 m', 1080, 340, PAL.muted, { size: 15 });
    headline(ctx, k === 0 ? 'added as A, then B, then C, the resultant R is ' + fmt(r, 1) + ' m at ' + compass(deg, 2)
      : 'added as ' + orderName(k) + ', the sum ends at the same point: R = ' + fmt(r, 1) + ' m at ' + compass(deg, 2));
    const lhs = ORDERS[k].map((i) => '\\mathbf{' + NAMES[i] + '}').join(' + ');
    readout(d.readout, (k === 0 ? lhs : lhs + ' = \\mathbf{A} + \\mathbf{B} + \\mathbf{C}') + ` = \\mathbf{R},\\quad \\kR = ${fmt(r, 1)}\\ \\text{m}`,
      'Vector addition is commutative: the sum is the same in whatever order the vectors are added, just as 2 + 3 and 3 + 2 are both 5.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.19 (and 3.20 to 3.23): the negative of a vector and Example
   3.2, the woman sailing a boat. A, then B to the dock and −B to where she
   ends up, with both resultants from the starting point. No motion.
===================================================================== */
(function () {
  const d = demo('demo-subtraction', 660);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 40, step: 0.5, value: 27.5, unit: 'm', dec: 1, aria: 'first leg' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: 0, max: 180, step: 1, value: 66, unit: '°', dec: 0, aria: 'direction of A' });
  const B = ctl(d.controls, { label: '\\kB', cls: 'position', min: 5, max: 40, step: 0.5, value: 30, unit: 'm', dec: 1, aria: 'second leg' });
  const TB = ctl(d.controls, { label: '\\theta_{\\text{B}}', cls: '', min: 0, max: 180, step: 1, value: 112, unit: '°', dec: 0, aria: 'direction of B' });
  const S = 6, ox = 560, oy = 460;
  function draw() {
    const { ctx } = begin(d.c);
    const [ax, ay] = tip(ox, oy, A.v * S, TA.v), [bx, by] = tip(ax, ay, B.v * S, TB.v), [nx, ny] = tip(ax, ay, B.v * S, TB.v + 180);
    const sum = polar((bx - ox) / S, (oy - by) / S), dif = polar((nx - ox) / S, (oy - ny) / S);
    line(ctx, ox - 380, oy, ox + 380, oy, PAL.rule, 2); text(ctx, 'east', ox + 380, oy - 16, PAL.muted, { size: 15, align: 'right' });
    line(ctx, ax - 60, ay, ax + 60, ay, PAL.rule, 1.5, [6, 6]);
    /* the two resultants, then the legs on top of them */
    arrow(ctx, ox, oy, bx, by, C('position'), 6); arrow(ctx, ox, oy, nx, ny, C('position'), 6);
    arrow(ctx, ox, oy, ax, ay, C('position'), 4); arrow(ctx, ax, ay, bx, by, C('position'), 4); arrow(ctx, ax, ay, nx, ny, C('position'), 4);
    beside(ctx, ox, oy, ax, ay, 'A', C('position'), 1, 22, 20); beside(ctx, ax, ay, bx, by, 'B', C('position'), 1, 22, 20); beside(ctx, ax, ay, nx, ny, '−B', C('position'), 1, 22, 20);
    beside(ctx, ox, oy, bx, by, 'R′ = ' + fmt(sum.r, 1) + ' m', C('position'), 1, 34, 19);
    beside(ctx, ox, oy, nx, ny, 'R = ' + fmt(dif.r, 1) + ' m', C('position'), -1, 34, 19);
    dock(ctx, bx + 4, by - 4, PAL.ink); text(ctx, 'the dock, at A + B', bx + 76, by - 2, PAL.ink, { size: 17 });
    boat(ctx, nx, ny + 4, PAL.ink, 0.8); text(ctx, 'where she ends up, at A − B', nx + 44, ny + 8, PAL.ink, { size: 17 });
    dot(ctx, ox, oy, PAL.ink, true, 6); text(ctx, 'start', ox - 14, oy + 18, PAL.muted, { size: 15, align: 'right' });
    /* the comparison, on the right */
    text(ctx, 'the dock is at A + B:', 1010, 130, PAL.ink, { size: 18 });
    text(ctx, fmt(sum.r, 1) + ' m at ' + compass(sum.deg), 1010, 160, C('position'), { size: 20, weight: 600 });
    text(ctx, 'she arrives at A + (−B) = A − B:', 1010, 220, PAL.ink, { size: 18 });
    text(ctx, fmt(dif.r, 1) + ' m at ' + compass(dif.deg), 1010, 250, C('position'), { size: 20, weight: 600 });
    text(ctx, '−B has the magnitude of B, ' + fmt(B.v, 1) + ' m,', 1010, 310, PAL.muted, { size: 16 });
    text(ctx, 'and points the opposite way, ' + compass(TB.v + 180, 0), 1010, 334, PAL.muted, { size: 16 });
    headline(ctx, 'A − B is ' + fmt(dif.r, 1) + ' m at ' + compass(dif.deg) + ', while the dock at A + B is ' + fmt(sum.r, 1) + ' m at ' + compass(sum.deg));
    readout(d.readout, `\\mathbf{A} - \\mathbf{B} = \\mathbf{A} + (-\\mathbf{B}),\\quad \\kR = ${fmt(dif.r, 1)}\\ \\text{m}`,
      'The dock and the place she reaches are 2B = ' + fmt(2 * B.v, 1) + ' m apart, since B and −B lead away from the head of A in opposite directions.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   DEMO: multiplying a vector by a scalar. The first leg of the sailing
   example and the same vector times c, which keeps the direction when c is
   positive and reverses it when c is negative. No motion.
===================================================================== */
(function () {
  const d = demo('demo-scalar', 680);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 40, step: 0.5, value: 27.5, unit: 'm', dec: 1, aria: 'magnitude of A' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: 0, max: 180, step: 1, value: 66, unit: '°', dec: 0, aria: 'direction of A' });
  const K = ctl(d.controls, { label: 'c', cls: '', min: -3, max: 3, step: 0.5, value: 3, unit: '', dec: 1, aria: 'scalar' });
  const S = 3, o1 = [300, 340], o2 = [900, 340];
  function draw() {
    const { ctx } = begin(d.c);
    const c = K.v, mag = Math.abs(c) * A.v, deg = c < 0 ? TA.v + 180 : TA.v;
    for (const [x, y] of [o1, o2]) { line(ctx, x - 130, y, x + 170, y, PAL.rule, 2); text(ctx, 'east', x + 170, y + 20, PAL.muted, { size: 15, align: 'right' }); dot(ctx, x, y, PAL.ink, true, 6); }
    const [ax, ay] = tip(o1[0], o1[1], A.v * S, TA.v);
    arrow(ctx, o1[0], o1[1], ax, ay, C('position'), 5);
    beside(ctx, o1[0], o1[1], ax, ay, 'A = ' + fmt(A.v, 1) + ' m', C('position'), 1, 56, 20);
    text(ctx, 'θ = ' + fmt(TA.v, 0) + '°', o1[0] + 70, o1[1] + 22, PAL.ink, { size: 17, bg: PAL.panel });
    const cs = (c < 0 ? '−' : '') + fmt(Math.abs(c), 1);
    text(ctx, '× ' + cs, 600, 330, PAL.ink, { size: 30, weight: 600, align: 'center' });
    if (mag > 0.01) {
      const [hx, hy] = tip(o2[0], o2[1], mag * S, deg);
      arrow(ctx, o2[0], o2[1], hx, hy, C('position'), 5);
      beside(ctx, o2[0], o2[1], hx, hy, cs + 'A = ' + fmt(mag, 1) + ' m', C('position'), c < 0 ? -1 : 1, 66, 20);
    } else text(ctx, '0A: the vector vanishes', o2[0], o2[1] - 30, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, c === 0 ? '0 × ' + fmt(A.v, 1) + ' m = 0 m: multiplying by zero leaves no vector at all'
      : cs + ' × ' + fmt(A.v, 1) + ' m = ' + fmt(mag, 1) + ' m ' + (c < 0 ? 'in the opposite direction, ' : 'in the same direction, ') + compass(deg, 1));
    readout(d.readout, `|c|\\,\\kA = ${fmt(Math.abs(c), 1)} \\times ${fmt(A.v, 1)}\\ \\text{m} = ${fmt(mag, 1)}\\ \\text{m}`,
      c < 0 ? 'The magnitude is |c| times the original and the minus sign reverses the direction.'
        : Math.abs(c) < 1 && c !== 0 ? 'A scalar between 0 and 1 divides the vector: multiplying by ' + fmt(c, 1) + ' is dividing by ' + fmt(1 / c, 0) + ', and the direction is unchanged.'
          : 'The magnitude is c times the original and the direction is unchanged; dividing by 2 would be multiplying by 1/2.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   DEMO: resolving a vector into components. The total displacement of the
   walk in the city and the two displacements, east and north, that add to
   it head to tail, each measured with a ruler. No motion.
===================================================================== */
(function () {
  const d = demo('demo-components', 700);
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
    headline(ctx, fmt(Dm, 1) + ' blocks at ' + compass(th) + ' is ' + fmt(ex, 1) + ' blocks east and ' + fmt(no, 1) + ' blocks north');
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
  const d = demo('fig-paths', 600);
  const X0 = 320, Y0 = 560, P = 100, G = 18;
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
    headline(ctx, 'all blocks are 120 m on a side, and each path is walked in the direction of its arrowheads');
    readout(d.readout, '\\text{one block} = 120\\ \\text{m}');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
