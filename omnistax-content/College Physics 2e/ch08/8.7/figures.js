/* Figures for section 8.7 Introduction to Rocket Propulsion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, vbracket, axes, nice, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers ---------- */
const G = 9.80;
const SUP = { '-': '\u207b', 0: '\u2070', 1: '\u00b9', 2: '\u00b2', 3: '\u00b3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079' };
/* a number in scientific notation for a drawn label, 3.36 × 10⁷ */
function sciT(v, d = 2) {
  if (!isFinite(v) || v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return fmt(m, d) + ' \u00d7 10' + String(e).split('').map((c) => SUP[c]).join('');
}
/* the same for a readout, in LaTeX */
function sciX(v, d = 2) {
  if (!isFinite(v) || v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return `${fmt(m, d)}\\times10^{${e}}`;
}
/* thousands separated, so a tick reads 15,000 rather than 15000 */
const commas = (t) => t.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0);

/* ---------- sprites, in ink ---------- */
/* a rocket standing on its fins, centred on (x, y), 134 units tall at scale 1 */
function rocket(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(0, -70); ctx.lineTo(17, -30); ctx.lineTo(17, 40); ctx.lineTo(32, 64); ctx.lineTo(-32, 64); ctx.lineTo(-17, 40); ctx.lineTo(-17, -30);
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-17, -8); ctx.lineTo(17, -8); ctx.stroke();
  ctx.restore();
}
/* the exhaust streaming from the nozzle at (x, y), len units long */
function plume(ctx, x, y, len, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.3);
  ctx.beginPath(); ctx.moveTo(x - 20, y); ctx.quadraticCurveTo(x - 11, y + len * 0.6, x, y + len); ctx.quadraticCurveTo(x + 11, y + len * 0.6, x + 20, y);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a bar from x1 to x2 at y, h tall, filled to the fraction f in colour */
function bar(ctx, x1, x2, y, h, f, color) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x1, y, x2 - x1, h);
  ctx.fillStyle = color; ctx.fillRect(x1, y, Math.max(0, Math.min(1, f)) * (x2 - x1), h);
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(x1, y, x2 - x1, h); ctx.restore();
}

/* =====================================================================
   FIGURE 8.12: the rocket before and after it ejects a mass of gas, with
   its free-body diagram. The mass falls while the rocket burns, so the
   idea has a clock in it: one burn per loop, from liftoff to the moment
   the fuel is exhausted, with the scrubber. Three quarters of the liftoff
   mass is fuel, so that the burn has an end.
===================================================================== */
(function () {
  const d = sim('sim-rocket', 800);
  const ve = ctl(d.controls, { label: '\\kve', cls: 'velocity', min: 0.5, max: 2.5, step: 0.05, value: 2.4, unit: '\u00d7 10\u00b3 m/s', dec: 2, onInput: reset, aria: 'exhaust velocity' });
  const rate = ctl(d.controls, { label: '\\Delta m / \\kdt', cls: '', min: 2, max: 20, step: 0.5, value: 14, unit: '\u00d7 10\u00b3 kg/s', dec: 1, onInput: reset, aria: 'rate at which gas is ejected' });
  const m0 = ctl(d.controls, { label: 'm_0', cls: '', min: 0.5, max: 4, step: 0.05, value: 2.8, unit: '\u00d7 10\u2076 kg', dec: 2, onInput: reset, aria: 'mass at liftoff' });
  const FUEL = 0.75;                                    /* the share of the liftoff mass that is fuel in this scene */
  const V = () => ve.v * 1e3, R = () => rate.v * 1e3, M0 = () => m0.v * 1e6;
  const burn = () => (FUEL * M0()) / R();               /* the time the fuel lasts */
  const mass = (t) => M0() - R() * t;
  const acc = (t) => (V() * R()) / mass(t) - G;
  const vel = (t) => V() * Math.log(M0() / mass(t)) - G * t;
  /* the height reached, integrated in closed form, so the drawing is a function of the time alone */
  const height = (t) => { const A = mass(t); return (V() / R()) * (R() * t - A * Math.log(M0() / A)) - 0.5 * G * t * t; };
  const cy = cycle(() => burn(), 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const T = burn(), tau = cy.now(), done = tau >= T - 1e-9;
    const m = mass(tau), a = acc(tau), v = vel(tau), p = m * v;
    const thrust = V() * R(), weight = m * G, Fmax = Math.max(thrust, M0() * G);
    const yTop = Math.max(1e-6, height(T)), prog = Math.max(0, Math.min(1, height(tau) / yTop));
    const pMax = Math.max(1, mass(T) * Math.max(vel(T), 1));

    /* the scene: the rocket and the gas it throws down */
    const rx = 270, ry = 600 - 340 * prog, S = 1.3;
    const Lv = 40 + 50 * (V() / 2500);
    plume(ctx, rx, ry + 81, 70 + 40 * (R() / 2e4), C('velocity'));
    rocket(ctx, rx, ry, PAL.ink, S);
    arrow(ctx, rx, ry + 100, rx, ry + 100 + Lv, C('velocity'), 5);
    text(ctx, 'v\u2091 = ' + sciT(V()) + ' m/s', rx - 40, ry + 100 + Lv / 2, C('velocity'), { size: 20, weight: 600, align: 'right' });
    line(ctx, 40, 686, 190, 686, PAL.rule, 2, [10, 10]);
    text(ctx, 'where it lifted off', 40, 708, PAL.muted, { size: 17 });

    /* the free-body diagram: the thrust that lifts the rocket and the weight that holds it down */
    const fx = 600, fy = 410, Lt = 40 + 150 * (thrust / Fmax), Lw = 40 + 150 * (weight / Fmax);
    dot(ctx, fx, fy, PAL.ink, true, 10);
    text(ctx, 'the rocket', fx + 22, fy, PAL.muted, { size: 17 });
    arrow(ctx, fx, fy, fx, fy - Lt, C('force'), 5);
    text(ctx, 'thrust = ' + sciT(thrust) + ' N', fx, fy - Lt - 24, C('force'), { size: 20, weight: 600, align: 'center' });
    arrow(ctx, fx, fy, fx, fy + Lw, C('force'), 5);
    text(ctx, 'weight mg = ' + sciT(weight) + ' N', fx, fy + Lw + 24, C('force'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'the two external forces on the rocket', fx, 708, PAL.muted, { size: 17, align: 'center' });

    /* the graph beside the scene: the acceleration climbing as the mass falls */
    const box = { l: 860, r: 1340, t: 200, b: 500 };
    const xr = nice(0, T, 4), yr = nice(Math.min(0, acc(0)), acc(T), 4);
    const { X, Y } = axes(ctx, box, [0, xr.hi], [yr.lo, yr.hi], { xl: 't (s)', yl: 'a (m/s\u00b2)', xc: C('time'), yc: C('acceleration'), nx: xr.n, ny: yr.n, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, decs(yr)) });
    curve(ctx, (t) => acc(t), 0, T, X, Y, alpha(C('acceleration'), 0.35), 5, 90);
    curve(ctx, (t) => acc(t), 0, Math.max(tau, 1e-6), X, Y, C('acceleration'), 5, 90);
    line(ctx, X(tau), Y(a), X(tau), box.b, C('acceleration'), 2, [4, 8]);
    dot(ctx, X(0), Y(acc(0)), C('acceleration'), false, 10);
    dot(ctx, X(tau), Y(a), C('acceleration'), true, 9);

    /* what is left of the rocket, and the momentum it has gathered */
    bar(ctx, 860, 1340, 600, 34, m / M0(), alpha(PAL.ink, 0.3));
    line(ctx, 860 + (1 - FUEL) * 480, 596, 860 + (1 - FUEL) * 480, 638, PAL.muted, 3);
    text(ctx, 'mass now m = ' + sciT(m) + ' kg', 860, 578, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'm\u1d63, what is left at burnout', 860 + (1 - FUEL) * 480, 658, PAL.muted, { size: 17, align: 'center' });
    bar(ctx, 860, 1340, 722, 34, p / pMax, alpha(C('momentum'), 0.55));
    text(ctx, 'momentum p = mv = ' + sciT(p) + ' kg\u00b7m/s', 860, 700, C('momentum'), { size: 20, weight: 600 });

    headline(ctx, acc(0) <= 0 && tau < 1e-9 ? 'the thrust of ' + sciT(thrust) + ' N is less than the weight of ' + sciT(weight) + ' N, so the rocket stays on the pad'
      : tau < 1e-9 ? 't = 0 s \u00b7 the rocket lifts off at ' + fmt(acc(0), 2) + ' m/s\u00b2, a thrust of ' + sciT(thrust) + ' N against a weight of ' + sciT(weight) + ' N'
      : done ? 't = ' + fmt(T, 0) + ' s \u00b7 the fuel is exhausted, and the acceleration has reached its greatest value, ' + fmt(a, 1) + ' m/s\u00b2'
      : 't = ' + fmt(tau, 0) + ' s \u00b7 ' + sciT(m) + ' kg is left of the rocket, so the same thrust now gives it ' + fmt(a, 1) + ' m/s\u00b2');
    readout(d.readout, `\\ka = \\frac{\\kve}{m}\\;\\frac{\\Delta m}{\\kdt} - \\kg = \\frac{${sciX(V())}\\ \\text{m/s}}{${sciX(m)}\\ \\text{kg}}(${sciX(R())}\\ \\text{kg/s}) - 9.80\\ \\text{m/s}^2 = ${fmt(a, 2)}\\ \\text{m/s}^2`,
      'The thrust is the exhaust velocity multiplied by the rate at which gas leaves, ' + sciT(thrust) + ' N, and it does not change as the rocket burns; the weight does, because the mass falls, and that is why the acceleration grows.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => burn() / 5), draw });
})();

/* =====================================================================
   SIM: the final velocity of a one-stage rocket and its mass ratio. The
   equation is what a whole burn comes to, so the picture answers its
   sliders and has no time in it: a still figure with no transport.
===================================================================== */
(function () {
  const d = sim('sim-mass-ratio', 640);
  const ve = ctl(d.controls, { label: '\\kve', cls: 'velocity', min: 0.5, max: 5, step: 0.1, value: 2.5, unit: '\u00d7 10\u00b3 m/s', dec: 1, aria: 'exhaust velocity' });
  const ratio = ctl(d.controls, { label: 'm_0 / m_{\\text{r}}', cls: '', min: 1, max: 200, step: 1, value: 88, unit: '', dec: 0, aria: 'mass ratio' });
  const ESCAPE = 11.2e3;
  function draw() {
    const { ctx } = begin(d.c);
    const V = ve.v * 1e3, Rm = ratio.v, v = V * Math.log(Rm), left = 100 / Rm;

    /* the rocket, with its tanks drawn as the share of the liftoff mass that is fuel */
    const rx = 340, top = 160, bot = 540, w = 92;
    const keep = Math.max(7, (bot - top) / Rm);               /* what is left at burnout, never thinner than a drawn line */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(rx, top - 66); ctx.lineTo(rx + w / 2, top); ctx.lineTo(rx + w / 2, bot); ctx.lineTo(rx - w / 2, bot); ctx.lineTo(rx - w / 2, top); ctx.closePath();
    ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.fillRect(rx - w / 2 + 2, top + keep, w - 4, bot - top - keep); ctx.restore();
    line(ctx, rx - w / 2, top + keep, rx + w / 2, top + keep, PAL.ink, 3);
    vbracket(ctx, rx + w / 2 + 40, top + keep, bot, PAL.ink, 'fuel, ' + fmt(100 - left, 1) + '% of the mass at liftoff', 1);
    arrow(ctx, rx - w / 2 - 120, top + keep / 2, rx - w / 2 - 10, top + keep / 2, PAL.ink, 4);
    text(ctx, 'm\u1d63, ' + fmt(left, 2) + '%', rx - w / 2 - 128, top + keep / 2, PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'what is left when the fuel is gone', rx, bot + 46, PAL.muted, { size: 17, align: 'center' });

    /* the graph: the velocity against the mass ratio, flattening as the logarithm does */
    const box = { l: 830, r: 1330, t: 170, b: 490 };
    const yr = nice(0, Math.max(V * Math.log(200), ESCAPE * 1.05), 4);
    const { X, Y } = axes(ctx, box, [0, 200], [0, yr.hi], { xl: 'mass ratio m\u2080 / m\u1d63', yl: 'v (m/s)', xc: PAL.ink, yc: C('velocity'), nx: 4, ny: yr.n, fx: (u) => fmt(u, 0), fy: (u) => commas(fmt(u, 0)) });
    curve(ctx, (r) => V * Math.log(r), 1, 200, X, Y, C('velocity'), 5, 120);
    if (ESCAPE <= yr.hi) {
      line(ctx, box.l, Y(ESCAPE), box.r, Y(ESCAPE), PAL.muted, 3, [10, 10]);
      text(ctx, 'escape velocity from Earth, 11.2 \u00d7 10\u00b3 m/s', box.l + 14, Y(ESCAPE) + 20, PAL.muted, { size: 17 });
    }
    line(ctx, X(Rm), Y(Math.min(v, yr.hi)), X(Rm), box.b, C('velocity'), 2, [4, 8]);
    dot(ctx, X(Rm), Y(Math.min(v, yr.hi)), C('velocity'), true, 10);

    headline(ctx, 'an exhaust velocity of ' + sciT(V) + ' m/s and a mass ratio of ' + fmt(Rm, 0) + ' give a final velocity of ' + sciT(v) + ' m/s');
    readout(d.readout, `\\kv = \\kve\\;\\text{ln}\\;\\frac{m_0}{m_{\\text{r}}} = (${sciX(V)}\\ \\text{m/s})\\,\\text{ln}\\;${fmt(Rm, 0)} = ${sciX(v)}\\ \\text{m/s}`,
      'Only ' + fmt(left, 2) + ' per cent of the rocket is left when the fuel is burnt, so payload, engines and fuel tanks together must weigh no more than that. Doubling the mass ratio does not double the velocity: it adds the same ' + fmt(V * Math.LN2, 0) + ' m/s however large the ratio already is.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
