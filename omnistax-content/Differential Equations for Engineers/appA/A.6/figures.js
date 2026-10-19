/* Figures for section A.6 Determinant. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['A.6'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, line, arrow, dot, text, headline, register, hover, tex, arrival, ease } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number as the readout writes it: at most two decimals, no trailing zeros, never −0 */
const num = (v) => { const r = Math.round(v * 100) / 100; return String(Object.is(r, -0) ? 0 : r); };
const numT = (v) => num(v).replace('-', '−');   /* the same in figure text, with a true minus */

/* Figure A.7: the image of the unit square under A = [a b; c d], drawn as the book draws it, in two
   panes at one scale: the unit square on the left, its image on the right, each corner joined to its
   image by a dotted correspondence arrow (symbolic). The image is the parallelogram on the columns
   (a, c) and (b, d), filled while det(A) > 0, hatched while det(A) < 0 (the axes flipped), a segment or
   a point when det(A) = 0. A short turn at the origin runs from the image of (1, 0) toward the image of
   (0, 1) in each pane: counterclockwise on the square, the other way once the orientation flips.
   The mechanism (sliders, specials, hatching, turn) is 3.2's sim-determinant-area, built once and
   copied; the two panes, the correspondence arrows and the area readout are this figure's.
   Scale 70 units to 1 in both panes. Right pane x and y −4 to 4: the corners reach ±4 at the sliders'
   extremes (a + b, c + d with each entry in [−2, 2]). Left pane x −1.1 to 2.7, y −1.1 to 2.3, enough
   for the square and its corner names, which stand for the left pane's ticks. Defaults: the book's A = [1 1; −1 1], det(A) = 2. Each slider's
   dashed circle sits where ad − bc = 0 given the other three, shown only where that value lies on the
   slider's 0.1 steps, so the readout's products stay exact. */
(function () {
  const d = sim('sim-unit-square-image', 720);
  const K = 70, OY = 390;
  const L = { ox: 170, box: { l: 92, r: 360, t: 228, b: 470 } };     /* the left pane: the unit square */
  const R = { ox: 1060, box: { l: 772, r: 1348, t: 102, b: 678 } };  /* the right pane: its image */
  const onGrid = (x) => (x !== null && isFinite(x) && Math.abs(x) <= 2 + 1e-9 && Math.abs(x * 10 - Math.round(x * 10)) < 1e-7 ? Math.round(x * 10) / 10 : null);
  const slider = (key, value, at) => ctl(d.controls, { label: key, cls: '', key, min: -2, max: 2, step: 0.1, value, unit: '', dec: 1, specials: [{ at, label: 'det = 0' }] });
  let sa = null, sb = null, sc = null, sd = null;
  const ready = () => sa && sb && sc && sd;
  sa = slider('a', 1, () => (ready() && sd.v ? onGrid((sb.v * sc.v) / sd.v) : null));
  sb = slider('b', 1, () => (ready() && sc.v ? onGrid((sa.v * sd.v) / sc.v) : null));
  sc = slider('c', -1, () => (ready() && sb.v ? onGrid((sa.v * sd.v) / sb.v) : null));
  sd = slider('d', 1, () => (ready() && sa.v ? onGrid((sb.v * sc.v) / sa.v) : null));
  [sa, sb, sc, sd].forEach((s) => s.refresh());
  const at = (pane, x, y) => [pane.ox + K * x, OY - K * y];
  let hits = [];
  hover(d.stage, () => hits);

  /* a short turn about a pane's origin from math angle t1 toward t2 the short way, its head at t2 */
  function turn(ctx, ox, t1, t2, r, col, dash) {
    let dt = t2 - t1;
    while (dt > Math.PI) dt -= 2 * Math.PI;
    while (dt <= -Math.PI) dt += 2 * Math.PI;
    const p = (t) => [ox + r * Math.cos(t), OY - r * Math.sin(t)], n = 24;
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    for (let i = 0; i <= n; i++) { const [x, y] = p(t1 + (dt * i) / n); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    const [hx, hy] = p(t1 + dt), s = Math.sign(dt), tx = -Math.sin(t1 + dt) * s, ty = -Math.cos(t1 + dt) * s;
    arrow(ctx, hx - 14 * tx, hy - 14 * ty, hx, hy, col, 2.5);
  }
  function clip(ctx, box, draw) { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); }
  function path(ctx, pts) { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); }
  /* a pane's grid and axes, with ticks at the whole numbers listed */
  function plane(ctx, pane, xs, ys) {
    const { box, ox } = pane, ink = PAL.ink, mu = PAL.muted;
    clip(ctx, box, () => {
      for (let i = -5; i <= 5; i++) {
        line(ctx, ...at(pane, i, -5), ...at(pane, i, 5), alpha(ink, 0.1), 1.5);
        line(ctx, ...at(pane, -5, i), ...at(pane, 5, i), alpha(ink, 0.1), 1.5);
      }
    });
    arrow(ctx, box.l, OY, box.r, OY, alpha(mu, 0.8), 2);
    arrow(ctx, ox, box.b, ox, box.t, alpha(mu, 0.8), 2);
    xs.forEach((v) => text(ctx, numT(v), ox + K * v, OY + 18, mu, { size: 17, align: 'center' }));
    ys.forEach((v) => text(ctx, numT(v), ox - 10, OY - K * v, mu, { size: 17, align: 'right' }));
  }
  /* a region: filled while the orientation is kept, hatched while it is flipped, a thick outline when flat */
  function region(ctx, pane, pts, D) {
    const rc = C('region');
    clip(ctx, pane.box, () => {
      if (D > 0) {
        ctx.save(); ctx.fillStyle = alpha(rc, 0.3); path(ctx, pts); ctx.fill(); ctx.restore();
      } else if (D < 0) {
        ctx.save(); ctx.fillStyle = alpha(rc, 0.12); path(ctx, pts); ctx.fill(); path(ctx, pts); ctx.clip();
        for (let s = -1400; s < 1400; s += 16) line(ctx, pane.ox + s - 600, OY + 600, pane.ox + s + 600, OY - 600, alpha(rc, 0.7), 2);
        ctx.restore();
      }
      ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = D === 0 ? 6 : 3; path(ctx, pts); ctx.stroke(); ctx.restore();
    });
  }
  /* the point at parameter t of the quadratic Bézier p → q bent through c */
  const bez = (p, c, q, t) => [(1 - t) * (1 - t) * p[0] + 2 * t * (1 - t) * c[0] + t * t * q[0], (1 - t) * (1 - t) * p[1] + 2 * t * (1 - t) * c[1] + t * t * q[1]];

  function draw() {
    const { ctx } = begin(d.c);
    const a = sa.v, b = sb.v, c = sc.v, dd = sd.v, D = Math.round((a * dd - b * c) * 100) / 100;
    const k = ease.smooth(arrival(d)), vc = C('vector'), ink = PAL.ink, mu = PAL.muted;
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];                    /* the book's order */
    const images = corners.map(([x, y]) => [a * x + b * y, c * x + dd * y]);
    plane(ctx, L, [], []);
    plane(ctx, R, [-4, -3, -2, -1, 1, 2, 3, 4], [-4, -3, -2, -1, 1, 2, 3, 4]);
    /* the unit square, its sides along (1, 0) and (0, 1), and its counterclockwise turn */
    const sq = corners.map(([x, y]) => at(L, x, y));
    region(ctx, L, sq, 1);
    arrow(ctx, ...sq[0], ...sq[1], vc, 5);
    arrow(ctx, ...sq[0], ...sq[3], vc, 5);
    turn(ctx, L.ox, 0, Math.PI / 2, 26, ink);
    /* its image, grown from the origin as the figure arrives */
    const img = images.map(([x, y]) => at(R, k * x, k * y));
    region(ctx, R, img, D);
    arrow(ctx, ...img[0], ...img[1], vc, 5);
    arrow(ctx, ...img[0], ...img[3], vc, 5);
    if (D !== 0 && k > 0.99) {
      const r = Math.min(34, 0.45 * K * Math.min(Math.hypot(a, c), Math.hypot(b, dd)));
      if (r > 9) turn(ctx, R.ox, Math.atan2(c, a), Math.atan2(dd, b), r, ink);
    }
    img.forEach(([x, y]) => dot(ctx, x, y, ink, true, 6));
    /* the dotted correspondence arrows, each corner to its image, bent over the gap between the panes */
    sq.forEach((p, i) => {
      const q = img[i], cy = Math.max(70, Math.min(p[1], q[1]) - 120 - 16 * i), cp = [(p[0] + q[0]) / 2, cy];
      const ux = q[0] - cp[0], uy = q[1] - cp[1], u = Math.hypot(ux, uy) || 1, end = [q[0] - (10 * ux) / u, q[1] - (10 * uy) / u];
      const n = 48, m = Math.max(1, Math.round(n * k)), col = alpha(ink, 0.55);
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.setLineDash([3, 7]);
      const vx = cp[0] - p[0], vy = cp[1] - p[1], v = Math.hypot(vx, vy) || 1, start = [p[0] + (10 * vx) / v, p[1] + (10 * vy) / v];
      ctx.beginPath(); ctx.moveTo(...start);
      for (let j = 1; j <= m; j++) { const [x, y] = j === n ? end : bez(start, cp, end, j / n); ctx.lineTo(x, y); }
      ctx.stroke(); ctx.restore();
      if (k > 0.99) arrow(ctx, end[0] - (14 * ux) / u, end[1] - (14 * uy) / u, end[0], end[1], col, 2);
    });
    /* the corners and their names on the left, the images on the right (dotted above), drawn over the arrows */
    const names = ['(0, 0)', '(1, 0)', '(1, 1)', '(0, 1)'], place = [[-10, 22, 'right'], [10, 22, 'left'], [10, -22, 'left'], [-10, -22, 'right']];
    sq.forEach(([x, y], i) => {
      dot(ctx, x, y, ink, true, 6);
      const [dx, dy, al] = place[i];
      text(ctx, names[i], x + dx, y + dy, ink, { size: 20, align: al, bg: PAL.panel });
    });
    /* where the corners go */
    const X0 = 190, Y0 = 560, rows = images.map(([x, y], i) => [names[i], `(${numT(x)}, ${numT(y)})`, i === 1 || i === 3 ? vc : ink]);
    text(ctx, 'corner', X0 - 30, Y0 - 44, mu, { size: 17, align: 'right' });
    text(ctx, 'its image under $\\kA$', X0 + 30, Y0 - 44, mu, { size: 17, align: 'left', tex: true });
    rows.forEach(([p, q, col], i) => {
      const y = Y0 + 36 * i;
      text(ctx, p, X0 - 30, y, ink, { size: 22, align: 'right' });
      text(ctx, '↦', X0, y, mu, { size: 22, align: 'center' });
      text(ctx, q, X0 + 30, y, col, { size: 22, align: 'left', weight: col === vc ? 600 : 400 });
    });
    /* hover names */
    const area = num(Math.abs(D));
    hits = [
      ...img.slice(1).map(([x, y], j) => ({ x, y, r: 18, name: `${names[j + 1]} ↦ ${rows[j + 1][1]}${j === 0 ? ', the first column of A' : j === 2 ? ', the second column of A' : ', the sum of the two columns'}` })),
      { x: (img[0][0] + img[2][0]) / 2, y: (img[0][1] + img[2][1]) / 2, r: 30, name: D === 0 ? 'the image of the unit square, flattened: area 0' : `the image of the unit square, area |det(A)| = ${area}` },
      { x: L.ox + K / 2, y: OY - K / 2, r: 26, name: 'the unit square, area 1' },
    ];
    /* headline and readout */
    const L1 = Math.hypot(a, c), L2 = Math.hypot(b, dd), perp = Math.abs(a * b + c * dd) < 1e-9, same = Math.abs(L1 - L2) < 1e-9;
    const shape = perp && same ? 'square' : perp ? 'rectangle' : 'parallelogram';
    const zero = a === 0 && b === 0 && c === 0 && dd === 0;
    headline(ctx, D > 0 ? `$\\det(\\kA) = ${num(D)}$: the unit square goes to a ${shape} of area ${area}, its orientation kept.`
      : D < 0 ? `$\\det(\\kA) = ${num(D)}$: the unit square goes to a ${shape} of area ${area}, the axes flipped.`
      : `$\\det(\\kA) = 0$: the unit square is ${zero ? 'crushed to the origin' : 'flattened onto a line'}, and $\\kA$ is not invertible.`);
    tex(d.readout, `\\kA = \\begin{bmatrix} ${num(a)} & ${num(b)} \\\\ ${num(c)} & ${num(dd)} \\end{bmatrix}, \\qquad \\lvert \\det(\\kA) \\rvert = \\lvert (${num(a)})(${num(dd)}) - (${num(b)})(${num(c)}) \\rvert = ${area}`);
  }
  still(d, draw);
})();
};
