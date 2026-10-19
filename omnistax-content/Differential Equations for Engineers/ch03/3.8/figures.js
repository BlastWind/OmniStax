/* Figures for section 3.8 Matrix exponentials. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.8'] = function (root, F) {
const { C, PAL, choice, begin, axes, dot, line, arrow, text, headline, register, readout, fmt, hover, cycle, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
const n2 = (v) => (Math.abs(v) < 0.005 ? '0.00' : fmt(v, 2));            /* canvas text: two decimals, never −0.00 */
const t2 = (v) => n2(v).replace('−', '-');                               /* the same for TeX */

/* e^{tA} for a 2 × 2 matrix [a b; c d], row by row, in closed form: with μ the mean of the diagonal and
   B = A − μI = [p b; c −p], B² = qI with q = p² + bc, so e^{tA} = e^{μt}(C(t) I + S(t) B), where C, S are
   cosh(wt), sinh(wt)/w for q = w² > 0, cos(wt), sin(wt)/w for q = −w² < 0, and 1, t for q = 0 (B nilpotent). */
function expm([a, b, c, d], t) {
  const mu = (a + d) / 2, p = (a - d) / 2, q = p * p + b * c;
  let Ct = 1, St = t;
  if (q > 1e-12) { const w = Math.sqrt(q); Ct = Math.cosh(w * t); St = Math.sinh(w * t) / w; }
  else if (q < -1e-12) { const w = Math.sqrt(-q); Ct = Math.cos(w * t); St = Math.sin(w * t) / w; }
  const e = Math.exp(mu * t);
  return [e * (Ct + St * p), e * St * b, e * St * c, e * (Ct - St * p)];
}
/* the part of the line p + s·u inside the box, as [s0, s1], or null */
function clipLine(p, u, xr, yr) {
  let lo = -Infinity, hi = Infinity;
  for (const [pi, ui, a, b] of [[p[0], u[0], xr[0], xr[1]], [p[1], u[1], yr[0], yr[1]]]) {
    if (Math.abs(ui) < 1e-12) { if (pi < a || pi > b) return null; continue; }
    let s1 = (a - pi) / ui, s2 = (b - pi) / ui; if (s1 > s2) [s1, s2] = [s2, s1];
    lo = Math.max(lo, s1); hi = Math.min(hi, s2);
  }
  return lo < hi ? [lo, hi] : null;
}

/* Sim: the flow of x⃗′ = Ax⃗ carrying the plane, the grid and the unit square to their images under e^{tA}.
   Left, the plane at one scale, x −5 to 5 and y −3 to 3, 80 units per 1; the fixed integer grid is the
   picture at t = 0, and over it the grid carried by e^{tA}: its lines stay lines, since e^{tA} is linear, so
   each is drawn as the image of a whole coordinate line, enough of them to fill the box (the images of the
   axes stronger). The square 0, e₁, e₁ + e₂, e₂ goes to the parallelogram on the two columns of e^{tA}
   (matrix colour); the column arrows and the paths of the corners so far wear the referents column-1 and
   column-2; the velocity of each corner, A times its column (d/dt e^{tA} = Ae^{tA}), is drawn from it in
   derivative colour at half its length (a quarter for Example 3.8.1, whose velocities are large); the
   eigenvector lines of a matrix with real eigenvalues are dashed in vector colour, and stay put.
   Right, A and the live e^{tA}, its columns in the referents' colours. The clock runs t from 0 to T in 5 s:
   T = 0.35 for Example 3.8.1 (e^{3t} = 2.86 keeps the far corner in the box), 2π for the rotation (a full
   turn, e^{2πA} = I), π for the spiral sink (half a turn, shrunk to e^{−π/2} = 0.21), 1.2 for the saddle
   (e^{1.2} = 3.32 along x) and 3 for the shear (the top corner at (4, 1)). A loop that ends away from I
   runs its own flow back to t = 0 in 0.9 s before it plays again, and a change of matrix runs the old flow
   back the same way, so nothing jumps. The readout writes e^{tA} in closed form with t put in; the panel
   prints its value at the same t. */
(function () {
  const d = sim('sim-exponential-flow', 690);
  const RUN = 5;
  const MATS = {
    ex: { label: 'Example 3.8.1', A: [1, 2, 2, 1], T: 0.35, vs: 0.25, eig: [{ v: [1, 1], l: 3 }, { v: [1, -1], l: -1 }] },
    rot: { label: 'rotation', A: [0, -1, 1, 0], T: 2 * Math.PI, end: '2\\pi', vs: 0.5, eig: [] },
    sink: { label: 'spiral sink', A: [-0.5, -1, 1, -0.5], T: Math.PI, end: '\\pi', vs: 0.5, eig: [] },
    saddle: { label: 'saddle', A: [1, 0, 0, -1], T: 1.2, vs: 0.5, eig: [{ v: [1, 0], l: 1 }, { v: [0, 1], l: -1 }] },
    shear: { label: 'shear', A: [0, 1, 0, 0], T: 3, vs: 0.5, eig: [{ v: [1, 0], l: 0 }] },
  };
  let shownA = MATS.ex.A, shownS = 0, fromA = MATS.ex.A, fromT = 0, endA = MATS.ex.A, endT = 0;
  const cy = cycle(() => MATS[mat.value].T, 1.2);
  const back = F.tween(d, 1);
  const mat = choice(d.controls, {
    label: '\\kA', key: 'matrix', value: 'ex', aria: 'the matrix A',
    options: Object.keys(MATS).map((k) => ({ value: k, label: MATS[k].label })),
    onInput: () => { fromA = shownA; fromT = shownS; cy.reset(); back.set(1); },
  });
  const ro = readout(d);
  const BOX = { l: 70, r: 870, t: 120, b: 600 }, XR = [-5, 5], YR = [-3, 3], R0 = Math.hypot(5, 3) + 0.5;
  const NOTE = (m) => `The velocity arrows, the columns of $\\kA e^{t\\kA}$, are drawn at ${m.vs === 0.25 ? 'a quarter of' : 'half'} their length.`;
  const WORDS = {
    ex: (ts, tv) => ({
      head: `$t = ${ts}$: the diagonal along $(1, 1)$ is stretched by $e^{3t} = ${t2(Math.exp(3 * tv))}$ and the diagonal along $(1, -1)$ shrunk by $e^{-t} = ${t2(Math.exp(-tv))}$.`,
      ro: `e^{${ts}\\,\\kA} = \\frac{1}{2}\\begin{bmatrix} e^{${t2(3 * tv)}} + e^{-${ts}} & e^{${t2(3 * tv)}} - e^{-${ts}} \\\\ e^{${t2(3 * tv)}} - e^{-${ts}} & e^{${t2(3 * tv)}} + e^{-${ts}} \\end{bmatrix}`,
    }),
    rot: (ts, tv, end) => ({
      head: end ? '$t = 2\\pi$: one full turn brings every point back to where it started, so $e^{2\\pi\\kA} = \\kI$.'
        : `$t = ${ts}$: every point has turned through $${ts}$ radians about the origin and kept its distance from it.`,
      ro: `e^{${ts}\\,\\kA} = \\begin{bmatrix} \\cos ${ts} & -\\sin ${ts} \\\\ \\sin ${ts} & \\cos ${ts} \\end{bmatrix}`,
    }),
    sink: (ts, tv) => ({
      head: `$t = ${ts}$: every point has turned through $${ts}$ radians and been drawn in toward the origin by $e^{-t/2} = ${t2(Math.exp(-tv / 2))}$.`,
      ro: `e^{${ts}\\,\\kA} = e^{-${ts}/2}\\begin{bmatrix} \\cos ${ts} & -\\sin ${ts} \\\\ \\sin ${ts} & \\cos ${ts} \\end{bmatrix}`,
    }),
    saddle: (ts, tv) => ({
      head: `$t = ${ts}$: the square is stretched along the $\\kx$ axis by $e^{t} = ${t2(Math.exp(tv))}$ and squeezed along the $\\ky$ axis by $e^{-t} = ${t2(Math.exp(-tv))}$.`,
      ro: `e^{${ts}\\,\\kA} = \\begin{bmatrix} e^{${ts}} & 0 \\\\ 0 & e^{-${ts}} \\end{bmatrix}`,
    }),
    shear: (ts) => ({
      head: `$t = ${ts}$: $\\kA^2 = 0$, so $e^{t\\kA} = \\kI + t\\kA$, and the top edge has slid $${ts}$ to the right at constant speed.`,
      ro: `e^{${ts}\\,\\kA} = \\kI + ${ts}\\,\\kA = \\begin{bmatrix} 1 & ${ts} \\\\ 0 & 1 \\end{bmatrix}`,
    }),
  };
  /* a 2 × 2 matrix of strings set between brackets, centred on (x + its width / 2, yc) */
  function bracketed(ctx, x, yc, E, cols, { cw, rh, size, bc, weight }) {
    const w = 2 * cw + 24, top = yc - rh - 4, bot = yc + rh + 4;
    [[x, 1], [x + w, -1]].forEach(([bx, s]) => {
      line(ctx, bx, top, bx, bot, bc, 3);
      line(ctx, bx, top, bx + 10 * s, top, bc, 3); line(ctx, bx, bot, bx + 10 * s, bot, bc, 3);
    });
    E.forEach((e, i) => {
      const col = i % 2, row = (i - col) / 2;
      text(ctx, e, x + 12 + cw * (col + 0.5), yc + (row ? rh / 2 : -rh / 2), cols[col], { size, align: 'center', weight });
    });
    return { mid: (col) => x + 12 + cw * (col + 0.5), right: x + w };
  }
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), mc = C('matrix'), vc = C('vector'), dc = C('derivative'), r1 = F.ref('column-1'), r2 = F.ref('column-2');
    const key = mat.value, m = MATS[key];
    /* what the plane shows: the old flow run back while the matrix changes, this flow run back after a
       loop that ended away from I, else this flow at the clock's time */
    let A = m.A, s = cy.now();
    if (mat.k < 1) { A = fromA; s = fromT * (1 - mat.k); }
    else if (back.v < 1) { A = endA; s = endT * (1 - back.v); }
    shownA = A; shownS = s;
    const M = expm(A, s), c1 = [M[0], M[2]], c2 = [M[1], M[3]], det = M[0] * M[3] - M[1] * M[2];
    const ar = F.ease.smooth(F.arrival(d));
    hits = [];
    const ax = axes(ctx, BOX, XR, YR, { nice: true, nx: 10, ny: 6, xl: 'x', yl: 'y', xc: fc, yc: fc });
    const X = ax.X, Y = ax.Y, O = [X(0), Y(0)];
    /* the eigenvector lines of the matrix (those of the old one fade as it goes) */
    const eigLines = (k) => MATS[k].eig.forEach((e) => {
      const seg = clipLine([0, 0], e.v, XR, YR); if (!seg) return;
      line(ctx, X(seg[0] * e.v[0]), Y(seg[0] * e.v[1]), X(seg[1] * e.v[0]), Y(seg[1] * e.v[1]), vc, 3, [10, 10]);
    });
    [...new Set([mat.from, key])].forEach((k) => mat.only(ctx, k, () => eigLines(k), [0, 0]));
    if (mat.k >= 1) m.eig.forEach((e) => {
      const u = 2.4 / Math.hypot(e.v[0], e.v[1]), px = X(u * e.v[0]), py = Y(u * e.v[1]);
      hits.push({ x: px, y: py, r: 14, name: `the eigenvector line of (${e.v[0]}, ${fmt(e.v[1], 0)}), eigenvalue ${fmt(e.l, 0)}: ` + (e.l === 0 ? 'e^(tA) leaves each of its points where it is' : `e^(tA) keeps its points on it, scaled by e^(${e.l === 1 ? '' : e.l === -1 ? '−' : fmt(e.l, 0)}t)`) });
    });
    /* the grid carried by e^{tA}: the images of the lines x = k run along the second column, those of y = k along the first */
    const lines = [];
    [[c1, c2], [c2, c1]].forEach(([base, dir]) => {
      const gap = Math.abs(det) / Math.hypot(dir[0], dir[1]);
      const K = Math.min(80, Math.ceil(R0 / Math.max(gap, 1e-6)) + 1);
      for (let k = -K; k <= K; k++) {
        const p = [k * base[0], k * base[1]], seg = clipLine(p, dir, XR, YR);
        if (seg) lines.push({ a: [p[0] + seg[0] * dir[0], p[1] + seg[0] * dir[1]], b: [p[0] + seg[1] * dir[0], p[1] + seg[1] * dir[1]], axis: k === 0 });
      }
    });
    lines.forEach((L, i) => {
      const q = F.stagger(ar, i, lines.length); if (!(q > 0)) return;
      const bx = L.a[0] + (L.b[0] - L.a[0]) * q, by = L.a[1] + (L.b[1] - L.a[1]) * q;
      ctx.save(); ctx.globalAlpha *= L.axis ? 0.6 : 0.3;
      line(ctx, X(L.a[0]), Y(L.a[1]), X(bx), Y(by), PAL.ink, L.axis ? 2.5 : 1.6);
      ctx.restore();
    });
    const xa = 2.6 / Math.max(1e-6, Math.hypot(c1[0], c1[1]));
    if (Math.abs(xa * c1[0]) < 4.8 && Math.abs(xa * c1[1]) < 2.8) hits.push({ x: X(xa * c1[0]), y: Y(xa * c1[1]), r: 12, name: 'the x axis carried along by e^(tA): each of its points has moved along x′ = Ax' });
    F.faded(ctx, ar, [0, 0], () => clip(ctx, BOX, () => {
      /* the unit square's image, the parallelogram on the two columns */
      const sq = [[0, 0], c1, [c1[0] + c2[0], c1[1] + c2[1]], c2];
      ctx.beginPath(); sq.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)))); ctx.closePath();
      ctx.save(); ctx.globalAlpha *= 0.15; ctx.fillStyle = mc; ctx.fill(); ctx.restore();
      ctx.save(); ctx.strokeStyle = mc; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
      /* the paths of the two corners so far */
      [[0, r1], [1, r2]].forEach(([j, col]) => {
        if (s <= 1e-6) return;
        ctx.save(); ctx.globalAlpha *= 0.6; ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath();
        for (let i = 0; i <= 90; i++) { const E = expm(A, (s * i) / 90), x = E[j], y = E[j + 2]; i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)); }
        ctx.stroke(); ctx.restore();
      });
    }));
    const mid = [(c1[0] + c2[0]) / 2, (c1[1] + c2[1]) / 2];
    if (Math.abs(mid[0]) < 5 && Math.abs(mid[1]) < 3) hits.push({ x: X(mid[0]), y: Y(mid[1]), r: 16, name: `the unit square carried by e^(tA); its area is det e^(tA) = ${n2(det)}` });
    /* where the corners started, hollow */
    dot(ctx, X(1), Y(0), r1, false, 10); dot(ctx, X(0), Y(1), r2, false, 10);
    hits.push({ x: X(1), y: Y(0), r: 14, name: 'the corner (1, 0) at t = 0' }, { x: X(0), y: Y(1), r: 14, name: 'the corner (0, 1) at t = 0' });
    /* the columns, their velocities A times themselves, and the corners now */
    const vsc = MATS[mat.k < 1 ? mat.from : key].vs;
    F.faded(ctx, ar, [0, 0], () => [[c1, r1, 'first', '(1, 0)'], [c2, r2, 'second', '(0, 1)']].forEach(([c, col, nth, from]) => {
      const len = Math.hypot(c[0], c[1]) * 80;
      if (len > 4) clip(ctx, BOX, () => arrow(ctx, O[0], O[1], X(c[0]), Y(c[1]), col, 5));
      const v = [A[0] * c[0] + A[1] * c[1], A[2] * c[0] + A[3] * c[1]];
      if (Math.hypot(v[0], v[1]) * vsc * 80 > 8) {
        clip(ctx, BOX, () => arrow(ctx, X(c[0]), Y(c[1]), X(c[0] + vsc * v[0]), Y(c[1] + vsc * v[1]), dc, 4));
        hits.push({ x: X(c[0] + 0.6 * vsc * v[0]), y: Y(c[1] + 0.6 * vsc * v[1]), r: 14, name: `the velocity of the corner from ${from}: A times the ${nth} column = (${n2(v[0])}, ${n2(v[1])}), drawn at ${vsc === 0.25 ? 'a quarter of' : 'half'} its length` });
      }
      const at = pinned(ctx, BOX, X, Y, c[0], c[1], col);
      hits.push({ x: at.x, y: at.y, r: 16, name: `the ${nth} column of e^(tA) = (${n2(c[0])}, ${n2(c[1])}): where the corner ${from} has flowed` });
    }));
    hits.push({ x: O[0], y: O[1], r: 12, name: 'the origin, the critical point: it never moves' });
    /* the panel: A, and e^{tA} at the time the readout writes (the new matrix at t = 0 while it arrives) */
    const atEnd = mat.k >= 1 && back.v >= 1 && s >= m.T - 1e-9;
    const tv = mat.k < 1 ? 0 : atEnd ? m.T : Math.round(s * 100) / 100;
    const ts = atEnd && m.end ? m.end : t2(tv);
    const N = expm(m.A, tv);
    const aStr = (v) => (Number.isInteger(v) ? fmt(v, 0) : fmt(v, 1));
    text(ctx, '$\\kA =$', 1040, 240, PAL.ink, { size: 26, align: 'right', tex: true });
    bracketed(ctx, 1052, 240, m.A.map(aStr), [PAL.ink, PAL.ink], { cw: 90, rh: 38, size: 24, bc: mc });
    text(ctx, '$e^{t\\kA} =$', 1040, 420, PAL.ink, { size: 26, align: 'right', tex: true });
    const P = bracketed(ctx, 1052, 420, N.map(n2), [r1, r2], { cw: 135, rh: 48, size: 30, bc: mc, weight: 600 });
    text(ctx, 'from (1, 0)', P.mid(0), 504, r1, { size: 17, align: 'center' });
    text(ctx, 'from (0, 1)', P.mid(1), 504, r2, { size: 17, align: 'center' });
    hits.push({ x: P.mid(0), y: 420, r: 50, name: 'the first column of e^(tA), the solution of x′ = Ax with x(0) = (1, 0)' },
      { x: P.mid(1), y: 420, r: 50, name: 'the second column of e^(tA), the solution of x′ = Ax with x(0) = (0, 1)' });
    const w = WORDS[key](ts, tv, atEnd);
    headline(ctx, w.head);
    ro.set(w.ro, NOTE(m));
  }
  register(d.fig, {
    update: (dt) => {
      if (mat.k < 1 || back.v < 1) return;                       /* a flow running back holds the clock at 0 */
      const m = MATS[mat.value], was = cy.tau;
      cy.step(dt, () => m.T / RUN);
      if (was >= m.T && cy.tau === 0) {                             /* the loop came round: run this flow back unless it ended at I */
        const E = expm(m.A, m.T);
        if (Math.abs(E[0] - 1) + Math.abs(E[1]) + Math.abs(E[2]) + Math.abs(E[3] - 1) > 1e-6) { endA = m.A; endT = m.T; back.set(0); back.to(1, 900); }
      }
    },
    draw,
  });
})();
};
