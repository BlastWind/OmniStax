/* Figures for section 7.3 Trigonometric Substitution. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, shade, line, text, label, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* A right triangle in canvas units: the vertex of θ at o, the side along the axis to q, the right angle at q, the third
   vertex at p. Sides are labelled on the outside, θ by its arc; `fill` shades the inside faintly. */
function triangle(ctx, o, q, p, labels, th) {
  const ink = PAL.ink, ac = C('angle');
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.beginPath(); ctx.moveTo(...o); ctx.lineTo(...q); ctx.lineTo(...p); ctx.closePath(); ctx.fill(); ctx.restore();
  line(ctx, ...o, ...q, ink, 4); line(ctx, ...q, ...p, ink, 4); line(ctx, ...o, ...p, ink, 4);
  /* the right angle's square, turned to sit inside */
  const ux = Math.sign(o[0] - q[0]) || 1, uy = Math.sign(p[1] - q[1]) || 1, s = 22;
  line(ctx, q[0] + ux * s, q[1], q[0] + ux * s, q[1] + uy * s, ink, 2); line(ctx, q[0] + ux * s, q[1] + uy * s, q[0], q[1] + uy * s, ink, 2);
  if (th) {
    const a0 = Math.atan2(-(q[1] - o[1]), q[0] - o[0]), a1 = Math.atan2(-(p[1] - o[1]), p[0] - o[0]);
    ctx.save(); ctx.strokeStyle = ac; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(o[0], o[1], 54, -a0, -a1, a1 > a0); ctx.stroke(); ctx.restore();
    const mid = (a0 + a1) / 2;
    text(ctx, th, o[0] + 82 * Math.cos(mid), o[1] - 82 * Math.sin(mid), ac, { size: 26, weight: 600, align: 'center', tex: true });
  }
  const side = (A, B, s, away) => {
    if (!s) return;
    const mx = (A[0] + B[0]) / 2, my = (A[1] + B[1]) / 2, dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 1;
    let nx = -dy / L, ny = dx / L; if ((mx + nx - away[0]) ** 2 + (my + ny - away[1]) ** 2 < (mx - nx - away[0]) ** 2 + (my - ny - away[1]) ** 2) { nx = -nx; ny = -ny; }
    const w = F.measure(ctx, s.replace(/\$/g, ''), { size: 22 }) / 2 + 14;
    text(ctx, s, mx + nx * (Math.abs(nx) * w + 26), my + ny * 30, ink, { size: 22, align: 'center', tex: true, bg: PAL.panel });
  };
  const c = [(o[0] + q[0] + p[0]) / 3, (o[1] + q[1] + p[1]) / 3];
  side(o, q, labels[0], c); side(q, p, labels[1], c); side(o, p, labels[2], c);
}

/* Figure 7.4: x = a sin θ. The scale is fixed from a ≤ 4: 100 units per unit, the triangle's angle at the canvas centre-left. */
(function () {
  const d = sim('sim-triangle-sine', 560);
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 1, max: 4, step: 0.5, value: 3, unit: '', dec: 1, aria: 'the constant a', onInput: () => x.range({ min: -a.v, max: a.v, step: 0.01, dec: 2 }) });
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 3, step: 0.01, value: 2, unit: '', dec: 2, aria: 'the variable x' });
  const ro = readout(d);
  const K = 100, O = [420, 300];
  function draw() {
    const { ctx } = begin(d.c);
    const av = a.v, xv = Math.max(-av, Math.min(av, x.v)), r = Math.sqrt(Math.max(0, av * av - xv * xv)), th = Math.asin(xv / av);
    headline(ctx, `$x = ${n(xv, 2)},\\ a = ${n(av, 1)}$: $\\sin\\ktheta = \\frac{x}{a} = ${n(xv / av)}$, so $\\ktheta = \\sin^{-1}(\\frac{x}{a}) = ${n(th)}$`);
    line(ctx, O[0] - 60, O[1], O[0] + K * 4 + 80, O[1], alpha(PAL.ink, 0.35), 2, [4, 8]);
    const q = [O[0] + K * r, O[1]], p = [O[0] + K * r, O[1] - K * xv];
    if (Math.abs(xv) < 1e-6) { line(ctx, ...O, ...q, PAL.ink, 4); text(ctx, `$a = ${n(av, 1)}$`, (O[0] + q[0]) / 2, O[1] + 34, PAL.ink, { size: 22, align: 'center', tex: true }); }
    else if (r < 0.03 * av) { line(ctx, ...O, ...p, PAL.ink, 4); text(ctx, `$x = ${n(xv, 2)} = ${xv < 0 ? '-' : ''}a$`, O[0] + 70, (O[1] + p[1]) / 2, PAL.ink, { size: 22, tex: true, bg: PAL.panel }); }
    else triangle(ctx, O, q, p, [`$\\sqrt{a^{2}-x^{2}} = ${n(r, 2)}$`, `$x = ${n(xv, 2)}$`, `$a = ${n(av, 1)}$`], '$\\ktheta$');
    text(ctx, '$\\sin\\ktheta = \\dfrac{x}{a}$', 150, 300, PAL.ink, { size: 26, align: 'center', tex: true });
    ro.set(`\\sqrt{a^{2}-x^{2}} = \\sqrt{${n(av, 1)}^{2}-(${n(xv, 2)})^{2}} = ${n(av, 1)}\\cos(${typed('angle', n(th))}) = ${n(r)}`);
  }
  still(d, draw);
})();

/* Figures 7.5, 7.6 and 7.8: the triangles of Examples 7.21, 7.22 and 7.24, faithful copies with the book's labels. */
function copy(id, o, q, p, labels, eq) {
  const d = sim(id, 380);
  still(d, () => { const { ctx } = begin(d.c); triangle(ctx, o, q, p, labels, '$\\ktheta$'); text(ctx, eq, 260, 200, PAL.ink, { size: 26, align: 'center', tex: true }); });
}
copy('fig-triangle-nine', [540, 300], [540 + 3 * 74.5, 300], [540 + 3 * 74.5, 300 - 2 * 100], ['$\\sqrt{9-x^{2}}$', '$x$', '$3$'], '$\\sin\\ktheta = \\dfrac{x}{3}$');
copy('fig-triangle-four', [540, 300], [540 + 2 * 99, 300], [540 + 2 * 99, 300 - 2 * 100], ['$\\sqrt{4-x^{2}}$', '$x$', ''], '$\\sin\\ktheta = \\dfrac{x}{2}$');
copy('fig-triangle-one', [540, 300], [540 + 180, 300], [540 + 180, 300 - 200], ['$1$', '$x$', '$\\sqrt{1+x^{2}}$'], '$\\tan\\ktheta = \\dfrac{x}{1}$');

/* Figure 7.7: x = a tan θ. Fixed scale 64 units per unit from a ≤ 4 and |x| ≤ 4. */
(function () {
  const d = sim('sim-triangle-tangent', 560);
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 1, max: 4, step: 0.5, value: 2, unit: '', dec: 1, aria: 'the constant a' });
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -4, max: 4, step: 0.01, value: 3, unit: '', dec: 2, aria: 'the variable x' });
  const ro = readout(d);
  const K = 64, O = [520, 300];
  function draw() {
    const { ctx } = begin(d.c);
    const av = a.v, xv = x.v, hyp = Math.hypot(av, xv), th = Math.atan(xv / av);
    headline(ctx, `$x = ${n(xv, 2)},\\ a = ${n(av, 1)}$: $\\tan\\ktheta = \\frac{x}{a} = ${n(xv / av)}$, so $\\ktheta = \\tan^{-1}(\\frac{x}{a}) = ${n(th)}$`);
    line(ctx, O[0] - 60, O[1], O[0] + K * 4 + 80, O[1], alpha(PAL.ink, 0.35), 2, [4, 8]);
    const q = [O[0] + K * av, O[1]], p = [O[0] + K * av, O[1] - K * xv];
    if (Math.abs(xv) < 1e-6) { line(ctx, ...O, ...q, PAL.ink, 4); text(ctx, `$a = ${n(av, 1)}$`, (O[0] + q[0]) / 2, O[1] + 34, PAL.ink, { size: 22, align: 'center', tex: true }); }
    else triangle(ctx, O, q, p, [`$a = ${n(av, 1)}$`, `$x = ${n(xv, 2)}$`, `$\\sqrt{a^{2}+x^{2}} = ${n(hyp, 2)}$`], '$\\ktheta$');
    text(ctx, '$\\tan\\ktheta = \\dfrac{x}{a}$', 200, 300, PAL.ink, { size: 26, align: 'center', tex: true });
    ro.set(`\\sqrt{a^{2}+x^{2}} = \\sqrt{${n(av, 1)}^{2}+(${n(xv, 2)})^{2}} = ${n(av, 1)}\\sec(${typed('angle', n(th))}) = ${n(hyp)}`);
  }
  still(d, draw);
})();

/* Figure 7.9: x = a sec θ, with x ≥ a in the first quadrant and x ≤ −a in the second. Fixed scale 56 units per unit
   from |x| ≤ 6, the origin at the canvas centre. */
(function () {
  const d = sim('sim-triangle-secant', 600);
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 1, max: 3, step: 0.5, value: 2, unit: '', dec: 1, aria: 'the constant a' });
  const x = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -6, max: 6, step: 0.01, value: 4, unit: '', dec: 2, aria: 'the variable x', specials: [{ at: () => a.v }, { at: () => -a.v }] });
  const ro = readout(d);
  const K = 56, O = [700, 420];
  function draw() {
    const { ctx } = begin(d.c);
    const av = a.v, xv = x.v, ok = Math.abs(xv) >= av - 1e-9;
    const guide = alpha(PAL.ink, 0.35);
    line(ctx, O[0] - K * 6 - 40, O[1], O[0] + K * 6 + 40, O[1], guide, 2); line(ctx, O[0], O[1] + 30, O[0], O[1] - K * 6, alpha(PAL.ink, 0.18), 2);
    text(ctx, 'x', O[0] + K * 6 + 56, O[1], PAL.muted, { size: 22, align: 'center' });
    if (!ok) {
      headline(ctx, `$x = ${n(xv, 2)}$ lies in $(-a, a)$, where $\\sqrt{x^{2}-a^{2}}$ is not a real number`);
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(O[0] - K * av, O[1] - 6, 2 * K * av, 12); ctx.restore();
      ro.set(`\\sec\\ktheta = \\frac{x}{a}\\ \\text{needs}\\ |x| \\ge a = ${n(av, 1)}`);
      return;
    }
    const opp = Math.sqrt(xv * xv - av * av), th = Math.acos(av / xv), sgn = xv > 0 ? 1 : -1;
    const q = [O[0] + sgn * K * av, O[1]], p = [O[0] + sgn * K * av, O[1] - K * opp];
    triangle(ctx, O, q, p, [`$${sgn > 0 ? 'a' : '-a'}$`, `$\\sqrt{x^{2}-a^{2}}$`, `$${sgn > 0 ? 'x' : '-x'}$`], '');
    /* θ is measured from the positive x-axis, so for x ≤ −a it is the obtuse angle on the other side of the vertical side */
    ctx.save(); ctx.strokeStyle = C('angle'); ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(O[0], O[1], 46, -Math.atan2(K * opp, K * sgn * av), 0, false); ctx.stroke(); ctx.restore();
    const mid = Math.atan2(K * opp, K * sgn * av) / 2;
    text(ctx, '$\\ktheta$', O[0] + 74 * Math.cos(mid), O[1] - 74 * Math.sin(mid), C('angle'), { size: 26, weight: 600, align: 'center', tex: true });
    const side = sgn > 0 ? 'x \\ge a' : 'x \\le -a';
    headline(ctx, `$${side}$: $\\sec\\ktheta = \\frac{x}{a} = ${n(xv / av)}$, $\\ktheta = \\sec^{-1}(\\frac{x}{a}) = ${n(th)}$, and $\\tan\\ktheta = ${sgn > 0 ? '' : '-'}\\frac{\\sqrt{x^{2}-a^{2}}}{a} = ${n(Math.tan(th))}$`);
    ro.set(`\\sqrt{x^{2}-a^{2}} = \\sqrt{(${n(xv, 2)})^{2}-${n(av, 1)}^{2}} = |a\\tan\\ktheta| = ${sgn > 0 ? '' : '-'}${n(av, 1)}\\tan(${typed('angle', n(th))}) = ${n(opp)}`);
  }
  still(d, draw);
})();

/* Figure 7.10: the area under √(x² − 9) on [3, b]. Axes fixed at 0 to 7 by 0 to 7, the reach of b = 7. */
(function () {
  const d = sim('sim-area-secant', 520);
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 3.2, max: 7, step: 0.01, value: 5, unit: '', dec: 2, aria: 'the right end b', specials: [{ at: 5 }] });
  const ro = readout(d);
  const BOX = { l: 160, r: 1260, t: 100, b: 450 };
  const f = (t) => (t >= 3 ? Math.sqrt(t * t - 9) : NaN);
  function draw() {
    const { ctx } = begin(d.c);
    const bv = b.v, sec = bv / 3, tan = Math.sqrt(sec * sec - 1), th = Math.acos(1 / sec);
    const A = 4.5 * (sec * tan - Math.log(sec + tan));
    headline(ctx, `$b = ${n(bv, 2)}$: $\\ktheta$ runs from $0$ to $\\sec^{-1}(\\frac{b}{3}) = ${n(th)}$, and the area is $${n(A)}$`);
    const ax = axes(ctx, BOX, [0, 7], [0, 7], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    shade(ctx, ax, f, 0, 3, bv, C('integral'), { alpha: 0.3 });
    plot(ctx, ax, f, C('function'), { x: [3, 7] });
    line(ctx, ax.X(bv), ax.Y(0), ax.X(bv), ax.Y(f(bv)), alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    label(ctx, 'f(x) = √(x² − 9)', ax.X(6.3), ax.Y(f(6.3)), { side: 'left', color: C('function'), size: 22, gap: 40 });
    ro.set(`${typed('integral', `\\kA = \\int_3^{${n(bv, 2)}}\\sqrt{x^{2}-9}\\,dx`)} = \\frac{9}{2}\\sec\\ktheta\\tan\\ktheta - \\frac{9}{2}\\ln|\\sec\\ktheta+\\tan\\ktheta|\\,\\Big|_0^{${n(th)}} = ${typed('integral', n(A))}`);
  }
  still(d, draw);
})();
};
