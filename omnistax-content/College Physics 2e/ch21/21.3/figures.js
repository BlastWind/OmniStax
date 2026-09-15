/* Figures for section 21.3 Kirchhoff's Rules.
   A steady circuit has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider or a choice
   alone redraws it. The page binds the current, the voltage and the resistance,
   which is what ch21/COLOR.md gives 21.3; the wires, the batteries, the resistor
   boxes, the letters a to h and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces every schematic here is drawn from ---------- */
/* A resistor, a plain box in ink, lying along the wire or standing across it;
   its name and its resistance are set beside it in the resistance hue. */
function resistor(ctx, x, y, horiz, name, ohms, opts) {
  const o = opts || {}, L = o.len || 124, T = 44;
  const w = horiz ? L : T, h = horiz ? T : L, rc = C('resistance');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
  const val = (ohms === null || ohms === undefined) ? null : fmt(ohms, ohms < 10 ? 2 : 1) + ' Ω';
  if (horiz) {
    if (name) text(ctx, name, x, y - h / 2 - 22, rc, { size: 24, weight: 600, align: 'center' });
    if (val) text(ctx, val, x, y + h / 2 + 22, rc, { size: 21, align: 'center' });
  } else {
    if (name) text(ctx, name, x - w / 2 - 14, y, rc, { size: 24, weight: 600, align: 'right' });
    if (val) text(ctx, val, x + w / 2 + 14, y, rc, { size: 21, align: 'left' });
  }
}
/* A cell standing across a vertical wire, its long plate the positive terminal.
   up = +1 puts that terminal uppermost. The emf is written beside it in the
   voltage hue and the two terminals are marked, since the sign rules read them. */
function cellV(ctx, x, y, volts, name, up) {
  const s = up >= 0 ? 1 : -1, rc = C('voltage');
  const rows = [[28, 5.5, 1], [15, 5.5, 0], [28, 5.5, 1], [15, 5.5, 0]];
  let yy = y - s * 33;
  rows.forEach(([half, w], i) => { line(ctx, x - half, yy, x + half, yy, PAL.ink, w); yy += s * (i % 2 === 0 ? 20 : 22); });
  line(ctx, x, y - s * 47, x, y - s * 33, PAL.ink, 3.5);
  line(ctx, x, y + s * 33, x, y + s * 47, PAL.ink, 3.5);
  text(ctx, '+', x + 44, y - s * 30, PAL.muted, { size: 24, weight: 600, align: 'left' });
  text(ctx, '−', x + 44, y + s * 30, PAL.muted, { size: 24, weight: 600, align: 'left' });
  const lab = (name ? name : '') + (volts === null || volts === undefined ? '' : (name ? ' = ' : '') + fmt(volts, 1) + ' V');
  if (lab) text(ctx, lab, x - 44, y, rc, { size: 23, weight: 600, align: 'right' });
}
/* The same cell lying along a horizontal wire; right = +1 puts the positive
   terminal on the right-hand side. */
function cellH(ctx, x, y, volts, name, right) {
  const s = right >= 0 ? 1 : -1, rc = C('voltage');
  const rows = [[28, 5.5], [15, 5.5], [28, 5.5], [15, 5.5]];
  let xx = x + s * 33;
  rows.forEach(([half, w], i) => { line(ctx, xx, y - half, xx, y + half, PAL.ink, w); xx -= s * (i % 2 === 0 ? 20 : 22); });
  text(ctx, '+', x + s * 52, y - 34, PAL.muted, { size: 24, weight: 600, align: 'center' });
  text(ctx, '−', x - s * 52, y - 34, PAL.muted, { size: 24, weight: 600, align: 'center' });
  const lab = (name ? name : '') + (volts === null || volts === undefined ? '' : (name ? ' = ' : '') + fmt(volts, 1) + ' V');
  if (lab) text(ctx, lab, x, y + 44, rc, { size: 23, weight: 600, align: 'center' });
}
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
/* An arrow set along a wire in the current hue, its width carrying the size of
   the current it stands for, with its name and value beside it. */
function flow(ctx, x, y, dx, dy, name, amps, opts) {
  const o = opts || {}, cc = C('current');
  const w = Math.max(3.5, Math.min(10, 3.5 + Math.abs(amps === undefined ? 4 : amps) * 0.45));
  const L = o.len || Math.max(62, w * 8);
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, cc, w);
  if (!name) return;
  const lab = amps === undefined ? name : name + ' = ' + mn(fmt(amps, 2)) + ' A';
  const side = o.side === undefined ? 1 : o.side;
  if (dy) text(ctx, lab, x + side * 30, y, cc, { size: 21, weight: 600, align: side > 0 ? 'left' : 'right', bg: PAL.panel });
  else text(ctx, lab, x, y - side * 30, cc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
}
/* The assumed direction of a branch current, drawn faintly behind the real one
   where the two disagree, so a negative current is seen as well as read. */
function assumed(ctx, x, y, dx, dy) {
  const cc = alpha(C('current'), 0.45), L = 62, ox = -dy * 26, oy = dx * 26;
  const x0 = x + ox, y0 = y + oy;
  ctx.save(); ctx.setLineDash([8, 7]);
  line(ctx, x0 - dx * L / 2, y0 - dy * L / 2, x0 + dx * L / 2, y0 + dy * L / 2, cc, 3);
  ctx.restore();
  arrow(ctx, x0 + dx * L / 5, y0 + dy * L / 5, x0 + dx * L / 2, y0 + dy * L / 2, cc, 3);
  text(ctx, 'assumed', x0 + (dy ? 26 : 0), y0 + (dy ? 0 : 22), cc, { size: 17, align: dy ? 'left' : 'center' });
}
const node = (ctx, x, y, s) => { dot(ctx, x, y, PAL.ink, true, 8); if (s) text(ctx, s, x, y - 26, PAL.muted, { size: 20, weight: 600, align: 'center', bg: PAL.panel }); };
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';
const amp = (i) => fmt(i, 2) + '\\ \\text{A}';
/* A number set on the canvas takes the true minus sign, as the book prints it. */
const mn = (s) => s.replace('-', '\u2212');
const volt = (v) => fmt(v, 1) + '\\ \\text{V}';

/* =====================================================================
   FIGURE 21.22: the junction rule. Two currents leave a junction and the
   third has to arrive. Still: nothing here has a clock.
===================================================================== */
(function () {
  const d = sim('sim-junction-rule', 470);
  const I2 = ctl(d.controls, { label: '\\kIcurtwo', cls: 'current', min: 0, max: 15, step: 0.5, value: 7, unit: 'A', dec: 1, aria: 'the current in the first branch that leaves the junction' });
  const I3 = ctl(d.controls, { label: '\\kIcurthree', cls: 'current', min: 0, max: 15, step: 0.5, value: 4, unit: 'A', dec: 1, aria: 'the current in the second branch that leaves the junction' });
  function draw() {
    const { ctx } = begin(d.c);
    const i1 = I2.v + I3.v;
    headline(ctx, 'Currents of ' + fmt(I2.v, 1) + ' A and ' + fmt(I3.v, 1) + ' A leave the junction, so a current of ' + fmt(i1, 1) + ' A must arrive at it.');
    wires(ctx, [[140, 250], [700, 250]]);
    wires(ctx, [[700, 250], [700, 130], [1250, 130]]);
    wires(ctx, [[700, 250], [700, 370], [1250, 370]]);
    node(ctx, 700, 250, null);
    flow(ctx, 360, 250, 1, 0, 'I_1', i1, { side: 1 });
    flow(ctx, 1020, 130, 1, 0, 'I_2', I2.v, { side: 1 });
    flow(ctx, 1020, 370, 1, 0, 'I_3', I3.v, { side: -1 });
    text(ctx, 'the junction', 700, 300, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'Charge cannot collect at a junction, so the arrow that arrives is as wide as the two that leave together.', 700, 430, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout,
      '\\kIcurone = \\kIcurtwo + \\kIcurthree = ' + amp(I2.v) + ' + ' + amp(I3.v) + ' = ' + amp(i1),
      'The width of each arrow is drawn from its own current, so the one that arrives is always as wide as the two that leave put together.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.23: the loop rule. The book draws the schematic and, beside it, the
   potential as a hill; here the hill is a graph of the potential against the
   walk round the loop. Still.
===================================================================== */
(function () {
  const d = sim('sim-loop-rule', 780);
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 4, max: 30, step: 0.5, value: 18, unit: 'V', dec: 1, aria: 'the emf of the source' });
  const r = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0.5, max: 10, step: 0.5, value: 1, unit: 'Ω', dec: 2, aria: 'the internal resistance of the source' });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0.5, max: 25, step: 0.5, value: 12, unit: 'Ω', dec: 2, aria: 'the first load resistance' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 0.5, max: 25, step: 0.5, value: 5, unit: 'Ω', dec: 2, aria: 'the second load resistance' });
  const way = choice(d.controls, {
    label: '\\text{the walk}',
    options: [{ value: 'cw', label: 'with the current' }, { value: 'ccw', label: 'against the current' }],
    value: 'cw', aria: 'the direction the loop is walked',
  });
  /* the potential runs from zero to the largest emf the slider reaches */
  const YMAX = 30;
  function draw() {
    const { ctx } = begin(d.c);
    const cw = way.value === 'cw';
    const I = E.v / (r.v + R1.v + R2.v), dr = I * r.v, d1 = I * R1.v, d2 = I * R2.v;
    headline(ctx, 'The source drives a current of ' + fmt(I, 2) + ' A, and the ' + fmt(dr, 1) + ' V, ' + fmt(d1, 1) + ' V and ' + fmt(d2, 1) + ' V dropped across the three resistances come to the ' + fmt(E.v, 1) + ' V the emf supplies.');
    /* the circuit: the source on the left-hand wire, the two loads along the top */
    wires(ctx, [[210, 150], [1230, 150], [1230, 360], [210, 360], [210, 150]]);
    cellV(ctx, 210, 255, E.v, null, 1);
    resistor(ctx, 420, 150, true, 'r', r.v, { len: 108 });
    resistor(ctx, 760, 150, true, 'R_1', R1.v);
    resistor(ctx, 1080, 150, true, 'R_2', R2.v);
    ctx.save(); ctx.setLineDash([9, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.roundRect(150, 92, 350, 226, 12); ctx.stroke(); ctx.restore();
    text(ctx, 'the source', 325, 340, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 600, 150, 1, 0, 'I', I, { side: 1 });
    flow(ctx, 720, 360, -1, 0, null, I);
    const wc = cw ? 1 : -1;
    arrow(ctx, 900 - wc * 90, 258, 900 + wc * 90, 258, PAL.muted, 4);
    text(ctx, cw ? 'the loop is walked with the current' : 'the loop is walked against the current', 900, 222, PAL.muted, { size: 19, align: 'center' });
    /* the graph: the potential against the walk, one station per element passed */
    const box = { l: 210, r: 1250, t: 490, b: 700 };
    const steps = cw ? [E.v, -dr, -d1, -d2] : [d2, d1, dr, -E.v];
    const names = cw ? ['the emf', 'r', 'R₁', 'R₂'] : ['R₂', 'R₁', 'r', 'the emf'];
    const cols = cw ? [C('voltage'), C('resistance'), C('resistance'), C('resistance')] : [C('resistance'), C('resistance'), C('resistance'), C('voltage')];
    const { X, Y } = axes(ctx, box, [0, 4], [0, YMAX], {
      xl: 'the walk round the loop, one step per element passed', yl: 'potential (V)', yc: C('voltage'),
      nx: 4, ny: 3, fx: (v) => (v === 0 ? 'start' : v === 4 ? 'back at the start' : ''),
    });
    let v = 0;
    for (let i = 0; i < 4; i++) {
      const next = v + steps[i];
      line(ctx, X(i), Y(v), X(i + 1), Y(v), C('voltage'), 5);
      line(ctx, X(i + 1), Y(v), X(i + 1), Y(next), cols[i], 5);
      const sign = steps[i] >= 0 ? '+' : '−';
      text(ctx, names[i] + ': ' + sign + fmt(Math.abs(steps[i]), 1) + ' V', (X(i) + X(i + 1)) / 2, Y(Math.max(v, next)) - 24, cols[i], { size: 19, weight: 600, align: 'center', bg: PAL.panel });
      dot(ctx, X(i + 1), Y(next), cols[i], true, 8);
      v = next;
    }
    dot(ctx, X(0), Y(0), C('voltage'), false, 9);
    readout(d.readout,
      cw
        ? '\\kemf - \\kIcur\\krint - \\kIcur\\kResone - \\kIcur\\kRestwo = ' + volt(E.v) + ' - ' + volt(dr) + ' - ' + volt(d1) + ' - ' + volt(d2) + ' = 0'
        : '+\\kIcur\\kRestwo + \\kIcur\\kResone + \\kIcur\\krint - \\kemf = ' + volt(d2) + ' + ' + volt(d1) + ' + ' + volt(dr) + ' - ' + volt(E.v) + ' = 0',
      'Walking the loop the other way reverses the sign of every term, which is the same as multiplying the whole equation by −1, and the potential still comes back to where it began.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.24: the four sign cases. The four panels are kept side by side,
   since the lesson is the comparison between them, and the chosen one is
   picked out and given live numbers. Still.
===================================================================== */
(function () {
  const d = sim('sim-sign-rules', 560);
  const I = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0.1, max: 6, step: 0.1, value: 1, unit: 'A', dec: 2, aria: 'the current in the element' });
  const R = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 25, step: 0.5, value: 12, unit: 'Ω', dec: 1, aria: 'the resistance being traversed' });
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 30, step: 0.5, value: 18, unit: 'V', dec: 1, aria: 'the emf being traversed' });
  const pick = choice(d.controls, {
    label: '\\text{the case}',
    options: [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }, { value: '4', label: '4' }],
    value: '1', aria: 'which of the four cases is picked out',
  });
  const CX = [190, 530, 870, 1210];
  function draw() {
    const { ctx } = begin(d.c);
    const drop = I.v * R.v;
    const cases = [
      { kind: 'R', cur: 1, dv: -drop, title: 'a resistor, traversed with the current', term: '−IR' },
      { kind: 'R', cur: -1, dv: drop, title: 'a resistor, traversed against the current', term: '+IR' },
      { kind: 'E', pos: 1, dv: E.v, title: 'an emf, traversed from − to +', term: '+emf' },
      { kind: 'E', pos: -1, dv: -E.v, title: 'an emf, traversed from + to −', term: '−emf' },
    ];
    const k = parseInt(pick.value, 10) - 1, c = cases[k];
    headline(ctx, 'Case ' + (k + 1) + ' is ' + c.title + ', and going from a to b the potential changes by ' + (c.dv >= 0 ? '+' : '−') + fmt(Math.abs(c.dv), 1) + ' V.');
    cases.forEach((cs, i) => {
      const cx = CX[i], on = i === k;
      if (on) {
        ctx.save(); ctx.fillStyle = alpha(C('voltage'), 0.12); ctx.strokeStyle = alpha(C('voltage'), 0.5);
        ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.roundRect(cx - 165, 120, 330, 380, 14); ctx.fill(); ctx.stroke(); ctx.restore();
      }
      text(ctx, 'case ' + (i + 1), cx, 152, on ? PAL.ink : PAL.muted, { size: 21, weight: 600, align: 'center' });
      arrow(ctx, cx - 120, 200, cx + 120, 200, PAL.muted, 4);
      text(ctx, 'a to b', cx, 176, PAL.muted, { size: 18, align: 'center' });
      wires(ctx, [[cx - 140, 300], [cx + 140, 300]]);
      node(ctx, cx - 140, 300, 'a'); node(ctx, cx + 140, 300, 'b');
      if (cs.kind === 'R') {
        resistor(ctx, cx, 300, true, 'R = ' + fmt(R.v, 1) + ' Ω', null, { len: 108 });
        flow(ctx, cx + (cs.cur > 0 ? 102 : -102), 300, cs.cur, 0, null, I.v, { len: 44 });
        text(ctx, 'I = ' + fmt(I.v, 2) + ' A', cx, 348, C('current'), { size: 21, weight: 600, align: 'center' });
      } else cellH(ctx, cx, 300, E.v, null, cs.pos);
      const col = cs.kind === 'R' ? C('resistance') : C('voltage');
      text(ctx, cs.term, cx, 408, col, { size: 23, weight: 600, align: 'center' });
      text(ctx, (cs.dv >= 0 ? '+' : '−') + fmt(Math.abs(cs.dv), 1) + ' V', cx, 444, on ? col : PAL.muted, { size: 21, align: 'center' });
    });
    text(ctx, 'Each element is traversed from a to b, and the change in potential is written beneath it.', 700, 528, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout,
      c.kind === 'R'
        ? (c.cur > 0 ? '\\Delta \\kV = -\\kIcur\\kRes = -(' + amp(I.v) + ')(' + ohm(R.v) + ') = ' + volt(c.dv) : '\\Delta \\kV = +\\kIcur\\kRes = +(' + amp(I.v) + ')(' + ohm(R.v) + ') = ' + volt(c.dv))
        : (c.pos > 0 ? '\\Delta \\kV = +\\kemf = ' + volt(c.dv) : '\\Delta \\kV = -\\kemf = ' + volt(c.dv)),
      'A resistor traversed the way its current runs takes the potential down, and one traversed the other way brings it up; a source brings the potential up when it is entered at its negative terminal and takes it down when it is entered at its positive one.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 21.21 + 21.25 folded: the two-loop circuit that no series and
   parallel reduction reaches, drawn without numbers in the book and again
   with them in the worked example. Still.
===================================================================== */
(function () {
  const d = sim('sim-two-loop-circuit', 720);
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 0, max: 40, step: 0.5, value: 18, unit: 'V', dec: 1, aria: 'the emf of the first source' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 0, max: 60, step: 0.5, value: 45, unit: 'V', dec: 1, aria: 'the emf of the second source' });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 2, aria: 'the resistance of the middle branch' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 2, unit: 'Ω', dec: 2, aria: 'the load resistance of the first source' });
  const r1 = 1.00, r2 = 1.00, R3 = 1.00;          /* the book's values, held so that four sliders carry the figure */
  function draw() {
    const { ctx } = begin(d.c);
    const A = R2.v + r1, B = R3 + r2;
    const i1 = (E1.v / A + E2.v / B) / (1 + R1.v / A + R1.v / B);
    const i2 = (E1.v - i1 * R1.v) / A, i3 = (E2.v - i1 * R1.v) / B;
    const back = [i1 < 0 ? 'I₁' : null, i2 < 0 ? 'I₂' : null, i3 < 0 ? 'I₃' : null].filter(Boolean);
    headline(ctx, 'The two rules give ' + 'I₁ = ' + mn(fmt(i1, 2)) + ' A, I₂ = ' + mn(fmt(i2, 2)) + ' A and I₃ = ' + mn(fmt(i3, 2)) + ' A'
      + (back.length ? ', and ' + back.join(' and ') + (back.length > 1 ? ' are negative, so they run' : ' is negative, so it runs') + ' against the direction assumed for ' + (back.length > 1 ? 'them' : 'it') + '.'
        : ', every one of them positive, so every current runs the way it was assumed to.'));
    /* the frame: three branches between the top junction a and the bottom junction e */
    wires(ctx, [[300, 130], [1100, 130]]);
    wires(ctx, [[300, 610], [1100, 610]]);
    wires(ctx, [[300, 130], [300, 610]]);
    wires(ctx, [[700, 130], [700, 610]]);
    wires(ctx, [[1100, 130], [1100, 610]]);
    /* the left branch: R_2, then the first source, walked a to b to c to d */
    resistor(ctx, 300, 205, false, 'R_2', R2.v);
    cellV(ctx, 300, 350, E1.v, 'ℰ₁', 1);
    resistor(ctx, 300, 490, false, 'r_1', r1);
    /* the middle branch: R_1 alone */
    resistor(ctx, 700, 370, false, 'R_1', R1.v);
    /* the right branch: the second source, then r_2 and R_3, walked e to f to g to h */
    cellV(ctx, 1100, 215, E2.v, 'ℰ₂', 1);
    resistor(ctx, 1100, 360, false, 'r_2', r2);
    resistor(ctx, 1100, 505, false, 'R_3', R3);
    node(ctx, 700, 130, 'a'); node(ctx, 700, 610, 'e');
    [[300, 275, 'b'], [300, 425, 'c'], [300, 565, 'd']].forEach(([x, y, s]) => { dot(ctx, x, y, PAL.ink, true, 7); text(ctx, s, x - 26, y, PAL.muted, { size: 20, weight: 600, align: 'right', bg: PAL.panel }); });
    [[1100, 570, 'f'], [1100, 285, 'g'], [1100, 160, 'h']].forEach(([x, y, s]) => { dot(ctx, x, y, PAL.ink, true, 7); text(ctx, s, x + 26, y, PAL.muted, { size: 20, weight: 600, align: 'left', bg: PAL.panel }); });
    /* each branch current: the real direction solid, the assumed one faint behind it where they differ */
    const branch = (x, y, dx, dy, val, name, side) => {
      const s = val < 0 ? -1 : 1;
      if (s < 0) assumed(ctx, x, y, dx, dy);
      flow(ctx, x, y, dx * s, dy * s, name, val, { side });
    };
    branch(700, 230, 0, -1, i1, 'I_1', 1);
    branch(460, 610, 1, 0, i2, 'I_2', 1);
    branch(950, 610, -1, 0, i3, 'I_3', 1);
    text(ctx, 'No combination of series and parallel reductions reaches this circuit, so the two rules are used on it instead.', 700, 680, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout,
      '\\kIcurone = \\kIcurtwo + \\kIcurthree = ' + amp(i2) + ' + ' + amp(i3) + ' = ' + amp(i1),
      'The loop abcdea gives −I₂(R₂ + r₁) + ℰ₁ − I₁R₁ = 0 and the loop aefgha gives +I₁R₁ + I₃(R₃ + r₂) − ℰ₂ = 0, and those two with the junction rule are the three independent equations the three unknown currents need.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
