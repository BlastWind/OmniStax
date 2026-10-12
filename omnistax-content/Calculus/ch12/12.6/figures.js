/* Figures for section 12.6 Quadric Surfaces. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, headline, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const PITCH = [-0.2, 1.4], TAU = 2 * Math.PI;
const label = (s, p, color) => ({ k: 'label', s, p, color });
const live = (d, box, o = {}) => F.space3d(d, { box, h: 540, pitch: PITCH, fit: 3, ...o });
const locked = (d, box, o = {}) => F.space3d(d, { box, h: 480, locked: true, fit: 3.2, ...o });
const curveOf = (f, a, b, m = 120) => { const pts = []; for (let i = 0; i <= m; i++) pts.push(f(a + ((b - a) * i) / m)); return pts; };

/* Figures 12.75 + 12.76: a curve in a coordinate plane and the rulings through it sweeping out the cylinder. */
(function () {
  const d = sim('sim-cylinder');
  const box = [[-4, 4], [-4, 4], [-4, 4]];
  const S = live(d, box);
  const pick = choice(d.controls, { label: '', key: 'curve', options: [{ value: 'c', label: 'x² + y² = 9' }, { value: 'x3', label: 'z = x³' }], value: 'c', aria: 'equation', ms: 0 });
  const hs = ctl(d.controls, { label: 'extent', cls: '', key: 'h', min: 0.2, max: 3.5, step: 0.05, value: 3, unit: '', dec: 2 });
  still(d, () => {
    const h = hs.v, cv = C('curve'), sf = C('surface'), ln = C('line'), circ = pick.value === 'c';
    const r = circ ? (u, v) => [3 * Math.cos(u), 3 * Math.sin(u), v] : (u, v) => [u, v, u ** 3];
    const U = circ ? [0, TAU] : [-1.5, 1.5];
    const base = circ ? curveOf((t) => [3 * Math.cos(t), 3 * Math.sin(t), 0], 0, TAU) : curveOf((t) => [t, 0, t ** 3], -1.5, 1.5);
    const rul = [];
    for (let i = 0; i < 12; i++) { const u = U[0] + ((U[1] - U[0]) * (i + (circ ? 0 : 0.5))) / (circ ? 12 : 12); rul.push([r(u, -h), r(u, h)]); }
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('surf', [...SP.surface(r, U, [-h, h], sf, { n: [48, 6], grid: 0, alpha: 0.35 }), { k: 'segs', segs: rul, color: ln, w: 2.5 }, { k: 'line', pts: base, color: cv, w: 6 }]);
    S.headline(circ ? 'Copies of the circle $x^{2}+y^{2}=9$ stacked along the $z$-axis: rulings parallel to the $z$-axis.' : 'The curve $z=x^{3}$ in the $xz$-plane slid along the $y$-axis: rulings parallel to the $y$-axis.');
    tex(d.readout, circ ? '\\{(x,y,z): x^{2}+y^{2}=9\\},\\ z\\text{ free}' : '\\{(x,y,z): z=x^{3}\\},\\ y\\text{ free}');
  });
})();

/* Figures 12.77, 12.78, 12.79, faithful copies of Example 12.55's three surfaces. */
function still3(id, box, marks, o) {
  const d = sim(id);
  const S = locked(d, box, o);
  still(d, () => { S.set('axes', SP.axes(box, { ticks: o && o.ticks !== undefined ? o.ticks : 2 })); S.set('s', marks()); });
}
still3('fig-cylinder-xz', [[-7, 7], [-7, 7], [-7, 7]], () => SP.surface((u, v) => [5 * Math.cos(u), v, 5 * Math.sin(u)], [0, TAU], [-6, 6], C('surface'), { n: [48, 6], grid: 8, alpha: 0.45 }));
still3('fig-surface-2x2-y', [[-2.5, 2.5], [-4.5, 4.5], [-5, 12]], () => SP.graph((x, y) => 2 * x * x - y, { x: [-2, 2], y: [-4, 4] }, C('surface'), { grid: 8, alpha: 0.6 }), { fit: 2.3 });
still3('fig-sine-cylinder', [[-7, 7], [-2, 2], [-3, 3]], () => SP.surface((u, v) => [u, Math.sin(u), v], [-2 * Math.PI, 2 * Math.PI], [-3, 3], C('surface'), { n: [80, 4], grid: 8, alpha: 0.5 }));

/* Figure 12.80: z = sin x and the plane y = c, x = c or z = c through it, with the trace it cuts. */
(function () {
  const d = sim('sim-trace-sine');
  const box = [[-7, 7], [-3.5, 3.5], [-2, 2]];
  const S = locked(d, box, { fit: 3 });
  const R = { y: [-3, 3], x: [-6, 6], z: [-1, 1] };
  const pick = choice(d.controls, { label: '', key: 'plane', options: [{ value: 'y', label: 'y = c' }, { value: 'x', label: 'x = c' }, { value: 'z', label: 'z = c' }], value: 'y', aria: 'slicing plane',
    onInput: (k) => cs.range({ min: R[k][0], max: R[k][1], step: 0.05, value: 0, dec: 2 }) });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -3, max: 3, step: 0.05, value: 0, unit: '', dec: 2 });
  still(d, () => {
    const k = pick.value, c = cs.v, cv = C('curve'), N = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[k];
    let tr = [], eq;
    if (k === 'y') { tr = [curveOf((t) => [t, c, Math.sin(t)], -2 * Math.PI, 2 * Math.PI)]; eq = `z=\\sin x\\ \\text{in the plane}\\ y=${n(c, 2)}:\\ \\text{a sine wave}`; }
    if (k === 'x') { tr = [[[c, -3, Math.sin(c)], [c, 3, Math.sin(c)]]]; eq = `z=\\sin(${n(c, 2)})=${n(Math.sin(c), 3)}\\ \\text{in the plane}\\ x=${n(c, 2)}:\\ \\text{one line}`; }
    if (k === 'z') { const a = Math.asin(Math.max(-1, Math.min(1, c))), xs = []; for (let m = -3; m <= 3; m++) [a + TAU * m, Math.PI - a + TAU * m].forEach((x) => { if (Math.abs(x) <= 2 * Math.PI + 1e-9) xs.push(x); });
      tr = [...new Set(xs.map((x) => x.toFixed(6)))].map((x) => [[+x, -3, c], [+x, 3, c]]); eq = `\\sin x=${n(c, 2)}\\ \\text{in the plane}\\ z=${n(c, 2)}:\\ \\text{a series of parallel lines}`; }
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('surf', SP.surface((u, v) => [u, v, Math.sin(u)], [-2 * Math.PI, 2 * Math.PI], [-3, 3], C('surface'), { n: [80, 6], grid: 6, alpha: 0.4 }));
    S.set('plane', [...SP.plane(SP.mul(N, c), N, C('plane'), { box, alpha: 0.18 }), ...tr.map((pts) => ({ k: 'line', pts, color: cv, w: 6 }))]);
    tex(d.readout, eq);
  });
})();

/* Figures 12.81 + 12.82 and 12.83 + 12.84: a surface, a slicing plane x = k, y = k or z = k, and the trace. */
function tracesSim(id, o) {
  const d = sim(id);
  const S = live(d, o.box);
  const pick = choice(d.controls, { label: '', key: 'plane', options: [{ value: 'z', label: 'z = k' }, { value: 'y', label: 'y = k' }, { value: 'x', label: 'x = k' }], value: 'z', aria: 'slicing plane',
    onInput: (v) => ks.range({ min: o.range[v][0], max: o.range[v][1], step: 0.05, value: o.start[v], dec: 2 }) });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: o.range.z[0], max: o.range.z[1], step: 0.05, value: o.start.z, unit: '', dec: 2, specials: [{ at: 0 }] });
  still(d, () => {
    const v = pick.value, k = ks.v, N = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[v], t = o.trace(v, k);
    S.set('axes', SP.axes(o.box, { ticks: 1 }));
    S.set('surf', SP.surface(o.r, o.U, o.V, C('surface'), { n: [48, 32], grid: 8, alpha: 0.45 }));
    S.set('plane', [...SP.plane(SP.mul(N, k), N, C('plane'), { box: o.box, alpha: 0.2 }), ...t.pts.map((pts) => ({ k: 'line', pts, color: C('curve'), w: 6 }))]);
    tex(d.readout, t.eq);
  });
}
const ellipseIn = (v, k, A, B, s) => curveOf((t) => (v === 'z' ? [A * s * Math.cos(t), B * s * Math.sin(t), k] : v === 'y' ? [A * s * Math.cos(t), k, B * s * Math.sin(t)] : [k, A * s * Math.cos(t), B * s * Math.sin(t)]), 0, TAU);
tracesSim('sim-ellipsoid-traces', {
  box: [[-3, 3], [-4, 4], [-6, 6]], r: (u, v) => [2 * Math.sin(v) * Math.cos(u), 3 * Math.sin(v) * Math.sin(u), 5 * Math.cos(v)], U: [0, TAU], V: [0.001, Math.PI - 0.001],
  range: { z: [-5, 5], y: [-3, 3], x: [-2, 2] }, start: { z: 0, y: 0, x: 0 },
  trace: (v, k) => {
    const [A, B, D, names] = { z: [2, 3, 5, ['x', 'y']], y: [2, 5, 3, ['x', 'z']], x: [3, 5, 2, ['y', 'z']] }[v], s2 = 1 - (k * k) / (D * D);
    if (s2 < 1e-9) return { pts: [], eq: `${v}=${n(k, 2)}:\\ ${Math.abs(s2) < 1e-6 ? '\\text{a single point}' : '\\text{no trace}'}` };
    const s = Math.sqrt(s2);
    return { pts: [ellipseIn(v, k, A, B, s)], eq: `${v}=${n(k, 2)}:\\ \\frac{${names[0]}^{2}}{${A * A}}+\\frac{${names[1]}^{2}}{${B * B}}=${n(s2, 3)},\\ \\text{an ellipse with semi-axes } ${n(A * s, 2)}\\text{ and }${n(B * s, 2)}` };
  },
});
tracesSim('sim-paraboloid-traces', {
  box: [[-1.6, 1.6], [-2.6, 2.6], [0, 6.5]], r: (u, v) => [v * Math.cos(u), 2 * v * Math.sin(u), 5 * v * v], U: [0, TAU], V: [0, 1.1],
  range: { z: [0, 6], y: [-2.2, 2.2], x: [-1.1, 1.1] }, start: { z: 5, y: 0, x: 0 },
  trace: (v, k) => {
    if (v === 'z') {
      if (k < 1e-9) return { pts: [], eq: 'z=0:\\ x^{2}+\\frac{y^{2}}{2^{2}}=0,\\ \\text{one point, the origin}' };
      const s = Math.sqrt(k / 5);
      return { pts: [ellipseIn('z', k, 1, 2, s)], eq: `z=${n(k, 2)}:\\ x^{2}+\\frac{y^{2}}{2^{2}}=${n(k / 5, 3)},\\ \\text{an ellipse}` };
    }
    if (v === 'y') return { pts: [curveOf((t) => [t, k, 5 * t * t + (5 * k * k) / 4], -1.1, 1.1)], eq: `y=${n(k, 2)}:\\ z=5x^{2}+${n((5 * k * k) / 4, 3)},\\ \\text{a parabola}` };
    return { pts: [curveOf((t) => [k, t, (5 * t * t) / 4 + 5 * k * k], -2.2, 2.2)], eq: `x=${n(k, 2)}:\\ z=\\frac{5y^{2}}{4}+${n(5 * k * k, 3)},\\ \\text{a parabola}` };
  },
});

/* Example 12.58: the dish's trace x² = 25z in the xz-plane; parallel rays fall straight down, reflect at the dish
   and meet at the focus (0, 6.25). Axes −11 to 11 by 0 to 10. */
(function () {
  const d = sim('sim-reflector', 600);
  const rs = ctl(d.controls, { label: 'rays', cls: '', key: 'rays', min: 1, max: 9, step: 1, value: 5, unit: '', dec: 0 });
  still(d, () => {
    const { ctx } = begin(d.c);
    const W = 22, Hh = 10, s = Math.min((600 - 140) / Hh, 1100 / W), ax = axes(ctx, { l: 700 - (W * s) / 2, r: 700 + (W * s) / 2, t: 86, b: 86 + Hh * s }, [-11, 11], [0, 10], { xl: 'x', yl: 'z', nx: 11, ny: 5 });
    const f = (x) => (x * x) / 25, Fz = 6.25, X = ax.X, Y = ax.Y, g = alpha(PAL.ink, 0.55);
    ctx.save(); ctx.strokeStyle = C('curve'); ctx.lineWidth = 6; ctx.beginPath();
    for (let i = 0; i <= 100; i++) { const x = -10 + (20 * i) / 100; if (i) ctx.lineTo(X(x), Y(f(x))); else ctx.moveTo(X(x), Y(f(x))); }
    ctx.stroke(); ctx.restore();
    const m = rs.v;
    for (let i = 0; i < m; i++) {
      const x = m === 1 ? 6 : -9 + (18 * i) / (m - 1);
      if (Math.abs(x) < 0.3) continue;
      line(ctx, X(x), Y(10), X(x), Y(f(x)), g, 2.5); line(ctx, X(x), Y(f(x)), X(0), Y(Fz), g, 2.5);
      arrow(ctx, X(x), Y(10), X(x), Y((10 + f(x)) / 2), g, 2.5);
    }
    dot(ctx, X(0), Y(Fz), C('point'), true, 10);
    text(ctx, '$(0,6.25)$', X(0) + 18, Y(Fz) - 22, C('point'), { size: 22, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$x^{2}=25z$', X(8.8), Y(f(8.8)) + 30, C('curve'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
    headline(ctx, 'Every ray parallel to the axis reflects through the focus, 6.25 m above the vertex.');
    tex(d.readout, 'x^{2}=100\\cdot\\frac{z}{4}=4pz\\ \\Rightarrow\\ 4p=25,\\ p=6.25');
  });
})();

/* Figures 12.87 + 12.88: the six quadric surfaces, each with its semi-axes a, b, c. Box ±6. */
(function () {
  const d = sim('sim-quadrics');
  const box = [[-6, 6], [-6, 6], [-6, 6]];
  const S = live(d, box, { fit: 2.8 });
  const KIND = {
    el: { label: 'ellipsoid', eq: '\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}+\\frac{z^{2}}{c^{2}}=1', tr: 'all three traces are ellipses' },
    h1: { label: 'hyperboloid of one sheet', eq: '\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=1', tr: 'traces in planes z = k are ellipses, in x = k and y = k hyperbolas' },
    h2: { label: 'hyperboloid of two sheets', eq: '\\frac{z^{2}}{c^{2}}-\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=1', tr: 'traces in z = k (|k| > c) are ellipses, in x = k and y = k hyperbolas' },
    co: { label: 'elliptic cone', eq: '\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=0', tr: 'traces in z = k are ellipses; in the xz- and yz-planes, pairs of lines through the origin' },
    ep: { label: 'elliptic paraboloid', eq: '\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=\\frac{z}{c}', tr: 'traces in z = k are ellipses, in x = k and y = k parabolas' },
    hp: { label: 'hyperbolic paraboloid', eq: '\\frac{z}{c}=\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}', tr: 'traces in z = k are hyperbolas, in x = k and y = k parabolas' },
  };
  const pick = F.select(d.controls, { label: '', key: 'surface', options: Object.entries(KIND).map(([value, k]) => ({ value, label: k.label })), value: 'el', aria: 'quadric surface', ms: 0 });
  const c = (label, key, v) => ctl(d.controls, { label, cls: '', key, min: 0.5, max: 3, step: 0.1, value: v, unit: '', dec: 1 });
  const as = c('a', 'a', 2), bs = c('b', 'b', 2.5), cs = c('c', 'c', 3);
  still(d, () => {
    const a = as.v, b = bs.v, cc = cs.v, k = pick.value, sf = C('surface'), o = { n: [48, 24], grid: 8, alpha: 0.5 };
    let marks;
    if (k === 'el') marks = SP.surface((u, v) => [a * Math.sin(v) * Math.cos(u), b * Math.sin(v) * Math.sin(u), cc * Math.cos(v)], [0, TAU], [0.001, Math.PI - 0.001], sf, o);
    if (k === 'h1') { const sm = Math.asinh(6 / cc) * 0.95; marks = SP.surface((u, s) => [a * Math.cosh(s) * Math.cos(u), b * Math.cosh(s) * Math.sin(u), cc * Math.sinh(s)], [0, TAU], [-Math.min(1.3, sm), Math.min(1.3, sm)], sf, o); }
    if (k === 'h2') { const sm = Math.min(1.4, Math.acosh(Math.max(1.01, 6 / cc)) * 0.95); marks = [1, -1].flatMap((g) => SP.surface((u, s) => [a * Math.sinh(s) * Math.cos(u), b * Math.sinh(s) * Math.sin(u), g * cc * Math.cosh(s)], [0, TAU], [0, sm], sf, o)); }
    if (k === 'co') { const tm = Math.min(2, 6 / cc); marks = SP.surface((u, t) => [a * t * Math.cos(u), b * t * Math.sin(u), cc * t], [0, TAU], [-tm, tm], sf, o); }
    if (k === 'ep') { const rm = Math.min(1.4, Math.sqrt(6 / cc)); marks = SP.surface((u, r) => [a * r * Math.cos(u), b * r * Math.sin(u), cc * r * r], [0, TAU], [0, rm], sf, o); }
    if (k === 'hp') { const sm = Math.min(1.4, Math.sqrt(6 / cc)); marks = SP.surface((x, y) => [x, y, cc * ((x * x) / (a * a) - (y * y) / (b * b))], [-a * sm, a * sm], [-b * sm, b * sm], sf, o); }
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('surf', marks);
    S.headline(`The ${KIND[k].label}: ${KIND[k].tr}.`);
    tex(d.readout, `${KIND[k].eq},\\quad a=${n(a, 1)},\\ b=${n(b, 1)},\\ c=${n(cc, 1)}`);
  });
})();
};
