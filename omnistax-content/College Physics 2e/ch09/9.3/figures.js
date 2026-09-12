/* Figures for section 9.3 Stability. Boots against the section's text article.
   Statics has no time in it, so every figure here is a still picture that
   answers its sliders: none registers a cycle and none carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const RAD = Math.PI / 180;

/* ---------- shared drawing ---------- */

/* A curved arrow about (cx, cy): the sense in which a torque turns a body. */
function turn(ctx, cx, cy, r, from, to, color) {
  const ccw = to < from;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(cx, cy, r, from, to, ccw); ctx.stroke(); ctx.restore();
  const ax = cx + r * Math.cos(to), ay = cy + r * Math.sin(to), tg = to + (ccw ? -Math.PI / 2 : Math.PI / 2);
  arrow(ctx, ax - 20 * Math.cos(tg), ay - 20 * Math.sin(tg), ax, ay, color, 4);
}

/* A body of weight w standing on a base of half-width a with its center of
   gravity h above the ground, leaned by thDeg about the downhill edge of the
   base. Lengths are in whatever unit the caller uses. Standing exactly
   upright the whole base is in contact, so the pivot is taken at its middle
   and the weight has no lever arm; leaned by any amount at all, the contact
   is the edge alone. The lever arm is positive where the weight acts outside
   the pivot, which is where the torque carries the body over. */
function lean(h, a, thDeg) {
  const th = thDeg * RAD, up = thDeg < 0.05;
  return {
    th, up,
    rp: up ? 0 : h * Math.sin(th) - a * Math.cos(th),
    px: up ? 0 : a,
    cx: a - a * Math.cos(th) + h * Math.sin(th),
    cy: a * Math.sin(th) + h * Math.cos(th),
    crit: Math.atan2(a, h) / RAD,
  };
}

/* The weight at the center of gravity, the normal force at the pivot, the
   line the weight acts along, the lever arm on the ground and the turning
   arc about the pivot. Everything arrives in scene units. */
function leanForces(ctx, o) {
  const { px, cgx, cgy, gy, rpU, topple, rLabel, side, arcR, arc, nSide = 1 } = o;
  line(ctx, cgx, cgy, cgx, gy + 96, PAL.muted, 2, [4, 8]);
  arrow(ctx, cgx, cgy, cgx, cgy + 104, C('force'), 5);
  text(ctx, 'w', cgx + 14, cgy + 76, C('force'), { weight: 600, size: 24 });
  arrow(ctx, px, gy, px, gy - 104, C('force'), 5);
  text(ctx, 'N', px + nSide * 14, gy - 80, C('force'), { weight: 600, size: 24, align: nSide > 0 ? 'left' : 'right' });
  dot(ctx, cgx, cgy, PAL.ink, true, 9);
  text(ctx, 'cg', cgx + 15, cgy - 22, PAL.ink, { size: 17 });
  dot(ctx, px, gy, PAL.ink, true, 7);
  if (Math.abs(rpU) > 3) hbracket(ctx, Math.min(px, cgx), Math.max(px, cgx), gy + 96, C('position'), rLabel);
  if (!arc) return;
  const mid = (side > 0 ? -40 : -140) * RAD, half = 20 * RAD;
  if (topple) turn(ctx, px, gy, arcR, mid - half, mid + half, C('torque'));
  else turn(ctx, px, gy, arcR, mid + half, mid - half, C('torque'));
  text(ctx, 'τ', px + (arcR + 34) * Math.cos(mid), gy + (arcR + 34) * Math.sin(mid), C('torque'), { weight: 600, size: 26, align: 'center' });
}

/* The torque about the pivot against the lean, beside a vertical scene. The
   curve crosses zero at the lean that carries the weight over the edge. */
function tauGraph(ctx, box, thMax, f, thNow, crit, yLabel) {
  let lo = 0, hi = 0;
  for (let i = 0; i <= 80; i++) { const v = f((thMax * i) / 80); lo = Math.min(lo, v); hi = Math.max(hi, v); }
  const n = nice(lo, hi, 4), dec = n.hi - n.lo < 6 ? 1 : 0;
  const { X, Y } = axes(ctx, box, [0, thMax], [n.lo, n.hi], { xl: 'lean θ (º)', yl: yLabel, yc: C('torque'), nx: 5, ny: n.n, fy: (v) => fmt(v, dec) });
  curve(ctx, f, 0, thMax, X, Y, C('torque'), 5, 140);
  if (crit > 0.05 && crit < thMax) {
    line(ctx, X(crit), box.t, X(crit), box.b, PAL.muted, 2, [10, 10]);
    dot(ctx, X(crit), Y(0), C('torque'), false, 10);
    text(ctx, fmt(crit, 1) + 'º', X(crit) + 10, box.t + 20, PAL.muted, { size: 17 });
  }
  dot(ctx, X(thNow), Y(f(thNow)), C('torque'), true, 9);
}

/* ---------- sprites, drawn here because the layer has none of them ---------- */

/* A pencil standing on its flat end, the middle of that end at the origin. */
function pencilFlat(ctx, L, W, color) {
  const t = Math.min(64, L * 0.2), e = Math.min(30, L * 0.1);
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-W / 2, 0); ctx.lineTo(-W / 2, -(L - t)); ctx.lineTo(0, -L); ctx.lineTo(W / 2, -(L - t)); ctx.lineTo(W / 2, 0); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(color, 0.22); ctx.fillRect(-W / 2, -e, W, e);
  ctx.restore();
}
/* The same pencil balanced on its point, the point at the origin. */
function pencilPoint(ctx, L, W, color) {
  const t = Math.min(72, L * 0.24), e = Math.min(30, L * 0.1);
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-W / 2, -t); ctx.lineTo(-W / 2, -L); ctx.lineTo(W / 2, -L); ctx.lineTo(W / 2, -t); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(color, 0.22); ctx.fillRect(-W / 2, -L, W, e);
  ctx.restore();
}
/* A pencil lying on its side, its blunt end at (x, y) on the surface. */
function pencilLying(ctx, x, y, L, W, color) {
  ctx.save(); ctx.translate(x, y); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -W); ctx.lineTo(L - W, -W); ctx.lineTo(L, -W / 2); ctx.lineTo(L - W, 0); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(color, 0.22); ctx.fillRect(0, -W, Math.min(26, L * 0.14), W);
  ctx.restore();
}
/* A person standing, the middle of the base on the ground at the origin.
   Lengths arrive in centimetres and SC scales them; the hip drops and the
   knees bend outward as the center of gravity is lowered. */
function person(ctx, d, h, SC, color) {
  const hip = Math.min(93, h * 0.95), sh = hip + 52, hd = sh + 16, bend = (93 - hip) * SC * 0.5;
  const foot = (d / 2) * SC, Y = (cm) => -cm * SC;
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-foot - 16, 0); ctx.lineTo(-foot + 22, 0);
  ctx.moveTo(foot - 22, 0); ctx.lineTo(foot + 16, 0);
  ctx.moveTo(-foot, 0); ctx.lineTo(-foot - bend, Y(hip / 2)); ctx.lineTo(0, Y(hip));
  ctx.moveTo(foot, 0); ctx.lineTo(foot + bend, Y(hip / 2)); ctx.lineTo(0, Y(hip));
  ctx.moveTo(0, Y(hip)); ctx.lineTo(0, Y(sh));
  ctx.moveTo(0, Y(sh)); ctx.lineTo(-19 * SC, Y(hip + 8));
  ctx.moveTo(0, Y(sh)); ctx.lineTo(19 * SC, Y(hip + 8));
  ctx.stroke();
  ctx.beginPath(); ctx.arc(0, Y(hd), 8.5 * SC, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}
/* A chicken standing on two broad feet, the middle of the base on the ground
   at the origin; the body hangs from the hips, which sit above its cg. */
function chicken(ctx, d, h, SC, color) {
  const foot = (d / 2) * SC, hipY = -(h + 5) * SC, cy = -h * SC, bw = 14 * SC, bh = 9 * SC;
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-foot - 18, 0); ctx.lineTo(-foot + 24, 0);
  ctx.moveTo(foot - 24, 0); ctx.lineTo(foot + 18, 0);
  ctx.moveTo(-foot, 0); ctx.lineTo(0, hipY);
  ctx.moveTo(foot, 0); ctx.lineTo(0, hipY);
  ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-bw * 0.8, cy - bh * 0.3); ctx.lineTo(-bw * 1.8, cy - bh * 1.3); ctx.lineTo(-bw * 1.5, cy + bh * 0.4); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(0, cy, bw, bh, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(bw * 0.45, cy - bh * 0.6); ctx.lineTo(bw * 1.15, cy - bh * 1.7); ctx.lineTo(bw * 0.1, cy - bh * 0.95); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(bw * 0.95, cy - bh * 1.9, bh * 0.45, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(bw * 1.35, cy - bh * 1.95); ctx.lineTo(bw * 1.85, cy - bh * 1.7); ctx.lineTo(bw * 1.35, cy - bh * 1.5); ctx.closePath(); ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 9.10 + 9.11 + 9.12: the pencil standing on its flat end, upright,
   leaned a little and leaned too far. Lean it and the pivot moves to the
   edge of the flat end, so the weight gains a lever arm; the sign of that
   lever arm is the whole of stable equilibrium. Still: the book's three
   drawings differ by a displacement, not by a time.
===================================================================== */
(function () {
  const d = sim('sim-eraser', 640);
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 25, step: 0.5, value: 3, unit: 'º', dec: 1, aria: 'the lean of the pencil' });
  const A = ctl(d.controls, { label: 'a', cls: '', min: 2, max: 40, step: 1, value: 16, unit: 'mm', dec: 0, aria: 'half-width of the flat end' });
  const H = 90, W = 0.060, SC = 2.2, GY = 500, BX = 300;          /* the cg 90 mm up, a 0.060 N pencil */
  function draw() {
    const { ctx } = begin(d.c);
    const g = lean(H, A.v, TH.v), topple = g.rp > 0;
    const px = BX + g.px * SC, cgx = BX + g.cx * SC, cgy = GY - g.cy * SC, tau = W * Math.abs(g.rp);
    fixed(ctx, 80, GY, 540, 28);
    ctx.save(); ctx.translate(px, GY); ctx.rotate(g.th); ctx.translate(-A.v * SC, 0);
    pencilFlat(ctx, 2 * H * SC, 2 * A.v * SC, PAL.ink); ctx.restore();
    leanForces(ctx, { px, cgx, cgy, gy: GY, rpU: (g.cx - g.px) * SC, topple, rLabel: 'r⊥ = ' + fmt(Math.abs(g.rp), 1) + ' mm', side: -1, arcR: 200, arc: !g.up });
    tauGraph(ctx, { l: 820, r: 1340, t: 130, b: 450 }, 25, (t) => W * (H * Math.sin(t * RAD) - A.v * Math.cos(t * RAD)), TH.v, g.crit, 'τ (mN·m)');
    headline(ctx, g.up ? 'standing upright, the weight acts over the middle of the base, so the torque about any point is zero'
      : topple ? 'leaned ' + fmt(TH.v, 1) + 'º, the weight acts ' + fmt(g.rp, 1) + ' mm outside the pivot and its torque carries the pencil over'
        : 'leaned ' + fmt(TH.v, 1) + 'º, the weight acts ' + fmt(-g.rp, 1) + ' mm inside the pivot and its torque brings the pencil back upright');
    readout(d.readout, `\\ktau = \\krperp\\kwgt = (${fmt(Math.abs(g.rp), 1)}\\ \\text{mm})(${fmt(W, 3)}\\ \\text{N}) = ${fmt(tau, 2)}\\ \\text{mN·m}`,
      'The turn reverses at the lean that puts the weight straight over the edge of the base, which is ' + fmt(g.crit, 1) + 'º for a flat end ' + fmt(2 * A.v, 0) + ' mm across and a center of gravity ' + fmt(H, 0) + ' mm up.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.13 + 9.14: the same pencil balanced on its point. Upright it
   satisfies both conditions for equilibrium, and any lean at all puts the
   weight outside the pivot, so the torque drives the lean further. Still.
===================================================================== */
(function () {
  const d = sim('sim-point', 640);
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 20, step: 0.5, value: 3, unit: 'º', dec: 1, aria: 'the lean of the pencil' });
  const L = ctl(d.controls, { label: 'L', cls: '', min: 60, max: 200, step: 5, value: 180, unit: 'mm', dec: 0, aria: 'length of the pencil' });
  const SC = 2.1, GY = 520, BX = 300;
  function draw() {
    const { ctx } = begin(d.c);
    const h = L.v / 2, W = (0.060 * L.v) / 180, g = lean(h, 0, TH.v);     /* a 180 mm pencil weighs 0.060 N */
    const cgx = BX + g.cx * SC, cgy = GY - g.cy * SC, tau = W * g.rp;
    fixed(ctx, 80, GY, 540, 28);
    ctx.save(); ctx.translate(BX, GY); ctx.rotate(g.th);
    pencilPoint(ctx, L.v * SC, 18, PAL.ink); ctx.restore();
    leanForces(ctx, { px: BX, cgx, cgy, gy: GY, rpU: g.cx * SC, topple: true, rLabel: 'r⊥ = ' + fmt(g.rp, 1) + ' mm', side: -1, arcR: 200, arc: !g.up, nSide: -1 });
    tauGraph(ctx, { l: 820, r: 1340, t: 130, b: 450 }, 20, (t) => W * h * Math.sin(t * RAD), TH.v, 0, 'τ (mN·m)');
    headline(ctx, g.up ? 'balanced exactly upright, the weight and the normal force lie along one line and both conditions hold'
      : 'leaned ' + fmt(TH.v, 1) + 'º, the weight already acts ' + fmt(g.rp, 1) + ' mm outside the point and its torque leans the pencil further');
    readout(d.readout, `\\ktau = \\krperp\\kwgt = (${fmt(g.rp, 1)}\\ \\text{mm})(${fmt(W, 3)}\\ \\text{N}) = ${fmt(tau, 2)}\\ \\text{mN·m}`,
      'The point gives the pencil no base to speak of, so nothing is subtracted from the lever arm: the torque is zero at one lean only, and every displacement from it leads away.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.15: the sphere on a flat surface and the round pencil lying on
   its side. Wherever the body is put, the center of gravity stays directly
   above the point of support, so the weight has no lever arm about it and
   the equilibrium does not depend on the position. Still.
===================================================================== */
(function () {
  const d = sim('sim-neutral', 510);
  const X = ctl(d.controls, { label: 'x', cls: '', min: -18, max: 18, step: 1, value: 12, unit: 'cm', dec: 0, aria: 'displacement along the surface' });
  const R = ctl(d.controls, { label: 'r', cls: '', min: 2, max: 8, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'radius of the sphere' });
  const SC = 11, GY = 350, AX = 370, BX = 1050;
  function support(ctx, cx, cy, lx, ly) {
    line(ctx, cx, cy - 46, cx, GY + 64, PAL.muted, 2, [4, 8]);
    arrow(ctx, cx + 18, cy, cx + 18, cy + 112, C('force'), 5);
    text(ctx, 'w', cx + 32, cy + 84, C('force'), { weight: 600, size: 24 });
    arrow(ctx, cx - 18, GY, cx - 18, GY - 112, C('force'), 5);
    text(ctx, 'N', cx - 32, GY - 88, C('force'), { weight: 600, size: 24, align: 'right' });
    dot(ctx, cx, cy, PAL.ink, true, 9);
    text(ctx, 'cg', cx + lx, cy + ly, PAL.ink, { size: 17 });
    dot(ctx, cx, GY, PAL.ink, true, 7);
    text(ctx, 'point of support', cx, GY + 116, PAL.muted, { size: 17, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const dx = X.v * SC, r = R.v * SC, roll = X.v / R.v;
    fixed(ctx, 60, GY, 620, 26); fixed(ctx, 730, GY, 630, 26);
    const sx = AX + dx;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(sx, GY - r, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, sx, GY - r, sx + r * 0.78 * Math.sin(roll), GY - r - r * 0.78 * Math.cos(roll), PAL.muted, 3);
    support(ctx, sx, GY - r, r + 12, 0);
    text(ctx, '(a) a sphere on a flat surface', AX, 118, PAL.ink, { size: 20, weight: 600, align: 'center' });
    const pl = 220, pw = 30;
    pencilLying(ctx, BX + dx - pl / 2, GY, pl, pw, PAL.ink);
    support(ctx, BX + dx, GY - pw / 2, 16, -30);
    text(ctx, '(b) a round pencil lying on its side', BX, 118, PAL.ink, { size: 20, weight: 600, align: 'center' });
    headline(ctx, X.v === 0 ? 'each body rests with its center of gravity straight above the point of support, so the torque about that point is zero'
      : 'moved ' + fmt(Math.abs(X.v), 0) + ' cm along the surface, each body still has its center of gravity straight above the point of support');
    readout(d.readout, '\\ktau = \\krperp\\kwgt = (0)\\,\\kwgt = 0',
      'The point of support travels with the body, so the lever arm of the weight about it is zero in every position. The equilibrium does not depend on where the body is put, and a body that is displaced simply stays where it is left.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a ball on a surface the reader shapes, from a bowl through flat to a
   hill. The three kinds of equilibrium the section defines are the three
   shapes, and the force along the surface is what tells them apart. Still.
===================================================================== */
(function () {
  const d = sim('sim-marble', 540);
  const S = ctl(d.controls, { label: '\\text{shape}', cls: '', min: -1, max: 1, step: 0.05, value: 1, unit: '', dec: 2, aria: 'shape of the surface, a hill at minus one and a bowl at plus one' });
  const X = ctl(d.controls, { label: 'x', cls: '', min: -40, max: 40, step: 1, value: 30, unit: 'cm', dec: 0, aria: 'displacement of the ball' });
  const SC = 11, CX = 700, CY = 330, W = 1.96, RB = 30, FSC = 70;   /* a 0.200 kg ball; 70 units of arrow per newton */
  const yOf = (s, x) => (s * x * x) / 160;                          /* centimetres above the level place */
  const px = (x) => CX + x * SC, py = (y) => CY - y * SC;
  function draw() {
    const { ctx } = begin(d.c);
    const s = S.v, x = X.v, slope = (s * x) / 80, phi = Math.atan(slope), along = -W * Math.sin(phi);
    for (const gsh of [1, 0, -1]) if (Math.abs(gsh - s) > 0.02) curve(ctx, (t) => yOf(gsh, t), -48, 48, px, py, PAL.rule, 2, 80);
    curve(ctx, (t) => yOf(s, t), -48, 48, px, py, PAL.ink, 5, 140);
    text(ctx, 'a bowl', px(-48) - 12, py(yOf(1, -48)), PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'flat', px(-48) - 12, py(0), PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'a hill', px(-48) - 12, py(yOf(-1, -48)), PAL.muted, { size: 17, align: 'right' });
    dot(ctx, px(0), py(0), PAL.muted, false, 8);
    text(ctx, 'the level place', px(0), py(0) + (s >= 0 ? 42 : -36), PAL.muted, { size: 17, align: 'center' });
    const bx = px(x) - RB * Math.sin(phi), by = py(yOf(s, x)) - RB * Math.cos(phi);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(bx, by, RB, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    dot(ctx, bx, by, PAL.ink, true, 6);
    arrow(ctx, bx, by, bx, by + W * FSC, C('force'), 5);
    text(ctx, 'w', bx + 14, by + W * FSC - 26, C('force'), { weight: 600, size: 24 });
    const nl = W * FSC * Math.cos(phi);
    arrow(ctx, bx, by, bx - nl * Math.sin(phi), by - nl * Math.cos(phi), C('force'), 5);
    text(ctx, 'N', bx - nl * Math.sin(phi) - 16, by - nl * Math.cos(phi) - 12, C('force'), { weight: 600, size: 24, align: 'right' });
    const len = Math.abs(along) * FSC, dir = along > 0 ? 1 : -1;
    if (len > 14) {
      arrow(ctx, bx, by, bx + dir * len * Math.cos(phi), by - dir * len * Math.sin(phi), C('force'), 5);
      text(ctx, fmt(Math.abs(along), 2) + ' N', bx + dir * (len + 16) * Math.cos(phi), by - dir * (len + 16) * Math.sin(phi) - 22,
        C('force'), { weight: 600, size: 20, align: dir > 0 ? 'left' : 'right' });
    }
    const kind = s > 0.03 ? 'stable' : s < -0.03 ? 'unstable' : 'neutral';
    headline(ctx, kind === 'neutral' ? 'the surface is flat, so there is no force along it wherever the ball is put and the equilibrium is neutral'
      : kind === 'stable' ? 'the force along the surface, ' + fmt(Math.abs(along), 2) + ' N, points back toward the bottom, so the equilibrium is stable'
        : 'the force along the surface, ' + fmt(Math.abs(along), 2) + ' N, points away from the crest, so the equilibrium is unstable');
    readout(d.readout, `\\kF_{\\parallel} = \\kwgt\\sin\\theta = (${fmt(W, 2)}\\ \\text{N})\\sin(${fmt(Math.abs(phi) / RAD, 1)}^\\circ) = ${fmt(Math.abs(along), 2)}\\ \\text{N}`,
      kind === 'neutral' ? 'A flat surface leaves the weight and the normal force in one line at every position, so the ball has no reason to go anywhere and stays where it is left.'
        : kind === 'stable' ? 'The force grows with the displacement and always points back toward the lowest place, which is what a restoring force is: displace the ball further and it is pushed back harder.'
          : 'The force grows with the displacement and always points away from the crest, so the smallest displacement is enough to send the ball off it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.16: the standing person. The base of support is the distance
   between the feet, and the person is stable only while the weight acts
   inside it. Spreading the feet widens the base and bending the knees
   lowers the center of gravity; the graph reads off what each buys. Still.
===================================================================== */
(function () {
  const d = sim('sim-stance', 660);
  const D = ctl(d.controls, { label: 'd', cls: '', min: 10, max: 90, step: 1, value: 25, unit: 'cm', dec: 0, aria: 'distance between the feet' });
  const HG = ctl(d.controls, { label: 'h', cls: '', min: 60, max: 110, step: 1, value: 100, unit: 'cm', dec: 0, aria: 'height of the center of gravity' });
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 30, step: 0.5, value: 4, unit: 'º', dec: 1, aria: 'the lean of the person' });
  const SC = 2.2, GY = 480, BX = 320, W = 700;                     /* a 700 N adult */
  function draw() {
    const { ctx } = begin(d.c);
    const a = D.v / 2, g = lean(HG.v, a, TH.v), topple = g.rp > 0;
    const px = BX + g.px * SC, cgx = BX + g.cx * SC, cgy = GY - g.cy * SC, tau = (W * g.rp) / 100;
    fixed(ctx, 70, GY, 560, 28);
    ctx.save(); ctx.translate(px, GY); ctx.rotate(g.th); ctx.translate(-a * SC, 0);
    person(ctx, D.v, HG.v, SC, PAL.ink); ctx.restore();
    leanForces(ctx, { px, cgx, cgy, gy: GY, rpU: (g.cx - g.px) * SC, topple, rLabel: 'r⊥ = ' + fmt(Math.abs(g.rp), 1) + ' cm', side: 1, arcR: 190, arc: !g.up });
    hbracket(ctx, BX - a * SC, BX + a * SC, GY + 152, PAL.ink, 'base of support, ' + fmt(D.v, 0) + ' cm');
    tauGraph(ctx, { l: 820, r: 1340, t: 130, b: 460 }, 30, (t) => (W * (HG.v * Math.sin(t * RAD) - a * Math.cos(t * RAD))) / 100, TH.v, g.crit, 'τ (N·m)');
    headline(ctx, g.up ? 'standing straight, the weight acts through the middle of the base of support and neither foot carries more than the other'
      : topple ? 'leaned ' + fmt(TH.v, 1) + 'º, the weight falls outside the base of support and the person goes over'
        : 'leaned ' + fmt(TH.v, 1) + 'º, the weight still falls ' + fmt(-g.rp, 1) + ' cm inside the edge of the base, so the torque brings the person back');
    readout(d.readout, `\\ktau = \\krperp\\kwgt = (${fmt(Math.abs(g.rp) / 100, 3)}\\ \\text{m})(${fmt(W, 0)}\\ \\text{N}) = ${fmt(Math.abs(tau), 1)}\\ \\text{N·m}`,
      'The weight leaves the base of support at a lean of ' + fmt(g.crit, 1) + 'º. Spreading the feet widens the base and bending the knees lowers the center of gravity, and each of them raises that lean.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.17: the chicken, whose center of gravity hangs below the hips
   and between two broad feet. The reading is the person's, with the lean a
   person can take marked on the graph beside it for comparison. Still.
===================================================================== */
(function () {
  const d = sim('sim-chicken', 660);
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 45, step: 0.5, value: 10, unit: 'º', dec: 1, aria: 'the lean of the chicken' });
  const HG = ctl(d.controls, { label: 'h', cls: '', min: 5, max: 28, step: 1, value: 15, unit: 'cm', dec: 0, aria: 'height of the center of gravity' });
  const SC = 6.5, GY = 470, BX = 330, W = 24.5, D = 18;            /* a 2.50 kg chicken on feet 18 cm apart */
  function draw() {
    const { ctx } = begin(d.c);
    const a = D / 2, g = lean(HG.v, a, TH.v), topple = g.rp > 0;
    const px = BX + g.px * SC, cgx = BX + g.cx * SC, cgy = GY - g.cy * SC, tau = (W * g.rp) / 100;
    fixed(ctx, 70, GY, 560, 28);
    ctx.save(); ctx.translate(px, GY); ctx.rotate(g.th); ctx.translate(-a * SC, 0);
    chicken(ctx, D, HG.v, SC, PAL.ink); ctx.restore();
    leanForces(ctx, { px, cgx, cgy, gy: GY, rpU: (g.cx - g.px) * SC, topple, rLabel: 'r⊥ = ' + fmt(Math.abs(g.rp), 1) + ' cm', side: 1, arcR: 235, arc: !g.up });
    hbracket(ctx, BX - a * SC, BX + a * SC, GY + 152, PAL.ink, 'base of support, ' + fmt(D, 0) + ' cm');
    const box = { l: 820, r: 1340, t: 130, b: 460 };
    tauGraph(ctx, box, 45, (t) => (W * (HG.v * Math.sin(t * RAD) - a * Math.cos(t * RAD))) / 100, TH.v, g.crit, 'τ (N·m)');
    const xp = box.l + ((box.r - box.l) * 7.1) / 45;
    line(ctx, xp, box.t, xp, box.b, PAL.rule, 2, [6, 8]);
    text(ctx, 'a person is over by here', xp + 10, box.b - 54, PAL.muted, { size: 17 });
    headline(ctx, g.up ? 'standing straight, the chicken has its weight through the middle of a base of support two broad feet wide'
      : topple ? 'leaned ' + fmt(TH.v, 1) + 'º, the chicken has its weight outside the base of support at last and goes over'
        : 'leaned ' + fmt(TH.v, 1) + 'º, the chicken still has its weight ' + fmt(-g.rp, 1) + ' cm inside the edge of its base, so the torque returns it');
    readout(d.readout, `\\ktau = \\krperp\\kwgt = (${fmt(Math.abs(g.rp) / 100, 3)}\\ \\text{m})(${fmt(W, 1)}\\ \\text{N}) = ${fmt(Math.abs(tau), 2)}\\ \\text{N·m}`,
      'With its center of gravity ' + fmt(HG.v, 0) + ' cm up and its feet ' + fmt(D, 0) + ' cm apart, the chicken can lean ' + fmt(g.crit, 1) + 'º before its weight leaves the base of support, where an adult standing with the feet close together is over at about seven degrees.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
