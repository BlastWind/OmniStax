/* Figures for section 21.2 Electromotive Force: Terminal Voltage.
   A connection of sources that is only being looked at has no time in it, so
   every figure here is a still picture: none registers a cycle, none carries a
   transport, and a slider or a choice alone redraws it. The page binds the
   voltage, the resistance, the current and the power, which is what
   ch21/COLOR.md gives 21.2. The referents the text names wear their referent
   colours: the anode and the cathode, the two sources (the two cells, or the
   charger and the battery on charge) and the load each source drives. The wires
   and the frame are ink, and the lone electrons of Figure 21.11 wear the
   element palette. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const ohms = (r) => fmt(r, r < 10 ? 3 : 1) + ' Ω';
const ohm = (r) => fmt(r, r < 10 ? 3 : 1) + '\\ \\Omega';
const volt = (v) => fmt(v, 2) + '\\ \\text{V}';

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
   length, o.variable strikes the arrow of a variable resistor across it, and o.color
   is the referent colour of the thing it belongs to. */
function zigzag(ctx, x, y, a, o) {
  const L = (o && o.len) || ZL, n = 6, s = L / n;
  gap(ctx, x, y, a, L, 6);
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  ctx.strokeStyle = (o && o.color) || PAL.ink; ctx.lineWidth = WIRE; ctx.lineJoin = 'miter'; ctx.lineCap = 'round';
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
   hue on the side o.side (-1 is left, or above) and the two signs on the other; the
   plates take o.color, the referent colour of the source they belong to. */
function cell(ctx, x, y, plus, label, o) {
  o = o || {}; const pc = o.color || PAL.ink, vc = C('voltage'), vert = plus === 'up' || plus === 'down', s = plus === 'up' || plus === 'left' ? -1 : 1;
  const side = o.side === undefined ? (vert ? -1 : 1) : o.side, q = -side;   /* the signs go opposite the label */
  const lab = label === null || label === undefined ? [] : Array.isArray(label) ? label : [label];
  if (vert) {
    gap(ctx, x, y, Math.PI / 2, 20, 8);
    line(ctx, x - 30, y + s * 10, x + 30, y + s * 10, pc, 4.5);       /* the long positive plate */
    line(ctx, x - 15, y - s * 10, x + 15, y - s * 10, pc, 8);          /* the short negative one */
    if (o.signs !== false) {
      text(ctx, '+', x + q * 48, y + s * 15, PAL.muted, { size: 22, weight: 600, align: 'center' });
      text(ctx, '−', x + q * 48, y - s * 15, PAL.muted, { size: 22, weight: 600, align: 'center' });
    }
    const lx = x + side * 46, al = side < 0 ? 'right' : 'left';
    if (lab.length === 2) { text(ctx, lab[0], lx, y - 13, vc, { size: 23, weight: 600, align: al }); text(ctx, lab[1], lx, y + 15, vc, { size: 20, align: al }); }
    else if (lab.length === 1) text(ctx, lab[0], lx, y, vc, { size: 23, weight: 600, align: al });
  } else {
    if (o.plates !== false) {                                  /* a cell turning round draws its plates itself */
      gap(ctx, x, y, 0, 20, 8);
      line(ctx, x + s * 10, y - 30, x + s * 10, y + 30, pc, 4.5);
      line(ctx, x - s * 10, y - 15, x - s * 10, y + 15, pc, 8);
    }
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
/* The dashed panel that marks off what is inside the source's case. */
function enclosure(ctx, l, t, r, b, caption) {
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]);
  ctx.beginPath(); ctx.roundRect(l, t, r - l, b - t, 14); ctx.stroke(); ctx.restore();
  if (caption) text(ctx, caption, (l + r) / 2, t - 20, PAL.muted, { size: 19, align: 'center' });
}
/* A meter on two leads, with what it reads beside it. */
function meter(ctx, x, y, letter, reading, color) {
  meterFace(ctx, x, y, letter, 44);
  if (reading) text(ctx, reading, x + 60, y, color || C('voltage'), { size: 22, weight: 600, align: 'left' });
}
/* A lamp on a vertical wire: the book's circle with a coiled filament, its glow set
   by how much of its brightest power it gives out, in the power hue, and its glass
   and filament in `color`, the referent colour of the bulb. */
function bulb(ctx, x, y, frac, color) {
  if (frac > 0) {
    const g = ctx.createRadialGradient(x, y, 36, x, y, 100);
    g.addColorStop(0, alpha(C('power'), 0.42 * frac)); g.addColorStop(1, alpha(C('power'), 0));
    ctx.save(); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 100, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
  }
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color || PAL.ink; ctx.lineWidth = WIRE;
  ctx.beginPath(); ctx.arc(x, y, 40, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 28, y + 4); ctx.lineTo(x - 22, y + 4);
  for (let k = 0; k < 4; k++) ctx.arc(x - 16 + k * 11, y + 4, 5.5, Math.PI, 0, false);
  ctx.lineTo(x + 28, y + 4); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 21.9: the two parts of any voltage source, with a meter across the
   output terminals. Still: a cell that is only being read has no clock in it,
   and the reader is choosing an emf, an internal resistance and a current.
===================================================================== */
(function () {
  const d = sim('sim-source-parts', 560);
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: '电源的电动势' });
  const R = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0, max: 2, step: 0.02, value: 0.1, unit: 'Ω', dec: 3, aria: '电源的内阻' });
  const I = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 20, step: 0.25, value: 0, unit: 'A', dec: 2, aria: '电源输出的电流' });
  function draw() {
    const { ctx } = begin(d.c);
    /* The cell cannot be asked for more than it can drive: with its terminals joined
       the current is emf / r, and beyond that the slider is held there and the
       headline says so, rather than drawing a terminal voltage below zero. */
    const e = E.v, r = R.v, imax = r > 0 ? e / r : Infinity, i = Math.min(I.v, imax), V = e - i * r;
    const held = I.v > imax + 1e-9;
    headline(ctx, held
      ? '这节电池无法输出 ' + fmt(I.v, 2) + ' A。它最多只能驱动 ' + fmt(imax, 2) + ' A，此时它的接线端相连，两端不剩任何电压。'
      : i === 0
        ? '没有取用电流时，接在接线端之间的电表读数为 ' + fmt(V, 2) + ' V，恰好等于电池的电动势。'
        : '输出 ' + fmt(i, 2) + ' A 时，电池的接线端之间保持 ' + fmt(V, 2) + ' V，比它的电动势低 ' + fmt(e - V, 2) + ' V。');
    enclosure(ctx, 150, 150, 1000, 470, '电池壳内');
    wires(ctx, [[320, 210], [1090, 210]]);
    wires(ctx, [[320, 410], [1090, 410]]);
    wires(ctx, [[320, 210], [320, 410]]);
    cell(ctx, 320, 310, 'up', ['电动势', fmt(e, 2) + ' V']);
    resistor(ctx, 660, 210, true, 'r', r);
    text(ctx, '电能的来源', 320, 506, PAL.muted, { size: 19, align: 'center' });
    text(ctx, '电池自身的电阻', 660, 286, PAL.muted, { size: 19, align: 'center' });
    node(ctx, 1090, 210, 8); node(ctx, 1090, 410, 8);
    text(ctx, '输出端', 1090, 506, PAL.muted, { size: 19, align: 'center' });
    if (i > 0) flow(ctx, 900, 210, 1, 0, 'I = ' + fmt(i, 2) + ' A');
    else text(ctx, '没有取用电流', 850, 186, C('current'), { size: 20, weight: 600, align: 'center' });
    wires(ctx, [[1090, 210], [1230, 210], [1230, 410], [1090, 410]]);
    meter(ctx, 1230, 310, 'V', fmt(V, 2) + ' V', C('voltage'));
    readout(d.readout,
      '\\kV = \\kemf - \\kIcur\\krint = ' + volt(e) + ' - (' + fmt(i, 2) + '\\ \\text{A})(' + ohm(r) + ') = ' + volt(V),
      held
        ? '电动势的每一伏此时都耗在了电池内部。'
        : i === 0
        ? '没有电流，内阻上就没有电压降。'
        : '内阻中损失的电压永远到不了接线端。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.10: a lead-acid cell, copied faithfully. No control and no
   motion: it is a drawing of what is inside one cell, and there is nothing in
   it to vary and no depth to turn (root rule 24.3). Nothing in it carries a
   type, so the whole figure is ink (root rule 7).
===================================================================== */
(function () {
  const d = sim('fig-lead-acid-cell', 560);
  function draw() {
    const { ctx } = begin(d.c);
    headline(ctx, '铅酸蓄电池的单格电池：一块铅板和一块氧化铅板立在硫酸中，各自向上引到液面上方的一个接线端。');
    const L = 420, R = 980, T = 250, B = 500, LEVEL = 300;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.beginPath();
    ctx.moveTo(L, T); ctx.lineTo(L, B - 24); ctx.quadraticCurveTo(L, B, L + 24, B);
    ctx.lineTo(R - 24, B); ctx.quadraticCurveTo(R, B, R, B - 24); ctx.lineTo(R, T);
    ctx.fill(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.16); ctx.fillRect(L + 4, LEVEL, R - L - 8, B - LEVEL - 4); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineJoin = 'round'; ctx.beginPath();
    ctx.moveTo(L, T); ctx.lineTo(L, B - 24); ctx.quadraticCurveTo(L, B, L + 24, B);
    ctx.lineTo(R - 24, B); ctx.quadraticCurveTo(R, B, R, B - 24); ctx.lineTo(R, T);
    ctx.stroke(); ctx.restore();
    line(ctx, L + 6, LEVEL, R - 6, LEVEL, alpha(PAL.ink, 0.55), 2.5);
    /* the two plates, each a slab standing in the acid and reaching above it to a terminal */
    [[560, '铅板', 'anode', '−'], [840, '氧化铅板', 'cathode', '+']].forEach(([x, what, pole, sign]) => {
      const pc = F.ref(pole);
      ctx.save(); ctx.fillStyle = alpha(pc, 0.40); ctx.strokeStyle = pc; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x - 22, 210, 44, B - 240, 5); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.roundRect(x - 34, 174, 68, 40, 6); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, sign, x, 194, PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, pole === 'anode' ? '阳极' : '阴极', x + 54, 194, pc, { size: 23, weight: 600, align: 'left' });
      text(ctx, what, x, B + 40, pc, { size: 19, align: 'center' });
    });
    text(ctx, '硫酸', 700, 340, PAL.muted, { size: 20, align: 'center' });
    readout(d.readout, '\\kV \\approx 2\\ \\text{V/单格电池}',
      '六个这样的单格电池串联起来，就构成汽车的十二伏电池。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.11: one chemical reaction, drawn close up. A faithful copy: its
   arrows are the mechanism the book has already drawn, which root rule 24.9
   keeps out of a simulation. The lone electrons are the element palette's,
   which every atom, ion and particle with an identity wears.
===================================================================== */
(function () {
  const d = sim('fig-charge-separation', 600);
  function draw() {
    const { ctx } = begin(d.c);
    headline(ctx, '电池中的一次反应在阳极上放入两个电子，并从阴极取走两个电子，于是电荷被分离，两个接线端处于不同的电势。');
    const T = 250, B = 470, EL = 330, ER = 1070, e = F.el('e-');
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.fillRect(EL, T, ER - EL, B - T); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.strokeRect(EL, T, ER - EL, B - T); ctx.restore();
    text(ctx, '电解质，反应在其中进行', (EL + ER) / 2, B + 42, PAL.muted, { size: 19, align: 'center' });
    [[EL + 60, 'anode', '−'], [ER - 60, 'cathode', '+']].forEach(([x, pole, sign]) => {
      const pc = F.ref(pole);
      ctx.save(); ctx.fillStyle = alpha(pc, 0.40); ctx.strokeStyle = pc; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x - 26, T - 70, 52, B - T + 70, 6); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, sign, x, T - 42, PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, pole === 'anode' ? '阳极' : '阴极', x + (x < 700 ? -54 : 54), T - 42, pc, { size: 23, weight: 600, align: x < 700 ? 'right' : 'left' });
    });
    /* the two electrons the reaction places on the anode, and the two places it empties on the cathode */
    [330, 400].forEach((y) => {
      dot(ctx, EL + 60, y, e, true, 15);
      text(ctx, 'e⁻', EL + 60, y, PAL.panel, { size: 17, weight: 600, align: 'center' });
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([5, 5]);
      ctx.beginPath(); ctx.arc(ER - 60, y, 15, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      text(ctx, '+', ER - 60, y, PAL.ink, { size: 20, weight: 600, align: 'center' });
      arrow(ctx, ER - 110, y, EL + 110, y, PAL.ink, 4);
    });
    text(ctx, '此处放入两个电子', EL + 60, B + 84, PAL.muted, { size: 19, align: 'center' });
    text(ctx, '并从此处取走两个', ER - 60, B + 84, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout, '2\\ \\text{eV/电子} \\quad\\Rightarrow\\quad \\kV = \\dfrac{\\text{PE}}{\\kq} \\approx 2\\ \\text{V}',
      '由于参与反应的物质有电阻，所以产生电动势就不能没有内阻。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.12: a source and its load. Still: the reader is choosing an emf,
   an internal resistance and a load, and nothing in the picture has a clock.
   The defaults are the worked example's first case.
===================================================================== */
(function () {
  const d = sim('sim-load', 600);
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: '电源的电动势' });
  const R = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0.01, max: 2, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: '电源的内阻' });
  const RL = ctl(d.controls, { label: '\\kRload', cls: 'resistance', min: 0.1, max: 20, step: 0.1, value: 10, unit: 'Ω', dec: 3, aria: '负载电阻' });
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, r = R.v, rl = RL.v, i = e / (rl + r), V = e - i * r, P = i * i * rl;
    headline(ctx, '这个电源上 ' + fmt(rl, 2) + ' Ω 的负载取用 ' + fmt(i, 3) + ' A，接线端之间保持 ' + fmt(V, 2) + ' V，电动势为 ' + fmt(e, 2) + ' V，负载放出 ' + fmt(P, 1) + ' W。');
    enclosure(ctx, 150, 160, 700, 520, '电压源');
    wires(ctx, [[320, 220], [1150, 220]]);
    wires(ctx, [[320, 460], [1150, 460]]);
    wires(ctx, [[320, 220], [320, 460]]);
    wires(ctx, [[1150, 220], [1150, 460]]);
    cell(ctx, 320, 320, 'up', ['电动势', fmt(e, 2) + ' V']);
    resistor(ctx, 540, 220, true, 'r', r);
    node(ctx, 700, 220, 8); node(ctx, 700, 460, 8);
    text(ctx, '接线端', 700, 556, PAL.muted, { size: 19, align: 'center' });
    text(ctx, '两端 V = ' + fmt(V, 2) + ' V', 860, 340, C('voltage'), { size: 22, weight: 600, align: 'center' });
    resistor(ctx, 1150, 340, false, 'R_load', rl, { color: F.ref('load') });
    text(ctx, '负载', 1150, 556, F.ref('load'), { size: 19, align: 'center' });
    flow(ctx, 960, 220, 1, 0, 'I = ' + fmt(i, 3) + ' A');
    text(ctx, 'P = ' + fmt(P, 1) + ' W，在此放出', 1150, 168, C('power'), { size: 21, weight: 600, align: 'center' });
    readout(d.readout,
      '\\kIcur = \\dfrac{\\kemf}{\\kRload + \\krint} = \\dfrac{' + volt(e) + '}{' + ohm(rl + r) + '} = ' + fmt(i, 3) + '\\ \\text{A}',
      r / rl < 0.05
        ? '内阻只占负载的一小部分，所以对这个电源来说这是轻载。'
        : r < rl
        ? '内阻是负载的百分之 ' + fmt(100 * r / rl, 0) + '，耗尽的电池就是这样。'
        : '内阻大于负载，所以电源把大部分能量都用来加热自身。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.14: a car battery on charge, copied faithfully. No control and no
   motion: the schematic of the same connection, where the numbers do move, is
   Figure 21.17 below.
===================================================================== */
(function () {
  const d = sim('fig-charger', 560);
  function draw() {
    const { ctx } = begin(d.c);
    headline(ctx, '电池充电器驱使电流从电池的正极流入、从负极流出，这与电池驱动电流通过负载的方向相反。');
    const cc = C('current');
    /* the charger, a case with two posts, and the battery beside it */
    function caseBox(ctx, x, y, w, h, name, color) {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 10); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, name, x, y + h / 2 + 40, color, { size: 20, align: 'center' });
    }
    function post(ctx, x, y, sign) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.40); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x - 17, y - 20, 34, 24, 4); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, sign, x + (sign === '+' ? -34 : 34), y - 10, PAL.ink, { size: 24, weight: 600, align: 'center' });
    }
    /* the two cables, each a slack curve from a post of one to a post of the other, drawn first so the posts sit on them */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(330, 260); ctx.bezierCurveTo(330, 160, 920, 160, 920, 280); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(470, 260); ctx.bezierCurveTo(500, 200, 1060, 200, 1080, 280); ctx.stroke();
    ctx.restore();
    caseBox(ctx, 400, 380, 280, 200, '充电器', F.ref('source-1'));
    caseBox(ctx, 1000, 390, 300, 180, '电池', F.ref('source-2'));
    post(ctx, 330, 280, '+'); post(ctx, 470, 280, '−');
    post(ctx, 920, 300, '+'); post(ctx, 1080, 300, '−');
    arrow(ctx, 600, 350, 790, 350, cc, 5);
    text(ctx, '从正极流入', 695, 320, cc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, 790, 420, 600, 420, cc, 5);
    text(ctx, '从负极流出', 695, 452, cc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the grid of vents on the charger's face, so the case reads as an appliance */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(310, 350 + i * 18); ctx.lineTo(490, 350 + i * 18); ctx.stroke(); }
    ctx.restore();
    /* the six cells of the battery, drawn as caps along its top */
    for (let i = 0; i < 6; i++) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(890 + i * 44, 350, 15, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    text(ctx, '六节电池串联', 1000, 440, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout, '\\kV = \\kemf - \\kIcur\\krint, \\quad \\kIcur < 0',
      '充电器的电动势必须大于电池的电动势，充电时，电池的端电压高于它自身的电动势。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.15: two sources in series. Still: turning a cell round is a state
   of the connection and not a motion, so the figure answers its choice and its
   sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-series-sources', 500);
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 0.5, max: 12, step: 0.5, value: 6, unit: 'V', dec: 2, aria: '第一个电源的电动势' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 0.5, max: 12, step: 0.5, value: 6, unit: 'V', dec: 2, aria: '第二个电源的电动势' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: '第一个电源的内阻' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: '第二个电源的内阻' });
  const sense = choice(d.controls, {
    label: '\\text{第二节电池}',
    options: [{ value: 'same', label: '同向' }, { value: 'back', label: '反向' }],
    value: 'same', aria: '第二节电池的装入方向',
  });
  const { formula: fx, note } = F.readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = E1.v, e2 = E2.v, r1 = R1.v, r2 = R2.v, back = sense.value === 'back';
    const Et = back ? e1 - e2 : e1 + e2, Rt = r1 + r2, Y = 250;
    headline(ctx, back
      ? '第二节电池反向后，两个电动势相减，所以这一对电池提供 ' + fmt(Math.abs(Et), 2) + ' V，而两个内阻仍然相加，为 ' + fmt(Rt, 3) + ' Ω。'
      : '两个电动势相加为 ' + fmt(Et, 2) + ' V，两个内阻相加为 ' + fmt(Rt, 3) + ' Ω，所以这一对电池相当于一个 ' + fmt(Et, 2) + ' V、' + fmt(Rt, 3) + ' Ω 的电源。');
    wires(ctx, [[220, Y], [1280, Y]]);
    node(ctx, 220, Y, 8); node(ctx, 1280, Y, 8);
    const c1 = F.ref('source-1'), c2 = F.ref('source-2');
    cell(ctx, 375, Y, 'right', ['电动势₁', fmt(e1, 2) + ' V'], { color: c1 });
    resistor(ctx, 620, Y, true, 'r₁', r1, { color: c1 });
    /* the second cell turns round about its own centre; its signs return once it has come to rest */
    const turn = sense.mix((v) => (v === 'back' ? Math.PI : 0)), still = sense.k >= 1;
    ctx.save(); ctx.translate(875, Y); ctx.rotate(turn); cell(ctx, 0, 0, 'right', null, { signs: false, color: c2 }); ctx.restore();
    cell(ctx, 875, Y, back ? 'left' : 'right', ['电动势₂', fmt(e2, 2) + ' V'], { signs: still, plates: false });
    resistor(ctx, 1120, Y, true, 'r₂', r2, { color: c2 });
    text(ctx, '第一节电池', 375, Y + 112, c1, { size: 19, align: 'center' });
    text(ctx, back ? '反装的第二节电池' : '同向装入的第二节电池', 875, Y + 112, c2, { size: 19, align: 'center' });
    text(ctx, '这一对电池的两个接线端', 750, Y + 176, PAL.muted, { size: 19, align: 'center' });
    line(ctx, 220, Y + 136, 220, Y + 162, alpha(PAL.ink, 0.4), 2.5);
    line(ctx, 1280, Y + 136, 1280, Y + 162, alpha(PAL.ink, 0.4), 2.5);
    line(ctx, 220, Y + 162, 1280, Y + 162, alpha(PAL.ink, 0.4), 2.5);
    /* turning the cell round flips one sign in place, in the symbols and in the numbers */
    const op = back ? '-' : '+';
    F.morph(fx, '\\mk{a}{\\kemfone} \\mk{op}{' + op + '} \\mk{b}{\\kemftwo} = \\mk{na}{' + volt(e1) + '} \\mk{op2}{' + op + '} \\mk{nb}{' + volt(e2) + '} = \\mk{t}{' + volt(Et) + '}');
    note.textContent = back
        ? '把一节电池反着装进电器，会从总电动势中减去它自己的电动势。'
        : '内阻相加，正是用两块六伏电池代替一块十二伏电池会使发动机难以起动的原因。';
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.17: two sources in series with their emfs opposed, which is a
   charger on a battery. Still: the reader moves the two emfs and watches the
   current change direction, and there is no clock in the circuit.
===================================================================== */
(function () {
  const d = sim('sim-charging', 580);
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 18, unit: 'V', dec: 2, aria: '充电器的电动势' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: '电池的电动势' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.05, max: 2, step: 0.05, value: 1, unit: 'Ω', dec: 3, aria: '充电器的内阻' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.05, max: 2, step: 0.05, value: 0.5, unit: 'Ω', dec: 3, aria: '电池的内阻' });
  /* equal emfs are where the current turns round, which the text names */
  E1.mark([{ at: () => E2.v, label: '电动势相等' }]);
  E2.mark([{ at: () => E1.v, label: '电动势相等' }]);
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = E1.v, e2 = E2.v, r1 = R1.v, r2 = R2.v, i = (e1 - e2) / (r1 + r2);
    const V2 = e2 + i * r2, T = 210, B = 470, L = 300, R = 1100;
    headline(ctx, i > 0
      ? '充电器的电动势较大，所以有 ' + fmt(i, 2) + ' A 反向流过电池，电池的接线端之间为 ' + fmt(V2, 2) + ' V，高于它自身 ' + fmt(e2, 2) + ' V 的电动势。'
      : i < 0
        ? '现在电池的电动势较大，所以有 ' + fmt(-i, 2) + ' A 沿相反方向流动，是电池在驱动充电器，而不是被充电。'
        : '两个电动势相等，所以没有什么驱动回路，根本没有电流流过。');
    wires(ctx, [[L, T], [R, T], [R, B], [L, B], [L, T]]);
    const c1 = F.ref('source-1'), c2 = F.ref('source-2');
    cell(ctx, L, 340, 'up', ['电动势₁', fmt(e1, 2) + ' V'], { side: -1, color: c1 });
    cell(ctx, R, 340, 'up', ['电动势₂', fmt(e2, 2) + ' V'], { side: 1, color: c2 });
    resistor(ctx, 560, T, true, 'r₁', r1, { color: c1 });
    resistor(ctx, 840, B, true, 'r₂', r2, { color: c2 });
    text(ctx, '充电器', L, B + 62, c1, { size: 20, align: 'center' });
    text(ctx, '充电中的电池', R, B + 62, c2, { size: 20, align: 'center' });
    text(ctx, '两个电动势相对', 700, 340, PAL.muted, { size: 20, align: 'center' });
    if (i !== 0) flow(ctx, 880, T, i > 0 ? 1 : -1, 0, 'I = ' + fmt(Math.abs(i), 2) + ' A', { side: i > 0 ? 1 : -1 });
    else text(ctx, '没有电流', 880, T + 40, C('current'), { size: 20, weight: 600, align: 'center' });
    text(ctx, '接线端之间 V = ' + fmt(V2, 2) + ' V', R - 60, 290, C('voltage'), { size: 21, weight: 600, align: 'right' });
    readout(d.readout,
      '\\kIcur = \\dfrac{\\kemfone - \\kemftwo}{\\krintone + \\krinttwo} = \\dfrac{' + volt(e1) + ' - ' + volt(e2) + '}{' + ohm(r1 + r2) + '} = ' + fmt(i, 2) + '\\ \\text{A}',
      i > 0
        ? '电流从电池的正极流入，所以对电池来说，它在端电压公式中为负。'
        : '充电器的电动势必须总是更大。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.18: a flashlight, two cells in series with one bulb. Still: the
   cells ageing is a change the reader makes on a slider, not a motion of the
   picture.
===================================================================== */
(function () {
  const d = sim('sim-flashlight', 620);
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 0.5, max: 3, step: 0.01, value: 1.58, unit: 'V', dec: 2, aria: '第一节电池的电动势' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 0.5, max: 3, step: 0.01, value: 1.58, unit: 'V', dec: 2, aria: '第二节电池的电动势' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.05, max: 4, step: 0.05, value: 0.1, unit: 'Ω', dec: 3, aria: '第一节电池的内阻' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.05, max: 4, step: 0.05, value: 0.1, unit: 'Ω', dec: 3, aria: '第二节电池的内阻' });
  const RL = ctl(d.controls, { label: '\\kRload', cls: 'resistance', min: 0.5, max: 8, step: 0.1, value: 2.3, unit: 'Ω', dec: 3, aria: '灯泡的电阻' });
  /* the brightest the bulb ever gets, from the sliders' extremes, so the glow has one fixed scale */
  const PMAX = (function () { const e = 6, r = 0.1, rl = 2.3; const i = e / (r + r + rl); return i * i * rl; })();
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = E1.v, e2 = E2.v, r1 = R1.v, r2 = R2.v, rl = RL.v;
    const i = (e1 + e2) / (r1 + r2 + rl), P = i * i * rl, frac = Math.max(0, Math.min(1, P / PMAX));
    const T = 230, B = 500, L = 250, R = 1150, rc = C('resistance');
    headline(ctx, '串联的两节电池驱动 ' + fmt(i, 3) + ' A 的电流绕回路流动，灯泡放出其中的 ' + fmt(P, 2) + ' W；其余的 ' + fmt(i * i * (r1 + r2), 2) + ' W 留在电池内部。');
    wires(ctx, [[L, T], [R, T], [R, B], [L, B], [L, T]]);
    const c1 = F.ref('source-1'), c2 = F.ref('source-2'), cl = F.ref('load');
    cell(ctx, 445, B, 'right', ['电动势₁', fmt(e1, 2) + ' V'], { color: c1 });
    resistor(ctx, 670, B, true, 'r₁', r1, { color: c1 });
    cell(ctx, 895, B, 'right', ['电动势₂', fmt(e2, 2) + ' V'], { color: c2 });
    resistor(ctx, 1050, B, true, 'r₂', r2, { stack: 'above', color: c2 });
    bulb(ctx, R, 350, frac, cl);
    text(ctx, 'R_load', R - 60, 336, rc, { size: 23, weight: 600, align: 'right' });
    text(ctx, fmt(rl, 2) + ' Ω', R - 60, 366, rc, { size: 20, align: 'right' });
    text(ctx, '灯泡', R + 60, 336, cl, { size: 19, align: 'left' });
    text(ctx, 'P = ' + fmt(P, 2) + ' W', R + 60, 366, C('power'), { size: 21, weight: 600, align: 'left' });
    flow(ctx, 700, T, -1, 0, 'I = ' + fmt(i, 3) + ' A');
    text(ctx, '先后相接的两节电池', 670, B + 100, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout,
      '\\kIcur = \\dfrac{\\kemfone + \\kemftwo}{\\krintone + \\krinttwo + \\kRload} = \\dfrac{' + volt(e1 + e2) + '}{' + ohm(r1 + r2 + rl) + '} = ' + fmt(i, 3) + '\\ \\text{A}',
      (r1 + r2) / rl > 0.25
        ? '旧电池之所以旧，主要就在于这一点：它们的内阻升高了。'
        : '电池新的时候，它们的内阻与灯泡相比很小。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.19: two sources of the same emf in parallel on one load, beside
   one source alone on the same load. Still: putting a second source alongside
   is a state of the connection, not a motion.
===================================================================== */
(function () {
  const d = sim('sim-parallel-sources', 600);
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: '每个电源的电动势' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: '第一个电源的内阻' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: '第二个电源的内阻' });
  const RL = ctl(d.controls, { label: '\\kRload', cls: 'resistance', min: 0.05, max: 4, step: 0.05, value: 0.3, unit: 'Ω', dec: 3, aria: '负载电阻' });
  const how = choice(d.controls, {
    label: '\\text{电源}',
    options: [{ value: 'one', label: '单独一个' }, { value: 'two', label: '两个并联' }],
    value: 'one', aria: '由一个电源还是两个并联的电源驱动负载',
  });
  const { formula: fx, note } = F.readout(d);
  let was = how.value;
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, r1 = R1.v, r2 = R2.v, rl = RL.v, two = how.value === 'two';
    const rt = two ? 1 / (1 / r1 + 1 / r2) : r1, i = e / (rt + rl), V = e - i * rt, P = i * i * rl;
    const T = 210, B = 490, RX = 1160;
    headline(ctx, two
      ? '并排接入时，两个电源仍然提供 ' + fmt(e, 2) + ' V，但它们的内阻并联，合起来为 ' + fmt(rt, 3) + ' Ω，所以负载现在得到 ' + fmt(i, 1) + ' A。'
      : '单独一个电源驱动 ' + fmt(i, 1) + ' A 通过负载，这些电流全都要通过它自身 ' + fmt(rt, 3) + ' Ω 的内阻。');
    /* the first source steps aside and the second arrives beside it */
    const x1 = how.mix((v) => (v === 'two' ? 340 : 450)), a2 = how.a('two');
    F.faded(ctx, a2, [0, 0], () => enclosure(ctx, 190, 150, 660, 566, '并排的两个电源'));
    wires(ctx, [[x1, T], [RX, T]]);
    wires(ctx, [[x1, B], [RX, B]]);
    wires(ctx, [[RX, T], [RX, B]]);
    const source = (x, k) => {
      const sc = F.ref('source-' + (k + 1));
      wires(ctx, [[x, T], [x, B]]);
      if (k > 0) { node(ctx, x, T); node(ctx, x, B); }
      cell(ctx, x, 274, 'up', ['电动势', fmt(e, 2) + ' V'], { color: sc });
      resistor(ctx, x, 417, false, k === 0 ? 'r₁' : 'r₂', k === 0 ? r1 : r2, { color: sc });
      text(ctx, two ? '电源 ' + (k + 1) : '电源', x, B + 44, sc, { size: 19, align: 'center' });
    };
    source(x1, 0);
    F.faded(ctx, a2, [0, 0], () => source(580, 1));
    resistor(ctx, RX, 350, false, 'R_load', rl, { color: F.ref('load') });
    text(ctx, '负载', RX, B + 44, F.ref('load'), { size: 19, align: 'center' });
    flow(ctx, 920, T, 1, 0, 'I = ' + fmt(i, 1) + ' A');
    text(ctx, '负载两端 V = ' + fmt(V, 2) + ' V', 900, 410, C('voltage'), { size: 21, weight: 600, align: 'center' });
    text(ctx, 'P = ' + fmt(P, 0) + ' W', RX, 168, C('power'), { size: 21, weight: 600, align: 'center' });
    /* r₁ keeps its key as it goes into the parallel rule, and r₂ arrives beside it */
    F.morph(fx, two
      ? '\\mk{r}{\\krinttot} = \\left(\\dfrac{1}{\\mk{a}{\\krintone}} + \\dfrac{1}{\\mk{b}{\\krinttwo}}\\right)^{-1} = \\mk{v}{' + ohm(rt) + '}'
      : '\\mk{r}{\\krinttot} = \\mk{a}{\\krintone} = \\mk{v}{' + ohm(rt) + '}', { force: was !== how.value });
    was = how.value;
    note.textContent = two
        ? '一些柴油汽车为了获得这种额外的电流，并排装有两块十二伏电池。'
        : '内阻自己占去了电动势中的 ' + fmt(e - V, 2) + ' V。';
  }
  register(d.fig, { update: () => {}, draw });
})();

};
