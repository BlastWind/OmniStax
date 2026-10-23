/* Figures for section 7.6 Conservation of Energy. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, vbracket, hbracket, axes, runner, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
/* A row of one of the chapter's tables is a named state, not a quantity, so it is picked from a
   list by its name rather than reached by sliding an index (rule 26.1). The figure still reads
   the index it always read. */
function pickRow(host, o) {
  const c = F.select(host, { label: o.label, aria: o.aria, options: o.names.map((n, i) => ({ value: String(i), label: n })), value: String(o.value ?? 0), onInput: () => o.onInput?.() });
  return { get v() { return +c.value; }, set(x) { c.set(String(x)); } };
}
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
  const H = ctl(d.controls, { label: '\\kh', cls: 'position', min: 2, max: 20, step: 0.5, value: 8, unit: 'm', dec: 1, onInput: reset, aria: '爬升的高度' });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.4, max: 2, step: 0.1, value: 1, unit: 'm/s', dec: 1, onInput: reset, aria: '步行速率' });
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 110, step: 1, value: 65, unit: 'kg', dec: 0, onInput: reset, aria: '质量' });
  const E = ctl(d.controls, { label: '\\text{Eff}', cls: '', min: 5, max: 25, step: 1, value: 20, unit: '%', dec: 0, onInput: reset, aria: '人体的效率' });
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
    line(ctx, 60, yb, x0, yb, PAL.muted, 3); line(ctx, x1, yt, 640, yt, PAL.muted, 3);
    /* the climber, her feet on the tread she has reached and her body leaning into the climb */
    const step = Math.min(N - 1, Math.floor(s.f * N)), within = done ? 1 : s.f * N - step, tread = (x1 - x0) / N;
    const cx = done ? x1 + 24 : x0 + tread * (step + 0.3 + 0.4 * within), cyy = done ? yt : yb - ((yb - yt) * step) / N;
    /* the climber stands to the stairs' own scale, her front foot on the step above while she climbs */
    const stepUp = (yb - yt) / N, PS = 0.66, sw = done ? 0 : Math.sin(within * Math.PI);
    F.silhouette(ctx, done ? { x: cx, y: cyy, s: PS, pose: 'stand', color: F.ref('climber') } : { x: cx, y: cyy, s: PS, pose: 'walk', color: F.ref('climber'), hands: [{ x: 18 + 10 * sw, y: -78 }, { x: -14 - 10 * sw, y: -80 }],
      feet: [{ x: 16 + 8 * sw, y: -stepUp / PS }, { x: -18 - 6 * sw, y: 0 }] });
    /* her speed, along the stairs */
    const ax = 78, ay = -78 * ((yb - yt) / (x1 - x0));
    if (!done) {
      arrow(ctx, cx + 34, cyy - 60, cx + 34 + ax, cyy - 60 + ay, C('velocity'), 5);
      text(ctx, fmt(V.v, 1) + ' m/s', cx + 40 + ax, cyy - 68 + ay, C('velocity'), { weight: 600, size: 20, bg: PAL.panel });
    }
    /* the height gained so far, bracketed against the full climb */
    line(ctx, x0, yt, 660, yt, PAL.rule, 2, [10, 10]);
    line(ctx, x0, yb, 660, yb, PAL.rule, 2, [10, 10]);
    vbracket(ctx, 630, yb - (yb - yt) * s.f, yb, C('position'), fmt(s.y, 1) + ' m', 1);
    text(ctx, '共 ' + fmt(H.v, 1) + ' m', 646, yt + 22, C('position'), { size: 17, weight: 600 });
    text(ctx, 't = ' + fmt(tau, 1) + ' s', 110, 130, C('time'), { weight: 600, size: 24 });
    /* ---- the account, on the right ---- */
    const box = { l: 800, r: 1330, t: 150, b: 470 };
    /* fixed axes. The slowest, longest climb takes 20 m / (0.40 m/s × 0.5) = 100 s and the least
       efficient one puts 431 kJ through the account, but the default climb is 16 s and 25.5 kJ and
       would then be squeezed into a corner, so both ranges are fixed to hold the default climb
       comfortably instead, 0 to 20 s by 0 to 30 kJ, ticked every 5 s and every 6 kJ. A longer or
       hungrier climb is drawn only as far as the box reaches, with the total pinned at the edge.
       Neither range moves. */
    const TR = 20, ER = 30, kJ = 1 / 1000, tot = s.total * kJ, top = ER;
    const { X, Y } = axes(ctx, box, [0, TR], [0, ER], { xl: 't (s)', xc: C('time'), yl: '能量（kJ）', yc: C('energy'), nx: 4, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const tEnd = Math.min(T(), TR), end = state(tEnd), ke = s.ke * kJ;
    /* the four bands, stacked: kinetic, potential, thermal, chemical. Every one of them is
       linear in the time, so each band is a quadrilateral between the start and the end. */
    stack(ctx, X, Y, 0, tEnd, 0, ke, 0, ke, 0.75);
    stack(ctx, X, Y, 0, tEnd, ke, ke, ke, ke + end.pe * kJ, 0.45);
    stack(ctx, X, Y, 0, tEnd, ke, ke, ke + end.pe * kJ, ke + (end.pe + end.th) * kJ, 0.22);
    stack(ctx, X, Y, 0, tEnd, ke, ke + end.foodAll * kJ, ke + (end.pe + end.th) * kJ, ke + end.foodAll * kJ, 0.08);
    const totC = Math.min(tot, ER);
    line(ctx, X(0), Y(totC), X(tEnd), Y(totC), C('energy'), 5);
    if (ke * (box.b - box.t) / top < 26) text(ctx, '动能，' + J(s.ke) + ' J，在此图中太小，看不出', box.l, box.b + 58, PAL.muted, { size: 17 });
    /* where the clock stands */
    line(ctx, X(Math.min(tau, TR)), box.t, X(Math.min(tau, TR)), box.b, C('time'), 3, [4, 8]);
    F.pinned(ctx, box, X, Y, tau, tot, C('energy'), fmt(tot, 1) + ' kJ');
    /* the names go over the clock's line, on panels */
    if (X(tEnd) - X(0) > 240) text(ctx, '总量始终不变', X(tEnd * 0.5), Y(totC) - 20, C('energy'), { size: 17, align: 'center', weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the bands named, each where it is thickest */
    const name = (label, at, lo, hi) => { if (X(tEnd) - X(0) > 200 && (hi - lo) * (box.b - box.t) / top > 26 && (lo + hi) / 2 < ER) text(ctx, label, X(tEnd * at), Y((lo + hi) / 2), PAL.ink, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.7) }); };
    name('动能', 0.5, 0, ke);
    name('势能', 0.78, ke, ke + end.pe * kJ);
    name('热能', 0.72, ke + end.pe * kJ, ke + (end.pe + end.th) * kJ);
    name('化学能', 0.26, ke + 0.5 * end.foodAll * kJ, ke + end.foodAll * kJ);
    topline(ctx, done
      ? '她爬完了全部 ' + fmt(H.v, 1) + ' m，用掉 ' + fmt(s.foodAll * kJ, 1) + ' kJ 食物能量，其中 ' + fmt(s.peAll * kJ, 1) + ' kJ 现在变成了高度。'
      : '在 ' + fmt(tau, 1) + ' s 时她已爬了 ' + fmt(s.y, 1) + ' m（共 ' + fmt(H.v, 1) + ' m），已消耗 ' + fmt(s.spent * kJ, 1) + ' kJ（共 ' + fmt(s.foodAll * kJ, 1) + ' kJ）。');
    readout(d.readout, `\\kKEi + \\kPEi + \\kWnc + \\kOEi = ${Jtex(s.ke)} + 0 + 0 + ${Jtex(s.foodAll)} = ${Jtex(s.total)}\\ \\text{J}`,
      '此刻方程另一侧为 ' + J(s.ke) + ' + ' + J(s.pe) + ' + ' + J(s.chem + s.th) + ' = ' + J(s.total)
      + ' J，总量相同。');
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
    ['大爆炸', 1, 68, '10⁶⁸'],
    ['超新星爆发释放的能量', 1, 44, '10⁴⁴'],
    ['地球海洋中全部氢的聚变', 1, 34, '10³⁴'],
    ['全世界年能源消费量', 4, 20, '4 × 10²⁰'],
    ['一颗大型氢弹（9 兆吨）', 3.8, 16, '3.8 × 10¹⁶'],
    ['1 kg 氢聚变为氦', 6.4, 14, '6.4 × 10¹⁴'],
    ['1 kg 铀（核裂变）', 8.0, 13, '8.0 × 10¹³'],
    ['一颗广岛级原子弹（10 千吨）', 4.2, 13, '4.2 × 10¹³'],
    ['以 30 节航行的 90,000 吨航空母舰', 1.1, 10, '1.1 × 10¹⁰'],
    ['1 桶原油', 5.9, 9, '5.9 × 10⁹'],
    ['1 吨 TNT', 4.2, 9, '4.2 × 10⁹'],
    ['1 加仑汽油', 1.2, 8, '1.2 × 10⁸'],
    ['发达国家的家庭日用电量', 7, 7, '7 × 10⁷'],
    ['推荐的成年人每日食物摄入量', 1.2, 7, '1.2 × 10⁷'],
    ['以 90 km/h 行驶的 1000 kg 汽车', 3.1, 5, '3.1 × 10⁵'],
    ['1 g 脂肪（9.3 千卡）', 3.9, 4, '3.9 × 10⁴'],
    ['一次 ATP 水解反应', 3.2, 4, '3.2 × 10⁴'],
    ['1 g 碳水化合物（4.1 千卡）', 1.7, 4, '1.7 × 10⁴'],
    ['1 g 蛋白质（4.1 千卡）', 1.7, 4, '1.7 × 10⁴'],
    ['以 100 km/h 飞行的网球', 2.2, 1, '22'],
    ['以 0.5 m/s 飞行的蚊子', 1.3, -6, '1.3 × 10⁻⁶'],
    ['电视显像管电子束中的单个电子', 4.0, -15, '4.0 × 10⁻¹⁵'],
    ['使一条 DNA 链断裂所需的能量', 1, -19, '10⁻¹⁹'],
  ];
  const A = pickRow(d.controls, { label: '\\text{此项}', aria: '表 7.1 中要标出的一行', names: ROW.map((r) => r[0]), value: 11 });
  const B = pickRow(d.controls, { label: '\\text{与之比较}', aria: '表 7.1 中用来比较的一行', names: ROW.map((r) => r[0]), value: 14 });
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
    text(ctx, '以焦耳计的能量', X(HI), yl + 122, C('energy'), { size: 20, align: 'right', weight: 600 });
    /* every row of the table, marked */
    ROW.forEach((r) => dot(ctx, X(pos(r)), yl, PAL.muted, true, 5));
    /* the two rows the sliders choose, named above the ladder on two lines */
    const label = (r, x, y, filled) => {
      line(ctx, x, yl - 14, x, y + 14, PAL.muted, 2);
      const side = x > 1120 ? 'right' : x < 280 ? 'left' : 'center';
      text(ctx, r[0] + '，' + r[3] + ' J', x, y, PAL.ink, { size: 20, align: side, weight: 600, bg: PAL.panel });
      dot(ctx, x, yl, C('energy'), filled, 11);
    };
    label(b, xb, 130, false);
    label(a, xa, 186, true);
    /* the distance between them, which is the ratio */
    const same = Math.abs(va - vb) < 1e-12 * Math.max(va, vb);
    if (!same) hbracket(ctx, Math.min(xa, xb), Math.max(xa, xb), 320, C('energy'), '× ' + ratio(Math.max(va, vb) / Math.min(va, vb)));
    const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
    topline(ctx, same
      ? cap(a[0]) + '与' + b[0] + '对应的能量相同，均为 ' + a[3] + ' J。'
      : va >= vb
        ? cap(a[0]) + '对应 ' + a[3] + ' J，是' + b[0] + '的 ' + ratio(va / vb) + ' 倍。'
        : cap(a[0]) + '对应 ' + a[3] + ' J，是' + b[0] + '的 ' + ratio(vb / va) + ' 分之一。');
    readout(d.readout, same ? `${tx(a)} = ${tx(b)}`
      : `\\frac{${tx(va >= vb ? a : b)}}{${tx(va >= vb ? b : a)}} = ${ratioTex(Math.max(va, vb) / Math.min(va, vb))}`);
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
  const d = sim('sim-conversion', 545);
  const DEV = [
    ['骑行与爬坡', 20], ['水面游泳', 2], ['潜泳', 4], ['铲土', 3],
    ['举重', 9], ['蒸汽机', 17], ['汽油机', 30], ['柴油机', 35],
    ['核电站', 35], ['燃煤电厂', 42], ['电动机', 98], ['紧凑型荧光灯', 20],
    ['家用燃气取暖器', 90], ['太阳电池', 10],
  ];
  const EIN = ctl(d.controls, { label: '\\kEin', cls: 'energy', min: 1, max: 100, step: 1, value: 10, unit: 'MJ', dec: 1, aria: '输入的能量' });
  const D1 = pickRow(d.controls, { label: '\\text{装置}', aria: '能量所经过的表 7.2 中的装置', names: DEV.map((r) => r[0] + '，' + r[1] + '%'), value: 9 });
  const D2 = pickRow(d.controls, { label: '\\text{再经过}', aria: '表 7.2 中的第二个装置，或无', names: ['不再经过'].concat(DEV.map((r) => r[0] + '，' + r[1] + '%')), value: 0 });
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
    else if (to - cut > 3 && to < 1100) text(ctx, waste, to + 14, y + TH / 2, C('energy'), { size: 17 });
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
    text(ctx, '输入的能量，' + MJ(ein), L + W / 2, 122 + TH / 2, C('energy'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, 200, 192, 200, 248, PAL.ink, 4);
    text(ctx, '经过' + DEV[D1.v][0] + '，效率为 ' + fmt(DEV[D1.v][1], 0) + '%', 224, 212, PAL.ink, { size: 20 });
    /* what the first device passed on, and what it did not */
    const cut1 = stage(ctx, 272, L, L + W, e1, '输出的有用能量，' + MJ(out1), '热能，' + MJ(ein - out1));
    if (two) {
      arrow(ctx, 200, 366, 200, 418, PAL.ink, 4);
      text(ctx, '经过' + DEV[D2.v - 1][0] + '，效率为 ' + fmt(DEV[D2.v - 1][1], 0) + '%', 224, 384, PAL.ink, { size: 20 });
      stage(ctx, 434, L, cut1, e2, '输出的有用能量，' + MJ(out2), '热能，' + MJ(out1 - out2));
    }
    const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
    topline(ctx, two
      ? cap(DEV[D1.v][0]) + '把 ' + MJ(ein) + ' 转化为 ' + MJ(out1) + '，' + DEV[D2.v - 1][0] + '再把这些转化为 ' + MJ(out2) + '，所以输入的能量还剩 ' + fmt(e1 * e2 * 100, 1) + '%。'
      : cap(DEV[D1.v][0]) + '把 ' + MJ(ein) + ' 转化为 ' + MJ(out1) + ' 的有用能量，其余的 ' + MJ(ein - out1) + ' 以热能的形式离开。');
    readout(d.readout, `\\text{Eff} = \\frac{\\kWout}{\\kEin} = \\frac{${mj(two ? out2 : out1)}\\ \\text{MJ}}{${mj(ein)}\\ \\text{MJ}} = ${fmt(e1 * e2, 3)}`);
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
  const STOP = [[150, '静止，油箱已满'], [340, '汽油耗尽'], [640, '越过坡顶'], [840, '向下滑行'], [1140, '刹车停下']];
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
    text(ctx, '加油站', 1250, ground(1250) + 26, PAL.muted, { size: 17, align: 'center' });
    /* the car at each of the positions the question asks about, leaning on the slope, with the book's arrow above it */
    STOP.forEach(([x, label], i) => {
      const y = ground(x), a = Math.atan2(ground(x + 8) - ground(x - 8), 16);
      ctx.save(); ctx.translate(x, y - 10); ctx.rotate(a); F.car(ctx, 0, 0, F.ref('car'), 0.9); ctx.restore();
      const ly = Math.max(84, y - 132), at = ly + 22, ab = y - 54;
      if (ab - at > 14) arrow(ctx, x, at, x, ab, PAL.ink, 4);
      text(ctx, label, x, ly, PAL.ink, { size: 17, align: i === 0 ? 'left' : i === STOP.length - 1 ? 'right' : 'center', bg: PAL.panel });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
