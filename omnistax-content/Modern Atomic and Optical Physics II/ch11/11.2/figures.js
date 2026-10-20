/* Figures for 11.2 Experimental History. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.2'] = function (root, F) {
const { C, PAL, alpha, register, begin, line, arrow, text, axes, hover } = F;

/* =====================================================================
   FIGURE 11.1 · fig-phase-diagram · faithful copy, still
   The book's qualitative log–log diagram: no scale on either axis, so the
   shapes are taken from the book's drawing (its 545 × 348 plot area mapped
   onto BOX). The thin diagonal in the book's grey fill is the seam of its
   two-triangle polygon and is not drawn.
===================================================================== */
(function () {
  const d = F.sim(root, 'fig-phase-diagram', 580);
  const BOX = { l: 110, r: 1360, t: 70, b: 480 };
  const P = (bx, by) => [BOX.l + ((bx - 60) / 545) * (BOX.r - BOX.l), BOX.b - ((368 - by) / 348) * (BOX.b - BOX.t)];
  /* Catmull–Rom through the book's coexistence curve, left axis to the floor */
  const KNOTS = [[60, 155], [130, 131], [210, 108], [290, 100], [338, 108], [368, 135], [388, 180], [401, 240], [411, 310], [418, 368]].map(([x, y]) => P(x, y));
  const COEX = [];
  for (let i = 0; i < KNOTS.length - 1; i++) {
    const p0 = KNOTS[Math.max(i - 1, 0)], p1 = KNOTS[i], p2 = KNOTS[i + 1], p3 = KNOTS[Math.min(i + 2, KNOTS.length - 1)];
    for (let s = 0; s < 1; s += 0.1) {
      const s2 = s * s, s3 = s2 * s;
      COEX.push([0, 1].map((j) => 0.5 * (2 * p1[j] + (p2[j] - p0[j]) * s + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * s2 + (3 * p1[j] - p0[j] - 3 * p2[j] + p3[j]) * s3)));
    }
  }
  COEX.push(KNOTS[KNOTS.length - 1]);
  const TC0 = P(60, 298), TC1 = P(605, 200);
  const HE = P(431, 253);
  const fill = (ctx, pts, color) => { ctx.save(); ctx.fillStyle = color; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.restore(); };
  const hits = []; hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c);
    const k = F.ease.smooth(F.arrival(d));
    axes(ctx, BOX, [0, 1], [0, 1], { nx: 0, ny: 0, xl: 'log(density)', xc: C('density'), yl: 'log(temperature)', yc: C('temperature') });
    ctx.save(); ctx.globalAlpha *= k;
    fill(ctx, [[BOX.l, BOX.b], ...COEX], alpha(PAL.ink, 0.16));
    fill(ctx, [TC0, TC1, [BOX.r, BOX.b], [BOX.l, BOX.b]], alpha(C('temperature'), 0.2));
    ctx.restore();
    const ink = (pts, color, w) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); F.partial(pts, F.ease.smooth(Math.min(1, k * 1.2))).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); };
    ink(COEX, PAL.ink, 3);
    ink([TC0, TC1], C('temperature'), 5);
    ctx.save(); ctx.globalAlpha *= k;
    const s = 14; ctx.fillStyle = F.el('He'); ctx.fillRect(HE[0] - s / 2, HE[1] - s / 2, s, s);
    ctx.restore();
    const [ax, ay] = P(455, 296);
    arrow(ctx, ax, ay, HE[0] + 6, HE[1] + 12, PAL.ink, 3);
    const at = (bx, by) => P(bx, by);
    text(ctx, 'Vapor', ...at(160, 45), PAL.ink, { size: 24, align: 'center' });
    text(ctx, 'Forbidden', ...at(230, 192), PAL.ink, { size: 24, align: 'center' });
    text(ctx, 'Condensed', ...at(485, 140), PAL.ink, { size: 24, align: 'center' });
    text(ctx, 'matter', ...at(485, 172), PAL.ink, { size: 24, align: 'center' });
    text(ctx, 'BEC', ...at(295, 320), PAL.ink, { size: 24, align: 'center' });
    text(ctx, 'superfluid', ...at(527, 312), PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'helium', ...at(527, 342), PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'T = T_c(n)', ...at(585, 183), C('temperature'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    hits.length = 0;
    hits.push(
      { ...xy(at(160, 60)), r: 90, name: 'vapor: a gas in equilibrium' },
      { ...xy(at(230, 200)), r: 100, name: 'forbidden: no uniform phase in equilibrium; the material splits into vapor and liquid or solid' },
      { ...xy(at(330, 105)), r: 30, name: 'the coexistence curve bounding the forbidden region' },
      { ...xy(at(485, 156)), r: 90, name: 'condensed matter: liquid or solid' },
      { ...xy(at(295, 330)), r: 70, name: 'BEC: below the critical temperature, inside the forbidden region at the densities of a gas' },
      { ...xy(at(560, 205)), r: 26, name: 'the BEC critical temperature of Eq. (11.3), rising with density' },
      { ...xy(HE), r: 22, name: 'superfluid helium (He): a liquid below its critical temperature' },
    );
  }
  function xy([x, y]) { return { x, y }; }
  register(d.fig, { update: () => {}, draw });
})();
};
