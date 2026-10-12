/* Figures for section 14.2 Limits and Continuity. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, arrow, dot, line, text, headline, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const fit = (xr, yr, t, b, cx = 700) => { const s = (b - t) / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b }; };
function path(ctx, ax, p, m, color, w = 4, dash, close = true) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= m; i++) { const [x, y] = p(i / m); if (i) ctx.lineTo(ax.X(x), ax.Y(y)); else ctx.moveTo(ax.X(x), ax.Y(y)); }
  if (close) ctx.closePath(); ctx.stroke(); ctx.restore();
}
function fillPath(ctx, ax, p, m, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  for (let i = 0; i <= m; i++) { const [x, y] = p(i / m); if (i) ctx.lineTo(ax.X(x), ax.Y(y)); else ctx.moveTo(ax.X(x), ax.Y(y)); }
  ctx.closePath(); ctx.fill(); ctx.restore();
}
const circ = (cx, cy, r) => (s) => [cx + r * Math.cos(s * TAU), cy + r * Math.sin(s * TAU)];

/* Figure 14.14: the δ disk about (2, 1); axes −1.5 to 3.5 by −1 to 3, one scale. */
(function () {
  const d = sim('sim-delta-disk', 500);
  const ds = ctl(d.controls, { label: 'δ', cls: '', key: 'delta', min: 0.05, max: 1.5, step: 0.01, value: 0.3, unit: '', dec: 2 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -1.5, max: 3.5, step: 0.01, value: 2.4, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: -1, max: 3, step: 0.01, value: 1.6, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: ys });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('set'), pc = C('point'), del = ds.v;
    const ax = axes(ctx, fit([-1.5, 3.5], [-1, 3], 90, 470), [-1.5, 3.5], [-1, 3], { xl: 'x', yl: 'y', nx: 10, ny: 8, fx: (v) => n(v, 1), fy: (v) => n(v, 1) });
    fillPath(ctx, ax, circ(2, 1, del), 96, alpha(sc, 0.2)); path(ctx, ax, circ(2, 1, del), 96, sc, 3, [10, 8]);
    line(ctx, ax.X(2), ax.Y(1), ax.X(2 + del), ax.Y(1), sc, 3);
    text(ctx, '$\\delta$', ax.X(2 + del / 2), ax.Y(1) - 10, sc, { size: 22, align: 'center', tex: true, bg: PAL.panel });
    dot(ctx, ax.X(2), ax.Y(1), pc, true, 8);
    text(ctx, '(2, 1)', ax.X(2) - 14, ax.Y(1) + 26, pc, { size: 20, align: 'right', weight: 600, bg: PAL.panel });
    const dist = Math.hypot(xs.v - 2, ys.v - 1), inside = dist < del;
    const p = P.draw(ctx, ax, inside ? sc : PAL.ink);
    hits.length = 0;
    if (p) hits.push({ x: p.x, y: p.y, r: 16, name: `(${n(xs.v)}, ${n(ys.v)}), ${n(dist)} from (2, 1)` });
    hits.push({ x: ax.X(2), y: ax.Y(1), r: 12, name: 'the center (2, 1)' });
    headline(ctx, `(${n(xs.v)}, ${n(ys.v)}) is ${n(dist)} from (2, 1): ${inside ? 'inside' : 'outside'} the δ disk of radius ${n(del)}`);
    tex(d.readout, `\\sqrt{(x-2)^{2}+(y-1)^{2}}=${n(dist)}\\;${inside ? '\\lt' : '\\ge'}\\;\\delta =${n(del)}`);
  }
  still(d, draw);
})();

/* Figure 14.15: the stand-in surface f = 3 + 0.3x − 0.2(x² + y²) over [−1, 3]², (a, b) = (1, 1), L = 2.9; box −1–3, −1–3, 0–3.6.
   The δ that works is the largest radius whose disk's image stays in the slab, by bisection on sampled circles. */
(function () {
  const d = sim('sim-limit-eps-delta');
  const f = (x, y) => 3 + 0.3 * x - 0.2 * (x * x + y * y), a = 1, b = 1, L = f(a, b), box = [[-1, 3], [-1, 3], [0, 3.6]];
  const worst = (del) => { let m = 0; for (let j = 1; j <= 6; j++) for (let i = 0; i < 48; i++) { const r = (del * j) / 6, t = (i / 48) * TAU; m = Math.max(m, Math.abs(f(a + r * Math.cos(t), b + r * Math.sin(t)) - L)); } return m; };
  const best = (eps) => { let lo = 0, hi = 2; for (let k = 0; k < 40; k++) { const mid = (lo + hi) / 2; if (worst(mid) < eps) lo = mid; else hi = mid; } return lo; };
  const S = F.space3d(d, { box, h: 540 });
  const es = ctl(d.controls, { label: 'ε', cls: 'limit', key: 'eps', min: 0.05, max: 1, step: 0.01, value: 0.3, unit: '', dec: 2 });
  const ds = ctl(d.controls, { label: 'δ', cls: '', key: 'delta', min: 0.05, max: 1.5, step: 0.01, value: 0.4, unit: '', dec: 2, specials: [{ at: () => best(es.v), label: 'the largest δ that works' }] });
  function draw() {
    const eps = es.v, del = ds.v, w = worst(del), ok = w < eps, lc = C('limit'), sc = C('set');
    const ring = (z) => (t) => [a + del * Math.cos(t), b + del * Math.sin(t), z === null ? f(a + del * Math.cos(t), b + del * Math.sin(t)) : z];
    const floor = Array.from({ length: 49 }, (_, i) => ring(0)((i / 48) * TAU));
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(f, { x: [-1, 3], y: [-1, 3] }, C('surface'), { n: 32, grid: 8, alpha: 0.5 }));
    S.set('slab', [...SP.plane([a, b, L + eps], [0, 0, 1], lc, { size: 1.7, alpha: 0.16 }), ...SP.plane([a, b, L - eps], [0, 0, 1], lc, { size: 1.7, alpha: 0.16 }),
      { k: 'dot', p: [a, b, L], color: lc }, { k: 'label', s: '$\\kL$', p: [a - 0.25, b - 0.25, L], color: lc }]);
    S.set('disk', [{ k: 'faces', faces: [floor], color: sc, alpha: 0.3 }, { k: 'line', pts: floor, color: sc, w: 3 }, { k: 'dot', p: [a, b, 0], color: C('point') },
      { k: 'label', s: '$(a,b)$', p: [a, b - 0.35, 0], color: C('point') },
      ...SP.curve(ring(null), [0, TAU], ok ? sc : PAL.bad, { w: 5 }), { k: 'segs', segs: [[[a, b, 0], [a, b, L]]], color: 'guide', w: 2 }]);
    tex(d.readout, `\\max_{\\text{disk}}|\\kf(x,y)-\\kL|=${n(w, 3)}\\;${ok ? '\\lt' : '\\ge'}\\;\\varepsilon =${n(eps)}\\quad(\\delta =${n(del)},\\;\\text{largest that works}\\;${n(best(eps), 2)})`);
  }
  still(d, draw);
})();

/* Figure 14.16: Example 14.9's functions on 0.04 ≤ r ≤ 2 about the origin (box ±2 by −1.25 to 1.25); a path into the origin,
   a line y = kx or a parabola x = ky², lifted onto the surface. */
(function () {
  const d = sim('sim-path-limits');
  const FN = {
    a: { f: (x, y) => (2 * x * y) / (3 * x * x + y * y), line: (k) => (2 * k) / (3 + k * k), par: () => 0,
         tex: '\\frac{2xy}{3x^{2}+y^{2}}', lineTex: (k) => `\\frac{2k}{3+k^{2}}`, parTex: () => '0' },
    b: { f: (x, y) => (4 * x * y * y) / (x * x + 3 * y ** 4), line: () => 0, par: (k) => (4 * k) / (k * k + 3),
         tex: '\\frac{4xy^{2}}{x^{2}+3y^{4}}', lineTex: () => '0', parTex: () => `\\frac{4k}{k^{2}+3}` },
  };
  const box = [[-2, 2], [-2, 2], [-1.25, 1.25]];
  const S = F.space3d(d, { box, h: 540 });
  const fn = choice(d.controls, { label: 'function', options: [{ value: 'a', label: 'a. 2xy/(3x² + y²)' }, { value: 'b', label: 'b. 4xy²/(x² + 3y⁴)' }], value: 'a', ms: 0 });
  const pth = choice(d.controls, { label: 'path', options: [{ value: 'line', label: 'line y = kx' }, { value: 'par', label: 'parabola x = ky²' }], value: 'line', ms: 0 });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: -3, max: 3, step: 0.01, value: 1, unit: '', dec: 2, detents: [0, 1] });
  function draw() {
    const o = FN[fn.value], k = ks.v, isLine = pth.value === 'line', lc = C('line');
    const at = (t) => (isLine ? [t, k * t] : [k * t * t, t]);
    const reach = isLine ? 2 / Math.hypot(1, k) : Math.min(2, Math.sqrt(2 / Math.max(Math.abs(k), 0.01)));
    const run = (s0, s1) => SP.curve((t) => { const [x, y] = at(t); return [x, y, o.f(x, y)]; }, [s0, s1], lc, { w: 5, n: 120 });
    const flat = (s0, s1) => SP.curve((t) => { const [x, y] = at(t); return [x, y, -1.25]; }, [s0, s1], alpha(lc, 0.6), { w: 3, n: 60 });
    const gap = 0.05, v = isLine ? o.line(k) : o.par(k);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(o.f, { theta: [0, TAU], r: [0.04, 2] }, C('surface'), { n: 56, grid: 8, alpha: 0.55 }));
    S.set('path', [...run(gap, reach), ...run(-reach, -gap), ...flat(-reach, reach), { k: 'dot', p: [0, 0, v], color: C('limit'), hollow: true }]);
    tex(d.readout, `\\kf(x,y)=${o.tex};\\;\\text{along }${isLine ? 'y=kx' : 'x=ky^{2}'}:\\;\\kf=${isLine ? o.lineTex(k) : o.parTex(k)}=${hue('limit', n(v, 3))}`);
  }
  still(d, draw);
})();

/* Figure 14.17: the set S bounded by r(θ) = 4.21 − 0.65 sin 2θ (through (2, 3)); axes −5.5 to 5.5, one scale. */
(function () {
  const d = sim('sim-interior-boundary', 670);
  const B = 3.6056 + 0.65 * Math.sin(2 * Math.atan2(3, 2));
  const rS = (t) => B - 0.65 * Math.sin(2 * t), edge = (s) => { const t = s * TAU; return [rS(t) * Math.cos(t), rS(t) * Math.sin(t)]; };
  const inS = (x, y) => Math.hypot(x, y) < rS(Math.atan2(y, x));
  const kind = choice(d.controls, { label: 'boundary', options: [{ value: 'open', label: 'not in S' }, { value: 'closed', label: 'in S' }, { value: 'half', label: 'half in S' }], value: 'closed', ms: 0 });
  const ds = ctl(d.controls, { label: 'δ', cls: '', key: 'delta', min: 0.1, max: 1.5, step: 0.01, value: 0.5, unit: '', dec: 2 });
  const xs = ctl(d.controls, { label: 'x₀', cls: '', key: 'x0', min: -5.5, max: 5.5, step: 0.01, value: -1, unit: '', dec: 2, detents: [-1, 2] });
  const ys = ctl(d.controls, { label: 'y₀', cls: '', key: 'y0', min: -5.5, max: 5.5, step: 0.01, value: 1, unit: '', dec: 2, detents: [1, 3] });
  const P = drag(d, { x: xs, y: ys });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('set'), pc = C('point'), del = ds.v, x0 = xs.v, y0 = ys.v;
    const ax = axes(ctx, fit([-5.5, 5.5], [-5.5, 5.5], 104, 640), [-5.5, 5.5], [-5.5, 5.5], { xl: 'x', yl: 'y', nx: 11, ny: 11 });
    fillPath(ctx, ax, edge, 240, alpha(sc, 0.15));
    const k = kind.value;
    if (k === 'open') path(ctx, ax, edge, 240, sc, 4, [12, 10]);
    else if (k === 'closed') path(ctx, ax, edge, 240, sc, 4);
    else { path(ctx, ax, (s) => edge(s / 2), 120, sc, 4, undefined, false); path(ctx, ax, (s) => edge(0.5 + s / 2), 120, sc, 4, [12, 10], false); }
    text(ctx, '$S$', ax.X(1.2), ax.Y(1.6), sc, { size: 26, weight: 600, tex: true, align: 'center' });
    /* the δ disk about P₀: inside S, partly, or not at all */
    let ins = 0, out = 0;
    for (let j = 0; j <= 4; j++) for (let i = 0; i < 36; i++) { const r = (del * j) / 4, t = (i / 36) * TAU; if (inS(x0 + r * Math.cos(t), y0 + r * Math.sin(t))) ins++; else out++; }
    const rho = Math.hypot(x0, y0), onEdge = Math.abs(rho - rS(Math.atan2(y0, x0))) < 0.06;
    const what = onEdge ? 'boundary' : out === 0 ? 'interior' : ins === 0 || !inS(x0, y0) ? 'outside' : 'interior';
    const disk = circ(x0, y0, del);
    fillPath(ctx, ax, disk, 72, alpha(pc, 0.18)); path(ctx, ax, disk, 72, pc, 3);
    const p = P.draw(ctx, ax, pc);
    hits.length = 0;
    if (p) { text(ctx, '$P_{0}$', p.x + 14, p.y - 14, pc, { size: 22, weight: 600, tex: true, bg: PAL.panel }); hits.push({ x: p.x, y: p.y, r: 16, name: `P₀ = (${n(x0)}, ${n(y0)})` }); }
    const half = Math.atan2(y0, x0) >= 0 && Math.atan2(y0, x0) <= Math.PI;
    const member = onEdge ? (k === 'closed' || (k === 'half' && half)) : inS(x0, y0);
    const setName = k === 'open' ? 'S is open' : k === 'closed' ? 'S is closed' : 'S is neither open nor closed';
    headline(ctx, `P₀ is ${what === 'boundary' ? 'a boundary point' : what === 'interior' ? 'an interior point' : 'outside S'}${member ? ', in S' : ', not in S'}; ${setName}`);
    tex(d.readout, what === 'interior' ? `\\text{a }\\delta \\text{ disk of radius }${n(del)}\\text{ about }P_{0}\\text{ lies in }S` : what === 'boundary' ? `\\text{every }\\delta \\text{ disk about }P_{0}\\text{ holds points inside and outside }S` : `P_{0}\\notin S\\text{ and is not on its boundary}`);
  }
  still(d, draw);
})();

/* Figure 14.18 + 14.19: f = √(25 − x² − y²) over the disk of radius 5; the point at distance d inside from (4, 3) along the
   radius. Box ±5.5 by 0 to 5.5. */
(function () {
  const d = sim('sim-boundary-limit');
  const f = (x, y) => Math.sqrt(Math.max(0, 25 - x * x - y * y)), box = [[-5.5, 5.5], [-5.5, 5.5], [0, 5.5]];
  const S = F.space3d(d, { box, h: 540 });
  const dsl = ctl(d.controls, { label: 'd', aria: 'distance d from the boundary point (4, 3)', cls: '', key: 'd', min: 0, max: 2.5, step: 0.01, value: 1.5, unit: '', dec: 2, specials: [{ at: 0 }] });
  function draw() {
    const dd = dsl.v, k = 1 - dd / 5, x = 4 * k, y = 3 * k, z = f(x, y), sc = C('set');
    const rim = Array.from({ length: 97 }, (_, i) => [5 * Math.cos((i / 96) * TAU), 5 * Math.sin((i / 96) * TAU), 0]);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('domain', [{ k: 'faces', faces: [rim], color: sc, alpha: 0.18 }, { k: 'line', pts: rim, color: sc, w: 3 }]);
    S.set('graph', SP.graph(f, { theta: [0, TAU], r: [0, 5] }, C('surface'), { n: 40, grid: 8, alpha: 0.5 }));
    S.set('p', [...SP.point([x, y, z], C('point'), { drop: false }), { k: 'segs', segs: [[[x, y, 0], [x, y, z]]], color: 'guide', w: 2 }, { k: 'dot', p: [4, 3, 0], color: C('point'), hollow: true },
      { k: 'label', s: '$(4,3)$', p: [4.4, 3.4, 0], color: C('point') }, { k: 'dot', p: [x, y, 0], color: C('point'), r: 6 }]);
    tex(d.readout, `\\kf(${n(x)},${n(y)})=\\sqrt{25-${n(x)}^{2}-${n(y)}^{2}}=${hue('function', n(z))}\\;\\to\\;${hue('limit', '0')}\\;\\text{as}\\;(x,y)\\to (4,3)`);
  }
  still(d, draw);
})();

/* Figure 14.20, a faithful copy: the domain of g with (x, y), the range of g on a line, and the range of f. */
(function () {
  const d = sim('fig-composition', 300);
  still(d, () => {
    const { ctx } = begin(d.c);
    const sc = C('set'), fc = C('function'), pc = C('point');
    const blob = (s) => { const t = s * TAU, r = 95 + 22 * Math.sin(3 * t + 0.6); return [250 + r * Math.cos(t), 150 + 0.8 * r * Math.sin(t)]; };
    const ax = { X: (v) => v, Y: (v) => v };
    fillPath(ctx, ax, blob, 120, alpha(sc, 0.15)); path(ctx, ax, blob, 120, sc, 3);
    line(ctx, 560, 170, 820, 170, sc, 3); line(ctx, 960, 170, 1220, 170, sc, 3);
    dot(ctx, 250, 140, pc, true, 7); text(ctx, '$(x,y)$', 250, 172, pc, { size: 20, align: 'center', tex: true });
    dot(ctx, 690, 170, pc, true, 7); text(ctx, '$z$', 690, 200, pc, { size: 20, align: 'center', tex: true });
    dot(ctx, 1090, 170, pc, true, 7); text(ctx, '$\\kf(z)$', 1090, 200, pc, { size: 20, align: 'center', tex: true });
    const bend = (x1, x2, name) => {
      ctx.save(); ctx.strokeStyle = fc; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x1, 130); ctx.quadraticCurveTo((x1 + x2) / 2, 40, x2 - 8, 150); ctx.stroke(); ctx.restore();
      arrow(ctx, x2 - 20, 130, x2 - 6, 156, fc, 3);
      text(ctx, name, (x1 + x2) / 2, 70, fc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    };
    bend(268, 690, '$\\kg$'); bend(710, 1090, '$\\kf$');
    text(ctx, 'domain of g', 250, 272, sc, { size: 20, align: 'center', weight: 600 });
    text(ctx, 'range of g, domain of f', 690, 236, sc, { size: 20, align: 'center', weight: 600 });
    text(ctx, 'range of f', 1090, 236, sc, { size: 20, align: 'center', weight: 600 });
  });
})();
};
