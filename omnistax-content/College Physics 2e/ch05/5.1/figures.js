/* Figures for section 5.1 Friction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, axes, nice, block } = F;
const sim = (id, H) => F.sim(root, id, H);
const G = 9.80;
const RAD = Math.PI / 180;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* a wooden crate, centred on (x, y), with two slats across its face */
function crate(ctx, x, y, w, h) {
  block(ctx, x, y, w, h, PAL.ink);
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(x - w / 2, y - h / 2); ctx.lineTo(x + w / 2, y + h / 2);
  ctx.moveTo(x - w / 2, y + h / 2); ctx.lineTo(x + w / 2, y - h / 2); ctx.stroke(); ctx.restore();
}
/* a person standing with their feet at (x, y), h units tall, one arm reaching to (hx, hy) */
function person(ctx, x, y, h, hx, hy) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(x, y - h + 0.1 * h, 0.09 * h, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x, y - h + 0.19 * h); ctx.lineTo(x, y - 0.36 * h);
  ctx.moveTo(x, y - 0.36 * h); ctx.lineTo(x - 0.18 * h, y); ctx.moveTo(x, y - 0.36 * h); ctx.lineTo(x + 0.18 * h, y);
  ctx.moveTo(x, y - 0.72 * h); ctx.lineTo(hx, hy); ctx.stroke(); ctx.restore();
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
    arrow(ctx, cx - cw / 2 + 18, floorY - 12, cx - cw / 2 + 18 - fl, floorY - 12, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 + 18 - fl, floorY - 42, C('force'), { size: 20, weight: 600 });
    arrow(ctx, cx + 70, floorY - 6, cx + 70, floorY - 110, C('force'), 5);
    text(ctx, 'N = ' + fmt(N, 0) + ' N', cx + 84, floorY - 92, C('force'), { size: 20, weight: 600 });
    arrow(ctx, cx + cw / 2 + 40, floorY - ch + 20, cx + cw / 2 + 250, floorY - ch + 20, PAL.muted, 3);
    text(ctx, sliding ? 'direction of motion' : 'direction of attempted motion', cx + cw / 2 + 40, floorY - ch - 12, PAL.muted, { size: 17 });
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
      ? 'your ' + fmt(Fp.v, 0) + ' N push has passed the ' + fmt(fmax, 0) + ' N these surfaces can hold, so the crate slides against ' + fmt(fk, 0) + ' N'
      : 'N = ' + fmt(N, 0) + ' N presses the surfaces together, and your ' + fmt(Fp.v, 0) + ' N push is answered by ' + fmt(fr, 0) + ' N of friction');
    readout(d.readout, `\\kN = m\\kg = (${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2) = ${fmt(N, 0)}\\ \\text{N}`,
      'The friction is parallel to the surface and points against the motion or the attempted motion. Press the two surfaces together harder and the actual area of contact, drawn heavy in the magnified view, grows; the friction grows with it, and the total area of the base never enters.');
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
  const Nof = () => m.v * G, Fmax = () => 1.6 * us.v * Nof();
  const Fat = (t) => (Fmax() * t) / T;
  const kOf = () => Fmax() / (T * m.v);
  function xAt(t) {                                  /* how far it has slid: a = (F − f_k)/m, integrated twice */
    if (t <= TB) return 0;
    const s = t - TB;
    return Math.max(0, (kOf() * s * s * s) / 6 + (kOf() * TB * s * s) / 2 - (uk.v * G * s * s) / 2);
  }
  function vAt(t) {
    if (t <= TB) return 0;
    return Math.max(0, (kOf() * (t * t - TB * TB)) / 2 - uk.v * G * (t - TB));
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now();
    const N = Nof(), fmax = us.v * N, fk = uk.v * N, Fn = Fat(t);
    const moving = t > TB, fr = moving ? fk : Fn;
    const run = Math.max(0.4, xAt(T)), cw = 180, ch = 130, floorY = 280;
    strip(ctx, 140, 1280, floorY + 16, 30);
    const cx = 340 + (xAt(t) / run) * 720;
    crate(ctx, cx, floorY - ch / 2, cw, ch);
    text(ctx, fmt(m.v, 0) + ' kg', cx, floorY - ch + 28, PAL.ink, { size: 20, weight: 600, align: 'center' });
    const pl = 40 + 180 * (Fn / Math.max(1, Fmax())), fl = 40 + 180 * (fr / Math.max(1, Fmax()));
    arrow(ctx, cx - cw / 2 - pl, floorY - 84, cx - cw / 2, floorY - 84, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fn, 0) + ' N', cx - cw / 2 - pl, floorY - 112, C('force'), { size: 20, weight: 600 });
    arrow(ctx, cx - cw / 2 + 16, floorY - 12, cx - cw / 2 + 16 - fl, floorY - 12, C('force'), 5);
    text(ctx, 'f = ' + fmt(fr, 0) + ' N', cx - cw / 2 + 16 - fl, floorY - 42, C('force'), { size: 20, weight: 600 });
    text(ctx, moving ? 'sliding at ' + fmt(vAt(t), 2) + ' m/s' : 'not moving', 1270, 130, PAL.muted, { size: 20, align: 'right' });
    /* the graph: the friction that answers the push */
    const sc = nice(0, Fmax(), 4), box = { l: 230, r: 1250, t: 420, b: 680 };
    const { X, Y } = axes(ctx, box, [0, sc.hi], [0, sc.hi], { xl: 'the push F (N)', xc: C('force'), yl: 'the friction f (N)', yc: C('force'), nx: sc.n, ny: sc.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, X(0), Y(0), X(fmax), Y(fmax), C('force'), 5);
    line(ctx, X(fmax), Y(fmax), X(fmax), Y(fk), PAL.muted, 3, [10, 10]);
    line(ctx, X(fmax), Y(fk), X(sc.hi), Y(fk), C('force'), 5);
    dot(ctx, X(fmax), Y(fmax), C('force'), false, 11);
    text(ctx, 'f_s(max) = ' + fmt(fmax, 0) + ' N', X(fmax) - 18, Y(fmax) - 26, C('force'), { size: 20, weight: 600, align: 'right' });
    text(ctx, 'f_k = ' + fmt(fk, 0) + ' N', X(sc.hi) - 12, Y(fk) - 26, C('force'), { size: 20, weight: 600, align: 'right' });
    text(ctx, 'while it is still, the friction is as large as the push', X(0) + 24, Y(sc.hi) + 32, PAL.muted, { size: 17 });
    line(ctx, X(Fn), box.b, X(Fn), Y(fr), PAL.muted, 2, [4, 8]);
    dot(ctx, X(Fn), Y(fr), C('force'), true, 9);
    headline(ctx, moving
      ? 'the crate broke away at ' + fmt(fmax, 0) + ' N, and the friction on it now stays at ' + fmt(fk, 0) + ' N however hard you push'
      : 'the push has reached ' + fmt(Fn, 0) + ' N and the friction answers with ' + fmt(fr, 0) + ' N, so nothing moves until ' + fmt(fmax, 0) + ' N');
    readout(d.readout, `\\kfsmax = \\mu_{\\text{s}}\\kN = (${fmt(us.v, 2)})(${fmt(N, 0)}\\ \\text{N}) = ${fmt(fmax, 0)}\\ \\text{N}`,
      'Once it is moving the friction is f_k = μ_k N = ' + fmt(fk, 0) + ' N, however hard you push, which is why the crate is easier to keep going than it was to start.');
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
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 5, max: 45, step: 1, value: 25, unit: 'º', dec: 0, onInput: reset, aria: 'angle of the slope' });
  const fk = ctl(d.controls, { label: '\\kfk', cls: 'force', min: 0, max: 200, step: 0.5, value: 45, unit: 'N', dec: 1, onInput: reset, aria: 'friction on the skier' });
  const T = 4;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now();
    const a0 = th.v * RAD, cs = Math.cos(a0), sn = Math.sin(a0);
    const w = m.v * G, wp = w * cs, wx = w * sn, a = (wx - fk.v) / m.v, mu = fk.v / wp;
    const steady = Math.abs(a) < 0.02;
    const frac = a > 0.02 ? (t * t) / (T * T) : t / T;
    const v = a > 0.02 ? a * t : 0;
    /* the slope, kept inside the canvas at every angle */
    const bx = 880, by = 540, L = Math.min(560, 270 / sn, 550 / cs);
    const tx = bx - L * cs, ty = by - L * sn;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(bx, by); ctx.lineTo(bx, by + 70); ctx.lineTo(tx, by + 70); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, tx, ty, bx, by, PAL.muted, 3);
    line(ctx, tx, by, bx, by, PAL.rule, 2, [10, 10]);
    text(ctx, fmt(th.v, 0) + 'º', bx - 86, by - 18, PAL.ink, { size: 20, weight: 600, align: 'right' });
    const sx = tx + (bx - tx) * frac, sy = ty + (by - ty) * frac;
    /* the forces on her, drawn from her centre, with the skier over their tails */
    const px = sx + 8 * sn, py = sy - 44 - 8 * cs, S = 100 / w;
    const lab = { size: 20, weight: 600, bg: PAL.panel };
    arrow(ctx, px, py, px, py + w * S, C('force'), 5);
    text(ctx, 'w = ' + fmt(w, 0) + ' N', px, py + w * S + 24, C('force'), { ...lab, align: 'center' });
    arrow(ctx, px, py, px - wp * S * sn, py + wp * S * cs, C('force'), 4);
    text(ctx, 'w⊥', px - wp * S * sn - 22, py + wp * S * cs + 14, C('force'), { ...lab, align: 'right' });
    arrow(ctx, px, py, px + wx * S * cs, py + wx * S * sn, C('force'), 4);
    text(ctx, 'w∥', px + wx * S * cs + 22, py + wx * S * sn + 6, C('force'), lab);
    arrow(ctx, px, py, px + wp * S * sn, py - wp * S * cs, C('force'), 4);
    text(ctx, 'N', px + wp * S * sn + 14, py - wp * S * cs - 16, C('force'), lab);
    const fl = Math.max(28, fk.v * S);
    arrow(ctx, px, py, px - fl * cs, py - fl * sn, C('force'), 4);
    text(ctx, 'f = ' + fmt(fk.v, 1) + ' N', px - fl * cs - 18, py - fl * sn - 24, C('force'), { ...lab, align: 'right' });
    if (v > 0.05) {
      const vl = 40 + 80 * Math.min(1, v / Math.max(0.5, a * T));
      arrow(ctx, sx + 96 * cs, sy + 96 * sn, sx + (96 + vl) * cs, sy + (96 + vl) * sn, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', sx + (96 + vl) * cs + 14, sy + (96 + vl) * sn + 26, C('velocity'), { ...lab, align: 'center' });
    }
    skier(ctx, sx, sy, th.v);
    /* the free-body diagram, beside the slope as the book draws it */
    const fx = 1225, fy = 330, S2 = 100 / w;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(1080, 150, 300, 380); ctx.restore();
    text(ctx, 'free-body diagram', 1230, 182, PAL.muted, { size: 17, align: 'center' });
    line(ctx, fx - 110 * cs, fy - 110 * sn, fx + 110 * cs, fy + 110 * sn, PAL.rule, 2, [8, 8]);
    line(ctx, fx - 80 * sn, fy + 80 * cs, fx + 80 * sn, fy - 80 * cs, PAL.rule, 2, [8, 8]);
    dot(ctx, fx, fy, PAL.ink, true, 8);
    arrow(ctx, fx, fy, fx, fy + w * S2, C('force'), 4); text(ctx, 'w', fx + 12, fy + w * S2 + 16, C('force'), { size: 20, weight: 600 });
    arrow(ctx, fx, fy, fx + wp * S2 * sn, fy - wp * S2 * cs, C('force'), 4); text(ctx, 'N', fx + wp * S2 * sn + 12, fy - wp * S2 * cs - 14, C('force'), { size: 20, weight: 600 });
    const fl2 = Math.max(28, fk.v * S2);
    arrow(ctx, fx, fy, fx - fl2 * cs, fy - fl2 * sn, C('force'), 4); text(ctx, 'f', fx - fl2 * cs - 12, fy - fl2 * sn - 16, C('force'), { size: 20, weight: 600, align: 'right' });
    headline(ctx, steady
      ? 'the ' + fmt(fk.v, 1) + ' N of friction balances the ' + fmt(wx, 0) + ' N along the slope, so she slides at a constant velocity'
      : a > 0
        ? 'on a ' + fmt(th.v, 0) + 'º slope her ' + fmt(w, 0) + ' N weight gives ' + fmt(wx, 0) + ' N along the slope and ' + fmt(wp, 0) + ' N into it, so μ_k = ' + fmt(mu, 3)
        : 'the ' + fmt(fk.v, 1) + ' N of friction is more than the ' + fmt(wx, 0) + ' N along the slope, so she would slow down rather than speed up');
    readout(d.readout, `\\mu_{\\text{k}} = \\frac{\\kfk}{\\kN} = \\frac{\\kfk}{m\\kg\\cos\\theta} = \\frac{${fmt(fk.v, 1)}\\ \\text{N}}{(${fmt(m.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)(${fmt(cs, 3)})} = ${fmt(mu, 3)}`,
      'The acceleration down the slope is a = g(sin θ − μ_k cos θ) = ' + fmt(a, 2) + ' m/s², and it is the same for a skier of any mass. She slides at a constant velocity on a slope of tan⁻¹ μ_k = ' + fmt(Math.atan(mu) / RAD, 1) + 'º.');
  }
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
    /* the probe: atoms in an inverted pyramid with a flattened peak, leaning back as it is dragged */
    const hold = 1 + 2 * Math.min(2, Math.round((2 * N.v) / 40));
    ctx.save(); ctx.translate(tipX, surfaceY - 26); ctx.transform(1, 0, Math.tan(lean * RAD), 1, 0, 0);
    for (let r = 0; r < ROWS.length; r++) for (let c = ROWS[r][0]; c <= ROWS[r][1]; c++) dot(ctx, c * SP * 0.82, -SP * 0.88 * (ROWS.length - r), PAL.ink, false, 11);
    for (let c = -2; c <= 2; c++) dot(ctx, c * SP * 0.82, 0, PAL.ink, Math.abs(c) <= (hold - 1) / 2, 11);
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
    headline(ctx, 'pressed on with N = ' + fmt(N.v, 0) + ' nN, the tip is dragged back by f = ' + fmt(f, 2) + ' nN and leans ' + fmt(lean, 1) + 'º behind its base');
    readout(d.readout, `\\kfk = \\mu_{\\text{k}}\\kN = (${fmt(uk.v, 2)})(${fmt(N.v, 0)}\\ \\text{nN}) = ${fmt(f, 2)}\\ \\text{nN}`,
      'Press the tip on harder and more of its atoms adhere to the surface, so the friction that leans it back is larger. The atoms the tip has passed over are left vibrating, and that vibration travels away as sound and becomes the heat of rubbing.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   The figure the last two problems refer to: the block of ice pushed at
   25º below the horizontal and pulled at 25º above it. A faithful copy,
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
      person(ctx, x0 + 470, iceY, 190, hx + 30, hy - 10);
      line(ctx, cxp, cyp, hx + 30, hy - 10, PAL.ink, 3);
      arrow(ctx, cxp, cyp, hx, hy, C('force'), 5);
      text(ctx, 'F', (cxp + hx) / 2 + 6, (cyp + hy) / 2 - 26, C('force'), { size: 22, weight: 600, align: 'center' });
      line(ctx, cxp, cyp, cxp + 120, cyp, PAL.rule, 2, [8, 8]);
      text(ctx, fmt(ANG, 0) + 'º', cxp + 72, cyp - 24, PAL.ink, { size: 19, align: 'center' });
    } else {
      const cxp = bx - bw / 2, cyp = iceY - bh + 16;
      const hx = cxp - len * Math.cos(A), hy = cyp - len * Math.sin(A);
      person(ctx, x0 + 130, iceY, 190, hx, hy);
      arrow(ctx, hx, hy, cxp, cyp, C('force'), 5);
      text(ctx, 'F', hx - 16, hy - 12, C('force'), { size: 22, weight: 600, align: 'right' });
      line(ctx, cxp, cyp, cxp - 120, cyp, PAL.rule, 2, [8, 8]);
      text(ctx, fmt(ANG, 0) + 'º', cxp - 76, cyp - 24, PAL.ink, { size: 19, align: 'center' });
    }
    text(ctx, label, x0 + 24, 120, PAL.ink, { size: 24, weight: 700 });
  }
  function draw() {
    const { ctx } = begin(d.c);
    ice(ctx, 20, '(a) pushing', false);
    line(ctx, 700, 100, 700, 500, PAL.rule, 2);
    ice(ctx, 730, '(b) pulling', true);
    headline(ctx, 'the same 45.0 kg block of ice, pushed at 25º below the horizontal and pulled at 25º above it');
    readout(d.readout, '\\text{the block of ice: } m = 45.0\\ \\text{kg},\\quad \\theta = 25^\\circ');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
