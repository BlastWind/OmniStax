/* Figures for section 16.11 Energy in Waves: Intensity. All three are still: nothing here has a clock. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.11'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, strip, axes, pinned, curve, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a number in scientific notation for a readout, 5.04 × 10⁶ */
function sci(v, d = 2) { if (v === 0) return '0'; const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times10^{${e}}`; }
const SUP = { '-': '\u207b', 0: '\u2070', 1: '\u00b9', 2: '\u00b2', 3: '\u00b3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079' };
function sciPlain(v, d = 2) { if (v === 0) return '0'; const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return fmt(m, d) + ' \u00d7 10' + String(e).split('').map((c) => SUP[c]).join(''); }
/* a filled bar standing on a baseline */
function bar(ctx, cx, base, w, h, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.35); ctx.fillRect(cx - w / 2, base - h, w, h);
  ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(cx - w / 2, base - h, w, h); ctx.restore();
}

/* =====================================================================
   SIM 1: the energy of a wave against its amplitude. The wave along the
   top, F = kx below with the work shaded under it, and two bars for the
   energy the reference wave and this one carry. Still.
===================================================================== */
(function () {
  const d = sim('sim-amplitude-energy', 700);
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.01, max: 0.2, step: 0.005, value: 0.1, unit: 'm', dec: 3, aria: 'amplitude' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 10, max: 200, step: 5, value: 50, unit: 'N/m', dec: 0 });
  const XR = 0.05;                        /* the reference amplitude the bars and the ratios are taken against */
  function draw() {
    const { ctx } = begin(d.c);
    /* Both axes are fixed and never rescaled: the displacement axis is the amplitude slider's own
       0 to 0.20 m, and the force axis runs to 40 N, which is the stiffest spring at the largest
       amplitude the sliders allow. The bars are scaled to the same largest state. */
    const XM = 0.2, FM = 40, SC = 600;
    const wl = 480, y0 = 240, l = 130, r = 1300;
    /* the wave, drawn at the amplitude set, with the reference amplitude dashed behind it */
    line(ctx, l, y0, r, y0, PAL.muted, 2, [10, 10]);
    curve(ctx, (s) => XR * Math.cos(TAU * s / wl), 0, r - l, (s) => l + s, (v) => y0 - v * SC, alpha(PAL.ink, 0.35), 3, 240);
    curve(ctx, (s) => X.v * Math.cos(TAU * s / wl), 0, r - l, (s) => l + s, (v) => y0 - v * SC, C('position'), 5, 240);
    vbracket(ctx, l + wl, y0, y0 - X.v * SC, C('position'));
    text(ctx, 'X = ' + fmt(X.v, 3) + ' m', l + wl + 18, y0 - X.v * SC - 26, C('position'), { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, 'the reference wave, X = ' + fmt(XR, 3) + ' m', l, y0 + 96, PAL.muted, { size: 18 });
    /* the force against the displacement, with the work shaded under it */
    const box = { l: 190, r: 790, t: 400, b: 620 };
    const { X: gx, Y: gy } = axes(ctx, box, [0, XM], [0, FM], { xl: 'displacement x (m)', xc: C('position'), yl: 'F (N)', yc: C('force'), nx: 4, ny: 4, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0) });
    const Fx = Math.min(k.v * X.v, FM);
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.3); ctx.beginPath(); ctx.moveTo(gx(0), gy(0)); ctx.lineTo(gx(Math.min(X.v, FM / k.v)), gy(0)); ctx.lineTo(gx(Math.min(X.v, FM / k.v)), gy(Fx)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, gx(0), gy(0), gx(Math.min(XM, FM / k.v)), gy(Math.min(FM, k.v * XM)), C('force'), 5);
    text(ctx, 'F = kx', gx(XM * 0.55) + 8, gy(Math.min(FM * 0.95, k.v * XM * 0.55)) - 24, C('force'), { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, 'shaded: the work done, ½kX²', box.l + 14, box.t + 22, C('energy'), { size: 19, weight: 600, bg: PAL.panel });
    pinned(ctx, box, gx, gy, X.v, k.v * X.v, C('force'), fmt(k.v * X.v, 1) + ' N');
    /* the bars: the energy each wave carries, against the reference */
    const base = 620, bw = 130, HMAX = 180, top = XM * XM;
    for (const [i, amp, lab] of [[0, XR, 'the reference wave'], [1, X.v, 'this wave']]) {
      const cx = 990 + i * 230, h = Math.max(2, HMAX * (amp * amp) / top);
      bar(ctx, cx, base, bw, h, C('energy'));
      text(ctx, fmt((amp * amp) / (XR * XR), 2) + '×', cx, base - h - 22, C('energy'), { size: 20, weight: 600, align: 'center' });
      text(ctx, lab, cx, base + 26, PAL.muted, { size: 18, align: 'center' });
    }
    line(ctx, 900, base, 1300, base, PAL.muted, 2);
    text(ctx, 'energy carried, relative to the reference wave', 1100, 386, C('energy'), { size: 20, weight: 600, align: 'center' });
    const ratio = (X.v * X.v) / (XR * XR);
    topline(ctx, 'An amplitude of ' + fmt(X.v, 3) + ' m is ' + fmt(X.v / XR, 2) + ' times the reference amplitude, and it carries ' + fmt(ratio, 2) + ' times the energy');
    readout(d.readout, `\\kW \\propto \\kF\\kx = \\kk\\kx^{2}:\\quad \\kk\\kX^{2} = (${fmt(k.v, 0)}\\ \\text{N/m})(${fmt(X.v, 3)}\\ \\text{m})^{2} = ${fmt(k.v * X.v * X.v, 3)}\\ \\text{N}\\cdot\\text{m}`,
      'The shaded triangle is the work done to pull the displacement out to the amplitude, ½kX² = ' + fmt(0.5 * k.v * X.v * X.v, 3) + ' J. Because the energy goes as the amplitude squared, doubling the amplitude gives four times the energy, and the intensity rises with it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM 2: intensity as power per unit area. A steady beam on a collector,
   the curve I = P/A below it, and E = IAt in the readout. Example 16.9's
   numbers are the defaults, and its part (b) is the focused button. Still.
===================================================================== */
(function () {
  const d = sim('sim-intensity-area', 640);
  const P = ctl(d.controls, { label: '\\kP', cls: 'power', min: 50, max: 1000, step: 10, value: 350, unit: 'W', dec: 0, aria: 'power' });
  const A = ctl(d.controls, { label: 'A', cls: '', min: 0.05, max: 2, step: 0.05, value: 0.5, unit: 'm²', dec: 3, aria: 'area' });
  const t = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.5, max: 8, step: 0.5, value: 4, unit: 'h', dec: 2, aria: 'time' });
  const mode = choice(d.controls, { label: '\\text{the beam}', options: [{ value: 'spread', label: 'spread' }, { value: 'focused', label: 'focused, 200\u00d7 smaller' }], value: 'spread', aria: 'whether the beam is focused' });
  function draw() {
    const { ctx } = begin(d.c);
    /* Both axes are fixed and never rescaled: the area axis is the slider's own 0 to 2.00 m², and
       the intensity axis runs to 2000 W/m², which is the largest power on the smallest area the
       spread beam reaches. The focused state lies far off the left of the area axis and is pinned
       at that edge with its value, as its intensity is 200 times the one drawn. */
    const AM = 2, IM = 2000;
    const focused = mode.value === 'focused';
    const Ause = focused ? A.v / 200 : A.v, I = P.v / Ause, E = I * Ause * t.v * 3600;
    /* the scene: a steady beam falling on the collector, with the lens where it is focused */
    const cy = 250, cx = 700, w = Math.max(40, 300 * Math.sqrt(A.v / 0.5)), wf = Math.max(10, w / Math.sqrt(200));
    const wide = focused ? wf : w;
    for (let i = -3; i <= 3; i++) {
      const sx = cx + (i * w) / 7, ex = cx + (i * wide) / 7;
      arrow(ctx, sx, 110, ex, cy - 26, C('power'), 4);
    }
    if (focused) { ctx.save(); ctx.strokeStyle = C('power'); ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(cx, 185, w / 2, 16, 0, 0, TAU); ctx.stroke(); ctx.restore(); text(ctx, 'the magnifying glass', cx - w / 2 - 16, 185, PAL.muted, { size: 18, align: 'right' }); }
    block(ctx, cx, cy, Math.max(24, wide), 30, PAL.ink);
    hbracket(ctx, cx - Math.max(24, wide) / 2, cx + Math.max(24, wide) / 2, cy + 74, PAL.ink, 'A = ' + (focused ? sciPlain(Ause, 2) : fmt(Ause, 3)) + ' m²');
    text(ctx, 'P = ' + fmt(P.v, 0) + ' W through the beam', cx, 90, C('power'), { size: 20, weight: 600, align: 'center' });
    /* the curve I = P/A, with the state on it */
    const box = { l: 220, r: 1240, t: 350, b: 560 };
    const { X: gx, Y: gy } = axes(ctx, box, [0, AM], [0, IM], { xl: 'area A (m²)', xc: PAL.ink, yc: C('intensity'), nx: 4, ny: 4, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0) });
    text(ctx, 'I (W/m²)', box.r, box.t - 24, C('intensity'), { size: 20, weight: 600, align: 'right' });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, (a) => P.v / a, P.v / IM, AM, gx, gy, C('intensity'), 5, 220);
    ctx.restore();
    text(ctx, 'I = P/A', gx(AM * 0.62), gy(P.v / (AM * 0.62)) - 30, C('intensity'), { size: 20, weight: 600, bg: PAL.panel });
    pinned(ctx, box, gx, gy, Ause, I, C('intensity'), (I >= 10000 ? sciPlain(I, 2) : fmt(I, 0)) + ' W/m²');
    topline(ctx, fmt(P.v, 0) + ' W through ' + (focused ? sciPlain(Ause, 2) : fmt(Ause, 3)) + ' m² is an intensity of ' + (I >= 10000 ? sciPlain(I, 2) : fmt(I, 0)) + ' W/m², and in ' + fmt(t.v, 2) + ' h it delivers ' + sciPlain(E, 2) + ' J');
    readout(d.readout, `\\kIntens = \\frac{\\kP}{A} = \\frac{${fmt(P.v, 0)}\\ \\text{W}}{${focused ? sci(Ause, 2) : fmt(Ause, 3)}\\ \\text{m}^{2}} = ${I >= 10000 ? sci(I, 2) : fmt(I, 0)}\\ \\text{W/m}^{2}`,
      focused
        ? 'The same power through an area 200 times smaller is 200 times as intense: I′/I = A/A′ = 200. In ' + fmt(t.v, 2) + ' h the energy that falls on the smaller area is E = IAt = ' + sciPlain(E, 2) + ' J, the same energy as before, gathered into a smaller patch.'
        : 'The energy that falls on the collector is E = IAt = (' + fmt(I, 0) + ' W/m²)(' + fmt(Ause, 3) + ' m²)(' + fmt(t.v, 2) + ' h × 3600 s/h) = ' + sciPlain(E, 2) + ' J. Halving the area doubles the intensity, because the same power crosses it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM 3 (Figure 16.41): two speakers in a room. The shading is the
   intensity, dark where the two waves arrive in step and pale where they
   cancel. Still: the pattern stands where it is. 
===================================================================== */
(function () {
  const d = sim('sim-speaker-interference', 900);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 0.2, max: 2, step: 0.05, value: 0.8, unit: 'm', dec: 2, aria: 'wavelength' });
  const sep = ctl(d.controls, { label: 'd', cls: 'position', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'm', dec: 1, aria: 'the spacing of the speakers' });
  const post = ctl(d.controls, { label: 'x', cls: 'position', min: -4, max: 4, step: 0.1, value: 0, unit: 'm', dec: 2, aria: 'the listening post along the far wall' });
  /* the room is 8.0 m across and 6.0 m deep, drawn at 120 units to the metre across and 90 down */
  const L = 220, R = 1180, TOP = 240, BOT = 780, SX = (R - L) / 8, SY = (BOT - TOP) / 6;
  const px = (x) => (L + R) / 2 + x * SX, py = (y) => TOP + y * SY;
  function draw() {
    const { ctx } = begin(d.c);
    const sx = sep.v / 2, hue = C('intensity');
    /* each cell of the room is shaded by the intensity two identical 1.00 W/m² waves make there */
    const at = (x, y) => {
      const r1 = Math.hypot(x + sx, y), r2 = Math.hypot(x - sx, y);
      const c = Math.cos(Math.PI * (r1 - r2) / lam.v);
      return { r1, r2, amp: 2 * Math.abs(c), I: 4 * c * c };
    };
    const STEP = 12;
    ctx.save();
    for (let X0 = L; X0 < R; X0 += STEP) for (let Y0 = TOP; Y0 < BOT; Y0 += STEP) {
      const x = (X0 + STEP / 2 - (L + R) / 2) / SX, y = (Y0 + STEP / 2 - TOP) / SY;
      if (y < 0.08) continue;
      ctx.fillStyle = alpha(hue, 0.08 + 0.62 * at(x, y).I / 4);
      ctx.fillRect(X0, Y0, STEP + 1, STEP + 1);
    }
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(L, TOP, R - L, BOT - TOP); ctx.restore();
    /* the two speakers on the near wall */
    for (const [s, lab] of [[-sx, 'left speaker'], [sx, 'right speaker']]) {
      block(ctx, px(s), TOP - 4, 52, 44, PAL.ink);
      text(ctx, lab, px(s) + (s < 0 ? -34 : 34), TOP - 48, PAL.muted, { size: 18, align: s < 0 ? 'right' : 'left' });
    }
    hbracket(ctx, px(-sx), px(sx), TOP - 78, C('position'), 'd = ' + fmt(sep.v, 1) + ' m');
    /* the listening post on the far wall, with the two paths drawn to it */
    const q = at(post.v, 6), lx = px(post.v), ly = py(6);
    line(ctx, px(-sx), TOP, lx, ly, PAL.ink, 2, [8, 8]);
    line(ctx, px(sx), TOP, lx, ly, PAL.ink, 2, [8, 8]);
    dot(ctx, lx, ly, C('intensity'), true, 11);
    text(ctx, 'the listening post, x = ' + fmt(post.v, 2) + ' m', lx, ly - 36, C('position'), { size: 19, weight: 600, align: lx > R - 260 ? 'right' : lx < L + 260 ? 'left' : 'center', bg: PAL.panel });
    text(ctx, 'r₁ = ' + fmt(q.r1, 2) + ' m', (px(-sx) + lx) / 2 - 90, (TOP + ly) / 2, PAL.ink, { size: 18, weight: 600, bg: PAL.panel });
    text(ctx, 'r₂ = ' + fmt(q.r2, 2) + ' m', (px(sx) + lx) / 2 + 90, (TOP + ly) / 2, PAL.ink, { size: 18, weight: 600, bg: PAL.panel });
    /* a scale along the near wall, and the legend */
    for (let m = -4; m <= 4; m++) { line(ctx, px(m), BOT, px(m), BOT + 8, PAL.muted, 2); text(ctx, fmt(m, 0), px(m), BOT + 28, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'distance along the far wall (m)', R, BOT + 58, C('position'), { size: 20, weight: 600, align: 'right' });
    for (const [i, lab] of [[0, 'dark: the waves arrive in step, I = 4.00 W/m²'], [1, 'pale: the waves cancel, I = 0']]) {
      const yy = 870;
      ctx.save(); ctx.fillStyle = alpha(hue, i ? 0.08 : 0.7); ctx.fillRect(300 + i * 480, yy - 12, 26, 24); ctx.restore();
      text(ctx, lab, 336 + i * 480, yy, PAL.muted, { size: 18 });
    }
    const ratio = q.amp * q.amp / 4;
    topline(ctx, q.I > 3.9 ? 'At x = ' + fmt(post.v, 2) + ' m the two paths differ by ' + fmt(Math.abs(q.r1 - q.r2), 2) + ' m, a whole number of wavelengths, so the waves arrive in step and the intensity is 4.00 W/m²'
      : q.I < 0.1 ? 'At x = ' + fmt(post.v, 2) + ' m the two paths differ by ' + fmt(Math.abs(q.r1 - q.r2), 2) + ' m, half a wavelength more than a whole number, so the waves cancel and the intensity is very nearly zero'
      : 'At x = ' + fmt(post.v, 2) + ' m the two paths differ by ' + fmt(Math.abs(q.r1 - q.r2), 2) + ' m, and the two waves of 1.00 W/m² each give ' + fmt(q.I, 2) + ' W/m² together');
    readout(d.readout, `\\frac{\\kIntensprime}{\\kIntens} = \\left(\\frac{\\kXprime}{\\kX}\\right)^{2} = (${fmt(q.amp, 2)})^{2} = ${fmt(4 * ratio, 2)},\\quad \\kIntensprime = ${fmt(q.I, 2)}\\ \\text{W/m}^{2}`,
      'Each speaker alone gives I = 1.00 W/m² at the post. Where the two waves arrive in step the amplitude is X′ = 2X and the intensity is 4.00 W/m², four times either wave alone; where they arrive out of step the amplitude is zero and so is the intensity. The energy is not created at the loud places, it is gathered there from the silent ones.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
