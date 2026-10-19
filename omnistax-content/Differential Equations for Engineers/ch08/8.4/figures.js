/* Figures for section 8.4 Limit cycles. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, drag, dot, line, arrow, text, label, headline, register, readout, fmt, hover, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');            /* a number for TeX */
const u = (v, dec = 2) => fmt(v, dec);                                /* a number for canvas text and hover names */
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));  /* a term, bracketed when negative */
const pp = (v, dec = 2) => `(${n(v, dec)})`;                           /* a factor, always bracketed */
const rnd = (v, dec = 2) => Math.round(v * 10 ** dec) / 10 ** dec + 0;
const clamp01 = (k) => Math.max(0, Math.min(1, k));
const guide = () => alpha(PAL.ink, 0.35);
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* one RK4 step of z′ = f(z) */
function rk4(f, z, h) {
  const k1 = f(z), k2 = f([z[0] + (h / 2) * k1[0], z[1] + (h / 2) * k1[1]]), k3 = f([z[0] + (h / 2) * k2[0], z[1] + (h / 2) * k2[1]]), k4 = f([z[0] + h * k3[0], z[1] + h * k3[1]]);
  return [z[0] + (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), z[1] + (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
}
/* the solution from z0 for 0 ≤ t ≤ T in steps h, a point per step; it stops where it runs past `far` (an escape to
   infinity, which some of these systems reach in finite time) and records when */
function solve(f, z0, T, h, far = 50) {
  const pts = [z0.slice()]; let z = z0.slice(), gone = Infinity;
  for (let i = 1; i * h <= T + 1e-9; i++) {
    z = rk4(f, z, h);
    if (!(Math.abs(z[0]) < far && Math.abs(z[1]) < far)) { gone = i * h; break; }
    pts.push(z);
  }
  return { pts, h, gone };
}
/* the point of a solution at time t (linear between steps), or null once it has gone */
function at(s, t) {
  const f = t / s.h, i = Math.floor(f);
  if (i >= s.pts.length - 1) return s.pts.length - 1 >= f - 1e-9 || s.gone === Infinity ? s.pts[s.pts.length - 1] : null;
  const p = s.pts[i], q = s.pts[i + 1], k = f - i;
  return [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k];
}
/* a polyline in plane coordinates, clipped to the box, up to time t when given */
function poly(ctx, ax, pts, color, w, upto = pts.length) {
  const m = Math.min(pts.length, Math.ceil(upto)); if (m < 2) return;
  clip(ctx, ax.box, () => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < m; i++) { const X = ax.X(pts[i][0]), Y = ax.Y(Math.max(-1e3, Math.min(1e3, pts[i][1]))); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
    ctx.stroke();
  });
}
/* the direction field: an arrow of one length on the canvas at each grid point (the book's direction plots), so the
   field shows where the flow goes wherever it is fast or slow */
function directions(ctx, ax, f, color, cells) {
  const { box, xr, yr } = ax, sx = (box.r - box.l) / (xr[1] - xr[0]), sy = (box.b - box.t) / (yr[1] - yr[0]);
  const cell = Math.min((box.r - box.l) / cells[0], (box.b - box.t) / cells[1]);
  F.space.field2(ctx, ax, (p) => { const [a, b] = f(p), m = Math.hypot(a * sx, b * sy); return m > 1e-9 ? [a / m, b / m] : [NaN, NaN]; }, color, { n: cells, scale: 0.62 * cell, w: 2.5 });
}
/* the state riding a solution: a dot on a panel halo */
function rider(ctx, ax, p, color, r = 9, a = 1) {
  if (!p) return null;
  const X = ax.X(p[0]), Y = ax.Y(p[1]); const { box } = ax;
  if (X < box.l - 2 || X > box.r + 2 || Y < box.t - 2 || Y > box.b + 2) return null;
  ctx.save(); ctx.globalAlpha *= a; dot(ctx, X, Y, PAL.panel, true, r + 3.5); dot(ctx, X, Y, color, true, r); ctx.restore();
  return { x: X, y: Y };
}
const inBox = (p, R) => p && Math.abs(p[0]) <= R && Math.abs(p[1]) <= R;

/* Figure 8.10 (Example 8.4.1): the Van der Pol oscillator x″ − μ(1 − x²)x′ + x = 0 as the system x′ = y,
   y′ = μ(1 − x²)y − x. Left, its phase portrait on x from −4 to 4 (the book's window) with y from −Y to Y, where
   Y = max(4, 1.15 · the largest y on the limit cycle) so the cycle stays framed as μ grows (a zoom that follows μ:
   y reaches ±2.68 on the cycle at μ = 1, ±3.82 at μ = 2, ±5.06 at μ = 3); the direction field, the limit cycle in
   bold (computed once per μ: a solution run to t = 60 and its last loop kept, between two crossings of the positive
   x-axis), four trajectories from the edge of the book's window faint with their states riding them, and the
   reader's trajectory from the dragged start (x₀, y₀), the book's (0.1, 0.1) by default, traced up to the clock.
   Right, x(t) of the reader's solution for 0 ≤ t ≤ 30 on −4 to 4, drawn up to the clock, the cycle's extremes ±x_max
   dashed. Moving: the clock runs t from 0 to 30 in 7.5 s and holds 1.2 s; the arrows are symbolic, the dots the state.
   At μ = 1 the cycle runs between x = −2.01 and 2.01 with period 6.66 (checked with SciPy). */
(function () {
  const d = sim('sim-van-der-pol', 800);
  const T = 30, RATE = 4, H = 0.01;
  const PORT = { l: 96, r: 646, t: 150, b: 700 }, GRAPH = { l: 790, r: 1340, t: 150, b: 700 };
  const BOOK = [[-2.5, 4], [2.5, -4], [4, -0.5], [-4, 0.5]];
  const mu = ctl(d.controls, { label: '\\mu', cls: '', key: 'mu', min: 0, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the constant μ of the Van der Pol equation', specials: [{ at: 0, label: 'linear center' }] });
  const x0 = ctl(d.controls, { label: 'x_0', cls: 'point', key: 'x0', min: -4, max: 4, step: 0.05, value: 0.1, unit: '', dec: 2, detents: [0.1], aria: 'the initial x, x(0)', specials: [{ at: () => (Math.abs(y0.v) < 1e-9 ? 0 : null), label: 'the critical point' }] });
  const y0 = ctl(d.controls, { label: 'y_0', cls: 'point', key: 'y0', min: -4, max: 4, step: 0.05, value: 0.1, unit: '', dec: 2, detents: [0.1], aria: 'the initial y = x′, y(0)', specials: [{ at: () => (Math.abs(x0.v) < 1e-9 ? 0 : null), label: 'the critical point' }] });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => T, 1.2);

  /* per μ: the field, the limit cycle (its last loop), its period, its extremes, and the four book trajectories */
  let mKey = null, M = null;
  function forMu(m) {
    if (m === mKey) return M;
    const f = ([x, y]) => [y, m * (1 - x * x) * y - x];
    let cyc = null;
    if (m > 1e-9) {
      const run = solve(f, [2, 0], 60, 0.004), pts = run.pts, cross = [];
      for (let i = Math.floor(pts.length / 3); i < pts.length - 1; i++) {
        const [xa, ya] = pts[i], [, yb] = pts[i + 1];
        if (xa > 0 && ya > 0 && yb <= 0) cross.push(i + ya / (ya - yb));
      }
      const a = cross[cross.length - 2], b = cross[cross.length - 1];
      const loop = pts.slice(Math.floor(a), Math.ceil(b) + 1);
      cyc = { loop, period: (b - a) * run.h, xmax: Math.max(...loop.map((p) => Math.abs(p[0]))), ymax: Math.max(...loop.map((p) => Math.abs(p[1]))) };
      /* the loop resampled evenly by arc length, for distances to it */
      cyc.even = F.resample(loop, 600, true);
    }
    const Y = Math.max(4, cyc ? 1.15 * cyc.ymax : 0);
    M = { f, cyc, Y, book: BOOK.map((z) => solve(f, z, T, H, 1e4)) };
    mKey = m; return M;
  }
  /* per (μ, x₀, y₀): the reader's solution, and from when it stays within 0.05 of the cycle */
  let sKey = '', S = null;
  function forStart(m, a, b) {
    const key = `${m}|${a}|${b}`; if (key === sKey) return S;
    const Mu = forMu(m), s = solve(Mu.f, [a, b], T, H, 1e4);
    let settle = null;
    if (Mu.cyc && (a || b)) {
      /* the distance from p to the cycle: to the nearest of its chords */
      const E = Mu.cyc.even, seg = (p, a, c) => { const dx = c[0] - a[0], dy = c[1] - a[1], L2 = dx * dx + dy * dy, k = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)) : 0; return Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy); };
      const dist = (p) => { let best = Infinity; for (let j = 0; j < E.length; j++) best = Math.min(best, seg(p, E[j], E[(j + 1) % E.length])); return best; };
      let last = -1;
      for (let i = 0; i < s.pts.length; i++) if (dist(s.pts[i]) > 0.05) last = i;
      settle = last < 0 ? 0 : last + 1 < s.pts.length ? (last + 1) * s.h : null;
    }
    S = { s, settle }; sKey = key; return S;
  }

  function draw() {
    const t = cy.now(), m = rnd(mu.v), a = rnd(x0.v), b = rnd(y0.v);
    const Mu = forMu(m), St = forStart(m, a, b), s = St.s, Y = Mu.Y;
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cc = C('curve'), pc = C('point'), fc = C('function');
    hits = [];
    const ax = axes(ctx, PORT, [-4, 4], [-Y, Y], { xl: 'x', yl: 'y = x′', xc: fc, yc: fc, nx: 4, ny: 4, nice: true });
    line(ctx, ax.X(0), PORT.t, ax.X(0), PORT.b, guide(), 2); line(ctx, PORT.l, ax.Y(0), PORT.r, ax.Y(0), guide(), 2);
    directions(ctx, ax, Mu.f, alpha(vf, 0.6), [13, 13]);
    [[-2.5, 0.5 * Y], [2.5, -0.5 * Y], [-1.5, -0.75 * Y], [1.5, 0.75 * Y]].forEach(([x, y]) => {
      const [p, q] = Mu.f([x, y]);
      hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the direction field at (${u(x, 1)}, ${u(y, 2)}): (x′, y′) = (y, μ(1 − x²)y − x) = (${u(p)}, ${u(q)})` });
    });
    const k = t / H;
    /* the book's trajectories from the edge of its window, faint, each with its state */
    Mu.book.forEach((bs, i) => {
      poly(ctx, ax, bs.pts, alpha(cc, 0.3), 3);
      const p = rider(ctx, ax, at(bs, t), alpha(cc, 0.7), 6);
      const q = bs.pts[Math.min(bs.pts.length - 1, 40)];
      hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 14, name: `a trajectory from (${u(BOOK[i][0], 1)}, ${u(BOOK[i][1], 1)}), on the edge of the book’s window` });
      if (p) hits.push({ x: p.x, y: p.y, r: 12, name: `the state on the trajectory from (${u(BOOK[i][0], 1)}, ${u(BOOK[i][1], 1)}) at t = ${u(t, 1)}` });
    });
    /* the limit cycle */
    if (Mu.cyc) {
      const lp = Mu.cyc.loop;
      poly(ctx, ax, lp, cc, 7);
      let j = 0; lp.forEach((p, i) => { if (p[0] > lp[j][0]) j = i; });
      const top = lp.reduce((p, q) => (q[1] > p[1] ? q : p));
      hits.push({ x: ax.X(top[0]), y: ax.Y(top[1]), r: 16, name: `the limit cycle: a closed trajectory, between x = ${u(-Mu.cyc.xmax)} and ${u(Mu.cyc.xmax)}, period ${u(Mu.cyc.period)}` });
      label(ctx, 'limit cycle', ax.X(lp[j][0]), ax.Y(lp[j][1]), { side: 'right', color: cc, size: 20, gap: 18 });
    }
    /* the reader's trajectory: faint whole, solid up to t, with the state */
    poly(ctx, ax, s.pts, alpha(cc, 0.35), 3);
    poly(ctx, ax, s.pts, alpha(cc, 0.85), 3.5, k + 1);
    const now = at(s, t);
    const rp = rider(ctx, ax, now, cc, 9);
    if (rp) hits.push({ x: rp.x, y: rp.y, r: 16, name: `the state (x(t), y(t)) = (${u(now[0])}, ${u(now[1])}) at t = ${u(t, 1)}` });
    const mid = s.pts[Math.min(s.pts.length - 1, 120)];
    hits.push({ x: ax.X(mid[0]), y: ax.Y(mid[1]), r: 12, name: `the trajectory from (${u(a)}, ${u(b)})` });
    /* the critical point at the origin: hollow (a source) for μ > 0, filled (a center) at μ = 0 */
    dot(ctx, ax.X(0), ax.Y(0), pc, m === 0, 8);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 12, name: m === 0 ? 'the critical point (0, 0), a center' : 'the critical point (0, 0): unstable, every other solution leaves it' });
    const sp = P.draw(ctx, ax, pc);
    if (sp) hits.push({ x: sp.x, y: sp.y, r: 18, name: `the initial point (x(0), y(0)) = (${u(a)}, ${u(b)})` });

    /* x(t) beside it */
    const gx = axes(ctx, GRAPH, [0, T], [-4, 4], { xl: 't', yl: 'x', yc: fc, nx: 6, ny: 4 });
    line(ctx, GRAPH.l, gx.Y(0), GRAPH.r, gx.Y(0), guide(), 2);
    if (Mu.cyc) [Mu.cyc.xmax, -Mu.cyc.xmax].forEach((v) => {
      line(ctx, GRAPH.l, gx.Y(v), GRAPH.r, gx.Y(v), alpha(PAL.ink, 0.4), 2, [10, 10]);
      hits.push({ x: GRAPH.l + 40, y: gx.Y(v), r: 12, name: `x = ${u(v)}, an extreme of x on the limit cycle` });
    });
    const xt = s.pts.map((p, i) => [i * s.h, p[0]]);
    poly(ctx, gx, xt, alpha(fc, 0.3), 3);
    poly(ctx, gx, xt, fc, 5, k + 1);
    if (now) {
      const g = { x: gx.X(t), y: gx.Y(Math.max(-4.2, Math.min(4.2, now[0]))) };
      if (Math.abs(now[0]) <= 4) { dot(ctx, g.x, g.y, PAL.panel, true, 12.5); dot(ctx, g.x, g.y, fc, true, 9); }
      hits.push({ x: g.x, y: g.y, r: 14, name: `x(${u(t, 1)}) = ${u(now[0])}` });
    }
    const x4 = xt[Math.min(xt.length - 1, Math.round(4 / s.h))];
    if (Math.abs(x4[1]) <= 4) hits.push({ x: gx.X(x4[0]), y: gx.Y(x4[1]), r: 12, name: `x(t), the solution with x(0) = ${u(a)}, x′(0) = ${u(b)}` });

    /* the headline: the cycle, and when the reader's solution reaches it */
    const from = `$(${n(a)}, ${n(b)})$`;
    let head;
    if (m === 0) {
      head = !a && !b ? '$\\mu = 0$: $\\kxdprime + \\kx = 0$, a linear center; from the critical point $(0, 0)$ the solution is the constant $\\kx = 0$, $\\ky = 0$.'
        : `$\\mu = 0$: $\\kxdprime + \\kx = 0$, a linear center; from ${from} the trajectory is the circle of radius $${n(Math.hypot(a, b))}$, and no trajectory spirals onto another.`;
    } else {
      const c = Mu.cyc, part = `$\\mu = ${n(m)}$: the limit cycle runs between $\\kx = ${n(-c.xmax)}$ and $${n(c.xmax)}$, period $\\kP \\approx ${n(c.period)}$`;
      if (!a && !b) head = `${part}; from the critical point $(0, 0)$ the solution is the constant $\\kx = 0$, $\\ky = 0$.`;
      else if (St.settle === 0) head = `${part}; from ${from} the solution stays within $0.05$ of it from the start.`;
      else if (St.settle === null) head = `${part}; from ${from} the solution is still more than $0.05$ from it at $t = 30$.`;
      else head = `${part}; from ${from} the solution stays within $0.05$ of it from $t = ${n(St.settle, 1)}$ on.`;
    }
    headline(ctx, head);
    /* the readout: the system at the present state, from the numbers shown */
    if (now) {
      const xr = rnd(now[0]), yr = rnd(now[1]), yp = rnd(m * (1 - xr * xr) * yr - xr);
      ro.set(`t = ${n(t, 1)}:\\quad \\kxprime = \\ky = ${n(yr)},\\quad \\kyprime = \\mu(1 - \\kx^2)\\ky - \\kx = ${n(m)}\\bigl(1 - ${pp(xr)}^2\\bigr)${pp(yr)} - ${par(xr)} = ${n(yp)}`);
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RATE), draw });
})();

/* Figure 8.11 (Example 8.4.2): x′ = y + h x, y′ = −x + h y on the book's square [−1.5, 1.5]², at one scale both ways,
   with h = (x² + y² − 1)² (the example), h = x² + y² − 1 (the paragraph after it) or h = 0 (the linear x′ = y,
   y′ = −x); in polar coordinates r′ = r(r² − 1)², r(r² − 1) or 0. The direction field, the unit circle (a closed
   trajectory in all three), the book's three starts (1.02, 0), (0.9, 0), (0.1, 0) and the reader's (x₀, 0), dragged
   along the x-axis (0.05 to 1.45, a dashed circle at 1, the unit circle), each traced up to the clock with its state.
   Moving: t from 0 to 20 in 6.7 s, hold 1.2 s. The choice bends the field and the traced curves into the next
   system's (choice morph, the curves blended point by point); the arrows are symbolic, the dots the state. From
   (1.02, 0) the squared system leaves the square at t = 10.67 after 1.7 turns (the book: about one and a half),
   the unsquared at t = 1.35; inside, the squared factor's solutions creep out towards r = 1 and the unsquared
   factor's fall into the origin (checked with SciPy). */
(function () {
  const d = sim('sim-limit-cycle-cases', 780);
  const T = 20, RATE = 3, H = 0.01, R = 1.5;
  const BOX = { l: 415, r: 985, t: 130, b: 700 };
  const SYS = { squared: 2, unsquared: 1, linear: 0 };
  const hOf = (p) => (x, y) => (p === 0 ? 0 : (x * x + y * y - 1) ** p);
  const field = (p) => ([x, y]) => { const h = hOf(p)(x, y); return [y + h * x, -x + h * y]; };
  const BOOK = [[1.02, 0], [0.9, 0], [0.1, 0]];
  const sys = choice(d.controls, {
    label: '', key: 'system', value: 'squared', aria: 'the system',
    options: [{ value: 'squared', label: 'squared factor' }, { value: 'unsquared', label: 'unsquared factor' }, { value: 'linear', label: 'linear' }],
  });
  const r0 = ctl(d.controls, { label: 'x_0', cls: 'point', key: 'x0', min: 0.05, max: 1.45, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'the start (x₀, 0) on the x-axis', specials: [{ at: 1, label: 'on the unit circle' }] });
  const P = drag(d, { x: r0, y: 0 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => T, 1.2);
  const cache = new Map();
  const sol = (v, z) => { const key = `${v}|${z[0]}`; if (!cache.has(key)) cache.set(key, solve(field(SYS[v]), z, T, H, 3)); return cache.get(key); };
  /* the part of a solution traced by time t, as a polyline that ends at its state */
  const traced = (s, t) => { const i = Math.min(s.pts.length - 1, Math.floor(t / s.h)), p = at(s, t); return p ? s.pts.slice(0, i + 1).concat([p]) : s.pts.slice(); };
  const circ = Array.from({ length: 241 }, (_, i) => [Math.cos((i / 240) * 2 * Math.PI), Math.sin((i / 240) * 2 * Math.PI)]);
  const NAME = { squared: 'a limit cycle, not asymptotically stable', unsquared: 'an asymptotically unstable limit cycle', linear: 'a closed trajectory, not a limit cycle' };

  function draw() {
    const t = cy.now(), v = sys.value, k = sys.k, was = sys.from ?? v, x0 = rnd(r0.v);
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cc = C('curve'), pc = C('point'), fc = C('function');
    hits = [];
    const ax = axes(ctx, BOX, [-R, R], [-R, R], { xl: 'x', yl: 'y', xc: fc, yc: fc, nx: 6, ny: 6, fx: (q) => u(q, 1), fy: (q) => u(q, 1) });
    line(ctx, ax.X(0), BOX.t, ax.X(0), BOX.b, guide(), 2); line(ctx, BOX.l, ax.Y(0), BOX.r, ax.Y(0), guide(), 2);
    /* the field, bent from the last system's into this one's */
    const fa = field(SYS[was]), fb = field(SYS[v]), e = k < 1 ? F.ease.smooth(k) : 1;
    directions(ctx, ax, (p) => { const A = fa(p), B = fb(p); return [A[0] + (B[0] - A[0]) * e, A[1] + (B[1] - A[1]) * e]; }, alpha(vf, 0.6), [17, 17]);
    [[-1, 1], [1, -1], [0.5, 0.5], [-1.25, -1.25]].forEach(([x, y]) => {
      const [p, q] = fb([x, y]);
      hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `the direction field at (${u(x)}, ${u(y)}): (x′, y′) = (${u(p)}, ${u(q)})` });
    });
    /* the unit circle: a closed trajectory in all three systems; a limit cycle in the first two */
    const lim = (q) => (q === 'linear' ? 0 : 1), w = 4 + 2 * (lim(was) + (lim(v) - lim(was)) * e);
    poly(ctx, ax, circ, cc, w);
    if (v === 'linear') [0.5, 1.35].forEach((rr) => poly(ctx, ax, circ.map(([x, y]) => [rr * x, rr * y]), alpha(cc, 0.3 * sys.a('linear')), 2.5));
    hits.push({ x: ax.X(Math.cos(2.4)), y: ax.Y(Math.sin(2.4)), r: 14, name: `the unit circle, x² + y² = 1: ${NAME[v]}` });
    ['squared', 'unsquared', 'linear'].forEach((q) => sys.only(ctx, q, () => label(ctx, q === 'linear' ? 'closed trajectory' : 'limit cycle', ax.X(0), ax.Y(1), { side: 'above', color: cc, size: 20, gap: 22 })));
    /* the four starts, traced up to t: the book's three faint, the reader's full */
    const starts = BOOK.map((z) => ({ z, book: true })).concat([{ z: [x0, 0], book: false }]);
    let mine = null;
    starts.forEach(({ z, book }) => {
      const sa = sol(was, z), sb = sol(v, z);
      const ta = traced(sa, t), tb = traced(sb, t);
      const pts = e < 1 ? F.lerpPts(ta, tb, e) : tb;
      poly(ctx, ax, pts, book ? alpha(cc, 0.55) : cc, book ? 3 : 4.5);
      const end = pts[pts.length - 1], alive = at(sb, t);
      const shown = alive && inBox(end, R) ? rider(ctx, ax, end, book ? alpha(cc, 0.8) : cc, book ? 7 : 9) : null;
      const where = `(${u(z[0])}, 0)`;
      if (shown) hits.push({ x: shown.x, y: shown.y, r: 14, name: `the state from ${where} at t = ${u(t, 1)}: (${u(end[0])}, ${u(end[1])})` });
      if (book) {
        dot(ctx, ax.X(z[0]), ax.Y(0), pc, false, 7);
        hits.push({ x: ax.X(z[0]), y: ax.Y(0), r: 10, name: `the book’s start ${where}` });
      } else mine = { s: sb, end, alive: alive && inBox(alive, R) };
    });
    /* the book's starts named: (1.02, 0) below the axis, (0.9, 0) above it, (0.1, 0) above */
    text(ctx, '(1.02, 0)', ax.X(1.02) + 10, ax.Y(0) + 26, pc, { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, '(0.9, 0)', ax.X(0.9) - 8, ax.Y(0) - 24, pc, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '(0.1, 0)', ax.X(0.1) + 6, ax.Y(0) + 26, pc, { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    /* the critical point at the origin: unstable for the squared factor, a sink for the unsquared, a center */
    dot(ctx, ax.X(0), ax.Y(0), pc, v !== 'squared', 8);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 10, name: { squared: 'the critical point (0, 0): a spiral source, solutions leave it', unsquared: 'the critical point (0, 0): a spiral sink, solutions inside the circle fall into it', linear: 'the critical point (0, 0): a center' }[v] });
    const sp = P.draw(ctx, ax, pc);
    if (sp) hits.push({ x: sp.x, y: sp.y, r: 18, name: `your start (x₀, 0) = (${u(x0)}, 0)` });

    /* the headline: the circle and the fate of the reader's start */
    const s = mine.s, leave = s.gone < Infinity ? s.gone : (() => { const i = s.pts.findIndex((p) => !inBox(p, R)); return i < 0 ? null : i * s.h; })();
    const from = `$(${n(x0)}, 0)$`, on = Math.abs(x0 - 1) < 1e-9;
    let fate;
    if (v === 'linear') fate = `from ${from} the solution goes round the circle of radius $${n(x0)}$ with period $2\\pi$`;
    else if (on) fate = `from ${from} the solution goes round it, $\\kx = \\cos t$, $\\ky = -\\sin t$, with period $2\\pi$`;
    else if (x0 > 1) fate = leave === null ? `from ${from} the trajectory spirals slowly away from it, still inside the square at $t = 20$` : `from ${from} the trajectory spirals off to infinity, leaving the square at $t = ${n(leave, 2)}$`;
    else fate = v === 'squared' ? `from ${from} the trajectory spirals out towards it` : `from ${from} the trajectory spirals in to the origin`;
    const lead = { squared: 'Squared factor: the unit circle is a limit cycle, not asymptotically stable', unsquared: 'Unsquared factor: the unit circle is an asymptotically unstable limit cycle', linear: '$\\kxprime = \\ky$, $\\kyprime = -\\kx$: every circle about the origin is a closed trajectory, none a limit cycle' }[v];
    headline(ctx, `${lead}; ${fate}.`);
    /* the readout: the system at the reader's state, from the numbers shown */
    const p = mine.alive ? at(s, t) : null;
    if (p) {
      const xr = rnd(p[0]), yr = rnd(p[1]), q = rnd(xr * xr + yr * yr - 1), ex = SYS[v];
      if (ex === 0) ro.set(`t = ${n(t, 1)}:\\quad \\kxprime = \\ky = ${n(yr)},\\quad \\kyprime = -\\kx = ${n(-xr)}`, '', { form: 'linear' });
      else {
        const hh = ex === 2 ? `${pp(q)}^2` : pp(q), hv = ex === 2 ? q * q : q, sym = ex === 2 ? '(\\kx^2 + \\ky^2 - 1)^2' : '(\\kx^2 + \\ky^2 - 1)';
        const xp = rnd(yr + hv * xr), yp = rnd(-xr + hv * yr);
        ro.set(`t = ${n(t, 1)}:\\quad \\kx^2 + \\ky^2 - 1 = ${pp(xr)}^2 + ${pp(yr)}^2 - 1 = ${n(q)},\\quad \\kxprime = \\ky + ${sym}\\kx = ${n(yr)} + ${hh}${pp(xr)} = ${n(xp)},\\quad \\kyprime = -\\kx + ${sym}\\ky = ${n(-xr)} + ${hh}${pp(yr)} = ${n(yp)}`, '', { form: v });
      }
    } else ro.set(`t = ${n(t, 1)}:\\quad \\text{the solution from } (${n(x0)}, 0) \\text{ has left the square at } t = ${n(leave, 2)}`, '', { form: 'gone' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RATE), draw });
})();

/* Sim (Examples 8.4.3–8.4.5): the sign of the divergence ∂f/∂x + ∂g/∂y over [−2, 2]², at one scale both ways, for
   the example chosen: where it is positive the plane is filled in `region`, where negative hatched in `region`, where
   zero dashed; the direction field over it; the critical points; and a point the reader drags, its divergence
   written live. 8.4.3: y² eˣ, positive but on y = 0. 8.4.4: 2(y − x), the two half-planes, and on the line x = y the
   vectors drawn long from the line, all pointing into y ≥ x (y′ − x′ = 2x² ≥ 0 there). 8.4.5: 4x² + 4y² − 2 on R,
   the outside of the circle of radius 1/√2, which is exactly where it is positive; the disc inside is the hole cut
   out of R, left blank, and the unit circle, a closed trajectory in R, drawn in `curve`. Still: the sign regions are
   the idea and nothing in them moves; the choice crossfades the regions and bends the field. */
(function () {
  const d = sim('sim-divergence-sign', 760);
  const BOX = { l: 350, r: 910, t: 120, b: 680 }, L = 2;
  const EX = {
    '8.4.3': { f: ([x, y]) => [y + y * y * Math.exp(x), x], div: (x, y) => y * y * Math.exp(x), crit: [[0, 0, false, 'a saddle'], [0, -1, false, 'a spiral source']] },
    '8.4.4': { f: ([x, y]) => [-y - x * x, -x + y * y], div: (x, y) => 2 * (y - x), crit: [[0, 0, false, 'a saddle'], [1, -1, true, 'a sink']] },
    '8.4.5': { f: ([x, y]) => { const h = x * x + y * y - 1; return [y + h * x, -x + h * y]; }, div: (x, y) => 4 * x * x + 4 * y * y - 2, crit: [[0, 0, true, 'a spiral sink, in the hole, outside R']] },
  };
  const ex = choice(d.controls, {
    label: '\\text{example}', key: 'example', value: '8.4.4', aria: 'the example',
    options: Object.keys(EX).map((k) => ({ value: k, label: k })),
  });
  const px = ctl(d.controls, { label: 'x', cls: 'point', key: 'x', min: -2, max: 2, step: 0.05, value: 0.5, unit: '', dec: 2, aria: 'the x of the point' });
  const py = ctl(d.controls, { label: 'y', cls: 'point', key: 'y', min: -2, max: 2, step: 0.05, value: 1.2, unit: '', dec: 2, aria: 'the y of the point' });
  const P = drag(d, { x: px, y: py });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const HOLE = Math.SQRT1_2;
  const circle = (r) => Array.from({ length: 181 }, (_, i) => [r * Math.cos((i / 180) * 2 * Math.PI), r * Math.sin((i / 180) * 2 * Math.PI)]);
  const path = (ctx, ax, pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.closePath(); };
  /* hatching: diagonal lines across the box, under a clip the caller has set */
  const hatch = (ctx, color) => { ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath(); for (let s = -700; s < 700; s += 16) { ctx.moveTo(BOX.l + s, BOX.b); ctx.lineTo(BOX.l + s + 600, BOX.t); } ctx.stroke(); };
  /* each example's sign regions, as closed polygons in the plane */
  function regions(ctx, ax, key, rc) {
    const pos = (pts) => { path(ctx, ax, pts); ctx.fillStyle = alpha(rc, 0.18); ctx.fill(); };
    const neg = (pts) => { ctx.save(); path(ctx, ax, pts); ctx.clip(); hatch(ctx, alpha(rc, 0.5)); ctx.restore(); };
    const sq = [[-L, -L], [L, -L], [L, L], [-L, L]];
    clip(ctx, BOX, () => {
      if (key === '8.4.3') { pos(sq); line(ctx, BOX.l, ax.Y(0), BOX.r, ax.Y(0), rc, 3, [10, 10]); }
      if (key === '8.4.4') { pos([[-L, -L], [L, L], [-L, L]]); neg([[-L, -L], [L, -L], [L, L]]); line(ctx, ax.X(-L), ax.Y(-L), ax.X(L), ax.Y(L), rc, 3, [10, 10]); }
      if (key === '8.4.5') {
        /* R: the square less the disc x² + y² ≤ 1/2, filled with the even–odd rule */
        ctx.beginPath(); sq.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.closePath();
        circle(HOLE).forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.closePath();
        ctx.fillStyle = alpha(rc, 0.18); ctx.fill('evenodd');
        ctx.save(); path(ctx, ax, circle(HOLE)); ctx.setLineDash([10, 10]); ctx.strokeStyle = rc; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
      }
    });
  }
  /* the legend, right of the plane: what each fill means for the example shown */
  const LEG = { x: 960, y: 190 };
  function legend(ctx, key, rc) {
    const rows = [];
    rows.push({ kind: 'pos', text: key === '8.4.5' ? 'divergence > 0: R' : 'divergence > 0' });
    if (key === '8.4.4') rows.push({ kind: 'neg', text: 'divergence < 0' });
    rows.push({ kind: 'zero', text: key === '8.4.3' ? 'divergence = 0: y = 0' : key === '8.4.4' ? 'divergence = 0: x = y' : 'the hole cut out of R' });
    rows.forEach((r, i) => {
      const y = LEG.y + i * 50, sw = { l: LEG.x, r: LEG.x + 44, t: y - 16, b: y + 16 };
      ctx.save();
      if (r.kind === 'pos') { ctx.fillStyle = alpha(rc, 0.18); ctx.fillRect(sw.l, sw.t, 44, 32); }
      if (r.kind === 'neg') { ctx.beginPath(); ctx.rect(sw.l, sw.t, 44, 32); ctx.clip(); ctx.strokeStyle = alpha(rc, 0.5); ctx.lineWidth = 2; ctx.beginPath(); for (let s = -40; s < 60; s += 16) { ctx.moveTo(sw.l + s, sw.b); ctx.lineTo(sw.l + s + 32, sw.t); } ctx.stroke(); }
      ctx.restore();
      if (r.kind === 'zero') line(ctx, sw.l, y, sw.r, y, rc, 3, [10, 10]);
      else { ctx.save(); ctx.strokeStyle = alpha(rc, 0.6); ctx.lineWidth = 1.5; ctx.strokeRect(sw.l, sw.t, 44, 32); ctx.restore(); }
      text(ctx, r.text, sw.r + 14, y, rc, { size: 19, weight: 600, align: 'left' });
    });
  }

  function draw() {
    const v = ex.value, was = ex.from ?? v, k = ex.k, e = k < 1 ? F.ease.smooth(k) : 1;
    const a = rnd(px.v), b = rnd(py.v), E = EX[v];
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cc = C('curve'), pc = C('point'), rc = C('region'), fc = C('function');
    hits = [];
    const ax = axes(ctx, BOX, [-L, L], [-L, L], { xl: 'x', yl: 'y', xc: fc, yc: fc, nx: 4, ny: 4 });
    /* the sign regions, the old example's fading out as the new one's fade in */
    Object.keys(EX).forEach((q) => ex.only(ctx, q, () => { regions(ctx, ax, q, rc); legend(ctx, q, rc); }, [0, 0]));
    line(ctx, ax.X(0), BOX.t, ax.X(0), BOX.b, guide(), 2); line(ctx, BOX.l, ax.Y(0), BOX.r, ax.Y(0), guide(), 2);
    /* the field, bent from the last example's into this one's */
    const fa = EX[was].f, fb = E.f;
    directions(ctx, ax, (p) => { const A = fa(p), B = fb(p); return [A[0] + (B[0] - A[0]) * e, A[1] + (B[1] - A[1]) * e]; }, alpha(vf, 0.55), [15, 15]);
    /* 8.4.4: the vectors on the line x = y, drawn long from the line: every one points into y ≥ x */
    ex.only(ctx, '8.4.4', () => {
      for (let s = -1.75; s <= 1.76; s += 0.35) {
        if (Math.abs(s) < 0.1) continue;
        const [p, q] = EX['8.4.4'].f([s, s]), m = Math.hypot(p, q), X0 = ax.X(s), Y0 = ax.Y(s);
        arrow(ctx, X0, Y0, X0 + (p / m) * 56, Y0 - (q / m) * 56, vf, 4);
        hits.push({ x: X0 + (p / m) * 28, y: Y0 - (q / m) * 28, r: 14, name: `on the line x = y at (${u(s)}, ${u(s)}): (x′, y′) = (${u(p)}, ${u(q)}), and y′ − x′ = 2x² = ${u(2 * s * s)} ≥ 0, so it points into y ≥ x` });
      }
    }, [0, 0]);
    /* 8.4.5: the unit circle, a closed trajectory inside R */
    ex.only(ctx, '8.4.5', () => clip(ctx, BOX, () => { ctx.beginPath(); circle(1).forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.strokeStyle = cc; ctx.lineWidth = 5; ctx.stroke(); }), [0, 0]);
    if (v === '8.4.5') {
      hits.push({ x: ax.X(Math.cos(2.2)), y: ax.Y(Math.sin(2.2)), r: 14, name: 'the unit circle, a closed trajectory in R: on it x′ = y, y′ = −x' });
      hits.push({ x: ax.X(0.35), y: ax.Y(-0.2), r: 16, name: 'the hole: the disc x² + y² ≤ 1/2, cut out of R, so R is not simply connected (inside it the divergence is negative)' });
    }
    if (v === '8.4.3') hits.push({ x: ax.X(-1.5), y: ax.Y(0), r: 12, name: 'the line y = 0, where the divergence y²eˣ is zero' });
    if (v === '8.4.4') hits.push({ x: ax.X(1.5), y: ax.Y(-1), r: 18, name: 'the half-plane y < x, where the divergence 2(y − x) is negative' }, { x: ax.X(-1), y: ax.Y(1.5), r: 18, name: 'the half-plane y > x, where the divergence 2(y − x) is positive' });
    /* the critical points: stable filled, unstable hollow */
    E.crit.forEach(([x, y, stable, what]) => {
      dot(ctx, ax.X(x), ax.Y(y), pc, stable, 8);
      hits.push({ x: ax.X(x), y: ax.Y(y), r: 12, name: `the critical point (${u(x, 0)}, ${u(y, 0)}): ${what}` });
    });
    const sp = P.draw(ctx, ax, pc);
    if (sp) hits.push({ x: sp.x, y: sp.y, r: 18, name: `the point (${u(a)}, ${u(b)})` });

    /* the readout and the headline, from the point's numbers */
    const dv = E.div(a, b), at0 = `$(${n(a)}, ${n(b)})$`;
    const sign = (q) => (Math.abs(q) < 1e-9 ? '= 0' : q > 0 ? '> 0' : '< 0');
    let tex, head;
    if (v === '8.4.3') {
      const r2 = rnd(dv), exact = Math.abs(dv) < 1e-12;
      tex = `\\kpfx + \\kpgy = \\ky^2 e^{\\kx} + 0 = ${pp(b)}^2 e^{${n(a)}} + 0 ${exact ? '=' : '\\approx'} ${n(r2)} ${sign(dv)}`;
      head = Math.abs(b) < 1e-9 ? `Example 8.4.3: at ${at0}, on the line $\\ky = 0$, the divergence $\\ky^2 e^{\\kx}$ is $0$; it is positive everywhere else, so no closed trajectory.`
        : `Example 8.4.3: at ${at0} the divergence $\\ky^2 e^{\\kx}$ is about $${n(r2)} > 0$; it is positive on the whole plane but the line $\\ky = 0$, so no closed trajectory.`;
    } else if (v === '8.4.4') {
      const r2 = rnd(dv);
      tex = `\\kpfx + \\kpgy = -2\\kx + 2\\ky = 2(-\\kx + \\ky) = 2\\bigl(-${par(a)} + ${par(b)}\\bigr) = ${n(r2)} ${sign(dv)}`;
      head = `Example 8.4.4: at ${at0} the divergence $2(\\ky - \\kx)$ is $${n(r2)} ${sign(dv)}$; on the line $\\kx = \\ky$ the arrows all point into $\\ky \\geq \\kx$, so no closed trajectory has points on both sides.`;
    } else {
      const r2 = rnd(dv), inside = a * a + b * b <= 0.5 + 1e-12;
      tex = `\\kpfx + \\kpgy = 4\\kx^2 + 4\\ky^2 - 2 = 4${pp(a)}^2 + 4${pp(b)}^2 - 2 = ${n(r2)} ${sign(dv)}`;
      head = inside ? `Example 8.4.5: at ${at0}, in the hole cut out of $\\kR$, the divergence $4\\kx^2 + 4\\ky^2 - 2$ is $${n(r2)}$; on $\\kR$ it is positive, yet the unit circle is a closed trajectory: $\\kR$ is not simply connected.`
        : `Example 8.4.5: at ${at0}, in $\\kR$, the divergence $4\\kx^2 + 4\\ky^2 - 2$ is $${n(r2)} > 0$, yet the unit circle is a closed trajectory: $\\kR$ has a hole, so it is not simply connected.`;
    }
    headline(ctx, head);
    ro.set(tex, undefined, { form: v });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
