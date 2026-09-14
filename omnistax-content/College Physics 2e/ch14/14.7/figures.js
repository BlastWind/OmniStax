/* Figures for section 14.7 Radiation. Boots against the section's text article.
   Every figure of the section is a rate at a steady state, a spectrum, a
   balance, a share, and none of them has a clock in it: no figure here
   registers a cycle or carries a transport, and a control's input alone
   redraws it. The beams of radiation are drawn at widths in proportion to
   the rates they carry, never moving. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, register, begin, line, arrow, dot, text, topline, hbracket, axes, curve, labeller, person, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const SIGMA = 5.67e-8;                        /* the Stefan-Boltzmann constant, J/(s·m²·K⁴) */
const SIGTEX = '5.67\\times10^{-8}\\ \\text{J/s}\\cdot\\text{m}^2\\cdot\\text{K}^4';
/* a number to n significant figures, written out in full (3.87, 41.9, 167, 0.320) */
const sig = (v, n = 3) => { if (Math.abs(v) < 1e-12) return '0'; const d = Math.max(0, n - 1 - Math.floor(Math.log10(Math.abs(v)))); return v.toFixed(d); };
/* a rate in watts written with the prefix the book would use */
const watts = (W) => { const a = Math.abs(W); return a >= 1e6 ? sig(W / 1e6) + ' MW' : a >= 1000 ? sig(W / 1000) + ' kW' : sig(W) + ' W'; };
const wattsTex = (W) => watts(W).replace(' ', '\\ \\text{') + '}';
/* a temperature in degrees Celsius as the book writes one: one decimal below 100 °C, none from 100 °C on */
const degC = (T) => (Math.abs(T) >= 99.95 ? fmt(T, 0) : fmt(T, 1));
const K = (Tc) => Tc + 273.15;
const percent = (x) => fmt(100 * x, 0) + '%';
/* a Celsius value in prose, with a real minus sign */
const degS = (T) => degC(T).replace('-', '−');
/* a filled beam of radiation from (x1, y1) to (x2, y2), w wide in the shaft and ending in a head */
function beam(ctx, x1, y1, x2, y2, w, color, a = 1) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4 || w < 0.5) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
  const hw = Math.max(w * 1.9, 14), hl = Math.min(L * 0.4, Math.max(w * 1.7, 22));
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x1 + px * w / 2, y1 + py * w / 2); ctx.lineTo(bx + px * w / 2, by + py * w / 2); ctx.lineTo(bx + px * hw / 2, by + py * hw / 2);
  ctx.lineTo(x2, y2); ctx.lineTo(bx - px * hw / 2, by - py * hw / 2); ctx.lineTo(bx - px * w / 2, by - py * w / 2); ctx.lineTo(x1 - px * w / 2, y1 - py * w / 2);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* the book's wavy arrow for radiation, from (x1, y1) to (x2, y2), stroked w wide */
function wavy(ctx, x1, y1, x2, y2, w, color, amp = 9, wave = 30) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux, end = L - 24;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let s = 0; s <= end; s += 3) { const o = amp * Math.sin((s / wave) * 2 * Math.PI); const x = x1 + ux * s + px * o, y = y1 + uy * s + py * o; if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x1 + ux * end, y1 + uy * end, x2, y2, color, w);
}

/* =====================================================================
   FIGURE 14.29: the spectrum of an ideal radiator against wavelength, at
   the temperature the slider sets, with the book's three curves faint
   behind it and the visible band shaded in the colours that are the fact.
   Still: a spectrum is the state of a body at one temperature.
===================================================================== */
(function () {
  const d = sim('sim-spectrum', 620);
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 3000, max: 6000, step: 50, value: 6000, unit: 'K', dec: 0, aria: 'the temperature of the ideal radiator', detents: [{ v: 3000, label: '3000 K' }, { v: 4000, label: '4000 K' }, { v: 6000, label: '6000 K' }] });
  const C2 = 1.4388e7;                                        /* hc/k in nm·K */
  const planck = (lam, T) => 1 / (Math.pow(lam / 1000, 5) * Math.expm1(C2 / (lam * T)));   /* relative intensity per wavelength */
  const peakAt = (T) => 2.898e6 / T;                          /* Wien's displacement, nm */
  /* the share of the radiation that falls between 380 and 700 nm, by a sum over a log-spaced grid */
  function visibleShare(T) {
    let tot = 0, vis = 0; const n = 1200, a = Math.log(10), b = Math.log(200000);
    for (let i = 0; i < n; i++) { const l0 = Math.exp(a + ((b - a) * i) / n), l1 = Math.exp(a + ((b - a) * (i + 1)) / n), lm = (l0 + l1) / 2, w = planck(lm, T) * (l1 - l0); tot += w; if (lm >= 380 && lm <= 700) vis += w; }
    return vis / tot;
  }
  /* the colour a black body glows, from its temperature: the fact, not a type hue */
  function glow(T) {
    const t = T / 100; const cl = (v) => Math.max(0, Math.min(255, Math.round(v)));
    const r = t <= 66 ? 255 : 329.698727446 * Math.pow(t - 60, -0.1332047592);
    const g = t <= 66 ? 99.4708025861 * Math.log(t) - 161.1195681661 : 288.1221695283 * Math.pow(t - 60, -0.0755148492);
    const b = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
    return `rgb(${cl(r)},${cl(g)},${cl(b)})`;
  }
  /* Axes fixed: 0 to 3000 nm, and the intensity from 0 to 1.08 times the peak at the slider maximum, 6000 K. */
  const BOX = { l: 140, r: 1040, t: 132, b: 520 }, YMAX = 1.08 * planck(peakAt(6000), 6000);
  const REFS = [3000, 4000, 6000];
  const VIS = [[380, '#7f00ff'], [450, '#0000ff'], [490, '#00ffff'], [520, '#00ff00'], [580, '#ffff00'], [620, '#ff7f00'], [700, '#ff0000']];   /* the visible band, violet to red: the colour that is the fact */
  function draw() {
    const { ctx } = begin(d.c);
    const T = Ts.v, tc = C('temperature'), lam = peakAt(T), share = visibleShare(T), P = SIGMA * T ** 4;
    const { X, Y } = axes(ctx, BOX, [0, 3000], [0, YMAX], { xl: 'wavelength λ (nm)', yl: 'intensity', nx: 6, ny: 4, fy: () => '' });
    /* the visible band as the colours it is, and the ranges named as the book names them */
    ctx.save(); const g = ctx.createLinearGradient(X(380), 0, X(700), 0); VIS.forEach(([l, c]) => g.addColorStop((l - 380) / 320, c));
    ctx.globalAlpha = 0.22; ctx.fillStyle = g; ctx.fillRect(X(380), BOX.t, X(700) - X(380), BOX.b - BOX.t); ctx.restore();
    text(ctx, 'visible', X(540), BOX.t + 18, PAL.ink, { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, 'UV', X(190), BOX.t + 18, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'infrared', X(1500), BOX.t + 18, PAL.muted, { size: 17, align: 'center' });
    line(ctx, X(700), BOX.t + 34, X(2300), BOX.t + 34, PAL.muted, 1.5, [4, 8]);
    /* the book's three curves, faint, told apart by the categorical palette and named at their peaks */
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 88); lab.block(BOX.l, BOX.t, BOX.r, BOX.t + 46);
    REFS.forEach((R, i) => {
      const cc = cat(i); curve(ctx, (l) => planck(Math.max(l, 1), R), 1, 3000, X, Y, alpha(cc, 0.6), 3, 160);
      const lt = 1.7 * peakAt(R); lab.add(R + ' K', X(lt), Y(planck(lt, R)), 0.7, -0.7, cc, 18, 14);
    });
    /* the live curve in ink, its peak marked in the temperature hue */
    curve(ctx, (l) => planck(Math.max(l, 1), T), 1, 3000, X, Y, PAL.ink, 5, 200);
    line(ctx, X(lam), Y(planck(lam, T)), X(lam), BOX.b, alpha(tc, 0.6), 2, [4, 8]);
    dot(ctx, X(lam), Y(planck(lam, T)), tc, true, 9);
    lab.add('T = ' + T + ' K, peak at ' + fmt(lam, 0) + ' nm', X(lam), Y(planck(lam, T)), 1, 0.35, tc, 20, 22);
    lab.flush();
    /* the glow: a swatch of the colour the radiator shows the eye */
    const sx = 1110, sy = 170, sw = 230, sh = 150;
    ctx.save(); ctx.fillStyle = glow(T); ctx.fillRect(sx, sy, sw, sh); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.strokeRect(sx, sy, sw, sh); ctx.restore();
    text(ctx, 'the glow at ' + T + ' K', sx + sw / 2, sy - 24, PAL.ink, { size: 19, weight: 600, align: 'center' });
    text(ctx, T < 3500 ? 'orange, the red heat of a stove element' : T < 5000 ? 'yellow-white' : 'white hot', sx + sw / 2, sy + sh + 26, PAL.muted, { size: 17, align: 'center' });
    text(ctx, percent(share) + ' of the radiation', sx + sw / 2, sy + sh + 70, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'falls in the visible band', sx + sw / 2, sy + sh + 96, PAL.ink, { size: 19, align: 'center' });
    topline(ctx, 'At ' + T + ' K an ideal radiator sends out ' + watts(P) + ' from each square meter, and its spectrum peaks at ' + fmt(lam, 0) + ' nm, in the ' + (lam <= 700 ? 'visible' : 'infrared') + '.');
    readout(d.readout, `\\frac{\\kQh}{\\kt} = \\sigma e A \\kTemp^4 = (${SIGTEX})(1)(1.00\\ \\text{m}^2)(${T}\\ \\text{K})^4 = ${wattsTex(P)}`,
      'The curve peaks at ' + fmt(lam, 0) + ' nm and ' + percent(share) + ' of the radiation is visible; the rate is for 1.00 m² of an ideal radiator, whose emissivity is 1. At 3000 K the peak lies at ' + fmt(peakAt(3000), 0) + ' nm in the infrared and the rate is ' + watts(SIGMA * 3000 ** 4) + '; at 6000 K it lies at ' + fmt(peakAt(6000), 0) + ' nm in the visible and the rate is ' + watts(SIGMA * 6000 ** 4) + ', sixteen times as much.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 14.31: one block absorbing and the same block radiating, its
   emissivity on a slider. The beams are rates of heat transfer by
   radiation, in the power hue, their widths in proportion to their shares;
   the block's fill runs from black to silver, the colour that is the fact.
   Still: steady rates, nothing moving.
===================================================================== */
(function () {
  const d = sim('sim-blocks', 640);
  const es = ctl(d.controls, { label: 'e', cls: '', min: 0, max: 1, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the emissivity of the block', detents: [{ v: 0, label: 'perfect reflector' }, { v: 0.5, label: 'tungsten' }, 0.97, { v: 1, label: 'black body' }], snap: true });
  const NAMES = [[1, 'a black body'], [0.99, 'carbon black'], [0.97, 'skin in the infrared'], [0.5, 'a tungsten filament'], [0, 'a perfect reflector']];
  const nameOf = (e) => { const n = NAMES.find(([v]) => Math.abs(v - e) < 0.005); return n ? n[1] : null; };
  /* the fill of the block: near-black at e = 1, a light silver at e = 0 */
  const fill = (e) => { const k = 1 - e, ch = (a, b) => Math.round(a + (b - a) * k); return `rgb(${ch(28, 214)},${ch(28, 218)},${ch(30, 226)})`; };
  const W = 400, H = 190, D = 250;                               /* the block, in scene units that project near one to one */
  function block(ctx, cx, cy, e) {
    const V = view({ yaw: 0.55, pitch: 0.36, dist: 1500, cx, cy });
    const c = (x, y, z) => V.P([x * W / 2, y * H / 2, z * D / 2]);
    const top = [c(-1, 1, 1), c(1, 1, 1), c(1, 1, -1), c(-1, 1, -1)], front = [c(-1, -1, 1), c(1, -1, 1), c(1, 1, 1), c(-1, 1, 1)], right = [c(1, -1, 1), c(1, -1, -1), c(1, 1, -1), c(1, 1, 1)];
    ctx.save(); ctx.lineJoin = 'round';
    [[front, 0], [right, 1], [top, 2]].forEach(([pts, i]) => {
      ctx.beginPath(); pts.forEach((p, j) => (j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
      ctx.fillStyle = fill(e); ctx.fill();
      ctx.fillStyle = i === 2 ? 'rgba(255,255,255,0.22)' : i === 1 ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0.08)'; ctx.fill();
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.stroke();
    });
    ctx.restore();
    /* the point on the top face where the beams meet, and the corners for the labels */
    const hit = V.P([-W * 0.1, H / 2, D * 0.1]);
    return { hit, top, front };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const e = es.v, pc = C('power');
    const inW = 34;                                              /* the incident beam's width, the whole of it */
    const lab = labeller(ctx, 640); lab.block(0, 0, 1400, 96);
    /* Absorb: the incident beam comes down from the upper left onto the top face; a share e continues into the block and 1 − e leaves upward */
    
    const A = block(ctx, 400, 385, e);
    beam(ctx, A.hit[0] - 210, A.hit[1] - 170, A.hit[0], A.hit[1], inW, pc);
    beam(ctx, A.hit[0], A.hit[1], A.hit[0] + 150, A.hit[1] + 150, inW * e, pc, 0.55);
    beam(ctx, A.hit[0], A.hit[1], A.hit[0] + 210, A.hit[1] - 160, inW * (1 - e), pc);
    lab.add('incident radiant energy', A.hit[0] - 210, A.hit[1] - 170, -0.35, 1, pc, 19, 30);
    lab.add('reflected ' + percent(1 - e), A.hit[0] + 210, A.hit[1] - 160, 1, 0.2, pc, 19, 22);
    lab.add('absorbed ' + percent(e), A.hit[0] + 150, A.hit[1] + 150, 0.3, 1, pc, 19, 24);
    /* Radiate: from inside the block a beam rises to the top face; a share e leaves and 1 − e turns back down */
    
    const R = block(ctx, 1060, 385, e);
    beam(ctx, R.hit[0] - 170, R.hit[1] + 170, R.hit[0], R.hit[1], inW, pc, 0.55);
    beam(ctx, R.hit[0], R.hit[1], R.hit[0] + 210, R.hit[1] - 160, inW * e, pc);
    beam(ctx, R.hit[0], R.hit[1], R.hit[0] + 150, R.hit[1] + 150, inW * (1 - e), pc, 0.55);
    lab.add('from inside', R.hit[0] - 170, R.hit[1] + 170, -0.9, 0.5, pc, 19, 26);
    lab.add('emitted ' + percent(e), R.hit[0] + 210, R.hit[1] - 160, 1, 0.2, pc, 19, 22);
    lab.add('retained ' + percent(1 - e), R.hit[0] + 150, R.hit[1] + 150, 0.3, 1, pc, 19, 24);
    lab.flush();
    const who = nameOf(e);
    [[400, 'Absorb'], [1060, 'Radiate']].forEach(([x, h]) => { text(ctx, h, x, 578, PAL.ink, { size: 24, weight: 600, align: 'center' }); text(ctx, 'e = ' + fmt(e, 2) + (who ? ', ' + who : ''), x, 610, PAL.ink, { size: 19, align: 'center' }); });
    topline(ctx, e >= 0.995 ? 'A black body, with an emissivity of 1, absorbs all the radiation that falls on it and emits all that a black body at its temperature can.'
      : e <= 0.005 ? 'A perfect reflector, with an emissivity of 0, absorbs none of the radiation that falls on it and emits nothing at all.'
        : 'A block with an emissivity of ' + fmt(e, 2) + ' absorbs ' + percent(e) + ' of the radiation that falls on it and emits ' + percent(e) + ' of what a black body at its temperature would.');
    readout(d.readout, `\\frac{\\text{absorbed}}{\\text{incident}} = e = ${fmt(e, 2)},\\qquad \\frac{\\text{reflected}}{\\text{incident}} = 1 - e = ${fmt(1 - e, 2)},\\qquad \\frac{\\text{emitted}}{\\text{emitted by a black body}} = e = ${fmt(e, 2)}`,
      who ? 'This is the emissivity of ' + who + '. The same number sets the absorbed beam on the left and the emitted beam on the right, which is why a good absorber is a good emitter and a poor absorber a poor emitter.'
        : 'The same number sets the absorbed beam on the left and the emitted beam on the right, which is why a good absorber is a good emitter and a poor absorber a poor emitter; the detents mark a perfect reflector, tungsten, skin and a black body.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the fourth-power law drawn. The rate for 1.00 m² of radiator against
   its absolute temperature, on fixed axes, with two temperatures marked on
   the curve and the ratio of their rates read out. Still: a law with no
   clock in it.
===================================================================== */
(function () {
  const d = sim('sim-fourth-power', 620);
  const T1 = ctl(d.controls, { label: '\\kTempone', cls: 'temperature', min: 100, max: 1500, step: 1, value: 275, unit: 'K', dec: 0, aria: 'the first temperature, in kelvin' });
  const T2 = ctl(d.controls, { label: '\\kTemptwo', cls: 'temperature', min: 100, max: 1500, step: 1, value: 1100, unit: 'K', dec: 0, aria: 'the second temperature, in kelvin' });
  const es = ctl(d.controls, { label: 'e', cls: '', min: 0, max: 1, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the emissivity of the radiator' });
  /* Axes fixed: 0 to 1500 K, and 0 to 300 kW, since 1.00 m² of black body at 1500 K radiates 287 kW. */
  const BOX = { l: 150, r: 980, t: 100, b: 520 }, AREA = 1;
  const rate = (T, e) => SIGMA * e * AREA * T ** 4;
  function draw() {
    const { ctx } = begin(d.c);
    const e = es.v, a = T1.v, b = T2.v, tc = C('temperature'), pc = C('power');
    const Pa = rate(a, e), Pb = rate(b, e), ratio = (b / a) ** 4;
    const { X, Y } = axes(ctx, BOX, [0, 1500], [0, 300], { xl: 'T (K)', xc: tc, yl: 'Q/t for 1.00 m² (kW)', yc: pc, nx: 5, ny: 3 });
    curve(ctx, (T) => rate(T, e) / 1000, 0, 1500, X, Y, PAL.ink, 5, 160);
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 88); lab.block(BOX.l, BOX.b, BOX.r, 620);
    [[a, Pa, 'T_1', 1], [b, Pb, 'T_2', 2]].forEach(([T, P, s, i]) => {
      line(ctx, X(T), Y(P / 1000), X(T), BOX.b, alpha(tc, 0.6), 2, [4, 8]);
      line(ctx, BOX.l, Y(P / 1000), X(T), Y(P / 1000), alpha(pc, 0.5), 2, [4, 8]);
      dot(ctx, X(T), Y(P / 1000), tc, i === 2, 10);
      const high = Y(P / 1000) < BOX.t + 90;
      lab.add(s + ' = ' + T + ' K', X(T), Y(P / 1000), -0.8, high ? 0.6 : -0.5, tc, 20, 24);
      lab.add(watts(P), X(T), Y(P / 1000), 0.9, high ? 0.5 : -0.35, pc, 20, 24);
    });
    lab.flush();
    /* the two readings and their ratio, at the right */
    const rx = 1190;
    text(ctx, 'at T_1 = ' + a + ' K', rx, 150, tc, { size: 20, weight: 600, align: 'center' });
    text(ctx, watts(Pa), rx, 184, pc, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'at T_2 = ' + b + ' K', rx, 250, tc, { size: 20, weight: 600, align: 'center' });
    text(ctx, watts(Pb), rx, 284, pc, { size: 26, weight: 600, align: 'center' });
    line(ctx, rx - 130, 330, rx + 130, 330, PAL.rule, 2);
    text(ctx, '(T_2 / T_1)⁴ = ' + sig(ratio, ratio >= 100 ? 3 : 3), rx, 366, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'the second rate is ' + sig(ratio) + ' times the first', rx, 400, PAL.muted, { size: 17, align: 'center' });
    text(ctx, a + ' K is ' + degS(a - 273.15) + ' °C', rx, 460, PAL.muted, { size: 17, align: 'center' });
    text(ctx, b + ' K is ' + degS(b - 273.15) + ' °C', rx, 486, PAL.muted, { size: 17, align: 'center' });
    const same = a === b;
    topline(ctx, same ? 'At one temperature there is one rate, ' + watts(Pa) + ' from each square meter, and the ratio is 1.'
      : ratio > 1 && ratio < 2 ? 'At ' + b + ' K the radiator emits ' + fmt(100 * (ratio - 1), 0) + ' percent more than at ' + a + ' K, because (' + b + '/' + a + ')⁴ = ' + sig(ratio) + '.'
        : ratio >= 2 ? 'At ' + b + ' K the radiator emits ' + sig(ratio) + ' times what it does at ' + a + ' K, because (' + b + '/' + a + ')⁴ = ' + sig(ratio) + '.'
          : 'At ' + b + ' K the radiator emits only ' + sig(ratio) + ' of what it does at ' + a + ' K, because (' + b + '/' + a + ')⁴ = ' + sig(ratio) + '.');
    readout(d.readout, `\\frac{\\kQh}{\\kt} = \\sigma e A \\kTemp^4:\\quad ${wattsTex(Pa)}\\ \\text{at}\\ \\kTempone = ${a}\\ \\text{K},\\qquad ${wattsTex(Pb)}\\ \\text{at}\\ \\kTemptwo = ${b}\\ \\text{K},\\qquad \\left(\\frac{\\kTemptwo}{\\kTempone}\\right)^{\\!4} = ${sig(ratio)}`,
      'The rates are for A = 1.00 m² with the emissivity ' + fmt(e, 2) + '; the emissivity scales both rates alike and leaves their ratio alone. The law takes the absolute temperature: ' + a + ' K is ' + degS(a - 273.15) + ' °C and ' + b + ' K is ' + degS(b - 273.15) + ' °C, and the ratio of the Celsius values would give the wrong answer.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the net rate of heat transfer by radiation, Example 14.9 drawn. A
   person in a room; the person emits at the rate of its own temperature
   and absorbs at the rate of the walls', with its own emissivity in both,
   and two bars below on one fixed scale show the two rates with the net
   between them. Still: a steady exchange.
===================================================================== */
(function () {
  const d = sim('sim-radiation-balance', 700);
  const T1 = ctl(d.controls, { label: '\\kTempone\\text{, the person}', cls: 'temperature', min: -50, max: 120, step: 0.5, value: 33, unit: '°C', dec: 1, aria: 'the skin temperature of the person' });
  const T2 = ctl(d.controls, { label: '\\kTemptwo\\text{, the walls}', cls: 'temperature', min: -50, max: 120, step: 0.5, value: 22, unit: '°C', dec: 1, aria: 'the temperature of the walls of the room' });
  const es = ctl(d.controls, { label: 'e', cls: '', min: 0, max: 1, step: 0.01, value: 0.97, unit: '', dec: 2, aria: 'the emissivity of the person' });
  const As = ctl(d.controls, { label: 'A', cls: '', min: 0.1, max: 2, step: 0.05, value: 1.5, unit: 'm²', dec: 2, aria: 'the surface area of the person' });
  /* The bars share one fixed scale, 0 to 3 kW: an emissivity of 1, 2.00 m² and 120 °C give 2.71 kW. */
  const ROOM = { l: 120, r: 1280, t: 96, b: 420 }, BX = 330, BW = 960, PMAX = 3000, BY1 = 512, BY2 = 592;
  function draw() {
    const { ctx } = begin(d.c);
    const e = es.v, A = As.v, ta = T1.v, tb = T2.v, Ka = K(ta), Kb = K(tb), tc = C('temperature'), pc = C('power');
    const Pout = SIGMA * e * A * Ka ** 4, Pin = SIGMA * e * A * Kb ** 4, net = Pin - Pout;
    /* the room: a wall all round, the floor thicker, and the person standing on it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(ROOM.l, ROOM.t, ROOM.r - ROOM.l, ROOM.b - ROOM.t); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.strokeRect(ROOM.l, ROOM.t, ROOM.r - ROOM.l, ROOM.b - ROOM.t); ctx.restore();
    const px = 700, py = ROOM.b - 4;
    person(ctx, px, py, PAL.ink, { s: 2.6 });
    /* the radiation: outward arrows on the left at the emitted rate's width, inward on the right at the absorbed rate's */
    const wOf = (P) => 2 + 12 * Math.min(1, P / PMAX);
    const mid = (ROOM.t + ROOM.b) / 2 - 20;
    [mid - 90, mid, mid + 90].forEach((y) => wavy(ctx, px - 120, y, ROOM.l + 40, y + (y - mid) * 0.35, wOf(Pout), pc));
    [mid - 90, mid, mid + 90].forEach((y) => wavy(ctx, ROOM.r - 40, y + (y - mid) * 0.35, px + 120, y, wOf(Pin), pc));
    text(ctx, 'emitted by the person, ' + watts(Pout), (px - 120 + ROOM.l + 40) / 2, mid - 45, pc, { size: 19, weight: 600, align: 'center', bg: PAL.soft });
    text(ctx, 'absorbed from the walls, ' + watts(Pin), (px + 120 + ROOM.r - 40) / 2, mid - 45, pc, { size: 19, weight: 600, align: 'center', bg: PAL.soft });
    text(ctx, 'walls at T_2 = ' + degS(tb) + ' °C', px, ROOM.t, tc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'skin at T_1 = ' + degS(ta) + ' °C', px, py - 240, tc, { size: 20, weight: 600, align: 'center', bg: PAL.soft });
    /* the two bars, and the net rate as a bracket between their ends */
    const bar = (y, P, label) => {
      const w = BW * Math.min(1, P / PMAX);
      ctx.save(); ctx.fillStyle = alpha(pc, 0.35); ctx.fillRect(BX, y - 20, w, 40); ctx.restore();
      line(ctx, BX + w, y - 20, BX + w, y + 20, pc, 3);
      text(ctx, label, BX - 16, y, PAL.ink, { size: 19, weight: 600, align: 'right' });
      return BX + w;
    };
    line(ctx, BX, BY1 - 34, BX, BY2 + 34, PAL.muted, 2);
    for (let k = 0; k <= 3; k++) { const x = BX + (BW * k) / 3; line(ctx, x, BY2 + 24, x, BY2 + 34, PAL.muted, 2); text(ctx, k + ' kW', x, BY2 + 54, PAL.muted, { size: 17, align: 'center' }); }
    const xo = bar(BY1, Pout, 'emitted'), xi = bar(BY2, Pin, 'absorbed');
    const gap = Math.abs(xi - xo);
    if (gap >= 6) {
      const x1 = Math.min(xo, xi), x2 = Math.max(xo, xi);
      hbracket(ctx, x1, x2, BY1 + 40, PAL.ink);
      text(ctx, 'net ' + watts(Math.abs(net)) + (net < 0 ? ' out of the person' : ' into the person'), Math.min(x2 + 16, 1200), BY1 + 40, PAL.ink, { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    } else text(ctx, Math.abs(net) < 0.5 ? 'net 0 W: the two rates match' : 'net ' + watts(Math.abs(net)) + (net < 0 ? ' out of the person' : ' into the person'), Math.min(xo + 16, 1200), (BY1 + BY2) / 2, PAL.ink, { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    const sameT = Math.abs(ta - tb) < 1e-9;
    topline(ctx, sameT ? 'A person at ' + degS(ta) + ' °C in a room at the same temperature emits and absorbs ' + watts(Pout) + ' alike, and the net rate is zero.'
      : net < 0 ? 'A person at ' + degS(ta) + ' °C in a room at ' + degS(tb) + ' °C loses ' + watts(-net) + ' by radiation.'
        : 'A person at ' + degS(ta) + ' °C in a room at ' + degS(tb) + ' °C gains ' + watts(net) + ' by radiation.');
    readout(d.readout, `\\frac{\\kQnet}{\\kt} = \\sigma e A\\left(\\kTemptwo^4 - \\kTempone^4\\right) = (${SIGTEX})(${fmt(e, 2)})(${fmt(A, 2)}\\ \\text{m}^2)\\left[(${fmt(Kb, 0)}\\ \\text{K})^4 - (${fmt(Ka, 0)}\\ \\text{K})^4\\right] = ${net < 0 ? '-' : ''}${wattsTex(Math.abs(net))}`,
      'The person emits ' + watts(Pout) + ' and absorbs ' + watts(Pin) + ' from the walls, so ' + (sameT ? 'the net rate is zero and the person neither warms nor cools by radiation.' : net < 0 ? watts(-net) + ' leaves the person; the minus sign says the net transfer is out of the person, from hot to cold.' : watts(net) + ' enters the person; the positive sign says the net transfer is into the person, from the hotter walls.') + ' The emissivity is the person’s alone, whatever the walls are made of.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 14.33: the greenhouse effect as a balance. Sunlight is absorbed
   by the surface; the surface radiates infrared at the rate the law gives
   for its temperature; the atmosphere returns a fraction f of it and lets
   the rest out to space; the surface settles where what it emits equals
   the sunlight plus what comes back. Still: a steady state.
===================================================================== */
(function () {
  const d = sim('sim-greenhouse', 640);
  const Ss = ctl(d.controls, { label: 'S\\text{, sunlight absorbed}', cls: '', min: 150, max: 350, step: 5, value: 240, unit: 'W/m²', dec: 0, aria: 'the sunlight absorbed by each square meter of surface, averaged over the globe' });
  const fs = ctl(d.controls, { label: 'f\\text{, fraction returned}', cls: '', min: 0, max: 0.7, step: 0.01, value: 0.44, unit: '', dec: 2, aria: 'the fraction of the surface’s infrared the atmosphere returns' });
  const SUN = '#f2c14e';                                       /* the Sun's disc: the colour that is the fact */
  const surfaceT = (S, f) => Math.pow(S / (SIGMA * (1 - f)), 0.25);
  /* the Earth's surface is an arc of a large circle, the atmosphere a band above it */
  const CX = 700, CY = 2900, RE = 2460, RA = 2680;               /* surface top at y = 440, atmosphere band centred at y = 220 */
  const yOn = (x, R) => CY - Math.sqrt(R * R - (x - CX) ** 2);
  const bandOf = (R1, R2, fillStyle) => (ctx) => { ctx.save(); ctx.fillStyle = fillStyle; ctx.beginPath(); ctx.arc(CX, CY, R2, Math.PI * 1.25, Math.PI * 1.75); ctx.arc(CX, CY, R1, Math.PI * 1.75, Math.PI * 1.25, true); ctx.closePath(); ctx.fill(); ctx.restore(); };
  function draw() {
    const { ctx } = begin(d.c);
    const S = Ss.v, f = fs.v, tc = C('temperature'), pc = C('power');
    const T = surfaceT(S, f), T0 = surfaceT(S, 0), E = SIGMA * T ** 4, back = f * E, out = (1 - f) * E;
    const wOf = (P) => 4 + 30 * Math.min(1, P / 900), wIR = (P) => 3 + 12 * Math.min(1, P / 900);
    /* the ground, the atmosphere band and space */
    bandOf(0, RE, PAL.soft)(ctx);
    bandOf(RA - 22, RA + 22, alpha(PAL.ink, 0.12))(ctx);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(CX, CY, RE, Math.PI * 1.25, Math.PI * 1.75); ctx.stroke(); ctx.restore();
    text(ctx, 'Earth’s surface', 120, yOn(120, RE) + 40, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'atmosphere', 1180, yOn(1180, RA) - 44, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'space', 1300, 92, PAL.muted, { size: 18, align: 'center' });
    /* the Sun */
    ctx.save(); ctx.fillStyle = SUN; ctx.beginPath(); ctx.arc(110, 110, 44, 0, 2 * Math.PI); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    text(ctx, 'Sun', 110, 178, PAL.ink, { size: 18, align: 'center' });
    /* the flows: sunlight in, infrared up to the atmosphere, then part back and part out */
    const xs = 400, xr = 800, xb = 1040;
    beam(ctx, 150, 160, xs, yOn(xs, RE) - 6, wOf(S), pc);
    wavy(ctx, xr, yOn(xr, RE) - 6, xr, yOn(xr, RA) + 22, wIR(E), pc, 13, 44);
    wavy(ctx, xr + 24, yOn(xr, RA) - 22, xr + 24, 70, wIR(out), pc, 13, 44);
    wavy(ctx, xr + 60, yOn(xr, RA) - 4, xb, yOn(xb, RE) - 6, wIR(back), pc, 13, 44);
    const lab = labeller(ctx, 640); lab.block(0, 0, 1400, 88);
    lab.add('sunlight absorbed, S = ' + fmt(S, 0) + ' W/m²', 290, 290, 1, -0.2, pc, 19, 40);
    lab.add('infrared from the surface, σT⁴ = ' + fmt(E, 0) + ' W/m²', xr, yOn(xr, RA) + 100, -1, 0, pc, 19, 30);
    lab.add('escapes to space, (1 − f)σT⁴ = ' + fmt(out, 0) + ' W/m²', xr + 24, 130, 1, 0, pc, 19, 40);
    lab.add('returned by the atmosphere, fσT⁴ = ' + fmt(back, 0) + ' W/m²', (xr + 60 + xb) / 2 + 40, (yOn(xr, RA) + yOn(xb, RE)) / 2 + 30, 1, 0.2, pc, 19, 40);
    lab.add('surface at T = ' + fmt(T, 0) + ' K, which is ' + degS(T - 273.15) + ' °C', 700, yOn(700, RE) + 60, 0, 1, tc, 21, 18);
    lab.flush();
    topline(ctx, f < 0.005 ? 'With nothing returned by the atmosphere the surface settles at ' + degS(T - 273.15) + ' °C, the temperature of an Earth with no atmosphere under this sunlight.'
      : 'With the atmosphere returning ' + percent(f) + ' of the surface’s infrared, the surface settles at ' + degS(T - 273.15) + ' °C, ' + fmt(T - T0, 0) + ' °C warmer than it would be with no atmosphere.');
    readout(d.readout, `\\sigma\\kTemp^4 = S + f\\,\\sigma\\kTemp^4 \\;\\Rightarrow\\; \\kTemp = \\left(\\frac{S}{\\sigma(1 - f)}\\right)^{1/4} = \\left(\\frac{${fmt(S, 0)}\\ \\text{W/m}^2}{(${SIGTEX})(${fmt(1 - f, 2)})}\\right)^{1/4} = ${fmt(T, 0)}\\ \\text{K} = ${degC(T - 273.15)}^\\circ\\text{C}`,
      'With no infrared returned the same sunlight would hold the surface at ' + fmt(T0, 0) + ' K, which is ' + degS(T0 - 273.15) + ' °C, so the atmosphere is worth ' + fmt(T - T0, 0) + ' °C here. The infrared that escapes to space, ' + fmt(out, 0) + ' W/m², equals the sunlight absorbed, as a steady balance requires; the surface is taken as an ideal radiator in the infrared, and the 1.00 m² is averaged over the globe and over day and night.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
