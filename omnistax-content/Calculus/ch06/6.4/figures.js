/* Figures for section 6.4 Arc Length of a Curve and Surface Area. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, dot, line, arrow, text, label, headline, register, readout, fmt, hbracket, vbracket, drag, hover } = F;
const RV = F.revolve;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
const simpson = (h, a, b, n = 400) => { const w = (b - a) / n; let s = h(a) + h(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * h(a + i * w); return (s * w) / 3; };
const TAU = 2 * Math.PI;

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
const line2 = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
function plotY(ctx, ax, u, c, d, color, w = 5) {
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l - 6, ax.box.t - 6, ax.box.r - ax.box.l + 12, ax.box.b - ax.box.t + 12); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const y = c + ((d - c) * i) / 160; const p = [ax.X(u(y)), ax.Y(y)]; if (i) ctx.lineTo(...p); else ctx.moveTo(...p); }
  ctx.stroke(); ctx.restore();
}
const hasGL = () => typeof THREE !== 'undefined';
function scene3(d, o) {
  const v = F.view3d(d.stage, { h: o.h ?? 560, dist: o.dist ?? 9, tilt: o.tilt ?? 0.32, pitch: o.pitch ?? [-1.35, 1.35] });
  const turn = v.part(0), g = new THREE.Group(); turn.add(g);
  g.scale.setScalar(o.s); g.position.set(-o.at[0] * o.s, -o.at[1] * o.s, -o.at[2] * o.s);
  if (o.yaw !== undefined) v.setView(o.yaw, o.tilt ?? 0.32);
  const reset = () => { v.clear(); g.clear(); turn.add(g); };
  return { v, g, reset };
}

/* Figures 6.37 + 6.38: the stand-in curve f(x) = 1.5 + 1.2 sin(1.1x − 0.3) + 0.1x on [a, b] = [0.5, 5.2], which rises and
   falls as the book's does, and n line segments between points of its graph; the book draws n = 5. */
(function () {
  const d = sim('sim-arc-segments', 540);
  const f = (x) => 1.5 + 1.2 * Math.sin(1.1 * x - 0.3) + 0.1 * x, df = (x) => 1.32 * Math.cos(1.1 * x - 0.3) + 0.1, a = 0.5, b = 5.2;
  const L = simpson((x) => Math.sqrt(1 + df(x) ** 2), a, b);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 5, unit: '', dec: 0, detents: [5] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: a, max: b - 0.001, step: 0.01, value: 2.2, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: 0 });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 96, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), n = ns.v, w = (b - a) / n, i = Math.min(n - 1, Math.floor((xs.v - a) / w));
    const ax = axes(ctx, BOX, [0, 6], [0, 3.5], { xl: 'x', yl: 'y', nx: 6, ny: 7, fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    plot(ctx, ax, f, fc, { x: [0.2, 5.6], w: 4 });
    let sum = 0;
    for (let k = 0; k < n; k++) {
      const x0 = a + k * w, x1 = x0 + w; sum += Math.hypot(w, f(x1) - f(x0));
      line(ctx, ax.X(x0), ax.Y(f(x0)), ax.X(x1), ax.Y(f(x1)), ic, k === i ? 6 : 4);
    }
    for (let k = 0; k <= n; k++) { const x = a + k * w; dot(ctx, ax.X(x), ax.Y(f(x)), PAL.ink, true, n > 20 ? 4 : 6); if (n <= 8) dash(ctx, ax.X(x), ax.Y(f(x)), ax.X(x), ax.Y(0)); }
    const x0 = a + i * w, x1 = x0 + w, y0 = f(x0), y1 = f(x1);
    line(ctx, ax.X(x0), ax.Y(y0), ax.X(x1), ax.Y(y0), PAL.ink, 2.5); line(ctx, ax.X(x1), ax.Y(y0), ax.X(x1), ax.Y(y1), PAL.ink, 2.5);
    if (ax.X(x1) - ax.X(x0) > 40) text(ctx, 'Δx', (ax.X(x0) + ax.X(x1)) / 2, ax.Y(y0) + (y1 > y0 ? 20 : -20), PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    if (Math.abs(ax.Y(y1) - ax.Y(y0)) > 30) text(ctx, 'Δyᵢ', ax.X(x1) + 12, (ax.Y(y0) + ax.Y(y1)) / 2, PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    if (n <= 8) { text(ctx, 'a = x₀', ax.X(a), BOX.b + 50, PAL.ink, { size: 18, align: 'center' }); text(ctx, `b = x${'₀₁₂₃₄₅₆₇₈'[n]}`, ax.X(b), BOX.b + 50, PAL.ink, { size: 18, align: 'center' }); }
    text(ctx, '$\\kf(x)$', ax.X(5.55), ax.Y(f(5.55)) - 26, fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    P.draw(ctx, ax, PAL.ink);
    hits = [{ x: (ax.X(x0) + ax.X(x1)) / 2, y: (ax.Y(y0) + ax.Y(y1)) / 2, r: 22, name: `segment ${i + 1} of ${n}: length ${fmt(Math.hypot(w, y1 - y0), 3)}` }];
    headline(ctx, `${n} ${n === 1 ? 'segment' : 'segments'}: their lengths add to ${fmt(sum, 3)}; the arc length of the curve is ${fmt(L, 3)}.`);
    ro.set(`\\sum_{i=1}^{${n}}\\sqrt{(\\Delta x)^{2}+(\\Delta y_{i})^{2}}=${typed('integral', n2(sum))}\\qquad \\text{Arc Length}=\\int_{0.5}^{5.2}\\sqrt{1+[\\kfprime(x)]^{2}}\\,dx=${typed('integral', n2(L))}`);
  }
  still(d, draw);
})();

/* Figure 6.39, a faithful copy: a segment over [yᵢ₋₁, yᵢ] of the stand-in curve x = g(y) = 0.6 + 0.35y², with its legs. */
(function () {
  const d = sim('fig-segment-y', 470);
  const g = (y) => 0.6 + 0.35 * y * y, y0 = 1.3, y1 = 2.3;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    const ax = axes(ctx, { l: 470, r: 930, t: 40, b: 420 }, [0, 3], [0, 3], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    plotY(ctx, ax, g, 0.5, 2.7, fc);
    line(ctx, ax.X(g(y0)), ax.Y(y0), ax.X(g(y1)), ax.Y(y1), ic, 5);
    line(ctx, ax.X(g(y0)), ax.Y(y0), ax.X(g(y1)), ax.Y(y0), PAL.ink, 2.5); line(ctx, ax.X(g(y1)), ax.Y(y0), ax.X(g(y1)), ax.Y(y1), PAL.ink, 2.5);
    dot(ctx, ax.X(g(y0)), ax.Y(y0), PAL.ink, true, 7); dot(ctx, ax.X(g(y1)), ax.Y(y1), PAL.ink, true, 7);
    label(ctx, 'g(yᵢ₋₁)', ax.X(g(y0)), ax.Y(y0), { side: 'left', gap: 18, color: fc }); label(ctx, 'g(yᵢ)', ax.X(g(y1)), ax.Y(y1), { side: 'left', gap: 18, color: fc });
    text(ctx, 'Δx', (ax.X(g(y0)) + ax.X(g(y1))) / 2, ax.Y(y0) + 22, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'Δy', ax.X(g(y1)) + 16, (ax.Y(y0) + ax.Y(y1)) / 2, PAL.ink, { size: 20, weight: 600, align: 'left' });
    [y0, y1].forEach((y, k) => { dash(ctx, ax.X(0), ax.Y(y), ax.X(g(y)), ax.Y(y)); text(ctx, k ? 'yᵢ' : 'yᵢ₋₁', ax.box.l - 12, ax.Y(y), PAL.ink, { size: 20, align: 'right' }); });
  }
  still(d, draw);
})();

/* Figures 6.40 + 6.41: the stand-in f(x) = 1 + 0.5 sin(1.2x) + 0.2x on [0, 3.5] revolved about the x-axis, faint, and the
   frustum bands its n inscribed segments sweep. */
(function () {
  const d = sim('sim-frustum-bands');
  const f = (x) => 1 + 0.5 * Math.sin(1.2 * x) + 0.2 * x, df = (x) => 0.6 * Math.cos(1.2 * x) + 0.2, a = 0, b = 3.5;
  const SA = simpson((x) => TAU * f(x) * Math.sqrt(1 + df(x) ** 2), a, b);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 4, unit: '', dec: 0 });
  const ro = readout(d);
  const S = hasGL() ? scene3(d, { s: 0.9, at: [1.75, 0.2, 0], dist: 9, tilt: 0.36, yaw: -0.35 }) : null;
  function draw() {
    const n = ns.v, w = (b - a) / n;
    let sum = 0; for (let i = 0; i < n; i++) { const x0 = a + i * w, x1 = x0 + w; sum += Math.PI * (f(x0) + f(x1)) * Math.hypot(w, f(x1) - f(x0)); }
    if (S) {
      const { v, g } = S; S.reset();
      F.mesh.arrow(g, [-0.5, 0, 0], [4.4, 0, 0], 0.022, PAL.muted); v.label('x', [4.6, 0, 0], g);
      F.mesh.arrow(g, [0, -0.2, 0], [0, 2.9, 0], 0.022, PAL.muted); v.label('y', [0, 3.1, 0], g);
      const sc = C('surface'), ic = C('integral'), fc = C('function');
      v.pickable(RV.mesh(g, line2(f, a, b, 80), { y: 0 }, sc, { closed: false, alpha: 0.22, edges: null }).children[0], 'the surface of revolution');
      const pts = Array.from({ length: n + 1 }, (_, i) => [a + i * w, f(a + i * w)]);
      const bands = RV.mesh(g, pts, { y: 0 }, ic, { closed: false });
      bands.children.forEach((m, i) => { if (m.isMesh) v.pickable(m, n === 1 ? 'the band' : 'a frustum band'); });
      F.mesh.polyline(g, curveAt(f, a, b, 80), fc);
      v.headline(`${n} ${n === 1 ? 'band' : 'bands'}: their areas add to ${fmt(sum, 2)}; the surface area is ${fmt(SA, 2)}.`);
    }
    ro.set(`\\sum_{i=1}^{${n}}\\pi(\\kf(x_{i-1})+\\kf(x_{i}))\\,l_{i}=${typed('integral', n2(sum))}\\qquad \\int_{0}^{3.5}2\\pi\\kf(x)\\sqrt{1+(\\kfprime(x))^{2}}\\,dx=${typed('integral', n2(SA))}`);
  }
  still(d, draw);
})();

/* Figures 6.42 + 6.43 + 6.44: a cone of base radius r₁ = 1.6 and height 2.4 (slant s = 2.88) cut parallel to its base;
   the frustum below the cut has slant height l and top radius r₂ = r₁(1 − l/s), and the small cone cut off is faint. */
(function () {
  const d = sim('sim-frustum-cone', 520);
  const r1 = 1.6, h = 2.4, s = Math.hypot(r1, h);
  const ls = ctl(d.controls, { label: 'l', cls: '', key: 'l', min: 0.4, max: s, step: 0.01, value: 1.6, unit: '', dec: 2, specials: [{ at: s, label: 'the whole cone' }] });
  const ro = readout(d);
  const cam = lcam(700, 330, 105, [0, 1.2, 0], 0.3, 0.42);
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('surface'), ic = C('integral'), l = ls.v, whole = Math.abs(l - s) < 1e-6, r2 = r1 * (1 - l / s), yl = (h * l) / s;
    const frustum = RV.lathe([[r1, 0], [r2, yl]], { x: 0 }, { m: 72 }, false);
    const tip = whole ? [] : RV.lathe([[r2, yl], [0, h]], { x: 0 }, { m: 72 }, false);
    arrow3(ctx, cam, [0, -0.3, 0], [0, h + 0.5, 0], PAL.muted, 2.5); name3(ctx, cam, [0, h + 0.5, 0], 'y', PAL.ink, { dx: -14, dy: -6 });
    RV.paint(ctx, cam, [{ faces: frustum, color: sc }, { faces: tip, color: sc, alpha: 0.18 }]);
    seg3(ctx, cam, [0, 0, 0], [r1, 0, 0], PAL.ink, 3); name3(ctx, cam, [r1 / 2, 0, 0], whole ? 'r' : 'r₁', PAL.ink, { dy: 20, size: 20, bg: PAL.panel });
    if (!whole) { seg3(ctx, cam, [0, yl, 0], [r2, yl, 0], PAL.ink, 3); name3(ctx, cam, [r2 / 2, yl, 0], 'r₂', PAL.ink, { dy: -18, size: 20, bg: PAL.panel }); }
    seg3(ctx, cam, [r1, 0, 0], [r2, yl, 0], PAL.ink, 4); name3(ctx, cam, [(r1 + r2) / 2, yl / 2, 0], whole ? 's' : 'l', PAL.ink, { dx: 20, size: 22, bg: PAL.panel });
    if (!whole) { seg3(ctx, cam, [r2, yl, 0], [0, h, 0], alpha(PAL.ink, 0.5), 2.5, [8, 8]); name3(ctx, cam, [r2 / 2 + 0.25, (yl + h) / 2 + 0.1, 0], 's − l', PAL.muted, { size: 18, bg: PAL.panel }); }
    const area = Math.PI * (r1 + r2) * l, big = Math.PI * r1 * s, small = Math.PI * r2 * (s - l);
    headline(ctx, whole ? `No cut: the frustum is the whole cone, of lateral surface area πrs = ${fmt(big, 3)}.` : `Cut ${fmt(l, 2)} up the slant: the frustum's lateral surface area is ${fmt(area, 3)}.`);
    ro.set(whole ? `\\text{Lateral Surface Area}=\\pi rs=\\pi(1.6)(${n2(s, 2)})=${typed('integral', n2(big))}`
      : `\\kS=\\pi r_{1}s-\\pi r_{2}(s-l)=${n2(big)}-${n2(small)}=\\pi(r_{1}+r_{2})l=${typed('integral', n2(area))}`, undefined, { form: whole });
  }
  still(d, draw);
})();

/* Figure 6.45, a faithful copy: one band, swept by the segment from (xᵢ₋₁, f(xᵢ₋₁)) to (xᵢ, f(xᵢ)) of the same stand-in curve. */
(function () {
  const d = sim('fig-band', 470);
  const f = (x) => 1 + 0.5 * Math.sin(1.2 * x) + 0.2 * x, x0 = 1.5, x1 = 2.2;
  const cam = lcam(700, 250, 92, [1.75, 0, 0], 0.32, 0.3);
  const band = RV.lathe([[x0, f(x0)], [x1, f(x1)]], { y: 0 }, { m: 72 }, false);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral');
    axes3(ctx, cam, [-0.4, 4.2], [-0.2, 2.8]);
    RV.paint(ctx, cam, [{ faces: band, color: ic }]);
    path3(ctx, cam, curveAt(f, 0, 3.5), fc, 4);
    name3(ctx, cam, [3.3, f(3.3) + 0.3, 0], 'y = f(x)', fc, { size: 20, bg: PAL.panel });
    seg3(ctx, cam, [x0, 0, 0], [x0, f(x0), 0], PAL.ink, 2.5, [6, 6]); seg3(ctx, cam, [x1, 0, 0], [x1, f(x1), 0], PAL.ink, 2.5, [6, 6]);
    name3(ctx, cam, [x0, f(x0) + 0.3, 0], 'f(xᵢ₋₁)', fc, { size: 18, dx: -36, bg: PAL.panel }); name3(ctx, cam, [x1, f(x1) + 0.3, 0], 'f(xᵢ)', fc, { size: 18, dx: 26, bg: PAL.panel });
    const p = cam.P([x0, -f(x0) - 0.25, 0]), q = cam.P([x1, -f(x1) - 0.25, 0]);
    hbracket(ctx, p[0], q[0], Math.max(p[1], q[1]) + 8, PAL.ink, 'Δx', { side: 'below' });
  }
  still(d, draw);
})();

/* two panels for an example: its graph at the left, its surface of revolution painted at the right */
function surfaceCopy(id, H, o) {
  const d = sim(id, H);
  const sheet = RV.lathe(o.curve, o.axis, { m: 64 }, false);
  const cam = lcam(...o.cam);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), sc = C('surface');
    const ax = axes(ctx, o.box ?? { l: 120, r: 560, t: 96, b: 440 }, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.xr[1] - o.xr[0], ny: o.yr[1] - o.yr[0] });
    o.graph(ctx, ax, fc);
    axes3(ctx, cam, o.ax3[0], o.ax3[1]);
    RV.paint(ctx, cam, [{ faces: sheet, color: sc }]);
    path3(ctx, cam, o.curve.map(([x, y]) => [x, y, 0]), fc, 3);
    text(ctx, '(a)', ax.box.l - 60, 48, PAL.ink, { size: 20, align: 'left' }); text(ctx, '(b)', o.cam[0] - 300, 48, PAL.ink, { size: 20, align: 'left' });
  }
  still(d, draw);
}
/* Figure 6.46, Example 6.21: √x on [1, 4] and the surface it sweeps about the x-axis. */
surfaceCopy('fig-sqrt-surface', 480, {
  curve: line2(Math.sqrt, 1, 4, 60), axis: { y: 0 }, xr: [0, 5], yr: [0, 3],
  graph: (ctx, ax, fc) => { plot(ctx, ax, Math.sqrt, fc, { x: [0, 5] }); [1, 4].forEach((x) => dash(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(2.6))); text(ctx, '$\\kf(x)=\\sqrt{x}$', ax.X(2.6), ax.Y(2.2), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }); },
  cam: [1000, 270, 70, [2.5, 0, 0], 0.32, 0.28], ax3: [[-0.4, 5], [-0.2, 2.8]],
});
/* Figure 6.47, Example 6.22: x = g(y) = y³/3 for 0 ≤ y ≤ 2 and the surface it sweeps about the y-axis. */
surfaceCopy('fig-cubic-surface', 500, {
  curve: Array.from({ length: 61 }, (_, i) => { const y = (2 * i) / 60; return [y ** 3 / 3, y]; }), axis: { x: 0 }, xr: [0, 3], yr: [0, 3],
  graph: (ctx, ax, fc) => { plotY(ctx, ax, (y) => y ** 3 / 3, 0, 2.05, fc); [0, 2].forEach((y) => dash(ctx, ax.X(0), ax.Y(y), ax.X(3), ax.Y(y))); text(ctx, '$\\kg(y)=\\frac{1}{3}y^{3}$', ax.X(1.9), ax.Y(1.4), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }); },
  cam: [1000, 290, 70, [0, 1, 0], 0.32, 0.36], ax3: [[-3, 3.2], [-0.2, 2.8]],
});
};
