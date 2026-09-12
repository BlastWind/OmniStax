/* Figures for section 8.6 Collisions of Point Masses in Two Dimensions.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, axes, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- shared helpers ---------- */
const RAD = Math.PI / 180, TAU = 2 * Math.PI;
const sgn = (v) => (v < 0 ? '−' : '');
/* a signed number with a proper minus sign, since fmt writes a hyphen */
const num = (v, d) => sgn(v) + fmt(Math.abs(v), d);
/* the model clock: the incoming object travels for TA, then both travel for TB */
const TA = 1.6, TB = 1.2, TTOT = TA + TB;

/* a puck, a ball or a nucleus, centred on (x, y) */
function disc(ctx, x, y, r, color, filled) {
  ctx.save(); ctx.lineWidth = 4; ctx.strokeStyle = color; ctx.fillStyle = filled ? color : PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the radius that shows a mass without swamping the scene */
const rad = (m) => Math.max(11, Math.min(26, 15 * Math.cbrt(m / 0.25)));
/* an angle arc at (x, y) from the x-axis round to th degrees, its label beyond the arc */
function angleArc(ctx, x, y, r, th, label, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, 0, -th * RAD, th > 0); ctx.stroke(); ctx.restore();
  const a = (th / 2) * RAD;
  text(ctx, label, x + (r + 34) * Math.cos(a), y - (r + 34) * Math.sin(a), color, { size: 20, weight: 600, align: 'center' });
}
/* one bar of a ledger, growing right from (x, y) */
function bar(ctx, x, y, w, h, color, a) {
  ctx.save(); ctx.fillStyle = alpha(color, a); ctx.strokeStyle = color; ctx.lineWidth = 2.5;
  const l = Math.min(x, x + w), ww = Math.abs(w);
  ctx.fillRect(l, y - h / 2, ww, h); ctx.strokeRect(l, y - h / 2, ww, h); ctx.restore();
}

/* =====================================================================
   FIGURE 8.10: the two-dimensional collision and the coordinate system.
   One object slides in along the x-axis and strikes another at rest; the
   reader sets the two scattering angles and the conservation equations
   give the two final speeds. The ledger beside the scene adds the
   components up. The collision takes time, so the figure runs it once
   per loop and takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-scatter', 700);
  const M1 = 0.250;                                   /* the incoming mass, as in Example 8.7 */
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 4, step: 0.05, value: 2, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed of the incoming object' });
  const t1 = ctl(d.controls, { label: '\\theta_1', cls: '', min: 10, max: 80, step: 0.5, value: 45, unit: '°', dec: 1, onInput: reset, aria: 'angle of the incoming object after the collision' });
  const t2 = ctl(d.controls, { label: '\\theta_2', cls: '', min: -80, max: -10, step: 0.5, value: -48.5, unit: '°', dec: 1, onInput: reset, aria: 'angle of the struck object after the collision' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.1, max: 1, step: 0.005, value: 0.4, unit: 'kg', dec: 3, onInput: reset, aria: 'mass of the struck object' });
  /* the two conservation equations, read for the two final speeds */
  function state() {
    const a1 = t1.v * RAD, a2 = t2.v * RAD, den = Math.sin(a2 - a1);
    const v1p = (v1.v * Math.sin(a2)) / den, v2p = (-(M1 / m2.v) * v1.v * Math.sin(a1)) / den;
    return { a1, a2, v1p, v2p, p1: M1 * v1.v, p1p: M1 * v1p, p2p: m2.v * v2p };
  }
  const cy = cycle(() => TTOT, 1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), tau = cy.now(), hit = tau >= TA;
    const OX = 430, OY = 370, R = 180, cm = C('momentum');
    const S = R / Math.max(v1.v * TA, s.v1p * TB, s.v2p * TB, 1e-6);
    const pScale = 75 / Math.max(s.p1, s.p1p, s.p2p, 1e-6);
    /* the axes the section chooses: x along the incoming velocity */
    line(ctx, OX - 260, OY, OX + 250, OY, PAL.muted, 2);
    text(ctx, 'x', OX + 262, OY, PAL.ink, { size: 22, weight: 600 });
    line(ctx, OX, OY + 210, OX, OY - 230, PAL.muted, 2);
    text(ctx, 'y', OX, OY - 250, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* the two directions the reader has set */
    line(ctx, OX, OY, OX + 230 * Math.cos(s.a1), OY - 230 * Math.sin(s.a1), PAL.rule, 2, [10, 10]);
    line(ctx, OX, OY, OX + 230 * Math.cos(s.a2), OY - 230 * Math.sin(s.a2), PAL.rule, 2, [10, 10]);
    angleArc(ctx, OX, OY, 64, t1.v, 'θ₁ = ' + fmt(t1.v, 1) + '°', PAL.ink);
    angleArc(ctx, OX, OY, 96, t2.v, 'θ₂ = ' + num(t2.v, 1) + '°', PAL.ink);
    /* where each object is, and the momentum it carries */
    const r1 = rad(M1), r2 = rad(m2.v);
    if (!hit) {
      const x = OX - (TA - tau) * v1.v * S;
      disc(ctx, x, OY, r1, PAL.ink, true);
      arrow(ctx, x, OY, x + s.p1 * pScale, OY, cm, 5);
      text(ctx, 'p₁ = ' + fmt(s.p1, 3), x + s.p1 * pScale + 10, OY - 26, cm, { size: 20, weight: 600 });
      disc(ctx, OX, OY, r2, PAL.muted, false);
      text(ctx, 'at rest', OX + r2 + 12, OY + 34, PAL.muted, { size: 18 });
    } else {
      const q = tau - TA;
      const x1 = OX + s.v1p * q * S * Math.cos(s.a1), y1 = OY - s.v1p * q * S * Math.sin(s.a1);
      const x2 = OX + s.v2p * q * S * Math.cos(s.a2), y2 = OY - s.v2p * q * S * Math.sin(s.a2);
      disc(ctx, x1, y1, r1, PAL.ink, true);
      arrow(ctx, x1, y1, x1 + s.p1p * pScale * Math.cos(s.a1), y1 - s.p1p * pScale * Math.sin(s.a1), cm, 5);
      text(ctx, "p′₁ = " + fmt(s.p1p, 3), x1 + s.p1p * pScale * Math.cos(s.a1) + 12, y1 - s.p1p * pScale * Math.sin(s.a1) - 20, cm, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
      disc(ctx, x2, y2, r2, PAL.ink, false);
      arrow(ctx, x2, y2, x2 + s.p2p * pScale * Math.cos(s.a2), y2 - s.p2p * pScale * Math.sin(s.a2), cm, 5);
      text(ctx, "p′₂ = " + fmt(s.p2p, 3), x2 + s.p2p * pScale * Math.cos(s.a2) + 12, y2 - s.p2p * pScale * Math.sin(s.a2) + 24, cm, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, 'm₁ = ' + fmt(M1, 3) + ' kg', 150, 640, PAL.ink, { size: 19 });
    text(ctx, 'm₂ = ' + fmt(m2.v, 3) + ' kg', 150, 668, PAL.ink, { size: 19 });
    /* the ledger: the components along each axis, before the collision and after */
    const p1x = s.p1, ax1 = s.p1p * Math.cos(s.a1), ax2 = s.p2p * Math.cos(s.a2);
    const ay1 = s.p1p * Math.sin(s.a1), ay2 = s.p2p * Math.sin(s.a2);
    const K = 400 / Math.max(p1x, ax1 + ax2, 1e-6), Z = 900;
    text(ctx, 'momentum along x (kg·m/s)', Z - 60, 196, cm, { size: 19, weight: 600 });
    text(ctx, 'before', Z - 14, 250, PAL.muted, { size: 18, align: 'right' });
    bar(ctx, Z, 250, p1x * K, 28, cm, 0.55);
    text(ctx, fmt(p1x, 3), Z + p1x * K + 12, 250, cm, { size: 19, weight: 600 });
    text(ctx, 'after', Z - 14, 306, PAL.muted, { size: 18, align: 'right' });
    bar(ctx, Z, 306, ax1 * K, 28, cm, 0.55);
    bar(ctx, Z + ax1 * K, 306, ax2 * K, 28, cm, 0.22);
    text(ctx, fmt(ax1, 3), Z + (ax1 * K) / 2, 344, cm, { size: 17, align: 'center' });
    text(ctx, fmt(ax2, 3), Z + ax1 * K + (ax2 * K) / 2, 344, cm, { size: 17, align: 'center' });
    const Ky = 190 / Math.max(Math.abs(ay1), 1e-6), Zy = 1080;
    text(ctx, 'momentum along y (kg·m/s)', Z - 60, 440, cm, { size: 19, weight: 600 });
    line(ctx, Zy, 466, Zy, 566, PAL.muted, 2);
    text(ctx, 'before', Zy - 274, 494, PAL.muted, { size: 18, align: 'right' });
    text(ctx, '0', Zy + 12, 494, PAL.muted, { size: 19 });
    text(ctx, 'after', Zy - 274, 546, PAL.muted, { size: 18, align: 'right' });
    bar(ctx, Zy, 546, ay1 * Ky, 28, cm, 0.55);
    bar(ctx, Zy, 546, ay2 * Ky, 28, cm, 0.22);
    text(ctx, '+' + fmt(ay1, 3), Zy + ay1 * Ky + 12, 546, cm, { size: 18, weight: 600 });
    text(ctx, num(ay2, 3), Zy + ay2 * Ky - 12, 546, cm, { size: 18, weight: 600, align: 'right' });
    headline(ctx, hit
      ? 'the ' + fmt(M1, 3) + ' kg object leaves at ' + fmt(s.v1p, 2) + ' m/s and the ' + fmt(m2.v, 3) + ' kg object at ' + fmt(s.v2p, 2) + ' m/s, and the two momenta along y still cancel'
      : 'all of the momentum is along x, ' + fmt(s.p1, 3) + ' kg·m/s, and there is none along y');
    readout(d.readout,
      `m_1\\kvone = ${fmt(s.p1, 3)}\\ \\text{kg}\\cdot\\text{m/s} = m_1\\kvoneprime\\cos\\theta_1 + m_2\\kvtwoprime\\cos\\theta_2 = ${fmt(ax1, 3)} + ${fmt(ax2, 3)}`,
      'Along the y-axis there was no momentum before the collision and there is none after it: 0 = ' + num(ay1, 3) + ' + ' + num(ay2, 3) + ' kg·m/s, so the two objects must leave on opposite sides of the axis.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TTOT / 5), draw });
})();

/* =====================================================================
   FIGURE 8.11: the collision in a dark room of Example 8.7. The angle
   and the speed at which the first object emerges, together with the
   mass of the object it struck, give the velocity of that object, which
   is drawn dashed inside the room. The collision takes time, so the
   figure runs it once per loop and takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-dark-room', 700);
  const M1 = 0.250;
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 4, step: 0.05, value: 2, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed going in' });
  const v1p = ctl(d.controls, { label: '\\kvoneprime', cls: 'velocity', min: 0.5, max: 3, step: 0.05, value: 1.5, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed coming out' });
  const t1 = ctl(d.controls, { label: '\\theta_1', cls: '', min: 10, max: 80, step: 0.5, value: 45, unit: '°', dec: 1, onInput: reset, aria: 'angle it comes out at' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.1, max: 1, step: 0.005, value: 0.4, unit: 'kg', dec: 3, onInput: reset, aria: 'mass of the unseen object' });
  /* the ratio of the two conservation equations gives the angle, and either gives the speed */
  function state() {
    const a1 = t1.v * RAD;
    const a2 = Math.atan2(-v1p.v * Math.sin(a1), v1.v - v1p.v * Math.cos(a1));
    const v2p = (M1 * v1p.v * Math.sin(a1)) / (-m2.v * Math.sin(a2));
    const tan = (v1p.v * Math.sin(a1)) / (v1p.v * Math.cos(a1) - v1.v);
    const ke = 0.5 * M1 * v1.v * v1.v, kep = 0.5 * M1 * v1p.v * v1p.v + 0.5 * m2.v * v2p * v2p;
    return { a1, a2, v2p, tan, ke, kep, deg: (a2 / RAD + 360) % 360 };
  }
  const cy = cycle(() => TTOT, 1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), tau = cy.now(), hit = tau >= TA;
    const OX = 700, OY = 380, R = 200, cv = C('velocity');
    const vmax = Math.max(v1.v, v1p.v, s.v2p, 1e-6);
    const S = R / Math.max(v1.v * TA, v1p.v * TB, s.v2p * TB, 1e-6), K = 85 / vmax;
    /* the dark room */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.13); ctx.fillRect(OX - 140, OY - 150, 280, 280); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.strokeRect(OX - 140, OY - 150, 280, 280); ctx.restore();
    text(ctx, 'a dark room', OX, OY - 168, PAL.muted, { size: 19, align: 'center' });
    line(ctx, OX - 400, OY, OX + 330, OY, PAL.rule, 2, [10, 10]);
    text(ctx, 'x', OX + 342, OY, PAL.ink, { size: 22, weight: 600 });
    line(ctx, OX, OY + 190, OX, OY - 230, PAL.rule, 2, [10, 10]);
    text(ctx, 'y', OX, OY - 250, PAL.ink, { size: 22, weight: 600, align: 'center' });
    line(ctx, OX, OY, OX + 300 * Math.cos(s.a1), OY - 300 * Math.sin(s.a1), PAL.rule, 2, [10, 10]);
    angleArc(ctx, OX, OY, 70, t1.v, 'θ₁ = ' + fmt(t1.v, 1) + '°', PAL.ink);
    angleArc(ctx, OX, OY, 110, s.a2 / RAD, 'θ₂ = ' + fmt(s.deg, 1) + '°', PAL.ink);
    const r1 = rad(M1), r2 = rad(m2.v);
    if (!hit) {
      const x = OX - (TA - tau) * v1.v * S;
      disc(ctx, x, OY, r1, PAL.ink, true);
      arrow(ctx, x, OY, x + v1.v * K, OY, cv, 5);
      text(ctx, 'v₁ = ' + fmt(v1.v, 2) + ' m/s', x + v1.v * K + 10, OY - 26, cv, { size: 20, weight: 600 });
      disc(ctx, OX, OY, r2, PAL.muted, false);
      text(ctx, 'something at rest, unseen', OX + 8, OY + r2 + 30, PAL.muted, { size: 18, align: 'center' });
    } else {
      const q = tau - TA;
      const x1 = OX + v1p.v * q * S * Math.cos(s.a1), y1 = OY - v1p.v * q * S * Math.sin(s.a1);
      const x2 = OX + s.v2p * q * S * Math.cos(s.a2), y2 = OY - s.v2p * q * S * Math.sin(s.a2);
      disc(ctx, x1, y1, r1, PAL.ink, true);
      arrow(ctx, x1, y1, x1 + v1p.v * K * Math.cos(s.a1), y1 - v1p.v * K * Math.sin(s.a1), cv, 5);
      text(ctx, "v′₁ = " + fmt(v1p.v, 2) + ' m/s', x1 + v1p.v * K * Math.cos(s.a1) + 12, y1 - v1p.v * K * Math.sin(s.a1) - 20, cv, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
      ctx.save(); ctx.setLineDash([9, 9]);
      disc(ctx, x2, y2, r2, PAL.muted, false);
      ctx.restore();
      arrow(ctx, x2, y2, x2 + s.v2p * K * Math.cos(s.a2), y2 - s.v2p * K * Math.sin(s.a2), alpha(cv, 0.75), 5);
      text(ctx, "v′₂ = " + fmt(s.v2p, 3) + ' m/s', x2 + s.v2p * K * Math.cos(s.a2) + 12, y2 - s.v2p * K * Math.sin(s.a2) + 24, cv, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, 'm₁ = ' + fmt(M1, 3) + ' kg', 120, 620, PAL.ink, { size: 19 });
    text(ctx, 'm₂ = ' + fmt(m2.v, 3) + ' kg, the one mass you know', 120, 650, PAL.ink, { size: 19 });
    headline(ctx, hit
      ? 'the unseen ' + fmt(m2.v, 3) + ' kg object leaves at ' + fmt(s.v2p, 3) + ' m/s and ' + fmt(s.deg, 1) + '°, and the internal kinetic energy is ' + fmt(s.kep, 3) + ' J against ' + fmt(s.ke, 3) + ' J before'
      : 'the ' + fmt(M1, 3) + ' kg object slides in at ' + fmt(v1.v, 2) + ' m/s, carrying all ' + fmt(s.ke, 3) + ' J of the internal kinetic energy');
    const diff = s.kep - s.ke;
    readout(d.readout,
      `\\tan\\theta_2 = \\frac{\\kvoneprime\\sin\\theta_1}{\\kvoneprime\\cos\\theta_1 - \\kvone} = ${num(s.tan, 3)},\\quad \\theta_2 = ${fmt(s.deg, 1)}^\\circ,\\quad \\kvtwoprime = -\\frac{m_1}{m_2}\\kvoneprime\\frac{\\sin\\theta_1}{\\sin\\theta_2} = ${fmt(s.v2p, 3)}\\ \\text{m/s}`,
      Math.abs(diff) < 0.002
        ? 'The internal kinetic energy is ' + fmt(s.ke, 3) + ' J before the collision and the same after it, so this collision is elastic.'
        : diff < 0
          ? 'The internal kinetic energy falls from ' + fmt(s.ke, 3) + ' J before the collision to ' + fmt(s.kep, 3) + ' J after it, so this collision is inelastic.'
          : 'The internal kinetic energy rises from ' + fmt(s.ke, 3) + ' J before the collision to ' + fmt(s.kep, 3) + ' J after it, so energy was released inside the collision.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TTOT / 5), draw });
})();

/* =====================================================================
   SIM: two equal masses on a pool table. Momentum alone fixes the two
   final speeds once the two angles are set, so the internal kinetic
   energy after the collision is fixed as well; the graph follows it as
   the angle of separation opens and closes, and it returns to its value
   before the collision only at ninety degrees. The shot takes time, so
   the figure runs it once per loop and takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-billiards', 900);
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 2, max: 10, step: 0.25, value: 6, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed of the cue ball' });
  const t1 = ctl(d.controls, { label: '\\theta_1', cls: '', min: 10, max: 45, step: 1, value: 30, unit: '°', dec: 0, onInput: reset, aria: 'angle of the cue ball after the collision' });
  const t2 = ctl(d.controls, { label: '\\theta_2', cls: '', min: -80, max: -10, step: 1, value: -60, unit: '°', dec: 0, onInput: reset, aria: 'angle of the struck ball after the collision' });
  /* with equal masses, momentum alone gives both speeds from the two angles */
  const speeds = (d1, d2, u) => {
    const a1 = d1 * RAD, a2 = d2 * RAD, den = Math.sin(a2 - a1);
    return { v1p: (u * Math.sin(a2)) / den, v2p: (-u * Math.sin(a1)) / den };
  };
  /* the internal kinetic energy after the collision, in units of the mass, against the one before it */
  const ratio = (d1, d2) => { const s = speeds(d1, d2, 1); return s.v1p * s.v1p + s.v2p * s.v2p; };
  const cy = cycle(() => TTOT, 1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), hit = tau >= TA, cv = C('velocity'), ce = C('energy');
    const s = speeds(t1.v, t2.v, v1.v), sep = t1.v - t2.v;
    const ke = 0.5 * v1.v * v1.v, kep = 0.5 * (s.v1p * s.v1p + s.v2p * s.v2p);
    const extra = s.v1p * s.v2p * Math.cos(sep * RAD);
    const OX = 540, OY = 300, R = 170;
    const S = R / Math.max(v1.v * TA, s.v1p * TB, s.v2p * TB, 1e-6);
    const K = 60 / Math.max(v1.v, s.v1p, s.v2p, 1e-6);
    /* the table */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(90, 110, 1220, 450); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.strokeRect(90, 110, 1220, 450); ctx.restore();
    line(ctx, 110, OY, 1290, OY, PAL.rule, 2, [10, 10]);
    line(ctx, OX, OY, OX + 260 * Math.cos(t1.v * RAD), OY - 260 * Math.sin(t1.v * RAD), PAL.rule, 2, [10, 10]);
    line(ctx, OX, OY, OX + 260 * Math.cos(t2.v * RAD), OY - 260 * Math.sin(t2.v * RAD), PAL.rule, 2, [10, 10]);
    angleArc(ctx, OX, OY, 62, t1.v, 'θ₁ = ' + fmt(t1.v, 0) + '°', PAL.ink);
    angleArc(ctx, OX, OY, 94, t2.v, 'θ₂ = ' + num(t2.v, 0) + '°', PAL.ink);
    if (!hit) {
      const x = OX - (TA - tau) * v1.v * S;
      disc(ctx, x, OY, 20, PAL.ink, true);
      arrow(ctx, x, OY, x + v1.v * K, OY, cv, 5);
      text(ctx, 'v₁ = ' + fmt(v1.v, 2) + ' m/s', x + v1.v * K + 10, OY - 28, cv, { size: 20, weight: 600 });
      disc(ctx, OX, OY, 20, PAL.ink, false);
      text(ctx, 'at rest', OX + 30, OY + 36, PAL.muted, { size: 18 });
    } else {
      const q = tau - TA, a1 = t1.v * RAD, a2 = t2.v * RAD;
      const x1 = OX + s.v1p * q * S * Math.cos(a1), y1 = OY - s.v1p * q * S * Math.sin(a1);
      const x2 = OX + s.v2p * q * S * Math.cos(a2), y2 = OY - s.v2p * q * S * Math.sin(a2);
      disc(ctx, x1, y1, 20, PAL.ink, true);
      arrow(ctx, x1, y1, x1 + s.v1p * K * Math.cos(a1), y1 - s.v1p * K * Math.sin(a1), cv, 5);
      text(ctx, "v′₁ = " + fmt(s.v1p, 2) + ' m/s', x1 + s.v1p * K * Math.cos(a1) + 12, y1 - s.v1p * K * Math.sin(a1) - 20, cv, { size: 20, weight: 600, bg: alpha(PAL.soft, 0.9) });
      disc(ctx, x2, y2, 20, PAL.ink, false);
      arrow(ctx, x2, y2, x2 + s.v2p * K * Math.cos(a2), y2 - s.v2p * K * Math.sin(a2), cv, 5);
      text(ctx, "v′₂ = " + fmt(s.v2p, 2) + ' m/s', x2 + s.v2p * K * Math.cos(a2) + 12, y2 - s.v2p * K * Math.sin(a2) + 24, cv, { size: 20, weight: 600, bg: alpha(PAL.soft, 0.9) });
    }
    text(ctx, 'the two balls have the same mass m', 110, 592, PAL.ink, { size: 19 });
    text(ctx, 'angle of separation θ₁ − θ₂ = ' + fmt(sep, 0) + '°', 110, 620, PAL.ink, { size: 19, weight: 600 });
    /* the graph: the internal kinetic energy after the collision against the angle of separation */
    const box = { l: 300, r: 1120, t: 670, b: 830 };
    const g = axes(ctx, box, [10, 170], [0.5, 1.5], { xl: 'angle of separation θ₁ − θ₂ (°)', yl: 'KE′int / KEint', yc: ce, nx: 4, ny: 2, fy: (v) => fmt(v, 1) });
    line(ctx, box.l, g.Y(1), box.r, g.Y(1), ce, 2.5, [10, 10]);
    text(ctx, 'the internal kinetic energy before the collision', box.l + 12, g.Y(1) - 18, ce, { size: 17 });
    line(ctx, g.X(90), box.t, g.X(90), box.b, PAL.muted, 2, [4, 8]);
    text(ctx, '90°', g.X(90), box.t - 16, PAL.ink, { size: 18, weight: 600, align: 'center' });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, (x) => ratio(t1.v, t1.v - x), t1.v + 10, t1.v + 80, g.X, g.Y, ce, 5, 140);
    ctx.restore();
    dot(ctx, g.X(sep), g.Y(Math.max(0.5, Math.min(1.5, kep / ke))), PAL.ink, true, 9);
    headline(ctx, Math.abs(sep - 90) < 0.5
      ? 'the balls separate at 90° · the cue ball leaves at ' + fmt(s.v1p, 2) + ' m/s and the struck ball at ' + fmt(s.v2p, 2) + ' m/s'
      : 'the balls separate at ' + fmt(sep, 0) + '° · the internal kinetic energy after the collision is ' + fmt(kep / ke, 2) + ' times what it was before');
    readout(d.readout,
      `\\tfrac{1}{2}m{\\kvone}^2 = \\tfrac{1}{2}m{\\kvoneprime}^2 + \\tfrac{1}{2}m{\\kvtwoprime}^2 + m\\kvoneprime\\kvtwoprime\\cos(\\theta_1 - \\theta_2)\\qquad ${fmt(ke, 1)}\\,m = ${fmt(0.5 * s.v1p * s.v1p, 1)}\\,m + ${fmt(0.5 * s.v2p * s.v2p, 1)}\\,m + ${num(extra, 1)}\\,m`,
      Math.abs(extra) < 0.05
        ? 'The last term is zero here, so the internal kinetic energy after the collision, ' + fmt(kep, 1) + 'm J, is exactly what it was before, and only at this angle of separation can two equal masses collide elastically and both move afterwards.'
        : 'The last term comes to ' + num(extra, 1) + 'm J here, so the internal kinetic energy after the collision is ' + fmt(kep, 1) + 'm J against ' + fmt(ke, 1) + 'm J before it, and the collision is not elastic.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TTOT / 5), draw });
})();
};
