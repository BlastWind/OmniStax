/* Figures for section 2.4 Acceleration. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, scale, axes, nice, curve, car, FONT } = F;
const demo = (id, H) => F.demo(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = Math.PI * 2;
/* a number with a real minus sign for the canvas, and with an explicit plus when asked */
const num = (x, d) => (x < 0 && Math.abs(x) >= Math.pow(10, -d) / 2 ? '−' : '') + fmt(Math.abs(x), d);
const signed = (x, d) => (x > 0 && Math.abs(x) >= Math.pow(10, -d) / 2 ? '+' : '') + num(x, d);
/* the same number for KaTeX, where the hyphen is the minus */
const tnum = (x, d) => fmt(x, d);
const tsigned = (x, d) => (x > 0 && Math.abs(x) >= Math.pow(10, -d) / 2 ? '+' : '') + fmt(x, d);
/* three significant figures, as the book prints an acceleration, with a real minus sign for the canvas and a hyphen for KaTeX */
const tsig3 = (x) => String(Number(x.toPrecision(3)));
const sig3 = (x) => tsig3(x).replace('-', '−');
const sig3s = (x) => (x > 0 ? '+' : '') + sig3(x);
const tsig3s = (x) => (x > 0 ? '+' : '') + tsig3(x);
/* a symbol followed by a small subscript, such as v with an f */
function sub(ctx, base, sfx, x, y, color, size = 24, align = 'left') {
  ctx.save(); ctx.font = `600 ${size}px ${FONT}`; const wb = ctx.measureText(base).width; ctx.font = `600 ${size * 0.7}px ${FONT}`; const ws = ctx.measureText(sfx).width; ctx.restore();
  const x0 = align === 'center' ? x - (wb + ws) / 2 : align === 'right' ? x - wb - ws : x;
  text(ctx, base, x0, y, color, { weight: 600, size }); text(ctx, sfx, x0 + wb, y + size * 0.3, color, { weight: 600, size: size * 0.7 });
}
/* a label in ink followed by a value in a colour, on one line */
function pair(ctx, left, right, x, y, color, size = 22) {
  ctx.save(); ctx.font = `400 ${size}px ${FONT}`; const w = ctx.measureText(left).width; ctx.restore();
  text(ctx, left, x, y, PAL.ink, { size }); text(ctx, right, x + w + 8, y, color, { weight: 600, size: size + 2 });
}
/* the range a function takes over [0, T], sampled */
function span(f, T, n = 80) { let lo = Infinity, hi = -Infinity; for (let i = 0; i <= n; i++) { const v = f((T * i) / n); lo = Math.min(lo, v); hi = Math.max(hi, v); } return [lo, hi]; }

/* ---------- sprites, in ink ---------- */
/* a subway car standing on the rail at y, about 112 units long; hollow draws only its outline */
function train(ctx, x, y, color, s = 1, hollow = false) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  if (hollow) {
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.setLineDash([6, 6]); ctx.strokeRect(-56, -60, 112, 44);
    ctx.beginPath(); ctx.arc(-36, -8, 8, 0, TAU); ctx.moveTo(44, -8); ctx.arc(36, -8, 8, 0, TAU); ctx.stroke(); ctx.restore(); return;
  }
  ctx.fillStyle = color; ctx.fillRect(-56, -60, 112, 44); ctx.fillRect(-48, -66, 96, 8);
  ctx.fillStyle = PAL.panel; [-46, -20, 6].forEach((wx) => ctx.fillRect(wx, -52, 20, 14)); ctx.fillRect(34, -52, 14, 32);
  ctx.fillStyle = color; ctx.beginPath();
  [-36, -18, 18, 36].forEach((wx) => { ctx.moveTo(wx + 8, -8); ctx.arc(wx, -8, 8, 0, TAU); }); ctx.fill();
  ctx.restore();
}
/* a racehorse running on the ground at y, facing dir (+1 right, −1 left), legs swung by phase */
function horse(ctx, x, y, color, phase, dir) {
  ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 6; ctx.lineCap = 'round';
  const sw = Math.sin(phase) * 14;
  ctx.fillRect(-40, -62, 84, 30);
  ctx.beginPath(); ctx.moveTo(34, -60); ctx.lineTo(56, -96); ctx.lineTo(78, -92); ctx.lineTo(72, -78); ctx.lineTo(52, -40); ctx.closePath(); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-32, -34); ctx.lineTo(-40 - sw, 0); ctx.moveTo(-20, -34); ctx.lineTo(-10 + sw, 0);
  ctx.moveTo(24, -34); ctx.lineTo(18 - sw, 0); ctx.moveTo(38, -34); ctx.lineTo(48 + sw, 0);
  ctx.moveTo(-40, -58); ctx.lineTo(-64, -40); ctx.stroke();
  ctx.restore();
}
/* the library car, facing dir */
function carDir(ctx, x, y, color, s, dir) { ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1); car(ctx, 0, 0, color, s); ctx.restore(); }
/* a car seen from above, its nose pointing along heading (0 is to the right, a positive heading turns toward the top of the canvas) */
function topCar(ctx, x, y, heading, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-heading); ctx.fillStyle = color;
  ctx.fillRect(-38, -19, 76, 38); ctx.fillStyle = PAL.panel; ctx.fillRect(8, -14, 11, 28); ctx.fillRect(-28, -14, 7, 28); ctx.restore();
}

/* =====================================================================
   DEMO: the definition. A car whose velocity changes by ā every second
   for 5.0 s; the v–t graph below is marked at each whole second, so the
   unit m/s² is read off the picture. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = demo('demo-average-acceleration', 640);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 5, unit: 'm/s', dec: 1, onInput: reset });
  const a = ctl(d.controls, { label: '\\kab', cls: 'acceleration', min: -5, max: 5, step: 0.1, value: 2.5, unit: 'm/s²', dec: 1, onInput: reset });
  const T = 5;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const vel = (s) => v0.v + a.v * s, pos = (s) => v0.v * s + 0.5 * a.v * s * s;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T - 1e-9, vv = vel(tau), vend = vel(T);
    /* the road */
    const [smin, smax] = span(pos, T);
    const L = 80, R = 1320, y = 230, X = (m) => L + 200 + ((R - L - 500) * (m - smin)) / (smax - smin || 1);
    strip(ctx, L, R, y, 52);
    arrow(ctx, 1200, y - 55, 1300, y - 55, PAL.ink, 3); text(ctx, '+x', 1310, y - 55, PAL.ink, { size: 20, weight: 600 });
    const px = X(pos(tau));
    carDir(ctx, px, y - 6, PAL.ink, 1.2, vv >= 0 ? 1 : -1);
    arrow(ctx, px, y - 106, px + vv * 6, y - 106, C('velocity'), 5);
    text(ctx, 'v = ' + num(vv, 1) + ' m/s', px + (vv >= 0 ? -6 : 6), y - 138, C('velocity'), { align: vv >= 0 ? 'left' : 'right', weight: 600 });
    if (Math.abs(a.v) > 0.05) {
      arrow(ctx, px, y + 60, px + a.v * 24, y + 60, C('acceleration'), 5);
      text(ctx, 'ā = ' + signed(a.v, 1) + ' m/s²', px + (a.v >= 0 ? -6 : 6), y + 92, C('acceleration'), { align: a.v >= 0 ? 'left' : 'right', weight: 600 });
    } else text(ctx, 'ā = 0: the velocity does not change', px, y + 76, C('acceleration'), { align: 'center', weight: 600 });
    /* v against t, marked every whole second */
    const box = { l: 160, r: 1240, t: 380, b: 580 };
    const yr = nice(Math.min(0, v0.v, vend) - 1, Math.max(5, v0.v, vend) + 1, 3);
    const { X: GX, Y: GY } = axes(ctx, box, [0, T], [yr.lo, yr.hi], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 5, ny: yr.n });
    line(ctx, GX(0), GY(v0.v), GX(T), GY(vend), C('velocity'), 5);
    for (let k = 1; k <= T; k++) {
      dot(ctx, GX(k), GY(vel(k)), C('velocity'), true, 7);
      text(ctx, num(vel(k), 1), GX(k), GY(vel(k)) + (a.v >= 0 ? -26 : 26), C('velocity'), { size: 17, align: 'center', weight: 600 });
    }
    if (Math.abs(a.v) > 0.05) vbracket(ctx, GX(3) + 26, GY(vel(2)), GY(vel(3)), C('velocity'), 'Δv in 1 s = ' + signed(a.v, 1) + ' m/s', 1);
    dot(ctx, GX(0), GY(v0.v), C('velocity'), false, 10); dot(ctx, GX(T), GY(vend), C('velocity'), true, 10);
    line(ctx, GX(tau), box.b, GX(tau), GY(vv), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(vv), PAL.ink, true, 9);
    headline(ctx, done ? 'in ' + fmt(T, 1) + ' s the velocity has changed by ' + fmt(T, 0) + ' × ' + signed(a.v, 1) + ' = ' + signed(vend - v0.v, 1) + ' m/s, from ' + num(v0.v, 1) + ' to ' + num(vend, 1) + ' m/s'
      : 'after ' + fmt(tau, 1) + ' s the velocity has changed by ' + fmt(tau, 1) + ' × ' + signed(a.v, 1) + ' = ' + signed(vv - v0.v, 1) + ' m/s, to ' + num(vv, 1) + ' m/s');
    readout(d.readout, `\\kab = \\frac{\\kdv}{\\kdt} = \\frac{(${tnum(vend, 1)} - ${tnum(v0.v, 1)})\\ \\text{m/s}}{${fmt(T, 1)}\\ \\text{s}} = ${tnum(a.v, 1)}\\ \\text{m/s}^2`,
      'The unit m/s² means that the velocity changes by ' + signed(a.v, 1) + ' m/s every second, whichever second you pick.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   DEMO: the turning car. A car rounds a bend at constant speed; the
   velocity at the start of the turn and the velocity now are set tail
   to tail beside the road, and their difference points to the inside
   of the bend. Endless loop over the whole run.
===================================================================== */
(function () {
  const d = demo('demo-turning', 560);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 20, step: 0.5, value: 10, unit: 'm/s', dec: 1, onInput: reset });
  const Rm = ctl(d.controls, { label: '\\text{radius}', cls: '', min: 20, max: 80, step: 5, value: 40, unit: 'm', dec: 0, onInput: reset, aria: 'radius of the bend' });
  const K = 2.75;                                     /* canvas units per meter */
  const x0 = 100, xb = 480, yroad = 430, ytop = 120;   /* the straight in, the start of the bend, the road's level and the top of the exit */
  const Rpx = () => Rm.v * K, Lin = xb - x0, arc = () => (Math.PI / 2) * Rpx(), Lout = () => yroad - Rpx() - ytop;
  const total = () => (Lin + arc() + Lout()) / K;    /* the run in meters */
  const T = () => total() / v.v;
  const cy = cycle(T, 0.6);
  function reset() { cy.reset(); }
  /* where the car is and which way it points after s meters */
  function place(s) {
    const p = s * K, R = Rpx(), cx = xb, cyy = yroad - R;
    if (p <= Lin) return { x: x0 + p, y: yroad, h: 0, phase: 'in' };
    if (p <= Lin + arc()) { const th = (p - Lin) / R; return { x: cx + R * Math.sin(th), y: cyy + R * Math.cos(th), h: th, phase: 'bend' }; }
    return { x: cx + R, y: cyy - (p - Lin - arc()), h: Math.PI / 2, phase: 'out' };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), s = v.v * tau, R = Rpx(), cx = xb, cyy = yroad - R, at = place(s);
    /* the road: two straights and the bend, drawn as a wide soft band */
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 64; ctx.lineCap = 'butt'; ctx.beginPath();
    ctx.moveTo(x0 - 40, yroad); ctx.lineTo(cx, yroad); ctx.arc(cx, cyy, R, Math.PI / 2, 0, true); ctx.lineTo(cx + R, ytop - 20); ctx.stroke();
    ctx.setLineDash([22, 18]); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(x0 - 40, yroad); ctx.lineTo(cx, yroad); ctx.arc(cx, cyy, R, Math.PI / 2, 0, true); ctx.lineTo(cx + R, ytop - 20); ctx.stroke(); ctx.restore();
    /* the centre of the bend and its radius */
    dot(ctx, cx, cyy, PAL.muted, true, 5);
    line(ctx, cx, cyy, cx + R * Math.sin(Math.PI / 4), cyy + R * Math.cos(Math.PI / 4), PAL.muted, 2, [4, 8]);
    text(ctx, 'radius ' + fmt(Rm.v, 0) + ' m', cx - 14, cyy - 6, PAL.muted, { size: 17, align: 'right' });
    /* the car and its velocity */
    topCar(ctx, at.x, at.y, at.h, PAL.ink);
    const vl = v.v * 12, ux = Math.cos(at.h), uy = -Math.sin(at.h), tx = at.x + ux * vl, ty = at.y + uy * vl;
    arrow(ctx, at.x, at.y, tx, ty, C('velocity'), 5);
    if (at.h < Math.PI / 3) text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', tx + 14, ty, C('velocity'), { weight: 600, size: 20 });
    else text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', tx, ty - 22, C('velocity'), { weight: 600, size: 20, align: 'center' });
    /* on the bend, the acceleration points to the centre */
    if (at.phase === 'bend') {
      const al = Math.min(120, 40 + (v.v * v.v) / Rm.v * 10), nx = (cx - at.x) / R, ny = (cyy - at.y) / R;
      arrow(ctx, at.x, at.y, at.x + nx * al, at.y + ny * al, C('acceleration'), 5);
      text(ctx, 'a', at.x + nx * (al + 18), at.y + ny * (al + 18), C('acceleration'), { weight: 600, size: 24, align: 'center' });
    }
    /* the two velocities tail to tail, and their difference */
    const ox = 1080, oy = 330, hb = at.phase === 'in' ? 0 : at.h, dvx = Math.cos(hb) - 1, dvy = -Math.sin(hb), dvm = 2 * v.v * Math.sin(hb / 2);
    text(ctx, 'velocity at the start of the bend, and now', ox + 60, oy - 190, PAL.muted, { size: 17, align: 'center' });
    arrow(ctx, ox, oy, ox + vl, oy, C('velocity'), 4); text(ctx, 'at the start of the bend', ox + vl / 2, oy + 24, C('velocity'), { size: 17, align: 'center' });
    if (hb > 0.01) {
      arrow(ctx, ox, oy, ox + Math.cos(hb) * vl, oy - Math.sin(hb) * vl, C('velocity'), 5);
      text(ctx, 'now', ox + Math.cos(hb) * vl - 24, oy - Math.sin(hb) * vl - 4, C('velocity'), { size: 17, align: 'right' });
      arrow(ctx, ox + vl, oy, ox + vl + dvx * vl, oy + dvy * vl, C('velocity'), 6);
      text(ctx, 'Δv = ' + fmt(dvm, 1) + ' m/s', ox + vl + (dvx * vl) / 2 + 16, oy + (dvy * vl) / 2, C('velocity'), { weight: 600, size: 20 });
    }
    dot(ctx, ox, oy, PAL.ink, true, 5);
    const deg = fmt((hb * 180) / Math.PI, 0);
    headline(ctx, at.phase === 'in' ? 'on the straight the velocity is ' + fmt(v.v, 1) + ' m/s to the right and is not changing, so the acceleration is zero'
      : at.phase === 'bend' ? 'on the bend the speed stays ' + fmt(v.v, 1) + ' m/s while the direction has turned ' + deg + '°, so Δv is ' + fmt(dvm, 1) + ' m/s and the car is accelerating'
        : 'after the bend the velocity is ' + fmt(v.v, 1) + ' m/s upward; the speed never changed, but the velocity changed by ' + fmt(dvm, 1) + ' m/s');
    const tb = at.phase === 'in' ? 0 : Math.min(s * K - Lin, arc()) / K / v.v;
    readout(d.readout, `|\\kdv| = ${fmt(dvm, 1)}\\ \\text{m/s}\\quad (\\kv = ${fmt(v.v, 1)}\\ \\text{m/s}\\ \\text{throughout})` + (tb > 0.01 ? `\\qquad \\kab = \\frac{${fmt(dvm, 1)}\\ \\text{m/s}}{${fmt(tb, 2)}\\ \\text{s}} = ${fmt(dvm / tb, 1)}\\ \\text{m/s}^2` : ''),
      'The change in velocity points toward the inside of the bend, and so does the acceleration. The tighter the bend or the faster the car, the greater the acceleration.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 2.14: the four cars. Each drives for the time the slowing cars
   take to stop; the velocity arrows change and the acceleration arrows
   keep their length and sign. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = demo('demo-four-cars', 620);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 5, max: 30, step: 1, value: 15, unit: 'm/s', dec: 0, onInput: reset, aria: 'starting speed' });
  const am = ctl(d.controls, { label: '|\\ka|', cls: 'acceleration', min: 1, max: 6, step: 0.1, value: 3, unit: 'm/s²', dec: 1, onInput: reset, aria: 'size of the acceleration' });
  const T = () => v0.v / am.v;
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  const CARS = [['(a)', 1, 1], ['(b)', 1, -1], ['(c)', -1, 1], ['(d)', -1, -1]];   /* label, sign of v, sign of a */
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T() - 1e-9;
    const L = 150, R = 1000, D = (1.5 * v0.v * v0.v) / am.v, k = (R - L - 100) / D;
    arrow(ctx, 1220, 96, 1320, 96, PAL.ink, 3); text(ctx, '+x', 1330, 96, PAL.ink, { size: 20, weight: 600 });
    const state = CARS.map(([lab, sv, sa], i) => {
      const y = 150 + 130 * i, vel = sv * v0.v + sa * am.v * tau, x = sv * v0.v * tau + 0.5 * sa * am.v * tau * tau;
      const px = sv > 0 ? L + 50 + x * k : R - 50 + x * k;
      const stopped = sv * sa < 0 && tau >= T() - 1e-9;
      strip(ctx, L, R, y, 44);
      text(ctx, lab, 36, y - 14, PAL.ink, { weight: 600 });
      text(ctx, stopped ? 'stopped' : sv * sa > 0 ? 'speeding up' : 'slowing down', 36, y + 14, PAL.muted, { size: 17 });
      carDir(ctx, px, y - 6, PAL.ink, 1.1, sv);
      if (Math.abs(vel) > 0.2) arrow(ctx, px, y - 58, px + vel * 4, y - 58, C('velocity'), 5);
      text(ctx, 'v', px + vel * 4 + 16 * sv, y - 58, C('velocity'), { weight: 600, size: 24, align: 'center' });
      arrow(ctx, px, y + 44, px + sa * am.v * 20, y + 44, C('acceleration'), 5);
      text(ctx, 'a', px + sa * am.v * 20 + 16 * sa, y + 44, C('acceleration'), { weight: 600, size: 24, align: 'center' });
      pair(ctx, 'v =', signed(vel, 1) + ' m/s', 1040, y - 16, C('velocity'), 20);
      pair(ctx, 'a =', signed(sa * am.v, 1) + ' m/s²', 1040, y + 18, C('acceleration'), 20);
      return { lab, vel, sv, sa };
    });
    headline(ctx, done ? 'after ' + fmt(T(), 1) + ' s cars (b) and (c) have stopped, while (a) and (d) are still speeding up'
      : 't = ' + fmt(tau, 1) + ' s · (b) and (c) are decelerating, and (b) and (d) have negative acceleration');
    readout(d.readout, `\\text{(a)}\\ \\kv > 0,\\ \\ka > 0 \\qquad \\text{(b)}\\ \\kv > 0,\\ \\ka < 0 \\qquad \\text{(c)}\\ \\kv < 0,\\ \\ka > 0 \\qquad \\text{(d)}\\ \\kv < 0,\\ \\ka < 0`,
      'A car is decelerating when its acceleration is opposite to its velocity, as in (b) and (c). Its acceleration is negative when the acceleration points to the left, as in (b) and (d), whether or not it is slowing down.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   The average-acceleration demos: a sprite on a strip whose velocity
   runs from v₀ to v_f in Δt, a velocity arrow that changes and an
   acceleration arrow that does not, and the v–t graph below. Built
   once and used for the racehorse (Figure 2.16) and the three subway
   sketches (Figures 2.19, 2.20 and 2.23). Finite motion, scrubber.
===================================================================== */
function accelDemo(o) {
  const d = demo(o.id, 650);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: o.vmin, max: o.vmax, step: o.vstep, value: o.v0, unit: o.unit, dec: 1, onInput: reset });
  const vf = ctl(d.controls, { label: '\\kvf', cls: 'velocity', min: o.vmin, max: o.vmax, step: o.vstep, value: o.vf, unit: o.unit, dec: 1, onInput: reset });
  const dt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: o.dtmin, max: o.dtmax, step: o.dtstep, value: o.dt, unit: 's', dec: o.dtdec, onInput: reset });
  const cy = cycle(() => dt.v, 1.2); let ph = 0;
  function reset() { cy.reset(); }
  const f = o.unit === 'km/h' ? 1000 / 3600 : 1;              /* display unit to m/s */
  const abar = () => (vf.v - v0.v) / dt.v;                     /* in display units per second */
  const vel = (s) => v0.v + abar() * s, pos = (s) => f * (v0.v * s + 0.5 * abar() * s * s);
  const dirName = (x) => (x > 0 ? o.pos : o.neg);
  function story(a) {
    const same = Math.sign(v0.v) === Math.sign(vf.v) || v0.v === 0 || vf.v === 0;
    if (Math.abs(a) < 1e-9) return { short: 'the velocity does not change, so the average acceleration is zero', long: 'The velocity does not change, so the average acceleration is zero.' };
    if (!same) return { short: o.subject + ' slows to a stop and then speeds up the other way', long: 'The velocity changes sign, so ' + o.subject + ' slows to a stop and then speeds up in the other direction; the acceleration is to the ' + dirName(a) + ' throughout.' };
    if (Math.abs(vf.v) > Math.abs(v0.v)) return { short: 'the acceleration points ' + dirName(a) + ', the same way as the velocity, so ' + o.subject + ' is speeding up', long: 'The acceleration is in the same direction as the change in velocity, as is always the case; here both are to the ' + dirName(a) + ', the direction of motion, so ' + o.subject + ' speeds up.' };
    return { short: 'the acceleration points ' + dirName(a) + ', against the velocity, so ' + o.subject + ' is decelerating', long: 'The acceleration is opposite to the velocity, so ' + o.subject + ' is decelerating, and its sign is ' + (a > 0 ? 'positive' : 'negative') + ' because it points to the ' + dirName(a) + '.' };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= dt.v - 1e-9, vv = vel(tau), a = abar(), aSI = a * f;
    /* the strip and the sprite */
    const [smin, smax] = span(pos, dt.v);
    const L = 80, R = 1320, y = 230, X = (m) => L + 220 + ((R - L - 440) * (m - smin)) / (smax - smin || 1);
    strip(ctx, L, R, y, 52);
    arrow(ctx, 1190, y - 55, 1280, y - 55, PAL.ink, 3); text(ctx, o.axis, 1290, y - 55, PAL.ink, { size: 20, weight: 600 });
    const px = X(pos(tau)), dir = vv !== 0 ? Math.sign(vv) : vf.v - v0.v !== 0 ? Math.sign(vf.v - v0.v) : 1;
    if (o.sprite === 'horse') horse(ctx, px, y + 4, PAL.ink, ph, dir); else train(ctx, px, y + 6, PAL.ink, 1);
    /* the velocity arrow above and the acceleration arrow below */
    const kv = 260 / o.vmax;
    if (Math.abs(vv) > 0.05) arrow(ctx, px, y - 108, px + vv * kv, y - 108, C('velocity'), 5);
    text(ctx, 'v = ' + num(vv, 1) + ' ' + o.unit, px + (vv >= 0 ? -6 : 6), y - 140, C('velocity'), { align: vv >= 0 ? 'left' : 'right', weight: 600 });
    const ka = Math.min(300, Math.abs(a) * o.ka);
    if (Math.abs(a) > 1e-9) arrow(ctx, px, y + 62, px + Math.sign(a) * ka, y + 62, C('acceleration'), 5);
    text(ctx, 'ā = ' + sig3s(aSI) + ' m/s²', px + (a >= 0 ? -6 : 6), y + 94, C('acceleration'), { align: a >= 0 ? 'left' : 'right', weight: 600 });
    /* v against t */
    const box = { l: 160, r: 1240, t: 400, b: 580 };
    const yr = nice(Math.min(0, v0.v, vf.v) - o.vpad, Math.max(0, v0.v, vf.v) + o.vpad, 3);
    const { X: GX, Y: GY } = axes(ctx, box, [0, dt.v], [yr.lo, yr.hi], { xl: 't (s)', xc: C('time'), yl: 'v (' + o.unit + ')', yc: C('velocity'), nx: 4, ny: yr.n, fx: (t) => fmt(t, o.dtdec) });
    line(ctx, GX(0), GY(v0.v), GX(dt.v), GY(vf.v), C('velocity'), 5);
    dot(ctx, GX(0), GY(v0.v), C('velocity'), false, 10); dot(ctx, GX(dt.v), GY(vf.v), C('velocity'), true, 10);
    text(ctx, 'v₀', GX(0) + 26, GY(v0.v) + (vf.v >= v0.v ? 30 : -30), C('velocity'), { weight: 600, size: 24 });
    sub(ctx, 'v', 'f', GX(dt.v) - 30, GY(vf.v) + (vf.v >= v0.v ? -30 : 30), C('velocity'), 24, 'center');
    text(ctx, 'slope = ā', GX(dt.v / 2) + 20, GY(vel(dt.v / 2)) + (vf.v >= v0.v ? 34 : -34), C('acceleration'), { weight: 600, size: 20 });
    line(ctx, GX(tau), box.b, GX(tau), GY(vv), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(vv), PAL.ink, true, 9);
    const st = story(a);
    headline(ctx, 't = ' + fmt(tau, o.dtdec) + ' s · v = ' + num(vv, 1) + ' ' + o.unit + ' · ' + st.short);
    readout(d.readout, o.readout(v0.v, vf.v, dt.v, aSI), o.small ? o.small(aSI, st) : st.long);
  }
  register(d.fig, { update: (dt2) => { cy.step(dt2, () => dt.v / 5); if (cy.tau < dt.v && Math.abs(vel(cy.tau)) > 0.05) ph += dt2 * 12; }, draw });
}
/* the racehorse of Example 2.1, in m/s with east positive */
accelDemo({
  id: 'demo-racehorse', sprite: 'horse', unit: 'm/s', vmin: -20, vmax: 20, vstep: 0.5, v0: 0, vf: -15, dtmin: 0.5, dtmax: 5, dtstep: 0.05, dt: 1.8, dtdec: 2,
  ka: 14, adec: 2, vpad: 2, axis: 'east (+)', pos: 'east', neg: 'west', subject: 'the horse',
  readout: (v0, vf, dt, a) => `\\kab = \\frac{\\kdv}{\\kdt} = \\frac{\\kvf - \\kvo}{\\kdt} = \\frac{(${tnum(vf, 1)}) - (${tnum(v0, 1)})\\ \\text{m/s}}{${fmt(dt, 2)}\\ \\text{s}} = ${tsig3(a)}\\ \\text{m/s}^2`,
  small: (a, st) => (Math.abs(a) > 1e-9 ? 'An acceleration of ' + sig3(Math.abs(a)) + ' m/s² due ' + (a < 0 ? 'west' : 'east') + ' means that the horse gains ' + sig3(Math.abs(a)) + ' m/s of ' + (a < 0 ? 'westward' : 'eastward') + ' velocity every second. ' : '') + st.long,
});
/* the subway train, in km/h with right positive, converted to m/s² in the readout as the book does it */
const trainReadout = (v0, vf, dt, a) => `\\kab = \\frac{\\kdv}{\\kdt} = \\left(\\frac{${tsigned(vf - v0, 1)}\\ \\text{km/h}}{${fmt(dt, 2)}\\ \\text{s}}\\right)\\left(\\frac{10^{3}\\ \\text{m}}{1\\ \\text{km}}\\right)\\left(\\frac{1\\ \\text{h}}{3600\\ \\text{s}}\\right) = ${tsig3s(a)}\\ \\text{m/s}^2`;
const TRAIN = { sprite: 'train', unit: 'km/h', vmin: -60, vmax: 60, vstep: 0.5, dtmin: 1, dtmax: 60, dtstep: 0.5, dtdec: 2, ka: 60, adec: 3, vpad: 5, axis: '+x', pos: 'right', neg: 'left', subject: 'the train', readout: trainReadout };
accelDemo({ ...TRAIN, id: 'demo-subway-speeding-up', v0: 0, vf: 30, dt: 20 });
accelDemo({ ...TRAIN, id: 'demo-subway-slowing-down', v0: 30, vf: 0, dt: 8 });
accelDemo({ ...TRAIN, id: 'demo-subway-deceleration', v0: -20, vf: 0, dt: 10 });

/* =====================================================================
   FIGURE 2.17: instantaneous acceleration. The book's two a–t graphs
   side by side; an interval is chosen, its average is a dashed level,
   and the area under each curve fills in as the clock runs, since that
   area is the change in velocity. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = demo('demo-instantaneous', 560);
  const t1 = ctl(d.controls, { label: 't_1', cls: 'time', min: 0, max: 5.5, step: 0.1, value: 0, unit: 's', dec: 1, onInput: reset, aria: 'start of the interval' });
  const t2 = ctl(d.controls, { label: 't_2', cls: 'time', min: 0.5, max: 6, step: 0.1, value: 3, unit: 's', dec: 1, onInput: reset, aria: 'end of the interval' });
  const lo = () => Math.min(t1.v, t2.v), hi = () => Math.max(t1.v, t2.v, lo() + 0.1);
  const cy = cycle(() => hi() - lo(), 1.2);
  function reset() { cy.reset(); }
  const aA = (t) => 1.78 - 0.27 * Math.cos((TAU * t) / 2.9);
  const STEPS = [[0, 3], [1, -2], [3, 0], [4.2, 1.5], [4.8, 5], [5.5, -4]];
  const aB = (t) => STEPS.reduce((v, [from, a]) => (t >= from ? a : v), 3);
  function integral(f, from, to, n = 300) { if (to <= from) return 0; let s = 0; const h = (to - from) / n; for (let i = 0; i < n; i++) s += f(from + (i + 0.5) * h); return s * h; }
  const GRAPHS = [
    { name: '(a)', f: aA, tmax: 5, box: { l: 130, r: 640, t: 120, b: 430 }, yr: [0, 3], ny: 3 },
    { name: '(b)', f: aB, tmax: 6, box: { l: 800, r: 1320, t: 120, b: 430 }, yr: [-6, 6], ny: 6 },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), a0 = lo(), a1 = hi(), now = a0 + tau, done = tau >= a1 - a0 - 1e-9;
    const res = GRAPHS.map((g) => {
      const from = Math.min(a0, g.tmax), to = Math.min(a1, g.tmax), cur = Math.min(now, g.tmax);
      const { X, Y } = axes(ctx, g.box, [0, g.tmax], g.yr, { xl: 't (s)', xc: C('time'), yl: 'a (m/s²)', yc: C('acceleration'), nx: g.tmax, ny: g.ny, fx: (t) => fmt(t, 1), fy: (v) => fmt(v, 1) });
      text(ctx, g.name, (g.box.l + g.box.r) / 2, g.box.b + 58, PAL.ink, { size: 20, weight: 600, align: 'center' });
      /* the area so far, which is the change in velocity */
      if (cur > from) {
        ctx.save(); ctx.fillStyle = alpha(C('velocity'), 0.28); ctx.beginPath(); ctx.moveTo(X(from), Y(0));
        const n = 200; for (let i = 0; i <= n; i++) { const t = from + ((cur - from) * i) / n; ctx.lineTo(X(t), Y(g.f(t))); }
        ctx.lineTo(X(cur), Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
      }
      /* the interval, the average over it, and the curve */
      line(ctx, X(from), g.box.t, X(from), g.box.b, C('time'), 3, [4, 8]); line(ctx, X(to), g.box.t, X(to), g.box.b, C('time'), 3, [4, 8]);
      const dv = integral(g.f, from, to), ab = to > from ? dv / (to - from) : g.f(from);
      line(ctx, X(from), Y(ab), X(to), Y(ab), C('acceleration'), 3, [10, 10]);
      text(ctx, 'ā = ' + num(ab, 2) + ' m/s²', X(to) + (to < g.tmax - 1.2 ? 12 : -12), Y(ab) - 20, C('acceleration'), { size: 18, weight: 600, align: to < g.tmax - 1.2 ? 'left' : 'right', bg: alpha(PAL.panel, 0.8) });
      curve(ctx, g.f, 0, g.tmax, X, Y, C('acceleration'), 5, 600);
      dot(ctx, X(cur), Y(g.f(cur)), PAL.ink, true, 9);
      const dvNow = integral(g.f, from, cur);
      text(ctx, 'Δv so far = ' + signed(dvNow, 1) + ' m/s', g.box.l + 14, g.box.t + 22, C('velocity'), { size: 18, weight: 600, bg: alpha(PAL.panel, 0.8) });
      return { dv, ab, dvNow, from, to };
    });
    headline(ctx, done ? 'over ' + fmt(a0, 1) + ' to ' + fmt(a1, 1) + ' s the average acceleration is ' + num(res[0].ab, 2) + ' m/s² on the left and ' + num(res[1].ab, 2) + ' m/s² on the right'
      : 't = ' + fmt(now, 1) + ' s · so far the velocity has changed by ' + signed(res[0].dvNow, 1) + ' m/s on the left and by ' + signed(res[1].dvNow, 1) + ' m/s on the right');
    readout(d.readout, `\\kab = \\frac{\\kdv}{\\kdt}:\\quad \\text{(a)}\\ \\frac{${tsigned(res[0].dv, 1)}\\ \\text{m/s}}{${fmt(res[0].to - res[0].from, 1)}\\ \\text{s}} = ${tnum(res[0].ab, 2)}\\ \\text{m/s}^2 \\qquad \\text{(b)}\\ \\frac{${tsigned(res[1].dv, 1)}\\ \\text{m/s}}{${fmt(res[1].to - res[1].from, 1)}\\ \\text{s}} = ${tnum(res[1].ab, 2)}\\ \\text{m/s}^2`,
      'On the left the average is close to the acceleration at every instant, so the motion can be treated as having a constant acceleration of about 1.8 m/s². On the right it is not: from 0 to 1.0 s the acceleration is +3.0 m/s² and from 1.0 to 3.0 s it is −2.0 m/s², and each of those intervals is better treated as a motion of its own.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (hi() - lo()) / 5), draw });
})();

/* =====================================================================
   FIGURE 2.18: the train's two trips. A displacement is a difference of
   two positions and has no time in it, so this is a still picture that
   answers its four sliders: no cycle, no transport.
===================================================================== */
(function () {
  const d = demo('demo-subway-displacement', 570);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 10, step: 0.05, value: 4.7, unit: 'km', dec: 2 });
  const xf = ctl(d.controls, { label: '\\kxf', cls: 'position', min: 0, max: 10, step: 0.05, value: 6.7, unit: 'km', dec: 2 });
  const x0p = ctl(d.controls, { label: "\\kxo'", cls: 'position', min: 0, max: 10, step: 0.05, value: 5.25, unit: 'km', dec: 2, aria: 'initial position of trip (b)' });
  const xfp = ctl(d.controls, { label: "\\kxf'", cls: 'position', min: 0, max: 10, step: 0.05, value: 3.75, unit: 'km', dec: 2, aria: 'final position of trip (b)' });
  const L = 130, R = 1310, X = (km) => L + ((R - L) * km) / 10;
  function trip(ctx, lab, a, b, y, prime) {
    const dx = b - a;
    strip(ctx, L, R, y, 44); scale(ctx, X, 0, 10, 1, y + 22, 'km', 2);
    text(ctx, lab, 40, y - 14, PAL.ink, { weight: 600 });
    train(ctx, X(a), y + 6, PAL.muted, 0.9, true); train(ctx, X(b), y + 6, PAL.ink, 0.9);
    dot(ctx, X(a), y, C('position'), false, 9); dot(ctx, X(b), y, C('position'), true, 9);
    if (Math.abs(dx) > 0.15) { arrow(ctx, X(a), y - 100, X(b), y - 100, C('position'), 5); text(ctx, 'Δx' + prime + ' = ' + signed(dx, 2) + ' km', (X(a) + X(b)) / 2, y - 126, C('position'), { align: 'center', weight: 600 }); }
    else text(ctx, 'Δx' + prime + ' = ' + signed(dx, 2) + ' km', X(a), y - 126, C('position'), { align: 'center', weight: 600 });
    line(ctx, X(a), y - 88, X(a), y + 62, C('position'), 2, [4, 8]); line(ctx, X(b), y - 88, X(b), y + 88, C('position'), 2, [4, 8]);
    text(ctx, 'x' + prime + '₀ = ' + fmt(a, 2) + ' km', X(a), y + 66, C('position'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    sub(ctx, 'x' + prime, 'f', X(b) - 58, y + 94, C('position'), 20); text(ctx, ' = ' + fmt(b, 2) + ' km', X(b) - 30, y + 94, C('position'), { weight: 600, size: 20 });
    return dx;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const dxa = trip(ctx, '(a)', x0.v, xf.v, 190, ''), dxb = trip(ctx, '(b)', x0p.v, xfp.v, 440, '′');
    headline(ctx, '(a) Δx = ' + fmt(xf.v, 2) + ' − ' + fmt(x0.v, 2) + ' = ' + signed(dxa, 2) + ' km · (b) Δx′ = ' + fmt(xfp.v, 2) + ' − ' + fmt(x0p.v, 2) + ' = ' + signed(dxb, 2) + ' km');
    readout(d.readout, `\\kdx = ${fmt(xf.v, 2)} - ${fmt(x0.v, 2)} = ${tsigned(dxa, 2)}\\ \\text{km} \\qquad \\kdx' = ${fmt(xfp.v, 2)} - ${fmt(x0p.v, 2)} = ${tsigned(dxb, 2)}\\ \\text{km}`,
      'The distance traveled is the magnitude of the displacement, ' + fmt(Math.abs(dxa), 2) + ' km in (a) and ' + fmt(Math.abs(dxb), 2) + ' km in (b), and it has no sign to indicate direction.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.21: the whole journey of Examples 2.4 and 2.5 on one clock,
   with position, velocity and acceleration against time below the
   strip. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = demo('demo-subway-graphs', 980);
  const vt = ctl(d.controls, { label: 'v_{\\text{top}}', cls: 'velocity', min: 10, max: 60, step: 1, value: 30, unit: 'km/h', dec: 1, onInput: reset, aria: 'top speed' });
  const t1 = ctl(d.controls, { label: 't_{\\text{speed up}}', cls: 'time', min: 5, max: 40, step: 0.5, value: 20, unit: 's', dec: 1, onInput: reset, aria: 'time spent speeding up' });
  const t2 = ctl(d.controls, { label: 't_{\\text{steady}}', cls: 'time', min: 0, max: 40, step: 0.5, value: 20, unit: 's', dec: 1, onInput: reset, aria: 'time at constant velocity' });
  const t3 = ctl(d.controls, { label: 't_{\\text{stop}}', cls: 'time', min: 2, max: 20, step: 0.5, value: 8, unit: 's', dec: 2, onInput: reset, aria: 'time spent stopping' });
  const T = () => t1.v + t2.v + t3.v;
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  const vSI = () => vt.v / 3.6, a1 = () => vSI() / t1.v, a3 = () => -vSI() / t3.v;
  function vel(s) { if (s <= t1.v) return a1() * s; if (s <= t1.v + t2.v) return vSI(); return Math.max(0, vSI() + a3() * (s - t1.v - t2.v)); }
  function acc(s) { if (s < t1.v) return a1(); if (s <= t1.v + t2.v) return 0; return a3(); }
  function pos(s) {
    const x1 = 0.5 * a1() * t1.v * t1.v, x2 = x1 + vSI() * t2.v;
    if (s <= t1.v) return 0.5 * a1() * s * s; if (s <= t1.v + t2.v) return x1 + vSI() * (s - t1.v);
    const u = Math.min(s - t1.v - t2.v, t3.v); return x2 + vSI() * u + 0.5 * a3() * u * u;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T() - 1e-9, xT = pos(T()), vv = vel(tau), aa = acc(tau);
    const phase = tau < t1.v ? 'up' : tau <= t1.v + t2.v ? 'steady' : 'stop';
    /* the strip */
    const L = 80, R = 1320, y = 225, X = (m) => L + ((R - L) * m) / (xT || 1);
    strip(ctx, L, R, y, 52);
    const step = xT > 600 ? 200 : xT > 250 ? 100 : 50; scale(ctx, X, 0, Math.floor(xT / step) * step, step, y + 26, 'm', 1);
    const px = X(pos(tau));
    train(ctx, px, y + 6, PAL.ink, 1);
    if (vv > 0.05) arrow(ctx, px, y - 104, px + vv * 14, y - 104, C('velocity'), 5);
    text(ctx, 'v = ' + fmt(vv, 2) + ' m/s (' + fmt(vv * 3.6, 1) + ' km/h)', px - 6, y - 132, C('velocity'), { weight: 600 });
    if (Math.abs(aa) > 1e-9) { arrow(ctx, px, y - 78, px + aa * 110, y - 78, C('acceleration'), 5); text(ctx, 'a', px + aa * 110 + 16 * Math.sign(aa), y - 78, C('acceleration'), { weight: 600, size: 24, align: 'center' }); }
    /* the three graphs */
    const tr = [0, T()], tn = T() <= 30 ? 3 : T() <= 60 ? 4 : 5;
    const xr = nice(0, Math.max(10, xT), 3), vr = nice(0, Math.max(1, vSI() * 1.05), 3), ar = nice(Math.min(a3(), 0) * 1.15, Math.max(a1(), 0) * 1.15, 3);
    const G = [
      { box: { l: 160, r: 1240, t: 310, b: 460 }, yl: 'x (m)', yc: C('position'), yr: xr, f: pos, fy: (v) => fmt(v, 0) },
      { box: { l: 160, r: 1240, t: 535, b: 685 }, yl: 'v (m/s)', yc: C('velocity'), yr: vr, f: vel, fy: (v) => fmt(v, 1) },
      { box: { l: 160, r: 1240, t: 760, b: 910 }, yl: 'a (m/s²)', yc: C('acceleration'), yr: ar, f: acc, fy: (v) => fmt(v, 2) },
    ];
    G.forEach((g) => {
      const { X: GX, Y: GY } = axes(ctx, g.box, tr, [g.yr.lo, g.yr.hi], { xl: 't (s)', xc: C('time'), yl: g.yl, yc: g.yc, nx: tn, ny: g.yr.n, fx: (t) => fmt(t, 0), fy: g.fy });
      line(ctx, GX(t1.v), g.box.t, GX(t1.v), g.box.b, PAL.muted, 1.5, [6, 6]); line(ctx, GX(t1.v + t2.v), g.box.t, GX(t1.v + t2.v), g.box.b, PAL.muted, 1.5, [6, 6]);
      curve(ctx, g.f, 0, T(), GX, GY, g.yc, 5, 400);
      line(ctx, GX(tau), g.box.b, GX(tau), GY(g.f(tau)), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(g.f(tau)), PAL.ink, true, 9);
    });
    const GX = (t) => 160 + ((1240 - 160) * t) / T();
    text(ctx, 'speeding up', GX(t1.v / 2), 296, PAL.muted, { size: 17, align: 'center' });
    if (t2.v > 4) text(ctx, 'constant velocity', GX(t1.v + t2.v / 2), 296, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'stopping', GX(t1.v + t2.v + t3.v / 2), 296, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, done ? 'in ' + fmt(T(), 1) + ' s the train covers ' + fmt(xT, 0) + ' m: speeding up for ' + fmt(t1.v, 1) + ' s, steady for ' + fmt(t2.v, 1) + ' s, stopping in ' + fmt(t3.v, 2) + ' s'
      : phase === 'up' ? 't = ' + fmt(tau, 1) + ' s · the train is speeding up: the position curves upward and the acceleration is ' + sig3s(a1()) + ' m/s²'
        : phase === 'steady' ? 't = ' + fmt(tau, 1) + ' s · the velocity is constant, so the acceleration is zero and the position grows at a steady rate'
          : 't = ' + fmt(tau, 1) + ' s · the train is braking: the velocity falls and the acceleration is ' + sig3s(a3()) + ' m/s²');
    readout(d.readout, `\\ka_{\\text{speeding up}} = \\frac{+${fmt(vt.v, 1)}\\ \\text{km/h}}{${fmt(t1.v, 1)}\\ \\text{s}} = ${tsig3s(a1())}\\ \\text{m/s}^2 \\qquad \\ka_{\\text{stopping}} = \\frac{-${fmt(vt.v, 1)}\\ \\text{km/h}}{${fmt(t3.v, 2)}\\ \\text{s}} = ${tsig3s(a3())}\\ \\text{m/s}^2`,
      'Between ' + fmt(t1.v, 1) + ' s and ' + fmt(t1.v + t2.v, 1) + ' s the velocity stays at ' + fmt(vSI(), 2) + ' m/s, so the acceleration is zero and the position changes by ' + fmt(vSI() * t2.v, 0) + ' m at a constant rate.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5.5), draw });
})();

/* =====================================================================
   FIGURE 2.22: the train's trip to the left, for Example 2.6. The train
   travels from x′₀ to x′_f in Δt at a steady rate; the x–t graph below
   is a straight line whose slope is the average velocity. Finite
   motion, scrubber.
===================================================================== */
(function () {
  const d = demo('demo-subway-velocity', 670);
  const x0 = ctl(d.controls, { label: "\\kxo'", cls: 'position', min: 0, max: 10, step: 0.05, value: 5.25, unit: 'km', dec: 2, onInput: reset, aria: 'initial position' });
  const xf = ctl(d.controls, { label: "\\kxf'", cls: 'position', min: 0, max: 10, step: 0.05, value: 3.75, unit: 'km', dec: 2, onInput: reset, aria: 'final position' });
  const dt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 1, max: 15, step: 0.25, value: 5, unit: 'min', dec: 2, onInput: reset });
  const cy = cycle(() => dt.v, 1.2);
  function reset() { cy.reset(); }
  const L = 130, R = 1310, X = (km) => L + ((R - L) * km) / 10;
  const vb = () => ((xf.v - x0.v) / dt.v) * 60;          /* km/h */
  const pos = (s) => x0.v + (xf.v - x0.v) * (s / dt.v);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= dt.v - 1e-9, dx = xf.v - x0.v, xm = pos(tau), v = vb();
    const y = 250;
    strip(ctx, L, R, y, 44); scale(ctx, X, 0, 10, 1, y + 22, 'km', 2);
    dot(ctx, X(x0.v), y, C('position'), false, 9); dot(ctx, X(xf.v), y, C('position'), true, 9);
    line(ctx, X(x0.v), y - 60, X(x0.v), y + 62, C('position'), 2, [4, 8]); line(ctx, X(xf.v), y - 60, X(xf.v), y + 88, C('position'), 2, [4, 8]);
    text(ctx, 'x′₀ = ' + fmt(x0.v, 2) + ' km', X(x0.v), y + 66, C('position'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    sub(ctx, 'x′', 'f', X(xf.v) - 58, y + 94, C('position'), 20); text(ctx, ' = ' + fmt(xf.v, 2) + ' km', X(xf.v) - 30, y + 94, C('position'), { weight: 600, size: 20 });
    if (Math.abs(dx) > 0.15) hbracket(ctx, X(x0.v), X(xf.v), y - 70, C('position'), 'Δx′ = ' + signed(dx, 2) + ' km');
    const px = X(xm);
    train(ctx, px, y + 6, PAL.ink, 0.9);
    if (Math.abs(v) > 0.2) arrow(ctx, px, y - 128, px + v * 4, y - 128, C('velocity'), 5);
    text(ctx, 'v̄ = ' + num(v, 1) + ' km/h', px + (v >= 0 ? -6 : 6), y - 158, C('velocity'), { align: v >= 0 ? 'left' : 'right', weight: 600 });
    /* x against t */
    const box = { l: 160, r: 1240, t: 420, b: 600 };
    const yr = nice(Math.min(x0.v, xf.v) - 0.3, Math.max(x0.v, xf.v) + 0.3, 3);
    const { X: GX, Y: GY } = axes(ctx, box, [0, dt.v], [yr.lo, yr.hi], { xl: 't (min)', xc: C('time'), yl: 'x (km)', yc: C('position'), nx: 4, ny: yr.n, fx: (t) => fmt(t, 2), fy: (v2) => fmt(v2, 2) });
    line(ctx, GX(0), GY(x0.v), GX(dt.v), GY(xf.v), C('position'), 5);
    dot(ctx, GX(0), GY(x0.v), C('position'), false, 10); dot(ctx, GX(dt.v), GY(xf.v), C('position'), true, 10);
    text(ctx, 'slope = v̄ = ' + num(v, 1) + ' km/h', GX(dt.v / 2) + 20, GY(pos(dt.v / 2)) + (dx <= 0 ? 34 : -34), C('velocity'), { weight: 600, size: 20 });
    line(ctx, GX(tau), box.b, GX(tau), GY(xm), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(xm), PAL.ink, true, 9);
    headline(ctx, done ? 'in ' + fmt(dt.v, 2) + ' min the train goes from ' + fmt(x0.v, 2) + ' km to ' + fmt(xf.v, 2) + ' km, a displacement of ' + signed(dx, 2) + ' km, so its average velocity is ' + num(v, 1) + ' km/h'
      : 't = ' + fmt(tau, 2) + ' min · the train is at ' + fmt(xm, 2) + ' km, ' + fmt((100 * tau) / dt.v, 0) + '% of the way along a trip of ' + signed(dx, 2) + ' km');
    readout(d.readout, `\\kvb = \\frac{\\kdx'}{\\kdt} = \\left(\\frac{${tnum(dx, 2)}\\ \\text{km}}{${fmt(dt.v, 2)}\\ \\text{min}}\\right)\\left(\\frac{60\\ \\text{min}}{1\\ \\text{h}}\\right) = ${tnum(v, 1)}\\ \\text{km/h}`,
      v < 0 ? 'The negative velocity indicates motion to the left.' : v > 0 ? 'The positive velocity indicates motion to the right.' : 'The train ends where it began, so its average velocity is zero.');
  }
  register(d.fig, { update: (dt2) => cy.step(dt2, () => dt.v / 5), draw });
})();
};
