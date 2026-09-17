/* Figures for section 21.4 DC Voltmeters and Ammeters.
   A meter on a direct-current circuit rests at a steady reading, so every figure
   here is a still picture: none registers a cycle, none carries a transport, and
   a slider or a choice alone redraws it. The page binds the resistance, the
   current and the voltage, which is what ch21/COLOR.md gives 21.4; the wires, the
   source, the zigzags, the meter faces and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* A resistance written with the prefix that keeps it between one and a thousand. */
function ohms(r) {
  const a = Math.abs(r);
  if (a >= 1e6) return fmt(r / 1e6, 2) + ' MΩ';
  if (a >= 1e3) return fmt(r / 1e3, 2) + ' kΩ';
  if (a >= 1) return fmt(r, 2) + ' Ω';
  if (a >= 1e-3) return fmt(r * 1e3, 2) + ' mΩ';
  return fmt(r * 1e6, 2) + ' µΩ';
}
const tohms = (r) => ohms(r).replace('Ω', '\\ \\Omega').replace('µ', '\\mu').replace(/ (?=[kM\\])/, '\\ ');

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
/* A meter face with its reading set beneath it in the hue of what it reads. */
function meter(ctx, x, y, letter, reading, color, r, above) {
  const R = r || 42;
  meterFace(ctx, x, y, letter, R);
  if (reading) text(ctx, reading, x, y + (above ? -(R + 24) : R + 24), color, { size: 22, weight: 600, align: 'center' });
}

/* =====================================================================
   FIGURES 21.27 + 21.28 folded: one loop, and either meter put into it at one
   of three places. Still, because a meter on a DC loop rests at a steady
   reading and nothing in the picture has a clock.
===================================================================== */
(function () {
  const d = sim('sim-meter-connection', 620);
  const which = choice(d.controls, {
    label: '\\text{the meter}',
    options: [{ value: 'V', label: 'a voltmeter' }, { value: 'A', label: 'an ammeter' }],
    value: 'V', aria: 'which meter is put into the circuit',
  });
  const where = choice(d.controls, {
    label: '\\text{where it goes}',
    options: [{ value: 's', label: 'at the source' }, { value: '1', label: 'at R₁' }, { value: '2', label: 'at R₂' }],
    value: 's', aria: 'where in the circuit the meter is placed',
  });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the first resistance' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 8, unit: 'Ω', dec: 1, aria: 'the second resistance' });
  const EMF = 12.0, r = 0.50;
  const L = 180, Rt = 1240, TOP = 250, BOT = 520;
  function draw() {
    const { ctx } = begin(d.c);
    const r1 = R1.v, r2 = R2.v, vc = C('voltage'), cc = C('current');
    const I = EMF / (r + r1 + r2), Vt = EMF - I * r, V1 = I * r1, V2 = I * r2;
    const isV = which.value === 'V', w = where.value;
    /* the loop, the source and its internal resistance, and the two resistors */
    wires(ctx, [[L, TOP], [Rt, TOP], [Rt, BOT], [L, BOT], [L, TOP]]);
    cell(ctx, L, 330, 'up', 'ℰ = ' + fmt(EMF, 1) + ' V');
    resistor(ctx, L, 450, false, 'r', fmt(r, 2) + ' Ω');
    resistor(ctx, 520, TOP, true, 'R_1', fmt(r1, 1) + ' Ω');
    resistor(ctx, 900, TOP, true, 'R_2', fmt(r2, 1) + ' Ω');
    text(ctx, 'a', L - 22, TOP - 22, PAL.muted, { size: 20, align: 'right' });
    text(ctx, 'b', L - 22, BOT + 22, PAL.muted, { size: 20, align: 'right' });
    flow(ctx, 700, BOT, -1, 0, 'I = ' + fmt(I, 3) + ' A');
    /* the meter, hung across what it measures or cut into the line */
    let head = '', main = '', small = '';
    if (isV) {
      /* The meter hangs on two taps, each one a point of the loop, and its leads run
         along and across rather than cutting through the source or a resistor: for the
         source the taps are on the two wires that leave it, and for a resistor they sit
         on the top wire on either side of it. */
      const span = w === 's' ? [400, 395, Vt, 'the terminal voltage, between a and b']
        : w === '1' ? [520, 400, V1, 'the voltage across R₁']
          : [900, 400, V2, 'the voltage across R₂'];
      const [mx, my, reading, what] = span;
      const tapY = w === 's' ? BOT : TOP;
      wires(ctx, [[mx - 78, TOP], [mx - 78, my], [mx - 42, my]]);
      wires(ctx, [[mx + 78, tapY], [mx + 78, my], [mx + 42, my]]);
      node(ctx, mx - 78, TOP); node(ctx, mx + 78, tapY);
      meter(ctx, mx, my, 'V', fmt(reading, 2) + ' V', vc);
      text(ctx, what, mx, my + 96, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
      head = 'The voltmeter is hung in parallel with what it measures, and there it reads ' + fmt(reading, 2) + ' V; moved to either of the other two places it reads a different voltage, because each part of the loop takes its own share.';
      main = w === 's'
        ? '\\kV = \\kemf - \\kIcur\\krint = ' + fmt(EMF, 1) + '\\ \\text{V} - (' + fmt(I, 3) + '\\ \\text{A})(' + fmt(r, 2) + '\\ \\Omega) = ' + fmt(Vt, 2) + '\\ \\text{V}'
        : '\\kV = \\kIcur\\kRes' + (w === '1' ? 'one' : 'two') + ' = (' + fmt(I, 3) + '\\ \\text{A})(' + fmt(w === '1' ? r1 : r2, 1) + '\\ \\Omega) = ' + fmt(reading, 2) + '\\ \\text{V}';
      small = 'The three voltages are ' + fmt(Vt, 2) + ' V at the terminals, ' + fmt(V1, 2) + ' V across R₁ and ' + fmt(V2, 2) + ' V across R₂, and the last two add to the first, because R₁ and R₂ share what the source delivers.';
    } else {
      const mx = w === 's' ? 320 : w === '1' ? 710 : Rt;
      const my = w === '2' ? 385 : TOP;
      /* on the top wire the reading and its caption go above, clear of the resistors' names; on the right wire they go inside the loop */
      meter(ctx, mx, my, 'A', w === '2' ? null : fmt(I, 3) + ' A', cc, 42, true);
      text(ctx, w === 's' ? 'in the line leaving the source' : w === '1' ? 'in the line between R₁ and R₂' : 'in the line beyond R₂',
        w === '2' ? mx - 60 : mx, w === '2' ? my + 66 : my - 98, PAL.muted, { size: 19, align: w === '2' ? 'right' : 'center' });
      if (w === '2') text(ctx, fmt(I, 3) + ' A', mx - 60, my + 36, cc, { size: 22, weight: 600, align: 'right' });
      head = 'The ammeter is cut into the line, so the whole current passes through it, and it reads ' + fmt(I, 3) + ' A wherever in the loop it is put.';
      main = '\\kIcur = \\dfrac{\\kemf}{\\krint + \\kResone + \\kRestwo} = \\dfrac{' + fmt(EMF, 1) + '\\ \\text{V}}{' + fmt(r + r1 + r2, 2) + '\\ \\Omega} = ' + fmt(I, 3) + '\\ \\text{A}';
      small = 'There is one path round this loop and no junction anywhere on it, so the same ' + fmt(I, 3) + ' A passes the source, R₁ and R₂ in turn, and all three places give the meter the same reading.';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the galvanometer movement itself. Still, because a needle resting at
   its reading has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-galvanometer', 700);
  const Ig = ctl(d.controls, { label: '\\kIcurG', cls: 'current', min: 0, max: 60, step: 1, value: 25, unit: 'µA', dec: 0, aria: 'the current through the galvanometer' });
  const Is = ctl(d.controls, { label: '\\text{the sensitivity}', cls: 'current', min: 10, max: 100, step: 5, value: 50, unit: 'µA', dec: 0, aria: 'the current that gives a full-scale deflection' });
  const rg = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 5, max: 100, step: 5, value: 25, unit: 'Ω', dec: 0, aria: 'the resistance of the galvanometer' });
  const CX = 700, CY = 470, RAD = 300;
  function draw() {
    const { ctx } = begin(d.c);
    const i = Ig.v * 1e-6, s = Is.v * 1e-6, rr = rg.v;
    const frac = Math.min(1, i / s), over = i > s, V = i * rr, Vfull = s * rr, cc = C('current');
    /* the dial: an arc from the left-hand zero to the right-hand full scale */
    const a0 = Math.PI * 1.15, a1 = Math.PI * 1.85;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(CX, CY, RAD, a0, a1); ctx.stroke(); ctx.restore();
    for (let k = 0; k <= 10; k++) {
      const a = a0 + (a1 - a0) * k / 10, big = k % 5 === 0, rr0 = RAD - (big ? 30 : 18);
      line(ctx, CX + rr0 * Math.cos(a), CY + rr0 * Math.sin(a), CX + RAD * Math.cos(a), CY + RAD * Math.sin(a), PAL.ink, big ? 3.5 : 2);
    }
    /* the needle, swung to the fraction of full scale the current is of the sensitivity */
    const a = a0 + (a1 - a0) * frac;
    line(ctx, CX, CY, CX + (RAD - 14) * Math.cos(a), CY + (RAD - 14) * Math.sin(a), over ? PAL.ink : cc, 6);
    dot(ctx, CX, CY, PAL.ink, true, 12);
    /* the numbers on the dial are set after the needle, so that a needle resting on one
       of them passes behind it rather than striking it through */
    for (let k = 0; k <= 10; k += 5) {
      const ak = a0 + (a1 - a0) * k / 10;
      text(ctx, fmt(Is.v * k / 10, 0) + ' µA', CX + (RAD - 56) * Math.cos(ak), CY + (RAD - 56) * Math.sin(ak), cc, { size: 19, align: 'center', base: 'middle', bg: PAL.panel });
    }
    text(ctx, 'G', CX, CY + 54, PAL.ink, { size: 28, weight: 600, align: 'center' });
    text(ctx, over ? 'the needle is pinned at full scale' : fmt(100 * frac, 0) + ' per cent of full scale',
      CX, CY + 100, over ? PAL.ink : cc, { size: 22, weight: 600, align: 'center' });
    /* the two leads and the resistance of the movement itself */
    wires(ctx, [[CX - 300, CY + 170], [CX - 300, CY + 30]]);
    wires(ctx, [[CX + 300, CY + 170], [CX + 300, CY + 30]]);
    resistor(ctx, CX - 300, CY + 90, false, 'r', fmt(rr, 0) + ' Ω');
    node(ctx, CX - 300, CY + 170); node(ctx, CX + 300, CY + 170);
    text(ctx, 'the two terminals of the movement, with its own resistance on one of them', CX, CY + 208, PAL.muted, { size: 19, align: 'center' });
    headline(ctx, over
      ? 'A current of ' + fmt(Ig.v, 0) + ' µA is more than the ' + fmt(Is.v, 0) + ' µA this movement can take, so the needle is driven past the end of its scale and the reading is lost.'
      : 'A current of ' + fmt(Ig.v, 0) + ' µA through a movement whose full-scale current is ' + fmt(Is.v, 0) + ' µA swings the needle to ' + fmt(100 * frac, 0) + ' per cent of full scale.');
    readout(d.readout,
      '\\kV = \\kIcurG\\krint = (' + fmt(Ig.v, 0) + '\\ \\mu\\text{A})(' + fmt(rr, 0) + '\\ \\Omega) = ' + fmt(V * 1e3, 3) + '\\ \\text{mV}',
      'The deflection is proportional to the current, so half the sensitivity gives half a scale. It takes only ' + fmt(Vfull * 1e3, 2) + ' mV across this movement to drive the needle all the way over, which is why a galvanometer on its own can measure neither a useful voltage nor a useful current.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 21.29 + 21.30 folded: the same movement made into either instrument
   by the resistance wired to it. Still, for the same reason.
===================================================================== */
(function () {
  const d = sim('sim-galvanometer-meters', 470);
  const which = choice(d.controls, {
    label: '\\text{the instrument}',
    options: [{ value: 'V', label: 'a voltmeter' }, { value: 'A', label: 'an ammeter' }],
    value: 'V', aria: 'which instrument the galvanometer is made into',
  });
  const Vfs = ctl(d.controls, { label: '\\kV\\ \\text{at full scale}', cls: 'voltage', min: 0.5, max: 300, step: 0.5, value: 10, unit: 'V', dec: 1, aria: 'the voltage that is to give a full-scale reading' });
  const Ifs = ctl(d.controls, { label: '\\kIcur\\ \\text{at full scale}', cls: 'current', min: 0.05, max: 10, step: 0.05, value: 1, unit: 'A', dec: 2, aria: 'the current that is to give a full-scale reading' });
  const rg = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 5, max: 100, step: 5, value: 25, unit: 'Ω', dec: 0, aria: 'the resistance of the galvanometer' });
  const Is = ctl(d.controls, { label: '\\text{the sensitivity}', cls: 'current', min: 10, max: 100, step: 5, value: 50, unit: 'µA', dec: 0, aria: 'the current that gives a full-scale deflection' });
  function draw() {
    const { ctx } = begin(d.c);
    const isV = which.value === 'V', rr = rg.v, s = Is.v * 1e-6, rc = C('resistance');
    Vfs.disable(!isV); Ifs.disable(isV);
    const L = 240, R = 1160, Y = 270;
    let head = '', main = '', small = '';
    if (isV) {
      const Rtot = Vfs.v / s, Rx = Rtot - rr;
      wires(ctx, [[L, Y], [R, Y]]);
      resistor(ctx, 450, Y, true, 'R', ohms(Rx));
      meterFace(ctx, 830, Y, 'G', 42);
      text(ctx, 'r = ' + fmt(rr, 0) + ' Ω', 830, Y + 72, rc, { size: 21, align: 'center' });
      node(ctx, L, Y, 10); node(ctx, R, Y, 10);
      text(ctx, 'the two terminals of the voltmeter', (L + R) / 2, Y - 110, PAL.muted, { size: 19, align: 'center' });
      text(ctx, 'the large resistance in series', 450, Y + 72, PAL.muted, { size: 19, align: 'center' });
      text(ctx, 'the movement, with its own resistance', 830, Y + 104, PAL.muted, { size: 19, align: 'center' });
      head = 'To read ' + fmt(Vfs.v, 1) + ' V at full scale, a ' + fmt(rr, 0) + ' Ω movement of ' + fmt(Is.v, 0) + ' µA sensitivity needs ' + ohms(Rx) + ' in series with it.';
      main = '\\kRestot = \\kRes + \\krint = \\dfrac{\\kV}{\\kIcur} = \\dfrac{' + fmt(Vfs.v, 1) + '\\ \\text{V}}{' + fmt(Is.v, 0) + '\\ \\mu\\text{A}} = ' + tohms(Rtot) + ', \\quad \\kRes = ' + tohms(Rx);
      small = 'The series resistance is what the meter is: it is ' + fmt(Rtot / rr, 0) + ' times the resistance of the movement, so almost the whole of the ' + fmt(Vfs.v, 1) + ' V falls across it and the movement itself keeps only ' + fmt(s * rr * 1e3, 2) + ' mV. Half the voltage sends half the current through and gives half a scale.';
    } else {
      const Rx = Ifs.v > s ? rr * s / (Ifs.v - s) : rr * 1e3;
      wires(ctx, [[L, Y], [420, Y]]); wires(ctx, [[980, Y], [R, Y]]);
      wires(ctx, [[420, Y], [420, Y - 110], [980, Y - 110], [980, Y]]);
      wires(ctx, [[420, Y], [420, Y + 110], [980, Y + 110], [980, Y]]);
      meterFace(ctx, 700, Y - 110, 'G', 42);
      text(ctx, 'r = ' + fmt(rr, 0) + ' Ω', 700, Y - 110 - 68, rc, { size: 21, align: 'center' });
      resistor(ctx, 700, Y + 110, true, 'R', ohms(Rx));
      node(ctx, L, Y, 10); node(ctx, R, Y, 10);
      node(ctx, 420, Y); node(ctx, 980, Y);
      flow(ctx, 330, Y, 1, 0, 'I = ' + fmt(Ifs.v, 2) + ' A', { side: -1 });
      text(ctx, 'the small shunt in parallel', 700, Y + 110 + 66, PAL.muted, { size: 19, align: 'center' });
      text(ctx, 'the movement', 700, Y - 110 + 68, PAL.muted, { size: 19, align: 'center' });
      head = 'To read ' + fmt(Ifs.v, 2) + ' A at full scale, the same movement needs a shunt of only ' + ohms(Rx) + ' across it.';
      main = '\\kRes = \\krint\\dfrac{\\kIcurG}{\\kIcur} = (' + fmt(rr, 0) + '\\ \\Omega)\\dfrac{' + fmt(Is.v, 0) + '\\ \\mu\\text{A}}{' + fmt(Ifs.v - s, 4) + '\\ \\text{A}} = ' + tohms(Rx);
      small = 'The shunt and the movement have the same voltage across them, so the current divides in the ratio of their resistances: of the ' + fmt(Ifs.v, 2) + ' A coming in, all but ' + fmt(Is.v, 0) + ' µA goes round through the shunt, and the movement is left with just enough to swing the needle over.';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 21.31 + 21.32 folded: what the meter's own resistance does to the
   circuit it is put into. Still, for the same reason.
===================================================================== */
(function () {
  const d = sim('sim-meter-disturbs', 620);
  const which = choice(d.controls, {
    label: '\\text{the meter}',
    options: [{ value: 'V', label: 'a voltmeter, in parallel' }, { value: 'A', label: 'an ammeter, in series' }],
    value: 'V', aria: 'which meter is connected',
  });
  const Rv = ctl(d.controls, { label: '\\text{the voltmeter}', cls: 'resistance', min: 10, max: 2000, step: 10, value: 1000, unit: 'kΩ', dec: 0, aria: 'the resistance of the voltmeter' });
  const Rd = ctl(d.controls, { label: '\\kRes\\ \\text{it is across}', cls: 'resistance', min: 5, max: 200, step: 5, value: 75, unit: 'kΩ', dec: 0, aria: 'the resistance the voltmeter is placed across' });
  const Ra = ctl(d.controls, { label: '\\text{the ammeter}', cls: 'resistance', min: 0, max: 10, step: 0.02, value: 0.02, unit: 'Ω', dec: 2, aria: 'the resistance of the ammeter' });
  const Rb = ctl(d.controls, { label: '\\kRes\\ \\text{it is in with}', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 10, unit: 'Ω', dec: 1, aria: 'the resistance of the branch the ammeter is in' });
  const EMF = 12.0;
  function draw() {
    const { ctx } = begin(d.c);
    const isV = which.value === 'V', vc = C('voltage'), cc = C('current');
    Rv.disable(!isV); Rd.disable(!isV); Ra.disable(isV); Rb.disable(isV);
    const L = 200, R = 1200, TOP = 250, BOT = 520;
    wires(ctx, [[L, TOP], [R, TOP], [R, BOT], [L, BOT], [L, TOP]]);
    cell(ctx, L, 385, 'up', 'ℰ = ' + fmt(EMF, 1) + ' V');
    let head = '', main = '', small = '';
    if (isV) {
      const rd = Rd.v * 1e3, rv = Rv.v * 1e3;
      const Vtrue = EMF / 2, rp = rd * rv / (rd + rv), Vread = EMF * rp / (rd + rp);
      const err = 100 * (Vread - Vtrue) / Vtrue;
      resistor(ctx, 520, TOP, true, 'R', ohms(rd));
      resistor(ctx, 900, TOP, true, 'R', ohms(rd));
      text(ctx, 'two equal resistors share the source between them', 710, TOP - 92, PAL.muted, { size: 19, align: 'center' });
      wires(ctx, [[836, TOP], [836, 430], [858, 430]]); wires(ctx, [[964, TOP], [964, 430], [942, 430]]);
      node(ctx, 836, TOP); node(ctx, 964, TOP);
      meter(ctx, 900, 430, 'V', fmt(Vread, 3) + ' V', vc);
      text(ctx, 'the voltmeter, ' + ohms(rv), 900, 566, C('resistance'), { size: 20, align: 'center' });
      text(ctx, 'without it the resistor has ' + fmt(Vtrue, 3) + ' V across it', 400, 470, vc, { size: 20, weight: 600, align: 'center' });
      head = 'The voltmeter is ' + fmt(rv / rd, 1) + ' times the resistance it is placed across, and it reads ' + fmt(Vread, 3) + ' V where the resistor alone would have ' + fmt(Vtrue, 3) + ' V, an error of ' + fmt(Math.abs(err), 2) + ' per cent.';
      main = '\\kResp = \\dfrac{\\kRes\\,R_{\\text{V}}}{\\kRes + R_{\\text{V}}} = ' + tohms(rp) + ', \\quad \\kV = \\kemf\\dfrac{\\kResp}{\\kRes + \\kResp} = ' + fmt(Vread, 3) + '\\ \\text{V}';
      small = 'A large resistance in parallel with a small one comes to very nearly the small one, so a voltmeter of a few orders of magnitude more resistance than the device hardly moves the reading. Bring it down to the resistance of the device itself and the pair comes to half of it, and the voltage the meter reports is far below the voltage it was meant to measure.';
    } else {
      const rb = Rb.v, ra = Ra.v, Itrue = EMF / rb, Iread = EMF / (rb + ra);
      const err = 100 * (Iread - Itrue) / Itrue;
      resistor(ctx, 520, TOP, true, 'R', ohms(rb));
      meter(ctx, 900, TOP, 'A', fmt(Iread, 3) + ' A', cc);
      text(ctx, 'the ammeter, ' + ohms(ra), 900, TOP - 86, C('resistance'), { size: 20, align: 'center' });
      flow(ctx, 700, BOT, -1, 0, null);
      text(ctx, 'without the meter the branch carries ' + fmt(Itrue, 3) + ' A', 700, BOT + 60, cc, { size: 20, weight: 600, align: 'center' });
      head = 'The ammeter adds ' + ohms(ra) + ' to a branch of ' + ohms(rb) + ', and it reads ' + fmt(Iread, 3) + ' A where the branch alone would carry ' + fmt(Itrue, 3) + ' A, an error of ' + fmt(Math.abs(err), 2) + ' per cent.';
      main = '\\kIcur = \\dfrac{\\kemf}{\\kRes + R_{\\text{A}}} = \\dfrac{' + fmt(EMF, 1) + '\\ \\text{V}}{' + tohms(rb) + ' + ' + tohms(ra) + '} = ' + fmt(Iread, 3) + '\\ \\text{A}';
      small = 'Resistances in series add, so an ammeter of a small enough resistance is simply lost in the branch it is measuring. Give it the resistance of the branch itself and the total is doubled, and the current the meter reports is half the current that flowed before it was put in.';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
