/* Figures for the introduction to Chapter 5, Coherent interactions in multi-level systems.
   The two fields are the page's referents, one group; the levels are ink, since |2⟩ is a
   different level in each panel. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.intro'] = function (root, F) {
const { PAL, register, begin, line, arrow, text, hover } = F;

/* =====================================================================
   FIGURE 5.1 · fig-raman-configs · faithful copy, still
   Three panels as the book draws them: Λ, cascade, V. Level heights and
   arrow ends follow the book's sketch; every arrow is notation.
===================================================================== */
(function () {
  const d = F.sim(root, 'fig-raman-configs', 460);
  const hits = []; hover(d.stage, () => hits, d.c);
  const both = (ctx, x1, y1, x2, y2, col) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, 4); arrow(ctx, mx, my, x2, y2, col, 4); };
  /* each panel: title, levels [label, x0, x1, y], arrows [field, x1, y1, x2, y2, label x, label y] */
  const PANELS = [
    { x: 20, title: 'Lambda (Λ) System', levels: [['|3⟩', 130, 230, 100], ['|2⟩', 40, 130, 290], ['|1⟩', 210, 300, 360]],
      arrows: [[2, 150, 118, 68, 282, 95, 190], [1, 270, 352, 200, 172, 270, 270]] },
    { x: 440, title: 'Cascade System', levels: [['|3⟩', 0, 100, 100], ['|2⟩', 50, 150, 222], ['|1⟩', 90, 190, 360]],
      arrows: [[2, 38, 104, 82, 210, 110, 150], [1, 170, 352, 100, 202, 175, 285]] },
    { x: 860, title: 'V System', levels: [['|3⟩', 20, 120, 100], ['|2⟩', 200, 300, 200], ['|1⟩', 80, 180, 360]],
      arrows: [[1, 128, 340, 62, 146, 110, 240], [2, 150, 344, 240, 210, 225, 285]] },
  ];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const W = 400, T = 20, B = 420;
    PANELS.forEach((p) => {
      [[0, T, W, T], [W, T, W, B], [W, B, 0, B], [0, B, 0, T]].forEach(([a, b, c, e]) => line(ctx, p.x + a, b, p.x + c, e, PAL.ink, 1.5));
      text(ctx, p.title, p.x + W / 2, 52, PAL.ink, { size: 22, align: 'center' });
      p.levels.forEach(([lab, x0, x1, y]) => {
        line(ctx, p.x + 30 + x0, y, p.x + 30 + x1, y, PAL.ink, 2.5);
        text(ctx, lab, p.x + 40 + x1, y, PAL.ink, { size: 22 });
      });
      p.arrows.forEach(([f, x1, y1, x2, y2, lx, ly]) => {
        const col = F.ref('field-' + f);
        both(ctx, p.x + 30 + x1, y1, p.x + 30 + x2, y2, col);
        text(ctx, `Ω${f === 1 ? '₁' : '₂'} ν${f === 1 ? '₁' : '₂'}`, p.x + 30 + lx, ly, col, { size: 22, weight: 600, bg: PAL.panel });
        hits.push({ x: p.x + 30 + lx, y: ly, r: 34, name: `the field Ω${f === 1 ? '₁' : '₂'} of frequency ν${f === 1 ? '₁' : '₂'}` });
      });
      hits.push({ x: p.x + W / 2, y: 52, r: 40, name: p.title === 'Lambda (Λ) System' ? 'two lower levels joined through one excited level' : p.title === 'Cascade System' ? 'a ladder climbed through an intermediate level' : 'two upper levels sharing one ground level' });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
