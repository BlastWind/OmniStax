/* Figures for section 3.4 Derivatives as Rates of Change. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, dot, line, arrow, text, label, headline, register, readout, fmt, hover, cycle, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const blank = () => '';
const through = (ctx, ax, x0, y0, m, color, o = {}) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w: 4, ...o });

/* Figure 3.22: a decreasing, concave-up stand-in for the book's unformulated f, f(x) = 1 + 4/(x + 1) at a = 1, so
   f(a) = 3 and f′(a) = −1; the tangent's height at a + h against the curve's. Axes fixed at −0.5 to 4 by 0 to 6. */
(function () {
  const d = sim('sim-amount-of-change', 520);
  const f = (x) => 1 + 4 / (x + 1), A = 1, FA = 3, DFA = -1;
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: -0.8, max: 2.5, step: 0.01, value: 1, unit: '', dec: 2, snap: true, specials: [{ at: 0 }] });
  const ro = readout(d);
  const BOX = { l: 330, r: 1150, t: 90, b: 450 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), ec = C('error');
    const h = hs.v, b = A + h, est = FA + DFA * h, val = f(b), err = val - est;
    const ax = axes(ctx, BOX, [-0.5, 4], [0, 6], { xl: 'x', yl: 'y', nx: 0, ny: 0, fx: blank, fy: blank });
    through(ctx, ax, A, FA, DFA, lc);
    plot(ctx, ax, f, fc, { x: [-0.45, 4] });
    drop(ctx, ax.X(A), ax.Y(FA), ax.X(A), ax.Y(0));
    text(ctx, 'a', ax.X(A), ax.box.b + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    dot(ctx, ax.X(A), ax.Y(FA), fc, true, 9);
    label(ctx, '(a, f(a))', ax.X(A), ax.Y(FA), { side: 'right', gap: 24 });
    if (Math.abs(h) > 1e-9) {
      drop(ctx, ax.X(b), Math.min(ax.Y(val), ax.Y(est)), ax.X(b), ax.Y(0));
      text(ctx, 'a + h', ax.X(b), ax.box.b + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
      if (Math.abs(ax.Y(val) - ax.Y(est)) > 3) line(ctx, ax.X(b), ax.Y(val), ax.X(b), ax.Y(est), ec, 5);
      dot(ctx, ax.X(b), ax.Y(val), fc, true, 9);
      if (est > 0) dot(ctx, ax.X(b), ax.Y(est), lc, true, 9);
    }
    text(ctx, '$\\kf$', ax.X(3.8), ax.Y(f(3.8)) - 26, fc, { size: 24, weight: 600, align: 'center', tex: true });
    hits = [
      { x: ax.X(A), y: ax.Y(FA), r: 16, name: '(a, f(a)) = (1, 3)' },
      ...(Math.abs(h) > 1e-9 ? [
        { x: ax.X(b), y: ax.Y(val), r: 16, name: `(a + h, f(a + h)) = (${fmt(b, 2)}, ${fmt(val, 3)})` },
        ...(est > 0 ? [{ x: ax.X(b), y: ax.Y(est), r: 16, name: `(a + h, f(a) + f′(a)h) = (${fmt(b, 2)}, ${fmt(est, 3)})` }] : []),
        { x: ax.X(b), y: (ax.Y(val) + ax.Y(est)) / 2, r: 12, name: `the error of the estimate, ${fmt(err, 3)}` }] : []),
      { x: ax.X(0), y: ax.Y(FA + DFA * (0 - A)), r: 14, name: 'the tangent line at a, slope f′(a) = −1' },
    ];
    headline(ctx, Math.abs(h) < 1e-9 ? 'h = 0: the estimate is exact, f(a + h) = f(a) = 3.'
      : `h = ${fmt(h, 2)}: the tangent line gives ${fmt(est, 3)}, the curve ${fmt(val, 3)}; the error is ${fmt(err, 3)}.`);
    ro.set(`\\kf(${n(b)}) = ${n(val, 3)} \\approx \\kf(1)+\\kfprime(1)(${n(h)}) = 3 + (-1)(${n(h)}) = ${n(est, 3)},\\quad \\text{error } ${typed('error', n(err, 3))}`);
  }
  still(d, draw);
})();

/* Example 3.34's graph, a faithful copy: s(t) = −16t² + 64 on 0 ≤ t ≤ 2, on 0 to 2.5 by 0 to 70. */
(function () {
  const d = sim('fig-ball-drop', 420);
  const s = (t) => -16 * t * t + 64;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 450, r: 950, t: 40, b: 360 }, [0, 2.5], [0, 70], { xl: 't', yl: 'y', nx: 5, ny: 7, fx: (v) => fmt(v, 1) });
    plot(ctx, ax, s, fc, { x: [0, 2], dots: [[0, 64], [2, 0]] });
    text(ctx, '$\\ks(t) = -16t^2 + 64$', ax.X(1.05), ax.Y(62), fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: ax.X(0), y: ax.Y(64), r: 16, name: '(0, 64): dropped from 64 ft' }, { x: ax.X(2), y: ax.Y(0), r: 16, name: '(2, 0): it hits the ground at t = 2 s' }];
  }
  still(d, draw);
})();

/* Figures 3.23 and 3.24 (Example 3.36): the particle at s(t) = t³ − 9t² + 24t + 4 for 0 ≤ t ≤ 5 on its axis, the
   graph of s above on one t-scale, the sign of v(t) = 3t² − 18t + 24 between. The path is drawn behind the particle,
   lifted a lane at each turn as the book draws it. The loop runs 5 s of model time in 5 s. */
(function () {
  const d = sim('sim-particle-path', 680);
  const s = (t) => t ** 3 - 9 * t * t + 24 * t + 4, v = (t) => 3 * t * t - 18 * t + 24, T = 5;
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  const TOP = { l: 220, r: 1220, t: 90, b: 300 }, SIGN = 380, LANE = 560, PX0 = 220, PX1 = 1220, SMIN = -8, SMAX = 28;
  const PX = (sv) => PX0 + ((sv - SMIN) / (SMAX - SMIN)) * (PX1 - PX0);
  const smooth = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
  const lift = (t) => 26 * (smooth((t - 1.7) / 0.6) + smooth((t - 3.7) / 0.6));
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), vc = C('derivative');
    const t = cy.now(), st = s(t), vt = v(t);
    const ax = axes(ctx, TOP, [0, 5], [0, 28], { xl: 't', yl: 's', nx: 5, ny: 7, yc: fc });
    plot(ctx, ax, s, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, s, fc, { x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(st), fc, true, 9);
    drop(ctx, ax.X(t), ax.Y(st), ax.X(t), SIGN - 14);
    /* the sign chart of v(t), on the graph's t-scale */
    line(ctx, ax.X(0), SIGN, ax.X(5), SIGN, PAL.muted, 2.5);
    [[0, 2, '+'], [2, 4, '−'], [4, 5, '+']].forEach(([a, b, sg]) => {
      const on = t >= a && t <= b;
      if (on) line(ctx, ax.X(a), SIGN, ax.X(Math.min(b, t)), SIGN, vc, 6);
      text(ctx, sg, ax.X((a + b) / 2), SIGN - 22, on ? vc : PAL.muted, { size: 24, weight: 600, align: 'center' });
    });
    [0, 2, 4].forEach((a) => { dot(ctx, ax.X(a), SIGN, PAL.ink, true, 7); text(ctx, String(a), ax.X(a), SIGN + 26, PAL.muted, { size: 17, align: 'center' }); });
    [2, 4].forEach((a) => text(ctx, '0', ax.X(a), SIGN - 22, PAL.muted, { size: 22, align: 'center' }));
    text(ctx, '$\\kv(t)$', ax.X(5) + 16, SIGN, vc, { size: 24, weight: 600, align: 'left', tex: true });
    /* the particle's axis and its path */
    line(ctx, PX0, LANE + 30, PX1, LANE + 30, PAL.ink, 2.5);
    for (let m = -8; m <= 28; m += 4) { line(ctx, PX(m), LANE + 22, PX(m), LANE + 38, PAL.muted, 2); text(ctx, fmt(m, 0), PX(m), LANE + 60, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 's', PX1 + 16, LANE + 30, PAL.ink, { size: 22, weight: 600, align: 'left' });
    const N = Math.max(2, Math.ceil(t * 60));
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= N; i++) { const u = (t * i) / N, px = PX(s(u)), py = LANE - lift(u); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    const py = LANE - lift(t);
    if (Math.abs(vt) > 0.05) arrow(ctx, PX(st), py, PX(st) + vt * 9, py, vc, 4);
    dot(ctx, PX(st), py, PAL.ink, true, 11);
    text(ctx, 't = 0', PX(4), LANE + 4 - 30, PAL.muted, { size: 17, align: 'center' });
    hits = [
      { x: PX(st), y: py, r: 18, name: `the particle at s = ${fmt(st, 2)}` },
      { x: ax.X(t), y: ax.Y(st), r: 16, name: `(${fmt(t, 2)}, ${fmt(st, 2)}) on the graph of s` },
      ...(Math.abs(vt) > 0.05 ? [{ x: PX(st) + vt * 4.5, y: py, r: 14, name: `the velocity v(t) = ${fmt(vt, 2)}` }] : []),
    ];
    const dir = vt > 0.15 ? 'moving left to right' : vt < -0.15 ? 'moving right to left' : 'at rest, turning';
    headline(ctx, `t = ${fmt(t, 2)}: s = ${fmt(st, 2)}, v = ${fmt(vt, 2)}, ${dir}.`);
    ro.set(`\\kv(${n(t)}) = 3(${n(t)})^{2}-18(${n(t)})+24 = ${n(vt)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
