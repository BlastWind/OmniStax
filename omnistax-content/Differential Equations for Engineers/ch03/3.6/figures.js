/* Figures for section 3.6 Second-order systems and applications. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, arrow, text, hbracket, headline, register, readout, fmt, hover, cycle, spring, fixed, cart, pinned, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(Math.abs(v) < 0.5 * 10 ** -dec ? 0 : v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw, d = [10, 10]) => { ctx.save(); ctx.setLineDash(d); draw(); ctx.restore(); };
const run = (d, T, rate, draw, hold = 1.2) => { const cy = cycle(T, hold); register(d.fig, { update: (dt) => cy.step(dt, rate), draw: () => draw(REDUCED ? T() : cy.now()) }); return cy; };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });
const col = (a) => `\\begin{bmatrix} ${a.join(' \\\\ ')} \\end{bmatrix}`;
/* a cart of the book's sketches: a body w by h whose wheels stand on the floor at FY, centred at x */
const body = (ctx, x, FY, w, h, color) => { const r = Math.max(6, Math.min(w, h) / 6), cy = FY - h / 2 - 2 * r; cart(ctx, x, cy, w, h, color); return cy; };

/* Figure 3.12: three masses between two walls on four springs, every m_i = 1 kg and k_i = 1 N/m, so K is
   [[−2, 1, 0], [1, −2, 1], [0, 1, −2]]. Still: the reader sets the displacements x₁, x₂, x₃ (−0.5 to 0.5 m) and each
   mass carries the net spring force on it, its row of Kx⃗ (a symbolic arrow, 120 units per newton; the largest,
   2 N, reaches 240). The walls stand 1240 units apart with the masses evenly spaced at rest; the scene is 120 units
   per metre, so neighbouring masses at ±0.5 m still leave a spring of 77 units. */
(function () {
  const d = sim('sim-three-carts', 470);
  const WL = 80, WR = 1320, FY = 340, CW = 150, CH = 90, SC = 120, FN = 120;
  const REST = [352.5, 700, 1047.5];
  const xs = [0.3, 0, -0.2].map((v, i) => ctl(d.controls, { label: `\\kx${['one', 'two', 'three'][i]}`, cls: 'function', key: `x${i + 1}`, min: -0.5, max: 0.5, step: 0.01, value: v, unit: 'm', dec: 2, aria: `the displacement x${'₁₂₃'[i]} of mass ${i + 1}`, detents: [0] }));
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, x = xs.map((s) => s.v), refs = ['mass-1', 'mass-2', 'mass-3'].map((r) => F.ref(r));
    const Fn = [-2 * x[0] + x[1], x[0] - 2 * x[1] + x[2], x[1] - 2 * x[2]];
    const cx = x.map((v, i) => REST[i] + v * SC);
    fixed(ctx, WL - 36, 150, 36, FY - 150); fixed(ctx, WR, 150, 36, FY - 150);
    line(ctx, WL, FY, WR, FY, ink, 3);
    REST.forEach((r) => line(ctx, r, 170, r, FY + 12, guide(), 2, [4, 8]));
    let cy = 0;
    hits = [];
    /* the springs first, from wall or face to face, each named by its stretch on hover */
    const ends = [[WL, 0, -1], [0, 1, 0], [1, 2, 1], [2, WR, 2]];
    const cyOf = FY - CH / 2 - 2 * Math.max(6, Math.min(CW, CH) / 6);
    ends.forEach(([a, b], j) => {
      const xa = j === 0 ? WL : cx[a] + CW / 2, xb = j === 3 ? WR : cx[b] - CW / 2;
      spring(ctx, xa, cyOf, xb, cyOf, 7, 16, ink, 3);
      const right = j === 3 ? 0 : x[b], left = j === 0 ? 0 : x[a], s = right - left;
      text(ctx, `k_${j + 1}`, (xa + xb) / 2, cyOf + 38, ink, { size: 20, align: 'center', italic: true, bg: PAL.panel });
      hits.push({ x: (xa + xb) / 2, y: cyOf, r: 22, name: `spring ${j + 1}, k${'₁₂₃₄'[j]} = 1 N/m, ${Math.abs(s) < 0.005 ? 'at its rest length' : `${s > 0 ? 'stretched' : 'squeezed'} by ${fmt(Math.abs(s), 2)} m`}` });
    });
    cx.forEach((c, i) => {
      cy = body(ctx, c, FY, CW, CH, refs[i]);
      text(ctx, `m_${i + 1}`, c, cy, refs[i], { size: 24, align: 'center', italic: true });
      /* the displacement, bracketed below the floor from the rest mark */
      if (Math.abs(x[i]) > 0.005) hbracket(ctx, REST[i], c, FY + 34, fc, `x_${i + 1}`, { side: 'below', size: 20 });
      /* the net spring force, symbolic, from the top of the mass */
      const len = Fn[i] * FN, y = cy - CH / 2 - 30;
      if (Math.abs(len) >= 4) arrow(ctx, c, y, c + len, y, ink, 4);
      mark(ctx, `${fmt(Fn[i], 2)} N`, c + (Math.abs(len) >= 4 ? len / 2 : 0), y - 28, ink, { align: 'center', tex: false, weight: 400, size: 18 });
      hits.push({ x: c, y: cy, r: 60, name: `mass ${i + 1}, m${'₁₂₃'[i]} = 1 kg, displaced ${fmt(x[i], 2)} m` },
        { x: c + len / 2, y, r: 18, name: `the net spring force on mass ${i + 1}, row ${i + 1} of Kx⃗ = ${fmt(Fn[i], 2)} N` });
    });
    hits.push({ x: WL - 18, y: 240, r: 24, name: 'the left wall' }, { x: WR + 18, y: 240, r: 24, name: 'the right wall' });
    headline(ctx, `The net spring forces: $m_1\\kxonedprime = ${n(Fn[0])}$ N, $m_2\\kxtwodprime = ${n(Fn[1])}$ N, $m_3\\kxthreedprime = ${n(Fn[2])}$ N.`);
    F.tex(d.readout, `\\kM\\kvecxdprime = \\kK\\kvecx = \\begin{bmatrix} -2 & 1 & 0 \\\\ 1 & -2 & 1 \\\\ 0 & 1 & -2 \\end{bmatrix} ${col(x.map((v) => n(v)))} = ${col(Fn.map((v) => n(v)))}`);
  }
  still(d, draw);
})();

/* Figures 3.13 + 3.14 + 3.15: Example 3.6.1's carts, m₁ = 2, m₂ = 1, k₁ = 4, k₂ = 2, so x⃗″ = [[−3, 1], [2, −2]]x⃗ with
   the modes [1, 2] cos t and [1, −1] cos 2t (Figure 3.14 plots them with c = 1) and the example's motion
   2 sin t [1, 2] + (cos 2t − sin 2t)[1, −1] (Figure 3.15). Moving: t 0 to 10 in 5 s. The scene is 66 units per metre:
   x₁ reaches −3.30 to 2.44 and x₂ −3.88 to 5.23, x₂ − x₁ −3.74 to 4.70, so with the wall face at 100 and the rest
   positions at 437 and 866 the springs never close below 66 units and cart 2 stays inside 1264. Graph t 0 to 10 by
   x −6 to 6. A change of motion bends the curves and the carts from one motion into the next. */
(function () {
  const d = sim('sim-normal-modes', 760);
  const MOT = {
    mode1: [(t) => Math.cos(t), (t) => 2 * Math.cos(t)],
    mode2: [(t) => Math.cos(2 * t), (t) => -Math.cos(2 * t)],
    sum: [(t) => 2 * Math.sin(t) + Math.cos(2 * t) - Math.sin(2 * t), (t) => 4 * Math.sin(t) - Math.cos(2 * t) + Math.sin(2 * t)],
  };
  /* the stretch of floor each cart's centre covers over one period 2π, shared by all three motions */
  const RANGE = {};
  Object.keys(MOT).forEach((m) => { RANGE[m] = MOT[m].map((f) => { let lo = Infinity, hi = -Infinity; for (let i = 0; i <= 2000; i++) { const v = f((2 * Math.PI * i) / 2000); lo = Math.min(lo, v); hi = Math.max(hi, v); } return [lo, hi]; }); });
  const mode = choice(d.controls, { label: 'motion', key: 'motion', value: 'mode1', options: [
    { value: 'mode1', label: 'Mode 1' }, { value: 'mode2', label: 'Mode 2' }, { value: 'sum', label: 'Example 3.6.1' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const WX = 100, FY = 330, CW = 106, CH = 70, SC = 66, REST = [437, 866], BOX = { l: 140, r: 1300, t: 440, b: 690 };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, () => 10, () => 2, (t) => {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, refs = [F.ref('cart-1'), F.ref('cart-2')], m = mode.value;
    const f = [0, 1].map((i) => (s) => mode.mix((v) => MOT[v][i](s)));
    const x = f.map((g) => g(t)), cx = x.map((v, i) => REST[i] + v * SC);
    const rng = [0, 1].map((i) => mode.mix((v) => RANGE[v][i]));
    /* the scene: the wall, the floor, each cart's stretch of floor, the springs and the carts */
    fixed(ctx, WX - 36, 120, 36, FY - 120);
    line(ctx, WX, FY, 1340, FY, ink, 3);
    hits = [];
    rng.forEach(([lo, hi], i) => {
      ctx.save(); ctx.fillStyle = alpha(refs[i], 0.22); ctx.fillRect(REST[i] + lo * SC, FY + 4, (hi - lo) * SC, 14); ctx.restore();
      hits.push({ x: REST[i] + ((lo + hi) / 2) * SC, y: FY + 11, r: 16, name: `the floor cart ${i + 1}'s centre covers: x${'₁₂'[i]} from ${fmt(lo, 2)} to ${fmt(hi, 2)} m` });
    });
    REST.forEach((r) => line(ctx, r, 150, r, FY + 26, guide(), 2, [4, 8]));
    const sy = FY - CH / 2 - 2 * Math.max(6, Math.min(CW, CH) / 6);
    spring(ctx, WX, sy, cx[0] - CW / 2, sy, 8, 16, ink, 3);
    spring(ctx, cx[0] + CW / 2, sy, cx[1] - CW / 2, sy, 8, 16, ink, 3);
    hits.push({ x: (WX + cx[0] - CW / 2) / 2, y: sy, r: 22, name: 'spring 1, k₁ = 4 N/m' }, { x: (cx[0] + cx[1]) / 2, y: sy, r: 22, name: 'spring 2, k₂ = 2 N/m' });
    cx.forEach((c, i) => {
      body(ctx, c, FY, CW, CH, refs[i]);
      text(ctx, `m_${i + 1}`, c, sy, refs[i], { size: 24, align: 'center', italic: true });
      hits.push({ x: c, y: sy, r: 50, name: `cart ${i + 1}, m${'₁₂'[i]} = ${i ? 1 : 2} kg, at x${'₁₂'[i]} = ${fmt(x[i], 2)} m` });
    });
    text(ctx, 'x = 0', REST[0] + 8, 140, PAL.muted, { size: 17 }); text(ctx, 'x = 0', REST[1] + 8, 140, PAL.muted, { size: 17 });
    /* the graph: x₁ and x₂ faint over the window and solid up to t, each in its cart's colour */
    const ax = axes(ctx, BOX, [0, 10], [-6, 6], { xl: 't', yl: 'x (m)', nx: 5, ny: 6, fy: (u) => fmt(u, 0) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    f.forEach((g, i) => { plot(ctx, ax, g, alpha(refs[i], 0.3), { w: 3 }); if (t > 0) plot(ctx, ax, g, refs[i], { w: 5, x: [0, t] }); });
    f.forEach((g, i) => { const P = pinned(ctx, ax.box, ax.X, ax.Y, t, x[i], refs[i]); hits.push({ x: P.x, y: P.y, r: 14, name: `x${'₁₂'[i]}(${fmt(t, 2)}) = ${fmt(x[i], 2)} m, cart ${i + 1}` }); });
    text(ctx, 'x_1', BOX.r - 70, BOX.t - 24, refs[0], { size: 20, weight: 600, align: 'right' });
    text(ctx, 'x_2', BOX.r, BOX.t - 24, refs[1], { size: 20, weight: 600, align: 'right' });
    const head = {
      mode1: 'Mode 1: the carts swing together, cart 2 twice as far as cart 1, at the natural frequency $\\komegaone = 1$.',
      mode2: 'Mode 2: the carts swing in opposite directions, equally far, at the natural frequency $\\komegatwo = 2$.',
      sum: '$\\kvecx(0) = (1, -1)$, $\\kvecxprime(0) = (0, 6)$: both modes at once, $2\\sin t$ of mode 1 and $\\cos 2t - \\sin 2t$ of mode 2.',
    }[m];
    headline(ctx, head);
    const now = `${col([n(x[0]), n(x[1])])}\\ \\text{at } t = ${n(t)}`;
    const form = {
      mode1: `\\kvecx = ${col([1, 2])}\\cos t`,
      mode2: `\\kvecx = ${col([1, -1])}\\cos 2t`,
      sum: `\\kvecx = ${col([1, 2])}\\,2\\sin t + ${col([1, -1])}(\\cos 2t - \\sin 2t)`,
    }[m];
    ro.set(`${form} = ${now}`, undefined, { form: m, values: false });
  });
})();

/* Figures 3.16 + 3.17: Example 3.6.2. Car 1 (2 kg) rolls at 3 m/s for 0.6 s, links with car 2 (1 kg) through the bumper
   (k = 2 N/m) at t = 0, and then x₁ = 2t + (1/√3) sin √3t, x₂ = 2t − (2/√3) sin √3t until x₂ = d, the wall. The wall's
   distance d is the slider (4 to 16 m, the book's 10), with dashed circles at the safe distances 4π/√3 and 8π/√3,
   where x₂′ = 2 − 2 cos √3t is zero at impact. The wall face is fixed at 1300 and the scene is 56 units per metre, so
   at d = 16 car 1 starts at 92; the bumper is 2.2 m long at rest and squeezes by at most √3 m. The velocity arrows are
   kinematic, 25 units per m/s, each ending at its car's centre so none reaches into the wall. Graph t 0 to 9 (d = 16 hits at 8.49 s) by x 0 to 18. */
(function () {
  const d = sim('sim-railcars', 760);
  const R3 = Math.sqrt(3), T0 = 0.6, SAFE1 = (4 * Math.PI) / R3, SAFE2 = (8 * Math.PI) / R3;
  const dS = ctl(d.controls, { label: 'd', cls: '', key: 'd', min: 4, max: 16, step: 0.01, value: 10, unit: 'm', dec: 2, aria: 'the distance d from car 2 to the wall',
    specials: [{ at: SAFE1, label: 'safe' }, { at: SAFE2, label: 'safe' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const x1 = (t) => (t < 0 ? 3 * t : 2 * t + Math.sin(R3 * t) / R3), x2 = (t) => (t < 0 ? 0 : 2 * t - (2 / R3) * Math.sin(R3 * t));
  const v1 = (t) => (t < 0 ? 3 : 2 + Math.cos(R3 * t)), v2 = (t) => (t < 0 ? 0 : 2 - 2 * Math.cos(R3 * t));
  /* x₂ never decreases, so the impact time is the one root of x₂(t) = d, found by bisection */
  const impact = (dd) => { let lo = 0, hi = 20; for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (x2(m) < dd) lo = m; else hi = m; } return (lo + hi) / 2; };
  let cache = { d: NaN, t: 0 };
  const tImp = () => { if (cache.d !== dS.v) cache = { d: dS.v, t: impact(dS.v) }; return cache.t; };
  const WX = 1300, FY = 300, SC = 56, CW = 67, CH = 40, BUMP = 2.2 * SC, VS = 25, BOX = { l: 140, r: 1300, t: 450, b: 690 };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, () => T0 + tImp(), () => 1.5, (tau) => {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, dc = C('derivative'), r1 = F.ref('car-1'), r2 = F.ref('car-2'), dd = dS.v, ti = tImp();
    const t = Math.min(tau - T0, ti), a = x1(t), b = x2(t);
    const front2 = WX - dd * SC + b * SC, c2 = front2 - CW / 2, c1 = c2 - CW / 2 - BUMP + (a - b) * SC - CW / 2;
    /* the scene: the track, the wall, the distance d to it, the bumper and the cars */
    fixed(ctx, WX, 140, 30, FY - 140);
    line(ctx, 40, FY, WX, FY, ink, 3);
    hbracket(ctx, WX - dd * SC, WX, FY + 40, ink, `d = ${fmt(dd, 2)} m`, { side: 'below', size: 20 });
    line(ctx, WX - dd * SC, FY - 10, WX - dd * SC, FY + 50, guide(), 2, [4, 8]);
    const sy = body(ctx, c2, FY, CW, CH, r2);
    body(ctx, c1, FY, CW, CH, r1);
    const bl = c2 - CW / 2;
    if (t < 0) spring(ctx, bl - BUMP, sy, bl, sy, 6, 12, ink, 3); else spring(ctx, c1 + CW / 2, sy, bl, sy, 6, 12, ink, 3);
    text(ctx, '1', c1, sy, r1, { size: 22, align: 'center', weight: 600 });
    text(ctx, '2', c2, sy, r2, { size: 22, align: 'center', weight: 600 });
    /* the velocities, kinematic, above the cars */
    const vy = sy - CH / 2 - 26, va = v1(t), vb = tau - T0 >= ti ? v2(ti) : v2(t);
    if (va * VS > 6) arrow(ctx, c1 - va * VS, vy, c1, vy, dc, 4);
    if (vb * VS > 6) arrow(ctx, c2 - vb * VS, vy, c2, vy, dc, 4);
    hits = [
      { x: c1, y: sy, r: 36, name: `car 1, 2 kg, x₁ = ${fmt(a, 2)} m` }, { x: c2, y: sy, r: 36, name: `car 2, 1 kg, x₂ = ${fmt(b, 2)} m` },
      { x: c1 - (va * VS) / 2, y: vy, r: 16, name: `car 1's velocity x₁′ = ${fmt(va, 2)} m/s` }, { x: c2 - (vb * VS) / 2, y: vy, r: 16, name: `car 2's velocity x₂′ = ${fmt(vb, 2)} m/s` },
      { x: bl - BUMP / 2, y: sy, r: 22, name: 'the bumper, a spring of k = 2 N/m' }, { x: WX + 15, y: 220, r: 24, name: 'the wall' },
    ];
    /* the graph: x₂ faint over the window ignoring the wall, x₁ faint up to impact, both solid up to t; the wall dashed */
    const ax = axes(ctx, BOX, [0, 9], [0, 18], { xl: 't (s)', yl: 'x (m)', nx: 9, ny: 6, fy: (u) => fmt(u, 0) });
    dashed(ctx, () => line(ctx, ax.box.l, ax.Y(dd), ax.box.r, ax.Y(dd), ink, 2));
    text(ctx, `wall, d = ${fmt(dd, 2)}`, ax.box.l + 12, ax.Y(dd) - 18, PAL.muted, { size: 17, bg: PAL.panel });
    plot(ctx, ax, x2, alpha(r2, 0.3), { w: 3 });
    plot(ctx, ax, x1, alpha(r1, 0.3), { w: 3, x: [0, ti] });
    if (t > 0) { plot(ctx, ax, x1, r1, { w: 5, x: [0, t] }); plot(ctx, ax, x2, r2, { w: 5, x: [0, t] }); }
    const tt = Math.max(t, 0), P1 = pinned(ctx, ax.box, ax.X, ax.Y, tt, x1(tt), r1), P2 = pinned(ctx, ax.box, ax.X, ax.Y, tt, x2(tt), r2);
    line(ctx, ax.X(ti), ax.Y(dd), ax.X(ti), ax.box.b, guide(), 2, [4, 8]);
    dot(ctx, ax.X(ti), ax.Y(dd), r2, false, 10);
    text(ctx, 'x_1', 690, BOX.t - 24, r1, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'x_2', 750, BOX.t - 24, r2, { size: 20, weight: 600, align: 'right' });
    hits.push({ x: P1.x, y: P1.y, r: 14, name: `x₁(${fmt(tt, 2)}) = ${fmt(x1(tt), 2)} m` }, { x: P2.x, y: P2.y, r: 14, name: `x₂(${fmt(tt, 2)}) = ${fmt(x2(tt), 2)} m` },
      { x: ax.X(ti), y: ax.Y(dd), r: 14, name: `the impact, x₂ = d at t = ${fmt(ti, 2)} s` });
    const sp = v2(ti), safe = sp < 0.005;
    headline(ctx, safe
      ? `$d = ${n(dd)}$ m: car 2 reaches the wall at $t = ${n(ti)}$ s with speed $\\kxtwoprime = 0.00$ m/s, on a plateau of $\\kxtwo$; Bob keeps his Martini.`
      : `$d = ${n(dd)}$ m: car 2 hits the wall at $t = ${n(ti)}$ s at $\\kxtwoprime = ${n(sp)}$ m/s.`);
    ro.set(`\\kxtwo(t) = 2t - \\tfrac{2}{\\sqrt{3}}\\sin(\\sqrt{3}\\,t) = ${n(dd)}\\ \\text{at } t = ${n(ti)},\\qquad \\kxtwoprime = 2 - 2\\cos(\\sqrt{3}\\,t) = ${n(sp)}`);
  });
})();

/* Sim: Example 3.6.3's carts (m₁ = 2, m₂ = 1, k₁ = 4, k₂ = 2) with the force 2 cos ωt on cart 2, so F⃗ = M⁻¹G⃗ = (0, 2).
   Off resonance x⃗_p = c⃗ cos ωt with c⃗ = (A + ω²I)⁻¹(−F⃗): c₁ = 2/((ω² − 1)(ω² − 4)), c₂ = −2(ω² − 3)/((ω² − 1)(ω² − 4)),
   which is (1/20, −3/10) at the book's ω = 3 and (−1, 0) at ω = √3. At the natural frequencies the particular solutions
   are c⃗ t sin ωt + d⃗ cos ωt, checked by substitution: ω = 1, c⃗ = (1/3, 2/3), d⃗ = (−1/3, 0); ω = 2, c⃗ = (−1/6, 1/6),
   d⃗ = (−2/3, 0). Moving: two periods 4π/ω in 5 s. Scene 100 units per metre; a cart past ±1.5 m is held at 1.5 m and
   said to be off the scale. The force arrow is symbolic, 60 units per newton. Graph c₁, c₂ against ω, 0 to 4 by −2 to 2. */
(function () {
  const d = sim('sim-forced-carts', 780);
  const R3 = Math.sqrt(3);
  const wS = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0.2, max: 4, step: 0.01, value: 3, unit: '', dec: 2, aria: 'the forcing frequency ω',
    specials: [{ at: 1, label: 'ω₁, resonance' }, { at: R3, label: 'c₂ = 0' }, { at: 2, label: 'ω₂, resonance' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const cOf = (w) => { const D = (w * w - 1) * (w * w - 4); return [2 / D, (-2 * (w * w - 3)) / D]; };
  const RES = { 1: { c: [1 / 3, 2 / 3], d: [-1 / 3, 0], tex: ['\\tfrac{1}{3}', '\\tfrac{2}{3}'], dtex: ['-\\tfrac{1}{3}', '0'] }, 2: { c: [-1 / 6, 1 / 6], d: [-2 / 3, 0], tex: ['-\\tfrac{1}{6}', '\\tfrac{1}{6}'], dtex: ['-\\tfrac{2}{3}', '0'] } };
  const resOf = (w) => (Math.abs(w - 1) < 1e-6 ? 1 : Math.abs(w - 2) < 1e-6 ? 2 : 0);
  const period = () => (2 * 2 * Math.PI) / wS.v;
  const WX = 100, FY = 300, CW = 110, CH = 70, SC = 100, REST = [520, 960], LIM = 1.5, FN = 60, BOX = { l: 140, r: 1300, t: 450, b: 710 };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, period, () => period() / 5, (t) => {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, fq = C('frequency'), refs = [F.ref('cart-1'), F.ref('cart-2')], w = wS.v, r = resOf(w);
    const c = r ? RES[r].c : cOf(w);
    const x = r ? [0, 1].map((i) => RES[r].c[i] * t * Math.sin(r * t) + RES[r].d[i] * Math.cos(r * t)) : c.map((ci) => ci * Math.cos(w * t));
    const shown = x.map((v) => Math.max(-LIM, Math.min(LIM, v))), cx = shown.map((v, i) => REST[i] + v * SC), Ft = 2 * Math.cos(w * t);
    /* the scene */
    fixed(ctx, WX - 36, 120, 36, FY - 120);
    line(ctx, WX, FY, 1340, FY, ink, 3);
    REST.forEach((q) => line(ctx, q, 150, q, FY + 12, guide(), 2, [4, 8]));
    const sy = FY - CH / 2 - 2 * Math.max(6, Math.min(CW, CH) / 6);
    spring(ctx, WX, sy, cx[0] - CW / 2, sy, 8, 16, ink, 3);
    spring(ctx, cx[0] + CW / 2, sy, cx[1] - CW / 2, sy, 8, 16, ink, 3);
    hits = [{ x: (WX + cx[0] - CW / 2) / 2, y: sy, r: 22, name: 'spring 1, k₁ = 4 N/m' }, { x: (cx[0] + cx[1]) / 2, y: sy, r: 22, name: 'spring 2, k₂ = 2 N/m' }];
    cx.forEach((q, i) => {
      body(ctx, q, FY, CW, CH, refs[i]);
      text(ctx, `m_${i + 1}`, q, sy, refs[i], { size: 24, align: 'center', italic: true });
      hits.push({ x: q, y: sy, r: 50, name: `cart ${i + 1}, m${'₁₂'[i]} = ${i ? 1 : 2} kg, at x${'₁₂'[i]} = ${fmt(x[i], 2)} m${Math.abs(x[i]) > LIM ? ', off the scale' : ''}` });
    });
    /* the force on cart 2, symbolic, pulling from its right face when positive and pushing on it when negative */
    const L = Ft * FN, fx = cx[1] + CW / 2;
    if (Math.abs(L) > 6) { if (L > 0) arrow(ctx, fx, sy, fx + L, sy, ink, 4); else arrow(ctx, fx - L, sy, fx + 4, sy, ink, 4); }
    text(ctx, '2cos(ωt)', fx + 136, sy - 34, ink, { size: 18, align: 'center', bg: PAL.panel });
    hits.push({ x: fx + Math.abs(L) / 2, y: sy, r: 18, name: `the force on cart 2, 2 cos(ωt) = ${fmt(Ft, 2)} N` });
    /* the graph: c₁(ω) and c₂(ω), the natural frequencies dashed, the reader's ω marked */
    const ax = axes(ctx, BOX, [0, 4], [-2, 2], { xl: 'ω', xc: fq, yl: 'c (m)', nx: 8, ny: 4, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 0) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    [0, 1].forEach((i) => plot(ctx, ax, (u) => cOf(u)[i], refs[i], { w: 4, poles: [1, 2] }));
    [1, 2].forEach((u, j) => { text(ctx, `ω_${j + 1} = ${u}`, ax.X(u) + 8, ax.box.t + 14, fq, { size: 17, bg: PAL.panel }); hits.push({ x: ax.X(u), y: ax.box.t + 40, r: 14, name: `the natural frequency ω${'₁₂'[j]} = ${u}, where c⃗ blows up` }); });
    dot(ctx, ax.X(R3), ax.Y(0), refs[1], false, 9);
    hits.push({ x: ax.X(R3), y: ax.Y(0), r: 14, name: 'ω = √3: c₂ = 0, the forced cart stands still' });
    dashed(ctx, () => line(ctx, ax.X(w), ax.box.t, ax.X(w), ax.box.b, alpha(fq, 0.8), 2));
    if (!r) [0, 1].forEach((i) => { const P = pinned(ctx, ax.box, ax.X, ax.Y, w, c[i], refs[i]); hits.push({ x: P.x, y: P.y, r: 14, name: `c${'₁₂'[i]}(${fmt(w, 2)}) = ${fmt(c[i], 3)} m, cart ${i + 1}` }); });
    text(ctx, 'c_1', BOX.r - 70, BOX.t - 24, refs[0], { size: 20, weight: 600, align: 'right' });
    text(ctx, 'c_2', BOX.r, BOX.t - 24, refs[1], { size: 20, weight: 600, align: 'right' });
    if (r) {
      headline(ctx, `$\\komega = ${r}$ is a natural frequency: $\\kA + \\komega^2\\kI$ is not invertible, and the particular solution grows without bound.`);
      ro.set(`\\kvecxp = \\kvecc\\,t\\sin(\\komega t) + \\kvecd\\cos(\\komega t) = ${col(RES[r].tex)}\\,t\\sin(${r === 1 ? '' : '2'}t) + ${col(RES[r].dtex)}\\cos(${r === 1 ? '' : '2'}t)`, undefined, { form: `res${r}` });
      return;
    }
    const still2 = Math.abs(c[1]) < 5e-4;
    headline(ctx, still2
      ? `$\\komega = \\sqrt{3}$: $\\kvecc = (${n(c[0])}, 0.00)$, so the forced cart stands still while cart 1 swings ${n(Math.abs(c[0]))} m.`
      : `$\\komega = ${n(w)}$: $\\kvecxp = \\kvecc\\cos(\\komega t)$ with $\\kvecc = (${n(c[0], 3)}, ${n(c[1], 3)})$.`);
    const a = n(w * w - 3), b = n(w * w - 2);
    ro.set(`\\kvecc = (\\kA + \\komega^2\\kI)^{-1}(-\\kvecF) = \\begin{bmatrix} ${a} & 1 \\\\ 2 & ${b} \\end{bmatrix}^{-1} ${col([0, -2])} = ${col([n(c[0], 3), n(c[1], 3)])}`, undefined, { form: 'steady' });
  });
})();
};
