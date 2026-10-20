/* Figures for section 3.2 Matrices and linear systems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, line, arrow, dot, text, headline, register, hover, tex, arrival, ease } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number as the readout writes it: at most two decimals, no trailing zeros, never −0 */
const num = (v) => { const r = Math.round(v * 100) / 100; return String(Object.is(r, -0) ? 0 : r); };
const numT = (v) => num(v).replace('-', '−');   /* the same in figure text, with a true minus */

/* Sim: the determinant as the factor by which A = [a b; c d] scales area. The unit square and the grid
   of the plane, faint, and their images under A: the grid in matrix lines, the square as the parallelogram
   on the columns (a, c) and (b, d), filled while det(A) > 0 and hatched while det(A) < 0 (the axes flipped),
   a segment or a point when det(A) = 0. A short turn at the origin runs from the first column toward the
   second: counterclockwise for the square, the other way once the orientation flips. The corners'
   images are listed beside the plane. Plane x −5 to 5, y −4 to 4 at one scale, 70 units to 1: the
   corners reach ±4 at the sliders' extremes (a + b, c + d with each entry in [−2, 2]).
   Defaults: the book's A = [1 1; −1 1], det(A) = 2. Each slider's dashed circle sits where ad − bc = 0
   given the other three, shown only where that value lies on the slider's 0.1 steps, so that the
   readout's products stay exact. */
(function () {
  const d = sim('sim-determinant-area', 690);
  const K = 70, OX = 460, OY = 380, BOX = { l: 110, r: 810, t: 100, b: 660 };
  const onGrid = (x) => (x !== null && isFinite(x) && Math.abs(x) <= 2 + 1e-9 && Math.abs(x * 10 - Math.round(x * 10)) < 1e-7 ? Math.round(x * 10) / 10 : null);
  const slider = (key, value, at) => ctl(d.controls, { label: key, cls: '', key, min: -2, max: 2, step: 0.1, value, unit: '', dec: 1, specials: [{ at, label: 'det = 0' }] });
  let sa = null, sb = null, sc = null, sd = null;
  const ready = () => sa && sb && sc && sd;
  sa = slider('a', 1, () => (ready() && sd.v ? onGrid((sb.v * sc.v) / sd.v) : null));
  sb = slider('b', 1, () => (ready() && sc.v ? onGrid((sa.v * sd.v) / sc.v) : null));
  sc = slider('c', -1, () => (ready() && sb.v ? onGrid((sa.v * sd.v) / sb.v) : null));
  sd = slider('d', 1, () => (ready() && sa.v ? onGrid((sb.v * sc.v) / sa.v) : null));
  [sa, sb, sc, sd].forEach((s) => s.refresh());
  const P = (x, y) => [OX + K * x, OY - K * y];
  let hits = [];
  hover(d.stage, () => hits);

  /* a short turn about the origin from math angle t1 toward t2 the short way, its head at t2 */
  function turn(ctx, t1, t2, r, col, dash) {
    let dt = t2 - t1;
    while (dt > Math.PI) dt -= 2 * Math.PI;
    while (dt <= -Math.PI) dt += 2 * Math.PI;
    const at = (t) => [OX + r * Math.cos(t), OY - r * Math.sin(t)], n = 24;
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    for (let i = 0; i <= n; i++) { const [x, y] = at(t1 + (dt * i) / n); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    const [hx, hy] = at(t1 + dt), s = Math.sign(dt), tx = -Math.sin(t1 + dt) * s, ty = -Math.cos(t1 + dt) * s;
    arrow(ctx, hx - 14 * tx, hy - 14 * ty, hx, hy, col, 2.5);
  }
  function clipBox(ctx, draw) { ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip(); draw(); ctx.restore(); }
  function path(ctx, pts) { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); }

  function draw() {
    const { ctx } = begin(d.c);
    const a = sa.v, b = sb.v, c = sc.v, dd = sd.v, D = Math.round((a * dd - b * c) * 100) / 100;
    const k = ease.smooth(arrival(d)), vc = C('vector'), rc = C('region'), mc = C('matrix'), ink = PAL.ink, mu = PAL.muted;
    const A = (x, y) => P(a * x + b * y, c * x + dd * y);
    /* the plane: its grid, faint, and the axes through the origin */
    clipBox(ctx, () => {
      for (let i = -8; i <= 8; i++) {
        line(ctx, ...P(i, -6), ...P(i, 6), alpha(ink, 0.1), 1.5);
        line(ctx, ...P(-8, i), ...P(8, i), alpha(ink, 0.1), 1.5);
      }
      line(ctx, BOX.l, OY, BOX.r, OY, alpha(mu, 0.8), 2);
      line(ctx, OX, BOX.t, OX, BOX.b, alpha(mu, 0.8), 2);
      /* the grid's image under A, arriving after the plane */
      ctx.save(); ctx.globalAlpha = k;
      for (let i = -10; i <= 10; i++) {
        line(ctx, ...A(i, -10), ...A(i, 10), alpha(mc, 0.3), 1.5);
        line(ctx, ...A(-10, i), ...A(10, i), alpha(mc, 0.3), 1.5);
      }
      ctx.restore();
    });
    [-4, -3, -2, -1, 1, 2, 3, 4].forEach((v) => {
      text(ctx, numT(v), OX + K * v, OY + 18, mu, { size: 17, align: 'center' });
      if (Math.abs(v) <= 3) text(ctx, numT(v), OX - 10, OY - K * v, mu, { size: 17, align: 'right' });
    });
    /* the unit square, dashed, with its counterclockwise turn from (1, 0) to (0, 1) */
    const sq = [P(0, 0), P(1, 0), P(1, 1), P(0, 1)];
    ctx.save(); ctx.fillStyle = alpha(ink, 0.06); path(ctx, sq); ctx.fill(); ctx.strokeStyle = alpha(ink, 0.55); ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]); path(ctx, sq); ctx.stroke(); ctx.restore();
    turn(ctx, 0, Math.PI / 2, 26, alpha(ink, 0.45), [5, 5]);
    /* its image: the parallelogram on the columns, grown from the square as the figure arrives */
    const lerp = (p, q) => [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k];
    const img = [A(0, 0), A(1, 0), A(1, 1), A(0, 1)].map((q, i) => lerp(sq[i], q));
    const L1 = Math.hypot(a, c), L2 = Math.hypot(b, dd);
    clipBox(ctx, () => {
      if (D > 0) {
        ctx.save(); ctx.fillStyle = alpha(rc, 0.3); path(ctx, img); ctx.fill(); ctx.restore();
      } else if (D < 0) {
        ctx.save(); ctx.fillStyle = alpha(rc, 0.12); path(ctx, img); ctx.fill(); path(ctx, img); ctx.clip();
        for (let s = -1400; s < 1400; s += 16) line(ctx, OX + s - 600, OY + 600, OX + s + 600, OY - 600, alpha(rc, 0.7), 2);
        ctx.restore();
      }
      ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = D === 0 ? 6 : 3; path(ctx, img); ctx.stroke(); ctx.restore();
    });
    /* the columns of A, the images of (1, 0) and (0, 1), growing from the origin */
    const [h1x, h1y] = P(a * k, c * k), [h2x, h2y] = P(b * k, dd * k);
    arrow(ctx, OX, OY, h1x, h1y, vc, 5);
    arrow(ctx, OX, OY, h2x, h2y, vc, 5);
    if (D !== 0 && k > 0.99) {
      const r = Math.min(34, 0.45 * K * Math.min(L1, L2));
      if (r > 9) turn(ctx, Math.atan2(c, a), Math.atan2(dd, b), r, ink);
    }
    dot(ctx, OX, OY, ink, true, 5);
    /* where the corners go */
    const X0 = 1090, Y0 = 250, rows = [
      ['(0, 0)', '(0, 0)', ink],
      ['(1, 0)', `(${numT(a)}, ${numT(c)})`, vc],
      ['(0, 1)', `(${numT(b)}, ${numT(dd)})`, vc],
      ['(1, 1)', `(${numT(a + b)}, ${numT(c + dd)})`, ink],
    ];
    text(ctx, 'corner of the square', X0 - 30, Y0 - 64, mu, { size: 17, align: 'right' });
    text(ctx, 'its image under $\\kA$', X0 + 30, Y0 - 64, mu, { size: 17, align: 'left', tex: true });
    rows.forEach(([p, q, col], i) => {
      const y = Y0 + 58 * i;
      text(ctx, p, X0 - 30, y, ink, { size: 24, align: 'right' });
      text(ctx, '↦', X0, y, mu, { size: 24, align: 'center' });
      text(ctx, q, X0 + 30, y, col, { size: 24, align: 'left', weight: col === vc ? 600 : 400 });
    });
    /* hover names */
    const area = num(Math.abs(D));
    hits = [
      { x: h1x, y: h1y, r: 22, name: `A(1, 0) = (${numT(a)}, ${numT(c)}), the first column of A` },
      { x: h2x, y: h2y, r: 22, name: `A(0, 1) = (${numT(b)}, ${numT(dd)}), the second column of A` },
      { x: (img[0][0] + img[2][0]) / 2, y: (img[0][1] + img[2][1]) / 2, r: 30, name: D === 0 ? 'the image of the unit square, flattened: area 0' : `the image of the unit square, area |det(A)| = ${area}` },
      { x: OX + K / 2, y: OY - K / 2, r: 24, name: 'the unit square, area 1' },
    ];
    /* headline and readout */
    const perp = Math.abs(a * b + c * dd) < 1e-9, same = Math.abs(L1 - L2) < 1e-9;
    const shape = perp && same ? 'square' : perp ? 'rectangle' : 'parallelogram';
    const zero = a === 0 && b === 0 && c === 0 && dd === 0;
    headline(ctx, D > 0 ? `$\\det(\\kA) = ${num(D)}$: the unit square goes to a ${shape} of area ${area}, its orientation kept.`
      : D < 0 ? `$\\det(\\kA) = ${num(D)}$: the unit square goes to a ${shape} of area ${area}, the axes flipped.`
      : `$\\det(\\kA) = 0$: the unit square is ${zero ? 'crushed to the origin' : 'flattened onto a line'}, and $\\kA$ is not invertible.`);
    tex(d.readout, `\\det(\\kA) = \\det\\begin{bmatrix} ${num(a)} & ${num(b)} \\\\ ${num(c)} & ${num(dd)} \\end{bmatrix} = (${num(a)})(${num(dd)}) - (${num(b)})(${num(c)}) = ${num(D)}`);
  }
  still(d, draw);
})();
};
