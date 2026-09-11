/* Figures for section 2.3 Time, Velocity, and Speed. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, strip, scale, axes, nice, curve, runner, car, fixed, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = x.toPrecision(3); return s.includes('e') ? String(Math.round(Number(s))) : s; };
/* a signed value, with the minus sign the book prints */
const signed = (x, d) => (x < 0 ? '−' : '+') + fmt(Math.abs(x), d);
/* a symbol with a letter subscript and what follows it, such as t_f = 40.0 s, centred, left or right on x */
function subLabel(ctx, sym, sub, rest, x, y, color, align, size = 22) {
  ctx.save(); ctx.font = `600 ${size}px ${FONT}`; const w1 = ctx.measureText(sym).width, w3 = ctx.measureText(rest).width;
  ctx.font = `600 ${size * 0.7}px ${FONT}`; const w2 = ctx.measureText(sub).width; ctx.restore();
  const total = w1 + w2 + w3, left = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
  text(ctx, sym, left, y, color, { weight: 600, size }); text(ctx, sub, left + w1, y + size * 0.3, color, { weight: 600, size: size * 0.7 }); text(ctx, rest, left + w1 + w2, y, color, { weight: 600, size });
}
/* a label in ink followed by a value in a colour, on one line */
function pair(ctx, left, right, x, y, color) {
  ctx.save(); ctx.font = `400 22px ${FONT}`; const w = ctx.measureText(left).width; ctx.restore();
  text(ctx, left, x, y, PAL.ink); text(ctx, right, x + w + 8, y, color, { weight: 600, size: 24 });
}

/* ---------- sprites, in ink ---------- */
/* a stopwatch centred on (x, y) reading `sec` seconds, one turn of the hand for `turn` seconds */
function stopwatch(ctx, x, y, r, sec, turn) {
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillRect(x - 12, y - r - 20, 24, 14); ctx.strokeRect(x - 12, y - r - 20, 24, 14);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; line(ctx, x + (r - 12) * Math.sin(a), y - (r - 12) * Math.cos(a), x + (r - 4) * Math.sin(a), y - (r - 4) * Math.cos(a), PAL.muted, i % 3 ? 2 : 4); }
  ctx.restore();
  const a = (sec / turn) * Math.PI * 2;
  line(ctx, x, y, x + (r - 22) * Math.sin(a), y - (r - 22) * Math.cos(a), C('time'), 5); dot(ctx, x, y, C('time'), true, 7);
}
/* the fuselage of an airplane between x = l and x = r, centred on y, the nose to the right, with a fin at the tail */
function fuselage(ctx, l, r, y, h, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.moveTo(l + 40, y - h / 2); ctx.lineTo(r - 140, y - h / 2); ctx.quadraticCurveTo(r + 30, y - h / 2, r + 30, y);
  ctx.quadraticCurveTo(r + 30, y + h / 2, r - 140, y + h / 2); ctx.lineTo(l + 40, y + h / 2); ctx.quadraticCurveTo(l - 10, y + h / 2, l - 10, y);
  ctx.quadraticCurveTo(l - 10, y - h / 2, l + 40, y - h / 2); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(l + 108, y - h / 2); ctx.lineTo(l + 50, y - h / 2 - 72); ctx.lineTo(l + 12, y - h / 2 - 72); ctx.lineTo(l + 36, y - h / 2); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = color; for (let wx = l + 200; wx < r - 180; wx += 60) ctx.fillRect(wx, y - h / 2 + 16, 18, 12);
  ctx.restore();
}
/* a house standing on (x, y) */
function house(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - 40, y - 50, 80, 50); ctx.strokeRect(x - 40, y - 50, 80, 50);
  ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x - 48, y - 50); ctx.lineTo(x, y - 90); ctx.lineTo(x + 48, y - 50); ctx.closePath(); ctx.fill();
  ctx.fillRect(x - 9, y - 26, 18, 26);
  ctx.restore();
}
/* a store standing on (x, y), with an awning */
function store(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - 50, y - 70, 100, 70); ctx.strokeRect(x - 50, y - 70, 100, 70);
  ctx.fillStyle = color; ctx.fillRect(x - 56, y - 44, 112, 8); ctx.fillRect(x - 10, y - 30, 20, 30); ctx.fillRect(x - 40, y - 34, 20, 16); ctx.fillRect(x + 20, y - 34, 20, 16);
  ctx.restore();
}
/* a swinging pendulum hung from (x, y) with a string of length L at angle th from the vertical */
function pendulum(ctx, x, y, L, th, color) {
  const bx = x + L * Math.sin(th), by = y + L * Math.cos(th);
  line(ctx, x, y, bx, by, color, 3); dot(ctx, x, y, color, true, 5); dot(ctx, bx, by, color, true, 16);
  return { bx, by };
}
/* the passenger's trip of Figure 2.9: position in metres along the aisle as a smooth curve through five
   points 1.25 s apart, back, back, a step forward, back, ending 4.0 m behind where he began after 5.0 s */
const KNOT = [6.0, 4.6, 3.1, 4.4, 2.0], SLOPE = [-1.6, -1.2, 0, 0, -2.0], KH = 1.25;
function trip(u) {
  const i = Math.min(3, Math.max(0, Math.floor(u / KH))), s = Math.min(1, Math.max(0, (u - i * KH) / KH));
  const p0 = KNOT[i], p1 = KNOT[i + 1], m0 = SLOPE[i] * KH, m1 = SLOPE[i + 1] * KH, s2 = s * s, s3 = s2 * s;
  const x = (2 * s3 - 3 * s2 + 1) * p0 + (s3 - 2 * s2 + s) * m0 + (-2 * s3 + 3 * s2) * p1 + (s3 - s2) * m1;
  const v = ((6 * s2 - 6 * s) * p0 + (3 * s2 - 4 * s + 1) * m0 + (-6 * s2 + 6 * s) * p1 + (3 * s2 - 2 * s) * m1) / KH;
  return { x, v };
}

/* =====================================================================
   SIM: elapsed time. A pendulum swings above a time line while a marker
   runs from t₀ to t_f; a bracket spans the elapsed time and a stopwatch
   started at t₀ counts up from zero. Finite motion, one run per elapsed
   time, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-elapsed-time', 520);
  const t0 = ctl(d.controls, { label: '\\kto', cls: 'time', min: 0, max: 60, step: 0.5, value: 10, unit: 's', dec: 1, onInput: reset, aria: 'time at the beginning' });
  const tf = ctl(d.controls, { label: '\\ktf', cls: 'time', min: 0, max: 120, step: 0.5, value: 40, unit: 's', dec: 1, onInput: reset, aria: 'time at the end' });
  const sw = ctl(d.controls, { label: '\\text{one swing}', cls: 'time', min: 0.5, max: 2, step: 0.05, value: 0.75, unit: 's', dec: 2, onInput: reset, aria: 'time of one swing of the pendulum' });
  const DT = () => Math.max(0, tf.v - t0.v);
  const cy = cycle(() => Math.max(0.001, DT()), 1.2);
  function reset() { cy.reset(); }
  const L = 300, R = 1000, X = (s) => L + ((R - L) * s) / 120;
  function draw() {
    const { ctx } = begin(d.c);
    const dt = DT(), tau = Math.min(cy.now(), dt), begun = tf.v > t0.v, done = tau >= dt - 1e-9, clock = t0.v + tau;
    const swings = Math.floor(tau / sw.v + 1e-9);
    /* the pendulum, swinging since the clock started at zero */
    fixed(ctx, 100, 82, 160, 18);
    pendulum(ctx, 180, 100, 150, 0.38 * Math.cos((2 * Math.PI * clock) / sw.v), PAL.ink);
    text(ctx, 'one full swing every ' + fmt(sw.v, 2) + ' s', 180, 300, PAL.muted, { size: 17, align: 'center' });
    text(ctx, begun ? swings + (swings === 1 ? ' swing' : ' swings') + ' since t₀' : 'no swings counted', 180, 326, PAL.ink, { weight: 600, size: 20, align: 'center' });
    /* the time line, the two readings and the elapsed time between them */
    const y = 400;
    line(ctx, L, y, R, y, PAL.muted, 3); scale(ctx, X, 0, 120, 10, y, '', 2);
    text(ctx, 'clock reading (s)', R + 16, y, C('time'), { weight: 600, size: 20 });
    if (begun) {
      hbracket(ctx, X(t0.v), X(tf.v), y - 92, C('time'), 'Δt = ' + fmt(dt, 1) + ' s');
      if (tau > 0.01) line(ctx, X(t0.v), y - 40, X(clock), y - 40, C('time'), 3, [6, 8]);
      dot(ctx, X(clock), y - 40, PAL.ink, true, 8);
    }
    dot(ctx, X(t0.v), y, C('time'), false, 11); dot(ctx, X(tf.v), y, C('time'), true, 11);
    const apart = Math.abs(X(tf.v) - X(t0.v)) > 150;
    text(ctx, 't₀ = ' + fmt(t0.v, 1) + ' s', X(t0.v), y + 62, C('time'), { align: apart ? 'center' : 'right', weight: 600, size: 22 });
    subLabel(ctx, 't', 'f', ' = ' + fmt(tf.v, 1) + ' s', X(tf.v), y + (apart ? 62 : 88), C('time'), apart ? 'center' : 'left');
    /* the stopwatch, started at t₀ */
    const sx = 1210, sy = 210, r = 86;
    stopwatch(ctx, sx, sy, r, begun ? tau : 0, 60);
    text(ctx, 'stopwatch ' + fmt(begun ? tau : 0, 1) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 24, align: 'center' });
    text(ctx, 'started at t₀, one turn per minute', sx, sy + r + 62, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, !begun ? 'the end at ' + fmt(tf.v, 1) + ' s comes before the beginning at ' + fmt(t0.v, 1) + ' s, so the motion has not begun; set t_f after t₀'
      : done ? 'the clock read ' + fmt(t0.v, 1) + ' s at the start and ' + fmt(tf.v, 1) + ' s at the end, so the elapsed time is ' + fmt(dt, 1) + ' s, and the pendulum made ' + swings + ' full swings'
      : 'the clock reads ' + fmt(clock, 1) + ' s; ' + fmt(tau, 1) + ' s have elapsed since the motion began at ' + fmt(t0.v, 1) + ' s, and the pendulum has made ' + swings + ' full swings');
    readout(d.readout, `\\kdt = \\ktf - \\kto = ${fmt(tf.v, 1)}\\ \\text{s} - ${fmt(t0.v, 1)}\\ \\text{s} = ${fmt(tf.v - t0.v, 1)}\\ \\text{s}`,
      begun ? 'A stopwatch started at the same moment reads zero at t₀ and ' + fmt(dt, 1) + ' s at t<sub>f</sub>, which is why the text takes t₀ = 0 and writes t for the elapsed time.'
        : 'A negative elapsed time would mean the motion ended before it began, so the ending time has to come after the beginning time.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.max(0.001, DT()) / 5), draw });
})();

/* =====================================================================
   SIM: average velocity. A passenger walks the aisle of an airplane from
   x₀ to x_f in a time t; a bracket for the displacement, a stopwatch,
   and below a graph of position against time whose line from start to
   finish has slope v̄. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-average-velocity', 690);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 10, step: 0.5, value: 6, unit: 'm', dec: 1, onInput: reset });
  const xf = ctl(d.controls, { label: '\\kxf', cls: 'position', min: 0, max: 10, step: 0.5, value: 2, unit: 'm', dec: 1, onInput: reset });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 20, step: 0.5, value: 5, unit: 's', dec: 1, onInput: reset });
  const cy = cycle(() => t.v, 1.2); let ph = 0;
  function reset() { cy.reset(); }
  const L = 200, R = 1200, X = (m) => L + ((R - L) * m) / 10;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= t.v - 1e-9, dx = xf.v - x0.v, vb = dx / t.v, xm = x0.v + vb * tau;
    /* the airplane and its aisle, the nose to the right so that x increases toward the front */
    const y = 215;
    fuselage(ctx, 90, 1310, y, 110, PAL.ink);
    strip(ctx, L, R, y + 10, 36);
    text(ctx, 'rear', 100, y + 92, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'front', 1330, y + 92, PAL.muted, { size: 17, align: 'center' });
    scale(ctx, X, 0, 10, 1, y + 92, 'm', 2);
    if (Math.abs(dx) >= 0.5) hbracket(ctx, X(x0.v), X(xf.v), 100, C('position'), 'Δx = ' + signed(dx, 1) + ' m');
    else text(ctx, 'Δx = 0', X(x0.v), 78, C('position'), { align: 'center', weight: 600 });
    dot(ctx, X(x0.v), y + 10, C('position'), false, 10); dot(ctx, X(xf.v), y + 10, C('position'), true, 10);
    const apart = Math.abs(X(xf.v) - X(x0.v)) > 130;
    text(ctx, 'x₀ = ' + fmt(x0.v, 1) + ' m', X(x0.v), y + 150, C('position'), { align: apart ? 'center' : 'right', weight: 600, size: 22 });
    subLabel(ctx, 'x', 'f', ' = ' + fmt(xf.v, 1) + ' m', X(xf.v), y + (apart ? 150 : 178), C('position'), apart ? 'center' : 'left');
    /* the passenger and his average velocity as an arrow */
    runner(ctx, X(xm), y + 4, PAL.ink, ph);
    const ax = X(xm), len = Math.max(-300, Math.min(300, vb * 70));
    if (Math.abs(len) > 6) {
      arrow(ctx, ax, y - 72, ax + len, y - 72, C('velocity'), 5);
      text(ctx, 'v̄ = ' + signed(vb, 2) + ' m/s', ax + len + (len > 0 ? 14 : -14), y - 72, C('velocity'), { weight: 600, size: 20, align: len > 0 ? 'left' : 'right' });
    } else text(ctx, 'v̄ = 0', ax, y - 72, C('velocity'), { weight: 600, size: 20, align: 'center' });
    /* the stopwatch */
    const sx = 1210, sy = 520, r = 72;
    stopwatch(ctx, sx, sy, r, tau, t.v);
    text(ctx, 't = ' + fmt(tau, 1) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 24, align: 'center' });
    /* position against time: the line from (0, x₀) to (t, x_f) has slope v̄ */
    const box = { l: 160, r: 1000, t: 430, b: 610 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, t.v], [0, 10], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 5, ny: 2, fx: (v) => fmt(v, 1) });
    line(ctx, GX(0), GY(x0.v), GX(t.v), GY(xf.v), C('position'), 5);
    dot(ctx, GX(0), GY(x0.v), C('position'), false, 10); dot(ctx, GX(t.v), GY(xf.v), C('position'), true, 10);
    line(ctx, GX(tau), box.b, GX(tau), GY(xm), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(xm), PAL.ink, true, 9);
    text(ctx, 'slope = v̄ = ' + signed(vb, 2) + ' m/s', GX(t.v * 0.78), GY(x0.v + 0.78 * dx) + (vb <= 0 ? 34 : -34), C('velocity'), { align: 'center', weight: 600, size: 20 });
    const where = dx < 0 ? ', the minus sign meaning toward the rear of the plane' : dx > 0 ? ', the plus sign meaning toward the front of the plane' : ', so his average velocity is zero however long he takes';
    headline(ctx, done ? (dx === 0 ? 'the passenger ends where he began after ' + fmt(t.v, 1) + ' s' + where : 'the passenger moves ' + signed(dx, 1) + ' m in ' + fmt(t.v, 1) + ' s, an average velocity of ' + signed(vb, 2) + ' m/s' + where)
      : 't = ' + fmt(tau, 1) + ' s · the passenger is at x = ' + fmt(xm, 1) + ' m, on his way from ' + fmt(x0.v, 1) + ' m to ' + fmt(xf.v, 1) + ' m');
    readout(d.readout, `\\kvb = \\frac{\\kdx}{\\kt} = \\frac{${signed(dx, 1).replace('−', '-')}\\ \\text{m}}{${fmt(t.v, 1)}\\ \\text{s}} = ${signed(vb, 2).replace('−', '-')}\\ \\text{m/s}`,
      'Velocity is a vector because displacement is a vector, so the sign of the average velocity is the sign of the displacement.');
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => t.v / 5); if (cy.tau < t.v) ph += dt * 12; }, draw });
})();

/* =====================================================================
   FIGURE 2.9: the passenger's trip in detail. His position along the
   aisle is a smooth curve; the trip is cut into intervals of a set width
   and the average velocity over each is a chord on the graph; the
   instantaneous velocity is the tangent. Finite motion, so it gets the
   scrubber.
===================================================================== */
(function () {
  const d = sim('sim-segments', 720);
  const W = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.1, max: 5, step: 0.05, value: 1.25, unit: 's', dec: 2, onInput: reset, aria: 'width of one interval' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 2, max: 10, step: 0.5, value: 5, unit: 's', dec: 1, onInput: reset, aria: 'time of the whole trip' });
  const cy = cycle(() => T.v, 1.2); let ph = 0;
  function reset() { cy.reset(); }
  const at = (s) => { const p = trip((5 * s) / T.v); return { x: p.x, v: (p.v * 5) / T.v }; };
  const L = 200, R = 1200, X = (m) => L + ((R - L) * m) / 10;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, w = Math.min(W.v, T.v), n = Math.ceil(T.v / w - 1e-9);
    const now = at(tau), x0 = at(0).x, xe = at(T.v).x, dxt = xe - x0;
    const k = Math.min(n - 1, Math.floor(tau / w)), ta = k * w, tb = Math.min(T.v, (k + 1) * w), xa = at(ta).x, xb = at(tb).x, vb = (xb - xa) / (tb - ta);
    /* the airplane and its aisle */
    const y = 215;
    fuselage(ctx, 90, 1310, y, 110, PAL.ink);
    strip(ctx, L, R, y + 10, 36);
    text(ctx, 'rear', 100, y + 92, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'front', 1330, y + 92, PAL.muted, { size: 17, align: 'center' });
    scale(ctx, X, 0, 10, 1, y + 92, 'm', 2);
    hbracket(ctx, X(x0), X(xe), 100, C('position')); subLabel(ctx, 'Δx', 'tot', ' = ' + signed(dxt, 1) + ' m in ' + fmt(T.v, 1) + ' s', (X(x0) + X(xe)) / 2, 78, C('position'), 'center');
    dot(ctx, X(x0), y + 10, C('position'), false, 10); dot(ctx, X(xe), y + 10, C('position'), true, 10);
    /* the displacement over the interval the clock is in */
    const iy = y + 150;
    if (Math.abs(X(xb) - X(xa)) > 6) arrow(ctx, X(xa), iy, X(xb), iy, C('position'), 4); else dot(ctx, X(xa), iy, C('position'), true, 6);
    text(ctx, 'over this interval Δx = ' + signed(xb - xa, 2) + ' m', (X(xa) + X(xb)) / 2, iy + 30, C('position'), { align: 'center', weight: 600, size: 20 });
    /* the passenger and his instantaneous velocity */
    runner(ctx, X(now.x), y + 4, PAL.ink, ph);
    const ax = X(now.x), len = Math.max(-300, Math.min(300, now.v * 70));
    if (Math.abs(len) > 6) {
      arrow(ctx, ax, y - 72, ax + len, y - 72, C('velocity'), 5);
      text(ctx, 'v = ' + signed(now.v, 2) + ' m/s', ax + len + (len > 0 ? 14 : -14), y - 72, C('velocity'), { weight: 600, size: 20, align: len > 0 ? 'left' : 'right' });
    } else text(ctx, 'v = 0, momentarily at rest', ax, y - 72, C('velocity'), { weight: 600, size: 20, align: 'center' });
    /* the stopwatch */
    const sx = 1210, sy = 540, r = 72;
    stopwatch(ctx, sx, sy, r, tau, T.v);
    text(ctx, 't = ' + fmt(tau, 2) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 24, align: 'center' });
    /* position against time: the curve, the chords over each interval, the tangent at this instant */
    const box = { l: 160, r: 1000, t: 450, b: 630 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, T.v], [0, 8], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 5, ny: 4, fx: (v) => fmt(v, 1) });
    curve(ctx, (s) => at(s).x, 0, T.v, GX, GY, C('position'), 5, 160);
    for (let i = 0; i < n; i++) {
      const a = i * w, b = Math.min(T.v, (i + 1) * w), cur = i === k;
      line(ctx, GX(a), GY(at(a).x), GX(b), GY(at(b).x), cur ? C('velocity') : alpha(C('velocity'), 0.5), cur ? 5 : 3);
      if (n <= 12) dot(ctx, GX(b), GY(at(b).x), C('velocity'), true, 5);
    }
    const h = T.v / 12;
    line(ctx, GX(Math.max(0, tau - h)), GY(now.x - now.v * Math.min(h, tau)), GX(Math.min(T.v, tau + h)), GY(now.x + now.v * Math.min(h, T.v - tau)), C('velocity'), 3, [10, 10]);
    line(ctx, GX(tau), box.b, GX(tau), GY(now.x), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(now.x), PAL.ink, true, 9);
    text(ctx, 'over the interval v̄ = ' + signed(vb, 2) + ' m/s', GX((ta + tb) / 2), GY(Math.min(xa, xb)) + 34, C('velocity'), { align: 'center', weight: 600, size: 18, bg: alpha(PAL.panel, 0.8) });
    text(ctx, 'tangent: v = ' + signed(now.v, 2) + ' m/s', box.r - 12, box.t + 20, C('velocity'), { align: 'right', weight: 600, size: 18 });
    headline(ctx, done ? 'in ' + fmt(T.v, 1) + ' s the passenger moved ' + signed(dxt, 1) + ' m, an average velocity of ' + signed(dxt / T.v, 2) + ' m/s over the whole trip, which is cut here into ' + n + (n === 1 ? ' interval' : ' intervals') + ' of ' + fmt(w, 2) + ' s'
      : 't = ' + fmt(tau, 2) + ' s · over the interval from ' + fmt(ta, 2) + ' s to ' + fmt(tb, 2) + ' s the average velocity is ' + signed(vb, 2) + ' m/s; at this instant the velocity is ' + signed(now.v, 2) + ' m/s');
    readout(d.readout, `\\kvb = \\frac{\\kdx}{\\kdt} = \\frac{${signed(xb - xa, 2).replace('−', '-')}\\ \\text{m}}{${fmt(tb - ta, 2)}\\ \\text{s}} = ${signed(vb, 2).replace('−', '-')}\\ \\text{m/s} \\qquad \\kv = ${signed(now.v, 2).replace('−', '-')}\\ \\text{m/s}`,
      'As the interval shrinks, the average velocity over it settles to the instantaneous velocity, which is what the text means by an infinitesimally small interval.');
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => T.v / 5); if (cy.tau < T.v) ph += dt * 12; }, draw });
})();

/* =====================================================================
   FIGURE 2.10: the round trip to the store. A car drives out to the
   store and back while an odometer adds up the distance traveled and a
   bracket shows the displacement from home. Finite motion, so it gets
   the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-store', 520);
  const D = ctl(d.controls, { label: 'd', cls: '', min: 1, max: 10, step: 0.5, value: 3, unit: 'km', dec: 1, onInput: reset, aria: 'distance to the store' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 10, max: 120, step: 5, value: 30, unit: 'min', dec: 0, onInput: reset, aria: 'time of the trip' });
  const B = ctl(d.controls, { label: '\\text{of the way home}', cls: '', min: 0, max: 100, step: 10, value: 100, unit: '%', dec: 0, onInput: reset, aria: 'how far back toward home the car drives' });
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  const L = 200, R = 1200, X = (km) => L + ((R - L) * km) / D.v;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, f = B.v / 100, path = D.v * (1 + f), hours = T.v / 60, sp = path / hours;
    const tout = T.v / (1 + f), gone = sp * (tau / 60), pos = tau <= tout ? gone : D.v - (gone - D.v), xf = D.v * (1 - f), back = tau > tout;
    const vbar = xf / hours;
    /* the road from home to the store */
    const y = 230;
    strip(ctx, L, R, y, 48);
    house(ctx, L - 90, y + 24, PAL.ink); store(ctx, R + 90, y + 24, PAL.ink);
    text(ctx, 'home', L - 90, y + 62, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'store', R + 90, y + 62, PAL.muted, { size: 17, align: 'center' });
    scale(ctx, X, 0, Math.floor(D.v), 1, y + 34, 'km', D.v > 6 ? 2 : 1);
    if (Math.abs(pos) > 0.03) hbracket(ctx, X(0), X(pos), y - 96, C('position'), 'Δx = ' + fmt(pos, 1) + ' km from home');
    else text(ctx, 'Δx = 0, at home', X(0), y - 118, C('position'), { weight: 600, align: 'left' });
    /* the car, facing the way it drives, with its velocity as an arrow */
    const cx = X(pos), dir = back ? -1 : 1;
    ctx.save(); ctx.translate(cx, 0); ctx.scale(dir, 1); car(ctx, 0, y - 6, PAL.ink, 1.2); ctx.restore();
    const len = dir * Math.min(260, 40 + sp * 6);
    if (!done) {
      arrow(ctx, cx, y - 46, cx + len, y - 46, C('velocity'), 5);
      text(ctx, 'v = ' + (dir > 0 ? '+' : '−') + sig3(sp) + ' km/h', cx + len + dir * 14, y - 46, C('velocity'), { weight: 600, size: 20, align: dir > 0 ? 'left' : 'right' });
    }
    /* the odometer */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillRect(L, 360, 230, 52); ctx.strokeRect(L, 360, 230, 52); ctx.restore();
    text(ctx, 'odometer', L + 14, 386, PAL.muted, { size: 17 }); text(ctx, fmt(gone, 1) + ' km', L + 216, 386, PAL.ink, { weight: 600, size: 26, align: 'right' });
    text(ctx, 'distance traveled', L + 115, 436, PAL.muted, { size: 17, align: 'center' });
    /* the stopwatch */
    const sx = 1210, sy = 400, r = 60;
    stopwatch(ctx, sx, sy, r, tau, T.v);
    text(ctx, 't = ' + fmt(tau, 0) + ' min', sx, sy + r + 32, C('time'), { weight: 600, size: 24, align: 'center' });
    /* the two averages, side by side */
    pair(ctx, 'average speed  =', sig3(sp) + ' km/h', 520, 372, C('velocity'));
    pair(ctx, 'average velocity  =', (Math.abs(vbar) < 0.005 ? '0' : '+' + sig3(vbar)) + ' km/h', 520, 420, C('velocity'));
    const ending = f === 1 ? 'but the car is back where it began, so its average velocity is zero'
      : 'and the car ends ' + fmt(xf, 1) + ' km from home, so its average velocity is +' + sig3(vbar) + ' km/h away from home';
    headline(ctx, done ? 'the odometer reads ' + fmt(path, 1) + ' km after ' + fmt(T.v, 0) + ' min, an average speed of ' + sig3(sp) + ' km/h, ' + ending
      : 't = ' + fmt(tau, 0) + ' min · the odometer reads ' + fmt(gone, 1) + ' km and the car is ' + fmt(pos, 1) + ' km from home' + (back ? ', on its way back' : ', on its way out'));
    readout(d.readout, `\\text{average speed} = \\frac{${fmt(path, 1)}\\ \\text{km}}{${fmt(hours, 2)}\\ \\text{h}} = ${sig3(sp)}\\ \\text{km/h} \\qquad \\kvb = \\frac{\\kdx}{\\kt} = \\frac{${fmt(xf, 1)}\\ \\text{km}}{${fmt(hours, 2)}\\ \\text{h}} = ${Math.abs(vbar) < 0.005 ? '0' : sig3(vbar) + '\\ \\text{km/h}'}`,
      'Average speed is not the magnitude of average velocity; the two agree only when the car never turns back.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   FIGURE 2.11: the round trip drawn three ways, position, velocity and
   speed against time, with a time cursor on each. Finite motion, so it
   gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-trip-graphs', 660);
  const D = ctl(d.controls, { label: 'd', cls: '', min: 1, max: 10, step: 0.5, value: 3, unit: 'km', dec: 1, onInput: reset, aria: 'distance to the store' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 10, max: 120, step: 5, value: 30, unit: 'min', dec: 0, onInput: reset, aria: 'time of the trip' });
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  const L = 200, R = 1200, X = (km) => L + ((R - L) * km) / D.v;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, H = T.v / 60, th = tau / 60, sp = (2 * D.v) / H, half = H / 2;
    const back = th > half, pos = back ? 2 * D.v - sp * th : sp * th, vel = back ? -sp : sp;
    /* the road, short, with the car on it */
    const y = 150;
    strip(ctx, L, R, y, 40);
    house(ctx, L - 80, y + 20, PAL.ink); store(ctx, R + 80, y + 20, PAL.ink);
    text(ctx, 'home', L - 80, y + 58, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'store', R + 80, y + 58, PAL.muted, { size: 17, align: 'center' });
    const cx = X(Math.max(0, Math.min(D.v, pos))), dir = back ? -1 : 1;
    ctx.save(); ctx.translate(cx, 0); ctx.scale(dir, 1); car(ctx, 0, y - 6, PAL.ink, 1.1); ctx.restore();
    const len = dir * Math.min(220, 40 + sp * 6);
    if (!done) { arrow(ctx, cx, y - 44, cx + len, y - 44, C('velocity'), 5); text(ctx, 'v = ' + (dir > 0 ? '+' : '−') + sig3(sp) + ' km/h', cx + len + dir * 14, y - 44, C('velocity'), { weight: 600, size: 20, align: dir > 0 ? 'left' : 'right' }); }
    /* the three graphs */
    const xr = nice(0, D.v, 3), vr = nice(0, sp, 3), top = 290, bot = 560;
    const tick = (v) => fmt(v, 2), dec = (r) => ((r.hi / r.n) % 1 ? 1 : 0);
    const P = axes(ctx, { l: 110, r: 420, t: top, b: bot }, [0, H], [0, xr.hi], { xl: 't (h)', xc: C('time'), yl: 'x (km)', yc: C('position'), nx: 2, ny: xr.n, fx: tick, fy: (v) => fmt(v, dec(xr)) });
    const V = axes(ctx, { l: 590, r: 900, t: top, b: bot }, [0, H], [-vr.hi, vr.hi], { xl: 't (h)', xc: C('time'), yl: 'v (km/h)', yc: C('velocity'), nx: 2, ny: 2 * vr.n, fx: tick, fy: (v) => fmt(v, dec(vr)) });
    const S = axes(ctx, { l: 1060, r: 1370, t: top, b: bot }, [0, H], [0, vr.hi], { xl: 't (h)', xc: C('time'), yl: 'speed (km/h)', yc: C('velocity'), nx: 2, ny: vr.n, fx: tick, fy: (v) => fmt(v, dec(vr)) });
    text(ctx, 'position', 420, top - 24, PAL.muted, { size: 17, align: 'right' }); text(ctx, 'velocity', 900, top - 24, PAL.muted, { size: 17, align: 'right' }); text(ctx, 'speed', 1370, top - 24, PAL.muted, { size: 17, align: 'right' });
    line(ctx, P.X(0), P.Y(0), P.X(half), P.Y(D.v), C('position'), 5); line(ctx, P.X(half), P.Y(D.v), P.X(H), P.Y(0), C('position'), 5);
    line(ctx, V.X(0), V.Y(sp), V.X(half), V.Y(sp), C('velocity'), 5); line(ctx, V.X(half), V.Y(sp), V.X(half), V.Y(-sp), PAL.muted, 2, [6, 6]); line(ctx, V.X(half), V.Y(-sp), V.X(H), V.Y(-sp), C('velocity'), 5);
    line(ctx, S.X(0), S.Y(sp), S.X(H), S.Y(sp), C('velocity'), 5);
    text(ctx, '+' + sig3(sp), V.X(half / 2), V.Y(sp) - 22, C('velocity'), { align: 'center', weight: 600, size: 18 });
    text(ctx, '−' + sig3(sp), V.X(half + half / 2), V.Y(-sp) - 22, C('velocity'), { align: 'center', weight: 600, size: 18 });
    text(ctx, sig3(sp) + ' throughout', S.X(half), S.Y(sp) - 22, C('velocity'), { align: 'center', weight: 600, size: 18 });
    for (const [G, val] of [[P, pos], [V, vel], [S, sp]]) {
      line(ctx, G.X(th), bot, G.X(th), G.Y(val), C('time'), 3, [4, 8]); dot(ctx, G.X(th), G.Y(val), PAL.ink, true, 9);
    }
    headline(ctx, done ? 'in ' + fmt(H, 2) + ' h the car went out ' + fmt(D.v, 1) + ' km and back: its velocity was +' + sig3(sp) + ' km/h and then −' + sig3(sp) + ' km/h, while its speed was ' + sig3(sp) + ' km/h throughout'
      : 't = ' + fmt(th, 2) + ' h · the car is ' + fmt(pos, 1) + ' km from home, its velocity is ' + (dir > 0 ? '+' : '−') + sig3(sp) + ' km/h and its speed is ' + sig3(sp) + ' km/h');
    readout(d.readout, `\\kv = +${sig3(sp)}\\ \\text{km/h on the way out},\\quad \\kv = -${sig3(sp)}\\ \\text{km/h on the way back},\\quad \\text{speed} = ${sig3(sp)}\\ \\text{km/h throughout}`,
      'The speed graph is the velocity graph with its sign removed, which is what it means for instantaneous speed to be the magnitude of instantaneous velocity.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();
};
