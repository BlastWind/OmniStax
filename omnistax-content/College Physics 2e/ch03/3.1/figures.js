/* Figures for section 3.1 Kinematics in Two Dimensions: An Introduction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, axes, nice, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const G = 9.80;

/* ---------- sprites, in ink ---------- */
/* a helicopter seen from above, centred on (x, y), its nose turned to the angle a and its rotor turned to the angle r */
function helicopter(ctx, x, y, a, r, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(0, 0, 26, 14, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(-20, 0); ctx.lineTo(-64, 0); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-64, -12); ctx.lineTo(-64, 12); ctx.stroke();
  ctx.rotate(r); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-46, 0); ctx.lineTo(46, 0); ctx.moveTo(0, -46); ctx.lineTo(0, 46); ctx.stroke();
  ctx.restore();
}
/* a person seen from above: a head with two shoulders, centred on (x, y) */
function walker(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(x - 16, y); ctx.lineTo(x + 16, y); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 3.3: the walk in the city. A pedestrian walks east along the
   bottom of a grid of square blocks and then north up its right edge,
   while a helicopter flies the straight diagonal between the same two
   points at the same speed. The three vectors of the trip are drawn as
   arrows with a hash mark per block, and they form the right triangle of
   the Pythagorean theorem. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-walk', 620);
  const E = ctl(d.controls, { label: '\\text{blocks east}', cls: 'position', min: 1, max: 12, step: 1, value: 9, unit: 'blocks', dec: 0, onInput: reset, aria: 'blocks east' });
  const N = ctl(d.controls, { label: '\\text{blocks north}', cls: 'position', min: 1, max: 8, step: 1, value: 5, unit: 'blocks', dec: 0, onInput: reset, aria: 'blocks north' });
  /* model time counts blocks travelled: the walker and the helicopter each cover one block per unit of it */
  const total = () => E.v + N.v;
  const cy = cycle(total, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, n = N.v, c = Math.hypot(e, n), theta = Math.atan2(n, e), tau = cy.now(), done = tau >= total() - 1e-9;
    /* the grid, scaled to fit and centred in the band under the headline */
    const s = Math.min(1020 / e, 410 / n), yb = 520 - (410 - n * s) / 2, yt = yb - n * s, x0 = 140 + (1020 - e * s) / 2, xr = x0 + e * s, gap = Math.min(10, s * 0.14);
    ctx.save(); ctx.fillStyle = PAL.soft;
    for (let i = 0; i < e; i++) for (let j = 0; j < n; j++) ctx.fillRect(x0 + i * s + gap / 2, yt + j * s + gap / 2, s - gap, s - gap);
    /* the right triangle the three vectors form */
    ctx.fillStyle = alpha(C('position'), 0.1); ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(xr, yb); ctx.lineTo(xr, yt); ctx.closePath(); ctx.fill();
    ctx.restore();
    /* the angle of the straight-line path above east */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x0, yb, Math.min(80, s * 1.6), -theta, 0); ctx.stroke(); ctx.restore();
    const ra = Math.min(80, s * 1.6) + 62;
    text(ctx, 'θ = ' + fmt(theta * 180 / Math.PI, 1) + '°', x0 + ra * Math.cos(theta / 2) + 14, yb - ra * Math.sin(theta / 2), PAL.ink, { size: 20, weight: 600 });
    /* the three vectors: east, north and the straight-line path, each with a hash mark per block */
    const pc = C('position');
    arrow(ctx, x0, yb, xr, yb, pc, 5); arrow(ctx, xr, yb, xr, yt, pc, 5); arrow(ctx, x0, yb, xr, yt, pc, 5);
    for (let i = 1; i < e; i++) line(ctx, x0 + i * s, yb - 9, x0 + i * s, yb + 9, pc, 3);
    for (let j = 1; j < n; j++) line(ctx, xr - 9, yb - j * s, xr + 9, yb - j * s, pc, 3);
    const ux = Math.cos(theta), uy = -Math.sin(theta);
    for (let k = 1; k < c; k++) { const px = x0 + k * s * ux, py = yb + k * s * uy; line(ctx, px + 9 * uy, py - 9 * ux, px - 9 * uy, py + 9 * ux, pc, 3); }
    /* block numbers along the two legs, and the labels of the three vectors */
    for (let i = 0; i <= e; i++) text(ctx, String(i), x0 + i * s, yb + 30, PAL.muted, { size: 17, align: 'center' });
    for (let j = 0; j <= n; j++) text(ctx, String(j), xr + 26, yb - j * s, PAL.muted, { size: 17 });
    text(ctx, e + (e === 1 ? ' block east' : ' blocks east'), (x0 + xr) / 2, yb + 64, pc, { weight: 600, align: 'center' });
    text(ctx, n + (n === 1 ? ' block north' : ' blocks north'), xr + 56, (yb + yt) / 2, pc, { weight: 600 });
    ctx.save(); ctx.translate((x0 + xr) / 2, (yb + yt) / 2); ctx.rotate(-theta);
    text(ctx, 'straight-line path, ' + fmt(c, 1) + ' blocks', 0, -26, pc, { weight: 600, align: 'center' }); ctx.restore();
    text(ctx, 'start', x0 - 16, yb, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'destination', xr + 56, yt, PAL.muted, { size: 17 });
    /* the walker on the streets and the helicopter on the diagonal, one block per unit of model time */
    const wx = tau <= e ? x0 + tau * s : xr, wy = tau <= e ? yb : yb - (tau - e) * s;
    const hf = Math.min(tau, c) / c, hx = x0 + (xr - x0) * hf, hy = yb + (yt - yb) * hf;
    helicopter(ctx, hx, hy, -theta, cy.tau * 2.4, PAL.ink);
    walker(ctx, wx, wy, PAL.ink);
    const gone = Math.min(tau, total()), flown = Math.min(tau, c);
    headline(ctx, done ? total() + ' blocks walked, ' + e + ' east and then ' + n + ' north, and the straight-line distance is ' + fmt(c, 1) + ' blocks'
      : tau >= c ? 'the helicopter has arrived after ' + fmt(c, 1) + ' blocks, and the walker still has ' + fmt(total() - gone, 1) + ' blocks to go'
      : 'the walker has gone ' + fmt(gone, 1) + ' of the ' + total() + ' blocks and the helicopter ' + fmt(flown, 1) + ' of its ' + fmt(c, 1));
    readout(d.readout, `c = \\sqrt{a^2 + b^2} = \\sqrt{(${e}\\ \\text{blocks})^2 + (${n}\\ \\text{blocks})^2} = ${fmt(c, 1)}\\ \\text{blocks}`,
      'The walk covers ' + e + ' + ' + n + ' = ' + total() + ' blocks, and the straight-line path rises ' + fmt(theta * 180 / Math.PI, 1) + '° above east.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();


/* =====================================================================
   FIGURE 3.6: the two balls. One is dropped from rest and one is thrown
   horizontally from the same height at the same instant. A strobe leaves
   a copy of each ball at fixed intervals with its horizontal and vertical
   velocities, and the two copies are always at the same height. The
   scene is vertical, so its two graphs sit beside it: height against
   time, where the balls coincide, and sideways distance against time,
   where they part. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-two-balls', 640);
  const V = ctl(d.controls, { label: '\\kvox', cls: 'velocity', min: 0.5, max: 6, step: 0.1, value: 3, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial horizontal velocity' });
  const DT = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.05, max: 0.2, step: 0.01, value: 0.1, unit: 's', dec: 2, onInput: reset, aria: 'interval between flashes' });
  const Y0 = ctl(d.controls, { label: '\\kyo', cls: 'position', min: 1, max: 5, step: 0.1, value: 1.5, unit: 'm', dec: 1, onInput: reset, aria: 'height' });
  const tfall = () => Math.sqrt((2 * Y0.v) / G);
  const cy = cycle(tfall, 1.2);
  function reset() { cy.reset(); }
  const yOf = (t) => Math.max(0, Y0.v - 0.5 * G * t * t);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), tf = tfall(), done = tau >= tf - 1e-9, xmax = V.v * tf, xnow = V.v * tau;
    const flashes = []; for (let k = 0; k * DT.v <= tf + 1e-9; k++) flashes.push(k * DT.v);
    const pc = C('position'), vc = C('velocity'), ac = C('acceleration'), tc = C('time');
    /* ---- the scene, on the left ---- */
    const yg = 530, xL = 290, SC = Math.min(400 / Y0.v, 430 / Math.max(xmax, 0.6));
    const X = (m) => xL + m * SC, Y = (m) => yg - m * SC;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(60, yg, 680, 22); ctx.restore();
    line(ctx, 60, yg, 740, yg, PAL.muted, 3);
    fixed(ctx, xL - 150, Y(Y0.v) + 11, 134, 24);
    vbracket(ctx, 96, Y(Y0.v), yg, pc);
    text(ctx, 'y₀ = ' + fmt(Y0.v, 2) + ' m', 96, Y(Y0.v) - 30, pc, { weight: 600, size: 22, align: 'center' });
    text(ctx, 'y = 0', 96, yg + 44, pc, { weight: 600, size: 20, align: 'center' });
    /* one scale for every velocity arrow, so the horizontal and vertical arrows can be compared */
    const AS = 100 / (G * tf);
    function ball(t, ghost) {
      const y = yOf(t), yd = Y(y), xd = X(0), xt = X(V.v * t), vy = Math.min(G * t, G * tf);
      const col = ghost ? alpha(PAL.ink, 0.28) : PAL.ink, arr = ghost ? alpha(vc, 0.5) : vc;
      if (xt - xd > 14) line(ctx, xd, yd, xt, yd, PAL.muted, 2, [6, 8]);
      if (ghost || !done) {
        if (vy * AS > 6) { arrow(ctx, xd, yd + 14, xd, yd + 14 + vy * AS, arr, 4); arrow(ctx, xt, yd + 14, xt, yd + 14 + vy * AS, arr, 4); }
        arrow(ctx, xt + 14, yd, xt + 14 + V.v * AS, yd, arr, 4);
      }
      dot(ctx, xd, yd, col, true, ghost ? 8 : 10); dot(ctx, xt, yd, col, true, ghost ? 8 : 10);
      return { xd, xt, yd, vy };
    }
    flashes.filter((t) => t <= tau + 1e-9).forEach((t) => ball(t, true));
    const now = ball(tau, false);
    if (!done) {
      /* the acceleration on each ball never changes; the velocities are named once each */
      arrow(ctx, now.xd - 22, now.yd, now.xd - 22, now.yd + 60, ac, 4); arrow(ctx, now.xt + 36, now.yd + 22, now.xt + 36, now.yd + 82, ac, 4);
      text(ctx, 'g', now.xt + 50, now.yd + 58, ac, { weight: 600, size: 24 });
      if (now.vy > 0.3) text(ctx, 'vertical velocity ' + fmt(now.vy, 2) + ' m/s', now.xd - 38, now.yd + 34 + (now.vy * AS) / 2, vc, { weight: 600, size: 18, align: 'right', bg: PAL.panel });
      text(ctx, 'horizontal velocity ' + fmt(V.v, 2) + ' m/s', now.xt + 14 + (V.v * AS) / 2, now.yd - 26, vc, { weight: 600, size: 18, align: 'center', bg: PAL.panel });
    }
    if (xnow * SC > 30) { hbracket(ctx, X(0), X(xnow), yg + 52, pc); text(ctx, 'x = ' + fmt(xnow, 2) + ' m', (X(0) + X(xnow)) / 2, yg + 82, pc, { weight: 600, size: 20, align: 'center' }); }
    text(ctx, 'dropped', X(0), Y(Y0.v) - 60, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'thrown', X(0) + 14 + V.v * AS + 16, Y(Y0.v) - 60, PAL.muted, { size: 17 });
    /* ---- the graphs, beside the scene: the same height at every flash, a different sideways distance ---- */
    const tr = nice(0, tf, 3), yr = nice(0, Y0.v, 3), xr = nice(0, Math.max(xmax, 0.5), 2);
    const top = { l: 880, r: 1330, t: 120, b: 290 }, bot = { l: 880, r: 1330, t: 400, b: 570 };
    const g1 = axes(ctx, top, [0, tr.hi], [0, yr.hi], { xl: 't (s)', xc: tc, yl: 'height y (m)', yc: pc, nx: tr.n, ny: yr.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, yOf, 0, tf, g1.X, g1.Y, pc, 4);
    flashes.forEach((t) => { if (t <= tau + 1e-9) dot(ctx, g1.X(t), g1.Y(yOf(t)), pc, true, 7); });
    line(ctx, g1.X(tau), top.b, g1.X(tau), g1.Y(yOf(tau)), tc, 2, [4, 8]); dot(ctx, g1.X(tau), g1.Y(yOf(tau)), PAL.ink, true, 9);
    text(ctx, 'both balls', g1.X(tf * 0.3) + 14, g1.Y(yOf(tf * 0.3)) - 20, pc, { size: 17, weight: 600 });
    const g2 = axes(ctx, bot, [0, tr.hi], [0, xr.hi], { xl: 't (s)', xc: tc, yl: 'sideways distance x (m)', yc: pc, nx: tr.n, ny: xr.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    line(ctx, g2.X(0), g2.Y(0), g2.X(tf), g2.Y(xmax), pc, 4);
    flashes.forEach((t) => { if (t <= tau + 1e-9) { dot(ctx, g2.X(t), g2.Y(V.v * t), pc, true, 7); dot(ctx, g2.X(t), g2.Y(0), pc, false, 7); } });
    line(ctx, g2.X(tau), bot.b, g2.X(tau), g2.Y(xnow), tc, 2, [4, 8]); dot(ctx, g2.X(tau), g2.Y(xnow), PAL.ink, true, 9);
    text(ctx, 'thrown ball', g2.X(tf * 0.5) - 12, g2.Y(xmax * 0.5) - 14, pc, { size: 17, weight: 600, align: 'right' });
    text(ctx, 'dropped ball stays at x = 0', g2.X(0) + 16, g2.Y(0) - 22, PAL.muted, { size: 17, bg: PAL.panel });
    headline(ctx, done ? 'both balls reach the ground together after ' + fmt(tf, 2) + ' s, and the thrown ball has gone ' + fmt(xmax, 2) + ' m sideways'
      : 't = ' + fmt(tau, 2) + ' s · both balls are ' + fmt(yOf(tau), 2) + ' m above the ground, and the thrown ball has gone ' + fmt(xnow, 2) + ' m sideways');
    readout(d.readout, `\\ky = \\kyo - \\tfrac{1}{2}\\kg\\kt^2 = ${fmt(yOf(tau), 2)}\\ \\text{m for both balls}\\qquad \\kx = \\kvox\\kt = ${fmt(xnow, 2)}\\ \\text{m for the thrown ball}`,
      'Between any two flashes the thrown ball moves the same ' + fmt(V.v * DT.v, 2) + ' m sideways, and at every flash the vertical velocities of the two balls are equal.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tfall() / 5), draw });
})();
};
