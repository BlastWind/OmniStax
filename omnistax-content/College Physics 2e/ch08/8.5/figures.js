/* Figures for section 8.5 Inelastic Collisions in One Dimension. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, axes, nice, curve, spring } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers ---------- */
const MINUS = (s) => String(s).replace('-', '−');
/* three significant figures, in plain decimals wherever the value is not tiny */
function sig(x, digits) {
  const d = digits || 3, a = Math.abs(x);
  if (!isFinite(x) || a < 1e-12) return '0';
  const r = Number(x.toPrecision(d));
  return MINUS(Math.abs(r) >= 1e-4 && Math.abs(r) < 1e6 ? String(r) : r.toExponential(2));
}
/* the same number for a readout set in maths, with any exponent as a power of ten */
function texnum(x, digits) {
  const d = digits || 3, a = Math.abs(x);
  if (!isFinite(x) || a < 1e-12) return '0';
  if (a >= 1e-4 && a < 1e6) return MINUS(String(Number(x.toPrecision(d))));
  const e = Math.floor(Math.log10(a)), m = x / Math.pow(10, e);
  return `${MINUS(fmt(m, 2))}\\times 10^{${e}}`;
}
/* a range that nice() can divide, however flat the data is */
const sum = (a, b) => `${texnum(a)} ${b < 0 ? '-' : '+'} ${texnum(Math.abs(b))}`;
const span = (lo, hi, floor) => { const f = floor || 1e-3; return hi - lo < f ? nice(Math.min(lo, 0), Math.max(hi, lo + f), 4) : nice(lo, hi, 4); };

/* ---------- the scene's pieces ---------- */
/* a square object of mass m sitting on the ground line gy, centred on x, w wide */
function box(ctx, x, gy, w, label) {
  const y = gy - w / 2;
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
  ctx.fillRect(x - w / 2, y - w / 2, w, w); ctx.strokeRect(x - w / 2, y - w / 2, w, w); ctx.restore();
  if (label) text(ctx, label, x, y, PAL.ink, { size: 19, weight: 600, align: 'center' });
}
/* an arrow of length L from (x, y) in the direction s, with its label beyond the head and never off the canvas */
function vec(ctx, x, y, L, s, color, label) {
  if (!(L > 8)) { dot(ctx, x, y, color, true, 6); text(ctx, label, Math.min(x + 16, 1210), y, color, { size: 19, weight: 600 }); return; }
  arrow(ctx, x, y, x + s * L, y, color, 5);
  const lx = Math.max(190, Math.min(1210, x + s * (L + 14)));
  text(ctx, label, lx, y, color, { size: 19, weight: 600, align: s < 0 ? 'right' : 'left' });
}

/* =====================================================================
   FIGURE 8.7 + 8.8 + 8.9: the one-dimensional inelastic collision. Two
   objects slide together along a line, meet, and leave with the
   velocities conservation of momentum gives them. The book draws this
   one scene three times — two equal masses that stop dead, a puck
   caught by a goalie, and two carts a compressed spring pushes apart —
   so the three fold into one figure. The run is finite, so it loops and
   gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-collision', 900);
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 0.05, max: 5, step: 0.05, value: 0.15, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the first object' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.05, max: 80, step: 0.05, value: 70, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the second object' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: -40, max: 40, step: 0.05, value: 35, unit: 'm/s', dec: 2, onInput: reset });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: -40, max: 40, step: 0.05, value: 0, unit: 'm/s', dec: 2, onInput: reset });
  const cc = ctl(d.controls, { label: 'c', cls: '', min: 0, max: 3.5, step: 0.01, value: 0, unit: '', dec: 2, onInput: reset, aria: 'the speed the objects separate at divided by the speed they approached at' });
  const TC = 2, T = 4, GY = 290;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* the velocities after the collision follow from conservation of momentum and from c */
  function state() {
    const M = m1.v + m2.v, vcm = (m1.v * v1.v + m2.v * v2.v) / M, u = v1.v - v2.v, up = -cc.v * u;
    const a = vcm + (m2.v / M) * up, b = vcm - (m1.v / M) * up;
    return {
      v1p: a, v2p: b, hits: u > 1e-9, ptot: m1.v * v1.v + m2.v * v2.v,
      ke: 0.5 * m1.v * v1.v * v1.v + 0.5 * m2.v * v2.v * v2.v,
      kep: 0.5 * m1.v * a * a + 0.5 * m2.v * b * b,
    };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), tau = REDUCED ? T : cy.now(), after = s.hits && tau >= TC;
    const big = Math.max(m1.v, m2.v);
    const w1 = 34 + 46 * Math.cbrt(m1.v / big), w2 = 34 + 46 * Math.cbrt(m2.v / big);
    const cx = 700;
    const vmax = Math.max(Math.abs(v1.v), Math.abs(v2.v), Math.abs(s.v1p), Math.abs(s.v2p), 0.05);
    const SC = s.hits ? 470 / (vmax * TC) : 400 / (vmax * T);
    const u1 = after ? s.v1p : v1.v, u2 = after ? s.v2p : v2.v;
    const p1 = m1.v * u1, p2 = m2.v * u2;
    const x1 = s.hits ? cx - w1 / 2 + SC * (tau <= TC ? v1.v : s.v1p) * (tau - TC) : cx - 330 + SC * v1.v * tau;
    const x2 = s.hits ? cx + w2 / 2 + SC * (tau <= TC ? v2.v : s.v2p) * (tau - TC) : cx + 330 + SC * v2.v * tau;
    /* the scene */
    strip(ctx, 80, 1320, GY + 13, 26);
    if (cc.v > 1.001) spring(ctx, x1 + w1 / 2, GY - w1 / 2, x1 + w1 / 2 + (after ? 52 : 24), GY - w1 / 2, 5, 11, PAL.muted, 3);
    box(ctx, x1, GY, w1, 'm₁');
    box(ctx, x2, GY, w2, 'm₂');
    const KV = 180 / vmax;
    vec(ctx, x1, GY - 122, Math.abs(u1) * KV, u1 < 0 ? -1 : 1, C('velocity'), (after ? 'v₁′ = ' : 'v₁ = ') + sig(u1) + ' m/s');
    vec(ctx, x2, GY - 176, Math.abs(u2) * KV, u2 < 0 ? -1 : 1, C('velocity'), (after ? 'v₂′ = ' : 'v₂ = ') + sig(u2) + ' m/s');
    const KP = 180 / Math.max(Math.abs(p1), Math.abs(p2), Math.abs(s.ptot), 1e-9);
    vec(ctx, x1, GY + 62, Math.abs(p1) * KP, p1 < 0 ? -1 : 1, C('momentum'), (after ? 'p₁′ = ' : 'p₁ = ') + sig(p1) + ' kg·m/s');
    vec(ctx, x2, GY + 118, Math.abs(p2) * KP, p2 < 0 ? -1 : 1, C('momentum'), (after ? 'p₂′ = ' : 'p₂ = ') + sig(p2) + ' kg·m/s');
    text(ctx, 'the total momentum is ' + sig(s.ptot) + ' kg·m/s, the same before the collision and after it', cx, 460, C('momentum'), { size: 20, weight: 600, align: 'center' });
    /* graph, left: the two momenta and their total against time */
    const ps = [0, m1.v * v1.v, m2.v * v2.v, m1.v * s.v1p, m2.v * s.v2p, s.ptot];
    const pr = span(Math.min.apply(null, ps), Math.max.apply(null, ps));
    const bA = { l: 170, r: 640, t: 540, b: 780 };
    const A = axes(ctx, bA, [0, T], [pr.lo, pr.hi], { xl: 'time (s)', xc: PAL.ink, yl: 'momentum (kg·m/s)', yc: C('momentum'), nx: 4, ny: pr.n, fx: (v) => fmt(v, 0), fy: (v) => sig(v, 2) });
    const step = (S, before, afterv, color, w, dash) => {
      const end = s.hits ? TC : T;
      line(ctx, S.X(0), S.Y(before), S.X(end), S.Y(before), color, w, dash);
      if (s.hits) { line(ctx, S.X(TC), S.Y(before), S.X(TC), S.Y(afterv), color, w, dash); line(ctx, S.X(TC), S.Y(afterv), S.X(T), S.Y(afterv), color, w, dash); }
    };
    step(A, s.ptot, s.ptot, alpha(C('momentum'), 0.3), 10);
    step(A, m1.v * v1.v, m1.v * s.v1p, C('momentum'), 4);
    step(A, m2.v * v2.v, m2.v * s.v2p, C('momentum'), 4, [10, 10]);
    text(ctx, 'p₁', A.X(T) - 8, A.Y(m1.v * s.v1p) - 22, C('momentum'), { size: 18, weight: 600, align: 'right' });
    text(ctx, 'p₂', A.X(T) - 8, A.Y(m2.v * s.v2p) + 22, C('momentum'), { size: 18, weight: 600, align: 'right' });
    text(ctx, 'total', A.X(0.35), A.Y(s.ptot) - 22, C('momentum'), { size: 18, weight: 600 });
    line(ctx, A.X(Math.min(tau, T)), bA.t, A.X(Math.min(tau, T)), bA.b, PAL.ink, 2, [4, 8]);
    /* graph, right: the internal kinetic energy against time */
    const kr = span(0, Math.max(s.ke, s.kep) * 1.15);
    const bB = { l: 850, r: 1300, t: 540, b: 780 };
    const B = axes(ctx, bB, [0, T], [0, kr.hi], { xl: 'time (s)', xc: PAL.ink, yl: 'internal kinetic energy (J)', yc: C('energy'), nx: 4, ny: kr.n, fx: (v) => fmt(v, 0), fy: (v) => sig(v, 2) });
    step(B, s.ke, s.kep, C('energy'), 5);
    dot(ctx, B.X(0), B.Y(s.ke), C('energy'), false, 10);
    dot(ctx, B.X(T), B.Y(s.kep), C('energy'), true, 10);
    line(ctx, B.X(Math.min(tau, T)), bB.t, B.X(Math.min(tau, T)), bB.b, PAL.ink, 2, [4, 8]);
    /* the headline */
    const lost = s.ke - s.kep;
    headline(ctx, !s.hits ? 'the two objects are not approaching each other, so nothing collides: raise v₁ above v₂ and they will meet'
      : !after ? 't = ' + fmt(tau, 2) + ' s · the two are still approaching, with ' + sig(s.ke) + ' J of internal kinetic energy between them'
        : 't = ' + fmt(tau, 2) + ' s · they leave at ' + sig(s.v1p) + ' m/s and ' + sig(s.v2p) + ' m/s, and the internal kinetic energy has ' + (lost >= 0 ? 'fallen by ' + sig(lost) : 'risen by ' + sig(-lost)) + ' J');
    readout(d.readout, `m_1\\kvone + m_2\\kvtwo = m_1\\kvoneprime + m_2\\kvtwoprime:\\quad ${sum(m1.v * v1.v, m2.v * v2.v)} = ${sum(m1.v * s.v1p, m2.v * s.v2p)} = ${texnum(s.ptot)}\\ \\text{kg}\\cdot\\text{m/s}`,
      !s.hits ? 'The two objects never meet, so nothing about the system changes and both graphs run flat.'
        : 'The internal kinetic energy is ' + sig(s.ke) + ' J before the collision and ' + sig(s.kep) + ' J after it, a change of ' + sig(s.kep - s.ke) + ' J. At c = 0 the two stick together and lose as much internal kinetic energy as conservation of momentum allows; at c = 1 they lose none; above c = 1 a compressed spring has given them more than they brought.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 4.6), draw });
})();

/* =====================================================================
   SIM: the recoil velocity. An object of mass m₁ is caught by an object
   of mass m₂ at rest, and the pair moves off at m₁v₁/(m₁ + m₂). The
   momentum arrow has the same length before the catch and after it; the
   velocity arrow does not. The curve below follows the recoil velocity
   across three decades of the catcher's mass. There is no time in the
   idea, so the figure is still and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-recoil', 800);
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 0.05, max: 5, step: 0.05, value: 0.15, unit: 'kg', dec: 2, aria: 'mass of the object that is caught' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 60, step: 0.5, value: 35, unit: 'm/s', dec: 1 });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.1, max: 100, step: 0.1, value: 70, unit: 'kg', dec: 1, aria: 'mass of the catcher' });
  const GY = 260;
  function draw() {
    const { ctx } = begin(d.c);
    const p = m1.v * v1.v, v = (m1.v / (m1.v + m2.v)) * v1.v;
    const big = Math.max(m1.v, m2.v);
    const w1 = 34 + 46 * Math.cbrt(m1.v / big), w2 = 34 + 46 * Math.cbrt(m2.v / big);
    strip(ctx, 80, 1320, GY + 13, 26);
    line(ctx, 700, 96, 700, GY + 40, PAL.rule, 2, [8, 8]);
    text(ctx, 'before the catch', 360, 100, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'after the catch', 1010, 100, PAL.muted, { size: 19, align: 'center' });
    /* before: the object comes in and the catcher is at rest */
    box(ctx, 170, GY, w1, 'm₁');
    box(ctx, 600, GY, w2, 'm₂');
    vec(ctx, 170, GY - w1 - 40, 150, 1, C('velocity'), 'v₁ = ' + fmt(v1.v, 1) + ' m/s');
    text(ctx, 'at rest', 600, GY - w2 - 40, PAL.muted, { size: 19, align: 'center' });
    vec(ctx, 170, GY + 66, 150, 1, C('momentum'), 'p = ' + sig(p) + ' kg·m/s');
    /* after: the two move off together */
    const xa = 880, xb = xa + w1 / 2 + w2 / 2;
    box(ctx, xa, GY, w1, 'm₁');
    box(ctx, xb, GY, w2, 'm₂');
    vec(ctx, xa, GY - Math.max(w1, w2) - 40, (v / v1.v) * 150, 1, C('velocity'), 'v′ = ' + sig(v) + ' m/s');
    vec(ctx, xa, GY + 66, 150, 1, C('momentum'), 'p = ' + sig(p) + ' kg·m/s');
    text(ctx, 'the momentum arrow has the same length on both sides; the velocity arrow does not', 700, 388, PAL.muted, { size: 19, align: 'center' });
    /* the curve: the recoil velocity against the catcher's mass, over three decades */
    const yr = span(0, v1.v);
    const g0 = { l: 200, r: 1280, t: 470, b: 700 };
    const g = axes(ctx, g0, [0, 3], [0, yr.hi], { xl: 'mass of the catcher m₂ (kg)', xc: PAL.ink, yl: 'recoil velocity v′ (m/s)', yc: C('velocity'), nx: 3, ny: yr.n, fx: (L) => sig(Math.pow(10, L - 1), 2), fy: (y) => sig(y, 3) });
    curve(ctx, (L) => (m1.v / (m1.v + Math.pow(10, L - 1))) * v1.v, 0, 3, g.X, g.Y, C('velocity'), 5, 140);
    const L2 = Math.log10(m2.v) + 1;
    line(ctx, g.X(L2), g0.b, g.X(L2), g.Y(v), PAL.ink, 2, [4, 8]);
    line(ctx, g0.l, g.Y(v), g.X(L2), g.Y(v), C('velocity'), 2, [4, 8]);
    dot(ctx, g.X(L2), g.Y(v), C('velocity'), true, 10);
    headline(ctx, 'a ' + fmt(m1.v, 2) + ' kg object at ' + fmt(v1.v, 1) + ' m/s leaves a ' + fmt(m2.v, 1) + ' kg catcher moving at ' + sig(v) + ' m/s, one part in ' + sig((m1.v + m2.v) / m1.v) + ' of the speed it came in at');
    readout(d.readout, `\\kvprime = \\frac{m_1}{m_1 + m_2}\\kvone = \\left(\\frac{${fmt(m1.v, 2)}\\ \\text{kg}}{${fmt(m1.v, 2)}\\ \\text{kg} + ${fmt(m2.v, 1)}\\ \\text{kg}}\\right)(${fmt(v1.v, 1)}\\ \\text{m/s}) = ${texnum(v)}\\ \\text{m/s}`,
      'The pair carries ' + sig(p) + ' kg·m/s away from the catch, exactly what the moving object brought to it. The heavier the catcher, the smaller the share of the speed that is left.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
