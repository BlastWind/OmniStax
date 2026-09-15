/* Figures for section 21.6 DC Circuits Containing Resistors and Capacitors.
   Both figures move, because charging and discharging a capacitor are events in
   time and the whole of the section is how long they take: each registers a cycle
   and carries the app's transport. The page binds the voltage, the time, the
   capacitance, the resistance, the current and the charge, which is what
   ch21/COLOR.md gives 21.6; the wires, the battery, the plates, the lamp and the
   frame are ink. Resistances are in kilohms and capacitances in microfarads, so a
   time constant in milliseconds is simply their product. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const TAU2 = 2 * Math.PI;

/* ---------- the pieces both schematics are drawn from, all in ink ---------- */
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
/* A resistor lying along a horizontal wire, its name and its resistance beside it
   in the resistance hue. */
function resistor(ctx, x, y, name, kohm) {
  const w = 132, h = 46;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, name, x, y - h / 2 - 24, C('resistance'), { size: 24, weight: 600, align: 'center' });
  if (kohm !== null) text(ctx, fmt(kohm, 2) + ' kΩ', x, y + h / 2 + 24, C('resistance'), { size: 21, align: 'center' });
}
/* A battery standing on a vertical wire, long plate uppermost, its emf beside it. */
function battery(ctx, x, y, volts) {
  const plates = [[26, 5], [13, 5], [26, 5], [13, 5]];
  let yy = y - 33;
  plates.forEach(([half, w], i) => { line(ctx, x - half, yy, x + half, yy, PAL.ink, w); yy += i % 2 === 0 ? 20 : 22; });
  if (volts !== null) text(ctx, fmt(volts, 1) + ' V', x - 40, y, C('voltage'), { size: 22, weight: 600, align: 'right' });
}
/* A capacitor standing on a vertical wire: two plates with a gap, the wire broken
   between them, the charge on each plate named beside it in the charge hue. */
function capacitor(ctx, x, y, farads, q, showQ) {
  line(ctx, x - 46, y - 16, x + 46, y - 16, PAL.ink, 5);
  line(ctx, x - 46, y + 16, x + 46, y + 16, PAL.ink, 5);
  text(ctx, fmt(farads, 2) + ' μF', x + 62, y + 46, C('capacitance'), { size: 21, align: 'left' });
  text(ctx, 'C', x + 62, y + 12, C('capacitance'), { size: 24, weight: 600, align: 'left' });
  if (showQ) {
    text(ctx, '+q = ' + fmt(q, 1) + ' μC', x - 62, y - 30, C('charge'), { size: 20, weight: 600, align: 'right' });
    text(ctx, '−q', x - 62, y + 34, C('charge'), { size: 20, weight: 600, align: 'right' });
  }
}
/* A closed switch on a horizontal wire. */
function switchClosed(ctx, x, y) {
  dot(ctx, x - 34, y, PAL.ink, true, 7); dot(ctx, x + 34, y, PAL.ink, true, 7);
  line(ctx, x - 34, y, x + 34, y - 4, PAL.ink, 3.5);
  text(ctx, 'the switch, closed at t = 0', x, y + 34, PAL.muted, { size: 18, align: 'center' });
}
/* The current in a wire: an arrow whose length follows the current, drawn in the
   current hue with its value beside it. Direction dx is +1 to the right. */
function flow(ctx, x, y, dx, frac, label) {
  const cc = C('current'), L = 34 + 76 * Math.max(0, Math.min(1, frac));
  arrow(ctx, x - dx * L / 2, y, x + dx * L / 2, y, cc, 5);
  text(ctx, label, x, y - 26, cc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
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
    if (charging) {
      wires(ctx, [[L, T], [Rx, T]]);
      wires(ctx, [[Rx, T], [Rx, 259]]);
      wires(ctx, [[Rx, 291], [Rx, B]]);
      wires(ctx, [[Rx, B], [L, B]]);
      wires(ctx, [[L, B], [L, T]]);
      battery(ctx, L, 285, E.v);
      resistor(ctx, 700, T, 'R', R.v);
      capacitor(ctx, Rx, 275, Cc.v, q, true);
      switchClosed(ctx, 700, B);
      flow(ctx, 540, B, -1, I / (E.v / R.v), 'I = ' + fmt(I, 2) + ' mA');
      text(ctx, 'the source drives charge onto the plates', 700, 470, PAL.muted, { size: 19, align: 'center' });
    } else {
      wires(ctx, [[L, T], [Rx, T]]);
      wires(ctx, [[Rx, T], [Rx, 259]]);
      wires(ctx, [[Rx, 291], [Rx, B]]);
      wires(ctx, [[Rx, B], [L, B]]);
      wires(ctx, [[L, B], [L, T]]);
      resistor(ctx, 700, T, 'R', R.v);
      capacitor(ctx, Rx, 275, Cc.v, q, true);
      switchClosed(ctx, 700, B);
      flow(ctx, 540, B, 1, I / (E.v / R.v), 'I = ' + fmt(I, 2) + ' mA');
      text(ctx, 'the charge on the plates drives its own current', 700, 470, PAL.muted, { size: 19, align: 'center' });
    }
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
    /* ---- the circuit: the battery and R charge the capacitor, the lamp sits across it ---- */
    const L = 340, M = 760, Rx = 1080, T = 160, B = 410;
    wires(ctx, [[L, T], [Rx, T]]);
    wires(ctx, [[L, B], [Rx, B]]);
    wires(ctx, [[L, B], [L, T]]);
    wires(ctx, [[M, T], [M, 259]]);
    wires(ctx, [[M, 291], [M, B]]);
    wires(ctx, [[Rx, T], [Rx, 235]]);
    wires(ctx, [[Rx, 315], [Rx, B]]);
    battery(ctx, L, 285, EMF);
    resistor(ctx, 540, T, 'R', R.v / 1000);
    capacitor(ctx, M, 275, Cc.v, Cc.v * V, false);
    lamp(ctx, Rx, 275, firing);
    flow(ctx, 900, B, -1, firing ? V / Vth : (EMF - V) / EMF, 'I = ' + (I < 1 ? fmt(I, 3) : fmt(I, 1)) + ' mA');
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

/* A schematic lamp: a circle with a cross in it, in ink; when it conducts, rays
   are struck out from it and it is named as flashing, so the figure reads the
   same with the type colours turned off. */
function lamp(ctx, x, y, firing) {
  const r = 40;
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU2); ctx.fill(); ctx.stroke();
  const k = r * 0.62;
  ctx.beginPath(); ctx.moveTo(x - k, y - k); ctx.lineTo(x + k, y + k); ctx.moveTo(x + k, y - k); ctx.lineTo(x - k, y + k); ctx.stroke();
  if (firing) {
    ctx.lineWidth = 3;
    for (let i = 0; i < 8; i++) { const a = (i * TAU2) / 8 + 0.2; ctx.beginPath(); ctx.moveTo(x + (r + 10) * Math.cos(a), y + (r + 10) * Math.sin(a)); ctx.lineTo(x + (r + 30) * Math.cos(a), y + (r + 30) * Math.sin(a)); ctx.stroke(); }
  }
  ctx.restore();
  text(ctx, firing ? 'the lamp, flashing' : 'the lamp', x, y + r + 48, PAL.ink, { size: 21, weight: 600, align: 'center' });
}
};
