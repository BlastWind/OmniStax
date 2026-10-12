/* Figures for section 4.7 Applied Optimization Problems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.7'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, hbracket, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);

/* The graph beside every scene: the quantity Q as a function of the variable, the point at the slider's value
   and the optimum dotted in `point`. */
function qGraph(ctx, box, f, xr, yr, x, best, o) {
  const fc = C('function'), pc = C('point');
  const ax = axes(ctx, box, xr, yr, { xl: o.xl, yl: o.yl, yc: fc, nx: o.nx, ny: o.ny, fx: o.fx, fy: o.fy });
  plot(ctx, ax, [{ f, x: o.dom || xr, ends: o.ends || '' }], fc);
  dot(ctx, ax.X(best), ax.Y(f(best)), pc, true, 9);
  drop(ctx, ax.X(x), ax.Y(f(x)), ax.X(x), ax.Y(yr[0]));
  dot(ctx, ax.X(x), ax.Y(f(x)), fc, true, 8);
  if (o.label) text(ctx, o.label[0], ax.X(o.label[1]), ax.Y(o.label[2]), fc, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
  return ax;
}
/* an open-top box L × W × H (logical units) in a locked perspective, standing at the origin of the view */
function box(ctx, V, L, W, H) {
  const P = (x, y, z) => V.P([x, y, z]);
  const quad = (a, b, c, e, nrm) => F.face(ctx, [P(...a), P(...b), P(...c), P(...e)], V.shade(nrm), 2.5);
  quad([0, 0, 0], [L, 0, 0], [L, 0, W], [0, 0, W], [0, 1, 0]);
  quad([0, 0, 0], [0, H, 0], [0, H, W], [0, 0, W], [1, 0, 0]);
  quad([0, 0, 0], [L, 0, 0], [L, H, 0], [0, H, 0], [0, 0, 1]);
  quad([L, 0, 0], [L, H, 0], [L, H, W], [L, 0, W], [1, 0, 0]);
  quad([0, 0, W], [L, 0, W], [L, H, W], [0, H, W], [0, 0, 1]);
}

/* Figures 4.62 + 4.63: the garden against the rock wall, x the two sides perpendicular to it and y = 100 − 2x,
   beside A(x) = 100x − 2x². Scene 4 px per ft; graph x 0 to 50, A 0 to 1400. */
(function () {
  const d = sim('sim-garden', 470);
  const A = (x) => 100 * x - 2 * x * x;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 50, step: 0.5, value: 10, unit: 'ft', dec: 1, specials: [{ at: 25 }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const x = xs.v, y = 100 - 2 * x, K = 4.4, X0 = 330 - (y * K) / 2, Y0 = 110;
    headline(ctx, x === 25 ? 'x = 25 ft and y = 50 ft give the largest area, 1250 ft².' : `x = ${fmt(x, 1)} ft and y = ${fmt(y, 1)} ft: the area is ${fmt(A(x), 1)} ft².`);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.fillRect(40, Y0 - 26, 580, 22); ctx.restore();
    text(ctx, 'rock wall', 330, Y0 - 40, PAL.muted, { size: 18, align: 'center' });
    ctx.save(); ctx.fillStyle = alpha(C('function'), 0.12); ctx.fillRect(X0, Y0, y * K, x * K); ctx.restore();
    line(ctx, X0, Y0, X0, Y0 + x * K, PAL.ink, 4); line(ctx, X0, Y0 + x * K, X0 + y * K, Y0 + x * K, PAL.ink, 4); line(ctx, X0 + y * K, Y0 + x * K, X0 + y * K, Y0, PAL.ink, 4);
    if (x > 2) vbracket(ctx, X0 - 18, Y0, Y0 + x * K, PAL.ink, 'x', -1);
    if (y > 4) hbracket(ctx, X0, X0 + y * K, Y0 + x * K + 18, PAL.ink, 'y', { side: 'below' });
    const ax = qGraph(ctx, { l: 760, r: 1320, t: 100, b: 410 }, A, [0, 50], [0, 1400], x, 25, { xl: 'x, feet', yl: 'A(x), square feet', nx: 5, ny: 7, label: ['$\\kA(x)$', 42, 1080] });
    hits = [{ x: ax.X(25), y: ax.Y(1250), r: 16, name: 'the maximum area 1250 ft² at x = 25 ft' }];
    ro.set(`2x+y=100 \\qquad \\kA(x)=x(100-2x)=${n(x, 1)}(${n(y, 1)})=${n(A(x), 1)}`);
  });
})();

/* Figures 4.64 + 4.65: a square of side x cut from each corner of the 24 in. by 36 in. sheet; beside the flat sheet,
   the folded box in a locked perspective, and V(x) = 4x³ − 120x² + 864x over [0, 12]. */
(function () {
  const d = sim('sim-box', 520);
  const V = (x) => (36 - 2 * x) * (24 - 2 * x) * x, BEST = 10 - 2 * Math.sqrt(7);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.2, max: 11.8, step: 0.05, value: 3, unit: 'in.', dec: 2, specials: [{ at: BEST }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const x = xs.v, K = 6, SX = 90, SY = 120;
    headline(ctx, Math.abs(x - BEST) < 1e-6 ? `x = 10 − 2√7 ≈ 4.71 in. gives the largest volume, about 1825 in³.` : `x = ${fmt(x, 2)} in.: the box is ${fmt(36 - 2 * x, 1)} by ${fmt(24 - 2 * x, 1)} by ${fmt(x, 2)} in., ${fmt(V(x), 0)} in³.`);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(SX + x * K, SY, (36 - 2 * x) * K, 24 * K); ctx.fillRect(SX, SY + x * K, 36 * K, (24 - 2 * x) * K); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath();
    const pts = [[x, 0], [36 - x, 0], [36 - x, x], [36, x], [36, 24 - x], [36 - x, 24 - x], [36 - x, 24], [x, 24], [x, 24 - x], [0, 24 - x], [0, x], [x, x]];
    pts.forEach(([a, b], i) => (i ? ctx.lineTo(SX + a * K, SY + b * K) : ctx.moveTo(SX + a * K, SY + b * K))); ctx.closePath(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.setLineDash([8, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.strokeRect(SX + x * K, SY + x * K, (36 - 2 * x) * K, (24 - 2 * x) * K); ctx.restore();
    text(ctx, '36 in.', SX + 18 * K, SY - 18, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '24 in.', SX - 4, SY + 12 * K, PAL.muted, { size: 18, align: 'right' });
    text(ctx, 'x', SX + (x / 2) * K, SY + x * K + 20, PAL.ink, { size: 20, weight: 600, align: 'center' });
    const S = 6.5, view2 = F.view({ yaw: 0.65, pitch: 0.5, dist: 2200, cx: 500, cy: 400 });
    box(ctx, view2, (36 - 2 * x) * S, (24 - 2 * x) * S, x * S);
    const ax = qGraph(ctx, { l: 820, r: 1320, t: 100, b: 440 }, V, [0, 12], [0, 2000], x, BEST, { xl: 'x, inches', yl: 'V(x), cubic inches', nx: 6, ny: 4, dom: [0, 12], label: ['$\\kV(x)$', 9.5, 1500] });
    hits = [{ x: ax.X(BEST), y: ax.Y(V(BEST)), r: 16, name: 'the maximum volume 640 + 448√7 ≈ 1825 in³ at x = 10 − 2√7' }];
    ro.set(`\\kV(x)=(36-2x)(24-2x)x=(${n(36 - 2 * x)})(${n(24 - 2 * x)})(${n(x)})=${n(V(x), 1)}`);
  });
})();

/* Figure 4.66: the cabin 6 mi west of the point nearest the island, the island 2 mi north; the visitor runs x mi
   along the shore at 8 mph and swims y = √((6 − x)² + 4) mi at 3 mph. Beside, T(x) over [0, 6]. */
(function () {
  const d = sim('sim-travel-time', 470);
  const T = (x) => x / 8 + Math.sqrt((6 - x) ** 2 + 4) / 3, BEST = 6 - 6 / Math.sqrt(55);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 6, step: 0.01, value: 3, unit: 'mi', dec: 2, specials: [{ at: BEST }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const x = xs.v, y = Math.sqrt((6 - x) ** 2 + 4), K = 85, CX = 60, SY = 380, IX = CX + 6 * K, IY = SY - 2 * K;
    headline(ctx, Math.abs(x - BEST) < 1e-6 ? 'Running x ≈ 5.19 mi before swimming gives the shortest time, about 1.368 h.' : `Run ${fmt(x, 2)} mi, swim ${fmt(y, 2)} mi: the trip takes ${fmt(T(x), 3)} h.`);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(20, 80, 620, SY - 80); ctx.restore();
    line(ctx, 20, SY, 640, SY, PAL.ink, 3);
    text(ctx, 'shore', 600, SY + 24, PAL.muted, { size: 18, align: 'center' });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.35); ctx.beginPath(); ctx.ellipse(IX, IY, 34, 16, 0, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    text(ctx, 'island', IX, IY - 32, PAL.muted, { size: 18, align: 'center' });
    F.house(ctx, CX - 18, SY, 36, 1, PAL.ink);
    line(ctx, CX, SY, CX + x * K, SY, C('function'), 5);
    line(ctx, CX + x * K, SY, IX, IY, C('function'), 4, [12, 8]);
    line(ctx, IX, SY, IX, IY, alpha(PAL.ink, 0.4), 2, [4, 8]);
    if (x > 0.3) hbracket(ctx, CX, CX + x * K, SY + 16, PAL.ink, 'x', { side: 'below' });
    text(ctx, 'y', (CX + x * K + IX) / 2 - 16, (SY + IY) / 2 - 10, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '2 mi', IX + 12, (SY + IY) / 2, PAL.muted, { size: 18, align: 'left' });
    text(ctx, '6 mi', (CX + IX) / 2, SY + 58, PAL.muted, { size: 18, align: 'center' });
    const ax = qGraph(ctx, { l: 780, r: 1320, t: 100, b: 410 }, T, [0, 6], [1, 2.4], x, BEST, { xl: 'x, miles', yl: 'T(x), hours', nx: 6, ny: 7, fy: (v) => fmt(v, 1), label: ['$\\kT(x)$', 1.2, 2.25] });
    hits = [{ x: ax.X(BEST), y: ax.Y(T(BEST)), r: 16, name: 'the least time ≈ 1.368 h at x = 6 − 6/√55 ≈ 5.19 mi' }, { x: CX, y: SY - 20, r: 24, name: 'the cabin' }];
    ro.set(`\\kT(x)=\\frac{x}{8}+\\frac{\\sqrt{(6-x)^2+4}}{3}=\\frac{${n(x)}}{8}+\\frac{${n(y, 3)}}{3}=${n(T(x), 3)}`);
  });
})();

/* Figure 4.67 made live: the revenue R = n × p is the area of the rectangle under the line n(p) = 1000 − 5p,
   drawn beside R(p) = −5p² + 1000p over [50, 200]. */
(function () {
  const d = sim('sim-revenue', 470);
  const N = (p) => 1000 - 5 * p, R = (p) => N(p) * p;
  const ps = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 50, max: 200, step: 1, value: 150, unit: 'dollars', dec: 0, specials: [{ at: 100 }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const p = ps.v, fc = C('function');
    headline(ctx, p === 100 ? 'At p = 100 dollars a day, 500 cars rent and the revenue is the largest, 50,000 dollars a day.' : `At p = ${fmt(p, 0)} dollars a day, ${fmt(N(p), 0)} cars rent: the revenue is ${fmt(R(p), 0)} dollars a day.`);
    const ax = axes(ctx, { l: 110, r: 620, t: 100, b: 410 }, [0, 200], [0, 1000], { xl: 'p, dollars per day', yl: 'n(p), cars', nx: 4, ny: 5 });
    ctx.save(); ctx.fillStyle = alpha(fc, 0.18); ctx.fillRect(ax.X(0), ax.Y(N(p)), ax.X(p) - ax.X(0), ax.Y(0) - ax.Y(N(p))); ctx.restore();
    line(ctx, ax.X(0), ax.Y(N(p)), ax.X(p), ax.Y(N(p)), alpha(PAL.ink, 0.5), 2, [4, 8]); line(ctx, ax.X(p), ax.Y(N(p)), ax.X(p), ax.Y(0), alpha(PAL.ink, 0.5), 2, [4, 8]);
    plot(ctx, ax, [{ f: N, x: [50, 200], ends: '[]' }], PAL.ink);
    dot(ctx, ax.X(p), ax.Y(N(p)), PAL.ink, true, 8);
    text(ctx, 'R = n × p', ax.X(p / 2), ax.Y(N(p) / 2), fc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'n(p) = 1000 − 5p', ax.X(150) + 10, ax.Y(N(150)) - 26, PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
    const bx = qGraph(ctx, { l: 780, r: 1320, t: 100, b: 410 }, R, [0, 200], [0, 60000], p, 100, { xl: 'p, dollars per day', yl: 'R(p), dollars per day', nx: 4, ny: 6, dom: [50, 200], ends: '[]', fy: (v) => fmt(v, 0), label: ['$\\kR(p)$', 175, 38000] });
    hits = [{ x: bx.X(100), y: bx.Y(50000), r: 16, name: 'the maximum revenue, 50,000 dollars a day, at p = 100 dollars' }, { x: ax.X(p / 2), y: ax.Y(N(p) / 2), r: 30, name: `the rectangle n × p = ${fmt(N(p), 0)} × ${fmt(p, 0)}` }];
    ro.set(`\\kR(p)=(1000-5p)p=(${n(N(p), 0)})(${n(p, 0)})=${n(R(p), 0)}`);
  });
})();

/* Figure 4.68: a rectangle inscribed in x²/4 + y² = 1, its corner (x, y) dragged along the ellipse;
   beside, A(x) = 2x√(4 − x²) over [0, 2]. */
(function () {
  const d = sim('sim-inscribed-rectangle', 470);
  const A = (x) => 2 * x * Math.sqrt(Math.max(0, 4 - x * x)), BEST = Math.SQRT2;
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 2, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: BEST }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const x = xs.v, y = Math.sqrt(Math.max(0, 1 - (x * x) / 4)), fc = C('function'), pc = C('point');
    headline(ctx, Math.abs(x - BEST) < 1e-6 ? 'The corner at (√2, 1/√2) gives the largest rectangle, 2√2 by √2, of area 4.' : `The corner (${fmt(x, 2)}, ${fmt(y, 3)}) gives a ${fmt(2 * x, 2)} by ${fmt(2 * y, 2)} rectangle of area ${fmt(A(x), 3)}.`);
    const ax = axes(ctx, { l: 80, r: 640, t: 100, b: 420 }, [-2.5, 2.5], [-1.43, 1.43], { xl: 'x', yl: 'y', nx: 5, ny: 2 });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(ax.X(0), ax.Y(0), ax.X(2) - ax.X(0), ax.Y(0) - ax.Y(1), 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(fc, 0.16); ctx.fillRect(ax.X(-x), ax.Y(y), ax.X(x) - ax.X(-x), ax.Y(-y) - ax.Y(y)); ctx.strokeStyle = fc; ctx.lineWidth = 3.5; ctx.strokeRect(ax.X(-x), ax.Y(y), ax.X(x) - ax.X(-x), ax.Y(-y) - ax.Y(y)); ctx.restore();
    dot(ctx, ax.X(x), ax.Y(y), pc, true, 9);
    text(ctx, '(x, y)', ax.X(x) + 14, ax.Y(y) - 20, PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, '$\\frac{x^2}{4}+y^2=1$', ax.X(1.6), ax.Y(-1.3), PAL.ink, { size: 20, align: 'left', tex: true, bg: PAL.panel });
    const bx = qGraph(ctx, { l: 780, r: 1320, t: 100, b: 410 }, A, [0, 2], [0, 4.5], x, BEST, { xl: 'x', yl: 'A(x)', nx: 4, ny: 3, dom: [0, 2], ends: '[]', fx: (v) => fmt(v, 1), label: ['$\\kA(x)$', 1.2, 4.3] });
    hits = [{ x: bx.X(BEST), y: bx.Y(4), r: 16, name: 'the maximum area 4 at x = √2' }];
    ro.set(`\\kA(x)=2x\\sqrt{4-x^2}=2(${n(x)})\\sqrt{4-(${n(x)})^2}=${n(A(x), 3)}`);
  });
})();

/* Figures 4.69 + 4.70: the open-top box with square base x and height y = 216/x², in a locked perspective,
   beside S(x) = 864/x + x² over (0, ∞), drawn on [1, 20]. */
(function () {
  const d = sim('sim-square-box', 500);
  const S = (x) => 864 / x + x * x, BEST = 6 * Math.cbrt(2);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 3, max: 18, step: 0.05, value: 12, unit: 'in.', dec: 2, specials: [{ at: BEST }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const x = xs.v, y = 216 / (x * x), K = 14;
    headline(ctx, Math.abs(x - BEST) < 1e-6 ? 'x = 6∛2 ≈ 7.56 in. and y = 3∛2 ≈ 3.78 in. give the least surface area, 108∛4 ≈ 171.4 in².' : `x = ${fmt(x, 2)} in., y = ${fmt(y, 2)} in.: the surface area is ${fmt(S(x), 1)} in².`);
    const view = F.view({ yaw: 0.65, pitch: 0.45, dist: 2400, cx: 300, cy: 400 });
    box(ctx, view, x * K, x * K, y * K);
    text(ctx, 'volume 216 in³', 300, 470, PAL.muted, { size: 18, align: 'center' });
    const ax = qGraph(ctx, { l: 780, r: 1320, t: 100, b: 430 }, S, [0, 20], [0, 500], x, BEST, { xl: 'x, inches', yl: 'S(x), square inches', nx: 4, ny: 5, dom: [1.8, 20], label: ['$\\kS(x)$', 16.5, 420] });
    hits = [{ x: ax.X(BEST), y: ax.Y(S(BEST)), r: 16, name: 'the least surface area 108∛4 ≈ 171.4 in² at x = 6∛2' }, { x: 300, y: 330, r: 60, name: `the box, ${fmt(x, 2)} by ${fmt(x, 2)} by ${fmt(y, 2)} in.` }];
    ro.set(`x^2y=216 \\qquad \\kS(x)=\\frac{864}{x}+x^2=\\frac{864}{${n(x)}}+(${n(x)})^2=${n(S(x), 1)}`);
  });
})();
};
