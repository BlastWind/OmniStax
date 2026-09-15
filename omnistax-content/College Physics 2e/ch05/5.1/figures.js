/* Figures for section 5.1 Friction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, hover, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, scale, axes, pinned, block } = F;
const sim = (id, H) => F.sim(root, id, H);
const G = 9.80;
const RAD = Math.PI / 180;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* draws inside the graph box, so a line that runs past a fixed range is cut off at the frame
   instead of the frame being stretched to hold it */
const inbox = (ctx, box, f) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); f(); ctx.restore(); };

/* a wooden crate, centred on (x, y): a framed box of horizontal planks with a batten down each end */
function crate(ctx, x, y, w, h) {
  const l = x - w / 2, t = y - h / 2;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.fillRect(l, t, w, h); ctx.strokeRect(l, t, w, h);
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
  ctx.beginPath(); for (let i = 1; i < 4; i++) { ctx.moveTo(l + 4, t + (h * i) / 4); ctx.lineTo(l + w - 4, t + (h * i) / 4); } ctx.stroke();
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(l + 22, t + 2); ctx.lineTo(l + 22, t + h - 2); ctx.moveTo(l + w - 22, t + 2); ctx.lineTo(l + w - 22, t + h - 2); ctx.stroke();
  ctx.restore();
}
/* the bend of a two-segment limb from a to b, lengths l1 and l2, the joint thrown to the side given */
function joint(a, b, l1, l2, side) {
  const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1;
  if (L >= l1 + l2) return { x: a.x + (dx * l1) / (l1 + l2), y: a.y + (dy * l1) / (l1 + l2) };
  const p = (l1 * l1 - l2 * l2 + L * L) / (2 * L), h = Math.sqrt(Math.max(0, l1 * l1 - p * p));
  return { x: a.x + (dx * p) / L - (dy * h * side) / L, y: a.y + (dy * p) / L + (dx * h * side) / L };
}
/* A person drawn as a filled silhouette rather than a stick figure: a round head, a solid torso, and
   limbs as thick rounded strokes that bend at the knee and the elbow. Joints are given in a frame
   about 150 units tall with the feet at the origin and the person facing +x; s scales the drawing
   and face = -1 turns it round. P: hip, shoulder, head, feet[2], hands[2], and optional knee/elbow
   sides. Its limbs are bodies, not lines, so they are drawn wider than the force arrows beside them. */
function silhouette(ctx, x, y, s, face, P) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s * face, s); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const limb = (a, b, l1, l2, side, w) => { const k = joint(a, b, l1, l2, side); ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(k.x, k.y); ctx.lineTo(b.x, b.y); ctx.stroke(); };
  const ks = P.kneeSide ?? -1, es = P.elbowSide ?? 1;
  limb(P.hip, P.feet[1], 38, 38, ks, 9); limb(P.shoulder, P.hands[1], 30, 30, es, 7);
  const tx = P.shoulder.x - P.hip.x, ty = P.shoulder.y - P.hip.y, L = Math.hypot(tx, ty) || 1, nx = -ty / L, ny = tx / L;
  ctx.lineWidth = 10; ctx.beginPath();
  ctx.moveTo(P.hip.x + nx * 7, P.hip.y + ny * 7); ctx.lineTo(P.shoulder.x + nx * 11, P.shoulder.y + ny * 11);
  ctx.lineTo(P.shoulder.x - nx * 11, P.shoulder.y - ny * 11); ctx.lineTo(P.hip.x - nx * 7, P.hip.y - ny * 7); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(P.shoulder.x, P.shoulder.y); ctx.lineTo(P.head.x, P.head.y); ctx.stroke();
  ctx.beginPath(); ctx.arc(P.head.x, P.head.y, 12, 0, Math.PI * 2); ctx.fill();
  limb(P.hip, P.feet[0], 38, 38, ks, 10); limb(P.shoulder, P.hands[0], 30, 30, es, 8);
  ctx.restore();
}
/* a skier at (x, y) on a slope of θ degrees, facing downhill: crouched over her skis with a pole in each hand */
function skier(ctx, x, y, theta) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(theta * RAD);
  line(ctx, -58, 2, 54, 2, PAL.ink, 5);
  const hands = [{ x: 42, y: -68 }, { x: 46, y: -62 }];
  hands.forEach((h) => line(ctx, h.x, h.y, h.x - 44, 0, PAL.muted, 3));
  silhouette(ctx, 0, 0, 1, 1, { hip: { x: -8, y: -58 }, shoulder: { x: 18, y: -98 }, head: { x: 30, y: -116 }, feet: [{ x: 10, y: -2 }, { x: -10, y: -2 }], hands });
  ctx.restore();
}

/* =====================================================================
   FIGURE 5.2 + 5.5: the rough interface. A crate on a concrete floor
   with the push and the friction on it, and the interface under one
   corner magnified, where the two surfaces touch only at their high
   spots and touch over more of themselves as they are pressed together.
   Still: the picture answers its sliders and no clock runs in the idea.
===================================================================== */
(function () {
  const d = sim('sim-interface', 720);
  const MU_S = 0.45, MU_K = 0.30;
  const m = ctl(d.controls, { label: 'm', cls: '', min: 20, max: 200, step: 5, value: 100, unit: 'kg', dec: 0, aria: 'mass of the crate' });
  const Fp = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 800, step: 10, value: 300, unit: 'N', dec: 0, aria: 'applied force' });
  /* the asperities: one fixed profile for each surface, so the picture is the same every frame */
  const LOW = [0.42, 0.78, 0.30, 0.95, 0.55, 0.22, 0.70, 0.38, 0.88, 0.48, 0.26, 0.66, 0.34, 0.80];
  const UP = [0.60, 0.28, 0.84, 0.40, 0.72, 0.34, 0.50, 0.92, 0.24, 0.62, 0.44, 0.86, 0.32, 0.56];
  const bumpy = (hs, u) => {                       /* u runs 0..1 across the panel; a run of rounded peaks */
    const s = u * hs.length - 0.5; let v = 0;
    for (let i = 0; i < hs.length; i++) { const q = (s - i) / 0.95; if (Math.abs(q) < 1) v = Math.max(v, hs[i] * (1 - q * q)); }
    return v;
  };
  const A = 84, NX = 280;
  const low = [], up = [];
  for (let i = 0; i <= NX; i++) { low.push(bumpy(LOW, i / NX) * A); up.push(bumpy(UP, i / NX) * A); }
  let SMAX = 0; for (let i = 0; i <= NX; i++) SMAX = Math.max(SMAX, low[i] + up[i]);
  function draw() {
    const { ctx } = begin(d.c);
    const N = m.v * G, fmax = MU_S * N, fk = MU_K * N;
    const sliding = Fp.v > fmax, fr = sliding ? fk : Fp.v;
    /* the crate on the floor */
    const floorY = 300, cx = 430, cw = 220, ch = 140;
    strip(ctx, 110, 1290, floorY + 16, 30);
    crate(ctx, cx, floorY - ch / 2, cw, ch);
    text(ctx, fmt(m.v, 0) + ' kg', cx, floorY - ch + 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    const pl = 50 + 180 * (Fp.v / 800), fl = 50 + 180 * (fr / 800);
    arrow(ctx, cx - cw / 2 - pl, floorY - 92, cx - cw / 2, floorY - 92, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fp.v, 0) + ' N', cx - cw / 2 - pl, floorY - 120, C('force'), { size: 20, weight: 600 });
    /* friction acts at the surface, so the arrow leaves the crate's bottom corner along the floor */
    arrow(ctx, cx - cw / 2, floorY - 3, cx - cw / 2 - fl, floorY - 3, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 - fl, floorY - 32, C('force'), { size: 20, weight: 600, bg: PAL.panel });
    arrow(ctx, cx + 70, floorY - 2, cx + 70, floorY - 110, C('force'), 5);
    text(ctx, 'N = ' + fmt(N, 0) + ' N', cx + 88, floorY - 24, C('force'), { size: 20, weight: 600, bg: PAL.panel });
    arrow(ctx, cx + cw / 2 + 40, floorY - ch + 20, cx + cw / 2 + 250, floorY - ch + 20, PAL.muted, 3);
    text(ctx, sliding ? 'direction of motion' : 'direction of attempted motion', cx + cw / 2 + 40, floorY - ch - 12, PAL.muted, { size: 17 });
    /* the coefficients the section's own passage gives for this crate on this floor, named on the
       drawing so that the branch between holding and sliding is never decided by a hidden number */
    text(ctx, 'this crate on this concrete floor: μ_s = ' + fmt(MU_S, 2) + ', μ_k = ' + fmt(MU_K, 2), cx + cw / 2 + 40, floorY - 52, PAL.ink, { size: 19, weight: 600 });
    /* the magnified interface under the near corner of the crate */
    const L = 190, R = 1230, top = 450, bot = 690, LOWBASE = 630;
    const corner = cx - cw / 2 + 12;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
    ctx.beginPath(); ctx.arc(corner, floorY, 40, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(corner - 34, floorY + 24); ctx.lineTo(L, top); ctx.moveTo(corner + 34, floorY + 24); ctx.lineTo(R, top); ctx.stroke();
    ctx.setLineDash([]); ctx.strokeRect(L, top, R - L, bot - top); ctx.restore();
    const delta = 36 * (N / (200 * G));              /* pressed harder, the two bodies settle closer together */
    const UPBASE = LOWBASE - SMAX + delta;
    const xAt = (i) => L + ((R - L) * i) / NX;
    const yLow = (i) => LOWBASE - low[i];
    const yUp = (i) => Math.min(UPBASE + up[i], yLow(i));
    ctx.save();
    ctx.fillStyle = alpha(PAL.ink, 0.24);
    ctx.beginPath(); ctx.moveTo(L, bot); for (let i = 0; i <= NX; i++) ctx.lineTo(xAt(i), yLow(i)); ctx.lineTo(R, bot); ctx.closePath(); ctx.fill();
    ctx.fillStyle = alpha(PAL.ink, 0.07);
    ctx.beginPath(); ctx.moveTo(L, top); for (let i = 0; i <= NX; i++) ctx.lineTo(xAt(i), yUp(i)); ctx.lineTo(R, top); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); for (let i = 0; i <= NX; i++) (i ? ctx.lineTo(xAt(i), yLow(i)) : ctx.moveTo(xAt(i), yLow(i))); ctx.stroke();
    ctx.beginPath(); for (let i = 0; i <= NX; i++) (i ? ctx.lineTo(xAt(i), yUp(i)) : ctx.moveTo(xAt(i), yUp(i))); ctx.stroke(); ctx.restore();
    /* the high spots that actually touch */
    let touching = 0, run = false;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 10; ctx.lineCap = 'round';
    for (let i = 0; i <= NX; i++) {
      const hit = UPBASE + up[i] >= yLow(i) - 0.5;
      if (hit && !run) { ctx.beginPath(); ctx.moveTo(xAt(i), yLow(i)); run = true; touching++; }
      else if (hit) ctx.lineTo(xAt(i), yLow(i));
      else if (run) { ctx.stroke(); run = false; }
    }
    if (run) ctx.stroke();
    ctx.restore();
    text(ctx, 'the crate', L + 16, top + 24, PAL.muted, { size: 17 });
    text(ctx, 'the floor', L + 16, bot - 22, PAL.muted, { size: 17 });
    text(ctx, touching === 1 ? 'the surfaces touch at one high spot, drawn heavy' : 'the surfaces touch at ' + touching + ' high spots, drawn heavy',
      R - 16, bot - 22, PAL.ink, { size: 20, weight: 600, align: 'right' });
    headline(ctx, sliding
      ? 'Your ' + fmt(Fp.v, 0) + ' N push has passed the ' + fmt(fmax, 0) + ' N these surfaces can hold, so the crate slides against ' + fmt(fk, 0) + ' N'
      : 'A normal force of ' + fmt(N, 0) + ' N presses the surfaces together, and your ' + fmt(Fp.v, 0) + ' N push is answered by ' + fmt(fr, 0) + ' N of friction');
    readout(d.readout, `\\kN = m\\kg = (${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${fmt(N, 0)}\\ \\text{N},\\qquad \\kfsmax = \\mu_{\\text{s}}\\kN = (${fmt(MU_S, 2)})(${fmt(N, 0)}\\ \\text{N}) = ${fmt(fmax, 0)}\\ \\text{N}`,
      'The coefficients are the ones the passage gives for this crate on this floor, 0.45 while it holds and 0.30 once it slides, so the crate breaks away at ' + fmt(fmax, 0) + ' N and then slides against ' + fmt(fk, 0) + ' N. The friction is parallel to the surface and points against the motion or the attempted motion. Press the two surfaces together harder and the actual area of contact, drawn heavy in the magnified view, grows; the friction grows with it, and the total area of the base never enters.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the push that grows until the crate breaks away. Static friction
   answers the push up to f_s(max), and then the crate slides and the
   friction drops to f_k. Moving: the push grows as the clock runs.
===================================================================== */
(function () {
  const d = sim('sim-breakaway', 780);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 20, max: 200, step: 5, value: 100, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the crate' });
  const us = ctl(d.controls, { label: '\\mu_{\\text{s}}', cls: '', min: 0.05, max: 1, step: 0.05, value: 0.45, unit: '', dec: 2, onInput: reset, aria: 'coefficient of static friction' });
  const uk = ctl(d.controls, { label: '\\mu_{\\text{k}}', cls: '', min: 0.02, max: 0.9, step: 0.02, value: 0.3, unit: '', dec: 2, onInput: reset, aria: 'coefficient of kinetic friction' });
  const T = 6, TB = T * 0.625;                       /* the push reaches f_s(max) five eighths of the way through */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* No pair of surfaces slides against more friction than it holds with, so the coefficient of
     kinetic friction is never taken to be larger than the coefficient of static friction. */
  const held = () => uk.v > us.v;
  const ukv = () => Math.min(uk.v, us.v);
  const Nof = () => m.v * G, Fmax = () => 1.6 * us.v * Nof();
  const Fat = (t) => (Fmax() * t) / T;
  const kOf = () => Fmax() / (T * m.v);
  function xAt(t) {                                  /* how far it has slid: a = (F − f_k)/m, integrated twice */
    if (t <= TB) return 0;
    const s = t - TB;
    return Math.max(0, (kOf() * s * s * s) / 6 + (kOf() * TB * s * s) / 2 - (ukv() * G * s * s) / 2);
  }
  function vAt(t) {
    if (t <= TB) return 0;
    return Math.max(0, (kOf() * (t * t - TB * TB)) / 2 - ukv() * G * (t - TB));
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now();
    const N = Nof(), fmax = us.v * N, fk = ukv() * N, Fn = Fat(t);
    const moving = t > TB, fr = moving ? fk : Fn;
    const cw = 180, ch = 130, floorY = 280;
    /* fixed scene scale: the floor is ruled 0 to 7 m and never rescales. The crate the figure opens
       with slides 5.9 m in the run and so fills it, and a slicker floor carries it past the end,
       where it is held at the last mark and the headline says how far it has really gone. */
    const XMAX = 7, SC = 720 / XMAX, SX = (mtr) => 340 + mtr * SC;
    strip(ctx, 140, 1280, floorY + 16, 30);
    const slid = xAt(t), past = slid > XMAX;
    const cx = SX(Math.min(slid, XMAX));
    crate(ctx, cx, floorY - ch / 2, cw, ch);
    text(ctx, fmt(m.v, 0) + ' kg', cx, floorY - ch + 28, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the arrows are drawn against the same fixed 800 N the graph is ruled to, so a harder push is a
       longer arrow rather than the same arrow beside a larger number */
    const ACAP = 800, pl = 40 + 180 * Math.min(1, Fn / ACAP), fl = 40 + 180 * Math.min(1, fr / ACAP);
    arrow(ctx, cx - cw / 2 - pl, floorY - 84, cx - cw / 2, floorY - 84, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fn, 0) + ' N', cx - cw / 2 - pl, floorY - 112, C('force'), { size: 20, weight: 600 });
    /* friction acts at the surface, so the arrow leaves the crate's bottom corner along the floor */
    arrow(ctx, cx - cw / 2, floorY - 3, cx - cw / 2 - fl, floorY - 3, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 - fl, floorY - 32, C('force'), { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, moving ? 'sliding at ' + fmt(vAt(t), 2) + ' m/s' : 'not moving', 1270, 130, PAL.muted, { size: 20, align: 'right' });
    scale(ctx, SX, 0, XMAX, 1, 340, 'm', 1);
    /* the graph: the friction that answers the push */
    /* fixed axes: both axes are always 0 to 800 N, ticked every 200 N, which is the range the crate
       the figure opens with works in: it holds to 441 N and is pushed to 706 N. A heavier crate on a
       rougher floor climbs past the corner, where the line leaves the frame and the live point is
       pinned at the edge. Neither range changes as a slider moves. */
    const FR = 800, box = { l: 230, r: 1250, t: 420, b: 680 };
    const { X, Y } = axes(ctx, box, [0, FR], [0, FR], { xl: 'the push F (N)', xc: C('force'), yl: 'the friction f (N)', yc: C('force'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    inbox(ctx, box, () => {
      line(ctx, X(0), Y(0), X(fmax), Y(fmax), C('force'), 5);
      line(ctx, X(fmax), Y(fmax), X(fmax), Y(fk), PAL.muted, 3, [10, 10]);
      line(ctx, X(fmax), Y(fk), X(Math.max(FR, Fmax())), Y(fk), C('force'), 5);
      if (fmax <= FR) {
        dot(ctx, X(fmax), Y(fmax), C('force'), false, 11);
        text(ctx, 'f_s(max) = ' + fmt(fmax, 0) + ' N', X(fmax) - 18, Y(fmax) - 26, C('force'), { size: 20, weight: 600, align: 'right' });
      }
      /* under its line, so the live point pinned at the right edge never sits on the name */
      if (fk <= FR) text(ctx, 'f_k = ' + fmt(fk, 0) + ' N', X(FR) - 40, Y(fk) + 28, C('force'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
      line(ctx, X(Fn), box.b, X(Fn), Y(fr), PAL.muted, 2, [4, 8]);
    });
    text(ctx, 'while it is still, the friction is as large as the push', X(0) + 24, Y(FR) + 32, PAL.muted, { size: 17 });
    /* in the bottom corner, the one place the sloping line never crosses when it runs to the top right */
    if (fmax > FR) text(ctx, 'the break comes at ' + fmt(fmax, 0) + ' N, past the right edge of this graph', X(FR) - 16, Y(0) - 26, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    pinned(ctx, box, X, Y, Fn, fr, C('force'), fmt(fr, 0) + ' N');
    headline(ctx, moving
      ? 'The crate broke away at ' + fmt(fmax, 0) + ' N, and the friction on it now stays at ' + fmt(fk, 0) + ' N however hard you push'
      : 'The push has reached ' + fmt(Fn, 0) + ' N and the friction answers with ' + fmt(fr, 0) + ' N, so nothing moves until ' + fmt(fmax, 0) + ' N');
    readout(d.readout, `\\kfsmax = \\mu_{\\text{s}}\\kN = (${fmt(us.v, 2)})(${fmt(N, 0)}\\ \\text{N}) = ${fmt(fmax, 0)}\\ \\text{N}`,
      'Once it is moving the friction is f_k = μ_k N = ' + fmt(fk, 0) + ' N, however hard you push, which is why the crate is easier to keep going than it was to start.'
      + (held() ? ' No pair of surfaces slides against more friction than it holds with, so μ_k is taken here as ' + fmt(ukv(), 2) + ', the value of μ_s, rather than the larger number the slider is set to.' : '')
      + (past ? ' The crate has slid ' + fmt(slid, 1) + ' m, past the ' + XMAX + ' m of floor drawn here.' : ''));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 5.4: the skier on a slope, her weight resolved along the slope
   and into it, and the free-body diagram beside her. Moving: she slides
   down the slope and gains speed, since the friction is less than the
   component of her weight along the slope.
===================================================================== */
(function () {
  const d = sim('sim-skier', 740);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 120, step: 1, value: 62, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the skier' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 5, max: 45, step: 1, value: 25, unit: '°', dec: 0, onInput: reset, aria: 'angle of the slope' });
  const fk = ctl(d.controls, { label: '\\kfk', cls: 'force', min: 0, max: 200, step: 0.5, value: 45, unit: 'N', dec: 1, onInput: reset, aria: 'friction on the skier' });
  const T = 4;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  let hits = [];
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now();
    const a0 = th.v * RAD, cs = Math.cos(a0), sn = Math.sin(a0);
    const w = m.v * G, wp = w * cs, wx = w * sn, a = (wx - fk.v) / m.v, mu = fk.v / wp;
    const steady = Math.abs(a) < 0.02;
    /* She starts from rest where the slope will accelerate her. Where the friction exactly balances
       the weight along the slope she is already gliding, at the 2.0 m/s the constant-velocity case
       of Example 5.4 is about, and where the friction is the larger she is gliding still and slides
       to a stop rather than travelling down at a rate nothing accounts for. */
    const V0 = a > 0.02 ? 0 : 2;
    const tStop = a < -0.02 ? V0 / -a : Infinity;
    const vOf = (q) => Math.max(0, V0 + a * Math.min(q, tStop));
    const sOf = (q) => { const u = Math.min(q, tStop); return V0 * u + 0.5 * a * u * u; };
    const frac = Math.min(1, sOf(t) / Math.max(0.01, sOf(T)));
    const v = vOf(t);
    /* the slope, kept inside the canvas at every angle */
    const bx = 880, by = 540, L = Math.min(560, 270 / sn, 550 / cs);
    const tx = bx - L * cs, ty = by - L * sn;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(bx, by); ctx.lineTo(bx, by + 70); ctx.lineTo(tx, by + 70); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, tx, ty, bx, by, PAL.muted, 3);
    line(ctx, tx, by, bx, by, PAL.rule, 2, [10, 10]);
    text(ctx, fmt(th.v, 0) + '°', bx - 86, by - 18, PAL.ink, { size: 20, weight: 600, align: 'right' });
    const sx = tx + (bx - tx) * frac, sy = ty + (by - ty) * frac;
    /* The forces on her ride the skier down the slope, so each is drawn there as an arrow alone and
       named once, on the free-body diagram beside it, where every value is read off; the pointer
       names any arrow on the scene (rule 26.7). */
    /* the weight and its two parts leave her centre of mass, in her hips; the normal force and the
       friction act where the skis meet the snow, so they leave the skis */
    const loc = (ux, uy) => ({ x: sx + ux * cs - uy * sn, y: sy + ux * sn + uy * cs });
    const cm = loc(4, -72), ski = loc(0, 2), skiB = loc(-34, 2), S = 100 / w;
    const lab = { size: 20, weight: 600, bg: PAL.panel };
    skier(ctx, sx, sy, th.v);
    arrow(ctx, cm.x, cm.y, cm.x, cm.y + w * S, C('force'), 5);
    arrow(ctx, cm.x, cm.y, cm.x - wp * S * sn, cm.y + wp * S * cs, C('force'), 4);
    arrow(ctx, cm.x, cm.y, cm.x + wx * S * cs, cm.y + wx * S * sn, C('force'), 4);
    arrow(ctx, ski.x, ski.y, ski.x + wp * S * sn, ski.y - wp * S * cs, C('force'), 5);
    const fl = Math.max(28, fk.v * S);
    arrow(ctx, skiB.x, skiB.y, skiB.x - fl * cs, skiB.y - fl * sn, C('force'), 5);
    hits = [
      { x: cm.x, y: cm.y + w * S, r: 26, name: 'w, her whole weight' },
      { x: cm.x - wp * S * sn, y: cm.y + wp * S * cs, r: 26, name: 'w perpendicular, the part of the weight into the slope' },
      { x: cm.x + wx * S * cs, y: cm.y + wx * S * sn, r: 26, name: 'w parallel, the part of the weight along the slope' },
      { x: ski.x + wp * S * sn, y: ski.y - wp * S * cs, r: 26, name: 'N, the normal force of the snow' },
      { x: skiB.x - fl * cs, y: skiB.y - fl * sn, r: 26, name: 'f, the friction of the snow on her skis' },
    ];
    if (v > 0.05) {
      const vl = 40 + 80 * Math.min(1, v / 28);
      arrow(ctx, sx + 96 * cs, sy + 96 * sn, sx + (96 + vl) * cs, sy + (96 + vl) * sn, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', sx + (96 + vl) * cs + 14, sy + (96 + vl) * sn + 26, C('velocity'), { ...lab, align: 'center' });
    }
    /* the free-body diagram, beside the slope as the book draws it, and the only place the five
       forces are named and their values written */
    const fx = 1225, fy = 300, S2 = 90 / w;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(1060, 130, 330, 560); ctx.restore();
    text(ctx, 'free-body diagram', 1225, 158, PAL.muted, { size: 17, align: 'center' });
    line(ctx, fx - 100 * cs, fy - 100 * sn, fx + 100 * cs, fy + 100 * sn, PAL.rule, 2, [8, 8]);
    line(ctx, fx - 74 * sn, fy + 74 * cs, fx + 74 * sn, fy - 74 * cs, PAL.rule, 2, [8, 8]);
    dot(ctx, fx, fy, PAL.ink, true, 8);
    const fl2 = Math.max(24, fk.v * S2);
    const FBD = [
      { dx: 0, dy: w * S2, s: 'w', val: fmt(w, 0) + ' N', wid: 4 },
      { dx: -wp * S2 * sn, dy: wp * S2 * cs, s: 'w⊥', val: fmt(wp, 0) + ' N', wid: 3 },
      { dx: wx * S2 * cs, dy: wx * S2 * sn, s: 'w∥', val: fmt(wx, 0) + ' N', wid: 3 },
      { dx: wp * S2 * sn, dy: -wp * S2 * cs, s: 'N', val: fmt(wp, 0) + ' N', wid: 4 },
      { dx: -fl2 * cs, dy: -fl2 * sn, s: 'f', val: fmt(fk.v, 1) + ' N', wid: 3 },
    ];
    /* the names step out along their arrows and away from one another, so a short arrow on a
       shallow slope is still named beside its head rather than on the point */
    const lb = F.labeller(ctx, 740);
    FBD.forEach((q) => {
      arrow(ctx, fx, fy, fx + q.dx, fy + q.dy, C('force'), q.wid);
      const L = Math.hypot(q.dx, q.dy) || 1;
      lb.add(q.s, fx + q.dx, fy + q.dy, q.dx / L, q.dy / L, C('force'), 20, 20);
    });
    lb.flush();
    FBD.forEach((q, i) => {
      text(ctx, q.s, 1090, 470 + i * 36, C('force'), { size: 20, weight: 600 });
      text(ctx, q.val, 1360, 470 + i * 36, C('force'), { size: 20, weight: 600, align: 'right' });
    });
    headline(ctx, steady
      ? 'The ' + fmt(fk.v, 1) + ' N of friction balances the ' + fmt(wx, 0) + ' N along the slope, so she glides on down at a steady ' + fmt(V0, 1) + ' m/s'
      : a > 0
        ? 'On a ' + fmt(th.v, 0) + '° slope her ' + fmt(w, 0) + ' N weight gives ' + fmt(wx, 0) + ' N along the slope and ' + fmt(wp, 0) + ' N into it, so μ_k = ' + fmt(mu, 3)
        : v > 0.05
          ? 'The ' + fmt(fk.v, 1) + ' N of friction is more than the ' + fmt(wx, 0) + ' N along the slope, so the ' + fmt(V0, 1) + ' m/s she was gliding at is falling away'
          : 'The ' + fmt(fk.v, 1) + ' N of friction is more than the ' + fmt(wx, 0) + ' N along the slope, so she has slid to a stop');
    readout(d.readout, `\\mu_{\\text{k}} = \\frac{\\kfk}{\\kN} = \\frac{\\kfk}{m\\kg\\cos\\theta} = \\frac{${fmt(fk.v, 1)}\\ \\text{N}}{(${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(cs, 3)})} = ${fmt(mu, 3)}`,
      'The acceleration down the slope is a = g(sin θ − μ_k cos θ) = ' + fmt(a, 2) + ' m/s², and it is the same for a skier of any mass. She slides at a constant velocity on a slope of tan⁻¹ μ_k = ' + fmt(Math.atan(mu) / RAD, 1) + '°.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 4.5), draw });
})();

/* =====================================================================
   FIGURE 5.6: the tip of a probe dragged across a substrate, leaned
   back by the friction on it, with the lattice behind it left
   vibrating. Moving: the tip is dragged across the surface.
===================================================================== */
(function () {
  const d = sim('sim-probe', 620);
  const N = ctl(d.controls, { label: '\\kN', cls: 'force', min: 2, max: 40, step: 1, value: 12, unit: 'nN', dec: 0, onInput: reset, aria: 'normal force pressing the tip into the surface' });
  const uk = ctl(d.controls, { label: '\\mu_{\\text{k}}', cls: '', min: 0.02, max: 1, step: 0.02, value: 0.3, unit: '', dec: 2, onInput: reset, aria: 'coefficient of kinetic friction' });
  const T = 5;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ROWS = [[-5, 5], [-4, 4], [-3, 3], [-2, 2]];
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now();
    const f = uk.v * N.v, lean = 24 * (f / 40);
    const SP = 42, surfaceY = 400, x0 = 130, cols = 28;
    const tipX = x0 + 260 + (t / T) * 600;
    /* the substrate: four rows of atoms, the ones the tip has passed over still ringing */
    for (let r = 0; r < 4; r++) for (let c = 0; c < cols; c++) {
      const ax = x0 + c * SP, ay = surfaceY + r * SP;
      const behind = tipX - ax, ring = behind > 0 ? Math.exp(-behind / 280) * Math.exp(-r * 0.55) : 0;
      const jx = ring * 8 * Math.sin(ax * 0.7 + ay * 0.3 + t * 26), jy = ring * 8 * Math.cos(ax * 0.5 - ay * 0.4 + t * 26);
      dot(ctx, ax + jx, ay + jy, r === 0 ? PAL.ink : PAL.muted, r === 0, 11);
    }
    text(ctx, 'the substrate, still ringing where the tip has passed', x0, surfaceY + 3 * SP + 56, PAL.muted, { size: 17 });
    /* the probe: atoms in an inverted pyramid with a flattened peak, leaning back as it is dragged.
       How many of the five atoms along its foot adhere follows the normal force one at a time, so
       every step of the slider changes the count as well as the arrow and the lean. */
    const hold = 1 + Math.round((4 * (N.v - 2)) / 38);
    const ORDER = [0, -1, 1, -2, 2];                 /* they take hold from the middle of the tip outward */
    ctx.save(); ctx.translate(tipX, surfaceY - 26); ctx.transform(1, 0, Math.tan(lean * RAD), 1, 0, 0);
    for (let r = 0; r < ROWS.length; r++) for (let c = ROWS[r][0]; c <= ROWS[r][1]; c++) dot(ctx, c * SP * 0.82, -SP * 0.88 * (ROWS.length - r), PAL.ink, false, 11);
    for (let c = -2; c <= 2; c++) dot(ctx, c * SP * 0.82, 0, PAL.ink, ORDER.indexOf(c) < hold, 11);
    ctx.restore();
    const topX = tipX + Math.tan(lean * RAD) * -SP * 0.88 * 4;
    text(ctx, 'the probe', topX - 5 * SP * 0.82 - 30, surfaceY - 26 - SP * 0.88 * 4, PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, hold === 1 ? 'one atom of the tip adheres' : hold + ' atoms of the tip adhere', tipX + 120, surfaceY - 34, PAL.ink, { size: 17 });
    arrow(ctx, topX + 60, 150, topX + 220, 150, PAL.muted, 3);
    text(ctx, 'dragged this way', topX + 232, 150, PAL.muted, { size: 17 });
    const fl = Math.min(40 + 150 * (f / 40), tipX - 200);
    arrow(ctx, tipX - 110, surfaceY - 34, tipX - 110 - fl, surfaceY - 34, C('force'), 5);
    text(ctx, 'f = ' + fmt(f, 2) + ' nN', tipX - 110 - fl / 2, surfaceY - 64, C('force'), { size: 20, weight: 600, align: 'center' });
    arrow(ctx, topX, 104, topX, 174, C('force'), 5);
    text(ctx, 'N = ' + fmt(N.v, 0) + ' nN', topX - 14, 140, C('force'), { size: 20, weight: 600, align: 'right' });
    headline(ctx, 'Pressed on with N = ' + fmt(N.v, 0) + ' nN, the tip is dragged back by f = ' + fmt(f, 2) + ' nN, and it is drawn leaning behind its base by that much friction');
    readout(d.readout, `\\kfk = \\mu_{\\text{k}}\\kN = (${fmt(uk.v, 2)})(${fmt(N.v, 0)}\\ \\text{nN}) = ${fmt(f, 2)}\\ \\text{nN}`,
      'Press the tip on harder and more of its atoms adhere to the surface, so the friction that leans it back is larger. The lean is drawn in proportion to that friction to make it visible and is not a measured angle. The atoms the tip has passed over are left vibrating, and that vibration travels away as sound and becomes the heat of rubbing.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   The figure the last two problems refer to: the block of ice pushed at
   25° below the horizontal and pulled at 25° above it. A faithful copy,
   with no sliders and nothing moving.
===================================================================== */
(function () {
  const d = sim('fig-ice', 540);
  const ANG = 25, A = 25 * RAD;
  function ice(ctx, x0, label, pulling) {
    const iceY = 430, bw = 130, bh = 110, len = 150;
    strip(ctx, x0 + 20, x0 + 620, iceY + 16, 32);
    text(ctx, 'frozen lake', x0 + 24, iceY + 60, PAL.muted, { size: 17 });
    const bx = pulling ? x0 + 200 : x0 + 430;
    block(ctx, bx, iceY - bh / 2, bw, bh, PAL.ink);
    text(ctx, '45.0 kg', bx, iceY - bh / 2, PAL.ink, { size: 19, weight: 600, align: 'center' });
    if (pulling) {
      /* the rope is tied round the block and runs up over his shoulder to his hands; he leans
         forward and strides away from the block, so the drawing says he is dragging it */
      const cxp = bx + bw / 2, cyp = iceY - bh / 2, px = x0 + 400, S = 1.2;
      const P = { hip: { x: 4, y: -64 }, shoulder: { x: 22, y: -108 }, head: { x: 34, y: -126 }, feet: [{ x: 30, y: 0 }, { x: -34, y: 0 }], hands: [{ x: 50, y: -96 }, { x: 54, y: -90 }] };
      const W = (q) => ({ x: px + q.x * S, y: iceY + q.y * S });
      const sh = W(P.shoulder), hd = W(P.hands[0]);
      line(ctx, cxp, cyp, sh.x, sh.y - 6, PAL.ink, 3);
      line(ctx, sh.x, sh.y - 6, hd.x, hd.y, PAL.ink, 3);
      const hx = cxp + len * Math.cos(A), hy = cyp - len * Math.sin(A);
      arrow(ctx, cxp, cyp, hx, hy, C('force'), 5);
      text(ctx, 'F', (cxp + hx) / 2 - 4, (cyp + hy) / 2 - 28, C('force'), { size: 22, weight: 600, align: 'center' });
      line(ctx, cxp, cyp, cxp + 120, cyp, PAL.rule, 2, [8, 8]);
      text(ctx, fmt(ANG, 0) + '°', cxp + 74, cyp - 20, PAL.ink, { size: 19, align: 'center' });
      silhouette(ctx, px, iceY, S, 1, P);
    } else {
      /* he leans into the block with both hands high on its face, so the push runs down into it */
      const cxp = bx - bw / 2, cyp = iceY - bh + 16, S = 1.2;
      const hx = cxp - len * Math.cos(A), hy = cyp - len * Math.sin(A);
      const px = hx - 95;
      const P = { hip: { x: 10, y: -66 }, shoulder: { x: 40, y: -112 }, head: { x: 50, y: -130 }, feet: [{ x: 12, y: 0 }, { x: -40, y: 0 }], hands: [{ x: (hx - px) / S, y: (hy - iceY) / S }, { x: (hx - px) / S + 3, y: (hy - iceY) / S + 4 }] };
      silhouette(ctx, px, iceY, S, 1, P);
      arrow(ctx, hx, hy, cxp, cyp, C('force'), 5);
      text(ctx, 'F', (hx + cxp) / 2 + 8, (hy + cyp) / 2 - 24, C('force'), { size: 22, weight: 600, align: 'center' });
      line(ctx, cxp, cyp, cxp - 120, cyp, PAL.rule, 2, [8, 8]);
      text(ctx, fmt(ANG, 0) + '°', cxp - 76, cyp - 20, PAL.ink, { size: 19, align: 'center' });
    }
    text(ctx, label, x0 + 24, 120, PAL.ink, { size: 24, weight: 700 });
  }
  function draw() {
    const { ctx } = begin(d.c);
    ice(ctx, 20, '(a) pushing', false);
    line(ctx, 700, 100, 700, 500, PAL.rule, 2);
    ice(ctx, 730, '(b) pulling', true);
    headline(ctx, 'The same 45.0 kg block of ice is pushed at 25° below the horizontal and pulled at 25° above it');
    readout(d.readout, '\\text{the block of ice: } m = 45.0\\ \\text{kg},\\quad \\theta = 25^\\circ');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
