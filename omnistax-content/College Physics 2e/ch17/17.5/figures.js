/* Figures for section 17.5 Sound Interference and Resonance: Standing Waves in Air Columns. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, headline, hbracket, axes, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const VW = 344;                       /* the speed of sound the section works at, 344 m/s */
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* =====================================================================
   FIGURE 17.21: the noise and the sound the headphones introduce, and
   their sum. Two travelling gauge pressures on one axis, the sum below.
   Moving: one loop is one wave period.
===================================================================== */
(function () {
  const d = sim('sim-noise-cancelling', 640);
  const dp2 = ctl(d.controls, { label: '\\kdpamp_2', cls: 'pressure', min: 0, max: 1.5, step: 0.05, value: 1, unit: 'Pa', dec: 2, onInput: reset, aria: 'pressure amplitude of the introduced sound' });
  const phi = ctl(d.controls, { label: '\\varphi', cls: '', min: 0, max: 360, step: 5, value: 180, unit: '°', dec: 0, onInput: reset, aria: 'phase of the introduced sound against the noise' });
  const fq = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 100, max: 1000, step: 10, value: 400, unit: 'Hz', dec: 0, onInput: reset });
  const cy = cycle(() => 1, 0);                 /* one model unit is one wave period */
  function reset() { cy.reset(); }
  const DP1 = 1;                                /* the noise, fixed at 1.00 Pa so the slider is the comparison */
  function draw() {
    const { ctx } = begin(d.c);
    /* Both axes are fixed at ±2.6 Pa and never rescaled: the introduced sound reaches 1.5 Pa and
       the sum reaches 2.5 Pa at the slider maxima, so nothing the reader can set runs off them. */
    const PM = 2.6, XM = 2, t = REDUCED ? 0.25 : cy.now();
    const lam = VW / fq.v, ph = (phi.v * Math.PI) / 180;
    const p1 = (x) => DP1 * Math.sin(TAU * (x / lam - t));
    const p2 = (x) => dp2.v * Math.sin(TAU * (x / lam - t) + ph);
    const As = Math.sqrt(DP1 * DP1 + dp2.v * dp2.v + 2 * DP1 * dp2.v * Math.cos(ph));
    const boxes = [{ l: 190, r: 1310, t: 110, b: 290 }, { l: 190, r: 1310, t: 372, b: 552 }];
    const g0 = axes(ctx, boxes[0], [0, XM], [-PM, PM], { xl: '', yl: 'gauge pressure (Pa)', yc: C('pressure'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, p1, 0, XM, g0.X, g0.Y, C('pressure'), 5, 300);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, p2, 0, XM, g0.X, g0.Y, C('pressure'), 4, 300); ctx.restore();
    text(ctx, 'the noise, ' + fmt(DP1, 2) + ' Pa', boxes[0].l + 14, boxes[0].t + 22, C('pressure'), { size: 19, weight: 600, bg: PAL.panel });
    text(ctx, 'the introduced sound, ' + fmt(dp2.v, 2) + ' Pa (dashed)', boxes[0].l + 14, boxes[0].t + 48, C('pressure'), { size: 19, weight: 600, bg: PAL.panel });
    arrow(ctx, 820, 332, 950, 332, C('velocity'), 4);
    text(ctx, 'both travel at v_w = 344 m/s', 964, 332, C('velocity'), { size: 20, weight: 600 });
    const g1 = axes(ctx, boxes[1], [0, XM], [-PM, PM], { xl: 'distance along the sound (m)', xc: C('position'), yl: 'their sum (Pa)', yc: C('pressure'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, (x) => p1(x) + p2(x), 0, XM, g1.X, g1.Y, C('pressure'), 5, 300);
    text(ctx, 'the sum, amplitude ' + fmt(As, 2) + ' Pa', boxes[1].l + 14, boxes[1].t + 22, C('pressure'), { size: 19, weight: 600, bg: PAL.panel });
    const drop = As > 1e-4 ? 20 * Math.log10(As / DP1) : -Infinity;
    headline(ctx, As < 0.02 ? 'Turned ' + fmt(phi.v, 0) + '° against the noise and matched in amplitude, the second sound cancels it everywhere'
      : 'Turned ' + fmt(phi.v, 0) + '° against the noise, the second sound leaves a sum of ' + fmt(As, 2) + ' Pa, ' + (drop < 0 ? fmt(-drop, 1) + ' dB below the noise alone' : fmt(drop, 1) + ' dB above the noise alone'));
    readout(d.readout, `\\kdpamp_{\\text{sum}} = \\sqrt{\\kdpamp_1^2 + \\kdpamp_2^2 + 2\\kdpamp_1\\kdpamp_2\\cos\\varphi} = ${fmt(As, 2)}\\ \\text{Pa}`,
      As < 0.02 ? 'Positive and negative gauge pressures add like simple numbers, so a second sound of the same amplitude turned half a cycle against the noise leaves nothing at all. The wavelength here is ' + fmt(lam, 2) + ' m.'
        : 'The reversal has to be nearly exact. Move the phase a little away from 180°, or change the amplitude of the second sound, and a sum is left over; the level here is ' + (drop < 0 ? fmt(-drop, 1) + ' dB below' : fmt(drop, 1) + ' dB above') + ' the noise alone, and the wavelength is ' + fmt(lam, 2) + ' m.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.2), draw });
})();

/* =====================================================================
   FIGURE 17.22 + 17.23 + 17.24 + 17.25 + 17.26: the disturbance travels
   down a tube closed at one end, reflects, comes back, and the standing
   wave builds. Moving: the loop is the round trip, then the resonance.
===================================================================== */
(function () {
  const d = sim('sim-tube-resonance', 650);
  const L = ctl(d.controls, { label: 'L', cls: '', min: 0.2, max: 1.5, step: 0.002, value: 0.672, unit: 'm', dec: 3, onInput: reset, aria: 'length of the tube' });
  const fq = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 50, max: 800, step: 1, value: 128, unit: 'Hz', dec: 0, onInput: reset });
  const where = choice(d.controls, { label: '\\text{the fork}', options: [{ value: 'open', label: 'at the open end' }, { value: 'closed', label: 'near the closed end' }], value: 'open', aria: 'where the tuning fork is held' });
  const cy = cycle(() => 6, 1.2);
  function reset() { cy.reset(); }
  /* the nearest resonance of this tube: the odd harmonic whose frequency lies closest to the fork's */
  function nearest() {
    const raw = (4 * L.v * fq.v) / VW;
    let n = 2 * Math.round((raw - 1) / 2) + 1; if (n < 1) n = 1;
    return { n, f: (n * VW) / (4 * L.v) };
  }
  /* the tuning fork, its stem on (x, y), drawn upward */
  function fork(ctx, x, y, open) {
    line(ctx, x, y, x, y - 26, PAL.ink, 5);
    const s = open ? 12 : 8;
    line(ctx, x - s, y - 26, x - s, y - 92, PAL.ink, 5); line(ctx, x + s, y - 26, x + s, y - 92, PAL.ink, 5);
    line(ctx, x - s, y - 26, x + s, y - 26, PAL.ink, 5);
    text(ctx, 'tuning fork', x, y - 112, PAL.ink, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? 5 : cy.now();
    const xL = 300, xR = 300 + (L.v / 1.5) * 880, span = xR - xL;
    const y0 = 190, AMP = 68;                 /* the zero line of the displacement curve, and its full swing */
    const tubeT = 300, tubeB = 420;
    const { n, f: fn } = nearest();
    const res = 1 / (1 + Math.pow((fq.v - fn) / (0.05 * fn), 2));
    const onRes = res > 0.7;
    /* the air's displacement along the tube, u = 0 at the open end and u = 1 at the closed end */
    let s;
    if (tau < 1) { const uc = tau; s = (u) => Math.exp(-Math.pow((u - uc) / 0.12, 2)); }
    else if (tau < 2) { const uc = 2 - tau; s = (u) => -Math.exp(-Math.pow((u - uc) / 0.12, 2)); }
    else {
      const grow = Math.min(1, (tau - 2) / 0.8), a = (0.1 + 0.9 * res) * grow;
      s = (u) => a * Math.cos((n * Math.PI * u) / 2) * Math.sin((TAU * 3 * (tau - 2)) / 4);
    }
    /* the curve above the tube, with its zero line */
    line(ctx, xL, y0, xR, y0, PAL.muted, 2, [10, 10]);
    curve(ctx, (u) => s(u), 0, 1, (u) => xL + u * span, (v) => y0 - v * AMP, C('position'), 5, 240);
    text(ctx, 'air displacement', xL, y0 - AMP - 26, C('position'), { size: 20, weight: 600 });
    if (tau >= 2) {
      ctx.save(); ctx.setLineDash([6, 8]);
      const a = (0.1 + 0.9 * res) * Math.min(1, (tau - 2) / 0.8);
      curve(ctx, (u) => a * Math.cos((n * Math.PI * u) / 2), 0, 1, (u) => xL + u * span, (v) => y0 - v * AMP, alpha(C('position'), 0.45), 3, 200);
      curve(ctx, (u) => -a * Math.cos((n * Math.PI * u) / 2), 0, 1, (u) => xL + u * span, (v) => y0 - v * AMP, alpha(C('position'), 0.45), 3, 200);
      ctx.restore();
    }
    /* the tube: two walls, a closed end at the right, an open end at the left */
    line(ctx, xL, tubeT, xR, tubeT, PAL.ink, 5); line(ctx, xL, tubeB, xR, tubeB, PAL.ink, 5);
    fixed(ctx, xR, tubeT, 26, tubeB - tubeT);
    /* the air: ink dots, and a crowd of them is a compression */
    const N = Math.max(6, Math.round(span / 34));
    for (let i = 0; i < N; i++) {
      const u = (i + 0.5) / N, x0 = xL + u * span;
      const dx = Math.max(xL + 6 - x0, Math.min(xR - 6 - x0, s(u) * (span / N) * 0.85));
      for (let r = 0; r < 3; r++) dot(ctx, x0 + dx, tubeT + 30 + r * 30, PAL.ink, true, 5);
    }
    if (tau < 2) {
      const uc = tau < 1 ? tau : 2 - tau, dir = tau < 1 ? 1 : -1, px = xL + uc * span;
      arrow(ctx, px - dir * 70, tubeT - 30, px, tubeT - 30, C('velocity'), 4);
      text(ctx, 'v_w = 344 m/s', px + dir * 14, tubeT - 30, C('velocity'), { size: 20, weight: 600, align: dir > 0 ? 'left' : 'right', bg: PAL.panel });
    }
    hbracket(ctx, xL, xR, tubeB + 122, PAL.ink, 'L = ' + fmt(L.v, 3) + ' m');
    fork(ctx, where.value === 'open' ? xL - 80 : xR + 74, tubeB + 10, where.value === 'open');
    text(ctx, 'open end: an antinode', xL + 6, tubeB + 40, C('position'), { size: 19, weight: 600 });
    text(ctx, 'closed end: a node', xR + 26, tubeB + 72, C('position'), { size: 19, weight: 600, align: 'right' });
    headline(ctx, tau < 1 ? 'The fork sends a disturbance down the tube at the speed of sound'
      : tau < 2 ? 'The disturbance reflects from the closed end and travels back toward the fork'
      : onRes ? 'It arrives back half a cycle later and adds to the sound the fork is still making, so the air column resonates at ' + fmt(fn, 0) + ' Hz'
      : 'At ' + fmt(fq.v, 0) + ' Hz it arrives back out of step with the fork, so the air column vibrates very little');
    const lam = VW / fq.v;
    readout(d.readout, `\\klam = \\frac{\\kvw}{\\kf} = \\frac{344\\ \\text{m/s}}{${fmt(fq.v, 0)}\\ \\text{Hz}} = ${fmt(lam, 3)}\\ \\text{m}, \\qquad \\frac{4L}{${n}} = ${fmt((4 * L.v) / n, 3)}\\ \\text{m}`,
      onRes ? 'The two are equal, so the tube holds ' + (n === 1 ? 'one-fourth' : n + ' fourths') + ' of a wavelength: the reflected sound comes back in step and the air column resonates at ' + fmt(fn, 0) + ' Hz, its ' + (n === 1 ? 'fundamental' : 'harmonic number ' + n) + '.'
        : 'The two do not agree, so no standing wave can hold. The nearest resonance of a ' + fmt(L.v, 3) + ' m tube is ' + fmt(fn, 0) + ' Hz, harmonic number ' + n + '; move the frequency to it and the air column comes to life.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1.1), draw });
})();

/* =====================================================================
   FIGURE 17.27 + 17.28 + 17.30: the fundamental and the first three
   overtones of one tube, with a choice of ends. Still: a ladder of
   envelopes has no clock in it.
===================================================================== */
(function () {
  const d = sim('sim-harmonic-ladder', 840);
  const L = ctl(d.controls, { label: 'L', cls: '', min: 0.2, max: 2, step: 0.002, value: 0.672, unit: 'm', dec: 3, aria: 'length of the tube' });
  const ends = choice(d.controls, { label: '\\text{the tube is}', options: [{ value: 'closed', label: 'closed at one end' }, { value: 'open', label: 'open at both ends' }], value: 'closed', aria: 'the ends of the tube' });
  const harm = select(d.controls, { label: '\\text{harmonic}', options: [{ value: '0', label: 'fundamental' }, { value: '1', label: 'first overtone' }, { value: '2', label: 'second overtone' }, { value: '3', label: 'third overtone' }], value: '0', aria: 'which harmonic to read' });
  const NAMES = ['Fundamental', 'First overtone', 'Second overtone', 'Third overtone'];
  function draw() {
    const { ctx } = begin(d.c);
    const closed = ends.value === 'closed';
    const pick = +harm.value;
    const span = 780, xL = 300, xR = xL + span;   /* the four tubes are drawn one length, as the book draws them; the slider on L is read in the frequencies and wavelengths beside each */
    const AMP = 52;
    const nOf = (i) => (closed ? 2 * i + 1 : i + 1);
    const shape = (n) => (u) => (closed ? Math.cos((n * Math.PI * u) / 2) : Math.cos(n * Math.PI * u));
    const fOf = (n) => (closed ? (n * VW) / (4 * L.v) : (n * VW) / (2 * L.v));
    const lamOf = (n) => (closed ? (4 * L.v) / n : (2 * L.v) / n);
    for (let i = 0; i < 4; i++) {
      const n = nOf(i), y0 = 190 + i * 160, on = i === pick, f = shape(n);
      const col = on ? C('position') : alpha(C('position'), 0.3);
      const ink = on ? PAL.ink : alpha(PAL.ink, 0.35);
      /* the tube, drawn with its closed end walled and its open ends left bare */
      line(ctx, xL, y0 - 74, xR, y0 - 74, ink, on ? 5 : 3); line(ctx, xL, y0 + 74, xR, y0 + 74, ink, on ? 5 : 3);
      if (closed) fixed(ctx, xR, y0 - 74, 22, 148);
      line(ctx, xL, y0, xR, y0, PAL.muted, 2, [10, 10]);
      const Xu = (u) => xL + u * span, Yv = (v) => y0 - v * AMP;
      curve(ctx, f, 0, 1, Xu, Yv, col, on ? 5 : 3, 220);
      ctx.save(); ctx.setLineDash([6, 8]);
      curve(ctx, (u) => -f(u), 0, 1, Xu, Yv, alpha(col, 0.6), 3, 220);
      ctx.restore();
      /* every node hollow and every antinode filled, named once on the fundamental */
      const zeros = [], peaks = [];
      for (let m = 0; m < 12; m++) {
        const uz = closed ? (2 * m + 1) / n : (m + 0.5) / n, up = closed ? (2 * m) / n : m / n;
        if (uz <= 1.0001) zeros.push(uz);
        if (up <= 1.0001) peaks.push(up);
      }
      if (!closed) peaks.push(1);
      zeros.forEach((u) => dot(ctx, Xu(u), Yv(0), col, false, 10));
      peaks.forEach((u) => dot(ctx, Xu(u), Yv(f(u)), col, true, 10));
      if (i === 0) {
        text(ctx, 'node', Xu(zeros[0]), Yv(0) + 30, C('position'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
        text(ctx, 'antinode', Xu(peaks[0]), y0 - 96, C('position'), { size: 19, weight: 600, align: 'center' });
      }
      text(ctx, NAMES[i], xR + 44, y0 - 22, on ? PAL.ink : alpha(PAL.ink, 0.5), { size: 21, weight: 600 });
      text(ctx, 'f_' + n + ' = ' + fmt(fOf(n), 0) + ' Hz', xR + 44, y0 + 12, on ? C('frequency') : alpha(C('frequency'), 0.45), { size: 21, weight: 600 });
      text(ctx, 'λ = ' + fmt(lamOf(n), 3) + ' m', xR + 44, y0 + 44, on ? C('position') : alpha(C('position'), 0.45), { size: 19 });
    }
    hbracket(ctx, xL, xR, 796, PAL.ink, 'L = ' + fmt(L.v, 3) + ' m');
    const n = nOf(pick);
    headline(ctx, 'A ' + fmt(L.v, 3) + ' m tube ' + (closed ? 'closed at one end' : 'open at both ends') + ' sounds its ' + NAMES[pick].toLowerCase() + ' at ' + fmt(fOf(n), 0) + ' Hz, which is harmonic number ' + n);
    readout(d.readout, closed
      ? `\\kfn = n\\frac{\\kvw}{4L} = ${n}\\frac{344\\ \\text{m/s}}{4(${fmt(L.v, 3)}\\ \\text{m})} = ${fmt(fOf(n), 0)}\\ \\text{Hz}`
      : `\\kfn = n\\frac{\\kvw}{2L} = ${n}\\frac{344\\ \\text{m/s}}{2(${fmt(L.v, 3)}\\ \\text{m})} = ${fmt(fOf(n), 0)}\\ \\text{Hz}`,
      closed ? 'A tube closed at one end has a node at the closed end and an antinode at the open one, so only the odd harmonics fit: its fundamental here is ' + fmt(fOf(1), 0) + ' Hz and its first overtone is the third harmonic, ' + fmt(fOf(3), 0) + ' Hz.'
        : 'A tube open at both ends has an antinode at each end, so every harmonic fits: its fundamental here is ' + fmt(fOf(1), 0) + ' Hz, twice what the same tube would sound if it were closed at one end, and the overtones run 2, 3, 4 times it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the length a tube needs for a given note, and how the air
   temperature moves it. Example 17.5's numbers as the defaults. Still.
===================================================================== */
(function () {
  const d = sim('sim-tube-length', 660);
  const f1 = ctl(d.controls, { label: '\\kfone', cls: 'frequency', min: 60, max: 600, step: 1, value: 128, unit: 'Hz', dec: 0, aria: 'fundamental frequency' });
  const Tc = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 0, max: 40, step: 0.5, value: 22, unit: '°C', dec: 1, aria: 'air temperature' });
  const harm = select(d.controls, { label: '\\text{harmonic}', options: [{ value: '1', label: 'n = 1' }, { value: '3', label: 'n = 3' }, { value: '5', label: 'n = 5' }, { value: '7', label: 'n = 7' }, { value: '9', label: 'n = 9' }], value: '1', aria: 'which harmonic to draw' });
  const vOf = () => 331 * Math.sqrt((Tc.v + 273.15) / 273);
  function draw() {
    const { ctx } = begin(d.c);
    /* One scale for the tube and one range for the graph, both fixed and never rescaled: the
       longest tube the sliders reach is 60 Hz at 40.0 °C, 1.48 m, so the rule runs to 1.6 m and
       the graph's length axis with it. */
    const v = vOf(), Lv = v / (4 * f1.v), n = +harm.value;
    const LMAX = 1.6, SC = 300, top = 130;
    const cx = 210, w = 112;
    const bot = top + Lv * SC;
    /* the metre rule beside the tube */
    line(ctx, cx - w / 2 - 70, top, cx - w / 2 - 70, top + LMAX * SC, PAL.muted, 3);
    for (let m = 0; m <= 16; m++) {
      const y = top + (m / 10) * SC, big = m % 5 === 0;
      line(ctx, cx - w / 2 - 70, y, cx - w / 2 - 70 + (big ? 18 : 10), y, PAL.muted, 2);
      if (big) text(ctx, fmt(m / 10, 1) + ' m', cx - w / 2 - 78, y, PAL.muted, { size: 17, align: 'right' });
    }
    /* the tube: open at the top, closed at the bottom */
    line(ctx, cx - w / 2, top, cx - w / 2, bot, PAL.ink, 5); line(ctx, cx + w / 2, top, cx + w / 2, bot, PAL.ink, 5);
    fixed(ctx, cx - w / 2 - 4, bot, w + 8, 22);
    /* the standing wave of the chosen harmonic, drawn sideways inside the tube */
    const sOf = (u) => Math.cos((n * Math.PI * u) / 2);
    ctx.save(); ctx.beginPath(); ctx.strokeStyle = C('position'); ctx.lineWidth = 4;
    for (let i = 0; i <= 200; i++) { const u = i / 200, x = cx + sOf(u) * (w / 2 - 8), y = top + u * (bot - top); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'open end', cx + w / 2 + 14, top + 8, C('position'), { size: 19, weight: 600 });
    text(ctx, 'closed end', cx + w / 2 + 14, bot + 16, C('position'), { size: 19, weight: 600 });
    text(ctx, 'L = ' + fmt(Lv, 3) + ' m', cx, bot + 56, PAL.ink, { size: 21, weight: 600, align: 'center' });
    /* the graph: the same reckoning across the whole range of notes, beside the vertical scene */
    const box = { l: 640, r: 1310, t: 140, b: 520 };
    const { X, Y } = axes(ctx, box, [60, 600], [0, LMAX], { xl: 'fundamental frequency (Hz)', xc: C('frequency'), yl: 'length of the tube (m)', nx: 6, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 1) });
    curve(ctx, (q) => v / (4 * q), 60, 600, X, Y, PAL.ink, 4, 200);
    line(ctx, X(f1.v), box.b, X(f1.v), Y(Lv), C('frequency'), 2, [4, 8]);
    line(ctx, box.l, Y(Lv), X(f1.v), Y(Lv), PAL.ink, 2, [4, 8]);
    dot(ctx, X(f1.v), Y(Lv), PAL.ink, true, 9);
    text(ctx, 'L = v_w/4f_1', X(330) + 10, Y(v / (4 * 330)) - 30, PAL.ink, { size: 20, weight: 600 });
    headline(ctx, 'A tube closed at one end that sounds ' + fmt(f1.v, 0) + ' Hz at ' + fmt(Tc.v, 1) + ' °C must be ' + fmt(Lv, 3) + ' m long');
    readout(d.readout, `L = \\frac{\\kvw}{4\\kfone} = \\frac{${fmt(v, 0)}\\ \\text{m/s}}{4(${fmt(f1.v, 0)}\\ \\text{Hz})} = ${fmt(Lv, 3)}\\ \\text{m}`,
      'The speed of sound comes first: v_w = (331 m/s)√(T/273 K) = ' + fmt(v, 0) + ' m/s at ' + fmt(Tc.v, 1) + ' °C. ' + (n === 1 ? 'The tube is drawn sounding its fundamental, ' + fmt(f1.v, 0) + ' Hz.' : 'Harmonic number ' + n + ' is ' + n + ' times the fundamental, ' + (n * f1.v >= 1000 ? fmt((n * f1.v) / 1000, 2) + ' kHz' : fmt(n * f1.v, 0) + ' Hz') + '.') + ' A tube closed at one end sounds the odd harmonics only.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
