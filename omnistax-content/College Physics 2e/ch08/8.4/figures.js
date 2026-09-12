/* Figures for section 8.4 Elastic Collisions in One Dimension. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, axes, nice, curve, block } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- what an elastic collision of two objects along a line comes to ---------- */
const after = (m1, m2, v1, v2) => ({
  v1p: ((m1 - m2) * v1 + 2 * m2 * v2) / (m1 + m2),
  v2p: ((m2 - m1) * v2 + 2 * m1 * v1) / (m1 + m2),
});
/* a signed term as prose writes it, so that a sum never reads "2.00 + −1.00" */
const term = (x, d) => (x < 0 ? '- ' : '+ ') + fmt(Math.abs(x), d);
/* a number for the drawing, with the minus sign the book sets */
const num = (x, d) => fmt(x, d).replace('-', '−');
/* a velocity in words: which way it points and how fast */
const says = (sym, v) => sym + ' = ' + num(v, 2) + ' m/s';

/* A pair of bars, before the collision and after it, in a panel of its own. The two
   stand at the same height whenever the quantity between them is conserved. */
function pair(ctx, box, title, color, vals, labels, unit, dec) {
  let lo = Math.min(0, ...vals), hi = Math.max(0, ...vals);
  if (hi - lo < 1e-6) { lo = -1; hi = 1; }
  const pad = (hi - lo) * 0.22;
  const r = nice(lo - (lo < 0 ? pad : 0), hi + (hi > 0 ? pad : 0), 3);
  const Y = (v) => box.b - ((v - r.lo) / (r.hi - r.lo)) * (box.b - box.t);
  for (let i = 0; i <= r.n; i++) {
    const v = r.lo + ((r.hi - r.lo) * i) / r.n;
    line(ctx, box.l, Y(v), box.r, Y(v), PAL.rule, 1.5);
    text(ctx, num(v, dec), box.l - 14, Y(v), PAL.muted, { size: 17, align: 'right' });
  }
  line(ctx, box.l, box.t, box.l, box.b, PAL.muted, 2);
  const zero = Y(0);
  line(ctx, box.l, zero, box.r, zero, PAL.muted, 2);
  const w = 116, gap = (box.r - box.l) / vals.length;
  vals.forEach((v, i) => {
    const cx = box.l + gap * (i + 0.5), y = Y(v);
    ctx.save(); ctx.fillStyle = alpha(color, 0.3); ctx.strokeStyle = color; ctx.lineWidth = 3;
    ctx.fillRect(cx - w / 2, Math.min(zero, y), w, Math.max(2, Math.abs(y - zero)));
    ctx.strokeRect(cx - w / 2, Math.min(zero, y), w, Math.max(2, Math.abs(y - zero)));
    ctx.restore();
    text(ctx, num(v, dec) + (unit ? ' ' + unit : ''), cx, v >= 0 ? y - 22 : y + 22, color, { align: 'center', weight: 600, size: 20 });
    text(ctx, labels[i], cx, box.b + 28, PAL.muted, { size: 17, align: 'center' });
  });
  text(ctx, title, box.l, box.t - 28, color, { align: 'left', weight: 600, size: 20 });
}

/* =====================================================================
   FIGURE 8.6: two objects collide elastically along a line. The pair slides
   together, touches, and separates at the velocities the two conservation
   equations give. A collision has a time in it, so the figure moves: one run
   per loop, with the scrubber, and a hold that leaves the reader at the moment
   after the impact.
===================================================================== */
(function () {
  const d = sim('sim-elastic-collision', 700);
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 0.1, max: 5, step: 0.05, value: 0.5, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the first object' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.1, max: 5, step: 0.05, value: 3.5, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the second object' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 6, step: 0.25, value: 4, unit: 'm/s', dec: 2, onInput: reset, aria: 'velocity of the first object before the collision' });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: -6, max: 0.5, step: 0.25, value: 0, unit: 'm/s', dec: 2, onInput: reset, aria: 'velocity of the second object before the collision' });

  const SC = 85, TC = 1.0, GY = 308, VY = 132, PY = 200;
  const wide = (m) => 58 + 26 * Math.sqrt(m);
  const state = () => {
    const a = after(m1.v, m2.v, v1.v, v2.v);
    const fast = Math.max(Math.abs(a.v1p), Math.abs(a.v2p), 0.5);
    const tail = Math.min(1.4, Math.max(0.5, 460 / (SC * fast)));
    return { v1p: a.v1p, v2p: a.v2p, T: TC + tail };
  };
  const cy = cycle(() => state().T, 1.2);
  function reset() { cy.reset(); }

  /* an arrow along the surface from the object, with its symbol over the middle of it */
  function along(ctx, x, y, value, k, color, label) {
    if (Math.abs(value) < 0.02) { dot(ctx, x, y, color, false, 7); text(ctx, label, x, y - 26, color, { align: 'center', weight: 600, size: 20 }); return; }
    const dir = value < 0 ? -1 : 1, L = Math.abs(value) * k;
    arrow(ctx, x, y, x + dir * L, y, color, 5);
    text(ctx, label, x + (dir * L) / 2, y - 26, color, { align: 'center', weight: 600, size: 20 });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), t = cy.now(), hit = t >= TC;
    const M1 = m1.v, M2 = m2.v, V1 = v1.v, V2 = v2.v;
    const w1 = wide(M1), w2 = wide(M2);
    const x1 = 700 - w1 / 2 + SC * (hit ? s.v1p : V1) * (t - TC);
    const x2 = 700 + w2 / 2 + SC * (hit ? s.v2p : V2) * (t - TC);
    const u1 = hit ? s.v1p : V1, u2 = hit ? s.v2p : V2;
    const p1 = M1 * V1, p2 = M2 * V2, p1p = M1 * s.v1p, p2p = M2 * s.v2p;
    const ptot = p1 + p2;
    const ke = 0.5 * M1 * V1 * V1 + 0.5 * M2 * V2 * V2;
    const kep = 0.5 * M1 * s.v1p * s.v1p + 0.5 * M2 * s.v2p * s.v2p;
    const kp = 150 / Math.max(Math.abs(p1), Math.abs(p2), Math.abs(p1p), Math.abs(p2p), 0.25);

    /* the frictionless surface the two objects slide on */
    strip(ctx, 60, 1340, GY + 24, 46);
    line(ctx, 60, GY, 1340, GY, PAL.muted, 3);
    text(ctx, 'm₁ = ' + num(M1, 2) + ' kg', 70, 96, PAL.ink, { size: 21, weight: 600 });
    text(ctx, 'm₂ = ' + num(M2, 2) + ' kg', 1330, 96, PAL.ink, { size: 21, weight: 600, align: 'right' });

    /* the two objects, each with its velocity above it and its momentum below that */
    block(ctx, x1, GY - 34, w1, 68, PAL.ink);
    block(ctx, x2, GY - 34, w2, 68, PAL.ink);
    text(ctx, '1', x1, GY - 34, PAL.ink, { align: 'center', size: 24, weight: 600 });
    text(ctx, '2', x2, GY - 34, PAL.ink, { align: 'center', size: 24, weight: 600 });
    along(ctx, x1, VY, u1, 26, C('velocity'), hit ? 'v′₁' : 'v₁');
    along(ctx, x2, VY, u2, 26, C('velocity'), hit ? 'v′₂' : 'v₂');
    along(ctx, x1, PY, M1 * u1, kp, C('momentum'), hit ? 'p′₁' : 'p₁');
    along(ctx, x2, PY, M2 * u2, kp, C('momentum'), hit ? 'p′₂' : 'p₂');

    /* the two conserved sums, before and after */
    pair(ctx, { l: 190, r: 620, t: 450, b: 640 }, 'total momentum (kg·m/s)', C('momentum'), [ptot, p1p + p2p], ['before', 'after'], '', 2);
    pair(ctx, { l: 830, r: 1260, t: 450, b: 640 }, 'internal kinetic energy (J)', C('energy'), [ke, kep], ['before', 'after'], '', 2);

    headline(ctx, 't = ' + num(t, 2) + ' s · ' + (hit
      ? 'after the collision ' + says('v′₁', s.v1p) + ' and ' + says('v′₂', s.v2p)
      : 'before the collision ' + says('v₁', V1) + ' and ' + says('v₂', V2)));
    readout(d.readout,
      `\\kpone + \\kptwo = ${fmt(p1, 2)} ${term(p2, 2)} = ${fmt(ptot, 2)}\\ \\text{kg}\\cdot\\text{m/s} = \\kponeprime + \\kptwoprime`,
      'The internal kinetic energy of the system is ' + fmt(ke, 2) + ' J before the collision and ' + fmt(kep, 2) + ' J after it, because an elastic collision conserves the sum of the kinetic energies as well as the total momentum.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => state().T / 5), draw });
})();

/* =====================================================================
   SIM: the two conservation equations drawn in the plane of the final
   velocities. The momentum equation is a straight line and the internal
   kinetic energy equation is an ellipse, and they cross exactly twice: once
   at the state before the collision, which the worked example discards, and
   once at the collision itself. There is no time in this idea, so the figure
   is a still picture that answers its sliders and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-two-solutions', 620);
  const m1 = ctl(d.controls, { label: 'm_1', cls: '', min: 0.1, max: 5, step: 0.05, value: 0.5, unit: 'kg', dec: 2, aria: 'mass of the first object' });
  const m2 = ctl(d.controls, { label: 'm_2', cls: '', min: 0.1, max: 5, step: 0.05, value: 3.5, unit: 'kg', dec: 2, aria: 'mass of the second object' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 6, step: 0.25, value: 4, unit: 'm/s', dec: 2, aria: 'velocity of the first object before the collision' });

  function draw() {
    const { ctx } = begin(d.c);
    const M1 = m1.v, M2 = m2.v, V = v1.v, k = M1 / M2;
    const v1p = ((M1 - M2) / (M1 + M2)) * V, v2p = ((2 * M1) / (M1 + M2)) * V;
    const ytop = V * Math.sqrt(k);
    const box = { l: 220, r: 1180, t: 150, b: 530 };
    const rx = nice(-V * 1.15, V * 1.15, 6), ry = nice(-ytop * 1.2, ytop * 1.2, 4);
    const step = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0), dx = step(rx), dy = step(ry);
    const { X, Y } = axes(ctx, box, [rx.lo, rx.hi], [ry.lo, ry.hi], {
      xl: 'v′₁  (m/s)', yl: 'v′₂  (m/s)', xc: C('velocity'), yc: C('velocity'),
      nx: rx.n, ny: ry.n, fx: (v) => fmt(v, dx), fy: (v) => fmt(v, dy),
    });

    /* conservation of internal kinetic energy: an ellipse through the two states */
    const up = (x) => Math.sqrt(Math.max(0, k * (V * V - x * x)));
    curve(ctx, up, -V, V, X, Y, C('energy'), 5, 220);
    curve(ctx, (x) => -up(x), -V, V, X, Y, C('energy'), 5, 220);

    /* conservation of momentum: a straight line, clipped to the box */
    const ends = [V - ry.hi / k, V - ry.lo / k].map((x) => Math.max(rx.lo, Math.min(rx.hi, x)));
    const xa = Math.min(ends[0], ends[1]), xb = Math.max(ends[0], ends[1]);
    const mom = (x) => k * (V - x);
    curve(ctx, mom, xa, xb, X, Y, C('momentum'), 5, 2);

    /* which curve is which, above the plot where neither of them runs */
    const key = (y, color, label) => {
      line(ctx, 620, y, 664, y, color, 5);
      text(ctx, label, 678, y, color, { weight: 600, size: 20 });
    };
    key(84, C('momentum'), 'momentum is conserved');
    key(116, C('energy'), 'internal kinetic energy is conserved');

    /* the two crossings: the initial condition, which is discarded, and the collision */
    dot(ctx, X(V), Y(0), C('velocity'), false, 12);
    dot(ctx, X(v1p), Y(v2p), C('velocity'), true, 12);
    text(ctx, 'before the collision', X(V) - 20, Y(0) + 34, PAL.muted, { align: 'right', size: 19, bg: alpha(PAL.panel, 0.85) });
    const high = v2p > ry.hi * 0.72;
    text(ctx, 'after the collision', X(v1p), Y(v2p) + (high ? 34 : -32), PAL.ink, { align: 'center', size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });

    headline(ctx, 'the curves meet twice: at v′₁ = ' + num(V, 2) + ' m/s, before the collision, and at v′₁ = ' + num(v1p, 2) + ' m/s, after it');
    readout(d.readout,
      `\\kvoneprime = \\frac{m_1 - m_2}{m_1 + m_2}\\kvone = ${fmt(v1p, 2)}\\ \\text{m/s}, \\qquad \\kvtwoprime = \\frac{2m_1}{m_1 + m_2}\\kvone = ${fmt(v2p, 2)}\\ \\text{m/s}`,
      'The hollow crossing is the pair of velocities the objects already had, so it describes the situation before the collision and is discarded; the filled crossing is the only other way the two objects can leave one another with the momentum and the internal kinetic energy they came in with.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
