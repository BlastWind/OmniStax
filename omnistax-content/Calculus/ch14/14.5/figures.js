/* Figures for section 14.5 The Chain Rule. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, dot, line, text, headline, register, cycle, tex, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const fit = (xr, yr, t, b, cx = 700) => { const s = (b - t) / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b }; };
const tx = (ctx, s, x, y, o = {}) => text(ctx, s, x, y, o.color ?? PAL.ink, { size: o.size ?? 22, align: o.align ?? 'center', tex: true, bg: PAL.panel });

/* a tree diagram: the root at the left, each node a [label, x, y, branch label, children], each leaf ending in its product */
function tree(id, H, root, kids) {
  const d = sim(id, H), D = (t) => t.replace(/^\$/, '$\\displaystyle ');
  still(d, () => {
    const { ctx } = begin(d.c);
    const ink = PAL.ink;
    tx(ctx, root.s, root.x, root.y + 8, { align: 'right' });
    kids.forEach((k) => {
      line(ctx, root.x + 12, root.y, k.x, k.y, ink, 3);
      tx(ctx, D(k.b), (root.x + k.x) / 2 - 34, (root.y + k.y) / 2 + 4, { size: 24 });
      tx(ctx, k.s, k.x - 10, k.y + (k.y < root.y ? -22 : k.y > root.y ? 40 : 34), { size: 20 });
      k.leaves.forEach((l) => {
        line(ctx, k.x, k.y, l.x, l.y, ink, 3);
        if (l.b) tx(ctx, D(l.b), (k.x + l.x) / 2 + 10, (k.y + l.y) / 2 + (l.y > k.y ? 46 : -30), { size: 24 });
        tx(ctx, l.s, l.x + 18, l.y + 8, { size: 20, align: 'left' });
        tx(ctx, D(l.p), l.x + 54, l.y + 8, { size: 24, align: 'left' });
      });
    });
  });
}
const P = (a, b) => `\\frac{\\partial ${a}}{\\partial ${b}}`;
/* Figure 14.34, a faithful copy */
tree('fig-tree-one', 380, { s: '$z=\\kf(x,y)$', x: 300, y: 190 }, [
  { s: '$x=x(t)$', x: 560, y: 80, b: '$\\kdzdx$', leaves: [{ s: '$t$', x: 920, y: 80, b: '$\\kdxdt$', p: '$\\kdzdx\\,\\kdxdt$' }] },
  { s: '$y=y(t)$', x: 560, y: 300, b: '$\\kdzdy$', leaves: [{ s: '$t$', x: 920, y: 300, b: '$\\kdydt$', p: '$\\kdzdy\\,\\kdydt$' }] },
]);
/* Figure 14.35, a faithful copy */
tree('fig-tree-two', 470, { s: '$z=\\kf(x,y)$', x: 300, y: 235 }, [
  { s: '$x=\\kg(u,v)$', x: 560, y: 120, b: '$\\kdzdx$', leaves: [{ s: '$u$', x: 900, y: 50, b: '$\\kpxpu$', p: '$\\kdzdx\\,\\kpxpu$' }, { s: '$v$', x: 900, y: 175, b: '$\\kpxpv$', p: '$\\kdzdx\\,\\kpxpv$' }] },
  { s: '$y=\\kh(u,v)$', x: 560, y: 350, b: '$\\kdzdy$', leaves: [{ s: '$u$', x: 900, y: 295, b: '$\\kpypu$', p: '$\\kdzdy\\,\\kpypu$' }, { s: '$v$', x: 900, y: 420, b: '$\\kpypv$', p: '$\\kdzdy\\,\\kpypv$' }] },
]);
/* Figure 14.36, a faithful copy */
tree('fig-tree-three', 660, { s: '$\\kw=\\kf(x,y,z)$', x: 300, y: 330 }, ['x', 'y', 'z'].map((v, i) => {
  const ky = [110, 330, 550][i];
  return { s: `$${v}=${v}(t,u,v)$`, x: 560, y: ky, b: `$${P('\\kw', v)}$`, leaves: ['t', 'u', 'v'].map((w, j) => ({ s: `$${w}$`, x: 900, y: ky - 70 + 70 * j, p: `$${P('\\kw', v)}\\,${P(v, w)}$` })) };
}));

/* Sim: Example 14.26a, z = 4x² + 3y² along (sin t, cos t); the contour map (−1.6 to 1.6, one scale) beside the graph of
   z against t on [0, 2π] by 2.8 to 4.2. One lap is 6 s. */
(function () {
  const d = sim('sim-chain-path', 460);
  const T = TAU, cy = cycle(() => T, 1.2), f = (x, y) => 4 * x * x + 3 * y * y;
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const t = Math.min(cy.now(), T), x = Math.sin(t), y = Math.cos(t), z = f(x, y), dz = 2 * Math.sin(t) * Math.cos(t);
    const cc = C('curve'), pc = C('point'), fc = C('function');
    const map = axes(ctx, fit([-1.6, 1.6], [-1.6, 1.6], 90, 420, 290), [-1.6, 1.6], [-1.6, 1.6], { xl: 'x', yl: 'y', nx: 4, ny: 4, fx: (v) => n(v, 1), fy: (v) => n(v, 1) });
    [1, 2, 3, 4, 5, 6].forEach((c) => {
      ctx.save(); ctx.strokeStyle = alpha(cc, 0.4); ctx.lineWidth = 2.5; ctx.beginPath();
      for (let i = 0; i <= 120; i++) { const a = (i / 120) * TAU, px = Math.sqrt(c / 4) * Math.cos(a), py = Math.sqrt(c / 3) * Math.sin(a); if (i) ctx.lineTo(map.X(px), map.Y(py)); else ctx.moveTo(map.X(px), map.Y(py)); }
      ctx.stroke(); ctx.restore();
    });
    ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(map.X(0), map.Y(0), map.X(1) - map.X(0), 0, TAU); ctx.stroke(); ctx.restore();
    dot(ctx, map.X(x), map.Y(y), pc, true, 9);
    const g = axes(ctx, { l: 640, r: 1320, t: 90, b: 400 }, [0, T], [2.8, 4.2], { xl: 't', yl: 'z', nx: 4, ny: 7, fx: (v) => ['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] ?? '', fy: (v) => n(v, 1) });
    F.plot(ctx, g, (s) => f(Math.sin(s), Math.cos(s)), fc, { x: [0, T], w: 4 });
    F.tangent(ctx, g, (s) => f(Math.sin(s), Math.cos(s)), t, C('line'), { df: () => dz, w: 3 });
    dot(ctx, g.X(t), g.Y(z), pc, true, 9);
    hits.length = 0; hits.push({ x: map.X(x), y: map.Y(y), r: 14, name: `(sin t, cos t) = (${n(x)}, ${n(y)})` }, { x: g.X(t), y: g.Y(z), r: 14, name: `z = ${n(z, 3)} at t = ${n(t)}` });
    headline(ctx, `t = ${n(t)}: the point (${n(x)}, ${n(y)}) is on the level curve z = ${n(z, 3)}`);
    tex(d.readout, `\\kdzdt=\\kdzdx\\kdxdt+\\kdzdy\\kdydt=8(${n(x)})(${n(Math.cos(t))})-6(${n(y)})(${n(Math.sin(t))})=${hue('derivative', n(dz, 3))}=2\\sin t\\cos t`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* Figure 14.37 + 14.38: a point on the ellipse x² + 3y² + 4y − 4 = 0 or on Example 14.30's rotated ellipse, by its angle
   parameter, and the tangent line of slope −f_x/f_y. Windows fixed per curve, one scale. */
(function () {
  const d = sim('sim-implicit-tangent', 620);
  const R1 = Math.sqrt(16 / 3), A2 = Math.sqrt(41) / 2, B2 = Math.sqrt(20.5);
  const CU = {
    a: { p: (t) => [R1 * Math.cos(t), -2 / 3 + (4 / 3) * Math.sin(t)], fx: (x) => 2 * x, fy: (x, y) => 6 * y + 4, xr: [-3, 3], yr: [-2.5, 1.5],
         eq: 'x^{2}+3y^{2}+4y-4=0', fxT: '2x', fyT: '6y+4' },
    b: { p: (t) => { const x = 0.5 + A2 * Math.cos(t); return [x, x + 3 + B2 * Math.sin(t)]; }, fx: (x, y) => 6 * x - 2 * y + 4, fy: (x, y) => -2 * x + 2 * y - 6, xr: [-4, 5], yr: [-3, 10],
         eq: '3x^{2}-2xy+y^{2}+4x-6y-11=0', fxT: '6x-2y+4', fyT: '-2x+2y-6' },
  };
  const pick = choice(d.controls, { label: 'curve', options: [{ value: 'a', label: 'x² + 3y² + 4y − 4 = 0' }, { value: 'b', label: '3x² − 2xy + y² + 4x − 6y − 11 = 0' }], value: 'b', ms: 0 });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: 360, step: 0.1, value: 297.94, unit: '°', dec: 1, specials: [{ at: () => (pick.value === 'b' ? 297.94 : null), label: 'the point (2, 1)' }] });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const o = CU[pick.value], cc = C('curve'), pc = C('point'), lc = C('line');
    const box = fit(o.xr, o.yr, 90, 590), ax = axes(ctx, box, o.xr, o.yr, { xl: 'x', yl: 'y', nx: o.xr[1] - o.xr[0], ny: o.yr[1] - o.yr[0] });
    ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.beginPath();
    for (let i = 0; i <= 240; i++) { const [x, y] = o.p((i / 240) * TAU); if (i) ctx.lineTo(ax.X(x), ax.Y(y)); else ctx.moveTo(ax.X(x), ax.Y(y)); }
    ctx.closePath(); ctx.stroke(); ctx.restore();
    const [x, y] = o.p((ts.v * Math.PI) / 180), a = o.fx(x, y), b = o.fy(x, y), m = -a / b;
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    if (Math.abs(b) > 1e-9) line(ctx, ax.X(x - 30), ax.Y(y - 30 * m), ax.X(x + 30), ax.Y(y + 30 * m), lc, 3);
    else line(ctx, ax.X(x), ax.Y(o.yr[0]), ax.X(x), ax.Y(o.yr[1]), lc, 3);
    ctx.restore();
    dot(ctx, ax.X(x), ax.Y(y), pc, true, 9);
    hits.length = 0; hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `the point (${n(x)}, ${n(y)}) on the curve` });
    headline(ctx, `At (${n(x)}, ${n(y)}): the tangent line has slope ${Math.abs(b) > 1e-9 ? n(m, 3) : 'undefined (vertical)'}`);
    tex(d.readout, Math.abs(b) > 1e-9 ? `\\frac{dy}{dx}=-\\frac{\\kfx}{\\kfy}=-\\frac{${o.fxT}}{${o.fyT}}=-\\frac{${n(a)}}{${n(b)}}=${hue('derivative', n(m, 3))}` : `\\kfy=${o.fyT}=0:\\;\\text{the tangent line is vertical}`);
  }
  still(d, draw);
})();
};
