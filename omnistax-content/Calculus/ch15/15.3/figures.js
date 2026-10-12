/* Figures for section 15.3 Double Integrals in Polar Coordinates. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.3'] = function (root, F) {
const { C, PAL, alpha, ctl, register, tex, fmt, begin, line, dot, text } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
const nt = (v) => String(+v.toFixed(2)).replace('-', '−');
const lab3 = (s, p, color) => ({ k: 'label', s, p, color });
const PI = Math.PI;
const at = (r, t) => [r * Math.cos(t), r * Math.sin(t)];

/* a plane region filled from its outline */
function fill(ctx, ax, R, color, a = 0.25) {
  const ol = SP.outline(R, 64);
  ctx.save(); ctx.fillStyle = alpha(color, a); ctx.beginPath(); ol.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1])))); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* the polar curve r = h(θ) on [a, b] */
const rcurve = (ctx, ax, h, on, color, w = 4) => F.polar.path(ctx, ax, (t) => at(h(t), t), on, color, { w });
const piece = (list, v) => list.find((q) => v >= q.on[0] - 1e-9 && v <= q.on[1] + 1e-9);
/* A polar region, its pieces between r = lo(θ) and r = hi(θ), its curves labelled, and the ray at θ
   whose segment in the region is the inner integral's range. */
function polarFig(id, cfg) {
  const H = cfg.H ?? 520, d = sim(id, H);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: cfg.th[0], max: cfg.th[1], step: 0.005, value: cfg.th[2], unit: '', dec: 2, specials: cfg.specials });
  still(d, () => {
    const { ctx } = begin(d.c), ax = F.polar.frame(ctx, { l: 160, r: 1240, t: 24, b: H - 24 }, cfg.win, { ring: cfg.ring ?? 1, spokes: cfg.spokes ?? 12, angles: !!cfg.angles });
    cfg.P.forEach((q) => fill(ctx, ax, { theta: q.on, r: [q.lo, q.hi] }, C('region')));
    cfg.curves.forEach((c) => {
      const color = c.color();
      rcurve(ctx, ax, c.h, c.on, color);
      if (c.label) { const p = at(c.h(c.lt), c.lt); text(ctx, c.label, ax.X(p[0]) + (c.dx ?? 12), ax.Y(p[1]) + (c.dy ?? -14), color, { size: 20, tex: true, bg: PAL.panel, align: c.align ?? 'left' }); }
    });
    const t = ts.v, q = piece(cfg.P, t), far = 1.15 * Math.max(Math.abs(cfg.win.x[0]), Math.abs(cfg.win.x[1]), Math.abs(cfg.win.y[0]), Math.abs(cfg.win.y[1]));
    const e = at(far, t);
    line(ctx, ax.X(0), ax.Y(0), ax.X(e[0]), ax.Y(e[1]), alpha(PAL.ink, 0.35), 2, [6, 8]);
    let tt = '';
    if (q) {
      const a = q.lo(t), b = q.hi(t), A = at(a, t), B = at(b, t);
      line(ctx, ax.X(A[0]), ax.Y(A[1]), ax.X(B[0]), ax.Y(B[1]), PAL.ink, 5);
      dot(ctx, ax.X(A[0]), ax.Y(A[1]), PAL.ink, true, 7); dot(ctx, ax.X(B[0]), ax.Y(B[1]), PAL.ink, true, 7);
      tt = cfg.rtex ? `${nt(a)}\\le r\\le ${cfg.rtex(t)}=${nt(b)}` : `${nt(a)}\\le r\\le ${nt(b)}`;
    }
    const strip = `\\ktheta=${nt(t)}:\\;${tt}`;
    tex(d.readout, cfg.tail ? (cfg.oneLine ? `${strip},\\qquad ${cfg.tail(t)}` : `\\begin{gathered}${strip}\\\\ ${cfg.tail(t)}\\end{gathered}`) : strip);
  });
}
const FN = () => C('function'), CV = () => C('curve');

/* Figure 15.28: the polar rectangle 1 ≤ r ≤ 3, π/6 ≤ θ ≤ 2π/3 cut into m by n polar subrectangles; window −3.2 to 2.2 by −0.4 to 3.4 */
(function () {
  const H = 560, d = sim('sim-polar-rectangle', H);
  const a = 1, b = 3, al = PI / 6, be = 2 * PI / 3;
  const ms = ctl(d.controls, { label: 'm', cls: '', key: 'm', min: 1, max: 8, step: 1, value: 4, unit: '', dec: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 8, step: 1, value: 5, unit: '', dec: 0 });
  still(d, () => {
    const { ctx } = begin(d.c), ax = F.polar.frame(ctx, { l: 160, r: 1240, t: 24, b: H - 24 }, { x: [-3.2, 2.2], y: [-0.4, 3.4] }, { ring: 1, spokes: 12 });
    const m = ms.v, n = ns.v, dr = (b - a) / m, dt = (be - al) / n, rc = C('region');
    fill(ctx, ax, { theta: [al, be], r: [a, b] }, rc, 0.18);
    for (let i = 0; i <= m; i++) rcurve(ctx, ax, () => a + i * dr, [al, be], rc, i % m ? 1.5 : 3.5);
    for (let j = 0; j <= n; j++) { const t = al + j * dt, p = at(a, t), q = at(b, t); line(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(q[0]), ax.Y(q[1]), rc, j % n ? 1.5 : 3.5); }
    const i = Math.min(2, m), j = Math.min(3, n), r0 = a + (i - 1) * dr, r1 = a + i * dr, t0 = al + (j - 1) * dt, t1 = al + j * dt;
    fill(ctx, ax, { theta: [t0, t1], r: [r0, r1] }, rc, 0.6);
    rcurve(ctx, ax, () => r0, [t0, t1], PAL.ink, 3); rcurve(ctx, ax, () => r1, [t0, t1], PAL.ink, 3);
    [t0, t1].forEach((t) => { const p = at(r0, t), q = at(r1, t); line(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(q[0]), ax.Y(q[1]), PAL.ink, 3); });
    const mid = (t0 + t1) / 2, put = (r, t, s, dx, dy) => { const p = at(r, t); text(ctx, s, ax.X(p[0]) + dx, ax.Y(p[1]) + dy, PAL.ink, { size: 20, tex: true, bg: PAL.panel, align: 'center' }); };
    put(r1 + 0.32, mid, '$r_{i}\\Delta\\theta$', 0, 0); put(Math.max(r0 - 0.3, 0.45), mid, '$r_{i-1}\\Delta\\theta$', 0, 0); put((r0 + r1) / 2, t1 + 0.12, '$\\Delta r$', 0, 0);
    put((r0 + r1) / 2, mid, `$\\kR_{${i}${j}}$`, 0, 0);
    const rs = (r0 + r1) / 2, dA = rs * dr * dt, tot = 0.5 * (b * b - a * a) * (be - al);
    tex(d.readout, `\\Delta A=r_{ij}^{*}\\,\\Delta r\\,\\Delta\\theta=${n2(rs)}\\cdot ${n2(dr)}\\cdot ${n2(dt, 3)}=${hue('integral', n2(dA, 3))},\\qquad \\sum\\Delta A=${hue('integral', n2(tot, 3))}`);
  });
})();

/* Figure 15.29 + 15.34: polar boxes under Example 15.29's z = 1 − x² − y² over the unit disk; box ±1.2 by ±1.2 by 0 to 1.2 */
(function () {
  const d = sim('sim-polar-boxes');
  const f = (x, y) => 1 - x * x - y * y, R = { theta: [0, 2 * PI], r: [0, 1] }, box = [[-1.2, 1.2], [-1.2, 1.2], [0, 1.2]];
  const S = F.space3d(d, { box, h: 540, pitch: [0.1, 1.4] });
  const ms = ctl(d.controls, { label: 'm', cls: '', key: 'm', min: 1, max: 10, step: 1, value: 4, unit: '', dec: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 2, max: 24, step: 1, value: 8, unit: '', dec: 0 });
  function draw() {
    const { cells, sum } = SP.riemann2(R, f, ns.v, ms.v, 'mid');
    S.set('axes', SP.axes(box, { ticks: 0.5 }));
    S.set('base', [{ k: 'faces', faces: [SP.outline(R, 64).map((p) => [p[0], p[1], 0])], color: C('region'), alpha: 0.2 }, lab3('$\\kR$', [1.05, -0.6, 0], C('region'))]);
    S.set('graph', [...SP.graph(f, R, C('surface'), { alpha: 0.4, grid: 8, n: 40 }), lab3('$z=1-x^{2}-y^{2}$', [0, 0, 1.12], C('surface'))]);
    S.set('boxes', SP.boxes(cells, C('integral'), { alpha: 0.2 }));
    tex(d.readout, `\\sum_{i=1}^{${ms.v}}\\sum_{j=1}^{${ns.v}}\\kf(r_{ij}^{*},\\theta_{ij}^{*})\\,r_{ij}^{*}\\,\\Delta r\\,\\Delta\\theta=${hue('integral', n2(sum, 3))},\\qquad \\iint_{\\kR}(1-x^{2}-y^{2})\\,dA=\\frac{\\pi}{2}=${hue('integral', n2(PI / 2, 3))}`);
  }
  still(d, draw);
})();

/* Figure 15.30: Example 15.24's band 1 ≤ r ≤ 3, 0 ≤ θ ≤ π; window −3.4 to 3.4 by −0.5 to 3.4 */
polarFig('fig-semicircular-band', {
  win: { x: [-3.4, 3.4], y: [-0.5, 3.4] }, th: [0, PI, 1.1],
  P: [{ on: [0, PI], lo: () => 1, hi: () => 3 }],
  curves: [
    { h: () => 1, on: [0, PI], color: CV, label: '$r=1$', lt: 2.2, dx: 14, dy: 14 },
    { h: () => 3, on: [0, PI], color: CV, label: '$r=3$', lt: 0.55, dx: 10, dy: -8 },
  ],
});

/* Figure 15.31: Example 15.27's half annulus 1 ≤ r ≤ 2, π/2 ≤ θ ≤ 3π/2; window −2.4 to 1 by −2.3 to 2.3 */
polarFig('fig-annulus', {
  win: { x: [-2.4, 1], y: [-2.3, 2.3] }, th: [PI / 2, 3 * PI / 2, 2.6],
  P: [{ on: [PI / 2, 3 * PI / 2], lo: () => 1, hi: () => 2 }],
  curves: [
    { h: () => 1, on: [PI / 2, 3 * PI / 2], color: CV, label: '$r=1$', lt: PI, dx: 14, dy: -16 },
    { h: () => 2, on: [PI / 2, 3 * PI / 2], color: CV, label: '$r=2$', lt: 3.9, dx: -10, dy: 18, align: 'right' },
  ],
  tail: () => `\\iint_{\\kR}(x+y)\\,dA=\\int_{\\pi/2}^{3\\pi/2}\\int_{1}^{2}(r\\cos\\theta+r\\sin\\theta)\\,r\\,dr\\,d\\theta=${hue('integral', '-\\tfrac{14}{3}')}`,
});

/* Figure 15.32: a general polar region between r = h₁(θ) and r = h₂(θ), π/8 ≤ θ ≤ 7π/8 (stand-ins); window −2.6 to 2.6 by −0.4 to 2.9 */
(function () {
  const h1 = (t) => 0.7 + 0.25 * Math.sin(3 * t), h2 = (t) => 2.2 + 0.4 * Math.cos(2 * t), al = PI / 8, be = 7 * PI / 8;
  polarFig('sim-general-polar', {
    win: { x: [-2.6, 2.6], y: [-0.4, 2.9] }, th: [al, be, 1.2],
    P: [{ on: [al, be], lo: h1, hi: h2 }],
    curves: [
      { h: h1, on: [al, be], color: FN, label: '$r=\\kh_{1}(\\theta)$', lt: PI / 2, dx: 0, dy: 26, align: 'center' },
      { h: h2, on: [al, be], color: FN, label: '$r=\\kh_{2}(\\theta)$', lt: 0.55, dx: 10, dy: -10 },
    ],
    tail: (t) => `\\theta=\\alpha=\\tfrac{\\pi}{8}\\;\\text{to}\\;\\theta=\\beta=\\tfrac{7\\pi}{8}:\\quad \\iint_{\\kD}\\kf(r,\\theta)\\,r\\,dr\\,d\\theta=\\int_{\\alpha}^{\\beta}\\int_{\\kh_{1}(\\theta)}^{\\kh_{2}(\\theta)}\\kf(r,\\theta)\\,r\\,dr\\,d\\theta`,
  });
})();

/* Figure 15.33: Example 15.28's upper half cardioid, 0 ≤ r ≤ 1 + cos θ for 0 ≤ θ ≤ π; window −0.6 to 2.3 by −0.5 to 1.6 */
polarFig('fig-cardioid-half', {
  win: { x: [-0.6, 2.3], y: [-0.5, 1.6] }, ring: 0.5, th: [0, PI, 1],
  P: [{ on: [0, PI], lo: () => 0, hi: (t) => 1 + Math.cos(t) }],
  curves: [{ h: (t) => 1 + Math.cos(t), on: [0, PI], color: CV, label: '$r=1+\\cos\\theta$', lt: 0.9, dx: 12, dy: -12 }],
  tail: () => `\\iint_{\\kD}r^{2}\\sin\\theta\\;r\\,dr\\,d\\theta=\\int_{0}^{\\pi}\\int_{0}^{1+\\cos\\theta}r^{3}\\sin\\theta\\,dr\\,d\\theta=${hue('integral', '\\tfrac{8}{5}')}`,
});

/* Figure 15.35, a still copy: Example 15.30's solid under z = 4 − x² − y² over the disk (x − 1)² + y² ≤ 1; box −0.3 to 2.3 by ±1.3 by 0 to 4.3 */
(function () {
  const d = sim('fig-paraboloid-cap');
  const box = [[-0.3, 2.3], [-1.3, 1.3], [0, 4.3]], E = { theta: [-PI / 2, PI / 2], r: [0, (t) => 2 * Math.cos(t)], z: [0, (t, r) => 4 - r * r] };
  const S = F.space3d(d, { box, h: 460, locked: true, turn: -2.4, tilt: 0.4 });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('solid', [...SP.solid(E, C('region'), { alpha: 0.45 }),
      lab3('$z=4-x^{2}-y^{2}$', [0.6, 0.3, 4.1], C('surface')), lab3('$(x-1)^{2}+y^{2}=1$', [2.0, -1.1, 0], C('region'))]);
    tex(d.readout, `\\kV=\\int_{-\\pi/2}^{\\pi/2}\\int_{0}^{2\\cos\\theta}(4-r^{2})\\,r\\,dr\\,d\\theta=${hue('integral', '\\tfrac{5}{2}\\pi')}`);
  });
})();

/* Figure 15.36, a still copy: Example 15.31's solid under z = x² + y² over the triangle between y = x, x = 0 and x + y = 2; box 0 to 1.3 by 0 to 2.3 by 0 to 4.3 */
(function () {
  const d = sim('fig-paraboloid-triangle');
  const box = [[0, 1.3], [0, 2.3], [0, 4.3]], E = { x: [0, 1], y: [(x) => x, (x) => 2 - x], z: [0, (x, y) => x * x + y * y] };
  const S = F.space3d(d, { box: [box[0], box[1], [0, 2.15]], h: 460, locked: true, turn: -2.1, tilt: 0.4 });
  const Eh = { x: [0, 1], y: [(x) => x, (x) => 2 - x], z: [0, (x, y) => (x * x + y * y) / 2] };
  still(d, () => {
    const ax = SP.axes([box[0], box[1], [0, 2.15]], { ticks: [1, 1, 0] });
    [1, 2, 3, 4].forEach((z) => ax.push({ k: 'label', s: String(z), p: [0, -0.12, z / 2], cls: 'tick' }, { k: 'segs', segs: [[[0, -0.03, z / 2], [0, 0.03, z / 2]]], color: 'muted', w: 2 }));
    S.set('axes', ax);
    S.set('solid', [...SP.solid(Eh, C('region'), { alpha: 0.45 }), lab3('$z=x^{2}+y^{2}$', [0.3, 1.9, 1.95], C('surface')), lab3('$\\kD$', [0.4, 1.0, 0], C('region'))]);
    tex(d.readout, `\\kV=\\int_{0}^{1}\\int_{x}^{2-x}(x^{2}+y^{2})\\,dy\\,dx=${hue('integral', '\\tfrac{4}{3}')}`);
  });
})();

/* Figure 15.37: the cone z = h − (h/a)√(x² + y²) of Example 15.32, a and h on sliders; box ±3.2 by ±3.2 by 0 to 3.2 */
(function () {
  const d = sim('sim-cone-volume');
  const box = [[-3.2, 3.2], [-3.2, 3.2], [0, 3.2]];
  const S = F.space3d(d, { box, h: 480, locked: true, turn: -2.25, tilt: 0.35, fit: 2.7 });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 3, step: 0.05, value: 2, unit: '', dec: 2, detents: [2] });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.5, max: 3, step: 0.05, value: 2, unit: '', dec: 2, detents: [2] });
  still(d, () => {
    const a = as.v, h = hs.v;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('cone', [...SP.solid({ theta: [0, 2 * PI], r: [0, a], z: [0, (t, r) => h - (h / a) * r] }, C('region'), { alpha: 0.45 }),
      lab3(`$z=${nt(h)}-\\tfrac{${nt(h)}}{${nt(a)}}\\sqrt{x^{2}+y^{2}}$`, [0, 0, h + 0.3], C('surface'))]);
    tex(d.readout, `\\kV=\\int_{0}^{2\\pi}\\int_{0}^{${nt(a)}}(${nt(h)}-\\tfrac{${nt(h)}}{${nt(a)}}r)\\,r\\,dr\\,d\\theta=\\tfrac{1}{3}\\pi a^{2}h=${hue('integral', n2(PI * a * a * h / 3, 3))}`);
  });
})();

/* Figure 15.38: the rose r = cos 4θ, one petal −π/8 ≤ θ ≤ π/8 shaded; window ±1.15 both ways */
polarFig('sim-rose-petal', {
  win: { x: [-1.15, 1.15], y: [-1.15, 1.15] }, ring: 0.5, spokes: 16, th: [-PI / 8, PI / 8, 0.15],
  P: [{ on: [-PI / 8, PI / 8], lo: () => 0, hi: (t) => Math.cos(4 * t) }],
  curves: [{ h: (t) => Math.cos(4 * t), on: [0, 2 * PI], color: CV, label: '$r=\\cos 4\\theta$', lt: 0.04, dx: 16, dy: -22 }],
  tail: () => `\\kA=8\\int_{-\\pi/8}^{\\pi/8}\\int_{0}^{\\cos 4\\theta}1\\,r\\,dr\\,d\\theta=8\\cdot ${hue('integral', '\\tfrac{\\pi}{16}')}=${hue('integral', '\\tfrac{\\pi}{2}')}`,
});

/* Figure 15.39: the region inside both r = 3 cos θ and r = 1 + cos θ; window −0.6 to 3.2 by −1.9 to 1.9 */
polarFig('sim-circle-cardioid', {
  win: { x: [-0.6, 3.2], y: [-1.9, 1.9] }, th: [-PI / 2, PI / 2, 0.6], specials: [{ at: PI / 3 }, { at: -PI / 3 }],
  P: [{ on: [-PI / 2, -PI / 3], lo: () => 0, hi: (t) => Math.max(0, 3 * Math.cos(t)) }, { on: [-PI / 3, PI / 3], lo: () => 0, hi: (t) => 1 + Math.cos(t) }, { on: [PI / 3, PI / 2], lo: () => 0, hi: (t) => Math.max(0, 3 * Math.cos(t)) }],
  curves: [
    { h: (t) => 3 * Math.cos(t), on: [-PI / 2, PI / 2], color: () => F.ref('circle-3cos'), label: '$r=3\\cos\\theta$', lt: 1.2, dx: 10, dy: -12 },
    { h: (t) => 1 + Math.cos(t), on: [0, 2 * PI], color: () => F.ref('cardioid-1cos'), label: '$r=1+\\cos\\theta$', lt: 2.3, dx: -10, dy: -12, align: 'right' },
  ],
  rtex: (t) => (Math.abs(t) <= PI / 3 ? '1+\\cos\\ktheta' : '3\\cos\\ktheta'), oneLine: true,
  tail: () => `\\kA=${hue('integral', '\\tfrac{5}{4}\\pi')}`,
});
};
