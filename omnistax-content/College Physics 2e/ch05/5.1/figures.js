/* Figures for section 5.1 Friction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, hover, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, scale, axes, pinned, block } = F;
const sim = (id, H) => F.sim(root, id, H);
const G = 9.80;
const RAD = Math.PI / 180;
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }
/* draws inside the graph box, so a line that runs past a fixed range is cut off at the frame
   instead of the frame being stretched to hold it */
const inbox = (ctx, box, f) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); f(); ctx.restore(); };

/* a wooden crate, centred on (x, y): a framed box of horizontal planks with a batten down each end */
function crate(ctx, x, y, w, h, col) {
  const l = x - w / 2, t = y - h / 2;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.fillRect(l, t, w, h); ctx.strokeRect(l, t, w, h);
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
  ctx.beginPath(); for (let i = 1; i < 4; i++) { ctx.moveTo(l + 4, t + (h * i) / 4); ctx.lineTo(l + w - 4, t + (h * i) / 4); } ctx.stroke();
  ctx.strokeStyle = col; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(l + 22, t + 2); ctx.lineTo(l + 22, t + h - 2); ctx.moveTo(l + w - 22, t + 2); ctx.lineTo(l + w - 22, t + h - 2); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   FIGURE 5.2 + 5.5: the rough interface. A crate on a concrete floor
   with the push and the friction on it, and the interface under one
   corner magnified, where the two surfaces touch only at their high
   spots and touch over more of themselves as they are pressed together.
   Moving: below the breakaway the crate's underside creeps and checks
   against the floor's peaks; past it the crate slides, its underside
   lifted so that only the tips skip along.
===================================================================== */
(function () {
  const d = sim('sim-interface', 720);
  const MU_S = 0.45, MU_K = 0.30;
  const m = ctl(d.controls, { label: '\\km', cls: 'mass', min: 20, max: 200, step: 5, value: 100, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the crate' });
  const Fp = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 800, step: 10, value: 300, unit: 'N', dec: 0, onInput: reset, aria: 'applied force',
    specials: [{ at: () => MU_S * m.v * G, label: 'breakaway' }] });
  const T = 5, cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* the asperities: one fixed profile for each surface, periodic so the crate's can slide past the floor's */
  const LOW = [0.42, 0.78, 0.30, 0.95, 0.55, 0.22, 0.70, 0.38, 0.88, 0.48, 0.26, 0.66, 0.34, 0.80];
  const UP = [0.60, 0.28, 0.84, 0.40, 0.72, 0.34, 0.50, 0.92, 0.24, 0.62, 0.44, 0.86, 0.32, 0.56];
  const bumpy = (hs, u) => {                       /* u runs 0..1 across the panel; a run of rounded peaks */
    const n = hs.length, s = u * n - 0.5; let v = 0;
    for (let i = 0; i < n; i++) { const q = ((((s - i) % n) + 1.5 * n) % n - n / 2) / 0.95; if (Math.abs(q) < 1) v = Math.max(v, hs[i] * (1 - q * q)); }
    return v;
  };
  const A = 84, NX = 280;
  const low = [];
  for (let i = 0; i <= NX; i++) low.push(bumpy(LOW, i / NX) * A);
  function draw() {
    const { ctx } = begin(d.c);
    const N = m.v * G, fmax = MU_S * N, fk = MU_K * N;
    const sliding = Fp.v > fmax, fr = sliding ? fk : Fp.v;
    const k = (REDUCED ? T : cy.now()) / T;
    /* sliding, it starts from rest and gains speed, farther the larger (F − f_k)/m; held, the
       underside creeps up to 28 units, in proportion to the push, and checks */
    const slid = sliding ? (30 + 50 * Math.min(1, (Fp.v - fk) / m.v / 10)) * k * k : 0;
    const sh = sliding ? 5 * slid : 28 * (Fp.v / fmax) * F.ease.smooth(Math.min(1, k / 0.6));
    const up = [];
    for (let i = 0; i <= NX; i++) up.push(bumpy(UP, i / NX - sh / 1040) * A);
    let SMAX = 0; for (let i = 0; i <= NX; i++) SMAX = Math.max(SMAX, low[i] + up[i]);
    /* the crate on the floor */
    const floorY = 300, cx0 = 430, cx = cx0 + slid, cw = 220, ch = 140;
    strip(ctx, 110, 1290, floorY + 16, 30);
    const cc = F.ref('crate'), cfl = F.ref('floor'), car = C('area');
    crate(ctx, cx, floorY - ch / 2, cw, ch, cc);
    text(ctx, fmt(m.v, 0) + ' kg', cx, floorY - ch + 30, C('mass'), { size: 20, weight: 600, align: 'center' });
    const pl = 50 + 180 * (Fp.v / 800), fl = 50 + 180 * (fr / 800);
    if (Fp.v > 0) arrow(ctx, cx - cw / 2 - pl, floorY - 92, cx - cw / 2, floorY - 92, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fp.v, 0) + ' N', cx - cw / 2 - 10, floorY - 120, C('force'), { size: 20, weight: 600, align: 'right' });
    /* friction acts at the surface, so the arrow leaves the crate's bottom corner along the floor */
    if (fr > 0) arrow(ctx, cx - cw / 2, floorY - 3, cx - cw / 2 - fl, floorY - 3, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 - 10, floorY - 32, C('force'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    arrow(ctx, cx + 70, floorY - 2, cx + 70, floorY - 110, C('force'), 5);
    text(ctx, 'N = ' + fmt(N, 0) + ' N', cx + cw / 2 + 12, floorY - 20, C('force'), { size: 20, weight: 600 });
    if (REDUCED) F.faded(ctx, 0.45, [0, 0], () => {
      arrow(ctx, cx + cw / 2 + 40, floorY - ch + 20, cx + cw / 2 + 250, floorY - ch + 20, PAL.muted, 3);
      text(ctx, sliding ? 'direction of motion' : 'direction of attempted motion', cx + cw / 2 + 40, floorY - ch - 12, PAL.muted, { size: 17 });
    });
    /* the coefficients the section's own passage gives for this crate on this floor, named on the
       drawing so that the branch between holding and sliding is never decided by a hidden number */
    text(ctx, 'this crate on this concrete floor: μ_s = ' + fmt(MU_S, 2) + ', μ_k = ' + fmt(MU_K, 2), cx + cw / 2 + 40, floorY - 52, PAL.ink, { size: 19, weight: 600 });
    /* the magnified interface under the near corner of the crate */
    const L = 190, R = 1230, top = 450, bot = 690, LOWBASE = 630;
    const corner = cx0 + 10;               /* a spot of floor the crate covers however far it slides */
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
    ctx.beginPath(); ctx.arc(corner, floorY, 40, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(corner - 34, floorY + 24); ctx.lineTo(L, top); ctx.moveTo(corner + 34, floorY + 24); ctx.lineTo(R, top); ctx.stroke();
    ctx.setLineDash([]); ctx.strokeRect(L, top, R - L, bot - top); ctx.restore();
    /* pressed harder, the two bodies settle closer together; set sliding, the crate rises until only the tips skip along */
    const delta = 36 * (N / (200 * G)) * (sliding ? 1 - 0.65 * F.ease.smooth(Math.min(1, k / 0.2)) : 1);
    const UPBASE = LOWBASE - SMAX + delta;
    const xAt = (i) => L + ((R - L) * i) / NX;
    const yLow = (i) => LOWBASE - low[i];
    const yUp = (i) => Math.min(UPBASE + up[i], yLow(i));
    ctx.save();
    ctx.fillStyle = alpha(cfl, 0.24);
    ctx.beginPath(); ctx.moveTo(L, bot); for (let i = 0; i <= NX; i++) ctx.lineTo(xAt(i), yLow(i)); ctx.lineTo(R, bot); ctx.closePath(); ctx.fill();
    ctx.fillStyle = alpha(cc, 0.1);
    ctx.beginPath(); ctx.moveTo(L, top); for (let i = 0; i <= NX; i++) ctx.lineTo(xAt(i), yUp(i)); ctx.lineTo(R, top); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = cfl; ctx.lineWidth = 3;
    ctx.beginPath(); for (let i = 0; i <= NX; i++) (i ? ctx.lineTo(xAt(i), yLow(i)) : ctx.moveTo(xAt(i), yLow(i))); ctx.stroke();
    ctx.strokeStyle = cc; ctx.beginPath(); for (let i = 0; i <= NX; i++) (i ? ctx.lineTo(xAt(i), yUp(i)) : ctx.moveTo(xAt(i), yUp(i))); ctx.stroke(); ctx.restore();
    /* the high spots that actually touch */
    let touching = 0, run = false;
    ctx.save(); ctx.strokeStyle = car; ctx.lineWidth = 10; ctx.lineCap = 'round';
    for (let i = 0; i <= NX; i++) {
      const hit = UPBASE + up[i] >= yLow(i) - 0.5;
      if (hit && !run) { ctx.beginPath(); ctx.moveTo(xAt(i), yLow(i)); run = true; touching++; }
      else if (hit) ctx.lineTo(xAt(i), yLow(i));
      else if (run) { ctx.stroke(); run = false; }
    }
    if (run) ctx.stroke();
    ctx.restore();
    text(ctx, 'the crate', L + 16, top + 24, cc, { size: 17 });
    text(ctx, 'the floor', L + 16, bot - 22, cfl, { size: 17 });
    text(ctx, touching === 1 ? 'the surfaces touch at one high spot, drawn heavy' : 'the surfaces touch at ' + touching + ' high spots, drawn heavy',
      R - 16, bot - 22, car, { size: 20, weight: 600, align: 'right' });
    headline(ctx, sliding
      ? 'Your ' + fmt(Fp.v, 0) + ' N push has passed the ' + fmt(fmax, 0) + ' N these surfaces can hold, so the crate slides against ' + fmt(fk, 0) + ' N'
      : 'A normal force of ' + fmt(N, 0) + ' N presses the surfaces together, and your ' + fmt(Fp.v, 0) + ' N push is answered by ' + fmt(fr, 0) + ' N of friction');
    readout(d.readout, `\\kfsmax = \\mu_{\\text{s}}\\kN = \\mu_{\\text{s}} \\km\\kg = (${fmt(MU_S, 2)})(${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${fmt(fmax, 0)}\\ \\text{N}`,
      'Once it slides, the friction drops to $\\kfk = \\mu_{\\text{k}}\\kN = ' + fmt(fk, 0) + '\\ \\text{N}$.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the push that grows until the crate breaks away. Static friction
   answers the push up to f_s(max), and then the crate slides and the
   friction drops to f_k. Moving: the push grows as the clock runs.
===================================================================== */
(function () {
  const d = sim('sim-breakaway', 780);
  const m = ctl(d.controls, { label: '\\km', cls: 'mass', min: 20, max: 200, step: 5, value: 100, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the crate' });
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
    crate(ctx, cx, floorY - ch / 2, cw, ch, F.ref('crate'));
    text(ctx, fmt(m.v, 0) + ' kg', cx, floorY - ch + 28, C('mass'), { size: 20, weight: 600, align: 'center' });
    /* the arrows are drawn against the same fixed 800 N the graph is ruled to, so a harder push is a
       longer arrow rather than the same arrow beside a larger number */
    const ACAP = 800, pl = 40 + 180 * Math.min(1, Fn / ACAP), fl = 40 + 180 * Math.min(1, fr / ACAP);
    if (Fn > 0) arrow(ctx, cx - cw / 2 - pl, floorY - 84, cx - cw / 2, floorY - 84, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fn, 0) + ' N', cx - cw / 2 - 10, floorY - 112, C('force'), { size: 20, weight: 600, align: 'right' });
    /* friction acts at the surface, so the arrow leaves the crate's bottom corner along the floor */
    if (fr > 0) arrow(ctx, cx - cw / 2, floorY - 3, cx - cw / 2 - fl, floorY - 3, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 - 10, floorY - 32, C('force'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
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
      /* above its line, where neither the live point nor its drop line ever passes */
      if (fk <= FR) text(ctx, 'f_k = ' + fmt(fk, 0) + ' N', X(FR) - 40, Y(fk) - 24, C('force'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
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
      'Once it is moving the friction is $\\kfk = \\mu_{\\text{k}}\\kN = ' + fmt(fk, 0) + '\\ \\text{N}$, however hard you push, which is why the crate is easier to keep going than it was to start.'
      + (held() ? ' No pair of surfaces slides against more friction than it holds with, so $\\mu_{\\text{k}}$ is taken here as ' + fmt(ukv(), 2) + ', the value of $\\mu_{\\text{s}}$.' : '')
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
  const m = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 120, step: 1, value: 62, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the skier' });
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 5, max: 45, step: 1, value: 25, unit: '°', dec: 0, onInput: reset, aria: 'angle of the slope' });
  const fk = ctl(d.controls, { label: '\\kfk', cls: 'force', min: 0, max: 200, step: 0.5, value: 45, unit: 'N', dec: 1, onInput: reset, aria: 'friction on the skier' });
  const T = 4;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* one fixed scale in every state, so a heavier skier has longer arrows: 1000 N is 150 units on
     the slope and 120 on the free-body diagram (her 1176 N at 120 kg is the longest) */
  const S = 0.15, S2 = 0.12, SC = 1.5;
  let hits = [];
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now();
    const a0 = th.v * RAD, cs = Math.cos(a0), sn = Math.sin(a0);
    const w = m.v * G, wp = w * cs, wx = w * sn, a = (wx - fk.v) / m.v, mu = fk.v / wp;
    const steady = Math.abs(a) < 0.02;
    /* She starts from rest where the slope will accelerate her. Where the friction balances the
       weight along the slope she is already gliding at 2.0 m/s, and where the friction is the larger
       she slides to a stop. */
    const V0 = a > 0.02 ? 0 : 2;
    const tStop = a < -0.02 ? V0 / -a : Infinity;
    const vOf = (q) => Math.max(0, V0 + a * Math.min(q, tStop));
    const sOf = (q) => { const u = Math.min(q, tStop); return V0 * u + 0.5 * a * u * u; };
    const frac = Math.min(1, sOf(t) / Math.max(0.01, sOf(T)));
    const v = vOf(t);
    const hl = headline(ctx, steady
      ? 'The ' + fmt(fk.v, 1) + ' N of friction balances the ' + fmt(wx, 0) + ' N along the slope, so she glides on down at a steady ' + fmt(V0, 1) + ' m/s'
      : a > 0
        ? 'On a ' + fmt(th.v, 0) + '° slope her ' + fmt(w, 0) + ' N weight gives ' + fmt(wx, 0) + ' N along the slope and ' + fmt(wp, 0) + ' N into it, so $\\mu_{\\text{k}} = ' + fmt(mu, 3) + '$'
        : v > 0.05
          ? 'The ' + fmt(fk.v, 1) + ' N of friction is more than the ' + fmt(wx, 0) + ' N along the slope, so the ' + fmt(V0, 1) + ' m/s she was gliding at is falling away'
          : 'The ' + fmt(fk.v, 1) + ' N of friction is more than the ' + fmt(wx, 0) + ' N along the slope, so she has slid to a stop');
    const lb = F.labeller(ctx, 740, { headline: hl });
    /* the slope, kept inside the canvas at every angle; u runs down it and n stands out of it */
    const bx = 960, by = 600, L = Math.min(700, 340 / sn, 800 / cs);
    const tx = bx - L * cs, ty = by - L * sn, ux = cs, uy = sn, nx = sn, ny = -cs;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(bx, by); ctx.lineTo(bx, by + 70); ctx.lineTo(tx, by + 70); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, tx, ty, bx, by, PAL.muted, 3);
    line(ctx, tx, by, bx, by, PAL.rule, 2, [10, 10]);
    F.angleArc(ctx, { x: bx, y: by }, 80, Math.PI - a0, Math.PI, fmt(th.v, 0) + '°', lb, C('angle'));
    /* P is the snow under her boots, O the soles on top of the skis */
    const pos = 100 + (L - 330) * frac;
    const P = { x: tx + ux * pos, y: ty + uy * pos }, O = { x: P.x + nx * 6, y: P.y + ny * 6 };
    const along = (q, k, o = 0) => ({ x: q.x + ux * k + nx * o, y: q.y + uy * k + ny * o });
    const c = F.ref('skier');
    /* the skis lie along the slope and turn up at the tips; she stands plumb over them, poles back */
    const tail = along(O, -60 * SC), tip = along(O, 52 * SC);
    const POSE = F.silhouette.pose('crouch');
    POSE.hands.forEach((h) => {
      const hx = O.x + h.x * SC, hy = O.y + h.y * SC, snow = along(P, -54 * SC);
      const L2 = Math.hypot(snow.x - hx, snow.y - hy);
      line(ctx, hx - ((snow.x - hx) / L2) * 14, hy - ((snow.y - hy) / L2) * 14, snow.x, snow.y, PAL.muted, 3);
    });
    line(ctx, tail.x, tail.y, tip.x, tip.y, c, 5);
    const curl = along(O, 62 * SC, 8 * SC);
    line(ctx, tip.x, tip.y, curl.x, curl.y, c, 5);
    F.silhouette(ctx, { x: O.x, y: O.y, s: SC, pose: 'crouch', color: c, feet: [{ x: 14 * cs, y: 14 * sn }, { x: -14 * cs, y: -14 * sn }] });
    /* the weight and its two parts leave her hips; the normal force and the friction act where the
       skis meet the snow. Where an arrow crosses her it is laid on a halo, so it reads in front. */
    const cm = { x: O.x, y: O.y - 54 * SC };
    const seg = (p, dx, dy) => ({ x1: p.x, y1: p.y, x2: p.x + dx, y2: p.y + dy });
    const sw = seg(cm, 0, w * S), sperp = seg(cm, -nx * wp * S, -ny * wp * S), spar = seg(cm, ux * wx * S, uy * wx * S);
    const sN = seg(P, nx * wp * S, ny * wp * S);
    const fl = Math.max(24, fk.v * S), sf = seg(tail, -ux * fl, -uy * fl);
    const part = (s, k) => { const L3 = Math.hypot(s.x2 - s.x1, s.y2 - s.y1) || 1, q = Math.min(1, k / L3); return { x1: s.x1, y1: s.y1, x2: s.x1 + (s.x2 - s.x1) * q, y2: s.y1 + (s.y2 - s.y1) * q }; };
    [part(sw, 54 * SC), part(sperp, 36 * SC), part(spar, 36 * SC), part(sN, 100 * SC)].forEach((s) => lb.halo(s, 8));
    const draws = [[sw, 5], [sperp, 4], [spar, 4], [sN, 5], [sf, 5]];
    draws.forEach(([s, wd]) => arrow(ctx, s.x1, s.y1, s.x2, s.y2, C('force'), wd));
    hits = [
      { x: sw.x2, y: sw.y2, r: 26, name: 'w, her whole weight' },
      { x: sperp.x2, y: sperp.y2, r: 26, name: 'w⊥, the part of the weight into the slope' },
      { x: spar.x2, y: spar.y2, r: 26, name: 'w∥, the part of the weight along the slope' },
      { x: sN.x2, y: sN.y2, r: 26, name: 'N, the normal force of the snow' },
      { x: sf.x2, y: sf.y2, r: 26, name: 'f, the friction of the snow on her skis' },
      { x: cm.x, y: cm.y - 30, r: 50, name: 'the skier' },
    ];
    if (v > 0.05) {
      const vl = 40 + 80 * Math.min(1, v / 28), v0 = along(P, 70 * SC, 26), v1 = along(P, 70 * SC + vl, 26);
      arrow(ctx, v0.x, v0.y, v1.x, v1.y, C('velocity'), 5);
      lb.beside({ x1: v0.x, y1: v0.y, x2: v1.x, y2: v1.y }, 'left', 'v = ' + fmt(v, 1) + ' m/s', C('velocity'), 20);
    }
    /* the free-body diagram, beside the slope as the book draws it, and the one place the five
       forces are named and their values written */
    const bl = 1050, bt = 110, br = 1390, bb = 700, fx = 1220, fy = 330;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(bl, bt, br - bl, bb - bt); ctx.restore();
    text(ctx, 'free-body diagram', fx, bt + 26, PAL.muted, { size: 17, align: 'center' });
    lb.block(fx - 80, bt + 10, fx + 80, bt + 42);
    line(ctx, fx - 110 * cs, fy - 110 * sn, fx + 110 * cs, fy + 110 * sn, PAL.rule, 2, [8, 8]);
    line(ctx, fx - 110 * sn, fy + 110 * cs, fx + 110 * sn, fy - 110 * cs, PAL.rule, 2, [8, 8]);
    const fl2 = Math.max(24, fk.v * S2);
    const FBD = [
      { dx: 0, dy: w * S2, s: 'w', val: fmt(w, 0) + ' N', wid: 4 },
      { dx: -nx * wp * S2, dy: -ny * wp * S2, s: 'w_{⊥}', val: fmt(wp, 0) + ' N', wid: 3 },
      { dx: ux * wx * S2, dy: uy * wx * S2, s: 'w_{∥}', val: fmt(wx, 0) + ' N', wid: 3 },
      { dx: nx * wp * S2, dy: ny * wp * S2, s: 'N', val: fmt(wp, 0) + ' N', wid: 4 },
      { dx: -ux * fl2, dy: -uy * fl2, s: 'f', val: fmt(fk.v, 1) + ' N', wid: 3 },
    ];
    FBD.forEach((q) => {
      arrow(ctx, fx, fy, fx + q.dx, fy + q.dy, C('force'), q.wid);
      const L4 = Math.hypot(q.dx, q.dy) || 1;
      lb.add(q.s, fx + q.dx, fy + q.dy, q.dx / L4, q.dy / L4, C('force'), 20, 20);
    });
    dot(ctx, fx, fy, c, true, 8);
    FBD.forEach((q, i) => {
      text(ctx, q.s, bl + 30, 540 + i * 32, C('force'), { size: 20, weight: 600 });
      text(ctx, q.val, br - 30, 540 + i * 32, C('force'), { size: 20, weight: 600, align: 'right' });
    });
    lb.flush();
    readout(d.readout, `\\mu_{\\text{k}} = \\frac{\\kfk}{\\kN} = \\frac{\\kfk}{\\km\\kg\\cos\\ktheta} = \\frac{${fmt(fk.v, 1)}\\ \\text{N}}{(${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(cs, 3)})} = ${fmt(mu, 3)}`,
      'Down the slope $\\ka = \\kg\\sin\\ktheta - \\kfk/\\km = ' + fmt(a, 2) + '\\ \\text{m/s}^2$.');
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
    const tipX = x0 + 260 + (t / T) * 600, cs = F.ref('substrate'), cp = F.ref('probe');
    /* the substrate: four rows of atoms, the ones the tip has passed over still ringing */
    for (let r = 0; r < 4; r++) for (let c = 0; c < cols; c++) {
      const ax = x0 + c * SP, ay = surfaceY + r * SP;
      const behind = tipX - ax, ring = behind > 0 ? Math.exp(-behind / 280) * Math.exp(-r * 0.55) : 0;
      const jx = ring * 8 * Math.sin(ax * 0.7 + ay * 0.3 + t * 26), jy = ring * 8 * Math.cos(ax * 0.5 - ay * 0.4 + t * 26);
      dot(ctx, ax + jx, ay + jy, r === 0 ? cs : alpha(cs, 0.55), r === 0, 11);
    }
    text(ctx, 'the substrate, still ringing where the tip has passed', x0, surfaceY + 3 * SP + 56, cs, { size: 17 });
    /* the probe: atoms in an inverted pyramid with a flattened peak, leaning back as it is dragged.
       How many of the five atoms along its foot adhere follows the normal force one at a time, so
       every step of the slider changes the count as well as the arrow and the lean. */
    const hold = 1 + Math.round((4 * (N.v - 2)) / 38);
    const ORDER = [0, -1, 1, -2, 2];                 /* they take hold from the middle of the tip outward */
    ctx.save(); ctx.translate(tipX, surfaceY - 26); ctx.transform(1, 0, Math.tan(lean * RAD), 1, 0, 0);
    for (let r = 0; r < ROWS.length; r++) for (let c = ROWS[r][0]; c <= ROWS[r][1]; c++) dot(ctx, c * SP * 0.82, -SP * 0.88 * (ROWS.length - r), cp, false, 11);
    for (let c = -2; c <= 2; c++) dot(ctx, c * SP * 0.82, 0, cp, ORDER.indexOf(c) < hold, 11);
    ctx.restore();
    const topX = tipX + Math.tan(lean * RAD) * -SP * 0.88 * 4;
    text(ctx, 'the probe', topX - 5 * SP * 0.82 - 30, surfaceY - 26 - SP * 0.88 * 4, cp, { size: 20, weight: 600, align: 'right' });
    text(ctx, hold === 1 ? 'one atom of the tip adheres' : hold + ' atoms of the tip adhere', tipX + 120, surfaceY - 34, cp, { size: 17 });
    arrow(ctx, topX + 60, 150, topX + 220, 150, PAL.muted, 3);
    text(ctx, 'dragged this way', topX + 232, 150, PAL.muted, { size: 17 });
    const fl = Math.min(40 + 150 * (f / 40), tipX - 220);
    arrow(ctx, tipX - 130, surfaceY - 34, tipX - 130 - fl, surfaceY - 34, C('force'), 5);
    text(ctx, 'f = ' + fmt(f, 2) + ' nN', tipX - 130 - fl / 2, surfaceY - 64, C('force'), { size: 20, weight: 600, align: 'center' });
    arrow(ctx, topX, 104, topX, 174, C('force'), 5);
    text(ctx, 'N = ' + fmt(N.v, 0) + ' nN', topX - 14, 140, C('force'), { size: 20, weight: 600, align: 'right' });
    headline(ctx, 'Pressed on with $\\kN = ' + fmt(N.v, 0) + '\\ \\text{nN}$, the tip is dragged back by $\\kfk = ' + fmt(f, 2) + '\\ \\text{nN}$ and leans back as it goes');
    readout(d.readout, `\\kfk = \\mu_{\\text{k}}\\kN = (${fmt(uk.v, 2)})(${fmt(N.v, 0)}\\ \\text{nN}) = ${fmt(f, 2)}\\ \\text{nN}`,
      'The lean is drawn in proportion to the friction to make it visible; it is not a measured angle.');
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
  const A = 25 * RAD, ca = Math.cos(A), sa = Math.sin(A);
  const iceY = 440, s = 1.3, bw = 150;
  /* one block in both parts, as tall as the pushing hands are high: the push pose's shoulder with
     the arm reaching 25° below the horizontal puts the hands on the block's top face */
  const SH = F.silhouette.pose('push').shoulder, REACH = 0.95 * 60;
  const HAND = { x: SH.x + REACH * ca, y: SH.y + REACH * sa };
  const bh = -HAND.y * s;
  let hits = [];
  function lake(ctx, x0, label) {
    strip(ctx, x0 + 20, x0 + 640, iceY + 16, 32);
    text(ctx, 'frozen lake', x0 + 24, iceY + 60, PAL.muted, { size: 17 });
    text(ctx, label, x0 + 24, 120, PAL.ink, { size: 24, weight: 700 });
  }
  function ice(ctx, bx) {
    block(ctx, bx, iceY - bh / 2, bw, bh, F.ref('ice-block'));
    text(ctx, '45.0 kg', bx, iceY - 24, C('mass'), { size: 19, weight: 600, align: 'center' });
    hits.push({ x: bx, y: iceY - bh / 2, r: 60, name: 'the block of ice, 45.0 kg' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const hl = headline(ctx, 'The same 45.0 kg block of ice is pushed at 25° below the horizontal and pulled at 25° above it');
    const lb = F.labeller(ctx, 540, { headline: hl });
    const cc = F.ref('contestant');
    /* (a) he leans in with his hands on the block's top face, where the push begins */
    lake(ctx, 20, '(a) pushing');
    const bxa = 20 + 380, bla = bxa - bw / 2, bta = iceY - bh;
    const hand = { x: bla + 6, y: bta }, pxa = hand.x - HAND.x * s;
    F.silhouette(ctx, { x: pxa, y: iceY, s, pose: 'push', color: cc, hands: [HAND, { x: HAND.x + 2, y: HAND.y + 4 }] });
    hits.push({ x: pxa + 10, y: iceY - 100, r: 70, name: 'the contestant' });
    ice(ctx, bxa);
    const pa = { x1: hand.x, y1: hand.y, x2: hand.x + 120 * ca, y2: hand.y + 120 * sa };
    F.angleArc(ctx, hand, 72, -A, 0, '25°', lb, C('angle'));
    arrow(ctx, pa.x1, pa.y1, pa.x2, pa.y2, C('force'), 5);
    lb.beside(pa, 'right', 'F', C('force'), 22, { offset: 0.6 });
    line(ctx, 700, 100, 700, 500, PAL.rule, 2);
    /* (b) he strides away with the rope from the block's face over his shoulder to his hands;
       standing where the rope reaches his shoulder at 25° above the horizontal */
    lake(ctx, 720, '(b) pulling');
    const bxb = 720 + 210, brb = bxb + bw / 2;
    const tie = { x: brb, y: iceY - 60 };
    const PP = F.silhouette.pose('pull'), top = { x: PP.shoulder.x, y: PP.shoulder.y - 8 };
    const rise = -top.y * s - (iceY - tie.y), pxb = tie.x + rise / Math.tan(A) - top.x * s;
    const W = (q) => ({ x: pxb + q.x * s, y: iceY + q.y * s });
    const handsB = [{ x: PP.shoulder.x + 22, y: PP.shoulder.y + 6 }, { x: PP.shoulder.x + 26, y: PP.shoulder.y + 12 }];
    const sh = W(top), h0 = W(handsB[0]);
    ice(ctx, bxb);
    line(ctx, tie.x, tie.y, sh.x, sh.y, PAL.muted, 3);
    F.silhouette(ctx, { x: pxb, y: iceY, s, pose: 'pull', color: cc, hands: handsB });
    line(ctx, sh.x, sh.y, h0.x, h0.y, PAL.muted, 3);
    hits.push({ x: pxb + 10, y: iceY - 100, r: 70, name: 'the contestant' });
    const pb = { x1: tie.x, y1: tie.y, x2: tie.x + 120 * ca, y2: tie.y - 120 * sa };
    F.angleArc(ctx, tie, 72, 0, A, '25°', lb, C('angle'));
    arrow(ctx, pb.x1, pb.y1, pb.x2, pb.y2, C('force'), 5);
    lb.beside(pb, 'left', 'F′', C('force'), 22, { offset: 0.6 });
    lb.flush();
    readout(d.readout, '\\text{the block of ice: } \\km = 45.0\\ \\text{kg},\\quad \\ktheta = 25^\\circ');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();
};
