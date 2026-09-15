/* Figures for section 16.6 Uniform Circular Motion and SHM. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, spring, block, fixed, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI, DEG = 180 / Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const sgn = (v) => (v < 0 ? '−' : '+');
/* a curved arrow round the top of a circle, counterclockwise, for ω */
function curl(ctx, cx, cy, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI * 0.35, -Math.PI * 0.65, true); ctx.stroke(); ctx.restore();
  const a = -Math.PI * 0.65, tx = cx + r * Math.cos(a), ty = cy + r * Math.sin(a);
  arrow(ctx, tx + 14 * Math.sin(a), ty - 14 * Math.cos(a), tx - 2 * Math.sin(a), ty + 2 * Math.cos(a), color, 3);
}

/* =====================================================================
   SIM 1: the turntable. A ball on a circle, its shadow on a line below
   drawn as a block on a spring, and the trace on paper moving downward.
   Endless.
===================================================================== */
(function () {
  const d = sim('sim-turntable', 900);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 5, max: 20, step: 1, value: 10, unit: 'cm', dec: 0, onInput: reset, aria: 'radius' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 0.5, max: 4, step: 0.1, value: 2, unit: 's', dec: 2, onInput: reset, aria: 'period' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const w = () => TAU / T.v;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? T.v / 5 : cy.now(), th = w() * tau, x = X.v * Math.cos(th);
    /* 8 units to the centimetre, so the widest turntable the slider reaches stays clear of the lights above it */
    const U = 8, cx = 700, cyc = 300, R = U * X.v, yL = 520;
    /* the lights and the turntable */
    fixed(ctx, cx - 420, 84, 840, 22);
    for (let i = -3; i <= 3; i++) line(ctx, cx + i * 120, 106, cx + i * 120, 122, PAL.muted, 3);
    text(ctx, 'light from above', cx + 416, 142, PAL.muted, { size: 18, align: 'right' });
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyc, R, 0, TAU); ctx.stroke(); ctx.restore();
    dot(ctx, cx, cyc, PAL.muted, true, 5);
    curl(ctx, cx, cyc, R + 26, C('angular-rate')); text(ctx, 'ω', cx, cyc - R - 50, C('angular-rate'), { weight: 600, align: 'center' });
    const bx = cx + R * Math.cos(th), byy = cyc - R * Math.sin(th);
    line(ctx, cx, cyc, bx, byy, PAL.muted, 2);
    line(ctx, bx, 122, bx, byy - 12, alpha(PAL.ink, 0.35), 2); line(ctx, bx, byy + 12, bx, yL - 24, PAL.muted, 2, [6, 6]);
    dot(ctx, bx, byy, PAL.ink, true, 12);
    /* the shadow line, the block on its spring */
    strip(ctx, cx - 420, cx + 420, yL + 12, 24);
    fixed(ctx, cx - 484, yL - 96, 44, 96);
    spring(ctx, cx - 440, yL - 22, bx - 30, yL - 22, 12, 16, PAL.ink, 3);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.beginPath(); ctx.ellipse(bx, yL + 4, 40, 8, 0, 0, TAU); ctx.fill(); ctx.restore();
    block(ctx, bx, yL - 22, 60, 44, PAL.ink);
    /* the marks under the line; at the smallest radius the outer two labels step down a row and lean outward, so none sits on another */
    const close = 2 * R < 150;
    for (const [val, lab, i] of [[-X.v, '−X', -1], [0, 'x = 0', 0], [X.v, '+X', 1]]) {
      const px = cx + U * val, out = close && i !== 0; line(ctx, px, yL + 24, px, yL + 38, C('position'), 3);
      text(ctx, lab, px + (out ? i * 8 : 0), yL + 58 + (out ? 22 : 0), C('position'), { size: 18, weight: 600, align: out ? (i < 0 ? 'right' : 'left') : 'center' });
    }
    line(ctx, cx, cyc, cx, yL + 24, PAL.muted, 1.5, [4, 8]);
    /* the paper: moving downward, the pen at its top edge under the shadow */
    /* The paper runs down at a fixed 68 units to the second, never in units of the period, so it
       always carries a little under four seconds of trace and a longer period plainly stretches
       the wave out instead of leaving it unchanged under relabelled marks. */
    const pt = 610, pb = 880, PS = 68, span = (pb - pt) / PS;   /* seconds of trace showing */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(cx - 420, pt, 840, pb - pt); ctx.restore();
    line(ctx, cx, pt, cx, pb, PAL.muted, 1.5, [4, 8]);
    for (let n = 1; n <= Math.floor(span); n++) { const yy = pt + n * PS; line(ctx, cx - 420, yy, cx - 406, yy, C('time'), 3); text(ctx, n + ' s ago', cx - 400, yy, C('time'), { size: 18, weight: 600 }); }
    text(ctx, 'paper moves down', cx + 410, pt + 20, PAL.muted, { size: 17, align: 'right' }); arrow(ctx, cx + 400, pt + 40, cx + 400, pt + 90, PAL.muted, 3);
    ctx.save(); ctx.beginPath(); ctx.rect(cx - 420, pt, 840, pb - pt); ctx.clip(); ctx.strokeStyle = C('position'); ctx.lineWidth = 4; ctx.beginPath();
    const t0 = Math.max(0, tau - span), n = Math.max(40, Math.ceil(60 * (tau - t0) / T.v));
    for (let i = 0; i <= n; i++) { const s = t0 + ((tau - t0) * i) / n, px = cx + R * Math.cos(w() * s), py = pt + (tau - s) * PS; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    if (tau > 0) ctx.stroke(); ctx.restore();
    dot(ctx, bx, pt, C('position'), true, 8);
    const deg = ((th * DEG) % 360 + 360) % 360;
    headline(ctx, 'At θ = ωt = ' + fmt(deg, 0) + '° the shadow stands at x = X cos θ = ' + sgn(x) + fmt(Math.abs(x), 1) + ' cm');
    readout(d.readout, `\\kx = \\kX\\cos\\kw\\kt = (${fmt(X.v, 0)}\\ \\text{cm})\\cos(${fmt(deg, 0)}°) = ${sgn(x)}${fmt(Math.abs(x), 1)}\\ \\text{cm}`,
      'ω = 2π/T = ' + fmt(w(), 2) + ' rad/s. The ball goes round once every T = ' + fmt(T.v, 2) + ' s, and the shadow goes back and forth once in the same time.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 2: the two similar triangles. P on the circle, the displacement
   triangle at the center and the velocity triangle at P. Endless.
===================================================================== */
(function () {
  const d = sim('sim-circle-triangles', 700);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 5, max: 20, step: 1, value: 10, unit: 'cm', dec: 0, onInput: reset, aria: 'radius' });
  const om = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0.5, max: 6, step: 0.1, value: 3.1, unit: 'rad/s', dec: 1, onInput: reset, aria: 'angular velocity' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? 1.1 / om.v : cy.now(), th = om.v * tau, x = X.v * Math.cos(th);
    const vmax = (X.v / 100) * om.v, v = -vmax * Math.sin(th), T = TAU / om.v;
    /* 14 units to the centimeter, fixed from the widest radius the slider reaches, so the circle
       grows with the radius all the way instead of stopping at a cap partway along the slider */
    const cx = 700, cyc = 370, R = 14 * X.v;
    /* seven names ride the two triangles as P goes round, so they are placed against one another
       by the labeller and step out with a leader where a slot is taken (rule 26.7) */
    const lab = labeller(ctx, 700); lab.block(0, 0, 1400, 96);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyc, R, 0, TAU); ctx.stroke(); ctx.restore();
    line(ctx, cx - R - 60, cyc, cx + R + 60, cyc, PAL.muted, 2); text(ctx, 'x', cx + R + 70, cyc, C('position'), { weight: 600 });
    curl(ctx, cx, cyc, R + 28, C('angular-rate')); text(ctx, 'ω', cx, cyc - R - 52, C('angular-rate'), { weight: 600, align: 'center' });
    const px = cx + R * Math.cos(th), py = cyc - R * Math.sin(th), qx = px;
    /* the displacement triangle */
    ctx.save(); ctx.fillStyle = alpha(C('position'), 0.14); ctx.beginPath(); ctx.moveTo(cx, cyc); ctx.lineTo(qx, cyc); ctx.lineTo(px, py); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, cx, cyc, px, py, C('position'), 3); line(ctx, qx, cyc, px, py, PAL.muted, 2, [6, 6]); line(ctx, cx, cyc, qx, cyc, C('position'), 6);
    dot(ctx, qx, cyc, C('position'), true, 8); dot(ctx, px, py, PAL.ink, true, 10);
    lab.add('P', px, py, Math.cos(th), -Math.sin(th), PAL.ink, 22, 18);
    const mx = (cx + px) / 2, my = (cyc + py) / 2, nS = Math.sin(th) >= 0 ? 1 : -1;
    /* the radius is named on the side away from the base, the height on the side away from the velocity triangle */
    lab.add('X', mx, my, -nS * Math.sin(th), -nS * Math.cos(th), C('position'), 22, 16);
    if (Math.abs(x) > 0.1 * X.v) lab.add('x = ' + sgn(x) + fmt(Math.abs(x), 1) + ' cm', (cx + qx) / 2, cyc, 0, nS, C('position'), 20, 16);
    if (Math.abs(Math.sin(th)) > 0.15) lab.add('√(X² − x²)', qx, my, nS, 0, PAL.muted, 18, 14);
    if (Math.abs(Math.sin(th)) > 0.08 && Math.abs(Math.cos(th)) > 0.08) { ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cyc, 34, 0, -th, th > 0); ctx.stroke(); ctx.restore(); lab.add('θ', cx + 34 * Math.cos(th / 2), cyc - 34 * Math.sin(th / 2), Math.cos(th / 2), -Math.sin(th / 2), PAL.muted, 20, 14); }
    /* the velocity triangle at P: v_max along the tangent, v its projection along x */
    /* the velocity arrow is drawn on one fixed scale set by the fastest the two sliders allow,
       (0.20 m)(6.0 rad/s) = 1.2 m/s, so its length answers the sliders instead of being capped */
    const L = 40 + 160 * vmax / 1.2, tx = -Math.sin(th), ty = -Math.cos(th);
    const ex = px + L * tx, ey = py + L * ty;
    ctx.save(); ctx.fillStyle = alpha(C('velocity'), 0.14); ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(ex, ey); ctx.lineTo(ex, py); ctx.closePath(); ctx.fill(); ctx.restore();
    arrow(ctx, px, py, ex, ey, C('velocity'), 4); lab.add('v_max', ex, ey, tx, ty, C('velocity'), 20, 16);
    if (Math.abs(v) > 0.03 * vmax) { arrow(ctx, px, py, ex, py, C('velocity'), 5); lab.add('v', (px + ex) / 2, py, 0, ey < py ? 1 : -1, C('velocity'), 20, 14); }
    line(ctx, ex, py, ex, ey, PAL.muted, 2, [6, 6]);
    lab.flush();
    headline(ctx, 'At θ = ' + fmt(((th * DEG) % 360 + 360) % 360, 0) + '° the projection stands at x = X cos θ = ' + sgn(x) + fmt(Math.abs(x), 1) + ' cm and moves at ' + fmt(Math.abs(v), 2) + ' m/s, because the two triangles are similar');
    readout(d.readout, `\\kv = \\kvmax\\sqrt{1 - \\frac{\\kx^2}{\\kX^2}} = (${fmt(vmax, 3)}\\ \\text{m/s})\\sqrt{1 - \\frac{(${fmt(Math.abs(x), 1)})^2}{(${fmt(X.v, 0)})^2}} = ${fmt(Math.abs(v), 2)}\\ \\text{m/s}`,
      'v_max = Xω = (' + fmt(X.v / 100, 2) + ' m)(' + fmt(om.v, 1) + ' rad/s) = ' + fmt(vmax, 3) + ' m/s, and the period is T = 2πX/v_max = 2π/ω = ' + fmt(T, 2) + ' s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
