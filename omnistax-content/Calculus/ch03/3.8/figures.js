/* Figures for section 3.8 Implicit Differentiation. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.8'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, curve, tangent, dot, line, text, label, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const through = (ctx, ax, x0, y0, m, color, o = {}) => tangent(ctx, ax, () => y0, x0, color, { df: () => m, w: 4, ...o });
/* a box of equal units on x and y, centred, for a range of the given extents and height */
const square = (xr, yr, t, b) => { const u = (b - t) / (yr[1] - yr[0]), w = u * (xr[1] - xr[0]); return { l: 700 - w / 2, r: 700 + w / 2, t, b }; };

/* Figure 3.30: x² + y² = 25 drawn faint, and the chosen one of the book's three functions it defines on top. */
(function () {
  const d = sim('sim-implicit-circle', 520);
  const up = (x) => Math.sqrt(25 - x * x), lo = (x) => -Math.sqrt(25 - x * x);
  const which = choice(d.controls, { label: 'y', options: [{ value: 'up', label: '√(25 − x²)' }, { value: 'lo', label: '−√(25 − x²)' }, { value: 'split', label: 'split at 0' }], value: 'up', aria: 'function defined by the equation' });
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const xr = [-6, 6], yr = [-6, 6];
    const ax = axes(ctx, square(xr, yr, 90, 470), xr, yr, { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    curve(ctx, (t) => 5 * Math.sin(t), 0, 2 * Math.PI, (t) => ax.X(5 * Math.cos(t)), ax.Y, alpha(PAL.ink, 0.25), 3, 160);
    const k = which.value;
    if (k === 'up') plot(ctx, ax, [{ f: up, x: [-5, 5], ends: '[]' }], fc);
    else if (k === 'lo') plot(ctx, ax, [{ f: lo, x: [-5, 5], ends: '[]' }], fc);
    else plot(ctx, ax, [{ f: up, x: [-5, 0], ends: '[)' }, { f: lo, x: [0, 5], ends: '(]' }], fc);
    text(ctx, '$x^2 + y^2 = 25$', ax.X(3.9), ax.Y(5.4), PAL.muted, { size: 20, align: 'left', tex: true });
    hits = [{ x: ax.X(0), y: ax.Y(k === 'lo' ? -5 : 5), r: 16, name: k === 'up' ? 'y = √(25 − x²), the upper half' : k === 'lo' ? 'y = −√(25 − x²), the lower half' : 'the upper half for −5 < x < 0' }];
    headline(ctx, k === 'up' ? 'The upper half of the circle: $y = \\sqrt{25 - x^2}$.' : k === 'lo' ? 'The lower half of the circle: $y = -\\sqrt{25 - x^2}$.'
      : 'One function from each half: the upper half left of 0, the lower half right of it.');
  }
  still(d, draw);
})();

/* Figures 3.31 and 3.32, with Example 3.73's orbit: a point on the curve, set by its direction from the origin, and
   the tangent there with dy/dx from implicit differentiation. Each curve sits in a box of equal units. */
(function () {
  const d = sim('sim-implicit-tangent', 620);
  const D2R = Math.PI / 180;
  const folR = (p) => (3 * Math.sin(p) * Math.cos(p)) / (Math.sin(p) ** 3 + Math.cos(p) ** 3);
  const CURVES = {
    circle: { xr: [-7, 7], yr: [-7, 7], pt: (p) => [5 * Math.cos(p), 5 * Math.sin(p)], num: (x) => -x, den: (x, y) => y, ang: [0, 360, 306.8699],
      tex: 'x^{2}+y^{2}=25', dyx: '-\\frac{x}{y}', eq: 'Example 3.71' },
    folium: { xr: [-3, 3], yr: [-3, 3], pt: (p) => [folR(p) * Math.cos(p), folR(p) * Math.sin(p)], num: (x, y) => 3 * y - 3 * x * x, den: (x, y) => 3 * y * y - 3 * x, ang: [-38, 128, 45],
      tex: 'y^{3}+x^{3}-3xy=0', dyx: '\\frac{3y-3x^{2}}{3y^{2}-3x}', eq: 'Example 3.72' },
    ellipse: { xr: [-6, 10], yr: [-4, 4], pt: (p) => { const r = 10 / Math.sqrt(4 * Math.cos(p) ** 2 + 25 * Math.sin(p) ** 2); return [r * Math.cos(p), r * Math.sin(p)]; }, num: (x) => -4 * x, den: (x, y) => 25 * y, ang: [0, 360, 28.0725],
      tex: '4x^{2}+25y^{2}=100', dyx: '-\\frac{4x}{25y}', eq: 'Example 3.73' },
  };
  let cur = CURVES.circle;
  const which = choice(d.controls, { label: 'curve', options: [{ value: 'circle', label: 'circle' }, { value: 'folium', label: 'folium' }, { value: 'ellipse', label: 'ellipse' }], value: 'circle', aria: 'curve', onInput: () => {
    cur = CURVES[which.value]; ps.range({ min: cur.ang[0], max: cur.ang[1], step: 0.0001, value: cur.ang[2], unit: '°', dec: 1 }); } });
  const ps = ctl(d.controls, { label: 'direction', cls: '', key: 'dir', min: 0, max: 360, step: 0.0001, value: 306.8699, unit: '°', dec: 1 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point');
    const c = cur, ax = axes(ctx, square(c.xr, c.yr, 100, 560), c.xr, c.yr, { xl: 'x', yl: 'y', nx: c.xr[1] - c.xr[0], ny: c.yr[1] - c.yr[0], fx: (v) => (v % 2 ? '' : fmt(v, 0)), fy: (v) => (v % 2 ? '' : fmt(v, 0)) });
    const lo = which.value === 'folium' ? -40 : 0, hi = which.value === 'folium' ? 130 : 360;
    ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
    ctx.strokeStyle = fc; ctx.lineWidth = 5; ctx.beginPath();
    let pen = false;
    for (let i = 0; i <= 1200; i++) {
      const p = (lo + ((hi - lo) * i) / 1200) * D2R, [x, y] = c.pt(p);
      if (!Number.isFinite(x) || Math.abs(x) > 40 || Math.abs(y) > 40) { pen = false; continue; }
      if (pen) ctx.lineTo(ax.X(x), ax.Y(y)); else ctx.moveTo(ax.X(x), ax.Y(y)); pen = true;
    }
    ctx.stroke(); ctx.restore();
    const [x, y] = c.pt(ps.v * D2R), num = c.num(x, y), den = c.den(x, y), vertical = Math.abs(den) < 1e-6 * Math.max(1, Math.abs(num)), m = num / den;
    if (vertical) line(ctx, ax.X(x), ax.box.t, ax.X(x), ax.box.b, lc, 4);
    else through(ctx, ax, x, y, m, lc);
    if (which.value === 'ellipse' && !vertical && Math.abs(m) > 1e-9) {
      const xi = x - y / m;
      if (xi > c.xr[0] && xi < c.xr[1]) { dot(ctx, ax.X(xi), ax.Y(0), pc, false, 9); label(ctx, `(${fmt(xi, 2)}, 0)`, ax.X(xi), ax.Y(0), { side: 'below', gap: 26 }); }
    }
    dot(ctx, ax.X(x), ax.Y(y), fc, true, 10);
    label(ctx, `(${fmt(x, 2)}, ${fmt(y, 2)})`, ax.X(x), ax.Y(y), { side: x >= 0 ? 'right' : 'left', gap: 26 });
    text(ctx, `$${c.tex}$`, ax.box.l + 10, ax.box.t + 20, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    hits = [
      { x: ax.X(x), y: ax.Y(y), r: 18, name: `(${fmt(x, 3)}, ${fmt(y, 3)}) on ${c.tex.replace(/[{}]/g, '').replace(/\^2/g, '²').replace(/\^3/g, '³')}` },
    ];
    headline(ctx, vertical ? `At (${fmt(x, 2)}, ${fmt(y, 2)}) the denominator of dy/dx is 0: the tangent is vertical.`
      : `At (${fmt(x, 2)}, ${fmt(y, 2)}) the tangent has slope dy/dx = ${fmt(m, 3)}.`);
    ro.set(vertical ? `\\kdydx = ${c.dyx}\\ \\text{is undefined at }(${n(x)}, ${n(y)})`
      : `\\kdydx = ${c.dyx} = \\frac{${n(num, 3)}}{${n(den, 3)}} = ${n(m, 3)}`, undefined, { form: which.value });
  }
  still(d, draw);
})();
};
