/* Figures for section 6.2 Centripetal Acceleration. Boots against the section's text article.
   Two of the three figures move, because an object going round a circle has a time in it and the
   turning of its velocity is the whole subject; the ultracentrifuge is a still picture, since a
   rotor at 7.5 × 10⁴ rev/min turns more than a thousand times a second and no drawing can follow it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, axes, nice, curve, car } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180, G = 9.80;
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a large number as the book writes it, 4.63 × 10⁶ */
function sci(x, d = 2) {
  if (!isFinite(x) || Math.abs(x) < 1e-12) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  return fmt(x / Math.pow(10, e), d) + ' × 10' + sup(e);
}
/* the same number written for KaTeX */
function scitex(x, d = 2) {
  if (!isFinite(x) || Math.abs(x) < 1e-12) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  return `${fmt(x / Math.pow(10, e), d)}\\times 10^{${e}}`;
}
/* a large count written out to three figures, 472,000 */
const count3 = (x) => commas(Number(Number(x).toPrecision(3)).toFixed(0));
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0);
/* the point of a circle at the maths angle a, y counted down the page */
const cxa = (cx, R, a) => cx + R * Math.cos(a), cya = (cy, R, a) => cy - R * Math.sin(a);
/* the direction of travel at the maths angle a, counterclockwise, in screen coordinates */
const tang = (a) => [-Math.sin(a), -Math.cos(a)];
/* an arc of a circle from the maths angle a1 counterclockwise round to a2 */
function arcpath(ctx, cx, cy, R, a1, a2, color, w = 3, dash) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.arc(cx, cy, R, -a1, -a2, true); ctx.stroke(); ctx.restore();
}
/* a curved arrow round the top of a circle, the sign that the whole thing is turning */
function curl(ctx, cx, cy, R, color) {
  arcpath(ctx, cx, cy, R, 0.32 * Math.PI, 0.68 * Math.PI, color, 3);
  const a = 0.68 * Math.PI, tx = cxa(cx, R, a), ty = cya(cy, R, a);
  arrow(ctx, tx + 16 * Math.sin(a), ty + 16 * Math.cos(a), tx, ty, color, 3);
}
/* a label beside a radial arrow, pushed off the radius so the two never sit on each other */
function beside(ctx, s, cx, cy, R, a, off, color, size = 20) {
  const t = tang(a);
  text(ctx, s, cxa(cx, R, a) + off * t[0], cya(cy, R, a) + off * t[1], color, { size, weight: 600, align: 'center', bg: PAL.panel });
}

/* =====================================================================
   FIGURE 6.7: the two velocities and their difference. The object runs
   once round the circle each loop; a hollow marker trails it by the angle
   Δθ, the two radii and the arc between them are drawn, and the velocity
   triangle stands beside the circle so that Δv can be read off. Finite
   motion, one revolution per loop, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-triangles', 740);
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'm', dec: 1, onInput: reset, aria: 'radius of the circular path' });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1, max: 10, step: 0.5, value: 5, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed round the circle' });
  const dth = ctl(d.controls, { label: '\\Delta\\theta', cls: '', min: 5, max: 90, step: 1, value: 40, unit: 'º', dec: 0, aria: 'angle between the two points' });
  const per = () => (TAU * r.v) / v.v;                 /* the time for one revolution, in seconds */
  const cy = cycle(per, 1.2);
  function reset() { cy.reset(); }
  const A0 = 1.15;                                     /* where the object stands at the start of a loop */
  function draw() {
    const { ctx } = begin(d.c);
    const T = per(), tau = cy.now(), turned = (tau / T) * 360;
    const th = A0 + (tau / T) * TAU, dt = dth.v * RAD, a1 = th - dt, am = th - dt / 2;
    const dv = 2 * v.v * Math.sin(dt / 2), ds = r.v * dt, chord = 2 * r.v * Math.sin(dt / 2);
    const pos = C('position'), vel = C('velocity'), acc = C('acceleration');
    const cx = 430, cyc = 400, R = 128 + 21 * r.v, Lv = 50 + 5 * v.v;
    /* the circle, the two points on it, and the arc and chord between them */
    arcpath(ctx, cx, cyc, R, 0, TAU, PAL.rule, 3);
    dot(ctx, cx, cyc, PAL.muted, true, 6);
    const x1 = cxa(cx, R, a1), y1 = cya(cyc, R, a1), x2 = cxa(cx, R, th), y2 = cya(cyc, R, th);
    line(ctx, cx, cyc, x1, y1, pos, 3); line(ctx, cx, cyc, x2, y2, pos, 3);
    beside(ctx, 'r = ' + fmt(r.v, 1) + ' m', cx, cyc, R * 0.74, a1, -32, pos);
    line(ctx, x1, y1, x2, y2, PAL.muted, 2, [8, 8]);
    arcpath(ctx, cx, cyc, R, a1, th, pos, 7);
    beside(ctx, 'Δs = ' + fmt(ds, 2) + ' m', cx, cyc, R + 46, am, 0, pos);
    /* the angle at the centre */
    const ra = 0.26 * R;
    arcpath(ctx, cx, cyc, ra, a1, th, PAL.ink, 2.5);
    beside(ctx, 'Δθ = ' + fmt(dth.v, 0) + 'º', cx, cyc, ra + 26, am, 0, PAL.ink);
    /* the change of velocity, drawn on the circle from the middle of the arc toward the centre */
    const La = 0.40 * R;
    arrow(ctx, cxa(cx, R, am), cya(cyc, R, am), cxa(cx, R - La, am), cya(cyc, R - La, am), acc, 5);
    beside(ctx, 'a_c', cx, cyc, R - La / 2, am, -34, acc, 22);
    /* the two velocities, along the tangents */
    const t1 = tang(a1), t2 = tang(th);
    arrow(ctx, x1, y1, x1 + t1[0] * Lv, y1 + t1[1] * Lv, alpha(vel, 0.55), 4);
    text(ctx, 'v₁', x1 + t1[0] * (Lv + 26), y1 + t1[1] * (Lv + 26), vel, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, x2, y2, x2 + t2[0] * Lv, y2 + t2[1] * Lv, vel, 5);
    text(ctx, 'v₂', x2 + t2[0] * (Lv + 26), y2 + t2[1] * (Lv + 26), vel, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    dot(ctx, x1, y1, pos, false, 10); dot(ctx, x2, y2, PAL.ink, true, 11);
    /* the velocity triangle, the same two arrows laid tail to tail at the right */
    const tx = 1090, ty = 410;
    text(ctx, 'the same two velocities, laid tail to tail', tx, 240, PAL.muted, { size: 19, align: 'center' });
    const e1 = [tx + t1[0] * Lv, ty + t1[1] * Lv], e2 = [tx + t2[0] * Lv, ty + t2[1] * Lv];
    ctx.save(); ctx.fillStyle = alpha(vel, 0.12); ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(e1[0], e1[1]); ctx.lineTo(e2[0], e2[1]); ctx.closePath(); ctx.fill(); ctx.restore();
    arrow(ctx, tx, ty, e1[0], e1[1], alpha(vel, 0.55), 4);
    text(ctx, 'v₁', tx + t1[0] * (Lv + 28), ty + t1[1] * (Lv + 28), vel, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, tx, ty, e2[0], e2[1], vel, 5);
    text(ctx, 'v₂', tx + t2[0] * (Lv + 28), ty + t2[1] * (Lv + 28), vel, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, e1[0], e1[1], e2[0], e2[1], vel, 5);
    const mx = (e1[0] + e2[0]) / 2, my = (e1[1] + e2[1]) / 2, mn = Math.hypot(mx - tx, my - ty) || 1;
    text(ctx, 'Δv = ' + fmt(dv, 2) + ' m/s', mx + ((mx - tx) / mn) * 52, my + ((my - ty) / mn) * 52, vel, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    dot(ctx, tx, ty, PAL.muted, true, 6);
    headline(ctx, 'the object has turned ' + fmt(turned, 0) + 'º · Δθ = ' + fmt(dth.v, 0) + 'º, so Δv = ' + fmt(dv, 2) + ' m/s, aimed at the centre from the middle of the arc');
    readout(d.readout, `\\frac{\\kdv}{\\kv} = \\frac{\\kds}{\\kr}\\quad\\Longrightarrow\\quad \\frac{${fmt(dv, 2)}}{${fmt(v.v, 1)}} = ${fmt(dv / v.v, 3)} \\quad\\text{and}\\quad \\frac{${fmt(ds, 2)}}{${fmt(r.v, 1)}} = ${fmt(ds / r.v, 3)}`,
      'The triangle of the two velocities and the triangle of the two radii are similar, so Δv/v is exactly the chord, ' + fmt(chord, 2) + ' m, divided by r. The book puts the arc Δs in place of the chord, which at Δθ = ' + fmt(dth.v, 0) + 'º is ' + fmt(100 * (ds / chord - 1), 1) + '% longer; take Δθ down toward zero and the two agree, and Δv comes to point straight at the centre.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => per() / 5), draw });
})();

/* =====================================================================
   FIGURE 6.8: the car on the highway curve. It drives once round the
   curve each loop with its velocity along the tangent and its centripetal
   acceleration toward the centre, and the graph beside the scene follows
   a_c against the speed for the radius set. Finite motion, so it gets the
   scrubber.
===================================================================== */
(function () {
  const d = sim('sim-curve', 650);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 40, step: 0.5, value: 25, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed round the curve' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 50, max: 800, step: 10, value: 500, unit: 'm', dec: 0, onInput: reset, aria: 'radius of the curve' });
  const per = () => (TAU * r.v) / v.v;
  const cy = cycle(per, 1.2);
  function reset() { cy.reset(); }
  const VMAX = 40;
  function draw() {
    const { ctx } = begin(d.c);
    const T = per(), tau = cy.now(), th = 1.3 + (tau / T) * TAU;
    const ac = (v.v * v.v) / r.v, ratio = ac / G, turned = (tau / T) * 360;
    const pos = C('position'), vel = C('velocity'), acc = C('acceleration');
    /* the circular road, seen from above */
    const cx = 380, cyc = 350, R = 100 + 0.14 * r.v;
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 46; ctx.beginPath(); ctx.arc(cx, cyc, R, 0, TAU); ctx.stroke(); ctx.restore();
    arcpath(ctx, cx, cyc, R, 0, TAU, PAL.panel, 3, [24, 20]);
    dot(ctx, cx, cyc, PAL.muted, true, 6);
    const bx = cxa(cx, R, th), by = cya(cyc, R, th);
    line(ctx, cx, cyc, bx, by, pos, 3, [6, 8]);
    beside(ctx, 'r = ' + fmt(r.v, 0) + ' m', cx, cyc, R * 0.5, th, -28, pos);
    /* the car, nose along the tangent, with its velocity and its acceleration */
    const tv = tang(th);
    ctx.save(); ctx.translate(bx, by); ctx.rotate(Math.atan2(tv[1], tv[0])); car(ctx, 0, 0, PAL.ink, 0.72); ctx.restore();
    const Lv = 45 + 2.4 * v.v, La = Math.min(0.55 * R, 40 + 100 * Math.min(1, ac / 8));
    arrow(ctx, bx, by, bx + tv[0] * Lv, by + tv[1] * Lv, vel, 5);
    text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', bx + tv[0] * (Lv + 30), by + tv[1] * (Lv + 30), vel, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, bx, by, cxa(cx, R - La, th), cya(cyc, R - La, th), acc, 5);
    beside(ctx, 'a_c = ' + fmt(ac, 2) + ' m/s²', cx, cyc, R - La, th, 34, acc);
    /* the graph: a_c against the speed, for the radius set */
    const yr = nice(0, (VMAX * VMAX) / r.v, 4), yd = decs(yr);
    const g = axes(ctx, { l: 890, r: 1330, t: 180, b: 460 }, [0, VMAX], [0, yr.hi], { xl: 'v (m/s)', xc: vel, yl: 'a_c (m/s²)', yc: acc, nx: 4, ny: yr.n, fy: (y) => fmt(y, yd) });
    curve(ctx, (s) => (s * s) / r.v, 0, VMAX, g.X, g.Y, acc, 5);
    line(ctx, g.X(v.v), g.Y(0), g.X(v.v), g.Y(ac), vel, 2, [4, 8]);
    line(ctx, g.X(0), g.Y(ac), g.X(v.v), g.Y(ac), acc, 2, [4, 8]);
    dot(ctx, g.X(v.v / 2), g.Y(ac / 4), acc, false, 9);
    dot(ctx, g.X(v.v), g.Y(ac), PAL.ink, true, 10);
    const left = v.v < 26;
    text(ctx, fmt(ac, 2) + ' m/s² = ' + fmt(ratio, 3) + ' g', g.X(v.v) + (left ? 18 : -18), g.Y(ac) - 28, acc, { size: 19, weight: 600, align: left ? 'left' : 'right', bg: PAL.panel });
    text(ctx, 'the hollow point is half the speed and a quarter of the acceleration', 1110, 556, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, 't = ' + fmt(tau, 0) + ' s · the car has turned ' + fmt(turned, 0) + 'º, and a_c = ' + fmt(ac, 2) + ' m/s² still points straight at the centre');
    readout(d.readout, `\\kac = \\frac{\\kv^2}{\\kr} = \\frac{(${fmt(v.v, 1)}\\ \\text{m/s})^2}{${fmt(r.v, 0)}\\ \\text{m}} = ${fmt(ac, 2)}\\ \\text{m/s}^2`,
      'Compared with the acceleration due to gravity, a_c/g = ' + fmt(ac, 2) + '/9.80 = ' + fmt(ratio, 3) + ', so this curve asks ' + fmt(ratio, 3) + ' of what gravity asks of you standing still. One lap at this speed takes ' + fmt(T, 0) + ' s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => per() / 5), draw });
})();

/* =====================================================================
   SIM: the ultracentrifuge of Example 6.3. The second form of the result,
   a_c = rω², at a scale where the ratio to g runs into the hundreds of
   thousands. Still: the rotor turns more than a thousand times a second,
   so there is nothing an animation could honestly show; the figure answers
   its two sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-centrifuge', 660);
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 1, max: 15, step: 0.25, value: 7.5, unit: 'cm', dec: 2, aria: 'distance of the sample from the axis' });
  const rpm = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0.5, max: 9, step: 0.25, value: 7.5, unit: '×10⁴ rev/min', dec: 2, aria: 'angular velocity in revolutions per minute' });
  const WMAX = 9;
  const omega = (x) => (x * 1e4 * TAU) / 60;           /* revolutions per minute in units of 10⁴, as radians per second */
  function draw() {
    const { ctx } = begin(d.c);
    const rm = r.v / 100, w = omega(rpm.v), ac = rm * w * w, ratio = ac / G;
    const pos = C('position'), vel = C('velocity'), acc = C('acceleration'), ang = C('angular-rate');
    /* the rotor: its housing, the bar through the axis, and a tube at each end of it */
    const cx = 380, cyc = 370, HOUSE = 235, a0 = 30 * RAD, Rr = 42 + 10.5 * r.v;
    arcpath(ctx, cx, cyc, HOUSE, 0, TAU, PAL.rule, 4);
    arcpath(ctx, cx, cyc, HOUSE - 14, 0, TAU, PAL.soft, 18);
    const sx = cxa(cx, Rr, a0), sy = cya(cyc, Rr, a0), ox = cxa(cx, Rr, a0 + Math.PI), oy = cya(cyc, Rr, a0 + Math.PI);
    arcpath(ctx, cx, cyc, Rr, 0, TAU, PAL.muted, 2, [10, 10]);
    line(ctx, ox, oy, sx, sy, PAL.muted, 16);
    line(ctx, cx, cyc, sx, sy, pos, 5);
    dot(ctx, ox, oy, PAL.muted, true, 13);
    dot(ctx, cx, cyc, PAL.panel, true, 9);
    dot(ctx, sx, sy, PAL.ink, true, 15);
    text(ctx, 'm', sx + 22 * Math.cos(a0), sy - 22 * Math.sin(a0), PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    beside(ctx, 'r = ' + fmt(r.v, 2) + ' cm', cx, cyc, Rr * 0.58, a0, -48, pos);
    curl(ctx, cx, cyc, HOUSE + 24, ang);
    text(ctx, 'ω = ' + Math.round(w) + ' rad/s', cx, cyc - HOUSE - 40, ang, { size: 22, weight: 600, align: 'center' });
    /* the acceleration toward the axis, and the velocity the sample would keep without it */
    const La = Math.min(0.55 * Rr, 100);
    arrow(ctx, sx, sy, cxa(cx, Rr - La, a0), cya(cyc, Rr - La, a0), acc, 5);
    beside(ctx, 'a_c', cx, cyc, Rr - La / 2, a0, 34, acc, 22);
    const tv = tang(a0);
    arrow(ctx, sx, sy, sx + tv[0] * 120, sy + tv[1] * 120, vel, 4);
    text(ctx, 'v = ' + count3(rm * w) + ' m/s', sx + tv[0] * 152, sy + tv[1] * 152, vel, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the graph: the acceleration in multiples of g, against the angular velocity, for the radius set */
    const top = (rm * omega(WMAX) * omega(WMAX)) / G, yr = nice(0, top, 4);
    const g = axes(ctx, { l: 960, r: 1330, t: 190, b: 470 }, [0, WMAX], [0, yr.hi], { xl: 'ω (10⁴ rev/min)', xc: ang, yl: 'a_c / g', yc: acc, nx: 3, ny: yr.n, fy: (y) => commas(Math.round(y)) });
    curve(ctx, (x) => (rm * omega(x) * omega(x)) / G, 0, WMAX, g.X, g.Y, acc, 5);
    line(ctx, g.X(rpm.v), g.Y(0), g.X(rpm.v), g.Y(ratio), ang, 2, [4, 8]);
    dot(ctx, g.X(rpm.v), g.Y(ratio), PAL.ink, true, 10);
    const left = rpm.v < 5.5;
    text(ctx, count3(ratio) + ' g', g.X(rpm.v) + (left ? 18 : -18), g.Y(ratio) - 28, acc, { size: 19, weight: 600, align: left ? 'left' : 'right', bg: PAL.panel });
    headline(ctx, 'a point ' + fmt(r.v, 2) + ' cm from the axis at ' + fmt(rpm.v, 2) + ' × 10⁴ rev/min is accelerated at ' + sci(ac) + ' m/s², or ' + count3(ratio) + ' g');
    readout(d.readout, `\\kac = \\kr\\kw^2 = (${fmt(rm, 4)}\\ \\text{m})(${Math.round(w)}\\ \\text{rad/s})^2 = ${scitex(ac)}\\ \\text{m/s}^2`,
      fmt(rpm.v, 2) + ' × 10⁴ rev/min is ' + Math.round(w) + ' rad/s, since one revolution is 2π rad and one minute is 60.0 s. The acceleration is ' + count3(ratio) + ' times g, and it grows with the square of the angular velocity but only in proportion to the radius, which is why a centrifuge is made to spin fast rather than made wide.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
