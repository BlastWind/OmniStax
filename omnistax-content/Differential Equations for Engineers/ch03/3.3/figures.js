/* Figures for section 3.3 Linear systems of ODEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, drag, line, arrow, text, headline, register, readout, fmt, hover, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });

/* Sim (Example 3.3.2): x⃗′ = [1 0; 1 −1]x⃗ with the fundamental matrix X(t) = [eᵗ 0; eᵗ/2 e⁻ᵗ], whose columns are
   the solutions x⃗₁(t) = (eᵗ, eᵗ/2) and x⃗₂(t) = (0, e⁻ᵗ). The reader sets the initial point b⃗ = (b₁, b₂) (dragged
   on the plane or on its two sliders, the book's (1, 2) the default); X(0)c⃗ = b⃗ gives c₁ = b₁ and c₂ = b₂ − b₁/2.
   As t runs from 0 to 1 over 5 s, c₁x⃗₁(t) grows along the line through (2, 1) and c₂x⃗₂(t) shrinks along the
   x₂-axis, and their parallelogram sum is x⃗(t), whose tip traces the trajectory (moving tier: the tip is
   kinematic; the two scaled columns are redrawn each frame). Plane x₁ −6 to 6 by x₂ −4 to 4 at one scale, 62
   units per 1: with b₁ in [−2, 2] and b₂ in [−2, 3], every vector drawn stays inside it for t in [0, 1]
   (|x₁| ≤ 2e < 5.5, x₂ between −3.1 and 3.5, |c₂| ≤ 4). Dashed circles where c₁ = 0 (b₁ = 0) and where c₂ = 0
   (b₂ = b₁/2), the book's two choices of constants that give x⃗₂ and x⃗₁ themselves. */
(function () {
  const d = sim('sim-superposition', 680);
  const T = 1, RUN = 5;
  const cy = cycle(() => T, 1.2);
  const reset = () => cy.reset();
  const b1 = ctl(d.controls, { label: 'b_1', cls: 'point', key: 'b1', min: -2, max: 2, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the first entry b₁ of the initial point', specials: [{ at: 0, label: 'c₁ = 0' }], onInput: reset });
  const b2 = ctl(d.controls, { label: 'b_2', cls: 'point', key: 'b2', min: -2, max: 3, step: 0.05, value: 2, unit: '', dec: 2, aria: 'the second entry b₂ of the initial point', specials: [{ at: () => b1.v / 2, label: 'c₂ = 0' }], onInput: reset });
  const P = drag(d, { x: b1, y: b2 });
  const ro = readout(d);
  const U = 62, BOX = { l: 700 - 6 * U, r: 700 + 6 * U, t: 100, b: 100 + 8 * U };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), cc = C('curve'), pc = C('point'), fc = C('function');
    const B1 = +b1.v.toFixed(1), B2 = +b2.v.toFixed(2);
    const c1 = B1, c2 = +(B2 - B1 / 2).toFixed(2);
    const t = cy.now(), tr = +t.toFixed(2);
    const X1 = (s) => [Math.exp(s), Math.exp(s) / 2], X2 = (s) => [0, Math.exp(-s)];
    const sol = (s) => [c1 * X1(s)[0], c1 * X1(s)[1] + c2 * X2(s)[1]];
    hits = [];
    const ax = axes(ctx, BOX, [-6, 6], [-4, 4], { xl: 'x_1', yl: 'x_2', xc: fc, yc: fc, nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const { X, Y } = ax;
    /* the two lines the scaled columns run on: through (2, 1), and the x₂-axis */
    line(ctx, X(-6), Y(-3), X(6), Y(3), guide(), 2.5, [10, 10]);
    mark(ctx, '$c_1\\kvecxone(t)$', X(6) + 14, Y(3), vc, { align: 'left' });
    mark(ctx, '$c_2\\kvecxtwo(t)$', X(0) + 14, Y(3.72), vc, { align: 'left' });
    hits.push({ x: X(-4), y: Y(-2), r: 14, name: 'the line through (2, 1), where c₁x⃗₁(t) = c₁eᵗ(1, 1/2) always lies' });
    hits.push({ x: X(0), y: Y(-3.5), r: 14, name: 'the x₂-axis, where c₂x⃗₂(t) = c₂e⁻ᵗ(0, 1) always lies' });
    /* the trajectory of x⃗(t) for t in [0, 1]: faint ahead, solid up to t */
    const path = (s0, s1, k = 120) => Array.from({ length: k + 1 }, (_, i) => sol(s0 + ((s1 - s0) * i) / k));
    const stroke = (pts, color, w) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach(([a, b], i) => (i ? ctx.lineTo(X(a), Y(b)) : ctx.moveTo(X(a), Y(b)))); ctx.stroke(); ctx.restore(); };
    stroke(path(0, T), alpha(cc, 0.3), 4);
    if (t > 1e-6) stroke(path(0, t), cc, 5);
    const end = sol(T);
    if (Math.hypot(end[0] - B1, end[1] - B2) > 0.3) hits.push({ x: X(end[0]), y: Y(end[1]), r: 14, name: `the trajectory of x⃗(t) from b⃗ = (${fmt(B1, 1)}, ${fmt(B2, 2)}), drawn for t from 0 to 1` });
    /* c₁x⃗₁(t) and c₂x⃗₂(t) from the origin, the parallelogram they span, and their sum x⃗(t) */
    const v1 = [c1 * X1(t)[0], c1 * X1(t)[1]], v2 = [0, c2 * X2(t)[1]], x = [v1[0] + v2[0], v1[1] + v2[1]];
    const long = (p) => Math.hypot(p[0], p[1]) > 0.08;
    if (long(v1) && long(v2)) {
      line(ctx, X(v1[0]), Y(v1[1]), X(x[0]), Y(x[1]), guide(), 2.5, [4, 8]);
      line(ctx, X(v2[0]), Y(v2[1]), X(x[0]), Y(x[1]), guide(), 2.5, [4, 8]);
    }
    const thin = alpha(vc, 0.7);
    if (long(v1)) { arrow(ctx, X(0), Y(0), X(v1[0]), Y(v1[1]), thin, 3.5); hits.push({ x: X(v1[0] / 2), y: Y(v1[1] / 2), r: 14, name: `c₁x⃗₁(t) = ${fmt(c1, 2)}·(${fmt(Math.exp(t), 2)}, ${fmt(Math.exp(t) / 2, 2)}) at t = ${fmt(tr, 2)}` }); }
    if (long(v2)) { arrow(ctx, X(0), Y(0), X(v2[0]), Y(v2[1]), thin, 3.5); hits.push({ x: X(0), y: Y(v2[1] / 2), r: 14, name: `c₂x⃗₂(t) = ${fmt(c2, 2)}·(0, ${fmt(Math.exp(-t), 2)}) at t = ${fmt(tr, 2)}` }); }
    if (long(x)) { arrow(ctx, X(0), Y(0), X(x[0]), Y(x[1]), vc, 5); hits.push({ x: X(x[0]), y: Y(x[1]), r: 16, name: `x⃗(t) = c₁x⃗₁(t) + c₂x⃗₂(t) = (${fmt(x[0], 2)}, ${fmt(x[1], 2)}) at t = ${fmt(tr, 2)}` }); }
    /* the initial point b⃗ = x⃗(0), the reader's */
    const at = P.draw(ctx, ax, pc);
    if (at) {
      mark(ctx, '$\\kvecb$', at.x + (B1 < -1.2 ? 26 : -26), at.y - 24, pc, { align: B1 < -1.2 ? 'left' : 'right' });
      hits.push({ x: at.x, y: at.y, r: 18, name: `b⃗ = x⃗(0) = (${fmt(B1, 1)}, ${fmt(B2, 2)}), the initial condition; drag it` });
    }
    /* the words: the constants from X(0)c⃗ = b⃗, and the sum at time t from the numbers shown */
    /* the columns to three places, so the sum they make, rounded to two, is the tip drawn */
    const p11 = +Math.exp(t).toFixed(3), p12 = +(Math.exp(t) / 2).toFixed(3), p22 = +Math.exp(-t).toFixed(3);
    const s1 = c1 * p11, s2 = c1 * p12 + c2 * p22;
    const zero1 = Math.abs(c1) < 1e-9, zero2 = Math.abs(c2) < 1e-9;
    const what = zero1 && zero2 ? 'the solution is $\\vec{0}$ for all $t$.'
      : zero2 ? 'the solution is $c_1\\kvecxone(t)$ alone and stays on its line.'
      : zero1 ? 'the solution is $c_2\\kvecxtwo(t)$ alone and runs in along the $\\kxtwo$-axis.'
      : 'the solution is $c_1\\kvecxone(t) + c_2\\kvecxtwo(t)$ at every $t$.';
    headline(ctx, `$\\kX(0)\\,\\vec{c} = \\kvecb$ gives $c_1 = ${n(c1)}$ and $c_2 = ${n(c2)}$: ${what}`);
    const col = (a, b) => `\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix}`;
    const sgn = c2 < 0 ? '-' : '+';
    ro.set(`\\kvecx(${n(tr)}) = c_1\\kvecxone(${n(tr)}) + c_2\\kvecxtwo(${n(tr)}) = ${n(c1)}${col(n(p11, 3), n(p12, 3))} ${sgn} ${n(Math.abs(c2))}${col('0', n(p22, 3))} = ${col(n(s1), n(s2))}`,
      `$\\kX(0)\\,\\vec{c} = \\kvecb$: $c_1 = b_1 = ${n(c1)}$ and $c_2 = b_2 - b_1/2 = ${n(c2)}$.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / RUN), draw });
})();
};
