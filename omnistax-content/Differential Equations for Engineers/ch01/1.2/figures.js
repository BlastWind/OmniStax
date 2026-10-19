/* Figures for section 1.2 Slope fields. Every window is the book's, −3 to 3 both ways. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, text, headline, register, readout, fmt, hover, cycle, partial, ease, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const fieldColor = () => alpha(C('derivative'), 0.55);
const GRID = [25, 19];
/* The book's plots are 1.39 wide to tall; this box is 1.36, so a slope reads nearly as drawn. */
const BOX = { l: 320, r: 1080, t: 100, b: 660 };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });
/* A polyline in data units, clipped to the box, y clamped far outside it where a solution has blown up. */
function poly(ctx, ax, pts, color, w) {
  if (pts.length < 2) return;
  const { box, X, Y } = ax, far = (v) => Math.min(box.b + 1e4, Math.max(box.t - 1e4, Y(v)));
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), far(y)) : ctx.moveTo(X(x), far(y)))); ctx.stroke(); ctx.restore();
}

/* Figures 1.2 + 1.3 + 1.4: the slope field of y′ = xy, the three solutions of Figure 1.4 (y(0) = 0.2, 0, −0.2)
   faint, and the point the reader drags (opening on Figure 1.2's (2, 1.5)) with its own segment of slope xy drawn
   long, and the solution y = y₀e^((x² − x₀²)/2) through it traced out both ways over the cycle (moving tier: the
   trace follows the field). A slider change restarts the trace. */
(function () {
  const d = sim('sim-slope-xy', 720);
  const f = (x, y) => x * y;
  const T = 4, cy = cycle(() => T, 1.2);
  const reset = () => cy.reset();
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -3, max: 3, step: 0.1, value: 2, unit: '', dec: 1, detents: [0, 2], onInput: reset });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -3, max: 3, step: 0.1, value: 1.5, unit: '', dec: 1, detents: [1.5, 0.2, -0.2], specials: [{ at: 0, label: 'y = 0' }], onInput: reset });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  const BOOK = [0.2, 0, -0.2];
  const sol = (c) => (x) => c * Math.exp((x * x) / 2);
  let ax = null, hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), pc = C('point');
    const a = x0.v, b = y0.v, m = f(a, b);
    ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    SF.field(ctx, ax, f, fieldColor(), { n: GRID });
    hits = [];
    BOOK.forEach((c) => {
      plot(ctx, ax, sol(c), alpha(fc, 0.45), { w: 3 });
      const lx = c === 0 ? 2.6 : 1.5;
      hits.push({ x: ax.X(lx), y: ax.Y(sol(c)(lx)), r: 14, name: `the solution with y(0) = ${fmt(c, 1)}` });
      hits.push({ x: ax.X(-lx), y: ax.Y(sol(c)(-lx)), r: 14, name: `the solution with y(0) = ${fmt(c, 1)}` });
    });
    mark(ctx, '$\\ky(0) = 0.2$', ax.X(0.35), ax.Y(sol(0.2)(0.35)) - 16, fc, { align: 'center', base: 'bottom' });
    mark(ctx, '$\\ky(0) = 0$', ax.X(-2.9), ax.Y(0) - 10, fc, { align: 'left', base: 'bottom' });
    mark(ctx, '$\\ky(0) = -0.2$', ax.X(0.35), ax.Y(sol(-0.2)(0.35)) + 16, fc, { align: 'center', base: 'top' });
    /* The solution through the point, split there and revealed outward from it as the clock runs. */
    const pts = SF.trace(f, [a, b], ax.xr, ax.yr);
    let i = 0; pts.forEach((p, j) => { if (Math.abs(p[0] - a) < Math.abs(pts[i][0] - a)) i = j; });
    /* Each branch is cut one point past the box's top or bottom, so the reveal spends the whole cycle on what is seen. */
    const inBox = (br) => { const o = []; for (const p of br) { o.push(p); if (p[1] < ax.yr[0] || p[1] > ax.yr[1]) break; } return o; };
    const k = ease.smooth(cy.now() / T);
    const right = partial(inBox(pts.slice(i)), k), left = partial(inBox(pts.slice(0, i + 1).reverse()), k);
    poly(ctx, ax, right, fc, 5); poly(ctx, ax, left, fc, 5);
    if (right.length > 3) { const q = right[Math.floor(right.length / 2)]; hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 14, name: `the solution through (${fmt(a, 1)}, ${fmt(b, 1)})` }); }
    /* The slope at the point, drawn long and bold in the derivative's colour. */
    const sg = SF.segment(a, b, m, 150, (ax.box.r - ax.box.l) / 6, (ax.box.b - ax.box.t) / 6);
    if (sg) {
      ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
      line(ctx, ax.X(sg[0][0]), ax.Y(sg[0][1]), ax.X(sg[1][0]), ax.Y(sg[1][1]), dc, 5); ctx.restore();
      hits.push({ x: ax.X((sg[0][0] + 3 * sg[1][0]) / 4), y: ax.Y((sg[0][1] + 3 * sg[1][1]) / 4), r: 12, name: `the slope y′ = xy = ${fmt(m, 2)} at the point` });
    }
    const at = P.draw(ctx, ax, pc);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `(x₀, y₀) = (${fmt(a, 1)}, ${fmt(b, 1)}), the initial condition` });
    const pa = a < 0 ? `(${n(a, 1)})` : n(a, 1), pb = b < 0 ? `(${n(b, 1)})` : n(b, 1);
    headline(ctx, `At $(${n(a, 1)}, ${n(b, 1)})$ the slope is $\\kyprime = x\\ky = ${pa} \\times ${pb} = ${n(m, 2)}$.`);
    const a2 = a * a, ex = a2 < 1e-9 ? 'e^{x^2/2}' : `e^{(x^2 - ${n(a2, 2)})/2}`;
    const ysol = Math.abs(b) < 1e-9 ? '\\ky = 0' : `\\ky = y_0\\, e^{(x^2 - x_0^2)/2} = ${n(b, 1)}\\, ${ex}`;
    ro.set(`\\kyprime = x\\ky = ${n(m, 2)},\\quad ${ysol}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 1.5: the slope field of y′ = −y and the book's three solutions from the left edge, y(−3) = 3, 1 and −2,
   each y = y(−3)e^(−(x + 3)); a faithful live copy, still, no sliders. */
(function () {
  const d = sim('fig-decay-field', 720);
  const f = (_x, y) => -y;
  const STARTS = [3, 1, -2];
  const sol = (c) => (x) => c * Math.exp(-(x + 3));
  let ax = null;
  hover(d.stage, () => (ax ? STARTS.map((c) => ({ x: ax.X(-2), y: ax.Y(sol(c)(-2)), r: 14, name: `the solution with y(−3) = ${fmt(c, 0)}` })) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    SF.field(ctx, ax, f, fieldColor(), { n: GRID });
    STARTS.forEach((c) => plot(ctx, ax, sol(c), fc, { w: 4 }));
    mark(ctx, '$\\ky(-3) = 3$', ax.X(-2.85), ax.Y(3) + 14, fc, { align: 'left', base: 'top' });
    mark(ctx, '$\\ky(-3) = 1$', ax.X(-2.85), ax.Y(1) - 12, fc, { align: 'left', base: 'bottom' });
    mark(ctx, '$\\ky(-3) = -2$', ax.X(-2.85), ax.Y(-2) + 12, fc, { align: 'left', base: 'top' });
    headline(ctx, '$\\kyprime = -\\ky$: every slope points toward the $x$-axis, and all three solutions tend to zero as $x$ grows.');
  }
  still(d, draw);
})();

/* Figure 1.6 (Example 1.2.1): the slope field of y′ = 1/x and the book's five solutions y = ln|x| + C, three on the
   left (C = 2.4, 1.3, −2.3) and two on the right (C = 0.95, −1.75), read from its plot; no segment stands on the
   y-axis, where 1/x is undefined, and the initial condition (0, 0) is a hollow point no solution reaches. */
(function () {
  const d = sim('fig-reciprocal-field', 720);
  const f = (x) => 1 / x;
  const LEFT = [2.4, 1.3, -2.3], RIGHT = [0.95, -1.75];
  const sol = (c) => (x) => Math.log(Math.abs(x)) + c;
  let ax = null;
  hover(d.stage, () => (ax ? [
    ...LEFT.map((c) => ({ x: ax.X(-1.5), y: ax.Y(sol(c)(-1.5)), r: 14, name: `the solution y = ln|x| + ${fmt(c, 2)}, x < 0` })),
    ...RIGHT.map((c) => ({ x: ax.X(1.5), y: ax.Y(sol(c)(1.5)), r: 14, name: `the solution y = ln|x| + ${fmt(c, 2)}, x > 0` })),
    { x: ax.X(0), y: ax.Y(0), r: 16, name: '(0, 0), the initial condition y(0) = 0, which no solution satisfies' }] : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    SF.field(ctx, ax, (x, y) => (Math.abs(x) < 1e-9 ? NaN : f(x, y)), fieldColor(), { n: GRID });
    LEFT.forEach((c) => plot(ctx, ax, sol(c), fc, { w: 4, x: [-3, -1e-6] }));
    RIGHT.forEach((c) => plot(ctx, ax, sol(c), fc, { w: 4, x: [1e-6, 3] }));
    dot(ctx, ax.X(0), ax.Y(0), pc, false, 10);
    mark(ctx, '$\\ky(0) = 0$', ax.X(0) + 20, ax.Y(0) - 14, pc, { align: 'left', base: 'bottom' });
    mark(ctx, '$\\ky = \\ln\\,\\lvert x \\rvert + C$', ax.X(-2.85), ax.Y(-3) - 14, fc, { align: 'left', base: 'bottom' });
    headline(ctx, '$\\kyprime = 1/x$ has no slope on the $y$-axis: every solution falls away as $x$ nears $0$, and none passes through $(0, 0)$.');
  }
  still(d, draw);
})();

/* Figure 1.7 (Example 1.2.2): the slope field of y′ = 2√|y| and the book's two solutions through (0, 0), y = 0 and
   y = x|x|, faint; the reader's solution joins the x-axis at x = b (−2 to 0) and leaves it at x = a (0 to 2):
   y = −(x − b)² for x < b, 0 between, (x − a)² for x > a, every choice a solution through the origin. Dashed circles
   at a = 0 and b = 0, the book's second solution; the two junctions are dragged along the axis. Still: a family
   under its sliders. */
(function () {
  const d = sim('sim-nonunique', 720);
  const f = (_x, y) => 2 * Math.sqrt(Math.abs(y));
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 2, step: 0.05, value: 0, unit: '', dec: 2, specials: [{ at: 0 }] });
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -2, max: 0, step: 0.05, value: 0, unit: '', dec: 2, specials: [{ at: 0 }] });
  const PA = drag(d, { x: a, y: 0 }), PB = drag(d, { x: b, y: 0 });
  const ro = readout(d);
  const fam = (A, B) => (x) => (x < B ? -(x - B) * (x - B) : x > A ? (x - A) * (x - A) : 0);
  const sq = (c) => (Math.abs(c) < 1e-9 ? 'x^2' : c > 0 ? `(x - ${n(c)})^2` : `(x + ${n(-c)})^2`);
  let ax = null, hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const A = a.v, B = b.v, book = Math.abs(A) < 1e-9 && Math.abs(B) < 1e-9;
    ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    SF.field(ctx, ax, f, fieldColor(), { n: GRID });
    plot(ctx, ax, () => 0, alpha(fc, 0.45), { w: 3 });
    plot(ctx, ax, fam(0, 0), alpha(fc, 0.45), { w: 3 });
    plot(ctx, ax, fam(A, B), fc, { w: 5 });
    hits = [
      { x: ax.X(2.5), y: ax.Y(0), r: 14, name: 'the solution y = 0' },
      { x: ax.X(-1.2), y: ax.Y(-1.44), r: 14, name: 'the solution y = x|x|: x² for x ≥ 0, −x² for x < 0' },
      { x: ax.X(1.2), y: ax.Y(1.44), r: 14, name: 'the solution y = x|x|: x² for x ≥ 0, −x² for x < 0' },
    ];
    if (!book) {
      const xr = Math.min(3, A + 1.2), xl = Math.max(-3, B - 1.2);
      hits.push({ x: ax.X(xr), y: ax.Y(fam(A, B)(xr)), r: 14, name: `the solution that leaves the axis at x = ${fmt(A, 2)}` });
      hits.push({ x: ax.X(xl), y: ax.Y(fam(A, B)(xl)), r: 14, name: `the solution that joins the axis at x = ${fmt(B, 2)}` });
    }
    mark(ctx, '$\\ky = 0$', ax.X(2.9), ax.Y(0) - 10, fc, { align: 'right', base: 'bottom' });
    mark(ctx, '$\\ky = x\\lvert x \\rvert$', ax.X(1.75) + 14, ax.Y(fam(0, 0)(1.75)), fc, { align: 'left', base: 'middle' });
    const pa = PA.draw(ctx, ax, fc), pb = PB.draw(ctx, ax, fc);
    if (pa) hits.push({ x: pa.x, y: pa.y, r: 18, name: `x = a = ${fmt(A, 2)}, where the solution leaves the axis` });
    if (pb) hits.push({ x: pb.x, y: pb.y, r: 18, name: `x = b = ${fmt(B, 2)}, where the solution joins the axis` });
    dot(ctx, ax.X(0), ax.Y(0), pc, true, 9);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 12, name: '(0, 0), the initial condition y(0) = 0' });
    headline(ctx, book
      ? 'Joining and leaving the $x$-axis at the origin: the solution $\\ky = x^2$ for $x \\geq 0$, $-x^2$ for $x < 0$.'
      : `Joining the $x$-axis at $x = ${n(B)}$ and leaving it at $x = ${n(A)}$: one more solution through $(0, 0)$.`);
    ro.set(book
      ? '\\ky = x^2\\ (x \\geq 0),\\ \\ -x^2\\ (x < 0)'
      : `\\ky = -${sq(B)}\\ (x < ${n(B)}),\\ \\ 0\\ (${n(B)} \\le x \\le ${n(A)}),\\ \\ ${sq(A)}\\ (x > ${n(A)})`, undefined, { form: book ? 'book' : 'family' });
  }
  still(d, draw);
})();
};
