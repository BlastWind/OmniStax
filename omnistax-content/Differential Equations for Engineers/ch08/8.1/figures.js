/* Figures for section 8.1 Linearization, critical points, and equilibria. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, drag, dot, line, text, headline, register, readout, hover, cycle, space } = F;
const sim = (id, H) => F.sim(root, id, H);
const clamp01 = (k) => Math.max(0, Math.min(1, k));

/* A number for a readout or a headline: rounded to `dec` places with trailing zeros dropped, and whether that
   rounding is exact (so the figure writes = where it is and ≈ where it is not). */
function num(v, dec = 2) {
  const r = Math.round(v * 10 ** dec) / 10 ** dec, exact = Math.abs(v - r) < 1e-9 * Math.max(1, Math.abs(v));
  let s = r.toFixed(dec); if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  if (s === '-0') s = '0';
  return { s, exact };
}
const minus = (s) => s.replace(/-/g, '−');

/* The system of Examples 8.1.1 and 8.1.2, x′ = y, y′ = −x + x², and one RK4 step of it (forward or, with h < 0,
   backward in time). H(x, y) = y²/2 + x²/2 − x³/3 is constant along every trajectory (dH/dt = 0, checked in SymPy);
   the loop through the saddle (1, 0) is its level 1/6, which meets the x-axis at x = −1/2. */
const field = (p) => [p[1], -p[0] + p[0] * p[0]];
const Hof = (x, y) => y * y / 2 + x * x / 2 - x * x * x / 3;
const HS = 1 / 6;
function rk4(p, h, f = field) {
  const k1 = f(p), k2 = f([p[0] + h / 2 * k1[0], p[1] + h / 2 * k1[1]]), k3 = f([p[0] + h / 2 * k2[0], p[1] + h / 2 * k2[1]]), k4 = f([p[0] + h * k3[0], p[1] + h * k3[1]]);
  return [p[0] + h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), p[1] + h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
}
/* points every h of model time from s, until the path leaves the square |x|, |y| ≤ lim, comes within near of a
   critical point, or runs for tcap */
function trace(s, h, tcap, lim, near = 1e-3, f = field, crits = [[0, 0], [1, 0]]) {
  const pts = [s.slice()]; let p = s.slice();
  const n = Math.ceil(tcap / Math.abs(h));
  for (let i = 0; i < n; i++) {
    p = rk4(p, h, f); pts.push(p);
    if (!Number.isFinite(p[0]) || Math.abs(p[0]) > lim[0] || Math.abs(p[1]) > lim[1]) break;
    if (crits.some((c) => Math.hypot(p[0] - c[0], p[1] - c[1]) < near)) break;
  }
  return pts;
}
function stroke(ctx, ax, pts, color, w, dash) {
  if (pts.length < 2) return;
  const { box } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach((q, i) => { const X = ax.X(q[0]), Y = ax.Y(Math.max(-50, Math.min(50, q[1]))); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
  ctx.stroke(); ctx.restore();
}
/* the state riding a path at index position f (points h apart): a dot with a short fading tail */
function rider(ctx, ax, pts, f, color, a = 1, tail = 4) {
  if (!(a > 0.02) || pts.length < 2) return null;
  const at = (g) => { const c = Math.max(0, Math.min(pts.length - 1, g)), i = Math.min(pts.length - 2, Math.floor(c)), k = c - i, p = pts[i], q = pts[i + 1]; return [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k]; };
  const p = at(f), X = ax.X(p[0]), Y = ax.Y(p[1]), { box } = ax;
  if (X < box.l - 2 || X > box.r + 2 || Y < box.t - 2 || Y > box.b + 2) return null;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  let prev = [X, Y];
  for (let j = 1; j <= 6; j++) {
    const q = at(f - tail * j), Q = [ax.X(q[0]), ax.Y(q[1])];
    line(ctx, prev[0], prev[1], Q[0], Q[1], alpha(color, a * (1 - j / 7) * 0.8), 6 - 0.6 * j); prev = Q;
  }
  ctx.globalAlpha *= a; dot(ctx, X, Y, PAL.panel, true, 11); dot(ctx, X, Y, color, true, 7.5);
  ctx.restore();
  return { x: X, y: Y };
}

/* Figure 8.1 (Example 8.1.1): the vector field of x′ = y, y′ = −x + x² on the book's window [−2, 2]², each arrow
   scaled by one factor so the longest is 0.85 of a cell (as field2 draws it: longer away from the critical points, as
   the book's are); the book's trajectories faint (closed curves round the origin, the loop through (1, 0) and its two
   branches on the right, curves that go off towards infinity); the two critical points, (0, 0) filled (the curves stay
   near it) and (1, 0) hollow (they leave it). The reader drags the start (x₀, y₀), default (0.5, 0) inside the loop;
   its trajectory is traced back and forward (RK4, step 0.005) faint, and the state rides it forward from t = 0 as the
   clock runs, so the reader sees which starts circle the origin and which go off; a start on a critical point is the
   equilibrium solution, a dot that never moves. Moving: t runs 0 to 12 in 5 s (or until the state leaves the square),
   then holds. Specials: the critical points' coordinates, and on each slider the value that puts the start on the loop
   through (1, 0) or its branches (H = 1/6), the boundary between circling and going off. At (0.5, 0) the state comes
   back after t ≈ 6.90 (checked numerically). */
(function () {
  const d = sim('sim-portrait-x2', 850);
  const BOX = { l: 375, r: 1025, t: 118, b: 768 }, LIM = 2, H0 = 0.005, TMAX = 12, RATE = TMAX / 5;
  const h = (x) => x * x / 2 - x * x * x / 3;
  const live = (f) => () => { const x = f(); return x === null || !Number.isFinite(x) || Math.abs(x) > LIM ? null : x; };
  /* on the x₀ slider: the x where the start (x, y₀) lies on H = 1/6, one root of h(x) = 1/6 − y₀²/2 in each interval
     where h is monotone; on the y₀ slider: y = ±√(2(1/6 − h(x₀))) */
  const xOnLoop = (lo, hi) => live(() => { const c = HS - y0.v * y0.v / 2; return Math.abs(y0.v) < 1e-12 ? null : F.solve((x) => h(x) - c, lo, hi); });
  const yOnLoop = (sg) => live(() => { const r = 2 * (HS - h(x0.v)); return r > 1e-12 ? sg * Math.sqrt(r) : null; });
  const onAxis = (x) => live(() => (Math.abs(y0.v) < 1e-12 ? x : null));
  const x0 = ctl(d.controls, {
    label: 'x_0', cls: 'point', key: 'x0', min: -LIM, max: LIM, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'the starting x, x(0)',
    specials: [{ at: onAxis(0), label: 'critical point (0, 0)' }, { at: onAxis(1), label: 'critical point (1, 0)' }, { at: onAxis(-0.5), label: 'on the loop through (1, 0)' },
      { at: xOnLoop(-0.5, 0), label: 'on the loop through (1, 0)' }, { at: xOnLoop(0, 1), label: 'on the loop through (1, 0)' }, { at: xOnLoop(1, LIM), label: 'on a branch through (1, 0)' }],
    onInput: () => cy.reset(),
  });
  const y0 = ctl(d.controls, {
    label: 'y_0', cls: 'point', key: 'y0', min: -LIM, max: LIM, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the starting y, y(0)',
    specials: [{ at: 0, label: 'the x-axis, where both critical points lie' }, { at: yOnLoop(1), label: 'through (1, 0)' }, { at: yOnLoop(-1), label: 'through (1, 0)' }],
    onInput: () => cy.reset(),
  });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  let Tcur = TMAX;
  const cy = cycle(() => Tcur, 1.2);

  /* the book's trajectories, traced once both ways across the window */
  const BOOK = [
    [0.3, 0], [0.6, 0], [0.85, 0],          /* closed curves round the origin */
    [-0.5, 0],                               /* the loop through (1, 0) */
    [1 + 1e-4, -1e-4], [1 + 1e-4, 1e-4],     /* the loop's two branches on the right */
    [1.3, 0], [1.65, 0],                     /* below the loop's level, right of the saddle: they turn back and go off */
    [-0.8, 0], [-1.2, 0], [-1.65, 0],        /* above it: round the left and off to the upper right */
  ].map((s) => { const b = trace(s, -0.01, 30, [2.6, 2.6], 2e-4), f = trace(s, 0.01, 30, [2.6, 2.6], 2e-4); return b.reverse().concat(f.slice(1)); });

  /* where the start leads: an equilibrium, a closed curve (with its period), the loop or a branch into the saddle, or
     off towards infinity (with the time it leaves the square) */
  let key = '', S = null;
  function study(a, b) {
    const k = `${a},${b}`; if (k === key) return S; key = k;
    const crit = Math.abs(b) < 1e-12 && (Math.abs(a) < 1e-12 || Math.abs(a - 1) < 1e-12);
    const fwd = crit ? [[a, b]] : trace([a, b], H0, TMAX, [2.6, 2.6], 1e-4);
    const back = crit ? [[a, b]] : trace([a, b], -H0, TMAX, [2.6, 2.6], 1e-4).reverse();
    const E = Hof(a, b);
    let kind, T = null, out = null;
    if (crit) kind = a < 0.5 ? 'eq0' : 'eq1';
    else if (Math.abs(E - HS) < 1e-7 && (a < 1 || b < 0)) kind = a < 1 ? 'loop' : 'branch';
    else if (E < HS && a < 1) {
      kind = 'closed';
      /* the angle about the origin falls steadily for x < 1 (θ′ = (−x² + x³ − y²)/r² < 0), so the period is the time
         it takes to fall by 2π */
      let p = [a, b], ang = 0, t = 0; const hh = 0.002;
      for (let i = 0; i < 200000 && t < 200; i++) {
        const q = rk4(p, hh), da = Math.atan2(p[0] * q[1] - p[1] * q[0], p[0] * q[0] + p[1] * q[1]);
        if (ang + da <= -2 * Math.PI) { T = t + hh * ((-2 * Math.PI - ang) / da); break; }
        ang += da; t += hh; p = q;
      }
    } else {
      kind = 'off';
      const i = fwd.findIndex((q) => Math.abs(q[0]) > LIM || Math.abs(q[1]) > LIM);
      if (i > 0) { const p = fwd[i - 1], q = fwd[i], g = (z) => Math.max(Math.abs(z[0]), Math.abs(z[1])) - LIM; out = (i - 1 + g(p) / (g(p) - g(q))) * H0; }
    }
    S = { fwd, back, kind, T, out, E };
    return S;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cc = C('curve'), pc = C('point');
    const a = x0.v, b = y0.v, St = study(a, b);
    Tcur = St.kind === 'off' && St.out !== null ? Math.min(TMAX, St.out + 0.4) : TMAX;
    const t = cy.now(), tt = Number.isFinite(t) ? Math.min(t, Tcur) : Tcur;
    hits = [];
    const ax = axes(ctx, BOX, [-LIM, LIM], [-LIM, LIM], { xl: 'x', yl: 'y', xc: C('function'), yc: C('function'), nx: 4, ny: 4 });
    space.field2(ctx, ax, field, alpha(vf, 0.7), { n: [15, 15], w: 2.5 });
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      const [u, v] = field([i, j]);
      if (u || v) hits.push({ x: ax.X(i), y: ax.Y(j), r: 12, name: minus(`the vector field at (${i}, ${j}): (y, −x + x²) = (${u}, ${v})`) });
    }
    /* the book's trajectories, faint */
    const k = F.arrival(d), sols = clamp01((k - 0.3) / 0.7);
    if (sols > 0) BOOK.forEach((pts, i) => {
      stroke(ctx, ax, F.partial(pts, sols), alpha(cc, 0.32), 2.5);
      const q = pts[Math.floor(pts.length * 0.3)];
      if (q && Math.abs(q[0]) < LIM && Math.abs(q[1]) < LIM) hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 10, name: i === 3 ? 'the loop through the critical point (1, 0)' : i < 3 ? 'a closed trajectory round the origin' : i < 6 ? 'a trajectory into or out of (1, 0)' : 'a trajectory that goes off towards infinity' });
    });
    /* the reader's trajectory: all of it faint, forward from the start solid up to the clock, the state riding it */
    const whole = St.back.concat(St.fwd.slice(1));
    stroke(ctx, ax, whole, alpha(cc, 0.55), 3);
    const n = Math.min(St.fwd.length - 1, Math.round(tt / H0));
    if (St.fwd.length > 1) stroke(ctx, ax, St.fwd.slice(0, n + 1), cc, 5);
    /* the critical points: (0, 0) filled, since the trajectories stay near it; (1, 0) hollow, since they leave it */
    const crits = [[0, 0, true, 'the critical point (0, 0): x′ = 0 and y′ = 0 there'], [1, 0, false, 'the critical point (1, 0): x′ = 0 and y′ = 0 there']];
    crits.forEach(([x, y, filled, name]) => {
      dot(ctx, ax.X(x), ax.Y(y), pc, filled, 10);
      hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name });
    });
    text(ctx, '(0, 0)', ax.X(0) - 16, ax.Y(0) + 26, pc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '(1, 0)', ax.X(1) + 16, ax.Y(0) + 26, pc, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    const sp = P.draw(ctx, ax, pc);
    if (sp) hits.push({ x: sp.x, y: sp.y, r: 18, name: minus(`the starting point (x(0), y(0)) = (${num(a).s}, ${num(b).s})`) });
    if (St.fwd.length > 1) {
      const r = rider(ctx, ax, St.fwd, tt / H0, cc, 1, 10);
      if (r) hits.push({ x: r.x, y: r.y, r: 14, name: `the state (x(t), y(t)) at t = ${num(tt, 1).s}, moving along its trajectory` });
    } else {
      /* an equilibrium solution: the state sits on the critical point */
      dot(ctx, ax.X(a), ax.Y(b), PAL.panel, true, 11); dot(ctx, ax.X(a), ax.Y(b), cc, true, 7.5);
      hits.push({ x: ax.X(a), y: ax.Y(b), r: 14, name: `the state, which stays at (${num(a).s}, ${num(b).s}) for all t` });
    }

    /* the headline: what the start leads to */
    const A = num(a), B = num(b), pt = `$(x_0, y_0) ${A.exact && B.exact ? '=' : '\\approx'} (${A.s}, ${B.s})$`;
    let head;
    if (St.kind === 'eq0' || St.kind === 'eq1') {
      const xs = St.kind === 'eq0' ? '0' : '1';
      head = `$(${xs}, 0)$ is a critical point: $\\kxprime = 0$ and $\\kyprime = 0$, so the equilibrium solution $\\kx(t) = ${xs}$, $\\ky(t) = 0$ never moves.`;
    } else if (St.kind === 'closed') {
      head = St.T ? `From ${pt}, the trajectory is a closed curve: the state circles the origin and is back after $t \\approx ${num(St.T).s}$.`
        : `From ${pt}, the trajectory is a closed curve round the origin.`;
    } else if (St.kind === 'loop') head = `From ${pt}, the trajectory is the loop through $(1, 0)$: the state creeps towards that critical point and never reaches it.`;
    else if (St.kind === 'branch') head = `From ${pt}, the trajectory runs into the critical point $(1, 0)$, closer and closer as $t$ grows.`;
    else head = St.out !== null && St.out <= TMAX ? `From ${pt}, the trajectory goes off towards infinity: the state leaves the square at $t \\approx ${num(St.out).s}$.`
      : `From ${pt}, the trajectory goes off towards infinity.`;
    headline(ctx, head);

    /* the readout: the vector field at the start, from the numbers shown */
    const x2 = a * a, g = -a + x2;
    const X2 = num(x2, A.exact ? 4 : 3), G = num(g, A.exact ? 4 : 3), eq = A.exact && B.exact ? '=' : '\\approx';
    const neg = (z) => (z.s.startsWith('-') ? `(${z.s})` : z.s);
    ro.set(`\\text{at } (${A.s}, ${B.s}):\\quad \\kxprime = \\ky ${eq} ${B.s},\\quad \\kyprime = -\\kx + \\kx^2 ${eq} -${neg(A)} + ${X2.s} ${eq} ${G.s}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RATE), draw });
})();

/* Figure 8.2 (Example 8.1.2): the linearization as a zoom. Left, the portrait of x′ = y, y′ = −x + x² in the square of
   half-width w about the chosen critical point (x₀, 0); right, its linearization [u v]′ = J[u v] on [−w, w]², with
   J = [0 1; −1 0] at (0, 0) (circles) and J = [0 1; 1 0] at (1, 0) (a saddle, its lines v = ±u drawn as the book draws
   them). Both panes carry the field (field2, scaled per pane) and the trajectories through the same starting points,
   placed at fixed fractions of w (u, v) from the critical point, with the state riding each forward in time; the
   nonlinear ones by RK4 (step 0.01), the linear ones exactly (e^{tJ}). In shifted variables the nonlinear field is
   (v, ±u + u²) against the linear (v, ±u): they differ by u² ≤ w², while the linear arrows reach √2 w, so the gap is at
   most w/√2 of the largest arrow (71 % at the book's w = 1, 14 % at w = 0.2); the headline says so. The choice
   crossfades the two critical points' pictures; the flow is steady and endless. */
(function () {
  const d = sim('sim-linearizations', 740);
  const L = { l: 120, r: 640, t: 130, b: 650 }, R = { l: 800, r: 1320, t: 130, b: 650 };
  const RATE = 1.1, H1 = 0.01;
  const POINTS = { o: { x0: 0, sgn: -1, name: '(0, 0)' }, s: { x0: 1, sgn: 1, name: '(1, 0)' } };
  const pick = choice(d.controls, {
    label: 'critical point', key: 'point', value: 's', aria: 'the critical point to zoom into',
    options: [{ value: 'o', label: '(0, 0)' }, { value: 's', label: '(1, 0)' }],
  });
  const w = ctl(d.controls, { label: 'w', cls: '', key: 'w', min: 0.1, max: 1.5, step: 0.05, value: 1, unit: '', dec: 2, detents: [1], aria: 'the half-width w of the square about the critical point' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => Infinity, 0);

  /* seeds as fractions of w in (u, v): four on one ray for the circles, four on the axes for the saddle's
     hyperbolas, and for the saddle the four half-lines of its eigenvectors (1, 1) (out) and (1, −1) (in) */
  const SEEDS = { o: [[0.25, 0], [0.5, 0], [0.75, 0], [0.95, 0]], s: [[0.9, 0], [-0.9, 0], [0, 0.9], [0, -0.9]] };
  const HALVES = [[1, 1], [-1, -1], [1, -1], [-1, 1]];
  /* the linear flow e^{tJ} for J = [0 1; s 0]: s = −1 rotation, s = 1 cosh/sinh */
  const lin = (sg, p, t) => (sg < 0 ? [p[0] * Math.cos(t) + p[1] * Math.sin(t), -p[0] * Math.sin(t) + p[1] * Math.cos(t)]
    : [p[0] * Math.cosh(t) + p[1] * Math.sinh(t), p[0] * Math.sinh(t) + p[1] * Math.cosh(t)]);
  function linPath(sg, s, W) {
    if (sg < 0) { const n = Math.round(2 * Math.PI / H1); return { pts: Array.from({ length: n + 1 }, (_, i) => lin(sg, s, i * H1)), closed: true }; }
    const go = (dir) => { const out = []; for (let i = 1; i < 4000; i++) { const q = lin(sg, s, dir * i * H1); out.push(q); if (Math.max(Math.abs(q[0]), Math.abs(q[1])) > 1.2 * W || Math.hypot(q[0], q[1]) < 0.004 * W) break; } return out; };
    return { pts: go(-1).reverse().concat([s], go(1)), closed: false };
  }
  /* the nonlinear flow in shifted variables about (x₀, 0): u′ = v, v′ = −(x₀ + u) + (x₀ + u)² */
  function nonPath(x0, s, W, closedHint) {
    const f = (p) => [p[1], -(x0 + p[0]) + (x0 + p[0]) * (x0 + p[0])];
    const crits = [[-x0, 0], [1 - x0, 0]], lim = [1.2 * W, 1.2 * W];
    if (closedHint && Hof(x0 + s[0], s[1]) < HS && x0 + s[0] < 1) {
      /* a closed trajectory: one period, found by the angle about the origin falling by 2π */
      const pts = [s.slice()]; let p = s.slice(), ang = 0;
      for (let i = 0; i < 20000; i++) {
        const q = rk4(p, H1, f); ang += Math.atan2(p[0] * q[1] - p[1] * q[0], p[0] * q[0] + p[1] * q[1]); p = q; pts.push(q);
        if (ang <= -2 * Math.PI || Math.abs(q[0]) > lim[0] || Math.abs(q[1]) > lim[1]) break;
      }
      if (ang <= -2 * Math.PI) return { pts, closed: true };
    }
    const b = trace(s, -H1, 25, lim, 0.004 * W, f, crits), fw = trace(s, H1, 25, lim, 0.004 * W, f, crits);
    return { pts: b.reverse().concat(fw.slice(1)), closed: false };
  }
  const cache = {};
  function picture(key, W) {
    const c = cache[key]; if (c && c.W === W) return c;
    const P = POINTS[key], sg = P.sgn;
    const seeds = SEEDS[key].map(([a, b]) => [a * W, b * W]);
    const left = seeds.map((s) => nonPath(P.x0, s, W, sg < 0)), right = seeds.map((s) => linPath(sg, s, W));
    if (sg > 0) HALVES.forEach(([a, b]) => {
      /* the straight solutions of the linearization, and the nonlinear system's own curves into and out of (1, 0),
         traced from just off the critical point along the same eigenvector */
      const e = 1e-3 * W, dir = a * b > 0 ? 1 : -1;
      const nl = trace([a * e, b * e], dir * H1, 30, [1.2 * W, 1.2 * W], 1e-9, (p) => [p[1], -(1 + p[0]) + (1 + p[0]) * (1 + p[0])], [[-1, 0]]);
      /* time along the straight line: r(t) = r₀e^{±t}, so equal steps of log r */
      const lnT = []; const r0 = 0.004 * W, r1 = 1.2 * W * Math.SQRT2, N = Math.ceil(Math.log(r1 / r0) / H1);
      for (let i = 0; i <= N; i++) { const r = r0 * Math.exp(i * H1); lnT.push([a * r / Math.SQRT2, b * r / Math.SQRT2]); }
      left.push({ pts: dir > 0 ? nl : nl.slice().reverse(), closed: false, half: true });
      right.push({ pts: dir > 0 ? lnT : lnT.slice().reverse(), closed: false, half: true });
    });
    cache[key] = { W, left, right };
    return cache[key];
  }
  const ride = (ctx, ax, k, tm, color, a) => {
    const span = k.pts.length - 1; if (span < 3) return null;
    const K = k.closed ? 3 : k.half ? 1 : 2, out = [];
    for (let j = 0; j < K; j++) {
      const f = ((((tm / H1) + (j * span) / K) % span) + span) % span, edge = Math.min(40, span * 0.12);
      const fa = k.closed ? 1 : clamp01(Math.min(f / edge, (span - f) / edge));
      const r = rider(ctx, ax, k.pts, f, color, a * fa, 6);
      if (r) out.push(r);
    }
    return out;
  };

  function draw() {
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cc = C('curve'), pc = C('point'), fc = C('function');
    const W = w.v, tm = (Number.isFinite(cy.now()) ? cy.now() : 0) * RATE;
    hits = [];
    const cur = pick.value, P = POINTS[cur];
    /* the frames: each pane keeps its frame while its contents crossfade between the two critical points */
    const x0 = pick.mix((v) => POINTS[v].x0);
    const axL = axes(ctx, L, [x0 - W, x0 + W], [-W, W], { xl: 'x', yl: 'y', xc: fc, yc: fc, nx: 4, ny: 4, nice: true });
    const axR = axes(ctx, R, [-W, W], [-W, W], { xl: 'u', yl: 'v', xc: fc, yc: fc, nx: 4, ny: 4, nice: true });
    const fa = F.arrival(d), sols = clamp01((fa - 0.3) / 0.7);
    space.field2(ctx, axL, field, alpha(vf, 0.65), { n: [11, 11], w: 2.5 });
    ['o', 's'].forEach((key) => {
      const a = pick.a(key); if (!(a > 0.01)) return;
      const Pk = POINTS[key], pic = picture(key, W);
      const axLk = { ...axL, X: (v) => axL.X(v + Pk.x0), Y: axL.Y }, axRk = axR;
      F.faded(ctx, a, [0, 0], () => {
        space.field2(ctx, axR, (p) => [p[1], Pk.sgn * p[0]], alpha(vf, 0.65), { n: [11, 11], w: 2.5 });
        [[axLk, pic.left], [axRk, pic.right]].forEach(([ax, list]) => list.forEach((k) => {
          stroke(ctx, ax, sols < 1 ? F.partial(k.pts, sols) : k.pts, k.half ? cc : alpha(cc, 0.8), k.half ? 4 : 3.5);
          if (sols >= 1) ride(ctx, ax, k, tm, cc, 1);
        }));
        const filled = key === 'o';
        dot(ctx, axL.X(Pk.x0), axL.Y(0), pc, filled, 10); dot(ctx, axR.X(0), axR.Y(0), pc, filled, 10);
      });
    });
    hits.push({ x: axL.X(P.x0), y: axL.Y(0), r: 14, name: `the critical point ${P.name} of x′ = y, y′ = −x + x²` },
      { x: axR.X(0), y: axR.Y(0), r: 14, name: `(u, v) = (0, 0), the critical point ${P.name} in the new variables` },
      { x: axL.X(P.x0 + 0.7 * W), y: axL.Y(0.7 * W), r: 30, name: 'the vector field (y, −x + x²) of the nonlinear system' },
      { x: axR.X(0.7 * W), y: axR.Y(0.7 * W), r: 30, name: P.x0 ? 'the vector field (v, u) of the linearization at (1, 0)' : 'the vector field (v, −u) of the linearization at (0, 0)' });
    if (P.x0) hits.push({ x: axR.X(-0.5 * W), y: axR.Y(-0.5 * W), r: 14, name: 'the line v = u: straight solutions moving away from the origin' }, { x: axR.X(0.5 * W), y: axR.Y(-0.5 * W), r: 14, name: 'the line v = −u: straight solutions moving toward the origin' });
    text(ctx, `$\\kxprime = \\ky,\\ \\kyprime = -\\kx + \\kx^2$ near ${P.name}`, (L.l + L.r) / 2, L.b + 60, PAL.ink, { size: 20, align: 'center', tex: true });
    text(ctx, `its linearization at ${P.name}`, (R.l + R.r) / 2, R.b + 60, PAL.ink, { size: 20, align: 'center' });

    /* the headline: the two fields differ by u² ≤ w², against arrows up to √2 w */
    const Wn = num(W), gap = num(W * W, 4), big = num(Math.SQRT2 * W), pct = Math.round(100 * W / Math.SQRT2);
    const what = P.x0 ? 'a saddle' : 'closed curves';
    headline(ctx, `Within $${Wn.s}$ of ${P.name}, ${what}: the fields differ by $\\ku^2 \\le ${gap.s}$, ${pct} % of the linearization’s longest arrow, $\\sqrt{2}\\,w ${big.exact ? '=' : '\\approx'} ${big.s}$.`);

    /* the readout: Example 8.1.2's Jacobian at the point, and the linearization */
    const shift = P.x0 ? '\\ku = \\kx - 1,\\ \\kv = \\ky' : '\\ku = \\kx,\\ \\kv = \\ky';
    const J = P.x0 ? '\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}' : '\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}';
    ro.set(`${shift}:\\quad \\begin{bmatrix} \\ku \\\\ \\kv \\end{bmatrix}' = \\begin{bmatrix} \\kpfx & \\kpfy \\\\ \\kpgx & \\kpgy \\end{bmatrix}_{${P.name}} \\begin{bmatrix} \\ku \\\\ \\kv \\end{bmatrix} = \\begin{bmatrix} 0 & 1 \\\\ -1 + 2(${P.x0}) & 0 \\end{bmatrix} \\begin{bmatrix} \\ku \\\\ \\kv \\end{bmatrix} = ${J} \\begin{bmatrix} \\ku \\\\ \\kv \\end{bmatrix}`, undefined, { form: cur });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
