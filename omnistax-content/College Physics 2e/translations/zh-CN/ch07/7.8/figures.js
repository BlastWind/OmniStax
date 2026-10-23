/* Figures for section 7.8 Work, Energy, and Power in Humans. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the two figures ---------- */
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* a number of kilojoules as the book writes one, to the nearest kilojoule with thousands marked */
const kj = (v) => commas(Math.round(v));
/* the same number inside math, where KaTeX wants the comma in a group of its own */
const tkj = (v) => kj(v).replace(/,/g, '{,}');
/* the time of day as a clock reads it */
function clock(h) {
  const tot = Math.min(1439, Math.max(0, Math.round(h * 60))), hh = Math.floor(tot / 60), mm = tot % 60;
  return (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
}
/* a filled and outlined rectangle, which is how every share of an energy is drawn here */
function bar(ctx, x1, x2, y, h, fill, stroke, dash) {
  ctx.save();
  if (fill) { ctx.fillStyle = fill; ctx.fillRect(x1, y, x2 - x1, h); }
  ctx.strokeStyle = stroke; ctx.lineWidth = 3; if (dash) ctx.setLineDash(dash);
  ctx.strokeRect(x1, y, x2 - x1, h); ctx.restore();
}
/* the width a label takes at a given size, close enough to keep it inside the canvas */
const width = (s, size) => s.length * size * 0.52;

/* =====================================================================
   FIGURE 7.23: where the food energy goes. The energy eaten in a day is
   the upper bar, and the lower bar divides the energy the body spends
   into the useful work it does on the outside world and the thermal
   energy it gives off, with whatever is eaten beyond that stored as fat.
   The figure answers its sliders and has no time in it, so it is a still
   picture and takes no transport.
===================================================================== */
(function () {
  const d = sim('sim-food-energy', 560);
  const Ee = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 6000, max: 18000, step: 100, value: 13000, unit: 'kJ', dec: 0, aria: '今天摄入的食物能量' });
  const Ei = ctl(d.controls, { label: '\\kEin', cls: 'energy', min: 6000, max: 18000, step: 100, value: 12000, unit: 'kJ', dec: 0, aria: '人体今天消耗的食物能量' });
  const ef = ctl(d.controls, { label: '\\text{Eff}', cls: '', min: 2, max: 25, step: 1, value: 10, unit: '%', dec: 0, aria: '人体做有用功的效率' });
  /* eating exactly what the body spends stores no fat and draws on none */
  Ee.mark([{ at: () => Ei.v, label: '平衡' }]); Ei.mark([{ at: () => Ee.v, label: '平衡' }]);
  const XL = 150, XR = 1330, MAX = 18000, K = (XR - XL) / MAX;
  const TOP = 132, TH = 56, BOT = 306, ROWA = 404, ROWB = 466;
  /* a label under one share of the lower bar, with a leader up to the share it names */
  function share(ctx, s, cx, y, color) {
    const w = width(s, 20), x = Math.max(XL + w / 2, Math.min(XR - w / 2, cx));
    line(ctx, cx, BOT + TH + 6, x, y - 20, PAL.rule, 2, [4, 8]);
    text(ctx, s, x, y, color, { size: 20, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const E = Ee.v, Ein = Ei.v, eff = ef.v / 100;
    const Wout = eff * Ein, therm = Ein - Wout, fat = E - Ein, grams = Math.abs(fat) / 39;
    const OEf = E - Wout, ce = C('energy');
    /* the food energy eaten today */
    bar(ctx, XL, XL + E * K, TOP, TH, alpha(ce, 0.4), ce);
    text(ctx, '你今天摄入的食物能量', XL + 16, TOP + TH / 2, PAL.ink, { size: 20, bg: PAL.panel });
    text(ctx, 'E = ' + kj(E) + ' kJ', XL + E * K - 16, TOP + TH / 2, ce, { size: 22, weight: 600, align: 'right' });
    /* where it goes: the useful work, the thermal energy, and the fat stored or drawn upon */
    const xw = XL + Wout * K, xt = XL + Ein * K, xe = XL + E * K;
    text(ctx, '去向', XL, BOT - 28, PAL.muted, { size: 20 });
    bar(ctx, XL, xw, BOT, TH, alpha(ce, 0.85), ce);
    bar(ctx, xw, xt, BOT, TH, alpha(ce, 0.28), ce);
    if (Math.abs(fat) > 40) bar(ctx, Math.min(xt, xe), Math.max(xt, xe), BOT, TH, fat > 0 ? alpha(ce, 0.1) : null, ce, fat > 0 ? null : [10, 10]);
    /* the three arrows that carry the food energy down to its destinations */
    [[(XL + xw) / 2, 1], [(xw + xt) / 2, 1], [(xt + xe) / 2, Math.abs(fat) > 40 ? 1 : 0]].forEach(([cx, on]) => {
      if (on) arrow(ctx, cx, TOP + TH + 10, cx, BOT - 56, alpha(ce, 0.6), 4);
    });
    share(ctx, '有用功，' + kj(Wout) + ' kJ', (XL + xw) / 2, ROWA, ce);
    share(ctx, '热能，' + kj(therm) + ' kJ', (xw + xt) / 2, ROWB, ce);
    if (fat > 40) share(ctx, '储存为脂肪，' + kj(fat) + ' kJ，即 ' + fmt(grams, 0) + ' g', (xt + xe) / 2, ROWA, ce);
    else if (fat < -40) share(ctx, '取自脂肪，' + kj(-fat) + ' kJ，即 ' + fmt(grams, 0) + ' g', (xt + xe) / 2, ROWA, ce);
    /* the headline and the readout */
    topline(ctx, Math.abs(fat) <= 40
      ? '你摄入 ' + kj(E) + ' kJ，也消耗同样多，所以没有脂肪被储存，也没有脂肪被动用。'
      : fat > 0
        ? '你今天消耗 ' + kj(Ein) + ' kJ，其中 ' + kj(Wout) + ' kJ 成为有用功，而超出这些的 ' + kj(fat) + ' kJ 摄入量则储存为 ' + fmt(grams, 0) + ' g 脂肪。'
        : '你今天消耗 ' + kj(Ein) + ' kJ，却只摄入 ' + kj(E) + ' kJ，所以身体要补上缺少的 ' + kj(-fat) + ' kJ，需代谢约 ' + fmt(grams, 0) + ' g 脂肪。');
    readout(d.readout,
      `\\kOEi + \\kWnc = \\kOEf : \\quad (${tkj(E)}\\ \\text{kJ}) + (-${tkj(Wout)}\\ \\text{kJ}) = ${tkj(OEf)}\\ \\text{kJ}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a day's energy budget, built from the rates of Table 7.5. The day
   runs from midnight to midnight, the power steps between the rates for
   sleeping, for sitting in class or studying, for cycling and for
   sitting at rest, and the energy spent accumulates as the area under
   the power line. The energy accumulates as a clock runs, so the figure
   moves and takes the transport.
===================================================================== */
(function () {
  const d = sim('sim-day', 700);
  const sl = ctl(d.controls, { label: '\\kt_{\\text{睡眠}}', cls: 'time', min: 4, max: 12, step: 0.5, value: 8, unit: 'h', dec: 1, onInput: reset, aria: '睡眠小时数' });
  const cl = ctl(d.controls, { label: '\\kt_{\\text{上课}}', cls: 'time', min: 0, max: 8, step: 0.5, value: 6, unit: 'h', dec: 1, onInput: reset, aria: '上课或学习的小时数' });
  const cy = ctl(d.controls, { label: '\\kt_{\\text{骑车}}', cls: 'time', min: 0, max: 4, step: 0.5, value: 1, unit: 'h', dec: 1, onInput: reset, aria: '骑自行车的小时数' });
  const cyc = cycle(() => 24, 1.2);                  /* one day per loop, five real seconds long */
  function reset() { cyc.reset(); }
  const SL = 200, SR = 1330, ST = 100, SH = 52;      /* the strip of the day */
  const BOX = { l: 200, r: 1330, t: 252, b: 470 };   /* the power against the hour of the day */
  const PMAX = 450, BARY = 574, BARH = 46, EMAX = 16000, TYPICAL = 12000;
  const Xh = (h) => SL + (h / 24) * (SR - SL);
  const Yp = (p) => BOX.b - (p / PMAX) * (BOX.b - BOX.t);
  const Xe = (e) => SL + (e / EMAX) * (SR - SL);
  /* the day as the sliders lay it out: sleep, then class or study, then cycling, then whatever is left sitting at rest */
  function day() {
    const runs = [{ name: '睡眠', verb: '睡着', P: 83, h: sl.v }, { name: '上课或学习', verb: '上课或学习', P: 210, h: cl.v }, { name: '骑自行车', verb: '骑自行车', P: 400, h: cy.v }];
    const used = runs.reduce((s, r) => s + r.h, 0);
    runs.push({ name: '静坐', verb: '静坐', P: 120, h: Math.max(0, 24 - used) });
    let t = 0;
    return runs.filter((r) => r.h > 0.01).map((r) => { const b = { ...r, t0: t, t1: t + r.h, kJ: r.P * r.h * 3.6 }; t = b.t1; return b; });
  }
  /* the energy spent by the hour h, in kilojoules */
  const spentBy = (runs, h) => runs.reduce((s, r) => s + r.P * Math.max(0, Math.min(r.h, h - r.t0)) * 3.6, 0);
  const runAt = (runs, h) => runs.find((r) => h < r.t1) ?? runs[runs.length - 1];
  function draw() {
    const { ctx } = begin(d.c);
    const runs = day(), now = Math.min(23.999, cyc.now()), here = runAt(runs, now);
    const spent = spentBy(runs, now), total = spentBy(runs, 24), ce = C('energy'), cp = C('power');
    /* the strip: the twenty-four hours blocked out by activity, with the hours already lived filled in */
    runs.forEach((r) => {
      const x0 = Xh(r.t0), x1 = Xh(r.t1);
      ctx.save(); ctx.fillStyle = alpha(cp, 0.08 + 0.3 * (r.P / PMAX)); ctx.fillRect(x0, ST, x1 - x0, SH); ctx.restore();
      if (now > r.t0) { ctx.save(); ctx.fillStyle = alpha(ce, 0.22); ctx.fillRect(x0, ST, Math.min(x1, Xh(now)) - x0, SH); ctx.restore(); }
      line(ctx, x1, ST, x1, ST + SH, PAL.panel, 2);
      const label = r.name + '，' + r.P + ' W';
      if (x1 - x0 > width(label, 18) + 20) text(ctx, label, (x0 + x1) / 2, ST + SH / 2, PAL.ink, { size: 18, align: 'center' });
    });
    bar(ctx, SL, SR, ST, SH, null, PAL.muted);
    /* the clock marks the strip at its edges, clear of the activity names */
    line(ctx, Xh(now), ST - 12, Xh(now), ST + 6, PAL.ink, 3); line(ctx, Xh(now), ST + SH - 6, Xh(now), ST + SH + 12, PAL.ink, 3);
    text(ctx, clock(now), Math.max(SL + 40, Math.min(SR - 40, Xh(now))), ST + SH + 32, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* the graph: the power against the hour of the day, whose area up to now is the energy spent */
    const { X, Y } = F.axes(ctx, BOX, [0, 24], [0, PMAX], {
      xl: '一天中的钟点', xc: C('time'), yl: '功率（W）', yc: cp, nx: 6, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    runs.forEach((r, i) => {
      if (now > r.t0) { ctx.save(); ctx.fillStyle = alpha(ce, 0.22); ctx.fillRect(X(r.t0), Y(r.P), X(Math.min(r.t1, now)) - X(r.t0), Y(0) - Y(r.P)); ctx.restore(); }
      line(ctx, X(r.t0), Y(r.P), X(r.t1), Y(r.P), cp, 5);
      if (i) line(ctx, X(r.t0), Y(runs[i - 1].P), X(r.t0), Y(r.P), cp, 5);
    });
    line(ctx, X(now), BOX.t, X(now), BOX.b, PAL.ink, 2, [4, 8]);
    dot(ctx, X(now), Y(here.P), cp, true, 9);
    /* the bar: the day's running total against a typical day's food energy */
    text(ctx, '到目前已消耗的能量', SL, BARY - 24, PAL.muted, { size: 19 });
    bar(ctx, SL, SR, BARY, BARH, null, PAL.rule);
    bar(ctx, SL, Xe(Math.min(spent, EMAX)), BARY, BARH, alpha(ce, 0.5), ce);
    line(ctx, Xe(TYPICAL), BARY - 14, Xe(TYPICAL), BARY + BARH + 14, PAL.muted, 3, [10, 10]);
    text(ctx, '平均一天的食物能量，12,000 kJ', Xe(TYPICAL), BARY + BARH + 36, PAL.muted, { size: 18, align: 'center' });
    if (spent > 900) text(ctx, kj(spent) + ' kJ', Xe(Math.min(spent, EMAX)) - 14, BARY + BARH / 2, ce, { size: 22, weight: 600, align: 'right' });
    /* the headline and the readout */
    topline(ctx, '在 ' + clock(now) + '，你' + here.verb + '，功率为 ' + here.P + ' W，到目前这一天已消耗 ' + kj(spent) + ' kJ。');
    readout(d.readout, `\\kE = \\sum \\kP\\kt = ${tkj(total)}\\ \\text{kJ}\\ \\text{一天内}`,
      '这一天的消耗为：' + runs.map((r) => kj(r.kJ) + ' kJ（' + r.verb + '）').join('、').replace(/、([^、]*)$/, '，以及$1')
      + '，产生这么多能量约需 ' + kj(total / 20) + ' 升氧，因为人每吸入 1 升氧大约可得到 20 kJ。');
  }
  register(d.fig, { update: (dt) => cyc.step(dt, () => 24 / 5), draw });
})();
};
