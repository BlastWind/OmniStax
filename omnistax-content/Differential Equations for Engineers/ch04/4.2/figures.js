/* Figures for section 4.2 The trigonometric series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, select, begin, axes, plot, shade, drag, dot, line, text, label, vbracket, hbracket, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');   /* a number for TeX */
const PI = Math.PI;
const r2 = (v) => Math.round(v * 100) / 100;
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* t written in π where it is a multiple of π/2, else to two decimals */
const piName = (k) => (k === 0 ? '0' : `${k < 0 ? '−' : ''}${Math.abs(k) === 1 ? '' : Math.abs(k)}π`);
const halfPi = (v) => { const k = Math.round(v / (PI / 2)); return k % 2 === 0 ? piName(k / 2) : `${k < 0 ? '−' : ''}${Math.abs(k) === 1 ? '' : Math.abs(k)}π/2`; };
const texT = (t) => (Math.abs(t - PI) < 1e-9 ? '\\pi' : Math.abs(t + PI) < 1e-9 ? '-\\pi' : n(t));
/* Simpson's rule on [a, b] with m (even) cells */
const simpson = (g, a, b, m = 2000) => {
  const h = (b - a) / m; let s = g(a) + g(b);
  for (let i = 1; i < m; i++) s += (i % 2 ? 4 : 2) * g(a + i * h);
  return (s * h) / 3;
};

/* Figure 4.3 and Example 4.2.1: the periodic extension F(t) of f on [−L, L]. The book's 1 − t² on [−1, 1]
   (period 2) or Try It 4.2.1's cos t on [−π/2, π/2] (period π). Axes t −3L to 3L (the book's window −3 to 3),
   ticks every L; y −1.5 to 1.5 so the formula carried on (dashed) shows where it leaves the extension. */
(function () {
  const d = sim('sim-periodic-extension', 560);
  const FNS = {
    par: { L: 1, f: (t) => 1 - t * t, name: '1 − t²', on: '[−1, 1]', period: '2' },
    cos: { L: PI / 2, f: (t) => Math.cos(t), name: 'cos t', on: '[−π/2, π/2]', period: 'π' },
  };
  const tsRange = (v) => ({ min: r2(-3 * FNS[v].L), max: r2(3 * FNS[v].L), step: 0.01, unit: '', dec: 2 });
  const fn = choice(d.controls, { label: 'f', key: 'f', value: 'par', options: [
    { value: 'par', label: '1 − t² on [−1, 1]' }, { value: 'cos', label: 'cos t on [−π/2, π/2]' }],
    onInput: (v) => { const was = v === 'par' ? 'cos' : 'par'; ts.range({ ...tsRange(v), value: r2((ts.v / FNS[was].L) * FNS[v].L) }); } });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -3, max: 3, step: 0.01, value: 2.5, unit: '', dec: 2 });
  /* F(t) = f(t − 2Lk), k the copy that holds t */
  const copyOf = (v, t) => Math.round(t / (2 * FNS[v].L));
  const ext = (v) => (t) => FNS[v].f(t - 2 * FNS[v].L * copyOf(v, t));
  const P = drag(d, { x: ts, y: (t) => ext(fn.value)(t) });
  const ro = readout(d);
  const BOX = { l: 170, r: 1250, t: 140, b: 470 };
  const U = (u) => BOX.l + ((u + 3) / 6) * (BOX.r - BOX.l);        /* the frame in units of L */
  let hits = [];
  hover(d.stage, () => hits);
  const shiftName = (v, k) => {
    if (k === 0) return v === 'par' ? '1 − t²' : 'cos t';
    const s = v === 'par' ? `${2 * Math.abs(k)}` : (Math.abs(k) === 1 ? 'π' : `${Math.abs(k)}π`);
    return v === 'par' ? `1 − (t ${k > 0 ? '−' : '+'} ${s})²` : `cos(t ${k > 0 ? '−' : '+'} ${s})`;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), mu = PAL.muted, v = fn.value, L = FNS[v].L, t = r2(ts.v);
    const Lm = fn.mix((w) => FNS[w].L);
    const ax = axes(ctx, BOX, [-3 * Lm, 3 * Lm], [-1.5, 1.5], { xl: 't', yl: 'F(t)', yc: fc, nx: 6, ny: 6,
      fx: (x) => (v === 'par' ? fmt(x, 0) : halfPi(x)), fy: (y) => fmt(y, 1) });
    /* the interval the function is given on */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(U(-1), BOX.t, U(1) - U(-1), BOX.b - BOX.t); ctx.restore();
    text(ctx, FNS[v].on, U(0.5), BOX.b - 18, mu, { size: 17, align: 'center' });
    /* the formula for f carried on past [−L, L]: not the extension */
    const fu = (w) => (u) => FNS[w].f(u * FNS[w].L), Fu = (w) => (u) => ext(w)(u * FNS[w].L);
    clip(ctx, BOX, () => {
      ctx.save(); ctx.setLineDash([10, 10]);
      fn.curve(ctx, fu, -3, 3, U, ax.Y, alpha(PAL.ink, 0.55), 3, 300);
      ctx.restore();
      if (fn.k < 1) fn.curve(ctx, Fu, -3, 3, U, ax.Y, fc, 5, 600);
    });
    if (fn.k >= 1) {
      plot(ctx, ax, ext(v), fc, { w: 5 });
      plot(ctx, ax, FNS[v].f, fc, { w: 9, x: [-L, L] });
    }
    /* each copy's formula above it */
    ['par', 'cos'].forEach((w) => fn.only(ctx, w, () => [-1, 0, 1].forEach((k) => text(ctx, shiftName(w, k), U(2 * k), BOX.t + 20, fc, { size: 20, align: 'center', weight: 600, bg: PAL.panel }))));
    const ux = v === 'par' ? -1.45 : -2.55, fy = FNS[v].f(ux * L);
    if (fy > -1.5) label(ctx, `${FNS[v].name} continued`, U(ux), ax.Y(fy), { side: 'right', color: mu, size: 17, weight: 400 });
    /* the probe: F(t) on its copy, and the formula's own value at the same t */
    const k = copyOf(v, t), Fv = ext(v)(t), fv = FNS[v].f(t);
    if (fv >= -1.5 && fv <= 1.5 && Math.abs(fv - Fv) > 0.02) dot(ctx, ax.X(t), ax.Y(fv), mu, false, 8);
    line(ctx, ax.X(t), ax.Y(Fv), ax.X(t), ax.Y(0), alpha(PAL.ink, 0.4), 2, [4, 8]);
    const at = P.draw(ctx, ax, fc);
    hits = [-1, 0, 1].map((c) => ({ x: U(2 * c), y: ax.Y(Math.min(1, ext(v)(2 * c * L))), r: 18, name: c === 0 ? `f(t) = ${FNS[v].name} on ${FNS[v].on}` : `the copy F(t) = ${shiftName(v, c)}` }));
    hits.push({ x: U(ux), y: ax.Y(Math.max(-1.5, fy)), r: 14, name: `the formula ${FNS[v].name} carried on, not the extension` });
    if (at) hits.push({ x: at.x, y: at.y, r: 16, name: `F(${fmt(t, 2)}) = ${fmt(Fv, 2)}` });
    const lo = 2 * k - 1, hi = 2 * k + 1;
    const span = v === 'par' ? `[${fmt(lo, 0)}, ${fmt(hi, 0)}]` : `[${halfPi(lo * L)}, ${halfPi(hi * L)}]`;
    headline(ctx, v === 'par'
      ? `1 − t² on [−1, 1], extended with period 2: on ${span} it is ${shiftName(v, k)}${k === 0 ? ' itself' : ''}.`
      : `cos t on [−π/2, π/2], extended with period π: on ${span} it is ${shiftName(v, k)}${k === 0 ? ' itself' : ''}, and every copy is |cos t|, never negative.`);
    /* F(t) = f(t − 2Lk) with t to two decimals; the shift is exact (2k, or kπ) */
    const tt = n(t);
    let tex, note;
    if (v === 'par') {
      const s = r2(t - 2 * k), val = 1 - s * s;
      tex = k === 0
        ? `\\kF(${tt}) = \\kf(${tt}) = 1 - (${n(s)})^2 = ${n(val)}`
        : `\\kF(${tt}) = \\kf(${tt} ${k > 0 ? '-' : '+'} ${2 * Math.abs(k)}) = 1 - (${n(s)})^2 = ${n(val)}`;
      note = k === 0 ? `Here $t$ lies in $[-1, 1]$, so $\\kF(t) = \\kf(t)$.` : `The formula $1 - t^2$ itself gives $1 - (${tt})^2 = ${n(1 - t * t)}$ there.`;
    } else {
      const sh = Math.abs(k) === 1 ? '\\pi' : `${Math.abs(k)}\\pi`, val = Math.cos(t - PI * k);
      tex = k === 0
        ? `\\kF(${tt}) = \\kf(${tt}) = \\cos(${tt}) = ${n(val)}`
        : `\\kF(${tt}) = \\kf(${tt} ${k > 0 ? '-' : '+'} ${sh}) = \\cos(${tt} ${k > 0 ? '-' : '+'} ${sh}) = ${n(val)}`;
      note = k === 0 ? `Here $t$ lies in $[-\\pi/2, \\pi/2]$, so $\\kF(t) = \\kf(t)$.` : `The formula $\\cos t$ itself gives $\\cos(${tt}) = ${n(Math.cos(t))}$ there.`;
    }
    ro.set(tex, note, { form: `${v}${k === 0 ? 0 : 1}` });
  }
  still(d, draw);
})();

/* Sim: a Fourier coefficient is an area. f (the sawtooth, the square wave, or cos 3t) and the eigenfunction
   cos nt or sin nt above; their product below, shaded above and below the axis. The inner product
   ⟨f, cos nt⟩ = ∫ f(t)cos(nt) dt is the area above less the area below (Simpson's rule, 2000 cells on each
   piece, so each area is good to far better than the three decimals shown), and a_n = that/π. Both panes
   t −π to π, y −4 to 4: |f| ≤ π, and so is the product. */
(function () {
  const d = sim('sim-fourier-coefficient', 720);
  const FS = {
    saw: { name: 'the sawtooth', short: 'sawtooth', pieces: [{ f: (t) => t, x: [-PI, PI], ends: '(]' }] },
    sq: { name: 'the square wave', short: 'square wave', pieces: [{ f: () => 0, x: [-PI, 0], ends: '(]' }, { f: () => PI, x: [0, PI], ends: '(]' }] },
    c3: { name: 'cos 3t', short: 'cos 3t', pieces: [{ f: (t) => Math.cos(3 * t), x: [-PI, PI] }] },
  };
  const fc = select(d.controls, { label: 'f', key: 'f', value: 'saw', options: [
    { value: 'saw', label: 'sawtooth' }, { value: 'sq', label: 'square wave' }, { value: 'c3', label: 'cos 3t' }] });
  const ec = choice(d.controls, { aria: 'eigenfunction', key: 'e', value: 'cos', options: [
    { value: 'cos', label: 'cos nt' }, { value: 'sin', label: 'sin nt' }],
    onInput: (v) => ns.range({ min: v === 'sin' ? 1 : 0, max: 8, step: 1, unit: '', dec: 0 }) });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 0, max: 8, step: 1, value: 3, unit: '', dec: 0 });
  const ro = readout(d);
  const TOP = { l: 170, r: 1250, t: 130, b: 340 }, BOT = { l: 170, r: 1250, t: 430, b: 640 };
  const fxPi = (x) => halfPi(x);
  let hits = [];
  hover(d.stage, () => hits);
  const eig = (e, k) => (e === 'cos' ? (t) => Math.cos(k * t) : (t) => Math.sin(k * t));
  const eName = (e, k) => (k === 0 ? '1' : `${e} ${k === 1 ? '' : k}t`);
  /* why the areas come out as they do, in the book's terms */
  const why = (f, e, k, val) => {
    const z = Math.abs(val) < 5e-4;
    if (f === 'saw') return e === 'cos'
      ? (k === 0 ? 'f(t) = t is odd and its areas cancel' : `the product t cos ${k === 1 ? '' : k}t is odd and its areas cancel`)
      : `the product t sin ${k === 1 ? '' : k}t is even and its two halves add`;
    if (f === 'sq') return e === 'cos'
      ? (k === 0 ? 'the only area is π over (0, π)' : `on (0, π) the arches of π cos ${k === 1 ? '' : k}t above and below the axis are equal`)
      : (z ? `on (0, π) the arches of π sin ${k}t above and below the axis are equal` : `on (0, π) π sin ${k === 1 ? '' : k}t has one arch more above the axis than below`);
    if (e === 'sin') return `the product cos 3t sin ${k === 1 ? '' : k}t is odd and its areas cancel`;
    if (k === 3) return 'the product cos² 3t never dips below the axis';
    return k === 0 ? 'cos 3t has as much area above the axis as below' : `cos 3t and cos ${k === 1 ? '' : k}t are orthogonal and the areas cancel`;
  };
  /* the book's own value, where the section works it out */
  const exact = (f, e, k) => {
    const q = (k2) => (k2 === 1 ? '2' : k2 === 2 ? '1' : `\\frac{2}{${k2}}`);
    if (f === 'saw') return e === 'sin' ? `\\kbn = \\frac{2(-1)^{n+1}}{n} = ${k % 2 ? '' : '-'}${q(k)}` : (k === 0 ? '\\kazero = 0' : '\\kan = 0');
    if (f === 'sq') return e === 'sin' ? `\\kbn = \\frac{1-(-1)^n}{n} = ${k % 2 ? q(k) : '0'}` : (k === 0 ? '\\kazero = \\pi' : '\\kan = 0');
    return null;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const fC = C('function'), iC = C('integral'), f = fc.value, e = ec.value, k = Math.round(ns.v);
    const g = eig(e, k), pieces = FS[f].pieces;
    const prod = pieces.map((p) => ({ f: (t) => p.f(t) * g(t), x: p.x, ends: p.ends }));
    const top = axes(ctx, TOP, [-PI, PI], [-4, 4], { yl: `f(t) and ${eName(e, k)}`, yc: fC, nx: 4, ny: 4, fx: fxPi });
    const bot = axes(ctx, BOT, [-PI, PI], [-4, 4], { xl: 't', yl: k === 0 ? 'f(t) · 1' : `f(t) ${eName(e, k)}`, yc: C('integral'), nx: 4, ny: 4, fx: fxPi });
    /* above: f and the eigenfunction, a dashed function of the same kind */
    ctx.save(); ctx.setLineDash([12, 9]); plot(ctx, top, g, alpha(fC, 0.85), { w: 3 }); ctx.restore();
    Object.keys(FS).forEach((h) => fc.only(ctx, h, () => plot(ctx, top, FS[h].pieces, fC, { w: 5 })));
    /* below: the product, its area above and below the axis */
    let pos = 0, neg = 0;
    prod.forEach((p) => {
      pos += simpson((t) => Math.max(p.f(t), 0), p.x[0], p.x[1]);
      neg += -simpson((t) => Math.min(p.f(t), 0), p.x[0], p.x[1]);
      shade(ctx, bot, (t) => Math.max(p.f(t), 0), 0, p.x[0], p.x[1], iC, { alpha: 0.42 });
      shade(ctx, bot, (t) => Math.min(p.f(t), 0), 0, p.x[0], p.x[1], iC, { alpha: 0.16 });
    });
    Object.keys(FS).forEach((h) => fc.only(ctx, h, () => plot(ctx, bot, FS[h].pieces.map((p) => ({ f: (t) => p.f(t) * g(t), x: p.x, ends: p.ends })), iC, { w: 4 })));
    const P = Math.round(pos * 1000) / 1000, N = Math.round(neg * 1000) / 1000, val = (P - N) / PI;
    /* the legend of the two shades */
    const sw = (y, a, s) => { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = iC; ctx.fillRect(BOT.r - 300, y - 9, 26, 18); ctx.restore(); text(ctx, s, BOT.r - 264, y, PAL.ink, { size: 17 }); };
    sw(BOT.t - 40, 0.42, `area above the axis ${fmt(P, 3)}`);
    sw(BOT.t - 14, 0.16, `area below the axis ${fmt(N, 3)}`);
    text(ctx, `f(t): ${FS[f].short}`, TOP.r - 300, TOP.t - 40, fC, { size: 17, weight: 600 });
    ctx.save(); ctx.setLineDash([12, 9]); line(ctx, TOP.r - 300, TOP.t - 14, TOP.r - 274, TOP.t - 14, alpha(fC, 0.85), 3); ctx.restore();
    text(ctx, `${k === 0 ? 'the constant 1' : eName(e, k)}`, TOP.r - 264, TOP.t - 14, fC, { size: 17 });
    hits = [
      { x: top.X(-1.2), y: top.Y(pieces[0].f(-1.2 + (f === 'sq' ? 0 : 0))), r: 14, name: `f(t), ${FS[f].name}` },
      { x: top.X(1.9), y: top.Y(g(1.9)), r: 14, name: `the eigenfunction ${eName(e, k)}` },
      { x: bot.X(2.2), y: bot.Y(prod[prod.length - 1].f(2.2)), r: 14, name: `the product f(t) ${eName(e, k)}, whose area is the inner product` },
    ];
    const cname = e === 'cos' ? `a${k === 0 ? '₀' : '_' + k}` : `b_${k}`;
    const sub = (s) => s.replace(/_(\d)/, (m, q) => '₀₁₂₃₄₅₆₇₈'[+q]);
    const vs = fmt(Math.abs(val) < 5e-4 ? 0 : val, 3);
    headline(ctx, `${FS[f].short[0].toUpperCase()}${FS[f].short.slice(1)} and ${k === 0 ? 'the constant 1' : eName(e, k)}: ${why(f, e, k, val)}: ${sub(cname)} = ${vs}.`);
    const sym = e === 'cos' ? (k === 0 ? '\\kazero' : `\\htmlClass{kv-sequence}{a_{${k}}}`) : `\\htmlClass{kv-sequence}{b_{${k}}}`;
    const integrand = k === 0 ? '\\kf(t)' : `\\kf(t)\\${e}(${k === 1 ? '' : k}t)`;
    const tex = `${sym} = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} ${integrand}\\,dt = \\frac{1}{\\pi}\\bigl(${n(P, 3)} - ${n(N, 3)}\\bigr) = ${n(Math.abs(val) < 5e-4 ? 0 : val, 3)}`;
    const ex = exact(f, e, k);
    const note = ex ? `The book’s formula, with $n = ${k}$: $${ex}$.`
      : (e === 'cos' && k === 3 ? 'Only $n = 3$ survives: $\\langle \\cos 3t, \\cos 3t \\rangle = \\pi$, so $a_3 = 1$.' : e === 'cos' ? 'Every coefficient of $\\cos 3t$ but $a_3 = 1$ is zero: it is its own Fourier series.' : 'Every $\\kbn$ of $\\cos 3t$ is zero: it is its own Fourier series.');
    ro.set(tex, note, { form: `${f}-${e}-${k === 0 ? 0 : 1}` });
  }
  still(d, draw);
})();

/* Figures 4.4–4.8: the sawtooth or the square wave and the partial sum S_N of its Fourier series.
   Main pane t −2π to 2π (the book's window), y −4 to 4 (the sawtooth's overshoot reaches about 3.7).
   The zoom below is the one window the plan names: t within 0.5 of the probe, y within 0.8 of f there (half
   the jump and 0.7 more with the probe on a jump), nice ticks. The bars are |b_n| for n = 1 to 16 on 0 to 2.2. */
(function () {
  const d = sim('sim-partial-sums', 880);
  const WAVES = {
    saw: { name: 'sawtooth', c0: 0, b: (k) => (2 * (k % 2 ? 1 : -1)) / k,
      pieces: [{ f: (t) => t + 2 * PI, x: [-2 * PI, -PI], ends: '-]' }, { f: (t) => t, x: [-PI, PI], ends: '(]' }, { f: (t) => t - 2 * PI, x: [PI, 2 * PI], ends: '(-' }],
      f: (t) => { const s = t - 2 * PI * Math.ceil((t - PI) / (2 * PI)); return s; } },
    sq: { name: 'square wave', c0: PI / 2, b: (k) => (k % 2 ? 2 / k : 0),
      pieces: [{ f: () => PI, x: [-2 * PI, -PI], ends: '-]' }, { f: () => 0, x: [-PI, 0], ends: '(]' }, { f: () => PI, x: [0, PI], ends: '(]' }, { f: () => 0, x: [PI, 2 * PI], ends: '(-' }],
      f: (t) => { const s = t - 2 * PI * Math.ceil((t - PI) / (2 * PI)); return s > 0 ? PI : 0; } },
  };
  /* the jumps of each wave in the window, with the limits on either side */
  const jumpsOf = (w) => (w === 'saw' ? [-PI, PI].map((J) => ({ J, l: PI, r: -PI })) : [-PI, 0, PI].map((J) => (Math.abs(J) > 1 ? { J, l: PI, r: 0 } : { J, l: 0, r: PI })));
  const wv = choice(d.controls, { label: 'f', key: 'wave', value: 'saw', options: [{ value: 'saw', label: 'sawtooth' }, { value: 'sq', label: 'square wave' }],
    onInput: () => ts.refresh() });
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 100, step: 1, value: 3, unit: '', dec: 0, detents: [3, 20, 100] });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -6.28, max: 6.28, step: 0.01, value: 2.8, unit: '', dec: 2,
    specials: [{ at: PI, label: 'jump' }, { at: -PI, label: 'jump' }, { at: () => (wv.value === 'sq' ? 0 : null), label: 'jump' }] });
  const S = (w, N) => { const W = WAVES[w], bs = Array.from({ length: N }, (_, i) => W.b(i + 1)); return (t) => { let s = W.c0; for (let i = 0; i < N; i++) if (bs[i]) s += bs[i] * Math.sin((i + 1) * t); return s; }; };
  const Pr = drag(d, { x: ts, y: (t) => S(wv.value, Math.round(Ns.v))(t) });
  const ro = readout(d);
  const MAIN = { l: 170, r: 1250, t: 150, b: 450 }, ZOOM = { l: 170, r: 760, t: 560, b: 800 }, BARS = { l: 900, r: 1250, t: 560, b: 800 };
  const NB = 16;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fC = C('function'), sC = C('series'), qC = C('sequence'), w = wv.value, W = WAVES[w], N = Math.round(Ns.v), t0 = ts.v;
    const SN = S(w, N);
    const main = axes(ctx, MAIN, [-2 * PI, 2 * PI], [-4, 4], { xl: 't', nx: 8, ny: 4, fx: halfPi });
    /* the zoom window on the main pane */
    const za = Math.max(-2 * PI, t0 - 0.5), zb = Math.min(2 * PI, t0 + 0.5);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(main.X(za), MAIN.t, main.X(zb) - main.X(za), MAIN.b - MAIN.t); ctx.restore();
    Object.keys(WAVES).forEach((h) => wv.only(ctx, h, () => plot(ctx, main, WAVES[h].pieces, fC, { w: 5 })));
    plot(ctx, main, SN, sC, { w: 3 });
    /* the legend */
    const lg = (x, c, s, wd) => { line(ctx, x, MAIN.t - 30, x + 30, MAIN.t - 30, c, wd); text(ctx, s, x + 40, MAIN.t - 30, c, { size: 18, weight: 600 }); };
    lg(MAIN.l, fC, `f(t), the ${W.name}`, 5);
    lg(MAIN.l + 380, sC, `S_{${N}}(t), the first ${N} harmonic${N === 1 ? '' : 's'}`, 3);
    /* the zoom: x within 0.5 of the probe */
    /* centred on f at the probe (the midpoint at a jump), 0.8 either way: the overshoot of either wave fits */
    const jAt = jumpsOf(w).find((j) => Math.abs(t0 - j.J) < 1e-9);
    const yc = jAt ? (jAt.l + jAt.r) / 2 : W.f(t0), yh = jAt ? Math.abs(jAt.l - jAt.r) / 2 + 0.7 : 0.8;
    const lo = yc - yh, hi = yc + yh;
    const zoom = axes(ctx, ZOOM, [za, zb], [lo, hi], { xl: 't', nx: 4, ny: 4, nice: true });
    Object.keys(WAVES).forEach((h) => wv.only(ctx, h, () => plot(ctx, zoom, WAVES[h].pieces, fC, { w: 5 })));
    plot(ctx, zoom, SN, sC, { w: 3 });
    /* a jump inside the window: the top of the jump dashed, and the overshoot beside it */
    const J = jumpsOf(w).find((j) => j.J >= za - 1e-9 && j.J <= zb + 1e-9);
    let over = null;
    if (J) {
      const left = J.l > J.r, top = Math.max(J.l, J.r), a = left ? Math.max(za, J.J - 0.5) : J.J, b = left ? J.J : Math.min(zb, J.J + 0.5);
      let best = -Infinity, bt = J.J;
      for (let i = 1; i < 2000; i++) { const t = a + ((b - a) * i) / 2000, v = SN(t); if (v > best) { best = v; bt = t; } }
      clip(ctx, ZOOM, () => line(ctx, ZOOM.l, zoom.Y(top), ZOOM.r, zoom.Y(top), alpha(PAL.ink, 0.5), 2, [10, 10]));
      over = { J: J.J, top, peak: best, at: bt, size: best - top, jump: Math.abs(J.l - J.r), side: left ? 'left' : 'right' };
      if (over.size > 0.004 && best <= hi) {
        const bx = zoom.X(bt) + (left ? -16 : 16);
        vbracket(ctx, bx, zoom.Y(best), zoom.Y(top), PAL.muted);
        label(ctx, `overshoot ${fmt(over.size, 2)}`, bx, zoom.Y(best), { side: 'above', color: PAL.muted, size: 17, weight: 400 });
      }
    }
    const pz = zoom.X(t0), sv = SN(t0);
    line(ctx, pz, ZOOM.t, pz, ZOOM.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    if (sv >= lo && sv <= hi) dot(ctx, pz, zoom.Y(sv), sC, true, 9);
    Pr.draw(ctx, main, sC);
    text(ctx, 'near the probe', ZOOM.r, ZOOM.t - 24, PAL.muted, { size: 17, align: 'right' });
    /* the spectrum: |b_n| against n, filled for the harmonics in the sum */
    const bars = axes(ctx, BARS, [0, NB + 1], [0, 2.5], { xl: 'n', yl: '|b_n|', yc: qC, nx: 0, ny: 5, fy: (y) => fmt(y, 1) });
    hits = [];
    const bw = ((BARS.r - BARS.l) / (NB + 1)) * 0.6;
    for (let k = 1; k <= NB; k++) {
      const h = Math.abs(W.b(k)), x = bars.X(k);
      if (h > 0) {
        ctx.save(); ctx.globalAlpha *= k <= N ? 0.85 : 0.18; ctx.fillStyle = qC; ctx.fillRect(x - bw / 2, bars.Y(h), bw, bars.Y(0) - bars.Y(h)); ctx.restore();
        ctx.save(); ctx.strokeStyle = qC; ctx.lineWidth = 2; ctx.strokeRect(x - bw / 2, bars.Y(h), bw, bars.Y(0) - bars.Y(h)); ctx.restore();
      }
      if (k === 1 || k % 5 === 0) text(ctx, String(k), x, BARS.b + 26, PAL.muted, { size: 17, align: 'center' });
      hits.push({ x, y: bars.Y(h / 2), r: 12, name: `|b_${k}| = ${fmt(h, 3)}${k === 1 ? ', the fundamental frequency' : ', an overtone'}${k <= N ? ', in the sum' : ''}` });
    }
    label(ctx, 'fundamental', bars.X(1), bars.Y(2), { side: 'right', color: PAL.ink, size: 17, weight: 400 });
    hbracket(ctx, bars.X(2) - bw / 2, bars.X(NB) + bw / 2, bars.Y(1.0) - 30, PAL.muted, 'overtones', { size: 17 });
    hits.push({ x: main.X(-5), y: main.Y(SN(-5)), r: 14, name: `S_${N}(t), the sum of the first ${N} harmonics` },
      { x: main.X(-4.2), y: main.Y(W.f(-4.2)), r: 14, name: `f(t), the ${W.name}` });
    /* headline, readout and note */
    const atJump = jumpsOf(w).find((j) => Math.abs(t0 - j.J) < 1e-9);
    const fv = W.f(t0), tt = atJump ? (t0 > 0 ? (t0 > 1 ? 'π' : '0') : (t0 < -1 ? '−π' : '0')) : fmt(t0, 2);
    const nm = W.name[0].toUpperCase() + W.name.slice(1);
    headline(ctx, atJump
      ? `${nm}, N = ${N}: at the jump t = ${tt}, S_{${N}}(${tt}) = ${fmt(sv, 2)}, the midpoint of ${fmt(atJump.l, 2)} and ${fmt(atJump.r, 2)}.`
      : `${nm}, N = ${N}: S_{${N}}(${tt}) = ${fmt(sv, 2)} against f(${tt}) = ${fmt(fv, 2)}${over && over.size > 0.004 ? `; beside the jump the overshoot is ${fmt(over.size, 2)}, ${fmt((100 * over.size) / over.jump, 1)} % of the jump` : ''}.`);
    const Ssym = `\\htmlClass{kv-series}{S_{${N}}}`, T = atJump ? texT(t0) : n(t0);
    const sum = w === 'saw'
      ? `\\sum_{n=1}^{${N}} \\frac{2(-1)^{n+1}}{n}\\sin(${T}\\,n)`
      : `\\frac{\\pi}{2} + \\sum_{\\substack{n=1\\\\ n\\text{ odd}}}^{${N}} \\frac{2}{n}\\sin(${T}\\,n)`;
    const val = Math.abs(sv) < 5e-4 ? 0 : sv;
    ro.set(`${Ssym}(${T}) = ${sum} = ${n(val, 3)}`, atJump
      ? `At the jump $\\kf$ goes from $${n(atJump.l, 3)}$ to $${n(atJump.r, 3)}$, and every partial sum gives the midpoint $${n((atJump.l + atJump.r) / 2, 3)}$.`
      : over && over.size > 0.004
        ? `$\\kf(${T}) = ${n(fv, 3)}$. Beside the jump at $t = ${texT(over.J)}$ the sum peaks at $${n(over.peak, 3)}$, above the top $${n(over.top, 3)}$ by $${n(over.size, 3)}$: ${fmt((100 * over.size) / over.jump, 1)} % of the jump $${n(over.jump, 3)}$.`
        : `$\\kf(${T}) = ${n(fv, 3)}$, so the error at the probe is $|${n(val, 3)} - ${fv < 0 ? `(${n(fv, 3)})` : n(fv, 3)}| = ${n(Math.abs(val - fv), 3)}$.`,
      { form: `${w}-${atJump ? 1 : 0}` });
  }
  still(d, draw);
})();
};
