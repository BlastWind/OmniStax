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
   Two planes side by side at one scale, x₁ −3 to 3 and x₂ −4 to 4, 84 units to 1. Left, x⃗ goes through B and then
   through A: the arrow x⃗, the point Bx⃗ (a hollow dot, the head of that vector) and the arrow A(Bx⃗), the two hops
   between the heads curved in the matrix colour and named B and A, and the one hop of AB, a wider dashed arc
   round the outside of the two, from the head of x⃗ straight to the same point. Right, the other order: A first, then B, and the one hop of BA.
   The reader drags x⃗ (on either plane, or on its two sliders, −1.5 to 1.5; the default (1, 0.7), where no two
   arrows of a plane lie on one line): ABx⃗ = (s, s) with s = x₁ + 2x₂ and BAx⃗ = (u, 2u) with
   u = x₁ + x₂, which agree only at x⃗ = 0⃗. The planes frame the default and its neighbourhood large; x⃗, Bx⃗
   and Ax⃗ never leave them, and a product that does (ABx⃗ once |s| > 3, BAx⃗ once |u| > 2, as far as (4.5, 4.5)
   and (3, 6) at the corners) is drawn to the edge along its own direction with its head hollow, while the
   headline, the readout and its hover name give its true entries.
   Still: a composition has no clock. The arrows are symbolic (vectors, and the mappings drawn as hops). */
(function () {
  const d = sim('sim-composition', 900);
  const A = [1, 1, 1, 1], B = [1, 0, 0, 2];
  const AB = [1, 2, 1, 2], BA = [1, 1, 2, 2];
  const ap = (m, v) => [m[0] * v[0] + m[1] * v[1], m[2] * v[0] + m[3] * v[1]];
  const s1 = ctl(d.controls, { label: 'x_1', cls: '', key: 'x1', min: -1.5, max: 1.5, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the first entry x₁ of the vector x' });
  const s2 = ctl(d.controls, { label: 'x_2', cls: '', key: 'x2', min: -1.5, max: 1.5, step: 0.1, value: 0.7, unit: '', dec: 1, aria: 'the second entry x₂ of the vector x' });
  const grips = [drag(d, { x: s1, y: s2 }), drag(d, { x: s1, y: s2 })];
  const ro = readout(d);
  const K = 84, TOP = 150;
  /* the two planes: the first matrix applied, the second, their product, and the names */
  const PANES = [
    { ox: 350, first: B, second: A, prod: AB, f: '\\kB', s: '\\kA', fs: 'B', ss: 'A', title: '$\\kA\\kB$: first $\\kB$, then $\\kA$' },
    { ox: 1050, first: A, second: B, prod: BA, f: '\\kA', s: '\\kB', fs: 'A', ss: 'B', title: '$\\kB\\kA$: first $\\kA$, then $\\kB$' },
  ];
  const matText = (m) => `[${m[0]} ${m[1]}; ${m[2]} ${m[3]}]`;
  let hits = [];
  hover(d.stage, () => hits);

  /* a hop from p to q: a quadratic arc whose middle stands `bulge` off the chord (its sign the side), drawn up
     to fraction g, its head an arrowhead along the arc's end; returns the point beside its middle for the name */
  function hop(ctx, p, q, bulge, color, g, dash) {
    const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy);
    if (L < 20 || !(g > 0)) return null;
    const side = Math.sign(bulge) || 1, nx = -dy / L, ny = dx / L, b = 2 * bulge;
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
    const m = at(0.5), path = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(at);
    return [m[0] + nx * side * 24, m[1] + ny * side * 24, nx * side, ny * side, path];
  }

  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), mc = C('matrix'), ink = PAL.ink, mu = PAL.muted;
    const x = [r1(s1.v), r1(s2.v)], zero = x[0] === 0 && x[1] === 0;
    const k = ease.smooth(arrival(d));
    hits = [];
    const taken = [], arcs = [];
    const clash = (b) => taken.some((o) => b.l < o.r + 2 && o.l < b.r + 2 && b.t < o.b + 2 && o.t < b.b + 2);
    /* a name set beside the point it names: out along (ux, uy), stepping further out, then turning, where the slot is taken */
    const name = (s, px, py, ux, uy, color, size = 24) => {
      const w = measure(ctx, s, { size, weight: 600, tex: true }) + 8, h = size + 6;
      /* the slot out along (ux, uy) first, then the slots turned from it either way round the point; a name
         that finds no clear slot near its thing is left to the hover names */
      for (const tr of [0, 0.6, -0.6, 1.2, -1.2, 1.9, -1.9, 2.6, -2.6, Math.PI]) {
        const ca = Math.cos(tr), sa = Math.sin(tr), vx = ux * ca - uy * sa, vy = ux * sa + uy * ca;
        for (const gap of [10, 22, 36]) {
          const cx = px + vx * (gap + w / 2 * Math.abs(vx)), cy = py + vy * (gap + h / 2 * Math.abs(vy));
          const b = { l: cx - w / 2, r: cx + w / 2, t: cy - h / 2, b: cy + h / 2 };
          if (b.l < 12 || b.r > 1388 || b.t < TOP - 10 || clash(b)) continue;
          taken.push(b); text(ctx, s, cx, cy, color, { size, weight: 600, tex: true, align: 'center', bg: PAL.panel }); return;
        }
      }
    };
    const results = PANES.map((P, pi) => {
      const box = { l: P.ox - 3 * K, r: P.ox + 3 * K, t: TOP, b: TOP + 8 * K };
      const ax = axes(ctx, box, [-3, 3], [-4, 4], { xl: 'x_1', yl: 'x_2', nx: 6, ny: 8, fx: (v) => nT(v), fy: (v) => nT(v) });
      const { X, Y } = ax, O = [X(0), Y(0)];
      text(ctx, P.title, P.ox, 106, ink, { size: 24, tex: true, align: 'center' });
      const v = ap(P.first, x).map(r1), w = ap(P.second, v).map(r1);
      /* a head past the plane's edge is drawn at the edge, along its own direction */
      const edge = (p) => { const f = Math.min(1, 3 / Math.max(Math.abs(p[0]), 1e-9), 4 / Math.max(Math.abs(p[1]), 1e-9)); return [p[0] * f, p[1] * f]; };
      const S = (p) => { const q = edge(p); return [X(q[0]), Y(q[1])]; };
      const pinned = (p) => Math.abs(p[0]) > 3 + 1e-9 || Math.abs(p[1]) > 4 + 1e-9;
      const g0 = stagger(k, 0, 3, 0.45), g1 = stagger(k, 1, 3, 0.45), g2 = stagger(k, 2, 3, 0.45);
      const grow = (p, g) => [O[0] + (S(p)[0] - O[0]) * g, O[1] + (S(p)[1] - O[1]) * g];
      const hx = S(x), hv = S(v), hw = S(w);
      /* the heads and the origin are kept clear of names */
      [O, hx, hv, hw].forEach(([a, b]) => taken.push({ l: a - 10, r: a + 10, t: b - 10, b: b + 10 }));
      /* the arrows from the origin: the end of the two hops, then x⃗; the stop between the hops is the head of
         x⃗ after the first matrix, marked by a hollow dot */
      const len = (p) => Math.hypot(p[0], p[1]) > 1e-9;
      if (g1 >= 1) F.dot(ctx, hv[0], hv[1], vc, false, 7);
      if (len(w)) {
        const [a, b] = grow(w, g2); arrow(ctx, O[0], O[1], a, b, vc, 6);
        /* past the edge: the head hollow at the edge and the arrow's line running on, dotted, out of the plane */
        if (pinned(w) && g2 >= 1) { const u = Math.hypot(a - O[0], b - O[1]) || 1; line(ctx, a, b, a + (26 * (a - O[0])) / u, b + (26 * (b - O[1])) / u, vc, 3, [3, 5]); F.dot(ctx, a, b, vc, false, 9); }
      }
      if (len(x)) { const [a, b] = grow(x, g0); arrow(ctx, O[0], O[1], a, b, vc, 4); }
      /* the hops: the first matrix and the second, each bowed into the triangle the three heads make, and
         their product in one step, a wider dashed arc round the outside of the two */
      const off = (p, q, r) => { const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1; return (-dy * (r[0] - p[0]) + dx * (r[1] - p[1])) / L; };
      const inward = (p, q, r) => { const o = off(p, q, r), L = Math.hypot(q[0] - p[0], q[1] - p[1]); return (o > 0 ? 1 : -1) * Math.min(0.18 * L, 26); };
      const h1 = hop(ctx, hx, hv, inward(hx, hv, hw), mc, g1);
      const h2 = hop(ctx, hv, hw, inward(hv, hw, hx), mc, g2);
      const ov = off(hx, hw, hv), L3 = Math.hypot(hw[0] - hx[0], hw[1] - hx[1]);
      const h3 = hop(ctx, hx, hw, Math.abs(ov) > 6 ? ov + Math.sign(ov) * 40 : 0.3 * L3, alpha(mc, 0.8), g2, [9, 7]);
      /* the reader's x⃗; the arrows and the hops are kept clear of names */
      const at = grips[pi].draw(ctx, ax, vc);
      const keep = (q) => taken.push({ l: q[0] - 5, r: q[0] + 5, t: q[1] - 5, b: q[1] + 5 });
      [hx, hw].forEach((h) => { const L = Math.hypot(h[0] - O[0], h[1] - O[1]); for (let t = 20; t < L - 6; t += 14) keep([O[0] + ((h[0] - O[0]) * t) / L, O[1] + ((h[1] - O[1]) * t) / L]); });
      [h1, h2, h3].forEach((h) => h && arcs.push(...h[4]));
      return { P, ax, x, v, w, hx, hv, hw, h1, h2, h3, at, out: pinned(w) };
    });
    /* names last, above the arrows: the vectors' at their heads (the reader's x⃗ first), then the hops' */
    const unit = (p, q) => { const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1; return [dx / L, dy / L]; };
    /* a vector is named only where it is long enough to tell from the others, a hop only where it is long
       enough to carry a name; the vectors take their slots first, over the hops if need be, then the hops
       take what is left */
    const far = (h, O) => Math.hypot(h[0] - O[0], h[1] - O[1]) > 40;
    if (k > 0.98) results.forEach((R) => {
      const { P, ax, hx, hv, hw } = R, O = [ax.X(0), ax.Y(0)];
      const out = (h) => (Math.hypot(h[0] - O[0], h[1] - O[1]) > 4 ? unit(O, h) : [0.7, -0.7]);
      name('$\\kvecx$', hx[0], hx[1], ...out(hx), C('vector'));
      if (far(hw, O)) name(`$${P.s}(${P.f}\\kvecx)$`, hw[0], hw[1], ...out(hw), C('vector'));
      if (far(hv, O) && far(hv, hx) && far(hv, hw)) name(`$${P.f}\\kvecx$`, hv[0], hv[1], ...out(hv), C('vector'));
    });
    arcs.forEach((q) => taken.push({ l: q[0] - 5, r: q[0] + 5, t: q[1] - 5, b: q[1] + 5 }));
    const long = (h, p, q) => h && Math.hypot(q[0] - p[0], q[1] - p[1]) > 50;
    if (k > 0.98) results.forEach((R) => {
      const { P, h1, h2, h3, hx, hv, hw } = R;
      if (long(h1, hx, hv)) name(`$${P.f}$`, h1[0] - h1[2] * 24, h1[1] - h1[3] * 24, h1[2], h1[3], C('matrix'));
      if (long(h2, hv, hw)) name(`$${P.s}$`, h2[0] - h2[2] * 24, h2[1] - h2[3] * 24, h2[2], h2[3], C('matrix'));
      if (long(h3, hx, hw)) name(`$${P.s}${P.f}$`, h3[0] - h3[2] * 24, h3[1] - h3[3] * 24, h3[2], h3[3], C('matrix'));
    });
    results.forEach((R) => {
      const { P, x: xx, v, w, hx, hv, hw } = R;
      const pair = (p) => `(${nT(p[0])}, ${nT(p[1])})`;
      hits.push({ x: hx[0], y: hx[1], r: 18, name: `x⃗ = ${pair(xx)}; drag it` });
      hits.push({ x: hv[0], y: hv[1], r: 16, name: `${P.fs}x⃗ = ${pair(v)}: x⃗ after ${P.fs} = ${matText(P.first)}` });
      hits.push({ x: hw[0], y: hw[1], r: 16, name: `${P.ss}(${P.fs}x⃗) = (${P.ss}${P.fs})x⃗ = ${pair(w)}${R.out ? ', past the edge of the plane' : ''}` });
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
