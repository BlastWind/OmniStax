/* Figures for section 10.3 Taylor and Maclaurin Series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, line, dot, text, headline, register, readout, hover, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const f4 = (v, d = 4) => fmt(v, d).replace('−', '-');
const fact = (n) => { let p = 1; for (let k = 2; k <= n; k++) p *= k; return p; };
const BOX = { l: 160, r: 1240, t: 110, b: 470 };

/* pₙ(x) = Σ cₖ(x − a)ᵏ for k ≤ n, its coefficients cₖ = num/den */
const poly = (K, n) => (x) => { let s = 0, p = 1; for (let k = 0; k <= n; k++) { const [u, v] = K.c(k); s += (u / v) * p; p *= x - K.a; } return s; };
const power = (K, k) => { const b = K.a === 0 ? 'x' : `(x${K.a > 0 ? '-' : '+'}${Math.abs(K.a)})`; return k === 0 ? '' : k === 1 ? b : `${b}^{${k}}`; };
function polyTex(K, n) {
  const terms = [];
  for (let k = 0; k <= n; k++) {
    const [u, v] = K.c(k); if (u === 0) continue;
    const mag = Math.abs(u), coef = v === 1 ? (mag === 1 && k > 0 ? '' : `${mag}`) : `\\frac{${mag}}{${v}}`;
    terms.push({ neg: u < 0, s: coef + power(K, k) });
  }
  if (!terms.length) return '0';
  const sign = (t, i) => (i === 0 ? (t.neg ? '-' : '') : t.neg ? '-' : '+') + t.s;
  if (terms.length <= 5) return terms.map(sign).join('');
  return terms.slice(0, 3).map(sign).join('') + '+\\cdots' + sign(terms[terms.length - 1], 1);
}
/* the degrees at which the polynomial changes: 0 and every k with cₖ ≠ 0 */
const degrees = (K, n) => Array.from({ length: n + 1 }, (_, k) => k).filter((k) => k === 0 || K.c(k)[0] !== 0);

function taylorFig(id, K) {
  const d = sim(id, 560);
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: K.n[0], max: K.n[1], step: 1, value: K.n[2], unit: '', dec: 0, aria: 'the degree n of the polynomial', detents: [K.n[2]] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const n = nS.v, serC = C('series'), fnC = C('function');
    const ax = axes(ctx, BOX, K.xr, K.yr, { xl: 'x', yl: 'y', nx: K.nx, ny: K.ny, fx: K.fx, fy: (t) => fmt(t, Number.isInteger(t) ? 0 : 1) });
    const D = degrees(K, n), top = D[D.length - 1], low = D.slice(0, -1).slice(-K.fade);
    hits = [];
    const trace = (g, name) => { for (let i = 0; i <= 24; i++) { const x = K.xr[0] + ((K.xr[1] - K.xr[0]) * i) / 24, y = g(x); if (Number.isFinite(y) && y >= K.yr[0] && y <= K.yr[1]) hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name }); } };
    low.forEach((k, i) => { plot(ctx, ax, poly(K, k), alpha(serC, 0.25 + (0.3 * (i + 1)) / low.length), { w: 3 }); trace(poly(K, k), `p${k}`); });
    plot(ctx, ax, K.f, fnC, { w: 5, x: K.dom });
    const p = poly(K, n);
    plot(ctx, ax, p, serC, { w: 4 });
    trace(K.f, K.fname); trace(p, `p${n}`);
    dot(ctx, ax.X(K.a), ax.Y(K.f(K.a)), C('point'), true, 9);
    text(ctx, `$${K.fTex}$`, ax.X(K.lab[0]), ax.Y(K.lab[1]), fnC, { size: 22, tex: true, bg: PAL.panel });
    const xs = K.at, ps = p(xs), fs = K.f(xs);
    headline(ctx, `$\\kp_{${n}}$ matches $${K.fTex}$ and its first $${n}$ derivatives at $x=${K.a}$; at $x=${K.atTex}$, $\\kp_{${n}}=${f4(ps)}$ against $${f4(fs)}$`);
    ro.set(`\\kp_{${n}}(x)=${polyTex(K, n)}`, top < n ? `The coefficient of $${power(K, n) || '1'}$ is zero, so $\\kp_{${n}}=\\kp_{${top}}.$` : '');
  }
  still(d, draw);
}

/* Figure 10.5: ln x at 1, cₖ = (−1)ᵏ⁺¹/k. x on [0, 3], y on [−3, 2]. */
taylorFig('sim-taylor-ln', { fname: 'ln x', fTex: '\\ln x', f: Math.log, dom: [0.001, 3], a: 1, c: (k) => (k === 0 ? [0, 1] : [k % 2 ? 1 : -1, k]),
  xr: [0, 3], yr: [-3, 2], nx: 6, ny: 5, fx: (t) => fmt(t, Number.isInteger(t) ? 0 : 1), n: [0, 12, 3], fade: 3, lab: [0.25, -2.6], at: 2, atTex: '2' });
/* Figure 10.6: eˣ at 0, cₖ = 1/k!. x on [−3, 3], y on [−2, 8]. */
taylorFig('sim-maclaurin-exp', { fname: 'e^x', fTex: 'e^{x}', f: Math.exp, a: 0, c: (k) => [1, fact(k)],
  xr: [-3, 3], yr: [-2, 8], nx: 6, ny: 5, fx: (t) => fmt(t, 0), n: [0, 10, 3], fade: 3, lab: [1.35, 7], at: 1, atTex: '1' });
/* Figure 10.7: sin x at 0, odd powers. x on [−2π, 2π] ticked in units of π/2, y on [−2, 2]. */
const piTicks = (t) => { const m = Math.round(t / (Math.PI / 2)); return m === 0 ? '0' : `${m < 0 ? '−' : ''}${Math.abs(m) % 2 ? `${Math.abs(m) === 1 ? '' : Math.abs(m)}π/2` : `${Math.abs(m) / 2 === 1 ? '' : Math.abs(m) / 2}π`}`; };
taylorFig('sim-maclaurin-sin', { fname: 'sin x', fTex: '\\sin x', f: Math.sin, a: 0, c: (k) => (k % 2 ? [((k - 1) / 2) % 2 ? -1 : 1, fact(k)] : [0, 1]),
  xr: [-2 * Math.PI, 2 * Math.PI], yr: [-2, 2], nx: 8, ny: 4, fx: piTicks, n: [1, 15, 5], fade: 2, lab: [-6, 1.6], at: 1.5 * Math.PI, atTex: '\\frac{3\\pi}{2}' });
/* Figure 10.8: cos x at 0, even powers. */
taylorFig('sim-maclaurin-cos', { fname: 'cos x', fTex: '\\cos x', f: Math.cos, a: 0, c: (k) => (k % 2 ? [0, 1] : [(k / 2) % 2 ? -1 : 1, fact(k)]),
  xr: [-2 * Math.PI, 2 * Math.PI], yr: [-2, 2], nx: 8, ny: 4, fx: piTicks, n: [0, 14, 4], fade: 2, lab: [-6, 1.6], at: Math.PI, atTex: '\\pi' });

/* Figure 10.9: ∛x at 8 and the remainder at a point x. f⁽ᵏ⁾(x) = (1/3)(1/3 − 1)⋯(1/3 − k + 1)x^(1/3 − k). x on [0, 16], y on [0, 3]. */
(function () {
  const d = sim('sim-taylor-remainder', 560);
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 4, step: 1, value: 2, unit: '', dec: 0, aria: 'the degree n', detents: [1, 2] });
  const xS = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 1, max: 16, step: 0.01, value: 11, unit: '', dec: 2, aria: 'the point x', specials: [{ at: 8 }, { at: 11 }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const a = 8, f = Math.cbrt;
  const dk = (k, x) => { let c = 1; for (let j = 0; j < k; j++) c *= 1 / 3 - j; return c * Math.pow(x, 1 / 3 - k); };
  const p = (n) => (x) => { let s = 0; for (let k = 0; k <= n; k++) s += (dk(k, a) / fact(k)) * Math.pow(x - a, k); return s; };
  function draw() {
    const { ctx } = begin(d.c);
    const n = nS.v, x = xS.v, serC = C('series'), fnC = C('function'), errC = C('error');
    const ax = axes(ctx, BOX, [0, 16], [0, 3], { xl: 'x', yl: 'y', nx: 8, ny: 3 });
    if (n > 1) plot(ctx, ax, p(n - 1), alpha(serC, 0.4), { w: 3 });
    plot(ctx, ax, f, fnC, { w: 5 });
    plot(ctx, ax, p(n), serC, { w: 4 });
    dot(ctx, ax.X(a), ax.Y(2), C('point'), true, 9);
    const fx = f(x), px = p(n)(x), R = fx - px;
    const M = Math.abs(dk(n + 1, Math.min(a, x))), B = (M * Math.pow(Math.abs(x - a), n + 1)) / fact(n + 1);
    const yl = Math.max(0, px - B), yh = Math.min(3, px + B);
    ctx.fillStyle = alpha(errC, 0.18); ctx.fillRect(ax.X(x) - 9, ax.Y(yh), 18, ax.Y(yl) - ax.Y(yh));
    line(ctx, ax.X(x), ax.Y(Math.min(3, Math.max(0, px))), ax.X(x), ax.Y(fx), errC, 6);
    dot(ctx, ax.X(x), ax.Y(fx), fnC, true, 7);
    if (px >= 0 && px <= 3) dot(ctx, ax.X(x), ax.Y(px), serC, true, 7);
    text(ctx, '$\\kf(x)=\\sqrt[3]{x}$', ax.X(13.2), ax.Y(2.62) - 26, fnC, { size: 22, tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(x), y: (ax.Y(fx) + ax.Y(Math.min(3, Math.max(0, px)))) / 2, r: 16, name: `R${n}(x), the remainder` }, { x: ax.X(a), y: ax.Y(2), r: 14, name: 'the center (8, 2)' }];
    headline(ctx, `$\\kp_{${n}}(${f4(x, 2)})=${f4(px, 5)}$ and $\\sqrt[3]{${f4(x, 2)}}=${f4(fx, 5)}$`);
    ro.set(`\\kR_{${n}}(${f4(x, 2)})=\\kf(${f4(x, 2)})-\\kp_{${n}}(${f4(x, 2)})=${f4(R, 5)}`,
      `Taylor’s bound: $|\\kR_{${n}}(${f4(x, 2)})|\\le \\frac{M}{${n + 1}!}|${f4(x, 2)}-8|^{${n + 1}}=${typed('error', f4(B, 5))},$ with $M=|${typed('derivative', `f^{(${n + 1})}`)}(${f4(Math.min(a, x), 2)})|=${f4(M, 6)}.$`);
  }
  still(d, draw);
})();
};
