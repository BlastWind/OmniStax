/* Figures for section 3.3 Vector Addition and Subtraction: Analytical Methods. Boots against the section's text article.
   Every figure here is a still picture: a vector's components, and the sum of two vectors, have no time in them, so
   none registers a cycle and none gets a transport; each redraws when a slider moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const RAD = Math.PI / 180;
const cos = (deg) => Math.cos(deg * RAD), sin = (deg) => Math.sin(deg * RAD);
/* the angle of a vector from the +x axis, in degrees from -180 to 180 */
const angleOf = (x, y) => Math.atan2(y, x) / RAD;
/* a signed number as the equation prints it: a negative one in brackets */
const num = (v, d) => (v < 0 ? `(${fmt(v, d)})` : fmt(v, d));
/* a direction as the book's problems state it: "29.1° north of east" */
function bearing(deg) {
  const a = Math.round(deg * 10) / 10, m = Math.abs(a);
  if (m === 0) return 'due east'; if (m === 180) return 'due west'; if (a === 90) return 'due north'; if (a === -90) return 'due south';
  const ns = a > 0 ? 'north' : 'south';
  return m < 90 ? fmt(m, 1) + '° ' + ns + ' of east' : fmt(180 - m, 1) + '° ' + ns + ' of west';
}
/* a dashed component vector with a small head, drawn from (x1, y1) to (x2, y2) */
function darrow(ctx, x1, y1, x2, y2, color, w = 3) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 3) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, h = Math.min(22, L);
  line(ctx, x1, y1, x2 - ux * h, y2 - uy * h, color, w, [8, 8]);
  arrow(ctx, x2 - ux * h, y2 - uy * h, x2, y2, color, w);
}
/* an angle arc at (x, y) from the +x direction to the angle `deg`, counterclockwise on the page, with its label */
function angleArc(ctx, x, y, deg, r, label, color) {
  if (Math.abs(deg) < 0.5) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
  ctx.arc(x, y, r, 0, -deg * RAD, deg > 0); ctx.stroke(); ctx.restore();
  const narrow = Math.abs(deg) < 30, lr = r + (narrow ? 40 : 26), mid = deg / 2;
  text(ctx, label, x + lr * cos(mid), y - lr * sin(mid), color, { size: 22, align: 'center', bg: narrow ? undefined : PAL.panel });
}
/* the right-angle mark at (x, y), opening toward (dx, dy) horizontally and vertically */
function rightAngle(ctx, x, y, dx, dy, s = 14) {
  const sx = Math.sign(dx) || 1, sy = Math.sign(dy) || 1;
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath();
  ctx.moveTo(x + sx * s, y); ctx.lineTo(x + sx * s, y - sy * s); ctx.lineTo(x, y - sy * s); ctx.stroke(); ctx.restore();
}
/* a compass rose centred on (x, y), in ink */
function compass(ctx, x, y, r = 34) {
  arrow(ctx, x, y + r, x, y - r, PAL.ink, 3); line(ctx, x - r, y, x + r, y, PAL.ink, 3);
  text(ctx, 'N', x, y - r - 18, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'S', x, y + r + 18, PAL.ink, { size: 20, align: 'center' });
  text(ctx, 'E', x + r + 16, y, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'W', x - r - 16, y, PAL.ink, { size: 20, align: 'center' });
}
/* the x and y axes through (ox, oy) across a box, with their names */
function frame(ctx, ox, oy, x1, x2, y1, y2) {
  arrow(ctx, x1, oy, x2, oy, PAL.muted, 2.5); arrow(ctx, ox, y2, ox, y1, PAL.muted, 2.5);
  text(ctx, 'x', x2 + 6, oy + 24, PAL.muted, { size: 22, weight: 600, align: 'right' });
  text(ctx, 'y', ox - 22, y1 + 8, PAL.muted, { size: 22, weight: 600, align: 'center' });
}
/* a label beside the midpoint of a segment, pushed off it to the left of its direction */
function sideLabel(ctx, s, x1, y1, x2, y2, color, off = 26, size = 24) {
  const L = Math.hypot(x2 - x1, y2 - y1) || 1, nx = (y2 - y1) / L, ny = -(x2 - x1) / L;
  text(ctx, s, (x1 + x2) / 2 + nx * off, (y1 + y2) / 2 + ny * off, color, { size, weight: 600, align: 'center', bg: PAL.panel });
}

/* =====================================================================
   FIGURE 3.24: a vector and its components. A drawn from the origin, its
   components dashed along the axes, the two component equations worked
   with the live numbers. Still: no time in a vector's components.
===================================================================== */
(function () {
  const d = sim('sim-components', 760);
  const A = ctl(d.controls, { label: '\\kA\\ (\\text{blocks})', cls: 'position', min: 0.5, max: 12, step: 0.1, value: 10.3, unit: '', dec: 1, aria: 'magnitude of A' });
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: -180, max: 180, step: 0.1, value: 29.1, unit: '°', dec: 1, aria: 'angle of A' });
  const OX = 560, OY = 395, S = 26;
  function draw() {
    const { ctx } = begin(d.c);
    const a = A.v, th = TH.v, ax = a * cos(th), ay = a * sin(th);
    const tx = OX + ax * S, ty = OY - ay * S, pos = C('position');
    frame(ctx, OX, OY, OX - 330, OX + 330, OY - 325, OY + 315);
    compass(ctx, 120, 170);
    /* the components, dashed, and the right angle where they meet */
    if (Math.abs(ax) > 0.05) darrow(ctx, OX, OY, tx, OY, pos, 3);
    if (Math.abs(ay) > 0.05) darrow(ctx, tx, OY, tx, ty, pos, 3);
    if (Math.abs(ax) > 0.8 && Math.abs(ay) > 0.8) rightAngle(ctx, tx, OY, -ax, ay);
    /* the vector itself and its angle */
    arrow(ctx, OX, OY, tx, ty, pos, 5);
    sideLabel(ctx, 'A', OX, OY, tx, ty, pos);
    angleArc(ctx, OX, OY, th, Math.min(56, Math.max(30, a * S * 0.45)), 'θ', PAL.ink);
    dot(ctx, OX, OY, PAL.ink, true, 5);
    /* the component labels: the x-component under the axis, the y-component beside its arrow */
    if (Math.abs(ax) > 0.05) text(ctx, 'Ax = ' + fmt(ax, 1) + ' blocks', (OX + tx) / 2, OY + (ay >= 0 ? 30 : -30), pos, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const lft = ax >= 0 && tx < 740; if (Math.abs(ay) > 0.05) text(ctx, 'Ay = ' + fmt(ay, 1) + ' blocks', tx + (lft ? 16 : -16), (OY + ty) / 2, pos, { size: 20, weight: 600, align: lft ? 'left' : 'right', bg: PAL.panel });
    /* the numbers, at the right */
    const px = 970, py = 280;
    text(ctx, 'magnitude', px, py, PAL.muted, { size: 17 }); text(ctx, 'A = ' + fmt(a, 1) + ' blocks', px, py + 30, pos, { size: 24, weight: 600 });
    text(ctx, 'direction', px, py + 80, PAL.muted, { size: 17 }); text(ctx, 'θ = ' + fmt(th, 1) + '°', px, py + 110, PAL.ink, { size: 24, weight: 600 });
    text(ctx, 'components', px, py + 160, PAL.muted, { size: 17 });
    text(ctx, 'Ax = ' + fmt(ax, 1) + ' blocks', px, py + 190, pos, { size: 24, weight: 600 });
    text(ctx, 'Ay = ' + fmt(ay, 1) + ' blocks', px, py + 224, pos, { size: 24, weight: 600 });
    const axis = Math.abs(ax) < 0.05 || Math.abs(ay) < 0.05;
    text(ctx, axis ? 'one component is zero, so the other is A itself' : 'the magnitudes do not add: ' + fmt(Math.abs(ax), 1) + ' + ' + fmt(Math.abs(ay), 1) + ' ≠ ' + fmt(a, 1), px, py + 270, PAL.muted, { size: 17 });
    headline(ctx, 'A = ' + fmt(a, 1) + ' blocks at ' + fmt(th, 1) + '° has the components Ax = ' + fmt(ax, 1) + ' blocks and Ay = ' + fmt(ay, 1) + ' blocks');
    readout(d.readout, `\\begin{aligned}\\kAx &= \\kA\\cos\\theta = (${fmt(a, 1)}\\ \\text{blocks})(\\cos ${fmt(th, 1)}^\\circ) = ${fmt(ax, 1)}\\ \\text{blocks}\\\\ \\kAy &= \\kA\\sin\\theta = (${fmt(a, 1)}\\ \\text{blocks})(\\sin ${fmt(th, 1)}^\\circ) = ${fmt(ay, 1)}\\ \\text{blocks}\\end{aligned}`,
      axis ? 'A vector along one of the axes has a component of zero along the other, and its remaining component is as long as the vector itself.'
        : 'The component vectors add to A, but their magnitudes do not: ' + fmt(Math.abs(ax), 1) + ' blocks + ' + fmt(Math.abs(ay), 1) + ' blocks is not ' + fmt(a, 1) + ' blocks, and neither component is longer than A itself.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.27: a vector from its components. The two components laid
   head to tail from the origin, the vector they add to, the Pythagorean
   theorem and the inverse tangent worked with the live numbers. Still.
===================================================================== */
(function () {
  const d = sim('sim-resultant', 760);
  const AX = ctl(d.controls, { label: '\\kAx\\ (\\text{blocks})', cls: 'position', min: -12, max: 12, step: 0.5, value: 9, unit: '', dec: 1, aria: 'x-component of A' });
  const AY = ctl(d.controls, { label: '\\kAy\\ (\\text{blocks})', cls: 'position', min: -12, max: 12, step: 0.5, value: 5, unit: '', dec: 1, aria: 'y-component of A' });
  const OX = 560, OY = 395, S = 26;
  function draw() {
    const { ctx } = begin(d.c);
    const ax = AX.v, ay = AY.v, a = Math.hypot(ax, ay), th = a > 0 ? angleOf(ax, ay) : 0, atn = ax !== 0 ? Math.atan(ay / ax) / RAD : (ay >= 0 ? 90 : -90);
    const tx = OX + ax * S, ty = OY - ay * S, pos = C('position');
    frame(ctx, OX, OY, OX - 330, OX + 330, OY - 325, OY + 315);
    compass(ctx, 120, 170);
    if (Math.abs(ax) > 0.05) darrow(ctx, OX, OY, tx, OY, pos, 3);
    if (Math.abs(ay) > 0.05) darrow(ctx, tx, OY, tx, ty, pos, 3);
    if (Math.abs(ax) > 0.8 && Math.abs(ay) > 0.8) rightAngle(ctx, tx, OY, -ax, ay);
    if (a > 0.05) { arrow(ctx, OX, OY, tx, ty, pos, 5); sideLabel(ctx, 'A', OX, OY, tx, ty, pos); }
    if (a > 0.05) angleArc(ctx, OX, OY, th, Math.min(56, Math.max(30, a * S * 0.45)), 'θ', PAL.ink);
    dot(ctx, OX, OY, PAL.ink, true, 5);
    if (Math.abs(ax) > 0.05) text(ctx, 'Ax = ' + fmt(ax, 1) + ' blocks', (OX + tx) / 2, OY + (ay >= 0 ? 30 : -30), pos, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const lft = ax >= 0 && tx < 740; if (Math.abs(ay) > 0.05) text(ctx, 'Ay = ' + fmt(ay, 1) + ' blocks', tx + (lft ? 16 : -16), (OY + ty) / 2, pos, { size: 20, weight: 600, align: lft ? 'left' : 'right', bg: PAL.panel });
    /* the numbers, at the right */
    const px = 970, py = 280;
    text(ctx, 'components', px, py, PAL.muted, { size: 17 });
    text(ctx, 'Ax = ' + fmt(ax, 1) + ' blocks', px, py + 30, pos, { size: 24, weight: 600 });
    text(ctx, 'Ay = ' + fmt(ay, 1) + ' blocks', px, py + 64, pos, { size: 24, weight: 600 });
    text(ctx, 'magnitude', px, py + 114, PAL.muted, { size: 17 }); text(ctx, 'A = ' + fmt(a, 1) + ' blocks', px, py + 144, pos, { size: 24, weight: 600 });
    text(ctx, 'direction', px, py + 194, PAL.muted, { size: 17 });
    if (a > 0.05) { text(ctx, 'θ = ' + fmt(th, 1) + '°', px, py + 224, PAL.ink, { size: 24, weight: 600 }); text(ctx, bearing(th), px, py + 258, PAL.ink, { size: 20 }); }
    else text(ctx, 'none: the vector has no length', px, py + 224, PAL.muted, { size: 20 });
    /* the equations with the live numbers */
    const sq = `\\sqrt{${num(ax, 1)}^2 + ${num(ay, 1)}^2}`;
    let dir, small;
    if (a <= 0.05) { dir = `\\theta &\\ \\text{is undefined: both components are zero}`; small = 'A vector with no length has no direction.'; }
    else if (ax === 0) { dir = `\\kAx &= 0,\\ \\text{so}\\ \\theta = ${fmt(th, 1)}^\\circ`; small = 'With no x-component the vector lies along the y-axis, and its direction is ' + bearing(th) + '.'; }
    else {
      dir = `\\theta &= \\tan^{-1}(\\kAy / \\kAx) = \\tan^{-1}(${fmt(ay, 1)} / ${num(ax, 1)}) = ${fmt(atn, 1)}^\\circ`;
      small = ax > 0 ? 'The direction ' + fmt(th, 1) + '° from the +x axis is ' + bearing(th) + ', as the problems state it.'
        : 'The inverse tangent gives ' + fmt(atn, 1) + '°, the angle of the line the vector lies along; the arrow points the other way along that line, at ' + fmt(th, 1) + '° from the +x axis, which is ' + bearing(th) + '.';
    }
    headline(ctx, a > 0.05 ? 'Ax = ' + fmt(ax, 1) + ' blocks and Ay = ' + fmt(ay, 1) + ' blocks add to A = ' + fmt(a, 1) + ' blocks at ' + fmt(th, 1) + '°, which is ' + bearing(th)
      : 'both components are zero, so A has no length and no direction');
    readout(d.readout, `\\begin{aligned}\\kA &= \\sqrt{\\kAx^2 + \\kAy^2} = ${sq} = ${fmt(a, 1)}\\ \\text{blocks}\\\\ ${dir}\\end{aligned}`, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 3.28 and 3.33: two legs of a walk and their resultant, added by
   components. One drawing serves both: `sign` is +1 for A + B and -1 for
   A - B, where the second leg is taken in the opposite direction. The
   scale follows the sliders so that the whole walk stays in the frame.
   Still: a sum of displacements has no time in it.
===================================================================== */
function walk(id, sign) {
  const d = sim(id, 720);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 80, step: 0.5, value: 53, unit: 'm', dec: 1, aria: 'magnitude of A' });
  const TA = ctl(d.controls, { label: '\\theta_{\\text{A}}', cls: '', min: -180, max: 180, step: 0.5, value: 20, unit: '°', dec: 1, aria: 'angle of A' });
  const B = ctl(d.controls, { label: '\\kB', cls: 'position', min: 5, max: 80, step: 0.5, value: 34, unit: 'm', dec: 1, aria: 'magnitude of B' });
  const TB = ctl(d.controls, { label: '\\theta_{\\text{B}}', cls: '', min: -180, max: 180, step: 0.5, value: 63, unit: '°', dec: 1, aria: 'angle of B' });
  const bl = sign > 0 ? 'B' : '−B';
  /* a label written upward along a vertical component */
  function vlabel(s, x, y, color) { ctx_.save(); ctx_.translate(x, y); ctx_.rotate(-Math.PI / 2); text(ctx_, s, 0, 0, color, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); ctx_.restore(); }
  let ctx_;
  function draw() {
    const { ctx } = begin(d.c); ctx_ = ctx;
    const a = A.v, ta = TA.v, b = B.v, tb = TB.v, pos = C('position');
    const ax = a * cos(ta), ay = a * sin(ta), bx0 = b * cos(tb), by0 = b * sin(tb), bx = sign * bx0, by = sign * by0;
    const rx = ax + bx, ry = ay + by, r = Math.hypot(rx, ry), th = r > 0.05 ? angleOf(rx, ry) : 0, atn = rx !== 0 ? Math.atan(ry / rx) / RAD : (ry >= 0 ? 90 : -90);
    /* the frame: a scale that keeps the origin, the corner and the end of the walk inside the box; the component rows go below
       the lowest point and the component columns left of the leftmost one, so they never cross the drawing */
    const xs = [0, ax, rx, ax + (sign < 0 ? bx0 : 0)], ys = [0, ay, ry, ay + (sign < 0 ? by0 : 0)];
    const xmin = Math.min(...xs), xmax = Math.max(...xs), ymin = Math.min(...ys), ymax = Math.max(...ys);
    const dx = Math.max(xmax - xmin, 20), dy = Math.max(ymax - ymin, 20);
    const L = 290, R = 880, T = 115, Bt = 460, W = R - L, Hh = Bt - T;
    const S = Math.min(W / dx, Hh / dy, 7.5);
    const OX = L + (W - dx * S) / 2 - xmin * S, OY = T + (Hh - dy * S) / 2 + ymax * S;
    const X = (m) => OX + m * S, Y = (m) => OY - m * S;
    const yRow = Y(ymin), xCol = X(xmin);            /* the lowest and the leftmost point of the drawing */
    frame(ctx, OX, OY, Math.min(xCol - 150, OX - 60), R + 30, T - 30, Math.max(yRow + 150, OY + 40));
    compass(ctx, 70, 640, 26);
    /* the x-components, on rows below the drawing: A's, then B's from where A's ends, then the resultant's as a bracket */
    const r1 = yRow + 28, r2 = yRow + 66, r3 = yRow + 112;
    line(ctx, X(ax), Y(ay), X(ax), r2, PAL.rule, 1.5, [4, 8]); line(ctx, X(rx), Y(ry), X(rx), r3, PAL.rule, 1.5, [4, 8]); line(ctx, OX, OY, OX, r3, PAL.rule, 1.5, [4, 8]);
    if (Math.abs(ax) > 0.3) { darrow(ctx, X(0), r1, X(ax), r1, pos, 3); text(ctx, 'Ax = ' + fmt(ax, 1) + ' m', X(ax / 2), r1, pos, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); }
    if (Math.abs(bx) > 0.3) { darrow(ctx, X(ax), r2, X(rx), r2, pos, 3); text(ctx, bl + 'x = ' + fmt(bx, 1) + ' m', X(ax + bx / 2), r2, pos, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); }
    if (Math.abs(rx) > 0.3) { arrow(ctx, X(0), r3, X(rx), r3, PAL.ink, 3); text(ctx, 'Rx = Ax + ' + (sign > 0 ? 'Bx' : '(−Bx)') + ' = ' + fmt(rx, 1) + ' m', X(rx / 2), r3 + 24, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); }
    /* the y-components, on columns left of the drawing, the same way */
    const c1 = xCol - 28, c2 = xCol - 66, c3 = xCol - 112;
    line(ctx, X(ax), Y(ay), c2, Y(ay), PAL.rule, 1.5, [4, 8]); line(ctx, X(rx), Y(ry), c3, Y(ry), PAL.rule, 1.5, [4, 8]); line(ctx, OX, OY, c3, OY, PAL.rule, 1.5, [4, 8]);
    if (Math.abs(ay) > 0.3) { darrow(ctx, c1, Y(0), c1, Y(ay), pos, 3); vlabel('Ay = ' + fmt(ay, 1) + ' m', c1, Y(ay / 2), pos); }
    if (Math.abs(by) > 0.3) { darrow(ctx, c2, Y(ay), c2, Y(ry), pos, 3); vlabel(bl + 'y = ' + fmt(by, 1) + ' m', c2, Y(ay + by / 2), pos); }
    if (Math.abs(ry) > 0.3) { arrow(ctx, c3, Y(0), c3, Y(ry), PAL.ink, 3); vlabel('Ry = Ay + ' + (sign > 0 ? 'By' : '(−By)') + ' = ' + fmt(ry, 1) + ' m', c3 - 24, Y(ry / 2), PAL.ink); }
    /* the ghost of B when the walk subtracts it */
    if (sign < 0) { line(ctx, X(ax), Y(ay), X(ax + bx0), Y(ay + by0), PAL.muted, 3, [10, 10]); sideLabel(ctx, 'B', X(ax), Y(ay), X(ax + bx0), Y(ay + by0), PAL.muted, -26, 22); }
    /* the legs and the resultant */
    arrow(ctx, X(0), Y(0), X(ax), Y(ay), pos, 4.5); sideLabel(ctx, 'A', X(0), Y(0), X(ax), Y(ay), pos, -26);
    arrow(ctx, X(ax), Y(ay), X(rx), Y(ry), pos, 4.5); sideLabel(ctx, bl, X(ax), Y(ay), X(rx), Y(ry), pos);
    if (r > 0.3) { arrow(ctx, X(0), Y(0), X(rx), Y(ry), pos, 6.5); sideLabel(ctx, 'R', X(0), Y(0), X(rx), Y(ry), pos, rx * ay - ry * ax > 0 ? -28 : 28); }
    /* the angles: each leg from a horizontal through its tail, the resultant from the +x axis on a wider arc */
    angleArc(ctx, X(0), Y(0), ta, Math.min(50, a * S * 0.5), 'θA', PAL.ink);
    if (sign > 0) { line(ctx, X(ax), Y(ay), X(ax) + 64, Y(ay), PAL.rule, 1.5, [4, 8]); angleArc(ctx, X(ax), Y(ay), tb, Math.min(40, b * S * 0.5), 'θB', PAL.ink); }
    if (r > 0.3) angleArc(ctx, X(0), Y(0), th, Math.min(110, r * S * 0.6), 'θ', PAL.ink);
    dot(ctx, X(0), Y(0), PAL.ink, true, 5);
    /* the components as a table at the right: along one axis they add like ordinary numbers */
    const px = 960, py = 200, k1 = px + 60, k2 = px + 230, k3 = px + 390;
    text(ctx, 'x-component', k2, py, PAL.muted, { size: 17, align: 'right' }); text(ctx, 'y-component', k3, py, PAL.muted, { size: 17, align: 'right' });
    const row = (lab, x, y, yy, col) => { text(ctx, lab, k1 - 20, yy, col, { size: 24, weight: 600, align: 'right' }); text(ctx, fmt(x, 1) + ' m', k2, yy, col, { size: 22, weight: 600, align: 'right' }); text(ctx, fmt(y, 1) + ' m', k3, yy, col, { size: 22, weight: 600, align: 'right' }); };
    row('A', ax, ay, py + 40, pos); row(bl, bx, by, py + 80, pos);
    line(ctx, k1 - 70, py + 104, k3 + 8, py + 104, PAL.muted, 2); row('R', rx, ry, py + 132, pos);
    text(ctx, 'magnitude and direction of R', px - 20, py + 200, PAL.muted, { size: 17 });
    text(ctx, 'R = ' + fmt(r, 1) + ' m', px - 20, py + 232, pos, { size: 24, weight: 600 });
    if (r > 0.05) { text(ctx, 'θ = ' + fmt(th, 1) + '°', px - 20, py + 266, PAL.ink, { size: 24, weight: 600 }); text(ctx, bearing(th), px - 20, py + 298, PAL.ink, { size: 20 }); }
    /* the readout: the four steps with the numbers as they stand */
    const op = sign > 0 ? '+ ' : '+ (-', cl = sign > 0 ? '' : ')';
    const bxs = sign > 0 ? num(bx, 1) : `(-${num(bx0, 1)})`, bys = sign > 0 ? num(by, 1) : `(-${num(by0, 1)})`;
    let dir;
    if (r <= 0.05) dir = `\\theta &\\ \\text{is undefined: the walk ends where it began}`;
    else if (rx === 0) dir = `\\kRx &= 0,\\ \\text{so}\\ \\theta = ${fmt(th, 1)}^\\circ`;
    else dir = `\\theta &= \\tan^{-1}(\\kRy / \\kRx) = \\tan^{-1}(${fmt(ry, 1)} / ${num(rx, 1)}) = ${fmt(atn, 1)}^\\circ`;
    const eq = `\\begin{aligned}\\kRx &= \\kAx ${op}\\kBx${cl} = ${num(ax, 1)} + ${bxs} = ${fmt(rx, 1)}\\ \\text{m}\\\\ \\kRy &= \\kAy ${op}\\kBy${cl} = ${num(ay, 1)} + ${bys} = ${fmt(ry, 1)}\\ \\text{m}\\\\ \\kR &= \\sqrt{\\kRx^2 + \\kRy^2} = \\sqrt{${num(rx, 1)}^2 + ${num(ry, 1)}^2} = ${fmt(r, 1)}\\ \\text{m}\\\\ ${dir}\\end{aligned}`;
    const small = r <= 0.05 ? 'The two legs cancel, so the resultant has no length and no direction.'
      : rx < 0 ? 'The inverse tangent gives the angle of the line the resultant lies along; the arrow points the other way along it, at ' + fmt(th, 1) + '° from the +x axis, which is ' + bearing(th) + '.'
      : sign > 0 ? 'The components of A and B along each axis add like ordinary numbers, and the resultant is ' + bearing(th) + '.'
      : 'The components of −B are the negatives of the components of B, and the resultant A − B is ' + bearing(th) + '.';
    headline(ctx, r > 0.05 ? 'A = ' + fmt(a, 1) + ' m at ' + fmt(ta, 1) + '° and ' + bl + ' = ' + fmt(b, 1) + ' m at ' + fmt(sign > 0 ? tb : angleOf(bx, by), 1) + '° ' + (sign > 0 ? 'add to' : 'give') + ' R = ' + fmt(r, 1) + ' m at ' + fmt(th, 1) + '°, which is ' + bearing(th)
      : 'the two legs cancel: the walk ends where it began, and R = 0');
    readout(d.readout, eq, small);
  }
  register(d.fig, { update: () => {}, draw });
}
walk('sim-add', 1);
walk('sim-subtract', -1);
};
