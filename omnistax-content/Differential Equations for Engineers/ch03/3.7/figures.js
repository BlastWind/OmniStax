/* Figures for section 3.7 Repeated eigenvalues. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.7'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, arrow, line, text, headline, register, readout, presence, hover, fmt, space } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a number written exactly, up to four decimals, trailing zeros dropped */
const exact = (v) => { const s = (Math.round(v * 1e4) / 1e4).toFixed(4).replace(/\.?0+$/, ''); return s === '-0' ? '0' : s; };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
function poly(ctx, ax, pts, color, w) {
  clip(ctx, ax.box, () => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.stroke();
  });
}
/* A generalized eigenvector is a vector drawn hollow (book COLOR.md): the arrow's outline in the vector's hue over the panel. */
function hollowArrow(ctx, x1, y1, x2, y2, color) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 24) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux, hw = 4, hl = 24, hh = 12;
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  const P = [[x1 + px * hw, y1 + py * hw], [bx + px * hw, by + py * hw], [bx + px * hh, by + py * hh], [x2, y2],
    [bx - px * hh, by - py * hh], [bx - px * hw, by - py * hw], [x1 - px * hw, y1 - py * hw]];
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); P.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}

/* Sim: A = [3 1; 0 3 + ε], ε on a slider (−1 to 1, the book's ε = 0 of Example 3.7.1 on load, a dashed circle there).
   The phase plane x₁ −4 to 4 by x₂ −3 to 3 at one scale (100 units per 1). The direction field as unit arrows, a fan of
   trajectories through twelve points on the circle of radius 1.5, the eigenvector lines along (1, 0) for 3 and (1, ε) for
   3 + ε, the eigenvectors v⃗₁ = (1, 0) and v⃗ = (1, ε) as arrows; at ε = 0 the second line and v⃗ fade out and the
   generalized eigenvector v⃗₂ = (0, 1) fades in, drawn hollow. The trajectory through (0, 1) is drawn full:
   x⃗(t) = ((e^((3+ε)t) − e^(3t))/ε, e^((3+ε)t)), which is x⃗₂ = (te^(3t), e^(3t)) at ε = 0. Every trajectory is the exact
   solution x⃗(t) = (e^(3t)(a + b t φ(εt)), b e^((3+ε)t)) with φ(z) = (e^z − 1)/z, continuous through ε = 0. Still: the
   variation in ε is the lesson, and a phase portrait under a parameter has no clock. */
(function () {
  const d = sim('sim-repeated-limit', 800);
  const P = presence(d);
  const isRep = (e) => Math.abs(e) < 0.005;
  const eps = ctl(d.controls, { label: '\\varepsilon', cls: '', key: 'eps', min: -1, max: 1, step: 0.01, value: 0, unit: '', dec: 2,
    aria: 'the perturbation ε of the lower right entry', specials: [{ at: 0, label: 'repeated' }],
    onInput: () => { const r = isRep(eps.v); P.show('gen', r); P.show('pair', !r); } });
  P.show('pair', false, { ms: 0 });
  const ro = readout(d);
  const BOX = { l: 300, r: 1100, t: 130, b: 730 };
  const phi = (z) => (Math.abs(z) < 1e-9 ? 1 : Math.expm1(z) / z);
  const sol = (e, a, b) => (t) => [Math.exp(3 * t) * (a + b * t * phi(e * t)), b * Math.exp((3 + e) * t)];
  const trace = (f, t0, t1, N) => Array.from({ length: N + 1 }, (_, i) => f(t0 + ((t1 - t0) * i) / N));
  const SEEDS = Array.from({ length: 12 }, (_, i) => { const th = ((i + 0.5) * Math.PI) / 6; return [1.5 * Math.cos(th), 1.5 * Math.sin(th)]; });
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const e = +eps.v.toFixed(2), rep = isRep(e), lam2 = 3 + e;
    const vc = C('vector'), cc = C('curve'), fc = C('function'), fld = alpha(C('vector-field'), 0.5);
    const field = (p) => { const a = 3 * p[0] + p[1], b = lam2 * p[1], L = Math.hypot(a, b); return L > 1e-9 ? [a / L, b / L] : [0, 0]; };
    const ax = axes(ctx, BOX, [-4, 4], [-3, 3], { xl: 'x_1', yl: 'x_2', xc: fc, yc: fc, nx: 8, ny: 6 });
    const { X, Y } = ax, O = [X(0), Y(0)];
    hits = [];
    line(ctx, X(-4), Y(0), X(4), Y(0), alpha(PAL.ink, 0.35), 2);
    line(ctx, X(0), Y(-3), X(0), Y(3), alpha(PAL.ink, 0.35), 2);
    space.field2(ctx, ax, field, fld, { n: [16, 12], w: 2.5 });
    hits.push({ x: X(-3.25), y: Y(2.25), r: 30, name: `the direction field of x⃗′ = Ax⃗, each arrow scaled to one length` });
    /* the fan of trajectories, each with an arrowhead at its seed the way it runs */
    SEEDS.forEach(([a, b], i) => {
      const f = sol(e, a, b), pts = trace(f, -4, 1.2, 900);
      poly(ctx, ax, pts, alpha(cc, 0.5), 3);
      const [p, q] = [f(0), f(0.02)], dx = X(q[0]) - X(p[0]), dy = Y(q[1]) - Y(p[1]), L = Math.hypot(dx, dy);
      if (L > 0) arrow(ctx, X(p[0]) - (dx / L) * 9, Y(p[1]) - (dy / L) * 9, X(p[0]) + (dx / L) * 9, Y(p[1]) + (dy / L) * 9, alpha(cc, 0.7), 3);
      if (i % 3 === 1) hits.push({ x: X(a), y: Y(b), r: 16, name: `the trajectory through (${fmt(a, 2)}, ${fmt(b, 2)})` });
    });
    /* the eigenvector lines: (1, 0) for 3, and (1, ε) for 3 + ε, which leaves as ε reaches 0 */
    clip(ctx, ax.box, () => line(ctx, X(-4), Y(0), X(4), Y(0), vc, 4));
    P.draw(ctx, 'pair', () => {
      clip(ctx, ax.box, () => line(ctx, X(-4), Y(-4 * e), X(4), Y(4 * e), vc, 4));
      const s = Math.min(3.3, 2.6 / Math.max(Math.abs(e), 1e-9));
      mark(ctx, `$\\klambdatwo = ${exact(lam2)}$`, X(s), Y(e * s) + (e >= 0 ? -18 : 18), C('eigenvalue'), { align: 'right', base: e >= 0 ? 'bottom' : 'top' });
      arrow(ctx, O[0], O[1], X(1), Y(e), vc, 5);
      mark(ctx, '$\\kvecv$', X(1) + 14, Y(e) + (e >= 0 ? -10 : 10), vc, { align: 'left', base: e >= 0 ? 'bottom' : 'top' });
    });
    if (!rep) hits.push({ x: X(2.2), y: Y(2.2 * e), r: 16, name: `the eigenvector line along (1, ${exact(e)}), eigenvalue ${exact(lam2)}` });
    mark(ctx, rep ? '$\\klambda = 3$, twice' : '$\\klambdaone = 3$', X(3.3), Y(0) + (e >= 0 ? 18 : -18), C('eigenvalue'), { align: 'right', base: e >= 0 ? 'top' : 'bottom' });
    hits.push({ x: X(-2.2), y: Y(0), r: 16, name: rep ? 'the only eigenvector line, along (1, 0): eigenvalue 3, twice' : 'the eigenvector line along (1, 0), eigenvalue 3' });
    arrow(ctx, O[0], O[1], X(1), Y(0), vc, 5);
    mark(ctx, '$\\kvecvone$', X(1) - 6, Y(0) + (e >= 0 ? 16 : -16), vc, { align: 'right', base: e >= 0 ? 'top' : 'bottom' });
    hits.push({ x: X(0.6), y: Y(0), r: 14, name: 'the eigenvector v⃗₁ = (1, 0)' });
    /* the trajectory through (0, 1): x⃗₂ at ε = 0 */
    const g = sol(e, 0, 1);
    poly(ctx, ax, trace(g, -4, 1, 900), cc, 5);
    const gq = g(0.3);
    hits.push({ x: X(gq[0]), y: Y(gq[1]), r: 16, name: rep ? 'the trajectory of x⃗₂ = (te^(3t), e^(3t)), through (0, 1)' : 'the trajectory through (0, 1)' });
    mark(ctx, rep ? '$\\kvecxtwo$' : 'through $(0, 1)$', X(gq[0]) + 16, Y(gq[1]), cc, { align: 'left', base: 'middle' });
    P.draw(ctx, 'gen', () => {
      hollowArrow(ctx, O[0], O[1], X(0), Y(1), vc);
      mark(ctx, '$\\kvecvtwo$', X(0) - 16, Y(0.6), vc, { align: 'right', base: 'middle' });
    });
    if (rep) hits.push({ x: X(0), y: Y(0.5), r: 14, name: 'the generalized eigenvector v⃗₂ = (0, 1), drawn hollow' });
    const A = `\\kA = \\left[\\begin{smallmatrix} 3 & 1 \\\\ 0 & ${exact(lam2)} \\end{smallmatrix}\\right]`;
    if (rep) {
      headline(ctx, `$${A}$: the eigenvalue $\\klambda = 3$ twice and one eigenvector line, along $(1, 0)$; the defect is $1$.`);
      ro.set(`(\\kA - 3\\kI)\\kvecvone = \\vec{0}, \\quad (\\kA - 3\\kI)\\kvecvtwo = \\left[\\begin{smallmatrix} 0 & 1 \\\\ 0 & 0 \\end{smallmatrix}\\right] \\left[\\begin{smallmatrix} 0 \\\\ 1 \\end{smallmatrix}\\right] = \\left[\\begin{smallmatrix} 1 \\\\ 0 \\end{smallmatrix}\\right] = \\kvecvone`,
        'Through $(0, 1)$: $\\kvecxtwo = (\\kvecvtwo + \\kvecvone t)\\, e^{3t} = (t e^{3t},\\ e^{3t})$.', { form: 'repeated' });
    } else {
      headline(ctx, `$${A}$: the eigenvalues $\\klambdaone = 3$ and $\\klambdatwo = ${exact(lam2)}$, with eigenvector lines along $(1, 0)$ and $(1, ${exact(e)})$.`);
      ro.set(`\\kA\\kvecvone = 3\\,\\kvecvone, \\quad \\kA\\kvecv = \\kA \\left[\\begin{smallmatrix} 1 \\\\ ${exact(e)} \\end{smallmatrix}\\right] = \\left[\\begin{smallmatrix} ${exact(lam2)} \\\\ ${exact(e * lam2)} \\end{smallmatrix}\\right] = ${exact(lam2)}\\,\\kvecv`,
        `Through $(0, 1)$: $\\kvecx = \\bigl( (e^{${exact(lam2)}t} - e^{3t}) / ${e < 0 ? `(${exact(e)})` : exact(e)},\\ e^{${exact(lam2)}t} \\bigr)$.`, { form: 'distinct' });
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
