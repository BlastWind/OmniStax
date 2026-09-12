/* Figures for section 4.1 Development of Force Concept. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, spring, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const RAD = Math.PI / 180;

/* ---------- sprites, in ink ---------- */
/* an ice skater seen from above, centred on (x, y), the arms reaching toward the angle a measured as the canvas measures it */
function skater(ctx, x, y, a, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(x, y, 24, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2); ctx.fill();
  const c = Math.cos(a), s = Math.sin(a), px = -s, py = c;
  ctx.beginPath();
  ctx.moveTo(x + px * 18, y + py * 18); ctx.lineTo(x + c * 40 + px * 11, y + s * 40 + py * 11);
  ctx.moveTo(x - px * 18, y - py * 18); ctx.lineTo(x + c * 40 - px * 11, y + s * 40 - py * 11);
  ctx.stroke(); ctx.restore();
}
/* a hand gripping the end of a spring at (x, y), pulling to the right */
function grip(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(x, y - 26); ctx.lineTo(x + 30, y - 26); ctx.lineTo(x + 44, y - 12);
  ctx.lineTo(x + 44, y + 12); ctx.lineTo(x + 30, y + 26); ctx.lineTo(x, y + 26); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the hook of a spring scale, hanging off the rod that ends at (x, y) */
function hook(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.beginPath();
  ctx.arc(x + 26, y, 22, Math.PI * 1.45, Math.PI * 0.75); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 4.3: two ice skaters push on a third. The overhead view, the
   two pushes laid head to tail, and the free-body diagram of the third
   skater, all answering the two magnitudes and the angle between them.
   Nothing in the idea has a time in it, so the figure is a still one:
   no cycle, no transport, and a slider's input alone redraws it.
===================================================================== */
(function () {
  const d = sim('sim-skaters', 620);
  const F1 = ctl(d.controls, { label: '\\kFone', cls: 'force', min: 10, max: 80, step: 1, value: 50, unit: 'N', dec: 0, aria: 'the push of the first skater' });
  const F2 = ctl(d.controls, { label: '\\kFtwo', cls: 'force', min: 10, max: 80, step: 1, value: 40, unit: 'N', dec: 0, aria: 'the push of the second skater' });
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 30, max: 150, step: 1, value: 90, unit: '°', dec: 0, aria: 'the angle between the two pushes' });
  const U = 2.5;                                  /* logical units per newton */
  const sub1 = 'F₁', sub2 = 'F₂';
  /* a label set just beyond the head of an arrow that points along the angle a */
  const beyond = (ctx, s, x, y, a, color, size, off) =>
    text(ctx, s, x + (off || 32) * Math.cos(a), y - (off || 32) * Math.sin(a), color, { weight: 600, size: size || 24, align: 'center', bg: PAL.panel });
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, fx = F1.v + F2.v * Math.cos(th), fy = F2.v * Math.sin(th);
    const tot = Math.hypot(fx, fy), ang = Math.atan2(fy, fx);
    /* the two panels the book prints: (a) the scene with the two pushes added head to tail, (b) the free-body diagram */
    line(ctx, 720, 150, 720, 590, PAL.rule, 1.5);
    text(ctx, '(a) the two pushes, seen from above and laid head to tail', 360, 112, PAL.muted, { size: 17, align: 'center' });
    text(ctx, '(b) the free-body diagram of the third skater', 1060, 112, PAL.muted, { size: 17, align: 'center' });

    /* ---- the scene: the third skater, a pusher behind each arrow, and the head-to-tail construction ---- */
    const px = 250, py = 400, R = 152;
    skater(ctx, px - R, py, 0, PAL.ink);
    skater(ctx, px - R * Math.cos(th), py + R * Math.sin(th), -th, PAL.ink);
    skater(ctx, px, py, Math.PI / 2, PAL.ink);
    line(ctx, px, py + 26, px, py + 40, PAL.muted, 2);
    text(ctx, 'the third skater', px, py + 54, PAL.muted, { size: 17, align: 'center' });
    const h1x = px + F1.v * U, h1y = py;
    const tx = h1x + F2.v * U * Math.cos(th), ty = h1y - F2.v * U * Math.sin(th);
    line(ctx, h1x, h1y, tx, ty, alpha(C('force'), 0.45), 4, [10, 10]);
    line(ctx, px, py, tx, ty, alpha(C('force'), 0.3), 10);
    arrow(ctx, px, py, tx, ty, C('force'), 5);
    beyond(ctx, 'total force F', tx, ty, ang, C('force'), 22, 44);
    arrow(ctx, px, py, h1x, h1y, C('force'), 5);
    beyond(ctx, sub1, h1x, h1y, 0, C('force'));
    arrow(ctx, px, py, px + F2.v * U * Math.cos(th), py - F2.v * U * Math.sin(th), C('force'), 5);
    beyond(ctx, sub2, px + F2.v * U * Math.cos(th), py - F2.v * U * Math.sin(th), th, C('force'));
    const arcR = Math.min(64, 0.7 * Math.min(F1.v, F2.v) * U);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(px, py, arcR, -th, 0); ctx.stroke(); ctx.restore();
    text(ctx, 'θ = ' + fmt(TH.v, 0) + '°', px + arcR + 12, py + 30, PAL.ink, { size: 20, weight: 600 });

    /* ---- the free-body diagram: the body as a single point, the outside forces leaving it ---- */
    const bx = 940, by = 400;
    const ex1 = bx + F1.v * U, ey1 = by;
    const ex2 = bx + F2.v * U * Math.cos(th), ey2 = by - F2.v * U * Math.sin(th);
    const etx = bx + tot * U * Math.cos(ang), ety = by - tot * U * Math.sin(ang);
    line(ctx, ex1, ey1, etx, ety, PAL.rule, 2, [8, 8]);
    line(ctx, ex2, ey2, etx, ety, PAL.rule, 2, [8, 8]);
    line(ctx, bx, by, etx, ety, alpha(C('force'), 0.3), 10);
    arrow(ctx, bx, by, etx, ety, C('force'), 5);
    beyond(ctx, fmt(tot, 1) + ' N', etx, ety, ang, C('force'), 22, 40);
    arrow(ctx, bx, by, ex1, ey1, C('force'), 5);
    beyond(ctx, sub1, ex1, ey1, 0, C('force'));
    arrow(ctx, bx, by, ex2, ey2, C('force'), 5);
    beyond(ctx, sub2, ex2, ey2, th, C('force'));
    dot(ctx, bx, by, PAL.ink, true, 11);
    line(ctx, bx, by + 14, bx, by + 32, PAL.muted, 2);
    text(ctx, 'the body, as a single point', bx, by + 46, PAL.muted, { size: 17, align: 'center' });

    headline(ctx, 'a push of ' + fmt(F1.v, 0) + ' N and a push of ' + fmt(F2.v, 0) + ' N, ' + fmt(TH.v, 0)
      + '° apart, add to a total force of ' + fmt(tot, 1) + ' N at ' + fmt(ang / RAD, 1) + '° from the first push');
    readout(d.readout, `\\kFtot = \\sqrt{\\kFx^2 + \\kFy^2} = \\sqrt{(${fmt(fx, 1)}\\ \\text{N})^2 + (${fmt(fy, 1)}\\ \\text{N})^2} = ${fmt(tot, 1)}\\ \\text{N}`,
      'The two pushes are laid head to tail, so the total force runs from the tail of the first arrow to the head of the second. At the right angle the book draws, the components are the two pushes themselves and the total force is the square root of F₁² + F₂².');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.4: the stretched spring as a standard of force. The spring
   relaxed, the same spring pulled out by Δx with its restoring force
   drawn back toward the fixed end, and a spring scale whose face is
   marked off in units of that standard. A stretch answers a slider and
   nothing more, so this figure is still as well.
===================================================================== */
(function () {
  const d = sim('sim-spring', 660);
  const X = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.10, max: 0.40, step: 0.01, value: 0.20, unit: 'm', dec: 2, aria: 'the undistorted length of the spring' });
  const DX = ctl(d.controls, { label: '\\kdx', cls: 'position', min: 0, max: 0.10, step: 0.005, value: 0.06, unit: 'm', dec: 3, aria: 'the distance the spring is stretched' });
  const SC = 2000;                                /* logical units per meter */
  const STD = 0.01;                               /* the standard: the restoring force of a one centimeter stretch */
  const WALL = 120, X0 = 160;
  function draw() {
    const { ctx } = begin(d.c);
    const rest = X0 + X.v * SC, pulled = X0 + (X.v + DX.v) * SC, r = DX.v / STD;

    /* ---- (a) the spring at its undistorted length ---- */
    text(ctx, '(a) the spring at its relaxed length', WALL, 112, PAL.muted, { size: 17 });
    fixed(ctx, WALL - 40, 130, 40, 90);
    spring(ctx, X0, 175, rest, 175, 9, 20, PAL.ink, 4);
    line(ctx, rest, 149, rest, 201, PAL.ink, 5);
    hbracket(ctx, X0, rest, 240, C('position'), 'x = ' + fmt(X.v, 2) + ' m');

    /* ---- (b) the spring stretched, and the restoring force it exerts ---- */
    text(ctx, '(b) the same spring, pulled out a distance Δx', WALL, 290, PAL.muted, { size: 17 });
    fixed(ctx, WALL - 40, 318, 40, 90);
    spring(ctx, X0, 363, pulled, 363, 9, 20, PAL.ink, 4);
    line(ctx, pulled, 337, pulled, 389, PAL.ink, 5);
    grip(ctx, pulled, 363, PAL.ink);
    line(ctx, rest, 320, rest, 430, PAL.muted, 2, [8, 8]);
    if (DX.v > 0.0001) {
      const al = 40 + 1600 * DX.v;
      arrow(ctx, pulled, 326, pulled - al, 326, C('force'), 5);
      text(ctx, 'restoring force F', pulled - al - 14, 326, C('force'), { weight: 600, size: 20, align: 'right' });
      hbracket(ctx, rest, pulled, 430, C('position'), 'Δx = ' + fmt(DX.v * 100, 1) + ' cm');
    } else text(ctx, 'the spring is relaxed, so it pulls on nothing', pulled + 60, 430, PAL.muted, { size: 17 });

    /* ---- (c) the spring scale, its face marked off in standard units ---- */
    text(ctx, '(c) a spring scale, its face marked off in units of the standard force', WALL, 490, PAL.muted, { size: 17 });
    const fy = 570, FX = (u) => 250 + u * 88;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.fillRect(180, fy - 48, 1010, 96); ctx.strokeRect(180, fy - 48, 1010, 96); ctx.restore();
    line(ctx, FX(0), fy + 22, FX(10), fy + 22, PAL.muted, 2);
    for (let u = 0; u <= 10; u++) { line(ctx, FX(u), fy + 14, FX(u), fy + 22, PAL.muted, 2); text(ctx, String(u), FX(u), fy + 40, PAL.muted, { size: 17, align: 'center' }); }
    spring(ctx, 196, fy - 12, Math.max(FX(0), FX(r)) - 8, fy - 12, 9, 16, PAL.ink, 4);
    line(ctx, FX(r), fy - 40, FX(r), fy + 10, C('force'), 5);
    text(ctx, fmt(r, 1) + ' units', FX(r), fy - 58, C('force'), { weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, FX(r), fy - 12, 1240, fy - 12, PAL.ink, 5);
    hook(ctx, 1240, fy - 12, PAL.ink);
    text(ctx, 'the pull on the hook', 1266, fy + 72, PAL.muted, { size: 17, align: 'center' });

    headline(ctx, DX.v < 0.0001
      ? 'the spring sits at its relaxed length of ' + fmt(X.v * 100, 0) + ' cm, so it exerts no restoring force and the scale reads nothing'
      : 'the spring is stretched ' + fmt(DX.v * 100, 1) + ' cm past its relaxed length of ' + fmt(X.v * 100, 0) + ' cm, and the scale reads ' + fmt(r, 1) + ' units of the standard force');
    readout(d.readout, `\\kFres = \\frac{\\kdx}{\\Delta x_{\\text{std}}}\\,F_{\\text{std}} = \\frac{${fmt(DX.v * 100, 1)}\\ \\text{cm}}{1.0\\ \\text{cm}}\\,F_{\\text{std}} = ${fmt(r, 1)}\\,F_{\\text{std}}`,
      'The standard here is the restoring force of this spring stretched one centimeter, and the face of the scale in part (c) is marked off in those units, so a reading of six means the pull on the hook is six times the standard force.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
