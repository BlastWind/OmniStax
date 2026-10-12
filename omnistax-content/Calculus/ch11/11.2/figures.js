/* Figures for section 11.2 Calculus of Parametric Curves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, line, dot, label, headline, register, readout, cycle, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI;
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const fit = (win, t, b) => { const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]); return { l: 700 - w / 2, r: 700 + w / 2, t, b }; };
const D = (s) => typed('derivative', s);

/* The tangent line through the canvas point p along the canvas direction (dx, dy), clipped to the box, and a slope triangle
   on it: legs proportional to x′(t) across and y′(t) up. */
function tangentAt(ctx, ax, x, y, xp, yp, lc, dc) {
  const px = ax.X(x), py = ax.Y(y), vx = ax.X(x + xp) - ax.X(x), vy = ax.Y(y + yp) - ax.Y(y), L = Math.hypot(vx, vy);
  if (!(L > 1e-9)) return;
  const ux = vx / L, uy = vy / L, far = 2000;
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
  line(ctx, px - far * ux, py - far * uy, px + far * ux, py + far * uy, lc, 3);
  const h = 110 / L, qx = px + vx * h, qy = py + vy * h;
  line(ctx, px, py, qx, py, dc, 4); line(ctx, qx, py, qx, qy, dc, 4);
  ctx.restore();
}

/* 11.1's traced curve, with the tangent and slope triangle riding the point where o.slope is set */
function trace(id, o) {
  const d = sim(id, o.H ?? 520);
  const T = o.t1 - o.t0, cy = cycle(() => T, 1.2), ro = readout(d);
  const P = (t) => [o.x(t), o.y(t)];
  const BOX = o.equal ? fit(o.win, 90, (o.H ?? 520) - 70) : { l: 260, r: 1140, t: 90, b: (o.H ?? 520) - 70 };
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), t = o.t0 + Math.min(cy.now(), T), [x, y] = P(t);
    const ax = axes(ctx, BOX, o.win.x, o.win.y, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, fx: o.fx, fy: o.fy });
    F.polar.path(ctx, ax, P, [o.t0, o.t1], cc, { upto: t, marks: o.marks ?? 3 });
    hits.length = 0;
    (o.crit ?? []).forEach(([s, name]) => { const [u, v] = P(s); dot(ctx, ax.X(u), ax.Y(v), pc, true, 6); hits.push({ x: ax.X(u), y: ax.Y(v), r: 14, name: `${name} (${fmt(u, 2)}, ${fmt(v, 2)}), t = ${fmt(s, 2)}` }); });
    o.at.forEach(([s, name]) => {
      const [u, v] = P(s), px = ax.X(u), py = ax.Y(v);
      if (!(o.crit ?? []).some(([c]) => Math.abs(c - s) < 1e-9)) dot(ctx, px, py, cc, false, 7);
      label(ctx, `t = ${name}`, px, py, { side: o.side?.[name] ?? 'right', size: 20, gap: 16 });
    });
    if (o.slope) { const e = 1e-5, [xa, ya] = P(t - e), [xb, yb] = P(t + e); tangentAt(ctx, ax, x, y, (xb - xa) / (2 * e), (yb - ya) / (2 * e), C('line'), C('derivative')); }
    else {
      const guide = alpha(PAL.ink, 0.4), px = ax.X(x), py = ax.Y(y);
      line(ctx, px, py, px, ax.Y(Math.max(o.win.y[0], Math.min(o.win.y[1], 0))), guide, 2.5, [4, 8]);
      line(ctx, px, py, ax.X(Math.max(o.win.x[0], Math.min(o.win.x[1], 0))), py, guide, 2.5, [4, 8]);
    }
    dot(ctx, ax.X(x), ax.Y(y), pc, true, 9);
    hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the point (x(t), y(t)) at t = ${fmt(t, 2)}` });
    headline(ctx, o.head ? o.head(t, x, y) : `t = ${fmt(t, 2)}: the point is at (${fmt(x, 2)}, ${fmt(y, 2)})`);
    ro.set(o.ro(t, x, y));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / (o.secs ?? 5)), draw });
}
const slopeRo = (xp, yp, ratio) => (t) => {
  const a = xp(t), b = yp(t), undef = Math.abs(a) < 0.02;
  return `\\kdydx=\\frac{\\kyprime(t)}{\\kxprime(t)}=${ratio}=\\frac{${n(b)}}{${n(a)}}${undef ? '\\;\\text{undefined}' : '=' + D(n(b / a))}`;
};
const slopeHead = (xp, yp) => (t, x, y) => {
  const a = xp(t), b = yp(t);
  return Math.abs(a) < 0.02 ? `t = ${fmt(t, 2)}: at (${fmt(x, 2)}, ${fmt(y, 2)}) the tangent is vertical, x′(t) = 0` : `t = ${fmt(t, 2)}: at (${fmt(x, 2)}, ${fmt(y, 2)}) the slope is dy/dx = ${fmt(b / a, 2)}`;
};

/* Figure 11.16: the segment x = 2t + 3, y = 3t − 4 on [−2, 3]; axes x −2 to 10, y −11 to 6 */
trace('sim-slope-segment', { x: (t) => 2 * t + 3, y: (t) => 3 * t - 4, t0: -2, t1: 3, win: { x: [-2, 10], y: [-11, 6] }, nx: 12, ny: 17, H: 560, slope: true, marks: 2,
  fy: (v) => (v % 2 === 0 ? fmt(v, 0) : ''), at: [[-2, '−2'], [0, '0'], [3, '3']], side: { '0': 'left', '3': 'left' },
  head: slopeHead(() => 2, () => 3), ro: slopeRo(() => 2, () => 3, '\\frac{3}{2}') });
/* Figures 11.17–11.19, Example 11.4 a–c */
trace('sim-slope-parabola', { x: (t) => t * t - 3, y: (t) => 2 * t - 1, t0: -3, t1: 4, win: { x: [-4, 14], y: [-8, 8] }, nx: 9, ny: 8, H: 560, slope: true, secs: 6,
  fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0), at: [[-3, '−3'], [0, '0'], [4, '4']], side: { '0': 'left', '4': 'left' }, crit: [[0, 'the critical point']],
  head: slopeHead((t) => 2 * t, () => 2), ro: slopeRo((t) => 2 * t, () => 2, '\\frac{2}{2t}') });
trace('sim-slope-cubic', { x: (t) => 2 * t + 1, y: (t) => t ** 3 - 3 * t + 4, t0: -2, t1: 2, win: { x: [-4, 6], y: [0, 8] }, nx: 10, ny: 8, H: 520, slope: true, secs: 5,
  at: [[-2, '−2'], [-1, '−1'], [1, '1'], [2, '2']], side: { '−1': 'above', '1': 'below', '2': 'left' }, crit: [[-1, 'the relative maximum'], [1, 'the relative minimum']],
  head: slopeHead(() => 2, (t) => 3 * t * t - 3), ro: slopeRo(() => 2, (t) => 3 * t * t - 3, '\\frac{3t^{2}-3}{2}') });
trace('sim-slope-circle', { x: (t) => 5 * Math.cos(t), y: (t) => 5 * Math.sin(t), t0: 0, t1: 2 * PI, win: { x: [-7, 7], y: [-6, 6] }, nx: 14, ny: 12, H: 600, equal: true, slope: true, secs: 6,
  at: [[0, '0'], [PI / 2, 'π/2'], [PI, 'π'], [1.5 * PI, '3π/2']], side: { '0': 'left', 'π/2': 'below', 'π': 'right', '3π/2': 'above' },
  crit: [[0, 'a critical point'], [PI / 2, 'a critical point'], [PI, 'a critical point'], [1.5 * PI, 'a critical point']],
  head: slopeHead((t) => -5 * Math.sin(t), (t) => 5 * Math.cos(t)), ro: slopeRo((t) => -5 * Math.sin(t), (t) => 5 * Math.cos(t), '\\frac{5\\cos t}{-5\\sin t}') });

/* Figure 11.20: the tangent to x = t² − 3, y = 2t − 1 at any t of [−3, 4]; axes x −4 to 14, y −8 to 8 */
(function () {
  const d = sim('sim-tangent-at-t', 560);
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: -3, max: 4, step: 0.01, value: 2, unit: '', dec: 2, aria: 'parameter t of the point of tangency', specials: [{ at: 2 }, { at: 0 }] });
  const P = (s) => [s * s - 3, 2 * s - 1], G = F.polar.grip(d, { t, at: P, span: 1.5 }), ro = readout(d);
  const BOX = { l: 260, r: 1140, t: 90, b: 490 }, WIN = { x: [-4, 14], y: [-8, 8] };
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), tv = t.v, [x, y] = P(tv);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 9, ny: 8, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    F.polar.path(ctx, ax, P, [-3, 4], cc, { marks: 3 });
    tangentAt(ctx, ax, x, y, 2 * tv, 2, C('line'), C('derivative'));
    G.draw(ctx, ax, pc);
    hits.length = 0; hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the point of tangency (${fmt(x, 2)}, ${fmt(y, 2)})` });
    if (Math.abs(tv) < 0.005) {
      headline(ctx, `t = 0.00: the tangent at (−3.00, −1.00) is the vertical line x = −3`);
      ro.set(`\\kdydx=\\frac{1}{t}\\;\\text{is undefined at}\\;t=0;\\qquad x=-3`);
      return;
    }
    const m = 1 / tv, b = y - m * x, sg = b < 0 ? '-' : '+';
    headline(ctx, `t = ${fmt(tv, 2)}: the tangent at (${fmt(x, 2)}, ${fmt(y, 2)}) is y = ${fmt(m, 2)}x ${b < 0 ? '−' : '+'} ${fmt(Math.abs(b), 2)}`);
    const sgn = (v) => (v < 0 ? `+${n(-v)}` : `-${n(v)}`);
    ro.set(`\\kdydx=\\frac{2}{2t}=\\frac{1}{t}=${D(n(m, 3))}\\qquad y${sgn(y)}=${n(m, 3)}(x${sgn(x)})\\;\\Rightarrow\\; y=${n(m, 3)}x${sg}${n(Math.abs(b), 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 11.21 + 11.22: the cycloid x = t − sin t, y = 1 − cos t; its arch over [0, 2π] and n rectangles of heights y(tᵢ₋₁).
   Window x −1.2 to 7.5, y −0.3 to 2.5, one scale. */
(function () {
  const d = sim('sim-arch-area', 460);
  const nn = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0, aria: 'number of rectangles n' });
  const P = (t) => [t - Math.sin(t), 1 - Math.cos(t)], ro = readout(d);
  const WIN = { x: [-1.2, 7.5], y: [-0.3, 2.5] }, BOX = fit(WIN, 92, 400);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), ic = C('integral'), k = nn.v;
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    [[0, '0'], [PI, 'π'], [2 * PI, '2π']].forEach(([x, s]) => { line(ctx, ax.X(x), ax.Y(0) - 6, ax.X(x), ax.Y(0) + 6, PAL.muted, 2); F.text(ctx, s, ax.X(x), ax.Y(0) + 26, PAL.muted, { size: 17, align: 'center' }); });
    [1, 2].forEach((v) => F.text(ctx, String(v), ax.X(0) - 14, ax.Y(v), PAL.muted, { size: 17, align: 'right' }));
    const A = F.polar.strips(ctx, ax, P, 0, 2 * PI, k, ic);
    F.polar.path(ctx, ax, P, [-PI, 3 * PI], alpha(cc, 0.35), { w: 3, faint: 0 });
    F.polar.path(ctx, ax, P, [0, 2 * PI], cc, { faint: 0 });
    headline(ctx, `n = ${k}: the rectangles total ${fmt(A, 2)}; the area under the arch is 3π ≈ ${fmt(3 * PI, 2)}`);
    ro.set(`${typed('integral', '\\kA_{' + k + '}')}=\\sum_{i=1}^{${k}}y(t_{i-1})(x(t_{i})-x(t_{i-1}))=${typed('integral', n(A, 3))}\\qquad \\kA=\\int_0^{2\\pi}y(t)\\kxprime(t)\\,dt=3\\pi\\approx ${typed('integral', n(3 * PI, 3))}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 11.23 + 11.24: n chords along the semicircle x = 3 cos t, y = 3 sin t, 0 ≤ t ≤ π. Window x ±3.8, y −0.5 to 3.6, one scale. */
(function () {
  const d = sim('sim-chords', 470);
  const nn = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 4, unit: '', dec: 0, aria: 'number of line segments n' });
  const P = (t) => [3 * Math.cos(t), 3 * Math.sin(t)], ro = readout(d);
  const WIN = { x: [-4.4, 4.4], y: [-0.6, 3.6] }, BOX = fit(WIN, 92, 420);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), ic = C('integral'), pc = C('point'), k = nn.v;
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    [-3, -2, -1, 1, 2, 3].forEach((v) => { line(ctx, ax.X(v), ax.Y(0) - 6, ax.X(v), ax.Y(0) + 6, PAL.muted, 2); F.text(ctx, fmt(v, 0), ax.X(v), ax.Y(0) + 26, PAL.muted, { size: 17, align: 'center' }); });
    F.polar.path(ctx, ax, P, [0, PI], cc, { faint: 0, marks: 0 });
    const s = F.polar.chords(P, 0, PI, k);
    for (let i = 0; i < k; i++) {
      const [x0, y0] = P((PI * i) / k), [x1, y1] = P((PI * (i + 1)) / k);
      line(ctx, ax.X(x0), ax.Y(y0), ax.X(x1), ax.Y(y1), ic, 4);
      if (i) dot(ctx, ax.X(x0), ax.Y(y0), ic, true, 5);
    }
    [['A', 3], ['B', -3]].forEach(([nm, x]) => { dot(ctx, ax.X(x), ax.Y(0), pc, true, 8); label(ctx, nm, ax.X(x), ax.Y(0), { side: x > 0 ? 'right' : 'left', size: 20, gap: 18 }); });
    headline(ctx, `n = ${k}: ${k === 1 ? 'one segment' : k + ' segments'} total ${fmt(s, 3)}; the semicircle is 3π ≈ ${fmt(3 * PI, 3)} long`);
    ro.set(`\\sum_{k=1}^{${k}}\\sqrt{(x(t_{k})-x(t_{k-1}))^{2}+(y(t_{k})-y(t_{k-1}))^{2}}=${typed('integral', n(s, 4))}\\qquad \\ks=\\int_0^{\\pi}\\sqrt{(\\kdxdt)^{2}+(\\kdydt)^{2}}\\,dt=3\\pi\\approx ${typed('integral', n(3 * PI, 4))}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 11.25: a stand-in arc x = t + 0.7 sin t, y = 1.4 + 0.6 cos 1.3t on [0, 3] (the book draws a generic one) revolved about the
   x-axis; the band from 0 to t in the integral's colour over the translucent surface. Scene units are the graph's. */
(function () {
  const d = sim('sim-surface-band');
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0.05, max: 3, step: 0.01, value: 3, unit: '', dec: 2, aria: 'parameter t of the point' });
  const ro = readout(d);
  const X = (u) => u + 0.7 * Math.sin(u), Y = (u) => 1.4 + 0.6 * Math.cos(1.3 * u);
  const sp = (u) => Math.hypot(1 + 0.7 * Math.cos(u), -0.78 * Math.sin(1.3 * u));
  const S = (b) => { let s = 0; const m = 400, h = b / m; for (let i = 0; i < m; i++) { const u = (i + 0.5) * h; s += Y(u) * sp(u) * h; } return 2 * PI * s; };
  const v = F.view3d(d.stage, { h: 470, dist: 11.5, tilt: 0.3, yaw: 'free', pitch: 'free' });
  const g = v.part(0); g.position.x = -1.7;
  const arc = (a, b, m = 60) => Array.from({ length: m + 1 }, (_, i) => { const u = a + ((b - a) * i) / m; return [X(u), Y(u)]; });
  function draw() {
    v.clear();
    const tv = t.v;
    const whole = F.revolve.mesh(g, arc(0, 3), { y: 0 }, C('surface'), { closed: false, alpha: 0.22, edges: null });
    v.pickable(whole, 'the surface of revolution');
    const band = F.revolve.mesh(g, arc(0, tv), { y: 0 }, C('integral'), { closed: false, alpha: 0.75 });
    v.pickable(band, `the band swept from t = 0 to t = ${fmt(tv, 2)}`);
    F.mesh.polyline(g, arc(0, 3, 90).map(([x, y]) => [x, y, 0]), C('curve'));
    const ring = Array.from({ length: 73 }, (_, i) => { const a = (2 * PI * i) / 72; return [X(tv), Y(tv) * Math.cos(a), Y(tv) * Math.sin(a)]; });
    F.mesh.polyline(g, ring, PAL.ink);
    v.pickable(F.mesh.sphere(g, [X(tv), Y(tv), 0], 0.07, C('point')), `the point (x(t), y(t)) = (${fmt(X(tv), 2)}, ${fmt(Y(tv), 2)})`);
    F.mesh.polyline(g, [[-0.4, 0, 0], [4.3, 0, 0]], PAL.muted);
    v.label('x-axis', [4.4, 0, 0], g, -12);
    const st = S(tv);
    v.headline(`t = ${fmt(tv, 2)}: the band swept so far has area ${fmt(st, 2)}`);
    ro.set(`${typed('integral', '\\kS(t)')}=2\\pi\\int_0^{${n(tv)}}y(u)\\sqrt{(\\kxprime(u))^{2}+(\\kyprime(u))^{2}}\\,du=${typed('integral', n(st, 2))}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 11.26: the semicircle of radius r, drawn with r = 1 and the axes in units of r */
trace('sim-trace-semicircle-r', { x: (t) => Math.cos(t), y: (t) => Math.sin(t), t0: 0, t1: PI, win: { x: [-1.5, 1.5], y: [-0.3, 1.3] }, nx: 6, ny: 0, H: 440, equal: true, secs: 4,
  fx: (v) => (Math.abs(v) < 1e-9 ? '0' : Math.abs(Math.abs(v) - 1) < 1e-9 ? (v < 0 ? '−r' : 'r') : ''),
  at: [[0, '0'], [PI / 2, 'π/2'], [PI, 'π']], side: { '0': 'above', 'π/2': 'above', 'π': 'above' },
  head: (t, x, y) => `t = ${fmt(t, 2)}: the point is at (${fmt(x, 2)}r, ${fmt(y, 2)}r)`,
  ro: (t, x, y) => `x(t)=r\\cos t=${n(x)}r,\\qquad y(t)=r\\sin t=${n(y)}r` });
};
