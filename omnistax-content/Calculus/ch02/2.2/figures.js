/* Figures for section 2.2 The Limit of a Function. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, drag, dot, line, arrow, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const blank = () => '';
const only = (vals) => (v) => (vals.some((w) => Math.abs(v - w) < 1e-9) ? fmt(v, 0) : '');
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/* Figure 2.12: f, g and h on the book's three panels, −4 to 4 by −2 to 6, one x for all three. */
(function () {
  const d = sim('sim-three-functions', 540);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 4, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: 2 }] });
  const FN = [
    { f: (x) => (x * x - 4) / (x - 2), s: '$\\kf(x) = \\dfrac{x^2 - 4}{x - 2}$', name: 'f', tag: '(a)', c: 'function' },
    { f: (x) => Math.abs(x - 2) / (x - 2), s: '$\\kg(x) = \\dfrac{|x - 2|}{x - 2}$', name: 'g', tag: '(b)', c: 'function',
      pieces: [{ f: () => -1, x: [-4, 2], ends: '-)' }, { f: () => 1, x: [2, 4], ends: '(-' }] },
    { f: (x) => 1 / ((x - 2) * (x - 2)), s: '$\\kh(x) = \\dfrac{1}{(x - 2)^2}$', name: 'h', tag: '(c)', c: 'function' },
  ];
  const P = FN.map((fn) => drag(d, { x: xs, y: fn.f }));
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), x = xs.v, at = Math.abs(x - 2) < 1e-9;
    hits = [];
    FN.forEach((fn, i) => {
      const l = 90 + i * 450, box = { l, r: l + 330, t: 30, b: 380 };
      const ax = axes(ctx, box, [-4, 4], [-2, 6], { xl: 'x', yl: 'y', nx: 8, ny: 8, fx: only([-4, -2, 2, 4]), fy: only([2, 4, 6]) });
      plot(ctx, ax, fn.pieces ?? fn.f, fc, fn.pieces ? {} : { holes: i === 0 ? [2] : [] });
      const y = fn.f(x);
      if (!at && Number.isFinite(y) && y <= 6) drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0));
      const p = P[i].draw(ctx, ax, pc);
      if (p) hits.push({ x: p.x, y: p.y, r: 18, name: `(${fmt(x, 2)}, ${fn.name}(${fmt(x, 2)})) = (${fmt(x, 2)}, ${fmt(y, 2)})` });
      if (i === 0) hits.push({ x: ax.X(2), y: ax.Y(4), r: 14, name: 'the hole at (2, 4): f(2) is undefined' });
      if (i === 1) hits.push({ x: ax.X(2), y: ax.Y(-1), r: 14, name: 'the open end (2, −1)' }, { x: ax.X(2), y: ax.Y(1), r: 14, name: 'the open end (2, 1)' });
      text(ctx, fn.s, (box.l + box.r) / 2, 458, fc, { size: 24, weight: 600, align: 'center', tex: true });
      text(ctx, fn.tag, (box.l + box.r) / 2, 522, PAL.ink, { size: 22, align: 'center' });
    });
    const v = (f, dec) => n(f(x), dec);
    ro.set(at ? '\\kf(2),\\ \\kg(2)\\ \\text{and}\\ \\kh(2)\\ \\text{are undefined}'
      : `\\kf(${n(x)}) = ${v(FN[0].f, 2)} \\qquad \\kg(${n(x)}) = ${v(FN[1].f, 0)} \\qquad \\kh(${n(x)}) = ${v(FN[2].f, 2)}`, undefined, { form: at });
  }
  still(d, draw);
})();

/* Figures 2.13 and 2.14: a table's rows as pairs of points about the hole at (a, L), on a window
   a ± w0·10^−z that narrows with the zoom z; the y-range is fitted to the graph over each window. */
function tableZoom(id, o) {
  const d = sim(id, 520);
  const zs = ctl(d.controls, { label: '\\text{zoom}', cls: '', key: 'zoom', min: 0, max: o.K, step: 0.01, value: 0, unit: '', dec: 2, detents: Array.from({ length: o.K + 1 }, (_, i) => i), snap: true });
  const ro = readout(d);
  const BOX = { l: 230, r: 1250, t: 40, b: 430 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('limit'), z = zs.v, w = o.w0 * Math.pow(10, -z);
    let lo = o.L, hi = o.L;
    for (let i = 0; i <= 240; i++) {
      const x = o.a - w + (2 * w * i) / 240; if (Math.abs(x - o.a) < w * 1e-3) continue;
      const y = o.f(x); if (Number.isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y); }
    }
    const pad = 0.14 * (hi - lo || Math.abs(o.L) * 1e-9);
    const ax = axes(ctx, BOX, [o.a - w, o.a + w], [lo - pad, hi + pad], { xl: 'x', yl: 'y', nx: 6, ny: 5, nice: true });
    line(ctx, BOX.l, ax.Y(o.L), BOX.r, ax.Y(o.L), lc, 3, [10, 10]);
    plot(ctx, ax, o.f, fc, { holes: [o.a] });
    text(ctx, `$\\kL = ${o.Ls}$`, BOX.r - 8, ax.Y(o.L) - 24, lc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    const focus = clamp(Math.round(z), 1, o.K);
    hits = [{ x: ax.X(o.a), y: ax.Y(o.L), r: 14, name: `the hole at (${fmt(o.a, 0)}, ${o.Ls}): f(${fmt(o.a, 0)}) is undefined` }];
    for (let k = 1; k <= o.K; k++) {
      const h = Math.pow(10, -k); if (h > w * 0.98) continue;
      [o.a - h, o.a + h].forEach((x) => {
        const y = o.f(x); dot(ctx, ax.X(x), ax.Y(y), pc, true, k === focus ? 10 : 7);
        hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `x = ${fmt(x, k)}: f(x) = ${fmt(y, 12)}` });
      });
    }
    const h = Math.pow(10, -focus), xl = o.a - h, xr = o.a + h;
    ro.set(`\\kf(${n(xl, focus)}) = ${n(o.f(xl), 12)} \\qquad \\kf(${n(xr, focus)}) = ${n(o.f(xr), 12)} \\qquad \\kL = ${typed('limit', o.Ls)}`);
  }
  still(d, draw);
}
/* Figure 2.13: (sin x)/x on the book's −6 to 6, zoomed over Table 2.2's four rows */
tableZoom('sim-sinc-table', { f: (x) => Math.sin(x) / x, a: 0, L: 1, Ls: '1', w0: 6, K: 4 });
/* Figure 2.14: (√x − 2)/(x − 4) on the book's 0 to 8, zoomed over Table 2.3's five rows */
tableZoom('sim-root-table', { f: (x) => (Math.sqrt(x) - 2) / (x - 4), a: 4, L: 0.25, Ls: '0.25', w0: 4, K: 5 });

/* Figure 2.15, a faithful copy: a stand-in close to the sketch, steep on the left, flattening through the
   hole at (−1, 3) and rising on the right, with the point (−1, 4) above the hole; −4 to 4 by −4 to 5. */
(function () {
  const d = sim('fig-graph-limit', 560);
  const s = (u) => (0.6 * u * u * u) / (1 + 0.25 * u * u), g = (x) => 3 + s(x + 0.5) - s(-0.5);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 470, r: 930, t: 40, b: 500 }, [-4, 4], [-4, 5], { xl: 'x', yl: 'y', nx: 8, ny: 9 });
    plot(ctx, ax, g, fc, { holes: [-1], dots: [[-1, 4]] });
    text(ctx, '$\\kg(x)$', ax.X(1.1), ax.Y(g(1.1)) + 6, fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [
      { x: ax.X(-1), y: ax.Y(3), r: 14, name: 'the open circle at (−1, 3)' },
      { x: ax.X(-1), y: ax.Y(4), r: 14, name: 'the point (−1, 4): g(−1) = 4' },
    ];
  }
  still(d, draw);
})();

/* Figure 2.16, a faithful copy: the parabola h(x) = 0.3(x − 2)² − 1 with its vertex (2, −1) left open,
   on the book's −5 to 5 grid. */
(function () {
  const d = sim('fig-checkpoint-h', 560);
  const h = (x) => 0.3 * (x - 2) * (x - 2) - 1;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 470, r: 930, t: 40, b: 500 }, [-5, 5], [-5, 5], { xl: 'x', yl: 'y', nx: 10, ny: 10 });
    plot(ctx, ax, h, fc, { holes: [2] });
    text(ctx, '$\\kh(x)$', ax.X(2.2), ax.Y(-1.7), fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: ax.X(2), y: ax.Y(-1), r: 14, name: 'the open circle at (2, −1)' }];
  }
  still(d, draw);
})();

/* Figure 2.17: sin(1/x) on a window ±0.5·10^−z about 0, from the book's ±0.5 down to ±0.0005. Inside ±xc
   a half period of sin(1/x), πx², is under 3 units of canvas, so that stretch is drawn as the band it fills. */
(function () {
  const d = sim('sim-oscillation', 520);
  const zs = ctl(d.controls, { label: '\\text{zoom}', cls: '', key: 'zoom', min: 0, max: 3, step: 0.01, value: 0, unit: '', dec: 2, detents: [0, 1, 2, 3], snap: true });
  const ro = readout(d);
  const BOX = { l: 160, r: 1300, t: 100, b: 440 }, f = (x) => Math.sin(1 / x);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), z = zs.v, w = 0.5 * Math.pow(10, -z);
    const ax = axes(ctx, BOX, [-w, w], [-1.25, 1.25], { xl: 'x', yl: 'y', nx: 6, ny: 4, nice: true });
    const xc = Math.sqrt((6 * w) / ((BOX.r - BOX.l) * Math.PI));
    shade(ctx, ax, () => 1, () => -1, -xc, xc, fc, { alpha: 0.85 });
    plot(ctx, ax, [{ f, x: [-w, -xc] }, { f, x: [xc, w] }], fc);
    const seq = [];
    for (let k = Math.max(0, Math.ceil((2 / (Math.PI * w) - 1) / 2)); seq.length < 9; k++) {
      const x = 2 / ((2 * k + 1) * Math.PI); if (ax.X(x) < ax.X(0) + 40) break;
      if (!seq.length || ax.X(seq[seq.length - 1][0]) - ax.X(x) >= 40) seq.push([x, k % 2 ? -1 : 1, k]);
    }
    seq.forEach(([x, y]) => dot(ctx, ax.X(x), ax.Y(y), pc, true, 8));
    headline(ctx, `window ±${fmt(w, Math.ceil(z) + 1)}: sin(1/x) still swings between −1 and 1`);
    ro.set('\\sin\\!\\left(\\tfrac{1}{x}\\right) = 1,\\ -1,\\ 1,\\ -1,\\ \\ldots \\ \\text{at}\\ x = \\tfrac{2}{\\pi},\\ \\tfrac{2}{3\\pi},\\ \\tfrac{2}{5\\pi},\\ \\tfrac{2}{7\\pi},\\ \\ldots');
    hits = seq.map(([x, y, k]) => ({ x: ax.X(x), y: ax.Y(y), r: 12, name: `x = 2/(${2 * k + 1}π) = ${fmt(x, Math.ceil(z) + 4)}: sin(1/x) = ${fmt(y, 0)}` }));
  }
  still(d, draw);
})();

/* Figure 2.18: x + 1 for x < 2 and x² − 4 for x ≥ 2 on the book's −5 to 5 grid, a point dragged toward 2
   on each side. The one-sided limits are marked on the line x = 2 by arrowheads from their sides. */
(function () {
  const d = sim('sim-one-sided', 560);
  const fL = (x) => x + 1, fR = (x) => x * x - 4;
  const xl = ctl(d.controls, { label: '\\text{left}\\ x', cls: '', key: 'xl', aria: 'x from the left', min: -1, max: 2, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: 2 }] });
  const xr = ctl(d.controls, { label: '\\text{right}\\ x', cls: '', key: 'xr', aria: 'x from the right', min: 2, max: 3, step: 0.01, value: 2.5, unit: '', dec: 2, specials: [{ at: 2 }] });
  const PL = drag(d, { x: xl, y: fL }), PR = drag(d, { x: xr, y: fR });
  const ro = readout(d);
  const BOX = { l: 420, r: 980, t: 30, b: 480 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('limit');
    const ax = axes(ctx, BOX, [-5, 5], [-5, 5], { xl: 'x', yl: 'y', nx: 10, ny: 10 });
    plot(ctx, ax, [{ f: fL, x: [-5, 2], ends: '-)' }, { f: fR, x: [2, 5], ends: '[-' }], fc);
    const X2 = ax.X(2);
    arrow(ctx, X2 - 78, ax.Y(3), X2 - 14, ax.Y(3), lc, 4);
    arrow(ctx, X2 + 78, ax.Y(0), X2 + 14, ax.Y(0), lc, 4);
    text(ctx, '3', X2 - 90, ax.Y(3), lc, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '0', X2 + 90, ax.Y(0), lc, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    const a = xl.v, b = xr.v, atL = Math.abs(a - 2) < 1e-9, atR = Math.abs(b - 2) < 1e-9;
    if (!atL) drop(ctx, ax.X(a), ax.Y(fL(a)), ax.X(a), ax.Y(0));
    if (!atR && fR(b) <= 5) drop(ctx, ax.X(b), ax.Y(fR(b)), ax.X(b), ax.Y(0));
    PL.draw(ctx, ax, pc); PR.draw(ctx, ax, pc);
    hits = [
      { x: ax.X(a), y: ax.Y(fL(a)), r: 18, name: atL ? 'from the left the values reach 3, at the open circle (2, 3)' : `from the left: f(${fmt(a, 2)}) = ${fmt(fL(a), 2)}` },
      { x: ax.X(b), y: ax.Y(Math.min(5, fR(b))), r: 18, name: atR ? 'f(2) = 0, the filled point (2, 0)' : `from the right: f(${fmt(b, 2)}) = ${fmt(fR(b), 2)}` },
      { x: X2 - 50, y: ax.Y(3), r: 14, name: 'the limit from the left, 3' },
      { x: X2 + 50, y: ax.Y(0), r: 14, name: 'the limit from the right, 0' },
    ];
    const left = atL ? `\\lim_{x\\to 2^{-}}\\kf(x) = ${typed('limit', '3')}` : `\\kf(${n(a)}) = ${n(fL(a))} \\;\\to\\; ${typed('limit', '3')}`;
    const right = atR ? `\\lim_{x\\to 2^{+}}\\kf(x) = ${typed('limit', '0')}` : `\\kf(${n(b)}) = ${n(fR(b))} \\;\\to\\; ${typed('limit', '0')}`;
    ro.set(`${left} \\qquad ${right}`);
  }
  still(d, draw);
})();

/* Figure 2.19, a faithful copy: f(x) = 1/x on the book's −3 to 3 by −5 to 5. */
(function () {
  const d = sim('fig-reciprocal', 560);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 520, r: 880, t: 40, b: 500 }, [-3, 3], [-5, 5], { xl: 'x', yl: 'y', nx: 6, ny: 10 });
    plot(ctx, ax, (x) => 1 / x, fc);
    text(ctx, '$\\kf(x) = \\dfrac{1}{x}$', ax.X(1.2), ax.Y(2.6), fc, { size: 24, weight: 600, align: 'left', tex: true });
  }
  still(d, draw);
})();

/* Figure 2.20: 1/(x − a)ⁿ for n = 1 to 4, a drawn at 1 on −2 to 4 by −5 to 5 and named only as a. A change
   of n bends the curve through the powers between, the blend of the two integer powers it lies between. */
(function () {
  const d = sim('sim-power-poles', 560);
  const p = F.tween(d, 1);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 4, step: 1, value: 1, unit: '', dec: 0, detents: [1, 2, 3, 4], onInput: () => p.to(ns.v, 700) });
  const ro = readout(d);
  const A = 1, BOX = { l: 300, r: 1100, t: 90, b: 500 };
  const fOf = (q) => { const lo = Math.floor(q), hi = Math.ceil(q), k = q - lo; return (x) => (1 - k) / Math.pow(x - A, lo) + (lo === hi ? 0 : k / Math.pow(x - A, hi)); };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ln = C('line'), lc = C('limit'), nv = ns.v, odd = nv % 2 === 1;
    const ax = axes(ctx, BOX, [-2, 4], [-5, 5], { xl: 'x', yl: 'y', nx: 6, ny: 0, fx: (v) => (v === A ? 'a' : '') });
    line(ctx, ax.X(A), BOX.t, ax.X(A), BOX.b, ln, 3, [10, 10]);
    plot(ctx, ax, fOf(p.v), fc);
    const R = ax.X(A) + 32, L = ax.X(A) - 32;
    arrow(ctx, R, ax.Y(2.9), R, ax.Y(4.6), lc, 4);
    text(ctx, '$+\\infty$', R, ax.Y(2.2), lc, { size: 22, weight: 600, align: 'center', tex: true });
    if (odd) arrow(ctx, L, ax.Y(-2.9), L, ax.Y(-4.6), lc, 4); else arrow(ctx, L, ax.Y(2.9), L, ax.Y(4.6), lc, 4);
    text(ctx, odd ? '$-\\infty$' : '$+\\infty$', L, ax.Y(odd ? -2.2 : 2.2), lc, { size: 22, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kf(x) = \\dfrac{1}{(x - a)^n}$', ax.X(2.3), ax.Y(2.3), fc, { size: 24, weight: 600, align: 'left', tex: true });
    text(ctx, '$x = a$', ax.X(A) + 14, BOX.b - 20, ln, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    hits = [
      { x: ax.X(A), y: ax.Y(0) - 60, r: 14, name: 'the vertical asymptote x = a' },
      { x: R, y: ax.Y(4), r: 16, name: 'from the right: +∞' },
      { x: L, y: ax.Y(odd ? -4 : 4), r: 16, name: odd ? 'from the left: −∞' : 'from the left: +∞' },
    ];
    headline(ctx, odd ? `n = ${nv} is odd: +∞ from the right, −∞ from the left` : `n = ${nv} is even: +∞ from both sides`);
    const q = `\\frac{1}{(x-a)^{${nv}}}`;
    ro.set(odd ? `\\lim_{x\\to a^{+}}${q} = ${typed('limit', '+\\infty')} \\qquad \\lim_{x\\to a^{-}}${q} = ${typed('limit', '-\\infty')}`
      : `\\lim_{x\\to a}${q} = ${typed('limit', '+\\infty')}`, undefined, { form: odd });
  }
  still(d, draw);
})();

/* Figure 2.21, a faithful copy: stand-in pieces keeping every value Example 2.11 reads. On (−7, 1] a steep
   rise through (−4, 0) flattening at the hole (−2, 3) and climbing to (1, 6); from the open end (1, 3) down
   to −∞ at 3; from −∞ at 3 up past 4 and on. The book's −7 to 7 by −7 to 9, its tick labels only. */
(function () {
  const d = sim('fig-four-points', 600);
  const s = (u) => (u < 0 ? (0.9375 * u * u * u) / (1 + 0.375 * u * u) : (u * u * u) / 9);
  const A = (x) => 3 + s(x + 2), B = (x) => 4 - 2 / (3 - x), Cc = (x) => 4.4 + 0.45 * Math.pow(x - 4.8, 3) - 1 / ((x - 3) * (x - 3));
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 540 }, [-7, 7], [-7, 9], { xl: 'x', yl: 'y', nx: 14, ny: 16, fx: only([-4, -2, 0, 1, 3]), fy: only([3, 6]) });
    plot(ctx, ax, [{ f: A, x: [-7, 1], ends: '-]' }, { f: B, x: [1, 3], ends: '(-' }, { f: Cc, x: [3, 7] }], fc, { holes: [-2] });
    text(ctx, '$\\kf(x)$', ax.X(-6.2), ax.Y(-2.2), fc, { size: 24, weight: 600, align: 'center', tex: true });
    hits = [
      { x: ax.X(-4), y: ax.Y(0), r: 14, name: '(−4, 0): f(−4) = 0' },
      { x: ax.X(-2), y: ax.Y(3), r: 14, name: 'the open circle at (−2, 3): f(−2) is undefined' },
      { x: ax.X(1), y: ax.Y(6), r: 14, name: 'the point (1, 6): f(1) = 6' },
      { x: ax.X(1), y: ax.Y(3), r: 14, name: 'the open circle at (1, 3)' },
    ];
  }
  still(d, draw);
})();

/* Figure 2.23: m/m₀ = 1/√(1 − (v/c)²) for v/c from 0 to 0.9999, the y-axis following the point from the
   book's 0 to 5 up past Table 2.8's 70.71. */
(function () {
  const d = sim('sim-einstein', 540);
  const R = (u) => 1 / Math.sqrt(1 - u * u), ROWS = [0.99, 0.999, 0.9999];
  const us = ctl(d.controls, { label: 'v/c', cls: '', key: 'v', min: 0, max: 0.9999, step: 0.0001, value: 0.6, unit: '', dec: 4, detents: ROWS, snap: true });
  const P = drag(d, { x: us, y: R });
  const ro = readout(d);
  const BOX = { l: 230, r: 1230, t: 100, b: 450 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), ln = C('line'), u = us.v, r = R(u), top = Math.max(5, 1.2 * r);
    const ax = axes(ctx, BOX, [0, 1], [0, top], { xl: 'v/c', yl: 'm/m_0', yc: fc, nx: 5, ny: 5, nice: true });
    line(ctx, ax.X(1), BOX.t, ax.X(1), BOX.b, ln, 3, [10, 10]);
    plot(ctx, ax, R, fc, { x: [0, 1] });
    ROWS.forEach((v) => { if (Math.abs(v - u) > 1e-9) dot(ctx, ax.X(v), ax.Y(R(v)), pc, false, 8); });
    drop(ctx, ax.X(u), ax.Y(r), ax.X(u), ax.Y(0));
    P.draw(ctx, ax, pc);
    text(ctx, '$v/c = 1$', ax.X(1) + 14, BOX.t + 24, ln, { size: 22, weight: 600, align: 'left', tex: true });
    hits = [
      { x: ax.X(u), y: ax.Y(r), r: 18, name: `v/c = ${fmt(u, 4)}: m/m₀ = ${fmt(r, 3)}` },
      ...ROWS.map((v) => ({ x: ax.X(v), y: ax.Y(R(v)), r: 12, name: `Table 2.8: v/c = ${v}, m/m₀ = ${fmt(R(v), 3)}` })),
      { x: ax.X(1), y: (BOX.t + BOX.b) / 2, r: 14, name: 'the vertical asymptote v/c = 1' },
    ];
    headline(ctx, `v = ${fmt(u, 4)}c: m = ${fmt(r, 2)} m₀, so 100 kg becomes ${fmt(100 * r, 0)} kg`);
    const root = Math.sqrt(1 - u * u);
    ro.set(`\\frac{m}{m_{0}} = \\frac{1}{\\sqrt{1 - (${n(u, 4)})^{2}}} = \\frac{1}{${n(root, 6)}} = ${typed('function', n(r, 3))}`);
  }
  still(d, draw);
})();
};
