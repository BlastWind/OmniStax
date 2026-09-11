/* Figures for section 2.7 Falling Objects. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, axes, nice, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const sgn = (v) => (v < 0 ? '−' : '+');
/* a signed number for a label: "+3.20" or "−6.60" */
const signed = (v, d) => (Math.abs(v) < Math.pow(10, -d) / 2 ? '0' : sgn(v) + fmt(Math.abs(v), d));
/* a signed number in TeX, with the minus sign KaTeX draws */
const stex = (v, d) => (v < 0 ? '-' + fmt(-v, d) : fmt(v, d));

/* ---------- a vertical scale: an axis line at x with a tick and a label every step from lo to hi ---------- */
function vscale(ctx, x, Y, lo, hi, step, unit) {
  const dec = step >= 1 ? 0 : step >= 0.1 ? 1 : 2;
  line(ctx, x, Y(hi), x, Y(lo), PAL.muted, 2);
  for (let v = lo; v <= hi + 1e-9; v += step) {
    line(ctx, x - 8, Y(v), x + 8, Y(v), PAL.muted, 2);
    text(ctx, fmt(v, dec).replace('-', '−') + (unit ? ' ' + unit : ''), x - 14, Y(v), PAL.muted, { size: 17, align: 'right' });
  }
}

/* ---------- sprites, in ink ---------- */
/* a hammer hanging head up, its handle's end at (x, y) */
function hammer(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color;
  ctx.fillRect(-6, -76, 12, 76); ctx.fillRect(-20, -96, 48, 22);
  ctx.beginPath(); ctx.moveTo(-20, -96); ctx.lineTo(-40, -104); ctx.lineTo(-36, -84); ctx.lineTo(-20, -74); ctx.closePath(); ctx.fill();
  ctx.restore();
}
/* a feather standing on its quill at (x, y) */
function feather(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = alpha(color, 0.22); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(0, -90); ctx.quadraticCurveTo(30, -50, 4, -8); ctx.quadraticCurveTo(-30, -50, 0, -90); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, -90); ctx.lineTo(0, 0); ctx.stroke();
  ctx.restore();
}
/* a person standing on (x, y), one arm out to the right at hand height y - 96 */
function person(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(x, y - 112, 11, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x, y - 100); ctx.lineTo(x, y - 46); ctx.moveTo(x, y - 46); ctx.lineTo(x - 14, y); ctx.moveTo(x, y - 46); ctx.lineTo(x + 14, y);
  ctx.moveTo(x, y - 88); ctx.lineTo(x + 40, y - 96); ctx.moveTo(x, y - 88); ctx.lineTo(x - 20, y - 60); ctx.stroke();
  ctx.restore();
}
/* a stopwatch centred on (x, y) whose hand has turned the fraction f of one turn */
function stopwatch(ctx, x, y, r, f) {
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillRect(x - 10, y - r - 16, 20, 12); ctx.strokeRect(x - 10, y - r - 16, 20, 12);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; line(ctx, x + (r - 10) * Math.sin(a), y - (r - 10) * Math.cos(a), x + (r - 4) * Math.sin(a), y - (r - 4) * Math.cos(a), PAL.muted, i % 3 ? 2 : 4); }
  ctx.restore();
  const a = f * Math.PI * 2;
  line(ctx, x, y, x + (r - 18) * Math.sin(a), y - (r - 18) * Math.cos(a), C('time'), 4); dot(ctx, x, y, C('time'), true, 6);
}

/* =====================================================================
   FIGURE 2.37: the hammer and the feather. Two panels, in air and in a
   vacuum; in the vacuum both fall together by y = -½gt², and in air the
   feather drifts down slowly, drawn without a number since the book gives
   none. Finite motion, one drop per loop, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-hammer-feather', 580);
  const g = ctl(d.controls, { label: '\\kg', cls: 'acceleration', min: 1, max: 20, step: 0.01, value: 9.8, unit: 'm/s²', dec: 2, onInput: reset, aria: 'acceleration due to gravity' });
  const h = ctl(d.controls, { label: 'h', cls: '', min: 0.5, max: 5, step: 0.1, value: 2, unit: 'm', dec: 1, onInput: reset, aria: 'drop height' });
  const T = () => Math.sqrt((2 * h.v) / g.v);
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  const floorY = 500, topY = 150, Y = (ht) => floorY - ((floorY - topY) * ht) / h.v;
  function panel(ctx, x1, x2, label) {
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(x1, topY - 40, x2 - x1, floorY - topY + 40); ctx.restore();
    line(ctx, x1, floorY, x2, floorY, PAL.ink, 4);
    text(ctx, label, (x1 + x2) / 2, floorY + 34, PAL.ink, { size: 22, align: 'center', weight: 600 });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), tEnd = T(), done = tau >= tEnd - 1e-9;
    const fallen = Math.min(h.v, 0.5 * g.v * tau * tau), ht = h.v - fallen;
    const drift = ((0.35 * h.v) / tEnd) * tau, htAir = h.v - drift;
    /* the two panels and the release line */
    panel(ctx, 150, 590, 'in air'); panel(ctx, 780, 1220, 'in a vacuum');
    [[150, 590], [780, 1220]].forEach(([a, b]) => line(ctx, a, Y(h.v), b, Y(h.v), PAL.muted, 2, [8, 8]));
    text(ctx, 'released from h = ' + fmt(h.v, 1) + ' m', 370, Y(h.v) - 22, PAL.muted, { size: 17, align: 'center' });
    vscale(ctx, 120, Y, 0, Math.floor(h.v), 1, 'm');
    /* in air: the hammer falls freely and the feather drifts */
    hammer(ctx, 300, Y(ht), PAL.ink); feather(ctx, 460, Y(htAir), PAL.ink);
    /* in a vacuum: both fall together */
    hammer(ctx, 920, Y(ht), PAL.ink); feather(ctx, 1080, Y(ht), PAL.ink);
    if (fallen > 0.02) vbracket(ctx, 1170, Y(h.v), Y(ht), C('position'), 'fallen ' + fmt(fallen, 2) + ' m', 1);
    /* the acceleration due to gravity, the same for both */
    const ax = 685, ay = 200, al = 60 + g.v * 9;
    arrow(ctx, ax, ay, ax, ay + al, C('acceleration'), 5);
    text(ctx, 'a = −g', ax, ay - 30, C('acceleration'), { size: 22, weight: 600, align: 'center' });
    text(ctx, '= −' + fmt(g.v, 2) + ' m/s²', ax, ay + al + 30, C('acceleration'), { size: 18, weight: 600, align: 'center' });
    text(ctx, 't = ' + fmt(tau, 2) + ' s', 685, 110, C('time'), { size: 24, weight: 600, align: 'center' });
    headline(ctx, done ? 'both reach the floor at t = ' + fmt(tEnd, 2) + ' s, having fallen ' + fmt(h.v, 1) + ' m with the same acceleration g = ' + fmt(g.v, 2) + ' m/s²'
      : 't = ' + fmt(tau, 2) + ' s · in a vacuum the hammer and the feather have fallen the same ' + fmt(fallen, 2) + ' m together, while in air the feather lags behind');
    const other = g.v > 5 ? ['the Moon', 1.67] : ['Earth', 9.8];
    readout(d.readout, `\\ky = -\\tfrac{1}{2}\\kg\\kt^2 = -\\tfrac{1}{2}(${fmt(g.v, 2)}\\ \\text{m/s}^2)(${fmt(tau, 2)}\\ \\text{s})^2 = ${stex(-fallen, 2)}\\ \\text{m}`,
      'The mass of the object does not appear in the equation, so the hammer and the feather fall together. On ' + other[0] + ', where g = ' + fmt(other[1], 2) + ' m/s², the same drop of ' + fmt(h.v, 1) + ' m would take ' + fmt(Math.sqrt((2 * h.v) / other[1]), 2) + ' s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 2.39: the rock thrown upward. A vertical scene at the cliff, the
   rock rising to its highest point and falling past the edge, with y, v
   and a against t beside it. Finite flight, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-rock-up', 780);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 25, step: 0.1, value: 13, unit: 'm/s', dec: 1, onInput: reset });
  const g = ctl(d.controls, { label: '\\kg', cls: 'acceleration', min: 1, max: 20, step: 0.01, value: 9.8, unit: 'm/s²', dec: 2, onInput: reset, aria: 'acceleration due to gravity' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.5, max: 8, step: 0.05, value: 3, unit: 's', dec: 2, onInput: reset, aria: 'time shown' });
  const cy = cycle(() => T.v, 1.4);
  function reset() { cy.reset(); }
  const pos = (s) => v0.v * s - 0.5 * g.v * s * s, vel = (s) => v0.v - g.v * s;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), ttop = v0.v / g.v, ytop = (v0.v * v0.v) / (2 * g.v), yEnd = pos(T.v);
    const y = pos(tau), v = vel(tau);
    /* the scene: a cliff at the left, the rock on a vertical line above the edge, a height scale beside it */
    const yr = nice(Math.min(-1, yEnd), Math.max(1, ytop), 4), sTop = 110, sBot = 690;
    const Y = (m) => sBot - ((sBot - sTop) * (m - yr.lo)) / (yr.hi - yr.lo);
    const ground = Y(0) + 96;
    if (ground < sBot + 40) fixed(ctx, 150, ground, 150, Math.max(20, sBot + 60 - ground));
    person(ctx, 260, ground, PAL.ink);
    vscale(ctx, 110, Y, yr.lo, yr.hi, (yr.hi - yr.lo) / yr.n, 'm');
    line(ctx, 130, Y(0), 640, Y(0), C('position'), 2, [8, 8]);
    text(ctx, 'y₀ = 0', 640, Y(0) - 18, C('position'), { size: 20, weight: 600, align: 'right' });
    /* the highest point */
    const rx = 380;
    line(ctx, 130, Y(ytop), 640, Y(ytop), C('position'), 2, [8, 8]);
    dot(ctx, rx, Y(ytop), C('position'), false, 10);
    text(ctx, 'highest point, ' + fmt(ytop, 2) + ' m at ' + fmt(ttop, 2) + ' s', 130, Y(ytop) - 18, C('position'), { size: 17, weight: 600 });
    /* the rock with its velocity and acceleration arrows */
    line(ctx, rx, Y(yr.hi), rx, Y(yr.lo), PAL.rule, 1.5);
    dot(ctx, rx, Y(y), PAL.ink, true, 11);
    if (Math.abs(v) > 0.3) {
      const L = 30 + Math.abs(v) * 7; arrow(ctx, rx, Y(y), rx, Y(y) - Math.sign(v) * L, C('velocity'), 5);
      text(ctx, 'v = ' + signed(v, 2) + ' m/s', rx + 16, Y(y) - Math.sign(v) * (L + 4), C('velocity'), { size: 20, weight: 600 });
    } else text(ctx, 'v = 0', rx + 16, Y(y) - 24, C('velocity'), { size: 20, weight: 600 });
    const aL = 30 + g.v * 6;
    arrow(ctx, rx + 120, Y(y), rx + 120, Y(y) + aL, C('acceleration'), 5);
    text(ctx, 'a = −' + fmt(g.v, 2) + ' m/s²', rx + 134, Y(y) + aL / 2, C('acceleration'), { size: 20, weight: 600 });
    /* the three graphs, y, v and a against t */
    const tr = nice(0, T.v, 4), gx = { l: 700, r: 1330 };
    const boxes = [{ t: 110, b: 250 }, { t: 330, b: 470 }, { t: 550, b: 690 }].map((b) => ({ ...gx, ...b }));
    const vr = nice(Math.min(0, vel(T.v)), Math.max(0, v0.v), 3), ar = nice(-g.v, 0, 2);
    const G1 = axes(ctx, boxes[0], [0, tr.hi], [yr.lo, yr.hi], { yl: 'y (m)', yc: C('position'), nx: tr.n, ny: yr.n, fx: (x) => fmt(x, 1) });
    const G2 = axes(ctx, boxes[1], [0, tr.hi], [vr.lo, vr.hi], { yl: 'v (m/s)', yc: C('velocity'), nx: tr.n, ny: vr.n, fx: (x) => fmt(x, 1) });
    const G3 = axes(ctx, boxes[2], [0, tr.hi], [ar.lo, ar.hi], { xl: 't (s)', xc: C('time'), yl: 'a (m/s²)', yc: C('acceleration'), nx: tr.n, ny: ar.n, fx: (x) => fmt(x, 1) });
    curve(ctx, pos, 0, T.v, G1.X, G1.Y, C('position'), 5);
    line(ctx, G2.X(0), G2.Y(v0.v), G2.X(T.v), G2.Y(vel(T.v)), C('velocity'), 5);
    line(ctx, G3.X(0), G3.Y(-g.v), G3.X(T.v), G3.Y(-g.v), C('acceleration'), 5);
    if (ttop <= T.v) { dot(ctx, G1.X(ttop), G1.Y(ytop), C('position'), false, 9); dot(ctx, G2.X(ttop), G2.Y(0), C('velocity'), false, 9); }
    dot(ctx, G2.X(0), G2.Y(v0.v), C('velocity'), false, 9); text(ctx, 'v₀', G2.X(0) + 20, G2.Y(v0.v) - 18, C('velocity'), { size: 22, weight: 600 });
    [[G1, y], [G2, v], [G3, -g.v]].forEach(([G, val], i) => { line(ctx, G.X(tau), boxes[i].b, G.X(tau), G.Y(val), C('time'), 2, [4, 8]); dot(ctx, G.X(tau), G.Y(val), PAL.ink, true, 9); });
    text(ctx, 'slope = −g', G2.X(T.v) - 10, G2.Y(vel(T.v)) - 26, C('acceleration'), { size: 17, weight: 600, align: 'right' });
    /* what the numbers say */
    const at = Math.abs(tau - ttop) < 0.012 * T.v && ttop <= T.v;
    headline(ctx, at ? 'at t = ' + fmt(ttop, 2) + ' s the rock is at its highest point, ' + fmt(ytop, 2) + ' m: its velocity is zero, but its acceleration is still −' + fmt(g.v, 2) + ' m/s²'
      : 't = ' + fmt(tau, 2) + ' s · y = ' + signed(y, 2) + ' m, v = ' + signed(v, 2) + ' m/s: ' + (y > 0.005 ? 'above the start and ' : y < -0.005 ? 'below the start and ' : 'at the start and ') + (v > 0 ? 'still rising' : 'moving down') + '; a = −' + fmt(g.v, 2) + ' m/s² throughout');
    readout(d.readout, `\\ky = \\kyo + \\kvo\\kt - \\tfrac{1}{2}\\kg\\kt^2 = 0 + (${fmt(v0.v, 1)})(${fmt(tau, 2)}) - \\tfrac{1}{2}(${fmt(g.v, 2)})(${fmt(tau, 2)})^2 = ${stex(y, 2)}\\ \\text{m}\\qquad \\kv = \\kvo - \\kg\\kt = ${fmt(v0.v, 1)} - (${fmt(g.v, 2)})(${fmt(tau, 2)}) = ${stex(v, 2)}\\ \\text{m/s}`,
      'The rock is highest at t = v₀/g = ' + fmt(ttop, 2) + ' s, where v = 0 and y = v₀²/2g = ' + fmt(ytop, 2) + ' m; its acceleration there is still −' + fmt(g.v, 2) + ' m/s².');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   FIGURE 2.41: a rock thrown up and a rock thrown down with the same
   speed, both falling to the same level, and beside them v against y:
   the one parabola v² = v0² − 2g(y − y0) that both rocks ride. Finite
   flight, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-rock-down', 720);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 1, max: 25, step: 0.1, value: 13, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial speed' });
  const yE = ctl(d.controls, { label: '\\ky', cls: 'position', min: -40, max: -1, step: 0.1, value: -5.1, unit: 'm', dec: 2, onInput: reset, aria: 'level reached' });
  const g = ctl(d.controls, { label: '\\kg', cls: 'acceleration', min: 1, max: 20, step: 0.01, value: 9.8, unit: 'm/s²', dec: 2, onInput: reset, aria: 'acceleration due to gravity' });
  const vmax = () => Math.sqrt(v0.v * v0.v - 2 * g.v * yE.v);
  const tA = () => (v0.v + vmax()) / g.v, tB = () => (-v0.v + vmax()) / g.v;
  const cy = cycle(tA, 1.4);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), ta = tA(), tb = tB(), vm = vmax(), ytop = (v0.v * v0.v) / (2 * g.v);
    const yA = v0.v * tau - 0.5 * g.v * tau * tau, vA = v0.v - g.v * tau;
    const tbb = Math.min(tau, tb), yB = -v0.v * tbb - 0.5 * g.v * tbb * tbb, vB = -v0.v - g.v * tbb, arrivedB = tau >= tb - 1e-9;
    /* one height scale for the scene and the graph */
    const yr = nice(yE.v, ytop, 4), box = { l: 760, r: 1330, t: 110, b: 620 }, vr = nice(-vm, vm, 4);
    const { X: GX, Y } = axes(ctx, box, [vr.lo, vr.hi], [yr.lo, yr.hi], { xl: 'v (m/s)', xc: C('velocity'), yl: 'y (m)', yc: C('position'), nx: vr.n, ny: yr.n });
    /* the scene: the cliff, the person, the two rocks */
    const ground = Y(0) + 96;
    fixed(ctx, 60, ground, 140, Math.max(20, box.b + 60 - ground));
    person(ctx, 150, ground, PAL.ink);
    line(ctx, 200, Y(0), 640, Y(0), C('position'), 2, [8, 8]); text(ctx, 'y₀ = 0', 640, Y(0) - 18, C('position'), { size: 20, weight: 600, align: 'right' });
    line(ctx, 200, Y(yE.v), 640, Y(yE.v), C('position'), 2, [8, 8]); text(ctx, 'y = ' + stex(yE.v, 2).replace('-', '−') + ' m', 640, Y(yE.v) + 22, C('position'), { size: 20, weight: 600, align: 'right' });
    const xa = 320, xb = 480;
    text(ctx, 'thrown up', xa, Y(yr.hi) - 30, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'thrown down', xb, Y(yr.hi) - 30, PAL.muted, { size: 17, align: 'center' });
    line(ctx, xa, Y(yr.hi), xa, Y(yr.lo), PAL.rule, 1.5); line(ctx, xb, Y(yr.hi), xb, Y(yr.lo), PAL.rule, 1.5);
    /* the marks the rock thrown up leaves at every whole second, with its velocity arrow, as in the book's figure */
    for (let k = 0; k <= Math.floor(tau + 1e-9) && k <= ta; k++) {
      const yk = v0.v * k - 0.5 * g.v * k * k, vk = v0.v - g.v * k;
      dot(ctx, xa, Y(yk), C('position'), false, 7);
      if (Math.abs(vk) > 0.3) arrow(ctx, xa - 26, Y(yk), xa - 26, Y(yk) - Math.sign(vk) * (16 + Math.abs(vk) * 4), C('velocity'), 3);
      text(ctx, k + ' s', xa + 16, Y(yk) + 2, PAL.muted, { size: 15 });
    }
    dot(ctx, xa, Y(yA), PAL.ink, true, 11);
    if (Math.abs(vA) > 0.3) arrow(ctx, xa - 26, Y(yA), xa - 26, Y(yA) - Math.sign(vA) * (16 + Math.abs(vA) * 4), C('velocity'), 4);
    dot(ctx, xb, Y(yB), PAL.ink, true, 11);
    arrow(ctx, xb + 26, Y(yB), xb + 26, Y(yB) + 16 + Math.abs(vB) * 4, C('velocity'), 4);
    text(ctx, 'v = ' + signed(vB, 1) + ' m/s', xb + 40, Y(yB) + (arrivedB ? -22 : 22), C('velocity'), { size: 18, weight: 600 });
    text(ctx, 'v = ' + signed(vA, 1) + ' m/s', xa + 36, Y(yA) + (vA > 0 ? 22 : -22), C('velocity'), { size: 18, weight: 600 });
    /* the graph: the single parabola both rocks ride */
    curve(ctx, (v) => (v0.v * v0.v - v * v) / (2 * g.v), -vm, vm, GX, Y, C('position'), 5, 120);
    line(ctx, box.l, Y(yE.v), box.r, Y(yE.v), C('position'), 2, [8, 8]);
    dot(ctx, GX(v0.v), Y(0), C('velocity'), false, 9); dot(ctx, GX(-v0.v), Y(0), C('velocity'), false, 9);
    text(ctx, '+v₀', GX(v0.v) + 14, Y(0) - 20, C('velocity'), { size: 20, weight: 600 }); text(ctx, '−v₀', GX(-v0.v) - 14, Y(0) - 20, C('velocity'), { size: 20, weight: 600, align: 'right' });
    dot(ctx, GX(-vm), Y(yE.v), C('velocity'), false, 9);
    text(ctx, signed(-vm, 1) + ' m/s at y = ' + stex(yE.v, 2).replace('-', '−') + ' m', GX(-vm) + 16, Y(yE.v) + 24, C('velocity'), { size: 17, weight: 600 });
    dot(ctx, GX(vA), Y(yA), PAL.ink, true, 9); dot(ctx, GX(vB), Y(yB), PAL.ink, true, 9);
    text(ctx, 'v² = v₀² − 2g(y − y₀)', box.r - 10, box.t + 26, C('position'), { size: 18, weight: 600, align: 'right' });
    /* what the numbers say */
    const yl = stex(yE.v, 2).replace('-', '−'), vl = signed(-vm, 1);
    headline(ctx, tau >= ta - 1e-9 ? 't = ' + fmt(ta, 2) + ' s · thrown up, the rock reaches ' + yl + ' m at ' + vl + ' m/s, the same velocity the rock thrown down had there at t = ' + fmt(tb, 2) + ' s'
      : arrivedB ? 't = ' + fmt(tau, 2) + ' s · the rock thrown down reached ' + yl + ' m at ' + vl + ' m/s at t = ' + fmt(tb, 2) + ' s; the rock thrown up is at ' + signed(yA, 2) + ' m and ' + (vA > 0 ? 'still rising' : 'moving down')
      : 't = ' + fmt(tau, 2) + ' s · thrown down, the rock is at ' + signed(yB, 2) + ' m moving at ' + signed(vB, 1) + ' m/s; thrown up, it is at ' + signed(yA, 2) + ' m and rising');
    const v2 = v0.v * v0.v - 2 * g.v * yE.v;
    readout(d.readout, `\\kv^2 = \\kvo^2 - 2\\kg(\\ky - \\kyo) = (${fmt(v0.v, 1)})^2 - 2(${fmt(g.v, 2)})(${stex(yE.v, 2)} - 0) = ${fmt(v2, 1)}\\ \\text{m}^2\\text{/s}^2,\\qquad \\kv = -\\sqrt{${fmt(v2, 1)}} = ${stex(-vm, 1)}\\ \\text{m/s}`,
      'Whether the rock is thrown up at +' + fmt(v0.v, 1) + ' m/s or down at −' + fmt(v0.v, 1) + ' m/s, v₀² is the same, so at any level below the start the two have the same speed. The rock thrown up passes y = 0 again at −' + fmt(v0.v, 1) + ' m/s, and it is highest at y = ' + fmt(ytop, 2) + ' m.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tA() / 5), draw });
})();

/* =====================================================================
   FIGURE 2.42: finding g from a falling ball. The ball is released from
   rest and falls the measured distance in the measured time, leaving a
   mark every 0.1 s; y, v and a against t beside it. Finite drop, so it
   gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-drop', 760);
  const yF = ctl(d.controls, { label: '\\ky', cls: 'position', min: -3, max: -0.2, step: 0.0001, value: -1, unit: 'm', dec: 4, onInput: reset, aria: 'position at the end of the fall' });
  const tF = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.2, max: 1, step: 0.00001, value: 0.45173, unit: 's', dec: 5, onInput: reset, aria: 'time of the fall' });
  const cy = cycle(() => tF.v, 1.4);
  function reset() { cy.reset(); }
  const acc = () => (2 * yF.v) / (tF.v * tF.v);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), a = acc(), gg = -a, done = tau >= tF.v - 1e-9;
    const pos = (s) => 0.5 * a * s * s, vel = (s) => a * s, y = pos(tau), v = vel(tau);
    /* the scene: the ball on a vertical line below the hand, a height scale at its left, the strobe readings in a column at its right */
    const yr = nice(yF.v, 0, 4), sTop = 170, sBot = 690;
    const Y = (m) => sBot - ((sBot - sTop) * (m - yr.lo)) / (yr.hi - yr.lo);
    const bx = 210;
    fixed(ctx, bx - 60, Y(0) - 60, 120, 36); text(ctx, 'released from rest', bx, Y(0) - 78, PAL.muted, { size: 17, align: 'center' });
    vscale(ctx, 130, Y, yr.lo, yr.hi, (yr.hi - yr.lo) / yr.n, 'm');
    line(ctx, bx, Y(0), bx, Y(yr.lo), PAL.rule, 1.5);
    line(ctx, bx - 40, Y(yF.v), bx + 40, Y(yF.v), C('position'), 3);
    /* the strobe readings every 0.1 s, in a column as the book tabulates them */
    const cols = [310, 400, 530];
    text(ctx, 't (s)', cols[0], 118, C('time'), { size: 17, weight: 600, align: 'center' }); text(ctx, 'y (m)', cols[1], 118, C('position'), { size: 17, weight: 600, align: 'center' }); text(ctx, 'v (m/s)', cols[2], 118, C('velocity'), { size: 17, weight: 600, align: 'center' });
    const n = Math.floor(tF.v / 0.1 + 1e-9), rowY = (k) => 150 + k * Math.min(48, 520 / Math.max(1, n));
    for (let k = 0; k <= n; k++) {
      const tk = 0.1 * k, on = tau >= tk - 1e-9;
      if (on && k > 0) dot(ctx, bx, Y(pos(tk)), C('position'), false, 7);
      text(ctx, fmt(tk, 1), cols[0], rowY(k), on ? C('time') : PAL.muted, { size: 17, align: 'center' });
      text(ctx, stex(pos(tk), 3).replace('-', '−'), cols[1], rowY(k), on ? C('position') : PAL.muted, { size: 17, align: 'center' });
      text(ctx, stex(vel(tk), 2).replace('-', '−'), cols[2], rowY(k), on ? C('velocity') : PAL.muted, { size: 17, align: 'center' });
    }
    dot(ctx, bx, Y(y), PAL.ink, true, 12);
    if (Math.abs(v) > 0.05) { const L = 24 + Math.abs(v) * 10; arrow(ctx, bx + 30, Y(y), bx + 30, Y(y) + L, C('velocity'), 4); }
    const aL = 30 + gg * 5; arrow(ctx, 40, 300, 40, 300 + aL, C('acceleration'), 5); text(ctx, 'a = −g', 40, 270, C('acceleration'), { size: 20, weight: 600, align: 'center' });
    /* the three graphs, y, v and a against t */
    const tr = nice(0, tF.v, 4), gx = { l: 700, r: 1330 };
    const boxes = [{ t: 110, b: 250 }, { t: 320, b: 460 }, { t: 530, b: 670 }].map((b) => ({ ...gx, ...b }));
    const vr = nice(vel(tF.v), 0, 3), ar = nice(a, 0, 2);
    const G1 = axes(ctx, boxes[0], [0, tr.hi], [yr.lo, yr.hi], { yl: 'y (m)', yc: C('position'), nx: tr.n, ny: yr.n, fx: (x) => fmt(x, 1), fy: (x) => fmt(x, 1) });
    const G2 = axes(ctx, boxes[1], [0, tr.hi], [vr.lo, vr.hi], { yl: 'v (m/s)', yc: C('velocity'), nx: tr.n, ny: vr.n, fx: (x) => fmt(x, 1) });
    const G3 = axes(ctx, boxes[2], [0, tr.hi], [ar.lo, ar.hi], { xl: 't (s)', xc: C('time'), yl: 'a (m/s²)', yc: C('acceleration'), nx: tr.n, ny: ar.n, fx: (x) => fmt(x, 1) });
    curve(ctx, pos, 0, tF.v, G1.X, G1.Y, C('position'), 5);
    line(ctx, G2.X(0), G2.Y(0), G2.X(tF.v), G2.Y(vel(tF.v)), C('velocity'), 5);
    line(ctx, G3.X(0), G3.Y(a), G3.X(tF.v), G3.Y(a), C('acceleration'), 5);
    for (let k = 1; k <= n; k++) { const tk = 0.1 * k, on = tau >= tk - 1e-9; if (!on) continue; dot(ctx, G1.X(tk), G1.Y(pos(tk)), C('position'), false, 6); dot(ctx, G2.X(tk), G2.Y(vel(tk)), C('velocity'), false, 6); }
    [[G1, y], [G2, v], [G3, a]].forEach(([G, val], i) => { line(ctx, G.X(tau), boxes[i].b, G.X(tau), G.Y(val), C('time'), 2, [4, 8]); dot(ctx, G.X(tau), G.Y(val), PAL.ink, true, 9); });
    text(ctx, 'a = ' + stex(a, 4).replace('-', '−') + ' m/s²', G3.X(tF.v / 2), G3.Y(a) - 24, C('acceleration'), { size: 18, weight: 600, align: 'center' });
    headline(ctx, done ? 'the ball falls ' + fmt(-yF.v, 4) + ' m in ' + fmt(tF.v, 5) + ' s, which gives g = ' + fmt(gg, 4) + ' m/s² at this place'
      : 't = ' + fmt(tau, 2) + ' s · the ball has fallen ' + fmt(-y, 3) + ' m and is moving at ' + stex(v, 2).replace('-', '−') + ' m/s');
    readout(d.readout, `\\ka = \\frac{2(\\ky - \\kyo)}{\\kt^2} = \\frac{2(${stex(yF.v, 4)}\\ \\text{m} - 0)}{(${fmt(tF.v, 5)}\\ \\text{s})^2} = ${stex(a, 4)}\\ \\text{m/s}^2,\\qquad \\kg = ${fmt(gg, 4)}\\ \\text{m/s}^2`,
      'Position grows with the square of the time and velocity in proportion to it, while the acceleration is the same at every instant of the fall.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tF.v / 4), draw });
})();

/* =====================================================================
   SIM: the depth of a mine shaft. A rock falls to the water and the
   sound of the splash climbs back up; the clock reads the two legs, and
   beside the shaft the height of the rock and then of the sound against
   time. Finite round trip, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-well', 640);
  const D = ctl(d.controls, { label: 'd', cls: 'position', min: 5, max: 200, step: 1, value: 40, unit: 'm', dec: 0, onInput: reset, aria: 'depth of the shaft' });
  const vs = ctl(d.controls, { label: '\\kv_{\\text{s}}', cls: 'velocity', min: 300, max: 360, step: 1, value: 340, unit: 'm/s', dec: 0, onInput: reset, aria: 'speed of sound' });
  const G = 9.8;
  const tFall = () => Math.sqrt((2 * D.v) / G), tSound = () => D.v / vs.v, tTot = () => tFall() + tSound();
  const cy = cycle(tTot, 1.4);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), tf = tFall(), ts = tSound(), tt = tTot(), done = tau >= tt - 1e-9;
    const falling = tau < tf, yRock = falling ? -0.5 * G * tau * tau : -D.v, ySound = falling ? null : Math.min(0, -D.v + vs.v * (tau - tf));
    /* one height scale for the shaft and the graph */
    const yr = nice(-D.v, 0, 4), box = { l: 700, r: 1330, t: 150, b: 560 };
    const tr = nice(0, tt, 4);
    const { X: GX, Y } = axes(ctx, box, [0, tr.hi], [yr.lo, yr.hi], { xl: 't (s)', xc: C('time'), yl: 'height (m)', yc: C('position'), nx: tr.n, ny: yr.n, fx: (x) => fmt(x, 1) });
    /* the shaft: two walls, water at the bottom, the listener at the top */
    const sx = 330, wl = 250, wr = 410;
    fixed(ctx, wl - 40, Y(0), 40, Y(-D.v) - Y(0) + 40); fixed(ctx, wr, Y(0), 40, Y(-D.v) - Y(0) + 40);
    ctx.save(); ctx.fillStyle = alpha(C('position'), 0.15); ctx.fillRect(wl, Y(-D.v) - 10, wr - wl, 50); ctx.restore();
    line(ctx, wl, Y(-D.v), wr, Y(-D.v), C('position'), 3);
    line(ctx, 100, Y(0), wl - 40, Y(0), PAL.ink, 4); person(ctx, 145, Y(0), PAL.ink);
    vbracket(ctx, 500, Y(0), Y(-D.v), C('position'), 'd = ' + fmt(D.v, 0) + ' m', 1);
    /* the rock, and after the splash the sound on its way up */
    dot(ctx, sx, Y(yRock), PAL.ink, true, 10);
    if (falling && tau > 0.05) arrow(ctx, sx + 26, Y(yRock), sx + 26, Y(yRock) + 20 + G * tau * 3, C('velocity'), 4);
    if (ySound !== null && ySound < -0.01) {
      ctx.save(); ctx.strokeStyle = C('velocity'); ctx.lineWidth = 3;
      for (let k = 0; k < 3; k++) { const yy = Y(ySound) + k * 16; ctx.beginPath(); ctx.arc(sx, yy + 30, 34 - k * 8, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke(); }
      ctx.restore();
      text(ctx, 'sound at ' + fmt(vs.v, 0) + ' m/s', sx + 44, Y(ySound), C('velocity'), { size: 17, weight: 600 });
    }
    if (!falling) text(ctx, 'splash at t = ' + fmt(tf, 2) + ' s', sx, Y(-D.v) + 62, PAL.muted, { size: 17, align: 'center' });
    /* the clock */
    stopwatch(ctx, 120, 520, 52, tau / tt);
    text(ctx, 't = ' + fmt(tau, 2) + ' s', 120, 596, C('time'), { size: 22, weight: 600, align: 'center' });
    /* the graph: the fall, then the sound's climb */
    curve(ctx, (s) => -0.5 * G * s * s, 0, tf, GX, Y, C('position'), 5);
    line(ctx, GX(tf), Y(-D.v), GX(tt), Y(0), C('velocity'), 5);
    line(ctx, GX(tf), box.b, GX(tf), Y(-D.v), PAL.muted, 2, [4, 8]);
    hbracket(ctx, GX(0), GX(tf), box.t + 30, C('position'), 'the fall, ' + fmt(tf, 2) + ' s');
    if (GX(tt) - GX(tf) > 200) hbracket(ctx, GX(tf), GX(tt), box.t + 70, C('velocity'), 'the sound, ' + fmt(ts, 2) + ' s');
    else text(ctx, 'the sound, ' + fmt(ts, 2) + ' s', GX(tf) - 12, box.t + 70, C('velocity'), { size: 18, weight: 600, align: 'right' });
    dot(ctx, GX(tau), Y(falling ? yRock : ySound), PAL.ink, true, 9);
    headline(ctx, done ? 'the splash is heard ' + fmt(tt, 2) + ' s after the drop: ' + fmt(tf, 2) + ' s of fall and ' + fmt(ts, 2) + ' s for the sound to climb ' + fmt(D.v, 0) + ' m'
      : falling ? 't = ' + fmt(tau, 2) + ' s · the rock is still falling, ' + fmt(D.v + yRock, 1) + ' m above the water'
      : 't = ' + fmt(tau, 2) + ' s · the splash was at ' + fmt(tf, 2) + ' s and its sound is on the way up, ' + fmt(-ySound, 1) + ' m below the listener');
    const naive = 0.5 * G * tt * tt;
    readout(d.readout, `\\kt_{\\text{fall}} = \\sqrt{\\frac{2d}{\\kg}} = \\sqrt{\\frac{2(${fmt(D.v, 0)}\\ \\text{m})}{9.80\\ \\text{m/s}^2}} = ${fmt(tf, 2)}\\ \\text{s},\\qquad \\kt_{\\text{sound}} = \\frac{d}{\\kv_{\\text{s}}} = \\frac{${fmt(D.v, 0)}\\ \\text{m}}{${fmt(vs.v, 0)}\\ \\text{m/s}} = ${fmt(ts, 2)}\\ \\text{s}`,
      'Taking the whole ' + fmt(tt, 2) + ' s as the time of the fall would give a depth of ½gt² = ' + fmt(naive, 1) + ' m, which overstates the ' + fmt(D.v, 0) + ' m by ' + fmt(naive - D.v, 1) + ' m.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tTot() / 5), draw });
})();
};
