/* Figures for section 23.9 Inductance. The page binds inductance,
   magnetic-flux, voltage, current, magnetic-field and energy, which is what
   ch23/COLOR.md gives it, and one more that plan.md argues for: time, for the
   interval a current is taken to fall in, which is the slider that makes the
   section's own arithmetic visible and the axis of two graphs. Mutual and
   self-inductance wear the one inductance hue and are told apart by their
   symbols and their labels, as the chapter's colour plan requires. Every device
   is ink: the coils and their turns, the cylinder of a heater element, the
   battery, the capacitor plates, the switch, the meter case and a solenoid's
   former, and the number of turns, the area, the length, the diameter and μ0
   stay in ink with them. A field drawn in space is in the field hue and the
   flux counted through a turn is in the flux hue, never the same one.
   Three of the six figures move, because an inductance is the constant between
   an emf and a rate; the winding of an element, the geometry of a solenoid and
   the energy it holds at a given current are states and not processes, so those
   three register no cycle and take no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, axes, curve, pinned, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = 2 * Math.PI, MU0 = 4 * Math.PI * 1e-7;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
/* a meter reading that grows with what it is given and never quite pins */
const soft = (x) => x / Math.sqrt(1 + x * x);
/* a number as a × 10^b, for the canvas and for KaTeX */
function sci(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  const sup = String(e).replace(/-/g, '−').replace(/[0-9]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]);
  return fmt(m, dp ?? 2) + ' × 10' + sup;
}
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}
/* an inductance written in the unit a reader would use for it */
/* the same inductance set for KaTeX, where the unit must be upright text */
function henryTex(L, dp) { const t = henry(L, dp); return t.replace(/ (µH|mH|H)$/, (m, u) => '\\ \\text{' + u + '}'); }
function henry(L, dp) {
  if (L >= 1) return fmt(L, dp ?? 2) + ' H';
  if (L >= 5e-5) return fmt(L * 1e3, dp ?? 3) + ' mH';
  return fmt(L * 1e6, dp ?? 2) + ' µH';
}

/* A galvanometer: a case, a scale with its zero in the middle, a needle at r of
   full scale from −1 to 1. The needle and what it reads are in the voltage hue;
   the case and the scale are ink. */
function meter(ctx, cx, cy, R, r, title) {
  const sw = 1.06, a = -Math.PI / 2 + clamp(r, -1, 1) * sw;
  ctx.save();
  ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI, 0); ctx.lineTo(cx + R, cy + R * 0.26); ctx.lineTo(cx - R, cy + R * 0.26); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
  for (let i = -4; i <= 4; i++) {
    const t = -Math.PI / 2 + (i / 4) * sw;
    line(ctx, cx + Math.cos(t) * R * 0.76, cy + Math.sin(t) * R * 0.76, cx + Math.cos(t) * R * 0.9, cy + Math.sin(t) * R * 0.9, i === 0 ? PAL.ink : PAL.muted, i === 0 ? 3 : 2);
  }
  line(ctx, cx, cy, cx + Math.cos(a) * R * 0.8, cy + Math.sin(a) * R * 0.8, C('voltage'), 4);
  dot(ctx, cx, cy, PAL.ink, true, 6);
  text(ctx, '0', cx, cy - R * 0.6, PAL.muted, { size: 17, align: 'center' });
  text(ctx, title, cx, cy - R - 24, C('voltage'), { size: 20, weight: 600, align: 'center' });
}

/* The circuit symbol the book prints in Figure 23.39: four half-circles on a
   wire running from x1 to x2 at y, drawn in the inductance hue since what it
   stands for on every one of these pages is the inductance itself. */
function inductorSymbol(ctx, x1, x2, y, color) {
  const n = 4, w = (x2 - x1) / n;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.beginPath();
  for (let i = 0; i < n; i++) ctx.arc(x1 + w * (i + 0.5), y, w / 2, Math.PI, 0);
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 23.37 · sim-mutual-inductance · moving · 2D from a locked view
   Two coils on a common axis, the first on an alternating source and the
   second on a galvanometer. The book's still says the current is changing and
   asks the reader to imagine the needle; the source is driven here, so the
   needle can be watched standing at zero where the current is greatest and
   swinging hardest where it passes through zero. The coils are projected from
   the book's own viewpoint with view()/face() and do not orbit (rule 28.2),
   as ch23/config.md asks. The source runs at one swing a second, which is the
   rate the readout states and the rate the drawing keeps.
===================================================================== */
(function () {
  const d = sim('sim-mutual-inductance', 780);
  const M = ctl(d.controls, { label: '\\kMind', cls: 'inductance', min: 0.2, max: 8.0, step: 0.2, value: 1.8, unit: 'mH', dec: 1, aria: 'the mutual inductance between the two coils' });
  const I0 = ctl(d.controls, { label: '\\kIocur', cls: 'current', min: 1, max: 10, step: 0.5, value: 5.0, unit: 'A', dec: 1, aria: 'the peak current in the driven coil' });
  const drive = choice(d.controls, { label: '\\text{the coil that is driven}', options: [{ value: '1', label: 'coil 1' }, { value: '2', label: 'coil 2' }], value: '1', aria: 'which of the two coils carries the source and which carries the meter', onInput: () => cy.reset() });

  const T = 1.0, CYC = 4.0;                          /* one swing a second, four to a loop */
  const FULL = 8.0e-3 * 10 * (TAU / T);              /* the greatest emf the sliders reach */
  const cy = cycle(() => CYC, 0.6);
  const cur = (t) => I0.v * Math.sin((TAU * t) / T);
  const rate = (t) => I0.v * (TAU / T) * Math.cos((TAU * t) / T);

  const V = view({ yaw: 0.34, pitch: 0.30, dist: 3000, cx: 700, cy: 300 });
  const WIRE = 620, BASE = 659;                      /* the row the leads drop to, and the meter's base */
  const at = (x, r, a) => V.P([x, r * Math.sin(a), r * Math.cos(a)]);
  const R0 = 118;
  function turns(ctx, x0, n, pitchX) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i <= n * 40; i++) {
      const s = i / 40, a = s * TAU + Math.PI, p = at(x0 + s * pitchX, R0, a);
      if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
    }
    ctx.stroke(); ctx.restore();
  }
  function leads(ctx, x0, n, pitchX, down) {
    const a = at(x0, R0, Math.PI), b = at(x0 + n * pitchX, R0, Math.PI);
    line(ctx, a[0], a[1], a[0], down, PAL.ink, 4);
    line(ctx, b[0], b[1], b[0], down, PAL.ink, 4);
    return [a[0], b[0]];
  }
  /* the field between the coils, in the gap the projection leaves at 735 to 812 */
  function fieldLines(ctx, s) {
    if (Math.abs(s) < 0.02) return;
    const k = clamp(Math.abs(s), 0.1, 1), dir = s > 0 ? 1 : -1;
    for (let i = -1; i <= 1; i++) {
      const y = 292 + i * 44;
      arrow(ctx, dir > 0 ? 736 : 812, y, dir > 0 ? 812 : 736, y, alpha(C('magnetic-field'), 0.2 + 0.8 * k), 4);
    }
  }

  function draw() {
    const t = cy.now(), { ctx } = begin(d.c);
    const I = cur(t), dI = rate(t), emf = (M.v * 1e-3) * dI;
    const one = drive.value === '1';
    turns(ctx, -240, 5, 46); turns(ctx, 160, 4, 46);
    const [la, lb] = leads(ctx, -240, 5, 46, BASE);
    const [ra, rb] = leads(ctx, 160, 4, 46, BASE);
    /* the source, on whichever coil is driven, and the meter on the other */
    const srcX = one ? (la + lb) / 2 : (ra + rb) / 2, srcA = one ? la : ra, srcB = one ? lb : rb;
    const mtrA = one ? ra : la, mtrB = one ? rb : lb, mtrX = one ? (ra + rb) / 2 : (la + lb) / 2;
    line(ctx, srcA, BASE, srcX - 34, BASE, PAL.ink, 4); line(ctx, srcX + 34, BASE, srcB, BASE, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(srcX, BASE, 34, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(srcX - 20, BASE); ctx.quadraticCurveTo(srcX - 10, BASE - 20, srcX, BASE); ctx.quadraticCurveTo(srcX + 10, BASE + 20, srcX + 20, BASE); ctx.stroke(); ctx.restore();
    line(ctx, mtrA, BASE, mtrX - 74, BASE, PAL.ink, 4); line(ctx, mtrX + 74, BASE, mtrB, BASE, PAL.ink, 4);
    /* the current in the driven coil, on its own leads */
    const up = I >= 0 ? 1 : -1;
    if (Math.abs(I) > 0.05) {
      const h = 26 + 34 * clamp(Math.abs(I) / 10, 0, 1);
      arrow(ctx, srcA, WIRE + up * h / 2, srcA, WIRE - up * h / 2, C('current'), 5);
      arrow(ctx, srcB, WIRE - up * h / 2, srcB, WIRE + up * h / 2, C('current'), 5);
    }
    fieldLines(ctx, I / 10);
    meter(ctx, mtrX, BASE - 19, 74, soft((2.2 * emf) / FULL), 'the induced emf');
    text(ctx, 'B', 774, 200, C('magnetic-field'), { size: 24, weight: 600, align: 'center' });
    label(ctx, one ? 'coil 1, five turns, on the source' : 'coil 1, five turns, on the meter', 478, 165, { side: 'above', size: 20, color: PAL.ink });
    label(ctx, one ? 'coil 2, four turns, on the meter' : 'coil 2, four turns, on the source', 1041, 216, { side: 'above', size: 20, color: PAL.ink });
    text(ctx, 'I = ' + fmt(I, 2) + ' A', srcX, BASE + 48, C('current'), { size: 21, weight: 600, align: 'center' });
    text(ctx, 'M = ' + fmt(M.v, 1) + ' mH between them', 700, 748, C('inductance'), { size: 21, weight: 600, align: 'center' });
    const other = one ? '2' : '1', driven = one ? '1' : '2';
    topline(ctx, Math.abs(dI) < 0.08 * I0.v * (TAU / T)
      ? `The current in coil ${driven} is at its greatest, ${fmt(Math.abs(I), 2)} A, and for that one instant it is not changing at all, so the needle sits at zero.`
      : `The current in coil ${driven} is ${dI > 0 ? 'rising' : 'falling'} at ${fmt(Math.abs(dI), 1)} A/s, and the ${fmt(M.v, 1)} mH between the coils induces ${fmt(Math.abs(emf) * 1e3, 1)} mV in coil ${other}.`);
    readout(d.readout,
      `\\kemf_{${other}} = -\\kMind\\frac{\\Delta \\kIcur_{${driven}}}{\\kdt} = -(${fmt(M.v, 1)}\\times 10^{-3}\\ \\text{H})(${fmt(dI, 1)}\\ \\text{A/s}) = ${fmt(-emf * 1e3, 1)}\\ \\text{mV}`,
      `The needle answers the rate at which the current changes and nothing else, so it stands at zero twice in every swing, at the two instants when the current is greatest. Driving the other coil changes nothing about the size of the swing, since the same ${fmt(M.v, 1)} mH works in either direction, which is what the section means by saying that nature is symmetric here. The coils are drawn from the book's own viewpoint and do not turn.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 23.38 · sim-counterwound · still · 2D from a locked view
   The heater element of a clothes dryer, wound the ordinary way or
   counter-wound in two layers. The book's caption says the fields cancel and
   its drawing cannot show it; here the field inside the cylinder is drawn and
   the winding is a choice, so the cancellation is watched. A winding is a
   state and not a process, so the figure registers no cycle (rule 24.9). The
   cylinder is projected from the book's own viewpoint and does not orbit.
   The book's own dryer numbers are the defaults: 400 turns over 1.00 m of
   0.800 cm diameter, carrying 6.00 A.
===================================================================== */
(function () {
  const d = sim('sim-counterwound', 620);
  const N = ctl(d.controls, { label: 'N', cls: '', min: 100, max: 800, step: 20, value: 400, unit: 'turns', dec: 0, aria: 'the number of turns on the element' });
  const I = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 1, max: 10, step: 0.5, value: 6.0, unit: 'A', dec: 1, aria: 'the current through the element' });
  const wind = choice(d.controls, { label: '\\text{the winding}', options: [{ value: 'one', label: 'wound one way' }, { value: 'counter', label: 'counter-wound' }], value: 'one', aria: 'whether the element is wound all one way or counter-wound in two layers' });

  const LEN = 1.00, DIA = 0.00800, AREA = Math.PI * (DIA / 2) * (DIA / 2);
  const V = view({ yaw: 0.30, pitch: 0.26, dist: 3200, cx: 700, cy: 330 });
  const at = (x, r, a) => V.P([x, r * Math.sin(a), r * Math.cos(a)]);
  const X0 = -430, X1 = 430, R0 = 96;
  function ring(ctx, x, r, w, color) {
    const p = []; for (let i = 0; i <= 72; i++) p.push(at(x, r, (i / 72) * TAU));
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    p.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.closePath(); ctx.stroke(); ctx.restore();
  }
  function helix(ctx, x0, x1, n, r, sense, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath();
    const steps = n * 36;
    for (let i = 0; i <= steps; i++) {
      const s = i / steps, a = sense * s * n * TAU + Math.PI, p = at(x0 + s * (x1 - x0), r, a);
      if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
    }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const counter = wind.value === 'counter';
    const L = counter ? 0 : (MU0 * N.v * N.v * AREA) / LEN;
    const B = counter ? 0 : (MU0 * N.v * I.v) / LEN;
    const nd = clamp(Math.round(N.v / 26), 6, 22);
    /* the former, drawn as a tube from the book's own viewpoint */
    ring(ctx, X0, R0, 3, alpha(PAL.ink, 0.45)); ring(ctx, X1, R0, 3, alpha(PAL.ink, 0.45));
    line(ctx, at(X0, R0, Math.PI / 2)[0], at(X0, R0, Math.PI / 2)[1], at(X1, R0, Math.PI / 2)[0], at(X1, R0, Math.PI / 2)[1], alpha(PAL.ink, 0.45), 3);
    line(ctx, at(X0, R0, -Math.PI / 2)[0], at(X0, R0, -Math.PI / 2)[1], at(X1, R0, -Math.PI / 2)[0], at(X1, R0, -Math.PI / 2)[1], alpha(PAL.ink, 0.45), 3);
    /* the field inside, along the axis, drawn only where the winding leaves one */
    if (B > 1e-7) {
      for (let i = -1; i <= 1; i++) {
        const y = 322 + i * 34;
        arrow(ctx, 330, y, 900, y, alpha(C('magnetic-field'), clamp(B / 8e-3, 0.2, 1)), 5);
      }
      text(ctx, 'B = ' + sci(B, 2) + ' T inside the element', 700, 492, C('magnetic-field'), { size: 21, weight: 600, align: 'center' });
    } else {
      text(ctx, 'the field inside the element cancels: B = 0', 700, 492, C('magnetic-field'), { size: 21, weight: 600, align: 'center' });
    }
    helix(ctx, X0, X1, nd, R0, 1, PAL.ink);
    if (counter) helix(ctx, X1, X0, nd, R0 * 1.22, 1, PAL.ink);
    /* the current, as an arrow on each layer, the two opposed where it is counter-wound */
    const p1 = at(-120, R0, Math.PI), p2 = at(40, R0, Math.PI);
    arrow(ctx, p1[0], p1[1], p2[0], p2[1], C('current'), 5);
    if (counter) {
      const q1 = at(40, R0 * 1.22, Math.PI), q2 = at(-120, R0 * 1.22, Math.PI);
      arrow(ctx, q1[0], q1[1], q2[0], q2[1], C('current'), 5);
    }
    label(ctx, counter ? 'the second layer, wound back the other way' : 'one layer of ' + fmt(N.v, 0) + ' turns', at(X1, R0 * 1.22, Math.PI)[0], at(X1, R0 * 1.22, Math.PI)[1], { side: 'right', size: 20, color: PAL.ink });
    text(ctx, fmt(I.v, 1) + ' A through the element', 700, 452, C('current'), { size: 21, weight: 600, align: 'center' });
    label(ctx, '1.00 m of 0.800 cm tube', at(X0, R0, -Math.PI / 2)[0], at(X0, R0, -Math.PI / 2)[1], { side: 'left', size: 20, color: PAL.ink });
    text(ctx, 'L = ' + (counter ? '0' : henry(L, 2)), 700, 552, C('inductance'), { size: 24, weight: 600, align: 'center' });
    topline(ctx, counter
      ? `Counter-wound, the two layers of ${fmt(N.v / 2, 0)} turns carry the same current in opposite directions, the field inside the element cancels, and its inductance falls to zero.`
      : `Wound all one way, the ${fmt(N.v, 0)} turns raise a field of ${sci(B, 2)} T inside the element, and it has a self-inductance of ${henry(L, 2)}.`);
    readout(d.readout,
      counter
        ? `\\kLind = \\frac{\\mu_0 N^2 A}{\\ell} \\ \\text{for each layer, and the two cancel: } \\kLind = 0`
        : `\\kLind = \\frac{\\mu_0 N^2 A}{\\ell} = \\frac{(4\\pi\\times 10^{-7})(${fmt(N.v, 0)})^2(${sciTex(AREA, 2)}\\ \\text{m}^2)}{1.00\\ \\text{m}} = ${henryTex(L, 2)}`,
      `What the counterwinding protects is the case of the dryer. A mutual inductance between the element and the case would let every change in the heating current induce an emf on metal the user touches, and a winding that raises no field outside itself induces nothing. The same trick is what part (c) of the section's problem on the precision laboratory resistor asks for, where halving the length and counter-winding two layers of 250 turns leaves an inductance of zero. The element is drawn from the book's own viewpoint and does not turn, with ${fmt(nd, 0)} turns standing for the ${fmt(N.v, 0)} it carries.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.39 · sim-self-inductance · moving · flat, graph below
   The book prints the bare circuit symbol; the paragraph beside it is the one
   worth drawing, the 1.0 H inductor whose 10 A is shut off in 1.0 ms and
   answers with ten thousand volts. The switch is opened for the reader and the
   graph beneath carries the current and the induced emf against the same axis,
   which is where the emf is seen to live only in the interval while the
   current changes. The drawing slows a millisecond so that it can be watched
   and the readout states the true numbers (rule 28.4). The emf axis is fixed
   at 0 to 20 kV from the middle of the slider range, and a larger emf is
   pinned at the top edge rather than rescaling the axis.
===================================================================== */
(function () {
  const d = sim('sim-self-inductance', 860);
  const L = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 0.1, max: 2.0, step: 0.1, value: 1.0, unit: 'H', dec: 1, aria: 'the self-inductance of the device' });
  const I0 = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 1, max: 20, step: 1, value: 10, unit: 'A', dec: 0, aria: 'the steady current through it before the switch opens' });
  const DT = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.2, max: 20, step: 0.2, value: 1.0, unit: 'ms', dec: 1, aria: 'the time the current is taken to fall in' });

  const T_OPEN = 1.4, T_END = 4.6, FALL = 1.0;        /* model seconds: closed, then the fall drawn over 1.0 s */
  const cy = cycle(() => T_END, 0.9);
  const frac = (t) => (t < T_OPEN ? 1 : t < T_OPEN + FALL ? 1 - (t - T_OPEN) / FALL : 0);
  const falling = (t) => t >= T_OPEN && t < T_OPEN + FALL;

  function draw() {
    const t = cy.now(), { ctx } = begin(d.c);
    const dt = DT.v * 1e-3, emf = (L.v * I0.v) / dt, I = I0.v * frac(t), open = t >= T_OPEN;
    /* the circuit: a loop with the book's symbol on top and the switch on the right */
    const xl = 300, xr = 1100, yt = 190, yb = 430;
    line(ctx, xl, yt, 560, yt, PAL.ink, 4); inductorSymbol(ctx, 560, 840, yt, C('inductance')); line(ctx, 840, yt, xr, yt, PAL.ink, 4);
    line(ctx, xl, yt, xl, 268, PAL.ink, 4); line(ctx, xl, 352, xl, yb, PAL.ink, 4);
    line(ctx, xl - 26, 268, xl + 26, 268, PAL.ink, 4); line(ctx, xl - 15, 288, xl + 15, 288, PAL.ink, 7);
    line(ctx, xl - 26, 332, xl + 26, 332, PAL.ink, 4); line(ctx, xl - 15, 312, xl + 15, 312, PAL.ink, 7);
    line(ctx, xl, yb, xr, yb, PAL.ink, 4);
    line(ctx, xr, yt, xr, 262, PAL.ink, 4); line(ctx, xr, 338, xr, yb, PAL.ink, 4);
    dot(ctx, xr, 262, PAL.ink, true, 7); dot(ctx, xr, 338, PAL.ink, true, 7);
    const a = open ? -Math.PI / 2 + 0.7 : -Math.PI / 2;
    line(ctx, xr, 338, xr + 78 * Math.cos(a), 338 + 78 * Math.sin(a), PAL.ink, 5);
    if (open && falling(t) && emf > 3000) {
      /* an arc across the parting contacts, drawn in the voltage hue since it is the emf that strikes it */
      for (let i = 0; i < 5; i++) {
        const s = i / 4, x = xr + s * 18 * Math.cos(a) * 1.4, y = 338 + s * 60 * Math.sin(a) * 0.5;
        line(ctx, x, y, x + (i % 2 ? 10 : -10), y - 14, C('voltage'), 3);
      }
    }
    if (I > 0.02) {
      const h = 60 + 40 * (I / 20);
      arrow(ctx, 640 - h / 2, yb, 640 + h / 2, yb, C('current'), 5);
    }
    text(ctx, 'L = ' + fmt(L.v, 1) + ' H', 700, 146, C('inductance'), { size: 22, weight: 600, align: 'center' });
    label(ctx, 'the switch', xr + 60, 300, { side: 'right', size: 20, color: PAL.ink });
    label(ctx, 'the source that set the current up', xl - 30, 300, { side: 'left', size: 20, color: PAL.ink });
    text(ctx, 'I = ' + fmt(I, 1) + ' A', 640, yb + 44, C('current'), { size: 21, weight: 600, align: 'center' });
    text(ctx, falling(t) ? 'the inductor induces ' + fmt(emf, 0) + ' V' : 'the inductor induces nothing', 640, yb + 76, C('voltage'), { size: 21, weight: 600, align: 'center' });
    /* the graph: real milliseconds across, the current on the left and the emf on the right */
    const box = { l: 200, r: 1280, t: 560, b: 780 };
    const span = 3 * DT.v;
    const { X, Y } = axes(ctx, box, [0, span], [0, 20], { xl: 't (ms)', xc: C('time'), yl: 'the current (A), and the emf on a scale of 20 kV to the top', yc: PAL.ink, nx: 3, ny: 4, fx: (v) => fmt(v, span < 1.5 ? 2 : 1), fy: (v) => fmt(v, 0) });
    curve(ctx, (x) => (x < DT.v ? I0.v : x < 2 * DT.v ? I0.v * (1 - (x - DT.v) / DT.v) : 0), 0, span, X, Y, C('current'), 5, 160);
    const eScale = 20 / 20000;                       /* the emf drawn on the same box, 20 kV to full height */
    curve(ctx, (x) => (x >= DT.v && x < 2 * DT.v ? Math.min(emf, 20000) * eScale : 0), 0, span, X, Y, C('voltage'), 5, 160);
    const tm = t < T_OPEN ? DT.v * 0.5 : t < T_OPEN + FALL ? DT.v * (1 + (t - T_OPEN) / FALL) : DT.v * 2.5;
    pinned(ctx, box, X, Y, tm, I, C('current'));
    pinned(ctx, box, X, Y, tm, falling(t) ? Math.min(emf, 20000) * eScale : 0, C('voltage'), emf > 20000 ? fmt(emf / 1000, 0) + ' kV, past the top of the axis' : undefined);
    if (emf > 400) text(ctx, 'the emf, ' + (emf > 20000 ? 'past 20 kV' : fmt(emf, 0) + ' V'), X(DT.v * 1.5), Y(Math.min(emf, 20000) * eScale) - 20, C('voltage'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'the current', X(DT.v * 0.5), Y(I0.v) - 20, C('current'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    topline(ctx, falling(t)
      ? `${fmt(I0.v, 0)} A through a ${fmt(L.v, 1)} H inductor, shut off in ${fmt(DT.v, 1)} ms, induce ${fmt(emf, 0)} V${emf > 3000 ? ', which is enough to strike an arc across the opening switch.' : '.'}`
      : `The current stands at ${fmt(I, 1)} A and is not changing, so however large it is the inductor induces nothing at all.`);
    readout(d.readout,
      `\\kemf = -\\kLind\\frac{\\kdIcur}{\\kdt} = -(${fmt(L.v, 1)}\\ \\text{H})\\frac{-${fmt(I0.v, 0)}\\ \\text{A}}{${fmt(DT.v, 1)}\\times 10^{-3}\\ \\text{s}} = ${fmt(emf, 0)}\\ \\text{V}`,
      `The sign says the emf opposes the change: the current is falling, so the emf drives it forward, and the positive number here is a voltage in the same direction as the current that is dying. The fall really takes ${fmt(DT.v, 1)} ms and is drawn over about a second so that it can be watched, while the graph's own axis is in true milliseconds. Take the interval down to a fraction of a millisecond and the induced emf passes the top of the axis, which is why switching equipment for a large inductor has to break its current slowly.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 23.40 · sim-camera-flash · moving · flat, graph beside
   The book draws the switch in both its positions with dashed arrows between
   them and asks the reader to imagine the switching repeated many times while
   the voltage is boosted. The switching is done here and the capacitor's
   voltage is drawn climbing a step at a time from a battery of 1.5 V to
   several hundred. The current the battery builds in the pair over a 1.33 ms
   contact is I = V t/L, and breaking it in Δt induces L I/Δt; the capacitor
   approaches that level as the steps accumulate.
===================================================================== */
(function () {
  const d = sim('sim-camera-flash', 720);
  const L = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 0.5, max: 5.0, step: 0.5, value: 2.0, unit: 'mH', dec: 1, aria: 'the self-inductance of the inductor pair' });
  const VB = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 1.5, max: 6.0, step: 0.5, value: 1.5, unit: 'V', dec: 1, aria: 'the voltage of the battery' });
  const DT = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 2, max: 40, step: 1, value: 5, unit: 'µs', dec: 0, aria: 'the time the switch takes to break the current' });

  const T_ON = 1.33e-3, NMAX = 60, TAU_N = 18, CYC = 6.0;
  const cy = cycle(() => CYC, 0.8);
  const peak = () => (VB.v * T_ON) / (L.v * 1e-3);
  const emfOf = () => ((L.v * 1e-3) * peak()) / (DT.v * 1e-6);
  const vcap = (n) => emfOf() * (1 - Math.exp(-n / TAU_N));

  function draw() {
    const t = cy.now(), { ctx } = begin(d.c);
    const n = Math.min(NMAX, Math.floor((t / CYC) * NMAX)), toCap = Math.floor(t * 8) % 2 === 0;
    const emf = emfOf(), V = vcap(n), I = peak();
    /* the circuit, the book's own arrangement: the inductor across the top, the
       capacitor and the battery below it, the switch choosing between them */
    const xl = 160, xr = 700, yt = 232;
    line(ctx, xl, yt, 300, yt, PAL.ink, 4); inductorSymbol(ctx, 300, 560, yt, C('inductance')); line(ctx, 560, yt, xr, yt, PAL.ink, 4);
    line(ctx, xl, yt, xl, 392, PAL.ink, 4); line(ctx, xr, yt, xr, 392, PAL.ink, 4);
    dot(ctx, xl, 392, PAL.ink, true, 8); dot(ctx, xr, 392, PAL.ink, true, 8);
    const yc = toCap ? 462 : 582, yo = toCap ? 582 : 462;
    line(ctx, xl, 392, xl + 70, yc, PAL.ink, 5); line(ctx, xr, 392, xr - 70, yc, PAL.ink, 5);
    line(ctx, xl + 70, yc, 390, yc, PAL.ink, 4); line(ctx, 470, yc, xr - 70, yc, PAL.ink, 4);
    line(ctx, xl + 70, yo, 390, yo, alpha(PAL.ink, 0.3), 3); line(ctx, 470, yo, xr - 70, yo, alpha(PAL.ink, 0.3), 3);
    /* the capacitor's plates and the battery's, in ink, on their own rows */
    line(ctx, 410, 432, 410, 492, PAL.ink, 7); line(ctx, 450, 432, 450, 492, PAL.ink, 7);
    line(ctx, 410, 548, 410, 616, PAL.ink, 7); line(ctx, 450, 562, 450, 602, PAL.ink, 5);
    text(ctx, 'C', 430, 524, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'V = ' + fmt(VB.v, 1) + ' V', 430, 648, C('voltage'), { size: 21, weight: 600, align: 'center' });
    text(ctx, 'L = ' + fmt(L.v, 1) + ' mH', 430, 320, C('inductance'), { size: 22, weight: 600, align: 'center' });
    if (!toCap) {
      const h = 40 + 60 * clamp(I, 0, 2) / 2;
      arrow(ctx, 430 - h / 2, yt - 40, 430 + h / 2, yt - 40, C('current'), 5);
      text(ctx, 'I = ' + fmt(I, 2) + ' A built in the pair', 430, yt - 62, C('current'), { size: 20, weight: 600, align: 'center' });
    } else {
      text(ctx, 'emf = ' + fmt(emf, 0) + ' V as the current breaks', 430, yt - 56, C('voltage'), { size: 20, weight: 600, align: 'center' });
    }
    label(ctx, toCap ? 'the switch stands on the capacitor' : 'the switch stands on the battery', xl + 70, yc, { side: 'left', size: 20, color: PAL.ink });
    /* the staircase, beside the circuit, since the circuit is roughly square */
    const box = { l: 860, r: 1310, t: 210, b: 600 };
    const { X, Y } = axes(ctx, box, [0, NMAX], [0, 1200], { xl: 'switchings', xc: PAL.ink, yl: 'the capacitor’s voltage (V)', yc: C('voltage'), nx: 3, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.strokeStyle = C('voltage'); ctx.lineWidth = 5; ctx.beginPath();
    for (let k = 0; k <= n; k++) {
      const y = Math.min(1200, vcap(k));
      if (k) { ctx.lineTo(X(k), Y(Math.min(1200, vcap(k - 1)))); ctx.lineTo(X(k), Y(y)); } else ctx.moveTo(X(0), Y(0));
    }
    ctx.stroke(); ctx.restore();
    pinned(ctx, box, X, Y, n, Math.min(1200, V), C('voltage'), V > 1200 ? fmt(V, 0) + ' V, past the top of the axis' : undefined);
    topline(ctx, `After ${fmt(n, 0)} switchings the capacitor stands at ${fmt(V, 0)} V, charged in steps by the ${fmt(emf, 0)} V the ${fmt(L.v, 1)} mH pair induces each time the switch breaks its ${fmt(I, 2)} A.`);
    readout(d.readout,
      `\\kemf = -\\kLind\\frac{\\kdIcur}{\\kdt} = -(${fmt(L.v, 1)}\\times 10^{-3}\\ \\text{H})\\frac{-${fmt(I, 2)}\\ \\text{A}}{${fmt(DT.v, 0)}\\times 10^{-6}\\ \\text{s}} = ${fmt(emf, 0)}\\ \\text{V}`,
      `A battery of ${fmt(VB.v, 1)} V cannot by itself put more than ${fmt(VB.v, 1)} V on the capacitor; what puts hundreds there is the inductor answering the break in its own current, and the oscillator repeats that break many times a second until the capacitor holds enough for the flash. The high pitched whine the passage mentions is this switching, heard. Breaking the current faster raises the emf, and a larger inductance both raises it and takes longer to build the current in the first place.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM · sim-solenoid-inductance · still · flat, graph beside
   The book calculates the inductance of one shape and prints no picture of it.
   What is worth seeing in L = μ0 N² A/ℓ is that the inductance goes as the
   square of the turns and falls as the coil is stretched out, so the solenoid
   is drawn to scale from the sliders and the square law is drawn as a curve
   beside it. An inductance is a property of a geometry and has no clock in it,
   so the figure registers no cycle. It opens on Example 23.7.
===================================================================== */
(function () {
  const d = sim('sim-solenoid-inductance', 860);
  const N = ctl(d.controls, { label: 'N', cls: '', min: 50, max: 1000, step: 25, value: 200, unit: 'turns', dec: 0, aria: 'the number of turns on the solenoid' });
  const LEN = ctl(d.controls, { label: '\\ell', cls: '', min: 5, max: 50, step: 1, value: 10, unit: 'cm', dec: 0, aria: 'the length of the solenoid' });
  const DIA = ctl(d.controls, { label: 'd', cls: '', min: 1, max: 10, step: 0.5, value: 4.0, unit: 'cm', dec: 1, aria: 'the diameter of the solenoid' });

  const area = () => Math.PI * Math.pow(DIA.v * 1e-2 / 2, 2);
  const ind = (n) => (MU0 * n * n * area()) / (LEN.v * 1e-2);
  /* one fixed scale, from the greatest extents the sliders reach: 50 cm long, 10 cm across */
  const PX = 1300 / 0.50;

  function draw() {
    const { ctx } = begin(d.c);
    const L = ind(N.v), A = area();
    const w = LEN.v * 1e-2 * PX, r = (DIA.v * 1e-2 / 2) * PX;
    const cx = 700, cy = 250, x0 = cx - w / 2, x1 = cx + w / 2;
    /* the solenoid, seen from the side: the former in ink and the turns on it */
    line(ctx, x0, cy - r, x1, cy - r, alpha(PAL.ink, 0.4), 3);
    line(ctx, x0, cy + r, x1, cy + r, alpha(PAL.ink, 0.4), 3);
    const nd = clamp(Math.round(N.v / 25), 5, 30);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    for (let i = 0; i < nd; i++) {
      const x = x0 + (w * (i + 0.5)) / nd;
      ctx.beginPath(); ctx.ellipse(x, cy, Math.max(4, w / nd / 2.4), r, 0, 0, TAU); ctx.stroke();
    }
    ctx.restore();
    /* the field inside, in the field hue, and the flux a single turn catches, in the flux hue */
    const B = (MU0 * N.v * 1) / (LEN.v * 1e-2);
    for (let i = -1; i <= 1; i++) arrow(ctx, x0 + 14, cy + i * r * 0.5, x1 - 14, cy + i * r * 0.5, alpha(C('magnetic-field'), 0.55), 4);
    ctx.save(); ctx.fillStyle = alpha(C('magnetic-flux'), 0.28);
    ctx.beginPath(); ctx.ellipse(cx, cy, Math.max(5, w / nd / 2.4), r, 0, 0, TAU); ctx.fill(); ctx.restore();
    label(ctx, fmt(N.v, 0) + ' turns on ' + fmt(LEN.v, 1) + ' cm', cx, cy - r, { side: 'above', size: 20, color: PAL.ink });
    label(ctx, 'A = ' + sci(A, 2) + ' m² through one turn', cx, cy + r, { side: 'below', size: 20, color: C('magnetic-flux') });
    text(ctx, 'B per ampere = ' + sci(B, 2) + ' T/A', cx, 408, C('magnetic-field'), { size: 19, weight: 600, align: 'center' });
    text(ctx, 'L = ' + henry(L, 3), cx, 452, C('inductance'), { size: 26, weight: 600, align: 'center' });
    /* the square law, below the solenoid, since the scene is a horizontal one */
    const box = { l: 220, r: 1280, t: 530, b: 780 };
    const top = F.nice(0, ind(1000), 4).hi;
    const { X, Y } = axes(ctx, box, [0, 1000], [0, top], { xl: 'N, the number of turns', xc: PAL.ink, yl: 'L (mH)', yc: C('inductance'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v * 1e3, 1) });
    curve(ctx, (n) => ind(n), 0, 1000, X, Y, C('inductance'), 5, 120);
    pinned(ctx, box, X, Y, N.v, L, C('inductance'));
    topline(ctx, `${fmt(N.v, 0)} turns on a ${fmt(LEN.v, 1)} cm solenoid of ${fmt(DIA.v, 2)} cm diameter give a self-inductance of ${henry(L, 3)}.`);
    readout(d.readout,
      `\\kLind = \\frac{\\mu_0 N^2 A}{\\ell} = \\frac{(4\\pi\\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(N.v, 0)})^2(${sciTex(A, 2)}\\ \\text{m}^2)}{${fmt(LEN.v * 1e-2, 3)}\\ \\text{m}} = ${henryTex(L, 3)}`,
      `The curve below the solenoid is the square law: double the turns and the inductance is four times as great, because each of twice as many turns catches twice as much flux. Stretching the solenoid out weakens it, since the same turns then stand further apart and raise a smaller field per ampere. All of this comes from the relation L = N ΔΦ/ΔI, which holds for any device at all and is carried here through the one field the book can write down.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-inductor-energy · still · flat, graph beside
   The section says only that the energy sits in the magnetic field and that it
   takes time to build and to deplete. Here it is drawn: the field inside a
   coil at the density the current sets, the stored energy as a bar, and the
   square law as a curve. The three inductors are the section's own — the
   moderate solenoid of Example 23.7, the 60.0 mH inductor of its fifth kept
   problem and the 25.0 H research solenoid of its third — so a discrete choice
   and not a slider (rule 26.1). A stored energy is a state at a given current
   and has no clock in it, so the figure registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-inductor-energy', 820);
  const DEV = choice(d.controls, {
    label: '\\text{the inductor}',
    options: [{ value: 's', label: 'the 0.632 mH solenoid' }, { value: 'm', label: 'a 60.0 mH inductor' }, { value: 'r', label: 'the 25.0 H research solenoid' }],
    value: 's', aria: 'which of the section’s three inductors is drawn',
  });
  const I = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 1, max: 100, step: 1, value: 30, unit: 'A', dec: 0, aria: 'the current through it' });
  const Lof = () => (DEV.value === 's' ? 0.632e-3 : DEV.value === 'm' ? 60.0e-3 : 25.0);
  const En = (i) => 0.5 * Lof() * i * i;

  function draw() {
    const { ctx } = begin(d.c);
    const L = Lof(), E = En(I.v), top = En(100);
    /* the coil, ink, with its field drawn at the density the current sets */
    const cx = 560, cy = 250, w = 620, r = 112, x0 = cx - w / 2, x1 = cx + w / 2;
    line(ctx, x0, cy - r, x1, cy - r, alpha(PAL.ink, 0.4), 3);
    line(ctx, x0, cy + r, x1, cy + r, alpha(PAL.ink, 0.4), 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    for (let i = 0; i < 12; i++) { const x = x0 + (w * (i + 0.5)) / 12; ctx.beginPath(); ctx.ellipse(x, cy, 16, r, 0, 0, TAU); ctx.stroke(); }
    ctx.restore();
    const rows = clamp(Math.round((I.v / 100) * 7) + 1, 1, 8);
    for (let i = 0; i < rows; i++) {
      const y = cy - r * 0.78 + (i * (1.56 * r)) / Math.max(1, rows - 1);
      arrow(ctx, x0 + 18, rows === 1 ? cy : y, x1 - 18, rows === 1 ? cy : y, alpha(C('magnetic-field'), 0.6), 4);
    }
    arrow(ctx, cx - 60, cy + r + 54, cx + 60, cy + r + 54, C('current'), 5);
    text(ctx, fmt(I.v, 0) + ' A', cx, cy + r + 88, C('current'), { size: 21, weight: 600, align: 'center' });
    text(ctx, 'L = ' + henry(L, 3), cx, cy - r - 44, C('inductance'), { size: 22, weight: 600, align: 'center' });
    text(ctx, 'the field the energy sits in', cx, 478, C('magnetic-field'), { size: 19, weight: 600, align: 'center' });
    /* the stored energy, as a bar beside the coil */
    const bx = 1120, by = 380, bh = 250;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.strokeRect(bx - 26, by - bh, 52, bh); ctx.restore();
    ctx.save(); ctx.fillStyle = C('energy'); ctx.fillRect(bx - 24, by - (E / top) * bh, 48, (E / top) * bh); ctx.restore();
    text(ctx, E < 1000 ? fmt(E, 3) + ' J' : fmt(E / 1000, 1) + ' kJ', bx, by + 30, C('energy'), { size: 21, weight: 600, align: 'center' });
    text(ctx, 'the energy stored', bx, by + 56, C('energy'), { size: 19, align: 'center' });
    /* the square law, below the coil, since the scene is a horizontal one */
    const box = { l: 220, r: 1280, t: 512, b: 742 };
    const { X, Y } = axes(ctx, box, [0, 100], [0, top], { xl: 'I (A)', xc: C('current'), yl: 'E (J)', yc: C('energy'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => (top >= 1000 ? fmt(v / 1000, 0) + 'k' : fmt(v, top < 1 ? 2 : 1)) });
    curve(ctx, (i) => En(i), 0, 100, X, Y, C('energy'), 5, 120);
    pinned(ctx, box, X, Y, I.v, E, C('energy'));
    topline(ctx, `A current of ${fmt(I.v, 0)} A through the ${henry(L, 3)} inductor stores ${E < 1000 ? fmt(E, 3) + ' J' : fmt(E / 1000, 1) + ' kJ'} in its magnetic field.`);
    readout(d.readout,
      `\\kEind = \\frac{1}{2}\\kLind\\kIcur^2 = 0.5(${sciTex(L, 3)}\\ \\text{H})(${fmt(I.v, 1)}\\ \\text{A})^2 = ${E < 1000 ? fmt(E, 3) + '\\ \\text{J}' : sciTex(E, 2) + '\\ \\text{J}'}`,
      `The current is squared, so doubling it stores four times the energy, which is why the research solenoid holds 125 kJ at 100 A while the moderate solenoid of the worked example holds less than a joule at 30 A. That stored energy is what has to go somewhere when the current is switched away, and where there is nowhere for it to go it goes into a spark; it is also why the current cannot be built up in no time, since building it in no time would take an infinite power.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
