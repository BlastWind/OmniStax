/* Figures for section 1.6 Autonomous equations. Every window is the book's: t from 0 to 20. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.6'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, arrow, text, headline, register, readout, fmt, hover, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
const fieldColor = () => alpha(C('derivative'), 0.55);
const GRID = [22, 16];
/* The slope field on the left and, on the two draggable figures, the phase diagram beside it on the same x scale,
   so a critical point on the line sits level with its equilibrium solution in the field. */
const BOX = { l: 170, r: 1000, t: 100, b: 620 };
const PX = 1160;
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });
const level = (ctx, ax, k, color) => line(ctx, ax.box.l, ax.Y(k), ax.box.r, ax.Y(k), color, 3, [10, 10]);
/* A polyline in data units, clipped to the box, y clamped far outside it where a solution has blown up. */
function poly(ctx, ax, pts, color, w) {
  if (pts.length < 2) return;
  const { box, X, Y } = ax, far = (v) => Math.min(box.b + 1e4, Math.max(box.t - 1e4, Y(v)));
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), far(y)) : ctx.moveTo(X(x), far(y)))); ctx.stroke(); ctx.restore();
}
/* The phase diagram of x′ = f(x) beside the field: the x-axis drawn vertically at PX over the window, each critical point
   a dot (filled where stable, hollow where unstable), and in every stretch between them an arrow up where f > 0 and down
   where f < 0, the arrow of the stretch holding x0 drawn full. Returns the hover hits of what it drew. */
function phase(ctx, ax, f, crit, x0, hits) {
  const { box, Y, yr } = ax, dc = C('derivative'), pc = C('point');
  line(ctx, PX, box.t, PX, box.b, PAL.muted, 2.5);
  const xs = crit.map((c) => c.x).sort((a, b) => a - b), edges = [yr[0], ...xs, yr[1]];
  for (let i = 0; i + 1 < edges.length; i++) {
    const a = edges[i], b = edges[i + 1]; if (b - a < 1e-9) continue;
    const m = (a + b) / 2, s = f(m), ya = Y(a), yb = Y(b), room = Math.abs(ya - yb);
    if (room < 18 || Math.abs(s) < 1e-12) continue;
    const L = Math.min(64, 0.6 * room), yc = (ya + yb) / 2, lit = x0 > a && x0 < b;
    const col = lit ? dc : alpha(dc, 0.4);
    if (s > 0) arrow(ctx, PX, yc + L / 2, PX, yc - L / 2, col, lit ? 6 : 4); else arrow(ctx, PX, yc - L / 2, PX, yc + L / 2, col, lit ? 6 : 4);
    const where = i === 0 ? `x < ${fmt(b, 2)}` : i + 2 === edges.length ? `x > ${fmt(a, 2)}` : `${fmt(a, 2)} < x < ${fmt(b, 2)}`;
    hits.push({ x: PX, y: yc, r: Math.max(16, L / 2), name: `f(x) ${s > 0 ? '> 0' : '< 0'} for ${where}: solutions ${s > 0 ? 'rise' : 'fall'}` });
  }
  crit.forEach((c) => {
    dot(ctx, PX, Y(c.x), pc, c.stable, 10);
    hits.push({ x: PX, y: Y(c.x), r: 16, name: `${c.name}, ${c.stable ? 'a stable' : c.semi ? 'a semistable' : 'an unstable'} critical point` });
    mark(ctx, c.label, PX + 24, Y(c.x), pc, { align: 'left', base: 'middle', size: 22 });
  });
  text(ctx, 'phase diagram', PX, box.t - 24, PAL.ink, { size: 20, weight: 600, align: 'center' });
}

/* Figure 1.11: the slope field of x′ = 0.3(5 − x), the equilibrium solution x = 5 dashed, and the book's four solutions
   x = 5 + (x(0) − 5)e^(−0.3t) from x(0) = 10, 0, −5 and −10, read from its plot. Axes t 0 to 20 by x −10 to 10, the book's
   window. A faithful live copy, still, no sliders. */
(function () {
  const d = sim('fig-cooling-field', 700);
  const f = (_t, x) => 0.3 * (5 - x);
  const STARTS = [10, 0, -5, -10];
  const sol = (c) => (t) => 5 + (c - 5) * Math.exp(-0.3 * t);
  const FB = { l: 170, r: 1240, t: 100, b: 620 };
  let ax = null;
  hover(d.stage, () => (ax ? [...STARTS.map((c) => ({ x: ax.X(2.5), y: ax.Y(sol(c)(2.5)), r: 14, name: `the solution with x(0) = ${fmt(c, 0)}` })),
    { x: ax.X(17), y: ax.Y(5), r: 14, name: 'the equilibrium solution x = 5, the ambient temperature' }] : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    ax = axes(ctx, FB, [0, 20], [-10, 10], { xl: 't', yl: 'x', nx: 4, ny: 4 });
    SF.field(ctx, ax, f, fieldColor(), { n: [28, 16] });
    level(ctx, ax, 5, alpha(fc, 0.7));
    STARTS.forEach((c) => plot(ctx, ax, sol(c), fc, { w: 4 }));
    mark(ctx, '$\\kx(0) = 10$', ax.X(1.4), ax.Y(9.1), fc, { align: 'left', base: 'middle' });   /* beside the falling curve, off it */
    mark(ctx, '$\\kx(0) = 0$', ax.X(3.4), ax.Y(sol(0)(3.4)) - 12, fc, { align: 'left', base: 'bottom' });
    mark(ctx, '$\\kx(0) = -5$', ax.X(0.3), ax.Y(-5) + 14, fc, { align: 'left', base: 'top' });
    mark(ctx, '$\\kx(0) = -10$', ax.X(0.3), ax.Y(-10) - 12, fc, { align: 'left', base: 'bottom' });
    mark(ctx, '$\\kx = 5$', ax.box.r - 8, ax.Y(5) - 10, fc, { align: 'right', base: 'bottom' });
    headline(ctx, '$\\kxprime = 0.3\\,(5 - \\kx)$: every slope points toward $\\kx = 5$, and all four solutions settle onto the equilibrium solution.');
  }
  still(d, draw);
})();

/* Figure 1.12 (with the book's phase diagram): the slope field of x′ = 0.1x(5 − x) on t 0 to 20 by x −5 to 10, the book's
   solutions faint (x(0) = 10, 0.4, 0.01, 0.001 above the axis and −0.001, −0.01, −0.25 below, read from its plot;
   x = 5/(1 + (5/x₀ − 1)e^(−t/2)), which for x₀ < 0 blows down at t = 2 ln(1 − 5/x₀)), the equilibrium solutions x = 0 and
   x = 5 dashed, the solution through the dragged point full, and the phase diagram beside. x₀ has detents at the book's
   test values 1, 6 and −1 and dashed circles at the two critical points. Still: a family under its sliders. */
(function () {
  const d = sim('sim-logistic', 700);
  const f = (_t, x) => 0.1 * x * (5 - x);
  const t0 = ctl(d.controls, { label: 't_0', cls: '', key: 't0', min: 0, max: 20, step: 0.1, value: 0, unit: '', dec: 1 });
  const x0 = ctl(d.controls, { label: '\\kx(t_0)', cls: 'function', key: 'x0', min: -5, max: 10, step: 0.01, value: 1, unit: '', dec: 2,
    detents: [1, 6, -1], specials: [{ at: 5, label: 'x = 5' }, { at: 0, label: 'x = 0' }] });
  const P = drag(d, { x: t0, y: x0 });
  const ro = readout(d);
  const BOOK = [10, 0.4, 0.01, 0.001, -0.001, -0.01, -0.25];
  const sol = (c) => (t) => 5 / (1 + (5 / c - 1) * Math.exp(-0.5 * t));
  const CRIT = [{ x: 0, stable: false, name: 'x = 0', label: '$x = 0$' }, { x: 5, stable: true, name: 'x = 5', label: '$x = 5$' }];
  let ax = null, hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const a = t0.v, b = x0.v, m = f(a, b);
    ax = axes(ctx, BOX, [0, 20], [-5, 10], { xl: 't', yl: 'x', nx: 4, ny: 3 });
    SF.field(ctx, ax, f, fieldColor(), { n: GRID });
    [0, 5].forEach((k) => level(ctx, ax, k, alpha(fc, 0.6)));
    hits = [];
    BOOK.forEach((c) => {
      const tEnd = c < 0 ? 2 * Math.log(1 - 5 / c) - 1e-6 : 20;
      plot(ctx, ax, sol(c), alpha(fc, 0.4), { w: 3, x: [0, Math.min(20, tEnd)] });
      const tt = c < 0 ? Math.min(20, tEnd) * 0.8 : c > 1 ? 3 : 2 * Math.log(5 / c - 1);   /* at each curve's bend, where x = 2.5 */
      const ts = Math.max(0.5, Math.min(19.5, tt));
      hits.push({ x: ax.X(ts), y: ax.Y(sol(c)(ts)), r: 14, name: `the solution with x(0) = ${String(c).replace('-', '−')}` });
    });
    const pts = SF.curve(ctx, ax, f, [a, b], fc);
    if (pts.length > 3) { const q = pts[Math.floor(pts.length * 0.7)]; hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 14, name: `the solution through (${fmt(a, 1)}, ${fmt(b, 2)})` }); }
    phase(ctx, ax, (x) => f(0, x), CRIT, b, hits);
    const at = P.draw(ctx, ax, pc);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `x(${fmt(a, 1)}) = ${fmt(b, 2)}, the initial condition` });
    const from = `From $\\kx(${n(a, 1)}) = ${n(b)}$: `;
    let head;
    if (Math.abs(b) < 1e-9 || Math.abs(b - 5) < 1e-9) head = `${from}$\\kf(${n(b)}) = 0$, so $\\kx$ stays on the equilibrium solution $\\kx = ${n(b, 0)}$.`;
    else if (b > 0 && b < 5) head = `${from}$\\kf(${n(b)}) = ${n(m)} > 0$, so $\\kx$ rises toward $5$.`;
    else if (b > 5) head = `${from}$\\kf(${n(b)}) = ${n(m)} < 0$, so $\\kx$ falls toward $5$.`;
    else head = `${from}$\\kf(${n(b)}) = ${n(m)} < 0$, so $\\kx$ falls without end, reaching $-\\infty$ at $t \\approx ${n(a + 2 * Math.log(1 - 5 / b), 2)}$.`;
    headline(ctx, head);
    ro.set(`\\kxprime = 0.1\\,\\kx\\,(5 - \\kx) = 0.1\\,(${n(b)})\\,(5 - ${par(b)}) = ${n(m)}`);
  }
  still(d, draw);
})();

/* Figures 1.13 + 1.14 + 1.15: the slope field of x′ = 0.1x(8 − x) − h on t 0 to 20 by x 0 to 10, h on a slider with detents at
   the book's 1 and 2 and a dashed circle at h = kM²/4 = 1.6, where A = B = 4. The critical points A, B = (0.8 ± √(0.64 − 0.4h))/0.2
   are dashed levels in the field and dots on the phase diagram beside; faint solutions from x(0) = 10 and from B ± 0.05 show
   the knife-edge, and the solution through the dragged point (opening on the book's x(0) = 3) is drawn full. Still. */
(function () {
  const d = sim('sim-harvesting', 700);
  const K = 0.1, MM = 8;
  const crit = (hv) => { const disc = (K * MM) ** 2 - 4 * hv * K; if (disc < -1e-9) return null; const s = Math.sqrt(Math.max(0, disc)); return { A: (K * MM + s) / (2 * K), B: (K * MM - s) / (2 * K), disc }; };
  const h = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0, max: 2.5, step: 0.01, value: 1, unit: '', dec: 2, detents: [1, 2], specials: [{ at: 1.6, label: 'A = B' }] });
  const t0 = ctl(d.controls, { label: 't_0', cls: '', key: 't0', min: 0, max: 20, step: 0.1, value: 0, unit: '', dec: 1 });
  const x0 = ctl(d.controls, { label: '\\kx(t_0)', cls: 'function', key: 'x0', min: 0, max: 10, step: 0.01, value: 3, unit: '', dec: 2,
    specials: [{ at: () => { const c = crit(h.v); return c ? c.A : null; }, label: 'A' }, { at: () => { const c = crit(h.v); return c && c.disc > 1e-9 ? c.B : null; }, label: 'B' }] });
  const P = drag(d, { x: t0, y: x0 });
  const ro = readout(d);
  let ax = null, hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const hv = h.v, a = t0.v, b = x0.v, c = crit(hv), f = (_t, x) => K * x * (MM - x) - hv, m = f(a, b);
    ax = axes(ctx, BOX, [0, 20], [0, 10], { xl: 't', yl: 'x', nx: 4, ny: 4 });
    SF.field(ctx, ax, f, fieldColor(), { n: GRID });
    hits = [];
    const one = c && c.disc <= 1e-9, levels = c ? (one ? [c.A] : [c.A, c.B]) : [];
    levels.forEach((k) => level(ctx, ax, k, alpha(fc, 0.6)));
    const faint = [10, ...(c ? (one ? [c.A + 0.05, c.A - 0.05] : [c.B + 0.05, c.B - 0.05]) : [])];
    faint.forEach((s, i) => {
      const pts = SF.trace(f, [0, s], ax.xr, ax.yr); poly(ctx, ax, pts, alpha(fc, 0.4), 3);
      const q = pts[Math.min(pts.length - 1, Math.floor(pts.length * (i === 0 ? 0.12 : 0.6)))];
      if (q) hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 14, name: `the solution with x(0) = ${fmt(s, 2)}` });
    });
    const pts = SF.curve(ctx, ax, f, [a, b], fc);
    if (pts.length > 3) { const q = pts[Math.floor(pts.length * 0.7)]; hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 14, name: `the solution through (${fmt(a, 1)}, ${fmt(b, 2)})` }); }
    const CR = !c ? [] : one ? [{ x: c.A, stable: false, semi: true, name: 'A = B = 4', label: '$A = B = 4$' }]
      : [{ x: c.A, stable: true, name: `A ≈ ${fmt(c.A, 2)}`, label: `$A \\approx ${n(c.A)}$` }, { x: c.B, stable: false, name: `B ≈ ${fmt(c.B, 2)}`, label: `$B \\approx ${n(c.B)}$` }];
    phase(ctx, ax, (x) => f(0, x), CR, b, hits);
    const at = P.draw(ctx, ax, pc);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `x(${fmt(a, 1)}) = ${fmt(b, 2)}, the starting population in millions` });
    const from = `from $\\kx(${n(a, 1)}) = ${n(b)}$ the population`;
    let head;
    if (!c) head = `$h = ${n(hv)}$: no critical point; ${from} plummets toward zero.`;
    else if (one) head = `$h = ${n(hv)}$: one critical point, $\\kx = 4$, semistable; ${from} ${Math.abs(b - 4) < 1e-9 ? 'stays at 4, with no room for error' : b > 4 ? 'tends toward 4' : 'dies out'}.`;
    else {
      const fate = Math.abs(b - c.A) < 1e-9 ? `stays at $A$` : Math.abs(b - c.B) < 1e-9 ? `stays at $B$ until the slightest perturbation` : b > c.A ? `falls toward $A \\approx ${n(c.A)}$` : b > c.B ? `tends toward $A \\approx ${n(c.A)}$` : 'dies out';
      head = `$h = ${n(hv)}$: $B \\approx ${n(c.B)}$ and $A \\approx ${n(c.A)}$; ${from} ${fate}.`;
    }
    headline(ctx, head);
    const ab = !c ? `(kM)^2 - 4hk = 0.64 - ${n(0.4 * hv, 3)} < 0:\\ \\text{no real } A, B`
      : `A, B = \\frac{kM \\pm \\sqrt{{(kM)}^2 - 4hk}}{2k} = \\frac{0.8 \\pm \\sqrt{0.64 - ${n(0.4 * hv, 3)}}}{0.2} = ${n(c.A)},\\ ${n(c.B)}`;
    ro.set(`${ab},\\quad \\kxprime = 0.1\\,\\kx\\,(8 - \\kx) - h = 0.1\\,(${n(b)})\\,(8 - ${n(b)}) - ${n(hv)} = ${n(m)}`);
  }
  still(d, draw);
})();
};
