/* Figures for section 3.9 Nonhomogeneous systems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.9'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, label, headline, register, readout, fmt, hover, cycle, pinned, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const signed = (v, dec = 2) => (v < 0 ? '-' : '+') + n(Math.abs(v), dec);
const r2 = (v) => Math.round(v * 100) / 100;
const guide = () => alpha(PAL.ink, 0.35);

/* Sim: Example 3.9.2 by eigenvector decomposition. A = [1 3; 3 1] has λ₁ = −2 with v₁ = (1, −1) and λ₂ = 4 with
   v₂ = (1, 1); f⃗ = (2eᵗ, 2t) decomposes as g₁ = eᵗ − t, g₂ = eᵗ + t, so x = v₁ξ₁ + v₂ξ₂ with
   ξ₁′ = −2ξ₁ + eᵗ − t:  ξ₁ = eᵗ/3 − t/2 + 1/4 + C₁e^(−2t),  C₁ = ξ₁(0) − 7/12,
   ξ₂′ = 4ξ₂ + eᵗ + t:   ξ₂ = −eᵗ/3 − t/4 − 1/16 + C₂e^(4t),  C₂ = ξ₂(0) + 19/48.
   The book's x(0) = (3/16, −5/16) is ξ₁(0) = a₁ = 1/4, ξ₂(0) = a₂ = −1/16 (C₁ = −1/3, C₂ = 1/3); the dashed special
   on ξ₂(0) is −19/48, where C₂ = 0 and no e^(4t) term is left. Sliders step by 1/48, so 1/4, −1/16 and −19/48 are
   all on the grid. Left: the x₁x₂-plane, equal scales −4 to 4, the two eigenvector lines, x(t) as the corner of the
   parallelogram with sides ξ₁v₁ and ξ₂v₂, the trajectory up to t. Right: ξ₁(t), ξ₂(t) for t 0 to 1, ξ −3 to 3
   (ξ₁ stays within ±1 over the sliders; ξ₂ is carried off by e^(4t) and pinned at the edge). One run, t 0 to 1, takes
   6 s. The headline's and readout's numbers come from ξ₁, ξ₂ rounded to two decimals, so that the sums shown are
   the sums of the numbers shown. */
(function () {
  const d = sim('sim-eigen-decomposition', 720);
  const T = 1, STEP = 1 / 48, SPECIAL = -19 / 48;
  const a1 = ctl(d.controls, { label: 'ξ₁(0)', cls: 'point', key: 'xi1', min: -1, max: 1, step: STEP, value: 0.25, unit: '', dec: 3, detents: [0.25],
    aria: 'the starting value ξ₁(0) = a₁', onInput: () => cy.reset() });
  const a2 = ctl(d.controls, { label: 'ξ₂(0)', cls: 'point', key: 'xi2', min: -1, max: 1, step: STEP, value: -1 / 16, unit: '', dec: 3, detents: [-1 / 16],
    aria: 'the starting value ξ₂(0) = a₂', specials: [{ at: SPECIAL, label: 'C₂ = 0' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const PLANE = { l: 110, r: 610, t: 140, b: 640 }, GRAPH = { l: 770, r: 1320, t: 140, b: 640 };
  const V1 = [1, -1], V2 = [1, 1];
  let hits = [];
  hover(d.stage, () => hits);
  const consts = () => ({ c1: a1.v - 7 / 12, c2: a2.v + 19 / 48, on: Math.abs(a2.v - SPECIAL) < 1e-6 });
  const xi1Of = (c1) => (t) => Math.exp(t) / 3 - t / 2 + 1 / 4 + c1 * Math.exp(-2 * t);
  const xi2Of = (c2) => (t) => -Math.exp(t) / 3 - t / 4 - 1 / 16 + c2 * Math.exp(4 * t);
  const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
  const cy = cycle(() => T, 1.2);
  function draw() {
    const t = REDUCED ? T : cy.now();
    const { ctx } = begin(d.c);
    const vc = C('vector'), kc = C('curve'), pc = C('point'), fc = C('function'), ec = C('eigenvalue'), r1 = F.ref('xi-1'), r2c = F.ref('xi-2');
    const { c1, c2, on } = consts(), xi1 = xi1Of(c1), xi2 = xi2Of(on ? 0 : c2);
    const s1 = xi1(t), s2 = xi2(t), x = [s1 + s2, -s1 + s2];
    const s1r = r2(s1), s2r = r2(s2), xr = [r2(s1r + s2r), r2(-s1r + s2r)];
    hits = [];

    /* the plane */
    const P = axes(ctx, PLANE, [-4, 4], [-4, 4], { xl: 'x_1', yl: 'x_2', xc: fc, yc: fc, nx: 4, ny: 4 });
    const at = (p) => [P.X(p[0]), P.Y(p[1])];
    /* the eigenvector lines, each its own axis of the skew coordinates */
    [[V1, 'v_1', 'λ_1 = −2', -1], [V2, 'v_2', 'λ_2 = 4', 1]].forEach(([v, name, lam, s]) => {
      line(ctx, P.X(-4.2 * v[0]), P.Y(-4.2 * v[1]), P.X(4.2 * v[0]), P.Y(4.2 * v[1]), alpha(vc, 0.55), 3);
      /* the names stand outside the plane, beside the corner where the line leaves it */
      const cyv = s > 0 ? P.box.t + 12 : P.box.b - 12;
      label(ctx, name, P.box.r + 16, cyv, { side: 'right', color: vc, size: 22, gap: 6, leader: false });
      label(ctx, lam, P.box.r + 16, cyv + s * 30, { side: 'right', color: ec, size: 18, gap: 6, leader: false });
      hits.push({ x: P.box.r + 26, y: cyv, r: 22, name: name === 'v_1' ? 'the eigenvector line of v₁ = (1, −1), eigenvalue λ₁ = −2' : 'the eigenvector line of v₂ = (1, 1), eigenvalue λ₂ = 4' });
    });
    /* the trajectory: all of it faint, the part run so far solid */
    const traj = (u) => [xi1(u) + xi2(u), -xi1(u) + xi2(u)];
    const path = (u0, u1, col, w) => {
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
      const N = 160; for (let i = 0; i <= N; i++) { const p = at(traj(u0 + ((u1 - u0) * i) / N)); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
      ctx.stroke(); ctx.restore();
    };
    clip(ctx, P.box, () => {
      path(0, T, alpha(kc, 0.3), 3);
      if (t > 0) path(0, t, kc, 5);
      /* the parallelogram: ξ₁v₁ then ξ₂v₂ to the corner x, the other two sides dashed */
      const p1 = [s1 * V1[0], s1 * V1[1]], p2 = [s2 * V2[0], s2 * V2[1]];
      line(ctx, ...at(p2), ...at(x), guide(), 2, [6, 7]);
      line(ctx, P.X(0), P.Y(0), ...at(p2), guide(), 2, [6, 7]);
      if (Math.abs(s1) > 0.06) arrow(ctx, P.X(0), P.Y(0), ...at(p1), vc, 4);
      if (Math.abs(s2) > 0.06) arrow(ctx, ...at(p1), ...at(x), vc, 4);
      /* the two coordinates read on their own lines */
      dot(ctx, ...at(p1), r1, true, 8);
      dot(ctx, ...at(p2), r2c, true, 8);
      hits.push({ x: at(p1)[0], y: at(p1)[1], r: 14, name: `ξ₁v₁ = ${n(s1r)}·(1, −1), the coordinate along v₁` },
        { x: at(p2)[0], y: at(p2)[1], r: 14, name: `ξ₂v₂ = ${n(s2r)}·(1, 1), the coordinate along v₂` });
    });
    const x0 = traj(0);
    dot(ctx, ...at(x0), pc, false, 10);
    hits.push({ x: at(x0)[0], y: at(x0)[1], r: 16, name: `x(0) = (${n(x0[0], 3)}, ${n(x0[1], 3)}), the initial condition` });
    const xp = pinned(ctx, P.box, P.X, P.Y, x[0], x[1], vc);
    hits.push({ x: xp.x, y: xp.y, r: 16, name: `x(${n(t)}) = (${n(xr[0])}, ${n(xr[1])}), the corner of the parallelogram` });
    hits.push({ x: P.X(traj(T * 0.5)[0]), y: P.Y(traj(T * 0.5)[1]), r: 14, name: 'the trajectory of x(t), 0 ≤ t ≤ 1' });

    /* the two scalar functions against t */
    const G = axes(ctx, GRAPH, [0, 1], [-3, 3], { xl: 't', yl: 'ξ_1, ξ_2', yc: fc, nx: 4, ny: 6, fx: (v) => fmt(v, 2) });
    line(ctx, G.X(t), G.box.t, G.X(t), G.box.b, guide(), 2, [4, 8]);
    [[xi1, r1], [xi2, r2c]].forEach(([f, col]) => {
      plot(ctx, G, f, alpha(col, 0.3), { w: 3 });
      if (t > 0) plot(ctx, G, f, col, { w: 5, x: [0, t] });
      dot(ctx, G.X(0), G.Y(f(0)), pc, false, 9);
    });
    const q1 = pinned(ctx, G.box, G.X, G.Y, t, s1, r1), q2 = pinned(ctx, G.box, G.X, G.Y, t, s2, r2c, s2 > 3 || s2 < -3 ? n(s2r) : undefined);
    /* names at the right end, pushed apart where the two ends meet */
    let y1 = G.Y(Math.max(-3, Math.min(3, xi1(T)))), y2 = G.Y(Math.max(-3, Math.min(3, xi2(T))));
    if (Math.abs(y1 - y2) < 34) { const m = (y1 + y2) / 2, s = y1 <= y2 ? -1 : 1; y1 = m + s * 17; y2 = m - s * 17; }
    label(ctx, 'ξ_1', G.box.r, y1, { side: 'right', color: r1, size: 22, gap: 10, leader: false });
    label(ctx, 'ξ_2', G.box.r, y2, { side: 'right', color: r2c, size: 22, gap: 10, leader: false });
    hits.push({ x: q1.x, y: q1.y, r: 16, name: `ξ₁(${n(t)}) = ${n(s1r)}, solving ξ₁′ = −2ξ₁ + eᵗ − t` },
      { x: q2.x, y: q2.y, r: 16, name: `ξ₂(${n(t)}) = ${n(s2r)}, solving ξ₂′ = 4ξ₂ + eᵗ + t` },
      { x: G.X(0), y: G.Y(xi1(0)), r: 14, name: `ξ₁(0) = a₁ = ${n(a1.v, 3)}` },
      { x: G.X(0), y: G.Y(xi2(0)), r: 14, name: `ξ₂(0) = a₂ = ${n(a2.v, 3)}` },
      { x: G.X(0.75), y: G.Y(Math.max(-3, Math.min(3, xi1(0.75)))), r: 14, name: `ξ₁ = eᵗ/3 − t/2 + 1/4 ${signed(r2(c1))}e^(−2t)` },
      { x: G.X(0.4), y: G.Y(Math.max(-3, Math.min(3, xi2(0.4)))), r: 14, name: on ? 'ξ₂ = −eᵗ/3 − t/4 − 1/16, with C₂ = 0' : `ξ₂ = −eᵗ/3 − t/4 − 1/16 ${signed(r2(c2))}e^(4t)` });

    if (on) headline(ctx, `$\\kxione(0) = ${n(a1.v, 3)}$ gives $C_1 = ${n(c1)}$, and $\\kxitwo(0) = -19/48$ gives $C_2 = 0$: no $e^{4t}$ term is left, and $\\kxitwo$ only follows its forcing.`);
    else headline(ctx, `$\\kxione(0) = ${n(a1.v, 3)}$ gives $C_1 = ${n(c1)}$ and $\\kxitwo(0) = ${n(a2.v, 3)}$ gives $C_2 = ${n(c2)}$: $\\kxione$ forgets its start at the rate $e^{-2t}$, while $C_2e^{4t}$ carries $\\kxitwo$ off.`);
    ro.set(`\\kvecx(${n(t)}) = \\kvecvone\\,\\kxione + \\kvecvtwo\\,\\kxitwo = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}(${n(s1r)}) + \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}(${n(s2r)}) = \\begin{bmatrix} ${n(xr[0])} \\\\ ${n(xr[1])} \\end{bmatrix}`, undefined, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 6), draw });
})();
};
