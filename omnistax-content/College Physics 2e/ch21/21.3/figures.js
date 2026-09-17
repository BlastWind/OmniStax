/* Figures for section 21.3 Kirchhoff's Rules.
   A steady circuit has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider or a choice
   alone redraws it. The page binds the current, the voltage and the resistance,
   which is what ch21/COLOR.md gives 21.3; the wires, the cells, the zigzags, the
   letters a to h and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const ohms = (r) => fmt(r, r < 10 ? 2 : 1) + ' Ω';
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';
const amp = (i) => fmt(i, 2) + '\\ \\text{A}';
/* A number set on the canvas takes the true minus sign, as the book prints it. */
const mn = (s) => s.replace('-', '−');
const volt = (v) => fmt(v, 1) + '\\ \\text{V}';

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
/* The width of a current arrow follows the size of its current, so the reader sees
   the junction rule's sum rather than reading it off two numbers. */
const widthOf = (amps) => Math.max(3.5, Math.min(10, 3.5 + Math.abs(amps) * 0.45));
/* A branch current: the arrow drawn the way the current really runs, its name and
   value beside it; where the real direction disagrees with the direction assumed,
   the assumed arrow is drawn faintly on the far side of the wire and named. */
function branch(ctx, x, y, dx, dy, val, name, side) {
  const s = val < 0 ? -1 : 1, cc = C('current');
  flow(ctx, x, y, dx * s, dy * s, name + ' = ' + mn(fmt(val, 2)) + ' A', { side: side * s, w: widthOf(val), len: 64 });
  if (s > 0) return;
  const nx = dy * side, ny = -dx * side, ax = x + nx * 26, ay = y + ny * 26, L = 62;   /* the far side of the wire */
  ctx.save(); ctx.setLineDash([8, 7]);
  line(ctx, ax - dx * L / 2, ay - dy * L / 2, ax + dx * L / 2, ay + dy * L / 2, alpha(cc, 0.45), 3);
  ctx.restore();
  arrow(ctx, ax + dx * L / 5, ay + dy * L / 5, ax + dx * L / 2, ay + dy * L / 2, alpha(cc, 0.45), 3);
  text(ctx, 'assumed', ax + nx * 22, ay + ny * 22, alpha(cc, 0.6), { size: 17, align: dy ? (nx > 0 ? 'left' : 'right') : 'center' });
}
/* A junction with its letter set beside it, off every wire that meets there. */
const lettered = (ctx, x, y, s, dx, dy) => { node(ctx, x, y, 8); if (s) text(ctx, s, x + dx, y + dy, PAL.muted, { size: 20, weight: 600, align: dx < 0 ? 'right' : dx > 0 ? 'left' : 'center' }); };

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
    node(ctx, 700, 250, 8);
    const arrowOf = (x, y, name, amps, side) => flow(ctx, x, y, 1, 0, name + ' = ' + fmt(amps, 2) + ' A', { side, w: widthOf(amps), len: Math.max(64, widthOf(amps) * 8) });
    arrowOf(380, 250, 'I_1', i1, -1);
    arrowOf(1000, 130, 'I_2', I2.v, 1);
    arrowOf(1000, 370, 'I_3', I3.v, -1);
    text(ctx, 'the junction', 676, 292, PAL.muted, { size: 19, align: 'right' });
    text(ctx, 'Charge cannot collect at a junction, so the arrow that arrives is as wide as the two that leave together.', 700, 432, PAL.muted, { size: 19, align: 'center' });
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
  const d = sim('sim-loop-rule', 820);
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
  const YMAX = 30, T = 190, B = 400;
  function draw() {
    const { ctx } = begin(d.c);
    const cw = way.value === 'cw';
    const I = E.v / (r.v + R1.v + R2.v), dr = I * r.v, d1 = I * R1.v, d2 = I * R2.v;
    headline(ctx, 'The source drives a current of ' + fmt(I, 2) + ' A, and the ' + fmt(dr, 1) + ' V, ' + fmt(d1, 1) + ' V and ' + fmt(d2, 1) + ' V dropped across the three resistances come to the ' + fmt(E.v, 1) + ' V the emf supplies.');
    /* the circuit: the source on the left-hand wire, the two loads along the top */
    ctx.save(); ctx.setLineDash([9, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.roundRect(80, 132, 420, 232, 12); ctx.stroke(); ctx.restore();
    text(ctx, 'the source', 300, 344, PAL.muted, { size: 19, align: 'center' });
    wires(ctx, [[210, T], [1230, T], [1230, B], [210, B], [210, T]]);
    cell(ctx, 210, 295, 'up', fmt(E.v, 1) + ' V');
    resistor(ctx, 420, T, true, 'r', r.v, { len: 84 });
    resistor(ctx, 760, T, true, 'R_1', R1.v);
    resistor(ctx, 1080, T, true, 'R_2', R2.v);
    flow(ctx, 600, T, 1, 0, 'I = ' + fmt(I, 2) + ' A');
    flow(ctx, 720, B, -1, 0, null);
    const wc = cw ? 1 : -1;
    arrow(ctx, 900 - wc * 90, 312, 900 + wc * 90, 312, PAL.muted, 4);
    text(ctx, cw ? 'the loop is walked with the current' : 'the loop is walked against the current', 900, 278, PAL.muted, { size: 19, align: 'center' });
    /* the graph: the potential against the walk, one station per element passed */
    const box = { l: 210, r: 1250, t: 530, b: 740 };
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
      /* the step's name sits over its plateau, and drops under it where the plateau runs at the top of the box */
      const yl = Y(Math.max(v, next)), ly = yl - 24 < box.t + 14 ? yl + 26 : yl - 24;
      text(ctx, names[i] + ': ' + sign + fmt(Math.abs(steps[i]), 1) + ' V', (X(i) + X(i + 1)) / 2, ly, cols[i], { size: 19, weight: 600, align: 'center', bg: PAL.panel });
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
      lettered(ctx, cx - 140, 300, 'a', 0, -28); lettered(ctx, cx + 140, 300, 'b', 0, -28);
      if (cs.kind === 'R') {
        resistor(ctx, cx, 300, true, 'R = ' + fmt(R.v, 1) + ' Ω', null, { len: 108 });
        flow(ctx, cx, 300, cs.cur, 0, 'I = ' + fmt(I.v, 2) + ' A', { len: 60, side: cs.cur, off: 30 });
      } else cell(ctx, cx, 300, cs.pos > 0 ? 'right' : 'left', fmt(E.v, 1) + ' V', { side: -1 });
      const col = cs.kind === 'R' ? C('resistance') : C('voltage');
      text(ctx, cs.term, cx, 418, col, { size: 23, weight: 600, align: 'center' });
      text(ctx, (cs.dv >= 0 ? '+' : '−') + fmt(Math.abs(cs.dv), 1) + ' V', cx, 452, on ? col : PAL.muted, { size: 21, align: 'center' });
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
    cell(ctx, 300, 350, 'up', 'ℰ₁ = ' + fmt(E1.v, 1) + ' V');
    resistor(ctx, 300, 490, false, 'r_1', r1);
    /* the middle branch: R_1 alone */
    resistor(ctx, 700, 370, false, 'R_1', R1.v);
    /* the right branch: the second source, then r_2 and R_3, walked e to f to g to h */
    cell(ctx, 1100, 215, 'up', 'ℰ₂ = ' + fmt(E2.v, 1) + ' V', { side: 1 });
    resistor(ctx, 1100, 360, false, 'r_2', r2, { side: 1 });
    resistor(ctx, 1100, 505, false, 'R_3', R3, { side: 1 });
    lettered(ctx, 700, 130, 'a', 24, -22); lettered(ctx, 700, 610, 'e', 24, 24);
    [[300, 275, 'b'], [300, 425, 'c'], [300, 565, 'd']].forEach(([x, y, s]) => lettered(ctx, x, y, s, -26, 0));
    [[1100, 570, 'f'], [1100, 285, 'g'], [1100, 160, 'h']].forEach(([x, y, s]) => lettered(ctx, x, y, s, 26, 0));
    /* each branch current: the real direction solid, the assumed one faint on the far side where they differ */
    branch(ctx, 700, 230, 0, -1, i1, 'I_1', 1);
    branch(ctx, 480, 610, 1, 0, i2, 'I_2', -1);
    branch(ctx, 920, 610, -1, 0, i3, 'I_3', 1);
    text(ctx, 'No combination of series and parallel reductions reaches this circuit, so the two rules are used on it instead.', 700, 686, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout,
      '\\kIcurone = \\kIcurtwo + \\kIcurthree = ' + amp(i2) + ' + ' + amp(i3) + ' = ' + amp(i1),
      'The loop abcdea gives −I₂(R₂ + r₁) + ℰ₁ − I₁R₁ = 0 and the loop aefgha gives +I₁R₁ + I₃(R₃ + r₂) − ℰ₂ = 0, and those two with the junction rule are the three independent equations the three unknown currents need.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
