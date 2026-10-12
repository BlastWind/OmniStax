/* Figures for section 4.2 Linear Approximations and Differentials. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.2'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, tangent, drag, dot, line, text, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);

/* One linear approximation: f, its tangent line L at a, and a point x the reader drags along f.
   The gap between f(x) and L(x) is the error of the approximation, drawn as a bracket in `error`.
   o.zoom, where the book prints a part (b), is a second fixed window about the book's x. */
function approx(id, o) {
  const d = sim(id, o.H || 470);
  const L = (x) => o.f(o.a) + o.df(o.a) * (x - o.a);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: o.xs[0], max: o.xs[1], step: o.xs[2], value: o.x0, unit: o.unit || '', dec: o.dec, specials: o.specials.map((v) => ({ at: v })) });
  const P = drag(d, { x: xs, y: o.f });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function panel(ctx, box, xr, yr, opt) {
    const fc = C('function'), lc = C('line'), pc = C('point'), ec = C('error'), x = xs.v, fx = o.f(x), Lx = L(x);
    const ax = axes(ctx, box, xr, yr, { xl: 'x', yl: 'y', nx: opt.nx, ny: opt.ny, fx: opt.fx, fy: opt.fy });
    plot(ctx, ax, o.f, fc, { x: o.dom ? [Math.max(xr[0], o.dom[0]), xr[1]] : undefined });
    tangent(ctx, ax, o.f, o.a, lc, { df: o.df });
    dot(ctx, ax.X(o.a), ax.Y(o.f(o.a)), pc, true, 9);
    const inX = x >= xr[0] && x <= xr[1];
    if (inX) {
      const yA = Math.min(Math.max(ax.Y(fx), box.t), box.b), yB = Math.min(Math.max(ax.Y(Lx), box.t), box.b);
      drop(ctx, ax.X(x), Math.max(yA, yB), ax.X(x), ax.Y(Math.max(yr[0], Math.min(yr[1], 0))));
      if (Math.abs(yA - yB) > 6) line(ctx, ax.X(x) + 14, yA, ax.X(x) + 14, yB, ec, 4);
      if (Lx >= yr[0] && Lx <= yr[1]) dot(ctx, ax.X(x), ax.Y(Lx), lc, false, 8);
      if (opt.drag) P.draw(ctx, ax, fc); else if (fx >= yr[0] && fx <= yr[1]) dot(ctx, ax.X(x), ax.Y(fx), fc, true, 8);
    }
    if (opt.tag) text(ctx, opt.tag, (box.l + box.r) / 2, box.b + 62, PAL.ink, { size: 22, align: 'center' });
    return ax;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const x = xs.v, fx = o.f(x), Lx = L(x), err = fx - Lx;
    headline(ctx, `At x = ${o.show(x)}, the tangent line gives ${fmt(Lx, o.vd)} and the function ${fmt(fx, o.vd)}.`);
    const main = o.zoom ? { l: 110, r: 680, t: 90, b: o.H - 100 } : { l: 330, r: 1070, t: 90, b: (o.H || 470) - 70 };
    const ax = panel(ctx, main, o.xr, o.yr, { nx: o.nx, ny: o.ny, fx: o.fx, fy: o.fy, drag: true, tag: o.zoom ? '(a)' : '' });
    text(ctx, o.fl, ax.X(o.flx), ax.Y(o.f(o.flx)) + o.fly, C('function'), { size: 24, weight: 600, align: 'center', tex: true });
    text(ctx, '$\\kL(x)$', ax.X(o.llx), ax.Y(L(o.llx)) + o.lly, C('line'), { size: 24, weight: 600, align: 'center', tex: true });
    let bx = null;
    if (o.zoom) {
      const z = o.zoom, zb = { l: 820, r: 1320, t: 90, b: o.H - 100 };
      const zx = panel(ctx, zb, z.xr, z.yr, { nx: z.nx, ny: z.ny, fx: z.fx, fy: z.fy, tag: '(b)' });
      line(ctx, ax.X(z.xr[0]), ax.Y(z.yr[1]), ax.X(z.xr[1]), ax.Y(z.yr[1]), alpha(PAL.ink, 0.5), 2);
      line(ctx, ax.X(z.xr[0]), ax.Y(z.yr[0]), ax.X(z.xr[1]), ax.Y(z.yr[0]), alpha(PAL.ink, 0.5), 2);
      line(ctx, ax.X(z.xr[0]), ax.Y(z.yr[0]), ax.X(z.xr[0]), ax.Y(z.yr[1]), alpha(PAL.ink, 0.5), 2);
      line(ctx, ax.X(z.xr[1]), ax.Y(z.yr[0]), ax.X(z.xr[1]), ax.Y(z.yr[1]), alpha(PAL.ink, 0.5), 2);
      bx = zx;
    }
    hits = [{ x: ax.X(o.a), y: ax.Y(o.f(o.a)), r: 16, name: o.aName },
      ...(x >= o.xr[0] && x <= o.xr[1] ? [{ x: ax.X(x) + 14, y: (ax.Y(fx) + ax.Y(Lx)) / 2, r: 16, name: `the error f(x) − L(x) = ${fmt(err, o.vd)}` }] : []),
      ...(bx && x >= o.zoom.xr[0] && x <= o.zoom.xr[1] ? [{ x: bx.X(x) + 14, y: (bx.Y(fx) + bx.Y(Lx)) / 2, r: 16, name: `the error f(x) − L(x) = ${fmt(err, o.vd)}` }] : [])];
    ro.set(`\\kf(${o.tx(x)}) = ${n(fx, o.vd)} \\qquad \\kL(${o.tx(x)}) = ${o.Ltex(x)} = ${n(Lx, o.vd)} \\qquad ${typed('error', `\\kf(x) - \\kL(x) = ${n(err, o.vd)}`)}`);
  }
  still(d, draw);
}
const plainX = (dec) => (x) => fmt(x, dec), texX = (dec) => (x) => n(x, dec);

/* Figure 4.7: 1/x and its tangent at a = 2; (b) the window [1.9, 2.3] × [0.42, 0.54] about the book's x = 2.1.
   Axes (a) 0 to 11 by −2 to 2, which hold the book's far point x = 10. */
approx('sim-tangent-reciprocal', {
  H: 520, f: (x) => 1 / x, df: (x) => -1 / (x * x), a: 2, dom: [0.05, Infinity], xs: [0.6, 10.5, 0.01], x0: 2.1, dec: 2, specials: [2, 2.1, 10],
  xr: [0, 11], yr: [-2, 2], nx: 11, ny: 4, vd: 5, show: plainX(2), tx: texX(2), Ltex: (x) => `\\frac{1}{2} - \\frac{1}{4}(${n(x, 2)} - 2)`,
  fl: '$\\kf(x)=\\frac{1}{x}$', flx: 5, fly: -34, llx: 7.2, lly: 30, aName: '(2, 1/2), where the tangent touches',
  zoom: { xr: [1.9, 2.3], yr: [0.42, 0.54], nx: 4, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 2) },
});

/* Figure 4.8: √x and its tangent at a = 9, the book's x = 9.1. Axes 0 to 16 by 0 to 5. */
approx('sim-tangent-root', {
  f: (x) => Math.sqrt(x), df: (x) => 1 / (2 * Math.sqrt(x)), a: 9, dom: [0, Infinity], xs: [0, 16, 0.01], x0: 9.1, dec: 2, specials: [9, 9.1],
  xr: [0, 16], yr: [0, 5], nx: 8, ny: 5, vd: 4, show: plainX(2), tx: texX(2), Ltex: (x) => `3 + \\frac{1}{6}(${n(x, 2)} - 9)`,
  fl: '$\\kf(x)=\\sqrt{x}$', flx: 2.5, fly: -34, llx: 14.5, lly: -30, aName: '(9, 3), where the tangent touches',
});

/* Figure 4.9: sin x and its tangent at a = π/3, with x in degrees as the example asks (62° = 62π/180 rad):
   f and its slope are taken per radian and drawn on a degree axis. Axes −90° to 270° by −1.5 to 2. */
const RAD = Math.PI / 180;
approx('sim-tangent-sine', {
  f: (x) => Math.sin(x * RAD), df: (x) => Math.cos(x * RAD) * RAD, a: 60, xs: [-90, 270, 1], x0: 62, dec: 0, unit: '°', specials: [60, 62],
  xr: [-90, 270], yr: [-1.5, 2], nx: 4, ny: 7, vd: 5, fx: (v) => `${fmt(v, 0)}°`, fy: (v) => fmt(v, 1),
  show: (x) => `${fmt(x, 0)}°`, tx: (x) => `${n(x, 0)}^{\\circ}`, Ltex: (x) => `\\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\left(\\frac{${n(x, 0)}\\pi}{180} - \\frac{\\pi}{3}\\right)`,
  fl: '$\\kf(x)=\\sin x$', flx: 225, fly: 40, llx: -35, lly: 34, aName: '(π/3, √3/2), where the tangent touches',
});

/* Figure 4.10: (1 + x)³ and its tangent 1 + 3x at a = 0; (b) the window [−0.02, 0.04] × [0.94, 1.12] about x = 0.01.
   Axes (a) −2 to 1 by −1 to 4. */
approx('sim-tangent-power', {
  H: 520, f: (x) => (1 + x) ** 3, df: (x) => 3 * (1 + x) ** 2, a: 0, xs: [-2, 1, 0.01], x0: 0.01, dec: 2, specials: [0, 0.01],
  xr: [-2, 1], yr: [-1, 4], nx: 6, ny: 5, vd: 6, fx: (v) => fmt(v, 1), show: plainX(2), tx: (x) => n(1 + x, 2), Ltex: (x) => `1 + 3(${n(x, 2)})`,
  fl: '$\\kf(x)=(1+x)^3$', flx: -1.2, fly: -40, llx: 0.45, lly: 34, aName: '(0, 1), where the tangent touches',
  zoom: { xr: [-0.02, 0.04], yr: [0.94, 1.12], nx: 3, ny: 6, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 2) },
});

/* Figure 4.11: dy along the tangent against Δy along the curve, on a stand-in f(x) = 1 + x²/4 (the book draws
   no formula). Sliders a and dx; axes −0.5 to 4 by 0 to 5. */
(function () {
  const d = sim('sim-differential', 520);
  const f = (x) => 1 + x * x / 4, df = (x) => x / 2;
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 2.5, step: 0.01, value: 1, unit: '', dec: 2 });
  const dxs = ctl(d.controls, { label: 'dx', cls: '', key: 'dx', min: 0.05, max: 1.5, step: 0.01, value: 1.2, unit: '', dec: 2 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), pc = C('point'), ec = C('error'), a = as.v, dx = dxs.v, b = a + dx;
    const Dy = f(b) - f(a), dy = df(a) * dx;
    headline(ctx, `When x increases from ${fmt(a, 2)} by dx = ${fmt(dx, 2)}, y changes by ${fmt(Dy, 3)} and the differential is ${fmt(dy, 3)}.`);
    const ax = axes(ctx, { l: 300, r: 1100, t: 90, b: 440 }, [-0.5, 4], [0, 5], { xl: 'x', yl: 'y', nx: 9, ny: 5, fx: (v) => fmt(v, 1) });
    plot(ctx, ax, f, fc);
    tangent(ctx, ax, f, a, lc, { df });
    const X = ax.X, Y = ax.Y;
    drop(ctx, X(a), Y(f(a)), X(a), Y(0)); drop(ctx, X(b), Y(f(b)), X(b), Y(0));
    line(ctx, X(a), Y(f(a)), X(b), Y(f(a)), alpha(PAL.ink, 0.55), 2.5, [10, 10]);
    line(ctx, X(b) + 44, Y(f(a)), X(b) + 44, Y(f(b)), fc, 4);
    line(ctx, X(b) - 16, Y(f(a)), X(b) - 16, Y(f(a) + dy), lc, 4);
    if (Math.abs(Y(f(b)) - Y(f(a) + dy)) > 4) line(ctx, X(b) + 16, Y(f(a) + dy), X(b) + 16, Y(f(b)), ec, 4);
    const roomy = X(b) - X(a) > 90;
    if (roomy) text(ctx, 'Δy', X(b) + 58, (Y(f(a)) + Y(f(b))) / 2, PAL.ink, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    if (roomy) text(ctx, 'dy', X(b) - 28, (Y(f(a)) + Y(f(a) + dy)) / 2, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    if (roomy) text(ctx, 'dx', (X(a) + X(b)) / 2, Y(f(a)) + 24, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    dot(ctx, X(a), Y(f(a)), pc, true, 9); dot(ctx, X(b), Y(f(b)), fc, true, 8); dot(ctx, X(b), Y(f(a) + dy), lc, false, 8);
    text(ctx, 'a', X(a), Y(0) + 52, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    if (roomy) text(ctx, 'a + dx', X(b), Y(0) + 52, PAL.ink, { size: 22, align: 'center', bg: PAL.panel });
    text(ctx, '$y=\\kf(x)$', X(3.4), Y(f(3.4)) - 34, fc, { size: 24, weight: 600, align: 'center', tex: true });
    hits = [{ x: X(a), y: Y(f(a)), r: 16, name: '(a, f(a)), where the tangent L touches' }, { x: X(b), y: Y(f(b)), r: 16, name: '(a + dx, f(a + dx)) on the curve' },
      { x: X(b), y: Y(f(a) + dy), r: 16, name: '(a + dx, L(a + dx)) on the tangent line' },
      { x: X(b) - 16, y: (Y(f(a)) + Y(f(a) + dy)) / 2, r: 12, name: `dy = ${fmt(dy, 3)}, the rise of the tangent line` },
      { x: X(b) + 44, y: (Y(f(a)) + Y(f(b))) / 2, r: 12, name: `Δy = ${fmt(Dy, 3)}, the rise of the curve` },
      { x: X(b) + 16, y: (Y(f(a) + dy) + Y(f(b))) / 2, r: 14, name: `the error Δy − dy = ${fmt(Dy - dy, 3)}` }];
    ro.set(`\\Delta y = \\kf(a+dx) - \\kf(a) = ${n(Dy, 3)} \\qquad dy = \\kfprime(a)\\,dx = ${n(df(a), 3)}(${n(dx, 2)}) = ${n(dy, 3)} \\qquad ${typed('error', `\\Delta y - dy = ${n(Dy - dy, 3)}`)}`);
  }
  still(d, draw);
})();
};
