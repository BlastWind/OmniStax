/* Figures for section 20.4 Electric Power and Energy. Boots against the section's text article.
   The section states one product and two substitutions of it, and then spends
   its second half on the reader's electric bill. The first sim is one source
   driving one resistor, with the three expressions for the power computed
   side by side from the same two numbers and the two graphs that say which
   variable was being held fixed. The second is Example 20.8 with every one of
   its four numbers on a slider: an incandescent bulb and a compact
   fluorescent lamp burning side by side, the energy each has used drawn as a
   bar in kilowatt-hours and the running cost of each carried down the graph
   against the hours. Nothing either figure computes changes with time, so
   both are still and neither takes a transport; the arrows round the loop are
   notation and not a flow of carriers. The page binds power, current,
   voltage, resistance, energy and time; the prices, the bulbs' glass and
   bases, the resistor's zigzag, the wires and the frames are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const money = (v) => '$' + v.toFixed(2);

/* =====================================================================
   SIM: the three expressions for electric power. One source, one
   resistor, the same two numbers read three ways, and two graphs saying
   which of them was being held fixed. Still: the power is a rate, but
   nothing the figure computes changes with time, so it registers no
   cycle and takes no transport.
===================================================================== */
(function () {
  const d = sim('sim-power-in-a-circuit', 980);
  const V = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'voltage of the source' });
  const R = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.35, max: 12, step: 0.05, value: 4.8, unit: 'Ω', dec: 3, aria: 'resistance of the resistor' });
  /* The loop, in logical units: the source down the left side, the resistor down the right. */
  const L = 340, Rx = 1060, T = 165, B = 435;
  /* Both graphs are fixed at 0 to 200 W up. The slider maxima would reach 1646 W, which leaves the
     30.0 W of the hot headlight a line along the axis; a state above 200 W is pinned at the top and
     the readout states the true number. */
  const PMAX = 200;
  const gV = { l: 150, r: 660, t: 600, b: 880 };          /* 0 to 24 V across, 0 to 200 W up */
  const gR = { l: 810, r: 1320, t: 600, b: 880 };         /* 0 to 12 Ω across, 0 to 200 W up */
  function zigzag(ctx, x, y1, y2, n) {                    /* the resistor's own symbol, in ink */
    const w = 26, h = (y2 - y1) / n;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
    ctx.moveTo(x, y1);
    for (let i = 0; i < n; i++) ctx.lineTo(x + (i % 2 ? -w : w), y1 + h * (i + 0.5));
    ctx.lineTo(x, y2); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const I = V.v / R.v, P = V.v * I;
    /* the loop: four wires in ink, broken where the source and the resistor sit */
    line(ctx, L, T, Rx, T, PAL.ink, 3);
    line(ctx, L, B, Rx, B, PAL.ink, 3);
    line(ctx, L, T, L, 264, PAL.ink, 3); line(ctx, L, 306, L, B, PAL.ink, 3);
    line(ctx, Rx, T, Rx, 240, PAL.ink, 3); line(ctx, Rx, 360, Rx, B, PAL.ink, 3);
    /* the source: the long plate of a cell over its short one, the voltage in the voltage hue */
    line(ctx, L - 36, 264, L + 36, 264, PAL.ink, 4);
    line(ctx, L - 18, 306, L + 18, 306, PAL.ink, 8);
    text(ctx, '+', L + 52, 258, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '−', L + 52, 312, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'V = ' + fmt(V.v, 1) + ' V', L - 56, 285, C('voltage'), { size: 24, weight: 600, align: 'right', base: 'middle', bg: PAL.panel });
    text(ctx, 'source', L - 56, 320, PAL.muted, { size: 19, align: 'right', base: 'middle' });
    /* the resistor: its zigzag in ink, its resistance and the power it dissipates in their hues */
    zigzag(ctx, Rx, 240, 360, 6);
    text(ctx, 'R = ' + fmt(R.v, 3) + ' Ω', Rx + 52, 272, C('resistance'), { size: 24, weight: 600, base: 'middle', bg: PAL.panel });
    text(ctx, 'dissipating ' + fmt(P, 1) + ' W', Rx + 52, 328, C('power'), { size: 24, weight: 600, base: 'middle', bg: PAL.panel });
    /* the current round the loop: arrowheads, which are notation and never animated */
    arrow(ctx, 600, T, 800, T, C('current'), 5);
    arrow(ctx, 800, B, 600, B, C('current'), 5);
    text(ctx, 'I = ' + fmt(I, 2) + ' A', 700, T - 34, C('current'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'the same current all the way round', 700, B + 40, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'supplying ' + fmt(P, 1) + ' W', L - 56, 352, C('power'), { size: 22, weight: 600, align: 'right', base: 'middle', bg: PAL.panel });
    /* the power against the voltage at the resistance now set: a parabola */
    const a1 = axes(ctx, gV, [0, 24], [0, PMAX], { nx: 4, ny: 4, xl: 'source voltage V (V)', xc: C('voltage'), yl: 'P (W)', yc: C('power') });
    curve(ctx, (v) => (v * v) / R.v, 0, Math.min(24, Math.sqrt(PMAX * R.v)), a1.X, a1.Y, C('power'), 5, 160);
    pinned(ctx, gV, a1.X, a1.Y, V.v, P, C('power'));
    /* the power against the resistance at the voltage now set: a hyperbola */
    const a2 = axes(ctx, gR, [0, 12], [0, PMAX], { nx: 4, ny: 4, xl: 'resistance R (Ω)', xc: C('resistance'), yl: 'P (W)', yc: C('power') });
    curve(ctx, (r) => (V.v * V.v) / r, Math.max(0.35, (V.v * V.v) / PMAX), 12, a2.X, a2.Y, C('power'), 5, 200);
    pinned(ctx, gR, a2.X, a2.Y, R.v, P, C('power'));
    topline(ctx, 'A ' + fmt(V.v, 1) + ' V source across a ' + fmt(R.v, 3) + ' Ω resistance drives ' + fmt(I, 2) + ' A and delivers ' + fmt(P, 1) + ' W.');
    readout(d.readout, `\\kP = \\kIcur\\kV = (${fmt(I, 2)}\\ \\text{A})(${fmt(V.v, 1)}\\ \\text{V}) = ${fmt(P, 1)}\\ \\text{W}`,
      'The same two numbers read the other two ways give P = V²/R = ' + fmt((V.v * V.v) / R.v, 1) + ' W and P = I²R = ' + fmt(I * I * R.v, 1) + ' W, which is the same power. '
      + 'The source supplies it and the resistor dissipates it, and in a circuit with one source and one resistor those are always the same number. '
      + (R.v <= 1 ? 'At this resistance the figure is drawing the headlight as it is switched on cold, when it briefly takes far more power than it does hot.'
        : 'Bring the resistance down and the power rises, because the voltage is being held fixed; hold the current fixed instead and the same resistance would raise the power rather than lower it.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: what the lighting costs. An incandescent bulb and a compact
   fluorescent lamp burning side by side, the energy each has used and the
   running cost of each, with both totals carried down the graph against
   the hours. Still: the hours are a slider the reader sets, not a clock
   the figure runs.
===================================================================== */
(function () {
  const d = sim('sim-cost-of-lighting', 1000);
  const Pi = ctl(d.controls, { label: '\\kP_{\\text{bulb}}', cls: 'power', min: 25, max: 100, step: 5, value: 60, unit: 'W', dec: 0, aria: 'power of the incandescent bulb' });
  const Pc = ctl(d.controls, { label: '\\kP_{\\text{CFL}}', cls: 'power', min: 6, max: 30, step: 1, value: 15, unit: 'W', dec: 0, aria: 'power of the compact fluorescent lamp' });
  const H = ctl(d.controls, { label: '\\kt', cls: 'time', min: 100, max: 4000, step: 100, value: 1000, unit: 'h', dec: 0, aria: 'hours the lamps are left on' });
  const PR = ctl(d.controls, { label: '\\text{price}', cls: '', min: 5, max: 30, step: 1, value: 12, unit: '¢/kW·h', dec: 0, aria: 'price of electricity in cents per kilowatt-hour' });
  const BULB = 0.25, CFL = 1.50, BULB_LIFE = 1000, CFL_LIFE = 10000;   /* the prices and lifetimes of Example 20.8 */
  const kwh = (p, h) => (p / 1000) * h;
  const cost = (p, h, cap, life) => kwh(p, h) * (PR.v / 100) + cap * (h / life);
  /* The graph is fixed at 0 to 4000 h across and 0 to $60 up. The slider maxima would reach $121,
     which leaves the $7.45 of Example 20.8 a sixteenth of the height; a state above $60 is pinned. */
  const CMAX = 60, EMAX = 400;                            /* 400 kW·h is 100 W for 4000 hours, the longest bar */
  const g = { l: 190, r: 1250, t: 640, b: 900 };
  function base(ctx, x, y, s) {                           /* the screw base both lamps stand on, in ink */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(x - 20 * s, y - 42 * s); ctx.lineTo(x - 20 * s, y); ctx.lineTo(x + 20 * s, y); ctx.lineTo(x + 20 * s, y - 42 * s);
    ctx.stroke();
    for (let i = 0; i < 3; i++) line(ctx, x - 20 * s, y - 10 * s - 11 * s * i, x + 20 * s, y - 10 * s - 11 * s * i, PAL.ink, 2);
    ctx.restore();
  }
  function incandescent(ctx, x, y, s) {                   /* a pear-shaped glass envelope over a filament */
    base(ctx, x, y, s);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(x - 20 * s, y - 42 * s);
    ctx.bezierCurveTo(x - 24 * s, y - 62 * s, x - 52 * s, y - 72 * s, x - 52 * s, y - 108 * s);
    ctx.bezierCurveTo(x - 52 * s, y - 152 * s, x + 52 * s, y - 152 * s, x + 52 * s, y - 108 * s);
    ctx.bezierCurveTo(x + 52 * s, y - 72 * s, x + 24 * s, y - 62 * s, x + 20 * s, y - 42 * s);
    ctx.stroke(); ctx.restore();
    /* the filament: two supports and a coil between them */
    line(ctx, x - 13 * s, y - 52 * s, x - 13 * s, y - 100 * s, PAL.ink, 2);
    line(ctx, x + 13 * s, y - 52 * s, x + 13 * s, y - 100 * s, PAL.ink, 2);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath();
    ctx.moveTo(x - 13 * s, y - 100 * s);
    for (let i = 0; i <= 6; i++) ctx.lineTo(x - 13 * s + (26 * s * i) / 6, y - (i % 2 ? 116 : 100) * s);
    ctx.lineTo(x + 13 * s, y - 100 * s); ctx.stroke(); ctx.restore();
  }
  function compactFluorescent(ctx, x, y, s) {             /* a spiral tube on the same screw base */
    base(ctx, x, y, s);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8 * s; ctx.lineCap = 'round'; ctx.beginPath();
    const turns = 3.1, top = y - 148 * s, bot = y - 48 * s;
    for (let i = 0; i <= 200; i++) {
      const u = i / 200, th = u * turns * Math.PI * 2;
      const px = x + 40 * s * Math.cos(th), py = bot + (top - bot) * u + 9 * s * Math.sin(th);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke(); ctx.restore();
  }
  function lamp(ctx, x, name, p, capital, life, drawIt) {
    const y = 300, E = kwh(p, H.v), total = cost(p, H.v, capital, life);
    drawIt(ctx, x, y, 1);
    text(ctx, name, x, y + 46, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, fmt(p, 0) + ' W', x, y + 78, C('power'), { size: 24, weight: 600, align: 'center' });
    /* the energy it has used, as a bar in kilowatt-hours */
    const bw = 300, bx = x - bw / 2, by = y + 104;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw, 34); ctx.restore();
    ctx.save(); ctx.fillStyle = C('energy'); ctx.fillRect(bx, by, bw * Math.min(1, E / EMAX), 34); ctx.restore();
    text(ctx, fmt(E, 1) + ' kW·h used', x, by + 62, C('energy'), { size: 22, weight: 600, align: 'center' });
    text(ctx, money(total) + ' so far', x, by + 96, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'the lamp itself costs ' + money(capital) + ' and lasts ' + fmt(life, 0) + ' h', x, by + 126, PAL.muted, { size: 19, align: 'center' });
    return total;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ti = lamp(ctx, 430, 'incandescent bulb', Pi.v, BULB, BULB_LIFE, incandescent);
    const tc = lamp(ctx, 1010, 'compact fluorescent lamp', Pc.v, CFL, CFL_LIFE, compactFluorescent);
    /* both running totals against the hours: money is not a physical quantity, so both curves are ink */
    const a = axes(ctx, g, [0, 4000], [0, CMAX], { nx: 4, ny: 4, xl: 'hours burned t (h)', xc: C('time'), yl: 'total cost ($)', yc: PAL.ink, fy: (v) => '$' + v.toFixed(0) });
    const capI = 4000 * Math.min(1, CMAX / Math.max(CMAX, cost(Pi.v, 4000, BULB, BULB_LIFE)));
    curve(ctx, (h) => cost(Pi.v, h, BULB, BULB_LIFE), 0, capI, a.X, a.Y, PAL.ink, 5, 120);
    ctx.save(); ctx.setLineDash([10, 10]);
    const capC = 4000 * Math.min(1, CMAX / Math.max(CMAX, cost(Pc.v, 4000, CFL, CFL_LIFE)));
    curve(ctx, (h) => cost(Pc.v, h, CFL, CFL_LIFE), 0, capC, a.X, a.Y, alpha(PAL.ink, 0.7), 5, 120);
    ctx.restore();
    pinned(ctx, g, a.X, a.Y, H.v, ti, PAL.ink);
    pinned(ctx, g, a.X, a.Y, H.v, tc, alpha(PAL.ink, 0.7));
    text(ctx, 'incandescent bulb', a.X(capI) - 12, a.Y(Math.min(CMAX, cost(Pi.v, capI, BULB, BULB_LIFE))) - 26, PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'compact fluorescent lamp', a.X(capC) - 12, a.Y(Math.min(CMAX, cost(Pc.v, capC, CFL, CFL_LIFE))) - 26, PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    topline(ctx, 'Over ' + fmt(H.v, 0) + ' hours the ' + fmt(Pi.v, 0) + '-W bulb uses ' + fmt(kwh(Pi.v, H.v), 1) + ' kW·h and costs ' + money(ti)
      + ', while the ' + fmt(Pc.v, 0) + '-W CFL uses ' + fmt(kwh(Pc.v, H.v), 1) + ' kW·h and costs ' + money(tc) + '.');
    readout(d.readout, `\\kE = \\kP\\kt = (${fmt(Pi.v, 0)}\\ \\text{W})(${fmt(H.v, 0)}\\ \\text{h}) = ${fmt(kwh(Pi.v, H.v), 1)}\\ \\text{kW}\\cdot\\text{h}`,
      'The compact fluorescent lamp uses E = Pt = ' + fmt(kwh(Pc.v, H.v), 1) + ' kW·h over the same hours, so at ' + fmt(PR.v, 0) + ' cents a kilowatt-hour the two lamps have cost '
      + money(ti) + ' and ' + money(tc) + ', the price of each lamp included. Over the ten thousand hours the CFL lasts, the difference comes to '
      + money((cost(Pi.v, CFL_LIFE, BULB, BULB_LIFE) - cost(Pc.v, CFL_LIFE, CFL, CFL_LIFE))) + '.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
