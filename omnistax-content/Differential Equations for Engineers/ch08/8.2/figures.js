/* Figures for section 8.2 Stability and classification of isolated critical points. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, hover, cycle, labeller, space, pinned, drag } = F;
const sim = (id, H) => F.sim(root, id, H);
const clamp01 = (k) => Math.max(0, Math.min(1, k));
const minus = (s) => s.replace(/-/g, '−');

/* A number rounded to `dec` places with trailing zeros dropped, and whether that rounding is exact (so a figure writes
   = where it is and ≈ where it is not). */
function num(v, dec = 2) {
  const r = Math.round(v * 10 ** dec) / 10 ** dec, exact = Math.abs(v - r) < 1e-9 * Math.max(1, Math.abs(v));
  let s = r.toFixed(dec); if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  if (/^-0?$/.test(s)) s = '0';
  return { s, exact };
}
const fix = (v, dec = 2) => { const s = (Math.round(v * 10 ** dec) / 10 ** dec).toFixed(dec); return /^-0\.?0*$/.test(s) ? s.slice(1) : s; };
const rel = (...zs) => (zs.every((z) => z.exact) ? '=' : '\\approx');

/* One classical Runge–Kutta step of x⃗′ = f(x⃗), and a path of n such steps of size h from p, cut where it leaves the
   window `inside` or stops being finite; `stop(q)` ends it early (a sink reached). Returns the points and why it ended. */
function rk4(f, p, h) {
  const a = f(p), b = f([p[0] + (h / 2) * a[0], p[1] + (h / 2) * a[1]]), c = f([p[0] + (h / 2) * b[0], p[1] + (h / 2) * b[1]]), d = f([p[0] + h * c[0], p[1] + h * c[1]]);
  return [p[0] + (h / 6) * (a[0] + 2 * b[0] + 2 * c[0] + d[0]), p[1] + (h / 6) * (a[1] + 2 * b[1] + 2 * c[1] + d[1])];
}
function path(f, p, h, n, inside, stop) {
  const pts = [p.slice()]; let q = p.slice(), why = 'time';
  for (let i = 0; i < n; i++) {
    q = rk4(f, q, h);
    if (!Number.isFinite(q[0]) || !Number.isFinite(q[1])) { why = 'out'; break; }
    pts.push(q);
    if (!inside(q)) { why = 'out'; break; }
    if (stop && stop(q)) { why = 'stop'; break; }
  }
  return { pts, why, h: Math.abs(h) };
}
/* the point of a path at model time u, by its equal steps (null past its end) */
function at(P, u) {
  const f = u / P.h; if (f > P.pts.length - 1) return null;
  const i = Math.min(P.pts.length - 2, Math.max(0, Math.floor(f))), k = f - i, p = P.pts[i], q = P.pts[i + 1] ?? p;
  return [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k];
}
/* the first n points of a path up to model time u, ending on the exact point there */
function upto(P, u) { const m = Math.min(P.pts.length, Math.floor(u / P.h) + 1), e = at(P, u); const out = P.pts.slice(0, m); if (e) out.push(e); return out; }
function stroke(ctx, ax, pts, color, w, dash) {
  if (pts.length < 2) return;
  const { box } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach(([x, y], i) => { const X = ax.X(x), Y = ax.Y(Math.max(-50, Math.min(50, y))); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
  ctx.stroke(); ctx.restore();
}
/* the state riding a path: a dot with a short fading tail behind it */
function rider(ctx, ax, P, u, color, a, r = 6.5) {
  const p = at(P, u); if (!p || !(a > 0.02)) return null;
  const X = ax.X(p[0]), Y = ax.Y(p[1]), { box } = ax;
  if (X < box.l - 2 || X > box.r + 2 || Y < box.t - 2 || Y > box.b + 2) return null;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  let prev = [X, Y];
  for (let j = 1; j <= 6; j++) {
    const q = at(P, Math.max(0, u - 0.05 * j)); if (!q) break; const Q = [ax.X(q[0]), ax.Y(q[1])];
    line(ctx, prev[0], prev[1], Q[0], Q[1], alpha(color, a * (1 - j / 7) * 0.8), r - 0.6 * j); prev = Q;
  }
  ctx.globalAlpha *= a; dot(ctx, X, Y, PAL.panel, true, r + 3.5); dot(ctx, X, Y, color, true, r);
  ctx.restore();
  return { x: X, y: Y, p };
}
/* the direction of the field, one length everywhere as the book draws it (none at a critical point) */
const unit = (f) => (p) => { const [u, v] = f(p), m = Math.hypot(u, v); return m > 1e-9 ? [u / m, v / m] : [0, 0]; };
/* eigenvalues of a 2 × 2 matrix as points [re, im] of the complex plane */
function eig([[a, b], [c, d]]) {
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  if (disc >= 0) { const s = Math.sqrt(disc); return [[(tr - s) / 2, 0], [(tr + s) / 2, 0]]; }
  return [[tr / 2, Math.sqrt(-disc) / 2], [tr / 2, -Math.sqrt(-disc) / 2]];
}

/* Figures 8.3 and 8.4 (Examples 8.2.1 and 8.2.2): one archetype. The direction field of the system on the book's
   window [−2, 2]², arrows of one length as the book draws them (symbolic); the book's sample trajectories faint, each
   with the state riding it forward from its start as the clock runs (kinematic); the trajectory from the initial point
   the reader drags (x₀, y₀ held by two sliders with dashed circles at the critical points) traced back faint and
   forward solid up to the clock, its state the big dot; the critical points, sinks filled and saddles and sources
   hollow. A choice picks the critical point the headline, the readout and the eigenvalue plane on the right
   (Re and Im λ −4 to 4 at one scale) read: its Jacobian matrix, its eigenvalues and its row of Table 8.1. The
   clock runs t 0 to 8 in 5 s and holds; the fate of the start is found by integrating on to t = 30 (RK4, h = 0.01). */
function portrait(o) {
  const d = sim(o.id, 860);
  const T = 8, RATE = 1.6, H_ = 0.01, FATE = 30, W0 = -2, W1 = 2;
  const BOX = { l: 96, r: 776, t: 116, b: 796 }, PLANE = { l: 906, r: 1316, t: 250, b: 660 };
  const inside = (q) => q[0] >= W0 - 0.05 && q[0] <= W1 + 0.05 && q[1] >= W0 - 0.05 && q[1] <= W1 + 0.05;
  const sink = o.points.find((p) => p.kind === 'sink');
  const near = sink ? (q) => Math.hypot(q[0] - sink.at[0], q[1] - sink.at[1]) < 2e-3 : null;
  /* the book's sample trajectories: back from each seed faint, forward with its rider */
  const book = o.seeds.map((s) => ({ s, back: path(o.f, s, -H_, 1200, inside), fwd: path(o.f, s, H_, 1200, inside, near) }));
  const pick = choice(d.controls, {
    label: '', key: 'point', value: o.choose, aria: 'the critical point the readout reads',
    options: o.points.map((p) => ({ value: p.key, label: p.label })),
  });
  const reset = () => cy.reset();
  const spec = (i) => o.points.map((p) => ({ at: p.at[i], label: p.kind }));
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: W0, max: W1, step: 0.01, value: o.start[0], unit: '', dec: 2, aria: 'the initial x, x(0)', specials: spec(0), onInput: reset });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: W0, max: W1, step: 0.01, value: o.start[1], unit: '', dec: 2, aria: 'the initial y, y(0)', specials: spec(1), onInput: reset });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  let hits = [], key = '', mine = null;
  hover(d.stage, () => hits);
  const cy = cycle(() => T, 1.2);
  /* the reader's trajectory, recomputed when the start moves */
  function trajectory() {
    const k = x0.v + ',' + y0.v; if (k === key) return mine;
    const s = [x0.v, y0.v], v = o.f(s), still = Math.hypot(v[0], v[1]) < 1e-12;
    const fwd = path(o.f, s, H_, Math.round(FATE / H_), inside, near);
    key = k; mine = { s, v, still, back: still ? { pts: [s], h: H_ } : path(o.f, s, -H_, 1200, inside), fwd };
    return mine;
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const vf = C('vector-field'), cv = C('curve'), pc = C('point'), ec = C('eigenvalue');
    const t = cy.now(); hits = [];
    const ax = axes(ctx, BOX, [W0, W1], [W0, W1], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    line(ctx, ax.X(0), BOX.t, ax.X(0), BOX.b, alpha(PAL.ink, 0.25), 2); line(ctx, BOX.l, ax.Y(0), BOX.r, ax.Y(0), alpha(PAL.ink, 0.25), 2);
    space.field2(ctx, ax, unit(o.f), alpha(vf, 0.6), { n: [15, 15], w: 2.5 });
    o.probes.forEach(([px, py]) => { const [u, w] = o.f([px, py]); hits.push({ x: ax.X(px), y: ax.Y(py), r: 14, name: minus(`the vector field at (${px}, ${py}): (x′, y′) = (${num(u).s}, ${num(w).s}), drawn at one length`) }); });
    /* the book's trajectories, each with its state riding it from its start */
    book.forEach((b) => {
      stroke(ctx, ax, b.back.pts.slice().reverse().concat(b.fwd.pts), alpha(cv, 0.4), 3);
      const end = b.fwd.why === 'stop' ? Math.min(t, (b.fwd.pts.length - 1) * H_) : t;
      const p = rider(ctx, ax, b.fwd, end, cv, 0.75, 5.5);
      if (p) hits.push({ x: p.x, y: p.y, r: 10, name: 'the state of one of the book’s sample trajectories, moving along it as t grows' });
    });
    /* the reader's trajectory */
    const M = trajectory();
    if (!M.still) {
      stroke(ctx, ax, M.back.pts, alpha(cv, 0.55), 3);
      stroke(ctx, ax, M.fwd.pts, alpha(cv, 0.55), 3);
      stroke(ctx, ax, upto(M.fwd, Math.min(t, (M.fwd.pts.length - 1) * H_)), cv, 5);
      const u = Math.min(t, (M.fwd.pts.length - 1) * H_), p = rider(ctx, ax, M.fwd, u, cv, 1, 9);
      if (p) hits.push({ x: p.x, y: p.y, r: 16, name: minus(`the state at t = ${fix(u, 1)}: (x, y) = (${fix(p.p[0])}, ${fix(p.p[1])})`) });
    }
    /* the critical points, the chosen one ringed */
    const lab = labeller(ctx, H, { headline: 2 });
    o.points.forEach((c) => {
      const X = ax.X(c.at[0]), Y = ax.Y(c.at[1]), a = pick.a(c.key);
      if (a > 0.01) { ctx.save(); ctx.globalAlpha *= a; ctx.setLineDash([6, 6]); ctx.strokeStyle = pc; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(X, Y, 22, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
      dot(ctx, X, Y, PAL.panel, true, 12); dot(ctx, X, Y, pc, c.kind === 'sink', 9);
      text(ctx, minus(c.label), X + c.lab[0], Y + c.lab[1], pc, { size: 20, weight: 600, align: c.lab[0] < 0 ? 'right' : 'left', bg: PAL.panel });
      hits.push({ x: X, y: Y, r: 16, name: minus(`the critical point ${c.label}, a ${c.kind}: ${c.stab}`) });
    });
    const pp = P.draw(ctx, ax, pc);
    if (pp) hits.push({ x: pp.x, y: pp.y, r: 18, name: minus(`the initial point (x₀, y₀) = (${fix(x0.v)}, ${fix(y0.v)}); drag it`) });

    /* the eigenvalue plane: the eigenvalues of J at the chosen point, gliding as the choice changes */
    const pl = axes(ctx, PLANE, [-4, 4], [-4, 4], { xl: 'Re λ', yl: 'Im λ', xc: ec, yc: ec, nx: 8, ny: 8 });
    line(ctx, pl.X(0), PLANE.t, pl.X(0), PLANE.b, alpha(PAL.ink, 0.45), 2.5);
    const byKey = Object.fromEntries(o.points.map((c) => [c.key, c]));
    const ev = pick.mix((k) => eig(byKey[k].J).flat());
    const C0 = byKey[pick.value];
    [[ev[0], ev[1]], [ev[2], ev[3]]].forEach(([re, im], i) => {
      const p = pinned(ctx, PLANE, pl.X, pl.Y, re, im, ec);
      if (pick.k >= 1) {
        const s = C0.eigs[i], dy = C0.complex ? (im > 0 ? -30 : 30) : -30, dx = C0.complex ? 0 : 0;
        text(ctx, s, p.x + dx, p.y + dy, ec, { size: 20, weight: 600, align: 'center', bg: PAL.panel, tex: true });
      }
      hits.push({ x: p.x, y: p.y, r: 16, name: `an eigenvalue of the Jacobian matrix at ${C0.label}` });
    });
    lab.flush();
    headline(ctx, C0.head);

    /* the readout: J at the chosen point and its eigenvalues; the note follows the start */
    ro.set(`\\kJ(\\kx,\\ky) = ${o.J},\\quad \\kJ${C0.arg} = ${C0.Jtex},\\quad \\klambda = ${C0.lam}`, fate(M), { form: C0.key });
  }
  function fate(M) {
    const [a, b] = M.s, [u, w] = M.v, A = num(a), B = num(b), U = num(u, 3), Wv = num(w, 3);
    const from = `From $(${A.s}, ${B.s})$: $\\kxprime ${rel(U)} ${U.s}$, $\\kyprime ${rel(Wv)} ${Wv.s}$`;
    if (M.still) return minus(`${from}, a critical point: the solution stays put, an equilibrium.`);
    const T1 = num((M.fwd.pts.length - 1) * H_, 1);
    if (M.fwd.why === 'stop') return minus(`${from}; the trajectory tends to the sink $${o.sinkTex}$.`);
    if (M.fwd.why === 'out') return minus(`${from}; the trajectory leaves the square at $t \\approx ${T1.s}$.`);
    return minus(`${from}; the trajectory is still in the square at $t = ${FATE}$.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RATE), draw });
}

/* Figure 8.3 (Example 8.2.1): x′ = −y − x², y′ = −x + y², the saddle (0, 0) and the sink (1, −1). The seeds are on the
   window's edge where the book's curves come in; from the default start (1.5, 0) the trajectory falls into the sink. */
portrait({
  id: 'sim-saddle-sink',
  f: ([x, y]) => [-y - x * x, -x + y * y],
  J: '\\begin{bmatrix} -2\\kx & -1 \\\\ -1 & 2\\ky \\end{bmatrix}',
  start: [1.5, 0], choose: 'sink', sinkTex: '(1,-1)',
  seeds: [[-1, -2], [-0.75, -2], [-0.5, -2], [0, -2], [0.5, -2], [1.5, -2], [2, -0.75], [2, 0.75], [2, 0.9], [2, 1], [-2, 0.8], [-0.75, 2]],
  probes: [[-1.5, 1.5], [1.5, 1.5], [-1.5, -1.5], [1.5, -1.5], [-1, 0], [0, 1]],
  points: [
    { key: 'saddle', label: '(0, 0)', at: [0, 0], kind: 'saddle', stab: 'unstable', lab: [-18, -22], arg: '(0,0)',
      Jtex: '\\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}', J: [[0, -1], [-1, 0]], lam: '1,\\ -1', eigs: ['$-1$', '$1$'],
      head: 'At $(0, 0)$: the eigenvalues of $\\kJ$ are $1$ and $-1$, real and of opposite signs: a saddle, unstable.' },
    { key: 'sink', label: '(1, −1)', at: [1, -1], kind: 'sink', stab: 'asymptotically stable', lab: [18, 24], arg: '(1,-1)',
      Jtex: '\\begin{bmatrix} -2 & -1 \\\\ -1 & -2 \\end{bmatrix}', J: [[-2, -1], [-1, -2]], lam: '-1,\\ -3', eigs: ['$-3$', '$-1$'],
      head: 'At $(1, -1)$: the eigenvalues of $\\kJ$ are $-1$ and $-3$, real and both negative: a sink, asymptotically stable.' },
  ],
});

/* Figure 8.4 (Example 8.2.2): x′ = y + y²eˣ, y′ = x, the saddle (0, 0) and the spiral source (0, −1). Two of the book's
   curves spiral out of (0, −1); the default start (0.1, −1), just off the source, spirals out and leaves at t ≈ 5.5. */
portrait({
  id: 'sim-saddle-spiral',
  f: ([x, y]) => [y + y * y * Math.exp(x), x],
  J: '\\begin{bmatrix} \\ky^2e^{\\kx} & 1+2\\ky e^{\\kx} \\\\ 1 & 0 \\end{bmatrix}',
  start: [0.1, -1], choose: 'source', sinkTex: '',
  seeds: [[-2, 1.85], [-2, 1.75], [-0.3, 0.5], [0, -0.95], [0, -1.05]],
  probes: [[-1.5, 1.5], [1.5, 1.5], [-1.5, -1.5], [1.5, -1.5], [1, 0], [-1, 0]],
  points: [
    { key: 'saddle', label: '(0, 0)', at: [0, 0], kind: 'saddle', stab: 'unstable', lab: [-18, -22], arg: '(0,0)',
      Jtex: '\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}', J: [[0, 1], [1, 0]], lam: '1,\\ -1', eigs: ['$-1$', '$1$'],
      head: 'At $(0, 0)$: the eigenvalues of $\\kJ$ are $1$ and $-1$, real and of opposite signs: a saddle, unstable.' },
    { key: 'source', label: '(0, −1)', at: [0, -1], kind: 'spiral source', stab: 'unstable', lab: [-24, 26], arg: '(0,-1)',
      Jtex: '\\begin{bmatrix} 1 & -1 \\\\ 1 & 0 \\end{bmatrix}', J: [[1, -1], [1, 0]], lam: '\\tfrac{1}{2} \\pm i\\tfrac{\\sqrt{3}}{2}', complex: true,
      eigs: ['$\\tfrac{1}{2} + i\\tfrac{\\sqrt{3}}{2}$', '$\\tfrac{1}{2} - i\\tfrac{\\sqrt{3}}{2}$'],
      head: 'At $(0, -1)$: the eigenvalues of $\\kJ$ are $\\tfrac{1}{2} \\pm i\\tfrac{\\sqrt{3}}{2}$, complex with positive real part: a spiral source, unstable.' },
  ],
});

/* Figure 8.5 (Example 8.2.3): x′ = y, y′ = −x + y³ on the book's window x −3 to 3, y −2.5 to 2.5. The trajectory from
   (x₀, 0) is traced as the clock runs from t = 0 to the moment it leaves the window (at most t = 150; RK4, h = 0.005),
   in 6 s whatever that moment is, with the linearization's trajectory from the same start, the circle of radius x₀,
   dashed beneath it. The readout writes the eigenvalues of the Jacobian matrix at the moving point,
   λ = (3/2)y² ± i√(4 − 9y⁴)/2 (real, ((3/2)y² ± √(9y⁴ − 4)/2), where 9y⁴ > 4), from y rounded as shown. From
   x₀ = 0.2 the trajectory leaves the window at t ≈ 33.0 through the bottom; from 0.1 at t ≈ 133; from 0.05 the distance
   only grows from 0.05 to about 0.06 by t = 150. */
(function () {
  const d = sim('sim-false-center', 780);
  const f = ([x, y]) => [y, -x + y * y * y];
  const XR = [-3, 3], YR = [-2.5, 2.5], BOX = { l: 340, r: 1060, t: 116, b: 716 }, H_ = 0.005, CAP = 150, SECS = 6;
  const inside = (q) => q[0] >= XR[0] && q[0] <= XR[1] && q[1] >= YR[0] && q[1] <= YR[1];
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: 0.05, max: 1, step: 0.01, value: 0.2, unit: '', dec: 2, aria: 'the initial x, with y(0) = 0', onInput: () => cy.reset() });
  const ro = readout(d);
  let hits = [], key = null, P = null;
  hover(d.stage, () => hits);
  const traj = () => { if (key !== x0.v) { key = x0.v; P = path(f, [x0.v, 0], H_, Math.round(CAP / H_), inside); } return P; };
  const span = () => { const p = traj(); return p.why === 'out' ? (p.pts.length - 1) * H_ : CAP; };
  const cy = cycle(span, 1.2);
  function draw() {
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cv = C('curve'), pc = C('point'), ec = C('eigenvalue');
    const p = traj(), end = span(), t = Math.min(cy.now(), end), out = p.why === 'out' && cy.now() >= end;
    hits = [];
    const ax = axes(ctx, BOX, XR, YR, { xl: 'x', yl: 'y', nx: 6, ny: 5, nice: true });
    line(ctx, ax.X(0), BOX.t, ax.X(0), BOX.b, alpha(PAL.ink, 0.25), 2); line(ctx, BOX.l, ax.Y(0), BOX.r, ax.Y(0), alpha(PAL.ink, 0.25), 2);
    space.field2(ctx, ax, unit(f), alpha(vf, 0.6), { n: [16, 14], w: 2.5 });
    [[-2, 1], [2, -1], [1, 2], [-1, -2]].forEach(([px, py]) => { const [u, w] = f([px, py]); hits.push({ x: ax.X(px), y: ax.Y(py), r: 14, name: minus(`the vector field at (${px}, ${py}): (x′, y′) = (${u}, ${w}), drawn at one length`) }); });
    /* the linearization's trajectory from the same start: the circle of radius x₀ */
    const R = x0.v, ring = Array.from({ length: 121 }, (_, i) => [R * Math.cos((i / 120) * 2 * Math.PI), R * Math.sin((i / 120) * 2 * Math.PI)]);
    stroke(ctx, ax, ring, cv, 3, [8, 8]);
    hits.push({ x: ax.X(-R * 0.7071), y: ax.Y(R * 0.7071), r: 10, name: minus(`the linearization’s trajectory from (${fix(R)}, 0): the circle of radius ${fix(R)}, a center`) });
    /* the nonlinear trajectory: faint whole, solid up to the clock, the state riding it */
    stroke(ctx, ax, p.pts, alpha(cv, 0.3), 2.5);
    stroke(ctx, ax, upto(p, t), cv, 3.5);
    const q = out ? null : rider(ctx, ax, p, t, cv, 1, 9);
    dot(ctx, ax.X(R), ax.Y(0), pc, false, 8);
    hits.push({ x: ax.X(R), y: ax.Y(0), r: 14, name: minus(`the initial point (${fix(R)}, 0)`) });
    dot(ctx, ax.X(0), ax.Y(0), PAL.panel, true, 11); dot(ctx, ax.X(0), ax.Y(0), pc, false, 8);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 12, name: 'the critical point (0, 0): the linearization has a center there, the system a spiral source' });
    if (q) hits.push({ x: q.x, y: q.y, r: 16, name: minus(`the state at t = ${fix(t, 1)}: (x, y) = (${fix(q.p[0])}, ${fix(q.p[1])})`) });
    /* the headline follows the distance from the origin; the readout the eigenvalues where the state is */
    const s = out ? p.pts[p.pts.length - 1] : (at(p, t) ?? p.pts[p.pts.length - 1]), dist = Math.hypot(s[0], s[1]);
    if (out) headline(ctx, minus(`$t \\approx ${fix(end, 1)}$: the trajectory from $(${fix(R)}, 0)$ leaves the window, though the linearization at $(0, 0)$ is a center.`));
    else headline(ctx, minus(`$t = ${fix(t, 1)}$: the distance from $(0, 0)$ is $${fix(dist, 3)}$, against $${fix(R, 3)}$ at the start and on the linearization’s circle.`));
    const yv = Math.round(s[1] * 100) / 100, Y = fix(yv), y2 = (3 / 2) * yv * yv, disc = 4 - 9 * yv ** 4;
    const yy = `(${Y})`;
    const lam = disc >= 0
      ? `\\klambda = \\tfrac{3}{2}\\ky^2 \\pm i\\tfrac{\\sqrt{4-9\\ky^4}}{2} = \\tfrac{3}{2}${yy}^2 \\pm i\\tfrac{\\sqrt{4-9${yy}^4}}{2} ${rel(num(y2, 3), num(Math.sqrt(disc) / 2, 3))} ${fix(y2, 3)} \\pm ${fix(Math.sqrt(disc) / 2, 3)}i`
      : `\\klambda = \\tfrac{3}{2}\\ky^2 \\pm \\tfrac{\\sqrt{9\\ky^4-4}}{2} = \\tfrac{3}{2}${yy}^2 \\pm \\tfrac{\\sqrt{9${yy}^4-4}}{2} \\approx ${fix(y2 - Math.sqrt(-disc) / 2, 3)},\\ ${fix(y2 + Math.sqrt(-disc) / 2, 3)}`;
    ro.set(minus(lam), minus(`at the state, where $\\ky ${rel(num(s[1]))} ${Y}$: the real part $\\tfrac{3}{2}\\ky^2$ is never negative, and it pushes the trajectory out.`), { form: disc >= 0 ? 'complex' : 'real', values: false });
    hits.push({ x: ax.X(2.4), y: ax.Y(2.1), r: 30, name: 'the direction field of x′ = y, y′ = −x + y³, every arrow one length' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => span() / SECS), draw });
})();

/* Sim (Example 8.2.4): the energy of x″ + x − x² = 0. Above, the integral ∫f(x) dx = ½x² − ⅓x³ over x −2 to 2 (shown
   −0.2 to 0.6) with the level C dashed; below, sharing the x-axis, the phase plane of x′ = y, y′ = −x + x² on Figure 8.1's
   window [−2, 2]², its direction field faint, and the level curve ½y² + ½x² − ⅓x³ = C, that is y = ±√(2(C − V(x))) with
   V(x) = ½x² − ⅓x³, drawn on each interval where C ≥ V(x); dashed drops join each turning point V(x) = C to the x-axis.
   C runs −0.05 to 0.5 with dashed circles at 0 (the center itself) and 1/6 = V(1) (through the saddle). For C = 0.1 the
   oval runs from x ≈ −0.398 to 0.567 and a second branch starts at x ≈ 1.331; for C > 1/6 there is one curve, turning at
   one x < −1/2. Still: a family under a parameter has no clock. */
(function () {
  const d = sim('sim-energy-levels', 1110);
  const V = (x) => x * x / 2 - x * x * x / 3;
  const TOP = { l: 380, r: 1020, t: 120, b: 320 }, BOT = { l: 380, r: 1020, t: 420, b: 1060 }, XR = [-2, 2];
  const c = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: -0.05, max: 0.5, step: 0.005, value: 0.1, unit: '', dec: 3, aria: 'the energy level C',
    specials: [{ at: 0, label: 'center' }, { at: 1 / 6, label: 'saddle' }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const field = ([x, y]) => [y, -x + x * x];
  /* the roots of V(x) = C in [−3, 3] by sign changes on a fine grid, refined by bisection; a double root (C = 0 at
     x = 0, C = 1/6 at x = 1) is caught where C − V touches zero */
  function roots(C) {
    const g = (x) => C - V(x), out = [], n = 1200, a0 = -3, a1 = 3;
    for (let i = 0; i < n; i++) {
      const a = a0 + ((a1 - a0) * i) / n, b = a0 + ((a1 - a0) * (i + 1)) / n;
      if (g(a) === 0) { out.push(a); continue; }
      if (g(a) * g(b) < 0) { let lo = a, hi = b; for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; if (g(lo) * g(m) <= 0) hi = m; else lo = m; } out.push((lo + hi) / 2); }
    }
    [0, 1].forEach((x) => { if (Math.abs(g(x)) < 1e-12 && !out.some((r) => Math.abs(r - x) < 1e-6)) out.push(x); });
    return out.sort((p, q) => p - q);
  }
  /* the intervals inside the window where C ≥ V(x): [a, b] closed (an oval) or reaching the window's edge */
  function pieces(C) {
    const rs = roots(C), cuts = [XR[0] - 0.3, ...rs, XR[1] + 0.3], out = [];
    for (let i = 0; i + 1 < cuts.length; i++) {
      const a = cuts[i], b = cuts[i + 1], m = (a + b) / 2;
      if (b - a < 1e-9 || C - V(m) < 0) continue;
      out.push({ a, b, ta: i > 0, tb: i + 1 < cuts.length - 1 });
    }
    return { rs, out };
  }
  /* one piece of the level curve as a polyline: the upper branch from a to b, then back along the lower one, sampled
     densely near a turning point (x = a + (b − a)(1 − cos θ)/2) where the curve turns vertical */
  function outline(C, pc) {
    const n = 160, up = [];
    for (let i = 0; i <= n; i++) {
      const th = (i / n) * Math.PI, x = pc.ta && pc.tb ? pc.a + ((pc.b - pc.a) * (1 - Math.cos(th))) / 2
        : pc.ta ? pc.a + (pc.b - pc.a) * (1 - Math.cos(th / 2)) : pc.tb ? pc.b - (pc.b - pc.a) * (1 - Math.cos(th / 2)) : pc.a + ((pc.b - pc.a) * i) / n;
      up.push([x, Math.sqrt(Math.max(0, 2 * (C - V(x))))]);
    }
    up.sort((p, q) => p[0] - q[0]);
    return up.concat(up.slice().reverse().map(([x, y]) => [x, -y]));
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const ic = C('integral'), cv = C('curve'), pc = C('point'), vf = C('vector-field');
    const Cv = c.v, at16 = Math.abs(Cv - 1 / 6) < 1e-9;
    hits = [];
    const top = axes(ctx, TOP, XR, [-0.2, 0.6], { xl: 'x', yl: '', nx: 4, ny: 4, fy: (v) => minus(v.toFixed(1)) });
    line(ctx, TOP.l, top.Y(0), TOP.r, top.Y(0), alpha(PAL.ink, 0.25), 2);
    plot(ctx, top, V, ic, { w: 5 });
    text(ctx, '$\\int \\kf(\\kx)\\,d\\kx = \\tfrac{1}{2}\\kx^2 - \\tfrac{1}{3}\\kx^3$', TOP.l + 16, top.Y(-0.11), ic, { size: 20, weight: 600, tex: true, bg: PAL.panel });
    hits.push({ x: top.X(-0.9), y: top.Y(V(-0.9)), r: 14, name: 'the integral ½x² − ⅓x³ of f(x) = x − x², the well the energy sits in' });
    /* the level C across the well */
    ctx.save(); ctx.setLineDash([10, 10]); line(ctx, TOP.l, top.Y(Cv), TOP.r, top.Y(Cv), PAL.ink, 3); ctx.restore();
    text(ctx, minus(`C = ${at16 ? '1/6' : fix(Cv, 3)}`), TOP.r - 10, top.Y(Cv) - 18, PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    const bot = axes(ctx, BOT, XR, [-2, 2], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    line(ctx, bot.X(0), BOT.t, bot.X(0), BOT.b, alpha(PAL.ink, 0.25), 2); line(ctx, BOT.l, bot.Y(0), BOT.r, bot.Y(0), alpha(PAL.ink, 0.25), 2);
    space.field2(ctx, bot, unit(field), alpha(vf, 0.35), { n: [15, 15], w: 2 });
    const { rs, out } = pieces(Cv);
    out.forEach((pc) => stroke(ctx, bot, outline(Cv, pc), cv, 5));
    /* the turning points: dropped from the level in the well to the x-axis of the plane */
    rs.filter((r) => r >= XR[0] && r <= XR[1]).forEach((r) => {
      ctx.save(); ctx.setLineDash([4, 8]); line(ctx, top.X(r), top.Y(Cv), bot.X(r), bot.Y(0), alpha(PAL.ink, 0.45), 2.5); ctx.restore();
      hits.push({ x: bot.X(r), y: bot.Y(0), r: 12, name: minus(`a turning point: x ≈ ${fix(r, 3)}, where ½x² − ⅓x³ = C and y = 0`) });
    });
    out.forEach((pc) => { const xm = pc.ta && pc.tb ? (pc.a + pc.b) / 2 : pc.ta ? Math.min(XR[1] - 0.1, pc.a + 0.4) : pc.b - 0.4; const ym = Math.sqrt(Math.max(0, 2 * (Cv - V(xm)))); hits.push({ x: bot.X(xm), y: bot.Y(Math.min(1.95, ym)), r: 12, name: minus(`the level curve ½y² + ½x² − ⅓x³ = ${fix(Cv, 3)}, a trajectory`) }); });
    [[0, 0, 'center', true], [1, 0, 'saddle', false]].forEach(([x, y, k, fill]) => {
      const X = bot.X(x), Y = bot.Y(y);
      dot(ctx, X, Y, PAL.panel, true, 12); dot(ctx, X, Y, pc, fill, 9);
      text(ctx, `(${x}, ${y})`, X + (k === 'center' ? -16 : 18), Y + 24, pc, { size: 20, weight: 600, align: k === 'center' ? 'right' : 'left', bg: PAL.panel });
      hits.push({ x: X, y: Y, r: 14, name: k === 'center' ? 'the critical point (0, 0), a stable center' : 'the critical point (1, 0), a saddle' });
    });
    const lab = labeller(ctx, H, { headline: 2 }); lab.flush();
    /* the headline reads the pieces */
    const R = (x) => minus(fix(x, 2));
    const oval = out.find((pc) => pc.ta && pc.tb), branch = out.find((pc) => pc.ta && !pc.tb), wide = out.find((pc) => !pc.ta && pc.tb);
    let head;
    if (Math.abs(Cv) < 1e-9) head = '$C = 0$: the level is the center $(0, 0)$ itself, with a branch to the right of $\\kx = 1.5$.';
    else if (at16) head = '$C = \\tfrac{1}{6}$: the level curve passes through the saddle $(1, 0)$, and the oval round $(0, 0)$ opens there.';
    else if (oval) head = `$C = ${fix(Cv, 3)}$: the level curve closes round $(0, 0)$ between $\\kx \\approx ${R(oval.a)}$ and $\\kx \\approx ${R(oval.b)}$; another branch runs off past $\\kx \\approx ${R(branch ? branch.a : rs[rs.length - 1])}$.`;
    else if (Cv < 0) head = minus(`$C = ${fix(Cv, 3)}$: no oval; only a branch to the right of $\\kx \\approx ${R(branch ? branch.a : rs[rs.length - 1])}$.`);
    else head = `$C = ${fix(Cv, 3)}$: no closed curve; the trajectory comes in from the right, turns at $\\kx \\approx ${R(wide ? wide.b : rs[0])}$ and goes back out.`;
    headline(ctx, minus(head));
    const twoC = num(2 * Cv, 3);
    ro.set(minus(`\\ky = \\pm\\sqrt{-\\kx^2 + \\tfrac{2}{3}\\kx^3 + 2C} = \\pm\\sqrt{-\\kx^2 + \\tfrac{2}{3}\\kx^3 ${2 * Cv < 0 ? '-' : '+'} ${at16 ? '\\tfrac{1}{3}' : twoC.s.replace('-', '')}}`));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
