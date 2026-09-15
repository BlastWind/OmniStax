/* Figures for section 21.5 Null Measurements.
   Every figure here is a circuit schematic, and an instrument being balanced has
   no time in it, so all four are still pictures: none registers a cycle, none
   carries a transport, and a slider or a choice alone redraws it. The page binds
   the resistance, the voltage and the current, which is what ch21/COLOR.md gives
   21.5; the wires, the battery, the meter faces, the resistor boxes, the letters
   on the meters and the letters on the bridge are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces every schematic here is drawn from ---------- */
const BOXW = 128, BOXH = 46;
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';
const ohms = (r) => fmt(r, r < 10 ? 2 : 1) + ' Ω';
const volts = (v) => fmt(v, 3) + ' V';

/* A resistor centred at (x, y), lying along the wire or standing across it. The
   box is ink; its name and its resistance are set beside it in the resistance hue. */
function resistor(ctx, x, y, horiz, name, val, opts) {
  const o = opts || {}, w = horiz ? BOXW : BOXH, h = horiz ? BOXH : BOXW, rc = C('resistance');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke();
  if (o.variable) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; arrow(ctx, x - w * 0.42, y + h * 0.5 + 18, x + w * 0.42, y - h * 0.5 - 18, PAL.ink, 3); }
  ctx.restore();
  const s = val === null || val === undefined ? null : ohms(val);
  if (horiz) {
    if (name) text(ctx, name, x, y - h / 2 - 24, rc, { size: 24, weight: 600, align: 'center' });
    if (s) text(ctx, s, x, y + h / 2 + 26, rc, { size: 21, align: 'center' });
  } else {
    if (name) text(ctx, name, x - w / 2 - 16, y, rc, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    if (s) text(ctx, s, x + w / 2 + 16, y, rc, { size: 21, align: 'left', bg: PAL.panel });
  }
}
/* A resistor lying along the arm from p to q, drawn square to the arm. */
function armResistor(ctx, p, q, name, val, opts) {
  const o = opts || {}, mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
  const a = Math.atan2(q[1] - p[1], q[0] - p[0]);
  ctx.save(); ctx.translate(mx, my); ctx.rotate(a);
  ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(-BOXW / 2, -BOXH / 2, BOXW, BOXH, 6); ctx.fill(); ctx.stroke();
  if (o.variable) arrow(ctx, -BOXW * 0.42, BOXH * 0.5 + 18, BOXW * 0.42, -BOXH * 0.5 - 18, PAL.ink, 3);
  ctx.restore();
  const nx = Math.sin(a), ny = -Math.cos(a), k = o.flip ? -1 : 1, rc = C('resistance');
  const lx = mx + k * nx * 58, ly = my + k * ny * 58;
  if (name) text(ctx, name, lx, ly - 13, rc, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
  if (val !== null && val !== undefined) text(ctx, ohms(val), lx, ly + 17, rc, { size: 21, align: 'center', bg: alpha(PAL.panel, 0.85) });
}
/* A cell standing on a vertical wire, its long plate uppermost. */
function battery(ctx, x, y) {
  const plates = [[26, 5], [13, 5], [26, 5], [13, 5]];
  let yy = y - 33;
  plates.forEach(([half, w], i) => { line(ctx, x - half, yy, x + half, yy, PAL.ink, w); yy += i % 2 === 0 ? 20 : 22; });
}
/* A cell lying on a horizontal wire, its long plate to the left. */
function batteryH(ctx, x, y) {
  const plates = [[26, 5], [13, 5], [26, 5], [13, 5]];
  let xx = x - 33;
  plates.forEach(([half, w], i) => { line(ctx, xx, y - half, xx, y + half, PAL.ink, w); xx += i % 2 === 0 ? 20 : 22; });
}
/* An arrow set along a wire in the current hue, with its name beside it. */
function flow(ctx, x, y, dx, dy, name) {
  const cc = C('current'), L = 46;
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, cc, 5);
  if (name) text(ctx, name, x + (dy ? 28 * dy : 0), y - (dy ? 0 : 26), cc, { size: 21, weight: 600, align: dy ? 'left' : 'center', bg: alpha(PAL.panel, 0.85) });
}
/* A meter: a round face with a scale across the top, a needle, and the letter the
   book puts inside it. `frac` runs from −1 at the left of the scale to +1 at the
   right, and `centre` marks the middle of the scale with a zero. */
function meter(ctx, x, y, R, frac, letter, opts) {
  const o = opts || {}, f = Math.max(-1, Math.min(1, frac));
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(x, y, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x, y + R * 0.3, R * 0.78, -Math.PI * 0.86, -Math.PI * 0.14); ctx.stroke();
  ctx.restore();
  for (let k = -1; k <= 1; k += 0.5) {
    const a = -Math.PI / 2 + k * 0.62, r0 = R * 0.66, r1 = R * 0.78;
    line(ctx, x + r0 * Math.cos(a), y + R * 0.3 + r0 * Math.sin(a), x + r1 * Math.cos(a), y + R * 0.3 + r1 * Math.sin(a), alpha(PAL.ink, 0.45), 2);
  }
  if (o.centre) text(ctx, '0', x, y - R * 0.52, PAL.muted, { size: 16, align: 'center' });
  const a = -Math.PI / 2 + f * 0.62;
  line(ctx, x, y + R * 0.3, x + R * 0.82 * Math.cos(a), y + R * 0.3 + R * 0.82 * Math.sin(a), o.needle || PAL.ink, 4);
  dot(ctx, x, y + R * 0.3, PAL.ink, true, 5);
  text(ctx, letter, x, y + R * 0.62, PAL.ink, { size: 24, weight: 600, align: 'center' });
}

/* =====================================================================
   FIGURE 21.33: an analog voltmeter on a battery. The meter is drawn as
   what it is, a galvanometer in series with a large resistance, and it
   draws a current, so what it reads is the terminal voltage and not the
   emf. Still: a meter held on a battery has no time in it.
   Ranges: the emf runs to 3.00 V and the reading is a fraction of it, so
   the meter's face is fixed to 0 to 3.00 V and never rescales.
===================================================================== */
(function () {
  const d = sim('sim-voltmeter-emf', 600);
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 0.5, max: 3, step: 0.05, value: 1.5, unit: 'V', dec: 2, aria: 'the emf of the battery' });
  const ri = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0.05, max: 20, step: 0.05, value: 0.5, unit: 'Ω', dec: 2, aria: 'the internal resistance of the battery' });
  const Rm = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 10, max: 500, step: 10, value: 200, unit: 'Ω', dec: 0, aria: 'the large resistance inside the voltmeter' });
  const RG = 25.0;                                   /* the galvanometer's own resistance, fixed */
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), rc = C('resistance'), cc = C('current');
    const Rtot = Rm.v + RG, I = E.v / (Rtot + ri.v), V = E.v - I * ri.v, miss = E.v - V;
    headline(ctx, 'The meter draws a current of ' + fmt(I * 1000, 2) + ' mA, so it reads ' + volts(V)
      + ', which falls short of the emf of ' + volts(E.v) + ' by ' + fmt(miss * 1000, 1) + ' mV.');
    wires(ctx, [[300, 150], [1080, 150]]);
    wires(ctx, [[300, 480], [1080, 480]]);
    wires(ctx, [[300, 150], [300, 200]]);
    wires(ctx, [[300, 266], [300, 316]]);
    wires(ctx, [[300, 444], [300, 480]]);
    battery(ctx, 300, 233);
    text(ctx, 'ℰ = ' + volts(E.v), 258, 233, vc, { size: 23, weight: 600, align: 'right' });
    resistor(ctx, 300, 380, false, 'r', ri.v);
    text(ctx, 'the battery', 300, 545, PAL.muted, { size: 19, align: 'center' });
    wires(ctx, [[1080, 150], [1080, 208]]);
    wires(ctx, [[1080, 332], [1080, 362]]);
    wires(ctx, [[1080, 426], [1080, 480]]);
    meter(ctx, 1080, 270, 62, 2 * (V / 3) - 1, 'G', { needle: vc });
    text(ctx, 'r_G = ' + ohms(RG), 1006, 270, rc, { size: 20, align: 'right' });
    resistor(ctx, 1080, 394, false, 'R', Rm.v);
    text(ctx, 'the voltmeter', 1080, 545, PAL.muted, { size: 19, align: 'center' });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]);
    ctx.beginPath(); ctx.roundRect(960, 120, 240, 400, 14); ctx.stroke(); ctx.restore();
    flow(ctx, 690, 150, 1, 0, 'I = ' + fmt(I * 1000, 2) + ' mA');
    text(ctx, 'it reads ' + volts(V), 690, 300, vc, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'the emf is ' + volts(E.v), 690, 340, vc, { size: 21, align: 'center' });
    readout(d.readout,
      '\\kV = \\kemf - \\kIcur\\krint = ' + fmt(E.v, 3) + '\\ \\text{V} - (' + fmt(I, 5) + '\\ \\text{A})(' + ohm(ri.v) + ') = ' + fmt(V, 3) + '\\ \\text{V}',
      'The meter needs a current to work, so the current is never zero and the reading is never the emf. Raising the meter’s resistance shrinks the current and brings the reading closer, and raising the internal resistance of the battery pushes it further away.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.34: the potentiometer. A steady current runs down a long
   uniform wire of 20.00 Ω, and a cell is connected in opposition through a
   galvanometer between one end of the wire and a contact that slides along
   it. Still: the balance is a position and not a history.
   Ranges: the contact runs the whole 20.00 Ω of the wire, and the needle is
   at full scale at an imbalance of 0.500 V, which never rescales.
===================================================================== */
(function () {
  const d = sim('sim-potentiometer', 680);
  const Ex = ctl(d.controls, { label: '\\kemfx', cls: 'voltage', min: 0.2, max: 1.9, step: 0.01, value: 1.25, unit: 'V', dec: 2, aria: 'the unknown emf' });
  const Rx = ctl(d.controls, { label: '\\kResx', cls: 'resistance', min: 0, max: 20, step: 0.05, value: 6.25, unit: 'Ω', dec: 2, aria: 'the resistance of the wire up to the contact' });
  const Iw = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0.1, max: 0.3, step: 0.005, value: 0.2, unit: 'A', dec: 3, aria: 'the current the source passes down the wire' });
  const which = choice(d.controls, { label: '\\text{which cell}', options: [{ value: 'x', label: 'the unknown' }, { value: 's', label: 'the standard' }], value: 'x', aria: 'which cell is connected through the galvanometer' });
  const RW = 20.0, ES = 1.500, X0 = 300, X1 = 1250, YW = 300, FULL = 0.5;
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), rc = C('resistance'), cc = C('current');
    const cell = which.value === 'x' ? Ex.v : ES, name = which.value === 'x' ? 'ℰₓ' : 'ℰₛ';
    const drop = Iw.v * Rx.v, diff = cell - drop, xc = X0 + (Rx.v / RW) * (X1 - X0);
    const Rb = cell / Iw.v, RxB = Ex.v / Iw.v, RsB = ES / Iw.v;
    headline(ctx, Math.abs(diff) < 0.004
      ? 'The needle sits at zero, so no current flows through the galvanometer and the cell in the branch is balanced against the ' + volts(drop) + ' the wire drops over ' + ohms(Rx.v) + '.'
      : 'The wire drops ' + volts(drop) + ' over ' + ohms(Rx.v) + ' while the cell pushes ' + volts(cell) + ', so the needle stands off zero; the balance lies at '
        + (Rb <= RW ? ohms(Rb) + ' along the wire.' : 'a resistance the wire does not reach.'));
    /* the driving loop: the source above, the long uniform wire below it */
    wires(ctx, [[X0, 150], [X1, 150]]);
    wires(ctx, [[X0, 150], [X0, YW]]);
    wires(ctx, [[X1, 150], [X1, YW]]);
    batteryH(ctx, 775, 150);
    text(ctx, 'the source that drives the wire', 775, 108, PAL.muted, { size: 19, align: 'center' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.roundRect(X0, YW - 17, X1 - X0, 34, 6); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2; ctx.beginPath();
    for (let k = 1; k < 20; k++) { const x = X0 + (k / 20) * (X1 - X0); ctx.moveTo(x, YW - 17); ctx.lineTo(x, YW + 17); }
    ctx.stroke(); ctx.restore();
    for (let k = 0; k <= 20; k += 5) {
      const x = X0 + (k / 20) * (X1 - X0);
      line(ctx, x, YW + 17, x, YW + 31, PAL.muted, 2);
      text(ctx, ohms(k), x, YW + 54, rc, { size: 17, align: 'center' });
    }
    text(ctx, 'R = ' + ohms(RW) + ' of uniform wire', X0 + 6, YW - 44, rc, { size: 21, weight: 600, align: 'left' });
    flow(ctx, 640, 150, -1, 0, 'I = ' + fmt(Iw.v, 3) + ' A');
    /* the branch: down from the contact through the galvanometer and the cell, and back to the near end */
    arrow(ctx, xc, YW + 96, xc, YW + 24, PAL.ink, 4);
    text(ctx, 'the contact', xc, YW + 122, PAL.muted, { size: 19, align: 'center' });
    wires(ctx, [[xc, YW + 96], [xc, 398]]);
    meter(ctx, xc, 452, 54, diff / FULL, 'G', { centre: true, needle: cc });
    wires(ctx, [[xc, 506], [xc, 556]]);
    battery(ctx, xc, 589);
    text(ctx, name + ' = ' + volts(cell), xc - 44, 589, vc, { size: 23, weight: 600, align: 'right' });
    wires(ctx, [[xc, 622], [xc, 640], [X0, 640], [X0, YW + 17]]);
    /* the reading sits on whichever side of the meter the canvas has room for */
    const onLeft = xc > 900;
    text(ctx, Math.abs(diff) < 0.004
      ? 'no current in the branch'
      : Math.abs(diff) > FULL
        ? 'the needle is driven past the end of its scale'
        : 'the needle reads ' + (diff > 0 ? '+' : '−') + fmt(Math.abs(diff) / FULL * 100, 0) + '% of full scale',
      xc + (onLeft ? -74 : 74), 452, cc, { size: 20, align: onLeft ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    readout(d.readout,
      '\\kemfx = \\kemfs\\dfrac{\\kResx}{\\kRess} = (' + fmt(ES, 3) + '\\ \\text{V})\\dfrac{' + ohm(RxB) + '}{' + ohm(RsB) + '} = ' + fmt(Ex.v, 3) + '\\ \\text{V}',
      'The unknown cell balances at ' + ohms(RxB) + ' and the standard cell at ' + ohms(RsB) + '. Changing the current down the wire moves both balance points, but it moves them together, so the ratio that gives the unknown emf does not change at all.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.35: the two ways of measuring a resistance with standard
   meters. The ammeter's own resistance is fixed at 0.500 Ω, and what the
   reader moves is the resistance being measured and the internal
   resistance of the source. Still: neither configuration has a clock.
   Ranges: the resistance runs to 200 Ω and the emf is fixed at 3.00 V.
===================================================================== */
(function () {
  const d = sim('sim-ohmmeter', 620);
  const Rv = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 200, step: 1, value: 50, unit: 'Ω', dec: 0, aria: 'the resistance being measured' });
  const ri = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0.05, max: 20, step: 0.05, value: 0.5, unit: 'Ω', dec: 2, aria: 'the internal resistance of the source' });
  const how = F.select(d.controls, { label: '\\text{the configuration}', options: [{ value: 'a', label: 'the source’s voltage assumed' }, { value: 'b', label: 'the terminal voltage measured' }], value: 'a', aria: 'which of the two configurations is drawn' });
  const RA = 0.500, E = 3.00, IFULL = 3.00 / 1.55;   /* the ammeter's face is fixed to the largest current the sliders reach */
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), rc = C('resistance'), cc = C('current');
    const a = how.value === 'a';
    const I = E / (ri.v + RA + Rv.v), V = a ? E : E - I * ri.v, Rcalc = V / I, err = (Rcalc - Rv.v) / Rv.v * 100;
    headline(ctx, a
      ? 'Taking the source’s ' + fmt(E, 2) + ' V for the voltage across the resistor gives ' + ohms(Rcalc) + ' for a resistance that is really ' + ohms(Rv.v) + ', which is ' + fmt(err, 1) + '% too high.'
      : 'Measuring the terminal voltage of ' + volts(V) + ' instead gives ' + ohms(Rcalc) + ' for a resistance that is really ' + ohms(Rv.v) + ', which is ' + fmt(err, 1) + '% too high.');
    wires(ctx, [[340, 160], [1120, 160]]);
    wires(ctx, [[340, 470], [1120, 470]]);
    wires(ctx, [[340, 160], [340, 210]]);
    wires(ctx, [[340, 276], [340, 326]]);
    wires(ctx, [[340, 454], [340, 470]]);
    battery(ctx, 340, 243);
    text(ctx, 'ℰ = ' + fmt(E, 2) + ' V', 298, 243, vc, { size: 23, weight: 600, align: 'right' });
    resistor(ctx, 340, 390, false, 'r', ri.v);
    wires(ctx, [[1120, 160], [1120, 251]]);
    wires(ctx, [[1120, 379], [1120, 470]]);
    resistor(ctx, 1120, 315, false, 'R', Rv.v);
    meter(ctx, 730, 160, 54, 2 * (I / IFULL) - 1, 'A', { needle: cc });
    text(ctx, 'the ammeter, ' + ohms(RA), 800, 212, PAL.muted, { size: 19, align: 'left', bg: PAL.panel });
    flow(ctx, 520, 160, 1, 0, 'I = ' + fmt(I * 1000, 1) + ' mA');
    if (a) {
      text(ctx, 'the source’s ' + fmt(E, 2) + ' V is taken for the voltage across R', 700, 560, PAL.muted, { size: 19, align: 'center' });
    } else {
      wires(ctx, [[340, 160], [200, 160], [200, 560]]);
      wires(ctx, [[200, 560], [560, 560]]);
      wires(ctx, [[668, 560], [860, 560], [860, 470]]);
      meter(ctx, 614, 560, 54, 2 * (V / E) - 1, 'V', { needle: vc });
      text(ctx, 'it reads ' + volts(V), 700, 560, vc, { size: 21, align: 'left' });
    }
    text(ctx, 'R is calculated as ' + ohms(Rcalc), 700, 250, rc, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'and R really is ' + ohms(Rv.v), 700, 288, rc, { size: 21, align: 'center' });
    readout(d.readout,
      '\\kRes = \\dfrac{\\kV}{\\kIcur} = \\dfrac{' + fmt(V, 3) + '\\ \\text{V}}{' + fmt(I, 5) + '\\ \\text{A}} = ' + ohm(Rcalc),
      a
        ? 'The current the ammeter reads has passed through the internal resistance and through the ammeter as well as through R, so the calculated resistance carries both of them and grows as the source ages.'
        : 'Measuring the terminal voltage takes the internal resistance out of the answer, but the ammeter is still in the circuit, so the calculated resistance is too high by the ammeter’s own ' + ohms(RA) + ' however good the source is.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.36: the Wheatstone bridge. Two known arms, one variable arm
   and the unknown, with a galvanometer bridging the two branches. Still:
   the balance is a setting of the variable arm and not a history.
   Ranges: the arms run to 400 Ω, the first arm is fixed at 100.0 Ω, and
   the needle is at full scale at 0.200 V across the bridge.
===================================================================== */
(function () {
  const d = sim('sim-wheatstone', 750);
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 10, max: 400, step: 1, value: 160, unit: 'Ω', dec: 0, aria: 'the variable arm of the bridge' });
  const Rx = ctl(d.controls, { label: '\\kResx', cls: 'resistance', min: 10, max: 300, step: 1, value: 200, unit: 'Ω', dec: 0, aria: 'the unknown resistance' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 50, max: 300, step: 1, value: 125, unit: 'Ω', dec: 0, aria: 'the second known arm of the bridge' });
  const R1 = 100.0, E = 6.00, FULL = 0.2;
  const A = [300, 380], B = [760, 200], Cc = [1220, 380], D = [760, 560];
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), rc = C('resistance'), cc = C('current');
    const Vb = E * R2.v / (R1 + R2.v), Vd = E * Rx.v / (R3.v + Rx.v), diff = Vb - Vd;
    const bridge = R3.v * R2.v / R1;
    headline(ctx, Math.abs(diff) < 0.0015
      ? 'The needle sits at zero, so b and d are at the same potential and the unknown resistance is ' + ohms(bridge) + '.'
      : 'The points b and d differ by ' + volts(Math.abs(diff)) + ', so a current crosses the bridge; setting the variable arm to ' + ohms(Rx.v * R1 / R2.v) + ' would bring the needle to zero.');
    wires(ctx, [A, B]); wires(ctx, [B, Cc]); wires(ctx, [A, D]); wires(ctx, [D, Cc]);
    wires(ctx, [B, D]);
    armResistor(ctx, A, B, 'R₁', R1);
    armResistor(ctx, B, Cc, 'R₂', R2.v);
    armResistor(ctx, A, D, 'R₃', R3.v, { variable: true, flip: true });
    armResistor(ctx, D, Cc, 'Rₓ', null, { flip: true });
    text(ctx, 'the unknown', 969, 541, rc, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    meter(ctx, 760, 380, 58, diff / FULL, 'G', { centre: true, needle: cc });
    [[A, 'a', -30, -26], [B, 'b', 0, -46], [Cc, 'c', 30, -26], [D, 'd', 0, 46]].forEach(([p, s, dx, dy]) => {
      dot(ctx, p[0], p[1], PAL.ink, true, 8);
      text(ctx, s, p[0] + dx, p[1] + dy, PAL.ink, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    });
    wires(ctx, [[300, 380], [300, 660], [1220, 660], [1220, 380]]);
    batteryH(ctx, 700, 660);
    text(ctx, 'ℰ = ' + fmt(E, 2) + ' V', 700, 620, vc, { size: 22, weight: 600, align: 'center' });
    line(ctx, 880, 660, 946, 634, PAL.ink, 3.5);
    dot(ctx, 880, 660, PAL.ink, true, 6); dot(ctx, 950, 660, PAL.ink, true, 6);
    text(ctx, 'the switch', 915, 700, PAL.muted, { size: 19, align: 'center' });
    text(ctx, Math.abs(diff) < 0.0015 ? 'no current crosses the bridge' : 'a current crosses the bridge',
      760, 466, cc, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    readout(d.readout,
      '\\kResx = \\kResthree\\dfrac{\\kRestwo}{\\kResone} = (' + ohm(R3.v) + ')\\dfrac{' + ohm(R2.v) + '}{' + ohm(R1) + '} = ' + ohm(bridge),
      Math.abs(diff) < 0.0015
        ? 'The bridge is balanced, so this is the unknown resistance itself, and it was found without any current at all through the galvanometer.'
        : 'The bridge is not balanced yet, so this is what the three known arms would give rather than the unknown resistance; the needle has to be brought to zero first.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
