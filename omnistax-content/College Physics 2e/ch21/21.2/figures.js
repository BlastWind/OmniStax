/* Figures for section 21.2 Electromotive Force: Terminal Voltage.
   A connection of sources that is only being looked at has no time in it, so
   every figure here is a still picture: none registers a cycle, none carries a
   transport, and a slider or a choice alone redraws it. The page binds the
   voltage, the resistance, the current and the power, which is what
   ch21/COLOR.md gives 21.2; the wires, the plates, the cases and the frame are
   ink, and the only other colour on the page is the element palette on the lone
   electrons of Figure 21.11. */
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
   by how much of its brightest power it gives out, in the power hue. */
function bulb(ctx, x, y, frac) {
  if (frac > 0) {
    const g = ctx.createRadialGradient(x, y, 36, x, y, 100);
    g.addColorStop(0, alpha(C('power'), 0.42 * frac)); g.addColorStop(1, alpha(C('power'), 0));
    ctx.save(); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 100, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
  }
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
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
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: 'the emf of the source' });
  const R = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0, max: 2, step: 0.02, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the source' });
  const I = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 20, step: 0.25, value: 0, unit: 'A', dec: 2, aria: 'the current the source is delivering' });
  function draw() {
    const { ctx } = begin(d.c);
    /* The cell cannot be asked for more than it can drive: with its terminals joined
       the current is emf / r, and beyond that the slider is held there and the
       headline says so, rather than drawing a terminal voltage below zero. */
    const e = E.v, r = R.v, imax = r > 0 ? e / r : Infinity, i = Math.min(I.v, imax), V = e - i * r;
    const held = I.v > imax + 1e-9;
    headline(ctx, held
      ? 'This cell cannot deliver ' + fmt(I.v, 2) + ' A. The most it can drive is ' + fmt(imax, 2) + ' A, with its terminals joined and nothing left across them.'
      : i === 0
        ? 'With no current drawn the meter across the terminals reads ' + fmt(V, 2) + ' V, which is the emf of the cell exactly.'
        : 'Delivering ' + fmt(i, 2) + ' A, the cell holds ' + fmt(V, 2) + ' V across its terminals, which is ' + fmt(e - V, 2) + ' V below its emf.');
    enclosure(ctx, 150, 150, 1000, 470, 'inside the case of the cell');
    wires(ctx, [[320, 210], [1090, 210]]);
    wires(ctx, [[320, 410], [1090, 410]]);
    wires(ctx, [[320, 210], [320, 410]]);
    cell(ctx, 320, 310, 'up', ['emf', fmt(e, 2) + ' V']);
    resistor(ctx, 660, 210, true, 'r', r);
    text(ctx, 'the source of electrical energy', 320, 506, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'the cell’s own resistance', 660, 286, PAL.muted, { size: 19, align: 'center' });
    node(ctx, 1090, 210, 8); node(ctx, 1090, 410, 8);
    text(ctx, 'the output terminals', 1090, 506, PAL.muted, { size: 19, align: 'center' });
    if (i > 0) flow(ctx, 900, 210, 1, 0, 'I = ' + fmt(i, 2) + ' A');
    else text(ctx, 'no current is being drawn', 870, 186, C('current'), { size: 20, weight: 600, align: 'center' });
    wires(ctx, [[1090, 210], [1230, 210], [1230, 410], [1090, 410]]);
    meter(ctx, 1230, 310, 'V', fmt(V, 2) + ' V', C('voltage'));
    readout(d.readout,
      '\\kV = \\kemf - \\kIcur\\krint = ' + volt(e) + ' - (' + fmt(i, 2) + '\\ \\text{A})(' + ohm(r) + ') = ' + volt(V),
      held
        ? 'Every volt of the emf is then spent inside the cell, which is why a source is never asked for more current than its own internal resistance allows.'
        : i === 0
        ? 'No current means no drop across the internal resistance, so the terminals carry the whole of the emf. This is what it means to say that the emf is the potential difference of a source when no current is flowing.'
        : 'The current has to pass through the internal resistance on its way out of the cell, and the ' + fmt(i * r, 2) + ' V it loses there never reaches the terminals. A larger internal resistance, or a larger current, takes more of the emf away.');
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
    headline(ctx, 'A single cell of a lead-acid battery: a lead plate and a lead oxide plate standing in sulfuric acid, each carried up to a terminal above the liquid.');
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
    [[560, 'the lead plate', 'anode', '−'], [840, 'the lead oxide plate', 'cathode', '+']].forEach(([x, what, pole, sign]) => {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.40); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x - 22, 210, 44, B - 240, 5); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.roundRect(x - 34, 174, 68, 40, 6); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, sign, x, 194, PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, pole, x + 54, 194, PAL.ink, { size: 23, weight: 600, align: 'left' });
      text(ctx, what, x, B + 40, PAL.muted, { size: 19, align: 'center' });
    });
    text(ctx, 'sulfuric acid', 700, 340, PAL.muted, { size: 20, align: 'center' });
    readout(d.readout, '\\kV \\approx 2\\ \\text{V per cell}',
      'The chemical reaction between the plates and the acid separates charge, sending negative charge to the anode and leaving the cathode positive. Six such cells in series make the twelve-volt battery of a car, and the acid both conducts the charge and takes part in the reaction.');
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
    headline(ctx, 'One reaction in the cell places two electrons on the anode and takes two from the cathode, so charge is separated and the terminals are left at different potentials.');
    const T = 250, B = 470, EL = 330, ER = 1070, e = F.el('e-');
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.fillRect(EL, T, ER - EL, B - T); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.strokeRect(EL, T, ER - EL, B - T); ctx.restore();
    text(ctx, 'the electrolyte, in which the reaction runs', (EL + ER) / 2, B + 42, PAL.muted, { size: 19, align: 'center' });
    [[EL + 60, 'anode', '−'], [ER - 60, 'cathode', '+']].forEach(([x, pole, sign]) => {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.40); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x - 26, T - 70, 52, B - T + 70, 6); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, sign, x, T - 42, PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, pole, x + (x < 700 ? -54 : 54), T - 42, PAL.ink, { size: 23, weight: 600, align: x < 700 ? 'right' : 'left' });
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
    text(ctx, 'two electrons are placed here', EL + 60, B + 84, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'and two are removed from here', ER - 60, B + 84, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout, '2\\ \\text{eV per electron} \\quad\\Rightarrow\\quad \\kV = \\dfrac{\\text{PE}}{\\kq} \\approx 2\\ \\text{V}',
      'The reaction gives each electron sent to the anode about two electron volts, and an electron volt is the energy one electron gains through one volt, so the cell stands at about two volts. It proceeds only while a closed circuit returns two electrons to the cathode, and because the reacting substances have resistance, no emf can be made without an internal resistance.');
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
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: 'the emf of the source' });
  const R = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 0.01, max: 2, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the source' });
  const RL = ctl(d.controls, { label: '\\kRload', cls: 'resistance', min: 0.1, max: 20, step: 0.1, value: 10, unit: 'Ω', dec: 3, aria: 'the load resistance' });
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, r = R.v, rl = RL.v, i = e / (rl + r), V = e - i * r, P = i * i * rl;
    headline(ctx, 'A load of ' + fmt(rl, 2) + ' Ω on this source draws ' + fmt(i, 3) + ' A, the terminals hold ' + fmt(V, 2) + ' V of the ' + fmt(e, 2) + ' V emf, and the load gives out ' + fmt(P, 1) + ' W.');
    enclosure(ctx, 150, 160, 700, 520, 'the voltage source');
    wires(ctx, [[320, 220], [1150, 220]]);
    wires(ctx, [[320, 460], [1150, 460]]);
    wires(ctx, [[320, 220], [320, 460]]);
    wires(ctx, [[1150, 220], [1150, 460]]);
    cell(ctx, 320, 320, 'up', ['emf', fmt(e, 2) + ' V']);
    resistor(ctx, 540, 220, true, 'r', r);
    node(ctx, 700, 220, 8); node(ctx, 700, 460, 8);
    text(ctx, 'the terminals', 700, 556, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'V = ' + fmt(V, 2) + ' V across them', 860, 340, C('voltage'), { size: 22, weight: 600, align: 'center' });
    resistor(ctx, 1150, 340, false, 'R_load', rl);
    text(ctx, 'the load', 1150, 556, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 960, 220, 1, 0, 'I = ' + fmt(i, 3) + ' A');
    text(ctx, 'P = ' + fmt(P, 1) + ' W given out here', 1150, 168, C('power'), { size: 21, weight: 600, align: 'center' });
    readout(d.readout,
      '\\kIcur = \\dfrac{\\kemf}{\\kRload + \\krint} = \\dfrac{' + volt(e) + '}{' + ohm(rl + r) + '} = ' + fmt(i, 3) + '\\ \\text{A}, \\quad \\kV = \\kemf - \\kIcur\\krint = ' + volt(V) + ', \\quad \\kP = \\kIcur^{2}\\kRload = ' + fmt(P, 1) + '\\ \\text{W}',
      r / rl < 0.05
        ? 'The internal resistance is a small fraction of the load, so the terminal voltage stays within ' + fmt(e - V, 2) + ' V of the emf and this is a light load for the source.'
        : r < rl
        ? 'The internal resistance is now ' + fmt(100 * r / rl, 0) + ' per cent of the load, so it takes ' + fmt(e - V, 2) + ' V of the emf for itself and both the current and the power reaching the load are cut down. This is what a depleted battery does.'
        : 'The internal resistance is now larger than the load itself, so it keeps ' + fmt(e - V, 2) + ' V of the emf inside the source and leaves only ' + fmt(V, 2) + ' V for the load. A source asked to drive a load smaller than its own resistance spends most of its energy heating itself.');
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
    headline(ctx, 'A battery charger drives current in at the positive terminal of the battery and out at the negative one, which is the opposite of the way the battery drives current through a load.');
    const cc = C('current');
    /* the charger, a case with two posts, and the battery beside it */
    function caseBox(ctx, x, y, w, h, name) {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 10); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, name, x, y + h / 2 + 40, PAL.muted, { size: 20, align: 'center' });
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
    caseBox(ctx, 400, 380, 280, 200, 'the charger');
    caseBox(ctx, 1000, 390, 300, 180, 'the battery');
    post(ctx, 330, 280, '+'); post(ctx, 470, 280, '−');
    post(ctx, 920, 300, '+'); post(ctx, 1080, 300, '−');
    arrow(ctx, 600, 350, 790, 350, cc, 5);
    text(ctx, 'in at the positive terminal', 695, 320, cc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, 790, 420, 600, 420, cc, 5);
    text(ctx, 'out at the negative one', 695, 452, cc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the grid of vents on the charger's face, so the case reads as an appliance */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(310, 350 + i * 18); ctx.lineTo(490, 350 + i * 18); ctx.stroke(); }
    ctx.restore();
    /* the six cells of the battery, drawn as caps along its top */
    for (let i = 0; i < 6; i++) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(890 + i * 44, 350, 15, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    text(ctx, 'six cells in series', 1000, 440, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout, '\\kV = \\kemf - \\kIcur\\krint, \\quad \\kIcur < 0',
      'The charger must have a larger emf than the battery, or it cannot reverse the current through it. While the battery is being charged the current in the terminal voltage equation is negative, so the voltage across its terminals stands above its own emf, and the reversed current runs its chemical reaction backwards and replenishes its chemical potential.');
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
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 0.5, max: 12, step: 0.5, value: 6, unit: 'V', dec: 2, aria: 'the emf of the first source' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 0.5, max: 12, step: 0.5, value: 6, unit: 'V', dec: 2, aria: 'the emf of the second source' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the first source' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the second source' });
  const sense = choice(d.controls, {
    label: '\\text{the second cell}',
    options: [{ value: 'same', label: 'the same way' }, { value: 'back', label: 'turned round' }],
    value: 'same', aria: 'which way round the second cell is put in',
  });
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = E1.v, e2 = E2.v, r1 = R1.v, r2 = R2.v, back = sense.value === 'back';
    const Et = back ? e1 - e2 : e1 + e2, Rt = r1 + r2, Y = 250;
    headline(ctx, back
      ? 'With the second cell turned round the two emfs subtract, so the pair offers ' + fmt(Math.abs(Et), 2) + ' V, while the two internal resistances still add to ' + fmt(Rt, 3) + ' Ω.'
      : 'The two emfs add to ' + fmt(Et, 2) + ' V and the two internal resistances add to ' + fmt(Rt, 3) + ' Ω, so the pair behaves as one source of ' + fmt(Et, 2) + ' V and ' + fmt(Rt, 3) + ' Ω.');
    wires(ctx, [[220, Y], [1280, Y]]);
    node(ctx, 220, Y, 8); node(ctx, 1280, Y, 8);
    cell(ctx, 375, Y, 'right', ['emf₁', fmt(e1, 2) + ' V']);
    resistor(ctx, 620, Y, true, 'r₁', r1);
    cell(ctx, 875, Y, back ? 'left' : 'right', ['emf₂', fmt(e2, 2) + ' V']);
    resistor(ctx, 1120, Y, true, 'r₂', r2);
    text(ctx, 'the first cell', 375, Y + 112, PAL.muted, { size: 19, align: 'center' });
    text(ctx, back ? 'the second cell, put in backward' : 'the second cell, the same way round', 875, Y + 112, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'the pair’s two terminals', 750, Y + 176, PAL.muted, { size: 19, align: 'center' });
    line(ctx, 220, Y + 136, 220, Y + 162, alpha(PAL.ink, 0.4), 2.5);
    line(ctx, 1280, Y + 136, 1280, Y + 162, alpha(PAL.ink, 0.4), 2.5);
    line(ctx, 220, Y + 162, 1280, Y + 162, alpha(PAL.ink, 0.4), 2.5);
    readout(d.readout,
      (back
        ? '\\kemfone - \\kemftwo = ' + volt(e1) + ' - ' + volt(e2) + ' = ' + volt(Et)
        : '\\kemfone + \\kemftwo = ' + volt(e1) + ' + ' + volt(e2) + ' = ' + volt(Et))
      + ', \\quad \\krintone + \\krinttwo = ' + ohm(r1) + ' + ' + ohm(r2) + ' = ' + ohm(Rt),
      back
        ? 'The emfs add algebraically, so a cell put into an appliance backward takes its own emf away from the total instead of adding it. The internal resistances have no sense to them and add either way, which is the disadvantage of the series connection.'
        : 'Cells are usually put in series exactly to get the larger total emf. The internal resistances add as well, which is why two six-volt batteries in place of one twelve-volt battery make an engine hard to start.');
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
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 18, unit: 'V', dec: 2, aria: 'the emf of the charger' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: 'the emf of the battery' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.05, max: 2, step: 0.05, value: 1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the charger' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.05, max: 2, step: 0.05, value: 0.5, unit: 'Ω', dec: 3, aria: 'the internal resistance of the battery' });
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = E1.v, e2 = E2.v, r1 = R1.v, r2 = R2.v, i = (e1 - e2) / (r1 + r2);
    const V2 = e2 + i * r2, T = 210, B = 470, L = 300, R = 1100;
    headline(ctx, i > 0
      ? 'The charger’s emf is the larger, so ' + fmt(i, 2) + ' A runs backward through the battery and its terminals stand at ' + fmt(V2, 2) + ' V, above its own emf of ' + fmt(e2, 2) + ' V.'
      : i < 0
        ? 'The battery’s emf is now the larger, so ' + fmt(-i, 2) + ' A runs the other way and the battery is driving the charger instead of being charged.'
        : 'The two emfs are equal, so nothing drives the loop and no current flows at all.');
    wires(ctx, [[L, T], [R, T], [R, B], [L, B], [L, T]]);
    cell(ctx, L, 340, 'up', ['emf₁', fmt(e1, 2) + ' V'], { side: -1 });
    cell(ctx, R, 340, 'up', ['emf₂', fmt(e2, 2) + ' V'], { side: 1 });
    resistor(ctx, 560, T, true, 'r₁', r1);
    resistor(ctx, 840, B, true, 'r₂', r2);
    text(ctx, 'the charger', L, B + 62, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'the battery on charge', R, B + 62, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'the two emfs face each other', 700, 340, PAL.muted, { size: 20, align: 'center' });
    if (i !== 0) flow(ctx, 880, T, i > 0 ? 1 : -1, 0, 'I = ' + fmt(Math.abs(i), 2) + ' A', { side: i > 0 ? 1 : -1 });
    else text(ctx, 'no current', 880, T + 40, C('current'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'V = ' + fmt(V2, 2) + ' V at its terminals', R - 60, 290, C('voltage'), { size: 21, weight: 600, align: 'right' });
    readout(d.readout,
      '\\kIcur = \\dfrac{\\kemfone - \\kemftwo}{\\krintone + \\krinttwo} = \\dfrac{' + volt(e1) + ' - ' + volt(e2) + '}{' + ohm(r1 + r2) + '} = ' + fmt(i, 2) + '\\ \\text{A}, \\quad \\kV = \\kemftwo + \\kIcur\\krinttwo = ' + volt(V2),
      i > 0
        ? 'Current flows in the direction of the greater emf and is limited by the sum of the two internal resistances. Because it enters the battery at the positive terminal, the current in the terminal voltage equation is negative for the battery, and its terminal voltage is ' + fmt(V2 - e2, 2) + ' V above its emf. That is what charging looks like from outside.'
        : i < 0
        ? 'With the battery’s emf the larger, the battery has become the source and the charger the load, so the current runs the wrong way for charging and the battery is being drained rather than filled. A charger must always have the greater emf.'
        : 'With the two emfs equal there is nothing left to drive the loop, so no charge moves either way and neither source does anything to the other. A charger must always have the greater emf.');
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
  const E1 = ctl(d.controls, { label: '\\kemfone', cls: 'voltage', min: 0.5, max: 3, step: 0.01, value: 1.58, unit: 'V', dec: 2, aria: 'the emf of the first cell' });
  const E2 = ctl(d.controls, { label: '\\kemftwo', cls: 'voltage', min: 0.5, max: 3, step: 0.01, value: 1.58, unit: 'V', dec: 2, aria: 'the emf of the second cell' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.05, max: 4, step: 0.05, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the first cell' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.05, max: 4, step: 0.05, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the second cell' });
  const RL = ctl(d.controls, { label: '\\kRload', cls: 'resistance', min: 0.5, max: 8, step: 0.1, value: 2.3, unit: 'Ω', dec: 3, aria: 'the resistance of the bulb' });
  /* the brightest the bulb ever gets, from the sliders' extremes, so the glow has one fixed scale */
  const PMAX = (function () { const e = 6, r = 0.1, rl = 2.3; const i = e / (r + r + rl); return i * i * rl; })();
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = E1.v, e2 = E2.v, r1 = R1.v, r2 = R2.v, rl = RL.v;
    const i = (e1 + e2) / (r1 + r2 + rl), P = i * i * rl, frac = Math.max(0, Math.min(1, P / PMAX));
    const T = 230, B = 500, L = 250, R = 1150, rc = C('resistance');
    headline(ctx, 'Two cells in series drive ' + fmt(i, 3) + ' A round the loop, and the bulb gives out ' + fmt(P, 2) + ' W of it; the rest, ' + fmt(i * i * (r1 + r2), 2) + ' W, is left inside the cells.');
    wires(ctx, [[L, T], [R, T], [R, B], [L, B], [L, T]]);
    cell(ctx, 445, B, 'right', ['emf₁', fmt(e1, 2) + ' V']);
    resistor(ctx, 670, B, true, 'r₁', r1);
    cell(ctx, 895, B, 'right', ['emf₂', fmt(e2, 2) + ' V']);
    resistor(ctx, 1050, B, true, 'r₂', r2, { stack: 'above' });
    bulb(ctx, R, 350, frac);
    text(ctx, 'R_load', R - 60, 336, rc, { size: 23, weight: 600, align: 'right' });
    text(ctx, fmt(rl, 2) + ' Ω', R - 60, 366, rc, { size: 20, align: 'right' });
    text(ctx, 'the bulb', R + 60, 336, PAL.muted, { size: 19, align: 'left' });
    text(ctx, 'P = ' + fmt(P, 2) + ' W', R + 60, 366, C('power'), { size: 21, weight: 600, align: 'left' });
    flow(ctx, 700, T, -1, 0, 'I = ' + fmt(i, 3) + ' A');
    text(ctx, 'the two cells, one after the other', 670, B + 100, PAL.muted, { size: 19, align: 'center' });
    readout(d.readout,
      '\\kIcur = \\dfrac{\\kemfone + \\kemftwo}{\\krintone + \\krinttwo + \\kRload} = \\dfrac{' + volt(e1 + e2) + '}{' + ohm(r1 + r2 + rl) + '} = ' + fmt(i, 3) + '\\ \\text{A}, \\quad \\kP = \\kIcur^{2}\\kRload = ' + fmt(P, 2) + '\\ \\text{W}',
      (r1 + r2) / rl > 0.25
        ? (r1 + r2 > rl
          ? 'The two internal resistances now come to more than the bulb’s own resistance, so most of what the cells produce is spent inside them and the bulb is dim. Old cells are old chiefly in this sense: their internal resistance has risen.'
          : 'The two internal resistances now come to ' + fmt(100 * (r1 + r2) / rl, 0) + ' per cent of the bulb’s resistance, so a large part of what the cells produce is spent inside them and the bulb is dim. Old cells are old chiefly in this sense: their internal resistance has risen.')
        : 'While the cells are fresh their internal resistances are small beside the bulb, almost the whole of the two emfs reaches the bulb, and the flashlight is bright. Raise either internal resistance and watch the light go.');
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
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 2, aria: 'the emf each source has' });
  const R1 = ctl(d.controls, { label: '\\krintone', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the first source' });
  const R2 = ctl(d.controls, { label: '\\krinttwo', cls: 'resistance', min: 0.01, max: 1, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: 'the internal resistance of the second source' });
  const RL = ctl(d.controls, { label: '\\kRload', cls: 'resistance', min: 0.05, max: 4, step: 0.05, value: 0.3, unit: 'Ω', dec: 3, aria: 'the load resistance' });
  const how = choice(d.controls, {
    label: '\\text{the sources}',
    options: [{ value: 'one', label: 'one on its own' }, { value: 'two', label: 'two in parallel' }],
    value: 'one', aria: 'whether one source or two in parallel drive the load',
  });
  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, r1 = R1.v, r2 = R2.v, rl = RL.v, two = how.value === 'two';
    const rt = two ? 1 / (1 / r1 + 1 / r2) : r1, i = e / (rt + rl), V = e - i * rt, P = i * i * rl;
    const T = 210, B = 490, RX = 1160;
    headline(ctx, two
      ? 'Side by side the two sources still offer ' + fmt(e, 2) + ' V, but their internal resistances stand in parallel and come to ' + fmt(rt, 3) + ' Ω, so the load now gets ' + fmt(i, 1) + ' A.'
      : 'One source alone drives ' + fmt(i, 1) + ' A through the load, all of it through its own internal resistance of ' + fmt(rt, 3) + ' Ω.');
    const xs = two ? [340, 580] : [450];
    const rs = two ? [r1, r2] : [r1];
    if (two) enclosure(ctx, 190, 150, 660, 566, 'the two sources side by side');
    wires(ctx, [[xs[0], T], [RX, T]]);
    wires(ctx, [[xs[0], B], [RX, B]]);
    wires(ctx, [[RX, T], [RX, B]]);
    xs.forEach((x, k) => {
      wires(ctx, [[x, T], [x, B]]);
      if (two && k > 0) { node(ctx, x, T); node(ctx, x, B); }
      cell(ctx, x, 274, 'up', ['emf', fmt(e, 2) + ' V']);
      resistor(ctx, x, 417, false, k === 0 ? 'r₁' : 'r₂', rs[k]);
      text(ctx, two ? 'source ' + (k + 1) : 'the source', x, B + 44, PAL.muted, { size: 19, align: 'center' });
    });
    resistor(ctx, RX, 350, false, 'R_load', rl);
    text(ctx, 'the load', RX, B + 44, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 920, T, 1, 0, 'I = ' + fmt(i, 1) + ' A');
    text(ctx, 'V = ' + fmt(V, 2) + ' V across the load', 900, 410, C('voltage'), { size: 21, weight: 600, align: 'center' });
    text(ctx, 'P = ' + fmt(P, 0) + ' W', RX, 168, C('power'), { size: 21, weight: 600, align: 'center' });
    readout(d.readout,
      (two
        ? '\\dfrac{1}{\\krinttot} = \\dfrac{1}{\\krintone} + \\dfrac{1}{\\krinttwo} \\Rightarrow \\krinttot = ' + ohm(rt) + ', \\quad '
        : '\\krinttot = \\krintone = ' + ohm(rt) + ', \\quad ')
      + '\\kIcur = \\dfrac{\\kemf}{\\krinttot + \\kRload} = ' + fmt(i, 1) + '\\ \\text{A}',
      two
        ? 'Each source has the same potential difference, so the total emf is the emf of one of them; only the internal resistance changes, and two resistances in parallel come to less than either. That is why some diesel cars carry two twelve-volt batteries side by side: twelve volts still, and enough current to turn a diesel engine.'
        : 'Everything the source delivers passes through its own internal resistance, which takes ' + fmt(e - V, 2) + ' V of the emf for itself. Put a second source alongside and watch that share fall.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
