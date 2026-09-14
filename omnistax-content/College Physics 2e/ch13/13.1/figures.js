/* Figures for section 13.1 Temperature. Boots against the section's text article.
   Four of the five figures answer their sliders and nothing else: a strip
   held at one temperature, a temperature read on three scales, a ladder of
   temperatures and a graph of pressure against temperature have no clock in
   them, so none registers a cycle. The fifth, two blocks and a plate coming
   to one temperature, is the one idea of the section with a time in it, and
   it moves. Temperature is never a tint on a body here: the metals, the
   gases and the three bodies wear the categorical palette, and the
   temperature hue is on the symbol, the slider and the axis alone. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, topline, hbracket, axes, pinned, curve, fixed, cycle, hover, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const cToF = (c) => (9 / 5) * c + 32, cToK = (c) => c + 273.15;
/* a number written with the typographic minus */
const num = (v, d) => { const x = Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v; return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
/* a power of ten as a superscript for the canvas, where text() knows only subscripts */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
const pow10 = (n) => '10' + sup(n) + ' K';
/* a temperature in LaTeX, in scientific notation where it is very large or very small */
function sci(v, d) {
  if (v === 0) return '0';
  const a = Math.abs(v);
  if (a >= 1e4 || a < 1e-2) {
    let e = Math.floor(Math.log10(a)), m = v / Math.pow(10, e);
    if (Math.abs(m) >= 10 - 0.5 * Math.pow(10, -d)) { m /= 10; e += 1; }
    return `${fmt(m, d)} \\times 10^{${e}}`;
  }
  return num(v, d);
}
/* a thermometer glyph: a tube whose column stands for the reading, which is
   the instrument itself and not a tint on the body it touches */
function thermometer(ctx, x, yb, h, frac, color) {
  const w = 16, r = 13, top = yb - h;
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(x - w / 2, top); ctx.lineTo(x - w / 2, yb - r); ctx.arc(x, yb, r, Math.PI, 0, true); ctx.lineTo(x + w / 2, top); ctx.arc(x, top, w / 2, 0, Math.PI, true); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = color;
  const col = Math.max(0, Math.min(1, frac)) * (h - 22);
  ctx.beginPath(); ctx.arc(x, yb, r - 4, 0, TAU); ctx.fill();
  ctx.fillRect(x - 4, yb - r - col, 8, col + 4);
  ctx.restore();
}

/* =====================================================================
   FIGURE 13.4: the bimetallic strip. Two metals bonded along their length
   and clamped at the bottom; the reader sets the temperature and the strip
   curves towards the metal that has grown less. Still: a strip held at one
   temperature has no time in it, so the figure answers its slider and
   registers no cycle. The bend is drawn four times its true size, and the
   readout says so (root rule 28.4).
===================================================================== */
(function () {
  const d = sim('sim-bimetallic-strip', 620);
  const T0 = 20, ALPHA_L = 19e-6, ALPHA_R = 12e-6, L = 0.10, THICK = 1e-3, EXAG = 4;
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -40, max: 200, step: 1, value: T0, unit: '°C', dec: 0, aria: 'the temperature of the strip', detents: [{ v: T0, label: 'T₀' }, { v: 120, label: 'heated' }] });
  const BX = 640, BY = 540, LPX = 400, S = LPX / L, W = 18;       /* the strip: base, height in units, units per metre, half-width of one layer */
  const brass = F.cat(0), steel = F.cat(1);
  let hits = [];
  hover(d.stage, () => hits);
  /* the centre line of the strip as an arc of curvature k (per unit), tangent up at the base */
  const along = (k, s) => (Math.abs(k) < 1e-7 ? { x: BX, y: BY - s, nx: 1, ny: 0 } : { x: BX + (1 - Math.cos(k * s)) / k, y: BY - Math.sin(k * s) / k, nx: Math.cos(k * s), ny: Math.sin(k * s) });
  function layer(ctx, k, o1, o2, color) {
    ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= 40; i++) { const p = along(k, (LPX * i) / 40); const q = [p.x + o1 * p.nx, p.y + o1 * p.ny]; if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
    for (let i = 40; i >= 0; i--) { const p = along(k, (LPX * i) / 40); ctx.lineTo(p.x + o2 * p.nx, p.y + o2 * p.ny); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature');
    const dT = Ts.v - T0;
    const kTrue = (1.5 * (ALPHA_L - ALPHA_R) * dT) / THICK;        /* per metre, for two layers of equal thickness */
    const k = (EXAG * kTrue) / S, tipTrue = (kTrue * L * L) / 2;   /* per unit on the canvas; the true sideways move of the tip */
    const dL = (ALPHA_L - ALPHA_R) * dT;                           /* how much longer the left metal is, per unit length */
    /* the clamp and the straight strip at T0 as a reference */
    fixed(ctx, BX - 90, BY, 180, 40);
    text(ctx, 'clamped at the base', BX, BY + 64, PAL.muted, { size: 17, align: 'center' });
    if (Math.abs(dT) > 0.5) line(ctx, BX, BY, BX, BY - LPX, alpha(PAL.ink, 0.35), 2, [10, 10]);
    layer(ctx, k, -2 * W, 0, brass);
    layer(ctx, k, 0, 2 * W, steel);
    const tip = along(k, LPX);
    hits = [{ x: tip.x - W * tip.nx, y: tip.y - W * tip.ny + 60, r: 60, name: 'brass, the metal that expands more' }, { x: tip.x + W * tip.nx, y: tip.y + W * tip.ny + 60, r: 60, name: 'steel, the metal that expands less' }];
    /* how far the tip has moved, drawn and true */
    if (Math.abs(tip.x - BX) > 8) {
      hbracket(ctx, Math.min(BX, tip.x), Math.max(BX, tip.x), tip.y - 44, PAL.ink, 'the tip has moved ' + fmt(Math.abs(tipTrue) * 1000, 1) + ' mm, drawn ×' + EXAG);
    }
    /* the legend: two instances, told apart by the categorical palette */
    for (const [i, col, name] of [[0, brass, 'brass, which expands more, on the left'], [1, steel, 'steel, which expands less, on the right']]) {
      ctx.save(); ctx.fillStyle = col; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.5; ctx.fillRect(950, 150 + i * 40, 30, 22); ctx.strokeRect(950, 150 + i * 40, 30, 22); ctx.restore();
      text(ctx, name, 994, 161 + i * 40, PAL.ink, { size: 19 });
    }
    text(ctx, 'a strip 10 cm long and 1 mm thick', 950, 250, PAL.muted, { size: 17 });
    text(ctx, 'T₀ = ' + fmt(T0, 0) + ' °C', 950, 284, PAL.muted, { size: 17 });
    text(ctx, 'T = ' + num(Ts.v, 0) + ' °C', 950, 318, tc, { size: 22, weight: 600 });
    topline(ctx, Math.abs(dT) < 0.5 ? 'At T₀ = ' + fmt(T0, 0) + ' °C the two metals have the same length and the strip stands straight.'
      : dT > 0 ? 'At ' + num(Ts.v, 0) + ' °C the metal on the left has grown more than the metal on the right, and the strip curves to the right.'
      : 'At ' + num(Ts.v, 0) + ' °C the metal on the left has shrunk more than the metal on the right, and the strip curves to the left.');
    readout(d.readout, `\\kTemp - T_0 = ${num(Ts.v, 0)}^\\circ\\text{C} - ${fmt(T0, 0)}^\\circ\\text{C} = ${num(dT, 0)}^\\circ\\text{C}`,
      Math.abs(dT) < 0.5 ? 'Brass grows by 19 parts in a million for each degree and steel by 12, so the two are the same length only at the temperature they were bonded at, and a strip that stands straight is a thermometer reading T₀.'
        : 'Brass grows by 19 parts in a million for each degree and steel by 12, so ' + fmt(Math.abs(dT), 0) + ' degrees ' + (dT > 0 ? 'above' : 'below') + ' T₀ leave the brass ' + fmt(Math.abs(dL) * 1000, 2) + ' parts in a thousand ' + (dT > 0 ? 'longer' : 'shorter') + ' than the steel. The two are bonded and cannot slide, so the strip curls, and the tip of a 10 cm strip moves ' + fmt(Math.abs(tipTrue) * 1000, 1) + ' mm; the drawing curls it four times as far so that the bend can be seen.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.7: the three temperature scales laid one below the other. The
   reader sets a temperature and reads it on all three. Still: a temperature
   has no clock, so the figure answers its slider and registers no cycle.
   The scales run without a break from absolute zero to 130 °C.
===================================================================== */
(function () {
  const d = sim('sim-three-scales', 560);
  const Ts = ctl(d.controls, { label: '\\kTempC', cls: 'temperature', min: -273.15, max: 130, step: 0.05, value: 25, unit: '°C', dec: 2, aria: 'the temperature to read on the three scales',
    detents: [{ v: -273.15, label: 'absolute zero' }, { v: 0, label: 'water freezes' }, { v: 37, label: 'body' }, { v: 100, label: 'water boils' }] });
  const XL = 130, XR = 1130, CMIN = -273.15, CMAX = 130;
  const X = (c) => XL + ((c - CMIN) / (CMAX - CMIN)) * (XR - XL);
  const ROWS = [
    { y: 200, unit: '°F', of: cToF, marks: [[-273.15, '−459.67'], [-17.78, '0'], [0, '32'], [37, '98.6'], [100, '212']], tick: (c) => cToF(c), every: 100, from: -400 },
    { y: 320, unit: '°C', of: (c) => c, marks: [[-273.15, '−273.15'], [-17.78, '−17.8'], [0, '0'], [37, '37'], [100, '100']], tick: (c) => c, every: 50, from: -250 },
    { y: 440, unit: 'K', of: cToK, marks: [[-273.15, '0'], [-17.78, '255.25', 52], [0, '273.15'], [37, '310.15'], [100, '373.15']], tick: (c) => cToK(c), every: 50, from: 0 },
  ];
  /* the four landmarks the book names, each label set to the side of its guide that leaves room for its neighbours */
  const LAND = [[-273.15, 'absolute zero', 'left'], [0, 'water freezes', 'right'], [37, 'body temperature', 'left'], [100, 'water boils', 'left']];
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature');
    const c = Ts.v, vals = { '°F': cToF(c), '°C': c, 'K': cToK(c) };
    /* the four landmarks the book names, on vertical guides through all three scales */
    for (const [lc, name, al] of LAND) {
      line(ctx, X(lc), 120, X(lc), 470, PAL.rule, 1.5);
      text(ctx, name, X(lc) + (al === 'left' ? 6 : -6), 104, PAL.muted, { size: 17, align: al });
    }
    line(ctx, X(c), 170, X(c), 470, tc, 2.5, [6, 8]);
    for (const r of ROWS) {
      line(ctx, XL - 30, r.y, XR + 30, r.y, PAL.ink, 3);
      arrow(ctx, XR + 30, r.y, XR + 60, r.y, PAL.ink, 3);
      text(ctx, r.unit, XL - 50, r.y, PAL.ink, { size: 22, weight: 600, align: 'right' });
      /* regular ticks in the scale's own unit, unlabelled, and the book's five numbers */
      const inv = r.unit === '°F' ? (f) => ((f - 32) * 5) / 9 : r.unit === 'K' ? (k) => k - 273.15 : (x) => x;
      for (let u = r.from; inv(u) <= CMAX + 1e-9; u += r.every) { if (inv(u) < CMIN - 1e-9) continue; line(ctx, X(inv(u)), r.y - 6, X(inv(u)), r.y + 6, PAL.muted, 1.5); }
      for (const [mc, s, dy] of r.marks) { line(ctx, X(mc), r.y - 11, X(mc), r.y + 11, PAL.ink, 2.5); text(ctx, s, X(mc), r.y + (dy ?? 30), PAL.ink, { size: 17, align: 'center' }); }
      /* the live reading */
      dot(ctx, X(c), r.y, tc, true, 9);
      text(ctx, num(vals[r.unit], 2) + ' ' + r.unit, X(c) + (X(c) > 1000 ? -18 : 18), r.y - 30, tc, { size: 21, weight: 600, align: X(c) > 1000 ? 'right' : 'left', bg: alpha(PAL.panel, 0.9) });
    }
    /* the relative sizes of the degrees: the same interval on the three scales */
    const IX0 = 1225, IX1 = 1365;
    text(ctx, 'the same interval', (IX0 + IX1) / 2, 104, PAL.muted, { size: 17, align: 'center' });
    for (const [r, n, lab] of [[ROWS[0], 9, '9 °F'], [ROWS[1], 5, '5 °C'], [ROWS[2], 5, '5 K']]) {
      line(ctx, IX0, r.y, IX1, r.y, PAL.ink, 3);
      for (let i = 0; i <= n; i++) { const x = IX0 + ((IX1 - IX0) * i) / n; line(ctx, x, r.y - (i === 0 || i === n ? 12 : 7), x, r.y + (i === 0 || i === n ? 12 : 7), PAL.ink, 2); }
      text(ctx, lab, (IX0 + IX1) / 2, r.y - 26, PAL.ink, { size: 18, weight: 600, align: 'center' });
    }
    const near = (v) => Math.abs(c - v) < 0.026;
    topline(ctx, near(-273.15) ? 'Absolute zero is −273.15 °C, −459.67 °F and 0 K, the bottom of every scale.'
      : near(0) ? 'Water freezes at 0 °C, which is 32 °F and 273.15 K.'
      : near(100) ? 'Water boils at 100 °C, which is 212 °F and 373.15 K.'
      : near(37) ? 'Normal body temperature, 37 °C, is 98.6 °F and 310.15 K.'
      : near(25) ? 'Room temperature, 25 °C, is 77 °F and 298.15 K.'
      : num(c, 2) + ' °C is ' + num(cToF(c), 2) + ' °F and ' + fmt(cToK(c), 2) + ' K.');
    readout(d.readout, `\\kTempF = \\tfrac{9}{5}\\kTempC + 32 = ${num(cToF(c), 2)}^\\circ\\text{F}, \\qquad \\kTempK = \\kTempC + 273.15 = ${fmt(cToK(c), 2)}\\ \\text{K}`,
      'A change of 5 °C is a change of 5 K and of 9 °F: the Celsius degree and the kelvin are the same size, and each is 1.8 Fahrenheit degrees. The three scales differ in where they put their zero, and only the Kelvin scale puts it at the lowest possible temperature.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.9: the ladder of temperatures in the universe. The logarithmic
   ladder is the book's; beside it stands a linear scale whose top the
   reader sets, so that the landmarks that spread out on the ladder crush
   into the bottom of the linear scale. Still: it answers its slider.
===================================================================== */
(function () {
  const d = sim('sim-temperature-ladder', 880);
  /* the book's landmarks, each with its temperature in kelvins */
  const LAND = [
    [1e12, 'experiments at the Relativistic Heavy Ion Collider'], [1e9, 'interior of a neutron star'], [1e8, 'rapid hydrogen fusion'],
    [1.5e7, 'solar interior'], [1e6, 'solar corona'], [6e3, 'center of Earth'], [5.8e3, 'solar surface'], [1.2e3, 'fireplace fire'],
    [373.15, 'water boils'], [273.15, 'water freezes'], [183, 'Vostok, Antarctica'], [77, 'liquid nitrogen'], [4.2, 'liquid helium'],
    [1, 'Boomerang Nebula'], [1e-10, 'lowest temperature achieved'],
  ];
  const ns = ctl(d.controls, { label: '\\log_{10}(\\kTemp/\\text{K})', cls: 'temperature', min: -10, max: 12, step: 0.1, value: 12, unit: '', dec: 1, aria: 'the power of ten of the temperature at the top of the linear scale',
    detents: LAND.map(([T]) => Math.round(Math.log10(T) * 10) / 10) });
  const YT = 150, YB = 830, LX = 330, RX = 900, EMIN = -10, EMAX = 12, GAP = 22;
  const Y = (e) => YB - ((e - EMIN) / (EMAX - EMIN)) * (YB - YT);
  const expo = (n) => fmt(n, 1).replace(/\.0$/, '');
  let hits = [];
  hover(d.stage, () => hits);
  /* labels beside a vertical scale, pushed apart where their things sit too close, each leadered back to its dot */
  function column(ctx, x, items) {
    const ys = items.map((it) => it.y);
    for (let i = 1; i < ys.length; i++) ys[i] = Math.max(ys[i], ys[i - 1] + GAP);
    const over = ys.length ? Math.max(0, ys[ys.length - 1] - (YB + 8)) : 0;
    for (let i = 0; i < ys.length; i++) ys[i] -= over;
    for (let i = ys.length - 2; i >= 0; i--) ys[i] = Math.min(ys[i], ys[i + 1] - GAP);
    items.forEach((it, i) => {
      dot(ctx, x, it.y, PAL.ink, true, 5);
      if (Math.abs(ys[i] - it.y) > 3) line(ctx, x + 8, it.y, x + 24, ys[i], alpha(PAL.ink, 0.45), 1.5);
      text(ctx, it.name, x + 30, ys[i], PAL.ink, { size: 17 });
    });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature');
    const n = ns.v, Ttop = Math.pow(10, n);
    /* the logarithmic ladder, as the book draws it */
    line(ctx, LX, YB + 10, LX, YT - 30, PAL.ink, 3); arrow(ctx, LX, YT - 10, LX, YT - 40, PAL.ink, 3);
    text(ctx, 'temperature, T (K)', LX - 60, YT - 44, tc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'a logarithmic scale', LX - 60, YT - 16, PAL.muted, { size: 17, align: 'right' });
    for (let e = EMIN; e <= EMAX; e++) { line(ctx, LX - 10, Y(e), LX + 10, Y(e), PAL.ink, 2); text(ctx, '10' + sup(e), LX - 20, Y(e), PAL.muted, { size: 17, align: 'right' }); }
    column(ctx, LX, LAND.map(([T, name]) => ({ y: Y(Math.log10(T)), name })));
    /* the linear scale, its top where the slider puts it */
    line(ctx, RX, YB + 10, RX, YT - 30, PAL.ink, 3); arrow(ctx, RX, YT - 10, RX, YT - 40, PAL.ink, 3);
    text(ctx, 'the same temperatures on a linear scale', RX - 20, YT - 44, PAL.muted, { size: 17, align: 'right' });
    text(ctx, '0 K', RX - 20, YB, PAL.muted, { size: 17, align: 'right' });
    const LIN = (T) => YB - (T / Ttop) * (YB - YT);
    for (let i = 1; i <= 3; i++) { const y = YB - ((YB - YT) * i) / 4; line(ctx, RX - 10, y, RX + 10, y, PAL.ink, 2); text(ctx, sci(Ttop * i / 4, 1).replace(/ \\times 10\^\{(-?\d+)\}/, (m, k) => ' × 10' + sup(k)) + ' K', RX - 20, y, PAL.muted, { size: 17, align: 'right' }); }
    /* the top of the linear scale, marked in the temperature hue here and on the ladder */
    dot(ctx, LX, Y(n), tc, true, 9);
    dot(ctx, RX, YT, tc, true, 9);
    text(ctx, pow10(expo(n)), RX - 20, YT, tc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    /* the landmarks on the linear scale: one is named where it stands clear of the one named above it,
       the rest are marked and named on hover (rule 26.7) */
    const below = LAND.filter(([T]) => T <= Ttop * (1 + 1e-9)).sort((x, y) => y[0] - x[0]);
    const off = LAND.length - below.length, crushed = [], named = [];
    let lastY = -1e9, yTop = null; hits = [];
    for (const [T, name] of below) {
      const y = LIN(T);
      if (y - lastY < GAP + 2) { crushed.push(name); if (yTop === null) yTop = y; continue; }
      named.push({ y, name }); hits.push({ x: RX, y, r: 14, name }); lastY = y;
    }
    column(ctx, RX, named);
    if (crushed.length) {
      ctx.save(); ctx.fillStyle = alpha(tc, 0.35); ctx.fillRect(RX - 7, yTop - 4, 14, YB - yTop + 4); ctx.restore();
      hits.push({ x: RX, y: (yTop + YB) / 2, r: Math.max(16, (YB - yTop) / 2 + 8), name: crushed.length + ' more: ' + crushed.join(', ') });
      text(ctx, crushed.length + ' more ' + (crushed.length === 1 ? 'landmark sits' : 'landmarks sit') + ' too close to a named one to be labelled; hover to name them', RX, YB + 40, tc, { size: 17, weight: 600, align: 'center' });
    }
    if (off) text(ctx, off + (off === 1 ? ' landmark lies' : ' landmarks lie') + ' off the top', RX + 30, YT - 26, PAL.muted, { size: 17 });
    const sun = 5.8e3 / Ttop;
    topline(ctx, n >= 11.95 ? 'With the top of the linear scale at 10¹² K, the surface of the Sun sits six billionths of the way up it and the ladder\'s other landmarks are lost.'
      : sun <= 1 ? 'With the top of the linear scale at ' + pow10(expo(n)) + ', the surface of the Sun sits ' + (sun >= 0.01 ? fmt(100 * sun, 1) + '% of the way up it' : 'in its bottom ' + fmt(100 * sun, 3) + '%') + (off ? ' and ' + off + ' landmarks are off the top.' : '.')
      : 'With the top of the linear scale at ' + pow10(expo(n)) + ', the surface of the Sun and ' + (off - 1) + ' other landmarks are off the top, and the cold ones spread out at last.');
    readout(d.readout, `\\kTempK = 10^{${expo(n)}}\\ \\text{K} = ${sci(Ttop, 2)}\\ \\text{K}, \\qquad \\kTempC = ${sci(Ttop - 273.15, 2)}\\ {}^\\circ\\text{C}, \\qquad \\kTempF = ${sci(cToF(Ttop - 273.15), 2)}\\ {}^\\circ\\text{F}`,
      'Each rung of the ladder is a factor of ten above the one below, so the twenty-two rungs from the coldest laboratory to the hottest collision span a factor of 10²². Zero on a logarithmic scale would sit infinitely far below the page, which is why absolute zero is not on the ladder, and why the linear scale starts from it and the ladder cannot.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.10: pressure against temperature for four gases at constant
   volume. Every line is straight and every line reaches zero pressure at
   −273.15 °C. Still: the graph answers its sliders and nothing in it has
   a clock. Axes fixed: −300 °C to 150 °C, 0 to 2.0 atm.
===================================================================== */
(function () {
  const d = sim('sim-gas-extrapolation', 640);
  const Ts = ctl(d.controls, { label: '\\kTempC', cls: 'temperature', min: -273.15, max: 150, step: 0.05, value: 20, unit: '°C', dec: 2, aria: 'the temperature the gases are held at',
    detents: [{ v: -273.15, label: 'absolute zero' }, { v: 0, label: 'water freezes' }, { v: 100 }] });
  const Ps = ctl(d.controls, { label: 'P_0', cls: 'pressure', min: 0.2, max: 1.2, step: 0.01, value: 1, unit: 'atm', dec: 2, aria: 'the pressure of gas 1 at 0 °C' });
  const OTHERS = [0.75, 0.5, 0.3], T0 = -273.15, TLIQ = -200;
  const box = { l: 170, r: 1240, t: 110, b: 520 };
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), pc = C('pressure');
    const T = Ts.v, P0s = [Ps.v, ...OTHERS];
    const Pof = (p0, t) => p0 * (1 + t / 273.15);
    const { X, Y } = axes(ctx, box, [-300, 150], [0, 2], { xl: 'temperature, T (°C)', xc: tc, yl: 'pressure, P (atm)', yc: pc, nx: 9, ny: 4, fx: (v) => num(v, 0), fy: (v) => fmt(v, 1) });
    /* the four gases: measured where the line is solid, extrapolated where it is dashed */
    P0s.forEach((p0, i) => {
      const col = F.cat(i);
      ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (t) => Pof(p0, t), T0, TLIQ, X, Y, col, 3, 20); ctx.restore();
      curve(ctx, (t) => Pof(p0, t), TLIQ, 150, X, Y, col, 4, 40);
      const pEnd = Pof(p0, 150), yEnd = Math.max(box.t + 12, Y(Math.min(pEnd, 2)));
      text(ctx, 'Gas ' + (i + 1), X(150) + 12, yEnd, col, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    });
    /* where every line meets zero */
    dot(ctx, X(T0), Y(0), PAL.ink, false, 10);
    text(ctx, '−273.15 °C', X(T0), Y(0) - 28, tc, { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the temperature the gases are held at, and their pressures there */
    line(ctx, X(T), box.b, X(T), box.t, tc, 2.5, [6, 8]);
    const reads = P0s.map((p0) => Pof(p0, T));
    P0s.forEach((p0, i) => {
      const p = pinned(ctx, box, X, Y, T, reads[i], F.cat(i));
      if (!p.out && i === 0) text(ctx, fmt(reads[i], 2) + ' atm', p.x + (X(T) > 1000 ? -18 : 18), p.y - 22, pc, { size: 19, weight: 600, align: X(T) > 1000 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    });
    text(ctx, 'T = ' + num(T, 2) + ' °C', X(T) + (X(T) > 1000 ? -12 : 12), box.t + 26, tc, { size: 19, weight: 600, align: X(T) > 1000 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, T <= T0 + 0.03 ? 'At −273.15 °C every extrapolated pressure is zero, whatever the gas and however much of it there is.'
      : 'At ' + num(T, 2) + ' °C the four gases read ' + reads.map((p) => fmt(p, 2)).join(', ').replace(/, ([^,]*)$/, ' and $1') + ' atm, and every line reaches zero at −273.15 °C.');
    readout(d.readout, `\\kPr = P_0\\left(1 + \\frac{\\kTempC}{273.15^\\circ\\text{C}}\\right) = (${fmt(Ps.v, 2)}\\ \\text{atm})\\left(1 + \\frac{${num(T, 2)}}{273.15}\\right) = ${fmt(reads[0], 2)}\\ \\text{atm}`,
      'For gas 1, whose pressure at 0 °C is P₀ = ' + fmt(Ps.v, 2) + ' atm; gases 2, 3 and 4 read ' + fmt(reads[1], 2) + ', ' + fmt(reads[2], 2) + ' and ' + fmt(reads[3], 2) + ' atm at the same temperature. Whatever the amount of gas, the factor in parentheses is zero at −273.15 °C, so every line reaches zero pressure there; in kelvins that factor is simply T/273.15 K, and the pressure is proportional to the absolute temperature, here ' + fmt(cToK(T), 2) + ' K. Below about −200 °C a real gas has liquefied and the line is an extrapolation, drawn dashed.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a cold block and a hot block on a plate at room temperature. Heat
   flows from the hotter body to the cooler one until the temperatures are
   the same, and that "until" is a time, so the figure moves: one cycle is
   60 s of the approach, then a hold, and the transport is the app's. The
   plate is twice the mass of either block; the three bodies are told apart
   by their labels and the categorical palette, never by a tint.
===================================================================== */
(function () {
  const d = sim('sim-thermal-equilibrium', 720);
  const TA = ctl(d.controls, { label: 'T_{\\text{A}}', cls: 'temperature', min: -20, max: 60, step: 1, value: 0, unit: '°C', dec: 0, onInput: reset, aria: 'the starting temperature of block A' });
  const TB = ctl(d.controls, { label: 'T_{\\text{B}}', cls: 'temperature', min: 0, max: 120, step: 1, value: 80, unit: '°C', dec: 0, onInput: reset, aria: 'the starting temperature of block B' });
  const TP = ctl(d.controls, { label: 'T_{\\text{plate}}', cls: 'temperature', min: 0, max: 40, step: 1, value: 20, unit: '°C', dec: 0, onInput: reset, aria: 'the starting temperature of the plate' });
  const END = 60, G = 0.07, DT = 0.05;           /* seconds of model time; the rate of heat flow per degree; the integration step */
  const cy = cycle(() => END, 1.4);
  let hist = null;
  function reset() { cy.reset(); hist = null; }
  /* the three temperatures over the whole cycle, computed once per setting */
  function history() {
    if (hist) return hist;
    let a = TA.v, b = TB.v, p = TP.v; const rows = [[a, b, p]];
    for (let t = 0; t < END; t += DT) {
      const da = G * (p - a), db = G * (p - b), dp = (G / 2) * ((a - p) + (b - p));
      a += da * DT; b += db * DT; p += dp * DT; rows.push([a, b, p]);
    }
    hist = rows; return rows;
  }
  const at = (tau) => { const h = history(); const i = Math.min(h.length - 1, Math.round(tau / DT)); return h[i]; };
  const cols = [F.cat(0), F.cat(1), F.cat(2)], names = ['block A', 'block B', 'the plate'];
  const PY = 268, box = { l: 170, r: 1250, t: 400, b: 640 };
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), tmc = C('time');
    const tau = cy.now(), [a, b, p] = at(tau), fin = (TA.v + TB.v + 2 * TP.v) / 4, done = tau >= END - 1e-9;
    const frac = (T) => (T + 20) / 140;
    /* the plate and the two blocks on it, with a thermometer on each block */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(330, PY, 760, 34); ctx.strokeRect(330, PY, 760, 34); ctx.restore();
    text(ctx, 'the plate', 710, PY + 62, cols[2], { size: 19, weight: 600, align: 'center' });
    text(ctx, num(p, 1) + ' °C', 710, PY + 90, tc, { size: 19, weight: 600, align: 'center' });
    for (const [i, x, T] of [[0, 480, a], [1, 940, b]]) {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(x - 70, PY - 100, 140, 100); ctx.strokeRect(x - 70, PY - 100, 140, 100); ctx.restore();
      text(ctx, names[i], x, PY - 50, cols[i], { size: 20, weight: 600, align: 'center' });
      thermometer(ctx, x + 110, PY - 4, 150, frac(T), cols[i]);
      text(ctx, num(T, 1) + ' °C', x + 136, PY - 120, tc, { size: 20, weight: 600 });
    }
    /* heat leaving the hotter body for the cooler one, drawn stronger the larger the difference */
    for (const [x, T] of [[480, a], [940, b]]) {
      const dT = T - p, w = Math.min(8, 1.5 + Math.abs(dT) / 8);
      if (Math.abs(dT) > 1) { const up = dT < 0; arrow(ctx, x, up ? PY + 24 : PY - 24, x, up ? PY - 24 : PY + 24, PAL.ink, w); }
    }
    text(ctx, 'heat flows from the hotter body to the cooler one', 710, 94, PAL.muted, { size: 17, align: 'center' });
    /* the three temperatures against time, converging on the common temperature */
    const { X, Y } = axes(ctx, box, [0, END], [-20, 120], { xl: 'time, t (s)', xc: tmc, yl: 'temperature, T (°C)', yc: tc, nx: 6, ny: 7, fx: (v) => fmt(v, 0), fy: (v) => num(v, 0) });
    line(ctx, box.l, Y(fin), box.r, Y(fin), PAL.ink, 2, [10, 10]);
    text(ctx, 'the common temperature, ' + fmt(fin, 1) + ' °C', box.r - 8, Y(fin) + 18, tc, { size: 17, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    const h = history(), nPts = Math.min(h.length - 1, Math.round(tau / DT));
    for (let k = 0; k < 3; k++) {
      ctx.save(); ctx.strokeStyle = cols[k]; ctx.lineWidth = 4; ctx.beginPath();
      for (let i = 0; i <= nPts; i++) { const x = X(i * DT), y = Y(h[i][k]); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
      dot(ctx, X(tau), Y(h[nPts][k]), cols[k], true, 8);
      /* the legend, once, in the top right of the graph where no curve runs */
      line(ctx, box.r - 250, box.t + 24 + k * 26, box.r - 214, box.t + 24 + k * 26, cols[k], 4);
      text(ctx, names[k], box.r - 202, box.t + 24 + k * 26, cols[k], { size: 17, weight: 600 });
    }
    const spread = Math.max(Math.abs(a - fin), Math.abs(b - fin), Math.abs(p - fin));
    topline(ctx, tau < 1e-9 ? 'Block A starts at ' + num(TA.v, 0) + ' °C and block B at ' + num(TB.v, 0) + ' °C on a plate at ' + num(TP.v, 0) + ' °C, and heat begins to flow.'
      : done ? 'After ' + fmt(END, 0) + ' s all three are within ' + fmt(spread, 1) + ' °C of ' + fmt(fin, 1) + ' °C: each block is in thermal equilibrium with the plate, and so with the other.'
      : 'After ' + fmt(tau, 1) + ' s block A reads ' + num(a, 1) + ' °C, block B ' + num(b, 1) + ' °C and the plate ' + num(p, 1) + ' °C, and heat is still flowing.');
    readout(d.readout, `\\kTemp_{\\text{A}} = ${num(a, 1)}^\\circ\\text{C}, \\qquad \\kTemp_{\\text{B}} = ${num(b, 1)}^\\circ\\text{C}, \\qquad \\kTemp_{\\text{plate}} = ${num(p, 1)}^\\circ\\text{C} \\qquad \\longrightarrow \\qquad ${fmt(fin, 1)}^\\circ\\text{C}`,
      'Heat flows from the hotter body to the cooler one until they have exactly the same temperature, and the flow slows as the difference shrinks, so the last degree takes longer than the first ten. The plate is twice the mass of either block and draws the common temperature towards its own. Once block A is in thermal equilibrium with the plate and block B is too, the two blocks are in thermal equilibrium with each other, and a thermometer on either reads the same number; that is the zeroth law.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => END / 6), draw });
})();
};
