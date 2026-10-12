/* Figures for section 13.2 Calculus of Vector-Valued Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, arrow, dot, text, headline, register, readout, fmt, hover, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI;
const sg = (v) => (v < 0 ? `-${n(-v)}` : `+${n(v)}`);
const tl = (ctx, s, x, y, color, align = 'left') => text(ctx, s, x, y, color, { size: 22, tex: true, align, bg: PAL.panel });
const fit = (win, t, b) => {
  const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]);
  return { l: 700 - w / 2, r: 700 + w / 2, t, b };
};
const still = (d, draw) => register(d.fig, { update: () => {}, draw });

/* Sim: Example 13.4's r(t) = (3t + 4) i + (t² − 4t + 3) j; at r(t) the chord to r(t + Δt), the difference quotient drawn
   from r(t), and r′(t) = 3i + (2t − 4)j dashed. Window x 2 to 18, y −2 to 8, one scale; points outside are pinned. */
(function () {
  const d = sim('sim-difference-quotient', 600);
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -1, max: 4, step: 0.01, value: 1, unit: '', dec: 2 });
  const hs = ctl(d.controls, { label: '\\Delta t', cls: '', key: 'dt', min: -2, max: 2, step: 0.01, value: 1.5, unit: '', dec: 2, specials: [{ at: 0 }] });
  const P = (t) => [3 * t + 4, t * t - 4 * t + 3];
  const grip = F.polar.grip(d, { t: ts, at: P, span: 0.6 });
  const WIN = { x: [2, 18], y: [-2, 8] }, BOX = fit(WIN, 90, 560), ro = readout(d);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vc = C('vector'), t = ts.v, h = hs.v, [x, y] = P(t);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 8, ny: 10 });
    F.polar.path(ctx, ax, P, [-3, 6], cc, { marks: 2 });
    const px = ax.X(x), py = ax.Y(y), dv = [3, 2 * t - 4];
    hits.length = 0;
    arrow(ctx, px, py, ax.X(x + dv[0]), ax.Y(y + dv[1]), alpha(vc, 0.55), 4);
    line(ctx, px, py, ax.X(x + dv[0]), ax.Y(y + dv[1]), PAL.panel, 1.5, [8, 8]);
    tl(ctx, '$\\kvecrprime(t)$', ax.X(x + dv[0]) + 14, ax.Y(y + dv[1]) + (dv[1] > 0 ? -16 : 16), vc);
    hits.push({ x: ax.X(x + dv[0]), y: ax.Y(y + dv[1]), r: 16, name: `the tangent vector r′(t) = ⟨3, ${fmt(dv[1], 2)}⟩, the limit of the quotient` });
    let q = null;
    if (Math.abs(h) > 0.004) {
      const [u, v] = P(t + h), far = pinned(ctx, BOX, ax.X, ax.Y, u, v, PAL.muted);
      q = [3, 2 * t + h - 4];
      line(ctx, px, py, far.x, far.y, alpha(PAL.ink, 0.45), 2.5, [10, 10]);
      if (!far.out) { dot(ctx, far.x, far.y, C('point'), false, 9); tl(ctx, '$\\kvecr(t+\\Delta t)$', far.x + 16, far.y + 22, cc); }
      hits.push({ x: far.x, y: far.y, r: 16, name: `r(t + Δt) = ⟨${fmt(u, 2)}, ${fmt(v, 2)}⟩, at t + Δt = ${fmt(t + h, 2)}` });
      arrow(ctx, px, py, ax.X(x + q[0]), ax.Y(y + q[1]), vc, 5);
      hits.push({ x: ax.X(x + q[0]), y: ax.Y(y + q[1]), r: 16, name: `the difference quotient [r(t + Δt) − r(t)]/Δt = ⟨3, ${fmt(q[1], 2)}⟩` });
    }
    grip.draw(ctx, ax, C('point'));
    tl(ctx, '$\\kvecr(t)$', px - 16, py + (dv[1] > 0 ? 22 : -22), cc, 'right');
    hits.push({ x: px, y: py, r: 16, name: `r(t) = ⟨${fmt(x, 2)}, ${fmt(y, 2)}⟩; drag it along the curve` });
    headline(ctx, q ? `t = ${fmt(t, 2)}, Δt = ${fmt(h, 2)}: the quotient is ⟨3.00, ${fmt(q[1], 2)}⟩, r′(t) = ⟨3.00, ${fmt(dv[1], 2)}⟩`
      : `t = ${fmt(t, 2)}, Δt → 0: the quotient has become r′(t) = ⟨3.00, ${fmt(dv[1], 2)}⟩`);
    ro.set(q ? `\\frac{\\kvecr(t+\\Delta t)-\\kvecr(t)}{\\Delta t}=3\\,\\kveci+(2t+\\Delta t-4)\\,\\kvecj=3\\,\\kveci${sg(q[1])}\\,\\kvecj\\;\\longrightarrow\\;\\kvecrprime(t)=3\\,\\kveci${sg(dv[1])}\\,\\kvecj`
      : `\\kvecrprime(t)=\\lim_{\\Delta t\\to 0}\\frac{\\kvecr(t+\\Delta t)-\\kvecr(t)}{\\Delta t}=3\\,\\kveci+(2t-4)\\,\\kvecj=3\\,\\kveci${sg(dv[1])}\\,\\kvecj`, undefined, { form: !!q });
  }
  still(d, draw);
})();

/* Figure 13.5: r(t) and r′(t) on the unit circle (window ±2.5 by ±1.5) or on 13.1's ellipse 4 cos t i + 3 sin t j (window ±7 by
   ±5), with T(t) = r′/‖r′‖ dashed; t from 0 to 2π, the book's π/6 the default. One scale. */
(function () {
  const d = sim('sim-tangent-vector', 560);
  const CURVES = {
    circle: { P: (t) => [Math.cos(t), Math.sin(t)], D: (t) => [-Math.sin(t), Math.cos(t)], win: { x: [-2.5, 2.5], y: [-1.5, 1.5] }, nx: 10, ny: 6,
      r: '\\cos t\\,\\kveci+\\sin t\\,\\kvecj', rp: '-\\sin t\\,\\kveci+\\cos t\\,\\kvecj' },
    ellipse: { P: (t) => [4 * Math.cos(t), 3 * Math.sin(t)], D: (t) => [-4 * Math.sin(t), 3 * Math.cos(t)], win: { x: [-7, 7], y: [-5, 5] }, nx: 14, ny: 10,
      r: '4\\cos t\\,\\kveci+3\\sin t\\,\\kvecj', rp: '-4\\sin t\\,\\kveci+3\\cos t\\,\\kvecj' },
  };
  const pick = choice(d.controls, { label: 'curve', options: [{ value: 'circle', label: 'unit circle' }, { value: 'ellipse', label: 'ellipse' }], value: 'circle' });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: 2 * PI, step: 0.01, value: PI / 6, unit: '', dec: 2, specials: [{ at: PI / 6 }, { at: PI / 2 }] });
  const grip = F.polar.grip(d, { t: ts, at: (t) => CURVES[pick.value].P(t), span: 0.8 });
  const ro = readout(d), hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), K = CURVES[pick.value], BOX = fit(K.win, 90, 520);
    const cc = C('curve'), vc = C('vector'), t = ts.v, [x, y] = K.P(t), [a, b] = K.D(t), sp = Math.hypot(a, b), T = [a / sp, b / sp];
    const ax = axes(ctx, BOX, K.win.x, K.win.y, { xl: 'x', yl: 'y', nx: K.nx, ny: K.ny });
    F.polar.path(ctx, ax, K.P, [0, 2 * PI], cc, { marks: 3 });
    const X0 = ax.X(0), Y0 = ax.Y(0), px = ax.X(x), py = ax.Y(y);
    arrow(ctx, X0, Y0, px, py, cc, 4);
    arrow(ctx, px, py, ax.X(x + a), ax.Y(y + b), vc, 5);
    const same = Math.abs(sp - 1) < 0.02;
    if (!same) { arrow(ctx, px, py, ax.X(x + T[0]), ax.Y(y + T[1]), vc, 3); line(ctx, px, py, ax.X(x + T[0]), ax.Y(y + T[1]), PAL.panel, 1.5, [6, 6]); }
    grip.draw(ctx, ax, C('point'));
    const out = [Math.cos(Math.atan2(y, x)), Math.sin(Math.atan2(y, x))];
    tl(ctx, '$\\kvecr(t)$', (X0 + px) / 2 - out[1] * 28, (Y0 + py) / 2 - out[0] * 28, cc, 'center');
    tl(ctx, same ? '$\\kvecrprime(t)=\\kvecT(t)$' : '$\\kvecrprime(t)$', ax.X(x + a) + out[0] * 22, ax.Y(y + b) - out[1] * 22, vc, out[0] >= 0 ? 'left' : 'right');
    if (!same && sp > 1.6) tl(ctx, '$\\kvecT(t)$', ax.X(x + T[0]) + T[1] * 26, ax.Y(y + T[1]) + T[0] * 26, vc, 'center');
    hits.length = 0;
    hits.push({ x: px, y: py, r: 16, name: `r(${fmt(t, 2)}) = ⟨${fmt(x, 2)}, ${fmt(y, 2)}⟩; drag the point along the curve` },
      { x: ax.X(x + a), y: ax.Y(y + b), r: 16, name: `r′(t) = ⟨${fmt(a, 2)}, ${fmt(b, 2)}⟩, a tangent vector of length ${fmt(sp, 2)}` },
      { x: ax.X(x + T[0]), y: ax.Y(y + T[1]), r: 14, name: `T(t) = ⟨${fmt(T[0], 2)}, ${fmt(T[1], 2)}⟩, the unit tangent vector` });
    headline(ctx, `t = ${fmt(t, 2)}: r′(t) = ⟨${fmt(a, 2)}, ${fmt(b, 2)}⟩, ‖r′(t)‖ = ${fmt(sp, 2)}`);
    ro.set(`\\kvecrprime(t)=${K.rp},\\qquad \\kvecT(t)=\\frac{\\kvecrprime(t)}{\\|\\kvecrprime(t)\\|}=\\frac{${n(a)}\\,\\kveci${sg(b)}\\,\\kvecj}{${n(sp)}}=${n(T[0])}\\,\\kveci${sg(T[1])}\\,\\kvecj`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Sim: Example 13.4's r′(t) = 3i + (2t − 4)j integrated over [0, b]: n left-endpoint steps r′(tᵢ)Δt laid tip to tail from
   r(0) = 4i + 3j, their sum, and r(b) − r(0) dashed. Window x 2 to 20, y −3 to 10, one scale. */
(function () {
  const d = sim('sim-vector-integral', 560);
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.5, max: 5, step: 0.01, value: 4, unit: '', dec: 2 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 24, step: 1, value: 6, unit: '', dec: 0 });
  const P = (t) => [3 * t + 4, t * t - 4 * t + 3], Dv = (t) => [3, 2 * t - 4];
  const WIN = { x: [2, 20], y: [-3, 10] }, BOX = fit(WIN, 90, 520), ro = readout(d);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vc = C('vector'), ic = C('integral'), b = bs.v, m = Math.round(ns.v), h = b / m;
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 9, ny: 13 });
    F.polar.path(ctx, ax, P, [0, 5], cc, { upto: b, marks: 0 });
    let q = P(0); hits.length = 0;
    for (let i = 0; i < m; i++) {
      const [u, v] = Dv(i * h), e = [q[0] + u * h, q[1] + v * h];
      arrow(ctx, ax.X(q[0]), ax.Y(q[1]), ax.X(e[0]), ax.Y(e[1]), vc, m > 12 ? 3 : 4);
      hits.push({ x: ax.X(e[0]), y: ax.Y(e[1]), r: 10, name: `step ${i + 1}: r′(t${i})Δt = ⟨${fmt(u * h, 2)}, ${fmt(v * h, 2)}⟩` });
      q = e;
    }
    const r0 = P(0), rb = P(b), S = [q[0] - r0[0], q[1] - r0[1]], I = [3 * b, b * b - 4 * b];
    arrow(ctx, ax.X(r0[0]), ax.Y(r0[1]), ax.X(q[0]), ax.Y(q[1]), ic, 5);
    line(ctx, ax.X(r0[0]), ax.Y(r0[1]), ax.X(rb[0]), ax.Y(rb[1]), ic, 3, [10, 10]);
    dot(ctx, ax.X(r0[0]), ax.Y(r0[1]), C('point'), true, 9);
    dot(ctx, ax.X(rb[0]), ax.Y(rb[1]), C('point'), false, 9);
    tl(ctx, '$\\kvecr(0)$', ax.X(r0[0]) - 16, ax.Y(r0[1]) - 18, cc, 'right');
    tl(ctx, '$\\kvecr(b)$', ax.X(rb[0]) + 16, ax.Y(rb[1]) + (rb[1] > r0[1] ? -18 : 20), cc);
    hits.push({ x: ax.X(r0[0]), y: ax.Y(r0[1]), r: 14, name: 'r(0) = ⟨4, 3⟩, where the steps start' }, { x: ax.X(rb[0]), y: ax.Y(rb[1]), r: 14, name: `r(b) = ⟨${fmt(rb[0], 2)}, ${fmt(rb[1], 2)}⟩` });
    headline(ctx, `n = ${m}: the steps sum to ⟨${fmt(S[0], 2)}, ${fmt(S[1], 2)}⟩, and $\\int_{0}^{${n(b)}}\\kvecrprime(t)\\,dt=$ ⟨${fmt(I[0], 2)}, ${fmt(I[1], 2)}⟩`);
    ro.set(`\\int_{0}^{b}[3\\,\\kveci+(2t-4)\\,\\kvecj]\\,dt=\\Big[\\int_{0}^{b}3\\,dt\\Big]\\kveci+\\Big[\\int_{0}^{b}(2t-4)\\,dt\\Big]\\kvecj=${n(I[0])}\\,\\kveci${sg(I[1])}\\,\\kvecj`,
      `The ${m} steps sum to $${n(S[0])}\\,\\kveci${sg(S[1])}\\,\\kvecj.$`);
  }
  still(d, draw);
})();
};
