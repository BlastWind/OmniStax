/* Figures for section 17.7 Ultrasound. Boots against the section's text article.
   Three of the four figures are settings and their consequences and so are
   still; the echo train is a clock, and it alone registers a cycle and carries
   the transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers written the way the book writes them ---------- */
const TAU = 2 * Math.PI;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function parts(v, d) {
  if (v === 0) return { m: fmt(0, d), e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (+m.toFixed(d) >= 10) { m /= 10; e += 1; }
  return { m: fmt(m, d), e };
}
const sci = (v, d) => { const p = parts(v, d); return v === 0 ? '0' : p.m + ' × 10' + sup(p.e); };
const sciTex = (v, d) => { const p = parts(v, d); return v === 0 ? '0' : `${p.m}\\times10^{${p.e}}`; };
/* a frequency in hertz with every digit, as Example 17.8 writes it */
const hz = (v) => Math.round(v).toLocaleString('en-US');

/* the speed of sound in soft tissue, the value the section's problems are set with */
const VT = 1540;

/* ---------- Table 17.5, the media and their properties ---------- */
/* Z is the table's own tabulated value, so the figure reproduces the book's
   0.014 and the keyed problem's 1.00 and 0.823 exactly; the density and the
   speed beside it multiply to the same number. */
const MEDIA = [
  { k: 'air', name: '空气', rho: 1.3, v: 330, Z: 429 },
  { k: 'water', name: '水', rho: 1000, v: 1500, Z: 1.5e6 },
  { k: 'blood', name: '血液', rho: 1060, v: 1570, Z: 1.66e6 },
  { k: 'fat', name: '脂肪', rho: 925, v: 1450, Z: 1.34e6 },
  { k: 'muscle', name: '肌肉', rho: 1075, v: 1590, Z: 1.70e6 },
  { k: 'bone', name: '骨', rho: 1700, v: 4080, Z: 6.94e6 },
  { k: 'titanate', name: '钛酸钡', rho: 5600, v: 5500, Z: 30.8e6 },
];
const medium = (k) => MEDIA.find((m) => m.k === k) ?? MEDIA[3];
const zTex = (Z) => (Z < 1e4 ? fmt(Z, 0) : sciTex(Z, 2));
const zText = (Z) => (Z < 1e4 ? fmt(Z, 0) : sci(Z, 2));

/* =====================================================================
   SIM: a beam of ultrasound meeting the boundary between two media. The
   reflected and the transmitted shares are drawn to scale. Still: a boundary
   and its two shares are a steady state and the idea is the ratio, not the
   travel of the pulse.
===================================================================== */
(function () {
  const d = sim('sim-acoustic-boundary', 680);
  const opts = MEDIA.map((m) => ({ value: m.k, label: m.name }));
  const m1 = select(d.controls, { label: '\\text{介质 1}', options: opts, value: 'fat', aria: '超声到达所经的介质' });
  const m2 = select(d.controls, { label: '\\text{介质 2}', options: opts, value: 'muscle', aria: '界面另一侧的介质' });
  const BX = 700, TOPY = 150, BOTY = 350;          /* the boundary and the two fields either side of it */
  const BEAM = 268;                                 /* the line the beam travels along */
  const BAR = { l: 430, r: 970, t: 520, b: 590 };   /* the two shares as one divided bar, fixed at 0 to 100% */
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('intensity'), dc = C('density'), vc = C('velocity');
    const A = medium(m1.value), B = medium(m2.value);
    const a = Math.pow(B.Z - A.Z, 2) / Math.pow(A.Z + B.Z, 2), tr = 1 - a;
    /* the two media, ink fields told apart by a boundary and their labels */
    ctx.save();
    ctx.fillStyle = alpha(F.ref('medium-1'), 0.08); ctx.fillRect(120, TOPY, BX - 120, BOTY - TOPY);
    ctx.fillStyle = alpha(F.ref('medium-2'), 0.14); ctx.fillRect(BX, TOPY, 1280 - BX, BOTY - TOPY);
    ctx.restore();
    line(ctx, BX, TOPY - 16, BX, BOTY + 16, PAL.ink, 4);
    text(ctx, '界面', BX, TOPY - 34, PAL.ink, { size: 20, weight: 600, align: 'center' });
    [[A, 120, BX, '介质 1', 'medium-1'], [B, BX, 1280, '介质 2', 'medium-2']].forEach(([m, x1, x2, which, id]) => {
      const cx = (x1 + x2) / 2;
      text(ctx, which + '：' + m.name, cx, BOTY + 34, F.ref(id), { size: 22, weight: 600, align: 'center' });
      text(ctx, 'ρ = ' + fmt(m.rho, m.rho < 10 ? 1 : 0) + ' kg/m³', cx, BOTY + 64, dc, { size: 19, align: 'center' });
      text(ctx, 'v = ' + fmt(m.v, 0) + ' m/s', cx, BOTY + 90, vc, { size: 19, align: 'center' });
      text(ctx, 'Z = ' + zText(m.Z) + ' kg/(m²·s)', cx, TOPY + 24, C('acoustic-impedance'), { size: 19, weight: 600, align: 'center' });
    });
    /* the incident beam and the two shares, each arrow as long as its share of the intensity */
    const LEN = 300;
    arrow(ctx, BX - LEN - 40, BEAM, BX - 8, BEAM, ic, 6);
    text(ctx, '超声到达', BX - LEN - 40, BEAM - 26, ic, { size: 20, weight: 600, bg: PAL.panel });
    const lr = Math.max(28, a * LEN), lt = Math.max(28, tr * LEN);
    arrow(ctx, BX - 8, BEAM + 54, BX - 8 - lr, BEAM + 54, ic, 3 + 9 * a);
    text(ctx, '反射，' + fmt(100 * a, 1) + '%', BX - 18, BEAM + 22, ic, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    arrow(ctx, BX + 8, BEAM, BX + 8 + lt, BEAM, ic, 3 + 9 * tr);
    text(ctx, '透射，' + fmt(100 * tr, 1) + '%', BX + 18, BEAM - 26, ic, { size: 20, weight: 600, bg: PAL.panel });
    /* the same two shares as one bar of the whole incident intensity */
    const w = BAR.r - BAR.l, wr = a * w;
    ctx.save(); ctx.fillStyle = alpha(ic, 0.85); ctx.fillRect(BAR.l, BAR.t, Math.max(wr, 1.5), BAR.b - BAR.t); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(ic, 0.25); ctx.fillRect(BAR.l + wr, BAR.t, w - wr, BAR.b - BAR.t); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(BAR.l, BAR.t, w, BAR.b - BAR.t); ctx.restore();
    text(ctx, '入射强度（全部）', (BAR.l + BAR.r) / 2, BAR.t - 24, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, '反射', BAR.l, BAR.b + 26, ic, { size: 18, weight: 600 });
    text(ctx, '透射', BAR.r, BAR.b + 26, ic, { size: 18, weight: 600, align: 'right' });
    headline(ctx, a < 0.005 ? '在' + A.name + '与' + B.name + '之间，阻抗几乎相等，几乎没有强度被反射。'
      : '在' + A.name + '与' + B.name + '之间，有 ' + fmt(100 * a, 1) + '% 的强度被反射，其余的被透射。');
    readout(d.readout, `a = \\frac{(\\kZtwo - \\kZone)^2}{(\\kZone + \\kZtwo)^2} = \\frac{(${zTex(B.Z)} - ${zTex(A.Z)})^2}{(${zTex(A.Z)} + ${zTex(B.Z)})^2} = ${a >= 0.001 ? fmt(a, 3) : sciTex(a, 2)}`,
      '这就是换能器通过凝胶而不是通过空气与皮肤耦合的原因。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 17.42: the transducer, the pulse it sends into the tissue and the
   echoes that come back from each boundary, with the graph of echo intensity
   against time beneath. Moving: the time an echo takes is the depth of its
   reflector, which is a clock.
===================================================================== */
(function () {
  const H = 760;
  const d = sim('sim-echo-ranging', H);
  const dep = ctl(d.controls, { label: '\\kd', cls: 'position', min: 2, max: 12, step: 0.1, value: 4, unit: 'cm', dec: 1, onInput: reset, aria: '第一个界面的深度' });
  const thk = ctl(d.controls, { label: 'w', cls: 'position', min: 3, max: 8, step: 0.1, value: 5, unit: 'cm', dec: 1, onInput: reset, aria: '被扫描身体的厚度' });
  const TMAX = 280;                                  /* the fixed time axis, 0 to 280 μs, which covers 20 cm there and back */
  const cy = cycle(() => TMAX, 1.2);
  function reset() { cy.reset(); }
  const XL = 180, XR = 1320, SKIN = 130, DEEP = 330; /* the tissue, 0 to 20 cm across the canvas */
  const xOf = (cm) => XL + (cm / 20) * (XR - XL);
  const G = { l: XL, r: XR, t: 490, b: 660 };        /* the graph: 0 to 280 μs by 0 to 1 */
  /* the four boundaries the pulse meets, in centimetres */
  const bounds = () => { const a = dep.v, w = thk.v; return [a, a + 0.25 * w, a + 0.75 * w, a + w]; };
  const tOf = (cm) => (2 * (cm / 100) / VT) * 1e6;   /* the round trip in microseconds */
  const amp = (cm) => Math.exp(-cm / 10);            /* the deeper the boundary, the weaker the echo returns */
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('position'), ic = C('intensity'), vc = C('velocity'), tc = C('time');
    const t = cy.now(), B = bounds();
    /* the tissue and its boundaries */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(XL, SKIN, XR - XL, DEEP - SKIN); ctx.restore();
    line(ctx, XL, SKIN, XR, SKIN, PAL.ink, 3);
    text(ctx, '皮肤', XL + 8, SKIN - 18, PAL.muted, { size: 18 });
    B.forEach((cm, i) => {
      line(ctx, xOf(cm), SKIN, xOf(cm), DEEP, PAL.ink, i === 0 || i === 3 ? 3.5 : 2.5);
      text(ctx, String(i + 1), xOf(cm), DEEP + 22, PAL.ink, { size: 19, weight: 600, align: 'center' });
    });
    /* the transducer at the surface */
    ctx.save(); ctx.fillStyle = F.ref('echo-transducer'); ctx.fillRect(XL - 46, SKIN - 40, 44, 80); ctx.restore();
    text(ctx, '换能器', XL - 24, SKIN - 58, F.ref('echo-transducer'), { size: 20, weight: 600, align: 'center' });
    /* the outgoing pulse and the echoes on their way back, each a mark on the beam line */
    const BY = (SKIN + DEEP) / 2, cmOf = (us) => (VT * (us / 1e6)) * 100;
    line(ctx, XL, BY, XR, BY, alpha(PAL.ink, 0.35), 2, [10, 10]);
    const out = cmOf(t);
    if (out <= 20) { dot(ctx, xOf(out), BY, vc, true, 10); text(ctx, '脉冲，速率 ' + fmt(VT, 0) + ' m/s', xOf(Math.min(out, 17)), BY - 30, vc, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); }
    B.forEach((cm) => {
      const back = cm - cmOf(t - tOf(cm) / 2);
      if (t > tOf(cm) / 2 && back >= 0) dot(ctx, xOf(back), BY + 34, ic, false, 8);
    });
    /* the depth of the first boundary, bracketed on the tissue */
    hbracket(ctx, XL, xOf(B[0]), DEEP + 66, pc, 'd = ' + fmt(B[0], 1) + ' cm', { side: 'below' });
    hbracket(ctx, xOf(B[0]), xOf(B[3]), DEEP + 122, pc, 'w = ' + fmt(thk.v, 1) + ' cm', { side: 'below' });
    /* the echoes as they arrive */
    const g = axes(ctx, G, [0, TMAX], [0, 1], { xl: '自短促脉冲发出以来的时间 (μs)', xc: tc, yl: '回声强度', yc: ic, nx: 7, ny: 2, fy: () => '' });
    const peak = (x) => B.reduce((s, cm) => (t >= tOf(cm) ? s + amp(cm) * Math.exp(-Math.pow((x - tOf(cm)) / 3.4, 2)) : s), 0);
    curve(ctx, peak, 0, TMAX, g.X, g.Y, ic, 4, 700);
    B.forEach((cm, i) => { if (t >= tOf(cm)) text(ctx, String(i + 1), g.X(tOf(cm)), g.Y(amp(cm)) - 20, ic, { size: 18, weight: 600, align: 'center' }); });
    const cx = g.X(Math.min(t, TMAX)), late = cx > G.r - 160;
    line(ctx, cx, G.t, cx, G.b, alpha(tc, 0.7), 2);
    text(ctx, 't = ' + fmt(t, 0) + ' μs', cx + (late ? -10 : 10), G.t + 18, tc, { size: 19, weight: 600, align: late ? 'right' : 'left', bg: PAL.panel });
    topline(ctx, '来自 ' + fmt(B[0], 1) + ' cm 深处的回声在 ' + fmt(tOf(B[0]), 0) + ' μs 后返回，因为脉冲以 1540 m/s 的速率往返于该处，而位于 ' + fmt(B[3], 1) + ' cm 的远壁在短促脉冲发出 ' + fmt(tOf(B[3]), 0) + ' μs 后应答。');
    readout(d.readout, `\\kd = \\frac{\\kvw \\kt}{2} = \\frac{(1540\\ \\text{m/s})(${fmt(tOf(B[0]), 0)}\\times10^{-6}\\ \\text{s})}{2} = ${fmt(B[0], 1)}\\ \\text{cm}`,
      '较深处的峰较低，因为组织在声音向下传播时吸收一点，往回传播时又吸收一点。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TMAX / 5), draw });
})();

/* =====================================================================
   SIM: what the choice of frequency settles. The wavelength in tissue is the
   finest detail a probe can resolve, and about 500 wavelengths is how deep it
   reaches; one is 50 times the other, so one curve carries both. Still: a
   frequency is a setting and the two lengths are its consequences.
===================================================================== */
(function () {
  const d = sim('sim-resolution-depth', 700);
  const fs = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 1, max: 20, step: 0.1, value: 7, unit: 'MHz', dec: 1, aria: '探头的频率',
    detents: [{ v: 7, label: '腹部' }, { v: 20, label: '眼' }], snap: false });
  const XL = 200, XR = 1320, SKIN = 180, DEEP = 320; /* the body in section, 0 to 80 cm deep */
  const xOf = (cm) => XL + (cm / 80) * (XR - XL);
  const G = { l: 200, r: 1320, t: 470, b: 620 };     /* fixed axes: 1 to 20 MHz by 0 to 1.6 mm, which is 0 to 80 cm of depth */
  const lamOf = (f) => (VT / (f * 1e6)) * 1000;      /* the wavelength in millimetres */
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('position'), fc = C('frequency'), vc = C('velocity');
    const f = fs.v, lam = lamOf(f), depth = 50 * lam;  /* 500 λ, in centimetres */
    /* the body in section, with the depth the probe reaches shaded */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(XL, SKIN, XR - XL, DEEP - SKIN); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(pc, 0.22); ctx.fillRect(XL, SKIN, xOf(Math.min(depth, 80)) - XL, DEEP - SKIN); ctx.restore();
    line(ctx, XL, SKIN, XR, SKIN, PAL.ink, 3);
    ctx.save(); ctx.fillStyle = F.ref('probe'); ctx.fillRect(XL - 44, SKIN - 34, 42, 68); ctx.restore();
    text(ctx, '探头', XL - 23, SKIN - 52, F.ref('probe'), { size: 19, weight: 600, align: 'center' });
    for (let cm = 0; cm <= 80; cm += 10) { line(ctx, xOf(cm), DEEP, xOf(cm), DEEP + 9, PAL.muted, 2); text(ctx, fmt(cm, 0), xOf(cm), DEEP + 30, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, '进入组织的深度 (cm)', XR, DEEP + 58, pc, { size: 20, weight: 600, align: 'right' });
    hbracket(ctx, XL, xOf(Math.min(depth, 80)), DEEP + 96, pc, '探头到达约 ' + fmt(depth, 1) + ' cm');
    /* the two organs the section names, so the reach can be read against something */
    [[3, '眼'], [11, '腹部']].forEach(([cm, nm]) => {
      line(ctx, xOf(cm), SKIN, xOf(cm), DEEP, alpha(PAL.ink, 0.5), 2, [6, 8]);
      text(ctx, nm, xOf(cm), DEEP - 18, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    });
    /* the wavelength, which is the finest detail, against frequency; the same curve read as the depth */
    const g = axes(ctx, G, [1, 20], [0, 1.6], { xl: '探头的频率 (MHz)', xc: fc, yl: '波长 λ (mm)', yc: pc, nx: 19, ny: 4, fx: (v) => (Math.round(v) % 2 === 1 ? fmt(v, 0) : ''), fy: (v) => fmt(v, 1) });
    curve(ctx, lamOf, 1, 20, g.X, g.Y, pc, 5, 300);
    pinned(ctx, G, g.X, g.Y, f, lam, pc, 'λ = ' + fmt(lam, 2) + ' mm');
    for (let i = 0; i <= 4; i++) { const y = G.b - (i / 4) * (G.b - G.t); text(ctx, fmt(i * 20, 0), G.r + 14, y, pc, { size: 17, align: 'left' }); }
    text(ctx, '同一条曲线，表示所达深度 500 λ (cm)', G.r + 14, G.t - 28, pc, { size: 18, weight: 600, align: 'right' });
    text(ctx, '组织中 v_w = 1540 m/s', 760, G.t + 22, vc, { size: 19, weight: 600, align: 'center' });
    topline(ctx, '在 ' + fmt(f, 1) + ' MHz 时，组织中的波长为 ' + fmt(lam, 2) + ' mm，所以无法分辨更精细的细节，而探头约能到达体内 ' + fmt(depth, 1) + ' cm 深处。');
    readout(d.readout, `\\klam = \\frac{\\kvw}{\\kf} = \\frac{1540\\ \\text{m/s}}{${sciTex(f * 1e6, 2)}\\ \\text{Hz}} = ${fmt(lam, 2)}\\ \\text{mm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: Doppler-shifted ultrasound. The broadcast frequency, the frequency the
   moving blood receives and the frequency it returns, and the beats the echo
   makes against the broadcast. Still: the beats are drawn against time over
   the whole of a fixed window, which shows the idea at once.
===================================================================== */
(function () {
  const d = sim('sim-doppler-ultrasound', 740);
  const vb = ctl(d.controls, { label: '\\kvblood', cls: 'velocity', min: 0, max: 60, step: 0.5, value: 20, unit: 'cm/s', dec: 1, aria: '血液朝向探头的速率',
    detents: [{ v: 20, label: '例题 17.8' }, { v: 30 }], snap: false });
  const fb = ctl(d.controls, { label: '\\kfsrc', cls: 'frequency', min: 1, max: 5, step: 0.05, value: 2.5, unit: 'MHz', dec: 2, aria: '换能器发射的频率' });
  const ART = { l: 260, r: 1300, y: 280, h: 92 };     /* the artery */
  const G = { l: 200, r: 1320, t: 470, b: 640 };      /* the mixed signal: a fixed window of 0 to 5 ms */
  const TW = 0.005, NCAR = 40;                        /* the window, and the carrier cycles drawn across it */
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), fc = C('frequency'), tc = C('time');
    const v = vb.v / 100, fsrc = fb.v * 1e6;
    const f1 = fsrc * (VT + v) / VT;                  /* the blood as a moving observer */
    const f2 = f1 * VT / (VT - v);                    /* the blood as a moving source */
    const fB = f2 - fsrc;
    /* the artery, its blood moving toward the probe, and the probe on the skin */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(ART.l, ART.y - ART.h / 2, ART.r - ART.l, ART.h); ctx.restore();
    const arc = F.ref('artery'), bl = F.ref('blood'), tdc = F.ref('transducer');
    line(ctx, ART.l, ART.y - ART.h / 2, ART.r, ART.y - ART.h / 2, arc, 3);
    line(ctx, ART.l, ART.y + ART.h / 2, ART.r, ART.y + ART.h / 2, arc, 3);
    text(ctx, '动脉', ART.r, ART.y + ART.h / 2 + 26, arc, { size: 19, align: 'right' });
    for (let i = 0; i < 7; i++) dot(ctx, ART.l + 130 + i * 150, ART.y, bl, true, 7);
    const VY = ART.y - ART.h / 2 - 34;
    if (v > 0) {
      arrow(ctx, 1080, VY, 1080 - 2.6 * vb.v - 40, VY, vc, 5);
      text(ctx, 'v_b = ' + fmt(vb.v, 1) + ' cm/s', 1096, VY, vc, { size: 21, weight: 600 });
    } else text(ctx, '血液静止', 1096, VY, bl, { size: 20 });
    text(ctx, v > 0 ? '朝向换能器运动的血液' : '血液', ART.l + 10, ART.y + ART.h / 2 + 26, bl, { size: 19 });
    ctx.save(); ctx.fillStyle = tdc; ctx.fillRect(120, ART.y - 34, 48, 68); ctx.restore();
    text(ctx, '换能器', 144, ART.y - 54, tdc, { size: 20, weight: 600, align: 'center' });
    /* the chain of three frequencies, each written where it belongs */
    const CH = 110;
    text(ctx, '发射 f_s = ' + hz(fsrc) + ' Hz', 200, CH, fc, { size: 21, weight: 600 });
    arrow(ctx, 640, CH, 730, CH, PAL.muted, 3);
    text(ctx, '血液接收到 ' + hz(f1) + ' Hz', 750, CH, fc, { size: 21, weight: 600 });
    arrow(ctx, 640, CH + 38, 730, CH + 38, PAL.muted, 3);
    text(ctx, '换能器接收到 f_obs = ' + hz(f2) + ' Hz', 750, CH + 38, fc, { size: 21, weight: 600 });
    text(ctx, '并把它送回', 200, CH + 38, PAL.muted, { size: 19 });
    /* the broadcast and the echo added, over a fixed window of five milliseconds */
    const g = axes(ctx, G, [0, 1000 * TW], [-1.1, 1.1], { xl: '时间 (ms)', xc: tc, yl: '两列波相加', yc: PAL.ink, nx: 5, ny: 2, fx: (x) => fmt(x, 0), fy: () => '' });
    const env = (t) => Math.cos(Math.PI * fB * (t / 1000));
    curve(ctx, (t) => env(t) * Math.cos(TAU * NCAR * t / (1000 * TW)), 0, 1000 * TW, g.X, g.Y, fc, 3, 1800);
    curve(ctx, (t) => Math.abs(env(t)), 0, 1000 * TW, g.X, g.Y, alpha(PAL.ink, 0.55), 2.5, 400);
    curve(ctx, (t) => -Math.abs(env(t)), 0, 1000 * TW, g.X, g.Y, alpha(PAL.ink, 0.55), 2.5, 400);
    if (fB > 1 / TW) {
      const TB = 1000 / fB;                            /* one beat, in milliseconds */
      hbracket(ctx, g.X(0), g.X(Math.min(TB, 1000 * TW)), G.t - 60, fc, '一个拍，' + fmt(TB, 2) + ' ms');
    }
    topline(ctx, v === 0 ? '血液静止时没有任何频移，回声以发射频率返回，两者根本不产生拍。'
      : '以 ' + fmt(vb.v, 1) + ' cm/s 的速率朝声源运动的血液，把 ' + hz(f2) + ' Hz 返回给 ' + hz(fsrc) + ' Hz 的探头，两者混合成 ' + fmt(fB, 0) + ' Hz 的拍。');
    readout(d.readout, `\\kfB = |\\kfobs - \\kfsrc| = |${hz(f2).replace(/,/g, '{,}')}\\ \\text{Hz} - ${hz(fsrc).replace(/,/g, '{,}')}\\ \\text{Hz}| = ${fmt(fB, 0)}\\ \\text{Hz}`,
      '载波在窗口内画成 ' + NCAR + ' 个周期，而真实的波约有 ' + hz(fsrc * TW) + ' 个，这样才能看出拍；拍频本身是按真实值画出的。');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
