/* Figures for section 2.4 Mechanical vibrations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, text, headline, register, readout, fmt, hover, cycle, spring, fixed, cart, hbracket, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const signed = (v, dec = 2) => (v < 0 ? '-' : '+') + n(Math.abs(v), dec);
const r2 = (v) => Math.round(v * 100) / 100;
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw, d = [10, 10]) => { ctx.save(); ctx.setLineDash(d); draw(); ctx.restore(); };
const run = (d, T, rate, draw, hold = 1.2) => { const cy = cycle(() => T, hold); register(d.fig, { update: (dt) => cy.step(dt, () => rate), draw: () => draw(cy.now()) }); return cy; };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });

/* The solution of m x″ + c x′ + k x = 0 with x(0) = x0, x′(0) = v0, by the sign of c² − 4km: the book's three forms
   with their constants, p = c/(2m) and, when the roots are complex, ω₁ = √(ω₀² − p²). */
function homog(m, c, k, x0, v0) {
  const disc = c * c - 4 * m * k, p = c / (2 * m);
  if (Math.abs(disc) < 1e-9) { const c2 = v0 + p * x0; return { kind: 'critical', p, c1: x0, c2, f: (t) => (x0 + c2 * t) * Math.exp(-p * t) }; }
  if (disc > 0) {
    const s = Math.sqrt(disc) / (2 * m), r1 = -p + s, r2 = -p - s, c1 = (v0 - r2 * x0) / (r1 - r2), c2 = x0 - c1;
    return { kind: 'over', p, r1, r2, c1, c2, f: (t) => c1 * Math.exp(r1 * t) + c2 * Math.exp(r2 * t) };
  }
  const w1 = Math.sqrt(-disc) / (2 * m), c1 = x0, c2 = (v0 + p * x0) / w1;
  return { kind: 'under', p, w1, c1, c2, f: (t) => Math.exp(-p * t) * (c1 * Math.cos(w1 * t) + c2 * Math.sin(w1 * t)) };
}
/* x(t) written out from homog's constants */
function written(S) {
  if (S.kind === 'over') return `${n(S.c1)}e^{${n(S.r1)}t}${signed(S.c2)}e^{${n(S.r2)}t}`;
  if (S.kind === 'critical') return `(${n(S.c1)}${signed(S.c2)}t)e^{-${n(S.p)}t}`;
  const osc = `${n(S.c1)}\\cos(${n(S.w1)}t)${signed(S.c2)}\\sin(${n(S.w1)}t)`;
  return S.p < 1e-9 ? osc : `e^{-${n(S.p)}t}(${osc})`;
}

/* Sim: the mass on its spring. Example 2.4.1's m = 2, k = 8, x(0) = 0.5, x′(0) = 1 with the damping c and a force
   F(t) = F₀ cos(πt); x = x_h + x_p solved exactly (the forced particular solution, and the free solution that fixes the
   initial conditions). Scene 150 units per metre about the rest position at 700; graph t 0 to 10 by x −2.5 to 2.5
   (the sliders' largest swing is 2.29); forces at 6 units per newton. */
(function () {
  const d = sim('sim-mass-spring', 700);
  const M = 2, K = 8, X0 = 0.5, V0 = 1, OM = Math.PI, T = 10;
  const cS = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0, max: 10, step: 0.05, value: 0, unit: 'Ns/m', dec: 2, aria: 'the damping c', specials: [{ at: 0, label: 'undamped' }, { at: Math.sqrt(4 * K * M), label: 'critical' }], onInput: () => cy.reset() });
  const fS = ctl(d.controls, { label: 'F_0', cls: '', key: 'F0', min: 0, max: 10, step: 0.1, value: 0, unit: 'N', dec: 1, aria: 'the amplitude F₀ of the force', specials: [{ at: 0, label: 'free' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const REST = 700, SC = 150, FLOOR = 300, CW = 140, CH = 90, CY = FLOOR - 75, WALL = 160, FN = 6;
  let hits = [];
  hover(d.stage, () => hits);
  /* x(t) and x′(t) for the sliders' c and F₀ */
  function solve(c, F0) {
    const D = (K - M * OM * OM) ** 2 + (c * OM) ** 2, a = (F0 * (K - M * OM * OM)) / D, b = (F0 * c * OM) / D;
    const xp = (t) => a * Math.cos(OM * t) + b * Math.sin(OM * t), vp = (t) => -a * OM * Math.sin(OM * t) + b * OM * Math.cos(OM * t);
    const S = homog(M, c, K, X0 - a, V0 - b * OM), h = 1e-5;
    return { x: (t) => S.f(t) + xp(t), v: (t) => (S.f(t + h) - S.f(t - h)) / (2 * h) + vp(t) };
  }
  const cy = run(d, T, 1.5, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, c = cS.v, F0 = fS.v;
    const { x, v } = solve(c, F0), xt = x(t), vt = v(t), Ft = F0 * Math.cos(OM * t), cx = REST + xt * SC;
    /* the scene: the wall, the floor, the spring, the cart, the rest mark and the displacement */
    fixed(ctx, WALL - 40, 80, 40, FLOOR - 80);
    fixed(ctx, WALL - 40, FLOOR, 1180, 18);
    spring(ctx, WALL, CY, cx - CW / 2, CY, 9, 20, ink, 3);
    cart(ctx, cx, CY, CW, CH, ink);
    text(ctx, 'm', cx, CY, ink, { size: 24, align: 'center', italic: true });
    line(ctx, REST, FLOOR - 124, REST, FLOOR + 48, guide(), 2, [4, 8]);
    text(ctx, 'x = 0', REST + 10, FLOOR + 30, PAL.muted, { size: 17, align: 'left' });
    if (Math.abs(cx - REST) > 12) hbracket(ctx, REST, cx, FLOOR + 48, fc, 'x', { side: 'below' });
    /* the three forces, symbolic, each pulling from the face it points away from; a vanished force draws nothing */
    hits = [{ x: cx, y: CY, r: 60, name: 'the mass, m = 2 kg' }, { x: (WALL + cx - CW / 2) / 2, y: CY, r: 24, name: 'the spring, k = 8 N/m' },
      { x: 640, y: FLOOR + 9, r: 14, name: `the floor, damping c = ${fmt(c, 2)} Ns/m` }];
    const force = (val, y, tex, name, dy) => {
      const len = val * FN; if (Math.abs(len) < 4) return;
      const tail = val < 0 ? cx - CW / 2 : cx + CW / 2;
      arrow(ctx, tail, y, tail + len, y, ink, 4);
      mark(ctx, tex, tail + len / 2, y + dy, ink, { align: 'center' });
      hits.push({ x: tail + len / 2, y, r: 16, name: `${name} = ${fmt(val, 2)} N` });
    };
    force(-K * xt, CY - 18, '$-k\\kx$', 'the spring force −kx', -24);
    force(Ft, CY + 18, '$\\kF(t)$', 'the applied force F(t) = F₀ cos(πt)', 24);
    if (c > 0 && Math.abs(c * vt * FN) >= 4) {
      const len = -c * vt * FN, y = CY - CH / 2 - 28;
      arrow(ctx, cx, y, cx + len, y, ink, 4);
      mark(ctx, '$-c\\kxprime$', cx + len / 2, y - 24, ink, { align: 'center' });
      hits.push({ x: cx + len / 2, y, r: 16, name: `the friction −cx′ = ${fmt(-c * vt, 2)} N` });
    }
    /* the graph of x(t), faint over the whole window and solid up to t */
    const ax = axes(ctx, { l: 200, r: 1250, t: 400, b: 630 }, [0, T], [-2.5, 2.5], { xl: 't (s)', yl: 'x (m)', yc: fc, nx: 5, ny: 5, fy: (u) => fmt(u, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    const P = pinned(ctx, ax.box, ax.X, ax.Y, t, xt, fc);
    hits.push({ x: P.x, y: P.y, r: 14, name: `x(${fmt(t, 2)}) = ${fmt(xt, 2)} m` });
    const words = `${F0 > 0 ? 'Forced' : 'Free'}, ${c > 0 ? 'damped' : 'undamped'}`;
    const cond = `${c > 0 ? `$c = ${n(c)}$` : '$c = 0$'} and ${F0 > 0 ? `$\\kF(t) = ${n(F0, 1)}\\cos(\\pi t)$` : '$\\kF \\equiv 0$'}`;
    headline(ctx, `${words} motion: ${cond}; at $t = ${n(t)}$ s the mass is at $\\kx = ${n(xt)}$ m.`);
    /* the equation with its live terms; the x″ term is what the other rounded terms leave, so the line adds up as written */
    const T0 = r2(K * xt), T1 = r2(c * vt), R = r2(Ft), T2 = r2(R - T1 - T0);
    const lhs = `2\\kxdprime${c > 0 ? ` + ${n(c)}\\kxprime` : ''} + 8\\kx`, rhs = F0 > 0 ? `${n(F0, 1)}\\cos(\\pi t)` : '0';
    const nums = `(${n(T2)})${c > 0 ? ` + (${n(T1)})` : ''} + (${n(T0)}) = ${n(R)}`;
    ro.set(`${lhs} = ${rhs},\\quad ${nums}\\ \\text{ at } t = ${n(t)}`);
  });
})();

/* Sim: the RLC circuit, L = 1 H, C = 1/4 F, a constant E = 2 V switched on at t = 0 with the capacitor uncharged, so
   I(0) = 0 and I′(0) = E/L = 2; the resistance R is the slider (R = 2√(L/C) = 4 Ω is the critical value). The charges
   in the wire sit at an offset of 300 units per coulomb of Q round the loop, so they move with the current and stop as
   Q settles at CE = 0.5 C. Graph t 0 to 10 by I −1.2 to 1.2 (at R = 0 the current is sin 2t). */
(function () {
  const d = sim('sim-rlc', 740);
  const L = 1, CAP = 0.25, E = 2, T = 10;
  const rS = ctl(d.controls, { label: 'R', cls: '', key: 'R', min: 0, max: 6, step: 0.05, value: 1, unit: 'Ω', dec: 2, aria: 'the resistance R', specials: [{ at: 2 * Math.sqrt(L / CAP), label: 'critical' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const LEFT = 330, RIGHT = 1070, TOP = 170, BOT = 380, MID = (TOP + BOT) / 2, PER = 2 * (RIGHT - LEFT) + 2 * (BOT - TOP), OFF = 300;
  const CL = 680, CR = 720, RL = 600, RR = 800;
  const along = (u) => {
    u = ((u % PER) + PER) % PER;
    if (u < RIGHT - LEFT) return [LEFT + u, TOP]; u -= RIGHT - LEFT;
    if (u < BOT - TOP) return [RIGHT, TOP + u]; u -= BOT - TOP;
    if (u < RIGHT - LEFT) return [RIGHT - u, BOT]; u -= RIGHT - LEFT;
    return [LEFT, BOT - u];
  };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, T, 1.5, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, R = rS.v;
    const SI = homog(L, R, 1 / CAP, 0, E / L), SQ = homog(L, R, 1 / CAP, -CAP * E, 0);
    const I = SI.f, It = I(t), Qt = CAP * E + SQ.f(t);
    /* the charges, drawn first so the parts sit over them */
    for (let k = 0; k < 30; k++) {
      const [px, py] = along(k * (PER / 30) + Qt * OFF);
      const inPart = (py === TOP && px > CL - 30 && px < CR + 30) || (py === BOT && px > RL && px < RR) || (px === RIGHT && Math.abs(py - MID) < 80) || (px === LEFT && Math.abs(py - MID) < 48);
      if (!inPart) dot(ctx, px, py, alpha(fc, 0.8), true, 5);
    }
    /* the source on the left, the capacitor on top, the inductor on the right, the resistor below */
    line(ctx, LEFT, TOP, CL, TOP, ink, 4); line(ctx, CR, TOP, RIGHT, TOP, ink, 4);
    line(ctx, CL, TOP - 28, CL, TOP + 28, ink, 5); line(ctx, CR, TOP - 28, CR, TOP + 28, ink, 5);
    text(ctx, 'C = 1/4 F', (CL + CR) / 2, TOP - 50, ink, { size: 22, align: 'center' });
    mark(ctx, `$\\kQ = ${n(Qt)}$ C`, CR + 44, TOP + 40, fc, { align: 'left' });
    line(ctx, RIGHT, TOP, RIGHT, MID - 70, ink, 4); line(ctx, RIGHT, MID + 70, RIGHT, BOT, ink, 4);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.beginPath(); for (let i = 0; i < 4; i++) ctx.arc(RIGHT, MID - 52.5 + i * 35, 17.5, -Math.PI / 2, Math.PI / 2); ctx.stroke(); ctx.restore();
    text(ctx, 'L = 1 H', RIGHT + 44, MID, ink, { size: 22 });
    line(ctx, RIGHT, BOT, RR, BOT, ink, 4); line(ctx, RL, BOT, LEFT, BOT, ink, 4);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(RR, BOT);
    for (let i = 0; i < 6; i++) ctx.lineTo(RR - 25 - i * 30, BOT + (i % 2 ? -20 : 20));
    ctx.lineTo(RL, BOT); ctx.stroke(); ctx.restore();
    text(ctx, `R = ${fmt(R, 2)} Ω`, (RL + RR) / 2, BOT + 52, ink, { size: 22, align: 'center' });
    line(ctx, LEFT, BOT, LEFT, MID + 44, ink, 4); line(ctx, LEFT, MID - 44, LEFT, TOP, ink, 4);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(LEFT, MID, 44, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    mark(ctx, '$\\kE$', LEFT, MID, fc, { align: 'center', size: 24 });
    text(ctx, '2 V', LEFT - 60, MID, ink, { size: 20, align: 'right' });
    /* the current, kinematic: an arrow the way the charges run, on the top-left wire */
    const AX = (LEFT + CL) / 2, dir = It >= 0 ? 1 : -1;
    if (Math.abs(It) > 0.02) arrow(ctx, AX - dir * 45, TOP - 34, AX + dir * 45, TOP - 34, fc, 4);
    mark(ctx, `$\\kI = ${n(It)}$ A`, AX, TOP - 66, fc, { align: 'center' });
    /* the graph of I(t) */
    const ax = axes(ctx, { l: 200, r: 1250, t: 480, b: 680 }, [0, T], [-1.2, 1.2], { xl: 't (s)', yl: 'I (A)', yc: fc, nx: 5, ny: 4, fy: (u) => fmt(u, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    plot(ctx, ax, I, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, I, fc, { w: 5, x: [0, t] });
    const P = pinned(ctx, ax.box, ax.X, ax.Y, t, It, fc);
    hits = [{ x: LEFT, y: MID, r: 44, name: 'the source, E = 2 V, switched on at t = 0' }, { x: (CL + CR) / 2, y: TOP, r: 34, name: 'the capacitor, C = 1/4 F' },
      { x: RIGHT, y: MID, r: 50, name: 'the inductor, L = 1 H' }, { x: (RL + RR) / 2, y: BOT, r: 34, name: `the resistor, R = ${fmt(R, 2)} Ω` },
      { x: AX, y: TOP - 34, r: 20, name: 'the current I, the way the charges run' }, { x: (LEFT + RIGHT) / 2, y: BOT, r: 12, name: 'charges carried round the loop' },
      { x: P.x, y: P.y, r: 14, name: `I(${fmt(t, 2)}) = ${fmt(It, 2)} A` }];
    const tail = R > 0 ? `$\\kQ$ settles at $C\\kE = ${n(CAP * E, 1)}$ C.` : 'the current never dies away.';
    headline(ctx, `$t = ${n(t)}$ s: $\\kI = ${n(It)}$ A and $\\kQ = ${n(Qt)}$ C; ${tail}`);
    ro.set(`\\kIdprime${R > 0 ? ` + ${n(R)}\\kIprime` : ''} + 4\\kI = \\kEprime(t) = 0,\\quad \\kI(t) = ${written(SI)}`, undefined, { form: SI.kind });
  });
})();

/* Figure 2.1: the pendulum θ″ + (g/L) sin θ = 0 (RK4) beside its linear model θ″ + (g/L) θ = 0, both released from rest
   at θ(0), L = 1 m, g = 9.8 m/s². Scene left (rod 300 units); right, the book's graph of sin θ and θ over −1.6 to 1.6
   (the book's −1 to 1 widened to the slider's reach) with the two bobs' angles on their curves, and θ(t) for t 0 to 10
   below. The pendulum's period is 4√(L/g) K(sin(θ(0)/2)) with K the complete elliptic integral. */
(function () {
  const d = sim('sim-pendulum', 740);
  const G = 9.8, LEN = 1, T = 10, DT = 0.002, W0 = Math.sqrt(G / LEN), TL = (2 * Math.PI) / W0;
  const thS = ctl(d.controls, { label: '\\ktheta(0)', cls: 'point', key: 'th0', min: 0.05, max: 1.5, step: 0.01, value: 0.5, unit: 'rad', dec: 2, aria: 'the release angle θ(0)', detents: [0.5], onInput: reset });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  const PX = 360, PY = 150, R = 300, FL = 110;
  const TOPBOX = { l: 840, r: 1300, t: 110, b: 400 }, BOTBOX = { l: 840, r: 1300, t: 470, b: 690 };
  let cache = null, hits = [];
  hover(d.stage, () => hits);
  /* K(k), the complete elliptic integral of the first kind, by the arithmetic–geometric mean */
  function K(k) { let a = 1, b = Math.sqrt(1 - k * k); for (let i = 0; i < 40; i++) { const m = (a + b) / 2; b = Math.sqrt(a * b); a = m; } return Math.PI / (2 * a); }
  function trace() {
    const a = thS.v;
    if (cache && cache.a === a) return cache;
    const N = Math.round(T / DT), th = new Float64Array(N + 1), f = (q) => -(G / LEN) * Math.sin(q);
    let x = a, v = 0; th[0] = x;
    for (let i = 1; i <= N; i++) {
      const k1x = v, k1v = f(x), k2x = v + 0.5 * DT * k1v, k2v = f(x + 0.5 * DT * k1x);
      const k3x = v + 0.5 * DT * k2v, k3v = f(x + 0.5 * DT * k2x), k4x = v + DT * k3v, k4v = f(x + DT * k3x);
      x += (DT / 6) * (k1x + 2 * k2x + 2 * k3x + k4x); v += (DT / 6) * (k1v + 2 * k2v + 2 * k3v + k4v); th[i] = x;
    }
    const nl = (t) => { const s = Math.max(0, Math.min(N, t / DT)), i = Math.floor(s), r = s - i; return i >= N ? th[N] : th[i] * (1 - r) + th[i + 1] * r; };
    cache = { a, nl, lin: (t) => a * Math.cos(W0 * t), period: 4 * Math.sqrt(LEN / G) * K(Math.sin(a / 2)) };
    return cache;
  }
  function reset() { cy.reset(); cache = null; }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = F.ref('pendulum'), lc = F.ref('linear-pendulum'), ink = PAL.ink;
    const S = trace(), t = cy.now(), a = S.nl(t), b = S.lin(t);
    /* the scene: the ceiling, the vertical, the two rods from one pivot, the angle, gravity and its tangential part */
    fixed(ctx, PX - 90, PY - 24, 180, 24);
    line(ctx, PX, PY, PX, PY + R + 30, guide(), 2, [4, 8]);
    const at = (th) => ({ x: PX + R * Math.sin(th), y: PY + R * Math.cos(th) });
    const B = at(b), A = at(a);
    dashed(ctx, () => line(ctx, PX, PY, B.x, B.y, lc, 3), [8, 8]);
    dot(ctx, B.x, B.y, lc, false, 15);
    line(ctx, PX, PY, A.x, A.y, pc, 3);
    if (Math.abs(a) > 0.04) {
      ctx.save(); ctx.strokeStyle = alpha(pc, 0.9); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(PX, PY, 80, Math.PI / 2, Math.PI / 2 - a, a > 0); ctx.stroke(); ctx.restore();
      mark(ctx, '$\\ktheta$', PX + 106 * Math.sin(a / 2), PY + 106 * Math.cos(a / 2), fc, { align: 'center', size: 22 });
    }
    arrow(ctx, A.x, A.y, A.x, A.y + FL, ink, 4);
    mark(ctx, '$mg$', A.x + 22, A.y + FL - 12, ink, { align: 'left' });
    const hx = A.x - Math.cos(a) * FL * Math.sin(a), hy = A.y + Math.sin(a) * FL * Math.sin(a);
    if (Math.abs(Math.sin(a)) > 0.08) {
      arrow(ctx, A.x, A.y, hx, hy, ink, 4);
      mark(ctx, '$mg\\sin\\ktheta$', hx + (hx < A.x ? -14 : 14), hy + 24, ink, { align: hx < A.x ? 'right' : 'left' });
    }
    dot(ctx, A.x, A.y, pc, true, 13);
    dot(ctx, PX, PY, ink, true, 6);
    mark(ctx, 'pendulum: $\\kthetadprime + 9.8\\sin\\ktheta = 0$', 60, 652, pc, { align: 'left' });
    mark(ctx, 'linear model: $\\kthetadprime + 9.8\\ktheta = 0$', 60, 686, lc, { align: 'left' });
    /* the book's graph: sin θ and θ, the two bobs' angles riding their own curves, ±0.5 marked */
    const g1 = axes(ctx, TOPBOX, [-1.6, 1.6], [-1.6, 1.6], { xl: 'θ (rad)', xc: fc, yl: '', nx: 4, ny: 4, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 1) });
    [-0.5, 0.5].forEach((u) => line(ctx, g1.X(u), g1.box.t, g1.X(u), g1.box.b, guide(), 2, [4, 8]));
    plot(ctx, g1, (u) => u, lc, { w: 4 });
    plot(ctx, g1, Math.sin, pc, { w: 4 });
    dot(ctx, g1.X(b), g1.Y(b), lc, false, 11);
    dot(ctx, g1.X(a), g1.Y(Math.sin(a)), pc, true, 9);
    text(ctx, 'θ', g1.X(1.4), g1.Y(1.4) - 24, lc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'sin θ', g1.X(1.4), g1.Y(Math.sin(1.4)) + 26, pc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* θ(t) for both, faint over the window and solid up to t */
    const g2 = axes(ctx, BOTBOX, [0, T], [-1.6, 1.6], { xl: 't (s)', yl: 'θ (rad)', yc: fc, nx: 5, ny: 4, fy: (u) => fmt(u, 1) });
    line(ctx, g2.box.l, g2.Y(0), g2.box.r, g2.Y(0), guide(), 2);
    plot(ctx, g2, S.lin, alpha(lc, 0.3), { w: 3 });
    plot(ctx, g2, S.nl, alpha(pc, 0.3), { w: 3 });
    if (t > 0) { plot(ctx, g2, S.lin, lc, { w: 4, x: [0, t] }); plot(ctx, g2, S.nl, pc, { w: 4, x: [0, t] }); }
    const pb = pinned(ctx, g2.box, g2.X, g2.Y, t, b, lc), pa = pinned(ctx, g2.box, g2.X, g2.Y, t, a, pc);
    hits = [
      { x: A.x, y: A.y, r: 20, name: 'the pendulum, θ″ + (g/L) sin θ = 0' }, { x: B.x, y: B.y, r: 20, name: 'the linear model, θ″ + (g/L) θ = 0' },
      { x: A.x, y: A.y + FL * 0.6, r: 16, name: 'the weight mg, straight down' }, { x: (A.x + hx) / 2, y: (A.y + hy) / 2, r: 16, name: 'the tangential part of the weight, mg sin θ, toward the rest position' },
      { x: g1.X(a), y: g1.Y(Math.sin(a)), r: 14, name: `(θ, sin θ) = (${fmt(a, 2)}, ${fmt(Math.sin(a), 2)}) for the pendulum` }, { x: g1.X(b), y: g1.Y(b), r: 14, name: `(θ, θ) = (${fmt(b, 2)}, ${fmt(b, 2)}) for the linear model` },
      { x: pa.x, y: pa.y, r: 14, name: `θ(${fmt(t, 2)}) = ${fmt(a, 2)} rad for the pendulum` }, { x: pb.x, y: pb.y, r: 14, name: `θ(${fmt(t, 2)}) = ${fmt(b, 2)} rad for the linear model` }];
    headline(ctx, `$\\ktheta(0) = ${n(thS.v)}$ rad: one swing takes ${n(S.period)} s for the pendulum and ${n(TL)} s for the linear model.`);
    const ar = +a.toFixed(2);
    ro.set(`\\kthetadprime = -\\tfrac{g}{L}\\sin\\ktheta = -9.8\\sin(${n(ar)}) = ${n(-G * Math.sin(ar))},\\qquad -\\tfrac{g}{L}\\ktheta = -9.8\\,(${n(ar)}) = ${n(-G * ar)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1.2), draw });
})();

/* Figures 2.2 + 2.3 + 2.4: Example 2.4.1's m = 2, k = 8 under the damping c and the initial conditions, still. Left,
   x(t) for t 0 to 10 by x −2.5 to 2.5 (the sliders' largest amplitude is √5 ≈ 2.24) with the envelope ±Ce^(−pt) dashed
   when the roots are complex; right, the two roots r = −p ± √(p² − ω₀²) in the plane Re −6 to 2 by Im −3 to 3 at one
   scale, riding the circle |r| = ω₀ while c < 8 and parting along the real axis beyond (c = 12 reaches −5.24). */
(function () {
  const d = sim('sim-free-motion', 600);
  const M = 2, K = 8, W0 = Math.sqrt(K / M), T = 10;
  const cS = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0, max: 12, step: 0.05, value: 0, unit: 'Ns/m', dec: 2, aria: 'the damping c', specials: [{ at: 0, label: 'undamped' }, { at: Math.sqrt(4 * K * M), label: 'critical' }] });
  const x0 = ctl(d.controls, { label: '\\kx(0)', cls: 'point', key: 'x0', min: -1, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, aria: 'the initial displacement x(0)' });
  const v0 = ctl(d.controls, { label: '\\kxprime(0)', cls: 'point', key: 'v0', min: -4, max: 4, step: 0.1, value: 1, unit: 'm/s', dec: 1, aria: 'the initial velocity x′(0)' });
  const ro = readout(d);
  const GRAPH = { l: 120, r: 780, t: 110, b: 500 }, PLANE = { l: 880, r: 1300, t: 148, b: 463 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ec = C('eigenvalue'), pc = C('point'), c = cS.v, S = homog(M, c, K, x0.v, v0.v), p = S.p;
    const ax = axes(ctx, GRAPH, [0, T], [-2.5, 2.5], { xl: 't (s)', yl: 'x (m)', yc: fc, nx: 5, ny: 5, fy: (u) => fmt(u, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    hits = [];
    let A = 0;
    if (S.kind === 'under') {
      A = Math.hypot(S.c1, S.c2);
      dashed(ctx, () => { plot(ctx, ax, (s) => A * Math.exp(-p * s), alpha(fc, 0.55), { w: 2.5 }); plot(ctx, ax, (s) => -A * Math.exp(-p * s), alpha(fc, 0.55), { w: 2.5 }); });
      hits.push({ x: ax.X(1.5), y: ax.Y(A * Math.exp(-p * 1.5)), r: 14, name: p > 0 ? `the envelope curves ±Ce^(−pt), C = ${fmt(A, 2)}` : `the amplitude ±C = ±${fmt(A, 2)}` });
    }
    plot(ctx, ax, S.f, fc, { w: 5 });
    dot(ctx, ax.X(0), ax.Y(x0.v), pc, true, 10);
    hits.push({ x: ax.X(3), y: ax.Y(S.f(3)), r: 14, name: 'the displacement x(t)' }, { x: ax.X(0), y: ax.Y(x0.v), r: 16, name: `the initial conditions x(0) = ${fmt(x0.v, 2)}, x′(0) = ${fmt(v0.v, 1)}` });
    /* the root plane: the circle |r| = ω₀ and the two roots */
    const pl = axes(ctx, PLANE, [-6, 2], [-3, 3], { xl: 'Re r', yl: 'Im r', xc: ec, yc: ec, nx: 8, ny: 6 });
    ctx.save(); ctx.beginPath(); ctx.rect(pl.box.l, pl.box.t, pl.box.r - pl.box.l, pl.box.b - pl.box.t); ctx.clip();
    ctx.strokeStyle = guide(); ctx.lineWidth = 2; ctx.setLineDash([8, 8]); ctx.beginPath(); ctx.ellipse(pl.X(0), pl.Y(0), pl.X(W0) - pl.X(0), pl.Y(0) - pl.Y(W0), 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    text(ctx, '|r| = ω₀ = 2', pl.X(-W0) - 10, pl.Y(W0 * 0.8), PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    const roots = S.kind === 'over' ? [[S.r1, 0, 'r₁', -1], [S.r2, 0, 'r₂', 1]] : S.kind === 'critical' ? [[-p, 0, 'r₁ = r₂ = −p', 1]]
      : p < 1e-9 ? [[0, W0, 'iω₀', -1], [0, -W0, '−iω₀', 1]] : [[-p, S.w1, '−p + iω₁', -1], [-p, -S.w1, '−p − iω₁', 1]];
    roots.forEach(([re, im, name, side]) => {
      const x = pl.X(re), y = pl.Y(im);
      dot(ctx, x, y, ec, true, 10);
      text(ctx, name, x, y + side * 28, ec, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x, y, r: 16, name: `${name} = ${fmt(re, 2)}${im ? (im < 0 ? ' − ' : ' + ') + fmt(Math.abs(im), 2) + 'i' : ''}, a root of r² + 2pr + ω₀² = 0` });
    });
    /* the headline names the case; an overdamped or critically damped mass crosses x = 0 at most once */
    const c2 = c * c, km4 = 4 * K * M;
    const crossing = (ts) => (ts > 0.005 ? `crossing $\\kx = 0$ once, at $t = ${n(ts)}$ s` : Math.abs(x0.v) < 1e-9 ? `leaving $\\kx = 0$ and never returning to it` : `never crossing $\\kx = 0$`);
    let head;
    if (S.kind === 'over') head = `$c^2 = ${n(c2)} \\gt 4km = ${km4}$: overdamped, two negative roots; the mass slides home, ${crossing(Math.log(-S.c1 / S.c2) / (S.r2 - S.r1))}.`;
    else if (S.kind === 'critical') head = `$c^2 = ${n(c2)} = 4km$: critically damped, one root $-p = ${n(-p)}$ of multiplicity 2, ${crossing(-S.c1 / S.c2)}.`;
    else if (p < 1e-9) head = `$c = 0$: undamped, $\\komegazero = ${n(W0)}$, and $\\kx(t)$ oscillates between $\\pm C = \\pm ${n(A)}$ for ever.`;
    else head = `$c^2 = ${n(c2)} \\lt 4km = ${km4}$: underdamped, decaying inside $\\pm ${n(A)}e^{-${n(p)}t}$ with $\\komegaone = \\sqrt{\\komegazero^2 - p^2} = ${n(S.w1)}$.`;
    headline(ctx, head);
    const eq = p < 1e-9 ? '\\kr^2 + 4 = 0' : `\\kr^2 + ${n(2 * p)}\\kr + 4 = 0`;
    const rt = S.kind === 'over' ? `\\kr = ${n(S.r1)},\\ ${n(S.r2)}` : S.kind === 'critical' ? `\\kr = ${n(-p)}\\ \\text{(double)}` : p < 1e-9 ? `\\kr = \\pm ${n(W0)}i` : `\\kr = ${n(-p)} \\pm ${n(S.w1)}i`;
    ro.set(`${eq},\\quad ${rt};\\quad \\kx(t) = ${written(S)}`, undefined, { form: S.kind });
  }
  still(d, draw);
})();
};
