/* Figures for section 16.2 Period and Frequency. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, dot, text, headline, hbracket, vbracket, axes, curve, scale, spring, block, fixed, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* =====================================================================
   SIM 1: the period. A plucked guitar string vibrates without dying
   away; the midpoint's position is traced against time, one period is
   bracketed between successive crests, and a counting window shows how
   many cycles fit in it. A steady oscillation, so it runs endlessly.
===================================================================== */
(function () {
  const d = sim('sim-period', 700);
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 0.25, max: 4, step: 0.05, value: 0.5, unit: 's', dec: 2, onInput: reset, aria: 'period' });
  const W = ctl(d.controls, { label: '\\text{window}', cls: 'time', min: 1, max: 5, step: 0.5, value: 2, unit: 's', dec: 1, onInput: reset, aria: 'counting window' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const A = 2.0;   /* mm, the swing of the string's midpoint */
  const xAt = (t) => A * Math.cos(2 * Math.PI * t / T.v);
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed and never rescaled: the trace always shows the last 8 s, which holds the widest
       counting window the slider reaches, 5 s, with three seconds of run before it. The wave
       itself lengthens as the period grows, instead of the tick labels changing under it. */
    const S = 8, NX = 8;
    const tau = REDUCED ? S : cy.now(), x = xAt(tau), f = 1 / T.v;
    /* the scene: a guitar lying on its side, its string plucked and vibrating in its fundamental
       between the nut and the bridge; the swing is drawn far larger than a real string's */
    const GS = 0.9, gx0 = 150, ys = 196, AMP = 44;
    F.guitar(ctx, gx0, ys, GS);
    const { nut: L, bridge: R } = F.guitar.string(gx0, GS), cx = (L + R) / 2;
    line(ctx, L, ys, R, ys, alpha(PAL.ink, 0.35), 2, [10, 10]);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([6, 8]);
    for (const s of [1, -1]) { ctx.beginPath(); for (let i = 0; i <= 40; i++) { const g = i / 40, px = L + (R - L) * g, py = ys - s * AMP * Math.sin(Math.PI * g); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); } ctx.stroke(); }
    ctx.restore();
    const u = x / A;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    for (let i = 0; i <= 60; i++) { const g = i / 60, px = L + (R - L) * g, py = ys - u * AMP * Math.sin(Math.PI * g); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    dot(ctx, cx, ys - u * AMP, C('position'), true, 9);
    if (Math.abs(x) > 0.15) { vbracket(ctx, cx + 40, ys, ys - u * AMP, C('position')); label(ctx, 'x = ' + (x > 0 ? '+' : '−') + fmt(Math.abs(x), 1) + ' mm', cx + 40, ys - u * AMP / 2, { side: 'right', color: C('position'), size: 20, gap: 14 }); }
    /* the graph: the midpoint's position against time, the pen fixed at the right and the trace moving left */
    const box = { l: 140, r: 1260, t: 372, b: 620 };
    /* the position axis runs to ±4 mm on a 2 mm swing, which leaves the period bracket and its name room above the crests, under the window's sentence */
    const { X, Y } = axes(ctx, box, [-S, 0], [-4, 4], { xl: 'time before now (s)', xc: C('time'), yl: 'x (mm)', yc: C('position'), nx: NX, ny: 2, fx: (v) => (Math.abs(v) < 1e-9 ? 'now' : fmt(-v, 0)), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(X(-W.v), box.t, X(0) - X(-W.v), box.b - box.t); ctx.restore();
    line(ctx, X(-W.v), box.t, X(-W.v), box.b, C('time'), 2, [8, 8]);
    const t0 = Math.max(0, tau - S);
    if (tau > 0) curve(ctx, (s) => xAt(tau + s), t0 - tau, 0, X, Y, C('position'), 4, Math.min(3000, Math.ceil(40 * (tau - t0) / T.v) + 20));
    for (let n = Math.ceil(t0 / T.v - 1e-9); n * T.v <= tau + 1e-9; n++) dot(ctx, X(n * T.v - tau), Y(A), C('time'), true, 6);
    const n1 = Math.floor(tau / T.v + 1e-9);
    if (n1 >= 1 && (n1 - 1) * T.v >= t0 - 1e-9) hbracket(ctx, X((n1 - 1) * T.v - tau), X(n1 * T.v - tau), Y(A) - 26, C('time'), 'T = ' + fmt(T.v, 2) + ' s');
    /* the window's sentence sits over the shaded window, above the graph, and never on the trace */
    text(ctx, 'The last ' + fmt(W.v, 1) + ' s hold ' + fmt(W.v / T.v, 2) + ' cycles', Math.min(X(-W.v / 2), box.r - 150), box.t - 16, C('time'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    dot(ctx, X(0), Y(x), PAL.ink, true, 9);
    headline(ctx, 'Each cycle takes ' + fmt(T.v, 2) + ' s, so ' + fmt(f, 2) + ' cycles fit in every second');
    readout(d.readout, `\\kf = \\frac{1}{\\kT} = \\frac{1}{${fmt(T.v, 2)}\\ \\text{s}} = ${fmt(f, 2)}\\ \\text{Hz}`,
      'A window of ' + fmt(W.v, 1) + ' s holds ' + fmt(W.v / T.v, 2) + ' cycles, and ' + fmt(W.v / T.v, 2) + ' cycles in ' + fmt(W.v, 1) + ' s is again ' + fmt(f, 2) + ' cycles per second. The frequency does not depend on how long you count for.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 2: the count. A mass on a spring bobs while a stopwatch runs and
   a counter ticks off completed cycles; each completed cycle leaves a
   mark on a time line. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-count', 580);
  const N = ctl(d.controls, { label: 'N', cls: '', min: 5, max: 50, step: 1, value: 10, unit: 'cycles', dec: 0, onInput: reset, aria: 'number of cycles' });
  const tt = ctl(d.controls, { label: '\\kt', cls: 'time', min: 2, max: 30, step: 0.5, value: 6, unit: 's', dec: 1, onInput: reset, aria: 'elapsed time' });
  const T = () => tt.v / N.v;
  const cy = cycle(() => tt.v, 1.6);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= tt.v - 1e-9;
    const n = Math.min(N.v, Math.floor(tau / T() + 1e-6)), phase = 2 * Math.PI * tau / T();
    /* the scene: a mass on a spring under a beam */
    const cx = 300, y0 = 330, AMP = 70, y = y0 + AMP * Math.sin(phase);
    fixed(ctx, cx - 120, 90, 240, 40);
    spring(ctx, cx, 130, cx, y - 32, 9, 26, PAL.ink, 4);
    block(ctx, cx, y, 96, 64, PAL.ink);
    line(ctx, cx - 140, y0, cx + 140, y0, PAL.muted, 2, [10, 10]);
    text(ctx, 'start of each cycle', cx + 150, y0, PAL.muted, { size: 17 });
    /* the stopwatch: one turn of the hand for the whole run */
    const sx = 790, sy = 250, r = 96;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillRect(sx - 12, sy - r - 20, 24, 14); ctx.strokeRect(sx - 12, sy - r - 20, 24, 14);
    for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; line(ctx, sx + (r - 12) * Math.sin(a), sy - (r - 12) * Math.cos(a), sx + (r - 4) * Math.sin(a), sy - (r - 4) * Math.cos(a), PAL.muted, i % 3 ? 2 : 4); }
    ctx.restore();
    const ha = (tau / tt.v) * Math.PI * 2;
    line(ctx, sx, sy, sx + (r - 22) * Math.sin(ha), sy - (r - 22) * Math.cos(ha), C('time'), 5); dot(ctx, sx, sy, C('time'), true, 7);
    text(ctx, 't = ' + fmt(tau, 1) + ' s', sx, sy + r + 34, C('time'), { weight: 600, size: 26, align: 'center' });
    /* the counter */
    const kx = 1150;
    text(ctx, String(n), kx, sy - 6, PAL.ink, { weight: 700, size: 88, align: 'center' });
    text(ctx, n === 1 ? 'cycle completed' : 'cycles completed', kx, sy + 64, PAL.muted, { size: 20, align: 'center' });
    /* the time line: a mark for every completed cycle */
    /* The time line is fixed at 0 to 30 s, the longest run the elapsed-time slider reaches, and
       never rescaled, so a shorter run plainly reaches less far along it and its marks sit closer. */
    const TL = 30, tl = 140, tr = 1260, ty = 500, Xt = (t) => tl + ((tr - tl) * t) / TL;
    line(ctx, tl, ty, tr, ty, PAL.rule, 3);
    line(ctx, tl, ty, Xt(tt.v), ty, PAL.muted, 3);
    scale(ctx, Xt, 0, TL, 1, ty, 's', 5);
    for (let i = 1; i <= n; i++) line(ctx, Xt(i * T()), ty - 34, Xt(i * T()), ty - 10, C('time'), 3);
    dot(ctx, Xt(tau), ty, PAL.ink, true, 8);
    text(ctx, 'One mark for each completed cycle', tl, ty - 58, PAL.muted, { size: 17 });
    headline(ctx, done ? N.v + ' cycles in ' + fmt(tt.v, 1) + ' s is a frequency of ' + fmt(N.v / tt.v, 2) + ' cycles per second'
      : n + (n === 1 ? ' cycle has' : ' cycles have') + ' been completed so far, in ' + fmt(tau, 1) + ' s');
    readout(d.readout, `\\kf = \\frac{N}{\\kt} = \\frac{${N.v}}{${fmt(tt.v, 1)}\\ \\text{s}} = ${fmt(N.v / tt.v, 2)}\\ \\text{Hz}`,
      'Each cycle takes T = t/N = ' + fmt(T(), 3) + ' s, and 1/T gives the same ' + fmt(1 / T(), 2) + ' Hz.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Math.max(1, tt.v / 6)), draw });
})();
};
