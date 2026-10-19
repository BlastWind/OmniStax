/* Figures for section 1.4 Linear equations and the integrating factor. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, nice, dot, line, arrow, text, label, headline, register, readout, fmt, cycle, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Figure 1.10 and the tank of Example 1.4.2: a 100 L tank holding 60 L of water and 10 kg of salt at t = 0,
   brine at c_in kg/L running in at 5 L/min and the stirred mixture running out at q L/min, so the volume is
   V(t) = 60 + (5 − q)t and the salt x(t) obeys dx/dt = 5c_in − qx/V. Closed form (checked with SymPy in the
   task's scratch): x = c_in V + (10 − 60c_in)(60/V)^(q/a), a = 5 − q, which for the book's c_in = 0.1, q = 3
   is (60 + 2t)/10 + 4·60^(3/2)(60 + 2t)^(−3/2). The clock runs from t = 0 to the moment the tank is full,
   t = 40/(5 − q). The scene is vertical, so the graph of x(t) stands beside it; its window follows the run
   (t to the full time, x between the least and the most salt the run reaches, rounded), a zoom the plan
   line names. The dashed line is c_in·V(t), the salt the tank would hold at the inflow's concentration:
   x is drawn toward it, and at c_in = 1/6 (the tank's own starting concentration, a special on the slider)
   x lies on it. */
(function () {
  const d = sim('sim-brine-tank', 620);
  const V0 = 60, X0 = 10, CAP = 100, QIN = 5;
  const cin = ctl(d.controls, { label: 'concentration in', cls: '', key: 'cin', min: 0, max: 0.3, step: 0.005, value: 0.1, unit: 'kg/L', dec: 3,
    detents: [0.1], specials: [{ at: X0 / V0, label: 'the tank’s own' }], onInput: () => cy.reset() });
  const q = ctl(d.controls, { label: 'rate out', cls: '', key: 'qout', min: 1, max: 4.5, step: 0.1, value: 3, unit: 'L/min', dec: 1,
    detents: [3], onInput: () => cy.reset() });
  const aOf = () => QIN - q.v, tFull = () => (CAP - V0) / aOf();
  const cy = cycle(() => tFull(), 1.2);
  const ro = readout(d);
  const vol = (t) => V0 + aOf() * t;
  const xOf = (t) => { const c = cin.v, V = vol(t); return c * V + (X0 - V0 * c) * Math.pow(V0 / V, q.v / aOf()); };
  /* the tank: 100 L stand 390 units tall; the inflow drops in from above the left half, the outflow leaves the bottom right */
  const TANK = { l: 150, r: 400, t: 140, b: 540 }, perL = (TANK.b - TANK.t) / CAP, yAt = (V) => TANK.b - V * perL;
  const XIN = TANK.l + 70, OUTY = TANK.b - 28, OUTR = TANK.r + 120;
  const BOX = { l: 660, r: 1310, t: 120, b: 500 };
  let hits = [];
  hover(d.stage, () => hits);
  function stream(x1, y1, x2, y2, color, offset) {
    ctx_.save(); ctx_.strokeStyle = color; ctx_.lineWidth = 7; ctx_.lineCap = 'butt'; ctx_.setLineDash([16, 12]); ctx_.lineDashOffset = -offset;
    ctx_.beginPath(); ctx_.moveTo(x1, y1); ctx_.lineTo(x2, y2); ctx_.stroke(); ctx_.restore();
  }
  let ctx_ = null;
  function draw() {
    const { ctx } = begin(d.c); ctx_ = ctx;
    const fc = C('function'), ink = PAL.ink, mu = PAL.muted;
    const T = tFull(), t = Math.min(cy.now(), T), a = aOf(), c = cin.v, qo = q.v;
    const V = vol(t), x = xOf(t), conc = x / V, full = t >= T - 1e-9;
    hits = [];
    /* ---- the tank ---- */
    const shade = (k) => alpha(fc, 0.12 + 0.62 * Math.min(1, Math.max(0, k) / 0.3));
    const ys = yAt(V);
    ctx.save(); ctx.fillStyle = shade(conc); ctx.fillRect(TANK.l, ys, TANK.r - TANK.l, TANK.b - ys); ctx.restore();
    line(ctx, TANK.l, ys, TANK.r, ys, fc, 3);
    line(ctx, TANK.l, TANK.t, TANK.l, TANK.b, ink, 3); line(ctx, TANK.l, TANK.b, TANK.r, TANK.b, ink, 3); line(ctx, TANK.r, TANK.t, TANK.r, OUTY + 8, ink, 3); line(ctx, TANK.r, OUTY - 8, TANK.r, TANK.t, ink, 3);
    for (let L = 0; L <= CAP; L += 20) { line(ctx, TANK.l - 12, yAt(L), TANK.l, yAt(L), mu, 2); text(ctx, `${L} L`, TANK.l - 18, yAt(L), mu, { size: 17, align: 'right' }); }
    hits.push({ x: (TANK.l + TANK.r) / 2, y: (ys + TANK.b) / 2, r: 60, name: `the mixture: ${fmt(V, 1)} L holding ${n(x)} kg of salt, ${n(conc, 3)} kg/L` });
    /* the brine in: 5 L/min from above, dashes running down; the mixture out: q L/min to the right */
    const inTop = TANK.t - 70;
    stream(XIN, inTop, XIN, ys - 18, shade(c), t * 12 * QIN + 8);
    arrow(ctx, XIN, ys - 30, XIN, ys - 4, shade(c), 5);
    label(ctx, `in: 5 L/min at ${n(c, 3)} kg/L`, XIN + 10, inTop + 16, { side: 'right', color: fc, size: 18, weight: 600, gap: 14 });
    hits.push({ x: XIN, y: (inTop + ys) / 2, r: 24, name: `brine in: 5 L/min at ${n(c, 3)} kg/L` });
    stream(TANK.r, OUTY, OUTR - 26, OUTY, shade(conc), t * 12 * qo);
    arrow(ctx, OUTR - 40, OUTY, OUTR, OUTY, shade(conc), 5);
    label(ctx, `out: ${n(qo, 1)} L/min`, OUTR - 24, OUTY, { side: 'below', color: fc, size: 18, weight: 600, gap: 30 });
    hits.push({ x: (TANK.r + OUTR) / 2, y: OUTY, r: 24, name: `mixture out: ${n(qo, 1)} L/min at the tank’s ${n(conc, 3)} kg/L` });
    if (ys < OUTY - 40) label(ctx, `${fmt(V, 1)} L`, TANK.r + 6, ys, { side: 'right', color: fc, size: 18, weight: 600, gap: 8, leader: false });
    /* ---- the graph beside it: x(t) traced as time runs, the dashed c_in·V(t) it is drawn toward ---- */
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i <= 60; i++) { const u = xOf((T * i) / 60), g = c * vol((T * i) / 60); lo = Math.min(lo, u, g); hi = Math.max(hi, u, g); }
    const yr = nice(lo, hi, 4);
    const ax = axes(ctx, BOX, [0, T], [yr.lo, yr.hi], { xl: 't (min)', yl: 'x (kg)', yc: fc, nx: 4, ny: yr.n, nice: true });
    ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, ax, (u) => c * vol(u), alpha(fc, 0.55), { w: 2.5 }); ctx.restore();
    plot(ctx, ax, xOf, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, xOf, fc, { x: [0, t] });
    const xe = xOf(T);
    dot(ctx, ax.X(T), ax.Y(xe), fc, false, 9);
    label(ctx, `x(${n(T, 1)}) = ${n(xe)} kg`, ax.X(T), ax.Y(xe), { side: xe > (yr.lo + yr.hi) / 2 ? 'below' : 'above', color: fc, size: 18, weight: 600, gap: 22 });
    hits.push({ x: ax.X(T), y: ax.Y(xe), r: 16, name: `x(${n(T, 1)}) = ${n(xe)} kg, the salt when the tank is full` });
    dot(ctx, ax.X(t), ax.Y(x), fc, true, 9);
    hits.push({ x: ax.X(t), y: ax.Y(x), r: 16, name: `(t, x(t)) = (${n(t, 1)}, ${n(x)})` });
    const gm = 0.55 * T;
    label(ctx, `${n(c, 3)} kg/L × V(t)`, ax.X(gm), ax.Y(c * vol(gm)), { side: c * vol(gm) > xOf(gm) ? 'above' : 'below', color: alpha(fc, 0.75), size: 17, gap: 16 });
    hits.push({ x: ax.X(gm), y: ax.Y(c * vol(gm)), r: 16, name: `c_in·V(t): the salt the ${fmt(vol(gm), 0)} L would hold at the inflow’s ${n(c, 3)} kg/L` });
    line(ctx, ax.X(t), ax.box.t, ax.X(t), ax.box.b, alpha(ink, 0.35), 2, [4, 8]);
    /* ---- headline and readout, every number as written ---- */
    const xr = +x.toFixed(2), Vr = +V.toFixed(1), cr = +c.toFixed(3);
    const A = +(QIN * cr).toFixed(3), B = +((qo * xr) / Vr).toFixed(3), R = +(A - B).toFixed(3);
    headline(ctx, full
      ? `$t = ${n(T, 1)}$ min: the tank is full, ${fmt(V, 0)} L holding ${n(x)} kg of salt at ${n(conc, 3)} kg/L.`
      : `$t = ${n(t, 1)}$ min: ${fmt(Vr, 1)} L hold ${n(x)} kg of salt, ${n(conc, 3)} kg/L.`);
    ro.set(`\\kdxdt = 5(${n(cr, 3)}) - \\frac{${n(qo, 1)}\\,(${n(xr)})}{60 + ${n(a, 1)}\\,(${n(t, 1)})} = ${n(A, 3)} - ${n(B, 3)} = ${n(R, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tFull() / 5), draw });
})();
};
