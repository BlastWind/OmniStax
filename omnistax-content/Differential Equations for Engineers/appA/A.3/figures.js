/* Figures for section A.3 Elimination. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['A.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, line, dot, text, label, headline, register, hover, tex, arrival, ease, presence, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });

/* Sim: a 2 × 2 system as two lines. The first equation is the book's x − y = 2 (A.1's opening system),
   the second a₂x + b₂y = c₂ on three sliders, defaults 2, 1, 4: the book's 2x + y = 4, solved in A.1 to
   (2, 0). The lines cross at one point (a pivot in both variable columns of the reduced form), run parallel
   (the reduced form's last row is [0 0 | 1], 0 = 1) or are one line (y free, x = 2 + y). The solution set
   fades from the dot to a band along the whole line as the second line lands on the first. Plane x −8 to 8,
   y −6 to 6 at one scale (47.5 units to 1); an intersection past the box is pinned at its edge. The sliders
   step by 0.5, so every number of the reduced form is a fraction with an integer top and bottom, written
   exactly. Dashed circles: on a₂ and b₂ where the lines are parallel (a₂ + b₂ = 0, the determinant
   a₁b₂ − b₁a₂ of the coefficients vanishing), on c₂ where parallel lines coincide (c₂ = 2a₂). */
(function () {
  const d = sim('sim-system-of-lines', 770);
  const BOX = { l: 110, r: 870, t: 120, b: 690 }, XR = [-8, 8], YR = [-6, 6];
  let sa = null, sb = null, sc = null;
  const ready = () => sa && sb && sc;
  const mk = (label, key, value, at, sp) => ctl(d.controls, { label, cls: '', key, min: -5, max: 5, step: 0.5, value, unit: '', dec: 1, specials: [{ at, label: sp }] });
  sa = mk('a_2', 'a2', 2, () => (ready() ? -sb.v : null), 'parallel');
  sb = mk('b_2', 'b2', 1, () => (ready() ? -sa.v : null), 'parallel');
  sc = mk('c_2', 'c2', 4, () => (ready() && Math.abs(sa.v + sb.v) < 1e-9 && Math.abs(2 * sa.v) <= 5 ? 2 * sa.v : null), 'one line');
  [sa, sb, sc].forEach((s) => s.refresh());
  const P = presence(d);
  P.show('band', false, { ms: 0 });
  let kase = 'one', last = [2, 0], hits = [];
  hover(d.stage, () => hits);

  /* exact fractions: [p, q] with q > 0 and no common factor */
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const frac = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(Math.abs(p), q) || 1; return [p / g, q / g]; };
  const fTex = ([p, q]) => (q === 1 ? String(p) : `${p < 0 ? '-' : ''}\\tfrac{${Math.abs(p)}}{${q}}`);
  const fTxt = ([p, q]) => (p < 0 ? '−' : '') + (q === 1 ? String(Math.abs(p)) : `${Math.abs(p)}/${q}`);
  const num = (v) => { const r = Math.round(v * 2) / 2; return String(Object.is(r, -0) ? 0 : r); };
  /* a₂x + b₂y = c₂ as the book would write it: no zero term, no coefficient 1 */
  function eqTex(a, b, c) {
    const term = (v, s, first) => {
      if (Math.abs(v) < 1e-9) return '';
      const m = Math.abs(v) === 1 ? '' : num(Math.abs(v));
      return first ? `${v < 0 ? '-' : ''}${m}${s}` : ` ${v < 0 ? '-' : '+'} ${m}${s}`;
    };
    const ax = term(a, 'x', true), by = term(b, 'y', !ax);
    return `${ax + by || '0'} = ${num(c)}`;
  }
  /* the part of a x + b y = c inside the plane, as two points, or null */
  function clipLine(a, b, c) {
    const n2 = a * a + b * b; if (n2 < 1e-12) return null;
    const p0 = [(a * c) / n2, (b * c) / n2], u = [-b / Math.sqrt(n2), a / Math.sqrt(n2)];
    let t0 = -1e6, t1 = 1e6;
    for (const [k, lo, hi] of [[0, XR[0], XR[1]], [1, YR[0], YR[1]]]) {
      if (Math.abs(u[k]) < 1e-12) { if (p0[k] < lo || p0[k] > hi) return null; continue; }
      const ta = (lo - p0[k]) / u[k], tb = (hi - p0[k]) / u[k];
      t0 = Math.max(t0, Math.min(ta, tb)); t1 = Math.min(t1, Math.max(ta, tb));
    }
    return t1 > t0 ? [[p0[0] + u[0] * t0, p0[1] + u[1] * t0], [p0[0] + u[0] * t1, p0[1] + u[1] * t1]] : null;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const a2 = sa.v, b2 = sb.v, c2 = sc.v, A2 = Math.round(2 * a2), B2 = Math.round(2 * b2), C2 = Math.round(2 * c2);
    const r1 = F.ref('equation-1'), r2 = F.ref('equation-2'), pc = C('point'), mu = PAL.muted;
    const k = ease.smooth(arrival(d));
    const ax = axes(ctx, BOX, XR, YR, { xl: 'x', yl: 'y', nx: 8, ny: 6 });
    const X = ax.X, Y = ax.Y;
    /* the case, from the determinant b₂ + a₂ of the coefficients and the last row of the reduced form */
    const det = A2 + B2, rest = C2 - 2 * A2;
    const now = det !== 0 ? 'one' : rest !== 0 ? 'none' : 'line';
    if (now !== kase) { kase = now; P.show('dot', kase === 'one'); P.show('band', kase === 'line'); }
    const xs = det !== 0 ? frac(2 * B2 + C2, det) : null, ys = det !== 0 ? frac(C2 - 2 * A2, det) : null;
    if (xs) last = [xs[0] / xs[1], ys[0] / ys[1]];
    const L1 = clipLine(1, -1, 2), L2 = clipLine(a2, b2, c2);
    const grow = (L) => [L[0], [L[0][0] + (L[1][0] - L[0][0]) * k, L[0][1] + (L[1][1] - L[0][1]) * k]];
    /* every point of the one line solves the system: a band along it, in the solution's colour */
    P.draw(ctx, 'band', () => { const [p, q] = grow(L1); line(ctx, X(p[0]), Y(p[1]), X(q[0]), Y(q[1]), alpha(pc, 0.35), 18); });
    { const [p, q] = grow(L1); line(ctx, X(p[0]), Y(p[1]), X(q[0]), Y(q[1]), r1, 5); }
    if (L2) { const [p, q] = grow(L2); line(ctx, X(p[0]), Y(p[1]), X(q[0]), Y(q[1]), r2, 5, [16, 11]); }
    hits = [];
    const sample = (L, name) => { if (L) [0.15, 0.35, 0.65, 0.85].forEach((s) => hits.push({ x: X(L[0][0] + (L[1][0] - L[0][0]) * s), y: Y(L[0][1] + (L[1][1] - L[0][1]) * s), r: 14, name })); };
    sample(L1, 'x − y = 2, the first equation');
    sample(L2, `${eqTex(a2, b2, c2).replace(/-/g, '−')}, the second equation`);
    if (kase === 'line') sample(L1, 'every point of this line solves both equations');
    /* the one solution where the lines cross, labelled with its coordinates */
    if (k > 0.95) P.draw(ctx, 'dot', () => {
      const s = xs ? `(${fTxt(xs)}, ${fTxt(ys)})` : '';
      const at = pinned(ctx, BOX, X, Y, last[0], last[1], pc, s || undefined);
      if (s && !at.out) label(ctx, s, at.x, at.y, { side: at.y < BOX.t + 70 ? 'below' : 'above', color: pc, size: 22, gap: 24 });
      if (s) hits.push({ x: at.x, y: at.y, r: 16, name: `${s}, on both lines: the one solution${at.out ? ', off the plane drawn' : ''}` });
    });
    /* the legend: each equation in its line's colour and dash */
    const LX = 950, LY = 240;
    [['first equation', 'x - y = 2', r1, null], ['second equation', eqTex(a2, b2, c2), r2, [16, 11]]].forEach(([nm, eq, col, dash], i) => {
      const y = LY + 110 * i;
      text(ctx, nm, LX, y - 30, mu, { size: 17 });
      if (!(i === 1 && !L2)) line(ctx, LX, y + 4, LX + 60, y + 4, col, 5, dash);
      text(ctx, `$${eq}$`, LX + 80, y + 4, col, { size: 24, tex: true });
    });
    /* headline and readout */
    const E2 = eqTex(a2, b2, c2);
    if (kase === 'one') headline(ctx, `$x - y = 2$ and $${E2}$ cross at $(${fTex(xs)}, ${fTex(ys)})$: one solution.`);
    else if (A2 === 0 && B2 === 0) headline(ctx, kase === 'none' ? `The second equation reads $0 = ${num(c2)}$: the last row reads $0 = 1$, so there is no solution.`
      : 'The second equation reads $0 = 0$: only $x - y = 2$ is left, so $y$ is free and $x = 2 + y$.');
    else headline(ctx, kase === 'none' ? `$x - y = 2$ and $${E2}$ are parallel: the last row reads $0 = 1$, so there is no solution.`
      : `$${E2}$ is $x - y = 2$ again: one line, so $y$ is free and $x = 2 + y$.`);
    const red = kase === 'one' ? `1 & 0 & ${fTex(xs)} \\\\ 0 & 1 & ${fTex(ys)}` : kase === 'none' ? '1 & -1 & 0 \\\\ 0 & 0 & 1' : '1 & -1 & 2 \\\\ 0 & 0 & 0';
    tex(d.readout, `[\\, \\kA ~|~ \\kvecb \\,] = \\left[ \\begin{array}{cc|c} 1 & -1 & 2 \\\\ ${num(a2)} & ${num(b2)} & ${num(c2)} \\end{array} \\right] \\;\\to\\; \\left[ \\begin{array}{cc|c} ${red} \\end{array} \\right]`);
  }
  still(d, draw);
})();
};
