/* Figures for section 17.3 Sound Intensity and Sound Level. Boots against the section's text article.
   A level is a reading and a pressure amplitude is a snapshot, so every
   figure here is a still picture: none registers a cycle, none carries a
   transport, and a slider's or a choice's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, axes, curve, person } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, I0 = 1e-12;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific notation: its mantissa to d decimals and its exponent */
function parts(v, d) {
  if (v === 0) return { m: fmt(0, d), e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (+m.toFixed(d) >= 10) { m /= 10; e += 1; }
  return { m: fmt(m, d), e };
}
/* the same number for the canvas ("5.04 × 10⁻⁴") and for the readout ("5.04\times10^{-4}") */
const sci = (v, d) => { const p = parts(v, d); return v === 0 ? '0' : p.m + ' × 10' + sup(p.e); };
const sciTex = (v, d) => { const p = parts(v, d); return v === 0 ? '0' : `${p.m}\\times10^{${p.e}}`; };
/* a power of ten written as an exponent alone, for the rungs of a ladder */
const pow10 = (e) => '10' + sup(e);
/* the intensity a level stands for, and the level an intensity has */
const iOf = (beta) => I0 * Math.pow(10, beta / 10);
const betaOf = (I) => 10 * Math.log10(I / I0);
/* the rungs of Table 17.2, in the book's order */
const RUNGS = [
  [0, 'Threshold of hearing at 1000 Hz'], [10, 'Rustle of leaves'], [20, 'Whisper at 1 m distance'], [30, 'Quiet home'],
  [40, 'Average home'], [50, 'Average office, soft music'], [60, 'Normal conversation'], [70, 'Noisy office, busy traffic'],
  [80, 'Loud radio, classroom lecture'], [90, 'Inside a heavy truck'], [100, 'Noisy factory, siren at 30 m'],
  [110, 'Damage from 30 min per day'], [120, 'Loud rock concert; threshold of pain'], [140, 'Jet airplane at 30 m'], [160, 'Bursting of eardrums'],
];

/* ---------- sprites, in ink ---------- */
/* a loudspeaker at (x, y), its cone opening in the direction `a` (radians), s scaling it */
function speaker(ctx, x, y, color, a, s) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.fillRect(-26, -14, 22, 28);
  ctx.beginPath(); ctx.moveTo(-4, -10); ctx.lineTo(22, -26); ctx.lineTo(22, 26); ctx.lineTo(-4, 10); ctx.closePath(); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   FIGURE 17.12: the gauge pressure of a sound wave against position, the
   air above it packed where the pressure is high, and the intensity the
   wave carries as a bar. Still: the graph is a snapshot and the idea is the
   amplitude, not the travel of the wave, so the figure answers its slider
   and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-pressure-amplitude', 640);
  const ps = ctl(d.controls, { label: '\\kdpamp', cls: 'pressure', min: 0, max: 2, step: 0.002, value: 0.656, unit: 'Pa', dec: 3, aria: 'the pressure amplitude of the wave',
    detents: [{ v: 0.5 }, { v: 0.656, label: 'Example 17.2' }], snap: false });
  const RHO = 1.29, VW = 331;                       /* air at 0 °C, as in Example 17.2 */
  const G = { l: 250, r: 940, t: 290, b: 540 };     /* the graph box; its pressure axis is fixed at −2 to +2 Pa */
  const LAM = 230, NCYC = 3;                        /* the drawn wavelength and how many cycles the frame holds */
  const AIR = { t: 120, b: 230 };                   /* the strip of air above the graph */
  const BAR = { x: 1200, w: 90, b: 540, t: 170, max: 5e-3 };   /* the intensity bar; its axis is fixed at 0 to 5.0 × 10⁻³ W/m² */
  /* the air: a fixed scatter of dots, so the same molecules are seen packing and spreading */
  const dots = []; let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 560; i++) dots.push({ x: G.l + rnd() * (G.r - G.l), y: AIR.t + 8 + rnd() * (AIR.b - AIR.t - 16), r: 3 + rnd() * 1.6 });
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), ic = C('intensity');
    const dp = ps.v, I = dp * dp / (2 * RHO * VW), k = TAU / LAM;
    /* the loudspeaker that makes the wave */
    speaker(ctx, 150, 410, PAL.ink, 0, 1.6);
    text(ctx, 'the source', 150, 480, PAL.muted, { size: 19, align: 'center' });
    /* the air, each dot moved along the wave by a displacement drawn far larger than life;
       the pressure is highest where the dots have gathered */
    const xi = 15 * dp;                              /* 30 units at the slider's end, under λ/2π so no dot crosses another */
    ctx.save(); ctx.fillStyle = PAL.ink;
    for (const q of dots) {
      const x = q.x - xi * Math.sin(k * (q.x - G.l));
      if (x < G.l || x > G.r) continue;
      ctx.beginPath(); ctx.arc(x, q.y, q.r, 0, TAU); ctx.fill();
    }
    ctx.restore();
    text(ctx, 'the air', G.l - 14, (AIR.t + AIR.b) / 2, PAL.muted, { size: 19, align: 'right' });
    /* the gauge pressure against position */
    const g = axes(ctx, G, [0, NCYC * LAM], [-2, 2], { xl: 'position along the wave', xc: PAL.ink, yl: 'gauge pressure (Pa)', yc: pc, nx: NCYC, ny: 4, fx: () => '', fy: (v) => fmt(v, 0) });
    curve(ctx, (x) => dp * Math.cos(k * x), 0, NCYC * LAM, g.X, g.Y, pc, 5, 240);
    /* the amplitude, bracketed from the axis to a crest */
    if (dp > 0.02) {
      vbracket(ctx, G.r + 26, g.Y(dp), g.Y(0), pc, 'Δp = ' + fmt(dp, 3) + ' Pa', 1);
      line(ctx, g.X(0), g.Y(dp), G.r + 26, g.Y(dp), alpha(pc, 0.35), 2, [4, 8]);
    }
    /* the intensity as a bar on its own fixed axis */
    line(ctx, BAR.x - 20, BAR.b, BAR.x - 20, BAR.t, PAL.muted, 2);
    for (let i = 0; i <= 5; i++) {
      const y = BAR.b - (i / 5) * (BAR.b - BAR.t);
      line(ctx, BAR.x - 28, y, BAR.x - 12, y, PAL.muted, 2);
      text(ctx, fmt(i, 0), BAR.x - 36, y, PAL.muted, { size: 17, align: 'right' });
    }
    text(ctx, 'I (×10⁻³ W/m²)', BAR.x + BAR.w / 2, BAR.t - 56, ic, { size: 20, weight: 600, align: 'center' });
    const h = Math.min(1, I / BAR.max) * (BAR.b - BAR.t);
    ctx.save(); ctx.fillStyle = alpha(ic, 0.85); ctx.fillRect(BAR.x, BAR.b - h, BAR.w, h); ctx.restore();
    line(ctx, BAR.x - 20, BAR.b, BAR.x + BAR.w + 30, BAR.b, PAL.muted, 2);
    /* the reading stands in the same place at every amplitude, above the axis, so a tall bar never reaches it */
    text(ctx, 'I = ' + sci(I, 2) + ' W/m²', BAR.x + BAR.w / 2, BAR.t - 26, ic, { size: 20, weight: 600, align: 'center' });
    headline(ctx, dp < 0.001 ? 'With no pressure variation there is no sound and no intensity.'
      : 'A pressure amplitude of ' + fmt(dp, 3) + ' Pa in air at 0 °C carries ' + sci(I, 2) + ' W/m².');
    readout(d.readout, `\\kIntens = \\frac{(\\kdpamp)^2}{2\\krho\\kvw} = \\frac{(${fmt(dp, 3)}\\ \\text{Pa})^2}{2(1.29\\ \\text{kg/m}^3)(331\\ \\text{m/s})} = ${sciTex(I, 2)}\\ \\text{W/m}^2`,
      'The intensity goes as the square of the pressure amplitude, so doubling Δp to ' + fmt(2 * dp, 3) + ' Pa would make ' + sci(4 * I, 2) + ' W/m², four times as much. The displacement of the air is drawn far larger than life, since the real motion is much too small to see.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the decibel ladder. The sounds of Table 17.2 as rungs, the intensity
   climbing tenfold at each while the level climbs 10 dB; two marks the
   reader sets, the bracket between them, and the same two intensities on a
   linear scale beside. Still: a level is a reading, not a motion.
===================================================================== */
(function () {
  const d = sim('sim-decibel-ladder', 820);
  const b1 = ctl(d.controls, { label: '\\beta_1', cls: '', min: 0, max: 160, step: 1, value: 60, unit: 'dB', dec: 0, aria: 'the first sound intensity level' });
  const b2 = ctl(d.controls, { label: '\\beta_2', cls: '', min: 0, max: 160, step: 1, value: 90, unit: 'dB', dec: 0, aria: 'the second sound intensity level' });
  const RAIL = 300, TOP = 130, BOT = 770;           /* the ladder: 0 dB at the bottom, 160 dB at the top, 4 units per dB */
  const yOf = (b) => BOT - (b / 160) * (BOT - TOP);
  const BR = 880;                                   /* where the bracket between the two marks stands */
  const LIN = { l: 1010, r: 1330, b: 740, t: 170 }; /* the linear panel */
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('intensity');
    const v1 = b1.v, v2 = b2.v, I1 = iOf(v1), I2 = iOf(v2), diff = v2 - v1, ratio = I2 / I1;
    /* the rails and the rungs */
    line(ctx, RAIL, BOT + 10, RAIL, TOP - 10, PAL.muted, 3);
    line(ctx, RAIL + 480, BOT + 10, RAIL + 480, TOP - 10, PAL.rule, 1.5);
    text(ctx, 'I (W/m²)', 250, 76, ic, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'β (dB)', RAIL + 20, 76, PAL.ink, { size: 20, weight: 600 });
    for (const [b] of RUNGS) line(ctx, RAIL - 12, yOf(b), RAIL + 480, yOf(b), PAL.rule, 1.5);
    /* the two marks, each with a line across the ladder to the bracket, drawn under the rung labels */
    const marks = [[v1, I1, 'β₁'], [v2, I2, 'β₂']];
    marks.forEach(([b]) => line(ctx, 60, yOf(b), BR + 6, yOf(b), alpha(ic, 0.45), 2, [8, 8]));
    for (const [b, name] of RUNGS) {
      const y = yOf(b);
      text(ctx, pow10(b / 10 - 12), 250, y, ic, { size: 17, weight: 600, align: 'right', bg: PAL.panel });
      text(ctx, fmt(b, 0), RAIL + 20, y, PAL.ink, { size: 17, weight: 600, bg: PAL.panel });
      text(ctx, name, RAIL + 78, y, PAL.muted, { size: 17, bg: PAL.panel });
    }
    marks.forEach(([b, I, nm], i) => {
      const y = yOf(b);
      dot(ctx, RAIL, y, ic, true, 10);
      const up = (i === 1) === (v2 >= v1);         /* the higher mark labels above its line, the lower below */
      text(ctx, nm + ' = ' + fmt(b, 0) + ' dB', 60, up ? Math.max(104, y - 20) : Math.min(796, y + 20), PAL.ink, { size: 19, weight: 600, bg: PAL.panel });
    });
    /* the bracket between them */
    if (Math.abs(diff) >= 1) {
      const ya = yOf(Math.max(v1, v2)), yb = yOf(Math.min(v1, v2));
      vbracket(ctx, BR, ya, yb, PAL.ink);
      const ym = (ya + yb) / 2;
      text(ctx, 'β₂ − β₁ = ' + (diff < 0 ? '−' : '') + fmt(Math.abs(diff), 0) + ' dB', BR + 18, ym - 16, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
      text(ctx, 'I₂/I₁ = ' + (Math.abs(diff) % 10 === 0 ? pow10(diff / 10) : sci(ratio, 2)), BR + 18, ym + 16, ic, { size: 20, weight: 600, bg: PAL.panel });
    } else {
      text(ctx, 'β₂ − β₁ = 0 dB', BR + 18, yOf(v1) - 16, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
      text(ctx, 'I₂/I₁ = 1', BR + 18, yOf(v1) + 16, ic, { size: 20, weight: 600, bg: PAL.panel });
    }
    /* the same two intensities on one linear scale */
    const big = Math.max(I1, I2), full = LIN.b - LIN.t;
    line(ctx, LIN.l, LIN.b, LIN.r, LIN.b, PAL.muted, 2);
    text(ctx, 'the same two intensities', (LIN.l + LIN.r) / 2, 76, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'on one linear scale', (LIN.l + LIN.r) / 2, 102, PAL.muted, { size: 17, align: 'center' });
    [[I1, 'I₁'], [I2, 'I₂']].forEach(([I, nm], i) => {
      const x = LIN.l + 40 + i * 160, w = 100, h = (I / big) * full, hd = Math.max(h, 3);
      ctx.save(); ctx.fillStyle = alpha(ic, 0.85); ctx.fillRect(x, LIN.b - hd, w, hd); ctx.restore();
      text(ctx, nm, x + w / 2, LIN.b + 26, ic, { size: 20, weight: 600, align: 'center' });
      text(ctx, sci(I, 2), x + w / 2, LIN.b - hd - 22, ic, { size: 17, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
      if (h < 3 && big > 0) text(ctx, 'too small to draw', x + w / 2, LIN.b - hd - 46, PAL.muted, { size: 15, align: 'center' });
    });
    const ratioWords = Math.abs(diff) % 10 === 0 ? pow10(diff / 10) : sci(ratio, 2);
    topline(ctx, diff === 0 ? 'Two sounds of the same level have the same intensity.'
      : 'A ' + fmt(v2, 0) + ' dB sound is ' + fmt(Math.abs(diff), 0) + ' dB ' + (diff > 0 ? 'above' : 'below') + ' a ' + fmt(v1, 0) + ' dB sound, so the ratio of their intensities is ' + ratioWords + '.');
    readout(d.readout, `\\beta_2 - \\beta_1 = 10\\log_{10}\\frac{\\kItwo}{\\kIone} = 10\\log_{10}\\frac{${sciTex(I2, 2)}\\ \\text{W/m}^2}{${sciTex(I1, 2)}\\ \\text{W/m}^2} = ${diff < 0 ? '-' : ''}${fmt(Math.abs(diff), 0)}\\ \\text{dB}`,
      'Each level is read from its intensity by β = 10 log₁₀(I/I₀) with I₀ = 10⁻¹² W/m²: ' + fmt(v1, 0) + ' dB is ' + sci(I1, 2) + ' W/m² and ' + fmt(v2, 0) + ' dB is ' + sci(I2, 2) + ' W/m². Every 10 dB on the ladder is a factor of ten in intensity, and 3 dB is a factor of two.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: many sources sounding together. A listener at the centre of a ring
   of identical sources; the intensity of one and of all of them on a
   horizontal ladder, with the rise in level bracketed. Still: the count is
   a choice and nothing in the scene has a clock.
===================================================================== */
(function () {
  const d = sim('sim-many-sources', 720);
  const bs = ctl(d.controls, { label: '\\beta', cls: '', min: 0, max: 120, step: 1, value: 40, unit: 'dB', dec: 0, aria: 'the sound intensity level one source makes at the listener',
    detents: [{ v: 40, label: 'a housefly' }, { v: 110 }], snap: false });
  const ns = choice(d.controls, { label: 'N', options: [1, 2, 5, 10, 100, 1000].map((n) => ({ value: String(n), label: String(n) })), value: '1000', aria: 'the number of sources' });
  const CX = 420, CY = 290, R = 160;                /* the ring */
  const LAD = { l: 130, r: 1310, y: 610 };          /* the ladder: 0 to 160 dB, fixed */
  const xOf = (b) => LAD.l + (b / 160) * (LAD.r - LAD.l);
  const PX = 760;                                   /* the panel of numbers at the right */
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('intensity');
    const b = bs.v, N = +ns.value, I1 = iOf(b), IN = N * I1, bN = betaOf(IN), rise = 10 * Math.log10(N);
    /* the listener and the ring of sources */
    if (N <= 10) {
      for (let i = 0; i < N; i++) { const a = -Math.PI / 2 + (i / N) * TAU; speaker(ctx, CX + R * Math.cos(a), CY + R * Math.sin(a), PAL.ink, a + Math.PI, 1); }
    } else {
      const rings = N === 100 ? 1 : 4;
      ctx.save(); ctx.fillStyle = PAL.ink;
      for (let i = 0; i < N; i++) { const ring = i % rings, r = R - 12 * (rings - 1) / 2 + 12 * ring, a = (i / N) * TAU; ctx.beginPath(); ctx.arc(CX + r * Math.cos(a), CY + r * Math.sin(a), N === 100 ? 5 : 2.4, 0, TAU); ctx.fill(); }
      ctx.restore();
    }
    person(ctx, CX, CY + 40, PAL.ink, { s: 1.1 });
    text(ctx, 'the listener', CX, CY + 66, PAL.muted, { size: 17, align: 'center' });
    if (N === 1) text(ctx, 'the source', CX + 44, CY - R, PAL.muted, { size: 17 });
    else text(ctx, 'the ' + fmt(N, 0) + ' sources', CX - R - 34, CY, PAL.muted, { size: 17, align: 'right' });
    /* the panel of numbers */
    text(ctx, 'each source', PX, 150, PAL.muted, { size: 19 });
    text(ctx, 'I_one = ' + sci(I1, 2) + ' W/m², which is ' + fmt(b, 0) + ' dB', PX, 186, ic, { size: 21, weight: 600 });
    text(ctx, 'N = ' + fmt(N, 0), PX, 244, PAL.ink, { size: 21, weight: 600 });
    text(ctx, 'all of them together', PX, 302, PAL.muted, { size: 19 });
    text(ctx, 'I = N × I_one = ' + sci(IN, 2) + ' W/m²', PX, 338, ic, { size: 21, weight: 600 });
    text(ctx, 'β = 10 log₁₀(I/I₀) = ' + fmt(bN, 0) + ' dB', PX, 376, PAL.ink, { size: 21, weight: 600 });
    text(ctx, 'a rise of 10 log₁₀ N = ' + fmt(rise, 0) + ' dB', PX, 414, PAL.ink, { size: 19 });
    /* the ladder */
    line(ctx, LAD.l - 10, LAD.y, LAD.r + 10, LAD.y, PAL.muted, 3);
    for (let v = 0; v <= 160; v += 10) {
      const x = xOf(v);
      line(ctx, x, LAD.y - 8, x, LAD.y + 8, PAL.muted, 2);
      text(ctx, fmt(v, 0), x, LAD.y + 30, PAL.ink, { size: 17, align: 'center' });
      if (v % 20 === 0) text(ctx, pow10(v / 10 - 12), x, LAD.y - 30, ic, { size: 17, weight: 600, align: 'center' });
    }
    text(ctx, 'β (dB)', LAD.r + 10, LAD.y + 88, PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'I (W/m²)', LAD.l - 10, LAD.y - 62, ic, { size: 20, weight: 600 });
    /* the two marks and the rise between them */
    const x1 = xOf(b), xN = xOf(Math.min(bN, 160));
    dot(ctx, x1, LAD.y, ic, false, 10);
    dot(ctx, xN, LAD.y, ic, true, 10);
    if (N > 1) {
      hbracket(ctx, x1, xN, LAD.y - 96, PAL.ink, '+' + fmt(rise, 0) + ' dB');
      text(ctx, 'one', x1, LAD.y + 58, PAL.muted, { size: 17, align: 'center' });
      text(ctx, 'all ' + fmt(N, 0), xN, LAD.y + 58, PAL.muted, { size: 17, align: 'center' });
    } else text(ctx, 'one source', x1, LAD.y + 58, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, N === 1 ? 'One source of ' + fmt(b, 0) + ' dB makes a sound of ' + fmt(b, 0) + ' dB at the listener.'
      : fmt(N, 0) + ' sources of ' + fmt(b, 0) + ' dB each make a sound of ' + fmt(bN, 0) + ' dB, since their intensities add to ' + fmt(N, 0) + ' times one.');
    readout(d.readout, `\\kIntens = N\\kIntens_{\\text{one}} = ${sciTex(IN, 2)}\\ \\text{W/m}^2, \\quad \\beta = 10\\log_{10}(\\kIntens/\\kIo) = ${fmt(bN, 0)}\\ \\text{dB}`,
      'The intensities add when interference between the sources can be neglected. The level rises by 10 log₁₀ N, which is 3 dB for every doubling and 10 dB for every factor of ten, and never by N times the level of one source.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
