/* Figures for section 16.2 Line Integrals. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, cycle, begin, axes, arrow, dot, line, text, register, tex, fmt, hover } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
/* an equal-scale box holding the window [x0, x1] × [y0, y1], height h, centred at cx */
const fit = (xr, yr, t, h, cx = 700) => { const s = h / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b: t + h }; };
const ticks = (hi) => (v) => (Math.abs(v - hi) < 1e-9 ? '' : fmt(v, Number.isInteger(v) ? 0 : 1).replace('-', '−'));
/* ∫ of g over [a, b] by Simpson's rule on m panels */
function simpson(g, a, b, m = 400) { const h = (b - a) / m; let s = g(a) + g(b); for (let i = 1; i < m; i++) s += (i % 2 ? 4 : 2) * g(a + i * h); return (s * h) / 3; }
function path(ctx, ax, r, t0, t1, color, w = 5, dash, N = 160) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= N; i++) { const p = r(t0 + ((t1 - t0) * i) / N); if (i) ctx.lineTo(ax.X(p[0]), ax.Y(p[1])); else ctx.moveTo(ax.X(p[0]), ax.Y(p[1])); }
  ctx.stroke(); ctx.restore();
}
/* an arrowhead on r at t, pointing the way t runs (dir 1) or back (dir −1) */
function headOn(ctx, ax, r, t, dir, color, h = 1e-3) {
  const p = r(t), q = r(t + dir * h), ux = ax.X(q[0]) - ax.X(p[0]), uy = ax.Y(q[1]) - ax.Y(p[1]), L = Math.hypot(ux, uy) || 1;
  arrow(ctx, ax.X(p[0]) - (ux / L) * 14, ax.Y(p[1]) - (uy / L) * 14, ax.X(p[0]) + (ux / L) * 10, ax.Y(p[1]) + (uy / L) * 10, color, 5);
}
const dr = (r, t, h = 1e-5) => { const a = r(t + h), b = r(t - h); return a.map((x, i) => (x - b[i]) / (2 * h)); };

/* Figure 16.12 + 16.13 + 16.14: the sheet under z = f(x, y) along the upper half of the unit circle, cut into n pieces of
   arc length Δs = π/n with heights f(Pᵢ*); f = 2 (Example 16.14) or the stand-in f = 1 + y. Box [−1.3, 1.3] × [−0.3, 1.3] × [0, 2.6]. */
(function () {
  const d = sim('sim-scalar-sheet');
  const FN = { two: { f: () => 2, exact: TAU, ex: '2\\pi', tex: '2' }, rise: { f: (x, y) => 1 + y, exact: Math.PI + 2, ex: '\\pi+2', tex: '1+y' } };
  const r = (t) => [Math.cos(t), Math.sin(t)];
  const box = [[-1.3, 1.3], [-0.3, 1.3], [0, 2.6]];
  const pick = choice(d.controls, { label: 'f', options: [{ value: 'two', label: 'f(x, y) = 2' }, { value: 'rise', label: 'f(x, y) = 1 + y' }], value: 'two', ms: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 24, step: 1, value: 4, unit: '', dec: 0 });
  const S = F.space3d(d, { box, h: 540, pitch: [0.05, 1.4], turn: -2.0, tilt: 0.5 });
  function draw() {
    const o = FN[pick.value], f = o.f, n = ns.v, ds = Math.PI / n, ic = C('integral'), cc = C('curve');
    const faces = [], segs = []; let sum = 0;
    for (let i = 0; i < n; i++) {
      const t0 = i * ds, ts = (i + 0.5) * ds, [px, py] = r(ts), h = f(px, py); sum += h * ds;
      const m = 8;
      for (let k = 0; k < m; k++) {
        const a = r(t0 + (k * ds) / m), b = r(t0 + ((k + 1) * ds) / m);
        faces.push([[a[0], a[1], 0], [b[0], b[1], 0], [b[0], b[1], h], [a[0], a[1], h]]);
        segs.push([[a[0], a[1], h], [b[0], b[1], h]]);
      }
      const a = r(t0), b = r(t0 + ds);
      segs.push([[a[0], a[1], 0], [a[0], a[1], h]], [[b[0], b[1], 0], [b[0], b[1], h]]);
    }
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(f, { x: [-1.25, 1.25], y: [-0.25, 1.25] }, C('surface'), { n: 16, grid: 4, alpha: 0.18 }));
    S.set('sheet', [{ k: 'faces', faces, color: ic, alpha: 0.6 }, { k: 'segs', segs, color: 'ink', w: 1.5 }]);
    S.set('curves', [...SP.curve((t) => [...r(t), 0], [0, Math.PI], cc, { w: 5 }), ...SP.curve((t) => { const p = r(t); return [p[0], p[1], f(p[0], p[1])]; }, [0, Math.PI], cc, { w: 3, dash: [10, 10] }),
      { k: 'label', s: '$\\kC$', p: [0.72, 0.72, 0], color: cc }, { k: 'label', s: "$\\kC'$", p: [-0.72, 0.72, f(-0.72, 0.72) + 0.12], color: cc }]);
    tex(d.readout, `\\sum_{i=1}^{${n}}\\kf(P_{i}^{*})\\,\\Delta s_{i}=${hue('integral', n2(sum, 3))},\\quad \\int_{\\kC}${o.tex}\\,ds=${o.ex}\\approx ${n2(o.exact, 3)}`);
  }
  still(d, draw);
})();

/* Figure 16.15: one piece of the curve r(t) = ⟨t, t²/2⟩ from t to t + Δt beside the vector r′(t*)Δt at its start, t* the midpoint;
   axes −2.5 to 2.5 by −0.5 to 3, one scale */
(function () {
  const d = sim('sim-arc-piece', 520);
  const r = (t) => [t, (t * t) / 2], sp = (t) => Math.hypot(1, t);
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -2, max: 1, step: 0.05, value: 0.2, unit: '', dec: 2 });
  const dts = ctl(d.controls, { label: 'Δt', cls: '', key: 'dt', min: 0.05, max: 1.5, step: 0.05, value: 1.3, unit: '', dec: 2 });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), cc = C('curve'), vc = C('vector');
    const ax = axes(ctx, fit([-2.5, 2.5], [-0.5, 3], 30, 440), [-2.5, 2.5], [-0.5, 3], { xl: 'x', yl: 'y', nx: 5, ny: 7, fx: ticks(2.5), fy: ticks(3) });
    const t0 = ts.v, dt = dts.v, t1 = t0 + dt, tm = t0 + dt / 2;
    path(ctx, ax, r, -2.2, 2.2, alpha(cc, 0.35), 3);
    path(ctx, ax, r, t0, t1, cc, 7);
    const p = r(t0), v = [1, tm], q = [p[0] + v[0] * dt, p[1] + v[1] * dt];
    arrow(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(q[0]), ax.Y(q[1]), vc, 4);
    dot(ctx, ax.X(p[0]), ax.Y(p[1]), PAL.ink, true, 7); dot(ctx, ax.X(r(t1)[0]), ax.Y(r(t1)[1]), PAL.ink, true, 7);
    text(ctx, "$\\kvecrprime(t^{*})\\,\\Delta t$", (ax.X(p[0]) + ax.X(q[0])) / 2 - 40, (ax.Y(p[1]) + ax.Y(q[1])) / 2 + 34, vc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    hits.length = 0;
    hits.push({ x: ax.X(r(tm)[0]), y: ax.Y(r(tm)[1]), r: 16, name: `the piece of C from t = ${n2(t0)} to t = ${n2(t1)}` });
    const s = simpson(sp, t0, t1), lin = sp(tm) * dt;
    tex(d.readout, `\\Delta s=\\int_{${n2(t0)}}^{${n2(t1)}}\\|\\kvecrprime(t)\\|\\,dt=${hue('integral', n2(s, 4))}\\approx\\|\\kvecrprime(t^{*})\\|\\,\\Delta t=${n2(lin, 4)},\\quad \\text{ratio}\\;${n2(lin / s, 4)}`);
  }
  still(d, draw);
})();

/* Figure 16.17 + 16.18: the upper unit semicircle cut into n pieces in a field; at each sample point F, and the term F · T Δs as a bar
   along the normal (outward when positive). C runs from (1, 0) to (−1, 0); −C back. Axes −1.6 to 1.6 by −0.4 to 1.6, one scale. */
(function () {
  const d = sim('sim-work-sum', 560);
  const FIELDS = {
    turn: { F: ([x, y]) => [-y, x], tex: '\\langle -y,x\\rangle', exact: Math.PI, ex: '\\pi', k: 0.32 },
    rect: { F: ([x, y]) => [x - 2 * y, y - x], tex: '\\langle x-2y,y-x\\rangle', exact: Math.PI / 2, ex: '\\tfrac{\\pi}{2}', k: 0.16 },
  };
  const fpick = choice(d.controls, { label: 'F', options: [{ value: 'turn', label: '⟨−y, x⟩' }, { value: 'rect', label: '⟨x − 2y, y − x⟩' }], value: 'turn', ms: 0 });
  const opick = choice(d.controls, { label: 'curve', key: 'orient', options: [{ value: 'C', label: 'C' }, { value: '-C', label: '−C' }], value: 'C', ms: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 24, step: 1, value: 6, unit: '', dec: 0 });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), vf = C('vector-field'), cc = C('curve'), ic = C('integral'), o = FIELDS[fpick.value], sgn = opick.value === 'C' ? 1 : -1;
    const ax = axes(ctx, fit([-1.6, 1.6], [-0.4, 1.6], 30, 500), [-1.6, 1.6], [-0.4, 1.6], { xl: 'x', yl: 'y', nx: 8, ny: 5, fx: ticks(1.6), fy: ticks(1.6) });
    SP.field2(ctx, ax, o.F, alpha(vf, 0.35), { n: [8, 5], w: 2 });
    const r = sgn > 0 ? (t) => [Math.cos(t), Math.sin(t)] : (t) => [-Math.cos(t), Math.sin(t)];
    path(ctx, ax, r, 0, Math.PI, cc, 5);
    headOn(ctx, ax, r, 0.62 * Math.PI, 1, cc);
    const n = ns.v, ds = Math.PI / n, k = o.k;
    let sum = 0; hits.length = 0;
    for (let i = 0; i < n; i++) {
      const ts = (i + 0.5) * ds, p = r(ts), T = dr(r, ts), v = o.F(p), term = (v[0] * T[0] + v[1] * T[1]) * ds; sum += term;
      const N = [p[0], p[1]], bar = term * 0.9;
      line(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(p[0] + N[0] * bar), ax.Y(p[1] + N[1] * bar), ic, 9);
      arrow(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(p[0] + v[0] * k), ax.Y(p[1] + v[1] * k), vf, 4);
      dot(ctx, ax.X(p[0]), ax.Y(p[1]), PAL.ink, true, 5);
      hits.push({ x: ax.X(p[0] + N[0] * bar / 2), y: ax.Y(p[1] + N[1] * bar / 2), r: 12, name: `piece ${i + 1}: F · T Δs = ${n2(term, 3)}` });
    }
    text(ctx, sgn > 0 ? '$\\kC$' : '$-\\kC$', ax.X(-1.05), ax.Y(1.05), cc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    const name = sgn > 0 ? '\\kC' : '-\\kC';
    tex(d.readout, `\\sum_{i=1}^{${n}}\\kvecF(P_{i}^{*})\\cdot\\kvecT(P_{i}^{*})\\,\\Delta s_{i}=${hue('integral', n2(sum, 3))},\\quad \\int_{${name}}\\kvecF\\cdot d\\mathbf{r}=${sgn > 0 ? '' : '-'}${o.ex}\\approx ${n2(sgn * o.exact, 3)}`);
  }
  still(d, draw);
})();

/* Figure 16.20: Example 16.20's rectangle with vertices (0, 0), (2, 0), (2, 1), (0, 1), counterclockwise, in F = ⟨x − 2y, y − x⟩; a still copy */
(function () {
  const d = sim('fig-rectangle-field', 460);
  function draw() {
    const { ctx } = begin(d.c), cc = C('curve');
    const ax = axes(ctx, fit([-0.5, 2.5], [-0.5, 1.5], 30, 400), [-0.5, 2.5], [-0.5, 1.5], { xl: 'x', yl: 'y', nx: 6, ny: 4, fx: ticks(2.5), fy: ticks(1.5) });
    SP.field2(ctx, ax, ([x, y]) => [x - 2 * y, y - x], C('vector-field'), { n: [9, 6], w: 2.5 });
    const V = [[0, 0], [2, 0], [2, 1], [0, 1]];
    V.forEach((a, i) => { const b = V[(i + 1) % 4]; line(ctx, ax.X(a[0]), ax.Y(a[1]), ax.X(b[0]), ax.Y(b[1]), cc, 5); const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      arrow(ctx, ax.X(m[0] - (b[0] - a[0]) * 0.06), ax.Y(m[1] - (b[1] - a[1]) * 0.06), ax.X(m[0] + (b[0] - a[0]) * 0.06), ax.Y(m[1] + (b[1] - a[1]) * 0.06), cc, 5);
      const off = [[0, -0.16], [0.18, 0], [0, 0.16], [-0.18, 0]][i];
      text(ctx, `$\\kC_{${i + 1}}$`, ax.X(m[0] + off[0]), ax.Y(m[1] + off[1]) + 8, cc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }); });
  }
  still(d, draw);
})();

/* Figure 16.21: Example 16.21's spring ⟨t, 2 cos t, 2 sin t⟩, 0 ≤ t ≤ π/2; a locked still copy */
(function () {
  const d = sim('fig-spring-wire');
  const box = [[0, 2], [0, 2.4], [0, 2.4]];
  const S = F.space3d(d, { box, h: 420, locked: true, turn: -2.4, tilt: 0.35 });
  function draw() {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('wire', [...SP.curve((t) => [t, 2 * Math.cos(t), 2 * Math.sin(t)], [0, Math.PI / 2], C('curve'), { w: 6 }), { k: 'label', s: '$\\kC$', p: [0.9, 1.6, 1.7], color: C('curve') }]);
  }
  still(d, draw);
})();

/* Figure 16.22: Example 16.22's path r(t) = ⟨t², t, t⁴⟩, 0 ≤ t ≤ 1, in F = ⟨yz, xy, xz⟩; the object travels the path in 5 s while the
   work W(t) = ∫₀ᵗ F · r′ dt accumulates to 131/140. Box [0, 1]³. */
(function () {
  const d = sim('sim-work-path');
  const box = [[0, 1], [0, 1], [0, 1]], r = (t) => [t * t, t, t ** 4], rp = (t) => [2 * t, 1, 4 * t ** 3];
  const Fv = (p) => [p[1] * p[2], p[0] * p[1], p[0] * p[2]];
  const W = (t) => (2 * t ** 7) / 7 + t ** 4 / 4 + (2 * t ** 10) / 5;
  const S = F.space3d(d, { box, h: 540, pitch: [-0.2, 1.4], turn: -2.1, tilt: 0.45, fit: 2.7 });
  const cy = cycle(() => 5, 1.2);
  function draw() {
    const t = Math.min(1, cy.now() / 5), p = r(t), v = Fv(p), u = rp(t), vf = C('vector-field'), cc = C('curve');
    S.set('axes', SP.axes(box, { ticks: 0.5 }));
    S.set('field', SP.field(Fv, box, alpha(vf, 0.4), { n: [3, 3, 3] }));
    S.set('path', [...SP.curve(r, [0, 1], alpha(cc, 0.45), { w: 3 }), ...(t > 1e-3 ? SP.curve(r, [0, t], cc, { w: 6 }) : [])]);
    S.set('mover', [...SP.point(p, PAL.ink, { r: 10 }), ...SP.vector(p, SP.add(p, SP.mul(v, 0.35)), vf, { name: '$\\kvecF$', w: 5 }), ...SP.vector(p, SP.add(p, SP.mul(u, 0.12)), C('vector'), { name: "$\\kvecrprime$", w: 4 })]);
    tex(d.readout, `t=${n2(t)},\\quad \\int_{0}^{t}\\kvecF(\\kvecr(\\tau))\\cdot\\kvecrprime(\\tau)\\,d\\tau=\\tfrac{2t^{7}}{7}+\\tfrac{t^{4}}{4}+\\tfrac{2t^{10}}{5}=${hue('integral', n2(W(t), 4))}\\;\\to\\;\\tfrac{131}{140}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 16.23 + 16.24: a circle cut into n pieces in a field, F at each sample point beside the unit normal N; the sums of
   F · N Δs and F · T Δs close on the flux and the circulation. Axes −2.6 to 2.6, one scale. */
(function () {
  const d = sim('sim-flux-circulation', 600);
  const FIELDS = {
    out: { F: ([x, y]) => [2 * x, 2 * y], R: 1, tex: '\\langle 2x,2y\\rangle', flux: '4\\pi', circ: '0' },
    turn: { F: ([x, y]) => [-y, x], R: 1, tex: '\\langle -y,x\\rangle', flux: '0', circ: '2\\pi' },
    work: { F: ([, y]) => [-2, y], R: 2, tex: '\\langle -2,y\\rangle', flux: '4\\pi', circ: '0' },
  };
  const pick = choice(d.controls, { label: 'F', options: [{ value: 'out', label: '⟨2x, 2y⟩, r = 1' }, { value: 'turn', label: '⟨−y, x⟩, r = 1' }, { value: 'work', label: '⟨−2, y⟩, r = 2' }], value: 'out', ms: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 3, max: 32, step: 1, value: 8, unit: '', dec: 0 });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), vf = C('vector-field'), cc = C('curve'), vc = C('vector'), o = FIELDS[pick.value], R = o.R;
    const ax = axes(ctx, fit([-2.6, 2.6], [-2.6, 2.6], 30, 540), [-2.6, 2.6], [-2.6, 2.6], { xl: 'x', yl: 'y', nx: 13, ny: 13, fx: (v) => (Math.abs(v % 1) < 1e-9 && v < 2.5 ? fmt(v, 0).replace('-', '−') : ''), fy: (v) => (Math.abs(v % 1) < 1e-9 && v < 2.5 ? fmt(v, 0).replace('-', '−') : '') });
    SP.field2(ctx, ax, o.F, alpha(vf, 0.3), { n: [8, 8], w: 2 });
    const r = (t) => [R * Math.cos(t), R * Math.sin(t)];
    path(ctx, ax, r, 0, TAU, cc, 5); headOn(ctx, ax, r, 0.3, 1, cc);
    const n = ns.v, dt = TAU / n, ds = R * dt, k = 0.25;
    let flux = 0, circ = 0; hits.length = 0;
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) * dt, p = r(t), N = [Math.cos(t), Math.sin(t)], T = [-Math.sin(t), Math.cos(t)], v = o.F(p);
      const fn = v[0] * N[0] + v[1] * N[1], ft = v[0] * T[0] + v[1] * T[1]; flux += fn * ds; circ += ft * ds;
      arrow(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(p[0] + N[0] * 0.38), ax.Y(p[1] + N[1] * 0.38), vc, 3);
      arrow(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(p[0] + v[0] * k), ax.Y(p[1] + v[1] * k), vf, 4);
      dot(ctx, ax.X(p[0]), ax.Y(p[1]), PAL.ink, true, 5);
      hits.push({ x: ax.X(p[0]), y: ax.Y(p[1]), r: 12, name: `F · N = ${n2(fn)}, F · T = ${n2(ft)}` });
    }
    const q = r(2.4);
    text(ctx, '$\\kvecN$', ax.X(q[0] * (1 + 0.5 / R)), ax.Y(q[1] * (1 + 0.5 / R)) + 8, vc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    tex(d.readout, `\\sum\\kvecF\\cdot\\kvecN\\,\\Delta s=${hue('integral', n2(flux, 3))}\\to ${o.flux},\\qquad \\sum\\kvecF\\cdot\\kvecT\\,\\Delta s=${hue('integral', n2(circ, 3))}\\to ${o.circ}`);
  }
  still(d, draw);
})();
};
