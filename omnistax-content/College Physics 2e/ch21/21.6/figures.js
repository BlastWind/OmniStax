/* Figures for section 21.6 DC Circuits Containing Resistors and Capacitors.
   Both figures move, because charging and discharging a capacitor are events in
   time and the whole of the section is how long they take: each registers a cycle
   and carries the app's transport. The page binds the voltage, the time, the
   capacitance, the resistance, the current and the charge, which is what
   ch21/COLOR.md gives 21.6; the wires, the cell, the plates, the lamp and the
   frame are ink. Resistances are in kilohms and capacitances in microfarads, so a
   time constant in milliseconds is simply their product. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const TAU2 = 2 * Math.PI;
const ohms = (k) => fmt(k, 2) + ' kΩ';

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
/* A capacitor standing on a vertical wire: two equal plates with the wire broken
   between them, its name and value in the capacitance hue on the right and the
   charge on each plate in the charge hue on the left. */
function capacitor(ctx, x, y, farads, q, showQ) {
  gap(ctx, x, y, Math.PI / 2, 22, 8);
  line(ctx, x - 38, y - 11, x + 38, y - 11, PAL.ink, 5);
  line(ctx, x - 38, y + 11, x + 38, y + 11, PAL.ink, 5);
  text(ctx, 'C', x + 56, y - 14, C('capacitance'), { size: 24, weight: 600, align: 'left' });
  text(ctx, fmt(farads, 2) + ' μF', x + 56, y + 16, C('capacitance'), { size: 21, align: 'left' });
  if (showQ) {
    text(ctx, '+q = ' + fmt(q, 1) + ' μC', x - 56, y - 26, C('charge'), { size: 20, weight: 600, align: 'right' });
    text(ctx, '−q', x - 56, y + 28, C('charge'), { size: 20, weight: 600, align: 'right' });
  }
}
/* The current in a wire: an arrow beside the wire whose length follows the current,
   in the current hue with its value beyond it. dx is +1 to the right. */
function current(ctx, x, y, dx, frac, label) {
  flow(ctx, x, y, dx, 0, label, { len: 34 + 76 * Math.max(0, Math.min(1, frac)), side: dx > 0 ? -1 : 1 });
}

/* =====================================================================
   FIGURES 21.37 + 21.38 folded: one resistor and one capacitor in a loop,
   charged by the source or discharged through the resistor, with the voltage
   across the capacitor drawn against time below. Moving, because the whole
   idea is how the voltage gets where it is going; one loop runs from the
   closing of the switch to five time constants.
   The time axis is fixed at 0 to 100 ms, which is five time constants at the
   largest resistance and capacitance the sliders reach, and the voltage axis
   at 0 to 24 V, the largest emf they reach; a marker past an edge is pinned.
===================================================================== */
(function () {
  const d = sim('sim-rc-charge-discharge', 900);
  const E = ctl(d.controls, { label: '\\kemf', cls: 'voltage', min: 2, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, onInput: reset, aria: 'the emf of the source' });
  const R = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.2, max: 5, step: 0.1, value: 1, unit: 'kΩ', dec: 2, onInput: reset, aria: 'the resistance' });
  const Cc = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 2, max: 20, step: 0.5, value: 8, unit: 'μF', dec: 2, onInput: reset, aria: 'the capacitance' });
  const mode = choice(d.controls, {
    label: '\\text{the capacitor is}',
    options: [{ value: 'charging', label: 'charging' }, { value: 'discharging', label: 'discharging' }],
    value: 'charging', aria: 'whether the capacitor is being charged or discharged', onInput: reset,
  });
  const tauOf = () => R.v * Cc.v;                      /* kΩ × μF = ms */
  const cy = cycle(() => 5 * tauOf(), 1.2);            /* one loop runs to five time constants */
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = tauOf(), t = cy.now(), charging = mode.value === 'charging';
    const f = Math.exp(-t / tau);
    const V = charging ? E.v * (1 - f) : E.v * f;      /* volts */
    const I = (E.v / R.v) * f;                          /* V / kΩ = mA */
    const q = Cc.v * V;                                 /* μF × V = μC */
    /* ---- the circuit ---- */
    const L = 380, Rx = 1020, T = 160, B = 410;
    wires(ctx, [[L, T], [Rx, T], [Rx, B], [L, B], [L, T]]);
    if (charging) cell(ctx, L, 285, 'up', fmt(E.v, 1) + ' V');
    resistor(ctx, 700, T, true, 'R', ohms(R.v));
    capacitor(ctx, Rx, 285, Cc.v, q, true);
    sw(ctx, 700, B, 0, true);
    text(ctx, 'the switch, closed at t = 0', 700, B + 40, PAL.muted, { size: 18, align: 'center' });
    current(ctx, 520, B, charging ? -1 : 1, I / (E.v / R.v), 'I = ' + fmt(I, 2) + ' mA');
    text(ctx, charging ? 'the source drives charge onto the plates' : 'the charge on the plates drives its own current', 700, 476, PAL.muted, { size: 19, align: 'center' });
    /* ---- the voltage across the capacitor against time ---- */
    const box = { l: 230, r: 1300, t: 560, b: 810 };
    const { X, Y } = axes(ctx, box, [0, 100], [0, 24], {
      xl: 'time (ms)', xc: C('time'), yl: 'voltage across the capacitor (V)', yc: C('voltage'), nx: 5, ny: 4,
    });
    line(ctx, box.l, Y(E.v), box.r, Y(E.v), alpha(C('voltage'), 0.5), 2.5, [10, 10]);
    text(ctx, charging ? 'emf = ' + fmt(E.v, 1) + ' V' : 'V₀ = ' + fmt(E.v, 1) + ' V', box.r - 8, Y(E.v) - 18, C('voltage'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    const fn = (s) => (charging ? E.v * (1 - Math.exp(-s / tau)) : E.v * Math.exp(-s / tau));
    curve(ctx, fn, 0, 100, X, Y, alpha(C('voltage'), 0.35), 3, 160);
    curve(ctx, fn, 0, Math.min(t, 100), X, Y, C('voltage'), 5, 160);
    if (tau <= 100) {
      line(ctx, X(tau), box.b, X(tau), Y(fn(tau)), alpha(C('time'), 0.7), 2.5, [4, 8]);
      dot(ctx, X(tau), Y(fn(tau)), C('time'), false, 10);
      text(ctx, 'one time constant, ' + fmt(tau, 2) + ' ms', X(tau) + 14, Y(fn(tau)) + (charging ? 34 : -26), C('time'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    }
    pinned(ctx, box, X, Y, t, V, C('voltage'), fmt(V, 2) + ' V');
    /* ---- the sentence over it all ---- */
    topline(ctx, charging
      ? 'After ' + fmt(t, 2) + ' ms the capacitor has reached ' + fmt(V, 2) + ' V of the ' + fmt(E.v, 1) + ' V the source puts out, and the current has fallen to ' + fmt(I, 2) + ' mA, because the time constant of this circuit is ' + fmt(tau, 2) + ' ms.'
      : 'After ' + fmt(t, 2) + ' ms the capacitor has fallen to ' + fmt(V, 2) + ' V of the ' + fmt(E.v, 1) + ' V it started with, and the current it drives has fallen to ' + fmt(I, 2) + ' mA, because the time constant of this circuit is ' + fmt(tau, 2) + ' ms.');
    readout(d.readout,
      charging
        ? `\\kV = \\kemf\\left(1 - e^{-\\kt/\\kRes\\kCap}\\right) = ${fmt(E.v, 1)}\\ \\text{V}\\left(1 - e^{-${fmt(t, 2)}/${fmt(tau, 2)}}\\right) = ${fmt(V, 2)}\\ \\text{V}`
        : `\\kV = \\kVzero\\, e^{-\\kt/\\kRes\\kCap} = ${fmt(E.v, 1)}\\ \\text{V}\\ e^{-${fmt(t, 2)}/${fmt(tau, 2)}} = ${fmt(V, 2)}\\ \\text{V}`,
      charging
        ? 'The time constant is τ = RC = ' + fmt(tau, 2) + ' ms, and in that time the voltage covers 0.632 of what is left to cover, so it reaches ' + fmt(0.632 * E.v, 2) + ' V by the marked point and ' + fmt(E.v * (1 - Math.exp(-5)), 2) + ' V after five time constants. The charge on each plate is now ' + fmt(q, 1) + ' μC.'
        : 'The time constant is τ = RC = ' + fmt(tau, 2) + ' ms, and in that time the voltage falls to 0.368 of what it was, so it is down to ' + fmt(0.368 * E.v, 2) + ' V at the marked point and to ' + fmt(E.v * Math.exp(-5), 2) + ' V after five time constants. The charge left on each plate is ' + fmt(q, 1) + ' μC.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tauOf()), draw });
})();

/* =====================================================================
   FIGURE 21.40: a lamp of very high resistance across the capacitor of a
   charging circuit. The capacitor charges through R until the voltage
   reaches the value that makes the lamp conduct, and then empties through
   the lamp in a flash. Moving, because the circuit repeats: one loop is one
   whole flash, and it is run in real time, since how often the lamp flashes
   is the thing the figure is about.
   The time axis is fixed at 0 to 4 s, which holds one whole period at the
   slowest setting and several at the fastest, and the voltage axis at
   0 to 12 V, the emf of the source.
===================================================================== */
(function () {
  const d = sim('sim-flashing-lamp', 900);
  const R = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 20, max: 150, step: 5, value: 100, unit: 'kΩ', dec: 0, onInput: reset, aria: 'the charging resistance' });
  const Cc = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 1, max: 8, step: 0.1, value: 4.7, unit: 'μF', dec: 1, onInput: reset, aria: 'the capacitance' });
  const fr = ctl(d.controls, { label: '\\text{threshold}', cls: '', min: 0.3, max: 0.9, step: 0.01, value: 0.63, unit: '× emf', dec: 2, onInput: reset, aria: 'the fraction of the emf at which the lamp fires' });
  const EMF = 12.0, RL = 1.0;                        /* the source, and the lamp once it conducts, in kΩ */
  const tauC = () => (R.v * Cc.v) / 1000;            /* kΩ × μF = ms, written here in seconds */
  const tauD = () => (RL * Cc.v) / 1000;
  const charge = () => -tauC() * Math.log(1 - fr.v); /* the time to reach the threshold */
  const flash = () => 5 * tauD();                    /* the lamp is lit while the capacitor empties */
  const period = () => charge() + flash();
  const cy = cycle(period, 0);                       /* no hold: the lamp simply flashes again */
  function reset() { cy.reset(); }
  /* the voltage on the capacitor at a time s into one period */
  const volt = (s) => {
    const tc = charge(), Vth = fr.v * EMF;
    return s <= tc ? EMF * (1 - Math.exp(-s / tauC())) : Vth * Math.exp(-(s - tc) / tauD());
  };
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), P = period(), V = volt(t), firing = t > charge();
    const Vth = fr.v * EMF, I = firing ? (V / RL) : ((EMF - V) / R.v);
    /* ---- the circuit: the source and R charge the capacitor, the lamp sits across it ---- */
    const L = 340, M = 760, Rx = 1080, T = 160, B = 410;
    wires(ctx, [[L, T], [Rx, T], [Rx, B], [L, B], [L, T]]);
    wires(ctx, [[M, T], [M, B]]);
    node(ctx, M, T); node(ctx, M, B);
    cell(ctx, L, 285, 'up', fmt(EMF, 1) + ' V');
    resistor(ctx, 540, T, true, 'R', fmt(R.v, 0) + ' kΩ');
    capacitor(ctx, M, 285, Cc.v, Cc.v * V, false);
    lamp(ctx, Rx, 285, firing);
    current(ctx, 900, B, -1, firing ? V / Vth : (EMF - V) / EMF, 'I = ' + (I < 1 ? fmt(I, 3) : fmt(I, 1)) + ' mA');
    text(ctx, firing ? 'the lamp conducts and the capacitor empties through it' : 'the lamp does not conduct, so the capacitor charges through R', 700, 480, PAL.muted, { size: 19, align: 'center' });
    /* ---- the sawtooth ---- */
    const box = { l: 230, r: 1300, t: 560, b: 810 };
    const { X, Y } = axes(ctx, box, [0, 4], [0, 12], {
      xl: 'time (s)', xc: C('time'), yl: 'voltage across the capacitor (V)', yc: C('voltage'), nx: 4, ny: 4, fx: (v) => fmt(v, 0),
    });
    line(ctx, box.l, Y(Vth), box.r, Y(Vth), alpha(C('voltage'), 0.5), 2.5, [10, 10]);
    text(ctx, 'the lamp fires at ' + fmt(Vth, 2) + ' V', box.r - 8, Y(Vth) - 18, C('voltage'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    curve(ctx, (s) => volt(s % P), 0, 4, X, Y, alpha(C('voltage'), 0.35), 3, 900);
    curve(ctx, (s) => volt(s), 0, Math.min(t, 4), X, Y, C('voltage'), 5, 400);
    pinned(ctx, box, X, Y, t, V, C('voltage'), fmt(V, 2) + ' V');
    topline(ctx, 'The capacitor charges through R for ' + fmt(charge(), 2) + ' s, the lamp fires at ' + fmt(Vth, 2) + ' V and empties it in ' + fmt(flash() * 1000, 0) + ' ms, so the lamp flashes every ' + fmt(P, 2) + ' s, which is ' + fmt(60 / P, 0) + ' times a minute.');
    readout(d.readout,
      `\\ktauRC = \\kRes\\kCap = (${fmt(R.v, 0)}\\ \\text{k}\\Omega)(${fmt(Cc.v, 1)}\\ \\mu\\text{F}) = ${fmt(tauC(), 2)}\\ \\text{s}`,
      'The lamp fires when the voltage reaches ' + fmt(fr.v, 2) + ' of the emf, which takes ' + fmt(charge(), 2) + ' s, or ' + fmt(charge() / tauC(), 2) + ' time constants. Raising either the resistance or the capacitance lengthens the time between flashes, and the discharge stays short because the lamp, once it conducts, has a resistance of only ' + fmt(RL, 1) + ' kΩ.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* A lamp on a vertical wire: the book's circle with a coiled filament, in ink; when it
   conducts, rays are struck out from it and it is named as flashing beside it, so the
   figure reads the same with the type colours turned off. */
function lamp(ctx, x, y, firing) {
  const r = 40;
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU2); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 28, y + 4); ctx.lineTo(x - 22, y + 4);
  for (let k = 0; k < 4; k++) ctx.arc(x - 16 + k * 11, y + 4, 5.5, Math.PI, 0, false);
  ctx.lineTo(x + 28, y + 4); ctx.stroke();
  if (firing) {
    ctx.lineWidth = 3;
    for (let i = 0; i < 8; i++) { const a = (i * TAU2) / 8 + 0.2; ctx.beginPath(); ctx.moveTo(x + (r + 10) * Math.cos(a), y + (r + 10) * Math.sin(a)); ctx.lineTo(x + (r + 30) * Math.cos(a), y + (r + 30) * Math.sin(a)); ctx.stroke(); }
  }
  ctx.restore();
  text(ctx, firing ? 'the lamp, flashing' : 'the lamp', x + r + 42, y, PAL.ink, { size: 21, weight: 600, align: 'left' });
}
};
