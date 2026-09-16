/* Figures for section 23.11 Reactance, Inductive and Capacitive.
   The page binds inductance, capacitance, resistance, frequency, voltage,
   current and time, which is what ch23/COLOR.md gives 23.11. The two
   reactances wear the resistance hue beside the resistance itself, since an
   ohm is an ohm and the section's own argument is that each is an effective
   resistance; they are told apart by their subscripts and their labels. The
   voltage across the element and the current through it wear their own hues,
   which is what lets the reader see which of the two leads. The source, the
   wires, the coil, the plates and the body of the resistor are ink, since a
   device is never tinted. The first figure has a clock in it, because the
   lead and the lag are the whole content of the section; the second has none,
   because a reactance is an rms quantity with the time already averaged out
   of it, so it answers its sliders and carries no transport (rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.11'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const VRMS = 120, V0 = VRMS * Math.SQRT2;      /* the rms voltage both worked examples apply, and its peak */
/* A number of amps or ohms that may run from a thousandth to a few thousand. */
const sig3 = (v) => fmt(v, v >= 100 ? 0 : v >= 10 ? 1 : v >= 1 ? 2 : 3);
function big(x, unit) {
  if (!isFinite(x)) return '∞ ' + unit;
  if (x >= 1000) return sig3(x / 1000) + ' k' + unit;
  if (x >= 0.1) return sig3(x) + ' ' + unit;
  return sig3(x * 1000) + ' m' + unit;
}
/* The same number of ohms set for the readout, where a prefix must not come out
   italic as a variable would. */
function ohmTex(x) {
  if (!isFinite(x)) return '\\infty';
  if (x >= 1000) return sig3(x / 1000) + '\\ \\text{k}\\Omega';
  if (x >= 0.1) return sig3(x) + '\\ \\Omega';
  return sig3(x * 1000) + '\\ \\text{m}\\Omega';
}
/* A frequency in the unit that keeps it to three figures. */
const fHz = (u) => (u >= 1000 ? fmt(u / 1000, u >= 10000 ? 1 : 2) + ' kHz' : fmt(u, 0) + ' Hz');
const texHz = (u) => (u >= 1000 ? fmt(u / 1000, u >= 10000 ? 1 : 2) + '\\ \\text{kHz}' : fmt(u, 0) + '\\ \\text{Hz}');
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
/* An AC source: a circle with one cycle of a sinusoid drawn inside it. */
function source(ctx, x, y, r) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i <= 40; i++) {
    const u = -0.62 * r + (1.24 * r * i) / 40, v = -0.42 * r * Math.sin((i / 40) * 2 * Math.PI);
    if (i) ctx.lineTo(x + u, y + v); else ctx.moveTo(x + u, y + v);
  }
  ctx.stroke(); ctx.restore();
}
/* The three elements, each drawn in ink on the wire it sits on, centred at (x, y)
   and about 190 units long. */
function inductor(ctx, x, y) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.beginPath();
  ctx.moveTo(x - 95, y); ctx.lineTo(x - 72, y);
  for (let i = 0; i < 4; i++) ctx.arc(x - 54 + i * 36, y, 18, Math.PI, 0, false);
  ctx.moveTo(x + 72, y); ctx.lineTo(x + 95, y);
  ctx.stroke(); ctx.restore();
}
function capacitor(ctx, x, y, q) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.moveTo(x - 95, y); ctx.lineTo(x - 15, y); ctx.moveTo(x + 15, y); ctx.lineTo(x + 95, y); ctx.stroke();
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(x - 15, y - 42); ctx.lineTo(x - 15, y + 42); ctx.moveTo(x + 15, y - 42); ctx.lineTo(x + 15, y + 42); ctx.stroke();
  ctx.restore();
  /* the charge the plates carry at this instant, written as the signs a charged
     plate is drawn with and fading out as the capacitor discharges */
  const n = Math.round(Math.abs(q) * 3), s = q >= 0 ? '+' : '−';
  for (let i = 0; i < n; i++) {
    const yy = y - 26 + i * 26;
    text(ctx, s, x - 36, yy, PAL.muted, { size: 22, align: 'center' });
    text(ctx, s === '+' ? '−' : '+', x + 36, yy, PAL.muted, { size: 22, align: 'center' });
  }
}
function resistorBox(ctx, x, y) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.moveTo(x - 95, y); ctx.lineTo(x - 66, y); ctx.stroke();
  ctx.beginPath(); ctx.roundRect(x - 66, y - 26, 132, 52, 6); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x + 66, y); ctx.lineTo(x + 95, y); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   FIGURE 23.43 + 23.44 + 23.45: one element at a time on an AC source,
   with the voltage across it and the current through it drawn together.
   The three book figures are one scene drawn three times and the whole
   content of the section's first half is the difference between them, so
   they are folded into one figure with a choice of element. Moving: a
   quarter-cycle lead cannot be seen in a still drawing without the reader
   animating it in their head, which is the test of rule 24.3.
   Both curves are drawn as fractions of their own peaks, because the peak
   current runs over three decades as the sliders move while the peak
   voltage does not move at all; each peak is written beside its curve and
   in the readout, and the frame's range is fixed at −1.15 to 1.15.
===================================================================== */
(function () {
  const H = 900;
  const d = sim('sim-ac-phase', H);
  const kind = select(d.controls, {   /* three elements in a row that stacks beside two sliders, so a dropdown (rule 26.1) */
    label: '\\text{on the source}',
    options: [{ value: 'L', label: 'an inductor' }, { value: 'C', label: 'a capacitor' }, { value: 'R', label: 'a resistor' }],
    value: 'L', aria: 'which element sits on the AC source',
    onInput: () => show(),
  });
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 20, max: 2000, step: 10, value: 60, unit: 'Hz', dec: 0, aria: 'the frequency of the AC voltage source' });
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 0.5, max: 10, step: 0.1, value: 3, unit: 'mH', dec: 2, aria: 'the inductance of the inductor' });
  const lRow = d.controls.lastElementChild;
  const cS = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 0.5, max: 20, step: 0.1, value: 5, unit: 'µF', dec: 2, aria: 'the capacitance of the capacitor' });
  const cRow = d.controls.lastElementChild;
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 200, step: 1, value: 20, unit: 'Ω', dec: 0, aria: 'the resistance of the resistor' });
  const rRow = d.controls.lastElementChild;
  /* only the value slider of the element that is on the source is shown; the other
     two would be controls with nothing in the figure to answer them (rule 24.6) */
  const show = () => [[lRow, 'L'], [cRow, 'C'], [rRow, 'R']].forEach(([row, k]) => { row.style.display = kind.value === k ? '' : 'none'; });
  show();
  /* One loop is two periods of the source in five real seconds, whatever the
     frequency, so the shape stays legible from 20 Hz to 2 kHz. */
  const cy = cycle(() => 2, 0.6);
  const BOX = { l: 250, r: 1230, t: 560, b: 830 };

  function draw() {
    const { ctx } = begin(d.c);
    const f = fS.v, T = 1 / f, mode = kind.value;
    const X_ = mode === 'L' ? 2 * Math.PI * f * (lS.v * 1e-3)
      : mode === 'C' ? 1 / (2 * Math.PI * f * (cS.v * 1e-6))
        : rS.v;
    const Irms = VRMS / X_, I0 = Irms * Math.SQRT2;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance'), cT = C('time'), cF = C('frequency');
    /* θ is the phase of the source in cycles; the voltage is a cosine of it and the
       current is a quarter cycle behind it in an inductor and a quarter cycle ahead
       of it in a capacitor, which is what the book's three graphs show */
    const lead = mode === 'L' ? -0.25 : mode === 'C' ? 0.25 : 0;
    const vf = (u) => Math.cos(2 * Math.PI * u);
    const iff = (u) => Math.cos(2 * Math.PI * (u + lead));
    const now = cy.now();                    /* 0 to 2, in periods */

    /* ---- the circuit ---- */
    const y0 = 214, y1 = 440, xl = 330, xr = 1080;
    wires(ctx, [[xl, y0], [xr, y0]]);
    wires(ctx, [[xl, y0], [xl, y1], [xr, y1], [xr, y0]]);
    source(ctx, xl, (y0 + y1) / 2, 54);
    text(ctx, 'the AC source', xl - 76, (y0 + y1) / 2 - 24, PAL.ink, { size: 21, align: 'right', bg: PAL.panel });
    text(ctx, fmt(VRMS, 0) + ' V rms', xl - 76, (y0 + y1) / 2 + 12, cV, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, fHz(f), xl - 76, (y0 + y1) / 2 + 48, cF, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    const ex = 760;
    if (mode === 'L') inductor(ctx, ex, y0);
    else if (mode === 'C') capacitor(ctx, ex, y0, Math.cos(2 * Math.PI * now));
    else resistorBox(ctx, ex, y0);
    const name = mode === 'L' ? 'the inductor' : mode === 'C' ? 'the capacitor' : 'the resistor';
    const val = mode === 'L' ? fmt(lS.v, 2) + ' mH' : mode === 'C' ? fmt(cS.v, 2) + ' µF' : fmt(rS.v, 0) + ' Ω';
    const sym = mode === 'L' ? 'X_L = ' : mode === 'C' ? 'X_C = ' : 'R = ';
    text(ctx, name + ', ' + val, ex, y0 - 86, PAL.ink, { size: 21, align: 'center', bg: PAL.panel });
    text(ctx, sym + big(X_, 'Ω'), ex, y0 - 50, cR, { size: 23, weight: 600, align: 'center', bg: PAL.panel });
    /* the voltage across the element at this instant, bracketed above it */
    const vNow = V0 * vf(now), iNow = I0 * iff(now);
    text(ctx, 'v = ' + fmt(vNow, 1) + ' V', ex, y0 + 58, cV, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the current in the return wire, an arrow that turns round with its sign */
    const L = 40 + 90 * Math.min(1, Math.abs(iff(now)));
    const dir = iNow >= 0 ? 1 : -1;
    if (Math.abs(iff(now)) > 0.02) arrow(ctx, 560 + dir * L / 2, y1, 560 - dir * L / 2, y1, cI, 5);
    else dot(ctx, 560, y1, cI, false, 9);
    text(ctx, Math.abs(iff(now)) > 0.02 ? 'i = ' + big(Math.abs(iNow), 'A') + (dir > 0 ? ' this way' : ' the other way') : 'the current is passing through zero',
      560, y1 - 36, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });

    /* ---- the two curves, each as a fraction of its own peak ---- */
    const { X, Y } = axes(ctx, BOX, [0, 2], [-1.15, 1.15], {
      xl: 'time t, in periods T = 1/f', xc: cT, yl: 'each as a fraction of its own peak', yc: PAL.ink,
      nx: 4, ny: 2, fx: (u) => (u === 0 ? '0' : fmt(u, 1) + 'T'), fy: (u) => fmt(u, 1),
    });
    curve(ctx, vf, 0, 2, X, Y, cV, 5, 260);
    /* the current is dashed throughout, so that a resistor, where the two curves
       lie exactly on top of each other, still shows both, and so that the two are
       told apart with the colour turned off */
    ctx.save(); ctx.setLineDash([14, 10]); curve(ctx, iff, 0, 2, X, Y, cI, 5, 260); ctx.restore();
    text(ctx, 'voltage, peak ' + fmt(V0, 0) + ' V', BOX.l + 16, BOX.t + 24, cV, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'current, dashed, peak ' + big(I0, 'A'), BOX.l + 16, BOX.t + 58, cI, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    line(ctx, X(now), BOX.t, X(now), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, BOX, X, Y, now, vf(now), cV);
    pinned(ctx, BOX, X, Y, now, iff(now), cI);
    /* the quarter cycle between the two peaks, bracketed where the book marks its
       points a to d; a resistor has no gap to bracket and is told so instead */
    if (mode === 'L') hbracket(ctx, X(1), X(1.25), Y(1) - 46, cT, 'a quarter of a cycle', { side: 'above', H });
    else if (mode === 'C') hbracket(ctx, X(0.75), X(1), Y(1) - 46, cT, 'a quarter of a cycle', { side: 'above', H });
    else text(ctx, 'the two peak together at every frequency', BOX.r, 536, PAL.muted, { size: 20, align: 'right', bg: PAL.panel });

    topline(ctx, mode === 'L'
      ? 'Across a ' + fmt(lS.v, 2) + ' mH inductor at ' + fHz(f) + ' the reactance is ' + big(X_, 'Ω') + ', the rms current is ' + big(Irms, 'A') + ', and the current comes to its peak a quarter of a cycle after the voltage does.'
      : mode === 'C'
        ? 'Across a ' + fmt(cS.v, 2) + ' µF capacitor at ' + fHz(f) + ' the reactance is ' + big(X_, 'Ω') + ', the rms current is ' + big(Irms, 'A') + ', and the current comes to its peak a quarter of a cycle before the voltage does.'
        : 'Across a ' + fmt(rS.v, 0) + ' Ω resistor at ' + fHz(f) + ' the rms current is ' + big(Irms, 'A') + ', and the voltage and the current rise and fall exactly together.');
    readout(d.readout,
      mode === 'L'
        ? `\\kXL = 2\\pi \\kf\\kLind = 2\\pi(${texHz(f)})(${fmt(lS.v, 2)}\\ \\text{mH}) = ${ohmTex(X_)}`
        : mode === 'C'
          ? `\\kXC = \\dfrac{1}{2\\pi \\kf\\kCap} = \\dfrac{1}{2\\pi(${texHz(f)})(${fmt(cS.v, 2)}\\ \\mu\\text{F})} = ${ohmTex(X_)}`
          : `\\kRes = ${fmt(rS.v, 0)}\\ \\Omega,\\ \\text{whatever the frequency}`,
      'Ohm’s law in this form gives a current of ' + big(Irms, 'A') + ' rms from the ' + fmt(VRMS, 0) + ' V rms across the element, and one period of the source lasts ' + (T >= 0.01 ? fmt(T * 1000, 1) + ' ms' : fmt(T * 1e6, 0) + ' µs') + '.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();

/* =====================================================================
   SIM: the two reactances against frequency, over the four decades that
   carry both worked examples, with the current each element passes at
   120 V drawn above the frame. The section computes two points of each
   curve and asks the reader to conclude the shape of both; here the two
   are drawn together, they cross, and the crossing is where the inductor
   and the capacitor offer the same number of ohms. Still: a reactance is
   an rms quantity with the time already averaged out of it, so the figure
   answers its sliders and registers no cycle (rule 14). Both axes are
   logarithmic and fixed: 10 Hz to 100 kHz across, and 0.01 Ω to 100 kΩ up,
   which holds every setting of the two element sliders.
===================================================================== */
(function () {
  const H = 860;
  const d = sim('sim-reactance-against-frequency', H);
  const fS = ctl(d.controls, {
    label: '\\kf', cls: 'frequency', min: 60, max: 10000, step: 20, value: 60, unit: 'Hz', dec: 0,
    aria: 'the frequency of the AC voltage source',
    detents: [{ v: 60, label: '60 Hz' }, { v: 10000, label: '10 kHz' }],
  });
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 0.5, max: 10, step: 0.1, value: 3, unit: 'mH', dec: 2, aria: 'the inductance of the inductor' });
  const cS = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 0.5, max: 20, step: 0.1, value: 5, unit: 'µF', dec: 2, aria: 'the capacitance of the capacitor' });
  const BOX = { l: 250, r: 1230, t: 420, b: 790 };
  const LG = Math.log10;

  function draw() {
    const { ctx } = begin(d.c);
    const f = fS.v, Lh = lS.v * 1e-3, Cf = cS.v * 1e-6;
    const XL = (u) => 2 * Math.PI * u * Lh, XC = (u) => 1 / (2 * Math.PI * u * Cf);
    const xl = XL(f), xc = XC(f), il = VRMS / xl, ic = VRMS / xc;
    const fCross = 1 / (2 * Math.PI * Math.sqrt(Lh * Cf));       /* where the two lines meet */
    const cI = C('current'), cR = C('resistance'), cF = C('frequency');

    /* ---- the strip: the two elements and the current each passes at 120 V ---- */
    const bar = (x, y, amps, label) => {
      /* the arrow runs on the same logarithmic scale as the frame below, a
         hundredth of an amp at nothing and a thousand amps at its full length */
      const u = Math.min(1, Math.max(0, (LG(Math.max(amps, 1e-3)) + 3) / 6));
      arrow(ctx, x, y, x + 40 + 300 * u, y, cI, 5);
      text(ctx, label, x - 16, y - 34, PAL.ink, { size: 21, align: 'right', bg: PAL.panel });
      text(ctx, big(amps, 'A'), x - 16, y + 6, cI, { size: 23, weight: 600, align: 'right', bg: PAL.panel });
    };
    inductor(ctx, 300, 210);
    text(ctx, fmt(lS.v, 2) + ' mH', 300, 262, PAL.ink, { size: 20, align: 'center' });
    bar(430, 210, il, 'the inductor passes');
    capacitor(ctx, 880, 210, 0);
    text(ctx, fmt(cS.v, 2) + ' µF', 880, 268, PAL.ink, { size: 20, align: 'center' });
    bar(1010, 210, ic, 'the capacitor passes');
    text(ctx, 'each on its own across ' + fmt(VRMS, 0) + ' V rms at ' + fHz(f) + '; the arrows are on the same logarithmic scale as the frame below',
      700, 320, PAL.muted, { size: 19, align: 'center' });

    /* ---- the frame: both reactances against frequency, logarithmic both ways ---- */
    const { X, Y } = axes(ctx, BOX, [1, 5], [-2, 5], {
      xl: 'frequency f (Hz)', xc: cF, yl: 'reactance (Ω)', yc: cR, nx: 4, ny: 7,
      fx: (u) => (u >= 3 ? fmt(Math.pow(10, u - 3), 0) + ' k' : fmt(Math.pow(10, u), 0)),
      fy: (u) => (u >= 3 ? fmt(Math.pow(10, u - 3), 0) + ' k' : u >= 0 ? fmt(Math.pow(10, u), 0) : fmt(Math.pow(10, u), -u > 1 ? 2 : 1)),
    });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (u) => LG(XL(Math.pow(10, u))), 1, 5, X, Y, cR, 5, 60);
    curve(ctx, (u) => LG(XC(Math.pow(10, u))), 1, 5, X, Y, cR, 5, 60);
    ctx.restore();
    /* the two lines are one type and one hue, so each is named on itself */
    text(ctx, 'X_L = 2πfL, the inductor', X(4.55), Y(LG(XL(Math.pow(10, 4.55)))) - 26, cR, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'X_C = 1/2πfC, the capacitor', X(1.45), Y(LG(XC(Math.pow(10, 1.45)))) - 26, cR, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    if (fCross > 10 && fCross < 1e5) {
      dot(ctx, X(LG(fCross)), Y(LG(XL(fCross))), cR, false, 11);
      text(ctx, 'they cross at ' + fHz(fCross),
        X(LG(fCross)), Y(LG(XL(fCross))) + 34, cR, { size: 20, align: 'center', bg: PAL.panel });
    }
    line(ctx, X(LG(f)), BOX.t, X(LG(f)), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, BOX, X, Y, LG(f), LG(xl), cR, big(xl, 'Ω'));
    pinned(ctx, BOX, X, Y, LG(f), LG(xc), cR, big(xc, 'Ω'));

    topline(ctx, 'At ' + fHz(f) + ' the ' + fmt(lS.v, 2) + ' mH inductor offers ' + big(xl, 'Ω') + ' and passes ' + big(il, 'A')
      + ', while the ' + fmt(cS.v, 2) + ' µF capacitor offers ' + big(xc, 'Ω') + ' and passes ' + big(ic, 'A') + '.');
    readout(d.readout,
      `\\kXL = 2\\pi \\kf\\kLind = ${ohmTex(xl)} \\qquad \\kXC = \\dfrac{1}{2\\pi \\kf\\kCap} = ${ohmTex(xc)}`,
      'Take the frequency up and the inductor’s ohms climb while the capacitor’s fall, which is why a large inductor in series with a computer keeps high-frequency noise out of it and a capacitor in series with a loudspeaker keeps the 60 Hz hum out of that.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
