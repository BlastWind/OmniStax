/* Figures for section 16.3 Simple Harmonic Motion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, pinned, curve, spring, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a number in scientific notation for the readout, 6.53 × 10⁴ */
function sci(v, d = 2) { const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times10^{${e}}`; }
const sgn = (v) => (v < 0 ? '−' : '+');
/* The marks x = −X, 0, +X under a floor at y, X in the scene's own units per metre. When the
   amplitude is small the outer two labels step down a row and lean away from the centre, so
   that no label sits on another at any setting of the amplitude slider. */
function marks(ctx, eq, SC, X, y, tick, dy, labels = ['x = −X', 'x = 0', 'x = +X']) {
  const close = 2 * X * SC < 150;
  [[-X, labels[0], -1], [0, labels[1], 0], [X, labels[2], 1]].forEach(([val, lab, i]) => {
    const px = eq + val * SC; line(ctx, px, y, px, y + tick, C('position'), 3);
    const out = close && i !== 0;
    text(ctx, lab, px + (out ? i * 8 : 0), y + dy + (out ? 26 : 0), C('position'), { size: 20, weight: 600, align: out ? (i < 0 ? 'right' : 'left') : 'center' });
  });
}
/* a horizontal oscillator: wall, spring and block on a floor, the block at x meters from equilibrium */
function oscillator(ctx, wall, eq, floorY, x, SC, label) {
  fixed(ctx, wall - 44, floorY - 116, 44, 116);
  const bx = eq + x * SC, by = floorY - 40;
  spring(ctx, wall, by, bx - 48, by, 12, 22, PAL.ink, 4);
  block(ctx, bx, by, 96, 80, PAL.ink);
  /* the block's own label sits beside it, never on it */
  if (label) text(ctx, label, bx + 60, by, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
  return { bx, by };
}

/* =====================================================================
   SIM 1: the simple harmonic oscillator. A block on a frictionless
   surface, released from x = X; force and velocity arrows every frame.
   Endless.
===================================================================== */
(function () {
  const d = sim('sim-shm-oscillator', 520);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.2, step: 0.01, value: 0.1, unit: 'm', dec: 2, onInput: reset, aria: 'amplitude' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10, max: 200, step: 1, value: 50, unit: 'N/m', dec: 0, onInput: reset });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 2, step: 0.1, value: 0.5, unit: 'kg', dec: 1, onInput: reset, aria: 'mass' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const w = () => Math.sqrt(k.v / m.v), T = () => TAU / w();
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? T() / 8 : cy.now();
    const x = X.v * Math.cos(w() * tau), v = -X.v * w() * Math.sin(w() * tau), Fn = -k.v * x, vmax = X.v * w();
    const floorY = 330, eq = 760, SC = 1500;
    strip(ctx, 100, 1300, floorY + 12, 24);
    const { bx, by } = oscillator(ctx, 200, eq, floorY, x, SC, 'm = ' + fmt(m.v, 1) + ' kg');
    /* the marks x = -X, 0, +X on the floor */
    marks(ctx, eq, SC, X.v, floorY + 24, 20, 44);
    line(ctx, eq, floorY - 130, eq, floorY + 24, PAL.muted, 2, [8, 8]);
    /* the arrows: restoring force on the block, velocity above it */
    if (Math.abs(Fn) > 0.02 * k.v * X.v) {
      const al = 60 + 200 * Math.abs(x) / X.v, s = Fn < 0 ? -1 : 1;
      arrow(ctx, bx, by - 66, bx + s * al, by - 66, C('force'), 5);
      text(ctx, 'F = −kx = ' + sgn(Fn) + fmt(Math.abs(Fn), 1) + ' N', bx + s * (al + 14), by - 66, C('force'), { weight: 600, size: 20, align: s < 0 ? 'right' : 'left' });
    }
    if (Math.abs(v) > 0.02 * vmax) {
      const al = 60 + 200 * Math.abs(v) / vmax, s = v < 0 ? -1 : 1;
      arrow(ctx, bx, by - 112, bx + s * al, by - 112, C('velocity'), 5);
      text(ctx, 'v = ' + sgn(v) + fmt(Math.abs(v), 2) + ' m/s', bx + s * (al + 14), by - 112, C('velocity'), { weight: 600, size: 20, align: s < 0 ? 'right' : 'left' });
    }
    dot(ctx, bx, by, PAL.ink, true, 7);
    headline(ctx, Math.abs(x) > 0.97 * X.v ? 'At x = ' + sgn(x) + 'X the block is momentarily at rest, and the restoring force is at its greatest, pointing back toward equilibrium'
      : Math.abs(x) < 0.03 * X.v ? 'The block is passing through equilibrium, where the net force is zero and the speed is greatest, v_max = ' + fmt(vmax, 2) + ' m/s'
      : 'At x = ' + sgn(x) + fmt(Math.abs(x), 3) + ' m the force of ' + fmt(Math.abs(Fn), 1) + ' N points ' + (Fn < 0 ? 'left' : 'right') + ' and the block moves ' + (v < 0 ? 'left' : 'right') + ' at ' + fmt(Math.abs(v), 2) + ' m/s');
    readout(d.readout, `\\kF = -\\kk\\kx = -(${fmt(k.v, 0)}\\ \\text{N/m})(${sgn(x)}${fmt(Math.abs(x), 3)}\\ \\text{m}) = ${sgn(Fn)}${fmt(Math.abs(Fn), 2)}\\ \\text{N}`,
      'The period is T = 2π√(m/k) = ' + fmt(T(), 2) + ' s, and in one full period the block covers 4X = ' + fmt(4 * X.v, 2) + ' m of ground.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.min(1, T() / 1.2)), draw });
})();

/* =====================================================================
   SIM 2: the period. Two identical oscillators released together at
   different amplitudes stay in step; below, T against m for the set k.
   Example 16.4's car as the defaults. Endless.
===================================================================== */
(function () {
  const d = sim('sim-shm-period', 720);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 100, max: 2000, step: 10, value: 900, unit: 'kg', dec: 0, onInput: reset, aria: 'mass' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10000, max: 200000, step: 100, value: 65300, unit: 'N/m', dec: 0, onInput: reset });
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.1, step: 0.005, value: 0.05, unit: 'm', dec: 3, onInput: reset, aria: 'amplitude' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const Tof = (mass) => TAU * Math.sqrt(mass / k.v), T = () => Tof(m.v);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? T() / 8 : cy.now(), c = Math.cos(TAU * tau / T());
    const eq = 700, SC = 2400;
    for (const [i, amp, lab] of [[0, X.v, 'X = '], [1, X.v / 2, 'X/2 = ']]) {
      const floorY = 200 + i * 150, x = amp * c;
      strip(ctx, 100, 1300, floorY + 12, 24);
      oscillator(ctx, 180, eq, floorY, x, SC, null);
      text(ctx, 'amplitude ' + lab + fmt(amp, 3) + ' m', 1290, floorY - 40, C('position'), { size: 20, weight: 600, align: 'right' });
    }
    line(ctx, eq, 70, eq, 370, PAL.muted, 2, [8, 8]); text(ctx, 'x = 0', eq, 388, C('position'), { size: 18, weight: 600, align: 'center' });
    /* the graph: T against m for this k. Both ranges are fixed and never rescaled: the mass axis
       is the slider's own 0 to 2000 kg, and the period axis runs to 3 s, since the heaviest car on
       the softest suspension the sliders allow gives 2π√(2000 kg / 10 000 N/m) = 2.81 s. A stiffer
       suspension now visibly flattens the curve instead of relabelling the ticks. */
    const TMAX = 3, box = { l: 200, r: 1240, t: 440, b: 640 };
    const { X: gx, Y: gy } = axes(ctx, box, [0, 2000], [0, TMAX], { xl: 'mass m (kg)', xc: PAL.ink, yl: 'T (s)', yc: C('time'), nx: 4, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, Tof, 0, 2000, gx, gy, C('time'), 4, 100);
    /* the curve's name sits in the top left corner of the box, which the curve never reaches: at
       the left the period is small at every setting of the sliders */
    text(ctx, 'T = 2π√(m/k)', box.l + 16, box.t + 22, C('time'), { weight: 600, size: 20 });
    line(ctx, gx(m.v), box.b, gx(m.v), gy(T()), PAL.ink, 2, [4, 8]); line(ctx, box.l, gy(T()), gx(m.v), gy(T()), C('time'), 2, [4, 8]);
    dot(ctx, gx(m.v), gy(T()), C('time'), true, 9);
    headline(ctx, 'A mass of ' + fmt(m.v, 0) + ' kg on a suspension of ' + fmt(k.v / 1000, 1) + '×10³ N/m gives T = ' + fmt(T(), 3) + ' s, and both amplitudes share it');
    readout(d.readout, `\\kT = 2\\pi\\sqrt{\\frac{m}{\\kk}} = 2\\pi\\sqrt{\\frac{${fmt(m.v, 0)}\\ \\text{kg}}{${sci(k.v)}\\ \\text{N/m}}} = ${fmt(T(), 3)}\\ \\text{s}`,
      'The frequency is f = 1/T = ' + fmt(1 / T(), 2) + ' Hz. The two blocks were released together and stay in step: the period does not depend on the amplitude.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.min(1, T() / 1.2)), draw });
})();

/* =====================================================================
   SIM 3: the paper strip. A mass on a vertical spring writes its
   position on paper moving left; the trace is X cos(2πt/T). Vertical
   scene, so the paper is beside it. Endless.
===================================================================== */
(function () {
  const d = sim('sim-paper-strip', 640);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.1, step: 0.005, value: 0.05, unit: 'm', dec: 3, onInput: reset, aria: 'amplitude' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 0.5, max: 3, step: 0.1, value: 1, unit: 's', dec: 2, onInput: reset, aria: 'period' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const xAt = (t) => X.v * Math.cos(TAU * t / T.v);
  function draw() {
    const { ctx } = begin(d.c);
    /* The paper carries a fixed six seconds of trace at every setting, never rescaled: at the
       slowest period the slider reaches that is two full waves, and at the fastest it is twelve,
       so lengthening the period visibly stretches the wave instead of leaving it unchanged and
       relabelling the ticks underneath it. */
    const S = 6, NS = 6;
    const tau = REDUCED ? S : cy.now(), x = xAt(tau), tc = tau % T.v;
    /* the mass hangs at x = 260, which leaves the bracket on its left room for its label */
    const cx = 260, y0 = 400, SC = 1600, yOf = (val) => y0 - val * SC;
    /* the paper: a band moving left, the pen fixed at its left edge */
    const pl = 340, pr = 1250, pt = 200, pb = 600;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(pl, pt, pr - pl, pb - pt); ctx.restore();
    line(ctx, pl, pt, pl, pb, PAL.rule, 2); line(ctx, pr, pt, pr, pb, PAL.rule, 2);
    const Xp = (s) => pl + ((pr - pl) * -s) / S;   /* s = time before now, 0 at the pen */
    line(ctx, cx - 130, y0, pr, y0, PAL.muted, 2, [10, 10]);
    for (const [val, lab] of [[X.v, 'x = +X'], [0, '0'], [-X.v, '−X']]) { line(ctx, pr, yOf(val), pr + 12, yOf(val), C('position'), 3); text(ctx, lab, pr + 20, yOf(val), C('position'), { size: 20, weight: 600 }); }
    const t0 = Math.max(0, tau - S);
    if (tau > 0) curve(ctx, (s) => xAt(tau + s), t0 - tau, 0, Xp, yOf, C('position'), 4, Math.min(3000, Math.ceil(40 * (tau - t0) / T.v) + 20));
    const n1 = Math.floor(tau / T.v + 1e-9);
    if (n1 >= 1 && (n1 - 1) * T.v >= t0 - 1e-9) hbracket(ctx, Xp((n1 - 1) * T.v - tau), Xp(n1 * T.v - tau), yOf(X.v) - 26, C('time'), 'T = ' + fmt(T.v, 2) + ' s');
    for (let i = 0; i <= NS; i++) { const s = -S + (S * i) / NS; line(ctx, Xp(s), pb, Xp(s), pb + 8, PAL.muted, 2); text(ctx, i === NS ? 'now' : fmt(-s, 0), Xp(s), pb + 26, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'time before now (s)', pr, pb + 56, C('time'), { size: 20, weight: 600, align: 'right' });
    arrow(ctx, pl + 200, pt - 30, pl + 80, pt - 30, PAL.muted, 3); text(ctx, 'motion of paper', pl + 212, pt - 30, PAL.muted, { size: 17 });
    /* the scene: beam, spring, mass, pen */
    fixed(ctx, cx - 110, 90, 220, 40);
    const by = yOf(x);
    spring(ctx, cx, 130, cx, by - 28, 10, 24, PAL.ink, 4);
    block(ctx, cx, by, 80, 56, PAL.ink); text(ctx, 'm', cx, by + 46, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, cx + 40, by, pl, by, PAL.ink, 4); dot(ctx, pl, by, C('position'), true, 8);
    if (Math.abs(x) > 0.004) vbracket(ctx, cx - 64, y0, by, C('position'), 'x = ' + sgn(x) + fmt(Math.abs(x), 3) + ' m', -1, { size: 20 });
    headline(ctx, 'At ' + fmt(tc, 2) + ' s into a cycle of ' + fmt(T.v, 2) + ' s the mass is at x = X cos(2πt/T) = ' + sgn(x) + fmt(Math.abs(x), 3) + ' m');
    readout(d.readout, `\\kx(\\kt) = \\kX\\cos\\frac{2\\pi\\kt}{\\kT} = (${fmt(X.v, 3)}\\ \\text{m})\\cos\\frac{2\\pi(${fmt(tc, 2)}\\ \\text{s})}{${fmt(T.v, 2)}\\ \\text{s}} = ${sgn(x)}${fmt(Math.abs(x), 3)}\\ \\text{m}`,
      'At t = 0 the mass is at x = X, and at t = T it is back there again, because cos 2π = 1. The paper moves at a steady speed, so equal distances along it are equal times.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 4: x, v and a. A mass on a vertical spring with its three arrows,
   and the three graphs beside it. Endless.
===================================================================== */
(function () {
  const d = sim('sim-shm-xva', 790);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.02, max: 0.1, step: 0.005, value: 0.05, unit: 'm', dec: 3, onInput: reset, aria: 'amplitude' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10, max: 200, step: 1, value: 50, unit: 'N/m', dec: 0, onInput: reset });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 2, step: 0.1, value: 0.5, unit: 'kg', dec: 1, onInput: reset, aria: 'mass' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const w = () => Math.sqrt(k.v / m.v), T = () => TAU / w();
  function draw() {
    const { ctx } = begin(d.c);
    /* All four ranges are fixed and never rescaled. The three graphs show the last 2.0 s, about
       three periods of the oscillator the book draws, so a stiffer spring or a lighter mass packs
       visibly more waves into the same two seconds. The position axis is the amplitude slider's
       own ±0.10 m; the velocity and acceleration axes are set from that same default state, ±1.5
       m/s and ±20 m/s², since taking them from the slider maxima (±4.5 m/s and ±200 m/s²) would
       leave the book's own curves a flat sliver. A setting that runs off an axis is drawn clipped,
       and its live point is pinned at the edge with its value. */
    const S = 2, NS = 4, XM = 0.1, VM = 1.5, AM = 20;
    const tau = REDUCED ? S : cy.now(), tc = tau % T();
    const vmax = X.v * w(), amax = k.v * X.v / m.v;
    const xOf = (t) => X.v * Math.cos(w() * t), vOf = (t) => -vmax * Math.sin(w() * t), aOf = (t) => -amax * Math.cos(w() * t);
    const x = xOf(tau), v = vOf(tau), a = aOf(tau);
    /* the scene */
    const cx = 200, y0 = 400, SC = 1600, by = y0 - x * SC;
    fixed(ctx, cx - 100, 90, 200, 40);
    spring(ctx, cx, 130, cx, by - 28, 10, 22, PAL.ink, 4);
    block(ctx, cx, by, 80, 56, PAL.ink); text(ctx, 'm', cx, by + 46, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, 60, y0, 480, y0, PAL.muted, 2, [10, 10]); text(ctx, 'x = 0', 60, y0 - 18, C('position'), { size: 18, weight: 600 });
    if (Math.abs(a) > 0.03 * amax) { const al = 40 + 120 * Math.abs(a) / amax, s = a > 0 ? -1 : 1; arrow(ctx, cx - 70, by, cx - 70, by + s * al, C('acceleration'), 5); text(ctx, 'a', cx - 70, by + s * (al + 20), C('acceleration'), { weight: 600, align: 'center' }); }
    if (Math.abs(v) > 0.03 * vmax) { const al = 40 + 120 * Math.abs(v) / vmax, s = v > 0 ? -1 : 1; arrow(ctx, cx + 70, by, cx + 70, by + s * al, C('velocity'), 5); text(ctx, 'v', cx + 70, by + s * (al + 20), C('velocity'), { weight: 600, align: 'center' }); }
    if (Math.abs(x) > 0.004) { vbracket(ctx, cx + 130, y0, by, C('position')); text(ctx, 'x = ' + sgn(x) + fmt(Math.abs(x), 3) + ' m', cx + 150, (y0 + by) / 2, C('position'), { weight: 600, bg: PAL.panel }); }
    /* the three graphs, the pen at the right */
    const rows = [['x (m)', C('position'), XM, xOf, 3], ['v (m/s)', C('velocity'), VM, vOf, 2], ['a (m/s²)', C('acceleration'), AM, aOf, 0]];
    const l = 620, r = 1300, t0 = Math.max(0, tau - S);
    rows.forEach(([yl, col, top, f, dec], i) => {
      const box = { l, r, t: 100 + i * 225, b: 250 + i * 225 };
      const { X: gx, Y: gy } = axes(ctx, box, [-S, 0], [-top, top], { xl: i === 2 ? 'time before now (s)' : '', xc: C('time'), yl, yc: col, nx: NS, ny: 2, fx: (val) => (Math.abs(val) < 1e-9 ? 'now' : fmt(-val, 1)), fy: (val) => fmt(val, dec) });
      ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
      if (tau > 0) curve(ctx, (s) => f(tau + s), t0 - tau, 0, gx, gy, col, 4, Math.min(3000, Math.ceil(40 * (tau - t0) / T()) + 20));
      ctx.restore();
      pinned(ctx, box, gx, gy, 0, f(tau), col, fmt(f(tau), dec));
    });
    headline(ctx, Math.abs(x) > 0.97 * X.v ? 'At x = ' + sgn(x) + 'X the velocity is zero and the acceleration is ' + sgn(a) + 'a_max, directed back toward equilibrium'
      : Math.abs(x) < 0.03 * X.v ? 'The object is passing through equilibrium, where the acceleration is zero and the velocity has its greatest size, ' + fmt(vmax, 2) + ' m/s'
      : 'At x = ' + sgn(x) + fmt(Math.abs(x), 3) + ' m the velocity is ' + sgn(v) + fmt(Math.abs(v), 2) + ' m/s and the acceleration is ' + sgn(a) + fmt(Math.abs(a), 1) + ' m/s², always opposite to the position');
    readout(d.readout, `\\kx = ${sgn(x)}${fmt(Math.abs(x), 3)}\\ \\text{m},\\quad \\kv = ${sgn(v)}${fmt(Math.abs(v), 2)}\\ \\text{m/s},\\quad \\ka = ${sgn(a)}${fmt(Math.abs(a), 1)}\\ \\text{m/s}^2 \\quad\\text{at } \\kt = ${fmt(tc, 2)}\\ \\text{s}`,
      'T = 2π√(m/k) = ' + fmt(T(), 3) + ' s, v_max = X√(k/m) = ' + fmt(vmax, 2) + ' m/s, and a_max = kX/m = ' + fmt(amax, 1) + ' m/s². The acceleration is always opposite to the position.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.min(1, T() / 1.2)), draw });
})();
};
