/* Figures for section 2.3 Time, Velocity, and Speed. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, label, hbracket, strip, scale, axes, nice, curve, person, car, fixed, topline, labeller, LW, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = x.toPrecision(3); return s.includes('e') ? String(Math.round(Number(s))) : s; };
/* a signed value, with the minus sign the book prints */
const signed = (x, d) => (x < 0 ? '−' : '+') + fmt(Math.abs(x), d);
/* a symbol with a letter subscript and what follows it, such as t_f = 40.0 s, centred, left or right on x */
function subLabel(ctx, sym, sub, rest, x, y, color, align, size = 22) {
  const w1 = F.measure(ctx, sym, { size, weight: 600 }), w3 = F.measure(ctx, rest, { size, weight: 600 }), w2 = F.measure(ctx, sub, { size: size * 0.7, weight: 600 });
  const total = w1 + w2 + w3, left = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
  text(ctx, sym, left, y, color, { weight: 600, size }); text(ctx, sub, left + w1, y + size * 0.3, color, { weight: 600, size: size * 0.7 }); text(ctx, rest, left + w1 + w2, y, color, { weight: 600, size });
}
/* a label in ink followed by a value in a colour, on one line */
function pair(ctx, left, right, x, y, color) {
  const w = F.measure(ctx, left);
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
  const t0 = ctl(d.controls, { label: '\\kto', cls: 'time', min: 0, max: 60, step: 0.5, value: 10, unit: 's', dec: 1, onInput: reset, aria: '开始时刻' });
  const tf = ctl(d.controls, { label: '\\ktf', cls: 'time', min: 0, max: 120, step: 0.5, value: 40, unit: 's', dec: 1, onInput: reset, aria: '结束时刻' });
  const sw = ctl(d.controls, { label: '\\text{一次摆动}', cls: 'time', min: 0.5, max: 2, step: 0.05, value: 0.75, unit: 's', dec: 2, onInput: reset, aria: '摆一次摆动的时间' });
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
    pendulum(ctx, 180, 100, 150, 0.38 * Math.cos((2 * Math.PI * clock) / sw.v), F.ref('pendulum'));
    text(ctx, '每 ' + fmt(sw.v, 2) + ' s 完成一次完整摆动', 160, 300, PAL.muted, { size: 17, align: 'center' });
    text(ctx, begun ? '自 t₀ 起已摆动 ' + swings + ' 次' : '尚未计数摆动', 160, 326, PAL.ink, { weight: 600, size: 20, align: 'center' });
    /* the time line, the two readings and the elapsed time between them */
    const y = 400;
    line(ctx, L, y, R, y, PAL.muted, 3); scale(ctx, X, 0, 120, 10, y, '', 2);
    text(ctx, '钟表读数 (s)', R + 16, y, C('time'), { weight: 600, size: 20 });
    if (begun) {
      hbracket(ctx, X(t0.v), X(tf.v), y - 92, C('time'), 'Δt = ' + fmt(dt, 1) + ' s');
      if (tau > 0.01) line(ctx, X(t0.v), y - 40, X(clock), y - 40, C('time'), 3, [6, 8]);
      dot(ctx, X(clock), y - 40, PAL.ink, true, 8);
    }
    dot(ctx, X(t0.v), y, C('time'), false, 11); dot(ctx, X(tf.v), y, C('time'), true, 11);
    const apart = Math.abs(X(tf.v) - X(t0.v)) > 150;
    text(ctx, 't₀ = ' + fmt(t0.v, 1) + ' s', X(t0.v), y + 62, C('time'), { align: apart ? 'center' : 'right', weight: 600, size: 22 });
    subLabel(ctx, 't', 'f', ' = ' + fmt(tf.v, 1) + ' s', X(tf.v), y + (apart ? 62 : 88), C('time'), apart ? 'center' : 'left');
    /* The stopwatch, started at t₀. Every stopwatch on this page takes one turn of the hand over the
       whole interval it times, so a glance at the hand reads how much of the motion has gone by. */
    const sx = 1210, sy = 210, r = 86;
    stopwatch(ctx, sx, sy, r, begun ? tau : 0, Math.max(0.001, dt));
    text(ctx, '秒表 ' + fmt(begun ? tau : 0, 1) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 24, align: 'center' });
    text(ctx, '从 t₀ 起计时，转一圈为 Δt', sx, sy + r + 62, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, !begun ? '结束时刻 ' + fmt(tf.v, 1) + ' s 早于开始时刻 ' + fmt(t0.v, 1) + ' s，因此应把 t_f 设在 t₀ 之后，运动才有时间进行。'
      : done ? '时钟在开始时读 ' + fmt(t0.v, 1) + ' s，在结束时读 ' + fmt(tf.v, 1) + ' s，所以时间间隔为 ' + fmt(dt, 1) + ' s，摆完成了 ' + swings + ' 次完整摆动。'
      : '时钟读数为 ' + fmt(clock, 1) + ' s，即运动在 ' + fmt(t0.v, 1) + ' s 开始之后 ' + fmt(tau, 1) + ' s，摆已完成了 ' + swings + ' 次完整摆动。');
    readout(d.readout, `\\kdt = \\ktf - \\kto = ${fmt(tf.v, 1)}\\ \\text{s} - ${fmt(t0.v, 1)}\\ \\text{s} = ${fmt(tf.v - t0.v, 1)}\\ \\text{s}`,
      begun ? '在同一时刻启动的秒表在 $\\kto$ 时读数为零，在 $\\ktf$ 时读 ' + fmt(dt, 1) + ' s，这就是正文把 $\\kto$ 取为 0、并用 $\\kt$ 表示时间间隔的原因。'
        : '负的时间间隔意味着运动在开始之前就结束了，所以末时刻必须在初时刻之后。');
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
    text(ctx, '机尾', 100, y + 92, PAL.muted, { size: 17, align: 'center' }); text(ctx, '机头', 1330, y + 92, PAL.muted, { size: 17, align: 'center' });
    scale(ctx, X, 0, 10, 1, y + 92, 'm', 2);
    if (Math.abs(dx) >= 0.5) hbracket(ctx, X(x0.v), X(xf.v), 126, C('position'), 'Δx = ' + signed(dx, 1) + ' m');
    else text(ctx, 'Δx = 0', X(x0.v), 104, C('position'), { align: 'center', weight: 600 });
    dot(ctx, X(x0.v), y + 10, C('position'), false, 10); dot(ctx, X(xf.v), y + 10, C('position'), true, 10);
    const apart = Math.abs(X(xf.v) - X(x0.v)) > 130;
    text(ctx, 'x_0 = ' + fmt(x0.v, 1) + ' m', X(x0.v), y + 150, C('position'), { align: apart ? 'center' : 'right', weight: 600, size: 22 });
    text(ctx, 'x_f = ' + fmt(xf.v, 1) + ' m', X(xf.v), y + (apart ? 150 : 178), C('position'), { align: apart ? 'center' : 'left', weight: 600, size: 22 });
    /* the passenger walking the aisle, facing the way he goes, and his average velocity as an arrow over his head */
    person(ctx, X(xm), y + 28, F.ref('passenger'), { face: dx < 0 ? -1 : 1, phase: done || dx === 0 ? 0 : ph });
    const ax = X(xm), len = Math.max(-300, Math.min(300, vb * 70));
    if (Math.abs(len) > 6) {
      arrow(ctx, ax, y - 72, ax + len, y - 72, C('velocity'), 5);
      label(ctx, 'v̄ = ' + signed(vb, 2) + ' m/s', ax + len, y - 72, { side: len > 0 ? 'right' : 'left', gap: 14, color: C('velocity'), size: 20, leader: false });
    } else text(ctx, 'v̄ = 0', ax, y - 72, C('velocity'), { weight: 600, size: 20, align: 'center' });
    /* the stopwatch */
    const sx = 1210, sy = 520, r = 72;
    stopwatch(ctx, sx, sy, r, tau, t.v);
    text(ctx, 't = ' + fmt(tau, 1) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 24, align: 'center' });
    /* Position against time: the line from (0, x₀) to (t, x_f) has slope v̄. The axes are fixed at
       0 to 20 s, the time slider's maximum, and 0 to 10 m, the aisle's length, so dragging a slider
       moves the line and never the ticks. */
    const box = { l: 160, r: 1000, t: 430, b: 610 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, 20], [0, 10], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 5, ny: 2, fx: (v) => fmt(v, 1) });
    line(ctx, GX(0), GY(x0.v), GX(t.v), GY(xf.v), C('position'), 5);
    dot(ctx, GX(0), GY(x0.v), C('position'), false, 10); dot(ctx, GX(t.v), GY(xf.v), C('position'), true, 10);
    line(ctx, GX(tau), box.b, GX(tau), GY(xm), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(xm), PAL.ink, true, 9);
    const lab = labeller(ctx, 690);
    lab.block(box.l - 40, box.b, box.r + 40, box.b + 44);
    for (let i = 0; i <= 20; i++) { const u = (t.v * i) / 20, gy = GY(x0.v + (dx * i) / 20); lab.block(GX(u) - 8, gy - 8, GX(u) + 8, gy + 8); }
    lab.add('斜率 = v̄ = ' + signed(vb, 2) + ' m/s', GX(t.v * 0.6), GY(x0.v + 0.6 * dx), 0.3, vb <= 0 ? 1 : -1, C('velocity'), 20, 30);
    lab.flush();
    const where = dx < 0 ? '，负号表示朝向机尾' : dx > 0 ? '，正号表示朝向机头' : '，所以无论他用多长时间，他的平均速度都为零';
    headline(ctx, done ? (dx === 0 ? '乘客在 ' + fmt(t.v, 1) + ' s 后回到了出发的地方' + where + '。' : '乘客在 ' + fmt(t.v, 1) + ' s 内移动了 ' + signed(dx, 1) + ' m，平均速度为 ' + signed(vb, 2) + ' m/s' + where + '。')
      : '经过 ' + fmt(tau, 1) + ' s，乘客位于 x = ' + fmt(xm, 1) + ' m，正从 ' + fmt(x0.v, 1) + ' m 走向 ' + fmt(xf.v, 1) + ' m。');
    readout(d.readout, `\\kvb = \\frac{\\kdx}{\\kt} = \\frac{${signed(dx, 1).replace('−', '-')}\\ \\text{m}}{${fmt(t.v, 1)}\\ \\text{s}} = ${signed(vb, 2).replace('−', '-')}\\ \\text{m/s}`,
      '速度是矢量，因为位移是矢量，所以平均速度的正负号就是位移的正负号。');
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => t.v / 5); if (cy.tau < t.v) ph += dt * 12; }, draw });
})();

/* =====================================================================
   FIGURE 2.9: the passenger's trip in detail. His position along the
   aisle is a smooth curve; the trip is cut into intervals of a set width
   and the average velocity over each is a chord on the graph; the
   instantaneous velocity is the tangent. The narrowest interval is a
   special value on Δt: there the chord lies on the tangent and the
   average v̄ = Δx/Δt bends into v ≈ Δx/Δt. Finite motion, so it gets
   the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-segments', 720);
  const W = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.1, max: 5, step: 0.05, value: 1.25, unit: 's', dec: 2, specials: [{ at: 0.1, label: '瞬时' }], onInput: reset, aria: '一个区间的宽度' });
  const ro = F.readout(d);
  /* The trip the book draws under this number takes 5.0 s. A slider for the whole time only
     restretched the same curve and changed no picture, so it is gone (rule 24.6) and the trip
     keeps the book's 5.0 s; what is interesting and variable here is the width of one interval. */
  const TOT = 5;
  const cy = cycle(() => TOT, 1.2); let ph = 0;
  function reset() { cy.reset(); }
  const at = (s) => trip(s);
  const L = 200, R = 1200, X = (m) => L + ((R - L) * m) / 10;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= TOT - 1e-9, w = Math.min(W.v, TOT), n = Math.ceil(TOT / w - 1e-9);
    const now = at(tau), x0 = at(0).x, xe = at(TOT).x, dxt = xe - x0;
    const k = Math.min(n - 1, Math.floor(tau / w)), ta = k * w, tb = Math.min(TOT, (k + 1) * w), xa = at(ta).x, xb = at(tb).x, vb = (xb - xa) / (tb - ta);
    /* the airplane and its aisle */
    const y = 215;
    fuselage(ctx, 90, 1310, y, 110, PAL.ink);
    strip(ctx, L, R, y + 10, 36);
    text(ctx, '机尾', 100, y + 92, PAL.muted, { size: 17, align: 'center' }); text(ctx, '机头', 1330, y + 92, PAL.muted, { size: 17, align: 'center' });
    scale(ctx, X, 0, 10, 1, y + 92, 'm', 2);
    hbracket(ctx, X(x0), X(xe), 126, C('position')); subLabel(ctx, 'Δx', 'tot', ' = ' + signed(dxt, 1) + ' m，用时 ' + fmt(TOT, 1) + ' s', (X(x0) + X(xe)) / 2, 104, C('position'), 'center');
    dot(ctx, X(x0), y + 10, C('position'), false, 10); dot(ctx, X(xe), y + 10, C('position'), true, 10);
    /* the displacement over the interval the clock is in */
    const iy = y + 150;
    if (Math.abs(X(xb) - X(xa)) > 6) arrow(ctx, X(xa), iy, X(xb), iy, C('position'), 4); else dot(ctx, X(xa), iy, C('position'), true, 6);
    text(ctx, '在此区间内 Δx = ' + signed(xb - xa, 2) + ' m', (X(xa) + X(xb)) / 2, iy + 30, C('position'), { align: 'center', weight: 600, size: 20 });
    /* the passenger and his instantaneous velocity */
    person(ctx, X(now.x), y + 28, F.ref('passenger'), { face: now.v < 0 ? -1 : 1, phase: done || Math.abs(now.v) < 0.05 ? 0 : ph });
    const ax = X(now.x), len = Math.max(-300, Math.min(300, now.v * 70));
    if (Math.abs(len) > 6) {
      arrow(ctx, ax, y - 72, ax + len, y - 72, C('velocity'), 5);
      label(ctx, 'v = ' + signed(now.v, 2) + ' m/s', ax + len, y - 72, { side: len > 0 ? 'right' : 'left', gap: 14, color: C('velocity'), size: 20, leader: false });
    } else text(ctx, 'v = 0，瞬间静止', ax, y - 72, C('velocity'), { weight: 600, size: 20, align: 'center' });
    /* the stopwatch */
    const sx = 1210, sy = 540, r = 72;
    stopwatch(ctx, sx, sy, r, tau, TOT);
    text(ctx, 't = ' + fmt(tau, 2) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 24, align: 'center' });
    /* position against time: the curve, the chords over each interval, the tangent at this instant */
    /* fixed axes: the trip is 5.0 s long and runs between 2 m and 6 m along a 0 to 8 m aisle */
    const box = { l: 160, r: 1000, t: 450, b: 630 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, 5], [0, 8], { xl: 't (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 5, ny: 4, fx: (v) => fmt(v, 1) });
    curve(ctx, (s) => at(s).x, 0, TOT, GX, GY, C('position'), 5, 160);
    for (let i = 0; i < n; i++) {
      const a = i * w, b = Math.min(TOT, (i + 1) * w), cur = i === k;
      line(ctx, GX(a), GY(at(a).x), GX(b), GY(at(b).x), cur ? C('velocity') : alpha(C('velocity'), 0.5), cur ? 5 : 3);
      if (n <= 12) dot(ctx, GX(b), GY(at(b).x), C('velocity'), true, 5);
    }
    const h = TOT / 12;
    line(ctx, GX(Math.max(0, tau - h)), GY(now.x - now.v * Math.min(h, tau)), GX(Math.min(TOT, tau + h)), GY(now.x + now.v * Math.min(h, TOT - tau)), C('velocity'), 3, [10, 10]);
    line(ctx, GX(tau), box.b, GX(tau), GY(now.x), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(now.x), PAL.ink, true, 9);
    const lab = labeller(ctx, 720);
    lab.block(box.l - 40, box.b, box.r + 40, box.b + 44);
    for (let i = 0; i <= 50; i++) { const u = (TOT * i) / 50, gy = GY(at(u).x); lab.block(GX(u) - 8, gy - 8, GX(u) + 8, gy + 8); }
    lab.add('切线：v = ' + signed(now.v, 2) + ' m/s', GX(tau), GY(now.x), tau > TOT / 2 ? -0.5 : 0.5, -1, C('velocity'), 18, 26);
    lab.add('区间内 v̄ = ' + signed(vb, 2) + ' m/s', GX((ta + tb) / 2), GY((xa + xb) / 2), 0, 1, C('velocity'), 18, 26);
    lab.flush();
    topline(ctx, done ? '在 ' + fmt(TOT, 1) + ' s 内，乘客移动了 ' + signed(dxt, 1) + ' m，整个行程的平均速度为 ' + signed(dxt / TOT, 2) + ' m/s，这里它被分成 ' + n + ' 个区间，每个区间 ' + fmt(w, 2) + ' s。'
      : '在 ' + fmt(ta, 2) + ' s 到 ' + fmt(tb, 2) + ' s 的区间内，平均速度为 ' + signed(vb, 2) + ' m/s，而在 ' + fmt(tau, 2) + ' s 这一时刻，速度为 ' + signed(now.v, 2) + ' m/s。');
    /* at the narrowest interval the average and the instantaneous velocity are one number, so the two relations fold into one */
    const instant = W.v <= 0.1 + 1e-9, sv = (x) => signed(x, 2).replace('−', '-');
    const frac = `\\frac{\\mk{dx}{\\kdx}}{\\mk{dt}{\\kdt}} = \\frac{\\mk{dxv}{${sv(xb - xa)}\\ \\text{m}}}{\\mk{dtv}{${fmt(tb - ta, 2)}\\ \\text{s}}}`;
    ro.set(instant ? `\\mk{vb}{\\kv} \\approx ${frac} = \\mk{vbv}{${sv(vb)}\\ \\text{m/s}}`
      : `\\mk{vb}{\\kvb} = ${frac} = \\mk{vbv}{${sv(vb)}\\ \\text{m/s}} \\qquad \\mk{v}{\\kv} = \\mk{vv}{${sv(now.v)}\\ \\text{m/s}}`, instant ? '在这样短的区间上，平均速度接近瞬时速度，这就是正文所说的无穷小间隔。'
      : '随着区间缩小，其上的平均速度趋于瞬时速度，这就是正文所说的无穷小间隔。');
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => TOT / 5); if (cy.tau < TOT) ph += dt * 12; }, draw });
})();

/* =====================================================================
   FIGURE 2.10: the round trip to the store. A car drives out to the
   store and back while an odometer adds up the distance traveled and a
   bracket shows the displacement from home. Finite motion, so it gets
   the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-store', 520);
  const D = ctl(d.controls, { label: '\\text{到商店的距离}', cls: '', min: 1, max: 10, step: 0.5, value: 3, unit: 'km', dec: 1, onInput: reset, aria: '到商店的距离' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 10, max: 120, step: 5, value: 30, unit: 'min', dec: 0, onInput: reset, aria: '行程的时间' });
  const B = ctl(d.controls, { label: '\\text{回程已走}', cls: '', min: 0, max: 100, step: 10, value: 100, unit: '%', dec: 0, specials: [{ at: 100, label: '往返行程' }], onInput: reset, aria: '汽车往家的方向开回多远' });
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  /* the road is a fixed 0 to 10 km, the distance slider's maximum, and the store stands at the
     distance set rather than at the end of the road, so a short errand is drawn short */
  const KM = 10, L = 200, R = 1200, X = (km) => L + ((R - L) * km) / KM;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, f = B.v / 100, path = D.v * (1 + f), hours = T.v / 60, sp = path / hours;
    const tout = T.v / (1 + f), gone = sp * (tau / 60), pos = tau <= tout ? gone : D.v - (gone - D.v), xf = D.v * (1 - f), back = tau > tout;
    const vbar = xf / hours;
    /* the road from home to the store */
    const y = 230;
    strip(ctx, L, R, y, 48);
    /* the house and the store stand behind the road, on its far edge, with their names over their roofs, so
       neither the buildings nor their names sit on the scale under the road */
    const stx = X(D.v) + 80;
    house(ctx, L - 80, y - 26, PAL.ink); store(ctx, stx, y - 26, PAL.ink);
    text(ctx, '家', L - 80, y - 130, PAL.muted, { size: 17, align: 'center' }); text(ctx, '商店', stx, y - 112, PAL.muted, { size: 17, align: 'center' });
    scale(ctx, X, 0, KM, 1, y + 34, 'km', 1);
    if (Math.abs(pos) > 0.03) hbracket(ctx, X(0), X(pos), y + 106, C('position'), 'Δx = ' + fmt(pos, 1) + ' km（相对于家）');
    else text(ctx, 'Δx = 0，在家', X(0), y + 84, C('position'), { weight: 600, align: 'left' });
    /* the car, facing the way it drives, with its velocity as an arrow */
    const cx = X(pos), dir = back ? -1 : 1;
    ctx.save(); ctx.translate(cx, 0); ctx.scale(dir, 1); car(ctx, 0, y - 6, F.ref('car'), 1.2); ctx.restore();
    const len = dir * Math.min(260, 40 + sp * 6);
    if (!done) {
      arrow(ctx, cx, y - 46, cx + len, y - 46, C('velocity'), 5);
      text(ctx, 'v = ' + (dir > 0 ? '+' : '−') + sig3(sp) + ' km/h', cx + len + dir * 14, y - 46, C('velocity'), { weight: 600, size: 20, align: dir > 0 ? 'left' : 'right', bg: alpha(PAL.panel, 0.9) });
    }
    /* the odometer */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillRect(L, 360, 230, 52); ctx.strokeRect(L, 360, 230, 52); ctx.restore();
    text(ctx, '里程表', L + 14, 386, PAL.muted, { size: 17 }); text(ctx, fmt(gone, 1) + ' km', L + 216, 386, PAL.ink, { weight: 600, size: 26, align: 'right' });
    text(ctx, '路程', L + 115, 436, PAL.muted, { size: 17, align: 'center' });
    /* the stopwatch */
    const sx = 1210, sy = 400, r = 60;
    stopwatch(ctx, sx, sy, r, tau, T.v);
    text(ctx, 't = ' + fmt(tau, 0) + ' min', sx, sy + r + 32, C('time'), { weight: 600, size: 24, align: 'center' });
    /* the two averages, side by side */
    pair(ctx, '平均速率 =', sig3(sp) + ' km/h', 520, 372, C('velocity'));
    pair(ctx, '平均速度 =', (Math.abs(vbar) < 0.005 ? '0' : '+' + sig3(vbar)) + ' km/h', 520, 420, C('velocity'));
    const ending = f === 1 ? '但汽车回到了出发的地方，所以它的平均速度为零'
      : '汽车最后停在离家 ' + fmt(xf, 1) + ' km 处，所以它的平均速度为 +' + sig3(vbar) + ' km/h，方向离家';
    topline(ctx, done ? '里程表在 ' + fmt(T.v, 0) + ' min 后读数为 ' + fmt(path, 1) + ' km，平均速率为 ' + sig3(sp) + ' km/h，' + ending + '。'
      : '经过 ' + fmt(tau, 0) + ' min，里程表读数为 ' + fmt(gone, 1) + ' km，汽车离家 ' + fmt(pos, 1) + ' km' + (back ? '，正在回程途中。' : '，正在去程途中。'));
    readout(d.readout, `\\text{平均速率} = \\frac{${fmt(path, 1)}\\ \\text{km}}{${fmt(hours, 2)}\\ \\text{h}} = ${sig3(sp)}\\ \\text{km/h} \\qquad \\kvb = \\frac{\\kdx}{\\kt} = \\frac{${fmt(xf, 1)}\\ \\text{km}}{${fmt(hours, 2)}\\ \\text{h}} = ${Math.abs(vbar) < 0.005 ? '0' : sig3(vbar) + '\\ \\text{km/h}'}`,
      '平均速率不是平均速度的大小。只有当汽车从不折返时，两者才一致。');
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
  const D = ctl(d.controls, { label: '\\text{到商店的距离}', cls: '', min: 1, max: 10, step: 0.5, value: 3, unit: 'km', dec: 1, onInput: reset, aria: '到商店的距离' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 10, max: 120, step: 5, value: 30, unit: 'min', dec: 0, onInput: reset, aria: '行程的时间' });
  /* The third slider is the one the errand figure carries: how far back toward home the car drives.
     Without it these graphs answered the same two sliders as the errand a paragraph above and told
     the reader nothing new, and with it the three graphs show what stopping short of home does. */
  const B = ctl(d.controls, { label: '\\text{回程已走}', cls: '', min: 0, max: 100, step: 10, value: 100, unit: '%', dec: 0, specials: [{ at: 100, label: '往返行程' }], onInput: reset, aria: '汽车往家的方向开回多远' });
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  /* every scale here is fixed from the slider maxima: the road 0 to 10 km, the time 0 to 2 h, and
     the speed 0 to 40 km/h, which holds the errand's 12 km/h with room to spare; a faster trip is
     drawn against the top of the scale with its true value written beside it */
  const KM = 10, HMAX = 2, SPMAX = 40, L = 200, R = 1200, X = (km) => L + ((R - L) * km) / KM;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, f = B.v / 100, H = T.v / 60, th = tau / 60;
    const path = D.v * (1 + f), sp = path / H, tout = H / (1 + f), xf = D.v * (1 - f);
    const back = th > tout, pos = back ? D.v - sp * (th - tout) : sp * th, vel = back ? -sp : sp;
    /* the road, short, with the car on it */
    const y = 168;   /* low enough that a house's roof clears a two-line headline */
    strip(ctx, L, R, y, 40);
    const stx = X(D.v) + 80;
    house(ctx, L - 80, y + 20, PAL.ink); store(ctx, stx, y + 20, PAL.ink);
    text(ctx, '家', L - 80, y + 56, PAL.muted, { size: 17, align: 'center' }); text(ctx, '商店', stx, y + 56, PAL.muted, { size: 17, align: 'center' });
    const cx = X(Math.max(0, Math.min(D.v, pos))), dir = back ? -1 : 1;
    ctx.save(); ctx.translate(cx, 0); ctx.scale(dir, 1); car(ctx, 0, y - 6, F.ref('car'), 1.1); ctx.restore();
    const len = dir * (40 + (180 * Math.min(sp, SPMAX)) / SPMAX);
    if (!done) { arrow(ctx, cx, y - 44, cx + len, y - 44, C('velocity'), 5); text(ctx, 'v = ' + (dir > 0 ? '+' : '−') + sig3(sp) + ' km/h', cx + len + dir * 14, y - 44, C('velocity'), { weight: 600, size: 20, align: dir > 0 ? 'left' : 'right', bg: alpha(PAL.panel, 0.9) }); }
    /* the three graphs, on ranges that never follow the sliders */
    const top = 290, bot = 560;
    const tick = (v) => fmt(v, 2);
    const P = axes(ctx, { l: 110, r: 420, t: top, b: bot }, [0, HMAX], [0, KM], { xl: 't (h)', xc: C('time'), yl: 'x (km)', yc: C('position'), nx: 2, ny: 5, fx: tick, fy: (v) => fmt(v, 0) });
    const V = axes(ctx, { l: 590, r: 900, t: top, b: bot }, [0, HMAX], [-SPMAX, SPMAX], { xl: 't (h)', xc: C('time'), yl: 'v (km/h)', yc: C('velocity'), nx: 2, ny: 4, fx: tick, fy: (v) => fmt(v, 0) });
    const S = axes(ctx, { l: 1060, r: 1370, t: top, b: bot }, [0, HMAX], [0, SPMAX], { xl: 't (h)', xc: C('time'), yl: '速率 (km/h)', yc: C('velocity'), nx: 2, ny: 4, fx: tick, fy: (v) => fmt(v, 0) });
    text(ctx, '位置', 420, top - 24, PAL.muted, { size: 17, align: 'right' }); text(ctx, '速度', 900, top - 24, PAL.muted, { size: 17, align: 'right' }); text(ctx, '速率', 1370, top - 24, PAL.muted, { size: 17, align: 'right' });
    const spd = Math.min(sp, SPMAX), over = sp > SPMAX;
    line(ctx, P.X(0), P.Y(0), P.X(tout), P.Y(D.v), C('position'), 5);
    if (f > 0) line(ctx, P.X(tout), P.Y(D.v), P.X(H), P.Y(xf), C('position'), 5);
    line(ctx, V.X(0), V.Y(spd), V.X(tout), V.Y(spd), C('velocity'), 5);
    if (f > 0) { line(ctx, V.X(tout), V.Y(spd), V.X(tout), V.Y(-spd), PAL.muted, 2, [6, 6]); line(ctx, V.X(tout), V.Y(-spd), V.X(H), V.Y(-spd), C('velocity'), 5); }
    line(ctx, S.X(0), S.Y(spd), S.X(H), S.Y(spd), C('velocity'), 5);
    const inTop = (yy) => Math.max(top + 16, yy), bgp = alpha(PAL.panel, 0.85);
    text(ctx, '+' + sig3(sp), V.X(tout) + 10, inTop(V.Y(spd) - 20), C('velocity'), { align: 'left', weight: 600, size: 18, bg: bgp });
    if (f > 0) text(ctx, '−' + sig3(sp), V.X(H) + 10, Math.min(bot - 16, V.Y(-spd) + 22), C('velocity'), { align: 'left', weight: 600, size: 18, bg: bgp });
    text(ctx, sig3(sp) + '，始终不变', S.X(H) + 10, inTop(S.Y(spd) - 20), C('velocity'), { align: 'left', weight: 600, size: 18, bg: bgp });
    for (const [G, val] of [[P, pos], [V, Math.max(-SPMAX, Math.min(SPMAX, vel))], [S, spd]]) {
      line(ctx, G.X(th), bot, G.X(th), G.Y(val), C('time'), 3, [4, 8]); dot(ctx, G.X(th), G.Y(val), PAL.ink, over ? false : true, 9);
    }
    const ended = f === 1 ? '最后回到出发的地方' : f === 0 ? '并停在商店' : '最后离家 ' + fmt(xf, 1) + ' km';
    topline(ctx, done ? '在 ' + fmt(H, 2) + ' h 内，汽车行驶了 ' + fmt(path, 1) + ' km，' + ended + '，所以它的速率始终是 ' + sig3(sp) + ' km/h，而它的速度在商店处改变了正负号。'
      : '经过 ' + fmt(th, 2) + ' h，汽车离家 ' + fmt(pos, 1) + ' km，速度为 ' + (dir > 0 ? '+' : '−') + sig3(sp) + ' km/h，速率为 ' + sig3(sp) + ' km/h。');
    readout(d.readout, `\\kv = ${f > 0 ? '\\pm' : '+'}${sig3(sp)}\\ \\text{km/h} \\qquad \\text{速率} = |\\kv| = ${sig3(sp)}\\ \\text{km/h}`,
      over ? '在这个速率下，两条速度线越过了刻度的顶端（刻度最大到 40 km/h），旁边写出的数字才是真实值。'
        : '速率图像就是去掉正负号的速度图像，这正是瞬时速率是瞬时速度的大小的含义。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();
};
