/* Figures for section 8.4 Elastic Collisions in One Dimension. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, strip, axes, nice, curve, block, pinned } = F;
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
const says = (sym, v) => sym + ' = ' + fmt(v, 2) + '\\ \\text{m/s}';

/* A pair of bars, before the collision and after it, in a panel of its own. The two
   stand at the same height whenever the quantity between them is conserved. The panel
   carries no scale: its height is fitted to the pair, and the value is written on each
   bar, so nothing on it moves when the sliders do except the two numbers. */
function pair(ctx, box, title, color, vals, labels, unit, dec) {
  let lo = Math.min(0, ...vals), hi = Math.max(0, ...vals);
  if (hi - lo < 1e-6) { lo = -1; hi = 1; }
  const pad = (hi - lo) * 0.22;
  const r = nice(lo - (lo < 0 ? pad : 0), hi + (hi > 0 ? pad : 0), 3);
  const Y = (v) => box.b - ((v - r.lo) / (r.hi - r.lo)) * (box.b - box.t);
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
  const m1 = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 0.1, max: 5, step: 0.05, value: 0.5, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the first object',
    specials: [{ at: () => m2.v, label: 'equal masses' }] });
  const m2 = ctl(d.controls, { label: '\\kmtwo', cls: 'mass', min: 0.1, max: 5, step: 0.05, value: 3.5, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the second object',
    specials: [{ at: () => m1.v, label: 'equal masses' }] });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 6, step: 0.25, value: 4, unit: 'm/s', dec: 2, onInput: reset, aria: 'velocity of the first object before the collision' });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: -6, max: 0.5, step: 0.25, value: 0, unit: 'm/s', dec: 2, onInput: reset, aria: 'velocity of the second object before the collision' });
  m1.refresh();

  const SC = 85, TC = 1.0, GY = 308;
  /* one row per arrow, so two arrows pointing at each other before the impact never lie on one line */
  const ROW = { v1: 118, v2: 148, p1: 190, p2: 220 };
  const wide = (m) => 58 + 26 * Math.sqrt(m);
  const state = () => {
    const a = after(m1.v, m2.v, v1.v, v2.v);
    const fast = Math.max(Math.abs(a.v1p), Math.abs(a.v2p), 0.5);
    const tail = Math.min(1.4, Math.max(0.5, 460 / (SC * fast)));
    return { v1p: a.v1p, v2p: a.v2p, T: TC + tail };
  };
  const cy = cycle(() => state().T, 1.2);
  function reset() { cy.reset(); }

  /* an arrow along the surface from the object, with its symbol just past the head */
  function along(ctx, x, y, value, k, color, label) {
    if (Math.abs(value) < 0.02) { dot(ctx, x, y, color, false, 7); text(ctx, label, x + 16, y, color, { weight: 600, size: 20 }); return; }
    const dir = value < 0 ? -1 : 1, L = Math.min(340, Math.abs(value) * k);
    arrow(ctx, x, y, x + dir * L, y, color, 5);
    text(ctx, label, x + dir * (L + 12), y, color, { align: dir < 0 ? 'right' : 'left', weight: 600, size: 20 });
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
    /* one fixed scale for the momentum arrows, 12.5 units per kg·m/s, which puts the 3.50 kg·m/s
       of the worked example at 44 units and holds everything up to 12 kg·m/s inside the canvas;
       a heavier or faster pair than that is drawn at the arrow's full length of 340 units */
    const kp = 12.5;

    /* the frictionless surface the two objects slide on */
    strip(ctx, 60, 1340, GY + 24, 46);
    line(ctx, 60, GY, 1340, GY, PAL.muted, 3);
    text(ctx, 'm₁ = ' + num(M1, 2) + ' kg', 70, 96, C('mass'), { size: 21, weight: 600 });
    text(ctx, 'm₂ = ' + num(M2, 2) + ' kg', 1330, 96, C('mass'), { size: 21, weight: 600, align: 'right' });

    /* the two objects, each with its velocity above it and its momentum below that */
    const c1 = F.ref('object-1'), c2 = F.ref('object-2');
    block(ctx, x1, GY - 34, w1, 68, c1);
    block(ctx, x2, GY - 34, w2, 68, c2);
    text(ctx, '1', x1, GY + 62, c1, { align: 'center', size: 24, weight: 600 });
    text(ctx, '2', x2, GY + 62, c2, { align: 'center', size: 24, weight: 600 });
    along(ctx, x1, ROW.v1, u1, 26, C('velocity'), hit ? 'v′₁' : 'v₁');
    along(ctx, x2, ROW.v2, u2, 26, C('velocity'), hit ? 'v′₂' : 'v₂');
    along(ctx, x1, ROW.p1, M1 * u1, kp, C('momentum'), hit ? 'p′₁' : 'p₁');
    along(ctx, x2, ROW.p2, M2 * u2, kp, C('momentum'), hit ? 'p′₂' : 'p₂');

    /* the two conserved sums, before and after */
    pair(ctx, { l: 190, r: 620, t: 450, b: 640 }, 'total momentum (kg·m/s)', C('momentum'), [ptot, p1p + p2p], ['before', 'after'], '', 2);
    pair(ctx, { l: 830, r: 1260, t: 450, b: 640 }, 'internal kinetic energy (J)', C('energy'), [ke, kep], ['before', 'after'], '', 2);

    topline(ctx, hit
      ? 'After the collision ' + says('$\\kvoneprime', s.v1p) + '$ and ' + says('$\\kvtwoprime', s.v2p) + '$.'
      : 'Before the collision ' + says('$\\kvone', V1) + '$ and ' + says('$\\kvtwo', V2) + '$.');
    readout(d.readout,
      `\\kpone + \\kptwo = ${fmt(p1, 2)} ${term(p2, 2)} = ${fmt(ptot, 2)}\\ \\text{kg}\\cdot\\text{m/s} = \\kponeprime + \\kptwoprime`);
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
  const m1 = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 0.1, max: 5, step: 0.05, value: 0.5, unit: 'kg', dec: 2, aria: 'mass of the first object',
    specials: [{ at: () => m2.v, label: 'equal masses' }] });
  const m2 = ctl(d.controls, { label: '\\kmtwo', cls: 'mass', min: 0.1, max: 5, step: 0.05, value: 3.5, unit: 'kg', dec: 2, aria: 'mass of the second object',
    specials: [{ at: () => m1.v, label: 'equal masses' }] });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 6, step: 0.25, value: 4, unit: 'm/s', dec: 2, aria: 'velocity of the first object before the collision' });
  m1.refresh();
  const { formula, note } = F.readout(d);

  function draw() {
    const { ctx } = begin(d.c);
    const M1 = m1.v, M2 = m2.v, V = v1.v, k = M1 / M2;
    const v1p = ((M1 - M2) / (M1 + M2)) * V, v2p = ((2 * M1) / (M1 + M2)) * V;
    const ytop = V * Math.sqrt(k);
    const box = { l: 220, r: 1180, t: 150, b: 530 };
    /* fixed axes. The first object never arrives faster than 6 m/s, so that is the range of v′₁,
       ticked every 2 m/s. A very light first object could leave v′₂ near 12 m/s and the ellipse
       near 42 m/s, but the worked example's ellipse only stands 1.5 m/s tall and would be a flat
       line on an axis that big, so v′₂ is fixed to the same −6 to 6 m/s, which holds the default
       state comfortably; the ellipse is clipped where it leaves the box and the state after the
       collision is pinned at the edge. Neither range moves. */
    const VR = 6;
    const { X, Y } = axes(ctx, box, [-VR, VR], [-VR, VR], {
      xl: 'v′₁  (m/s)', yl: 'v′₂  (m/s)', xc: C('velocity'), yc: C('velocity'),
      nx: 6, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });

    /* conservation of internal kinetic energy: an ellipse through the two states */
    const up = (x) => Math.sqrt(Math.max(0, k * (V * V - x * x)));
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();   /* the ellipse leaves the box rather than running flat along its edge */
    curve(ctx, up, -V, V, X, Y, C('energy'), 5, 220);
    curve(ctx, (x) => -up(x), -V, V, X, Y, C('energy'), 5, 220);
    ctx.restore();

    /* conservation of momentum: a straight line, clipped to the box */
    const ends = [V - VR / k, V + VR / k].map((x) => Math.max(-VR, Math.min(VR, x)));
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
    const out = v2p > VR;
    pinned(ctx, box, X, Y, v1p, v2p, C('velocity'), out ? 'after the collision, at ' + fmt(v2p, 2) + ' m/s' : undefined);
    text(ctx, 'before the collision', X(V) - 20, Y(0) + 34, PAL.muted, { align: 'right', size: 19, bg: alpha(PAL.panel, 0.85) });
    const high = v2p > VR * 0.72;
    if (!out) text(ctx, 'after the collision', X(v1p), Y(v2p) + (high ? 34 : -32), PAL.ink, { align: 'center', size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });

    topline(ctx, 'The curves meet twice, at $\\kvoneprime = ' + fmt(V, 2) + '\\ \\text{m/s}$ before the collision and at $\\kvoneprime = ' + fmt(v1p, 2) + '\\ \\text{m/s}$ after it.');
    /* at equal masses the difference in the numerator is nothing, and the formula becomes the swap */
    const same = Math.abs(M1 - M2) < 1e-9;
    F.morph(formula, same
      ? `\\mk{v}{\\kvoneprime} = \\mk{n}{0}\\ \\text{m/s}`
      : `\\mk{v}{\\kvoneprime} = \\mk{f}{\\frac{\\kmone - \\kmtwo}{\\kmone + \\kmtwo}}\\mk{u}{\\kvone} = \\mk{n}{${fmt(v1p, 2)}}\\ \\text{m/s}`,
      { keyMap: same ? { f: 'n', u: 'n' } : {} });
    note.textContent = same
      ? `With equal masses the first object stops dead and the second leaves with $\\kvtwoprime = \\kvone = ${fmt(V, 2)}\\ \\text{m/s}$: the two exchange velocities.`
      : `The second object leaves with $\\kvtwoprime = 2\\kmone\\kvone/(\\kmone + \\kmtwo) = ${fmt(v2p, 2)}\\ \\text{m/s}$.`;
    F.renderMath(note);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
