/* Figures for section A.2 Matrix algebra. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['A.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, drag, line, arrow, text, headline, register, readout, hover, arrival, stagger, ease, measure } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a number as the figure writes it: one decimal at most, no trailing zero, never −0 */
const r1 = (v) => { const r = Math.round(v * 10) / 10; return Object.is(r, -0) ? 0 : r; };
const n = (v) => String(r1(v));
const nT = (v) => n(v).replace('-', '−');
const col = (a, b) => `\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix}`;
const scol = (a, b) => `\\left[\\begin{smallmatrix} ${a} \\\\ ${b} \\end{smallmatrix}\\right]`;
const smat = (m) => `\\left[\\begin{smallmatrix} ${m[0]} & ${m[1]} \\\\ ${m[2]} & ${m[3]} \\end{smallmatrix}\\right]`;
const bmat = (m) => `\\begin{bmatrix} ${m[0]} & ${m[1]} \\\\ ${m[2]} & ${m[3]} \\end{bmatrix}`;

/* Sim (the book's noncommuting pair, A = [1 1; 1 1] and B = [1 0; 0 2]): the product as composition.
   Two planes side by side at one scale, x₁ and x₂ −6 to 6, 45 units to 1. Left, x⃗ goes through B and then
   through A: the arrow x⃗, the arrow Bx⃗ (faint) and the arrow A(Bx⃗), the two hops between their heads
   curved in the matrix colour and named B and A, and the one hop of AB (dashed, on the other side) from
   the head of x⃗ straight to the same point. Right, the other order: A first, then B, and the one hop of BA.
   The reader drags x⃗ (on either plane, or on its two sliders, −1.5 to 1.5; the default (1, 1)): ABx⃗ = (s, s)
   with s = x₁ + 2x₂ and BAx⃗ = (u, 2u) with u = x₁ + x₂, which agree only at x⃗ = 0⃗. At the sliders' extremes
   every head stays inside the planes: |Bx⃗|, |Ax⃗| ≤ 3 per entry, ABx⃗ ≤ 4.5, BAx⃗ = (3, 6) at most.
   Still: a composition has no clock. The arrows are symbolic (vectors, and the mappings drawn as hops). */
(function () {
  const d = sim('sim-composition', 770);
  const A = [1, 1, 1, 1], B = [1, 0, 0, 2];
  const AB = [1, 2, 1, 2], BA = [1, 1, 2, 2];
  const ap = (m, v) => [m[0] * v[0] + m[1] * v[1], m[2] * v[0] + m[3] * v[1]];
  const s1 = ctl(d.controls, { label: 'x_1', cls: '', key: 'x1', min: -1.5, max: 1.5, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the first entry x₁ of the vector x' });
  const s2 = ctl(d.controls, { label: 'x_2', cls: '', key: 'x2', min: -1.5, max: 1.5, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the second entry x₂ of the vector x' });
  const grips = [drag(d, { x: s1, y: s2 }), drag(d, { x: s1, y: s2 })];
  const ro = readout(d);
  const K = 45, TOP = 150;
  /* the two planes: the first matrix applied, the second, their product, and the names */
  const PANES = [
    { ox: 360, first: B, second: A, prod: AB, f: '\\kB', s: '\\kA', fs: 'B', ss: 'A', title: '$\\kA\\kB$: first $\\kB$, then $\\kA$' },
    { ox: 1040, first: A, second: B, prod: BA, f: '\\kA', s: '\\kB', fs: 'A', ss: 'B', title: '$\\kB\\kA$: first $\\kA$, then $\\kB$' },
  ];
  const matText = (m) => `[${m[0]} ${m[1]}; ${m[2]} ${m[3]}]`;
  let hits = [];
  hover(d.stage, () => hits);

  /* a hop from p to q: a quadratic arc bulging by side (±1) off the chord, drawn up to fraction g,
     its head an arrowhead along the arc's end; returns the point beside its middle for the name */
  function hop(ctx, p, q, side, color, g, dash) {
    const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy);
    if (L < 20 || !(g > 0)) return null;
    const nx = -dy / L, ny = dx / L, b = Math.min(0.3 * L, 46) * side;
    const c = [(p[0] + q[0]) / 2 + nx * b, (p[1] + q[1]) / 2 + ny * b];
    const at = (t) => [(1 - t) * (1 - t) * p[0] + 2 * t * (1 - t) * c[0] + t * t * q[0], (1 - t) * (1 - t) * p[1] + 2 * t * (1 - t) * c[1] + t * t * q[1]];
    /* stop short of the heads so the arc meets the arrows' tips, not their dots */
    const t0 = Math.min(0.3, 12 / L), t1 = 1 - Math.min(0.3, 14 / L), te = t0 + (t1 - t0) * g, N = 30;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    for (let i = 0; i <= N; i++) { const [x, y] = at(t0 + ((te - t0) * i) / N); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    const [hx, hy] = at(te), [bx, by] = at(Math.max(t0, te - 0.04)), u = Math.hypot(hx - bx, hy - by) || 1;
    arrow(ctx, hx - (14 * (hx - bx)) / u, hy - (14 * (hy - by)) / u, hx, hy, color, 3);
    const m = at(0.5);
    return [m[0] + nx * side * 24, m[1] + ny * side * 24, nx * side, ny * side];
  }

  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), mc = C('matrix'), ink = PAL.ink, mu = PAL.muted;
    const x = [r1(s1.v), r1(s2.v)], zero = x[0] === 0 && x[1] === 0;
    const k = ease.smooth(arrival(d));
    hits = [];
    const taken = [];
    const clash = (b) => taken.some((o) => b.l < o.r + 6 && o.l < b.r + 6 && b.t < o.b + 4 && o.t < b.b + 4);
    /* a name set beside the point it names: out along (ux, uy), stepping further out, then turning, where the slot is taken */
    const name = (s, px, py, ux, uy, color, size = 22) => {
      const w = measure(ctx, s, { size, weight: 600, tex: true }) + 12, h = size + 12;
      const turns = [0, 0.9, -0.9, 1.8, -1.8];
      for (const tr of turns) {
        const ca = Math.cos(tr), sa = Math.sin(tr), vx = ux * ca - uy * sa, vy = ux * sa + uy * ca;
        for (const gap of [24, 46, 72]) {
          const cx = px + vx * (gap + w / 2 * Math.abs(vx)), cy = py + vy * (gap + h / 2 * Math.abs(vy));
          const b = { l: cx - w / 2, r: cx + w / 2, t: cy - h / 2, b: cy + h / 2 };
          if (b.l < 12 || b.r > 1388 || b.t < TOP - 10 || clash(b)) continue;
          taken.push(b); text(ctx, s, cx, cy, color, { size, weight: 600, tex: true, align: 'center', bg: PAL.panel }); return;
        }
      }
    };
    const results = PANES.map((P, pi) => {
      const box = { l: P.ox - 6 * K, r: P.ox + 6 * K, t: TOP, b: TOP + 12 * K };
      const ax = axes(ctx, box, [-6, 6], [-6, 6], { xl: 'x_1', yl: 'x_2', nx: 6, ny: 6, fx: (v) => nT(v), fy: (v) => nT(v) });
      const { X, Y } = ax, O = [X(0), Y(0)];
      text(ctx, P.title, P.ox, 104, ink, { size: 22, tex: true, align: 'center' });
      const v = ap(P.first, x).map(r1), w = ap(P.second, v).map(r1);
      const S = (p) => [X(p[0]), Y(p[1])];
      const g0 = stagger(k, 0, 3, 0.45), g1 = stagger(k, 1, 3, 0.45), g2 = stagger(k, 2, 3, 0.45);
      const grow = (p, g) => [O[0] + (S(p)[0] - O[0]) * g, O[1] + (S(p)[1] - O[1]) * g];
      const hx = S(x), hv = S(v), hw = S(w);
      /* the heads and the origin are kept clear of names */
      [O, hx, hv, hw].forEach(([a, b]) => taken.push({ l: a - 10, r: a + 10, t: b - 10, b: b + 10 }));
      /* the arrows from the origin: first x⃗ after the first matrix (faint), then the end of the two hops, then x⃗ */
      const len = (p) => Math.hypot(p[0], p[1]) > 1e-9;
      if (len(v)) { const [a, b] = grow(v, g1); arrow(ctx, O[0], O[1], a, b, alpha(vc, 0.6), 3.5); }
      if (len(w)) { const [a, b] = grow(w, g2); arrow(ctx, O[0], O[1], a, b, vc, 6); }
      if (len(x)) { const [a, b] = grow(x, g0); arrow(ctx, O[0], O[1], a, b, vc, 4); }
      /* the hops: the first matrix, the second, and their product in one step on the other side;
         each bulges away from the origin, the product's toward it */
      const away = (p, q) => { const m = [(p[0] + q[0]) / 2 - O[0], (p[1] + q[1]) / 2 - O[1]], dx = q[0] - p[0], dy = q[1] - p[1]; return (-dy * m[0] + dx * m[1]) >= 0 ? 1 : -1; };
      const h1 = hop(ctx, hx, hv, away(hx, hv), mc, g1);
      const h2 = hop(ctx, hv, hw, away(hv, hw), mc, g2);
      const h3 = hop(ctx, hx, hw, -away(hx, hw), alpha(mc, 0.8), g2, [9, 7]);
      /* the reader's x⃗ */
      const at = grips[pi].draw(ctx, ax, vc);
      return { P, ax, x, v, w, hx, hv, hw, h1, h2, h3, at };
    });
    /* names last, above the arrows: the hops', then the vectors' */
    const unit = (p, q) => { const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1; return [dx / L, dy / L]; };
    if (k > 0.98) results.forEach((R) => {
      const { P, h1, h2, h3 } = R;
      if (h1) name(`$${P.f}$`, h1[0] - h1[2] * 24, h1[1] - h1[3] * 24, h1[2], h1[3], C('matrix'));
      if (h2) name(`$${P.s}$`, h2[0] - h2[2] * 24, h2[1] - h2[3] * 24, h2[2], h2[3], C('matrix'));
      if (h3) name(`$${P.s}${P.f}$`, h3[0] - h3[2] * 24, h3[1] - h3[3] * 24, h3[2], h3[3], C('matrix'));
    });
    results.forEach((R) => {
      const { P, ax, x: xx, v, w, hx, hv, hw } = R, O = [ax.X(0), ax.Y(0)];
      const out = (h) => (Math.hypot(h[0] - O[0], h[1] - O[1]) > 4 ? unit(O, h) : [0.7, -0.7]);
      if (k > 0.98) {
        name(`$${P.s}(${P.f}\\kvecx)$`, hw[0], hw[1], ...out(hw), C('vector'));
        name(`$${P.f}\\kvecx$`, hv[0], hv[1], ...out(hv), C('vector'));
        name('$\\kvecx$', hx[0], hx[1], ...out(hx), C('vector'));
      }
      const pair = (p) => `(${nT(p[0])}, ${nT(p[1])})`;
      hits.push({ x: hx[0], y: hx[1], r: 18, name: `x⃗ = ${pair(xx)}; drag it` });
      hits.push({ x: hv[0], y: hv[1], r: 16, name: `${P.fs}x⃗ = ${pair(v)}: x⃗ after ${P.fs} = ${matText(P.first)}` });
      hits.push({ x: hw[0], y: hw[1], r: 16, name: `${P.ss}(${P.fs}x⃗) = (${P.ss}${P.fs})x⃗ = ${pair(w)}` });
      if (R.h1) hits.push({ x: R.h1[0], y: R.h1[1], r: 16, name: `${P.fs} = ${matText(P.first)} takes x⃗ to ${P.fs}x⃗` });
      if (R.h2) hits.push({ x: R.h2[0], y: R.h2[1], r: 16, name: `${P.ss} = ${matText(P.second)} takes ${P.fs}x⃗ to ${P.ss}(${P.fs}x⃗)` });
      if (R.h3) hits.push({ x: R.h3[0], y: R.h3[1], r: 16, name: `${P.ss}${P.fs} = ${matText(P.prod)} takes x⃗ there in one step` });
    });
    /* the words, from the numbers drawn */
    const [L, Rr] = results, ab = L.w, ba = Rr.w;
    headline(ctx, zero
      ? 'At $\\kvecx = \\vec{0}$ both orders give $\\vec{0}$; any other $\\kvecx$ ends in two different places.'
      : `$\\kA\\kB\\kvecx = (${nT(ab[0])}, ${nT(ab[1])})$ but $\\kB\\kA\\kvecx = (${nT(ba[0])}, ${nT(ba[1])})$: the order of the two mappings matters.`);
    ro.set(`\\kA(\\kB\\kvecx) = \\kA${col(n(L.v[0]), n(L.v[1]))} = ${col(n(ab[0]), n(ab[1]))} = ${bmat(AB)}${col(n(x[0]), n(x[1]))} = (\\kA\\kB)\\kvecx`,
      `$\\kB(\\kA\\kvecx) = \\kB${scol(n(Rr.v[0]), n(Rr.v[1]))} = ${scol(n(ba[0]), n(ba[1]))} = ${smat(BA)}${scol(n(x[0]), n(x[1]))} = (\\kB\\kA)\\kvecx$`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
