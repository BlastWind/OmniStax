/* Figures for section 2.5. Boots against a root element (the section's text article). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, LW, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, scale, axes, nice, curve, person, car, plane, topline, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a dragster, its nose to the right: a long low body with the engine and the wing behind the driver,
   two big slick tyres at the back and two small wheels at the front, about 130 units long */
function dragster(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(-62, 8); ctx.lineTo(-62, -14); ctx.lineTo(-40, -22); ctx.lineTo(-16, -22); ctx.lineTo(-6, -10); ctx.lineTo(50, -6); ctx.lineTo(68, 0); ctx.lineTo(68, 8); ctx.closePath(); ctx.fill();
  ctx.fillRect(-70, -40, 26, 5); ctx.fillRect(-52, -36, 4, 14);           /* the wing on its strut */
  ctx.beginPath(); ctx.arc(-40, 8, 16, 0, Math.PI * 2); ctx.fill();       /* the rear slick */
  ctx.beginPath(); ctx.arc(52, 12, 7, 0, Math.PI * 2); ctx.fill();         /* the front wheel */
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(-40, 8, 6, 0, Math.PI * 2); ctx.arc(52, 12, 2.5, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(-14, -22); ctx.lineTo(-8, -30); ctx.lineTo(-2, -22); ctx.closePath(); ctx.fill();   /* the driver's helmet */
  ctx.restore();
}

/* =====================================================================
   SIM 1: notation. A number line, two positions, one stopwatch.
===================================================================== */
(function () {
  const d = sim('sim-notation', 460);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 100, step: 1, value: 20, unit: 'm', dec: 0, onInput: reset });
  const x = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0, max: 100, step: 1, value: 80, unit: 'm', dec: 0, onInput: reset });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 60, step: 0.5, value: 12, unit: 's', dec: 1, onInput: reset });
  const cy = cycle(() => t.v, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx, W, H } = begin(d.c);
    const tau = cy.now(), dx = x.v - x0.v, f = tau / t.v;
    const L = 90, R = 1040, y = 300; const X = (m) => L + (R - L) * m / 100;
    line(ctx, L, y, R, y, PAL.muted, 3); scale(ctx, X, 0, 100, 10, y, '', 2);
    if (Math.abs(dx) >= 2) hbracket(ctx, X(x0.v), X(x.v), y - 92, C('position'), 'Δx = ' + dx + ' m');
    // the object in transit
    const xm = x0.v + dx * f; line(ctx, X(x0.v), y - 40, X(xm), y - 40, C('position'), 3, [6, 8]);
    dot(ctx, X(x0.v), y, C('position'), false, 11); dot(ctx, X(x.v), y, C('position'), true, 11);
    dot(ctx, X(xm), y - 40, PAL.ink, true, 8);
    text(ctx, 'the object', X(xm), y - 68, PAL.muted, { align: 'center', size: 17 });
    text(ctx, 'x₀', X(x0.v), y + 60, C('position'), { align: 'center', weight: 600, size: 24 });
    text(ctx, 'x', X(x.v), y + 60, C('position'), { align: 'center', weight: 600, size: 24 });
    // stopwatch
    const cx = 1230, cyy = 250, r = 96;
    ctx.save(); ctx.lineWidth = 4; ctx.strokeStyle = C('time'); ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(cx, cyy, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = C('time'); ctx.fillRect(cx - 10, cyy - r - 18, 20, 12);
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; line(ctx, cx + (r - 8) * Math.sin(a), cyy - (r - 8) * Math.cos(a), cx + (r - 18) * Math.sin(a), cyy - (r - 18) * Math.cos(a), PAL.muted, 2.5); }
    const ang = f * Math.PI * 2;
    ctx.strokeStyle = C('time'); ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(cx, cyy, r - 30, -Math.PI / 2, -Math.PI / 2 + ang); ctx.stroke();
    line(ctx, cx, cyy, cx + (r - 26) * Math.sin(ang), cyy - (r - 26) * Math.cos(ang), C('time'), 4); dot(ctx, cx, cyy, C('time'), true, 5); ctx.restore();
    text(ctx, 't = ' + fmt(tau, 1) + ' s', cx, cyy + r + 34, C('time'), { align: 'center', weight: 600, size: 24 });
    text(ctx, 't₀ = 0', cx, cyy + r + 64, PAL.muted, { align: 'center', size: 17 });
    headline(ctx, 'The clock starts at zero when the object is at x₀, and after ' + fmt(t.v, 1) + ' s the object is at x.');
    tex(d.readout, `\\kdt = \\kt = ${fmt(t.v, 1)}\\ \\text{s}\\qquad \\kdx = \\kx - \\kxo = ${x.v} - ${x0.v} = ${dx}\\ \\text{m}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => t.v / 4), draw });
})();

/* =====================================================================
   SIM 2: average velocity under constant acceleration is the midpoint
===================================================================== */
(function () {
  const d = sim('sim-avg', 600);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 30, step: 0.5, value: 10, unit: 'm/s', onInput: reset });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 30, step: 0.5, value: 20, unit: 'm/s', onInput: reset });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 20, step: 0.5, value: 10, unit: 's', onInput: reset });
  const cy = cycle(() => t.v, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), vb = (v0.v + v.v) / 2, a = (v.v - v0.v) / t.v, vel = (s) => v0.v + a * s, area = (s) => v0.v * s + 0.5 * a * s * s;
    const box = { l: 130, r: 1180, t: 110, b: 500 };
    const { X, Y } = axes(ctx, box, [0, 20], [0, 30], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 4, ny: 3 });
    // area so far = displacement so far
    ctx.save(); ctx.fillStyle = alpha(C('position'), 0.2); ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(0), Y(v0.v)); ctx.lineTo(X(tau), Y(vel(tau))); ctx.lineTo(X(tau), Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X(0), Y(vb), X(t.v), Y(vb), C('velocity'), 3, [10, 10]);
    line(ctx, X(t.v), Y(0), X(t.v), Y(v.v), C('time'), 3, [4, 8]);
    line(ctx, X(0), Y(v0.v), X(t.v), Y(v.v), C('velocity'), 5);
    dot(ctx, X(0), Y(v0.v), C('velocity'), false, 11); dot(ctx, X(t.v), Y(v.v), C('velocity'), true, 11);
    dot(ctx, X(tau), Y(vel(tau)), PAL.ink, true, 9);
    vbracket(ctx, X(t.v) + 40, Y(v.v), Y(v0.v), C('velocity'), 'v − v₀', 1);
    text(ctx, 'v̄ = ' + fmt(vb, 1) + ' m/s', X(0) + 16, Y(vb) + (v.v >= v0.v ? 24 : -24), C('velocity'), { align: 'left', weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'Δx = area = ' + fmt(area(tau), 0) + ' m', X(tau / 2), Y(Math.min(v0.v, vel(tau)) / 2), C('position'), { align: 'center', weight: 600, bg: alpha(PAL.panel, 0.7) });
    text(ctx, 'v₀', X(0) + 24, Y(v0.v) - 22, C('velocity'), { weight: 600, size: 24 });
    text(ctx, 'v', X(t.v), Y(v.v) - 30, C('velocity'), { align: 'center', weight: 600, size: 24 });
    text(ctx, 'slope = a = ' + fmt(a, 2) + ' m/s²', X(t.v) + 40, Y(Math.min(v0.v, v.v)) + 34, C('acceleration'), { size: 18, weight: 600 });
    headline(ctx, 'The velocity line is straight, so its average sits halfway between v₀ and v.');
    tex(d.readout, `\\kvb = \\frac{\\kvo + \\kv}{2} = \\frac{${fmt(v0.v, 1)} + ${fmt(v.v, 1)}}{2} = ${fmt(vb, 1)}\\ \\text{m/s}\\qquad \\kdx = \\kvb\\kt = ${fmt(area(t.v), 0)}\\ \\text{m}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => t.v / 4), draw });
})();

/* =====================================================================
   SIM 3: the jogger, x = x0 + v̄ t
===================================================================== */
(function () {
  const d = sim('sim-jogger', 660);
  const vb = ctl(d.controls, { label: '\\kvb', cls: 'velocity', min: 0, max: 8, step: 0.05, value: 4, unit: 'm/s', dec: 2, onInput: reset });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 10, max: 180, step: 1, value: 120, unit: 's', dec: 0, onInput: reset });
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: -200, max: 200, step: 10, value: 0, unit: 'm', dec: 0, onInput: reset });
  const cy = cycle(() => t.v, 1.2); let ph = 0;
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), x = x0.v + vb.v * t.v, xm = x0.v + vb.v * tau;
    const L = 80, R = 1320, y = 190; const X = (m) => L + (R - L) * (m + 200) / 1900;
    strip(ctx, L, R, y, 44); scale(ctx, X, 0, 1600, 200, y + 22, 'm', 2);
    dot(ctx, X(x0.v), y, C('position'), false, 10); text(ctx, 'x₀', X(x0.v), y + 76, C('position'), { align: 'center', weight: 600, size: 24 });
    if (Math.abs(x - x0.v) > 20) hbracket(ctx, X(x0.v), X(x), y - 100, C('position'), 'Δx = v̄ t = ' + fmt(x - x0.v, 0) + ' m');
    person(ctx, X(xm), y + 22, PAL.ink, { face: 1, phase: cy.tau < t.v && vb.v > 0 ? ph : 0 });
    dot(ctx, X(x), y, C('position'), true, 10); text(ctx, 'x = ' + fmt(x, 0) + ' m', Math.min(X(x), 1250), y + 76, C('position'), { align: 'center', weight: 600, size: 22 });
    arrow(ctx, X(xm) + 14, y - 82, X(xm) + 14 + vb.v * 22, y - 82, C('velocity'), 4); text(ctx, 'v̄', X(xm) + 24 + vb.v * 22, y - 82, C('velocity'), { weight: 600, size: 24 });
    // final position against average velocity, a straight line of slope t; the axes are fixed at the
    // slider range of v̄ and at the stretch of road the strip above already draws, so neither rescales
    const box = { l: 160, r: 1240, t: 360, b: 590 };
    const YLO = -200, YHI = 1800;
    const { X: GX, Y: GY } = axes(ctx, box, [0, 8], [YLO, YHI], { xl: 'v̄ (m/s)', xc: C('velocity'), yl: 'x (m)', yc: C('position'), nx: 4, ny: 5 });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    line(ctx, GX(0), GY(x0.v), GX(8), GY(x0.v + 8 * t.v), C('position'), 5);
    ctx.restore();
    line(ctx, GX(vb.v), GY(YLO), GX(vb.v), GY(x), C('velocity'), 3, [4, 8]); line(ctx, GX(0), GY(x), GX(vb.v), GY(x), C('position'), 3, [4, 8]);
    dot(ctx, GX(vb.v), GY(x), C('position'), true, 11); dot(ctx, GX(0), GY(x0.v), C('position'), false, 9);
    text(ctx, 'slope = t = ' + t.v + ' s', GX(8) - 20, GY(Math.min(YHI - 150, x0.v + 8 * t.v)) + 34, C('time'), { align: 'right', weight: 600, size: 20 });
    headline(ctx, 'After ' + fmt(tau, 0) + ' s the jogger is at x = ' + fmt(xm, 0) + ' m.');
    tex(d.readout, `\\kx = \\kxo + \\kvb\\kt = ${fmt(x0.v, 0)} + (${fmt(vb.v, 2)}\\ \\text{m/s})(${t.v}\\ \\text{s}) = ${fmt(x, 0)}\\ \\text{m}`);
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => t.v / 5); if (cy.tau < t.v) ph += dt * 14; }, draw });
})();

/* =====================================================================
   SIM 4: the airplane, v = v0 + a t
===================================================================== */
(function () {
  const d = sim('sim-plane', 680);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 90, step: 1, value: 70, unit: 'm/s', dec: 1, onInput: reset });
  const a = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: -4, max: 4, step: 0.05, value: -1.5, unit: 'm/s²', dec: 2, onInput: reset });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 60, step: 0.5, value: 40, unit: 's', dec: 1, onInput: reset });
  const cy = cycle(() => t.v, 1.2);
  function reset() { cy.reset(); }
  /* An airplane that is slowing down stops when its velocity reaches zero and stays there: it does
     not roll backwards down the runway. So the clock that drives the motion is capped at v₀/|a|
     whenever the acceleration opposes the velocity, and the plane holds at rest after that. */
  const stopAt = () => (a.v < 0 && v0.v > 0 ? v0.v / -a.v : Infinity);
  const eff = (s) => Math.min(s, stopAt());
  const pos = (s) => { const u = eff(s); return v0.v * u + 0.5 * a.v * u * u; };
  const vel = (s) => v0.v + a.v * eff(s);
  const XMAX = 3000, VMAX = 100;   /* the fixed stretch of runway, in m, and the fixed velocity axis, in m/s */
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now();
    const L = 80, R = 1320, y = 230; const X = (m) => L + ((R - L) * Math.min(XMAX, Math.max(0, m))) / XMAX;
    strip(ctx, L, R, y, 56);
    scale(ctx, X, 0, XMAX, 500, y + 34, 'm', 1);
    const xend = pos(t.v), far = xend > XMAX;
    dot(ctx, X(0), y + 28, C('position'), false, 7); text(ctx, 'x₀ = 0', X(0), y + 78, C('position'), { align: 'center', size: 18, weight: 600 });
    line(ctx, X(xend), y - 28, X(xend), y + 28, C('position'), 3);
    text(ctx, (far ? 'stops at ' : '') + fmt(xend, 0) + ' m', Math.min(X(xend), 1300), y - 44, C('position'), { align: far ? 'right' : 'center', size: 18, weight: 600, bg: alpha(PAL.panel, 0.85) });
    const px = X(pos(tau)), vv = vel(tau), rest = vv <= 1e-9 && a.v < 0;
    plane(ctx, px, y - 2, PAL.ink, 1.1);
    /* the arrows are anchored on the plane and clamped to the canvas, and each label sits on the arrow's side that has room */
    const vtip = Math.min(1380, px + vv * 3.2), atip = Math.max(20, Math.min(1380, px + a.v * 60));
    arrow(ctx, px, y - 110, vtip, y - 110, C('velocity'), 5); text(ctx, 'v = ' + fmt(vv, 1) + ' m/s', px > 1100 ? px + 10 : px - 10, y - 142, C('velocity'), { align: px > 1100 ? 'right' : 'left', weight: 600 });
    arrow(ctx, px, y + 110, atip, y + 110, C('acceleration'), 5); text(ctx, 'a = ' + fmt(a.v, 2) + ' m/s²', px > 1100 ? px + 10 : px - 10, y + 142, C('acceleration'), { align: px > 1100 ? 'right' : 'left', weight: 600 });
    // v against t, on axes fixed at the time slider's range and a 0 to 100 m/s scale
    const box = { l: 160, r: 1240, t: 430, b: 610 };
    const vend = vel(t.v), over = vend > VMAX;
    const { X: GX, Y: GY } = axes(ctx, box, [0, 60], [0, VMAX], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 4, ny: 4, fx: (v) => fmt(v, 0) });
    const Yc = (v) => GY(Math.min(VMAX, Math.max(0, v)));
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, vel, 0, t.v, GX, Yc, C('velocity'), 5, 120);
    ctx.restore();
    dot(ctx, GX(0), Yc(v0.v), C('velocity'), false, 10); dot(ctx, GX(t.v), Yc(vend), C('velocity'), !over, 10);
    line(ctx, GX(tau), box.b, GX(tau), Yc(vv), C('time'), 3, [4, 8]); dot(ctx, GX(tau), Yc(vv), PAL.ink, true, 9);
    text(ctx, 'v₀', GX(0) + 26, Yc(v0.v) + (a.v < 0 ? 30 : -30), C('velocity'), { weight: 600, size: 22 });
    const what = a.v < 0 ? 'the velocity arrow shrinks by ' + fmt(-a.v, 2) + ' m/s every second'
      : a.v > 0 ? 'the velocity arrow grows by ' + fmt(a.v, 2) + ' m/s every second'
        : 'the velocity arrow keeps its length, since the acceleration is zero';
    topline(ctx, 'After ' + fmt(tau, 1) + ' s ' + what + ', while the acceleration arrow never changes'
      + (rest ? ', and the plane has already come to rest.' : over ? ', and the velocity runs past the top of the scale at ' + fmt(vend, 0) + ' m/s.' : far ? ', and the plane has run past the end of the runway drawn here.' : '.'));
    tex(d.readout, `\\kv = \\kvo + \\ka\\kt = ${fmt(v0.v, 1)} + (${fmt(a.v, 2)})(${fmt(Math.min(t.v, stopAt()), 1)}) = ${fmt(vend, 1)}\\ \\text{m/s}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => t.v / 6), draw });
})();

/* =====================================================================
   SIM 5: the dragster, x = x0 + v0 t + ½ a t²
===================================================================== */
(function () {
  const d = sim('sim-dragster', 680);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 0, unit: 'm/s', dec: 1, onInput: reset });
  const a = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 1, max: 30, step: 0.1, value: 26, unit: 'm/s²', dec: 1, onInput: reset });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.5, max: 8, step: 0.01, value: 5.56, unit: 's', dec: 2, onInput: reset });
  const cy = cycle(() => t.v, 1.4);
  function reset() { cy.reset(); }
  const pos = (s) => v0.v * s + 0.5 * a.v * s * s;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), xe = pos(t.v), xh = pos(t.v / 2);
    /* the track is a fixed 1200 m, the farthest the three sliders can send the dragster, so a
       gentler run is drawn short instead of the track shrinking round it */
    const XMAX = 1200;
    const L = 80, R = 1320, y = 230; const X = (m) => L + ((R - L) * m) / XMAX;
    strip(ctx, L, R, y, 56);
    /* the three marks on the track are labelled through the labeller, since a short run puts all three
       within a few units of the start */
    const lab = labeller(ctx, 680);
    line(ctx, X(0), y - 40, X(0), y + 40, PAL.muted, 4); lab.add('start', X(0), y + 40, 0, 1, PAL.muted, 18, 26);
    line(ctx, X(xe), y - 40, X(xe), y + 40, C('position'), 4); lab.add('x = ' + fmt(xe, 0) + ' m', X(xe), y + 40, 0, 1, C('position'), 20, 26);
    dot(ctx, X(xh), y + 28, C('position'), false, 9); lab.add('at t/2: ' + fmt(xh, 0) + ' m, ' + fmt(100 * xh / (xe || 1), 0) + '% of the way', X(xh), y + 40, 0, 1, C('position'), 18, 26);
    const px = X(pos(tau)), vv = v0.v + a.v * tau;
    dragster(ctx, px, y - 8, PAL.ink, 1);
    arrow(ctx, px, y - 100, px + vv * 1.6, y - 100, C('velocity'), 5); text(ctx, 'v = ' + fmt(vv, 0) + ' m/s', px, y - 132, C('velocity'), { weight: 600 });
    arrow(ctx, px, y - 62, px + a.v * 3, y - 62, C('acceleration'), 5); text(ctx, 'a', px + a.v * 3 + 14, y - 62, C('acceleration'), { weight: 600, size: 24 });
    lab.flush();
    // x against t
    const box = { l: 160, r: 1240, t: 420, b: 610 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, 8], [0, XMAX], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    curve(ctx, pos, 0, t.v, GX, GY, C('position'), 5);
    line(ctx, GX(t.v / 2), box.b, GX(t.v / 2), GY(xh), C('time'), 2, [4, 8]);
    dot(ctx, GX(t.v / 2), GY(xh), C('position'), false, 10); dot(ctx, GX(t.v), GY(xe), C('position'), true, 10);
    dot(ctx, GX(tau), GY(pos(tau)), PAL.ink, true, 9);
    headline(ctx, 'After ' + fmt(tau, 2) + ' s the dragster is at x = ' + fmt(pos(tau), 0) + ' m, since the distance covered grows with the square of the time.');
    tex(d.readout, `\\kx = \\kxo + \\kvo\\kt + \\tfrac{1}{2}\\ka\\kt^2 = 0 + (${fmt(v0.v, 1)})(${fmt(t.v, 2)}) + \\tfrac{1}{2}(${fmt(a.v, 1)})(${fmt(t.v, 2)})^2 = ${fmt(xe, 0)}\\ \\text{m}`);
    const s = el('small', null, 'At half the time, t/2 = ' + fmt(t.v / 2, 2) + ' s, the dragster has gone ' + fmt(xh, 0) + ' m' + (v0.v === 0 ? ', exactly one fourth of the distance.' : '. With a running start it is more than a fourth.')); d.readout.appendChild(s);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 6: braking on dry vs wet concrete, v² = v0² + 2aΔx. The 3D view of the two cars that once stood above the bars is gone: Chen judged that a pair of distance bars carries the whole idea and the cars added nothing the reader could measure.
===================================================================== */
(function () {
  const d = sim('sim-braking', 380);
  const fig = d.fig;
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 5, max: 40, step: 0.5, value: 30, unit: 'm/s', dec: 1, onInput: reset });
  const tr = ctl(d.controls, { label: 't_{\\text{react}}', cls: 'time', min: 0, max: 1.5, step: 0.05, value: 0.5, unit: 's', dec: 2, onInput: reset, aria: 'reaction time' });
  const ad = ctl(d.controls, { label: '\\ka_{\\text{dry}}', cls: 'acceleration', min: -10, max: -2, step: 0.1, value: -7, unit: 'm/s²', dec: 2, onInput: reset, aria: 'deceleration on dry concrete' });
  const aw = ctl(d.controls, { label: '\\ka_{\\text{wet}}', cls: 'acceleration', min: -10, max: -2, step: 0.1, value: -5, unit: 'm/s²', dec: 2, onInput: reset, aria: 'deceleration on wet concrete' });
  const react = () => v0.v * tr.v, brake = (a) => v0.v * v0.v / (2 * -a), tstop = (a) => tr.v + v0.v / -a;
  const T = () => Math.max(tstop(ad.v), tstop(aw.v));
  function pos(a, s) { if (s <= tr.v) return v0.v * s; const tb = Math.min(s - tr.v, v0.v / -a); return v0.v * tr.v + v0.v * tb + 0.5 * a * tb * tb; }
  function vel(a, s) { if (s <= tr.v) return v0.v; return Math.max(0, v0.v + a * (s - tr.v)); }
  const cy = cycle(T, 1.6);
  function reset() { cy.reset(); }
  function draw() {
    const tau = cy.now();
    // distance bars: what the equation is really about
    const { ctx } = begin(d.c);
    const rd = react(), bd = brake(ad.v), bw = brake(aw.v);
    /* The strip is a fixed 0 to 200 m of road, which holds the example's 79.3 m and 105 m with room
       to spare and never follows the sliders; a stop that needs more road runs off the right end and
       the headline says so. Both bars are distances and so both take the position hue: the reaction
       distance is an outlined bar and the braking distance a filled one, which is the decoration
       that tells one variant of a type from the other. */
    const MMAX = 200;
    const L = 190, R = 1110; const Xr = (m) => L + ((R - L) * m) / MMAX, X = (m) => Xr(Math.min(MMAX, Math.max(0, m)));
    const off = rd + Math.max(bd, bw) > MMAX;
    [['dry', ad.v, bd, 150], ['wet', aw.v, bw, 270]].forEach(([name, a, b, y]) => {
      text(ctx, name, L - 24, y, PAL.ink, { align: 'right', weight: 600, size: 22 });
      ctx.save();
      ctx.fillStyle = PAL.soft; ctx.fillRect(X(0), y - 18, X(rd) - X(0), 36);
      ctx.strokeStyle = C('position'); ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.strokeRect(X(0), y - 18, X(rd) - X(0), 36);
      ctx.setLineDash([]); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(X(rd), y - 18, X(rd + b) - X(rd), 36);
      ctx.strokeRect(X(rd), y - 18, X(rd + b) - X(rd), 36);
      ctx.restore();
      if (rd > 0.5) text(ctx, 'reaction ' + fmt(rd, 1) + ' m', (X(0) + X(rd)) / 2, y - 38, C('position'), { align: 'center', size: 17, weight: 600 });
      text(ctx, 'braking ' + fmt(b, 1) + ' m', (X(rd) + X(rd + b)) / 2, y - 38, C('position'), { align: 'center', size: 17, weight: 600 });
      text(ctx, fmt(rd + b, 1) + ' m in ' + fmt(tstop(a), 2) + ' s', Math.min(X(rd + b) + 16, R + 16), y, PAL.muted, { size: 17 });
      car(ctx, X(pos(a, tau)), y + 20, PAL.ink, 0.7);
    });
    line(ctx, X(0), 96, X(0), 320, C('position'), 3, [4, 8]); text(ctx, 'light turns red', X(0), 344, PAL.muted, { align: 'center', size: 16 });
    topline(ctx, 'After ' + fmt(tau, 2) + ' s the two cars are this far down the road, and since the speed and the driver are the same, only the road surface separates them'
      + (off ? ', and the longer stop runs past the 200 m of road drawn here.' : '.'));
    tex(d.readout, `\\kx_{\\text{braking}} = \\frac{\\kv^2 - \\kvo^2}{2\\ka}:\\quad \\text{dry } \\frac{0 - (${fmt(v0.v, 1)})^2}{2(${fmt(ad.v, 2)})} = ${fmt(bd, 1)}\\ \\text{m},\\quad \\text{wet } ${fmt(bw, 1)}\\ \\text{m}`);
    d.readout.appendChild(el('small', null, 'The driver covers ' + fmt(rd, 1) + ' m while reacting, so the whole stop takes ' + fmt(rd + bd, 1) + ' m on dry concrete and ' + fmt(rd + bw, 1) + ' m on wet, a difference of ' + fmt(bw - bd, 1) + ' m.'));
  }
  register(fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 7: merging car, two roots of the quadratic
===================================================================== */
(function () {
  const d = sim('sim-merge', 700);
  const x = ctl(d.controls, { label: '\\kx', cls: 'position', min: 50, max: 400, step: 10, value: 200, unit: 'm', dec: 0, onInput: reset });
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 10, unit: 'm/s', dec: 1, onInput: reset });
  const a = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0.5, max: 4, step: 0.05, value: 2, unit: 'm/s²', dec: 2, onInput: reset });
  const roots = () => { const disc = Math.sqrt(v0.v * v0.v + 2 * a.v * x.v); return [(-v0.v + disc) / a.v, (-v0.v - disc) / a.v]; };
  const cy = cycle(() => roots()[0], 1.4);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), [rp, rm] = roots(), pos = (s) => v0.v * s + 0.5 * a.v * s * s;
    // the ramp, a fixed 0 to 400 m, the length slider's maximum, so a short ramp is drawn short
    const RMAX = 400;
    const L = 80, R = 1320, y = 170; const X = (m) => L + ((R - L) * Math.min(RMAX, Math.max(0, m))) / RMAX;
    strip(ctx, L, R, y, 50);
    scale(ctx, X, 0, RMAX, 50, y + 30, 'm', 2);
    const lab = labeller(ctx, 700);
    lab.block(L, y + 46, R, y + 74);   /* the scale's tick labels */
    dot(ctx, X(0), y + 25, C('position'), false, 7); lab.add('x_0 = 0', X(0), y + 36, 0, 1, C('position'), 18, 44);
    line(ctx, X(x.v), y - 36, X(x.v), y + 36, C('position'), 4); lab.add('end of ramp, x = ' + x.v + ' m', X(x.v), y - 36, 0, -1, C('position'), 18, 22);
    const px = X(pos(tau)), vv = v0.v + a.v * tau;
    car(ctx, px, y - 6, PAL.ink, 1);
    const vt = Math.min(1380, px + vv * 5);
    arrow(ctx, px, y - 64, vt, y - 64, C('velocity'), 5); text(ctx, 'v = ' + fmt(vv, 1) + ' m/s', vt > 1180 ? px - 16 : vt + 16, y - 64, C('velocity'), { weight: 600, size: 20, align: vt > 1180 ? 'right' : 'left' });
    /* The axes are fixed at −40 to 40 s and −500 to 1000 m, which hold every root the sliders can
       produce; the parabola is clipped to the box rather than the box stretched round it. */
    const t0 = -40, t1 = 40;
    const box = { l: 160, r: 1240, t: 300, b: 620 };
    const { X: GX, Y: GY } = axes(ctx, box, [t0, t1], [-500, 1000], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 8, ny: 6 });
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.08); ctx.fillRect(GX(t0), box.t, GX(0) - GX(t0), box.b - box.t); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, pos, t0, t1, GX, GY, C('position'), 5, 240);
    ctx.restore();
    line(ctx, box.l, GY(x.v), box.r, GY(x.v), C('position'), 3, [10, 10]); text(ctx, 'end of ramp, x = ' + x.v + ' m', GX((rm + rp) / 2), GY(x.v) - 22, C('position'), { align: 'center', weight: 600, size: 18 });
    line(ctx, GX(rp), GY(0), GX(rp), GY(x.v), C('time'), 3, [4, 8]); line(ctx, GX(rm), GY(0), GX(rm), GY(x.v), PAL.muted, 3, [4, 8]);
    dot(ctx, GX(rp), GY(x.v), C('time'), true, 11);
    /* the root before the motion began is a filled muted marker with a cross through it, since a
       hollow marker means an initial value everywhere else on this page */
    dot(ctx, GX(rm), GY(x.v), PAL.muted, true, 11);
    line(ctx, GX(rm) - 8, GY(x.v) - 8, GX(rm) + 8, GY(x.v) + 8, PAL.panel, 3);
    line(ctx, GX(rm) - 8, GY(x.v) + 8, GX(rm) + 8, GY(x.v) - 8, PAL.panel, 3);
    dot(ctx, GX(tau), GY(pos(tau)), PAL.ink, true, 9);
    lab.block(GX(rp) - 12, GY(x.v) - 12, GX(rp) + 12, GY(x.v) + 12); lab.block(GX(rm) - 12, GY(x.v) - 12, GX(rm) + 12, GY(x.v) + 12);
    lab.add('t = ' + fmt(rp, 1) + ' s', GX(rp), GY(x.v), 1, 0.5, C('time'), 20, 24);
    lab.add('t = ' + fmt(rm, 1) + ' s, before the motion began', GX(rm), GY(x.v), -0.3, 1, PAL.muted, 18, 30);
    text(ctx, 'past', GX(0) - 14, box.b - 22, PAL.muted, { size: 17, align: 'right' }); text(ctx, 'future', GX(0) + 14, box.b - 22, PAL.muted, { size: 17 });
    lab.flush();
    topline(ctx, 'After ' + fmt(tau, 1) + ' s the car is on its way, and the parabola crosses the length of the ramp twice, although only the crossing at ' + fmt(rp, 1) + ' s lies in the future.');
    tex(d.readout, `\\tfrac{1}{2}\\ka\\kt^2 + \\kvo\\kt - \\kx = 0 \\;\\Rightarrow\\; \\kt = \\frac{-\\kvo \\pm \\sqrt{\\kvo^2 + 2\\ka\\kx}}{\\ka} = ${fmt(rp, 1)}\\ \\text{s}\\ \\text{or}\\ ${fmt(rm, 1)}\\ \\text{s}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => roots()[0] / 5), draw });
})();
};
