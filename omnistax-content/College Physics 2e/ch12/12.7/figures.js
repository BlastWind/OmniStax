/* Figures for section 12.7 Molecular Transport Phenomena: Diffusion, Osmosis, and Related Processes.
   Boots against the section's text article. One figure moves, the random walk, because the idea
   in it is that the distance grows as the square root of the time; the other three answer their
   sliders and register no cycle, as the chapter's config decided. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, hover, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, nice, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

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
  { value: 'H2-air', label: 'hydrogen (H₂) in air', name: 'a hydrogen molecule in air', plural: 'hydrogen molecules in air', D: 6.4e-5, tex: '6.4\\times10^{-5}' },
  { value: 'O2-air', label: 'oxygen (O₂) in air', name: 'an oxygen molecule in air', plural: 'oxygen molecules in air', D: 1.8e-5, tex: '1.8\\times10^{-5}' },
  { value: 'O2-water', label: 'oxygen (O₂) in water', name: 'an oxygen molecule in water', plural: 'oxygen molecules in water', D: 1.0e-9, tex: '1.0\\times10^{-9}' },
  { value: 'glucose-water', label: 'glucose in water', name: 'a glucose molecule in water', plural: 'glucose molecules in water', D: 6.7e-10, tex: '6.7\\times10^{-10}' },
  { value: 'hemoglobin-water', label: 'hemoglobin in water', name: 'a hemoglobin molecule in water', plural: 'hemoglobin molecules in water', D: 6.9e-11, tex: '6.9\\times10^{-11}' },
  { value: 'DNA-water', label: 'DNA in water', name: 'a DNA molecule in water', plural: 'DNA molecules in water', D: 1.3e-12, tex: '1.3\\times10^{-12}' },
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
  const mol = select(d.controls, { label: '\\text{the molecule}', options: TABLE, value: 'O2-water', aria: 'the diffusing molecule and its medium', onInput: reset });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.2, max: 5, step: 0.1, value: 1, unit: 's', dec: 1, onInput: reset, aria: 'the time the walk has to run', detents: [1, 5] });
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
    text(ctx, 'start', CX + 16, CY + 20, PAL.ink, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    hits = ends.map((e, i) => ({ x: Math.min(Math.max(e.x, box.l), box.r), y: Math.min(Math.max(e.y, box.t), box.b), r: 18, name: 'molecule ' + (i + 1) + ', ' + sig(e.dist * u.k) + ' ' + u.name + ' from the start' }));
    if (now > 0) {
      const a = -0.5, lx = CX + (now * SC + 14) * Math.cos(a), ly = CY + (now * SC + 14) * Math.sin(a);
      text(ctx, 'x_rms = ' + sig(now * u.k) + ' ' + u.name, Math.min(lx, box.r - 12), Math.max(ly, box.t + 20), pc, { size: 20, weight: 600, align: lx > box.r - 200 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    }
    /* the legend and the scale bar */
    ends.forEach((e, i) => { dot(ctx, box.l + 24 + i * 20, box.t + 26, e.col, true, 6); });
    text(ctx, 'three ' + m.plural + ', released together at the start', box.l + 78, box.t + 26, PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'and each scattered in a new direction at every collision', box.l + 78, box.t + 50, PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.85) });
    const barTop = nice(0, full * U.k, 4).hi, barLen = (barTop / U.k) * SC;
    hbracket(ctx, box.r - 24 - barLen, box.r - 24, box.b - 30, PAL.muted, fmt(barTop, 0) + ' ' + U.name);
    /* the graph: x_rms against t, the axes fixed at 5 s and at x_rms(5 s) for this molecule */
    const yr = nice(0, full * U.k, 4), yd = (yr.hi - yr.lo) / yr.n < 1 ? 1 : 0;
    const g = axes(ctx, gbox, [0, TMAX], [0, yr.hi], { xl: 't (s)', xc: tc, yl: 'x_rms (' + U.name + ')', yc: pc, nx: 5, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, yd) });
    curve(ctx, (t) => xrms(m.D, t) * U.k, 0, TMAX, g.X, g.Y, pc, 5, 120);
    line(ctx, g.X(T), gbox.t, g.X(T), gbox.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'the walk runs to t = ' + fmt(T, 1) + ' s', g.X(T) + (T > 3 ? -10 : 10), gbox.b - 18, PAL.muted, { size: 17, align: T > 3 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    line(ctx, g.X(tau), gbox.b, g.X(tau), g.Y(now * U.k), tc, 2, [4, 8]);
    ends.forEach((e) => dot(ctx, g.X(tau), Math.max(gbox.t, g.Y(e.dist * U.k)), e.col, false, 7));
    dot(ctx, g.X(tau), g.Y(now * U.k), PAL.ink, true, 9);
    text(ctx, 'x_rms = √(2Dt)', g.X(3.4), g.Y(xrms(m.D, 3.4) * U.k) + 44, pc, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'hollow dots: where the three molecules are', gbox.l, gbox.b + 96, PAL.muted, { size: 17 });
    /* what the reader is looking at */
    topline(ctx, tau < 1e-9 ? 'Three ' + m.plural + ' are about to set off from the start, each on a random walk of its own.'
      : 'After ' + fmt(tau, 2) + ' s ' + m.name + ' has wandered, on average, ' + sig(now * u.k) + ' ' + u.name + ' from where it started' + (done ? '.' : ', and the distance is still growing as the square root of the time.'));
    const ratios = ends.map((e) => (now > 0 ? sig(e.dist / now, 2) : '0'));
    readout(d.readout, `\\kxrms = \\sqrt{2D\\kt} = \\sqrt{2(${m.tex}\\ \\text{m}^2\\text{/s})(${fmt(tau, 2)}\\ \\text{s})} = ${sciTex(now)}\\ \\text{m} = ${sig(now * u.k)}\\ ${u.tex}`,
      now > 0 ? 'The three molecules drawn are ' + ratios[0] + ', ' + ratios[1] + ' and ' + ratios[2] + ' times x_rms from the start. The root-mean-square distance is the average over very many such walks, so a single molecule may end nearer or farther, and doubling the time makes the average only √2 times larger.'
        : 'The root-mean-square distance is the average over very many such walks, and it grows as the square root of the time: doubling the time makes the average distance only √2 times larger.');
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
  const c1 = ctl(d.controls, { label: 'C_1', cls: '', min: 0, max: 60, step: 1, value: 40, unit: '', dec: 0, aria: 'the number of molecules in region 1' });
  const c2 = ctl(d.controls, { label: 'C_2', cls: '', min: 0, max: 60, step: 1, value: 10, unit: '', dec: 0, aria: 'the number of molecules in region 2' });
  const L = 160, R = 1200, TOP = 180, BOT = 480, CYm = (TOP + BOT) / 2, RY = (BOT - TOP) / 2, RX = 44, S1 = 610, S2 = 790;
  /* fixed scatters for the three regions, so that a slider only adds or removes molecules */
  function scatter(seed, x1, x2, n) { const r = rng(seed); const out = []; for (let i = 0; i < n; i++) { const t = r() * TAU, q = Math.sqrt(r()); out.push({ x: x1 + r() * (x2 - x1), y: CYm + q * (RY - 14) * Math.sin(t) }); } return out; }
  const REG1 = scatter(11, L + 30, S1 - 30, 60), REG2 = scatter(13, S2 + 30, R - 60, 60), SLAB = scatter(17, S1 + 22, S2 - 22, 60);
  function draw() {
    const { ctx } = begin(d.c);
    const C1 = c1.v, C2 = c2.v, diff = C1 - C2;
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
    text(ctx, 'Region 1', (L + S1) / 2, TOP - 44, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'C_1 = ' + fmt(C1, 0), (L + S1) / 2, TOP - 16, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'Region 2', (S2 + R) / 2, TOP - 44, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'C_2 = ' + fmt(C2, 0), (S2 + R) / 2, TOP - 16, PAL.ink, { size: 20, weight: 600, align: 'center' });
    hbracket(ctx, S1, S2, BOT + 44, PAL.ink, 'Δx');
    line(ctx, R + 30, CYm + 90, R + 70, CYm + 150, PAL.ink, 2);
    text(ctx, 'A', R + 80, CYm + 166, PAL.ink, { size: 24, weight: 600 });
    dot(ctx, 60, 104, PAL.ink, true, 6); text(ctx, 'a molecule of the diffusing substance', 78, 104, PAL.muted, { size: 17 });
    /* the two crossings and their difference, as rates drawn from the slab's middle */
    const M = (S1 + S2) / 2, K = 4, y1 = 584, y2 = 648;
    line(ctx, M, y1 - 26, M, y2 + 22, PAL.muted, 2);
    if (C1 > 0) { arrow(ctx, M, y1, M + K * C1, y1, PAL.ink, 4); text(ctx, 'out of region 1 ∝ C_1 = ' + fmt(C1, 0), M + K * C1 + 14, y1, PAL.ink, { size: 19, weight: 600 }); }
    else text(ctx, 'nothing leaves region 1', M + 14, y1, PAL.muted, { size: 19 });
    if (C2 > 0) { arrow(ctx, M, y1, M - K * C2, y1, PAL.ink, 4); text(ctx, 'out of region 2 ∝ C_2 = ' + fmt(C2, 0), M - K * C2 - 14, y1, PAL.ink, { size: 19, weight: 600, align: 'right' }); }
    else text(ctx, 'nothing leaves region 2', M - 14, y1, PAL.muted, { size: 19, align: 'right' });
    if (diff !== 0) {
      arrow(ctx, M, y2, M + K * diff, y2, PAL.ink, 6);
      text(ctx, 'net ∝ C_1 − C_2 = ' + fmt(Math.abs(diff), 0) + (diff > 0 ? ', to the right' : ', to the left'), M + K * diff + (diff > 0 ? 14 : -14), y2, PAL.ink, { size: 20, weight: 600, align: diff > 0 ? 'left' : 'right' });
    } else text(ctx, 'net movement: none', M + 14, y2, PAL.ink, { size: 20, weight: 600 });
    topline(ctx, C1 === 0 && C2 === 0 ? 'With no molecules in either region nothing crosses the slab at all.'
      : diff === 0 ? 'With ' + fmt(C1, 0) + ' molecules in each region there is no net movement, although molecules still cross the slab both ways.'
      : 'With ' + fmt(C1, 0) + ' molecules in region 1 and ' + fmt(C2, 0) + ' in region 2 the net flow is to the ' + (diff > 0 ? 'right' : 'left') + ', since more molecules leave the crowded region than enter it.');
    readout(d.readout, `\\text{net rate of diffusion} \\propto D\\,(C_1 - C_2) = D\\,(${fmt(C1, 0)} - ${fmt(C2, 0)})`,
      diff === 0 ? 'Every molecule moves at random, so as many cross the slab one way as the other and the net rate is zero. A difference in concentration is what makes a net flow, and the diffusion constant D sets how fast each molecule wanders.'
        : 'For every molecule that wanders from region ' + (diff > 0 ? '2 into region 1' : '1 into region 2') + ', more wander the other way, in the proportion ' + fmt(Math.max(C1, C2), 0) + ' to ' + fmt(Math.min(C1, C2), 0) + '. The net rate is greatest at the start, when the difference is greatest, and falls to nothing as the two concentrations draw level; the diffusion constant D sets how fast each molecule wanders and so how quickly the difference is worked off.');
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
  const KINDS = [{ name: 'small', nm: 0.3 }, { name: 'medium', nm: 0.9 }, { name: 'large', nm: 1.6 }];
  const pore = ctl(d.controls, { label: '\\text{pore width}', cls: '', min: 0.2, max: 2, step: 0.1, value: 0.6, unit: 'nm', dec: 1, aria: 'the width of the pores through the membrane' });
  const kind = choice(d.controls, { label: '\\text{the membrane}', options: [{ value: 'pores', label: 'pores' }, { value: 'dissolving', label: 'dissolving' }], value: 'pores', aria: 'which kind of membrane stands between the two regions', onInput: (v) => pore.disable(v === 'dissolving') });
  const NM = 36, ML = 660, MR = 750, TOP = 136, BOT = 530, PORES = [200, 300, 400, 500];
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
    const passes = KINDS.map((k) => porous && k.nm < pw);
    /* the legend: the three kinds, named once */
    let lx = 70;
    KINDS.forEach((k, i) => { molecule(ctx, lx + rOf(KINDS[2]), 104, i); text(ctx, k.name + ' molecules, ' + fmt(k.nm, 1) + ' nm across', lx + 2 * rOf(KINDS[2]) + 14, 104, PAL.muted, { size: 17 }); lx += 400; });
    /* the membrane, pierced or whole */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
    if (porous) {
      const half = (pw * NM) / 2; let y = TOP;
      PORES.forEach((py) => { ctx.fillRect(ML, y, MR - ML, py - half - y); ctx.strokeRect(ML, y, MR - ML, py - half - y); y = py + half; });
      ctx.fillRect(ML, y, MR - ML, BOT - y); ctx.strokeRect(ML, y, MR - ML, BOT - y);
    } else { ctx.fillRect(ML, TOP, MR - ML, BOT - TOP); ctx.strokeRect(ML, TOP, MR - ML, BOT - TOP); }
    ctx.restore();
    text(ctx, 'membrane', (ML + MR) / 2, BOT + 24, PAL.muted, { size: 19, align: 'center' });
    if (porous) { line(ctx, MR + 6, PORES[0], MR + 40, PORES[0] - 30, PAL.muted, 2); text(ctx, 'pore, ' + fmt(pw, 1) + ' nm', MR + 48, PORES[0] - 34, PAL.ink, { size: 19, weight: 600 }); }
    /* the molecules on the left, and on the right the kinds that have got across */
    LEFT.forEach((p) => molecule(ctx, p.x, p.y, p.k));
    if (porous) {
      RIGHT.filter((p) => passes[p.k]).forEach((p) => molecule(ctx, p.x, p.y, p.k));
      /* one of each admitted kind in a pore, and one of each held kind pressed against the membrane */
      KINDS.forEach((k, i) => {
        const py = PORES[1 + i];
        if (passes[i]) molecule(ctx, (ML + MR) / 2, py, i);
        else molecule(ctx, ML - rOf(k) - 4, py, i);
      });
      const okNames = KINDS.filter((k, i) => passes[i]).map((k) => k.name), noNames = KINDS.filter((k, i) => !passes[i]).map((k) => k.name);
      text(ctx, okNames.length ? 'through the pores: ' + okNames.join(', ') : 'nothing gets through', MR + 40, BOT + 50, PAL.ink, { size: 19, weight: 600 });
      text(ctx, noNames.length ? 'held back: ' + noNames.join(', ') : 'nothing is held back', ML - 40, BOT + 50, PAL.ink, { size: 19, weight: 600, align: 'right' });
    } else {
      /* the dissolving membrane: molecules of every size are on both sides, and a few sit inside the membrane on their way across */
      RIGHT.forEach((p) => molecule(ctx, p.x, p.y, p.k));
      [[0.22, 0.14], [0.7, 0.3], [0.4, 0.5], [0.78, 0.68], [0.3, 0.86]].forEach(([u, v], i) => molecule(ctx, ML + 16 + u * (MR - ML - 32), TOP + 30 + v * (BOT - TOP - 60), i === 3 ? 1 : 0));
      text(ctx, 'dissolved in the membrane, on the way across', (ML + MR) / 2, BOT + 50, PAL.ink, { size: 19, weight: 600, align: 'center' });
    }
    text(ctx, 'region 1', 60, TOP - 14, PAL.muted, { size: 19, bg: PAL.panel });
    text(ctx, 'region 2', 1340, TOP - 14, PAL.muted, { size: 19, align: 'right', bg: PAL.panel });
    const names = KINDS.filter((k, i) => passes[i]).map((k) => k.name);
    topline(ctx, !porous ? 'This membrane has no pores; the molecules that cross it dissolve in it and diffuse through, whatever their size.'
      : names.length === 0 ? 'Pores ' + fmt(pw, 1) + ' nm wide are narrower than every molecule here, so nothing gets through.'
      : names.length === 3 ? 'Pores ' + fmt(pw, 1) + ' nm wide are wider than every molecule here, so all three kinds get through and the membrane is not selective.'
      : 'Pores ' + fmt(pw, 1) + ' nm wide let the ' + names.join(' and ') + ' molecules through and hold back the ' + KINDS.filter((k, i) => !passes[i]).map((k) => k.name).join(' and ') + ' ones.');
    if (porous) readout(d.readout, `\\text{a molecule passes if it is narrower than the pore, } ${fmt(pw, 1)}\\ \\text{nm:}\\quad ${KINDS.map((k, i) => `${fmt(k.nm, 1)}\\ \\text{nm}\\ ${passes[i] ? '<' : '>'}\\ ${fmt(pw, 1)}`).join(',\\quad ')}`,
      'A membrane with pores is selective by size alone. The membrane is drawn at about a quarter of the thickness a real one would have on this scale, since 6.5 to 10 nm across would put it wider than the molecules beside it.');
    else readout(d.readout, `\\text{a molecule crosses if it dissolves in the membrane, whatever its size}`,
      'The molecules that cross this membrane dissolve in it, or react with molecules in it, on the way through, so which ones get across depends on what the membrane is made of rather than on how big the molecule is. Living membranes are 6.5 to 10 nm across, and this one is drawn at about a quarter of that thickness on the scale of the molecules.');
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
  const pi = ctl(d.controls, { label: '\\text{osmotic pressure}', cls: 'pressure', min: 0, max: 3, step: 0.01, value: 0.98, unit: 'kPa', dec: 2, aria: 'the relative osmotic pressure of the two solutions' });
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0, max: 30, step: 0.1, value: 10, unit: 'cm', dec: 1, aria: 'the extra height of fluid on the right' });
  const RHO = 1000, G = 9.8;
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
    const pc = C('pressure'), xc = C('position');
    const P = pi.v, h = hs.v, bp = (RHO * G * (h / 100)) / 1000, net = P - bp;
    const hl = LEVEL0 - h / 2, hr = LEVEL0 + h / 2, yl = yOf(hl), yr = yOf(hr);
    const balanced = Math.abs(net) < 0.005;
    /* the fluid, then the glass */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(BL + 3, yl, MX - BL - 3, BB - yl); ctx.fillRect(MX, yr, BR - MX - 3, BB - yr); ctx.restore();
    line(ctx, BL + 3, yl, MX, yl, PAL.muted, 2); line(ctx, MX, yr, BR - 3, yr, PAL.muted, 2);
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
    line(ctx, MX, BT, MX, BB, PAL.muted, 2, [8, 8]);
    line(ctx, MX, BB + 4, MX, BB + 24, PAL.muted, 2);
    text(ctx, 'semipermeable membrane, passing water but not sugar', MX, BB + 42, PAL.muted, { size: 18, align: 'center' });
    /* the legend and the two solutions */
    water(ctx, 80, 104); text(ctx, 'water', 98, 104, PAL.muted, { size: 18 });
    sugar(ctx, 190, 104); text(ctx, 'sugar', 208, 104, PAL.muted, { size: 18 });
    text(ctx, P > 0 ? 'less sugar' : 'the same solution', (BL + MX) / 2, yl - 22, PAL.ink, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, P > 0 ? 'more sugar' : 'the same solution', (MX + BR) / 2, yr - 22, PAL.ink, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the extra height on the right */
    if (h > 0) {
      line(ctx, MX, yl, BR + 30, yl, alpha(xc, 0.6), 2, [6, 8]);
      line(ctx, BR + 3, yr, BR + 30, yr, alpha(xc, 0.6), 2, [6, 8]);
      vbracket(ctx, BR + 34, yr, yl, xc, 'h = ' + fmt(h, 1) + ' cm', 1);
    } else text(ctx, 'h = 0', BR + 50, yl, xc, { size: 22, weight: 600 });
    /* the two pressures at the membrane, drawn from it, and the net transfer beneath the beaker */
    const K = 90, ya = (yl + BB) / 2 - 24, yb = ya + 48;
    if (P > 0) { arrow(ctx, MX, ya, MX + K * P, ya, pc, 5); text(ctx, 'osmotic pressure ' + fmt(P, 2) + ' kPa', MX + K * P + 12, ya, pc, { size: 19, weight: 600, bg: PAL.panel }); }
    if (bp > 0) { arrow(ctx, MX, yb, MX - K * bp, yb, pc, 5); text(ctx, 'back pressure ρgh = ' + fmt(bp, 2) + ' kPa', MX - K * bp - 12, yb, pc, { size: 19, weight: 600, align: 'right', bg: PAL.panel }); }
    const yn = BB + 92;
    if (balanced) text(ctx, P > 0 ? 'the two pressures balance: the net transfer of water is zero' : 'no osmotic pressure and no back pressure: nothing moves', MX, yn, PAL.ink, { size: 20, weight: 600, align: 'center' });
    else {
      arrow(ctx, MX, yn, MX + K * net, yn, pc, 6);
      text(ctx, net > 0 ? 'net transfer of water to the right, ' + fmt(net, 2) + ' kPa unbalanced' : 'reverse osmosis: water driven back to the left, ' + fmt(-net, 2) + ' kPa unbalanced', MX, yn + 34, pc, { size: 20, weight: 600, align: 'center' });
    }
    topline(ctx, P === 0 && h === 0 ? 'With the same concentration on both sides there is no osmotic pressure, and the two levels stand even.'
      : balanced ? 'With ' + fmt(h, 1) + ' cm of extra height on the right the back pressure is ' + fmt(bp, 2) + ' kPa, equal to the osmotic pressure, so the net transfer of water is zero.'
      : net > 0 ? 'With ' + fmt(h, 1) + ' cm of extra height on the right the back pressure is ' + fmt(bp, 2) + ' kPa, less than the osmotic pressure of ' + fmt(P, 2) + ' kPa, so water still moves to the right and the column rises.'
      : 'With ' + fmt(h, 1) + ' cm of extra height on the right the back pressure is ' + fmt(bp, 2) + ' kPa, more than the osmotic pressure of ' + fmt(P, 2) + ' kPa, so water is driven back to the left.');
    readout(d.readout, `\\kPr = \\krho\\kg\\kh = (1.00\\times10^{3}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2)(${fmt(h / 100, 3)}\\ \\text{m}) = ${fmt(bp * 1000, 0)}\\ \\text{Pa} = ${fmt(bp, 2)}\\ \\text{kPa}`,
      balanced ? 'The back pressure ρgh equals the relative osmotic pressure of the two solutions, ' + fmt(P, 2) + ' kPa, so as much water crosses one way as the other and the level stops rising.'
        : net > 0 ? 'The relative osmotic pressure of the two solutions is ' + fmt(P, 2) + ' kPa and the back pressure has reached only ' + fmt(bp, 2) + ' kPa, so water still moves to the right and the column goes on rising until the two are equal, at h = ' + fmt((P * 1000) / (RHO * G) * 100, 1) + ' cm.'
        : 'The back pressure ' + fmt(bp, 2) + ' kPa exceeds the relative osmotic pressure ' + fmt(P, 2) + ' kPa, so water is forced back through the membrane against its concentration difference. This is reverse osmosis, which a piston can produce as well, and it is how salt water is desalinated.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
