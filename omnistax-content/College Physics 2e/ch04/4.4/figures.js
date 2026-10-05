/* Figures for section 4.4 Newton’s Third Law of Motion: Symmetry in Forces.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, choice, hover, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, scale, axes, pinned, runner, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* draws inside the graph box, so a line that runs past a fixed range is cut off at the frame
   instead of the frame being stretched to hold it */
const inbox = (ctx, box, f) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); f(); ctx.restore(); };
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

/* ---------- sprites, each in the colour its caller gives it ---------- */
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
   are on the wall her legs straighten, the two forces of the pair are drawn
   where each acts, and she accelerates away from it; once her feet leave the
   wall neither force acts and she glides. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-swimmer', 760);
  const Fp = ctl(d.controls, { label: '\\kF', cls: 'force', min: 100, max: 600, step: 10, value: 350, unit: 'N', dec: 0, onInput: reset, aria: 'force of the push' });
  const mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 90, step: 1, value: 60, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the swimmer' });
  const tp = ctl(d.controls, { label: '\\Delta\\kt', cls: 'time', min: 0.2, max: 0.8, step: 0.05, value: 0.4, unit: 's', dec: 2, onInput: reset, aria: 'how long her feet stay on the wall' });
  /* fixed scales: 600 N is 204 units, inside the wall's 240; 12 m/s, the
     fastest release (600 N on 40 kg for 0.8 s), is 216 units */
  const GLIDE = 1.6, WALL = 1120, Y0 = 244, S = 1.8, KF = 0.34, KV = 18;
  /* the pool is ruled 0 to 5 m by her feet's distance from the wall and never rescales; a glide past
     5 m is held at the mark and the headline says how far she has really gone */
  const XMAX = 5, SC = 150, SX = (mtr) => WALL - mtr * SC;
  const run = () => { const a = Fp.v / mm.v, ve = a * tp.v, xp = 0.5 * a * tp.v * tp.v; return { a, ve, xp, T: tp.v + GLIDE }; };
  const cy = cycle(() => run().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), tau = cy.now(), pushing = tau < tp.v - 1e-9;
    const s = pushing ? 0.5 * r.a * tau * tau : r.xp + r.ve * (tau - tp.v);
    const v = pushing ? r.a * tau : r.ve, out = s - r.xp, cf = C('force'), L = Fp.v * KF;
    const hl = topline(ctx, pushing
      ? 'After $\\kt = ' + fmt(tau, 2) + '\\ \\text{s}$ the wall still pushes back on her feet with $\\kFwallfeet = ' + fmt(Fp.v, 0) + '\\ \\text{N}$, so her ' + fmt(mm.v, 0) + ' kg accelerate at $\\ka = ' + fmt(r.a, 2) + '\\ \\text{m/s}^2$ away from it'
      : out > XMAX
        ? 'Her feet left the wall at $\\kv = ' + fmt(r.ve, 2) + '\\ \\text{m/s}$, and she has glided ' + fmt(out, 1) + ' m from it, past the 5 m of pool drawn here'
        : 'Her feet left the wall at $\\kv = ' + fmt(r.ve, 2) + '\\ \\text{m/s}$, and with no force of the pair left she glides on at that speed');
    const lb = F.labeller(ctx, 760, { headline: hl });
    /* the pool: its water surface, the wall she pushes off and the distance of her feet from it */
    line(ctx, 40, 120, WALL, 120, PAL.muted, 3, [22, 14]);
    fixed(ctx, WALL, 100, 240, 300);
    ctx.save(); ctx.strokeStyle = F.ref('wall'); ctx.lineWidth = 3; ctx.strokeRect(WALL, 100, 240, 300); ctx.restore();
    lb.add('the wall of the pool', WALL + 120, 400, 0, 1, F.ref('wall'), 17, 18);
    scale(ctx, SX, 0, XMAX, 1, 440, 'm', 1);
    /* the swimmer, lying feet to the wall: her legs straighten through the push, then she glides streamlined */
    const k = pushing ? tau / tp.v : 1, hx = 30 + 44 * k, foot = SX(Math.min(Math.max(out, 0), XMAX)) - 2;
    const box = { l: foot - (hx + 116) * S, r: foot + 12, t: Y0 - 48, b: Y0 + 78 };
    boundary(ctx, box.l, box.t, box.r, box.b);
    lb.block(box.l, box.t, box.r, box.b);
    F.silhouette(ctx, { x: foot, y: Y0, s: S, face: -1, color: F.ref('swimmer'),
      hip: { x: hx, y: 0 }, shoulder: { x: hx + 46, y: -2 }, head: { x: hx + 68, y: -6 },
      hands: [{ x: hx + 104, y: -6 }, { x: hx + 102, y: -1 }], feet: [{ x: 0, y: 10 }, { x: -3, y: 15 }] });
    /* the pair of forces, each drawn where it acts: on her feet in the water, on the wall inside it */
    if (pushing) {
      const yF = Y0 + 12 * S, onFeet = { x1: WALL, y1: yF, x2: WALL - L, y2: yF }, onWall = { x1: WALL, y1: yF, x2: WALL + L, y2: yF };
      lb.halo(onFeet); arrow(ctx, onFeet.x1, onFeet.y1, onFeet.x2, onFeet.y2, cf, 5);
      lb.halo(onWall); arrow(ctx, onWall.x1, onWall.y1, onWall.x2, onWall.y2, cf, 5);
      lb.add('F_{wall on feet}', WALL - L / 2, yF, -0.35, 0.94, cf, 20, box.b - yF + 28);
      lb.add('F_{feet on wall}', WALL - 4, yF, -0.45, -0.89, cf, 20, 84);
    }
    if (v > 0.05) {
      const vx = foot - hx * S, yv = Y0 + 132, sv = { x1: vx, y1: yv, x2: vx - v * KV, y2: yv };
      arrow(ctx, sv.x1, sv.y1, sv.x2, sv.y2, C('velocity'), 5);
      lb.beside(sv, 'left', 'v = ' + fmt(v, 2) + ' m/s', C('velocity'), 20);
    }
    lb.add('the system of interest', box.l + 8, box.t, -0.6, -0.8, PAL.muted, 18, 24);
    lb.flush();
    /* the graph of her speed against time. Fixed axes: the run never exceeds 0.8 s of push and 1.6 s
       of glide, so time is 0 to 2.4 s; the fastest release the sliders reach is 12 m/s, so speed is
       0 to 15 m/s with headroom above it. Neither range changes as a slider moves. */
    const gbox = { l: 170, r: 700, t: 506, b: 684 };
    const g = axes(ctx, gbox, [0, 2.4], [0, 15], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 4, ny: 5, fx: (t) => fmt(t, 1), fy: (u) => fmt(u, 0) });
    line(ctx, g.X(tp.v), g.Y(0), g.X(tp.v), gbox.t + 4, PAL.muted, 2, [4, 8]);
    text(ctx, 'her feet leave the wall', g.X(tp.v) + 10, gbox.t + 12, PAL.muted, { size: 17 });
    line(ctx, g.X(0), g.Y(0), g.X(tp.v), g.Y(r.ve), C('velocity'), 5);
    line(ctx, g.X(tp.v), g.Y(r.ve), g.X(r.T), g.Y(r.ve), C('velocity'), 5);
    dot(ctx, g.X(tau), g.Y(v), PAL.ink, true, 9);
    /* the free-body diagram of the swimmer, on a scale of its own (0.1 unit per newton) so her
       weight at 90 kg still fits the panel */
    panel(ctx, 860, 488, 1360, 744);
    text(ctx, 'the free-body diagram of the swimmer', 1110, 508, PAL.muted, { size: 18, align: 'center' });
    const fx = 1200, fy = 626, w = mm.v * 9.8, KB = 0.1;
    arrow(ctx, fx, fy, fx, fy - w * KB, cf, 5); text(ctx, 'BF = ' + fmt(w, 0) + ' N', fx + 16, fy - w * KB + 8, cf, { size: 20, weight: 600 });
    arrow(ctx, fx, fy, fx, fy + w * KB, cf, 5); text(ctx, 'w = ' + fmt(w, 0) + ' N', fx + 16, fy + w * KB - 8, cf, { size: 20, weight: 600 });
    if (pushing) {
      arrow(ctx, fx, fy, fx - Fp.v * KB, fy, cf, 5);
      text(ctx, 'F_{wall on feet}', fx - Fp.v * KB - 14, fy, cf, { size: 20, weight: 600, align: 'right' });
    } else text(ctx, 'no horizontal force acts on her now', fx - 24, fy, PAL.muted, { size: 17, align: 'right' });
    dot(ctx, fx, fy, F.ref('swimmer'), true, 10);
    readout(d.readout, pushing
      ? `\\ka = \\frac{\\kFwallfeet}{\\km} = \\frac{${fmt(Fp.v, 0)}\\ \\text{N}}{${fmt(mm.v, 0)}\\ \\text{kg}} = ${fmt(r.a, 2)}\\ \\text{m/s}^2`
      : `\\kv = \\ka\\,\\Delta\\kt = (${fmt(r.a, 2)}\\ \\text{m/s}^2)(${fmt(tp.v, 2)}\\ \\text{s}) = ${fmt(r.ve, 2)}\\ \\text{m/s}`);
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
  const mp = ctl(d.controls, { label: '\\km_{\\htmlData{ref=professor}{\\text{prof}}}', cls: 'mass', min: 40, max: 100, step: 1, value: 65, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the professor' });
  const mc = ctl(d.controls, { label: '\\km_{\\htmlData{ref=cart}{\\text{cart}}}', cls: 'mass', min: 5, max: 40, step: 1, value: 19, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the cart and its equipment' });
  /* The force labels would ride a scene that crosses the room, and two pairs share an origin, so the
     scene draws none (rule 26.7): the two system boundaries are frame labels and stay, the free-body
     diagrams below carry every value, and the pointer names any arrow. */
  const ROOM = 8, FLOOR = 330, KF = 0.7;
  let hits = [];
  const run = () => {
    const M = mp.v + mc.v, Fnet = Ff.v - fr.v, a = Fnet / M, Fnet2 = mc.v * a;
    return { M, Fnet, a, Fnet2, Fprof: Fnet2 + fr.v, T: Math.sqrt((2 * ROOM) / a) };
  };
  const cy = cycle(() => run().T, 1.2);
  function reset() { cy.reset(); }
  /* one system's free-body diagram: the force driving it, the force opposing it, and what they give */
  function fbd(ctx, l, t, rr, title, Fap, Flab, Fnet, m, a, cf, body) {
    panel(ctx, l, t, rr, t + 320);
    const mid = (l + rr) / 2, y = t + 120;
    text(ctx, title, mid, t + 28, PAL.muted, { size: 18, align: 'center' });
    const La = Math.min(180, Fap * KF), Lf = Math.min(120, Math.max(44, fr.v * KF));
    arrow(ctx, mid, y, mid + La, y, cf, 5); text(ctx, Flab + ' = ' + fmt(Fap, 1) + ' N', mid + La + 12, y, cf, { size: 19, weight: 600 });
    arrow(ctx, mid, y, mid - Lf, y, cf, 5); text(ctx, 'f', mid - Lf - 12, y, cf, { size: 19, weight: 600, align: 'right' });
    dot(ctx, mid, y, body ?? PAL.ink, true, 10);
    text(ctx, 'F_net = ' + fmt(Fnet, 1) + ' N on ' + fmt(m, 1) + ' kg', mid, y + 84, cf, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'a = ' + fmt(a, 2) + ' m/s²', mid, y + 130, C('acceleration'), { size: 22, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), tau = cy.now(), cf = C('force');
    const s = 0.5 * r.a * tau * tau, px = 320 + (s / ROOM) * 660, cxx = px + 140;
    line(ctx, 40, FLOOR, 1360, FLOOR, F.ref('floor'), 3);
    boundary(ctx, px - 96, 118, cxx + 70, 344, 'System 1');
    boundary(ctx, cxx - 96, 148, cxx + 58, 344, 'System 2');
    F.person(ctx, px + 30, FLOOR, F.ref('professor'), { lean: 0.2, phase: tau * 6, reach: { x: cxx - 80, y: FLOOR - 92 } });
    cartSprite(ctx, cxx, FLOOR, F.ref('cart'));
    /* the pair between the professor and the cart, internal to System 1 */
    const Lp = r.Fprof * KF, hand = px + 50;
    arrow(ctx, hand, 200, hand + Lp, 200, cf, 5);
    arrow(ctx, hand, 200, hand - Lp, 200, cf, 5);
    /* the pair at her feet: she pushes back on the floor, the floor pushes her forward */
    const Lf = Ff.v * KF, foot = px - 6;
    arrow(ctx, foot, 362, foot - Lf, 362, cf, 5);
    arrow(ctx, foot, 362, foot + Lf, 362, cf, 5);
    /* the forces opposing the motion, on the cart's wheels */
    const Lr = Math.max(44, fr.v * KF);   /* f is too small to draw to scale, as the book says of it */
    arrow(ctx, cxx - 40, 408, cxx - 40 - Lr, 408, cf, 4);
    /* every arrow has a name under the pointer */
    hits = [
      { x: hand + Lp, y: 200, name: 'F prof, the force the professor exerts on the cart' },
      { x: hand - Lp, y: 200, name: 'F cart, the force the cart exerts back on the professor' },
      { x: foot - Lf, y: 362, name: 'F foot, the force she exerts back on the floor' },
      { x: foot + Lf, y: 362, name: 'F floor, the force the floor exerts on her' },
      { x: cxx - 40 - Lr, y: 408, name: 'f, the forces opposing the motion' },
    ].map((q) => ({ ...q, r: 30 }));
    /* a free-body diagram for each system */
    fbd(ctx, 100, 470, 660, 'System 1: the professor, the cart and the equipment', Ff.v, 'F_floor', r.Fnet, r.M, r.a, cf);
    fbd(ctx, 740, 470, 1300, 'System 2: the cart and the equipment', r.Fprof, 'F_prof', r.Fnet2, mc.v, r.a, cf, F.ref('cart'));
    topline(ctx, 'After ' + fmt(tau, 2) + ' s System 1 is still pushed forward with ' + fmt(Ff.v, 0) + ' N and held back by ' + fmt(fr.v, 1) + ' N, so its ' + fmt(r.M, 1) + ' kg accelerates at ' + fmt(r.a, 2) + ' m/s²');
    readout(d.readout, `\\ka = \\frac{\\kFfloor - \\kff}{\\km} = \\frac{${fmt(Ff.v, 0)}\\ \\text{N} - ${fmt(fr.v, 1)}\\ \\text{N}}{${fmt(r.M, 1)}\\ \\text{kg}} = ${fmt(r.a, 2)}\\ \\text{m/s}^2`,
      'The professor’s push on the cart, ' + fmt(r.Fprof, 1) + ' N, is internal to System 1 and drops out there; only System 2, the cart alone, counts it as external.');
  }
  hover(d.stage, () => hits);
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
  const mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 500, max: 3000, step: 100, value: 1200, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the rocket' });
  const BURN = 4;
  const run = () => { const a = (Fk.v * 1000) / mm.v; return { a, ve: a * BURN, S: 0.5 * a * BURN * BURN }; };
  const cy = cycle(() => BURN, 1.2);
  function reset() { cy.reset(); }
  const STARS = [[110, 118], [268, 92], [430, 146], [620, 100], [812, 140], [980, 106], [1188, 132], [1320, 96], [180, 348], [520, 360], [900, 352], [1268, 344]];
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), tau = cy.now();
    const s = 0.5 * r.a * tau * tau, v = r.a * tau;
    /* fixed scene scale: the distance from the point of release is ruled 0 to 80 m and never
       rescales. The burn the figure opens with covers 67 m and so fills it, and a harder burn
       carries the rocket past the last mark, where it is held and the headline says how far it
       has really gone. */
    const XMAX = 80, RX = (mtr) => 430 + mtr * (720 / XMAX);
    const past = s > XMAX, rx = RX(Math.min(s, XMAX));
    STARS.forEach(([sx, sy]) => dot(ctx, sx, sy, PAL.rule, true, 3));
    /* the exhaust gas is a body, not a force, so it wears its referent colour and never the force hue */
    plume(ctx, rx - 48, 214, alpha(F.ref('gas'), 0.7), tau);
    rocketSprite(ctx, rx, 214, F.ref('rocket'));
    const cf = C('force'), L = Fk.v * 10;
    arrow(ctx, rx, 152, rx + L, 152, cf, 5);
    text(ctx, 'thrust: the force the gas exerts on the rocket', rx + L / 2, 124, cf, { size: 19, weight: 600, align: 'center' });
    arrow(ctx, rx - 70, 278, rx - 70 - L, 278, cf, 5);
    text(ctx, 'the force the rocket exerts on the gas', rx - 70 - L / 2, 306, cf, { size: 19, weight: 600, align: 'center' });
    if (v > 0.2) {
      const Lv = Math.min(230, v * 5);
      arrow(ctx, rx, 342, rx + Lv, 342, C('velocity'), 5);
      const room = rx + Lv + 140 < 1390;   /* the label goes behind the tail once the arrow nears the edge */
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', room ? rx + Lv + 12 : rx - 12, 342, C('velocity'), { size: 20, weight: 600, align: room ? 'left' : 'right' });
    }
    scale(ctx, RX, 0, XMAX, 20, 386, 'm', 1);
    /* fixed axes: the burn always lasts 4 s, and the largest thrust the sliders allow on the least
       mass, 20 kN on 500 kg, is 40 m/s² and so 160 m/s by the end of it. The graph is therefore
       always 0 to 4 s by 0 to 160 m/s, ticked every 1 s and 40 m/s, and it never rescales */
    const VR = 160, gbox = { l: 200, r: 1180, t: 430, b: 616 };
    const g = axes(ctx, gbox, [0, BURN], [0, VR], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 4, ny: 4, fx: (t) => fmt(t, 0), fy: (u) => fmt(u, 0) });
    inbox(ctx, gbox, () => {
      line(ctx, g.X(0), g.Y(0), g.X(BURN), g.Y(r.ve), C('velocity'), 5);
      line(ctx, g.X(tau), g.Y(0), g.X(tau), g.Y(v), C('time'), 2, [4, 8]);
    });
    pinned(ctx, gbox, g.X, g.Y, tau, v, PAL.ink, fmt(v, 1) + ' m/s');
    text(ctx, 'the slope is the acceleration, ' + fmt(r.a, 2) + ' m/s²', g.X(BURN * 0.44), Math.min(g.Y(Math.min(r.ve, VR) * 0.82), g.Y(Math.min(r.ve, VR) * 0.44) - 32), C('acceleration'), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    topline(ctx, 'After ' + fmt(tau, 2) + ' s the gas has pushed the rocket forward with ' + fmt(Fk.v, 1) + ' kN, and its ' + fmt(mm.v, 0) + ' kg has reached ' + fmt(v, 1) + ' m/s' + (past ? ', ' + fmt(s, 0) + ' m from where it started and past the 80 m drawn here' : ''));
    readout(d.readout, `\\ka = \\frac{\\kF}{\\km} = \\frac{${fmt(Fk.v * 1000, 0)}\\ \\text{N}}{${fmt(mm.v, 0)}\\ \\text{kg}} = ${fmt(r.a, 2)}\\ \\text{m/s}^2`,
      'The rocket has nothing to push on but its own exhaust gas, and that is enough: it exerts a large backward force on the gas, and by Newton’s third law the gas exerts an equal forward force on the rocket, which is its thrust.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => BURN / 4.5), draw });
})();

};
