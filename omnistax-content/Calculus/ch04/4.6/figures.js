/* Figures for section 4.6 Limits at Infinity and Asymptotes. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const fx = (v) => fmt(v, Number.isInteger(v) ? 0 : 1);
const PI = Math.PI;
const piX = (v) => ({ '-6.283': '−2π', '-4.712': '−3π/2', '-3.142': '−π', '-1.571': '−π/2', '0.000': '0', '1.571': 'π/2', '3.142': 'π', '4.712': '3π/2', '6.283': '2π' }[v.toFixed(3)] ?? fmt(v, 1));

/* A still graph of one function with its asymptotes dashed in `line`: h (levels y = L), v (x = a), o ([m, b] for y = mx + b).
   o.pieces for piecewise domains, o.points named on hover, o.label the curve's formula. */
function graph(id, o) {
  const d = sim(id, o.H || 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point');
    const ax = axes(ctx, o.box || { l: 330, r: 1070, t: 40, b: (o.H || 420) - 60 }, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fx: o.fx || fx, fy: o.fy || fx });
    hits = [];
    (o.h || []).forEach((L) => { line(ctx, ax.X(o.xr[0]), ax.Y(L), ax.X(o.xr[1]), ax.Y(L), lc, 3, [10, 10]); hits.push({ x: ax.X(o.xr[1]) - 30, y: ax.Y(L), r: 14, name: `the horizontal asymptote y = ${fmt(L, 3)}` }); });
    (o.o || []).forEach(([m, b]) => { const y = (x) => m * x + b; ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip(); line(ctx, ax.X(o.xr[0]), ax.Y(y(o.xr[0])), ax.X(o.xr[1]), ax.Y(y(o.xr[1])), lc, 3, [10, 10]); ctx.restore(); });
    plot(ctx, ax, o.pieces || o.f, fc, { poles: o.v || [] });
    (o.v || []).forEach((a) => hits.push({ x: ax.X(a), y: (ax.box.t + ax.box.b) / 2, r: 16, name: `the vertical asymptote x = ${fmt(a, 3)}` }));
    (o.points || []).forEach((p) => { dot(ctx, ax.X(p.x), ax.Y(p.y), pc, true, 9); hits.push({ x: ax.X(p.x), y: ax.Y(p.y), r: 16, name: p.name }); });
    (o.labels || []).forEach(([s, x, y, c]) => text(ctx, s, ax.X(x), ax.Y(y), c === 'l' ? lc : fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }));
  });
}

/* Figure 4.40: 2 + 1/x and its horizontal asymptote y = 2. Axes −10 to 10 by −2 to 6. */
graph('fig-two-plus-reciprocal', { f: (x) => 2 + 1 / x, v: [0], h: [2], xr: [-10, 10], yr: [-2, 6], nx: 10, ny: 8, labels: [['$\\kf(x)=2+\\frac{1}{x}$', 5, 4.2], ['$y=2$', -8, 2.6, 'l']] });

/* Figure 4.41: (a) f approaching y = L as x → ∞; (b) as x → −∞. Stand-ins. */
(function () {
  const d = sim('fig-limits-at-infinity', 380);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), mc = C('limit');
    [[(x) => 2 + 1.6 * Math.exp(-0.5 * x) * Math.cos(1.4 * x), [0, 10], '(a)', 'x → ∞'], [(x) => 2 - 1.6 * Math.exp(0.5 * x) * Math.cos(1.4 * x), [-10, 0], '(b)', 'x → −∞']].forEach(([f, xr, tag, s], i) => {
      const l = 110 + i * 640, ax = axes(ctx, { l, r: l + 520, t: 30, b: 280 }, xr, [0, 4], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
      line(ctx, ax.X(xr[0]), ax.Y(2), ax.X(xr[1]), ax.Y(2), lc, 3, [10, 10]);
      plot(ctx, ax, f, fc);
      text(ctx, i ? 'M' : '$\\kL$', i ? l + 520 + 18 : l - 18, ax.Y(2), mc, { size: 24, weight: 600, align: 'center', tex: !i });
      text(ctx, `${tag}  ${s}`, l + 260, 330, PAL.ink, { size: 22, align: 'center' });
    });
  });
})();

/* Figure 4.42: (cos x)/x + 1, crossing y = 1 again and again. Axes −20 to 20 by −1 to 3. */
graph('fig-crossing-asymptote', { f: (x) => Math.cos(x) / x + 1, v: [0], h: [1], xr: [-20, 20], yr: [-1, 3], nx: 8, ny: 4, labels: [['$\\kf(x)=\\frac{\\cos x}{x}+1$', 11, 2.3]] });

/* Figures 4.43–4.46, Example 4.21. */
graph('fig-five-minus', { f: (x) => 5 - 2 / (x * x), v: [0], h: [5], xr: [-6, 6], yr: [-2, 7], nx: 6, ny: 9, labels: [['$\\kf(x)=5-\\frac{2}{x^2}$', 3.5, 3]] });
graph('fig-sinc', { f: (x) => (Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x), h: [0], xr: [-20, 20], yr: [-0.5, 1.2], nx: 8, ny: 6, fy: (v) => fmt(v, 1), labels: [['$\\kf(x)=\\frac{\\sin x}{x}$', 9, 0.8]] });
graph('fig-tangent-branch', { pieces: [{ f: Math.tan, x: [-PI / 2 + 1e-3, PI / 2 - 1e-3] }], v: [-PI / 2, PI / 2], xr: [-2.4, 2.4], yr: [-6, 6], nx: 4, ny: 6, fx: piX, labels: [['$y=\\tan x$', 1.0, 4.5]] });
graph('fig-arctangent', { f: Math.atan, h: [PI / 2, -PI / 2], xr: [-10, 10], yr: [-2, 2], nx: 10, ny: 4, labels: [['$\\kf(x)=\\tan^{-1}x$', 5, 0.6], ['$y=\\frac{\\pi}{2}$', -7, 1.95, 'l'], ['$y=-\\frac{\\pi}{2}$', 7, -1.95, 'l']] });
/* Figure 4.47: x³. */
graph('fig-cube', { f: (x) => x ** 3, xr: [-4, 4], yr: [-40, 40], nx: 8, ny: 4, fy: (v) => fmt(v, 0), labels: [['$\\kf(x)=x^3$', 2.4, 30]] });

/* Figure 4.48 made live: the formal definition on 2 + 1/x (Example 4.22). The band L ± ε about L = 2 in `limit`,
   N set by the reader; past N the graph must stay in the band. The dashed circle on N is 1/ε, the example's N. */
(function () {
  const d = sim('sim-epsilon-n', 470);
  const f = (x) => 2 + 1 / x, L = 2;
  const es = ctl(d.controls, { label: '\\varepsilon', cls: 'limit', key: 'eps', min: 0.05, max: 0.5, step: 0.01, value: 0.25, unit: '', dec: 2 });
  const ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 0.5, max: 20, step: 0.1, value: 4, unit: '', dec: 1, specials: [{ at: () => 1 / es.v }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), mc = C('limit'), e = es.v, N = ns.v, ok = 1 / N < e + 1e-9;
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 400 }, [0, 20], [1, 3.5], { xl: 'x', yl: 'y', nx: 10, ny: 5, fy: (v) => fmt(v, 1) });
    ctx.save(); ctx.fillStyle = alpha(mc, 0.16); ctx.fillRect(ax.X(0), ax.Y(L + e), ax.X(20) - ax.X(0), ax.Y(L - e) - ax.Y(L + e)); ctx.restore();
    line(ctx, ax.X(0), ax.Y(L), ax.X(20), ax.Y(L), mc, 3, [10, 10]);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(ax.X(N), ax.box.t, ax.X(20) - ax.X(N), ax.box.b - ax.box.t); ctx.restore();
    line(ctx, ax.X(N), ax.box.t, ax.X(N), ax.box.b, PAL.ink, 2.5, [6, 6]);
    plot(ctx, ax, f, alpha(fc, 0.3), { x: [0.05, N] });
    plot(ctx, ax, f, fc, { x: [N, 20] });
    if (!ok) plot(ctx, ax, f, PAL.ink, { x: [N, 1 / e], w: 8 });
    text(ctx, 'N', ax.X(N), ax.box.b + 44, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '$\\kL+\\varepsilon$', ax.X(20) + 50, ax.Y(L + e), mc, { size: 20, align: 'left', tex: true });
    text(ctx, '$\\kL-\\varepsilon$', ax.X(20) + 50, ax.Y(L - e), mc, { size: 20, align: 'left', tex: true });
    text(ctx, '$\\kf(x)=2+\\frac{1}{x}$', ax.X(2.2), ax.Y(3.2), fc, { size: 22, weight: 600, align: 'left', tex: true });
    headline(ctx, ok ? `For every x > ${fmt(N, 1)}, f(x) stays within ${fmt(e, 2)} of 2: this N works.` : `Just past N = ${fmt(N, 1)}, f(x) is ${fmt(1 / N, 3)} above 2, more than ε = ${fmt(e, 2)}: N must be at least ${fmt(1 / e, 2)}.`);
    hits = [{ x: ax.X(N), y: ax.box.t + 20, r: 18, name: `N = ${fmt(N, 1)}` }, { x: ax.X(18), y: ax.Y(L + e), r: 14, name: 'the band L ± ε about L = 2' }];
    ro.set(`x\\gt N=${n(N, 1)}\\;\\Rightarrow\\;|\\kf(x)-2|=\\frac{1}{x}\\lt\\frac{1}{N}=${n(1 / N, 3)}\\;${ok ? '\\le' : '\\gt'}\\;\\varepsilon=${n(e, 2)}`);
  });
})();

/* Figure 4.49 made live: the formal infinite limit on x³ (Example 4.23). The reader sets the height M and N;
   past N the graph must stay above M. The dashed circle on N is ∛M, the example's N. */
(function () {
  const d = sim('sim-m-n', 470);
  const f = (x) => x ** 3;
  const ms = ctl(d.controls, { label: 'M', cls: '', key: 'M', min: 5, max: 100, step: 1, value: 40, unit: '', dec: 0 });
  const ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 0.2, max: 5, step: 0.05, value: 2.5, unit: '', dec: 2, specials: [{ at: () => Math.cbrt(ms.v) }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), M = ms.v, N = ns.v, ok = N ** 3 >= M - 1e-9;
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 400 }, [0, 5], [0, 125], { xl: 'x', yl: 'y', nx: 10, ny: 5, fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(ax.X(N), ax.box.t, ax.X(5) - ax.X(N), ax.box.b - ax.box.t); ctx.restore();
    line(ctx, ax.X(0), ax.Y(M), ax.X(5), ax.Y(M), alpha(PAL.ink, 0.8), 3, [10, 10]);
    line(ctx, ax.X(N), ax.box.t, ax.X(N), ax.box.b, PAL.ink, 2.5, [6, 6]);
    plot(ctx, ax, f, alpha(fc, 0.3), { x: [0, N] });
    plot(ctx, ax, f, fc, { x: [N, 5] });
    if (!ok) plot(ctx, ax, f, PAL.ink, { x: [N, Math.cbrt(M)], w: 8 });
    text(ctx, 'M', ax.X(0) - 30, ax.Y(M), PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'N', ax.X(N), ax.box.b + 44, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '$\\kf(x)=x^3$', ax.X(4.0), ax.Y(110), fc, { size: 22, weight: 600, align: 'right', tex: true });
    headline(ctx, ok ? `For every x > ${fmt(N, 2)}, f(x) > ${fmt(M, 0)}: this N works.` : `Just past N = ${fmt(N, 2)}, f(x) is about ${fmt(N ** 3, 1)}, not above M = ${fmt(M, 0)}: N must be at least ${fmt(Math.cbrt(M), 2)}.`);
    hits = [{ x: ax.X(N), y: ax.box.t + 20, r: 18, name: `N = ${fmt(N, 2)}` }, { x: ax.X(0.3), y: ax.Y(M), r: 14, name: `the height M = ${fmt(M, 0)}` }];
    ro.set(`x\\gt N=${n(N, 2)}\\;\\Rightarrow\\;x^3\\gt N^3=${n(N ** 3, 2)}\\;${ok ? '\\ge' : '\\lt'}\\;M=${n(M, 0)}`);
  });
})();

/* Figures 4.50 and 4.51: the even powers x², x⁴, x⁶ and the odd powers x, x³, x⁵, each curve named. */
function powers(id, ns, yr) {
  const d = sim(id, 420);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 360 }, [-2, 2], yr, { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    hits = [];
    ns.forEach((k, i) => {
      plot(ctx, ax, (x) => x ** k, alpha(fc, 1 - 0.28 * i), { w: 5 - i });
      const xl = 1.25 + 0.17 * i * (k % 2 ? 1 : 1);
      text(ctx, k === 1 ? '$y=x$' : `$y=x^{${k}}$`, ax.X(xl) + 30, ax.Y(Math.min(yr[1] * 0.9, xl ** k)), fc, { size: 20, weight: 600, align: 'left', tex: true, bg: PAL.panel });
      hits.push({ x: ax.X(xl), y: ax.Y(xl ** k), r: 14, name: `y = x^${k}` });
    });
  });
}
powers('fig-even-powers', [2, 4, 6], [-1, 8]);
powers('fig-odd-powers', [1, 3, 5], [-8, 8]);

/* Figure 4.52 made live: f(x) = 5x³ − 3x² + 4 beside its leading term g(x) = 5x³, on a window the reader widens;
   the two curves become one, and the readout gives f/g at the window's edge. Referents f and g. */
(function () {
  const d = sim('sim-leading-term', 470);
  const f = (x) => 5 * x ** 3 - 3 * x * x + 4, g = (x) => 5 * x ** 3;
  const ws = choice(d.controls, { label: 'window', options: [2, 10, 100, 1000].map((v) => ({ value: String(v), label: `|x| ≤ ${v}` })), value: '2', aria: 'window', ms: 1100 });
  const W = () => 10 ** ws.mix((v) => Math.log10(+v));
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const w = W(), ym = Math.max(10, 5 * w ** 3 * 1.1), cf = F.ref('poly-f'), cg = F.ref('lead-g');
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 400 }, [-w, w], [-ym, ym], { xl: 'x', yl: 'y', nx: 4, ny: 4, nice: true });
    plot(ctx, ax, g, cg, { w: 7 });
    plot(ctx, ax, f, cf, { w: 3.5 });
    headline(ctx, `On |x| ≤ ${fmt(w, w < 10 ? 1 : 0)}, f(x) and g(x) = 5x³ ${w > 30 ? 'are one curve to the eye' : 'still differ'}: at x = ${fmt(w, w < 10 ? 1 : 0)}, f/g = ${fmt(f(w) / g(w), 5)}.`);
    text(ctx, '$\\kf(x)$', ax.X(-0.55 * w), ax.Y(f(-0.55 * w)) - 34, cf, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kg(x)$', ax.X(0.55 * w), ax.Y(g(0.55 * w)) + 38, cg, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(-0.55 * w), y: ax.Y(f(-0.55 * w)), r: 16, name: 'f(x) = 5x³ − 3x² + 4' }, { x: ax.X(0.55 * w), y: ax.Y(g(0.55 * w)), r: 16, name: 'g(x) = 5x³' }];
    ro.set(`\\frac{\\kf(x)}{\\kg(x)} = 1-\\frac{3}{5x}+\\frac{4}{5x^3} \\qquad \\frac{\\kf(${n(w, 0)})}{\\kg(${n(w, 0)})} = ${n(f(w) / g(w), 6)}`);
  });
})();

/* Figures 4.53–4.55, Example 4.27. */
graph('fig-rational-equal', { f: (x) => (3 * x - 1) / (2 * x + 5), v: [-2.5], h: [1.5], xr: [-20, 20], yr: [-6, 8], nx: 8, ny: 7, labels: [['$\\kf(x)=\\frac{3x-1}{2x+5}$', 10, 3.6], ['$y=\\frac{3}{2}$', -14, 2.4, 'l']] });
graph('fig-rational-lower', { f: (x) => (3 * x * x + 2 * x) / (4 * x ** 3 - 5 * x + 7), v: [-1.2911], h: [0], xr: [-6, 6], yr: [-3, 3], nx: 6, ny: 6, labels: [['$\\kf(x)=\\frac{3x^2+2x}{4x^3-5x+7}$', 3.4, 1.8]] });
graph('fig-rational-higher', { f: (x) => (3 * x * x + 4 * x) / (x + 2), v: [-2], xr: [-10, 10], yr: [-40, 30], nx: 10, ny: 7, fy: (v) => fmt(v, 0), labels: [['$\\kf(x)=\\frac{3x^2+4x}{x+2}$', 5.5, 24]] });

/* Figure 4.56 made live: (3x² + 4x)/(x + 2) and its oblique asymptote y = 3x − 2 on a window the reader widens;
   the gap f(x) − (3x − 2) = 4/(x + 2) is drawn at the window's right edge and shrinks to nothing. */
(function () {
  const d = sim('sim-oblique-asymptote', 470);
  const f = (x) => (3 * x * x + 4 * x) / (x + 2), g = (x) => 3 * x - 2;
  const ws = choice(d.controls, { label: 'window', options: [10, 30, 100, 1000].map((v) => ({ value: String(v), label: `|x| ≤ ${v}` })), value: '10', aria: 'window', ms: 1100 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const w = 10 ** ws.mix((v) => Math.log10(+v)), fc = C('function'), lc = C('line'), ym = 3 * w + 2;
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 400 }, [-w, w], [-ym, ym], { xl: 'x', yl: 'y', nx: 4, ny: 4, nice: true });
    line(ctx, ax.X(-w), ax.Y(g(-w)), ax.X(w), ax.Y(g(w)), lc, 3, [10, 10]);
    plot(ctx, ax, f, fc, { poles: [-2] });
    const xe = 0.92 * w, gap = f(xe) - g(xe);
    line(ctx, ax.X(xe), ax.Y(g(xe)), ax.X(xe), ax.Y(f(xe)), C('error'), 4);
    headline(ctx, `At x = ${fmt(xe, xe < 10 ? 2 : 0)}, the graph is ${fmt(gap, 4)} above the line y = 3x − 2.`);
    text(ctx, '$y=3x-2$', ax.X(-0.6 * w), ax.Y(g(-0.6 * w)) + 36, lc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x)$', ax.X(0.5 * w), ax.Y(f(0.5 * w)) - 36, fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(xe), y: (ax.Y(g(xe)) + ax.Y(f(xe))) / 2, r: 14, name: `the gap f(x) − (3x − 2) = 4/(x + 2) = ${fmt(gap, 4)}` }];
    ro.set(`\\kf(x)-(3x-2)=\\frac{4}{x+2} \\qquad \\frac{4}{${n(xe, xe < 10 ? 2 : 0)}+2}=${n(gap, 4)}`);
  });
})();

/* Figure 4.57, Example 4.28; Figures 4.58–4.61, the transcendental functions. */
graph('fig-radical', { f: (x) => (3 * x - 2) / Math.sqrt(4 * x * x + 5), h: [1.5, -1.5], xr: [-10, 10], yr: [-2, 2], nx: 10, ny: 4, labels: [['$\\kf(x)=\\frac{3x-2}{\\sqrt{4x^2+5}}$', 4.5, 0.6]] });
graph('fig-sine-ends', { f: Math.sin, xr: [-2 * PI, 2 * PI], yr: [-1.5, 1.5], nx: 4, ny: 6, fx: piX, labels: [['$\\kf(x)=\\sin x$', 3.9, 1.3]] });
graph('fig-tangent-ends', { pieces: [-1, 0, 1].map((k) => ({ f: Math.tan, x: [k * PI - PI / 2 + 1e-3, k * PI + PI / 2 - 1e-3] })), v: [-3 * PI / 2, -PI / 2, PI / 2, 3 * PI / 2], xr: [-2 * PI, 2 * PI], yr: [-6, 6], nx: 4, ny: 6, fx: piX, labels: [['$\\kf(x)=\\tan x$', 0.9, 4.5]] });
graph('fig-exponential-ends', { f: Math.exp, h: [0], xr: [-5, 3], yr: [-1, 15], nx: 8, ny: 4, labels: [['$\\kf(x)=e^x$', 1.2, 9]] });
graph('fig-logarithm-ends', { pieces: [{ f: Math.log, x: [0.005, 10] }], v: [0], xr: [-1, 10], yr: [-5, 3], nx: 11, ny: 8, labels: [['$\\kf(x)=\\ln x$', 6.5, 2.6]] });

/* The four unnumbered graphs of Examples 4.28–4.31, faithful copies drawn live. */
graph('fig-sketch-polynomial', { f: (x) => (x - 1) ** 2 * (x + 2), xr: [-3, 3], yr: [-4, 8], nx: 6, ny: 6,
  points: [{ x: -1, y: 4, name: 'the local maximum (−1, 4)' }, { x: 1, y: 0, name: 'the local minimum (1, 0)' }, { x: 0, y: 2, name: 'the inflection point (0, 2), also the y-intercept' }, { x: -2, y: 0, name: 'the x-intercept (−2, 0)' }],
  labels: [['$\\kf(x)=(x-1)^2(x+2)$', 1.6, 6.5]] });
graph('fig-sketch-rational', { f: (x) => (x * x) / (1 - x * x), v: [-1, 1], h: [-1], xr: [-5, 5], yr: [-6, 6], nx: 10, ny: 6,
  points: [{ x: 0, y: 0, name: 'the local minimum (0, 0)' }], labels: [['$\\kf(x)=\\frac{x^2}{1-x^2}$', 3, 3]] });
graph('fig-sketch-oblique', { f: (x) => (x * x) / (x - 1), v: [1], o: [[1, 1]], xr: [-6, 6], yr: [-10, 12], nx: 6, ny: 11, fy: (v) => fmt(v, 0),
  points: [{ x: 0, y: 0, name: 'the local maximum (0, 0)' }, { x: 2, y: 4, name: 'the local minimum (2, 4)' }], labels: [['$\\kf(x)=\\frac{x^2}{x-1}$', -3.6, 4], ['$y=x+1$', 4.4, 3.3, 'l']] });
graph('fig-sketch-cusp', { f: (x) => Math.cbrt((x - 1) ** 2), xr: [-4, 6], yr: [-1, 4], nx: 10, ny: 5,
  points: [{ x: 1, y: 0, name: 'the cusp (1, 0), a local minimum' }, { x: 0, y: 1, name: 'the y-intercept (0, 1)' }], labels: [['$\\kf(x)=(x-1)^{2/3}$', 3.6, 3.3]] });
};
