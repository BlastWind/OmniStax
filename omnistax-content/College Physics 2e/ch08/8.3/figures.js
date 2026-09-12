/* Figures for section 8.3 Conservation of Momentum. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, axes, nice, curve, car, block, strip } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const sgn = (v) => (v < 0 ? '−' : '');
/* a whole number with thousands separators, for the canvas and for KaTeX */
const groups = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const whole = (x) => sgn(x) + groups(Math.round(Math.abs(x)));
const tnum = (x) => sgn(x) + groups(Math.round(Math.abs(x))).replace(/,/g, '{,}');
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
/* a cross in a circle marking the centre of mass, as the book marks it */
function cross(ctx, x, y, color, r) {
  line(ctx, x - r, y, x + r, y, color, 3); line(ctx, x, y - r, x, y + r, color, 3);
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, TAU); ctx.stroke(); ctx.restore();
}
/* a rocket pointing along the angle a, centred on (x, y) */
function rocket(ctx, x, y, a, color, s) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s); ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(34, 0); ctx.lineTo(8, -10); ctx.lineTo(-24, -10); ctx.lineTo(-34, -21);
  ctx.lineTo(-28, 0); ctx.lineTo(-34, 21); ctx.lineTo(-24, 10); ctx.lineTo(8, 10); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a target particle: a soft disc with a firm edge */
function particle(ctx, x, y, r, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.22); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke(); ctx.restore();
}
/* a momentum measured off a scale, drawn as a bar from x1 to x2 */
function bar(ctx, x1, x2, y, color, h) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.32); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.rect(Math.min(x1, x2), y - h / 2, Math.max(2, Math.abs(x2 - x1)), h); ctx.fill(); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 8.3: one car bumping into another. The trailing car catches the
   lead car, the bumpers are in contact for a fifth of a second, and the
   cars coast apart again. The bump is an event in time, so the figure
   loops once per pass and takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-collision', 800);
  const M2 = 1000, DT = 0.20, TC = 1.6, T = 4.0, LCAR = 4.5;
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 600, max: 2000, step: 50, value: 1200, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the trailing car' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 6, max: 20, step: 0.5, value: 15, unit: 'm/s', dec: 1, onInput: reset, aria: 'velocity of the trailing car' });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: 2, max: 14, step: 0.5, value: 8, unit: 'm/s', dec: 1, onInput: reset, aria: 'velocity of the lead car' });
  const bo = ctl(d.controls, { label: '\\text{bounce}', cls: '', min: 0, max: 1, step: 0.05, value: 0.4, unit: '', dec: 2, onInput: reset, aria: 'bounce of the bumpers' });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function model() {
    const M1 = m1.v, u1 = v1.v, u2 = v2.v, e = bo.v, hits = u1 > u2 + 0.01;
    const w1 = hits ? (M1 * u1 + M2 * u2 - M2 * e * (u1 - u2)) / (M1 + M2) : u1;
    const w2 = hits ? (M1 * u1 + M2 * u2 + M1 * e * (u1 - u2)) / (M1 + M2) : u2;
    const tc = hits ? TC : Infinity, gap = hits ? LCAR + (u1 - u2) * TC : LCAR + 12;
    const ramp = (t, a, b) => (t <= tc ? a : t >= tc + DT ? b : a + ((b - a) * (t - tc)) / DT);
    return {
      M1, u1, u2, hits, w1, w2, tc, gap,
      x1: (t) => (t < tc ? u1 * t : u1 * tc + w1 * (t - tc)),
      x2: (t) => gap + (t < tc ? u2 * t : u2 * tc + w2 * (t - tc)),
      p1: (t) => M1 * ramp(t, u1, w1), p2: (t) => M2 * ramp(t, u2, w2),
      ptot: M1 * u1 + M2 * u2, dp: M1 * (w1 - u1), Fc: Math.abs(M1 * (w1 - u1)) / DT,
    };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const f = model(), tau = cy.now(), touching = f.hits && tau >= f.tc && tau <= f.tc + DT;
    const span = Math.max(f.x1(T), f.x2(T)) + LCAR + 2;
    const SC = 1100 / span, X = (m) => 150 + (m + LCAR / 2) * SC, s = (LCAR * SC) / 82;
    const yRoad = 265;
    strip(ctx, 70, 1340, yRoad + 26, 30);
    const px1 = X(f.x1(tau)), px2 = X(f.x2(tau)), P1 = f.p1(tau), P2 = f.p2(tau);
    const LP = (p) => 240 * (p / f.ptot);
    car(ctx, px1, yRoad, PAL.ink, s); car(ctx, px2, yRoad, PAL.muted, s);
    text(ctx, 'm₁ = ' + whole(f.M1) + ' kg', px1, yRoad + 62, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'm₂ = 1,000 kg', px2, yRoad + 62, PAL.muted, { size: 19, align: 'center' });
    /* the momentum each car carries, the lead car's on the upper row so the two never meet */
    arrow(ctx, px2 - LP(P2) / 2, 120, px2 + LP(P2) / 2, 120, C('momentum'), 5);
    text(ctx, 'p₂ = ' + whole(P2) + ' kg·m/s', px2, 92, C('momentum'), { size: 20, weight: 600, align: 'center' });
    arrow(ctx, px1 - LP(P1) / 2, 178, px1 + LP(P1) / 2, 178, C('momentum'), 5);
    text(ctx, 'p₁ = ' + whole(P1) + ' kg·m/s', px1, 150, C('momentum'), { size: 20, weight: 600, align: 'center' });
    /* while the bumpers touch, the two forces are drawn equal and opposite */
    if (touching) {
      const xm = (px1 + px2) / 2;
      arrow(ctx, xm - 20, 385, xm - 150, 385, C('force'), 5);
      arrow(ctx, xm + 20, 385, xm + 150, 385, C('force'), 5);
      text(ctx, 'F₁ = ' + whole(f.Fc) + ' N', xm - 160, 385, C('force'), { size: 19, weight: 600, align: 'right' });
      text(ctx, 'F₂ = ' + whole(f.Fc) + ' N', xm + 160, 385, C('force'), { size: 19, weight: 600 });
    }
    /* the graph: the two momenta and their total against time */
    const box = { l: 200, r: 1280, t: 440, b: 700 };
    const r = nice(0, f.ptot * 1.15, 4);
    const { X: GX, Y: GY } = axes(ctx, box, [0, T], [0, r.hi], { xl: 't (s)', yl: 'p (kg·m/s)', xc: C('time'), yc: C('momentum'), nx: 4, ny: r.n, fx: (v) => fmt(v, 0), fy: (v) => whole(v) });
    line(ctx, box.l, GY(f.ptot), box.r, GY(f.ptot), C('momentum'), 5);
    curve(ctx, (t) => f.p1(t), 0, T, GX, GY, C('momentum'), 4, 320);
    curve(ctx, (t) => f.p2(t), 0, T, GX, GY, C('momentum'), 4, 320);
    text(ctx, 'p₁ + p₂ = ' + whole(f.ptot), box.r - 10, GY(f.ptot) - 24, C('momentum'), { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'p₁', box.r - 10, GY(f.p1(T)) - 26, C('momentum'), { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'p₂', box.r - 10, GY(f.p2(T)) + 30, C('momentum'), { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    dot(ctx, GX(tau), GY(P1), C('momentum'), true, 9);
    dot(ctx, GX(tau), GY(P2), C('momentum'), false, 9);
    headline(ctx, !f.hits ? 'the trailing car is no faster than the one in front, so it never catches it and no momentum changes hands'
      : tau < f.tc ? 't = ' + fmt(tau, 2) + ' s · the cars are ' + fmt(f.x2(tau) - f.x1(tau) - LCAR, 1) + ' m apart and closing, and the total momentum is ' + whole(f.ptot) + ' kg·m/s'
      : 't = ' + fmt(tau, 2) + ' s · car 1 has lost ' + whole(-f.dp) + ' kg·m/s and car 2 has gained the same, so the total is still ' + whole(f.ptot) + ' kg·m/s');
    readout(d.readout, `\\kpone + \\kptwo = \\kponeprime + \\kptwoprime:\\quad ${tnum(f.M1 * f.u1)} + ${tnum(M2 * f.u2)} = ${tnum(f.M1 * f.w1)} + ${tnum(M2 * f.w2)}\\ \\text{kg·m/s}`,
      f.hits ? 'The two cars push on each other for the same ' + fmt(DT, 2) + ' s, so each receives an impulse of ' + whole(f.Fc) + ' N times ' + fmt(DT, 2) + ' s, and the momentum one car loses is the momentum the other gains.'
        : 'Set the trailing car moving faster than the one in front and the two will meet.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* =====================================================================
   FIGURE 8.4: a space probe separating in flight. The forces of the
   separation are internal, so the horizontal momentum of the system is
   the same after it as before; the vertical momentum falls all the while
   under the weight of the probe. The flight has a time in it, so the
   figure loops once per flight and takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-probe', 800);
  const M = 1000;                                   /* the mass of the whole probe, in kilograms */
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 200, max: 800, step: 10, value: 500, unit: 'm/s', dec: 0, onInput: reset, aria: 'launch speed' });
  const th = ctl(d.controls, { label: '\\theta_0', cls: '', min: 30, max: 80, step: 1, value: 60, unit: '°', dec: 0, onInput: reset, aria: 'launch angle' });
  const dp = ctl(d.controls, { label: '\\kdp', cls: 'momentum', min: 0, max: 100000, step: 5000, value: 50000, unit: 'kg·m/s', dec: 0, onInput: reset, aria: 'impulse of the separation' });
  function model() {
    const vx = v0.v * Math.cos(th.v * RAD), vy = v0.v * Math.sin(th.v * RAD);
    const T = (2 * vy) / G, ts = T / 2, h = (vy * vy) / (2 * G), dv = dp.v / (M / 2);
    return {
      vx, vy, T, ts, h, dv, R: vx * T,
      x: (t) => vx * t, y: (t) => Math.max(0, vy * t - 0.5 * G * t * t),
      xf: (t) => (t < ts ? vx * t : vx * ts + (vx + dv) * (t - ts)),
      xr: (t) => (t < ts ? vx * t : vx * ts + (vx - dv) * (t - ts)),
      px: M * vx, py: (t) => M * (vy - G * t),
    };
  }
  const cy = cycle(() => model().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const f = model(), tau = cy.now(), after = tau >= f.ts;
    const box = { l: 150, r: 1300, t: 115, b: 425 };
    const xhi = Math.max(f.R, f.xf(f.T)) * 1.04, yhi = f.h * 1.3;
    const X = (m) => box.l + (m / xhi) * (box.r - box.l), Y = (m) => box.b - (m / yhi) * (box.b - box.t);
    line(ctx, box.l - 70, box.b, box.r + 40, box.b, PAL.muted, 3);
    text(ctx, 'horizontal distance', box.r + 40, box.b + 28, PAL.muted, { size: 17, align: 'right' });
    /* the parabola the whole probe would have followed, which is the path of the centre of mass */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([9, 9]); ctx.beginPath();
    for (let i = 0; i <= 90; i++) { const t = (f.T * i) / 90; if (i) ctx.lineTo(X(f.x(t)), Y(f.y(t))); else ctx.moveTo(X(f.x(t)), Y(f.y(t))); }
    ctx.stroke(); ctx.restore();
    const trail = (xp, t0, t1, color, w) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i <= 70; i++) { const t = t0 + ((t1 - t0) * i) / 70; if (i) ctx.lineTo(X(xp(t)), Y(f.y(t))); else ctx.moveTo(X(xp(t)), Y(f.y(t))); }
      ctx.stroke(); ctx.restore();
    };
    trail(f.x, 0, Math.min(tau, f.ts), PAL.ink, 4);
    if (after) { trail(f.xf, f.ts, tau, PAL.ink, 3); trail(f.xr, f.ts, tau, PAL.ink, 3); }
    const ang = Math.atan2(-(f.vy - G * tau), f.vx);
    if (!after) rocket(ctx, X(f.x(tau)), Y(f.y(tau)), ang, PAL.ink, 1);
    else { rocket(ctx, X(f.xf(tau)), Y(f.y(tau)), ang, PAL.ink, 0.8); rocket(ctx, X(f.xr(tau)), Y(f.y(tau)), ang, PAL.ink, 0.8); }
    cross(ctx, X(f.x(tau)), Y(f.y(tau)), C('position'), 15);
    text(ctx, 'CM', X(f.x(tau)) + 22, Y(f.y(tau)) - 28, C('position'), { size: 19, weight: 600 });
    /* the momentum of the whole system, drawn once in the corner the path leaves free */
    const ax = 250, ay = 205, LP = 120 / Math.max(f.px, M * f.vy);
    arrow(ctx, ax, ay, ax + f.px * LP, ay, C('momentum'), 5);
    arrow(ctx, ax, ay, ax, ay - f.py(tau) * LP, C('momentum'), 5);
    text(ctx, 'the momentum of the system', ax - 8, ay - 148, C('momentum'), { size: 18, weight: 600 });
    /* the graph: the two components of the system's momentum against time */
    const gb = { l: 200, r: 1280, t: 520, b: 710 };
    const r = nice(-Math.max(f.px, M * f.vy) * 1.15, Math.max(f.px, M * f.vy) * 1.15, 4);
    const { X: GX, Y: GY } = axes(ctx, gb, [0, f.T], [r.lo, r.hi], { xl: 't (s)', yl: 'p (kg·m/s)', xc: C('time'), yc: C('momentum'), nx: 4, ny: r.n, fx: (v) => fmt(v, 0), fy: (v) => whole(v) });
    line(ctx, GX(f.ts), gb.t, GX(f.ts), gb.b, PAL.muted, 2, [4, 8]);
    text(ctx, 'the probe separates', GX(f.ts) + 10, gb.t + 18, PAL.muted, { size: 17 });
    line(ctx, gb.l, GY(f.px), gb.r, GY(f.px), C('momentum'), 5);
    curve(ctx, (t) => f.py(t), 0, f.T, GX, GY, C('momentum'), 4, 120);
    text(ctx, 'the horizontal momentum', gb.r - 10, GY(f.px) - 24, C('momentum'), { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'the vertical momentum', gb.r - 10, GY(f.py(f.T)) + 26, C('momentum'), { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    dot(ctx, GX(tau), GY(f.px), C('momentum'), true, 9);
    dot(ctx, GX(tau), GY(f.py(tau)), C('momentum'), false, 9);
    headline(ctx, !after
      ? 't = ' + fmt(tau, 1) + ' s · the whole probe is climbing, and its horizontal momentum is ' + whole(f.px) + ' kg·m/s'
      : 't = ' + fmt(tau, 1) + ' s · the horizontal momentum is still ' + whole(f.px) + ' kg·m/s, and the vertical momentum has fallen to ' + whole(f.py(tau)) + ' kg·m/s');
    readout(d.readout, `\\kpx = ${tnum(f.px)}\\ \\text{kg·m/s} = \\text{constant}\\qquad \\kpy = ${tnum(f.py(tau))}\\ \\text{kg·m/s} \\neq \\text{constant}`,
      'The two halves push each other apart with ' + whole(dp.v) + ' kg·m/s, one forward and one backward, so the horizontal momentum of the pair is the momentum the whole probe had. Gravity is an external force and takes ' + whole(M * G) + ' kg·m/s from the vertical momentum every second.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => model().T / 5), draw });
})();

/* =====================================================================
   FIGURE 8.5: a subatomic particle scattering from a target. The reader
   says what the electron does and conservation of momentum says what the
   target must do. The encounter happens in time, so the figure loops and
   takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-scatter', 680);
  const T = 4.0, TC = 2.0, XT = 830, R = 46;
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 20, step: 0.5, value: 10, unit: 'Mm/s', dec: 1, onInput: reset, aria: 'speed of the incoming electron' });
  const rt = ctl(d.controls, { label: "{v'}_1 / v_1", cls: '', min: -1, max: 1, step: 0.05, value: -0.95, unit: '', dec: 2, onInput: reset, aria: 'fraction of its velocity the electron keeps' });
  const mr = ctl(d.controls, { label: 'm_2 / m_1', cls: '', min: 1, max: 2000, step: 1, value: 1836, unit: '', dec: 0, onInput: reset, aria: 'mass of the target in electron masses' });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const model = () => {
    const p1 = v1.v, w1 = rt.v * v1.v, p2p = p1 - w1;
    return { p1, w1, p1p: w1, p2p, w2: p2p / mr.v };
  };
  function draw() {
    const { ctx } = begin(d.c);
    const f = model(), tau = cy.now(), after = tau >= TC;
    const K = 600 / (v1.v * TC), yIn = 252, yOut = 190;
    line(ctx, 90, yIn, 1340, yIn, PAL.rule, 2, [12, 12]);
    const xtn = clamp(XT + (after ? K * f.w2 * (tau - TC) : 0), XT, 1290);
    particle(ctx, xtn, yIn, R, PAL.ink);
    text(ctx, 'the target, ' + whole(mr.v) + (mr.v === 1 ? ' electron mass' : ' electron masses'), clamp(xtn, 240, 1140), yIn + R + 32, PAL.ink, { size: 19, align: 'center' });
    const xe = clamp(after ? 780 + K * f.w1 * (tau - TC) : 180 + K * v1.v * tau, 80, 1340);
    const ye = after ? yOut : yIn;
    dot(ctx, xe, ye, PAL.ink, true, 13);
    text(ctx, 'e⁻', xe, ye - 36, PAL.ink, { size: 20, weight: 600, align: 'center' });
    const LV = 120 / Math.max(1, v1.v);
    arrow(ctx, xe, ye + 32, xe + (after ? f.w1 : v1.v) * LV, ye + 32, C('velocity'), 4);
    if (after) { arrow(ctx, xtn, yIn - 74, xtn + Math.sign(f.w2) * Math.max(8, Math.abs(f.w2) * LV), yIn - 74, C('velocity'), 4); }
    /* the momenta, all measured off one origin, so that the target's bar overshoots
       the electron's original bar by exactly what the electron carries backward */
    const x0 = 500, S = 430 / Math.max(1, v1.v), hB = 32;
    const yB = 388, yA1 = 470, yA2 = 552;
    line(ctx, x0, yB - 62, x0, yA2 + 58, PAL.rule, 2);
    line(ctx, x0 + S * f.p1, yB - 62, x0 + S * f.p1, yA2 + 58, PAL.muted, 2, [7, 7]);
    bar(ctx, x0, x0 + S * f.p1, yB, C('momentum'), hB);
    text(ctx, 'before: p₁ = ' + fmt(f.p1, 2), x0 + 10, yB - 32, C('momentum'), { size: 19, weight: 600 });
    bar(ctx, x0, x0 + S * f.p1p, yA1, C('momentum'), hB);
    text(ctx, "after, the electron: p'₁ = " + fmt(f.p1p, 2), f.p1p < 0 ? x0 - 10 : x0 + 10, yA1 - 32, C('momentum'), { size: 19, weight: 600, align: f.p1p < 0 ? 'right' : 'left' });
    bar(ctx, x0, x0 + S * f.p2p, yA2, C('momentum'), hB);
    text(ctx, "after, the target: p'₂ = " + fmt(f.p2p, 2), x0 + 10, yA2 - 32, C('momentum'), { size: 19, weight: 600 });
    text(ctx, 'momentum in units of one electron mass times one Mm/s', 700, 636, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, !after
      ? 'the electron comes in at ' + fmt(v1.v, 1) + ' Mm/s and carries a momentum of ' + fmt(f.p1, 2)
      : f.w1 < 0
        ? 'the electron comes straight back at ' + fmt(-f.w1, 2) + ' Mm/s, and the target, ' + whole(mr.v) + ' times as massive, moves off at only ' + fmt(f.w2, 4) + ' Mm/s'
        : 'the electron goes on at ' + fmt(f.w1, 2) + ' Mm/s, and the target takes the rest of the momentum and moves off at ' + fmt(f.w2, 4) + ' Mm/s');
    readout(d.readout, `\\kpone = \\kponeprime + \\kptwoprime:\\quad ${fmt(f.p1, 2)} = ${fmt(f.p1p, 2)} + ${fmt(f.p2p, 2)}`,
      'The target takes a momentum of ' + fmt(f.p2p, 2) + ' whatever it is made of, and the more massive it is the more slowly it carries that momentum away. A target as massive as a proton hardly moves at all, which is why an electron can come straight back from it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   SIM: the centre of mass of two colliding carts. The total momentum is
   the momentum of the centre of mass, so the cross between the carts
   keeps one velocity through the collision, whatever the carts do to one
   another. The motion has a time in it, so the figure loops and takes the
   scrubber.
===================================================================== */
(function () {
  const d = sim('sim-center-of-mass', 810);
  const LC = 0.8, X1 = 0.5, X2 = 6.0;
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 0.2, max: 2, step: 0.1, value: 0.5, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the first cart' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.2, max: 2, step: 0.1, value: 0.5, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the second cart' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 0, max: 10, step: 0.5, value: 6, unit: 'm/s', dec: 1, onInput: reset, aria: 'velocity of the first cart' });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: -6, max: 10, step: 0.5, value: 0, unit: 'm/s', dec: 1, onInput: reset, aria: 'velocity of the second cart' });
  function model() {
    const M1 = m1.v, M2 = m2.v, u1 = v1.v, u2 = v2.v, hits = u1 > u2 + 0.01;
    const tc = hits ? (X2 - X1 - LC) / (u1 - u2) : Infinity;
    const vcm = (M1 * u1 + M2 * u2) / (M1 + M2);
    const e1 = ((M1 - M2) * u1 + 2 * M2 * u2) / (M1 + M2), e2 = ((M2 - M1) * u2 + 2 * M1 * u1) / (M1 + M2);
    const T = hits ? Math.min(6.4, Math.ceil((tc * 1.9) / 0.8) * 0.8) : 2.4;
    const leg = (t, x0, u, w) => (t < tc ? x0 + u * t : x0 + u * tc + w * (t - tc));
    return {
      M1, M2, u1, u2, hits, tc, vcm, T, ptot: M1 * u1 + M2 * u2,
      s1: (t) => leg(t, X1, u1, vcm), s2: (t) => leg(t, X2, u2, vcm),
      b1: (t) => leg(t, X1, u1, e1), b2: (t) => leg(t, X2, u2, e2),
      cm: (t) => (M1 * (X1 + u1 * t) + M2 * (X2 + u2 * t)) / (M1 + M2),
    };
  }
  const cy = cycle(() => model().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const f = model(), tau = cy.now(), T = f.T;
    const lo = Math.min(0, f.b1(T), f.s1(T)) - 0.8, hi = Math.max(X2 + 0.8, f.b2(T), f.s2(T)) + 0.8;
    const SC = 1180 / (hi - lo), X = (m) => 110 + (m - lo) * SC, yT = 215;
    strip(ctx, 80, 1340, yT + 40, 26);
    const a = f.s1(tau), b = f.s2(tau), c = f.cm(tau);
    block(ctx, X(a), yT, LC * SC, 56, PAL.ink); block(ctx, X(b), yT, LC * SC, 56, PAL.ink);
    text(ctx, fmt(f.M1, 1) + ' kg', X(a), yT, PAL.ink, { size: 18, align: 'center' });
    text(ctx, fmt(f.M2, 1) + ' kg', X(b), yT, PAL.ink, { size: 18, align: 'center' });
    const LV = 13;
    arrow(ctx, X(a), yT - 54, X(a) + (tau < f.tc ? f.u1 : f.vcm) * LV, yT - 54, C('velocity'), 4);
    arrow(ctx, X(b), yT - 54, X(b) + (tau < f.tc ? f.u2 : f.vcm) * LV, yT - 54, C('velocity'), 4);
    cross(ctx, X(c), yT + 90, C('position'), 16);
    arrow(ctx, X(c), yT + 90, X(c) + f.vcm * LV, yT + 90, C('velocity'), 4);
    text(ctx, 'the centre of mass, moving at ' + fmt(f.vcm, 2) + ' m/s', X(c), yT + 128, C('position'), { size: 19, weight: 600, align: 'center' });
    /* the graph: where each cart is at every moment, and the straight line of the centre of mass */
    const box = { l: 200, r: 1280, t: 400, b: 710 };
    const r = nice(lo, hi, 4);
    const { X: GX, Y: GY } = axes(ctx, box, [0, T], [r.lo, r.hi], { xl: 't (s)', yl: 'x (m)', xc: C('time'), yc: C('position'), nx: 4, ny: r.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    [f.b1, f.b2].forEach((g) => curve(ctx, g, 0, T, GX, GY, alpha(PAL.ink, 0.35), 3, 100));
    [f.s1, f.s2].forEach((g) => curve(ctx, g, 0, T, GX, GY, PAL.ink, 4, 100));
    curve(ctx, f.cm, 0, T, GX, GY, C('position'), 5, 8);
    text(ctx, 'the centre of mass', box.r - 10, GY(f.cm(T)) - 26, C('position'), { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (f.hits) text(ctx, 'if the carts bounced apart instead', box.r - 10, GY(f.b2(T)) - 26, alpha(PAL.ink, 0.5), { size: 18, align: 'right', bg: alpha(PAL.panel, 0.85) });
    dot(ctx, GX(tau), GY(a), PAL.ink, true, 9); dot(ctx, GX(tau), GY(b), PAL.ink, false, 9);
    dot(ctx, GX(tau), GY(c), C('position'), true, 9);
    headline(ctx, !f.hits ? 'the first cart is no faster than the second, so the two never meet, and the centre of mass moves at ' + fmt(f.vcm, 2) + ' m/s all the same'
      : tau < f.tc ? 't = ' + fmt(tau, 2) + ' s · the carts are still approaching, and the centre of mass is moving at ' + fmt(f.vcm, 2) + ' m/s'
      : 't = ' + fmt(tau, 2) + ' s · the carts have stuck together and move at ' + fmt(f.vcm, 2) + ' m/s, which is the velocity the centre of mass had all along');
    readout(d.readout, `\\kvcm = \\frac{\\kptot}{m_1 + m_2} = \\frac{${fmt(f.ptot, 2)}\\ \\text{kg·m/s}}{${fmt(f.M1 + f.M2, 1)}\\ \\text{kg}} = ${fmt(f.vcm, 2)}\\ \\text{m/s}`,
      'The carts can stick together or bounce apart, and the faint lines show the bounce; either way the total momentum is the same, so the centre of mass keeps the one velocity straight through the collision.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => model().T / 5), draw });
})();

/* =====================================================================
   FIGURE (no number): the measurements the fourth AP item is set on. It
   is a page of readings and answers no slider, so it is a still picture
   with no cycle and no transport.
===================================================================== */
(function () {
  const d = sim('fig-cart-graph', 640);
  const TS = [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0];
  const A = [0, 0.35, 0.6, 1.0, 1.2, 1.5, 1.7, 1.75, 1.95, 2.0, 2.1];
  const B = [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.7, 1.75, 1.95, 2.0, 2.1];
  function draw() {
    const { ctx } = begin(d.c);
    const box = { l: 210, r: 1220, t: 130, b: 500 };
    const { X, Y } = axes(ctx, box, [0, 2], [0, 2.5], { xl: 'Time (s)', yl: 'Position (m)', xc: C('time'), yc: C('position'), nx: 10, ny: 5, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    TS.forEach((t, i) => { dot(ctx, X(t), Y(A[i]), C('position'), true, 10); dot(ctx, X(t), Y(B[i]), C('position'), false, 10); });
    dot(ctx, 270, 175, C('position'), true, 10); text(ctx, 'Cart A', 292, 175, PAL.ink, { size: 19 });
    dot(ctx, 270, 212, C('position'), false, 10); text(ctx, 'Cart B', 292, 212, PAL.ink, { size: 19 });
    headline(ctx, 'eleven readings 0.2 s apart: cart A closes on cart B, and from 1.0 s the two carts are at the same place at every reading');
    tex(d.readout, '\\text{position in m against time in s, one reading every }0.2\\ \\text{s}');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
