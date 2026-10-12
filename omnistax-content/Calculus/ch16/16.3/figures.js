/* Figures for section 16.3 Conservative Vector Fields. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, dot, text, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const fit = (xr, yr, t, h, cx = 700) => { const s = h / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b: t + h }; };
const ticks = (hi, dec = 0) => (v) => (Math.abs(v - hi) < 1e-9 ? '' : fmt(v, dec).replace('-', '−'));
function path(ctx, ax, r, t0, t1, color, w = 5, dash, N = 200) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= N; i++) { const p = r(t0 + ((t1 - t0) * i) / N); if (i) ctx.lineTo(ax.X(p[0]), ax.Y(p[1])); else ctx.moveTo(ax.X(p[0]), ax.Y(p[1])); }
  ctx.stroke(); ctx.restore();
}
/* the vector line integral of F along r over [0, 1] by Simpson's rule */
function lineInt(Fv, r, m = 400) {
  const h = 1 / m, g = (t) => { const p = r(t), a = r(Math.min(1, t + 1e-5)), b = r(Math.max(0, t - 1e-5)), dt = Math.min(1, t + 1e-5) - Math.max(0, t - 1e-5), v = Fv(p); return v[0] * (a[0] - b[0]) / dt + v[1] * (a[1] - b[1]) / dt; };
  let s = g(0) + g(1); for (let i = 1; i < m; i++) s += (i % 2 ? 4 : 2) * g(i * h); return (s * h) / 3;
}

/* Figure 16.26: Example 16.27's r(t) = ⟨cos t, sin(2t)/2⟩, 0 ≤ t ≤ 2π, traced up to t; it passes the origin at π/2 and 3π/2.
   Axes −1.5 to 1.5 by −0.75 to 0.75, one scale. */
(function () {
  const d = sim('sim-figure-eight', 480);
  const r = (t) => [Math.cos(t), Math.sin(2 * t) / 2];
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: TAU, step: 0.01, value: 4, unit: '', dec: 2, specials: [{ at: Math.PI / 2 }, { at: (3 * Math.PI) / 2 }, { at: TAU }] });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), cc = C('curve'), t = ts.v, p = r(t);
    const ax = axes(ctx, fit([-1.5, 1.5], [-0.75, 0.75], 30, 400), [-1.5, 1.5], [-0.75, 0.75], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: ticks(1.5, 1), fy: ticks(0.75, 2) });
    path(ctx, ax, r, 0, TAU, alpha(cc, 0.3), 3);
    if (t > 1e-3) path(ctx, ax, r, 0, t, cc, 5);
    dot(ctx, ax.X(1), ax.Y(0), PAL.panel, true, 8); dot(ctx, ax.X(1), ax.Y(0), PAL.ink, false, 9);
    dot(ctx, ax.X(p[0]), ax.Y(p[1]), C('point'), true, 9);
    text(ctx, '$\\kvecr(0)$', ax.X(1) + 10, ax.Y(0) - 22, PAL.ink, { size: 20, tex: true, bg: PAL.panel });
    hits.length = 0; hits.push({ x: ax.X(p[0]), y: ax.Y(p[1]), r: 14, name: `r(${n2(t)}) = (${n2(p[0])}, ${n2(p[1])})` });
    const atO = Math.abs(p[0]) < 0.02 && Math.abs(p[1]) < 0.02;
    tex(d.readout, `\\kvecr(${n2(t)})=\\left\\langle \\cos t,\\tfrac{\\sin 2t}{2}\\right\\rangle=\\langle ${n2(p[0])},${n2(p[1])}\\rangle` +
      (atO ? `,\\quad \\kvecr\\left(\\tfrac{\\pi}{2}\\right)=\\kvecr\\left(\\tfrac{3\\pi}{2}\\right)=\\langle 0,0\\rangle` : Math.abs(t - TAU) < 0.02 ? `=\\kvecr(0)` : ''));
  }
  still(d, draw);
})();

/* Figure 16.28 + 16.29: a path C from the origin to the dragged end (a, b), bent by k, in a field; for ∇f with f = x² + 2y²
   (Example 16.28) the line integral is f(a, b) − f(0, 0) however C bends, for ⟨x²y, y + 5⟩ (Example 16.30) it is not.
   Axes −1 to 3, one scale. */
(function () {
  const d = sim('sim-path-independence', 600);
  const FIELDS = {
    grad: { F: ([x, y]) => [2 * x, 4 * y], f: (x, y) => x * x + 2 * y * y },
    not: { F: ([x, y]) => [x * x * y, y + 5], f: null },
  };
  const pick = choice(d.controls, { label: 'F', options: [{ value: 'grad', label: '⟨2x, 4y⟩ = ∇f' }, { value: 'not', label: '⟨x²y, y + 5⟩' }], value: 'grad', ms: 0 });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -1, max: 2.8, step: 0.05, value: 2, unit: '', dec: 2 });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -1, max: 2.8, step: 0.05, value: 2, unit: '', dec: 2 });
  const ks = ctl(d.controls, { label: 'bend', cls: '', key: 'k', min: -1, max: 1, step: 0.05, value: 0, unit: '', dec: 2, specials: [{ at: 0 }] });
  const P = drag(d, { x: as, y: bs });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), o = FIELDS[pick.value], vf = C('vector-field'), cc = C('curve'), a = as.v, b = bs.v, k = ks.v;
    const ax = axes(ctx, fit([-1, 3], [-1, 3], 30, 540), [-1, 3], [-1, 3], { xl: 'x', yl: 'y', nx: 4, ny: 4, fx: ticks(3), fy: ticks(3) });
    ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
    if (o.f) [1, 2, 4, 8, 12].forEach((c) => path(ctx, ax, (t) => [Math.sqrt(c) * Math.cos(TAU * t), Math.sqrt(c / 2) * Math.sin(TAU * t)], 0, 1, alpha(C('function'), 0.3), 2, [10, 10]));
    ctx.restore();
    SP.field2(ctx, ax, o.F, alpha(vf, 0.4), { n: [8, 8], w: 2 });
    const L = Math.hypot(a, b) || 1, nx = -b / L, ny = a / L;
    const r = (t) => { const w = k * 2 * t * (1 - t) * L; return [a * t + nx * w, b * t + ny * w]; };
    path(ctx, ax, r, 0, 1, cc, 5);
    const m = r(0.55), m2 = r(0.6);
    F.arrow(ctx, ax.X(m[0]), ax.Y(m[1]), ax.X(m2[0]), ax.Y(m2[1]), cc, 5);
    dot(ctx, ax.X(0), ax.Y(0), PAL.ink, true, 8);
    const p = P.draw(ctx, ax, C('point'));
    hits.length = 0; if (p) hits.push({ x: p.x, y: p.y, r: 16, name: `the end of C, (${n2(a)}, ${n2(b)})` });
    if (o.f) [1, 2, 4, 8].forEach((c) => hits.push({ x: ax.X(Math.sqrt(c)), y: ax.Y(0), r: 10, name: `the level curve x² + 2y² = ${c}` }));
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 12, name: 'the start of C, (0, 0)' });
    const W = lineInt(o.F, r);
    tex(d.readout, o.f
      ? `\\int_{\\kC}\\kvecF\\cdot d\\mathbf{r}=${hue('integral', n2(W, 3))}=\\kf(${n2(a)},${n2(b)})-\\kf(0,0)=${hue('function', n2(o.f(a, b), 3))}`
      : `\\int_{\\kC}\\kvecF\\cdot d\\mathbf{r}=${hue('integral', n2(W, 3))}\\;\\text{depends on the bend: no potential function}`);
  }
  still(d, draw);
})();

/* Figure 16.31: Example 16.30's paths C₁ (y = x) and C₂ (y = x²) from (0, 0) to (1, 1) in F = ⟨x²y, y + 5⟩; a still copy.
   Axes −0.25 to 1.25, one scale. */
(function () {
  const d = sim('fig-two-paths', 480);
  function draw() {
    const { ctx } = begin(d.c), c1 = F.ref('path-1'), c2 = F.ref('path-2');
    const ax = axes(ctx, fit([-0.25, 1.25], [-0.25, 1.25], 30, 420), [-0.25, 1.25], [-0.25, 1.25], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: ticks(1.25, 2), fy: ticks(1.25, 2) });
    SP.field2(ctx, ax, ([x, y]) => [x * x * y, y + 5], alpha(C('vector-field'), 0.5), { n: [6, 6], w: 2 });
    path(ctx, ax, (t) => [t, t], 0, 1, c1, 5); path(ctx, ax, (t) => [t, t * t], 0, 1, c2, 5);
    F.arrow(ctx, ax.X(0.5), ax.Y(0.5), ax.X(0.56), ax.Y(0.56), c1, 5); F.arrow(ctx, ax.X(0.6), ax.Y(0.36), ax.X(0.66), ax.Y(0.4356), c2, 5);
    text(ctx, '$C_{1}$', ax.X(0.38), ax.Y(0.52), c1, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$C_{2}$', ax.X(0.78), ax.Y(0.5), c2, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    dot(ctx, ax.X(0), ax.Y(0), PAL.ink, true, 8); dot(ctx, ax.X(1), ax.Y(1), PAL.ink, true, 8);
  }
  still(d, draw);
})();
};
