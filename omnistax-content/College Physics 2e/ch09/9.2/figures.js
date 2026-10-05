/* Figures for section 9.2 The Second Condition for Equilibrium. Boots against the section's text article.
   Statics has no time in it, so every figure here but the hockey stick is a
   still picture: none of them registers a cycle or carries a transport, and a
   slider's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, fixed, silhouette, label, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }
/* a readout note set once per change of its words, its $…$ typeset under the macros */
function say(note, s) { if (note.dataset.said === s) return; note.dataset.said = s; note.textContent = s; F.renderMath(note); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, RAD = Math.PI / 180, TAU = 2 * Math.PI;
const cosd = (a) => Math.cos(a * RAD), sind = (a) => Math.sin(a * RAD);
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* a number written with the typographic minus, and one that always carries its sign */
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
const plus = (v, d) => { const x = eps(v, d); return (x === 0 ? '' : x < 0 ? '−' : '+') + fmt(Math.abs(x), d); };
/* a signed angle difference in degrees, brought into the range −180 to 180 */
const wrap = (deg) => ((deg + 540) % 360) - 180;
/* the turning a torque produces, drawn as an arc about the pivot with an
   arrowhead at the end the turn runs towards. `mid` is the canvas angle the
   arc is centred on, so the arc goes wherever the scene leaves room. */
function turnArc(ctx, cx, cy, R, ccw, color, mid) {
  const a0 = mid - 0.78, a1 = mid + 0.78;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke(); ctx.restore();
  const a = ccw ? a0 : a1, t = ccw ? a - Math.PI / 2 : a + Math.PI / 2;
  const hx = cx + R * Math.cos(a), hy = cy + R * Math.sin(a);
  arrow(ctx, hx - 30 * Math.cos(t), hy - 30 * Math.sin(t), hx, hy, color, 5);
}
/* the angle between two directions at (x, y): an arc of radius R that starts
   at the canvas angle a0 and sweeps through `deg` degrees, with its label
   beyond the middle of the sweep */
function betweenArc(ctx, x, y, a0, deg, R, color, label) {
  const d = deg * RAD;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x, y, R, a0, a0 + d, d < 0); ctx.stroke(); ctx.restore();
  const m = a0 + d / 2;
  if (label) text(ctx, label, x + (R + 34) * Math.cos(m), y + (R + 34) * Math.sin(m), color, { align: 'center', size: 20, weight: 600, bg: alpha(PAL.panel, 0.8) });
}
/* the foot of the perpendicular dropped from (px, py) onto the line through
   (ax, ay) along the unit direction (ux, uy) */
function foot(px, py, ax, ay, ux, uy) {
  const k = (px - ax) * ux + (py - ay) * uy;
  return { x: ax + k * ux, y: ay + k * uy };
}

/* ---------- sprites, in ink ---------- */
/* a child sitting on a plank at (x, y), facing the way `face` points: the library's seated
   figure, scaled to a child and with the seat rather than the feet on the plank */
function child(ctx, x, y, color, s, face) {
  const k = s * 0.9;
  silhouette(ctx, { x: x - face * 10 * k, y: y + 46 * k, s: k, face, pose: 'sit', color, hands: [{ x: 14, y: -56 }, { x: 8, y: -54 }] });
}
/* the fulcrum a plank is balanced on, its point at (x, y) and h tall */
function fulcrum(ctx, x, y, h, color) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = color || PAL.muted; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x, y + 6); ctx.lineTo(x - h * 0.66, y + h); ctx.lineTo(x + h * 0.66, y + h); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  line(ctx, x - h, y + h, x + h, y + h, PAL.muted, 4);
}

/* =====================================================================
   FIGURE 9.6: the door from overhead. The hinges are at the left, the push
   is applied a chosen distance along the door and in a chosen direction,
   and the line of action, the perpendicular lever arm and the turning it
   produces are all drawn from the hinges. Still: a door held while you
   decide how hard, where and which way to push has no time in it, so the
   figure answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-door', 600);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 60, step: 1, value: 40, unit: 'N', dec: 0, aria: 'the size of the push' });
  const rs = ctl(d.controls, { label: '\\krlev', cls: 'position', min: 0.05, max: 0.9, step: 0.025, value: 0.8, unit: 'm', dec: 3, aria: 'the distance from the hinges to the push' });
  /* The book measures θ between the force and the vector from the point of application
     to the pivot, so it never passes 180° and the slider stops there. Which side of the
     door the force is applied from is a state and not a quantity, so it is a choice:
     panel (a) of the book's figure is the push, and panel (d), the same force the other
     way about, is the pull. */
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 180, step: 5, value: 90, unit: '°', dec: 0, aria: 'the angle between the push and the line back to the hinges',
    specials: [{ at: 0, label: 'along the door' }, { at: 90, label: 'perpendicular' }, { at: 180, label: 'along the door' }] });
  const side = choice(d.controls, { label: '\\text{the force}', options: [{ value: 'push', label: 'push' }, { value: 'pull', label: 'pull' }], value: 'push', aria: 'which way the door is acted on' });
  const { formula, note } = F.readout(d);
  const S = 780, KF = 4.6, HX = 250, HY = 390, LEN = 0.9;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque'), ac = C('angle'), cd = F.ref('door'), ch = F.ref('hinges');
    const r = rs.v, Fv = Fs.v, th = ts.v, sgn = side.value === 'push' ? 1 : -1;
    const px = HX + r * S, py = HY;
    /* a change between push and pull swings the force through to the other side of the door */
    const ssw = side.mix((v) => (v === 'push' ? 1 : -1));
    const ux = cosd(180 - th), uy = -ssw * sind(180 - th);      /* the direction of the push on the canvas */
    const tau = ssw * r * Fv * sind(th), rp = r * Math.abs(sind(th)), fp = foot(HX, HY, px, py, ux, uy);
    /* the wall, the hinges and the door seen from overhead */
    fixed(ctx, 70, HY - 30, 180, 60);
    text(ctx, 'the wall', 128, HY + 50, PAL.muted, { size: 19, align: 'center' });
    dot(ctx, HX + 0.82 * S, HY, cd, true, 5);                                         /* the handle */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = cd; ctx.lineWidth = 4;
    ctx.fillRect(HX, HY - 12, LEN * S, 24); ctx.strokeRect(HX, HY - 12, LEN * S, 24); ctx.restore();
    for (let k = 0; k <= 9; k++) { const x = HX + (k / 10) * S; line(ctx, x, HY + 12, x, HY + 26, PAL.muted, 2); if (k % 2 === 0) text(ctx, fmt(k / 10, 1) + ' m', x, HY + 50, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'the door, seen from overhead', HX + LEN * S, HY + 82, PAL.muted, { size: 19, align: 'right' });
    /* the names step round the door, its ticks, the wall, the bracket and one another at every setting */
    const lab = labeller(ctx, 600, { headline: 1 });
    lab.block(HX, HY - 12, HX + LEN * S, HY + 12);
    lab.block(HX - 30, HY + 36, HX + LEN * S + 30, HY + 94);
    lab.block(70, HY - 30, 250, HY + 60);
    lab.block(HX, HY + 96, Math.max(px, HX + 140), HY + 140);
    if (Math.abs(tau) > 0.005) lab.block(HX - 70, HY + 20, HX + 70, HY + 100);
    /* the line along which the force acts, and the perpendicular lever arm back to the hinges */
    if (Fv > 0) {
      line(ctx, px - 520 * ux, py - 520 * uy, px + 520 * ux, py + 520 * uy, alpha(PAL.ink, 0.35), 2.5, [10, 10]);
      arrow(ctx, px, py, px + Fv * KF * ux, py + Fv * KF * uy, fc, 5);
      /* a force along the door has its name lifted off the door, to the side it is applied from */
      const ly = Math.abs(uy) < 0.5 ? uy - 0.9 * sgn : uy, ll = Math.hypot(ux, ly);
      lab.add('F = ' + fmt(Fv, 0) + ' N', px + Fv * KF * ux, py + Fv * KF * uy, ux / ll, ly / ll, fc, 21, 18);
      if (th > 12 && th < 168) {
        betweenArc(ctx, px, py, Math.PI, sgn * th, 66, ac);
        const m = Math.PI + sgn * th * RAD / 2;
        lab.add('θ = ' + fmt(th, 0) + '°', px + 66 * Math.cos(m), py + 66 * Math.sin(m), Math.cos(m), Math.sin(m), ac, 20, 22);
      } else lab.add('θ = ' + fmt(th, 0) + '°', px, py, 0, -sgn, ac, 20, 40);
      if (rp > 0.012) {
        line(ctx, HX, HY, fp.x, fp.y, pc, 3, [6, 8]);
        lab.beside({ x1: HX, y1: HY, x2: fp.x, y2: fp.y }, fp.y < HY - 1 ? 'right' : 'left', 'r⊥ = ' + fmt(rp, 3) + ' m', pc, 20);
      }
    }
    /* the distance from the hinges to the point of application */
    hbracket(ctx, HX, px, HY + 130, pc, 'r = ' + fmt(r, 3) + ' m');
    dot(ctx, px, py, PAL.ink, true, 9);
    dot(ctx, HX, HY, ch, false, 11);
    lab.add('the hinges', HX, HY, -0.3, -1, ch, 19, 34);
    /* which way the door turns */
    if (Math.abs(tau) > 0.005) { turnArc(ctx, HX, HY, 92, tau > 0, tc, Math.PI / 2); lab.add('τ', HX - 65, HY + 65, -0.7, 0.7, tc, 24, 16); }
    lab.flush();
    const tv = sgn * r * Fv * sind(th);
    const act = sgn > 0 ? 'push' : 'pull';
    headline(ctx, Fv === 0 ? 'With no force on the door there is no torque about the hinges at all.'
      : Math.abs(tv) < 0.005 ? 'The force runs straight along the line to the hinges, so its lever arm is nothing and it makes no torque.'
      : 'A ' + act + ' of ' + fmt(Fv, 0) + ' N at ' + fmt(r, 3) + ' m from the hinges, at $\\ktheta = ' + fmt(th, 0) + '^\\circ$, makes ' + fmt(Math.abs(tv), 1) + ' N·m ' + (tv > 0 ? 'counterclockwise' : 'clockwise') + '.');
    const mi = sgn > 0 ? '' : '\\mk{s}{-}', mj = sgn > 0 ? '' : '\\mk{s2}{-}';
    F.morph(formula, `\\mk{t}{\\ktau} = ${mi}\\mk{r}{\\krlev}\\mk{f}{\\kF}\\mk{a}{\\sin\\ktheta} = ${mj}(\\mk{rn}{${fmt(r, 3)}}\\ \\text{m})(\\mk{fn}{${fmt(Fv, 0)}}\\ \\text{N})\\sin \\mk{an}{${fmt(th, 0)}}^\\circ = \\mk{tn}{${num(tv, 1)}}\\ \\text{N}\\cdot\\text{m}`);
    say(note, Math.abs(tv) < 0.005 || Fv === 0 ? ''
        : `The perpendicular lever arm is $\\krperp = \\krlev\\sin\\ktheta = ${fmt(rp, 3)}\\ \\text{m}$, and $\\ktau = \\krperp\\kF$ gives the same ${fmt(Math.abs(tv), 1)} N·m.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.7: the hockey stick about pivot A and about pivot B, seen from
   overhead as the book draws it. One push at the hand, and a nail that
   slides along the shaft. The book's quarter-circle arrow says which way the
   stick would turn, so the stick rocks a few degrees that way about the nail
   and comes back; at rest the arrow is left faint.
===================================================================== */
(function () {
  const H = 770;
  const d = sim('sim-hockey-stick', H);
  const ps = ctl(d.controls, { label: '\\text{the nail}', cls: 'position', min: 0.1, max: 1.3, step: 0.05, value: 0.2, unit: 'm', dec: 2, onInput: reset, aria: 'where the nail is driven, measured from the blade',
    specials: [{ at: 1.1, label: 'at the hand' }] });
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 60, step: 1, value: 30, unit: 'N', dec: 0, onInput: reset, aria: 'the size of the push' });
  const gs = ctl(d.controls, { label: '\\text{the push}', cls: 'angle', min: 0, max: 180, step: 5, value: 160, unit: '°', dec: 0, onInput: reset, aria: 'the direction of the push, measured from the horizontal',
    specials: [{ at: 90, label: 'along the stick' }] });
  const { formula, note } = F.readout(d);
  /* one fixed scale: the shaft runs 1.36 m up from the blade at 300 units a metre, and the
     longest push, 60 N straight up the shaft, ends 216 units above the hand, clear of a
     two-line headline */
  const X = 700, YB = 710, S = 300, HAND = 1.10, TOP = 1.36, KF = 3.6, HW = 13;
  /* the rock: out over 45 % of the loop, a pause, back by its end; ROCK is the swing in radians */
  const T = 4, ROCK = 6 * RAD, cy = F.cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const rock = () => { const k = cy.now() / T; return k < 0.45 ? F.ease.smooth(k / 0.45) : k < 0.6 ? 1 : 1 - F.ease.smooth((k - 0.6) / 0.4); };
  const yOf = (s) => YB - s * S;
  /* the part of the line through (x, y) along (ux, uy) that stays inside the box */
  function clipLine(x, y, ux, uy, l, t, r, b) {
    let lo = -2000, hi = 2000;
    for (const [p, u, a, z] of [[x, ux, l, r], [y, uy, t, b]]) {
      if (Math.abs(u) < 1e-9) continue;
      const k1 = (a - p) / u, k2 = (z - p) / u;
      lo = Math.max(lo, Math.min(k1, k2)); hi = Math.min(hi, Math.max(k1, k2));
    }
    return [x + lo * ux, y + lo * uy, x + hi * ux, y + hi * uy];
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque'), ac = C('angle'), cs = F.ref('stick'), cn = F.ref('nail'), chd = F.ref('hand');
    const p = ps.v, Fv = Fs.v, g = gs.v;
    const hy = yOf(HAND), qy = yOf(p), ux = cosd(g), uy = -sind(g);
    const r = Math.abs(HAND - p), up = qy > hy ? 1 : -1;         /* which way the nail lies from the hand, on the canvas */
    const th = Math.acos(Math.max(-1, Math.min(1, uy * up))) / RAD;
    const tau = ((hy - qy) / S) * Fv * ux;                       /* counterclockwise positive */
    const fp = foot(X, qy, X, hy, ux, uy), rp = Math.hypot(fp.x - X, fp.y - qy) / S;
    const side = ux > 1e-6 ? -1 : 1;                             /* the hand grips from the side the push comes from */
    const tv = eps(tau, 1);
    const rows = headline(ctx, Fv === 0 ? 'With no push on the stick there is no torque about the nail.'
      : r < 0.02 ? 'The nail is driven through the very point the force is applied at, so there is no lever arm and no torque.'
      : tv === 0 ? 'The nail lies on the line along which the force acts, so the lever arm is nothing and the stick does not turn.'
      : 'About the nail ' + fmt(p, 2) + ' m from the blade a push of $\\kF = ' + fmt(Fv, 0) + '\\ \\text{N}$ turns the stick ' + (tau > 0 ? 'counterclockwise' : 'clockwise') + ' with $\\ktau = ' + fmt(Math.abs(tau), 1) + '\\ \\text{N}\\cdot\\text{m}$.');
    const top = rows === 2 ? 100 : 72;
    /* everything fixed to the stick turns with it about the nail; counterclockwise is a negative canvas angle */
    const sw = tv === 0 ? 0 : rock();
    ctx.save(); ctx.beginPath(); ctx.rect(0, top, 1400, H - top); ctx.clip();
    ctx.translate(X, qy); ctx.rotate(-Math.sign(tau) * ROCK * sw); ctx.translate(-X, -qy);
    const lab = labeller(ctx, H, { headline: rows });
    /* the stick lying on the ice: the shaft up from the heel, the blade out to the left */
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineWidth = 3; ctx.strokeStyle = cs; ctx.fillStyle = alpha(cs, 0.2);
    ctx.beginPath(); ctx.moveTo(X - HW, yOf(TOP)); ctx.lineTo(X + HW, yOf(TOP)); ctx.lineTo(X + HW, YB + 16);
    ctx.lineTo(X - 150, YB + 16); ctx.quadraticCurveTo(X - 176, YB + 16, X - 176, YB - 2); ctx.quadraticCurveTo(X - 176, YB - 16, X - 150, YB - 16);
    ctx.lineTo(X - HW, YB - 16); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    lab.block(X - HW, yOf(TOP), X + HW, YB + 16); lab.block(X - 176, YB - 16, X, YB + 16);
    lab.add('the stick, from overhead', X - 176, YB, -1, 0, cs, 19, 26);
    /* the two pivots the book names */
    const at = Math.abs(p - 0.2) < 0.03 ? 'A' : Math.abs(p - 1.25) < 0.03 ? 'B' : '';
    for (const [s, nm] of [[0.2, 'A'], [1.25, 'B']]) { if (nm === at) continue; const y = yOf(s); line(ctx, X + side * HW, y, X + side * (HW + 14), y, PAL.muted, 2); lab.add(nm, X + side * (HW + 14), y, side, 0, PAL.muted, 20, 12); }
    /* the line along which the force acts, clipped below the headline */
    if (Fv > 0) { const [x1, y1, x2, y2] = clipLine(X, hy, ux, uy, 10, top, 1390, H - 10); line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [10, 10]); }
    /* the hand closed round the shaft, the library's hand seen from its back */
    const wx = X + side * 50;
    F.hand(ctx, wx, hy, { aim: [-side, 0], view: 'back', curl: 0.8, thumb: 'along', right: side > 0, s: 0.85, color: chd });
    lab.place({ l: Math.min(X - HW - 8, wx - 14), t: hy - 30, r: Math.max(X + HW + 8, wx + 14), b: hy + 30 });
    lab.add('the hand', wx, hy, side * 0.5, -up, chd, 19, 44);
    /* the distance from the nail to the hand, on the hand's side of the shaft */
    const bx = X + side * 190;
    if (r > 0.02) {
      vbracket(ctx, bx, Math.min(qy, hy), Math.max(qy, hy), pc);
      lab.block(bx - 10, Math.min(qy, hy), bx + 10, Math.max(qy, hy));
      lab.add('r = ' + fmt(r, 2) + ' m', bx, (qy + hy) / 2, side, 0, pc, 20, 26);
    }
    if (Fv > 0) {
      /* the perpendicular lever arm, from the nail to the line of action */
      if (rp > 0.012) {
        line(ctx, X, qy, fp.x, fp.y, pc, 3, [6, 8]);
        lab.beside({ x1: X, y1: qy, x2: fp.x, y2: fp.y }, (fp.x - X) * up > 0 ? 'right' : 'left', 'r⊥', pc, 22);
      }
      /* θ, between the push and the direction from the hand to the nail */
      if (r > 0.02) {
        const a0 = up * Math.PI / 2, w = wrap(Math.atan2(uy, ux) / RAD - a0 / RAD), sw = Math.abs(w) > 179.5 ? 180 * side : w, m = a0 + sw * RAD / 2;
        const R = Math.min(52, 0.7 * r * S);
        betweenArc(ctx, X, hy, a0, sw, R, ac);
        lab.add('θ = ' + fmt(th, 0) + '°', X + R * Math.cos(m), hy + R * Math.sin(m), Math.cos(m), Math.sin(m), ac, 20, 20);
      }
      const hx = X + Fv * KF * ux, hy2 = hy + Fv * KF * uy;
      lab.halo({ x1: X, y1: hy, x2: hx, y2: hy2 }, 12);
      arrow(ctx, X, hy, hx, hy2, fc, 5);
      for (let k = 0; k < 0.85 * Fv * KF; k += 24) lab.block(X + k * ux - 6, hy + k * uy - 6, X + k * ux + 6, hy + k * uy + 6);
      lab.add('F', hx, hy2, ux, uy, fc, 24, 16);
    }
    dot(ctx, X, hy, PAL.ink, true, 6);
    dot(ctx, X, qy, cn, true, 10);
    lab.add(at ? 'the nail, at ' + at : 'the nail', X + side * HW, qy, side, r < 0.3 ? 0.6 * up : -0.5, cn, 19, 16);
    /* the way the stick turns about the nail, on the side away from the hand: faint, and only while the stick is at rest */
    const dir = r < 0.5 ? up : -1, mid = side > 0 ? Math.PI - 0.45 * dir : 0.45 * dir, tx = X + 92 * Math.cos(mid), ty = qy + 92 * Math.sin(mid);
    if (tv !== 0) lab.place({ l: tx - 16, t: ty - 18, r: tx + 16, b: ty + 18 });
    lab.flush();
    ctx.restore();
    if (tv !== 0) F.faded(ctx, 1 - sw, [0, 0], () => {
      F.faded(ctx, 0.4, [0, 0], () => turnArc(ctx, X, qy, 66, tau > 0, tc, mid));
      text(ctx, 'τ', tx, ty, tc, { size: 24, weight: 600, align: 'center' });
    });
    /* r⊥ and F are both positive, so a clockwise turn takes its minus sign in the equation itself */
    const neg = tv < 0, mi = neg ? '\\mk{s}{-}' : '', mj = neg ? '\\mk{s2}{-}' : '';
    F.morph(formula, `\\mk{t}{\\ktau} = ${mi}\\mk{r}{\\krperp}\\mk{f}{\\kF} = ${mj}(\\mk{rn}{${fmt(rp, 2)}}\\ \\text{m})(\\mk{fn}{${fmt(Fv, 0)}}\\ \\text{N}) = \\mk{tn}{${num(tau, 1)}}\\ \\text{N}\\cdot\\text{m}`);
    say(note, tv === 0 ? '' : 'Counterclockwise counts as positive, so a clockwise turn carries a minus sign in front of $\\krperp\\kF$.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 9.8: the two children on the seesaw of Example 9.1. Still: a
   balanced seesaw stands still, and an unbalanced one is drawn tipped
   towards the larger torque, since what the reader is asked to see is
   which way it goes, not how fast it gets there.
===================================================================== */
(function () {
  const d = sim('sim-seesaw', 700);
  const m1 = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 10, max: 50, step: 0.5, value: 26, unit: 'kg', dec: 1, aria: 'the mass of the first child',
    specials: [{ at: () => (m2.v * r2.v) / r1.v, label: 'balanced' }] });
  const r1 = ctl(d.controls, { label: '\\krone', cls: 'position', min: 0.2, max: 2.5, step: 0.05, value: 1.6, unit: 'm', dec: 2, aria: 'the distance from the pivot to the first child',
    specials: [{ at: () => (m2.v * r2.v) / m1.v, label: 'balanced' }] });
  const m2 = ctl(d.controls, { label: '\\kmtwo', cls: 'mass', min: 10, max: 50, step: 0.5, value: 32, unit: 'kg', dec: 1, aria: 'the mass of the second child',
    specials: [{ at: () => (m1.v * r1.v) / r2.v, label: 'balanced' }] });
  const r2 = ctl(d.controls, { label: '\\krtwo', cls: 'position', min: 0.2, max: 2.5, step: 0.05, value: 1.3, unit: 'm', dec: 2, aria: 'the distance from the pivot to the second child',
    specials: [{ at: () => (m1.v * r1.v) / m2.v, label: 'balanced' }] });
  m1.refresh(); r1.refresh(); m2.refresh();
  const FX = 700, FY = 360, S = 228, HALF = 2.6, KW = 0.26;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque');
    const w1 = m1.v * G, w2 = m2.v * G, t1 = r1.v * w1, t2 = -r2.v * w2, net = t1 + t2, Fp = w1 + w2;
    const a = (-7 * net / (Math.abs(net) + 240)) * RAD;                 /* the tilt: a positive net torque puts the first child down */
    const ca = Math.cos(a), sa = Math.sin(a);
    const on = (u) => ({ x: FX + u * S * ca, y: FY + u * S * sa });     /* a point u meters along the plank */
    fulcrum(ctx, FX, FY, 84, F.ref('pivot'));
    const L = on(-HALF), R = on(HALF);
    ctx.save(); ctx.strokeStyle = F.ref('seesaw'); ctx.lineWidth = 16; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(L.x, L.y); ctx.lineTo(R.x, R.y); ctx.stroke(); ctx.restore();
    /* the two children, their weights, and the torque each weight makes about the pivot */
    for (const [u, w, t, nm, face] of [[-r1.v, w1, t1, '1', 1], [r2.v, w2, t2, '2', -1]]) {
      const s = on(u), tip = s.y + 16 + w * KW;
      child(ctx, s.x, s.y - 8, F.ref('child-' + nm), 1.3, face);
      arrow(ctx, s.x, s.y + 16, s.x, tip, fc, 5);
      label(ctx, 'w_' + nm + ' = ' + fmt(w, 0) + ' N', s.x, tip, { side: 'below', color: fc, gap: 22, size: 20 });
      const side = s.x > 1110 ? -1 : s.x < 300 ? 1 : -face;
      label(ctx, 'τ_' + nm + ' = ' + plus(t, 0) + ' N·m', s.x, (s.y + 16 + tip) / 2, { side: side > 0 ? 'right' : 'left', color: tc, gap: 18, size: 20 });
    }
    /* the supporting force at the pivot, which has no lever arm of its own */
    arrow(ctx, FX, FY - 6, FX, FY - 6 - Fp * KW, fc, 5);
    text(ctx, 'F_p = ' + fmt(Fp, 0) + ' N', FX + 16, FY - 22 - Fp * KW, fc, { size: 21, weight: 600 });
    dot(ctx, FX, FY, F.ref('pivot'), true, 9);
    /* the two distances, measured from the pivot */
    hbracket(ctx, on(-r1.v).x, FX, 652, pc, 'r_1 = ' + fmt(r1.v, 2) + ' m');
    hbracket(ctx, FX, on(r2.v).x, 652, pc, 'r_2 = ' + fmt(r2.v, 2) + ' m');
    const bal = (r1.v * m1.v) / m2.v;
    headline(ctx, Math.abs(net) < 1
      ? 'Both torques come to ' + fmt(t1, 0) + ' N·m, one counterclockwise and one clockwise, so the seesaw balances.'
      : 'The torques are ' + fmt(t1, 0) + ' and ' + fmt(-t2, 0) + ' N·m, so a net ' + fmt(Math.abs(net), 0) + ' N·m takes the ' + (net > 0 ? 'first' : 'second') + ' child down.');
    readout(d.readout, `\\text{net}\\;\\ktau = \\ktauone + \\ktautwo = \\krone\\kwone - \\krtwo\\kwtwo = ${fmt(t1, 1)} - ${fmt(Math.abs(t2), 1)} = ${num(net, 1)}\\ \\text{N}\\cdot\\text{m}`,
      `It balances at $\\krtwo = \\krone\\kmone/\\kmtwo = ${fmt(bal, 2)}\\ \\text{m}$, and the pivot holds up $\\kFp = \\kwone + \\kwtwo = ${fmt(Fp, 0)}\\ \\text{N}$.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the net torque about any point. The section says in one sentence
   that if the second condition holds about one pivot it holds about every
   other, and never draws it. Here the torques of the balanced seesaw are
   taken about a point the reader slides along the plank: all three change
   and their sum stays at zero. Still: it answers its sliders and nothing
   else.
===================================================================== */
(function () {
  const d = sim('sim-any-pivot', 770);
  const ds = ctl(d.controls, { label: '\\text{the pivot}', cls: 'position', min: -2.5, max: 2.5, step: 0.05, value: 0, unit: 'm', dec: 2, aria: 'the point the torques are taken about, measured from the fulcrum' });
  const ms = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 20, max: 40, step: 0.5, value: 26, unit: 'kg', dec: 1, aria: 'the mass of the first child' });
  const rs = ctl(d.controls, { label: '\\krone', cls: 'position', min: 0.6, max: 2, step: 0.05, value: 1.6, unit: 'm', dec: 2, aria: 'the distance from the fulcrum to the first child' });
  const M2 = 32, FX = 700, FY = 300, S = 228, HALF = 2.6, KW = 0.2, KT = 0.13;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('position'), tc = C('torque');
    const w1 = ms.v * G, w2 = M2 * G, rr2 = (rs.v * ms.v) / M2, Fp = w1 + w2, p = ds.v;
    const t1 = (rs.v + p) * w1, t2 = -(rr2 - p) * w2, tp = -p * Fp, net = t1 + t2 + tp;
    const X = (u) => FX + u * S;
    fulcrum(ctx, FX, FY, 76, F.ref('pivot'));
    line(ctx, X(-HALF), FY, X(HALF), FY, F.ref('seesaw'), 16);
    /* the three forces on a seesaw that balances by construction */
    for (const [u, w, nm, face] of [[-rs.v, w1, '1', 1], [rr2, w2, '2', -1]]) {
      child(ctx, X(u), FY - 8, F.ref('child-' + nm), 1.3, face);
      arrow(ctx, X(u), FY + 14, X(u), FY + 14 + w * KW, fc, 5);
      const side = X(u) > 1110 ? -1 : X(u) < 300 ? 1 : -face;
      label(ctx, 'w_' + nm + ' = ' + fmt(w, 0) + ' N', X(u), FY + 14 + w * KW, { side: side > 0 ? 'right' : 'left', color: fc, gap: 16, size: 20 });
    }
    arrow(ctx, FX, FY - 6, FX, FY - 6 - Fp * KW, fc, 5);
    text(ctx, 'F_p = ' + fmt(Fp, 0) + ' N', FX + 16, FY - 22 - Fp * KW, fc, { size: 21, weight: 600 });
    /* the point the torques are taken about */
    line(ctx, X(p), FY + 8, X(p), 560, pc, 3, [10, 10]);
    dot(ctx, X(p), FY, pc, true, 11);
    /* the lever arm each force has about that point */
    const arms = [[X(-rs.v), 458, Math.abs(rs.v + p)], [X(rr2), 502, Math.abs(rr2 - p)], [FX, 546, Math.abs(p)]];
    for (const [x, y, v] of arms) if (Math.abs(x - X(p)) > 6) hbracket(ctx, Math.min(x, X(p)), Math.max(x, X(p)), y, pc, fmt(v, 2) + ' m');
    /* the three torques and their sum, as signed bars from a zero line */
    const y0 = 596, bars = [['τ_1', t1], ['τ_2', t2], ['τ_p', tp], ['net τ', net]];
    line(ctx, FX, y0 - 26, FX, y0 + 3 * 40 + 26, PAL.muted, 2);
    bars.forEach(([nm, v], i) => {
      const y = y0 + i * 40, w = eps(v, 1) * KT, last = i === 3;
      ctx.save(); ctx.fillStyle = alpha(tc, last ? 0.9 : 0.6); ctx.fillRect(FX, y - 14, w, 28); ctx.restore();
      line(ctx, FX + w, y - 14, FX + w, y + 14, tc, 3);
      text(ctx, nm, 200, y, last ? PAL.ink : PAL.muted, { size: 20, weight: last ? 600 : 400 });
      text(ctx, num(v, 1) + ' N·m', 290, y, tc, { size: 20, weight: 600 });
    });
    headline(ctx, p === 0
      ? 'About the fulcrum the supporting force has no lever arm, and the two weights make ' + num(t1, 0) + ' and ' + num(t2, 0) + ' N·m.'
      : 'About a point ' + fmt(Math.abs(p), 2) + ' m to the ' + (p > 0 ? 'right' : 'left') + ' of the fulcrum the three torques are ' + num(t1, 0) + ', ' + num(t2, 0) + ' and ' + num(tp, 0) + ' N·m.');
    readout(d.readout, `\\text{net}\\;\\ktau = \\ktauone + \\ktautwo + \\tau_{\\text{p}} = ${num(t1, 1)} ${t2 < 0 ? '-' : '+'} ${fmt(Math.abs(eps(t2, 1)), 1)} ${tp < 0 ? '-' : '+'} ${fmt(Math.abs(eps(tp, 1)), 1)} = ${num(net, 1)}\\ \\text{N}\\cdot\\text{m}`,
null);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (unnumbered): the five forces of the second AP item. A faithful
   copy of the drawing the question refers to: no sliders, and still, since
   the object is anchored and nothing in the question moves.
===================================================================== */
(function () {
  const d = sim('fig-forces', 580);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force');
    /* the anchored object */
    const co = F.ref('object');
    ctx.save(); ctx.fillStyle = alpha(co, 0.14); ctx.strokeStyle = co; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(370, 400);
    ctx.bezierCurveTo(332, 344, 380, 300, 462, 292);
    ctx.bezierCurveTo(560, 282, 662, 252, 760, 236);
    ctx.bezierCurveTo(862, 220, 962, 240, 1002, 292);
    ctx.bezierCurveTo(1034, 334, 1022, 386, 980, 400);
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the point the object is anchored at */
    dot(ctx, 760, 330, PAL.ink, true, 10);
    text(ctx, 'P', 726, 332, PAL.ink, { size: 24, weight: 600, align: 'right' });
    /* the five forces, all of the same magnitude */
    const five = [['A', 690, 118, 690, 250, 690, 92], ['B', 1016, 344, 1156, 344, 1170, 312],
      ['C', 764, 404, 764, 536, 764, 562], ['D', 902, 538, 902, 406, 902, 562],
      ['E', 258, 512, 356, 414, 234, 534]];
    for (const [nm, x1, y1, x2, y2, lx, ly] of five) {
      arrow(ctx, x1, y1, x2, y2, fc, 5);
      text(ctx, nm, lx, ly, fc, { size: 24, weight: 600, align: 'center' });
    }
    headline(ctx, 'Five forces of equal magnitude are applied to an object that is anchored at the point P.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
