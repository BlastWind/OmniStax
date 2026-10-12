/* Figures for section 6.2 Determining Volumes by Slicing. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, dot, line, arrow, text, label, headline, register, readout, fmt, hover, hbracket, vbracket } = F;
const RV = F.revolve;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
const simpson = (h, a, b, n = 400) => { const w = (b - a) / n; let s = h(a) + h(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * h(a + i * w); return (s * w) / 3; };
const TAU = 2 * Math.PI;

/* ---------- locked views of solids (F.revolve.paint) ---------- */
const lcam = (cx, cy, s, at, yaw = 0.52, pitch = 0.3) => RV.camera({ yaw, pitch, dist: 2600, cx, cy, s, at });
const seg3 = (ctx, cam, a, b, color, w = 3, d) => { const p = cam.P(a), q = cam.P(b); line(ctx, p[0], p[1], q[0], q[1], color, w, d); };
const arrow3 = (ctx, cam, a, b, color, w = 3) => { const p = cam.P(a), q = cam.P(b); arrow(ctx, p[0], p[1], q[0], q[1], color, w); };
function path3(ctx, cam, pts, color, w = 3, d) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; if (d) ctx.setLineDash(d); ctx.beginPath();
  pts.forEach((p, i) => { const [x, y] = cam.P(p); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
}
function fill3(ctx, cam, pts, color, a = 1) {
  ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.beginPath();
  pts.forEach((p, i) => { const [x, y] = cam.P(p); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.closePath(); ctx.fill(); ctx.restore();
}
const name3 = (ctx, cam, p, s, color = PAL.ink, o = {}) => { const [x, y] = cam.P(p); text(ctx, s, x + (o.dx ?? 0), y + (o.dy ?? 0), color, { size: o.size ?? 22, weight: 600, align: o.align ?? 'center', tex: o.tex, bg: o.bg }); };
/* the coordinate axes of a locked view, drawn first so the solid hides what passes inside it */
function axes3(ctx, cam, xr, yr, o = {}) {
  arrow3(ctx, cam, [xr[0], 0, 0], [xr[1], 0, 0], PAL.muted, 2.5); name3(ctx, cam, [xr[1], 0, 0], 'x', PAL.ink, { dx: 18, dy: 4 });
  arrow3(ctx, cam, [0, yr[0], 0], [0, yr[1], 0], PAL.muted, 2.5); name3(ctx, cam, [0, yr[1], 0], 'y', PAL.ink, { dx: -16, dy: -6 });
  if (o.z) { arrow3(ctx, cam, [0, 0, o.z[0]], [0, 0, o.z[1]], PAL.muted, 2); name3(ctx, cam, [0, 0, o.z[1]], 'z', PAL.ink, { dx: -14, dy: 10 }); }
}
const curveAt = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x), 0]; });
/* every point of a set of faces moved by T */
const mapFaces = (faces, T) => faces.map((f) => f.map(T));

/* ---------- the three.js scenes (F.revolve.mesh) ---------- */
/* a scene of book units drawn s scene units each, centred on `at` */
function scene3(d, o) {
  const v = F.view3d(d.stage, { h: o.h ?? 560, dist: o.dist ?? 9, tilt: o.tilt ?? 0.32, pitch: o.pitch ?? [-1.35, 1.35] });
  const turn = v.part(0), g = new THREE.Group(); turn.add(g);
  g.scale.setScalar(o.s); g.position.set(-o.at[0] * o.s, -o.at[1] * o.s, -o.at[2] * o.s);
  if (o.yaw !== undefined) v.setView(o.yaw, o.tilt ?? 0.32);
  /* the viewer's clear empties its parts, so the scaled group is emptied and put back each time */
  const reset = () => { v.clear(); g.clear(); turn.add(g); };
  return { v, g, reset };
}
const hasGL = () => typeof THREE !== 'undefined';
/* the axes of a scene as ink lines with their names */
function axesMesh(v, g, xr, yr, scale) {
  F.mesh.arrow(g, [xr[0], 0, 0], [xr[1], 0, 0], 0.02 / scale, PAL.muted); v.label('x', [xr[1] + 0.25, 0, 0], g);
  F.mesh.arrow(g, [0, yr[0], 0], [0, yr[1], 0], 0.02 / scale, PAL.muted); v.label('y', [0, yr[1] + 0.3, 0], g);
}
const curve3 = (g, f, a, b, color, n = 96) => F.mesh.polyline(g, Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x), 0]; }), color);

/* Figure 6.11: a half-cylinder of radius 1.2 and length 4 lying on its flat face, cut by a plane at x; every cut is the
   same half-disk. Painted from the book's viewpoint; the half-disk is drawn flat beside it. */
(function () {
  const d = sim('sim-cylinder-slice', 500);
  const r = 1.2, L = 4;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.2, max: L - 0.2, step: 0.01, value: 1.6, unit: '', dec: 2 });
  const ro = readout(d);
  /* the half-cylinder as the rectangle [0, L] × [0, r] turned half way about the x-axis, then laid on its flat face */
  const lay = (p) => [p[0], p[2], -p[1]];
  const body = mapFaces(RV.solid(RV.rect(0, L, 0, r), { y: 0 }, { from: 0, to: Math.PI, m: 40 }), lay);
  const cam = lcam(520, 330, 112, [L / 2, 0.4, 0], 0.62, 0.34);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), x = xs.v, A = (Math.PI * r * r) / 2;
    axes3(ctx, cam, [-0.6, L + 1], [-0.2, 1.9]);
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: 0.42 }]);
    const half = Array.from({ length: 41 }, (_, i) => { const t = (Math.PI * i) / 40; return [x, r * Math.sin(t), -r * Math.cos(t)]; });
    fill3(ctx, cam, [[x, -0.25, -r - 0.35], [x, -0.25, r + 0.35], [x, r + 0.4, r + 0.35], [x, r + 0.4, -r - 0.35]], PAL.ink, 0.08);
    path3(ctx, cam, [[x, -0.25, -r - 0.35], [x, -0.25, r + 0.35], [x, r + 0.4, r + 0.35], [x, r + 0.4, -r - 0.35], [x, -0.25, -r - 0.35]], alpha(PAL.ink, 0.45), 2);
    fill3(ctx, cam, half, rc, 0.9); path3(ctx, cam, [...half, half[0]], rc, 3);
    name3(ctx, cam, [x, r + 0.55, r + 0.35], 'the plane at x = ' + fmt(x, 2), PAL.ink, { size: 18, bg: PAL.panel });
    /* the cross-section, flat */
    const cx = 1110, cy = 330, S = 120;
    ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.moveTo(cx - r * S, cy); ctx.arc(cx, cy, r * S, Math.PI, 0); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, cx - r * S - 20, cy, cx + r * S + 20, cy, PAL.muted, 2);
    line(ctx, cx, cy, cx + r * S * Math.cos(-0.9), cy + r * S * Math.sin(-0.9), PAL.ink, 3);
    text(ctx, 'r = 1.2', cx + 0.62 * r * S, cy - 0.32 * r * S - 26, PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'the cross-section at x', cx, cy + 40, PAL.ink, { size: 20, align: 'center' });
    headline(ctx, `At x = ${fmt(x, 2)} the plane cuts a half-disk of area ${fmt(A, 3)}, the same as everywhere along the solid.`);
    ro.set(`V=A\\cdot h=\\tfrac{1}{2}\\pi(1.2)^{2}\\cdot 4=${typed('integral', n2(A * L))}`);
  }
  still(d, draw);
})();

/* Figures 6.12 + 6.13: a stand-in solid S along the x-axis whose cross-sections are ellipses, of half-heights
   q(x) = 0.7 + 0.35 sin(1.3x) + 0.12x and half-depths 0.7q(x), on [a, b] = [0.5, 4.5]. Its n slices are replaced by
   cylinders of thickness Δx on the cross-section at each midpoint; the book draws n = 3. */
(function () {
  const d = sim('sim-slices', 520);
  const q = (x) => 0.7 + 0.35 * Math.sin(1.3 * x) + 0.12 * x, a = 0.5, b = 4.5, K = 0.7;
  const Ax = (x) => Math.PI * K * q(x) * q(x), V = simpson(Ax, a, b);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 24, step: 1, value: 3, unit: '', dec: 0, detents: [3] });
  const ro = readout(d);
  const squash = (p) => [p[0], p[1], p[2] * K];
  const body = mapFaces(RV.solid(RV.between(q, () => 0, a, b, 60), { y: 0 }, { m: 44 }), squash);
  const cam = lcam(700, 320, 128, [2.5, 0, 0], 0.42, 0.26);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), ic = C('integral'), n = ns.v, w = (b - a) / n;
    axes3(ctx, cam, [-0.4, b + 0.9], [-0.1, 1.9]);
    const slabs = RV.strips(q, () => 0, a, b, n, 'mid').flatMap((s) => mapFaces(RV.solid(s, { y: 0 }, { m: 44 }), squash));
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: 0.3 }, { faces: slabs, color: ic, alpha: 0.55 }]);
    let sum = 0;
    for (let i = 0; i < n; i++) { const m = a + (i + 0.5) * w; sum += Ax(m) * w; if (n <= 8) name3(ctx, cam, [m, q(m) + 0.32, 0], `S_${i + 1}`, ic, { size: 20, bg: PAL.panel }); }
    name3(ctx, cam, [a, -q(a) - 0.3, 0], n <= 8 ? 'a = x_0' : 'a', PAL.ink, { size: 20, bg: PAL.panel }); name3(ctx, cam, [b, -q(b) - 0.3, 0], n <= 8 ? `b = x_${n}` : 'b', PAL.ink, { size: 20, bg: PAL.panel });
    name3(ctx, cam, [b - 0.3, q(b - 0.3) + 0.55, 0], '$\\kS$', rc, { size: 26, tex: true, bg: PAL.panel });
    headline(ctx, `${n} ${n === 1 ? 'slice' : 'slices'}, each a cylinder on its middle cross-section: their volumes add to ${fmt(sum, 3)}; the volume of S is ${fmt(V, 3)}.`);
    ro.set(`\\kV(\\kS)\\approx\\sum_{i=1}^{${n}}\\kA(x_i^{*})\\Delta x=${typed('integral', n2(sum))}\\qquad \\kV(\\kS)=\\int_{0.5}^{4.5}\\kA(x)\\,dx=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();

/* Figure 6.14, Example 6.6: a pyramid on its side, tip at the origin and square base of side a at x = h, with the square
   cross-section of side s = ax/h at x; (b), the side view, beside it. */
(function () {
  const d = sim('sim-pyramid', 520);
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 1, max: 3, step: 0.1, value: 2, unit: '', dec: 1 });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 2, max: 5, step: 0.1, value: 4, unit: '', dec: 1 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 5, step: 0.01, value: 2.5, unit: '', dec: 2 });
  const ro = readout(d);
  const cam = lcam(400, 300, 92, [2.5, 0, 0], 0.62, 0.3);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), a = as.v, h = hs.v, x = Math.min(xs.v, h), s = (a * x) / h, k = a / 2;
    const O = [0, 0, 0], B = [[h, -k, -k], [h, k, -k], [h, k, k], [h, -k, k]];
    axes3(ctx, cam, [-0.5, 5.6], [-0.2, 1.9]);
    const faces = [[O, B[0], B[1]], [O, B[1], B[2]], [O, B[2], B[3]], [O, B[3], B[0]], B];
    RV.paint(ctx, cam, [{ faces, color: rc, alpha: 0.32 }]);
    const sq = [[x, -s / 2, -s / 2], [x, s / 2, -s / 2], [x, s / 2, s / 2], [x, -s / 2, s / 2]];
    fill3(ctx, cam, sq, rc, 0.9); path3(ctx, cam, [...sq, sq[0]], rc, 3);
    [[O, B[0]], [O, B[1]], [O, B[2]], [O, B[3]], [B[0], B[1]], [B[1], B[2]], [B[2], B[3]], [B[3], B[0]]].forEach(([p, r]) => seg3(ctx, cam, p, r, alpha(PAL.ink, 0.55), 2));
    name3(ctx, cam, [h, -k - 0.3, k], 'a', PAL.ink, { size: 22 }); name3(ctx, cam, [x, s / 2 + 0.3, -s / 2], 's', rc, { size: 22, bg: PAL.panel });
    /* (b) the side view: the triangle with the cross-section as a segment */
    const L = 870, R = 1300, Bt = 440, T = 120, sc = Math.min((R - L) / 5.3, (Bt - T) / 3.4), y0 = (Bt + T) / 2;
    const X = (u) => L + 20 + u * sc, Y = (v) => y0 - v * sc;
    line(ctx, X(-0.1), Y(0), X(5.2), Y(0), PAL.muted, 2); text(ctx, 'x', X(5.2) + 14, Y(0), PAL.ink, { size: 22, weight: 600 });
    ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.18; ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(h), Y(k)); ctx.lineTo(X(h), Y(-k)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X(0), Y(0), X(h), Y(k), PAL.ink, 3); line(ctx, X(0), Y(0), X(h), Y(-k), PAL.ink, 3); line(ctx, X(h), Y(k), X(h), Y(-k), PAL.ink, 3);
    line(ctx, X(x), Y(s / 2), X(x), Y(-s / 2), rc, 5);
    vbracket(ctx, X(h) + 18, Y(k), Y(-k), PAL.ink, 'a', 1);
    if (s * sc > 24) vbracket(ctx, X(x) - 16, Y(s / 2), Y(-s / 2), rc, 's', -1);
    hbracket(ctx, X(0), X(x), Y(-k) + 34, PAL.ink, 'x'); hbracket(ctx, X(0), X(h), Y(-k) + 78, PAL.ink, 'h');
    text(ctx, '(b)', (L + R) / 2, 480, PAL.ink, { size: 20, align: 'center' }); text(ctx, '(a)', 400, 480, PAL.ink, { size: 20, align: 'center' });
    headline(ctx, `At x = ${fmt(x, 2)} the cross-section is a square of side ${fmt(s, 3)} and area ${fmt(s * s, 3)}; the pyramid's volume is ${fmt((a * a * h) / 3, 3)}.`);
    ro.set(`s=\\frac{ax}{h}=${n2(s)},\\quad \\kA(x)=s^{2}=${typed('function', n2(s * s))},\\quad \\kV=\\int_{0}^{${n2(h, 1)}}\\kA(x)\\,dx=\\tfrac{1}{3}a^{2}h=${typed('integral', n2((a * a * h) / 3))}`);
  }
  still(d, draw);
})();

/* Figure 6.15: the region under a stand-in curve f(x) = 1 + 0.6 sin(1.1x) + 0.15x on [0.5, 4] turned about the x-axis
   through θ. A story slider: play sweeps it from the region to the whole solid; the camera opens head-on, as the
   book's (a) is drawn, and lifts as the region turns, until the reader takes it. */
(function () {
  const d = sim('sim-revolving');
  const f = (x) => 1 + 0.6 * Math.sin(1.1 * x) + 0.15 * x, a = 0.5, b = 4;
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 360, step: 1, value: 0, unit: '°', dec: 0 });
  F.story(d, th, { stops: [{ v: 0, label: 'the region' }, { v: 90, label: 'a quarter turn' }, { v: 360, label: 'the solid' }] });
  const ro = readout(d);
  const V = simpson((x) => Math.PI * f(x) ** 2, a, b);
  const outline = RV.between(f, () => 0, a, b, 72);
  const S = hasGL() ? scene3(d, { s: 0.85, at: [2.2, 0, 0], dist: 9, tilt: 0 }) : null;
  function draw() {
    const t = th.v, phi = (t * Math.PI) / 180;
    if (S) {
      const { v, g } = S; S.reset();
      axesMesh(v, g, [-0.6, 5.2], [-0.2, 2.8], 0.85);
      const rc = C('region'), fc = C('function');
      RV.mesh(g, outline, { y: 0 }, rc, { sweep: { from: 0, to: Math.max(phi, 1e-4), m: 72 } });
      curve3(g, f, a, b, fc);
      if (phi > 0.02) F.mesh.polyline(g, Array.from({ length: 73 }, (_, i) => { const x = a + ((b - a) * i) / 72; return RV.turn([x, f(x)], { y: 0 }, phi); }), fc);
      const k = Math.min(1, t / 120);
      if (!v.turned) v.look({ yaw: -0.55 * k, pitch: 0.42 * k });
      v.headline(t >= 360 ? 'A full turn: the region has swept out the whole solid of revolution.' : t === 0 ? 'The region under the curve, before it turns.' : `The region has turned ${t}° about the x-axis.`);
    }
    ro.set(`\\ktheta=${t}^{\\circ}:\\quad \\text{volume swept}=\\frac{${t}}{360}\\int_{0.5}^{4}\\pi[\\kf(x)]^{2}\\,dx=${typed('integral', n2((V * t) / 360))}`);
  }
  still(d, draw);
})();

/* two panels: the region on flat axes at the left, the solid painted at the right */
function leftAxes(ctx, xr, yr, o = {}) {
  const box = o.box ?? { l: 120, r: 560, t: 96, b: 440 };
  return axes(ctx, box, xr, yr, { xl: o.xl ?? 'x', yl: o.yl ?? 'y', nx: o.nx ?? (xr[1] - xr[0]), ny: o.ny ?? (yr[1] - yr[0]), fx: o.fx, fy: o.fy });
}

/* Figures 6.16 + 6.17, Example 6.7: f(x) = x² − 4x + 5 on [1, 4], its region and the solid it sweeps about the x-axis,
   with the circular cross-section at x. Left axes 0 to 5 by 0 to 6. */
(function () {
  const d = sim('sim-cross-section-disk', 520);
  const f = (x) => x * x - 4 * x + 5, a = 1, b = 4;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: a, max: b, step: 0.01, value: 2.5, unit: '', dec: 2 });
  const P = F.drag(d, { x: xs, y: 0 });
  const ro = readout(d);
  const body = RV.solid(RV.between(f, () => 0, a, b, 60), { y: 0 }, { m: 48 });
  const cam = lcam(1000, 300, 44, [2.5, 0, 0], 0.3, 0.22);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), fc = C('function'), x = xs.v, r = f(x);
    const ax = leftAxes(ctx, [0, 5], [0, 6]);
    shade(ctx, ax, f, 0, a, b, rc, { alpha: 0.25 });
    line(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(r), rc, 4);
    plot(ctx, ax, f, fc, { x: [0, 4.5] });
    text(ctx, '$\\kf(x)=x^{2}-4x+5$', ax.X(2.4), ax.Y(5.4), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    P.draw(ctx, ax, PAL.ink);
    axes3(ctx, cam, [-0.6, 5.4], [-0.4, 5.6]);
    const disk = Array.from({ length: 49 }, (_, i) => RV.turn([x, r], { y: 0 }, (TAU * i) / 48));
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: 0.4 }]);
    fill3(ctx, cam, disk, rc, 0.85); path3(ctx, cam, disk, rc, 3);
    path3(ctx, cam, curveAt(f, a, b), fc, 3);
    seg3(ctx, cam, [x, 0, 0], [x, r, 0], PAL.ink, 3); name3(ctx, cam, [x, r / 2, 0], 'f(x)', fc, { dx: 34, size: 20, bg: PAL.panel });
    headline(ctx, `At x = ${fmt(x, 2)} the cross-section is a circle of radius f(x) = ${fmt(r, 3)}, of area ${fmt(Math.PI * r * r, 3)}.`);
    ro.set(`\\kA(x)=\\pi[\\kf(x)]^{2}=\\pi(${n2(r)})^{2}=${typed('function', n2(Math.PI * r * r))}\\qquad \\kV=\\int_{1}^{4}\\kA(x)\\,dx=\\frac{78}{5}\\pi=${typed('integral', n2((78 * Math.PI) / 5))}`);
  }
  still(d, draw);
})();

/* Figure 6.18: the disk method on f(x) = (x − 1)² + 1 over [−1, 3]: n midpoint rectangles turned into disks inside the
   solid they approximate, which is drawn faint. */
(function () {
  const d = sim('sim-disk-method');
  const f = (x) => (x - 1) ** 2 + 1, a = -1, b = 3, V = (412 * Math.PI) / 15;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0 });
  const ro = readout(d);
  const outline = RV.between(f, () => 0, a, b, 72);
  const S = hasGL() ? scene3(d, { s: 0.36, at: [1, 0.3, 0], dist: 9.5, tilt: 0.28, yaw: -0.2 }) : null;
  function draw() {
    const n = ns.v, w = (b - a) / n;
    let sum = 0; for (let i = 0; i < n; i++) sum += Math.PI * f(a + (i + 0.5) * w) ** 2 * w;
    if (S) {
      const { v, g } = S; S.reset();
      axesMesh(v, g, [-2.4, 4.8], [-0.3, 5.8], 0.36);
      const rc = C('region'), ic = C('integral'), fc = C('function');
      v.pickable(RV.mesh(g, outline, { y: 0 }, rc, { alpha: 0.16, edges: null }).children[0], 'the solid of revolution');
      RV.strips(f, () => 0, a, b, n, 'mid').forEach((s, i) => { const m = RV.mesh(g, s, { y: 0 }, ic, { m: 64 }); v.pickable(m.children[0], `disk ${i + 1} of ${n}`); });
      curve3(g, f, -1.3, 3.3, fc);
      v.headline(`${n} ${n === 1 ? 'disk' : 'disks'}: their volumes add to ${fmt(sum, 2)}; the solid's volume is 412π/15 ≈ ${fmt(V, 2)}.`);
    }
    ro.set(`\\kV\\approx\\sum_{i=1}^{${n}}\\pi[\\kf(x_i^{*})]^{2}\\Delta x=${typed('integral', n2(sum))}\\qquad \\kV=\\int_{-1}^{3}\\pi[\\kf(x)]^{2}\\,dx=\\frac{412\\pi}{15}=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();

/* a still copy of an example: the region at the left and its solid painted at the right */
function solidCopy(id, H, o) {
  const d = sim(id, H);
  const outline = o.outline, body = RV.solid(outline, o.axis, { m: 48, ...(o.sweep ?? {}) });
  const cam = lcam(o.cam[0], o.cam[1], o.cam[2], o.cam[3], o.cam[4] ?? 0.55, o.cam[5] ?? 0.28);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region');
    const ax = leftAxes(ctx, o.xr, o.yr, o.ax ?? {});
    o.region(ctx, ax, rc);
    o.curves.forEach(([f, x, c, isY]) => { const col = c(); if (isY) plotY(ctx, ax, f, x[0], x[1], col); else plot(ctx, ax, f, col, { x }); });
    o.labels.forEach(([s, x, y, c]) => text(ctx, s, ax.X(x), ax.Y(y), c(), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel }));
    axes3(ctx, cam, o.ax3[0], o.ax3[1]);
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: o.alpha ?? 1 }]);
    (o.lines3 ?? []).forEach(([pts, c]) => path3(ctx, cam, pts, c(), 3));
    text(ctx, '(a)', ax.box.l - 60, 48, PAL.ink, { size: 20, align: 'left' }); text(ctx, '(b)', o.cam[0] - 300, 48, PAL.ink, { size: 20, align: 'left' });
  }
  still(d, draw);
}
function plotY(ctx, ax, u, c, d, color, w = 5) {
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l - 6, ax.box.t - 6, ax.box.r - ax.box.l + 12, ax.box.b - ax.box.t + 12); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
  for (let i = 0; i <= 160; i++) { const y = c + ((d - c) * i) / 160; const p = [ax.X(u(y)), ax.Y(y)]; if (i) ctx.lineTo(...p); else ctx.moveTo(...p); }
  ctx.stroke(); ctx.restore();
}

/* Figure 6.19, Example 6.8: √x over [1, 4] and its solid about the x-axis. Left axes 0 to 5 by 0 to 3. */
solidCopy('fig-sqrt-solid', 480, {
  outline: RV.between(Math.sqrt, () => 0, 1, 4, 60), axis: { y: 0 }, xr: [0, 5], yr: [0, 3],
  region: (ctx, ax, rc) => { shade(ctx, ax, Math.sqrt, 0, 1, 4, rc, { alpha: 0.25 }); [1, 4].forEach((x) => dash(ctx, ax.X(x), ax.Y(Math.sqrt(x)), ax.X(x), ax.Y(0))); },
  curves: [[Math.sqrt, [0, 5], () => C('function')]], labels: [['$\\kf(x)=\\sqrt{x}$', 3.2, 2.45, () => C('function')]],
  cam: [1000, 270, 80, [2.5, 0, 0], 0.32, 0.26], ax3: [[-0.4, 5.2], [-0.2, 2.6]], lines3: [[curveAt(Math.sqrt, 0, 4.6), () => C('function')]],
});

/* Figures 6.20 + 6.21, Example 6.9: g(y) = √(4 − y) on [0, 4] about the y-axis, with the horizontal rectangle at y on
   the left and the disk it turns into at the right. Left axes 0 to 3 by 0 to 5. */
(function () {
  const d = sim('sim-disk-y-axis', 520);
  const gy = (y) => Math.sqrt(4 - y), c = 0, dd = 4, V = 8 * Math.PI, dy = 0.2;
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: 0, max: 3.8, step: 0.01, value: 1.5, unit: '', dec: 2 });
  const ro = readout(d);
  const body = RV.solid(RV.betweenY(gy, () => 0, c, dd, 80), { x: 0 }, { m: 48 });
  const cam = lcam(1000, 300, 70, [0, 2, 0], 0.5, 0.36);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), ic = C('integral'), fc = C('function'), y = ys.v, r = gy(y + dy / 2);
    const ax = leftAxes(ctx, [0, 3], [0, 5], { box: { l: 160, r: 480, t: 96, b: 470 } });
    ctx.save(); ctx.globalAlpha = 0.22; ctx.fillStyle = rc; ctx.beginPath(); ctx.moveTo(ax.X(0), ax.Y(0));
    for (let i = 0; i <= 80; i++) { const t = (4 * i) / 80; ctx.lineTo(ax.X(gy(t)), ax.Y(t)); } ctx.lineTo(ax.X(0), ax.Y(4)); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.globalAlpha = 0.45; ctx.fillStyle = ic; ctx.fillRect(ax.X(0), ax.Y(y + dy), ax.X(r) - ax.X(0), ax.Y(y) - ax.Y(y + dy)); ctx.restore();
    plotY(ctx, ax, gy, 0, 4, fc);
    text(ctx, '$\\kg(y)=\\sqrt{4-y}$', ax.X(1.75), ax.Y(3.2), fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    axes3(ctx, cam, [-0.3, 2.9], [-0.3, 5.1], {});
    const disk = RV.solid(RV.rect(0, r, y, y + dy), { x: 0 }, { m: 48 });
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: 0.32 }, { faces: disk, color: ic, alpha: 0.95 }]);
    seg3(ctx, cam, [0, y + dy, 0], [r, y + dy, 0], PAL.ink, 3); name3(ctx, cam, [r / 2, y + dy, 0], 'g(y)', fc, { dy: -18, size: 20, bg: PAL.panel });
    headline(ctx, `At y = ${fmt(y, 2)} the slice is a horizontal disk of radius g(y) = ${fmt(gy(y), 3)} and area π(4 − y) = ${fmt(Math.PI * (4 - y), 3)}.`);
    ro.set(`\\pi[\\kg(y)]^{2}=\\pi(4-${n2(y, 2)})=${typed('function', n2(Math.PI * (4 - y)))}\\qquad \\kV=\\int_{0}^{4}\\pi[\\kg(y)]^{2}\\,dy=8\\pi=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();

/* Figure 6.22: the washer method on √x over g(x) = 1 on [1, 4]: n midpoint rectangles turned into washers inside the
   faint solid; a quarter is cut away toward the reader to show the cavity. */
(function () {
  const d = sim('sim-washer-method');
  const f = Math.sqrt, g = () => 1, a = 1, b = 4, V = (9 * Math.PI) / 2;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0 });
  const ro = readout(d);
  const outline = RV.between(f, g, a, b, 72), CUT = { from: Math.PI / 2, to: 2 * Math.PI, m: 72 };
  const S = hasGL() ? scene3(d, { s: 0.95, at: [2.5, 0.45, 0], dist: 9, tilt: 0.3, yaw: -0.38 }) : null;
  function draw() {
    const n = ns.v, w = (b - a) / n;
    let sum = 0; for (let i = 0; i < n; i++) { const m = a + (i + 0.5) * w; sum += Math.PI * (f(m) ** 2 - 1) * w; }
    if (S) {
      const { v, g: G } = S; S.reset();
      axesMesh(v, G, [-0.5, 5.2], [-0.2, 2.6], 0.95);
      const rc = C('region'), ic = C('integral');
      v.pickable(RV.mesh(G, outline, { y: 0 }, rc, { alpha: 0.18, sweep: CUT, edges: null }).children[0], 'the solid of revolution, with its cavity');
      RV.strips(f, g, a, b, n, 'mid').forEach((s, i) => { const m = RV.mesh(G, s, { y: 0 }, ic, { sweep: CUT }); v.pickable(m.children[0], `washer ${i + 1} of ${n}`); });
      curve3(G, f, 0, 4.6, F.ref('outer-sqrt')); F.mesh.polyline(G, [[0, 1, 0], [4.6, 1, 0]], F.ref('inner-one'));
      v.headline(`${n} ${n === 1 ? 'washer' : 'washers'}: their volumes add to ${fmt(sum, 3)}; the solid's volume is 9π/2 ≈ ${fmt(V, 3)}.`);
    }
    ro.set(`\\kV\\approx\\sum_{i=1}^{${n}}\\pi[(\\kf(x_i^{*}))^{2}-(\\kg(x_i^{*}))^{2}]\\Delta x=${typed('integral', n2(sum))}\\qquad \\kV=\\frac{9}{2}\\pi=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();

/* Figure 6.23, Example 6.10: x over 1/x on [1, 4], the solid with its cavity cut open toward the reader. Left axes 0 to 5
   by 0 to 5. */
solidCopy('fig-washer-example', 480, {
  outline: RV.between((x) => x, (x) => 1 / x, 1, 4, 60), axis: { y: 0 }, xr: [0, 5], yr: [0, 5], sweep: { from: Math.PI / 2, to: 2 * Math.PI },
  region: (ctx, ax, rc) => { shade(ctx, ax, (x) => x, (x) => 1 / x, 1, 4, rc, { alpha: 0.25 }); dash(ctx, ax.X(4), ax.Y(4), ax.X(4), ax.Y(0)); },
  curves: [[(x) => x, [0, 5], () => F.ref('ex10-f')], [(x) => 1 / x, [0.2, 5], () => F.ref('ex10-g')]],
  labels: [['$\\kf(x)=x$', 3.2, 4.5, () => F.ref('ex10-f')], ['$\\kg(x)=\\frac{1}{x}$', 3.6, 0.75, () => F.ref('ex10-g')]],
  cam: [1000, 270, 48, [2.5, 0, 0], 0.32, 0.26], ax3: [[-0.4, 5.4], [-0.3, 4.6]],
});

/* Figure 6.24, Example 6.11: 4 − x on [0, 4] turned about the line y = −2: at x a washer of outer radius 6 − x and inner
   radius 2. Left axes 0 to 5 by −3 to 5; the solid is cut open toward the reader. */
(function () {
  const d = sim('sim-other-axis', 540);
  const f = (x) => 4 - x, a = 0, b = 4, AX = { y: -2 }, V = (160 * Math.PI) / 3;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 3.9, step: 0.01, value: 1.5, unit: '', dec: 2 });
  const ro = readout(d);
  const CUT = { from: Math.PI / 2, to: 2 * Math.PI, m: 48 };
  const body = RV.solid(RV.between(f, () => 0, a, b, 40), AX, CUT);
  const cam = lcam(1000, 300, 36, [2, -2, 0], 0.32, 0.26);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), fc = C('function'), lc = C('line'), ic = C('integral'), x = xs.v, R = 6 - x;
    const ax = leftAxes(ctx, [0, 5], [-3, 5], { box: { l: 120, r: 520, t: 96, b: 480 } });
    shade(ctx, ax, f, 0, a, b, rc, { alpha: 0.25 });
    line(ctx, ax.X(0), ax.Y(-2), ax.X(5), ax.Y(-2), lc, 3, [10, 10]); text(ctx, 'y = −2', ax.X(4.3), ax.Y(-2) + 22, lc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    plot(ctx, ax, f, fc, { x: [0, 4.4] });
    text(ctx, '$\\kf(x)=4-x$', ax.X(1.9), ax.Y(3.6), fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    line(ctx, ax.X(x), ax.Y(-2), ax.X(x), ax.Y(f(x)), ic, 4);
    vbracket(ctx, ax.X(x) - 14, ax.Y(f(x)), ax.Y(-2), PAL.ink, '6 − x', -1); vbracket(ctx, ax.X(x) + 14, ax.Y(0), ax.Y(-2), PAL.ink, '2', 1);
    axes3(ctx, cam, [-0.4, 5.4], [-0.3, 4.6]);
    seg3(ctx, cam, [-0.6, -2, 0], [5.2, -2, 0], lc, 3, [10, 10]);
    const washer = RV.solid(RV.rect(x - 0.06, x + 0.06, 0, f(x)), AX, CUT);
    RV.paint(ctx, cam, [{ faces: body, color: rc, alpha: 0.3 }, { faces: washer, color: ic, alpha: 0.95 }]);
    headline(ctx, `At x = ${fmt(x, 2)} the washer runs from radius 2 out to radius 6 − x = ${fmt(R, 2)}.`);
    ro.set(`\\kA(x)=\\pi[(6-x)^{2}-(2)^{2}]=${typed('function', n2(Math.PI * (R * R - 4)))}\\qquad \\kV=\\frac{160\\pi}{3}=${typed('integral', n2(V))}`);
  }
  still(d, draw);
})();
};
