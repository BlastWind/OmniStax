/* Figures for section 3.3 Vector Addition and Subtraction: Analytical Methods. Boots against the section's text article.
   Every figure here is a still picture: a vector's components, and the sum of two vectors, have no time in them, so
   none registers a cycle and none gets a transport; each redraws when a slider moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, register, begin, line, arrow, dot, text, topline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = host.appendChild(el('small', null, small)); F.renderMath(n); } }

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
/* the component labels of a vector drawn from (OX, OY) to (tx, ty): the x-component across the axis from the vector,
   the y-component beside its dashed arrow; a component shorter than its own label is named only in the readout */
function compLabels(ctx, ax, ay, tx, ty, OX, OY, S, pos) {
  if (Math.abs(ax) * S > 70) text(ctx, 'Ax = ' + fmt(ax, 1) + ' blocks', (OX + tx) / 2, OY + (ay >= 0 ? 30 : -30), pos, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
  const lft = ax >= 0; if (Math.abs(ay) * S > 30) text(ctx, 'Ay = ' + fmt(ay, 1) + ' blocks', tx + (lft ? 16 : -16), (OY + ty) / 2, pos, { size: 20, weight: 600, align: lft ? 'left' : 'right', bg: PAL.panel });
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
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: -180, max: 180, step: 0.1, value: 29.1, unit: '°', dec: 1, aria: 'angle of A' });
  const OX = 560, OY = 395, S = 26;
  function draw() {
    const { ctx } = begin(d.c);
    const a = A.v, th = TH.v, ax = a * cos(th), ay = a * sin(th);
    const tx = OX + ax * S, ty = OY - ay * S, pos = C('position');
    frame(ctx, OX, OY, OX - 330, OX + 340, OY - 325, OY + 315);
    compass(ctx, 110, 680);
    /* the components, dashed, and the right angle where they meet */
    if (Math.abs(ax) > 0.05) darrow(ctx, OX, OY, tx, OY, pos, 3);
    if (Math.abs(ay) > 0.05) darrow(ctx, tx, OY, tx, ty, pos, 3);
    if (Math.abs(ax) > 0.8 && Math.abs(ay) > 0.8) rightAngle(ctx, tx, OY, -ax, ay);
    /* the vector itself and its angle */
    arrow(ctx, OX, OY, tx, ty, pos, 5);
    sideLabel(ctx, 'A', OX, OY, tx, ty, pos, ax * ay < 0 ? -26 : 26);
    angleArc(ctx, OX, OY, th, Math.min(56, Math.max(30, a * S * 0.45)), 'θ', C('angle'));
    dot(ctx, OX, OY, PAL.ink, true, 5);
    /* the component labels: the x-component under the axis, the y-component beside its arrow */
    compLabels(ctx, ax, ay, tx, ty, OX, OY, S, pos);
    const axis = Math.abs(ax) < 0.05 || Math.abs(ay) < 0.05;
    topline(ctx, 'A vector of ' + fmt(a, 1) + ' blocks at ' + fmt(th, 1) + '° has the components $\\kAx = ' + fmt(ax, 1) + '$ and $\\kAy = ' + fmt(ay, 1) + '$ blocks.');
    readout(d.readout, `\\begin{aligned}\\kAx &= \\kA\\cos\\ktheta = (${fmt(a, 1)}\\ \\text{blocks})(\\cos ${fmt(th, 1)}^\\circ) = ${fmt(ax, 1)}\\ \\text{blocks}\\\\ \\kAy &= \\kA\\sin\\ktheta = (${fmt(a, 1)}\\ \\text{blocks})(\\sin ${fmt(th, 1)}^\\circ) = ${fmt(ay, 1)}\\ \\text{blocks}\\end{aligned}`,
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
    frame(ctx, OX, OY, OX - 330, OX + 340, OY - 325, OY + 315);
    compass(ctx, 110, 680);
    if (Math.abs(ax) > 0.05) darrow(ctx, OX, OY, tx, OY, pos, 3);
    if (Math.abs(ay) > 0.05) darrow(ctx, tx, OY, tx, ty, pos, 3);
    if (Math.abs(ax) > 0.8 && Math.abs(ay) > 0.8) rightAngle(ctx, tx, OY, -ax, ay);
    if (a > 0.05) { arrow(ctx, OX, OY, tx, ty, pos, 5); sideLabel(ctx, 'A', OX, OY, tx, ty, pos, ax * ay < 0 ? -26 : 26); }
    if (a > 0.05) angleArc(ctx, OX, OY, th, Math.min(56, Math.max(30, a * S * 0.45)), 'θ', C('angle'));
    dot(ctx, OX, OY, PAL.ink, true, 5);
    compLabels(ctx, ax, ay, tx, ty, OX, OY, S, pos);
    /* the equations with the live numbers */
    const sq = `\\sqrt{${num(ax, 1)}^2 + ${num(ay, 1)}^2}`;
    let dir, small;
    if (a <= 0.05) dir = `\\ktheta &\\ \\text{is undefined: both components are zero}`;
    else if (ax === 0) dir = `\\kAx &= 0,\\ \\text{so}\\ \\ktheta = ${fmt(th, 1)}^\\circ`;
    else if (ax > 0) dir = `\\ktheta &= \\tan^{-1}(\\kAy / \\kAx) = \\tan^{-1}(${fmt(ay, 1)} / ${num(ax, 1)}) = ${fmt(atn, 1)}^\\circ`;
    else {
      dir = `\\ktheta &= \\tan^{-1}(\\kAy / \\kAx) ${th > atn ? '+' : '-'} 180^\\circ = ${fmt(atn, 1)}^\\circ ${th > atn ? '+' : '-'} 180^\\circ = ${fmt(th, 1)}^\\circ`;
      small = 'The inverse tangent gives the line the vector lies along; with the x-component negative the arrow points the other way along it, so 180° is added or taken away.';
    }
    topline(ctx, a > 0.05 ? 'Components of ' + fmt(ax, 1) + ' and ' + fmt(ay, 1) + ' blocks add to $\\kA = ' + fmt(a, 1) + '$ blocks, ' + bearing(th) + '.'
      : 'Both components are zero, so $\\kA$ has no length and no direction.');
    readout(d.readout, `\\begin{aligned}\\kA &= \\sqrt{\\kAx^2 + \\kAy^2} = ${sq} = ${fmt(a, 1)}\\ \\text{blocks}\\\\ ${dir}\\end{aligned}`, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 3.28 to 3.33: two legs of a walk and their resultant, added by
   components. One drawing serves both: `sign` is +1 for A + B and -1 for
   A - B, where the second leg is taken in the opposite direction. The scale
   is fixed once from the longest walk the sliders allow, two 60 m legs that
   reach 120 m from the origin, so a leg dragged longer is drawn longer; the
   component rows sit below that disc and the columns to its left.
   Still: a sum of displacements has no time in it.
===================================================================== */
function walk(id, sign) {
  const H = 1020, S = 3, REACH = 120, OX = 700, OY = 475;   /* 3 units a metre: the 120 m disc spans x 340 to 1060, y 115 to 835 */
  const d = sim(id, H);
  const A = ctl(d.controls, { label: '\\kA', cls: 'position', min: 5, max: 60, step: 0.5, value: 53, unit: 'm', dec: 1, aria: 'magnitude of A' });
  const TA = ctl(d.controls, { label: '\\kthetaA', cls: 'angle', min: -180, max: 180, step: 0.5, value: 20, unit: '°', dec: 1, aria: 'angle of A', detents: [-90, 0, 90] });
  const B = ctl(d.controls, { label: '\\kB', cls: 'position', min: 5, max: 60, step: 0.5, value: 34, unit: 'm', dec: 1, aria: 'magnitude of B' });
  const TB = ctl(d.controls, { label: '\\kthetaB', cls: 'angle', min: -180, max: 180, step: 0.5, value: 63, unit: '°', dec: 1, aria: 'angle of B', detents: [-90, 0, 90] });
  const X = (m) => OX + m * S, Y = (m) => OY - m * S;
  const r1 = Y(-REACH) + 32, r2 = r1 + 50, r3 = r2 + 50;      /* the rows of the x-components */
  const c1 = X(-REACH) - 32, c2 = c1 - 72, c3 = c2 - 72;      /* the columns of the y-components */
  const nb = sign > 0 ? 'B' : '−B';
  const round = (v) => Math.round(v * 10) / 10;
  const f1 = (v) => fmt(Math.abs(v) < 0.05 ? 0 : v, 1);       /* a value that rounds to zero is printed without a sign */
  const n1 = (v) => (v <= -0.05 ? `(${fmt(v, 1)})` : f1(v));
  const m1 = (v) => f1(v).replace('-', '−') + ' m';           /* a component as its label prints it */
  const seg = (p, q) => ({ x1: p.x, y1: p.y, x2: q.x, y2: q.y });
  /* the side of the segment p to q away from the point t, as labeller.beside counts sides */
  const away = (p, q, t) => (-(q.y - p.y) * (t.x - (p.x + q.x) / 2) + (q.x - p.x) * (t.y - (p.y + q.y) / 2) > 0 ? -1 : 1);
  function draw() {
    const { ctx } = begin(d.c);
    const pos = C('position'), angc = C('angle'), guide = F.alpha(PAL.ink, 0.3);
    const a = A.v, ta = TA.v, b = B.v, tb = TB.v;
    const ax = a * cos(ta), ay = a * sin(ta), bx0 = b * cos(tb), by0 = b * sin(tb), bx = sign * bx0, by = sign * by0;
    /* the resultant from the components as the readout prints them, so its sums hold as written */
    const rx = round(round(ax) + round(bx)), ry = round(round(ay) + round(by)), r = Math.hypot(rx, ry), none = r < 0.05;
    const th = none ? 0 : angleOf(rx, ry), atn = rx !== 0 ? Math.atan(ry / rx) / RAD : 0;
    const O = { x: X(0), y: Y(0) }, P = { x: X(ax), y: Y(ay) }, Q = { x: X(ax + bx), y: Y(ay + by) };
    const lines = topline(ctx, none ? 'The two legs cancel, so the walk ends where it began and $\\kR = 0$.'
      : (sign > 0 ? '$\\mathbf{A}$ and $\\mathbf{B}$ add to' : '$\\mathbf{A} - \\mathbf{B}$ gives') + ' $\\kR = ' + f1(r) + '$ m, ' + bearing(th) + '.');
    const lab = F.labeller(ctx, H, { headline: lines });
    /* a segment joins the collision set, so a name queued after it steps off the line, not onto it */
    const block = (p, q) => { const n = Math.ceil(Math.hypot(q.x - p.x, q.y - p.y) / 14); for (let i = 1; i < n; i++) { const x = p.x + ((q.x - p.x) * i) / n, y = p.y + ((q.y - p.y) * i) / n; lab.block(x - 2, y - 2, x + 2, y + 2); } };
    frame(ctx, OX, OY, X(-REACH - 5), X(REACH + 5), Y(REACH + 5), Y(-REACH - 5));
    compass(ctx, 100, H - 90, 26); lab.block(40, H - 150, 160, H - 30);
    /* faint guides from the points of the walk to the rows and columns that carry their components */
    [[O, r3, c3], [P, r2, c2], [Q, r3, c3]].forEach(([p, row, col]) => { line(ctx, p.x, p.y, p.x, row, guide, 2, [4, 8]); line(ctx, p.x, p.y, col, p.y, guide, 2, [4, 8]); });
    /* the names of the legs and the resultant, queued first so they have the first pick of the slots */
    lab.beside(seg(O, P), away(O, P, Q), 'A', pos, 24);
    lab.beside(seg(P, Q), away(P, Q, O), nb, pos, 24);
    if (!none) lab.beside(seg(O, Q), away(O, Q, P), 'R', pos, 24);
    /* the components, the legs' dashed and the resultant's solid: a row's name goes under it through the labeller,
       a column's is set upright beside it, where nothing else lands */
    const comp = (x1, y1, x2, y2, solid, name, ux, uy, gap) => {
      if (Math.hypot(x2 - x1, y2 - y1) < 2) return;
      if (solid) arrow(ctx, x1, y1, x2, y2, pos, 4); else darrow(ctx, x1, y1, x2, y2, pos, 3);
      if (uy) { lab.add(name, (x1 + x2) / 2, (y1 + y2) / 2, ux, uy, pos, 20, gap); return; }
      ctx.save(); ctx.translate(x1 - 22, (y1 + y2) / 2); ctx.rotate(-Math.PI / 2);
      text(ctx, name, 0, 0, pos, { size: 20, weight: 600, align: 'center', bg: PAL.panel }); ctx.restore();
    };
    comp(X(0), r1, X(ax), r1, false, 'A_x = ' + m1(ax), 0, 1, 22);
    comp(X(ax), r2, Q.x, r2, false, nb + '_x = ' + m1(bx), 0, 1, 22);
    comp(X(0), r3, Q.x, r3, true, 'R_x = ' + m1(rx), 0, 1, 22);
    comp(c1, Y(0), c1, Y(ay), false, 'A_y = ' + m1(ay), -1, 0, 0);
    comp(c2, Y(ay), c2, Q.y, false, nb + '_y = ' + m1(by), -1, 0, 0);
    comp(c3, Y(0), c3, Q.y, true, 'R_y = ' + m1(ry), -1, 0, 0);
    /* B itself, as a muted ghost from the head of A, when the walk takes it the other way */
    if (sign < 0) {
      const G = { x: X(ax + bx0), y: Y(ay + by0) };
      darrow(ctx, P.x, P.y, G.x, G.y, PAL.muted, 3); lab.beside(seg(P, G), away(P, G, Q), 'B', PAL.muted, 22); block(P, G);
    }
    /* the angles, each from a horizontal through its tail and drawn under the arrows; a name goes in the widest gap
       the other directions leave inside its arc */
    const arc = (p, deg, rad, name, cuts) => {
      if (Math.abs(deg) < 0.5 || rad < 8) return;
      F.angleArc(ctx, p, rad, 0, deg * RAD, undefined, undefined, angc);
      const e = [0, deg, ...cuts.filter((c) => c * (deg - c) > 0)].sort((u, v) => u - v);
      const m = e.slice(1).map((v, i) => [v - e[i], (v + e[i]) / 2]).reduce((u, v) => (v[0] > u[0] ? v : u))[1] * RAD;
      lab.add(name, p.x + rad * Math.cos(m), p.y - rad * Math.sin(m), Math.cos(m), -Math.sin(m), angc, 20, 16);
    };
    block(O, P); block(P, Q); block(O, Q);
    const rA = Math.min(110, Math.max(30, a * S * 0.55)), rR = Math.min(60, Math.max(22, Math.min(a, r) * S * 0.3));
    if (sign > 0) arc(P, tb, Math.min(48, b * S * 0.4), 'θ_B', []);
    arc(O, ta, rA, 'θ_A', none ? [] : [th]);
    if (!none) arc(O, th, rR, 'θ', [ta]);
    arrow(ctx, O.x, O.y, P.x, P.y, pos, 4.5);
    arrow(ctx, P.x, P.y, Q.x, Q.y, pos, 4.5);
    if (Math.hypot(Q.x - O.x, Q.y - O.y) > 4) arrow(ctx, O.x, O.y, Q.x, Q.y, pos, 5.5);
    dot(ctx, O.x, O.y, PAL.ink, true, 5);
    lab.flush();
    /* the readout: the four steps with the numbers as they stand */
    const bterm = (c) => (sign > 0 ? `\\k${'B' + c}` : `(-\\k${'B' + c})`);
    let dir, small;
    if (none) dir = `\\ktheta &\\ \\text{is undefined, since}\\ \\kR = 0`;
    else if (rx === 0) dir = `\\kRx &= 0,\\ \\text{so}\\ \\ktheta = ${f1(th)}^\\circ`;
    else if (rx > 0) dir = `\\ktheta &= \\tan^{-1}(\\kRy / \\kRx) = \\tan^{-1}(${f1(ry)} / ${n1(rx)}) = ${f1(atn)}^\\circ`;
    else {
      const pm = th > atn ? '+' : '-';
      dir = `\\ktheta &= \\tan^{-1}(\\kRy / \\kRx) ${pm} 180^\\circ = ${f1(atn)}^\\circ ${pm} 180^\\circ = ${f1(th)}^\\circ`;
      small = 'With $\\kRx$ negative, $\\mathbf{R}$ points back along the line the inverse tangent gives, so 180° is added or taken away.';
    }
    readout(d.readout, `\\begin{aligned}\\kRx &= \\kAx + ${bterm('x')} = ${f1(ax)} + ${n1(bx)} = ${f1(rx)}\\ \\text{m}\\\\ \\kRy &= \\kAy + ${bterm('y')} = ${f1(ay)} + ${n1(by)} = ${f1(ry)}\\ \\text{m}\\\\ \\kR &= \\sqrt{\\kRx^2 + \\kRy^2} = \\sqrt{${n1(rx)}^2 + ${n1(ry)}^2} = ${f1(r)}\\ \\text{m}\\\\ ${dir}\\end{aligned}`, small);
  }
  register(d.fig, { update: () => {}, draw });
}
walk('sim-add', 1);
walk('sim-subtract', -1);
};
