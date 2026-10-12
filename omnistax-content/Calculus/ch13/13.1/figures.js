/* Figures for section 13.1 Vector-Valued Functions and Space Curves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, arrow, dot, text, headline, register, readout, cycle, fmt, hover, tex } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI;
const sg = (v) => (v < 0 ? `-${n(-v)}` : `+${n(v)}`);
const tl = (ctx, s, x, y, color, align = 'left') => text(ctx, s, x, y, color, { size: 22, tex: true, align, bg: PAL.panel });
/* a box of the given height holding the window at one scale in x and y, centred on the canvas */
const fit = (win, t, b) => {
  const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]);
  return { l: 700 - w / 2, r: 700 + w / 2, t, b };
};

/* Figure 13.2 + 13.3: the position vector sweeping the ellipse of Example 13.2, part a's r(t) for 0 ≤ t ≤ 2π or part b's
   r(2t) for 0 ≤ t ≤ π, t running at one rate (2π in 6 s), so part b closes in half the time. Window x ±6, y ±4, one scale. */
(function () {
  const d = sim('sim-ellipse', 560);
  const part = choice(d.controls, { label: 'part', options: [{ value: 'a', label: 'a: 4 cos t, 3 sin t' }, { value: 'b', label: 'b: 4 cos 2t, 3 sin 2t' }], value: 'a', onInput: () => cy.reset() });
  const k = () => (part.value === 'b' ? 2 : 1), T = () => (2 * PI) / k();
  const cy = cycle(T, 1.2), ro = readout(d);
  const P = (t) => [4 * Math.cos(k() * t), 3 * Math.sin(k() * t)];
  const WIN = { x: [-6, 6], y: [-4, 4] }, BOX = fit(WIN, 92, 520);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), t = Math.min(cy.now(), T()), [x, y] = P(t);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 12, ny: 8 });
    const X0 = ax.X(0), Y0 = ax.Y(0);
    hits.length = 0;
    for (let i = 0; i < 8; i++) {
      const s = (i * PI) / 4 / k(), [u, v] = P(s);
      arrow(ctx, X0, Y0, ax.X(u), ax.Y(v), alpha(cc, 0.3), 3);
      hits.push({ x: ax.X(u), y: ax.Y(v), r: 14, name: `r(${part.value === 'b' ? ['0', 'π/8', 'π/4', '3π/8', 'π/2', '5π/8', '3π/4', '7π/8'][i] : ['0', 'π/4', 'π/2', '3π/4', 'π', '5π/4', '3π/2', '7π/4'][i]}) = ⟨${fmt(u, 2)}, ${fmt(v, 2)}⟩, a vector of the table` });
    }
    F.polar.path(ctx, ax, P, [0, T()], cc, { upto: t, marks: 3 });
    arrow(ctx, X0, Y0, ax.X(x), ax.Y(y), cc, 5);
    dot(ctx, ax.X(x), ax.Y(y), pc, true, 9);
    tl(ctx, '$\\kvecr(t)$', ax.X(x) + (x >= 0 ? 16 : -16), ax.Y(y) + (y >= 0 ? -22 : 22), cc, x >= 0 ? 'left' : 'right');
    hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the tip of r(t) at t = ${fmt(t, 2)}` });
    headline(ctx, `t = ${fmt(t, 2)}: r(t) = ⟨${fmt(x, 2)}, ${fmt(y, 2)}⟩`);
    const arg = part.value === 'b' ? '2t' : 't';
    ro.set(`\\kvecr(t)=4\\cos ${arg}\\,\\kveci+3\\sin ${arg}\\,\\kvecj=${n(x)}\\,\\kveci${sg(y)}\\,\\kvecj`, undefined, { form: part.value });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (2 * PI) / 6), draw });
})();

/* Figure 13.4: the helix r(t) = 4 cos t i + 4 sin t j + t k for 0 ≤ t ≤ 4π (or its elliptical cousin with 3 sin t), the
   point climbing with its position vector and its shadow on the xy-plane. Box x, y ±4.5, z 0 to 13; 8 s a climb. */
(function () {
  const d = sim('sim-helix');
  const T1 = 4 * PI, box = [[-4.5, 4.5], [-4.5, 4.5], [0, 13]];
  const S = F.space3d(d, { box, h: 600 });
  const cross = choice(d.controls, { label: '\\text{cross-section}', options: [{ value: 'circle', label: 'circle' }, { value: 'ellipse', label: 'ellipse' }], value: 'circle', onInput: () => cy.reset() });
  const cy = cycle(() => T1, 1.2), ro = readout(d);
  function draw() {
    const b = cross.value === 'ellipse' ? 3 : 4, r = (t) => [4 * Math.cos(t), b * Math.sin(t), t], cc = C('curve');
    const t = Math.min(cy.now(), T1), p = r(t), q = [p[0], p[1], 0];
    S.set('axes', SP.axes(box, { ticks: [4, 4, 4] }));
    S.set('curve', [...SP.curve(r, [0, T1], alpha(cc, 0.3), { n: 320, w: 3 }), ...SP.curve((u) => [4 * Math.cos(u), b * Math.sin(u), 0], [0, 2 * PI], alpha(cc, 0.45), { n: 120, w: 2.5, dash: [10, 10] })]);
    S.set('done', t > 0.02 ? SP.curve(r, [0, t], cc, { n: Math.max(8, Math.round(t * 26)), w: 5 }) : []);
    S.set('point', [
      ...SP.vector([0, 0, 0], p, cc, { name: '$\\kvecr(t)$', w: 4 }),
      { k: 'line', pts: [p, q], color: 'guide', w: 2.5, dash: [4, 8] },
      { k: 'dot', p: q, color: alpha(cc, 0.6), r: 6 },
      { k: 'dot', p, color: C('point'), r: 9 },
    ]);
    S.headline(`t = ${fmt(t, 2)}: r(t) = ⟨${fmt(p[0], 2)}, ${fmt(p[1], 2)}, ${fmt(p[2], 2)}⟩`);
    ro.set(`\\kvecr(t)=4\\cos t\\,\\kveci+${b}\\sin t\\,\\kvecj+t\\,\\kveck=${n(p[0])}\\,\\kveci${sg(p[1])}\\,\\kvecj${sg(p[2])}\\,\\kveck`, undefined, { form: cross.value });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T1 / 8), draw });
})();

/* Sim: Example 13.3a's r(t) = (t² − 3t + 4) i + (4t + 3) j for 1.5 ≤ t ≤ 4.5 and its limit L = 4i + 15j at t = 3; the gap
   r(t) − L drawn from L, its components dashed along the axes. Window x 0 to 12, y 6 to 22, one scale. */
(function () {
  const d = sim('sim-vector-limit', 600);
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 1.5, max: 4.5, step: 0.01, value: 4, unit: '', dec: 2, specials: [{ at: 3 }] });
  const P = (t) => [t * t - 3 * t + 4, 4 * t + 3], L = [4, 15];
  const grip = F.polar.grip(d, { t: ts, at: P, span: 0.6 });
  const WIN = { x: [0, 12], y: [6, 22] }, BOX = fit(WIN, 90, 560);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vc = C('vector'), lc = C('limit'), t = ts.v, [x, y] = P(t);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 6, ny: 8 });
    F.polar.path(ctx, ax, P, [1.5, 4.5], cc, { marks: 2 });
    const lx = ax.X(L[0]), ly = ax.Y(L[1]), px = ax.X(x), py = ax.Y(y), gap = Math.hypot(x - L[0], y - L[1]);
    if (gap > 1e-3) {
      line(ctx, lx, ly, px, ly, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
      line(ctx, px, ly, px, py, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
      arrow(ctx, lx, ly, px, py, vc, 4);
    }
    dot(ctx, lx, ly, lc, true, 10);
    tl(ctx, '$\\kvecL$', lx - 18, ly - 4, lc, 'right');
    grip.draw(ctx, ax, C('point'));
    if (gap > 0.4) tl(ctx, '$\\kvecr(t)$', px + 18, py + (t > 3 ? -18 : 18), cc);
    hits.length = 0;
    hits.push({ x: lx, y: ly, r: 14, name: 'L = 4i + 15j, the limit as t approaches 3' }, { x: px, y: py, r: 16, name: `r(${fmt(t, 2)}) = ⟨${fmt(x, 2)}, ${fmt(y, 2)}⟩; drag it along the curve` });
    if (gap > 1e-3) hits.push({ x: (lx + px) / 2, y: (ly + py) / 2, r: 14, name: `the gap r(t) − L = ⟨${fmt(x - 4, 2)}, ${fmt(y - 15, 2)}⟩` });
    headline(ctx, `t = ${fmt(t, 2)}: ‖r(t) − L‖ = ${fmt(gap, 2)}`);
    tex(d.readout, `\\lim_{t\\to 3}\\kvecr(t)=\\kvecL=4\\,\\kveci+15\\,\\kvecj,\\qquad \\kvecr(${n(t)})-\\kvecL=${n(x - 4)}\\,\\kveci${sg(y - 15)}\\,\\kvecj`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
