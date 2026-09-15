/* Figures for section 16.7 Damped Harmonic Motion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, REDUCED, ctl, choice, cycle, register, begin, topline, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, pinned, curve, spring, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const G = 9.80;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const sgn = (v) => (v < 0 ? '−' : '+');
/* a horizontal oscillator: wall, spring and block on a floor, the block at x meters from equilibrium */
function oscillator(ctx, wall, eq, floorY, x, SC) {
  fixed(ctx, wall - 44, floorY - 116, 44, 116);
  const bx = eq + x * SC, by = floorY - 40;
  spring(ctx, wall, by, bx - 46, by, 12, 22, PAL.ink, 4);
  block(ctx, bx, by, 92, 78, PAL.ink);
  return { bx, by };
}
/* a vertical bar of the energy left in the oscillation, drawn beside the graph */
function energyBar(ctx, x, top, bot, frac, label) {
  const w = 54, h = (bot - top) * Math.max(0, Math.min(1, frac));
  ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.35); ctx.fillRect(x, bot - h, w, h); ctx.restore();
  ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(x, top, w, bot - top); ctx.restore();
  line(ctx, x, bot - h, x + w, bot - h, C('energy'), 4);
  text(ctx, label, x + w / 2, top - 24, C('energy'), { size: 20, weight: 600, align: 'center' });
}

/* =====================================================================
   SIM 1 (Figure 16.20): a lightly damped oscillation. The block runs on
   its strip, the trace grows behind it, and the energy bar falls as the
   square of the amplitude. Finite: six seconds, then it starts again.
===================================================================== */
(function () {
  const d = sim('sim-damped-amplitude', 760);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.2, step: 0.01, value: 0.1, unit: 'm', dec: 2, onInput: reset, aria: 'amplitude' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 0.5, max: 3, step: 0.1, value: 1, unit: 's', dec: 1, onInput: reset, aria: 'period' });
  const p = ctl(d.controls, { label: '\\text{damping}', cls: '', min: 0, max: 30, step: 1, value: 10, unit: '%', dec: 0, onInput: reset, aria: 'amplitude lost each cycle' });
  const SPAN = 6;                                  /* the six seconds the figure runs and the graph shows */
  const cy = cycle(() => SPAN, 1.2);
  function reset() { cy.reset(); }
  const ampAt = (t) => X.v * Math.pow(1 - p.v / 100, t / T.v);
  const xAt = (t) => ampAt(t) * Math.cos(TAU * t / T.v);
  function draw() {
    const { ctx } = begin(d.c);
    /* Both ranges are fixed and never rescaled: the time axis is the six seconds the figure runs,
       and the displacement axis is the amplitude slider's own plus and minus 0.20 m. */
    const XM = 0.2;
    const tau = REDUCED ? SPAN : cy.now();
    const amp = ampAt(tau), x = xAt(tau), frac = (amp / X.v) * (amp / X.v);
    const floorY = 300, eq = 700, SC = 2400;
    strip(ctx, 120, 1280, floorY + 12, 24);
    const { bx, by } = oscillator(ctx, 220, eq, floorY, x, SC);
    dot(ctx, bx, by, PAL.ink, true, 7);
    for (const [val, lab] of [[-X.v, '−X'], [0, 'x = 0'], [X.v, '+X']]) {
      const px = eq + val * SC; line(ctx, px, floorY + 24, px, floorY + 44, C('position'), 3);
      text(ctx, lab, px, floorY + 68, C('position'), { size: 20, weight: 600, align: 'center' });
    }
    line(ctx, eq, floorY - 150, eq, floorY + 24, PAL.muted, 2, [8, 8]);
    hbracket(ctx, eq - amp * SC, eq + amp * SC, floorY - 168, C('position'), 'amplitude now ' + fmt(amp, 3) + ' m');
    /* the graph */
    const box = { l: 160, r: 1120, t: 440, b: 670 };
    const { X: gx, Y: gy } = axes(ctx, box, [0, SPAN], [-XM, XM], { xl: 'time t (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2) });
    curve(ctx, (t) => ampAt(t), 0, SPAN, gx, gy, C('position'), 3, 200);
    curve(ctx, (t) => -ampAt(t), 0, SPAN, gx, gy, C('position'), 3, 200);
    if (tau > 0) curve(ctx, xAt, 0, tau, gx, gy, C('position'), 5, Math.min(3000, Math.ceil(60 * tau / T.v) + 20));
    text(ctx, 'the amplitude falls away', gx(SPAN) - 10, gy(ampAt(SPAN)) - 30, C('position'), { size: 18, weight: 600, align: 'right' });
    pinned(ctx, box, gx, gy, tau, x, C('position'), fmt(x, 3));
    energyBar(ctx, 1210, box.t, box.b, frac, 'KE + PE');
    text(ctx, fmt(100 * frac, 0) + '%', 1237, box.b + 28, C('energy'), { size: 20, weight: 600, align: 'center' });
    topline(ctx, 'After ' + fmt(tau, 1) + ' s, which is ' + fmt(tau / T.v, 1) + ' cycles, the amplitude has fallen from ' + fmt(X.v, 3) + ' m to ' + fmt(amp, 3) + ' m, while the time from one crest to the next is still ' + fmt(T.v, 1) + ' s');
    readout(d.readout, `\\kWnc = \\Delta(\\kKE + \\kPEtot) = -${fmt(1 - frac, 2)}\\,\\kE_0`,
      'The energy of an oscillation goes as the square of its amplitude, so ' + fmt(100 * (1 - frac), 0) + ' percent of the mechanical energy the oscillator started with has now been carried off by the damping force, most of it as thermal energy.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 2 (Figure 16.21): the three regimes. Three systems released
   together from X, three markers on one clock, so that the order in
   which they reach equilibrium can be read off. Finite: four seconds.
===================================================================== */
(function () {
  const d = sim('sim-damping-regimes', 700);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.2, step: 0.01, value: 0.1, unit: 'm', dec: 2, onInput: reset, aria: 'release displacement' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 0.5, max: 3, step: 0.1, value: 1, unit: 's', dec: 1, onInput: reset, aria: 'undamped period' });
  const pick = choice(d.controls, {
    label: '\\text{regime}', value: 'critical',
    options: [{ value: 'under', label: 'Underdamped' }, { value: 'critical', label: 'Critically damped (A)' }, { value: 'over', label: 'Overdamped (B)' }],
    aria: 'which regime the headline describes', onInput: () => { },
  });
  const SPAN = 4;                                 /* the four seconds the figure runs and the graph shows */
  const cy = cycle(() => SPAN, 1.2);
  function reset() { cy.reset(); }
  /* Each system is released from rest at x = X. The three differ only in how much damping they
     carry, written here as a ratio of the critical amount: 0.20, 1.00 and 2.50. */
  const ZETA = { under: 0.2, critical: 1, over: 2.5 };
  const CURVES = [
    { key: 'critical', name: 'critically damped (A)', i: 0 },
    { key: 'over', name: 'overdamped (B)', i: 1 },
    { key: 'under', name: 'underdamped', i: 2 },
  ];
  function xOf(key, t) {
    const w0 = TAU / T.v, z = ZETA[key];
    if (key === 'critical') return X.v * Math.exp(-w0 * t) * (1 + w0 * t);
    if (key === 'under') {
      const wd = w0 * Math.sqrt(1 - z * z);
      return X.v * Math.exp(-z * w0 * t) * (Math.cos(wd * t) + (z * w0 / wd) * Math.sin(wd * t));
    }
    const s = w0 * Math.sqrt(z * z - 1), r1 = -z * w0 + s, r2 = -z * w0 - s;
    return X.v * (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r2 - r1);
  }
  /* the first time the curve is within a hundredth of its release displacement of equilibrium */
  function settleTime(key) {
    for (let t = 0; t <= SPAN; t += 0.01) if (Math.abs(xOf(key, t)) < 0.01 * X.v) return t;
    return Infinity;
  }
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed ranges: the six seconds the figure runs, and the release slider's own 0.20 m with room
       below equilibrium for the underdamped curve to overshoot into. */
    const tau = REDUCED ? SPAN : cy.now();
    const box = { l: 180, r: 1180, t: 160, b: 490 };
    const { X: gx, Y: gy } = axes(ctx, box, [0, SPAN], [-0.1, 0.2], { xl: 'time t (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 4, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2) });
    line(ctx, box.l, gy(0), box.r, gy(0), alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'equilibrium', box.l + 10, gy(0) - 18, PAL.muted, { size: 17 });
    CURVES.forEach((c) => {
      const on = pick.value === c.key, col = cat(c.i);
      ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
      curve(ctx, (t) => xOf(c.key, t), 0, SPAN, gx, gy, on ? col : alpha(col, 0.45), on ? 5 : 3, 400);
      ctx.restore();
      dot(ctx, gx(Math.min(tau, SPAN)), gy(Math.max(-0.1, Math.min(0.2, xOf(c.key, tau)))), col, on, on ? 11 : 8);
    });
    /* the legend, one row per system */
    CURVES.forEach((c, j) => {
      const y = 620, x = 200 + j * 340;
      line(ctx, x, y, x + 40, y, cat(c.i), pick.value === c.key ? 5 : 3);
      text(ctx, c.name, x + 52, y, PAL.ink, { size: 20, weight: pick.value === c.key ? 600 : 400 });
    });
    const here = xOf(pick.value, tau), tc = settleTime('critical'), to = settleTime('over');
    const name = CURVES.find((c) => c.key === pick.value).name;
    topline(ctx, 'At ' + fmt(tau, 2) + ' s the ' + name + ' system is ' + fmt(Math.abs(here), 3) + ' m from equilibrium, and the critically damped one is the first of the three to settle there, after ' + (tc < SPAN ? fmt(tc, 2) + ' s' : 'more than ' + fmt(SPAN, 0) + ' s'));
    readout(d.readout, `\\kx = ${fmt(xOf('critical', tau), 3)}\\ \\text{m (A)},\\quad ${fmt(xOf('over', tau), 3)}\\ \\text{m (B)},\\quad ${fmt(xOf('under', tau), 3)}\\ \\text{m at } \\kt = ${fmt(tau, 2)}\\ \\text{s}`,
      'The overdamped system B needs ' + (to < SPAN ? fmt(to, 2) + ' s' : 'more than ' + fmt(SPAN, 0) + ' s') + ' to settle, and the underdamped one crosses the equilibrium position on the way rather than creeping up to it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 3 (Figure 16.22): Example 16.7. The object on its spring with
   friction under it, the friction arrow against the motion, the energy
   bar draining and an odometer counting the distance covered. Finite:
   it runs until the spring can no longer overcome the friction.
===================================================================== */
(function () {
  const d = sim('sim-friction-damped', 820);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.2, step: 0.005, value: 0.1, unit: 'm', dec: 3, onInput: reset, aria: 'release displacement' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10, max: 200, step: 1, value: 50, unit: 'N/m', dec: 1, onInput: reset });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.05, max: 1, step: 0.005, value: 0.2, unit: 'kg', dec: 3, onInput: reset, aria: 'mass' });
  const mu = ctl(d.controls, { label: '\\mu_{\\text{k}}', cls: '', min: 0.02, max: 0.2, step: 0.005, value: 0.08, unit: '', dec: 4, onInput: reset, aria: 'coefficient of kinetic friction' });
  const SPAN = 8;                                  /* the eight seconds of the fixed time axis */
  const cy = cycle(() => Math.min(SPAN, stopTime()), 1.5);
  function reset() { cy.reset(); }
  const fric = () => mu.v * m.v * G;               /* the force of friction, mu_k m g */
  const band = () => fric() / k.v;                 /* where the spring can no longer beat the friction */
  const w = () => Math.sqrt(k.v / m.v);
  const half = () => Math.PI / w();                /* one half cycle, the same at every amplitude */
  /* The turning points: p_i = (-1)^i (X - 2 i band), and the object stops at the first one inside
     the band, because there the spring cannot start it moving again. */
  const nHalf = () => Math.max(1, Math.floor((X.v - band()) / (2 * band())) + 1);
  const stopTime = () => nHalf() * half();
  function xAt(t) {
    const h = half(), b = band();
    const i = Math.min(nHalf(), Math.floor(t / h));
    if (i >= nHalf()) return (nHalf() % 2 ? -1 : 1) * (X.v - 2 * nHalf() * b);
    const p = (i % 2 ? -1 : 1) * (X.v - 2 * i * b), c = (i % 2 ? -1 : 1) * b;
    return c + (p - c) * Math.cos(w() * (t - i * h));
  }
  const vAt = (t) => {
    const h = half(), i = Math.floor(t / h);
    if (i >= nHalf()) return 0;
    const p = (i % 2 ? -1 : 1) * (X.v - 2 * i * band()), c = (i % 2 ? -1 : 1) * band();
    return -(p - c) * w() * Math.sin(w() * (t - i * h));
  };
  /* the path covered by time t: whole half cycles, then the part of the one in progress */
  function pathAt(t) {
    const h = half(), b = band(), n = Math.min(nHalf(), Math.floor(t / h));
    let s = 0;
    for (let i = 0; i < n; i++) s += 2 * Math.abs((X.v - 2 * i * b) - b);
    if (n < nHalf()) s += Math.abs(xAt(n * h) - xAt(Math.min(t, stopTime())));
    return s;
  }
  const dBook = () => (k.v / (2 * fric())) * (X.v * X.v - band() * band());
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed ranges: the displacement axis is the release slider's own plus and minus 0.20 m, and
       the time axis is eight seconds, which covers the whole motion at the numbers of the example
       and the first eight seconds of the slowest settings the sliders reach. */
    const XM = 0.2;
    const stop = stopTime(), tau = REDUCED ? Math.min(SPAN, stop) : Math.min(cy.now(), stop);
    const x = xAt(tau), v = vAt(tau), path = pathAt(tau);
    const E0 = 0.5 * k.v * X.v * X.v, E = 0.5 * k.v * x * x + 0.5 * m.v * v * v;
    const floorY = 300, eq = 700, SC = 2400;
    strip(ctx, 120, 1280, floorY + 12, 24);
    const { bx, by } = oscillator(ctx, 220, eq, floorY, x, SC);
    dot(ctx, bx, by, PAL.ink, true, 7);
    /* the hatching that says the surface has friction */
    for (let hx = 130; hx < 1280; hx += 24) line(ctx, hx, floorY + 38, hx + 13, floorY + 56, PAL.muted, 2);
    for (const [val, lab] of [[-X.v, '−X'], [0, 'x = 0'], [X.v, '+X']]) {
      const px = eq + val * SC; line(ctx, px, floorY + 24, px, floorY + 34, C('position'), 3);
      text(ctx, lab, px, floorY + 86, C('position'), { size: 20, weight: 600, align: 'center' });
    }
    line(ctx, eq, floorY - 150, eq, floorY + 24, PAL.muted, 2, [8, 8]);
    if (Math.abs(v) > 1e-4) {
      const s = v < 0 ? 1 : -1;                    /* friction points against the motion */
      arrow(ctx, bx, by - 62, bx + s * 150, by - 62, C('force'), 5);
      text(ctx, 'f = \u03bc_kmg = ' + fmt(fric(), 3) + ' N', bx + s * 164, by - 62, C('force'), { weight: 600, size: 20, align: s < 0 ? 'right' : 'left' });
    } else if (tau >= stop) {
      text(ctx, 'at rest: the spring can no longer overcome the friction', eq, floorY - 172, PAL.ink, { size: 20, weight: 600, align: 'center' });
    }
    text(ctx, 'distance covered d = ' + fmt(path, 2) + ' m', 140, floorY - 178, C('position'), { size: 22, weight: 600, align: 'left' });
    /* the graph */
    const box = { l: 160, r: 1120, t: 480, b: 730 };
    const { X: gx, Y: gy } = axes(ctx, box, [0, SPAN], [-XM, XM], { xl: 'time t (s)', xc: C('time'), yl: 'x (m)', yc: C('position'), nx: 8, ny: 4, fx: (v2) => fmt(v2, 0), fy: (v2) => fmt(v2, 2) });
    const env = (t) => Math.max(band(), X.v - 2 * band() * (t / half()));
    curve(ctx, env, 0, Math.min(SPAN, stop), gx, gy, C('position'), 3, 120);
    curve(ctx, (t) => -env(t), 0, Math.min(SPAN, stop), gx, gy, C('position'), 3, 120);
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    if (tau > 0) curve(ctx, xAt, 0, tau, gx, gy, C('position'), 5, Math.min(4000, Math.ceil(60 * tau / half()) + 20));
    ctx.restore();
    text(ctx, 'the crests come down in a straight line', gx(SPAN) - 10, gy(XM) + 26, C('position'), { size: 18, weight: 600, align: 'right' });
    pinned(ctx, box, gx, gy, Math.min(tau, SPAN), x, C('position'), fmt(x, 3));
    energyBar(ctx, 1210, box.t, box.b, E / E0, 'KE + PE');
    text(ctx, fmt(100 * E / E0, 0) + '%', 1237, box.b + 28, C('energy'), { size: 20, weight: 600, align: 'center' });
    topline(ctx, tau >= stop
      ? 'The object has come to rest ' + fmt(Math.abs(xAt(stop)), 3) + ' m from equilibrium after ' + fmt(stop, 2) + ' s, having covered ' + fmt(path, 2) + ' m of ground'
      : 'At ' + fmt(tau, 2) + ' s the object is ' + fmt(Math.abs(x), 3) + ' m from equilibrium and has covered ' + fmt(path, 2) + ' m of the ' + fmt(dBook(), 2) + ' m it will travel');
    readout(d.readout, `\\kd = \\frac{\\kk}{2\\mu_{\\text{k}} m\\kg}\\left(\\kX^2 - \\left(\\frac{\\mu_{\\text{k}} m\\kg}{\\kk}\\right)^2\\right) = ${fmt(dBook(), 2)}\\ \\text{m}`,
      'The friction is ' + fmt(fric(), 3) + ' N, and it stops the object where the spring force no longer matches it, at x = ' + fmt(band(), 4) + ' m. The equation takes the object to that position exactly, while the figure stops it at the first turning point inside it, so the distance counted above can differ from the equation in its last digit.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
