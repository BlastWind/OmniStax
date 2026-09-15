/* Figures for section 8.1 Linear Momentum and Force. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, strip, scale, axes, nice, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the two figures ---------- */
const TAU = 2 * Math.PI;
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas above a thousand */
const sig3 = (x) => { const a = Math.abs(x); const s = a.toPrecision(3); return (x < 0 ? '−' : '') + (a >= 1000 ? commas(Math.round(Number(s))) : s); };

/* ---------- sprites, drawn in ink ---------- */
/* a football lying on its long axis, centered on (x, y) */
function football(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = color; ctx.beginPath(); ctx.ellipse(0, 0, 30, 17, 0, 0, TAU); ctx.fill();
  ctx.strokeStyle = PAL.panel; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-11, 0); ctx.lineTo(11, 0);
  for (let i = -1; i <= 1; i++) { ctx.moveTo(i * 7, -6); ctx.lineTo(i * 7, 6); }
  ctx.stroke(); ctx.restore();
}
/* a tennis ball centered on (x, y) */
function tennisBall(ctx, x, y, color, r = 21, filled = true) {
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = color; ctx.fillStyle = filled ? color : PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = filled ? PAL.panel : color; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x - r * 1.1, y, r * 1.1, -0.8, 0.8); ctx.stroke();
  ctx.beginPath(); ctx.arc(x + r * 1.1, y, r * 1.1, Math.PI - 0.8, Math.PI + 0.8); ctx.stroke(); ctx.restore();
}
/* a racquet seen edge on, its face at (x, y) and its handle trailing down and back */
function racquet(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.ellipse(x, y, 16, 74, 0, 0, TAU); ctx.stroke();
  ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x - 6, y + 70); ctx.lineTo(x - 44, y + 138); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   SIM: momentum is mass times velocity. The football player and the
   football of Example 8.1 run the same thirty meters of ground, each at
   its own speed, and a velocity bar and a momentum bar under each lane
   are drawn to one scale. The idea has a time in it, since a speed is
   ground covered in a time, so the figure moves: one crossing per loop,
   with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-momentum', 670);
  const mp = ctl(d.controls, { label: 'm_{\\text{player}}', cls: '', min: 50, max: 150, step: 1, value: 110, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the player' });
  /* the player's speed reaches down to a walk, so that the football can be given as much momentum as the player carries */
  const vp = ctl(d.controls, { label: '\\kv_{\\text{player}}', cls: 'velocity', min: 1, max: 15, step: 0.25, value: 8, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed of the player' });
  const mb = ctl(d.controls, { label: 'm_{\\text{ball}}', cls: '', min: 0.1, max: 2, step: 0.01, value: 0.41, unit: 'kg', dec: 3, onInput: reset, aria: 'mass of the football' });
  const vb = ctl(d.controls, { label: '\\kv_{\\text{ball}}', cls: 'velocity', min: 5, max: 40, step: 0.5, value: 25, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the football' });
  const RUN = 30;                                   /* the strip is thirty meters of ground */
  /* Both bar scales are fixed from the slider maxima and never move: a velocity bar is 560 units at
     40 m/s, and a momentum bar is 900 units at 2,250 kg·m/s, which is 150 kg at 15 m/s, the most the
     sliders can reach. The football's bar is therefore a stub beside the player's, which is the point
     of the example, and the numbers are written past the head of each bar. */
  const VMAX = 40, PMAX = 2250, BAR = 560, PBAR = 900;
  const L = 60, Rt = 1350, X = (m) => L + (m / RUN) * (Rt - L);
  const cy = cycle(() => RUN / Math.max(vp.v, vb.v), 1.2);
  function reset() { cy.reset(); }
  /* one bar from the common left edge, its value written past its head */
  function bar(ctx, y, len, color, label) {
    const w = Math.max(len, 4);
    arrow(ctx, L, y, L + w, y, color, 5);
    text(ctx, label, L + w + 16, y, color, { size: 22, weight: 600 });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), pp = mp.v * vp.v, pb = mb.v * vb.v;
    const xp = Math.min(RUN, vp.v * tau), xb = Math.min(RUN, vb.v * tau);
    /* the player's lane */
    text(ctx, 'the football player', L, 70, PAL.ink, { size: 22, weight: 600 });
    strip(ctx, L, Rt, 175, 48);
    /* a filled body, 84 units tall, running while the ground is still passing under it */
    F.silhouette(ctx, { x: Math.min(X(xp) + 20, Rt - 40), y: 180, s: 0.56, pose: xp > 0 && xp < RUN ? 'run' : 'stand' });
    bar(ctx, 248, (vp.v / VMAX) * BAR, C('velocity'), 'v = ' + fmt(vp.v, 2) + ' m/s');
    bar(ctx, 296, (pp / PMAX) * PBAR, C('momentum'), 'p = ' + sig3(pp) + ' kg·m/s');
    line(ctx, L, 342, Rt, 342, PAL.rule, 2);
    /* the football's lane */
    text(ctx, 'the hard-thrown football', L, 380, PAL.ink, { size: 22, weight: 600 });
    strip(ctx, L, Rt, 455, 48);
    football(ctx, X(xb), 455, PAL.ink);
    bar(ctx, 528, (vb.v / VMAX) * BAR, C('velocity'), 'v = ' + fmt(vb.v, 1) + ' m/s');
    bar(ctx, 576, (pb / PMAX) * PBAR, C('momentum'), 'p = ' + sig3(pb) + ' kg·m/s');
    /* the ground both of them cover */
    scale(ctx, X, 0, RUN, 5, 626, 'm', 1);
    const ratio = pp >= pb ? pp / pb : pb / pp;
    const who = Math.abs(pp - pb) / Math.max(pp, pb) < 0.005 ? 'the two carry the same momentum'
      : pp > pb ? 'the player carries ' + sig3(ratio) + ' times the momentum of the football'
      : 'the football carries ' + sig3(ratio) + ' times the momentum of the player';
    topline(ctx, tau < 0.01
      ? 'Both set off from the same line, the player at ' + fmt(vp.v, 2) + ' m/s and the football at ' + fmt(vb.v, 1) + ' m/s.'
      : 'At t = ' + fmt(tau, 2) + ' s ' + who + '.');
    readout(d.readout,
      `\\kpplayer = m\\kv = (${fmt(mp.v, 0)}\\ \\text{kg})(${fmt(vp.v, 2)}\\ \\text{m/s}) = ${sig3(pp)}\\ \\text{kg}\\cdot\\text{m/s}`,
      'The football has p = (' + fmt(mb.v, 3) + ' kg)(' + fmt(vb.v, 1) + ' m/s) = ' + sig3(pb) + ' kg·m/s, so ' + who + ', even though the football is much the faster of the two.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (RUN / Math.max(vp.v, vb.v)) / 5), draw });
})();

/* =====================================================================
   SIM: the net force is the rate at which the momentum changes. The
   whole loop is the five milliseconds of Example 8.2 during which the
   racquet is in contact with the tennis ball: the momentum grows along a
   straight line whose slope is the force. The momentum accumulates as a
   clock runs, so the figure moves, with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-force', 760);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.02, max: 0.2, step: 0.001, value: 0.057, unit: 'kg', dec: 3, onInput: reset, aria: 'mass of the ball' });
  const vf = ctl(d.controls, { label: '\\kvf', cls: 'velocity', min: 10, max: 80, step: 1, value: 58, unit: 'm/s', dec: 0, onInput: reset, aria: 'speed just after impact' });
  /* the contact runs to 10 ms, the range of the time axis below, with a detent at the 5.00 ms of the example */
  const dt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 1, max: 10, step: 0.5, value: 5, unit: 'ms', dec: 1, detents: [{ v: 5, label: '5.0' }], snap: true, onInput: reset, aria: 'contact time' });
  const T = () => dt.v / 1000;                            /* the contact time in seconds */
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = T(), dp = m.v * vf.v, Fn = dp / tc, a = vf.v / tc;
    const tau = Math.min(cy.now(), tc), f = tc > 0 ? tau / tc : 0;
    const v = vf.v * f, p = dp * f, smax = 0.5 * vf.v * tc, s = 0.5 * a * tau * tau;
    /* the scene: the racquet driving the ball off the strings */
    const X0 = 340, SPAN = 680, X = (mm) => X0 + (smax > 0 ? (mm / smax) * SPAN : 0), YB = 210;
    line(ctx, X(0), YB - 120, X(0), YB + 150, PAL.rule, 2, [8, 10]);
    text(ctx, 'where the ball met the strings', X(0) + 18, YB + 168, PAL.muted, { size: 17 });
    racquet(ctx, X(s) - 42, YB, PAL.ink);
    tennisBall(ctx, X(0), YB, PAL.muted, 24, false);
    tennisBall(ctx, X(s), YB, PAL.ink, 24);
    text(ctx, 'v = ' + fmt(v, 1) + ' m/s', X(s), YB - 104, C('velocity'), { size: 22, weight: 600, align: 'center' });
    arrow(ctx, X(s) + 30, YB + 68, X(s) + 30 + Math.max(8, (p / dp) * 280), YB + 68, C('momentum'), 5);
    text(ctx, 'p = ' + fmt(p, 2) + ' kg·m/s', X(s) + 30, YB + 104, C('momentum'), { size: 22, weight: 600 });
    /* the graph: the momentum the ball has taken up against the time */
    /* fixed axes. The contact time is the slider's own range, 0 to 10 ms, ticked every 2.5. The
       sliders could reach 0.2 kg × 80 m/s = 16 kg·m/s, but the ball of the example takes up only
       3.31 kg·m/s and would lie against the base line on a range that big, so the momentum axis is
       fixed at 0 to 8 kg·m/s, ticked every 2, which holds the example comfortably; a heavier or
       faster ball runs off the top, where the line is clipped and the running momentum is pinned.
       Neither range moves. */
    const TR = 10, PR = 8, box = { l: 210, r: 1290, t: 448, b: 678 };
    const sc = axes(ctx, box, [0, TR], [0, PR], { nx: 4, ny: 4, xl: 't (ms)', yl: 'p (kg·m/s)', xc: C('time'), yc: C('momentum'), fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 0) });
    /* the line is drawn only as far as the fixed momentum range reaches */
    const xE = Math.min(dt.v, dp > PR ? (dt.v * PR) / dp : dt.v), pE = dp * (xE / dt.v);
    line(ctx, sc.X(0), sc.Y(0), sc.X(xE), sc.Y(pE), C('momentum'), 5);
    /* the two labels sit on the side of the dashed line away from the rising line, and swap to the
       left only where the dashed line stands near the right-hand edge */
    const side = sc.X(dt.v) > box.r - 260 ? 'left' : 'right';
    if (dp <= PR) {
      line(ctx, sc.X(dt.v), sc.Y(0), sc.X(dt.v), sc.Y(dp), C('momentum'), 2.5, [10, 10]);
      F.label(ctx, 'Δp = ' + fmt(dp, 2) + ' kg·m/s', sc.X(dt.v), (sc.Y(0) + sc.Y(dp)) / 2, { side, color: C('momentum'), gap: 14, leader: false, H: 760 });
    }
    F.label(ctx, 'Δt = ' + fmt(dt.v, 1) + ' ms', sc.X(dt.v), sc.Y(0) - 22, { side, color: C('time'), gap: 14, leader: false, H: 760 });
    text(ctx, 'The slope of this line is the net force, ' + sig3(Fn) + ' N.', (box.l + box.r) / 2, 738, C('force'), { size: 22, weight: 600, align: 'center' });
    const xNow = Math.min(dt.v * f, TR), pNow = Math.min(p, PR);
    line(ctx, sc.X(0), sc.Y(pNow), sc.X(xNow), sc.Y(pNow), PAL.muted, 2, [4, 8]);
    line(ctx, sc.X(xNow), sc.Y(0), sc.X(xNow), sc.Y(pNow), PAL.muted, 2, [4, 8]);
    pinned(ctx, box, sc.X, sc.Y, dt.v * f, p, C('momentum'), fmt(p, 2) + ' kg·m/s');
    topline(ctx, f < 0.01
      ? 'The ball is at rest against the strings, about to be given ' + fmt(dp, 2) + ' kg·m/s in ' + fmt(dt.v, 1) + ' ms.'
      : 'At t = ' + fmt(tau * 1000, 1) + ' ms the ball has taken up ' + fmt(p, 2) + ' of the ' + fmt(dp, 2) + ' kg·m/s the racquet will give it.');
    readout(d.readout,
      `\\begin{aligned}\\kFnet &= \\frac{\\kdp}{\\kdt} = \\frac{m(\\kvf - \\kvi)}{\\kdt} = \\frac{(${fmt(m.v, 3)}\\ \\text{kg})(${fmt(vf.v, 0)}\\ \\text{m/s})}{${fmt(dt.v, 1)}\\times 10^{-3}\\ \\text{s}} = ${sig3(Fn)}\\ \\text{N}\\\\ &= m\\ka = (${fmt(m.v, 3)}\\ \\text{kg})(${sig3(a)}\\ \\text{m/s}^2) = ${sig3(Fn)}\\ \\text{N}\\end{aligned}`,
      'The mass of the ball does not change, so the two forms agree. Spread the same change in momentum over twice the contact time and the force falls to half of what it was, which is why a follow-through and a soft landing hurt less.');
  }
  register(d.fig, { update: (dt2) => cy.step(dt2, () => T() / 5), draw });
})();
};
