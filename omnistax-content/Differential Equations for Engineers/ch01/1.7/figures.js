/* Figures for section 1.7 Numerical methods: Euler's method. The problem throughout is the book's,
   y′ = y²/3, y(0) = 1, whose solution y = 3/(3 − x) has y(2) = 3 and blows up at x = 3. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.7'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, label, vbracket, headline, register, readout, fmt, hover, slopefield: SF } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
/* a number with its trailing zeros dropped: 1, 0.5, 0.0625 */
const tidy = (v, dec = 4) => fmt(v, dec).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (i) => String(i).split('').map((c) => SUB[+c]).join('');
const f = (x, y) => (y * y) / 3;
const exact = (x) => 3 / (3 - x);
/* A polyline in data units, clipped to the box, its vertices dotted. */
function poly(ctx, ax, pts, color, w, dots = true) {
  if (pts.length < 2) return;
  const { box, X, Y } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)))); ctx.stroke();
  if (dots) pts.forEach(([x, y]) => dot(ctx, X(x), Y(y), color, true, 6));
  ctx.restore();
}

/* Figures 1.16 + 1.17: Euler's method for y′ = y²/3 from (0, 1) on the book's window (x −1 to 3; y 0 to 4 so
   that the gap at x = 2, where the solution is 3, has room), the slope field faint, the solution in function,
   the polyline thin in function with its vertices dotted, and the gap between its last vertex and the solution
   bracketed in error. h runs over the book's halvings (detents at 1, 1/2, 1/4, 1/8, 1/16) and the step count
   up to the steps that reach x = 2; Figure 1.16's two panels are the states 1 step and 2 steps at h = 1,
   Figure 1.17 the second with the solution. Still: the count is the reader's, not a clock. */
(function () {
  const d = sim('sim-euler', 600);
  const BOOK_H = [1, 0.5, 0.25, 0.125, 0.0625];
  const stepsTo2 = (h) => Math.max(0, Math.floor(2 / h + 1e-9));
  const ns = ctl(d.controls, { label: 'steps', cls: '', key: 'n', min: 0, max: 2, step: 1, value: 2, unit: '', dec: 0 });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.0625, max: 1, step: 0.0625, value: 1, unit: '', dec: 4, detents: BOOK_H,
    onInput: () => { const N = stepsTo2(hs.v); ns.range({ min: 0, max: N, step: 1, value: Math.min(ns.v, N), unit: '', dec: 0 }); } });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 110, b: 500 };
  let ax = null, pts = [];
  hover(d.stage, () => (ax ? pts.map(([x, y], i) => ({ x: ax.X(x), y: ax.Y(y), r: 12, name: `(x${sub(i)}, y${sub(i)}) = (${fmt(x, 4)}, ${fmt(y, 4)})` })) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), ec = C('error'), pc = C('point');
    const h = hs.v, m = Math.min(Math.round(ns.v), stepsTo2(h));
    ax = axes(ctx, BOX, [-1, 3], [0, 4], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    SF.field(ctx, ax, f, alpha(dc, 0.45), { n: [24, 16] });
    plot(ctx, ax, exact, fc, { w: 5 });
    pts = SF.euler(ctx, ax, f, [0, 1], h, m, fc, { w: 3, dots: true });
    dot(ctx, ax.X(0), ax.Y(1), pc, true, 10);
    label(ctx, 'y = 3/(3 − x)', ax.X(-0.55), ax.Y(exact(-0.55)), { side: 'above', color: fc, size: 20 });
    const [xe, ye] = pts[pts.length - 1], yt = exact(xe), err = Math.abs(yt - ye);
    if (m > 0) {
      label(ctx, `y${sub(m)}`, ax.X(xe), ax.Y(ye), { side: 'below', color: fc, size: 20 });
      if (err > 0.01) vbracket(ctx, ax.X(xe) + 18, ax.Y(ye), ax.Y(yt), ec, `error ${fmt(err, 4)}`, 1, { size: 20 });
      headline(ctx, `h = ${tidy(h)}, ${m} step${m === 1 ? '' : 's'} to x = ${tidy(xe)}: y${sub(m)} ≈ ${fmt(ye, 4)}, where the solution is ${fmt(yt, 4)}; the error is ${fmt(err, 4)}.`);
      const [xp, yp] = pts[m - 1];
      ro.set(`y_{${m}} = y_{${m - 1}} + h\\,\\kf(x_{${m - 1}}, y_{${m - 1}}) = ${n(yp, 4)} + ${tidy(h)} \\cdot \\frac{${n(yp, 4)}^2}{3} = ${n(ye, 4)}`,
        `$\\text{Error} = \\bigl\\lvert \\ky(${tidy(xe)}) - y_{${m}} \\bigr\\rvert = \\lvert ${n(yt, 4)} - ${n(ye, 4)} \\rvert = ${n(err, 4)}$`);
    } else {
      headline(ctx, `h = ${tidy(h)}: from the initial condition y(0) = 1 the first step follows the slope 1/3 for a run of ${tidy(h)}; add steps to see it.`);
      ro.set(`x_0 = 0,\\quad y_0 = 1,\\quad \\kf(x_0, y_0) = \\frac{1^2}{3} = 0.3333`, `$\\text{Error} = \\lvert \\ky(0) - y_0 \\rvert = 0$`);
    }
  }
  still(d, draw);
})();

/* Sim: the order of a method. y(2) for the same problem by Euler, improved Euler or Runge–Kutta (a choice) at
   h = 2^(−k), k the halvings slider (0 to 7, the book's eight rows of Table 1.1). Left, the chosen method's
   polyline against the solution with the gap at x = 2 bracketed (x 0 to 2.1, y 0 to 4); right, every method's
   error at each halving so far on a logarithmic scale (h on the x-axis, 10^(−10) to 10 on the y), the chosen
   one full with the dashed line of its order through its current point, the others faint and named. Still. */
(function () {
  const d = sim('sim-method-order', 620);
  const step = {
    euler: (x, y, h) => y + h * f(x, y),
    improved: (x, y, h) => { const k1 = f(x, y), k2 = f(x + h, y + k1 * h); return y + ((k1 + k2) / 2) * h; },
    rk: (x, y, h) => { const k1 = f(x, y), k2 = f(x + h / 2, y + (k1 * h) / 2), k3 = f(x + h / 2, y + (k2 * h) / 2), k4 = f(x + h, y + k3 * h); return y + ((k1 + 2 * k2 + 2 * k3 + k4) / 6) * h; },
  };
  const NAME = { euler: 'Euler', improved: 'improved Euler', rk: 'Runge–Kutta' }, ORDER = { euler: 1, improved: 2, rk: 4 }, IDS = ['euler', 'improved', 'rk'];
  const method = choice(d.controls, { label: 'method', key: 'method', value: 'euler', options: IDS.map((v) => ({ value: v, label: NAME[v] })) });
  const ks = ctl(d.controls, { label: 'halvings', cls: '', key: 'k', min: 0, max: 7, step: 1, value: 3, unit: '', dec: 0 });
  const ro = readout(d);
  /* the polyline of a method with step h from (0, 1) to x = 2 */
  const run = (m, h) => { const pts = [[0, 1]]; for (let i = 1; i <= Math.round(2 / h); i++) { const [x, y] = pts[i - 1]; pts.push([i * h, step[m](x, y, h)]); } return pts; };
  const ERR = {}; IDS.forEach((m) => { ERR[m] = []; for (let k = 0; k <= 7; k++) ERR[m].push(Math.abs(3 - run(m, 2 ** -k)[2 ** (k + 1)][1])); });
  const hOf = (k) => (k === 0 ? '1' : `1/${2 ** k}`);
  const sci = (e) => (e >= 0.001 ? fmt(e, 4) : `${(e / 10 ** Math.floor(Math.log10(e))).toFixed(2)} \\times 10^{${Math.floor(Math.log10(e))}}`);
  const BOX_L = { l: 100, r: 640, t: 110, b: 500 }, BOX_R = { l: 850, r: 1340, t: 110, b: 500 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), ec = C('error'), pc = C('point');
    const cur = method.value, k = Math.round(ks.v), h = 2 ** -k, N = 2 ** (k + 1);
    /* left: the chosen method's steps, bending into the next method's as the choice changes */
    const axL = axes(ctx, BOX_L, [0, 2.1], [0, 4], { xl: 'x', yl: 'y', nx: 4, ny: 4, fx: (v) => tidy(v, 2) });
    SF.field(ctx, axL, f, alpha(dc, 0.45), { n: [12, 16] });
    plot(ctx, axL, exact, fc, { w: 5 });
    const ys = method.mix((m) => run(m, h).map((p) => p[1]));
    const pts = ys.map((y, i) => [i * h, y]);
    poly(ctx, axL, pts, fc, 3, N <= 32);
    dot(ctx, axL.X(0), axL.Y(1), pc, true, 10);
    const y2 = run(cur, h)[N][1], err = ERR[cur][k];
    hits = [{ x: axL.X(2), y: axL.Y(y2), r: 14, name: `${NAME[cur]}, h = ${hOf(k)}: y(2) ≈ ${fmt(y2, 4)}` }];
    label(ctx, 'y = 3/(3 − x)', axL.X(0.9), axL.Y(exact(0.9)), { side: 'above', color: fc, size: 20 });
    if (err > 0.01) vbracket(ctx, axL.X(2) + 16, axL.Y(y2), axL.Y(3), ec, `error ${fmt(err, 4)}`, 1, { size: 20 });
    else label(ctx, `y(2) ≈ ${fmt(y2, 4)}`, axL.X(2), axL.Y(y2), { side: 'below', color: fc, size: 20 });
    /* right: the error of every method at each halving so far, on a log scale */
    const axR = axes(ctx, BOX_R, [0, 7], [-10, 1], { xl: 'h', yl: 'error', yc: ec, nx: 7, ny: 11, fx: hOf, fy: (v) => (v === 0 ? '1' : v === 1 ? '10' : `10^{${v}}`) });
    const faint = alpha(PAL.ink, 0.4);
    IDS.forEach((m, j) => {
      const color = method.mixColor((v) => (v === m ? ec : faint));
      const ser = ERR[m].slice(0, k + 1).map((e, i) => [i, Math.log10(e)]);
      if (m === cur) {
        const s = -ORDER[m] * Math.log10(2), y0 = Math.log10(ERR[m][k]) - s * k;
        ctx.save(); ctx.beginPath(); ctx.rect(BOX_R.l, BOX_R.t, BOX_R.r - BOX_R.l, BOX_R.b - BOX_R.t); ctx.clip();
        line(ctx, axR.X(0), axR.Y(y0), axR.X(7), axR.Y(y0 + 7 * s), alpha(ec, 0.6), 2.5, [10, 10]);
        ctx.restore();
      }
      poly(ctx, axR, ser, color, m === cur ? 4 : 2.5, false);
      ser.forEach(([i, ly]) => dot(ctx, axR.X(i), axR.Y(ly), color, true, m === cur ? 8 : 6));
      const [li, ly] = ser[ser.length - 1];
      const side = k <= 1 ? ['above', 'right', 'below'][j] : k >= 5 ? 'left' : 'right';
      label(ctx, NAME[m], axR.X(li), axR.Y(ly), { side, color, size: 20 });
      ser.forEach(([i, ly]) => hits.push({ x: axR.X(i), y: axR.Y(ly), r: 14,
        name: `${NAME[m]}, h = ${hOf(i)}: error ${ERR[m][i] >= 0.001 ? fmt(ERR[m][i], 4) : ERR[m][i].toExponential(2)}${i ? `, ${fmt(ERR[m][i] / ERR[m][i - 1], 3)} of the previous` : ''}` }));
    });
    const ratio = k ? ERR[cur][k] / ERR[cur][k - 1] : null;
    headline(ctx, `${NAME[cur]}, h = ${hOf(k)} (${N} steps): y(2) ≈ ${fmt(y2, 4)}, an error of $${sci(err)}$${ratio === null ? '.' : `, which is ${fmt(ratio, 2)} of the error at h = ${hOf(k - 1)}.`}`);
    const words = { 1: 'A first-order method: as $h$ halves, the ratio approaches $\\tfrac{1}{2}$.', 2: 'A second-order method: as $h$ halves, the ratio approaches $\\tfrac{1}{4}$.', 4: 'A fourth-order method: as $h$ halves, the ratio approaches $\\tfrac{1}{16}$.' }[ORDER[cur]];
    ro.set(ratio === null
      ? `\\text{Error} = \\lvert 3 - ${n(y2, 4)} \\rvert = ${sci(err)}`
      : `\\text{Error} = \\lvert 3 - ${n(y2, 4)} \\rvert = ${sci(err)},\\quad \\frac{\\text{Error}}{\\text{Previous error}} = \\frac{${sci(err)}}{${sci(ERR[cur][k - 1])}} = ${n(ratio, 4)}`,
      words, { form: `${cur}${ratio === null ? 0 : 1}` });
  }
  still(d, draw);
})();
};
