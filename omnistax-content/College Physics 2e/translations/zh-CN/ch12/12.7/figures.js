/* Figures for section 12.7 Molecular Transport Phenomena: Diffusion, Osmosis, and Related Processes.
   Boots against the section's text article. One figure moves, the random walk, because the idea
   in it is that the distance grows as the square root of the time; the other three answer their
   sliders and register no cycle, as the chapter's config decided. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, hover, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, nice, curve, faded } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a seeded random number in [0, 1), so that a scatter of molecules stays put while a slider is dragged */
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
/* a number to n significant figures, written plainly: 45, 1.1, 0.72, 150 */
const sig = (x, n = 2) => String(Number(x.toPrecision(n)));
/* a number in LaTeX scientific form to n significant figures: 4.5\times10^{-5} */
function sciTex(x, n = 2) {
  if (x === 0) return '0';
  let e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  if (Number(m.toPrecision(n)) >= 10) { m /= 10; e += 1; }
  return `${m.toPrecision(n)}\\times10^{${e}}`;
}
/* a distance in meters, and the unit a reader would say it in */
function unitOf(m) {
  if (m >= 1) return { k: 1, name: 'm', tex: '\\text{m}' };
  if (m >= 1e-2) return { k: 100, name: 'cm', tex: '\\text{cm}' };
  if (m >= 1e-3) return { k: 1e3, name: 'mm', tex: '\\text{mm}' };
  return { k: 1e6, name: 'μm', tex: '\\mu\\text{m}' };
}
/* a small ellipse outline, the end of a tube seen in section */
function ellipse(ctx, x, y, rx, ry, color, w, dash) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, TAU); ctx.stroke(); ctx.restore();
}
/* a filled disc with its rim: a molecule */
function disc(ctx, x, y, r, fill, stroke, w = 1.5) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = w;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); if (w > 0) ctx.stroke(); ctx.restore();
}

/* The six rows of Table 12.2, which two of the figures read. */
const TABLE = [
  { value: 'H2-air', label: '空气中的氢气 (H₂)', name: '空气中的一个氢分子', plural: '空气中的氢分子', D: 6.4e-5, tex: '6.4\\times10^{-5}' },
  { value: 'O2-air', label: '空气中的氧气 (O₂)', name: '空气中的一个氧分子', plural: '空气中的氧分子', D: 1.8e-5, tex: '1.8\\times10^{-5}' },
  { value: 'O2-water', label: '水中的氧气 (O₂)', name: '水中的一个氧分子', plural: '水中的氧分子', D: 1.0e-9, tex: '1.0\\times10^{-9}' },
  { value: 'glucose-water', label: '水中的葡萄糖', name: '水中的一个葡萄糖分子', plural: '水中的葡萄糖分子', D: 6.7e-10, tex: '6.7\\times10^{-10}' },
  { value: 'hemoglobin-water', label: '水中的血红蛋白', name: '水中的一个血红蛋白分子', plural: '水中的血红蛋白分子', D: 6.9e-11, tex: '6.9\\times10^{-11}' },
  { value: 'DNA-water', label: '水中的 DNA', name: '水中的一个 DNA 分子', plural: '水中的 DNA 分子', D: 1.3e-12, tex: '1.3\\times10^{-12}' },
];

/* =====================================================================
   FIGURE 12.26: the random walk. Three molecules set off together from the
   start and each is scattered in a new direction at every step; the circle
   about the start has the radius x_rms = √(2Dt), and the graph beside the
   walk follows that distance as the time runs. Moving: the idea has a
   clock in it, since the point is that the distance grows as the square
   root of the time, and the chapter's config names this figure as one of
   the three of the chapter that may move. Each loop runs the walk from
   t = 0 to the time on the slider, holds, and starts three new walks.
===================================================================== */
(function () {
  const d = sim('sim-random-walk', 680);
  const mol = select(d.controls, { label: '\\text{分子}', options: TABLE, value: 'O2-water', aria: '扩散的分子及其介质', onInput: reset });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.2, max: 5, step: 0.1, value: 1, unit: 's', dec: 1, onInput: reset, aria: '无规行走持续的时间', detents: [1, 5] });
  const TMAX = 5, STEPS_PER_S = 40, NMAX = STEPS_PER_S * TMAX, WALKERS = 3;
  /* the scene: a square box on the left; x_rms at 5 s for the chosen molecule fills 230 units of it,
     so the scale is fixed against the slider and changes only with the molecule chosen */
  const box = { l: 60, r: 700, t: 100, b: 640 }, CX = (box.l + box.r) / 2, CY = (box.t + box.b) / 2, RMAX = 230;
  const gbox = { l: 860, r: 1330, t: 150, b: 560 };
  const row = () => TABLE.find((m) => m.value === mol.value) || TABLE[2];
  const xrms = (D, t) => Math.sqrt(2 * D * t);
  const cy = cycle(() => ts.v, 1.2);
  /* the directions of every step of every walk, drawn afresh each loop */
  let angles = [], seed = 7, lastTau = -1;
  function reseed() { seed += 1; angles = []; for (let w = 0; w < WALKERS; w++) { const r = rng(seed * 101 + w); const a = []; for (let i = 0; i < NMAX; i++) a.push(r() * TAU); angles.push(a); } }
  reseed();
  function reset() { cy.reset(); }
  /* the positions of one walk after s steps (s may be fractional), in meters from the start */
  function walk(w, s, step) {
    const pts = [{ x: 0, y: 0 }]; let x = 0, y = 0; const n = Math.floor(s), f = s - n;
    for (let i = 0; i < n; i++) { x += step * Math.cos(angles[w][i]); y += step * Math.sin(angles[w][i]); pts.push({ x, y }); }
    if (f > 0 && n < NMAX) { pts.push({ x: x + f * step * Math.cos(angles[w][n]), y: y + f * step * Math.sin(angles[w][n]) }); }
    return pts;
  }
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('position'), tc = C('time');
    const m = row(), T = ts.v, tau = cy.now(), done = tau >= T - 1e-9;
    if (tau === 0 && lastTau > 0) reseed(); lastTau = tau;
    const N = Math.round(STEPS_PER_S * T), step = Math.sqrt(2 * m.D / STEPS_PER_S);   /* one step per collision drawn, the same length whatever the time */
    const full = xrms(m.D, TMAX), SC = RMAX / full, u = unitOf(xrms(m.D, T)), U = unitOf(full);
    const X = (mx) => CX + mx * SC, Y = (my) => CY + my * SC;
    const now = xrms(m.D, tau), s = (N * tau) / T;
    /* the scene frame and the start */
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    /* the circle of radius x_rms, the statistical average */
    if (now > 0) {
      ctx.save(); ctx.strokeStyle = pc; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(CX, CY, now * SC, 0, TAU); ctx.stroke(); ctx.restore();
    }
    /* the three walks, each in a colour of its own, with a dashed line from the start to where it is */
    const ends = [];
    for (let w = 0; w < WALKERS; w++) {
      const col = F.cat(w), pts = walk(w, s, step), last = pts[pts.length - 1];
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath();
      pts.forEach((p, i) => { if (i) ctx.lineTo(X(p.x), Y(p.y)); else ctx.moveTo(X(p.x), Y(p.y)); }); ctx.stroke(); ctx.restore();
      const dist = Math.hypot(last.x, last.y);
      if (dist > 0) line(ctx, CX, CY, X(last.x), Y(last.y), alpha(col, 0.5), 2, [6, 8]);
      ends.push({ col, x: X(last.x), y: Y(last.y), dist });
    }
    ends.forEach((e) => dot(ctx, e.x, e.y, e.col, true, 8));
    ctx.restore();
    dot(ctx, CX, CY, PAL.ink, false, 10);
    text(ctx, '起点', CX + 16, CY + 20, PAL.ink, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    hits = ends.map((e, i) => ({ x: Math.min(Math.max(e.x, box.l), box.r), y: Math.min(Math.max(e.y, box.t), box.b), r: 18, name: '分子 ' + (i + 1) + '，距起点 ' + sig(e.dist * u.k) + ' ' + u.name }));
    if (now > 0) {
      const a = -0.5, lx = CX + (now * SC + 14) * Math.cos(a), ly = CY + (now * SC + 14) * Math.sin(a);
      text(ctx, 'x_rms = ' + sig(now * u.k) + ' ' + u.name, Math.min(lx, box.r - 12), Math.max(ly, box.t + 20), pc, { size: 20, weight: 600, align: lx > box.r - 200 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    }
    /* the legend and the scale bar */
    ends.forEach((e, i) => { dot(ctx, box.l + 24 + i * 20, box.t + 26, e.col, true, 6); });
    text(ctx, '三个' + m.plural + '，在起点一同释放', box.l + 78, box.t + 26, PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.85) });
    text(ctx, '并且每次碰撞都被散射到新的方向', box.l + 78, box.t + 50, PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.85) });
    const barTop = nice(0, full * U.k, 4).hi, barLen = (barTop / U.k) * SC;
    hbracket(ctx, box.r - 24 - barLen, box.r - 24, box.b - 30, PAL.muted, fmt(barTop, 0) + ' ' + U.name);
    /* the graph: x_rms against t, the axes fixed at 5 s and at x_rms(5 s) for this molecule */
    const yr = nice(0, full * U.k, 4), yd = (yr.hi - yr.lo) / yr.n < 1 ? 1 : 0;
    const g = axes(ctx, gbox, [0, TMAX], [0, yr.hi], { xl: 't (s)', xc: tc, yl: 'x_rms (' + U.name + ')', yc: pc, nx: 5, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, yd) });
    curve(ctx, (t) => xrms(m.D, t) * U.k, 0, TMAX, g.X, g.Y, pc, 5, 120);
    line(ctx, g.X(T), gbox.t, g.X(T), gbox.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, '无规行走持续到 t = ' + fmt(T, 1) + ' s', g.X(T) + (T > 3 ? -10 : 10), gbox.b - 18, PAL.muted, { size: 17, align: T > 3 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    line(ctx, g.X(tau), gbox.b, g.X(tau), g.Y(now * U.k), tc, 2, [4, 8]);
    ends.forEach((e) => dot(ctx, g.X(tau), Math.max(gbox.t, g.Y(e.dist * U.k)), e.col, false, 7));
    dot(ctx, g.X(tau), g.Y(now * U.k), PAL.ink, true, 9);
    text(ctx, 'x_rms = √(2Dt)', g.X(3.4), g.Y(xrms(m.D, 3.4) * U.k) + 44, pc, { size: 20, weight: 600, align: 'center' });
    text(ctx, '空心圆点：三个分子所在的位置', gbox.l, gbox.b + 96, PAL.muted, { size: 17 });
    /* what the reader is looking at */
    topline(ctx, tau < 1e-9 ? '三个' + m.plural + '即将从起点出发，各自进行自己的无规行走。'
      : '经过 ' + fmt(tau, 2) + ' s，' + m.name + '平均已游荡到离出发点 ' + sig(now * u.k) + ' ' + u.name + ' 处' + (done ? '。' : '，而且这个距离仍在按时间的平方根增长。'));
    const ratios = ends.map((e) => (now > 0 ? sig(e.dist / now, 2) : '0'));
    readout(d.readout, `\\kxrms = \\sqrt{2\\kDdiff\\kt} = \\sqrt{2(${m.tex}\\ \\text{m}^2\\text{/s})(${fmt(tau, 2)}\\ \\text{s})} = ${sciTex(now)}\\ \\text{m} = ${sig(now * u.k)}\\ ${u.tex}`,
      now > 0 ? '所画的三个分子距起点分别是 $\\kxrms$ 的 ' + ratios[0] + '、' + ratios[1] + ' 和 ' + ratios[2] + ' 倍；$\\kxrms$ 是对极多条这样的无规行走取的平均值，所以单个分子的终点可能更近，也可能更远。'
        : '方均根距离是对极多条这样的无规行走取的平均值，它按时间的平方根增长：时间加倍，平均距离只增大到原来的 √2 倍。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => ts.v / 5), draw });
})();

/* =====================================================================
   FIGURE 12.27: the tube with a region of high concentration and one of
   low. Molecules cross the slab between them both ways by chance alone,
   so more leave the crowded region than enter it, and the net rate is
   proportional to the difference. Still: the chapter allows motion only
   in the random walk, and this figure answers its two sliders.
===================================================================== */
(function () {
  const d = sim('sim-concentration', 700);
  const c1 = ctl(d.controls, { label: 'C_1', cls: '', min: 0, max: 60, step: 1, value: 40, unit: '', dec: 0, aria: '区域 1 中的分子数', specials: [{ at: () => c2.v, label: 'C_1 = C_2' }] });
  const c2 = ctl(d.controls, { label: 'C_2', cls: '', min: 0, max: 60, step: 1, value: 10, unit: '', dec: 0, aria: '区域 2 中的分子数', specials: [{ at: () => c1.v, label: 'C_2 = C_1' }] });
  c1.refresh();
  const L = 160, R = 1200, TOP = 180, BOT = 480, CYm = (TOP + BOT) / 2, RY = (BOT - TOP) / 2, RX = 44, S1 = 610, S2 = 790;
  /* fixed scatters for the three regions, so that a slider only adds or removes molecules */
  function scatter(seed, x1, x2, n) { const r = rng(seed); const out = []; for (let i = 0; i < n; i++) { const t = r() * TAU, q = Math.sqrt(r()); out.push({ x: x1 + r() * (x2 - x1), y: CYm + q * (RY - 14) * Math.sin(t) }); } return out; }
  const REG1 = scatter(11, L + 30, S1 - 30, 60), REG2 = scatter(13, S2 + 30, R - 60, 60), SLAB = scatter(17, S1 + 22, S2 - 22, 60);
  function draw() {
    const { ctx } = begin(d.c);
    const C1 = c1.v, C2 = c2.v, diff = C1 - C2, c1r = F.ref('region-1'), c2r = F.ref('region-2');
    /* the tube in section: two walls, the far end and the near end */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.6); ctx.fillRect(L, TOP, R - L, BOT - TOP); ctx.restore();
    line(ctx, L, TOP, R, TOP, PAL.ink, 3); line(ctx, L, BOT, R, BOT, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(L, CYm, RX, RY, 0, Math.PI / 2, (3 * Math.PI) / 2); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.ellipse(R, CYm, RX, RY, 0, 0, TAU); ctx.fill(); ctx.restore();
    ellipse(ctx, R, CYm, RX, RY, PAL.ink, 3);
    ellipse(ctx, S1, CYm, 28, RY, PAL.ink, 3, [10, 10]);
    ellipse(ctx, S2, CYm, 28, RY, PAL.ink, 3, [10, 10]);
    /* the molecules: C1 in region 1, C2 in region 2, and the slab between them holding the mean */
    const nSlab = Math.round(((C1 + C2) / 2) * ((S2 - S1) / (S1 - L)));
    REG1.slice(0, C1).forEach((p) => dot(ctx, p.x, p.y, PAL.ink, true, 6));
    REG2.slice(0, C2).forEach((p) => dot(ctx, p.x, p.y, PAL.ink, true, 6));
    SLAB.slice(0, nSlab).forEach((p) => dot(ctx, p.x, p.y, PAL.ink, true, 6));
    /* the names of the parts */
    text(ctx, '区域 1', (L + S1) / 2, TOP - 44, c1r, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'C_1 = ' + fmt(C1, 0), (L + S1) / 2, TOP - 16, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, '区域 2', (S2 + R) / 2, TOP - 44, c2r, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'C_2 = ' + fmt(C2, 0), (S2 + R) / 2, TOP - 16, PAL.ink, { size: 20, weight: 600, align: 'center' });
    hbracket(ctx, S1, S2, BOT + 44, C('position'), 'Δx');
    line(ctx, R + 30, CYm + 90, R + 70, CYm + 150, PAL.ink, 2);
    text(ctx, 'A', R + 80, CYm + 166, C('area'), { size: 24, weight: 600 });
    dot(ctx, 60, 104, PAL.ink, true, 6); text(ctx, '扩散物质的一个分子', 78, 104, PAL.muted, { size: 17 });
    /* the two crossings and their difference, as rates drawn from the slab's middle */
    const M = (S1 + S2) / 2, K = 4, y1 = 584, y2 = 648;
    line(ctx, M, y1 - 26, M, y2 + 22, PAL.muted, 2);
    if (C1 > 0) { arrow(ctx, M, y1, M + K * C1, y1, PAL.ink, 4); text(ctx, '流出区域 1 ∝ C_1 = ' + fmt(C1, 0), M + K * C1 + 14, y1, PAL.ink, { size: 19, weight: 600 }); }
    else text(ctx, '没有分子离开区域 1', M + 14, y1, PAL.muted, { size: 19 });
    if (C2 > 0) { arrow(ctx, M, y1, M - K * C2, y1, PAL.ink, 4); text(ctx, '流出区域 2 ∝ C_2 = ' + fmt(C2, 0), M - K * C2 - 14, y1, PAL.ink, { size: 19, weight: 600, align: 'right' }); }
    else text(ctx, '没有分子离开区域 2', M - 14, y1, PAL.muted, { size: 19, align: 'right' });
    if (diff !== 0) {
      arrow(ctx, M, y2, M + K * diff, y2, PAL.ink, 6);
      text(ctx, '净流量 ∝ C_1 − C_2 = ' + fmt(Math.abs(diff), 0) + (diff > 0 ? '，向右' : '，向左'), M + K * diff + (diff > 0 ? 14 : -14), y2, PAL.ink, { size: 20, weight: 600, align: diff > 0 ? 'left' : 'right' });
    } else text(ctx, '净移动：无', M + 14, y2, PAL.ink, { size: 20, weight: 600 });
    topline(ctx, C1 === 0 && C2 === 0 ? '两个区域都没有分子时，根本没有东西穿过薄片。'
      : diff === 0 ? '每个区域各有 ' + fmt(C1, 0) + ' 个分子时没有净移动，不过分子仍然在两个方向上穿过薄片。'
      : '区域 1 中有 ' + fmt(C1, 0) + ' 个分子、区域 2 中有 ' + fmt(C2, 0) + ' 个分子时，净流量向' + (diff > 0 ? '右' : '左') + '，因为离开拥挤区域的分子比进入它的多。');
    readout(d.readout, `\\text{净扩散速率} \\propto \\kDdiff\\,(C_1 - C_2) = \\kDdiff\\,(${fmt(C1, 0)} - ${fmt(C2, 0)})`,
      diff === 0 ? '每个分子都在无规运动，所以朝一个方向穿过薄片的分子与朝另一个方向的一样多，净速率为零。浓度差才会产生净流量，而扩散常量 D 决定每个分子游荡得有多快。'
        : '每有一个分子从区域 ' + (diff > 0 ? '2 游荡到区域 1' : '1 游荡到区域 2') + '，就有更多分子朝相反方向游荡，比例为 ' + fmt(Math.max(C1, C2), 0) + ' 比 ' + fmt(Math.min(C1, C2), 0) + '；扩散常量 $\\kDdiff$ 决定每个分子游荡得有多快。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.28: the two kinds of semipermeable membrane. One is pierced
   by pores and passes a molecule narrower than the pore; the other has
   no pores and passes what dissolves in it. Still: which molecules a
   membrane admits is a property of the membrane, not a process with a
   clock, so the figure answers its choice and its slider.
===================================================================== */
(function () {
  const d = sim('sim-membrane', 600);
  const KINDS = [{ name: '小分子', nm: 0.3 }, { name: '中等分子', nm: 0.9 }, { name: '大分子', nm: 1.6 }];
  const pore = ctl(d.controls, { label: '\\text{膜孔宽度}', cls: '', min: 0.2, max: 2, step: 0.1, value: 0.6, unit: 'nm', dec: 1, aria: '膜上膜孔的宽度' });
  const kind = choice(d.controls, { label: '\\text{膜}', options: [{ value: 'pores', label: '膜孔' }, { value: 'dissolving', label: '溶解' }], value: 'pores', aria: '两区域之间是哪一种膜', onInput: (v) => pore.disable(v === 'dissolving') });
  const NM = 36, ML = 660, MR = 750, TOP = 160, BOT = 530, PORES = [200, 300, 400, 500];
  const rOf = (k) => (k.nm * NM) / 2;
  /* one molecule of each kind, all in ink: the small filled, the medium hollow, the large shaded */
  function molecule(ctx, x, y, k) {
    if (k === 0) disc(ctx, x, y, rOf(KINDS[0]), PAL.ink, PAL.ink, 0);
    else if (k === 1) disc(ctx, x, y, rOf(KINDS[1]), PAL.panel, PAL.ink, 3);
    else disc(ctx, x, y, rOf(KINDS[2]), alpha(PAL.ink, 0.3), PAL.ink, 3);
  }
  /* a scatter of molecules that keeps them off one another */
  function scatter(seed, x1, x2, counts) {
    const r = rng(seed), out = [];
    counts.forEach((n, k) => { for (let i = 0; i < n; i++) {
      let p, tries = 0;
      do { p = { x: x1 + rOf(KINDS[k]) + r() * (x2 - x1 - 2 * rOf(KINDS[k])), y: TOP + 40 + r() * (BOT - TOP - 80), k }; tries++; }
      while (tries < 60 && out.some((q) => Math.hypot(q.x - p.x, q.y - p.y) < rOf(KINDS[q.k]) + rOf(KINDS[k]) + 8));
      out.push(p);
    } });
    return out;
  }
  const LEFT = scatter(21, 110, ML - 40, [14, 8, 5]), RIGHT = scatter(23, MR + 40, 1300, [9, 5, 3]);
  function draw() {
    const { ctx } = begin(d.c);
    const pw = pore.v, porous = kind.value === 'pores';
    const passes = KINDS.map((k) => porous && k.nm < pw), fits = KINDS.map((k) => k.nm < pw);
    /* the pores close into the dissolving layer and open out of it; each molecule keeps its place and only fades */
    const aP = kind.a('pores'), aD = kind.a('dissolving');
    /* the legend: the three kinds, named once */
    let lx = 70;
    KINDS.forEach((k, i) => { molecule(ctx, lx + rOf(KINDS[2]), 120, i); text(ctx, k.name + '，宽 ' + fmt(k.nm, 1) + ' nm', lx + 2 * rOf(KINDS[2]) + 14, 120, PAL.muted, { size: 17 }); lx += 400; });
    /* the membrane, pierced or whole */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = F.ref('membrane'); ctx.lineWidth = 2.5;
    const half = kind.mix((v) => (v === 'pores' ? (pw * NM) / 2 : 0));
    if (half > 0.5) {
      let y = TOP;
      PORES.forEach((py) => { ctx.fillRect(ML, y, MR - ML, py - half - y); ctx.strokeRect(ML, y, MR - ML, py - half - y); y = py + half; });
      ctx.fillRect(ML, y, MR - ML, BOT - y); ctx.strokeRect(ML, y, MR - ML, BOT - y);
    } else { ctx.fillRect(ML, TOP, MR - ML, BOT - TOP); ctx.strokeRect(ML, TOP, MR - ML, BOT - TOP); }
    ctx.restore();
    text(ctx, '膜', (ML + MR) / 2, BOT + 24, PAL.muted, { size: 19, align: 'center' });
    faded(ctx, aP, [0, 0], () => { line(ctx, MR + 6, PORES[0], MR + 40, PORES[0] - 30, PAL.muted, 2); text(ctx, '膜孔，' + fmt(pw, 1) + ' nm', MR + 48, PORES[0] - 34, PAL.ink, { size: 19, weight: 600 }); });
    /* the molecules on the left, and on the right the kinds that have got across */
    LEFT.forEach((p) => molecule(ctx, p.x, p.y, p.k));
    RIGHT.forEach((p) => faded(ctx, kind.mix((v) => (v === 'dissolving' || fits[p.k] ? 1 : 0)), [0, 0], () => molecule(ctx, p.x, p.y, p.k)));
    faded(ctx, aP, [0, 0], () => {
      /* one of each admitted kind in a pore, and one of each held kind pressed against the membrane */
      KINDS.forEach((k, i) => {
        const py = PORES[1 + i];
        if (fits[i]) molecule(ctx, (ML + MR) / 2, py, i);
        else molecule(ctx, ML - rOf(k) - 4, py, i);
      });
      const okNames = KINDS.filter((k, i) => fits[i]).map((k) => k.name), noNames = KINDS.filter((k, i) => !fits[i]).map((k) => k.name);
      text(ctx, okNames.length ? '通过膜孔：' + okNames.join('、') : '什么都没通过', MR + 40, BOT + 50, PAL.ink, { size: 19, weight: 600 });
      text(ctx, noNames.length ? '被挡住：' + noNames.join('、') : '没有被挡住的', ML - 40, BOT + 50, PAL.ink, { size: 19, weight: 600, align: 'right' });
    });
    faded(ctx, aD, [0, 0], () => {
      /* the dissolving membrane: a few molecules sit inside it on their way across */
      [[0.22, 0.14], [0.7, 0.3], [0.4, 0.5], [0.78, 0.68], [0.3, 0.86]].forEach(([u, v], i) => molecule(ctx, ML + 16 + u * (MR - ML - 32), TOP + 30 + v * (BOT - TOP - 60), i === 3 ? 1 : 0));
      text(ctx, '溶解在膜中，正在穿过', (ML + MR) / 2, BOT + 50, PAL.ink, { size: 19, weight: 600, align: 'center' });
    });
    text(ctx, '区域 1', 60, TOP + 6, PAL.muted, { size: 19, bg: PAL.panel });
    text(ctx, '区域 2', 1340, TOP + 6, PAL.muted, { size: 19, align: 'right', bg: PAL.panel });
    const names = KINDS.filter((k, i) => passes[i]).map((k) => k.name);
    topline(ctx, !porous ? '这层膜没有膜孔；穿过它的分子是溶解在其中并扩散通过的，不论大小。'
      : names.length === 0 ? '宽 ' + fmt(pw, 1) + ' nm 的膜孔比这里的每种分子都窄，所以什么都过不去。'
      : names.length === 3 ? '宽 ' + fmt(pw, 1) + ' nm 的膜孔比这里的每种分子都宽，所以三种分子都能通过，这层膜不再具有选择性。'
      : '宽 ' + fmt(pw, 1) + ' nm 的膜孔让' + names.join('和') + '通过，挡住' + KINDS.filter((k, i) => !passes[i]).map((k) => k.name).join('和') + '。');
    if (porous) readout(d.readout, `\\text{分子比膜孔窄才能通过，膜孔宽 } ${fmt(pw, 1)}\\ \\text{nm:}\\quad ${KINDS.map((k, i) => `${fmt(k.nm, 1)}\\ \\text{nm}\\ ${passes[i] ? '<' : '>'}\\ ${fmt(pw, 1)}`).join(',\\quad ')}`,
      '按这个比例，膜只画成了真实厚度的约四分之一，因为 6.5 至 10 nm 的厚度会使它比旁边的分子还宽。');
    else readout(d.readout, `\\text{分子只要溶解在膜中就能穿过，不论大小}`,
      '哪些分子能穿过，取决于膜由什么构成，而不取决于分子的大小。生物膜的厚度为 6.5 至 10 nm，在分子的比例尺下，这里画出的膜只有该厚度的约四分之一。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.29: two sugar solutions either side of a membrane that passes
   water but not sugar. The concentration difference drives water to the
   right with the osmotic pressure; the extra height of fluid on the right
   pushes back with ρgh; the net transfer is their difference. Still: the
   chapter allows motion only in the random walk, and the height is what
   the reader sets, so the figure answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-osmosis', 760);
  const pi = ctl(d.controls, { label: '\\text{渗透压}', cls: 'pressure', min: 0, max: 3, step: 0.01, value: 0.98, unit: 'kPa', dec: 2, aria: '两种溶液的相对渗透压' });
  const RHO = 1000, G = 9.8;
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0, max: 30, step: 0.1, value: 10, unit: 'cm', dec: 1, aria: '右侧流体多出的高度', specials: [{ at: () => (pi.v * 1000) / (RHO * G) * 100, label: 'ρgh = 渗透压' }] });
  const BL = 280, BR = 1120, BB = 600, BT = 110, MX = 700, UPC = 10, LEVEL0 = 27;   /* 10 canvas units per centimeter; 27 cm in each side to begin with */
  const yOf = (cm) => BB - cm * UPC;
  /* a water molecule: one oxygen and two hydrogens in the element palette */
  function water(ctx, x, y) {
    disc(ctx, x - 4.5, y - 3.5, 2.8, F.el('H'), PAL.ink, 0.8); disc(ctx, x + 4.5, y - 3.5, 2.8, F.el('H'), PAL.ink, 0.8);
    disc(ctx, x, y, 4.5, F.el('O'), F.el('O'), 0);
  }
  const sugar = (ctx, x, y) => disc(ctx, x, y, 8, F.el('C'), F.el('C'), 0);
  /* fixed scatters in each compartment, in fractions of its width and of a full column */
  function scatter(seed, n) { const r = rng(seed); const out = []; for (let i = 0; i < n; i++) out.push({ u: r(), v: r() }); return out; }
  const WL = scatter(31, 160), WR = scatter(33, 160), SL = scatter(35, 12), SR = scatter(37, 60);
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), xc = C('position'), cL = F.ref('left-solution'), cR = F.ref('right-solution'), cM = F.ref('osmotic-membrane');
    const P = pi.v, h = hs.v, bp = (RHO * G * (h / 100)) / 1000, net = P - bp;
    const hl = LEVEL0 - h / 2, hr = LEVEL0 + h / 2, yl = yOf(hl), yr = yOf(hr);
    const balanced = Math.abs(net) < 0.005;
    /* the fluid, then the glass */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(BL + 3, yl, MX - BL - 3, BB - yl); ctx.fillRect(MX, yr, BR - MX - 3, BB - yr); ctx.restore();
    line(ctx, BL + 3, yl, MX, yl, cL, 2.5); line(ctx, MX, yr, BR - 3, yr, cR, 2.5);
    /* the molecules: water everywhere in proportion to the column, sugar more on the right the larger the osmotic pressure */
    const place = (s, x1, x2, top, pad) => ({ x: x1 + pad + s.u * (x2 - x1 - 2 * pad), y: top + pad + s.v * (BB - top - 2 * pad) });
    const nwl = Math.round(3.2 * hl), nwr = Math.round(3.2 * hr), nsr = 12 + Math.round(14 * P);
    WL.slice(0, nwl).forEach((s) => { const p = place(s, BL, MX, yl, 12); water(ctx, p.x, p.y); });
    WR.slice(0, nwr).forEach((s) => { const p = place(s, MX, BR, yr, 12); water(ctx, p.x, p.y); });
    SL.forEach((s) => { const p = place(s, BL, MX, yl, 14); sugar(ctx, p.x, p.y); });
    SR.slice(0, nsr).forEach((s) => { const p = place(s, MX, BR, yr, 14); sugar(ctx, p.x, p.y); });
    /* the beaker and the membrane */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 5; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(BL, BT); ctx.lineTo(BL, BB - 20); ctx.quadraticCurveTo(BL, BB, BL + 20, BB); ctx.lineTo(BR - 20, BB); ctx.quadraticCurveTo(BR, BB, BR, BB - 20); ctx.lineTo(BR, BT); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.rule; ctx.fillRect(MX - 4, BT, 8, BB - BT); ctx.restore();
    line(ctx, MX, BT, MX, BB, cM, 2.5, [8, 8]);
    line(ctx, MX, BB + 4, MX, BB + 24, PAL.muted, 2);
    text(ctx, '半透膜，水能通过而糖不能', MX, BB + 42, cM, { size: 18, align: 'center' });
    /* the legend and the two solutions */
    water(ctx, 80, 104); text(ctx, '水', 98, 104, PAL.muted, { size: 18 });
    sugar(ctx, 190, 104); text(ctx, '糖', 208, 104, PAL.muted, { size: 18 });
    text(ctx, P > 0 ? '糖较少' : '相同的溶液', (BL + MX) / 2, yl - 22, cL, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, P > 0 ? '糖较多' : '相同的溶液', (MX + BR) / 2, yr - 22, cR, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the extra height on the right */
    if (h > 0) {
      line(ctx, MX, yl, BR + 30, yl, alpha(xc, 0.6), 2, [6, 8]);
      line(ctx, BR + 3, yr, BR + 30, yr, alpha(xc, 0.6), 2, [6, 8]);
      vbracket(ctx, BR + 34, yr, yl, xc, 'h = ' + fmt(h, 1) + ' cm', 1);
    } else text(ctx, 'h = 0', BR + 50, yl, xc, { size: 22, weight: 600 });
    /* the two pressures at the membrane, drawn from it, and the net transfer beneath the beaker */
    const K = 90, ya = (yl + BB) / 2 - 24, yb = ya + 48;
    if (P > 0) { arrow(ctx, MX, ya, MX + K * P, ya, pc, 5); text(ctx, '渗透压 ' + fmt(P, 2) + ' kPa', MX + 12, ya - 24, pc, { size: 19, weight: 600, bg: PAL.panel }); }
    if (bp > 0) { arrow(ctx, MX, yb, MX - K * bp, yb, pc, 5); text(ctx, '背压 ρgh = ' + fmt(bp, 2) + ' kPa', MX - 12, yb + 20, pc, { size: 18, weight: 600, align: 'right', bg: PAL.panel }); }
    const yn = BB + 92;
    if (balanced) text(ctx, P > 0 ? '两个压强平衡：水的净转移为零' : '没有渗透压也没有背压：什么都不动', MX, yn, PAL.ink, { size: 20, weight: 600, align: 'center' });
    else {
      arrow(ctx, MX, yn, MX + K * net, yn, pc, 6);
      text(ctx, net > 0 ? '水的净转移向右，' + fmt(net, 2) + ' kPa 不平衡' : '反渗透：水被驱回左侧，' + fmt(-net, 2) + ' kPa 不平衡', MX, yn + 34, pc, { size: 20, weight: 600, align: 'center' });
    }
    topline(ctx, P === 0 && h === 0 ? '两侧浓度相同时没有渗透压，两个液面一样高。'
      : balanced ? '右侧多出 ' + fmt(h, 1) + ' cm 高度时，背压为 ' + fmt(bp, 2) + ' kPa，等于渗透压，所以水的净转移为零。'
      : net > 0 ? '右侧多出 ' + fmt(h, 1) + ' cm 高度时，背压为 ' + fmt(bp, 2) + ' kPa，小于 ' + fmt(P, 2) + ' kPa 的渗透压，所以水仍然向右移动，液柱继续上升。'
      : '右侧多出 ' + fmt(h, 1) + ' cm 高度时，背压为 ' + fmt(bp, 2) + ' kPa，大于 ' + fmt(P, 2) + ' kPa 的渗透压，所以水被驱回左侧。');
    readout(d.readout, `\\kPr = \\krho\\kg\\kh = (1.00\\times10^{3}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2)(${fmt(h / 100, 3)}\\ \\text{m}) = ${fmt(bp * 1000, 0)}\\ \\text{Pa} = ${fmt(bp, 2)}\\ \\text{kPa}`,
      balanced ? '背压 $\\krho\\kg\\kh$ 等于两种溶液的相对渗透压 ' + fmt(P, 2) + ' kPa，所以朝一个方向穿过的水与朝另一个方向的一样多，液面不再上升。'
        : net > 0 ? '两种溶液的相对渗透压为 ' + fmt(P, 2) + ' kPa，而背压只达到 ' + fmt(bp, 2) + ' kPa，所以水仍然向右移动，液柱继续上升，直到两者相等，此时 $\\kh = ' + fmt((P * 1000) / (RHO * G) * 100, 1) + '\\ \\text{cm}$。'
        : '背压 ' + fmt(bp, 2) + ' kPa 超过相对渗透压 ' + fmt(P, 2) + ' kPa，所以水被迫逆着浓度差穿回膜的另一侧。这就是反渗透，活塞同样可以产生它，它也是使海水淡化的方法。');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
