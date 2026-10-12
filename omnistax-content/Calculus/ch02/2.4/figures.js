/* Figures for section 2.4 Continuity. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const guide = (ctx, x1, y1, x2, y2, color = alpha(PAL.ink, 0.4)) => line(ctx, x1, y1, x2, y2, color, 2.5, [4, 8]);
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const lim = (at, side = '') => typed('limit', `\\lim_{x\\to ${at}${side ? `^{${side}}` : ''}}\\kf(x)`);
const yes = '\\;\\checkmark', no = '\\;\\times';

/* Figures 2.32, 2.33 and 2.34: one line near a = 2, broken in each of the three ways, and mended.
   Axes fixed at −3 to 5 by −1 to 5, which hold the lifted right part of (ii). */
(function () {
  const d = sim('sim-three-conditions', 500);
  const A = 2, f = (x) => x / 2 + 1, L = f(A);
  const S = { i: { r: 0, at: null }, ii: { r: 1.5, at: L }, iii: { r: 0, at: 3.5 }, c: { r: 0, at: L } };
  const pick = choice(d.controls, { label: '', options: [{ value: 'i', label: '(i) hole' }, { value: 'ii', label: '(ii) gap' }, { value: 'iii', label: '(iii) point off' }, { value: 'c', label: 'continuous' }], value: 'i', aria: 'which condition fails' });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 100, b: 440 };
  let hits = [];
  hover(d.stage, () => hits);
  const HEAD = {
    i: 'Condition (i) fails: $\\kf(2)$ is undefined, so $\\kf$ is not continuous at 2.',
    ii: 'Condition (ii) fails: the limit at 2 does not exist, so $\\kf$ is not continuous at 2.',
    iii: 'Condition (iii) fails: the limit at 2 is 2 but $\\kf(2) = 3.5$, so $\\kf$ is not continuous at 2.',
    c: 'All three conditions hold: $\\kf$ is continuous at 2.',
  };
  const RO = {
    i: `\\text{i. } \\kf(2)\\ \\text{undefined}${no} \\qquad \\text{ii. } ${lim(2)} = 2${yes} \\qquad \\text{iii. }${no}`,
    ii: `\\text{i. } \\kf(2) = 2${yes} \\qquad \\text{ii. } ${lim(2, '-')} = 2 \\ne 3.5 = ${lim(2, '+')}${no} \\qquad \\text{iii. }${no}`,
    iii: `\\text{i. } \\kf(2) = 3.5${yes} \\qquad \\text{ii. } ${lim(2)} = 2${yes} \\qquad \\text{iii. } 2 \\ne 3.5${no}`,
    c: `\\text{i. } \\kf(2) = 2${yes} \\qquad \\text{ii. } ${lim(2)} = 2${yes} \\qquad \\text{iii. } 2 = 2${yes}`,
  };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('limit'), v = pick.value;
    const r = pick.mix((s) => S[s].r), seen = pick.mix((s) => (S[s].at === null ? 0 : 1)), at = pick.mix((s) => S[s].at ?? L);
    headline(ctx, HEAD[v]);
    const ax = axes(ctx, BOX, [-3, 5], [-1, 5], { xl: 'x', yl: 'y', nx: 8, ny: 6 });
    const X0 = ax.X(0), XA = ax.X(A);
    guide(ctx, X0, ax.Y(L), XA, ax.Y(L), alpha(lc, 0.9));
    if (r > 0.01) guide(ctx, X0, ax.Y(L + r), XA, ax.Y(L + r), alpha(lc, 0.9));
    plot(ctx, ax, [{ f, x: [-3, A] }, { f: (x) => f(x) + r, x: [A, 5] }], fc);
    dot(ctx, XA, ax.Y(L), fc, false, 9);
    if (r > 0.01) dot(ctx, XA, ax.Y(L + r), fc, false, 9);
    F.faded(ctx, seen, [0, 0], () => dot(ctx, XA, ax.Y(at), fc, true, 9));
    text(ctx, '$\\kf(x)$', ax.X(4.3), ax.Y(f(4.3) + r) - 30, fc, { size: 24, weight: 600, align: 'center', tex: true });
    hits = [
      { x: XA, y: ax.Y(L), r: 16, name: v === 'ii' ? 'the limit from the left, 2' : 'the limit at 2, where the graph has a hole' },
      ...(v === 'ii' ? [{ x: XA, y: ax.Y(L + r), r: 16, name: 'the limit from the right, 3.5' }] : []),
      ...(S[v].at === null ? [] : [{ x: XA, y: ax.Y(S[v].at) - 1, r: 18, name: `(2, f(2)) = (2, ${S[v].at})` }]),
    ];
    ro.set(RO[v], undefined, { form: v });
  }
  still(d, draw);
})();

/* Figure 2.35, a faithful copy: (x² − 4)/(x − 2), the line x + 2 with its hole at (2, 4). Axes −4 to 5 by −2 to 7. */
(function () {
  const d = sim('fig-hole-at-two', 440);
  const f = (x) => (x * x - 4) / (x - 2);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 380 }, [-4, 5], [-2, 7], { xl: 'x', yl: 'y', nx: 9, ny: 9 });
    plot(ctx, ax, f, fc, { holes: [2] });
    text(ctx, '$\\kf(x)$', ax.X(3.1), ax.Y(4.6), fc, { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: ax.X(2), y: ax.Y(4), r: 16, name: '(2, 4): f(2) is undefined' }];
  }
  still(d, draw);
})();

/* Figure 2.36, a faithful copy: −x² + 4 up to its closed end (3, −5), then 4x − 8 from its open end (3, 4).
   Axes −4 to 5 by −6 to 10. */
(function () {
  const d = sim('fig-jump-at-three', 520);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 400, r: 1000, t: 40, b: 460 }, [-4, 5], [-6, 10], { xl: 'x', yl: 'y', nx: 9, ny: 8 });
    plot(ctx, ax, [{ f: (x) => -x * x + 4, x: [-3.2, 3], ends: '-]' }, { f: (x) => 4 * x - 8, x: [3, 4.5], ends: '(-' }], fc);
    text(ctx, '$\\kf(x)$', ax.X(3.7), ax.Y(8.6), fc, { size: 24, weight: 600, align: 'right', tex: true });
    hits = [
      { x: ax.X(3), y: ax.Y(-5), r: 16, name: '(3, −5): f(3) = −5, the limit from the left' },
      { x: ax.X(3), y: ax.Y(4), r: 16, name: '(3, 4): the limit from the right' },
    ];
  }
  still(d, draw);
})();

/* Figure 2.37, a faithful copy: (a) removable, (b) jump and (c) infinite, side by side. Each panel's
   axes run −3 to 4 by −3 to 4 with a = 2 and no numbers, as the book draws them. */
(function () {
  const d = sim('fig-discontinuity-kinds', 430);
  const A = 2;
  let hits = [];
  hover(d.stage, () => hits);
  const PANELS = [
    { tag: '(a)', name: 'removable discontinuity', pieces: [{ f: (x) => x / 2 + 1, x: [-3, 4] }], holes: [[A, 2]], dots: [[A, 3.4]],
      hits: [[A, 2, 'the hole at a: the limit exists'], [A, 3.4, 'f(a), off the line']] },
    { tag: '(b)', name: 'jump discontinuity', pieces: [{ f: (x) => x / 2, x: [-3, A], ends: '-]' }, { f: (x) => x / 2 + 1.6, x: [A, 4], ends: '(-' }],
      hits: [[A, 1, 'f(a), the limit from the left'], [A, 2.6, 'the limit from the right']] },
    { tag: '(c)', name: 'infinite discontinuity', pieces: [{ f: (x) => 0.4 - 0.6 / (x - A), x: [-3, 4] }], pole: A,
      hits: [] },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    hits = [];
    PANELS.forEach((P, i) => {
      const l = 70 + i * 450, box = { l, r: l + 360, t: 40, b: 320 };
      const ax = axes(ctx, box, [-3, 4], [-3, 4], { nx: 0, ny: 0 });
      if (P.pole !== undefined) line(ctx, ax.X(P.pole), box.t, ax.X(P.pole), box.b, lc, 3, [10, 10]);
      plot(ctx, ax, P.pieces, fc, { holes: P.holes, dots: P.dots });
      text(ctx, 'a', ax.X(A), ax.Y(0) + 22, PAL.ink, { size: 22, align: 'center', bg: PAL.panel });
      text(ctx, 'x', box.r + 16, ax.Y(0), PAL.ink, { size: 20, weight: 600, align: 'left' });
      text(ctx, 'y', ax.X(0), box.t - 18, PAL.ink, { size: 20, weight: 600, align: 'center' });
      if (P.pole === undefined) text(ctx, '$\\kf(x)$', ax.X(3.4), ax.Y(P.pieces[P.pieces.length - 1].f(3.4)) - 28, fc, { size: 22, weight: 600, align: 'center', tex: true });
      text(ctx, P.name, (box.l + box.r) / 2, box.b + 40, PAL.ink, { size: 22, align: 'center' });
      text(ctx, P.tag, (box.l + box.r) / 2, box.b + 76, PAL.ink, { size: 22, align: 'center' });
      hits.push(...P.hits.map(([x, y, name]) => ({ x: ax.X(x), y: ax.Y(y), r: 16, name })));
      if (P.pole !== undefined) hits.push({ x: ax.X(P.pole), y: (box.t + box.b) / 2, r: 18, name: 'the vertical asymptote x = a' });
    });
  }
  still(d, draw);
})();

/* Continuity from one side: Example 2.27's function with f(3) set by hand. Axes −4 to 5 by −6 to 10,
   Figure 2.36's, so the slider's whole range stays on the graph. */
(function () {
  const d = sim('sim-one-sided', 520);
  const A = 3, LEFT = -5, RIGHT = 4;
  const v = ctl(d.controls, { label: '\\kf(3)', cls: '', key: 'f3', min: -6, max: 10, step: 0.1, value: LEFT, unit: '', dec: 1, specials: [{ at: LEFT }, { at: RIGHT }] });
  const ro = readout(d);
  const BOX = { l: 400, r: 1000, t: 100, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  const near = (p, q) => Math.abs(p - q) < 1e-6;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('limit'), y = v.v, fromL = near(y, LEFT), fromR = near(y, RIGHT);
    headline(ctx, fromL ? '$\\kf(3) = -5$: continuous from the left at 3, not from the right.'
      : fromR ? '$\\kf(3) = 4$: continuous from the right at 3, not from the left.'
      : `$\\kf(3) = ${n(y, 1)}$: continuous from neither side at 3.`);
    const ax = axes(ctx, BOX, [-4, 5], [-6, 10], { xl: 'x', yl: 'y', nx: 9, ny: 8 });
    const X0 = ax.X(0), XA = ax.X(A);
    guide(ctx, X0, ax.Y(LEFT), XA, ax.Y(LEFT), alpha(lc, 0.9));
    guide(ctx, X0, ax.Y(RIGHT), XA, ax.Y(RIGHT), alpha(lc, 0.9));
    plot(ctx, ax, [{ f: (x) => -x * x + 4, x: [-3.2, A] }, { f: (x) => 4 * x - 8, x: [A, 4.5] }], fc);
    dot(ctx, XA, ax.Y(LEFT), fc, false, 9); dot(ctx, XA, ax.Y(RIGHT), fc, false, 9);
    dot(ctx, XA, ax.Y(y), fc, true, 9);
    text(ctx, '$\\kf(x)$', ax.X(3.7), ax.Y(8.6), fc, { size: 24, weight: 600, align: 'right', tex: true });
    hits = [
      { x: XA, y: ax.Y(LEFT), r: 16, name: 'the limit from the left, −5' },
      { x: XA, y: ax.Y(RIGHT), r: 16, name: 'the limit from the right, 4' },
      { x: XA, y: ax.Y(y) - 1, r: 18, name: `(3, f(3)) = (3, ${fmt(y, 1)})` },
    ];
    const rel = (p) => (near(y, p) ? '=' : '\\ne'), f3 = `\\kf(3) = ${n(y, 1)}`;
    const ints = fromL ? ['(-\\infty, 3]', '(3, +\\infty)'] : fromR ? ['(-\\infty, 3)', '[3, +\\infty)'] : ['(-\\infty, 3)', '(3, +\\infty)'];
    ro.set(`${lim(3, '-')} = -5 ${rel(LEFT)} ${f3} \\qquad ${lim(3, '+')} = 4 ${rel(RIGHT)} ${f3}`,
      `continuous over $${typed('set', ints[0])}$ and $${typed('set', ints[1])}$`, { form: fromL ? 'l' : fromR ? 'r' : 'n' });
  }
  still(d, draw);
})();

/* Example 2.35: x, then g(x) = x − π/2, then f(g(x)) = cos(g(x)), on three number lines that share
   one scale, −1.8 to 3.3, which holds x on [0, π] and both images. */
(function () {
  const d = sim('sim-composite-limit', 470);
  const HALF = Math.PI / 2, g = (x) => x - HALF, f = Math.cos;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: Math.PI, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: HALF }] });
  const ro = readout(d);
  const L0 = 320, R0 = 1280, LO = -1.8, HI = 3.3, ROWS = [140, 270, 400];
  const X = (v) => L0 + ((v - LO) / (HI - LO)) * (R0 - L0);
  const AX = { X, Y: () => ROWS[0], box: { l: L0, r: R0, t: ROWS[0] - 20, b: ROWS[0] + 20 }, xr: [LO, HI], yr: [-1, 1] };
  const P = drag(d, { x: xs });
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('limit'), x = xs.v, u = g(x), y = f(u), at = Math.abs(x - HALF) < 1e-6;
    headline(ctx, at ? '$x = \\pi/2$: $\\kg(x) = 0 = \\kL$, and $\\cos(\\kg(x)) = \\cos 0 = 1$.' : `$x = ${n(x)}$: $\\kg(x) = ${n(u)}$, and $\\cos(\\kg(x)) = ${n(y)}$.`);
    ROWS.forEach((ry, i) => { line(ctx, L0, ry, R0, ry, PAL.muted, 2); [-1, 0, 1, 2, 3].forEach((t) => { line(ctx, X(t), ry - 8, X(t), ry + 8, PAL.muted, 2); if (!(i === 1 && t === 0) && !(i === 2 && t === 1)) text(ctx, String(t).replace('-', '\u2212'), X(t), ry + 28, PAL.muted, { size: 17, align: 'center' }); }); });
    text(ctx, '$x$', L0 - 30, ROWS[0], PAL.ink, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kg(x) = x - \\pi/2$', L0 - 30, ROWS[1], fc, { size: 22, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kf(\\kg(x)) = \\cos(\\kg(x))$', L0 - 30, ROWS[2], fc, { size: 22, weight: 600, align: 'right', tex: true });
    line(ctx, X(HALF), ROWS[0] - 18, X(HALF), ROWS[0] + 18, PAL.ink, 3);
    text(ctx, '$\\pi/2$', X(HALF), ROWS[0] - 34, PAL.ink, { size: 20, align: 'center', tex: true, bg: PAL.panel });
    line(ctx, X(0), ROWS[1] - 18, X(0), ROWS[1] + 18, lc, 4);
    text(ctx, '$\\kL = 0$', X(0) + 8, ROWS[1] + 30, lc, { size: 20, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    line(ctx, X(1), ROWS[2] - 18, X(1), ROWS[2] + 18, lc, 4);
    text(ctx, '$\\kf(\\kL) = 1$', X(1), ROWS[2] + 30, lc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    arrow(ctx, X(x), ROWS[0] + 12, X(u), ROWS[1] - 12, fc, 4);
    arrow(ctx, X(u), ROWS[1] + 12, X(y), ROWS[2] - 12, fc, 4);
    text(ctx, '$\\kg$', (X(x) + X(u)) / 2 + 22, (ROWS[0] + ROWS[1]) / 2, fc, { size: 24, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf$', (X(u) + X(y)) / 2 + 22, (ROWS[1] + ROWS[2]) / 2, fc, { size: 24, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    dot(ctx, X(u), ROWS[1], PAL.ink, true, 9); dot(ctx, X(y), ROWS[2], PAL.ink, true, 9);
    P.draw(ctx, AX, PAL.ink);
    hits = [{ x: X(x), y: ROWS[0], r: 18, name: `x = ${fmt(x, 2)}` }, { x: X(u), y: ROWS[1], r: 16, name: `g(x) = ${fmt(u, 2)}` }, { x: X(y), y: ROWS[2], r: 16, name: `cos(g(x)) = ${fmt(y, 2)}` }];
    ro.set(`\\kg(${n(x)}) = ${n(x)} - \\tfrac{\\pi}{2} = ${n(u)} \\qquad \\kf(\\kg(${n(x)})) = \\cos(${n(u)}) = ${n(y)}`,
      `$\\lim_{x\\to\\pi/2}\\cos\\left(x - \\tfrac{\\pi}{2}\\right) = \\cos\\left(\\lim_{x\\to\\pi/2}\\left(x - \\tfrac{\\pi}{2}\\right)\\right) = \\cos(0) = 1$`);
  }
  still(d, draw);
})();

/* Figure 2.38: the level z across the graph, every c in [a, b] with f(c) = z dropped to the axis. Each
   curve keeps its own axes (the theorem's 0 to 6 by 0 to 6; x − cos x −0.5 to 2 by −1.5 to 2;
   (x − 1)² −0.5 to 2.5 by −0.5 to 2.5; 1/x −2 to 2 by −3 to 3), eased into one another on a change. */
(function () {
  const d = sim('sim-ivt', 560);
  const S = {
    thm: { f: (x) => 0.5 * (x - 3) ** 3 - (x - 3) + 3, ab: [1, 5], names: ['1', '5'], tex: ['1', '5'], xr: [0, 6], yr: [0, 6], z: [0, 6, 2] },
    cos: { f: (x) => x - Math.cos(x), ab: [0, Math.PI / 2], names: ['0', 'π/2'], tex: ['0', '\\pi/2'], xr: [-0.5, 2], yr: [-1.5, 2], z: [-1.5, 2, 0] },
    sq: { f: (x) => (x - 1) ** 2, ab: [0, 2], names: ['0', '2'], tex: ['0', '2'], xr: [-0.5, 2.5], yr: [-0.5, 2.5], z: [-0.5, 2.5, 0], cs: (z) => (z < 0 ? [] : z === 0 ? [1] : [1 - Math.sqrt(z), 1 + Math.sqrt(z)]) },
    inv: { f: (x) => 1 / x, ab: [-1, 1], names: ['−1', '1'], tex: ['-1', '1'], xr: [-2, 2], yr: [-3, 3], z: [-3, 3, 0], pole: 0, cs: (z) => (z !== 0 && Math.abs(1 / z) <= 1 ? [1 / z] : []) },
  };
  const span = (s) => ({ min: S[s].z[0], max: S[s].z[1], step: 0.01, value: S[s].z[2], dec: 2 });
  const pick = choice(d.controls, {
    label: '\\kf(x)', options: [{ value: 'thm', label: 'Figure 2.38' }, { value: 'cos', label: 'x − cos x' }, { value: 'sq', label: '(x − 1)²' }, { value: 'inv', label: '1/x' }], value: 'thm', aria: 'which function',
    onInput: (s) => z.range(span(s)),
  });
  const z = ctl(d.controls, { label: 'z', cls: '', key: 'z', min: 0, max: 6, step: 0.01, value: 2, unit: '', dec: 2, specials: [{ at: () => (pick.value === 'thm' ? null : 0) }] });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 120, b: 480 };
  let hits = [];
  hover(d.stage, () => hits);
  /* every c in [a, b] with f(c) = zv: sign changes of f − zv refined by bisection; a jump across a pole is no root */
  const roots = (f, a, b, zv) => {
    const N = 600, out = [], g = (x) => f(x) - zv;
    for (let i = 0; i < N; i++) {
      let p = a + ((b - a) * i) / N, q = a + ((b - a) * (i + 1)) / N, gp = g(p), gq = g(q);
      if (i === 0 && gp === 0) out.push(p);
      if (gq === 0) { out.push(q); continue; }
      if (!(Number.isFinite(gp) && Number.isFinite(gq)) || gp * gq > 0 || gp === 0) continue;
      for (let k = 0; k < 60; k++) { const m = (p + q) / 2, gm = g(m); if (gp * gm <= 0) q = m; else { p = m; gp = gm; } }
      const c = (p + q) / 2; if (Math.abs(g(c)) < 1e-6) out.push(c);
    }
    return out;
  };
  const list = (cs) => (cs.length < 3 ? cs.map((c) => fmt(c, 2)).join(' and ') : `${cs.slice(0, -1).map((c) => fmt(c, 2)).join(', ')} and ${fmt(cs[cs.length - 1], 2)}`);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), sc = C('set'), lc = C('line'), s = pick.value, st = S[s], zv = z.v;
    const xr = pick.mix((v) => S[v].xr), yr = pick.mix((v) => S[v].yr);
    const [a, b] = st.ab, fa = st.f(a), fb = st.f(b), cs = st.cs ? st.cs(zv) : roots(st.f, a, b, zv);
    const between = Math.min(fa, fb) <= zv + 1e-9 && zv - 1e-9 <= Math.max(fa, fb);
    const fA = `f(${st.names[0]}) = ${fmt(fa, 2)}`, fB = `f(${st.names[1]}) = ${fmt(fb, 2)}`, Z = `z = ${fmt(zv, 2)}`;
    headline(ctx, between
      ? (cs.length ? `${Z} lies between ${fA} and ${fB}, and f(c) = z at c = ${list(cs)}.` : `${Z} lies between ${fA} and ${fB}, yet no c in [${st.names.join(', ')}] has f(c) = z: f is not continuous there.`)
      : (cs.length ? `${Z} is not between ${fA} and ${fB}, and yet f(c) = z at c = ${list(cs)}.` : `${Z} is not between ${fA} and ${fB}, and no c in [${st.names.join(', ')}] has f(c) = z.`));
    const ax = axes(ctx, BOX, xr, yr, { xl: 'x', yl: 'y', nx: 5, ny: 5, nice: true });
    const axisY = yr[0] < 0 && yr[1] > 0 ? ax.Y(0) : BOX.b;
    Object.keys(S).forEach((v) => pick.only(ctx, v, () => {
      const q = S[v];
      if (q.pole !== undefined) line(ctx, ax.X(q.pole), BOX.t, ax.X(q.pole), BOX.b, lc, 3, [10, 10]);
      plot(ctx, ax, q.f, alpha(fc, 0.3));
      plot(ctx, ax, q.f, fc, { x: q.ab });
    }, [0, 0]));
    line(ctx, ax.X(a), axisY, ax.X(b), axisY, alpha(sc, 0.5), 10);
    dot(ctx, ax.X(a), axisY, sc, true, 7); dot(ctx, ax.X(b), axisY, sc, true, 7);
    [[a, fa], [b, fb]].forEach(([x, y]) => { guide(ctx, ax.X(x), ax.Y(y), ax.X(x), axisY); dot(ctx, ax.X(x), ax.Y(y), fc, true, 9); });
    line(ctx, BOX.l, ax.Y(zv), BOX.r, ax.Y(zv), alpha(PAL.ink, 0.75), 3, [10, 10]);
    text(ctx, 'z', BOX.l + 16, ax.Y(zv) - 18, PAL.ink, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    cs.forEach((c, i) => {
      guide(ctx, ax.X(c), ax.Y(zv), ax.X(c), axisY, alpha(PAL.ink, 0.7));
      dot(ctx, ax.X(c), ax.Y(zv), PAL.ink, true, 9);
      const ly = Math.abs(ax.Y(zv) - axisY) > 50 ? axisY - 24 : ax.Y(zv) + (zv >= 0 ? -28 : 28);
      text(ctx, cs.length > 1 ? `c_${i + 1}` : 'c', ax.X(c), ly, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    });
    label(ctx, 'f(a)', ax.X(a), ax.Y(fa), { side: fa > (yr[0] + yr[1]) / 2 ? 'below' : 'above', gap: 24 });
    label(ctx, 'f(b)', ax.X(b), ax.Y(fb), { side: fb > (yr[0] + yr[1]) / 2 ? 'below' : 'above', gap: 24 });
    hits = [
      { x: ax.X(a), y: ax.Y(fa), r: 16, name: `(a, f(a)) = (${st.names[0]}, ${fmt(fa, 2)})` },
      { x: ax.X(b), y: ax.Y(fb), r: 16, name: `(b, f(b)) = (${st.names[1]}, ${fmt(fb, 2)})` },
      { x: (ax.X(a) + ax.X(b)) / 2, y: axisY, r: 14, name: `the interval [a, b] = [${st.names.join(', ')}]` },
      ...cs.map((c) => ({ x: ax.X(c), y: ax.Y(zv), r: 16, name: `(c, f(c)) = (${fmt(c, 2)}, ${fmt(zv, 2)})` })),
      ...(st.pole === undefined ? [] : [{ x: ax.X(st.pole), y: (BOX.t + BOX.b) / 2, r: 18, name: 'the vertical asymptote x = 0' }]),
    ];
    const rel = (p, q) => (p < q - 1e-9 ? '\\lt' : p > q + 1e-9 ? '\\gt' : '=');
    const ends = `\\kf(${st.tex[0]}) = ${n(fa)} ${rel(fa, zv)} z = ${n(zv)} ${rel(zv, fb)} \\kf(${st.tex[1]}) = ${n(fb)}`;
    const found = cs.length ? cs.map((c) => `\\kf(${n(c)}) = ${n(zv)}`).join(',\\ ') : `\\text{no } c \\text{ in } ${typed('set', `[${st.tex.join(', ')}]`)}`;
    ro.set(`${ends} \\qquad ${found}`, undefined, { form: s });
  }
  still(d, draw);
})();
};
