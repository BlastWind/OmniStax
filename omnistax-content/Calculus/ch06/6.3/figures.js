/* Figures for section 6.3 Volumes of Revolution: Cylindrical Shells. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, dot, line, arrow, text, label, headline, register, readout, fmt, hbracket, vbracket, choice } = F;
const RV = F.revolve;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
const simpson = (h, a, b, n = 400) => { const w = (b - a) / n; let s = h(a) + h(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * h(a + i * w); return (s * w) / 3; };
const TAU = 2 * Math.PI;
/* the quarter between straight up and toward the reader is cut away, so the inside shows */
const CUT = { from: Math.PI / 2, to: 2 * Math.PI, m: 64 };

/* ---------- locked views (F.revolve.paint) ---------- */
const lcam = (cx, cy, s, at, yaw = 0.32, pitch = 0.26) => RV.camera({ yaw, pitch, dist: 2600, cx, cy, s, at });
const seg3 = (ctx, cam, a, b, color, w = 3, d) => { const p = cam.P(a), q = cam.P(b); line(ctx, p[0], p[1], q[0], q[1], color, w, d); };
const arrow3 = (ctx, cam, a, b, color, w = 3) => { const p = cam.P(a), q = cam.P(b); arrow(ctx, p[0], p[1], q[0], q[1], color, w); };
function path3(ctx, cam, pts, color, w = 3, d) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; if (d) ctx.setLineDash(d); ctx.beginPath();
  pts.forEach((p, i) => { const [x, y] = cam.P(p); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
}
const name3 = (ctx, cam, p, s, color = PAL.ink, o = {}) => { const [x, y] = cam.P(p); text(ctx, s, x + (o.dx ?? 0), y + (o.dy ?? 0), color, { size: o.size ?? 22, weight: 600, align: o.align ?? 'center', tex: o.tex, bg: o.bg }); };
function axes3(ctx, cam, xr, yr) {
  arrow3(ctx, cam, [xr[0], 0, 0], [xr[1], 0, 0], PAL.muted, 2.5); name3(ctx, cam, [xr[1], 0, 0], 'x', PAL.ink, { dx: 18, dy: 4 });
  arrow3(ctx, cam, [0, yr[0], 0], [0, yr[1], 0], PAL.muted, 2.5); name3(ctx, cam, [0, yr[1], 0], 'y', PAL.ink, { dx: -16, dy: -6 });
}
const curveAt = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x), 0]; });
function leftAxes(ctx, xr, yr, o = {}) {
  const box = o.box ?? { l: 120, r: 560, t: 96, b: 440 };
  return axes(ctx, box, xr, yr, { xl: 'x', yl: 'y', nx: o.nx ?? (xr[1] - xr[0]), ny: o.ny ?? (yr[1] - yr[0]), fx: o.fx, fy: o.fy });
}
function plotY(ctx, ax, u, c, d, color, w = 5) {
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l - 6, ax.box.t - 6, ax.box.r - ax.box.l + 12, ax.box.b - ax.box.t + 12); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const y = c + ((d - c) * i) / 160; const p = [ax.X(u(y)), ax.Y(y)]; if (i) ctx.lineTo(...p); else ctx.moveTo(...p); }
  ctx.stroke(); ctx.restore();
}
/* a still copy of an example: the region at the left and the solid painted at the right */
function solidCopy(id, H, o) {
  const d = sim(id, H);
  const body = RV.solid(o.outline, o.axis, { m: 56, ...(o.sweep ?? {}) });
  const cam = lcam(...o.cam);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region');
    const ax = leftAxes(ctx, o.xr, o.yr, o.ax ?? {});
    o.region(ctx, ax, rc);
    o.curves.forEach(([f, x, c, isY]) => { if (isY) plotY(ctx, ax, f, x[0], x[1], c()); else plot(ctx, ax, f, c(), { x }); });
    o.labels.forEach(([s, x, y, c]) => text(ctx, s, ax.X(x), ax.Y(y), c(), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }));
    axes3(ctx, cam, o.ax3[0], o.ax3[1]);
    RV.paint(ctx, cam, [{ faces: body, color: rc }]);
    (o.lines3 ?? []).forEach(([pts, c]) => path3(ctx, cam, pts, c(), 3));
    text(ctx, '(a)', ax.box.l - 60, 48, PAL.ink, { size: 20, align: 'left' }); text(ctx, '(b)', o.cam[0] - 300, 48, PAL.ink, { size: 20, align: 'left' });
  }
  still(d, draw);
}

/* ---------- three.js scenes (F.revolve.mesh) ---------- */
const hasGL = () => typeof THREE !== 'undefined';
function scene3(d, o) {
  const v = F.view3d(d.stage, { h: o.h ?? 560, dist: o.dist ?? 9, tilt: o.tilt ?? 0.32, pitch: o.pitch ?? [-1.35, 1.35] });
  const turn = v.part(0), g = new THREE.Group(); turn.add(g);
  g.scale.setScalar(o.s); g.position.set(-o.at[0] * o.s, -o.at[1] * o.s, -o.at[2] * o.s);
  if (o.yaw !== undefined) v.setView(o.yaw, o.tilt ?? 0.32);
  const reset = () => { v.clear(); g.clear(); turn.add(g); };
  return { v, g, reset };
}
function axesMesh(v, g, xr, yr, scale) {
  F.mesh.arrow(g, [xr[0], 0, 0], [xr[1], 0, 0], 0.02 / scale, PAL.muted); v.label('x', [xr[1] + 0.25, 0, 0], g);
  F.mesh.arrow(g, [0, yr[0], 0], [0, yr[1], 0], 0.02 / scale, PAL.muted); v.label('y', [0, yr[1] + 0.3, 0], g);
}
const curve3 = (g, f, a, b, color, n = 96) => F.mesh.polyline(g, Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x), 0]; }), color);

/* Figures 6.25 + 6.26: the region under a stand-in f(x) = 1 + 0.25x² on [1, 3] about the y-axis; n midpoint rectangles
   become nested shells inside the faint solid, the quarter toward the reader cut away. */
(function () {
  const d = sim('sim-shells');
  const f = (x) => 1 + 0.25 * x * x, a = 1, b = 3, V = 18 * Math.PI;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 5, unit: '', dec: 0 });
  const ro = readout(d);
  const outline = RV.between(f, () => 0, a, b, 60);
  const S = hasGL() ? scene3(d, { s: 0.62, at: [0, 1.4, 0], dist: 9, tilt: 0.42, yaw: -0.3 }) : null;
  function draw() {
    const n = ns.v, w = (b - a) / n;
    let sum = 0; for (let i = 0; i < n; i++) { const m = a + (i + 0.5) * w; sum += 2 * Math.PI * m * f(m) * w; }
    if (S) {
      const { v, g } = S; S.reset();
      axesMesh(v, g, [-0.4, 4], [-0.2, 3.9], 0.62);
      const rc = C('region'), ic = C('integral'), fc = C('function');
      v.pickable(RV.mesh(g, outline, { x: 0 }, rc, { alpha: 0.16, sweep: CUT, edges: null }).children[0], 'the solid of revolution');
      RV.strips(f, () => 0, a, b, n, 'mid').forEach((s, i) => { const m = RV.mesh(g, s, { x: 0 }, ic, { sweep: CUT }); v.pickable(m.children[0], `shell ${i + 1} of ${n}`); });
      curve3(g, f, 0, 3.3, fc);
      v.headline(`${n} ${n === 1 ? 'shell' : 'shells'}: their volumes add to ${fmt(sum, 2)}; the solid's volume is 18π ≈ ${fmt(V, 2)}.`);
    }
    ro.set(`\\kV\\approx\\sum_{i=1}^{${n}}2\\pi x_i^{*}\\kf(x_i^{*})\\Delta x=${typed('integral', n2(sum))}\\qquad \\kV=\\int_{1}^{3}2\\pi x\\kf(x)\\,dx=18\\pi=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();

/* Figure 6.27, a faithful copy: the rectangle over [xᵢ₋₁, xᵢ] of height f(xᵢ*) under the same stand-in curve. */
(function () {
  const d = sim('fig-shell-rectangle', 470);
  const f = (x) => 1 + 0.25 * x * x, x0 = 1.8, x1 = 2.2, xs = 2;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 440, r: 960, t: 40, b: 400 }, [0, 3], [0, 3.5], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    ctx.save(); ctx.globalAlpha = 0.3; ctx.fillStyle = ic; ctx.fillRect(ax.X(x0), ax.Y(f(xs)), ax.X(x1) - ax.X(x0), ax.Y(0) - ax.Y(f(xs))); ctx.restore();
    ctx.save(); ctx.strokeStyle = ic; ctx.lineWidth = 2.5; ctx.strokeRect(ax.X(x0), ax.Y(f(xs)), ax.X(x1) - ax.X(x0), ax.Y(0) - ax.Y(f(xs))); ctx.restore();
    plot(ctx, ax, f, fc, { x: [0, 3] });
    text(ctx, '$y=\\kf(x)$', ax.X(2.75), ax.Y(f(2.75)) - 30, fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    dash(ctx, ax.X(0), ax.Y(f(xs)), ax.X(x0), ax.Y(f(xs)));
    text(ctx, 'f(xᵢ*)', ax.box.l - 12, ax.Y(f(xs)), fc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'xᵢ₋₁', ax.X(x0), ax.box.b + 24, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'xᵢ', ax.X(x1), ax.box.b + 24, PAL.ink, { size: 20, weight: 600, align: 'center' });
    hbracket(ctx, ax.X(x0), ax.X(x1), ax.Y(f(xs)) - 18, PAL.ink, 'Δx');
  }
  still(d, draw);
})();

/* Figure 6.28: one shell, radius xᵢ* = 2 (from 1.8 to 2.2) and height f(xᵢ*) = 2, cut along a vertical line and opened
   into a flat plate. A story slider k from 0 (the shell) to 1 (the plate): the surface keeps its arc length while its
   radius r/(1 − k) grows, so it unbends about the point at the back, and the cut, at the front, opens toward the reader. */
(function () {
  const d = sim('sim-unroll-shell');
  const r = 2, dx = 0.4, H = 2, M = 96;
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0, max: 1, step: 0.005, value: 0, unit: '', dec: 2 });
  F.story(d, ks, { stops: [{ v: 0, label: 'the shell' }, { v: 0.5, label: 'opening' }, { v: 1, label: 'the plate' }] });
  const ro = readout(d);
  const S = hasGL() ? scene3(d, { s: 0.55, at: [0, 1, 0.6], dist: 10, tilt: 0.4, yaw: -0.25 }) : null;
  /* a point of the opening sheet: arc position s from the cut, offset q across the thickness, height y */
  const at = (k, s, q, y) => {
    if (k > 0.9995) return [s - Math.PI * r, y, -r - q];
    const R = r / (1 - k), th = (s - Math.PI * r) / R;
    return [(R + q) * Math.sin(th), y, -(R + q) * Math.cos(th) + R - r];
  };
  /* the four sides of the sheet's cross-section, swept along the arc: each side is its own mesh, so its edges stay crisp */
  function sheet(g, k, color) {
    const loop = [[-dx / 2, 0], [dx / 2, 0], [dx / 2, H], [-dx / 2, H]];
    const mat = new THREE.MeshPhongMaterial({ color: new THREE.Color(color), shininess: 24, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const ss = Array.from({ length: M + 1 }, (_, i) => (TAU * r * i) / M);
    loop.forEach((p, e) => {
      const q2 = loop[(e + 1) % 4], pos = [], idx = [];
      ss.forEach((s) => { [p, q2].forEach(([q, y]) => pos.push(...at(k, s, q, y))); });
      for (let i = 0; i < M; i++) { const j = 2 * i; idx.push(j, j + 1, j + 3, j, j + 3, j + 2); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
      g.add(new THREE.Mesh(geo, mat));
    });
    [0, TAU * r].forEach((s) => {
      const pts = loop.map(([q, y]) => at(k, s, q, y)), geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts.flat(), 3)); geo.setIndex([0, 1, 2, 0, 2, 3]); geo.computeVertexNormals();
      g.add(new THREE.Mesh(geo, mat));
    });
    const edge = (q, y) => F.mesh.polyline(g, ss.map((s) => at(k, s, q, y)), PAL.ink);
    edge(dx / 2, H); edge(-dx / 2, H); edge(dx / 2, 0);
  }
  function draw() {
    const k = ks.v, plate = k > 0.98;
    if (S) {
      const { v, g } = S; S.reset();
      sheet(g, k, C('integral'));
      if (k < 0.2) { F.mesh.polyline(g, [[0, -0.4, 0], [0, H + 0.8, 0]], PAL.muted); v.label('y', [0, H + 1, 0], g); }
      if (k < 0.02) { F.mesh.polyline(g, [[0, 0, r + dx / 2 + 0.01], [0, H, r + dx / 2 + 0.01]], PAL.ink); v.label('cut line', [0.3, H / 2, r + 0.3], g); }
      if (plate) { v.label('2πxᵢ*', [0, -0.4, -r], g); v.label('f(xᵢ*)', [Math.PI * r + 0.7, H / 2, -r], g); v.label('Δx', [-Math.PI * r - 0.3, H + 0.3, -r], g); }
      v.headline(plate ? 'Opened flat: a plate about 2π(2) ≈ 12.57 wide, 2 high and 0.4 thick.' : k < 0.02 ? 'A cylindrical shell of radius 2, height 2 and thickness 0.4.' : 'The shell is cut along a vertical line and opened out.');
    }
    ro.set(`\\kVshell\\approx \\kf(x_i^{*})(2\\pi x_i^{*})\\Delta x=(2)(2\\pi\\cdot 2)(0.4)=${typed('integral', n2(2 * TAU * 2 * 0.4))}`);
  }
  still(d, draw);
})();

/* Figure 6.29, Example 6.12: 1/x on [1, 3] about the y-axis; the back half of the solid, as the book's (b) shows it. */
solidCopy('fig-shells-reciprocal', 480, {
  outline: RV.between((x) => 1 / x, () => 0, 1, 3, 60), axis: { x: 0 }, sweep: { from: Math.PI, to: TAU },
  xr: [0, 4], yr: [0, 2], ax: { ny: 4, fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') },
  region: (ctx, ax, rc) => { shade(ctx, ax, (x) => 1 / x, 0, 1, 3, rc, { alpha: 0.25 }); [1, 3].forEach((x) => dash(ctx, ax.X(x), ax.Y(1 / x), ax.X(x), ax.Y(0))); text(ctx, '$\\kR$', ax.X(1.8), ax.Y(0.25), rc, { size: 24, weight: 600, align: 'center', tex: true }); },
  curves: [[(x) => 1 / x, [0.5, 4], () => C('function')]], labels: [['$\\kf(x)=\\frac{1}{x}$', 2.6, 1.0, () => C('function')]],
  cam: [1000, 290, 88, [0, 0.6, 0], 0.3, 0.36], ax3: [[-3.4, 3.6], [-0.2, 1.8]], lines3: [[curveAt((x) => 1 / x, 1, 3), () => C('function')]],
});
/* Figure 6.30, Example 6.13: 2x − x² on [0, 2] about the y-axis, cut open. */
solidCopy('fig-shells-parabola', 480, {
  outline: RV.between((x) => 2 * x - x * x, () => 0, 0, 2, 60), axis: { x: 0 }, sweep: CUT,
  xr: [0, 3], yr: [0, 2], ax: { ny: 4, fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') },
  region: (ctx, ax, rc) => { shade(ctx, ax, (x) => 2 * x - x * x, 0, 0, 2, rc, { alpha: 0.25 }); text(ctx, '$\\kR$', ax.X(1), ax.Y(0.4), rc, { size: 24, weight: 600, align: 'center', tex: true }); },
  curves: [[(x) => 2 * x - x * x, [0, 2.2], () => C('function')]], labels: [['$\\kf(x)=2x-x^{2}$', 1.8, 1.3, () => C('function')]],
  cam: [1000, 300, 85, [0, 0.5, 0], 0.32, 0.4], ax3: [[-2.4, 2.8], [-0.2, 1.7]],
});
/* Figure 6.31, Example 6.14: the region left of g(y) = 2√y on [0, 4] about the x-axis, cut open. */
solidCopy('fig-shells-x-axis', 500, {
  outline: RV.betweenY((y) => 2 * Math.sqrt(y), () => 0, 0, 4, 80), axis: { y: 0 }, sweep: CUT,
  xr: [0, 5], yr: [0, 5],
  region: (ctx, ax, rc) => {
    ctx.save(); ctx.globalAlpha = 0.25; ctx.fillStyle = rc; ctx.beginPath(); ctx.moveTo(ax.X(0), ax.Y(0));
    for (let i = 0; i <= 80; i++) { const y = (4 * i) / 80; ctx.lineTo(ax.X(2 * Math.sqrt(y)), ax.Y(y)); } ctx.lineTo(ax.X(0), ax.Y(4)); ctx.closePath(); ctx.fill(); ctx.restore();
    dash(ctx, ax.X(0), ax.Y(4), ax.X(4), ax.Y(4)); text(ctx, '$\\kQ$', ax.X(1), ax.Y(3), rc, { size: 24, weight: 600, align: 'center', tex: true });
  },
  curves: [[(y) => 2 * Math.sqrt(y), [0, 4.5], () => C('function'), true]], labels: [['$\\kg(y)=2\\sqrt{y}$', 3.9, 2.7, () => C('function')]],
  cam: [1010, 280, 48, [2, 0, 0], 0.32, 0.3], ax3: [[-0.4, 5], [-0.3, 4.6]],
});

/* Figure 6.32, Example 6.15: the region under f(x) = x on [1, 2] about the line x = −1: the rectangle at x turns into a
   shell of radius x + 1. Left axes −2 to 3 by 0 to 3. */
(function () {
  const d = sim('sim-shell-shifted-axis', 520);
  const f = (x) => x, a = 1, b = 2, AX = { x: -1 }, V = (23 * Math.PI) / 3;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 1.05, max: 1.95, step: 0.01, value: 1.5, unit: '', dec: 2 });
  const ro = readout(d);
  const body = RV.solid(RV.between(f, () => 0, a, b, 20), AX, { m: 56, ...CUT });
  const cam = lcam(1000, 300, 52, [-1, 1, 0], 0.32, 0.36);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), fc = C('function'), lc = C('line'), ic = C('integral'), x = xs.v;
    const ax = leftAxes(ctx, [-2, 3], [0, 3], { box: { l: 110, r: 560, t: 96, b: 440 } });
    shade(ctx, ax, f, 0, a, b, rc, { alpha: 0.25 });
    line(ctx, ax.X(-1), ax.Y(0), ax.X(-1), ax.Y(3), lc, 3, [10, 10]); text(ctx, 'x = −1', ax.X(-1), ax.box.t - 14, lc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    plot(ctx, ax, f, fc, { x: [0, 2.6] });
    text(ctx, '$\\kf(x)=x$', ax.X(2.3), ax.Y(2.75), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    ctx.save(); ctx.globalAlpha = 0.45; ctx.fillStyle = ic; ctx.fillRect(ax.X(x - 0.05), ax.Y(f(x)), ax.X(x + 0.05) - ax.X(x - 0.05), ax.Y(0) - ax.Y(f(x))); ctx.restore();
    hbracket(ctx, ax.X(-1), ax.X(x), ax.Y(f(x)) - 20, PAL.ink, 'x + 1');
    axes3(ctx, cam, [-2.2, 2.8], [-0.2, 2.6]);
    seg3(ctx, cam, [-1, -0.2, 0], [-1, 2.6, 0], lc, 3, [10, 10]);
    const shell = RV.solid(RV.rect(x - 0.05, x + 0.05, 0, f(x)), AX, { m: 56, ...CUT });
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: 0.3 }, { faces: shell, color: ic, alpha: 0.95 }]);
    headline(ctx, `At x = ${fmt(x, 2)} the shell has radius x + 1 = ${fmt(x + 1, 2)} and height f(x) = ${fmt(f(x), 2)}.`);
    ro.set(`2\\pi(x+1)\\kf(x)=2\\pi(${n2(x + 1, 2)})(${n2(f(x), 2)})=${typed('function', n2(TAU * (x + 1) * f(x)))}\\qquad \\kV=\\frac{23\\pi}{3}=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();

/* Figure 6.33, Example 6.16: √x over 1/x on [1, 4] about the y-axis, cut open. */
solidCopy('fig-shells-two-functions', 480, {
  outline: RV.between(Math.sqrt, (x) => 1 / x, 1, 4, 60), axis: { x: 0 }, sweep: CUT,
  xr: [0, 5], yr: [0, 3],
  region: (ctx, ax, rc) => { shade(ctx, ax, Math.sqrt, (x) => 1 / x, 1, 4, rc, { alpha: 0.25 }); dash(ctx, ax.X(4), ax.Y(2), ax.X(4), ax.Y(0)); text(ctx, '$\\kR$', ax.X(3), ax.Y(1.1), rc, { size: 24, weight: 600, align: 'center', tex: true }); },
  curves: [[Math.sqrt, [0, 5], () => F.ref('ex16-f')], [(x) => 1 / x, [0.34, 5], () => F.ref('ex16-g')]],
  labels: [['$\\kf(x)=\\sqrt{x}$', 3.6, 2.35, () => F.ref('ex16-f')], ['$\\kg(x)=\\frac{1}{x}$', 1.2, 2.3, () => F.ref('ex16-g')]],
  cam: [1000, 300, 46, [0, 1, 0], 0.32, 0.4], ax3: [[-4.6, 5], [-0.2, 2.8]],
});

/* Figure 6.34, a faithful copy of the book's table comparing the disk, washer and shell methods around the x-axis. */
(function () {
  const d = sim('fig-method-table', 780);
  const COLS = [40, 300, 640, 990, 1360], ROWS = [20, 72, 132, 206, 256, 306, 536, 766];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), rc = C('region'), ic = C('integral'), tf = fc, tg = fc;
    ROWS.forEach((y) => line(ctx, COLS[0], y, COLS[4], y, PAL.rule, 2)); COLS.forEach((x) => line(ctx, x, ROWS[0], x, ROWS[7], PAL.rule, 2));
    const head = ['Compare', 'Disk Method', 'Washer Method', 'Shell Method'];
    head.forEach((s, i) => text(ctx, s, (COLS[i] + COLS[i + 1]) / 2, (ROWS[0] + ROWS[1]) / 2, PAL.ink, { size: 22, weight: 700, align: 'center' }));
    const rowName = ['Volume formula', 'Solid', 'Interval to partition', 'Rectangle', 'Typical region', 'Typical element'];
    rowName.forEach((s, i) => text(ctx, s, COLS[0] + 16, (ROWS[i + 1] + ROWS[i + 2]) / 2, PAL.ink, { size: 20, align: 'left' }));
    const cell = (i, j, s, o = {}) => [].concat(s).forEach((t, k, all) => text(ctx, t, COLS[j] + 22, (ROWS[i] + ROWS[i + 1]) / 2 + (k - (all.length - 1) / 2) * 24, PAL.ink, { size: 20, align: 'left', tex: o.tex }));
    cell(1, 1, '$\\kV=\\int_{a}^{b}\\pi[\\kf(x)]^{2}\\,dx$', { tex: true });
    cell(1, 2, '$\\kV=\\int_{a}^{b}\\pi[(\\kf(x))^{2}-(\\kg(x))^{2}]\\,dx$', { tex: true });
    cell(1, 3, '$\\kV=\\int_{c}^{d}2\\pi y\\,\\kg(y)\\,dy$', { tex: true });
    cell(2, 1, 'No cavity in the center'); cell(2, 2, 'Cavity in the center'); cell(2, 3, ['With or without a cavity', 'in the center']);
    cell(3, 1, '[a, b] on x-axis'); cell(3, 2, '[a, b] on x-axis'); cell(3, 3, '[c, d] on y-axis');
    cell(4, 1, 'Vertical'); cell(4, 2, 'Vertical'); cell(4, 3, 'Horizontal');
    /* the six small graphs, each on its own axes in its cell */
    const f = (t) => 1.25 - 0.5 * Math.cos(2.4 * (t - 1.25)), g = (t) => 0.3 + 0.3 * Math.sin(1.2 * t), gy = (y) => 0.9 * Math.sqrt(Math.max(0, 1.1 - y)) * 1.1;
    const mini = (j, i) => axes(ctx, { l: COLS[j] + 60, r: COLS[j + 1] - 50, t: ROWS[i] + 34, b: ROWS[i + 1] - 56 }, [-0.3, 2.6], [-0.4, 2.2], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    [5, 6].forEach((i) => {
      const element = i === 6;
      let ax = mini(1, i);
      if (!element) shade(ctx, ax, f, 0, 0.3, 2.1, rc, { alpha: 0.3 }); else { ctx.save(); ctx.globalAlpha = 0.4; ctx.fillStyle = ic; ctx.fillRect(ax.X(1.18), ax.Y(f(1.22)), ax.X(1.28) - ax.X(1.18), ax.Y(0) - ax.Y(f(1.22))); ctx.restore(); }
      plot(ctx, ax, f, fc, { x: [0, 2.5] }); text(ctx, '$\\kf(x)$', ax.X(2.15), ax.Y(f(2.15)) - 24, fc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      text(ctx, element ? 'a b' : 'a', ax.X(element ? 1.23 : 0.3), ax.box.b + 20, PAL.ink, { size: 18, align: 'center' }); if (!element) text(ctx, 'b', ax.X(2.1), ax.box.b + 20, PAL.ink, { size: 18, align: 'center' });
      ax = mini(2, i);
      if (!element) shade(ctx, ax, f, g, 0.3, 2.1, rc, { alpha: 0.3 }); else { ctx.save(); ctx.globalAlpha = 0.4; ctx.fillStyle = ic; ctx.fillRect(ax.X(1.18), ax.Y(f(1.22)), ax.X(1.28) - ax.X(1.18), ax.Y(g(1.22)) - ax.Y(f(1.22))); ctx.restore(); }
      plot(ctx, ax, f, tf, { x: [0, 2.5] }); plot(ctx, ax, g, tg, { x: [0, 2.5] });
      text(ctx, '$\\kf(x)$', ax.X(2.15), ax.Y(f(2.15)) - 24, tf, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      text(ctx, '$\\kg(x)$', ax.X(2.0), ax.Y(g(2.0)) + 24, tg, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      text(ctx, element ? 'a b' : 'a', ax.X(element ? 1.23 : 0.3), ax.box.b + 20, PAL.ink, { size: 18, align: 'center' }); if (!element) text(ctx, 'b', ax.X(2.1), ax.box.b + 20, PAL.ink, { size: 18, align: 'center' });
      ax = mini(3, i);
      if (!element) { ctx.save(); ctx.globalAlpha = 0.3; ctx.fillStyle = rc; ctx.beginPath(); ctx.moveTo(ax.X(0), ax.Y(0)); for (let k = 0; k <= 40; k++) { const y = (1.1 * k) / 40; ctx.lineTo(ax.X(gy(y)), ax.Y(y)); } ctx.lineTo(ax.X(0), ax.Y(1.1)); ctx.closePath(); ctx.fill(); ctx.restore(); }
      else { ctx.save(); ctx.globalAlpha = 0.4; ctx.fillStyle = ic; ctx.fillRect(ax.X(0), ax.Y(0.62), ax.X(gy(0.56)) - ax.X(0), ax.Y(0.5) - ax.Y(0.62)); ctx.restore(); }
      plotY(ctx, ax, gy, -0.35, 1.1, fc, 5);
      text(ctx, '$\\kg(y)$', ax.X(gy(0.3)) + 40, ax.Y(0.3), fc, { size: 20, weight: 600, align: 'left', tex: true, bg: PAL.panel });
      if (!element) { text(ctx, 'd', ax.box.l + 16, ax.Y(1.1), PAL.ink, { size: 18, align: 'right' }); text(ctx, 'c', ax.box.l + 16, ax.Y(0) - 14, PAL.ink, { size: 18, align: 'right' }); }
    });
  }
  still(d, draw);
})();

/* Figure 6.35, Example 6.17a: the triangle between y = x, y = 2 − x and the x-axis about the x-axis, sliced into disks
   (vertical rectangles, two formulas) or into shells (horizontal rectangles, one formula), the quarter toward the reader cut away. */
(function () {
  const d = sim('sim-best-method');
  const top = (x) => Math.min(x, 2 - x), V = (2 * Math.PI) / 3;
  const pick = choice(d.controls, { label: '', options: [{ value: 'disks', label: 'disks' }, { value: 'shells', label: 'shells' }], value: 'shells', aria: 'which slices fill the solid' });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 6, unit: '', dec: 0 });
  const ro = readout(d);
  const tri = [[0, 0], [2, 0], [1, 1]];
  const S = hasGL() ? scene3(d, { s: 1.35, at: [1, 0.1, 0], dist: 9, tilt: 0.36, yaw: -0.3 }) : null;
  function draw() {
    const n = ns.v, m = pick.value;
    let sum = 0;
    if (m === 'disks') { const w = 2 / n; for (let i = 0; i < n; i++) { const c = (i + 0.5) * w; sum += Math.PI * top(c) ** 2 * w; } }
    else { const h = 1 / n; for (let i = 0; i < n; i++) { const y = (i + 0.5) * h; sum += 2 * Math.PI * y * (2 - 2 * y) * h; } }
    if (S) {
      const { v, g } = S; S.reset();
      axesMesh(v, g, [-0.4, 2.8], [-0.2, 1.6], 1.35);
      const rc = C('region'), ic = C('integral');
      v.pickable(RV.mesh(g, tri, { y: 0 }, rc, { alpha: 0.16, sweep: CUT, edges: null }).children[0], 'the solid of revolution');
      const slices = m === 'disks' ? RV.strips(top, () => 0, 0, 2, n, 'mid') : RV.stripsY((y) => 2 - y, (y) => y, 0, 1, n, 'mid');
      slices.forEach((s, i) => { const mm = RV.mesh(g, s, { y: 0 }, ic, { sweep: CUT }); v.pickable(mm.children[0], `${m === 'disks' ? 'disk' : 'shell'} ${i + 1} of ${n}`); });
      F.mesh.polyline(g, [[0, 0, 0], [1.3, 1.3, 0]], F.ref('ex17-left')); F.mesh.polyline(g, [[0.7, 1.3, 0], [2, 0, 0]], F.ref('ex17-right'));
      v.headline(m === 'disks' ? `${n} disks, their radius x up to x = 1 and 2 − x after: two integrals.` : `${n} shells, each running from y = x to y = 2 − x: one integral.`);
    }
    if (m === 'disks') ro.set(`\\kV=\\int_{0}^{1}\\pi x^{2}\\,dx+\\int_{1}^{2}\\pi(2-x)^{2}\\,dx=\\frac{2\\pi}{3}=${typed('integral', n2(V))}\\qquad \\sum=${typed('integral', n2(sum))}`, undefined, { form: 'd' });
    else ro.set(`\\kV=\\int_{0}^{1}2\\pi y[(2-y)-y]\\,dy=\\frac{2\\pi}{3}=${typed('integral', n2(V))}\\qquad \\sum=${typed('integral', n2(sum))}`, undefined, { form: 's' });
  }
  still(d, draw);
})();

/* Figure 6.36, Example 6.17b: 4x − x² on [0, 4] about the x-axis, a solid with no cavity. */
solidCopy('fig-best-method-b', 480, {
  outline: RV.between((x) => 4 * x - x * x, () => 0, 0, 4, 80), axis: { y: 0 }, sweep: {},
  xr: [0, 5], yr: [0, 5],
  region: (ctx, ax, rc) => { shade(ctx, ax, (x) => 4 * x - x * x, 0, 0, 4, rc, { alpha: 0.25 }); text(ctx, '$\\kR$', ax.X(2), ax.Y(1.4), rc, { size: 24, weight: 600, align: 'center', tex: true }); },
  curves: [[(x) => 4 * x - x * x, [0, 4.2], () => C('function')]], labels: [['$y=4x-x^{2}$', 3.4, 4.4, () => C('function')]],
  cam: [1000, 290, 44, [2, 0, 0], 0.3, 0.26], ax3: [[-0.4, 5], [-0.3, 4.8]], lines3: [[curveAt((x) => 4 * x - x * x, 0, 4), () => C('function')]],
});
};
