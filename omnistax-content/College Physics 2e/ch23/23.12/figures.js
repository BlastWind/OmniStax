/* Figures for section 23.12 RLC Series AC Circuits.
   The page binds inductance, capacitance, resistance, frequency, voltage,
   current, power, time and energy, which is exactly the list ch23/COLOR.md
   gives 23.12. Two rules of that file govern almost every stroke here. An ohm
   is an ohm: the resistance, the two reactances and the impedance are one hue
   with four subscripts, because the whole argument of the section is that they
   are four numbers of one kind that combine into a fifth. And the voltages are
   one hue too: V_R, V_L, V_C and the source voltage are told apart by their
   labels and their dash patterns, never by a second colour, because a page
   that gave each of them a hue would be saying they are three kinds of
   quantity when the section's point is that they are one kind added wrongly.
   No device is tinted: the resistor's box, the inductor's coil, the
   capacitor's plates, the source, every wire, the spring, the block, the wheel
   and the road are all ink, and what wears a hue is the quantity written
   beside them. The frequency, the phase angle, the power factor and every axis
   title follow the same rule, the first coloured because it is a type of this
   book and the last three in ink because they are not. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.12'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, topline, label, hbracket, vbracket, axes, curve, pinned, angleArc, note, hover, view, face, spring } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const TWO_PI = Math.PI * 2, DEG = 180 / Math.PI;

/* The three numbers the whole section is built from, for a circuit of R ohms,
   L henries and C farads driven at f hertz. */
function circuit(f, R, L, Cf) {
  const XL = TWO_PI * f * L, XC = f <= 0 ? Infinity : 1 / (TWO_PI * f * Cf);
  const Z = Math.sqrt(R * R + (XL - XC) * (XL - XC));
  const phi = Math.atan2(XL - XC, R);
  return { XL, XC, Z, phi, f0: 1 / (TWO_PI * Math.sqrt(L * Cf)) };
}

/* ---------- the pieces every circuit on this page is drawn from ---------- */
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
/* a resistance on the wire, a plain box in ink; what is written beside it is a
   resistance and wears that hue */
function resistorBox(ctx, x, y, w, h) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* an inductor: the coil of wire the symbol is, four humps on the wire */
function coil(ctx, x, y, w) {
  const n = 4, s = w / n, r = s / 2;
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
  ctx.beginPath();
  for (let i = 0; i < n; i++) ctx.arc(x - w / 2 + r + i * s, y, r, Math.PI, 0);
  ctx.stroke(); ctx.restore();
}
/* a capacitor: two plates across the wire, with a gap between them */
function capPlates(ctx, x, y, half) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'butt';
  ctx.beginPath(); ctx.moveTo(x - 11, y - half); ctx.lineTo(x - 11, y + half);
  ctx.moveTo(x + 11, y - half); ctx.lineTo(x + 11, y + half); ctx.stroke(); ctx.restore();
}
/* an AC source: the circle with a sine through it */
function acSource(ctx, x, y, r) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TWO_PI); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i <= 40; i++) {
    const u = -0.62 * r + (1.24 * r) * i / 40, v = -0.42 * r * Math.sin(TWO_PI * (u / (1.24 * r)));
    if (i) ctx.lineTo(x + u, y + v); else ctx.moveTo(x + u, y + v);
  }
  ctx.stroke(); ctx.restore();
}
/* an arrow set along a wire in the current hue, its length telling the size of
   the current and its direction telling the sign */
function flow(ctx, x, y, dx, dy, L) {
  if (L < 10) return;
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, C('current'), 5);
}

/* =====================================================================
   FIGURE 23.46 + 23.47: the circuit and what each of its elements is
   doing at each instant. The book draws the loop once and then draws,
   in seven stacked panels, the current and the four voltages against
   time; this is one loop with its curves beneath it. It moves, because
   the whole content is when each quantity peaks. The horizontal axis is
   the number of cycles elapsed rather than a time in milliseconds,
   since the period runs from 0.333 ms to 50 ms across the frequency
   slider and a time axis would have to rescale; the period is stated in
   the headline at every setting instead.
===================================================================== */
(function () {
  const H = 1000;
  const d = sim('sim-rlc-voltages', H);
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 20, max: 3000, step: 10, value: 60, unit: 'Hz', dec: 0, onInput: reset, aria: 'the frequency of the AC source' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 30, max: 120, step: 1, value: 40, unit: 'Ω', dec: 1, onInput: reset, aria: 'the resistance of the resistor' });
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 6, step: 0.25, value: 3, unit: 'mH', dec: 2, onInput: reset, aria: 'the inductance of the inductor' });
  const cS = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 2, max: 10, step: 0.25, value: 5, unit: 'µF', dec: 2, onInput: reset, aria: 'the capacitance of the capacitor' });
  /* a dropdown rather than a button row, since five curves on one frame at once
     would be unreadable at any setting and the two names are long (rule 26.1) */
  const showC = select(d.controls, {
    label: '\\text{the graph carries}',
    options: [{ value: 'elements', label: 'each element' }, { value: 'source', label: 'source and current' }],
    value: 'elements', aria: 'whether the graph carries the three element voltages or the source voltage beside the current',
  });

  const VRMS = 120, V0 = VRMS * Math.SQRT2;       /* the source the book fixes at 120 V rms */
  /* Fixed ranges, taken from the slider maxima and never rescaled: the source
     peaks at 170 V, and the greatest element voltage the four sliders can reach
     together is 310 V, across the inductor at resonance with 6.00 mH, 2.00 µF
     and 30 Ω, and a setting past the frame is pinned at its edge. The current
     cannot pass 170 V / 30 Ω = 5.66 A. */
  const VMAX = 350, IMAX = 6, CYCLES = 2;
  const BOX = { l: 200, r: 1270, t: 628, b: 908 };
  const cy = cycle(() => CYCLES, 1.2);
  function reset() { cy.reset(); }

  function draw() {
    const { ctx } = begin(d.c);
    const f = fS.v, R = rS.v, L = lS.v * 1e-3, Cf = cS.v * 1e-6;
    const { XL, XC, Z, phi } = circuit(f, R, L, Cf);
    const I0 = V0 / Z, th = TWO_PI * cy.now();
    const iNow = I0 * Math.sin(th);
    const vR = iNow * R, vL = I0 * XL * Math.cos(th), vC = -I0 * XC * Math.cos(th), vS = vR + vL + vC;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance'), cL = C('inductance'), cC = C('capacitance'), cF = C('frequency'), cT = C('time');
    const period = 1000 / f;                                   /* the period in milliseconds */
    const elems = showC.value === 'elements';

    /* the loop: the three elements along the top, the source along the bottom */
    const yT = 214, yB = 452, xL = 230, xR = 1240;
    wires(ctx, [[xL, yT], [xR, yT]]);
    wires(ctx, [[xL, yT], [xL, yB], [xR, yB], [xR, yT]]);
    resistorBox(ctx, 430, yT, 128, 46);
    text(ctx, 'R', 430, yT - 44, cR, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(R, 1) + ' Ω', 430, yT + 46, cR, { size: 21, align: 'center', bg: PAL.panel });
    coil(ctx, 730, yT, 132);
    text(ctx, 'L', 730, yT - 52, cL, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(lS.v, 2) + ' mH', 730, yT + 46, cL, { size: 21, align: 'center', bg: PAL.panel });
    capPlates(ctx, 1030, yT, 30);
    text(ctx, 'C', 1030, yT - 52, cC, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(cS.v, 2) + ' µF', 1030, yT + 46, cC, { size: 21, align: 'center', bg: PAL.panel });
    acSource(ctx, 735, yB, 44);
    text(ctx, fmt(f, 0) + ' Hz', 735, yB + 68, cF, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, '120 V rms', 735, yB + 102, cV, { size: 21, weight: 600, align: 'center', bg: PAL.panel });

    /* the instantaneous voltage across each element, written beside it, and the
       one current that runs through all three */
    const vTag = (x, name, v) => {
      text(ctx, name + ' = ' + fmt(v, v > 99 || v < -99 ? 0 : 1) + ' V', x, yT - 88, cV, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    };
    vTag(430, 'V_R', vR); vTag(730, 'V_L', vL); vTag(1030, 'V_C', vC);
    text(ctx, 'V = ' + fmt(vS, 0) + ' V', 735, yB - 62, cV, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    const iLen = 30 + 70 * Math.min(1, Math.abs(iNow) / IMAX);
    flow(ctx, 960, yB, iNow >= 0 ? -1 : 1, 0, iLen);
    text(ctx, 'I = ' + fmt(iNow, 3) + ' A', 960, yB + 52, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    flow(ctx, 230 + 0.5 * (430 - 230 - 128), yT, iNow >= 0 ? 1 : -1, 0, iLen);

    /* the graph: everything against the number of cycles that have gone by */
    const { X, Y } = axes(ctx, BOX, [0, CYCLES], [-VMAX, VMAX], {
      xl: 'cycles of the source', xc: cT, yl: 'voltage (V)', yc: cV, nx: 4, ny: 4, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 0),
    });
    const Y2 = (a) => (BOX.t + BOX.b) / 2 - (a / IMAX) * (BOX.b - BOX.t) / 2;
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    if (elems) {
      curve(ctx, (u) => I0 * R * Math.sin(TWO_PI * u), 0, CYCLES, X, Y, cV, 5, 300);
      ctx.save(); ctx.setLineDash([10, 10]);
      curve(ctx, (u) => I0 * XL * Math.cos(TWO_PI * u), 0, CYCLES, X, Y, cV, 5, 300);
      ctx.restore();
      ctx.save(); ctx.setLineDash([4, 8]);
      curve(ctx, (u) => -I0 * XC * Math.cos(TWO_PI * u), 0, CYCLES, X, Y, cV, 5, 300);
      ctx.restore();
    } else {
      curve(ctx, (u) => I0 * Z * Math.sin(TWO_PI * u + phi), 0, CYCLES, X, Y, cV, 5, 300);
      curve(ctx, (u) => I0 * Math.sin(TWO_PI * u), 0, CYCLES, X, Y2, cI, 5, 300);
    }
    ctx.restore();
    /* the right-hand scale, which the current rides when it is drawn */
    line(ctx, BOX.r, BOX.t, BOX.r, BOX.b, PAL.muted, 2);
    if (!elems) {
      for (let k = -2; k <= 2; k++) text(ctx, fmt(k * IMAX / 2, 0), BOX.r + 14, Y2(k * IMAX / 2), PAL.muted, { size: 17, align: 'left' });
      text(ctx, 'current (A)', BOX.r, BOX.t - 24, cI, { size: 20, weight: 600, align: 'right' });
    }
    /* the names on the curves, set at the crest each one reaches first */
    const at = (u, v, Yf) => [Math.min(Math.max(X(u), BOX.l + 8), BOX.r - 28), Math.min(Math.max(Yf(v), BOX.t + 22), BOX.b - 8)];
    const tag = (s, u, v, Yf, col) => { const q = at(u, v, Yf); text(ctx, s, q[0] + 14, q[1] - 16, col, { size: 21, weight: 600, bg: PAL.panel }); };
    if (elems) {
      tag('V_R', 0.32, I0 * R, Y, cV);
      tag('V_L', 0.0, I0 * XL, Y, cV);
      tag('V_C', 0.5, I0 * XC, Y, cV);
    } else {
      tag('V', 0.25 - phi / TWO_PI, I0 * Z, Y, cV);
      tag('I', 0.25, I0, Y2, cI);
    }
    /* where the figure stands at this instant */
    line(ctx, X(cy.now()), BOX.t, X(cy.now()), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    if (elems) {
      pinned(ctx, BOX, X, Y, cy.now(), vR, cV, null);
      pinned(ctx, BOX, X, Y, cy.now(), vL, cV, null);
      pinned(ctx, BOX, X, Y, cy.now(), vC, cV, null);
    } else {
      pinned(ctx, BOX, X, Y, cy.now(), vS, cV, null);
      pinned(ctx, BOX, X, Y2, cy.now(), iNow, cI, null);
    }

    topline(ctx, XC > XL
      ? 'At ' + fmt(f, 0) + ' Hz the capacitor’s ' + fmt(XC, XC > 99 ? 0 : 2) + ' Ω dwarfs the inductor’s ' + fmt(XL, XL > 99 ? 0 : 2) + ' Ω, so the current reaches its peak ' + fmt(-phi * DEG, 1) + '° of a cycle before the source voltage does, and one cycle takes ' + fmt(period, period > 9 ? 1 : 3) + ' ms.'
      : 'At ' + fmt(f, 0) + ' Hz the inductor’s ' + fmt(XL, XL > 99 ? 0 : 2) + ' Ω outweighs the capacitor’s ' + fmt(XC, XC > 99 ? 0 : 2) + ' Ω, so the current reaches its peak ' + fmt(phi * DEG, 1) + '° of a cycle after the source voltage does, and one cycle takes ' + fmt(period, period > 9 ? 1 : 3) + ' ms.');
    readout(d.readout,
      `\\kZimp = \\sqrt{\\kRes^{2} + (\\kXL - \\kXC)^{2}} = \\sqrt{(${fmt(R, 1)}\\ \\Omega)^{2} + (${fmt(XL, XL > 99 ? 0 : 2)}\\ \\Omega - ${fmt(XC, XC > 99 ? 0 : 2)}\\ \\Omega)^{2}} = ${fmt(Z, Z > 99 ? 0 : 2)}\\ \\Omega`,
      'The three peak voltages are ' + fmt(I0 * R, 1) + ' V, ' + fmt(I0 * XL, 1) + ' V and ' + fmt(I0 * XC, 1) + ' V, which add to ' + fmt(I0 * (R + XL + XC), 0) + ' V if they are simply added and to the ' + fmt(I0 * Z, 0) + ' V the source really provides if they are added as the sides of a triangle.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => CYCLES / 5.0), draw });
})();

/* =====================================================================
   SIM: the impedance triangle. The book states the square root and says
   in words that it is not a sum; it never draws the triangle whose sides
   the three numbers are, which is a pity, because the phase angle lives
   in the same picture. Still: a triangle is a geometry and has no clock
   in it. The two halves share one scale in ohms, 600 Ω to the frame, so
   that the triangle and the curves beside it are one drawing; the
   capacitive reactance runs to 1326 Ω at the foot of the frequency
   slider and is clipped there with its value stated, since no honest
   frame holds both that and a 40 Ω resistance.
===================================================================== */
(function () {
  const H = 900;
  const d = sim('sim-impedance-triangle', H);
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 60, max: 3000, step: 10, value: 60, unit: 'Hz', dec: 0, aria: 'the frequency of the AC source' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 30, max: 120, step: 1, value: 40, unit: 'Ω', dec: 1, aria: 'the resistance of the resistor' });
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 6, step: 0.25, value: 3, unit: 'mH', dec: 2, aria: 'the inductance of the inductor' });
  const cS = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 2, max: 10, step: 0.25, value: 5, unit: 'µF', dec: 2, aria: 'the capacitance of the capacitor' });

  const VRMS = 120;
  const OHMS = 600, SC = 0.6;                    /* ohms to the frame, and canvas units to the ohm */
  const OX = 232, OY = 462;                      /* the corner the triangle is built out from */
  const BOX = { l: 800, r: 1310, t: 196, b: 730 };
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const f = fS.v, R = rS.v, L = lS.v * 1e-3, Cf = cS.v * 1e-6;
    const { XL, XC, Z, phi, f0 } = circuit(f, R, L, Cf);
    const cR = C('resistance'), cF = C('frequency'), cV = C('voltage'), cI = C('current');
    const X = XL - XC, Irms = VRMS / Z;
    hits = [];

    /* the triangle, drawn to scale in ohms: the resistance along the foot, the
       difference of the two reactances standing on it, the impedance across the
       corner. A leg past the frame is drawn to the frame's edge and its value
       is stated, since the reader is being shown which of the three dominates. */
    const clip = (v) => Math.max(-OHMS, Math.min(OHMS, v));
    const fx = OX + clip(R) * SC, fy = OY, ty = OY - clip(X) * SC;
    line(ctx, OX, OY - 360, OX, OY + 360, alpha(PAL.ink, 0.3), 2, [10, 10]);
    line(ctx, OX - 40, OY, OX + 180, OY, alpha(PAL.ink, 0.3), 2, [10, 10]);
    arrow(ctx, OX, OY, fx, fy, cR, 5);
    text(ctx, 'R = ' + fmt(R, 1) + ' Ω', OX + 4, OY + 56, cR, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    if (Math.abs(X) * SC > 3) {
      arrow(ctx, fx, fy, fx, ty, cR, 5);
      text(ctx, (X > 0 ? 'X_L − X_C = ' : 'X_C − X_L = ') + fmt(Math.abs(X), Math.abs(X) > 99 ? 0 : 2) + ' Ω', fx + 18, (fy + ty) / 2, cR, { size: 22, weight: 600, align: 'left' });
    } else {
      text(ctx, 'X_L − X_C = 0, so the triangle has collapsed to its foot', fx + 18, fy - 30, cR, { size: 21, weight: 600, align: 'left' });
    }
    line(ctx, OX, OY, fx, ty, cR, 6);
    text(ctx, 'Z = ' + fmt(Z, Z > 99 ? 0 : 2) + ' Ω', OX - 22, (OY + ty) / 2, cR, { size: 24, weight: 600, align: 'right' });
    if (Math.abs(phi) > 0.03) angleArc(ctx, { x: OX, y: OY }, 78, 0, -phi, 'φ = ' + fmt(Math.abs(phi) * DEG, 1) + '°');
    dot(ctx, OX, OY, PAL.ink, true, 7);
    text(ctx, X > 0 ? 'the inductor wins, and the current lags the source voltage' : X < 0 ? 'the capacitor wins, and the current leads the source voltage' : 'neither wins: this is resonance', 40, 848, PAL.muted, { size: 19, align: 'left' });
    hits.push({ x: (OX + fx) / 2, y: OY, r: 40, name: 'the resistance, ' + fmt(R, 1) + ' Ω, which is the foot of the triangle' });
    hits.push({ x: fx, y: (fy + ty) / 2, r: 46, name: 'the difference of the two reactances, ' + fmt(Math.abs(X), 1) + ' Ω' });
    hits.push({ x: (OX + fx) / 2, y: (OY + ty) / 2, r: 46, name: 'the impedance, ' + fmt(Z, 1) + ' Ω' });

    /* the same three numbers against frequency, on the same scale in ohms */
    const A = axes(ctx, BOX, [0, 3000], [0, OHMS], {
      xl: 'frequency f (Hz)', xc: cF, yl: 'ohms', yc: cR, nx: 3, ny: 3, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0),
    });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    line(ctx, BOX.l, A.Y(R), BOX.r, A.Y(R), cR, 4);
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (u) => TWO_PI * u * L, 60, 3000, A.X, A.Y, cR, 4, 60);
    ctx.restore();
    ctx.save(); ctx.setLineDash([4, 8]);
    curve(ctx, (u) => 1 / (TWO_PI * u * Cf), 60, 3000, A.X, A.Y, cR, 4, 240);
    ctx.restore();
    curve(ctx, (u) => { const q = circuit(u, R, L, Cf); return q.Z; }, 60, 3000, A.X, A.Y, cR, 6, 240);
    ctx.restore();
    text(ctx, 'Z', A.X(1700), A.Y(Math.min(OHMS, circuit(1700, R, L, Cf).Z)) - 30, cR, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'X_L', A.X(2880), A.Y(Math.min(OHMS, TWO_PI * 2880 * L)) - 30, cR, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'X_C', A.X(340), A.Y(Math.min(OHMS, 1 / (TWO_PI * 340 * Cf))) - 30, cR, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'R', A.X(150), A.Y(R) + 30, cR, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    if (f0 < 3000) {
      line(ctx, A.X(f0), BOX.t, A.X(f0), BOX.b, alpha(PAL.ink, 0.35), 2, [10, 10]);
      text(ctx, 'f₀', A.X(f0), BOX.b + 44, cF, { size: 20, weight: 600, align: 'center' });
    }
    pinned(ctx, BOX, A.X, A.Y, f, Z, cR, fmt(Z, Z > 99 ? 0 : 2) + ' Ω');

    topline(ctx, Math.abs(X) < 0.5
      ? 'At ' + fmt(f, 0) + ' Hz the two reactances are equal and cancel, so the triangle is its foot alone, the impedance is the ' + fmt(R, 1) + ' Ω of the resistor and the current is in phase with the source voltage.'
      : XC > XL
        ? 'At ' + fmt(f, 0) + ' Hz the capacitor’s ' + fmt(XC, XC > 99 ? 0 : 2) + ' Ω dwarfs the inductor’s ' + fmt(XL, XL > 99 ? 0 : 2) + ' Ω, so the impedance is ' + fmt(Z, Z > 99 ? 0 : 2) + ' Ω and the current leads the source voltage by ' + fmt(-phi * DEG, 1) + '°.'
        : 'At ' + fmt(f, 0) + ' Hz the inductor’s ' + fmt(XL, XL > 99 ? 0 : 2) + ' Ω outweighs the capacitor’s ' + fmt(XC, XC > 99 ? 0 : 2) + ' Ω, so the impedance is ' + fmt(Z, Z > 99 ? 0 : 2) + ' Ω and the current lags the source voltage by ' + fmt(phi * DEG, 1) + '°.');
    readout(d.readout,
      `\\cos\\phi = \\dfrac{\\kRes}{\\kZimp} = \\dfrac{${fmt(R, 1)}\\ \\Omega}{${fmt(Z, Z > 99 ? 0 : 2)}\\ \\Omega} = ${fmt(Math.cos(phi), 4)},\\quad \\phi = ${fmt(Math.abs(phi) * DEG, 1)}^\\circ`,
      'On a 120 V rms source this circuit draws ' + fmt(Irms, 3) + ' A, and the ' + fmt(Math.abs(X), Math.abs(X) > 99 ? 0 : 2) + ' Ω standing on the foot of the triangle is the whole of the difference between an impedance of ' + fmt(Z, Z > 99 ? 0 : 2) + ' Ω and the ' + fmt(R, 1) + ' Ω the circuit would have at resonance.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.48: the resonance curve. The book prints two curves for two
   resistances and says the higher one is lower and broader; here the
   resistance is a slider, so one curve becomes the other, and the second
   curve is the same circuit with four times the resistance, dashed
   rather than recoloured (ch23/COLOR.md). The average power is drawn on
   its own scale at the right, which the book does not draw at all and
   which is where the power factor becomes visible. Still: a resonance
   curve is answered by its sliders and has no clock in it.
===================================================================== */
(function () {
  const H = 800;
  const d = sim('sim-resonance', H);
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 20, max: 3000, step: 10, value: 1300, unit: 'Hz', dec: 0, aria: 'the frequency of the AC source, which sets the marker on the curve' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 10, max: 200, step: 1, value: 40, unit: 'Ω', dec: 1, aria: 'the resistance of the resistor' });
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 6, step: 0.25, value: 3, unit: 'mH', dec: 2, aria: 'the inductance of the inductor' });
  const cS = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 2, max: 10, step: 0.25, value: 5, unit: 'µF', dec: 2, aria: 'the capacitance of the capacitor' });

  const VRMS = 120;
  /* Fixed ranges, taken from the slider maxima and never rescaled: the smallest
     resistance, 10.0 Ω, reaches 12.0 A and 1440 W at its peak. */
  const FMAX = 3000, IMAX = 12, PMAX = 1500;
  const BOX = { l: 216, r: 1260, t: 196, b: 686 };

  function draw() {
    const { ctx } = begin(d.c);
    const f = fS.v, R = rS.v, L = lS.v * 1e-3, Cf = cS.v * 1e-6;
    const q = circuit(f, R, L, Cf), f0 = q.f0;
    const cF = C('frequency'), cI = C('current'), cP = C('power'), cR = C('resistance');
    const cur = (u, res) => VRMS / circuit(u, res, L, Cf).Z;
    const Irms = cur(f, R), Pave = Irms * Irms * R, pf = Math.cos(q.phi);

    const { X, Y } = axes(ctx, BOX, [0, FMAX], [0, IMAX], {
      xl: 'frequency f (Hz)', xc: cF, yl: 'rms current I_rms (A)', yc: cI, nx: 3, ny: 4, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0),
    });
    const Y2 = (p) => BOX.b - (p / PMAX) * (BOX.b - BOX.t);
    line(ctx, BOX.r, BOX.t, BOX.r, BOX.b, PAL.muted, 2);
    for (let i = 0; i <= 3; i++) text(ctx, fmt((PMAX / 3) * i, 0), BOX.r + 14, Y2((PMAX / 3) * i), PAL.muted, { size: 17, align: 'left' });
    text(ctx, 'average power P_ave (W)', BOX.r, BOX.t - 24, cP, { size: 20, weight: 600, align: 'right' });

    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (u) => cur(u, R), 20, FMAX, X, Y, cI, 5, 300);
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (u) => cur(u, 4 * R), 20, FMAX, X, Y, cI, 5, 300);
    ctx.restore();
    curve(ctx, (u) => { const i = cur(u, R); return i * i * R; }, 20, FMAX, X, Y2, cP, 5, 300);
    ctx.restore();

    if (f0 < FMAX) {
      line(ctx, X(f0), BOX.t, X(f0), BOX.b, alpha(PAL.ink, 0.35), 2, [10, 10]);
      text(ctx, 'f₀ = ' + fmt(f0 / 1000, 2) + ' kHz', X(f0) + 14, BOX.b - 26, cF, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    }
    const peak = Math.min(f0 * 1.75, 2880);
    text(ctx, fmt(R, 1) + ' Ω', X(peak), Y(Math.min(IMAX, cur(peak, R))) - 26, cR, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(4 * R, 1) + ' Ω', X(peak), Y(Math.min(IMAX, cur(peak, 4 * R))) + 30, cR, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    pinned(ctx, BOX, X, Y, f, Irms, cI, fmt(Irms, 2) + ' A');
    pinned(ctx, BOX, X, Y2, f, Pave, cP, fmt(Pave, 0) + ' W');
    line(ctx, X(f), BOX.t, X(f), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    note(ctx, BOX, 'the dashed curve is the same circuit with four times the resistance, which is the book’s second circuit', [
      { l: BOX.l, r: BOX.r, t: Y(IMAX), b: Y(0) },
    ]);

    topline(ctx, 'A ' + fmt(R, 1) + ' Ω circuit with ' + fmt(lS.v, 2) + ' mH and ' + fmt(cS.v, 2) + ' µF resonates at ' + fmt(f0 / 1000, 2) + ' kHz, where the impedance falls to the resistance alone and the current reaches ' + fmt(VRMS / R, 2) + ' A on a 120 V rms source.');
    readout(d.readout,
      `\\kfo = \\dfrac{1}{2\\pi\\sqrt{\\kLind\\kCap}} = \\dfrac{1}{2\\pi\\sqrt{(${fmt(lS.v, 2)} \\times 10^{-3}\\ \\text{H})(${fmt(cS.v, 2)} \\times 10^{-6}\\ \\text{F})}} = ${fmt(f0, 0)}\\ \\text{Hz}`,
      'At ' + fmt(f, 0) + ' Hz the impedance is ' + fmt(q.Z, q.Z > 99 ? 0 : 2) + ' Ω, so the circuit draws ' + fmt(Irms, 3) + ' A, the power factor is ' + fmt(pf, 4) + ' and the average power is ' + fmt(Pave, Pave > 99 ? 0 : 2) + ' W against the ' + fmt(VRMS * VRMS / R, 0) + ' W it would take at resonance.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.49 + 23.50: the circuit and the machine it is a copy of.
   Both book figures say the same thing — that an RLC circuit is a
   mechanical oscillator — one of them driven and damped and the other
   free, and the difference between them is whether the circuit has a
   resistance in it, so the two are one figure with a choice. It moves:
   an oscillation is the clock itself. The car wheel is drawn on a
   locked view (rule 28.2), because the book prints it in perspective
   and because the spring above the wheel and the bumps under it have to
   be seen together; it does not turn, so it takes no orbit and no
   buttons. The mass on its spring and both circuits are flat, since a
   spring, a block and a loop of wire are relations and have nothing in
   their depth.
===================================================================== */
(function () {
  const H = 1030;
  const d = sim('sim-mechanical-analogy', H);
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 6, step: 0.25, value: 3, unit: 'mH', dec: 2, aria: 'the inductance of the inductor' });
  const cS = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 2, max: 10, step: 0.25, value: 5, unit: 'µF', dec: 2, aria: 'the capacitance of the capacitor' });
  const whichC = choice(d.controls, {
    label: '\\text{the circuit is}',
    options: [{ value: 'free', label: 'free' }, { value: 'driven', label: 'damped' }],
    value: 'free', aria: 'whether the circuit oscillates freely or is driven and damped',
  });

  const CYCLES = 2, LOSS = 0.4;              /* the fraction of the energy the shock absorber takes in one cycle */
  const BOX = { l: 200, r: 1270, t: 690, b: 960 };
  const cy = cycle(() => CYCLES, 1.2);
  const RAD = 78, WW = 52;                   /* the wheel, in the units the locked view is built in */
  const V = view({ yaw: 0.60, pitch: 0.26, dist: 2400, cx: 340, cy: 470 });
  let hits = [];
  hover(d.stage, () => hits);

  /* the road, a corrugated strip running away from the viewer, and the wheel
     standing on it, both drawn from the book's own viewpoint and never turned */
  function road(ctx, shift) {
    const z0 = -110, z1 = 110, hgt = (x) => 12 * Math.cos((x + shift) / 24);
    for (let i = 0; i < 17; i++) {
      const xa = -340 + i * 40, xb = xa + 40;
      face(ctx, [V.P([xa, hgt(xa), z0]), V.P([xb, hgt(xb), z0]), V.P([xb, hgt(xb), z1]), V.P([xa, hgt(xa), z1])], 0.10 + 0.06 * (i % 2), 1.5);
    }
    return hgt;
  }
  function wheel(ctx, cyc) {
    const ring = (z, n) => { const p = []; for (let i = 0; i < n; i++) { const a = TWO_PI * i / n; p.push(V.P([RAD * Math.cos(a), cyc + RAD * Math.sin(a), z])); } return p; };
    const N = 36, back = ring(-WW / 2, N), front = ring(WW / 2, N);
    /* the tread, one quad to a step, then the near face over it */
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N, a = TWO_PI * (i + 0.5) / N;
      const k = V.shade([Math.cos(a), Math.sin(a), 0]);
      face(ctx, [back[i], back[j], front[j], front[i]], k, 0);
    }
    face(ctx, front, 0.16, 3);
    const hub = []; for (let i = 0; i < N; i++) { const a = TWO_PI * i / N; hub.push(V.P([RAD * 0.42 * Math.cos(a), cyc + RAD * 0.42 * Math.sin(a), WW / 2 + 1])); }
    face(ctx, hub, 0.05, 3);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const L = lS.v * 1e-3, Cf = cS.v * 1e-6, free = whichC.value === 'free';
    const f0 = 1 / (TWO_PI * Math.sqrt(L * Cf)), period = 1000 / f0;
    const u = cy.now(), th = TWO_PI * u;
    const env = free ? 1 : Math.pow(1 - LOSS, u);
    const eC = env * Math.cos(th) * Math.cos(th), eL = env * Math.sin(th) * Math.sin(th);
    const heat = free ? 0 : 1 - env;
    const cE = C('energy'), cV = C('voltage'), cI = C('current'), cL = C('inductance'), cC = C('capacitance'), cT = C('time'), cR = C('resistance'), cF = C('frequency');
    hits = [];

    /* ---- the mechanical machine, on the left ---- */
    if (free) {
      /* the mass on its spring: the displacement follows the charge on the
         capacitor and the speed follows the current in the inductor */
      const x0 = 520, amp = 150, mx = x0 + amp * Math.cos(th), fl = 470;
      line(ctx, 150, fl, 660, fl, PAL.ink, 4);
      line(ctx, 150, fl, 150, 250, PAL.ink, 5);
      spring(ctx, 150, 370, mx - 54, 370, 7, 30, PAL.ink, 4);
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.roundRect(mx - 54, 370 - 54, 108, 100, 8); ctx.fill(); ctx.stroke(); ctx.restore();
      line(ctx, x0, 216, x0, 484, alpha(PAL.ink, 0.35), 2, [10, 10]);
      text(ctx, 'the position where the spring is unstretched', x0, 196, PAL.muted, { size: 18, align: 'center' });
      const sp = -amp * Math.sin(th);
      /* the mass's motion is drawn as a plain arrow in ink: a velocity is a type
         this page does not bind, and ch23/COLOR.md asks that nothing be coerced
         into a hue to be shown */
      if (Math.abs(sp) > 8) arrow(ctx, mx, 300, mx + sp * 0.7, 300, PAL.muted, 5);
      text(ctx, Math.abs(Math.sin(th)) < 0.08 ? 'all of the energy is in the spring' : Math.abs(Math.cos(th)) < 0.08 ? 'all of the energy is in the motion of the mass' : 'the energy is shared between the spring and the motion', 400, 528, PAL.muted, { size: 19, align: 'center' });
      hits.push({ x: mx, y: 370, r: 60, name: 'the mass, whose displacement follows the charge on the capacitor' });
    } else {
      const shift = 150 * u;
      road(ctx, shift);
      const bounce = 20 * env * Math.cos(th), hubY = RAD + bounce;
      wheel(ctx, hubY);
      /* the spring and the shock absorber above the wheel, drawn between the
         projected top of the hub and the projected mount under the wing */
      const top = V.P([0, hubY + RAD * 0.5, WW / 2 + 2]), mount = V.P([0, 308, WW / 2 + 2]);
      spring(ctx, top[0], top[1], mount[0], mount[1], 7, 22, PAL.ink, 4);
      line(ctx, top[0], top[1], mount[0], mount[1], PAL.ink, 5);
      /* the wing the spring hangs from, one line across the top of the arch */
      const wa = V.P([-190, 330, WW / 2 + 2]), wb = V.P([190, 330, WW / 2 + 2]);
      line(ctx, wa[0], wa[1], wb[0], wb[1], PAL.ink, 5);
      text(ctx, 'the shock absorber, which is the resistance', mount[0] + 26, mount[1] + 18, cR, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, 'the bumps in the road, which are the source', 340, 596, PAL.muted, { size: 19, align: 'center' });
      const hp = V.P([0, hubY, WW / 2]);
      hits.push({ x: hp[0], y: hp[1], r: 70, name: 'the wheel, driven up and down by the bumps and damped by the shock absorber' });
    }

    /* ---- the circuit, on the right ---- */
    const xl = 780, xr = 1250, yt = 214, yb = 470;
    wires(ctx, [[xl, yt], [xr, yt], [xr, yb], [xl, yb], [xl, yt]]);
    capPlates(ctx, (xl + xr) / 2, yt, 34);
    text(ctx, 'C', (xl + xr) / 2, yt - 54, cC, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    coil(ctx, (xl + xr) / 2, yb, 132);
    text(ctx, 'L', (xl + xr) / 2, yb + 52, cL, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    if (!free) { resistorBox(ctx, xr, (yt + yb) / 2, 46, 110); text(ctx, 'R', xr + 44, (yt + yb) / 2, cR, { size: 24, weight: 600, align: 'left', bg: PAL.panel }); }
    /* the charge on the plates and the current round the loop, both live */
    const qs = Math.cos(th) * Math.sqrt(env), isv = -Math.sin(th) * Math.sqrt(env);
    if (Math.abs(qs) > 0.06) {
      const sgn = qs > 0 ? 1 : -1;
      for (let k = -1; k <= 1; k++) {
        text(ctx, sgn > 0 ? '+' : '−', (xl + xr) / 2 - 24, yt - 22 + k * 22, cV, { size: 22, align: 'center' });
        text(ctx, sgn > 0 ? '−' : '+', (xl + xr) / 2 + 24, yt - 22 + k * 22, cV, { size: 22, align: 'center' });
      }
      text(ctx, 'the electric field between the plates', (xl + xr) / 2, yt - 96, cV, { size: 19, align: 'center' });
    }
    if (Math.abs(isv) > 0.06) flow(ctx, xl, (yt + yb) / 2, 0, isv > 0 ? 1 : -1, 30 + 70 * Math.abs(isv));
    text(ctx, Math.abs(isv) < 0.06 ? 'no current in the loop' : 'the current, and the magnetic field in the coil', (xl + xr) / 2, (yt + yb) / 2, cI, { size: 19, align: 'center', bg: PAL.panel });
    hits.push({ x: (xl + xr) / 2, y: yt, r: 50, name: 'the capacitor, which holds the energy in its electric field' });
    hits.push({ x: (xl + xr) / 2, y: yb, r: 60, name: 'the inductor, which holds the energy in its magnetic field' });

    /* ---- the graph: where the energy stands, cycle by cycle ---- */
    const top = free ? 1.0 : 1.5;
    const { X, Y } = axes(ctx, BOX, [0, CYCLES], [0, top], {
      xl: 'cycles of the oscillation', xc: cT, yl: 'energy, as a fraction of the whole', yc: cE, nx: 4, ny: free ? 4 : 3, fx: (u2) => fmt(u2, 1), fy: (u2) => fmt(u2, 2),
    });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    const envOf = (u2) => (free ? 1 : Math.pow(1 - LOSS, u2));
    curve(ctx, (u2) => envOf(u2) * Math.cos(TWO_PI * u2) ** 2, 0, CYCLES, X, Y, cE, 5, 300);
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (u2) => envOf(u2) * Math.sin(TWO_PI * u2) ** 2, 0, CYCLES, X, Y, cE, 5, 300);
    ctx.restore();
    if (!free) { ctx.save(); ctx.setLineDash([4, 8]); curve(ctx, (u2) => 1 - envOf(u2), 0, CYCLES, X, Y, cE, 4, 120); ctx.restore(); }
    ctx.restore();
    text(ctx, 'in the capacitor', X(0.52), Y(Math.min(top, envOf(0.5))) - 20, cE, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'in the inductor', X(0.27), Y(Math.min(top, envOf(0.25))) - 20, cE, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    if (!free) text(ctx, 'turned into heat by the resistance', X(1.02), Y(Math.min(top, 1 - envOf(1.6))) - 20, cE, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    line(ctx, X(u), BOX.t, X(u), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, BOX, X, Y, u, eC, cE, null);
    pinned(ctx, BOX, X, Y, u, eL, cE, null);

    topline(ctx, free
      ? 'With ' + fmt(lS.v, 2) + ' mH and ' + fmt(cS.v, 2) + ' µF the circuit oscillates at ' + fmt(f0 / 1000, 2) + ' kHz of its own accord, and ' + fmt(100 * eC, 0) + '% of its energy stands in the capacitor’s electric field at this moment.'
      : 'Driven at its own ' + fmt(f0 / 1000, 2) + ' kHz and damped by its resistance, the circuit has turned ' + fmt(100 * heat, 0) + '% of the energy it started with into heat, and ' + fmt(100 * eC, 0) + '% of it stands in the capacitor at this moment.');
    readout(d.readout,
      `\\kfo = \\dfrac{1}{2\\pi\\sqrt{\\kLind\\kCap}} = ${fmt(f0, 0)}\\ \\text{Hz},\\quad \\kT = ${fmt(period, 3)}\\ \\text{ms}`,
      'The circuit really takes ' + fmt(period, 3) + ' ms to a cycle, and the drawing is slowed by a factor of ' + fmt(2500 / period, 0) + ' so that the trade can be watched; the two stores are ' + (free ? 'never both full and never both empty, and they always add to the whole.' : 'still in step with one another, but what they add to falls, because the resistance takes a share of it every cycle.'));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => CYCLES / 5.0), draw });
})();
};
