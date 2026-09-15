/* Figures for section 7.5 Nonconservative Forces. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, strip, axes, nice, spring, fixed, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const num = (x, d) => commas(fmt(x, d));

/* a vertical energy bar: an outline of the full amount, filled to `val` */
function ebar(ctx, x, y0, w, full, val, cap, label, valText) {
  const h = cap * (full > 0 ? Math.max(0, Math.min(1, val / full)) : 0);
  ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.7); ctx.fillRect(x, y0 - h, w, h); ctx.restore();
  ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; ctx.strokeRect(x, y0 - cap, w, cap); ctx.restore();
  text(ctx, label, x + w / 2, y0 + 24, C('energy'), { size: 18, weight: 600, align: 'center' });
  text(ctx, valText, x + w / 2, y0 + 48, C('energy'), { size: 17, align: 'center' });
}
/* one segment of a stacked energy bar, drawn upward from y0; returns the top it reached */
function segment(ctx, x, y0, w, h, shade, label, labelColor) {
  if (h <= 0.5) return y0;
  ctx.save(); ctx.fillStyle = shade; ctx.fillRect(x, y0 - h, w, h); ctx.restore();
  if (h > 26 && label) text(ctx, label, x + w + 12, y0 - h / 2, labelColor, { size: 17, weight: 600 });
  return y0 - h;
}
/* one row of a bar chart: its name above the bar, and the bar itself either way from a common zero */
function rowbar(ctx, zero, y, px, color, label, valText) {
  text(ctx, label, 712, y, PAL.muted, { size: 18 });
  ctx.save(); ctx.fillStyle = alpha(color, 0.65); ctx.fillRect(Math.min(zero, zero + px), y + 12, Math.abs(px), 28); ctx.restore();
  text(ctx, valText, zero + px + (px < 0 ? -14 : 14), y + 26, color, { size: 18, weight: 600, align: px < 0 ? 'right' : 'left' });
}

/* ---------- sprites, in ink, each under twelve path commands ---------- */
/* a happy face of radius R centred on (cx, cy) */
function happyFace(ctx, cx, cy, R, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx - R * 0.36, cy - R * 0.28, R * 0.11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + R * 0.36, cy - R * 0.28, R * 0.11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(cx, cy + R * 0.06, R * 0.58, 0.22 * Math.PI, 0.78 * Math.PI); ctx.stroke(); ctx.restore();
}
/* a rock of about radius r, centred on (x, y) */
function rock(ctx, x, y, r, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x - r, y + 0.1 * r); ctx.lineTo(x - 0.6 * r, y - 0.85 * r); ctx.lineTo(x + 0.35 * r, y - r);
  ctx.lineTo(x + r, y - 0.15 * r); ctx.lineTo(x + 0.65 * r, y + 0.85 * r); ctx.lineTo(x - 0.45 * r, y + r);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a baseball player sliding feet first along the ground, his hip over (x, y) and the ground under him
   turned through `rot`: a silhouette laid nearly flat, legs out ahead, one arm trailing on the ground
   and the other thrown up, so the slide reads without its label */
function slidingPlayer(ctx, x, y, rot) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
  F.silhouette(ctx, { x: 0, y: 0, s: 0.9, hip: { x: 0, y: -18 }, shoulder: { x: -44, y: -44 }, head: { x: -58, y: -64 },
    feet: [{ x: 64, y: -6 }, { x: 56, y: -16 }], hands: [{ x: -88, y: -6 }, { x: -34, y: -84 }], kneeSide: 1, elbowSide: -1 });
  ctx.restore();
}
/* a foam cup lying on its side on the table, its open mouth at (x, y) facing the ruler: the mouth is
   the wide end with a rolled lip, and the cup narrows to its base on the right */
function foamCup(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 66); ctx.lineTo(x + 84, y - 52); ctx.lineTo(x + 84, y); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x + 4, y - 2); ctx.lineTo(x + 4, y - 64); ctx.stroke();
  ctx.lineWidth = 2; ctx.strokeStyle = PAL.muted; ctx.beginPath(); ctx.moveTo(x + 72, y - 50); ctx.lineTo(x + 72, y - 2); ctx.stroke();
  ctx.restore();
}
/* a skier on her skis, the base of the skis at (x, y): crouched over the skis with a pole in each hand */
function skierSprite(ctx, x, y) {
  ctx.save(); ctx.translate(x, y);
  line(ctx, -50, 0, 50, 0, PAL.ink, 5);
  const hands = [{ x: 34, y: -60 }, { x: 38, y: -54 }];
  hands.forEach((h) => line(ctx, h.x * 0.85, h.y * 0.85, h.x * 0.85 - 36, -2, PAL.muted, 3));
  F.silhouette(ctx, { x: 0, y: -2, s: 0.85, hip: { x: -8, y: -58 }, shoulder: { x: 18, y: -98 }, head: { x: 30, y: -116 }, feet: [{ x: 10, y: 0 }, { x: -10, y: 0 }], hands });
  ctx.restore();
}

/* =====================================================================
   FIGURE 7.13: the happy face erased along two routes between the same
   two points. The work done against friction is the friction force
   times the length of the path, so the route that wanders rubs out
   more of the face and costs more work. Nothing here has a time in it:
   the picture answers its two sliders, so it registers no cycle and
   takes no transport (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-erasure', 640);
  const ff = ctl(d.controls, { label: '\\kff', cls: 'force', min: 2, max: 20, step: 0.5, value: 8, unit: 'N', dec: 1, aria: 'force of friction on the eraser' });
  const bow = ctl(d.controls, { label: '\\text{detour}', cls: '', min: 0, max: 14, step: 0.5, value: 8, unit: 'cm', dec: 1, aria: 'how far the eraser wanders from the straight line' });
  const CY = 330, R = 115, DX = 185, DY = 125, DIRECT = 0.40;         /* the straight route is 0.40 m of board */
  const CHORD = Math.hypot(2 * DX, 2 * DY), PPM = CHORD / DIRECT;     /* logical units to the metre */
  /* the eraser's route across one face: the straight line, or a wandering one of the chosen depth */
  function route(cx, amp) {
    const A = { x: cx - DX, y: CY + DY }, B = { x: cx + DX, y: CY - DY };
    const ux = (B.x - A.x) / CHORD, uy = (B.y - A.y) / CHORD, pts = [];
    for (let i = 0; i <= 72; i++) {
      const t = i / 72, w = amp * Math.sin(TAU * t);
      pts.push({ x: A.x + (B.x - A.x) * t - uy * w, y: A.y + (B.y - A.y) * t + ux * w });
    }
    let L = 0;
    for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    return { A, B, pts, px: L };
  }
  const trace = (ctx, r) => r.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  function panel(ctx, cx, r, label) {
    happyFace(ctx, cx, CY, R, PAL.ink);
    ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ctx.lineWidth = 46; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,1)'; ctx.beginPath(); trace(ctx, r); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = C('position'); ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); trace(ctx, r); ctx.stroke(); ctx.restore();
    dot(ctx, r.A.x, r.A.y, C('position'), false, 11);
    dot(ctx, r.B.x, r.B.y, C('position'), true, 11);
    text(ctx, 'A', r.A.x - 22, r.A.y + 14, C('position'), { size: 24, weight: 600, align: 'right' });
    text(ctx, 'B', r.B.x + 22, r.B.y - 12, C('position'), { size: 24, weight: 600 });
    text(ctx, label, cx - DX - 14, 112, PAL.ink, { size: 22, weight: 600 });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const amp = (bow.v / 100) * PPM;
    const ra = route(330, 0), rb = route(870, amp);
    /* one fixed cap for both bars, 13.6 J: the hardest rub the friction slider allows, 20 N,
       along the longest route the detour slider allows, 0.68 m. Raising the friction now
       lengthens the bars instead of raising the scale they are drawn against. */
    const La = ra.px / PPM, Lb = rb.px / PPM, Wa = ff.v * La, Wb = ff.v * Lb, Wmax = 20 * 0.68;
    panel(ctx, 330, ra, '(a) straight from A to B');
    panel(ctx, 870, rb, '(b) wandering from A to B');
    line(ctx, 600, 130, 600, 600, PAL.rule, 2);
    text(ctx, 'this path is ' + fmt(La * 100, 0) + ' cm long', 330, 594, C('position'), { size: 18, weight: 600, align: 'center' });
    text(ctx, 'this path is ' + fmt(Lb * 100, 0) + ' cm long', 870, 594, C('position'), { size: 18, weight: 600, align: 'center' });
    ebar(ctx, 1160, 540, 66, Wmax, Wa, 360, 'W in (a)', fmt(Wa, 2) + ' J');
    ebar(ctx, 1290, 540, 66, Wmax, Wb, 360, 'W in (b)', fmt(Wb, 2) + ' J');
    text(ctx, fmt(Wmax, 1) + ' J', 1225, 540 - 378, C('energy'), { size: 16, align: 'center' });
    topline(ctx, bow.v === 0
      ? 'Both erasers take the same route, so each rubs out the same face and each costs ' + fmt(Wa, 2) + ' J.'
      : 'The wandering route is ' + fmt((Lb / La - 1) * 100, 0) + ' percent longer, so it costs ' + fmt(Wb, 2) + ' J against the ' + fmt(Wa, 2) + ' J of the straight one.');
    readout(d.readout, `\\kWfr = \\kff\\kd = (${fmt(ff.v, 1)}\\ \\text{N})(${fmt(Lb, 3)}\\ \\text{m}) = ${fmt(Wb, 2)}\\ \\text{J}`,
      'Both erasers begin at A and finish at B, and the straight route costs ' + fmt(Wa, 2) + ' J while the wandering one costs ' + fmt(Wb, 2) + ' J. The work done depends on the path taken and not only on where the eraser started and finished, which is what makes friction a nonconservative force, and it is why no potential energy can be defined for it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.14: the same rock dropped onto a spring and onto the ground.
   The force in the spring is conservative and hands the energy back, so
   the rock returns to the height it fell from; the ground exerts
   nonconservative forces, and the mechanical energy is gone the moment
   the rock lands. The rock falls, so the figure loops and gets the
   transport.
===================================================================== */
(function () {
  const d = sim('sim-spring-ground', 690);
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0.5, max: 3, step: 0.1, value: 1.5, unit: 'm', dec: 2, onInput: reset, aria: 'height the rock is dropped from' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.5, max: 5, step: 0.1, value: 2, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the rock' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 200, max: 3000, step: 50, value: 900, unit: 'N/m', dec: 0, onInput: reset, aria: 'force constant of the spring' });
  const SC = 75, GROUND = 570, TOP = GROUND - 170;
  const drop = () => Math.sqrt((2 * h.v) / G);
  const energy = () => m.v * G * h.v;
  const squash = () => Math.sqrt((2 * energy()) / k.v);
  const contact = () => Math.PI * Math.sqrt(m.v / k.v);
  const period = () => 2 * drop() + contact();
  const cy = cycle(period, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tf = drop(), tc = contact(), tau = cy.now(), E = energy(), xc = squash();
    let leftUp = 0, comp = 0, rightUp = 0;
    if (tau <= tf) { leftUp = h.v - 0.5 * G * tau * tau; rightUp = leftUp; }
    else if (tau <= tf + tc) comp = xc * Math.sin((Math.PI * (tau - tf)) / tc);
    else { const s = tau - tf - tc; leftUp = Math.max(0, h.v - 0.5 * G * (tf - s) * (tf - s)); }
    const PEs = 0.5 * k.v * comp * comp, PEl = m.v * G * Math.max(0, leftUp), KEl = Math.max(0, E - PEl - PEs);
    const PEr = m.v * G * rightUp, KEr = tau <= tf ? Math.max(0, E - PEr) : 0, lost = Math.max(0, E - PEr - KEr);
    /* the two scenes */
    strip(ctx, 110, 660, GROUND + 16, 30); strip(ctx, 760, 1160, GROUND + 16, 30);
    text(ctx, '(a) dropped onto a spring', 110, 110, PAL.ink, { size: 22, weight: 600 });
    text(ctx, '(b) dropped onto the ground', 760, 110, PAL.ink, { size: 22, weight: 600 });
    const springTop = TOP + comp * SC;
    spring(ctx, 300, GROUND, 300, springTop, 7, 34, PAL.ink, 5);
    line(ctx, 246, springTop, 354, springTop, PAL.ink, 5);
    rock(ctx, 300, springTop - 32 - Math.max(0, leftUp) * SC, 30, PAL.ink);
    rock(ctx, 900, GROUND - 32 - rightUp * SC, 30, PAL.ink);
    line(ctx, 170, TOP - h.v * SC, 430, TOP - h.v * SC, C('position'), 2, [8, 8]);
    line(ctx, 790, GROUND - h.v * SC, 1030, GROUND - h.v * SC, C('position'), 2, [8, 8]);
    vbracket(ctx, 190, TOP, TOP - h.v * SC, C('position'), 'h = ' + fmt(h.v, 2) + ' m', -1);
    vbracket(ctx, 810, GROUND, GROUND - h.v * SC, C('position'), 'h = ' + fmt(h.v, 2) + ' m', -1);
    text(ctx, fmt(m.v, 2) + ' kg', 300, springTop - 82 - Math.max(0, leftUp) * SC, PAL.ink, { size: 18, weight: 600, align: 'center' });
    if (comp > xc * 0.35) text(ctx, 'the spring is pushing back', 380, TOP + 46, PAL.muted, { size: 18, weight: 600 });
    if (tau > tf) text(ctx, 'heat, sound and a dent in the ground', 900, GROUND + 62, PAL.muted, { size: 18, align: 'center' });
    /* the two energy accounts, drawn to one fixed scale: the outline holds 147 J, which is the
       most the sliders can bring down (5 kg dropped 3 m), and the dashed rule across it is what
       this drop brings. A heavier rock now fills more of the outline instead of rescaling it. */
    const EMAX = 5 * G * 3, CAP = 350, BASE = GROUND, sc = CAP / EMAX;
    ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; ctx.strokeRect(600, BASE - CAP, 62, CAP); ctx.strokeRect(1230, BASE - CAP, 62, CAP); ctx.restore();
    [600, 1230].forEach((bxx) => line(ctx, bxx - 8, BASE - E * sc, bxx + 70, BASE - E * sc, C('energy'), 2, [6, 6]));
    text(ctx, fmt(EMAX, 0) + ' J', 631, BASE - CAP - 20, C('energy'), { size: 16, align: 'center' });
    let y = segment(ctx, 600, BASE, 62, PEl * sc, alpha(C('energy'), 0.35), 'PE_g', C('energy'));
    y = segment(ctx, 600, y, 62, KEl * sc, C('energy'), 'KE', C('energy'));
    segment(ctx, 600, y, 62, PEs * sc, alpha(C('energy'), 0.75), 'PE_s', C('energy'));
    let z = segment(ctx, 1230, BASE, 62, PEr * sc, alpha(C('energy'), 0.35), 'PE_g', C('energy'));
    z = segment(ctx, 1230, z, 62, KEr * sc, C('energy'), 'KE', C('energy'));
    segment(ctx, 1230, z, 62, lost * sc, alpha(PAL.muted, 0.4), 'gone', PAL.muted);
    text(ctx, 'the system in (a)', 631, BASE + 56, C('energy'), { size: 18, weight: 600, align: 'center' });
    text(ctx, 'the system in (b)', 1261, BASE + 56, C('energy'), { size: 18, weight: 600, align: 'center' });
    text(ctx, fmt(PEl + KEl + PEs, 1) + ' J of mechanical energy', 631, BASE + 80, C('energy'), { size: 17, align: 'center' });
    text(ctx, fmt(PEr + KEr, 1) + ' J of mechanical energy', 1261, BASE + 80, C('energy'), { size: 17, align: 'center' });
    topline(ctx, tau <= tf
      ? 'The rock falls with ' + fmt(E, 1) + ' J on both sides, and both systems still hold all of it.'
      : tau <= tf + tc
        ? 'The spring holds ' + fmt(PEs, 1) + ' J of the ' + fmt(E, 1) + ' J and will give it back, while on the right all ' + fmt(E, 1) + ' J has gone.'
        : 'The spring has sent the rock back up to ' + fmt(leftUp, 2) + ' m of the ' + fmt(h.v, 2) + ' m it fell, and the other rock has not moved.');
    readout(d.readout, `\\kPEg = m\\kg\\kh = (${fmt(m.v, 2)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(h.v, 2)}\\ \\text{m}) = ${fmt(E, 1)}\\ \\text{J}`,
      'The force in the spring is conservative, so the ' + fmt(E, 1) + ' J the rock brings down is stored in the spring at its fullest squeeze of ' + fmt(xc * 100, 1) + ' cm and is handed back, and the rock rises to the height it started from. The ground exerts nonconservative forces, so the same ' + fmt(E, 1) + ' J becomes thermal energy, sound and a dent, and that rock has lost its mechanical energy for good.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 4.5), draw });
})();

/* =====================================================================
   FIGURE 7.15: the crate pushed up the ramp against friction. The bars
   beside the scene are the work the person does, the work friction
   does, the work the gravitational force does, and the change in the
   crate's mechanical energy, which is exactly the sum of the first
   two. The crate travels up the ramp, so the figure loops and gets the
   transport.
===================================================================== */
(function () {
  const d = sim('sim-ramp', 580);
  const fa = ctl(d.controls, { label: '\\kFa', cls: 'force', min: 0, max: 800, step: 10, value: 400, unit: 'N', dec: 0, onInput: reset, aria: 'force the person applies' });
  const ff = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 400, step: 10, value: 120, unit: 'N', dec: 0, onInput: reset, aria: 'force of friction on the crate' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 30, step: 1, value: 25, unit: '\u00b0', dec: 0, onInput: reset, aria: 'angle of the ramp' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 120, step: 5, value: 50, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the crate' });
  const D = 4.0, SC = 78, BACK = 260, X0 = 260, YBASE = 460, ZERO = 1020;
  /* The crate is already moving at 1.00 m/s when the push begins, and from there the net force
     along the ramp decides what happens: while the push beats friction and the pull of gravity
     the crate speeds up over the whole 4.00 m, and when it does not the crate slows and stops
     where its kinetic energy runs out, which is what a push of nothing at all must do. */
  const V0 = 1.0;
  const netF = () => fa.v - ff.v - m.v * G * Math.sin(th.v * RAD);
  const accel = () => netF() / m.v;
  /* how far it gets, and how long that takes */
  function travel() {
    const acc = accel();
    if (Math.abs(acc) < 1e-6) return { end: D, T: D / V0 };
    if (acc > 0) return { end: D, T: (Math.sqrt(V0 * V0 + 2 * acc * D) - V0) / acc };
    const halt = (V0 * V0) / (-2 * acc);
    if (halt >= D) return { end: D, T: (V0 - Math.sqrt(Math.max(0, V0 * V0 + 2 * acc * D))) / -acc };
    return { end: halt, T: V0 / -acc };
  }
  const cy = cycle(() => travel().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tr = travel(), acc = accel(), t = Math.min(cy.now(), tr.T);
    const s = Math.max(0, Math.min(tr.end, V0 * t + 0.5 * acc * t * t));
    const vNow = Math.max(0, V0 + acc * t), stalled = tr.end < D - 1e-6;
    const a = th.v * RAD, ca = Math.cos(a), sa = Math.sin(a);
    const y0 = YBASE - BACK * sa, run = D * SC + 70;
    const s0x = X0 - BACK * ca, s1x = X0 + run * ca, s1y = y0 - run * sa;
    const Wa = fa.v * s, Wf = -ff.v * s, Wg = -m.v * G * s * sa, Wnc = Wa + Wf;
    /* the ramp, the crate on it and the person behind it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(s0x, YBASE); ctx.lineTo(s1x, s1y); ctx.lineTo(s1x, YBASE); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, s0x, YBASE, s1x, s1y, PAL.muted, 5);
    line(ctx, s0x, YBASE, s1x, YBASE, PAL.rule, 2, [8, 8]);
    const cx = X0 + s * SC * ca, cyy = y0 - s * SC * sa;
    const lab = F.labeller(ctx, 580);
    if (th.v > 0) F.angleArc(ctx, { x: s0x, y: YBASE }, 70, 0, a, fmt(th.v, 0) + '°', lab);
    /* the crate and the person, both standing on the ramp: the crate is 96 by 80 on the slope, and the
       person walks behind it with both hands on its back face, so the push is seen to come from her */
    const CW = 96, CH = 80, PS = 0.9;
    const walking = s > 0.02 && s < tr.end - 0.02, sw = walking ? Math.sin(s * 5) : 0;
    ctx.save(); ctx.translate(cx, cyy); ctx.rotate(-a);
    F.crate(ctx, 0, -CH / 2, CW, CH, PAL.ink);
    F.silhouette(ctx, { x: -CW / 2 - 54 * PS, y: 0, s: PS, pose: 'push', hands: [{ x: 54, y: -58 / PS }, { x: 56, y: -48 / PS }],
      feet: [{ x: 8 + 14 * sw, y: 0 }, { x: -34 - 14 * sw, y: 0 }] });
    ctx.restore();
    lab.add(fmt(m.v, 0) + ' kg', cx - (CH + 6) * sa, cyy - (CH + 6) * ca, -sa, -ca, PAL.ink, 18, 14);
    if (vNow > 0.02) {
      const vx = cx + 10 * ca - (CH + 12) * sa, vy = cyy - 10 * sa - (CH + 12) * ca, vl = 40 + 60 * Math.min(1, vNow / 3);
      arrow(ctx, vx, vy, vx + vl * ca, vy - vl * sa, C('velocity'), 5);
      lab.add('v = ' + fmt(vNow, 2) + ' m/s', vx + vl * ca, vy - vl * sa, ca, -sa - 0.6, C('velocity'), 18, 18);
    }
    if (fa.v > 0) {
      /* the push lands on the back face at the height of the hands, and its tail runs back along the
         slope, over her arms, with a thin halo of the panel colour so it stays legible across the body */
      const L = 60 + (fa.v / 800) * 130, hx = cx - (CW / 2) * ca - 54 * sa, hy = cyy + (CW / 2) * sa - 54 * ca;
      line(ctx, hx - L * ca, hy + L * sa, hx, hy, PAL.panel, 9);
      arrow(ctx, hx - L * ca, hy + L * sa, hx, hy, C('force'), 5);
      lab.add('F_app = ' + num(fa.v, 0) + ' N', hx - L * ca, hy + L * sa, -ca - 0.3, -1, C('force'), 18, 22);
    }
    if (ff.v > 0) {
      /* friction acts along the base of the crate, at its front edge, back down the ramp */
      const L = 40 + (ff.v / 400) * 90, tx = cx + (CW / 2) * ca - 6 * sa, ty = cyy - (CW / 2) * sa - 6 * ca;
      arrow(ctx, tx, ty, tx - L * ca, ty + L * sa, C('force'), 5);
      lab.add('f = ' + num(ff.v, 0) + ' N', tx - L * ca * 0.5, ty + L * sa * 0.5 + 8, sa * 0.3, 1, C('force'), 18, 26);
    }
    lab.flush();
    hbracket(ctx, X0, cx, YBASE + 40, C('position'), 'd = ' + fmt(s, 2) + ' m');
    /* the four accounts, drawn beside the scene from a common zero, on a fixed scale: the longest
       bar the sliders allow is the person's own, 800 N through 4.00 m, which is 3200 J, and that
       is drawn 320 units long, so a tenth of a unit to the joule whatever the sliders are set to */
    const sc = 320 / 3200;
    line(ctx, ZERO, 168, ZERO, 522, PAL.muted, 2);
    text(ctx, '0', ZERO, 534, PAL.muted, { size: 17, align: 'center' });
    rowbar(ctx, ZERO, 180, Wa * sc, C('energy'), 'the person does', '+' + num(Wa, 0) + ' J');
    rowbar(ctx, ZERO, 262, Wf * sc, C('energy'), 'friction does', num(Wf, 0) + ' J');
    rowbar(ctx, ZERO, 344, Wg * sc, C('energy'), 'the gravitational force does', num(Wg, 0) + ' J');
    line(ctx, 700, 424, 1370, 424, PAL.rule, 1.5);
    rowbar(ctx, ZERO, 448, Wnc * sc, C('energy'), 'the mechanical energy changes by', (Wnc >= 0 ? '+' : '') + num(Wnc, 0) + ' J');
    topline(ctx, stalled && s >= tr.end - 1e-6
      ? 'The push is not enough to keep the crate going, so it has stopped after ' + fmt(s, 2) + ' m, with the person having done ' + num(Wa, 0) + ' J and friction having taken ' + num(-Wf, 0) + ' J.'
      : 'The person has done ' + num(Wa, 0) + ' J, friction has taken ' + num(-Wf, 0) + ' J, and the mechanical energy has changed by ' + (Wnc >= 0 ? '+' : '') + num(Wnc, 0) + ' J.');
    readout(d.readout, `\\kWnc = \\kWapp + \\kWfr = ${num(Wa, 0)}\\ \\text{J} - ${num(-Wf, 0)}\\ \\text{J} = ${num(Wnc, 0)}\\ \\text{J} = \\kdKE + \\kdPE`,
      'The gravitational force is conservative, so the ' + num(-Wg, 0) + ' J it does against the motion is already counted as the ' + num(-Wg, 0) + ' J of gravitational potential energy the crate gains, and what is left of the nonconservative work, ' + num(Wnc + Wg, 0) + ' J, is the change in the crate\u2019s kinetic energy. Lay the ramp flat and set the push equal to the friction and you have the lawn mower pushed at a constant speed, where W_nc is zero and the mechanical energy does not change at all.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => travel().T / 4.5), draw });
})();

/* =====================================================================
   FIGURE 7.16 + 7.17: the baseball player sliding to a stop, on the
   level and on a slope. The book draws the same scene twice, once flat
   and once at 5.00 degrees, so the two fold into one figure with the
   angle on a slider (rule 14). The slide takes time, so the figure
   loops and gets the transport, and the graph below keeps the energy
   account against the distance he has slid.
===================================================================== */
(function () {
  const d = sim('sim-slide', 730);
  const vi = ctl(d.controls, { label: '\\kvi', cls: 'velocity', min: 2, max: 10, step: 0.25, value: 6, unit: 'm/s', dec: 2, onInput: reset, aria: 'speed at which the slide begins' });
  const ff = ctl(d.controls, { label: '\\kff', cls: 'force', min: 200, max: 800, step: 10, value: 450, unit: 'N', dec: 0, onInput: reset, aria: 'force of friction against the player' });
  /* the two slopes the section works out, level ground and a rise of 5.00 degrees, are soft detents */
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 15, step: 0.25, value: 0, unit: '\u00b0', dec: 2, onInput: reset, aria: 'angle of the slope', detents: [{ v: 0, label: 'level' }, { v: 5, label: '5.00°' }], snap: true });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 110, step: 0.5, value: 65, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the player' });
  const opp = () => ff.v + m.v * G * Math.sin(th.v * RAD);            /* everything that takes energy from him */
  const stop = () => (0.5 * m.v * vi.v * vi.v) / opp();
  const tstop = () => (vi.v * m.v) / opp();
  const cy = cycle(tstop, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const a = th.v * RAD, ca = Math.cos(a), sa = Math.sin(a), ta = Math.tan(a), acc = opp() / m.v;
    const T = tstop(), tau = Math.min(cy.now(), T), D = stop();
    const s = Math.max(0, Math.min(D, vi.v * tau - 0.5 * acc * tau * tau)), v = Math.max(0, vi.v - acc * tau);
    /* the drawn track carries the same four metres the graph does, so the scene keeps one scale
       whatever the sliders make of the slide; a slide longer than that runs off the end of the
       drawn track, and the graph's pinned markers carry the numbers past it. */
    const W = ta > 1e-6 ? Math.min(900, 150 / ta) : 900;              /* the drawn track never rises more than 150 */
    const DR = 4, ER = 2000;
    const SC = W / (1.15 * DR * ca), x0 = 180, y0 = 350;
    const KEi = 0.5 * m.v * vi.v * vi.v, KE = Math.max(0, KEi - opp() * s), Wfr = ff.v * s, PE = m.v * G * s * sa;
    /* the ground he slides along, level or rising */
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 30; ctx.beginPath(); ctx.moveTo(x0 - 60, y0 + 16 + 60 * ta); ctx.lineTo(x0 + W, y0 + 16 - W * ta); ctx.stroke(); ctx.restore();
    line(ctx, x0 - 60, y0 + 60 * ta, x0 + W, y0 - W * ta, PAL.muted, 4);
    if (th.v > 0.01) { line(ctx, x0 - 60, y0 + 60 * ta, x0 + W, y0 + 60 * ta, PAL.rule, 2, [8, 8]); text(ctx, fmt(th.v, 2) + '\u00b0', x0 + 16, y0 + 60 * ta - 20, PAL.ink, { size: 19, weight: 600 }); }
    const sDraw = Math.min(s, DR), dDraw = Math.min(D, DR);
    const px = x0 + sDraw * SC * ca, py = y0 - sDraw * SC * sa;
    const sx = x0 + dDraw * SC * ca, sy = y0 - dDraw * SC * sa;
    line(ctx, sx, sy, sx, y0 + 76 + 60 * ta, C('position'), 2, [6, 8]);
    dot(ctx, x0, y0, C('position'), false, 10);
    slidingPlayer(ctx, px, py, -a);
    const lab = F.labeller(ctx, 730);
    if (v > 0.05) {
      const L = 40 + 130 * (v / vi.v), ax = px + 10 * ca - 96 * sa, ay = py - 10 * sa - 96 * ca;
      arrow(ctx, ax, ay, ax + L * ca, ay - L * sa, C('velocity'), 5);
      lab.add('v = ' + fmt(v, 2) + ' m/s', ax + L * ca, ay - L * sa, ca, -sa - 0.5, C('velocity'), 18, 18);
    }
    /* friction acts on him where he meets the ground, under his hip and legs, and points back down the slide */
    const fl = 50 + 90 * (ff.v / 800), fx = px + 24 * ca + 6 * sa, fy = py - 24 * sa + 6 * ca;
    arrow(ctx, fx, fy, fx - fl * ca, fy + fl * sa, C('force'), 5);
    lab.add('f = ' + num(ff.v, 0) + ' N', fx - fl * ca, fy + fl * sa, -ca, 0.9, C('force'), 18, 22);
    lab.flush();
    hbracket(ctx, x0, px, y0 + 86 + 60 * ta, C('position'), 'd = ' + fmt(s, 2) + ' m');
    /* the energy account along the slide */
    /* fixed axes. The sliders reach ½ × 110 kg × (10 m/s)² = 5500 J, and with only 200 N against
       him that slide would run 27.5 m; the default slide is 1170 J over 2.6 m and would then sit in
       a corner of the box, so both ranges are fixed to hold the default comfortably instead, 0 to
       4 m by 0 to 2000 J, ticked every 1 m and every 500 J. A longer or heavier slide is drawn only
       as far as the box reaches and read off the pinned markers. Neither range moves. */
    const box = { l: 250, r: 1310, t: 506, b: 660 };
    const { X, Y } = axes(ctx, box, [0, DR], [0, ER], { xl: 'distance slid (m)', xc: C('position'), yl: 'energy (J)', yc: C('energy'), nx: 4, ny: 4, fx: (u) => fmt(u, 1), fy: (u) => num(u, 0) });
    const cl = (u) => Math.min(u, ER), op = opp();
    const keFrom = Math.max(0, (KEi - ER) / op), keTo = Math.min(D, DR);        /* the falling line, clipped to the box */
    if (keTo > keFrom) line(ctx, X(keFrom), Y(cl(KEi - op * keFrom)), X(keTo), Y(KEi - op * keTo), C('energy'), 5);
    const frTo = Math.min(D, DR, ER / ff.v);
    line(ctx, X(0), Y(0), X(frTo), Y(ff.v * frTo), alpha(C('energy'), 0.55), 5);
    if (th.v > 0.01) { const peTo = Math.min(D, DR, ER / (m.v * G * sa)); line(ctx, X(0), Y(0), X(peTo), Y(m.v * G * peTo * sa), alpha(C('energy'), 0.3), 5); }
    text(ctx, 'KE', X(Math.min(D, DR) * 0.08), Y(cl(KEi * 0.9)) - 16, C('energy'), { size: 18, weight: 600 });
    text(ctx, 'taken by friction', X(frTo * 0.62), Y(ff.v * frTo * 0.62) - 20, alpha(C('energy'), 0.7), { size: 18, weight: 600 });
    if (th.v > 0.01) text(ctx, 'PE_g', X(Math.min(D, DR) * 0.94), Y(cl(m.v * G * Math.min(D, DR) * 0.94 * sa)) - 20, alpha(C('energy'), 0.6), { size: 18, weight: 600, align: 'right' });
    line(ctx, X(Math.min(s, DR)), box.b, X(Math.min(s, DR)), Y(cl(KEi)), C('position'), 2, [4, 8]);
    pinned(ctx, box, X, Y, s, KE, C('energy'), num(KE, 0) + ' J');
    pinned(ctx, box, X, Y, s, Wfr, alpha(C('energy'), 0.7), num(Wfr, 0) + ' J');
    topline(ctx, s >= D - 1e-6
      ? 'He has stopped after ' + fmt(D, 2) + ' m, with ' + num(Wfr, 0) + ' J taken by friction' + (th.v > 0.01 ? ' and ' + num(PE, 0) + ' J stored in the height.' : '.')
      : 'He has slid ' + fmt(s, 2) + ' m of the ' + fmt(D, 2) + ' m it takes him to stop, and ' + num(Wfr, 0) + ' J of his ' + num(KEi, 0) + ' J have gone into friction.');
    readout(d.readout, `\\kd = \\frac{\\tfrac{1}{2}m{\\kvi}^2}{\\kff + m\\kg\\sin\\theta} = \\frac{(0.5)(${fmt(m.v, 1)}\\ \\text{kg})(${fmt(vi.v, 2)}\\ \\text{m/s})^2}{${num(ff.v, 0)}\\ \\text{N} + (${fmt(m.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)\\sin(${fmt(th.v, 2)}^\\circ)} = ${fmt(D, 2)}\\ \\text{m}`,
      th.v < 0.01
        ? 'On the level the only thing taking energy from him is friction, so he slides ' + fmt(D, 2) + ' m. Raise the slope to 5.00 degrees and the gravitational force takes a share as well, which brings him to rest in ' + fmt((0.5 * m.v * vi.v * vi.v) / (ff.v + m.v * G * Math.sin(5 * RAD)), 2) + ' m.'
        : 'Sliding up the ' + fmt(th.v, 2) + '-degree slope he stops in ' + fmt(D, 2) + ' m, where on the level the same slide would have carried him ' + fmt((0.5 * m.v * vi.v * vi.v) / ff.v, 2) + ' m. The difference is the ' + num(m.v * G * D * sa, 0) + ' J of gravitational potential energy he gains on the way up, which friction no longer has to take.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tstop() / 4.5), draw });
})();

/* =====================================================================
   FIGURE 7.18: the take-home investigation. The marble rolls down the
   ruler into the cup, and the cup slides until friction has taken all
   of the energy the marble brought it. The graph below is the plot the
   investigation asks you to make. The run takes time, so the figure
   loops and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-cup', 700);
  const rel = ctl(d.controls, { label: '\\text{release}', cls: 'position', min: 5, max: 30, step: 1, value: 10, unit: 'cm', dec: 0, onInput: reset, aria: 'release position of the marble on the ruler' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 2, max: 30, step: 1, value: 5, unit: 'g', dec: 0, onInput: reset, aria: 'mass of the marble' });
  const mu = ctl(d.controls, { label: '\\mu_{\\text{k}}', cls: '', min: 0.1, max: 0.6, step: 0.01, value: 0.3, unit: '', dec: 2, onInput: reset, aria: 'coefficient of kinetic friction of the cup on the table' });
  const ANG = 30 * RAD, MCUP = 0.003, TABLE = 350, SCR = 10, LIP = 560, CUP0 = LIP + 110;
  const mkg = () => mm.v / 1000;
  const hgt = (cm) => (cm / 100) * Math.sin(ANG);
  const run = (cm) => (mkg() * hgt(cm)) / (mu.v * (MCUP + mkg()));
  const tRoll = () => Math.sqrt((2 * (rel.v / 100)) / (G * Math.sin(ANG)));
  const vCup = () => Math.sqrt((2 * mkg() * G * hgt(rel.v)) / (MCUP + mkg()));
  const period = () => tRoll() + vCup() / (mu.v * G);
  const cy = cycle(period, 1.2);
  function reset() { cy.reset(); }
  const rx = (cm) => LIP - cm * SCR * Math.cos(ANG), ry = (cm) => TABLE - cm * SCR * Math.sin(ANG);
  function draw() {
    const { ctx } = begin(d.c);
    const t1 = tRoll(), tau = cy.now(), rolling = tau < t1;
    const along = rolling ? Math.max(0, rel.v - 0.5 * G * Math.sin(ANG) * tau * tau * 100) : 0;
    /* the drawn table carries the same half metre the graph's axis does, 460 units to 0.50 m,
       and it does not follow the sliders; a cup that goes further runs off the drawn table and
       its distance is read off the pinned marker below. */
    const DRAW = 0.50, SCT = 460 / DRAW;
    const D = run(rel.v);
    const moved = rolling ? 0 : Math.max(0, Math.min(D, vCup() * (tau - t1) - 0.5 * mu.v * G * (tau - t1) * (tau - t1)));
    const KE = mkg() * G * hgt(rel.v), N = (MCUP + mkg()) * G, left = Math.max(0, KE * (1 - (D > 0 ? moved / D : 0)));
    const cupX = CUP0 + Math.min(moved, DRAW) * SCT;
    /* the book, the ruler propped on it, the marble and the cup */
    strip(ctx, 110, 1180, TABLE + 16, 30);
    fixed(ctx, rx(31) - 150, ry(31), 150, TABLE - ry(31));
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.moveTo(rx(0), ry(0)); ctx.lineTo(rx(31), ry(31)); ctx.stroke(); ctx.restore();
    for (let c = 5; c <= 30; c += 5) { line(ctx, rx(c) - 4, ry(c) - 7, rx(c) - 11, ry(c) - 19, PAL.muted, 2); text(ctx, String(c), rx(c) - 17, ry(c) - 28, PAL.muted, { size: 16, align: 'center' }); }
    dot(ctx, rx(rel.v) - 7, ry(rel.v) - 12, C('position'), false, 11);
    foamCup(ctx, cupX, TABLE, PAL.ink);
    if (rolling) dot(ctx, rx(along) - 7, ry(along) - 12, PAL.ink, true, 13);
    else dot(ctx, cupX + 22, TABLE - 14, PAL.ink, true, 13);
    line(ctx, rx(rel.v), ry(rel.v), LIP + 46, ry(rel.v), C('position'), 2, [8, 8]);
    vbracket(ctx, LIP + 46, TABLE, ry(rel.v), C('position'));
    text(ctx, 'h = ' + fmt(hgt(rel.v) * 100, 1) + ' cm', LIP + 38, ry(rel.v) - 18, C('position'), { size: 18, weight: 600, align: 'right' });
    if (!rolling) {
      /* friction on the cup acts where it meets the table and points back toward the ruler */
      arrow(ctx, cupX + 180, TABLE - 8, cupX + 88, TABLE - 8, C('force'), 5);
      F.label(ctx, 'f = \u03bc\u2096N = ' + fmt(mu.v * N * 1000, 1) + ' mN', cupX + 134, TABLE - 8, { side: 'above', color: C('force'), size: 18, gap: 24, H: 700 });
    }
    hbracket(ctx, CUP0, cupX, TABLE + 70, C('position'), 'd = ' + fmt(moved * 100, 1) + ' cm', { side: 'below' });
    /* the bar is read against a fixed cap, 44.1 mJ: the heaviest marble the slider allows,
       released at the far end of the ruler. The dashed rule is what this marble brings. */
    const KEMAX = 0.030 * G * hgt(30);
    ebar(ctx, 1215, TABLE, 62, KEMAX, left, 240, 'energy left', fmt(left * 1000, 2) + ' mJ', KE);
    text(ctx, fmt(KEMAX * 1000, 1) + ' mJ', 1246, TABLE - 258, C('energy'), { size: 16, align: 'center' });
    /* the plot the investigation asks for */
    /* fixed axes. The release axis is the ruler itself, 0 to 30 cm. The heaviest marble on the
       most slippery table would send the cup 1.36 m, but the default run is 10.4 cm and would
       then keep to a fourteenth of the box, so the distance axis is fixed from that default
       state at 0 to 50 cm, ticked every 10 cm. A longer run is clipped at the top edge and read
       off the pinned marker. Neither range moves. */
    const DR = 50, box = { l: 260, r: 1320, t: 496, b: 632 };
    const { X, Y } = axes(ctx, box, [0, 30], [0, DR], { xl: 'release position on the ruler (cm)', xc: C('position'), yl: 'distance the cup moves (cm)', yc: C('position'), nx: 6, ny: 5, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    /* the run grows in step with the release position, so the line leaves the box at this release */
    const perCm = run(1) * 100, relTop = Math.min(30, perCm > 1e-9 ? DR / perCm : 30);
    line(ctx, X(0), Y(0), X(relTop), Y(run(relTop) * 100), C('position'), 5);
    for (const q of [10, 20, 30]) if (run(q) * 100 <= DR) dot(ctx, X(q), Y(run(q) * 100), C('position'), false, 10);
    if (D * 100 <= DR) dot(ctx, X(rel.v), Y(D * 100), C('position'), true, 9);
    ctx.restore();
    if (D * 100 > DR) pinned(ctx, box, X, Y, rel.v, D * 100, C('position'), fmt(D * 100, 0) + ' cm');
    text(ctx, 'a straight line through the origin', X(16), Y(DR * 0.82), PAL.muted, { size: 18, weight: 600, align: 'center' });
    topline(ctx, rolling
      ? 'Released at ' + fmt(rel.v, 0) + ' cm, the marble has ' + fmt(along, 1) + ' cm of ruler left to run.'
      : 'The marble arrived with ' + fmt(KE * 1000, 2) + ' mJ and has pushed the cup ' + fmt(moved * 100, 1) + ' cm of the ' + fmt(D * 100, 1) + ' cm friction allows.');
    readout(d.readout, `\\kKE = m\\kg\\kh = \\mu_{\\text{k}}\\kN\\kd = (${fmt(mu.v, 2)})(${fmt(N * 1000, 1)}\\ \\text{mN})(${fmt(D, 3)}\\ \\text{m}) = ${fmt(KE * 1000, 2)}\\ \\text{mJ}`,
      'The marble brings ' + fmt(KE * 1000, 2) + ' mJ to the cup, and friction does that much work through the distance the cup travels before it stops. Because the energy the marble arrives with grows in step with the release position, so does the distance the cup moves, and the plot is the straight line the investigation asks you to look for. A heavier marble arrives with more energy, and the cup goes farther.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 4.5), draw });
})();

/* =====================================================================
   The skier of the first problem, copied faithfully with the book's
   numbers so that the reader sees exactly what the problem is about.
   Nothing is asked of the reader here and nothing travels, so it is a
   still picture with no sliders and no transport (rule 14).
===================================================================== */
(function () {
  const d = sim('fig-skier', 620);
  const ANG = 35 * RAD, RISE = 2.5, SC = 90;
  function draw() {
    const { ctx } = begin(d.c);
    const y0 = 470, xa = 210, xb = 560;
    const xt = xb + (RISE / Math.tan(ANG)) * SC, yt = y0 - RISE * SC;
    strip(ctx, 140, xb, y0 + 16, 30);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(xb, y0 + 16); ctx.lineTo(xt, yt + 16); ctx.lineTo(1270, yt + 16); ctx.lineTo(1270, y0 + 16); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, xb, y0, xt, yt, PAL.muted, 5);
    line(ctx, xt, yt, 1270, yt, PAL.muted, 5);
    line(ctx, xb, y0, xt + 90, y0, PAL.rule, 2, [8, 8]);
    text(ctx, '35\u00b0', xb + 56, y0 - 20, PAL.ink, { size: 20, weight: 600 });
    skierSprite(ctx, xa, y0);
    skierSprite(ctx, xt + 190, yt);
    arrow(ctx, xa + 60, y0 - 56, xa + 226, y0 - 56, C('velocity'), 5);
    text(ctx, 'v_i = 12.0 m/s', xa + 240, y0 - 56, C('velocity'), { size: 20, weight: 600 });
    arrow(ctx, xt + 254, yt - 56, xt + 350, yt - 56, C('velocity'), 5);
    text(ctx, 'v_f = ?', xt + 364, yt - 56, C('velocity'), { size: 20, weight: 600 });
    vbracket(ctx, xt + 52, y0, yt, C('position'), '2.50 m', 1);
    text(ctx, '60.0 kg', xa, y0 - 118, PAL.ink, { size: 19, weight: 600, align: 'center' });
    text(ctx, 'KE_i', xa, y0 - 152, C('energy'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'KE_f + PE_f', xt + 190, yt - 136, C('energy'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'the coefficient of friction between her skis and the snow is 0.0800', 700, y0 + 84, PAL.ink, { size: 18, align: 'center' });
    topline(ctx, 'The skier meets the rise at 12.0 m/s and coasts to the top, 2.50 m up a slope of 35\u00b0.');
    readout(d.readout, '\\kKEi + \\kPEi + \\kWnc = \\kKEf + \\kPEf,\\quad m = 60.0\\ \\text{kg},\\ \\kvi = 12.0\\ \\text{m/s},\\ \\kh = 2.50\\ \\text{m},\\ \\mu_{\\text{k}} = 0.0800',
      'Her kinetic energy at the bottom has to pay both for the height she gains and for the work friction does along the slope, and what is left of it is the kinetic energy she has at the top. The hint the problem gives is to take her path up the rise as a straight line, so that the distance friction acts through follows from the height of the rise and the angle of the slope.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
