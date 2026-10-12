/* Figures for section 6.6 Moments and Centers of Mass. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.6'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, dot, line, arrow, text, headline, register, readout, fmt, hbracket, drag } = F;
const RV = F.revolve;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2, c = alpha(PAL.ink, 0.4)) => line(ctx, x1, y1, x2, y2, c, 2.5, [10, 10]);
const simpson = (h, a, b, n = 400) => { const w = (b - a) / n; let s = h(a) + h(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * h(a + i * w); return (s * w) / 3; };
const TAU = 2 * Math.PI;
/* the centroid of the region between f above and g below on [a, b] */
function centroid(f, g, a, b) {
  const m = simpson((x) => f(x) - g(x), a, b), My = simpson((x) => x * (f(x) - g(x)), a, b), Mx = simpson((x) => (f(x) ** 2 - g(x) ** 2) / 2, a, b);
  return { m, Mx, My, x: My / m, y: Mx / m };
}
/* a centre of mass: a filled dot with a ring, in the point colour */
function balance(ctx, x, y, s, o = {}) {
  const pc = C('point');
  dot(ctx, x, y, pc, true, o.r ?? 9);
  ctx.save(); ctx.strokeStyle = pc; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, (o.r ?? 9) + 7, 0, TAU); ctx.stroke(); ctx.restore();
  if (s) text(ctx, s, x + (o.dx ?? 22), y + (o.dy ?? -20), pc, { size: 20, weight: 600, align: o.align ?? 'left', bg: PAL.panel });
}

/* Figures 6.62 + 6.63: two masses fixed on a light rod, m₁ = 2 at x₁ = −3 and m₂ at x₂ = 2; the fulcrum slides. The rod tips
   toward the side whose moment about the fulcrum is larger, and lies level only with the fulcrum at x̄ = (m₁x₁ + m₂x₂)/(m₁ + m₂). */
(function () {
  const d = sim('sim-seesaw', 470);
  const m1 = 2, x1 = -3, x2 = 2;
  const fs = ctl(d.controls, { label: 'fulcrum', cls: '', key: 'fulcrum', min: -4, max: 4, step: 0.01, value: 1.2, unit: '', dec: 2 });
  const ms = ctl(d.controls, { label: '\\km_{2}', cls: '', key: 'm2', min: 1, max: 6, step: 0.5, value: 2, unit: '', dec: 1 });
  const ro = readout(d);
  const CX = 700, S = 120, Y = 230;
  function draw() {
    const { ctx } = begin(d.c);
    const m2 = ms.v, f = fs.v, m = m1 + m2, M = m1 * x1 + m2 * x2, xb = M / m;
    const tq = m1 * (x1 - f) + m2 * (x2 - f), level = Math.abs(f - xb) < 0.04;
    const ang = level ? 0 : 0.2 * Math.tanh(tq / 4);
    const fx = CX + f * S;
    /* the number line, which stays put */
    const NY = 400;
    arrow(ctx, CX - 5.6 * S, NY, CX + 5.6 * S, NY, PAL.muted, 2.5); text(ctx, 'x', CX + 5.6 * S + 14, NY, PAL.ink, { size: 22, weight: 600 });
    for (let k = -5; k <= 5; k++) { line(ctx, CX + k * S, NY - 7, CX + k * S, NY + 7, PAL.muted, 2); text(ctx, String(k).replace('-', '−'), CX + k * S, NY + 24, PAL.ink, { size: 18, align: 'center' }); }
    const pc = C('point');
    dot(ctx, CX + xb * S, NY, pc, true, 8); text(ctx, `x̄ = ${fmt(xb, 2)}`, CX + xb * S, NY - 26, pc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the rod about the fulcrum */
    ctx.save(); ctx.translate(fx, Y); ctx.rotate(ang);
    const rl = CX - 5 * S - fx, rr = CX + 5 * S - fx;
    ctx.fillStyle = PAL.ink; ctx.fillRect(rl, -4, rr - rl, 8);
    [[x1, m1, 'm₁'], [x2, m2, 'm₂']].forEach(([x, mm, s]) => {
      const u = CX + x * S - fx, w = 30 + 12 * Math.sqrt(mm);
      ctx.fillStyle = alpha(C('integral'), 0.25); ctx.strokeStyle = C('integral'); ctx.lineWidth = 3;
      ctx.fillRect(u - w / 2, -4 - w, w, w); ctx.strokeRect(u - w / 2, -4 - w, w, w);
      text(ctx, `${s} = ${fmt(mm, 1)}`, u, -4 - w - 22, C('integral'), { size: 20, weight: 600, align: 'center' });
    });
    ctx.restore();
    /* the fulcrum */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(fx, Y + 4); ctx.lineTo(fx - 30, Y + 56); ctx.lineTo(fx + 30, Y + 56); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    dash(ctx, fx, Y + 60, fx, NY - 10);
    headline(ctx, level ? `Balanced: the fulcrum is at the center of mass, x̄ = ${fmt(xb, 2)}.` : `The fulcrum is at ${fmt(f, 2)}; the rod tips ${tq > 0 ? 'right' : 'left'}, toward the larger moment about it.`);
    ro.set(`\\kM=\\km_{1}x_{1}+\\km_{2}x_{2}=${typed('integral', n2(M, 2))}\\qquad \\kxbar=\\frac{\\kM}{\\km}=\\frac{${n2(M, 2)}}{${n2(m, 1)}}=${typed('point', n2(xb))}`);
  }
  still(d, draw);
})();

/* Figure 6.64, a faithful copy: a point mass at (x₁, y₁) and its distances to the axes. */
(function () {
  const d = sim('fig-point-mass-plane', 400);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 440, r: 960, t: 40, b: 360 }, [-1, 5], [-1, 4], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    const px = ax.X(3.4), py = ax.Y(2.6), lc = alpha(PAL.ink, 0.55);
    dash(ctx, ax.X(0), py, px, py, lc); dash(ctx, px, ax.Y(0), px, py, lc);
    text(ctx, 'x₁', px, ax.Y(0) + 24, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'y₁', ax.X(0) - 14, py, PAL.ink, { size: 20, align: 'right' });
    dot(ctx, px, py, C('integral'), true, 9); text(ctx, 'm₁', px + 18, py - 4, C('integral'), { size: 22, weight: 600, align: 'left' });
  }
  still(d, draw);
})();

/* Figures 6.65 + 6.66: a lamina under the stand-in f(x) = 1.5 + 0.8 sin 0.9x + 0.15x on [1, 5] (the book's curve has no formula),
   cut into n rectangles; each acts as a point mass at its centre (xᵢ*, f(xᵢ*)/2), and their centre of mass closes on the centroid. */
(function () {
  const d = sim('sim-lamina', 520);
  const f = (x) => 1.5 + 0.8 * Math.sin(0.9 * x) + 0.15 * x, a = 1, b = 5, G = centroid(f, () => 0, a, b);
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 30, step: 1, value: 5, unit: '', dec: 0 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: a, max: b - 0.001, step: 0.01, value: 2.7, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: 0 });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), fc = C('function'), ic = C('integral'), n = ns.v, w = (b - a) / n, i = Math.min(n - 1, Math.floor((xs.v - a) / w));
    const ax = axes(ctx, { l: 300, r: 1140, t: 70, b: 450 }, [0, 5.6], [0, 3], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    shade(ctx, ax, f, 0, a, b, rc, { alpha: 0.12 });
    let m = 0, My = 0, Mx = 0;
    for (let k = 0; k < n; k++) {
      const x0 = a + k * w, xm = x0 + w / 2, h = f(xm), on = k === i;
      m += h * w; My += xm * h * w; Mx += (h * h / 2) * w;
      ctx.save(); ctx.globalAlpha = on ? 0.5 : 0.22; ctx.fillStyle = rc; ctx.fillRect(ax.X(x0), ax.Y(h), ax.X(x0 + w) - ax.X(x0), ax.Y(0) - ax.Y(h)); ctx.restore();
      ctx.save(); ctx.strokeStyle = on ? PAL.ink : alpha(PAL.ink, 0.45); ctx.lineWidth = on ? 3 : 1.5; ctx.strokeRect(ax.X(x0), ax.Y(h), ax.X(x0 + w) - ax.X(x0), ax.Y(0) - ax.Y(h)); ctx.restore();
      if (n <= 16 || on) dot(ctx, ax.X(xm), ax.Y(h / 2), ic, true, on ? 7 : 4.5);
    }
    plot(ctx, ax, f, fc, { x: [0.3, 5.4] });
    text(ctx, 'y = f(x)', ax.X(5.4), ax.Y(f(5.4)) - 22, fc, { size: 20, weight: 600, align: 'right' });
    [[a, 'a'], [b, 'b']].forEach(([x, s]) => text(ctx, s, ax.X(x), ax.Y(0) + 24, PAL.ink, { size: 20, align: 'center' }));
    const xm = a + (i + 0.5) * w;
    text(ctx, '(xᵢ*, f(xᵢ*)/2)', ax.X(xm) + 14, ax.Y(f(xm) / 2) + 26, ic, { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    const xn = My / m, yn = Mx / m;
    balance(ctx, ax.X(xn), ax.Y(yn), '', { r: 7 });
    text(ctx, n === 1 ? 'the rectangle' : `the ${n} rectangles`, ax.X(xn) - 22, ax.Y(yn) - 24, C('point'), { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    line(ctx, ax.X(G.x) - 12, ax.Y(G.y), ax.X(G.x) + 12, ax.Y(G.y), PAL.ink, 2.5); line(ctx, ax.X(G.x), ax.Y(G.y) - 12, ax.X(G.x), ax.Y(G.y) + 12, PAL.ink, 2.5);
    P.draw(ctx, ax, PAL.ink);
    headline(ctx, `${n} ${n === 1 ? 'rectangle' : 'rectangles'}: their center of mass is (${fmt(xn, 3)}, ${fmt(yn, 3)}); the centroid (+) is (${fmt(G.x, 3)}, ${fmt(G.y, 3)}).`);
    ro.set(`\\kxbar\\approx\\frac{\\sum x_i^{*}\\kf(x_i^{*})\\Delta x}{\\sum \\kf(x_i^{*})\\Delta x}=${typed('point', n2(xn))}\\qquad \\kybar\\approx\\frac{\\sum \\frac{1}{2}[\\kf(x_i^{*})]^{2}\\Delta x}{\\sum \\kf(x_i^{*})\\Delta x}=${typed('point', n2(yn))}`);
  }
  still(d, draw);
})();

/* Figure 6.67 (Example 6.31), a faithful copy: the region under √x on [0, 4] and its centroid (12/5, 3/4). */
(function () {
  const d = sim('fig-sqrt-lamina', 400);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 380, r: 1020, t: 50, b: 350 }, [-0.5, 4.8], [-0.4, 2.6], { xl: 'x', yl: 'y', nx: 5, ny: 2 });
    shade(ctx, ax, Math.sqrt, 0, 0, 4, C('region'), { alpha: 0.3 });
    plot(ctx, ax, Math.sqrt, C('function'), { x: [0, 4.6] });
    text(ctx, '$\\kf(x)=\\sqrt{x}$', ax.X(4.6), ax.Y(Math.sqrt(4.6)) - 24, C('function'), { size: 22, weight: 600, align: 'right', tex: true });
    dash(ctx, ax.X(4), ax.Y(0), ax.X(4), ax.Y(2));
    balance(ctx, ax.X(12 / 5), ax.Y(3 / 4), '(12/5, 3/4)', { r: 7 });
  }
  still(d, draw);
})();

/* Figures 6.68 + 6.69: the region between the stand-ins f(x) = 2.55 + 0.85 cos 1.35x and g(x) = 0.55 + 0.75 sin(0.62x + 0.1)
   on [0, 4.6] (the book's curves have no formula); a representative rectangle of width 0.3 at the dragged xᵢ*, its centre
   halfway between the curves, and its distances to the axes. */
(function () {
  const d = sim('sim-lamina-between', 520);
  const f = (x) => 2.55 + 0.85 * Math.cos(1.35 * x), g = (x) => 0.55 + 0.75 * Math.sin(0.62 * x + 0.1), a = 0, b = 4.6, w = 0.3;
  const xs = ctl(d.controls, { label: 'x_i^{*}', cls: '', key: 'x', min: a + w / 2, max: b - w / 2, step: 0.01, value: 2.3, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: 0 });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const rc = C('region'), fc = C('function'), ic = C('integral'), x = xs.v, hi = f(x), lo = g(x), cy = (hi + lo) / 2;
    const ax = axes(ctx, { l: 320, r: 1100, t: 100, b: 450 }, [0, 5.2], [0, 3.8], { xl: 'x', yl: 'y', nx: 0, ny: 0 });
    shade(ctx, ax, f, g, a, b, rc, { alpha: 0.15 });
    ctx.save(); ctx.globalAlpha = 0.5; ctx.fillStyle = rc; ctx.fillRect(ax.X(x - w / 2), ax.Y(hi), ax.X(x + w / 2) - ax.X(x - w / 2), ax.Y(lo) - ax.Y(hi)); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(ax.X(x - w / 2), ax.Y(hi), ax.X(x + w / 2) - ax.X(x - w / 2), ax.Y(lo) - ax.Y(hi)); ctx.restore();
    plot(ctx, ax, f, fc, { x: [a, b] }); plot(ctx, ax, g, fc, { x: [a, b] });
    text(ctx, 'f(x)', ax.X(b) + 10, ax.Y(f(b)), fc, { size: 20, weight: 600, align: 'left' }); text(ctx, 'g(x)', ax.X(b) + 10, ax.Y(g(b)), fc, { size: 20, weight: 600, align: 'left' });
    dash(ctx, ax.X(0), ax.Y(cy), ax.X(x), ax.Y(cy)); dash(ctx, ax.X(x), ax.Y(0), ax.X(x), ax.Y(lo));
    dot(ctx, ax.X(x), ax.Y(cy), ic, true, 8);
    text(ctx, `(f + g)/2 = ${fmt(cy, 2)}`, ax.X(0) - 12, ax.Y(cy), ic, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    P.draw(ctx, ax, PAL.ink);
    const dm = (hi - lo) * w;
    headline(ctx, `The rectangle at xᵢ* = ${fmt(x, 2)} has its center ${fmt(cy, 2)} above the x-axis, halfway between g and f.`);
    ro.set(`\\krho[\\kf(x_i^{*})-\\kg(x_i^{*})]\\Delta x=${typed('integral', n2(dm))}\\krho\\qquad \\text{moments: }${typed('integral', n2(dm * cy))}\\krho\\ \\text{about } x,\\quad ${typed('integral', n2(dm * x))}\\krho\\ \\text{about } y`);
  }
  still(d, draw);
})();

/* Figure 6.70 (Example 6.32), a faithful copy: the region between f(x) = 1 − x² and g(x) = x − 1 and its centroid (−1/2, −3/5). */
(function () {
  const d = sim('fig-centroid-two', 460);
  const f = (x) => 1 - x * x, g = (x) => x - 1;
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 420, r: 980, t: 40, b: 420 }, [-3, 2], [-4, 2], { xl: 'x', yl: 'y', nx: 5, ny: 6 });
    shade(ctx, ax, f, g, -2, 1, C('region'), { alpha: 0.3 });
    const cf = F.ref('ex32-f'), cg = F.ref('ex32-g');
    plot(ctx, ax, f, cf, { x: [-2.4, 1.6] }); plot(ctx, ax, g, cg, { x: [-2.6, 1.8] });
    text(ctx, '$\\kf(x)=1-x^{2}$', ax.X(1.2), ax.Y(f(1.2)) + 30, cf, { size: 20, weight: 600, align: 'left', tex: true });
    text(ctx, '$\\kg(x)=x-1$', ax.X(1.75), ax.Y(g(1.75)) - 24, cg, { size: 20, weight: 600, align: 'right', tex: true });
    balance(ctx, ax.X(-0.5), ax.Y(-0.6), '(−1/2, −3/5)', { r: 7, dx: -22, align: 'right' });
  }
  still(d, draw);
})();

/* Figure 6.71 (Example 6.33), a faithful copy: the region under 4 − x², symmetric about the y-axis, and its centroid (0, 8/5). */
(function () {
  const d = sim('fig-symmetric-centroid', 420);
  const f = (x) => 4 - x * x;
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 440, r: 960, t: 40, b: 380 }, [-3, 3], [-0.6, 4.6], { xl: 'x', yl: 'y', nx: 6, ny: 4 });
    shade(ctx, ax, f, 0, -2, 2, C('region'), { alpha: 0.3 });
    plot(ctx, ax, f, C('function'), { x: [-2.3, 2.3] });
    text(ctx, '$\\kf(x)=4-x^{2}$', ax.X(1.5), ax.Y(f(1.5)) - 8, C('function'), { size: 20, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    balance(ctx, ax.X(0), ax.Y(1.6), '(0, 8/5)', { r: 7 });
  }
  still(d, draw);
})();

/* Figure 6.73, a faithful copy: the Skywalk as three sub-regions: R₁ a semicircular annulus of radii 25 and 35 ft about the
   origin, R₂ the legs (10 ft wide) down 35 ft to the canyon wall, R₃ the legs' 48 ft under the visitor center. */
(function () {
  const d = sim('fig-skywalk-model', 600);
  function draw() {
    const { ctx } = begin(d.c);
    const S = 3.8, X = (u) => 620 + u * S, Y = (v) => 190 - v * S, rc = C('region');
    const lab = (s, x, y, o = {}) => text(ctx, s, x, y, PAL.ink, { size: o.size ?? 20, align: o.align ?? 'center', weight: o.w ?? 400, bg: o.bg });
    ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.55; ctx.beginPath(); ctx.arc(X(0), Y(0), 35 * S, Math.PI, TAU); ctx.arc(X(0), Y(0), 25 * S, TAU, Math.PI, true); ctx.closePath(); ctx.fill(); ctx.restore();
    [[-35, -25], [25, 35]].forEach(([l, r]) => {
      ctx.save(); ctx.fillStyle = rc; ctx.globalAlpha = 0.3; ctx.fillRect(X(l), Y(0), (r - l) * S, 35 * S); ctx.globalAlpha = 0.42; ctx.fillRect(X(l), Y(-35), (r - l) * S, 48 * S); ctx.restore();
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(X(l), Y(0), (r - l) * S, 83 * S); ctx.restore();
    });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(X(0), Y(0), 35 * S, Math.PI, TAU); ctx.moveTo(X(25), Y(0)); ctx.arc(X(0), Y(0), 25 * S, TAU, Math.PI, true); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5; ctx.strokeRect(X(-45), Y(-35), 90 * S, 48 * S); ctx.restore();
    arrow(ctx, X(-60), Y(0), X(60), Y(0), PAL.muted, 2.5); lab('x', X(60) + 14, Y(0), { w: 600 });
    arrow(ctx, X(0), Y(-88), X(0), Y(42), PAL.muted, 2.5); lab('y', X(0), Y(42) - 14, { w: 600 });
    dash(ctx, X(-60), Y(-35), X(84), Y(-35)); lab('Canyon Wall', X(86), Y(-35), { align: 'left', size: 18 });
    lab('R₁', X(-30), Y(36), { w: 600 }); lab('R₂', X(-42), Y(-17), { w: 600 }); lab('R₂', X(42), Y(-17), { w: 600 }); lab('R₃', X(-30), Y(-90), { w: 600 }); lab('R₃', X(30), Y(-90), { w: 600 });
    lab('Visitor Center', X(0) + 10, Y(-60), { size: 18, align: 'left' });
    dash(ctx, X(0), Y(35), X(68), Y(35)); dash(ctx, X(0), Y(25), X(48), Y(25));
    F.vbracket(ctx, X(68), Y(0), Y(35), PAL.ink, '35 ft', 1); F.vbracket(ctx, X(46), Y(0), Y(25), PAL.ink, '25 ft', -1, { size: 18 });
    F.vbracket(ctx, X(68), Y(0), Y(-35), PAL.ink, '35 ft', 1); F.vbracket(ctx, X(68), Y(-35), Y(-83), PAL.ink, '48 ft', 1);
    hbracket(ctx, X(-35), X(-25), Y(-28), PAL.ink, '10 ft', { size: 18 });
  }
  still(d, draw);
})();

/* Figure 6.74 (Example 6.34): the disk R of radius 2 centred at (4, 0) turned about the y-axis into a torus; its centroid, the
   centre, travels a circle of radius 4, and the volume swept is the area 4π times the distance travelled. A story slider θ. */
function scene3(d, o) {
  const v = F.view3d(d.stage, { h: o.h ?? 560, dist: o.dist ?? 9, tilt: o.tilt ?? 0.32, pitch: o.pitch ?? [-1.35, 1.35] });
  const turn = v.part(0), g = new THREE.Group(); turn.add(g);
  g.scale.setScalar(o.s); g.position.set(-o.at[0] * o.s, -o.at[1] * o.s, -o.at[2] * o.s);
  const reset = () => { v.clear(); g.clear(); turn.add(g); };
  return { v, g, reset };
}
const hasGL = () => typeof THREE !== 'undefined';
(function () {
  const d = sim('sim-pappus');
  const R0 = 4, r0 = 2, A = Math.PI * r0 * r0;
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 360, step: 1, value: 0, unit: '°', dec: 0 });
  F.story(d, th, { stops: [{ v: 0, label: 'the region' }, { v: 180, label: 'half a turn' }, { v: 360, label: 'the torus' }] });
  const ro = readout(d);
  const top = (x) => Math.sqrt(Math.max(0, r0 * r0 - (x - R0) ** 2));
  const outline = RV.between(top, (x) => -top(x), R0 - r0, R0 + r0, 72);
  const S = hasGL() ? scene3(d, { s: 0.42, at: [0, 0, 0], dist: 9, tilt: 0 }) : null;
  function draw() {
    const t = th.v, phi = (t * Math.PI) / 180;
    if (S) {
      const { v, g } = S; S.reset();
      const sc = 0.42;
      F.mesh.arrow(g, [-7.5, 0, 0], [7.5, 0, 0], 0.02 / sc, PAL.muted); v.label('x', [7.8, 0, 0], g);
      F.mesh.arrow(g, [0, -3.6, 0], [0, 3.8, 0], 0.02 / sc, PAL.muted); v.label('y', [0, 4.1, 0], g);
      RV.mesh(g, outline, { x: 0 }, C('region'), { sweep: { from: 0, to: Math.max(phi, 1e-4), m: 96 }, alpha: phi > 0.01 ? 0.55 : 1 });
      F.mesh.polyline(g, Array.from({ length: 73 }, (_, i) => { const a = (TAU * i) / 72; return [R0 + r0 * Math.cos(a), r0 * Math.sin(a), 0]; }), C('region'));
      const pc = C('point');
      const path = Array.from({ length: 97 }, (_, i) => RV.turn([R0, 0], { x: 0 }, (phi * i) / 96));
      if (phi > 0.01) F.mesh.polyline(g, path, pc);
      F.mesh.sphere(g, RV.turn([R0, 0], { x: 0 }, phi), 0.14, pc);
      const k = Math.min(1, t / 120);
      if (!v.turned) v.look({ yaw: -0.5 * k, pitch: 0.5 * k });
      v.headline(t >= 360 ? 'A full turn: the centroid has gone 8π, and the region has swept out the torus.' : t === 0 ? 'The disk R, of area 4π, with its centroid at its center (4, 0).' : `The centroid has gone ${fmt((8 * Math.PI * t) / 360, 2)} of its 8π around the y-axis.`);
    }
    const dist = (8 * Math.PI * t) / 360;
    ro.set(`d=${typed('point', n2(dist, 2))}\\qquad \\kV=\\kA\\cdot d=4\\pi\\cdot ${n2(dist, 2)}=${typed('integral', n2(A * dist, 2))}`);
  }
  still(d, draw);
})();
};
