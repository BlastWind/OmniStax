/* Figures for section 1.4 Inverse Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, fmt, hover, partial, mixColor } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
/* a number with at most dec decimals, trailing zeros dropped; tn sets it inside TeX */
const num = (v, dec = 2) => fmt(v, dec).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const tn = (v, dec = 2) => num(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const PI = Math.PI;
const ellipse = (ctx, x, y, rx, ry, color, w = 3) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); };
/* how far a figure's curves have arrived, as plot() reckons it */
const grown = (d) => Math.max(0, Math.min(1, (F.arrival(d) - 0.3) / 0.7));
/* a polyline of graph points [x, y] on the axes, clipped to the box, drawn up to the fraction k of its length */
const path = (ctx, ax, pts, color, { w = 5, dash, k = 1 } = {}) => {
  const px = pts.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y)).map(([x, y]) => [ax.X(x), ax.Y(Math.max(-1e3, Math.min(1e3, y)))]);
  const run = k < 1 ? partial(px, k) : px;
  if (run.length < 2) return;
  const { box } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l - 6, box.t - 6, box.r - box.l + 12, box.b - box.t + 12); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); run.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
};
/* a monotone piece of y = f(x) on [a, b], sampled evenly in x and, through its inverse, evenly in y, so steep parts stay smooth */
const sample = (f, inv, a, b, n = 160) => {
  const xs = Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
  const ya = f(a), yb = f(b), ys = Number.isFinite(ya) && Number.isFinite(yb) ? Array.from({ length: n + 1 }, (_, i) => inv(ya + ((yb - ya) * i) / n)) : [];
  return [...xs, ...ys].filter((x) => x >= Math.min(a, b) && x <= Math.max(a, b)).sort((p, q) => p - q).map((x) => [x, f(x)]);
};
const swap = (pts) => pts.map(([x, y]) => [y, x]);
const blend = (pts, s) => pts.map(([x, y]) => [x + (y - x) * s, y + (x - y) * s]);
const BOXSQ = { l: 470, r: 930, t: 110, b: 570 };
const lineYX = (ctx, ax) => { const [lo, hi] = ax.xr; line(ctx, ax.X(lo), ax.Y(lo), ax.X(hi), ax.Y(hi), C('line'), 3, [10, 10]); };
/* the mirror segment from a point to its image in y = x */
const mirrorPair = (ctx, ax, p, q) => line(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(q[0]), ax.Y(q[1]), alpha(PAL.ink, 0.45), 2.5, [4, 8]);

/* Figure 1.37: the two bubbles of f and f⁻¹ with a live number, and x², whose way back forks. */
(function () {
  const d = sim('sim-inverse-map', 460);
  const pick = choice(d.controls, { label: '', options: [{ value: 'cube', label: 'f(x) = x³ + 4' }, { value: 'sq', label: 'f(x) = x²' }], value: 'cube', aria: 'which function' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2, max: 2, step: 0.01, value: 1, unit: '', dec: 2 });
  const ro = readout(d);
  const LX = 330, RX = 1070, CY = 250;
  const arc = (ctx, x1, y1, x2, y2, bow, color, w, dash) => {
    const qx = (x1 + x2) / 2, qy = (y1 + y2) / 2 + bow;
    const pts = Array.from({ length: 41 }, (_, i) => { const t = i / 40, u = 1 - t; return [u * u * x1 + 2 * u * t * qx + t * t * x2, u * u * y1 + 2 * u * t * qy + t * t * y2]; });
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
    const [p, r] = pts.slice(-3); arrow(ctx, p[0], p[1], r[0], r[1], color, w);
  };
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('set'), cf = F.ref('map-f'), ci = F.ref('map-finv'), x = xs.v, sq = pick.value === 'sq';
    const y = sq ? x * x : x ** 3 + 4, two = sq && Math.abs(x) > 1e-9;
    headline(ctx, !sq ? `$\\kf$ sends ${num(x)} to ${num(y)}, and $\\kfinv$ sends ${num(y)} back to ${num(x)}.`
      : two ? `$\\kf$ sends both ${num(x)} and ${num(-x)} to ${num(y)}: the way back has two ends, so no inverse function.` : `$\\kf$ sends 0 to 0, and only 0 goes there; every other output comes from two inputs.`);
    ellipse(ctx, LX, CY, 150, 120, sc); ellipse(ctx, RX, CY, 150, 120, sc);
    const name = (s, px, py) => text(ctx, s, px, py, sc, { size: 22, weight: 600, align: 'center', tex: true });
    name('domain of $\\kf$', LX, 104); name('range of $\\kfinv$', LX, 400);
    name('range of $\\kf$', RX, 104); name('domain of $\\kfinv$', RX, 400);
    const slots = pick.mix((v) => (v === 'sq' ? [200, 300] : [250, 250]));
    text(ctx, `$y = ${tn(y)}$`, RX, CY, PAL.ink, { size: 24, align: 'center', tex: true });
    text(ctx, `$x = ${tn(x)}$`, LX, slots[0], PAL.ink, { size: 24, align: 'center', tex: true });
    pick.only(ctx, 'sq', () => text(ctx, `$x = ${tn(-x)}$`, LX, slots[1], PAL.ink, { size: 24, align: 'center', tex: true }), [0, 0]);
    /* with two inputs, the arcs at the upper input stay above those at the lower one at both ends, so none cross */
    const [fu, fl, iu, il] = pick.mix((v) => (v === 'sq' ? [-8, 24, -24, 8] : [14, 14, -14, -14]));
    arc(ctx, LX + 90, slots[0] + 12, RX - 90, CY + fu, pick.mix((v) => (v === 'sq' ? 20 : 70)), cf, 4);
    pick.only(ctx, 'sq', () => arc(ctx, LX + 90, slots[1] + 12, RX - 90, CY + fl, 30, cf, 4), [0, 0]);
    pick.only(ctx, 'cube', () => arc(ctx, RX - 90, CY + iu, LX + 90, slots[0] - 14, -70, ci, 4), [0, 0]);
    pick.only(ctx, 'sq', () => { arc(ctx, RX - 90, CY + iu, LX + 90, slots[0] - 12, -60, alpha(ci, 0.6), 3, [10, 10]); arc(ctx, RX - 90, CY + il, LX + 90, slots[1] - 12, -20, alpha(ci, 0.6), 3, [10, 10]); }, [0, 0]);
    text(ctx, '$\\kf$', (LX + RX) / 2, CY + 98, cf, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    pick.only(ctx, 'cube', () => text(ctx, '$\\kfinv$', (LX + RX) / 2, CY - 104, ci, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel }), [0, 0]);
    pick.only(ctx, 'sq', () => text(ctx, '$x = \\pm\\sqrt{y}$', (LX + RX) / 2, CY - 96, ci, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel }), [0, 0]);
    ro.set(!sq ? `\\kfinv(\\kf(${tn(x)})) = \\sqrt[3]{${tn(y, 4)} - 4} = ${tn(x)}` : `y = ${tn(y, 4)}:\\quad x = \\pm\\sqrt{${tn(y, 4)}} = \\pm ${tn(Math.abs(x))}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* The horizontal line test, for Figure 1.38 and Examples 1.28 and 1.31: a point dragged along the graph
   carries the horizontal line through it, and every other input with its output is marked on the line. */
function horizontal(id, H, BOX, xr, yr, ticks, cases) {
  const d = sim(id, H), keys = Object.keys(cases), first = cases[keys[0]];
  const pick = choice(d.controls, {
    label: '', options: keys.map((k) => ({ value: k, label: cases[k].label })), value: keys[0], aria: 'which function',
    onInput: (v) => xs.range({ min: cases[v].x[0], max: cases[v].x[1], step: 0.01, value: Math.min(cases[v].x[1], Math.max(cases[v].x[0], xs.v)), dec: 2 }),
  });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: first.x[0], max: first.x[1], step: 0.01, value: first.value, unit: '', dec: 2 });
  const f = (x) => cases[pick.value].f(x);
  const P = drag(d, { x: xs, y: f });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point'), c = cases[pick.value], x = xs.v, y = f(x);
    const ax = axes(ctx, BOX, xr, yr, { xl: 'x', yl: 'y', nx: ticks[0], ny: ticks[1] });
    [...new Set([pick.from, pick.value])].forEach((v) => pick.only(ctx, v, () => {
      if (cases[v].ghost) plot(ctx, ax, cases[v].ghost, alpha(PAL.ink, 0.25), { w: 3 });
      plot(ctx, ax, cases[v].pieces ?? cases[v].f, fc, cases[v].opts);
    }, [0, 0]));
    if (!Number.isFinite(y)) { headline(ctx, `$x = ${tn(x)}$ is not in the domain of $\\kf$.`); ro.set(`\\kf(${tn(x)})\\ \\text{is not defined}`); return; }
    line(ctx, BOX.l, ax.Y(y), BOX.r, ax.Y(y), lc, 3);
    const same = c.same(x);
    if (same.seg) line(ctx, ax.X(same.seg[0]), ax.Y(y), ax.X(same.seg[1]), ax.Y(y), alpha(pc, 0.45), 14);
    (same.xs ?? []).filter((u) => Math.abs(u - x) > 1e-9).forEach((u) => { drop(ctx, ax.X(u), ax.Y(y), ax.X(u), ax.Y(0)); dot(ctx, ax.X(u), ax.Y(y), pc, true, 10); });
    drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0));
    P.draw(ctx, ax, pc);
    const others = (same.xs ?? []).filter((u) => Math.abs(u - x) > 1e-9);
    headline(ctx, same.seg ? `The line $y = ${tn(y)}$ lies along a whole step of the graph.` : others.length ? `The line $y = ${tn(y)}$ meets the graph twice.` : `The line $y = ${tn(y)}$ meets the graph once.`);
    ro.set(same.seg ? `\\kf(x) = ${tn(y)}\\ \\text{for every}\\ x\\ \\text{in}\\ ${typed('set', `[${tn(same.seg[0])}, ${tn(same.seg[1])})`)}`
      : others.length ? `\\kf(${tn(x)}) = ${tn(y)} = \\kf(${tn(others[0])})` : `\\kf(${tn(x)}) = ${tn(y)},\\ \\text{and no other input gives}\\ ${tn(y)}`, undefined, { form: same.seg ? 'seg' : others.length ? 2 : 1 });
  }
  still(d, draw);
}

/* Figure 1.38 on the book's −3 to 3 by −3 to 4. */
horizontal('sim-horizontal-line', 520, { l: 330, r: 1070, t: 90, b: 460 }, [-3, 3], [-3, 4], [6, 7], {
  a: { label: '(a) f(x) = x²', f: (x) => x * x, x: [-3, 3], value: 1.5, same: (x) => ({ xs: [x, -x] }) },
  b: { label: '(b) f(x) = x³', f: (x) => x ** 3, x: [-3, 3], value: 1.2, same: (x) => ({ xs: [x] }) },
});

/* Example 1.28: the step function on [0, 10) and 1/x, each on the book's axes. */
horizontal('sim-one-to-one-example', 540, { l: 300, r: 1100, t: 90, b: 480 }, [-3, 11], [-3, 11], [14, 14], {
  a: { label: '(a) the step function', f: (x) => (x >= 0 && x < 10 ? Math.floor(x) : NaN), pieces: Array.from({ length: 10 }, (_, k) => ({ f: () => k, x: [k, k + 1], ends: '[)' })), x: [0, 9.99], value: 3.5, same: (x) => ({ seg: [Math.floor(x), Math.floor(x) + 1] }) },
  b: { label: '(b) f(x) = 1/x', f: (x) => (x === 0 ? NaN : 1 / x), opts: { poles: [0] }, x: [-3, 11], value: 1, same: (x) => ({ xs: [x] }) },
});

/* Example 1.31: (x + 1)² and the same on [−1, ∞), on the book's −6 to 6 by −2 to 10. */
(function () {
  const f = (x) => (x + 1) ** 2;
  horizontal('sim-restrict-example', 540, { l: 300, r: 1100, t: 90, b: 480 }, [-6, 6], [-2, 10], [12, 12], {
    a: { label: '(a) f(x) = (x + 1)²', f, x: [-6, 6], value: 1, same: (x) => ({ xs: [x, -2 - x] }) },
    b: { label: '(b) on [−1, ∞)', f: (x) => (x >= -1 ? f(x) : NaN), pieces: [{ f, x: [-1, 6], ends: '[-' }], ghost: [{ f, x: [-6, -1] }], x: [-1, 6], value: 1, same: (x) => ({ xs: [x] }) },
  });
})();

/* Example 1.29: the strategy's two steps on f(x) = 3x − 4. Square axes −5 to 7, so y = x is at 45°. */
(function () {
  const d = sim('sim-inverse-steps', 640);
  const f = (x) => 3 * x - 4;
  const stage = choice(d.controls, { label: '', options: [{ value: 'f', label: 'y = f(x)' }, { value: 's1', label: 'step 1' }, { value: 's2', label: 'step 2' }], value: 'f', aria: 'which step' });
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 3.5, step: 0.01, value: 3, unit: '', dec: 2 });
  const P = drag(d, { x: a, y: f });
  const ro = readout(d);
  const LINE = [[-1, -7], [4, 8]];
  function draw() {
    const { ctx } = begin(d.c);
    const cf = F.ref('steps-f'), ci = F.ref('steps-finv'), pc = C('point'), k = grown(d), v = stage.value;
    const ax = axes(ctx, BOXSQ, [-5, 7], [-5, 7], { xl: 'x', yl: 'y', nx: 12, ny: 12 });
    lineYX(ctx, ax);
    const s = stage.mix((u) => (u === 's2' ? 1 : 0)), av = a.v, fa = f(av);
    path(ctx, ax, LINE, cf, { k });
    if (s > 0) path(ctx, ax, blend(LINE, s), mixColor(cf, ci, s));
    const ink = alpha(PAL.ink, 0.65), X = ax.X, Y = ax.Y;
    stage.only(ctx, 'f', () => { arrow(ctx, X(av), Y(0), X(av), Y(fa) + 12, ink, 3); arrow(ctx, X(av) - 4, Y(fa), X(0) + 12, Y(fa), ink, 3); }, [0, 0]);
    stage.only(ctx, 's1', () => { arrow(ctx, X(0), Y(fa), X(av) - 12, Y(fa), ink, 3); arrow(ctx, X(av), Y(fa) + 4, X(av), Y(0) - 12, ink, 3); }, [0, 0]);
    stage.only(ctx, 's2', () => { arrow(ctx, X(fa), Y(0), X(fa), Y(av) + 12 * Math.sign(av || 1), ink, 3); arrow(ctx, X(fa) - 4 * Math.sign(fa || 1), Y(av), X(0) + 12 * Math.sign(fa || 1), Y(av), ink, 3); }, [0, 0]);
    P.draw(ctx, ax, pc);
    if (s > 0) { const q = [fa + (av - fa) * (1 - s), av + (fa - av) * (1 - s)]; mirrorPair(ctx, ax, [av, fa], q); dot(ctx, X(q[0]), Y(q[1]), pc, true, 9); }
    const tag = (s2, px, py, color, align = 'left') => text(ctx, s2, X(px), Y(py), color, { size: 22, weight: 600, align, tex: true, bg: PAL.panel });
    stage.only(ctx, 'f', () => tag('$y = 3x - 4$', 3.3, 6.6, cf, 'right'), [0, 0]);
    stage.only(ctx, 's1', () => tag('$x = \\frac{1}{3}y + \\frac{4}{3}$', 3.3, 6.6, cf, 'right'), [0, 0]);
    stage.only(ctx, 's2', () => { tag('$y = 3x - 4$', 3.3, 6.6, cf, 'right'); tag('$y = \\frac{1}{3}x + \\frac{4}{3}$', 4.2, 2.1, ci); }, [0, 0]);
    text(ctx, '$y = x$', X(-4.5) + 16, Y(-4.5) + 4, C('line'), { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    headline(ctx, v === 'f' ? `$\\kf$ sends ${num(av)} to ${num(fa)}.` : v === 's1' ? `Step 1: the same line, read from $y = ${tn(fa)}$ back to $x = ${tn(av)}$.`
      : `Step 2: $x$ and $y$ interchanged, the line folds over $y = x$, and $\\kfinv$ sends ${num(fa)} to ${num(av)}.`);
    ro.set(v === 'f' ? `\\kf(${tn(av)}) = 3(${tn(av)}) - 4 = ${tn(fa)}` : v === 's1' ? `x = \\tfrac{1}{3}(${tn(fa)}) + \\tfrac{4}{3} = ${tn(av)}` : `\\kfinv(${tn(fa)}) = \\tfrac{1}{3}(${tn(fa)}) + \\tfrac{4}{3} = ${tn(av)}`, undefined, { form: v });
  }
  still(d, draw);
})();

/* The reflection about y = x, for Figure 1.39 and Example 1.30: a point dragged along f and, with (b) chosen,
   a copy of f folding over the line into f⁻¹ with the point's mirror image. Square axes. */
function mirror(id, o) {
  const d = sim(id, 640);
  const pick = choice(d.controls, { label: '', options: [{ value: 'a', label: o.labels[0] }, { value: 'b', label: o.labels[1] }], value: 'a', aria: 'what is drawn' });
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: o.a[0], max: o.a[1], step: 0.01, value: o.a[2], unit: '', dec: 2, specials: o.special === undefined ? undefined : [{ at: o.special }] });
  const P = drag(d, { x: a, y: o.f });
  const ro = readout(d);
  const pts = sample(o.f, o.finv, o.span[0], o.span[1]);
  function draw() {
    const { ctx } = begin(d.c);
    const cf = F.ref(o.refs[0]), ci = F.ref(o.refs[1]), pc = C('point'), sc = C('set'), k = grown(d);
    const ax = axes(ctx, BOXSQ, o.range, o.range, { xl: 'x', yl: 'y', nx: o.ticks, ny: o.ticks });
    const s = pick.mix((v) => (v === 'b' ? 1 : 0)), av = a.v, bv = o.f(av);
    if (o.bands) {
      const [lo, hi] = o.range, cut = (u) => Math.min(hi, Math.max(lo, u));
      [[[o.bands.dom[0], 0], [cut(o.bands.dom[1]), 0]], [[0, o.bands.ran[0]], [0, cut(o.bands.ran[1])]]].forEach((seg) => {
        const [p, q] = blend(seg, s);
        line(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(q[0]), ax.Y(q[1]), alpha(sc, 0.35), 12);
        dot(ctx, ax.X(p[0]), ax.Y(p[1]), sc, true, 8);
      });
    }
    lineYX(ctx, ax);
    path(ctx, ax, pts, cf, { k });
    if (o.closed) dot(ctx, ax.X(pts[0][0]), ax.Y(pts[0][1]), cf, true, 8);
    if (s > 0) {
      const cc = mixColor(cf, ci, s), img = blend(pts, s);
      path(ctx, ax, img, cc);
      if (o.closed) dot(ctx, ax.X(img[0][0]), ax.Y(img[0][1]), cc, true, 8);
      const q = [av + (bv - av) * s, bv + (av - bv) * s];
      mirrorPair(ctx, ax, [av, bv], q); dot(ctx, ax.X(q[0]), ax.Y(q[1]), pc, true, 9);
      if (s > 0.6) label(ctx, '(b, a)', ax.X(q[0]), ax.Y(q[1]), { side: o.sideB, size: 20, gap: 26 });
    }
    const p = P.draw(ctx, ax, pc);
    if (p) label(ctx, '(a, b)', p.x, p.y, { side: o.sideA, size: 20, gap: 26 });
    const lo = o.range[0] + 0.45;
    text(ctx, '$y = x$', ax.X(lo) + 16, ax.Y(lo) + 4, C('line'), { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$y = \\kf(x)$', ax.X(o.nameF[0]), ax.Y(o.nameF[1]), cf, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    pick.only(ctx, 'b', () => text(ctx, '$y = \\kfinv(x)$', ax.X(o.nameInv[0]), ax.Y(o.nameInv[1]), ci, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel }), [0, 0]);
    const b = pick.value === 'b';
    headline(ctx, o.headline(b, av, bv));
    ro.set(o.readout(b, av, bv), undefined, { form: pick.value });
  }
  still(d, draw);
}

/* Figure 1.39: the book's f has no formula; y = e^{x/2}, always above y = x as drawn, stands in for it. Axes −2 to 5. */
mirror('sim-inverse-graph', {
  f: (x) => Math.exp(x / 2), finv: (y) => 2 * Math.log(y), span: [-2, 2 * Math.log(5)], range: [-2, 5], ticks: 7,
  refs: ['graph-f', 'graph-finv'], labels: ['(a) f', '(b) f and f⁻¹'], a: [-2, 3.2, 1.5], sideA: 'left', sideB: 'right',
  nameF: [3.3, 4.6], nameInv: [3.0, 0.9],
  headline: (b, a, v) => (b ? `$(b, a) = (${tn(v)}, ${tn(a)})$ is on the graph of $\\kfinv$, the mirror image of $(a, b)$ in $y = x$.` : `$(a, b) = (${tn(a)}, ${tn(v)})$ is on the graph of $\\kf$.`),
  readout: (b, a, v) => (b ? `\\kf(${tn(a)}) = ${tn(v)} \\iff \\kfinv(${tn(v)}) = ${tn(a)}` : `b = \\kf(${tn(a)}) = ${tn(v)}`),
});

/* Example 1.30: f(x) = √(x + 2) from its closed end (−2, 0), with its domain and range along the axes. Axes −3 to 3. */
mirror('sim-sketch-inverse', {
  f: (x) => (x >= -2 ? Math.sqrt(x + 2) : NaN), finv: (y) => y * y - 2, span: [-2, 3], range: [-3, 3], ticks: 6, closed: true,
  bands: { dom: [-2, Infinity], ran: [0, Infinity] },
  refs: ['root-f', 'root-finv'], labels: ['(a) f', '(b) f and f⁻¹'], a: [-2, 3, -1], special: -2, sideA: 'above', sideB: 'right',
  nameF: [0.6, 2.55], nameInv: [1.1, -1.7],
  headline: (b, a, v) => (b ? `Domain of $\\kfinv$: $${typed('set', '[0, \\infty)')}$, range $${typed('set', '[-2, \\infty)')}$, the range and domain of $\\kf$.` : `Domain of $\\kf$: $${typed('set', '[-2, \\infty)')}$, range $${typed('set', '[0, \\infty)')}$.`),
  readout: (b, a, v) => (b ? `\\kfinv(${tn(v, 4)}) = (${tn(v, 4)})^{2} - 2 = ${tn(a)}` : `\\kf(${tn(a)}) = \\sqrt{${tn(a)} + 2} = ${tn(v, 4)}`),
});

/* Figure 1.40: g = x² on [0, ∞) and h = x² on (−∞, 0], each with its inverse; the half left out is faint.
   The book's −2 to 5 square. */
(function () {
  const d = sim('sim-restricted', 640);
  const R = Math.sqrt(5), SPEC = { g: { lo: 0, hi: 2.2, v: 1.5 }, h: { lo: -2.2, hi: 0, v: -1.5 } };
  const pick = choice(d.controls, {
    label: '', options: [{ value: 'g', label: '(a) g on [0, ∞)' }, { value: 'h', label: '(b) h on (−∞, 0]' }], value: 'g', aria: 'which restriction',
    onInput: (v) => a.range({ min: SPEC[v].lo, max: SPEC[v].hi, step: 0.01, value: -a.v, dec: 2 }),
  });
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 2.2, step: 0.01, value: 1.5, unit: '', dec: 2 });
  const P = drag(d, { x: a, y: (x) => x * x });
  const ro = readout(d);
  const half = (sg) => Array.from({ length: 121 }, (_, i) => { const u = (R * i) / 120; return [sg * u, u * u]; });
  function draw() {
    const { ctx } = begin(d.c);
    const g = pick.value === 'g', pc = C('point'), k = grown(d);
    const cf = pick.mixColor((v) => F.ref(v === 'g' ? 'sq-g' : 'sq-h')), ci = pick.mixColor((v) => F.ref(v === 'g' ? 'sq-g-inv' : 'sq-h-inv'));
    const ax = axes(ctx, BOXSQ, [-2, 5], [-2, 5], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    const sg = pick.mix((v) => (v === 'g' ? 1 : -1));
    path(ctx, ax, half(-sg), alpha(PAL.ink, 0.25), { w: 3, k });
    lineYX(ctx, ax);
    text(ctx, '$y = x$', ax.X(-1.55) + 16, ax.Y(-1.55) + 4, C('line'), { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    const kept = half(sg);
    path(ctx, ax, kept, cf, { k }); path(ctx, ax, swap(kept), ci, { k });
    dot(ctx, ax.X(0), ax.Y(0), cf, true, 8);
    const av = a.v, b = av * av;
    mirrorPair(ctx, ax, [av, b], [b, av]); dot(ctx, ax.X(b), ax.Y(av), pc, true, 9);
    P.draw(ctx, ax, pc);
    const tag = (s, px, py, color, align = 'left') => text(ctx, s, ax.X(px), ax.Y(py), color, { size: 22, weight: 600, align, tex: true, bg: PAL.panel });
    pick.only(ctx, 'g', () => { tag('$\\kg(x) = x^{2}$', 2.45, 4.7, cf); tag('$\\kg^{-1}(x) = \\sqrt{x}$', 3.3, 1.35, ci); }, [0, 0]);
    pick.only(ctx, 'h', () => { tag('$\\kh(x) = x^{2}$', -1.95, 4.7, cf); tag('$\\kh^{-1}(x) = -\\sqrt{x}$', 3.0, -0.9, ci); }, [0, 0]);
    headline(ctx, g ? `$\\kg$ is $x^{2}$ on $${typed('set', '[0, \\infty)')}$: each output comes from one input, so $\\kg^{-1}(x) = \\sqrt{x}$.`
      : `$\\kh$ is $x^{2}$ on $${typed('set', '(-\\infty, 0]')}$: each input is negative or zero, so $\\kh^{-1}(x) = -\\sqrt{x}$.`);
    ro.set(g ? `\\kg(${tn(av)}) = ${tn(b, 4)},\\qquad \\kg^{-1}(${tn(b, 4)}) = \\sqrt{${tn(b, 4)}} = ${tn(av)}` : `\\kh(${tn(av)}) = ${tn(b, 4)},\\qquad \\kh^{-1}(${tn(b, 4)}) = -\\sqrt{${tn(b, 4)}} = ${tn(av)}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* exact values the text evaluates, in TeX */
const EXACT = [[0, '0'], [0.5, '\\tfrac{1}{2}'], [Math.SQRT2 / 2, '\\tfrac{\\sqrt{2}}{2}'], [Math.sqrt(3) / 2, '\\tfrac{\\sqrt{3}}{2}'], [1, '1'], [Math.sqrt(3), '\\sqrt{3}'], [1 / Math.sqrt(3), '\\tfrac{1}{\\sqrt{3}}'], [2, '2'], [2 / Math.sqrt(3), '\\tfrac{2}{\\sqrt{3}}'], [Math.SQRT2, '\\sqrt{2}']];
const exact = (v) => { const hit = EXACT.find(([u]) => Math.abs(Math.abs(v) - u) < 1e-9); return hit ? (v < -1e-12 && hit[0] ? '-' : '') + hit[1] : null; };
/* an angle as a multiple of π/12 where it is one */
const piTeX = (t) => {
  const m = (t * 12) / PI, k = Math.round(m); if (Math.abs(m - k) > 1e-6) return null; if (k === 0) return '0';
  const gcd = (p, q) => (q ? gcd(q, p % q) : p), g = gcd(Math.abs(k), 12), p = k / g, q = 12 / g, sg = p < 0 ? '-' : '', ap = Math.abs(p);
  return q === 1 ? `${sg}${ap === 1 ? '' : ap}\\pi` : `${sg}\\tfrac{${ap === 1 ? '' : ap}\\pi}{${q}}`;
};
const angleTeX = (t) => { const e = piTeX(t); return e ? (e === '0' ? '0' : `${e} \\approx ${tn(t)}`) : `${tn(t)}`; };
const valueTeX = (v) => exact(v) ?? tn(v);

/* Figure 1.41: the six inverse trigonometric functions, each with the restricted function it reflects.
   Square axes −4 to 4, which hold π. */
(function () {
  const d = sim('sim-inverse-trig', 600);
  const sec = (x) => 1 / Math.cos(x), csc = (x) => 1 / Math.sin(x), cot = (x) => Math.cos(x) / Math.sin(x);
  const acot = (x) => PI / 2 - Math.atan(x), acsc = (x) => (Math.abs(x) >= 1 ? Math.asin(1 / x) : NaN), asec = (x) => (Math.abs(x) >= 1 ? Math.acos(1 / x) : NaN);
  const e8 = Math.atan(8), s8 = Math.asin(1 / 8), c8 = Math.acos(1 / 8);
  const FN = {
    sin: { name: '\\sin', word: 'sine', f: Math.sin, inv: (x) => (Math.abs(x) <= 1 ? Math.asin(x) : NaN), pieces: [[-PI / 2, PI / 2, '[]']], x: [-1, 1, 0.5], sp: [-Math.sqrt(3) / 2, -0.5, Math.SQRT2 / 2], I: '[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]', asym: [] },
    cos: { name: '\\cos', word: 'cosine', f: Math.cos, inv: (x) => (Math.abs(x) <= 1 ? Math.acos(x) : NaN), pieces: [[0, PI, '[]']], x: [-1, 1, 0.5], sp: [0.5, -Math.SQRT2 / 2], I: '[0, \\pi]', asym: [] },
    tan: { name: '\\tan', word: 'tangent', f: Math.tan, inv: Math.atan, pieces: [[-e8, e8, '']], x: [-4, 4, 1], sp: [-1 / Math.sqrt(3)], I: '(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})', asym: [-PI / 2, PI / 2] },
    cot: { name: '\\cot', word: 'cotangent', f: cot, inv: acot, pieces: [[Math.atan(1 / 8), PI - Math.atan(1 / 8), '']], x: [-4, 4, 1], sp: [], I: '(0, \\pi)', asym: [PI] },
    csc: { name: '\\csc', word: 'cosecant', f: csc, inv: acsc, pieces: [[-PI / 2, -s8, '[-'], [s8, PI / 2, '-]']], x: [-4, 4, 2], sp: [], I: '[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}],\\ y \\ne 0', asym: [] },
    sec: { name: '\\sec', word: 'secant', f: sec, inv: asec, pieces: [[0, c8, '[-'], [PI - c8, PI, '-]']], x: [-4, 4, 2], sp: [], I: '[0, \\pi],\\ y \\ne \\tfrac{\\pi}{2}', asym: [PI / 2] },
  };
  const keys = Object.keys(FN);
  const pick = choice(d.controls, {
    label: '', options: keys.map((k) => ({ value: k, label: `${k}⁻¹` })), value: 'sin', aria: 'which inverse function',
    onInput: (v) => { const [lo, hi, v0] = FN[v].x; xs.range({ min: lo, max: hi, step: 0.01, value: v0, dec: 2 }); xs.refresh(); },
  });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -1, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, specials: [0, 1, 2].map((i) => ({ at: () => FN[pick.value].sp[i] ?? null })) });
  const P = drag(d, { x: xs, y: (x) => FN[pick.value].inv(x) });
  const ro = readout(d);
  const SAMPLES = Object.fromEntries(keys.map((k) => [k, FN[k].pieces.map(([a, b, ends]) => ({ pts: sample(FN[k].f, FN[k].inv, a, b, 200), ends }))]));
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 330, r: 790, t: 80, b: 540 };
  function draw() {
    const { ctx } = begin(d.c);
    const ct = F.ref('trig'), ci = F.ref('trig-inv'), lc = C('line'), pc = C('point'), k = grown(d), fn = FN[pick.value];
    const ax = axes(ctx, BOX, [-4, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 8, ny: 8 });
    lineYX(ctx, ax);
    [...new Set([pick.from, pick.value])].forEach((v) => pick.only(ctx, v, () => {
      FN[v].asym.forEach((c) => { line(ctx, ax.X(c), BOX.t, ax.X(c), BOX.b, alpha(lc, 0.55), 2.5, [10, 10]); line(ctx, BOX.l, ax.Y(c), BOX.r, ax.Y(c), lc, 2.5, [10, 10]); });
      SAMPLES[v].forEach(({ pts, ends }) => {
        path(ctx, ax, pts, ct, { k }); path(ctx, ax, swap(pts), ci, { k });
        const [l, r] = Array.from(ends);
        if (l === '[') { const [x, y] = pts[0]; dot(ctx, ax.X(x), ax.Y(y), ct, true, 8); dot(ctx, ax.X(y), ax.Y(x), ci, true, 8); }
        if (r === ']') { const [x, y] = pts[pts.length - 1]; dot(ctx, ax.X(x), ax.Y(y), ct, true, 8); dot(ctx, ax.X(y), ax.Y(x), ci, true, 8); }
      });
    }, [0, 0]));
    const x = xs.v, t = fn.inv(x), ok = Number.isFinite(t);
    if (ok) { mirrorPair(ctx, ax, [x, t], [t, x]); dot(ctx, ax.X(t), ax.Y(x), pc, true, 9); }
    P.draw(ctx, ax, pc);
    /* the legend, beside the square */
    const LX = 850, row = (i, draw2, s, color) => { draw2(170 + i * 50); text(ctx, s, LX + 70, 170 + i * 50, color, { size: 22, weight: 600, align: 'left', tex: true }); };
    row(0, (y) => line(ctx, LX, y, LX + 50, y, ci, 5), `$y = ${fn.name}^{-1} x$`, ci);
    row(1, (y) => line(ctx, LX, y, LX + 50, y, ct, 5), `$y = ${fn.name} x$ on $${fn.I}$`, ct);
    row(2, (y) => line(ctx, LX, y, LX + 50, y, lc, 3, [10, 10]), fn.asym.length ? '$y = x$; asymptotes' : '$y = x$', lc);
    hits = ok ? [{ x: ax.X(x), y: ax.Y(t), r: 18, name: `(x, ${fn.name.slice(1)}⁻¹ x)` }, { x: ax.X(t), y: ax.Y(x), r: 18, name: `its mirror image, on ${fn.name.slice(1)}` }] : [];
    const X = valueTeX(x), T = angleTeX(t), Tshort = piTeX(t) ?? tn(t);
    headline(ctx, ok ? `$${fn.name}^{-1}(${X}) = ${Tshort}$, the angle in $${typed('set', fn.I)}$ whose ${fn.word} is $${X}$.` : `$x = ${tn(x)}$ is not in the domain of $${fn.name}^{-1}$.`);
    ro.set(ok ? `${fn.name}^{-1}(${X}) ${piTeX(t) ? '=' : '\\approx'} ${T} \\iff ${fn.name}(${Tshort}) ${piTeX(t) ? '=' : '\\approx'} ${X}` : `${fn.name}^{-1}(${tn(x)})\\ \\text{is not defined}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* sin⁻¹(sin θ) and cos⁻¹(cos θ): the angle on the unit circle and its partner on the restricted half, beside the
   zigzag graph of y = sin⁻¹(sin x). The graph's axes are fixed at −2π to 2π by −π to π. */
(function () {
  const d = sim('sim-undo-sine', 540);
  const FN = {
    sin: { name: '\\sin', back: (t) => Math.asin(Math.sin(t)), arc: [-PI / 2, PI / 2], I: '[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]', sp: [PI, -PI / 2, PI / 2], word: 'sine' },
    cos: { name: '\\cos', back: (t) => Math.acos(Math.cos(t)), arc: [0, PI], I: '[0, \\pi]', sp: [5 * PI / 4, 0, PI], word: 'cosine' },
  };
  const pick = choice(d.controls, { label: '', options: [{ value: 'sin', label: 'sine' }, { value: 'cos', label: 'cosine' }], value: 'sin', aria: 'which function', onInput: () => th.refresh() });
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: -2 * PI, max: 2 * PI, step: 0.01, value: PI, unit: '', dec: 2, specials: [0, 1, 2].map((i) => ({ at: () => FN[pick.value].sp[i] })) });
  th.set(PI);
  const P = drag(d, { x: th, y: (t) => FN[pick.value].back(t) });
  const ro = readout(d);
  const CX = 250, CY = 300, R = 150, BOX = { l: 560, r: 1330, t: 110, b: 470 };
  const piTick = (v) => { const e = piTeX(v); return e === null ? '' : e.replace('\\tfrac{', '').replace('}{', '/').replace(/}$/, '').replace('\\pi', 'π').replace('-', '\u2212'); };
  function draw() {
    const { ctx } = begin(d.c);
    const fn = FN[pick.value], t = th.v, back = fn.back(t), on = Math.abs(back - t) < 1e-9;
    const ac = C('angle'), sc = C('set'), pc = C('point'), fc = C('function'), lc = C('line');
    /* the unit circle, its restricted half drawn thick */
    line(ctx, CX - R - 30, CY, CX + R + 30, CY, PAL.muted, 2); line(ctx, CX, CY - R - 30, CX, CY + R + 30, PAL.muted, 2);
    ellipse(ctx, CX, CY, R, R, alpha(PAL.ink, 0.5), 2);
    const [a0, a1] = pick.mix((v) => FN[v].arc);
    ctx.save(); ctx.strokeStyle = alpha(sc, 0.6); ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(CX, CY, R, -a1, -a0); ctx.stroke(); ctx.restore();
    const at = (u, r = R) => [CX + r * Math.cos(u), CY - r * Math.sin(u)];
    const spiral = Array.from({ length: 121 }, (_, i) => { const u = (t * i) / 120; return at(u, 34 + (6 * Math.abs(u)) / PI); });
    ctx.save(); ctx.strokeStyle = ac; ctx.lineWidth = 3; ctx.beginPath(); spiral.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
    const [px, py] = at(t), [qx, qy] = at(back);
    line(ctx, CX, CY, px, py, alpha(PAL.ink, 0.6), 2.5);
    if (!on) { line(ctx, px, py, qx, qy, alpha(PAL.ink, 0.5), 2.5, [4, 8]); line(ctx, CX, CY, qx, qy, alpha(PAL.ink, 0.6), 2.5); dot(ctx, qx, qy, pc, false, 11); }
    dot(ctx, px, py, pc, true, 9);
    label(ctx, 'θ', px, py, { side: Math.cos(t) >= 0 ? 'right' : 'left', size: 24, gap: 22, color: ac });
    if (!on) label(ctx, `${pick.value}⁻¹(${pick.value} θ)`, qx, qy, { side: pick.value === 'sin' ? 'right' : 'above', size: 20, gap: 24 });
    text(ctx, `$${typed('set', fn.I)}$`, CX, CY + R + 64, sc, { size: 22, weight: 600, align: 'center', tex: true });
    /* the graph of sin⁻¹(sin x) */
    const ax = axes(ctx, BOX, [-2 * PI, 2 * PI], [-PI, PI], { xl: 'x', yl: 'y', nx: 8, ny: 4, fx: piTick, fy: piTick });
    const [i0, i1] = pick.mix((v) => FN[v].arc);
    line(ctx, ax.X(i0), ax.Y(0), ax.X(i1), ax.Y(0), alpha(sc, 0.45), 12);
    line(ctx, ax.X(-PI), ax.Y(-PI), ax.X(PI), ax.Y(PI), lc, 3, [10, 10]);
    [...new Set([pick.from, pick.value])].forEach((v) => pick.only(ctx, v, () => plot(ctx, ax, FN[v].back, fc), [0, 0]));
    drop(ctx, ax.X(t), ax.Y(back), ax.X(t), ax.Y(0));
    P.draw(ctx, ax, pc);
    text(ctx, `$y = ${fn.name}^{-1}(${fn.name} x)$`, ax.X(-2 * PI) + 12, BOX.b - 22, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$y = x$', ax.X(-PI + 0.3) + 14, ax.Y(-PI + 0.3) + 4, lc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    const T = piTeX(t) ?? tn(t), B = piTeX(back) ?? tn(back), S = valueTeX(pick.value === 'sin' ? Math.sin(t) : Math.cos(t));
    headline(ctx, on ? `$\\ktheta = ${T}$ is in $${typed('set', fn.I)}$, so $${fn.name}^{-1}(${fn.name}\\ktheta) = \\ktheta$.`
      : `$\\ktheta = ${T}$ is outside $${typed('set', fn.I)}$: $${fn.name}^{-1}(${fn.name}\\ktheta) = ${B}$, the angle there with the same ${fn.word}.`);
    const eq = piTeX(t) && piTeX(back) && exact(pick.value === 'sin' ? Math.sin(t) : Math.cos(t)) ? '=' : '\\approx';
    ro.set(`${fn.name}^{-1}(${fn.name}(${T})) ${eq} ${fn.name}^{-1}(${S}) ${eq} ${B}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 1.42, a faithful copy for the Student Project: y = sin x + cos x on the book's −4 to 4 square. */
(function () {
  const d = sim('fig-sin-plus-cos', 520);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 470, r: 930, t: 40, b: 470 }, [-4, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 8, ny: 8 });
    plot(ctx, ax, (x) => Math.sin(x) + Math.cos(x), fc);
    text(ctx, '$y = \\sin x + \\cos x$', ax.X(0.3), ax.Y(2.6), fc, { size: 24, weight: 600, align: 'left', tex: true, bg: PAL.panel });
  }
  still(d, draw);
})();
};
