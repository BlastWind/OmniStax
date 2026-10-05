/* Figures for section 10.5 Angular Momentum and Its Conservation. Boots against the section's text article.
   Angular momentum has a clock in it: a torque acts for a time, a leg swings
   through an angle, a skater spins, a cloud contracts. Every figure here
   registers a cycle and carries the app's transport; the skater's spin has
   no end and so no scrubber. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') ? String(Math.round(Number(s))) : s); };
/* the turning a torque or a spin produces, drawn as an arc about (cx, cy) with an
   arrowhead at the end the turn runs towards; `mid` is the canvas angle the arc is
   centred on and `span` the half-width of the arc in radians */
function turnArc(ctx, cx, cy, R, ccw, color, mid, span = 0.78, w = 5) {
  const a0 = mid - span, a1 = mid + span;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w;
  ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke(); ctx.restore();
  const a = ccw ? a0 : a1, t = ccw ? a - Math.PI / 2 : a + Math.PI / 2;
  const hx = cx + R * Math.cos(a), hy = cy + R * Math.sin(a);
  arrow(ctx, hx - 30 * Math.cos(t), hy - 30 * Math.sin(t), hx, hy, color, w);
}
/* a horizontal bar on a fixed cap: the track, the fill, the name to its left and the
   value at the end of the fill; a value past the cap fills the whole track and is
   pinned with a hollow marker and its number at the cap */
function bar(ctx, x1, x2, y, h, v, cap, color, name, value) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x1, y - h / 2, x2 - x1, h);
  const f = Math.min(1, Math.max(0, v / cap)), xe = x1 + f * (x2 - x1);
  ctx.fillStyle = color; ctx.fillRect(x1, y - h / 2, xe - x1, h); ctx.restore();
  text(ctx, name, x1 - 16, y, color, { size: 22, weight: 600, align: 'right' });
  const vw = F.measure(ctx, value, { size: 19, weight: 600 });
  if (v > cap) { dot(ctx, x2, y, color, false, 9); text(ctx, value, x2 - 18, y - h / 2 - 16, color, { size: 19, weight: 600, align: 'right' }); }
  else if (xe + 12 + vw > 1385) text(ctx, value, xe, y - h / 2 - 16, color, { size: 19, weight: 600, align: 'right' });
  else text(ctx, value, xe + 12, y, color, { size: 19, weight: 600, align: 'left' });
}

/* ---------- sprites, in ink ---------- */
/* a plate of food seen from above, its centre at (x, y) */
function plate(ctx, x, y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(color, 0.35); ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, TAU); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 10.23: the lazy Susan. A hand pushes at the rim of a tray at
   rest for a set time, the torque's turning arc is drawn while the push
   lasts, and the tray then coasts with the angular momentum it has been
   given; the graph beneath follows L against t, a ramp and then a level.
   Moves: a torque acting for a time is a clock, one push and coast per
   loop, with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-lazy-susan', 900);
  const ts = ctl(d.controls, { label: '\\text{net}\\;\\ktau', cls: 'torque', min: 0.1, max: 1.5, step: 0.01, value: 0.65, unit: 'N·m', dec: 2, onInput: reset, aria: 'the net torque of the push', detents: [{ v: 0.65, label: '0.650' }], snap: false });
  const dts = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.05, max: 0.5, step: 0.01, value: 0.15, unit: 's', dec: 2, onInput: reset, aria: 'how long the push lasts', detents: [{ v: 0.15, label: '0.150' }], snap: false });
  const Is = ctl(d.controls, { label: '\\kI', cls: 'rotational-inertia', min: 0.05, max: 0.5, step: 0.0001, value: 0.1352, unit: 'kg·m²', dec: 3, onInput: reset, aria: 'the moment of inertia of the tray', detents: [{ v: 0.1352, label: '0.135' }], snap: false });   /* 0.1352 is the book's disk, ½(4.00 kg)(0.260 m)² */
  const COAST = 1.2;                                  /* model seconds of coasting after the push */
  const P = () => dts.v + COAST;
  const cy = cycle(P, 1.2);
  function reset() { cy.reset(); }
  /* the push takes 2.5 real seconds whatever its length, and the coast 2.5 more */
  const rate = () => (cy.now() < dts.v ? dts.v / 2.5 : COAST / 2.5);
  const CX = 560, CY = 340, R = 145;                  /* the tray from above */
  const TMAX = 2.0, LMAX = 0.4;                       /* the graph's fixed axes: 0 to 2.0 s, 0 to 0.40 kg·m²/s */
  function draw() {
    const { ctx } = begin(d.c);
    const tau = ts.v, dt = dts.v, I = Is.v, t = Math.min(cy.now(), P());
    const pushing = t < dt - 1e-9, L = tau * Math.min(t, dt), Lf = tau * dt, w = L / I, wf = Lf / I;
    const th = pushing ? 0.5 * (tau / I) * t * t : 0.5 * (tau / I) * dt * dt + wf * (t - dt);   /* the angle turned, counterclockwise */
    const tc = C('torque'), Lc = C('angular-momentum'), wc = C('angular-rate'), timec = C('time');
    /* the tray and what sits on it, turned through θ */
    const lsc = F.ref('lazy-susan'), pc = F.ref('person');
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = lsc; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(lsc, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, R * 0.62, 0, TAU); ctx.stroke(); ctx.restore();
    [[0.62, 0, 46], [0.62, 2.1, 38], [0.62, 4.2, 42], [0.2, 3.3, 22]].forEach(([k, a, r]) => plate(ctx, CX + R * k * Math.cos(a - th), CY + R * k * Math.sin(a - th), r, PAL.ink));
    line(ctx, CX + R * 0.93 * Math.cos(-th), CY + R * 0.93 * Math.sin(-th), CX + R * Math.cos(-th), CY + R * Math.sin(-th), lsc, 4);   /* a mark on the rim to follow */
    dot(ctx, CX, CY, lsc, true, 6);
    text(ctx, 'the lazy Susan, seen from above', CX - 10, CY + R + 36, lsc, { size: 19, align: 'right' });   /* left of where the torque arc ends */
    /* the library's hand at the right of the rim, seen from above with its fingers over the tray, pushing upward on the
       canvas, which turns the tray counterclockwise; once the push is over it has drawn back from the rim */
    const open = pushing ? 0 : 1, hx = CX + R + 80 + open * 70, hy = CY + 40;
    F.hand(ctx, hx, hy, { aim: [-1, 0], view: 'back', curl: 0.1, thumb: 'along', s: 1, color: pc });
    text(ctx, 'the hand', hx + 14, hy + 50, pc, { size: 19, align: 'left' });
    if (pushing) {
      turnArc(ctx, CX, CY, R + 50, true, tc, Math.PI / 4 + 0.15, 0.5);
      text(ctx, 'net τ = ' + fmt(tau, 3) + ' N·m', CX + (R + 50) * 0.5 + 30, CY + (R + 50) * 0.87 + 30, tc, { size: 22, weight: 600, align: 'left' });
    }
    /* the spin the tray has, as an arc at the top and its rate */
    if (w > 1e-6) {
      turnArc(ctx, CX, CY, R + 50, true, wc, -Math.PI / 2, 0.45, 4);
      text(ctx, 'ω = ' + fmt(w, 3) + ' rad/s', CX, CY - R - 82, wc, { size: 22, weight: 600, align: 'center' });
    }
    text(ctx, 'L = ' + sig3(L) + ' kg·m²/s', CX - R - 30, CY - 20, Lc, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'I = ' + fmt(I, 3) + ' kg·m²', CX - R - 30, CY + 16, C('rotational-inertia'), { size: 20, weight: 600, align: 'right' });
    /* the graph: L against t, a ramp of slope net τ and then a level; axes fixed */
    const box = { l: 200, r: 1240, t: 600, b: 810 };
    const g = axes(ctx, box, [0, TMAX], [0, LMAX], { xl: 't (s)', xc: timec, yl: 'L (kg·m²/s)', yc: Lc, nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 2) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 2, box.r - box.l, box.b - box.t + 2); ctx.clip();
    line(ctx, g.X(0), g.Y(0), g.X(dt), g.Y(Lf), alpha(Lc, 0.35), 3, [8, 8]);
    line(ctx, g.X(dt), g.Y(Lf), g.X(P()), g.Y(Lf), alpha(Lc, 0.35), 3, [8, 8]);
    line(ctx, g.X(0), g.Y(0), g.X(Math.min(t, dt)), g.Y(L), Lc, 5);
    if (t > dt) line(ctx, g.X(dt), g.Y(Lf), g.X(t), g.Y(Lf), Lc, 5);
    ctx.restore();
    line(ctx, g.X(dt), box.b, g.X(dt), box.t, timec, 2, [4, 8]);
    text(ctx, 'Δt = ' + fmt(dt, 3) + ' s', g.X(dt) + 10, box.t + 16, timec, { size: 19, weight: 600 });
    if (Lf < 0.68 * LMAX) text(ctx, 'slope = net τ', g.X(dt) + 14, g.Y(Lf) - 26, tc, { size: 19, weight: 600, align: 'left' });   /* just past the top of the ramp */
    else text(ctx, 'slope = net τ', g.X(dt) + 175, box.t + 16, tc, { size: 19, weight: 600, align: 'left' });                        /* the ramp reaches the top: to the right of the Δt label */
    pinned(ctx, box, g.X, g.Y, t, L, Lc, 'L = ' + sig3(L));
    topline(ctx, t < 1e-9 ? 'The tray is at rest, and the hand is about to push with a net torque of ' + fmt(tau, 3) + ' N·m for ' + fmt(dt, 3) + ' s.'
      : pushing ? 'The push is ' + fmt(t, 3) + ' s in, and the angular momentum of the tray has grown to ' + sig3(L) + ' kg·m²/s at ' + fmt(tau, 3) + ' kg·m²/s every second.'
      : 'After ' + fmt(dt, 3) + ' s the push is over and the tray carries ' + sig3(Lf) + ' kg·m²/s of angular momentum, turning at ' + fmt(wf, 3) + ' rad/s.');
    readout(d.readout, `\\kdLang = (\\text{net}\\;\\ktau)\\kdt = (${fmt(tau, 3)}\\ \\text{N}\\cdot\\text{m})(${fmt(dt, 3)}\\ \\text{s}) = ${sig3(Lf)}\\ \\text{kg}\\cdot\\text{m}^2\\text{/s}`,
      `The tray then turns at $\\kw = \\kL/\\kI = ${fmt(wf, 3)}\\ \\text{rad/s}$.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, rate), draw });
})();

/* =====================================================================
   FIGURE 10.24: the kick. A person sits on a bench with the lower leg
   hanging from the knee, and a constant torque about the knee swings it
   forward through the set angle; the graph beside follows its rotational
   kinetic energy against the angle turned. Moves: a leg swinging under a
   torque is a clock, one kick per loop, with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-kick', 680);
  const ts = ctl(d.controls, { label: '\\text{net}\\;\\ktau', cls: 'torque', min: 10, max: 80, step: 0.5, value: 44, unit: 'N·m', dec: 1, onInput: reset, aria: 'the net torque about the knee', detents: [{ v: 44, label: '44.0' }], snap: false });
  const Is = ctl(d.controls, { label: '\\kI', cls: 'rotational-inertia', min: 0.5, max: 3, step: 0.01, value: 1.25, unit: 'kg·m²', dec: 2, onInput: reset, aria: 'the moment of inertia of the lower leg', detents: [{ v: 1.25, label: '1.25' }], snap: false });
  const ths = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 10, max: 90, step: 0.1, value: 57.3, unit: '°', dec: 1, onInput: reset, aria: 'the angle the leg swings through', detents: [{ v: 57.3, label: '1.00 rad' }], snap: false });
  const alphaOf = () => ts.v / Is.v;
  const T = () => Math.sqrt((2 * ths.v * RAD) / alphaOf());
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  /* the seated body at scale SC: the knee at (KX, KY), the thigh level behind it, the shank SH long */
  const SC = 3.5, KX = 380, KY = 380, SH = 38 * SC, OX = KX - 28 * SC, OY = KY + 46 * SC, FLOOR = 624;
  let shin = { x: KX, y: KY + 0.6 * SH };             /* the middle of the lower leg, for its hover name */
  const KEMAX = 140;                                  /* the graph's fixed axes: 0 to 90° and 0 to 140 J; the slider extremes reach 126 J */
  function draw() {
    const { ctx, H } = begin(d.c);
    const tau = ts.v, I = Is.v, thmax = ths.v * RAD, al = alphaOf(), t = Math.min(cy.now(), T()), done = t >= T() - 1e-9;
    const th = Math.min(thmax, 0.5 * al * t * t), w = al * t, KE = 0.5 * I * w * w;
    const tc = C('torque'), wc = C('angular-rate'), ec = C('energy'), ac = C('angle'), lgc = F.ref('leg');
    const lines = topline(ctx, t < 1e-9 ? 'The leg hangs at rest from the knee, and a net torque of ' + fmt(tau, 1) + ' N·m is about to swing it through ' + fmt(ths.v, 1) + '°.'
      : done ? 'After ' + fmt(T(), 3) + ' s the leg has swung through ' + fmt(ths.v, 1) + '° and turns at ' + fmt(w, 2) + ' rad/s, carrying ' + fmt(KE, 1) + ' J of rotational kinetic energy.'
      : 'After ' + fmt(t, 3) + ' s the leg has swung through ' + fmt(th / RAD, 1) + '° and turns at ' + fmt(w, 2) + ' rad/s, carrying ' + fmt(KE, 1) + ' J.');
    const lab = F.labeller(ctx, H, { headline: lines });
    /* the floor and the bench, the seat ending short of the knee */
    line(ctx, 60, FLOOR, 700, FLOOR, PAL.muted, 3);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(120, KY + 8, 190, 16); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, 140, KY + 24, 140, FLOOR, PAL.muted, 3); line(ctx, 290, KY + 24, 290, FLOOR, PAL.muted, 3);
    /* the library's seated body: the far leg hangs, the near foot rides the arc of the shank about the knee */
    const sx = Math.sin(th), sy = Math.cos(th);
    shin = { x: KX + 0.6 * SH * sx, y: KY + 0.6 * SH * sy };
    const pose = { x: OX, y: OY, s: SC, pose: 'sit', hip: { x: -10, y: -46 }, feet: [{ x: 28 + 38 * sx, y: -46 + 38 * sy }, { x: 28, y: -8 }], kneeSide: -1 };
    F.silhouette(ctx, { ...pose, color: PAL.ink });
    /* the lower leg in its own colour: the body again, clipped to a band along the near shank */
    ctx.save(); ctx.translate(KX, KY); ctx.rotate(-th); ctx.beginPath(); ctx.rect(-16, 12, 32, SH + 10); ctx.restore();
    ctx.save(); ctx.clip(); F.silhouette(ctx, { ...pose, color: lgc }); ctx.restore();
    dot(ctx, KX, KY, PAL.panel, true, 8); dot(ctx, KX, KY, PAL.ink, false, 8);
    /* the torque about the knee, above it and clear of the swing, and the spin the leg has, just beyond the foot's path */
    const TA = -Math.PI / 2, TR = 54, RA = SH + 30, span = 0.16 + Math.min(0.2, 0.012 * w), am = Math.PI / 2 - th - span - 0.04;
    turnArc(ctx, KX, KY, TR, true, tc, TA, 0.45, 4);
    if (w > 0.05) turnArc(ctx, KX, KY, RA, true, wc, am, span, 5);
    const arcBlock = (R, a0, a1) => { for (let i = 0; i <= 6; i++) { const a = a0 + ((a1 - a0) * i) / 6; lab.block(KX + R * Math.cos(a) - 12, KY + R * Math.sin(a) - 12, KX + R * Math.cos(a) + 12, KY + R * Math.sin(a) + 12); } };
    arcBlock(TR, TA - 0.45, TA + 0.45);
    if (w > 0.05) arcBlock(RA, am - span, am + span);
    for (let k = 0.15; k <= 1.01; k += 0.17) { lab.block(KX + SH * k * sx - 14, KY + SH * k * sy - 14, KX + SH * k * sx + 14, KY + SH * k * sy + 14); lab.block(KX - 14, KY + SH * k - 14, KX + 14, KY + SH * k + 14); }
    lab.block(OX - 70, KY - 240, OX + 40, KY + 30);                                       /* the head, the back and the arm */
    if (th > 0.03) F.angleArc(ctx, { x: KX, y: KY }, 86, -Math.PI / 2, -Math.PI / 2 + th, 'θ = ' + fmt(th / RAD, 1) + '°', lab, ac);
    lab.add('net τ = ' + fmt(tau, 1) + ' N·m', KX, KY - TR, 0.35, -0.94, tc, 22, 100);
    if (w > 0.05) lab.add('ω = ' + fmt(w, 2) + ' rad/s', KX + RA * Math.cos(am), KY + RA * Math.sin(am), Math.cos(am), Math.sin(am), wc, 21, 22);
    /* the graph beside: KE_rot against θ, a straight line of slope net τ */
    const box = { l: 780, r: 1320, t: 150, b: 500 };
    const g = axes(ctx, box, [0, 90], [0, KEMAX], { xl: 'θ (degrees)', xc: ac, yl: 'KE_rot (J)', yc: ec, nx: 3, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const end = { x1: g.X(0), y1: g.Y(0), x2: g.X(ths.v), y2: g.Y(tau * thmax) };
    line(ctx, end.x1, end.y1, end.x2, end.y2, alpha(ec, 0.4), 3, [8, 8]);
    line(ctx, g.X(0), g.Y(0), g.X(th / RAD), g.Y(KE), ec, 5);
    line(ctx, g.X(th / RAD), box.b, g.X(th / RAD), g.Y(KE), alpha(PAL.ink, 0.4), 2, [4, 8]);
    const pt = pinned(ctx, box, g.X, g.Y, th / RAD, KE, ec);
    lab.block(pt.x - 12, pt.y - 12, pt.x + 12, pt.y + 12);
    lab.block(box.l - 70, box.b + 6, box.r + 10, box.b + 80);                            /* the tick labels and the axis title */
    lab.block(box.l - 64, box.t - 12, box.l - 4, box.b + 12);                             /* the value ticks */
    const along = Array.from({ length: 9 }, (_, i) => { const x = end.x1 + ((end.x2 - end.x1) * i) / 8, y = end.y1 + ((end.y2 - end.y1) * i) / 8; return { l: x - 20, r: x + 20, t: y - 20, b: y + 20 }; });
    along.forEach((b) => lab.block(b.l + 8, b.t + 8, b.r - 8, b.b - 8));
    lab.place(F.note(ctx, box, 'slope = net τ', [...along, { l: pt.x - 30, r: pt.x + 200, t: pt.y - 70, b: pt.y + 12 }]));
    lab.add('KE_rot = ' + fmt(KE, 1) + ' J', pt.x, pt.y, 0.35, -0.94, ec, 21, 22);
    lab.flush();
    readout(d.readout, `\\kKErot = \\tfrac{1}{2}\\kI\\kw^2 = \\tfrac{1}{2}(${fmt(I, 2)}\\ \\text{kg}\\cdot\\text{m}^2)(${fmt(w, 2)}\\ \\text{rad/s})^2 = ${fmt(KE, 1)}\\ \\text{J}`,
      `The torque's work, $(\\text{net}\\;\\ktau)\\ktheta = ${fmt(tau * th, 1)}\\ \\text{J}$, is where the leg's kinetic energy comes from.`);
  }
  F.hover(d.stage, () => [{ x: KX, y: KY, r: 22, name: 'the knee' }, { x: shin.x, y: shin.y, r: 50, name: 'the lower leg' }, { x: OX - 2 * SC, y: OY - 112 * SC, r: 46, name: 'the person kicking' }, { x: 215, y: KY + 16, r: 60, name: 'the bench' }]);
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 4.5), draw });
})();

/* =====================================================================
   SIM: the spinning skater. She turns at the angular velocity conservation
   gives her, her arms foreshortening as she comes round, and four bars on
   fixed caps show I, ω, L and KE_rot; L does not move. Moves: a spin has a
   clock but no end, so the cycle is endless and there is no scrubber.
===================================================================== */
(function () {
  const d = sim('sim-skater', 760);
  const IOUT = 2.34, IIN = 0.363;
  const Is = ctl(d.controls, { label: '\\kI', cls: 'rotational-inertia', min: IIN, max: IOUT, step: 0.001, value: IOUT, unit: 'kg·m²', dec: 3, aria: 'her moment of inertia, arms out to arms in', specials: [{ at: IIN, label: 'arms in' }, { at: IOUT, label: 'arms out' }] });
  const w0s = ctl(d.controls, { label: '\\kwo', cls: 'angular-rate', min: 0.2, max: 1.5, step: 0.01, value: 0.8, unit: 'rev/s', dec: 3, aria: 'her angular velocity with her arms out', detents: [{ v: 0.8, label: '0.800' }], snap: false });
  const cy = cycle(() => Infinity, 0);
  let phi = 0;                                        /* how far round she has turned */
  const L = () => IOUT * w0s.v * TAU;                 /* kg·m²/s, fixed by her arms-out state */
  const wNow = () => L() / Is.v / TAU;                /* rev/s at the current moment of inertia */
  const SX = 380, ICE = 640, SC = 2.7;                /* where she stands, and the scale of the library's body */
  function draw() {
    const { ctx } = begin(d.c);
    const I = Is.v, w0 = w0s.v, w = wNow(), Lv = L(), KE0 = 0.5 * IOUT * (w0 * TAU) ** 2, KE = 0.5 * I * (w * TAU) ** 2;
    const s = (I - IIN) / (IOUT - IIN);               /* 0 arms in, 1 arms out */
    const k = Math.max(0.28, Math.abs(Math.cos(phi)));/* the body seen edge-on as she comes round */
    const ic = C('rotational-inertia'), wc = C('angular-rate'), Lc = C('angular-momentum'), ec = C('energy'), skc = F.ref('skater');
    /* the hands, from the chest (arms in) to the full reach at shoulder height (arms out), in the body's frame */
    const hand = { x: 10 + 50 * s, y: -94 - 24 * s }, reach = hand.x * SC, handY = ICE + hand.y * SC, headY = ICE - 140 * SC;
    line(ctx, 120, ICE, 660, ICE, PAL.muted, 3);
    text(ctx, 'the ice', 120, ICE + 26, PAL.muted, { size: 19, align: 'left' });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([6, 8]);
    ctx.beginPath(); ctx.ellipse(SX, handY, reach, reach * 0.16, 0, 0, TAU); ctx.stroke(); ctx.restore();
    /* the library's body seen from the front, on one skate with the free leg raised, its width foreshortened by k.
       ponytail: the silhouette bends both elbows to one side, so the body is drawn twice, mirrored, each with
       both hands on its own side (arms crossed when in, elbows low on the way out); the legs are given mirrored too, so the two drawings coincide below the arms */
    const body = (face) => ({ x: 0, y: ICE, s: SC, face, pose: 'stand', front: true, color: skc, hip: { x: 0, y: -72 }, shoulder: { x: 0, y: -118 }, head: { x: 0, y: -140 },
      feet: [{ x: 2 * face, y: -4 }, { x: -4 * face, y: -30 }], kneeSide: [face, face], hands: [hand, hand], elbowSide: 1 });
    ctx.save(); ctx.translate(SX, 0); ctx.scale(k, 1);
    F.silhouette(ctx, body(1)); F.silhouette(ctx, body(-1));
    line(ctx, -24, ICE - 3, 30, ICE - 3, skc, 5);     /* the skate's blade */
    ctx.restore();
    text(ctx, 'the skater', SX, ICE + 26, skc, { size: 19, align: 'center' });
    /* her spin, as an arc over her head */
    turnArc(ctx, SX, headY, 80, true, wc, -Math.PI / 2, 0.7, 5);
    text(ctx, 'ω = ' + fmt(w, 3) + ' rev/s', SX, headY - 118, wc, { size: 24, weight: 600, align: 'center' });
    /* the four bars, on fixed caps */
    const bx1 = 900, bx2 = 1330;
    bar(ctx, bx1, bx2, 240, 40, I, 2.5, ic, 'I', fmt(I, 3) + ' kg·m²');
    bar(ctx, bx1, bx2, 350, 40, w, 10, wc, 'ω', fmt(w, 2) + ' rev/s');
    bar(ctx, bx1, bx2, 460, 40, Lv, 25, Lc, 'L = Iω', fmt(Lv, 1) + ' kg·m²/s');
    bar(ctx, bx1, bx2, 570, 40, KE, 250, ec, 'KE_rot', fmt(KE, 1) + ' J');
    text(ctx, 'the angular momentum does not move', bx1, 500, Lc, { size: 18, align: 'left' });
    topline(ctx, s > 0.98 ? 'With her arms out she spins at ' + fmt(w0, 3) + ' rev/s, and the same angular momentum would spin her at ' + fmt(Lv / IIN / TAU, 2) + ' rev/s with her arms pulled in to ' + fmt(IIN, 3) + ' kg·m².'
      : 'With her moment of inertia down to ' + fmt(I, 3) + ' kg·m², ' + fmt(I / IOUT * 100, 0) + '% of its value with her arms out, she spins at ' + fmt(w, 2) + ' rev/s, ' + fmt(IOUT / I, 2) + ' times as fast.');
    readout(d.readout, `\\kI\\kw = (${fmt(IOUT, 2)}\\ \\text{kg}\\cdot\\text{m}^2)(${fmt(w0, 3)}\\ \\text{rev/s}) = \\kIprime\\kwprime = (${fmt(I, 3)}\\ \\text{kg}\\cdot\\text{m}^2)(${fmt(w, 3)}\\ \\text{rev/s})`,
      s > 0.98 ? '' : `$\\kKErot$ rises from ${fmt(KE0, 1)} J to ${fmt(KE, 1)} J; the difference is the work she does pulling her arms in.`);
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); phi += wNow() * TAU * dt; }, draw });
})();

/* =====================================================================
   FIGURE 10.26: the cloud that became the Solar System. A slowly turning
   disk of gas and dust contracts to a set fraction of its radius while
   every particle keeps its angular momentum, so the whole cloud spins up
   as the square of the contraction; a central body forms. Moves: a
   contraction is a clock, one per loop, with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-cloud', 660);
  const ks = ctl(d.controls, { label: "R'/R", cls: '', min: 0.25, max: 0.9, step: 0.01, value: 0.5, unit: 'of its radius', dec: 2, onInput: reset, aria: 'how far the cloud contracts', detents: [{ v: 0.5, label: 'half' }], snap: false });
  const TM = 5;                                       /* model seconds for the contraction */
  const cy = cycle(() => TM, 1.6);
  function reset() { cy.reset(); }
  const CX = 470, CY = 350, R0 = 200, W0 = 0.35;      /* the cloud's first radius on the canvas and its first spin, rad/s */
  /* a fixed scatter of particles: a radius fraction and a starting angle each */
  /* a fixed, even scatter of particles from a small seeded generator, a radius fraction and a starting angle each */
  let seed = 0x9e3779b9;
  const rnd = () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const N = 170, seeds = Array.from({ length: N }, () => ({ r: 0.12 + 0.88 * Math.sqrt(rnd()), a: rnd() * TAU }));
  function draw() {
    const { ctx } = begin(d.c);
    const k = ks.v, t = Math.min(cy.now(), TM), f = 1 - (1 - k) * (t / TM);            /* the radius as a fraction of its start */
    const Phi = (W0 * TM) / (1 - k) * (1 / f - 1);                                      /* the angle the cloud has turned, ∫ω dt with ω = ω₀/f² */
    const ratio = 1 / (f * f), done = t >= TM - 1e-9;
    const ic = C('rotational-inertia'), wc = C('angular-rate'), Lc = C('angular-momentum');
    /* the cloud's first edge and its edge now */
    const clc = F.ref('cloud');
    ctx.save(); ctx.strokeStyle = alpha(clc, 0.3); ctx.lineWidth = 2; ctx.setLineDash([6, 8]);
    ctx.beginPath(); ctx.arc(CX, CY, R0, 0, TAU); ctx.stroke();
    ctx.setLineDash([]); ctx.strokeStyle = alpha(clc, 0.5); ctx.beginPath(); ctx.arc(CX, CY, R0 * f, 0, TAU); ctx.stroke(); ctx.restore();
    text(ctx, 'R, the cloud at the start', CX + R0 * 0.72, CY - R0 * 0.72 - 18, PAL.muted, { size: 18, align: 'left' });
    /* the particles, in the cloud's colour, each at its own radius and angle */
    ctx.save(); ctx.fillStyle = alpha(clc, 0.75);
    seeds.forEach((p) => { const r = p.r * R0 * f, a = p.a - Phi; ctx.beginPath(); ctx.arc(CX + r * Math.cos(a), CY + r * Math.sin(a), 3.2, 0, TAU); ctx.fill(); });
    ctx.restore();
    /* the body forming at the centre */
    const sun = 6 + 20 * (1 - f) / (1 - k);
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(CX, CY, sun, 0, TAU); ctx.fill(); ctx.restore();
    text(ctx, 'gas and dust', CX - R0 - 20, CY + 30, clc, { size: 19, align: 'right' });
    text(ctx, t > 0.3 * TM ? 'the Sun forming' : 'the center', CX + sun + 14, CY, PAL.muted, { size: 18, align: 'left', bg: alpha(PAL.panel, 0.85) });
    text(ctx, "R' = " + fmt(f, 2) + ' R', CX + R0 * f * 0.72 + 12, CY + R0 * f * 0.72 + 22, PAL.ink, { size: 20, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
    /* the spin, as an arc at the rim */
    turnArc(ctx, CX, CY, R0 * f + 34, true, wc, -Math.PI / 2, 0.42 + 0.3 * Math.min(1, ratio / 8), 5);
    text(ctx, "ω' = " + fmt(ratio, 2) + ' ω', CX, CY - R0 * f - 66, wc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the three bars against their starting values */
    const bx1 = 960, bx2 = 1330;
    bar(ctx, bx1, bx2, 240, 40, f * f, 1, ic, "I'", fmt(f * f, f * f < 0.1 ? 3 : 2) + ' I');
    bar(ctx, bx1, bx2, 360, 40, ratio, 16, wc, "ω'", fmt(ratio, 2) + ' ω');
    bar(ctx, bx1, bx2, 480, 40, 1, 1, Lc, "L'", 'L');
    text(ctx, 'the angular momentum does not move', bx1, 522, Lc, { size: 18, align: 'left' });
    text(ctx, 'each against its value at the start', bx1, 190, PAL.muted, { size: 18, align: 'left' });
    topline(ctx, t < 1e-9 ? 'The cloud starts wide and slowly turning with angular momentum L, and nothing outside it exerts a torque.'
      : done ? 'Contracted to ' + fmt(k, 2) + ' of its radius the cloud has ' + fmt(k * k, k * k < 0.1 ? 3 : 2) + ' of its moment of inertia and spins ' + fmt(ratio, 2) + ' times as fast.'
      : 'Drawn in to ' + fmt(f, 2) + ' of its radius, the cloud has ' + fmt(f * f, f * f < 0.1 ? 3 : 2) + ' of its moment of inertia and spins ' + fmt(ratio, 2) + ' times as fast.');
    readout(d.readout, `\\kIprime\\kwprime = \\kI\\kw \\quad\\text{so}\\quad \\frac{\\kwprime}{\\kw} = \\frac{\\kI}{\\kIprime} = \\left(\\frac{R}{R'}\\right)^2 = \\left(\\frac{1}{${fmt(f, 2)}}\\right)^2 = ${fmt(ratio, 2)}`,
      `A uniform disk has $\\kI = \\tfrac{1}{2}MR^2$, so a cloud that keeps its mass has ${fmt(f * f, f * f < 0.1 ? 3 : 2)} of its moment of inertia.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TM / 5), draw });
})();
};
