/* Figures for section 6.5 Physical Applications. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.5'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, dot, line, arrow, text, label, headline, register, readout, fmt, hbracket, vbracket, drag, choice, spring, fixed } = F;
const RV = F.revolve;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const big = (v) => Math.round(v).toLocaleString('en-US');
const texBig = (v) => big(v).replace(/,/g, '{,}');
const dash = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
const simpson = (h, a, b, n = 400) => { const w = (b - a) / n; let s = h(a) + h(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * h(a + i * w); return (s * w) / 3; };
const TAU = 2 * Math.PI;
const box = (ctx, x, y, w, h, color, a) => { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.fillRect(x, y, w, h); ctx.restore(); };
const lcam = (cx, cy, s, at, yaw = 0.32, pitch = 0.3) => RV.camera({ yaw, pitch, dist: 2600, cx, cy, s, at });
const seg3 = (ctx, cam, a, b, color, w = 3, d) => { const p = cam.P(a), q = cam.P(b); line(ctx, p[0], p[1], q[0], q[1], color, w, d); };
const name3 = (ctx, cam, p, s, color = PAL.ink, o = {}) => { const [x, y] = cam.P(p); text(ctx, s, x + (o.dx ?? 0), y + (o.dy ?? 0), color, { size: o.size ?? 20, weight: 600, align: o.align ?? 'center', bg: o.bg }); };

/* Figures 6.48 + 6.49: a thin rod on [π/2, π] whose density is the book's Example 6.23, ρ(x) = sin x, shaded darker where it
   is denser, cut into n segments; below, the graph of ρ with the segments' masses as rectangles. Graph 1.4 to 3.3 by 0 to 1.2. */
(function () {
  const d = sim('sim-rod-density', 560);
  const rho = Math.sin, a = Math.PI / 2, b = Math.PI;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: a, max: b - 0.001, step: 0.005, value: 2.3, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: 0 });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 250, b: 490 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), n = ns.v, w = (b - a) / n, i = Math.min(n - 1, Math.floor((xs.v - a) / w));
    const ax = axes(ctx, BOX, [1.4, 3.3], [0, 1.2], { xl: 'x', yl: 'ρ(x)', yc: fc, nx: 0, ny: 2, fy: (v) => fmt(v, 1) });
    /* the rod, above the graph on the same x scale */
    const top = 120, hgt = 34;
    for (let k = 0; k < 160; k++) { const x0 = a + ((b - a) * k) / 160, x1 = a + ((b - a) * (k + 1)) / 160; box(ctx, ax.X(x0), top, ax.X(x1) - ax.X(x0) + 0.6, hgt, PAL.ink, 0.12 + 0.55 * rho((x0 + x1) / 2)); }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(ax.X(a), top, ax.X(b) - ax.X(a), hgt); ctx.restore();
    let sum = 0;
    for (let k = 0; k < n; k++) {
      const x0 = a + k * w, m = x0 + w / 2; sum += rho(m) * w;
      if (k) line(ctx, ax.X(x0), top - 4, ax.X(x0), top + hgt + 4, PAL.ink, 2);
      ctx.save(); ctx.globalAlpha = k === i ? 0.45 : 0.2; ctx.fillStyle = ic; ctx.fillRect(ax.X(x0), ax.Y(rho(m)), ax.X(x0 + w) - ax.X(x0), ax.Y(0) - ax.Y(rho(m))); ctx.restore();
      ctx.save(); ctx.strokeStyle = ic; ctx.lineWidth = k === i ? 3.5 : 2; ctx.strokeRect(ax.X(x0), ax.Y(rho(m)), ax.X(x0 + w) - ax.X(x0), ax.Y(0) - ax.Y(rho(m))); ctx.restore();
    }
    const x0 = a + i * w;
    ctx.save(); ctx.strokeStyle = ic; ctx.lineWidth = 4; ctx.strokeRect(ax.X(x0), top - 3, ax.X(x0 + w) - ax.X(x0), hgt + 6); ctx.restore();
    if (ax.X(x0 + w) - ax.X(x0) > 34) text(ctx, 'mᵢ', (ax.X(x0) + ax.X(x0 + w)) / 2, top - 22, ic, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'x = π/2', ax.X(a), top + hgt + 24, PAL.ink, { size: 18, align: 'center' }); text(ctx, 'x = π', ax.X(b), top + hgt + 24, PAL.ink, { size: 18, align: 'center' });
    plot(ctx, ax, rho, fc, { x: [1.4, 3.3] });
    text(ctx, '$\\krho(x)=\\sin x$', ax.X(2.9), ax.Y(0.75), fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    P.draw(ctx, ax, PAL.ink);
    headline(ctx, `${n} ${n === 1 ? 'segment' : 'segments'}: their masses add to ${fmt(sum, 4)}; the mass of the rod is 1.`);
    ro.set(`\\km\\approx\\sum_{i=1}^{${n}}\\krho(x_i^{*})\\Delta x=${typed('integral', n2(sum, 4))}\\qquad \\km=\\int_{\\pi/2}^{\\pi}\\krho(x)\\,dx=${typed('integral', '1')}`);
  }
  still(d, draw);
})();

/* Figure 6.50: a disk of radius 4 whose radial density is Example 6.24's ρ(x) = √x, shaded darker where it is denser, cut
   into n washers of width Δx; the washer under the dragged radius is outlined. */
(function () {
  const d = sim('sim-radial-density', 520);
  const rho = Math.sqrt, r = 4, M = (128 * Math.PI) / 5;
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: r - 0.001, step: 0.01, value: 2.5, unit: '', dec: 2 });
  const ro = readout(d);
  const CX = 470, CY = 290, S = 52;
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('integral'), n = ns.v, w = r / n, i = Math.min(n - 1, Math.floor(xs.v / w));
    const gr = ctx.createRadialGradient(CX, CY, 0, CX, CY, r * S);
    for (let k = 0; k <= 16; k++) gr.addColorStop(k / 16, alpha(PAL.ink, 0.1 + 0.25 * rho((r * k) / 16)));
    ctx.save(); ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(CX, CY, r * S, 0, TAU); ctx.fill(); ctx.restore();
    let sum = 0;
    for (let k = 0; k < n; k++) { const m = (k + 0.5) * w; sum += TAU * m * rho(m) * w; if (k) { ctx.save(); ctx.strokeStyle = alpha(PAL.panel, 0.9); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(CX, CY, k * w * S, 0, TAU); ctx.stroke(); ctx.restore(); } }
    ctx.save(); ctx.fillStyle = ic; ctx.globalAlpha = 0.55; ctx.beginPath(); ctx.arc(CX, CY, (i + 1) * w * S, 0, TAU); ctx.arc(CX, CY, i * w * S, 0, TAU, true); ctx.fill(); ctx.globalAlpha = 1; ctx.strokeStyle = ic; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(CX, CY, (i + 1) * w * S, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(CX, CY, i * w * S, 0, TAU); ctx.stroke(); ctx.restore();
    arrow(ctx, CX - 20, CY, CX + r * S + 60, CY, PAL.muted, 2.5); text(ctx, 'x', CX + r * S + 74, CY, PAL.ink, { size: 22, weight: 600 });
    text(ctx, '0', CX, CY + 22, PAL.ink, { size: 18, align: 'center' });
    hbracket(ctx, CX + i * w * S, CX + (i + 1) * w * S, CY - 18, PAL.ink, 'Δx');
    text(ctx, `r = ${r}`, CX + r * S + 8, CY + 24, PAL.ink, { size: 18, align: 'left' });
    /* the washers' masses beside the disk */
    const ax = axes(ctx, { l: 860, r: 1300, t: 110, b: 440 }, [0, 4], [0, 60], { xl: 'x', yl: '2πxρ(x)', nx: 4, ny: 3 });
    for (let k = 0; k < n; k++) { const x0 = k * w, m = x0 + w / 2, hh = TAU * m * rho(m); ctx.save(); ctx.globalAlpha = k === i ? 0.45 : 0.2; ctx.fillStyle = ic; ctx.fillRect(ax.X(x0), ax.Y(hh), ax.X(x0 + w) - ax.X(x0), ax.Y(0) - ax.Y(hh)); ctx.restore(); }
    plot(ctx, ax, (x) => TAU * x * rho(x), C('function'), { x: [0, 4] });
    headline(ctx, `${n} ${n === 1 ? 'washer' : 'washers'}: their masses add to ${fmt(sum, 3)}; the mass of the disk is 128π/5 ≈ ${fmt(M, 3)}.`);
    ro.set(`\\km\\approx\\sum_{i=1}^{${n}}2\\pi x_i^{*}\\krho(x_i^{*})\\Delta x=${typed('integral', n2(sum))}\\qquad \\km=\\int_{0}^{4}2\\pi x\\krho(x)\\,dx=\\frac{128\\pi}{5}=${typed('integral', n2(M))}`);
  }
  still(d, draw);
})();

/* Figure 6.51 with Example 6.25: a block on a frictionless floor held by a spring of constant k = 50 N/m, pulled or pushed to
   x; below, F(x) = kx and the work, the area from 0 to x. Graph −0.3 to 0.6 m by −15 to 30 N. */
(function () {
  const d = sim('sim-spring', 600);
  const k = 50;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -0.3, max: 0.6, step: 0.005, value: 0.5, unit: 'm', dec: 2, specials: [{ at: -0.2, label: '−0.2 m' }, { at: 0, label: 'equilibrium' }, { at: 0.5, label: '0.5 m' }] });
  const ro = readout(d);
  const X0 = 640, S = 520, Y = 170;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), x = xs.v, bx = X0 + x * S;
    fixed(ctx, 90, Y - 70, 30, 120);
    line(ctx, 120, Y + 50, 1300, Y + 50, PAL.ink, 3);
    spring(ctx, 120, Y, bx - 50, Y, 12, 18, PAL.ink, 3);
    F.block(ctx, bx, Y, 100, 100, PAL.ink);
    dash(ctx, X0, Y - 70, X0, Y + 50); text(ctx, 'x = 0', X0, Y + 72, PAL.ink, { size: 18, align: 'center' });
    const Fv = k * x;
    if (Math.abs(Fv) > 0.5) { const L = 4 * Fv; arrow(ctx, bx + Math.sign(Fv) * 50, Y, bx + Math.sign(Fv) * 50 + L, Y, fc, 5); text(ctx, `F = ${fmt(Fv, 1)} N`, bx + Math.sign(Fv) * 50 + L + Math.sign(Fv) * 12, Y - 24, fc, { size: 20, weight: 600, align: Fv > 0 ? 'left' : 'right', bg: PAL.panel }); }
    text(ctx, Math.abs(x) < 1e-9 ? 'equilibrium' : x < 0 ? 'compressed' : 'stretched', bx, Y - 74, PAL.ink, { size: 20, align: 'center' });
    const ax = axes(ctx, { l: 380, r: 1150, t: 300, b: 560 }, [-0.3, 0.6], [-15, 30], { xl: 'x', yl: 'F(x)', yc: fc, nx: 9, ny: 3, fx: (v) => fmt(v, 1) });
    shade(ctx, ax, (t) => k * t, 0, Math.min(0, x), Math.max(0, x), ic, { alpha: 0.35 });
    plot(ctx, ax, (t) => k * t, fc);
    text(ctx, '$\\kF(x)=50x$', ax.X(0.42), ax.Y(26), fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    dot(ctx, ax.X(x), ax.Y(Fv), fc, true, 8);
    headline(ctx, Math.abs(x) < 1e-9 ? 'At equilibrium the spring needs no force, and no work has been done.' : `${x > 0 ? 'Stretched' : 'Compressed'} ${fmt(Math.abs(x), 2)} m: the work done is the area under F(x) = 50x, ${fmt(25 * x * x, 3)} J.`);
    ro.set(`\\kW=\\int_{0}^{${n2(x, 2)}}50x\\,dx=25x^{2}\\Big|_{0}^{${n2(x, 2)}}=${typed('integral', n2(25 * x * x))}\\ \\text{J}`);
  }
  still(d, draw);
})();

/* Figures 6.52 + 6.53: the cylindrical tank of radius 4 m and height 10 m filled to 8 m, x measured down from the top; the layer
   at depth xᵢ* weighs 9800·16πΔx N and is lifted xᵢ* m. A locked view. */
(function () {
  const d = sim('sim-pump-cylinder', 560);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 2, max: 10, step: 0.01, value: 5, unit: 'm', dec: 2, specials: [{ at: 2, label: 'the water’s surface' }] });
  const ro = readout(d);
  const AX = { x: 0 }, W = 7526400 * Math.PI;
  const wall = RV.lathe([[4, 0], [4, 10]], AX, { m: 64 }, false), water = RV.solid(RV.rect(0, 4, 0, 8), AX, { m: 64 });
  const cam = lcam(600, 300, 33, [0, 5, 0], 0.3, 0.32);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), ic = C('integral'), x = xs.v, y = 10 - x;
    const layer = RV.solid(RV.rect(0, 4, Math.max(0, y - 0.2), Math.min(8, y + 0.2)), AX, { m: 64 });
    RV.paint(ctx, cam, [{ faces: wall, color: PAL.muted, alpha: 0.14 }, { faces: water, color: rc, alpha: 0.18 }, { faces: layer, color: ic, alpha: 0.95 }]);
    /* the x-axis down the side, its origin at the top of the tank */
    const p0 = cam.P([5.2, 10, 0]), p1 = cam.P([5.2, -0.6, 0]);
    arrow(ctx, p0[0], p0[1], p1[0], p1[1], PAL.muted, 2.5); text(ctx, 'x', p1[0], p1[1] + 20, PAL.ink, { size: 22, weight: 600, align: 'center' });
    [[0, 'x = 0'], [2, '2'], [10, '10']].forEach(([t, s]) => { const p = cam.P([5.2, 10 - t, 0]); line(ctx, p[0] - 8, p[1], p[0] + 8, p[1], PAL.muted, 2); text(ctx, s, p[0] + 16, p[1], PAL.ink, { size: 18, align: 'left' }); });
    const q0 = cam.P([-4.6, 10, 0]), q1 = cam.P([-4.6, y, 0]);
    if (x > 0.3) vbracket(ctx, q0[0], q0[1], q1[1], PAL.ink, `xᵢ* = ${fmt(x, 1)}`, -1);
    name3(ctx, cam, [0, 10.6, 0], 'radius 4 m', PAL.ink, { size: 18 });
    const per = 156800 * Math.PI * x;
    headline(ctx, `A layer ${fmt(x, 2)} m below the top must be lifted ${fmt(x, 2)} m: about ${big(per)} J for each meter of thickness.`);
    ro.set(`\\kW_{i}\\approx 156{,}800\\pi x_i^{*}\\Delta x=${texBig(per)}\\,\\Delta x\\qquad \\kW=156{,}800\\pi\\int_{2}^{10}x\\,dx=${typed('integral', texBig(W))}\\ \\text{J}`);
  }
  still(d, draw);
})();

/* Figures 6.54 + 6.55, Example 6.26: the inverted cone of height 12 ft and top radius 4 ft, full; the layer at depth x has
   radius 4 − x/3 and is lifted x ft. Pumping stops with 4 ft left, so x runs over [0, 8]. The similar triangles beside it. */
(function () {
  const d = sim('sim-pump-cone', 560);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 8, step: 0.01, value: 3, unit: 'ft', dec: 2 });
  const ro = readout(d);
  const AX = { x: 0 }, W = 10649.6 * Math.PI;
  const wall = RV.lathe([[0, 0], [4, 12]], AX, { m: 64 }, false);
  const pumped = RV.solid(RV.between((y) => y / 3, () => 0, 4, 12, 20).map(([y, x]) => [x, y]), AX, { m: 64 });
  const left = RV.solid(RV.between((y) => y / 3, () => 0, 0, 4, 20).map(([y, x]) => [x, y]), AX, { m: 64 });
  const cam = lcam(450, 300, 28, [0, 6, 0], 0.3, 0.32);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), ic = C('integral'), x = xs.v, y = 12 - x, r = 4 - x / 3;
    const layer = RV.solid(RV.rect(0, r, y - 0.18, y + 0.18), AX, { m: 64 });
    RV.paint(ctx, cam, [{ faces: wall, color: PAL.muted, alpha: 0.14 }, { faces: pumped, color: rc, alpha: 0.14 }, { faces: left, color: rc, alpha: 0.45 }, { faces: layer, color: ic, alpha: 0.95 }]);
    const p0 = cam.P([0, 12.8, 0]); text(ctx, 'x = 0', p0[0], p0[1] - 8, PAL.ink, { size: 18, align: 'center' });
    seg3(ctx, cam, [0, 12, 0], [0, -0.4, 0], PAL.muted, 2.5);
    name3(ctx, cam, [0, 2, 0], '4 ft left', PAL.ink, { size: 18, dx: 70 });
    /* the similar triangles */
    const L = 820, T = 110, Hh = 400, sc = Hh / 12, X = (u) => L + u * sc, Yy = (v) => T + v * sc;
    ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.15; ctx.beginPath(); ctx.moveTo(X(0), Yy(0)); ctx.lineTo(X(4), Yy(0)); ctx.lineTo(X(0), Yy(12)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X(0), Yy(0), X(4), Yy(0), PAL.ink, 3); line(ctx, X(4), Yy(0), X(0), Yy(12), PAL.ink, 3); line(ctx, X(0), Yy(0), X(0), Yy(12), PAL.ink, 3);
    line(ctx, X(0), Yy(x), X(r), Yy(x), ic, 5);
    hbracket(ctx, X(0), X(4), Yy(0) - 18, PAL.ink, '4'); text(ctx, `rᵢ = ${fmt(r, 2)}`, X(r) + 12, Yy(x) - 2, ic, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    vbracket(ctx, X(0) - 20, Yy(0), Yy(x), PAL.ink, 'xᵢ*', -1); vbracket(ctx, X(0) - 20, Yy(x), Yy(12), PAL.ink, '12 − xᵢ*', -1);
    const per = 62.4 * Math.PI * x * r * r;
    headline(ctx, `The layer ${fmt(x, 2)} ft down has radius ${fmt(r, 2)} ft: about ${big(per)} ft-lb for each foot of thickness.`);
    ro.set(`\\kW_{i}\\approx 62.4\\pi x_i^{*}r_i^{2}\\,\\Delta x=${texBig(per)}\\,\\Delta x\\qquad \\kW=\\int_{0}^{8}62.4\\pi x\\left(4-\\frac{x}{3}\\right)^{2}dx\\approx ${typed('integral', texBig(W))}\\ \\text{ft-lb}`);
  }
  still(d, draw);
})();

/* a body of water seen from the side: its surface and its depth */
function water(ctx, l, r, t, b) { box(ctx, l, t, r - l, b - t, C('region'), 0.14); line(ctx, l, t, r, t, PAL.ink, 3); }
/* Figure 6.56, a faithful copy: a plate of area A lying flat at depth s. */
(function () {
  const d = sim('fig-horizontal-plate', 380);
  function draw() {
    const { ctx } = begin(d.c);
    water(ctx, 360, 1040, 70, 340);
    box(ctx, 560, 230, 280, 14, PAL.ink, 0.75); text(ctx, 'A', 700, 210, PAL.ink, { size: 24, weight: 600, align: 'center' });
    vbracket(ctx, 520, 70, 237, PAL.ink, 's', -1);
  }
  still(d, draw);
})();
/* Figure 6.57, a faithful copy: a disk-shaped plate standing in the water, x measured down; a strip at xᵢ*. */
(function () {
  const d = sim('fig-vertical-plate', 460);
  function draw() {
    const { ctx } = begin(d.c);
    water(ctx, 400, 1000, 50, 430);
    const cx = 700, cy = 250, R = 150, y0 = 280, y1 = 306;
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke(); ctx.restore();
    const half = (y) => Math.sqrt(Math.max(0, R * R - (y - cy) ** 2));
    box(ctx, cx - half((y0 + y1) / 2), y0, 2 * half((y0 + y1) / 2), y1 - y0, C('integral'), 0.65);
    arrow(ctx, 470, 60, 470, 440, PAL.muted, 2.5); text(ctx, 'x', 470, 452, PAL.ink, { size: 20, weight: 600, align: 'center' });
    [[cy - R, 'x = a'], [y0, 'x = xᵢ₋₁'], [y1, 'x = xᵢ'], [cy + R, 'x = b']].forEach(([y, s]) => { line(ctx, 462, y, 478, y, PAL.muted, 2); dash(ctx, 478, y, cx - half(y), y); text(ctx, s, 455, y, PAL.ink, { size: 18, align: 'right' }); });
    text(ctx, 'w(xᵢ*)', cx, y0 - 24, C('function'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
  }
  still(d, draw);
})();

/* Figure 6.58, Example 6.27: a trough 15 ft long whose ends are inverted isosceles triangles 8 ft across and 3 ft deep, full of
   water; at depth x a strip of the end is 8 − (8/3)x ft wide. The trough painted at the left, the end on axes at the right. */
(function () {
  const d = sim('sim-trough', 520);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 2.95, step: 0.01, value: 1.2, unit: 'ft', dec: 2 });
  const ro = readout(d);
  const w = (x) => 8 - (8 / 3) * x, Fh = 748.8;
  const cam = lcam(330, 290, 24, [0, -1.5, 0], 0.7, 0.3);
  const V = [[0, -4], [0, 4], [-3, 0]], P3 = (x, k) => [x, V[k][0], V[k][1]];
  const faces = [[0, 1, 2].map((k) => P3(-7.5, k)), [0, 1, 2].map((k) => P3(7.5, k)), [P3(-7.5, 0), P3(-7.5, 2), P3(7.5, 2), P3(7.5, 0)], [P3(-7.5, 1), P3(-7.5, 2), P3(7.5, 2), P3(7.5, 1)]];
  const edges = [[0, 1], [1, 2], [2, 0]].flatMap(([a, b]) => [[P3(-7.5, a), P3(-7.5, b)], [P3(7.5, a), P3(7.5, b)]]).concat([0, 1, 2].map((k) => [P3(-7.5, k), P3(7.5, k)]));
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), ic = C('integral'), fc = C('function'), x = xs.v;
    RV.paint(ctx, cam, [{ faces, color: rc, alpha: 0.35 }]);
    edges.forEach(([p, q]) => seg3(ctx, cam, p, q, PAL.ink, 2.5));
    name3(ctx, cam, [0, 0.7, -4], '15 ft', PAL.ink, { size: 18 }); name3(ctx, cam, [7.5, 0.7, 0], '8 ft', PAL.ink, { size: 18 });
    seg3(ctx, cam, [7.5, -x, -w(x) / 2], [7.5, -x, w(x) / 2], ic, 5);
    text(ctx, '(a)', 120, 110, PAL.ink, { size: 20 }); text(ctx, '(b)', 700, 110, PAL.ink, { size: 20 });
    /* the end, with x measured down from the top */
    const ax = axes(ctx, { l: 760, r: 1260, t: 110, b: 440 }, [-5, 5], [-3.5, 0.5], { xl: '', yl: '', nx: 0, ny: 0 });
    ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.2; ctx.beginPath(); ctx.moveTo(ax.X(-4), ax.Y(0)); ctx.lineTo(ax.X(4), ax.Y(0)); ctx.lineTo(ax.X(0), ax.Y(-3)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, ax.X(-4), ax.Y(0), ax.X(4), ax.Y(0), PAL.ink, 3); line(ctx, ax.X(4), ax.Y(0), ax.X(0), ax.Y(-3), PAL.ink, 3); line(ctx, ax.X(-4), ax.Y(0), ax.X(0), ax.Y(-3), PAL.ink, 3);
    box(ctx, ax.X(-w(x) / 2), ax.Y(-x) - 6, ax.X(w(x) / 2) - ax.X(-w(x) / 2), 12, ic, 0.7);
    hbracket(ctx, ax.X(-w(x) / 2), ax.X(w(x) / 2), ax.Y(-x) - 18, fc, `w(x) = ${fmt(w(x), 2)}`);
    vbracket(ctx, ax.X(4.6), ax.Y(0), ax.Y(-x), PAL.ink, `x = ${fmt(x, 2)}`, 1); vbracket(ctx, ax.X(-4.6), ax.Y(0), ax.Y(-3), PAL.ink, '3 ft', -1);
    headline(ctx, `At depth ${fmt(x, 2)} ft the strip is ${fmt(w(x), 2)} ft wide; the force on the whole end is 748.8 lb.`);
    ro.set(`\\rho\\,\\kw(x)\\ks(x)=${typed('function', n2(62.4 * w(x) * x, 1))}\\qquad \\kFh=\\int_{0}^{3}62.4\\left(8-\\frac{8}{3}x\\right)x\\,dx=${typed('integral', '748.8')}\\ \\text{lb}`);
  }
  still(d, draw);
})();

/* Figures 6.59 + 6.60 + 6.61, Example 6.28: the face of the dam as an isosceles trapezoid 1250 ft across the top, 750 ft across
   the bottom and 750 ft high, x measured down from the top; the water's surface 10 ft below the top when full, 135 ft in the
   drought, its bottom at x = 540. The width at x is 750 + 2r with r = 250 − x/3. */
(function () {
  const d = sim('sim-hoover-dam', 600);
  const lv = choice(d.controls, { label: '', options: [{ value: 'full', label: 'reservoir full' }, { value: 'drought', label: 'the drought' }], value: 'full', aria: 'how full the reservoir is' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 10, max: 540, step: 1, value: 300, unit: 'ft', dec: 0 });
  const ro = readout(d);
  const w = (x) => 1250 - (2 / 3) * x;
  const force = (top) => simpson((x) => 62.4 * w(x) * (x - top), top, 540, 600);
  const L = 160, T = 140, S = 0.47, X = (u) => L + 330 + u * S, Y = (v) => T + v * S;
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), ic = C('integral'), fc = C('function'), top = lv.value === 'full' ? 10 : 135, x = Math.max(top + 1, xs.v);
    const edge = (v) => w(v) / 2;
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.globalAlpha = 0.07; ctx.beginPath(); ctx.moveTo(X(-625), Y(0)); ctx.lineTo(X(625), Y(0)); ctx.lineTo(X(375), Y(750)); ctx.lineTo(X(-375), Y(750)); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.moveTo(X(-edge(top)), Y(top)); ctx.lineTo(X(edge(top)), Y(top)); ctx.lineTo(X(edge(540)), Y(540)); ctx.lineTo(X(-edge(540)), Y(540)); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(X(-625), Y(0)); ctx.lineTo(X(625), Y(0)); ctx.lineTo(X(375), Y(750)); ctx.lineTo(X(-375), Y(750)); ctx.closePath(); ctx.stroke(); ctx.restore();
    line(ctx, X(-edge(top)), Y(top), X(edge(top)), Y(top), rc, 3); line(ctx, X(-edge(540)), Y(540), X(edge(540)), Y(540), alpha(PAL.ink, 0.5), 2, [8, 8]);
    box(ctx, X(-edge(x)), Y(x) - 5, X(edge(x)) - X(-edge(x)), 10, ic, 0.75);
    hbracket(ctx, X(-625), X(625), Y(0) - 22, PAL.ink, '1250 ft'); hbracket(ctx, X(-375), X(375), Y(750) + 22, PAL.ink, '750 ft', { side: 'below' });
    vbracket(ctx, X(-660), Y(0), Y(750), PAL.ink, '750 ft', -1);
    vbracket(ctx, X(660), Y(top), Y(x), PAL.ink, `s(x) = ${fmt(x - top, 0)}`, 1);
    text(ctx, `w(x) = ${big(w(x))} ft`, X(0), Y(x) - 18, fc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the similar triangle at the right end: r = 250 − x/3 */
    line(ctx, X(375), Y(0), X(375), Y(750), alpha(PAL.ink, 0.5), 2, [6, 6]);
    line(ctx, X(375), Y(x), X(edge(x)), Y(x), PAL.ink, 3); text(ctx, `r = ${fmt(250 - x / 3, 0)}`, X(edge(x)) + 12, Y(x) + 18, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
    const Fv = force(top);
    headline(ctx, `${top === 10 ? 'Full' : 'The drought'}: the surface is ${top} ft below the top; the force is about ${fmt(Fv / 1e9, 2)} billion lb.`);
    ro.set(`\\kFh=\\int_{${top}}^{540}62.4\\left(1250-\\frac{2}{3}x\\right)(x-${top})\\,dx\\approx ${typed('integral', texBig(Math.round(Fv / 1e3) * 1e3))}\\ \\text{lb}`, undefined, { form: top });
  }
  still(d, draw);
})();
};
