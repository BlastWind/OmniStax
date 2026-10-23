/* Figures for section 17.5 Sound Interference and Resonance: Standing Waves in Air Columns. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, headline, hbracket, axes, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const VW = 344;                       /* the speed of sound the section works at, 344 m/s */
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* =====================================================================
   FIGURE 17.21: the noise and the sound the headphones introduce, and
   their sum. Two travelling gauge pressures on one axis, the sum below.
   Moving: one loop is one wave period.
===================================================================== */
(function () {
  const d = sim('sim-noise-cancelling', 640);
  const dp2 = ctl(d.controls, { label: '\\kdpamp_2', cls: 'pressure', min: 0, max: 1.5, step: 0.05, value: 1, unit: 'Pa', dec: 2, onInput: reset, aria: '引入声音的压强振幅', specials: [{ at: 1, label: '匹配' }] });
  const phi = ctl(d.controls, { label: '\\varphi', cls: '', min: 0, max: 360, step: 5, value: 180, unit: '°', dec: 0, onInput: reset, aria: '引入声音相对于噪声的相位', specials: [{ at: 180, label: '半个周期' }] });
  const fq = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 100, max: 1000, step: 10, value: 400, unit: 'Hz', dec: 0, onInput: reset });
  const cy = cycle(() => 1, 0);                 /* one model unit is one wave period */
  function reset() { cy.reset(); }
  const DP1 = 1;                                /* the noise, fixed at 1.00 Pa so the slider is the comparison */
  function draw() {
    const { ctx } = begin(d.c);
    /* Both axes are fixed at ±2.6 Pa and never rescaled: the introduced sound reaches 1.5 Pa and
       the sum reaches 2.5 Pa at the slider maxima, so nothing the reader can set runs off them. */
    const PM = 2.6, XM = 2, t = REDUCED ? 0.25 : cy.now();
    const lam = VW / fq.v, ph = (phi.v * Math.PI) / 180;
    const p1 = (x) => DP1 * Math.sin(TAU * (x / lam - t));
    const p2 = (x) => dp2.v * Math.sin(TAU * (x / lam - t) + ph);
    const As = Math.sqrt(DP1 * DP1 + dp2.v * dp2.v + 2 * DP1 * dp2.v * Math.cos(ph));
    const boxes = [{ l: 190, r: 1310, t: 110, b: 290 }, { l: 190, r: 1310, t: 372, b: 552 }];
    const g0 = axes(ctx, boxes[0], [0, XM], [-PM, PM], { xl: '', yl: '表压强 (Pa)', yc: C('pressure'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    const nc = F.ref('noise'), ic = F.ref('introduced');
    curve(ctx, p1, 0, XM, g0.X, g0.Y, nc, 5, 300);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, p2, 0, XM, g0.X, g0.Y, ic, 4, 300); ctx.restore();
    /* the legend above the box, right-aligned, where no curve reaches at any amplitude */
    const l2 = '引入的声音，' + fmt(dp2.v, 2) + ' Pa（虚线）', LY = boxes[0].t - 14;
    text(ctx, l2, boxes[0].r, LY, ic, { size: 19, weight: 600, align: 'right' });
    text(ctx, '噪声，' + fmt(DP1, 2) + ' Pa', boxes[0].l + 260, LY, nc, { size: 19, weight: 600 });
    arrow(ctx, 820, 344, 950, 344, C('velocity'), 4);
    text(ctx, '二者都以 v_w = 344 m/s 传播', 964, 344, C('velocity'), { size: 20, weight: 600 });
    const g1 = axes(ctx, boxes[1], [0, XM], [-PM, PM], { xl: '沿声音传播方向的距离 (m)', xc: C('position'), yl: '二者之和 (Pa)', yc: C('pressure'), nx: 4, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    curve(ctx, (x) => p1(x) + p2(x), 0, XM, g1.X, g1.Y, C('pressure'), 5, 300);
    const drop = As > 1e-4 ? 20 * Math.log10(As / DP1) : -Infinity;
    headline(ctx, As < 0.02 ? '与噪声相差 ' + fmt(phi.v, 0) + '° 相位且振幅匹配时，第二个声音在各处都把噪声抵消。'
      : '与噪声相差 ' + fmt(phi.v, 0) + '° 相位时，第二个声音使二者之和为 ' + fmt(As, 2) + ' Pa，' + (drop < 0 ? '比单独的噪声低 ' + fmt(-drop, 1) + ' dB。' : '比单独的噪声高 ' + fmt(drop, 1) + ' dB。'));
    readout(d.readout, `\\kdpamp_{\\text{sum}} = \\sqrt{\\kdpamp_1^2 + \\kdpamp_2^2 + 2\\kdpamp_1\\kdpamp_2\\cos\\varphi} = ${fmt(As, 2)}\\ \\text{Pa}`,
      '这里两个声音的波长都是 $\\klam = ' + fmt(lam, 2) + '$ m。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.2), draw });
})();

/* =====================================================================
   FIGURE 17.22 + 17.23 + 17.24 + 17.25 + 17.26: the disturbance travels
   down a tube closed at one end, reflects, comes back, and the standing
   wave builds. Moving: the loop is the round trip, then the resonance.
===================================================================== */
(function () {
  const d = sim('sim-tube-resonance', 650);
  const L = ctl(d.controls, { label: '\\kLlen', cls: 'position', min: 0.2, max: 1.5, step: 0.002, value: 0.672, unit: 'm', dec: 3, onInput: reset, aria: '管的长度',
    specials: [{ at: () => (nearest().n * VW) / (4 * fq.v), label: '共振' }] });
  const fq = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 50, max: 800, step: 1, value: 128, unit: 'Hz', dec: 0, onInput: reset });
  const where = choice(d.controls, { label: '\\text{音叉}', options: [{ value: 'open', label: '在开口端' }, { value: 'closed', label: '靠近封闭端' }], value: 'open', aria: '音叉所在的位置' });
  const cy = cycle(() => 6, 1.2);
  function reset() { cy.reset(); }
  /* the nearest resonance of this tube: the odd harmonic whose frequency lies closest to the fork's */
  function nearest() {
    const raw = (4 * L.v * fq.v) / VW;
    let n = 2 * Math.round((raw - 1) / 2) + 1; if (n < 1) n = 1;
    return { n, f: (n * VW) / (4 * L.v) };
  }
  /* the tuning fork, its stem on (x, y), drawn upward */
  function fork(ctx, x, y, open) {
    /* a stem, a rounded yoke and two prongs, about 130 tall; the prongs' swing is drawn as faint ghosts either side */
    const s = open ? 15 : 11, top = y - 130, yoke = y - 46;
    const fk = F.ref('fork');
    ctx.save(); ctx.strokeStyle = fk; ctx.lineWidth = 6; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, yoke + s); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s, top); ctx.lineTo(x - s, yoke); ctx.arc(x, yoke, s, Math.PI, 0, true); ctx.lineTo(x + s, top); ctx.stroke();
    ctx.restore();
    [-1, 1].forEach((k) => line(ctx, x + k * (s + 7), top, x + k * (s + 7), yoke - 30, alpha(fk, 0.3), 3));
    text(ctx, '音叉', x, top - 22, fk, { size: 19, align: 'center', bg: PAL.panel });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? 5 : cy.now();
    const xL = 300, xR = 300 + (L.v / 1.5) * 880, span = xR - xL;
    const y0 = 190, AMP = 68;                 /* the zero line of the displacement curve, and its full swing */
    const tubeT = 300, tubeB = 420;
    const { n, f: fn } = nearest();
    const res = 1 / (1 + Math.pow((fq.v - fn) / (0.05 * fn), 2));
    const onRes = res > 0.7;
    /* the air's displacement along the tube, u = 0 at the open end and u = 1 at the closed end */
    let s;
    if (tau < 1) { const uc = tau; s = (u) => Math.exp(-Math.pow((u - uc) / 0.12, 2)); }
    else if (tau < 2) { const uc = 2 - tau; s = (u) => -Math.exp(-Math.pow((u - uc) / 0.12, 2)); }
    else {
      const grow = Math.min(1, (tau - 2) / 0.8), a = (0.1 + 0.9 * res) * grow;
      s = (u) => a * Math.cos((n * Math.PI * u) / 2) * Math.sin((TAU * 3 * (tau - 2)) / 4);
    }
    /* the curve above the tube, with its zero line */
    line(ctx, xL, y0, xR, y0, PAL.muted, 2, [10, 10]);
    curve(ctx, (u) => s(u), 0, 1, (u) => xL + u * span, (v) => y0 - v * AMP, C('position'), 5, 240);
    text(ctx, '空气位移', xL, y0 - AMP - 26, C('position'), { size: 20, weight: 600 });
    if (tau >= 2) {
      ctx.save(); ctx.setLineDash([6, 8]);
      const a = (0.1 + 0.9 * res) * Math.min(1, (tau - 2) / 0.8);
      curve(ctx, (u) => a * Math.cos((n * Math.PI * u) / 2), 0, 1, (u) => xL + u * span, (v) => y0 - v * AMP, alpha(C('position'), 0.45), 3, 200);
      curve(ctx, (u) => -a * Math.cos((n * Math.PI * u) / 2), 0, 1, (u) => xL + u * span, (v) => y0 - v * AMP, alpha(C('position'), 0.45), 3, 200);
      ctx.restore();
    }
    /* the tube: two walls, a closed end at the right, an open end at the left */
    const tb = F.ref('tube');
    line(ctx, xL, tubeT, xR, tubeT, tb, 5); line(ctx, xL, tubeB, xR, tubeB, tb, 5);
    fixed(ctx, xR, tubeT, 26, tubeB - tubeT);
    /* the air: ink dots, and a crowd of them is a compression */
    const N = Math.max(6, Math.round(span / 34));
    for (let i = 0; i < N; i++) {
      const u = (i + 0.5) / N, x0 = xL + u * span;
      const dx = Math.max(xL + 6 - x0, Math.min(xR - 6 - x0, s(u) * (span / N) * 0.85));
      for (let r = 0; r < 3; r++) dot(ctx, x0 + dx, tubeT + 30 + r * 30, PAL.ink, true, 5);
    }
    if (tau < 2) {
      const uc = tau < 1 ? tau : 2 - tau, dir = tau < 1 ? 1 : -1, px = xL + uc * span;
      arrow(ctx, px - dir * 70, tubeT - 30, px, tubeT - 30, C('velocity'), 4);
      text(ctx, 'v_w = 344 m/s', px + dir * 14, tubeT - 30, C('velocity'), { size: 20, weight: 600, align: dir > 0 ? 'left' : 'right', bg: PAL.panel });
    }
    hbracket(ctx, xL, xR, tubeB + 122, C('position'), 'L = ' + fmt(L.v, 3) + ' m');
    fork(ctx, where.value === 'open' ? xL - 80 : xR + 74, tubeB + 10, where.value === 'open');
    text(ctx, '开口端：波腹', xL + 6, tubeB + 40, C('position'), { size: 19, weight: 600 });
    text(ctx, '封闭端：波节', xR + 26, tubeB + 72, C('position'), { size: 19, weight: 600, align: 'right' });
    headline(ctx, tau < 1 ? '音叉以声速沿管送出一个扰动'
      : tau < 2 ? '扰动在封闭端反射，并向音叉传回'
      : onRes ? '它在半个周期之后回到音叉处，与音叉仍在发出的声音叠加，因此气柱在 ' + fmt(fn, 0) + ' Hz 下共振'
      : '在 ' + fmt(fq.v, 0) + ' Hz 下，它回到音叉处时与音叉不同步，因此气柱的振动很小');
    const lam = VW / fq.v;
    readout(d.readout, `\\klam = \\frac{\\kvw}{\\kf} = \\frac{344\\ \\text{m/s}}{${fmt(fq.v, 0)}\\ \\text{Hz}} = ${fmt(lam, 3)}\\ \\text{m}, \\qquad \\frac{4\\kLlen}{${n}} = ${fmt((4 * L.v) / n, 3)}\\ \\text{m}`,
      onRes ? '二者相等，因此管中容纳了波长的 ' + n + '/4，' + fmt(fn, 0) + ' Hz ' + (n === 1 ? '是它的基频。' : '对应的谐波次数为 ' + n + '。')
        : '二者不一致，因此无法维持驻波。长 ' + fmt(L.v, 3) + ' m 的管最近的共振在 ' + fmt(fn, 0) + ' Hz，谐波次数为 ' + n + '；把频率调到该值，气柱就活跃起来。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1.1), draw });
})();

/* =====================================================================
   FIGURE 17.27 + 17.28 + 17.30: the fundamental and the first three
   overtones of one tube, with a choice of ends. Still: a ladder of
   envelopes has no clock in it.
===================================================================== */
(function () {
  const d = sim('sim-harmonic-ladder', 840);
  const L = ctl(d.controls, { label: '\\kLlen', cls: 'position', min: 0.2, max: 2, step: 0.002, value: 0.672, unit: 'm', dec: 3, aria: '管的长度' });
  const ends = choice(d.controls, { label: '\\text{管为}', options: [{ value: 'closed', label: '一端封闭' }, { value: 'open', label: '两端开口' }], value: 'closed', aria: '管的两端' });
  const harm = select(d.controls, { label: '\\text{谐波}', options: [{ value: '0', label: '基频' }, { value: '1', label: '第一泛音' }, { value: '2', label: '第二泛音' }, { value: '3', label: '第三泛音' }], value: '0', aria: '要读取哪个谐波' });
  const NAMES = ['基频', '第一泛音', '第二泛音', '第三泛音'];
  function draw() {
    const { ctx } = begin(d.c);
    const closed = ends.value === 'closed';
    const pick = +harm.value;
    const span = 780, xL = 300, xR = xL + span;   /* the four tubes are drawn one length, as the book draws them; the slider on L is read in the frequencies and wavelengths beside each */
    const AMP = 52;
    const nOfEnds = (cl, i) => (cl ? 2 * i + 1 : i + 1);
    const nOf = (i) => nOfEnds(closed, i);
    const shapeOf = (cl, n) => (u) => (cl ? Math.cos((n * Math.PI * u) / 2) : Math.cos(n * Math.PI * u));
    /* each tube's standing wave bends from one kind of tube into the other */
    const trace = (i, sgn, Xu, Yv, col, w) => ends.curve(ctx, (v) => shapeOf(v === 'closed', nOfEnds(v === 'closed', i)), 0, 1, Xu, (y) => Yv(sgn * y), col, w, 220);
    const fOf = (n) => (closed ? (n * VW) / (4 * L.v) : (n * VW) / (2 * L.v));
    const lamOf = (n) => (closed ? (4 * L.v) / n : (2 * L.v) / n);
    for (let i = 0; i < 4; i++) {
      const n = nOf(i), y0 = 190 + i * 160, e = harm.a(String(i));
      const col = alpha(C('position'), 0.3 + 0.7 * e);
      const ink = alpha(F.ref('ladder-tube'), 0.35 + 0.65 * e);
      /* the tube, drawn with its closed end walled and its open ends left bare */
      line(ctx, xL, y0 - 74, xR, y0 - 74, ink, 3 + 2 * e); line(ctx, xL, y0 + 74, xR, y0 + 74, ink, 3 + 2 * e);
      if (ends.a('closed') > 0) { ctx.save(); ctx.globalAlpha = ends.a('closed'); fixed(ctx, xR, y0 - 74, 22, 148); ctx.restore(); }
      line(ctx, xL, y0, xR, y0, PAL.muted, 2, [10, 10]);
      const Xu = (u) => xL + u * span, Yv = (v) => y0 - v * AMP;
      trace(i, 1, Xu, Yv, col, 3 + 2 * e);
      ctx.save(); ctx.setLineDash([6, 8]);
      trace(i, -1, Xu, Yv, alpha(col, 0.6), 3);
      ctx.restore();
      /* every node hollow and every antinode filled, named once on the fundamental */
      const marks = (cl) => {
        const nn = nOfEnds(cl, i), zeros = [], peaks = [];
        for (let m = 0; m < 12; m++) {
          const uz = cl ? (2 * m + 1) / nn : (m + 0.5) / nn, up = cl ? (2 * m) / nn : m / nn;
          if (uz <= 1.0001) zeros.push(uz);
          if (up <= 1.0001) peaks.push(up);
        }
        if (!cl) peaks.push(1);
        return { zeros, peaks, f: shapeOf(cl, nn) };
      };
      for (const v of ['closed', 'open']) {
        const a = ends.a(v); if (a <= 0) continue;
        const { zeros: zs, peaks: ps, f: fv } = marks(v === 'closed');
        ctx.save(); ctx.globalAlpha = a;
        zs.forEach((u) => dot(ctx, Xu(u), Yv(0), col, false, 10));
        ps.forEach((u) => dot(ctx, Xu(u), Yv(fv(u)), col, true, 10));
        ctx.restore();
      }
      const { zeros, peaks } = marks(closed);
      if (i === 0) {
        text(ctx, '波节', Xu(zeros[0]), Yv(0) + 30, C('position'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
        text(ctx, '波腹', Xu(peaks[0]), y0 - 96, C('position'), { size: 19, weight: 600, align: 'center' });
      }
      text(ctx, NAMES[i], xR + 44, y0 - 22, alpha(PAL.ink, 0.75 + 0.25 * e), { size: 21, weight: 600 });
      text(ctx, 'f_' + n + ' = ' + fmt(fOf(n), 0) + ' Hz', xR + 44, y0 + 12, alpha(C('frequency'), 0.8 + 0.2 * e), { size: 21, weight: 600 });
      text(ctx, 'λ = ' + fmt(lamOf(n), 3) + ' m', xR + 44, y0 + 44, alpha(C('position'), 0.8 + 0.2 * e), { size: 19 });
    }
    hbracket(ctx, xL, xR, 796, C('position'), 'L = ' + fmt(L.v, 3) + ' m');
    const n = nOf(pick);
    headline(ctx, '一根 ' + fmt(L.v, 3) + ' m 长、' + (closed ? '一端封闭' : '两端开口') + '的管，其' + NAMES[pick].toLowerCase() + '为 ' + fmt(fOf(n), 0) + ' Hz，谐波次数为 ' + n);
    readout(d.readout, closed
      ? `\\kfn = n\\frac{\\kvw}{4\\kLlen} = ${n}\\frac{344\\ \\text{m/s}}{4(${fmt(L.v, 3)}\\ \\text{m})} = ${fmt(fOf(n), 0)}\\ \\text{Hz}`
      : `\\kfn = n\\frac{\\kvw}{2\\kLlen} = ${n}\\frac{344\\ \\text{m/s}}{2(${fmt(L.v, 3)}\\ \\text{m})} = ${fmt(fOf(n), 0)}\\ \\text{Hz}`,
      closed ? '一端封闭的管在封闭端有一个波节，在开口端有一个波腹，因此只有奇次谐波能够容纳：这里它的基频是 ' + fmt(fOf(1), 0) + ' Hz，它的第一泛音是三次谐波，即 ' + fmt(fOf(3), 0) + ' Hz。'
        : '两端开口的管在每一端都有一个波腹，因此每个谐波都能容纳：这里它的基频是 ' + fmt(fOf(1), 0) + ' Hz，是同一根管一端封闭时所发基频的两倍，各泛音依次是它的 2、3、4 倍。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the length a tube needs for a given note, and how the air
   temperature moves it. Example 17.5's numbers as the defaults. Still.
===================================================================== */
(function () {
  const d = sim('sim-tube-length', 660);
  const f1 = ctl(d.controls, { label: '\\kfone', cls: 'frequency', min: 60, max: 600, step: 1, value: 128, unit: 'Hz', dec: 0, aria: '基频' });
  const Tc = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 0, max: 40, step: 0.5, value: 22, unit: '°C', dec: 1, aria: '空气温度' });
  const harm = select(d.controls, { label: '\\text{谐波}', options: [{ value: '1', label: 'n = 1' }, { value: '3', label: 'n = 3' }, { value: '5', label: 'n = 5' }, { value: '7', label: 'n = 7' }, { value: '9', label: 'n = 9' }], value: '1', aria: '要画出哪个谐波' });
  const vOf = () => 331 * Math.sqrt((Tc.v + 273.15) / 273);
  function draw() {
    const { ctx } = begin(d.c);
    /* One scale for the tube and one range for the graph, both fixed and never rescaled: the
       longest tube the sliders reach is 60 Hz at 40.0 °C, 1.48 m, so the rule runs to 1.6 m and
       the graph's length axis with it. */
    const v = vOf(), Lv = v / (4 * f1.v), n = +harm.value;
    const LMAX = 1.6, SC = 300, top = 130;
    const cx = 210, w = 112;
    const bot = top + Lv * SC;
    /* the metre rule beside the tube */
    line(ctx, cx - w / 2 - 70, top, cx - w / 2 - 70, top + LMAX * SC, PAL.muted, 3);
    for (let m = 0; m <= 16; m++) {
      const y = top + (m / 10) * SC, big = m % 5 === 0;
      line(ctx, cx - w / 2 - 70, y, cx - w / 2 - 70 + (big ? 18 : 10), y, PAL.muted, 2);
      if (big) text(ctx, fmt(m / 10, 1) + ' m', cx - w / 2 - 78, y, PAL.muted, { size: 17, align: 'right' });
    }
    /* the tube: open at the top, closed at the bottom */
    const et = F.ref('example-tube');
    line(ctx, cx - w / 2, top, cx - w / 2, bot, et, 5); line(ctx, cx + w / 2, top, cx + w / 2, bot, et, 5);
    fixed(ctx, cx - w / 2 - 4, bot, w + 8, 22);
    /* the standing wave of the chosen harmonic, drawn sideways inside the tube */
    const sOf = (u) => Math.cos((n * Math.PI * u) / 2);
    ctx.save(); ctx.beginPath(); ctx.strokeStyle = C('position'); ctx.lineWidth = 4;
    for (let i = 0; i <= 200; i++) { const u = i / 200, x = cx + sOf(u) * (w / 2 - 8), y = top + u * (bot - top); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, '开口端', cx + w / 2 + 14, top + 8, C('position'), { size: 19, weight: 600 });
    text(ctx, '封闭端', cx + w / 2 + 14, bot + 16, C('position'), { size: 19, weight: 600 });
    text(ctx, 'L = ' + fmt(Lv, 3) + ' m', cx, bot + 56, C('position'), { size: 21, weight: 600, align: 'center' });
    /* the graph: the same reckoning across the whole range of notes, beside the vertical scene */
    const box = { l: 640, r: 1310, t: 140, b: 520 };
    const { X, Y } = axes(ctx, box, [60, 600], [0, LMAX], { xl: '基频 (Hz)', xc: C('frequency'), yl: '管的长度 (m)', yc: C('position'), nx: 6, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 1) });
    curve(ctx, (q) => v / (4 * q), 60, 600, X, Y, C('position'), 4, 200);
    line(ctx, X(f1.v), box.b, X(f1.v), Y(Lv), C('frequency'), 2, [4, 8]);
    line(ctx, box.l, Y(Lv), X(f1.v), Y(Lv), C('position'), 2, [4, 8]);
    dot(ctx, X(f1.v), Y(Lv), et, true, 9);
    text(ctx, 'L = v_w/4f_1', X(330) + 10, Y(v / (4 * 330)) - 30, C('position'), { size: 20, weight: 600 });
    headline(ctx, '一端封闭的管要发出 ' + fmt(f1.v, 0) + ' Hz，在 ' + fmt(Tc.v, 1) + ' °C 时，长度必须是 ' + fmt(Lv, 3) + ' m');
    readout(d.readout, `\\kLlen = \\frac{\\kvw}{4\\kfone} = \\frac{${fmt(v, 0)}\\ \\text{m/s}}{4(${fmt(f1.v, 0)}\\ \\text{Hz})} = ${fmt(Lv, 3)}\\ \\text{m}`,
      '先求声速：$\\kvw = (331\\ \\text{m/s})\\sqrt{\\kTemp/273\\ \\text{K}} = ' + fmt(v, 0) + '$ m/s（在 ' + fmt(Tc.v, 1) + ' °C 时）。' + (n === 1 ? '' : '第 ' + n + ' 次谐波是基频的 ' + n + ' 倍，即 ' + (n * f1.v >= 1000 ? fmt((n * f1.v) / 1000, 2) + ' kHz' : fmt(n * f1.v, 0) + ' Hz') + '。'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
