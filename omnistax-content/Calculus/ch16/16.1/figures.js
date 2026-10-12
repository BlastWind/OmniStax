/* Figures for section 16.1 Vector Fields. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, arrow, dot, line, text, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const tk3 = (v) => (v > 2.5 ? '' : fmt(v, 0).replace('-', '−'));
/* an equal-scale square box of side s centred at (cx, cy) */
const square = (s, cx = 700, cy = 320) => ({ l: cx - s / 2, r: cx + s / 2, t: cy - s / 2, b: cy + s / 2 });
/* the largest |F| over the n × n cell centres of [lo, hi]², which field2 scales its arrows by */
function bigOf(Fv, lo, hi, n) {
  let big = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const v = Fv([lo + ((i + 0.5) * (hi - lo)) / n, lo + ((j + 0.5) * (hi - lo)) / n]), m = Math.hypot(v[0], v[1]);
    if (Number.isFinite(m)) big = Math.max(big, m);
  }
  return big;
}
function circle(ctx, ax, R, color, w = 2.5, dash = [10, 10]) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash(dash); ctx.beginPath();
  ctx.arc(ax.X(0), ax.Y(0), Math.abs(ax.X(R) - ax.X(0)), 0, TAU); ctx.stroke(); ctx.restore();
}

/* A plane field on [lo, hi]² (one scale, n × n arrows) and the point (a, b) dragged over it with its own vector
   at the grid's scale. o.extra draws under the probe; o.ro writes the readout; o.at0 is where F is undefined. */
function probeField(id, o) {
  const d = sim(id, 640);
  const [lo, hi] = o.range, n = o.n ?? 6, cell = (hi - lo) / n, step = o.tick ?? 1, nt = Math.round((hi - lo) / step);
  const tk = (v) => (Math.abs(v - hi) < 1e-9 ? '' : fmt(v, step < 1 ? 1 : 0).replace('-', '−'));
  const k = (0.85 * cell) / bigOf(o.F, lo, hi, n);
  const opt = (label, key, v) => ctl(d.controls, { label, cls: '', key, min: lo, max: hi, step: 0.05, value: v, unit: '', dec: 2, detents: o.detents });
  const as = opt('a', 'a', o.p0[0]), bs = opt('b', 'b', o.p0[1]);
  const P = drag(d, { x: as, y: bs });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), vf = C('vector-field');
    const ax = axes(ctx, square(560, 700, 320), [lo, hi], [lo, hi], { xl: 'x', yl: 'y', nx: nt, ny: nt, fx: tk, fy: tk });
    hits.length = 0;
    o.extra?.(ctx, ax, as.v, bs.v, hits);
    SP.field2(ctx, ax, o.F, alpha(vf, 0.6), { n: [n, n], scale: k, w: 2.5 });
    const a = as.v, b = bs.v, v = o.F([a, b]), ok = v.every(Number.isFinite);
    const p = P.draw(ctx, ax, C('point'));
    if (p && ok) {
      const tx = ax.X(a + v[0] * k), ty = ax.Y(b + v[1] * k);
      arrow(ctx, p.x, p.y, tx, ty, vf, 5);
      const ux = tx - p.x, uy = ty - p.y, L = Math.hypot(ux, uy) || 1;
      text(ctx, o.name ?? '$\\kvecF(a,b)$', tx + (ux / L) * 34, ty + (uy / L) * 30 + 8, vf, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      hits.push({ x: (p.x + tx) / 2, y: (p.y + ty) / 2, r: 18, name: `F(${n2(a)}, ${n2(b)}) = ⟨${n2(v[0])}, ${n2(v[1])}⟩` });
    } else if (p) { dot(ctx, p.x, p.y, PAL.panel, true, 8); dot(ctx, p.x, p.y, C('point'), false, 9); }
    if (p) hits.push({ x: p.x, y: p.y, r: 16, name: `the point (${n2(a)}, ${n2(b)})` });
    tex(d.readout, o.ro(a, b, v, ok));
  }
  still(d, draw);
}

/* Figure 16.3: Example 16.2's radial field F = ⟨x/2, y/2⟩ on [−3, 3]², the circle through the point */
probeField('sim-radial-field', {
  F: ([x, y]) => [x / 2, y / 2], range: [-3, 3], p0: [2, 1], detents: [-3, -2, -1, 0, 1, 2, 3],
  extra: (ctx, ax, a, b, hits) => {
    const R = Math.hypot(a, b); if (R < 1e-6) return;
    circle(ctx, ax, R, alpha(PAL.ink, 0.45));
    hits.push({ x: ax.X(-a), y: ax.Y(-b), r: 14, name: `the circle x² + y² = ${n2(R * R)}, centred at the origin` });
  },
  ro: (a, b, v) => { const r = Math.hypot(a, b);
    return `\\kvecF(${n2(a)},${n2(b)})=\\left\\langle \\tfrac{${n2(a)}}{2},\\tfrac{${n2(b)}}{2}\\right\\rangle=\\langle ${hue('vector-field', n2(v[0]))},${hue('vector-field', n2(v[1]))}\\rangle,\\quad \\|\\kvecF\\|=\\tfrac{r}{2}=${hue('vector-field', n2(r / 2))}`; },
});

/* Figure 16.5: Example 16.3's rotational field ⟨y, −x⟩ on [−3, 3]², the circle and the radial vector ⟨a, b⟩ */
probeField('sim-rotational-field', {
  F: ([x, y]) => [y, -x], range: [-3, 3], p0: [2, 1],
  extra: (ctx, ax, a, b, hits) => {
    const R = Math.hypot(a, b); if (R < 1e-6) return;
    circle(ctx, ax, R, alpha(PAL.ink, 0.45));
    line(ctx, ax.X(0), ax.Y(0), ax.X(a), ax.Y(b), alpha(PAL.ink, 0.7), 3, [4, 8]);
    hits.push({ x: ax.X(a / 2), y: ax.Y(b / 2), r: 14, name: `the radial vector ⟨a, b⟩ = ⟨${n2(a)}, ${n2(b)}⟩` });
    hits.push({ x: ax.X(-a), y: ax.Y(-b), r: 14, name: `the circle of radius r = ${n2(R)}` });
  },
  ro: (a, b, v) => `\\kvecF(${n2(a)},${n2(b)})=\\langle ${hue('vector-field', n2(v[0]))},${hue('vector-field', n2(v[1]))}\\rangle,\\quad \\langle a,b\\rangle\\cdot\\langle b,-a\\rangle=0,\\quad \\|\\kvecF\\|=r=${hue('vector-field', n2(Math.hypot(a, b)))}`,
});

/* Figure 16.6: Example 16.4's whirlpool ⟨y, −x⟩/(x² + y²) on [−3, 3]²; the origin is outside its domain */
probeField('sim-whirlpool-field', {
  F: ([x, y]) => { const q = x * x + y * y; return q < 1e-12 ? [NaN, NaN] : [y / q, -x / q]; }, range: [-3, 3], p0: [1, 1],
  extra: (ctx, ax, a, b, hits) => {
    const R = Math.hypot(a, b); if (R > 1e-6) circle(ctx, ax, R, alpha(PAL.ink, 0.45));
    dot(ctx, ax.X(0), ax.Y(0), PAL.panel, true, 7); dot(ctx, ax.X(0), ax.Y(0), PAL.ink, false, 8);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 12, name: 'the origin, outside the domain of F' });
  },
  ro: (a, b, v, ok) => (ok
    ? `\\kvecF(${n2(a)},${n2(b)})=\\left\\langle \\tfrac{b}{a^{2}+b^{2}},-\\tfrac{a}{a^{2}+b^{2}}\\right\\rangle=\\langle ${hue('vector-field', n2(v[0]))},${hue('vector-field', n2(v[1]))}\\rangle,\\quad \\|\\kvecF\\|=\\tfrac{1}{\\sqrt{a^{2}+b^{2}}}=${hue('vector-field', n2(1 / Math.hypot(a, b)))}`
    : `(0,0)\\;\\text{is outside the domain of}\\;\\kvecF:\\;\\|\\kvecF(a,b)\\|\\to\\infty\\;\\text{as}\\;(a,b)\\to(0,0)`),
});

/* Figure 16.7: Example 16.7's ⟨1, 1, z⟩ in the box [−2, 2]³, one level z drawn bolder; the arrows share one scale */
(function () {
  const d = sim('sim-field-1-1-z');
  const box = [[-2, 2], [-2, 2], [-2, 2]], Fv = (p) => [1, 1, p[2]];
  const k = 0.9 / Math.hypot(1, 1, 1.5);
  const S = F.space3d(d, { box, h: 540, pitch: [-1.4, 1.4] });
  const zs = ctl(d.controls, { label: 'z', cls: '', key: 'z', min: -2, max: 2, step: 0.05, value: 1, unit: '', dec: 2, specials: [{ at: 0 }] });
  function draw() {
    const z = zs.v, vf = C('vector-field');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('field', SP.field(Fv, box, alpha(vf, 0.55), { n: [4, 4, 4], scale: k }));
    S.set('level', [...SP.plane([0, 0, z], [0, 0, 1], 'guide', { size: 2, alpha: 0.12 }),
      ...SP.field(Fv, [[-2, 2], [-2, 2], [z - 0.01, z + 0.01]], vf, { n: [3, 3, 1], scale: k }).map((m) => ({ ...m, w: 5 }))]);
    const ang = (Math.atan2(z, Math.SQRT2) * 180) / Math.PI;
    tex(d.readout, `\\kvecF(x,y,${n2(z)})=\\langle 1,1,${hue('vector-field', n2(z))}\\rangle,\\quad \\text{rising at}\\;${n2(ang, 1)}^{\\circ}\\;\\text{above the}\\;xy\\text{-plane}`);
  }
  still(d, draw);
})();

/* Figure 16.8: the gravitational field −Gm₁m₂⟨x, y, z⟩/r³ with Gm₁m₂ = 1 in the box [−3, 3]³, and a point at distance r on the diagonal */
(function () {
  const d = sim('sim-gravity-field');
  const box = [[-3, 3], [-3, 3], [-3, 3]];
  const Fv = (p) => { const r = Math.hypot(p[0], p[1], p[2]), q = r * r * r; return [-p[0] / q, -p[1] / q, -p[2] / q]; };
  const k = (0.9 * 1.5) / Math.hypot(...Fv([0.75, 0.75, 0.75]));
  const S = F.space3d(d, { box, h: 560, pitch: [-1.4, 1.4], fit: 2.7 });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 1.2, max: 5, step: 0.05, value: 3, unit: '', dec: 2 });
  function draw() {
    const r = rs.v, u = 1 / Math.sqrt(3), p = [r * u, r * u, r * u], v = Fv(p), vf = C('vector-field');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('mass', [{ k: 'dot', p: [0, 0, 0], color: 'ink', r: 13 }, { k: 'label', s: '$m_{1}$', p: [0, 0, -0.55], color: 'ink' }]);
    S.set('field', SP.field(Fv, box, alpha(vf, 0.55), { n: [4, 4, 4], scale: k }));
    S.set('probe', [...SP.point(p, C('point'), { name: '$m_{2}$', r: 11 }), ...SP.vector(p, SP.add(p, SP.mul(v, k)), vf, { name: '$\\kvecF$' })]);
    tex(d.readout, `\\|\\kvecF\\|=\\frac{Gm_{1}m_{2}}{r^{2}}=\\frac{1}{${n2(r)}^{2}}=${hue('vector-field', n2(1 / (r * r), 3))}`);
  }
  still(d, draw);
})();

/* Figure 16.9 + 16.10: ∇(x²y²) = ⟨2xy², 2x²y⟩ on [−2, 2]² with the level curves x²y² = c */
(function () {
  const f = (x, y) => x * x * y * y, G = ([x, y]) => [2 * x * y * y, 2 * x * x * y];
  const hyper = (ctx, ax, c, color, w) => {
    const s = Math.sqrt(c); if (s < 1e-6) return;
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sy]) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      const x0 = s / 1.5, N = 80;
      for (let i = 0; i <= N; i++) { const x = x0 + ((1.5 - x0) * i) / N, y = s / x; const X = ax.X(sx * x), Y = ax.Y(sy * y); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
      ctx.stroke(); ctx.restore();
    });
  };
  probeField('sim-gradient-field', {
    F: G, range: [-1.5, 1.5], tick: 0.5, p0: [1, 1], name: '$\\kgradf(a,b)$',
    extra: (ctx, ax, a, b, hits) => {
      const cc = C('curve');
      [0.0625, 0.25, 0.5625, 1].forEach((c) => hyper(ctx, ax, c, alpha(cc, 0.45), 2.5));
      const c0 = f(a, b);
      if (c0 > 1e-4 && c0 < 2.25) hyper(ctx, ax, c0, cc, 4);
      hits.push({ x: ax.X(Math.sign(a || 1) * 1.4), y: ax.Y(Math.sign(b || 1) * Math.sqrt(Math.max(c0, 0)) / 1.4), r: 14, name: `the level curve x²y² = ${n2(c0)}` });
    },
    ro: (a, b, v) => `\\kgradf(${n2(a)},${n2(b)})=\\langle 2ab^{2},2a^{2}b\\rangle=\\langle ${hue('vector-field', n2(v[0]))},${hue('vector-field', n2(v[1]))}\\rangle,\\quad \\kf(${n2(a)},${n2(b)})=${hue('function', n2(f(a, b)))}`,
  });
})();

/* Figure 16.11: Example 16.11's velocity field v = ⟨xy, x²/2 − y⟩ on [−3, 3]², a still copy */
(function () {
  const d = sim('fig-velocity-potential', 640);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, square(560, 700, 320), [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: tk3, fy: tk3 });
    SP.field2(ctx, ax, ([x, y]) => [x * y, (x * x) / 2 - y], C('vector-field'), { n: [8, 8], w: 2.5 });
  }
  still(d, draw);
})();
};
