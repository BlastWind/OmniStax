/* Figures for section 3.1 Kinematics in Two Dimensions: An Introduction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, nice, curve, fixed, person, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const G = 9.80;

/* ---------- sprites, in ink ---------- */
/* a helicopter seen from above, centred on (x, y), its nose turned to the angle a (radians, counterclockwise
   on the page) and its rotor turned to the angle r: a cabin, a tail boom with a tail rotor, two main blades
   over a faint rotor disc, and a skid either side of the cabin */
function helicopter(ctx, x, y, a, r, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-a); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineCap = 'round';
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-14, -20); ctx.lineTo(14, -20); ctx.moveTo(-14, 20); ctx.lineTo(14, 20); ctx.stroke();   /* the skids */
  ctx.beginPath(); ctx.moveTo(24, 0); ctx.quadraticCurveTo(22, -16, 4, -16); ctx.lineTo(-18, -12); ctx.lineTo(-18, 12); ctx.lineTo(4, 16); ctx.quadraticCurveTo(22, 16, 24, 0); ctx.closePath(); ctx.fill();   /* the cabin, nose to the right */
  ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-18, 0); ctx.lineTo(-62, 0); ctx.stroke();   /* the tail boom */
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-62, -14); ctx.lineTo(-62, 14); ctx.moveTo(-58, -4); ctx.lineTo(-66, -4); ctx.stroke();   /* the tail rotor and fin */
  ctx.fillStyle = alpha(color, 0.12); ctx.beginPath(); ctx.arc(0, 0, 44, 0, Math.PI * 2); ctx.fill();   /* the rotor disc */
  ctx.rotate(r); ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-44, 0); ctx.lineTo(44, 0); ctx.moveTo(0, -44); ctx.lineTo(0, 44); ctx.stroke();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(0, 0, 5, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}
/* the library's walker set on a map: walking east she is drawn upright with her feet on the street, and walking
   north the drawing is turned so that she walks up the page */
function walker(ctx, x, y, north, phase, color) {
  ctx.save(); ctx.translate(x, y);
  if (north) ctx.rotate(-Math.PI / 2);
  person(ctx, 0, 0, color, { face: 1, phase, s: 0.8 });
  ctx.restore();
}

/* =====================================================================
   FIGURE 3.3: the walk in the city. A pedestrian walks east along the
   bottom of a grid of square blocks and then north up its right edge,
   while a helicopter flies the straight diagonal between the same two
   points at the same speed. The three vectors of the trip are drawn as
   arrows with a hash mark per block, and they form the right triangle of
   the Pythagorean theorem. Finite motion, so it gets the scrubber.
   The scale is fixed: 60 units to a block holds the longest walk the
   sliders allow (12 east, 8 north) with the grid anchored at the start.
===================================================================== */
(function () {
  const d = sim('sim-walk', 700);
  const E = ctl(d.controls, { label: '\\text{blocks east}', cls: 'position', min: 1, max: 12, step: 1, value: 9, unit: 'blocks', dec: 0, onInput: reset, aria: 'blocks east' });
  const N = ctl(d.controls, { label: '\\text{blocks north}', cls: 'position', min: 1, max: 8, step: 1, value: 5, unit: 'blocks', dec: 0, onInput: reset, aria: 'blocks north' });
  /* model time counts blocks travelled: the walker and the helicopter each cover one block per unit of it */
  const total = () => E.v + N.v;
  const cy = cycle(total, 1.2);
  function reset() { cy.reset(); }
  const s = 60, x0 = 220, yb = 600;   /* fixed: the grid's start, bottom left, and the size of a block */
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, n = N.v, c = Math.hypot(e, n), theta = Math.atan2(n, e), tau = cy.now(), done = tau >= total() - 1e-9;
    const yt = yb - n * s, xr = x0 + e * s, gap = 8, pc = C('position');
    const lab = labeller(ctx, 700); lab.block(0, 0, 1400, 96);
    /* the blocks of the city, and the right triangle the three vectors form */
    ctx.save(); ctx.fillStyle = PAL.soft;
    for (let i = 0; i < e; i++) for (let j = 0; j < n; j++) ctx.fillRect(x0 + i * s + gap / 2, yt + j * s + gap / 2, s - gap, s - gap);
    ctx.fillStyle = alpha(pc, 0.1); ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(xr, yb); ctx.lineTo(xr, yt); ctx.closePath(); ctx.fill();
    ctx.restore();
    /* the angle of the straight-line path above east */
    const ra = Math.min(80, e * s * 0.4);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x0, yb, ra, -theta, 0); ctx.stroke(); ctx.restore();
    lab.add('θ = ' + fmt(theta * 180 / Math.PI, 1) + '°', x0 + ra * Math.cos(theta / 2), yb - ra * Math.sin(theta / 2), Math.cos(theta / 2), -Math.sin(theta / 2), PAL.ink, 20, 30);
    /* the three vectors: east, north and the straight-line path, each with a hash mark per block */
    arrow(ctx, x0, yb, xr, yb, pc, 5); arrow(ctx, xr, yb, xr, yt, pc, 5); arrow(ctx, x0, yb, xr, yt, pc, 5);
    for (let i = 1; i < e; i++) line(ctx, x0 + i * s, yb - 8, x0 + i * s, yb + 8, pc, 3);
    for (let j = 1; j < n; j++) line(ctx, xr - 8, yb - j * s, xr + 8, yb - j * s, pc, 3);
    const ux = Math.cos(theta), uy = -Math.sin(theta);
    for (let k = 1; k < c; k++) { const px = x0 + k * s * ux, py = yb + k * s * uy; line(ctx, px + 8 * uy, py - 8 * ux, px - 8 * uy, py + 8 * ux, pc, 3); }
    /* block numbers along the two legs */
    for (let i = 0; i <= e; i++) text(ctx, String(i), x0 + i * s, yb + 28, PAL.muted, { size: 17, align: 'center' });
    for (let j = 1; j <= n; j++) text(ctx, String(j), xr + 24, yb - j * s, PAL.muted, { size: 17 });
    /* the three sides carry the letters the readout uses, so a, b and c can be found on the drawing */
    text(ctx, 'a = ' + e + (e === 1 ? ' block east' : ' blocks east'), (x0 + xr) / 2, yb + 60, pc, { weight: 600, align: 'center' });
    lab.add('b = ' + n + (n === 1 ? ' block north' : ' blocks north'), xr + 36, (yb + yt) / 2, 1, 0, pc, 22, 20);
    ctx.save(); ctx.translate((x0 + xr) / 2, (yb + yt) / 2); ctx.rotate(-theta);
    text(ctx, 'c = ' + fmt(c, 1) + ' blocks, the straight-line path', 0, -28, pc, { weight: 600, align: 'center', bg: PAL.panel }); ctx.restore();
    lab.add('start', x0, yb, -1, 0, PAL.muted, 17, 26);
    lab.add('destination', xr, yt, 0.4, -1, PAL.muted, 17, 56);
    /* the walker on the streets and the helicopter on the diagonal, one block per unit of model time */
    const wx = tau <= e ? x0 + tau * s : xr, wy = tau <= e ? yb : yb - (tau - e) * s;
    const hf = Math.min(tau, c) / c, hx = x0 + (xr - x0) * hf, hy = yb + (yt - yb) * hf;
    helicopter(ctx, hx, hy, theta, cy.tau * 2.4, PAL.ink);
    walker(ctx, wx, wy, tau > e && !done, done ? 0 : cy.tau * 9, PAL.ink);
    lab.flush();
    const gone = Math.min(tau, total()), flown = Math.min(tau, c);
    topline(ctx, done ? 'The walk covers ' + total() + ' blocks, ' + e + ' east and then ' + n + ' north, while the straight-line distance is ' + fmt(c, 1) + ' blocks.'
      : tau >= c ? 'The helicopter has arrived after ' + fmt(c, 1) + ' blocks, and the walker still has ' + fmt(total() - gone, 1) + ' blocks to go.'
      : 'The walker has gone ' + fmt(gone, 1) + ' of the ' + total() + ' blocks, and the helicopter ' + fmt(flown, 1) + ' of its ' + fmt(c, 1) + '.');
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
   The scale is fixed at 160 units to the metre, which holds a 3.0 m drop
   and the 3.1 m the fastest throw carries in that fall; the velocity
   arrows are 12 units per m/s, so the longest, 7.7 m/s, is 92 units.
===================================================================== */
(function () {
  const d = sim('sim-two-balls', 700);
  const V = ctl(d.controls, { label: '\\kvox', cls: 'velocity', min: 0.5, max: 4, step: 0.1, value: 3, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial horizontal velocity' });
  const DT = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.05, max: 0.2, step: 0.01, value: 0.1, unit: 's', dec: 2, onInput: reset, aria: 'interval between flashes' });
  const Y0 = ctl(d.controls, { label: '\\kyo', cls: 'position', min: 1, max: 3, step: 0.1, value: 1.5, unit: 'm', dec: 1, onInput: reset, aria: 'height' });
  const tfall = () => Math.sqrt((2 * Y0.v) / G);
  const cy = cycle(tfall, 1.2);
  function reset() { cy.reset(); }
  const yOf = (t) => Math.max(0, Y0.v - 0.5 * G * t * t);
  const SC = 160, AS = 12, yg = 600, xL = 300;
  const X = (m) => xL + m * SC, Y = (m) => yg - m * SC;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), tf = tfall(), done = tau >= tf - 1e-9, xmax = V.v * tf, xnow = V.v * tau;
    const flashes = []; for (let k = 0; k * DT.v <= tf + 1e-9; k++) flashes.push(k * DT.v);
    const pc = C('position'), vc = C('velocity'), ac = C('acceleration'), tc = C('time');
    /* ---- the scene, on the left: the ground, the ledge the balls leave, the height ---- */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(60, yg, 760, 22); ctx.restore();
    line(ctx, 60, yg, 820, yg, PAL.muted, 3);
    fixed(ctx, xL - 170, Y(Y0.v) + 12, 150, 26);
    vbracket(ctx, 90, Y(Y0.v), yg, pc);
    text(ctx, 'y₀ = ' + fmt(Y0.v, 2) + ' m', 90, Y(Y0.v) - 28, pc, { weight: 600, size: 22, align: 'center' });
    text(ctx, 'y = 0', 90, yg + 40, pc, { weight: 600, size: 20, align: 'center' });
    text(ctx, 'dropped', X(0), Y(Y0.v) - 34, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'thrown', X(0) + 14 + V.v * AS + 40, Y(Y0.v) - 34, PAL.muted, { size: 18, align: 'center' });
    /* a ball pair at time t: a strobe copy in a lighter ink, or the pair as it is now */
    function pair(t, ghost) {
      const y = yOf(t), yd = Y(y), xd = X(0), xt = X(V.v * t), vy = Math.min(G * t, G * tf);
      const col = ghost ? alpha(PAL.ink, 0.4) : PAL.ink, arr = ghost ? alpha(vc, 0.55) : vc, w = ghost ? 3 : 4;
      if (xt - xd > 14) line(ctx, xd, yd, xt, yd, PAL.muted, 2, [6, 8]);
      if (ghost || !done) {
        if (vy * AS > 6) { arrow(ctx, xd, yd + 12, xd, yd + 12 + vy * AS, arr, w); arrow(ctx, xt, yd + 12, xt, yd + 12 + vy * AS, arr, w); }
        arrow(ctx, xt + 12, yd, xt + 12 + V.v * AS, yd, arr, w);
      }
      dot(ctx, xd, yd, col, true, ghost ? 8 : 10); dot(ctx, xt, yd, col, true, ghost ? 8 : 10);
      return { xd, xt, yd, vy };
    }
    flashes.filter((t) => t <= tau + 1e-9).forEach((t) => pair(t, true));
    const now = pair(tau, false);
    if (!done) {
      /* the acceleration on each ball never changes; the velocities are named once each, on the thrown ball */
      arrow(ctx, now.xd - 26, now.yd, now.xd - 26, now.yd + 60, ac, 4); arrow(ctx, now.xt + V.v * AS + 40, now.yd, now.xt + V.v * AS + 40, now.yd + 60, ac, 4);
      text(ctx, 'g', now.xt + V.v * AS + 54, now.yd + 34, ac, { weight: 600, size: 24 });
      text(ctx, 'v₀x = ' + fmt(V.v, 2) + ' m/s', now.xt + 12 + (V.v * AS) / 2, now.yd - 24, vc, { weight: 600, size: 18, align: 'center', bg: PAL.panel });
      if (now.vy > 0.3) text(ctx, 'vy = ' + fmt(now.vy, 2) + ' m/s', now.xt + 14, now.yd + 22 + (now.vy * AS) / 2, vc, { weight: 600, size: 18, bg: PAL.panel });
    }
    if (xnow * SC > 30) { hbracket(ctx, X(0), X(xnow), yg + 50, pc); text(ctx, 'x = ' + fmt(xnow, 2) + ' m', (X(0) + X(xnow)) / 2, yg + 78, pc, { weight: 600, size: 20, align: 'center' }); }
    /* ---- the graphs, beside the scene: the same height at every flash, a different sideways distance ---- */
    const tr = nice(0, tf, 3), yr = nice(0, Y0.v, 3), xr = nice(0, Math.max(xmax, 0.5), 2);
    const top = { l: 900, r: 1330, t: 120, b: 290 }, bot = { l: 900, r: 1330, t: 400, b: 570 };
    const g1 = axes(ctx, top, [0, tr.hi], [0, yr.hi], { xl: 't (s)', xc: tc, yl: 'height y (m)', yc: pc, nx: tr.n, ny: yr.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, yOf, 0, tf, g1.X, g1.Y, pc, 4);
    flashes.forEach((t) => { if (t <= tau + 1e-9) dot(ctx, g1.X(t), g1.Y(yOf(t)), pc, true, 7); });
    line(ctx, g1.X(tau), top.b, g1.X(tau), g1.Y(yOf(tau)), tc, 2, [4, 8]); dot(ctx, g1.X(tau), g1.Y(yOf(tau)), PAL.ink, true, 9);
    text(ctx, 'both balls', g1.X(tf * 0.72), g1.Y(yOf(tf * 0.72)) - 30, pc, { size: 17, weight: 600, align: 'center', bg: PAL.panel });
    const g2 = axes(ctx, bot, [0, tr.hi], [0, xr.hi], { xl: 't (s)', xc: tc, yl: 'sideways distance x (m)', yc: pc, nx: tr.n, ny: xr.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    line(ctx, g2.X(0), g2.Y(0), g2.X(tf), g2.Y(xmax), pc, 4);
    flashes.forEach((t) => { if (t <= tau + 1e-9) { dot(ctx, g2.X(t), g2.Y(V.v * t), pc, true, 7); dot(ctx, g2.X(t), g2.Y(0), pc, false, 7); } });
    line(ctx, g2.X(tau), bot.b, g2.X(tau), g2.Y(xnow), tc, 2, [4, 8]); dot(ctx, g2.X(tau), g2.Y(xnow), PAL.ink, true, 9);
    text(ctx, 'thrown ball', g2.X(tf * 0.45), g2.Y(xmax * 0.45) - 26, pc, { size: 17, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'dropped ball stays at x = 0', g2.X(0) + 16, g2.Y(0) - 24, PAL.muted, { size: 17, bg: PAL.panel });
    topline(ctx, done ? 'Both balls reach the ground together after ' + fmt(tf, 2) + ' s, and the thrown ball has gone ' + fmt(xmax, 2) + ' m sideways.'
      : 'After ' + fmt(tau, 2) + ' s both balls are ' + fmt(yOf(tau), 2) + ' m above the ground, and the thrown ball has gone ' + fmt(xnow, 2) + ' m sideways.');
    readout(d.readout, `\\ky = \\kyo - \\tfrac{1}{2}\\kg\\kt^2 = ${fmt(yOf(tau), 2)}\\ \\text{m for both balls}\\qquad \\kx = \\kvox\\kt = ${fmt(xnow, 2)}\\ \\text{m for the thrown ball}`,
      'Between any two flashes the thrown ball moves the same ' + fmt(V.v * DT.v, 2) + ' m sideways, and at every flash the vertical velocities of the two balls are equal.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tfall() / 5), draw });
})();
};
