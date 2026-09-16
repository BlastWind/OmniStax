/* Figures for section 24.3 The Electromagnetic Spectrum. Boots against the
   section's text article.

   Five of the seven figures answer their sliders and nothing else: a spectrum
   walked by a marker, a wavelength held against the sea, a visible strip read
   at one wavelength, a line of antenna lengths and two mechanisms of X-ray
   production have no clock in them, so none of them registers a cycle and none
   carries a transport. The two that move are the modulations, because a
   carrier being modulated by an audio signal has a time in it and the reader
   must watch the envelope swell and the crests bunch as the audio passes.

   Colour follows the chapter's plan. The type hues are frequency, position,
   velocity, time, the electric field and energy. The carrier wave of a
   modulation and the wave it becomes are both the electric field of the radio
   wave and wear its hue; the audio signal that rides on them is no field of a
   wave at all, carries no type, and is told apart by the categorical palette,
   as are the X-rays of the two mechanisms. The striking and captured electrons
   are filled from the element palette. The one colour on
   this page that is a physical fact is the colour of visible light: the
   function `spectral` below turns a wavelength into the hue the eye sees at
   it, and it is the only place a hex literal appears. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, hbracket, label, labeller, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, CLIGHT = 3.00e8;
/* a power of ten as a superscript for the canvas, where text() knows only subscripts */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
/* a number to three significant figures, written plainly */
const sig = (v) => String(+(+v).toPrecision(3));
/* a number in scientific notation, for the canvas and for the readout */
const parts = (v, d) => { const e = Math.floor(Math.log10(Math.abs(v))); return { m: fmt(v / Math.pow(10, e), d), e }; };
const sciTxt = (v, d) => { if (!v || !isFinite(v)) return '0'; const p = parts(v, d); return p.e === 0 ? p.m : p.m + ' × 10' + sup(p.e); };
const sciTex = (v, d) => { if (!v || !isFinite(v)) return '0'; const p = parts(v, d); return p.e === 0 ? p.m : p.m + '\\times 10^{' + p.e + '}'; };
/* a length written in the unit that suits it, which is how the book writes its wavelengths */
const UNITS = [[1e3, 'km'], [1, 'm'], [1e-2, 'cm'], [1e-3, 'mm'], [1e-6, 'μm'], [1e-9, 'nm'], [1e-12, 'pm']];
function lamText(L) {
  for (const [k, u] of UNITS) if (L >= k * 0.9995) return sig(L / k) + ' ' + u;
  return sciTxt(L, 2) + ' m';
}

/* ---------- the one colour on the page that is a physical fact ----------
   A wavelength between about 380 and 750 nm has a colour, and that colour is
   not a choice the figure makes: it is what the eye sees at that wavelength.
   The usual piecewise fit turns nanometres into a red, green and blue triple,
   dimmed at the two ends of the range where the eye's response falls away.
   This is root rule 7's third family, and the plan names it; nowhere else on
   this page is a hex written. */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
  else if (nm <= 780) { r = 1; }
  let k = 1;
  if (nm >= 380 && nm < 420) k = 0.3 + (0.7 * (nm - 380)) / 40;
  else if (nm > 700 && nm <= 780) k = 0.3 + (0.7 * (780 - nm)) / 80;
  const ch = (v) => Math.round(255 * Math.pow(Math.max(0, Math.min(1, v)) * k, 0.8)).toString(16).padStart(2, '0');
  return '#' + ch(r) + ch(g) + ch(b);
}
/* the seven colours the book names across the visible strip */
const COLOURS = [[620, 750, 'red'], [590, 620, 'orange'], [570, 590, 'yellow'], [495, 570, 'green'], [450, 495, 'blue'], [425, 450, 'indigo'], [380, 425, 'violet']];
const colourName = (nm) => (COLOURS.find(([a, b]) => nm >= a && nm < b) ?? [0, 0, null])[2];

/* =====================================================================
   FIGURE 24.8: the whole electromagnetic spectrum, on a scale of frequency
   and a scale of wavelength, with the bands the book names drawn between
   them and a marker the reader walks along. Still: a chart of frequencies
   has no clock in it, and the marker is the reader's hand rather than the
   passage of time. Scales fixed: the frequency from 10 Hz to 10²² Hz, and
   the wavelength that follows from it through c = fλ.
===================================================================== */
(function () {
  const d = sim('sim-spectrum', 660);
  const NAMED = [
    { v: 1.778, label: '60 Hz' }, { v: 3, label: 'ELF' }, { v: 6.185, label: 'AM' }, { v: 8.022, label: 'FM' },
    { v: 9.279, label: 'cell' }, { v: 9.389 }, { v: 15.079, label: 'UV' }, { v: 18.477, label: 'X-ray' },
  ];
  const fs = ctl(d.controls, { label: '\\log_{10}(\\kf/\\text{Hz})', cls: 'frequency', min: 1, max: 22, step: 0.001, value: 6.185, unit: '', dec: 3,
    aria: 'the power of ten of the frequency of the wave', snap: true, detents: NAMED });
  const LX = 120, RX = 1320, EMIN = 1, EMAX = 22;
  const X = (e) => LX + ((e - EMIN) / (EMAX - EMIN)) * (RX - LX);
  const YF = 232, YT = 288, YB = 356, YW = 500;
  const BANDS = [
    { a: 1, b: 9, name: 'radio waves' }, { a: 9, b: 12, name: 'microwaves' }, { a: 12, b: 14.6, name: 'infrared' },
    { a: 14.6, b: 14.9, name: 'visible' }, { a: 14.9, b: 16.5, name: 'ultraviolet' }, { a: 16.5, b: 19.3, name: 'X-rays' },
    { a: 19.3, b: 22, name: 'gamma rays' },
  ];
  const OVERLAP = [[11.6, 12.4], [15.9, 16.9], [18.9, 19.7]];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('frequency'), pc = C('position'), vc = C('velocity');
    const e = fs.v, f = Math.pow(10, e), lam = CLIGHT / f;
    const band = BANDS.find((b) => e >= b.a && e < b.b) ?? BANDS[BANDS.length - 1];
    const vis = e >= 14.6 && e < 14.9;
    const mc = vis ? spectral(lam * 1e9) : PAL.ink;
    /* the band strip, one box per band, the visible one painted in the colours it really has */
    BANDS.forEach((b) => {
      const x1 = X(b.a), x2 = X(b.b);
      if (b.name === 'visible') {
        for (let x = x1; x < x2; x += 1) { ctx.save(); ctx.fillStyle = spectral(CLIGHT / Math.pow(10, b.a + ((x - x1) / (x2 - x1)) * (b.b - b.a)) * 1e9); ctx.fillRect(x, YT, 1.4, YB - YT); ctx.restore(); }
      } else { ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x1, YT, x2 - x1, YB - YT); ctx.restore(); }
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(x1, YT, x2 - x1, YB - YT); ctx.restore();
    });
    /* the three boundaries the book calls overlapping rather than distinct, hatched across the line */
    OVERLAP.forEach(([a, b]) => {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2;
      for (let x = X(a); x < X(b); x += 9) { ctx.beginPath(); ctx.moveTo(x, YB - 2); ctx.lineTo(x + 14, YT + 2); ctx.stroke(); }
      ctx.restore();
    });
    /* the band names, which are the frame of a spectrum chart and so are always shown: inside
       the band where the name fits, and under it with a leader where it does not. The names
       that will not fit and the marker's own wavelength go through one labeller, so that the
       narrow bands and the marker never write over one another. */
    const lab = labeller(ctx, 660, { headline: 2 });
    lab.block(0, 476, 1400, 620);
    BANDS.forEach((b) => {
      const x1 = X(b.a), x2 = X(b.b), mid = (x1 + x2) / 2;
      ctx.save(); ctx.font = '600 20px sans-serif'; const w = ctx.measureText(b.name).width; ctx.restore();
      if (x2 - x1 > w + 24) text(ctx, b.name, mid, (YT + YB) / 2, PAL.ink, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.78) });
      else lab.add(b.name, mid, YB + 2, 0, 1, PAL.ink, 20, 18);
    });
    /* the frequency scale above the strip */
    line(ctx, LX, YF, RX, YF, PAL.muted, 2);
    for (let k = 2; k <= 22; k += 2) { line(ctx, X(k), YF - 9, X(k), YF + 9, PAL.muted, 2); text(ctx, '10' + sup(k), X(k), YF - 26, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'frequency, f (Hz)', LX, YF - 58, fc, { size: 20, weight: 600 });
    text(ctx, 'higher frequency, more energetic, more penetrating →', RX, YF - 58, PAL.muted, { size: 17, align: 'right' });
    /* the wavelength scale below it, which runs the other way because λ = c/f */
    line(ctx, LX, YW, RX, YW, PAL.muted, 2);
    for (let k = -14; k <= 6; k += 2) {
      const x = X(Math.log10(CLIGHT) - k); if (x < LX - 1 || x > RX + 1) continue;
      line(ctx, x, YW - 9, x, YW + 9, PAL.muted, 2); text(ctx, '10' + sup(k) + ' m', x, YW + 28, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'wavelength, λ (m)', LX, YW + 62, pc, { size: 20, weight: 600 });
    text(ctx, '← shorter wavelength, smaller detail resolved', RX, YW + 62, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'c = 3.00 × 10⁸ m/s at every point of this chart', RX, YW + 94, vc, { size: 18, weight: 600, align: 'right' });
    /* the marker, which takes the colour of the light where the light has one */
    const x = X(e);
    line(ctx, x, YF - 10, x, YW + 10, mc, 3, [10, 10]);
    dot(ctx, x, YF, mc, true, 9); dot(ctx, x, YW, mc, true, 9);
    label(ctx, 'f = ' + sciTxt(f, 2) + ' Hz', x, YT - 16, { side: 'above', gap: 12, color: fc, size: 21 });
    lab.add('λ = ' + lamText(lam), x, YB + 2, 0, 1, pc, 21, 18);
    lab.flush();
    topline(ctx, 'A wave of frequency ' + sciTxt(f, 2) + ' Hz has a wavelength of ' + lamText(lam) + ', which puts it among the ' + band.name + ', and no detail much smaller than ' + lamText(lam) + ' can be resolved with it.');
    readout(d.readout, `\\klam = \\frac{\\kc}{\\kf} = \\frac{3.00\\times 10^{8}\\ \\text{m/s}}{${sciTex(f, 2)}\\ \\text{Hz}} = ${sciTex(lam, 2)}\\ \\text{m}`,
      vis ? 'Here the wave is visible light, and the band is painted in the color the eye sees at each wavelength in it. The whole visible band is three tenths of one power of ten wide, which is why it is a sliver on a chart that runs over twenty-one of them.'
        : 'The two scales run opposite ways because the product of the frequency and the wavelength is always the same number, the speed of light. The hatched stretches are the three boundaries the book calls overlapping rather than distinct.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 24.10: the wavelength of a radio signal held against the sea, and
   how far down into salt water a wave of that length gets. Still: one
   frequency's wavelength beside the sea has no clock in it. The wave above
   the surface is drawn on a compressed scale, since five powers of ten of
   wavelength will not fit in one picture at one scale, and the readout
   states the true wavelength and the factor the drawing departs from it by
   (root rule 28.4).
===================================================================== */
(function () {
  const d = sim('sim-elf-submarine', 660);
  const fs = ctl(d.controls, { label: '\\log_{10}(\\kf/\\text{Hz})', cls: 'frequency', min: 3, max: 8, step: 0.001, value: 3, unit: '', dec: 3,
    aria: 'the power of ten of the frequency of the signal', snap: true,
    detents: [{ v: 3, label: 'ELF' }, { v: 5.732, label: 'AM' }, { v: 8, label: 'FM' }] });
  const SEA = 340, FLOOR = 584, LX = 70, RX = 1330;
  /* the drawn wavelength: 620 units at 1 kHz down to 130 at 100 MHz, so that the wave
     stretches visibly across five powers of ten of true wavelength */
  const drawn = (e) => 620 - ((e - 3) / 5) * 490;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('frequency'), pc = C('position');
    const e = fs.v, f = Math.pow(10, e), lam = CLIGHT / f;
    /* the sea and its floor */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(LX, SEA, RX - LX, FLOOR - SEA); ctx.restore();
    line(ctx, LX, SEA, RX, SEA, PAL.muted, 3);
    line(ctx, LX, FLOOR, RX, FLOOR, PAL.muted, 4);
    text(ctx, 'the surface of the sea', LX + 14, SEA - 20, PAL.muted, { size: 18 });
    text(ctx, 'the sea floor', LX + 16, FLOOR + 22, PAL.muted, { size: 18 });
    /* the signal above the surface, drawn on a compressed scale */
    const W = drawn(e), A = 42, y0 = 190;
    ctx.save(); ctx.strokeStyle = fc; ctx.lineWidth = 4; ctx.beginPath();
    for (let x = 150; x <= RX; x += 3) { const y = y0 - A * Math.sin((TAU * (x - 150)) / W); if (x === 150) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'the signal on its way to the submarine', 150, y0 - A - 26, PAL.ink, { size: 19 });
    hbracket(ctx, 150, 150 + W, y0 + A + 30, pc, 'one wavelength = ' + lamText(lam), { side: 'below' });
    /* how far down the wave gets: deeper for a longer wavelength, and drawn in proportion only */
    const reach = SEA + (FLOOR - 26 - SEA) * Math.min(1, Math.max(0.08, (Math.log10(lam) + 0.6) / 6));
    ctx.save(); ctx.fillStyle = alpha(fc, 0.22); ctx.fillRect(LX, SEA, RX - LX, reach - SEA); ctx.restore();
    line(ctx, LX, reach, RX, reach, fc, 3, [12, 10]);
    text(ctx, 'how far down the wave gets', LX + 16, reach > SEA + 80 ? reach - 22 : reach + 24, fc, { size: 19, weight: 600, bg: PAL.panel });
    /* the submarine: a hull with a conning tower */
    const sx = 1120, sy = SEA + (FLOOR - SEA) * 0.66;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
    /* the tail fin and the rudder, drawn first so the hull sits over their roots */
    ctx.beginPath(); ctx.moveTo(sx - 104, sy - 12); ctx.lineTo(sx - 138, sy - 34); ctx.lineTo(sx - 122, sy - 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx - 104, sy + 12); ctx.lineTo(sx - 138, sy + 34); ctx.lineTo(sx - 122, sy + 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    /* the propeller, two blades on a short shaft at the stern */
    ctx.beginPath(); ctx.moveTo(sx - 126, sy); ctx.lineTo(sx - 140, sy); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(sx - 142, sy, 5, 16, 0, 0, TAU); ctx.fill(); ctx.stroke();
    /* the hull: a long cigar, blunter at the bow */
    ctx.beginPath(); ctx.moveTo(sx - 126, sy - 12);
    ctx.bezierCurveTo(sx - 90, sy - 28, sx + 60, sy - 30, sx + 104, sy - 22);
    ctx.bezierCurveTo(sx + 128, sy - 16, sx + 128, sy + 16, sx + 104, sy + 22);
    ctx.bezierCurveTo(sx + 60, sy + 30, sx - 90, sy + 28, sx - 126, sy + 12); ctx.closePath(); ctx.fill(); ctx.stroke();
    /* the conning tower, with its periscope up */
    ctx.beginPath(); ctx.moveTo(sx - 22, sy - 24); ctx.lineTo(sx - 12, sy - 52); ctx.lineTo(sx + 26, sy - 52); ctx.lineTo(sx + 32, sy - 24); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(sx + 10, sy - 52); ctx.lineTo(sx + 10, sy - 72); ctx.lineTo(sx + 20, sy - 72); ctx.stroke();
    /* a line of portholes along the hull */
    ctx.fillStyle = alpha(PAL.ink, 0.5);
    for (let k = -3; k <= 3; k++) { ctx.beginPath(); ctx.arc(sx + 22 * k + 30, sy - 2, 3, 0, TAU); ctx.fill(); }
    ctx.restore();
    label(ctx, 'a submerged submarine', sx, sy - 74, { side: 'above', gap: 12, size: 19 });
    text(ctx, 'the sea is a sketch: neither the wavelength above it nor the depth below it is drawn to scale', RX, 618, PAL.muted, { size: 18, align: 'right' });
    topline(ctx, e <= 3.2 ? 'At ' + sciTxt(f, 2) + ' Hz one wavelength is ' + lamText(lam) + ', and waves this long are the ones used to reach a submarine under the surface.'
      : 'At ' + sciTxt(f, 2) + ' Hz one wavelength is ' + lamText(lam) + ', and salt water absorbs a wave this short before it has gone far below the surface.');
    readout(d.readout, `\\klam = \\frac{\\kc}{\\kf} = \\frac{3.00\\times 10^{8}\\ \\text{m/s}}{${sciTex(f, 2)}\\ \\text{Hz}} = ${sciTex(lam, 2)}\\ \\text{m}`,
      'The wave above the surface is drawn ' + sciTxt(lam / (W / 260), 1) + ' times shorter than it is, because five powers of ten of wavelength will not fit in one picture at one scale. The shaded column reaches deeper the longer the wavelength, which is what the text says decides it, and no scale is put on that depth.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   The two modulation figures share their frame: three traces against one
   clock, the carrier above, the audio signal it is to carry in the middle,
   and the modulated wave below, with a cursor that runs along all three at
   once. Both move, because a carrier being modulated has a time in it; one
   sweep of the cursor is the cycle, and it covers two periods of the audio
   signal. The carrier is drawn with sixteen cycles to every cycle of the
   audio signal, since the true ratio is in the thousands, and each figure
   says in its readout what the true ratio is (root rule 28.4).
===================================================================== */
const NCAR = 16, MH = 840;
const PANELS = [
  { l: 150, r: 1320, t: 160, b: 286, title: '(a) the carrier wave, at the station’s own frequency' },
  { l: 150, r: 1320, t: 396, b: 506, title: '(b) the audio signal, at a frequency the ear can hear' },
  { l: 150, r: 1320, t: 616, b: 756, title: '(c) the wave the station sends out' },
];
function cursorOn(ctx, box, X, Y, u, v, color) {
  const x = X(u); line(ctx, x, box.t, x, box.b, alpha(PAL.ink, 0.45), 2, [6, 6]); dot(ctx, x, Y(v), color, true, 9);
}
const fieldTick = (v) => (v === 0 ? '0' : v === 1 ? 'E_0' : v === -1 ? '−E_0' : v === 2 ? '2E_0' : v === -2 ? '−2E_0' : '');
const plainTick = (v) => (v === 0 ? '0' : v === 1 ? '+1' : v === -1 ? '−1' : '');

/* FIGURE 24.11: amplitude modulation. The envelope of the modulated wave is
   the audio signal itself, so the envelope is drawn in the audio signal's own
   colour and the reader can read one off the other. */
(function () {
  const d = sim('sim-am', MH);
  const fcar = ctl(d.controls, { label: '\\kf_{\\text{c}}', cls: 'frequency', min: 540, max: 1600, step: 10, value: 1530, unit: 'kHz', dec: 0, aria: 'the carrier frequency of the station', snap: true, detents: [{ v: 540 }, { v: 1530, label: '1530' }, { v: 1600 }] });
  const faud = ctl(d.controls, { label: '\\kf_{\\text{a}}', cls: 'frequency', min: 200, max: 5000, step: 100, value: 1000, unit: 'Hz', dec: 0, aria: 'the frequency of the audio signal' });
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 0, max: 1, step: 0.05, value: 0.6, unit: '', dec: 2, aria: 'how deeply the audio signal modulates the carrier' });
  const cy = cycle(() => 1, 0.8);
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), tc = C('time'), car = ec, aud = cat(0);
    const m = ms.v, u = Math.min(1, cy.now()) * 2, Wms = 2000 / faud.v;
    const audio = (t) => Math.sin(TAU * t);
    const carr = (t) => Math.cos(TAU * NCAR * t);
    const env = (t) => 1 + m * audio(t);
    const fx = (v) => fmt((v * Wms) / 2, 2);
    PANELS.forEach((b) => text(ctx, b.title, b.l, b.t - 54, PAL.muted, { size: 19 }));
    const A = axes(ctx, PANELS[0], [0, 2], [-1, 1], { nx: 4, ny: 2, fx, fy: fieldTick, yl: 'electric field, E', yc: ec });
    curve(ctx, carr, 0, 2, A.X, A.Y, car, 3.5, 900);
    cursorOn(ctx, PANELS[0], A.X, A.Y, u, carr(u), car);
    const B = axes(ctx, PANELS[1], [0, 2], [-1, 1], { nx: 4, ny: 2, fx, fy: plainTick, yl: 'the audio signal', yc: PAL.ink });
    curve(ctx, audio, 0, 2, B.X, B.Y, aud, 5, 400);
    cursorOn(ctx, PANELS[1], B.X, B.Y, u, audio(u), aud);
    const G = axes(ctx, PANELS[2], [0, 2], [-2, 2], { nx: 4, ny: 4, fx, fy: fieldTick, xl: 'time, t (ms)', xc: tc, yl: 'electric field, E', yc: ec });
    curve(ctx, (t) => env(t) * carr(t), 0, 2, G.X, G.Y, car, 3.5, 1200);
    curve(ctx, env, 0, 2, G.X, G.Y, aud, 3, 400);
    curve(ctx, (t) => -env(t), 0, 2, G.X, G.Y, aud, 3, 400);
    cursorOn(ctx, PANELS[2], G.X, G.Y, u, env(u) * carr(u), car);
    label(ctx, 'the envelope is the audio signal', G.X(0.45), G.Y(env(0.45)), { side: 'above', color: aud, gap: 18, size: 19 });
    topline(ctx, 'A carrier of ' + fmt(fcar.v, 0) + ' kHz is modulated in amplitude by an audio signal of ' + fmt(faud.v, 0) + ' Hz to a depth of ' + fmt(m, 2) + ', so the height of the wave rises and falls with the sound while its frequency never changes at all.');
    readout(d.readout, `\\kEf(\\kt) = \\kEfo\\left[1 + m\\sin(2\\pi \\kf_{\\text{a}}\\kt)\\right]\\cos(2\\pi \\kf_{\\text{c}}\\kt), \\qquad \\kf_{\\text{c}} = ${fmt(fcar.v, 0)}\\ \\text{kHz}, \\quad \\kf_{\\text{a}} = ${fmt(faud.v, 0)}\\ \\text{Hz}, \\quad m = ${fmt(m, 2)}`,
      'The carrier is drawn with ' + NCAR + ' cycles for every cycle of the audio signal so that both can be seen at once; at these settings the true ratio is ' + fmt((fcar.v * 1000) / faud.v, 0) + ' to 1. A receiver tuned to ' + fmt(fcar.v, 0) + ' kHz follows the height of the wave and gets the audio signal of panel (b) back.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();

/* FIGURE 24.12: frequency modulation. Here the audio signal changes the rate
   at which the crests come and leaves their height alone, so the swing has to
   be drawn far larger than it is and the readout says by how much. */
(function () {
  const d = sim('sim-fm', MH);
  const fcar = ctl(d.controls, { label: '\\kf_{\\text{c}}', cls: 'frequency', min: 88, max: 108, step: 0.1, value: 105.1, unit: 'MHz', dec: 1, aria: 'the carrier frequency of the station', snap: true, detents: [{ v: 88 }, { v: 105.1, label: '105.1' }, { v: 108 }] });
  const faud = ctl(d.controls, { label: '\\kf_{\\text{a}}', cls: 'frequency', min: 200, max: 5000, step: 100, value: 1000, unit: 'Hz', dec: 0, aria: 'the frequency of the audio signal' });
  const dfs = ctl(d.controls, { label: '\\Delta \\kf', cls: 'frequency', min: 0, max: 20, step: 0.5, value: 20, unit: 'kHz', dec: 1, aria: 'how far the audio signal swings the carrier frequency' });
  const cy = cycle(() => 1, 0.8);
  const DRAWN = 0.45;                 /* the fractional swing the picture is drawn with at the full 20 kHz */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), tc = C('time'), car = ec, aud = cat(0);
    const u = Math.min(1, cy.now()) * 2, Wms = 2000 / faud.v, A = DRAWN * (dfs.v / 20);
    const audio = (t) => Math.sin(TAU * t);
    const carr = (t) => Math.cos(TAU * NCAR * t);
    const fmw = (t) => Math.cos(TAU * NCAR * (t + (A / TAU) * (1 - Math.cos(TAU * t))));
    const fx = (v) => fmt((v * Wms) / 2, 2);
    PANELS.forEach((b) => text(ctx, b.title, b.l, b.t - 54, PAL.muted, { size: 19 }));
    const P = axes(ctx, PANELS[0], [0, 2], [-1, 1], { nx: 4, ny: 2, fx, fy: fieldTick, yl: 'electric field, E', yc: ec });
    curve(ctx, carr, 0, 2, P.X, P.Y, car, 3.5, 900);
    cursorOn(ctx, PANELS[0], P.X, P.Y, u, carr(u), car);
    const B = axes(ctx, PANELS[1], [0, 2], [-1, 1], { nx: 4, ny: 2, fx, fy: plainTick, yl: 'the audio signal', yc: PAL.ink });
    curve(ctx, audio, 0, 2, B.X, B.Y, aud, 5, 400);
    cursorOn(ctx, PANELS[1], B.X, B.Y, u, audio(u), aud);
    const G = axes(ctx, PANELS[2], [0, 2], [-1, 1], { nx: 4, ny: 2, fx, fy: fieldTick, xl: 'time, t (ms)', xc: tc, yl: 'electric field, E', yc: ec });
    curve(ctx, fmw, 0, 2, G.X, G.Y, car, 3.5, 1600);
    cursorOn(ctx, PANELS[2], G.X, G.Y, u, fmw(u), car);
    topline(ctx, 'A carrier of ' + fmt(fcar.v, 1) + ' MHz is swung by ' + fmt(dfs.v, 1) + ' kHz either way by an audio signal of ' + fmt(faud.v, 0) + ' Hz, so the wave runs between ' + fmt(fcar.v - dfs.v / 1000, 3) + ' and ' + fmt(fcar.v + dfs.v / 1000, 3) + ' MHz while its height never changes.');
    readout(d.readout, `\\kf(\\kt) = \\kf_{\\text{c}} + \\Delta \\kf \\sin(2\\pi \\kf_{\\text{a}}\\kt) = ${fmt(fcar.v, 1)}\\ \\text{MHz} \\pm ${fmt(dfs.v, 1)}\\ \\text{kHz}, \\qquad \\kEfo \\text{ never changes}`,
      dfs.v === 0 ? 'With no swing at all the station sends out its bare carrier and carries no sound, and a receiver that looks only for changes of frequency hears nothing.'
        : 'The swing is drawn ' + fmt(A / (dfs.v / (fcar.v * 1000)), 0) + ' times larger than it is, so that the crowding can be seen at all: the true swing is ' + fmt(dfs.v, 1) + ' kHz on a carrier of ' + fmt(fcar.v, 1) + ' MHz, a change of ' + fmt((100 * dfs.v) / (fcar.v * 1000), 4) + ' percent. Two stations cannot sit closer than 0.020 MHz for this reason.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();

/* =====================================================================
   FIGURE 24.15: the visible strip, painted in the colours the eye sees, with
   the infrared below it in frequency and the ultraviolet above. Still: a
   colour at a wavelength has no clock in it. Scale fixed: 800 nm at the left
   to 300 nm at the right, so that the frequency rises to the right here as it
   does on the spectrum of Figure 24.8.
===================================================================== */
(function () {
  const d = sim('sim-visible', 620);
  const ls = ctl(d.controls, { label: '\\klam', cls: 'position', min: 300, max: 800, step: 1, value: 550, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: [{ v: 380, label: '380' }, { v: 750, label: '750' }] });
  const LX = 150, RX = 1250, TOP = 200, BOT = 320, NMA = 800, NMB = 300, YW = 436, YF = 520;
  const X = (nm) => LX + ((NMA - nm) / (NMA - NMB)) * (RX - LX);
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('position'), fc = C('frequency'), vc = C('velocity');
    const nm = ls.v, lam = nm * 1e-9, f = CLIGHT / lam, name = colourName(nm);
    const mc = name ? spectral(nm) : PAL.ink;
    /* the strip: painted where the eye responds, plain where it does not */
    for (let x = LX; x < RX; x += 1) {
      const w = NMA - ((x - LX) / (RX - LX)) * (NMA - NMB);
      ctx.save(); ctx.fillStyle = w <= 750 && w >= 380 ? spectral(w) : PAL.soft; ctx.fillRect(x, TOP, 1.8, BOT - TOP); ctx.restore();
    }
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(LX, TOP, RX - LX, BOT - TOP); ctx.restore();
    text(ctx, 'infrared', (LX + X(750)) / 2, (TOP + BOT) / 2, PAL.muted, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'ultraviolet', (X(380) + RX) / 2, (TOP + BOT) / 2, PAL.muted, { size: 20, weight: 600, align: 'center' });
    /* the seven colours the book names, on two rows so that the narrow ones have room */
    COLOURS.forEach(([a, b, s], i) => { line(ctx, X((a + b) / 2), BOT, X((a + b) / 2), BOT + (i % 2 ? 40 : 16), PAL.muted, 1.5); text(ctx, s, X((a + b) / 2), BOT + (i % 2 ? 54 : 30), PAL.ink, { size: 18, weight: 600, align: 'center' }); });
    /* the marker, in the colour of the light it stands on, or in ink where there is none; the
       scales are drawn after it, so their numbers sit on panels over the line where it crosses them */
    const x = X(nm);
    line(ctx, x, TOP - 44, x, YF + 10, mc, 4);
    /* the two scales, both below the strip so that the marker has the space above it */
    line(ctx, LX, YW, RX, YW, PAL.muted, 2);
    for (let w = 800; w >= 300; w -= 100) { const x = X(w); line(ctx, x, YW - 9, x, YW + 9, PAL.muted, 2); text(ctx, String(w), x, YW + 26, PAL.muted, { size: 17, align: 'center', bg: PAL.panel }); }
    text(ctx, 'wavelength, λ (nm)', LX, YW + 58, pc, { size: 20, weight: 600 });
    line(ctx, LX, YF, RX, YF, PAL.muted, 2);
    for (let w = 800; w >= 300; w -= 100) { const x = X(w); line(ctx, x, YF - 9, x, YF + 9, PAL.muted, 2); text(ctx, fmt(CLIGHT / (w * 1e-9) / 1e14, 2), x, YF + 26, PAL.muted, { size: 17, align: 'center', bg: PAL.panel }); }
    text(ctx, 'frequency, f (10¹⁴ Hz)', LX, YF + 58, fc, { size: 20, weight: 600 });
    text(ctx, 'c = 3.00 × 10⁸ m/s', RX, YF + 58, vc, { size: 18, weight: 600, align: 'right' });
    dot(ctx, x, YW, mc, true, 9); dot(ctx, x, YF, mc, true, 9);

    label(ctx, name ? name + ', ' + fmt(nm, 0) + ' nm' : fmt(nm, 0) + ' nm: no eye sees it', x, TOP - 46, { side: 'above', color: name ? mc : PAL.ink, gap: 14, size: 22 });
    topline(ctx, name ? 'Light of wavelength ' + fmt(nm, 0) + ' nm has a frequency of ' + sciTxt(f, 2) + ' Hz, and the eye sees it as ' + name + '.'
      : 'A wave of wavelength ' + fmt(nm, 0) + ' nm has a frequency of ' + sciTxt(f, 2) + ' Hz, which lies ' + (nm > 750 ? 'below the red end of the strip, in the infrared' : 'above the violet end of the strip, in the ultraviolet') + ', and no eye sees it.');
    readout(d.readout, `\\kf = \\frac{\\kc}{\\klam} = \\frac{3.00\\times 10^{8}\\ \\text{m/s}}{${sciTex(lam, 2)}\\ \\text{m}} = ${sciTex(f, 2)}\\ \\text{Hz}`,
      'Red light has the lowest frequencies and the longest wavelengths of the strip, and violet the highest frequencies and the shortest, so the frequency rises to the right here exactly as it does across the whole spectrum of Figure 24.8.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 24.18 + 24.19: the two ways an energetic electron makes an X-ray.
   The book draws the same electron striking the same material twice, so one
   scene with a choice of mechanism puts the two side by side, and the bars
   below say where the X-ray's energy comes from in each. Still: the book's
   two pictures are a before and an after rather than a motion, and replaying
   them would be the mechanism animation root rule 24.9 forbids.
===================================================================== */
(function () {
  const d = sim('sim-xray', 810);
  const how = choice(d.controls, { label: '\\text{the X-ray comes from}', options: [{ value: 'char', label: 'a capture' }, { value: 'brake', label: 'a braking' }], value: 'char', aria: 'which mechanism makes the X-ray' });
  const Es = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 5, max: 120, step: 1, value: 60, unit: 'keV', dec: 0, aria: 'the energy the striking electron arrives with' });
  const BY = 596, BL = 430, BR = 1280;
  const KX = (v) => BL + (v / 120) * (BR - BL);
  /* an X-ray drawn as a wave running from one point to another, with an arrowhead at its end */
  function xray(ctx, x1, y1, x2, y2, color) {
    const L = Math.hypot(x2 - x1, y2 - y1), a = Math.atan2(y2 - y1, x2 - x1), n = Math.max(24, Math.round(L * 0.6));
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.beginPath();
    for (let i = 0; i <= n; i++) { const s = (i / n) * (L - 18), o = 7 * Math.sin((TAU * s) / 18); const px = x1 + s * Math.cos(a) - o * Math.sin(a), py = y1 + s * Math.sin(a) + o * Math.cos(a); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    arrow(ctx, x1 + (L - 22) * Math.cos(a), y1 + (L - 22) * Math.sin(a), x2, y2, color, 3.5);
  }
  /* an atom: a clustered nucleus and three orbits, all in ink, the innermost drawn broken where it is empty */
  function atom(ctx, cx, cy, R, gone) {
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2.5;
    [0.32, 0.64, 1].forEach((k, i) => { ctx.setLineDash(gone && i === 0 ? [7, 8] : []); ctx.beginPath(); ctx.ellipse(cx, cy, R * k, R * k * (i === 0 ? 1 : 0.68), i * 0.55, 0, TAU); ctx.stroke(); });
    ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.ink;
    [[0, 0], [-7, -5], [7, -4], [-4, 7], [6, 6]].forEach(([a, b]) => { ctx.beginPath(); ctx.arc(cx + a, cy + b, 6, 0, TAU); ctx.fill(); });
    ctx.restore();
  }
  function bar(ctx, x1, x2, y, h, color) { ctx.save(); ctx.fillStyle = alpha(color, 0.3); ctx.fillRect(x1, y, x2 - x1, h); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.strokeRect(x1, y, x2 - x1, h); ctx.restore(); }
  function draw() {
    const { ctx } = begin(d.c);
    const En = C('energy'), E = Es.v, e0 = F.el('e-'), ray = cat(1);
    const chosen = how.value === 'char';
    if (chosen) {
      text(ctx, 'the strike', 380, 150, PAL.muted, { size: 19, align: 'center' });
      text(ctx, 'a moment later', 1010, 150, PAL.muted, { size: 19, align: 'center' });
      atom(ctx, 380, 340, 140, false);
      arrow(ctx, 150, 260, 300, 312, En, 5);
      dot(ctx, 150, 260, e0, true, 11);
      label(ctx, 'the striking electron', 150, 252, { side: 'above', gap: 14, size: 19 });
      arrow(ctx, 404, 332, 548, 252, PAL.ink, 4);
      dot(ctx, 556, 248, e0, true, 10);
      label(ctx, 'an inner electron is knocked out', 556, 242, { side: 'above', gap: 14, size: 19 });
      atom(ctx, 1010, 340, 140, true);
      arrow(ctx, 1146, 250, 1036, 324, PAL.ink, 4);
      dot(ctx, 1154, 246, e0, true, 10);
      label(ctx, 'another electron falls into the empty orbit', 1154, 240, { side: 'above', gap: 14, size: 19 });
      xray(ctx, 1010, 360, 1010, 494, ray);
      label(ctx, 'the X-ray', 1010, 498, { side: 'below', color: ray, gap: 12, size: 20 });
      text(ctx, 'the nucleus and the orbits around it belong to the atom', 1300, 542, PAL.muted, { size: 17, align: 'right' });
    } else {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(360, 200, 900, 300); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.strokeRect(360, 200, 900, 300); ctx.restore();
      text(ctx, 'the material the electron strikes', 1250, 478, PAL.muted, { size: 19, align: 'right' });
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.4);
      for (let r = 0; r < 3; r++) for (let q = 0; q < 10; q++) { ctx.beginPath(); ctx.arc(404 + q * 96 + (r % 2) * 48, 246 + r * 84, 9, 0, TAU); ctx.fill(); }
      ctx.restore();
      text(ctx, 'atoms and their electrons', 380, 528, PAL.muted, { size: 17 });
      const path = [[150, 266], [430, 292], [600, 256], [780, 330], [940, 292], [1080, 370], [1200, 350]];
      arrow(ctx, path[0][0], path[0][1], path[1][0], path[1][1], En, 5);
      for (let i = 1; i < path.length - 1; i++) line(ctx, path[i][0], path[i][1], path[i + 1][0], path[i + 1][1], En, Math.max(1.5, 5 - i * 0.7));
      dot(ctx, path[0][0], path[0][1], e0, true, 11);
      label(ctx, 'the striking electron', 150, 256, { side: 'above', gap: 14, size: 19 });
      dot(ctx, 1200, 350, e0, true, 8);
      label(ctx, 'and what is left of it', 1200, 360, { side: 'below', gap: 14, size: 19 });
      [1, 2, 3, 4].forEach((i, k) => xray(ctx, path[i][0], path[i][1], path[i][0] + 26 + k * 12, path[i][1] - 120 + k * 10, ray));
      label(ctx, 'every deflection sends out an X-ray of its own', 700, 130, { side: 'above', color: ray, gap: 6, size: 20 });
    }
    /* the two bars: what the electron arrives with, and what the X-ray carries away */
    line(ctx, BL, BY + 118, BR, BY + 118, PAL.muted, 2);
    for (let k = 0; k <= 120; k += 20) { line(ctx, KX(k), BY + 110, KX(k), BY + 126, PAL.muted, 2); text(ctx, String(k), KX(k), BY + 146, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'energy (keV)', BR, BY + 176, En, { size: 20, weight: 600, align: 'right' });
    bar(ctx, BL, KX(E), BY, 32, En);
    text(ctx, 'the electron arrives with ' + fmt(E, 0) + ' keV', BL - 18, BY + 16, En, { size: 19, weight: 600, align: 'right' });
    if (chosen) {
      bar(ctx, BL, KX(9), BY + 52, 32, ray);
      text(ctx, 'the X-ray carries what the atom decides', BL - 18, BY + 68, ray, { size: 19, weight: 600, align: 'right' });
      text(ctx, 'drawn at no scale of its own, because the orbits of the atom set it and the slider does not move it', KX(12), BY + 68, PAL.muted, { size: 17 });
    } else {
      ctx.save(); ctx.fillStyle = alpha(ray, 0.3); ctx.beginPath(); ctx.moveTo(BL, BY + 84); ctx.lineTo(KX(E), BY + 84); ctx.lineTo(BL, BY + 52); ctx.closePath(); ctx.fill(); ctx.strokeStyle = ray; ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
      text(ctx, 'the X-rays carry anything up to ' + fmt(E, 0) + ' keV', BL - 18, BY + 68, ray, { size: 19, weight: 600, align: 'right' });
      text(ctx, 'many low energies and few high ones, because the collisions are random', Math.min(KX(E) + 16, 900), BY + 68, PAL.muted, { size: 17 });
    }
    topline(ctx, chosen ? 'An electron arriving with ' + fmt(E, 0) + ' keV knocks an inner electron out, and the X-ray that follows carries the energy another electron loses falling into the empty orbit, which is the atom’s own and not the striking electron’s.'
      : 'An electron arriving with ' + fmt(E, 0) + ' keV is slowed by one collision after another, and each of those decelerations radiates, so the X-rays that leave the material carry anything from almost nothing up to ' + fmt(E, 0) + ' keV.');
    readout(d.readout, chosen ? `\\kE = ${fmt(E, 0)}\\ \\text{keV}, \\qquad \\kE_{\\text{X-ray}} = \\kE_{\\text{outer}} - \\kE_{\\text{inner}}`
      : `\\kE = ${fmt(E, 0)}\\ \\text{keV}, \\qquad \\kE_{\\text{X-ray}} \\le \\kE = ${fmt(E, 0)}\\ \\text{keV}`,
      chosen ? 'Since the orbits of the atom are unique to the type of atom, the energy of this X-ray is characteristic of the atom, which is why it is called a characteristic X-ray. Raising the energy of the striking electron sends out more of them and does not change the energy of any one of them.'
        : 'Since the process is random, a broad spectrum of X-ray energy is emitted that is more characteristic of the electron energy than of the material the electron encounters. Such radiation is called bremsstrahlung, German for braking radiation.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the antenna a frequency asks for. The book states in words that the
   most efficient linear antenna is half a wavelength long, and that an AM
   station therefore needs a very large one, and never draws it. Both scales
   are logarithmic, so the relation is a straight line. Still: an antenna
   length at a frequency has no clock in it. Axes fixed: 10⁵ to 10¹⁰ Hz and
   0.01 m to 1000 m, which hold every length the slider reaches.
===================================================================== */
(function () {
  const d = sim('sim-antenna-length', 620);
  const fs = ctl(d.controls, { label: '\\log_{10}(\\kf/\\text{Hz})', cls: 'frequency', min: 5, max: 10, step: 0.001, value: 6.185, unit: '', dec: 3,
    aria: 'the power of ten of the frequency the station broadcasts at', snap: true,
    detents: [{ v: 6.185, label: 'AM' }, { v: 8.022, label: 'FM' }, { v: 9.279, label: 'cell' }] });
  const mount = choice(d.controls, { label: '\\text{the antenna}', options: [{ value: 'half', label: 'standing free' }, { value: 'quarter', label: 'one end on the ground' }], value: 'half', aria: 'how the antenna is mounted' });
  const MARKS = [[6.185, 'AM, 1530 kHz'], [8.022, 'FM, 105.1 MHz'], [9.279, 'a cell phone, 1.90 GHz']];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('frequency'), pc = C('position'), vc = C('velocity');
    const e = fs.v, f = Math.pow(10, e), lam = CLIGHT / f, k = mount.value === 'half' ? 2 : 4, L = lam / k;
    const box = { l: 210, r: 1290, t: 150, b: 470 };
    const { X, Y } = axes(ctx, box, [5, 10], [-2, 3], { nx: 5, ny: 5, fx: (v) => '10' + sup(Math.round(v)), fy: (v) => '10' + sup(Math.round(v)),
      xl: 'frequency, f (Hz)', xc: fc, yl: 'antenna length, L (m)', yc: pc });
    const lab = labeller(ctx, 620, { headline: 2 });
    lab.place({ l: box.l - 60, r: box.l + 300, t: box.t - 40, b: box.t - 8 });
    lab.block(0, box.b + 2, 1400, box.b + 60);
    /* both lines, the chosen one solid and the other faint, since one is twice the other */
    [[2, 'L = λ/2'], [4, 'L = λ/4']].forEach(([kk, name]) => {
      const on = kk === k;
      curve(ctx, (v) => Math.log10(CLIGHT / (kk * Math.pow(10, v))), 5, 10, X, Y, on ? pc : alpha(PAL.ink, 0.3), on ? 5 : 2.5, 60);
      text(ctx, name, X(6.95), Y(Math.log10(CLIGHT / (kk * Math.pow(10, 6.95)))) + (kk === 2 ? -22 : 24), on ? pc : PAL.muted, { size: 20, weight: 600, bg: PAL.panel });
    });
    /* the height of a person, the one length the reader already has */
    line(ctx, box.l, Y(Math.log10(1.7)), box.r, Y(Math.log10(1.7)), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'the height of a person, 1.7 m', box.r - 10, Y(Math.log10(1.7)) - 16, PAL.muted, { size: 17, align: 'right' });
    /* the three frequencies of Example 24.2 */
    MARKS.forEach(([ee, name]) => { const yy = Math.log10(CLIGHT / (k * Math.pow(10, ee))); dot(ctx, X(ee), Y(yy), PAL.ink, false, 10); lab.add(name, X(ee), Y(yy), 0.4, -0.9, PAL.muted, 17, 16); });
    pinned(ctx, box, X, Y, e, Math.log10(L), fc, lamText(L));
    /* the length's name goes below the point, and above it near the bottom of the graph */
    if (Math.log10(L) < -1.3) lab.add('L = ' + lamText(L), X(e), Y(Math.log10(L)), -0.6, -0.8, pc, 21, 20);
    else lab.add('L = ' + lamText(L), X(e), Y(Math.log10(L)), -0.5, 0.9, pc, 21, 20);
    lab.flush();
    text(ctx, 'c = 3.00 × 10⁸ m/s', box.r, box.t - 24, vc, { size: 18, weight: 600, align: 'right' });
    topline(ctx, 'At ' + sciTxt(f, 2) + ' Hz the wavelength is ' + lamText(lam) + ', so the most efficient antenna is ' + lamText(L) + ' long, which is ' + (L >= 1.7 ? fmt(L / 1.7, L / 1.7 >= 10 ? 0 : 1) + ' times the height of a person' : 'one part in ' + fmt(1.7 / L, 0) + ' of the height of a person') + '.');
    readout(d.readout, `\\klam = \\frac{\\kc}{\\kf} = \\frac{3.00\\times 10^{8}\\ \\text{m/s}}{${sciTex(f, 2)}\\ \\text{Hz}} = ${sciTex(lam, 2)}\\ \\text{m}, \\qquad L = \\frac{\\klam}{${k}} = ${sciTex(L, 2)}\\ \\text{m}`,
      k === 2 ? 'A linear antenna radiates best when it is half a wavelength long, so the length it wants falls away as the frequency rises. Both scales here are powers of ten, which is why the relation is a straight line.'
        : 'An antenna with one end on the ground wants a quarter of a wavelength, in the same way that an air column closed at one end resonates at four times its own length, so every length on this line is half what a free-standing antenna would need.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
