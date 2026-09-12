/* Figures for section 7.9 World Energy Use. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, dot, text, headline, scale, axes, nice, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* a filled bar with a thin separator at its right edge, in the energy hue at the alpha given */
function seg(ctx, x1, x2, y, h, a) {
  const w = Math.max(x2 - x1, 0); if (w <= 0) return;
  ctx.save(); ctx.fillStyle = alpha(C('energy'), a); ctx.fillRect(x1, y - h / 2, Math.max(w, 2), h); ctx.restore();
}
/* a swatch and its name, for a key; returns the x the next entry may start at */
function key(ctx, x, y, a, label, size = 17) {
  ctx.save(); ctx.fillStyle = alpha(C('energy'), a); ctx.fillRect(x, y - 8, 26, 16);
  ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(x, y - 8, 26, 16); ctx.restore();
  text(ctx, label, x + 34, y, PAL.ink, { size });
  ctx.save(); ctx.font = `400 ${size}px ${F.FONT}`; const w = ctx.measureText(label).width; ctx.restore();
  return x + 34 + w + 30;
}

/* =====================================================================
   FIGURE 7.26: the world's energy by source. The book's seven shares for
   2006 stand one to a row, the four sources that can be used up first
   and the three renewable ones after them, and a second bar in each row
   holds the same source once the renewable share is raised to the
   target. A still picture: the mix of a year has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-mix', 580);
  const T = ctl(d.controls, { label: '\\text{renewable target}', cls: '', min: 7.2, max: 80, step: 0.1, value: 7.2, unit: '%', dec: 1, aria: 'renewable target share' });
  /* the shares the book's pie gives, in the book's own words and numbers */
  const SRC = [
    { name: 'petroleum', pct: 35.43, ren: false, a: 0.95 },
    { name: 'coal', pct: 28.15, ren: false, a: 0.74 },
    { name: 'dry natural gas', pct: 23.46, ren: false, a: 0.53 },
    { name: 'nuclear electricity', pct: 5.79, ren: false, a: 0.32 },
    { name: 'hydroelectricity', pct: 6.27, ren: true, a: 0.95 },
    { name: 'geothermal, wind, solar and biomass electricity', pct: 0.86, ren: true, a: 0.66 },
    { name: 'geothermal, biomass and solar, not electricity', pct: 0.05, ren: true, a: 0.38 },
  ];
  const R0 = SRC.filter((s) => s.ren).reduce((t, s) => t + s.pct, 0);        /* 7.18 */
  const N0 = SRC.filter((s) => !s.ren).reduce((t, s) => t + s.pct, 0);       /* 92.83 */
  const L = 520, RX = 1280, X = (p) => L + ((RX - L) * p) / 100;
  const ROW = [140, 190, 240, 290, 385, 435, 485];
  function draw() {
    const { ctx } = begin(d.c);
    const t = T.v, held = t <= R0 / (R0 + N0) * 100 + 0.05;
    const kr = t / R0, kn = (100 - t) / N0;
    /* the key, so the two bars of a row can be told apart */
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.9); ctx.fillRect(1046, 84, 26, 16); ctx.restore();
    text(ctx, 'in 2006, as the book gives it', 1080, 92, PAL.ink, { size: 17 });
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.32); ctx.fillRect(1046, 110, 26, 16);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(1046, 110, 26, 16); ctx.restore();
    text(ctx, 'with renewables at ' + fmt(t, 1) + '%', 1080, 118, PAL.ink, { size: 17 });
    /* the two groups, each with its heading and its rows */
    text(ctx, 'sources that can be used up, ' + fmt(N0, 1) + '% of the world’s energy in 2006', 30, 95, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'renewable sources, ' + fmt(R0, 1) + '% in 2006 and ' + fmt(t, 1) + '% at the target', 30, 340, PAL.ink, { size: 20, weight: 600 });
    SRC.forEach((s, i) => {
      const y = ROW[i], now = s.pct, then = s.pct * (s.ren ? kr : kn);
      text(ctx, s.name, 500, y, PAL.ink, { size: 18, align: 'right' });
      seg(ctx, X(0), X(now), y - 10, 14, s.a);
      text(ctx, fmt(now, 2) + '%', X(now) + 12, y - 10, PAL.ink, { size: 17 });
      seg(ctx, X(0), X(then), y + 10, 14, s.a * 0.38);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(X(0), y + 3, Math.max(X(then) - X(0), 2), 14); ctx.restore();
      text(ctx, fmt(then, 2) + '%', X(then) + 12, y + 10, held ? PAL.muted : PAL.ink, { size: 17 });
    });
    line(ctx, X(0), 120, X(0), 505, PAL.muted, 2);
    scale(ctx, X, 0, 100, 20, 520, '%', 1);
    headline(ctx, held
      ? 'in 2006 renewable sources supplied ' + fmt(R0, 1) + '% of the world’s energy, and oil, coal and natural gas supplied ' + fmt(SRC[0].pct + SRC[1].pct + SRC[2].pct, 1) + '% of it'
      : 'moving from ' + fmt(R0, 1) + '% renewable to ' + fmt(t, 1) + '% takes ' + fmt(t - R0, 1) + ' percentage points out of oil, coal, gas and nuclear power');
    readout(d.readout, held
      ? `\\text{renewable} = 6.27\\% + 0.86\\% + 0.05\\% = ${fmt(R0, 2)}\\%`
      : `\\text{renewable} : ${fmt(R0, 2)}\\% \\longrightarrow ${fmt(t, 1)}\\%, \\quad \\text{a shift of } ${fmt(t - R0, 2)} \\text{ percentage points}`,
      held
        ? 'Hydroelectricity is most of what the world draws from renewable sources, and everything else renewable together comes to less than one percent of the total.'
        : 'The four sources that can be used up fall from ' + fmt(N0, 1) + '% to ' + fmt(100 - t, 1) + '% of the total between them, and oil alone falls from ' + fmt(SRC[0].pct, 1) + '% to ' + fmt(SRC[0].pct * kn, 1) + '%.');
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
  const R = ctl(d.controls, { label: '\\text{growth rate}', cls: '', min: 0.5, max: 4, step: 0.001, value: 1.743, unit: '%/yr', dec: 2, aria: 'annual growth rate' });
  const Y = ctl(d.controls, { label: '\\text{year}', cls: '', min: 1990, max: 2035, step: 1, value: 2020, unit: '', dec: 0, aria: 'year' });
  const E0 = 373, Y0 = 1990, E1 = 812, Y1 = 2035;
  const E = (yr, r) => E0 * Math.pow(1 + r / 100, yr - Y0);
  function draw() {
    const { ctx } = begin(d.c);
    const r = R.v, yr = Y.v, now = E(yr, r), top = nice(0, Math.max(900, E(Y1, r)), 5);
    const box = { l: 190, r: 1320, t: 110, b: 400 };
    const S = axes(ctx, box, [Y0, Y1], [0, top.hi], { xl: 'year', yl: 'E (EJ)', yc: C('energy'), nx: 9, ny: top.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, (t) => E(t, r), Y0, Y1, S.X, S.Y, C('energy'), 5, 120);
    /* the two figures the book's chart gives */
    dot(ctx, S.X(Y0), S.Y(E0), C('energy'), false, 11);
    text(ctx, '373 EJ in 1990', S.X(Y0) + 18, S.Y(E0) - 28, PAL.muted, { size: 17 });
    dot(ctx, S.X(Y1), S.Y(E1), C('energy'), false, 11);
    text(ctx, '812 EJ projected for 2035', S.X(Y1) - 18, S.Y(E1) - 28, PAL.muted, { size: 17, align: 'right' });
    /* where the curve stands in the year set */
    line(ctx, S.X(yr), S.Y(now), S.X(yr), box.b, PAL.muted, 2, [4, 8]);
    line(ctx, box.l, S.Y(now), S.X(yr), S.Y(now), PAL.muted, 2, [4, 8]);
    dot(ctx, S.X(yr), S.Y(now), C('energy'), true, 10);
    text(ctx, fmt(now, 0) + ' EJ', S.X(yr) - 16, S.Y(now) + 4, C('energy'), { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    headline(ctx, 'at ' + fmt(r, 2) + '% a year the world’s energy use reaches ' + fmt(now, 0) + ' EJ in ' + fmt(yr, 0) + ', ' + fmt(now / E0, 1) + ' times the 373 EJ of 1990');
    readout(d.readout, `\\kE = (373\\ \\text{EJ})(1 + ${fmt(r / 100, 4)})^{\\,${fmt(yr, 0)} - 1990} = ${fmt(now, 0)}\\ \\text{EJ}`,
      'The book gives 373 EJ for 1990 and projects 812 EJ for 2035, and steady growth at 1.74% a year joins the two. Demand tripled in the 50 years before that, which is growth at about 2.2% a year.');
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
  const TH = ctl(d.controls, { label: '\\text{renewable share}', cls: '', min: 0, max: 50, step: 1, value: 15, unit: '%', dec: 0, aria: 'renewable share threshold' });
  /* Table 7.6: the total the book prints, then hydro, other renewables, oil, natural gas, coal, nuclear */
  const ROWS = [
    ['Australia', 5.6, 0.1, 0.5, 1.8, 1.5, 1.7, 0],
    ['Brazil', 12, 3.5, 2, 4.6, 1.2, 0.6, 0.1],
    ['China', 145.5, 11.7, 7.8, 28.5, 11.9, 82.3, 3.3],
    ['Egypt', 3.7, 0.1, 0.1, 1.3, 2.1, 0, 0],
    ['Germany', 12.1, 0.2, 2.2, 4.2, 3.1, 1.9, 0.6],
    ['India', 31.99, 1.5, 1.4, 9, 2.2, 17.5, 0.4],
    ['Indonesia', 8.1, 0.2, 0.4, 2.8, 1.5, 3.3, 0],
    ['Japan', 17, 0.7, 1.1, 6.5, 3.8, 4.6, 0.4],
    ['United Kingdom', 6.9, 0.1, 1.2, 2.4, 2.6, 0.2, 0.5],
    ['Russia', 28.3, 1.9, 0.5, 6.4, 14.8, 3.2, 1.9],
    ['U.S.', 87.8, 2.6, 6.2, 32.5, 30, 9.2, 7.4],
    ['World', 557.1, 38.2, 31.7, 174.2, 137.6, 151.4, 24],
  ];
  const ALPHA = [0.95, 0.72, 0.56, 0.43, 0.31, 0.20];
  const NAMES = ['hydro', 'other renewables', 'oil', 'natural gas', 'coal', 'nuclear'];
  const DATA = ROWS.map(([name, total, ...cols]) => {
    const sum = cols.reduce((a, b) => a + b, 0);
    return { name, total, cols, sum, ren: ((cols[0] + cols[1]) / sum) * 100 };
  }).sort((a, b) => b.ren - a.ren);
  const L = 270, RX = 1150, X = (p) => L + ((RX - L) * p) / 100;
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v;
    let kx = L;
    NAMES.forEach((n, i) => { kx = key(ctx, kx, 100, ALPHA[i], n); });
    DATA.forEach((row, i) => {
      const y = 150 + i * 36, on = row.ren >= th, world = row.name === 'World';
      text(ctx, row.name, 250, y, on ? PAL.ink : PAL.muted, { size: 19, weight: world ? 600 : 400, align: 'right' });
      let p = 0;
      row.cols.forEach((v, j) => {
        const w = (v / row.sum) * 100;
        seg(ctx, X(p), X(p + w), y, 22, ALPHA[j] * (on ? 1 : 0.5));
        p += w;
      });
      line(ctx, X((row.cols[0] + row.cols[1]) / row.sum * 100), y - 13, X((row.cols[0] + row.cols[1]) / row.sum * 100), y + 13, PAL.panel, 3);
      text(ctx, fmt(row.ren, 1) + '%', 1170, y, on ? PAL.ink : PAL.muted, { size: 18, weight: on ? 600 : 400 });
      text(ctx, fmt(row.total, 1) + ' EJ', 1270, y, PAL.muted, { size: 18 });
    });
    line(ctx, X(th), 128, X(th), 566, PAL.ink, 3, [10, 10]);
    text(ctx, fmt(th, 0) + '%', X(th), 596, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const above = DATA.filter((r) => r.name !== 'World' && r.ren >= th).length;
    const best = DATA.find((r) => r.name !== 'World');
    headline(ctx, above + ' of the 11 countries listed draw ' + fmt(th, 0) + '% or more of their energy from renewable sources');
    readout(d.readout, `\\frac{38.2\\ \\text{EJ} + 31.7\\ \\text{EJ}}{557.1\\ \\text{EJ}} = 12.5\\%`,
      'Across the world as a whole, hydroelectric power and the other renewable sources together came to 12.5% of the 557.1 EJ used in 2020, and ' + best.name + ' leads the countries listed with ' + fmt(best.ren, 1) + '%. Each bar is the share of that country’s own energy, and the total beside it is what the country uses in a year.');
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
  const EF = ctl(d.controls, { label: '\\text{Eff}', cls: '', min: 10, max: 90, step: 1, value: 35, unit: '%', dec: 0, aria: 'efficiency of each transformation' });
  const N = ctl(d.controls, { label: '\\text{transformations}', cls: '', min: 1, max: 5, step: 1, value: 3, unit: '', dec: 0, aria: 'number of transformations' });
  const L = 420, RX = 1280, X = (j) => L + ((RX - L) * j) / 100;
  function draw() {
    const { ctx } = begin(d.c);
    const f = EF.v / 100, n = N.v;
    text(ctx, 'able to do work', L + 8, 108, PAL.ink, { size: 18, weight: 600 });
    text(ctx, 'degraded to waste heat', RX - 8, 108, PAL.muted, { size: 18, weight: 600, align: 'right' });
    for (let k = 0; k <= n; k++) {
      const y = 145 + k * 52, use = 100 * Math.pow(f, k), lost = 100 - use;
      text(ctx, k === 0 ? 'as it arrives' : k === 1 ? 'after 1 transformation' : 'after ' + k + ' transformations', 400, y, PAL.ink, { size: 19, align: 'right' });
      seg(ctx, X(0), X(use), y, 30, 0.9);
      seg(ctx, X(use), X(100), y, 30, 0.2);
      if (X(use) - X(0) > 200) text(ctx, fmt(use, 1) + ' J', (X(0) + X(use)) / 2, y, PAL.bg, { size: 18, weight: 600, align: 'center' });
      else text(ctx, fmt(use, 1) + ' J', X(use) + 10, y - 24, C('energy'), { size: 18, weight: 600 });
      if (lost > 12) text(ctx, fmt(lost, 1) + ' J', RX - 12, y, PAL.ink, { size: 18, align: 'right' });
    }
    const bot = 145 + n * 52 + 22;
    line(ctx, X(100), 122, X(100), bot, PAL.ink, 3);
    text(ctx, 'the total is still 100 J', X(100), bot + 24, PAL.ink, { size: 18, align: 'right' });
    const use = 100 * Math.pow(f, n);
    headline(ctx, 'at ' + fmt(EF.v, 0) + '% each, ' + n + (n === 1 ? ' transformation leaves ' : ' transformations leave ') + fmt(use, 1) + ' J of the original 100 J able to do work');
    readout(d.readout, `\\kE_{\\text{useful}} = (100\\ \\text{J})\\,\\text{Eff}^{\\,${n}} = (100\\ \\text{J})(${fmt(f, 2)})^{${n}} = ${fmt(use, 1)}\\ \\text{J}`,
      'The ' + fmt(100 - use, 1) + ' J that is gone from the left is still there, as waste heat in the surroundings, so the total has not changed. What has been lost is the ability of that energy to do work, and that is why an energy resource can run out even though energy is conserved.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
