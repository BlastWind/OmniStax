/* Figures for section A.4 Subspaces, dimension, and the kernel. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['A.4'] = function (root, F) {
const { C, PAL, alpha, ctl, select, begin, axes, drag, dot, line, arrow, text, headline, labeller, register, readout, hover, tex, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a number as the readout writes it: at most two decimals, no trailing zeros, never −0 */
const num = (v) => { const r = Math.round(v * 100) / 100; return String(Object.is(r, -0) ? 0 : r); };
const numT = (v) => num(v).replace('-', '−');   /* the same in figure text, with a true minus */
const pair = (a, b) => `(${num(a)}, ${num(b)})`;
const pairT = (a, b) => `(${numT(a)}, ${numT(b)})`;
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Sim (Theorem A.4.3 and the Fredholm alternative): a 2 × 2 matrix A as a mapping from the plane of inputs x⃗
   (left) to the plane of outputs Ax⃗ (right), both −5 to 5 at one scale. On the left the kernel of A, the inputs
   sent to 0⃗; on the right the column space, the span of the columns Ae⃗₁ and Ae⃗₂, drawn as arrows. Each
   subspace is the origin alone, a line through the origin or the whole plane, in its referent colour. The
   reader picks one of three matrices (a choice: the lesson is the three cases, rank 2, 1 and 0) and drags b⃗
   on the right (−4 to 4 on its two sliders). On the left the solutions of Ax⃗ = b⃗: one vector x⃗ = A⁻¹b⃗ (rank 2,
   pinned at the edge when it leaves the frame), a dashed line parallel to the kernel when b⃗ is in the column
   space of the rank-1 matrix, none when b⃗ is outside it. The kernel's basis vectors are the ones the book's
   procedure writes, one per non-pivot column with −1 in that column's entry: (2, −1) for [1 2; 2 4], (−1, 0)
   and (0, −1) for the zero matrix. Still: nothing in the idea has a clock; a change of matrix morphs the
   columns (entries blended) and crossfades the subspaces. Dashed circles on b₁ and b₂ where b⃗ lands in the
   column space, shown only where that value lies on the sliders' 0.1 steps. The default, [1 2; 2 4] with
   b⃗ = (1, 3), has a nonzero kernel and a b⃗ outside the column space. */
(function () {
  const d = sim('sim-rank-nullity', 720);
  const MATS = {
    r2: { m: [1, 2, 3, 4], label: '[1 2; 3 4]', rank: 2, ker: { kind: 'origin' }, col: { kind: 'plane' }, basis: [] },
    r1: { m: [1, 2, 2, 4], label: '[1 2; 2 4]', rank: 1, ker: { kind: 'line', dir: [2, -1] }, col: { kind: 'line', dir: [1, 2] }, basis: [[2, -1]] },
    r0: { m: [0, 0, 0, 0], label: '[0 0; 0 0]', rank: 0, ker: { kind: 'plane' }, col: { kind: 'origin' }, basis: [[-1, 0], [0, -1]] },
  };
  const KEYS = ['r2', 'r1', 'r0'];
  const onGrid = (x) => (x !== null && isFinite(x) && Math.abs(x) <= 4 + 1e-9 && Math.abs(x * 10 - Math.round(x * 10)) < 1e-7 ? Math.round(x * 10) / 10 : null);
  let s1 = null, s2 = null;
  /* b⃗ is in the column space of [1 2; 2 4] when b₂ = 2b₁, and in that of the zero matrix only at 0⃗ */
  const atB1 = () => { if (!s1 || !s2) return null; const k = pick.value; return k === 'r1' ? onGrid(s2.v / 2) : k === 'r0' && Math.abs(s2.v) < 1e-9 ? 0 : null; };
  const atB2 = () => { if (!s1 || !s2) return null; const k = pick.value; return k === 'r1' ? onGrid(2 * s1.v) : k === 'r0' && Math.abs(s1.v) < 1e-9 ? 0 : null; };
  const pick = select(d.controls, { label: '\\kA', key: 'A', value: 'r1', aria: 'the matrix A',
    options: KEYS.map((k) => ({ value: k, label: MATS[k].label })), onInput: () => { s1.refresh(); s2.refresh(); } });
  s1 = ctl(d.controls, { label: 'b_1', cls: '', key: 'b1', min: -4, max: 4, step: 0.1, value: 1, unit: '', dec: 1, aria: 'the first entry of b', specials: [{ at: atB1, label: 'in the column space' }] });
  s2 = ctl(d.controls, { label: 'b_2', cls: '', key: 'b2', min: -4, max: 4, step: 0.1, value: 3, unit: '', dec: 1, aria: 'the second entry of b', specials: [{ at: atB2, label: 'in the column space' }] });
  s1.refresh(); s2.refresh();
  const P = drag(d, { x: s1, y: s2 });
  const ro = readout(d);
  let said = null;
  const U = 46, LEFT = { l: 120, r: 120 + 10 * U, t: 170, b: 170 + 10 * U }, RIGHT = { l: 820, r: 820 + 10 * U, t: 170, b: 170 + 10 * U };
  const tick = { nx: 10, ny: 10, fx: (v) => (Math.round(v) % 2 === 0 ? numT(v) : ''), fy: (v) => (Math.round(v) % 2 === 0 ? numT(v) : '') };
  let hits = [];
  hover(d.stage, () => hits);

  /* a subspace of the plane: the origin alone, a line through it, or the whole frame */
  function region(ctx, ax, spec, color) {
    const { X, Y, box } = ax;
    if (spec.kind === 'origin') { dot(ctx, X(0), Y(0), color, true, 11); return; }
    if (spec.kind === 'plane') {
      ctx.save(); ctx.fillStyle = alpha(color, 0.16); ctx.fillRect(box.l, box.t, box.r - box.l, box.b - box.t);
      ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.strokeRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
      return;
    }
    const [u, v] = spec.dir, L = Math.hypot(u, v), s = 9 / L;
    clip(ctx, box, () => {
      line(ctx, X(-s * u), Y(-s * v), X(s * u), Y(s * v), alpha(color, 0.3), 18);
      line(ctx, X(-s * u), Y(-s * v), X(s * u), Y(s * v), color, 4);
    });
  }
  const regionHit = (ax, spec, name, side) => {
    const { X, Y, box } = ax;
    if (spec.kind === 'origin') return { x: X(0), y: Y(0), r: 16, name };
    if (spec.kind === 'plane') return { x: side < 0 ? box.l + 40 : box.r - 40, y: box.t + 40, r: 30, name };
    const [u, v] = spec.dir, L = Math.hypot(u, v);
    return { x: X((-4 * u) / L), y: Y((-4 * v) / L), r: 18, name };
  };
  /* a TeX label beside the head (hx, hy) of a vector, along the unit direction (ux, uy) on the canvas,
     kept inside the canvas and entered in the labeller's set so the plain labels step round it */
  function texLabel(ctx, lab, s, hx, hy, ux, uy, color) {
    const w = F.measure(ctx, s, { size: 24, weight: 600, tex: true });
    const align = ux < -0.3 ? 'right' : ux > 0.3 ? 'left' : 'center';
    let x = hx + ux * 30, y = hy + uy * 30;
    const l0 = align === 'left' ? x - 7 : align === 'right' ? x - w - 7 : x - w / 2 - 7;
    x += Math.max(0, 16 - l0) - Math.max(0, l0 + w + 14 - (1400 - 16));
    y = Math.min(Math.max(y, 116), 700);
    text(ctx, s, x, y, color, { size: 24, weight: 600, tex: true, align, bg: PAL.panel });
    const l = align === 'left' ? x - 7 : align === 'right' ? x - w - 7 : x - w / 2 - 7;
    lab.place({ l, r: l + w + 14, t: y - 18, b: y + 18 });
  }
  const arrowIf = (ctx, ax, x, y, color, w) => { if (Math.hypot(x, y) > 0.05) arrow(ctx, ax.X(0), ax.Y(0), ax.X(x), ax.Y(y), color, w); };

  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), mc = C('matrix'), kc = F.ref('kernel-of-a'), cc = F.ref('column-space-of-a');
    const key = pick.value, M = MATS[key], m = pick.mix((k) => MATS[k].m);
    const b1 = Math.round(s1.v * 10) / 10, b2 = Math.round(s2.v * 10) / 10;
    const [a, bb, c, dd] = M.m;
    /* the Fredholm case and the solutions of Ax⃗ = b⃗ for the matrix chosen, from the numbers shown */
    const inCol = M.rank === 2 ? true : M.rank === 1 ? Math.abs(b2 - 2 * b1) < 1e-9 : Math.abs(b1) < 1e-9 && Math.abs(b2) < 1e-9;
    const x1 = -2 * b1 + b2, x2 = 1.5 * b1 - 0.5 * b2;   /* A⁻¹b⃗ for [1 2; 3 4], A⁻¹ = [−2 1; 3/2 −1/2] */
    hits = [];
    const lines = headline(ctx, M.rank === 2
      ? `Only $\\kveczero$ solves $\\kA\\kvecx = \\kveczero$, so $\\kA\\kvecx = \\kvecb$ has exactly one solution, $\\kvecx = ${pair(x1, x2)}$.`
      : M.rank === 1
        ? `$\\kA\\kvecx = \\kveczero$ has the nonzero solution $(2, -1)$, and $\\kvecb = ${pair(b1, b2)}$ is ${inCol ? 'in the column space: $\\kA\\kvecx = \\kvecb$ has a whole line of solutions.' : 'not in the column space: $\\kA\\kvecx = \\kvecb$ has no solution.'}`
        : inCol
          ? `Every $\\kvecx$ solves $\\kA\\kvecx = \\kveczero$, and $\\kvecb = ${pair(b1, b2)}$ is the one vector of the column space.`
          : `Every $\\kvecx$ solves $\\kA\\kvecx = \\kveczero$, and $\\kvecb = ${pair(b1, b2)}$ is not in the column space: $\\kA\\kvecx = \\kvecb$ has no solution.`);
    const lab = labeller(ctx, 720, { headline: lines });

    /* the two frames, their titles and the mapping between them */
    const L = axes(ctx, LEFT, [-5, 5], [-5, 5], tick), R = axes(ctx, RIGHT, [-5, 5], [-5, 5], tick);
    text(ctx, 'inputs $\\kvecx$', LEFT.l, LEFT.t - 30, PAL.ink, { size: 20, weight: 600, tex: true });
    text(ctx, 'outputs $\\kA\\kvecx$', RIGHT.l, RIGHT.t - 30, PAL.ink, { size: 20, weight: 600, tex: true });
    const swatch = (box, color, name) => {
      const w = F.measure(ctx, name, { size: 20 });
      text(ctx, name, box.r, box.t - 30, PAL.ink, { size: 20, align: 'right' });
      ctx.save(); ctx.fillStyle = alpha(color, 0.45); ctx.strokeStyle = color; ctx.lineWidth = 2;
      ctx.fillRect(box.r - w - 34, box.t - 39, 22, 18); ctx.strokeRect(box.r - w - 34, box.t - 39, 22, 18); ctx.restore();
    };
    swatch(LEFT, kc, 'kernel of A'); swatch(RIGHT, cc, 'column space of A');
    const midY = (LEFT.t + LEFT.b) / 2;
    arrow(ctx, LEFT.r + 50, midY, RIGHT.l - 50, midY, PAL.ink, 4);
    text(ctx, '$\\kA$', (LEFT.r + RIGHT.l) / 2, midY - 30, mc, { size: 28, align: 'center', tex: true });
    lab.place({ l: LEFT.r + 40, r: RIGHT.l - 40, t: midY - 52, b: midY + 12 });

    /* the subspaces of each matrix, crossfading on a change of matrix */
    KEYS.forEach((k) => {
      pick.only(ctx, k, () => { region(ctx, L, MATS[k].ker, kc); region(ctx, R, MATS[k].col, cc); }, [0, 0]);
    });
    const kName = M.ker.kind === 'origin' ? 'the kernel of A: 0⃗ alone' : M.ker.kind === 'plane' ? 'the kernel of A: the whole plane, since A sends every x⃗ to 0⃗' : 'the kernel of A: the line of every multiple of (2, −1)';
    const cName = M.col.kind === 'origin' ? 'the column space of A: 0⃗ alone' : M.col.kind === 'plane' ? 'the column space of A: the whole plane, the span of (1, 3) and (2, 4)' : 'the column space of A: the line spanned by (1, 2), since (2, 4) = 2(1, 2)';
    hits.push(regionHit(L, M.ker, kName, -1), regionHit(R, M.col, cName, 1));

    /* the kernel's basis vectors, as the procedure writes them */
    KEYS.forEach((k) => pick.only(ctx, k, () => MATS[k].basis.forEach(([u, v]) => arrowIf(ctx, L, u, v, vc, 5)), [0, 0]));
    M.basis.forEach(([u, v]) => {
      hits.push({ x: L.X(u), y: L.Y(v), r: 18, name: `${pairT(u, v)}, a basis vector of the kernel: A${pairT(u, v)} = 0⃗` });
      lab.add(pairT(u, v), L.X(u), L.Y(v), u / Math.hypot(u, v), -v / Math.hypot(u, v), vc, 20, 24);
    });

    /* the columns of A, Ae⃗₁ and Ae⃗₂, morphing with the matrix */
    const cols = [[m[0], m[2]], [m[1], m[3]]];
    clip(ctx, R.box, () => { arrowIf(ctx, R, cols[1][0], cols[1][1], alpha(vc, 0.75), 4); arrowIf(ctx, R, cols[0][0], cols[0][1], alpha(vc, 0.75), 4); });

    /* b⃗, the reader's, and the solutions of Ax⃗ = b⃗ on the left */
    arrowIf(ctx, R, b1, b2, vc, 6);
    const pb = P.draw(ctx, R, vc);
    if (pb) {
      const n = Math.hypot(b1, b2);
      texLabel(ctx, lab, '$\\kvecb$', pb.x, pb.y, n > 0.05 ? b1 / n : 0.7, n > 0.05 ? -b2 / n : -0.7, vc);
      hits.push({ x: pb.x, y: pb.y, r: 20, name: `b⃗ = ${pairT(b1, b2)}, ${inCol ? 'in' : 'not in'} the column space of A` });
    }
    pick.only(ctx, 'r2', () => {
      const inside = Math.abs(x1) <= 5 && Math.abs(x2) <= 5;
      if (inside) arrowIf(ctx, L, x1, x2, vc, 5);
      else clip(ctx, L.box, () => line(ctx, L.X(0), L.Y(0), L.X(x1), L.Y(x2), vc, 5));
      const p = pinned(ctx, L.box, L.X, L.Y, x1, x2, vc, inside ? undefined : pairT(x1, x2));
      if (key === 'r2') {
        const n = Math.hypot(x1, x2);
        if (inside) texLabel(ctx, lab, '$\\kvecx$', p.x, p.y, n > 0.05 ? x1 / n : 0.7, n > 0.05 ? -x2 / n : -0.7, vc);
        hits.push({ x: p.x, y: p.y, r: 18, name: `x⃗ = A⁻¹b⃗ = ${pairT(x1, x2)}, the one solution of Ax⃗ = b⃗` });
      }
    }, [0, 0]);
    if (M.rank === 1 && inCol) {
      /* x₁ + 2x₂ = b₁: the kernel's line moved to pass through (b₁, 0) */
      clip(ctx, L.box, () => line(ctx, L.X(b1 - 18), L.Y(9), L.X(b1 + 18), L.Y(-9), vc, 4, [12, 9]));
      hits.push({ x: L.X(b1 - 4), y: L.Y(2), r: 16, name: `every x⃗ on this line solves Ax⃗ = b⃗: the kernel's line moved to pass through ${pairT(b1, 0)}` });
    }
    /* the columns named last, so their labels step round b⃗'s */
    if (M.rank > 0) {
      [[a, c], [bb, dd]].forEach(([u, v], i) => {
        const n = Math.hypot(u, v), side = i === 0 ? -1 : 1;
        lab.add(`column ${i + 1}`, R.X(u), R.Y(v), ((side * v) / n) * 0.8 + (u / n) * 0.6, ((side * u) / n) * 0.8 - (v / n) * 0.6, vc, 18, 26);
        hits.push({ x: R.X(u), y: R.Y(v), r: 16, name: `Ae⃗${i ? '₂' : '₁'} = ${pairT(u, v)}, the ${i ? 'second' : 'first'} column of A` });
      });
    }
    lab.flush();

    /* readout: the augmented matrix reduced, and the count n = r + k under it */
    const rr = M.rank === 2 ? [[1, 0, x1], [0, 1, x2]]
      : M.rank === 1 ? (inCol ? [[1, 2, b1], [0, 0, 0]] : [[1, 2, 0], [0, 0, 1]])
        : (inCol ? [[0, 0, 0], [0, 0, 0]] : [[0, 0, 1], [0, 0, 0]]);
    const aug = (rows) => `\\left[\\begin{array}{cc|c} ${rows.map((r) => r.map(num).join(' & ')).join(' \\\\ ')} \\end{array}\\right]`;
    tex(ro.formula, `[\\,\\kA \\mid \\kvecb\\,] = ${aug([[a, bb, b1], [c, dd, b2]])} \\;\\to\\; ${aug(rr)}`);
    const k = 2 - M.rank;
    const note = `Rank $r = ${M.rank}$ and nullity $k = ${k}$, so $n = r + k$ reads $2 = ${M.rank} + ${k}$: ` + (M.rank === 2
      ? 'both columns hold pivots, and the kernel is $\\{\\kveczero\\}$.'
      : M.rank === 1 ? 'the second column holds no pivot and gives the kernel its one basis vector $(2, -1)$.'
        : 'no column holds a pivot, and the kernel has the basis $(-1, 0)$, $(0, -1)$.');
    if (note !== said) { said = note; ro.note.textContent = note; F.renderMath(ro.note); }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
