/* Figures for section 10.4 Working with Taylor Series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, line, dot, text, headline, register, readout, hover, angleArc, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const fx = (v, d = 4) => fmt(v, d).replace('−', '-');
const fact = (n) => { let p = 1; for (let k = 2; k <= n; k++) p *= k; return p; };

/* Figure 10.10: the binomial series of (1 + x)^r, its coefficients (r choose k) = r(r − 1)⋯(r − k + 1)/k!.
   x on [−1, 1.5], y on [−1, 4]. */
(function () {
  const d = sim('sim-binomial', 560);
  const rS = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: -3, max: 3, step: 0.25, value: 0.5, unit: '', dec: 2, aria: 'the exponent r', specials: [{ at: 0 }, { at: 1 }, { at: 2 }, { at: 3 }] });
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 0, max: 10, step: 1, value: 3, unit: '', dec: 0, aria: 'the degree n', detents: [3] });
  const ro = readout(d);
  const BOX = { l: 160, r: 1240, t: 110, b: 470 };
  const binom = (r, k) => { let c = 1; for (let j = 0; j < k; j++) c *= (r - j) / (j + 1); return c; };
  function draw() {
    const { ctx } = begin(d.c);
    const r = rS.v, n = nS.v, serC = C('series'), setC = C('set');
    const ax = axes(ctx, BOX, [-1, 1.5], [-1, 4], { xl: 'x', yl: 'y', nx: 5, ny: 5, fx: (t) => fmt(t, Number.isInteger(t) ? 0 : 1) });
    line(ctx, ax.X(-1), ax.Y(0), ax.X(1), ax.Y(0), alpha(setC, 0.85), 8);
    dot(ctx, ax.X(-1), ax.Y(0), setC, false, 9); dot(ctx, ax.X(1), ax.Y(0), setC, false, 9);
    const f = (x) => Math.pow(1 + x, r);
    const p = (x) => { let s = 0; for (let k = 0; k <= n; k++) s += binom(r, k) * Math.pow(x, k); return s; };
    plot(ctx, ax, f, C('function'), { w: 5, x: [-0.999, 1.5] });
    plot(ctx, ax, p, serC, { w: 4 });
    dot(ctx, ax.X(0.5), ax.Y(Math.min(4, p(0.5))), serC, true, 7);
    text(ctx, `$\\kf(x)=(1+x)^{${fx(r, 2)}}$`, ax.X(1.48), ax.Y(3.6), C('function'), { size: 22, tex: true, align: 'right', bg: PAL.panel });
    const terms = [];
    for (let k = 0; k <= n; k++) { const c = binom(r, k); if (Math.abs(c) < 1e-12) continue; const m = Math.abs(c), cs = k > 0 && Math.abs(m - 1) < 1e-12 ? '' : fx(m, 4).replace(/\.?0+$/, ''); terms.push((c < 0 ? '-' : terms.length ? '+' : '') + cs + (k === 0 ? '' : k === 1 ? 'x' : `x^{${k}}`)); }
    const stops = Number.isInteger(r) && r >= 0 && n >= r;
    const dk = Array.from({ length: n + 1 }, (_, j) => r - j).reduce((a, b) => a * b, 1), M = Math.abs(dk) * (r - n - 1 <= 0 ? 1 : Math.pow(1.5, r - n - 1));
    const B = (M * Math.pow(0.5, n + 1)) / fact(n + 1), p5 = p(0.5), f5 = f(0.5);
    headline(ctx, stops ? `$r=${fx(r, 0)}$ is a whole number: the series stops at $x^{${fx(r, 0)}}$ and $\\kp_{${n}}(x)=(1+x)^{${fx(r, 0)}}$` : `$\\kp_{${n}}(0.5)=${fx(p5)}$ against $(1.5)^{${fx(r, 2)}}=${fx(f5)}$`);
    ro.set(`\\kp_{${n}}(x)=${terms.join('') || '0'}`, stops ? '' : `Taylor’s theorem bounds the error at $x=0.5$: $|\\kR_{${n}}(0.5)|\\le\\frac{M}{${n + 1}!}(0.5)^{${n + 1}}=${typed('error', fx(B, 5))}.$`);
  }
  still(d, draw);
})();

/* Airy's equation y″ − xy = 0: the series solution's partial sums beside the solution itself, integrated numerically.
   x on [−8, 3], y on [−3, 6]. */
(function () {
  const d = sim('sim-airy', 560);
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -2, max: 2, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the initial value a = y(0)' });
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -2, max: 2, step: 0.1, value: 0, unit: '', dec: 1, aria: 'the initial slope b = y′(0)' });
  const nS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 40, step: 1, value: 7, unit: '', dec: 0, aria: 'the degree N of the partial sum', detents: [7] });
  const ro = readout(d);
  const BOX = { l: 160, r: 1240, t: 110, b: 470 }, XR = [-8, 3], YR = [-3, 6];
  /* the solution on a grid from 0 outward both ways, RK4 on (y, y′)′ = (y′, xy) */
  const solve = (a, b) => {
    const h = 0.005, out = new Map();
    for (const dir of [1, -1]) {
      let x = 0, y = a, v = b; out.set(0, a);
      const steps = Math.round((dir > 0 ? XR[1] : -XR[0]) / h);
      for (let i = 1; i <= steps; i++) {
        const H = dir * h, k1y = v, k1v = x * y, k2y = v + (H / 2) * k1v, k2v = (x + H / 2) * (y + (H / 2) * k1y), k3y = v + (H / 2) * k2v, k3v = (x + H / 2) * (y + (H / 2) * k2y), k4y = v + H * k3v, k4v = (x + H) * (y + H * k3y);
        y += (H / 6) * (k1y + 2 * k2y + 2 * k3y + k4y); v += (H / 6) * (k1v + 2 * k2v + 2 * k3v + k4v); x += H;
        out.set(Math.round(x / h), y);
      }
    }
    return (x) => out.get(Math.round(x / h)) ?? NaN;
  };
  let key = '', sol = null;
  function draw() {
    const { ctx } = begin(d.c);
    const a = aS.v, b = bS.v, N = nS.v, serC = C('series');
    if (key !== `${a},${b}`) { key = `${a},${b}`; sol = solve(a, b); }
    const c = [a, b, 0]; for (let n = 3; n <= N; n++) c[n] = c[n - 3] / (n * (n - 1));
    const S = (x) => { let s = 0, p = 1; for (let n = 0; n <= N; n++) { s += c[n] * p; p *= x; } return s; };
    const ax = axes(ctx, BOX, XR, YR, { xl: 'x', yl: 'y', nx: 11, ny: 9 });
    plot(ctx, ax, sol, C('function'), { w: 5 });
    plot(ctx, ax, S, serC, { w: 4 });
    dot(ctx, ax.X(0), ax.Y(a), C('point'), true, 8);
    let L = 0, R = 0; const h = 0.005;
    while (L - h >= XR[0] && Math.abs(S(L - h) - sol(L - h)) < 0.01) L -= h;
    while (R + h <= XR[1] && Math.abs(S(R + h) - sol(R + h)) < 0.01) R += h;
    text(ctx, '$\\kyfn$', ax.X(-7.8), ax.Y(5.4), C('function'), { size: 22, tex: true, bg: PAL.panel });
    headline(ctx, `The partial sum of degree $${N}$ stays within $0.01$ of the solution for $${fx(L, 2)}\\le x\\le ${fx(R, 2)}$`);
    ro.set(`\\kyfn\\approx ${fx(a, 1)}\\Big(1+\\frac{x^{3}}{3\\cdot 2}+\\frac{x^{6}}{6\\cdot 5\\cdot 3\\cdot 2}+\\cdots\\Big)+${fx(b, 1)}\\Big(x+\\frac{x^{4}}{4\\cdot 3}+\\frac{x^{7}}{7\\cdot 6\\cdot 4\\cdot 3}+\\cdots\\Big)`,
      `The coefficients satisfy $n(n-1)c_{n}=c_{n-3}$ with $c_{0}=${fx(a, 1)},$ $c_{1}=${fx(b, 1)},$ $c_{2}=0.$`);
  }
  still(d, draw);
})();

/* Figure 10.11: the normal curve with μ = 100, σ = 50, and the area from a to b by the integrated Maclaurin series of e^(−z²/2).
   x on [−50, 250], y on [0, 0.009]. */
(function () {
  const d = sim('sim-normal', 560);
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 200, step: 1, value: 100, unit: '', dec: 0, aria: 'the lower end a', specials: [{ at: 100 }] });
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0, max: 250, step: 1, value: 200, unit: '', dec: 0, aria: 'the upper end b', specials: [{ at: 150 }, { at: 200 }] });
  const nS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 10, step: 1, value: 6, unit: '', dec: 0, aria: 'the number N of terms', detents: [5, 6] });
  const ro = readout(d);
  const BOX = { l: 170, r: 1240, t: 110, b: 470 }, mu = 100, sg = 50;
  const phi = (x) => Math.exp(-((x - mu) ** 2) / (2 * sg * sg)) / (sg * Math.sqrt(2 * Math.PI));
  /* erf to about 1e-7 (Abramowitz and Stegun 7.1.26) for the true area */
  const erf = (x) => { const s = Math.sign(x), t = 1 / (1 + 0.3275911 * Math.abs(x)); return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)); };
  const term = (n, z) => ((n % 2 ? -1 : 1) * Math.pow(z, 2 * n + 1)) / ((2 * n + 1) * Math.pow(2, n) * fact(n));
  function draw() {
    const { ctx } = begin(d.c);
    const lo = Math.min(aS.v, bS.v), hi = Math.max(aS.v, bS.v), N = nS.v, za = (lo - mu) / sg, zb = (hi - mu) / sg;
    const ax = axes(ctx, BOX, [-50, 250], [0, 0.009], { xl: 'x', yl: 'y', nx: 6, ny: 3, fy: (t) => fmt(t, 3) });
    shade(ctx, ax, phi, 0, lo, hi, C('integral'), { alpha: 0.4 });
    plot(ctx, ax, phi, C('function'), { w: 5 });
    line(ctx, ax.X(mu), ax.Y(0), ax.X(mu), ax.Y(phi(mu)), alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, '$μ$', ax.X(mu), BOX.b + 50, PAL.ink, { size: 20, align: 'center', tex: true });
    let est = 0; for (let n = 0; n < N; n++) est += term(n, zb) - term(n, za);
    est /= Math.sqrt(2 * Math.PI);
    const next = (term(N, zb) - term(N, za)) / Math.sqrt(2 * Math.PI), area = (erf(zb / Math.SQRT2) - erf(za / Math.SQRT2)) / 2;
    headline(ctx, `With $${N}$ term${N > 1 ? 's' : ''} the series gives $${fx(est)}$; the area from $${lo}$ to $${hi}$ is $${fx(area)}$`);
    ro.set(`${typed('integral', `\\frac{1}{\\sqrt{2\\pi}}\\int_{${fx(za, 2)}}^{${fx(zb, 2)}}e^{-z^{2}/2}dz`)}\\approx\\frac{1}{\\sqrt{2\\pi}}\\sum_{n=0}^{${N - 1}}\\frac{(-1)^{n}z^{2n+1}}{(2n+1)2^{n}n!}\\Big|_{${fx(za, 2)}}^{${fx(zb, 2)}}=${fx(est)}`,
      `The next term of the series is $${fx(next, 5)}.$`);
  }
  still(d, draw);
})();

/* Figure 10.12: the pendulum at ±θmax and its period against θmax. L = 10 m and g = 9.8 m/s², exercise 249's numbers.
   The exact period through K(k) = π/(2 AGM(1, √(1 − k²))). θmax on [0°, 180°], T on [0, 18] s. */
(function () {
  const d = sim('sim-pendulum', 540);
  const tS = ctl(d.controls, { label: '\\ktheta_{\\text{max}}', cls: 'angle', key: 'theta', min: 5, max: 170, step: 1, value: 30, unit: '°', dec: 0, aria: 'the maximum angle in degrees', detents: [30] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const L = 10, g = 9.8, T0 = 2 * Math.PI * Math.sqrt(L / g);
  const agm = (a, b) => { for (let i = 0; i < 30; i++) { const m = (a + b) / 2; b = Math.sqrt(a * b); a = m; } return a; };
  const exact = (deg) => { const k = Math.sin((deg * Math.PI) / 360); return 4 * Math.sqrt(L / g) * (Math.PI / (2 * agm(1, Math.sqrt(1 - k * k)))); };
  const two = (deg) => { const k = Math.sin((deg * Math.PI) / 360); return T0 * (1 + (k * k) / 4); };
  const G = { l: 700, r: 1320, t: 110, b: 430 };
  function draw() {
    const { ctx } = begin(d.c);
    const deg = tS.v, th = (deg * Math.PI) / 180, angC = C('angle'), serC = C('series'), intC = C('integral');
    /* the scene: a pivot, the rod drawn at equilibrium and at ±θmax, the angle marked */
    const P = { x: 330, y: 285 }, len = 175;
    line(ctx, P.x - 90, P.y, P.x + 90, P.y, PAL.ink, 4);
    line(ctx, P.x, P.y, P.x, P.y + len, alpha(PAL.ink, 0.4), 2, [10, 10]);
    const at = (s) => ({ x: P.x + len * Math.sin(s * th), y: P.y + len * Math.cos(s * th) });
    [-1, 1].forEach((s) => { const q = at(s); line(ctx, P.x, P.y, q.x, q.y, s > 0 ? PAL.ink : alpha(PAL.ink, 0.45), 3); dot(ctx, q.x, q.y, s > 0 ? PAL.ink : alpha(PAL.ink, 0.45), true, 16); });
    dot(ctx, P.x, P.y + len, alpha(PAL.ink, 0.25), true, 16);
    angleArc(ctx, P, 90, -Math.PI / 2, -Math.PI / 2 + th, '', undefined, angC);
    const mid = Math.PI / 2 - th / 2;
    text(ctx, '$\\ktheta_{\\text{max}}$', P.x + 120 * Math.cos(mid) + 6, P.y + 120 * Math.sin(mid), angC, { size: 22, tex: true });
    const q1 = at(1);
    text(ctx, '$L$', (P.x + q1.x) / 2 + 14, (P.y + q1.y) / 2, PAL.ink, { size: 22, tex: true });
    text(ctx, 'equilibrium position', P.x, P.y + len + 36, PAL.muted, { size: 17, align: 'center' });
    hits = [{ x: q1.x, y: q1.y, r: 18, name: 'the bob at θmax' }, { x: at(-1).x, y: at(-1).y, r: 18, name: 'the bob at −θmax' }];
    /* the graph */
    const ax = axes(ctx, G, [0, 180], [0, 18], { xl: 'θmax (degrees)', yl: 'T (seconds)', nx: 6, ny: 6 });
    line(ctx, G.l, ax.Y(T0), G.r, ax.Y(T0), serC, 3, [10, 10]);
    plot(ctx, ax, two, serC, { w: 4, x: [0, 180] });
    plot(ctx, ax, exact, intC, { w: 5, x: [0, 175] });
    const Te = exact(deg), T2 = two(deg);
    line(ctx, ax.X(deg), G.t, ax.X(deg), G.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, ax.X(deg), ax.Y(Te), intC, true, 8); dot(ctx, ax.X(deg), ax.Y(T2), serC, true, 8);
    text(ctx, 'one term', ax.X(6), ax.Y(T0) + 20, serC, { size: 17, align: 'left', bg: PAL.panel });
    text(ctx, 'two terms', ax.X(150), ax.Y(two(150)) + 24, serC, { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, 'exact', ax.X(150), ax.Y(exact(150)) - 24, intC, { size: 17, align: 'center', bg: PAL.panel });
    headline(ctx, `$\\ktheta_{\\text{max}}=${deg}°$: the period is $${fx(Te, 3)}$ s; two terms give $${fx(T2, 3)}$ s and one term $${fx(T0, 3)}$ s`);
    const k = Math.sin(th / 2);
    ro.set(`T\\approx 2\\pi\\sqrt{\\frac{L}{g}}\\Big(1+\\frac{k^{2}}{4}\\Big)=${fx(T0, 3)}\\Big(1+\\frac{${fx(k * k, 4)}}{4}\\Big)=${fx(T2, 3)}\\ \\text{s}`,
      `With $k=\\sin\\frac{\\ktheta_{\\text{max}}}{2}=${fx(k, 4)},$ $L=10$ m and $g=9.8$ m/s², the $${typed('integral', '\\text{elliptic integral}')}$ gives $T=${fx(Te, 3)}$ s.`);
  }
  still(d, draw);
})();
};
