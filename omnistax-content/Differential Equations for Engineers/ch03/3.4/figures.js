/* Figures for section 3.4 Eigenvalue method. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, headline, register, readout, fmt, hover, cycle, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });
const col = (a, b) => `\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix}`;
const mat = (m) => `\\begin{bmatrix} ${m[0]} & ${m[1]} \\\\ ${m[2]} & ${m[3]} \\end{bmatrix}`;

/* Sim (Example 3.4.1 and the complex example): a unit vector v⃗ = (cos θ, sin θ) and its image Av⃗, both from the
   origin, for A the book's [2 1; 0 1] (eigenvalues 2 and 1, eigenvectors (1, 0) and (1, −1)) or [1 1; −1 1]
   (eigenvalues 1 ± i, no real eigenvector). Left, the plane at one scale, x₁ and x₂ −3 to 3 (|Av⃗| ≤ 2.29 for the
   first matrix, √2 for the second), the unit circle and its image under A faint, v⃗'s line dashed. Right, the
   angle from the line of v⃗ to Av⃗ (degrees, folded into (−90, 90], counterclockwise positive) against θ from 0° to
   180°: its zeros are the eigenvector directions, marked with their eigenvalues; for the complex matrix it is
   −45° at every θ. Still: the lesson is how Av⃗ moves as v⃗ turns, not a time. A choice of matrix morphs the image
   (the entries blend); the dashed circles on θ sit at the real eigenvector directions of the matrix chosen
   (0°, 135° and 180° for Example 3.4.1, none for the complex one). The book's θ = 0°, Av⃗ = 2v⃗, is the state on load. */
(function () {
  const d = sim('sim-eigenvectors', 640);
  const MATS = {
    ex: { m: [2, 1, 0, 1], label: 'Example 3.4.1' },
    cx: { m: [1, 1, -1, 1], label: 'complex example' },
  };
  /* the real eigenvalues of [a b; c d] with an eigenvector of each, as directions in [0°, 180°] */
  const eigen = (m) => {
    const [a, b, c, e] = m, tr = a + e, det = a * e - b * c, disc = tr * tr - 4 * det;
    if (disc < -1e-12) return [];
    const ls = disc < 1e-12 ? [tr / 2] : [(tr + Math.sqrt(disc)) / 2, (tr - Math.sqrt(disc)) / 2];
    const out = [];
    ls.forEach((l) => {
      const vs = Math.abs(b) > 1e-12 ? [[b, l - a]] : Math.abs(c) > 1e-12 ? [[l - e, c]] : [[1, 0], [0, 1]].filter(([x, y]) => Math.abs(a * x + b * y - l * x) + Math.abs(c * x + e * y - l * y) < 1e-9);
      vs.forEach(([x, y]) => {
        let deg = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 180;
        if (Math.abs(deg - 180) < 1e-9) deg = 0;
        out.push({ deg, l });
        if (Math.abs(deg) < 1e-9) out.push({ deg: 180, l });
      });
    });
    return out.sort((p, q) => p.deg - q.deg);
  };
  const pick = choice(d.controls, { label: 'A', key: 'A', value: 'ex', options: [
    { value: 'ex', label: '[2 1; 0 1]' }, { value: 'cx', label: '[1 1; −1 1]' }] });
  const at = (i) => () => { const e = eigen(MATS[pick.value].m)[i]; return e ? e.deg : null; };
  const th = ctl(d.controls, { label: '\\theta', cls: '', key: 'theta', min: 0, max: 180, step: 1, value: 0, unit: '°', dec: 0,
    aria: 'the angle θ of the unit vector v', specials: [0, 1, 2].map((i) => ({ at: at(i), label: 'eigenvector' })) });
  const ro = readout(d);
  const U = 72, PLANE = { l: 330 - 3 * U, r: 330 + 3 * U, t: 130, b: 130 + 6 * U }, GRAPH = { l: 760, r: 1330, t: 150, b: 540 };
  /* the angle from the line of v⃗ to Av⃗, in degrees in (−90, 90] */
  const off = (m, deg) => {
    const c = Math.cos((deg * Math.PI) / 180), s = Math.sin((deg * Math.PI) / 180);
    const ax = m[0] * c + m[1] * s, ay = m[2] * c + m[3] * s;
    let phi = (Math.atan2(c * ay - s * ax, c * ax + s * ay) * 180) / Math.PI;
    if (phi > 90) phi -= 180; else if (phi <= -90) phi += 180;
    return phi;
  };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), ec = C('eigenvalue');
    const key = pick.value, M = MATS[key].m, m = pick.mix((v) => MATS[v].m), deg = th.v;
    const eig = eigen(M), here = eig.find((e) => Math.abs(e.deg - deg) < 1e-6);
    hits = [];
    /* the plane: the unit circle, its image under A, the line of v⃗, v⃗ and Av⃗ */
    const P = axes(ctx, PLANE, [-3, 3], [-3, 3], { xl: 'x_1', yl: 'x_2', nx: 6, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const { X, Y } = P;
    const ring = (f) => { ctx.beginPath(); for (let i = 0; i <= 180; i++) { const a = (i / 180) * 2 * Math.PI, [x, y] = f(Math.cos(a), Math.sin(a)); i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)); } ctx.stroke(); };
    ctx.save(); ctx.lineWidth = 2; ctx.strokeStyle = guide(); ring((x, y) => [x, y]);
    ctx.strokeStyle = alpha(vc, 0.35); ctx.setLineDash([8, 8]); ring((x, y) => [m[0] * x + m[1] * y, m[2] * x + m[3] * y]); ctx.restore();
    hits.push({ x: X(0), y: Y(1), r: 12, name: 'the unit circle, where every v⃗ ends' });
    const rad = (deg * Math.PI) / 180, cx = Math.cos(rad), sy = Math.sin(rad);
    const tip = [m[0] * cx + m[1] * sy, m[2] * cx + m[3] * sy];
    const ext = (s) => [X(s * cx), Y(s * sy)];
    clip(ctx, P.box, () => { const [x0, y0] = ext(-5), [x1, y1] = ext(5); line(ctx, x0, y0, x1, y1, alpha(vc, here ? 0.75 : 0.4), here ? 3 : 2.5, here ? undefined : [10, 10]); });
    hits.push({ x: ext(2.6)[0], y: ext(2.6)[1], r: 14, name: 'the line of v⃗: every multiple of v⃗' });
    const phi = off(m, deg), turned = Math.abs(phi) > 0.6 && Math.hypot(tip[0], tip[1]) > 0.2;
    if (turned) {
      const a0 = rad, a1 = Math.atan2(tip[1], tip[0]);
      let b1 = a1; while (b1 - a0 > Math.PI) b1 -= 2 * Math.PI; while (b1 - a0 < -Math.PI) b1 += 2 * Math.PI;
      const lo = Math.min(a0, b1), hi = Math.max(a0, b1);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(X(0), Y(0), 0.62 * U, -hi, -lo); ctx.stroke(); ctx.restore();
    }
    arrow(ctx, X(0), Y(0), X(tip[0]), Y(tip[1]), vc, 6);
    arrow(ctx, X(0), Y(0), X(cx), Y(sy), vc, 4);
    const side = (u) => (u < -0.3 ? 'right' : u > 0.3 ? 'left' : 'center');
    mark(ctx, '$\\kvecv$', X(cx) + 30 * cx, Y(sy) - 30 * sy, vc, { align: side(cx) });
    const la = Math.hypot(tip[0], tip[1]), ux = tip[0] / la, uy = tip[1] / la;
    const near = Math.hypot(X(tip[0]) + 36 * ux - (X(cx) + 30 * cx), Y(tip[1]) - 36 * uy - (Y(sy) - 30 * sy)) < 50;
    mark(ctx, here ? `$\\kA\\kvecv = ${here.l === 1 ? '' : n(here.l, 0)}\\kvecv$` : '$\\kA\\kvecv$', X(tip[0]) + 36 * ux, Y(tip[1]) - 36 * uy + (near ? 30 : 0), vc, { align: side(ux) });
    hits.push({ x: X(cx), y: Y(sy), r: 14, name: `v⃗ = (${fmt(cx, 2)}, ${fmt(sy, 2)}), the unit vector at θ = ${fmt(deg, 0)}°` });
    hits.push({ x: X(tip[0]), y: Y(tip[1]), r: 16, name: `Av⃗ = (${fmt(tip[0], 2)}, ${fmt(tip[1], 2)})` });
    hits.push({ x: X(m[0] * Math.cos(2.3) + m[1] * Math.sin(2.3)), y: Y(m[2] * Math.cos(2.3) + m[3] * Math.sin(2.3)), r: 12, name: 'the image of the unit circle under A: where Av⃗ can end' });
    /* the graph: the angle from the line of v⃗ to Av⃗ against θ, zero at the eigenvectors */
    const G = axes(ctx, GRAPH, [0, 180], [-90, 90], { xl: 'θ (°)', yl: 'angle of Av off the line of v (°)', nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, G.box.l, G.Y(0), G.box.r, G.Y(0), alpha(vc, 0.55), 2.5, [10, 10]);
    hits.push({ x: G.X(20), y: G.Y(0), r: 12, name: 'angle 0: Av⃗ on the line of v⃗' });
    plot(ctx, G, (x) => off(m, x), alpha(PAL.ink, 0.75), { w: 4 });
    eig.forEach((e) => {
      dot(ctx, G.X(e.deg), G.Y(0), ec, true, 8);
      /* the name sits on the side of the axis the curve leaves free next to the zero */
      const inward = e.deg < 90 ? 1 : -1, below = off(m, e.deg + 10 * inward) > 0;
      text(ctx, `$\\klambda = ${n(e.l, 0)}$`, G.X(e.deg) + 14 * inward, G.Y(0) + (below ? 30 : -30), ec, { size: 20, weight: 600, tex: true, align: inward > 0 ? 'left' : 'right', bg: PAL.panel });
      hits.push({ x: G.X(e.deg), y: G.Y(0), r: 14, name: `θ = ${fmt(e.deg, 0)}°: an eigenvector, with eigenvalue λ = ${fmt(e.l, 0)}` });
    });
    line(ctx, G.X(deg), G.Y(0), G.X(deg), G.Y(phi), guide(), 2.5, [4, 8]);
    dot(ctx, G.X(deg), G.Y(phi), PAL.ink, true, 9);
    hits.push({ x: G.X(deg), y: G.Y(phi), r: 16, name: `at θ = ${fmt(deg, 0)}°, Av⃗ is ${fmt(Math.abs(phi), 0)}° off the line of v⃗` });
    /* the words, from the numbers shown: v⃗ to two places, Av⃗ from those */
    const v1 = +cx.toFixed(2) || 0, v2 = +sy.toFixed(2) || 0;
    const a1 = +(M[0] * v1 + M[1] * v2).toFixed(2), a2 = +(M[2] * v1 + M[3] * v2).toFixed(2);
    const phiR = Math.round(Math.abs(off(M, deg)));
    if (here) {
      const lam = here.l === 1 ? '' : n(here.l, 0);
      headline(ctx, `At $\\theta = ${n(deg, 0)}^\\circ$, $\\kA\\kvecv = ${lam}\\kvecv$: $\\kvecv$ is an eigenvector with eigenvalue $\\klambda = ${n(here.l, 0)}$.`);
      ro.set(`\\kA\\kvecv = ${mat(M)}${col(n(v1), n(v2))} = ${col(n(a1), n(a2))} = ${lam}${col(n(v1), n(v2))} = ${lam}\\kvecv`, undefined, { form: `${key}-on` });
    } else {
      headline(ctx, key === 'cx'
        ? `At $\\theta = ${n(deg, 0)}^\\circ$, $\\kA\\kvecv$ is $${phiR}^\\circ$ off the line of $\\kvecv$, as at every $\\theta$: the eigenvalues $1 \\pm i$ are complex.`
        : `At $\\theta = ${n(deg, 0)}^\\circ$, $\\kA\\kvecv$ is $${phiR}^\\circ$ off the line of $\\kvecv$, so $\\kvecv$ is not an eigenvector.`);
      ro.set(`\\kA\\kvecv = ${mat(M)}${col(n(v1), n(v2))} = ${col(n(a1), n(a2))}`, undefined, { form: `${key}-off` });
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Sim (Theorem 3.4.1 on Example 3.4.1's eigenvectors): P = [λ₁ λ₁−λ₂; 0 λ₂], which has the eigenvector v⃗₁ = (1, 0)
   for λ₁ and v⃗₂ = (1, −1) for λ₂ whatever the two are (λ₁ = 2, λ₂ = 1 is the book's [2 1; 0 1], the state on
   load). The reader sets the initial point x⃗(0) (dragged, or on its two sliders; default (−0.25, 0.5)), and
   x⃗(0) = c₁v⃗₁ + c₂v⃗₂ gives c₁ = x₁(0) + x₂(0), c₂ = −x₂(0). As t runs from 0 until x⃗(t) leaves the frame (at most
   2.5) over 5 s, c₁v⃗₁e^{λ₁t} slides along the first line and c₂v⃗₂e^{λ₂t} along the second, each at the rate its
   eigenvalue sets, and their parallelogram sum is x⃗(t), whose tip traces the trajectory (moving tier: the tip is
   kinematic; the chevrons on each line are the field's direction there, symbolic). Plane x₁, x₂ −3 to 3 at one
   scale. Dashed circles where x⃗(0) lies on an eigenvector line (x₂(0) = 0, x₁(0) + x₂(0) = 0) and where
   λ₁ = λ₂, past the theorem's distinct eigenvalues, where P = λI and every line through the origin is one. */
(function () {
  const d = sim('sim-eigenvector-flow', 740);
  const RUN = 5, TMAX = 2.5;
  let T = TMAX;
  const cy = cycle(() => T, 1.2);
  const span = () => {
    const c1 = +(x10.v + x20.v).toFixed(2), c2 = +(-x20.v).toFixed(2), l1 = l1s.v, l2 = l2s.v;
    for (let t = 0; t <= TMAX; t += 0.01) {
      const x = c1 * Math.exp(l1 * t) + c2 * Math.exp(l2 * t), y = -c2 * Math.exp(l2 * t);
      if (Math.abs(x) > 3 || Math.abs(y) > 3) return Math.max(0.3, t);
    }
    return TMAX;
  };
  const reset = () => { T = span(); cy.reset(); };
  const l1s = ctl(d.controls, { label: '\\klambdaone', cls: 'eigenvalue', key: 'lambda1', min: -2, max: 2, step: 0.1, value: 2, unit: '', dec: 1, aria: 'the eigenvalue λ₁ of v₁', specials: [{ at: () => l2s.v, label: 'λ₁ = λ₂' }], onInput: reset });
  const l2s = ctl(d.controls, { label: '\\klambdatwo', cls: 'eigenvalue', key: 'lambda2', min: -2, max: 2, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the eigenvalue λ₂ of v₂', specials: [{ at: () => l1s.v, label: 'λ₁ = λ₂' }], onInput: reset });
  const x10 = ctl(d.controls, { label: 'x_1(0)', cls: 'point', key: 'x10', min: -3, max: 3, step: 0.05, value: -0.25, unit: '', dec: 2, aria: 'the first entry of the initial point', specials: [{ at: () => -x20.v, label: 'on the line of v₂' }], onInput: reset });
  const x20 = ctl(d.controls, { label: 'x_2(0)', cls: 'point', key: 'x20', min: -3, max: 3, step: 0.05, value: 0.5, unit: '', dec: 2, aria: 'the second entry of the initial point', specials: [{ at: 0, label: 'on the line of v₁' }, { at: () => -x10.v, label: 'on the line of v₂' }], onInput: reset });
  const P = drag(d, { x: x10, y: x20 });
  const ro = readout(d);
  T = span();
  const U = 88, BOX = { l: 700 - 3 * U, r: 700 + 3 * U, t: 140, b: 140 + 6 * U };
  const V1 = [1, 0], V2 = [1, -1];
  let hits = [];
  hover(d.stage, () => hits);
  const ex = (l) => (Math.abs(l) < 1e-9 ? '0t' : Math.abs(l - 1) < 1e-9 ? 't' : Math.abs(l + 1) < 1e-9 ? '-t' : `${n(l, Number.isInteger(l) ? 0 : 1)}t`);
  const way = (l) => (Math.abs(l) < 1e-9 ? 'stays put' : l > 0 ? 'slides out' : 'slides in');
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), cc = C('curve'), pc = C('point'), fc = C('function'), ec = C('eigenvalue'), fld = C('vector-field');
    const l1 = +l1s.v.toFixed(1), l2 = +l2s.v.toFixed(1), X0 = +x10.v.toFixed(2), Y0 = +x20.v.toFixed(2);
    const c1 = +(X0 + Y0).toFixed(2), c2 = +(-Y0).toFixed(2);
    const t = cy.now(), tr = +t.toFixed(2);
    const sol = (s) => { const a = c1 * Math.exp(l1 * s), b = c2 * Math.exp(l2 * s); return [a * V1[0] + b * V2[0], a * V1[1] + b * V2[1]]; };
    hits = [];
    const ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x_1', yl: 'x_2', xc: fc, yc: fc, nx: 6, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const { X, Y } = ax;
    /* the two eigenvector lines, the field's direction along each, v⃗₁ and v⃗₂ */
    clip(ctx, ax.box, () => {
      line(ctx, X(-3), Y(0), X(3), Y(0), alpha(vc, 0.55), 3, [12, 9]);
      line(ctx, X(-3), Y(3), X(3), Y(-3), alpha(vc, 0.55), 3, [12, 9]);
    });
    const chevrons = (v, l) => {
      if (Math.abs(l) < 1e-9) return;
      const u = Math.hypot(v[0], v[1]), dx = v[0] / u, dy = v[1] / u, L = 0.32;
      [-2.2, -1.2, 1.2, 2.2].forEach((s) => {
        const px = s * dx, py = s * dy, sg = Math.sign(s) * Math.sign(l);
        arrow(ctx, X(px - (sg * L * dx) / 2), Y(py - (sg * L * dy) / 2), X(px + (sg * L * dx) / 2), Y(py + (sg * L * dy) / 2), fld, 3.5);
      });
    };
    chevrons(V1, l1); chevrons(V2, l2);
    hits.push({ x: X(-2.2), y: Y(0), r: 14, name: `the line of v⃗₁ = (1, 0): on it the field points ${l1 > 0 ? 'away from' : l1 < 0 ? 'toward' : 'nowhere; every point is at rest,'} the origin` });
    hits.push({ x: X(2.2 / Math.SQRT2), y: Y(-2.2 / Math.SQRT2), r: 14, name: `the line of v⃗₂ = (1, −1): on it the field points ${l2 > 0 ? 'away from' : l2 < 0 ? 'toward' : 'nowhere; every point is at rest,'} the origin` });
    arrow(ctx, X(0), Y(0), X(1), Y(0), vc, 4);
    arrow(ctx, X(0), Y(0), X(1), Y(-1), vc, 4);
    mark(ctx, '$\\kvecvone$', X(1) + 4, Y(0) + 28, vc, { align: 'left' });
    mark(ctx, '$\\kvecvtwo$', X(1) + 14, Y(-1) + 8, vc, { align: 'left' });
    mark(ctx, `$\\klambdaone = ${n(l1, 1)}$`, X(3) - 8, Y(0) - 30, ec, { align: 'right', size: 22 });
    mark(ctx, `$\\klambdatwo = ${n(l2, 1)}$`, X(-2.55) + 26, Y(2.55), ec, { align: 'left', size: 22 });
    /* the trajectory: faint over the whole of its run inside the frame, solid from t = 0 to now */
    const path = (s0, s1, k = 200) => Array.from({ length: k + 1 }, (_, i) => sol(s0 + ((s1 - s0) * i) / k));
    const stroke = (pts, color, w) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); pts.forEach(([a, b], i) => (i ? ctx.lineTo(X(a), Y(b)) : ctx.moveTo(X(a), Y(b)))); ctx.stroke(); ctx.restore(); };
    const moving = Math.abs(c1) + Math.abs(c2) > 1e-9;
    if (moving) {
      clip(ctx, ax.box, () => { stroke(path(-6, 0, 400), alpha(cc, 0.22), 3); stroke(path(0, T), alpha(cc, 0.35), 4); if (t > 1e-6) stroke(path(0, t), cc, 5); });
      const mid = sol(T / 2);
      if (Math.abs(mid[0]) < 3 && Math.abs(mid[1]) < 3) hits.push({ x: X(mid[0]), y: Y(mid[1]), r: 14, name: 'the trajectory of x⃗(t), faint before t = 0 and ahead of the moving point' });
    }
    /* c₁v⃗₁e^{λ₁t} and c₂v⃗₂e^{λ₂t} on their lines, the parallelogram they span, and their sum x⃗(t) */
    const a = c1 * Math.exp(l1 * t), b = c2 * Math.exp(l2 * t);
    const p1 = [a * V1[0], a * V1[1]], p2 = [b * V2[0], b * V2[1]], x = sol(t);
    const long = (p) => Math.hypot(p[0], p[1]) > 0.06;
    clip(ctx, ax.box, () => {
      if (long(p1) && long(p2)) {
        line(ctx, X(p1[0]), Y(p1[1]), X(x[0]), Y(x[1]), guide(), 2.5, [4, 8]);
        line(ctx, X(p2[0]), Y(p2[1]), X(x[0]), Y(x[1]), guide(), 2.5, [4, 8]);
      }
      const thin = alpha(vc, 0.7);
      if (long(p1)) arrow(ctx, X(0), Y(0), X(p1[0]), Y(p1[1]), thin, 3.5);
      if (long(p2)) arrow(ctx, X(0), Y(0), X(p2[0]), Y(p2[1]), thin, 3.5);
      if (long(x)) arrow(ctx, X(0), Y(0), X(x[0]), Y(x[1]), vc, 5);
    });
    const inside = (p) => Math.abs(p[0]) <= 3 && Math.abs(p[1]) <= 3;
    if (long(p1) && inside(p1)) hits.push({ x: X(p1[0] / 2), y: Y(p1[1] / 2), r: 14, name: `c₁v⃗₁e^(λ₁t) = ${fmt(a, 2)}·(1, 0) at t = ${fmt(tr, 2)}` });
    if (long(p2) && inside(p2)) hits.push({ x: X(p2[0] / 2), y: Y(p2[1] / 2), r: 14, name: `c₂v⃗₂e^(λ₂t) = ${fmt(b, 2)}·(1, −1) at t = ${fmt(tr, 2)}` });
    const xp = pinned(ctx, ax.box, X, Y, x[0], x[1], vc);
    hits.push({ x: xp.x, y: xp.y, r: 16, name: `x⃗(t) = c₁v⃗₁e^(λ₁t) + c₂v⃗₂e^(λ₂t) = (${fmt(x[0], 2)}, ${fmt(x[1], 2)}) at t = ${fmt(tr, 2)}` });
    /* the initial point, the reader's */
    const at = P.draw(ctx, ax, pc);
    if (at) {
      /* the name sits behind the point, away from where the trajectory sets off */
      const vx = l1 * X0 + (l1 - l2) * Y0, vy = l2 * Y0, vl = Math.hypot(vx, vy);
      const ux = vl > 1e-6 ? -vx / vl : 0.7, uy = vl > 1e-6 ? -vy / vl : 0.7;
      mark(ctx, '$\\kvecx(0)$', at.x + 30 * ux, at.y - 30 * uy, pc, { align: ux < -0.3 ? 'right' : ux > 0.3 ? 'left' : 'center' });
      hits.push({ x: at.x, y: at.y, r: 18, name: `x⃗(0) = (${fmt(X0, 2)}, ${fmt(Y0, 2)}), the initial point; drag it` });
    }
    /* the words */
    const z1 = Math.abs(c1) < 1e-9, z2 = Math.abs(c2) < 1e-9;
    const same = Math.abs(l1 - l2) < 1e-9;
    const what = !moving ? 'the solution is $\\vec{0}$ for all $t$.'
      : z2 ? `$\\kvecx(0)$ lies on the line of $\\kvecvone$, so $\\kvecx = c_1\\kvecvone e^{\\klambdaone t}$ ${way(l1)} along it and never leaves it.`
      : z1 ? `$\\kvecx(0)$ lies on the line of $\\kvecvtwo$, so $\\kvecx = c_2\\kvecvtwo e^{\\klambdatwo t}$ ${way(l2)} along it and never leaves it.`
      : same ? `$\\klambdaone = \\klambdatwo$, so $\\kP = ${n(l1, 1)}\\kI$ and every line through the origin is an eigenvector line: $\\kvecx(t)$ ${way(l1)} along its own.`
      : `$c_1\\kvecvone e^{\\klambdaone t}$ ${way(l1)} along one line and $c_2\\kvecvtwo e^{\\klambdatwo t}$ ${way(l2)} along the other; $\\kvecx(t)$ is their sum.`;
    headline(ctx, `$c_1 = ${n(c1)}$, $c_2 = ${n(c2)}$: ${what}`);
    const pm = c2 < 0 ? '-' : '+';
    ro.set(`\\kP = ${mat([n(l1, 1), n(+(l1 - l2).toFixed(1), 1), '0', n(l2, 1)])},\\quad \\kvecx = c_1\\kvecvone e^{\\klambdaone t} + c_2\\kvecvtwo e^{\\klambdatwo t} = ${n(c1)}${col('1', '0')}e^{${ex(l1)}} ${pm} ${n(Math.abs(c2))}${col('1', '-1')}e^{${ex(l2)}}`,
      `$\\kvecx(0) = c_1\\kvecvone + c_2\\kvecvtwo$ gives $c_1 = x_1(0) + x_2(0) = ${n(c1)}$ and $c_2 = -x_2(0) = ${n(c2)}$.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / RUN), draw });
})();
};
