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
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x, y, r, a0 * RAD, a1 * RAD); ctx.stroke(); ctx.restore();
  const mid = ((a0 + a1) / 2) * RAD;
  text(ctx, label, x + (r + 30) * Math.cos(mid), y + (r + 30) * Math.sin(mid), PAL.ink,
    { size: size || 20, weight: 600, align: 'center', bg: PAL.panel });
}
/* an open hand seen from the side, palm up, cupping whatever rests on it at (x, y), the
   forearm running away to the lower left: the palm, a thumb up the near side and the four
   fingers curling up the far side, all in outline the colour of the page */
function palm(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  /* the forearm */
  ctx.beginPath(); ctx.moveTo(x - 60, y + 26); ctx.lineTo(x - 150, y + 92); ctx.lineTo(x - 130, y + 118); ctx.lineTo(x - 40, y + 56); ctx.closePath(); ctx.fill(); ctx.stroke();
  /* the palm, a shallow cup under the load */
  ctx.beginPath(); ctx.moveTo(x - 72, y + 8); ctx.quadraticCurveTo(x - 76, y + 60, x - 20, y + 62);
  ctx.lineTo(x + 40, y + 62); ctx.quadraticCurveTo(x + 84, y + 60, x + 84, y + 14); ctx.lineTo(x + 84, y + 2); ctx.lineTo(x - 72, y + 2); ctx.closePath(); ctx.fill(); ctx.stroke();
  /* the fingers, curling up the far side, and the thumb up the near side */
  for (let i = 0; i < 4; i++) { const fx = x + 84 - i * 3, fy = y + 4 - i * 2; ctx.beginPath(); ctx.moveTo(fx - 8, fy + 14); ctx.quadraticCurveTo(fx + 16, fy - 4, fx + 4, fy - 30 + i * 6); ctx.stroke(); }
  ctx.beginPath(); ctx.moveTo(x - 66, y + 10); ctx.quadraticCurveTo(x - 82, y - 12, x - 56, y - 30); ctx.stroke();
  ctx.restore();
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
/* a hand closed round a vertical rope, seen from the side: the forearm comes down from the top
   of the picture to a fist whose bottom is at (x, y); the fingers are the three lines across it */
function hand(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - 20, 80); ctx.lineTo(x + 20, 80); ctx.lineTo(x + 24, y - 60); ctx.lineTo(x - 24, y - 60); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x - 30, y - 62); ctx.lineTo(x + 34, y - 62); ctx.quadraticCurveTo(x + 46, y - 30, x + 34, y);
  ctx.lineTo(x - 26, y); ctx.quadraticCurveTo(x - 42, y - 30, x - 30, y - 62); ctx.closePath(); ctx.fill(); ctx.stroke();
  for (let i = 0; i < 3; i++) { const fy = y - 46 + i * 15; ctx.beginPath(); ctx.moveTo(x - 34, fy); ctx.quadraticCurveTo(x + 4, fy + 8, x + 40, fy); ctx.stroke(); }
  ctx.restore();
}
/* a fist closed round a horizontal cable, pulling it to the left: the fist's left face is at (x, y)
   on the cable and the forearm runs down and away to the left */
function fistPull(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - 6, y + 14); ctx.lineTo(x - 96, y + 96); ctx.lineTo(x - 66, y + 118); ctx.lineTo(x + 24, y + 30); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x, y - 26); ctx.lineTo(x + 70, y - 32); ctx.quadraticCurveTo(x + 84, y, x + 70, y + 30); ctx.lineTo(x, y + 26); ctx.closePath(); ctx.fill(); ctx.stroke();
  for (let i = 0; i < 3; i++) { const fx = x + 14 + i * 17; ctx.beginPath(); ctx.moveTo(fx, y - 30); ctx.quadraticCurveTo(fx + 8, y, fx, y + 28); ctx.stroke(); }
  ctx.restore();
}
/* a small pulley at (x, y) */
function pulley(ctx, x, y) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a person standing with their feet at (x, y) */
function walker(ctx, x, y, color) {
  ctx.save(); ctx.translate(x, y);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(0, -132, 15, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(0, -117); ctx.lineTo(0, -58);
  ctx.moveTo(0, -58); ctx.lineTo(-18, 0); ctx.moveTo(0, -58); ctx.lineTo(18, 0);
  ctx.moveTo(0, -106); ctx.lineTo(-52, -134); ctx.moveTo(0, -106); ctx.lineTo(52, -134);
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 4.11: the normal force. A bag of dog food held in a hand, and
   the same bag on a table that sags until its restoring force is as
   large as the weight, with a free-body diagram under each. The picture
   answers its two sliders and nothing moves, so it registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-normal', 860);
  const M = ctl(d.controls, { label: 'm', cls: '', min: 1, max: 30, step: 0.5, value: 10, unit: 'kg', dec: 1, aria: 'mass of the bag' });
  const K = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 2000, max: 40000, step: 500, value: 5000, unit: 'N/m', dec: 0, aria: 'stiffness of the table' });
  const WMAX = 30 * G;
  function draw() {
    const { ctx } = begin(d.c);
    /* the sag is drawn at 14 units to the centimetre, capped so the deepest sag the sliders
       allow, 14.7 cm, still leaves the top on its legs; the bracket carries the true number */
    const w = M.v * G, L = 56 + 96 * (w / WMAX), sagCm = 100 * w / K.v, sag = Math.min(72, sagCm * 14), col = C('force');
    const TOP = 400, AX = 360, BX = 1020;
    text(ctx, '(a) held in the hand', AX, 92, PAL.muted, { size: 20, align: 'center' });
    text(ctx, '(b) resting on the table', BX, 92, PAL.muted, { size: 20, align: 'center' });
    /* (a) the hand holds the sack up: the palm under it, the forearm running off to the left */
    palm(ctx, AX - 6, 396, PAL.ink);
    sack(ctx, AX, 398, PAL.ink);
    fvec(ctx, AX + 110, 304, 0, -L, col, 'F_hand = ' + num(w, 1) + ' N');
    fvec(ctx, AX + 110, 332, 0, L, col, 'w = ' + num(w, 1) + ' N');
    /* (b) the table, seen from the side: two legs and a top that sags under the sack until it
       pushes back with the weight; the dashed line is where the top lies unloaded */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.rect(BX - 196, TOP + 14, 22, 150); ctx.rect(BX + 174, TOP + 14, 22, 150); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(BX - 226, TOP); ctx.quadraticCurveTo(BX, TOP + 2 * sag, BX + 226, TOP);
    ctx.lineTo(BX + 226, TOP + 18); ctx.quadraticCurveTo(BX, TOP + 18 + 2 * sag, BX - 226, TOP + 18); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    line(ctx, BX - 226, TOP, BX + 226, TOP, PAL.muted, 2, [8, 8]);
    text(ctx, 'the table', BX + 150, TOP + 186, PAL.muted, { size: 18, align: 'center' });
    sack(ctx, BX, TOP + sag + 2, PAL.ink);
    fvec(ctx, BX + 110, TOP + sag - 30, 0, -L, col, 'N = ' + num(w, 1) + ' N');
    fvec(ctx, BX + 110, TOP + sag + 6, 0, L, col, 'w = ' + num(w, 1) + ' N');
    /* the sag, bracketed at the left end of the top between the unloaded level and the loaded one */
    line(ctx, BX - 226, TOP, BX - 300, TOP, PAL.muted, 2, [8, 8]);
    if (sag > 5) {
      line(ctx, BX - 100, TOP + sag, BX - 300, TOP + sag, PAL.muted, 2, [8, 8]);
      vbracket(ctx, BX - 286, TOP, TOP + sag, PAL.ink);
    }
    text(ctx, sag > 5 ? 'the top sags ' + fmt(sagCm, 1) + ' cm' : 'the top sags ' + fmt(sagCm, 2) + ' cm, too little to see', BX - 306, TOP + Math.max(sag / 2, 14), PAL.ink, { weight: 600, size: 20, align: 'right', bg: PAL.panel });
    /* the free-body diagrams */
    text(ctx, 'Free-body diagrams', 700, 626, PAL.muted, { size: 20, align: 'center' });
    [[AX, 'F_hand'], [BX, 'N']].forEach(function (row) {
      const x = row[0];
      dot(ctx, x, 740, PAL.ink, true, 9);
      arrow(ctx, x, 732, x, 672, col, 5); text(ctx, row[1], x + 22, 700, col, { weight: 600 });
      arrow(ctx, x, 748, x, 808, col, 5); text(ctx, 'w', x + 22, 780, col, { weight: 600 });
    });
    headline(ctx, 'A bag of ' + fmt(M.v, 1) + ' kg weighs ' + num(w, 1) + ' N, and the table sags '
      + fmt(sagCm, 1) + ' cm until it pushes back with that same ' + num(w, 1) + ' N');
    readout(d.readout, `\\kN = \\kwgt = m\\kg = (${fmt(M.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${num(w, 1)}\\ \\text{N}`,
      'The table sags until its restoring force is as large as the weight of the load, and then the net external force on the load is zero. A stiffer table sags less and still supports exactly the same ' + num(w, 1) + ' N.');
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
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 5, max: 40, step: 0.5, value: 25, unit: '°', dec: 1, onInput: reset, aria: 'angle of the slope' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 20, max: 120, step: 1, value: 60, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the skier' });
  const FR = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 250, step: 1, value: 45, unit: 'N', dec: 1, onInput: reset, aria: 'friction' });
  const SLOPE = 40;                                   /* the length of the slope, in metres */
  const H = 920;
  const cy = cycle(() => T(), 1.2);
  function reset() { cy.reset(); }
  const acc = () => (M.v * G * Math.sin(TH.v * RAD) - FR.v) / M.v;
  const moving = () => acc() > 0.02;
  /* when the friction holds her the slide has no length at all, so the cycle has no time to run
     through and the transport's scrubber goes to zero rather than playing a loop in which
     nothing moves */
  const T = () => (moving() ? Math.sqrt((2 * SLOPE) / acc()) : 0);
  /* a skier on skis at (x, y), the skis lying along the slope */
  /* the skier crouched over her skis, drawn at half again the size of a sprite so that she reads
     as a person: head, a filled torso leaning down the slope, one arm forward with its pole, bent
     legs and the skis lying along the slope */
  function skier(ctx, x, y, ang) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(1.5, 1.5);
    ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.arc(-22, -70, 11, 0, Math.PI * 2); ctx.fill();
    ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(-14, -58); ctx.lineTo(6, -32); ctx.stroke();
    ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-8, -50); ctx.lineTo(-34, -40); ctx.lineTo(-40, -22); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-40, -50); ctx.lineTo(-42, 4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(6, -32); ctx.lineTo(-6, -14); ctx.lineTo(-8, 2); ctx.moveTo(6, -32); ctx.lineTo(10, -14); ctx.lineTo(8, 2); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-46, 4); ctx.lineTo(44, 4); ctx.moveTo(-40, 6); ctx.lineTo(50, 6); ctx.stroke();
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, a = acc(), tau = cy.now();
    const w = M.v * G, wpar = w * Math.sin(th), wperp = w * Math.cos(th), col = C('force');
    const dist = moving() ? Math.min(SLOPE, 0.5 * a * tau * tau) : 0, speed = moving() ? a * Math.min(tau, T()) : 0;
    const lab = labeller(ctx, H);
    /* the headline first, so that no label is placed under it */
    const rows = topline(ctx, moving()
      ? 'After ' + fmt(Math.min(tau, T()), 2) + ' s she is ' + fmt(dist, 1) + ' m down the slope at ' + fmt(speed, 1)
        + ' m/s, and she gains ' + fmt(a, 2) + ' m/s every second'
      : 'Friction of ' + num(FR.v, 0) + ' N is as large as the ' + num(wpar, 0)
        + ' N of weight along the slope, so she stays where she is');
    lab.block(120, 12, 1280, rows === 2 ? 98 : 64);
    /* ---------- the slope, rising to the right as the book draws it ---------- */
    const BASE = 560, X0 = 300, run = Math.min(540, 300 / Math.tan(th)), drop = run * Math.tan(th);
    const HIX = X0 + run, HIY = BASE - drop;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath();
    ctx.moveTo(X0, BASE); ctx.lineTo(HIX, HIY); ctx.lineTo(HIX, BASE); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X0, BASE, HIX, BASE, PAL.muted, 3);
    line(ctx, HIX, BASE, HIX, HIY, PAL.muted, 3);
    line(ctx, X0, BASE, HIX, HIY, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(X0, BASE, 96, -th, 0); ctx.stroke(); ctx.restore();
    /* the angle is named below the base line, clear of the wedge, which closes
       up at small angles until nothing will fit inside it */
    lab.add('θ = ' + deg(TH.v, 1), X0 + 96 * Math.cos(th / 2), BASE - 96 * Math.sin(th / 2), 0.34, 0.94, PAL.ink, 20, 60);
    /* ---------- the skier, at her distance along the slope ---------- */
    const ux = -Math.cos(th), uy = Math.sin(th);                /* down the slope, to the left */
    const nx = -Math.sin(th), ny = -Math.cos(th);               /* out of the slope, up and to the left */
    /* The hill is longer than the 40 m she covers, so her run is laid on the
       middle of it: her skis and the arrow she carries then stay on the slope
       at every angle instead of running off its lower corner. */
    const LS = Math.hypot(run, drop), START = 0.03, SPAN = 0.69;
    const q0 = START * LS, q = (START + SPAN * (dist / SLOPE)) * LS;
    const sx = HIX + ux * q, sy = HIY + uy * q;
    line(ctx, HIX + ux * q0 + nx * 10, HIY + uy * q0 + ny * 10, sx + nx * 10, sy + ny * 10, alpha(PAL.ink, 0.38), 3, [11, 9]);
    dot(ctx, HIX + ux * q0 + nx * 12, HIY + uy * q0 + ny * 12, PAL.ink, false, 10);
    skier(ctx, sx, sy, -th);
    const bx = sx + nx * 70, by = sy + ny * 70;
    if (moving() && speed > 0.05) {
      const LV = Math.min(120, 44 + 2.6 * speed);
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
    const hw = [FX, FY + w * S], hpar = [FX + ux * wpar * S, FY + uy * wpar * S];
    const hperp = [FX - nx * wperp * S, FY - ny * wperp * S], hN = [FX + nx * wperp * S, FY + ny * wperp * S];
    const fL = Math.min(200, FR.v * S), hf = [FX - ux * fL, FY - uy * fL];
    /* the parallelogram that resolves the weight: guide lines, under the arrows */
    line(ctx, hpar[0], hpar[1], hw[0], hw[1], alpha(col, 0.5), 2.5, [9, 7]);
    line(ctx, hperp[0], hperp[1], hw[0], hw[1], alpha(col, 0.5), 2.5, [9, 7]);
    arrow(ctx, FX, FY, hw[0], hw[1], col, 5);
    arrow(ctx, FX, FY, hpar[0], hpar[1], col, 5);
    arrow(ctx, FX, FY, hperp[0], hperp[1], col, 5);
    arrow(ctx, FX, FY, hN[0], hN[1], col, 5);
    if (fL > 3) arrow(ctx, FX, FY, hf[0], hf[1], col, 5);
    dot(ctx, FX, FY, PAL.ink, true, 8);
    lab.add('w = ' + num(w, 0) + ' N', hw[0], hw[1], -0.5, 0.87, col, 21, 26);
    lab.add('N = ' + num(wperp, 0) + ' N', hN[0], hN[1], 0.3, -0.95, col, 21, 26);
    lab.add('w∥ = ' + num(wpar, 0) + ' N', hpar[0], hpar[1], -1, 0.2, col, 21, 26);
    lab.add('w⊥ = ' + num(wperp, 0) + ' N', hperp[0], hperp[1], 1, 0.1, col, 21, 26);
    if (fL > 3) lab.add('f = ' + num(FR.v, 0) + ' N', hf[0], hf[1], 0.9, -0.45, col, 21, 26);
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
    readout(d.readout, `\\kapar = \\frac{m\\kg\\sin\\theta - \\kff}{m} = \\frac{(${fmt(M.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)\\sin ${fmt(TH.v, 1)}^\\circ - ${fmt(FR.v, 1)}\\ \\text{N}}{${fmt(M.v, 1)}\\ \\text{kg}} = ${fmt(Math.max(0, a), 2)}\\ \\text{m/s}^2`,
      'With friction neglected the acceleration would be g sin θ = ' + fmt(G * Math.sin(th), 2)
      + ' m/s², and that value is the same for a skier of any mass. The normal force N = mg cos θ = ' + num(wperp, 0)
      + ' N balances the perpendicular component of the weight, so there is no motion across the slope.');
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
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 60, step: 0.5, value: 30, unit: '°', dec: 1, aria: 'angle of the incline' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 5, max: 60, step: 1, value: 20, unit: 'kg', dec: 1, aria: 'mass of the object' });
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
    ctx.save(); ctx.translate(mx, my); ctx.rotate(-th); block(ctx, 0, 0, 96, 56, PAL.ink); ctx.restore();
    text(ctx, 'm', mx, my, PAL.ink, { size: 20, weight: 600, align: 'center' });
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
      xl: 'angle of the incline θ (°)', xc: PAL.ink, yl: 'the two components (N)', yc: col, nx: 6, ny: 4,
      fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    curve(ctx, (t) => w * Math.sin(t * RAD), 0, 90, X, Y, col, 5, 90);
    curve(ctx, (t) => w * Math.cos(t * RAD), 0, 90, X, Y, col, 5, 90);
    text(ctx, 'w∥ = mg sin θ', X(70), Y(w * Math.sin(70 * RAD)) + 36, col, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'w⊥ = mg cos θ', X(22), Y(w * Math.cos(22 * RAD)) + 36, col, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, X(TH.v), box.b, X(TH.v), box.t, PAL.ink, 2, [4, 8]);
    dot(ctx, X(TH.v), Y(wpar), col, true, 9); dot(ctx, X(TH.v), Y(wperp), col, false, 9);
    headline(ctx, 'At ' + deg(TH.v, 1) + ' the weight of ' + num(w, 0) + ' N divides into ' + num(wpar, 0)
      + ' N down the slope and ' + num(wperp, 0) + ' N into it');
    readout(d.readout, `\\kwpar = \\kwgt\\sin\\theta = m\\kg\\sin\\theta = (${fmt(M.v, 1)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)\\sin ${fmt(TH.v, 1)}^\\circ = ${num(wpar, 0)}\\ \\text{N}`,
      'The other component, w⊥ = mg cos θ = ' + num(wperp, 0) + ' N, presses into the surface, and the normal force is equal in magnitude and opposite in direction to it. The angle between the weight and its perpendicular component is the angle of the incline itself, and at 45° the two components are equal.');
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
  const M = ctl(d.controls, { label: 'm', cls: '', min: 1, max: 20, step: 0.25, value: 5, unit: 'kg', dec: 2, aria: 'mass hanging from the rope' });
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
    hand(ctx, X, 232, PAL.ink);
    line(ctx, X, 250, X, 300, PAL.ink, 5);
    spring(ctx, X, 300, X, 366 + stretch, 7, 18, PAL.ink, 4);
    line(ctx, X, 366 + stretch, X, 466, PAL.ink, 5);
    block(ctx, X, 524, 170, 116, PAL.ink);
    text(ctx, 'm', X, 524, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* the rope pulls down on the hand and up on the mass with the same tension */
    fvec(ctx, X - 70, 236, 0, L, col, '');
    text(ctx, 'T, on the hand', X - 88, 236 + L / 2, col, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    fvec(ctx, X - 70, 462, 0, -L, col, '');
    text(ctx, 'T, on the mass', X - 88, 462 - L / 2, col, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    fvec(ctx, X, 582, 0, L + 16, col, 'w = ' + num(T, 1) + ' N');
    text(ctx, 'the spring reads ' + num(T, 1) + ' N', X + 34, 340, C('force'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    /* the free-body diagram of the mass */
    text(ctx, 'the free-body diagram of the mass', 1010, 160, PAL.muted, { size: 20, align: 'center' });
    dot(ctx, 1010, 400, PAL.ink, true, 9);
    fvec(ctx, 1010, 390, 0, -130, col, 'T = ' + num(T, 1) + ' N');
    fvec(ctx, 1010, 410, 0, 130, col, 'w = ' + num(T, 1) + ' N');
    headline(ctx, 'A ' + fmt(M.v, 2) + ' kg mass hangs at rest, so the rope carries ' + num(T, 1) + ' N at every point along it');
    readout(d.readout, `\\kTf = \\kwgt = m\\kg = (${fmt(M.v, 2)}\\ \\text{kg})(${fmt(GG.v, 2)}\\ \\text{m/s}^2) = ${num(T, 1)}\\ \\text{N}`,
      'The acceleration of the mass is zero, so the tension must balance the weight exactly. The rope pulls up on the mass and down on the hand with the same ' + num(T, 1)
      + ' N, and once the tension is known at one place it is known all along the rope.');
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
  const M = ctl(d.controls, { label: 'm', cls: '', min: 1, max: 20, step: 0.25, value: 5, unit: 'kg', dec: 2, aria: 'mass of the load' });
  /* the corner stops at 60°: past that the second pulley comes down onto the load it carries */
  const PH = ctl(d.controls, { label: '\\text{corner}', cls: '', min: 10, max: 60, step: 1, value: 40, unit: '°', dec: 0, aria: 'angle the cable is turned through' });
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
    fistPull(ctx, 300, P1[1] - R, PAL.ink);
    block(ctx, LX, LOADY, 140, 92, PAL.ink);
    text(ctx, 'm', LX, LOADY, PAL.ink, { size: 22, weight: 600, align: 'center' });
    fvec(ctx, LX, LOADY + 46, 0, 62, col, 'w = ' + num(T, 1) + ' N', 20);
    /* the same tension along all three segments, drawn at the same length beside the cable */
    tvec(ctx, 380, P1[1] - R, 1, 0, 100, col, 'T = ' + num(T, 1) + ' N', -1, 21, 22);
    const m2 = [P1[0] + R * n2[0] + 270 * Math.cos(ph), P1[1] + R * n2[1] + 270 * Math.sin(ph)];
    tvec(ctx, m2[0], m2[1], -Math.cos(ph), -Math.sin(ph), 100, col, 'T = ' + num(T, 1) + ' N', 1, 21, 22);
    tvec(ctx, LX, LOADY - 62, 0, -1, 76, col, '', -1, 21, 22);
    text(ctx, 'T = ' + num(T, 1) + ' N', LX - 40, LOADY - 100, col, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    angleArc(ctx, P1[0], P1[1], 64, 0, PH.v, deg(PH.v, 0));
    text(ctx, 'the cable is pulled here', 250, P1[1] + 150, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'the same corner carries a finger tendon and a bicycle brake cable', 120, 744, PAL.muted, { size: 18 });
    headline(ctx, 'The ' + fmt(M.v, 2) + ' kg load makes a tension of ' + num(T, 1)
      + ' N, and the same ' + num(T, 1) + ' N is carried round both corners to the hand');
    readout(d.readout, `\\kTf = m\\kg = (${fmt(M.v, 2)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${num(T, 1)}\\ \\text{N}`,
      'Where there is no friction the tension is transmitted undiminished: a corner changes the direction of the pull and not its size, so the three arrows are the same length however far the cable is bent.');
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
  const d = sim('sim-tightrope', 820);
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0.5, max: 30, step: 0.5, value: 5, unit: '°', dec: 1, aria: 'angle the wire sags by' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 120, step: 1, value: 70, unit: 'kg', dec: 1, aria: 'mass of the walker' });
  const tension = (thDeg, w) => w / (2 * Math.sin(thDeg * RAD));
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, w = M.v * G, T = tension(TH.v, w), col = C('force');
    /* the scene: two posts, the wire sagging to the walker at its middle */
    const CX = 700, TOPY = 210, half = Math.min(500, 120 / Math.tan(th)), sagY = TOPY + half * Math.tan(th);
    fixed(ctx, CX - half - 40, TOPY - 130, 36, 280); fixed(ctx, CX + half + 4, TOPY - 130, 36, 280);
    line(ctx, CX - half, TOPY, CX, sagY, PAL.ink, 4); line(ctx, CX, sagY, CX + half, TOPY, PAL.ink, 4);
    line(ctx, CX - half, TOPY, CX + half, TOPY, PAL.rule, 2, [10, 10]);
    walker(ctx, CX, sagY, PAL.ink);
    const LT = Math.min(280, 80 + 200 * Math.min(1, T / 8000));
    tvec(ctx, CX, sagY, -Math.cos(th), -Math.sin(th), LT, col, 'T_L = ' + num(T, 0) + ' N', -1, 20);
    tvec(ctx, CX, sagY, Math.cos(th), -Math.sin(th), LT, col, 'T_R = ' + num(T, 0) + ' N', 1, 20);
    fvec(ctx, CX, sagY, 0, 120, col, 'w = ' + num(w, 0) + ' N', 20);
    angleArc(ctx, CX - half, TOPY, 74, 0, TH.v, deg(TH.v, 1), 19);
    /* the components, as the book's second drawing has them */
    text(ctx, 'the same forces on horizontal and vertical axes', 380, 470, PAL.muted, { size: 20, align: 'center' });
    const OX = 380, OY = 620, U = 150;
    dot(ctx, OX, OY, PAL.ink, true, 9);
    tvec(ctx, OX, OY, -Math.cos(th), -Math.sin(th), U, col, 'T_L', -1, 20);
    tvec(ctx, OX, OY, Math.cos(th), -Math.sin(th), U, col, 'T_R', 1, 20);
    fvec(ctx, OX, OY, 0, 120, col, 'w', 20);
    line(ctx, OX - U * Math.cos(th), OY - U * Math.sin(th), OX - U * Math.cos(th), OY, PAL.rule, 2, [6, 8]);
    line(ctx, OX + U * Math.cos(th), OY - U * Math.sin(th), OX + U * Math.cos(th), OY, PAL.rule, 2, [6, 8]);
    arrow(ctx, OX, OY - 8, OX, OY - 8 - Math.max(6, U * Math.sin(th) * 2), alpha(C('force'), 0.5), 4);
    text(ctx, 'the two horizontal components cancel, and the two vertical ones add to the weight', OX, OY + 184, PAL.muted, { size: 19, align: 'center' });
    /* the graph: how the tension runs away as the wire is pulled straight */
    /* fixed axes: the sag slider covers 0.5° to 30°, so the angle runs 0 to 30°. The tension runs
       away without limit as the wire is pulled straight — at half a degree it is already 57 times the
       weight — so no range holds it. The tension axis is fixed at 0 to 6,000 N, which is four times
       the weight of the heaviest walker the slider allows, 120 × 9.80 = 1,176 N, and holds the
       3,935 N the figure opens with; a tighter wire pins its tension at the top edge. Neither range
       changes as a slider moves. */
    const TR = 6000, box = { l: 880, r: 1300, t: 510, b: 700 };
    const { X, Y } = axes(ctx, box, [0, 30], [0, TR], {
      xl: 'sag angle θ (°)', xc: PAL.ink, yl: 'tension T (N)', yc: col, nx: 6, ny: 4,
      fx: (v) => fmt(v, 0), fy: (v) => num(v, 0),
    });
    const thMin = Math.asin(Math.min(1, w / (2 * TR))) / RAD;
    inbox(ctx, box, () => {
      curve(ctx, (t) => tension(t, w), Math.max(thMin, 0.2), 30, X, Y, col, 5, 120);
      if (T <= TR) line(ctx, X(TH.v), box.b, X(TH.v), Y(T), PAL.ink, 2, [4, 8]);
    });
    pinned(ctx, box, X, Y, TH.v, T, col, num(T, 0) + ' N');
    headline(ctx, 'A ' + fmt(M.v, 1) + ' kg walker sags the wire by ' + deg(TH.v, 1) + ', and each half pulls with '
      + num(T, 0) + ' N, ' + fmt(T / w, 1) + ' times his ' + num(w, 0) + ' N weight');
    readout(d.readout, `\\kTf = \\frac{\\kwgt}{2\\sin\\theta} = \\frac{${num(w, 0)}\\ \\text{N}}{2\\sin ${fmt(TH.v, 1)}^\\circ} = ${num(T, 0)}\\ \\text{N}`,
      'The horizontal components of the two tensions are equal and opposite and cancel, so only the vertical components hold him up, and together they come to 2T sin θ = '
      + num(w, 0) + ' N. The straighter the wire, the smaller the share of the tension that points upward, and the larger the tension has to be.');
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
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0.5, max: 15, step: 0.25, value: 2, unit: '°', dec: 2, aria: 'angle of the bent chain' });
  const tension = (thDeg, f) => f / (2 * Math.sin(thDeg * RAD));
  /* a car seen from above, its nose to the right, centred on (x, y) */
  function carTop(ctx, x, y) {
    ctx.save(); ctx.fillStyle = PAL.ink;
    ctx.fillRect(x - 76, y - 60, 34, 14); ctx.fillRect(x - 76, y + 46, 34, 14);
    ctx.fillRect(x + 40, y - 60, 34, 14); ctx.fillRect(x + 40, y + 46, 34, 14);
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(x - 100, y - 40); ctx.lineTo(x + 84, y - 46); ctx.lineTo(x + 104, y - 22);
    ctx.lineTo(x + 104, y + 22); ctx.lineTo(x + 84, y + 46); ctx.lineTo(x - 100, y + 40); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 26, y - 38); ctx.lineTo(x + 30, y - 34); ctx.lineTo(x + 30, y + 34); ctx.lineTo(x - 26, y + 38); ctx.closePath(); ctx.stroke();
    ctx.restore();
  }
  function tree(ctx, x, y) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(x, y, 58, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'tree', x, y + 86, PAL.ink, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, T = tension(TH.v, FP.v), col = C('force');
    const CARX = 250, TREEX = 1240, LX = CARX + 108, RX = TREEX - 58, MIDX = (LX + RX) / 2, CY = 250;
    const MIDY = CY + ((RX - LX) / 2) * Math.tan(th);
    carTop(ctx, CARX, CY); tree(ctx, TREEX, CY);
    text(ctx, 'the car is stuck in the mud', CARX, CY + 104, PAL.muted, { size: 19, align: 'center' });
    line(ctx, LX, CY, RX, CY, PAL.rule, 2, [10, 10]);
    line(ctx, LX, CY, MIDX, MIDY, PAL.ink, 4); line(ctx, MIDX, MIDY, RX, CY, PAL.ink, 4);
    /* the push at the middle, perpendicular to the chain, and the tension it makes at each end */
    arrow(ctx, MIDX, MIDY - 130, MIDX, MIDY - 16, col, 5);
    text(ctx, 'F⊥ = ' + num(FP.v, 0) + ' N', MIDX + 20, MIDY - 82, col, { weight: 600, size: 21 });
    tvec(ctx, MIDX + (LX - MIDX) * 0.5, MIDY + (CY - MIDY) * 0.5, -Math.cos(th), -Math.sin(th), 150, col, 'T = ' + num(T, 0) + ' N', 1);
    tvec(ctx, MIDX + (RX - MIDX) * 0.5, MIDY + (CY - MIDY) * 0.5, Math.cos(th), -Math.sin(th), 150, col, 'T = ' + num(T, 0) + ' N', -1);
    angleArc(ctx, RX, CY, 112, 180 - TH.v, 180, deg(TH.v, 2), 19);
    /* the graph: the tension against the angle, for the push that is set */
    /* fixed axes: the angle slider covers 0.5° to 15°, so the angle runs 0 to 15°. The tension grows
       without limit as the chain is pulled straight, so no range holds it; the tension axis is fixed
       at 0 to 10,000 N, which is more than six times the largest push the slider allows, 1,500 N, and
       holds the 4,298 N the figure opens with. A straighter chain pins its tension at the top edge,
       and neither range changes as a slider moves. */
    const TR = 10000, box = { l: 240, r: 1240, t: 480, b: 660 };
    const g = axes(ctx, box, [0, 15], [0, TR], {
      xl: 'angle of the chain θ (°)', xc: PAL.ink, yl: 'tension T (N)', yc: col, nx: 5, ny: 5,
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
    readout(d.readout, `\\kTf = \\frac{\\kFperp}{2\\sin\\theta} = \\frac{${num(FP.v, 0)}\\ \\text{N}}{2\\sin ${fmt(TH.v, 2)}^\\circ} = ${num(T, 0)}\\ \\text{N}`,
      'Only the small component of each half of the chain that points across its length answers the push, so the tension grows without limit as the chain is pulled straight. At θ = 0 the equation has no answer, which is why no connector is ever exactly straight.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
