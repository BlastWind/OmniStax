/* Figures for section 34.3 Superstrings.
   The page binds position only: every length on the scale. Counts of orders
   of magnitude and ratios of lengths are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['34.3'] = function (root, F) {
const { C, PAL, alpha, ctl, register, begin, line, dot, text, topline, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const pow10 = (n) => '10' + String(n).split('').map((ch) => SUP[ch]).join('');

/* =====================================================================
   sim-size-scale · Sim · still · flat (rule 28.1)
   One size on a scale of lengths in powers of ten. Scale: log₁₀(D/m) from
   −35 to 27, fixed; the slider stops at 26.
===================================================================== */
(function () {
  const d = sim('sim-size-scale', 440);
  const LO = -35, HI = 27, X0 = 90, X1 = 1310, X = (s) => X0 + (X1 - X0) * (s - LO) / (HI - LO);
  const OBS = -18, YR = 250;
  /* labelled marks, two rows under the scale so no two collide */
  const MARKS = [
    { s: -35, name: '超弦', row: 0, align: 'left' },
    { s: -18, name: '已观测到的最小细节', row: 1, align: 'center' },
    { s: -10, name: '原子', row: 0, align: 'center', what: '一个原子，直径约' },
    { s: 0, name: '人', row: 0, align: 'center', what: '一个人，大小约' },
    { s: 7, name: '地球', row: 0, align: 'center', what: '地球，直径约' },
    { s: 26, name: '已知宇宙', row: 0, align: 'right', what: '已知宇宙，直径约' },
  ];
  const HOVERS = [
    { s: -15, name: '质子，直径约 10⁻¹⁵ m' },
    { s: 9, name: '太阳，直径约 10⁹ m' },
    { s: 21, name: '银河系，直径约 10²¹ m' },
  ];
  const str = F.tween(d, 1);
  const Ls = ctl(d.controls, { label: '\\log_{10}(\\kD/\\text{m})', cls: 'position', min: LO, max: 26, step: 1, value: LO, unit: '', dec: 0,
    aria: '线度，以 10 的幂表示（单位为米）',
    specials: [{ at: LO, label: '超弦' }, { at: OBS, label: '观测到的' }],
    onInput: () => str.to(Ls.v === LO ? 1 : 0, 900) });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  function headlineFor(s) {
    const gap = Math.abs(s - OBS), n = gap + ' 个数量级';
    const where = s < OBS ? '比迄今已观测到的最小细节小 ' + n + '。' : '比迄今已观测到的最小细节大 ' + n + '。';
    if (s === LO) return '超弦的直径约为 ' + pow10(s) + ' m，' + where;
    if (s === OBS) return pow10(s) + ' m 的细节是迄今直接观测到的最小细节。';
    const m = MARKS.find((k) => k.s === s && k.what);
    return (m ? m.what + ' ' + pow10(s) + ' m，' : '线度 ' + pow10(s) + ' m ') + where;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = Ls.v, XC = C('position'), k = str.v;
    hits = [];

    /* the range not yet observed, shaded under the scale */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fillRect(X(LO), YR - 26, X(OBS) - X(LO), 52); ctx.restore();

    /* the two spans of 17 orders of magnitude */
    hbracket(ctx, X(LO), X(OBS), 150, PAL.ink, '17 个数量级', { size: 18 });
    hbracket(ctx, X(-10), X(7), 150, PAL.ink, '17 个数量级', { size: 18 });
    line(ctx, X(-10), 160, X(-10), YR - 30, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, X(7), 160, X(7), YR - 30, alpha(PAL.ink, 0.35), 2, [4, 8]);

    /* the scale, a hard stop at the smallest size */
    line(ctx, X0, YR, X1, YR, PAL.muted, 3);
    line(ctx, X0, YR - 22, X0, YR + 22, PAL.ink, 5);
    for (let e = -35; e <= 25; e += 5) {
      line(ctx, X(e), YR - 8, X(e), YR + 8, PAL.muted, 2);
      text(ctx, pow10(e) + ' m', X(e), YR + 44, XC, { size: 16, align: 'center', bg: PAL.panel });
    }
    for (let e = LO; e <= HI; e++) if (e % 5) line(ctx, X(e), YR - 4, X(e), YR + 4, alpha(PAL.muted, 0.6), 1.5);

    const rowY = [YR + 86, YR + 122];
    for (const m of MARKS) {
      const x = X(m.s);
      dot(ctx, x, YR, PAL.ink, false, 7);
      line(ctx, x, YR + 60, x, rowY[m.row] - 14, alpha(PAL.ink, 0.35), 2);
      const ax = m.align === 'left' ? x - 6 : m.align === 'right' ? x + 6 : x;
      text(ctx, m.name, ax, rowY[m.row], PAL.ink, { size: 18, align: m.align, bg: PAL.panel });
    }
    for (const h of HOVERS) { const x = X(h.s); line(ctx, x, YR - 12, x, YR + 12, PAL.ink, 2); hits.push({ x, y: YR, r: 14, name: h.name }); }

    /* the size: a dot that becomes a small closed string at the smallest size */
    const x = X(s), y = YR - 58, R = 9 + 9 * k, A = 5 * k, N = 72;
    line(ctx, x, y + R + 4, x, YR - 2, alpha(XC, 0.7), 3, [10, 10]);
    ctx.save(); ctx.fillStyle = alpha(XC, 1 - 0.85 * k); ctx.strokeStyle = XC; ctx.lineWidth = 3; ctx.beginPath();
    for (let j = 0; j <= N; j++) {
      const a = 2 * Math.PI * j / N, r = R + A * Math.sin(5 * a);
      if (j) ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a)); else ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
    }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    hits.push({ x, y, r: 20, name: '线度 D = ' + pow10(s) + ' m' });

    topline(ctx, headlineFor(s));
    ro.set('\\kD = 10^{' + s + '}\\ \\text{m} = 10^{' + (s - OBS) + '}\\times 10^{-18}\\ \\text{m}', '', { form: 'L' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
