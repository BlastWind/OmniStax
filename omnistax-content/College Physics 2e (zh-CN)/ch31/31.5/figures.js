/* Figures for section 31.5 Half-Life and Activity.
   The page binds time, decay constant and activity. N, N₀ and N/N₀ are counts and stay
   in ink. A nucleus of the sample is a generic nuclide, told by fill: solid while it has
   not yet decayed, hollow once it has (ch31/COLOR.md). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.5'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, text, topline, labeller, hover, readout, axes, curve, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const sig = (x, n) => Number(x.toPrecision(n));
const decOf = (x, n) => Math.max(0, n - 1 - Math.floor(Math.log10(Math.abs(x))));
const fsig = (x, n) => (x === 0 ? '0' : fmt(sig(x, n), decOf(sig(x, n), n)));
const grp = (x, sep) => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return (s + 0.5) / 4294967296; }; }

/* =====================================================================
   FIGURE 31.19 · sim-decay-curve · moving · flat (rule 28.1)
   Each nucleus i lasts U[i] half-lives, U = log₂(1/u) with u uniform, which is
   a 50% chance of lasting each half-life whatever its age. The clock runs
   0 to 50 s in RUN real seconds; each run draws a fresh sample. Graph:
   N/N₀ from 0 to 1 against t from 0 to 50 s, fixed.
===================================================================== */
(function () {
  const H = 620, TMAX = 50, NMAX = 1000, RUN = 6, FLASH = 1.5;
  const GX = 60, GY = 110, GS = 440;                          /* the grid's square */
  const GB = { l: 650, r: 1340, t: 130, b: 500 };              /* the graph's box */
  const d = sim('sim-decay-curve', H);
  const N0 = ctl(d.controls, { label: 'N_0', cls: '', min: 10, max: NMAX, step: 10, value: NMAX, unit: '', dec: 0, onInput: fresh, aria: '样品开始时的原子核数目' });
  const TH = ctl(d.controls, { label: '\\kthalf', cls: 'time', min: 1, max: 20, step: 0.5, value: 5, unit: 's', dec: 1, onInput: reset, aria: '半衰期' });
  const cy = cycle(() => TMAX, 1.2);
  const ro = readout(d);
  let seed = 1, U = [], sorted = [], sortedFor = -1;
  function draws() {
    const r = rng(seed * 2654435761);
    U = Array.from({ length: NMAX }, () => Math.log2(1 / r()));
    sortedFor = -1;
  }
  function fresh() { seed++; draws(); cy.reset(); }
  function reset() { cy.reset(); }
  draws();
  function lives(n0) {
    if (sortedFor !== n0) { sorted = U.slice(0, n0).sort((a, b) => a - b); sortedFor = n0; }
    return sorted;
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const n0 = Math.round(N0.v), th = TH.v, t = cy.now(), TC = C('time');
    const lam = sig(Math.LN2 / th, 3), life = lives(n0);
    let left = 0; for (let i = 0; i < n0; i++) if (U[i] * th > t) left++;
    const lab = labeller(ctx, H, { headline: topline(ctx, '无论已经存续多久，每个原子核在每个半衰期 $\\kthalf = ' + fmt(th, 1) + '$ s 内都有 50% 的概率存续下来。') });
    hits = [];

    /* the sample */
    const cols = Math.ceil(Math.sqrt(n0)), rows = Math.ceil(n0 / cols), cell = GS / cols;
    const rad = Math.min(15, cell * 0.36), y0 = GY + (GS - rows * cell) / 2;
    const at = (i) => [GX + (i % cols + 0.5) * cell, y0 + (Math.floor(i / cols) + 0.5) * cell];
    ctx.save();
    ctx.fillStyle = PAL.ink; ctx.beginPath();
    for (let i = 0; i < n0; i++) if (U[i] * th > t) { const [x, y] = at(i); ctx.moveTo(x + rad, y); ctx.arc(x, y, rad, 0, TAU); }
    ctx.fill();
    ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = Math.max(1, rad / 6); ctx.beginPath();
    for (let i = 0; i < n0; i++) if (U[i] * th <= t) { const [x, y] = at(i); ctx.moveTo(x + rad, y); ctx.arc(x, y, rad, 0, TAU); }
    ctx.stroke();
    for (let i = 0; i < n0; i++) {
      const k = (t - U[i] * th) / FLASH;
      if (k < 0 || k >= 1) continue;
      const [x, y] = at(i);
      ctx.strokeStyle = alpha(PAL.ink, 0.8 * (1 - k)); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, rad * (1 + 1.6 * k), 0, TAU); ctx.stroke();
    }
    ctx.restore();
    hits.push({ x: GX + GS / 2, y: GY + GS / 2, r: GS / 2, name: '样品：尚未衰变的有 ' + left + ' 个，共 ' + n0 + ' 个原子核' });

    /* its legend */
    const LY = GY + GS + 40;
    dot(ctx, GX + 12, LY, PAL.ink, true, 9);
    text(ctx, '尚未衰变', GX + 32, LY, PAL.ink, { size: 18 });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(GX + 232, LY, 9, 0, TAU); ctx.stroke(); ctx.restore();
    text(ctx, '已衰变', GX + 252, LY, PAL.ink, { size: 18 });

    /* the graph */
    const { X, Y } = axes(ctx, GB, [0, TMAX], [0, 1], { nx: 5, ny: 4, xl: 't (s)', xc: TC, yl: 'N/N_{0}', fy: (v) => fmt(v, 2) });
    for (let k = 1; k <= 3; k++) {
      const x = k * th; if (x > TMAX) break;
      const f = 2 ** -k, px = X(x), py = Y(f);
      line(ctx, px, py, px, GB.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      if (k > 1) line(ctx, GB.l, py, px, py, alpha(PAL.ink, 0.4), 2, [4, 8]);
      dot(ctx, px, py, PAL.muted, true, 6);
      hits.push({ x: px, y: py, r: 12, name: '经过' + (k === 1 ? '一个半衰期' : k === 2 ? '两个半衰期' : '三个半衰期') + '，即 ' + fmt(x, 1) + ' s，按定律剩下 1/' + 2 ** k + ' 的原子核' });
    }
    hbracket(ctx, X(0), X(th), Y(0.5), TC);
    lab.add('t_{1/2}', X(th), Y(0.5), 1, 0, TC, 20, 26);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => Math.exp(-Math.LN2 * s / th), 0, TMAX, X, Y, PAL.muted, 4, 200); ctx.restore();

    /* the count of this sample, stepping down at each decay */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(X(0), Y(1));
    let n = n0;
    for (const u of life) { const s = u * th; if (s > t) break; ctx.lineTo(X(s), Y(n / n0)); n--; ctx.lineTo(X(s), Y(n / n0)); }
    ctx.lineTo(X(t), Y(n / n0)); ctx.stroke(); ctx.restore();
    dot(ctx, X(t), Y(left / n0), PAL.ink, true, 9);
    hits.push({ x: X(t), y: Y(left / n0), r: 14, name: '这个样品剩下的比例，' + left + '/' + n0 });

    /* the graph's legend */
    const KX = GB.r - 250, KY = GB.t + 18;
    line(ctx, KX, KY, KX + 44, KY, PAL.muted, 4, [10, 10]);
    text(ctx, '$N_0e^{-\\klamdec\\kt}$', KX + 58, KY, PAL.ink, { size: 22, tex: true });
    line(ctx, KX, KY + 38, KX + 44, KY + 38, PAL.ink, 3);
    text(ctx, '这个样品', KX + 58, KY + 38, PAL.ink, { size: 20 });
    lab.place({ l: KX - 8, r: GB.r, t: KY - 18, b: KY + 56 });
    lab.flush();

    const tt = Math.round(t * 10) / 10, nExp = n0 * Math.exp(-lam * tt);
    ro.set('N = N_0e^{-\\klamdec\\kt} = ' + n0 + '\\,e^{-(' + fsig(lam, 3) + '\\;\\text{s}^{-1})(' + fmt(tt, 1) + '\\;\\text{s})} = ' + fmt(nExp, nExp < 10 ? 1 : 0),
      '样品中数得：还剩 ' + left + ' 个原子核。');
  }
  register(d.fig, {
    update: (dt) => { const was = cy.now(); cy.step(dt, () => TMAX / RUN); if (cy.now() < was) { seed++; draws(); } },
    draw,
  });
})();

/* =====================================================================
   Sim · sim-carbon-dating · still · flat (rule 28.1)
   N/N₀ = e^{−λt} for ¹⁴C, t½ = 5730 y; the same curve is R/R₀ for a
   kilogram of carbon, R₀ = 250 Bq (Example 31.5). t from 0 to 60 000 y,
   N/N₀ from 0 to 1, R from 0 to 250 Bq, fixed.
===================================================================== */
(function () {
  const H = 540, TMAX = 60000, TH = 5730, R0 = 250;
  const LAM = sig(0.693 / TH, 4);                          /* 1.209 × 10⁻⁴ per year, from the book's 0.693 */
  const GB = { l: 170, r: 1210, t: 120, b: 440 };
  const d = sim('sim-carbon-dating', H);
  const FR = ctl(d.controls, { label: 'N/N_0', cls: '', min: 0.001, max: 1, step: 0.001, value: 0.92, unit: '', dec: 3,
    detents: [{ v: 0.92, label: '裹尸布' }], specials: [{ at: 0.5, label: '一个半衰期' }], aria: '样品中剩余的活组织碳-14 所占的比例' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const f = FR.v, TC = C('time'), RC = C('activity'), rS = (r) => (r >= 10 ? fmt(r, 0) : fsig(r, 2));
    const ln = sig(-Math.log(f), 3), t = f >= 1 ? 0 : sig(ln / LAM, 3), R = R0 * f;
    const lab = labeller(ctx, H, { headline: topline(ctx, '保有活组织 ¹⁴C 的 $N/N_0 = ' + fmt(f, 3) + '$ 的样品，死于 $\\kt = ' + grp(t, '{,}') + '$ y 以前。') });
    hits = [];

    const { X, Y } = axes(ctx, GB, [0, TMAX], [0, 1], { nx: 6, ny: 5, xl: 't (y)', xc: TC, yl: 'N/N_{0}', fx: (v) => grp(v, ','), fy: (v) => fmt(v, 1) });
    /* the right axis: the activity of 1.00 kg of the sample's carbon */
    line(ctx, GB.r, GB.t, GB.r, GB.b, PAL.muted, 2);
    for (let r = 0; r <= R0; r += 50) { const y = Y(r / R0); line(ctx, GB.r, y, GB.r + 8, y, PAL.muted, 2); text(ctx, String(r), GB.r + 16, y, PAL.muted, { size: 17 }); }
    text(ctx, '1.00 kg 碳的 R (Bq)', GB.r + 60, GB.t - 24, RC, { size: 20, weight: 600, align: 'right' });

    curve(ctx, (s) => Math.exp(-LAM * s), 0, TMAX, X, Y, PAL.ink, 5, 240);
    const hx = X(TH), hy = Y(0.5);
    dot(ctx, hx, hy, PAL.muted, false, 7);
    hits.push({ x: hx, y: hy, r: 12, name: '一个半衰期，5730 y：剩下一半的 ¹⁴C' });

    const px = X(t), py = Y(f);
    line(ctx, GB.l, py, GB.r, py, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, px, py, px, GB.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, px, py, PAL.ink, true, 10);
    lab.place({ l: px - 12, r: px + 12, t: py - 12, b: py + 12 });
    lab.add(grp(t, ',') + ' y', px, GB.b - 22, px < (GB.l + GB.r) / 2 ? 1 : -1, 0, TC, 20, 16);
    lab.add(rS(R) + ' Bq', GB.r - 60, py, 0, py < GB.t + 40 ? 1 : -1, RC, 20, 22);
    hits.push({ x: px, y: py, r: 14, name: '样品：N/N₀ = ' + fmt(f, 3) + '，1.00 kg 碳的 R = ' + rS(R) + ' Bq，已死亡 ' + grp(t, ',') + ' y' });
    lab.flush();

    ro.set('\\kt = \\frac{-\\ln(N/N_0)}{\\klamdec} = \\frac{' + fsig(ln, 3) + '}{1.209\\times 10^{-4}\\;\\text{y}^{-1}} = ' + grp(t, '{,}') + '\\;\\text{y}',
      '它的一千克碳现在给出 $\\kRact = ' + rS(R) + '$ Bq，而活组织中为 $\\kRoact = 250$ Bq。');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
