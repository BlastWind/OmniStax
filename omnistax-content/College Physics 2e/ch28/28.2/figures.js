/* Figures for section 28.2 Simultaneity And Time Dilation. The figures draw time,
   velocity and position. Proper time is the dashed or hollow variant of the time
   hue. γ and v/c are untyped and in ink. The observers, the lamps, the rail car,
   the ship, the muon and the twins are referents; the light, the Earth and the
   star system are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['28.2'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, hbracket, vbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);

const gammaOf = (b) => 1 / Math.sqrt(1 - b * b);
/* a number to three significant figures, written without an exponent */
function sig(x, n) {
  if (!(Math.abs(x) > 0)) return '0';
  const d = Math.max(0, (n || 3) - 1 - Math.floor(Math.log10(Math.abs(x)) + 1e-9));
  return x.toFixed(d);
}
/* a short pulse of light whose front is at x, travelling in direction dir */
function pulse(ctx, x, y, dir) {
  const xc = x - dir * 30;
  curve(ctx, (t) => y - 11 * Math.sin(t * 5 * Math.PI) * Math.sin(t * Math.PI), 0, 1, (t) => xc - 30 + 60 * t, (yy) => yy, PAL.ink, 3, 70);
}
/* a timer dial: a sweep of the fraction f of one turn, dashed for a proper time */
function dial(ctx, x, y, r, f, proper) {
  const T = C('time');
  ctx.save();
  if (f > 0) {
    ctx.fillStyle = alpha(T, proper ? 0.3 : 0.6); ctx.beginPath(); ctx.moveTo(x, y);
    ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * Math.min(f, 1)); ctx.closePath(); ctx.fill();
  }
  ctx.strokeStyle = proper ? T : PAL.ink; ctx.lineWidth = 3; if (proper) ctx.setLineDash([6, 5]);
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    line(ctx, x + Math.cos(a) * (r - 6), y + Math.sin(a) * (r - 6), x + Math.cos(a) * (r - 1), y + Math.sin(a) * (r - 1), PAL.muted, 2);
  }
}

/* =====================================================================
   FIGURE 28.5 · sim-flash-lamps · moving · flat (root rule 28.1)
   Lengths in units of the car's half-length measured on the car, times in
   that length over c, so light moves one unit per unit of time. B's frame:
   B at x = 0, A at vt, the lamps at ±1/γ + vt, both flashing at t = 0.
   A's frame: A at 0, B at −vt, the lamps at ±1; the right lamp flashes at
   t = −v and the left at t = +v (the same two events, seen from the car).
   Both flashes reach B at one event, and the right flash reaches A first
   in both frames. 420 canvas units per unit length; B's frame is drawn
   with B at x = 520, A's with A at x = 700. The clock is the frame's own
   time over the window from the first flash to the last arrival.
===================================================================== */
(function () {
  const d = sim('sim-flash-lamps', 480);
  const frameC = choice(d.controls, { label: '\\text{frame}', options: [{ value: 'B', label: 'B’s frame (platform)' }, { value: 'A', label: 'A’s frame (rail car)' }], value: 'B', aria: 'whose frame the flashes are watched in', onInput: reset });
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.5, step: 0.01, value: 0.4, unit: '', dec: 2, onInput: reset, aria: 'the speed of the rail car relative to the platform, as a fraction of the speed of light' });
  const PX = 420, LY = 170, CAR_Y = 225, CAR_H = 50, RAIL = 267, PLAT = 400;
  const RATE = 1 / 1.5;

  function model() {
    const v = vS.v, g = gammaOf(v), L = 1 / g;
    if (frameC.value === 'B') {
      return { x0: 520, A: (t) => v * t, B: () => 0, lamps: (t) => [-L + v * t, L + v * t], R: [0, L], Lf: [0, -L],
        arrA: [L / (1 + v), L / (1 - v)], arrB: [L, L], t0: -0.15, t1: L / (1 - v) + 0.15, mover: 'car' };
    }
    return { x0: 700, A: () => 0, B: (t) => -v * t, lamps: () => [-1, 1], R: [-v, 1], Lf: [v, -1],
      arrA: [1 - v, 1 + v], arrB: [1, 1], t0: -v - 0.15, t1: 1 + v + 0.15, mover: 'platform' };
  }
  const cy = cycle(() => { const m = model(); return m.t1 - m.t0; }, 1.2);
  function reset() { cy.reset(); }

  function heard(arr, t) {
    const [r, l] = arr;
    if (Math.abs(r - l) < 1e-6) return t >= r ? 'both flashes together' : '';
    const first = r < l ? ['right', r] : ['left', l], second = r < l ? ['left', l] : ['right', r];
    if (t < first[1]) return '';
    return t < second[1] ? 'the ' + first[0] + ' flash' : 'the ' + first[0] + ' flash, then the ' + second[0];
  }

  function draw() {
    const { ctx } = begin(d.c);
    const m = model(), v = vS.v, t = m.t0 + cy.now(), X = (x) => m.x0 + x * PX;
    const xA = X(m.A(t)), xB = X(m.B(t)), [xl, xr] = m.lamps(t).map(X);
    const VEL = C('velocity'), cA = F.ref('observer-a'), cB = F.ref('observer-b'), cL = F.ref('left-lamp'), cR = F.ref('right-lamp');

    if (v < 0.005) topline(ctx, 'With no relative motion the lamps flash together for both, and each flash reaches A and B together.');
    else if (frameC.value === 'B') topline(ctx, 'In B’s frame the lamps flash at the same moment; the right flash reaches A first, and both reach B together.');
    else topline(ctx, 'In A’s frame the right lamp flashes first; the right flash reaches A first, and both reach B together.');

    line(ctx, 40, RAIL, 1360, RAIL, alpha(PAL.ink, 0.45), 3);
    line(ctx, 40, PLAT, 1360, PLAT, alpha(PAL.ink, 0.3), 2);
    line(ctx, xB, LY + 14, xB, PLAT - 96, alpha(PAL.ink, 0.25), 2, [4, 8]);
    line(ctx, 40, LY, 1360, LY, alpha(PAL.ink, 0.08), 2);

    F.cart(ctx, (xl + xr) / 2, CAR_Y, xr - xl + 40, CAR_H, alpha(F.ref('rail-car'), 0.7));
    [[xl, m.Lf, cL], [xr, m.R, cR]].forEach(([x, ev, lc]) => {
      line(ctx, x, LY, x, CAR_Y - CAR_H / 2, alpha(lc, 0.6), 3);
      dot(ctx, x, LY, lc, true, 11);
      const since = t - ev[0];
      if (since >= 0 && since < 0.25) {
        const k = 1 - since / 0.25;
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI / 4;
          line(ctx, x + Math.cos(a) * 18, LY + Math.sin(a) * 18, x + Math.cos(a) * (18 + 20 * k), LY + Math.sin(a) * (18 + 20 * k), alpha(PAL.ink, 0.4 + 0.6 * k), 3);
        }
      }
    });
    text(ctx, 'left lamp', xl, LY - 36, cL, { size: 17, align: 'center' });
    text(ctx, 'right lamp', xr, LY - 36, cR, { size: 17, align: 'center' });

    [[m.R, -1], [m.Lf, 1]].forEach(([ev, dir]) => {
      if (t < ev[0]) return;
      const x = X(ev[1] + dir * (t - ev[0]));
      if (x > 60 && x < 1340) pulse(ctx, x, LY, dir);
    });

    F.silhouette(ctx, { x: xA, y: CAR_Y - CAR_H / 2, s: 0.55, face: -1, pose: 'stand', color: cA });
    F.silhouette(ctx, { x: xB, y: PLAT, s: 0.55, face: 1, pose: 'stand', color: cB });
    label(ctx, 'A', xA + 18, CAR_Y - CAR_H / 2 - 70, { side: 'right', color: cA, size: 22 });
    label(ctx, 'B', xB + 18, PLAT - 70, { side: 'right', color: cB, size: 22 });

    if (v >= 0.005) {
      const len = 40 + 200 * v, xm = m.mover === 'car' ? xA - 60 : xB + 60, dir = m.mover === 'car' ? 1 : -1;
      arrow(ctx, xm, 292, xm + dir * len, 292, VEL, 4);
      label(ctx, 'v', xm + dir * len, 292, { side: dir > 0 ? 'right' : 'left', color: VEL, size: 22, gap: 12 });
    }

    const hA = heard(m.arrA, t), hB = heard(m.arrB, t);
    text(ctx, 'A receives: ' + (hA || '…'), 40, 432, cA, { size: 20, weight: 600 });
    text(ctx, 'B receives: ' + (hB || '…'), 40, 462, cB, { size: 20, weight: 600 });
    tex(d.readout, frameC.value === 'B' && v >= 0.005
      ? 't_{\\text{left}\\to A} / t_{\\text{right}\\to A} = (\\kc + \\kv) / (\\kc - \\kv) = ' + fmt((1 + v) / (1 - v), 2) + ',\\quad t_{\\text{left}\\to B} = t_{\\text{right}\\to B}'
      : '\\ku_{\\text{right flash}} = \\ku_{\\text{left flash}} = \\kc');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RATE), draw });
})();

/* =====================================================================
   FIGURE 28.6 · sim-light-clock · moving · flat (root rule 28.1)
   Times in units of the proper time Δt₀ of one round trip; the ship's width
   D is 130 canvas units, so light moves 2D = 260 units per Δt₀ in both
   panels. Left, the astronaut's frame: the light goes straight up and back
   in Δt₀. Right, the Earth's frame: the ship moves at v, the light runs
   the two slanted legs s and takes γΔt₀, and the ship moves 2L = vγ·260
   units, 790 at the slider's 0.95. One clock runs both panels at 1.4 s per
   Δt₀; the dials turn once in 4Δt₀.
===================================================================== */
(function () {
  const d = sim('sim-light-clock', 520);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.95, step: 0.01, value: 0.6, unit: '', dec: 2, onInput: reset, aria: 'the speed of the ship relative to the Earth, as a fraction of the speed of light',
    specials: [{ at: 0.95, label: '0.950c' }] });
  const cy = cycle(() => gammaOf(vS.v), 1.2);
  function reset() { cy.reset(); }
  const D = 130, CPX = 2 * D, YT = 170, YB = YT + D, BW = 120, X0 = 520, AX = 230;

  function cabin(ctx, x, dashed) {
    const S = F.ref('ship');
    ctx.save(); ctx.strokeStyle = dashed ? alpha(S, 0.35) : alpha(S, 0.8); ctx.lineWidth = 3;
    if (dashed) ctx.setLineDash([8, 7]);
    ctx.strokeRect(x - BW / 2, YT - 22, BW, D + 44); ctx.restore();
    line(ctx, x - 26, YT - 6, x + 26, YT - 6, dashed ? alpha(PAL.ink, 0.35) : PAL.ink, 6);
    ctx.save(); ctx.fillStyle = dashed ? alpha(PAL.ink, 0.25) : alpha(PAL.ink, 0.7); ctx.fillRect(x - 12, YB + 4, 24, 12); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const T = C('time'), P = C('position'), VEL = C('velocity');
    const v = vS.v, g = gammaOf(v), tau = cy.now();
    topline(ctx, v < 0.005 ? 'With the ship at rest, both observers time the round trip of the light the same.'
      : 'At $\\kv = ' + fmt(v, 2) + '\\,\\kc$ the Earth-bound observer times the round trip at ' + fmt(g, 2) + ' times the astronaut’s proper time.');

    text(ctx, '(a) the astronaut’s frame', AX, 92, F.ref('astronaut'), { size: 17, align: 'center' });
    text(ctx, '(b) the Earth-bound observer’s frame', 900, 92, F.ref('earth-observer'), { size: 17, align: 'center' });
    line(ctx, 392, 100, 392, 500, alpha(PAL.ink, 0.15), 2);

    /* (a) */
    cabin(ctx, AX, false);
    const p = Math.min(tau, 1), ya = YB - D * (1 - Math.abs(1 - 2 * p));
    line(ctx, AX, YB, AX, p < 0.5 ? ya : YT, alpha(PAL.ink, 0.55), 3);
    dot(ctx, AX, ya, PAL.ink, true, 8);
    vbracket(ctx, AX + 90, YT, YB, P, 'D', 1);
    F.silhouette(ctx, { x: AX - 34, y: YB + 22, s: 0.42, face: 1, pose: 'stand', color: F.ref('astronaut') });
    dial(ctx, AX - 20, 420, 34, p / 4, true);
    text(ctx, 'Δt_0', AX + 26, 420, T, { size: 24, weight: 600 });
    text(ctx, fmt(p, 2) + ' Δt_0', AX + 26, 452, T, { size: 17 });

    /* (b) */
    const L = CPX * v * g / 2, xs = X0 + CPX * v * tau;
    const half = g / 2, lx = tau <= half ? X0 + L * (tau / half) : X0 + L + L * ((tau - half) / half);
    const ly = tau <= half ? YB - D * (tau / half) : YT + D * ((tau - half) / half);
    cabin(ctx, X0, true);
    cabin(ctx, xs, false);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(X0, YB);
    if (tau > half) ctx.lineTo(X0 + L, YT);
    ctx.lineTo(lx, ly); ctx.stroke(); ctx.restore();
    dot(ctx, lx, ly, PAL.ink, true, 8);
    vbracket(ctx, X0 - BW / 2 - 18, YT, YB, P, 'D', -1);
    if (L > 30 && tau >= half) label(ctx, 's', X0 + L / 2 - 14, (YT + YB) / 2 - 10, { side: 'left', color: P, size: 24, gap: 8 });
    if (L > 30 && tau >= g) label(ctx, 's', X0 + 1.5 * L + 14, (YT + YB) / 2 - 10, { side: 'right', color: P, size: 24, gap: 8 });
    if (L > 30 && tau >= half) hbracket(ctx, X0, X0 + L, YB + 52, P, 'L = vΔt/2', { side: 'below' });
    if (L > 30 && tau >= g) hbracket(ctx, X0 + L, X0 + 2 * L, YB + 52, P, 'L', { side: 'below' });
    if (v >= 0.005) {
      arrow(ctx, xs - 50, YT - 48, xs - 50 + 40 + 120 * v, YT - 48, VEL, 4);
      label(ctx, 'v', xs - 50 + 40 + 120 * v, YT - 48, { side: 'right', color: VEL, size: 22, gap: 12 });
    }
    line(ctx, 430, 490, 1380, 490, alpha(PAL.ink, 0.3), 2);
    F.silhouette(ctx, { x: 1345, y: 490, s: 0.5, face: -1, pose: 'stand', color: F.ref('earth-observer') });
    const te = Math.min(tau, g);
    dial(ctx, 1150, 440, 34, te / 4, false);
    text(ctx, 'Δt', 1196, 426, T, { size: 24, weight: 600 });
    text(ctx, fmt(te, 2) + ' Δt_0', 1196, 458, T, { size: 17 });

    tex(d.readout, '\\kdt = \\gamma\\kdto = ' + fmt(g, 2) + '\\,\\kdto');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 1.4), draw });
})();

/* =====================================================================
   FIGURE 28.7 · sim-muon-gamma · still · flat (root rule 28.1)
   The γ curve against v/c, 0 to 1 by 0.2, γ 0 to 12 by 2 (the slider's
   0.995 gives 10.0, inside the box). Beside it the muon above the ground
   and two lifetime bars on one scale, 0 to 20 μs over 280 units, with a
   chevron past the end (the slider's corner reaches 30.0 μs).
===================================================================== */
(function () {
  const d = sim('sim-muon-gamma', 500);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.995, step: 0.001, value: 0.95, unit: '', dec: 3, aria: 'the speed of the muon as a fraction of the speed of light',
    specials: [{ at: 0.95, label: '0.950c' }] });
  const tS = ctl(d.controls, { label: '\\kdto', cls: 'time', min: 0.5, max: 3, step: 0.01, value: 1.52, unit: 'μs', dec: 2, aria: 'the lifetime of the muon measured by its own clock, in microseconds' });
  const box = { l: 110, r: 780, t: 110, b: 420 };
  const BY0 = 430, BH = 280, BMAX = 20, B1 = 1150, B2 = 1290;

  function bar(ctx, x, val, proper, name) {
    const T = C('time');
    const h = Math.min(val, BMAX) / BMAX * BH;
    ctx.save();
    ctx.fillStyle = alpha(T, proper ? 0.25 : 0.7); ctx.fillRect(x - 28, BY0 - h, 56, h);
    ctx.strokeStyle = T; ctx.lineWidth = 3; if (proper) ctx.setLineDash([8, 6]); ctx.strokeRect(x - 28, BY0 - h, 56, h);
    ctx.restore();
    if (val > BMAX) arrow(ctx, x, BY0 - BH - 2, x, BY0 - BH - 26, T, 4);
    text(ctx, sig(val) + ' μs', x, BY0 - Math.min(h, BH) - (val > BMAX ? 42 : 18), T, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, name, x, BY0 + 26, T, { size: 24, weight: 600, align: 'center' });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v = vS.v, g = gammaOf(v), t0 = tS.v, t = g * t0;
    const VEL = C('velocity'), MU = F.ref('muon');
    topline(ctx, 'At $\\kv = ' + (v < 0.0005 ? '0' : sig(v) + '\\,\\kc') + '$, $\\gamma = ' + sig(g) + '$, so a muon that lives ' + fmt(t0, 2) + ' μs by its own clock lives ' + sig(t) + ' μs by the Earth’s.');

    const { X, Y } = axes(ctx, box, [0, 1], [0, 12], { xl: 'v/c', xc: VEL, yl: 'γ', nx: 5, ny: 6, fx: (x) => fmt(x, 1) });
    line(ctx, X(1), box.t, X(1), box.b, VEL, 3, [10, 10]);
    text(ctx, 'c', X(1) + 12, box.t + 14, VEL, { size: 22, weight: 600 });
    curve(ctx, gammaOf, 0, 0.9955, X, Y, PAL.ink, 5, 240);
    line(ctx, X(v), Y(g), X(v), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, box.l, Y(g), X(v), Y(g), alpha(PAL.ink, 0.4), 2, [4, 8]);
    const pt = pinned(ctx, box, X, Y, v, g, PAL.ink);
    label(ctx, 'γ = ' + sig(g), v < 0.3 ? pt.x + 70 : pt.x, pt.y, { side: v < 0.3 ? 'above' : 'left', size: 22, gap: 22 });

    line(ctx, 830, 460, 1040, 460, alpha(PAL.ink, 0.45), 3);
    F.silhouette(ctx, { x: 960, y: 460, s: 0.5, face: -1, pose: 'stand', color: F.ref('muon-observer') });
    dot(ctx, 900, 150, MU, true, 10);
    label(ctx, 'muon', 900, 150, { side: 'left', color: MU, size: 20, gap: 18 });
    if (v >= 0.005) {
      arrow(ctx, 900, 172, 900, 172 + 30 + 110 * v, VEL, 4);
      label(ctx, 'v', 900, 172 + 15 + 55 * v, { side: 'right', color: VEL, size: 22, gap: 14 });
    }

    line(ctx, 1080, BY0, 1360, BY0, alpha(PAL.ink, 0.4), 2);
    for (let k = 0; k <= BMAX; k += 5) {
      const y = BY0 - k / BMAX * BH;
      line(ctx, 1080, y, 1090, y, PAL.muted, 2);
      text(ctx, String(k), 1072, y, PAL.muted, { size: 17, align: 'right' });
    }
    text(ctx, 'μs', 1072, BY0 - BH - 26, PAL.muted, { size: 17, align: 'right' });
    bar(ctx, B1, t0, true, 'Δt_0');
    bar(ctx, B2, t, false, 'Δt');

    tex(d.readout, '\\kdt = \\gamma\\kdto = (' + sig(g) + ')(' + fmt(t0, 2) + '\\;\\mu\\text{s}) = ' + sig(t) + '\\;\\mu\\text{s}');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 28.8 · sim-twins · still · flat (root rule 28.1)
   The trip drawn above, Earth to the star system and back, with the four
   accelerations marked. Below, the years each twin ages on one scale,
   0 to 80 years over 1000 units, with a chevron past it (the sliders'
   corner reaches 160 years). Both twins are 40 when the astronaut leaves.
===================================================================== */
(function () {
  const d = sim('sim-twins', 470);
  const frameC = choice(d.controls, { label: '\\text{frame}', options: [{ value: 'earth', label: 'Earth twin' }, { value: 'ship', label: 'astronaut' }], value: 'earth', aria: 'whose frame the ages are reckoned in' });
  const gS = ctl(d.controls, { label: '\\gamma', cls: '', min: 1, max: 40, step: 0.1, value: 30, unit: '', dec: 1, aria: 'the relativistic factor gamma of the trip',
    specials: [{ at: 30, label: '30.0' }] });
  const tS = ctl(d.controls, { label: '\\kdto', cls: 'time', min: 1, max: 4, step: 0.05, value: 2, unit: 'y', dec: 2, aria: 'the length of the round trip in the astronaut’s frame, in years' });
  const ro = F.readout(d);
  const XE = 170, XS = 1230, BX = 260, BW = 1000, YMAX = 80;
  const Xy = (y) => BX + Math.min(y, YMAX) / YMAX * BW;

  function ageBar(ctx, y, years, proper, color, who) {
    const T = C('time');
    ctx.save();
    ctx.fillStyle = alpha(T, proper ? 0.25 : 0.7); ctx.fillRect(BX, y - 14, Xy(years) - BX, 28);
    ctx.strokeStyle = T; ctx.lineWidth = 3; if (proper) ctx.setLineDash([8, 6]); ctx.strokeRect(BX, y - 14, Xy(years) - BX, 28);
    ctx.restore();
    const over = years > YMAX, end = Xy(years) + (over ? 34 : 0);
    if (over) arrow(ctx, Xy(years) + 6, y, Xy(years) + 30, y, T, 4);
    const s = 'ages ' + sig(years) + ' y, ' + sig(40 + years) + ' at the return';
    const w = F.measure(ctx, s, { size: 20, weight: 600 });
    const inside = end + 14 + w > 1380;
    text(ctx, s, inside ? Xy(years) - 12 : end + 14, y, inside ? PAL.ink : T, { size: 20, weight: 600, align: inside ? 'right' : 'left', bg: PAL.panel });
    F.silhouette(ctx, { x: 150, y: y + 30, s: 0.4, face: 1, pose: 'stand', color });
    text(ctx, who, 190, y - 28, color, { size: 17, weight: 600 });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const g = gS.v, t0 = tS.v, earth = frameC.value === 'earth';
    const tw = earth ? g * t0 : t0 / g;
    topline(ctx, earth
      ? 'By the Earth-bound twin’s clock the trip takes ' + sig(tw) + ' years; the astronaut ages ' + sig(t0) + '.'
      : 'Reckoned as if her frame were inertial, her twin ages only ' + sig(tw) + ' years. Both cannot be correct.');

    dot(ctx, XE, 140, PAL.ink, true, 14);
    text(ctx, 'Earth', XE, 104, PAL.ink, { size: 20, align: 'center' });
    for (let i = 0; i < 5; i++) {
      const a = i * 2 * Math.PI / 5 - Math.PI / 2, b = a + Math.PI / 5;
      line(ctx, XS + Math.cos(a) * 16, 140 + Math.sin(a) * 16, XS + Math.cos(b) * 7, 140 + Math.sin(b) * 7, PAL.ink, 3);
      line(ctx, XS + Math.cos(b) * 7, 140 + Math.sin(b) * 7, XS + Math.cos(a + 2 * Math.PI / 5) * 16, 140 + Math.sin(a + 2 * Math.PI / 5) * 16, PAL.ink, 3);
    }
    text(ctx, 'star system', XS, 104, PAL.ink, { size: 20, align: 'center' });
    arrow(ctx, XE + 40, 128, XS - 40, 128, alpha(PAL.ink, 0.55), 3);
    arrow(ctx, XS - 40, 154, XE + 40, 154, alpha(PAL.ink, 0.55), 3);
    const tr = F.ref('traveler');
    [[XE + 80, 128], [XS - 80, 128], [XS - 80, 154], [XE + 80, 154]].forEach(([x, y]) => dot(ctx, x, y, tr, true, 8));
    text(ctx, 'the four accelerations only the astronaut goes through', (XE + XS) / 2, 186, tr, { size: 17, align: 'center' });

    ageBar(ctx, 270, tw, !earth, F.ref('earth-twin'), 'Earth-bound twin');
    ageBar(ctx, 360, t0, true, tr, 'astronaut');
    line(ctx, BX, 405, BX + BW, 405, alpha(PAL.ink, 0.4), 2);
    for (let y = 0; y <= YMAX; y += 10) {
      line(ctx, Xy(y), 399, Xy(y), 411, PAL.muted, 2);
      text(ctx, String(y), Xy(y), 432, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'years aged', BX + BW, 458, PAL.muted, { size: 17, align: 'right' });

    ro.set(earth
      ? '\\kdt = \\gamma\\kdto = (' + sig(g) + ')(' + sig(t0) + '\\;\\text{y}) = ' + sig(tw) + '\\;\\text{y}'
      : '\\frac{\\kdto}{\\gamma} = \\frac{' + sig(t0) + '\\;\\text{y}}{' + sig(g) + '} = ' + sig(tw) + '\\;\\text{y}',
      earth ? 'The Earth-bound twin’s frame is inertial, so this reckoning holds.' : 'The astronaut accelerates four times, so her frame is not inertial and this reckoning fails.',
      { form: earth });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
