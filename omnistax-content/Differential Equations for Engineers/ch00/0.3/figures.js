/* Figures for section 0.3 Classification of differential equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['0.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, cycle, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Sim: the pendulum θ″ + sin θ = 0 beside its linear stand-in θ″ + θ = 0, both started from θ(0) and θ′(0).
   The nonlinear solution is integrated by RK4 at step 0.005 once per slider change; the linear one is
   θ(0) cos t + θ′(0) sin t exactly. Scene left (pivot, two rods, two bobs), the graph of θ(t) beside it:
   axes t 0 to 20, θ −4 to 4 rad (the sliders' extremes give a linear amplitude up to 3.6 rad); a nonlinear θ
   past the box is pinned at its edge. The transport runs t over 0 to 20 in about 5 s. */
(function () {
  const d = sim('sim-pendulum', 600);
  const T = 20, DT = 0.005, GAP = 0.1, TWO_PI = 2 * Math.PI;
  const th0 = ctl(d.controls, { label: 'θ(0)', cls: 'point', key: 'th0', min: 0.1, max: 3, step: 0.05, value: 1, unit: 'rad', dec: 2, onInput: reset });
  const om0 = ctl(d.controls, { label: 'θ′(0)', cls: 'point', key: 'om0', min: -2, max: 2, step: 0.05, value: 0, unit: '', dec: 2, onInput: reset });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  const PX = 330, PY = 290, R = 220;                       /* the pivot and the rod, in logical units */
  const BOX = { l: 720, r: 1340, t: 116, b: 500 };
  let cache = null, hits = [];
  hover(d.stage, () => hits);

  /* K(k), the complete elliptic integral of the first kind, by the arithmetic–geometric mean. */
  function K(k) { let a = 1, b = Math.sqrt(1 - k * k); for (let i = 0; i < 40; i++) { const m = (a + b) / 2; b = Math.sqrt(a * b); a = m; } return Math.PI / (2 * a); }

  function trace() {
    const a = th0.v, w = om0.v;
    if (cache && cache.a === a && cache.w === w) return cache;
    const N = Math.round(T / DT), th = new Float64Array(N + 1);
    let x = a, v = w; th[0] = x;
    const f = (p) => -Math.sin(p);
    for (let i = 1; i <= N; i++) {
      const k1x = v, k1v = f(x);
      const k2x = v + 0.5 * DT * k1v, k2v = f(x + 0.5 * DT * k1x);
      const k3x = v + 0.5 * DT * k2v, k3v = f(x + 0.5 * DT * k2x);
      const k4x = v + DT * k3v, k4v = f(x + DT * k3x);
      x += (DT / 6) * (k1x + 2 * k2x + 2 * k3x + k4x);
      v += (DT / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
      th[i] = x;
    }
    const nl = (t) => { const s = Math.max(0, Math.min(N, t / DT)), i = Math.floor(s), r = s - i; return i >= N ? th[N] : th[i] * (1 - r) + th[i + 1] * r; };
    const lin = (t) => a * Math.cos(t) + w * Math.sin(t);
    let tGap = null;
    for (let i = 0; i <= N; i++) { if (Math.abs(th[i] - lin(i * DT)) > GAP) { tGap = i * DT; break; } }
    const E = 0.5 * w * w - Math.cos(a);                  /* ½θ′² − cos θ is conserved; E ≥ 1 goes over the top */
    const period = E < 1 ? 4 * K(Math.sin(Math.acos(-E) / 2)) : null;
    cache = { a, w, nl, lin, tGap, E, period };
    return cache;
  }
  function reset() { cy.reset(); cache = null; }

  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), nlc = F.ref('nonlinear-pendulum'), lc = F.ref('linear-pendulum');
    const S = trace(), t = Math.min(cy.now(), T), a = S.nl(t), b = S.lin(t);
    /* the scene: a ceiling, the rest line, the two rods and bobs from one pivot */
    line(ctx, PX - 80, PY, PX + 80, PY, PAL.muted, 3);
    line(ctx, PX, PY, PX, PY + R + 24, alpha(PAL.ink, 0.35), 2, [4, 8]);
    const bob = (th, col, r) => { const x = PX + R * Math.sin(th), y = PY + R * Math.cos(th); line(ctx, PX, PY, x, y, col, 3); dot(ctx, x, y, col, true, r); return { x, y }; };
    const B = bob(b, lc, 15), A = bob(a, nlc, 11);
    dot(ctx, PX, PY, PAL.ink, true, 6);
    text(ctx, 'θ″ + sin θ = 0', 110, 96, nlc, { size: 22, weight: 600 });
    text(ctx, 'θ″ + θ = 0', 110, 128, lc, { size: 22, weight: 600 });
    /* the graph: both solutions faint over the whole window, solid up to t, a dot at the present time */
    const ax = axes(ctx, BOX, [0, T], [-4, 4], { xl: 't', yl: 'θ (rad)', yc: fc, nx: 4, ny: 4 });
    plot(ctx, ax, S.lin, alpha(lc, 0.3), { w: 3 });
    plot(ctx, ax, S.nl, alpha(nlc, 0.3), { w: 3 });
    if (t > 0) { plot(ctx, ax, S.lin, lc, { w: 5, x: [0, t] }); plot(ctx, ax, S.nl, nlc, { w: 5, x: [0, t] }); }
    const pb = pinned(ctx, ax.box, ax.X, ax.Y, t, b, lc), pa = pinned(ctx, ax.box, ax.X, ax.Y, t, a, nlc);
    hits = [
      { x: A.x, y: A.y, r: 18, name: 'the pendulum of θ″ + sin θ = 0' },
      { x: B.x, y: B.y, r: 18, name: 'the linear stand-in, θ″ + θ = 0' },
      { x: pa.x, y: pa.y, r: 16, name: `θ(${n(t)}) = ${n(a)} rad for θ″ + sin θ = 0` },
      { x: pb.x, y: pb.y, r: 16, name: `θ(${n(t)}) = ${n(b)} rad for θ″ + θ = 0` },
    ];
    const gapEnd = Math.abs(S.nl(T) - S.lin(T));
    const agree = S.tGap === null
      ? `the two solutions stay within ${GAP} rad all the way to $t = ${T}$.`
      : `the two solutions stay within ${GAP} rad until $t = ${fmt(S.tGap, 1)}$, and at $t = ${T}$ they differ by ${fmt(gapEnd, 2)} rad.`;
    headline(ctx, `$\\ktheta(0) = ${n(th0.v)}$ rad, $\\ktheta'(0) = ${n(om0.v)}$: ${agree}`);
    const note = S.period === null
      ? `With this push the pendulum of $\\kthetadprime + \\sin\\ktheta = 0$ goes over the top and keeps turning, while $\\kthetadprime + \\ktheta = 0$ keeps swinging with period $2\\pi \\approx ${n(TWO_PI)}$.`
      : `One full swing takes ${n(S.period)} for $\\kthetadprime + \\sin\\ktheta = 0$ and $2\\pi \\approx ${n(TWO_PI)}$ for $\\kthetadprime + \\ktheta = 0$, so the two drift apart a little more with every swing.`;
    ro.set(`\\kthetadprime + \\sin\\ktheta = 0:\\ \\ktheta(${n(t)}) = ${n(a)}\\ \\text{rad},\\qquad \\kthetadprime + \\ktheta = 0:\\ \\ktheta(${n(t)}) = ${n(b)}\\ \\text{rad}`, note);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 4), draw });
})();
};
