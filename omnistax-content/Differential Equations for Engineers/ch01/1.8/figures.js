/* Figures for section 1.8 Exact equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.8'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, drag, dot, label, headline, register, readout, fmt, hover, space, arrival, partial, stagger } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
/* One frame for both figures: 800 by 615, the 1.3 : 1 shape of the book's plots, so the circles of Figure 1.18 are round. */
const BOX = { l: 300, r: 1100, t: 100, b: 715 };
/* a polyline of graph points, the first fraction k of it along its length */
const poly = (ctx, ax, pts, color, w, k, dash) => {
  const seg = k < 1 ? partial(pts, k) : pts; if (seg.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); seg.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); ctx.stroke(); ctx.restore();
};
/* the level curves f = c over the frame's window, as polylines of graph points */
const levelsOf = (ax, f, c) => {
  const [x0, x1] = ax.xr, [y0, y1] = ax.yr;
  return space.contours((s, t) => f(x0 + s * (x1 - x0), y0 + t * (y1 - y0)), c, 120)
    .map((pl) => pl.map(([s, t]) => [x0 + s * (x1 - x0), y0 + t * (y1 - y0)]));
};

/* Figure 1.18: the level curves F(x, y) = C of a potential, the field (M, N) = (F_x, F_y) square to them, and the
   curve through the dragged point, which is the implicit solution of M + N dy/dx = 0 through it. Three potentials:
   x² + y² (the book's figure; window x ±13, y ±10, the book's) and the ones of Examples 1.8.3 and 1.8.5 (window
   x ±5.2, y ±4, the same shape). The sliders re-range with the potential, each opening on the example's own point. */
(function () {
  const d = sim('sim-exact', 760);
  const POTS = {
    circle: { f: (x, y) => x * x + y * y, M: (x, y) => 2 * x, N: (x, y) => 2 * y, win: [[-13, 13], [-10, 10]], at: [3, 4],
      levels: [4, 16, 36, 64, 100], tex: 'x^2 + y^2', mt: '2x', nt: '2y', word: (c) => (c > 0 ? ', a circle.' : '.') },
    ex3: { f: (x, y) => x * x + x * y - y, M: (x, y) => 2 * x + y, N: (x, y) => x - 1, win: [[-5.2, 5.2], [-4, 4]], at: [0, 1],
      levels: [-8, -4, -2, 0, 1, 2, 4, 8, 16], tex: 'x^2 + xy - y', mt: '2x + y', nt: 'x - 1', word: () => ' (Example 1.8.3).' },
    ex5: { f: (x, y) => (x * x * x) / 3 + x * y * y + y * y, M: (x, y) => x * x + y * y, N: (x, y) => 2 * y * (x + 1), win: [[-5.2, 5.2], [-4, 4]], at: [2, 1],
      levels: [-30, -12, -4, -1, 0, 1, 4, 12, 30], tex: '\\tfrac{1}{3}x^3 + xy^2 + y^2', mt: 'x^2 + y^2', nt: '2y(x+1)', word: () => ' (Example 1.8.5).' },
  };
  const rangeOf = (p, i) => ({ min: p.win[i][0], max: p.win[i][1], step: 0.1, value: p.at[i], unit: '', dec: 2 });
  const pick = choice(d.controls, { label: 'F', key: 'F', value: 'circle', options: [
    { value: 'circle', label: 'x² + y²' }, { value: 'ex3', label: 'x² + xy − y' }, { value: 'ex5', label: 'x³/3 + xy² + y²' }],
    onInput: () => { const p = POTS[pick.value]; xs.range(rangeOf(p, 0)); ys.range(rangeOf(p, 1)); } });
  const xs = ctl(d.controls, { label: 'x₀', cls: 'point', key: 'x0', ...rangeOf(POTS.circle, 0) });
  const ys = ctl(d.controls, { label: 'y₀', cls: 'point', key: 'y0', ...rangeOf(POTS.circle, 1) });
  const P = drag(d, { x: xs, y: ys });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const p = POTS[pick.value], cc = C('curve'), vf = C('vector-field'), pc = C('point');
    const x0 = +xs.v.toFixed(2), y0 = +ys.v.toFixed(2), c = p.f(x0, y0), M = p.M(x0, y0), N = p.N(x0, y0);
    const ax = axes(ctx, BOX, p.win[0], p.win[1], { xl: 'x', yl: 'y', nx: pick.value === 'circle' ? 13 : 8, ny: 8 });
    const k = arrival(d), a = pick.k;
    hits = [];
    F.faded(ctx, a, [0, 10 * (1 - a)], () => {
      space.field2(ctx, ax, ([x, y]) => [p.M(x, y), p.N(x, y)], alpha(vf, 0.55), { n: [14, 11], w: 2 });
      p.levels.forEach((lv, i) => levelsOf(ax, p.f, lv).forEach((pl) => poly(ctx, ax, pl, alpha(cc, 0.4), 2.5, stagger(k, i, p.levels.length))));
      const own = levelsOf(ax, p.f, c);
      own.forEach((pl) => poly(ctx, ax, pl, cc, 5, k));
      own.forEach((pl) => [0.2, 0.5, 0.8].forEach((u) => { const q = pl[Math.floor(u * (pl.length - 1))]; if (q) hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 14, name: `the solution F(x, y) = ${fmt(c, 2)}, the level curve through the point` }); }));
    });
    const grid = [[-0.6, -0.6], [0.6, 0.6], [-0.6, 0.6], [0.6, -0.6]].map(([u, v]) => [u * p.win[0][1], v * p.win[1][1]]);
    grid.forEach(([x, y]) => hits.push({ x: ax.X(x), y: ax.Y(y), r: 22, name: 'the vector field v⃗ = (M, N) = (F_x, F_y), square to the level curves' }));
    const at = P.draw(ctx, ax, pc);
    if (at) { hits.push({ x: at.x, y: at.y, r: 18, name: `the point (${n(x0)}, ${n(y0)}) the curve is drawn through` }); label(ctx, `(${n(x0)}, ${n(y0)})`, at.x, at.y, { side: 'right', color: pc, size: 20, weight: 600 }); }
    headline(ctx, `Through $(${n(x0)},\\,${n(y0)})$: $${p.tex} = ${n(c)}$${p.word(c)}`);
    const slope = Math.abs(N) < 1e-9 ? `\\kN = 0:\\ \\text{the curve is vertical here}` : `\\kdydx = -\\frac{\\kM}{\\kN} = -\\frac{${n(M)}}{${n(N)}} = ${n(-M / N)}`;
    ro.set(`\\kF(x,y) = ${p.tex} = ${n(c)},\\quad \\kM = ${p.mt} = ${n(M)},\\ \\kN = ${p.nt} = ${n(N)},\\quad ${slope}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 1.19 and Example 1.8.4: the field (M, N) = (−y, x)/(x² + y²) drawn by direction (its length 1/r would
   swamp the frame near the origin), and the solution through the dragged initial point: arctan(y/x) = C is the ray
   from the origin through the point, on the half-plane that holds it. Window x ±5, y ±10, the book's; the origin
   hollow, where M and N are undefined. */
(function () {
  const d = sim('sim-vortex', 760);
  const xs = ctl(d.controls, { label: 'x₀', cls: 'point', key: 'x0', min: -5, max: 5, step: 0.1, value: 1, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y₀', cls: 'point', key: 'y0', min: -10, max: 10, step: 0.1, value: 2, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: ys });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const RAYS = 16;   /* the faint family: rays at every π/8 */
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vf = C('vector-field'), pc = C('point'), ink = PAL.ink;
    const x0 = +xs.v.toFixed(2), y0 = +ys.v.toFixed(2);
    const ax = axes(ctx, BOX, [-5, 5], [-10, 10], { xl: 'x', yl: 'y', nx: 10, ny: 10 });
    const k = arrival(d);
    space.field2(ctx, ax, ([x, y]) => { const r = Math.hypot(x, y); return r < 0.3 ? [NaN, NaN] : [-y / r, x / r]; }, alpha(vf, 0.55), { n: [14, 11], w: 2 });
    const far = (dx, dy) => { const s = Math.min(dx ? 5.4 / Math.abs(dx) : Infinity, dy ? 10.8 / Math.abs(dy) : Infinity); return [dx * s, dy * s]; };
    for (let i = 0; i < RAYS; i++) { const th = (i * 2 * Math.PI) / RAYS; poly(ctx, ax, [[0, 0], far(Math.cos(th), Math.sin(th))], alpha(cc, 0.3), 2, stagger(k, i, RAYS), [8, 10]); }
    hits = [];
    const onAxis = Math.abs(x0) < 1e-9, origin = onAxis && Math.abs(y0) < 1e-9;
    const m = y0 / x0;
    if (!onAxis) {
      const end = far(x0, y0); poly(ctx, ax, [[0, 0], end], cc, 5, k);
      [0.35, 0.7].forEach((u) => hits.push({ x: ax.X(end[0] * u), y: ax.Y(end[1] * u), r: 14, name: `the solution y = ${fmt(m, 2)}x, a ray from the origin on the side x ${x0 > 0 ? '>' : '<'} 0` }));
    } else if (!origin) {
      poly(ctx, ax, [[0, 0], [0, y0 > 0 ? 10.8 : -10.8]], alpha(cc, 0.6), 4, k, [10, 10]);
    }
    dot(ctx, ax.X(0), ax.Y(0), ink, false, 9);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 16, name: 'the origin, where M and N are undefined' });
    [[2.4, 2.4], [-2.4, -2.4], [2.4, -6], [-2.4, 6]].forEach(([x, y]) => hits.push({ x: ax.X(x), y: ax.Y(y), r: 22, name: 'the direction of v⃗ = (M, N), which circles the origin' }));
    const at = P.draw(ctx, ax, pc);
    if (at) { hits.push({ x: at.x, y: at.y, r: 18, name: `the initial point (${n(x0)}, ${n(y0)})` }); label(ctx, `(${n(x0)}, ${n(y0)})`, at.x, at.y, { side: x0 >= 0 ? 'right' : 'left', color: pc, size: 20, weight: 600 }); }
    if (origin) {
      headline(ctx, 'At the origin $\\kM$ and $\\kN$ are undefined: no solution starts there.');
      ro.set(`\\kM = \\frac{-y}{x^2+y^2},\\ \\kN = \\frac{x}{x^2+y^2}\\ \\text{are undefined at } (0, 0)`, undefined, { form: 'origin' });
    } else if (onAxis) {
      headline(ctx, `Through $(0,\\,${n(y0)})$: $\\kN = 0$ on the $y$-axis, so there is no solution $y(x)$ there; the axis itself is a solution $x = 0$.`);
      ro.set(`\\kN = \\frac{x}{x^2+y^2} = \\frac{0}{${n(y0 * y0)}} = 0,\\quad \\kM = \\frac{-y}{x^2+y^2} = ${n(-1 / y0)} \\neq 0`, undefined, { form: 'axis' });
    } else {
      headline(ctx, `Through $(${n(x0)},\\,${n(y0)})$: $\\arctan(y/x) = \\arctan(${n(m)})$, so $y = ${n(m)}x$ for $x ${x0 > 0 ? '>' : '<'} 0$.`);
      ro.set(`\\kF(x,y) = \\arctan(y/x) = \\arctan(${n(m)}) = ${n(Math.atan(m), 3)},\\quad y = \\tan(${n(Math.atan(m), 3)})\\,x = ${n(m)}\\,x\\quad (x ${x0 > 0 ? '>' : '<'} 0)`, undefined, { form: 'ray' });
    }
  }
  still(d, draw);
})();
};
