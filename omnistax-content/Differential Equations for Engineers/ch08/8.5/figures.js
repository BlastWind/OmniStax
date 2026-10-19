/* Figures for section 8.5 Chaos. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, dot, line, text, label, headline, register, readout, fmt, hover, cycle, pinned, tween, space: SP } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');   /* a number for TeX, its minus a hyphen */
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* a polyline in data units, the points i0..i1 (every `stride`-th) of a sampled run, clipped to the box */
function run(ctx, ax, X, Y, i0, i1, color, w, stride = 1) {
  if (i1 - i0 < 1) return;
  clip(ctx, ax.box, () => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(ax.X(X(i0)), ax.Y(Y(i0)));
    for (let i = i0 + stride; i < i1; i += stride) ctx.lineTo(ax.X(X(i)), ax.Y(Y(i)));
    ctx.lineTo(ax.X(X(i1)), ax.Y(Y(i1))); ctx.stroke();
  });
}
/* The forced Duffing equation of the section, x″ + 0.05x′ + x³ = 8 cos t, as the system x′ = y, y′ = 8 cos t − 0.05y − x³,
   stepped by the classical Runge–Kutta method (1.7) from (x0, y0) at t = 0: n steps of size h, the state after every step. */
function duffing(x0, y0, h, n) {
  const out = new Float64Array(2 * (n + 1)); let x = x0, y = y0; out[0] = x; out[1] = y;
  const g = (t, a, b) => 8 * Math.cos(t) - 0.05 * b - a * a * a;
  for (let i = 0; i < n; i++) {
    const t = i * h;
    const k1x = y, k1y = g(t, x, y);
    const k2x = y + (h / 2) * k1y, k2y = g(t + h / 2, x + (h / 2) * k1x, y + (h / 2) * k1y);
    const k3x = y + (h / 2) * k2y, k3y = g(t + h / 2, x + (h / 2) * k2x, y + (h / 2) * k2y);
    const k4x = y + h * k3y, k4y = g(t + h, x + h * k3x, y + h * k3y);
    x += (h / 6) * (k1x + 2 * k2x + 2 * k3x + k4x); y += (h / 6) * (k1y + 2 * k2y + 2 * k3y + k4y);
    out[2 * i + 2] = x; out[2 * i + 3] = y;
  }
  return out;
}
/* δ for the headline and the readout: two significant figures, no trailing zeros (0.1, 0.0013, 0.5) */
const sig2 = (v) => String(Number(v.toPrecision(2)));

/* Figure 8.12: the Duffing equation x″ + 0.05x′ + x³ = 8 cos t from the book's two starts (2, 3) and (2, 3 − δ), δ = 0.1 the
   book's (2, 2.9). Both are stepped by the same RK4 at h = 2π/2000, so what parts them is the equation, not the method.
   Left, the phase plane (the book's window x −3.5 to 3.5, y −6.5 to 6.5; every solution for t ≤ 30 and every δ stays inside,
   checked numerically): each trajectory drawn up to the present t, the last 5 time units full and the rest faint, its state
   riding it, and a thin line between the two states whose length is their distance. Right, x(t) of both for t 0 to 30 on −3.5
   to 3.5 (the book's 0 to 15 is the first half), and beneath it their distance on a log scale, 10⁻⁴ to 10, with the level 1
   dashed and the time it is first passed marked on both graphs. The clock runs t from 0 to 30 in 6 s. δ on a log slider,
   log₁₀ δ from −3 to −0.3, detents at the book's −1 and at −2 and −3: each tenfold cut of δ buys about one forcing period. */
(function () {
  const d = sim('sim-duffing-divergence', 700);
  const T = 30, h = (2 * Math.PI) / 2000, N = Math.ceil(T / h);
  const cy = cycle(() => T, 1.2);
  const A = duffing(2, 3, h, N);
  let B = null, sep = null, tSep = null, delta = 0.1;
  function solve() {
    delta = Math.pow(10, lg.v);
    B = duffing(2, 3 - delta, h, N); sep = new Float64Array(N + 1); tSep = null;
    for (let i = 0; i <= N; i++) { sep[i] = Math.hypot(A[2 * i] - B[2 * i], A[2 * i + 1] - B[2 * i + 1]); if (tSep === null && sep[i] > 1) tSep = i * h; }
  }
  const lg = ctl(d.controls, { label: '\\log_{10}\\delta', cls: '', key: 'logdelta', min: -3, max: -0.3, step: 0.1, value: -1, unit: '', dec: 1, detents: [-1, -2, -3], aria: 'the base-ten logarithm of the gap δ between the starts', onInput: () => { solve(); cy.reset(); } });
  solve();
  const ro = readout(d);
  const PH = { l: 110, r: 610, t: 120, b: 640 }, XT = { l: 790, r: 1340, t: 120, b: 360 }, SP2 = { l: 790, r: 1340, t: 440, b: 640 };
  let hits = [];
  hover(d.stage, () => hits, d.c);
  const ax1 = (i) => A[2 * i], ay1 = (i) => A[2 * i + 1], bx1 = (i) => B[2 * i], by1 = (i) => B[2 * i + 1], ti = (i) => i * h;
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), i = Math.min(N, Math.round(t / h)), recent = Math.max(0, i - Math.round(5 / h));
    const c1 = F.ref('path-1'), c2 = F.ref('path-2');
    hits = [];
    /* the phase plane */
    const ph = axes(ctx, PH, [-3.5, 3.5], [-6.5, 6.5], { xl: 'x', yl: 'y = x′', nx: 4, ny: 6, nice: true });
    [[bx1, by1, c2], [ax1, ay1, c1]].forEach(([X, Y, c]) => { run(ctx, ph, X, Y, 0, recent, alpha(c, 0.35), 2.5, 3); run(ctx, ph, X, Y, recent, i, c, 4, 2); });
    dot(ctx, ph.X(2), ph.Y(3), c1, false, 8); dot(ctx, ph.X(2), ph.Y(3 - delta), c2, false, 8);
    hits.push({ x: ph.X(2) + 14, y: ph.Y(3), r: 12, name: 'the start (2, 3)' }, { x: ph.X(2) - 14, y: ph.Y(3 - delta), r: 12, name: `the start (2, 3 − δ) = (2, ${fmt(3 - delta, 4)})` });
    const p1 = [ph.X(ax1(i)), ph.Y(ay1(i))], p2 = [ph.X(bx1(i)), ph.Y(by1(i))];
    line(ctx, p1[0], p1[1], p2[0], p2[1], PAL.ink, 2);
    dot(ctx, p2[0], p2[1], c2, true, 9); dot(ctx, p1[0], p1[1], c1, true, 9);
    hits.push({ x: p1[0], y: p1[1], r: 14, name: `the solution from (2, 3) at t = ${fmt(t, 2)}: (${fmt(ax1(i), 2)}, ${fmt(ay1(i), 2)})` },
      { x: p2[0], y: p2[1], r: 14, name: `the solution from (2, 3 − δ) at t = ${fmt(t, 2)}: (${fmt(bx1(i), 2)}, ${fmt(by1(i), 2)})` },
      { x: (p1[0] + p2[0]) / 2, y: (p1[1] + p2[1]) / 2, r: 10, name: `the distance between the two states, ${fmt(sep[i], 3)}` });
    /* x(t) of both */
    const xt = axes(ctx, XT, [0, T], [-3.5, 3.5], { xl: 't', yl: 'x', nx: 6, ny: 6, nice: true });
    run(ctx, xt, ti, bx1, 0, i, c2, 3.5, 2); run(ctx, xt, ti, ax1, 0, i, c1, 3.5, 2);
    dot(ctx, xt.X(t), xt.Y(bx1(i)), c2, true, 7); dot(ctx, xt.X(t), xt.Y(ax1(i)), c1, true, 7);
    /* the legend, on the line above the graph, clear of every curve */
    [['from (2, 3)', c1], ['from (2, 3 − δ)', c2]].forEach(([s, c], k) => {
      const y = XT.t - 24, x = XT.l + 90 + k * 230;
      line(ctx, x, y, x + 36, y, c, 4); text(ctx, s, x + 46, y, c, { size: 17, weight: 600, align: 'left', bg: PAL.panel });
    });
    /* their distance on a log scale */
    const lsp = axes(ctx, SP2, [0, T], [-4, 1], { xl: 't', yl: 'distance', nx: 6, ny: 5, nice: true, fy: (v) => (v === 0 ? '1' : v === 1 ? '10' : `10^{${fmt(v, 0)}}`) });
    line(ctx, lsp.X(0), lsp.Y(0), lsp.X(T), lsp.Y(0), alpha(PAL.ink, 0.45), 2, [10, 10]);
    run(ctx, lsp, ti, (k) => Math.log10(Math.max(1e-6, sep[k])), 0, i, PAL.ink, 3, 2);
    hits.push({ x: lsp.X(t), y: lsp.Y(clamp(Math.log10(Math.max(1e-6, sep[i])), -4, 1)), r: 14, name: `the distance between the two states at t = ${fmt(t, 2)}: ${fmt(sep[i], 3)}` });
    if (tSep !== null) {
      [xt, lsp].forEach((ax) => line(ctx, ax.X(tSep), ax.box.t, ax.X(tSep), ax.box.b, alpha(PAL.ink, 0.5), 2, [4, 8]));
      label(ctx, `t ≈ ${fmt(tSep, 1)}`, lsp.X(tSep), lsp.Y(0), { side: tSep > 24 ? 'left' : 'right', size: 17, gap: 12, color: PAL.ink, leader: false });
      hits.push({ x: lsp.X(tSep), y: lsp.Y(0), r: 12, name: `the first time the two states are more than 1 apart, t ≈ ${fmt(tSep, 2)}` });
    }
    const ds = sig2(delta);
    headline(ctx, tSep === null
      ? `$\\delta = ${ds}$: for $t \\le 30$ the solutions from $(2, 3)$ and $(2, 3 - \\delta)$ stay within 1 of each other.`
      : `$\\delta = ${ds}$: the solutions from $(2, 3)$ and $(2, 3 - \\delta)$ are first more than 1 apart at $t \\approx ${fmt(tSep, 1)}$.`);
    /* the distance is computed from the rounded states the readout shows, so the numbers shown agree */
    const r = (v) => Math.round(v * 100) / 100, P = [r(ax1(i)), r(ay1(i))], Q = [r(bx1(i)), r(by1(i))];
    ro.set(`\\kxdprime + 0.05\\kxprime + \\kx^3 = 8\\cos t,\\quad t = ${n(t)}:\\quad (\\kx, \\ky) = (${n(P[0])}, ${n(P[1])})\\ \\text{and}\\ (${n(Q[0])}, ${n(Q[1])}),\\ \\text{distance } ${n(Math.hypot(P[0] - Q[0], P[1] - Q[1]), 2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 5), draw });
})();

/* Figure 8.13: x(t) of the same equation from (2, 3) for t 0 to 100, stepped as the book's footnote says: Runge–Kutta with
   30,000 steps (h = 1/300; halving h moves no point by more than 0.01, checked numerically). Still: a long record has no motion
   worth running, and the chaos lesson is Figure 8.12's. x −3.5 to 3.5. */
(function () {
  const d = sim('fig-duffing-long', 420);
  const NS = 30000, h = 100 / NS, S = duffing(2, 3, h, NS);
  const BOX = { l: 110, r: 1340, t: 90, b: 340 };
  let hits = [];
  hover(d.stage, () => hits, d.c);
  F.tex(d.readout, '\\kxdprime + 0.05\\kxprime + \\kx^3 = 8\\cos t,\\quad \\kx(0) = 2,\\ \\kxprime(0) = 3:\\quad \\text{Runge–Kutta, } 30{,}000 \\text{ steps of } h = \\tfrac{1}{300}');
  function draw() {
    const { ctx } = begin(d.c), fc = C('function');
    const ax = axes(ctx, BOX, [0, 100], [-3.5, 3.5], { xl: 't', yl: 'x', nx: 10, ny: 6, nice: true });
    const q = F.arrival(d), upto = Math.round(NS * F.ease.smooth(clamp((q - 0.3) / 0.7, 0, 1)));
    run(ctx, ax, (i) => i * h, (i) => S[2 * i], 0, upto, fc, 3, 2);
    hits = [10, 25, 40, 55, 70, 85].map((t) => ({ x: ax.X(t), y: ax.Y(S[2 * Math.round(t / h)]), r: 14, name: `x(${t}) = ${fmt(S[2 * Math.round(t / h)], 2)}` }));
    headline(ctx, 'From $(2, 3)$: $\\kx$ swings with the forcing $8\\cos t$, but no two swings are alike.');
  }
  still(d, draw);
})();

/* Figure 8.14: the Poincaré section of the same equation. One run from (2, 3), RK4 at h = 2π/384 for 1,100 forcing periods,
   every step kept, computed once; the strobe at t = 2πk + φ for k = 100 … 1099 (the first 100 skipped as the transient) is a
   stored step, since φ moves in steps of 2π/64 = 6h. Left, the whole phase plane at Figure 8.12's window with the strobes and
   the last forcing period's loop faint, the zoomed window outlined; right, that window, which follows φ (its extent is the
   1,000 strobes', padded, round ticks, gliding to a new φ: a camera that follows the values). The clock is the cascade of the
   strobes, 1,000 in 8 s, slow at first (k grows as the fourth power of the clock) so the first loops can be read. φ from 0 to
   2π, detents at the book's two plots, 0 and π/4. The extents were checked numerically against a run at h = 2π/1536. */
(function () {
  const d = sim('sim-poincare-section', 640);
  const NP = 384, PER = 1100, SKIP = 100, M = PER - SKIP, h = (2 * Math.PI) / NP;
  const S = duffing(2, 3, h, NP * PER);
  const TT = 8, cy = cycle(() => TT, 1.2);
  const ph = ctl(d.controls, { label: '\\varphi', cls: '', key: 'phi', min: 0, max: 2 * Math.PI, step: (2 * Math.PI) / 64, value: 0, unit: '', dec: 2, detents: [0, Math.PI / 4], aria: 'the phase shift φ of the strobe', onInput: retarget });
  const ro = readout(d);
  const L = { l: 100, r: 560, t: 120, b: 580 }, Z = { l: 720, r: 1330, t: 120, b: 580 };
  const at = (k, j) => (k * NP + j) * 2;   /* the stored state at t = 2πk + jh */
  const phiIdx = () => Math.round((ph.v / (2 * Math.PI)) * 64) * 6 % NP;
  function extent(j) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let k = SKIP; k < PER; k++) { const p = at(k, j), x = S[p], y = S[p + 1]; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    const px = 0.06 * (x1 - x0), py = 0.06 * (y1 - y0);
    return [x0 - px, x1 + px, y0 - py, y1 + py];
  }
  let win = extent(phiIdx()), from = win, to = win;
  const glide = tween(d, 1);
  function retarget() { from = win; to = extent(phiIdx()); glide.set(0); glide.to(1, 700); }
  let hits = [];
  hover(d.stage, () => hits, d.c);
  const piFrac = (j6) => {   /* φ = (j6/6)(2π/64) = mπ/32, written as a fraction of π */
    const m = j6 / 6; if (m === 0) return '0';
    const g = (a, b) => (b ? g(b, a % b) : a), q = g(m, 32), a = m / q, b = 32 / q;
    return `${a === 1 ? '' : a}\\pi${b === 1 ? '' : '/' + b}`;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('point'), cc = C('curve'), j = phiIdx(), u = cy.now() / TT;
    const K = Math.min(M, Math.floor(M * Math.pow(u, 4) + 1e-9));
    const g = F.ease.smooth(clamp(glide.v, 0, 1));
    win = from.map((v, i) => v + (to[i] - v) * g);
    hits = [];
    /* the whole plane: the last period's loop, the strobes so far, the zoomed window */
    const ax = axes(ctx, L, [-3.5, 3.5], [-6.5, 6.5], { xl: 'x', yl: 'y = x′', nx: 4, ny: 6, nice: true });
    if (K >= 1) {
      const k1 = SKIP + K - 1, i0 = k1 * NP + j - NP, i1 = k1 * NP + j;
      run(ctx, ax, (i) => S[2 * i], (i) => S[2 * i + 1], Math.max(0, i0), i1, alpha(cc, 0.55 * clamp((300 - K) / 250, 0.3, 1)), 2.5, 2);
      const im = i0 + NP / 2;
      hits.push({ x: ax.X(S[2 * im]), y: ax.Y(S[2 * im + 1]), r: 14, name: `the trajectory over the forcing period before t = 2π·${k1} + φ` });
    }
    for (let k = SKIP; k < SKIP + K; k++) { const p = at(k, j); dot(ctx, ax.X(S[p]), ax.Y(S[p + 1]), pc, true, 1.6); }
    const [x0, x1, y0, y1] = win;
    line(ctx, ax.X(x0), ax.Y(y0), ax.X(x1), ax.Y(y0), alpha(PAL.ink, 0.6), 2, [10, 10]); line(ctx, ax.X(x1), ax.Y(y0), ax.X(x1), ax.Y(y1), alpha(PAL.ink, 0.6), 2, [10, 10]);
    line(ctx, ax.X(x1), ax.Y(y1), ax.X(x0), ax.Y(y1), alpha(PAL.ink, 0.6), 2, [10, 10]); line(ctx, ax.X(x0), ax.Y(y1), ax.X(x0), ax.Y(y0), alpha(PAL.ink, 0.6), 2, [10, 10]);
    hits.push({ x: ax.X(x1), y: ax.Y((y0 + y1) / 2), r: 14, name: 'the window drawn large on the right' });
    /* the window, large */
    const az = axes(ctx, Z, [x0, x1], [y0, y1], { xl: 'x', yl: 'y = x′', nx: 5, ny: 6, nice: true });
    for (let k = SKIP; k < SKIP + K; k++) { const p = at(k, j); dot(ctx, az.X(S[p]), az.Y(S[p + 1]), pc, true, 2.2); }
    if (K >= 1) {
      const p = at(SKIP + K - 1, j), q = pinned(ctx, az.box, az.X, az.Y, S[p], S[p + 1], pc);
      dot(ctx, q.x, q.y, pc, true, 7);
      hits.push({ x: q.x, y: q.y, r: 14, name: `the latest strobe, k = ${SKIP + K - 1}: (${fmt(S[p], 2)}, ${fmt(S[p + 1], 2)})` });
      const r = at(SKIP + K - 1, j);
      ro.set(`\\bigl(\\kx(2\\pi k + \\varphi), \\ky(2\\pi k + \\varphi)\\bigr),\\ k = 100, 101, \\ldots, 1099,\\quad \\varphi = ${piFrac(j)}:\\quad k = ${SKIP + K - 1}:\\ (${n(S[r])}, ${n(S[r + 1])})`);
    } else ro.set(`\\bigl(\\kx(2\\pi k + \\varphi), \\ky(2\\pi k + \\varphi)\\bigr),\\ k = 100, 101, \\ldots, 1099,\\quad \\varphi = ${piFrac(j)}`);
    headline(ctx, K < M
      ? `Phase shift $\\varphi = ${piFrac(j)}$: ${K.toLocaleString('en-US')} of 1,000 strobes at $t = 2\\pi k + \\varphi$, $k \\ge 100$.`
      : `Phase shift $\\varphi = ${piFrac(j)}$: 1,000 strobes at $t = 2\\pi k + \\varphi$ after the first 100 trace the strange attractor.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 8.15 + 8.16: the Lorenz system x′ = −10x + 10y, y′ = 28x − y − xz, z′ = −(8/3)z + xy from (x₀, x₀, z₀), the book's start
   (1, 1, 20) the default (its x(t) for 0 ≤ t ≤ 15 matches Figure 8.16 peak for peak, checked numerically), stepped by RK4 at
   h = 0.005 to t = 15 (halving h keeps every sign change of x). Above, mathematical 3D (the book's RULES.md): the trajectory
   drawn into space as the clock runs, the three critical points of Exercise 8.5.101 hollow (all unstable), axes on the book's box
   x −20 to 20, y −25 to 25, z 0 to 50; free orbit, opening near the book's view (x left to right, y receding, z up); the spin
   button offered and off; the wheel zooms. Beneath, x(t) on t 0 to 15, x −20 to 20 (Figure 8.16), to the present t, so a lobe
   switch is a sign change of x. The clock runs t 0 to 15 in 6 s. Sliders x₀ = y₀ and z₀, with dashed circles at the
   critical points' coordinates. */
(function () {
  const d = sim('sim-lorenz');
  const box = [[-20, 20], [-25, 25], [0, 50]], T = 15, h = 0.005, N = Math.round(T / h), CH = 100;
  const S3 = F.space3d(d, { box, h: 560, fit: 2.9, turn: -0.42, tilt: 0.3, spin: 'idle' });
  if (S3.v) S3.v.look({});   /* the spin is offered, never on by default (root 26.2) */
  const gc = F.makeCanvas(d.stage, 300);
  const cy = cycle(() => T, 1.2);
  const R = 6 * Math.SQRT2;
  const reset = () => { solve(); cy.reset(); };
  const xs = ctl(d.controls, { label: 'x_0 = y_0', cls: '', key: 'x0', min: -20, max: 20, step: 0.5, value: 1, unit: '', dec: 1, detents: [1], specials: [{ at: -R, label: 'critical point' }, { at: 0, label: 'z-axis' }, { at: R, label: 'critical point' }], aria: 'the start’s x and y', onInput: reset });
  const zs = ctl(d.controls, { label: 'z_0', cls: '', key: 'z0', min: 0, max: 40, step: 0.5, value: 20, unit: '', dec: 1, detents: [20], specials: [{ at: 0, label: 'critical point' }, { at: 27, label: 'critical point' }], aria: 'the start’s z', onInput: reset });
  const ro = readout(d);
  let P = null, sw = null, chunks = [];
  function solve() {
    P = new Float64Array(3 * (N + 1)); sw = new Int32Array(N + 1);
    let x = xs.v, y = xs.v, z = zs.v; P[0] = x; P[1] = y; P[2] = z;
    const f = (a, b, c) => [-10 * a + 10 * b, 28 * a - b - a * c, (-8 / 3) * c + a * b];
    for (let i = 0; i < N; i++) {
      const k1 = f(x, y, z), k2 = f(x + (h / 2) * k1[0], y + (h / 2) * k1[1], z + (h / 2) * k1[2]);
      const k3 = f(x + (h / 2) * k2[0], y + (h / 2) * k2[1], z + (h / 2) * k2[2]), k4 = f(x + h * k3[0], y + h * k3[1], z + h * k3[2]);
      x += (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]); y += (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]); z += (h / 6) * (k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2]);
      P[3 * i + 3] = x; P[3 * i + 4] = y; P[3 * i + 5] = z;
      sw[i + 1] = sw[i] + (P[3 * i] * x < 0 ? 1 : 0);   /* the sign changes of x so far */
    }
    chunks = []; for (let c = 0; c * CH < N; c++) chunks.push(span(c * CH, Math.min(N, (c + 1) * CH)));
  }
  const pt = (i) => [P[3 * i], P[3 * i + 1], P[3 * i + 2]];
  const span = (a, b) => { const out = []; for (let i = a; i <= b; i++) out.push(pt(i)); return out; };
  const NONE = [];
  solve();
  const GB = { l: 150, r: 1320, t: 40, b: 240 };
  let hits = [];
  hover(d.stage, () => hits, gc);
  const onAxis = () => xs.v === 0, atCrit = () => (xs.v === 0 && zs.v === 0) || (Math.abs(Math.abs(xs.v) - R) < 1e-9 && zs.v === 27);
  function draw() {
    const t = cy.now(), i = Math.min(N, Math.round(t / h)), cc = C('curve'), pc = C('point'), fc = C('function');
    /* the scene: axes, critical points, the start, the trajectory in chunks (a finished chunk is a layer that never changes) */
    /* a hollow sphere does not read in a scene, so the critical points (all unstable) and the start are filled and named on hover */
    S3.set('axes', SP.axes(box, { ticks: [10, 20, 10], names: ['$\\kx$', '$\\ky$', '$\\kz$'] }));
    S3.set('crit', [
      { k: 'dot', p: [0, 0, 0], color: pc, r: 7, name: 'the critical point (0, 0, 0), unstable' },
      { k: 'dot', p: [R, R, 27], color: pc, r: 7, name: 'the critical point (6√2, 6√2, 27), unstable, inside the right loop' },
      { k: 'dot', p: [-R, -R, 27], color: pc, r: 7, name: 'the critical point (−6√2, −6√2, 27), unstable, inside the left loop' },
    ]);
    const x0 = xs.v, z0 = zs.v;
    S3.set('start', [{ k: 'dot', p: [x0, x0, z0], color: pc, r: 6, name: `the start (${fmt(x0, 1)}, ${fmt(x0, 1)}, ${fmt(z0, 1)})` }]);
    const full = Math.floor(i / CH);
    for (let c = 0; c * CH < N; c++) S3.set('c' + c, c < full ? [{ k: 'line', pts: chunks[c], color: cc, w: 3, name: 'the trajectory' }] : NONE);
    S3.set('head', [
      ...(i > full * CH ? [{ k: 'line', pts: span(full * CH, i), color: cc, w: 3, name: 'the trajectory' }] : []),
      { k: 'dot', p: pt(i), color: cc, r: 9, name: `the state at t = ${fmt(t, 2)}: (${fmt(P[3 * i], 1)}, ${fmt(P[3 * i + 1], 1)}, ${fmt(P[3 * i + 2], 1)})` },
    ]);
    const xi = P[3 * i], side = xi > 0 ? 'right' : 'left', k = sw[i];
    S3.headline(atCrit()
      ? `The start $(${xs.v === 0 ? '0, 0' : xs.v > 0 ? '6\\sqrt{2}, 6\\sqrt{2}' : '-6\\sqrt{2}, -6\\sqrt{2}'}, ${zs.v})$ is a critical point: the solution stays there.`
      : onAxis()
        ? `On the $\\kz$-axis $\\kx = \\ky = 0$ for all $t$, and $\\kz = ${n(z0, 1)}e^{-8t/3}$ falls toward the critical point $(0, 0, 0)$: $t = ${n(t)}$, $\\kz = ${n(P[3 * i + 2])}$.`
        : `$t = ${n(t)}$: $\\kx = ${n(xi, 1)}$, on the ${side} loop; ${k === 0 ? '$\\kx$ has not changed sign yet' : `$\\kx$ has changed sign ${k === 1 ? 'once' : k + ' times'}`}.`);
    /* x(t), Figure 8.16 */
    const { ctx } = begin(gc);
    const ax = axes(ctx, GB, [0, T], [-20, 20], { xl: 't', yl: 'x', nx: 6, ny: 4, nice: true });
    run(ctx, ax, (j) => j * h, (j) => P[3 * j], 0, i, fc, 3.5, 1);
    const q = pinned(ctx, ax.box, ax.X, ax.Y, t, xi, fc);
    if (!q.out) dot(ctx, q.x, q.y, fc, true, 8);
    text(ctx, 'x > 0: right loop', GB.r - 8, ax.Y(17), PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    text(ctx, 'x < 0: left loop', GB.r - 8, ax.Y(-17), PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    hits = [{ x: q.x, y: q.y, r: 14, name: `x(${fmt(t, 2)}) = ${fmt(xi, 2)}` }];
    /* the readout, its derivatives computed from the rounded state it shows */
    const r = (v) => Math.round(v * 100) / 100, X = r(P[3 * i]), Y = r(P[3 * i + 1]), Zz = r(P[3 * i + 2]);
    if (atCrit()) {
      const c = xs.v === 0 ? '0, 0, 0' : xs.v > 0 ? '6\\sqrt{2}, 6\\sqrt{2}, 27' : '-6\\sqrt{2}, -6\\sqrt{2}, 27';
      ro.set(`t = ${n(t)}:\\ (\\kx,\\ky,\\kz) = (${c}),\\quad \\kxprime = -10\\kx + 10\\ky = 0,\\quad \\kyprime = 28\\kx - \\ky - \\kx\\kz = 0,\\quad \\kzprime = -\\tfrac{8}{3}\\kz + \\kx\\ky = 0`);
      return;
    }
    ro.set(`t = ${n(t)}:\\ (\\kx,\\ky,\\kz) = (${n(X)}, ${n(Y)}, ${n(Zz)}),\\quad \\kxprime = -10\\kx + 10\\ky = ${n(-10 * X + 10 * Y, 1)},\\quad \\kyprime = 28\\kx - \\ky - \\kx\\kz = ${n(28 * X - Y - X * Zz, 1)},\\quad \\kzprime = -\\tfrac{8}{3}\\kz + \\kx\\ky = ${n((-8 / 3) * Zz + X * Y, 1)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 2.5), draw });
})();
};
