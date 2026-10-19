/* Figures for section 0.2 Introduction to differential equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['0.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, vbracket, headline, register, readout, fmt, hover, tangent, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sgn = (v) => (v < 0 ? '-' : '+');
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Figure 1: x = cos t + sin t + Ce^(−t), the solutions of dx/dt + x = 2 cos t, the book's three (C = 2, 0, −2,
   starting at 3, 1, −1) faint and the slider's C full. Axes t 0 to 5, x −2 to 4: the slider's extremes start at
   x(0) = −2 and 4, and every curve stays inside afterwards. */
(function () {
  const d = sim('sim-solutions-family', 520);
  const BOOK = [2, 0, -2];
  const cs = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: -3, max: 3, step: 0.05, value: 2, unit: '', dec: 2, detents: BOOK });
  const ro = readout(d);
  const x = (c) => (t) => Math.cos(t) + Math.sin(t) + c * Math.exp(-t);
  const name = (c) => (c === 0 ? 'x = cos t + sin t' : `x = cos t + sin t ${c < 0 ? '−' : '+'} ${Math.abs(c)}e^(−t)`);
  const BOX = { l: 200, r: 1240, t: 120, b: 450 };
  let ax = null;
  hover(d.stage, () => (ax ? BOOK.flatMap((c) => [0.6, 1.4, 2.2].map((t) => ({ x: ax.X(t), y: ax.Y(x(c)(t)), r: 14, name: name(c) }))) : []));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), c = cs.v;
    ax = axes(ctx, BOX, [0, 5], [-2, 4], { xl: 't', yl: 'x', nx: 5, ny: 6 });
    BOOK.forEach((k) => plot(ctx, ax, x(k), alpha(fc, 0.32), { w: 3 }));
    plot(ctx, ax, x(c), fc);
    dot(ctx, ax.X(0), ax.Y(1 + c), pc, false, 10);
    const tail = Math.abs(c) < 1e-9 ? 'the solution is the wave $\\cos t + \\sin t$ itself.' : `at $t = 5$ the term $Ce^{-t}$ is down to ${fmt(c * Math.exp(-5), 3)}.`;
    headline(ctx, `C = ${fmt(c, 2)}: $\\kx(0) = ${n(1 + c)}$, and ${tail}`);
    const a = n(Math.abs(c));
    ro.set(Math.abs(c) < 1e-9
      ? '\\kx = \\cos t + \\sin t,\\quad \\kx(0) = 1'
      : `\\kx = \\cos t + \\sin t ${sgn(c)} ${a}e^{-t},\\quad \\kx(0) = 1 ${sgn(c)} ${a} = ${n(1 + c)}`);
  }
  still(d, draw);
})();

/* The modelling cycle, a faithful copy of the book's unnumbered sketch: three stages joined by the arrows
   abstract, solve and interpret. */
(function () {
  const d = sim('fig-modelling-cycle', 330);
  const TOP = { x: 700, y: 64 }, LEFT = { x: 330, y: 262 }, RIGHT = { x: 1070, y: 262 };
  function draw() {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, mu = PAL.muted;
    arrow(ctx, TOP.x - 120, TOP.y + 30, LEFT.x + 50, LEFT.y - 34, ink, 4);
    arrow(ctx, LEFT.x + 170, LEFT.y, RIGHT.x - 180, RIGHT.y, ink, 4);
    arrow(ctx, RIGHT.x - 50, RIGHT.y - 34, TOP.x + 120, TOP.y + 30, ink, 4);
    text(ctx, 'Real-world problem', TOP.x, TOP.y, ink, { size: 26, align: 'center' });
    text(ctx, 'Mathematical model', LEFT.x, LEFT.y, ink, { size: 26, align: 'center' });
    text(ctx, 'Mathematical solution', RIGHT.x, RIGHT.y, ink, { size: 26, align: 'center' });
    text(ctx, 'abstract', 430, 150, mu, { size: 22, align: 'right', italic: true });
    text(ctx, 'solve', 700, LEFT.y - 24, mu, { size: 22, align: 'center', italic: true });
    text(ctx, 'interpret', 970, 150, mu, { size: 22, align: 'left', italic: true });
  }
  still(d, draw);
})();

/* Figure 2 and Example 0.2.1: P(t) = Ce^(kt) through the two counts P(0) and P(10), so C = P(0) and
   k = ln(P(10)/P(0))/10; a dot every 10 s, each P(10)/P(0) times the last. Axes t 0 to 60 s, P 0 to 7000,
   the book's window; a P(60) past the top is pinned at the edge. */
(function () {
  const d = sim('sim-bacteria', 540);
  const p0 = ctl(d.controls, { label: 'P(0)', cls: 'point', key: 'P0', min: 50, max: 150, step: 10, value: 100, unit: '', dec: 0 });
  const p10 = ctl(d.controls, { label: 'P(10)', cls: 'point', key: 'P10', min: 150, max: 300, step: 10, value: 200, unit: '', dec: 0 });
  const ro = readout(d);
  const BOX = { l: 220, r: 1240, t: 130, b: 470 };
  let ax = null, pts = [];
  hover(d.stage, () => pts);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const a = p0.v, b = p10.v, r = b / a, k = Math.log(r) / 10, P = (t) => a * Math.exp(k * t), p60 = a * Math.pow(r, 6);
    ax = axes(ctx, BOX, [0, 60], [0, 7000], { xl: 't (s)', yl: 'P', nx: 6, ny: 7 });
    plot(ctx, ax, P, fc);
    pts = [];
    [20, 30, 40, 50].forEach((t) => {
      const v = P(t); if (v > 7000) return;
      dot(ctx, ax.X(t), ax.Y(v), fc, true, 6);
      pts.push({ x: ax.X(t), y: ax.Y(v), r: 14, name: `P(${t}) = ${fmt(v, 0)}` });
    });
    const end = pinned(ctx, ax.box, ax.X, ax.Y, 60, p60, fc, `P(60) = ${fmt(p60, 0)}`);
    if (!end.out) label(ctx, `P(60) = ${fmt(p60, 0)}`, end.x, end.y, { side: 'left', color: fc, size: 20, weight: 600 });
    pts.push({ x: end.x, y: end.y, r: 14, name: `P(60) = ${fmt(p60, 0)}` });
    dot(ctx, ax.X(0), ax.Y(a), pc, true, 10);
    dot(ctx, ax.X(10), ax.Y(b), pc, true, 10);
    label(ctx, `P(0) = ${fmt(a, 0)}`, ax.X(0) + 50, ax.Y(a), { side: 'above', color: pc, size: 20, weight: 600 });   /* set right of the tick labels */
    label(ctx, `P(10) = ${fmt(b, 0)}`, ax.X(10), ax.Y(b), { side: 'above', color: pc, size: 20, weight: 600 });
    headline(ctx, `P(0) = ${fmt(a, 0)}, P(10) = ${fmt(b, 0)}: the population is multiplied by ${fmt(r, 2)} every 10 s, so P(60) = ${fmt(p60, 0)}.`);
    ro.set(`k = \\frac{\\ln(${fmt(b, 0)}/${fmt(a, 0)})}{10} = ${n(k, 4)},\\quad \\kP(t) = ${fmt(a, 0)}\\,e^{${n(k, 4)}t},\\quad \\kP(60) = ${fmt(a, 0)}\\left(\\tfrac{${fmt(b, 0)}}{${fmt(a, 0)}}\\right)^{6} = ${fmt(p60, 0)}`);
  }
  still(d, draw);
})();

/* Sim: the four fundamental equations. The solution of the chosen one (C = 1; y = cos kx and y = cosh kx for
   the second-order pair) with a point the reader drags along it; at the point, the derivative the equation
   names: the tangent of slope ±ky, or the second derivative ∓k²y as an arrow from the curve, drawn at half
   scale. Axes x −2 to 2, y −4 to 4; a point past the box is pinned. */
(function () {
  const d = sim('sim-four-fundamental', 560);
  const EQS = {
    g: { f: (k) => (x) => Math.exp(k * x), sign: 1, order: 1, sol: (k) => `\\ky = e^{${n(k)}x}` },
    d: { f: (k) => (x) => Math.exp(-k * x), sign: -1, order: 1, sol: (k) => `\\ky = e^{-${n(k)}x}` },
    o: { f: (k) => (x) => Math.cos(k * x), sign: -1, order: 2, sol: (k) => `\\ky = \\cos(${n(k)}x)` },
    h: { f: (k) => (x) => Math.cosh(k * x), sign: 1, order: 2, sol: (k) => `\\ky = \\cosh(${n(k)}x)` },
  };
  const eq = choice(d.controls, { label: 'equation', key: 'eq', value: 'g', options: [
    { value: 'g', label: 'y′ = ky' }, { value: 'd', label: 'y′ = −ky' }, { value: 'o', label: 'y″ = −k²y' }, { value: 'h', label: 'y″ = k²y' }] });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.5, max: 2, step: 0.05, value: 1, unit: '', dec: 2 });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2, max: 2, step: 0.01, value: 0.8, unit: '', dec: 2 });
  const fNow = () => EQS[eq.value].f(ks.v);
  const P = drag(d, { x: xs, y: (x) => fNow()(x) });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 120, b: 490 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative');
    const e = EQS[eq.value], k = ks.v, f = e.f(k), x0 = xs.v;
    const ax = axes(ctx, BOX, [-2, 2], [-4, 4], { xl: 'x', yl: 'y', nx: 4, ny: 8 });
    clip(ctx, ax.box, () => eq.curve(ctx, (v) => EQS[v].f(k), -2, 2, ax.X, ax.Y, fc, 5, 240));
    const kr = +k.toFixed(2), xr = +x0.toFixed(2), yr = +f(x0).toFixed(2);
    hits = [];
    let tex, head;
    if (e.order === 1) {
      const s = e.sign * kr * yr;
      tangent(ctx, ax, f, x0, dc, { df: (x) => e.sign * k * f(x), w: 3 });
      hits.push({ x: ax.X(x0 + 0.5), y: ax.Y(f(x0) + 0.5 * e.sign * k * f(x0)), r: 14, name: `tangent of slope y′ = ${e.sign < 0 ? '−' : ''}ky` });
      tex = `${e.sol(k)},\\quad \\kyprime(${n(xr)}) = ${e.sign < 0 ? '-' : ''}${n(kr)} \\cdot ${n(yr)} = ${n(s)}`;
      head = `At $x = ${n(xr)}$: $\\ky = ${n(yr)}$, and the slope is $\\kyprime = ${e.sign < 0 ? '-' : ''}k\\ky = ${n(s)}$.`;
    } else {
      const a = e.sign * kr * kr * yr, py = f(x0), tip = Math.max(-4, Math.min(4, py + 0.5 * e.sign * k * k * py));
      if (Math.abs(tip - py) > 0.05 && Math.abs(py) <= 4) arrow(ctx, ax.X(x0), ax.Y(py), ax.X(x0), ax.Y(tip), dc, 4);
      hits.push({ x: ax.X(x0), y: ax.Y((py + tip) / 2), r: 14, name: `second derivative y″ = ${e.sign < 0 ? '−' : ''}k²y, drawn at half its length` });
      tex = `${e.sol(k)},\\quad \\kydprime(${n(xr)}) = ${e.sign < 0 ? '-' : ''}(${n(kr)})^2 \\cdot ${par(yr)} = ${n(a)}`;
      const pull = Math.abs(yr) < 0.005 ? 'and the curve crosses zero without bending.'
        : e.sign < 0 ? 'pulling the curve back toward zero.' : 'pushing the curve away from zero.';
      head = `At $x = ${n(xr)}$: $\\ky = ${n(yr)}$ and $\\kydprime = ${e.sign < 0 ? '-' : ''}k^2\\ky = ${n(a)}$, ${pull}`;
    }
    const at = P.draw(ctx, ax, fc);
    if (at) hits.push({ x: at.x, y: at.y, r: 16, name: `(${n(xr)}, ${n(yr)}) on the solution` });
    headline(ctx, head);
    ro.set(tex, undefined, { form: eq.value });
  }
  still(d, draw);
})();

/* Sim: the Gateway Arch. Its weighted catenary stands H = A(cosh C − 1) = 625.07 ft tall on feet at x = ±L,
   L = 299.2239 ft; the slider's C keeps H and L and sets A = H/(cosh C − 1). The parabola through the same top
   and feet is dashed, and the widest gap between the two is bracketed. Equal scales in feet: x −400 to 400,
   height 0 to 700. */
(function () {
  const d = sim('sim-gateway-arch', 640);
  const L = 299.2239, A0 = 68.7672, C0 = 3.0022, H = A0 * (Math.cosh(C0) - 1);
  const cs = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: 0.25, max: 4, step: 0.0001, value: C0, unit: '', dec: 4, detents: [C0] });
  const ro = readout(d);
  const BOX = { l: 443, r: 957, t: 110, b: 560 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, c = cs.v, A = H / (Math.cosh(c) - 1);
    const cat = (x) => H - A * (Math.cosh((c * x) / L) - 1), parab = (x) => H * (1 - (x / L) * (x / L));
    const ax = axes(ctx, BOX, [-400, 400], [0, 700], { xl: 'x (ft)', yl: 'height (ft)', nx: 8, ny: 7 });
    ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, ax, parab, alpha(ink, 0.7), { w: 3, x: [-L, L] }); ctx.restore();
    plot(ctx, ax, cat, fc, { w: 6, x: [-L, L] });
    let gx = 0, gap = 0;
    for (let i = 0; i <= 600; i++) { const x = (L * i) / 600, g = Math.abs(cat(x) - parab(x)); if (g > gap) { gap = g; gx = x; } }
    const gtxt = `${fmt(gap, gap < 10 ? 1 : 0)} ft`;
    if (gap > 2) vbracket(ctx, ax.X(gx) + 16, ax.Y(cat(gx)), ax.Y(parab(gx)), PAL.muted, gtxt, 1, { size: 20 });
    const lx = -0.72 * L;
    label(ctx, 'catenary', ax.X(lx), ax.Y(cat(lx)), { side: 'left', color: fc, size: 20, weight: 600 });
    label(ctx, 'parabola', ax.X(lx), ax.Y(parab(lx)), { side: 'right', color: ink, size: 20 });
    hits = [-0.5, 0.5].flatMap((u) => [
      { x: ax.X(u * L), y: ax.Y(cat(u * L)), r: 14, name: 'the catenary y = A(cosh(Cx/L) − 1), turned over' },
      { x: ax.X(u * L), y: ax.Y(parab(u * L)), r: 14, name: 'the parabola through the same top and feet' }]);
    headline(ctx, `C = ${fmt(c, 4)}: the catenary and the parabola through the same top and feet differ by up to ${gtxt}.`);
    ro.set(`y = A\\left(\\cosh\\left(\\tfrac{C}{L}x\\right) - 1\\right),\\quad A = ${n(A, 4)},\\ C = ${n(c, 4)},\\ L = 299.2239,\\quad A(\\cosh C - 1) = ${n(A * (Math.cosh(c) - 1), 2)}\\ \\text{ft}`);
  }
  still(d, draw);
})();
};
