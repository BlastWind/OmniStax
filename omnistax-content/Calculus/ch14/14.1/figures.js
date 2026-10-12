/* Figures for section 14.1 Functions of Several Variables. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, label, headline, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
/* an equal-scale box holding the window, centred at cx, between t and b */
const fit = (xr, yr, t, b, cx = 700) => { const s = (b - t) / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b }; };
/* a closed curve through the canvas points of p(t), t in [0, 2π] */
function loop(ctx, ax, p, color, w = 4, dash) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const [x, y] = p((i / 160) * TAU); if (i) ctx.lineTo(ax.X(x), ax.Y(y)); else ctx.moveTo(ax.X(x), ax.Y(y)); }
  ctx.stroke(); ctx.restore();
}
function fillLoop(ctx, ax, p, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const [x, y] = p((i / 160) * TAU); if (i) ctx.lineTo(ax.X(x), ax.Y(y)); else ctx.moveTo(ax.X(x), ax.Y(y)); }
  ctx.fill(); ctx.restore();
}

/* Figure 14.2 + 14.3: the domain of g = √(9 − x² − y²), the closed disk of radius 3 (axes −4 to 4, one scale), and the
   number line of z (−1 to 4) the function carries a point to. */
(function () {
  const d = sim('sim-domain-map', 560);
  const g = (x, y) => 9 - x * x - y * y;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -4, max: 4, step: 0.05, value: 1, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: -4, max: 4, step: 0.05, value: 2, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: ys });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('set'), pc = C('point'), fc = C('function');
    const ax = axes(ctx, fit([-4, 4], [-4, 4], 90, 530, 400), [-4, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 8, ny: 8 });
    const circ = (t) => [3 * Math.cos(t), 3 * Math.sin(t)];
    fillLoop(ctx, ax, circ, alpha(sc, 0.18)); loop(ctx, ax, circ, sc, 4);
    text(ctx, '$\\kD$', ax.X(-2.55), ax.Y(2.55), sc, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    /* the number line of z */
    const zx = 1060, Z = (z) => 470 - (z + 1) * 76;
    line(ctx, zx, Z(-1), zx, Z(4), PAL.ink, 3);
    for (let k = -1; k <= 4; k++) { line(ctx, zx - 8, Z(k), zx + 8, Z(k), PAL.ink, 2); text(ctx, String(k).replace('-', '−'), zx + 18, Z(k) + 6, PAL.muted, { size: 17 }); }
    text(ctx, '$z$', zx, Z(4) - 18, PAL.ink, { size: 22, align: 'center', tex: true });
    line(ctx, zx, Z(0), zx, Z(3), sc, 9);
    dot(ctx, zx, Z(0), sc, true, 8); dot(ctx, zx, Z(3), sc, true, 8);
    text(ctx, 'range [0, 3]', zx + 44, Z(1.5) + 7, sc, { size: 20, weight: 600 });
    const x = xs.v, y = ys.v, r = g(x, y), inside = r >= -1e-9, z = inside ? Math.sqrt(Math.max(0, r)) : NaN;
    const p = P.draw(ctx, ax, pc);
    hits.length = 0;
    if (p) {
      if (!inside) { dot(ctx, p.x, p.y, PAL.panel, true, 8); dot(ctx, p.x, p.y, pc, false, 9); }
      hits.push({ x: p.x, y: p.y, r: 16, name: `the point (${n(x)}, ${n(y)}) of the plane` });
      if (inside) {
        arrow(ctx, p.x + 12, p.y, zx - 14, Z(z), fc, 4);
        text(ctx, '$\\kg$', (p.x + zx) / 2, (p.y + Z(z)) / 2 - 18, fc, { size: 26, weight: 600, align: 'center', tex: true, bg: PAL.panel });
        dot(ctx, zx, Z(z), pc, true, 9);
        hits.push({ x: zx, y: Z(z), r: 14, name: `z = g(x, y) = ${n(z)}` });
      }
    }
    headline(ctx, inside ? `g(${n(x)}, ${n(y)}) = ${n(z)}, a number in the range [0, 3]` : `(${n(x)}, ${n(y)}) is outside the domain: 9 − x² − y² = ${n(r)} < 0`);
    tex(d.readout, inside ? `\\kg(x,y)=\\sqrt{9-x^{2}-y^{2}}=\\sqrt{${n(r)}}=${hue('function', n(z))}` : `9-x^{2}-y^{2}=${n(r)}\\lt 0,\\;\\text{so}\\;(x,y)\\notin ${hue('set', 'D')}`);
  }
  still(d, draw);
})();

/* Figure 14.4 + 14.5: Example 14.2's hemisphere over the disk of radius 3 and paraboloid over the disk of radius 2.5,
   each with its level circles lifted to their heights; a new box per function. */
(function () {
  const d = sim('sim-graph-surfaces');
  const FN = {
    g: { f: (x, y) => Math.sqrt(Math.max(0, 9 - x * x - y * y)), R: 3, box: [[-3.6, 3.6], [-3.6, 3.6], [0, 3.6]], levels: [1, 2, 2.75],
         ro: `z=\\kg(x,y)=\\sqrt{9-x^{2}-y^{2}},\\;0\\le z\\le 3:\\;\\text{a hemisphere of radius }3` },
    f: { f: (x, y) => x * x + y * y, R: 2.5, box: [[-3, 3], [-3, 3], [0, 6.6]], levels: [1, 2, 4, 6],
         ro: `z=\\kf(x,y)=x^{2}+y^{2}\\ge 0:\\;\\text{a paraboloid}` },
  };
  const pick = choice(d.controls, { label: 'function', options: [{ value: 'g', label: 'g(x, y) = √(9 − x² − y²)' }, { value: 'f', label: 'f(x, y) = x² + y²' }], value: 'g', ms: 0 });
  let S = null, at = '';
  function draw() {
    const o = FN[pick.value];
    if (at !== pick.value) { at = pick.value; S?.v?.dispose?.(); d.stage.replaceChildren(); S = F.space3d(d, { box: o.box, h: 520 }); }
    S.set('axes', SP.axes(o.box, { ticks: 1 }));
    S.set('graph', SP.graph(o.f, { theta: [0, TAU], r: [0, o.R] }, C('surface'), { n: 40, grid: 8, alpha: 0.75, levels: o.levels, lift: true, floor: 0, levelColor: C('curve') }));
    tex(d.readout, o.ro);
  }
  still(d, draw);
})();

/* Figure 14.6: Example 14.3's profit paraboloid over the disk of radius 4 about (3, 2) cut to x, y ≥ 0; box 0–7, 0–6, 0–16. */
(function () {
  const d = sim('sim-profit-surface');
  const f = (x, y) => 16 - (x - 3) ** 2 - (y - 2) ** 2, box = [[0, 7.4], [0, 6.4], [0, 17]];
  const half = (x) => Math.sqrt(Math.max(0, 16 - (x - 3) ** 2));
  const R = { x: [0, 7], y: [(x) => Math.max(0, 2 - half(x)), (x) => 2 + half(x)] };
  const S = F.space3d(d, { box, h: 540 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 7, step: 0.05, value: 3, unit: ' thousand nuts', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: 0, max: 6, step: 0.05, value: 2, unit: ' thousand bolts', dec: 2 });
  S.drag({ at: () => { const z = f(xs.v, ys.v); return z >= 0 ? [xs.v, ys.v, z] : null; }, on: 'graph', move: ([x, y]) => { xs.drive(x); ys.drive(y); } });
  function draw() {
    const x = xs.v, y = ys.v, z = f(x, y);
    S.set('axes', SP.axes(box, { ticks: [1, 1, 4] }));
    S.set('graph', SP.graph(f, R, C('surface'), { n: 36, grid: 8, alpha: 0.75 }));
    S.set('p', z >= 0 ? SP.point([x, y, z], C('point'), { drop: true }) : SP.point([x, y, 0], C('point')));
    tex(d.readout, z >= 0 ? `\\kf(${n(x)},${n(y)})=16-(${n(x)}-3)^{2}-(${n(y)}-2)^{2}=${hue('function', n(z))}\\;\\text{thousand dollars}`
      : `16-(x-3)^{2}-(y-2)^{2}=${n(z)}\\lt 0:\\;(x,y)\\;\\text{lies outside the domain}`);
  }
  still(d, draw);
})();

/* Figure 14.8: the hemisphere g = √(9 − x² − y²) cut by the plane z = c (box ±3.6 by 0–3.6), and beneath it the contour map
   of c = 0, 1, 2, 3 on axes −3.5 to 3.5, one scale, the current level bold. */
(function () {
  const d = sim('sim-level-slice');
  const g = (x, y) => Math.sqrt(Math.max(0, 9 - x * x - y * y)), box = [[-3.6, 3.6], [-3.6, 3.6], [0, 3.6]];
  const S = F.space3d(d, { box, h: 460 });
  const cv = F.makeCanvas(d.stage, 420);
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0, max: 3, step: 0.01, value: 2, unit: '', dec: 2, detents: [0, 1, 2, 3], specials: [{ at: 3 }] });
  const hits = []; hover(d.stage, () => hits, cv);
  function draw() {
    const c = cs.v, R = Math.sqrt(Math.max(0, 9 - c * c)), cc = C('curve');
    const ring = (z) => (t) => [R * Math.cos(t), R * Math.sin(t), z];
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(g, { theta: [0, TAU], r: [0, 3] }, C('surface'), { n: 40, grid: 8, alpha: 0.55 }));
    S.set('plane', SP.plane([0, 0, c], [0, 0, 1], C('plane'), { size: 3.4, alpha: 0.22 }));
    S.set('cut', R > 1e-3 ? [...SP.curve(ring(c), [0, TAU], cc, { w: 5 }), ...SP.curve(ring(0), [0, TAU], cc, { w: 4, dash: [10, 10] }), { k: 'segs', segs: [0, 1, 2, 3].map((i) => [ring(c)(i * Math.PI / 2), ring(0)(i * Math.PI / 2)]), color: 'guide', w: 2 }]
      : [{ k: 'dot', p: [0, 0, 3], color: C('point') }, { k: 'dot', p: [0, 0, 0], color: C('point') }]);
    const { ctx } = begin(cv);
    const ax = axes(ctx, fit([-3.5, 3.5], [-3.5, 3.5], 30, 400), [-3.5, 3.5], [-3.5, 3.5], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    hits.length = 0;
    [0, 1, 2].forEach((k) => {
      const r = Math.sqrt(9 - k * k); loop(ctx, ax, (t) => [r * Math.cos(t), r * Math.sin(t)], alpha(cc, 0.45), 3);
      const a = [0.2, 0.62, 1.05][k];
      text(ctx, `c = ${k}`, ax.X((r + 0.12) * Math.cos(a)) + 4, ax.Y((r + 0.12) * Math.sin(a)) - 2, cc, { size: 17, bg: PAL.panel });
      hits.push({ x: ax.X(r), y: ax.Y(0), r: 12, name: `the level curve c = ${k}: x² + y² = ${9 - k * k}` });
    });
    dot(ctx, ax.X(0), ax.Y(0), alpha(cc, 0.6), true, 6);
    if (R > 1e-3) loop(ctx, ax, (t) => [R * Math.cos(t), R * Math.sin(t)], cc, 5); else dot(ctx, ax.X(0), ax.Y(0), C('point'), true, 9);
    tex(d.readout, R > 1e-3 ? `\\sqrt{9-x^{2}-y^{2}}=${n(c)}\\;\\Rightarrow\\;x^{2}+y^{2}=9-${n(c)}^{2}=${n(R * R)},\\;\\text{a circle of radius }${n(R)}`
      : `\\sqrt{9-x^{2}-y^{2}}=3\\;\\Rightarrow\\;x^{2}+y^{2}=0:\\;\\text{the origin alone}`);
  }
  still(d, draw);
})();

/* Figure 14.9 + 14.10: Example 14.4's level curves 4(x − 1)² + (y + 2)² = 16 − c², ellipses about (1, −2); axes −2 to 4 by
   −7 to 3, one scale. */
(function () {
  const d = sim('sim-contour-ellipses', 620);
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0, max: 4, step: 0.01, value: 0, unit: '', dec: 2, detents: [0, 1, 2, 3, 4], specials: [{ at: 4 }] });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), c = cs.v, k = Math.max(0, 16 - c * c);
    const ax = axes(ctx, fit([-2, 4], [-7, 3], 100, 590), [-2, 4], [-7, 3], { xl: 'x', yl: 'y', nx: 6, ny: 10 });
    const ell = (kk) => (t) => [1 + (Math.sqrt(kk) / 2) * Math.cos(t), -2 + Math.sqrt(kk) * Math.sin(t)];
    hits.length = 0;
    [0, 1, 2, 3].forEach((j) => {
      const kk = 16 - j * j; loop(ctx, ax, ell(kk), alpha(cc, 0.4), 3);
      hits.push({ x: ax.X(1), y: ax.Y(-2 + Math.sqrt(kk)), r: 12, name: `the level curve c = ${j}` });
    });
    if (k > 1e-6) loop(ctx, ax, ell(k), cc, 5);
    dot(ctx, ax.X(1), ax.Y(-2), c > 3.999 ? C('point') : alpha(cc, 0.6), true, c > 3.999 ? 9 : 6);
    hits.push({ x: ax.X(1), y: ax.Y(-2), r: 12, name: 'the level curve c = 4, the point (1, −2)' });
    headline(ctx, k > 1e-6 ? `c = ${n(c)}: an ellipse about (1, −2), semi-axes ${n(Math.sqrt(k) / 2)} across and ${n(Math.sqrt(k))} up` : 'c = 4: the level curve is the single point (1, −2)');
    tex(d.readout, `\\frac{4(x-1)^{2}}{16-c^{2}}+\\frac{(y+2)^{2}}{16-c^{2}}=1,\\quad 16-c^{2}=${n(k)}`);
  }
  still(d, draw);
})();

/* Figure 14.11: z = sin x cos y over [−π, π]² and the trace a plane x = c or y = d cuts; box ±π by −1.4 to 1.4. */
(function () {
  const d = sim('sim-vertical-traces');
  const f = (x, y) => Math.sin(x) * Math.cos(y), PI = Math.PI, box = [[-PI, PI], [-PI, PI], [-1.4, 1.4]];
  const S = F.space3d(d, { box, h: 540 });
  const fam = choice(d.controls, { label: 'traces', options: [{ value: 'x', label: 'x = c' }, { value: 'y', label: 'y = d' }], value: 'x', ms: 0 });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -PI, max: PI, step: 0.01, value: -PI / 4, unit: '', dec: 2, detents: [-PI / 4, 0, PI / 4] });
  function draw() {
    const c = cs.v, onX = fam.value === 'x', cc = C('curve');
    S.set('axes', SP.axes(box, { ticks: [1, 1, 1] }));
    S.set('graph', SP.graph(f, { x: [-PI, PI], y: [-PI, PI] }, C('surface'), { n: 48, grid: 8, alpha: 0.55 }));
    S.set('plane', SP.plane(onX ? [c, 0, 0] : [0, c, 0], onX ? [1, 0, 0] : [0, 1, 0], C('plane'), { box, alpha: 0.2 }));
    S.set('trace', SP.curve(onX ? (t) => [c, t, f(c, t)] : (t) => [t, c, f(t, c)], [-PI, PI], cc, { w: 5 }));
    const k = Math.sin(c), m = Math.cos(c);
    tex(d.readout, onX ? `x=${n(c)}:\\;z=\\sin(${n(c)})\\cos y=${hue('curve', n(k, 4) + '\\cos y')}` : `y=${n(c)}:\\;z=\\sin x\\cos(${n(c)})=${hue('curve', n(m, 4) + '\\sin x')}`);
  }
  still(d, draw);
})();

/* Figure 14.13: the level surface 4x² + 9y² − z² = c, parameterized by the angle u and the height z; box ±2, ±1.5, ±3. */
(function () {
  const d = sim('sim-level-surfaces');
  const box = [[-2, 2], [-1.5, 1.5], [-3, 3]];
  const S = F.space3d(d, { box, h: 540 });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -2, max: 3, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: 0 }] });
  function draw() {
    const c = cs.v, sc = C('surface');
    const r = (u, z) => { const k = Math.sqrt(Math.max(0, c + z * z)); return [(k / 2) * Math.cos(u), (k / 3) * Math.sin(u), z]; };
    const z0 = c < 0 ? Math.sqrt(-c) : 0;
    const sheets = c < 0 ? [...SP.surface(r, [0, TAU], [z0, 3], sc, { n: [48, 20], grid: 8, alpha: 0.7 }), ...SP.surface(r, [0, TAU], [-3, -z0], sc, { n: [48, 20], grid: 8, alpha: 0.7 })]
      : SP.surface(r, [0, TAU], [-3, 3], sc, { n: [48, 30], grid: 10, alpha: 0.7 });
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('surface', sheets);
    const name = Math.abs(c) < 1e-9 ? '\\text{a cone}' : c > 0 ? '\\text{a hyperboloid of one sheet}' : '\\text{a hyperboloid of two sheets}';
    tex(d.readout, `\\kf(x,y,z)=4x^{2}+9y^{2}-z^{2}=${n(c)}:\\;${name}`);
  }
  still(d, draw);
})();
};
