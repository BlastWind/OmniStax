/* Figures for section 7.6 Conservation of Energy. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, vbracket, hbracket, axes, runner, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* a whole number of joules, grouped in threes, for a canvas label */
const J = (x) => commas(String(Math.round(x)));
/* the same for a KaTeX readout, where a comma inside a number needs bracing */
const Jtex = (x) => J(x).replace(/,/g, '{,}');
const G = 9.80;
/* a filled rectangle in the energy hue at the given opacity, outlined in that hue */
function band(ctx, x1, y1, x2, y2, a, dash) {
  ctx.save(); ctx.fillStyle = alpha(C('energy'), a); ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
  ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; if (dash) ctx.setLineDash(dash);
  ctx.strokeRect(x1, y1, x2 - x1, y2 - y1); ctx.restore();
}
/* a quadrilateral band between two stacked levels, drawn across the graph */
function stack(ctx, X, Y, t0, t1, lo0, hi0, lo1, hi1, a) {
  ctx.save(); ctx.fillStyle = alpha(C('energy'), a);
  ctx.beginPath(); ctx.moveTo(X(t0), Y(lo0)); ctx.lineTo(X(t1), Y(lo1)); ctx.lineTo(X(t1), Y(hi1)); ctx.lineTo(X(t0), Y(hi0));
  ctx.closePath(); ctx.fill(); ctx.restore();
}

/* =====================================================================
   SIM: the energy account of a whole process. The section's own example
   of other energy is the person who eats, so a climber walks up a flight
   of stairs and the four energies of the general equation are kept
   beside her: the food energy still in her, the potential energy she has
   gained, the thermal energy her body has released and her kinetic
   energy, which does not change. The climb has a time in it, so the
   figure loops once per climb and gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-account', 560);
  const H = ctl(d.controls, { label: '\\kh', cls: 'position', min: 2, max: 20, step: 0.5, value: 8, unit: 'm', dec: 1, onInput: reset, aria: 'height climbed' });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.4, max: 2, step: 0.1, value: 1, unit: 'm/s', dec: 1, onInput: reset, aria: 'walking speed' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 110, step: 1, value: 65, unit: 'kg', dec: 0, onInput: reset, aria: 'mass' });
  const E = ctl(d.controls, { label: '\\text{Eff}', cls: '', min: 5, max: 25, step: 1, value: 20, unit: '%', dec: 0, onInput: reset, aria: 'efficiency of the body' });
  /* the stairs rise at 30 degrees, so she gains height at half her walking speed */
  const SIN = 0.5;
  const T = () => H.v / (V.v * SIN);
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  function state(tau) {
    const f = Math.min(1, tau / T()), y = H.v * f;
    const ke = 0.5 * M.v * V.v * V.v, peAll = M.v * G * H.v, eff = E.v / 100;
    const foodAll = peAll / eff, pe = peAll * f, spent = foodAll * f;
    return { f, y, ke, pe, th: spent - pe, chem: foodAll - spent, foodAll, peAll, spent, total: ke + foodAll };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T() - 1e-9, s = state(tau);
    /* ---- the staircase, on the left ---- */
    const x0 = 110, x1 = 560, yb = 500, yt = 190, N = 8;
    for (let i = 0; i < N; i++) {
      const xa = x0 + ((x1 - x0) * i) / N, xc = x0 + ((x1 - x0) * (i + 1)) / N;
      const ya = yb - ((yb - yt) * i) / N, yc = yb - ((yb - yt) * (i + 1)) / N;
      line(ctx, xa, ya, xc, ya, PAL.muted, 3); line(ctx, xc, ya, xc, yc, PAL.muted, 3);
    }
    line(ctx, 60, yb, x0, yb, PAL.muted, 3);
    /* the climber on the slope of the stairs */
    const cx = x0 + (x1 - x0) * s.f, cyy = yb - (yb - yt) * s.f;
    runner(ctx, cx, cyy, PAL.ink, s.f * 26);
    /* her speed, along the stairs */
    const ax = 78, ay = -78 * ((yb - yt) / (x1 - x0));
    arrow(ctx, cx + 14, cyy - 54, cx + 14 + ax, cyy - 54 + ay, C('velocity'), 5);
    text(ctx, fmt(V.v, 1) + ' m/s', cx + 20 + ax, cyy - 62 + ay, C('velocity'), { weight: 600, size: 20 });
    /* the height gained so far, bracketed against the full climb */
    line(ctx, x0, yt, 660, yt, PAL.rule, 2, [10, 10]);
    line(ctx, x0, yb, 660, yb, PAL.rule, 2, [10, 10]);
    vbracket(ctx, 630, cyy, yb, C('position'), fmt(s.y, 1) + ' m', 1);
    text(ctx, 'of ' + fmt(H.v, 1) + ' m', 646, yt + 22, C('position'), { size: 17, weight: 600 });
    text(ctx, 't = ' + fmt(tau, 1) + ' s', 110, 130, C('time'), { weight: 600, size: 24 });
    /* ---- the account, on the right ---- */
    const box = { l: 800, r: 1330, t: 150, b: 470 };
    const kJ = 1 / 1000, tot = s.total * kJ, nz = F.nice(0, tot, 4), top = nz.hi;
    const { X, Y } = axes(ctx, box, [0, T()], [0, top], { xl: 't (s)', xc: C('time'), yl: 'energy (kJ)', yc: C('energy'), nx: 4, ny: nz.n, fx: (v) => fmt(v, T() < 20 ? 1 : 0), fy: (v) => fmt(v, top > 20 ? 0 : 1) });
    const end = state(T()), ke = s.ke * kJ;
    /* the four bands, stacked: kinetic, potential, thermal, chemical. Every one of them is
       linear in the time, so each band is a quadrilateral between the start and the end. */
    stack(ctx, X, Y, 0, T(), 0, ke, 0, ke, 0.75);
    stack(ctx, X, Y, 0, T(), ke, ke, ke, ke + end.pe * kJ, 0.45);
    stack(ctx, X, Y, 0, T(), ke, ke, ke + end.pe * kJ, ke + (end.pe + end.th) * kJ, 0.22);
    stack(ctx, X, Y, 0, T(), ke, ke + end.foodAll * kJ, ke + (end.pe + end.th) * kJ, ke + (end.pe + end.th) * kJ, 0.08);
    line(ctx, X(0), Y(tot), X(T()), Y(tot), C('energy'), 5);
    text(ctx, 'the total never changes', X(T() * 0.5), Y(tot) - 20, C('energy'), { size: 17, align: 'center', weight: 600 });
    /* the bands named, each where it is thickest */
    const name = (label, at, lo, hi) => { if ((hi - lo) * (box.b - box.t) / top > 26) text(ctx, label, X(T() * at), Y((lo + hi) / 2), PAL.ink, { size: 17, align: 'center' }); };
    name('kinetic', 0.5, 0, ke);
    name('potential', 0.78, ke, ke + end.pe * kJ);
    name('thermal', 0.72, ke + end.pe * kJ, ke + (end.pe + end.th) * kJ);
    name('chemical', 0.26, ke + 0.5 * end.foodAll * kJ, ke + end.foodAll * kJ);
    if (ke * (box.b - box.t) / top < 26) text(ctx, 'the kinetic energy, ' + J(s.ke) + ' J, is too small to see here', box.l, box.b + 58, PAL.muted, { size: 17 });
    /* where the clock stands */
    line(ctx, X(tau), box.t, X(tau), box.b, C('time'), 3, [4, 8]);
    dot(ctx, X(tau), Y(tot), C('energy'), true, 9);
    headline(ctx, done
      ? 'she has climbed the whole ' + fmt(H.v, 1) + ' m on ' + fmt(s.foodAll * kJ, 1) + ' kJ of food energy, ' + fmt(s.peAll * kJ, 1) + ' kJ of it now height'
      : 't = ' + fmt(tau, 1) + ' s · she has climbed ' + fmt(s.y, 1) + ' m of the ' + fmt(H.v, 1) + ' m and spent ' + fmt(s.spent * kJ, 1) + ' kJ of the ' + fmt(s.foodAll * kJ, 1) + ' kJ');
    readout(d.readout, `\\kKEi + \\kPEi + \\kWnc + \\kOEi = ${Jtex(s.ke)} + 0 + 0 + ${Jtex(s.foodAll)} = ${Jtex(s.total)}\\ \\text{J}`,
      'At this moment the other side of the equation reads ' + J(s.ke) + ' + ' + J(s.pe) + ' + ' + J(s.chem + s.th) + ' = ' + J(s.total)
      + ' J, the same total. No outside nonconservative force does work on the climber and the Earth together, so the work done by nonconservative forces is zero, her kinetic energy is the same at the end as at the start, and every joule that has left her food has gone into height or into heat.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   SIM: the ladder of Table 7.1. The energies of the table stand on one
   logarithmic ladder, from the energy that breaks a strand of DNA to the
   Big Bang, and two of them can be marked and compared. A list of
   energies has no time in it, so the figure is still and gets no
   transport; the sliders alone redraw it.
===================================================================== */
(function () {
  const d = sim('sim-ladder', 400);
  /* name, mantissa, exponent, and the value exactly as the book prints it */
  const ROW = [
    ['the Big Bang', 1, 68, '10⁶⁸'],
    ['the energy released in a supernova', 1, 44, '10⁴⁴'],
    ['fusion of all the hydrogen in Earth’s oceans', 1, 34, '10³⁴'],
    ['annual world energy use', 4, 20, '4 × 10²⁰'],
    ['a large fusion bomb (9 megaton)', 3.8, 16, '3.8 × 10¹⁶'],
    ['1 kg hydrogen, fused to helium', 6.4, 14, '6.4 × 10¹⁴'],
    ['1 kg uranium, by nuclear fission', 8.0, 13, '8.0 × 10¹³'],
    ['a Hiroshima-size fission bomb (10 kiloton)', 4.2, 13, '4.2 × 10¹³'],
    ['a 90,000-metric ton aircraft carrier at 30 knots', 1.1, 10, '1.1 × 10¹⁰'],
    ['1 barrel of crude oil', 5.9, 9, '5.9 × 10⁹'],
    ['1 ton of TNT', 4.2, 9, '4.2 × 10⁹'],
    ['1 gallon of gasoline', 1.2, 8, '1.2 × 10⁸'],
    ['daily home electricity use in a developed country', 7, 7, '7 × 10⁷'],
    ['the recommended daily adult food intake', 1.2, 7, '1.2 × 10⁷'],
    ['a 1000-kg car at 90 km/h', 3.1, 5, '3.1 × 10⁵'],
    ['1 g of fat (9.3 kcal)', 3.9, 4, '3.9 × 10⁴'],
    ['one ATP hydrolysis reaction', 3.2, 4, '3.2 × 10⁴'],
    ['1 g of carbohydrate (4.1 kcal)', 1.7, 4, '1.7 × 10⁴'],
    ['1 g of protein (4.1 kcal)', 1.7, 4, '1.7 × 10⁴'],
    ['a tennis ball at 100 km/h', 2.2, 1, '22'],
    ['a mosquito at 0.5 m/s', 1.3, -6, '1.3 × 10⁻⁶'],
    ['a single electron in a TV tube beam', 4.0, -15, '4.0 × 10⁻¹⁵'],
    ['breaking one DNA strand', 1, -19, '10⁻¹⁹'],
  ];
  const A = ctl(d.controls, { label: '\\text{row}', cls: '', min: 0, max: ROW.length - 1, step: 1, value: 11, unit: '', dec: 0, aria: 'the row of Table 7.1 to mark' });
  const B = ctl(d.controls, { label: '\\text{compared with row}', cls: '', min: 0, max: ROW.length - 1, step: 1, value: 14, unit: '', dec: 0, aria: 'the row of Table 7.1 to compare it with' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const LO = -20, HI = 70, L = 100, R = 1330;
  const pos = (r) => r[2] + Math.log10(r[1]);
  const X = (e) => L + ((R - L) * (e - LO)) / (HI - LO);
  const yl = 240;
  /* a ratio written as the book writes a number: plainly when it is near one, in powers of ten when it is not */
  function ratio(x) {
    if (x >= 0.01 && x < 1000) return fmt(x, x < 10 ? 2 : 0);
    const e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e);
    return fmt(m, 1) + ' × 10' + sup(e);
  }
  function ratioTex(x) {
    if (x >= 0.01 && x < 1000) return fmt(x, x < 10 ? 2 : 0);
    const e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e);
    return fmt(m, 1) + ' \\times 10^{' + e + '}';
  }
  function draw() {
    const { ctx } = begin(d.c);
    const a = ROW[A.v], b = ROW[B.v], xa = X(pos(a)), xb = X(pos(b));
    const va = a[1] * Math.pow(10, a[2]), vb = b[1] * Math.pow(10, b[2]);
    /* the ladder, a rung to the decade, labelled every ten */
    line(ctx, X(LO), yl, X(HI), yl, PAL.ink, 3);
    for (let e = LO; e <= HI; e += 2) {
      const big = (e - LO) % 10 === 0;
      line(ctx, X(e), yl - (big ? 12 : 6), X(e), yl + (big ? 12 : 6), PAL.ink, 2);
      if (big) text(ctx, '10' + sup(e), X(e), yl + 34, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'energy in joules', X(HI), yl + 122, C('energy'), { size: 20, align: 'right', weight: 600 });
    /* every row of the table, marked */
    ROW.forEach((r) => dot(ctx, X(pos(r)), yl, PAL.muted, true, 5));
    /* the two rows the sliders choose, named above the ladder on two lines */
    const label = (r, x, y, filled) => {
      line(ctx, x, yl - 14, x, y + 14, PAL.muted, 2);
      const side = x > 1120 ? 'right' : x < 280 ? 'left' : 'center';
      text(ctx, r[0] + ', ' + r[3] + ' J', x, y, PAL.ink, { size: 20, align: side, weight: 600, bg: PAL.panel });
      dot(ctx, x, yl, C('energy'), filled, 11);
    };
    label(b, xb, 130, false);
    label(a, xa, 186, true);
    /* the distance between them, which is the ratio */
    const same = Math.abs(va - vb) < 1e-12 * Math.max(va, vb);
    if (!same) hbracket(ctx, Math.min(xa, xb), Math.max(xa, xb), 320, C('energy'), '× ' + ratio(Math.max(va, vb) / Math.min(va, vb)));
    headline(ctx, same
      ? a[0] + ' and ' + b[0] + ' carry the same energy, ' + a[3] + ' J'
      : va >= vb
        ? a[0] + ' carries ' + a[3] + ' J, which is ' + ratio(va / vb) + ' times the energy of ' + b[0]
        : a[0] + ' carries ' + a[3] + ' J, which is ' + ratio(vb / va) + ' times less than ' + b[0]);
    readout(d.readout, same ? `${tx(a)} = ${tx(b)}`
      : `\\frac{${tx(va >= vb ? a : b)}}{${tx(va >= vb ? b : a)}} = ${ratioTex(Math.max(va, vb) / Math.min(va, vb))}`,
      'The table runs from the 10⁻¹⁹ J that breaks one strand of DNA to the 10⁶⁸ J of the Big Bang, eighty-seven powers of ten apart. In a column of figures a factor of a thousand looks much like a factor of ten; on the ladder the distance between two marks is the ratio between them.');
  }
  /* a row's value as LaTeX, so that the readout sets it the way the table prints it */
  function tx(r) {
    if (Math.abs(r[2]) <= 2) return fmt(r[1] * Math.pow(10, r[2]), 0) + '\\ \\text{J}';
    return (r[1] === 1 ? '' : fmt(r[1], r[1] === Math.round(r[1]) ? 0 : 1) + ' \\times ') + '10^{' + r[2] + '}\\ \\text{J}';
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: efficiency, and the chain of conversions. Energy goes into a
   device of Table 7.2, part of it comes out as useful work and the rest
   leaves as thermal energy; the useful part can be sent on through a
   second device, which is the book's solar cell feeding an electric
   motor. A ratio of two energies has no time in it, so the figure is
   still and gets no transport.
===================================================================== */
(function () {
  const d = sim('sim-conversion', 520);
  const DEV = [
    ['cycling and climbing', 20], ['swimming at the surface', 2], ['swimming submerged', 4], ['shoveling', 3],
    ['weightlifting', 9], ['a steam engine', 17], ['a gasoline engine', 30], ['a diesel engine', 35],
    ['a nuclear power plant', 35], ['a coal power plant', 42], ['an electric motor', 98], ['a compact fluorescent light', 20],
    ['a residential gas heater', 90], ['a solar cell', 10],
  ];
  const EIN = ctl(d.controls, { label: '\\kEin', cls: 'energy', min: 1, max: 100, step: 1, value: 10, unit: 'MJ', dec: 1, aria: 'the energy put in' });
  const D1 = ctl(d.controls, { label: '\\text{device}', cls: '', min: 0, max: DEV.length - 1, step: 1, value: 9, unit: '', dec: 0, aria: 'the device of Table 7.2 the energy passes through' });
  const D2 = ctl(d.controls, { label: '\\text{then through}', cls: '', min: 0, max: DEV.length, step: 1, value: 0, unit: '', dec: 0, aria: 'a second device of Table 7.2, or none' });
  /* a still picture: it registers no cycle, so it gets no transport */
  const L = 120, W = 1160, TH = 56;
  /* one stage: the useful part of the bar, the rest of it, and what each is called */
  function stage(ctx, y, from, to, eff, useful, waste) {
    const cut = from + (to - from) * eff;
    band(ctx, from, y, Math.max(cut, from + 5), y + TH, 0.75);
    if (to - cut > 3) band(ctx, cut, y, to, y + TH, 0.12, [8, 8]);
    const wide = cut - from > 300;
    if (wide) text(ctx, useful, (from + cut) / 2, y - 20, C('energy'), { size: 20, weight: 600, align: 'center' });
    else text(ctx, useful, from, y + TH + 22, C('energy'), { size: 20, weight: 600 });
    if (to - cut > 280) text(ctx, waste, (cut + to) / 2, y + TH / 2, C('energy'), { size: 17, align: 'center' });
    else if (to - cut > 3) text(ctx, waste, to, y + TH + 22, C('energy'), { size: 17, align: 'right' });
    return cut;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const e1 = DEV[D1.v][1] / 100, two = D2.v > 0, e2 = two ? DEV[D2.v - 1][1] / 100 : 1;
    const ein = EIN.v, out1 = ein * e1, out2 = out1 * e2;
    const mj = (x) => fmt(x, x < 1 ? 3 : x < 10 ? 2 : 1), MJ = (x) => mj(x) + ' MJ';
    /* what went in */
    band(ctx, L, 122, L + W, 122 + TH, 0.75);
    text(ctx, 'energy in, ' + MJ(ein), L + W / 2, 100, C('energy'), { size: 20, weight: 600, align: 'center' });
    arrow(ctx, 200, 192, 200, 248, PAL.ink, 4);
    text(ctx, 'through ' + DEV[D1.v][0] + ', ' + fmt(DEV[D1.v][1], 0) + '% efficient', 224, 212, PAL.ink, { size: 20 });
    /* what the first device passed on, and what it did not */
    const cut1 = stage(ctx, 272, L, L + W, e1, 'useful energy out, ' + MJ(out1), 'thermal energy, ' + MJ(ein - out1));
    if (two) {
      arrow(ctx, 200, 366, 200, 418, PAL.ink, 4);
      text(ctx, 'through ' + DEV[D2.v - 1][0] + ', ' + fmt(DEV[D2.v - 1][1], 0) + '% efficient', 224, 384, PAL.ink, { size: 20 });
      stage(ctx, 434, L, cut1, e2, 'useful energy out, ' + MJ(out2), 'thermal energy, ' + MJ(out1 - out2));
    } else {
      text(ctx, 'Set a second device and the useful energy is sent on through that one as well,', L + W / 2, 420, PAL.muted, { size: 20, align: 'center' });
      text(ctx, 'as the electricity from a solar cell is sent on to an electric motor.', L + W / 2, 450, PAL.muted, { size: 20, align: 'center' });
    }
    headline(ctx, two
      ? DEV[D1.v][0] + ' turns ' + MJ(ein) + ' into ' + MJ(out1) + ', and ' + DEV[D2.v - 1][0] + ' turns that into ' + MJ(out2) + ', so ' + fmt(e1 * e2 * 100, 1) + '% of what went in is left'
      : DEV[D1.v][0] + ' turns ' + MJ(ein) + ' into ' + MJ(out1) + ' of useful energy, and the other ' + MJ(ein - out1) + ' leaves as thermal energy');
    readout(d.readout, `\\text{Eff} = \\frac{\\kWout}{\\kEin} = \\frac{${mj(two ? out2 : out1)}\\ \\text{MJ}}{${mj(ein)}\\ \\text{MJ}} = ${fmt(e1 * e2, 3)}`,
      two ? 'The efficiency of the pair is the product of the two, ' + fmt(e1, 2) + ' × ' + fmt(e2, 2) + ' = ' + fmt(e1 * e2, 3) + ', because the second device works only on what the first one passed to it.'
        : 'The ' + MJ(ein - out1) + ' that does not come out as useful energy has not been destroyed. It leaves as thermal energy, and the total is the same as it was before the conversion.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE: the run the first conceptual question is set on, copied
   faithfully from the book's own drawing. The car accelerates from rest
   down the first hill, runs out of gasoline, coasts over a small crest,
   coasts down the second hill and brakes to a stop at the gas station.
   It answers nothing and has no sliders, so it is still and gets no
   transport.
===================================================================== */
(function () {
  const d = sim('fig-car', 430);
  /* a fuel pump standing on (x, y) */
  function pump(ctx, x, y, color) {
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
    ctx.fillRect(x - 22, y - 86, 44, 86); ctx.strokeRect(x - 22, y - 86, 44, 86);
    ctx.fillStyle = color; ctx.fillRect(x - 14, y - 78, 28, 20);
    ctx.beginPath(); ctx.moveTo(x + 22, y - 62); ctx.quadraticCurveTo(x + 52, y - 58, x + 48, y - 18); ctx.stroke();
    ctx.fillRect(x + 40, y - 22, 16, 10); ctx.restore();
  }
  const PTS = [[110, 190], [470, 320], [640, 285], [980, 375], [1340, 375]];
  function ground(x) {
    for (let i = 0; i < PTS.length - 1; i++) {
      const [x0, y0] = PTS[i], [x1, y1] = PTS[i + 1];
      if (x <= x1 || i === PTS.length - 2) { const s = (1 - Math.cos(Math.PI * Math.min(1, Math.max(0, (x - x0) / (x1 - x0))))) / 2; return y0 + (y1 - y0) * s; }
    }
    return PTS[PTS.length - 1][1];
  }
  const STOP = [[150, 'at rest, with a full tank'], [340, 'out of gasoline'], [640, 'over the crest'], [840, 'coasting down'], [1140, 'braking to a stop']];
  function draw() {
    const { ctx } = begin(d.c);
    /* the hillside, drawn as the book draws it */
    ctx.save(); ctx.beginPath(); ctx.moveTo(80, ground(80));
    for (let x = 80; x <= 1350; x += 6) ctx.lineTo(x, ground(x));
    ctx.lineTo(1350, 412); ctx.lineTo(80, 412); ctx.closePath();
    ctx.fillStyle = PAL.soft; ctx.fill(); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(80, ground(80));
    for (let x = 80; x <= 1350; x += 6) ctx.lineTo(x, ground(x));
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.stroke(); ctx.restore();
    pump(ctx, 1250, ground(1250) + 2, PAL.ink);
    text(ctx, 'gas station', 1250, ground(1250) + 26, PAL.muted, { size: 17, align: 'center' });
    /* the car at each of the positions the question asks about, leaning on the slope, with the book's arrow above it */
    STOP.forEach(([x, label], i) => {
      const y = ground(x), a = Math.atan2(ground(x + 8) - ground(x - 8), 16);
      ctx.save(); ctx.translate(x, y - 10); ctx.rotate(a); F.car(ctx, 0, 0, PAL.ink, 0.9); ctx.restore();
      const ly = Math.max(84, y - 132), at = ly + 22, ab = y - 54;
      if (ab - at > 14) arrow(ctx, x, at, x, ab, PAL.ink, 4);
      text(ctx, label, x, ly, PAL.ink, { size: 17, align: i === 0 ? 'left' : i === STOP.length - 1 ? 'right' : 'center', bg: PAL.panel });
    });
    headline(ctx, 'the car accelerates down the first hill, runs out of gasoline, coasts over the crest and down again, and brakes to a stop');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
