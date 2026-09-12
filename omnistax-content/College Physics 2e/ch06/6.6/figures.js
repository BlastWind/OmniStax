/* Figures for section 6.6 Satellites and Kepler's Laws: An Argument for
   Simplicity. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, axes, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers and helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const GRAV = 6.674e-11;                      /* N·m²/kg² */
const M_EARTH = 5.972e24;                    /* kg */
const R_EARTH = 6.380e6;                     /* m */
const MOON_R = 384;                          /* 10³ km */
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s); };
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
/* a tick label on a logarithmic axis, where the tick is the power of ten */
const pow10 = (v) => { const x = Math.pow(10, v); return x >= 1 ? commas(String(Math.round(x))) : String(+x.toFixed(2)); };
/* the period in hours of a circular orbit of radius rk (10³ km) about a mass of mE Earth masses */
const orbitT = (rk, mE) => (TAU * Math.sqrt(Math.pow(rk * 1e6, 3) / (GRAV * M_EARTH * mE))) / 3600;
/* the orbital speed in km/s at that radius */
const orbitV = (rk, mE) => Math.sqrt((GRAV * M_EARTH * mE) / (rk * 1e6)) / 1000;
/* a period in hours, said in hours or in days as the size of it asks */
const sayT = (h) => (h < 72 ? sig3(h) + ' h' : sig3(h / 24) + ' d');
/* Kepler's equation E − e sin E = M, solved for E by Newton's method */
function anomaly(mean, e) {
  let E = mean;
  for (let i = 0; i < 8; i++) E -= (E - e * Math.sin(E) - mean) / (1 - e * Math.cos(E));
  return E;
}
/* an ellipse of semi-major axis a and eccentricity e, drawn about the focus at (fx, fy)
   with the nearest point of the curve to the left of that focus */
function orbitPoint(fx, fy, a, e, E) {
  const b = a * Math.sqrt(1 - e * e);
  return { x: fx - a * (Math.cos(E) - e), y: fy + b * Math.sin(E), r: a * (1 - e * Math.cos(E)) };
}
/* the whole curve, as a path through the scales the scene uses */
function ellipsePath(ctx, fx, fy, a, e, color, w, dash) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= 180; i++) { const p = orbitPoint(fx, fy, a, e, (i * TAU) / 180); if (i) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); }
  ctx.closePath(); ctx.stroke(); ctx.restore();
}

/* a point a fraction f along a segment, pushed k units to one side of it, so a label there sits beside the line */
function beside(ax, ay, bx, by, k, f) {
  const dx = bx - ax, dy = by - ay, n = Math.hypot(dx, dy) || 1, t = f === undefined ? 0.5 : f;
  return { x: ax + dx * t - (dy / n) * k, y: ay + dy * t + (dx / n) * k };
}

/* ---------- sprites, in ink ---------- */
/* a planet of radius rad centred on (x, y), with a lit edge so it reads as a body */
function planet(ctx, x, y, rad, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, rad, 0, TAU); ctx.fill();
  ctx.strokeStyle = PAL.panel; ctx.lineWidth = Math.min(3, Math.max(1.5, rad / 6)); ctx.beginPath(); ctx.arc(x - rad * 0.3, y - rad * 0.3, rad * 0.5, TAU * 0.55, TAU * 0.95); ctx.stroke(); ctx.restore();
}
/* the Sun at (x, y): a disc with eight short rays */
function sun(ctx, x, y, rad, color) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, rad, 0, TAU); ctx.fill();
  ctx.beginPath(); for (let i = 0; i < 8; i++) { const a = (i * TAU) / 8; ctx.moveTo(x + rad * 1.45 * Math.cos(a), y + rad * 1.45 * Math.sin(a)); ctx.lineTo(x + rad * 2.1 * Math.cos(a), y + rad * 2.1 * Math.sin(a)); }
  ctx.stroke(); ctx.restore();
}
/* a drawing pin at (x, y) */
function pin(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 26); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y - 30, 7, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(x, y, 3.5, 0, TAU); ctx.fill(); ctx.restore();
}
/* a pencil whose point rests on (x, y), leaning away from the centre (cx, cy) */
function pencil(ctx, x, y, cx, cy, color) {
  const a = Math.atan2(y - cy, x - cx) || 0, ux = Math.cos(a), uy = Math.sin(a);
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + ux * 52, y + uy * 52); ctx.stroke();
  ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(x + ux * 16, y + uy * 16); ctx.lineTo(x + ux * 48, y + uy * 48); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 6.26: the ellipse of Kepler's first law, drawn twice as the book
   draws it. On the left the pins and the string, on the right the same
   curve with M at one focus. There is no time in the definition of an
   ellipse, so the figure is still: it answers its two sliders and carries
   no transport.
===================================================================== */
(function () {
  const d = sim('sim-ellipse', 690);
  const ecc = ctl(d.controls, { label: 'e', cls: '', min: 0, max: 0.8, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'eccentricity' });
  const ang = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 360, step: 1, value: 55, unit: 'º', dec: 0, aria: 'place of the point on the curve' });
  function draw() {
    const { ctx } = begin(d.c);
    const e = ecc.v, a = 215, b = a * Math.sqrt(1 - e * e), c = a * e, th = ang.v * RAD;
    const px = (cx) => cx + a * Math.cos(th), py = (cy) => cy - b * Math.sin(th);
    /* (a) the pins and the string */
    const cx1 = 370, cy1 = 360, f1 = { x: cx1 - c, y: cy1 }, f2 = { x: cx1 + c, y: cy1 }, P1 = { x: px(cx1), y: py(cy1) };
    text(ctx, '(a) two pins, a string and a pencil', 370, 655, PAL.muted, { size: 20, align: 'center' });
    ellipsePath(ctx, cx1 - c, cy1, a, e, PAL.ink, 4);
    line(ctx, f1.x, f1.y, f2.x, f2.y, PAL.rule, 2, [8, 8]);
    const d1 = Math.hypot(P1.x - f1.x, P1.y - f1.y) / a, d2 = Math.hypot(P1.x - f2.x, P1.y - f2.y) / a;
    line(ctx, f1.x, f1.y, P1.x, P1.y, C('position'), 4);
    line(ctx, f2.x, f2.y, P1.x, P1.y, C('position'), 4);
    text(ctx, fmt(d1, 2) + 'a', (f1.x + P1.x) / 2 - 10, (f1.y + P1.y) / 2 - 18, C('position'), { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, fmt(d2, 2) + 'a', (f2.x + P1.x) / 2 + 10, (f2.y + P1.y) / 2 - 18, C('position'), { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    pin(ctx, f1.x, f1.y, PAL.ink); pin(ctx, f2.x, f2.y, PAL.ink);
    text(ctx, 'f₁', f1.x, f1.y + 26, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'f₂', f2.x, f2.y + 26, PAL.muted, { size: 20, align: 'center' });
    pencil(ctx, P1.x, P1.y, cx1, cy1, PAL.ink);
    dot(ctx, P1.x, P1.y, PAL.ink, true, 6);
    /* (b) the same curve as an orbit, with M at one focus */
    const cx2 = 1030, cy2 = 360, M = { x: cx2 - c, y: cy2 }, P2 = { x: px(cx2), y: py(cy2) };
    text(ctx, '(b) the same curve as an orbit, with M at one focus', 1030, 655, PAL.muted, { size: 20, align: 'center' });
    ellipsePath(ctx, cx2 - c, cy2, a, e, PAL.ink, 4);
    line(ctx, M.x, M.y, P2.x, P2.y, C('position'), 4);
    text(ctx, 'r = ' + fmt(d1, 2) + 'a', (M.x + P2.x) / 2, (M.y + P2.y) / 2 - 20, C('position'), { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    sun(ctx, M.x, M.y, 15, PAL.ink);
    text(ctx, 'M', M.x, M.y + 44, PAL.ink, { size: 22, weight: 600, align: 'center' });
    planet(ctx, P2.x, P2.y, 11, PAL.ink);
    text(ctx, 'm', P2.x + 18, P2.y - 16, PAL.ink, { size: 22, weight: 600 });
    headline(ctx, e < 0.005
      ? 'e = 0.00 · the two foci have met at the centre, so the curve is a circle and both distances are 1.00a everywhere on it'
      : 'e = ' + fmt(e, 2) + ' · the two distances are ' + fmt(d1, 2) + 'a and ' + fmt(d2, 2) + 'a, and they add to 2.00a wherever the pencil sits on the curve');
    readout(d.readout, `d_1 + d_2 = ${fmt(d1, 2)}a + ${fmt(d2, 2)}a = 2.00a`,
      'With M at the focus f₁, the distance from M to m runs from ' + fmt(1 - e, 2) + 'a at the nearest point of the orbit to ' + fmt(1 + e, 2) + 'a at the furthest, and it is ' + fmt(d1, 2) + 'a here.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 6.27: equal areas in equal times. The planet runs one orbit per
   loop at the speed Kepler's second law gives it, and three sectors swept
   in equal times are shaded as the line from M passes over them. The idea
   is about time, so the figure runs a cycle and takes the transport.
===================================================================== */
(function () {
  const d = sim('sim-equal-areas', 660);
  const ecc = ctl(d.controls, { label: 'e', cls: '', min: 0.1, max: 0.7, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'eccentricity' });
  const dur = ctl(d.controls, { label: '\\Delta \\kT', cls: 'time', min: 0.02, max: 0.12, step: 0.005, value: 0.08, unit: 'T', dec: 3, aria: 'length of each swept interval' });
  const cy = cycle(() => 1, 1.2);
  const STARTS = [0.0, 0.26, 0.46], MARKS = [['A', 'B'], ['C', 'D'], ['E', 'F']];
  const CX = 400, CY = 360, A = 230;
  /* the speed of the planet in units of its mean speed, from the vis-viva relation */
  const speedAt = (r, a) => Math.sqrt(Math.max(0, 2 * a / r - 1));
  const at = (f, e) => orbitPoint(CX - A * e, CY, A, e, anomaly(((f % 1) + 1) % 1 * TAU, e));
  function draw() {
    const { ctx } = begin(d.c);
    const e = ecc.v, dt = dur.v, tau = cy.now();
    /* the three sectors, each swept in the same time */
    STARTS.forEach((s, i) => {
      const active = tau >= s && tau <= s + dt;
      ctx.save(); ctx.fillStyle = alpha(PAL.muted, active ? 0.34 : 0.16); ctx.beginPath();
      ctx.moveTo(CX - A * e, CY);
      for (let k = 0; k <= 40; k++) { const p = at(s + (dt * k) / 40, e); ctx.lineTo(p.x, p.y); }
      ctx.closePath(); ctx.fill(); ctx.restore();
      const p0 = at(s, e), p1 = at(s + dt, e);
      line(ctx, CX - A * e, CY, p0.x, p0.y, PAL.muted, 2);
      line(ctx, CX - A * e, CY, p1.x, p1.y, PAL.muted, 2);
      text(ctx, MARKS[i][0], p0.x + 18 * Math.sign(p0.x - CX + A * e || 1), p0.y - 18, PAL.muted, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, MARKS[i][1], p1.x + 18 * Math.sign(p1.x - CX + A * e || 1), p1.y - 18, PAL.muted, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    });
    ellipsePath(ctx, CX - A * e, CY, A, e, PAL.ink, 4);
    /* the planet, the line from M to it, and its velocity along the tangent */
    const p = at(tau, e), pn = at(tau + 0.004, e);
    const vrel = speedAt(p.r / A, 1), ux = pn.x - p.x, uy = pn.y - p.y, un = Math.hypot(ux, uy) || 1;
    line(ctx, CX - A * e, CY, p.x, p.y, C('position'), 4);
    const rl = beside(CX - A * e, CY, p.x, p.y, 20);
    text(ctx, 'r = ' + fmt(p.r / A, 2) + 'a', rl.x, rl.y, C('position'), { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    const vl = clamp(48 * vrel, 24, 110);
    arrow(ctx, p.x, p.y, p.x + (ux / un) * vl, p.y + (uy / un) * vl, C('velocity'), 5);
    text(ctx, 'v', p.x + (ux / un) * (vl + 20), p.y + (uy / un) * (vl + 20), C('velocity'), { size: 22, weight: 600, align: 'center' });
    sun(ctx, CX - A * e, CY, 15, PAL.ink);
    text(ctx, 'M', CX - A * e, CY + 44, PAL.ink, { size: 22, weight: 600, align: 'center' });
    planet(ctx, p.x, p.y, 11, PAL.ink);
    /* the graph: the speed against time for one whole orbit, the three intervals shaded */
    const box = { l: 800, r: 1340, t: 210, b: 520 };
    const { X, Y } = axes(ctx, box, [0, 1], [0, 2.5], { xl: 't / T', yl: 'v / v̄', xc: C('time'), yc: C('velocity'), nx: 4, ny: 5, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 1) });
    STARTS.forEach((s) => { ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.16); ctx.fillRect(X(s), box.t, X(s + dt) - X(s), box.b - box.t); ctx.restore(); });
    line(ctx, box.l, Y(1), box.r, Y(1), PAL.rule, 2, [10, 10]);
    text(ctx, 'mean speed', (box.l + box.r) / 2, Y(1) - 15, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    curve(ctx, (f) => speedAt(at(f, e).r / A, 1), 0, 1, X, Y, C('velocity'), 5, 140);
    dot(ctx, X(tau), Y(vrel), C('velocity'), true, 9);
    line(ctx, X(tau), Y(vrel), X(tau), box.b, C('velocity'), 2, [4, 8]);
    headline(ctx, 't = ' + fmt(tau, 2) + 'T · m is ' + fmt(p.r / A, 2) + 'a from M and moving at ' + fmt(vrel, 2) + ' times its mean speed');
    readout(d.readout, `\\frac{\\kv_{\\text{near}}}{\\kv_{\\text{far}}} = \\frac{1+e}{1-e} = \\frac{1+${fmt(e, 2)}}{1-${fmt(e, 2)}} = ${fmt((1 + e) / (1 - e), 2)}`,
      'Each of the three sectors is swept in ' + fmt(dt, 3) + ' of the period and each covers ' + fmt(dt, 3) + ' of the area inside the orbit, which is what Kepler’s second law says: the planet has to move fastest where it is nearest M.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();

/* =====================================================================
   SIM: the period of a circular orbit. Gravity supplies the centripetal
   force, the satellite's own mass cancels, and the period follows from
   the radius alone. The graph beside the orbit carries Kepler's third law
   as a straight line on logarithmic axes, with the Moon marked on it, so
   that the parent's mass can be read off the line that runs through it.
   The orbit has a period in it, so the figure runs a cycle.
===================================================================== */
(function () {
  const d = sim('sim-third-law', 690);
  const rad = ctl(d.controls, { label: '\\kr', cls: 'position', min: 7, max: 400, step: 0.01, value: 7.88, unit: '×10³ km', dec: 2, onInput: reset, aria: 'orbital radius' });
  const mass = ctl(d.controls, { label: 'M', cls: '', min: 0.2, max: 2.5, step: 0.01, value: 1, unit: 'M⊕', dec: 2, onInput: reset, aria: 'mass of the parent body' });
  const cy = cycle(() => 1, 1.0);
  function reset() { cy.reset(); }
  const CX = 340, CY = 400, RDRAW = 200;
  function draw() {
    const { ctx } = begin(d.c);
    const rk = rad.v, mE = mass.v, tau = cy.now();
    const T = orbitT(rk, mE), v = orbitV(rk, mE), ac = (v * 1000) * (v * 1000) / (rk * 1e6);
    const th = tau * TAU, sx = CX + RDRAW * Math.cos(th), sy = CY - RDRAW * Math.sin(th);
    /* the scene: the orbit always drawn at the same size, so the parent shrinks as the orbit grows */
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(CX, CY, RDRAW, 0, TAU); ctx.stroke(); ctx.restore();
    const bodyR = clamp((RDRAW * R_EARTH) / (rk * 1e6), 7, 162);
    if (bodyR > 24) {
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(CX, CY, bodyR, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, 'M', CX, CY, PAL.ink, { size: 26, weight: 600, align: 'center' });
    } else {
      planet(ctx, CX, CY, bodyR, PAL.ink);
      text(ctx, 'M', CX, CY + bodyR + 24, PAL.ink, { size: 22, weight: 600, align: 'center' });
    }
    line(ctx, CX, CY, sx, sy, C('position'), 3, [6, 8]);
    const rl = beside(CX, CY, sx, sy, 20, 0.76);
    text(ctx, 'r', rl.x, rl.y, C('position'), { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the gravitational force toward the centre and the velocity along the tangent */
    const fl = clamp(70 * Math.sqrt((mE / (rk * rk)) / (1 / (7.88 * 7.88))), 22, 120);
    const vl = clamp(70 * (v / orbitV(7.88, 1)), 26, 120);
    const ir = Math.hypot(CX - sx, CY - sy) || 1;
    arrow(ctx, sx, sy, sx + ((CX - sx) / ir) * fl, sy + ((CY - sy) / ir) * fl, C('force'), 5);
    text(ctx, 'F', sx + ((CX - sx) / ir) * (fl + 22), sy + ((CY - sy) / ir) * (fl + 22), C('force'), { size: 22, weight: 600, align: 'center' });
    arrow(ctx, sx, sy, sx - Math.sin(th) * vl, sy - Math.cos(th) * vl, C('velocity'), 5);
    text(ctx, 'v', sx - Math.sin(th) * (vl + 22), sy - Math.cos(th) * (vl + 22), C('velocity'), { size: 22, weight: 600, align: 'center' });
    dot(ctx, sx, sy, PAL.ink, true, 10);
    text(ctx, 'the satellite, of mass m', CX, CY + RDRAW + 62, PAL.muted, { size: 17, align: 'center' });
    /* the graph: the period against the radius, where the third law is a straight line */
    const box = { l: 730, r: 1330, t: 150, b: 540 };
    const { X, Y } = axes(ctx, box, [0, 3], [0, 4], { xl: 'r (×10³ km)', yl: 'T (h)', xc: C('position'), yc: C('time'), nx: 3, ny: 4, fx: pow10, fy: pow10 });
    const lK = Math.log10(orbitT(1, mE));
    const lrLo = clamp((0 - lK) / 1.5, 0, 3), lrHi = clamp((4 - lK) / 1.5, 0, 3);
    curve(ctx, (lr) => Math.log10(orbitT(Math.pow(10, lr), mE)), lrLo, lrHi, X, Y, C('time'), 5, 60);
    const moonT = orbitT(MOON_R, mE), moonOff = orbitT(MOON_R, 1) / moonT;
    dot(ctx, X(Math.log10(MOON_R)), Y(Math.log10(orbitT(MOON_R, 1))), PAL.ink, false, 11);
    text(ctx, 'the Moon', X(Math.log10(MOON_R)) - 16, Y(Math.log10(orbitT(MOON_R, 1))) - 24, PAL.ink, { size: 17, align: 'right' });
    dot(ctx, X(Math.log10(rk)), Y(Math.log10(T)), C('time'), true, 10);
    line(ctx, X(Math.log10(rk)), Y(Math.log10(T)), X(Math.log10(rk)), box.b, C('position'), 2, [4, 8]);
    headline(ctx, 'r = ' + fmt(rk, 2) + ' × 10³ km · the satellite goes round in ' + sayT(T) + ' at ' + sig3(v) + ' km/s, whatever its own mass is');
    readout(d.readout, `G\\frac{mM}{\\kr^2} = m\\kac = m\\frac{\\kv^2}{\\kr} \\;\\Rightarrow\\; \\kv = \\sqrt{\\frac{GM}{\\kr}} = ${sig3(v)}\\ \\text{km/s}, \\quad \\kac = \\frac{\\kv^2}{\\kr} = ${sig3(ac)}\\ \\text{m/s}^2`,
      Math.abs(moonOff - 1) < 0.02
        ? 'The line runs through the Moon’s point, so a parent of ' + fmt(mE, 2) + ' Earth masses is what holds the Moon in an orbit of 384 × 10³ km and 27.3 d. That is how the mass of a parent body is found from a satellite.'
        : 'The Moon takes 27.3 d over an orbit of 384 × 10³ km, and the line misses its point by a factor of ' + fmt(moonOff > 1 ? moonOff : 1 / moonOff, 2) + '. Slide the parent’s mass until the line runs through the Moon, and you have weighed the parent.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();

/* =====================================================================
   FIGURE 6.28: the same two motions drawn twice, once with Earth at the
   centre and once with the Sun. The loops the left picture needs an
   epicycle for are what the right picture gets from one rule. The planets
   run, so the figure cycles over eight years.
===================================================================== */
(function () {
  const d = sim('sim-frames', 570);
  const rad = ctl(d.controls, { label: '\\kr', cls: 'position', min: 1.2, max: 3, step: 0.01, value: 1.52, unit: 'AU', dec: 2, onInput: reset, aria: 'orbital radius of the outer planet' });
  const trail = ctl(d.controls, { label: '\\Delta \\kt', cls: 'time', min: 1, max: 8, step: 0.1, value: 4, unit: 'y', dec: 1, aria: 'length of track kept' });
  const cy = cycle(() => 8, 1.0);
  function reset() { cy.reset(); }
  const CY = 320, CX1 = 380, CX2 = 1020, RMAX = 190;
  function draw() {
    const { ctx } = begin(d.c);
    const r = rad.v, tr = trail.v, t = cy.now(), P = Math.pow(r, 1.5);
    const syn = 1 / Math.abs(1 - 1 / P);
    const earth = (s) => ({ x: Math.cos(TAU * s), y: Math.sin(TAU * s) });
    const outer = (s) => ({ x: r * Math.cos(TAU * s / P), y: r * Math.sin(TAU * s / P) });
    /* (a) Earth at the centre: the Sun on a circle, the outer planet on a track that loops */
    const S1 = RMAX / (r + 1);
    text(ctx, '(a) Earth at the centre, as the Ptolemaic model had it', CX1, 94, PAL.muted, { size: 20, align: 'center' });
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([8, 8]); ctx.beginPath(); ctx.arc(CX1, CY, S1, 0, TAU); ctx.stroke(); ctx.restore();
    const t0 = Math.max(0, t - tr);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= 320; i++) {
      const s = t0 + ((t - t0) * i) / 320, e = earth(s), o = outer(s);
      const gx = CX1 + (o.x - e.x) * S1, gy = CY - (o.y - e.y) * S1;
      if (i) ctx.lineTo(gx, gy); else ctx.moveTo(gx, gy);
    }
    ctx.stroke(); ctx.restore();
    const e1 = earth(t), o1 = outer(t);
    const sunG = { x: CX1 - e1.x * S1, y: CY + e1.y * S1 }, outG = { x: CX1 + (o1.x - e1.x) * S1, y: CY - (o1.y - e1.y) * S1 };
    const away = (q, k) => { const n = Math.hypot(q.x - CX1, q.y - CY) || 1; return { x: q.x + ((q.x - CX1) / n) * k, y: q.y + ((q.y - CY) / n) * k }; };
    sun(ctx, sunG.x, sunG.y, 13, PAL.ink);
    const sl = away(sunG, 42); text(ctx, 'Sun', sl.x, sl.y, PAL.muted, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    planet(ctx, outG.x, outG.y, 10, PAL.ink);
    const ol = away(outG, 34); text(ctx, 'planet', ol.x, ol.y, PAL.ink, { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    planet(ctx, CX1, CY, 13, PAL.ink);
    /* Earth's own label goes on the side away from the Sun, so the two never sit on each other */
    const sn = Math.hypot(sunG.x - CX1, sunG.y - CY) || 1;
    text(ctx, 'Earth', CX1 - ((sunG.x - CX1) / sn) * 34, CY - ((sunG.y - CY) / sn) * 34, PAL.ink, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* (b) the Sun at the centre: two plain circles */
    const S2 = RMAX / r;
    text(ctx, '(b) the Sun at the centre, as the Copernican model has it', CX2, 94, PAL.muted, { size: 20, align: 'center' });
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
    ctx.beginPath(); ctx.arc(CX2, CY, S2, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.arc(CX2, CY, S2 * r, 0, TAU); ctx.stroke(); ctx.restore();
    const eH = { x: CX2 + e1.x * S2, y: CY - e1.y * S2 }, oH = { x: CX2 + o1.x * S2, y: CY - o1.y * S2 };
    line(ctx, CX2, CY, oH.x, oH.y, C('position'), 3);
    const rl2 = beside(CX2, CY, oH.x, oH.y, 20);
    text(ctx, 'r = ' + fmt(r, 2) + ' AU', rl2.x, rl2.y, C('position'), { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    sun(ctx, CX2, CY, 15, PAL.ink);
    const out2 = (q, k) => { const n = Math.hypot(q.x - CX2, q.y - CY) || 1; return { x: q.x + ((q.x - CX2) / n) * k, y: q.y + ((q.y - CY) / n) * k }; };
    planet(ctx, eH.x, eH.y, 9, PAL.ink);
    const el2 = out2(eH, 30); text(ctx, 'Earth', el2.x, el2.y, PAL.ink, { size: 18, weight: 600, align: 'center' });
    planet(ctx, oH.x, oH.y, 10, PAL.ink);
    const ol2 = out2(oH, 32); text(ctx, 'planet', ol2.x, ol2.y, PAL.ink, { size: 18, weight: 600, align: 'center' });
    const loops = Math.floor((t - t0) / syn);
    headline(ctx, t - t0 < 0.3
      ? 't = ' + fmt(t, 1) + ' y · the two planets have just set out, and the track seen from Earth is only beginning'
      : 't = ' + fmt(t, 1) + ' y · seen from the Sun the planet runs a plain circle, and seen from Earth it has turned back on itself '
        + (loops === 0 ? 'not once' : loops === 1 ? 'once' : loops === 2 ? 'twice' : loops + ' times') + ' in the last ' + fmt(t - t0, 1) + ' y');
    readout(d.readout, `\\kT = \\kr^{3/2} = (${fmt(r, 2)})^{3/2} = ${fmt(P, 2)}\\ \\text{y}`,
      'Kepler’s third law fixes the planet’s period from its distance alone, and both pictures hold that one motion. Earth overtakes the planet once every ' + fmt(syn, 2) + ' y, and each time it does, the track on the left turns back on itself.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 8 / 6), draw });
})();

};
