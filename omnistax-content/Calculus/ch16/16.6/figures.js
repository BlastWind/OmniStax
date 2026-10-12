/* Figures for section 16.6 Surface Integrals. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, dot, text, register, tex, fmt, makeCanvas } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI, PI = Math.PI;
const vec = (p) => `\\langle ${p.map((x) => n2(x)).join(',')}\\rangle`;

/* Figure 16.57 + 16.58 + 16.59 + 16.60 + 16.61 + 16.62: a parametric surface with the two grid curves through r(u₀, v₀), beside its
   parameter domain with the grid lines u = u₀ and v = v₀; the surfaces of Examples 16.58–16.60, the sphere and a graph x = …, y = (x² + z²)/2. */
(function () {
  const d = sim('sim-param-surfaces');
  const SURF = {
    cyl: { r: (u, v) => [Math.cos(u), Math.sin(u), v], U: [0, TAU], V: [-2, 2], box: [[-1.6, 1.6], [-1.6, 1.6], [-2.2, 2.2]], p0: [0.8, 1], tex: '\\langle \\cos u,\\sin u,v\\rangle' },
    para: { r: (u, v) => [u * Math.cos(v), u * Math.sin(v), u * u], U: [0, 2], V: [0, TAU], box: [[-2.2, 2.2], [-2.2, 2.2], [0, 4.2]], p0: [1.2, 1], tex: '\\langle u\\cos v,u\\sin v,u^{2}\\rangle' },
    cone: { r: (u, v) => [u * Math.cos(v), u * Math.sin(v), u], U: [-2, 2], V: [0, TAU], box: [[-2.2, 2.2], [-2.2, 2.2], [-2.2, 2.2]], p0: [1.2, 1], tex: '\\langle u\\cos v,u\\sin v,u\\rangle' },
    sphere: { r: (u, v) => [2 * Math.cos(v) * Math.sin(u), 2 * Math.sin(v) * Math.sin(u), 2 * Math.cos(u)], U: [0, PI], V: [0, TAU], box: [[-2.2, 2.2], [-2.2, 2.2], [-2.2, 2.2]], p0: [1, 1], tex: '\\langle 2\\cos v\\sin u,2\\sin v\\sin u,2\\cos u\\rangle' },
    graph: { r: (u, v) => [u, (u * u + v * v) / 2, v], U: [0, 2], V: [0, 2], box: [[0, 2.2], [0, 4.2], [0, 2.2]], p0: [1, 1.2], tex: '\\langle u,\\tfrac{u^{2}+v^{2}}{2},v\\rangle' },
  };
  const pick = choice(d.controls, { label: 'S', key: 'surface', options: [{ value: 'cyl', label: 'cylinder' }, { value: 'para', label: 'paraboloid' }, { value: 'cone', label: 'cone' }, { value: 'sphere', label: 'sphere' }, { value: 'graph', label: '2y = x² + z²' }], value: 'cyl', ms: 0, onInput: () => retarget() });
  const us = ctl(d.controls, { label: 'u₀', cls: '', key: 'u', min: 0, max: TAU, step: 0.01, value: 0.8, unit: '', dec: 2 });
  const vs = ctl(d.controls, { label: 'v₀', cls: '', key: 'v', min: -2, max: 2, step: 0.01, value: 1, unit: '', dec: 2 });
  function retarget() { const o = SURF[pick.value]; us.range({ min: o.U[0], max: o.U[1], step: 0.01, value: o.p0[0], unit: '', dec: 2 }); vs.range({ min: o.V[0], max: o.V[1], step: 0.01, value: o.p0[1], unit: '', dec: 2 }); }
  let S = null, at = '';
  const cv = makeCanvas(d.stage, 300);
  function draw() {
    const o = SURF[pick.value], u0 = Math.min(o.U[1], Math.max(o.U[0], us.v)), v0 = Math.min(o.V[1], Math.max(o.V[0], vs.v)), cc = C('curve');
    if (at !== pick.value) { at = pick.value; S?.v?.dispose?.(); [...d.stage.children].forEach((c) => { if (c !== cv) c.remove(); }); S = F.space3d(d, { box: o.box, h: 460, pitch: [-1.4, 1.4] }); d.stage.appendChild(cv); }
    S.set('axes', SP.axes(o.box, { ticks: 1 }));
    S.set('surface', SP.surface(o.r, o.U, o.V, C('surface'), { n: [48, 32], grid: 8, alpha: 0.45 }));
    S.set('grid', [...SP.curve((v) => o.r(u0, v), o.V, cc, { w: 5 }), ...SP.curve((u) => o.r(u, v0), o.U, cc, { w: 4, dash: [10, 8] }), ...SP.point(o.r(u0, v0), C('point'))]);
    const { ctx } = begin(cv), [a, b] = o.U, [c, e] = o.V, s = 230 / Math.max(b - a, e - c), w = (b - a) * s, h = (e - c) * s;
    const box = { l: 700 - w / 2, r: 700 + w / 2, t: 30, b: 30 + h };
    const ax = axes(ctx, box, o.U, o.V, { xl: 'u', yl: 'v', nx: w < 160 ? 2 : 4, ny: 4, fx: (x) => fmt(x, 1).replace('-', '−'), fy: (y) => fmt(y, 1).replace('-', '−') });
    for (let k = 1; k < 8; k++) { line(ctx, ax.X(a + ((b - a) * k) / 8), ax.Y(c), ax.X(a + ((b - a) * k) / 8), ax.Y(e), alpha(PAL.ink, 0.15), 1.5); line(ctx, ax.X(a), ax.Y(c + ((e - c) * k) / 8), ax.X(b), ax.Y(c + ((e - c) * k) / 8), alpha(PAL.ink, 0.15), 1.5); }
    line(ctx, ax.X(u0), ax.Y(c), ax.X(u0), ax.Y(e), cc, 5); line(ctx, ax.X(a), ax.Y(v0), ax.X(b), ax.Y(v0), cc, 4, [10, 8]);
    dot(ctx, ax.X(u0), ax.Y(v0), C('point'), true, 9);
    text(ctx, '$u=u_{0}$', ax.X(u0) + 12, ax.Y(e) + 22, cc, { size: 20, tex: true, bg: PAL.panel });
    text(ctx, '$v=v_{0}$', ax.X(b) + 12, ax.Y(v0) + 7, cc, { size: 20, tex: true, bg: PAL.panel });
    text(ctx, '$\\kD$', box.r + 40, box.b - 10, C('region'), { size: 24, weight: 600, align: 'center', tex: true });
    tex(d.readout, `\\kvecr(u,v)=${o.tex},\\quad \\kvecr(${n2(u0)},${n2(v0)})=${vec(o.r(u0, v0))}`);
  }
  still(d, draw);
})();

/* Figure 16.63: r(u, v) = ⟨0, cos v, 1⟩, 0 ≤ u ≤ 1, 0 ≤ v ≤ π, whose image is a segment; a locked still copy */
(function () {
  const d = sim('fig-degenerate');
  const box = [[-0.5, 1.5], [-1.5, 1.5], [0, 1.5]];
  const S = F.space3d(d, { box, h: 360, locked: true });
  still(d, () => { S.set('axes', SP.axes(box, { ticks: 1 })); S.set('line', [{ k: 'line', pts: [[0, -1, 1], [0, 1, 1]], color: C('surface'), w: 7 }]); });
})();

/* Figure 16.65 + 16.66 + 16.67: the piece of Example 16.59's paraboloid r(u, v) = ⟨u cos v, u sin v, u²⟩ over [u, u + Δ] × [v, v + Δ]
   and the parallelogram of t_u Δu, t_v Δv in its tangent plane; box ±2.2 by 0 to 4.2 */
(function () {
  const d = sim('sim-surface-patch');
  const r = (u, v) => [u * Math.cos(v), u * Math.sin(v), u * u], box = [[-2.2, 2.2], [-2.2, 2.2], [0, 4.2]];
  const S = F.space3d(d, { box, h: 520, pitch: [-0.3, 1.4] });
  const us = ctl(d.controls, { label: 'u', cls: '', key: 'u', min: 0.2, max: 1.6, step: 0.01, value: 1.2, unit: '', dec: 2 });
  const vs = ctl(d.controls, { label: 'v', cls: '', key: 'v', min: 0, max: 5.5, step: 0.01, value: 0.6, unit: '', dec: 2 });
  const ds = ctl(d.controls, { label: 'Δ', cls: '', key: 'd', min: 0.05, max: 0.6, step: 0.01, value: 0.4, unit: '', dec: 2 });
  function draw() {
    const u = us.v, v = vs.v, D = ds.v, { n } = SP.tangents(r, u, v), lin = SP.norm(n) * D * D;
    let real = 0; const m = 20; for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) real += SP.norm(SP.tangents(r, u + ((i + 0.5) * D) / m, v + ((j + 0.5) * D) / m).n) * (D / m) * (D / m);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('surface', SP.surface(r, [0, 2], [0, TAU], C('surface'), { n: [32, 48], grid: 8, alpha: 0.35 }));
    S.set('patch', [...SP.patch(r, u, v, D, D, C('integral')), ...SP.point(r(u, v), C('point'), { name: '$P_{ij}$' })]);
    tex(d.readout, `\\Delta S_{ij}=${hue('integral', n2(real, 4))}\\approx\\|\\kvectu\\times\\kvectv\\|\\,\\Delta u\\,\\Delta v=${n2(lin, 4)},\\quad \\text{ratio}\\;${n2(lin / real, 4)}`);
  }
  still(d, draw);
})();

/* Figure 16.68: Example 16.62's cone s(u, v) = ⟨kv cos u, kv sin u, v⟩, 0 ≤ v ≤ h, k = r/h; a locked view with sliders r and h */
(function () {
  const d = sim('sim-cone-area');
  const box = [[-2.4, 2.4], [-2.4, 2.4], [0, 3.2]];
  const S = F.space3d(d, { box, h: 420, locked: true, tilt: 0.35 });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.3, max: 2.2, step: 0.05, value: 1.5, unit: '', dec: 2 });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.5, max: 3, step: 0.05, value: 2.5, unit: '', dec: 2 });
  function draw() {
    const R = rs.v, h = hs.v, k = R / h, s = (u, v) => [k * v * Math.cos(u), k * v * Math.sin(u), v];
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('cone', [...SP.surface(s, [0, TAU], [0, h], C('surface'), { n: [48, 12], grid: 8, alpha: 0.5 }),
      { k: 'line', pts: [[0, 0, 0], [0, 0, h]], color: 'guide', w: 2.5, dash: [4, 8] }, { k: 'line', pts: [[0, 0, h], [R, 0, h]], color: 'guide', w: 2.5, dash: [4, 8] },
      { k: 'label', s: '$h$', p: [-0.15, 0, h / 2] }, { k: 'label', s: '$r$', p: [R / 2, 0, h + 0.15] }]);
    tex(d.readout, `k=\\tan\\alpha=\\tfrac{r}{h}=${n2(k)},\\quad \\iint_{\\kD}\\|\\kvectu\\times\\kvectv\\|\\,dA=\\pi r\\sqrt{h^{2}+r^{2}}=${hue('integral', n2(PI * R * Math.hypot(h, R)))}`);
  }
  still(d, draw);
})();

/* Figure 16.70: Example 16.64's surface r(x, θ) = ⟨x, x² cos θ, x² sin θ⟩, 0 ≤ x ≤ b, drawn with b = 1.2; a locked still copy */
(function () {
  const d = sim('fig-revolution-x2');
  const b = 1.2, box = [[0, 1.6], [-1.6, 1.6], [-1.6, 1.6]];
  const S = F.space3d(d, { box, h: 380, locked: true, turn: -2.6 });
  still(d, () => { S.set('axes', SP.axes(box, { ticks: 1 })); S.set('s', SP.surface((x, t) => [x, x * x * Math.cos(t), x * x * Math.sin(t)], [0, b], [0, TAU], C('surface'), { n: [24, 48], grid: 8, alpha: 0.6 })); });
})();

/* Figure 16.71: Example 16.66's cylinder x² + y² = 4, 0 ≤ z ≤ 3; a locked still copy */
(function () {
  const d = sim('fig-cylinder-integral');
  const box = [[-2.6, 2.6], [-2.6, 2.6], [0, 3.4]];
  const S = F.space3d(d, { box, h: 380, locked: true });
  still(d, () => { S.set('axes', SP.axes(box, { ticks: 1 })); S.set('s', SP.surface((u, v) => [2 * Math.cos(u), 2 * Math.sin(u), v], [0, TAU], [0, 3], C('surface'), { n: [48, 8], grid: 8, alpha: 0.6 })); });
})();

/* Figure 16.72: Example 16.67's surface, the cap of x² + y² + z² = 4 on or above z = 1 and the disk under it; a locked still copy */
(function () {
  const d = sim('fig-sphere-cap');
  const box = [[-2.2, 2.2], [-2.2, 2.2], [0, 2.4]];
  const S = F.space3d(d, { box, h: 380, locked: true });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('s', [...SP.surface((p, t) => [2 * Math.cos(t) * Math.sin(p), 2 * Math.sin(t) * Math.sin(p), 2 * Math.cos(p)], [0, PI / 3], [0, TAU], C('surface'), { n: [12, 48], grid: 6, alpha: 0.6 }),
      ...SP.surface((u, t) => [u * Math.cos(t), u * Math.sin(t), 1], [0, Math.sqrt(3)], [0, TAU], C('surface'), { n: [6, 48], grid: 4, alpha: 0.35 }),
      { k: 'label', s: '$\\kS_{2}$', p: [0.9, 0.9, 1.8] }, { k: 'label', s: '$\\kS_{1}$', p: [1.5, 1.5, 1] }]);
  });
})();

/* Figure 16.74 + 16.75 + 16.76: the outward normals of a sphere and of a cylinder, and a Möbius strip; a normal carried round the
   loop through the starting point comes back to itself on the first two and reversed on the strip */
(function () {
  const d = sim('sim-orientation');
  const SURF = {
    sphere: { r: (u, v) => [1.5 * Math.cos(u) * Math.sin(v), 1.5 * Math.sin(u) * Math.sin(v), 1.5 * Math.cos(v)], U: [0, TAU], V: [0.01, PI - 0.01], loop: (u) => [u, PI / 2], sign: -1 },
    cyl: { r: (u, v) => [1.2 * Math.cos(u), 1.2 * Math.sin(u), v], U: [0, TAU], V: [-1.5, 1.5], loop: (u) => [u, 0], sign: 1 },
    mobius: { r: (u, v) => [(1.4 + (v / 2) * Math.cos(u / 2)) * Math.cos(u), (1.4 + (v / 2) * Math.cos(u / 2)) * Math.sin(u), (v / 2) * Math.sin(u / 2)], U: [0, TAU], V: [-1, 1], loop: (u) => [u, 0], sign: 1 },
  };
  const box = [[-2, 2], [-2, 2], [-1.8, 1.8]];
  const S = F.space3d(d, { box, h: 520, pitch: [-1.4, 1.4] });
  const pick = choice(d.controls, { label: 'S', key: 'surface', options: [{ value: 'sphere', label: 'sphere' }, { value: 'cyl', label: 'cylinder' }, { value: 'mobius', label: 'Möbius strip' }], value: 'sphere', ms: 0 });
  const ts = ctl(d.controls, { label: 'u', cls: '', key: 'u', min: 0, max: TAU, step: 0.01, value: 2.2, unit: '', dec: 2, specials: [{ at: TAU }] });
  const N = (o, u, v) => SP.mul(SP.unit(SP.tangents(o.r, u, v).n), o.sign);
  function draw() {
    const o = SURF[pick.value], vc = C('vector'), [u, v] = o.loop(ts.v), p = o.r(u, v), n = N(o, u, v), [u0, v0] = o.loop(0), p0 = o.r(u0, v0), n0 = N(o, u0, v0);
    S.set('axes', SP.axes(box, { ticks: 0 }));
    S.set('surface', SP.surface(o.r, o.U, o.V, C('surface'), { n: [64, 16], grid: 8, alpha: 0.5 }));
    S.set('normals', pick.value === 'mobius' ? [] : SP.normals((a, b) => o.r(a, b), o.U, o.V, alpha(vc, 0.5), { n: [10, 4], len: 0.5 * o.sign }));
    S.set('loop', [...SP.curve((t) => o.r(...o.loop(t)), [0, ts.v], C('curve'), { w: 4 }), ...SP.vector(p0, SP.add(p0, SP.mul(n0, 0.8)), alpha(vc, 0.55), { w: 4 }),
      ...SP.vector(p, SP.add(p, SP.mul(n, 0.8)), vc, { name: '$\\kvecN$', w: 5 }), ...SP.point(p, C('point'))]);
    tex(d.readout, `\\kvecN(u)\\cdot\\kvecN(0)=${hue('vector', n2(SP.dot(n, n0)))}` + (Math.abs(ts.v - TAU) < 0.02 ? (pick.value === 'mobius' ? `:\\;\\text{back where it started, the normal points the other way}` : `:\\;\\text{back where it started, the normal agrees}`) : ''));
  }
  still(d, draw);
})();

/* Figure 16.77 + 16.78: Example 16.71's fluid, v = ⟨2x, 2y, z⟩, flowing out through the hemisphere x² + y² + z² = 9, z ≥ 0, cut into n by 2n
   pieces; the sum of (v · N) ΔS closes on the flow rate 90π, and with density 80 the mass flow rate 7200π. Box ±3.4 by 0 to 3.6. */
(function () {
  const d = sim('sim-flux-surface');
  const r = (p, t) => [3 * Math.cos(t) * Math.sin(p), 3 * Math.sin(t) * Math.sin(p), 3 * Math.cos(p)], V = (q) => [2 * q[0], 2 * q[1], q[2]];
  const box = [[-3.4, 3.4], [-3.4, 3.4], [0, 3.6]];
  const S = F.space3d(d, { box, h: 520, pitch: [0, 1.4] });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 12, step: 1, value: 3, unit: '', dec: 0 });
  function draw() {
    const n = ns.v, dp = PI / 2 / n, dt = TAU / (2 * n), vf = C('vector-field');
    let sum = 0; const arrows = [];
    for (let i = 0; i < n; i++) for (let j = 0; j < 2 * n; j++) {
      const p = (i + 0.5) * dp, t = (j + 0.5) * dt, q = r(p, t), { n: c } = SP.tangents(r, p, t), out = SP.mul(c, Math.sign(SP.dot(c, q)) || 1), w = V(q);
      sum += SP.dot(w, out) * dp * dt; arrows.push(...SP.vector(q, SP.add(q, SP.mul(w, 0.12)), vf, { w: 3.5 }));
    }
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('surface', SP.surface(r, [0, PI / 2], [0, TAU], C('surface'), { n: [6 * n, 12 * n], grid: 0, alpha: 0.45 }));
    S.set('pieces', [{ k: 'segs', segs: SP.gridLines(SP.gridOf(r, [0, PI / 2], [0, TAU], [n * 6, 12 * n]), [n, 2 * n]), color: 'ink', w: 1.5 }]);
    S.set('arrows', arrows);
    tex(d.readout, `\\sum\\kvecv\\cdot\\kvecN\\,\\Delta S_{ij}=${hue('integral', n2(sum, 2))}\\to\\iint_{\\kS}\\kvecv\\cdot d\\mathbf{S}=90\\pi\\approx 282.74,\\quad 80\\sum\\kvecv\\cdot\\kvecN\\,\\Delta S=${hue('integral', n2(80 * sum, 0))}`);
  }
  still(d, draw);
})();
};
