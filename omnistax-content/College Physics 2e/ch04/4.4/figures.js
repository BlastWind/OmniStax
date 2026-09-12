/* Figures for section 4.4 Newton’s Third Law of Motion: Symmetry in Forces.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, axes, nice, runner, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0);
/* a dashed boundary round a system of interest, with its name above the top left corner */
function boundary(ctx, l, t, r, b, label) {
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.setLineDash([12, 10]);
  const k = 18; ctx.beginPath();
  ctx.moveTo(l + k, t); ctx.lineTo(r - k, t); ctx.quadraticCurveTo(r, t, r, t + k); ctx.lineTo(r, b - k); ctx.quadraticCurveTo(r, b, r - k, b);
  ctx.lineTo(l + k, b); ctx.quadraticCurveTo(l, b, l, b - k); ctx.lineTo(l, t + k); ctx.quadraticCurveTo(l, t, l + k, t);
  ctx.stroke(); ctx.restore();
  if (label) text(ctx, label, l + 6, t - 16, PAL.muted, { size: 18, weight: 600 });
}
/* a ruled panel for a free-body diagram */
function panel(ctx, l, t, r, b) { ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(l, t, r - l, b - t); ctx.restore(); }

/* ---------- sprites, in ink ---------- */
/* a swimmer lying in the water, head to the left and feet to the right; kick swings the legs */
function swimmerSprite(ctx, x, y, color, kick) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(x - 52, y - 8, 13, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 40, y - 2); ctx.lineTo(x + 44, y + 2);
  ctx.moveTo(x - 40, y - 2); ctx.lineTo(x - 94, y - 20);
  ctx.moveTo(x + 44, y + 2); ctx.lineTo(x + 80, y - 14 + kick);
  ctx.moveTo(x + 44, y + 2); ctx.lineTo(x + 80, y + 20 - kick); ctx.stroke(); ctx.restore();
}
/* a cart of demonstration equipment standing on the floor at y, its handle to the left */
function cartSprite(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.rect(x - 44, y - 82, 88, 60); ctx.moveTo(x - 44, y - 52); ctx.lineTo(x + 44, y - 52);
  ctx.moveTo(x - 44, y - 76); ctx.lineTo(x - 86, y - 96); ctx.stroke();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x - 26, y - 11, 11, 0, TAU); ctx.arc(x + 26, y - 11, 11, 0, TAU); ctx.fill(); ctx.restore();
}
/* a rocket flying to the right, centred on (x, y) */
function rocketSprite(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x + 62, y); ctx.lineTo(x + 16, y - 20); ctx.lineTo(x - 46, y - 20); ctx.lineTo(x - 46, y + 20); ctx.lineTo(x + 16, y + 20); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 30, y - 20); ctx.lineTo(x - 46, y - 44); ctx.lineTo(x - 58, y - 20); ctx.closePath();
  ctx.moveTo(x - 30, y + 20); ctx.lineTo(x - 46, y + 44); ctx.lineTo(x - 58, y + 20); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(x + 14, y, 9, 0, TAU); ctx.fill(); ctx.restore();
}
/* the exhaust gas leaving the nozzle at (x, y), f the model time through the burn */
function plume(ctx, x, y, color, f) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4;
  for (let i = -1; i <= 1; i++) {
    const L = 90 + 26 * Math.sin(f * 9 + i), yy = y + i * 13;
    ctx.beginPath(); ctx.moveTo(x, yy); ctx.lineTo(x - L, yy + i * 9); ctx.stroke();
  }
  ctx.restore();
}

/* =====================================================================
   FIGURE 4.9: the swimmer pushing off the wall of the pool. While her feet
   are on the wall the two forces of the pair are drawn where each of them
   acts, and she accelerates away from it; once her feet leave the wall
   neither force acts and she glides. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-swimmer', 760);
  const Fp = ctl(d.controls, { label: '\\kF', cls: 'force', min: 100, max: 600, step: 10, value: 350, unit: 'N', dec: 0, onInput: reset, aria: 'force of the push' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 90, step: 1, value: 60, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the swimmer' });
  const tp = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.2, max: 0.8, step: 0.05, value: 0.4, unit: 's', dec: 2, onInput: reset, aria: 'length of the push' });
  const GLIDE = 1.6, WALL = 1100, KF = 0.28;
  const run = () => { const a = Fp.v / mm.v, ve = a * tp.v, xp = 0.5 * a * tp.v * tp.v; return { a, ve, xp, T: tp.v + GLIDE, D: xp + ve * GLIDE }; };
  const cy = cycle(() => run().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), tau = cy.now(), pushing = tau < tp.v - 1e-9;
    const s = pushing ? 0.5 * r.a * tau * tau : r.xp + r.ve * (tau - tp.v);
    const v = pushing ? r.a * tau : r.ve;
    const SC = (WALL - 80 - 300) / Math.max(0.8, r.D);
    const cx = WALL - 80 - s * SC, feet = cx + 80, cf = C('force'), L = Fp.v * KF;
    /* the pool: its water surface and the wall she pushes off */
    line(ctx, 50, 96, WALL, 96, PAL.muted, 3, [22, 14]);
    fixed(ctx, WALL, 96, 58, 300);
    text(ctx, 'the wall of the pool', WALL + 29, 414, PAL.muted, { size: 17, align: 'center' });
    /* the system of interest, and the swimmer inside it */
    boundary(ctx, cx - 112, 172, cx + 86, 276, 'the system of interest');
    swimmerSprite(ctx, cx, 220, PAL.ink, pushing ? 4 : 10 * Math.sin(tau * 7));
    /* the pair of forces, each drawn where it acts */
    if (pushing) {
      arrow(ctx, WALL, 210, WALL + L, 210, cf, 5);
      text(ctx, 'F feet on wall', WALL + L / 2, 182, cf, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      arrow(ctx, feet, 254, feet - L, 254, cf, 5);
      text(ctx, 'F wall on feet', feet - L / 2, 286, cf, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      arrow(ctx, cx, 130, cx - r.a * 14, 130, C('acceleration'), 5);
      text(ctx, 'a = ' + fmt(r.a, 2) + ' m/s²', cx - r.a * 14 - 12, 130, C('acceleration'), { size: 20, weight: 600, align: 'right' });
      text(ctx, 'the two forces are equal in magnitude, ' + fmt(Fp.v, 0) + ' N each, and opposite in direction', 620, 356, PAL.muted, { size: 18, align: 'center' });
    } else {
      text(ctx, 'her feet have left the wall, so neither force of the pair acts any longer', 620, 356, PAL.muted, { size: 18, align: 'center' });
    }
    if (v > 0.05) {
      const Lv = Math.min(230, v * 46);
      arrow(ctx, cx, 322, cx - Lv, 322, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 2) + ' m/s', cx - Lv - 12, 322, C('velocity'), { size: 20, weight: 600, align: 'right' });
    }
    /* the graph of her speed against time */
    const tr = nice(0, r.T, 4), vr = nice(0, Math.max(0.5, r.ve), 3);
    const g = axes(ctx, { l: 170, r: 700, t: 500, b: 672 }, [0, tr.hi], [0, vr.hi], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: tr.n, ny: vr.n, fx: (t) => fmt(t, decs(tr)), fy: (u) => fmt(u, 1) });
    line(ctx, g.X(0), g.Y(0), g.X(tp.v), g.Y(r.ve), C('velocity'), 5);
    line(ctx, g.X(tp.v), g.Y(r.ve), g.X(r.T), g.Y(r.ve), C('velocity'), 5);
    line(ctx, g.X(tp.v), g.Y(0), g.X(tp.v), g.Y(r.ve), PAL.muted, 2, [4, 8]);
    text(ctx, 'her feet leave the wall', g.X(tp.v) + 10, 516, PAL.muted, { size: 17 });
    dot(ctx, g.X(tau), g.Y(v), PAL.ink, true, 9);
    /* the free-body diagram of the swimmer */
    panel(ctx, 860, 456, 1360, 706);
    text(ctx, 'the free-body diagram of the swimmer', 1110, 482, PAL.muted, { size: 18, align: 'center' });
    const fx = 1160, fy = 588;
    arrow(ctx, fx, fy, fx, fy - 62, cf, 5); text(ctx, 'BF', fx + 14, fy - 62, cf, { size: 20, weight: 600 });
    arrow(ctx, fx, fy, fx, fy + 62, cf, 5); text(ctx, 'w', fx + 14, fy + 62, cf, { size: 20, weight: 600 });
    if (pushing) {
      const Lb = Math.min(150, L);
      arrow(ctx, fx, fy, fx - Lb, fy, cf, 5);
      text(ctx, 'F wall on feet', fx - Lb - 14, fy, cf, { size: 19, weight: 600, align: 'right' });
    } else text(ctx, 'no horizontal force acts on her now', fx - 40, fy, PAL.muted, { size: 17, align: 'right' });
    dot(ctx, fx, fy, PAL.ink, true, 10);
    text(ctx, 'the vertical forces cancel, since there is no vertical motion', 1110, 688, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, pushing
      ? 't = ' + fmt(tau, 2) + ' s · the wall pushes back on her feet with ' + fmt(Fp.v, 0) + ' N, so her ' + fmt(mm.v, 0) + ' kg accelerates at ' + fmt(r.a, 2) + ' m/s² away from the wall'
      : 't = ' + fmt(tau, 2) + ' s · her feet left the wall at ' + fmt(r.ve, 2) + ' m/s and she glides at that speed');
    readout(d.readout, pushing
      ? `\\ka = \\frac{\\kF_{\\text{wall on feet}}}{m} = \\frac{${fmt(Fp.v, 0)}\\ \\text{N}}{${fmt(mm.v, 0)}\\ \\text{kg}} = ${fmt(r.a, 2)}\\ \\text{m/s}^2`
      : `\\kv = \\ka\\kt = (${fmt(r.a, 2)}\\ \\text{m/s}^2)(${fmt(tp.v, 2)}\\ \\text{s}) = ${fmt(r.ve, 2)}\\ \\text{m/s}`,
      'The force she exerts on the wall and the force the wall exerts on her are equal in magnitude and opposite in direction, but they act on different bodies and so they do not cancel. Only the force on her feet is an external force on the system of interest, and only that force accelerates her.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => run().T / 5), draw });
})();

/* =====================================================================
   FIGURE 4.10: the professor, her cart and the two systems. The five forces
   the book draws are on the scene, the two system boundaries are dashed
   round the pair and round the cart alone, and each system has a free-body
   diagram of its own below. She crosses the room once per loop, so it gets
   the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-cart', 860);
  const Ff = ctl(d.controls, { label: '\\kFfloor', cls: 'force', min: 100, max: 250, step: 5, value: 150, unit: 'N', dec: 0, onInput: reset, aria: 'reaction force of the floor' });
  const fr = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 60, step: 1, value: 24, unit: 'N', dec: 1, onInput: reset, aria: 'forces opposing the motion' });
  const mp = ctl(d.controls, { label: 'm_{\\text{prof}}', cls: '', min: 40, max: 100, step: 1, value: 65, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the professor' });
  const mc = ctl(d.controls, { label: 'm_{\\text{cart}}', cls: '', min: 5, max: 40, step: 1, value: 19, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the cart and its equipment' });
  const ROOM = 8, FLOOR = 330, KF = 0.7;
  const run = () => {
    const M = mp.v + mc.v, Fnet = Ff.v - fr.v, a = Fnet / M, Fnet2 = mc.v * a;
    return { M, Fnet, a, Fnet2, Fprof: Fnet2 + fr.v, T: Math.sqrt((2 * ROOM) / a) };
  };
  const cy = cycle(() => run().T, 1.2);
  function reset() { cy.reset(); }
  /* one system's free-body diagram: the force driving it, the force opposing it, and what they give */
  function fbd(ctx, l, t, rr, title, Fap, Flab, Fnet, m, a, cf) {
    panel(ctx, l, t, rr, t + 320);
    const mid = (l + rr) / 2, y = t + 120;
    text(ctx, title, mid, t + 28, PAL.muted, { size: 18, align: 'center' });
    const La = Math.min(180, Fap * KF), Lf = Math.min(120, Math.max(44, fr.v * KF));
    arrow(ctx, mid, y, mid + La, y, cf, 5); text(ctx, Flab + ' = ' + fmt(Fap, 1) + ' N', mid + La + 12, y, cf, { size: 19, weight: 600 });
    arrow(ctx, mid, y, mid - Lf, y, cf, 5); text(ctx, 'f', mid - Lf - 12, y, cf, { size: 19, weight: 600, align: 'right' });
    dot(ctx, mid, y, PAL.ink, true, 10);
    text(ctx, 'F_net = ' + fmt(Fnet, 1) + ' N on ' + fmt(m, 1) + ' kg', mid, y + 84, cf, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'a = ' + fmt(a, 2) + ' m/s²', mid, y + 130, C('acceleration'), { size: 22, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), tau = cy.now(), cf = C('force');
    const s = 0.5 * r.a * tau * tau, px = 320 + (s / ROOM) * 660, cxx = px + 140;
    line(ctx, 40, FLOOR, 1360, FLOOR, PAL.muted, 3);
    boundary(ctx, px - 96, 118, cxx + 70, 344, 'System 1');
    boundary(ctx, cxx - 96, 148, cxx + 58, 344, 'System 2');
    runner(ctx, px, FLOOR - 18, PAL.ink, tau * 6);
    cartSprite(ctx, cxx, FLOOR, PAL.ink);
    /* the pair between the professor and the cart, internal to System 1 */
    const Lp = r.Fprof * KF, hand = px + 50;
    arrow(ctx, hand, 200, hand + Lp, 200, cf, 5); text(ctx, 'F_prof', hand + Lp + 12, 200, cf, { size: 19, weight: 600 });
    arrow(ctx, hand, 200, hand - Lp, 200, cf, 5); text(ctx, 'F_cart', hand - Lp - 12, 200, cf, { size: 19, weight: 600, align: 'right' });
    /* the pair at her feet: she pushes back on the floor, the floor pushes her forward */
    const Lf = Ff.v * KF, foot = px - 6;
    arrow(ctx, foot, 362, foot - Lf, 362, cf, 5); text(ctx, 'F_foot', foot - Lf - 12, 362, cf, { size: 19, weight: 600, align: 'right' });
    arrow(ctx, foot, 362, foot + Lf, 362, cf, 5); text(ctx, 'F_floor = ' + fmt(Ff.v, 0) + ' N', foot + Lf + 12, 362, cf, { size: 19, weight: 600 });
    /* the forces opposing the motion, on the cart's wheels */
    const Lr = Math.max(44, fr.v * KF);   /* f is too small to draw to scale, as the book says of it */
    arrow(ctx, cxx - 40, 408, cxx - 40 - Lr, 408, cf, 4); text(ctx, 'f = ' + fmt(fr.v, 1) + ' N', cxx - 40 - Lr - 12, 408, cf, { size: 19, weight: 600, align: 'right' });
    /* a free-body diagram for each system */
    fbd(ctx, 100, 470, 660, 'System 1: the professor, the cart and the equipment', Ff.v, 'F_floor', r.Fnet, r.M, r.a, cf);
    fbd(ctx, 740, 470, 1300, 'System 2: the cart and the equipment', r.Fprof, 'F_prof', r.Fnet2, mc.v, r.a, cf);
    headline(ctx, 't = ' + fmt(tau, 2) + ' s · System 1 is pushed forward with ' + fmt(Ff.v, 0) + ' N and held back by ' + fmt(fr.v, 1) + ' N, so ' + fmt(r.M, 1) + ' kg accelerates at ' + fmt(r.a, 2) + ' m/s²');
    readout(d.readout, `\\kFnet = \\kFfloor - \\kff = ${fmt(Ff.v, 0)}\\ \\text{N} - ${fmt(fr.v, 1)}\\ \\text{N} = ${fmt(r.Fnet, 1)}\\ \\text{N},\\qquad \\ka = \\frac{\\kFnet}{m} = \\frac{${fmt(r.Fnet, 1)}\\ \\text{N}}{${fmt(r.M, 1)}\\ \\text{kg}} = ${fmt(r.a, 2)}\\ \\text{m/s}^2`,
      'The force the professor exerts on the cart is ' + fmt(r.Fnet2, 1) + ' N + ' + fmt(fr.v, 1) + ' N = ' + fmt(r.Fprof, 1) + ' N. It is internal to System 1, where it cancels against the force the cart exerts back on her, so it never enters the first calculation; taking the cart alone as System 2 makes it external, and then it is the force that accelerates the cart.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => run().T / 4.5), draw });
})();

/* =====================================================================
   SIM: thrust. A rocket in empty space throws its exhaust gas backward and
   the gas pushes it forward just as hard, with no ground and no air to push
   against. The speed accumulates while the engine burns, so the figure runs
   a finite loop and gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-rocket', 700);
  const Fk = ctl(d.controls, { label: '\\kF', cls: 'force', min: 2, max: 20, step: 0.5, value: 10, unit: 'kN', dec: 1, onInput: reset, aria: 'force the rocket exerts on the gas' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 500, max: 3000, step: 100, value: 1200, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the rocket' });
  const BURN = 4;
  const run = () => { const a = (Fk.v * 1000) / mm.v; return { a, ve: a * BURN, S: 0.5 * a * BURN * BURN }; };
  const cy = cycle(() => BURN, 1.2);
  function reset() { cy.reset(); }
  const STARS = [[110, 118], [268, 92], [430, 146], [620, 100], [812, 140], [980, 106], [1188, 132], [1320, 96], [180, 348], [520, 360], [900, 352], [1268, 344]];
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), tau = cy.now();
    const s = 0.5 * r.a * tau * tau, v = r.a * tau, rx = 430 + (s / Math.max(1, r.S)) * 720;
    STARS.forEach(([sx, sy]) => dot(ctx, sx, sy, PAL.rule, true, 3));
    text(ctx, 'empty space: no ground below, no air behind', 700, 86, PAL.muted, { size: 18, align: 'center' });
    plume(ctx, rx - 48, 214, alpha(C('force'), 0.45), tau);
    rocketSprite(ctx, rx, 214, PAL.ink);
    const cf = C('force'), L = Fk.v * 10;
    arrow(ctx, rx, 152, rx + L, 152, cf, 5);
    text(ctx, 'thrust: the force the gas exerts on the rocket', rx + L / 2, 124, cf, { size: 19, weight: 600, align: 'center' });
    arrow(ctx, rx - 70, 278, rx - 70 - L, 278, cf, 5);
    text(ctx, 'the force the rocket exerts on the gas', rx - 70 - L / 2, 306, cf, { size: 19, weight: 600, align: 'center' });
    if (v > 0.2) {
      const Lv = Math.min(230, v * 5);
      arrow(ctx, rx, 342, rx + Lv, 342, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', rx + Lv + 12, 342, C('velocity'), { size: 20, weight: 600 });
    }
    const vr = nice(0, Math.max(1, r.ve), 4);
    const g = axes(ctx, { l: 200, r: 1180, t: 430, b: 616 }, [0, BURN], [0, vr.hi], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 4, ny: vr.n, fx: (t) => fmt(t, 0), fy: (u) => fmt(u, 0) });
    line(ctx, g.X(0), g.Y(0), g.X(BURN), g.Y(r.ve), C('velocity'), 5);
    line(ctx, g.X(tau), g.Y(0), g.X(tau), g.Y(v), C('time'), 2, [4, 8]);
    dot(ctx, g.X(tau), g.Y(v), PAL.ink, true, 9);
    text(ctx, 'the slope is the acceleration, ' + fmt(r.a, 2) + ' m/s²', g.X(BURN * 0.44), g.Y(r.ve * 0.82), C('acceleration'), { size: 18, weight: 600, align: 'center' });
    headline(ctx, 't = ' + fmt(tau, 2) + ' s · the gas pushes the rocket forward with ' + fmt(Fk.v, 1) + ' kN, and ' + fmt(mm.v, 0) + ' kg has reached ' + fmt(v, 1) + ' m/s');
    readout(d.readout, `\\ka = \\frac{\\kF}{m} = \\frac{${fmt(Fk.v * 1000, 0)}\\ \\text{N}}{${fmt(mm.v, 0)}\\ \\text{kg}} = ${fmt(r.a, 2)}\\ \\text{m/s}^2`,
      'The rocket has nothing to push on but its own exhaust gas, and that is enough: it exerts a large backward force on the gas, and by Newton’s third law the gas exerts an equal forward force on the rocket, which is its thrust.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => BURN / 4.5), draw });
})();

};
