/* Figures for section 17.3 Applications. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, text, headline, register, readout, fmt, hover, cycle, spring, block, fixed, vbracket, hbracket, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-').replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const signed = (v, dec = 2) => (v < 0 ? '-' : '+') + n(Math.abs(v), dec);
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw, d = [12, 10]) => { ctx.save(); ctx.setLineDash(d); draw(); ctx.restore(); };
const run = (d, T, rate, draw, hold = 1.2) => { const cy = cycle(() => T, hold); register(d.fig, { update: (dt) => cy.step(dt, () => rate), draw: () => draw(REDUCED ? T : cy.now()) }); return cy; };

/* The solution of m x″ + b x′ + k x = 0 with x(0) = x0, x′(0) = v0, by the three cases of its characteristic equation. */
function homog(m, b, k, x0, v0) {
  const disc = b * b - 4 * m * k;
  if (Math.abs(disc) < 1e-9) {
    const l = -b / (2 * m), c2 = v0 - l * x0;
    return { kind: 'critical', l, c1: x0, c2, f: (t) => (x0 + c2 * t) * Math.exp(l * t) };
  }
  if (disc > 0) {
    const r = Math.sqrt(disc), l1 = (-b + r) / (2 * m), l2 = (-b - r) / (2 * m), c1 = (v0 - l2 * x0) / (l1 - l2), c2 = x0 - c1;
    return { kind: 'over', l1, l2, c1, c2, f: (t) => c1 * Math.exp(l1 * t) + c2 * Math.exp(l2 * t) };
  }
  const a = -b / (2 * m), be = Math.sqrt(-disc) / (2 * m), c1 = x0, c2 = (v0 - a * x0) / be;
  return { kind: 'under', a, be, c1, c2, f: (t) => Math.exp(a * t) * (c1 * Math.cos(be * t) + c2 * Math.sin(be * t)) };
}
/* x(t) written out from homog's constants */
function written(S, v = 't') {
  if (S.kind === 'over') return `${n(S.c1)}e^{${n(S.l1)}${v}}${signed(S.c2)}e^{${n(S.l2)}${v}}`;
  if (S.kind === 'critical') return `(${n(S.c1)}${signed(S.c2)}${v})e^{${n(S.l)}${v}}`;
  return `e^{${n(S.a)}${v}}(${n(S.c1)}\\cos(${n(S.be)}${v})${signed(S.c2)}\\sin(${n(S.be)}${v}))`;
}
/* a mass hanging on a spring from a support, its centre at y */
function hanging(ctx, X0, top, y, w = 90, h = 60) {
  fixed(ctx, X0 - 110, top - 24, 220, 24);
  spring(ctx, X0, top, X0, y - h / 2, 10, 24, PAL.ink, 3);
  block(ctx, X0, y, w, h, PAL.ink);
}

/* Figures 17.2 + 17.3 + 17.4: the mass on its spring and x(t) = c₁ cos ωt + c₂ sin ωt = A sin(ωt + ϕ), down positive in the
   scene (36 units per unit of displacement from the equilibrium level) and up positive on the graph, as the book draws it.
   The graph is t −1 to 6 by x −4.5 to 4.5, the sliders' largest amplitude being √18 ≈ 4.24. */
(function () {
  const d = sim('sim-spring-mass', 560);
  const c1 = ctl(d.controls, { label: 'c_{1}', cls: '', key: 'c1', min: -3, max: 3, step: 0.1, value: 2, unit: '', dec: 1, aria: 'the constant c₁', onInput: () => cy.reset() });
  const c2 = ctl(d.controls, { label: 'c_{2}', cls: '', key: 'c2', min: -3, max: 3, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the constant c₂', onInput: () => cy.reset() });
  const om = ctl(d.controls, { label: '\\omega', cls: '', key: 'omega', min: 1, max: 8, step: 0.1, value: 3, unit: '', dec: 1, aria: 'the angular frequency ω', onInput: () => cy.reset() });
  const ro = readout(d);
  const X0 = 230, EQ = 320, NAT = 255, SC = 34;
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 6, 1, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), w = om.v, A = Math.hypot(c1.v, c2.v), ph = Math.atan2(c1.v, c2.v), x = (s) => c1.v * Math.cos(w * s) + c2.v * Math.sin(w * s);
    const my = EQ + x(t) * SC;
    hanging(ctx, X0, 100, my);
    line(ctx, X0 - 150, NAT, X0 + 150, NAT, guide(), 2, [10, 10]);
    line(ctx, X0 - 150, EQ, X0 + 150, EQ, guide(), 2, [10, 10]);
    text(ctx, 'natural position', X0 - 150, NAT - 14, PAL.muted, { size: 17 });
    text(ctx, 'x = 0', X0 - 150, EQ + 16, PAL.muted, { size: 17 });
    vbracket(ctx, X0 - 128, NAT, EQ, PAL.ink, 's', -1, { size: 22 });
    if (Math.abs(my - EQ) > 14) vbracket(ctx, X0 + 74, EQ, my, fc, 'x', 1, { size: 22 });
    const ax = axes(ctx, { l: 520, r: 1300, t: 110, b: 470 }, [-1, 6], [-4.5, 4.5], { xl: 't', yl: 'x', nx: 7, ny: 6, fy: (v) => fmt(v, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    dashed(ctx, () => { line(ctx, ax.box.l, ax.Y(A), ax.box.r, ax.Y(A), alpha(fc, 0.5), 2); line(ctx, ax.box.l, ax.Y(-A), ax.box.r, ax.Y(-A), alpha(fc, 0.5), 2); });
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3, x: [-1, 0] });
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3, x: [0, 6] });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(x(t)), fc, true, 9);
    const T = (2 * Math.PI) / w, tp = ((((Math.PI / 2 - ph) / w) % T) + T) % T, ty = ax.Y(Math.min(A + 0.55, 4.3));
    if (tp + T <= 6) hbracket(ctx, ax.X(tp), ax.X(tp + T), ty, PAL.ink, 'T = 2π/ω');
    const z = -ph / w;
    if (z >= -1 && Math.abs(z) > 0.06) hbracket(ctx, ax.X(Math.min(z, 0)), ax.X(Math.max(z, 0)), ax.Y(0) + 26, PAL.ink, 'ϕ/ω', { side: 'below' });
    text(ctx, 'A', ax.box.r - 8, ax.Y(A) - 14, fc, { size: 22, align: 'right', bg: PAL.panel });
    hits = [{ x: X0, y: my, r: 44, name: 'the mass m' }, { x: X0, y: (100 + my) / 2, r: 26, name: 'the spring' },
      { x: ax.X(t), y: ax.Y(x(t)), r: 14, name: `(t, x(t)) = (${fmt(t, 2)}, ${fmt(x(t), 2)})` }];
    const q = ph > Math.PI / 2 ? 'second' : ph > 0 ? 'first' : ph > -Math.PI / 2 ? 'fourth' : 'third';
    headline(ctx, `$A=${n(A)}$, $T=\\frac{2\\pi}{\\omega}=${n(T)}$, $\\varphi=${n(ph, 3)}$ in the ${q} quadrant, from the signs of $c_{1}$ and $c_{2}$`);
    ro.set(`\\kxfn(t)=${n(c1.v, 1)}\\cos(${n(w, 1)}t)${signed(c2.v, 1)}\\sin(${n(w, 1)}t)=${n(A, 3)}\\sin(${n(w, 1)}t${signed(ph, 3)})`);
  });
})();

/* Figures 17.6 + 17.7 + 17.8: Example 17.19's m = 1/2, k = 3 with the damping b; the spring and the dashpot hang side by side
   from the support, both drawn to the gap. Down positive in the scene (45 units per unit from equilibrium), up positive on
   the graph, t 0 to 5 by x −3 to 3 (the undamped extreme reaches 2.65). */
(function () {
  const d = sim('sim-damping', 580);
  const M = 0.5, K = 3;
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0, max: 6, step: 0.01, value: 2.5, unit: '', dec: 2, aria: 'the damping coefficient b', specials: [{ at: Math.sqrt(6) }], onInput: () => cy.reset() });
  const x0 = ctl(d.controls, { label: '\\kxfn(0)', cls: 'function', key: 'x0', min: -1, max: 1, step: 0.05, value: 0, unit: '', dec: 2, aria: 'the initial displacement x(0)', onInput: () => cy.reset() });
  const v0 = ctl(d.controls, { label: '\\kxprime(0)', cls: 'derivative', key: 'v0', min: -6, max: 6, step: 0.1, value: -5, unit: '', dec: 1, aria: 'the initial velocity x′(0)', onInput: () => cy.reset() });
  const ro = readout(d);
  const X0 = 230, EQ = 310, SC = 45, TOP = 100;
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 5, 1, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), S = homog(M, bS.v, K, x0.v, v0.v), x = S.f, my = EQ + x(t) * SC, ink = PAL.ink;
    fixed(ctx, X0 - 110, TOP - 24, 220, 24);
    spring(ctx, X0 - 34, TOP, X0 - 34, my - 28, 9, 18, ink, 3);
    const G = my - 28 - TOP, cyl = TOP + 0.62 * G, plate = TOP + 0.45 * G, XD = X0 + 34;
    line(ctx, XD, TOP, XD, TOP + 10, ink, 3);
    line(ctx, XD - 16, TOP + 10, XD + 16, TOP + 10, ink, 3);
    line(ctx, XD - 16, TOP + 10, XD - 16, cyl, ink, 3); line(ctx, XD + 16, TOP + 10, XD + 16, cyl, ink, 3);
    line(ctx, XD - 11, plate, XD + 11, plate, ink, 5);
    line(ctx, XD, plate, XD, my - 28, ink, 3);
    block(ctx, X0, my, 130, 56, ink);
    line(ctx, X0 - 150, EQ, X0 + 150, EQ, guide(), 2, [10, 10]);
    text(ctx, 'x = 0', X0 - 150, EQ + 16, PAL.muted, { size: 17 });
    if (Math.abs(my - EQ) > 14) vbracket(ctx, X0 + 96, EQ, my, fc, 'x', 1, { size: 22 });
    const ax = axes(ctx, { l: 520, r: 1300, t: 110, b: 480 }, [0, 5], [-3, 3], { xl: 't', yl: 'x', nx: 5, ny: 6 });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    if (S.kind === 'under') {
      const R = Math.hypot(S.c1, S.c2);
      dashed(ctx, () => { plot(ctx, ax, (s) => R * Math.exp(S.a * s), alpha(fc, 0.5), { w: 2 }); plot(ctx, ax, (s) => -R * Math.exp(S.a * s), alpha(fc, 0.5), { w: 2 }); });
    }
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(x(t)), fc, true, 9);
    hits = [{ x: X0, y: my, r: 42, name: 'the mass, m = 1/2' }, { x: X0 - 34, y: (TOP + my) / 2, r: 20, name: 'the spring, k = 3' }, { x: XD, y: (TOP + my) / 2, r: 20, name: 'the dashpot, damping force −bx′' }];
    const b2 = bS.v * bS.v, cmp = S.kind === 'critical' ? '=' : S.kind === 'over' ? '\\gt' : '\\lt';
    const name = S.kind === 'critical' ? 'critically damped' : S.kind === 'over' ? 'overdamped' : bS.v === 0 ? 'no damping, simple harmonic motion' : 'underdamped';
    headline(ctx, `$b^{2}=${n(b2)}${cmp}4mk=6$: ${name}`);
    const roots = S.kind === 'over' ? `\\lambda=${n(S.l1)},\\ ${n(S.l2)}` : S.kind === 'critical' ? `\\lambda=${n(S.l)}` : `\\lambda=${n(S.a)}\\pm ${n(S.be)}i`;
    ro.set(`\\tfrac{1}{2}\\lambda^{2}+${n(bS.v)}\\lambda+3=0,\\ ${roots};\\quad \\kxfn(t)=${written(S)}`, undefined, { form: S.kind });
  });
})();

/* Figures 17.10 + 17.11: the motorcycle's wheel against its fixed frame after landing, x(t) = c₁e^(−8t) + c₂e^(−12t) with
   x(0) = 1/3 ft (the natural position) and x′(0) the landing velocity; one second of model time at a quarter of real speed.
   The scene is 200 units per foot from the equilibrium level; the graph is t 0 to 1 by x 0 to 1.2. */
(function () {
  const d = sim('sim-motorcycle', 540);
  const vS = ctl(d.controls, { label: '\\kxprime(0)', cls: 'derivative', key: 'v0', min: 0, max: 20, step: 0.5, value: 10, unit: 'ft/sec', dec: 1, aria: 'the landing velocity x′(0)', detents: [10], onInput: () => cy.reset() });
  const ro = readout(d);
  const X0 = 240, EQ = 250, SC = 200, R = 58;
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 1, 0.25, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), v0 = vS.v, c2 = -(v0 + 8 / 3) / 4, c1 = 1 / 3 - c2, x = (s) => c1 * Math.exp(-8 * s) + c2 * Math.exp(-12 * s);
    const hub = EQ + x(t) * SC;
    fixed(ctx, X0 - 130, 100, 260, 26);
    text(ctx, 'frame', X0 + 140, 113, PAL.muted, { size: 17 });
    spring(ctx, X0, 126, X0, hub - 10, 9, 22, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(X0, hub, R, 0, 2 * Math.PI); ctx.stroke(); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(X0, hub, R - 14, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    dot(ctx, X0, hub, PAL.ink, true, 7);
    const NAT = EQ + SC / 3;
    line(ctx, X0 - 160, EQ, X0 + 160, EQ, guide(), 2, [10, 10]);
    line(ctx, X0 - 160, NAT, X0 + 160, NAT, guide(), 2, [10, 10]);
    text(ctx, 'equilibrium', X0 - 70, EQ - 14, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'natural position', X0 - 70, NAT + 16, PAL.muted, { size: 17, align: 'right' });
    vbracket(ctx, X0 + 120, EQ, NAT, PAL.ink, 's = 4 in.', 1, { size: 20 });
    const ax = axes(ctx, { l: 560, r: 1300, t: 110, b: 470 }, [0, 1], [0, 1.2], { xl: 't', yl: 'x', nx: 5, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(x(t)), fc, true, 9);
    const tm = Math.log((12 * -c2) / (8 * c1)) / 4, xm = x(tm);
    if (tm > 0) dot(ctx, ax.X(tm), ax.Y(xm), fc, false, 9);
    hits = [{ x: X0, y: hub, r: R, name: 'the wheel' }, { x: X0, y: (126 + hub) / 2, r: 22, name: 'the spring of the suspension' },
      ...(tm > 0 ? [{ x: ax.X(tm), y: ax.Y(xm), r: 14, name: `the largest displacement, ${fmt(xm, 3)} ft at t = ${fmt(tm, 3)} s` }] : [])];
    headline(ctx, tm > 0 ? `$t=${n(t, 2)}$ s; the wheel swings to $${n(xm, 3)}$ ft below equilibrium at $t=${n(tm, 3)}$ s` : `$t=${n(t, 2)}$ s; the wheel rises straight back to equilibrium`);
    ro.set(`\\kxfn(t)=${n(c1, 3)}e^{-8t}${signed(c2, 3)}e^{-12t},\\quad \\kxfn(0)=\\tfrac{1}{3},\\ \\kxprime(0)=${n(v0, 1)}`);
  });
})();

/* Example 17.23: x″ + bx′ + 16x = 8 sin(ω_f t) from rest at equilibrium; x_p = A cos ω_f t + B sin ω_f t, the transient the
   rest. Scene 120 units per unit of displacement, down positive; graph t 0 to 6 by x −1.2 to 1.2 (b ≥ 2 keeps the steady
   amplitude under 1.04 at every ω_f). */
(function () {
  const d = sim('sim-forced', 560);
  const wS = ctl(d.controls, { label: '\\omega_{f}', cls: '', key: 'wf', min: 1, max: 8, step: 0.05, value: 4, unit: '', dec: 2, aria: 'the forcing frequency', specials: [{ at: 4 }], onInput: () => cy.reset() });
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 2, max: 10, step: 0.1, value: 8, unit: '', dec: 1, aria: 'the damping coefficient b', onInput: () => cy.reset() });
  const ro = readout(d);
  const X0 = 230, EQ = 290, SC = 120;
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 6, 1, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), w = wS.v, b = bS.v, D = (16 - w * w) ** 2 + (b * w) ** 2, A = (-8 * b * w) / D, B = (8 * (16 - w * w)) / D;
    const xp = (s) => A * Math.cos(w * s) + B * Math.sin(w * s), S = homog(1, b, 16, -A, -B * w), x = (s) => S.f(s) + xp(s);
    const my = EQ + x(t) * SC;
    hanging(ctx, X0, 100, my);
    const f = 8 * Math.sin(w * t), fl = f * 9;
    if (Math.abs(fl) > 8) arrow(ctx, X0 + 80, my, X0 + 80, my + fl, fc, 5);
    text(ctx, 'f(t)', X0 + 96, my + fl / 2, fc, { size: 20, weight: 600 });
    line(ctx, X0 - 150, EQ, X0 + 150, EQ, guide(), 2, [10, 10]);
    text(ctx, 'x = 0', X0 - 150, EQ + 16, PAL.muted, { size: 17 });
    const ax = axes(ctx, { l: 520, r: 1300, t: 110, b: 470 }, [0, 6], [-1.2, 1.2], { xl: 't', yl: 'x', nx: 6, ny: 6, fy: (v) => fmt(v, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    dashed(ctx, () => plot(ctx, ax, xp, fc, { w: 3 }));
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(x(t)), fc, true, 9);
    text(ctx, '$\\kxp$', ax.box.r - 6, ax.box.t + 18, fc, { size: 22, tex: true, align: 'right', bg: PAL.panel });
    const amp = Math.hypot(A, B);
    let settle = 6;
    for (let s = 0; s <= 6; s += 0.01) { let ok = true; for (let u = s; u <= 6; u += 0.05) if (Math.abs(S.f(u)) > 0.01 * amp) { ok = false; break; } if (ok) { settle = s; break; } }
    hits = [{ x: X0, y: my, r: 44, name: 'the mass, 1 slug' }, { x: X0, y: (100 + my) / 2, r: 26, name: 'the spring, k = 16' },
      { x: X0 + 80, y: my + fl / 2, r: 18, name: `the external force f(t) = 8 sin(ω_f t) = ${fmt(f, 2)} lb, down positive` }];
    headline(ctx, `Steady-state amplitude $${n(amp, 3)}$; the transient falls below $1\\%$ of it ${settle < 6 ? `after $${n(settle, 2)}$ s` : 'only after 6 s'}`);
    ro.set(`\\kxp(t)=${n(A, 3)}\\cos(${n(w)}t)${signed(B, 3)}\\sin(${n(w)}t),\\quad \\kxfn(t)-\\kxp(t)=${n(S.f(t), 3)}`);
  });
})();

/* Figure 17.13 (Example 17.24): the RLC series circuit, L = 5/3 H, C = 1/30 F, E = 300 V, q(0) = 0, I(0) = 9 A, with R a
   slider. The charges in the wire sit at an offset of 40 units per coulomb of q along the loop, so they move with the
   current and stop as q settles at EC = 10 C. Graph t 0 to 3 by q 0 to 20. */
(function () {
  const d = sim('sim-rlc', 700);
  const L = 5 / 3, Cap = 1 / 30, E = 300;
  const rS = ctl(d.controls, { label: 'R', cls: '', key: 'R', min: 2, max: 30, step: 0.1, value: 10, unit: 'Ω', dec: 1, aria: 'the resistance R', specials: [{ at: Math.sqrt(4 * L / Cap) }], onInput: () => cy.reset() });
  const ro = readout(d);
  const LEFT = 380, RIGHT = 1020, TOP = 140, BOT = 330, MID = (TOP + BOT) / 2;
  const PER = 2 * (RIGHT - LEFT) + 2 * (BOT - TOP);
  const along = (u) => {
    u = ((u % PER) + PER) % PER;
    if (u < RIGHT - LEFT) return [LEFT + u, TOP]; u -= RIGHT - LEFT;
    if (u < BOT - TOP) return [RIGHT, TOP + u]; u -= BOT - TOP;
    if (u < RIGHT - LEFT) return [RIGHT - u, BOT]; u -= RIGHT - LEFT;
    return [LEFT, BOT - u];
  };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 3, 1, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), ink = PAL.ink, R = rS.v;
    const S = homog(L, R, 1 / Cap, -E * Cap, 9), q = (s) => E * Cap + S.f(s), h = 1e-4, I = (s) => (q(s + h) - q(s - h)) / (2 * h);
    const qt = q(t), It = I(t);
    /* the charges, drawn first so the parts sit over them */
    for (let k = 0; k < 28; k++) {
      const [px, py] = along(k * (PER / 28) + qt * 40);
      const inPart = (py === TOP && px > 592 && px < 808) || (py === BOT && px > 682 && px < 738) || (px === RIGHT && Math.abs(py - MID) < 76) || (px === LEFT && Math.abs(py - MID) < 52);
      if (!inPart) dot(ctx, px, py, alpha(PAL.muted, 0.9), true, 5);
    }
    const gapL = 690, gapR = 730;
    line(ctx, LEFT, TOP, 600, TOP, ink, 4); line(ctx, 800, TOP, RIGHT, TOP, ink, 4);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(600, TOP);
    for (let i = 0; i < 6; i++) ctx.lineTo(600 + 15 + i * 30, TOP + (i % 2 ? 20 : -20));
    ctx.lineTo(800, TOP); ctx.stroke(); ctx.restore();
    text(ctx, 'R', 700, TOP - 38, ink, { size: 24, align: 'center' });
    line(ctx, RIGHT, TOP, RIGHT, MID - 70, ink, 4); line(ctx, RIGHT, MID + 70, RIGHT, BOT, ink, 4);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.beginPath(); for (let i = 0; i < 4; i++) ctx.arc(RIGHT, MID - 52 + i * 35, 17.5, -Math.PI / 2, Math.PI / 2); ctx.stroke(); ctx.restore();
    text(ctx, 'L', RIGHT + 44, MID, ink, { size: 24 });
    line(ctx, RIGHT, BOT, gapR, BOT, ink, 4); line(ctx, gapL, BOT, LEFT, BOT, ink, 4);
    line(ctx, gapL, BOT - 40, gapL, BOT + 40, ink, 5); line(ctx, gapR, BOT - 40, gapR, BOT + 40, ink, 5);
    text(ctx, 'C', 710, BOT + 62, ink, { size: 24, align: 'center' });
    text(ctx, `q = ${fmt(qt, 2)} C`, gapR + 26, BOT - 30, fc, { size: 20, weight: 600, bg: PAL.panel });
    line(ctx, LEFT, TOP, LEFT, MID - 46, ink, 4); line(ctx, LEFT, MID + 46, LEFT, BOT, ink, 4);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(LEFT, MID, 46, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'E', LEFT, MID, ink, { size: 24, align: 'center' });
    text(ctx, '300 V', LEFT - 62, MID, ink, { size: 20, align: 'right' });
    const dir = It >= 0 ? 1 : -1;
    if (Math.abs(It) > 0.05) arrow(ctx, 470 - dir * 40, TOP - 30, 470 + dir * 40, TOP - 30, dc, 4);
    text(ctx, `I = ${fmt(It, 2)} A`, 470, TOP - 62, dc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const ax = axes(ctx, { l: 170, r: 1250, t: 440, b: 650 }, [0, 3], [0, 20], { xl: 't', yl: 'q', nx: 6, ny: 5, fx: (v) => fmt(v, 1) });
    dashed(ctx, () => line(ctx, ax.box.l, ax.Y(10), ax.box.r, ax.Y(10), alpha(fc, 0.6), 2));
    text(ctx, 'steady state 10 C', ax.box.r - 6, ax.Y(10) - 16, fc, { size: 17, align: 'right', bg: PAL.panel });
    plot(ctx, ax, q, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, q, fc, { w: 5, x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(qt), fc, true, 9);
    hits = [{ x: LEFT, y: MID, r: 46, name: 'the voltage source E(t) = 300 V' }, { x: 700, y: TOP, r: 30, name: 'the resistor' }, { x: RIGHT, y: MID, r: 50, name: 'the inductor, L = 5/3 H' },
      { x: 710, y: BOT, r: 36, name: 'the capacitor, C = 1/30 F' }, { x: (LEFT + RIGHT) / 2, y: BOT, r: 12, name: 'charges carried round the loop' }];
    headline(ctx, `$t=${n(t, 2)}$ s: $\\kq=${n(qt, 2)}$ C and $\\kI=\\frac{d\\kq}{dt}=${n(It, 2)}$ A`);
    ro.set(`\\tfrac{5}{3}\\frac{d^{2}\\kq}{dt^{2}}+${n(R, 1)}\\frac{d\\kq}{dt}+30\\kq=300,\\quad \\kq(t)=10+${written(S)}`, undefined, { form: S.kind });
  });
})();
};
