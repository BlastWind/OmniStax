/* Figures for section 15.7 Statistical Interpretation of Entropy and the Second Law of Thermodynamics. Boots against the section's text article.
   The section counts: a macrostate is what you see, a microstate is one way
   of arranging the parts, and the disorderly macrostates have vastly more of
   them. Two figures have a clock in them, the coins tossed over and over and
   the gas released from a corner, and both replay the same run from a seed so
   the scrubber is honest; the figure of the change in entropy between two
   macrostates is still and answers its sliders. The page binds entropy, on
   every column, bar and readout that is k ln W, and time, on the axis the gas
   figure traces its entropy against. Coins, atoms, counts and the number of
   microstates are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, axes, nice, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, KB = 1.38e-23;
/* ln n! for n up to 100, so that ln W of any macrostate of the section is a subtraction */
const LNF = [0]; for (let n = 1; n <= 100; n++) LNF[n] = LNF[n - 1] + Math.log(n);
const lnC = (n, k) => LNF[n] - LNF[k] - LNF[n - k];
/* a number in scientific form for the canvas, "1.0 × 10²⁹", and for KaTeX */
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const sup = (n) => String(n).replace('-', '⁻').replace(/\d/g, (c) => SUP[+c]);
function mant(v, d) { let e = Math.floor(Math.log10(v)), m = v / Math.pow(10, e); if (+m.toFixed(d) >= 10) { m /= 10; e += 1; } return { m: m.toFixed(d), e }; }
const sci = (v, d = 1) => { if (v === 0) return '0'; const { m, e } = mant(Math.abs(v), d); return (v < 0 ? '−' : '') + m + ' × 10' + sup(e); };
const scitex = (v, d = 1) => { if (v === 0) return '0'; const { m, e } = mant(Math.abs(v), d); return (v < 0 ? '-' : '') + m + '\\times10^{' + e + '}'; };
/* a count of microstates: plain with commas below a million, scientific above */
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const countOf = (lnW) => (lnW < Math.log(1e6) ? commas(String(Math.round(Math.exp(lnW)))) : sci(Math.exp(lnW), 1));
const count2 = (lnW) => (lnW < Math.log(1e6) ? commas(String(Math.round(Math.exp(lnW)))).replace(/,/g, '{,}') : scitex(Math.exp(lnW), 2));
const countTex = (lnW) => (lnW < Math.log(1e6) ? commas(String(Math.round(Math.exp(lnW)))).replace(/,/g, '{,}') : scitex(Math.exp(lnW), 1));
/* an entropy in joules per kelvin for the canvas and for KaTeX */
const sJK = (S) => sci(S, 1) + ' J/K';
const sJKtex = (S) => scitex(S, 1) + '\\ \\text{J/K}';
/* a seeded generator, so that a run is the same run every time the scrubber returns to it */
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const heads = (h) => (h === 1 ? '1 head' : h + ' heads'), tails = (t) => (t === 1 ? '1 tail' : t + ' tails');
const macro = (h, N) => heads(h) + ' and ' + tails(N - h);
const times = (n) => (n === 1 ? 'once' : n === 2 ? 'twice' : n + ' times');
const cameUp = (n) => (n === 0 ? 'has not come up' : 'has come up ' + times(n));
/* the tick decimals a nice() range needs */
const decs = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0);
/* a coin: heads is a filled face carrying H, tails a hollow one carrying T; both ink */
function coin(ctx, x, y, r, isHead) {
  ctx.save(); ctx.lineWidth = Math.max(2, r * 0.12); ctx.strokeStyle = PAL.ink; ctx.fillStyle = isHead ? PAL.ink : PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, isHead ? 'H' : 'T', x, y + 1, isHead ? PAL.panel : PAL.ink, { size: Math.round(r * 1.1), weight: 700, align: 'center' });
}
/* the columns of a bar chart over the macrostates 0..N heads, one bin per count */
const binX = (X, h) => [X(h), X(h + 1)], cxOf = (X, h) => X(h + 0.5);
function column(ctx, X, Y, h, v, y0, fill, stroke, w, dash) {
  const [x1, x2] = binX(X, h), pad = Math.max(1, (x2 - x1) * 0.12);
  const yt = Y(v), yb = Y(y0);
  if (fill) { ctx.save(); ctx.fillStyle = fill; ctx.fillRect(x1 + pad, Math.min(yt, yb), x2 - x1 - 2 * pad, Math.abs(yb - yt)); ctx.restore(); }
  if (stroke) { ctx.save(); ctx.strokeStyle = stroke; ctx.lineWidth = w || 2; if (dash) ctx.setLineDash(dash); ctx.strokeRect(x1 + pad, Math.min(yt, yb), x2 - x1 - 2 * pad, Math.abs(yb - yt)); ctx.restore(); }
}
/* the integer ticks of a heads axis: every count up to 10 coins, then every 5 or 10 */
function headTicks(ctx, X, N, y) {
  const step = N <= 12 ? 1 : N <= 30 ? 5 : 10;
  for (let h = 0; h <= N; h += step) { line(ctx, cxOf(X, h), y, cxOf(X, h), y + 8, PAL.muted, 2); text(ctx, String(h), cxOf(X, h), y + 26, PAL.muted, { size: 17, align: 'center' }); }
  if (N % step) { line(ctx, cxOf(X, N), y, cxOf(X, N), y + 8, PAL.muted, 2); text(ctx, String(N), cxOf(X, N), y + 26, PAL.muted, { size: 17, align: 'center' }); }
}
/* the sliders of a figure, so that a head-count slider's range can follow the number of coins */
const ranges = (host) => Array.from(host.querySelectorAll('input[type=range]'));

/* =====================================================================
   SIM: the coins tossed over and over. Every toss lands as a tally on the
   number of heads it produced; the count of microstates from the tables is
   the outline the tally settles onto, and the entropy of each macrostate
   stands beneath it. Moving: a run of 300 tosses over six seconds is a
   sequence in time, drawn from a seed so that the scrubber replays it.
   The chance of heads lets the reader break the book's assumption that
   every microstate is equally probable and watch the tally slide off.
===================================================================== */
(function () {
  const d = sim('sim-coin-tosses', 790);
  const nc = ctl(d.controls, { label: '\\text{coins}', cls: '', min: 2, max: 100, step: 1, value: 5, unit: '', dec: 0, detents: [{ v: 5, label: '5' }, { v: 10, label: '10' }, { v: 100, label: '100' }], snap: true, onInput: reset, aria: 'the number of coins tossed' });
  const ph = ctl(d.controls, { label: '\\text{chance of heads}', cls: '', min: 30, max: 70, step: 1, value: 50, unit: '%', dec: 0, detents: [{ v: 50, label: 'fair' }], snap: true, onInput: reset, aria: 'the chance that one coin lands heads' });
  const TOSSES = 300, RATE = 50, T = TOSSES / RATE;      /* 300 tosses in six seconds */
  const cy = cycle(() => T, 1.4);
  let run = [];                                          /* the number of heads of each toss of the run */
  function reset() {
    const N = nc.v, p = ph.v / 100, r = rng(1507 + N * 131 + ph.v);
    run = []; for (let i = 0; i < TOSSES; i++) { let h = 0; for (let j = 0; j < N; j++) if (r() < p) h++; run.push(h); }
    cy.reset();
  }
  reset();
  /* the layout: the coins across the top, the tally in the middle, the entropy of each macrostate beneath */
  const TB = { l: 150, r: 1250, t: 320, b: 510 }, SB = { l: 150, r: 1250, t: 578, b: 700 };
  function draw() {
    const { ctx } = begin(d.c);
    const N = nc.v, p = ph.v / 100, fair = ph.v === 50, ec = C('entropy');
    const tau = cy.now(), n = Math.min(TOSSES, Math.floor(tau * RATE + 1e-6));
    const tally = new Array(N + 1).fill(0); for (let i = 0; i < n; i++) tally[run[i]]++;
    const last = n > 0 ? run[n - 1] : null;
    /* the coins of the last toss, laid in rows; before the first toss they lie tails up in a row */
    const cols = Math.min(N, 25), rows = Math.ceil(N / cols), R = N <= 10 ? 30 : N <= 25 ? 20 : 13, gap = R * 2 + 8;
    const cy0 = 176 - ((rows - 1) * gap) / 2;
    if (last !== null) {
      /* the faces of the last toss in a fixed order, as many heads as it produced, shuffled by the toss's own seed */
      const r = rng(9001 + n * 7 + N), faces = []; for (let j = 0; j < N; j++) faces.push(j < last);
      for (let j = N - 1; j > 0; j--) { const k = Math.floor(r() * (j + 1)); const t = faces[j]; faces[j] = faces[k]; faces[k] = t; }
      for (let j = 0; j < N; j++) { const cx = 700 + (j % cols - (cols - 1) / 2) * gap, cyy = cy0 + Math.floor(j / cols) * gap; coin(ctx, cx, cyy, R, faces[j]); }
    } else for (let j = 0; j < N; j++) { const cx = 700 + (j % cols - (cols - 1) / 2) * gap, cyy = cy0 + Math.floor(j / cols) * gap; coin(ctx, cx, cyy, R, false); }
    text(ctx, last === null ? 'not yet tossed' : 'toss ' + n + ' of ' + TOSSES + ': ' + macro(last, N), 700, 176 + ((rows - 1) * gap) / 2 + R + 26, PAL.muted, { size: 17, align: 'center' });
    /* the tally: its range is set by the number of coins alone, 1.35 times the expected tally of the middle bin, and never rescales during a run */
    const mid = Math.floor(N / 2), lnTot = N * Math.LN2;
    const expect = (h) => TOSSES * Math.exp(lnC(N, h) - lnTot);
    const yr = nice(0, 1.35 * expect(mid), 4);
    const g = axes(ctx, TB, [0, N + 1], [yr.lo, yr.hi], { nx: 1, ny: yr.n, fx: () => '', fy: (v) => fmt(v, 0), xl: 'number of heads', yl: 'tosses that landed on each macrostate' });
    headTicks(ctx, g.X, N, TB.b);
    /* the count of microstates of each macrostate, scaled to the whole run, as a dashed outline */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.setLineDash([8, 6]); ctx.beginPath();
    for (let h = 0; h <= N; h++) { const [x1, x2] = binX(g.X, h), y = g.Y(Math.min(yr.hi, expect(h))); if (h === 0) ctx.moveTo(x1, g.Y(0)); ctx.lineTo(x1, y); ctx.lineTo(x2, y); if (h === N) ctx.lineTo(x2, g.Y(0)); }
    ctx.stroke(); ctx.restore();
    for (let h = 0; h <= N; h++) if (tally[h] > 0) {
      const v = Math.min(tally[h], yr.hi), over = tally[h] > yr.hi;
      column(ctx, g.X, g.Y, h, v, 0, alpha(PAL.ink, h === last ? 0.55 : 0.28), h === last ? PAL.ink : null, 3);
      if (over) text(ctx, String(tally[h]), cxOf(g.X, h), TB.t - 12, PAL.ink, { size: 15, weight: 600, align: 'center' });
    }
    text(ctx, 'dashed outline: the count of microstates W of each macrostate, scaled to ' + TOSSES + ' tosses', TB.r - 10, TB.t + 18, PAL.muted, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the entropy of each macrostate, S = k ln W, in the entropy hue; the range follows the number of coins */
    const S23 = (h) => (KB * lnC(N, h)) / 1e-23;
    const sr = nice(0, S23(mid), 3), sd = decs(sr);
    const e = axes(ctx, SB, [0, N + 1], [0, sr.hi], { nx: 1, ny: sr.n, fx: () => '', fy: (v) => fmt(v, sd), yl: 'S = k ln W of each macrostate (10⁻²³ J/K)', yc: ec });
    headTicks(ctx, e.X, N, SB.b);
    text(ctx, 'number of heads', SB.r, SB.b + 58, PAL.ink, { size: 20, weight: 600, align: 'right' });
    for (let h = 0; h <= N; h++) column(ctx, e.X, e.Y, h, S23(h), 0, alpha(ec, h === last ? 0.85 : 0.3), h === last ? ec : null, 3);
    /* the headline and the readout */
    const top = Math.ceil(N / 2), nm = N + ' ' + (fair ? 'fair' : 'loaded') + ' coins';
    if (last === null) topline(ctx, 'The ' + nm + ' have not been tossed yet; they have ' + countOf(lnTot) + ' microstates in ' + (N + 1) + ' macrostates, and ' + macro(top, N) + ' has the most, ' + countOf(lnC(N, top)) + '.');
    else topline(ctx, 'After ' + n + ' tosses of ' + nm + ', ' + macro(top, N) + ' ' + cameUp(tally[top]) + ' and ' + heads(N) + ' ' + cameUp(tally[N]) + '; the last toss gave ' + macro(last, N) + '.');
    const h = last === null ? top : last, lnW = lnC(N, h);
    readout(d.readout, `W = ${countTex(lnW)}\\ \\text{for ${macro(h, N)}, so}\\ \\kSent = k\\ln W = (1.38\\times10^{-23}\\ \\text{J/K})(${fmt(lnW, 2)}) = ${sJKtex(KB * lnW)}`,
      fair ? 'Every microstate is equally probable when the coins are fair, so a macrostate comes up in proportion to its number of microstates: ' + heads(N) + ' in 1 toss of ' + countOf(lnTot) + ', ' + macro(top, N) + ' in ' + countOf(lnC(N, top)) + ' of them. The most orderly macrostates are the least likely, and with more coins they stop coming up at all.'
        : 'With heads favored ' + ph.v + '% of the time the microstates are no longer equally probable, so the tally no longer follows the count of microstates and an analysis that assumed it would, as Table 15.3 does, would be erroneous. The entropy beneath still counts microstates and does not move.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the change in entropy between two macrostates. Every macrostate
   stands as a column of height k ln W; the initial and the final are
   chosen and the change is the difference in height, with the ratio of
   the two counts of microstates as the odds. Still: two macrostates
   compared have no time in them.
===================================================================== */
(function () {
  const d = sim('sim-entropy-change', 640);
  const nc = ctl(d.controls, { label: '\\text{coins}', cls: '', min: 2, max: 100, step: 1, value: 100, unit: '', dec: 0, detents: [{ v: 5, label: '5' }, 6, { v: 10, label: '10' }, { v: 100, label: '100' }], snap: true, aria: 'the number of coins' });
  const hi = ctl(d.controls, { label: '\\text{initial heads}', cls: '', min: 0, max: 100, step: 1, value: 60, unit: '', dec: 0, aria: 'the number of heads in the initial macrostate' });
  const hf = ctl(d.controls, { label: '\\text{final heads}', cls: '', min: 0, max: 100, step: 1, value: 50, unit: '', dec: 0, aria: 'the number of heads in the final macrostate' });
  /* the two head-count sliders run from 0 to the number of coins, and follow it */
  const [, inI, inF] = ranges(d.controls);
  const follow = () => { const N = nc.v; for (const [inp, c] of [[inI, hi], [inF, hf]]) { inp.max = String(N); if (c.v > N) c.set(N); } };
  follow(); d.fig.addEventListener('input', follow);
  const GB = { l: 150, r: 1150, t: 130, b: 520 };
  function draw() {
    const { ctx } = begin(d.c);
    const N = nc.v, a = Math.min(hi.v, N), b = Math.min(hf.v, N), ec = C('entropy');
    const lnWi = lnC(N, a), lnWf = lnC(N, b), dS = KB * (lnWf - lnWi), ratio = Math.exp(lnWf - lnWi);
    const S23 = (h) => (KB * lnC(N, h)) / 1e-23, mid = Math.floor(N / 2);
    const sr = nice(0, S23(mid) * 1.3, 6), sd = decs(sr);
    const g = axes(ctx, GB, [0, N + 1], [0, sr.hi], { nx: 1, ny: sr.n, fx: () => '', fy: (v) => fmt(v, sd), xl: 'number of heads', yl: 'S = k ln W of each macrostate (10⁻²³ J/K)', yc: ec });
    headTicks(ctx, g.X, N, GB.b);
    for (let h = 0; h <= N; h++) if (h !== a && h !== b) column(ctx, g.X, g.Y, h, S23(h), 0, alpha(ec, 0.25), null);
    /* the initial macrostate hollow, the final filled, as an initial and a final value are told apart */
    column(ctx, g.X, g.Y, a, S23(a), 0, PAL.panel, ec, 3.5, [8, 6]);
    column(ctx, g.X, g.Y, b, S23(b), 0, alpha(ec, 0.9), ec, 3.5);
    const lab = labeller(ctx, 640);
    const sameCol = a === b;
    const nameI = sameCol ? 'initial and final, ' + heads(a) : 'initial, ' + heads(a), nameF = 'final, ' + heads(b);
    lab.add(nameI, cxOf(g.X, a), g.Y(S23(a)) - 6, 0, -1, ec, 19, 22);
    if (!sameCol) lab.add(nameF, cxOf(g.X, b), g.Y(S23(b)) - 6, 0, -1, ec, 19, 22);
    /* the change as the difference in height, bracketed at the right of the graph */
    const yi = g.Y(S23(a)), yf = g.Y(S23(b)), bx = GB.r + 40;
    if (Math.abs(yi - yf) >= 1) {
      line(ctx, cxOf(g.X, a), yi, bx, yi, alpha(ec, 0.5), 2, [6, 6]); line(ctx, cxOf(g.X, b), yf, bx, yf, alpha(ec, 0.5), 2, [6, 6]);
      arrow(ctx, bx, yi, bx, yf, ec, 4);
      text(ctx, 'ΔS = ' + (dS > 0 ? '+' : '') + sci(dS, 2) + ' J/K', bx + 16, (yi + yf) / 2, ec, { size: 20, weight: 600, bg: PAL.panel });
    } else {
      line(ctx, cxOf(g.X, Math.min(a, b)), yi, bx, yi, alpha(ec, 0.5), 2, [6, 6]);
      dot(ctx, bx, yi, ec, false, 8);
      text(ctx, 'ΔS = 0', bx + 16, yi, ec, { size: 20, weight: 600, bg: PAL.panel });
    }
    lab.flush();
    /* the odds of each macrostate in a toss of fair coins, which is what the discussion reckons */
    const pI = Math.exp(lnWi - N * Math.LN2), pF = Math.exp(lnWf - N * Math.LN2);
    const once = (p) => { const k = 1 / p; return p >= 0.995 ? 'every toss' : 'about once in ' + (k >= 1e6 ? sci(k, 1) : commas(String(Math.round(k)))) + ' tosses'; };
    const rt = ratio >= 1 ? fmt(ratio, ratio < 10 ? 1 : 0) : fmt(1 / ratio, 1 / ratio < 10 ? 1 : 0);
    const rtText = ratio >= 1e6 ? sci(ratio, 1) : ratio <= 1e-6 ? sci(1 / ratio, 1) : rt;
    if (sameCol) topline(ctx, 'The initial and final macrostates are the same, ' + macro(a, N) + ' of ' + N + ' coins, so the entropy does not change.');
    else if (Math.abs(lnWf - lnWi) < 1e-9) topline(ctx, macro(a, N) + ' and ' + macro(b, N) + ' have the same number of microstates, ' + countOf(lnWi) + ', so going from one to the other changes the entropy by nothing.');
    else if (dS > 0) topline(ctx, 'Going from ' + heads(a) + ' to ' + heads(b) + ' of ' + N + ' coins raises the entropy by ' + sci(dS, 2) + ' J/K; the final macrostate has ' + rtText + ' times as many microstates and is that much more likely.');
    else topline(ctx, 'Going from ' + heads(a) + ' to ' + heads(b) + ' of ' + N + ' coins lowers the entropy by ' + sci(-dS, 2) + ' J/K; the final macrostate has only 1/' + rtText + ' as many microstates and is that much less likely.');
    readout(d.readout, `\\kdS = \\kSf - \\kSi = k\\ln W_{\\text{f}} - k\\ln W_{\\text{i}} = (1.38\\times10^{-23}\\ \\text{J/K})[\\ln(${count2(lnWf)}) - \\ln(${count2(lnWi)})] = ${scitex(dS, 2)}\\ \\text{J/K}`,
      'A toss of ' + N + ' fair coins lands on ' + heads(a) + ' ' + once(pI) + ' and on ' + heads(b) + ' ' + once(pF) + (sameCol ? '.' : ', so the final macrostate is ' + (ratio >= 1 ? rtText + ' times as likely as the initial one' : '1/' + rtText + ' as likely as the initial one') + ', and the reverse change, a decrease in entropy of ' + sci(Math.abs(dS), 2) + ' J/K, is that much ' + (ratio >= 1 ? 'less' : 'more') + ' likely than this one.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.38: the gas released from one corner. The atoms start packed
   in one quarter of the container with one speed in random directions,
   collide elastically with one another and the walls, and spread; the
   container's four quarters are counted, W is the number of ways of
   assigning the atoms to the quarters in those numbers, and S = k ln W is
   drawn as a bar and traced against time. Moving: the dispersal is a
   process in time and the book's caption narrates it; the run is seeded
   and integrated in fixed steps so that the scrubber replays it.
===================================================================== */
(function () {
  const d = sim('sim-gas-disorder', 720);
  const start = choice(d.controls, { label: '\\text{start}', options: [{ value: 'corner', label: 'released from one corner' }, { value: 'spread', label: 'already spread out' }], value: 'corner', aria: 'the state the gas starts in', onInput: reset });
  const na = ctl(d.controls, { label: '\\text{atoms}', cls: '', min: 10, max: 80, step: 1, value: 40, unit: '', dec: 0, onInput: reset, aria: 'the number of atoms in the container' });
  const BOX = { l: 130, r: 600, t: 150, b: 620 }, MX = (BOX.l + BOX.r) / 2, MY = (BOX.t + BOX.b) / 2;
  const RA = 8, V0 = 150, H = 1 / 240, T = 6;             /* atom radius, one speed, the step and the length of a run */
  const cy = cycle(() => T, 1.5);
  const st = { k: 0, x: [], y: [], vx: [], vy: [], S: [] };  /* the state at step k and the entropy at every step so far */
  function init() {
    const N = na.v, corner = start.value === 'corner', r = rng(4200 + N * 17 + (corner ? 0 : 1));
    const lo = corner ? { l: BOX.l + RA, r: MX - RA, t: MY + RA, b: BOX.b - RA } : { l: BOX.l + RA, r: BOX.r - RA, t: BOX.t + RA, b: BOX.b - RA };
    st.k = 0; st.x = []; st.y = []; st.vx = []; st.vy = []; st.S = [];
    for (let i = 0; i < N; i++) {
      let x, y, tries = 0;
      do { x = lo.l + r() * (lo.r - lo.l); y = lo.t + r() * (lo.b - lo.t); tries++; }
      while (tries < 400 && st.x.some((xj, j) => Math.hypot(xj - x, st.y[j] - y) < 2 * RA + 1));
      const a = r() * TAU; st.x.push(x); st.y.push(y); st.vx.push(V0 * Math.cos(a)); st.vy.push(V0 * Math.sin(a));
    }
    st.S.push(entropy().S);
  }
  /* the four quarters counted, and the number of ways of assigning the atoms to them in those numbers */
  function entropy() {
    const n = [0, 0, 0, 0];
    for (let i = 0; i < st.x.length; i++) n[(st.x[i] < MX ? 0 : 1) + (st.y[i] < MY ? 0 : 2)]++;
    const lnW = LNF[st.x.length] - n.reduce((s, c) => s + LNF[c], 0);
    return { n, lnW, S: KB * lnW };
  }
  const evenLnW = (N) => { const q = Math.floor(N / 4), r = N % 4; return LNF[N] - (4 - r) * LNF[q] - r * LNF[q + 1]; };
  function step() {
    const N = st.x.length, { x, y, vx, vy } = st;
    for (let i = 0; i < N; i++) {
      x[i] += vx[i] * H; y[i] += vy[i] * H;
      if (x[i] < BOX.l + RA) { x[i] = 2 * (BOX.l + RA) - x[i]; vx[i] = Math.abs(vx[i]); } else if (x[i] > BOX.r - RA) { x[i] = 2 * (BOX.r - RA) - x[i]; vx[i] = -Math.abs(vx[i]); }
      if (y[i] < BOX.t + RA) { y[i] = 2 * (BOX.t + RA) - y[i]; vy[i] = Math.abs(vy[i]); } else if (y[i] > BOX.b - RA) { y[i] = 2 * (BOX.b - RA) - y[i]; vy[i] = -Math.abs(vy[i]); }
    }
    /* elastic collisions of equal masses: the components along the line of centres are exchanged when the two are closing */
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const dx = x[j] - x[i], dy = y[j] - y[i], dist = Math.hypot(dx, dy);
      if (dist >= 2 * RA || dist < 1e-6) continue;
      const nx = dx / dist, ny = dy / dist, rel = (vx[i] - vx[j]) * nx + (vy[i] - vy[j]) * ny;
      if (rel <= 0) continue;
      vx[i] -= rel * nx; vy[i] -= rel * ny; vx[j] += rel * nx; vy[j] += rel * ny;
      const push = (2 * RA - dist) / 2 + 0.01; x[i] -= push * nx; y[i] -= push * ny; x[j] += push * nx; y[j] += push * ny;
    }
    st.k++; st.S.push(entropy().S);
  }
  function advanceTo(k) { if (k < st.k) init(); while (st.k < k) step(); }
  function reset() { init(); cy.reset(); }
  init();
  const GB = { l: 930, r: 1340, t: 150, b: 560 };
  function draw() {
    const { ctx } = begin(d.c);
    const N = na.v, ec = C('entropy'), tc = C('time'), corner = start.value === 'corner';
    const tau = cy.now(); advanceTo(Math.round(tau / H));
    const { n, lnW, S } = entropy(), lnMax = evenLnW(N), Smax = KB * lnMax;
    /* the container, its quarters and the atoms in ink */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.restore();
    line(ctx, MX, BOX.t, MX, BOX.b, alpha(PAL.ink, 0.3), 2, [8, 8]); line(ctx, BOX.l, MY, BOX.r, MY, alpha(PAL.ink, 0.3), 2, [8, 8]);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.ink; for (let i = 0; i < N; i++) { ctx.beginPath(); ctx.arc(st.x[i], st.y[i], RA, 0, TAU); ctx.fill(); } ctx.restore();
    /* the count in each quarter, at its outer corner */
    const corners = [[BOX.l + 14, BOX.t + 22, 'left'], [BOX.r - 14, BOX.t + 22, 'right'], [BOX.l + 14, BOX.b - 22, 'left'], [BOX.r - 14, BOX.b - 22, 'right']];
    corners.forEach(([x, y, al], q) => text(ctx, String(n[q]), x, y, PAL.ink, { size: 22, weight: 700, align: al, bg: alpha(PAL.panel, 0.85) }));
    text(ctx, 'the container, divided into four quarters', (BOX.l + BOX.r) / 2, BOX.b + 30, PAL.muted, { size: 17, align: 'center' });
    /* the entropy of the arrangement as a bar beside the container, with the even split as its ceiling */
    const bx = 650, bw = 40, yOf = (s) => BOX.b - ((BOX.b - BOX.t) * s) / (Smax * 1.08);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(bx, BOX.t, bw, BOX.b - BOX.t); ctx.fillStyle = alpha(ec, 0.75); ctx.fillRect(bx, yOf(S), bw, BOX.b - yOf(S)); ctx.restore();
    line(ctx, bx - 10, yOf(Smax), bx + bw + 10, yOf(Smax), ec, 2.5, [8, 8]);
    text(ctx, 'S = k ln W', bx + bw / 2, BOX.t - 24, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'even split', bx + bw + 12, yOf(Smax) - 14, ec, { size: 17, weight: 600 });
    text(ctx, sJK(S), bx + bw + 12, Math.min(yOf(S) + 16, BOX.b - 12), ec, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the trace of S against the time since the release; the range follows the number of atoms and never the run */
    const yr = nice(0, (Smax * 1.15) / 1e-22, 4), yd = decs(yr);
    const g = axes(ctx, GB, [0, T], [0, yr.hi], { nx: 6, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, yd), xl: 't (s)', xc: tc, yl: 'S of the arrangement (10⁻²² J/K)', yc: ec });
    line(ctx, GB.l, g.Y(Smax / 1e-22), GB.r, g.Y(Smax / 1e-22), ec, 2.5, [8, 8]);
    text(ctx, 'even split, W = ' + countOf(lnMax), GB.r - 6, g.Y(Smax / 1e-22) - 16, ec, { size: 17, weight: 600, align: 'right' });
    ctx.save(); ctx.strokeStyle = ec; ctx.lineWidth = 4; ctx.beginPath();
    for (let k = 0; k <= st.k; k += 2) { const px = g.X(k * H), py = g.Y(st.S[k] / 1e-22); if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); }
    ctx.stroke(); ctx.restore();
    dot(ctx, g.X(tau), g.Y(S / 1e-22), ec, true, 9);
    text(ctx, 'time since the atoms were released', GB.l, GB.b + 58, PAL.muted, { size: 17 });
    /* the headline and the readout */
    const counts = n[0] + ', ' + n[1] + ', ' + n[2] + ' and ' + n[3];
    if (corner && tau < 1e-6) topline(ctx, 'The ' + N + ' atoms are packed into one quarter of the container, which is one way to arrange them among the quarters, so the entropy of the arrangement is zero.');
    else if (corner) topline(ctx, fmt(tau, 1) + ' s after the atoms were released from the corner, the four quarters hold ' + counts + ' atoms, and the entropy of the arrangement has risen to ' + sJK(S) + '.');
    else topline(ctx, 'The atoms are spread through the container from the start; at ' + fmt(tau, 1) + ' s the quarters hold ' + counts + ' atoms, and the entropy of the arrangement stays near its maximum of ' + sJK(Smax) + '.');
    readout(d.readout, `\\kSent = k\\ln W = (1.38\\times10^{-23}\\ \\text{J/K})\\ln(${countTex(lnW)}) = ${sJKtex(S)}`,
      'W is the number of ways of assigning the ' + N + ' atoms to the four quarters with ' + counts + ' in them. The even split has the most ways, ' + countOf(lnMax) + ', and all ' + N + ' in one quarter has just one, so once the atoms have spread the entropy only flickers beneath its maximum and never returns to zero.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
