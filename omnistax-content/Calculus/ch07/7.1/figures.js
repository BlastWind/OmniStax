/* Figures for section 7.1 Integration by Parts. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.1'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, line, text, label, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Figure 7.2: the area under tan⁻¹x on [0, b] and the area beside it fill the box uv. Axes fixed at
   0 to 3.2 by 0 to 1.4, the reach of b = 3 (tan⁻¹3 ≈ 1.25). */
(function () {
  const d = sim('sim-parts-area', 520);
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.25, max: 3, step: 0.01, value: 1, unit: '', dec: 2, aria: 'right end b of the interval', specials: [{ at: 1 }] });
  const ro = readout(d);
  const BOX = { l: 170, r: 1250, t: 100, b: 450 };
  const u = Math.atan;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), under = F.ref('parts-under'), beside = F.ref('parts-beside');
    const bv = b.v, top = u(bv), box = bv * top, beneath = box - 0.5 * Math.log(1 + bv * bv), aside = box - beneath;
    headline(ctx, `b = ${fmt(bv, 2)}: the box b·tan⁻¹b = ${fmt(box, 3)} is ${fmt(beneath, 3)} under the curve and ${fmt(aside, 3)} beside it`);
    const ax = axes(ctx, BOX, [0, 3.2], [0, 1.4], { xl: 'x = v', yl: 'y = u', nx: 8, ny: 7, fx: (t) => fmt(t, 1), fy: (t) => fmt(t, 1) });
    shade(ctx, ax, u, 0, 0, bv, under, { alpha: 0.32 });
    shade(ctx, ax, () => top, u, 0, bv, beside, { alpha: 0.32 });
    const guide = alpha(PAL.ink, 0.4);
    line(ctx, ax.X(bv), ax.Y(0), ax.X(bv), ax.Y(top), guide, 2.5, [10, 10]);
    line(ctx, ax.X(0), ax.Y(top), ax.X(bv), ax.Y(top), guide, 2.5, [10, 10]);
    plot(ctx, ax, u, fc, { x: [0, 3.2] });
    /* the two areas named in a legend at the top left of the box, set on panels so it reads over the shading */
    [['$\\int u\\,dv$ (under the curve)', under], ['$\\int v\\,du$ (beside it)', beside]].forEach(([t, c], i) => {
      const y = BOX.t + 22 + i * 40; ctx.save(); ctx.globalAlpha = 0.5; ctx.fillStyle = c; ctx.fillRect(200, y - 12, 36, 24); ctx.restore();
      text(ctx, t, 250, y, PAL.ink, { size: 22, tex: true, bg: PAL.panel });
    });
    label(ctx, 'y = tan⁻¹x', ax.X(2.4), ax.Y(u(2.4)), { side: 'below', color: fc, size: 22, gap: 30 });
    label(ctx, `(${fmt(bv, 2)}, ${fmt(top, 3)})`, ax.X(bv), ax.Y(top), { side: 'right', size: 20, gap: 24 });
    const I = (s) => typed('integral', s);
    ro.set(`${I(`\\int_0^{${n(bv, 2)}}\\tan^{-1}x\\,dx`)} = x\\tan^{-1}x\\Big|_0^{${n(bv, 2)}} - ${I(`\\int_0^{${n(bv, 2)}}\\frac{x}{x^{2}+1}\\,dx`)} = ${n(box)} - ${n(aside)} = ${I(n(beneath))}`);
  }
  still(d, draw);
})();

/* Figure 7.3: the region under e⁻ˣ on [0, 1] turned about the y-axis, and one shell of it. Scene units: one unit of
   x or y is 1.6 in the scene, the axis of revolution through the origin. */
(function () {
  const d = sim('sim-shell-volume');
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.05, max: 0.95, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'radius x of the shell' });
  const ro = readout(d);
  const v = F.view3d(d.stage, { h: 460, dist: 8, tilt: 0.22, yaw: 'free', pitch: [-1.3, 1.3] });
  const g = v.part(0); g.position.y = -0.9;
  const K = 1.6, f = (t) => Math.exp(-t), W = 0.05;
  const { polyline } = F.mesh;
  const P = (px, py, pz = 0) => [K * px, K * py, K * pz];
  function draw() {
    v.clear();
    const xv = x.v, h = f(xv);
    const solid = F.revolve.mesh(g, F.revolve.between(f, () => 0, 0, 1, 48).map(([a, b]) => [K * a, K * b]), { x: 0 }, C('region'), { alpha: 0.26 });
    v.pickable(solid, 'the solid of revolution');
    const shell = F.revolve.mesh(g, F.revolve.rect(K * (xv - W / 2), K * (xv + W / 2), 0, K * h), { x: 0 }, C('integral'), { alpha: 0.6 });
    v.pickable(shell, `the shell of radius ${fmt(xv, 2)} and height ${fmt(h, 2)}`);
    polyline(g, Array.from({ length: 41 }, (_, i) => P(i / 40, f(i / 40))), C('function'));
    polyline(g, [P(xv - W / 2, 0), P(xv - W / 2, h), P(xv + W / 2, h), P(xv + W / 2, 0)], PAL.ink);
    polyline(g, [P(0, 0), P(0, 1.25)], PAL.muted);
    polyline(g, [P(-1.2, 0), P(1.25, 0)], PAL.muted);
    v.label('y = e⁻ˣ', P(0.8, f(0.8) + 0.05), g, -14);
    v.label('y-axis', P(0, 1.32), g, -12);
    v.headline(`The shell at $x = ${n(xv, 2)}$ has radius ${fmt(xv, 2)} and height $e^{-${n(xv, 2)}} \\approx ${n(h, 2)}$`);
    const I = (s) => typed('integral', s);
    ro.set(`${I('V')} = 2\\pi\\int_0^1 xe^{-x}\\,dx = 2\\pi - \\frac{4\\pi}{e} \\approx ${I('1.6603')} \\qquad 2\\pi(${n(xv, 2)})(${n(h, 2)})\\,\\Delta x = ${n(2 * Math.PI * xv * h, 3)}\\,\\Delta x`);
  }
  still(d, draw);
})();
};
