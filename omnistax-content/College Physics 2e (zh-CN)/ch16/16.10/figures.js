/* Figures for section 16.10 Superposition and Interference. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.10'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, pinned, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }
const sgn = (v) => (v < 0 ? '−' : '+');
/* a legend entry: a stroke of the curve's own colour with its name beside it */
function legend(ctx, x, y, color, name, dash) {
  line(ctx, x, y, x + 46, y, color, 4, dash);
  text(ctx, name, x + 58, y, color, { size: 19, weight: 600 });
}

/* =====================================================================
   SIM 1: superposition. Two waves in the upper panel and their sum in
   the lower one. The phase of the second wave walks from pure
   constructive through pure destructive, and its wavelength reaches the
   dissimilar pair of Figure 16.35. Still: a snapshot of a sum has no
   clock, so there is no transport.
===================================================================== */
(function () {
  const d = sim('sim-superposition', 720);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, aria: '每列波的振幅' });
  const ph = ctl(d.controls, { label: '\\text{波 2 的相位}', cls: 'angle', min: 0, max: 360, step: 5, value: 0, unit: '°', dec: 0, aria: '第二列波的相位（单位：度）', detents: [90, 270], specials: [{ at: 0, label: '同相' }, { at: 180, label: '反相' }, { at: 360 }] });
  const L2 = ctl(d.controls, { label: '\\klamtwo', cls: 'position', min: 0.8, max: 4, step: 0.1, value: 4, unit: 'm', dec: 1, aria: '第二列波的波长', specials: [{ at: 4, label: '波长相等' }] });
  const L1 = 4;                                   /* the first wave's wavelength is fixed at 4.00 m */
  function draw() {
    const { ctx } = begin(d.c);
    /* Both ranges are fixed and never rescaled: 0 to 8 m is two wavelengths of the first wave,
       and ±2.0 m on the displacement axis is twice the largest amplitude the slider allows. */
    const XM = 8, YM = 2;
    const w1 = (x) => X.v * Math.cos(TAU * x / L1);
    const w2 = (x) => X.v * Math.cos(TAU * x / L2.v + (TAU * ph.v) / 360);
    const sum = (x) => w1(x) + w2(x);
    let peak = 0; for (let i = 0; i <= 1600; i++) peak = Math.max(peak, Math.abs(sum((XM * i) / 1600)));
    const boxA = { l: 200, r: 1300, t: 172, b: 352 }, boxB = { l: 200, r: 1300, t: 456, b: 640 };
    const A = axes(ctx, boxA, [0, XM], [-YM, YM], { xl: '', yl: '两列波 (m)', yc: PAL.ink, nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, w1, 0, XM, A.X, A.Y, F.ref('wave-1'), 4, 600);
    curve(ctx, w2, 0, XM, A.X, A.Y, F.ref('wave-2'), 4, 800);
    legend(ctx, 240, 124, F.ref('wave-1'), '波 1，波长 4.00 m');
    legend(ctx, 700, 124, F.ref('wave-2'), '波 2，波长 ' + fmt(L2.v, 2) + ' m，相位移动 ' + fmt(ph.v, 0) + '°');
    const B = axes(ctx, boxB, [0, XM], [-YM, YM], { xl: '沿波的距离 (m)', xc: C('position'), yl: '二者之和 (m)', yc: C('position'), nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, sum, 0, XM, B.X, B.Y, C('position'), 5, 1200);
    if (peak > 0.02) {
      line(ctx, boxB.l, B.Y(peak), boxB.r, B.Y(peak), alpha(C('position'), 0.45), 2, [10, 10]);
      line(ctx, boxB.l, B.Y(-peak), boxB.r, B.Y(-peak), alpha(C('position'), 0.45), 2, [10, 10]);
      text(ctx, '最大位移 ' + fmt(peak, 2) + ' m', boxB.r - 12, B.Y(peak) - 20, C('position'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    } else text(ctx, '和处处为零', (boxB.l + boxB.r) / 2, B.Y(0) - 26, C('position'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const same = Math.abs(L2.v - L1) < 0.05, inPhase = ph.v % 360 < 5 || ph.v % 360 > 355, anti = Math.abs((ph.v % 360) - 180) < 5;
    topline(ctx, same && inPhase ? '两列波恰好同相到达，所以波峰落在波峰上：和的振幅是单个波的两倍，为 ' + fmt(peak, 2) + ' m，波长不变'
      : same && anti ? '两列波恰好反相到达，波峰对波谷，它们完全抵消：和处处为零'
      : same ? '第二列波的相位移动了 ' + fmt(ph.v, 0) + '°，所以两列波有的部分相加、有的部分相减，和达到 ' + fmt(peak, 2) + ' m'
      : '两列波的波长不同，所以这两列波沿绳时而同步、时而失步，和在有些地方相长、在有些地方相消，最大达到 ' + fmt(peak, 2) + ' m');
    readout(d.readout, `\\kx = \\kxone + \\kxtwo,\\quad \\kX = ${fmt(X.v, 2)}\\ \\text{m},\\quad \\klam = ${fmt(L1, 2)}\\ \\text{m},\\quad \\klamtwo = ${fmt(L2.v, 2)}\\ \\text{m}`,
      '每个扰动都对应一个力，而力是相加的，所以沿同一直线的扰动就是简单相加。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM 2: the standing wave. Two identical waves run through each other
   in opposite directions and their sum stands in place. Moving: one
   full period is one loop, taken in real seconds from the period slider.
===================================================================== */
(function () {
  const d = sim('sim-standing-wave', 780);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, onInput: reset, aria: '每列波的振幅' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 1, max: 4, step: 0.25, value: 2, unit: 'm', dec: 2, onInput: reset, aria: '波长' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 1, max: 4, step: 0.25, value: 2, unit: 's', dec: 2, onInput: reset, aria: '周期' });
  const cy = cycle(() => T.v, 0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed ranges: 0 to 8 m along the cord and ±2.0 m of displacement, twice the largest
       amplitude the slider allows, so the sum at its fullest still fits the frame. */
    const XM = 8, YM = 2;
    const tau = REDUCED ? 0 : cy.now(), ph = tau / T.v;
    const w1 = (x) => X.v * Math.cos(TAU * (x / lam.v - ph));
    const w2 = (x) => X.v * Math.cos(TAU * (x / lam.v + ph));
    const sum = (x) => 2 * X.v * Math.cos(TAU * x / lam.v) * Math.cos(TAU * ph);
    const env = 2 * X.v * Math.abs(Math.cos(TAU * ph));
    const boxA = { l: 200, r: 1300, t: 176, b: 356 }, boxB = { l: 200, r: 1300, t: 456, b: 636 };
    const A = axes(ctx, boxA, [0, XM], [-YM, YM], { xl: '', yl: '两列行波 (m)', yc: PAL.ink, nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, w1, 0, XM, A.X, A.Y, F.ref('wave-right'), 4, 600);
    curve(ctx, w2, 0, XM, A.X, A.Y, F.ref('wave-left'), 4, 600);
    arrow(ctx, A.X(0.6), boxA.t - 58, A.X(1.8), boxA.t - 58, F.ref('wave-right'), 4);
    text(ctx, '波 1，向右传播', A.X(2.0), boxA.t - 58, F.ref('wave-right'), { size: 19, weight: 600 });
    arrow(ctx, A.X(6.6), boxA.t - 58, A.X(5.4), boxA.t - 58, F.ref('wave-left'), 4);
    text(ctx, '波 2，向左传播', A.X(5.2), boxA.t - 58, F.ref('wave-left'), { size: 19, weight: 600, align: 'right' });
    const B = axes(ctx, boxB, [0, XM], [-YM, YM], { xl: '沿绳的距离 (m)', xc: C('position'), yl: '二者之和 (m)', yc: C('position'), nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, (x) => 2 * X.v * Math.cos(TAU * x / lam.v), 0, XM, B.X, B.Y, alpha(C('position'), 0.35), 2, 600);
    curve(ctx, (x) => -2 * X.v * Math.cos(TAU * x / lam.v), 0, XM, B.X, B.Y, alpha(C('position'), 0.35), 2, 600);
    curve(ctx, sum, 0, XM, B.X, B.Y, C('position'), 5, 800);
    /* the nodes sit a quarter of a wavelength in and then every half wavelength; the antinodes
       lie between them, and one of each is named, since they are all alike (rule 26.6) */
    let named = false;
    for (let x = lam.v / 4; x <= XM + 1e-9; x += lam.v / 2) {
      dot(ctx, B.X(x), B.Y(0), PAL.ink, false, 9);
      if (!named) { text(ctx, '波节', B.X(x), B.Y(0) + 34, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); named = true; }
    }
    let namedA = false;
    for (let x = 0; x <= XM + 1e-9; x += lam.v / 2) {
      line(ctx, B.X(x), B.Y(2 * X.v) - 10, B.X(x), B.Y(-2 * X.v) + 10, alpha(PAL.ink, 0.35), 2, [4, 8]);
      if (!namedA && x > 0) { text(ctx, '波腹', B.X(x), Math.max(B.Y(2 * X.v) - 26, boxB.t + 14), PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); namedA = true; }
    }
    hbracket(ctx, B.X(lam.v / 4), B.X(3 * lam.v / 4), boxB.b + 100, C('position'), '半个波长，' + fmt(lam.v / 2, 2) + ' m');
    const frac = ph < 0.02 || ph > 0.98 ? '0' : Math.abs(ph - 0.25) < 0.02 ? 'T/4' : Math.abs(ph - 0.5) < 0.02 ? 'T/2' : Math.abs(ph - 0.75) < 0.02 ? '3T/4' : fmt(tau, 2) + ' s';
    topline(ctx, env < 0.06 * X.v ? '在 t = ' + frac + ' 时刻，两列波恰好反相，整根绳暂时是平的，尽管两列波都没有停下'
      : env > 1.94 * X.v ? '在 t = ' + frac + ' 时刻，两列波恰好同相，每个波腹都达到最大值 ' + fmt(env, 2) + ' m，而波节完全没有移动'
      : '在 t = ' + frac + ' 时刻，波腹达到 ' + fmt(env, 2) + ' m，而波节留在原处：和在原地增大又减小，而不是向前传播');
    readout(d.readout, `\\kx = \\kxone + \\kxtwo = 2\\kX\\cos\\frac{2\\pi\\kx}{\\klam}\\cos\\frac{2\\pi\\kt}{\\kT} = ${fmt(env, 2)}\\ \\text{m，在波腹处}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 3: the harmonics of a string fixed at both ends. One string, three
   harmonics behind a choice. Moving, but drawn slowly: the real
   frequencies are hundreds of hertz, so the picture oscillates once
   every four seconds and the readout states the true number (rule 28.4).
===================================================================== */
(function () {
  const d = sim('sim-string-harmonics', 520);
  const nPick = choice(d.controls, { label: '\\text{谐波}', value: '1', aria: '弦上载有哪个谐波', options: [{ value: '1', label: '基频' }, { value: '2', label: '第一泛音' }, { value: '3', label: '第二泛音' }], onInput: reset });
  const L = ctl(d.controls, { label: '\\kLlen', cls: 'position', min: 0.5, max: 2, step: 0.05, value: 1, unit: 'm', dec: 2, onInput: reset, aria: '弦的长度' });
  const vw = ctl(d.controls, { label: '\\kvw', cls: 'velocity', min: 50, max: 500, step: 10, value: 200, unit: 'm/s', dec: 0, onInput: reset, aria: '弦上的传播速率' });
  const SHOW = 4;                                  /* the drawn cycle takes four real seconds at every setting */
  const cy = cycle(() => SHOW, 0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    /* The string is drawn at a fixed 520 logical units per metre, so the longest string the
       slider allows, 2.00 m, fits the frame; the fundamental's wavelength runs on past the far
       clamp and is drawn as far as the frame reaches. */
    const n = +nPick.value, SC = 520, xa = 180, y0 = 330, amp = 92, xEnd = 1330;
    const lamN = (2 * L.v) / n, fN = (n * vw.v) / (2 * L.v);
    const tau = REDUCED ? 0 : cy.now(), c = Math.cos(TAU * tau / SHOW);
    const xb = xa + L.v * SC;
    /* the loop shape bends from the last harmonic into the new one */
    const trace = (f, col, w) => nPick.curve(ctx, (v) => (s) => Math.sin((+v * Math.PI * s) / L.v), 0, L.v, (s) => xa + s * SC, (y) => y0 - amp * f * y, col, w, 400);
    /* the two clamps the string is fixed between */
    for (const px of [xa, xb]) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.fillRect(px - 9, y0 - 150, 18, 300); ctx.restore(); }
    /* the envelope the string sweeps, and the string itself */
    trace(1, alpha(C('position'), 0.35), 2);
    trace(-1, alpha(C('position'), 0.35), 2);
    trace(c, C('position'), 5);
    line(ctx, xa, y0, xb, y0, alpha(PAL.ink, 0.3), 2, [10, 10]);
    /* the fundamental's wavelength runs on past the far clamp, as the book draws it */
    if (nPick.a('1') > 0) {
      ctx.save(); ctx.globalAlpha = nPick.a('1');
      const sEnd = Math.min(2 * L.v, (xEnd - xa) / SC);
      curve(ctx, (s) => y0 - amp * Math.sin(Math.PI * s / L.v) * c, L.v, sEnd, (s) => xa + s * SC, (y) => y, alpha(C('position'), 0.3), 4, 400);
      line(ctx, xb, y0, xa + sEnd * SC, y0, alpha(PAL.ink, 0.2), 2, [10, 10]);
      ctx.restore();
    }
    /* nodes, hollow, and one antinode named: they are all alike, so one of each carries the word */
    for (const v of ['1', '2', '3']) {
      const a = nPick.a(v); if (a <= 0) continue;
      ctx.save(); ctx.globalAlpha = a;
      for (let k = 0; k <= +v; k++) dot(ctx, xa + ((k * L.v) / +v) * SC, y0, PAL.ink, false, 10);
      ctx.restore();
    }
    const nm = nPick.mix((v) => +v);
    text(ctx, '波节', xa + (L.v / nm) * SC, y0 + 38, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    const ax = xa + (L.v / (2 * nm)) * SC;
    line(ctx, ax, y0 - amp - 8, ax, y0 + amp + 8, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, '波腹', ax, y0 - amp - 30, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    hbracket(ctx, xa, xb, y0 - 176, C('position'), 'L = ' + fmt(L.v, 2) + ' m');
    hbracket(ctx, xa, Math.min(xa + (2 * L.v / nm) * SC, xEnd), y0 + 128, C('position'), '波长 ' + fmt(lamN, 2) + ' m');
    topline(ctx, n === 1 ? '基频有 1 个波腹：弦所能承载的最长波长是 $2\\kLlen$ = ' + fmt(lamN, 2) + ' m，频率是 ' + fmt(fN, 0) + ' Hz'
      : '' + (n === 2 ? '第一' : '第二') + '泛音有 ' + n + ' 个波腹：波长是 $2\\kLlen/' + n + '$ = ' + fmt(lamN, 2) + ' m，频率是基频的 ' + n + ' 倍，即 ' + fmt(fN, 0) + ' Hz');
    const mac = n === 1 ? '\\kfone' : n === 2 ? '\\kftwo' : '\\kfthree';
    readout(d.readout, `${mac} = \\frac{\\kvw}{\\klam} = \\frac{${n}(${fmt(vw.v, 0)}\\ \\text{m/s})}{2(${fmt(L.v, 2)}\\ \\text{m})} = ${fmt(fN, 0)}\\ \\text{Hz}`,
      '基频是 ' + fmt(vw.v / (2 * L.v), 0) + ' Hz，泛音是它的倍数；图像的播放速度是弦实际速度的 1/' + fmt(fN * SHOW, 0) + '。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 4: beats. Two waves of the same amplitude and slightly different
   frequency at one point in space, and their sum inside its envelope.
   Moving: a marker sweeps the two-second window in about five seconds,
   with a bar beside it for how loud that point is at each moment.
===================================================================== */
(function () {
  const d = sim('sim-beats', 800);   /* room under the graph for the beat bracket and its name */
  const f1 = ctl(d.controls, { label: '\\kfone', cls: 'frequency', min: 4, max: 10, step: 0.1, value: 5, unit: 'Hz', dec: 2, onInput: reset });
  const f2 = ctl(d.controls, { label: '\\kftwo', cls: 'frequency', min: 4, max: 10, step: 0.1, value: 7, unit: 'Hz', dec: 2, onInput: reset, specials: [{ at: () => f1.v, label: '相等' }] });
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.5, unit: 'm', dec: 2, onInput: reset, aria: '每列波的振幅' });
  const SPAN = 2;                                  /* the window is a fixed two seconds at every setting */
  const cy = cycle(() => SPAN, 0.8);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    /* Fixed ranges: 0 to 2.00 s of time and ±2.0 m of displacement, twice the largest amplitude
       the slider allows, which is the most the sum can ever reach. */
    const YM = 2;
    const fB = Math.abs(f1.v - f2.v), fav = (f1.v + f2.v) / 2;
    const w1 = (t) => X.v * Math.cos(TAU * f1.v * t), w2 = (t) => X.v * Math.cos(TAU * f2.v * t);
    const sum = (t) => w1(t) + w2(t), envOf = (t) => 2 * X.v * Math.abs(Math.cos(Math.PI * fB * t));
    const now = REDUCED ? SPAN : cy.now();
    const boxA = { l: 200, r: 1300, t: 132, b: 322 }, boxB = { l: 200, r: 1240, t: 452, b: 672 };
    const A = axes(ctx, boxA, [0, SPAN], [-YM, YM], { xl: '', yl: '两列波 (m)', yc: PAL.ink, nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, w1, 0, SPAN, A.X, A.Y, F.ref('beat-wave-1'), 3, 1600);
    curve(ctx, w2, 0, SPAN, A.X, A.Y, F.ref('beat-wave-2'), 3, 1600);
    legend(ctx, 240, 168, F.ref('beat-wave-1'), '波 1，' + fmt(f1.v, 2) + ' Hz');
    legend(ctx, 700, 168, F.ref('beat-wave-2'), '波 2，' + fmt(f2.v, 2) + ' Hz');
    const B = axes(ctx, boxB, [0, SPAN], [-YM, YM], { xl: '时间 (s)', xc: C('time'), yl: '二者之和 (m)', yc: C('position'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, envOf, 0, SPAN, B.X, B.Y, alpha(C('position'), 0.4), 2, 800);
    curve(ctx, (t) => -envOf(t), 0, SPAN, B.X, B.Y, alpha(C('position'), 0.4), 2, 800);
    curve(ctx, sum, 0, SPAN, B.X, B.Y, C('position'), 4, 2400);
    if (fB > 0.05 && 1 / fB <= SPAN) hbracket(ctx, B.X(0), B.X(1 / fB), boxB.b + 56, C('time'), '一拍，' + fmt(1 / fB, 2) + ' s', { side: 'below', size: 20 });   /* named under the bracket, clear of the tick labels */
    line(ctx, B.X(now), boxB.t, B.X(now), boxB.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, boxB, B.X, B.Y, now, sum(now), C('position'));
    /* the loudness of that point at this moment, as a bar beside the graph */
    const bx = 1288, bt = boxB.t, bb = boxB.b, h = ((bb - bt) * envOf(now)) / (2 * YM);
    ctx.save(); ctx.fillStyle = alpha(C('position'), 0.3); ctx.fillRect(bx, bb - h, 30, h); ctx.restore();
    line(ctx, bx, bt, bx, bb, PAL.muted, 2); line(ctx, bx, bb, bx + 30, bb, PAL.muted, 2);
    text(ctx, '响度', bx + 15, bt - 22, PAL.ink, { size: 19, weight: 600, align: 'center' });
    topline(ctx, fB < 0.05 ? '两个频率相等，所以两列波从不失步：和保持 ' + fmt(2 * X.v, 2) + ' m 的稳定振幅，完全没有拍'
      : '两个频率相差 ' + fmt(fB, 2) + ' Hz，所以和每秒增强又减弱 ' + fmt(fB, 2) + ' 次，而波本身以平均频率 ' + fmt(fav, 2) + ' Hz 振动');
    readout(d.readout, `\\kfB = \\lvert\\kfone - \\kftwo\\rvert = \\lvert${fmt(f1.v, 2)} - ${fmt(f2.v, 2)}\\rvert\\ \\text{Hz} = ${fmt(fB, 2)}\\ \\text{Hz},\\quad \\kfave = ${fmt(fav, 2)}\\ \\text{Hz}`,
      '在 ' + fmt(now, 2) + ' s 时刻，振幅是 ' + fmt(envOf(now), 2) + ' m。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();
};
