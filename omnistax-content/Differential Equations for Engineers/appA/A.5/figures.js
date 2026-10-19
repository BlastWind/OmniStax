/* Figures for section A.5 Inner product and projections. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['A.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, drag, line, arrow, dot, text, headline, register, readout, hover, ease } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });

/* numbers: a value rounded to dec places with no trailing zeros, never −0; `nm` for TeX, `tm` for figure text */
const nm = (v, dec = 2) => { const r = Math.round(v * 10 ** dec) / 10 ** dec; return String(Object.is(r, -0) || r === 0 ? 0 : r); };
const tm = (v, dec = 2) => nm(v, dec).replace('-', '−');
const vecT = (p, dec = 2) => `(${nm(p[0], dec)}, ${nm(p[1], dec)})`;
const vecP = (p, dec = 2) => `(${tm(p[0], dec)}, ${tm(p[1], dec)})`;
const par = (v) => `(${nm(v, 1)})`;
/* a slider value as tenths, so that every inner product of two slider vectors is an exact number of hundredths */
const tenth = (v) => Math.round(v * 10);
const ipH = (a, b) => tenth(a[0]) * tenth(b[0]) + tenth(a[1]) * tenth(b[1]);          /* ⟨a, b⟩ in hundredths, exact */
const exact = (v, dec = 2) => Math.abs(v * 10 ** dec - Math.round(v * 10 ** dec)) < 1e-9;
/* √ of a sum of squares given in hundredths: the number itself when it is a perfect square of tenths */
const sqrtH = (h) => { const r = Math.round(Math.sqrt(h)); return r * r === h ? nm(r / 10, 1) : `\\sqrt{${nm(h / 100)}}`; };
/* a value of θ as a multiple of π/12 where it is one */
const piFrac = (t) => {
  const k = (t * 12) / Math.PI, r = Math.round(k);
  if (Math.abs(k - r) > 1e-9) return null;
  if (r === 0) return '0';
  const g = (a, b) => (b ? g(b, a % b) : a), q = g(r, 12), p = r / q, den = 12 / q;
  return `${p === 1 ? '' : p}\\pi${den === 1 ? '' : `/${den}`}`;
};
/* the dashed circle on one slider where a relation is linear in it: shown only on the 0.1 grid inside [−4, 4] */
const onGrid = (x, other = 1) => (x !== null && Number.isFinite(x) && Math.abs(x) <= 4 + 1e-9 && exact(x, 1) && !(Math.abs(x) < 1e-9 && Math.abs(other) < 1e-9) ? Math.round(x * 10) / 10 : null);
/* (other: the vector's other component; a circle that would make the vector 0⃗ is not shown, as 0⃗ is no case of the relation) */

/* the plane ℝ², one scale for both axes: x and y from −5 to 5, U units to 1, centred in the canvas.
   Every slider runs −4 to 4, so every vector drawn stays inside; a projection can be longer than that
   (a long w⃗ on a short v⃗ keeps its length along the line) and is clipped at the box. */
const U = 66, OX = 700, OY = 440, BOX = { l: OX - 5 * U, r: OX + 5 * U, t: OY - 5 * U, b: OY + 5 * U };
const PL = { box: BOX, X: (x) => OX + U * x, Y: (y) => OY - U * y, xr: [-5, 5], yr: [-5, 5] };
const P = (p) => [PL.X(p[0]), PL.Y(p[1])];
function clip(ctx, draw) { ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip(); draw(); ctx.restore(); }
function plane(ctx) {
  const mu = PAL.muted;
  clip(ctx, () => {
    for (let i = -5; i <= 5; i++) {
      line(ctx, PL.X(i), BOX.t, PL.X(i), BOX.b, alpha(PAL.ink, 0.09), 1.5);
      line(ctx, BOX.l, PL.Y(i), BOX.r, PL.Y(i), alpha(PAL.ink, 0.09), 1.5);
    }
  });
  line(ctx, BOX.l, OY, BOX.r, OY, alpha(mu, 0.8), 2);
  line(ctx, OX, BOX.t, OX, BOX.b, alpha(mu, 0.8), 2);
  [-4, -2, 2, 4].forEach((v) => {
    text(ctx, tm(v, 0), PL.X(v), OY + 20, mu, { size: 19, align: 'center' });
    text(ctx, tm(v, 0), OX - 12, PL.Y(v), mu, { size: 19, align: 'right' });
  });
}
/* a whole line through the origin along u, clipped to the plane */
function fullLine(ctx, u, color, w, dash) {
  const L = Math.hypot(u[0], u[1]); if (L < 1e-12) return;
  const e = [(u[0] / L) * 8, (u[1] / L) * 8];
  clip(ctx, () => line(ctx, ...P([-e[0], -e[1]]), ...P(e), color, w, dash));
}
/* an arc about the origin from math angle a0 to a1 (the sign of a1 − a0 is the way it turns), its head at a1 */
function turn(ctx, a0, a1, r, color, w = 2.5, head = true) {
  const n = Math.max(8, Math.ceil(Math.abs(a1 - a0) * 24)), at = (t) => [OX + r * Math.cos(t), OY - r * Math.sin(t)];
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const [x, y] = at(a0 + ((a1 - a0) * i) / n); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
  ctx.stroke(); ctx.restore();
  if (!head) return;
  const s = Math.sign(a1 - a0) || 1, [hx, hy] = at(a1), tx = -Math.sin(a1) * s, ty = -Math.cos(a1) * s;
  arrow(ctx, hx - 13 * tx, hy - 13 * ty, hx, hy, color, w);
}
/* the right-angle mark at canvas point o between the unit directions (math frame) u1 and u2 */
function square(ctx, o, u1, u2, color, s = 17) {
  const a = [o[0] + s * u1[0], o[1] - s * u1[1]], b = [a[0] + s * u2[0], a[1] - s * u2[1]], c = [o[0] + s * u2[0], o[1] - s * u2[1]];
  line(ctx, ...a, ...b, color, 2.5); line(ctx, ...b, ...c, color, 2.5);
}
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 26, weight: 600, tex: true, bg: PAL.panel, ...o });
/* a label just past the head of a vector from the origin, on the side away from it */
function tipLabel(ctx, s, p, color, extra = 26) {
  const L = Math.hypot(p[0], p[1]) || 1, ux = p[0] / L, uy = p[1] / L, [x, y] = P(p);
  mark(ctx, s, x + extra * ux, y - extra * uy, color, { align: ux < -0.35 ? 'right' : ux > 0.35 ? 'left' : 'center' });
}
const slider = (d, label, key, value, aria, at, name) =>
  ctl(d.controls, { label, cls: '', key, min: -4, max: 4, step: 0.1, value, unit: '', dec: 1, aria, specials: [{ at, label: name }] });

/* Figure A.5: the angle between two vectors. x⃗ and y⃗ from the origin, their heads dragged (or set on the four
   component sliders, −4 to 4 by 0.1); the arc θ (between 0 and π) the short way from one to the other, solid, with
   −θ (the same turn read backwards) and 2π − θ (the long way round) faint, as the book marks them: from y⃗ to x⃗
   counterclockwise for θ when that is the short way, from x⃗ to y⃗ otherwise. The readout computes cos θ from the
   inner product with exact hundredths; θ is named as a multiple of π/12 where it is one. Still: nothing in the
   idea has a clock. Defaults: Example A.5.1, x⃗ = (3, 0), y⃗ = (1, 1), θ = π/4. Each slider's dashed circle sits
   where ⟨x⃗, y⃗⟩ = 0 given the other three, where that value is on the slider's grid. */
(function () {
  const d = sim('sim-angle-between-vectors', 800);
  let x1 = null, x2 = null, y1 = null, y2 = null;
  const ready = () => x1 && x2 && y1 && y2;
  x1 = slider(d, 'x_1', 'x1', 3, 'the first component x₁ of x⃗', () => (ready() && y1.v ? onGrid((-x2.v * y2.v) / y1.v, x2.v) : null), 'orthogonal');
  x2 = slider(d, 'x_2', 'x2', 0, 'the second component x₂ of x⃗', () => (ready() && y2.v ? onGrid((-x1.v * y1.v) / y2.v, x1.v) : null), 'orthogonal');
  y1 = slider(d, 'y_1', 'y1', 1, 'the first component y₁ of y⃗', () => (ready() && x1.v ? onGrid((-x2.v * y2.v) / x1.v, y2.v) : null), 'orthogonal');
  y2 = slider(d, 'y_2', 'y2', 1, 'the second component y₂ of y⃗', () => (ready() && x2.v ? onGrid((-x1.v * y1.v) / x2.v, y1.v) : null), 'orthogonal');
  [x1, x2, y1, y2].forEach((s) => s.refresh());
  const DX = drag(d, { x: x1, y: x2 }), DY = drag(d, { x: y1, y: y2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), ink = PAL.ink;
    const x = [x1.v, x2.v], y = [y1.v, y2.v];
    const sx = ipH(x, x), sy = ipH(y, y), ip = ipH(x, y);              /* hundredths */
    hits = [];
    plane(ctx);
    const zx = sx === 0, zy = sy === 0;
    let th = null;
    if (!zx && !zy) {
      const ax = Math.atan2(x[1], x[0]), ay = Math.atan2(y[1], y[0]);
      let dd = ax - ay; while (dd > Math.PI) dd -= 2 * Math.PI; while (dd <= -Math.PI) dd += 2 * Math.PI;
      th = Math.acos(Math.max(-1, Math.min(1, ip / Math.sqrt(sx * sy))));
      /* the short way runs counterclockwise from `a` to `b`: y⃗ to x⃗ as the book draws it, else x⃗ to y⃗ */
      const [a, b] = dd >= 0 ? [ay, ax] : [ax, ay];
      const sh = th, R1 = 120, R2 = 68, R3 = 40;
      const faint = alpha(ink, 0.45);
      if (ip === 0) square(ctx, [OX, OY], [Math.cos(a), Math.sin(a)], [Math.cos(b), Math.sin(b)], ink, 22);
      if (sh > 1e-9) turn(ctx, a, a + sh, R1, ink, 2.5);
      if (sh > 1e-9) turn(ctx, b, b - sh, R2, faint, 2);
      turn(ctx, b, b + 2 * Math.PI - sh, R3, faint, 2);
      const mid = a + sh / 2, far = b + Math.PI - sh / 2;
      const put = (s, ang, r, c) => { const ux = Math.cos(ang), uy = Math.sin(ang); mark(ctx, s, OX + r * ux, OY - r * uy, c, { size: 24, align: ux < -0.35 ? 'right' : ux > 0.35 ? 'left' : 'center' }); };
      if (sh > 0.12) put('$\\ktheta$', mid, R1 + 16, ink);
      if (sh > 0.25) put('$-\\ktheta$', mid, R2 - 4 > 30 ? (R1 + R2) / 2 - 6 : R2, faint);
      put('$2\\pi - \\ktheta$', far, R3 + 22, faint);
      hits.push({ x: OX + R1 * Math.cos(mid), y: OY - R1 * Math.sin(mid), r: 14, name: `θ ≈ ${tm(th, 3)}, the angle between x⃗ and y⃗` });
      hits.push({ x: OX + R2 * Math.cos(mid), y: OY - R2 * Math.sin(mid), r: 12, name: `−θ ≈ ${tm(-th, 3)}: the same turn read the other way, with the same cosine` });
      hits.push({ x: OX + R3 * Math.cos(far), y: OY - R3 * Math.sin(far), r: 12, name: `2π − θ ≈ ${tm(2 * Math.PI - th, 3)}: the long way round, with the same cosine` });
    }
    /* the two vectors, their heads the reader's */
    if (!zx) { arrow(ctx, OX, OY, ...P(x), vc, 5); tipLabel(ctx, '$\\kvecx$', x, vc); }
    if (!zy) { arrow(ctx, OX, OY, ...P(y), vc, 5); tipLabel(ctx, '$\\kvecy$', y, vc); }
    DX.draw(ctx, PL, vc); DY.draw(ctx, PL, vc);
    hits.push({ x: P(x)[0], y: P(x)[1], r: 18, name: `x⃗ = ${vecP(x, 1)}; drag its head` });
    hits.push({ x: P(y)[0], y: P(y)[1], r: 18, name: `y⃗ = ${vecP(y, 1)}; drag its head` });
    dot(ctx, OX, OY, ink, true, 5);
    /* the words */
    const prods = `${par(x[0])}${par(y[0])} + ${par(x[1])}${par(y[1])}`;
    if (zx || zy) {
      const which = zx && zy ? '$\\kvecx$ and $\\kvecy$ are both' : zx ? '$\\kvecx$ is' : '$\\kvecy$ is';
      headline(ctx, `${which} $\\vec{0}$: a zero vector makes no angle, as $\\lVert \\vec{0} \\rVert = 0$.`);
      ro.set(`\\langle \\kvecx, \\kvecy \\rangle = ${prods} = 0, \\quad \\lVert ${zx ? '\\kvecx' : '\\kvecy'} \\rVert = 0`, '', { form: 'zero' });
      return;
    }
    const cs = ip / Math.sqrt(sx * sy), eq = exact(cs, 3) ? '=' : '\\approx';
    const pf = piFrac(th), thT = pf !== null ? `${pf}${pf === '0' ? '' : ` \\approx ${nm(th, 3)}`}` : `\\approx ${nm(th, 3)}`;
    if (ip === 0) headline(ctx, `$\\langle \\kvecx, \\kvecy \\rangle = 0$: $\\kvecx$ and $\\kvecy$ are orthogonal, at the right angle $\\ktheta = \\pi/2$.`);
    else headline(ctx, `$\\cos \\ktheta ${eq} ${nm(cs, 3)}$, so $\\ktheta = ${thT}$; the turns $-\\ktheta$ and $2\\pi - \\ktheta$ have the same cosine.`);
    ro.set(`\\cos \\ktheta = \\frac{\\langle \\kvecx, \\kvecy \\rangle}{\\lVert \\kvecx \\rVert \\lVert \\kvecy \\rVert} = \\frac{${prods}}{${sqrtH(sx)}\\,${sqrtH(sy)}} ${eq} ${nm(cs, 3)}`,
      `$\\ktheta = \\cos^{-1}(\\cos \\ktheta) ${pf !== null ? `= ${pf}` : ''} \\approx ${nm(th, 3)}$, while $-\\ktheta \\approx ${nm(-th, 3)}$ and $2\\pi - \\ktheta \\approx ${nm(2 * Math.PI - th, 3)}$ have the same cosine.`,
      { form: 'angle' });
  }
  still(d, draw);
})();

/* Figure A.6: the orthogonal projection of w⃗ onto v⃗ as a shadow. The line spanned by v⃗ (a subspace, in the region
   colour) runs across the plane; faint rays square to it fall on it from the side w⃗ is on, the one through the tip of
   w⃗ landing at the tip of proj_v⃗(w⃗), which lies on a soft band, the shadow; w⃗ − proj_v⃗(w⃗) dashed from that tip back
   to w⃗'s, the right angle marked at the foot, θ marked between v⃗ and w⃗. The rays carry no arrowheads: they are a
   direction, not a flow, so the figure is still. Heads of v⃗ and w⃗ dragged or set on four sliders (−4 to 4 by 0.1);
   defaults v⃗ = (4, 2), w⃗ = (1, 3), θ = π/4, proj = (1/2)(4, 2) = (2, 1) with v⃗ reaching past it as in the book's
   sketch (the book's projection examples are in ℝ³). Every
   slider's dashed circle sits where ⟨w⃗, v⃗⟩ = 0 given the other three (no shadow). Inner products are exact
   hundredths; a projection that does not come out in hundredths is written with ≈. */
(function () {
  const d = sim('sim-projection', 800);
  let v1 = null, v2 = null, w1 = null, w2 = null;
  const ready = () => v1 && v2 && w1 && w2;
  v1 = slider(d, 'v_1', 'v1', 4, 'the first component v₁ of v⃗', () => (ready() && w1.v ? onGrid((-v2.v * w2.v) / w1.v, v2.v) : null), 'orthogonal');
  v2 = slider(d, 'v_2', 'v2', 2, 'the second component v₂ of v⃗', () => (ready() && w2.v ? onGrid((-v1.v * w1.v) / w2.v, v1.v) : null), 'orthogonal');
  w1 = slider(d, 'w_1', 'w1', 1, 'the first component w₁ of w⃗', () => (ready() && v1.v ? onGrid((-v2.v * w2.v) / v1.v, w2.v) : null), 'orthogonal');
  w2 = slider(d, 'w_2', 'w2', 3, 'the second component w₂ of w⃗', () => (ready() && v2.v ? onGrid((-v1.v * w1.v) / v2.v, w1.v) : null), 'orthogonal');
  [v1, v2, w1, w2].forEach((s) => s.refresh());
  const DV = drag(d, { x: v1, y: v2 }), DW = drag(d, { x: w1, y: w2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), rc = C('region'), ink = PAL.ink;
    const v = [v1.v, v2.v], w = [w1.v, w2.v], vv = ipH(v, v), wv = ipH(w, v);
    hits = [];
    plane(ctx);
    const zv = vv === 0;
    let pr = [0, 0];
    if (!zv) {
      const L = Math.sqrt(vv) / 10, u = [v[0] / L, v[1] / L], n = [-u[1], u[0]];
      const c = wv / vv; pr = [c * v[0], c * v[1]];
      const side = Math.sign(w[0] * n[0] + w[1] * n[1]);
      /* the line spanned by v⃗ */
      fullLine(ctx, u, alpha(rc, 0.75), 3);
      hits.push({ x: P([u[0] * -3.8, u[1] * -3.8])[0], y: P([u[0] * -3.8, u[1] * -3.8])[1], r: 14, name: 'the line spanned by v⃗: every multiple of v⃗' });
      /* the sun's rays, square to the line, falling from w⃗'s side */
      if (side !== 0) clip(ctx, () => {
        for (let s = -9; s <= 9; s += 1) {
          const foot = [u[0] * s, u[1] * s], far = [foot[0] + n[0] * side * 12, foot[1] + n[1] * side * 12];
          line(ctx, ...P(far), ...P(foot), alpha(ink, 0.12), 2);
        }
        line(ctx, ...P([pr[0] + n[0] * side * 12, pr[1] + n[1] * side * 12]), ...P(w), alpha(ink, 0.3), 2);
      });
      /* the shadow: a soft band on the line from the origin to the tip of the projection */
      const lp = Math.hypot(pr[0], pr[1]);
      if (lp > 1e-9) clip(ctx, () => { ctx.save(); ctx.lineCap = 'round'; line(ctx, OX, OY, ...P(pr), alpha(vc, 0.22), 16); ctx.restore(); });
      /* θ between v⃗ and w⃗ */
      const ww = ipH(w, w);
      if (ww > 0) {
        const av = Math.atan2(v[1], v[0]), aw = Math.atan2(w[1], w[0]);
        let dd = aw - av; while (dd > Math.PI) dd -= 2 * Math.PI; while (dd <= -Math.PI) dd += 2 * Math.PI;
        if (Math.abs(dd) > 0.05) {
          turn(ctx, av, av + dd, 54, alpha(ink, 0.8), 2.5, false);
          const m = av + dd / 2;
          mark(ctx, '$\\ktheta$', OX + 78 * Math.cos(m), OY - 78 * Math.sin(m), ink, { size: 24, align: 'center' });
        }
      }
      /* what is left over, w⃗ − proj, dashed from the tip of the shadow to the tip of w⃗, square to the line */
      const rem = [w[0] - pr[0], w[1] - pr[1]], lr = Math.hypot(rem[0], rem[1]);
      if (lr > 1e-9) {
        clip(ctx, () => line(ctx, ...P(pr), ...P(w), vc, 3, [10, 8]));
        const rn = [rem[0] / lr, rem[1] / lr], back = lp > 1e-9 ? [-pr[0] / lp, -pr[1] / lp] : [-u[0], -u[1]];
        if (lr > 0.25) square(ctx, P(pr), rn, back, alpha(ink, 0.8), 16);
        const mid = [(pr[0] + w[0]) / 2, (pr[1] + w[1]) / 2];
        hits.push({ x: P(mid)[0], y: P(mid)[1], r: 16, name: `w⃗ − proj_v⃗(w⃗) ${exact(pr[0]) && exact(pr[1]) ? '=' : '≈'} ${vecP(rem)}, square to the line of v⃗` });
      }
      if (lp > 1e-9) {
        clip(ctx, () => arrow(ctx, OX, OY, ...P(pr), vc, 6));
        const inBox = Math.abs(pr[0]) < 4.6 && Math.abs(pr[1]) < 4.6;
        if (inBox) {
          const o = n.map((k) => -k * (side || 1));
          const [px, py] = P([pr[0] / 2 + o[0] * 0.75, pr[1] / 2 + o[1] * 0.75]);
          mark(ctx, '$\\kproj_{\\kvecv}(\\kvecw)$', px, py, vc, { size: 24, align: o[0] < -0.35 ? 'right' : o[0] > 0.35 ? 'left' : 'center' });
        }
        hits.push({ x: P(pr)[0], y: P(pr)[1], r: 16, name: `proj_v⃗(w⃗) ${exact(pr[0]) && exact(pr[1]) ? '=' : '≈'} ${vecP(pr)}, the point of the line closest to the tip of w⃗` });
      }
    }
    /* v⃗ thinner, as the book draws it lighter; w⃗ full */
    if (!zv) { arrow(ctx, OX, OY, ...P(v), alpha(vc, 0.75), 4); tipLabel(ctx, '$\\kvecv$', v, vc); }
    if (ipH(w, w) > 0) { arrow(ctx, OX, OY, ...P(w), vc, 5); tipLabel(ctx, '$\\kvecw$', w, vc); }
    DV.draw(ctx, PL, vc); DW.draw(ctx, PL, vc);
    hits.push({ x: P(v)[0], y: P(v)[1], r: 18, name: `v⃗ = ${vecP(v, 1)}; drag its head` });
    hits.push({ x: P(w)[0], y: P(w)[1], r: 18, name: `w⃗ = ${vecP(w, 1)}; drag its head` });
    dot(ctx, OX, OY, ink, true, 5);
    /* the words */
    if (zv) {
      headline(ctx, '$\\kvecv = \\vec{0}$: there is no line to cast a shadow on, and the projection onto $\\vec{0}$ is not defined.');
      ro.set('\\langle \\kvecv, \\kvecv \\rangle = 0', '', { form: 'zero' });
      return;
    }
    const ok = exact(pr[0]) && exact(pr[1]), eq = ok ? '=' : '\\approx';
    const rem = [w[0] - pr[0], w[1] - pr[1]];
    const onLine = tenth(w[0]) * tenth(v[1]) - tenth(w[1]) * tenth(v[0]) === 0;
    if (wv === 0) headline(ctx, '$\\langle \\kvecw, \\kvecv \\rangle = 0$: $\\kvecw$ is orthogonal to $\\kvecv$ and casts no shadow on its line, so $\\kproj_{\\kvecv}(\\kvecw) = \\vec{0}$.');
    else if (onLine) headline(ctx, `$\\kvecw$ lies on the line of $\\kvecv$: it is its own shadow, $\\kproj_{\\kvecv}(\\kvecw) = \\kvecw = ${vecT(w, 1)}$.`);
    else if (wv < 0) headline(ctx, `$\\ktheta$ is obtuse: the shadow falls behind the origin, and $\\kproj_{\\kvecv}(\\kvecw) ${eq} ${vecT(pr)}$ points against $\\kvecv$.`);
    else headline(ctx, `The shadow of $\\kvecw$ on the line of $\\kvecv$ is $\\kproj_{\\kvecv}(\\kvecw) ${eq} ${vecT(pr)}$; what is left, $\\kvecw - \\kproj_{\\kvecv}(\\kvecw)$, is orthogonal to $\\kvecv$.`);
    ro.set(`\\kproj_{\\kvecv}(\\kvecw) = \\left( \\frac{\\langle \\kvecw , \\kvecv \\rangle}{ \\langle \\kvecv , \\kvecv \\rangle} \\right) \\kvecv = \\frac{${nm(wv / 100)}}{${nm(vv / 100)}} ${vecT(v, 1)} ${eq} ${vecT(pr)}`,
      ok ? `$\\kvecw - \\kproj_{\\kvecv}(\\kvecw) = ${vecT(rem)}$, and $\\langle \\kvecw - \\kproj_{\\kvecv}(\\kvecw), \\kvecv \\rangle = (${nm(rem[0])})(${nm(v[0], 1)}) + (${nm(rem[1])})(${nm(v[1], 1)}) = 0$.`
        : `$\\kvecw - \\kproj_{\\kvecv}(\\kvecw) \\approx ${vecT(rem)}$, and $\\langle \\kvecw - \\kproj_{\\kvecv}(\\kvecw), \\kvecv \\rangle = \\langle \\kvecw, \\kvecv \\rangle - \\frac{\\langle \\kvecw, \\kvecv \\rangle}{\\langle \\kvecv, \\kvecv \\rangle} \\langle \\kvecv, \\kvecv \\rangle = ${nm(wv / 100)} - ${nm(wv / 100)} = 0$.`,
      { form: 'proj' });
  }
  still(d, draw);
})();

/* Sim: the Gram–Schmidt process in the plane, stepped. v⃗₁ and v⃗₂ dragged (or on four sliders, −4 to 4 by 0.1);
   defaults (1, 2) and (3, 1), vectors the appendix drew in Figures A.1 and A.3, since Example A.5.5 is in ℝ³.
   The step is a choice, and the figure is a function of the step's blended index s (0 to 3), so a change
   morphs through the steps between: 1 keep, w⃗₁ = v⃗₁ drawn heavy over v⃗₁; 2 project, the line of w⃗₁ (a span, in
   the region colour) appears and the shadow proj_w⃗₁(v⃗₂) grows along it from the origin, the dashed remainder and
   the right angle at its foot fading in; 3 subtract, the remainder slides back along the line until its tail sits
   at the origin and it is w⃗₂, the right angle now between w⃗₁ and w⃗₂; 4 normalize, both shrink or stretch to the
   unit circle. Still: the steps are a discrete state (a choice), not a clock. Dashed circles on all four sliders
   where v⃗₂ lies on the line of v⃗₁ (w⃗₂ = 0⃗), where that value is on the grid. Default step 3, the book's result. */
(function () {
  const d = sim('sim-gram-schmidt', 800);
  const STEPS = ['w1', 'proj', 'w2', 'unit'], IDX = { w1: 0, proj: 1, w2: 2, unit: 3 };
  const pick = choice(d.controls, { label: 'step', key: 'step', value: 'w2', options: [
    { value: 'w1', label: '1 · keep' }, { value: 'proj', label: '2 · project' }, { value: 'w2', label: '3 · subtract' }, { value: 'unit', label: '4 · normalize' }] });
  let a1 = null, a2 = null, b1 = null, b2 = null;
  const ready = () => a1 && a2 && b1 && b2;
  /* v⃗₂ on the line of v⃗₁: a1·b2 − a2·b1 = 0 */
  a1 = slider(d, 'v_{1,1}', 'v11', 1, 'the first component of v⃗₁', () => (ready() && b2.v ? onGrid((a2.v * b1.v) / b2.v, a2.v) : null), 'dependent');
  a2 = slider(d, 'v_{1,2}', 'v12', 2, 'the second component of v⃗₁', () => (ready() && b1.v ? onGrid((a1.v * b2.v) / b1.v, a1.v) : null), 'dependent');
  b1 = slider(d, 'v_{2,1}', 'v21', 3, 'the first component of v⃗₂', () => (ready() && a2.v ? onGrid((a1.v * b2.v) / a2.v, b2.v) : null), 'dependent');
  b2 = slider(d, 'v_{2,2}', 'v22', 1, 'the second component of v⃗₂', () => (ready() && a1.v ? onGrid((a2.v * b1.v) / a1.v, b1.v) : null), 'dependent');
  [a1, a2, b1, b2].forEach((s) => s.refresh());
  const D1 = drag(d, { x: a1, y: a2 }), D2 = drag(d, { x: b1, y: b2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const k01 = (t) => ease.smooth(Math.max(0, Math.min(1, t)));
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), rc = C('region'), ink = PAL.ink;
    const v1 = [a1.v, a2.v], v2 = [b1.v, b2.v], q11 = ipH(v1, v1), q21 = ipH(v2, v1);
    const s = pick.mix((v) => IDX[v]), step = pick.value;
    const k1 = k01(s), k2 = k01(s - 1), k3 = k01(s - 2);
    hits = [];
    plane(ctx);
    const z1 = q11 === 0;
    const c = z1 ? 0 : q21 / q11, pr = [c * v1[0], c * v1[1]], w2 = [v2[0] - pr[0], v2[1] - pr[1]];
    const L1 = Math.sqrt(q11) / 10, L2 = Math.hypot(w2[0], w2[1]);
    const dep = !z1 && tenth(v1[0]) * tenth(v2[1]) - tenth(v1[1]) * tenth(v2[0]) === 0;
    const z2 = z1 || dep;
    /* the unit circle, arriving with the last step */
    if (k3 > 0) { ctx.save(); ctx.strokeStyle = alpha(ink, 0.35 * k3); ctx.lineWidth = 2; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.arc(OX, OY, U, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); hits.push({ x: OX + U * 0.71, y: OY - U * 0.71, r: 10, name: 'the unit circle: vectors of magnitude 1' }); }
    if (!z1) {
      const u = [v1[0] / L1, v1[1] / L1];
      /* the line spanned by w⃗₁ */
      if (k1 > 0) { fullLine(ctx, u, alpha(rc, 0.7 * k1), 3); hits.push({ x: P([u[0] * -3.8, u[1] * -3.8])[0], y: P([u[0] * -3.8, u[1] * -3.8])[1], r: 14, name: 'the line spanned by w⃗₁' }); }
      /* the shadow of v⃗₂ on it, growing from the origin, faint once subtracted */
      const lp = Math.hypot(pr[0], pr[1]);
      if (k1 > 0 && lp > 1e-9) {
        const g = [pr[0] * k1, pr[1] * k1], fade = 1 - 0.65 * k2;
        clip(ctx, () => { line(ctx, OX, OY, ...P(g), alpha(vc, 0.2 * fade), 14); arrow(ctx, OX, OY, ...P(g), alpha(vc, 0.9 * fade), 4); });
        if (k1 > 0.95 && k2 < 0.5 && Math.abs(pr[0]) < 4.6 && Math.abs(pr[1]) < 4.6) {
          const n = [-u[1], u[0]], sd = Math.sign(v2[0] * n[0] + v2[1] * n[1]) || 1, o = [-n[0] * sd, -n[1] * sd];
          const [px, py] = P([pr[0] / 2 + o[0] * 0.75, pr[1] / 2 + o[1] * 0.75]);
          mark(ctx, '$\\kproj_{\\kvecw_1}(\\kvecv_2)$', px, py, alpha(vc, 1 - 2 * k2), { size: 24, align: o[0] < -0.35 ? 'right' : o[0] > 0.35 ? 'left' : 'center' });
        }
        hits.push({ x: P(pr)[0], y: P(pr)[1], r: 14, name: `proj_w⃗₁(v⃗₂) ${exact(pr[0]) && exact(pr[1]) ? '=' : '≈'} ${vecP(pr)}, the shadow of v⃗₂ on the line of w⃗₁` });
      }
      /* the remainder: dashed from the foot to the tip of v⃗₂, then slid back to the origin as w⃗₂ */
      if (k1 > 0 && L2 > 1e-9) {
        const foot = [pr[0] * k1, pr[1] * k1];
        clip(ctx, () => line(ctx, ...P(foot), ...P(v2), alpha(vc, (k2 > 0 ? 0.45 : 1) * k1), 3, [10, 8]));
        if (k2 < 0.05 && k1 > 0.95) square(ctx, P(pr), [w2[0] / L2, w2[1] / L2], lp > 1e-9 ? [-pr[0] / lp, -pr[1] / lp] : [-u[0], -u[1]], alpha(ink, 0.8), 16);
      }
    }
    /* v⃗₁ and v⃗₂, the given basis, thin */
    if (q11 > 0) arrow(ctx, OX, OY, ...P(v1), alpha(vc, 0.6), 3.5);
    if (ipH(v2, v2) > 0) { arrow(ctx, OX, OY, ...P(v2), alpha(vc, 0.6), 3.5); tipLabel(ctx, '$\\kvecv_2$', v2, vc); }
    /* w⃗₁ and w⃗₂, heavy, scaled to unit length over the last step */
    const sc1 = z1 ? 1 : 1 + (1 / L1 - 1) * k3, sc2 = L2 > 1e-9 ? 1 + (1 / L2 - 1) * k3 : 1;
    const W1 = [v1[0] * sc1, v1[1] * sc1];
    if (!z1) {
      clip(ctx, () => arrow(ctx, OX, OY, ...P(W1), vc, 6));
      tipLabel(ctx, k3 > 0.5 ? '$\\kvecw_1 / \\lVert \\kvecw_1 \\rVert$' : step === 'w1' && k1 < 0.5 ? '$\\kvecw_1 = \\kvecv_1$' : '$\\kvecw_1$', W1, vc, 30);
      hits.push({ x: P(W1)[0], y: P(W1)[1], r: 16, name: k3 > 0.5 ? `w⃗₁/‖w⃗₁‖ ≈ ${vecP([v1[0] / L1, v1[1] / L1])}` : `w⃗₁ = v⃗₁ = ${vecP(v1, 1)}` });
    }
    if (!z2 && k2 > 0) {
      const tail = [pr[0] * (1 - k2), pr[1] * (1 - k2)], W2 = [tail[0] + w2[0] * sc2, tail[1] + w2[1] * sc2];
      clip(ctx, () => arrow(ctx, ...P(tail), ...P(W2), alpha(vc, Math.min(1, 0.4 + k2)), 3.5 + 2.5 * k2));
      if (k2 > 0.95) {
        tipLabel(ctx, k3 > 0.5 ? '$\\kvecw_2 / \\lVert \\kvecw_2 \\rVert$' : '$\\kvecw_2$', W2, vc, 30);
        square(ctx, [OX, OY], [v1[0] / L1, v1[1] / L1], [w2[0] / L2, w2[1] / L2], alpha(ink, 0.85), 20);
        hits.push({ x: P(W2)[0], y: P(W2)[1], r: 16, name: k3 > 0.5 ? `w⃗₂/‖w⃗₂‖ ≈ ${vecP([w2[0] / L2, w2[1] / L2])}` : `w⃗₂ = v⃗₂ − proj_w⃗₁(v⃗₂) ${exact(pr[0]) && exact(pr[1]) ? '=' : '≈'} ${vecP(w2)}, square to w⃗₁` });
      }
    }
    D1.draw(ctx, PL, vc); D2.draw(ctx, PL, vc);
    hits.push({ x: P(v1)[0], y: P(v1)[1], r: 18, name: `v⃗₁ = ${vecP(v1, 1)}; drag its head` });
    hits.push({ x: P(v2)[0], y: P(v2)[1], r: 18, name: `v⃗₂ = ${vecP(v2, 1)}; drag its head` });
    dot(ctx, OX, OY, ink, true, 5);
    /* the words, from the step chosen (never a blend) */
    if (z1) {
      headline(ctx, '$\\kvecv_1 = \\vec{0}$: a zero vector belongs to no basis, and there is no line to project onto.');
      ro.set('\\kvecw_1 = \\kvecv_1 = \\vec{0}', '', { form: 'zero' });
      return;
    }
    const ok = exact(pr[0]) && exact(pr[1]), eq = ok ? '=' : '\\approx';
    const V1 = vecT(v1, 1), V2 = vecT(v2, 1), PR = vecT(pr), W2T = vecT(w2);
    const frac = `\\frac{${nm(q21 / 100)}}{${nm(q11 / 100)}}`;
    const n1 = sqrtH(q11);
    if (step === 'w1') {
      headline(ctx, `Step 1: $\\kvecw_1 = \\kvecv_1 = ${V1}$, the first vector kept as it is.`);
      ro.set(`\\kvecw_1 = \\kvecv_1 = ${V1}`, '', { form: 'w1' });
    } else if (step === 'proj') {
      headline(ctx, `Step 2: the shadow of $\\kvecv_2$ on the line of $\\kvecw_1$ is $\\kproj_{\\kvecw_1}(\\kvecv_2) ${eq} ${PR}$.`);
      ro.set(`\\kproj_{\\kvecw_1}(\\kvecv_2) = \\frac{\\langle \\kvecv_2 , \\kvecw_1 \\rangle}{\\langle \\kvecw_1 , \\kvecw_1 \\rangle} \\kvecw_1 = ${frac} ${V1} ${eq} ${PR}`, '', { form: 'proj' });
    } else if (step === 'w2') {
      if (dep) {
        headline(ctx, '$\\kvecv_2$ lies on the line of $\\kvecv_1$: nothing is left after the shadow is taken away, $\\kvecw_2 = \\vec{0}$, and $\\kvecv_1, \\kvecv_2$ are not a basis.');
        ro.set(`\\kvecw_2 = \\kvecv_2 - \\kproj_{\\kvecw_1}(\\kvecv_2) = ${V2} - ${PR} = (0, 0)`, '', { form: 'w2' });
      } else {
        headline(ctx, `Step 3: $\\kvecw_2 = \\kvecv_2 - \\kproj_{\\kvecw_1}(\\kvecv_2) ${eq} ${W2T}$ stands square to $\\kvecw_1$: an orthogonal basis.`);
        /* subtracting the projection as shown gives the result shown; ≈ where the projection was rounded */
        const shown = [Math.round(pr[0] * 100) / 100, Math.round(pr[1] * 100) / 100], diff = vecT([v2[0] - shown[0], v2[1] - shown[1]]);
        ro.set(`\\kvecw_2 = \\kvecv_2 - \\kproj_{\\kvecw_1}(\\kvecv_2) ${eq} ${V2} - ${PR} = ${diff}`,
          ok ? `$\\langle \\kvecw_1, \\kvecw_2 \\rangle = (${nm(v1[0], 1)})(${nm(w2[0])}) + (${nm(v1[1], 1)})(${nm(w2[1])}) = 0$: the two are orthogonal.`
            : `$\\langle \\kvecw_1, \\kvecw_2 \\rangle = \\langle \\kvecw_1, \\kvecv_2 \\rangle - \\frac{\\langle \\kvecv_2, \\kvecw_1 \\rangle}{\\langle \\kvecw_1, \\kvecw_1 \\rangle} \\langle \\kvecw_1, \\kvecw_1 \\rangle = ${nm(q21 / 100)} - ${nm(q21 / 100)} = 0$: the two are orthogonal.`,
          { form: 'w2' });
      }
    } else {
      if (dep) {
        headline(ctx, '$\\kvecw_2 = \\vec{0}$ has no direction, so it cannot be made a unit vector: $\\kvecv_1, \\kvecv_2$ are not a basis.');
        ro.set(`\\frac{\\kvecw_1}{\\lVert \\kvecw_1 \\rVert} = \\frac{${V1}}{${n1}} \\approx ${vecT([v1[0] / L1, v1[1] / L1])}`, '', { form: 'unit' });
      } else {
        /* ‖w⃗₂‖ exactly where w⃗₂ comes out in hundredths (its square then in ten-thousandths), else to three places */
        const h2 = Math.round((w2[0] * w2[0] + w2[1] * w2[1]) * 10000), r2 = Math.round(Math.sqrt(h2));
        const n2 = !ok ? nm(L2, 3) : r2 * r2 === h2 ? nm(r2 / 100) : `\\sqrt{${nm(h2 / 10000, 4)}}`;
        const u1 = [v1[0] / L1, v1[1] / L1], u2 = [w2[0] / L2, w2[1] / L2];
        const e1 = exact(u1[0]) && exact(u1[1]) ? '=' : '\\approx', e2 = ok && exact(u2[0]) && exact(u2[1]) ? '=' : '\\approx', q = ok ? '=' : '\\approx';
        headline(ctx, `Step 4: each vector divided by its magnitude, $\\lVert \\kvecw_1 \\rVert = ${n1}$ and $\\lVert \\kvecw_2 \\rVert ${q} ${n2}$: an orthonormal basis.`);
        ro.set(`\\frac{\\kvecw_1}{\\lVert \\kvecw_1 \\rVert} = \\frac{${V1}}{${n1}} ${e1} ${vecT(u1)}, \\quad \\frac{\\kvecw_2}{\\lVert \\kvecw_2 \\rVert} ${q} \\frac{${W2T}}{${n2}} ${e2} ${vecT(u2)}`, '', { form: 'unit' });
      }
    }
  }
  still(d, draw);
})();
};
