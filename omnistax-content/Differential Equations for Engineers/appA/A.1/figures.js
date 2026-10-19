/* Figures for section A.1 Vectors, mappings, and matrices. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['A.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, drag, line, arrow, dot, text, headline, register, readout, hover, tex, arrival, ease, pinned, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number as the readout writes it: at most two decimals, no trailing zeros, never −0 */
const r2 = (v) => { const r = Math.round(v * 100) / 100; return Object.is(r, -0) ? 0 : r; };
const r1 = (v) => { const r = Math.round(v * 10) / 10; return Object.is(r, -0) ? 0 : r; };
const num = (v) => String(r2(v));
const numT = (v) => num(v).replace('-', '−');            /* the same in figure text, with a true minus */
const par = (v) => (r2(v) < 0 ? `(${num(v)})` : num(v));  /* a negative factor or term in parentheses */
const col = (a, b) => `\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix}`;
const pt = (v) => `(${numT(v[0])}, ${numT(v[1])})`;
const ptT = (v) => `(${num(v[0])}, ${num(v[1])})`;
const tag = (ctx, s, x, y, color, align = 'center') => text(ctx, s, x, y, color, { size: 22, weight: 600, tex: true, bg: PAL.panel, align });
/* the magnitude √s of a vector whose squared components add to s, as TeX: exact where the root is, else to two places */
function root(s, times = 1) {
  const S = Math.round(s * 1e4) / 1e4, v = times * Math.sqrt(S), exact = Math.abs(r2(v) - v) < 1e-9;
  const pre = times === 1 ? '' : num(times);
  if (S === 0) return '0';
  return exact && Number.isInteger(Math.sqrt(S)) ? `${pre}\\sqrt{${S}} = ${num(v)}` : `${pre}\\sqrt{${S}} ${exact ? '=' : '\\approx'} ${num(v)}`;
}
/* An arrow of the plane from t to h on axes ax, clipped to its box; a head past the box is pinned at the edge. */
function vec(ctx, ax, t, h, color, w = 5, dash, a = 1) {
  if (!(a > 0.001)) return;
  const { X, Y, box } = ax, x1 = X(t[0]), y1 = Y(t[1]), x2 = X(h[0]), y2 = Y(h[1]), L = Math.hypot(x2 - x1, y2 - y1);
  if (!(L > 2)) return;
  ctx.save(); ctx.globalAlpha *= a;
  ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, hl = Math.min(18, L);
  line(ctx, x1, y1, x2 - ux * hl * 0.6, y2 - uy * hl * 0.6, color, w, dash);
  arrow(ctx, x2 - ux * hl, y2 - uy * hl, x2, y2, color, w);
  ctx.restore();
  if (x2 < box.l || x2 > box.r || y2 < box.t || y2 > box.b) { ctx.save(); ctx.globalAlpha *= a; pinned(ctx, box, X, Y, h[0], h[1], color); ctx.restore(); }
}
/* a label beside the middle of the arrow t → h, on the side away from the point `away` (in the plane) */
function beside(ctx, ax, t, h, away, s, color) {
  const { X, Y, box } = ax, x1 = X(t[0]), y1 = Y(t[1]), x2 = X(h[0]), y2 = Y(h[1]);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, L = Math.hypot(x2 - x1, y2 - y1) || 1;
  let nx = -(y2 - y1) / L, ny = (x2 - x1) / L;
  if (L < 3) { nx = -0.7; ny = -0.7; }
  const ax0 = X(away[0]), ay0 = Y(away[1]);
  if ((mx - ax0) * nx + (my - ay0) * ny < 0) { nx = -nx; ny = -ny; }
  const lx = Math.min(Math.max(mx + nx * 34, box.l + 40), box.r - 40), ly = Math.min(Math.max(my + ny * 26, box.t + 16), box.b - 16);
  tag(ctx, s, lx, ly, color, nx > 0.55 ? 'left' : nx < -0.55 ? 'right' : 'center');
}
/* a label just past the head of the arrow t → h, along its direction */
function past(ctx, ax, t, h, s, color, gap = 30) {
  const { X, Y, box } = ax, x1 = X(t[0]), y1 = Y(t[1]), x2 = X(h[0]), y2 = Y(h[1]), L = Math.hypot(x2 - x1, y2 - y1) || 1;
  const ux = L < 3 ? 0.6 : (x2 - x1) / L, uy = L < 3 ? -0.6 : (y2 - y1) / L;
  const lx = Math.min(Math.max(x2 + ux * gap, box.l + 30), box.r - 30), ly = Math.min(Math.max(y2 + uy * (gap - 6), box.t + 14), box.b - 14);
  tag(ctx, s, lx, ly, color, ux > 0.55 ? 'left' : ux < -0.55 ? 'right' : 'center');
}
/* the grip ring of a head the reader can drag */
const ring = (ctx, ax, p, color) => { const { X, Y, box } = ax, x = X(p[0]), y = Y(p[1]); if (x < box.l || x > box.r || y < box.t || y > box.b) return; ctx.save(); ctx.strokeStyle = alpha(color, 0.35); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 17, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); };
/* axes that hide a grip: its point lands nowhere, so it cannot be picked */
const nowhere = (ax) => ({ ...ax, X: () => NaN, Y: () => NaN });
const clear = (c) => alpha(c, 0);

/* Figure A.1 + A.2 + A.3 + A.4: a vector as an arrow, and adding, subtracting and scaling vectors.
   One x₁x₂ plane at one scale, 46 units to 1, x₁ from −12 to 12 and x₂ from −6 to 6: the components of
   x⃗ and y⃗ run from −4 to 4, so a sum or difference reaches 8 and αx⃗ (α from −3 to 3) reaches 12, and
   a head past the box is pinned at its edge. The operation is a choice; choosing one sets y⃗ and α to
   the book's picture for it: x⃗ = (1, 2) alone (A.1), (1, 2) + (2, −3) = (3, −1) (A.2), (1, 2) − (−2, 1)
   = (3, 1) (A.3), 2x⃗ and −1.5x⃗ with copies of x⃗ laid alongside for scale (A.4). The book's line
   styles are kept: x⃗ dotted, y⃗ dashed, the result solid (x⃗ alone is solid, as in Figure A.1).
   The heads of x⃗ and y⃗ are dragged (y⃗'s grip is the head of its drawn arrow when adding, its tail
   when subtracting, since there its head sits on the head of x⃗). A change of operation bends the
   picture into the next (the result's head and y⃗'s place blend); the readout writes the component
   rule with the live numbers. Still: a vector has no clock. */
(function () {
  const d = sim('sim-vector-arithmetic', 760);
  const U = 46, OX = 700, OY = 406, BOX = { l: OX - 12 * U, r: OX + 12 * U, t: OY - 6 * U, b: OY + 6 * U };
  const BOOK = { add: [2, -3], sub: [-2, 1] };
  let x1 = null, x2 = null, y1 = null, y2 = null, al = null;
  const op = choice(d.controls, {
    label: 'operation', key: 'op', value: 'arrow',
    options: [{ value: 'arrow', label: 'x⃗' }, { value: 'add', label: 'x⃗ + y⃗' }, { value: 'sub', label: 'x⃗ − y⃗' }, { value: 'scale', label: 'αx⃗' }],
    onInput: (v) => {
      if (BOOK[v]) { y1.set(BOOK[v][0]); y2.set(BOOK[v][1]); }
      if (v === 'scale') al.set(2);
      [y1, y2].forEach((s) => s.show(v === 'add' || v === 'sub'));
      al.show(v === 'scale');
    },
  });
  const comp = (label, key, value, aria) => ctl(d.controls, { label, cls: '', key, min: -4, max: 4, step: 0.1, value, unit: '', dec: 1, aria });
  x1 = comp('x_1', 'x1', 1, 'the first component x₁ of x⃗');
  x2 = comp('x_2', 'x2', 2, 'the second component x₂ of x⃗');
  y1 = comp('y_1', 'y1', 2, 'the first component y₁ of y⃗');
  y2 = comp('y_2', 'y2', -3, 'the second component y₂ of y⃗');
  al = ctl(d.controls, { label: '\\alpha', cls: '', key: 'alpha', min: -3, max: 3, step: 0.1, value: 2, unit: '', dec: 1, aria: 'the scalar α', detents: [-3, -1.5, 2, 3], specials: [{ at: -1, label: '−x⃗' }] });
  [y1, y2, al].forEach((s) => s.show(false, { ms: 0 }));
  const PX = drag(d, { x: x1, y: x2 }), PY = drag(d, { x: y1, y: y2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), ink = PAL.ink, mu = PAL.muted;
    const v = op.value, g = ease.smooth(arrival(d)), settled = ease.smooth(op.k);
    const x = [r1(x1.v), r1(x2.v)], y = [r1(y1.v), r1(y2.v)], a = r1(al.v);
    const resOf = (o) => (o === 'add' ? [r2(x[0] + y[0]), r2(x[1] + y[1])] : o === 'sub' ? [r2(x[0] - y[0]), r2(x[1] - y[1])] : o === 'scale' ? [r2(a * x[0]), r2(a * x[1])] : x);
    const res = resOf(v);
    hits = [];
    /* the plane: a faint unit grid under the axes */
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    for (let i = -12; i <= 12; i++) line(ctx, OX + i * U, BOX.t, OX + i * U, BOX.b, alpha(ink, 0.06), 1.5);
    for (let j = -6; j <= 6; j++) line(ctx, BOX.l, OY - j * U, BOX.r, OY - j * U, alpha(ink, 0.06), 1.5);
    ctx.restore();
    const ax = axes(ctx, BOX, [-12, 12], [-6, 6], { xl: 'x_1', yl: 'x_2', nx: 12, ny: 6, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    const S = (p) => [g * p[0], g * p[1]];
    /* x⃗ alone: the right triangle of its components, from which the magnitude comes */
    op.only(ctx, 'arrow', () => {
      if (Math.abs(x[0]) < 0.25 || Math.abs(x[1]) < 0.25) return;
      line(ctx, ax.X(0), ax.Y(0), ax.X(g * x[0]), ax.Y(0), alpha(mu, 0.9), 2.5, [4, 8]);
      line(ctx, ax.X(g * x[0]), ax.Y(0), ax.X(g * x[0]), ax.Y(g * x[1]), alpha(mu, 0.9), 2.5, [4, 8]);
      if (g > 0.99) {
        tag(ctx, `$x_1 = ${num(x[0])}$`, ax.X(x[0] / 2), ax.Y(0) + (x[1] > 0 ? 24 : -24), mu);
        tag(ctx, `$x_2 = ${num(x[1])}$`, ax.X(x[0]) + (x[0] > 0 ? 14 : -14), ax.Y(x[1] / 2), mu, x[0] > 0 ? 'left' : 'right');
      }
      hits.push({ x: ax.X(x[0] / 2), y: ax.Y(0), r: 16, name: `x₁ = ${numT(x[0])}: ${Math.abs(x[0]) === 1 ? 'one unit' : `${numT(Math.abs(x[0]))} units`} ${x[0] > 0 ? 'to the right' : 'to the left'}` });
      hits.push({ x: ax.X(x[0]), y: ax.Y(x[1] / 2), r: 16, name: `x₂ = ${numT(x[1])}: ${Math.abs(x[1]) === 1 ? 'one unit' : `${numT(Math.abs(x[1]))} units`} ${x[1] > 0 ? 'up' : 'down'}` });
    });
    /* αx⃗: copies of x⃗ laid alongside the result, on the side it points to, for scale */
    op.only(ctx, 'scale', () => {
      const n = Math.min(3, Math.ceil(Math.abs(a) - 1e-9)), s = a < 0 ? -1 : 1;
      const dx = ax.X(x[0]) - ax.X(0), dy = ax.Y(x[1]) - ax.Y(0), L = Math.hypot(dx, dy);
      if (!(L > 4)) return;
      const ox = (-dy / L) * 18, oy = (dx / L) * 18;
      for (let i = 0; i < n; i++) {
        const t0 = s > 0 ? i : -(i + 1), t1 = t0 + 1;
        const tx = ax.X(t0 * x[0] * g) + ox, ty = ax.Y(t0 * x[1] * g) + oy, hx = ax.X(t1 * x[0] * g) + ox, hy = ax.Y(t1 * x[1] * g) + oy;
        ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
        arrow(ctx, tx, ty, hx, hy, alpha(vc, 0.4), 3);
        ctx.restore();
        hits.push({ x: (tx + hx) / 2, y: (ty + hy) / 2, r: 14, name: `a copy of x⃗ = ${pt(x)}, laid alongside for scale` });
      }
    });
    /* y⃗: from the head of x⃗ when adding; ending at the head of x⃗ when subtracting */
    const yOf = (o) => (o === 'sub' ? [x[0] - y[0], x[1] - y[1], x[0], x[1], 1] : [x[0], x[1], x[0] + y[0], x[1] + y[1], o === 'add' ? 1 : 0]);
    const [yt0, yt1, yh0, yh1, ya] = op.mix(yOf);
    vec(ctx, ax, S([yt0, yt1]), S([yh0, yh1]), vc, 4, [14, 9], ya);
    /* x⃗: solid alone, dotted as an operand */
    const solid = op.mix((o) => (o === 'arrow' ? 1 : 0));
    vec(ctx, ax, [0, 0], S(x), vc, 5, undefined, solid);
    vec(ctx, ax, [0, 0], S(x), vc, 4, [3, 7], 1 - solid);
    /* the result, solid, its head bending from the last operation's to this one's */
    const R = op.mix(resOf);
    vec(ctx, ax, [0, 0], S(R), vc, 5, undefined, 1 - solid);
    dot(ctx, ax.X(0), ax.Y(0), ink, true, 5);
    /* the grips: the head of x⃗, and y⃗'s end that is free */
    PX.draw(ctx, ax, clear(vc));
    ring(ctx, ax, x, vc);
    const yGrip = v === 'add' ? { ...ax, X: (q) => ax.X(q + x[0]), Y: (q) => ax.Y(q + x[1]), xr: [-12 - x[0], 12 - x[0]], yr: [-6 - x[1], 6 - x[1]] }
      : v === 'sub' ? { ...ax, X: (q) => ax.X(x[0] - q), Y: (q) => ax.Y(x[1] - q), xr: [x[0] + 12, x[0] - 12], yr: [x[1] + 6, x[1] - 6] } : nowhere(ax);
    PY.draw(ctx, yGrip, clear(vc));
    if (v === 'add') ring(ctx, ax, [x[0] + y[0], x[1] + y[1]], vc);
    if (v === 'sub') ring(ctx, ax, [x[0] - y[0], x[1] - y[1]], vc);
    /* labels, once the picture has settled into its operation */
    ctx.save(); ctx.globalAlpha *= settled * g;
    if (v === 'arrow') past(ctx, ax, [0, 0], x, '$\\kvecx$', vc);
    if (v === 'add' || v === 'sub') {
      const c = [(2 * x[0] + res[0]) / 3, (2 * x[1] + res[1]) / 3];
      beside(ctx, ax, [0, 0], x, c, '$\\kvecx$', vc);
      if (v === 'add') beside(ctx, ax, x, res, c, '$\\kvecy$', vc); else beside(ctx, ax, res, x, c, '$\\kvecy$', vc);
      beside(ctx, ax, [0, 0], res, c, v === 'add' ? '$\\kvecx + \\kvecy$' : '$\\kvecx - \\kvecy$', vc);
    }
    if (v === 'scale') {
      const dx = ax.X(x[0]) - ax.X(0), dy = ax.Y(x[1]) - ax.Y(0), L = Math.hypot(dx, dy) || 1;
      const off = [-dy / L, dx / L];
      /* x⃗ is named on the far side from the copies, αx⃗ past its head */
      const far = [ax.X(x[0] / 2) - off[0] * 34, ax.Y(x[1] / 2) - off[1] * 30];
      tag(ctx, '$\\kvecx$', far[0], far[1], vc, -off[0] > 0.55 ? 'left' : -off[0] < -0.55 ? 'right' : 'center');
      const nm = a === -1 ? '-\\kvecx' : `${num(a)}\\kvecx`;
      if (a === 0) tag(ctx, '$0\\kvecx = \\vec{0}$', ax.X(0) - 20, ax.Y(0) + 26, vc, 'right');
      else past(ctx, ax, [0, 0], res, `$${nm}$`, vc, Math.abs(a) < 1 ? 46 : 30);
    }
    ctx.restore();
    /* hover names */
    hits.push({ x: ax.X(x[0]), y: ax.Y(x[1]), r: 20, name: `x⃗ = ${pt(x)}, magnitude ${(Math.hypot(x[0], x[1])).toFixed(2)}; drag its head` });
    if (v === 'add') {
      hits.push({ x: ax.X(x[0] + y[0] / 2), y: ax.Y(x[1] + y[1] / 2), r: 16, name: `y⃗ = ${pt(y)}, drawn from the head of x⃗; drag its head` });
      hits.push({ x: ax.X(res[0] / 2), y: ax.Y(res[1] / 2), r: 16, name: `x⃗ + y⃗ = ${pt(res)}, from the origin to the head of y⃗` });
    }
    if (v === 'sub') {
      hits.push({ x: ax.X(x[0] - y[0] / 2), y: ax.Y(x[1] - y[1] / 2), r: 16, name: `y⃗ = ${pt(y)}, drawn ending at the head of x⃗: travelling backwards along it reaches x⃗ − y⃗; drag its tail` });
      hits.push({ x: ax.X(res[0] / 2), y: ax.Y(res[1] / 2), r: 16, name: `x⃗ − y⃗ = ${pt(res)} = x⃗ + (−y⃗)` });
    }
    if (v === 'scale' && a !== 0) hits.push({ x: ax.X(res[0]), y: ax.Y(res[1]), r: 18, name: `${numT(a)}x⃗ = ${pt(res)}` });
    /* headline and readout */
    const sq = (p) => r2(p[0] * p[0] + p[1] * p[1]);
    if (v === 'arrow') {
      headline(ctx, `$\\kvecx = ${ptT(x)}$ is the arrow from the origin to the point $${ptT(x)}$, of magnitude $\\lVert \\kvecx \\rVert = ${root(sq(x))}$.`);
      ro.set(`\\lVert \\kvecx \\rVert = \\sqrt{${par(x[0])}^2 + ${par(x[1])}^2} = ${root(sq(x))}`, '', { form: v });
    } else if (v === 'add' || v === 'sub') {
      const s = v === 'add' ? '+' : '-';
      headline(ctx, `Along $\\kvecx$, then ${v === 'add' ? '' : 'backwards '}along $\\kvecy$: $\\kvecx ${s} \\kvecy = ${ptT(res)}$, of magnitude $${root(sq(res))}$.`);
      ro.set(`\\kvecx ${s} \\kvecy = ${col(num(x[0]), num(x[1]))} ${s} ${col(num(y[0]), num(y[1]))} = ${col(`${num(x[0])} ${s} ${par(y[0])}`, `${num(x[1])} ${s} ${par(y[1])}`)} = ${col(num(res[0]), num(res[1]))}`, '', { form: v });
    } else {
      const m = Math.abs(a), xs = sq(x);
      const what = a === 0 ? 'the zero vector, of magnitude 0' : a === 1 ? 'the same vector' : a === -1 ? `the reverse of $\\kvecx$, the same magnitude`
        : a > 0 ? `the same direction as $\\kvecx$, ${num(m)} times the magnitude` : `the opposite direction, ${num(m)} times the magnitude`;
      const nm = a === -1 ? '-\\kvecx' : `${num(a)}\\kvecx`;
      headline(ctx, `$${nm} = ${ptT(res)}$: ${what}.`);
      ro.set(`${nm} = ${a === -1 ? '-' : num(a)}${col(num(x[0]), num(x[1]))} = ${col(`${num(a)}(${num(x[0])})`, `${num(a)}(${num(x[1])})`)} = ${col(num(res[0]), num(res[1]))}`,
        `$\\lVert ${nm} \\rVert = |${num(a)}|\\,\\lVert \\kvecx \\rVert = ${m === 0 || xs === 0 ? '0' : root(xs, m)}$`, { form: v });
    }
  }
  still(d, draw);
})();

/* Sim: a matrix tells where e⃗₁ and e⃗₂ go, and linearity tells where everything else goes. Two planes:
   the input, x₁ and x₂ from −3 to 3 at 400 units across, with e⃗₁, e⃗₂ and x⃗ = x₁e⃗₁ + x₂e⃗₂ drawn as its
   two steps; the output, from −10 to 10 at 560 units across, with Ae⃗₁ and Ae⃗₂ (the columns of A) and
   Ax⃗ = x₁Ae⃗₁ + x₂Ae⃗₂ drawn as the same two steps along the columns, over the image of the input's unit
   grid. The matrix is a choice: the book's M = [1 2; 3 4] (the default), the doubling F(x⃗) = 2x⃗ as
   [2 0; 0 2], and the mapping of Exercise A.1.10, [2 3; −1 3]; a change bends the output picture from
   the old matrix to the new. x₁, x₂ run from −2 to 2 (dragged on the input plane or on their sliders),
   the book's (−2, 0.1) the default, giving Mx⃗ = (−1.8, −5.6); Ax⃗ reaches 14 at the extremes of M and is
   pinned at the edge past 10. Still: nothing here has a clock. */
(function () {
  const d = sim('sim-matrix-mapping', 760);
  const IN = { l: 70, r: 470, t: 200, b: 600 }, OUT = { l: 780, r: 1340, t: 120, b: 680 };
  const MATS = { m: [1, 2, 3, 4], double: [2, 0, 0, 2], ex10: [2, 3, -1, 3] };
  const pick = choice(d.controls, { label: '\\kA', key: 'matrix', value: 'm', options: [{ value: 'm', label: '[1 2; 3 4]' }, { value: 'double', label: '[2 0; 0 2]' }, { value: 'ex10', label: '[2 3; −1 3]' }] });
  const x1 = ctl(d.controls, { label: 'x_1', cls: '', key: 'x1', min: -2, max: 2, step: 0.1, value: -2, unit: '', dec: 1, aria: 'the first component x₁ of x⃗' });
  const x2 = ctl(d.controls, { label: 'x_2', cls: '', key: 'x2', min: -2, max: 2, step: 0.1, value: 0.1, unit: '', dec: 1, aria: 'the second component x₂ of x⃗' });
  const P = drag(d, { x: x1, y: x2 });
  let hits = [];
  hover(d.stage, () => hits);
  const mtex = (m) => `\\begin{bmatrix} ${num(m[0])} & ${num(m[1])} \\\\ ${num(m[2])} & ${num(m[3])} \\end{bmatrix}`;

  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), mc = C('matrix'), ink = PAL.ink, mu = PAL.muted;
    const g = ease.smooth(arrival(d));
    const x = [r1(x1.v), r1(x2.v)], A = MATS[pick.value], Am = pick.mix((v) => MATS[v]);
    const map = (m, p) => [m[0] * p[0] + m[1] * p[1], m[2] * p[0] + m[3] * p[1]];
    hits = [];
    const axIn = axes(ctx, IN, [-3, 3], [-3, 3], { xl: 'x_1', yl: 'x_2', nx: 6, ny: 6, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    const axOut = axes(ctx, OUT, [-10, 10], [-10, 10], { nx: 4, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    text(ctx, 'the input: $\\kvecx$ and $\\kvece_1$, $\\kvece_2$', (IN.l + IN.r) / 2, IN.t - 62, mu, { size: 20, align: 'center', tex: true });
    text(ctx, 'the output: $\\kA\\kvecx$ and the columns of $\\kA$', (OUT.l + OUT.r) / 2, OUT.t - 22, mu, { size: 20, align: 'center', tex: true });
    /* the image of the input's unit grid: the grid lines x₁ = i and x₂ = i for |i| ≤ 3, carried by A */
    ctx.save(); ctx.beginPath(); ctx.rect(OUT.l, OUT.t, OUT.r - OUT.l, OUT.b - OUT.t); ctx.clip(); ctx.globalAlpha *= g;
    for (let i = -3; i <= 3; i++) {
      const a1 = map(Am, [i, -3]), b1 = map(Am, [i, 3]), a2 = map(Am, [-3, i]), b2 = map(Am, [3, i]);
      line(ctx, axOut.X(a1[0]), axOut.Y(a1[1]), axOut.X(b1[0]), axOut.Y(b1[1]), alpha(mc, i ? 0.22 : 0.4), i ? 1.5 : 2);
      line(ctx, axOut.X(a2[0]), axOut.Y(a2[1]), axOut.X(b2[0]), axOut.Y(b2[1]), alpha(mc, i ? 0.22 : 0.4), i ? 1.5 : 2);
    }
    ctx.restore();
    hits.push({ x: axOut.X(map(Am, [1, 1])[0] * 0.5), y: axOut.Y(map(Am, [1, 1])[1] * 0.5), r: 12, name: 'a cell of the input grid carried by A: a parallelogram on the columns' });
    /* the mapping between the planes */
    const MX = (IN.r + OUT.l) / 2, MY = 400;
    arrow(ctx, IN.r + 34, MY, OUT.l - 34, MY, mc, 4);
    text(ctx, `$\\kA = ${mtex(A)}$`, MX, MY - 56, mc, { size: 22, align: 'center', tex: true });
    text(ctx, '$\\kvecx \\mapsto \\kA\\kvecx$', MX, MY + 30, mu, { size: 20, align: 'center', tex: true });
    /* input: e⃗₁, e⃗₂, then x⃗ as x₁ steps along e⃗₁ and x₂ steps along e⃗₂ */
    const G = (p) => [g * p[0], g * p[1]];
    const s1 = [x[0], 0];
    vec(ctx, axIn, [0, 0], G(s1), vc, 3, [9, 7], 0.6);
    vec(ctx, axIn, G(s1), G(x), vc, 3, [9, 7], 0.6);
    vec(ctx, axIn, [0, 0], G([1, 0]), vc, 5);
    vec(ctx, axIn, [0, 0], G([0, 1]), vc, 5);
    vec(ctx, axIn, [0, 0], G(x), vc, 5);
    dot(ctx, axIn.X(0), axIn.Y(0), ink, true, 5);
    P.draw(ctx, axIn, clear(vc));
    ring(ctx, axIn, x, vc);
    /* output: Ae⃗₁, Ae⃗₂, then Ax⃗ as x₁ steps along Ae⃗₁ and x₂ steps along Ae⃗₂ */
    const c1 = [Am[0], Am[2]], c2 = [Am[1], Am[3]], o1 = [x[0] * c1[0], x[0] * c1[1]], Ax = map(Am, x);
    vec(ctx, axOut, [0, 0], G(o1), vc, 3, [9, 7], 0.6);
    vec(ctx, axOut, G(o1), G(Ax), vc, 3, [9, 7], 0.6);
    vec(ctx, axOut, [0, 0], G(c1), vc, 5);
    vec(ctx, axOut, [0, 0], G(c2), vc, 5);
    vec(ctx, axOut, [0, 0], G(Ax), vc, 5);
    dot(ctx, axOut.X(0), axOut.Y(0), ink, true, 5);
    /* labels past the heads, once arrived */
    if (g > 0.99) {
      past(ctx, axIn, [0, 0], [1, 0], '$\\kvece_1$', vc, 24);
      past(ctx, axIn, [0, 0], [0, 1], '$\\kvece_2$', vc, 24);
      past(ctx, axIn, [0, 0], x, '$\\kvecx$', vc);
      past(ctx, axOut, [0, 0], c1, '$\\kA\\kvece_1$', vc, 28);
      past(ctx, axOut, [0, 0], c2, '$\\kA\\kvece_2$', vc, 28);
      past(ctx, axOut, [0, 0], Ax, '$\\kA\\kvecx$', vc);
    }
    /* hover names */
    const C1 = [A[0], A[2]], C2 = [A[1], A[3]], AX = [r2(A[0] * x[0] + A[1] * x[1]), r2(A[2] * x[0] + A[3] * x[1])];
    hits.push(
      { x: axIn.X(1), y: axIn.Y(0), r: 16, name: 'e⃗₁ = (1, 0)' },
      { x: axIn.X(0), y: axIn.Y(1), r: 16, name: 'e⃗₂ = (0, 1)' },
      { x: axIn.X(x[0]), y: axIn.Y(x[1]), r: 20, name: `x⃗ = ${numT(x[0])}e⃗₁ ${x[1] < 0 ? '−' : '+'} ${numT(Math.abs(x[1]))}e⃗₂ = ${pt(x)}; drag its head` },
      { x: axIn.X(x[0] / 2), y: axIn.Y(0), r: 14, name: `x₁e⃗₁ = ${numT(x[0])}e⃗₁, the first step` },
      { x: axOut.X(C1[0]), y: axOut.Y(C1[1]), r: 16, name: `Ae⃗₁ = ${pt(C1)}, the first column of A` },
      { x: axOut.X(C2[0]), y: axOut.Y(C2[1]), r: 16, name: `Ae⃗₂ = ${pt(C2)}, the second column of A` },
      { x: axOut.X(AX[0]), y: axOut.Y(AX[1]), r: 20, name: `Ax⃗ = ${numT(x[0])}Ae⃗₁ ${x[1] < 0 ? '−' : '+'} ${numT(Math.abs(x[1]))}Ae⃗₂ = ${pt(AX)}` },
      { x: axOut.X(x[0] * C1[0] / 2), y: axOut.Y(x[0] * C1[1] / 2), r: 14, name: `x₁Ae⃗₁ = ${numT(x[0])}Ae⃗₁, the first step carried over` },
    );
    /* headline and readout */
    const sg = x[1] < 0 ? '-' : '+', a2 = num(Math.abs(x[1]));
    headline(ctx, `$\\kvecx = ${num(x[0])}\\kvece_1 ${sg} ${a2}\\kvece_2$ goes to $\\kA\\kvecx = ${num(x[0])}\\kA\\kvece_1 ${sg} ${a2}\\kA\\kvece_2 = ${ptT(AX)}$: the same steps along the columns.`);
    tex(d.readout, `\\kA\\kvecx = ${mtex(A)} ${col(num(x[0]), num(x[1]))} = ${num(x[0])} ${col(num(C1[0]), num(C1[1]))} ${sg} ${a2} ${col(num(C2[0]), num(C2[1]))} = ${col(num(AX[0]), num(AX[1]))}`);
  }
  still(d, draw);
})();
};
