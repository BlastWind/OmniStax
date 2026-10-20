/* Figures for section 5.1 Sturm–Liouville problems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, label, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Figure 5.1 and Example 5.1.3: y″ + λy = 0, hy(0) − y′(0) = 0, y′(1) = 0. Above, h/x and tan x on the book's
   window (x 0 to 7, y −4 to 4) with the crossings x = √λₙ, the roots of h cos s − s sin s = 0 found by bisection
   in (kπ, kπ + π/2): 0.8603, 3.4256, 6.4373 at h = 1; the third stays under 7 for every h up to 5 (6.9096).
   Below, on 0 ≤ x ≤ 1, the eigenfunction of the chosen crossing. The book's yₙ = cos(√λₙ x) + (h/√λₙ) sin(√λₙ x)
   equals √(1 + h²/λₙ) cos(√λₙ x − φₙ) with tan φₙ = h/√λₙ and √λₙ − φₙ = (n − 1)π, so it is drawn divided by
   √(1 + h²/λₙ): cos(√λₙ x − φₙ), largest value 1 at x = 1 (y range −1.5 to 1.5), and the readout says so.
   The slope h·y(0) at x = 0 and the level slope at x = 1 are short tangents in the derivative's colour. */
(function () {
  const d = sim('sim-robin-eigenvalues', 820);
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.1, max: 5, step: 0.01, value: 1, unit: '', dec: 2, detents: [1] });
  const pick = choice(d.controls, { label: 'n', key: 'n', value: '1', options: [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }] });
  const ro = readout(d);
  const TOP = { l: 170, r: 1290, t: 128, b: 448 }, LOW = { l: 170, r: 1290, t: 530, b: 770 };
  const root = (h, k) => {               /* the root of h cos s − s sin s in (kπ, kπ + π/2) */
    let a = k * Math.PI + 1e-12, b = k * Math.PI + Math.PI / 2 - 1e-12;
    const g = (s) => h * Math.cos(s) - s * Math.sin(s);
    for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (g(a) * g(m) <= 0) b = m; else a = m; }
    return (a + b) / 2;
  };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ec = C('eigenvalue'), dc = C('derivative');
    const h = hs.v, k = +pick.value, S = [0, 1, 2].map((j) => root(h, j)), s = S[k - 1];
    hits = [];
    const up = axes(ctx, TOP, [0, 7], [-4, 4], { xl: 'x', yl: 'y', nx: 7, ny: 8 });
    plot(ctx, up, Math.tan, fc, { w: 4, poles: [Math.PI / 2, (3 * Math.PI) / 2] });
    plot(ctx, up, (x) => h / x, fc, { w: 5, x: [1e-3, 7] });
    const xt = 2.2, xh = 5.4;
    label(ctx, 'tan x', up.X(xt), up.Y(Math.tan(xt)), { side: 'left', color: fc, size: 20 });
    label(ctx, 'h/x', up.X(xh), up.Y(h / xh), { side: 'above', color: fc, size: 20 });
    hits.push({ x: up.X(xt), y: up.Y(Math.tan(xt)), r: 14, name: 'tan x' }, { x: up.X(xh), y: up.Y(h / xh), r: 14, name: `h/x with h = ${fmt(h, 2)}` });
    S.forEach((r, j) => {
      const X = up.X(r), Y = up.Y(h / r), Y0 = up.Y(0), on = j === k - 1;
      line(ctx, X, Y, X, Y0, alpha(ec, 0.8), 2, [4, 8]);
      dot(ctx, X, Y, ec, true, on ? 11 : 8);
      dot(ctx, X, Y0, ec, on, 9);
      label(ctx, `√λ_${j + 1} ≈ ${fmt(r, 2)}`, X, Y0, { side: 'below', color: ec, size: 19, gap: 30 });
      hits.push({ x: X, y: Y, r: 14, name: `h/x = tan x at x = √λ${'₁₂₃'[j]} ≈ ${fmt(r, 4)}, so λ${'₁₂₃'[j]} ≈ ${fmt(r * r, 4)}` });
    });
    /* the eigenfunction of the chosen crossing, drawn at the multiple whose largest value is 1 */
    const B = h / s, amp = Math.sqrt(1 + B * B), phi = Math.atan(B), y = (x) => Math.cos(s * x - phi);
    const lo = axes(ctx, LOW, [0, 1], [-1.5, 1.5], { xl: 'x', yl: `y_${k}`, nx: 5, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    plot(ctx, lo, y, fc, { w: 5 });
    const y0 = y(0), seg = 0.14;
    clip(ctx, lo.box, () => {
      line(ctx, lo.X(0), lo.Y(y0), lo.X(seg), lo.Y(y0 + h * y0 * seg), dc, 4);
      line(ctx, lo.X(1 - seg), lo.Y(y(1)), lo.X(1), lo.Y(y(1)), dc, 4);
    });
    dot(ctx, lo.X(0), lo.Y(y0), fc, true, 8);
    dot(ctx, lo.X(1), lo.Y(y(1)), fc, true, 8);
    const endUp = y(1) > 0;
    label(ctx, 'y′(1) = 0', lo.X(1 - seg / 2), lo.Y(y(1)), { side: endUp ? 'below' : 'above', color: dc, size: 19 });
    label(ctx, `y′(0) = h y(0)`, lo.X(seg / 2), lo.Y(y0 + h * y0 * seg / 2), { side: h * y0 > 6 ? 'right' : 'above', color: dc, size: 19, gap: 26 });
    hits.push({ x: lo.X(seg / 2), y: lo.Y(y0 + (h * y0 * seg) / 2), r: 14, name: `tangent at x = 0, slope y′(0) = h y(0) = ${fmt(h * y0, 2)}` },
      { x: lo.X(1 - seg / 2), y: lo.Y(y(1)), r: 14, name: 'level tangent at x = 1: y′(1) = 0' },
      { x: lo.X(0.5), y: lo.Y(y(0.5)), r: 14, name: `the eigenfunction y${'₁₂₃'[k - 1]}, scaled so its largest value is 1` });
    headline(ctx, `$h = ${n(h)}$: $\\sqrt{\\klambda_1} \\approx ${n(S[0])}$, $\\sqrt{\\klambda_2} \\approx ${n(S[1])}$, $\\sqrt{\\klambda_3} \\approx ${n(S[2])}$, so $\\klambda_1 \\approx ${n(S[0] * S[0])}$ and $\\klambda_2 \\approx ${n(S[1] * S[1])}$.`);
    ro.set(`\\begin{aligned} \\frac{h}{\\sqrt{\\klambda_${k}}} &= \\frac{${n(h)}}{${n(s, 3)}} \\approx ${n(B, 3)} \\approx \\tan ${n(s, 3)} \\\\ \\ky_${k}(x) &= \\cos(${n(s, 3)}\\,x) + ${n(B, 3)}\\sin(${n(s, 3)}\\,x) \\end{aligned}`,
      `Drawn below at ${fmt(1 / amp, 3)} times this, the multiple whose largest value on [0, 1] is 1.`, { form: k });
  }
  still(d, draw);
})();

/* Sim, Example 5.1.4: f(x) = x on 0 < x < π/2 and its two series, the eigenfunction series
   Σ 4(−1)ⁿ⁺¹/(π(2n − 1)²) sin((2n − 1)x) (SymPy: cₙ = 4(−1)ⁿ⁺¹/(π(2n − 1)²)) and the π-periodic sine series
   Σ (−1)ⁿ⁺¹/n sin(2nx), N terms each. Their limits are drawn dashed: the odd 2π-periodic extension (x, then π − x;
   a triangle wave) and the odd π-periodic one (x on (−π/2, π/2), x ∓ π beyond; jumps at ±π/2, where the series
   give the mean 0). Window x −π to π, y −2 to 2 (the sine series' Gibbs peak stays under 1.9). The probe x runs
   in steps of π/100, so the readout's x is exact. */
(function () {
  const d = sim('sim-eigenfunction-series', 640);
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 30, step: 1, value: 3, unit: '', dec: 0 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -1, max: 1, step: 0.01, value: 0.75, unit: 'π', dec: 2, specials: [{ at: 0.5, label: 'π/2' }, { at: -0.5, label: '−π/2' }] });
  const ro = readout(d);
  const BOX = { l: 170, r: 1290, t: 120, b: 540 };
  const PI = Math.PI;
  const S1 = (N) => (x) => { let s = 0; for (let j = 1; j <= N; j++) s += (4 * (j % 2 ? 1 : -1)) / (PI * (2 * j - 1) ** 2) * Math.sin((2 * j - 1) * x); return s; };
  const S2 = (N) => (x) => { let s = 0; for (let j = 1; j <= N; j++) s += ((j % 2 ? 1 : -1) / j) * Math.sin(2 * j * x); return s; };
  const T1 = (x) => (Math.abs(x) <= PI / 2 ? x : Math.sign(x) * PI - x);                     /* odd, 2π-periodic */
  const T2 = (x) => (Math.abs(Math.abs(x) - PI / 2) < 1e-12 ? 0 : Math.abs(x) < PI / 2 ? x : x - Math.sign(x) * PI);   /* odd, π-periodic */
  const piLab = { '-4': '−π', '-2': '−π/2', '0': '0', '2': 'π/2', '4': 'π' };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), c1 = F.ref('sl-series'), c2 = F.ref('sine-series-ref');
    const N = Math.round(Ns.v), u = xs.v, x0 = u * PI, s1 = S1(N), s2 = S2(N);
    const ax = axes(ctx, BOX, [-PI, PI], [-2, 2], { xl: 'x', yl: '', nx: 4, ny: 4, fx: (v) => piLab[String(Math.round((v / PI) * 4))] ?? '' });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fillRect(ax.X(0), BOX.t, ax.X(PI / 2) - ax.X(0), BOX.b - BOX.t); ctx.restore();
    ctx.save(); ctx.setLineDash([10, 10]);
    plot(ctx, ax, T1, alpha(c1, 0.75), { w: 3 });
    plot(ctx, ax, [{ f: T2, x: [-PI, -PI / 2], ends: '-)' }, { f: T2, x: [-PI / 2, PI / 2], ends: '()' }, { f: T2, x: [PI / 2, PI], ends: '(-' }], alpha(c2, 0.75), { w: 3 });
    ctx.restore();
    plot(ctx, ax, s2, c2, { w: 4 });
    plot(ctx, ax, s1, c1, { w: 4 });
    plot(ctx, ax, (x) => x, fc, { w: 6, x: [0, PI / 2] });
    label(ctx, 'f(x) = x', ax.X(1.05), ax.Y(1.05), { side: 'left', color: fc, size: 20 });
    label(ctx, 'eigenfunction series', ax.X(-2.5), ax.Y(T1(-2.5)), { side: 'below', color: c1, size: 19, gap: 30 });
    label(ctx, 'sine series', ax.X(-2.5), ax.Y(T2(-2.5)), { side: 'above', color: c2, size: 19, gap: 30 });
    const a1 = s1(x0), a2 = s2(x0), l1 = T1(x0), l2 = T2(x0);
    line(ctx, ax.X(x0), BOX.t, ax.X(x0), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, ax.X(x0), ax.Y(l1), c1, false, 10);
    dot(ctx, ax.X(x0), ax.Y(l2), c2, false, 10);
    dot(ctx, ax.X(x0), ax.Y(a1), c1, true, 8);
    dot(ctx, ax.X(x0), ax.Y(a2), c2, true, 8);
    hits = [
      { x: ax.X(x0), y: ax.Y(a1), r: 14, name: `eigenfunction series, ${N} terms: ${fmt(a1, 3)}` },
      { x: ax.X(x0), y: ax.Y(a2), r: 14, name: `sine series, ${N} terms: ${fmt(a2, 3)}` },
      { x: ax.X(x0), y: ax.Y(l1), r: 14, name: `the eigenfunction series converges to ${fmt(l1, 3)} here` },
      { x: ax.X(x0), y: ax.Y(l2), r: 14, name: `the sine series converges to ${fmt(l2, 3)} here` },
      ...[-2.2, 2.2].map((x) => ({ x: ax.X(x), y: ax.Y(T1(x)), r: 12, name: 'the odd 2π-periodic extension of x: π − x past π/2' })),
      ...[-2.2, 2.2].map((x) => ({ x: ax.X(x), y: ax.Y(T2(x)), r: 12, name: 'the odd π-periodic extension of x: x − π past π/2' })),
      { x: ax.X(0.8), y: ax.Y(0.8), r: 12, name: 'f(x) = x on 0 < x < π/2' },
    ];
    const xt = `${n(u)}\\pi`, xa = u < 0 ? `(${xt})` : xt;
    headline(ctx, `$N = ${N}$, $x = ${xt}$: the eigenfunction series gives ${fmt(a1, 3)} (its limit ${fmt(l1, 3)}), the sine series ${fmt(a2, 3)} (its limit ${fmt(l2, 3)}).`);
    ro.set(`\\begin{aligned} \\htmlData{ref=sl-series}{\\textstyle\\sum_{n=1}^{${N}} \\frac{4(-1)^{n+1}}{\\pi(2n-1)^2}\\sin\\bigl((2n-1)\\cdot ${xa}\\bigr)} &= ${n(a1, 3)} \\\\ \\htmlData{ref=sine-series-ref}{\\textstyle\\sum_{n=1}^{${N}} \\frac{(-1)^{n+1}}{n}\\sin(2n\\cdot ${xa})} &= ${n(a2, 3)} \\end{aligned}`);
  }
  still(d, draw);
})();
};
