/* Figures for section 1.1 Physics: An Introduction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, dot, text, headline } = F;
/* Electrons and protons are particles with an identity, so they take the element palette (root rule 7), never ink. */
const E_COLOR = () => F.el('e-'), P_COLOR = () => F.el('p+');
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* =====================================================================
   SIM 1: the planetary model of the atom, replacing Figure 1.10. A
   nucleus of protons at the centre, electrons on circular orbits of
   increasing radius filling shells of two, eight and eight, going round
   without end. One slider, the number of electrons, since the section
   introduces no physical quantity; what is variable in the idea is which
   atom the model is a picture of. An endless cycle, so no scrubber.
===================================================================== */
(function () {
  const d = sim('sim-atom-model', 620);
  const Z = ctl(d.controls, { label: '\\text{电子数}', cls: '', min: 1, max: 18, step: 1, value: 1, unit: '', dec: 0, onInput: reset, aria: '电子的数目' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const NAMES = ['氢', '氦', '锂', '铍', '硼', '碳', '氮', '氧', '氟', '氖', '钠', '镁', '铝', '硅', '磷', '硫', '氯', '氩'];
  const SYMB = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'];
  const WORDS = ['一', '两', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八'];
  const SHELL = [2, 8, 8];          /* how many electrons each shell holds */
  const RAD = [92, 162, 232];       /* the radius of each orbit, in logical units */
  const OMEGA = [1.5, 0.95, 0.65];  /* how fast each shell goes round, in radians per second; the inner ones faster, as planets do */
  const ORD = ['第一', '第二', '第三'];
  const cx = 700, cy0 = 350;        /* the centre of the atom */
  const GOLD = Math.PI * (3 - Math.sqrt(5));   /* the angle between successive protons in the cluster */
  const fill = (z) => SHELL.map((cap, i) => Math.max(0, Math.min(cap, z - SHELL.slice(0, i).reduce((a, b) => a + b, 0))));
  /* the nucleus: z protons packed round the centre */
  function nucleus(ctx, x, y, z, r) {
    for (let i = 0; i < z; i++) { const rho = i === 0 ? 0 : 1.18 * r * Math.sqrt(i), a = i * GOLD; dot(ctx, x + rho * Math.cos(a), y + rho * Math.sin(a), P_COLOR(), true, r); }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const raw = cy.now(), tau = isFinite(raw) ? raw : 0;   /* reduced motion and a stopped figure both draw the atom at rest */
    const z = Z.v, shells = fill(z);
    /* the orbits, faint, with the empty ones fainter still */
    ctx.save(); ctx.lineWidth = 3;
    shells.forEach((n, s) => { ctx.strokeStyle = n ? alpha(PAL.ink, 0.4) : PAL.rule; if (!n) ctx.setLineDash([6, 10]); else ctx.setLineDash([]); ctx.beginPath(); ctx.arc(cx, cy0, RAD[s], 0, Math.PI * 2); ctx.stroke(); });
    ctx.restore();
    /* the nucleus */
    nucleus(ctx, cx, cy0, z, 8);
    /* the electrons, spaced evenly round each shell and going round together */
    shells.forEach((n, s) => {
      for (let k = 0; k < n; k++) { const a = OMEGA[s] * tau + (2 * Math.PI * k) / n + s * 0.6; dot(ctx, cx + RAD[s] * Math.cos(a), cy0 + RAD[s] * Math.sin(a), E_COLOR(), true, 9); }
    });
    /* the element, named at the left */
    text(ctx, SYMB[z - 1], 230, 330, PAL.ink, { weight: 700, size: 88, align: 'center' });
    text(ctx, NAMES[z - 1], 230, 400, PAL.muted, { size: 22, align: 'center' });
    text(ctx, z + ' 个电子', 230, 434, PAL.muted, { size: 17, align: 'center' });
    /* what the drawing shows, at the right */
    const lx = 1010;
    dot(ctx, lx, 170, E_COLOR(), true, 9); text(ctx, '一个电子', lx + 26, 170, PAL.muted);
    nucleus(ctx, lx, 226, 3, 6); text(ctx, '原子核，含有 ' + z + ' 个质子', lx + 26, 226, PAL.muted);
    line(ctx, lx - 14, 274, lx + 12, 274, alpha(PAL.ink, 0.4), 3); text(ctx, '轨道，空时画成虚线', lx + 26, 274, PAL.muted);
    shells.forEach((n, s) => text(ctx, ORD[s] + '壳层，' + SHELL[s] + ' 个电子中的 ' + n + ' 个', lx - 14, 340 + 40 * s, n ? PAL.ink : PAL.muted, { size: 20, weight: n ? 600 : 400 }));
    const an = '';
    headline(ctx, '在这幅图中，' + WORDS[z - 1] + '个电子绕' + an + NAMES[z - 1] + '原子的原子核运动，该原子核含有' + WORDS[z - 1] + '个质子。');
    const held = shells.filter((n) => n > 0), unit = '\\text{ 个电子}';
    readout(d.readout, (held.length > 1 ? '\\text{各壳层：}' + held.join(' + ') + ' = ' : '\\text{第一壳层：}') + z + unit,
      '原子的直径约为 10⁻¹⁰ m，其原子核约小 10⁵ 倍，因此按比例画出的图除了轨道之外什么也显示不出来。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
