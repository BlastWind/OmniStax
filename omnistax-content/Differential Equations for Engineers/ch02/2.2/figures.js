/* Figures for section 2.2 Constant-coefficient second-order linear ODEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, fmt, hover, cycle, pinned, polar } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sgn = (v) => (v < 0 ? '-' : '+');
const guide = () => alpha(PAL.ink, 0.35);
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Sim: the complex exponential e^{rx} for a root r = α + iβ. Left, the root in its own half-plane (Re r −1.5 to 0.5,
   Im r 0 to 3, 100 units per 1), dragged on the α and β sliders. Middle, the plane of e^{rx} (±2 both ways, 100 per 1,
   the unit circle a ring): as x runs from 0 to 2π over 6 s the point e^{rx} travels from 1, its velocity r e^{rx}
   drawn from it at half its length, so it circles at α = 0, spirals in for α < 0 and out for α > 0; the real part is
   dropped to the real axis. Right, that real part e^{αx} cos βx graphed on x 0 to 2π by y −2 to 2 with the envelope
   ±e^{αx} dashed. The book's r² + 1 = 0 (r = i) is the state on load. A point past a box is pinned at its edge. */
(function () {
  const d = sim('sim-complex-exponential', 600);
  const T = 2 * Math.PI, RUN = 6;
  const cy = cycle(() => T, 1.2);
  const aS = ctl(d.controls, { label: '\\kalpha', cls: 'eigenvalue', key: 'alpha', min: -1.5, max: 0.5, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the real part α of the root', specials: [{ at: 0, label: 'circle' }] });
  const bS = ctl(d.controls, { label: '\\kbeta', cls: 'eigenvalue', key: 'beta', min: 0, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the imaginary part β of the root', specials: [{ at: 0, label: 'real root' }] });
  const P = drag(d, { x: aS, y: bS });
  const ro = readout(d);
  const ROOT = { l: 80, r: 280, t: 130, b: 430 }, PLANE = { l: 360, r: 760, t: 110, b: 510 }, GRAPH = { l: 850, r: 1340, t: 110, b: 510 };
  const piLab = (v) => { const k = Math.round((2 * v) / Math.PI); return k === 0 ? '0' : k === 1 ? 'π/2' : k === 2 ? 'π' : k === 3 ? '3π/2' : '2π'; };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('eigenvalue'), fc = C('function'), dc = C('derivative');
    const a = +aS.v.toFixed(2), b = +bS.v.toFixed(2), x = cy.now(), xr = +x.toFixed(2);
    const z = (t) => [Math.exp(a * t) * Math.cos(b * t), Math.exp(a * t) * Math.sin(b * t)];
    const [zx, zy] = z(x), re = +zx.toFixed(2), im = +zy.toFixed(2);
    const vre = a * re - b * im, vim = a * im + b * re;      /* the velocity r·e^{rx} from the numbers shown */
    hits = [];
    /* the root r = α + iβ in its half-plane */
    const RT = axes(ctx, ROOT, [-1.5, 0.5], [0, 3], { xl: 'Re r', yl: 'Im r', xc: ec, yc: ec, nx: 4, ny: 3, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    line(ctx, RT.X(0), RT.box.t, RT.X(0), RT.box.b, guide(), 2, [4, 8]);
    const rp = P.draw(ctx, RT, ec);
    if (rp) {
      label(ctx, 'r', rp.x, rp.y, { side: a > -0.2 ? 'left' : 'right', color: ec, size: 24, weight: 600, gap: 16 });
      hits.push({ x: rp.x, y: rp.y, r: 18, name: `r = ${fmt(a, 2)} + ${fmt(b, 2)}i, the root; drag it` });
    }
    /* the plane of e^{rx}: the unit circle a ring, the path faint ahead and solid up to x */
    const PL = polar.frame(ctx, PLANE, { x: [-2, 2], y: [-2, 2] }, { ring: 1, spokes: 0, angles: false });
    text(ctx, 'Re', PL.box.r - 6, PL.Y(0) - 16, PAL.muted, { size: 20, align: 'right', bg: PAL.panel });
    text(ctx, 'Im', PL.X(0) + 16, PL.box.t + 14, PAL.muted, { size: 20, align: 'left', bg: PAL.panel });
    hits.push({ x: PL.X(Math.SQRT1_2), y: PL.Y(-Math.SQRT1_2), r: 14, name: 'the unit circle, where |e^(rx)| = 1' });
    polar.path(ctx, PL, z, [0, T], fc, { upto: x, w: 5, faint: 0.25, n: 1200 });
    const inside = Math.hypot(zx, zy) <= 2 && Math.abs(zx) <= 2 && Math.abs(zy) <= 2;
    if (inside) {
      line(ctx, PL.X(0), PL.Y(0), PL.X(zx), PL.Y(zy), guide(), 2.5, [4, 8]);
      line(ctx, PL.X(zx), PL.Y(zy), PL.X(zx), PL.Y(0), guide(), 2.5, [4, 8]);
      dot(ctx, PL.X(zx), PL.Y(0), fc, false, 7);
      hits.push({ x: PL.X(zx), y: PL.Y(0), r: 14, name: `Re e^(rx) = ${fmt(re, 2)}, the real part` });
      const vx = a * zx - b * zy, vy = a * zy + b * zx, L = Math.hypot(vx, vy);
      if (L > 0.04 && Math.hypot(zx, zy) > 0.03) {
        clip(ctx, PL.box, () => arrow(ctx, PL.X(zx), PL.Y(zy), PL.X(zx + 0.5 * vx), PL.Y(zy + 0.5 * vy), dc, 4));
        hits.push({ x: PL.X(zx + 0.25 * vx), y: PL.Y(zy + 0.25 * vy), r: 16, name: `the velocity (e^(rx))′ = r e^(rx) = ${fmt(vre, 2)} ${vim < 0 ? '−' : '+'} ${fmt(Math.abs(vim), 2)}i, drawn at half its length` });
      }
    }
    const zp = pinned(ctx, PL.box, PL.X, PL.Y, zx, zy, fc);
    hits.push({ x: zp.x, y: zp.y, r: 18, name: `e^(rx) = ${fmt(re, 2)} ${im < 0 ? '−' : '+'} ${fmt(Math.abs(im), 2)}i at x = ${fmt(xr, 2)}` });
    /* the real part e^{αx} cos βx against x, with its envelope */
    const GR = axes(ctx, GRAPH, [0, T], [-2, 2], { xl: 'x', yl: 'Re e^{rx}', yc: fc, nx: 4, ny: 4, fx: piLab, fy: (v) => fmt(v, 0) });
    line(ctx, GR.box.l, GR.Y(0), GR.box.r, GR.Y(0), guide(), 2);
    const env = (t) => Math.exp(a * t), f = (t) => Math.exp(a * t) * Math.cos(b * t);
    ctx.save(); ctx.setLineDash([10, 10]);
    plot(ctx, GR, env, alpha(fc, 0.45), { w: 3 }); plot(ctx, GR, (t) => -env(t), alpha(fc, 0.45), { w: 3 });
    ctx.restore();
    hits.push({ x: GR.X(0.5), y: GR.Y(Math.min(2, env(0.5))), r: 14, name: 'the envelope ±e^(αx)' });
    plot(ctx, GR, f, alpha(fc, 0.25), { w: 3 });
    if (x > 1e-6) plot(ctx, GR, f, fc, { w: 5, x: [0, x] });
    text(ctx, '$\\kythree = e^{\\kalpha x}\\cos(\\kbeta x)$', GR.box.r - 8, GR.box.t + 18, fc, { size: 22, tex: true, align: 'right', bg: PAL.panel });
    const gp = pinned(ctx, GR.box, GR.X, GR.Y, x, zx, fc);
    hits.push({ x: gp.x, y: gp.y, r: 18, name: `(x, e^(αx) cos βx) = (${fmt(xr, 2)}, ${fmt(re, 2)})` });
    /* the words */
    const tiny = b < 0.025, still = Math.abs(a) < 0.005;
    const shape = tiny ? (still ? 'stays at $1$' : a < 0 ? 'runs in along the real axis toward $0$' : 'runs out along the real axis')
      : still ? 'circles at radius $1$' : a < 0 ? 'spirals in toward $0$' : 'spirals outward';
    headline(ctx, `$\\kr = ${n(a)} + ${n(b)}i$: $e^{\\kr x}$ ${shape}, and at $x = ${n(xr)}$ its real part is $${n(re)}$.`);
    ro.set(`e^{\\kr x} = e^{\\kalpha x}\\cos(\\kbeta x) + i\\,e^{\\kalpha x}\\sin(\\kbeta x) = ${n(re)} ${sgn(im)} ${n(Math.abs(im))}i, \\quad (e^{\\kr x})' = \\kr\\, e^{\\kr x} = ${n(vre)} ${sgn(vim)} ${n(Math.abs(vim))}i \\quad \\text{at } x = ${n(xr)}`,
      'The velocity arrow is drawn at half its length.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / RUN), draw });
})();
};
