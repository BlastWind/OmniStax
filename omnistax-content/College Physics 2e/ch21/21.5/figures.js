/* Figures for section 21.5 Null Measurements.
   Every figure here is a circuit schematic, and an instrument being balanced has
   no time in it, so all four are still pictures: none registers a cycle, none
   carries a transport, and a slider or a choice alone redraws it. The page binds
   the resistance, the voltage and the current, which is what ch21/COLOR.md gives
   21.5; the wires, the cells, the meter faces, the zigzags, the letters on the
   meters and the letters on the bridge are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';
const ohms = (r) => fmt(r, r < 10 ? 2 : 1) + ' Ω';
const volts = (v) => fmt(v, 3) + ' V';

/* ---------- circuit pieces at the book's symbol conventions ----------
   A resistor is a zigzag, a source is one cell with a long thin positive plate
   and a short thick negative one, a capacitor is two equal plates, a meter is a
   ring with its letter in it, a switch is a blade on two contacts, and a current
   arrow lies beside its wire and never on it. Every piece paints out the wire
   beneath itself, so a caller draws the loop whole and sets the pieces on it. */
const WIRE = 3.5;
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, WIRE); };
const node = (ctx, x, y, r) => dot(ctx, x, y, PAL.ink, true, r || 7);
/* the wire under a piece, painted out over a length L along the angle a */
function gap(ctx, x, y, a, L, w) { ctx.save(); ctx.translate(x, y); ctx.rotate(a); line(ctx, -L / 2, 0, L / 2, 0, PAL.panel, w || 8); ctx.restore(); }
const ZL = 96, ZA = 13;
/* The zigzag itself, centred at (x, y) and running along the angle a; o.len is its
   length and o.variable strikes the arrow of a variable resistor across it. */
function zigzag(ctx, x, y, a, o) {
  const L = (o && o.len) || ZL, n = 6, s = L / n;
  gap(ctx, x, y, a, L, 6);
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE; ctx.lineJoin = 'miter'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(-L / 2, 0);
  for (let i = 0; i < n; i++) { ctx.lineTo(-L / 2 + (i + 0.25) * s, -ZA); ctx.lineTo(-L / 2 + (i + 0.75) * s, ZA); }
  ctx.lineTo(L / 2, 0); ctx.stroke();
  if (o && o.variable) arrow(ctx, -L * 0.42, ZA + 18, L * 0.42, -ZA - 18, PAL.ink, 3);
  ctx.restore();
}
/* A resistor lying along a horizontal wire or standing on a vertical one, its name
   and its value set beside it in the resistance hue and off the wire: the name above
   and the value below a horizontal one (o.stack 'above' or 'below' puts both on one
   side), and both on one side of a vertical one (o.side, -1 for the left). */
function resistor(ctx, x, y, horiz, name, val, o) {
  o = o || {}; const rc = C('resistance'), v = typeof val === 'number' ? ohms(val) : val;
  zigzag(ctx, x, y, horiz ? 0 : Math.PI / 2, o);
  if (horiz) {
    if (o.stack) {
      const s = o.stack === 'above' ? -1 : 1, y1 = y + s * (s < 0 ? 62 : 36), y2 = y + s * (s < 0 ? 34 : 64);
      if (name) text(ctx, name, x, y1, rc, { size: 24, weight: 600, align: 'center' });
      if (v) text(ctx, v, x, y2, rc, { size: 21, align: 'center' });
    } else {
      if (name) text(ctx, name, x, y - 38, rc, { size: 24, weight: 600, align: 'center' });
      if (v) text(ctx, v, x, y + 36, rc, { size: 21, align: 'center' });
    }
  } else {
    const s = o.side === 1 ? 1 : -1, lx = x + s * 32, al = s > 0 ? 'left' : 'right';
    if (name && v) { text(ctx, name, lx, y - 15, rc, { size: 24, weight: 600, align: al }); text(ctx, v, lx, y + 16, rc, { size: 21, align: al }); }
    else if (name) text(ctx, name, lx, y, rc, { size: 24, weight: 600, align: al });
    else if (v) text(ctx, v, lx, y, rc, { size: 21, align: al });
  }
}
/* One cell, as the book draws every source: a long thin plate for the positive
   terminal and a short thick one for the negative. `plus` is the way the positive
   plate faces, 'up' or 'down' on a vertical wire and 'left' or 'right' on a
   horizontal one. The label, one string or [name, value], is set in the voltage
   hue on the side o.side (-1 is left, or above) and the two signs on the other. */
function cell(ctx, x, y, plus, label, o) {
  o = o || {}; const vc = C('voltage'), vert = plus === 'up' || plus === 'down', s = plus === 'up' || plus === 'left' ? -1 : 1;
  const side = o.side === undefined ? (vert ? -1 : 1) : o.side, q = -side;   /* the signs go opposite the label */
  const lab = label === null || label === undefined ? [] : Array.isArray(label) ? label : [label];
  if (vert) {
    gap(ctx, x, y, Math.PI / 2, 20, 8);
    line(ctx, x - 30, y + s * 10, x + 30, y + s * 10, PAL.ink, 4.5);       /* the long positive plate */
    line(ctx, x - 15, y - s * 10, x + 15, y - s * 10, PAL.ink, 8);          /* the short negative one */
    if (o.signs !== false) {
      text(ctx, '+', x + q * 48, y + s * 15, PAL.muted, { size: 22, weight: 600, align: 'center' });
      text(ctx, '−', x + q * 48, y - s * 15, PAL.muted, { size: 22, weight: 600, align: 'center' });
    }
    const lx = x + side * 46, al = side < 0 ? 'right' : 'left';
    if (lab.length === 2) { text(ctx, lab[0], lx, y - 13, vc, { size: 23, weight: 600, align: al }); text(ctx, lab[1], lx, y + 15, vc, { size: 20, align: al }); }
    else if (lab.length === 1) text(ctx, lab[0], lx, y, vc, { size: 23, weight: 600, align: al });
  } else {
    gap(ctx, x, y, 0, 20, 8);
    line(ctx, x + s * 10, y - 30, x + s * 10, y + 30, PAL.ink, 4.5);
    line(ctx, x - s * 10, y - 15, x - s * 10, y + 15, PAL.ink, 8);
    const sy = y - side * 32;
    if (o.signs !== false) {
      text(ctx, '+', x + s * 24, sy, PAL.muted, { size: 22, weight: 600, align: 'center' });
      text(ctx, '−', x - s * 24, sy, PAL.muted, { size: 22, weight: 600, align: 'center' });
    }
    const ly = y + side * 44;
    if (lab.length === 2) { text(ctx, lab[0], x, ly, vc, { size: 23, weight: 600, align: 'center' }); text(ctx, lab[1], x, ly + side * 27, vc, { size: 20, align: 'center' }); }
    else if (lab.length === 1) text(ctx, lab[0], x, ly, vc, { size: 23, weight: 600, align: 'center' });
  }
}
/* A meter: a ring in ink with its letter in it, painted over the wire it sits on. */
function meterFace(ctx, x, y, letter, r) {
  const R = r || 42;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
  ctx.beginPath(); ctx.arc(x, y, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  if (letter) text(ctx, letter, x, y, PAL.ink, { size: 28, weight: 600, align: 'center' });
}
/* A switch on a wire running along the angle a: two contacts and a blade hinged on
   the first, lying on the second when closed and lifted off it when open. */
function sw(ctx, x, y, a, closed) {
  const h = 32;
  gap(ctx, x, y, a, 2 * h, 8);
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  dot(ctx, -h, 0, PAL.ink, true, 6); dot(ctx, h, 0, PAL.ink, true, 6);
  if (closed) line(ctx, -h, 0, h - 2, -6, PAL.ink, 4);
  else line(ctx, -h, 0, h - 14, -34, PAL.ink, 4);
  ctx.restore();
}
/* A current arrow beside its wire and never on it: it runs along (dx, dy), sits
   o.off units off the wire to the side o.side (+1 is the inside of a loop walked
   clockwise), and its name goes one step further out, in the current hue. */
function flow(ctx, x, y, dx, dy, name, o) {
  o = o || {}; const cc = C('current'), L = o.len || 64, w = o.w || 5, side = o.side === undefined ? 1 : o.side, off = o.off === undefined ? 26 : o.off;
  const nx = -dy * side, ny = dx * side, ax = x + nx * off, ay = y + ny * off;
  arrow(ctx, ax - dx * L / 2, ay - dy * L / 2, ax + dx * L / 2, ay + dy * L / 2, cc, w);
  if (!name) return;
  const g = w / 2 + 18;
  if (dy) text(ctx, name, ax + nx * g, ay, cc, { size: 21, weight: 600, align: nx > 0 ? 'left' : 'right', bg: PAL.panel });
  else text(ctx, name, ax, ay + ny * g, cc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
}
/* A resistor lying along the arm from p to q, drawn square to the arm, its name and
   value stacked beside it on the side o.flip chooses, clear of the arm. */
function armResistor(ctx, p, q, name, val, o) {
  o = o || {}; const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
  const a = Math.atan2(q[1] - p[1], q[0] - p[0]);
  zigzag(ctx, mx, my, a, { variable: o.variable });
  const nx = Math.sin(a), ny = -Math.cos(a), k = o.flip ? -1 : 1, rc = C('resistance');
  const lx = mx + k * nx * 78, ly = my + k * ny * 78;
  if (name) text(ctx, name, lx, ly - 14, rc, { size: 24, weight: 600, align: 'center' });
  if (val !== null && val !== undefined) text(ctx, ohms(val), lx, ly + 16, rc, { size: 21, align: 'center' });
  else if (o.note) text(ctx, o.note, lx, ly + 16, rc, { size: 20, align: 'center' });
}
/* A meter with a needle: a round face with a scale across the top, the needle, and
   the letter the book puts inside it. `frac` runs from −1 at the left of the scale
   to +1 at the right, and `centre` marks the middle of the scale with a zero. */
function meter(ctx, x, y, R, frac, letter, opts) {
  const o = opts || {}, f = Math.max(-1, Math.min(1, frac));
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
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
    const vc = C('voltage'), rc = C('resistance');
    const Rtot = Rm.v + RG, I = E.v / (Rtot + ri.v), V = E.v - I * ri.v, miss = E.v - V;
    headline(ctx, 'The meter draws a current of ' + fmt(I * 1000, 2) + ' mA, so it reads ' + volts(V)
      + ', which falls short of the emf of ' + volts(E.v) + ' by ' + fmt(miss * 1000, 1) + ' mV.');
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]);
    ctx.beginPath(); ctx.roundRect(880, 120, 380, 400, 14); ctx.stroke(); ctx.restore();
    wires(ctx, [[300, 150], [1080, 150], [1080, 480], [300, 480], [300, 150]]);
    cell(ctx, 300, 233, 'up', 'ℰ = ' + volts(E.v));
    resistor(ctx, 300, 380, false, 'r', ri.v);
    text(ctx, 'the battery', 300, 545, PAL.muted, { size: 19, align: 'center' });
    meter(ctx, 1080, 270, 62, 2 * (V / 3) - 1, 'G', { needle: vc });
    text(ctx, 'r_G = ' + ohms(RG), 1006, 270, rc, { size: 20, align: 'right' });
    resistor(ctx, 1080, 394, false, 'R', Rm.v);
    text(ctx, 'the voltmeter', 1080, 545, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 690, 150, 1, 0, 'I = ' + fmt(I * 1000, 2) + ' mA');
    text(ctx, 'it reads ' + volts(V), 690, 310, vc, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'the emf is ' + volts(E.v), 690, 350, vc, { size: 21, align: 'center' });
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
  const d = sim('sim-potentiometer', 720);
  const Ex = ctl(d.controls, { label: '\\kemfx', cls: 'voltage', min: 0.2, max: 1.9, step: 0.01, value: 1.25, unit: 'V', dec: 2, aria: 'the unknown emf' });
  const Rx = ctl(d.controls, { label: '\\kResx', cls: 'resistance', min: 0, max: 20, step: 0.05, value: 6.25, unit: 'Ω', dec: 2, aria: 'the resistance of the wire up to the contact' });
  const Iw = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0.1, max: 0.3, step: 0.005, value: 0.2, unit: 'A', dec: 3, aria: 'the current the source passes down the wire' });
  const which = choice(d.controls, { label: '\\text{which cell}', options: [{ value: 'x', label: 'the unknown' }, { value: 's', label: 'the standard' }], value: 'x', aria: 'which cell is connected through the galvanometer' });
  const RW = 20.0, ES = 1.500, X0 = 300, X1 = 1250, YT = 190, YW = 340, YB = 690, FULL = 0.5;
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), rc = C('resistance'), cc = C('current');
    const cellE = which.value === 'x' ? Ex.v : ES, name = which.value === 'x' ? 'ℰₓ' : 'ℰₛ';
    const drop = Iw.v * Rx.v, diff = cellE - drop, xc = X0 + (Rx.v / RW) * (X1 - X0);
    const Rb = cellE / Iw.v, RxB = Ex.v / Iw.v, RsB = ES / Iw.v;
    headline(ctx, Math.abs(diff) < 0.004
      ? 'The needle sits at zero, so no current flows through the galvanometer and the cell in the branch is balanced against the ' + volts(drop) + ' the wire drops over ' + ohms(Rx.v) + '.'
      : 'The wire drops ' + volts(drop) + ' over ' + ohms(Rx.v) + ' while the cell pushes ' + volts(cellE) + ', so the needle stands off zero; the balance lies at '
        + (Rb <= RW ? ohms(Rb) + ' along the wire.' : 'a resistance the wire does not reach.'));
    /* the driving loop: the source above, the long uniform wire below it */
    wires(ctx, [[X0, YW - 17], [X0, YT], [X1, YT], [X1, YW - 17]]);
    cell(ctx, 775, YT, 'left', null);
    text(ctx, 'the source that drives the wire', 775, YT + 48, PAL.muted, { size: 19, align: 'center' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
    ctx.beginPath(); ctx.roundRect(X0, YW - 17, X1 - X0, 34, 6); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2; ctx.beginPath();
    for (let k = 1; k < 20; k++) { const x = X0 + (k / 20) * (X1 - X0); ctx.moveTo(x, YW - 17); ctx.lineTo(x, YW + 17); }
    ctx.stroke(); ctx.restore();
    for (let k = 0; k <= 20; k += 5) {
      const x = X0 + (k / 20) * (X1 - X0);
      line(ctx, x, YW + 17, x, YW + 31, PAL.muted, 2);
      text(ctx, ohms(k), k === 0 ? x + 8 : k === 20 ? x - 8 : x, YW + 54, rc, { size: 17, align: k === 0 ? 'left' : k === 20 ? 'right' : 'center' });
    }
    text(ctx, 'R = ' + ohms(RW) + ' of uniform wire', X0 + 6, YW - 44, rc, { size: 21, weight: 600, align: 'left' });
    flow(ctx, 600, YT, -1, 0, 'I = ' + fmt(Iw.v, 3) + ' A');
    /* the branch: down from the contact through the galvanometer and the cell, and back to the near end */
    arrow(ctx, xc, YW + 96, xc, YW + 24, PAL.ink, 4);
    text(ctx, 'the contact', xc + (xc > 900 ? -16 : 16), YW + 76, PAL.muted, { size: 19, align: xc > 900 ? 'right' : 'left' });
    wires(ctx, [[xc, YW + 96], [xc, YB], [X0, YB], [X0, YW + 17]]);
    meter(ctx, xc, 492, 54, diff / FULL, 'G', { centre: true, needle: cc });
    cell(ctx, xc, 629, 'up', name + ' = ' + volts(cellE));
    /* the reading sits on whichever side of the meter the canvas has room for */
    const onLeft = xc > 900;
    text(ctx, Math.abs(diff) < 0.004
      ? 'no current in the branch'
      : Math.abs(diff) > FULL
        ? 'the needle is driven past the end of its scale'
        : 'the needle reads ' + (diff > 0 ? '+' : '−') + fmt(Math.abs(diff) / FULL * 100, 0) + '% of full scale',
      xc + (onLeft ? -74 : 74), 492, cc, { size: 20, align: onLeft ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
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
  const d = sim('sim-ohmmeter', 660);
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
    wires(ctx, [[340, 160], [1120, 160], [1120, 470], [340, 470], [340, 160]]);
    cell(ctx, 340, 243, 'up', 'ℰ = ' + fmt(E, 2) + ' V');
    resistor(ctx, 340, 390, false, 'r', ri.v);
    resistor(ctx, 1120, 315, false, 'R', Rv.v, { side: 1 });
    meter(ctx, 730, 160, 54, 2 * (I / IFULL) - 1, 'A', { needle: cc });
    text(ctx, 'the ammeter, ' + ohms(RA), 800, 212, PAL.muted, { size: 19, align: 'left' });
    flow(ctx, 520, 160, 1, 0, 'I = ' + fmt(I * 1000, 1) + ' mA');
    if (a) {
      text(ctx, 'the source’s ' + fmt(E, 2) + ' V is taken for the voltage across R', 700, 560, PAL.muted, { size: 19, align: 'center' });
    } else {
      /* the voltmeter hangs on the two terminals of the source, outside its internal resistance */
      wires(ctx, [[340, 160], [150, 160], [150, 560], [860, 560], [860, 470]]);
      node(ctx, 340, 160); node(ctx, 860, 470);
      meter(ctx, 614, 560, 54, 2 * (V / E) - 1, 'V', { needle: vc });
      text(ctx, 'it reads ' + volts(V), 614, 636, vc, { size: 21, align: 'center' });
      text(ctx, 'the voltmeter, across the terminals', 400, 600, PAL.muted, { size: 19, align: 'center' });
    }
    text(ctx, 'R is calculated as ' + ohms(Rcalc), 700, 260, rc, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'and R really is ' + ohms(Rv.v), 700, 298, rc, { size: 21, align: 'center' });
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
    armResistor(ctx, D, Cc, 'Rₓ', null, { flip: true, note: 'the unknown' });
    meter(ctx, 760, 380, 58, diff / FULL, 'G', { centre: true, needle: cc });
    [[A, 'a', -30, -26], [B, 'b', 0, -46], [Cc, 'c', 30, -26], [D, 'd', 0, 46]].forEach(([p, s, dx, dy]) => {
      node(ctx, p[0], p[1], 8);
      text(ctx, s, p[0] + dx, p[1] + dy, PAL.ink, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    });
    wires(ctx, [[300, 380], [300, 660], [1220, 660], [1220, 380]]);
    cell(ctx, 640, 660, 'left', 'ℰ = ' + fmt(E, 2) + ' V', { side: -1 });
    sw(ctx, 915, 660, 0, false);
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
