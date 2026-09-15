/* Figures for section 21.4 DC Voltmeters and Ammeters.
   A meter on a direct-current circuit rests at a steady reading, so every figure
   here is a still picture: none registers a cycle, none carries a transport, and
   a slider or a choice alone redraws it. The page binds the resistance, the
   current and the voltage, which is what ch21/COLOR.md gives 21.4; the wires, the
   source, the resistor boxes, the meter faces and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces every schematic here is drawn from ----------
   The same resistor box, battery and current arrow that 21.1 draws, so that a
   circuit of this chapter looks the same wherever the reader meets it. */
const BOXW = 128, BOXH = 46;
function resistor(ctx, x, y, horiz, name, label, opts) {
  const o = opts || {}, w = horiz ? BOXW : BOXH, h = horiz ? BOXH : BOXW, rc = C('resistance');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
  if (horiz) {
    if (name) text(ctx, name, x, y - h / 2 - 24, rc, { size: 24, weight: 600, align: 'center' });
    if (label) text(ctx, label, x, y + h / 2 + (o.below || 24), rc, { size: 21, align: 'center', bg: PAL.panel });
  } else {
    if (name) text(ctx, name, x - w / 2 - 14, y, rc, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    if (label) text(ctx, label, x + w / 2 + 14, y, rc, { size: 21, align: 'left', bg: PAL.panel });
  }
}
/* A source standing on a wire, its long plate towards the point named first. */
function battery(ctx, x, y, label) {
  const plates = [[26, 5], [13, 5], [26, 5], [13, 5]];
  let yy = y - 33;
  plates.forEach(([half, w], i) => { line(ctx, x - half, yy, x + half, yy, PAL.ink, w); yy += i % 2 === 0 ? 20 : 22; });
  if (label) text(ctx, label, x - 40, y, C('voltage'), { size: 22, weight: 600, align: 'right', bg: PAL.panel });
}
function flow(ctx, x, y, dx, dy, name) {
  const cc = C('current'), L = 46;
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, cc, 5);
  if (name) text(ctx, name, x + (dy ? 26 : 0), y - (dy ? 0 : 24), cc, { size: 21, weight: 600, align: dy ? 'left' : 'center', bg: PAL.panel });
}
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
/* A meter face: a circle of ink with its letter in it and its reading beneath. */
function meter(ctx, x, y, letter, reading, color, r) {
  const R = r || 42;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(x, y, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, letter, x, y, PAL.ink, { size: 28, weight: 600, align: 'center', base: 'middle' });
  if (reading) text(ctx, reading, x, y + R + 24, color, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
}
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
    battery(ctx, L, 330, 'ℰ = ' + fmt(EMF, 1) + ' V');
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
        : w === '1' ? [520, 420, V1, 'the voltage across R₁']
          : [900, 420, V2, 'the voltage across R₂'];
      const [mx, my, reading, what] = span;
      const tapY = w === 's' ? BOT : TOP;
      wires(ctx, [[mx - 78, TOP], [mx - 78, my], [mx - 52, my]]);
      wires(ctx, [[mx + 78, tapY], [mx + 78, my], [mx + 52, my]]);
      dot(ctx, mx - 78, TOP, PAL.ink, true, 7); dot(ctx, mx + 78, tapY, PAL.ink, true, 7);
      meter(ctx, mx, my, 'V', fmt(reading, 2) + ' V', vc);
      text(ctx, what, mx, my + 96, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
      head = 'The voltmeter is hung in parallel with what it measures, and there it reads ' + fmt(reading, 2) + ' V; moved to either of the other two places it reads a different voltage, because each part of the loop takes its own share.';
      main = w === 's'
        ? '\\kV = \\kemf - \\kIcur\\krint = ' + fmt(EMF, 1) + '\\ \\text{V} - (' + fmt(I, 3) + '\\ \\text{A})(' + fmt(r, 2) + '\\ \\Omega) = ' + fmt(Vt, 2) + '\\ \\text{V}'
        : '\\kV = \\kIcur\\kRes' + (w === '1' ? 'one' : 'two') + ' = (' + fmt(I, 3) + '\\ \\text{A})(' + fmt(w === '1' ? r1 : r2, 1) + '\\ \\Omega) = ' + fmt(reading, 2) + '\\ \\text{V}';
      small = 'The three voltages are ' + fmt(Vt, 2) + ' V at the terminals, ' + fmt(V1, 2) + ' V across R₁ and ' + fmt(V2, 2) + ' V across R₂, and the last two add to the first, because R₁ and R₂ share what the source delivers.';
    } else {
      const mx = w === 's' ? 300 : w === '1' ? 700 : Rt;
      const my = w === '2' ? 385 : TOP;
      if (w === '2') { wires(ctx, [[Rt, TOP], [Rt, my - 42]]); wires(ctx, [[Rt, my + 42], [Rt, BOT]]); }
      meter(ctx, mx, my, 'A', fmt(I, 3) + ' A', cc);
      text(ctx, w === 's' ? 'in the line leaving the source' : w === '1' ? 'in the line between R₁ and R₂' : 'in the line beyond R₂',
        mx + (w === '2' ? -150 : 0), my + (w === '2' ? 96 : 96), PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
      head = 'The ammeter is cut into the line, so the whole current passes through it, and it reads ' + fmt(I, 3) + ' A wherever in the loop it is put.';
      main = '\\kIcur = \\dfrac{\\kemf}{\\krint + \\kResone + \\kRestwo} = \\dfrac{' + fmt(EMF, 1) + '\\ \\text{V}}{' + fmt(r + r1 + r2, 2) + '\\ \\Omega} = ' + fmt(I, 3) + '\\ \\text{A}';
      small = 'There is one path round this loop and no junction anywhere on it, so the same ' + fmt(I, 3) + ' A passes the source, R₁ and R₂ in turn, and all three places give the meter the same reading.';
    }
    /* the loop is drawn first, so the letters and the meter sit on top of it */
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
    resistor(ctx, CX - 300, CY + 30, false, 'r', fmt(rr, 0) + ' Ω');
    dot(ctx, CX - 300, CY + 170, PAL.ink, true, 7); dot(ctx, CX + 300, CY + 170, PAL.ink, true, 7);
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
  const d = sim('sim-galvanometer-meters', 600);
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
    const isV = which.value === 'V', rr = rg.v, s = Is.v * 1e-6;
    Vfs.disable(!isV); Ifs.disable(isV);
    const L = 240, R = 1160, Y = 350;
    let head = '', main = '', small = '';
    if (isV) {
      const Rtot = Vfs.v / s, Rx = Rtot - rr;
      wires(ctx, [[L, Y], [L + 96, Y]]); wires(ctx, [[L + 96 + BOXW, Y], [760, Y]]);
      resistor(ctx, L + 96 + BOXW / 2, Y, true, 'R', ohms(Rx));
      meter(ctx, 830, Y, 'G', null, PAL.ink);
      resistor(ctx, 830, Y + 150, true, 'r', fmt(rr, 0) + ' Ω');
      wires(ctx, [[830, Y + 42], [830, Y + 127]]);
      wires(ctx, [[872, Y], [R, Y]]);
      dot(ctx, L, Y, PAL.ink, true, 10); dot(ctx, R, Y, PAL.ink, true, 10);
      text(ctx, 'the two terminals of the voltmeter', (L + R) / 2, Y - 150, PAL.muted, { size: 19, align: 'center' });
      text(ctx, 'the large resistance in series', L + 96 + BOXW / 2, Y + 96, PAL.muted, { size: 19, align: 'center' });
      head = 'To read ' + fmt(Vfs.v, 1) + ' V at full scale, a ' + fmt(rr, 0) + ' Ω movement of ' + fmt(Is.v, 0) + ' µA sensitivity needs ' + ohms(Rx) + ' in series with it.';
      main = '\\kRestot = \\kRes + \\krint = \\dfrac{\\kV}{\\kIcur} = \\dfrac{' + fmt(Vfs.v, 1) + '\\ \\text{V}}{' + fmt(Is.v, 0) + '\\ \\mu\\text{A}} = ' + tohms(Rtot) + ', \\quad \\kRes = ' + tohms(Rx);
      small = 'The series resistance is what the meter is: it is ' + fmt(Rtot / rr, 0) + ' times the resistance of the movement, so almost the whole of the ' + fmt(Vfs.v, 1) + ' V falls across it and the movement itself keeps only ' + fmt(s * rr * 1e3, 2) + ' mV. Half the voltage sends half the current through and gives half a scale.';
    } else {
      const Rx = Ifs.v > s ? rr * s / (Ifs.v - s) : rr * 1e3;
      wires(ctx, [[L, Y], [420, Y]]); wires(ctx, [[980, Y], [R, Y]]);
      wires(ctx, [[420, Y], [420, Y - 110], [758, Y - 110]]); wires(ctx, [[902, Y - 110], [980, Y - 110], [980, Y]]);
      meter(ctx, 830, Y - 110, 'G', null, PAL.ink);
      text(ctx, 'r = ' + fmt(rr, 0) + ' Ω', 830, Y - 110 - 68, C('resistance'), { size: 21, align: 'center', bg: PAL.panel });
      wires(ctx, [[420, Y], [420, Y + 110], [420 + 216 - BOXW / 2, Y + 110]]);
      wires(ctx, [[636 + BOXW / 2, Y + 110], [980, Y + 110], [980, Y]]);
      resistor(ctx, 700, Y + 110, true, 'R', ohms(Rx));
      dot(ctx, L, Y, PAL.ink, true, 10); dot(ctx, R, Y, PAL.ink, true, 10);
      dot(ctx, 420, Y, PAL.ink, true, 7); dot(ctx, 980, Y, PAL.ink, true, 7);
      flow(ctx, 330, Y, 1, 0, 'I = ' + fmt(Ifs.v, 2) + ' A');
      text(ctx, 'the small shunt in parallel', 700, Y + 110 + 62, PAL.muted, { size: 19, align: 'center' });
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
    battery(ctx, L, 385, 'ℰ = ' + fmt(EMF, 1) + ' V');
    let head = '', main = '', small = '';
    if (isV) {
      const rd = Rd.v * 1e3, rv = Rv.v * 1e3;
      const Vtrue = EMF / 2, rp = rd * rv / (rd + rv), Vread = EMF * rp / (rd + rp);
      const err = 100 * (Vread - Vtrue) / Vtrue;
      resistor(ctx, 520, TOP, true, 'R', ohms(rd));
      resistor(ctx, 900, TOP, true, 'R', ohms(rd));
      text(ctx, 'two equal resistors share the source between them', 710, TOP - 86, PAL.muted, { size: 19, align: 'center' });
      wires(ctx, [[836, TOP], [836, 430]]); wires(ctx, [[964, TOP], [964, 430]]);
      wires(ctx, [[836, 430], [858, 430]]); wires(ctx, [[942, 430], [964, 430]]);
      dot(ctx, 836, TOP, PAL.ink, true, 7); dot(ctx, 964, TOP, PAL.ink, true, 7);
      meter(ctx, 900, 430, 'V', fmt(Vread, 3) + ' V', vc);
      text(ctx, 'the voltmeter, ' + ohms(rv), 900, 430 + 96, C('resistance'), { size: 20, align: 'center', bg: PAL.panel });
      text(ctx, 'without it the resistor has ' + fmt(Vtrue, 3) + ' V across it', 400, 470, vc, { size: 20, weight: 600, align: 'center' });
      head = 'The voltmeter is ' + fmt(rv / rd, 1) + ' times the resistance it is placed across, and it reads ' + fmt(Vread, 3) + ' V where the resistor alone would have ' + fmt(Vtrue, 3) + ' V, an error of ' + fmt(Math.abs(err), 2) + ' per cent.';
      main = '\\kResp = \\dfrac{\\kRes\\,R_{\\text{V}}}{\\kRes + R_{\\text{V}}} = ' + tohms(rp) + ', \\quad \\kV = \\kemf\\dfrac{\\kResp}{\\kRes + \\kResp} = ' + fmt(Vread, 3) + '\\ \\text{V}';
      small = 'A large resistance in parallel with a small one comes to very nearly the small one, so a voltmeter of a few orders of magnitude more resistance than the device hardly moves the reading. Bring it down to the resistance of the device itself and the pair comes to half of it, and the voltage the meter reports is far below the voltage it was meant to measure.';
    } else {
      const rb = Rb.v, ra = Ra.v, Itrue = EMF / rb, Iread = EMF / (rb + ra);
      const err = 100 * (Iread - Itrue) / Itrue;
      resistor(ctx, 520, TOP, true, 'R', ohms(rb));
      meter(ctx, 900, TOP, 'A', fmt(Iread, 3) + ' A', cc);
      text(ctx, 'the ammeter, ' + ohms(ra), 900, TOP - 86, C('resistance'), { size: 20, align: 'center', bg: PAL.panel });
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
