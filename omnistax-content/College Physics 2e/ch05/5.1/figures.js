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

/* a wooden crate, centred on (x, y), with two slats across its face */
function crate(ctx, x, y, w, h) {
  block(ctx, x, y, w, h, PAL.ink);
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(x - w / 2, y - h / 2); ctx.lineTo(x + w / 2, y + h / 2);
  ctx.moveTo(x - w / 2, y + h / 2); ctx.lineTo(x + w / 2, y - h / 2); ctx.stroke(); ctx.restore();
}
/* a skier at (x, y) on a slope of θ degrees, facing downhill */
function skier(ctx, x, y, theta) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(theta * RAD); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(-54, 0); ctx.lineTo(46, 0); ctx.stroke();
  ctx.beginPath(); ctx.arc(10, -76, 12, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(6, -64); ctx.lineTo(-8, -34); ctx.lineTo(-4, -4);
  ctx.moveTo(6, -64); ctx.lineTo(34, -52); ctx.stroke(); ctx.restore();
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
    /* friction acts at the surface, so the arrow leaves the crate's edge, not its inside */
    arrow(ctx, cx - cw / 2, floorY - 12, cx - cw / 2 - fl, floorY - 12, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 - fl, floorY - 42, C('force'), { size: 20, weight: 600, bg: PAL.panel });
    arrow(ctx, cx + 70, floorY - 6, cx + 70, floorY - 110, C('force'), 5);
    text(ctx, 'N = ' + fmt(N, 0) + ' N', cx + 84, floorY - 92, C('force'), { size: 20, weight: 600 });
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
    arrow(ctx, cx - cw / 2 + 16, floorY - 12, cx - cw / 2 + 16 - fl, floorY - 12, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 + 16 - fl, floorY - 42, C('force'), { size: 20, weight: 600 });
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
      if (fk <= FR) text(ctx, 'f_k = ' + fmt(fk, 0) + ' N', X(FR) - 12, Y(fk) - 26, C('force'), { size: 20, weight: 600, align: 'right' });
      line(ctx, X(Fn), box.b, X(Fn), Y(fr), PAL.muted, 2, [4, 8]);
    });
    text(ctx, 'while it is still, the friction is as large as the push', X(0) + 24, Y(FR) + 32, PAL.muted, { size: 17 });
    /* a row below the first note, so it keeps clear of the value the pinned marker writes at the corner */
    if (fmax > FR) text(ctx, 'the break comes at ' + fmt(fmax, 0) + ' N, past the right edge of this graph', X(FR) - 16, Y(FR) + 70, PAL.muted, { size: 17, align: 'right' });
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
    const px = sx + 8 * sn, py = sy - 44 - 8 * cs, S = 100 / w;
    const lab = { size: 20, weight: 600, bg: PAL.panel };
    arrow(ctx, px, py, px, py + w * S, C('force'), 5);
    arrow(ctx, px, py, px - wp * S * sn, py + wp * S * cs, C('force'), 4);
    arrow(ctx, px, py, px + wx * S * cs, py + wx * S * sn, C('force'), 4);
    arrow(ctx, px, py, px + wp * S * sn, py - wp * S * cs, C('force'), 4);
    const fl = Math.max(28, fk.v * S);
    arrow(ctx, px, py, px - fl * cs, py - fl * sn, C('force'), 4);
    hits = [
      { x: px, y: py + w * S, r: 26, name: 'w, her whole weight' },
      { x: px - wp * S * sn, y: py + wp * S * cs, r: 26, name: 'w perpendicular, the part of the weight into the slope' },
      { x: px + wx * S * cs, y: py + wx * S * sn, r: 26, name: 'w parallel, the part of the weight along the slope' },
      { x: px + wp * S * sn, y: py - wp * S * cs, r: 26, name: 'N, the normal force of the snow' },
      { x: px - fl * cs, y: py - fl * sn, r: 26, name: 'f, the friction of the snow on her skis' },
    ];
    if (v > 0.05) {
      const vl = 40 + 80 * Math.min(1, v / 28);
      arrow(ctx, sx + 96 * cs, sy + 96 * sn, sx + (96 + vl) * cs, sy + (96 + vl) * sn, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', sx + (96 + vl) * cs + 14, sy + (96 + vl) * sn + 26, C('velocity'), { ...lab, align: 'center' });
    }
    skier(ctx, sx, sy, th.v);
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
    FBD.forEach((q) => {
      arrow(ctx, fx, fy, fx + q.dx, fy + q.dy, C('force'), q.wid);
      const L = Math.hypot(q.dx, q.dy) || 1;
      text(ctx, q.s, fx + q.dx + (q.dx / L) * 18, fy + q.dy + (q.dy / L) * 18, C('force'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    });
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
    text(ctx, 'the probe', topX, surfaceY - 26 - SP * 0.88 * 4 - 44, PAL.ink, { size: 20, weight: 600, align: 'center' });
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
      const cxp = bx + bw / 2, cyp = iceY - bh + 16;
      const hx = cxp + len * Math.cos(A), hy = cyp - len * Math.sin(A);
      F.person(ctx, x0 + 470, iceY, PAL.ink, { s: 2, face: -1, lean: -0.3, phase: 1.3, reach: { x: hx + 30, y: hy - 10 } });
      line(ctx, cxp, cyp, hx + 30, hy - 10, PAL.ink, 3);
      arrow(ctx, cxp, cyp, hx, hy, C('force'), 5);
      text(ctx, 'F', (cxp + hx) / 2 + 6, (cyp + hy) / 2 - 26, C('force'), { size: 22, weight: 600, align: 'center' });
      line(ctx, cxp, cyp, cxp + 120, cyp, PAL.rule, 2, [8, 8]);
      text(ctx, fmt(ANG, 0) + '°', cxp + 72, cyp - 24, PAL.ink, { size: 19, align: 'center' });
    } else {
      const cxp = bx - bw / 2, cyp = iceY - bh + 16;
      const hx = cxp - len * Math.cos(A), hy = cyp - len * Math.sin(A);
      F.person(ctx, x0 + 150, iceY, PAL.ink, { s: 2, lean: 0.35, phase: 1.3, reach: { x: hx, y: hy } });
      arrow(ctx, hx, hy, cxp, cyp, C('force'), 5);
      text(ctx, 'F', hx - 16, hy - 12, C('force'), { size: 22, weight: 600, align: 'right' });
      line(ctx, cxp, cyp, cxp - 120, cyp, PAL.rule, 2, [8, 8]);
      text(ctx, fmt(ANG, 0) + '°', cxp - 76, cyp - 24, PAL.ink, { size: 19, align: 'center' });
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
