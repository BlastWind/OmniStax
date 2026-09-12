/* Figures for section 9.2 The Second Condition for Equilibrium. Boots against the section's text article.
   Statics has no time in it, so every figure here is a still picture: none
   registers a cycle, none carries a transport, and a slider's input alone
   redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, RAD = Math.PI / 180, TAU = 2 * Math.PI;
const cosd = (a) => Math.cos(a * RAD), sind = (a) => Math.sin(a * RAD);
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* a number written with the typographic minus, and one that always carries its sign */
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
const plus = (v, d) => { const x = eps(v, d); return (x === 0 ? '' : x < 0 ? '−' : '+') + fmt(Math.abs(x), d); };
/* a signed angle difference in degrees, brought into the range −180 to 180 */
const wrap = (deg) => ((deg + 540) % 360) - 180;
/* the turning a torque produces, drawn as an arc about the pivot with an
   arrowhead at the end the turn runs towards. `mid` is the canvas angle the
   arc is centred on, so the arc goes wherever the scene leaves room. */
function turnArc(ctx, cx, cy, R, ccw, color, mid) {
  const a0 = mid - 0.78, a1 = mid + 0.78;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke(); ctx.restore();
  const a = ccw ? a0 : a1, t = ccw ? a - Math.PI / 2 : a + Math.PI / 2;
  const hx = cx + R * Math.cos(a), hy = cy + R * Math.sin(a);
  arrow(ctx, hx - 30 * Math.cos(t), hy - 30 * Math.sin(t), hx, hy, color, 5);
}
/* the angle between two directions at (x, y): an arc of radius R that starts
   at the canvas angle a0 and sweeps through `deg` degrees, with its label
   beyond the middle of the sweep */
function betweenArc(ctx, x, y, a0, deg, R, color, label) {
  const d = deg * RAD;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x, y, R, a0, a0 + d, d < 0); ctx.stroke(); ctx.restore();
  const m = a0 + d / 2;
  if (label) text(ctx, label, x + (R + 34) * Math.cos(m), y + (R + 34) * Math.sin(m), color, { align: 'center', size: 20, weight: 600, bg: alpha(PAL.panel, 0.8) });
}
/* the foot of the perpendicular dropped from (px, py) onto the line through
   (ax, ay) along the unit direction (ux, uy) */
function foot(px, py, ax, ay, ux, uy) {
  const k = (px - ax) * ux + (py - ay) * uy;
  return { x: ax + k * ux, y: ay + k * uy };
}

/* ---------- sprites, in ink ---------- */
/* a child sitting on a plank at (x, y), facing the way `face` points */
function child(ctx, x, y, color, s, face) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, -76, 15, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(0, -61); ctx.lineTo(0, -8);
  ctx.moveTo(0, -8); ctx.lineTo(face * 32, -8); ctx.lineTo(face * 32, 14);
  ctx.moveTo(0, -46); ctx.lineTo(face * 28, -28);
  ctx.stroke(); ctx.restore();
}
/* an ice hockey stick standing on its blade, the shaft from (x, yb) up to (x, yt) */
function hockeyStick(ctx, x, yb, yt, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(x, yt); ctx.lineTo(x, yb); ctx.lineTo(x + 104, yb + 16); ctx.stroke();
  ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x - 9, yt + 30); ctx.lineTo(x + 9, yt + 30); ctx.stroke();
  ctx.restore();
}
/* the fulcrum a plank is balanced on, its point at (x, y) and h tall */
function fulcrum(ctx, x, y, h) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x, y + 6); ctx.lineTo(x - h * 0.66, y + h); ctx.lineTo(x + h * 0.66, y + h); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  line(ctx, x - h, y + h, x + h, y + h, PAL.muted, 4);
}

/* =====================================================================
   FIGURE 9.6: the door from overhead. The hinges are at the left, the push
   is applied a chosen distance along the door and in a chosen direction,
   and the line of action, the perpendicular lever arm and the turning it
   produces are all drawn from the hinges. Still: a door held while you
   decide how hard, where and which way to push has no time in it, so the
   figure answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-door', 600);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 60, step: 1, value: 40, unit: 'N', dec: 0, aria: 'the size of the push' });
  const rs = ctl(d.controls, { label: '\\krlev', cls: 'position', min: 0.05, max: 0.9, step: 0.025, value: 0.8, unit: 'm', dec: 3, aria: 'the distance from the hinges to the push' });
  const ts = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 360, step: 5, value: 90, unit: 'º', dec: 0, aria: 'the angle between the push and the line back to the hinges' });
  const S = 780, KF = 4.6, HX = 250, HY = 390, LEN = 0.9;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque');
    const r = rs.v, Fv = Fs.v, th = ts.v;
    const px = HX + r * S, py = HY;
    const ux = cosd(180 - th), uy = -sind(180 - th);            /* the direction of the push on the canvas */
    const tau = r * Fv * sind(th), rp = r * Math.abs(sind(th)), fp = foot(HX, HY, px, py, ux, uy);
    /* the wall, the hinges and the door seen from overhead */
    fixed(ctx, 70, HY - 30, 180, 60);
    text(ctx, 'the wall', 128, HY + 50, PAL.muted, { size: 19, align: 'center' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.fillRect(HX, HY - 12, LEN * S, 24); ctx.strokeRect(HX, HY - 12, LEN * S, 24); ctx.restore();
    for (let k = 0; k <= 9; k++) { const x = HX + (k / 10) * S; line(ctx, x, HY + 12, x, HY + 26, PAL.muted, 2); if (k % 2 === 0) text(ctx, fmt(k / 10, 1) + ' m', x, HY + 50, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'the door, seen from overhead', HX + LEN * S, HY + 82, PAL.muted, { size: 19, align: 'right' });
    /* the line along which the force acts, and the perpendicular lever arm back to the hinges */
    if (Fv > 0) {
      line(ctx, px - 520 * ux, py - 520 * uy, px + 520 * ux, py + 520 * uy, PAL.rule, 2, [10, 10]);
      if (rp > 0.012) {
        line(ctx, HX, HY, fp.x, fp.y, pc, 3, [6, 8]);
        const lx = (HX + fp.x) / 2 - 12, near = lx < 340;
        text(ctx, 'r⊥ = ' + fmt(rp, 3) + ' m', near ? 340 : lx, (HY + fp.y) / 2 - 36, pc, { size: 20, weight: 600, align: near ? 'left' : 'right', bg: alpha(PAL.panel, 0.85) });
      }
      arrow(ctx, px, py, px + Fv * KF * ux, py + Fv * KF * uy, fc, 5);
      text(ctx, 'F = ' + fmt(Fv, 0) + ' N', px + (Fv * KF + 16) * ux, py + (Fv * KF + 16) * uy - 18, fc, { size: 21, weight: 600, align: ux < -0.2 ? 'right' : 'left' });
      betweenArc(ctx, px, py, Math.PI, th, 66, PAL.ink, 'θ = ' + fmt(th, 0) + 'º');
    }
    /* the distance from the hinges to the point of application */
    hbracket(ctx, HX, px, HY + 130, pc, 'r = ' + fmt(r, 3) + ' m');
    dot(ctx, px, py, PAL.ink, true, 9);
    dot(ctx, HX, HY, PAL.ink, false, 11);
    text(ctx, 'hinges', HX - 24, HY, PAL.ink, { size: 19, align: 'right', bg: alpha(PAL.panel, 0.9) });
    /* which way the door turns */
    if (Math.abs(tau) > 0.005) turnArc(ctx, HX, HY, 92, tau > 0, tc, Math.PI / 2);
    headline(ctx, Fv === 0 ? 'with no push on the door there is no torque about the hinges at all'
      : Math.abs(tau) < 0.005 ? 'the push runs straight along the line to the hinges, so its lever arm is nothing and it makes no torque'
      : 'a push of ' + fmt(Fv, 0) + ' N at ' + fmt(r, 3) + ' m from the hinges, at θ = ' + fmt(th, 0) + 'º, makes ' + fmt(Math.abs(tau), 1) + ' N·m ' + (tau > 0 ? 'counterclockwise' : 'clockwise'));
    readout(d.readout, `\\ktau = \\krlev\\kF\\sin\\theta = (${fmt(r, 3)}\\ \\text{m})(${fmt(Fv, 0)}\\ \\text{N})\\sin ${fmt(th, 0)}^\\circ = ${num(tau, 1)}\\ \\text{N}\\cdot\\text{m}`,
      Math.abs(tau) < 0.005 ? 'The perpendicular lever arm is the shortest distance from the hinges to the line along which the force acts, and here that line runs through the hinges themselves, so the lever arm is zero and the door will not turn however hard you push.'
        : 'The perpendicular lever arm is r⊥ = r sin θ = ' + fmt(rp, 3) + ' m, and τ = r⊥F gives the same ' + fmt(Math.abs(tau), 1) + ' N·m. The book measures θ as the angle between two vectors, so it never passes 180º; a push turned beyond that makes a torque of the same size the other way, which the counterclockwise-positive convention writes with a minus sign.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.7: the hockey stick about pivot A and about pivot B. One force
   near the grip, and a nail that slides along the stick. Still: the stick
   is nailed down and the question is what one force does about one chosen
   point, so nothing here runs on a clock; sliding the nail is the reader's
   choice of pivot, not the passage of time.
===================================================================== */
(function () {
  const d = sim('sim-hockey-stick', 700);
  const ps = ctl(d.controls, { label: '\\text{the nail}', cls: 'position', min: 0.1, max: 1.3, step: 0.05, value: 0.2, unit: 'm', dec: 2, aria: 'where the nail is driven, measured from the blade' });
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 60, step: 1, value: 30, unit: 'N', dec: 0, aria: 'the size of the push' });
  const gs = ctl(d.controls, { label: '\\text{the push}', cls: '', min: 0, max: 180, step: 5, value: 160, unit: 'º', dec: 0, aria: 'the direction of the push, measured from the horizontal' });
  const X = 560, YB = 620, S = 338, HAND = 1.10, KF = 4.4, PX = 1010;
  const yOf = (s) => YB - s * S;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque');
    const p = ps.v, Fv = Fs.v, g = gs.v;
    const hy = yOf(HAND), qy = yOf(p), ux = cosd(g), uy = -sind(g);
    const r = Math.abs(HAND - p), up = qy > hy ? 1 : -1;         /* which way the nail lies from the hand, on the canvas */
    const th = Math.acos(Math.max(-1, Math.min(1, uy * up))) / RAD;
    const tau = ((hy - qy) / S) * Fv * ux;                       /* counterclockwise positive */
    const fp = foot(X, qy, X, hy, ux, uy), rp = Math.hypot(fp.x - X, fp.y - qy) / S;
    /* the ice, the stick, and the two pivots the book names */
    strip(ctx, 360, 820, YB + 40, 24);
    hockeyStick(ctx, X, YB, yOf(1.36), PAL.ink);
    for (const [s, nm] of [[0.2, 'A'], [1.25, 'B']]) { const y = yOf(s); line(ctx, X - 46, y, X - 24, y, PAL.muted, 2); text(ctx, nm, X - 54, y, PAL.muted, { size: 20, weight: 600, align: 'right' }); }
    /* the line along which the force acts, the lever arm, and the push itself */
    if (Fv > 0) {
      line(ctx, X - 420 * ux, hy - 420 * uy, X + 420 * ux, hy + 420 * uy, PAL.rule, 2, [10, 10]);
      if (rp > 0.012) {
        line(ctx, X, qy, fp.x, fp.y, pc, 3, [6, 8]);
        text(ctx, 'r⊥ = ' + fmt(rp, 2) + ' m', (X + fp.x) / 2 + 16, (qy + fp.y) / 2 + 10, pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
      }
      arrow(ctx, X, hy, X + Fv * KF * ux, hy + Fv * KF * uy, fc, 5);
      text(ctx, 'F = ' + fmt(Fv, 0) + ' N', X + (Fv * KF + 16) * ux, hy + (Fv * KF + 16) * uy - 20, fc, { size: 21, weight: 600, align: ux < -0.2 ? 'right' : 'left' });
      if (r > 0.02) { const a0 = up > 0 ? Math.PI / 2 : -Math.PI / 2; betweenArc(ctx, X, hy, a0, wrap(Math.atan2(uy, ux) / RAD - a0 / RAD), 58, PAL.ink, 'θ = ' + fmt(th, 0) + 'º'); }
    }
    dot(ctx, X, hy, PAL.ink, true, 10);
    text(ctx, 'the hand', X + 28, hy + 36, PAL.ink, { size: 19, bg: alpha(PAL.panel, 0.85) });
    /* the distance from the nail to the hand, and the way the stick turns */
    if (r > 0.02) vbracket(ctx, X - 104, Math.min(qy, hy), Math.max(qy, hy), pc, 'r = ' + fmt(r, 2) + ' m', -1);
    dot(ctx, X, qy, PAL.ink, false, 11);
    text(ctx, 'the nail', X - 26, qy + 36, PAL.ink, { size: 19, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (Math.abs(tau) > 0.02) turnArc(ctx, X, qy, 78, tau > 0, tc, 0);
    /* what the nail you have chosen makes of the push */
    text(ctx, 'about the nail you have chosen', PX, 152, PAL.muted, { size: 19 });
    text(ctx, 'r = ' + fmt(r, 2) + ' m', PX, 200, pc, { size: 22, weight: 600 });
    text(ctx, 'θ = ' + fmt(th, 0) + 'º', PX, 242, PAL.ink, { size: 22, weight: 600 });
    text(ctx, 'r⊥ = r sin θ = ' + fmt(rp, 2) + ' m', PX, 284, pc, { size: 22, weight: 600 });
    text(ctx, 'τ = r⊥F = ' + num(tau, 1) + ' N·m', PX, 326, tc, { size: 22, weight: 600 });
    headline(ctx, Fv === 0 ? 'with no push on the stick there is no torque about the nail'
      : r < 0.02 ? 'the nail is driven through the very point the force is applied at, so there is no lever arm and no torque'
      : Math.abs(tau) < 0.02 ? 'the nail lies on the line along which the force acts, so the lever arm is nothing and the stick does not turn'
      : 'about the nail ' + fmt(p, 2) + ' m from the blade a push of ' + fmt(Fv, 0) + ' N turns the stick ' + (tau > 0 ? 'counterclockwise' : 'clockwise') + ' with ' + fmt(Math.abs(tau), 1) + ' N·m');
    readout(d.readout, `\\ktau = \\krperp\\kF = (${fmt(rp, 2)}\\ \\text{m})(${fmt(Fv, 0)}\\ \\text{N}) = ${num(tau, 1)}\\ \\text{N}\\cdot\\text{m}`,
      'The same force at the same point gives a different answer for every nail, because the torque is always taken about a pivot you have chosen. Drive the nail at A, below the hand, and the stick turns counterclockwise; drive it at B, above the hand, and the same push turns it clockwise; put it on the line of the force and it does not turn at all.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.8: the two children on the seesaw of Example 9.1. Still: a
   balanced seesaw stands still, and an unbalanced one is drawn tipped
   towards the larger torque, since what the reader is asked to see is
   which way it goes, not how fast it gets there.
===================================================================== */
(function () {
  const d = sim('sim-seesaw', 700);
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 10, max: 50, step: 0.5, value: 26, unit: 'kg', dec: 1, aria: 'the mass of the first child' });
  const r1 = ctl(d.controls, { label: '\\krone', cls: 'position', min: 0.2, max: 2.5, step: 0.05, value: 1.6, unit: 'm', dec: 2, aria: 'the distance from the pivot to the first child' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 10, max: 50, step: 0.5, value: 32, unit: 'kg', dec: 1, aria: 'the mass of the second child' });
  const r2 = ctl(d.controls, { label: '\\krtwo', cls: 'position', min: 0.2, max: 2.5, step: 0.05, value: 1.3, unit: 'm', dec: 2, aria: 'the distance from the pivot to the second child' });
  const FX = 700, FY = 360, S = 228, HALF = 2.6, KW = 0.26;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque');
    const w1 = m1.v * G, w2 = m2.v * G, t1 = r1.v * w1, t2 = -r2.v * w2, net = t1 + t2, Fp = w1 + w2;
    const a = (-7 * net / (Math.abs(net) + 240)) * RAD;                 /* the tilt: a positive net torque puts the first child down */
    const ca = Math.cos(a), sa = Math.sin(a);
    const on = (u) => ({ x: FX + u * S * ca, y: FY + u * S * sa });     /* a point u meters along the plank */
    fulcrum(ctx, FX, FY, 84);
    const L = on(-HALF), R = on(HALF);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 16; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(L.x, L.y); ctx.lineTo(R.x, R.y); ctx.stroke(); ctx.restore();
    /* the two children, their weights, and the torque each weight makes about the pivot */
    for (const [u, w, t, nm, face] of [[-r1.v, w1, t1, '1', 1], [r2.v, w2, t2, '2', -1]]) {
      const s = on(u), tip = s.y + 16 + w * KW;
      child(ctx, s.x, s.y - 8, PAL.ink, 0.86, face);
      arrow(ctx, s.x, s.y + 16, s.x, tip, fc, 5);
      text(ctx, 'w' + nm + ' = ' + fmt(w, 0) + ' N', s.x, tip + 24, fc, { size: 20, weight: 600, align: 'center' });
      const side = s.x > 1110 ? -1 : s.x < 300 ? 1 : -face;
      text(ctx, 'τ' + nm + ' = ' + plus(t, 0) + ' N·m', s.x + side * 18, (s.y + 16 + tip) / 2, tc, { size: 20, weight: 600, align: side > 0 ? 'left' : 'right' });
    }
    /* the supporting force at the pivot, which has no lever arm of its own */
    arrow(ctx, FX, FY - 6, FX, FY - 6 - Fp * KW, fc, 5);
    text(ctx, 'Fp = ' + fmt(Fp, 0) + ' N', FX + 16, FY - 22 - Fp * KW, fc, { size: 21, weight: 600 });
    dot(ctx, FX, FY, PAL.ink, true, 9);
    /* the two distances, measured from the pivot */
    hbracket(ctx, on(-r1.v).x, FX, 652, pc, 'r1 = ' + fmt(r1.v, 2) + ' m');
    hbracket(ctx, FX, on(r2.v).x, 652, pc, 'r2 = ' + fmt(r2.v, 2) + ' m');
    const bal = (r1.v * m1.v) / m2.v;
    headline(ctx, Math.abs(net) < 1
      ? 'both torques come to ' + fmt(t1, 0) + ' N·m, one counterclockwise and one clockwise, so the seesaw balances'
      : 'the torques are ' + fmt(t1, 0) + ' and ' + fmt(-t2, 0) + ' N·m, so a net ' + fmt(Math.abs(net), 0) + ' N·m takes the ' + (net > 0 ? 'first' : 'second') + ' child down');
    readout(d.readout, `\\text{net}\\;\\ktau = \\ktauone + \\ktautwo = \\krone\\kwone - \\krtwo\\kwtwo = ${fmt(t1, 1)} - ${fmt(Math.abs(t2), 1)} = ${num(net, 1)}\\ \\text{N}\\cdot\\text{m}`,
      'For these two masses the seesaw balances when r₂ = r₁m₁/m₂ = ' + fmt(bal, 2) + ' m, so the heavier child sits closer to the pivot. The first condition then gives the supporting force, Fp = w₁ + w₂ = ' + fmt(Fp, 0) + ' N, and the pivot makes no torque of its own because its lever arm is zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the net torque about any point. The section says in one sentence
   that if the second condition holds about one pivot it holds about every
   other, and never draws it. Here the torques of the balanced seesaw are
   taken about a point the reader slides along the plank: all three change
   and their sum stays at zero. Still: it answers its sliders and nothing
   else.
===================================================================== */
(function () {
  const d = sim('sim-any-pivot', 770);
  const ds = ctl(d.controls, { label: '\\text{the pivot}', cls: 'position', min: -2.5, max: 2.5, step: 0.05, value: 0, unit: 'm', dec: 2, aria: 'the point the torques are taken about, measured from the fulcrum' });
  const ms = ctl(d.controls, { label: 'm_1', cls: '', min: 20, max: 40, step: 0.5, value: 26, unit: 'kg', dec: 1, aria: 'the mass of the first child' });
  const rs = ctl(d.controls, { label: '\\krone', cls: 'position', min: 0.6, max: 2, step: 0.05, value: 1.6, unit: 'm', dec: 2, aria: 'the distance from the fulcrum to the first child' });
  const M2 = 32, FX = 700, FY = 300, S = 228, HALF = 2.6, KW = 0.2, KT = 0.13;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque');
    const w1 = ms.v * G, w2 = M2 * G, rr2 = (rs.v * ms.v) / M2, Fp = w1 + w2, p = ds.v;
    const t1 = (rs.v + p) * w1, t2 = -(rr2 - p) * w2, tp = -p * Fp, net = t1 + t2 + tp;
    const X = (u) => FX + u * S;
    fulcrum(ctx, FX, FY, 76);
    line(ctx, X(-HALF), FY, X(HALF), FY, PAL.ink, 16);
    /* the three forces on a seesaw that balances by construction */
    for (const [u, w, nm, face] of [[-rs.v, w1, '1', 1], [rr2, w2, '2', -1]]) {
      child(ctx, X(u), FY - 8, PAL.ink, 0.78, face);
      arrow(ctx, X(u), FY + 14, X(u), FY + 14 + w * KW, fc, 5);
      const side = X(u) > 1110 ? -1 : X(u) < 300 ? 1 : -face;
      text(ctx, 'w' + nm + ' = ' + fmt(w, 0) + ' N', X(u) + side * 16, FY + 26 + w * KW, fc, { size: 20, weight: 600, align: side > 0 ? 'left' : 'right' });
    }
    arrow(ctx, FX, FY - 6, FX, FY - 6 - Fp * KW, fc, 5);
    text(ctx, 'Fp = ' + fmt(Fp, 0) + ' N', FX + 16, FY - 22 - Fp * KW, fc, { size: 21, weight: 600 });
    /* the point the torques are taken about */
    line(ctx, X(p), 116, X(p), 452, pc, 3, [10, 10]);
    dot(ctx, X(p), FY, pc, true, 11);
    text(ctx, p === 0 ? 'the torques are taken about the fulcrum' : 'the torques are taken ' + fmt(Math.abs(p), 2) + ' m ' + (p > 0 ? 'right' : 'left') + ' of the fulcrum',
      X(p), 92, pc, { size: 20, weight: 600, align: X(p) > 1060 ? 'right' : X(p) < 340 ? 'left' : 'center', bg: alpha(PAL.panel, 0.85) });
    /* the lever arm each force has about that point */
    const arms = [[X(-rs.v), 470, Math.abs(rs.v + p)], [X(rr2), 506, Math.abs(rr2 - p)], [FX, 542, Math.abs(p)]];
    for (const [x, y, v] of arms) if (Math.abs(x - X(p)) > 6) hbracket(ctx, Math.min(x, X(p)), Math.max(x, X(p)), y, pc, fmt(v, 2) + ' m');
    /* the three torques and their sum, as signed bars from a zero line */
    const y0 = 596, bars = [['τ1', t1], ['τ2', t2], ['τp', tp], ['net τ', net]];
    line(ctx, FX, y0 - 26, FX, y0 + 3 * 40 + 26, PAL.muted, 2);
    bars.forEach(([nm, v], i) => {
      const y = y0 + i * 40, w = eps(v, 1) * KT, last = i === 3;
      ctx.save(); ctx.fillStyle = alpha(tc, last ? 0.55 : 0.3); ctx.fillRect(FX, y - 14, w, 28); ctx.restore();
      line(ctx, FX + w, y - 14, FX + w, y + 14, tc, 3);
      text(ctx, nm, 200, y, last ? PAL.ink : PAL.muted, { size: 20, weight: last ? 600 : 400 });
      text(ctx, num(v, 1) + ' N·m', 290, y, tc, { size: 20, weight: 600 });
    });
    headline(ctx, p === 0
      ? 'about the fulcrum the supporting force has no lever arm, and the two weights make ' + num(t1, 0) + ' and ' + num(t2, 0) + ' N·m'
      : 'about a point ' + fmt(Math.abs(p), 2) + ' m ' + (p > 0 ? 'right' : 'left') + ' of the fulcrum the torques are ' + num(t1, 0) + ', ' + num(t2, 0) + ' and ' + num(tp, 0) + ' N·m');
    readout(d.readout, `\\text{net}\\;\\ktau = \\ktauone + \\ktautwo + \\tau_{\\text{p}} = ${num(t1, 1)} ${t2 < 0 ? '-' : '+'} ${fmt(Math.abs(eps(t2, 1)), 1)} ${tp < 0 ? '-' : '+'} ${fmt(Math.abs(eps(tp, 1)), 1)} = ${num(net, 1)}\\ \\text{N}\\cdot\\text{m}`,
      'Move the point anywhere along the plank, or past its ends, and the sum comes back to zero every time. That is why the pivot may be chosen to make the work easy, and why the supporting force can be found from torques alone once the point is taken somewhere other than the fulcrum itself.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (unnumbered): the five forces of the second AP item. A faithful
   copy of the drawing the question refers to: no sliders, and still, since
   the object is anchored and nothing in the question moves.
===================================================================== */
(function () {
  const d = sim('fig-forces', 580);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force');
    /* the anchored object */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.14); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(370, 400);
    ctx.bezierCurveTo(332, 344, 380, 300, 462, 292);
    ctx.bezierCurveTo(560, 282, 662, 252, 760, 236);
    ctx.bezierCurveTo(862, 220, 962, 240, 1002, 292);
    ctx.bezierCurveTo(1034, 334, 1022, 386, 980, 400);
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the point the object is anchored at */
    dot(ctx, 760, 330, PAL.ink, true, 10);
    text(ctx, 'P', 726, 332, PAL.ink, { size: 24, weight: 600, align: 'right' });
    /* the five forces, all of the same magnitude */
    const five = [['A', 690, 118, 690, 250, 690, 92], ['B', 1016, 344, 1156, 344, 1170, 312],
      ['C', 764, 404, 764, 536, 764, 562], ['D', 902, 538, 902, 406, 902, 562],
      ['E', 258, 512, 356, 414, 234, 534]];
    for (const [nm, x1, y1, x2, y2, lx, ly] of five) {
      arrow(ctx, x1, y1, x2, y2, fc, 5);
      text(ctx, nm, lx, ly, fc, { size: 24, weight: 600, align: 'center' });
    }
    headline(ctx, 'five forces of equal magnitude applied to an object that is anchored at the point P');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
