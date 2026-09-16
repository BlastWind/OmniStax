/* Figures for section 23.6 Back Emf.
   A motor at a steady speed draws a steady current, so neither figure here has a
   clock in it: both answer their sliders, neither registers a cycle and neither
   carries a transport (rule 14). The page binds voltage, current, resistance,
   power and angular-rate, which is what ch23/COLOR.md gives 23.6. The driving
   emf, the back emf and the voltage left at a lamp are one hue with three
   labels; the current in every branch is the current hue; the coil, the feeder
   lines and the lamp's filament are the resistance hue; the power dissipated in
   the coils and the power the lamp puts out are the power hue; the shaft's speed
   is the angular rate. No device is tinted: the wires, the plates of a source,
   the switch, the motor's case and the lamp's glass are all ink. The one drawn
   thing that is neither a symbol nor an arrow is the glow round the lamp, whose
   radius follows the power the lamp dissipates and which is drawn in the power
   hue at low alpha, since it is the quantity and not the device that wears a
   hue. Each figure names six things and sets every reading beside the thing it
   belongs to; nothing in either scene moves and no two labels can meet, so the
   labels are on (rule 26.7). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, vbracket, axes, curve, pinned, note } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces both schematics are drawn from ---------- */
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
const BOXW = 132, BOXH = 48;
/* A resistance on the wire, drawn as a plain box in ink, lying along the wire or
   standing across it. The box is the device and stays ink; what is written beside
   it is a resistance and wears that hue. */
function resistor(ctx, x, y, horiz, name, ohms) {
  const w = horiz ? BOXW : BOXH, h = horiz ? BOXH : BOXW, rc = C('resistance');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
  const val = ohms === null ? null : fmt(ohms, 2) + ' Ω';
  if (horiz) {
    if (name) text(ctx, name, x, y - h / 2 - 24, rc, { size: 22, weight: 600, align: 'center' });
    if (val) text(ctx, val, x, y + h / 2 + 26, rc, { size: 21, align: 'center' });
  } else {
    if (name) text(ctx, name, x - w / 2 - 16, y, rc, { size: 22, weight: 600, align: 'right' });
    if (val) text(ctx, val, x + w / 2 + 16, y, rc, { size: 21, align: 'left' });
  }
}
/* One source on the wire: a long plate for the positive terminal and a short one
   for the negative, across the wire it sits on. `plus` is +1 when the positive
   plate is the one further along x (or further down y) and −1 when it is the one
   before. A source whose emf is set by something else — the coil of a turning
   motor — carries the slanted arrow a variable source is drawn with. */
function cell(ctx, x, y, horiz, plus, variable) {
  const plate = (t, half, w) => (horiz
    ? line(ctx, x + t, y - half, x + t, y + half, PAL.ink, w)
    : line(ctx, x - half, y + t, x + half, y + t, PAL.ink, w));
  plate(plus * 11, 27, 5); plate(-plus * 11, 14, 5);
  const sx = horiz ? plus * 11 : 0, sy = horiz ? 0 : plus * 11;
  text(ctx, '+', x + sx + (horiz ? plus * 20 : 34), y + sy + (horiz ? -34 : 0), PAL.muted, { size: 22, align: 'center' });
  if (variable) arrow(ctx, x - 40, y + 40, x + 40, y - 40, PAL.muted, 3);
}
/* An arrow set along a wire in the current hue. */
function flow(ctx, x, y, dx, dy, L) {
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, C('current'), 5);
}
/* The dashed panel that picks one device out of the circuit round it. */
function panel(ctx, l, t, r, b, name) {
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5; ctx.setLineDash([9, 8]);
  ctx.beginPath(); ctx.roundRect(l, t, r - l, b - t, 16); ctx.stroke(); ctx.restore();
  if (name) text(ctx, name, (l + r) / 2, t + 26, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
}
/* The turning shaft of a motor: a rim with a shaft through it and an arc round it
   whose sweep and arrowhead grow with the angular velocity. */
function rotor(ctx, x, y, r, frac) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x - r * 0.55, y); ctx.lineTo(x + r * 0.55, y); ctx.stroke();
  ctx.restore();
  dot(ctx, x, y, PAL.ink, true, 5);
  if (frac <= 0.001) return;
  const wc = C('angular-rate'), R = r + 22, a0 = -2.5, a1 = a0 + 4.2 * Math.min(1, frac);
  ctx.save(); ctx.strokeStyle = wc; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(x, y, R, a0, a1); ctx.stroke(); ctx.restore();
  const hx = x + R * Math.cos(a1), hy = y + R * Math.sin(a1);
  arrow(ctx, hx - 26 * Math.cos(a1 + Math.PI / 2), hy - 26 * Math.sin(a1 + Math.PI / 2), hx, hy, wc, 5);
}

/* =====================================================================
   FIGURE 23.24: the motor drawn as the resistance of its coils with a
   second emf in series with it, the one the turning coil generates
   against the one driving it. The back emf is not a slider of its own:
   it is what the speed of the shaft sets, at 0.250 V for each rad/s of
   this motor, so that the book's 40.0 V stands at the top of the speed
   slider and the driving emf, whose slider stops at 40 V, is never the
   smaller of the two. Still: a motor at a steady speed draws a steady
   current, and the reader is changing the speed it has settled at, not
   watching time pass.
===================================================================== */
(function () {
  const H = 880;
  const d = sim('sim-back-emf', H);
  const wS = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0, max: 160, step: 5, value: 160, unit: 'rad/s', dec: 0, aria: 'the angular velocity of the motor’s shaft' });
  const eS = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 40, max: 120, step: 1, value: 48, unit: 'V', dec: 1, aria: 'the emf driving the motor' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.2, max: 2, step: 0.05, value: 0.4, unit: 'Ω', dec: 3, aria: 'the resistance of the motor’s coils' });
  const K = 0.25;                      /* volts of back emf for each rad/s of the shaft */
  const WMAX = 160;
  /* Fixed ranges, taken from the book's own numbers and never rescaled: at rest
     the 48.0 V motor with 0.400 Ω coils draws 120 A and dissipates 5.76 kW, which
     stand at two fifths and at a little under half the height of the frame. A
     setting that leaves the frame is clipped at its edge and the live point is
     pinned there. */
  const IMAX = 300, PMAX = 12000;
  const BOX = { l: 250, r: 1230, t: 566, b: 806 };

  function draw() {
    const { ctx } = begin(d.c);
    const w = wS.v, E = eS.v, R = rS.v;
    const back = K * w, I = Math.max(0, (E - back) / R), P = I * I * R;
    const I0 = E / R, P0 = I0 * I0 * R;                  /* the same motor held at rest */
    const cV = C('voltage'), cI = C('current'), cP = C('power'), cW = C('angular-rate');

    /* the circuit: the driving source on the left, the motor along the top, the
       switch on the right, and the current running round it */
    panel(ctx, 420, 130, 990, 420, 'the motor');
    wires(ctx, [[200, 215], [1200, 215]]);
    wires(ctx, [[200, 215], [200, 470], [1200, 470], [1200, 215]]);
    cell(ctx, 200, 342, false, -1, false);
    text(ctx, 'the driving emf', 168, 318, PAL.ink, { size: 21, align: 'right', bg: PAL.panel });
    text(ctx, fmt(E, 1) + ' V', 168, 352, cV, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    cell(ctx, 545, 215, true, -1, true);
    text(ctx, 'the back emf', 545, 168, PAL.ink, { size: 21, align: 'center', bg: PAL.panel });
    text(ctx, fmt(back, 1) + ' V', 545, 285, cV, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    resistor(ctx, 860, 215, true, 'R', R);
    rotor(ctx, 700, 350, 42, w / WMAX);
    text(ctx, 'ω = ' + fmt(w, 0) + ' rad/s', 700, 406, cW, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    /* the switch, closed on its two contacts */
    dot(ctx, 1200, 318, PAL.ink, true, 6); dot(ctx, 1200, 366, PAL.ink, true, 6);
    line(ctx, 1200, 318, 1218, 366, PAL.ink, 3.5);
    if (I > 0.05) {
      flow(ctx, 700, 470, -1, 0, 54);
      flow(ctx, 330, 215, 1, 0, 54);
      flow(ctx, 1070, 215, 1, 0, 54);
      text(ctx, 'I = ' + fmt(I, 1) + ' A', 700, 510, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    } else {
      text(ctx, 'no current at all', 700, 510, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    }

    /* the graph: the current and the power against the speed of the shaft, the
       current's scale at the left and the power's at the right */
    const { X, Y } = axes(ctx, BOX, [0, WMAX], [0, IMAX], {
      xl: 'shaft speed ω (rad/s)', xc: cW, yl: 'current I (A)', yc: cI, nx: 4, ny: 3, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0),
    });
    const Y2 = (p) => BOX.b - (p / PMAX) * (BOX.b - BOX.t);
    line(ctx, BOX.r, BOX.t, BOX.r, BOX.b, PAL.muted, 2);
    for (let i = 0; i <= 3; i++) text(ctx, fmt((PMAX / 3000) * i, 0), BOX.r + 14, Y2((PMAX / 3) * i), PAL.muted, { size: 17, align: 'left' });
    text(ctx, 'power P (kW)', BOX.r, BOX.t - 24, cP, { size: 20, weight: 600, align: 'right' });
    const curr = (u) => Math.max(0, (E - K * u) / R);
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, curr, 0, WMAX, X, Y, cI, 5, 60);
    curve(ctx, (u) => curr(u) * curr(u) * R, 0, WMAX, X, (p) => Y2(p), cP, 5, 120);
    ctx.restore();
    pinned(ctx, BOX, X, Y, w, I, cI, fmt(I, 1) + ' A');
    pinned(ctx, BOX, X, (p) => Y2(p), w, P, cP, fmt(P / 1000, 2) + ' kW');
    line(ctx, X(w), BOX.t, X(w), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    /* the sentence goes wherever the two curves leave the frame clear: both of them
       fall from left to right, so the band they occupy is everything below the higher
       of their two left-hand ends */
    if (w >= 1) {
      note(ctx, BOX, 'held at rest the same motor would draw ' + fmt(I0, 0) + ' A and dissipate ' + fmt(P0 / 1000, 2) + ' kW', [
        { l: BOX.l, r: BOX.r, t: Math.min(Y(Math.min(IMAX, curr(0))), Y2(Math.min(PMAX, curr(0) * curr(0) * R))), b: BOX.b },
      ]);
    }

    topline(ctx, w < 1
      ? 'The shaft is not turning, so the motor generates nothing against the ' + fmt(E, 1) + ' V driving it and the whole of that voltage stands across coils of ' + fmt(R, 3) + ' Ω.'
      : I < 0.05
        ? 'At ' + fmt(w, 0) + ' rad/s the back emf has risen to the whole of the ' + fmt(E, 1) + ' V driving the motor, so the motor draws nothing at all and is running free.'
        : 'Turning at ' + fmt(w, 0) + ' rad/s the motor generates ' + fmt(back, 1) + ' V against the ' + fmt(E, 1) + ' V driving it, so ' + fmt(E - back, 1) + ' V is left across its coils and it draws ' + fmt(I, 1) + ' A.');
    readout(d.readout,
      `\\kIcur = \\dfrac{\\kemf - \\kemf_{\\text{back}}}{\\kRes} = \\dfrac{${fmt(E, 1)}\\ \\text{V} - ${fmt(back, 1)}\\ \\text{V}}{${fmt(R, 3)}\\ \\Omega} = ${fmt(I, 1)}\\ \\text{A}`,
      w < 1
        ? 'The coils turn ' + fmt(P / 1000, 2) + ' kW into heat at this speed, which is what a motor switched on but not yet turning has to survive.'
        : 'The coils turn ' + (P < 1000 ? fmt(P, 0) + ' W' : fmt(P / 1000, 2) + ' kW') + ' into heat at this speed, against the ' + fmt(P0 / 1000, 2) + ' kW they would dissipate held at rest.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the lamp and the motor on one pair of feeder lines. The section
   says that lights in the same circuit dim briefly when a vacuum cleaner
   or a refrigerator is switched on, and that the dimming is the IR drop
   the starting current makes in the wiring; no figure of the book draws
   it. Still: a lamp at a steady brightness and a motor at a steady speed
   are one state of a circuit, and the moment of the dimming is the state
   at the bottom of the speed slider.
===================================================================== */
(function () {
  const H = 650;
  const d = sim('sim-dimming-lights', H);
  const wS = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0, max: 180, step: 5, value: 180, unit: 'rad/s', dec: 0, aria: 'the angular velocity of the motor’s shaft' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0, max: 1, step: 0.05, value: 0.4, unit: 'Ω', dec: 2, aria: 'the resistance of the feeder lines' });
  const on = choice(d.controls, {
    label: '\\text{the motor is}',
    options: [{ value: 'on', label: 'switched on' }, { value: 'off', label: 'switched off' }],
    value: 'on', aria: 'whether the motor is switched on',
  });
  const VS = 120, RL = 144, RM = 8, K = 0.6;      /* the supply, a 100 W lamp, the motor's coils, and its volts per rad/s */
  const PFULL = VS * VS / RL;                     /* the lamp's power at the full supply voltage */

  function draw() {
    const { ctx } = begin(d.c);
    const w = wS.v, Rl = rS.v, running = on.value === 'on', back = K * w;
    wS.disable(!running);        /* a motor that is switched off has no speed to set */
    /* the voltage the two branches share, from the junction rule. Over the whole
       of both sliders it stays above the back emf, so the motor never feeds the
       lamp and the current in every branch runs the way the arrows are drawn. */
    const g = Rl < 1e-6 ? null : 1 / Rl;
    const V = g === null ? VS : (VS * g + (running ? back / RM : 0)) / (g + 1 / RL + (running ? 1 / RM : 0));
    const iLamp = V / RL, iMotor = running ? Math.max(0, (V - back) / RM) : 0, iLine = iLamp + iMotor;
    const pLamp = V * V / RL, bright = pLamp / PFULL;
    const cV = C('voltage'), cI = C('current'), cP = C('power'), cW = C('angular-rate');

    wires(ctx, [[230, 190], [1150, 190]]);
    wires(ctx, [[230, 500], [1150, 500]]);
    wires(ctx, [[230, 190], [230, 500]]);
    cell(ctx, 230, 345, false, -1, false);
    text(ctx, 'the supply', 230, 556, PAL.ink, { size: 21, align: 'center', bg: PAL.panel });
    text(ctx, fmt(VS, 0) + ' V', 230, 590, cV, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    resistor(ctx, 430, 190, true, 'the feeder lines', Rl);
    flow(ctx, 620, 190, 1, 0, 54);
    text(ctx, 'I = ' + fmt(iLine, 2) + ' A', 620, 144, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });

    /* the lamp on its branch, drawn as the circle and cross a lamp is drawn with,
       and the voltage left for it bracketed beside the branch */
    wires(ctx, [[800, 190], [800, 299]]);
    wires(ctx, [[800, 383], [800, 500]]);
    const glow = 46 + 46 * Math.min(1.1, bright);
    ctx.save(); ctx.fillStyle = alpha(cP, 0.14 + 0.18 * Math.min(1, bright));
    ctx.beginPath(); ctx.arc(800, 341, glow, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(800, 341, 42, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(770, 311); ctx.lineTo(830, 371); ctx.moveTo(770, 371); ctx.lineTo(830, 311); ctx.stroke();
    ctx.restore();
    flow(ctx, 800, 444, 0, 1, 44);
    text(ctx, 'the lamp', 800, 242, PAL.ink, { size: 21, align: 'center', bg: PAL.panel });
    text(ctx, fmt(100 * bright, 0) + '% of full brightness', 800, 556, cP, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    vbracket(ctx, 712, 214, 476, cV, 'V = ' + fmt(V, 1) + ' V', -1, { side: 'left', H });

    /* the motor on its own branch, drawn as the resistance of its coils with the
       emf it generates in series against the supply */
    panel(ctx, 900, 200, 1340, 482, 'the motor');
    wires(ctx, [[1060, 190], [1060, 500]]);
    resistor(ctx, 1060, 392, false, null, RM);
    if (running) {
      cell(ctx, 1060, 272, false, -1, true);
      text(ctx, 'the back emf', 1042, 240, PAL.ink, { size: 20, align: 'right', bg: PAL.panel });
      text(ctx, fmt(back, 1) + ' V', 1042, 304, cV, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
      rotor(ctx, 1245, 330, 38, w / 180);
      text(ctx, 'ω = ' + fmt(w, 0) + ' rad/s', 1245, 428, cW, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      if (iMotor > 0.01) flow(ctx, 1060, 466, 0, 1, 44);
    } else {
      /* the switch of the appliance, open: the branch carries nothing */
      dot(ctx, 1060, 252, PAL.ink, true, 6); dot(ctx, 1060, 300, PAL.ink, true, 6);
      line(ctx, 1060, 252, 1106, 286, PAL.ink, 3.5);
      rotor(ctx, 1245, 330, 38, 0);
      text(ctx, 'switched off', 1245, 428, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    }

    topline(ctx, !running
      ? 'With the motor switched off the lamp has ' + fmt(V, 1) + ' V across it and burns at ' + fmt(100 * bright, 0) + ' percent of its full brightness.'
      : w < 1
        ? 'The motor is switched on but not yet turning, so it draws ' + fmt(iMotor, 1) + ' A, the feeder lines lose ' + fmt(VS - V, 1) + ' V of the supply, and the lamp is left with ' + fmt(V, 1) + ' V and dims to ' + fmt(100 * bright, 0) + ' percent.'
        : 'Turning at ' + fmt(w, 0) + ' rad/s the motor draws ' + fmt(iMotor, 2) + ' A, the feeder lines lose ' + fmt(VS - V, 1) + ' V, and the lamp has ' + fmt(V, 1) + ' V across it at ' + fmt(100 * bright, 0) + ' percent of its brightness.');
    readout(d.readout,
      `\\kV = ${fmt(VS, 0)}\\ \\text{V} - \\kIcur\\kRes = ${fmt(VS, 0)}\\ \\text{V} - (${fmt(iLine, 2)}\\ \\text{A})(${fmt(Rl, 2)}\\ \\Omega) = ${fmt(V, 1)}\\ \\text{V}`,
      'The lamp turns ' + fmt(pLamp, 0) + ' W into light and heat, against the ' + fmt(PFULL, 0) + ' W it takes at the full ' + fmt(VS, 0) + ' V. ' + (running
        ? 'The motor is drawing ' + fmt(iMotor, 2) + ' A through coils of ' + fmt(RM, 2) + ' Ω.'
        : 'Nothing at all runs in the motor’s branch, so the feeder lines carry the lamp’s current alone.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
