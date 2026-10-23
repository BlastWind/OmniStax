/* Figures for section 7.7 Power. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, vbracket, axes, nice, runner, FONT, pinned } = F;
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
  const m = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 100, step: 1, value: 60, unit: 'kg', dec: 0, onInput: reset, aria: '她的质量' });
  const h = ctl(d.controls, { label: '\\kh', cls: 'position', min: 1, max: 6, step: 0.25, value: 3, unit: 'm', dec: 2, onInput: reset, aria: '楼梯的高度' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1.5, max: 12, step: 0.25, value: 3.5, unit: 's', dec: 2, onInput: reset, aria: '她所用的时间' });
  const vf = ctl(d.controls, { label: '\\kvf', cls: 'velocity', min: 0, max: 4, step: 0.1, value: 2, unit: 'm/s', dec: 2, onInput: reset, aria: '她在楼梯顶端的速率' });
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
    const x0 = 150, y0 = 560, SC = 310 / Math.max(h.v, 2), rise = h.v * SC, run = 1.2 * rise, n = clamp(Math.round(h.v / 0.2), 5, 30);
    line(ctx, 60, y0, 800, y0, PAL.muted, 3);
    stairs(ctx, x0, y0, rise, run, n);
    vbracket(ctx, x0 + run + 40, y0, y0 - rise, C('position'), 'h = ' + fmt(h.v, 2) + ' m', 1);
    dot(ctx, x0 - 8, y0 - 12, PAL.ink, false, 10);
    text(ctx, '她从静止开始', x0 - 20, y0 + 36, F.ref('woman'), { size: 17 });
    const tread = Math.min(n - 1, Math.floor(f * n));
    /* she runs to the flight's own scale, about 1.7 m, her front foot already on the step above and her arms swinging */
    const PS = clamp((1.7 * SC) / 150, 0.5, 0.95), sw = done ? 0 : Math.sin(tau * 9), stepUp = rise / n;
    const at = { x: x0 + f * run, y: y0 - ((tread + 1) * rise) / n, s: PS };
    F.silhouette(ctx, done ? { ...at, pose: 'stand', color: F.ref('woman') } : { ...at, pose: 'run', color: F.ref('woman'),
      feet: [{ x: 26 + 6 * sw, y: -stepUp / PS }, { x: -24 - 6 * sw, y: 0 }],
      hands: [{ x: 30 + 14 * sw, y: -96 }, { x: -20 - 14 * sw, y: -92 }] });
    if (vf.v > 0.05) {
      const ax = x0 + run + 110, ay = y0 - rise - 22;   /* beside the landing, clear of the bracket and of her */
      arrow(ctx, ax, ay, ax + vf.v * 26, ay, C('velocity'), 5);
      text(ctx, fmt(vf.v, 2) + ' m/s，在顶端', ax, ay - 28, C('velocity'), { size: 17, weight: 600 });
    }
    /* the graph beside the scene: the work delivered against the time, whose steepness is the power */
    const box = { l: 860, r: 1330, t: 175, b: 520 };
    /* fixed axes: the time is the slider's own range, 0 to 12 s, and the work the sliders can ask
       for is ½ × 100 kg × (4 m/s)² + 100 kg × 9.80 × 6 m = 6680 J, so the graph is always 0 to 12 s
       by 0 to 8000 J, ticked every 3 s and every 2000 J, and never rescales. */
    const TR = 12, WR = 8000;
    const { X, Y } = axes(ctx, box, [0, TR], [0, WR], { xl: 't (s)', xc: C('time'), yl: '已输出的功（J）', yc: C('energy'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => commas(fmt(v, 0)) });
    /* the two levels the work is made of, labelled clear of one another even when they nearly meet */
    const right = X(T.v) - box.l < 260;   /* the labels sit wherever the rising line is not */
    const level = (y, s) => text(ctx, s, right ? box.r - 14 : box.l + 14, y, C('energy'), { size: 17, align: right ? 'right' : 'left' });
    if (Y(PE) - Y(W) > 14) { line(ctx, box.l, Y(PE), box.r, Y(PE), C('energy'), 3, [10, 10]); level(Y(PE) + 18, 'mgh = ' + whole(PE) + ' J，攀登的部分'); }
    line(ctx, box.l, Y(W), box.r, Y(W), C('energy'), 3, [10, 10]);
    level(Math.max(box.t + 12, Y(W) - 16), 'W = ' + whole(W) + ' J，整项工作');
    line(ctx, X(0), Y(0), X(T.v), Y(W), C('energy'), 5);
    text(ctx, '这条直线的斜率就是平均功率，' + whole(P) + ' W', box.l, box.b + 102, C('power'), { size: 17, weight: 600 });
    if (tau > 1e-9) { line(ctx, X(tau), Y(0), X(tau), Y(W * f), PAL.muted, 2, [4, 8]); line(ctx, box.l, Y(W * f), X(tau), Y(W * f), PAL.muted, 2, [4, 8]); }
    dot(ctx, X(0), Y(0), C('energy'), false, 10);
    pinned(ctx, box, X, Y, tau, W * f, C('energy'), whole(W * f) + ' J');
    topline(ctx, tau < 1e-9 ? '她站在一段 ' + fmt(h.v, 2) + ' m 高的楼梯脚下，即将用 ' + fmt(T.v, 2) + ' s 跑上去。'
      : done ? '经过 ' + fmt(T.v, 2) + ' s，她到达顶端，共做了 ' + whole(W) + ' J 的功，输出功率为 ' + whole(P) + ' W。'
      : '在 ' + fmt(tau, 2) + ' s 时，她已爬完全程的 ' + fmt(100 * f, 0) + '%，已输出了 ' + whole(W * f) + ' J（共 ' + whole(W) + ' J），功率为 ' + whole(P) + ' W。');
    readout(d.readout, `\\kP = \\frac{\\kW}{\\kt} = \\frac{\\tfrac{1}{2}\\km{\\kvf}^2 + \\km\\kg\\kh}{\\kt} = \\frac{${whole(KE)}\\ \\text{J} + ${whole(PE)}\\ \\text{J}}{${fmt(T.v, 2)}\\ \\text{s}} = ${whole(P)}\\ \\text{W}`,
      '这相当于 ' + fmt(P / HP, 3) + ' hp，因为 1 hp = 746 W。这项工作所需的 ' + whole(W) + ' J 中，' + whole(PE) + ' J 用于把她升高，只有 ' + whole(KE) + ' J 用于使她加速，所以她的输出几乎全部花在攀登上。');
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
  const M = ctl(d.controls, { label: '\\text{尾数 } m', cls: '', min: 1, max: 9.9, step: 0.1, value: 8, unit: '', dec: 1, aria: '尾数' });
  const N = ctl(d.controls, { label: '\\text{指数 } n', cls: '', min: -3, max: 38, step: 1, value: 4, unit: '', dec: 0, aria: '指数' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  /* the rows of Table 7.3 in the book's order: the power in watts, the way the book prints it, and what it belongs to */
  const ROWS = [
    [5e37, '5 × 10³⁷', '峰值时的超新星'], [1e37, '10³⁷', '银河系'], [1e28, '10²⁸', '蟹状星云脉冲星'],
    [4e26, '4 × 10²⁶', '太阳'], [4e15, '4 × 10¹⁵', '最大时的火山喷发'], [2e12, '2 × 10¹²', '一次闪电'],
    [3e9, '3 × 10⁹', '核电站'], [1e8, '10⁸', '一艘航空母舰'], [2e6, '2 × 10⁶', '一辆直线加速赛车'], [8e4, '8 × 10⁴', '一辆汽车'],
    [5e3, '5 × 10³', '一名橄榄球运动员'], [4e3, '4 × 10³', '一台干衣机'], [100, '100', '静止状态的人'],
    [60, '60', '一只白炽灯泡'], [8, '8', '静止状态的人的心脏'], [3, '3', '一只电钟'], [1e-3, '10⁻³', '一个袖珍计算器'],
  ];
  const LO = -4, HI = 38, BL = 380, BR = 1230, X = (u) => BL + ((BR - BL) * (u - LO)) / (HI - LO);
  const TOP = 112, DY = 27, AX = 584;
  function draw() {
    const { ctx } = begin(d.c);
    const P = M.v * Math.pow(10, N.v), u = Math.log10(P), xm = X(clamp(u, LO, HI));
    const printed = (M.v === 1 ? '' : fmt(M.v, 1) + ' × ') + '10' + sup(N.v);
    const below = ROWS.filter(([v]) => Math.log10(v) < u - 0.01).sort((a, b) => b[0] - a[0])[0];
    const above = ROWS.filter(([v]) => Math.log10(v) > u + 0.01).sort((a, b) => a[0] - b[0])[0];
    const on = ROWS.find(([v]) => Math.abs(Math.log10(v) - u) <= 0.01);
    /* the line the sliders set runs behind the bars and their labels */
    line(ctx, xm, 92, xm, AX - 14, PAL.ink, 3, [8, 6]);
    /* one bar to the row, each step to the right a power of ten */
    ROWS.forEach((row, i) => {
      const x = X(Math.log10(row[0])), y = TOP + i * DY, hot = row === below || row === above || row === on;
      text(ctx, row[2], 364, y, hot ? C('power') : PAL.muted, { size: 17, align: 'right', weight: hot ? 600 : 400 });
      line(ctx, BL, y, x, y, hot ? C('power') : alpha(C('power'), 0.38), 13);
      text(ctx, row[1] + ' W', x + 13, y, hot ? C('power') : PAL.muted, { size: 17, weight: hot ? 600 : 400, bg: PAL.panel });
    });
    /* the scale the bars are drawn on */
    line(ctx, BL, AX, BR, AX, PAL.muted, 2);
    for (let n = LO; n <= HI; n++) line(ctx, X(n), AX - 6, X(n), AX + 6, PAL.rule, 2);
    for (let n = 0; n <= 35; n += 5) { line(ctx, X(n), AX - 8, X(n), AX + 10, PAL.muted, 2); text(ctx, '10' + sup(n) + ' W', X(n), AX + 34, PAL.muted, { size: 17, align: 'center' }); }
    /* the power the sliders set, and how far it stands from the entry on either side of it */
    text(ctx, printed + ' W', clamp(xm, 140, 1260), 74, C('power'), { size: 22, weight: 600, align: 'center' });
    /* the factor goes after the entry's own figure, where nothing else on the row can sit on it */
    const mark = (row, label) => {
      const x = X(Math.log10(row[0])), y = TOP + ROWS.indexOf(row) * DY;
      const w = F.measure(ctx, row[1] + ' W', { size: 17, weight: 600 });
      const fits = x + 13 + w + 36 < 1330;
      text(ctx, label, fits ? x + 13 + w + 36 : x - 14, y, PAL.ink, { size: 17, weight: 600, align: fits ? 'left' : 'right', bg: PAL.panel });
    };
    if (below) mark(below, '× ' + factor(P / below[0]));
    if (above) mark(above, '× ' + factor(above[0] / P));
    topline(ctx, on ? printed + ' W 是表 7.3 给出的' + on[2] + '的功率。'
      : below && above ? printed + ' W 介于' + below[2] + '与' + above[2] + '之间。'
      : printed + ' W 超出了表 7.3 的所有条目。');
    readout(d.readout, `\\kP = ${M.v === 1 ? '' : fmt(M.v, 1) + ' \\times '}10^{${N.v}}\\ \\text{W}`,
      below && above ? '这是' + below[2] + '的 ' + below[1] + ' W 的 ' + factor(P / below[0]) + ' 倍，是' + above[2] + '的 ' + above[1] + ' W 的 ' + factor(P / above[0]) + '。'
        : '');
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
  const P = ctl(d.controls, { label: '\\kP', cls: 'power', min: 0.05, max: 5, step: 0.05, value: 0.2, unit: 'kW', dec: 2, onInput: reset, aria: '用电器的功率' });
  const HRS = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 24, step: 0.5, value: 6, unit: 'h/d', dec: 2, onInput: reset, aria: '每天的运行小时数' });
  const PR = ctl(d.controls, { label: '\\text{价格}', cls: '', min: 0.05, max: 0.4, step: 0.005, value: 0.12, unit: '每千瓦时', dec: 3, onInput: reset, aria: '每千瓦时的价格' });
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
    text(ctx, '每千瓦时转一圈', 190, 302, PAL.muted, { size: 17, align: 'center' });
    /* the two things the rate of spending is made of */
    const bl = 400, bw = 420;
    const bar = (y, frac, color, caption, scale) => {
      text(ctx, caption, bl, y - 34, color, { size: 20, weight: 600 });
      line(ctx, bl, y, bl + bw, y, PAL.rule, 26);
      line(ctx, bl, y, bl + bw * frac, y, color, 26);
      text(ctx, scale, bl + bw + 14, y, PAL.muted, { size: 17 });
    };
    bar(158, P.v / 5, C('power'), '它取用 ' + fmt(P.v, 2) + ' kW', '共 5 kW');
    bar(246, HRS.v / 24, C('time'), '每天运行 ' + fmt(HRS.v, 2) + ' h', '共 24 h');
    /* the graph: a step of energy for every day the appliance runs */
    const box = { l: 210, r: 1330, t: 355, b: 480 };
    /* fixed axes: the month is 30 days, and the sliders could take 5 kW × 24 h × 30 d = 3600 kW·h,
       but the default appliance takes 36 kW·h and would then lie flat on the base line, so the
       energy axis is fixed at 0 to 50 kW·h, ticked every 10, which holds the default month
       comfortably. A hungrier appliance runs off the top, where the staircase is clipped and the
       running total is pinned at the edge. Neither range moves. */
    const ER = 50;
    const { X, Y } = axes(ctx, box, [0, DAYS], [0, ER], { xl: '一个月中的日期', xc: C('time'), yl: '所取用的能量（kW·h）', yc: C('energy'), nx: 6, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const cl = (u) => Math.min(u, ER);
    ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(X(0), Y(0));
    for (let i = 0; i < DAYS; i++) { ctx.lineTo(X(i + HRS.v / 24), Y(cl(energy(i + HRS.v / 24)))); ctx.lineTo(X(i + 1), Y(cl(energy(i + 1)))); }
    ctx.stroke(); ctx.restore();
    if (tau > 1e-9) line(ctx, X(tau), Y(0), X(tau), Y(cl(E)), PAL.muted, 2, [4, 8]);
    dot(ctx, X(0), Y(0), C('energy'), false, 10);
    pinned(ctx, box, X, Y, tau, E, C('energy'), X(tau) > box.l + 260 ? fmt(E, 1) + ' kW·h' : '');
    if (E <= ER) text(ctx, money(E * PR.v), clamp(X(tau), box.l + 50, box.r - 50), Y(cl(E)) - 30, PAL.ink, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, tau < 1e-9 ? '这个月刚开始，用电器还没有从电源取用任何能量。'
      : done ? '经过 ' + DAYS + ' 天，用电器共用了 ' + fmt(Etot, 1) + ' kW·h，按每 kW·h ' + money(PR.v) + ' 计算，这个月共计 ' + money(Etot * PR.v) + '。'
      : '到第 ' + fmt(tau, 1) + ' 天（共 ' + DAYS + ' 天）时，用电器已用了 ' + fmt(E, 1) + ' kW·h，到目前为止共计 ' + money(E * PR.v) + '。');
    readout(d.readout, `\\kE = \\kP\\kt = (${fmt(P.v, 3)}\\ \\text{kW})(${fmt(HRS.v, 2)}\\ \\text{h/d})(${fmt(DAYS, 1)}\\ \\text{d}) = ${fmt(Etot, 1)}\\ \\text{kW}\\cdot\\text{h}`,
      '按每千瓦时 ＄' + fmt(PR.v, 3) + ' 计算，这个月共计 ＄' + fmt(Etot * PR.v, 2) + '。' + (Etot > ER ? '这个月的总量超出了图的范围，图只画到 ' + ER + ' kW·h。' : ''));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => DAYS / 5), draw });
})();

};
