/* Figures for section 11.5 Conic Sections. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, dot, label, headline, register, readout, cycle, fmt, hover, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI, TAU = 2 * PI, DEG = PI / 180;
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const fit = (win, t, b) => { const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]); return { l: 700 - w / 2, r: 700 + w / 2, t, b }; };
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const sgn = (v, dec = 2) => (v < 0 ? `+${n(-v, dec)}` : `-${n(v, dec)}`);
const grid = (ctx, BOX, WIN, nx, ny) => axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx, ny, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
/* a line of the plane through p along direction u, clipped to the box */
function longLine(ctx, ax, p, u, color, w = 3, dash) {
  const far = 100; ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
  line(ctx, ax.X(p[0] - far * u[0]), ax.Y(p[1] - far * u[1]), ax.X(p[0] + far * u[0]), ax.Y(p[1] + far * u[1]), color, w, dash); ctx.restore();
}
const seg = (ctx, ax, p, q, color, w = 3, dash) => line(ctx, ax.X(p[0]), ax.Y(p[1]), ax.X(q[0]), ax.Y(q[1]), color, w, dash);
const pt = (ctx, ax, p, color, filled = true, r = 8) => dot(ctx, ax.X(p[0]), ax.Y(p[1]), color, filled, r);
const name = (ctx, ax, p, s, side = 'right', color) => label(ctx, s, ax.X(p[0]), ax.Y(p[1]), { side, size: 20, gap: 16, color });

/* Figure 11.43 + 11.44: the double cone of y = 3x turned about the y-axis, |y| ≤ 3.6, cut by the plane through (0.6, 1.5, 0)
   tilted φ from the horizontal; the section where generator s·(cos ψ/3, 1, sin ψ/3) meets the plane. Scene units are the graph's. */
(function () {
  const d = sim('sim-cone-section');
  const PARA = Math.atan(3) / DEG;
  const ph = ctl(d.controls, { label: '\\varphi', cls: 'angle', key: 'phi', min: 0, max: 90, step: 0.1, value: 40, unit: '°', dec: 1, aria: 'tilt of the plane from the horizontal', specials: [{ at: 0 }, { at: PARA }] });
  const ro = readout(d);
  const v = F.view3d(d.stage, { h: 520, dist: 19, tilt: 0.25, yaw: 'free', pitch: [-1.5, 1.5] });
  v.setView(0.75, 0.42);
  const g = v.part(0), Y = 3.6, P0 = [0.6, 1.5, 0];
  const kind = (deg) => (deg < 0.05 ? 'circle' : Math.abs(deg - PARA) < 0.06 ? 'parabola' : deg < PARA ? 'ellipse' : 'hyperbola');
  function draw() {
    v.clear();
    const deg = ph.v, f = deg * DEG, nrm = [-Math.sin(f), Math.cos(f)], k = kind(deg);
    const cone = F.revolve.mesh(g, [[Y / 3, -Y], [0, 0], [Y / 3, Y]], { x: 0 }, C('surface'), { closed: false, alpha: 0.3, edges: null });
    v.pickable(cone, 'the double cone: its two nappes meet at the vertex');
    const pl = F.mesh.box(g, P0, [9, 0.02, 7], C('plane'), { transparent: true, opacity: 0.32, depthWrite: false });
    pl.rotation.z = f; v.pickable(pl, `the cutting plane, tilted ${fmt(deg, 1)}° from the horizontal`);
    const runs = []; let cur = [];
    for (let i = 0; i <= 720; i++) {
      const psi = (TAU * i) / 720, gx = Math.cos(psi) / 3, gz = Math.sin(psi) / 3, den = nrm[0] * gx + nrm[1], s = (nrm[0] * P0[0] + nrm[1] * P0[1]) / den;
      if (!Number.isFinite(s) || Math.abs(s) > Y) { if (cur.length > 1) runs.push(cur); cur = []; continue; }
      cur.push([s * gx, s, s * gz]);
    }
    if (cur.length > 1) runs.push(cur);
    runs.forEach((r) => { for (let i = 0; i + 3 < r.length; i += 3) v.pickable(F.mesh.stick(g, r[i], r[i + 3], 0.045, C('curve')), `the section: a ${k}`); });
    F.mesh.polyline(g, [[0, -Y - 0.4, 0], [0, Y + 0.4, 0]], PAL.muted);
    v.label('axis', [0, Y + 0.6, 0], g, -10);
    const what = { circle: 'the plane is perpendicular to the axis: a circle', ellipse: 'the plane cuts one nappe at an angle to the axis: an ellipse', parabola: 'the plane is parallel to the generating line: a parabola', hyperbola: 'the plane cuts both nappes: a hyperbola' }[k];
    v.headline(`φ = ${fmt(deg, 1)}°: ${what}`);
    const ang = typed('angle', `${n(90 - deg, 1)}^{\\circ}`);
    ro.set(`\\text{plane to axis}: 90^{\\circ}-\\varphi=${ang}\\qquad \\text{generating line to axis}: 90^{\\circ}-\\tan^{-1}3=${typed('angle', '18.4^{\\circ}')}`);
  }
  still(d, draw);
})();

/* The parabola of focus and directrix: P(s) on the curve, F, the vertex, the directrix and Q, P's foot on it */
function parabolaScene(d, o) {
  const BOX = fit(o.win, 100, o.bottom), hits = []; hover(d.stage, () => hits);
  return (ctx, dir, p, h, k, s, G) => {
    const ax = grid(ctx, BOX, o.win, o.nx, o.ny), cc = C('curve'), pc = C('point'), lc = C('line');
    const P = (u) => ({ up: [h + u, k + (u * u) / (4 * p)], down: [h + u, k - (u * u) / (4 * p)], right: [h + (u * u) / (4 * p), k + u], left: [h - (u * u) / (4 * p), k + u] })[dir];
    const Fo = { up: [h, k + p], down: [h, k - p], right: [h + p, k], left: [h - p, k] }[dir];
    const vert = dir === 'up' || dir === 'down', dl = { up: k - p, down: k + p, right: h - p, left: h + p }[dir];
    F.polar.path(ctx, ax, P, [-12, 12], cc, { faint: 0, marks: 0 });
    longLine(ctx, ax, vert ? [0, dl] : [dl, 0], vert ? [1, 0] : [0, 1], lc, 3);
    const Pp = P(s), Q = vert ? [Pp[0], dl] : [dl, Pp[1]];
    seg(ctx, ax, Pp, Fo, PAL.ink, 3); seg(ctx, ax, Pp, Q, PAL.ink, 3);
    pt(ctx, ax, Fo, pc); pt(ctx, ax, [h, k], pc, true, 7); pt(ctx, ax, Q, pc, false, 7);
    name(ctx, ax, Fo, 'F', vert ? 'right' : 'above'); name(ctx, ax, [h, k], `(h, k)`, vert ? (dir === 'up' ? 'below' : 'above') : (dir === 'right' ? 'left' : 'right'));
    G.draw(ctx, ax, pc);
    hits.length = 0;
    hits.push({ x: ax.X(Fo[0]), y: ax.Y(Fo[1]), r: 14, name: `the focus F = (${fmt(Fo[0], 2)}, ${fmt(Fo[1], 2)})` }, { x: ax.X(h), y: ax.Y(k), r: 14, name: `the vertex (${fmt(h, 2)}, ${fmt(k, 2)})` },
      { x: ax.X(Q[0]), y: ax.Y(Q[1]), r: 14, name: `Q = (${fmt(Q[0], 2)}, ${fmt(Q[1], 2)}), on the directrix ${vert ? 'y' : 'x'} = ${fmt(dl, 2)}` },
      { x: ax.X(Pp[0]), y: ax.Y(Pp[1]), r: 16, name: `P = (${fmt(Pp[0], 2)}, ${fmt(Pp[1], 2)})` });
    return { dPF: dist(Pp, Fo), dPQ: dist(Pp, Q), dl, vert, P };
  };
}
const parabolaForm = (dir, p, h, k) => {
  const q = typed('curve', vertOf(dir) ? 'y' : 'x'), sgnP = dir === 'down' || dir === 'left' ? '-' : '', [u, w] = vertOf(dir) ? ['x', 'h'] : ['y', 'k'];
  const c = vertOf(dir) ? h : k, last = vertOf(dir) ? k : h;
  return `${q}=${sgnP}\\frac{1}{4(${n(p)})}(${u}${sgn(c)})^{2}${last < 0 ? '' : '+'}${n(last)}`;
};
const vertOf = (dir) => dir === 'up' || dir === 'down';

/* Figure 11.45 + 11.46: window ±8, one scale */
(function () {
  const d = sim('sim-parabola', 600);
  const DIRS = [{ value: 'up', label: 'up' }, { value: 'down', label: 'down' }, { value: 'right', label: 'right' }, { value: 'left', label: 'left' }];
  const pick = choice(d.controls, { label: '\\text{opens}', options: DIRS, value: 'up' });
  const ps = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 0.5, max: 3, step: 0.01, value: 1.5, unit: '', dec: 2, aria: 'distance p from the vertex to the focus' });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: -3, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: 'x-coordinate h of the vertex' });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: -3, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: 'y-coordinate k of the vertex' });
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -6, max: 6, step: 0.01, value: 3, unit: '', dec: 2, aria: 'position of P along the parabola' });
  let path = () => [0, 0];
  const G = F.polar.grip(d, { t: ss, at: (u) => path(u), span: 3 }), ro = readout(d);
  const scene = parabolaScene(d, { win: { x: [-8, 8], y: [-8, 8] }, bottom: 570, nx: 8, ny: 8 });
  function draw() {
    const { ctx } = begin(d.c);
    const dir = pick.value, r = scene(ctx, dir, ps.v, hs.v, ks.v, ss.v, G); path = r.P;
    headline(ctx, `d(F, P) = d(P, Q) = ${fmt(r.dPF, 2)}: P is as far from the focus as from the directrix`);
    ro.set(`d(F,P)=${n(r.dPF, 3)},\\quad d(P,Q)=${n(r.dPQ, 3)}\\qquad ${parabolaForm(dir, ps.v, hs.v, ks.v)}`);
  }
  still(d, draw);
})();

/* Figure 11.47: Example 11.19's parabola y = ⅛(x − 2)² + 1; window x −5 to 9, y −3 to 9 */
(function () {
  const d = sim('sim-parabola-example', 560);
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -6, max: 6, step: 0.01, value: 3, unit: '', dec: 2, aria: 'position of P along the parabola' });
  let path = () => [0, 0];
  const G = F.polar.grip(d, { t: ss, at: (u) => path(u), span: 3 }), ro = readout(d);
  const scene = parabolaScene(d, { win: { x: [-5, 9], y: [-3, 9] }, bottom: 530, nx: 14, ny: 12 });
  function draw() {
    const { ctx } = begin(d.c);
    const r = scene(ctx, 'up', 2, 2, 1, ss.v, G); path = r.P;
    headline(ctx, `Vertex (2, 1), focus (2, 3), directrix y = −1: d(F, P) = d(P, Q) = ${fmt(r.dPF, 2)}`);
    ro.set(`${typed('curve', 'y')}=\\frac{1}{8}(x-2)^{2}+1\\qquad d(F,P)=${n(r.dPF, 3)}=d(P,Q)`);
  }
  still(d, draw);
})();

/* Sim for the dish: x² = 4py with p = 1.5, five waves coming down from y = 6 and reflected to the focus; window x ±5, y −0.8 to 6.4 */
(function () {
  const d = sim('sim-dish', 520);
  const p = 1.5, Y0 = 6, L = Y0 + p, xs = [-3.6, -2, 0.0001, 1.4, 3], cy = cycle(() => L, 1.2), ro = readout(d);
  const WIN = { x: [-5, 5], y: [-1, 6] }, BOX = fit(WIN, 100, 490);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = grid(ctx, BOX, WIN, 10, 7), cc = C('curve'), pc = C('point'), t = Math.min(cy.now(), L), Fo = [0, p];
    F.polar.path(ctx, ax, (u) => [u, (u * u) / (4 * p)], [-4.7, 4.7], cc, { faint: 0, marks: 0, w: 6 });
    pt(ctx, ax, Fo, pc, true, 9); name(ctx, ax, Fo, 'focus', 'right');
    xs.forEach((x) => {
      const M = [x, (x * x) / (4 * p)], S = [x, Y0], a = Y0 - M[1];
      seg(ctx, ax, S, M, alpha(PAL.ink, 0.4), 2); seg(ctx, ax, M, Fo, alpha(PAL.ink, 0.4), 2);
      const q = t <= a ? [x, Y0 - t] : (() => { const k = (t - a) / dist(M, Fo); return [M[0] + (Fo[0] - M[0]) * Math.min(1, k), M[1] + (Fo[1] - M[1]) * Math.min(1, k)]; })();
      pt(ctx, ax, q, PAL.ink, true, 6);
    });
    headline(ctx, `Every wave travels ${fmt(L, 1)} from the line y = 6 to the focus, so they all arrive together`);
    const x = xs[3], M = [x, (x * x) / (4 * p)];
    ro.set(`(6-y_{M})+d(M,F)=${n(Y0 - M[1])}+${n(dist(M, Fo))}=${n(Y0 - M[1] + dist(M, Fo))}=6+p`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => L / 4), draw });
})();

/* The ellipse of two foci: centre (h, k), semi-axes ax (horizontal) and ay (vertical), A(t) on it */
function ellipseScene(d, o) {
  const BOX = fit(o.win, 100, o.bottom), hits = []; hover(d.stage, () => hits);
  return (ctx, h, k, a1, a2, t, G) => {
    const ax = grid(ctx, BOX, o.win, o.nx, o.ny), cc = C('curve'), pc = C('point'), lc = C('line');
    const P = (u) => [h + a1 * Math.cos(u), k + a2 * Math.sin(u)], horiz = a1 >= a2, a = Math.max(a1, a2), b = Math.min(a1, a2), c = Math.sqrt(a * a - b * b);
    const F1 = horiz ? [h + c, k] : [h, k + c], F2 = horiz ? [h - c, k] : [h, k - c];
    longLine(ctx, ax, [h, k], horiz ? [1, 0] : [0, 1], alpha(lc, 0.6), 2.5); longLine(ctx, ax, [h, k], horiz ? [0, 1] : [1, 0], alpha(lc, 0.6), 2.5, [10, 8]);
    F.polar.path(ctx, ax, P, [0, TAU], cc, { faint: 0, marks: 0 });
    const Q = horiz ? [h, k + b] : [h + b, k];
    if (o.green) { seg(ctx, ax, Q, F1, alpha(PAL.ink, 0.5), 2.5, [8, 6]); seg(ctx, ax, Q, F2, alpha(PAL.ink, 0.5), 2.5, [8, 6]); }
    const A = P(t); seg(ctx, ax, A, F1, PAL.ink, 3); seg(ctx, ax, A, F2, PAL.ink, 3);
    pt(ctx, ax, F1, pc); pt(ctx, ax, F2, pc);
    name(ctx, ax, F1, 'F', horiz ? 'below' : 'right'); name(ctx, ax, F2, 'F′', horiz ? 'below' : 'right');
    if (o.labels) [[P(0), 'P', 'right'], [P(PI), 'P′', 'left'], [P(PI / 2), 'Q', 'above'], [P(1.5 * PI), 'Q′', 'below']].forEach(([q, s, side]) => { pt(ctx, ax, q, pc, false, 6); name(ctx, ax, q, s, side); });
    G.draw(ctx, ax, pc);
    hits.length = 0;
    hits.push({ x: ax.X(A[0]), y: ax.Y(A[1]), r: 16, name: `A = (${fmt(A[0], 2)}, ${fmt(A[1], 2)})` }, { x: ax.X(F1[0]), y: ax.Y(F1[1]), r: 14, name: `the focus F = (${fmt(F1[0], 2)}, ${fmt(F1[1], 2)})` }, { x: ax.X(F2[0]), y: ax.Y(F2[1]), r: 14, name: `the focus F′ = (${fmt(F2[0], 2)}, ${fmt(F2[1], 2)})` });
    return { d1: dist(A, F1), d2: dist(A, F2), a, b, c, horiz, P };
  };
}
/* Figure 11.48: window ±6, one scale */
(function () {
  const d = sim('sim-ellipse', 560);
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 2, max: 5, step: 0.01, value: 4, unit: '', dec: 2, aria: 'half the horizontal axis a' });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 1, max: 4.5, step: 0.01, value: 3, unit: '', dec: 2, aria: 'half the vertical axis b' });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: TAU, step: 0.01, value: 1, unit: '', dec: 2, aria: 'position of A on the ellipse' });
  let path = () => [0, 0];
  const G = F.polar.grip(d, { t: ts, at: (u) => path(u), span: PI / 2 }), ro = readout(d);
  const scene = ellipseScene(d, { win: { x: [-6, 6], y: [-6, 6] }, bottom: 530, nx: 12, ny: 12, labels: true, green: true });
  function draw() {
    const { ctx } = begin(d.c);
    const r = scene(ctx, 0, 0, as.v, bs.v, ts.v, G); path = r.P;
    headline(ctx, `d(A, F) + d(A, F′) = ${fmt(r.d1, 2)} + ${fmt(r.d2, 2)} = ${fmt(r.d1 + r.d2, 2)}, the major axis 2a`);
    ro.set(`d(A,F)+d(A,F')=${n(r.d1, 3)}+${n(r.d2, 3)}=${n(r.d1 + r.d2, 3)}=2(${n(r.a)})\\qquad c^{2}=a^{2}-b^{2}:\\; c=${n(r.c, 3)}`);
  }
  still(d, draw);
})();
/* Figure 11.49: Example 11.20's ellipse, centre (2, −3), semi-axes 2 across and 3 up; window x −3 to 7, y −7.5 to 1.5 */
(function () {
  const d = sim('sim-ellipse-example', 540);
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: TAU, step: 0.01, value: 0.7, unit: '', dec: 2, aria: 'position of A on the ellipse' });
  let path = () => [0, 0];
  const G = F.polar.grip(d, { t: ts, at: (u) => path(u), span: PI / 2 }), ro = readout(d);
  const scene = ellipseScene(d, { win: { x: [-3, 7], y: [-8, 2] }, bottom: 510, nx: 10, ny: 10 });
  function draw() {
    const { ctx } = begin(d.c);
    const r = scene(ctx, 2, -3, 2, 3, ts.v, G); path = r.P;
    headline(ctx, `Center (2, −3), vertical major axis 6: d(A, F) + d(A, F′) = ${fmt(r.d1 + r.d2, 2)}`);
    ro.set(`\\frac{(x-2)^{2}}{4}+\\frac{(y+3)^{2}}{9}=1\\qquad d(A,F)+d(A,F')=${n(r.d1, 3)}+${n(r.d2, 3)}=${n(r.d1 + r.d2, 3)}`);
  }
  still(d, draw);
})();

/* The horizontal hyperbola about (h, k): P(s) = (h + a cosh s, k + b sinh s) on the right branch, F₁ left, F₂ right */
function hyperbolaScene(d, o) {
  const BOX = fit(o.win, 100, o.bottom), hits = []; hover(d.stage, () => hits);
  return (ctx, h, k, a, b, s, G) => {
    const ax = grid(ctx, BOX, o.win, o.nx, o.ny), cc = C('curve'), pc = C('point'), lc = C('line'), c = Math.hypot(a, b);
    const P = (u) => [h + a * Math.cosh(u), k + b * Math.sinh(u)], F1 = [h - c, k], F2 = [h + c, k];
    longLine(ctx, ax, [h, k], [a, b].map((v) => v / c), lc, 2.5, [10, 8]); longLine(ctx, ax, [h, k], [a, -b].map((v) => v / c), lc, 2.5, [10, 8]);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.setLineDash([6, 6]); ctx.strokeRect(ax.X(h - a), ax.Y(k + b), ax.X(h + a) - ax.X(h - a), ax.Y(k - b) - ax.Y(k + b)); ctx.restore();
    F.polar.path(ctx, ax, P, [-3, 3], cc, { faint: 0, marks: 0 }); F.polar.path(ctx, ax, (u) => [2 * h - P(u)[0], P(u)[1]], [-3, 3], cc, { faint: 0, marks: 0 });
    const Pp = P(s); seg(ctx, ax, Pp, F1, PAL.ink, 3); seg(ctx, ax, Pp, F2, PAL.ink, 3);
    pt(ctx, ax, F1, pc); pt(ctx, ax, F2, pc); pt(ctx, ax, [h - a, k], pc, false, 6); pt(ctx, ax, [h + a, k], pc, false, 6);
    name(ctx, ax, F1, 'F₁', 'below'); name(ctx, ax, F2, 'F₂', 'below');
    G.draw(ctx, ax, pc);
    hits.length = 0;
    hits.push({ x: ax.X(Pp[0]), y: ax.Y(Pp[1]), r: 16, name: `P = (${fmt(Pp[0], 2)}, ${fmt(Pp[1], 2)})` }, { x: ax.X(h - a), y: ax.Y(k), r: 12, name: 'a vertex' }, { x: ax.X(h + a), y: ax.Y(k), r: 12, name: 'a vertex' },
      { x: ax.X(F1[0]), y: ax.Y(F1[1]), r: 14, name: `the focus F₁ = (${fmt(F1[0], 2)}, ${fmt(F1[1], 2)})` }, { x: ax.X(F2[0]), y: ax.Y(F2[1]), r: 14, name: `the focus F₂ = (${fmt(F2[0], 2)}, ${fmt(F2[1], 2)})` });
    return { d1: dist(Pp, F1), d2: dist(Pp, F2), c, P };
  };
}
/* Figure 11.51: window ±7, one scale */
(function () {
  const d = sim('sim-hyperbola', 560);
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 1, max: 4, step: 0.01, value: 2, unit: '', dec: 2, aria: 'half the transverse axis a' });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.5, max: 4, step: 0.01, value: 1.5, unit: '', dec: 2, aria: 'half the conjugate axis b' });
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -2, max: 2, step: 0.01, value: 0.8, unit: '', dec: 2, aria: 'position of P along the right branch' });
  let path = () => [0, 0];
  const G = F.polar.grip(d, { t: ss, at: (u) => path(u), span: 1 }), ro = readout(d);
  const scene = hyperbolaScene(d, { win: { x: [-7, 7], y: [-6, 6] }, bottom: 530, nx: 14, ny: 12 });
  function draw() {
    const { ctx } = begin(d.c);
    const r = scene(ctx, 0, 0, as.v, bs.v, ss.v, G); path = r.P;
    headline(ctx, `d(P, F₁) − d(P, F₂) = ${fmt(r.d1, 2)} − ${fmt(r.d2, 2)} = ${fmt(r.d1 - r.d2, 2)} = 2a`);
    ro.set(`d(P,F_{1})-d(P,F_{2})=${n(r.d1, 3)}-${n(r.d2, 3)}=${n(r.d1 - r.d2, 3)}=2(${n(as.v)})\\qquad c^{2}=a^{2}+b^{2}:\\; c=${n(r.c, 3)}`);
  }
  still(d, draw);
})();
/* Figure 11.52: Example 11.21's hyperbola about (−2, 1), a = 4, b = 3; window x −12 to 8, y −7 to 9 */
(function () {
  const d = sim('sim-hyperbola-example', 560);
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -1.6, max: 1.6, step: 0.01, value: 0.6, unit: '', dec: 2, aria: 'position of P along the right branch' });
  let path = () => [0, 0];
  const G = F.polar.grip(d, { t: ss, at: (u) => path(u), span: 1 }), ro = readout(d);
  const scene = hyperbolaScene(d, { win: { x: [-12, 8], y: [-7, 9] }, bottom: 530, nx: 10, ny: 8 });
  function draw() {
    const { ctx } = begin(d.c);
    const r = scene(ctx, -2, 1, 4, 3, ss.v, G); path = r.P;
    headline(ctx, `Center (−2, 1), asymptotes y = 1 ± ¾(x + 2): d(P, F₁) − d(P, F₂) = ${fmt(r.d1 - r.d2, 2)}`);
    ro.set(`\\frac{(x+2)^{2}}{16}-\\frac{(y-1)^{2}}{9}=1\\qquad d(P,F_{1})-d(P,F_{2})=${n(r.d1, 3)}-${n(r.d2, 3)}=${n(r.d1 - r.d2, 3)}`);
  }
  still(d, draw);
})();

/* Figure 11.53: x²/4 − y²/2.25 = 1, the right branch the mirror; three rays aimed at F₂ = (2.5, 0) strike it at M and go on to
   F₁ = (−2.5, 0). Window x −4 to 6, y −1.5 to 5. 4 s a run. */
(function () {
  const d = sim('sim-hyperbolic-mirror', 500);
  const a = 2, b = 1.5, c = 2.5, F1 = [-c, 0], F2 = [c, 0], ro = readout(d);
  const RAYS = [0.25, 0.6, 1.0].map((w) => { const M = [a * Math.cosh(w), b * Math.sinh(w)], dx = M[0] - c, dy = M[1], L = Math.hypot(dx, dy); return { S: [M[0] + (4.5 * dx) / L, M[1] + (4.5 * dy) / L], M }; });
  const len = (r) => dist(r.S, r.M) + dist(r.M, F1), T = Math.max(...RAYS.map(len)), cy = cycle(() => T, 1.2);
  const WIN = { x: [-4, 6], y: [-1.5, 5] }, BOX = fit(WIN, 100, 470);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = grid(ctx, BOX, WIN, 10, 0), cc = C('curve'), pc = C('point'), t = Math.min(cy.now(), T);
    F.polar.path(ctx, ax, (u) => [a * Math.cosh(u), b * Math.sinh(u)], [-0.4, 1.6], cc, { faint: 0, marks: 0, w: 7 });
    RAYS.forEach((r) => {
      seg(ctx, ax, r.S, r.M, alpha(PAL.ink, 0.45), 2); seg(ctx, ax, r.M, F1, alpha(PAL.ink, 0.45), 2); seg(ctx, ax, r.M, F2, alpha(PAL.ink, 0.3), 2, [6, 6]);
      const l1 = dist(r.S, r.M), q = t <= l1 ? [r.S[0] + ((r.M[0] - r.S[0]) * t) / l1, r.S[1] + ((r.M[1] - r.S[1]) * t) / l1] : (() => { const k = Math.min(1, (t - l1) / dist(r.M, F1)); return [r.M[0] + (F1[0] - r.M[0]) * k, r.M[1] + (F1[1] - r.M[1]) * k]; })();
      pt(ctx, ax, q, PAL.ink, true, 6);
    });
    pt(ctx, ax, F1, pc); pt(ctx, ax, F2, pc); name(ctx, ax, F1, 'F₁', 'below'); name(ctx, ax, F2, 'F₂', 'below');
    label(ctx, 'light from star', ax.X(RAYS[0].S[0]), ax.Y(RAYS[0].S[1]), { side: 'left', size: 20, gap: 12 });
    label(ctx, 'mirror surface', ax.X(a * Math.cosh(1.4)), ax.Y(b * Math.sinh(1.4)), { side: 'right', size: 20, gap: 14, color: cc });
    headline(ctx, 'Light aimed at the focus F₂ is reflected by the hyperbolic mirror toward the other focus F₁');
    const M = RAYS[1].M;
    ro.set(`|MF_{1}|-|MF_{2}|=${n(dist(M, F1), 3)}-${n(dist(M, F2), 3)}=${n(dist(M, F1) - dist(M, F2), 3)}=2a`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 4), draw });
})();

/* Figure 11.54: focus at the pole, directrix x = −2, r = 2e/(1 − e cos θ); window x −6 to 9, y −6 to 6 */
(function () {
  const d = sim('sim-eccentricity', 560);
  const es = ctl(d.controls, { label: 'e', cls: '', key: 'e', min: 0.2, max: 2, step: 0.01, value: 0.6, unit: '', dec: 2, aria: 'eccentricity e', specials: [{ at: 1 }] });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: PI / 2, unit: '', dec: 2, aria: 'angle theta of P' });
  const f = (t) => (2 * es.v) / (1 - es.v * Math.cos(t));
  const G = F.polar.grip(d, { t: ts, at: (t) => F.polar.of(f)(t), span: PI / 3 }), ro = readout(d);
  const WIN = { x: [-6, 9], y: [-6, 6] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = grid(ctx, BOX, WIN, 15, 12), cc = C('curve'), pc = C('point'), lc = C('line'), e = es.v, th = ts.v, r = f(th), [x, y] = F.polar.xy(r, th);
    longLine(ctx, ax, [-2, 0], [0, 1], lc, 3); label(ctx, 'directrix x = −2', ax.X(-2), ax.Y(5.3), { side: 'right', size: 20, color: lc, gap: 8 });
    F.polar.curve(ctx, ax, f, [0, TAU], cc, { faint: 0, n: 3000, gap: 4 });
    const P = [x, y], D = [-2, y];
    if (Number.isFinite(r)) { seg(ctx, ax, P, [0, 0], PAL.ink, 3); seg(ctx, ax, P, D, PAL.ink, 3); pt(ctx, ax, D, pc, false, 7); }
    pt(ctx, ax, [0, 0], pc); name(ctx, ax, [0, 0], 'F', 'below');
    G.draw(ctx, ax, pc);
    const kind = Math.abs(e - 1) < 0.005 ? 'a parabola' : e < 1 ? 'an ellipse' : 'a hyperbola';
    headline(ctx, `e = ${fmt(e, 2)} ${Math.abs(e - 1) < 0.005 ? '=' : e < 1 ? '<' : '>'} 1: ${kind}; PF/PD = ${fmt(Math.abs(r) / Math.abs(x + 2), 2)} at every point`);
    ro.set(`\\frac{PF}{PD}=\\frac{${n(Math.abs(r), 3)}}{${n(Math.abs(x + 2), 3)}}=${n(Math.abs(r) / Math.abs(x + 2), 3)}=e\\qquad r=\\frac{ep}{1-e\\cos ${typed('angle', '\\theta')}}=\\frac{2(${n(e)})}{1-${n(e)}\\cos ${n(th)}}=${n(r)}`);
  }
  still(d, draw);
})();

/* Figure 11.55: r = 3/(1 + 2 cos θ); window x −3 to 7, y ±5 */
(function () {
  const d = sim('sim-polar-hyperbola', 560);
  const f = (t) => 3 / (1 + 2 * Math.cos(t));
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: TAU, unit: '', dec: 2, aria: 'angle theta', specials: [{ at: PI / 2 }, { at: PI }, { at: 1.5 * PI }] });
  const G = F.polar.grip(d, { t: ts, at: F.polar.of(f), span: PI / 4 }), ro = readout(d);
  const WIN = { x: [-3, 7], y: [-5, 5] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12 }), th = ts.v, r = f(th);
    F.polar.curve(ctx, ax, f, [0, TAU], C('curve'), { upto: th, n: 4000, gap: 3 });
    F.polar.ray(ctx, ax, th, r, alpha(C('line'), 0.8), { w: 2.5 });
    if (th > 0.04 && th < TAU - 0.04) angleArc(ctx, { x: ax.X(0), y: ax.Y(0) }, 42, 0, th, 'θ', null, C('angle'));
    G.draw(ctx, ax, C('point'));
    headline(ctx, `θ = ${fmt(th, 2)}: r = 3/(1 + 2 cos θ) = ${Number.isFinite(r) && Math.abs(r) < 1e4 ? fmt(r, 2) : 'undefined'}${r < 0 ? ', on the left branch behind the pole' : ''}`);
    ro.set(`r=\\frac{3}{1+2\\cos ${typed('angle', '\\theta')}}=\\frac{3}{1+2\\cos ${n(th)}}=${Math.abs(r) < 1e4 ? n(r, 3) : '\\text{undefined}'}\\qquad e=2,\\; p=\\frac{3}{2}`);
  }
  still(d, draw);
})();

/* Rotation of axes: the conic Ax² + Bxy + Cy² + F = 0 drawn from its form in the axes turned by θ₀ (where B′ = 0), and axes x′, y′
   turned by the reader's θ, with A′, B′, C′ there */
function rotationFig(id, o) {
  const d = sim(id, 560);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 90, step: 0.1, value: o.th0, unit: '°', dec: 1, aria: 'angle of rotation theta', specials: [{ at: o.th0 }] });
  const ro = readout(d), BOX = fit(o.win, 100, 530);
  const { A, B, Cc, Fc } = o, r0 = o.th0 * DEG, c0 = Math.cos(r0), s0 = Math.sin(r0);
  const toXY = ([u, w]) => [u * c0 - w * s0, u * s0 + w * c0];
  function draw() {
    const { ctx } = begin(d.c);
    const ax = grid(ctx, BOX, o.win, o.nx, o.ny), cc = C('curve'), lc = C('line'), th = ts.v * DEG, c = Math.cos(th), s = Math.sin(th);
    o.branches.forEach(([pf, span]) => F.polar.path(ctx, ax, (u) => toXY(pf(u)), span, cc, { faint: 0, marks: 0 }));
    longLine(ctx, ax, [0, 0], [c, s], lc, 3, [12, 8]); longLine(ctx, ax, [0, 0], [-s, c], lc, 3, [12, 8]);
    const R = Math.min(o.win.x[1], o.win.y[1]) * 0.9;
    label(ctx, "x′", ax.X(R * c), ax.Y(R * s), { side: 'right', size: 22, color: lc, gap: 10 }); label(ctx, "y′", ax.X(-R * s), ax.Y(R * c), { side: 'above', size: 22, color: lc, gap: 10 });
    if (th > 0.02) angleArc(ctx, { x: ax.X(0), y: ax.Y(0) }, 54, 0, th, 'θ', null, C('angle'));
    const Ap = A * c * c + B * c * s + Cc * s * s, Bp = 2 * (Cc - A) * s * c + B * (c * c - s * s), Cp = A * s * s - B * s * c + Cc * c * c;
    const zero = Math.abs(Bp) < 0.02 * Math.max(1, Math.abs(B));
    headline(ctx, zero ? `θ = ${fmt(ts.v, 1)}°: the cross term is gone, ${o.done}` : `θ = ${fmt(ts.v, 1)}°: in the axes x′, y′ the cross term’s coefficient is B′ = ${fmt(Bp, 2)}`);
    ro.set(`A'=${n(Ap, 3)},\\quad B'=${zero ? '0' : n(Bp, 3)},\\quad C'=${n(Cp, 3)},\\quad F'=${n(Fc, 0)}\\qquad \\cot 2${typed('angle', '\\theta')}=\\frac{A-C}{B}\\;\\text{at}\\;${typed('angle', '\\theta')}=${n(o.th0, 1)}^{\\circ}`);
  }
  still(d, draw);
}
/* Figure 11.56: xy = 1 (A = C = 0, B = 1, F = −1), θ₀ = 45°, x′²/2 − y′²/2 = 1; window ±4.5 */
rotationFig('sim-rotate-xy', { A: 0, B: 1, Cc: 0, Fc: -1, th0: 45, win: { x: [-5, 5], y: [-5, 5] }, nx: 10, ny: 10,
  branches: [[(u) => [Math.SQRT2 * Math.cosh(u), Math.SQRT2 * Math.sinh(u)], [-2.2, 2.2]], [(u) => [-Math.SQRT2 * Math.cosh(u), Math.SQRT2 * Math.sinh(u)], [-2.2, 2.2]]],
  done: 'and the hyperbola reads x′²/2 − y′²/2 = 1' });
/* Figure 11.57: 13x² − 6√3xy + 7y² − 256 = 0, θ₀ = 60°, x′²/64 + y′²/16 = 1; window ±9 */
rotationFig('sim-rotate-ellipse', { A: 13, B: -6 * Math.sqrt(3), Cc: 7, Fc: -256, th0: 60, win: { x: [-9, 9], y: [-9, 9] }, nx: 9, ny: 9,
  branches: [[(u) => [8 * Math.cos(u), 4 * Math.sin(u)], [0, TAU]]],
  done: 'and the ellipse reads x′²/64 + y′²/16 = 1' });
};
