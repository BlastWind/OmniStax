/* Figures for section 4.6 PDEs, separation of variables, and the heat equation. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, arrow, text, headline, register, readout, fmt, hover, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const PI = Math.PI;
const n2 = (v, dec = 2) => fmt(v, dec);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, ...o });
/* three significant figures, trailing zeros dropped: 12.9, 0.478, 0.1, 1 */
const sig = (v) => { const a = Math.abs(v); if (a === 0) return '0'; const d = Math.max(0, 2 - Math.floor(Math.log10(a))); return (+a.toFixed(d)).toString(); };
/* a share of a start as a percentage the headline can read */
const pct = (p) => (p >= 0.9995 ? '100%' : p >= 0.1 ? fmt(100 * p, 0) + '%' : p >= 0.01 ? fmt(100 * p, 1) + '%' : p >= 0.0001 ? fmt(100 * p, 2) + '%' : 'under 0.01%');

/* The temperature scale, the chapter's one fact (COLOR.md): a false-colour map of the temperature, cold blue
   through violet and rose to hot amber, the same in both themes and drawn through F.fact (facts "spectrum").
   The stops are the scale's own colours. */
const TEMP_STOPS = ['#2b30b4', '#7a2cbf', '#c2408a', '#ef6f3a', '#f4c43c'].map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)));
function heat(s) {
  const p = clamp(s, 0, 1) * (TEMP_STOPS.length - 1), i = Math.min(TEMP_STOPS.length - 2, Math.floor(p)), f = p - i;
  const [r, g, b] = TEMP_STOPS[i].map((c, j) => Math.round(c + (TEMP_STOPS[i + 1][j] - c) * f));
  return F.fact(`rgb(${r}, ${g}, ${b})`);
}
const LUT_N = 64;
const lut = () => Array.from({ length: LUT_N + 1 }, (_, j) => heat(j / LUT_N));
/* the scale's legend: a bar along x (horizontal) or up (vertical), its ticks and its title */
function legend(ctx, box, range, ticks, vertical, title) {
  const L = lut(), n = 60;
  for (let j = 0; j < n; j++) {
    ctx.fillStyle = L[Math.round(((j + 0.5) / n) * LUT_N)];
    if (vertical) { const h = (box.b - box.t) / n; ctx.fillRect(box.l, box.b - (j + 1) * h - 0.5, box.r - box.l, h + 1); }
    else { const w = (box.r - box.l) / n; ctx.fillRect(box.l + j * w - 0.5, box.t, w + 1, box.b - box.t); }
  }
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.strokeRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
  ticks.forEach((v) => {
    const s = (v - range[0]) / (range[1] - range[0]);
    if (vertical) { const y = box.b - s * (box.b - box.t); line(ctx, box.r, y, box.r + 8, y, PAL.muted, 2); text(ctx, fmt(v, Number.isInteger(v) ? 0 : 1), box.r + 14, y, PAL.muted, { size: 17 }); }
    else { const x = box.l + s * (box.r - box.l); line(ctx, x, box.b, x, box.b + 8, PAL.muted, 2); text(ctx, fmt(v, Number.isInteger(v) ? 0 : 1), x, box.b + 24, PAL.muted, { size: 17, align: 'center' }); }
  });
  if (vertical) mark(ctx, title, (box.l + box.r) / 2, box.t - 24, C('function'), { align: 'center' });
  else mark(ctx, title, box.l - 14, (box.t + box.b) / 2, C('function'), { align: 'right' });
}
/* a polyline in data units, clipped to its axes' box */
function poly(ctx, ax, pts, color, w, dash) {
  if (pts.length < 2) return;
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l - 4, ax.box.t - 4, ax.box.r - ax.box.l + 8, ax.box.b - ax.box.t + 8); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.stroke(); ctx.restore();
}

/* Example 4.6.1's wire, L = 1 and k = 0.003, starting from f(x) = 50x(1 − x). */
const K0 = 0.003, f0 = (x) => 50 * x * (1 - x);
/* its series: ends in ice, Σ_odd 400/(π³n³) sin(nπx) e^(−n²π²kt); insulated, 25/3 + Σ_even −200/(π²n²) cos(nπx) e^(−n²π²kt) */
function wireSeries(x, t, ins, k) {
  if (t < 1e-9) return f0(x);
  let s = ins ? 25 / 3 : 0;
  for (let n = ins ? 2 : 1; n <= 160; n += 2) {
    const e = Math.exp(-n * n * PI * PI * k * t); if (e < 1e-9) break;
    s += ins ? (-200 / (PI * PI * n * n)) * Math.cos(n * PI * x) * e : (400 / (PI ** 3 * n ** 3)) * Math.sin(n * PI * x) * e;
  }
  return s;
}

/* Figure 4.15, with the region of the unnumbered region image: the wire as N beads (3 to 61, odd, so that one
   bead sits at the middle), each at its temperature u_i, each moving at u_t = k(u_{i−1} − 2u_i + u_{i+1})/(Δx)²,
   which is (2k/(Δx)²)(the neighbours' average − u_i). Ends in ice: the beads sit at x_i = i/(N + 1) and the
   neighbours beyond the last beads are held at 0. Insulated ends: the beads sit at the cell centres
   x_i = (i − ½)/N and the last bead's only neighbour is the one inside, so no heat crosses the end (u_x = 0).
   The beads' system is solved exactly from its discrete modes (sines, or cosines for insulated ends), so every
   state is a function of t: the scrubber reaches it in either direction. Above, the beads with their rates as
   arrows (the change in 10 time units at the present rate) and the continuous wire's series faint; the middle
   bead's two neighbours are joined by a dashed chord whose midpoint is their average. The wire beneath in the
   temperature scale; below, the region 0 < x < 1, t > 0 filling with those temperatures row by row, its three
   sides labelled with the side conditions as the book's region image labels them. The clock runs t from 0 to
   100, 6 s a loop. Axes: u 0 to 14 (the largest start is 12.5; an end bead's arrow past the box is cut at its
   edge), x 0 to 1, t 0 to 100. */
(function () {
  const d = sim('sim-discrete-rod', 900);
  const T = 100, cy = cycle(() => T, 1.2), TAU = 10, ROWS = 100;
  let M = null;
  const reset = () => { cy.reset(); M = null; };
  const ends = choice(d.controls, { label: 'ends', key: 'ends', options: [{ value: 'ice', label: 'in ice' }, { value: 'ins', label: 'insulated' }], value: 'ice', aria: 'the ends of the wire', onInput: reset });
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 3, max: 61, step: 2, value: 11, unit: 'beads', dec: 0, detents: [5, 11, 61], aria: 'the number of beads', onInput: reset });
  const ro = readout(d);
  const BEADS = { l: 200, r: 1060, t: 140, b: 380 }, STRIP = { t: 400, b: 436 }, REG = { l: 200, r: 1060, t: 530, b: 800 };
  const LEGBOX = { l: 1250, r: 1274, t: REG.t, b: REG.b };
  /* the beads' exact solution from the discrete modes, and the history rows as indices into the scale */
  function build() {
    const N = Ns.v, ins = ends.value === 'ins', h = ins ? 1 / N : 1 / (N + 1);
    const xs = Array.from({ length: N }, (_, i) => (ins ? (i + 0.5) * h : (i + 1) * h)), u0 = xs.map(f0);
    const modes = [];
    for (let n = ins ? 0 : 1; n <= (ins ? N - 1 : N); n++) {
      const v = xs.map((_, i) => (ins ? Math.cos((n * PI * (i + 0.5)) / N) : Math.sin((n * PI * (i + 1)) / (N + 1))));
      const mu = (-4 * K0 / (h * h)) * Math.sin((n * PI) / (2 * (ins ? N : N + 1))) ** 2;
      const c = (ins ? (n ? 2 : 1) / N : 2 / (N + 1)) * v.reduce((s, vi, i) => s + vi * u0[i], 0);
      modes.push({ v, mu, c });
    }
    const at = (t) => xs.map((_, i) => modes.reduce((s, m) => s + m.c * Math.exp(m.mu * t) * m.v[i], 0));
    const rows = Array.from({ length: ROWS }, (_, j) => at(((j + 0.5) * T) / ROWS).map((u) => Math.round(clamp(u / 12.5, 0, 1) * LUT_N)));
    M = { N, ins, h, xs, at, rows, mean: u0.reduce((s, u) => s + u, 0) / N };
  }
  let hits = [];
  hover(d.stage, () => hits, d.c);
  function draw() {
    if (!M) build();
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), rc = C('region'), L = lut();
    const t = cy.now(), { N, ins, h, xs } = M, u = M.at(t), mid = (N - 1) / 2;
    const left = (i) => (i > 0 ? u[i - 1] : ins ? u[0] : 0), right = (i) => (i < N - 1 ? u[i + 1] : ins ? u[N - 1] : 0);
    const rate = (i) => (K0 * (left(i) - 2 * u[i] + right(i))) / (h * h);
    const aIce = ends.a('ice'), aIns = ends.a('ins');
    hits = [];
    /* the beads above the wire */
    const ax = axes(ctx, BEADS, [0, 1], [0, 14], { yl: 'u', yc: fc, nx: 0, ny: 7 });
    poly(ctx, ax, Array.from({ length: 101 }, (_, j) => [j / 100, wireSeries(j / 100, t, ins, K0)]), alpha(fc, 0.4), 3);
    hits.push({ x: ax.X(0.3), y: ax.Y(wireSeries(0.3, t, ins, K0)), r: 12, name: `the continuous wire’s u(x, ${fmt(t, 1)}), from its series` });
    const curve = [[0, ins ? u[0] : 0], ...xs.map((x, i) => [x, u[i]]), [1, ins ? u[N - 1] : 0]];
    poly(ctx, ax, curve, fc, 4);
    /* the middle bead's neighbours, the chord between them and its midpoint, their average */
    const avg = (left(mid) + right(mid)) / 2;
    poly(ctx, ax, [[xs[mid] - h, left(mid)], [xs[mid] + h, right(mid)]], alpha(PAL.ink, 0.6), 2, [6, 6]);
    /* each bead's rate, the change it would make in 10 time units */
    const big = N > 31 ? 4 : N > 15 ? 6 : 8;
    xs.forEach((x, i) => {
      const r = rate(i), y0 = ax.Y(u[i]), y1 = clamp(ax.Y(u[i] + TAU * r), BEADS.t, BEADS.b);
      if (Math.abs(y1 - y0) > 3) arrow(ctx, ax.X(x), y0, ax.X(x), y1, dc, N > 31 ? 2 : 3);
    });
    xs.forEach((x, i) => {
      dot(ctx, ax.X(x), ax.Y(u[i]), fc, true, i === mid ? Math.max(big, 7) : big);
      hits.push({ x: ax.X(x), y: ax.Y(u[i]), r: Math.max(8, big + 4), name: `bead ${i + 1} at x = ${n2(x, 3)}: u = ${n2(u[i])}, moving at u_t = ${n2(rate(i), 3)} per unit time` });
    });
    dot(ctx, ax.X(xs[mid]), ax.Y(avg), PAL.ink, false, 6);
    hits.push({ x: ax.X(xs[mid]), y: ax.Y(avg), r: 10, name: `the average of the middle bead’s neighbours, ${n2(avg)}` });
    if (aIce > 0) {
      ctx.save(); ctx.globalAlpha *= aIce;
      [0, 1].forEach((x) => { dot(ctx, ax.X(x), ax.Y(0), PAL.muted, true, 6); hits.push({ x: ax.X(x), y: ax.Y(0), r: 10, name: 'the end held at temperature 0 by the ice' }); });
      ctx.restore();
    }
    /* the legend of the bead panel, in the column at its right */
    const LX = 1100;
    dot(ctx, LX + 10, 170, fc, true, 7); text(ctx, 'a bead, its temperature u_i', LX + 30, 170, PAL.ink, { size: 17 });
    arrow(ctx, LX + 10, 222, LX + 10, 196, dc, 3); text(ctx, 'its rate u_t × 10', LX + 30, 210, PAL.ink, { size: 17 });
    line(ctx, LX - 4, 250, LX + 24, 250, alpha(PAL.ink, 0.6), 2, [6, 6]); dot(ctx, LX + 10, 250, PAL.ink, false, 5); text(ctx, 'neighbours’ average', LX + 30, 250, PAL.ink, { size: 17 });
    line(ctx, LX - 4, 290, LX + 24, 290, alpha(fc, 0.4), 3); text(ctx, 'continuous wire', LX + 30, 290, PAL.ink, { size: 17 });
    /* the wire, cell by cell in the temperature scale, and its ends */
    const X = ax.X, cells = ins ? xs.map((x, i) => [x - h / 2, x + h / 2, u[i]]) : [[0, h / 2, 0], ...xs.map((x, i) => [x - h / 2, x + h / 2, u[i]]), [1 - h / 2, 1, 0]];
    cells.forEach(([a, b, v]) => { ctx.fillStyle = L[Math.round(clamp(v / 12.5, 0, 1) * LUT_N)]; ctx.fillRect(X(a) - 0.5, STRIP.t, X(b) - X(a) + 1, STRIP.b - STRIP.t); });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.strokeRect(X(0), STRIP.t, X(1) - X(0), STRIP.b - STRIP.t); ctx.restore();
    hits.push({ x: X(0.5), y: (STRIP.t + STRIP.b) / 2, r: 18, name: 'the wire, coloured by its temperature' });
    if (aIce > 0) {
      ctx.save(); ctx.globalAlpha *= aIce; ctx.fillStyle = L[0]; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
      [[X(0) - 30, X(0) - 3], [X(1) + 3, X(1) + 30]].forEach(([a, b]) => { ctx.fillRect(a, STRIP.t - 6, b - a, STRIP.b - STRIP.t + 12); ctx.strokeRect(a, STRIP.t - 6, b - a, STRIP.b - STRIP.t + 12); });
      ctx.restore();
      hits.push({ x: X(0) - 16, y: (STRIP.t + STRIP.b) / 2, r: 16, name: 'ice at temperature 0' }, { x: X(1) + 16, y: (STRIP.t + STRIP.b) / 2, r: 16, name: 'ice at temperature 0' });
    }
    if (aIns > 0) {
      ctx.save(); ctx.globalAlpha *= aIns;
      [X(0) - 5, X(1) + 5].forEach((x) => line(ctx, x, STRIP.t - 8, x, STRIP.b + 8, PAL.ink, 8));
      ctx.restore();
      hits.push({ x: X(0) - 5, y: (STRIP.t + STRIP.b) / 2, r: 14, name: 'an insulated end: no heat crosses it' }, { x: X(1) + 5, y: (STRIP.t + STRIP.b) / 2, r: 14, name: 'an insulated end: no heat crosses it' });
    }
    /* the region 0 < x < 1, t > 0 and its history so far */
    const rg = axes(ctx, REG, [0, 1], [0, T], { xl: 'x', yl: 't', nx: 4, ny: 4, fx: (v) => fmt(v, 2) });
    ctx.save(); ctx.fillStyle = alpha(rc, 0.08); ctx.fillRect(REG.l, REG.t, REG.r - REG.l, REG.b - REG.t); ctx.restore();
    const shown = Math.min(ROWS, Math.ceil((t / T) * ROWS - 1e-9)), rh = (REG.b - REG.t) / ROWS;
    const edges = ins ? xs.map((x) => [x - h / 2, x + h / 2]) : [[0, h / 2], ...xs.map((x) => [x - h / 2, x + h / 2]), [1 - h / 2, 1]];
    for (let j = 0; j < shown; j++) {
      const row = M.rows[j], yb = REG.b - j * rh, top = Math.max(rg.Y(t), yb - rh);
      edges.forEach(([a, b], c) => { const idx = ins ? row[c] : c === 0 || c === edges.length - 1 ? 0 : row[c - 1]; ctx.fillStyle = L[idx]; ctx.fillRect(rg.X(a) - 0.5, top - 0.5, rg.X(b) - rg.X(a) + 1, yb - top + 1); });
    }
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 2.5; ctx.strokeRect(REG.l, REG.t, REG.r - REG.l, REG.b - REG.t); ctx.restore();
    if (t > 0) line(ctx, REG.l, rg.Y(t), REG.r, rg.Y(t), alpha(PAL.ink, 0.7), 2, [10, 10]);
    hits.push({ x: (REG.l + REG.r) / 2, y: rg.Y(t), r: 10, name: `the wire now, t = ${fmt(t, 1)}` },
      { x: (REG.l + REG.r) / 2, y: (REG.t + REG.b) / 2, r: 60, name: 'the region 0 < x < 1, t > 0, each row the wire’s temperatures at that time' });
    const side = ins ? '$\\kux = 0$' : '$\\ku = 0$', ym = (REG.t + REG.b) / 2;
    mark(ctx, side, REG.l - 60, ym, PAL.ink, { align: 'right', weight: 400 });
    mark(ctx, side, REG.r + 14, ym, PAL.ink, { align: 'left', weight: 400 });
    mark(ctx, '$\\ku(x, 0) = \\kf(x)$', (REG.l + REG.r) / 2, REG.b + 58, PAL.ink, { align: 'center', weight: 400 });
    mark(ctx, '$\\kut = k\\kuxx$', (REG.l + REG.r) / 2, REG.t - 24, PAL.ink, { align: 'center', weight: 400 });
    legend(ctx, LEGBOX, [0, 12.5], [0, 2.5, 5, 7.5, 10, 12.5], true, '$\\ku$');
    hits.push({ x: (LEGBOX.l + LEGBOX.r) / 2, y: (LEGBOX.t + LEGBOX.b) / 2, r: 20, name: 'the temperature scale, from 0 to 12.5' });
    /* the headline and the readout at the middle bead */
    const um = u[mid], t1 = fmt(t, 1);
    headline(ctx, ins
      ? `$t = ${t1}$, $N = ${N}$: the end bead, ${n2(u[0])}, moves only toward its one neighbour, ${n2(u[1])}, so no heat leaves, and the beads even out toward their average ${n2(M.mean)}.`
      : `$t = ${t1}$, $N = ${N}$: the middle bead is ${n2(um)} and its neighbours average ${n2(avg)}, so it ${um > avg ? 'cools' : 'warms'}; heat leaves through the ends into the ice.`);
    const um3 = +um.toFixed(3), av3 = +avg.toFixed(3), diff = +(av3 - um3).toFixed(3);
    const fac = (2 * K0) / (h * h), facS = fac < 10 ? fac.toFixed(3) : fac.toFixed(2), rateS = (+facS * diff).toFixed(3);
    const den = ins ? N : N + 1;
    ro.set(`\\kut = \\frac{2k}{(\\Delta x)^2}\\Bigl(\\frac{\\ku_{i-1} + \\ku_{i+1}}{2} - \\ku_i\\Bigr) = \\frac{2(0.003)}{(1/${den})^2}\\,(${av3.toFixed(3)} - ${um3.toFixed(3)}) = ${facS}\\,(${fmt(diff, 3)}) = ${fmt(+rateS, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* Figure 4.16 + 4.17 + 4.18 + 4.19 (Examples 4.6.1, 4.6.2, 4.6.3): the profile u(x, t) on L = 1 as the clock runs
   t from 0 to 100 (6 s a loop), the initial f faint, the first term of the series dashed; the wire beneath in the
   temperature scale; beside it one bar per term, its height |c_n| e^(−n²π²kt) on a logarithmic scale from 10⁻⁴ to
   10², the start hollow; below, the midpoint u(½, t) traced against t with the first term alone dashed and, with
   the ends in ice, the level of half the start and the time it is reached. A choice of the ends (in ice: sines,
   Example 4.6.1; insulated: cosines and the constant a₀/2, Example 4.6.3) and of the start (50x(1 − x); Example
   4.6.2's 0.1 sin πx + sin 2πx; a hot middle, 12.5 on 1/4 < x < 3/4 and 0 elsewhere, which has jumps), and k on a
   slider (0.001 to 0.01, the book's 0.003 a detent). A change of choice bends the profile into the new start, the
   old bars fading out as the new ones arrive, and the clock waits for the bend. Axes: u 0 to 14 (−1.2 to 1.2 for
   Example 4.6.2's start), x 0 to 1; the midpoint 0 to 14 (0 to 0.12), t 0 to 100. */
(function () {
  const d = sim('sim-heat-modes', 920);
  const T = 100, cy = cycle(() => T, 1.2);
  let cur = { e: 'ice', s: 'parab' }, from = null;
  const swap = () => { from = { ...cur, t: cy.now(), k: ks.v }; cur = { e: ends.value, s: start.value }; cy.reset(); };
  const ends = choice(d.controls, { label: 'ends', key: 'ends', options: [{ value: 'ice', label: 'in ice' }, { value: 'ins', label: 'insulated' }], value: 'ice', aria: 'the ends of the wire', onInput: swap });
  const start = choice(d.controls, { label: 'start', key: 'start', options: [{ value: 'parab', label: '50x(1 − x)' }, { value: 'two', label: '0.1 sin πx + sin 2πx' }, { value: 'hot', label: 'hot middle' }], value: 'parab', aria: 'the initial temperature', onInput: swap });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.001, max: 0.01, step: 0.0005, value: K0, unit: '', dec: 4, detents: [K0], aria: 'the thermal diffusivity k', onInput: () => cy.reset() });
  const ro = readout(d);
  /* ∫₀¹ sin(mπx) cos(nπx) dx */
  const sc = (m, n) => (m === n ? 0 : (m * (1 - (-1) ** (m + n))) / (PI * (m * m - n * n)));
  const STARTS = {
    parab: { f: f0, u: [0, 14], scale: [0, 12.5], ticks: [0, 2.5, 5, 7.5, 10, 12.5], mid: [0, 14], uy: 7, my: 7, dec: 0,
      sin: (n) => (n % 2 ? 400 / (PI ** 3 * n ** 3) : 0), c0: 25 / 3, cos: (n) => (n % 2 ? 0 : -200 / (PI * PI * n * n)), N: 160 },
    two: { f: (x) => 0.1 * Math.sin(PI * x) + Math.sin(2 * PI * x), u: [-1.2, 1.2], scale: [-1, 1], ticks: [-1, -0.5, 0, 0.5, 1], mid: [0, 0.12], uy: 4, my: 4, dec: 2,
      sin: (n) => (n === 1 ? 0.1 : n === 2 ? 1 : 0), c0: 1 / (5 * PI), cos: (n) => 2 * (0.1 * sc(1, n) + sc(2, n)), N: 160 },
    hot: { f: (x) => (x > 0.25 && x < 0.75 ? 12.5 : 0), u: [0, 14], scale: [0, 12.5], ticks: [0, 2.5, 5, 7.5, 10, 12.5], mid: [0, 14], uy: 7, my: 7, dec: 0,
      sin: (n) => (25 / (n * PI)) * (Math.cos((n * PI) / 4) - Math.cos((3 * n * PI) / 4)), c0: 6.25, cos: (n) => (25 / (n * PI)) * (Math.sin((3 * n * PI) / 4) - Math.sin((n * PI) / 4)), N: 600 },
  };
  /* the series of a state: its constant, and its terms with their coefficients and rates n²π²k */
  const memo = new Map();
  function seriesOf(st, k) {
    const key = `${st.e}|${st.s}|${k}`; if (memo.has(key)) return memo.get(key);
    const P = STARTS[st.s], ins = st.e === 'ins', terms = [];
    for (let n = 1; n <= P.N; n++) { const c = ins ? P.cos(n) : P.sin(n); if (Math.abs(c) > 1e-12) terms.push({ n, c, lam: n * n * PI * PI * k }); }
    const S = { ins, c0: ins ? P.c0 : 0, terms, P };
    memo.set(key, S); return S;
  }
  const basis = (S, n, x) => (S.ins ? Math.cos(n * PI * x) : Math.sin(n * PI * x));
  function uOf(S, x, t) {
    if (t < 1e-9) return S.P.f(x);
    let s = S.c0;
    for (const m of S.terms) { const e = Math.exp(-m.lam * t); if (e * Math.abs(m.c) < 1e-9) continue; s += m.c * e * basis(S, m.n, x); }
    return s;
  }
  const NS = 400;
  const samples = (S, t) => Array.from({ length: NS + 1 }, (_, j) => uOf(S, j / NS, t));
  const interp = (ys) => (x) => { const p = clamp(x, 0, 1) * NS, i = Math.min(NS - 1, Math.floor(p)); return ys[i] + (ys[i + 1] - ys[i]) * (p - i); };
  const midOf = (S, t) => (t < 1e-9 ? S.P.f(0.5) : uOf(S, 0.5, t));
  /* the midpoint's curve over the whole clock, computed once per state and read off between its samples */
  function midFast(S) {
    if (!S.mc) S.mc = Array.from({ length: 1001 }, (_, j) => midOf(S, (j * T) / 1000));
    const a = S.mc; return (s) => { const p = clamp(s / T, 0, 1) * 1000, i = Math.min(999, Math.floor(p)); return a[i] + (a[i + 1] - a[i]) * (p - i); };
  }
  const first = (S) => S.terms[0];
  /* the first term alone: the n = 1 sine with the ends in ice, the constant a₀/2 with them insulated */
  const firstTerm = (S, x, t) => (S.ins ? S.c0 : first(S).c * Math.exp(-first(S).lam * t) * basis(S, first(S).n, x));
  const PROF = { l: 170, r: 860, t: 130, b: 392 }, STRIP = { t: 404, b: 440 }, BARS = { l: 1000, r: 1320, t: 130, b: 360 }, LEG = { l: 1000, r: 1320, t: 418, b: 438 }, MID = { l: 170, r: 1320, t: 560, b: 836 };
  const LOG = [-4, 2];
  const slotsOf = (S) => (S.ins ? [0, 1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const coefOf = (S, n) => (n === 0 ? S.c0 : (S.terms.find((m) => m.n === n) || { c: 0 }).c);
  const lerp = (a, b, q) => a + (b - a) * q;
  let hits = [];
  hover(d.stage, () => hits, d.c);
  function bars(ctx, S, t, k, op, arrive) {
    const sl = slotsOf(S), w = (BARS.r - BARS.l) / sl.length, bw = Math.min(24, w * 0.6);
    const Y = (lg) => BARS.b - ((clamp(lg, LOG[0], LOG[1]) - LOG[0]) / (LOG[1] - LOG[0])) * (BARS.b - BARS.t);
    const qc = C('sequence');
    ctx.save(); ctx.globalAlpha *= op;
    sl.forEach((n, i) => {
      const cx = BARS.l + (i + 0.5) * w, c = coefOf(S, n), lam = n * n * PI * PI * k, now = Math.abs(c) * Math.exp(-lam * t);
      const g = F.ease.smooth(F.stagger(arrive, i, sl.length));
      text(ctx, String(n), cx, BARS.b + 26, PAL.muted, { size: 17, align: 'center' });
      if (Math.abs(c) < 1e-12) { if (op > 0.5) hits.push({ x: cx, y: BARS.b - 12, r: 14, name: `n = ${n}: no such term in this series` }); return; }
      const y0 = Y(Math.log10(Math.abs(c))), yn = Y(Math.log10(Math.max(now, 1e-9)));
      ctx.save(); ctx.strokeStyle = qc; ctx.lineWidth = 2.5; ctx.strokeRect(cx - bw / 2, lerp(BARS.b, y0, g), bw, BARS.b - lerp(BARS.b, y0, g)); ctx.restore();
      if (now >= 10 ** LOG[0]) { ctx.fillStyle = qc; ctx.fillRect(cx - bw / 2, lerp(BARS.b, yn, g), bw, BARS.b - lerp(BARS.b, yn, g)); }
      if (op > 0.5) hits.push({ x: cx, y: (yn + BARS.b) / 2, r: 16, name: n === 0
        ? `the constant term a₀/2 = ${n2(c, 3)}, which never decays`
        : `n = ${n}: ${S.ins ? 'aₙ' : 'bₙ'} = ${c < 0 ? '−' : ''}${sig(c)}, times e^(−n²π²kt) = ${Math.exp(-lam * t) >= 1e-4 ? sig(Math.exp(-lam * t)) : 'under 0.0001'}` });
    });
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), sc2 = C('series'), L = lut(), k = ks.v, t = cy.now(), arrive = F.arrival(d);
    const m = Math.min(ends.k, start.k), mixing = m < 1 && from;
    const S = seriesOf(cur, k), Sf = mixing ? seriesOf(from, from.k) : null, P = S.P, Pf = Sf ? Sf.P : P;
    hits = [];
    /* the profile: during a change of choice the old profile bends into the new start */
    const ur = [lerp(Pf.u[0], P.u[0], mixing ? m : 1), lerp(Pf.u[1], P.u[1], mixing ? m : 1)];
    const ax = axes(ctx, PROF, [0, 1], ur, { nx: 0, ny: P.uy, fy: (v) => fmt(v, P.dec === 0 ? 0 : 1) });
    mark(ctx, '$\\ku(x, t)$', PROF.l, PROF.t - 24, fc, { align: 'left', weight: 400 });
    [0, 0.25, 0.5, 0.75, 1].forEach((v) => text(ctx, fmt(v, 2), ax.X(v), STRIP.b + 26, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, 'x', PROF.r + 26, STRIP.b + 26, PAL.ink, { size: 20, weight: 600 });
    const ysNow = samples(S, t);
    const ys = mixing ? (() => { const a = samples(Sf, from.t); return ysNow.map((v, j) => lerp(a[j], v, m)); })() : ysNow;
    plot(ctx, ax, mixing ? interp(samples(Sf, 0).map((v, j) => lerp(v, P.f(j / NS), m))) : P.f, alpha(fc, 0.3), { w: 3 });
    if (!mixing) {
      ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, ax, (x) => firstTerm(S, x, t), sc2, { w: 3 }); ctx.restore();
      hits.push({ x: ax.X(0.15), y: ax.Y(firstTerm(S, 0.15, t)), r: 12, name: S.ins ? `the first term alone, the constant a₀/2 = ${n2(S.c0)}` : `the first term alone, ${sig(first(S).c)} sin(${first(S).n === 1 ? '' : first(S).n}πx) e^(−${sig(first(S).lam)}t)` });
    }
    plot(ctx, ax, t < 1e-9 && !mixing ? P.f : interp(ys), fc, { w: 5 });
    hits.push({ x: ax.X(0.5), y: ax.Y(ys[NS / 2]), r: 14, name: `u(x, ${fmt(t, 1)}), the temperature now` },
      { x: ax.X(0.9), y: ax.Y(P.f(0.9)), r: 12, name: 'u(x, 0), the initial temperature' });
    /* its legend in the profile's top right corner */
    const LX = PROF.r - 200;
    line(ctx, LX, 150, LX + 34, 150, fc, 5); text(ctx, 'now', LX + 46, 150, PAL.ink, { size: 17 });
    line(ctx, LX, 174, LX + 34, 174, alpha(fc, 0.3), 3); text(ctx, 'at t = 0', LX + 46, 174, PAL.ink, { size: 17 });
    if (!mixing) { line(ctx, LX, 198, LX + 34, 198, sc2, 3, [10, 10]); text(ctx, 'first term', LX + 46, 198, PAL.ink, { size: 17 }); }
    /* the wire beneath, in the temperature scale */
    const sr = [lerp(Pf.scale[0], P.scale[0], mixing ? m : 1), lerp(Pf.scale[1], P.scale[1], mixing ? m : 1)];
    const cells = 200;
    for (let j = 0; j < cells; j++) {
      const v = ys[Math.round(((j + 0.5) / cells) * NS)], s = (v - sr[0]) / (sr[1] - sr[0]);
      ctx.fillStyle = L[Math.round(clamp(s, 0, 1) * LUT_N)]; ctx.fillRect(ax.X(j / cells) - 0.5, STRIP.t, ax.X(1 / cells) - ax.X(0) + 1, STRIP.b - STRIP.t);
    }
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.strokeRect(ax.X(0), STRIP.t, ax.X(1) - ax.X(0), STRIP.b - STRIP.t); ctx.restore();
    const aIce = ends.a('ice'), aIns = ends.a('ins');
    if (aIce > 0) {
      const z = L[Math.round(clamp((0 - sr[0]) / (sr[1] - sr[0]), 0, 1) * LUT_N)];
      ctx.save(); ctx.globalAlpha *= aIce; ctx.fillStyle = z; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
      [[ax.X(0) - 30, ax.X(0) - 3], [ax.X(1) + 3, ax.X(1) + 30]].forEach(([a, b]) => { ctx.fillRect(a, STRIP.t - 6, b - a, STRIP.b - STRIP.t + 12); ctx.strokeRect(a, STRIP.t - 6, b - a, STRIP.b - STRIP.t + 12); });
      ctx.restore();
    }
    if (aIns > 0) { ctx.save(); ctx.globalAlpha *= aIns; [ax.X(0) - 5, ax.X(1) + 5].forEach((x) => line(ctx, x, STRIP.t - 8, x, STRIP.b + 8, PAL.ink, 8)); ctx.restore(); }
    hits.push({ x: ax.X(0.5), y: (STRIP.t + STRIP.b) / 2, r: 18, name: 'the wire, coloured by its temperature' },
      { x: ax.X(0) - 16, y: (STRIP.t + STRIP.b) / 2, r: 16, name: S.ins ? 'an insulated end: no heat crosses it' : 'ice at temperature 0' },
      { x: ax.X(1) + 16, y: (STRIP.t + STRIP.b) / 2, r: 16, name: S.ins ? 'an insulated end: no heat crosses it' : 'ice at temperature 0' });
    legend(ctx, LEG, P.scale, P.ticks, false, '$\\ku$');
    /* the terms as bars, their sizes on a logarithmic scale */
    const qc = C('sequence');
    for (let e = LOG[0]; e <= LOG[1]; e++) {
      const y = BARS.b - ((e - LOG[0]) / (LOG[1] - LOG[0])) * (BARS.b - BARS.t);
      if (e > LOG[0]) line(ctx, BARS.l, y, BARS.r, y, PAL.rule, 1.5);
      if ((e - LOG[0]) % 2 === 0) text(ctx, e === 0 ? '1' : `10^{${e < 0 ? '−' : ''}${Math.abs(e)}}`, BARS.l - 12, y, PAL.muted, { size: 17, align: 'right' });
    }
    line(ctx, BARS.l, BARS.b, BARS.r, BARS.b, PAL.muted, 2); line(ctx, BARS.l, BARS.t, BARS.l, BARS.b, PAL.muted, 2);
    mark(ctx, S.ins ? '$|\\kan|\\,e^{-n^2\\pi^2 k t}$' : '$|\\kbn|\\,e^{-n^2\\pi^2 k t}$', BARS.l, BARS.t - 24, qc, { align: 'left', weight: 400 });
    text(ctx, 'n', BARS.r + 22, BARS.b + 26, PAL.ink, { size: 20, weight: 600 });
    if (mixing) bars(ctx, Sf, from.t, from.k, 1 - m, 1);
    bars(ctx, S, t, k, mixing ? m : 1, arrive);
    /* the midpoint against t, with the first term alone and, with the ends in ice, the level of half the start */
    const mr = [lerp(Pf.mid[0], P.mid[0], mixing ? m : 1), lerp(Pf.mid[1], P.mid[1], mixing ? m : 1)];
    const mx = axes(ctx, MID, [0, T], mr, { xl: 't', nx: 4, ny: P.my, fy: (v) => fmt(v, P.dec) });
    mark(ctx, '$\\ku(\\tfrac{1}{2}, t)$', MID.l, MID.t - 24, fc, { align: 'left', weight: 400 });
    const midNow = midOf(S, t), m0 = midOf(S, 0);
    const mf = midFast(S), half = !S.ins && cur.s !== 'two' ? m0 / 2 : null;
    if (half !== null && S.th === undefined) S.th = F.solve((s) => midOf(S, s) - half, 1e-6, T);
    const tHalf = half === null ? null : S.th;
    if (mixing) { ctx.save(); ctx.globalAlpha *= 1 - m; plot(ctx, mx, midFast(Sf), fc, { w: 4 }); ctx.restore(); }
    ctx.save(); ctx.globalAlpha *= mixing ? m : 1;
    if (half !== null) {
      line(ctx, MID.l, mx.Y(half), MID.r, mx.Y(half), alpha(PAL.ink, 0.5), 2, [10, 10]);
      text(ctx, `half of ${n2(m0, 1)}`, MID.r - 8, mx.Y(half) - 16, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
      hits.push({ x: MID.r - 60, y: mx.Y(half), r: 10, name: `the level ${n2(half)}, half the starting ${n2(m0, 1)}` });
    }
    ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, mx, (s) => (S.ins ? S.c0 : firstTerm(S, 0.5, s)), sc2, { w: 3 }); ctx.restore();
    plot(ctx, mx, mf, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, mx, mf, fc, { w: 5, x: [0, t] });
    if (half !== null && tHalf !== null) {
      line(ctx, mx.X(tHalf), mx.Y(half), mx.X(tHalf), MID.b, alpha(PAL.ink, 0.5), 2, [4, 8]);
      dot(ctx, mx.X(tHalf), mx.Y(half), fc, false, 8);
      text(ctx, `t = ${n2(tHalf, 1)}`, mx.X(tHalf) + 12, mx.Y(half) + 20, PAL.ink, { size: 17, bg: PAL.panel });
      hits.push({ x: mx.X(tHalf), y: mx.Y(half), r: 12, name: `the midpoint reaches ${n2(half)} at t = ${n2(tHalf, 1)}` });
    }
    dot(ctx, mx.X(t), mx.Y(midNow), fc, true, 9);
    ctx.restore();
    hits.push({ x: mx.X(t), y: mx.Y(midNow), r: 14, name: `u(½, ${fmt(t, 1)}) = ${n2(midNow, P.dec ? 3 : 2)}` },
      { x: mx.X(70), y: mx.Y(S.ins ? S.c0 : firstTerm(S, 0.5, 70)), r: 10, name: S.ins ? `the constant a₀/2 = ${n2(S.c0, 3)}` : 'the first term alone at the midpoint' });
    line(ctx, MID.r - 230, MID.t + 16, MID.r - 196, MID.t + 16, fc, 5); text(ctx, 'midpoint', MID.r - 184, MID.t + 16, PAL.ink, { size: 17 });
    line(ctx, MID.r - 230, MID.t + 40, MID.r - 196, MID.t + 40, sc2, 3, [10, 10]); text(ctx, 'first term alone', MID.r - 184, MID.t + 40, PAL.ink, { size: 17 });
    /* the headline: the two slowest terms' shares and the midpoint, or the spread about the average */
    const [t1m, t2m] = S.terms, share = (q) => pct(Math.exp(-q.lam * t)), tt = fmt(t, 1);
    if (S.ins) {
      const dev = Math.max(...ysNow.map((v) => Math.abs(v - S.c0)));
      headline(ctx, `$t = ${tt}$: the $n = ${t1m.n}$ term keeps ${share(t1m)} of its start and the $n = ${t2m.n}$ term ${share(t2m)}; every point is within ${n2(dev, P.dec ? 3 : 2)} of the average ${n2(S.c0, P.dec ? 3 : 2)}.`);
    } else {
      headline(ctx, `$t = ${tt}$: the $n = ${t1m.n}$ term keeps ${share(t1m)} of its start and the $n = ${t2m.n}$ term ${share(t2m)}; the midpoint is at ${n2(midNow, P.dec ? 3 : 2)}.`);
    }
    /* the readout: the series with the live coefficients and rates, its first two terms written out */
    const term = (q, i) => {
      const c = sig(q.c), fn = S.ins ? '\\cos' : '\\sin', arg = q.n === 1 ? '\\pi x' : `${q.n}\\pi x`;
      return `${i === 0 && !S.ins ? (q.c < 0 ? '-' : '') : q.c < 0 ? ' - ' : ' + '}${c}\\,${fn}(${arg})\\,e^{-${sig(q.lam)}\\,t}`;
    };
    const two = [t1m, t2m].map(term).join(''), more = S.terms.length > 2 ? ' + \\cdots' : '';
    ro.set(S.ins
      ? `\\ku(x,t) = \\frac{\\kazero}{2} + \\sum_{n=1}^{\\infty} \\kan \\cos(n\\pi x)\\,e^{-n^2\\pi^2 k t} = ${sig(S.c0)}${two}${more}`
      : `\\ku(x,t) = \\sum_{n=1}^{\\infty} \\kbn \\sin(n\\pi x)\\,e^{-n^2\\pi^2 k t} = ${two}${more}`);
    if (!mixing) from = null;
  }
  register(d.fig, { update: (dt) => { if (Math.min(ends.k, start.k) < 1) return; cy.step(dt, () => T / 6); }, draw });
})();
};
