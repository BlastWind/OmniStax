/* Figures for section 7.2 Series solutions of linear second-order ODEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, line, text, label, hbracket, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const MINUS = '−';
/* a number for a formula: three significant figures, m × 10^e below 0.01 */
const num = (v) => {
  if (v === 0) return '0';
  const a = Math.abs(v), s = v < 0 ? '-' : '';
  if (a >= 0.01 && a < 1000) return s + String(+a.toPrecision(3));
  const e = Math.floor(Math.log10(a)); let m = a / Math.pow(10, e);
  if (+m.toFixed(2) >= 10) return s + `1.00\\times 10^{${e + 1}}`;
  return s + `${m.toFixed(2)}\\times 10^{${e}}`;
};
const dec = (v, d = 2) => fmt(v, d).replace(MINUS, '-');
/* tick labels of a log10 axis: 10^e, with 1 at e = 0 */
const pow10 = (e) => (e === 0 ? '1' : e === 1 ? '10' : `10^{${String(e).replace('-', MINUS)}}`);
/* The coefficients a_k as bars on a log10 scale over k: a bar rises from the floor to log10|a_k|, hollow where
   a_k < 0, faint beyond the degree kept in the partial sum, and an exact 0 is a small 0 on the axis. */
function bars(ctx, ax, a, keep, color, hits, name) {
  const w = Math.min(26, (ax.X(1) - ax.X(0)) * 0.62), floor = ax.yr[0];
  a.forEach((v, k) => {
    const x = ax.X(k), on = k <= keep;
    if (v === 0) { text(ctx, '0', x, ax.Y(floor) - 12, alpha(color, on ? 1 : 0.4), { size: 17, align: 'center', weight: 600 }); }
    else {
      const top = Math.max(floor + 0.08, Math.min(ax.yr[1], Math.log10(Math.abs(v))));
      const y0 = ax.Y(floor), y1 = ax.Y(top);
      ctx.save(); ctx.globalAlpha *= on ? 1 : 0.28;
      if (v > 0) { ctx.fillStyle = color; ctx.fillRect(x - w / 2, y1, w, y0 - y1); }
      else { ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(x - w / 2 + 1.5, y1 + 1.5, w - 3, y0 - y1 - 3); }
      ctx.restore();
    }
    hits.push({ x, y: ax.Y(floor) - 30, r: 16, name: name(k, v) });
  });
}
/* where |S(x) − Y(x)| < tol, walked out from x = 0 both ways on a grid over [lo, hi] */
function reach(S, Y, lo, hi, tol = 0.1) {
  const h = (hi - lo) / 4000; let L = 0, R = 0;
  while (L - h >= lo - 1e-9 && Math.abs(S(L - h) - Y(L - h)) < tol) L -= h;
  while (R + h <= hi + 1e-9 && Math.abs(S(R + h) - Y(R + h)) < tol) R += h;
  return [L, R];
}
const poly = (c, upto) => (x) => { let s = 0, p = 1; for (let k = 0; k <= upto && k < c.length; k++) { s += c[k] * p; p *= x; } return s; };

/* Sim (Example 7.2.1): the recurrence a_{k+2} = a_k/((k + 2)(k + 1)) of y'' − y = 0 run from the reader's a_0 and
   a_1. Above, the partial sum S_N in series closing on a_0 cosh x + a_1 sinh x in function, the stretch where they
   agree within 0.1 bracketed; below, the coefficients a_0 … a_20 as bars on a log scale, the even ones fed from a_0
   and the odd from a_1, those past degree N faint. Graph x −4 to 4, y −6 to 6; bars 10^−20 to 1 (|a_0|, |a_1| ≤ 1). */
(function () {
  const d = sim('sim-series-solution', 780);
  const A0 = ctl(d.controls, { label: '\\ka_0', cls: 'sequence', key: 'a0', min: -1, max: 1, step: 0.05, value: 1, unit: '', dec: 2, detents: [0, 1] });
  const A1 = ctl(d.controls, { label: '\\ka_1', cls: 'sequence', key: 'a1', min: -1, max: 1, step: 0.05, value: 0, unit: '', dec: 2, detents: [0, 1] });
  const NS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 0, max: 20, step: 1, value: 6, unit: '', dec: 0, aria: 'the highest power N kept in the partial sum' });
  const ro = readout(d);
  const TOP = { l: 200, r: 1240, t: 110, b: 420 }, BAR = { l: 200, r: 1240, t: 500, b: 700 }, K = 20;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const a0 = +A0.v.toFixed(2), a1 = +A1.v.toFixed(2), N = NS.v, fc = C('function'), sc = C('series'), qc = C('sequence');
    const a = [a0, a1]; for (let k = 0; k + 2 <= K; k++) a.push(a[k] / ((k + 2) * (k + 1)));
    const Y = (x) => a0 * Math.cosh(x) + a1 * Math.sinh(x), S = poly(a, N);
    hits = [];
    const ax = axes(ctx, TOP, [-4, 4], [-6, 6], { xl: 'x', yl: 'y', nx: 8, ny: 4 });
    plot(ctx, ax, Y, fc, { w: 6 });
    plot(ctx, ax, S, sc, { w: 4 });
    const [L, R] = reach(S, Y, -4, 4), whole = L <= -4 + 1e-6 && R >= 4 - 1e-6;
    if (R - L > 0.05) hbracket(ctx, ax.X(L), ax.X(R), ax.Y(-5.2), PAL.muted, 'within 0.1', { side: 'above', size: 18 });
    label(ctx, 'y', ax.X(3.3), ax.Y(Math.max(-5.5, Math.min(5.5, Y(3.3)))), { side: 'left', color: fc, size: 22, weight: 600 });
    hits.push(...[-3, -1.5, 1.5, 3].flatMap((x) => [
      { x: ax.X(x), y: ax.Y(Y(x)), r: 14, name: `the solution y = ${dec(a0)} cosh x ${a1 < 0 ? '−' : '+'} ${dec(Math.abs(a1))} sinh x` },
      { x: ax.X(x), y: ax.Y(S(x)), r: 14, name: `the partial sum S_${N}(x), the terms up to x^${N}` }]));
    const bx = axes(ctx, BAR, [-0.5, K + 0.5], [-20, 0], { xl: 'k', yl: '|a_k|', nx: 0, ny: 4, fy: (v) => pow10(Math.round(v)) });
    for (let k = 0; k <= K; k += 2) text(ctx, String(k), bx.X(k), BAR.b + 26, PAL.muted, { size: 17, align: 'center' });
    bars(ctx, bx, a, N, qc, hits, (k, v) => (k < 2 ? `a_${k} = ${num(v).replace('\\times 10^', ' × 10^')}, chosen freely` : `a_${k} = a_${k - 2}/(${k}·${k - 1}) = ${num(v).replace('\\times 10^', ' × 10^')}`));
    /* the headline: which coefficients live, and how far the kept terms reach */
    const which = a0 === 0 && a1 === 0 ? 'every coefficient is 0 and $\\ky = 0$.'
      : a1 === 0 ? 'only the even coefficients are nonzero'
      : a0 === 0 ? 'only the odd coefficients are nonzero'
      : 'the even coefficients come from $\\ka_0$ and the odd from $\\ka_1$';
    const terms = N === 0 ? 'the constant term alone stays' : `the terms up to $x^{${N}}$ stay`;
    const span = whole ? 'across the whole window' : `for $${dec(L)} < x < ${dec(R)}$`;
    headline(ctx, a0 === 0 && a1 === 0 ? `$\\ka_0 = 0$, $\\ka_1 = 0$: ${which}`
      : `$\\ka_0 = ${dec(a0)}$, $\\ka_1 = ${dec(a1)}$: ${which}, and ${terms} within 0.1 of $\\ky$ ${span}.`);
    const sol = `\\ky = ${dec(a0)}\\cosh x ${a1 < 0 ? '-' : '+'} ${dec(Math.abs(a1))}\\sinh x`;
    if (N < 2) ro.set(`\\ka_{k+2} = \\frac{\\ka_k}{(k+2)(k+1)},\\quad \\kS_{${N}}(x) = ${N === 0 ? dec(a0) : `${dec(a0)} ${a1 < 0 ? '-' : '+'} ${dec(Math.abs(a1))}x`},\\quad ${sol}`);
    else ro.set(`\\ka_{${N}} = \\frac{\\ka_{${N - 2}}}{${N} \\cdot ${N - 1}} = \\frac{${num(a[N - 2])}}{${N * (N - 1)}} = ${num(a[N])},\\quad ${sol}`);
  }
  still(d, draw);
})();

/* Figure 7.3: Airy's y'' − xy = 0 near x0 = 0. y1 (a_0 = 1, a_1 = 0) and y2 (a_0 = 0, a_1 = 1) built from the
   recurrence a_{k+2} = a_{k−1}/((k + 2)(k + 1)), each series m nonzero terms long, in series, over the solutions
   themselves in function (the same series to 60 terms, exact to drawing accuracy on the window). The book's window:
   x −5 to 5, y −5 to 7.5. From m = 10 on both partial sums stay within 0.1 of their solutions across it. */
(function () {
  const d = sim('sim-airy', 600);
  const MS = ctl(d.controls, { label: 'terms', cls: '', key: 'm', min: 1, max: 12, step: 1, value: 12, unit: '', dec: 0, aria: 'the number m of nonzero terms in each series', detents: [4] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 110, b: 500 };
  const series = (a0, a1, K) => { const c = [a0, a1, 0]; for (let k = 1; k + 2 <= K; k++) c.push(c[k - 1] / ((k + 2) * (k + 1))); return c; };
  const c1 = series(1, 0, 190), c2 = series(0, 1, 190);
  const Y1 = poly(c1, 180), Y2 = poly(c2, 181);
  /* the denominators of a_{3j} = a_0/(2·3·5·6 ⋯ (3j − 1)(3j)) and a_{3j+1} = a_1/(3·4·6·7 ⋯ (3j)(3j + 1)) */
  const den = (j, off) => { let p = 1; for (let i = 1; i <= j; i++) p *= (3 * i - 1 + off) * (3 * i + off); return p; };
  const frac = (p) => (p < 1e7 ? String(p) : num(p));
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const m = MS.v, fc = C('function'), sc = C('series');
    const k1 = 3 * (m - 1), k2 = k1 + 1, S1 = poly(c1, k1), S2 = poly(c2, k2);
    const ax = axes(ctx, BOX, [-5, 5], [-5, 7.5], { xl: 'x', yl: 'y', nx: 4, ny: 5, fx: (v) => dec(v, 1), fy: (v) => dec(v, 1) });
    plot(ctx, ax, Y1, alpha(fc, 0.55), { w: 7 });
    plot(ctx, ax, Y2, alpha(fc, 0.55), { w: 7 });
    plot(ctx, ax, S1, sc, { w: 3.5 });
    plot(ctx, ax, S2, sc, { w: 3.5 });
    label(ctx, 'y_1', ax.X(-0.6), ax.Y(Y1(-0.6)), { side: 'above', color: fc, size: 24, weight: 600 });
    label(ctx, 'y_2', ax.X(-1.55), ax.Y(Y2(-1.55)), { side: 'below', color: fc, size: 24, weight: 600 });
    /* a legend in the box's top-left corner */
    line(ctx, BOX.l + 24, BOX.t + 28, BOX.l + 64, BOX.t + 28, alpha(fc, 0.55), 7);
    text(ctx, 'solutions', BOX.l + 76, BOX.t + 28, PAL.ink, { size: 18, bg: PAL.panel });
    line(ctx, BOX.l + 24, BOX.t + 60, BOX.l + 64, BOX.t + 60, sc, 3.5);
    text(ctx, 'partial sums', BOX.l + 76, BOX.t + 60, PAL.ink, { size: 18, bg: PAL.panel });
    const [La, Ra] = reach(S1, Y1, -5, 5), [Lb, Rb] = reach(S2, Y2, -5, 5);
    const L = Math.max(La, Lb), R = Math.min(Ra, Rb), whole = L <= -5 + 1e-6 && R >= 5 - 1e-6;
    hbracket(ctx, ax.X(L), ax.X(R), ax.Y(-4.4), PAL.muted, 'both within 0.1', { side: 'above', size: 18 });
    hits = [-4, -2.5, -1, 0.5, 1.8].flatMap((x) => [
      { x: ax.X(x), y: ax.Y(Y1(x)), r: 14, name: 'y₁, the solution with y₁(0) = 1, y₁′(0) = 0' },
      { x: ax.X(x), y: ax.Y(Y2(x)), r: 14, name: 'y₂, the solution with y₂(0) = 0, y₂′(0) = 1' },
      { x: ax.X(x), y: ax.Y(S1(x)), r: 12, name: `y₁'s partial sum, ${m} nonzero term${m > 1 ? 's' : ''}, up to x^${k1}` },
      { x: ax.X(x), y: ax.Y(S2(x)), r: 12, name: `y₂'s partial sum, ${m} nonzero term${m > 1 ? 's' : ''}, up to x^${k2}` }]);
    const each = `With ${m} nonzero term${m > 1 ? 's' : ''} each, both partial sums stay within 0.1 of $\\kyone$ and $\\kytwo$`;
    headline(ctx, whole ? `${each} across the whole window.` : `${each} for $${dec(L)} < x < ${dec(R)}$.`);
    if (m === 1) ro.set('\\kyone \\approx 1,\\quad \\kytwo \\approx x,\\quad \\ka_{k+2} = \\frac{\\ka_{k-1}}{(k+2)(k+1)}');
    else ro.set(`\\ka_{${k1}} = \\frac{\\ka_{${k1 - 3}}}{${k1} \\cdot ${k1 - 1}} = \\frac{\\ka_0}{${frac(den(m - 1, 0))}},\\quad \\ka_{${k2}} = \\frac{\\ka_{${k2 - 3}}}{${k2} \\cdot ${k2 - 1}} = \\frac{\\ka_1}{${frac(den(m - 1, 1))}}`);
  }
  still(d, draw);
})();

/* Sim (Example 7.2.3): Hermite's y'' − 2xy' + 2ny = 0 and a_{k+2} = (2k − 2n)/((k + 2)(k + 1)) a_k, with a_0 = a_1 = 1.
   Left, y1 (the even powers) and y2 (the odd powers) to degree N in series over the full series in function
   (80 terms), x −3 to 3, y −8 to 8; right, a_0 … a_16 as bars on a log scale (10^−8 to 10^2: |a_k| ≤ 8 for n ≤ 8 and
   k ≤ 16, the smallest nonzero 5 × 10^−8), past degree N faint. At a whole n the factor 2k − 2n is 0 at k = n. */
(function () {
  const d = sim('sim-hermite', 600);
  const NS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 0, max: 8, step: 0.05, value: 4, unit: '', dec: 2, aria: 'the order n of Hermite’s equation', detents: [0, 1, 2, 3, 4, 5, 6, 7, 8] });
  const DS = ctl(d.controls, { label: 'degree', cls: '', key: 'N', min: 1, max: 16, step: 1, value: 10, unit: '', dec: 0, aria: 'the highest power N kept in the partial sums' });
  const ro = readout(d);
  const G = { l: 130, r: 690, t: 130, b: 500 }, B = { l: 840, r: 1350, t: 130, b: 500 }, K = 16;
  /* exact fractions for the polynomial at a whole n */
  const gcd = (p, q) => (q ? gcd(q, p % q) : Math.abs(p));
  const polyTex = (n) => {
    const odd = n % 2 === 1; let p = 1, q = 1, out = odd ? 'x' : '1';
    for (let k = odd ? 1 : 0; k + 2 <= n; k += 2) {
      p *= 2 * k - 2 * n; q *= (k + 2) * (k + 1); const g = gcd(p, q); p /= g; q /= g;
      const s = p < 0 ? ' - ' : ' + ', ap = Math.abs(p), pw = `x^{${k + 2}}`;
      out += s + (q === 1 ? (ap === 1 ? '' : String(ap)) : `\\tfrac{${ap}}{${q}}`) + pw;
    }
    return out;
  };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const n = +NS.v.toFixed(2), N = DS.v, fc = C('function'), sc = C('series'), qc = C('sequence');
    const whole = Math.abs(n - Math.round(n)) < 1e-9, ni = Math.round(n);
    const a = [1, 1]; for (let k = 0; k + 2 <= 80; k++) a.push(((2 * k - 2 * n) / ((k + 2) * (k + 1))) * a[k]);
    if (whole) for (let k = ni + 2; k <= 80; k += 2) a[k] = 0;   /* exactly 0 past the stop, not a rounding residue */
    const part = (c, par, upto) => (x) => { let s = 0; for (let k = par; k <= upto; k += 2) s += c[k] * Math.pow(x, k); return s; };
    const Y1 = part(a, 0, 80), Y2 = part(a, 1, 79), S1 = part(a, 0, N), S2 = part(a, 1, N);
    hits = [];
    const ax = axes(ctx, G, [-3, 3], [-8, 8], { xl: 'x', yl: 'y', nx: 6, ny: 4 });
    plot(ctx, ax, Y1, alpha(fc, 0.55), { w: 7 });
    plot(ctx, ax, Y2, alpha(fc, 0.55), { w: 7 });
    plot(ctx, ax, S1, sc, { w: 3.5 });
    plot(ctx, ax, S2, sc, { w: 3.5 });
    label(ctx, 'y_1', ax.X(0), ax.Y(1), { side: 'above', color: fc, size: 24, weight: 600 });
    label(ctx, 'y_2', ax.X(0.3), ax.Y(Y2(0.3)), { side: 'right', color: fc, size: 24, weight: 600 });
    hits.push(...[-2, -1, 1, 2].flatMap((x) => [
      { x: ax.X(x), y: ax.Y(Y1(x)), r: 14, name: 'y₁, the even-power solution with y₁(0) = 1' },
      { x: ax.X(x), y: ax.Y(Y2(x)), r: 14, name: 'y₂, the odd-power solution with y₂′(0) = 1' },
      { x: ax.X(x), y: ax.Y(S1(x)), r: 12, name: `y₁'s partial sum, up to x^${N - (N % 2)}` },
      { x: ax.X(x), y: ax.Y(S2(x)), r: 12, name: `y₂'s partial sum, up to x^${N - 1 + (N % 2)}` }]));
    const bx = axes(ctx, B, [-0.5, K + 0.5], [-8, 2], { xl: 'k', yl: '|a_k|', nx: 0, ny: 5, fy: (v) => pow10(Math.round(v)) });
    for (let k = 0; k <= K; k += 2) text(ctx, String(k), bx.X(k), B.b + 26, PAL.muted, { size: 17, align: 'center' });
    bars(ctx, bx, a.slice(0, K + 1), N, qc, hits, (k, v) => `a_${k} = ${num(v).replace('\\times 10^', ' × 10^')}, in ${k % 2 ? 'y₂' : 'y₁'}`);
    text(ctx, 'even k: y_1     odd k: y_2', (B.l + B.r) / 2, B.t - 24, PAL.muted, { size: 18, align: 'center' });
    const L = 'k+2', rec = `\\ka_{${L}} = \\frac{2k - 2n}{(k+2)(k+1)}\\ka_k`;
    if (whole) {
      const y = ni % 2 ? '\\kytwo' : '\\kyone', other = ni % 2 ? '\\kyone' : '\\kytwo';
      headline(ctx, `$n = ${ni}$: $\\ka_{${ni + 2}} = \\frac{2 \\cdot ${ni} - 2 \\cdot ${ni}}{${ni + 2} \\cdot ${ni + 1}}\\ka_{${ni}} = 0$, so $${y}$ ends at degree ${ni}, while $${other}$ goes on forever.`);
      ro.set(`${rec},\\quad ${y} = ${polyTex(ni)}`, undefined, { form: 'poly' });
    } else {
      const k = Math.floor(n), f = (2 * k - 2 * n) / ((k + 2) * (k + 1));
      headline(ctx, `$n = ${dec(n)}$: no factor $2k - 2n$ is ever 0, so neither $\\kyone$ nor $\\kytwo$ stops.`);
      ro.set(`${rec},\\quad \\ka_{${k + 2}} = \\frac{2 \\cdot ${k} - 2 \\cdot ${dec(n)}}{${k + 2} \\cdot ${k + 1}}\\ka_{${k}} = ${num(f)}\\,\\ka_{${k}}`, undefined, { form: 'series' });
    }
  }
  still(d, draw);
})();
};
