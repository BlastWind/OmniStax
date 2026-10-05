/* Figures for section 4.5 Normal, Tension, and Other Examples of Forces.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, vbracket, axes, curve, pinned, spring, block, fixed, labeller, topline, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
/* draws inside the graph box, so a line or curve that runs past a fixed range is cut off at the
   frame instead of the frame being stretched to hold it */
const inbox = (ctx, box, f) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); f(); ctx.restore(); };
const G = 9.80;
const RAD = Math.PI / 180;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const num = (v, d) => commas(fmt(v, d));
const deg = (v, d) => fmt(v, d) + '°';

/* labeller() and topline() are the label discipline, promoted into the
   figure library; see figlib.ts for what they guarantee. */

/* ---------- shared drawing ---------- */
/* an arrow from (x, y) along (dx, dy), with its label just beyond the head */
function fvec(ctx, x, y, dx, dy, color, label, size) {
  const L = Math.hypot(dx, dy); if (L < 3) return;
  arrow(ctx, x, y, x + dx, y + dy, color, 5);
  if (!label) return;
  const ux = dx / L, uy = dy / L;
  text(ctx, label, x + dx + ux * 18, y + dy + uy * 18, color, {
    weight: 600, size: size || 22, align: ux < -0.25 ? 'right' : ux > 0.25 ? 'left' : 'center',
    base: uy > 0.25 ? 'top' : uy < -0.25 ? 'bottom' : 'middle', bg: PAL.panel,
  });
}
/* an arrow of a set length along the unit direction (ux, uy), its label beside the shaft */
function tvec(ctx, x, y, ux, uy, len, color, label, side, size, off) {
  const s = side === undefined ? 1 : side, o = off || 0;
  const ox = -uy * o * s, oy = ux * o * s;                 /* the arrow shifted to the label's side of the line */
  arrow(ctx, x + ox, y + oy, x + ux * len + ox, y + uy * len + oy, color, 5);
  text(ctx, label, x + ux * len * 0.5 - uy * (30 + o) * s, y + uy * len * 0.5 + ux * (30 + o) * s, color,
    { weight: 600, size: size || 21, align: 'center', bg: PAL.panel });
}
/* the arc of an angle at (x, y) between two directions given in degrees, with its label */
function angleArc(ctx, x, y, r, a0, a1, label, size) {
  ctx.save(); ctx.strokeStyle = C('angle'); ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x, y, r, a0 * RAD, a1 * RAD); ctx.stroke(); ctx.restore();
  const mid = ((a0 + a1) / 2) * RAD;
  text(ctx, label, x + (r + 30) * Math.cos(mid), y + (r + 30) * Math.sin(mid), C('angle'),
    { size: size || 20, weight: 600, align: 'center', bg: PAL.panel });
}
/* a sack of dog food standing on (cx, base): a full bag with a gathered top and its name on the front */
function sack(ctx, cx, base, color) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(cx - 80, base); ctx.lineTo(cx + 80, base); ctx.lineTo(cx + 84, base - 96);
  ctx.quadraticCurveTo(cx + 40, base - 112, cx + 30, base - 130); ctx.lineTo(cx - 30, base - 130);
  ctx.quadraticCurveTo(cx - 40, base - 112, cx - 84, base - 96); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx - 84, base - 96); ctx.quadraticCurveTo(cx, base - 82, cx + 84, base - 96); ctx.stroke();
  ctx.restore();
  text(ctx, 'DOG FOOD', cx, base - 44, color, { size: 19, weight: 600, align: 'center' });
}
/* a small pulley at (x, y) */
function pulley(ctx, x, y) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 4.11: the normal force. A bag of dog food held in a hand, and
   the same bag on a table that sags until its restoring force is as
   large as the weight, with a free-body diagram under each. The picture
   answers its two sliders and nothing moves, so it registers no cycle.
===================================================================== */
(function () {
  const H = 860;
  const d = sim('sim-normal', H);
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 1, max: 30, step: 0.5, value: 10, unit: 'kg', dec: 1, aria: 'mass of the bag' });
  const K = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 2000, max: 40000, step: 500, value: 5000, unit: 'N/m', dec: 0, aria: 'stiffness of the table' });
  const WMAX = 30 * G;
  function draw() {
    const { ctx } = begin(d.c);
    /* the sag is drawn at 14 units to the centimetre, capped so the deepest sag the sliders
       allow, 14.7 cm, still leaves the top on its legs; the label carries the true number */
    const w = M.v * G, L = 40 + 80 * (w / WMAX), sagCm = 100 * w / K.v, sag = Math.min(72, sagCm * 14), col = C('force');
    const TOP = 400, AX = 300, BX = 1010, FBD = 740;
    const rows = topline(ctx, 'The ' + fmt(M.v, 1) + ' kg bag weighs ' + num(w, 1) + ' N, and the table sags '
      + fmt(sagCm, sagCm < 1 ? 2 : 1) + ' cm until it pushes back with ' + num(w, 1) + ' N');
    const lab = labeller(ctx, H, { headline: rows });
    /* the panel names, over each scene */
    text(ctx, '(a) held in the hand', AX, 112, PAL.muted, { size: 20, align: 'center' });
    text(ctx, '(b) resting on the table', BX, 112, PAL.muted, { size: 20, align: 'center' });
    lab.block(AX - 120, 96, AX + 120, 128); lab.block(BX - 130, 96, BX + 130, 128);
    /* (a) the hand holds the sack up from below, palm up, the wrist off to the left */
    F.hand(ctx, AX - 92, 404, { aim: [1, 0], view: 'palm', curl: 0.3, thumb: 'along', s: 1.45, color: PAL.muted });
    sack(ctx, AX, 398, F.ref('dog-food'));
    lab.place({ l: AX - 104, t: 260, r: AX + 92, b: 440 });
    fvec(ctx, AX + 120, 304, 0, -L, col, '');
    fvec(ctx, AX + 120, 332, 0, L, col, '');
    lab.add('F_hand = ' + num(w, 1) + ' N', AX + 120, 304 - L, 0.4, -0.92, col, 21, 18);
    lab.add('w = ' + num(w, 1) + ' N', AX + 120, 332 + L, 0.4, 0.92, col, 21, 18);
    /* (b) the table, seen from the side: two legs and a top that sags under the sack until it
       pushes back with the weight; the dashed line is where the top lies unloaded */
    ctx.save(); ctx.strokeStyle = F.ref('table'); ctx.fillStyle = PAL.soft; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.rect(BX - 196, TOP + 14, 22, 150); ctx.rect(BX + 174, TOP + 14, 22, 150); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(BX - 226, TOP); ctx.quadraticCurveTo(BX, TOP + 2 * sag, BX + 226, TOP);
    ctx.lineTo(BX + 226, TOP + 18); ctx.quadraticCurveTo(BX, TOP + 18 + 2 * sag, BX - 226, TOP + 18); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    line(ctx, BX - 300, TOP, BX + 226, TOP, PAL.muted, 2, [8, 8]);
    sack(ctx, BX, TOP + sag + 2, F.ref('dog-food'));
    lab.place({ l: BX - 230, t: TOP - 6, r: BX + 230, b: TOP + 24 + sag });
    lab.place({ l: BX - 90, t: TOP + sag - 132, r: BX + 90, b: TOP + sag + 4 });
    lab.place({ l: BX - 200, t: TOP + 14, r: BX - 170, b: TOP + 166 });
    lab.place({ l: BX + 170, t: TOP + 14, r: BX + 200, b: TOP + 166 });
    fvec(ctx, BX + 120, TOP + sag - 30, 0, -L, col, '');
    fvec(ctx, BX + 120, TOP + sag + 6, 0, L, col, '');
    lab.add('N = ' + num(w, 1) + ' N', BX + 120, TOP + sag - 30 - L, 0.4, -0.92, col, 21, 18);
    lab.add('w = ' + num(w, 1) + ' N', BX + 120, TOP + sag + 6 + L, -0.4, 0.92, col, 21, 18);
    lab.add('the table', BX - 185, TOP + 164, 0, 1, F.ref('table'), 19, 30);
    /* the sag, bracketed at the left end of the top between the unloaded level and the loaded one */
    if (sag > 5) {
      line(ctx, BX - 100, TOP + sag, BX - 300, TOP + sag, PAL.muted, 2, [8, 8]);
      vbracket(ctx, BX - 286, TOP, TOP + sag, PAL.ink);
    }
    lab.add('sag ' + fmt(sagCm, sagCm < 1 ? 2 : 1) + ' cm', BX - 296, TOP + sag / 2, -1, 0, PAL.ink, 20, 14);
    /* the free-body diagrams */
    [[AX, 'F_hand'], [BX, 'N']].forEach(function (row) {
      const x = row[0];
      dot(ctx, x, FBD, F.ref('dog-food'), true, 9);
      arrow(ctx, x, FBD - 8, x, FBD - 68, col, 5); text(ctx, row[1], x + 22, FBD - 40, col, { weight: 600 });
      arrow(ctx, x, FBD + 8, x, FBD + 68, col, 5); text(ctx, 'w', x + 22, FBD + 40, col, { weight: 600 });
    });
    lab.flush();
    tex(d.readout, `\\kN = \\kwgt = \\km\\kg = (${fmt(M.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${num(w, 1).replace(/,/g, '{,}')}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.12: the skier of Example 4.5. She starts from rest at the top
   of the slope and slides 40 m down it, and the same forces are drawn a
   second time from one point, where each of them has room to be named.
   The idea has a time in it, so the figure runs one slide per loop and
   gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-skier', 920);
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 5, max: 40, step: 0.5, value: 25, unit: '°', dec: 1, onInput: reset, aria: 'angle of the slope' });
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 20, max: 120, step: 1, value: 60, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the skier' });
  const FR = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 250, step: 1, value: 45, unit: 'N', dec: 1, onInput: reset, aria: 'friction' });
  const ro = F.readout(d);
  const SLOPE = 40;                                   /* the length of the slope, in metres */
  const H = 920, PS = 1.05;                           /* PS: the skier's scale, about 135 units tall in her crouch */
  const cy = cycle(() => T(), 1.2);
  function reset() { cy.reset(); }
  const acc = () => (M.v * G * Math.sin(TH.v * RAD) - FR.v) / M.v;
  const moving = () => acc() > 0;
  /* when the friction holds her the slide has no length at all, so the cycle has no time to run
     through and the transport's scrubber goes to zero rather than playing a loop in which
     nothing moves */
  const T = () => (moving() ? Math.sqrt((2 * SLOPE) / acc()) : 0);
  /* the skier, crouched and facing down the slope, her feet on skis that lie along it: (x, y) is
     the point of the slope under her boots, and each boot is set on the slope's own height there */
  function skier(ctx, x, y, th) {
    const t = Math.tan(th), c = F.ref('skier'), ux = -Math.cos(th), uy = Math.sin(th), nx = -uy, ny = ux, lift = 5;
    const end = [x + ux * 62 + nx * lift, y + uy * 62 + ny * lift];
    line(ctx, x - ux * 52 + nx * lift, y - uy * 52 + ny * lift, end[0], end[1], c, 4);
    line(ctx, end[0], end[1], end[0] + ux * 10 + nx * 9, end[1] + uy * 10 + ny * 9, c, 4);
    F.silhouette(ctx, { x, y: y - lift - 2, s: PS, face: -1, pose: 'crouch', color: c, feet: [{ x: 15, y: 15 * t }, { x: -15, y: -15 * t }] });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, a = acc(), tau = cy.now();
    const w = M.v * G, wpar = w * Math.sin(th), wperp = w * Math.cos(th), col = C('force');
    /* the friction that acts: the set value while she slides, and only as much as holds her when it could give more */
    const f = moving() ? FR.v : wpar;
    const dist = moving() ? Math.min(SLOPE, 0.5 * a * tau * tau) : 0, speed = moving() ? a * Math.min(tau, T()) : 0;
    /* the headline first, so that no label is placed under it */
    const rows = topline(ctx, moving()
      ? 'After ' + fmt(Math.min(tau, T()), 2) + ' s she is ' + fmt(dist, 1) + ' m down the slope at ' + fmt(speed, 1)
        + ' m/s, gaining ' + fmt(a, 2) + ' m/s every second'
      : 'Friction can reach ' + num(FR.v, 0) + ' N, more than the ' + num(wpar, 0)
        + ' N of weight along the slope, so she stays where she is');
    const lab = labeller(ctx, H, { headline: rows });
    /* ---------- the slope, rising to the right as the book draws it ---------- */
    const BASE = 560, X0 = 300, run = Math.min(540, 300 / Math.tan(th)), drop = run * Math.tan(th);
    const HIX = X0 + run, HIY = BASE - drop;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath();
    ctx.moveTo(X0, BASE); ctx.lineTo(HIX, HIY); ctx.lineTo(HIX, BASE); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X0, BASE, HIX, BASE, PAL.muted, 3);
    line(ctx, HIX, BASE, HIX, HIY, PAL.muted, 3);
    line(ctx, X0, BASE, HIX, HIY, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = C('angle'); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(X0, BASE, 96, -th, 0); ctx.stroke(); ctx.restore();
    /* the angle is named below the base line, clear of the wedge, which closes
       up at small angles until nothing will fit inside it */
    lab.add('θ = ' + deg(TH.v, 1), X0 + 96 * Math.cos(th / 2), BASE - 96 * Math.sin(th / 2), 0.34, 0.94, C('angle'), 20, 60);
    /* ---------- the skier, at her distance along the slope ---------- */
    const ux = -Math.cos(th), uy = Math.sin(th);                /* down the slope, to the left */
    const nx = -Math.sin(th), ny = -Math.cos(th);               /* out of the slope, up and to the left */
    /* The hill is longer than the 40 m she covers, so her run is laid on the
       middle of it: her skis and the arrow she carries then stay on the slope
       at every angle instead of running off its lower corner. */
    const LS = Math.hypot(run, drop), START = 0.1, SPAN = 0.66;
    const q0 = START * LS, q = (START + SPAN * (dist / SLOPE)) * LS;
    const sx = HIX + ux * q, sy = HIY + uy * q;
    line(ctx, HIX + ux * q0 + nx * 10, HIY + uy * q0 + ny * 10, sx + nx * 10, sy + ny * 10, alpha(PAL.ink, 0.38), 3, [11, 9]);
    dot(ctx, HIX + ux * q0 + nx * 12, HIY + uy * q0 + ny * 12, PAL.ink, false, 10);
    skier(ctx, sx, sy, th);
    lab.place({ l: sx - 90, t: sy - 145, r: sx + 55, b: sy });
    if (moving() && speed > 0.05) {
      const bx = sx + nx * 175, by = sy + ny * 175, LV = Math.min(120, 44 + 2.6 * speed);
      arrow(ctx, bx, by, bx + ux * LV, by + uy * LV, C('velocity'), 5);
      lab.add('v = ' + fmt(speed, 1) + ' m/s', bx + ux * LV, by + uy * LV, ux, uy, C('velocity'), 20);
    }
    /* ---------- the same forces, drawn a second time from one point ---------- */
    /* the weight is always 180 units long; a short piece of the slope is drawn under the point so
       the directions read, and each label is sent off in a direction of its own so that no two of
       the five crowd the same corner */
    const FX = 1090, FY = 390, S = 180 / w;
    text(ctx, 'the forces on the skier, drawn from one point', FX, 126, PAL.muted, { size: 20, align: 'center' });
    lab.block(FX - 250, 106, FX + 250, 146);
    line(ctx, FX - ux * 120 - nx * 18, FY - uy * 120 - ny * 18, FX + ux * 120 - nx * 18, FY + uy * 120 - ny * 18, alpha(PAL.ink, 0.5), 4);
    for (let k = -120; k <= 120; k += 30) lab.place({ l: FX + ux * k - nx * 18 - 4, t: FY + uy * k - ny * 18 - 4, r: FX + ux * k - nx * 18 + 4, b: FY + uy * k - ny * 18 + 4 });
    const hw = [FX, FY + w * S], hpar = [FX + ux * wpar * S, FY + uy * wpar * S];
    const hperp = [FX - nx * wperp * S, FY - ny * wperp * S], hN = [FX + nx * wperp * S, FY + ny * wperp * S];
    const fL = Math.min(200, f * S), hf = [FX - ux * fL, FY - uy * fL];
    /* the parallelogram that resolves the weight: guide lines, under the arrows */
    line(ctx, hpar[0], hpar[1], hw[0], hw[1], alpha(col, 0.5), 2.5, [9, 7]);
    line(ctx, hperp[0], hperp[1], hw[0], hw[1], alpha(col, 0.5), 2.5, [9, 7]);
    arrow(ctx, FX, FY, hw[0], hw[1], col, 5);
    arrow(ctx, FX, FY, hpar[0], hpar[1], col, 5);
    arrow(ctx, FX, FY, hperp[0], hperp[1], col, 5);
    arrow(ctx, FX, FY, hN[0], hN[1], col, 5);
    if (fL > 3) arrow(ctx, FX, FY, hf[0], hf[1], col, 5);
    dot(ctx, FX, FY, F.ref('skier'), true, 8);
    lab.add('w = ' + num(w, 0) + ' N', hw[0], hw[1], -0.5, 0.87, col, 21, 26);
    lab.add('N = ' + num(wperp, 0) + ' N', hN[0], hN[1], 0.3, -0.95, col, 21, 26);
    lab.add('w∥ = ' + num(wpar, 0) + ' N', hpar[0], hpar[1], -1, 0.2, col, 21, 26);
    lab.add('w⊥ = ' + num(wperp, 0) + ' N', hperp[0], hperp[1], 1, 0.1, col, 21, 26);
    if (fL > 3) lab.add('f = ' + num(f, 0) + ' N', hf[0], hf[1], 0.9, -0.45, col, 21, 26);
    /* ---------- the graph: the speed she has reached against the time ---------- */
    /* fixed axes: the 40 m of slope is covered at v = √(2 × 40 × a), and the steepest slope with no
       friction gives a = 9.80 sin 40° = 6.30 m/s², so she can never pass √(80 × 6.30) = 22.4 m/s and
       the speed axis is always 0 to 24 m/s. A slope only just steep enough to start her takes minutes
       to run, so no fixed time axis holds every run: the time axis is set at 0 to 6 s, which holds
       the 4.9 s run the figure opens with, and a slower run walks off the right edge as a pinned
       marker. Neither range changes as a slider moves. */
    const TR = 6, VR = 24;
    const box = { l: 240, r: 1240, t: 690, b: 840 };
    const { X, Y } = axes(ctx, box, [0, TR], [0, VR], {
      xl: 'time t (s)', xc: C('time'), yl: 'speed v (m/s)', yc: C('velocity'), nx: 6, ny: 4,
      fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    if (moving()) {
      const tn = Math.min(tau, T());
      inbox(ctx, box, () => {
        curve(ctx, (t) => a * t, 0, Math.min(T(), TR), X, Y, C('velocity'), 5, 2);
        line(ctx, X(tn), box.b, X(tn), Y(speed), alpha(PAL.ink, 0.5), 2, [5, 7]);
      });
      pinned(ctx, box, X, Y, tn, speed, C('velocity'), fmt(tn, 1) + ' s');
    } else text(ctx, 'she does not start to slide', X(TR / 2), Y(VR / 2), PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    lab.flush();
    const kg = (v) => `(${fmt(v, 1)}\\ \\text{kg})`, gs = `(9.80\\ \\text{m/s}^2)\\sin ${fmt(TH.v, 1)}^\\circ`;
    const note = 'With friction neglected, $\\kapar = \\kg\\sin\\ktheta = ' + fmt(G * Math.sin(th), 2) + '\\ \\text{m/s}^2$ for a skier of any mass.';
    if (moving()) ro.set(`\\kapar = \\frac{\\km\\kg\\sin\\ktheta - \\kff}{\\km} = \\frac{${kg(M.v)}${gs} - ${fmt(FR.v, 1)}\\ \\text{N}}{${kg(M.v)}} = ${fmt(a, 2)}\\ \\text{m/s}^2`, note, { form: 'slide' });
    else ro.set(`\\kff = \\km\\kg\\sin\\ktheta = ${kg(M.v)}${gs} = ${fmt(wpar, 1)}\\ \\text{N},\\quad \\kapar = 0`, note, { form: 'hold' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 4.13: resolving the weight on an incline. A still picture: the
   two components answer the angle and the mass, and the graph beneath
   follows them across every angle.
===================================================================== */
(function () {
  const d = sim('sim-incline', 780);
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 60, step: 0.5, value: 30, unit: '°', dec: 1, aria: 'angle of the incline' });
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 5, max: 60, step: 1, value: 20, unit: 'kg', dec: 1, aria: 'mass of the object' });
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, w = M.v * G, wpar = w * Math.sin(th), wperp = w * Math.cos(th), col = C('force');
    /* the incline: a right triangle with the angle at its left corner */
    const BASE = 430, X0 = 300, run = th < 0.01 ? 700 : Math.min(700, 280 / Math.tan(th)), rise = run * Math.tan(th);
    const AX = X0, AY = BASE, BX = X0 + run, CY = BASE - rise;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(AX, AY); ctx.lineTo(BX, AY); ctx.lineTo(BX, CY); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, AX, AY, BX, CY, PAL.ink, 4); line(ctx, AX, AY, BX, AY, PAL.muted, 3); line(ctx, BX, AY, BX, CY, PAL.muted, 3);
    angleArc(ctx, AX, AY, 86, -TH.v, 0, deg(TH.v, 1));
    /* the object on the slope, halfway up */
    const ux = Math.cos(th), uy = -Math.sin(th);                /* up the slope */
    const nx = -Math.sin(th), ny = -Math.cos(th);               /* out of the slope */
    const along = run * 0.5 / Math.cos(th);
    const mx = AX + ux * along + nx * 26, my = AY + uy * along + ny * 26;
    ctx.save(); ctx.translate(mx, my); ctx.rotate(-th); block(ctx, 0, 0, 96, 56, F.ref('object')); ctx.restore();
    text(ctx, 'm', mx, my, F.ref('object'), { size: 20, weight: 600, align: 'center' });
    const S = 175 / w;
    fvec(ctx, mx, my, 0, w * S, col, 'w = ' + num(w, 0) + ' N', 20);
    fvec(ctx, mx, my, -ux * wpar * S, -uy * wpar * S, col, 'w∥ = ' + num(wpar, 0) + ' N', 20);
    fvec(ctx, mx, my, -nx * wperp * S, -ny * wperp * S, col, '', 20);
    /* named to the right of its head, clear of the face of the incline it points into */
    text(ctx, 'w⊥ = ' + num(wperp, 0) + ' N', mx - nx * wperp * S + 26, my - ny * wperp * S + 4, col, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    fvec(ctx, mx, my, nx * wperp * S, ny * wperp * S, col, 'N', 20);
    line(ctx, mx - ux * wpar * S, my - uy * wpar * S, mx, my + w * S, PAL.rule, 2, [8, 8]);
    line(ctx, mx - nx * wperp * S, my - ny * wperp * S, mx, my + w * S, PAL.rule, 2, [8, 8]);
    if (TH.v > 4 && TH.v < 50) angleArc(ctx, mx, my, 58, 90 - TH.v, 90, 'θ', 19);   /* on a steep incline this arc runs into the corner's own label */
    /* the graph: the two components against the angle */
    /* fixed axes: the angle slider covers 0° to 60° and the curves are drawn across the whole
       quadrant, so the angle runs 0 to 90°. The heaviest object the mass slider allows, 60 kg, weighs
       60 × 9.80 = 588 N, and no component can be larger than the weight, so the force axis is always
       0 to 600 N, ticked every 150 N, and it never rescales as a slider moves */
    const WR = 600, box = { l: 240, r: 1240, t: 560, b: 700 };
    const { X, Y } = axes(ctx, box, [0, 90], [0, WR], {
      xl: 'angle of the incline θ (°)', xc: C('angle'), yl: 'the two components (N)', yc: col, nx: 6, ny: 4,
      fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    curve(ctx, (t) => w * Math.sin(t * RAD), 0, 90, X, Y, col, 5, 90);
    curve(ctx, (t) => w * Math.cos(t * RAD), 0, 90, X, Y, col, 5, 90);
    const off = (v) => (v > 300 ? 36 : -30);   /* under a curve high in the box, over one low in it, clear of the ticks */
    text(ctx, 'w∥ = mg sin θ', X(70), Y(w * Math.sin(70 * RAD)) + off(w * Math.sin(70 * RAD)), col, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'w⊥ = mg cos θ', X(22), Y(w * Math.cos(22 * RAD)) + off(w * Math.cos(22 * RAD)), col, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, X(TH.v), box.b, X(TH.v), box.t, PAL.ink, 2, [4, 8]);
    dot(ctx, X(TH.v), Y(wpar), col, true, 9); dot(ctx, X(TH.v), Y(wperp), col, false, 9);
    headline(ctx, 'At ' + deg(TH.v, 1) + ' the weight of ' + num(w, 0) + ' N divides into ' + num(wpar, 0)
      + ' N down the slope and ' + num(wperp, 0) + ' N into it');
    readout(d.readout, `\\kwpar = \\kwgt\\sin\\ktheta = \\km\\kg\\sin\\ktheta = (${fmt(M.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)\\sin ${fmt(TH.v, 1)}^\\circ = ${num(wpar, 0)}\\ \\text{N}`,
      'The angle between the weight and its perpendicular component is the angle of the incline itself.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.14: the rope and the hanging mass. Nothing moves: the mass
   hangs at rest, and the tension answers the mass and the gravity it
   hangs in. A spring cut into the rope reads the tension, as the text
   describes.
===================================================================== */
(function () {
  const d = sim('sim-rope', 790);
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 1, max: 20, step: 0.25, value: 5, unit: 'kg', dec: 2, aria: 'mass hanging from the rope' });
  /* the two values the chapter names are ticked on the slider, and the step lands on either exactly;
     they sit so far apart that a thumb settling on the nearer of them would swallow most of the
     slider, so the ticks mark them and nothing is snapped */
  const GG = ctl(d.controls, { label: '\\kg', cls: 'acceleration', min: 1.6, max: 11, step: 0.005, value: 9.8, unit: 'm/s²', dec: 3, aria: 'acceleration due to gravity', detents: [{ v: 1.625, label: 'Moon' }, { v: 9.8, label: 'Earth' }], snap: false });
  function draw() {
    const { ctx } = begin(d.c);
    const T = M.v * GG.v, L = 44 + 66 * (T / 220), col = C('force'), X = 420, stretch = 24 * (T / 220);
    /* the hand that holds the rope, reaching down from the top of the picture: a forearm, a fist
       closed round the rope with its fingers drawn across the front, and the rope leaving the
       bottom of the fist with a spring cut into it above the mass */
    line(ctx, X, 170, X, 300, PAL.ink, 5);
    F.hand(ctx, X, 120, { aim: [0, 1], view: 'back', curl: 0.85, thumb: 'along', s: 1.1, color: F.ref('hand') });
    spring(ctx, X, 300, X, 366 + stretch, 7, 18, PAL.ink, 4);
    line(ctx, X, 366 + stretch, X, 466, PAL.ink, 5);
    block(ctx, X, 524, 170, 116, F.ref('hanging-mass'));
    text(ctx, 'm', X, 524, F.ref('hanging-mass'), { size: 22, weight: 600, align: 'center' });
    /* the rope pulls down on the hand and up on the mass with the same tension */
    fvec(ctx, X - 70, 236, 0, L, col, '');
    text(ctx, 'T, on the hand', X - 88, 236 + L / 2, col, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    fvec(ctx, X - 70, 462, 0, -L, col, '');
    text(ctx, 'T, on the mass', X - 88, 462 - L / 2, col, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    fvec(ctx, X, 582, 0, L + 16, col, 'w = ' + num(T, 1) + ' N');
    text(ctx, 'the spring reads ' + num(T, 1) + ' N', X + 34, 340, C('force'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    /* the free-body diagram of the mass */
    text(ctx, 'the free-body diagram of the mass', 1010, 160, PAL.muted, { size: 20, align: 'center' });
    dot(ctx, 1010, 400, F.ref('hanging-mass'), true, 9);
    fvec(ctx, 1010, 390, 0, -130, col, 'T = ' + num(T, 1) + ' N');
    fvec(ctx, 1010, 410, 0, 130, col, 'w = ' + num(T, 1) + ' N');
    headline(ctx, 'A ' + fmt(M.v, 2) + ' kg mass hangs at rest, so the rope carries ' + num(T, 1) + ' N at every point along it');
    readout(d.readout, `\\kTf = \\kwgt = \\km\\kg = (${fmt(M.v, 2)}\\ \\text{kg})(${fmt(GG.v, 2)}\\ \\text{m/s}^2) = ${num(T, 1)}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.15: tension round corners. A cable runs from a hand over two
   frictionless pulleys to a hanging load, the way a tendon runs round a
   finger joint and a brake cable round the frame of a bicycle. Still:
   the cable is in equilibrium and only its shape answers the sliders.
===================================================================== */
(function () {
  const d = sim('sim-corners', 800);
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 1, max: 20, step: 0.25, value: 5, unit: 'kg', dec: 2, aria: 'mass of the load' });
  /* the corner stops at 60°: past that the second pulley comes down onto the load it carries */
  const PH = ctl(d.controls, { label: '\\text{corner}', cls: 'angle', min: 10, max: 60, step: 1, value: 40, unit: '°', dec: 0, aria: 'angle the cable is turned through' });
  function draw() {
    const { ctx } = begin(d.c);
    const T = M.v * G, col = C('force'), ph = PH.v * RAD;
    const R = 22, P1 = [560, 240], P2 = [P1[0] + 300 * Math.cos(ph), P1[1] + 300 * Math.sin(ph)];
    /* the load always hangs a clear length of cable below the second pulley, whatever the corner */
    const LOADY = Math.max(590, P2[1] + 190), LX = P2[0] + R;
    /* the cable runs round the outside of each pulley: along the top of the first, off it at the
       corner angle, round the right of the second and straight down to the load */
    const n2 = [Math.sin(ph), -Math.cos(ph)];
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
    ctx.moveTo(300, P1[1] - R); ctx.lineTo(P1[0], P1[1] - R);
    ctx.arc(P1[0], P1[1], R, -Math.PI / 2, ph - Math.PI / 2);
    ctx.lineTo(P2[0] + R * n2[0], P2[1] + R * n2[1]);
    ctx.arc(P2[0], P2[1], R, ph - Math.PI / 2, 0);
    ctx.lineTo(LX, LOADY - 46); ctx.stroke(); ctx.restore();
    pulley(ctx, P1[0], P1[1]); pulley(ctx, P2[0], P2[1]);
    F.hand(ctx, 208, P1[1] - R, { aim: [1, 0], view: 'back', curl: 0.85, thumb: 'along', s: 1 });
    block(ctx, LX, LOADY, 140, 92, PAL.ink);
    text(ctx, 'm', LX, LOADY, PAL.ink, { size: 22, weight: 600, align: 'center' });
    fvec(ctx, LX, LOADY + 46, 0, 62, col, '');
    text(ctx, 'w = ' + num(T, 1) + ' N', LX + 18, LOADY + 77, col, { weight: 600, size: 20, align: 'left', bg: PAL.panel });
    /* the same tension along all three segments, drawn at the same length beside the cable */
    tvec(ctx, 380, P1[1] - R, 1, 0, 100, col, 'T = ' + num(T, 1) + ' N', -1, 21, 22);
    const m2 = [P1[0] + R * n2[0] + 270 * Math.cos(ph), P1[1] + R * n2[1] + 270 * Math.sin(ph)];
    tvec(ctx, m2[0], m2[1], -Math.cos(ph), -Math.sin(ph), 100, col, '', 1, 21, 22);
    /* named to the right of its arrow, which stays clear of the label however steep the cable */
    text(ctx, 'T = ' + num(T, 1) + ' N', m2[0] - 50 * Math.cos(ph) + 36 * Math.sin(ph), m2[1] - 50 * Math.sin(ph) - 36 * Math.cos(ph), col, { weight: 600, size: 21, align: 'left', bg: PAL.panel });
    tvec(ctx, LX, LOADY - 62, 0, -1, 76, col, '', -1, 21, 22);
    text(ctx, 'T = ' + num(T, 1) + ' N', LX - 40, LOADY - 100, col, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    angleArc(ctx, P1[0], P1[1], 64, 0, PH.v, deg(PH.v, 0));
    text(ctx, 'the cable is pulled here', 250, P1[1] + 150, PAL.muted, { size: 19, align: 'center' });
    headline(ctx, 'The ' + fmt(M.v, 2) + ' kg load makes a tension of ' + num(T, 1)
      + ' N, and the same ' + num(T, 1) + ' N is carried round both corners to the hand');
    readout(d.readout, `\\kTf = \\km\\kg = (${fmt(M.v, 2)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${num(T, 1)}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.16 + 4.17: the tightrope walker, and the same forces
   projected onto horizontal and vertical axes. He stands still and the
   net force is zero, which is the whole of the argument, so the figure
   is a still picture with a graph of the tension against the sag.
===================================================================== */
(function () {
  const H = 820;
  const d = sim('sim-tightrope', H);
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0.5, max: 30, step: 0.5, value: 5, unit: '°', dec: 1, aria: 'angle the wire sags by' });
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 120, step: 1, value: 70, unit: 'kg', dec: 1, aria: 'mass of the walker' });
  const tension = (thDeg, w) => w / (2 * Math.sin(thDeg * RAD));
  const tx = (s) => s.replace(/,/g, '{,}');
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, w = M.v * G, T = tension(TH.v, w), col = C('force'), c = Math.cos(th), s = Math.sin(th);
    const rows = topline(ctx, 'A ' + fmt(M.v, 1) + ' kg walker sags the wire by ' + deg(TH.v, 1) + ', and each half pulls with '
      + num(T, 0) + ' N, ' + fmt(T / w, 1) + ' times his weight');
    const lab = labeller(ctx, H, { headline: rows });
    /* the scene: two posts, the wire sagging to the walker at its middle */
    const CX = 700, TOPY = 240, half = Math.min(500, 120 / Math.tan(th)), sagY = TOPY + half * Math.tan(th);
    fixed(ctx, CX - half - 40, TOPY - 110, 36, 260); fixed(ctx, CX + half + 4, TOPY - 110, 36, 260);
    lab.place({ l: CX - half - 40, t: TOPY - 110, r: CX - half - 4, b: TOPY + 150 });
    lab.place({ l: CX + half + 4, t: TOPY - 110, r: CX + half + 40, b: TOPY + 150 });
    line(ctx, CX - half, TOPY, CX + half, TOPY, PAL.rule, 2, [10, 10]);
    line(ctx, CX - half, TOPY, CX, sagY, F.ref('wire'), 4); line(ctx, CX, sagY, CX + half, TOPY, F.ref('wire'), 4);
    /* the walker faces the reader, arms out for balance, both feet on the low point of the wire */
    F.silhouette(ctx, { x: CX, y: sagY - 2, s: 0.95, pose: 'stand', color: F.ref('walker'),
      hip: { x: 0, y: -74 }, head: { x: 2, y: -140 }, shoulder: { x: 2, y: -118 }, feet: [{ x: 6, y: -6 * Math.tan(th) }, { x: -6, y: -6 * Math.tan(th) }],
      hands: [{ x: 60, y: -122 }, { x: -56, y: -122 }] });
    lab.place({ l: CX - 30, t: sagY - 150, r: CX + 30, b: sagY });
    const LT = Math.min(280, 80 + 200 * Math.min(1, T / 8000));
    const hL = [CX - LT * c, sagY - LT * s], hR = [CX + LT * c, sagY - LT * s];
    arrow(ctx, CX, sagY, hL[0], hL[1], col, 5); arrow(ctx, CX, sagY, hR[0], hR[1], col, 5);
    arrow(ctx, CX, sagY, CX, sagY + 120, col, 5);
    /* each tension is named on the outside of its half, below the wire */
    lab.beside({ x1: CX, y1: sagY, x2: hL[0], y2: hL[1] }, 'left', 'T_L = ' + num(T, 0) + ' N', col, 20, { offset: 1, gap: 30 });
    lab.beside({ x1: CX, y1: sagY, x2: hR[0], y2: hR[1] }, 'right', 'T_R = ' + num(T, 0) + ' N', col, 20, { offset: 1, gap: 30 });
    lab.add('w = ' + num(w, 0) + ' N', CX, sagY + 120, 0, 1, col, 20, 18);
    angleArc(ctx, CX - half, TOPY, 74, 0, TH.v, deg(TH.v, 1), 19);
    /* the components, as the book's second drawing has them, drawn to one scale: each tension 150
       units long, so each vertical component is 150 sin θ and the weight between them twice that */
    const OX = 380, OY = 620, U = 150;
    line(ctx, OX - U - 30, OY, OX + U + 30, OY, alpha(PAL.ink, 0.35), 2, [10, 10]);
    line(ctx, OX - U * c, OY - U * s, OX - U * c, OY, alpha(col, 0.6), 2.5, [6, 8]);
    line(ctx, OX + U * c, OY - U * s, OX + U * c, OY, alpha(col, 0.6), 2.5, [6, 8]);
    arrow(ctx, OX, OY, OX - U * c, OY - U * s, col, 5);
    arrow(ctx, OX, OY, OX + U * c, OY - U * s, col, 5);
    if (2 * U * s > 4) arrow(ctx, OX, OY, OX, OY + 2 * U * s, col, 5);
    dot(ctx, OX, OY, F.ref('walker'), true, 9);
    lab.place({ l: OX - 12, t: OY - 12, r: OX + 12, b: OY + 12 });
    lab.add('T_L', OX - U * c, OY - U * s, -0.8, -0.6, col, 20, 18);
    lab.add('T_R', OX + U * c, OY - U * s, 0.8, -0.6, col, 20, 18);
    lab.add('w', OX, OY + 2 * U * s, 0, 1, col, 20, 18);
    /* the graph: how the tension runs away as the wire is pulled straight */
    /* fixed axes: the sag slider covers 0.5° to 30°, so the angle runs 0 to 30°. The tension runs
       away without limit as the wire is pulled straight — at half a degree it is already 57 times the
       weight — so no range holds it. The tension axis is fixed at 0 to 6,000 N, which is four times
       the weight of the heaviest walker the slider allows, 120 × 9.80 = 1,176 N, and holds the
       3,935 N the figure opens with; a tighter wire pins its tension at the top edge. Neither range
       changes as a slider moves. */
    const TR = 6000, box = { l: 880, r: 1300, t: 510, b: 700 };
    const { X, Y } = axes(ctx, box, [0, 30], [0, TR], {
      xl: 'sag angle θ (°)', xc: C('angle'), yl: 'tension T (N)', yc: col, nx: 6, ny: 4,
      fx: (v) => fmt(v, 0), fy: (v) => num(v, 0),
    });
    const thMin = Math.asin(Math.min(1, w / (2 * TR))) / RAD;
    inbox(ctx, box, () => {
      curve(ctx, (t) => tension(t, w), Math.max(thMin, 0.2), 30, X, Y, col, 5, 120);
      if (T <= TR) line(ctx, X(TH.v), box.b, X(TH.v), Y(T), PAL.ink, 2, [4, 8]);
    });
    pinned(ctx, box, X, Y, TH.v, T, col, num(T, 0) + ' N');
    lab.flush();
    tex(d.readout, `\\kTf = \\frac{\\kwgt}{2\\sin\\ktheta} = \\frac{${tx(num(w, 0))}\\ \\text{N}}{2\\sin ${fmt(TH.v, 1)}^\\circ} = ${tx(num(T, 0))}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.18: the chain, the car in the mud and the tree, seen from
   above. A push at the middle of a nearly straight connector makes a
   tension far larger than itself. Still: the push is held and the chain
   is in equilibrium under it.
===================================================================== */
(function () {
  const d = sim('sim-chain', 740);
  const FP = ctl(d.controls, { label: '\\kFperp', cls: 'force', min: 100, max: 1500, step: 10, value: 300, unit: 'N', dec: 0, aria: 'force perpendicular to the chain' });
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0.5, max: 15, step: 0.25, value: 2, unit: '°', dec: 2, aria: 'angle of the bent chain' });
  const tension = (thDeg, f) => f / (2 * Math.sin(thDeg * RAD));
  /* a car seen from above, its nose to the right, centred on (x, y) */
  function carTop(ctx, x, y, color) {
    ctx.save(); ctx.fillStyle = color;
    ctx.fillRect(x - 76, y - 60, 34, 14); ctx.fillRect(x - 76, y + 46, 34, 14);
    ctx.fillRect(x + 40, y - 60, 34, 14); ctx.fillRect(x + 40, y + 46, 34, 14);
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(x - 100, y - 40); ctx.lineTo(x + 84, y - 46); ctx.lineTo(x + 104, y - 22);
    ctx.lineTo(x + 104, y + 22); ctx.lineTo(x + 84, y + 46); ctx.lineTo(x - 100, y + 40); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 26, y - 38); ctx.lineTo(x + 30, y - 34); ctx.lineTo(x + 30, y + 34); ctx.lineTo(x - 26, y + 38); ctx.closePath(); ctx.stroke();
    ctx.restore();
  }
  function tree(ctx, x, y, color) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = color; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(x, y, 58, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'tree', x, y + 86, color, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, T = tension(TH.v, FP.v), col = C('force');
    const CARX = 250, TREEX = 1240, LX = CARX + 108, RX = TREEX - 58, MIDX = (LX + RX) / 2, CY = 250;
    const MIDY = CY + ((RX - LX) / 2) * Math.tan(th);
    carTop(ctx, CARX, CY, F.ref('car')); tree(ctx, TREEX, CY, F.ref('tree'));
    text(ctx, 'the car is stuck in the mud', CARX, CY + 104, F.ref('car'), { size: 19, align: 'center' });
    line(ctx, LX, CY, RX, CY, PAL.rule, 2, [10, 10]);
    line(ctx, LX, CY, MIDX, MIDY, PAL.ink, 4); line(ctx, MIDX, MIDY, RX, CY, PAL.ink, 4);
    /* the push at the middle, perpendicular to the chain, and the tension it makes at each end */
    arrow(ctx, MIDX, MIDY - 130, MIDX, MIDY - 16, col, 5);
    text(ctx, 'F⊥ = ' + num(FP.v, 0) + ' N', MIDX + 20, MIDY - 82, col, { weight: 600, size: 21 });
    tvec(ctx, MIDX + (LX - MIDX) * 0.5, MIDY + (CY - MIDY) * 0.5, -Math.cos(th), -Math.sin(th), 150, col, 'T = ' + num(T, 0) + ' N', 1);
    tvec(ctx, MIDX + (RX - MIDX) * 0.5, MIDY + (CY - MIDY) * 0.5, Math.cos(th), -Math.sin(th), 150, col, 'T = ' + num(T, 0) + ' N', 1);
    angleArc(ctx, RX, CY, 112, 180 - TH.v, 180, deg(TH.v, 2), 19);
    /* the graph: the tension against the angle, for the push that is set */
    /* fixed axes: the angle slider covers 0.5° to 15°, so the angle runs 0 to 15°. The tension grows
       without limit as the chain is pulled straight, so no range holds it; the tension axis is fixed
       at 0 to 10,000 N, which is more than six times the largest push the slider allows, 1,500 N, and
       holds the 4,298 N the figure opens with. A straighter chain pins its tension at the top edge,
       and neither range changes as a slider moves. */
    const TR = 10000, box = { l: 240, r: 1240, t: 480, b: 660 };
    const g = axes(ctx, box, [0, 15], [0, TR], {
      xl: 'angle of the chain θ (°)', xc: C('angle'), yl: 'tension T (N)', yc: col, nx: 5, ny: 5,
      fx: (v) => fmt(v, 0), fy: (v) => num(v, 0),
    });
    const thMin = Math.asin(Math.min(1, FP.v / (2 * TR))) / RAD;
    inbox(ctx, box, () => {
      curve(ctx, (t) => tension(t, FP.v), Math.max(thMin, 0.1), 15, g.X, g.Y, col, 5, 120);
      if (T <= TR) line(ctx, g.X(TH.v), box.b, g.X(TH.v), g.Y(T), PAL.ink, 2, [4, 8]);
    });
    pinned(ctx, box, g.X, g.Y, TH.v, T, col, num(T, 0) + ' N');
    headline(ctx, 'A push of ' + num(FP.v, 0) + ' N at ' + deg(TH.v, 2) + ' puts ' + num(T, 0) + ' N on the car, '
      + fmt(T / FP.v, 1) + ' times the push');
    readout(d.readout, `\\kTf = \\frac{\\kFperp}{2\\sin\\ktheta} = \\frac{${num(FP.v, 0).replace(/,/g, '{,}')}\\ \\text{N}}{2\\sin ${fmt(TH.v, 2)}^\\circ} = ${num(T, 0).replace(/,/g, '{,}')}\\ \\text{N}`,
      'At θ = 0 the equation has no answer, which is why no connector is ever exactly straight.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
