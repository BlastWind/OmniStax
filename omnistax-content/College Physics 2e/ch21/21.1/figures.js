/* Figures for section 21.1 Resistors in Series and Parallel.
   A connection of resistors that is only being looked at has no time in it, so
   every figure here is a still picture: none registers a cycle, none carries a
   transport, and a slider or a choice alone redraws it. The page binds the
   resistance, the current, the voltage and the power, which is what ch21/COLOR.md
   gives 21.1; the wires, the source, the zigzags and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const ohms = (r) => fmt(r, r < 10 ? 2 : 1) + ' Ω';
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';
const par = (...rs) => 1 / rs.reduce((s, r) => s + 1 / r, 0);

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
/* The soft panel that picks the group of a network being combined out of the rest. */
function spot(ctx, l, t, r, b) {
  ctx.save(); ctx.fillStyle = alpha(C('resistance'), 0.14); ctx.strokeStyle = alpha(C('resistance'), 0.5);
  ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.roundRect(l, t, r - l, b - t, 14); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* A lamp on a vertical wire: the book's circle with a coiled filament, its glow set by
   the fraction of its full power it is giving out, in the power hue. */
function bulb(ctx, x, y, frac) {
  if (frac > 0) {
    const g = ctx.createRadialGradient(x, y, 40, x, y, 110);
    g.addColorStop(0, alpha(C('power'), 0.42 * frac)); g.addColorStop(1, alpha(C('power'), 0));
    ctx.save(); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 110, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
  }
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
  ctx.beginPath(); ctx.arc(x, y, 44, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 30, y + 4); ctx.lineTo(x - 24, y + 4);
  for (let k = 0; k < 4; k++) ctx.arc(x - 18 + k * 12, y + 4, 6, Math.PI, 0, false);
  ctx.lineTo(x + 30, y + 4); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 21.2: four resistors, wired one after the other or each on a path
   of its own. Still: the reader is choosing a wiring and two resistances,
   and nothing in the picture has a clock.
===================================================================== */
(function () {
  const d = sim('sim-four-resistors', 560);
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 13, unit: 'Ω', dec: 1, aria: 'the third resistance' });
  const R4 = ctl(d.controls, { label: '\\kResfour', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the fourth resistance' });
  const how = choice(d.controls, { label: '\\text{the wiring}', options: [{ value: 'series', label: 'in series' }, { value: 'parallel', label: 'in parallel' }], value: 'series', aria: 'how the four resistors are wired' });
  const R1 = 1.00, R2 = 6.00;
  function draw() {
    const { ctx } = begin(d.c);
    const rs = [R1, R2, R3.v, R4.v], names = ['R_1', 'R_2', 'R_3', 'R_4'];
    const series = how.value === 'series';
    const tot = series ? rs.reduce((a, b) => a + b, 0) : par(...rs);
    const big = Math.max(...rs), small = Math.min(...rs);
    headline(ctx, series
      ? 'Wired one after the other, the four resistors together come to ' + fmt(tot, 1) + ' Ω, which is more than the largest of them on its own.'
      : 'Wired each on a path of its own, the four resistors together come to ' + fmt(tot, 2) + ' Ω, which is less than the smallest of them on its own.');
    if (series) {
      wires(ctx, [[180, 200], [180, 470], [1240, 470], [1240, 200], [180, 200]]);
      cell(ctx, 180, 335, 'up', null);
      [300, 560, 820, 1080].forEach((x, i) => resistor(ctx, x, 200, true, names[i], rs[i]));
      flow(ctx, 700, 470, -1, 0, 'I');
      [430, 690, 950].forEach((x) => flow(ctx, x, 200, 1, 0, null, { len: 44, w: 4 }));
      text(ctx, 'the same current passes through every one of them', 710, 530, PAL.muted, { size: 19, align: 'center' });
    } else {
      wires(ctx, [[180, 200], [1200, 200]]);
      wires(ctx, [[180, 470], [1200, 470]]);
      wires(ctx, [[180, 200], [180, 470]]);
      cell(ctx, 180, 335, 'up', null);
      [420, 680, 940, 1200].forEach((x, i) => {
        wires(ctx, [[x, 200], [x, 470]]); resistor(ctx, x, 335, false, names[i], rs[i]);
        if (i < 3) node(ctx, x, 200); if (i < 3) node(ctx, x, 470);
        flow(ctx, x, 252, 0, 1, null, { len: 40, w: 4, side: -1 });
      });
      flow(ctx, 300, 200, 1, 0, 'I');
      text(ctx, 'the current divides among the four paths', 710, 530, PAL.muted, { size: 19, align: 'center' });
    }
    readout(d.readout,
      series
        ? '\\kRess = ' + rs.map((r) => ohm(r)).join(' + ') + ' = ' + ohm(tot)
        : '\\dfrac{1}{\\kResp} = ' + rs.map((r) => '\\dfrac{1}{' + ohm(r) + '}').join(' + ')
          + ' \\quad\\Rightarrow\\quad \\kResp = ' + ohm(tot),
      series
        ? 'The largest of the four on its own is ' + fmt(big, big < 10 ? 2 : 1) + ' Ω, and the four in series come to more than that, because the current has to pass through each of them in turn.'
        : 'The smallest of the four on its own is ' + fmt(small, small < 10 ? 2 : 1) + ' Ω, and the four in parallel come to less than that, because every path added gives the current somewhere else to go.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 21.3 + 21.4 + 21.6 folded: one battery and three resistors in the
   three wirings this section works through, each beside the single resistance
   it reduces to. Still, for the same reason as Figure 21.2.
===================================================================== */
(function () {
  const d = sim('sim-three-resistors', 660);
  const Vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the voltage the source puts out' });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 1, unit: 'Ω', dec: 2, aria: 'the first resistance' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 2, aria: 'the second resistance' });
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 13, unit: 'Ω', dec: 2, aria: 'the third resistance' });
  const how = F.select(d.controls, {
    label: '\\text{the wiring}',
    options: [{ value: 'series', label: 'all three in series' }, { value: 'parallel', label: 'all three in parallel' }, { value: 'mixed', label: 'R₂ and R₃ in parallel, in series with R₁' }],
    value: 'series', aria: 'how the three resistors are wired',
  });
  /* the equivalent circuit, drawn to the right of whichever wiring is shown */
  function equivalent(ctx, name, ohmsv, V) {
    wires(ctx, [[900, 230], [1300, 230], [1300, 480], [900, 480], [900, 230]]);
    cell(ctx, 900, 355, 'up', fmt(V, 1) + ' V');
    resistor(ctx, 1100, 230, true, name, ohmsv);
    text(ctx, 'the one resistance it comes to', 1100, 530, PAL.muted, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const V = Vs.v, r1 = R1.v, r2 = R2.v, r3 = R3.v, vc = C('voltage'), cc = C('current');
    let main = '', small = '', head = '';
    if (how.value === 'series') {
      const Rs = r1 + r2 + r3, I = V / Rs, vs = [I * r1, I * r2, I * r3], P = V * I;
      head = 'The three resistors in series come to ' + fmt(Rs, 2) + ' Ω, so the source drives ' + fmt(I, 3) + ' A through all three of them.';
      wires(ctx, [[160, 230], [720, 230], [720, 480], [160, 480], [160, 230]]);
      cell(ctx, 160, 355, 'up', fmt(V, 1) + ' V');
      [280, 440, 600].forEach((x, i) => {
        resistor(ctx, x, 230, true, 'R_' + (i + 1), [r1, r2, r3][i]);
        text(ctx, 'V_' + (i + 1) + ' = ' + fmt(vs[i], 2) + ' V', x, 330, vc, { size: 20, weight: 600, align: 'center' });
      });
      flow(ctx, 440, 480, -1, 0, 'I = ' + fmt(I, 3) + ' A');
      text(ctx, 'the same current in every resistor', 440, 540, PAL.muted, { size: 19, align: 'center' });
      equivalent(ctx, 'R_s', Rs, V);
      main = '\\kRess = \\kResone + \\kRestwo + \\kResthree = ' + ohm(Rs) + ',\\quad \\kIcur = \\dfrac{\\kV}{\\kRess} = ' + fmt(I, 3) + '\\ \\text{A}';
      small = 'The three voltage drops are ' + vs.map((v) => fmt(v, 2) + ' V').join(', ') + ', and they add to the ' + fmt(V, 1) + ' V the source puts out. The source delivers ' + fmt(P, 2) + ' W.';
    } else if (how.value === 'parallel') {
      const Rp = par(r1, r2, r3), I = V / Rp, is = [V / r1, V / r2, V / r3], P = V * I;
      head = 'The three resistors in parallel come to ' + fmt(Rp, 3) + ' Ω, less than the smallest of them, so the source drives ' + fmt(I, 2) + ' A.';
      wires(ctx, [[160, 230], [740, 230]]);
      wires(ctx, [[160, 480], [740, 480]]);
      wires(ctx, [[160, 230], [160, 480]]);
      cell(ctx, 160, 355, 'up', fmt(V, 1) + ' V');
      [300, 520, 740].forEach((x, i) => {
        wires(ctx, [[x, 230], [x, 480]]);
        if (i < 2) { node(ctx, x, 230); node(ctx, x, 480); }
        resistor(ctx, x, 355, false, 'R_' + (i + 1), [r1, r2, r3][i], { side: i === 0 ? 1 : -1 });
        flow(ctx, x, 278, 0, 1, null, { len: 40, w: 4, side: i === 0 ? 1 : -1 });
        text(ctx, 'I_' + (i + 1) + ' = ' + fmt(is[i], 2) + ' A', x, 524, cc, { size: 20, weight: 600, align: 'center' });
      });
      flow(ctx, 230, 230, 1, 0, 'I = ' + fmt(I, 2) + ' A', { len: 56 });
      text(ctx, 'every resistor has the full ' + fmt(V, 1) + ' V across it', 450, 180, vc, { size: 20, align: 'center' });
      equivalent(ctx, 'R_p', Rp, V);
      main = '\\dfrac{1}{\\kResp} = \\dfrac{1}{\\kResone} + \\dfrac{1}{\\kRestwo} + \\dfrac{1}{\\kResthree} \\quad\\Rightarrow\\quad \\kResp = ' + ohm(Rp) + ',\\quad \\kIcur = ' + fmt(I, 2) + '\\ \\text{A}';
      small = 'The three branch currents are ' + is.map((i) => fmt(i, 2) + ' A').join(', ') + ', and they add to the ' + fmt(I, 2) + ' A the source drives. The source delivers ' + fmt(P, 1) + ' W.';
    } else {
      const Rp = par(r2, r3), Rt = r1 + Rp, I = V / Rt, V1 = I * r1, Vp = V - V1, i2 = Vp / r2, i3 = Vp / r3, P2 = i2 * i2 * r2;
      head = 'A parallel pair behind a resistor in series with it comes to ' + fmt(Rt, 2) + ' Ω, and of the ' + fmt(V, 1) + ' V the source puts out only ' + fmt(Vp, 2) + ' V reaches the pair.';
      wires(ctx, [[160, 200], [720, 200], [720, 480], [160, 480], [160, 200]]);
      wires(ctx, [[480, 200], [480, 350], [720, 350]]);
      node(ctx, 480, 200); node(ctx, 720, 350);
      cell(ctx, 160, 340, 'up', fmt(V, 1) + ' V');
      resistor(ctx, 310, 200, true, 'R_1', r1);
      resistor(ctx, 600, 200, true, 'R_2', r2);
      resistor(ctx, 600, 350, true, 'R_3', r3);
      flow(ctx, 300, 480, -1, 0, 'I = ' + fmt(I, 2) + ' A');
      flow(ctx, 520, 200, 1, 0, 'I_2 = ' + fmt(i2, 2) + ' A', { len: 44, side: -1 });
      flow(ctx, 500, 350, 1, 0, 'I_3 = ' + fmt(i3, 2) + ' A', { len: 36, side: 1 });
      text(ctx, 'V_1 = ' + fmt(V1, 2) + ' V', 310, 290, vc, { size: 20, weight: 600, align: 'center' });
      text(ctx, 'V_p = ' + fmt(Vp, 2) + ' V across the pair', 600, 444, vc, { size: 20, weight: 600, align: 'center' });
      equivalent(ctx, 'R_tot', Rt, V);
      main = '\\kRestot = \\kResone + \\kResp = ' + ohm(r1) + ' + ' + ohm(Rp) + ' = ' + ohm(Rt) + ',\\quad \\kIcur = ' + fmt(I, 2) + '\\ \\text{A}';
      small = 'The resistor in series takes ' + fmt(V1, 2) + ' V, so the pair behind it has only ' + fmt(Vp, 2) + ' V, and the current through R₂ is ' + fmt(i2, 2) + ' A, which dissipates ' + fmt(P2, 1) + ' W in it.';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.5: seven resistors reduced to one, a step at a time. Still: the
   reduction is a piece of arithmetic the reader walks through, not a motion.
   The seven names stay on, past root rule 26.7's six, because a schematic
   whose resistors are unnamed cannot be read; they sit on a fixed lattice
   that no slider moves and they collide at neither slider extreme.
===================================================================== */
(function () {
  const d = sim('sim-reduce-network', 660);
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the second resistance' });
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 1, aria: 'the third resistance' });
  const step = choice(d.controls, {
    label: '\\text{the step}',
    options: [1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: String(n) })),
    value: '1', aria: 'how far the reduction has been carried',
  });
  const r1 = 1.0, r4 = 12.0, r5 = 3.0, r6 = 6.0, r7 = 20.0;
  /* the lattice: the top wire, the lower path R₇ takes, the return, and the two
     side wires; the three-resistor group sits on rows either side of the top wire */
  const TOP = 260, LOW = 450, BOT = 580, A = 430, B = 1180, ROWS = [155, 260, 365], ROWS2 = [210, 310];
  function draw() {
    const { ctx } = begin(d.c);
    const k = +step.value, r2 = R2.v, r3 = R3.v;
    const Rp = par(r2, r3, r4), Rq = par(r5, r6), Rs = Rp + Rq, Rpp = par(Rs, r7), Rtot = r1 + Rpp;
    const HEADS = [
      'The three resistors in parallel and the pair in parallel are each combined first, because a parallel group is the easiest part of the network to pick out.',
      'The two equivalent resistances now sit one after the other, so they simply add.',
      'That one resistance and R₇ lie on two paths between the same pair of points, so they combine as a parallel pair.',
      'What is left is one resistance in series with R₁, and the network has come down to a single resistance.',
      'The whole network of seven resistors is one resistance of ' + fmt(Rtot, 2) + ' Ω across the source.',
    ];
    headline(ctx, HEADS[k - 1]);
    /* the frame every step keeps: the source, the two side wires and the return */
    wires(ctx, [[150, TOP], [150, BOT], [B, BOT], [B, TOP]]);
    cell(ctx, 150, (TOP + BOT) / 2, 'up', null);
    if (k <= 4) { wires(ctx, [[150, TOP], [A, TOP]]); resistor(ctx, 290, TOP, true, 'R_1', r1); }
    if (k <= 3) {                                   /* the lower path R₇ takes between the same two points */
      wires(ctx, [[A, TOP], [A, LOW], [B, LOW], [B, TOP]]);
      node(ctx, A, TOP); node(ctx, B, TOP);
      resistor(ctx, 805, LOW, true, 'R_7', r7, { stack: 'below' });
    }
    if (k === 1) {
      spot(ctx, 452, 105, 812, 412); spot(ctx, 826, 160, 1164, 360);
      ROWS.forEach((y, i) => { wires(ctx, [[A, y], [810, y]]); resistor(ctx, 640, y, true, ['R_2', 'R_3', 'R_4'][i], [r2, r3, r4][i]); });
      wires(ctx, [[A, ROWS[0]], [A, ROWS[2]]]); wires(ctx, [[810, ROWS[0]], [810, ROWS[2]]]);
      node(ctx, 810, TOP);
      ROWS2.forEach((y, i) => { wires(ctx, [[840, y], [1150, y]]); resistor(ctx, 995, y, true, ['R_5', 'R_6'][i], [r5, r6][i]); });
      wires(ctx, [[840, ROWS2[0]], [840, ROWS2[1]]]); wires(ctx, [[1150, ROWS2[0]], [1150, ROWS2[1]]]);
      wires(ctx, [[810, TOP], [840, TOP]]); wires(ctx, [[1150, TOP], [B, TOP]]);
      node(ctx, 840, TOP); node(ctx, 1150, TOP);
    } else if (k === 2) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      spot(ctx, 500, TOP - 100, 1100, TOP + 100);
      resistor(ctx, 660, TOP, true, 'R_p', Rp);
      resistor(ctx, 950, TOP, true, 'R_p′', Rq);
    } else if (k === 3) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      spot(ctx, 690, TOP - 100, 920, TOP + 100); spot(ctx, 690, LOW - 80, 920, LOW + 80);
      resistor(ctx, 805, TOP, true, 'R_s', Rs);
    } else if (k === 4) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      spot(ctx, 200, TOP - 100, 385, TOP + 100); spot(ctx, 690, TOP - 100, 920, TOP + 100);
      resistor(ctx, 805, TOP, true, 'R_p″', Rpp);
    } else {
      wires(ctx, [[150, TOP], [B, TOP]]);
      spot(ctx, 570, TOP - 100, 800, TOP + 100);
      resistor(ctx, 685, TOP, true, 'R_s′', Rtot);
    }
    const MAIN = [
      '\\dfrac{1}{\\kResp} = \\dfrac{1}{' + ohm(r2) + '} + \\dfrac{1}{' + ohm(r3) + '} + \\dfrac{1}{' + ohm(r4) + '} \\Rightarrow \\kResp = ' + ohm(Rp),
      '\\kRess = ' + ohm(Rp) + ' + ' + ohm(Rq) + ' = ' + ohm(Rs),
      '\\dfrac{1}{\\kResp} = \\dfrac{1}{' + ohm(Rs) + '} + \\dfrac{1}{' + ohm(r7) + '} \\Rightarrow \\kResp = ' + ohm(Rpp),
      '\\kRestot = \\kResone + ' + ohm(Rpp) + ' = ' + ohm(Rtot),
      '\\kRestot = ' + ohm(Rtot),
    ];
    const SMALL = [
      'The pair R₅ and R₆ is combined in the same step, and it comes to ' + fmt(Rq, 2) + ' Ω. Four steps in all bring the seven resistances down to ' + fmt(Rtot, 2) + ' Ω.',
      'Each of the two came from a parallel group, and in series they add to ' + fmt(Rs, 2) + ' Ω.',
      'The pair in parallel comes to ' + fmt(Rpp, 2) + ' Ω, which is less than either of them.',
      'R₁ carries the whole current of the circuit, so it is in series with everything behind it.',
      'Every one of the seven resistances is inside this one number, and the source sees nothing else.',
    ];
    readout(d.readout, MAIN[k - 1], SMALL[k - 1]);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.7: why the light dims when the motor comes on. Still: switching
   the motor on is a state of the circuit and not a motion, so the figure
   answers its choice and its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-dimming-light', 580);
  const Rw = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0, max: 1.6, step: 0.05, value: 0.4, unit: 'Ω', dec: 2, aria: 'the resistance of the wires' });
  const Rb = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 100, max: 400, step: 4, value: 192, unit: 'Ω', dec: 0, aria: 'the resistance of the bulb' });
  const Rm = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 4, max: 40, step: 0.5, value: 9.5, unit: 'Ω', dec: 1, aria: 'the resistance of the motor' });
  const sw2 = choice(d.controls, { label: '\\text{the motor}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'running' }], value: 'off', aria: 'whether the motor is running' });
  const V = 120.0;
  function draw() {
    const { ctx } = begin(d.c);
    const rw = Rw.v, rb = Rb.v, rm = Rm.v, on = sw2.value === 'on', rc = C('resistance');
    const Rload = on ? par(rb, rm) : rb, I = V / (rw + Rload), Vp = V - I * rw, Pb = Vp * Vp / rb;
    const Pfull = V * V / rb, frac = Math.max(0, Math.min(1, Pb / Pfull));
    headline(ctx, on
      ? 'With the motor running the wires carry ' + fmt(I, 1) + ' A, the drop in them leaves the bulb ' + fmt(Vp, 1) + ' V of the supply, and it gives out ' + fmt(Pb, 1) + ' W.'
      : 'With the motor switched off the wires carry only ' + fmt(I, 2) + ' A, the bulb keeps ' + fmt(Vp, 1) + ' V of the supply, and it gives out ' + fmt(Pb, 1) + ' W.');
    wires(ctx, [[170, 200], [1030, 200]]);
    wires(ctx, [[170, 480], [1030, 480]]);
    wires(ctx, [[170, 200], [170, 480]]);
    cell(ctx, 170, 340, 'up', fmt(V, 1) + ' V');
    resistor(ctx, 380, 200, true, 'R_1', rw);
    text(ctx, 'the wires', 380, 132, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 560, 200, 1, 0, 'I = ' + fmt(I, 2) + ' A');
    /* the bulb on its own path, and the motor on a path of its own behind a switch */
    wires(ctx, [[700, 200], [700, 480]]);
    node(ctx, 700, 200); node(ctx, 700, 480);
    bulb(ctx, 700, 340, frac);
    text(ctx, 'R_2', 636, 326, rc, { size: 24, weight: 600, align: 'right' });
    text(ctx, fmt(rb, 0) + ' Ω', 636, 356, rc, { size: 21, align: 'right' });
    text(ctx, 'the bulb', 764, 340, PAL.muted, { size: 19, align: 'left' });
    wires(ctx, [[1030, 200], [1030, 480]]);
    sw(ctx, 1030, 262, Math.PI / 2, on);
    resistor(ctx, 1030, 385, false, 'R_3', rm);
    text(ctx, on ? 'the motor, running' : 'the motor, switched off', 1030, 520, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'V_p = ' + fmt(Vp, 1) + ' V reaches the bulb', 700, 546, C('voltage'), { size: 21, weight: 600, align: 'center' });
    readout(d.readout,
      '\\kVp = \\kV - \\kIcur\\kResone = ' + fmt(V, 1) + '\\ \\text{V} - (' + fmt(I, 2) + '\\ \\text{A})(' + ohm(rw) + ') = ' + fmt(Vp, 1) + '\\ \\text{V}, \\quad \\kPtwopow = \\dfrac{\\kVp^{2}}{\\kRestwo} = ' + fmt(Pb, 1) + '\\ \\text{W}',
      on
        ? 'The motor draws a large current through the wires, the drop in them grows, and the bulb is left with ' + fmt(100 * Pb / Pfull, 0) + ' per cent of the power it has when the motor is off.'
        : 'With nothing but the bulb on the supply the current is small, so the wires take almost nothing and the bulb has practically the full supply voltage.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
