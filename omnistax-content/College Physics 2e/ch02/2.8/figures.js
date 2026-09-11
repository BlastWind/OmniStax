/* Figures for section 2.8 Graphical Analysis of One-Dimensional Motion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, headline, vbracket, axes, nice, curve } = F;
const demo = (id, H) => F.demo(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const sgn = (v) => (v < 0 ? '−' : '+');
const neg = (s) => s.replace('-', '−');

/* a dashed drop line in the hue of the axis it drops to */
const drop = (ctx, x1, y1, x2, y2, color) => line(ctx, x1, y1, x2, y2, color, 3, [4, 8]);
/* draw inside a graph box only */
function clipped(ctx, box, f) { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); f(); ctx.restore(); }
/* the rise-and-run triangle between two points of a line: the run along the bottom, the rise up the right side */
function triangle(ctx, X, Y, p1, p2, runLabel, riseLabel, runColor, riseColor, box) {
  const x1 = X(p1[0]), x2 = X(p2[0]), y1 = Y(p1[1]), y2 = Y(p2[1]);
  clipped(ctx, box, () => { drop(ctx, x1, y1, x2, y1, runColor); drop(ctx, x2, y1, x2, y2, riseColor); });
  const inBox = (y) => Math.min(box.b - 14, Math.max(box.t + 14, y));
  text(ctx, runLabel, (x1 + x2) / 2, inBox(y1 + (y2 < y1 ? 26 : -26)), runColor, { align: 'center', weight: 600, bg: alpha(PAL.panel, 0.85) });
  const right = x2 > (box.l + box.r) / 2 && x2 + 200 > box.r;
  text(ctx, riseLabel, x2 + (right ? -16 : 16), inBox((y1 + y2) / 2), riseColor, { align: right ? 'right' : 'left', weight: 600, bg: alpha(PAL.panel, 0.85) });
}

/* =====================================================================
   FIGURE 2.44: the straight line y = mx + b. Two sliders, the slope and
   the intercept; a rise-and-run triangle between x = 1 and x = 3 and a
   bracket for the intercept on the vertical axis. Pure mathematics, all
   in ink. A still picture: no cycle, no transport.
===================================================================== */
(function () {
  const d = demo('demo-line', 520);
  const M = ctl(d.controls, { label: 'm', cls: '', min: -2, max: 3, step: 0.1, value: 1.5, unit: '', dec: 1, aria: 'slope' });
  const B = ctl(d.controls, { label: 'b', cls: '', min: -3, max: 4, step: 0.5, value: 1, unit: '', dec: 1, aria: 'intercept' });
  const box = { l: 240, r: 1160, t: 100, b: 440 };
  function draw() {
    const { ctx } = begin(d.c);
    const m = M.v, b = B.v, y = (x) => m * x + b;
    const { X, Y } = axes(ctx, box, [-1, 5], [-4, 8], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    clipped(ctx, box, () => line(ctx, X(-1), Y(y(-1)), X(5), Y(y(5)), PAL.ink, 5));
    /* the rise and the run between x = 1 and x = 3 */
    const rise = y(3) - y(1);
    triangle(ctx, X, Y, [1, y(1)], [3, y(3)], 'run = 2.0', 'rise = ' + neg(fmt(rise, 1)), PAL.ink, PAL.ink, box);
    dot(ctx, X(1), Y(y(1)), PAL.ink, true, 8); dot(ctx, X(3), Y(y(3)), PAL.ink, true, 8);
    /* the intercept, bracketed on the vertical axis */
    dot(ctx, X(0), Y(b), PAL.ink, false, 10);
    if (Math.abs(b) >= 0.5) vbracket(ctx, X(0) - 40, Y(0), Y(b), PAL.ink);
    text(ctx, 'b = ' + neg(fmt(b, 1)), X(0) - 58, Math.abs(b) >= 0.5 ? Y(b / 2) : Y(0) - 24, PAL.ink, { align: 'right', weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the equation in whichever upper corner the line leaves free */
    text(ctx, 'y = mx + b', m >= 0 ? box.l + 40 : box.r - 40, box.t + 40, PAL.ink, { align: m >= 0 ? 'left' : 'right', weight: 600, size: 24 });
    const verb = rise > 0.05 ? 'rises ' + fmt(rise, 1) : rise < -0.05 ? 'falls ' + fmt(-rise, 1) : 'is level, rising 0.0,';
    headline(ctx, 'the line ' + verb + ' for a run of 2.0, so its slope is ' + neg(fmt(m, 1)) + ', and it crosses the y-axis at ' + neg(fmt(b, 1)));
    readout(d.readout, `y = mx + b = ${neg(fmt(m, 1))}x ${sgn(b)} ${fmt(Math.abs(b), 1)}\\qquad \\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{${neg(fmt(rise, 1))}}{2.0} = ${neg(fmt(m, 1))}`,
      'The slope is the same between any two points of a straight line, so the triangle may be drawn anywhere along it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.45: the jet car's position against time at constant velocity.
   A straight line with the intercept x₀ and the slope v̄ on sliders, and
   two chosen times whose rise and run give the slope. Example 2.17's two
   points are the defaults. A still picture.
===================================================================== */
(function () {
  const d = demo('demo-jet-xt', 560);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 1000, step: 25, value: 400, unit: 'm', dec: 0, aria: 'initial position' });
  const vb = ctl(d.controls, { label: '\\kvb', cls: 'velocity', min: 50, max: 350, step: 5, value: 250, unit: 'm/s', dec: 0, aria: 'average velocity' });
  const t1 = ctl(d.controls, { label: '\\kt_{1}', cls: 'time', min: 0, max: 8, step: 0.1, value: 0.5, unit: 's', dec: 2, aria: 'first chosen time' });
  const t2 = ctl(d.controls, { label: '\\kt_{2}', cls: 'time', min: 0, max: 8, step: 0.1, value: 6.4, unit: 's', dec: 2, aria: 'second chosen time' });
  const box = { l: 170, r: 1230, t: 100, b: 470 };
  function draw() {
    const { ctx } = begin(d.c);
    const pos = (t) => x0.v + vb.v * t, xa = pos(t1.v), xb = pos(t2.v), dx = xb - xa, dt = t2.v - t1.v;
    const yr = nice(0, Math.max(2400, pos(8)), 6);
    const { X, Y } = axes(ctx, box, [0, 8], [0, yr.hi], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 8, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, X(0), Y(pos(0)), X(8), Y(pos(8)), C('position'), 5);
    /* the intercept, hollow, and the two chosen points, filled */
    dot(ctx, X(0), Y(x0.v), C('position'), false, 10);
    text(ctx, 'x₀ = ' + fmt(x0.v, 0) + ' m', X(0) - 16, Y(x0.v) - 30, C('position'), { weight: 600, size: 22, align: 'left' });
    if (Math.abs(dt) > 0.05) {
      triangle(ctx, X, Y, [t1.v, xa], [t2.v, xb], 'Δt = ' + neg(fmt(dt, 2)) + ' s', 'Δx = ' + neg(fmt(dx, 0)) + ' m', C('time'), C('position'), box);
      drop(ctx, X(t1.v), Y(xa), X(t1.v), box.b, C('time')); drop(ctx, X(t2.v), Y(xb), X(t2.v), box.b, C('time'));
    }
    for (const [t, x] of [[t1.v, xa], [t2.v, xb]]) {
      dot(ctx, X(t), Y(x), C('position'), true, 10);
      const low = t < 1.6;   /* a point near the axis is labelled under the line, clear of the intercept's label */
      text(ctx, '(' + fmt(t, 2) + ' s, ' + fmt(x, 0) + ' m)', X(t) + (low ? 16 : -14), Y(x) + (low ? 34 : -30), PAL.ink, { align: low ? 'left' : 'right', size: 20, bg: alpha(PAL.panel, 0.85) });
    }
    /* the slope named on the line */
    text(ctx, 'slope = v̄ = Δx / Δt', X(3.6), Y(pos(3.6)) - 40, C('velocity'), { align: 'right', weight: 600, size: 22, bg: alpha(PAL.panel, 0.85) });
    if (Math.abs(dt) > 0.05) {
      headline(ctx, 'between ' + fmt(t1.v, 2) + ' s and ' + fmt(t2.v, 2) + ' s the car goes from ' + fmt(xa, 0) + ' m to ' + fmt(xb, 0) + ' m, a rise of ' + neg(fmt(dx, 0)) + ' m over a run of ' + neg(fmt(dt, 2)) + ' s, so the slope is ' + fmt(vb.v, 0) + ' m/s');
      readout(d.readout, `\\kvb = \\frac{\\kdx}{\\kdt} = \\frac{${fmt(xb, 0)}\\ \\text{m} - ${fmt(xa, 0)}\\ \\text{m}}{${fmt(t2.v, 2)}\\ \\text{s} - ${fmt(t1.v, 2)}\\ \\text{s}} = ${fmt(vb.v, 0)}\\ \\text{m/s}`,
        'The intercept is x₀ = ' + fmt(x0.v, 0) + ' m, so the graph reads x = x₀ + v̄t: the position at any time is ' + fmt(x0.v, 0) + ' m plus ' + fmt(vb.v, 0) + ' m/s times the time.');
    } else {
      headline(ctx, 'the two chosen times are the same, so there is no run to divide by; choose two different points on the line');
      readout(d.readout, `\\kvb = \\frac{\\kdx}{\\kdt}`, 'Any two points on the line give the same slope, and two widely separated points give it most accurately.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.46: position, velocity and acceleration of the jet car under
   constant acceleration, on one time axis. As the clock runs a tangent
   slides along the position curve and its slope is plotted as the next
   point of the velocity graph; the slope of the velocity line is plotted
   as the acceleration. Moving: one sweep of 30 s in about 5 real
   seconds, then a hold.
===================================================================== */
(function () {
  const d = demo('demo-jet-graphs', 880);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 500, step: 10, value: 200, unit: 'm', dec: 0, onInput: reset, aria: 'initial position' });
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 60, step: 1, value: 15, unit: 'm/s', dec: 0, onInput: reset, aria: 'initial velocity' });
  const a = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0, max: 8, step: 0.1, value: 5, unit: 'm/s²', dec: 1, onInput: reset, aria: 'acceleration' });
  const T = 30;
  const cy = cycle(() => T, 1.4);
  function reset() { cy.reset(); }
  const pos = (t) => x0.v + v0.v * t + 0.5 * a.v * t * t, vel = (t) => v0.v + a.v * t;
  const L = 190, R = 1230, b1 = { l: L, r: R, t: 100, b: 330 }, b2 = { l: L, r: R, t: 400, b: 580 }, b3 = { l: L, r: R, t: 650, b: 790 };
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), xt = pos(tau), vt = vel(tau), done = tau >= T - 1e-9;
    const xr = nice(0, Math.max(500, pos(T)), 6), vr = nice(0, Math.max(20, vel(T)), 4), ar = nice(0, Math.max(6, a.v * 1.2), 3);
    const none = () => '';
    const g1 = axes(ctx, b1, [0, 35], [0, xr.hi], { yl: 'x (m)', yc: C('position'), nx: 7, ny: xr.n, fx: none, fy: (v) => fmt(v, 0) });
    const g2 = axes(ctx, b2, [0, 35], [0, vr.hi], { yl: 'v (m/s)', yc: C('velocity'), nx: 7, ny: vr.n, fx: none, fy: (v) => fmt(v, 0) });
    const g3 = axes(ctx, b3, [0, 35], [0, ar.hi], { xl: 't (s)', xc: C('time'), yl: 'a (m/s²)', yc: C('acceleration'), nx: 7, ny: ar.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* (a) the whole position curve, the tangent at the moving point P */
    curve(ctx, pos, 0, T, g1.X, g1.Y, C('position'), 5);
    clipped(ctx, b1, () => line(ctx, g1.X(tau - 6), g1.Y(xt - 6 * vt), g1.X(tau + 6), g1.Y(xt + 6 * vt), PAL.ink, 3));
    /* the clock's drop line through all three graphs */
    drop(ctx, g1.X(tau), b1.t, g1.X(tau), b3.b, C('time'));
    dot(ctx, g1.X(tau), g1.Y(xt), PAL.ink, true, 9);
    text(ctx, 'P', g1.X(tau) - 16, g1.Y(xt) - 26, PAL.ink, { align: 'right', weight: 600, size: 24 });
    text(ctx, 'slope = v = ' + fmt(vt, 0) + ' m/s', g1.X(tau) + 22, Math.max(b1.t + 20, g1.Y(xt) - 40), C('velocity'), { weight: 600, size: 20, align: tau > 24 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    /* (b) the velocity line, drawn as far as the tangents have been taken */
    if (tau > 0) line(ctx, g2.X(0), g2.Y(v0.v), g2.X(tau), g2.Y(vt), C('velocity'), 5);
    dot(ctx, g2.X(0), g2.Y(v0.v), C('velocity'), false, 9);
    dot(ctx, g2.X(tau), g2.Y(vt), C('velocity'), true, 9);
    text(ctx, 'v₀ = ' + fmt(v0.v, 0) + ' m/s', g2.X(0) + 18, g2.Y(v0.v) + 28, C('velocity'), { weight: 600, size: 20 });
    if (tau > 8) text(ctx, 'slope = a', g2.X(tau / 2), g2.Y(vel(tau / 2)) + 34, C('acceleration'), { weight: 600, size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* (c) the acceleration, level, drawn as far as the velocity line has been plotted */
    if (tau > 0) line(ctx, g3.X(0), g3.Y(a.v), g3.X(tau), g3.Y(a.v), C('acceleration'), 5);
    dot(ctx, g3.X(tau), g3.Y(a.v), C('acceleration'), true, 9);
    text(ctx, 'a = ' + fmt(a.v, 1) + ' m/s²', g3.X(tau) + 22, g3.Y(a.v) + 28, C('acceleration'), { weight: 600, size: 20, align: tau > 24 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    headline(ctx, done ? 'the slopes of the position curve make the velocity line, and its slope, ' + fmt(a.v, 1) + ' m/s², is the acceleration'
      : 't = ' + fmt(tau, 1) + ' s · the tangent at P has slope ' + fmt(vt, 0) + ' m/s, which is plotted below as the velocity; the velocity line has slope ' + fmt(a.v, 1) + ' m/s²');
    readout(d.readout, `\\kv = \\kvo + \\ka\\kt = ${fmt(v0.v, 0)} + (${fmt(a.v, 1)})(${fmt(tau, 1)}) = ${fmt(vt, 0)}\\ \\text{m/s}`,
      'The velocity line is straight because its slope, the acceleration, is the same at every point, and the position curve bends because its slope keeps growing.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 2.48: the tangent at Q. The position curve of Example 2.18 with
   the book's table beside it; the point Q and the two endpoints of its
   tangent are on sliders, and the slope is read between the endpoints.
   A still picture.
===================================================================== */
(function () {
  const d = demo('demo-tangent', 620);
  const tQ = ctl(d.controls, { label: '\\kt_{Q}', cls: 'time', min: 2, max: 30, step: 0.5, value: 25, unit: 's', dec: 1, aria: 'time of the point Q' });
  const t1 = ctl(d.controls, { label: '\\kt_{1}', cls: 'time', min: 0, max: 30, step: 0.5, value: 19, unit: 's', dec: 1, aria: 'first endpoint of the tangent' });
  const t2 = ctl(d.controls, { label: '\\kt_{2}', cls: 'time', min: 2, max: 35, step: 0.5, value: 32, unit: 's', dec: 1, aria: 'second endpoint of the tangent' });
  const pos = (t) => 200 + 15 * t + 2.5 * t * t, vel = (t) => 15 + 5 * t;
  const box = { l: 170, r: 990, t: 100, b: 520 };
  const TABLE = [0, 5, 10, 15, 20, 25, 30];
  function draw() {
    const { ctx } = begin(d.c);
    const xQ = pos(tQ.v), vQ = vel(tQ.v), x1 = xQ + vQ * (t1.v - tQ.v), x2 = xQ + vQ * (t2.v - tQ.v), dt = t2.v - t1.v, dx = x2 - x1;
    const { X, Y } = axes(ctx, box, [0, 35], [0, 3500], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 7, ny: 7, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, pos, 0, 30, X, Y, C('position'), 5);
    for (const t of TABLE) dot(ctx, X(t), Y(pos(t)), C('position'), true, 5);
    /* the tangent, drawn a little past its endpoints, and the endpoints themselves */
    const lo = Math.min(t1.v, t2.v) - 1.5, hi = Math.max(t1.v, t2.v) + 1.5;
    clipped(ctx, box, () => line(ctx, X(lo), Y(xQ + vQ * (lo - tQ.v)), X(hi), Y(xQ + vQ * (hi - tQ.v)), PAL.ink, 3));
    if (Math.abs(dt) > 0.05) triangle(ctx, X, Y, [t1.v, x1], [t2.v, x2], 'Δt = ' + neg(fmt(dt, 1)) + ' s', 'Δx = ' + neg(fmt(dx, 0)) + ' m', C('time'), C('position'), box);
    clipped(ctx, box, () => { dot(ctx, X(t1.v), Y(x1), PAL.ink, false, 8); dot(ctx, X(t2.v), Y(x2), PAL.ink, false, 8); });
    dot(ctx, X(tQ.v), Y(xQ), PAL.ink, true, 10);
    text(ctx, 'Q', X(tQ.v) - 18, Y(xQ) - 26, PAL.ink, { align: 'right', weight: 600, size: 24 });
    text(ctx, 'slope = v', box.l + 40, box.t + 40, C('velocity'), { weight: 600, size: 22 });
    /* the book's table of positions, the row at Q's time in ink when Q sits on one */
    const tx = 1090, ty = 150;
    text(ctx, 't (s)', tx, ty, C('time'), { align: 'right', weight: 600, size: 20 }); text(ctx, 'x (m)', tx + 150, ty, C('position'), { align: 'right', weight: 600, size: 20 });
    line(ctx, tx - 70, ty + 20, tx + 160, ty + 20, PAL.rule, 2); line(ctx, tx + 24, ty - 16, tx + 24, ty + 30 + 40 * TABLE.length, PAL.rule, 2);
    TABLE.forEach((t, i) => {
      const on = Math.abs(t - tQ.v) < 1e-9, y = ty + 50 + 40 * i;
      text(ctx, fmt(t, 0), tx, y, on ? PAL.ink : PAL.muted, { align: 'right', weight: on ? 600 : 400, size: 20 });
      text(ctx, fmt(pos(t), 0), tx + 150, y, on ? PAL.ink : PAL.muted, { align: 'right', weight: on ? 600 : 400, size: 20 });
    });
    if (Math.abs(dt) > 0.05) {
      headline(ctx, 'the tangent at Q runs from (' + fmt(t1.v, 1) + ' s, ' + fmt(x1, 0) + ' m) to (' + fmt(t2.v, 1) + ' s, ' + fmt(x2, 0) + ' m), so its slope, the velocity at ' + fmt(tQ.v, 1) + ' s, is ' + fmt(vQ, 0) + ' m/s');
      readout(d.readout, `\\kv_{Q} = \\frac{\\kdx_{Q}}{\\kdt_{Q}} = \\frac{${fmt(x2, 0)}\\ \\text{m} - ${fmt(x1, 0)}\\ \\text{m}}{${fmt(t2.v, 1)}\\ \\text{s} - ${fmt(t1.v, 1)}\\ \\text{s}} = ${fmt(vQ, 0)}\\ \\text{m/s}`,
        'Sliding the endpoints along the tangent leaves the slope unchanged, and a wider interval makes any error in reading the graph proportionally smaller.');
    } else {
      headline(ctx, 'the two endpoints of the tangent are the same point, so there is no run to divide by; move them apart along the tangent');
      readout(d.readout, `\\kv_{Q} = \\frac{\\kdx_{Q}}{\\kdt_{Q}}`, 'The velocity at Q is the slope of the tangent there, ' + fmt(vQ, 0) + ' m/s, however the endpoints are chosen.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.49: the jet car reaching its top velocity. The velocity
   levels out at 250 m/s while the acceleration below falls to zero; a
   tangent at the chosen time is read between two endpoints, as in
   Example 2.19. The acceleration is modelled as straight pieces through
   (0, 5.0), (10, 3.0), (25, 1.0) and (55, 0) m/s², which reproduces the
   book's velocities and the example's endpoints. A still picture.
===================================================================== */
(function () {
  const d = demo('demo-jet-top', 800);
  const tQ = ctl(d.controls, { label: '\\kt_{Q}', cls: 'time', min: 0, max: 60, step: 0.5, value: 25, unit: 's', dec: 1, aria: 'chosen time' });
  const t1 = ctl(d.controls, { label: '\\kt_{1}', cls: 'time', min: 0, max: 60, step: 0.5, value: 1, unit: 's', dec: 1, aria: 'first endpoint of the tangent' });
  const t2 = ctl(d.controls, { label: '\\kt_{2}', cls: 'time', min: 0, max: 70, step: 0.5, value: 51, unit: 's', dec: 1, aria: 'second endpoint of the tangent' });
  const A = [[0, 5], [10, 3], [25, 1], [55, 0]];
  function acc(t) {
    if (t >= 55) return 0;
    for (let i = 0; i < A.length - 1; i++) { const [ta, aa] = A[i], [tb, ab] = A[i + 1]; if (t <= tb) return aa + ((ab - aa) * (t - ta)) / (tb - ta); }
    return 0;
  }
  function vel(t) {
    let v = 165;
    for (let i = 0; i < A.length - 1; i++) {
      const [ta, aa] = A[i], [tb, ab] = A[i + 1]; if (t <= ta) break;
      const s = Math.min(t, tb) - ta; v += aa * s + (0.5 * (ab - aa) * s * s) / (tb - ta);
    }
    return v;
  }
  const L = 190, R = 1230, b1 = { l: L, r: R, t: 100, b: 430 }, b2 = { l: L, r: R, t: 500, b: 700 };
  function draw() {
    const { ctx } = begin(d.c);
    const vQ = vel(tQ.v), aQ = acc(tQ.v), v1 = vQ + aQ * (t1.v - tQ.v), v2 = vQ + aQ * (t2.v - tQ.v), dt = t2.v - t1.v, dv = v2 - v1;
    const g1 = axes(ctx, b1, [0, 70], [160, 260], { yl: 'v (m/s)', yc: C('velocity'), nx: 7, ny: 5, fx: () => '', fy: (v) => fmt(v, 0) });
    const g2 = axes(ctx, b2, [0, 70], [-1, 6], { xl: 't (s)', xc: C('time'), yl: 'a (m/s²)', yc: C('acceleration'), nx: 7, ny: 7, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* (a) the velocity curve and the tangent at the chosen time */
    curve(ctx, vel, 0, 70, g1.X, g1.Y, C('velocity'), 5, 140);
    const lo = Math.min(t1.v, t2.v) - 2, hi = Math.max(t1.v, t2.v) + 2;
    clipped(ctx, b1, () => line(ctx, g1.X(lo), g1.Y(vQ + aQ * (lo - tQ.v)), g1.X(hi), g1.Y(vQ + aQ * (hi - tQ.v)), PAL.ink, 3));
    if (Math.abs(dt) > 0.05) triangle(ctx, g1.X, g1.Y, [t1.v, v1], [t2.v, v2], 'Δt = ' + neg(fmt(dt, 1)) + ' s', 'Δv = ' + neg(fmt(dv, 0)) + ' m/s', C('time'), C('velocity'), b1);
    clipped(ctx, b1, () => { dot(ctx, g1.X(t1.v), g1.Y(v1), PAL.ink, false, 8); dot(ctx, g1.X(t2.v), g1.Y(v2), PAL.ink, false, 8); });
    drop(ctx, g1.X(tQ.v), b1.t, g1.X(tQ.v), b2.b, C('time'));
    dot(ctx, g1.X(tQ.v), g1.Y(vQ), PAL.ink, true, 10);
    text(ctx, 'v = ' + fmt(vQ, 0) + ' m/s at ' + fmt(tQ.v, 1) + ' s', g1.X(tQ.v) + (tQ.v > 45 ? -20 : 20), g1.Y(vQ) + 34, C('velocity'), { weight: 600, size: 20, align: tQ.v > 45 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'slope = a', b1.r - 30, b1.b - 34, C('acceleration'), { align: 'right', weight: 600, size: 22 });
    /* (b) the acceleration, falling to zero at 55 s */
    curve(ctx, acc, 0, 70, g2.X, g2.Y, C('acceleration'), 5, 140);
    dot(ctx, g2.X(tQ.v), g2.Y(aQ), C('acceleration'), true, 9);
    text(ctx, 'a = ' + fmt(aQ, 1) + ' m/s²', g2.X(tQ.v) + (tQ.v > 45 ? -20 : 20), g2.Y(aQ) - 28, C('acceleration'), { weight: 600, size: 20, align: tQ.v > 45 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    if (tQ.v >= 55) {
      headline(ctx, 'at ' + fmt(tQ.v, 1) + ' s the velocity has levelled out at 250 m/s: the tangent is horizontal and the acceleration is zero');
      readout(d.readout, `\\ka = \\frac{\\kdv}{\\kdt} = \\frac{0\\ \\text{m/s}}{${fmt(Math.abs(dt), 1)}\\ \\text{s}} = 0\\ \\text{m/s}^2`,
        'After 55 s the velocity is constant, so a graph of velocity against time is level and its slope, the acceleration, is zero.');
    } else if (Math.abs(dt) > 0.05) {
      headline(ctx, 'the tangent at ' + fmt(tQ.v, 1) + ' s runs from (' + fmt(t1.v, 1) + ' s, ' + fmt(v1, 0) + ' m/s) to (' + fmt(t2.v, 1) + ' s, ' + fmt(v2, 0) + ' m/s), so the acceleration at ' + fmt(tQ.v, 1) + ' s is ' + fmt(aQ, 1) + ' m/s²');
      readout(d.readout, `\\ka = \\frac{\\kdv}{\\kdt} = \\frac{${fmt(v2, 0)}\\ \\text{m/s} - ${fmt(v1, 0)}\\ \\text{m/s}}{${fmt(t2.v, 1)}\\ \\text{s} - ${fmt(t1.v, 1)}\\ \\text{s}} = ${fmt(aQ, 1)}\\ \\text{m/s}^2`,
        'Between 0 and 55 s the acceleration keeps falling, so the tangent keeps flattening, and after 55 s the velocity is constant at 250 m/s.');
    } else {
      headline(ctx, 'the two endpoints of the tangent are the same point, so there is no run to divide by; move them apart along the tangent');
      readout(d.readout, `\\ka = \\frac{\\kdv}{\\kdt}`, 'The acceleration at ' + fmt(tQ.v, 1) + ' s is the slope of the tangent there, ' + fmt(aQ, 1) + ' m/s², however the endpoints are chosen.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
