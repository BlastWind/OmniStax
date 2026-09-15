/* Figures for section 16.10 Superposition and Interference. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.10'] = function (root, F) {
const { el, fmt, tex, C, PAL, cat, alpha, REDUCED, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, pinned, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const sgn = (v) => (v < 0 ? '−' : '+');
/* a legend entry: a stroke of the curve's own colour with its name beside it */
function legend(ctx, x, y, color, name, dash) {
  line(ctx, x, y, x + 46, y, color, 4, dash);
  text(ctx, name, x + 58, y, color, { size: 19, weight: 600 });
}

/* =====================================================================
   SIM 1: superposition. Two waves in the upper panel and their sum in
   the lower one. The phase of the second wave walks from pure
   constructive through pure destructive, and its wavelength reaches the
   dissimilar pair of Figure 16.35. Still: a snapshot of a sum has no
   clock, so there is no transport.
===================================================================== */
(function () {
  const d = sim('sim-superposition', 720);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, aria: 'amplitude of each wave' });
  const ph = ctl(d.controls, { label: '\\text{phase of wave 2}', cls: '', min: 0, max: 360, step: 5, value: 0, unit: '°', dec: 0, aria: 'phase of the second wave in degrees', detents: [0, 90, 180, 270, 360] });
  const L2 = ctl(d.controls, { label: '\\klamtwo', cls: 'position', min: 0.8, max: 4, step: 0.1, value: 4, unit: 'm', dec: 1, aria: 'wavelength of the second wave' });
  const L1 = 4;                                   /* the first wave's wavelength is fixed at 4.00 m */
  function draw() {
    const { ctx } = begin(d.c);
    /* Both ranges are fixed and never rescaled: 0 to 8 m is two wavelengths of the first wave,
       and ±2.0 m on the displacement axis is twice the largest amplitude the slider allows. */
    const XM = 8, YM = 2;
    const w1 = (x) => X.v * Math.cos(TAU * x / L1);
    const w2 = (x) => X.v * Math.cos(TAU * x / L2.v + (TAU * ph.v) / 360);
    const sum = (x) => w1(x) + w2(x);
    let peak = 0; for (let i = 0; i <= 1600; i++) peak = Math.max(peak, Math.abs(sum((XM * i) / 1600)));
    const boxA = { l: 200, r: 1300, t: 172, b: 352 }, boxB = { l: 200, r: 1300, t: 456, b: 640 };
    const A = axes(ctx, boxA, [0, XM], [-YM, YM], { xl: '', yl: 'the two waves (m)', yc: PAL.ink, nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, w1, 0, XM, A.X, A.Y, cat(0), 4, 600);
    curve(ctx, w2, 0, XM, A.X, A.Y, cat(1), 4, 800);
    legend(ctx, 240, 108, cat(0), 'wave 1, wavelength 4.00 m');
    legend(ctx, 700, 108, cat(1), 'wave 2, wavelength ' + fmt(L2.v, 2) + ' m, shifted ' + fmt(ph.v, 0) + '°');
    const B = axes(ctx, boxB, [0, XM], [-YM, YM], { xl: 'distance along the wave (m)', xc: C('position'), yl: 'their sum (m)', yc: C('position'), nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, sum, 0, XM, B.X, B.Y, C('position'), 5, 1200);
    if (peak > 0.02) {
      line(ctx, boxB.l, B.Y(peak), boxB.r, B.Y(peak), alpha(C('position'), 0.45), 2, [10, 10]);
      line(ctx, boxB.l, B.Y(-peak), boxB.r, B.Y(-peak), alpha(C('position'), 0.45), 2, [10, 10]);
      text(ctx, 'largest displacement ' + fmt(peak, 2) + ' m', boxB.r - 12, B.Y(peak) - 20, C('position'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    } else text(ctx, 'the sum is zero everywhere', (boxB.l + boxB.r) / 2, B.Y(0) - 26, C('position'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const same = Math.abs(L2.v - L1) < 0.05, inPhase = ph.v % 360 < 5 || ph.v % 360 > 355, anti = Math.abs((ph.v % 360) - 180) < 5;
    topline(ctx, same && inPhase ? 'The two waves arrive exactly in phase, so crest falls on crest: the sum has twice the amplitude, ' + fmt(peak, 2) + ' m, and the same wavelength'
      : same && anti ? 'The two waves arrive exactly out of phase, crest against trough, and they cancel completely: the sum is zero everywhere'
      : same ? 'The second wave is shifted by ' + fmt(ph.v, 0) + '°, so the two add partly and subtract partly, and the sum reaches ' + fmt(peak, 2) + ' m'
      : 'The two wavelengths differ, so the waves fall in and out of step along the cord and the sum is constructive in some places and destructive in others, reaching ' + fmt(peak, 2) + ' m');
    readout(d.readout, `\\kx = \\kxone + \\kxtwo,\\quad \\kX = ${fmt(X.v, 2)}\\ \\text{m},\\quad \\klam = ${fmt(L1, 2)}\\ \\text{m},\\quad \\klamtwo = ${fmt(L2.v, 2)}\\ \\text{m}`,
      'Each disturbance corresponds to a force, and forces add, so where the disturbances lie along the same line their amplitudes simply add. The largest displacement of the sum is ' + fmt(peak, 2) + ' m, against ' + fmt(X.v, 2) + ' m for either wave alone.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM 2: the standing wave. Two identical waves run through each other
   in opposite directions and their sum stands in place. Moving: one
   full period is one loop, taken in real seconds from the period slider.
===================================================================== */
(function () {
  const d = sim('sim-standing-wave', 780);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, onInput: reset, aria: 'amplitude of each wave' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 1, max: 4, step: 0.25, value: 2, unit: 'm', dec: 2, onInput: reset, aria: 'wavelength' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 1, max: 4, step: 0.25, value: 2, unit: 's', dec: 2, onInput: reset, aria: 'period' });
  const cy = cycle(() => T.v, 0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed ranges: 0 to 8 m along the cord and ±2.0 m of displacement, twice the largest
       amplitude the slider allows, so the sum at its fullest still fits the frame. */
    const XM = 8, YM = 2;
    const tau = REDUCED ? 0 : cy.now(), ph = tau / T.v;
    const w1 = (x) => X.v * Math.cos(TAU * (x / lam.v - ph));
    const w2 = (x) => X.v * Math.cos(TAU * (x / lam.v + ph));
    const sum = (x) => 2 * X.v * Math.cos(TAU * x / lam.v) * Math.cos(TAU * ph);
    const env = 2 * X.v * Math.abs(Math.cos(TAU * ph));
    const boxA = { l: 200, r: 1300, t: 176, b: 356 }, boxB = { l: 200, r: 1300, t: 456, b: 636 };
    const A = axes(ctx, boxA, [0, XM], [-YM, YM], { xl: '', yl: 'the two travelling waves (m)', yc: PAL.ink, nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, w1, 0, XM, A.X, A.Y, cat(0), 4, 600);
    curve(ctx, w2, 0, XM, A.X, A.Y, cat(1), 4, 600);
    arrow(ctx, A.X(0.6), boxA.t - 58, A.X(1.8), boxA.t - 58, cat(0), 4);
    text(ctx, 'wave 1, travelling right', A.X(2.0), boxA.t - 58, cat(0), { size: 19, weight: 600 });
    arrow(ctx, A.X(6.6), boxA.t - 58, A.X(5.4), boxA.t - 58, cat(1), 4);
    text(ctx, 'wave 2, travelling left', A.X(5.2), boxA.t - 58, cat(1), { size: 19, weight: 600, align: 'right' });
    const B = axes(ctx, boxB, [0, XM], [-YM, YM], { xl: 'distance along the cord (m)', xc: C('position'), yl: 'their sum (m)', yc: C('position'), nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, (x) => 2 * X.v * Math.cos(TAU * x / lam.v), 0, XM, B.X, B.Y, alpha(C('position'), 0.35), 2, 600);
    curve(ctx, (x) => -2 * X.v * Math.cos(TAU * x / lam.v), 0, XM, B.X, B.Y, alpha(C('position'), 0.35), 2, 600);
    curve(ctx, sum, 0, XM, B.X, B.Y, C('position'), 5, 800);
    /* the nodes sit a quarter of a wavelength in and then every half wavelength; the antinodes
       lie between them, and one of each is named, since they are all alike (rule 26.6) */
    let named = false;
    for (let x = lam.v / 4; x <= XM + 1e-9; x += lam.v / 2) {
      dot(ctx, B.X(x), B.Y(0), PAL.ink, false, 9);
      if (!named) { text(ctx, 'node', B.X(x), B.Y(0) + 34, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); named = true; }
    }
    let namedA = false;
    for (let x = 0; x <= XM + 1e-9; x += lam.v / 2) {
      line(ctx, B.X(x), B.Y(2 * X.v) - 10, B.X(x), B.Y(-2 * X.v) + 10, alpha(PAL.ink, 0.35), 2, [4, 8]);
      if (!namedA && x > 0) { text(ctx, 'antinode', B.X(x), B.Y(2 * X.v) - 26, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); namedA = true; }
    }
    hbracket(ctx, B.X(lam.v / 4), B.X(3 * lam.v / 4), boxB.b + 100, C('position'), 'half a wavelength, ' + fmt(lam.v / 2, 2) + ' m');
    const frac = ph < 0.02 || ph > 0.98 ? '0' : Math.abs(ph - 0.25) < 0.02 ? 'T/4' : Math.abs(ph - 0.5) < 0.02 ? 'T/2' : Math.abs(ph - 0.75) < 0.02 ? '3T/4' : fmt(tau, 2) + ' s';
    topline(ctx, env < 0.06 * X.v ? 'At t = ' + frac + ' the two waves are exactly out of phase and the whole cord is momentarily flat, although neither wave has stopped'
      : env > 1.94 * X.v ? 'At t = ' + frac + ' the two waves are exactly in phase and every antinode is at its full ' + fmt(env, 2) + ' m, while the nodes have not moved at all'
      : 'At t = ' + frac + ' the antinodes reach ' + fmt(env, 2) + ' m, and the nodes stay where they are: the sum swells and fades in place instead of travelling');
    readout(d.readout, `\\kx = \\kxone + \\kxtwo = 2\\kX\\cos\\frac{2\\pi\\kx}{\\klam}\\cos\\frac{2\\pi\\kt}{\\kT} = ${fmt(env, 2)}\\ \\text{m at an antinode}`,
      'The two waves have the same amplitude and wavelength, so they alternate between constructive and destructive interference. The nodes are half a wavelength, ' + fmt(lam.v / 2, 2) + ' m, apart, and an antinode sits midway between each pair.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 3: the harmonics of a string fixed at both ends. One string, three
   harmonics behind a choice. Moving, but drawn slowly: the real
   frequencies are hundreds of hertz, so the picture oscillates once
   every four seconds and the readout states the true number (rule 28.4).
===================================================================== */
(function () {
  const d = sim('sim-string-harmonics', 520);
  const nPick = choice(d.controls, { label: '\\text{harmonic}', value: '1', aria: 'which harmonic the string carries', options: [{ value: '1', label: 'Fundamental' }, { value: '2', label: 'First overtone' }, { value: '3', label: 'Second overtone' }], onInput: reset });
  const L = ctl(d.controls, { label: 'L', cls: '', min: 0.5, max: 2, step: 0.05, value: 1, unit: 'm', dec: 2, onInput: reset, aria: 'length of the string' });
  const vw = ctl(d.controls, { label: '\\kvw', cls: 'velocity', min: 50, max: 500, step: 10, value: 200, unit: 'm/s', dec: 0, onInput: reset, aria: 'propagation speed on the string' });
  const SHOW = 4;                                  /* the drawn cycle takes four real seconds at every setting */
  const cy = cycle(() => SHOW, 0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    /* The string is drawn at a fixed 520 logical units per metre, so the longest string the
       slider allows, 2.00 m, fits the frame; the fundamental's wavelength runs on past the far
       clamp and is drawn as far as the frame reaches. */
    const n = +nPick.value, SC = 520, xa = 180, y0 = 330, amp = 92, xEnd = 1330;
    const lamN = (2 * L.v) / n, fN = (n * vw.v) / (2 * L.v);
    const tau = REDUCED ? 0 : cy.now(), c = Math.cos(TAU * tau / SHOW);
    const xb = xa + L.v * SC;
    const shape = (s) => y0 - amp * Math.sin((n * Math.PI * s) / L.v) * c;
    /* the two clamps the string is fixed between */
    for (const px of [xa, xb]) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.fillRect(px - 9, y0 - 150, 18, 300); ctx.restore(); }
    /* the envelope the string sweeps, and the string itself */
    curve(ctx, (s) => y0 - amp * Math.sin((n * Math.PI * s) / L.v), 0, L.v, (s) => xa + s * SC, (y) => y, alpha(C('position'), 0.35), 2, 400);
    curve(ctx, (s) => y0 + amp * Math.sin((n * Math.PI * s) / L.v), 0, L.v, (s) => xa + s * SC, (y) => y, alpha(C('position'), 0.35), 2, 400);
    curve(ctx, shape, 0, L.v, (s) => xa + s * SC, (y) => y, C('position'), 5, 400);
    line(ctx, xa, y0, xb, y0, alpha(PAL.ink, 0.3), 2, [10, 10]);
    /* the fundamental's wavelength runs on past the far clamp, as the book draws it */
    if (n === 1) {
      const sEnd = Math.min(2 * L.v, (xEnd - xa) / SC);
      curve(ctx, (s) => y0 - amp * Math.sin(Math.PI * s / L.v) * c, L.v, sEnd, (s) => xa + s * SC, (y) => y, alpha(C('position'), 0.3), 4, 400);
      line(ctx, xb, y0, xa + sEnd * SC, y0, alpha(PAL.ink, 0.2), 2, [10, 10]);
    }
    /* nodes, hollow, and one antinode named: they are all alike, so one of each carries the word */
    for (let k = 0; k <= n; k++) dot(ctx, xa + ((k * L.v) / n) * SC, y0, PAL.ink, false, 10);
    text(ctx, 'node', xa + (L.v / n) * SC, y0 + 38, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    const ax = xa + (L.v / (2 * n)) * SC;
    line(ctx, ax, y0 - amp - 8, ax, y0 + amp + 8, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'antinode', ax, y0 - amp - 30, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    hbracket(ctx, xa, xb, y0 - 176, PAL.ink, 'L = ' + fmt(L.v, 2) + ' m');
    hbracket(ctx, xa, Math.min(xa + lamN * SC, xEnd), y0 + 128, C('position'), 'wavelength ' + fmt(lamN, 2) + ' m');
    topline(ctx, n === 1 ? 'The fundamental has one loop: the longest wavelength the string can carry is 2L = ' + fmt(lamN, 2) + ' m, and the frequency is ' + fmt(fN, 0) + ' Hz'
      : 'The ' + (n === 2 ? 'first' : 'second') + ' overtone has ' + n + ' loops: the wavelength is 2L/' + n + ' = ' + fmt(lamN, 2) + ' m and the frequency is ' + n + ' times the fundamental, ' + fmt(fN, 0) + ' Hz');
    const mac = n === 1 ? '\\kfone' : n === 2 ? '\\kftwo' : '\\kfthree';
    readout(d.readout, `${mac} = \\frac{\\kvw}{\\klam} = \\frac{${n}(${fmt(vw.v, 0)}\\ \\text{m/s})}{2(${fmt(L.v, 2)}\\ \\text{m})} = ${fmt(fN, 0)}\\ \\text{Hz}`,
      'The fundamental of this string is ' + fmt(vw.v / (2 * L.v), 0) + ' Hz, and the overtones are multiples of it. The string is drawn completing one cycle every four seconds so that the loops can be watched; at ' + fmt(fN, 0) + ' Hz it really completes ' + fmt(fN, 0) + ' of them a second.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 4: beats. Two waves of the same amplitude and slightly different
   frequency at one point in space, and their sum inside its envelope.
   Moving: a marker sweeps the two-second window in about five seconds,
   with a bar beside it for how loud that point is at each moment.
===================================================================== */
(function () {
  const d = sim('sim-beats', 800);   /* room under the graph for the beat bracket and its name */
  const f1 = ctl(d.controls, { label: '\\kfone', cls: 'frequency', min: 4, max: 10, step: 0.1, value: 5, unit: 'Hz', dec: 2, onInput: reset });
  const f2 = ctl(d.controls, { label: '\\kftwo', cls: 'frequency', min: 4, max: 10, step: 0.1, value: 7, unit: 'Hz', dec: 2, onInput: reset });
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, onInput: reset, aria: 'amplitude of each wave' });
  const SPAN = 2;                                  /* the window is a fixed two seconds at every setting */
  const cy = cycle(() => SPAN, 0.8);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed ranges: 0 to 2.00 s of time and ±2.0 m of displacement, twice the largest amplitude
       the slider allows, which is the most the sum can ever reach. */
    const YM = 2;
    const fB = Math.abs(f1.v - f2.v), fav = (f1.v + f2.v) / 2;
    const w1 = (t) => X.v * Math.cos(TAU * f1.v * t), w2 = (t) => X.v * Math.cos(TAU * f2.v * t);
    const sum = (t) => w1(t) + w2(t), envOf = (t) => 2 * X.v * Math.abs(Math.cos(Math.PI * fB * t));
    const now = REDUCED ? SPAN : cy.now();
    const boxA = { l: 200, r: 1300, t: 132, b: 322 }, boxB = { l: 200, r: 1240, t: 452, b: 672 };
    const A = axes(ctx, boxA, [0, SPAN], [-YM, YM], { xl: '', yl: 'the two waves (m)', yc: PAL.ink, nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, w1, 0, SPAN, A.X, A.Y, cat(0), 3, 1600);
    curve(ctx, w2, 0, SPAN, A.X, A.Y, cat(1), 3, 1600);
    legend(ctx, 240, 168, cat(0), 'wave 1, ' + fmt(f1.v, 2) + ' Hz');
    legend(ctx, 700, 168, cat(1), 'wave 2, ' + fmt(f2.v, 2) + ' Hz');
    const B = axes(ctx, boxB, [0, SPAN], [-YM, YM], { xl: 'time (s)', xc: C('time'), yl: 'their sum (m)', yc: C('position'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, envOf, 0, SPAN, B.X, B.Y, alpha(C('position'), 0.4), 2, 800);
    curve(ctx, (t) => -envOf(t), 0, SPAN, B.X, B.Y, alpha(C('position'), 0.4), 2, 800);
    curve(ctx, sum, 0, SPAN, B.X, B.Y, C('position'), 4, 2400);
    if (fB > 0.05 && 1 / fB <= SPAN) hbracket(ctx, B.X(0), B.X(1 / fB), boxB.b + 56, C('time'), 'one beat, ' + fmt(1 / fB, 2) + ' s', { side: 'below', size: 20 });   /* named under the bracket, clear of the tick labels */
    line(ctx, B.X(now), boxB.t, B.X(now), boxB.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, boxB, B.X, B.Y, now, sum(now), C('position'));
    /* the loudness of that point at this moment, as a bar beside the graph */
    const bx = 1288, bt = boxB.t, bb = boxB.b, h = ((bb - bt) * envOf(now)) / (2 * YM);
    ctx.save(); ctx.fillStyle = alpha(C('position'), 0.3); ctx.fillRect(bx, bb - h, 30, h); ctx.restore();
    line(ctx, bx, bt, bx, bb, PAL.muted, 2); line(ctx, bx, bb, bx + 30, bb, PAL.muted, 2);
    text(ctx, 'loudness', bx + 15, bt - 22, PAL.ink, { size: 19, weight: 600, align: 'center' });
    topline(ctx, fB < 0.05 ? 'The two frequencies are equal, so the waves never fall out of step: the sum keeps a steady amplitude of ' + fmt(2 * X.v, 2) + ' m and there are no beats at all'
      : 'The two frequencies differ by ' + fmt(fB, 2) + ' Hz, so the sum swells and fades ' + fmt(fB, 2) + ' times a second while the wave itself runs at the average, ' + fmt(fav, 2) + ' Hz');
    readout(d.readout, `\\kfB = \\lvert\\kfone - \\kftwo\\rvert = \\lvert${fmt(f1.v, 2)} - ${fmt(f2.v, 2)}\\rvert\\ \\text{Hz} = ${fmt(fB, 2)}\\ \\text{Hz},\\quad \\kfave = ${fmt(fav, 2)}\\ \\text{Hz}`,
      'In the product form of the resultant the first cosine carries the amplitude up and down at the beat frequency, and the second is the wave itself, running at the average frequency. At ' + fmt(now, 2) + ' s the amplitude of the moment is ' + fmt(envOf(now), 2) + ' m.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();
};
