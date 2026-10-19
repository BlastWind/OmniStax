/* Figures for section 4.3 More on the Fourier series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, curve, drag, dot, line, text, headline, register, readout, fmt, hover, measure } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l - 4, box.t - 4, box.r - box.l + 8, box.b - box.t + 8); ctx.clip(); draw(); ctx.restore(); };
const PI = Math.PI;
const ord = (k) => `${k}${k % 100 >= 11 && k % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][k % 10] || 'th'}`;
const sub = (k) => String(k).replace(/[0-9]/g, (c) => '₀₁₂₃₄₅₆₇₈₉'[+c]);
/* the tick label of t = kL: plain numbers when L = 1, multiples of π when L = π */
const piTick = (v) => { const k = Math.round(v / PI); return k === 0 ? '0' : k === 1 ? 'π' : k === -1 ? '−π' : `${k < 0 ? '−' : ''}${Math.abs(k)}π`; };
/* a legend in one row above a graph, centred: one stroke sample and one name per entry */
function legend(ctx, box, rows) {
  const ws = rows.map((r) => measure(ctx, r.name, { size: 18 }) + 60), gap = 36;
  let x = (box.l + box.r) / 2 - (ws.reduce((a, b) => a + b, 0) + gap * (rows.length - 1)) / 2;
  const y = box.t - 30;
  rows.forEach((r, i) => {
    line(ctx, x, y, x + 44, y, r.color, r.w ?? 4, r.dash);
    text(ctx, r.name, x + 56, y, PAL.ink, { size: 18 });
    x += ws[i] + gap;
  });
}

/* Figure 4.9 + 4.10 (Example 4.3.1): the 2-periodic extension of f(t) = |t| on (−1, 1] and its Fourier series
   1/2 − Σ (n odd) 4/(n²π²) cos(nπt) summed up to the Nth harmonic, with a probe t. N 1 to 40 (detents at the book's
   3 and 20; an even N adds no term, the even coefficients being 0). The largest gap |S_N − f| always sits at the
   corners t = 0, ±1, ±2, where it is the tail Σ (n odd > N) 4/(n²π²), and S_N stays inside (0, 1) for every N
   (both checked numerically for N = 1 to 40 in the build's scratch). Axes t −2 to 2, y −0.2 to 1.2. */
(function () {
  const d = sim('sim-triangle-sum', 600);
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 40, step: 1, value: 3, unit: '', dec: 0, detents: [3, 20] });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -2, max: 2, step: 0.01, value: 0, unit: '', dec: 2, detents: [-1, 0, 1] });
  const tri = (t) => Math.abs((((t + 1) % 2) + 2) % 2 - 1);
  const terms = (N) => { const m = []; for (let k = 1; k <= N; k += 2) m.push(k); return m; };
  const SN = (N) => { const m = terms(N); return (t) => 0.5 - m.reduce((s, k) => s + (4 / (k * k * PI * PI)) * Math.cos(k * PI * t), 0); };
  const P = drag(d, { x: ts, y: (t) => SN(Ns.v)(t) });
  const ro = readout(d);
  const BOX = { l: 180, r: 1250, t: 160, b: 510 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), fw = alpha(fc, 0.4), sc = C('series'), N = Ns.v, t = ts.v, S = SN(N);
    const ax = axes(ctx, BOX, [-2, 2], [-0.2, 1.2], { xl: 't', nx: 4, ny: 7, fy: (v) => fmt(v, 1) });
    plot(ctx, ax, tri, fw, { w: 10 });
    plot(ctx, ax, S, sc, { w: 3.5 });
    /* the probe: a drop line, f(t) on the function, S_N(t) on the sum (the handle) */
    const tr = +t.toFixed(2), sum = terms(N).reduce((s, k) => s + (4 / (k * k * PI * PI)) * Math.cos(k * PI * tr), 0);
    const sumR = Math.round(sum * 1000), Sv = (500 - sumR) / 1000, fv = tri(tr);
    const tail = 0.5 - terms(N).reduce((s, k) => s + 4 / (k * k * PI * PI), 0);
    line(ctx, ax.X(t), ax.box.t, ax.X(t), ax.box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(t), ax.Y(tri(t)), fc, true, 8);
    const at = P.draw(ctx, ax, sc);
    legend(ctx, BOX, [{ name: 'f(t) = |t|, extended periodically', color: fw, w: 10 }, { name: `S_{${N}}(t), up to the ${ord(N)} harmonic`, color: sc, w: 3.5 }]);
    hits = [{ x: ax.X(t), y: ax.Y(tri(t)), r: 14, name: `f(${n2(tr)}) = ${fmt(fv, 3)}` }];
    if (at) hits.push({ x: at.x, y: at.y, r: 16, name: `S${sub(N)}(${n2(tr)}) = ${fmt(Sv, 3)} (drag along the sum)` });
    [-1, 0, 1].forEach((c) => hits.push({ x: ax.X(c), y: ax.Y(tri(c)), r: 14, name: `a corner of f at t = ${c}: the gap is ${fmt(tail, 3)}` }));
    headline(ctx, `N = ${N}: $\\kS_{${N}}(${n2(tr)}) = ${n2(Sv, 3)}$ against $\\kf(${n2(tr)}) = ${n2(fv, 3)}$; the largest gap, ${fmt(tail, 3)}, sits at the corners, and nothing overshoots.`);
    const m = terms(N);
    const series = m.length <= 2
      ? m.map((k) => `- \\frac{4}{${k === 1 ? '' : k * k}\\pi^2}\\cos(${k === 1 ? '' : k}\\pi t)`).join(' ')
      : `- \\sum_{n\\ \\mathrm{odd}}^{${N}} \\frac{4}{n^2\\pi^2}\\cos(n\\pi t)`;
    ro.set(`\\kS_{${N}}(t) = \\frac{1}{2} ${series},\\quad \\kS_{${N}}(${n2(tr)}) = 0.500 ${sumR < 0 ? '+' : '-'} ${(Math.abs(sumR) / 1000).toFixed(3)} = ${n2(Sv, 3)},\\quad \\kf(${n2(tr)}) = ${n2(fv, 3)}`, undefined, { form: m.length <= 2 ? m.length : 3 });
  }
  still(d, draw);
})();

/* Figure 4.11: a choice of four periodic functions (Example 4.3.6's parabolas, the default and the book's figure;
   |t| of Example 4.3.1; the square wave (4.8); the sawtooth of 4.2), each over two periods with its derivative where
   it exists; below, the nonzero Fourier coefficients |c_n| for n ≤ 30 on log–log scales beside c₁/n, c₁/n², c₁/n³
   (dashed), so the decay rate is the slope. Coefficients (checked with SymPy): parabola b_n = 8/(π³n³), |t| a_n =
   −4/(π²n²), square wave b_n = 2/n (n odd), sawtooth b_n = 2(−1)^(n+1)/n. Graph t −2L to 2L, the y range per
   function; coefficients 10⁻⁶ to 10¹. */
(function () {
  const d = sim('sim-smoothness-decay', 800);
  const wrap = (t, L) => { const p = 2 * L; return ((((t + L) % p) + p) % p) - L; };   /* into [−L, L) */
  const FUN = {
    para: {
      L: 1, yr: [-1.2, 1.2], ny: 4, p: 3, which: 'b', odd: true,
      c: (k) => (k % 2 ? 8 / (PI ** 3 * k ** 3) : 0),
      f: (t) => { const u = wrap(t, 1); return u <= 0 ? (u + 1) * u : (1 - u) * u; },
      fp: (t) => { const u = wrap(t, 1); return u <= 0 ? 2 * u + 1 : 1 - 2 * u; },
      fname: 'f(t) = (t + 1)t, (1 − t)t', fpname: 'f′(t), with corners',
      head: 'Example 4.3.6: $\\kf$ has one derivative and $\\kfprime$ has corners; b₃ = 0.0096, and the coefficients fall like 1/n³.',
      tex: '\\kbn = \\frac{8}{\\pi^3 n^3}\\ \\ (n \\text{ odd}),\\quad b_1 = 0.2580,\\ b_3 = 0.0096,\\ b_5 = 0.0021',
    },
    abs: {
      L: 1, yr: [-1.2, 1.2], ny: 4, p: 2, which: 'a', odd: true,
      c: (k) => (k % 2 ? -4 / (PI * PI * k * k) : 0),
      f: (t) => Math.abs(wrap(t, 1)),
      fname: 'f(t) = |t|', fpname: 'f′(t) = ±1, with jumps',
      head: '$\\lvert t \\rvert$ is continuous with corners, and $\\kfprime$ jumps; |a₃| = 0.045, and the coefficients fall like 1/n².',
      tex: '\\kan = \\frac{-4}{\\pi^2 n^2}\\ \\ (n \\text{ odd}),\\quad a_1 = -0.4053,\\ a_3 = -0.0450,\\ a_5 = -0.0162',
    },
    square: {
      L: PI, yr: [-1, 4], ny: 5, p: 1, which: 'b', odd: true,
      c: (k) => (k % 2 ? 2 / k : 0),
      fname: 'f(t) = 0, π (4.8)', fpname: 'f′(t) = 0, none at the jumps',
      head: 'The square wave (4.8) jumps; b₃ = 0.667, and the coefficients fall like 1/n.',
      tex: '\\kbn = \\frac{2}{n}\\ \\ (n \\text{ odd}),\\quad b_1 = 2,\\ b_3 = 0.6667,\\ b_5 = 0.4',
    },
    saw: {
      L: PI, yr: [-4, 4], ny: 4, p: 1, which: 'b', odd: false,
      c: (k) => (2 * (k % 2 ? 1 : -1)) / k,
      fname: 'f(t) = t on (−π, π]', fpname: 'f′(t) = 1, none at the jumps',
      head: 'The sawtooth jumps; b₃ = 0.667, and the coefficients fall like 1/n.',
      tex: '\\kbn = \\frac{2{(-1)}^{n+1}}{n},\\quad b_1 = 2,\\ b_2 = -1,\\ b_3 = 0.6667',
    },
  };
  /* the pieces each graph is drawn in: one per half period, open where f′ (or f) is not defined */
  const fPieces = (v) => {
    const o = FUN[v];
    if (v === 'square') return [-2, -1, 0, 1].map((k) => ({ f: () => ((k + 2) % 2 === 1 ? 0 : PI), x: [k * PI, (k + 1) * PI], ends: '(]' }));
    if (v === 'saw') return [{ f: (t) => t + 2 * PI, x: [-2 * PI, -PI], ends: '-]' }, { f: (t) => t, x: [-PI, PI], ends: '(]' }, { f: (t) => t - 2 * PI, x: [PI, 2 * PI], ends: '(-' }];
    return [{ f: o.f, x: [-2 * o.L, 2 * o.L] }];
  };
  const fpPieces = (v) => {
    const o = FUN[v];
    if (v === 'para') return [{ f: o.fp, x: [-2, 2] }];
    if (v === 'abs') return [-2, -1, 0, 1].map((k) => ({ f: () => ((k + 2) % 2 === 0 ? 1 : -1), x: [k, k + 1], ends: '()' }));
    if (v === 'square') return [-2, -1, 0, 1].map((k) => ({ f: () => 0, x: [k * PI, (k + 1) * PI], ends: '()' }));
    return [{ f: () => 1, x: [-2 * PI, -PI], ends: '-)' }, { f: () => 1, x: [-PI, PI], ends: '()' }, { f: () => 1, x: [PI, 2 * PI], ends: '(-' }];
  };
  const pick = choice(d.controls, { label: 'function', key: 'f', value: 'para', options: [
    { value: 'para', label: 'Example 4.3.6' }, { value: 'abs', label: '|t|' }, { value: 'square', label: 'square wave' }, { value: 'saw', label: 'sawtooth' }] });
  const ro = readout(d);
  const TOP = { l: 180, r: 1250, t: 150, b: 380 }, BOT = { l: 180, r: 1250, t: 470, b: 720 };
  const NMAX = 30, LX = [0, Math.log10(NMAX)], LO = -6;   /* the coefficient axis runs log₁₀|c| − LO over 0 to 8 */
  const ly = (c) => Math.log10(Math.abs(c)) - LO;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), qc = C('sequence'), v = pick.value, o = FUN[v], settled = pick.k >= 1;
    /* the top graph: its range bends from the last function's to this one's */
    const [L, y0, y1] = pick.mix((w) => [FUN[w].L, FUN[w].yr[0], FUN[w].yr[1]]);
    const top = axes(ctx, TOP, [-2 * L, 2 * L], [y0, y1], settled
      ? { xl: 't', nx: 4, ny: o.ny, fx: o.L === 1 ? (x) => fmt(x, 0) : piTick, fy: (y) => fmt(y, Number.isInteger(y) ? 0 : 1) }
      : { xl: 't', nx: 4, ny: 4, nice: true });
    [...new Set([pick.from, v])].forEach((w) => pick.only(ctx, w, () => {
      plot(ctx, top, fpPieces(w), dc, { w: 3 });
      plot(ctx, top, fPieces(w), fc, { w: 5 });
    }, [0, 0]));
    legend(ctx, TOP, [{ name: o.fname, color: fc, w: 5 }, { name: o.fpname, color: dc, w: 3 }]);
    /* the coefficients on log–log scales, the three reference lines through c₁ */
    const bot = axes(ctx, BOT, LX, [0, 8], { xl: 'n', yl: o.which === 'b' ? '|b_n|' : '|a_n|', yc: qc, nx: 0, ny: 4, fy: (y) => `10^{${fmt(y + LO, 0)}}` });
    [1, 2, 3, 5, 10, 20, 30].forEach((k) => {
      const x = bot.X(Math.log10(k));
      if (k > 1) line(ctx, x, BOT.t, x, BOT.b, PAL.rule, 1.5);
      text(ctx, String(k), x, BOT.b + 26, PAL.muted, { size: 17, align: 'center' });
    });
    hits = [];
    [...new Set([pick.from, v])].forEach((w) => pick.only(ctx, w, () => {
      const q = FUN[w], c1 = Math.abs(q.c(1));
      clip(ctx, BOT, () => [1, 2, 3].forEach((p) => {
        line(ctx, bot.X(0), bot.Y(ly(c1)), bot.X(LX[1]), bot.Y(ly(c1) - p * LX[1]), alpha(PAL.ink, p === q.p ? 0.75 : 0.4), p === q.p ? 3 : 2, [10, 10]);
      }));
      [1, 2, 3].forEach((p) => {
        const yv = ly(c1) - p * LX[1];
        if (yv > 0) text(ctx, `1/n${p === 1 ? '' : p === 2 ? '²' : '³'}`, BOT.r + 10, bot.Y(yv), PAL.muted, { size: 18, weight: p === q.p ? 600 : 400 });
      });
      for (let k = 1; k <= NMAX; k++) {
        const ck = q.c(k); if (!ck) continue;
        const x = bot.X(Math.log10(k)), y = bot.Y(ly(ck));
        dot(ctx, x, y, qc, true, 6);
        if (w === v) hits.push({ x, y, r: 12, name: `${q.which}${sub(k)} = ${fmt(ck, Math.abs(ck) < 0.001 ? 6 : 4)}` });
      }
    }, [0, 0]));
    headline(ctx, o.head);
    ro.set(o.tex, undefined, { form: v });
  }
  still(d, draw);
})();

/* Sim: the series f(t) = Σ sin(nt)/n³ of the text and what term-by-term differentiation makes of it: f′ = Σ cos(nt)/n²,
   f″ = Σ −sin(nt)/n and Σ −cos(nt), each summed to N terms (N 1 to 30, default 5 as Exercise 4.3.2 asks), the
   partial sum in `series` over the sum of the series, faint, in `function` (f) or `derivative` (f′, f″). On (0, 2π)
   the sums are f = π²t/6 − πt²/4 + t³/12, f′ = π²/6 − πt/2 + t²/4 and f″ = (t − π)/2 (checked numerically), so f′
   has corners and f″ jumps at the multiples of 2π, where its series gives 0, the midpoint. The last series has no sum:
   its partial sums are −N at t = 0. Axes t −2π to 2π; y −2 to 2, or −32 to 16 for the last series. */
(function () {
  const d = sim('sim-term-by-term', 610);
  const u = (t) => (((t % (2 * PI)) + 2 * PI) % (2 * PI));   /* into [0, 2π) */
  const SER = {
    f: { term: (k, t) => Math.sin(k * t) / k ** 3, p: 3, yr: [-2, 2], ny: 4, type: 'function', sum: (t) => { const x = u(t); return PI * PI * x / 6 - PI * x * x / 4 + x ** 3 / 12; } },
    fp: { term: (k, t) => Math.cos(k * t) / k ** 2, p: 2, yr: [-2, 2], ny: 4, type: 'derivative', sum: (t) => { const x = u(t); return PI * PI / 6 - PI * x / 2 + x * x / 4; } },
    fpp: { term: (k, t) => -Math.sin(k * t) / k, p: 1, yr: [-2, 2], ny: 4, type: 'derivative' },
    f3: { term: (k, t) => -Math.cos(k * t), p: 0, yr: [-32, 16], ny: 6, type: null },
  };
  const pick = choice(d.controls, { label: 'series', key: 'series', value: 'f', options: [
    { value: 'f', label: 'f' }, { value: 'fp', label: 'f′' }, { value: 'fpp', label: 'f″' }, { value: 'f3', label: 'f″, differentiated' }] });
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 30, step: 1, value: 5, unit: '', dec: 0, detents: [5] });
  const ro = readout(d);
  const BOX = { l: 180, r: 1250, t: 160, b: 500 };
  const SN = (v, N) => (t) => { let s = 0; for (let k = 1; k <= N; k++) s += SER[v].term(k, t); return s; };
  const fppPieces = [-2, 0].map((k) => ({ f: (t) => (t - (k + 1) * PI) / 2, x: [k * PI, (k + 2) * PI], ends: '()' }));
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const v = pick.value, o = SER[v], N = Ns.v, sc = C('series'), settled = pick.k >= 1;
    const [y0, y1] = pick.mix((w) => SER[w].yr);
    const ax = axes(ctx, BOX, [-2 * PI, 2 * PI], [y0, y1], settled
      ? { xl: 't', nx: 4, ny: o.ny, fx: piTick }
      : { xl: 't', nx: 4, ny: 4, nice: true, fx: piTick });
    /* the sum of the series, faint, where it has one */
    [...new Set([pick.from, v])].forEach((w) => pick.only(ctx, w, () => {
      const q = SER[w]; if (!q.type) return;
      const col = alpha(C(q.type), 0.4);
      if (w === 'fpp') plot(ctx, ax, fppPieces, col, { w: 7, dots: [[-2 * PI, 0], [0, 0], [2 * PI, 0]] });
      else plot(ctx, ax, q.sum, col, { w: 7 });
    }, [0, 0]));
    clip(ctx, BOX, () => pick.curve(ctx, (w) => SN(w, N), -2 * PI, 2 * PI, ax.X, ax.Y, sc, 3.5, 1600));
    const rows = o.type
      ? [{ name: v === 'f' ? 'the sum f(t)' : v === 'fp' ? 'the sum f′(t)' : 'the sum f″(t)', color: alpha(C(o.type), 0.4), w: 7 }, { name: `partial sum, ${N} term${N === 1 ? '' : 's'}`, color: sc, w: 3.5 }]
      : [{ name: `partial sum, ${N} term${N === 1 ? '' : 's'}`, color: sc, w: 3.5 }];
    legend(ctx, BOX, rows);
    const s0 = SN(v, N)(0);
    hits = [{ x: ax.X(0), y: ax.Y(Math.max(y0, Math.min(y1, s0))), r: 16, name: `partial sum at t = 0: ${fmt(s0, 3)}` }];
    if (v === 'fpp') [-2 * PI, 0, 2 * PI].forEach((x) => hits.push({ x: ax.X(x), y: ax.Y(0), r: 14, name: 'a jump of f″; the series gives 0, the average of −π/2 and π/2' }));
    if (v === 'fp') [-2 * PI, 0, 2 * PI].forEach((x) => hits.push({ x: ax.X(x), y: ax.Y(PI * PI / 6), r: 14, name: 'a corner of f′, at the value π²/6' }));
    const heads = {
      f: `$\\kf(t) = \\sum \\frac{\\sin(nt)}{n^3}$, N = ${N}: the coefficients fall like 1/n³, and the sum is smooth.`,
      fp: `$\\kfprime(t) = \\sum \\frac{\\cos(nt)}{n^2}$, N = ${N}: the coefficients fall like 1/n², and the sum is continuous, with corners at $t = 0, \\pm 2\\pi$.`,
      fpp: `$\\kfdprime(t) = \\sum \\frac{-\\sin(nt)}{n}$, N = ${N}: the coefficients fall like 1/n, and the sum jumps at $t = 0, \\pm 2\\pi$.`,
      f3: `$\\sum -\\cos(nt)$, N = ${N}: the terms do not go to zero; at $t = 0$ the partial sum is ${fmt(-N, 0)} and falls further as N grows.`,
    };
    headline(ctx, heads[v]);
    const TERM = { f: '\\frac{\\sin(nt)}{n^3}', fp: '\\frac{\\cos(nt)}{n^2}', fpp: '\\frac{-\\sin(nt)}{n}', f3: '-\\cos(nt)' };
    const cN = v === 'f' ? `\\frac{1}{${N}^3} = ${n2(1 / N ** 3, 5)}` : v === 'fp' ? `\\frac{1}{${N}^2} = ${n2(1 / N ** 2, 4)}` : v === 'fpp' ? `-\\frac{1}{${N}} = ${n2(-1 / N, 4)}` : '-1';
    ro.set(`\\kS_{${N}}(t) = \\sum_{n=1}^{${N}} ${TERM[v]},\\quad \\text{coefficient of the term } n = ${N}\\text{: } ${cN}`, undefined, { form: v });
  }
  still(d, draw);
})();
};
