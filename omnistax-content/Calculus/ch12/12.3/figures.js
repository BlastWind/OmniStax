/* Figures for section 12.3 The Dot Product. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, arrow, dot, line, text, headline, register, tex, fmt, drag, angleArc } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const vc = () => C('vector'), guide = () => alpha(PAL.ink, 0.4);
const PITCH = [-0.2, 1.4];
const label = (s, p, color) => ({ k: 'label', s, p, color });
const vt = (a, dec = 2) => `\\langle ${a.map((x) => n(x, Number.isInteger(x) ? 0 : dec)).join(',')}\\rangle`;

function frame(ctx, xr, yr, H, o = {}) {
  const s = Math.min((H - 140) / (yr[1] - yr[0]), 1100 / (xr[1] - xr[0])), w = (xr[1] - xr[0]) * s, h = (yr[1] - yr[0]) * s;
  return axes(ctx, { l: 700 - w / 2, r: 700 + w / 2, t: 86, b: 86 + h }, xr, yr, { xl: 'x', yl: 'y', nx: xr[1] - xr[0], ny: yr[1] - yr[0], ...o });
}
function vec(ctx, ax, a, b, color, name, o = {}) {
  const x1 = ax.X(a[0]), y1 = ax.Y(a[1]), x2 = ax.X(b[0]), y2 = ax.Y(b[1]), L = Math.hypot(x2 - x1, y2 - y1);
  if (L < 2) return;
  ctx.save(); if (o.dash) ctx.setLineDash(o.dash); arrow(ctx, x1, y1, x2, y2, color, o.w ?? 5); ctx.restore();
  if (!name) return;
  const nx = -(y2 - y1) / L, ny = (x2 - x1) / L, side = o.side ?? 1, at = o.at ?? 0.6;
  text(ctx, name, x1 + (x2 - x1) * at - nx * 28 * side, y1 + (y2 - y1) * at - ny * 28 * side, color, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
}
const arcText = (ctx, c, r, a0, a1, s) => {
  angleArc(ctx, c, r, a0, a1, undefined, undefined, C('angle'));
  const m = (a0 + a1) / 2; text(ctx, s, c.x + (r + 26) * Math.cos(m), c.y - (r + 26) * Math.sin(m), C('angle'), { size: 22, align: 'center', tex: true, bg: PAL.panel });
};

/* Figures 12.44 + 12.45 + 12.46: u and v of fixed lengths 3 and 2.5 at the angles the sliders set; θ between them
   and the proof's side v − u. Dashed circles on v's angle where θ is 0, π/2 or π. Axes −4 to 4 both ways. */
(function () {
  const d = sim('sim-dot-angle', 640);
  const ua = ctl(d.controls, { label: '\\kvecu\\text{ at}', cls: 'angle', key: 'ua', min: 0, max: 360, step: 1, value: 20, unit: '°', dec: 0 });
  const rel = (k) => ({ at: () => (ua.v + k) % 360 });
  const va = ctl(d.controls, { label: '\\kvecv\\text{ at}', cls: 'angle', key: 'va', min: 0, max: 360, step: 1, value: 75, unit: '°', dec: 0, specials: [rel(0), rel(90), rel(180), rel(270)] });
  const LU = 3, LV = 2.5, R = Math.PI / 180;
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-3.5, 3.5], [-3.5, 3.5], 640, { nx: 7, ny: 7 }), col = vc();
    const u = [LU * Math.cos(ua.v * R), LU * Math.sin(ua.v * R)], v = [LV * Math.cos(va.v * R), LV * Math.sin(va.v * R)];
    const dp = u[0] * v[0] + u[1] * v[1], c = dp / (LU * LV), th = Math.acos(Math.max(-1, Math.min(1, c)));
    let a0 = ua.v * R, a1 = va.v * R; if (((a1 - a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) > Math.PI) [a0, a1] = [a1, a0];
    if (a1 < a0) a1 += 2 * Math.PI;
    if (th > 0.03) arcText(ctx, { x: ax.X(0), y: ax.Y(0) }, 52, a0, a1, '$\\ktheta$');
    vec(ctx, ax, u, v, guide(), '$\\kvecv-\\kvecu$', { dash: [10, 8], w: 3, side: -1 });
    vec(ctx, ax, [0, 0], u, col, '$\\kvecu$'); vec(ctx, ax, [0, 0], v, col, '$\\kvecv$', { side: -1 });
    const deg = th / R, k = Math.abs(c) < 1e-9 ? 'orthogonal' : c > 0.99999 ? 'the same direction' : c < -0.99999 ? 'a straight angle' : c > 0 ? 'an acute angle' : 'an obtuse angle';
    const cos = Math.abs(c) < 5e-6 ? 0 : c;
    headline(ctx, `$\\ktheta=${n(deg, 1)}^{\\circ}$: ${k}, $\\cos\\ktheta=${n(cos, 3)}$.`);
    tex(d.readout, `\\kvecu\\cdot\\kvecv=u_{1}v_{1}+u_{2}v_{2}=${n(dp, 2)}=\\|\\kvecu\\|\\|\\kvecv\\|\\cos\\ktheta=3(2.5)\\cos ${n(deg, 1)}^{\\circ}`);
  });
})();

/* Figure 12.47: p = ⟨1, 0, 5⟩ and q = ⟨10, 3, −2⟩ from the origin and the square mark of their right angle. */
(function () {
  const d = sim('sim-orthogonal-pq');
  const box = [[-1, 10], [-1, 4], [-3, 6]], p = [1, 0, 5], q = [10, 3, -2];
  const S = F.space3d(d, { box, h: 520, pitch: PITCH, fit: 2.3, turn: -1.2 });
  S.headline('$\\kvecp\\cdot\\kvecq=1(10)+0(3)+5(-2)=0$');
  still(d, () => {
    const a = SP.mul(SP.unit(p), 0.9), b = SP.mul(SP.unit(q), 0.9);
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('pq', [...SP.vector([0, 0, 0], p, C('vector'), { name: '$\\kvecp$' }), ...SP.vector([0, 0, 0], q, C('vector'), { name: '$\\kvecq$' }),
      { k: 'line', pts: [a, SP.add(a, b), b], color: 'ink', w: 2.5 }]);
  });
})();

/* Figure 12.48: v by its components and the direction angles α, β, γ it makes with i, j and k. Box −4 to 4. */
(function () {
  const d = sim('sim-direction-angles');
  const box = [[-4, 4], [-4, 4], [-4, 4]];
  const S = F.space3d(d, { box, h: 540, pitch: PITCH, fit: 3.2 });
  const c = (label, key, v) => ctl(d.controls, { label, cls: 'vector', key, min: -4, max: 4, step: 0.5, value: v, unit: '', dec: 1 });
  const xs = c('v_1', 'v1', 2), ys = c('v_2', 'v2', 3), zs = c('v_3', 'v3', 3);
  const arc = (e, u, r) => { const th = Math.acos(Math.max(-1, Math.min(1, SP.dot(e, u)))), w = SP.unit(SP.sub(u, SP.mul(e, SP.dot(e, u)))), pts = [];
    for (let i = 0; i <= 24; i++) { const t = (i / 24) * th; pts.push(SP.mul(SP.add(SP.mul(e, Math.cos(t)), SP.mul(w, Math.sin(t))), r)); } return pts; };
  still(d, () => {
    const v = [xs.v, ys.v, zs.v], N = Math.hypot(...v), ang = C('angle');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    const E = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], NM = ['\\kveci', '\\kvecj', '\\kveck'], GR = ['\\alpha', '\\beta', '\\gamma'];
    const marks = [...SP.vector([0, 0, 0], v, C('vector'), { name: '$\\kvecv$' })];
    E.forEach((e, i) => marks.push(...SP.vector([0, 0, 0], e, C('vector'), { name: `$${NM[i]}$`, w: 4 })));
    if (N > 1e-9) { const u = SP.unit(v); E.forEach((e, i) => { const r = 1.5 + 0.25 * i, pts = arc(e, u, r); if (pts.length > 1 && Math.abs(SP.dot(e, u)) < 0.9999) { marks.push({ k: 'line', pts, color: ang, w: 3 }, label(`$${GR[i]}$`, pts[12], ang)); } }); }
    S.set('v', marks);
    if (N < 1e-9) { tex(d.readout, '\\kvecv=\\kveczero\\text{ has no direction angles}'); return; }
    const cs = v.map((x) => x / N), dg = cs.map((x) => (Math.acos(x) * 180) / Math.PI);
    tex(d.readout, `\\cos\\alpha=\\frac{${n(v[0], 1)}}{${n(N, 3)}}=${n(cs[0], 3)},\\ \\cos\\beta=${n(cs[1], 3)},\\ \\cos\\gamma=${n(cs[2], 3)}\\quad(\\alpha,\\beta,\\gamma)=(${n(dg[0], 1)}^{\\circ},${n(dg[1], 1)}^{\\circ},${n(dg[2], 1)}^{\\circ})`);
  });
})();

/* Figures 12.49 + 12.51: the child's pull F at the handle's angle, its horizontal component, and the wagon's
   displacement; 22 canvas units a pound and 7 a foot. */
(function () {
  const d = sim('sim-wagon', 480);
  const fs = ctl(d.controls, { label: '\\|\\kvecF\\|', cls: 'vector', key: 'F', min: 0, max: 16, step: 0.5, value: 8, unit: ' lb', dec: 1 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 90, step: 1, value: 55, unit: '°', dec: 0, specials: [{ at: 90 }] });
  const ds = ctl(d.controls, { label: 'distance', cls: '', key: 'dist', min: 10, max: 80, step: 1, value: 50, unit: ' ft', dec: 0 });
  still(d, () => {
    const { ctx } = begin(d.c);
    const col = vc(), th = (ts.v * Math.PI) / 180, gy = 400, hx = 300, hy = 330, K = 22;
    line(ctx, 40, gy, 1360, gy, alpha(PAL.ink, 0.3), 2);
    F.cart(ctx, 200, 350, 170, 70, alpha(PAL.ink, 0.45));
    const fx = hx + fs.v * K * Math.cos(th), fy = hy - fs.v * K * Math.sin(th);
    line(ctx, 285, 340, hx, hy, PAL.ink, 4);
    if (fs.v) { arrow(ctx, hx, hy, fx, fy, col, 6); text(ctx, '$\\kvecF$', (hx + fx) / 2 - 22 * Math.sin(th), (hy + fy) / 2 - 22 * Math.cos(th), col, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel }); }
    if (fs.v && Math.cos(th) > 0.02) { line(ctx, fx, fy, fx, hy, alpha(PAL.ink, 0.4), 2.5, [4, 8]); arrow(ctx, hx, hy, fx, hy, alpha(col, 0.55), 4); }
    if (fs.v && th > 0.03) { angleArc(ctx, { x: hx, y: hy }, 54, 0, th, undefined, undefined, C('angle')); text(ctx, `$${ts.v}^{\\circ}$`, hx + 80 * Math.cos(th / 2), hy - 80 * Math.sin(th / 2), C('angle'), { size: 20, align: 'center', tex: true, bg: PAL.panel }); }
    const sx = 120 + ds.v * 7 * 1.4;
    arrow(ctx, 120, gy + 34, Math.min(1340, sx), gy + 34, col, 4);
    text(ctx, `$\\kPQ$, ${ds.v} ft`, (120 + Math.min(1340, sx)) / 2, gy + 60, col, { size: 20, align: 'center', tex: true, bg: PAL.panel });
    const W = fs.v * ds.v * Math.cos(th);
    headline(ctx, `The pull does about ${n(W, 1)} ft·lb of work over ${ds.v} ft.`);
    tex(d.readout, `W=\\|\\kvecF\\|\\|\\kPQ\\|\\cos\\ktheta=${n(fs.v, 1)}(${ds.v})\\cos ${ts.v}^{\\circ}\\approx ${n(W, 1)}\\;\\text{ft}\\cdot\\text{lb}`);
  });
})();

/* Figure 12.50: the projection of v onto u, the drop from v's head square to u's line, and q = v − p.
   Axes −6 to 8 by −6 to 6; the defaults are the text's v = ⟨6, −4⟩ and u = ⟨3, 1⟩. */
(function () {
  const d = sim('sim-projection', 640);
  const c = (label, key, v) => ctl(d.controls, { label, cls: 'vector', key, min: -5, max: 7, step: 0.5, value: v, unit: '', dec: 1 });
  const u1 = c('u_1', 'u1', 3), u2 = c('u_2', 'u2', 1), v1 = c('v_1', 'v1', 6), v2 = c('v_2', 'v2', -4);
  const U = drag(d, { x: u1, y: u2 }), V = drag(d, { x: v1, y: v2 });
  still(d, () => {
    const { ctx } = begin(d.c);
    const ax = frame(ctx, [-6, 8], [-6, 6], 640), col = vc(), u = [u1.v, u2.v], v = [v1.v, v2.v], uu = u[0] ** 2 + u[1] ** 2;
    if (uu < 1e-9) { U.draw(ctx, ax, col); V.draw(ctx, ax, col); headline(ctx, 'There is no projection onto the zero vector.'); tex(d.readout, '\\kvecu=\\kveczero'); return; }
    const dp = u[0] * v[0] + u[1] * v[1], k = dp / uu, p = [k * u[0], k * u[1]];
    const t = 20 / Math.sqrt(uu), bx = ax.box; ctx.save(); ctx.beginPath(); ctx.rect(bx.l, bx.t, bx.r - bx.l, bx.b - bx.t); ctx.clip(); line(ctx, ax.X(-t * u[0]), ax.Y(-t * u[1]), ax.X(t * u[0]), ax.Y(t * u[1]), alpha(PAL.ink, 0.2), 2); ctx.restore();
    line(ctx, ax.X(v[0]), ax.Y(v[1]), ax.X(p[0]), ax.Y(p[1]), guide(), 2.5, [4, 8]);
    vec(ctx, ax, p, v, alpha(col, 0.55), '$\\kvecq$', { dash: [10, 8], w: 3 });
    vec(ctx, ax, [0, 0], v, col, '$\\kvecv$'); vec(ctx, ax, [0, 0], u, col, '$\\kvecu$', { side: -1, at: 0.8 });
    vec(ctx, ax, [0, 0], p, col, '$\\text{proj}_{\\kvecu}\\kvecv$', { w: 7, side: 1, at: 0.5 });
    U.draw(ctx, ax, col); V.draw(ctx, ax, col);
    headline(ctx, k < 0 ? 'The angle is obtuse, so the projection points against $\\kvecu$.' : `The projection is the part of $\\kvecv$ along $\\kvecu$, $${n(k, 3)}$ times $\\kvecu$.`);
    tex(d.readout, `\\text{proj}_{\\kvecu}\\kvecv=\\frac{\\kvecu\\cdot\\kvecv}{\\|\\kvecu\\|^{2}}\\kvecu=\\frac{${n(dp, 2)}}{${n(uu, 2)}}\\kvecu=${vt(p)},\\quad \\text{comp}_{\\kvecu}\\kvecv=${n(dp / Math.sqrt(uu), 3)}`);
  });
})();

/* Figure 12.52, a faithful copy: the handcart and the force F at 60° to the displacement s. */
(function () {
  const d = sim('fig-handcart', 440);
  still(d, () => {
    const { ctx } = begin(d.c);
    const col = vc(), ink = alpha(PAL.ink, 0.55), hx = 640, hy = 300, th = Math.PI / 3, L = 280;
    line(ctx, 330, 390, 670, 390, ink, 6); dot(ctx, 370, 410, ink, true, 13); dot(ctx, 630, 410, ink, true, 13);
    F.crate(ctx, 470, 345, 200, 80, ink);
    line(ctx, 625, 390, 625, 326, ink, 6); line(ctx, 625, 326, hx, hy, ink, 6);
    arrow(ctx, hx, hy, hx + L * Math.cos(th), hy - L * Math.sin(th), col, 5);
    arrow(ctx, hx, hy, hx + 300, hy, col, 5);
    text(ctx, '$\\kvecF$', hx + 0.55 * L * Math.cos(th) - 26, hy - 0.55 * L * Math.sin(th) - 12, col, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kvecs$', hx + 200, hy + 26, col, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    angleArc(ctx, { x: hx, y: hy }, 50, 0, th, undefined, undefined, C('angle'));
    text(ctx, '$60^{\\circ}$', hx + 84, hy - 36, C('angle'), { size: 20, align: 'left', tex: true, bg: PAL.panel });
  });
})();
};
