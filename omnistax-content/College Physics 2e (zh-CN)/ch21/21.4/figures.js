/* Figures for section 21.4 DC Voltmeters and Ammeters.
   A meter on a direct-current circuit rests at a steady reading, so every figure
   here is a still picture: none registers a cycle, none carries a transport, and
   a slider or a choice alone redraws it. The page binds the resistance, the
   current and the voltage, which is what ch21/COLOR.md gives 21.4. The voltmeter,
   the ammeter and the galvanometer the text names wear their referent colours on
   their faces; the wires, the source, the zigzags and the frame are ink. */
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
const tohms = (r) => { const [n, u] = ohms(r).split(' '), p = u.slice(0, -1); return n + '\\ ' + (p === 'µ' ? '\\mu' : p ? '\\text{' + p + '}' : '') + '\\Omega'; };

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
/* A meter: a ring with its letter in it, painted over the wire it sits on, in ink or
   in `color`, the referent colour of a meter the text names. */
function meterFace(ctx, x, y, letter, r, color) {
  const R = r || 42, c = color || PAL.ink;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = c; ctx.lineWidth = WIRE;
  ctx.beginPath(); ctx.arc(x, y, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  if (letter) text(ctx, letter, x, y, c, { size: 28, weight: 600, align: 'center' });
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
/* A meter face, in its referent colour `body`, with its reading set beneath it in the
   hue of what it reads. */
function meter(ctx, x, y, letter, reading, color, r, above, body) {
  const R = r || 42;
  meterFace(ctx, x, y, letter, R, body);
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
    label: '\\text{电表}',
    options: [{ value: 'V', label: '电压表' }, { value: 'A', label: '电流表' }],
    value: 'V', aria: '接入电路的是哪种电表',
  });
  const where = choice(d.controls, {
    label: '\\text{接入位置}',
    options: [{ value: 's', label: '在电源处' }, { value: '1', label: '在 R₁ 处' }, { value: '2', label: '在 R₂ 处' }],
    value: 's', aria: '电表接在电路的哪个位置',
  });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: '第一个电阻' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 8, unit: 'Ω', dec: 1, aria: '第二个电阻' });
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
    /* the meter, hung across what it measures or cut into the line; moved to another
       place it glides there along the loop, and a change of meter fades one into the other */
    let head = '', main = '', small = '';
    const reading = w === 's' ? Vt : w === '1' ? V1 : V2;
    F.faded(ctx, which.a('V'), [0, 0], () => {
      /* The meter hangs on two taps, each one a point of the loop, and its leads run
         along and across rather than cutting through the source or a resistor: for the
         source the taps are on the two wires that leave it, and for a resistor they sit
         on the top wire on either side of it. */
      const [mx, my, tapY] = where.mix((v) => (v === 's' ? [400, 395, BOT] : v === '1' ? [520, 400, TOP] : [900, 400, TOP]));
      const what = w === 's' ? '端电压' : w === '1' ? 'R₁ 两端的电压' : 'R₂ 两端的电压';
      wires(ctx, [[mx - 78, TOP], [mx - 78, my], [mx - 42, my]]);
      wires(ctx, [[mx + 78, tapY], [mx + 78, my], [mx + 42, my]]);
      node(ctx, mx - 78, TOP); node(ctx, mx + 78, tapY);
      meter(ctx, mx, my, 'V', fmt(reading, 2) + ' V', vc, 42, false, F.ref('voltmeter'));
      text(ctx, w === 's' ? '端电压' : what, w === 's' ? mx - 60 : mx, my + 96, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
    });
    F.faded(ctx, which.a('A'), [0, 0], () => {
      const [mx, my] = where.mix((v) => (v === 's' ? [320, TOP] : v === '1' ? [710, TOP] : [Rt, 385]));
      /* on the top wire the reading and its caption go above, clear of the resistors' names; on the right wire they go inside the loop */
      meter(ctx, mx, my, 'A', w === '2' ? null : fmt(I, 3) + ' A', cc, 42, true, F.ref('ammeter'));
      text(ctx, w === 's' ? '在离开电源的线路中' : w === '1' ? '在 R₁ 与 R₂ 之间的线路中' : '在 R₂ 之后的线路中',
        w === '2' ? mx - 60 : mx, w === '2' ? my + 66 : my - 98, PAL.muted, { size: 19, align: w === '2' ? 'right' : 'center' });
      if (w === '2') text(ctx, fmt(I, 3) + ' A', mx - 60, my + 36, cc, { size: 22, weight: 600, align: 'right' });
    });
    if (isV) {
      head = '电压表与它所测的对象并联，在这里它读出 ' + fmt(reading, 2) + ' V；移到另外两个位置中的任何一处，它读出的电压都不同，因为回路的每一部分各占一份。';
      main = w === 's'
        ? '\\kV = \\kemf - \\kIcur\\krint = ' + fmt(EMF, 1) + '\\ \\text{V} - (' + fmt(I, 3) + '\\ \\text{A})(' + fmt(r, 2) + '\\ \\Omega) = ' + fmt(Vt, 2) + '\\ \\text{V}'
        : '\\kV = \\kIcur\\kRes' + (w === '1' ? 'one' : 'two') + ' = (' + fmt(I, 3) + '\\ \\text{A})(' + fmt(w === '1' ? r1 : r2, 1) + '\\ \\Omega) = ' + fmt(reading, 2) + '\\ \\text{V}';
      small = '两个电阻两端的电压降 ' + fmt(V1, 2) + ' V 和 ' + fmt(V2, 2) + ' V 相加，等于端电压 ' + fmt(Vt, 2) + ' V。';
    } else {
      head = '电流表串接在线路中，所以全部电流都通过它，无论把它放在回路的什么位置，它都读出 ' + fmt(I, 3) + ' A。';
      main = '\\kIcur = \\dfrac{\\kemf}{\\krint + \\kResone + \\kRestwo} = \\dfrac{' + fmt(EMF, 1) + '\\ \\text{V}}{' + fmt(r + r1 + r2, 2) + '\\ \\Omega} = ' + fmt(I, 3) + '\\ \\text{A}';
      small = '这个回路只有一条通路，其上没有节点。';
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
  const Ig = ctl(d.controls, { label: '\\kIcurG', cls: 'current', min: 0, max: 60, step: 1, value: 25, unit: 'µA', dec: 0, aria: '通过电流计的电流' });
  const Is = ctl(d.controls, { label: '\\text{灵敏度}', cls: 'current', min: 10, max: 100, step: 5, value: 50, unit: 'µA', dec: 0, aria: '使电流计满偏的电流' });
  /* half scale and full scale, the two readings the text names, moved by the sensitivity */
  Ig.mark([{ at: () => Is.v / 2, label: '半刻度' }, { at: () => Is.v, label: '满刻度' }]);
  const rg = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 5, max: 100, step: 5, value: 25, unit: 'Ω', dec: 0, aria: '电流计的电阻' });
  const CX = 700, CY = 470, RAD = 300;
  function draw() {
    const { ctx } = begin(d.c);
    const i = Ig.v * 1e-6, s = Is.v * 1e-6, rr = rg.v;
    const frac = Math.min(1, i / s), over = i > s, V = i * rr, Vfull = s * rr, cc = C('current'), gc = F.ref('galvanometer');
    /* the dial: an arc from the left-hand zero to the right-hand full scale */
    const a0 = Math.PI * 1.15, a1 = Math.PI * 1.85;
    ctx.save(); ctx.strokeStyle = gc; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(CX - 340, CY - 330, 680, 360, 18); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = gc; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(CX, CY, RAD, a0, a1); ctx.stroke(); ctx.restore();
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
    text(ctx, 'G', CX, CY + 54, gc, { size: 28, weight: 600, align: 'center' });
    text(ctx, over ? '指针被顶在满刻度处' : fmt(100 * frac, 0) + ' %（满刻度）',
      CX, CY + 100, over ? PAL.ink : cc, { size: 22, weight: 600, align: 'center' });
    /* the two leads and the resistance of the movement itself */
    wires(ctx, [[CX - 300, CY + 170], [CX - 300, CY + 30]]);
    wires(ctx, [[CX + 300, CY + 170], [CX + 300, CY + 30]]);
    resistor(ctx, CX - 300, CY + 90, false, 'r', fmt(rr, 0) + ' Ω');
    node(ctx, CX - 300, CY + 170); node(ctx, CX + 300, CY + 170);
    text(ctx, '表头的两个接线端，其自身电阻接在其中一端', CX, CY + 208, gc, { size: 19, align: 'center' });
    headline(ctx, over
      ? '电流 ' + fmt(Ig.v, 0) + ' µA 超过了这个表头所能承受的 ' + fmt(Is.v, 0) + ' µA，所以指针被驱动越过刻度末端，读数丢失。'
      : '电流 ' + fmt(Ig.v, 0) + ' µA 通过满偏电流为 ' + fmt(Is.v, 0) + ' µA 的表头，使指针摆到满刻度的 ' + fmt(100 * frac, 0) + ' %。');
    readout(d.readout,
      '\\kV = \\kIcurG\\krint = (' + fmt(Ig.v, 0) + '\\ \\mu\\text{A})(' + fmt(rr, 0) + '\\ \\Omega) = ' + fmt(V * 1e3, 3) + '\\ \\text{mV}',
      '只需在这个表头两端加 ' + fmt(Vfull * 1e3, 2) + ' mV，就能把指针一直推到头。');
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
    label: '\\text{仪表}',
    options: [{ value: 'V', label: '电压表' }, { value: 'A', label: '电流表' }],
    value: 'V', aria: '把电流计改装成哪种仪表',
  });
  const Vfs = ctl(d.controls, { label: '\\kV\\ \\text{满刻度时}', cls: 'voltage', min: 0.5, max: 300, step: 0.5, value: 10, unit: 'V', dec: 1, aria: '要使读数达到满刻度的电压' });
  const Ifs = ctl(d.controls, { label: '\\kIcur\\ \\text{满刻度时}', cls: 'current', min: 0.05, max: 10, step: 0.05, value: 1, unit: 'A', dec: 2, aria: '要使读数达到满刻度的电流' });
  const rg = ctl(d.controls, { label: '\\krint', cls: 'resistance', min: 5, max: 100, step: 5, value: 25, unit: 'Ω', dec: 0, aria: '电流计的电阻' });
  const Is = ctl(d.controls, { label: '\\text{灵敏度}', cls: 'current', min: 10, max: 100, step: 5, value: 50, unit: 'µA', dec: 0, aria: '使电流计满偏的电流' });
  function draw() {
    const { ctx } = begin(d.c);
    const isV = which.value === 'V', rr = rg.v, s = Is.v * 1e-6, rc = C('resistance'), gc = F.ref('galvanometer');
    Vfs.disable(!isV); Ifs.disable(isV);
    const L = 240, R = 1160, Y = 270;
    let head = '', main = '', small = '';
    if (isV) {
      const Rtot = Vfs.v / s, Rx = Rtot - rr;
      wires(ctx, [[L, Y], [R, Y]]);
      resistor(ctx, 450, Y, true, 'R', ohms(Rx));
      meterFace(ctx, 830, Y, 'G', 42, gc);
      text(ctx, 'r = ' + fmt(rr, 0) + ' Ω', 830, Y + 72, rc, { size: 21, align: 'center' });
      node(ctx, L, Y, 10); node(ctx, R, Y, 10);
      text(ctx, '电压表的两个接线端', (L + R) / 2, Y - 110, PAL.muted, { size: 19, align: 'center' });
      text(ctx, '串联的大电阻', 450, Y + 72, PAL.muted, { size: 19, align: 'center' });
      text(ctx, '表头及其自身的电阻', 830, Y + 104, gc, { size: 19, align: 'center' });
      head = '要在满刻度时读出 ' + fmt(Vfs.v, 1) + ' V，一个 ' + fmt(rr, 0) + ' Ω、灵敏度为 ' + fmt(Is.v, 0) + ' µA 的表头需要与之串联 ' + ohms(Rx) + '。';
      main = '\\kRestot = \\kRes + \\krint = \\dfrac{\\kV}{\\kIcur} = \\dfrac{' + fmt(Vfs.v, 1) + '\\ \\text{V}}{' + fmt(Is.v, 0) + '\\ \\mu\\text{A}} = ' + tohms(Rtot);
      small = '几乎全部 ' + fmt(Vfs.v, 1) + ' V 都降在串联电阻上，表头只分得 ' + fmt(s * rr * 1e3, 2) + ' mV。';
    } else {
      const Rx = Ifs.v > s ? rr * s / (Ifs.v - s) : rr * 1e3;
      wires(ctx, [[L, Y], [420, Y]]); wires(ctx, [[980, Y], [R, Y]]);
      wires(ctx, [[420, Y], [420, Y - 110], [980, Y - 110], [980, Y]]);
      wires(ctx, [[420, Y], [420, Y + 110], [980, Y + 110], [980, Y]]);
      meterFace(ctx, 700, Y - 110, 'G', 42, gc);
      text(ctx, 'r = ' + fmt(rr, 0) + ' Ω', 700, Y - 110 - 68, rc, { size: 21, align: 'center' });
      resistor(ctx, 700, Y + 110, true, 'R', ohms(Rx));
      node(ctx, L, Y, 10); node(ctx, R, Y, 10);
      node(ctx, 420, Y); node(ctx, 980, Y);
      flow(ctx, 330, Y, 1, 0, 'I = ' + fmt(Ifs.v, 2) + ' A', { side: -1 });
      text(ctx, '并联的小分流电阻', 700, Y + 110 + 66, PAL.muted, { size: 19, align: 'center' });
      text(ctx, '表头', 700, Y - 110 + 68, gc, { size: 19, align: 'center' });
      head = '要在满刻度时读出 ' + fmt(Ifs.v, 2) + ' A，同一个表头只需在其两端并联一个 ' + ohms(Rx) + ' 的分流电阻。';
      main = '\\kRes = \\krint\\dfrac{\\kIcurG}{\\kIcur - \\kIcurG} = (' + fmt(rr, 0) + '\\ \\Omega)\\dfrac{' + fmt(Is.v, 0) + '\\ \\mu\\text{A}}{' + fmt(Ifs.v, 2) + '\\ \\text{A} - ' + fmt(Is.v, 0) + '\\ \\mu\\text{A}} = ' + tohms(Rx);
      small = '在流入的 ' + fmt(Ifs.v, 2) + ' A 中，除 ' + fmt(Is.v, 0) + ' µA 外，其余都绕道经过分流电阻。';
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
    label: '\\text{电表}',
    options: [{ value: 'V', label: '电压表，并联' }, { value: 'A', label: '电流表，串联' }],
    value: 'V', aria: '接入的是哪种电表',
  });
  const Rv = ctl(d.controls, { label: '\\text{电压表}', cls: 'resistance', min: 10, max: 2000, step: 10, value: 1000, unit: 'kΩ', dec: 0, aria: '电压表的电阻' });
  const Rd = ctl(d.controls, { label: '\\kRes\\ \\text{被跨接}', cls: 'resistance', min: 5, max: 200, step: 5, value: 75, unit: 'kΩ', dec: 0, aria: '电压表所跨接的电阻' });
  const Ra = ctl(d.controls, { label: '\\text{电流表}', cls: 'resistance', min: 0, max: 10, step: 0.02, value: 0.02, unit: 'Ω', dec: 2, aria: '电流表的电阻' });
  const Rb = ctl(d.controls, { label: '\\kRes\\ \\text{被串联}', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 10, unit: 'Ω', dec: 1, aria: '电流表所在支路的电阻' });
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
      text(ctx, '两个相等的电阻器分担电源的电压', 710, TOP - 92, PAL.muted, { size: 19, align: 'center' });
      wires(ctx, [[836, TOP], [836, 430], [858, 430]]); wires(ctx, [[964, TOP], [964, 430], [942, 430]]);
      node(ctx, 836, TOP); node(ctx, 964, TOP);
      meter(ctx, 900, 430, 'V', fmt(Vread, 3) + ' V', vc, 42, false, F.ref('voltmeter'));
      text(ctx, '电压表，' + ohms(rv), 900, 566, C('resistance'), { size: 20, align: 'center' });
      text(ctx, '没有电压表时，电阻器两端有 ' + fmt(Vtrue, 3) + ' V', 450, 470, vc, { size: 20, weight: 600, align: 'center' });
      head = '电压表的电阻是它所跨接电阻的 ' + fmt(rv / rd, 1) + ' 倍，它读出 ' + fmt(Vread, 3) + ' V，而仅有电阻器时应为 ' + fmt(Vtrue, 3) + ' V，误差为 ' + fmt(Math.abs(err), 2) + ' %。';
      main = '\\kV = \\kemf\\dfrac{\\kResp}{\\kRes + \\kResp} = ' + fmt(Vread, 3) + '\\ \\text{V}';
      small = '电阻器与电压表并联后的电阻为 ' + ohms(rp) + '。';
    } else {
      const rb = Rb.v, ra = Ra.v, Itrue = EMF / rb, Iread = EMF / (rb + ra);
      const err = 100 * (Iread - Itrue) / Itrue;
      resistor(ctx, 520, TOP, true, 'R', ohms(rb));
      meter(ctx, 900, TOP, 'A', fmt(Iread, 3) + ' A', cc, 42, false, F.ref('ammeter'));
      text(ctx, '电流表，' + ohms(ra), 900, TOP - 86, C('resistance'), { size: 20, align: 'center' });
      flow(ctx, 700, BOT, -1, 0, null);
      text(ctx, '没有电流表时，该支路载有 ' + fmt(Itrue, 3) + ' A', 700, BOT + 60, cc, { size: 20, weight: 600, align: 'center' });
      head = '电流表增加了 ' + ohms(ra) + '，加在 ' + ohms(rb) + ' 的支路上，它读出 ' + fmt(Iread, 3) + ' A，而仅有该支路时应载有 ' + fmt(Itrue, 3) + ' A，误差为 ' + fmt(Math.abs(err), 2) + ' %。';
      main = '\\kIcur = \\dfrac{\\kemf}{\\kRes + R_{\\text{A}}} = \\dfrac{' + fmt(EMF, 1) + '\\ \\text{V}}{' + tohms(rb) + ' + ' + tohms(ra) + '} = ' + fmt(Iread, 3) + '\\ \\text{A}';
      small = '串联的电阻相加，所以电阻足够小的电流表，在它所测的支路中可以忽略不计。';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
