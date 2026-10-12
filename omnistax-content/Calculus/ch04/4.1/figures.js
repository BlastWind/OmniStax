/* Figures for section 4.1 Related Rates. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.1'] = function (root, F) {
const { C, PAL, alpha, begin, axes, plot, tangent, dot, line, arrow, text, headline, register, cycle, tex, fmt, hover, vbracket, hbracket, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* The pattern of every scene here: the quantity the example asks about, graphed against t,
   the part already lived drawn solid and the rest faint, the point at t and its tangent. */
function timeGraph(ctx, box, T, yr, f, df, t, o) {
  const fc = o.color || C('function');
  const ax = axes(ctx, box, [0, o.tMax], yr, { xl: 't, seconds', yl: o.yl, yc: fc, nx: o.nx, ny: o.ny, fy: o.fy, fx: o.fx });
  plot(ctx, ax, f, alpha(fc, 0.25), { x: [0, o.ahead ?? T] });
  if (t > 0) plot(ctx, ax, f, fc, { x: [0, t] });
  tangent(ctx, ax, f, t, C('line'), { df, w: 3 });
  dot(ctx, ax.X(t), ax.Y(f(t)), C('point'), true, 9);
  return ax;
}

/* Figure 4.2: one balloon filled at dV/dt = 2 cm³/sec from r = 0.5 cm until r = 3 cm, the example's instant.
   Scene 60 px per cm; graph t from 0 to 60 sec, r from 0 to 3.5 cm. */
(function () {
  const d = sim('sim-balloon', 520);
  const RATE = 2, V0 = (4 / 3) * Math.PI * 0.125, END = ((4 / 3) * Math.PI * 27 - V0) / RATE;
  const r = (t) => Math.cbrt((3 * (V0 + RATE * t)) / (4 * Math.PI)), dr = (t) => RATE / (4 * Math.PI * r(t) ** 2);
  const cy = cycle(() => END, 1.6);
  const CX = 300, CY = 260, S = 52;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), R = r(t), m = dr(t), done = t >= END - 1e-9, P = R * S;
    headline(ctx, done ? `r = 3 cm: the radius grows at $\\kdrdt = \\frac{1}{18\\pi} \\approx 0.0177$ cm/sec.` : `t = ${fmt(t, 1)} sec: r = ${fmt(R, 2)} cm, growing at ${fmt(m, 4)} cm/sec.`);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(CX, CY, P, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX - 10, CY + P + 14); ctx.lineTo(CX, CY + P - 1); ctx.lineTo(CX + 10, CY + P + 14); ctx.closePath(); ctx.fillStyle = PAL.ink; ctx.fill(); ctx.restore();
    line(ctx, CX, CY + P + 14, CX, 470, alpha(PAL.ink, 0.6), 2.5);
    const ph = (t / END * 9) % 1;
    for (let i = 0; i < 2; i++) { const k = (ph + i / 2) % 1, y = 468 - k * 70; if (y - 30 > CY + P + 16) arrow(ctx, CX + 30, y, CX + 30, y - 30, alpha(PAL.ink, 0.55), 3); }
    const a = -Math.PI / 5, ex = CX + P * Math.cos(a), ey = CY + P * Math.sin(a);
    line(ctx, CX, CY, ex, ey, PAL.ink, 3); dot(ctx, CX, CY, PAL.ink, true, 5);
    text(ctx, `r = ${fmt(R, 2)} cm`, CX + Math.max(P, 60) * 0.5 * Math.cos(a), CY + Math.max(P, 60) * 0.5 * Math.sin(a) - 22, PAL.ink, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    const ax = timeGraph(ctx, { l: 690, r: 1320, t: 100, b: 440 }, END, [0, 3.5], r, dr, t, { tMax: 60, nx: 6, ny: 7, yl: 'r(t), centimeters', fy: (v) => fmt(v, 1) });
    text(ctx, '$r(t)$', ax.X(50), ax.Y(r(50)) - 28, C('function'), { size: 24, weight: 600, align: 'center', tex: true });
    hits = [{ x: CX, y: CY, r: Math.max(P, 30), name: `the balloon, volume ${fmt((4 / 3) * Math.PI * R ** 3, 1)} cm³` },
      { x: ax.X(t), y: ax.Y(R), r: 18, name: `the tangent at t = ${fmt(t, 1)} sec, slope dr/dt = ${fmt(m, 4)} cm/sec` }];
    tex(d.readout, `\\kdVdt = 4\\pi r^2\\,\\kdrdt \\qquad 2 = 4\\pi(${n(R, 3)})^2(${n(m, 5)})`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => END / 5), draw });
})();

/* Figure 4.3: the plane at 4000 ft flies at dx/dt = 600 ft/sec from straight above the man (x = 0)
   to straight above the tower (x = 3000 ft), where it holds. Scene 0.1 px per ft; graph t 0 to 5 sec,
   s 4000 to 5000 ft. */
(function () {
  const d = sim('sim-plane', 520);
  const V = 600, Hft = 4000, END = 5;
  const s = (t) => Math.hypot(V * t, Hft), ds = (t) => (V * t * V) / s(t);
  const cy = cycle(() => END, 1.6);
  const GX = 90, GY = 470, K = 0.092;
  let hits = [];
  hover(d.stage, () => hits);
  function jet(ctx, x, y) {
    ctx.save(); ctx.translate(x, y); ctx.fillStyle = PAL.ink; ctx.beginPath();
    ctx.moveTo(34, 0); ctx.quadraticCurveTo(30, -7, 18, -7); ctx.lineTo(-26, -6); ctx.lineTo(-38, -24); ctx.lineTo(-46, -24); ctx.lineTo(-40, 2); ctx.lineTo(18, 7); ctx.quadraticCurveTo(30, 7, 34, 0); ctx.fill();
    ctx.beginPath(); ctx.moveTo(6, 2); ctx.lineTo(-14, 16); ctx.lineTo(-22, 16); ctx.lineTo(-10, 2); ctx.fill(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), x = V * t, S = s(t), m = ds(t), done = t >= END - 1e-9;
    headline(ctx, done ? `Over the tower, x = 3000 ft and s = 5000 ft: $\\kdsdt = 360$ ft/sec.` : `x = ${fmt(x, 0)} ft: s = ${fmt(S, 0)} ft, increasing at ${fmt(m, 0)} ft/sec.`);
    const PX = GX + x * K, PY = GY - Hft * K, TX = GX + 3000 * K;
    line(ctx, 40, GY, 620, GY, PAL.ink, 3);
    line(ctx, TX, GY, TX, GY - 70, PAL.ink, 4); line(ctx, TX - 16, GY, TX, GY - 70, PAL.ink, 2); line(ctx, TX + 16, GY, TX, GY - 70, PAL.ink, 2);
    text(ctx, 'tower', TX + 34, GY - 20, PAL.muted, { size: 18, align: 'left' });
    F.silhouette(ctx, { x: GX, y: GY, s: 0.55, pose: 'stand', color: PAL.ink });
    line(ctx, PX, PY, PX, GY, alpha(PAL.ink, 0.45), 2.5, [10, 10]);
    vbracket(ctx, PX + 16, PY, GY, PAL.muted, '4000 ft', 1);
    line(ctx, GX, GY - 40, PX, PY, PAL.ink, 3);
    if (x > 1) hbracket(ctx, GX, PX, GY + 14, PAL.ink, `x = ${fmt(x, 0)} ft`, { side: 'below' });
    const mx = (GX + PX) / 2, my = (GY - 40 + PY) / 2;
    text(ctx, `s = ${fmt(S, 0)} ft`, mx - 14, my - 8, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    jet(ctx, PX, PY);
    arrow(ctx, PX + 40, PY, PX + 110, PY, C('derivative'), 4);
    text(ctx, '$\\kdxdt$', PX + 120, PY, C('derivative'), { size: 22, weight: 600, align: 'left', tex: true });
    const ax = timeGraph(ctx, { l: 760, r: 1320, t: 100, b: 440 }, END, [4000, 5000], s, ds, t, { tMax: 5, nx: 5, ny: 5, yl: 's(t), feet' });
    text(ctx, '$s(t)$', ax.X(4.3), ax.Y(s(4.3)) - 30, C('function'), { size: 24, weight: 600, align: 'center', tex: true });
    hits = [{ x: PX, y: PY, r: 40, name: 'the plane, flying at dx/dt = 600 ft/sec' }, { x: GX, y: GY - 30, r: 30, name: 'the man' },
      { x: ax.X(t), y: ax.Y(S), r: 18, name: `the tangent at t = ${fmt(t, 2)} sec, slope ds/dt = ${fmt(m, 0)} ft/sec` }];
    tex(d.readout, `x\\,\\kdxdt = s\\,\\kdsdt \\qquad (${n(x, 0)})(600) = (${n(S, 1)})(${n(m, 2)})`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 4.5: the rocket rises at dh/dt = 600 ft/sec from the pad to h = 1000 ft, 5000 ft from the camera.
   Scene 0.1 px per ft; graph t 0 to 2 sec, θ 0 to 0.25 rad. */
(function () {
  const d = sim('sim-rocket-camera', 400);
  const V = 600, D = 5000, END = 1000 / V;
  const th = (t) => Math.atan((V * t) / D), dth = (t) => (V / D) * Math.cos(th(t)) ** 2;
  const cy = cycle(() => END, 1.6);
  const CXp = 80, GY = 330, K = 0.1, PAD = CXp + D * K;
  let hits = [];
  hover(d.stage, () => hits);
  function rocket(ctx, x, y) {
    ctx.save(); ctx.translate(x, y); ctx.fillStyle = PAL.ink; ctx.beginPath();
    ctx.moveTo(0, -46); ctx.quadraticCurveTo(9, -34, 9, -14); ctx.lineTo(9, 0); ctx.lineTo(16, 10); ctx.lineTo(-16, 10); ctx.lineTo(-9, 0); ctx.lineTo(-9, -14); ctx.quadraticCurveTo(-9, -34, 0, -46); ctx.fill(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), h = V * t, a = th(t), m = dth(t), done = t >= END - 1e-9, sec2 = 1 / Math.cos(a) ** 2;
    headline(ctx, done ? `h = 1000 ft: the camera turns at $\\kdthetadt = \\frac{3}{26} \\approx 0.1154$ rad/sec.` : `h = ${fmt(h, 0)} ft: $\\ktheta$ = ${fmt(a, 4)} rad, turning at ${fmt(m, 4)} rad/sec.`);
    const RY = GY - h * K;
    line(ctx, 30, GY, 640, GY, PAL.ink, 3);
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.fillRect(CXp - 18, GY - 30, 30, 20); ctx.restore();
    line(ctx, CXp, GY - 20, PAD, RY, alpha(PAL.ink, 0.7), 2.5, [10, 8]);
    line(ctx, PAD, GY, PAD, RY, PAL.ink, 2.5);
    if (h > 20) vbracket(ctx, PAD + 30, RY, GY, PAL.ink, `h = ${fmt(h, 0)} ft`, 1);
    hbracket(ctx, CXp, PAD, GY + 14, PAL.muted, '5000 ft', { side: 'below' });
    angleArc(ctx, { x: CXp, y: GY - 20 }, 120, 0, a, '', null, C('angle'));
    text(ctx, '$\\ktheta$', CXp + 140, GY - 20 - 140 * Math.sin(a / 2) - 4, C('angle'), { size: 24, weight: 600, align: 'left', tex: true });
    rocket(ctx, PAD, RY - 6);
    if (!done && t > 0) { const k = (t * 7) % 1; arrow(ctx, PAD - 30, RY + 30 - k * 14, PAD - 30, RY - 34 - k * 14, C('derivative'), 4); }
    else arrow(ctx, PAD - 30, RY + 30, PAD - 30, RY - 34, C('derivative'), 4);
    text(ctx, '$\\kdhdt$', PAD - 44, RY - 2, C('derivative'), { size: 22, weight: 600, align: 'right', tex: true });
    const ax = timeGraph(ctx, { l: 820, r: 1320, t: 110, b: 330 }, END, [0, 0.8], th, dth, t, { tMax: 8, ahead: 8, nx: 8, ny: 4, yl: 'θ(t), radians', color: C('angle'), fy: (v) => fmt(v, 1) });
    text(ctx, '$\\ktheta(t)$', ax.X(7), ax.Y(th(7)) + 34, C('angle'), { size: 24, weight: 600, align: 'center', tex: true });
    hits = [{ x: PAD, y: RY - 20, r: 30, name: 'the rocket, rising at dh/dt = 600 ft/sec' }, { x: CXp, y: GY - 20, r: 26, name: 'the camera' },
      { x: ax.X(t), y: ax.Y(a), r: 18, name: `the tangent at t = ${fmt(t, 2)} sec, slope dθ/dt = ${fmt(m, 4)} rad/sec` }];
    tex(d.readout, `\\kdhdt = 5000\\sec^2\\ktheta\\,\\kdthetadt \\qquad 600 = 5000(${n(sec2, 4)})(${n(m, 5)})`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => END / 5), draw });
})();

/* The unnumbered triangle of Example 4.3, step 5: legs 5000 and 1000, hypotenuse c, at 0.18 px per ft. */
(function () {
  const d = sim('fig-camera-triangle', 300);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const K = 0.18, A = { x: 250, y: 240 }, B = { x: 250 + 5000 * K, y: 240 }, T = { x: B.x, y: 240 - 1000 * K };
    line(ctx, A.x, A.y, B.x, B.y, PAL.ink, 3); line(ctx, B.x, B.y, T.x, T.y, PAL.ink, 3); line(ctx, A.x, A.y, T.x, T.y, PAL.ink, 3);
    line(ctx, B.x - 18, B.y, B.x - 18, B.y - 18, PAL.ink, 2); line(ctx, B.x - 18, B.y - 18, B.x, B.y - 18, PAL.ink, 2);
    text(ctx, '5000', (A.x + B.x) / 2, A.y + 28, PAL.ink, { size: 22, align: 'center' });
    text(ctx, '1000', B.x + 14, (B.y + T.y) / 2, PAL.ink, { size: 22, align: 'left' });
    text(ctx, 'c', (A.x + T.x) / 2 - 6, (A.y + T.y) / 2 - 22, PAL.ink, { size: 24, weight: 600, align: 'center' });
    const a = Math.atan(1000 / 5000);
    angleArc(ctx, A, 150, 0, a, '', null, C('angle'));
    text(ctx, '$\\ktheta$', A.x + 170, A.y - 14, C('angle'), { size: 24, weight: 600, align: 'left', tex: true });
    hits = [{ x: (A.x + T.x) / 2, y: (A.y + T.y) / 2, r: 30, name: 'the hypotenuse c = 1000√26 ft' }];
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 4.6: water drains from the funnel (height 2 ft, top radius 1 ft) at 0.03 ft³/sec from h = 2 ft to h = 1/2 ft.
   Scene 170 px per ft; graph t 0 to 70 sec, h 0 to 2 ft. */
(function () {
  const d = sim('sim-funnel', 520);
  const Q = 0.03, V = (h) => (Math.PI / 12) * h ** 3, END = (V(2) - V(0.5)) / Q;
  const h = (t) => Math.cbrt((12 * (V(2) - Q * t)) / Math.PI), dh = (t) => -Q / ((Math.PI / 4) * h(t) ** 2);
  const cy = cycle(() => END, 1.6);
  const AX = 300, AY = 450, S = 170;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), H = h(t), m = dh(t), done = t >= END - 1e-9, Y = AY - H * S, R = (H / 2) * S;
    headline(ctx, done ? `h = 1/2 ft: the level falls at $\\kdhdt = -\\frac{0.48}{\\pi} \\approx -0.153$ ft/sec.` : `h = ${fmt(H, 2)} ft: the level falls at ${fmt(-m, 3)} ft/sec.`);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.13); ctx.beginPath(); ctx.moveTo(AX, AY); ctx.lineTo(AX - R, Y); ctx.lineTo(AX + R, Y); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, AX, AY, AX - S, AY - 2 * S, PAL.ink, 3); line(ctx, AX, AY, AX + S, AY - 2 * S, PAL.ink, 3);
    line(ctx, AX - S, AY - 2 * S, AX + S, AY - 2 * S, alpha(PAL.ink, 0.5), 2, [10, 10]);
    line(ctx, AX - R, Y, AX + R, Y, PAL.ink, 2.5);
    line(ctx, AX, AY, AX, Y, alpha(PAL.ink, 0.5), 2, [4, 8]);
    vbracket(ctx, AX + S + 30, Y, AY, PAL.ink, `h = ${fmt(H, 2)} ft`, 1);
    text(ctx, `r = ${fmt(H / 2, 2)} ft`, AX + R / 2, Y - 18, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    vbracket(ctx, AX - S - 30, AY - 2 * S, AY, PAL.muted, '2 ft', -1);
    hbracket(ctx, AX, AX + S, AY - 2 * S - 14, PAL.muted, '1 ft');
    if (!done) for (let i = 0; i < 2; i++) { const k = ((t / END) * 14 + i / 2) % 1; dot(ctx, AX, AY + 8 + k * 50, alpha(PAL.ink, 0.6), true, 4); }
    const ax = timeGraph(ctx, { l: 760, r: 1320, t: 100, b: 440 }, END, [0, 2], h, dh, t, { tMax: 70, nx: 7, ny: 4, yl: 'h(t), feet', fy: (v) => fmt(v, 1) });
    text(ctx, '$h(t)$', ax.X(63), ax.Y(h(63)) + 34, C('function'), { size: 24, weight: 600, align: 'center', tex: true });
    hits = [{ x: AX, y: (AY + Y) / 2, r: 30, name: `the water, volume ${fmt(V(H), 3)} ft³` },
      { x: ax.X(t), y: ax.Y(H), r: 18, name: `the tangent at t = ${fmt(t, 1)} sec, slope dh/dt = ${fmt(m, 3)} ft/sec` }];
    tex(d.readout, `\\kdVdt = \\frac{\\pi}{4}h^2\\,\\kdhdt \\qquad {-0.03} = \\frac{\\pi}{4}(${n(H, 3)})^2(${n(m, 4)})`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => END / 5), draw });
})();
};
