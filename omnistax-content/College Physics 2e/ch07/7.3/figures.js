/* Figures for section 7.3 Gravitational Potential Energy. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, nice, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const num = (x, d) => commas(fmt(x, d));
/* a value in scientific form for the readout, as the book writes it */
function sci(v, d = 2) { if (Math.abs(v) < 1e-9) return '0'; const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times10^{${e}}`; }
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sciPlain(v, d = 2) { if (Math.abs(v) < 1e-9) return '0'; const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)} × 10${String(e).split('').map((c) => SUP[c]).join('')}`; }

/* a vertical energy bar: an outline of the full amount, filled to `val` */
function ebar(ctx, x, y0, w, full, val, cap, label, valText) {
  const h = cap * (full > 0 ? Math.min(1, val / full) : 0);
  ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.7); ctx.fillRect(x, y0 - h, w, h); ctx.restore();
  ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; ctx.strokeRect(x, y0 - cap, w, cap); ctx.restore();
  text(ctx, label, x + w / 2, y0 + 24, C('energy'), { size: 18, weight: 600, align: 'center' });
  text(ctx, valText, x + w / 2, y0 + 48, C('energy'), { size: 17, align: 'center' });
}

/* ---------- sprites, in ink, each under twelve path commands ---------- */
/* a cuckoo-clock case hanging on the wall, its roof at (x, y) */
function clockCase(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(x - 96, y + 34); ctx.lineTo(x, y); ctx.lineTo(x + 96, y + 34); ctx.lineTo(x + 70, y + 34);
  ctx.lineTo(x + 70, y + 118); ctx.lineTo(x - 70, y + 118); ctx.lineTo(x - 70, y + 34); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y + 74, 24, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x, y + 74); ctx.lineTo(x, y + 58); ctx.moveTo(x, y + 74); ctx.lineTo(x + 14, y + 80); ctx.stroke(); ctx.restore();
}
/* the pine-cone weight of a cuckoo clock, hanging with its top at (x, y) */
function coneWeight(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + 17, y + 16); ctx.lineTo(x + 13, y + 48); ctx.lineTo(x, y + 64);
  ctx.lineTo(x - 13, y + 48); ctx.lineTo(x - 17, y + 16); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a crate resting with its base centred on (x, y) */
function crate(ctx, x, y, w, h, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - w / 2, y - h, w, h); ctx.strokeRect(x - w / 2, y - h, w, h);
  ctx.beginPath(); ctx.moveTo(x - w / 2, y - h); ctx.lineTo(x + w / 2, y); ctx.moveTo(x + w / 2, y - h); ctx.lineTo(x - w / 2, y); ctx.stroke(); ctx.restore();
}
/* a television set, its base centred on (x, y) */
function tv(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(-30, -46, 60, 42); ctx.strokeRect(-30, -46, 60, 42);
  ctx.beginPath(); ctx.moveTo(-14, -4); ctx.lineTo(-18, 0); ctx.lineTo(18, 0); ctx.lineTo(14, -4); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a standing or crouching person, feet at (x, y); crouch 0 stands, 1 is fully bent */
function person(ctx, x, y, color, crouch, fall) {
  const leg = 42 - 24 * crouch, torso = 52, head = y - leg - torso - 12;
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(x, head, 11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x, head + 11); ctx.lineTo(x, y - leg);
  ctx.moveTo(x, y - leg); ctx.lineTo(x - 16 - 8 * crouch, y); ctx.moveTo(x, y - leg); ctx.lineTo(x + 16 + 8 * crouch, y);
  const ay = fall ? head + 6 : head + 30;
  ctx.moveTo(x, head + 20); ctx.lineTo(x - 24, ay); ctx.moveTo(x, head + 20); ctx.lineTo(x + 24, ay); ctx.stroke(); ctx.restore();
}
/* a roller-coaster car centred on (x, y) and turned through `rot` radians */
function coasterCar(ctx, x, y, rot, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(-34, -6); ctx.lineTo(-30, -30); ctx.lineTo(26, -30); ctx.lineTo(34, -6); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.arc(6, -40, 9, 0, TAU); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(-20, 0, 8, 0, TAU); ctx.arc(20, 0, 8, 0, TAU); ctx.fill();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(-20, 0, 4, 0, TAU); ctx.arc(20, 0, 4, 0, TAU); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 7.5: the cuckoo-clock weight wound up and let down. The weight
   rises through h against a force equal to its weight and runs back
   down; the bar beside it fills and empties, and the graph beside the
   scene is PE_g against height. The winding takes time, so the figure
   loops and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-cuckoo', 620);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 2, step: 0.05, value: 0.5, unit: 'kg', dec: 3, onInput: reset, aria: 'mass of the weight' });
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0.2, max: 2, step: 0.05, value: 1, unit: 'm', dec: 2, onInput: reset, aria: 'height the weight is raised' });
  const cy = cycle(() => 2, 1.1);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), up = tau <= 1, f = up ? tau : 2 - tau;
    const E = m.v * G * h.v, PE = E * f;
    const floorY = 540, SC = 160, yw = floorY - f * h.v * SC;
    /* the scene */
    strip(ctx, 110, 700, floorY + 14, 26);
    clockCase(ctx, 340, 96, PAL.ink);
    line(ctx, 340, 214, 340, yw, PAL.muted, 3);
    coneWeight(ctx, 340, yw, PAL.ink);
    text(ctx, fmt(m.v, 3) + ' kg', 340, yw + 84, PAL.ink, { size: 19, weight: 600, align: 'center' });
    if (h.v * SC > 40) vbracket(ctx, 208, floorY, floorY - h.v * SC, C('position'), 'h = ' + fmt(h.v, 2) + ' m', -1);
    line(ctx, 190, floorY - h.v * SC, 360, floorY - h.v * SC, C('position'), 2, [8, 8]);
    if (up) { arrow(ctx, 428, yw + 30, 428, yw - 54, C('force'), 5); text(ctx, 'F = mg = ' + fmt(m.v * G, 2) + ' N', 444, yw - 18, C('force'), { size: 18, weight: 600 }); }
    else { arrow(ctx, 428, yw + 10, 428, yw + 94, PAL.muted, 5); text(ctx, 'the weight comes down', 444, yw + 54, PAL.muted, { size: 18 }); }
    ebar(ctx, 620, floorY, 62, E, PE, 330, 'PE_g', fmt(PE, 2) + ' J');
    /* the graph beside the vertical scene: PE_g against the height of the weight */
    const hr = nice(0, h.v, 4), Er = nice(0, E, 4);
    const box = { l: 890, r: 1330, t: 150, b: 480 };
    const { X, Y } = axes(ctx, box, [0, hr.hi], [0, Er.hi], { xl: 'height of the weight (m)', xc: C('position'), yl: 'PE_g (J)', yc: C('energy'), nx: hr.n, ny: Er.n, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 1) });
    line(ctx, X(0), Y(0), X(h.v), Y(E), C('energy'), 5);
    line(ctx, X(f * h.v), box.b, X(f * h.v), Y(PE), C('position'), 2, [4, 8]);
    dot(ctx, X(0), Y(0), C('energy'), false, 10);
    dot(ctx, X(f * h.v), Y(PE), C('energy'), true, 9);
    text(ctx, 'the slope is mg = ' + fmt(m.v * G, 2) + ' N', box.l + 16, box.t + 26, C('energy'), { size: 17, weight: 600 });
    headline(ctx, f < 0.02 ? 'the weight rests on the floor, where the clock has stored nothing yet'
      : f > 0.98 ? 'the weight is fully wound, ' + fmt(h.v, 2) + ' m up, and the mass-Earth system holds ' + fmt(E, 2) + ' J'
      : (up ? 'winding: ' : 'running: ') + 'the weight is ' + fmt(f * h.v, 2) + ' m up, so ' + fmt(PE, 2) + ' J of the ' + fmt(E, 2) + ' J is stored');
    readout(d.readout, `\\kdPEg = m\\kg\\kh = (${fmt(m.v, 3)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(h.v, 2)}\\ \\text{m}) = ${fmt(E, 2)}\\ \\text{J}`,
      'The work done in winding the weight up is stored in the mass-Earth system, and the clock spends it again as the weight comes down. Raising twice the mass, or raising it twice as far, stores twice the energy.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();

/* =====================================================================
   SIM: the ladder. Only differences in gravitational potential energy
   matter, so moving the level at which the energy is called zero
   changes every rung's value and leaves the climb between two rungs
   alone. Nothing travels: a still picture that answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-ladder', 660);
  const M = 20, RISE = 0.3, NR = 8;                           /* a 20-kg crate and eight rungs, 0.30 m apart */
  const a = ctl(d.controls, { label: '\\text{lower rung}', cls: '', min: 1, max: 7, step: 1, value: 1, unit: '', dec: 0, aria: 'lower rung' });
  const b = ctl(d.controls, { label: '\\text{upper rung}', cls: '', min: 2, max: 8, step: 1, value: 2, unit: '', dec: 0, aria: 'upper rung' });
  const z = ctl(d.controls, { label: '\\text{zero level}', cls: 'position', min: -0.9, max: 2.4, step: 0.1, value: 0, unit: 'm', dec: 1, aria: 'height at which the potential energy is called zero' });
  function draw() {
    const { ctx } = begin(d.c);
    const lo = Math.min(a.v, b.v), hi = Math.max(lo + 1, Math.max(a.v, b.v));
    const yLo = lo * RISE, yHi = hi * RISE, dPE = M * G * (yHi - yLo);
    const ground = 560, SC = 130, Yp = (met) => ground - met * SC;
    /* the scene: the ladder, its rungs labelled with the energy each one holds */
    strip(ctx, 120, 700, ground + 14, 26);
    line(ctx, 250, ground, 250, Yp(2.62), PAL.ink, 5); line(ctx, 400, ground, 400, Yp(2.62), PAL.ink, 5);
    for (let n = 1; n <= NR; n++) {
      const y = Yp(n * RISE), on = n === lo || n === hi;
      line(ctx, 250, y, 400, y, on ? C('position') : PAL.ink, on ? 5 : 3);
      text(ctx, fmt(M * G * (n * RISE - z.v), 1) + ' J', 424, y, on ? C('energy') : PAL.muted, { size: 17, weight: on ? 600 : 400 });
      text(ctx, String(n), 232, y, on ? C('position') : PAL.muted, { size: 17, align: 'right' });
    }
    crate(ctx, 325, Yp(yHi), 84, 56, PAL.ink);
    text(ctx, M + ' kg', 325, Yp(yHi) - 28, PAL.ink, { size: 18, weight: 600, align: 'center' });
    dot(ctx, 325, Yp(yLo), C('position'), false, 10);
    vbracket(ctx, 196, Yp(yLo), Yp(yHi), C('position'), 'h = ' + fmt(yHi - yLo, 2) + ' m', -1);
    line(ctx, 150, Yp(z.v), 700, Yp(z.v), C('energy'), 3, [10, 10]);
    text(ctx, 'PE_g = 0 here', 700, Yp(z.v) - 20, C('energy'), { size: 18, weight: 600, align: 'right' });
    /* the graph beside: the same straight line, shifted by the choice of zero */
    const lowM = -1, highM = 2.5;
    const Er = nice(M * G * (lowM - z.v), M * G * (highM - z.v), 5);
    const box = { l: 880, r: 1330, t: 150, b: 520 };
    const { X, Y } = axes(ctx, box, [lowM, highM], [Er.lo, Er.hi], { xl: 'height above the ground (m)', xc: C('position'), yl: 'PE_g (J)', yc: C('energy'), nx: 7, ny: Er.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    line(ctx, X(lowM), Y(M * G * (lowM - z.v)), X(highM), Y(M * G * (highM - z.v)), C('energy'), 5);
    dot(ctx, X(z.v), Y(0), C('energy'), false, 10);
    dot(ctx, X(yLo), Y(M * G * (yLo - z.v)), C('position'), true, 9);
    dot(ctx, X(yHi), Y(M * G * (yHi - z.v)), C('position'), true, 9);
    vbracket(ctx, X(yHi) + 34, Y(M * G * (yLo - z.v)), Y(M * G * (yHi - z.v)), C('energy'), fmt(dPE, 1) + ' J', 1);
    headline(ctx, 'the climb from rung ' + lo + ' to rung ' + hi + ' stores ' + fmt(dPE, 1) + ' J, wherever the zero is put');
    readout(d.readout, `\\kdPEg = m\\kg\\kh = (${fmt(M, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(yHi - yLo, 2)}\\ \\text{m}) = ${fmt(dPE, 1)}\\ \\text{J}`,
      'With the zero level at ' + fmt(z.v, 1) + ' m, rung ' + lo + ' holds ' + fmt(M * G * (yLo - z.v), 1) + ' J and rung ' + hi + ' holds ' + fmt(M * G * (yHi - z.v), 1) + ' J. Lower the zero by a metre and both grow by ' + fmt(M * G, 1) + ' J, while the climb between them is still ' + fmt(dPE, 1) + ' J, which is why the first two rungs are worth the same as the last two.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.6: the same television carried up the stairs and hoisted
   straight up. Both travel at the same speed along paths of different
   length, and their two energy bars arrive at the same height. The
   journey takes time, so the figure loops and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-paths', 640);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 5, max: 40, step: 1, value: 20, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the television' });
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 2, max: 12, step: 0.5, value: 6, unit: 'm', dec: 1, onInput: reset, aria: 'height of the landing' });
  const run = ctl(d.controls, { label: '\\text{run}', cls: '', min: 2, max: 14, step: 0.5, value: 6, unit: 'm', dec: 1, onInput: reset, aria: 'horizontal run of the staircase' });
  const L1 = () => run.v + h.v, L2 = () => h.v;
  const cy = cycle(() => L1(), 1.2);
  function reset() { cy.reset(); }
  /* where a walker is after travelling `s` along an eight-step staircase */
  function stairs(s) {
    const st = 8, dx = run.v / st, dy = h.v / st;
    let x = 0, y = 0, left = s;
    for (let i = 0; i < st; i++) {
      const a = Math.min(left, dx); x += a; left -= a; if (left <= 0) break;
      const c = Math.min(left, dy); y += c; left -= c; if (left <= 0) break;
    }
    return { x, y };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const s1 = Math.min(cy.now(), L1()), s2 = Math.min(cy.now(), L2());
    const SC = Math.min(560 / run.v, 320 / h.v);
    const ground = 540, x0 = 150, Yp = (met) => ground - met * SC, Xp = (met) => x0 + met * SC;
    const p1 = stairs(s1), pe1 = m.v * G * p1.y, pe2 = m.v * G * s2, full = m.v * G * h.v;
    strip(ctx, 110, 1160, ground + 14, 26);
    /* the staircase and the landing it reaches */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(Xp(0), Yp(0));
    for (let i = 0; i < 8; i++) { ctx.lineTo(Xp(((i + 1) * run.v) / 8), Yp((i * h.v) / 8)); ctx.lineTo(Xp(((i + 1) * run.v) / 8), Yp(((i + 1) * h.v) / 8)); }
    ctx.stroke(); ctx.restore();
    line(ctx, Xp(run.v), Yp(h.v), 1150, Yp(h.v), PAL.muted, 5);
    line(ctx, Xp(0), Yp(0), Xp(0), Yp(h.v), PAL.rule, 2, [8, 8]);
    vbracket(ctx, 116, Yp(0), Yp(h.v), C('position'), 'h = ' + fmt(h.v, 1) + ' m', 1);
    /* the pulley, its rope and the two sets */
    const px = 1040;
    dot(ctx, px, Yp(h.v) - 26, PAL.ink, false, 18);
    line(ctx, px - 18, Yp(h.v) - 26, px - 18, Yp(s2) - 52, PAL.ink, 3);
    line(ctx, px + 18, Yp(h.v) - 26, px + 18, Yp(0) - 20, PAL.ink, 3);
    F.runner(ctx, px + 46, Yp(0), PAL.ink, 0);
    tv(ctx, px - 18, Yp(s2), PAL.ink);
    F.runner(ctx, Xp(p1.x), Yp(p1.y), PAL.ink, s1 * 3);
    tv(ctx, Xp(p1.x), Yp(p1.y) - 62, PAL.ink, 0.8);
    text(ctx, 'up the stairs', Xp(run.v / 2), ground + 62, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'straight up', px, ground + 62, PAL.muted, { size: 18, align: 'center' });
    /* the two accounts */
    ebar(ctx, 1220, ground, 56, full, pe1, 300, 'carried', fmt(pe1, 0) + ' J');
    ebar(ctx, 1300, ground, 56, full, pe2, 300, 'hoisted', fmt(pe2, 0) + ' J');
    line(ctx, 1206, ground - 300, 1370, ground - 300, C('energy'), 2, [8, 6]);
    text(ctx, 'mgh = ' + num(full, 0) + ' J', 1288, ground - 322, C('energy'), { size: 17, weight: 600, align: 'center' });
    headline(ctx, s1 >= L1() - 1e-9
      ? 'both sets are on the landing ' + fmt(h.v, 1) + ' m up: one walked ' + fmt(L1(), 1) + ' m and the other rose ' + fmt(h.v, 1) + ' m, and each gained ' + num(full, 0) + ' J'
      : 'the carried set has walked ' + fmt(s1, 1) + ' m to be ' + fmt(p1.y, 1) + ' m up, the hoisted set ' + fmt(s2, 1) + ' m of rope to be ' + fmt(s2, 1) + ' m up');
    readout(d.readout, `\\kdPEg = m\\kg\\kh = (${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(h.v, 1)}\\ \\text{m}) = ${num(full, 0)}\\ \\text{J}`,
      'The staircase is ' + fmt(L1(), 1) + ' m long and the rope only ' + fmt(h.v, 1) + ' m, yet both sets end with the same ' + num(full, 0) + ' J, since only the change in vertical position enters mgh.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => L1() / 5), draw });
})();

/* =====================================================================
   SIM: the force that stops a fall (Example 7.6). The person falls
   through h and the floor removes all of the kinetic energy over the
   distance the knees bend, so the force goes as 1/d. The fall and the
   stop take time, so the figure loops and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-landing', 700);
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0.5, max: 5, step: 0.1, value: 3, unit: 'm', dec: 2, onInput: reset, aria: 'height of the fall' });
  const kb = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.005, max: 0.75, step: 0.005, value: 0.005, unit: 'm', dec: 3, onInput: reset, aria: 'distance the knees bend' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 20, max: 120, step: 1, value: 60, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the person' });
  const cy = cycle(() => 1.3, 1.0);
  function reset() { cy.reset(); }
  const lg = (v) => Math.log10(v);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), falling = tau < 1, p = falling ? 0 : Math.min(1, (tau - 1) / 0.3);
    const KE = m.v * G * h.v, Fst = KE / kb.v, wgt = m.v * G;
    const floorY = 430, SC = 62, feet = falling ? floorY - h.v * SC * (1 - tau * tau) : floorY;
    strip(ctx, 100, 660, floorY + 14, 26);
    person(ctx, 330, feet, PAL.ink, p, falling && tau > 0.1);
    text(ctx, fmt(m.v, 1) + ' kg', 330, feet - 132, PAL.ink, { size: 18, weight: 600, align: 'center' });
    if (h.v * SC > 40) vbracket(ctx, 168, floorY, floorY - h.v * SC, C('position'), 'h = ' + fmt(h.v, 2) + ' m', -1);
    line(ctx, 150, floorY - h.v * SC, 360, floorY - h.v * SC, C('position'), 2, [8, 8]);
    if (!falling) {
      const al = 70 + 150 * Math.min(1, lg(Fst / wgt) / 3) * p;
      arrow(ctx, 440, floorY, 440, floorY - al, C('force'), 5);
      text(ctx, 'F = ' + sciPlain(Fst) + ' N', 456, floorY - al - 4, C('force'), { size: 18, weight: 600 });
      text(ctx, 'the knees bend d = ' + fmt(kb.v * 100, 2) + ' cm', 330, floorY + 62, C('position'), { size: 18, weight: 600, align: 'center' });
    } else {
      arrow(ctx, 440, feet - 40, 440, feet + 44, C('force'), 5);
      text(ctx, 'mg = ' + fmt(wgt, 0) + ' N', 456, feet + 4, C('force'), { size: 18, weight: 600 });
      text(ctx, 'KE on landing = ' + num(KE, 0) + ' J', 330, floorY + 62, C('energy'), { size: 18, weight: 600, align: 'center' });
    }
    /* the graph beside: the stopping force against the distance the knees bend, both on ratio scales */
    const box = { l: 800, r: 1330, t: 150, b: 560 };
    const fx = (v) => ['1 mm', '1 cm', '10 cm', '1 m'][Math.round(v) + 3] ?? '';
    const fy = (v) => ['100 N', '1 kN', '10 kN', '100 kN', '1 MN', '10 MN'][Math.round(v) - 2] ?? '';
    const { X, Y } = axes(ctx, box, [-3, 0], [2, 7], { xl: 'distance the knees bend', xc: C('position'), yl: 'force on the knee joints', yc: C('force'), nx: 3, ny: 5, fx, fy });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, (u) => lg(KE) - u, -3, 0, X, Y, C('force'), 5, 60);
    line(ctx, X(-3), Y(lg(wgt)), X(0), Y(lg(wgt)), C('force'), 2, [10, 10]);
    for (const q of [0.005, 0.5]) { dot(ctx, X(lg(q)), Y(lg(KE / q)), C('force'), false, 10); }
    dot(ctx, X(lg(kb.v)), Y(lg(Fst)), C('force'), true, 9);
    ctx.restore();
    text(ctx, 'the weight, ' + fmt(wgt, 0) + ' N', box.l + 12, Y(lg(wgt)) - 18, C('force'), { size: 17, weight: 600 });
    text(ctx, 'a stiff landing', X(lg(0.005)) + 16, Y(lg(KE / 0.005)) - 26, PAL.muted, { size: 17 });
    text(ctx, 'bending the legs', X(lg(0.5)) - 16, Y(lg(KE / 0.5)) + 30, PAL.muted, { size: 17, align: 'right' });
    headline(ctx, falling ? 'falling from ' + fmt(h.v, 2) + ' m: the person reaches the floor with ' + num(KE, 0) + ' J of kinetic energy'
      : 'the knees bend ' + fmt(kb.v * 100, 2) + ' cm, so the floor takes ' + num(KE, 0) + ' J away over that distance and pushes with ' + sciPlain(Fst) + ' N, ' + fmt(Fst / wgt, 0) + ' times the weight');
    readout(d.readout, `\\kF = -\\frac{m\\kg\\kh}{\\kd} = -\\frac{(${fmt(m.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(-${fmt(h.v, 2)}\\ \\text{m})}{${sci(kb.v)}\\ \\text{m}} = ${sci(Fst)}\\ \\text{N}`,
      'The same ' + num(KE, 0) + ' J has to be removed however the person lands, so the distance is what decides the force. Bending through 0.500 m instead of ' + fmt(kb.v * 100, 2) + ' cm would spread it over ' + fmt(0.5 / kb.v, 0) + ' times the distance and bring the force down to ' + sciPlain(KE / 0.5) + ' N.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.26), draw });
})();

/* =====================================================================
   FIGURE 7.8: the roller coaster running down its hill (Example 7.7).
   The car speeds up as the hill falls away, and the graph below keeps
   the account: the gravitational potential energy given up is the
   kinetic energy gained. The descent takes time, so the figure loops
   and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-coaster', 780);
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 5, max: 40, step: 0.5, value: 20, unit: 'm', dec: 1, onInput: reset, aria: 'height of the hill' });
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 10, step: 0.25, value: 0, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed at the top' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 100, max: 2000, step: 50, value: 500, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the car' });
  const X0 = 110, X1 = 1330, XH = 700, BASE = 430, SCY = 6;
  const hgt = (x) => (x <= XH ? (h.v * (1 + Math.cos((Math.PI * (x - X0)) / (XH - X0)))) / 2 : 0);
  const yOf = (x) => BASE - hgt(x) * SCY;
  let tab = null;
  /* the run, sampled once per slider setting: arc length, speed and the clock */
  function table() {
    if (tab) return tab;
    const N = 300, xs = [], ts = [], ys = [];
    let t = 0;
    for (let i = 0; i <= N; i++) {
      const x = X0 + ((X1 - X0) * i) / N, y = yOf(x);
      if (i) { const ds = Math.hypot(x - xs[i - 1], y - ys[i - 1]) / SCY; const v = Math.max(0.8, Math.sqrt(v0.v * v0.v + 2 * G * (h.v - hgt(x)))); t += ds / v; }
      xs.push(x); ys.push(y); ts.push(t);
    }
    tab = { xs, ys, ts, T: t };
    return tab;
  }
  function reset() { tab = null; cy.reset(); }
  const cy = cycle(() => table().T, 1.2);
  function draw() {
    const { ctx } = begin(d.c);
    const tb = table(), tau = Math.min(cy.now(), tb.T);
    let i = 1; while (i < tb.ts.length - 1 && tb.ts[i] < tau) i++;
    /* at the very start the car stands at the first sample, so that the height fallen is
       exactly zero and the readout's arithmetic agrees with the numbers it prints */
    const j = tau <= 0 ? 0 : i, k = Math.max(j, 1);
    const x = tb.xs[j], y = tb.ys[j], rot = Math.atan2(tb.ys[k] - tb.ys[k - 1], tb.xs[k] - tb.xs[k - 1]);
    const fallen = h.v - hgt(x), v = Math.sqrt(v0.v * v0.v + 2 * G * fallen);
    const KEi = 0.5 * m.v * v0.v * v0.v, Etot = KEi + m.v * G * h.v, KE = KEi + m.v * G * fallen, PE = m.v * G * (h.v - fallen);
    /* the scene: the track, drawn as the book draws it */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 5; ctx.beginPath();
    for (let k = 0; k <= 120; k++) { const xx = X0 + ((X1 - X0) * k) / 120; if (k) ctx.lineTo(xx, yOf(xx)); else ctx.moveTo(xx, yOf(xx)); }
    ctx.stroke(); ctx.restore();
    line(ctx, X0, BASE, X1, BASE, PAL.rule, 2, [8, 8]);
    coasterCar(ctx, x, y - 12, rot, PAL.ink);
    vbracket(ctx, X0 - 34, BASE, BASE - h.v * SCY, C('position'), 'h = ' + fmt(h.v, 1) + ' m', 1);
    line(ctx, X0 - 44, BASE - h.v * SCY, X0 + 40, BASE - h.v * SCY, C('position'), 2, [8, 8]);
    if (v > 1) { const al = 50 + 130 * (v / Math.sqrt(v0.v * v0.v + 2 * G * h.v)); arrow(ctx, x + 40, y - 40, x + 40 + al, y - 40, C('velocity'), 5); text(ctx, 'v = ' + fmt(v, 1) + ' m/s', x + 46 + al, y - 66, C('velocity'), { size: 18, weight: 600 }); }
    /* the graph below the horizontal scene: the energy account against the height fallen */
    const Er = nice(0, Etot * 1.18, 4);
    const box = { l: 220, r: 1300, t: 510, b: 700 };
    const { X, Y } = axes(ctx, box, [0, h.v], [0, Er.hi], { xl: 'height fallen (m)', xc: C('position'), yl: 'energy (kJ)', yc: C('energy'), nx: 4, ny: Er.n, fx: (u) => fmt(u, 0), fy: (u) => fmt(u / 1000, 0) });
    line(ctx, X(0), Y(Etot), X(h.v), Y(Etot), C('energy'), 2, [10, 10]);
    line(ctx, X(0), Y(m.v * G * h.v), X(h.v), Y(0), alpha(C('energy'), 0.55), 5);
    line(ctx, X(0), Y(KEi), X(h.v), Y(Etot), C('energy'), 5);
    text(ctx, 'PE_g', X(h.v * 0.45), Y(m.v * G * h.v * 0.55) + 26, alpha(C('energy'), 0.8), { size: 18, weight: 600, align: 'center' });
    text(ctx, 'KE', X(h.v * 0.55), Y(KEi + m.v * G * h.v * 0.55) - 26, C('energy'), { size: 18, weight: 600, align: 'center' });
    text(ctx, 'their sum stays the same', X(h.v * 0.5), Y(Etot) - 22, C('energy'), { size: 17, weight: 600, align: 'center' });
    line(ctx, X(fallen), box.b, X(fallen), Y(Etot), C('position'), 2, [4, 8]);
    dot(ctx, X(fallen), Y(PE), alpha(C('energy'), 0.7), true, 9);
    dot(ctx, X(fallen), Y(KE), C('energy'), true, 9);
    headline(ctx, fallen < 0.02 * h.v ? 'at the top of the ' + fmt(h.v, 1) + ' m hill the car holds ' + fmt(m.v * G * h.v / 1000, 1) + ' kJ in height and ' + fmt(KEi / 1000, 1) + ' kJ in motion'
      : 'the car has fallen ' + fmt(fallen, 1) + ' m and is doing ' + fmt(v, 1) + ' m/s: ' + fmt(KE / 1000, 1) + ' kJ of the ' + fmt(Etot / 1000, 1) + ' kJ is now motion');
    readout(d.readout, `\\kv = \\sqrt{2\\kg|\\kh| + \\kvo^2} = \\sqrt{2(9.80\\ \\text{m/s}^2)(${fmt(fallen, 2)}\\ \\text{m}) + (${fmt(v0.v, 2)}\\ \\text{m/s})^2} = ${fmt(v, 1)}\\ \\text{m/s}`,
      'Mass cancels from the equation, so a ' + num(m.v, 0) + ' kg car and a train ten times as heavy reach the same speed at the bottom. Starting at ' + fmt(v0.v, 2) + ' m/s rather than from rest adds only ' + fmt(Math.sqrt(v0.v * v0.v + 2 * G * h.v) - Math.sqrt(2 * G * h.v), 2) + ' m/s to the ' + fmt(Math.sqrt(2 * G * h.v), 1) + ' m/s the hill gives on its own.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => table().T / 5), draw });
})();

/* =====================================================================
   FIGURE 7.9: the marble rolling down a ruler propped on a book, the
   take-home investigation. The marble rolls and then crosses a metre of
   the level surface, and the graph below is the plot the investigation
   asks for. The run takes time, so the figure loops and gets the
   transport.
===================================================================== */
(function () {
  const d = sim('sim-marble', 690);
  const rel = ctl(d.controls, { label: '\\kd', cls: 'position', min: 5, max: 30, step: 1, value: 10, unit: 'cm', dec: 0, onInput: reset, aria: 'release position along the ruler' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 5, max: 25, step: 1, value: 15, unit: 'º', dec: 0, onInput: reset, aria: 'angle of the incline' });
  const dm = () => rel.v / 100, sn = () => Math.sin(th.v * RAD), cs = () => Math.cos(th.v * RAD);
  const acc = () => G * sn(), vEnd = () => Math.sqrt(2 * G * dm() * sn());
  const t1 = () => Math.sqrt((2 * dm()) / acc()), t2 = () => 1 / vEnd();
  const cy = cycle(() => t1() + t2(), 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), SC = 880, table = 250, RL = 0.3;
    const xTop = 200, xBot = xTop + RL * cs() * SC, yTop = table - RL * sn() * SC;
    const onRuler = tau < t1();
    const s = onRuler ? Math.max(0, dm() - 0.5 * acc() * tau * tau) : 0;           /* distance from the low end */
    const along = onRuler ? 0 : Math.min(1, vEnd() * (tau - t1()));                /* metres across the level */
    const h = dm() * sn(), v = onRuler ? acc() * tau : vEnd();
    /* the scene: a book, a ruler on it and the marble */
    strip(ctx, 100, 1360, table + 14, 26);
    fixed(ctx, 50, yTop, 150, table - yTop);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.moveTo(xTop, yTop); ctx.lineTo(xBot, table); ctx.stroke(); ctx.restore();
    for (let c = 5; c <= 30; c += 5) { const f = c / 30, px = xTop + (xBot - xTop) * (1 - f), py = yTop + (table - yTop) * (1 - f); line(ctx, px, py - 12, px, py - 4, PAL.muted, 2); }
    const mx = onRuler ? xBot - s * cs() * SC : xBot + along * SC, my = onRuler ? table - s * sn() * SC - 12 : table - 12;
    dot(ctx, xBot - dm() * cs() * SC, table - dm() * sn() * SC - 12, C('position'), false, 10);
    dot(ctx, mx, my, PAL.ink, true, 12);
    hbracket(ctx, xBot, xBot + SC, table + 56, C('position'), 'one metre of level surface');
    vbracket(ctx, xBot + 26, table, table - dm() * sn() * SC, C('position'), 'h = ' + fmt(h * 100, 1) + ' cm', 1);
    if (v > 0.05) { const al = 40 + 130 * (v / Math.max(0.2, vEnd())); arrow(ctx, mx, my - 40, mx + al, my - 40, C('velocity'), 5); text(ctx, fmt(v, 2) + ' m/s', mx + al + 12, my - 40, C('velocity'), { size: 18, weight: 600 }); }
    text(ctx, 'released at ' + fmt(rel.v, 0) + ' cm', xTop - 10, yTop - 34, PAL.muted, { size: 18 });
    /* the graph below: the plot the investigation asks for */
    const Vr = nice(0, 2 * G * 0.3 * sn() * 1.05, 4);
    const box = { l: 240, r: 1300, t: 380, b: 600 };
    const { X, Y } = axes(ctx, box, [0, 0.3], [0, Vr.hi], { xl: 'release position on the ruler (m)', xc: C('position'), yl: 'v² on the level (m²/s²)', yc: C('velocity'), nx: 3, ny: Vr.n, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 1) });
    line(ctx, X(0), Y(0), X(0.3), Y(2 * G * 0.3 * sn()), C('velocity'), 5);
    for (const q of [0.1, 0.2, 0.3]) dot(ctx, X(q), Y(2 * G * q * sn()), C('velocity'), false, 10);
    dot(ctx, X(dm()), Y(vEnd() * vEnd()), C('velocity'), true, 9);
    text(ctx, 'a straight line: the kinetic energy at the bottom grows in step with the potential energy at the release point', box.l + 20, box.t + 28, C('energy'), { size: 18, weight: 600 });
    headline(ctx, onRuler ? 'rolling down: released at ' + fmt(rel.v, 0) + ' cm the marble has ' + fmt(s * 100, 1) + ' cm of ruler left and is doing ' + fmt(v, 2) + ' m/s'
      : 'on the level: the marble crosses the metre at ' + fmt(vEnd(), 2) + ' m/s, so the metre takes ' + fmt(t2(), 2) + ' s');
    readout(d.readout, `\\kv = \\sqrt{2\\kg|\\kh|} = \\sqrt{2(9.80\\ \\text{m/s}^2)(${fmt(h, 4)}\\ \\text{m})} = ${fmt(vEnd(), 2)}\\ \\text{m/s}`,
      'Releasing the marble at ' + fmt(rel.v, 0) + ' cm drops it ' + fmt(h * 100, 1) + ' cm, and it crosses the metre in ' + fmt(t2(), 2) + ' s. Because the potential energy given up grows in step with the release position, the square of the speed does too, and the plot is a straight line through the origin.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (t1() + t2()) / 5), draw });
})();
};
