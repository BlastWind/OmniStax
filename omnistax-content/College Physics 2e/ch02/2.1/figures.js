/* Figures for section 2.1 Displacement. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.1'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, hbracket, scale, person } = F;
const sim = (id, H) => F.sim(root, id, H);
function twoLine(host, a, b) { if (!host._a) { host._a = document.createElement('div'); host._b = document.createElement('small'); host.replaceChildren(host._a, host._b); } tex(host._a, a); tex(host._b, b); }
const sgn = (n, d) => (n > 0 ? '+' : n < 0 ? '−' : '') + fmt(Math.abs(n), d);

/* a bicycle sprite, ink coloured, about 90 units long */
function bike(ctx, x, y, color, dir, phase) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 4; ctx.lineCap = 'round';
  const r = 15, w = 46 * dir;
  [x - w / 2, x + w / 2].forEach((cx) => { ctx.beginPath(); ctx.arc(cx, y, r, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(cx + r * Math.cos(phase), y + r * Math.sin(phase)); ctx.stroke(); });
  ctx.beginPath(); ctx.moveTo(x - w / 2, y); ctx.lineTo(x - w * 0.1, y - 26); ctx.lineTo(x + w * 0.35, y - 26); ctx.lineTo(x + w / 2, y); ctx.moveTo(x - w * 0.1, y - 26); ctx.lineTo(x + w * 0.05, y); ctx.lineTo(x + w * 0.35, y - 26); ctx.stroke();
  // rider
  ctx.beginPath(); ctx.moveTo(x + w * 0.05, y - 4); ctx.lineTo(x - w * 0.05, y - 40); ctx.lineTo(x + w * 0.4, y - 36); ctx.stroke();
  ctx.beginPath(); ctx.arc(x - w * 0.02, y - 54, 9, 0, Math.PI * 2); ctx.fill(); ctx.restore();
}

/* =====================================================================
   SIM 1: displacement on a line, in either of the two reference frames
   the section names. The professor against her whiteboard, 1.5 → 3.5 m,
   and the passenger against the cabin of his airplane, 6.0 → 2.0 m, are
   the two book states; the choice picks the frame and sets the book's
   numbers, and the sliders then move them anywhere on the same axis.
   Still: displacement is a difference between two positions and has no
   time in it, so nothing moves and the figure carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-displacement', 460);
  const WHO = {
    professor: { x0: 1.5, xf: 3.5, frame: 'whiteboard (reference frame)', who: 'the professor', pron: 'she' },
    passenger: { x0: 6, xf: 2, frame: 'airplane cabin (reference frame)', who: 'the passenger', pron: 'he' },
  };
  const W = F.choice(d.controls, { label: '\\text{who moves}', options: [{ value: 'professor', label: 'professor' }, { value: 'passenger', label: 'passenger' }], value: 'professor', aria: 'who moves', onInput: preset });
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 8, step: 0.5, value: 1.5, unit: 'm', dec: 1 });
  const xf = ctl(d.controls, { label: '\\kxf', cls: 'position', min: 0, max: 8, step: 0.5, value: 3.5, unit: 'm', dec: 1, aria: 'final position' });
  function preset(v) { const w = WHO[v]; x0.set(w.x0); xf.set(w.xf); }
  /* the axis is a fixed 0 to 8 m, the range of the two position sliders, and never follows their values */
  function draw() {
    const { ctx } = begin(d.c);
    const w = WHO[W.value] ?? WHO.professor, dx = xf.v - x0.v, face = dx < 0 ? -1 : 1;
    const L = 110, R = 1290, y = 336; const X = (m) => L + (R - L) * m / 8;
    /* the reference frame the section names, drawn as a room: the professor's wall with its whiteboard,
       or the cabin of the airplane with its row of windows; the person stands on its floor */
    const top = 92, floor = 252;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(L - 30, top, R - L + 60, floor - top); ctx.restore();
    if (W.value === 'passenger') {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2;
      for (let sx = L + 10; sx < R; sx += 96) { ctx.beginPath(); ctx.roundRect(sx, top + 18, 44, 40, 10); ctx.fill(); ctx.stroke(); }
      ctx.restore();
      /* overhead bins run above the windows */
      line(ctx, L - 30, top + 8, R + 30, top + 8, PAL.rule, 3);
    } else {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.fillRect(L + 60, top + 16, 520, 96); ctx.strokeRect(L + 60, top + 16, 520, 96); ctx.restore();
      [40, 62, 84].forEach((dy, i) => line(ctx, L + 84, top + dy, L + 84 + [300, 220, 360][i], top + dy, PAL.rule, 2));
    }
    line(ctx, L - 30, floor, R + 30, floor, PAL.muted, 3);
    text(ctx, w.frame, R + 30, top - 14, PAL.muted, { size: 17, align: 'right' });
    /* the person where the motion ended, and a faint trace of them where it began */
    ctx.save(); ctx.globalAlpha = 0.3; person(ctx, X(x0.v), floor, PAL.ink, { face }); ctx.restore();
    person(ctx, X(xf.v), floor, PAL.ink, { face });
    /* the displacement, an arrow at chest height from where the person was to where they are */
    const ay = floor - 62;
    if (Math.abs(dx) >= 0.25) { arrow(ctx, X(x0.v), ay, X(xf.v), ay, C('position'), 5); text(ctx, 'Δx = ' + sgn(dx, 1) + ' m', (X(x0.v) + X(xf.v)) / 2, ay - 28, C('position'), { align: 'center', weight: 600, bg: alpha(PAL.panel, 0.85) }); }
    else text(ctx, 'Δx = 0', X(x0.v) + 40, ay - 28, C('position'), { align: 'center', weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the axis under the floor, the two positions dropped onto it */
    line(ctx, L - 30, y, R + 30, y, PAL.muted, 3); scale(ctx, X, 0, 8, 1, y, 'm', 1);
    line(ctx, X(x0.v), floor, X(x0.v), y, C('position'), 2, [4, 8]); line(ctx, X(xf.v), floor, X(xf.v), y, C('position'), 2, [4, 8]);
    dot(ctx, X(x0.v), y, C('position'), false, 11); dot(ctx, X(xf.v), y, C('position'), true, 11);
    const apart = Math.abs(X(xf.v) - X(x0.v)) > 60;
    text(ctx, 'x_0', X(x0.v) + (apart ? 0 : -22), y + 66, C('position'), { align: 'center', weight: 600, size: 24 });
    text(ctx, 'x_f', X(xf.v) + (apart ? 0 : 22), y + 66, C('position'), { align: 'center', weight: 600, size: 24 });
    const dir = dx > 0 ? 'to the right' : 'to the left';
    topline(ctx, Math.abs(dx) < 0.25
      ? 'The displacement is zero, since ' + w.who + ' ends where ' + w.pron + ' started, whatever path ' + w.pron + ' took.'
      : 'The displacement of ' + w.who + ' is ' + fmt(xf.v, 1) + ' m − ' + fmt(x0.v, 1) + ' m = ' + sgn(dx, 1) + ' m, which is ' + fmt(Math.abs(dx), 1) + ' m ' + dir + '.');
    tex(d.readout, `\\kdx = \\kxf - \\kxo = ${fmt(xf.v, 1)}\\ \\text{m} - ${fmt(x0.v, 1)}\\ \\text{m} = ${dx >= 0 ? '+' : ''}${fmt(dx, 1)}\\ \\text{m}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM 2: distance traveled vs displacement. The cyclist from Check Your
   Understanding: 0 → −3 → −1 km.
===================================================================== */
(function () {
  const d = sim('sim-path', 540);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: -5, max: 5, step: 0.5, value: 0, unit: 'km', dec: 1, onInput: reset });
  const xt = ctl(d.controls, { label: 'x_{\\text{turn}}', cls: 'position', min: -5, max: 5, step: 0.5, value: -3, unit: 'km', dec: 1, onInput: reset, aria: 'turning point' });
  const xf = ctl(d.controls, { label: '\\kxf', cls: 'position', min: -5, max: 5, step: 0.5, value: -1, unit: 'km', dec: 1, onInput: reset, aria: 'final position' });
  const leg1 = () => Math.abs(xt.v - x0.v), leg2 = () => Math.abs(xf.v - xt.v), total = () => leg1() + leg2();
  const T = () => Math.max(1.5, total() * 0.8);
  const cy = cycle(T, 1.6);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const dx = xf.v - x0.v, s = total() * cy.now() / T();   // s = path length covered so far
    const L = 110, R = 1090, y = 350; const X = (m) => L + (R - L) * (m + 5) / 10;
    line(ctx, L - 30, y, R + 30, y, PAL.muted, 3); scale(ctx, X, -5, 5, 1, y, 'km', 1);
    text(ctx, 'west', L - 30, y - 30, PAL.muted, { size: 17 }); text(ctx, 'east (+)', R + 30, y - 30, PAL.muted, { size: 17, align: 'right' });
    // the path: leg 1 on one row, leg 2 on the row above, like the book's paths figure
    const y1 = y - 90, y2 = y - 150;
    const s1 = Math.min(s, leg1()), s2 = Math.max(0, s - leg1());
    const p1 = x0.v + Math.sign(xt.v - x0.v) * s1, p2 = xt.v + Math.sign(xf.v - xt.v) * s2;
    if (leg1() > 0) { line(ctx, X(x0.v), y1, X(xt.v), y1, PAL.rule, 4); if (s1 > 0.05) arrow(ctx, X(x0.v), y1, X(p1), y1, PAL.ink, 5); }
    if (leg2() > 0) { line(ctx, X(xt.v), y2, X(xf.v), y2, PAL.rule, 4); line(ctx, X(xt.v), y1, X(xt.v), y2, PAL.rule, 4); if (s2 > 0.05) arrow(ctx, X(xt.v), y2, X(p2), y2, PAL.ink, 5); }
    const onLeg2 = s > leg1() + 1e-6, px = onLeg2 ? p2 : p1, py = onLeg2 ? y2 : y1, dir = onLeg2 ? Math.sign(xf.v - xt.v) || 1 : Math.sign(xt.v - x0.v) || 1;
    bike(ctx, X(px), py - 22, PAL.ink, dir, s * 4);
    // displacement bracket below the axis, start and end markers on it
    dot(ctx, X(x0.v), y, C('position'), false, 11); dot(ctx, X(xf.v), y, C('position'), true, 11);
    const apart = Math.abs(X(xf.v) - X(x0.v)) > 60;
    text(ctx, 'x_0', X(x0.v) + (apart ? 0 : -22), y + 66, C('position'), { align: 'center', weight: 600, size: 24 }); text(ctx, 'x_f', X(xf.v) + (apart ? 0 : 22), y + 66, C('position'), { align: 'center', weight: 600, size: 24 });
    if (Math.abs(dx) >= 0.25) hbracket(ctx, X(x0.v), X(xf.v), y + 150, C('position'), 'displacement Δx = ' + sgn(dx, 1) + ' km');
    else text(ctx, 'displacement Δx = 0', X(x0.v), y + 130, C('position'), { align: 'center', weight: 600 });
    // odometer
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.fillRect(1130, 150, 200, 96); ctx.strokeRect(1130, 150, 200, 96); ctx.restore();
    text(ctx, 'distance traveled', 1230, 176, PAL.muted, { size: 17, align: 'center' });
    text(ctx, fmt(s, 1) + ' km', 1230, 214, PAL.ink, { size: 30, weight: 600, align: 'center' });
    /* A leg of zero length makes the ride a straight run, so the path length and the magnitude of
       the displacement are the same number and the headline says why. */
    const straight = leg1() < 1e-6 || leg2() < 1e-6;
    topline(ctx, straight
      ? 'The cyclist rides straight through without turning back, so the ' + fmt(total(), 1) + ' km traveled is also the magnitude of the ' + sgn(dx, 1) + ' km displacement.'
      : 'The cyclist travels ' + fmt(total(), 1) + ' km along the path, but the displacement is only ' + sgn(dx, 1) + ' km, whose magnitude is ' + fmt(Math.abs(dx), 1) + ' km.');
    twoLine(d.readout, `\\kdx = \\kxf - \\kxo = ${sgn(dx, 1).replace('−', '-')}\\ \\text{km}`, `\\text{distance traveled} = |${fmt(xt.v, 1)} - ${fmt(x0.v, 1)}| + |${fmt(xf.v, 1)} - (${fmt(xt.v, 1)})| = ${fmt(total(), 1)}\\ \\text{km}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 3: the book's four paths for the problems. A figure that serves
   exercises is a faithful copy (rule 14): no sliders, no motion and no
   transport, and all four paths stand drawn at once so a problem about
   path C can be read without waiting for a cycle to come round to it.
===================================================================== */
(function () {
  const d = sim('fig-paths', 540);
  const PATHS = [{ n: 'A', p: [0, 7] }, { n: 'B', p: [12, 7] }, { n: 'C', p: [2, 10, 8, 11] }, { n: 'D', p: [9, 3, 5] }];
  const rows = [110, 170, 250, 350];                       // top row of each path
  function draw() {
    const { ctx } = begin(d.c);
    const L = 150, R = 1250, y = 460; const X = (m) => L + (R - L) * m / 12;   // the axis is the problems' own 0 to 12 m
    line(ctx, L - 30, y, R + 30, y, PAL.ink, 3); scale(ctx, X, 0, 12, 2, y, '', 1);
    text(ctx, 'position x (m)', (L + R) / 2, y + 66, C('position'), { align: 'center', weight: 600, size: 24 });
    PATHS.forEach((P, i) => {
      const row = rows[i], last = P.p.length - 1;
      text(ctx, P.n, X(P.p[0]) + (P.p[1] > P.p[0] ? -34 : 34), row - 30, PAL.ink, { align: 'center', weight: 600, size: 24 });
      dot(ctx, X(P.p[0]), row, C('position'), false, 9);
      for (let j = 1; j < P.p.length; j++) {
        const from = P.p[j - 1], to = P.p[j]; const ry = row + (j - 1) * 22;
        if (j > 1) line(ctx, X(from), ry - 22, X(from), ry, C('position'), 4);
        arrow(ctx, X(from), ry, X(to), ry, C('position'), 5);
      }
      const ey = row + (last - 1) * 22;
      dot(ctx, X(P.p[last]), ey, C('position'), true, 9);
      line(ctx, X(P.p[last]), ey, X(P.p[last]), y, C('position'), 2, [4, 8]);
    });
    headline(ctx, 'Four paths run along one axis, each starting at a hollow marker and ending at a filled one.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
