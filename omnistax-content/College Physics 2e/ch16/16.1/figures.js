/* Figures for section 16.1 Hooke's Law. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, pinned, spring, block, fixed, label } = F;
const sim = (id, H) => F.sim(root, id, H);
const G = 9.80;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a toy dart lying along the line y with its point at x: a shaft, a pointed tip and two fins at the tail, about 90 units long */
function dart(ctx, x, y) {
  ctx.save(); ctx.fillStyle = PAL.ink; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(x - 78, y - 3); ctx.lineTo(x - 14, y - 3); ctx.lineTo(x - 14, y + 3); ctx.lineTo(x - 78, y + 3); ctx.closePath(); ctx.fill();   /* the shaft */
  ctx.beginPath(); ctx.moveTo(x - 16, y - 7); ctx.lineTo(x, y); ctx.lineTo(x - 16, y + 7); ctx.closePath(); ctx.fill();                                     /* the point */
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.moveTo(x - 78, y - 3); ctx.lineTo(x - 90, y - 16); ctx.lineTo(x - 60, y - 3); ctx.closePath(); ctx.fill(); ctx.stroke();   /* the fins */
  ctx.beginPath(); ctx.moveTo(x - 78, y + 3); ctx.lineTo(x - 90, y + 16); ctx.lineTo(x - 60, y + 3); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   SIM 1: the plucked ruler. A cantilever clamped at the bottom, pulled
   aside and released; the restoring force always points back to the
   equilibrium line and grows with the displacement. Finite motion.
===================================================================== */
(function () {
  const d = sim('sim-ruler', 640);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: -6, max: 6, step: 0.5, value: 4, unit: 'cm', dec: 1, onInput: reset, aria: 'initial pull of the tip' });
  const Lr = ctl(d.controls, { label: '\\text{free length}', cls: '', min: 10, max: 30, step: 1, value: 30, unit: 'cm', dec: 0, onInput: reset, aria: 'free length of the ruler' });
  const damp = ctl(d.controls, { label: '\\text{damping}', cls: '', min: 0.1, max: 3, step: 0.1, value: 0.6, unit: '/s', dec: 1, onInput: reset });
  /* OmniStax's model of a plastic ruler: about 30 N/m and 1.5 Hz at 30 cm; a shorter length is stiffer as the cube and faster as the square */
  const k = () => 30 * Math.pow(30 / Lr.v, 3), freq = () => 1.5 * Math.pow(30 / Lr.v, 2);
  const T = () => Math.min(20, Math.max(2, Math.log(50) / damp.v));
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  const xAt = (s) => x0.v * Math.exp(-damp.v * s) * Math.cos(2 * Math.PI * freq() * s);   /* cm */
  function draw() {
    const { ctx } = begin(d.c);
    /* Reduced motion holds the figure at t = 0, the moment the book draws, so the pull,
       the bracket and the restoring force are all there to read. */
    const tau = REDUCED ? 0 : cy.now(), x = xAt(tau), atRest = !REDUCED && tau >= T() - 1e-6;
    const cx = 700, yb = 570, len = 130 + 300 * Lr.v / 30, yt = yb - len, U = 40;   /* 1 cm = 40 units */
    /* the headline first, so the bracket under it knows whether it took one line or two */
    const lines = headline(ctx, atRest ? 'The ruler has come to rest at its equilibrium position, where the net force on it is zero'
      : Math.abs(x) < 0.15 ? 'The tip is passing through equilibrium, where the net force is zero, but the ruler has momentum and keeps moving'
      : 'The tip is ' + fmt(Math.abs(x), 1) + ' cm to the ' + (x < 0 ? 'left' : 'right') + ', so the restoring force points to the ' + (x < 0 ? 'right' : 'left'));
    fixed(ctx, cx - 130, yb, 260, 44); text(ctx, 'clamped here', cx, yb + 24, PAL.muted, { size: 17, align: 'center', base: 'middle', bg: PAL.soft });
    line(ctx, cx, 96, cx, yb, PAL.muted, 3, [10, 10]); text(ctx, 'equilibrium position', cx - 22, yb - 40, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    /* The ruler bends as the square of the distance from the clamp. It is drawn as a ruler: a pale
       strip with an ink edge and graduations down its left side, every fifth one longer. */
    const tip = cx + x * U, HW = 9, N = 30;
    const at = (f) => [cx + x * U * f * f, yb - len * f];
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i <= N; i++) { const [px, py] = at(i / N); if (i) ctx.lineTo(px - HW, py); else ctx.moveTo(px - HW, py); }
    for (let i = N; i >= 0; i--) { const [px, py] = at(i / N); ctx.lineTo(px + HW, py); }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 1.5; ctx.beginPath();
    for (let i = 1; i < N; i++) { const [px, py] = at(i / N); ctx.moveTo(px - HW, py); ctx.lineTo(px - HW + (i % 5 ? 6 : 11), py); }
    ctx.stroke(); ctx.restore();
    if (Math.abs(x) > 0.15) {
      hbracket(ctx, cx, tip, yt - 44, C('position'), 'x = ' + (x > 0 ? '+' : '−') + fmt(Math.abs(x), 1) + ' cm', { side: lines === 2 ? 'below' : 'above' });
      const s = x > 0 ? -1 : 1, al = 64 * Math.abs(x);
      arrow(ctx, tip, yt + 8, tip + s * al, yt + 8, C('force'), 5);
      label(ctx, 'restoring force F', tip + s * (al + 4), yt + 8, { side: x > 0 ? 'left' : 'right', color: C('force'), size: 22, gap: 10 });
    }
    dot(ctx, tip, yt, PAL.ink, true, 7);
    const Fn = -k() * x / 100;
    readout(d.readout, `\\kF = -\\kk\\kx = -(${fmt(k(), 0)}\\ \\text{N/m})(${x < 0 ? '-' : '+'}${fmt(Math.abs(x) / 100, 3)}\\ \\text{m}) = ${Fn < 0 ? '-' : '+'}${fmt(Math.abs(Fn), 2)}\\ \\text{N}`,
      'A ' + Lr.v + ' cm length of this ruler has a force constant of about ' + fmt(k(), 0) + ' N/m and swings back and forth ' + fmt(freq(), 1) + ' times each second. A shorter length is stiffer and oscillates faster.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.min(1, 4 / freq())), draw });
})();

/* =====================================================================
   SIM 2: the spring scale. Weights hung one at a time, each stretch
   plotted against the weight; the slope of the line is k. Book data:
   0.100 kg steps, k about 39 N/m.
===================================================================== */
(function () {
  const d = sim('sim-spring-scale', 760);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 0.5, step: 0.1, value: 0.5, unit: 'kg', dec: 1, onInput: reset, aria: 'mass hung on the spring' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10, max: 100, step: 1, value: 39, unit: 'N/m', dec: 0, onInput: reset });
  const STEP = 1.1, steps = () => Math.round(m.v / 0.1), T = () => steps() * STEP;
  const cy = cycle(T, 1.6);
  function reset() { cy.reset(); }
  const xOf = (mass) => mass * G / k.v;
  /* Fixed from the slider maxima and never rescaled. The heaviest load on the softest
     spring stretches (0.500 kg)(9.80 m/s²)/(10 N/m) = 0.49 m, so the stretch axis runs to
     0.50 m and the scene draws 600 units to the meter; the weight can never pass
     (0.500 kg)(9.80 m/s²) = 4.90 N, so the force axis runs to 5 N. No setting of the two
     sliders leaves either range, so a stiffer spring now plainly stretches less. */
  const SC = 600, XMAX = 0.5, FMAX = 5;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), n = steps(), done = REDUCED || tau >= T() - 1e-6;
    const i = Math.min(n, Math.floor(tau / STEP)), f = Math.min(1, (tau - i * STEP) / 0.45), ease = 1 - (1 - f) * (1 - f);
    const mNow = done ? m.v : Math.min(m.v, 0.1 * (i + ease)), hung = done ? n : i;
    const x = xOf(mNow), w = mNow * G;
    /* the scene: beam, spring, block */
    const cx = 330, yBeam = 100, y0 = yBeam + 130, yEnd = y0 + x * SC;
    fixed(ctx, cx - 150, yBeam - 44, 300, 44);
    spring(ctx, cx, yBeam, cx, yEnd, 9, 26, PAL.ink, 4);
    block(ctx, cx, yEnd + 32, 96, 64, PAL.ink);
    if (mNow > 0.001) text(ctx, fmt(mNow, 1) + ' kg', cx + 62, yEnd + 32, PAL.ink, { size: 20, weight: 600, base: 'middle' });
    line(ctx, cx - 150, y0, cx + 190, y0, PAL.muted, 2, [10, 10]); text(ctx, 'x = 0', cx - 160, y0, C('position'), { align: 'right', base: 'middle', weight: 600, size: 22 });
    if (x > 0.004) vbracket(ctx, cx + 150, y0, yEnd, C('position'), 'x = ' + fmt(x, 3) + ' m', 1);
    if (mNow > 0.001) {
      const al = 30 + 16 * w;
      arrow(ctx, cx + 30, yEnd + 64, cx + 30, yEnd + 64 + al, C('force'), 5); text(ctx, 'w = ' + fmt(w, 2) + ' N', cx + 46, yEnd + 64 + al - 4, C('force'), { weight: 600, size: 20 });
      arrow(ctx, cx - 30, yEnd, cx - 30, yEnd - al, C('force'), 5); text(ctx, 'F = ' + fmt(w, 2) + ' N', cx - 46, yEnd - al + 2, C('force'), { weight: 600, size: 20, align: 'right', base: 'bottom' });
    }
    /* the graph beside a vertical scene: F against x, one dot per weight hung */
    const box = { l: 760, r: 1320, t: 150, b: 610 };
    const { X, Y } = axes(ctx, box, [0, XMAX], [0, FMAX], { xl: 'x (m)', xc: C('position'), yl: 'F (N)', yc: C('force'), nx: 5, ny: 5, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    const xe = Math.min(XMAX, FMAX / k.v);
    line(ctx, X(0), Y(0), X(xe), Y(k.v * xe), C('force'), 5);
    text(ctx, 'slope = k = ' + fmt(k.v, 0) + ' N/m', X(xe * 0.55) + 30, Y(k.v * xe * 0.55) + 44, C('stiffness'), { weight: 600, size: 20 });
    for (let j = 1; j <= hung; j++) dot(ctx, X(xOf(0.1 * j)), Y(0.1 * j * G), C('force'), true, 9);
    if (mNow > 0.001) { line(ctx, X(x), box.b, X(x), Y(w), C('position'), 2, [4, 8]); line(ctx, box.l, Y(w), X(x), Y(w), C('force'), 2, [4, 8]); dot(ctx, X(x), Y(w), PAL.ink, true, 9); }
    headline(ctx, mNow < 0.001 ? 'With no load the spring hangs at its unstretched length, x = 0'
      : 'A ' + fmt(mNow, 1) + ' kg load weighs ' + fmt(w, 2) + ' N and stretches the spring ' + fmt(x, 3) + ' m');
    readout(d.readout, `\\kF = \\kk\\kx = (${fmt(k.v, 0)}\\ \\text{N/m})(${fmt(x, 3)}\\ \\text{m}) = ${fmt(w, 2)}\\ \\text{N} = w = mg`,
      'Each dot is one weight hung on the spring. The restoring force equals the weight supported while the mass hangs still, and the slope of the line through the dots is the force constant.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 3: energy stored in a compressed spring. The toy gun of Example
   16.2: compress, hold, release; the work done is the triangle under the
   applied-force line, and it becomes the dart's kinetic energy.
===================================================================== */
(function () {
  const d = sim('sim-stored-energy', 720);
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10, max: 200, step: 1, value: 50, unit: 'N/m', dec: 0, onInput: reset });
  const x = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.02, max: 0.3, step: 0.005, value: 0.15, unit: 'm', dec: 3, onInput: reset, aria: 'compression of the spring' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 1, max: 10, step: 0.5, value: 2, unit: 'g', dec: 1, onInput: reset, aria: 'mass of the dart' });
  const T1 = 2.4, HOLD = 0.8, REL = 0.3, FLY = 1.2, T = () => T1 + HOLD + REL + FLY;
  const cy = cycle(T, 1.6);
  function reset() { cy.reset(); }
  const pe = () => 0.5 * k.v * x.v * x.v, vOut = () => Math.sqrt(2 * pe() / (m.v / 1000));
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now();
    let phase, xc, fly = 0;
    if (tau < T1) { phase = 'compress'; xc = x.v * tau / T1; }
    else if (tau < T1 + HOLD) { phase = 'hold'; xc = x.v; }
    else if (tau < T1 + HOLD + REL) { phase = 'release'; xc = x.v * (1 - (tau - T1 - HOLD) / REL); }
    else { phase = 'flight'; xc = 0; fly = (tau - T1 - HOLD - REL) / FLY; }
    if (REDUCED) { phase = 'hold'; xc = x.v; }
    const xs = phase === 'compress' ? xc : x.v;   /* the deformation the shaded work refers to */
    const L = 100, R = 1300, y = 220, SC = 1000, wall = 160, nat = 420;
    strip(ctx, L, R, y, 56);
    fixed(ctx, wall - 44, y - 76, 44, 152);
    const plate = wall + nat - xc * SC;
    spring(ctx, wall, y, plate, y, 12, 22, PAL.ink, 4);
    line(ctx, plate, y - 36, plate, y + 36, PAL.ink, 8);
    /* the dart flies as far as the strip allows and no farther, so it and its label never leave the canvas */
    const vv = vOut(), dartX = plate + 40 + (phase === 'flight' ? fly * Math.min(R - 60 - plate - 40, 14 * vv) : 0);
    dart(ctx, dartX, y);
    line(ctx, wall + nat, y - 44, wall + nat, y + 44, PAL.muted, 2, [6, 6]); text(ctx, 'x = 0', wall + nat, y - 58, C('position'), { size: 18, align: 'center', weight: 600 });
    if (xc > 0.003) hbracket(ctx, plate, wall + nat, y + 80, C('position'), 'x = ' + fmt(xc, 3) + ' m');
    if (phase === 'compress' || phase === 'hold') {
      const Fn = k.v * xc, al = 50 + 200 * xc / x.v;
      arrow(ctx, plate + 60 + al, y - 96, plate + 60, y - 96, C('force'), 5);
      text(ctx, 'applied force = kx = ' + fmt(Fn, 2) + ' N', plate + 74 + al, y - 96, C('force'), { weight: 600, base: 'middle' });
    }
    if (phase === 'flight') { const al = Math.min(300, vv * 6, R - dartX - 30); arrow(ctx, dartX + 20, y - 80, dartX + 20 + al, y - 80, C('velocity'), 5); label(ctx, 'v = ' + fmt(vv, 1) + ' m/s', dartX + 20 + al / 2, y - 84, { side: 'above', color: C('velocity'), size: 22, gap: 14 }); }
    /* the graph: applied force against deformation, work as the area. Both ranges are fixed
       and never rescaled: the deformation axis is the compression slider's own 0 to 0.30 m,
       and the force axis runs to 30 N, which holds every spring up to 100 N/m at full
       compression. A stiffer spring runs off the top, and the live point is then pinned at
       the edge with its value, so the line's slope and the triangle's area both change with
       the sliders instead of the picture staying the same at every setting. */
    const XMAX = 0.3, FMAX = 30;
    const box = { l: 200, r: 1240, t: 370, b: 620 };
    const { X, Y } = axes(ctx, box, [0, XMAX], [0, FMAX], { xl: 'deformation x (m)', xc: C('position'), yl: 'applied force (N)', yc: C('force'), nx: 3, ny: 3, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    if (xs > 0.001) { ctx.fillStyle = alpha(C('energy'), 0.25); ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(xs), Y(0)); ctx.lineTo(X(xs), Y(k.v * xs)); ctx.closePath(); ctx.fill(); }
    line(ctx, X(0), Y(0), X(x.v), Y(k.v * x.v), C('force'), 5);
    ctx.restore();
    if (xc > 0.001) { line(ctx, X(xc), box.b, X(xc), Y(Math.min(FMAX, k.v * xc)), C('position'), 2, [4, 8]); pinned(ctx, box, X, Y, xc, k.v * xc, C('force'), fmt(k.v * xc, 1) + ' N'); }
    const W = 0.5 * k.v * xs * xs;
    text(ctx, (phase === 'compress' ? 'work done so far = area = ' : phase === 'hold' ? 'work done = area = ½kx² = ' : 'energy released = ') + fmt(W, 3) + ' J', box.l + 24, box.t + 26, C('energy'), { weight: 600 });
    headline(ctx, phase === 'compress' ? 'The spring has been pushed in ' + fmt(xc, 3) + ' m, so the applied force is kx = ' + fmt(k.v * xc, 2) + ' N and the work done so far is ' + fmt(W, 3) + ' J'
      : phase === 'hold' ? 'Held compressed by ' + fmt(x.v, 3) + ' m, the spring stores the work done on it, ½kx² = ' + fmt(pe(), 3) + ' J, as elastic potential energy'
      : 'Released, the ' + fmt(pe(), 3) + ' J of elastic potential energy becomes kinetic energy, and the dart leaves at ' + fmt(vv, 1) + ' m/s');
    readout(d.readout, `\\kPE = \\tfrac{1}{2}\\kk\\kx^2 = \\tfrac{1}{2}(${fmt(k.v, 1)}\\ \\text{N/m})(${fmt(x.v, 3)}\\ \\text{m})^2 = ${fmt(pe(), 3)}\\ \\text{J}`,
      'Method B gives the same answer: the average force is ½kx = ' + fmt(0.5 * k.v * x.v, 2) + ' N, and (' + fmt(0.5 * k.v * x.v, 2) + ' N)(' + fmt(x.v, 3) + ' m) = ' + fmt(pe(), 3) + ' J. With no friction, ½mv² = PE_el gives v = ' + fmt(vv, 1) + ' m/s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
