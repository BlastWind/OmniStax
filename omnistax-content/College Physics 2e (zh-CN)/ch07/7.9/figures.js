/* Figures for section 7.9 World Energy Use. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, dot, text, headline, topline, scale, axes, nice, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* a filled bar, in the energy hue at the alpha given, or in a colour of its own where the bar
   stands for one of a set of things that must be told apart rather than for an amount of energy */
function seg(ctx, x1, x2, y, h, a, color) {
  const w = Math.max(x2 - x1, 0); if (w <= 0) return;
  ctx.save(); ctx.fillStyle = color ? alpha(color, a) : alpha(C('energy'), a); ctx.fillRect(x1, y - h / 2, Math.max(w, 2), h); ctx.restore();
}
/* a swatch and its name, for a key; returns the x the next entry may start at */
function key(ctx, x, y, a, label, size = 17, color) {
  ctx.save(); ctx.fillStyle = color ? alpha(color, a) : alpha(C('energy'), a); ctx.fillRect(x, y - 8, 26, 16);
  ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(x, y - 8, 26, 16); ctx.restore();
  text(ctx, label, x + 34, y, PAL.ink, { size });
  return x + 34 + F.measure(ctx, label, { size }) + 52;
}

/* =====================================================================
   FIGURE 7.26: the world's energy by source. The book's seven shares for
   2006 stand one to a row, the four sources that can be used up first
   and the three renewable ones after them, and a second bar in each row
   holds the same source once the renewable share is raised to the
   target. A still picture: the mix of a year has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-mix', 610);
  const T = ctl(d.controls, { label: '\\text{可再生能源目标}', cls: '', min: 7.2, max: 80, step: 0.1, value: 7.2, unit: '%', dec: 1, aria: '可再生能源目标占比' });
  /* the shares the book's pie gives, in the book's own words and numbers */
  const SRC = [
    { name: '石油', pct: 35.43, ren: false, a: 0.95 },
    { name: '煤', pct: 28.15, ren: false, a: 0.74 },
    { name: '干天然气', pct: 23.46, ren: false, a: 0.53 },
    { name: '核电', pct: 5.79, ren: false, a: 0.32 },
    { name: '水电', pct: 6.27, ren: true, a: 0.95 },
    { name: '地热、风能、太阳能和生物质能发电', pct: 0.86, ren: true, a: 0.66 },
    { name: '非发电用的地热、生物质能和太阳能', pct: 0.05, ren: true, a: 0.38 },
  ];
  const R0 = SRC.filter((s) => s.ren).reduce((t, s) => t + s.pct, 0);        /* 7.18 */
  const N0 = SRC.filter((s) => !s.ren).reduce((t, s) => t + s.pct, 0);       /* 92.83 */
  const L = 520, RX = 1280, X = (p) => L + ((RX - L) * p) / 100;
  const ROW = [170, 220, 270, 320, 415, 465, 515];
  function draw() {
    const { ctx } = begin(d.c);
    const t = T.v, held = t <= R0 / (R0 + N0) * 100 + 0.05;
    const kr = t / R0, kn = (100 - t) / N0;
    /* the key, so the two bars of a row can be told apart */
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.9); ctx.fillRect(1046, 114, 26, 16); ctx.restore();
    text(ctx, '2006 年', 1080, 122, PAL.ink, { size: 17 });
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.32); ctx.fillRect(1046, 140, 26, 16);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(1046, 140, 26, 16); ctx.restore();
    text(ctx, '可再生能源占比达到 ' + fmt(t, 1) + '%', 1080, 148, PAL.ink, { size: 17 });
    /* the two groups, each with its heading and its rows */
    text(ctx, '会被用尽的能源，占 2006 年世界能源的 ' + fmt(N0, 1) + '%', 30, 125, PAL.ink, { size: 20, weight: 600 });
    text(ctx, '可再生能源，2006 年占 ' + fmt(R0, 1) + '%，达到目标时占 ' + fmt(t, 1) + '%', 30, 370, PAL.ink, { size: 20, weight: 600 });
    SRC.forEach((s, i) => {
      const y = ROW[i], now = s.pct, then = s.pct * (s.ren ? kr : kn);
      text(ctx, s.name, 500, y, PAL.ink, { size: 18, align: 'right' });
      seg(ctx, X(0), X(now), y - 10, 14, s.a);
      text(ctx, fmt(now, 2) + '%', X(now) + 12, y - 10, PAL.ink, { size: 17 });
      seg(ctx, X(0), X(then), y + 10, 14, s.a * 0.38);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(X(0), y + 3, Math.max(X(then) - X(0), 2), 14); ctx.restore();
      text(ctx, fmt(then, 2) + '%', X(then) + 12, y + 10, held ? PAL.muted : PAL.ink, { size: 17 });
    });
    /* the zero line breaks round the second group's heading */
    line(ctx, X(0), 150, X(0), 340, PAL.muted, 2); line(ctx, X(0), 395, X(0), 535, PAL.muted, 2);
    scale(ctx, X, 0, 100, 20, 550, '%', 1);
    topline(ctx, held
      ? '2006 年，可再生能源供应了世界能源的 ' + fmt(R0, 1) + '%，石油、煤和天然气供应了其中的 ' + fmt(SRC[0].pct + SRC[1].pct + SRC[2].pct, 1) + '%。'
      : '可再生能源占比从 ' + fmt(R0, 1) + '% 提高到 ' + fmt(t, 1) + '%，需要从石油、煤、天然气和核电中拿出 ' + fmt(t - R0, 1) + ' 个百分点。');
    readout(d.readout, held
      ? `\\text{可再生能源} = 6.27\\% + 0.86\\% + 0.05\\% = ${fmt(R0, 2)}\\%`
      : `\\text{可再生能源} : ${fmt(R0, 2)}\\% \\longrightarrow ${fmt(t, 1)}\\%, \\quad \\text{变化量 } ${fmt(t - R0, 2)} \\text{ 个百分点}`,
      held
        ? '世界从可再生能源中获取的绝大部分来自水电，其余所有可再生能源加在一起不到总量的百分之一。'
        : '会被用尽的四种能源合计从占总量的 ' + fmt(N0, 1) + '% 降到 ' + fmt(100 - t, 1) + '%，仅石油就从 ' + fmt(SRC[0].pct, 1) + '% 降到 ' + fmt(SRC[0].pct * kn, 1) + '%。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.27: past and projected world energy use. The two numbers the
   book's chart gives are marked, and the curve between them is steady
   growth at the rate the reader sets. A still picture: the year is a
   slider the reader sets, not a clock the figure runs.
===================================================================== */
(function () {
  const d = sim('sim-growth', 500);
  const R = ctl(d.controls, { label: '\\text{增长率}', cls: '', min: 0.5, max: 4, step: 0.001, value: 1.743, unit: '%/年', dec: 2, aria: '年增长率' });
  const Y = ctl(d.controls, { label: '\\text{年份}', cls: '', min: 1990, max: 2035, step: 1, value: 2035, unit: '', dec: 0, aria: '年份' });
  const E0 = 373, Y0 = 1990, E1 = 812, Y1 = 2035;
  const E = (yr, r) => E0 * Math.pow(1 + r / 100, yr - Y0);
  function draw() {
    const { ctx } = begin(d.c);
    const r = R.v, yr = Y.v, now = E(yr, r);
    /* fixed axes: the fastest growth the slider allows, 4% a year, carries 373 EJ to
       373 × 1.04⁴⁵ = 2179 EJ by 2035, so the graph is always 1990 to 2035 by 0 to 2400 EJ,
       ticked every 400 EJ, and never rescales as the rate is dragged */
    const ER = 2400, box = { l: 190, r: 1320, t: 110, b: 400 };
    const S = axes(ctx, box, [Y0, Y1], [0, ER], { xl: '年份', yl: 'E (EJ)', yc: C('energy'), nx: 9, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, (t) => E(t, r), Y0, Y1, S.X, S.Y, C('energy'), 5, 120);
    /* the two figures the book's chart gives */
    dot(ctx, S.X(Y0), S.Y(E0), C('energy'), false, 11);
    text(ctx, '1990 年 373 EJ', S.X(Y0) + 18, S.Y(E0) - 28, PAL.muted, { size: 17 });
    dot(ctx, S.X(Y1), S.Y(E1), C('energy'), false, 11);
    text(ctx, '预计 2035 年 812 EJ', S.X(Y1) - 18, S.Y(E1) - 28, PAL.muted, { size: 17, align: 'right' });
    /* where the curve stands in the year set */
    line(ctx, S.X(yr), S.Y(now), S.X(yr), box.b, PAL.muted, 2, [4, 8]);
    line(ctx, box.l, S.Y(now), S.X(yr), S.Y(now), PAL.muted, 2, [4, 8]);
    pinned(ctx, box, S.X, S.Y, yr, now, C('energy'), fmt(now, 0) + ' EJ');
    text(ctx, fmt(now, 0) + ' EJ', S.X(yr) - 16, S.Y(now) + 4, C('energy'), { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    topline(ctx, '按每年 ' + fmt(r, 2) + '% 的增长率，世界能源使用量在 ' + fmt(yr, 0) + ' 年达到 ' + fmt(now, 0) + ' EJ，是 1990 年 373 EJ 的 ' + fmt(now / E0, 1) + ' 倍。');
    readout(d.readout, `\\kE = (373\\ \\text{EJ})(1 + ${fmt(r / 100, 4)})^{\\,${fmt(yr, 0)} - 1990} = ${fmt(now, 0)}\\ \\text{EJ}`,
      '需求在 1990 年之前的 50 年里增长到了原来的三倍，相当于每年增长约 2.2%。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: what each country draws its energy from. Every row of Table 7.6
   is one bar, the renewable sources first so that one line cuts the
   countries that clear a share from those that do not. A still picture:
   a table of one year has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-country', 620);
  const TH = ctl(d.controls, { label: '\\text{可再生能源占比}', cls: '', min: 0, max: 50, step: 1, value: 15, unit: '%', dec: 0, aria: '可再生能源占比阈值' });
  /* Table 7.6: the total the book prints, then hydro, other renewables, oil, natural gas, coal, nuclear */
  const ROWS = [
    ['澳大利亚', 5.6, 0.1, 0.5, 1.8, 1.5, 1.7, 0],
    ['巴西', 12, 3.5, 2, 4.6, 1.2, 0.6, 0.1],
    ['中国', 145.5, 11.7, 7.8, 28.5, 11.9, 82.3, 3.3],
    ['埃及', 3.7, 0.1, 0.1, 1.3, 2.1, 0, 0],
    ['德国', 12.1, 0.2, 2.2, 4.2, 3.1, 1.9, 0.6],
    ['印度', 31.99, 1.5, 1.4, 9, 2.2, 17.5, 0.4],
    ['印度尼西亚', 8.1, 0.2, 0.4, 2.8, 1.5, 3.3, 0],
    ['日本', 17, 0.7, 1.1, 6.5, 3.8, 4.6, 0.4],
    ['英国', 6.9, 0.1, 1.2, 2.4, 2.6, 0.2, 0.5],
    ['俄罗斯', 28.3, 1.9, 0.5, 6.4, 14.8, 3.2, 1.9],
    ['美国', 87.8, 2.6, 6.2, 32.5, 30, 9.2, 7.4],
    ['全世界', 557.1, 38.2, 31.7, 174.2, 137.6, 151.4, 24],
  ];
  /* six sources with no type and no element of their own, told apart by the categorical palette
     rather than by six strengths of one hue, which no reader could match to a key (rule 7) */
  const NAMES = ['水电', '其他可再生能源', '石油', '天然气', '煤', '核能'];
  const HUE = (i) => F.cat(i);
  const DATA = ROWS.map(([name, total, ...cols]) => {
    const sum = cols.reduce((a, b) => a + b, 0);
    return { name, total, cols, sum, ren: ((cols[0] + cols[1]) / sum) * 100 };
  }).sort((a, b) => b.ren - a.ren);
  const L = 270, RX = 1150, X = (p) => L + ((RX - L) * p) / 100;
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v;
    let kx = L;
    NAMES.forEach((n, i) => { kx = key(ctx, kx, 100, 1, n, 17, HUE(i)); });
    DATA.forEach((row, i) => {
      const y = 150 + i * 36, on = row.ren >= th, world = row.name === '全世界';
      text(ctx, row.name, 250, y, on ? PAL.ink : PAL.muted, { size: 19, weight: world ? 600 : 400, align: 'right' });
      let p = 0;
      row.cols.forEach((v, j) => {
        const w = (v / row.sum) * 100;
        seg(ctx, X(p), X(p + w), y, 22, on ? 1 : 0.4, HUE(j));
        p += w;
      });
      line(ctx, X((row.cols[0] + row.cols[1]) / row.sum * 100), y - 13, X((row.cols[0] + row.cols[1]) / row.sum * 100), y + 13, PAL.panel, 3);
      text(ctx, fmt(row.ren, 1) + '%', 1170, y, on ? PAL.ink : PAL.muted, { size: 18, weight: on ? 600 : 400 });
      text(ctx, fmt(row.total, 1) + ' EJ', 1270, y, on ? C('energy') : alpha(C('energy'), 0.55), { size: 18 });
    });
    line(ctx, X(th), 128, X(th), 566, PAL.ink, 3, [10, 10]);
    text(ctx, fmt(th, 0) + '%', X(th), 596, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const above = DATA.filter((r) => r.name !== '全世界' && r.ren >= th).length;
    const best = DATA.find((r) => r.name !== '全世界');
    topline(ctx, '在列出的 11 个国家中，有 ' + above + ' 个国家的能源有 ' + fmt(th, 0) + '% 或更多来自可再生能源。');
    readout(d.readout, `\\frac{38.2\\ \\text{EJ} + 31.7\\ \\text{EJ}}{557.1\\ \\text{EJ}} = 12.5\\%`,
      best.name + '在列出的国家中居首，为 ' + fmt(best.ren, 1) + '%。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: energy conserved and energy degraded. A hundred joules arrive,
   and each row below is what is left of them after one more
   transformation: the part that can still do work shrinks while the
   right-hand edge of every row stays where it is. A still picture: the
   transformations are counted, not clocked.
===================================================================== */
(function () {
  const d = sim('sim-degrade', 480);
  const EF = ctl(d.controls, { label: '\\text{Eff}', cls: '', min: 10, max: 90, step: 1, value: 35, unit: '%', dec: 0, aria: '每次转化的效率' });
  const N = F.choice(d.controls, { label: '\\text{转化次数}', options: [1, 2, 3, 4, 5].map((k) => ({ value: String(k), label: String(k) })), value: '3', aria: '转化的次数' });
  const L = 420, RX = 1280, X = (j) => L + ((RX - L) * j) / 100;
  function draw() {
    const { ctx } = begin(d.c);
    const f = EF.v / 100, n = Number(N.value), nb = N.mix(Number);   /* nb runs between the old count and the new while rows arrive or leave */
    text(ctx, '能够做功', L + 8, 108, PAL.ink, { size: 18, weight: 600 });
    text(ctx, '退降为废热', RX - 8, 108, PAL.muted, { size: 18, weight: 600, align: 'right' });
    for (let k = 0; k <= Math.max(n, Math.ceil(nb)); k++) {
      const a = Math.max(0, Math.min(1, nb - k + 1));
      if (a <= 0) continue;
      const y = 145 + k * 52 - (1 - a) * 12, use = 100 * Math.pow(f, k), lost = 100 - use;
      ctx.save(); ctx.globalAlpha = a;
      text(ctx, k === 0 ? '刚到达时' : '经过 ' + k + ' 次转化后', 400, y, PAL.ink, { size: 19, align: 'right' });
      seg(ctx, X(0), X(use), y, 30, 0.9);
      seg(ctx, X(use), X(100), y, 30, 0.2);
      if (X(use) - X(0) > 200) text(ctx, fmt(use, 1) + ' J', (X(0) + X(use)) / 2, y, PAL.bg, { size: 18, weight: 600, align: 'center' });
      else text(ctx, fmt(use, 1) + ' J', X(use) + 10, y, C('energy'), { size: 18, weight: 600 });
      if (lost > 12) text(ctx, fmt(lost, 1) + ' J', RX - 12, y, PAL.ink, { size: 18, align: 'right' });
      ctx.restore();
    }
    const bot = 145 + nb * 52 + 22;
    line(ctx, X(100), 122, X(100), bot, PAL.ink, 3);
    text(ctx, '总量仍为 100 J', X(100), bot + 24, PAL.ink, { size: 18, align: 'right' });
    const use = 100 * Math.pow(f, n);
    topline(ctx, '每次转化的效率为 ' + fmt(EF.v, 0) + '% 时，经过 ' + n + ' 次转化，原来 100 J 中仍有 ' + fmt(use, 1) + ' J 能够做功。');
    readout(d.readout, `\\kE_{\\text{有用}} = (100\\ \\text{J})\\,\\text{Eff}^{\\,${n}} = (100\\ \\text{J})(${fmt(f, 2)})^{${n}} = ${fmt(use, 1)}\\ \\text{J}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
