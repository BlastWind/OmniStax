/* Figures for section 7.7 Power. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, vbracket, axes, nice, runner, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, HP = 746, TAU = 2 * Math.PI;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
/* an energy or a power in the book's own style: 120, 1764, 12,500, 0.5 */
const whole = (x) => (x >= 10000 ? commas(String(Math.round(x))) : x >= 100 ? String(Math.round(x)) : fmt(x, 1));
/* a number to two significant figures, in powers of ten once it runs away */
const brief = (x) => {
  if (x >= 1000 || x < 0.01) { const e = Math.floor(Math.log10(x)), mm = x / Math.pow(10, e); return (Math.abs(mm - 1) < 0.05 ? '' : fmt(mm, 1) + ' × ') + '10' + sup(e); }
  return fmt(Number(x.toPrecision(2)), x >= 10 ? 0 : 1);
};
/* a factor written the way one would say it: 16, or 1/25 when it is less than one */
const factor = (r) => (r >= 1 ? brief(r) : '1/' + brief(1 / r));
/* money, which a canvas may write with a plain dollar sign */
const money = (x) => '$' + (x < 10 ? x.toFixed(2) : commas(x.toFixed(0)));

/* =====================================================================
   FIGURE 7.21: the woman running up the stairs. She climbs the flight in
   the time the slider sets, and the work she has delivered accumulates
   on the graph beside the staircase, whose steepness is her power
   output. The scene stands tall, so the graph goes beside it rather
   than below. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-stairs', 660);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 100, step: 1, value: 60, unit: 'kg', dec: 0, onInput: reset, aria: 'her mass' });
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 1, max: 6, step: 0.25, value: 3, unit: 'm', dec: 2, onInput: reset, aria: 'height of the flight' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1.5, max: 12, step: 0.25, value: 3.5, unit: 's', dec: 2, onInput: reset, aria: 'the time she takes' });
  const vf = ctl(d.controls, { label: '\\kvf', cls: 'velocity', min: 0, max: 4, step: 0.1, value: 2, unit: 'm/s', dec: 2, onInput: reset, aria: 'her speed at the top' });
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  /* the flight fills the scene from two metres up, and a shorter one is drawn shorter */
  function stairs(ctx, x0, y0, rise, run, n) {
    const dx = run / n, dy = rise / n;
    const walk = (c) => { c.moveTo(x0, y0); for (let i = 0; i < n; i++) { c.lineTo(x0 + i * dx, y0 - (i + 1) * dy); c.lineTo(x0 + (i + 1) * dx, y0 - (i + 1) * dy); } };
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); walk(ctx); ctx.lineTo(x0 + run, y0); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); walk(ctx); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, f = T.v > 0 ? tau / T.v : 1;
    const KE = 0.5 * m.v * vf.v * vf.v, PE = m.v * G * h.v, W = KE + PE, P = W / T.v;
    /* the scene: a flight of stairs on a fixed scale, so a taller flight really is drawn taller */
    const x0 = 150, y0 = 560, SC = 380 / Math.max(h.v, 2), rise = h.v * SC, run = 1.2 * rise, n = clamp(Math.round(h.v / 0.2), 5, 30);
    line(ctx, 60, y0, 800, y0, PAL.muted, 3);
    stairs(ctx, x0, y0, rise, run, n);
    vbracket(ctx, x0 + run + 40, y0, y0 - rise, C('position'), 'h = ' + fmt(h.v, 2) + ' m', 1);
    dot(ctx, x0 - 8, y0 - 12, PAL.ink, false, 10);
    text(ctx, 'she starts from rest', x0 - 20, y0 + 36, PAL.muted, { size: 17 });
    runner(ctx, x0 + f * run, y0 - f * rise - 18, PAL.ink, tau * 9);
    if (vf.v > 0.05) {
      const ax = x0 + run - 90, ay = y0 - rise - 36;
      arrow(ctx, ax, ay, ax + vf.v * 26, ay, C('velocity'), 5);
      text(ctx, fmt(vf.v, 2) + ' m/s at the top', ax, ay - 28, C('velocity'), { size: 17, weight: 600 });
    }
    /* the graph beside the scene: the work delivered against the time, whose steepness is the power */
    const box = { l: 860, r: 1330, t: 175, b: 520 };
    const yr = nice(0, Math.max(W, 1), 4), xr = nice(0, T.v, 4);
    const { X, Y } = axes(ctx, box, [0, xr.hi], [yr.lo, yr.hi], { xl: 't (s)', xc: C('time'), yl: 'the work delivered (J)', yc: C('energy'), nx: xr.n, ny: yr.n, fx: (v) => fmt(v, xr.hi / xr.n < 1 ? 1 : 0), fy: (v) => commas(fmt(v, 0)) });
    /* the two levels the work is made of, labelled clear of one another even when they nearly meet */
    const level = (y, s) => text(ctx, s, box.l + 14, y, C('energy'), { size: 17 });
    if (Y(PE) - Y(W) > 14) { line(ctx, box.l, Y(PE), box.r, Y(PE), C('energy'), 3, [10, 10]); level(Y(PE) + 18, 'mgh = ' + whole(PE) + ' J, the climbing'); }
    line(ctx, box.l, Y(W), box.r, Y(W), C('energy'), 3, [10, 10]);
    level(Math.max(box.t + 12, Y(W) - 16), 'W = ' + whole(W) + ' J, the whole job');
    line(ctx, X(0), Y(0), X(T.v), Y(W), C('energy'), 5);
    text(ctx, 'the slope of that line is the average rate, ' + whole(P) + ' W', box.r - 14, box.b - 26, C('power'), { size: 17, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (tau > 1e-9) { line(ctx, X(tau), Y(0), X(tau), Y(W * f), PAL.muted, 2, [4, 8]); line(ctx, box.l, Y(W * f), X(tau), Y(W * f), PAL.muted, 2, [4, 8]); }
    dot(ctx, X(0), Y(0), C('energy'), false, 10);
    dot(ctx, X(tau), Y(W * f), C('energy'), true, 9);
    headline(ctx, tau < 1e-9 ? 'she stands at the foot of a ' + fmt(h.v, 2) + ' m flight, about to run up it in ' + fmt(T.v, 2) + ' s'
      : done ? 't = ' + fmt(T.v, 2) + ' s · she reaches the top having done ' + whole(W) + ' J of work, an output of ' + whole(P) + ' W'
      : 't = ' + fmt(tau, 2) + ' s · she is ' + fmt(100 * f, 0) + '% of the way up and has delivered ' + whole(W * f) + ' J of the ' + whole(W) + ' J, a rate of ' + whole(P) + ' W');
    readout(d.readout, `\\kP = \\frac{\\kW}{\\kt} = \\frac{\\tfrac{1}{2}m{\\kvf}^2 + m\\kg\\kh}{\\kt} = \\frac{${whole(KE)}\\ \\text{J} + ${whole(PE)}\\ \\text{J}}{${fmt(T.v, 2)}\\ \\text{s}} = ${whole(P)}\\ \\text{W}`,
      'That is ' + fmt(P / HP, 3) + ' hp, since 1 hp = 746 W. Of the ' + whole(W) + ' J the job takes, ' + whole(PE) + ' J go into lifting her and only ' + whole(KE) + ' J into speeding her up, so nearly all of her output is spent on the climb.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   SIM: every power of Table 7.3 on one logarithmic scale. Each entry is
   a bar whose length is the power it stands for, counted in powers of
   ten, and the line the sliders set falls between two of them, with the
   factor from each of those written on its bar. There is no time in a
   comparison of rates, so it is a still picture that answers its
   sliders and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-power-ladder', 660);
  const M = ctl(d.controls, { label: '\\text{mantissa } m', cls: '', min: 1, max: 9.9, step: 0.1, value: 8, unit: '', dec: 1, aria: 'mantissa' });
  const N = ctl(d.controls, { label: '\\text{exponent } n', cls: '', min: -3, max: 38, step: 1, value: 4, unit: '', dec: 0, aria: 'exponent' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  /* the rows of Table 7.3 in the book's order: the power in watts, the way the book prints it, and what it belongs to */
  const ROWS = [
    [5e37, '5 × 10³⁷', 'a supernova at its peak'], [1e37, '10³⁷', 'the Milky Way galaxy'], [1e28, '10²⁸', 'the Crab Nebula pulsar'],
    [4e26, '4 × 10²⁶', 'the Sun'], [4e15, '4 × 10¹⁵', 'a volcanic eruption at its maximum'], [2e12, '2 × 10¹²', 'a lightning bolt'],
    [3e9, '3 × 10⁹', 'a nuclear power plant'], [1e8, '10⁸', 'an aircraft carrier'], [2e6, '2 × 10⁶', 'a dragster'], [8e4, '8 × 10⁴', 'a car'],
    [5e3, '5 × 10³', 'a football player'], [4e3, '4 × 10³', 'a clothes dryer'], [100, '100', 'a person at rest'],
    [60, '60', 'an incandescent light bulb'], [8, '8', 'the heart of a person at rest'], [3, '3', 'an electric clock'], [1e-3, '10⁻³', 'a pocket calculator'],
  ];
  const LO = -4, HI = 38, BL = 350, BR = 1230, X = (u) => BL + ((BR - BL) * (u - LO)) / (HI - LO);
  const TOP = 112, DY = 27, AX = 584;
  function draw() {
    const { ctx } = begin(d.c);
    const P = M.v * Math.pow(10, N.v), u = Math.log10(P), xm = X(clamp(u, LO, HI));
    const printed = (M.v === 1 ? '' : fmt(M.v, 1) + ' × ') + '10' + sup(N.v);
    const below = ROWS.filter(([v]) => Math.log10(v) < u - 0.01).sort((a, b) => b[0] - a[0])[0];
    const above = ROWS.filter(([v]) => Math.log10(v) > u + 0.01).sort((a, b) => a[0] - b[0])[0];
    const on = ROWS.find(([v]) => Math.abs(Math.log10(v) - u) <= 0.01);
    /* one bar to the row, each step to the right a power of ten */
    ROWS.forEach((row, i) => {
      const x = X(Math.log10(row[0])), y = TOP + i * DY, hot = row === below || row === above || row === on;
      text(ctx, row[2], 330, y, hot ? C('power') : PAL.muted, { size: 17, align: 'right', weight: hot ? 600 : 400 });
      line(ctx, BL, y, x, y, hot ? C('power') : alpha(C('power'), 0.38), 13);
      text(ctx, row[1] + ' W', x + 13, y, hot ? C('power') : PAL.muted, { size: 17, weight: hot ? 600 : 400 });
    });
    /* the scale the bars are drawn on */
    line(ctx, BL, AX, BR, AX, PAL.muted, 2);
    for (let n = LO; n <= HI; n++) line(ctx, X(n), AX - 6, X(n), AX + 6, PAL.rule, 2);
    for (let n = -3; n <= 35; n += n === -3 ? 3 : 5) { line(ctx, X(n), AX - 8, X(n), AX + 10, PAL.muted, 2); text(ctx, '10' + sup(n) + ' W', X(n), AX + 34, PAL.muted, { size: 17, align: 'center' }); }
    /* the power the sliders set, and how far it stands from the entry on either side of it */
    line(ctx, xm, 92, xm, AX - 14, PAL.ink, 3, [8, 6]);
    text(ctx, printed + ' W', clamp(xm, 140, 1260), 74, C('power'), { size: 22, weight: 600, align: 'center' });
    /* the factor goes after the entry's own figure, where nothing else on the row can sit on it */
    const mark = (row, label) => {
      const x = X(Math.log10(row[0])), y = TOP + ROWS.indexOf(row) * DY;
      ctx.save(); ctx.font = `600 17px ${FONT}`; const w = ctx.measureText(row[1] + ' W').width; ctx.restore();
      text(ctx, label, Math.min(x + w + 30, 1330), y, PAL.ink, { size: 17, weight: 600 });
    };
    if (below) mark(below, '× ' + factor(P / below[0]));
    if (above) mark(above, '× ' + factor(above[0] / P));
    headline(ctx, on ? printed + ' W is the power Table 7.3 gives for ' + on[2]
      : below && above ? printed + ' W falls between ' + below[2] + ' and ' + above[2]
      : printed + ' W lies beyond every entry of Table 7.3');
    readout(d.readout, `\\kP = ${M.v === 1 ? '' : fmt(M.v, 1) + ' \\times '}10^{${N.v}}\\ \\text{W}`,
      below && above ? 'That is ' + factor(P / below[0]) + ' times the ' + below[1] + ' W of ' + below[2] + ' and ' + factor(P / above[0]) + ' of the ' + above[1] + ' W of ' + above[2] + '. A factor of that kind, read off two rows of Table 7.3, is what the first two problems of the section ask for.'
        : 'The scale runs from the 10⁻³ W of a pocket calculator to beyond the 5 × 10³⁷ W of a supernova, and every entry of Table 7.3 has a bar on it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the energy an appliance takes in a month, and what it costs. The
   meter turns while the appliance runs, the graph adds a step for each
   day, and the cost follows the energy. A quantity accumulates as the
   clock runs, so the figure loops over the thirty days with the
   scrubber.
===================================================================== */
(function () {
  const d = sim('sim-bill', 560);
  const P = ctl(d.controls, { label: '\\kP', cls: 'power', min: 0.05, max: 5, step: 0.05, value: 0.2, unit: 'kW', dec: 2, onInput: reset, aria: 'the power the appliance draws' });
  const HRS = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 24, step: 0.5, value: 6, unit: 'h/d', dec: 2, onInput: reset, aria: 'the hours it runs each day' });
  const PR = ctl(d.controls, { label: '\\text{price}', cls: '', min: 0.05, max: 0.4, step: 0.005, value: 0.12, unit: 'per kW·h', dec: 3, onInput: reset, aria: 'the price of a kilowatt-hour' });
  const DAYS = 30;
  const cy = cycle(() => DAYS, 1.2);
  function reset() { cy.reset(); }
  /* the energy in kilowatt-hours after t days, the appliance running the first HRS hours of each day */
  const energy = (t) => { const full = Math.floor(t), part = Math.min(t - full, HRS.v / 24); return P.v * (full * HRS.v + part * 24); };
  function meter(ctx, x, y, r, turn) {
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; line(ctx, x + (r - 13) * Math.sin(a), y - (r - 13) * Math.cos(a), x + (r - 4) * Math.sin(a), y - (r - 4) * Math.cos(a), PAL.rule, i % 3 ? 2 : 4); }
    const a = turn * TAU;
    line(ctx, x, y, x + (r - 22) * Math.sin(a), y - (r - 22) * Math.cos(a), C('power'), 5);
    dot(ctx, x, y, C('power'), true, 7);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= DAYS - 1e-9, E = energy(tau), Etot = energy(DAYS);
    /* the meter, one turn of its pointer to the kilowatt-hour */
    meter(ctx, 190, 195, 80, E);
    text(ctx, 'the meter turns once for every kilowatt-hour', 190, 302, PAL.muted, { size: 17, align: 'center' });
    /* the two things the rate of spending is made of */
    const bl = 400, bw = 420;
    const bar = (y, frac, colour, caption, scale) => {
      text(ctx, caption, bl, y - 34, colour, { size: 20, weight: 600 });
      line(ctx, bl, y, bl + bw, y, PAL.rule, 26);
      line(ctx, bl, y, bl + bw * frac, y, colour, 26);
      text(ctx, scale, bl + bw + 14, y, PAL.muted, { size: 17 });
    };
    bar(158, P.v / 5, C('power'), 'it draws ' + fmt(P.v, 2) + ' kW', 'of 5 kW');
    bar(246, HRS.v / 24, C('time'), 'for ' + fmt(HRS.v, 2) + ' h of every day', 'of 24 h');
    /* the graph: a step of energy for every day the appliance runs */
    const box = { l: 210, r: 1330, t: 355, b: 480 };
    const yr = nice(0, Math.max(Etot, 0.1), 3);
    const { X, Y } = axes(ctx, box, [0, DAYS], [yr.lo, yr.hi], { xl: 'the day of the month', xc: C('time'), yl: 'the energy taken (kW·h)', yc: C('energy'), nx: 6, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, yr.hi < 10 ? 1 : 0) });
    ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(X(0), Y(0));
    for (let i = 0; i < DAYS; i++) { ctx.lineTo(X(i + HRS.v / 24), Y(energy(i + HRS.v / 24))); ctx.lineTo(X(i + 1), Y(energy(i + 1))); }
    ctx.stroke(); ctx.restore();
    if (tau > 1e-9) line(ctx, X(tau), Y(yr.lo), X(tau), Y(E), PAL.muted, 2, [4, 8]);
    dot(ctx, X(0), Y(0), C('energy'), false, 10);
    dot(ctx, X(tau), Y(E), C('energy'), true, 9);
    text(ctx, money(E * PR.v), clamp(X(tau), box.l + 50, box.r - 50), Y(E) - 30, PAL.ink, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    headline(ctx, tau < 1e-9 ? 'the month begins, and the appliance has taken nothing from the supply yet'
      : done ? 'after ' + DAYS + ' days the appliance has used ' + fmt(Etot, 1) + ' kW·h, which at ' + money(PR.v) + ' per kW·h comes to ' + money(Etot * PR.v) + ' for the month'
      : 'day ' + fmt(tau, 1) + ' of ' + DAYS + ' · the appliance has used ' + fmt(E, 1) + ' kW·h, which comes to ' + money(E * PR.v) + ' so far');
    readout(d.readout, `\\kE = \\kP\\kt = (${fmt(P.v, 3)}\\ \\text{kW})(${fmt(HRS.v, 2)}\\ \\text{h/d})(${fmt(DAYS, 1)}\\ \\text{d}) = ${fmt(Etot, 1)}\\ \\text{kW}\\cdot\\text{h}`,
      'At ＄' + fmt(PR.v, 3) + ' per kilowatt-hour that comes to ＄' + fmt(Etot * PR.v, 2) + ' for the month. The bill falls just as fast whether you cut the power the appliance draws or the hours you leave it running, which is why a water heater is worth going after and a toaster is not.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => DAYS / 5), draw });
})();

};
