/* Figures for section 8.3 Applications of nonlinear systems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, text, headline, register, readout, hover, cycle, pinned, angleArc, fmt, space } = F;
const sim = (id, H) => F.sim(root, id, H);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
/* a number for TeX (ASCII minus, no negative zero) and for figure text (the true minus sign) */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI, TAU = 2 * Math.PI;

/* a polyline in graph units, clipped to the axes' box, broken wherever a point is not finite or the
   path jumps by more than `jump` in x (a wrap of the angle) */
function stroke(ctx, ax, pts, color, w, jump = Infinity) {
  if (pts.length < 2) return;
  const { box } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath();
  let pen = false, last = null;
  for (const p of pts) {
    if (!p || !Number.isFinite(p[0]) || !Number.isFinite(p[1])) { pen = false; last = null; continue; }
    const X = ax.X(p[0]), Y = ax.Y(clamp(p[1], -1e6, 1e6));
    if (pen && last && Math.abs(p[0] - last[0]) < jump) ctx.lineTo(X, Y); else ctx.moveTo(X, Y);
    pen = true; last = p;
  }
  ctx.stroke(); ctx.restore();
}
/* the state riding its trajectory: a dot ringed in the panel colour */
function rider(ctx, x, y, color) { dot(ctx, x, y, PAL.panel, true, 12); dot(ctx, x, y, color, true, 8); }

/* Figure 8.6 + 8.7 (and the pendulum sketch): the pendulum θ″ + μθ′ + sin θ = 0 (g/L = 1, as the book's Figure 8.6 takes it)
   swinging on the left, and beside it the phase plane of Figure 8.6, θ −7 to 7 and ω −3 to 3 (the book's window), with its
   field [ω, −sin θ − μω], the centers (2kπ, 0) filled and the saddles ((2k + 1)π, 0) hollow, the book's trajectories faint
   (level curves of the energy ½ω² − cos θ), and the phase point of this pendulum riding its trajectory as the bob moves.
   The motion is integrated by RK4 at step 0.01 once per slider change, t 0 to 24, played in 6 s (physical time, linear).
   On the separatrix itself (μ = 0, energy exactly 1) the closed form sin(θ/2) = tanh(±t + artanh sin(θ₀/2)) is used, so
   the point creeps into the saddle and never arrives. θ and θ + 2π are one position of the bob, so the phase point is
   drawn at θ wrapped into (−π, π]: a spinning pendulum's point leaves at θ = π and comes back at θ = −π.
   ω₀ is held to ±2.2 so that every undamped trajectory, ω² = ω₀² + 2(cos θ − cos θ₀) ≤ 4.84 + 4, stays inside ω ±3. */
(function () {
  const d = sim('sim-pendulum-phase', 660);
  const TEND = 24, DT = 0.01, N = Math.round(TEND / DT);
  const PX = 236, PY = 370, R = 170;                         /* the pivot and the rod */
  const BOX = { l: 560, r: 1350, t: 150, b: 580 };           /* the phase plane; the headline wraps above it */
  const sep = () => Math.sqrt(Math.max(0, 2 * (1 + Math.cos(th0.v))));
  const th0 = ctl(d.controls, { label: '\\theta_0', cls: '', key: 'th0', min: -PI, max: PI, step: 0.01, value: 2.5, unit: 'rad', dec: 2, aria: 'the release angle θ₀',
    specials: [{ at: -PI, label: 'upside down' }, { at: 0, label: 'hanging down' }, { at: PI, label: 'upside down' }], onInput: reset });
  const om0 = ctl(d.controls, { label: '\\omega_0', cls: '', key: 'om0', min: -2.2, max: 2.2, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the initial angular velocity ω₀',
    specials: [{ at: () => -sep(), label: 'over the top' }, { at: 0, label: 'at rest' }, { at: () => sep(), label: 'over the top' }], onInput: reset });
  const mu = ctl(d.controls, { label: '\\mu', cls: '', key: 'mu', min: 0, max: 1, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the friction μ',
    specials: [{ at: 0, label: 'no friction' }], onInput: reset });
  const cy = cycle(() => TEND, 1.2);
  const ro = readout(d);
  let cache = null, hits = [];
  hover(d.stage, () => hits);
  const energy = (th, w) => 0.5 * w * w - Math.cos(th);
  const wrap = (th) => th - TAU * Math.ceil((th - PI) / TAU);   /* into (−π, π] */

  function trace() {
    const a = th0.v, w = om0.v, m = mu.v;
    if (cache && cache.a === a && cache.w === w && cache.m === m) return cache;
    const th = new Float64Array(N + 1), om = new Float64Array(N + 1);
    const E0 = energy(a, w);
    const onSep = m === 0 && Math.abs(E0 - 1) < 1e-9 && Math.abs(a) < PI - 1e-9 && w !== 0;
    if (onSep) {
      const s = Math.sign(w), u0 = Math.atanh(Math.sin(a / 2));
      for (let i = 0; i <= N; i++) { const z = s * i * DT + u0; th[i] = 2 * Math.asin(Math.tanh(z)); om[i] = 2 * s / Math.cosh(z); }
    } else {
      let x = a, v = w; th[0] = x; om[0] = v;
      const f = (p, q) => -Math.sin(p) - m * q;
      for (let i = 1; i <= N; i++) {
        const k1x = v, k1v = f(x, v);
        const k2x = v + 0.5 * DT * k1v, k2v = f(x + 0.5 * DT * k1x, v + 0.5 * DT * k1v);
        const k3x = v + 0.5 * DT * k2v, k3v = f(x + 0.5 * DT * k2x, v + 0.5 * DT * k2v);
        const k4x = v + DT * k3v, k4v = f(x + DT * k3x, v + DT * k3v);
        x += (DT / 6) * (k1x + 2 * k2x + 2 * k3x + k4x); v += (DT / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
        th[i] = x; om[i] = v;
      }
    }
    /* how many times the bob goes over the top: the center it settles about, counted from the one it started by */
    const turns = Math.abs(Math.round(th[N] / TAU)), Eend = energy(th[N], om[N]);
    cache = { a, w, m, th, om, E0, onSep, turns, Eend };
    return cache;
  }
  function reset() { cy.reset(); cache = null; }
  const at = (arr, t) => { const s = clamp(t / DT, 0, N), i = Math.min(N - 1, Math.floor(s)), r = s - i; return arr[i] * (1 - r) + arr[i + 1] * r; };

  /* the book's trajectories: level curves ½ω² − cos θ = E, closed about the centers for E < 1, the separatrix at E = 1, wavy above */
  const LEVELS = [-0.8, -0.4, 0.2, 0.6, 1, 1.5, 2.5];
  function level(E, sign) {
    const pts = [];
    if (E >= 1) { for (let i = 0; i <= 700; i++) { const t = -7 + (14 * i) / 700; pts.push([t, sign * Math.sqrt(Math.max(0, 2 * (E + Math.cos(t))))]); } return [pts]; }
    const tm = Math.acos(-E), out = [];
    for (let k = -1; k <= 1; k++) {
      const loop = [];
      for (let i = 0; i <= 120; i++) { const t = tm * Math.cos((PI * i) / 120); loop.push([t + k * TAU, sign * Math.sqrt(Math.max(0, 2 * (E + Math.cos(t))))]); }
      out.push(loop);
    }
    return out;
  }
  const BOOK = LEVELS.flatMap((E) => [...level(E, 1), ...level(E, -1)]);

  function draw() {
    const { ctx } = begin(d.c);
    const S = trace(), t = Math.min(cy.now(), TEND), m = mu.v;
    const thv = at(S.th, t), omv = at(S.om, t), thw = wrap(thv), E = energy(thv, omv);
    const vf = C('vector-field'), cv = C('curve'), pc = C('point'), dc = C('derivative'), fc = C('function');
    hits = [];

    /* the scene: the circle the bob can travel, its swing, the rod, the bob, the angle θ and the angular velocity ω on the bob */
    ctx.save(); ctx.setLineDash([4, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(PX, PY, R, 0, TAU); ctx.stroke(); ctx.restore();
    line(ctx, PX, PY, PX, PY + R + 30, alpha(PAL.ink, 0.35), 2, [4, 8]);
    if (m === 0 && S.E0 < 1 && !(Math.abs(S.a) < 1e-9 && S.w === 0)) {
      const tm = Math.acos(-S.E0);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(PX, PY, R, PI / 2 + tm, PI / 2 - tm, true); ctx.stroke(); ctx.restore();
    }
    const bx = PX + R * Math.sin(thv), by = PY + R * Math.cos(thv);
    if (Math.abs(thw) > 0.25) angleArc(ctx, { x: PX, y: PY }, 62, -PI / 2, -PI / 2 + thw, 'θ', null, fc);
    line(ctx, PX, PY, bx, by, PAL.ink, 4);
    line(ctx, PX - 34, PY - 2, PX + 34, PY - 2, PAL.muted, 4);
    dot(ctx, PX, PY, PAL.ink, true, 7);
    dot(ctx, bx, by, PAL.ink, true, 17);
    if (Math.abs(omv) > 0.06) {
      const ux = Math.cos(thv), uy = -Math.sin(thv), L = 46 * omv;
      arrow(ctx, bx, by, bx + L * ux, by + L * uy, dc, 5);
      if (Math.abs(omv) > 0.3) text(ctx, 'ω', bx + (L + 22 * Math.sign(L)) * ux, by + (L + 22 * Math.sign(L)) * uy, dc, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    }
    hits.push({ x: bx, y: by, r: 22, name: `the bob, at the angle θ = ${fmt(thw, 2)} rad from hanging straight down, moving with angular velocity ω = ${fmt(omv, 2)}` });
    hits.push({ x: PX, y: PY, r: 14, name: 'the pivot' });

    /* the phase plane of Figure 8.6, θ ticked at the multiples of π */
    const ax = axes(ctx, BOX, [-7, 7], [-3, 3], { xl: 'θ', yl: 'ω', xc: fc, yc: dc, nx: 0, ny: 6 });
    [-2, -1, 1, 2].forEach((k) => {
      const X = ax.X(k * PI); line(ctx, X, BOX.t, X, BOX.b, PAL.rule, 1.5);
      text(ctx, `${k < 0 ? '−' : ''}${Math.abs(k) === 1 ? '' : '2'}π`, X, BOX.b + 26, PAL.muted, { size: 17, align: 'center' });
    });
    text(ctx, '0', ax.X(0), BOX.b + 26, PAL.muted, { size: 17, align: 'center' });
    space.field2(ctx, ax, ([x, y]) => [y, -Math.sin(x) - m * y], alpha(vf, 0.6), { n: [19, 9], w: 2.5 });
    BOOK.forEach((p) => stroke(ctx, ax, p, alpha(cv, 0.22), 2.5));
    /* this pendulum's trajectory: with no friction the whole level curve it lies on, faint ahead of the point */
    if (m === 0 && !(S.E0 < -0.999999)) {
      const s = S.onSep ? Math.sign(S.w) : (S.w === 0 ? 1 : Math.sign(S.w));
      if (S.E0 < 1) { const tm = Math.acos(-S.E0), loop = []; for (let i = 0; i <= 240; i++) { const u = (TAU * i) / 240, tt = tm * Math.cos(u); loop.push([tt, -Math.sin(u) * Math.sqrt(Math.max(0, 2 * (S.E0 + Math.cos(tt))))]); } stroke(ctx, ax, loop, alpha(cv, 0.5), 3.5); }
      else level(S.E0, s).forEach((p) => stroke(ctx, ax, p, alpha(cv, 0.5), 3.5));
    }
    /* the path the point has travelled, wrapped into (−π, π] */
    const upto = Math.floor(clamp(t / DT, 0, N)), past = [];
    for (let i = 0; i <= upto; i += 2) past.push([wrap(S.th[i]), S.om[i]]);
    past.push([thw, omv]);
    stroke(ctx, ax, past, cv, 4.5, PI);
    /* the critical points: centers filled (stable), saddles hollow (unstable) */
    [-2, -1, 0, 1, 2].forEach((k) => {
      const even = k % 2 === 0, X = ax.X(k * PI), Y = ax.Y(0);
      dot(ctx, X, Y, pc, even, 9);
      const where = k === 0 ? '(0, 0)' : `(${k < 0 ? '−' : ''}${Math.abs(k) === 1 ? '' : '2'}π, 0)`;
      hits.push({ x: X, y: Y, r: 14, name: even
        ? `${where}: ${m > 0 ? 'a spiral sink' : 'a stable center'}, the pendulum hanging straight down`
        : `${where}: an unstable saddle, the pendulum balanced upside down` });
    });
    text(ctx, m > 0 ? 'spiral sink' : 'center', ax.X(0), ax.Y(0) + 30, pc, { size: 18, align: 'center', bg: PAL.panel });
    text(ctx, 'saddle', ax.X(PI), ax.Y(0) + 30, pc, { size: 18, align: 'center', bg: PAL.panel });
    const P = [ax.X(thw), ax.Y(clamp(omv, -3, 3))];
    rider(ctx, P[0], P[1], cv);
    hits.push({ x: P[0], y: P[1], r: 16, name: `the phase point (θ, ω) = (${fmt(thw, 2)}, ${fmt(omv, 2)}): the state of the pendulum on the left` });

    /* the headline names the motion */
    const A = n(S.a), W = n(S.w), start = S.w === 0 ? `Released from $\\theta_0 = ${A}$ at rest` : `Started at $\\theta_0 = ${A}$ with $\\omega_0 = ${W}$`;
    let head;
    const still = Math.abs(Math.sin(S.a)) < 1e-12 && S.w === 0;
    if (still && Math.abs(S.a) < 1e-9) head = 'Hanging straight down at rest: the stable equilibrium $(0, 0)$, and nothing moves.';
    else if (still) head = 'Balanced upside down at rest: the unstable equilibrium $(\\pi, 0)$; the tiniest push would set it swinging.';
    else if (m > 0) {
      head = S.Eend >= 1 ? `Friction $\\mu = ${n(m)}$: the energy drains away, but slowly: the bob is still going over the top at $t = ${TEND}$.`
        : S.turns !== 0
        ? `Friction $\\mu = ${n(m)}$: the bob goes over the top ${S.turns === 1 ? 'once' : `${S.turns} times`}, then the phase point spirals in toward a center, the pendulum settling hanging straight down.`
        : `Friction $\\mu = ${n(m)}$: the energy drains away and the phase point spirals in toward the center, the pendulum settling hanging straight down.`;
    } else if (S.onSep) head = `${start}: exactly on the separatrix, the bob creeps up toward the top and the phase point slides into the saddle, never arriving.`;
    else if (S.E0 < 1) head = `${start}: the bob swings back and forth and the phase point circles the center $(0, 0)$.`;
    else head = `${start}: the bob goes over the top and keeps spinning, and the phase point runs along a wavy curve that never crosses the $\\theta$-axis.`;
    headline(ctx, head);

    /* the readout: the equation, the live state, and the energy ½ω² − cos θ, conserved with no friction */
    const eq = m === 0 ? '\\kthetadprime + \\sin\\ktheta = 0' : `\\kthetadprime + ${n(m)}\\,\\kthetaprime + \\sin\\ktheta = 0`;
    const Es = n(E);
    ro.set(`${eq}:\\quad \\ktheta = ${n(thw)},\\ \\ \\komega = \\kthetaprime = ${n(omv)},\\quad \\tfrac{1}{2}\\komega^2 - \\cos\\ktheta = ${Es}`,
      m === 0 ? '' : `With friction the energy $\\tfrac{1}{2}\\komega^2 - \\cos\\ktheta$ falls: it started at ${fmt(S.E0, 2)} and is now ${fmt(E, 2)}.`, { form: m === 0 ? 'free' : 'damped' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TEND / 6), draw });
})();

/* Figure 8.8: the period T(θ₀) = 4K(sin(θ₀/2)) of θ″ + sin θ = 0 (K the complete elliptic integral of the first kind, by the
   arithmetic–geometric mean; equal to the book's 4√(L/2g)∫₀^θ₀ dθ/√(cos θ − cos θ₀) with g/L = 1) beside the linear period
   T_linear = 2π, and the relative error (T − T_linear)/T. The book plots θ₀ from 0 to π/2; the axes run on to π, where T has
   its asymptote: T 5 to 20 (T(0.98π) ≈ 19.39, the slider's top), the error 0 to 0.8. Still: the graph is the idea. */
(function () {
  const d = sim('sim-period', 520);
  const L1 = { l: 110, r: 650, t: 150, b: 430 }, R1 = { l: 800, r: 1340, t: 150, b: 430 };
  const th0 = ctl(d.controls, { label: '\\theta_0', cls: '', key: 'th0', min: 0.01, max: 0.98 * Math.PI, step: 0.01, value: Math.PI / 4, unit: 'rad', dec: 2, aria: 'the initial angle θ₀',
    specials: [{ at: (5 * Math.PI) / 180, label: '5°' }, { at: Math.PI / 4, label: '45°' }, { at: Math.PI / 2, label: '90°' }] });
  th0.set(Math.PI / 4);   /* the book's 45°, exactly: the input rounded it to its step before the circles freed the step */
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function K(k) { let a = 1, b = Math.sqrt(Math.max(0, 1 - k * k)); for (let i = 0; i < 40; i++) { const m = (a + b) / 2; b = Math.sqrt(a * b); a = m; } return Math.PI / (2 * a); }
  const T = (t) => (t >= Math.PI - 1e-9 ? Infinity : 4 * K(Math.sin(t / 2)));
  const TL = 2 * Math.PI;
  const err = (t) => (T(t) - TL) / T(t);
  const fx = (v) => ({ 0: '0', 1: 'π/4', 2: 'π/2', 3: '3π/4', 4: 'π' })[Math.round((4 * v) / Math.PI)] ?? '';
  const pct = (e) => { const p = 100 * e; return p >= 10 ? p.toFixed(0) : p >= 1 ? p.toFixed(1) : Number(p.toPrecision(2)).toString(); };

  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('error'), t0 = th0.v, Tv = T(t0), ev = err(t0);
    hits = [];
    const a = axes(ctx, L1, [0, Math.PI], [5, 20], { xl: 'θ₀', yl: 'period', nx: 4, ny: 3, fx });
    line(ctx, a.X(0), a.Y(TL), a.X(Math.PI), a.Y(TL), PAL.ink, 3, [10, 10]);
    plot(ctx, a, T, PAL.ink, { w: 5, poles: [Math.PI] });
    text(ctx, 'T', a.X(2.75), a.Y(Math.min(19, T(2.75))) , PAL.ink, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'T_{linear} = 2π', a.X(Math.PI) - 16, a.Y(TL) - 22, PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    line(ctx, a.X(t0), a.Y(TL), a.X(t0), a.Y(Math.min(20, Tv)), alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, a.X(t0), a.Y(TL), a.X(t0), a.Y(5), alpha(PAL.ink, 0.4), 2, [4, 8]);
    const p1 = pinned(ctx, L1, a.X, a.Y, t0, Tv, PAL.ink), p2 = pinned(ctx, L1, a.X, a.Y, t0, TL, PAL.ink);
    hits.push({ x: p1.x, y: p1.y, r: 16, name: `T = ${fmt(Tv, 2)}, the true period for θ₀ = ${fmt(t0, 2)} rad` });
    hits.push({ x: p2.x, y: p2.y, r: 16, name: `T_linear = 2π ≈ 6.28, the period of the linearized pendulum, the same for every θ₀` });
    hits.push({ x: a.X(Math.PI), y: a.Y(12), r: 16, name: 'θ₀ = π, the pendulum released upside down: the period grows without bound as θ₀ approaches it' });
    const b = axes(ctx, R1, [0, Math.PI], [0, 0.8], { xl: 'θ₀', yl: 'relative error', yc: ec, nx: 4, ny: 4, fx, fy: (v) => v.toFixed(1) });
    plot(ctx, b, err, ec, { w: 5 });
    line(ctx, b.X(t0), b.Y(0), b.X(t0), b.Y(Math.min(0.8, ev)), alpha(PAL.ink, 0.4), 2, [4, 8]);
    const p3 = pinned(ctx, R1, b.X, b.Y, t0, ev, ec);
    hits.push({ x: p3.x, y: p3.y, r: 16, name: `the relative error (T − T_linear)/T = ${fmt(ev, 4)} at θ₀ = ${fmt(t0, 2)} rad` });
    const deg = (t0 * 180) / Math.PI, degs = Math.abs(deg - Math.round(deg)) < 0.05 ? Math.round(deg).toFixed(0) : deg.toFixed(1);
    headline(ctx, `$\\theta_0 = ${n(t0)}$ rad (${degs}°): $\\kT \\approx ${n(Tv)}$ against $T_{\\text{linear}} = 2\\pi \\approx 6.28$, a relative error of ${pct(ev)} %.`);
    ro.set(`\\kT = 2\\sqrt{2}\\int_0^{${n(t0)}} \\frac{d\\ktheta}{\\sqrt{\\cos\\ktheta - \\cos ${n(t0)}}} \\approx ${n(Tv)},\\quad T_{\\text{linear}} = 2\\pi \\approx 6.28,\\quad \\frac{\\kT - T_{\\text{linear}}}{\\kT} \\approx ${Number(ev.toPrecision(2))}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 8.9: the predator–prey system x′ = (0.4 − 0.01y)x, y′ = (0.003x − 0.3)y. Left, the phase portrait on x 0 to 300 and
   y 0 to 250 (the book's 0 to 100 and room for the text's 200 foxes) with its field, the center (100, 40) filled and the saddle
   (0, 0) hollow, the closed trajectories through (100, 30), (100, 20), (100, 12) and (100, 6) faint, and the trajectory from the
   dragged start (default the book's 50 hares and 20 foxes) with the state riding it; right, x(t) and y(t) for t 0 to 40 on 0 to
   300 (the book's window), the hares thin and the foxes thick in their referent colours, drawn up to the present time. A value
   past a window is clipped, its dot pinned at the edge. RK4 at step 0.01, t 0 to 40 in 6 s; the readout writes the constant of
   motion C = y^0.4 x^0.3 e^(−0.003x − 0.01y) at the moving state, which stays fixed. */
(function () {
  const d = sim('sim-predator-prey', 600);
  const A = 0.4, B = 0.01, Cc = 0.003, D = 0.3, TEND = 40, DT = 0.01, N = Math.round(TEND / DT);
  const LB = { l: 110, r: 640, t: 140, b: 520 }, RB = { l: 790, r: 1340, t: 140, b: 520 };
  const x0 = ctl(d.controls, { label: 'x(0)', cls: 'point', key: 'x0', min: 0, max: 300, step: 1, value: 50, unit: 'hares', dec: 0, aria: 'the hares at the start',
    specials: [{ at: 100, label: 'equilibrium' }], onInput: reset });
  const y0 = ctl(d.controls, { label: 'y(0)', cls: 'point', key: 'y0', min: 0, max: 220, step: 1, value: 20, unit: 'foxes', dec: 0, aria: 'the foxes at the start',
    specials: [{ at: 40, label: 'equilibrium' }, { at: 200, label: '200 foxes' }], onInput: reset });
  const P = F.drag(d, { x: x0, y: y0 });
  const cy = cycle(() => TEND, 1.2);
  const ro = readout(d);
  let cache = null, hits = [];
  hover(d.stage, () => hits);
  const fld = ([x, y]) => [(A - B * y) * x, (Cc * x - D) * y];
  const Cof = (x, y) => Math.pow(y, A) * Math.pow(x, D) * Math.exp(-Cc * x - B * y);
  function run(x, y, n, h) {
    const xs = new Float64Array(n + 1), ys = new Float64Array(n + 1); xs[0] = x; ys[0] = y;
    for (let i = 1; i <= n; i++) {
      if (!(x < 1e7 && y < 1e7)) { xs[i] = ys[i] = NaN; continue; }
      const [a1, b1] = fld([x, y]), [a2, b2] = fld([x + 0.5 * h * a1, y + 0.5 * h * b1]), [a3, b3] = fld([x + 0.5 * h * a2, y + 0.5 * h * b2]), [a4, b4] = fld([x + h * a3, y + h * b3]);
      x += (h / 6) * (a1 + 2 * a2 + 2 * a3 + a4); y += (h / 6) * (b1 + 2 * b2 + 2 * b3 + b4); xs[i] = x; ys[i] = y;
    }
    return { xs, ys };
  }
  const BOOKS = [30, 20, 12, 6].map((y) => { const r = run(100, y, 3500, 0.02); return Array.from(r.xs, (x, i) => [x, r.ys[i]]); });
  function trace() {
    const a = x0.v, b = y0.v;
    if (cache && cache.a === a && cache.b === b) return cache;
    const r = run(a, b, N, DT);
    /* the hares' lowest count, at the first time it is reached (later cycles come back to the same low) */
    let lo = Infinity; for (let i = 0; i <= N; i++) if (r.xs[i] < lo) lo = r.xs[i];
    let mi = 0; while (mi < N && !(r.xs[mi] <= lo * (1 + 1e-6) + 1e-9)) mi++;
    cache = { a, b, ...r, C0: Cof(a, b), minX: r.xs[mi], minT: mi * DT };
    return cache;
  }
  function reset() { cy.reset(); cache = null; }
  const at = (arr, t) => { const s = clamp(t / DT, 0, N), i = Math.min(N - 1, Math.floor(s)), r = s - i; return arr[i] * (1 - r) + arr[i + 1] * r; };

  function draw() {
    const { ctx } = begin(d.c);
    const S = trace(), t = Math.min(cy.now(), TEND), xv = at(S.xs, t), yv = at(S.ys, t);
    const vf = C('vector-field'), cv = C('curve'), pc = C('point'), hc = F.ref('hares'), fc = F.ref('foxes');
    hits = [];
    const ax = axes(ctx, LB, [0, 300], [0, 250], { xl: 'x (hares)', yl: 'y (foxes)', xc: C('function'), yc: C('function'), nx: 6, ny: 5 });
    /* the direction of the field, one arrow length everywhere as the book draws it: the speeds differ a hundredfold over the window */
    const sx = (LB.r - LB.l) / 300, sy = (LB.b - LB.t) / 250;
    space.field2(ctx, ax, (p) => { const [u, v] = fld(p), m = Math.hypot(u * sx, v * sy); return m > 1e-9 ? [u / m, v / m] : [0, 0]; }, alpha(vf, 0.6), { n: [12, 10], w: 2.5 });
    BOOKS.forEach((p) => stroke(ctx, ax, p, alpha(cv, 0.22), 2.5));
    const all = Array.from(S.xs, (x, i) => [x, S.ys[i]]), upto = Math.floor(clamp(t / DT, 0, N));
    stroke(ctx, ax, all, alpha(cv, 0.35), 3);
    stroke(ctx, ax, all.slice(0, upto + 1).concat([[xv, yv]]), cv, 4.5);
    dot(ctx, ax.X(100), ax.Y(40), pc, true, 9);
    dot(ctx, ax.X(0), ax.Y(0), pc, false, 9);
    hits.push({ x: ax.X(100), y: ax.Y(40), r: 14, name: '(100, 40) = (d/c, a/b): 100 hares and 40 foxes, the equilibrium the trajectories go round' });
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 14, name: '(0, 0): no animals at all, a saddle' });
    const start = P.draw(ctx, ax, pc);
    if (start) hits.push({ x: start.x, y: start.y, r: 18, name: `the start: ${S.a} hares and ${S.b} foxes (drag it)` });
    if (Number.isFinite(xv) && Number.isFinite(yv)) {
      const q = pinned(ctx, LB, ax.X, ax.Y, xv, yv, cv);
      if (!q.out) rider(ctx, q.x, q.y, cv);
      hits.push({ x: q.x, y: q.y, r: 16, name: `the state at t = ${fmt(t, 1)}: ${fmt(xv, 1)} hares and ${fmt(yv, 1)} foxes` });
    }

    /* the populations against time */
    const g = axes(ctx, RB, [0, TEND], [0, 300], { xl: 't', yl: 'population', nx: 4, ny: 6 });
    const fx = (i) => [i * DT, S.xs[i]], fy = (i) => [i * DT, S.ys[i]];
    const series = (f, k) => Array.from({ length: Math.floor(k / 4) + 1 }, (_, j) => f(Math.min(k, j * 4)));
    stroke(ctx, g, series(fx, N), alpha(hc, 0.25), 3); stroke(ctx, g, series(fy, N), alpha(fc, 0.25), 6);
    stroke(ctx, g, series(fx, upto).concat([[t, xv]]), hc, 3); stroke(ctx, g, series(fy, upto).concat([[t, yv]]), fc, 6);
    if (Number.isFinite(xv)) { const q = pinned(ctx, RB, g.X, g.Y, t, xv, hc); hits.push({ x: q.x, y: q.y, r: 14, name: `x(${fmt(t, 1)}) = ${fmt(xv, 1)} hares` }); }
    if (Number.isFinite(yv)) { const q = pinned(ctx, RB, g.X, g.Y, t, yv, fc); hits.push({ x: q.x, y: q.y, r: 14, name: `y(${fmt(t, 1)}) = ${fmt(yv, 1)} foxes` }); }
    text(ctx, 'x, hares', RB.r - 10, RB.t + 20, hc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'y, foxes', RB.r - 10, RB.t + 50, fc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });

    /* the headline */
    const a = S.a, b = S.b;
    let head;
    if (a === 0 && b === 0) head = 'No animals at all: the equilibrium $(0, 0)$, and nothing changes.';
    else if (a === 0) head = `${b} foxes and no hares: the foxes starve, and the state runs down the $y$-axis into the saddle $(0, 0)$.`;
    else if (b === 0) head = `${a} hares and no foxes: the hares multiply without check, and the state runs out along the $x$-axis.`;
    else if (a === 100 && b === 40) head = '100 hares and 40 foxes: the equilibrium $(100, 40)$, where both populations stay put.';
    else {
      head = `${a} hares and ${b} foxes: both populations cycle round $(100, 40)$, and $C \\approx ${n(S.C0)}$ stays fixed.`;
      if (S.minX < 5) head += ` The hares fall to ${fmt(S.minX, 2)} at $t \\approx ${n(S.minT, 1)}$.`;
    }
    headline(ctx, head);
    const Cn = Number.isFinite(xv) && Number.isFinite(yv) ? Cof(xv, yv) : S.C0;
    ro.set(`\\kx = ${Number.isFinite(xv) ? n(xv, 1) : '\\infty'},\\ \\ \\ky = ${n(yv, 1)}:\\quad C = \\ky^{0.4}\\kx^{0.3}e^{-0.003\\kx - 0.01\\ky} \\approx ${n(Cn)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TEND / 6), draw });
})();
};
