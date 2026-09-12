/* Figures for section 6.1 Rotation Angle and Angular Velocity. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI, DEG = 180 / Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* Angles are measured counterclockwise from the right, as the book draws them,
   so a point at angle u sits at (cx + r cos u, cy − r sin u). */
const at = (cx, cy, r, u) => [cx + r * Math.cos(u), cy - r * Math.sin(u)];
/* An arc of a circle from u0 to u1, which is the path a point has already swept. */
function arcAt(ctx, cx, cy, r, u0, u1, color, w) {
  const n = Math.max(8, Math.ceil(Math.abs(u1 - u0) * 24));
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const [x, y] = at(cx, cy, r, u0 + ((u1 - u0) * i) / n); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
  ctx.stroke(); ctx.restore();
}
/* A curved arrow over the top of a circle, turning the way the object turns. */
function curl(ctx, cx, cy, r, color, ccw) {
  const u0 = ccw ? Math.PI * 0.28 : Math.PI * 0.72, u1 = ccw ? Math.PI * 0.72 : Math.PI * 0.28;
  arcAt(ctx, cx, cy, r, u0, u1, color, 3);
  arrow(ctx, ...at(cx, cy, r, u1 - (u1 - u0) * 0.1), ...at(cx, cy, r, u1), color, 3);
}
/* A fly: a body and two wings, small enough to ride on a record's rim. */
function fly(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.ellipse(x, y, 11, 7, 0, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x - 4, y - 11, 9, 4, -0.6, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x + 4, y - 11, 9, 4, 0.6, 0, TAU); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 6.3 + 6.4: the turning disc. One radius sweeps the rotation
   angle while two pits at different radii paint their own arcs, and the
   arcs are unrolled into bars beside the disc, banded in radius lengths
   so that the same angle can be counted off either of them.
===================================================================== */
(function () {
  const d = sim('sim-rotation-angle', 760);
  const rOut = ctl(d.controls, { label: '\\kr', cls: 'position', min: 2, max: 6, step: 0.1, value: 6, unit: 'cm', dec: 1, onInput: reset, aria: 'radius of curvature of the outer pit' });
  const rIn = ctl(d.controls, { label: 'r_1', cls: 'position', min: 1, max: 5, step: 0.1, value: 3, unit: 'cm', dec: 1, onInput: reset, aria: 'radius of the inner pit' });
  const cy = cycle(() => 1, 1.1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const turn = REDUCED ? 1 : cy.now(), th = TAU * turn;
    const R = rOut.v, r1 = Math.max(0.5, Math.min(rIn.v, R - 0.5));
    const PX = 40, cx = 400, cyc = 430, sOut = R * th, sIn = r1 * th;
    /* the disc */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(cx, cyc, PX * R, 0, TAU); ctx.fill();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    dot(ctx, cx, cyc, PAL.muted, true, 6); text(ctx, 'O', cx - 24, cyc + 22, PAL.muted, { size: 18 });
    curl(ctx, cx, cyc, PX * R + 32, PAL.muted, true);
    /* where the pits started, and the radius they ride on now */
    line(ctx, cx, cyc, ...at(cx, cyc, PX * R, 0), PAL.muted, 3, [10, 10]);
    line(ctx, cx, cyc, ...at(cx, cyc, PX * R, th), C('position'), 4);
    arcAt(ctx, cx, cyc, PX * R, 0, th, C('position'), 7);
    arcAt(ctx, cx, cyc, PX * r1, 0, th, alpha(C('position'), 0.55), 7);
    /* the angle at the center */
    const aR = 74; arcAt(ctx, cx, cyc, aR, 0, th, PAL.ink, 2.5);
    text(ctx, 'Δθ', ...at(cx, cyc, aR + 28, th / 2), PAL.ink, { weight: 600, align: 'center' });
    dot(ctx, ...at(cx, cyc, PX * R, 0), C('position'), false, 9);
    dot(ctx, ...at(cx, cyc, PX * r1, 0), C('position'), false, 9);
    dot(ctx, ...at(cx, cyc, PX * R, th), PAL.ink, true, 11);
    dot(ctx, ...at(cx, cyc, PX * r1, th), PAL.ink, true, 10);
    const [o2x, o2y] = at(cx, cyc, PX * R, th), [o1x, o1y] = at(cx, cyc, PX * r1, th);
    text(ctx, '2', o2x + 20, o2y - 20, PAL.ink, { size: 18, weight: 600, align: 'center' });
    text(ctx, '1', o1x + 20, o1y - 20, PAL.ink, { size: 18, weight: 600, align: 'center' });
    /* the two arcs unrolled, banded in radius lengths */
    const bx = 800, BW = 520 / (TAU * 6);
    for (const [s, rad, lab, by] of [[sOut, R, 'pit 2, at r = ' + fmt(R, 1) + ' cm', 310], [sIn, r1, 'pit 1, at r = ' + fmt(r1, 1) + ' cm', 500]]) {
      line(ctx, bx, by, bx + BW * TAU * rad, by, PAL.rule, 2);
      const seg = BW * rad, full = BW * s;
      for (let j = 0; j * seg < full - 1e-6; j++) {
        const a = j * seg, b = Math.min((j + 1) * seg, full);
        line(ctx, bx + a, by, bx + b, by, j % 2 ? alpha(C('position'), 0.45) : C('position'), 14);
      }
      text(ctx, lab, bx, by - 40, PAL.ink, { size: 19, weight: 600 });
      text(ctx, 'Δs = ' + fmt(s, 1) + ' cm', bx, by + 40, C('position'), { size: 19, weight: 600 });
    }
    for (const [i, ln] of ['Each band is one radius long, so the', 'number of bands is the rotation angle', 'in radians, the same on both bars.'].entries()) text(ctx, ln, bx, 600 + 26 * i, PAL.muted, { size: 17 });
    headline(ctx, 'Δθ = ' + fmt(th, 2) + ' rad = ' + fmt(th * DEG, 0) + '°: the outer pit has run ' + fmt(sOut, 1) + ' cm and the inner pit ' + fmt(sIn, 1) + ' cm');
    readout(d.readout, `\\Delta\\theta = \\frac{\\kds}{\\kr} = \\frac{${fmt(sOut, 1)}\\ \\text{cm}}{${fmt(R, 1)}\\ \\text{cm}} = \\frac{${fmt(sIn, 1)}\\ \\text{cm}}{${fmt(r1, 1)}\\ \\text{cm}} = ${fmt(th, 2)}\\ \\text{rad}`,
      'An arc as long as the radius subtends one radian, and the whole circumference subtends 2π rad, which is one revolution. The disc has turned through ' + fmt(turn, 2) + ' of a revolution, or ' + fmt(th * DEG, 0) + '°.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.2), draw });
})();

/* =====================================================================
   SIM: the angular velocity as a rate. A wheel turns at a set angular
   velocity while a clock runs, and the rotation angle is plotted
   against the time: a straight line whose slope is the angular
   velocity, so the same ratio is read off any interval of the run.
===================================================================== */
(function () {
  const d = sim('sim-omega', 660);
  const om = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0.5, max: 12, step: 0.1, value: 4, unit: 'rad/s', dec: 1, onInput: reset, aria: 'angular velocity' });
  const N = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 4, step: 1, value: 2, unit: 'rev', dec: 0, onInput: reset, aria: 'revolutions to run' });
  const total = () => (TAU * N.v) / om.v;
  const cy = cycle(total, 1.1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const T = total(), t = REDUCED ? T : cy.now(), th = om.v * t;
    const cx = 300, cyc = 350, RW = 165;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(cx, cyc, RW, 0, TAU); ctx.stroke(); ctx.restore();
    for (let k = 1; k < 6; k++) line(ctx, cx, cyc, ...at(cx, cyc, RW, th + (k * TAU) / 6), PAL.rule, 3);
    line(ctx, cx, cyc, ...at(cx, cyc, RW, 0), PAL.muted, 3, [10, 10]);
    line(ctx, cx, cyc, ...at(cx, cyc, RW, th), C('angular-rate'), 5);
    dot(ctx, cx, cyc, PAL.muted, true, 8);
    dot(ctx, ...at(cx, cyc, RW, th), PAL.ink, true, 11);
    const rest = th - Math.floor(th / TAU) * TAU, aR = 62;
    arcAt(ctx, cx, cyc, aR, 0, rest, PAL.ink, 2.5);
    text(ctx, 'Δθ', ...at(cx, cyc, aR + 28, rest / 2), PAL.ink, { weight: 600, align: 'center' });
    curl(ctx, cx, cyc, RW + 30, C('angular-rate'), true);
    text(ctx, 'ω', cx, cyc - RW - 58, C('angular-rate'), { weight: 600, align: 'center' });
    text(ctx, 'Δt = ' + fmt(t, 2) + ' s', cx, cyc + RW + 54, C('time'), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'Δθ = ' + fmt(th, 2) + ' rad', cx, cyc + RW + 92, PAL.ink, { size: 24, weight: 600, align: 'center' });
    /* the angle against the time */
    const xs = nice(0, T, 4), ys = nice(0, TAU * N.v, 4), box = { l: 760, r: 1330, t: 150, b: 500 };
    const { X, Y } = axes(ctx, box, [0, xs.hi], [0, ys.hi], { xl: 'Δt (s)', xc: C('time'), yl: 'Δθ (rad)', yc: PAL.ink, nx: xs.n, ny: ys.n, fx: (q) => fmt(q, 2), fy: (q) => fmt(q, 1) });
    for (let k = 1; k <= N.v; k++) {
      line(ctx, box.l, Y(TAU * k), box.r, Y(TAU * k), alpha(PAL.muted, 0.45), 1.5, [6, 8]);
      text(ctx, k === 1 ? '1 revolution' : k + ' revolutions', box.r - 8, Y(TAU * k) - 17, PAL.muted, { size: 16, align: 'right' });
    }
    curve(ctx, (s) => om.v * s, 0, T, X, Y, C('angular-rate'), 5, 2);
    line(ctx, X(t), box.b, X(t), Y(th), PAL.muted, 2, [4, 8]);
    line(ctx, box.l, Y(th), X(t), Y(th), PAL.muted, 2, [4, 8]);
    dot(ctx, X(t), Y(th), PAL.ink, true, 10);
    text(ctx, 'the slope is ω = ' + fmt(om.v, 1) + ' rad/s', X(T * 0.52), Y(om.v * T * 0.52) - 30, C('angular-rate'), { size: 19, weight: 600, align: 'right' });
    headline(ctx, 'Δt = ' + fmt(t, 2) + ' s: the wheel has turned through Δθ = ' + fmt(th, 2) + ' rad, and Δθ/Δt is ' + fmt(om.v, 2) + ' rad/s throughout');
    readout(d.readout, `\\kw = \\frac{\\Delta\\theta}{\\kdt} = \\frac{${fmt(th, 2)}\\ \\text{rad}}{${fmt(t, 2)}\\ \\text{s}} = ${fmt(om.v, 2)}\\ \\text{rad/s}`,
      'One complete revolution is 2π = 6.28 rad, so at this angular velocity the wheel goes round once every ' + fmt(TAU / om.v, 2) + ' s and takes ' + fmt(T, 2) + ' s over the ' + fmt(N.v, 0) + ' revolutions of the run.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();

/* =====================================================================
   FIGURE 6.5: the car tire. The wheel rolls through one revolution, so
   the tread lays down an arc length equal to the distance the car
   covers, and the curve below reads the angular velocity off the tire
   radius at the speed the car is driven at.
===================================================================== */
(function () {
  const d = sim('sim-tire', 850);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 2, max: 30, step: 0.5, value: 15, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the car' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.2, max: 1.4, step: 0.02, value: 0.3, unit: 'm', dec: 2, onInput: reset, aria: 'tire radius' });
  const total = () => (TAU * r.v) / v.v;
  const cy = cycle(total, 1.1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const T = total(), t = REDUCED ? T : cy.now(), om = v.v / r.v, th = om * t;
    const RW = 70 + 45 * (r.v / 1.4), roadY = 340, x0 = 700 - RW * Math.PI, cx = x0 + RW * th, wy = roadY - RW;
    fixed(ctx, 110, roadY, 1220, 26);
    /* the wheel, its marked spoke, and the tread that has met the road */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(cx, wy, RW, 0, TAU); ctx.stroke(); ctx.restore();
    arcAt(ctx, cx, wy, RW - 6, -Math.PI / 2 - th, -Math.PI / 2, alpha(C('position'), 0.7), 8);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, wy - RW * 0.22, RW * 1.2, Math.PI, TAU); ctx.stroke(); ctx.restore();
    for (let k = 1; k < 5; k++) line(ctx, cx, wy, ...at(cx, wy, RW - 8, -th + (k * TAU) / 5), PAL.rule, 3);
    line(ctx, cx, wy, ...at(cx, wy, RW - 8, -th), C('position'), 5);
    text(ctx, 'r', ...at(cx, wy, (RW - 8) * 0.55, -th), C('position'), { weight: 600, align: 'center' });
    dot(ctx, cx, wy, PAL.ink, true, 9);
    const LV = 60 + 3 * v.v, vx = cx + RW + 18;
    arrow(ctx, vx, wy, vx + LV, wy, C('velocity'), 5);
    text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', vx + LV / 2, wy - 28, C('velocity'), { weight: 600, align: 'center' });
    curl(ctx, cx, wy, RW + 20, C('angular-rate'), false);
    text(ctx, 'ω', cx, wy - RW - 48, C('angular-rate'), { weight: 600, align: 'center' });
    /* how far the car has come, and how far one revolution carries it */
    const full = x0 + RW * TAU;
    hbracket(ctx, x0, Math.max(x0 + 1, cx), roadY + 70, C('position'), 'Δs = ' + fmt(r.v * th, 2) + ' m');
    hbracket(ctx, x0, full, roadY + 132, PAL.muted, 'one revolution carries the car 2πr = ' + fmt(TAU * r.v, 2) + ' m');
    /* the angular velocity across the range of tire sizes, at this speed */
    const ys = nice(0, v.v / 0.2, 4), box = { l: 210, r: 1300, t: 570, b: 770 };
    const { X, Y } = axes(ctx, box, [0.2, 1.4], [0, ys.hi], { xl: 'r (m)', xc: C('position'), yl: 'ω (rad/s)', yc: C('angular-rate'), nx: 6, ny: ys.n, fx: (q) => fmt(q, 1), fy: (q) => fmt(q, 0) });
    curve(ctx, (q) => v.v / q, 0.2, 1.4, X, Y, C('angular-rate'), 5, 120);
    dot(ctx, X(1.2), Y(v.v / 1.2), PAL.muted, true, 9);
    text(ctx, 'an earth mover, ' + fmt(v.v / 1.2, 1) + ' rad/s', X(1.2) - 16, Y(v.v / 1.2) - 26, PAL.muted, { size: 17, align: 'right' });
    dot(ctx, X(r.v), Y(om), PAL.ink, true, 11);
    text(ctx, 'this tire, ' + fmt(om, 1) + ' rad/s', Math.min(X(r.v) + 18, box.r - 210), Y(om) - 26, PAL.ink, { size: 17 });
    headline(ctx, 't = ' + fmt(t, 3) + ' s: the tire has turned ' + fmt(th, 2) + ' rad and the car has gone ' + fmt(r.v * th, 2) + ' m');
    readout(d.readout, `\\kw = \\frac{\\kv}{\\kr} = \\frac{${fmt(v.v, 1)}\\ \\text{m/s}}{${fmt(r.v, 3)}\\ \\text{m}} = ${fmt(om, 1)}\\ \\text{rad/s}`,
      'An earth mover with tires 1.20 m in radius, moving at the same ' + fmt(v.v, 1) + ' m/s, would turn them at only ' + fmt(v.v / 1.2, 1) + ' rad/s, because the same speed is spread round a longer rim.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();

/* =====================================================================
   FIGURE 6.6: the fly on the record. The record turns clockwise and the
   velocity of each fly is drawn where it stands, always along the
   tangent, while both flies share the one angular velocity.
===================================================================== */
(function () {
  const d = sim('sim-record', 860);
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.05, max: 0.16, step: 0.002, value: 0.152, unit: 'm', dec: 3, onInput: reset, aria: 'radius of the record' });
  const om = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 1, max: 8, step: 0.1, value: 3.5, unit: 'rad/s', dec: 1, onInput: reset, aria: 'angular velocity' });
  const total = () => TAU / om.v;
  const cy = cycle(total, 0.9);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const T = total(), t = REDUCED ? T * 0.3 : cy.now(), u = -om.v * t;
    const cx = 700, cyc = 460, RR = 1700 * r.v, sp = r.v * om.v;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(cx, cyc, RR, 0, TAU); ctx.fill();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    for (let k = 1; k <= 3; k++) { ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cyc, RR * (0.48 + 0.14 * k), 0, TAU); ctx.stroke(); ctx.restore(); }
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cyc, RR * 0.33, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    dot(ctx, cx, cyc, PAL.muted, true, 6);
    curl(ctx, cx, cyc, RR + 20, C('angular-rate'), false);
    text(ctx, 'ω', ...at(cx, cyc, RR + 48, Math.PI * 0.22), C('angular-rate'), { weight: 600, align: 'center' });
    line(ctx, ...at(cx, cyc, RR, u + Math.PI), ...at(cx, cyc, RR, u), PAL.muted, 2, [10, 10]);
    line(ctx, cx, cyc, ...at(cx, cyc, RR, u), C('position'), 4);
    text(ctx, 'r = ' + fmt(r.v, 3) + ' m', ...at(cx, cyc, RR * 0.55, u), C('position'), { size: 19, weight: 600, align: 'center', bg: PAL.bg });
    const L = 90 + 120 * (sp / 1.28);
    for (const s of [0, Math.PI]) {
      const a = u + s, [px, py] = at(cx, cyc, RR, a);
      arrow(ctx, px, py, px + L * Math.sin(a), py + L * Math.cos(a), C('velocity'), 5);
      text(ctx, 'v = ' + fmt(sp, 2) + ' m/s', px + (L + 22) * Math.sin(a), py + (L + 22) * Math.cos(a), C('velocity'), { size: 19, weight: 600, align: 'center', bg: PAL.bg });
      fly(ctx, px, py, PAL.ink);
    }
    headline(ctx, 'The record turns clockwise at ω = ' + fmt(om.v, 2) + ' rad/s, so each fly moves at v = rω = ' + fmt(sp, 2) + ' m/s');
    readout(d.readout, `\\kv = \\kr\\kw = (${fmt(r.v, 3)}\\ \\text{m})(${fmt(om.v, 2)}\\ \\text{rad/s}) = ${fmt(sp, 2)}\\ \\text{m/s}`,
      'The two flies share the one angular velocity of the record and move at the same speed, but their velocities point opposite ways at every instant, since each is tangent to the circle where its fly is standing. The record goes round once every ' + fmt(T, 2) + ' s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();
};
