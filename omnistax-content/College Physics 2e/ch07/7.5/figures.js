/* Figures for section 7.5 Nonconservative Forces. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, nice, spring, fixed } = F;
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
/* a crate whose base is centred on (x, y), turned through `rot` */
function crate(ctx, x, y, w, h, rot, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(-w / 2, -h, w, h); ctx.strokeRect(-w / 2, -h, w, h);
  ctx.beginPath(); ctx.moveTo(-w / 2, -h); ctx.lineTo(w / 2, 0); ctx.moveTo(w / 2, -h); ctx.lineTo(-w / 2, 0); ctx.stroke(); ctx.restore();
}
/* a person leaning into a push, feet at (x, y), facing up the ramp */
function pusher(ctx, x, y, rot, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(30, -100, 11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(26, -90); ctx.lineTo(0, -46);
  ctx.moveTo(0, -46); ctx.lineTo(-30, 0); ctx.moveTo(0, -46); ctx.lineTo(22, 0);
  ctx.moveTo(22, -78); ctx.lineTo(58, -62); ctx.stroke(); ctx.restore();
}
/* a baseball player sliding feet first, his contact with the ground at (x, y) */
function slidingPlayer(ctx, x, y, rot, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(-56, -60, 11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(-48, -50); ctx.lineTo(-8, -20);
  ctx.moveTo(-8, -20); ctx.lineTo(36, -26); ctx.lineTo(58, -4);
  ctx.moveTo(-8, -20); ctx.lineTo(32, -2);
  ctx.moveTo(-38, -42); ctx.lineTo(-62, -82); ctx.stroke(); ctx.restore();
}
/* a foam cup standing upside down on its lip, the lip on (x, y) */
function foamCup(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(x - 34, y); ctx.lineTo(x - 24, y - 58); ctx.lineTo(x + 24, y - 58); ctx.lineTo(x + 34, y); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x - 27, y - 14, 10, 0, TAU); ctx.stroke(); ctx.restore();
}
/* a skier on her skis, the base of the skis at (x, y) */
function skierSprite(ctx, x, y, color) {
  ctx.save(); ctx.translate(x, y); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(4, -86, 11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(2, -76); ctx.lineTo(-4, -38); ctx.lineTo(14, -4);
  ctx.moveTo(-4, -38); ctx.lineTo(-18, -4);
  ctx.moveTo(0, -66); ctx.lineTo(32, -50);
  ctx.moveTo(-46, -2); ctx.lineTo(46, -2); ctx.stroke(); ctx.restore();
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
    const La = ra.px / PPM, Lb = rb.px / PPM, Wa = ff.v * La, Wb = ff.v * Lb, Wmax = ff.v * 0.68;
    panel(ctx, 330, ra, '(a) straight from A to B');
    panel(ctx, 870, rb, '(b) wandering from A to B');
    line(ctx, 600, 130, 600, 600, PAL.rule, 2);
    text(ctx, 'this path is ' + fmt(La * 100, 0) + ' cm long', 330, 594, C('position'), { size: 18, weight: 600, align: 'center' });
    text(ctx, 'this path is ' + fmt(Lb * 100, 0) + ' cm long', 870, 594, C('position'), { size: 18, weight: 600, align: 'center' });
    ebar(ctx, 1160, 540, 66, Wmax, Wa, 360, 'W in (a)', fmt(Wa, 2) + ' J');
    ebar(ctx, 1290, 540, 66, Wmax, Wb, 360, 'W in (b)', fmt(Wb, 2) + ' J');
    headline(ctx, bow.v === 0
      ? 'both erasers take the same route, so each rubs out the same face and each costs ' + fmt(Wa, 2) + ' J'
      : 'the wandering route is ' + fmt((Lb / La - 1) * 100, 0) + ' per cent longer, so it costs ' + fmt(Wb, 2) + ' J against the ' + fmt(Wa, 2) + ' J of the straight one');
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
    spring(ctx, 300, GROUND, 300, springTop, 7, 34, C('stiffness'), 5);
    line(ctx, 246, springTop, 354, springTop, C('stiffness'), 5);
    rock(ctx, 300, springTop - 32 - Math.max(0, leftUp) * SC, 30, PAL.ink);
    rock(ctx, 900, GROUND - 32 - rightUp * SC, 30, PAL.ink);
    line(ctx, 170, TOP - h.v * SC, 430, TOP - h.v * SC, C('position'), 2, [8, 8]);
    line(ctx, 790, GROUND - h.v * SC, 1030, GROUND - h.v * SC, C('position'), 2, [8, 8]);
    vbracket(ctx, 190, TOP, TOP - h.v * SC, C('position'), 'h = ' + fmt(h.v, 2) + ' m', -1);
    vbracket(ctx, 810, GROUND, GROUND - h.v * SC, C('position'), 'h = ' + fmt(h.v, 2) + ' m', -1);
    text(ctx, fmt(m.v, 2) + ' kg', 300, springTop - 82 - Math.max(0, leftUp) * SC, PAL.ink, { size: 18, weight: 600, align: 'center' });
    if (comp > xc * 0.35) text(ctx, 'the spring is pushing back', 380, TOP + 46, C('stiffness'), { size: 18, weight: 600 });
    if (tau > tf) text(ctx, 'heat, sound and a dent in the ground', 900, GROUND + 62, PAL.muted, { size: 18, align: 'center' });
    /* the two energy accounts, drawn to one scale */
    const CAP = 350, BASE = GROUND, sc = CAP / E;
    ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; ctx.strokeRect(600, BASE - CAP, 62, CAP); ctx.strokeRect(1230, BASE - CAP, 62, CAP); ctx.restore();
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
    headline(ctx, tau <= tf
      ? 'the rock falls with ' + fmt(E, 1) + ' J on both sides, and both systems still hold all of it'
      : tau <= tf + tc
        ? 'the spring holds ' + fmt(PEs, 1) + ' J of the ' + fmt(E, 1) + ' J and will give it back, while on the right all ' + fmt(E, 1) + ' J has gone'
        : 'the spring has sent the rock back up to ' + fmt(leftUp, 2) + ' m of the ' + fmt(h.v, 2) + ' m it fell, and the other rock has not moved');
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
  const m = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 120, step: 5, value: 50, unit: 'kg', dec: 0, aria: 'mass of the crate' });
  const D = 4.0, SC = 78, BACK = 260, X0 = 260, YBASE = 460, ZERO = 1020;
  const cy = cycle(() => D, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const s = Math.min(cy.now(), D), a = th.v * RAD, ca = Math.cos(a), sa = Math.sin(a);
    const y0 = YBASE - BACK * sa, run = D * SC + 70;
    const s0x = X0 - BACK * ca, s1x = X0 + run * ca, s1y = y0 - run * sa;
    const Wa = fa.v * s, Wf = -ff.v * s, Wg = -m.v * G * s * sa, Wnc = Wa + Wf;
    /* the ramp, the crate on it and the person behind it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(s0x, YBASE); ctx.lineTo(s1x, s1y); ctx.lineTo(s1x, YBASE); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, s0x, YBASE, s1x, s1y, PAL.muted, 5);
    line(ctx, s0x, YBASE, s1x, YBASE, PAL.rule, 2, [8, 8]);
    if (th.v > 0) text(ctx, fmt(th.v, 0) + '\u00b0', s0x + 86, YBASE - 20, PAL.ink, { size: 20, weight: 600 });
    const cx = X0 + s * SC * ca, cyy = y0 - s * SC * sa;
    crate(ctx, cx, cyy, 96, 74, -a, PAL.ink);
    pusher(ctx, cx - 200 * ca, cyy + 200 * sa, -a, PAL.ink);
    text(ctx, fmt(m.v, 0) + ' kg', cx - 40 * sa, cyy - 40 * ca, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    if (fa.v > 0) {
      const L = 50 + (fa.v / 800) * 120, tipx = cx - 20 * ca - 124 * sa, tipy = cyy + 20 * sa - 124 * ca;
      arrow(ctx, tipx - L * ca, tipy + L * sa, tipx, tipy, C('force'), 5);
      text(ctx, 'F_app = ' + num(fa.v, 0) + ' N', tipx - 0.5 * L * ca, tipy + 0.5 * L * sa - 36, C('force'), { size: 18, weight: 600, align: 'center' });
    }
    if (ff.v > 0) {
      const L = 40 + (ff.v / 400) * 90, tx = cx + 46 * ca + 16 * sa, ty = cyy - 46 * sa + 16 * ca;
      arrow(ctx, tx, ty, tx - L * ca, ty + L * sa, C('force'), 5);
      text(ctx, 'f = ' + num(ff.v, 0) + ' N', tx - L * ca - 12, ty + L * sa + 24, C('force'), { size: 18, weight: 600, align: 'center' });
    }
    hbracket(ctx, X0, cx, YBASE + 40, C('position'), 'd = ' + fmt(s, 2) + ' m');
    /* the four accounts, drawn beside the scene from a common zero */
    const top = fa.v * D, bot = Math.max(ff.v * D, m.v * G * D * Math.sin(30 * RAD), 1);
    const sc = Math.min(top > 0 ? 320 / top : 1e9, 290 / bot);
    line(ctx, ZERO, 168, ZERO, 522, PAL.muted, 2);
    text(ctx, '0', ZERO, 534, PAL.muted, { size: 17, align: 'center' });
    rowbar(ctx, ZERO, 180, Wa * sc, C('energy'), 'the person does', '+' + num(Wa, 0) + ' J');
    rowbar(ctx, ZERO, 262, Wf * sc, C('energy'), 'friction does', num(Wf, 0) + ' J');
    rowbar(ctx, ZERO, 344, Wg * sc, C('energy'), 'the gravitational force does', num(Wg, 0) + ' J');
    line(ctx, 700, 424, 1370, 424, PAL.rule, 1.5);
    rowbar(ctx, ZERO, 448, Wnc * sc, C('energy'), 'the mechanical energy changes by', (Wnc >= 0 ? '+' : '') + num(Wnc, 0) + ' J');
    headline(ctx, 'the person has done ' + num(Wa, 0) + ' J, friction has taken ' + num(-Wf, 0) + ' J, and the mechanical energy has changed by W_nc = ' + (Wnc >= 0 ? '+' : '') + num(Wnc, 0) + ' J');
    readout(d.readout, `\\kWnc = \\kWapp + \\kWfr = ${num(Wa, 0)}\\ \\text{J} - ${num(-Wf, 0)}\\ \\text{J} = ${num(Wnc, 0)}\\ \\text{J} = \\kdKE + \\kdPE`,
      'The gravitational force is conservative, so the ' + num(-Wg, 0) + ' J it does against the motion is already counted as the ' + num(-Wg, 0) + ' J of gravitational potential energy the crate gains, and what is left of the nonconservative work, ' + num(Wnc + Wg, 0) + ' J, is the change in the crate\u2019s kinetic energy. Lay the ramp flat and set the push equal to the friction and you have the lawn mower pushed at a constant speed, where W_nc is zero and the mechanical energy does not change at all.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => D / 4.5), draw });
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
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 15, step: 0.25, value: 0, unit: '\u00b0', dec: 2, onInput: reset, aria: 'angle of the slope' });
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
    const W = ta > 1e-6 ? Math.min(900, 150 / ta) : 900;              /* the drawn track never rises more than 150 */
    const SC = W / (1.15 * D * ca), x0 = 180, y0 = 350;
    const KEi = 0.5 * m.v * vi.v * vi.v, KE = Math.max(0, KEi - opp() * s), Wfr = ff.v * s, PE = m.v * G * s * sa;
    /* the ground he slides along, level or rising */
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 30; ctx.beginPath(); ctx.moveTo(x0 - 60, y0 + 16 + 60 * ta); ctx.lineTo(x0 + W, y0 + 16 - W * ta); ctx.stroke(); ctx.restore();
    line(ctx, x0 - 60, y0 + 60 * ta, x0 + W, y0 - W * ta, PAL.muted, 4);
    if (th.v > 0.01) { line(ctx, x0 - 60, y0 + 60 * ta, x0 + W, y0 + 60 * ta, PAL.rule, 2, [8, 8]); text(ctx, fmt(th.v, 2) + '\u00b0', x0 + 16, y0 + 60 * ta - 20, PAL.ink, { size: 19, weight: 600 }); }
    const px = x0 + s * SC * ca, py = y0 - s * SC * sa;
    const sx = x0 + D * SC * ca, sy = y0 - D * SC * sa;
    line(ctx, sx, sy, sx, y0 + 76 + 60 * ta, C('position'), 2, [6, 8]);
    dot(ctx, x0, y0, C('position'), false, 10);
    slidingPlayer(ctx, px, py, -a, PAL.ink);
    if (v > 0.05) {
      const L = 40 + 130 * (v / vi.v);
      arrow(ctx, px + 44 * ca, py - 98 - 44 * sa, px + 44 * ca + L * ca, py - 98 - 44 * sa - L * sa, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 2) + ' m/s', px + 50 * ca + L * ca, py - 122 - 44 * sa, C('velocity'), { size: 18, weight: 600 });
    }
    const fl = 50 + 90 * (ff.v / 800);
    arrow(ctx, px + 24 * ca - 18 * sa, py - 24 * sa - 18 * ca, px + 24 * ca - 18 * sa - fl * ca, py - 24 * sa - 18 * ca + fl * sa, C('force'), 5);
    text(ctx, 'f = ' + num(ff.v, 0) + ' N', px + 34 * ca - fl * ca, py + 16 - 24 * sa, C('force'), { size: 18, weight: 600, align: 'right' });
    hbracket(ctx, x0, px, y0 + 86 + 60 * ta, C('position'), 'd = ' + fmt(s, 2) + ' m');
    /* the energy account along the slide */
    const Er = nice(0, KEi, 4);
    const box = { l: 250, r: 1310, t: 506, b: 660 };
    const { X, Y } = axes(ctx, box, [0, D], [0, Er.hi], { xl: 'distance slid (m)', xc: C('position'), yl: 'energy (J)', yc: C('energy'), nx: 4, ny: Er.n, fx: (u) => fmt(u, 2), fy: (u) => num(u, 0) });
    line(ctx, X(0), Y(KEi), X(D), Y(0), C('energy'), 5);
    line(ctx, X(0), Y(0), X(D), Y(ff.v * D), alpha(C('energy'), 0.55), 5);
    if (th.v > 0.01) line(ctx, X(0), Y(0), X(D), Y(m.v * G * D * sa), alpha(C('energy'), 0.3), 5);
    text(ctx, 'KE', X(D * 0.08), Y(KEi * 0.9) - 16, C('energy'), { size: 18, weight: 600 });
    text(ctx, 'taken by friction', X(D * 0.62), Y(ff.v * D * 0.62) - 20, alpha(C('energy'), 0.7), { size: 18, weight: 600 });
    if (th.v > 0.01) text(ctx, 'PE_g', X(D * 0.94), Y(m.v * G * D * 0.94 * sa) - 20, alpha(C('energy'), 0.6), { size: 18, weight: 600, align: 'right' });
    line(ctx, X(s), box.b, X(s), Y(KEi), C('position'), 2, [4, 8]);
    dot(ctx, X(s), Y(KE), C('energy'), true, 9);
    dot(ctx, X(s), Y(Wfr), alpha(C('energy'), 0.7), true, 9);
    headline(ctx, s >= D - 1e-6
      ? 'he has stopped after ' + fmt(D, 2) + ' m, with ' + num(Wfr, 0) + ' J taken by friction' + (th.v > 0.01 ? ' and ' + num(PE, 0) + ' J stored in the height' : '')
      : 'he has slid ' + fmt(s, 2) + ' m of the ' + fmt(D, 2) + ' m it takes him to stop, and ' + num(Wfr, 0) + ' J of his ' + num(KEi, 0) + ' J are gone into friction');
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
  const ANG = 30 * RAD, MCUP = 0.003, TABLE = 350, SCR = 10, LIP = 560, CUP0 = LIP + 130;
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
    const D = run(rel.v), SCT = 460 / Math.max(0.04, run(30));
    const moved = rolling ? 0 : Math.max(0, Math.min(D, vCup() * (tau - t1) - 0.5 * mu.v * G * (tau - t1) * (tau - t1)));
    const KE = mkg() * G * hgt(rel.v), N = (MCUP + mkg()) * G, left = Math.max(0, KE * (1 - (D > 0 ? moved / D : 0)));
    const cupX = CUP0 + moved * SCT;
    /* the book, the ruler propped on it, the marble and the cup */
    strip(ctx, 110, 1180, TABLE + 16, 30);
    fixed(ctx, rx(31) - 150, ry(31), 150, TABLE - ry(31));
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.moveTo(rx(0), ry(0)); ctx.lineTo(rx(31), ry(31)); ctx.stroke(); ctx.restore();
    for (let c = 5; c <= 30; c += 5) { line(ctx, rx(c) - 4, ry(c) - 7, rx(c) - 11, ry(c) - 19, PAL.muted, 2); text(ctx, String(c), rx(c) - 17, ry(c) - 28, PAL.muted, { size: 16, align: 'center' }); }
    dot(ctx, rx(rel.v) - 7, ry(rel.v) - 12, C('position'), false, 11);
    foamCup(ctx, cupX, TABLE, PAL.ink);
    if (rolling) dot(ctx, rx(along) - 7, ry(along) - 12, PAL.ink, true, 13);
    else dot(ctx, cupX - 18, TABLE - 18, PAL.ink, true, 13);
    line(ctx, rx(rel.v), ry(rel.v), LIP + 46, ry(rel.v), C('position'), 2, [8, 8]);
    vbracket(ctx, LIP + 46, TABLE, ry(rel.v), C('position'));
    text(ctx, 'h = ' + fmt(hgt(rel.v) * 100, 1) + ' cm', LIP + 38, ry(rel.v) - 18, C('position'), { size: 18, weight: 600, align: 'right' });
    if (!rolling) {
      arrow(ctx, cupX + 96, TABLE - 26, cupX + 8, TABLE - 26, C('force'), 5);
      text(ctx, 'f = \u03bc\u2096N = ' + fmt(mu.v * N * 1000, 1) + ' mN', cupX + 52, TABLE - 52, C('force'), { size: 18, weight: 600, align: 'center' });
    }
    hbracket(ctx, CUP0, cupX, TABLE + 70, C('position'), 'd = ' + fmt(moved * 100, 1) + ' cm');
    ebar(ctx, 1215, TABLE, 62, KE, left, 240, 'energy left', fmt(left * 1000, 2) + ' mJ');
    /* the plot the investigation asks for */
    const Dr = nice(0, run(30) * 100, 4);
    const box = { l: 260, r: 1320, t: 496, b: 632 };
    const { X, Y } = axes(ctx, box, [0, 30], [0, Dr.hi], { xl: 'release position on the ruler (cm)', xc: C('position'), yl: 'distance the cup moves (cm)', yc: C('position'), nx: 6, ny: Dr.n, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0) });
    line(ctx, X(0), Y(0), X(30), Y(run(30) * 100), C('position'), 5);
    for (const q of [10, 20, 30]) dot(ctx, X(q), Y(run(q) * 100), C('position'), false, 10);
    dot(ctx, X(rel.v), Y(D * 100), C('position'), true, 9);
    text(ctx, 'a straight line through the origin', X(16), Y(Dr.hi * 0.82), PAL.muted, { size: 18, weight: 600, align: 'center' });
    headline(ctx, rolling
      ? 'released at ' + fmt(rel.v, 0) + ' cm, the marble has ' + fmt(along, 1) + ' cm of ruler left to run'
      : 'the marble arrived with ' + fmt(KE * 1000, 2) + ' mJ and has pushed the cup ' + fmt(moved * 100, 1) + ' cm of the ' + fmt(D * 100, 1) + ' cm friction allows');
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
    skierSprite(ctx, xa, y0, PAL.ink);
    skierSprite(ctx, xt + 190, yt, PAL.ink);
    arrow(ctx, xa + 60, y0 - 56, xa + 226, y0 - 56, C('velocity'), 5);
    text(ctx, 'v_i = 12.0 m/s', xa + 240, y0 - 56, C('velocity'), { size: 20, weight: 600 });
    arrow(ctx, xt + 254, yt - 56, xt + 350, yt - 56, C('velocity'), 5);
    text(ctx, 'v_f = ?', xt + 364, yt - 56, C('velocity'), { size: 20, weight: 600 });
    vbracket(ctx, xt + 52, y0, yt, C('position'), '2.50 m', 1);
    text(ctx, '60.0 kg', xa, y0 - 118, PAL.ink, { size: 19, weight: 600, align: 'center' });
    text(ctx, 'KE_i', xa, y0 - 152, C('energy'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'KE_f + PE_f', xt + 190, yt - 136, C('energy'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'the coefficient of friction between her skis and the snow is 0.0800', 700, y0 + 84, PAL.ink, { size: 18, align: 'center' });
    headline(ctx, 'the skier meets the rise at 12.0 m/s and coasts to the top, 2.50 m up a slope of 35\u00b0');
    readout(d.readout, '\\kKEi + \\kPEi + \\kWnc = \\kKEf + \\kPEf,\\quad m = 60.0\\ \\text{kg},\\ \\kvi = 12.0\\ \\text{m/s},\\ \\kh = 2.50\\ \\text{m},\\ \\mu_{\\text{k}} = 0.0800',
      'Her kinetic energy at the bottom has to pay both for the height she gains and for the work friction does along the slope, and what is left of it is the kinetic energy she has at the top. The hint the problem gives is to take her path up the rise as a straight line, so that the distance friction acts through follows from the height of the rise and the angle of the slope.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
