/* Figures for section 1.1 Review of Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, tex, fmt, cycle, hover, partial } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a function's numbers set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');
const set = (xs) => `\\{${xs.join(', ')}\\}`;
const ellipse = (ctx, x, y, rx, ry, color, w = 3) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); };

/* Figure 1.2: the input/output device, a faithful copy. */
(function () {
  const d = sim('fig-function-machine', 220);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    ctx.save(); ctx.strokeStyle = fc; ctx.lineWidth = 3; ctx.strokeRect(540, 50, 320, 120); ctx.restore();
    text(ctx, 'function', 700, 110, fc, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'Input, $x$', 300, 110, PAL.ink, { size: 24, align: 'center', tex: true });
    text(ctx, 'Output, $\\kf(x)$', 1110, 110, PAL.ink, { size: 24, align: 'center', tex: true });
    arrow(ctx, 390, 110, 530, 110, PAL.ink, 4);
    arrow(ctx, 870, 110, 1000, 110, PAL.ink, 4);
  }
  still(d, draw);
})();

/* Figures 1.3, 1.4 and 1.5: one finite function as a map and as a graph. The graph's axes are fixed at
   0 to 5 by 0 to 7, the reach of the four outputs and room for their labels. */
(function () {
  const d = sim('sim-function-views', 540);
  const MODES = { map: [6, 4, 2, 2], graph: [2, 1, 2], rule: [2, 1, 0] };
  const outs = [1, 2, 3, 4].map((x) => ctl(d.controls, { label: `\\kf(${x})`, cls: '', key: `f${x}`, min: 0, max: 6, step: 1, value: MODES.map[x - 1], unit: '', dec: 0, aria: `f of ${x}` }));
  const mode = choice(d.controls, {
    label: 'domain', options: [{ value: 'map', label: '{1, 2, 3, 4}' }, { value: 'graph', label: '{1, 2, 3}' }, { value: 'rule', label: '3 − x on {1, 2, 3}' }], value: 'map',
    onInput: (v) => { MODES[v].forEach((y, i) => outs[i].set(y)); outs[3].show(v === 'map'); outs.forEach((s) => s.disable(v === 'rule')); },
  });
  const ro = readout(d);
  const BOX = { l: 760, r: 1320, t: 110, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), xs = mode.value === 'map' ? [1, 2, 3, 4] : [1, 2, 3], ys = xs.map((x) => outs[x - 1].v);
    const range = [...new Set(ys)].sort((a, b) => a - b), shared = range.find((y) => ys.filter((v) => v === y).length > 1);
    headline(ctx, `Domain {${xs.join(', ')}}, range {${range.join(', ')}}: ${shared === undefined ? 'every output comes from one input.' : `two inputs share the output ${shared}.`}`);
    /* the map: the domain bubble, the range bubble, one arrow per input */
    const DX = 150, RX = 470, CY = 300, slot = (i, k) => CY + (i - (k - 1) / 2) * Math.min(80, 280 / k);
    ellipse(ctx, DX, CY, 80, 175, PAL.ink); ellipse(ctx, RX, CY, 80, 175, PAL.ink);
    text(ctx, 'domain', DX, 105, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'range', RX, 105, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '$\\kf$', (DX + RX) / 2, 105, fc, { size: 26, weight: 600, align: 'center', tex: true });
    xs.forEach((x, i) => {
      const y0 = slot(i, xs.length), y1 = slot(range.indexOf(ys[i]), range.length);
      text(ctx, String(x), DX, y0, PAL.ink, { size: 24, align: 'center' });
      arrow(ctx, DX + 26, y0, RX - 26, y1, fc, 3);
    });
    range.forEach((y, j) => text(ctx, String(y), RX, slot(j, range.length), PAL.ink, { size: 24, align: 'center' }));
    /* the graph: the points (x, f(x)), dropped to both axes */
    const ax = axes(ctx, BOX, [0, 5], [0, 7], { xl: 'independent variable, x', yl: 'dependent variable, y = f(x)', nx: 5, ny: 7 });
    xs.forEach((x, i) => { drop(ctx, ax.X(x), ax.Y(ys[i]), ax.X(x), ax.Y(0)); drop(ctx, ax.X(x), ax.Y(ys[i]), ax.X(0), ax.Y(ys[i])); });
    range.forEach((y) => dot(ctx, ax.X(0), ax.Y(y), PAL.ink, true, 6));
    xs.forEach((x, i) => { dot(ctx, ax.X(x), ax.Y(ys[i]), fc, true, 9); label(ctx, `(${x}, ${ys[i]})`, ax.X(x), ax.Y(ys[i]), { side: 'above', size: 20 }); });
    const pairs = xs.map((x, i) => `(${x}, ${ys[i]})`).join(', ');
    ro.set(mode.value === 'rule' ? `\\kf(x) = 3 - x:\\quad \\kf = ${set([pairs])}` : `\\kf = ${set([pairs])}`);
  }
  still(d, draw);
})();

/* Figures 1.6 and 1.7: Table 1.1 as points, then connected. Axes fixed at 0 to 24 h by 0 to 90 °F, the book's. */
(function () {
  const d = sim('sim-temperature', 520);
  const T = [58, 54, 53, 52, 52, 55, 60, 64, 72, 75, 78, 80, 84, 85, 85, 83, 82, 80, 77, 74, 69, 65, 60, 58];
  const temp = (x) => { if (x < 0 || x > 23) return NaN; const i = Math.min(22, Math.floor(x)); return T[i] + (T[i + 1] - T[i]) * (x - i); };
  const mode = choice(d.controls, {
    label: '', options: [{ value: 'points', label: 'points' }, { value: 'connected', label: 'connected' }], value: 'points', aria: 'how the readings are drawn',
    onInput: (v) => hour.range(v === 'points' ? { min: 0, max: 23, step: 1, dec: 0 } : { min: 0, max: 23, step: 0.25, dec: 2 }),
  });
  const hour = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 23, step: 1, value: 4, unit: 'h', dec: 0, aria: 'hours after midnight', specials: [{ at: 4 }, { at: 14 }] });
  const P = drag(d, { x: hour, y: temp });
  const ro = readout(d);
  const BOX = { l: 150, r: 1290, t: 100, b: 440 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), x = hour.v, y = temp(x), whole = Math.abs(x - Math.round(x)) < 1e-9;
    headline(ctx, `${fmt(x, whole ? 0 : 2)} hours after midnight: ${whole ? '' : 'about '}${fmt(y, whole ? 0 : 1)} °F`);
    const ax = axes(ctx, BOX, [0, 24], [0, 90], { xl: 'hours after midnight', yl: 'temperature (°F)', nx: 6, ny: 9 });
    const line23 = () => plot(ctx, ax, temp, fc, { x: [0, 23], w: 4 });
    if (mode.value === 'connected') plot(ctx, ax, temp, fc, { x: [0, Math.max(1e-3, 23 * mode.k)], w: 4 });
    else mode.only(ctx, 'connected', line23);
    T.forEach((t, i) => dot(ctx, ax.X(i), ax.Y(t), fc, true, 7));
    drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0)); drop(ctx, ax.X(x), ax.Y(y), ax.X(0), ax.Y(y));
    P.draw(ctx, ax, PAL.ink);
    const where = x < 4 ? '\\text{decreasing on } (0, 4)' : x === 4 ? '\\text{between } (0, 4) \\text{ and } (4, 14)'
      : x < 14 ? '\\text{increasing on } (4, 14)' : x === 14 ? '\\text{between } (4, 14) \\text{ and } (14, 23)' : '\\text{decreasing on } (14, 23)';
    ro.set(`\\kf(${n(x, whole ? 0 : 2)}) ${whole ? '=' : '\\approx'} ${n(y, whole ? 0 : 1)} \\qquad ${where}`);
  }
  still(d, draw);
})();

/* Figure 1.8: the vertical line test on a function's graph and on a curve that is none. Axes fixed at
   −4 to 4 by −3 to 3, which hold the sideways curve x = y³ − 3y for |y| ≤ 2.15. */
(function () {
  const d = sim('sim-vertical-line', 520);
  const f = (x) => (x ** 3 - 6 * x) / 8 + 0.5;
  /* the real roots of y³ − 3y = c */
  const roots = (c) => {
    if (Math.abs(c) < 2) { const a = Math.acos(c / 2); return [0, 1, 2].map((k) => 2 * Math.cos((a + 2 * Math.PI * k) / 3)).sort((p, q) => p - q); }
    if (Math.abs(c) === 2) return c > 0 ? [-1, 2] : [-2, 1];
    return [Math.sign(c) * 2 * Math.cosh(Math.acosh(Math.abs(c) / 2) / 3)];
  };
  const pick = choice(d.controls, { label: '', options: [{ value: 'a', label: '(a) y = f(x)' }, { value: 'b', label: '(b) y ≠ f(x)' }], value: 'a', aria: 'which set of points' });
  const c = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -3.5, max: 3.5, step: 0.01, value: -1.5, unit: '', dec: 2, specials: [{ at: () => (pick.value === 'b' ? -2 : null) }, { at: () => (pick.value === 'b' ? 2 : null) }] });
  const P = drag(d, { x: c });
  const ro = readout(d);
  const BOX = { l: 250, r: 1150, t: 90, b: 460 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), cv = c.v, a = pick.value === 'a';
    const ax = axes(ctx, BOX, [-4, 4], [-3, 3], { xl: 'x', yl: 'y', nx: 8, ny: 6 });
    pick.only(ctx, 'a', () => plot(ctx, ax, f, fc));
    pick.only(ctx, 'b', () => { ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip(); F.curve(ctx, (y) => y, -2.15, 2.15, (y) => ax.X(y ** 3 - 3 * y), ax.Y, PAL.ink, 5, 160); ctx.restore(); });
    line(ctx, ax.X(cv), BOX.t, ax.X(cv), BOX.b, alpha(PAL.ink, 0.6), 3, [10, 10]);
    const ys = a ? [f(cv)] : roots(cv);
    ys.filter((y) => y >= -3 && y <= 3).forEach((y) => dot(ctx, ax.X(cv), ax.Y(y), a ? fc : PAL.ink, true, 10));
    P.draw(ctx, ax, PAL.ink);
    const times = ['', 'once', 'twice', '3 times'][ys.length];
    headline(ctx, a ? `The line x = ${fmt(cv, 2)} meets the graph ${times}.` : `The line x = ${fmt(cv, 2)} meets the curve ${times}${ys.length > 1 ? ': the curve is not the graph of a function.' : '.'}`);
    ro.set(a ? `x = ${n(cv)}:\\quad y = \\kf(${n(cv)}) = ${n(f(cv))}` : `y^3 - 3y = ${n(cv)}:\\quad y = ${ys.map((y) => n(y)).join(',\\ ')}`);
  }
  still(d, draw);
})();

/* Figure 1.9, a faithful copy: f(x) = −4x + 2 and its two intercepts, on the book's −2 to 5 by −2 to 5. */
(function () {
  const d = sim('fig-line-intercepts', 470);
  const f = (x) => -4 * x + 2;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 410 }, [-2, 5], [-2, 5], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(0.5), ax.Y(0), fc, true, 10); dot(ctx, ax.X(0), ax.Y(2), fc, true, 10);
    label(ctx, '(1/2, 0)', ax.X(0.5), ax.Y(0), { side: 'right', gap: 22 });
    label(ctx, '(0, 2)', ax.X(0), ax.Y(2), { side: 'right', gap: 22 });
    text(ctx, '$\\kf(x) = -4x + 2$', ax.X(-0.85), ax.Y(4.4), fc, { size: 24, weight: 600, align: 'right', tex: true });
  }
  still(d, draw);
})();

/* Figure 1.10, a faithful copy: f(x) = √(x + 3) + 1 from its closed end, with Table 1.2's points. */
(function () {
  const d = sim('fig-root-graph', 470);
  const f = (x) => Math.sqrt(x + 3) + 1;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 410 }, [-4, 2], [-2, 4], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    plot(ctx, ax, [{ f, x: [-3, 2], ends: '[-' }], fc);
    const pts = [[-2, 2, '(−2, 2)'], [1, 3, '(1, 3)'], [0, 1 + Math.sqrt(3), '(0, 1 + √3)']];
    pts.forEach(([x, y]) => dot(ctx, ax.X(x), ax.Y(y), fc, true, 9));
    label(ctx, '(−3, 1)', ax.X(-3), ax.Y(1), { side: 'below', gap: 34 });
    label(ctx, '(0, 1 + √3)', ax.X(0), ax.Y(1 + Math.sqrt(3)), { side: 'below', gap: 56 });
    text(ctx, '$\\kf(x) = \\sqrt{x + 3} + 1$', ax.X(1.9), ax.Y(3.75), fc, { size: 24, weight: 600, align: 'right', tex: true });
    hits = [[-3, 1, '(−3, 1), the closed end'], ...pts].map(([x, y, name]) => ({ x: ax.X(x), y: ax.Y(y), r: 18, name }));
  }
  still(d, draw);
})();

/* Example 1.5: the dropped ball beside s(t) = −16t² + 100 on [0, 2.5], on one height scale. The axes are
   the book's, 0 to 3 s by 0 to 100 ft. */
(function () {
  const d = sim('sim-falling-ball', 520);
  const s = (t) => -16 * t * t + 100, END = 2.5, TABLE = [0, 0.5, 1, 1.5, 2, 2.5];
  const cy = cycle(() => END, 1.2);
  const BOX = { l: 470, r: 1290, t: 100, b: 450 }, BX = 270, R = 18;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), t = cy.now(), h = s(t);
    const ax = axes(ctx, BOX, [0, 3], [0, 100], { xl: 't, time in seconds', yl: 's(t), height in feet', yc: fc, nx: 6, ny: 5, fx: (v) => fmt(v, 1) });
    line(ctx, BX - 90, ax.Y(0), BX + 90, ax.Y(0), PAL.ink, 3);
    plot(ctx, ax, s, alpha(fc, 0.25), { x: [0, END] });
    if (t > 0) plot(ctx, ax, s, fc, { x: [0, t] });
    TABLE.forEach((ti) => dot(ctx, ax.X(ti), ax.Y(s(ti)), fc, t >= ti, 8));
    drop(ctx, BX + R + 6, ax.Y(h), ax.X(t), ax.Y(h));
    dot(ctx, BX, ax.Y(h) - R, PAL.ink, true, R);
    dot(ctx, ax.X(t), ax.Y(h), PAL.ink, true, 9);
    headline(ctx, t >= END ? 'At t = 2.5 s the ball reaches the ground: the domain is [0, 2.5].' : `At t = ${fmt(t, 2)} s the ball is ${fmt(h, 1)} ft above the ground.`);
    tex(d.readout, `\\ks(${n(t)}) = -16(${n(t)})^2 + 100 = ${n(h, 1)}`, false, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 1.11: two points x₁ < x₂ on (a) 3x and (b) −x³. Axes fixed at −2 to 2 by −8 to 8, which hold −x³ on [−2, 2]. */
(function () {
  const d = sim('sim-increasing', 520);
  const FN = { a: (x) => 3 * x, b: (x) => -(x ** 3) };
  const pick = choice(d.controls, { label: '', options: [{ value: 'a', label: '(a) f(x) = 3x' }, { value: 'b', label: '(b) f(x) = −x³' }], value: 'a', aria: 'which function' });
  const GAP = 0.05;
  const x1 = ctl(d.controls, { label: 'x_1', cls: '', key: 'x1', min: -2, max: 2 - GAP, step: 0.01, value: -1, unit: '', dec: 2, onInput: () => { if (x2.v < x1.v + GAP) x2.set(x1.v + GAP); } });
  const x2 = ctl(d.controls, { label: 'x_2', cls: '', key: 'x2', min: -2 + GAP, max: 2, step: 0.01, value: 0.5, unit: '', dec: 2, onInput: () => { if (x1.v > x2.v - GAP) x1.set(x2.v - GAP); } });
  const f = (x) => FN[pick.value](x);
  const P1 = drag(d, { x: x1, y: f }), P2 = drag(d, { x: x2, y: f });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 60, b: 450 };
  /* the fewest decimals that tell two values apart */
  const apart = (p, q) => { let k = 2; while (k < 6 && fmt(p, k) === fmt(q, k)) k++; return k; };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), k = pick.k, fa = FN[pick.from], fb = FN[pick.value];
    const ax = axes(ctx, BOX, [-2, 2], [-8, 8], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    plot(ctx, ax, (x) => fa(x) + (fb(x) - fa(x)) * k, fc);
    [[x1, P1, 'x_1'], [x2, P2, 'x_2']].forEach(([s, P, name]) => {
      const x = s.v, y = f(x);
      drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0)); drop(ctx, ax.X(x), ax.Y(y), ax.X(0), ax.Y(y));
      text(ctx, name, ax.X(x), ax.Y(0) + (y > 0 ? 24 : -24), PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      P.draw(ctx, ax, PAL.ink);
    });
    const y1 = f(x1.v), y2 = f(x2.v), dec = apart(y1, y2), rel = y1 < y2 ? '\\lt' : y1 > y2 ? '\\gt' : '=';
    ro.set(`x_1 = ${n(x1.v)} \\lt x_2 = ${n(x2.v)} \\qquad \\kf(x_1) = ${n(y1, dec)} ${rel} \\kf(x_2) = ${n(y2, dec)}`);
  }
  still(d, draw);
})();

/* Figure 1.12: the composite map g ∘ f of the book, each input's two steps lit in turn. */
(function () {
  const d = sim('sim-composite-map', 600);
  const F_OF = { 1: 0, 2: 1, 3: 0 }, G_OF = { 0: 4, 1: 5, 2: 3, 3: 5 };
  const pick = choice(d.controls, { label: 'x', options: [1, 2, 3].map((v) => ({ value: String(v), label: String(v) })), value: '1', ms: 2700, aria: 'input' });
  const ro = readout(d);
  const L = 230, M = 700, R = 1170;
  const AT = { L: { 1: 270, 2: 340, 3: 410 }, M: { 0: 285, 1: 350, 2: 450, 3: 510 }, R: { 4: 285, 5: 350, 3: 475 } };
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const grow = (ctx, x1, y1, x2, y2, color, k, w) => { if (k > 0) arrow(ctx, x1, y1, x1 + (x2 - x1) * k, y1 + (y2 - y1) * k, color, w); };
  function draw() {
    const { ctx } = begin(d.c);
    const cf = F.ref('map-f'), cg = F.ref('map-g'), cc = C('function');
    const x = +pick.value, fx = F_OF[x], gfx = G_OF[fx], k = pick.k * 3, k1 = clamp(k), k2 = clamp(k - 1), k3 = clamp(k - 2);
    headline(ctx, `First $\\kf$ sends ${x} to ${fx}, then $\\kg$ sends ${fx} to ${gfx}.`);
    ellipse(ctx, L, 340, 100, 140, cf);
    ellipse(ctx, M, 350, 140, 200, cg); ellipse(ctx, M, 300, 100, 100, cf);
    ellipse(ctx, R, 350, 140, 200, cg); ellipse(ctx, R, 300, 100, 100, cc);
    const name = (s, x0, y0, color) => text(ctx, s, x0, y0, color, { size: 20, weight: 600, align: 'center', tex: true });
    name('domain of $\\kf$', L, 178, cf); name('domain of $\\kg\\circ\\kf$', L, 508, cc);
    name('domain of $\\kg$', M, 108, cg); name('range of $\\kf$', M, 240, cf);
    name('range of $\\kg$', R, 108, cg); name('range of $\\kg\\circ\\kf$', R, 240, cc);
    Object.entries(AT).forEach(([col, ys]) => Object.entries(ys).forEach(([v, y]) => text(ctx, v, { L, M, R }[col], y, PAL.ink, { size: 24, align: 'center' })));
    Object.entries(F_OF).forEach(([a, b]) => { if (+a !== x) arrow(ctx, L + 22, AT.L[a], M - 22, AT.M[b], alpha(cf, 0.35), 3); });
    Object.entries(G_OF).forEach(([a, b]) => { if (+a !== fx) arrow(ctx, M + 22, AT.M[a], R - 22, AT.R[b], alpha(cg, 0.35), 3); });
    arrow(ctx, L + 22, AT.L[x], M - 22, AT.M[fx], alpha(cf, 0.35), 3);
    arrow(ctx, M + 22, AT.M[fx], R - 22, AT.R[gfx], alpha(cg, 0.35), 3);
    grow(ctx, L + 22, AT.L[x], M - 22, AT.M[fx], cf, k1, 5);
    grow(ctx, M + 22, AT.M[fx], R - 22, AT.R[gfx], cg, k2, 5);
    text(ctx, '$\\kf$', (L + M) / 2, 300, cf, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kg$', (M + R) / 2, 300, cg, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    if (k3 > 0) {
      const a = [L + 18, AT.L[x] - 18], b = [R - 18, AT.R[gfx] - 18], q = [M, 40];
      const arc = Array.from({ length: 61 }, (_, i) => { const t = i / 60, u = 1 - t; return [u * u * a[0] + 2 * u * t * q[0] + t * t * b[0], u * u * a[1] + 2 * u * t * q[1] + t * t * b[1]]; });
      const pts = partial(arc, k3);
      ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.beginPath(); pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.stroke(); ctx.restore();
      const [p, r] = pts.slice(-2);
      if (p && r) arrow(ctx, p[0], p[1], r[0], r[1], cc, 4);
      if (k3 >= 1) text(ctx, '$\\kg\\circ\\kf$', arc[14][0], arc[14][1] - 24, cc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    }
    ro.set(`(\\kg\\circ\\kf)(${x}) = \\kg(\\kf(${x})) = \\kg(${fx}) = ${gfx}`);
  }
  still(d, draw);
})();

/* Figures 1.13 and 1.14: a point and its partner at −x on an even and an odd function. Axes fixed at
   −3 to 3 by −6 to 6, which hold the book's three curves where they matter. */
(function () {
  const d = sim('sim-symmetry', 520);
  const FN = { a: (x) => x ** 4 - 2 * x * x - 3, b: (x) => x ** 3 - 4 * x, abs: (x) => Math.abs(x) };
  const pick = choice(d.controls, { label: '', options: [{ value: 'a', label: '(a) x⁴ − 2x² − 3' }, { value: 'b', label: '(b) x³ − 4x' }, { value: 'abs', label: '|x|' }], value: 'a', aria: 'which function' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 3, step: 0.01, value: 1.5, unit: '', dec: 2 });
  const f = (x) => FN[pick.value](x);
  const P = drag(d, { x: xs, y: f });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 90, b: 460 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), k = pick.k, fa = FN[pick.from], fb = FN[pick.value], odd = pick.value === 'b';
    const ax = axes(ctx, BOX, [-3, 3], [-6, 6], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    plot(ctx, ax, (x) => fa(x) + (fb(x) - fa(x)) * k, fc);
    const x = xs.v, y = f(x), ym = f(-x);
    const inside = (v) => v >= -6 && v <= 6;
    if (inside(y) && inside(ym)) line(ctx, ax.X(x), ax.Y(y), ax.X(-x), ax.Y(ym), alpha(PAL.ink, 0.5), 2.5, [10, 10]);
    if (inside(ym)) dot(ctx, ax.X(-x), ax.Y(ym), PAL.ink, false, 9);
    P.draw(ctx, ax, PAL.ink);
    headline(ctx, odd ? 'Odd: $\\kf(-x) = -\\kf(x)$, so $(-x, -y)$ is on the graph with $(x, y)$.' : 'Even: $\\kf(-x) = \\kf(x)$, so $(-x, y)$ is on the graph with $(x, y)$.');
    ro.set(odd ? `\\kf(${n(-x)}) = ${n(ym)} = -\\kf(${n(x)})` : `\\kf(${n(-x)}) = ${n(ym)} = \\kf(${n(x)})`, undefined, { form: odd });
  }
  still(d, draw);
})();

/* Example 1.2's three functions with their domains along the x-axis and their ranges along the y-axis.
   Axes fixed at −4 to 8 by −4 to 12, which hold all three around the points the example turns on. */
(function () {
  const d = sim('sim-domain-finder', 540);
  const FN = {
    a: { f: (x) => (x - 4) ** 2 + 5, rule: '(x-4)^2+5', at: (x) => `(${n(x)}-4)^2+5`, dom: [-Infinity, Infinity], ran: [5, Infinity], domS: '(-\\infty,\\infty)', ranS: '\\{y\\mid y\\ge 5\\}', sp: 4 },
    b: { f: (x) => (x >= -2 / 3 ? Math.sqrt(3 * x + 2) - 1 : NaN), rule: '\\sqrt{3x+2}-1', at: (x) => `\\sqrt{3(${n(x)})+2}-1`, dom: [-2 / 3, Infinity], ran: [-1, Infinity], domS: '\\{x\\mid x\\ge -2/3\\}', ranS: '\\{y\\mid y\\ge -1\\}', sp: -2 / 3, pieces: [{ f: (x) => Math.sqrt(3 * x + 2) - 1, x: [-2 / 3, 8], ends: '[-' }], why: '$3x + 2$ is negative there' },
    c: { f: (x) => 3 / (x - 2), rule: '\\dfrac{3}{x-2}', at: (x) => `\\dfrac{3}{${n(x)}-2}`, dom: [-Infinity, Infinity], ran: [-Infinity, Infinity], hole: { x: 2, y: 0 }, domS: '\\{x\\mid x\\ne 2\\}', ranS: '\\{y\\mid y\\ne 0\\}', sp: 2, opts: { poles: [2] }, why: 'its denominator is zero there' },
  };
  const pick = choice(d.controls, { label: '\\kf(x)', options: [{ value: 'a', label: '(x − 4)² + 5' }, { value: 'b', label: '√(3x + 2) − 1' }, { value: 'c', label: '3/(x − 2)' }], value: 'a', aria: 'which function' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -4, max: 8, step: 0.01, value: 3, unit: '', dec: 2, specials: [{ at: () => FN[pick.value].sp }] });
  const P = drag(d, { x: xs, y: (x) => FN[pick.value].f(x) });
  const ro = readout(d);
  const BOX = { l: 230, r: 1230, t: 90, b: 470 };
  const band = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.3), 12);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), fn = FN[pick.value], x = xs.v, y = fn.f(x), ok = Number.isFinite(y);
    const ax = axes(ctx, BOX, [-4, 8], [-4, 12], { xl: 'x', yl: 'y', nx: 6, ny: 4 });
    const cx = (v) => ax.X(Math.min(8, Math.max(-4, v))), cyv = (v) => ax.Y(Math.min(12, Math.max(-4, v)));
    const open = (px, py) => { dot(ctx, px, py, PAL.panel, true, 8); dot(ctx, px, py, PAL.ink, false, 8); };
    [...new Set([pick.from, pick.value])].forEach((v) => pick.only(ctx, v, () => {
      const g = FN[v];
      band(ctx, cx(g.dom[0]), ax.Y(0), cx(g.dom[1]), ax.Y(0)); band(ctx, ax.X(0), cyv(g.ran[0]), ax.X(0), cyv(g.ran[1]));
      if (Number.isFinite(g.dom[0])) dot(ctx, ax.X(g.dom[0]), ax.Y(0), PAL.ink, true, 8);
      if (Number.isFinite(g.ran[0])) dot(ctx, ax.X(0), ax.Y(g.ran[0]), PAL.ink, true, 8);
      if (g.hole) { open(ax.X(g.hole.x), ax.Y(0)); open(ax.X(0), ax.Y(g.hole.y)); }
      plot(ctx, ax, g.pieces ?? g.f, fc, g.opts);
    }));
    if (ok) { drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0)); drop(ctx, ax.X(x), ax.Y(y), ax.X(0), ax.Y(y)); P.draw(ctx, ax, PAL.ink); }
    else { P.draw(ctx, ax, PAL.ink); dot(ctx, ax.X(x), ax.Y(0), PAL.ink, false, 10); }
    headline(ctx, ok ? `$x = ${n(x)}$ is in the domain, and $\\kf(${n(x)}) = ${n(y)}$ is in the range.` : `$x = ${n(x)}$ is not in the domain: ${fn.why}.`);
    ro.set(ok ? `\\kf(${n(x)}) = ${fn.at(x)} = ${n(y)}` : `\\kf(${n(x)}) = ${fn.at(x)}\\ \\text{is not a real number}`,
      `domain $${fn.domS}$, range $${fn.ranS}$`, { form: pick.value });
  }
  still(d, draw);
})();

/* Example 1.9: an original price through the sale f(x) = 0.80x and the coupon g(y) = 0.85y, on three
   price lines fixed at 0 to 200 dollars. */
(function () {
  const d = sim('sim-discount-pipeline', 470);
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 200, step: 1, value: 100, unit: 'dollars', dec: 0, aria: 'original price' });
  const order = choice(d.controls, { label: '', options: [{ value: 'sale', label: 'sale first' }, { value: 'coupon', label: 'coupon first' }], value: 'sale', aria: 'which discount comes first' });
  const ro = readout(d);
  const L = 300, R = 1260, ROWS = [130, 260, 390], X = (v) => L + ((R - L) * v) / 200;
  const STEP = { sale: { k: 0.8, s: '$\\kf(x) = 0.80x$', ref: 'sale' }, coupon: { k: 0.85, s: '$\\kg(y) = 0.85y$', ref: 'coupon' } };
  function draw() {
    const { ctx } = begin(d.c);
    const first = order.value, second = first === 'sale' ? 'coupon' : 'sale';
    const k1 = order.mix((v) => STEP[v].k), mid = x.v * k1, end = x.v * 0.68;
    const c1 = order.mixColor((v) => F.ref(STEP[v].ref)), c2 = order.mixColor((v) => F.ref(STEP[v === 'sale' ? 'coupon' : 'sale'].ref));
    headline(ctx, first === 'sale' ? `${fmt(x.v, 0)} dollars is ${fmt(mid, 2)} on sale, and ${fmt(end, 2)} with the coupon too.` : `${fmt(x.v, 0)} dollars is ${fmt(mid, 2)} with the coupon, and ${fmt(end, 2)} on sale too.`);
    ROWS.forEach((y) => { line(ctx, L, y, R, y, PAL.muted, 2); F.scale(ctx, X, 0, 200, 20, y, '', 2); });
    text(ctx, 'original', L - 30, ROWS[0], PAL.ink, { size: 22, weight: 600, align: 'right' });
    text(ctx, first === 'sale' ? 'sale price' : 'with coupon', L - 30, ROWS[1], c1, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'final price', L - 30, ROWS[2], PAL.ink, { size: 22, weight: 600, align: 'right' });
    [25, 75, 125, 175].forEach((v) => {
      arrow(ctx, X(v), ROWS[0] + 12, X(v * k1), ROWS[1] - 12, alpha(c1, 0.3), 2);
      arrow(ctx, X(v * k1), ROWS[1] + 12, X(v * 0.68), ROWS[2] - 12, alpha(c2, 0.3), 2);
    });
    arrow(ctx, X(x.v), ROWS[0] + 12, X(mid), ROWS[1] - 12, c1, 4);
    arrow(ctx, X(mid), ROWS[1] + 12, X(end), ROWS[2] - 12, c2, 4);
    [[x.v, ROWS[0]], [mid, ROWS[1]], [end, ROWS[2]]].forEach(([v, y]) => dot(ctx, X(v), y, PAL.ink, true, 9));
    text(ctx, `${first === 'sale' ? 'sale' : 'coupon'}  ${STEP[first].s}`, R, (ROWS[0] + ROWS[1]) / 2 - 6, c1, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, `${second === 'sale' ? 'sale' : 'coupon'}  ${STEP[second].s}`, R, (ROWS[1] + ROWS[2]) / 2 - 6, c2, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    ro.set(first === 'sale' ? `\\kg(\\kf(${fmt(x.v, 0)})) = 0.85(0.80\\cdot ${fmt(x.v, 0)}) = ${fmt(end, 2)}` : `\\kf(\\kg(${fmt(x.v, 0)})) = 0.80(0.85\\cdot ${fmt(x.v, 0)}) = ${fmt(end, 2)}`, undefined, { form: first });
  }
  still(d, draw);
})();
};
