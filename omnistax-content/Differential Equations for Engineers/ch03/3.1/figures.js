/* Figures for section 3.1 Introduction to systems of ODEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, arrow, text, headline, register, readout, fmt, hover, cycle, pinned, cart, spring } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const r = (v, dec) => Math.round(v * 10 ** dec) / 10 ** dec;
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw, d = [10, 10]) => { ctx.save(); ctx.setLineDash(d); draw(); ctx.restore(); };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });
const run = (d, T, rate, draw, hold = 1.2) => { const cy = cycle(() => T, hold); register(d.fig, { update: (dt) => cy.step(dt, () => rate), draw: () => draw(cy.now()) }); return cy; };

/* Figure 3.1 (Example 3.1.2): two tanks of volume V, r liters per second pumped from each into the other, so
   x₁′ = (r/V)(x₂ − x₁), x₂′ = (r/V)(x₁ − x₂) with x₁(0) = A, x₂(0) = B. Exactly, x₁ = (A + B)/2 + ((A − B)/2)e^(−2(r/V)t)
   and x₂ = A + B − x₁. The book gives no numbers: A = 30 g, B = 10 g and r/V = 0.05 per second are ours. Scene above (the
   tanks shaded by x/V, the brine running through the pipes at a speed set by r/V), graph below: t 0 to 40 s by x 0 to
   40 g, the sliders' reach. Moving: the clock runs t 0 to 40 s. */
(function () {
  const d = sim('sim-brine-tanks', 700);
  const T = 40, XMAX = 40;
  const aS = ctl(d.controls, { label: 'A', cls: '', key: 'A', min: 0, max: 40, step: 1, value: 30, unit: 'g', dec: 0, aria: 'the initial amount of salt in tank 1, x₁(0) = A', specials: [{ at: () => bS.v, label: 'A = B' }], onInput: () => cy.reset() });
  const bS = ctl(d.controls, { label: 'B', cls: '', key: 'B', min: 0, max: 40, step: 1, value: 10, unit: 'g', dec: 0, aria: 'the initial amount of salt in tank 2, x₂(0) = B', specials: [{ at: () => aS.v, label: 'A = B' }], onInput: () => cy.reset() });
  const kS = ctl(d.controls, { label: 'r/V', cls: '', key: 'rV', min: 0.02, max: 0.2, step: 0.01, value: 0.05, unit: '1/s', dec: 2, aria: 'the flow rate over the volume, r/V', onInput: () => cy.reset() });
  const ro = readout(d);
  /* the tanks: open boxes, the liquid up to LEVEL; the pipes leave each tank low on its inner wall, cross, and pour into the other from above */
  const T1 = { l: 220, r: 450 }, T2 = { l: 950, r: 1180 }, TOP = 118, BOT = 330, LEVEL = 152;
  const PIPE_A = [[450, 304], [520, 304], [880, 98], [1010, 98], [1010, 136]];   /* tank 1 into tank 2 */
  const PIPE_B = [[950, 304], [880, 304], [520, 98], [390, 98], [390, 136]];     /* tank 2 into tank 1 */
  const GRAPH = { l: 200, r: 1250, t: 420, b: 640 };
  let hits = [];
  hover(d.stage, () => hits);
  const path = (ctx, pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); };
  function pipe(ctx, pts, color, phase) {
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'butt';
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 18; path(ctx, pts); ctx.stroke();
    ctx.strokeStyle = PAL.panel; ctx.lineWidth = 12; path(ctx, pts); ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = 8; ctx.setLineDash([18, 14]); ctx.lineDashOffset = -phase; path(ctx, pts); ctx.stroke();
    ctx.restore();
  }
  function tank(ctx, box, id, x, name, sub) {
    const rc = F.ref(id);
    ctx.save(); ctx.fillStyle = alpha(rc, 0.08 + 0.6 * Math.max(0, x) / XMAX); ctx.fillRect(box.l, LEVEL, box.r - box.l, BOT - LEVEL); ctx.restore();
    line(ctx, box.l, LEVEL, box.r, LEVEL, alpha(rc, 0.9), 2);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(box.l, TOP); ctx.lineTo(box.l, BOT); ctx.lineTo(box.r, BOT); ctx.lineTo(box.r, TOP); ctx.stroke(); ctx.restore();
    const cx = (box.l + box.r) / 2;
    text(ctx, name, cx, LEVEL + 34, rc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    mark(ctx, `$${sub} = ${n(x, 1)}$ g`, cx, LEVEL + 82, rc, { align: 'center' });
    text(ctx, 'Vol. = V', cx, LEVEL + 128, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    hits.push({ x: cx, y: (LEVEL + BOT) / 2, r: 90, name: `${name}: ${fmt(x, 1)} g of salt in V liters, shaded by its density x/V` });
  }
  const cy = run(d, T, 8, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), A = aS.v, B = bS.v, k = kS.v, mid = (A + B) / 2;
    const x1 = (s) => mid + ((A - B) / 2) * Math.exp(-2 * k * s), x2 = (s) => A + B - x1(s);
    const a = x1(t), b = x2(t), c1 = F.ref('tank-1'), c2 = F.ref('tank-2');
    hits = [];
    /* each pipe carries brine at the density of the tank it leaves, moving at a speed set by r/V */
    const phase = t * k * 400;
    pipe(ctx, PIPE_A, alpha(c1, 0.25 + 0.6 * a / XMAX), phase);
    pipe(ctx, PIPE_B, alpha(c2, 0.25 + 0.6 * b / XMAX), phase);
    text(ctx, 'r', 486, 336, PAL.ink, { size: 22, italic: true, align: 'center', bg: PAL.panel });
    text(ctx, 'r', 914, 336, PAL.ink, { size: 22, italic: true, align: 'center', bg: PAL.panel });
    hits.push({ x: 700, y: 201, r: 40, name: `the two pipes, each carrying r liters per second; r/V = ${fmt(k, 2)} per second` },
      { x: 960, y: 98, r: 30, name: 'brine from tank 1 pouring into tank 2' }, { x: 440, y: 98, r: 30, name: 'brine from tank 2 pouring into tank 1' });
    tank(ctx, T1, 'tank-1', a, 'tank 1', '\\kxone');
    tank(ctx, T2, 'tank-2', b, 'tank 2', '\\kxtwo');
    /* the graph: x₁(t) and x₂(t) faint over the window and solid up to t, the level (A + B)/2 dashed */
    const ax = axes(ctx, GRAPH, [0, T], [0, XMAX], { xl: 't (s)', yl: 'x (g)', yc: fc, nx: 8, ny: 4 });
    dashed(ctx, () => line(ctx, ax.box.l, ax.Y(mid), ax.box.r, ax.Y(mid), alpha(fc, 0.6), 2.5));
    text(ctx, '(A + B)/2', ax.box.r - 8, ax.Y(mid) + (A >= B ? 22 : -22), PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    plot(ctx, ax, x1, alpha(c1, 0.3), { w: 3 }); plot(ctx, ax, x2, alpha(c2, 0.3), { w: 3 });
    if (t > 0) { plot(ctx, ax, x1, c1, { w: 5, x: [0, t] }); plot(ctx, ax, x2, c2, { w: 5, x: [0, t] }); }
    const p1 = pinned(ctx, ax.box, ax.X, ax.Y, t, a, c1), p2 = pinned(ctx, ax.box, ax.X, ax.Y, t, b, c2);
    if (Math.abs(A - B) > 2) {
      /* each curve named at t = 4 s, the upper one above it and the lower one below, kept inside the box */
      const at = (v, up) => Math.min(ax.box.b - 14, Math.max(ax.box.t + 14, ax.Y(v) + (up ? -20 : 20)));
      text(ctx, 'tank 1', ax.X(4), at(x1(4), A > B), c1, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, 'tank 2', ax.X(4), at(x2(4), B > A), c2, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    }
    hits.push({ x: p1.x, y: p1.y, r: 14, name: `x₁(${fmt(t, 1)}) = ${fmt(a, 1)} g, the salt in tank 1` }, { x: p2.x, y: p2.y, r: 14, name: `x₂(${fmt(t, 1)}) = ${fmt(b, 1)} g, the salt in tank 2` },
      { x: ax.X(30), y: ax.Y(mid), r: 12, name: `(A + B)/2 = ${fmt(mid, 1)} g, where both amounts settle` });
    /* the numbers: x₂ is shown as A + B less the x₁ shown, so the two shown always add to A + B; the rate from the numbers shown */
    const ar = r(a, 1), br = r(A + B - ar, 1), dr = r(br - ar, 1), rate = r(k * dr, 3);
    if (A === B) headline(ctx, `Equal amounts, $\\kxone(0) = \\kxtwo(0) = ${A}$ g: as much salt enters each tank as leaves it, so neither amount changes.`);
    else headline(ctx, `$t = ${n(t, 1)}$ s: $\\kxone = ${n(ar, 1)}$ g and $\\kxtwo = ${n(br, 1)}$ g, and still $\\kxone + \\kxtwo = ${A + B}$ g.`);
    ro.set(`\\kxoneprime = \\tfrac{r}{V}(\\kxtwo - \\kxone) = ${n(k, 2)}\\,(${n(br, 1)} - ${n(ar, 1)}) = ${n(rate, 3)}\\ \\text{g/s},\\quad \\kxtwoprime = ${n(r(-rate, 3) + 0, 3)}\\ \\text{g/s}`);
  });
})();

/* Sim (the unnumbered sketch of Example 3.1.3): two carts joined by one spring, m₁x₁″ = k(x₂ − x₁),
   m₂x₂″ = −k(x₂ − x₁), both starting at their zero positions, x₁′(0) = 1 m/s and x₂′(0) on a slider. Exactly: the centre
   of mass moves at V = (m₁x₁′(0) + m₂x₂′(0))/(m₁ + m₂), the stretch s = x₂ − x₁ = ((x₂′(0) − x₁′(0))/ω) sin ωt with
   ω = √(k(m₁ + m₂)/(m₁m₂)), and x₁ = Vt − (m₂/(m₁ + m₂))s, x₂ = Vt + (m₁/(m₁ + m₂))s. The book gives no numbers: m₁ = m₂ = 1 kg,
   k = 2 N/m and x₂′(0) = 0 are ours; the dashed circle at x₂′(0) = 1 is Exercise 3.1.105's equal velocities. Scene 120 units
   per metre, the carts' zero positions 2.6 m apart (a 1.35 m spring between 1.25 m carts; the sliders stretch it by at
   most |x₂′(0) − 1|/ω ≤ 1.22 m), the view centred on the pair's centre of mass; forces at 50 units per newton (at most
   3.5 N). Graph t 0 to 10 s by x −2 to 10 m; a value beyond it is pinned. Moving: the clock runs t 0 to 10 s. */
(function () {
  const d = sim('sim-two-carts', 740);
  const T = 10, V1 = 1, SC = 120, GAP = 2.6, CW = 150, CH = 80, CYC = 226, FLOOR = 300, FN = 50;
  const m1S = ctl(d.controls, { label: 'm_1', cls: '', key: 'm1', min: 0.5, max: 3, step: 0.1, value: 1, unit: 'kg', dec: 1, aria: 'the mass m₁ of the first cart', onInput: () => cy.reset() });
  const m2S = ctl(d.controls, { label: 'm_2', cls: '', key: 'm2', min: 0.5, max: 3, step: 0.1, value: 1, unit: 'kg', dec: 1, aria: 'the mass m₂ of the second cart', onInput: () => cy.reset() });
  const kS = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 1, max: 8, step: 0.1, value: 2, unit: 'N/m', dec: 1, aria: 'the spring constant k', onInput: () => cy.reset() });
  const vS = ctl(d.controls, { label: '\\kxtwoprime(0)', cls: 'derivative', key: 'v2', min: 0, max: 2, step: 0.05, value: 0, unit: 'm/s', dec: 2, aria: 'the initial velocity x₂′(0) of the second cart', specials: [{ at: V1, label: 'equal velocities' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const GRAPH = { l: 200, r: 1250, t: 450, b: 690 };
  let hits = [];
  hover(d.stage, () => hits);
  function solve() {
    const m1 = m1S.v, m2 = m2S.v, k = kS.v, v2 = vS.v, M = m1 + m2, w = Math.sqrt((k * M) / (m1 * m2)), V = (m1 * V1 + m2 * v2) / M;
    const s = (t) => ((v2 - V1) / w) * Math.sin(w * t);
    return { m1, m2, k, v2, V, x1: (t) => V * t - (m2 / M) * s(t), x2: (t) => V * t + (m1 / M) * s(t) };
  }
  const cy = run(d, T, 2, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, S = solve(), a = S.x1(t), b = S.x2(t);
    const c1 = F.ref('cart-1'), c2 = F.ref('cart-2');
    /* the view: the pair's midpoint at rest is GAP/2; it travels with the centre of mass */
    const cam = GAP / 2 + S.V * t, X = (p) => 700 + (p - cam) * SC;
    const p1 = X(a), p2 = X(GAP + b);
    hits = [];
    /* the track and its metre marks, numbered from the first cart's zero position */
    line(ctx, 0, FLOOR, 1400, FLOOR, PAL.muted, 3);
    for (let m = Math.ceil(cam - 700 / SC); m <= Math.floor(cam + 700 / SC); m++) {
      const x = X(m); line(ctx, x, FLOOR, x, FLOOR + 12, PAL.muted, 2);
      if (x > 30 && x < 1340) text(ctx, `${m}`, x, FLOOR + 30, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'm', 1380, FLOOR + 30, PAL.muted, { size: 17, align: 'right' });
    /* the spring between the facing sides, then the carts over it */
    spring(ctx, p1 + CW / 2, CYC, p2 - CW / 2, CYC, 8, 16, ink, 3);
    cart(ctx, p1, CYC, CW, CH, c1); cart(ctx, p2, CYC, CW, CH, c2);
    text(ctx, 'm_1', p1, CYC, c1, { size: 24, weight: 600, italic: true, align: 'center' });
    text(ctx, 'm_2', p2, CYC, c2, { size: 24, weight: 600, italic: true, align: 'center' });
    hits.push({ x: p1, y: CYC, r: 70, name: `the first cart, m₁ = ${fmt(S.m1, 1)} kg` }, { x: p2, y: CYC, r: 70, name: `the second cart, m₂ = ${fmt(S.m2, 1)} kg` },
      { x: (p1 + p2) / 2, y: CYC, r: 24, name: `the spring, k = ${fmt(S.k, 1)} N/m, stretched by x₂ − x₁ = ${fmt(b - a, 2)} m` });
    /* each cart's displacement from its zero position, below the track */
    const disp = (z, p, y, tex, name) => {
      const xz = X(z), lo = 20, hi = 1380, from = Math.min(hi, Math.max(lo, xz)), to = Math.min(hi, Math.max(lo, p));
      if (xz >= lo && xz <= hi) line(ctx, xz, y - 14, xz, y + 14, fc, 3);
      if (Math.abs(to - from) > 6) arrow(ctx, from, y, to, y, fc, 3);
      mark(ctx, tex, (from + to) / 2, y - 18, fc, { align: 'center', size: 20 });
      hits.push({ x: (from + to) / 2, y, r: 16, name });
    };
    disp(0, p1, FLOOR + 62, '$\\kxone$', `x₁ = ${fmt(a, 2)} m, the first cart from its zero position`);
    disp(GAP, p2, FLOOR + 108, '$\\kxtwo$', `x₂ = ${fmt(b, 2)} m, the second cart from its zero position`);
    /* the numbers shown: the stretch and the force from the rounded displacements, so the readout adds up as written */
    const ar = r(a, 2), br = r(b, 2), sr = r(br - ar, 2), Fs = r(S.k * sr, 3);
    /* the spring's forces, symbolic: k(x₂ − x₁) on the first cart, its opposite on the second */
    const FY = CYC - CH / 2 - 26, len = Fs * FN;
    if (Math.abs(len) >= 6) {
      arrow(ctx, p1, FY, p1 + len, FY, ink, 4); arrow(ctx, p2, FY, p2 - len, FY, ink, 4);
      mark(ctx, '$k(\\kxtwo - \\kxone)$', p1 + len / 2, FY - 26, ink, { align: 'center' });
      mark(ctx, '$-k(\\kxtwo - \\kxone)$', p2 - len / 2, FY - 26, ink, { align: 'center' });
      hits.push({ x: p1 + len / 2, y: FY, r: 16, name: `the spring's force on the first cart, k(x₂ − x₁) = ${fmt(Fs, 3)} N` },
        { x: p2 - len / 2, y: FY, r: 16, name: `the spring's force on the second cart, −k(x₂ − x₁) = ${fmt(-Fs, 3)} N` });
    }
    /* the graph: x₁(t) and x₂(t), faint over the window and solid up to t */
    const ax = axes(ctx, GRAPH, [0, T], [-2, 10], { xl: 't (s)', yl: 'x (m)', yc: fc, nx: 5, ny: 6 });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    plot(ctx, ax, S.x1, alpha(c1, 0.3), { w: 3 }); plot(ctx, ax, S.x2, alpha(c2, 0.3), { w: 3 });
    if (t > 0) { plot(ctx, ax, S.x2, c2, { w: 5, x: [0, t] }); plot(ctx, ax, S.x1, c1, { w: 5, x: [0, t] }); }
    const q1 = pinned(ctx, ax.box, ax.X, ax.Y, t, a, c1), q2 = pinned(ctx, ax.box, ax.X, ax.Y, t, b, c2);
    hits.push({ x: q1.x, y: q1.y, r: 14, name: `x₁(${fmt(t, 2)}) = ${fmt(a, 2)} m, the first cart` }, { x: q2.x, y: q2.y, r: 14, name: `x₂(${fmt(t, 2)}) = ${fmt(b, 2)} m, the second cart` });
    const same = Math.abs(S.v2 - V1) < 1e-9;
    if (same) headline(ctx, 'Equal velocities: the spring never stretches, and the carts coast together, $\\kxone = \\kxtwo = t$.');
    else if (Math.abs(sr) < 0.005) headline(ctx, `$t = ${n(t)}$ s: the spring is at its rest length, $\\kxtwo - \\kxone = 0.00$ m, and pulls on neither cart.`);
    else headline(ctx, `$t = ${n(t)}$ s: the spring is ${sr > 0 ? 'stretched' : 'compressed'} by $${n(Math.abs(sr))}$ m and ${sr > 0 ? 'pulls the carts together' : 'pushes the carts apart'} with $${n(Math.abs(Fs), 3)}$ N.`);
    const nm = (v) => (v < 0 ? `(${n(v)})` : n(v));
    ro.set(`m_1\\kxonedprime = k(\\kxtwo - \\kxone) = ${n(S.k, 1)}\\,(${nm(br)} - ${nm(ar)}) = ${n(Fs, 3)}\\ \\text{N},\\quad m_2\\kxtwodprime = ${n(r(-Fs, 3) + 0, 3)}\\ \\text{N}`);
  });
})();

/* Figures 3.2 + 3.3 (Example 3.1.6): the direction field of x′ = 2y − x, y′ = x on the book's square [−1, 3]², every arrow
   scaled by one factor so the longest is 0.85 of a cell (13 by 13 cells, sparser than the book's 20 so that each arrow
   reads as an arrow); the initial point
   (x₀, y₀) dragged, default the book's (1, 0); the trajectory x = −2C₁e^(−2t) + C₂e^t, y = C₁e^(−2t) + C₂e^t with
   C₁ = (y₀ − x₀)/3, C₂ = (2y₀ + x₀)/3, traced for 0 ≤ t ≤ 2 as the clock runs, the moving point carrying its velocity
   (2y − x, x) drawn as the step it makes in a quarter unit of t (the field's own scale would make it a few units long). From (1, 0), (x(2), y(2)) = (2.475, 2.457). */
(function () {
  const d = sim('sim-direction-field', 760);
  const T = 2, N = 13, BOX = { l: 385, r: 1015, t: 96, b: 726 }, XR = [-1, 3], YR = [-1, 3];
  const field = (p) => [2 * p[1] - p[0], p[0]];
  const x0 = ctl(d.controls, { label: 'x_0', cls: '', key: 'x0', min: -1, max: 3, step: 0.05, value: 1, unit: '', dec: 2, detents: [1], aria: 'the initial x, x(0)', onInput: () => cy.reset() });
  const y0 = ctl(d.controls, { label: 'y_0', cls: '', key: 'y0', min: -1, max: 3, step: 0.05, value: 0, unit: '', dec: 2, detents: [0], aria: 'the initial y, y(0)', onInput: () => cy.reset() });
  const P = drag(d, { x: x0, y: y0 });
  const ro = readout(d);
  const STEP = 0.25;   /* the velocity arrow is (x′, y′)·STEP in the plane's units */
  let hits = [];
  hover(d.stage, () => hits);
  function poly(ctx, ax, pts, color, w) {
    if (pts.length < 2) return;
    ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.stroke(); ctx.restore();
  }
  const cy = run(d, T, 0.4, (t) => {
    const { ctx } = begin(d.c);
    const vf = C('vector-field'), cc = C('curve'), pc = C('point'), fc = C('function');
    const a = x0.v, b = y0.v, c1 = (b - a) / 3, c2 = (2 * b + a) / 3;
    const at = (s) => [-2 * c1 * Math.exp(-2 * s) + c2 * Math.exp(s), c1 * Math.exp(-2 * s) + c2 * Math.exp(s)];
    const ax = axes(ctx, BOX, XR, YR, { xl: 'x', yl: 'y', xc: fc, yc: fc, nx: 4, ny: 4, fx: (u) => (u > 2.5 ? '' : fmt(u, 0)) });
    line(ctx, ax.X(0), ax.box.t, ax.X(0), ax.box.b, guide(), 2); line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    F.space.field2(ctx, ax, field, alpha(vf, 0.7), { n: [N, N], w: 2.5 });
    hits = [];
    /* the trajectory for 0 ≤ t ≤ 2, faint whole and solid up to the clock */
    const full = Array.from({ length: 241 }, (_, i) => at((i / 240) * T));
    const upto = full.filter((_, i) => (i / 240) * T <= t).concat([at(t)]);
    poly(ctx, ax, full, alpha(cc, 0.3), 3);
    poly(ctx, ax, upto, cc, 5);
    const [px, py] = at(t), [u, v] = field([px, py]), end = at(T);
    const inBox = (p) => p[0] >= XR[0] && p[0] <= XR[1] && p[1] >= YR[0] && p[1] <= YR[1];
    /* the moving point and its velocity, the field's vector there, drawn as the step of a quarter unit of t */
    if (inBox([px, py])) {
      const X0 = ax.X(px), Y0 = ax.Y(py), X1 = ax.X(px + u * STEP), Y1 = ax.Y(py + v * STEP);
      arrow(ctx, X0, Y0, X1, Y1, vf, 5);
      dot(ctx, X0, Y0, cc, true, 9);
      hits.push({ x: X0, y: Y0, r: 16, name: `the solution at t = ${fmt(t, 2)}: (x, y) = (${fmt(px, 2)}, ${fmt(py, 2)})` },
        { x: (X0 + X1) / 2, y: (Y0 + Y1) / 2, r: 12, name: `the velocity there, (x′, y′) = (2y − x, x) = (${fmt(u, 2)}, ${fmt(v, 2)}), drawn as the step of a quarter unit of t` });
    }
    if (t >= T && inBox(end)) mark(ctx, `$(${n(end[0], 3)}, ${n(end[1], 3)})$`, ax.X(end[0]) - 14, ax.Y(end[1]) - 16, cc, { align: 'right', base: 'bottom' });
    const pp = P.draw(ctx, ax, pc);
    if (pp) hits.push({ x: pp.x, y: pp.y, r: 18, name: `the initial point (x(0), y(0)) = (${fmt(a, 2)}, ${fmt(b, 2)})` });
    hits.push({ x: ax.X(-0.5), y: ax.Y(2.5), r: 30, name: 'the direction field: the vector (2y − x, x) at each point, scaled down' });
    /* the readout from the rounded position, so the vector shown is computed from the numbers shown */
    const xr = r(px, 2), yr = r(py, 2), ur = r(2 * yr - xr, 2), vr = xr;
    const nm = (q) => (q < 0 ? `(${n(q)})` : n(q));
    const where = inBox(end) ? `at $t = 2$ it reaches $(${n(end[0], 3)}, ${n(end[1], 3)})$` : `at $t = 2$ it is at $(${n(end[0], 2)}, ${n(end[1], 2)})$, off the square`;
    headline(ctx, `$t = ${n(t)}$: $(\\kx, \\ky) = (${n(xr)}, ${n(yr)})$; ${where}.`);
    ro.set(`(\\kxprime, \\kyprime) = (2\\ky - \\kx,\\ \\kx) = (2(${n(yr)}) - ${nm(xr)},\\ ${n(xr)}) = (${n(ur)},\\ ${n(vr)})`,
      `the solution through $(${n(a)}, ${n(b)})$: $\\kx = -2C_1e^{-2t} + C_2e^{t}$, $\\ky = C_1e^{-2t} + C_2e^{t}$ with $C_1 = ${n(c1, 3)}$, $C_2 = ${n(c2, 3)}$.`);
  });
})();
};
