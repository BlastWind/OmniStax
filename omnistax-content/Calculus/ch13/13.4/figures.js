/* Figures for section 13.4 Motion in Space. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, arrow, dot, text, headline, register, readout, cycle, fmt, hover, hbracket, vbracket, angleArc } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sg = (v, dec = 2) => (v < 0 ? `-${n(-v, dec)}` : `+${n(v, dec)}`);
const PI = Math.PI, TAU = 2 * Math.PI;
const tl = (ctx, s, x, y, color, align = 'left', size = 22) => text(ctx, s, x, y, color, { size, tex: true, align, bg: PAL.panel });
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const fitIn = (win, l, r, t, b) => {
  const s = Math.min((r - l) / (win.x[1] - win.x[0]), (b - t) / (win.y[1] - win.y[0])), w = s * (win.x[1] - win.x[0]), h = s * (win.y[1] - win.y[0]);
  return { l: (l + r) / 2 - w / 2, r: (l + r) / 2 + w / 2, t: (t + b) / 2 - h / 2, b: (t + b) / 2 + h / 2 };
};
/* an arrow drawn dashed: the arrow, then the panel colour over its shaft in gaps */
const darrow = (ctx, x1, y1, x2, y2, color, w = 4) => { arrow(ctx, x1, y1, x2, y2, color, w); const L = Math.hypot(x2 - x1, y2 - y1); if (L > 24) line(ctx, x1, y1, x1 + ((x2 - x1) * (L - 20)) / L, y1 + ((y2 - y1) * (L - 20)) / L, PAL.panel, w * 0.5, [7, 7]); };

/* Figure 13.11: Example 13.14's particle r(t) = t² i + √(5 − t²) j for 0 ≤ t ≤ 2 seconds with v(t) and a(t) drawn at 0.6
   scale (0.6 unit of arrow per unit of velocity or acceleration); window x −0.5 to 7, y −2.5 to 3, one scale; 6 s a run. */
(function () {
  const d = sim('sim-parabola-motion', 640);
  const T1 = 2, cy = cycle(() => T1, 1.2), ro = readout(d);
  const P = (t) => [t * t, Math.sqrt(5 - t * t)], V = (t) => [2 * t, -t / Math.sqrt(5 - t * t)], A = (t) => [2, -5 * Math.pow(5 - t * t, -1.5)], K = 0.6;
  const WIN = { x: [-0.5, 7], y: [-2.5, 3] }, BOX = fitIn(WIN, 120, 1280, 90, 600);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vc = C('vector'), t = Math.min(cy.now(), T1), [x, y] = P(t), v = V(t), a = A(t), sp = Math.hypot(...v);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 15, ny: 11, fx: (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : ''), fy: (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : '') });
    F.polar.path(ctx, ax, P, [0, T1], cc, { upto: t, marks: 2 });
    const [u1, w1] = P(1); dot(ctx, ax.X(u1), ax.Y(w1), cc, false, 7); tl(ctx, '$t=1$', ax.X(u1) + 4, ax.Y(w1) + 26, PAL.muted, 'center', 20);
    const px = ax.X(x), py = ax.Y(y);
    arrow(ctx, px, py, ax.X(x + K * a[0]), ax.Y(y + K * a[1]), vc, 6);
    arrow(ctx, px, py, ax.X(x + K * v[0]), ax.Y(y + K * v[1]), vc, 3.5);
    dot(ctx, px, py, C('point'), true, 9);
    hits.length = 0;
    hits.push({ x: px, y: py, r: 16, name: `the particle at t = ${fmt(t, 2)} s, (${fmt(x, 2)}, ${fmt(y, 2)})` },
      { x: ax.X(x + K * v[0]), y: ax.Y(y + K * v[1]), r: 14, name: `the velocity v(t) = ⟨${fmt(v[0], 2)}, ${fmt(v[1], 2)}⟩ (thin arrow, 0.6 scale)` },
      { x: ax.X(x + K * a[0]), y: ax.Y(y + K * a[1]), r: 14, name: `the acceleration a(t) = ⟨${fmt(a[0], 2)}, ${fmt(a[1], 2)}⟩ (thick arrow, 0.6 scale)` },
      { x: ax.X(u1), y: ax.Y(w1), r: 12, name: 'the book’s t = 1: v(1) = 2i − ½j, a(1) = 2i − ⅝j' });
    tl(ctx, '$\\kvecv$ thin, $\\kveca$ thick, at 0.6 scale', BOX.r - 10, BOX.t + 18, PAL.muted, 'right', 18);
    headline(ctx, `t = ${fmt(t, 2)}: v = ⟨${fmt(v[0], 2)}, ${fmt(v[1], 2)}⟩, speed ${fmt(sp, 2)}`);
    ro.set(`\\kvecv(t)=2t\\,\\kveci-\\frac{t}{\\sqrt{5-t^{2}}}\\kvecj=${n(v[0])}\\,\\kveci${sg(v[1])}\\,\\kvecj,\\quad \\kveca(t)=${n(a[0])}\\,\\kveci${sg(a[1])}\\,\\kvecj,\\quad \\kv(t)=${n(sp)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T1 / 6), draw });
})();

/* Figure 13.12 + 13.13 + 13.14: a car on the road y = 1.2 sin(0.9x), 0 ≤ x ≤ 12 (a stand-in: the book's road prints no
   function), seen from above; steady at speed 2, or braking into the bends, v = 2.6 − 1.4κ/κmax. Arrows to scale 0.6 for v
   and 0.5 for a; window x −0.5 to 12.5, y −3 to 3, one scale. A lap is the time it takes, about 8 s. */
(function () {
  const d = sim('sim-road', 520);
  const f = (x) => 1.2 * Math.sin(0.9 * x), f1 = (x) => 1.08 * Math.cos(0.9 * x), f2 = (x) => -0.972 * Math.sin(0.9 * x);
  const kap = (x) => Math.abs(f2(x)) / Math.pow(1 + f1(x) ** 2, 1.5), KMAX = 0.972;
  const M = 2400, X = [], Sx = [0];
  for (let i = 0; i <= M; i++) X.push((12 * i) / M);
  for (let i = 1; i <= M; i++) Sx.push(Sx[i - 1] + Math.hypot(X[i] - X[i - 1], f(X[i]) - f(X[i - 1])));
  const L = Sx[M];
  const MODES = {
    steady: (x) => 2,
    brake: (x) => 2.6 - 1.4 * kap(x) / KMAX,
  };
  const tables = {};
  Object.entries(MODES).forEach(([k, vf]) => { const tt = [0]; for (let i = 1; i <= M; i++) tt.push(tt[i - 1] + (Sx[i] - Sx[i - 1]) / ((vf(X[i]) + vf(X[i - 1])) / 2)); tables[k] = tt; });
  const mode = choice(d.controls, { label: '\\text{driving}', options: [{ value: 'steady', label: 'steady' }, { value: 'brake', label: 'braking into the bends' }], value: 'steady', onInput: () => cy.reset() });
  const cy = cycle(() => tables[mode.value][M], 1.2), ro = readout(d);
  const WIN = { x: [-0.5, 12.5], y: [-2.6, 2.6] }, BOX = fitIn(WIN, 40, 1360, 90, 470);
  const hits = []; hover(d.stage, () => hits);
  const at = (tau) => { const tt = tables[mode.value]; let lo = 0, hi = M; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (tt[m] <= tau) lo = m; else hi = m; } const k = (tau - tt[lo]) / ((tt[hi] - tt[lo]) || 1); return X[lo] + k * (X[hi] - X[lo]); };
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vc = C('vector'), tau = Math.min(cy.now(), tables[mode.value][M]), x = at(tau), y = f(x), vf = MODES[mode.value];
    const sc = (BOX.r - BOX.l) / (WIN.x[1] - WIN.x[0]), XX = (u) => BOX.l + (u - WIN.x[0]) * sc, YY = (v) => BOX.b - (v - WIN.y[0]) * sc;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.12); ctx.lineWidth = 46; ctx.lineCap = 'butt'; ctx.beginPath();
    for (let i = 0; i <= 240; i++) { const u = (12 * i) / 240; if (i) ctx.lineTo(XX(u), YY(f(u))); else ctx.moveTo(XX(u), YY(f(u))); }
    ctx.stroke(); ctx.restore();
    F.polar.path(ctx, { X: XX, Y: YY, box: BOX, xr: WIN.x, yr: WIN.y }, (u) => [u, f(u)], [0, 12], cc, { w: 3, marks: 0, faint: 0 });
    const sp = vf(x), T = [1 / Math.hypot(1, f1(x)), f1(x) / Math.hypot(1, f1(x))], side = Math.sign(f2(x)) || 1, N = [-T[1] * side, T[0] * side];
    const h = 1e-3, dvds = (vf(x + h) - vf(x - h)) / (2 * h) * T[0], aT = sp * dvds, k = kap(x), aN = k * sp * sp;
    const a = [aT * T[0] + aN * N[0], aT * T[1] + aN * N[1]], KV = 0.6, KA = 0.5, px = XX(x), py = YY(y);
    if (k > 0.3) { const R = 1 / k; ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip(); ctx.setLineDash([8, 8]); ctx.strokeStyle = alpha(cc, 0.6); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(XX(x + N[0] * R), YY(y + N[1] * R), R * sc, 0, TAU); ctx.stroke(); ctx.restore(); }
    if (Math.abs(aT) > 0.02) darrow(ctx, px, py, XX(x + KA * aT * T[0]), YY(y + KA * aT * T[1]), vc, 3);
    if (aN > 0.02) darrow(ctx, px, py, XX(x + KA * aN * N[0]), YY(y + KA * aN * N[1]), vc, 3);
    arrow(ctx, px, py, XX(x + KA * a[0]), YY(y + KA * a[1]), vc, 6);
    arrow(ctx, px, py, XX(x + KV * sp * T[0]), YY(y + KV * sp * T[1]), vc, 3.5);
    dot(ctx, px, py, C('point'), true, 11);
    hits.length = 0;
    hits.push({ x: px, y: py, r: 16, name: `the car, moving at speed ${fmt(sp, 2)}` },
      { x: XX(x + KV * sp * T[0]), y: YY(y + KV * sp * T[1]), r: 14, name: 'the velocity v, tangent to the road (thin arrow)' },
      { x: XX(x + KA * a[0]), y: YY(y + KA * a[1]), r: 14, name: `the acceleration a = ⟨${fmt(a[0], 2)}, ${fmt(a[1], 2)}⟩ (thick arrow)` },
      { x: XX(x + KA * aT * T[0]), y: YY(y + KA * aT * T[1]), r: 12, name: `the tangential part a_T T, a_T = ${fmt(aT, 2)} (dashed)` },
      { x: XX(x + KA * aN * N[0]), y: YY(y + KA * aN * N[1]), r: 12, name: `the normal part a_N N, a_N = ${fmt(aN, 2)}, toward the inside of the turn (dashed)` });
    tl(ctx, '$\\kvecv$ thin, $\\kveca$ thick, its parts $a_{\\boldsymbol{T}}\\kvecT,$ $a_{\\boldsymbol{N}}\\kvecN$ dashed', BOX.l + 10, BOX.t + 18, PAL.muted, 'left', 18);
    const word = Math.abs(aT) < 0.02 ? 'all of the acceleration is normal' : aT < 0 ? 'the car is slowing into the bend' : 'the car is speeding out of the bend';
    headline(ctx, `$a_{\\boldsymbol{T}}=${n(aT)}$, $a_{\\boldsymbol{N}}=${n(aN)}$: ${word}`);
    ro.set(`\\kveca=a_{\\boldsymbol{T}}\\kvecT+a_{\\boldsymbol{N}}\\kvecN,\\qquad a_{\\boldsymbol{T}}=\\kvprime=${n(aT)},\\qquad a_{\\boldsymbol{N}}=\\kkappa \\kv^{2}=(${n(k)})(${n(sp)})^{2}=${n(aN)}`, undefined, { form: mode.value });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Sim: Example 13.15's r(t) = t² i + (2t − 3) j + (3t² − 3t) k for 0.5 ≤ t ≤ 2.1 with T, N, the osculating plane
   and a = 2i + 6k at half scale split into a_T T and a_N N; box x −0.5 to 6, y −2.5 to 2, z −1.5 to 10; 6 s a run. */
(function () {
  const d = sim('sim-acceleration-plane');
  const r = (t) => [t * t, 2 * t - 3, 3 * t * t - 3 * t], vv = (t) => [2 * t, 2, 6 * t - 3], aa = [2, 0, 6], T0 = 0.5, T1 = 2.1;
  const box = [[-0.5, 6], [-2.5, 2], [-1.5, 10]];
  const S = F.space3d(d, { box, h: 600, fit: 1.9, turn: -0.8, tilt: 0.3 });
  const cy = cycle(() => T1 - T0, 1.2), ro = readout(d);
  function draw() {
    const t = T0 + Math.min(cy.now(), T1 - T0), p = r(t), v = vv(t), sp = SP.norm(v), T = SP.unit(v), aT = SP.dot(v, aa) / sp;
    const an = SP.sub(aa, SP.mul(T, aT)), aN = SP.norm(an), N = SP.unit(an), vc = C('vector'), K = 0.5, s3 = 2.2;
    const sq = [SP.add(p, SP.add(SP.mul(T, s3), SP.mul(N, s3))), SP.add(p, SP.add(SP.mul(T, -s3), SP.mul(N, s3))), SP.add(p, SP.add(SP.mul(T, -s3), SP.mul(N, -s3))), SP.add(p, SP.add(SP.mul(T, s3), SP.mul(N, -s3)))];
    S.set('axes', SP.axes(box, { ticks: [2, 2, 4] }));
    S.set('curve', [...SP.curve(r, [T0, T1], C('curve'), { n: 160, w: 4 }), { k: 'dot', p: r(2), color: C('curve'), r: 6, hollow: true }, { k: 'label', s: '$t=2$', p: SP.add(r(2), [0.4, 0, 0.6]), color: 'muted' }]);
    S.set('frame', [
      { k: 'faces', faces: [sq], color: C('plane'), alpha: 0.25 }, { k: 'line', pts: [...sq, sq[0]], color: C('plane'), w: 2.5 },
      ...SP.vector(p, SP.add(p, SP.mul(T, 2)), vc, { name: '$\\kvecT$', w: 3 }), ...SP.vector(p, SP.add(p, SP.mul(N, 2)), vc, { name: '$\\kvecN$', w: 3 }),
      { k: 'line', pts: [p, SP.add(p, SP.mul(T, K * aT))], color: vc, w: 3, dash: [8, 8] }, { k: 'line', pts: [p, SP.add(p, SP.mul(N, K * aN))], color: vc, w: 3, dash: [8, 8] },
      { k: 'line', pts: [SP.add(p, SP.mul(T, K * aT)), SP.add(p, SP.mul(aa, K))], color: 'guide', w: 2, dash: [4, 8] }, { k: 'line', pts: [SP.add(p, SP.mul(N, K * aN)), SP.add(p, SP.mul(aa, K))], color: 'guide', w: 2, dash: [4, 8] },
      ...SP.vector(p, SP.add(p, SP.mul(aa, K)), vc, { name: '$\\kveca$', w: 6 }),
      { k: 'dot', p, color: C('point'), r: 9 },
    ]);
    S.headline(`$t=${n(t)}$: $a_{\\boldsymbol{T}}=${n(aT)},$ $a_{\\boldsymbol{N}}=${n(aN)}$`);
    ro.set(`a_{\\boldsymbol{T}}=\\frac{\\kvecv\\cdot \\kveca}{\\|\\kvecv\\|}=\\frac{40t-18}{\\sqrt{40t^{2}-36t+13}}=${n(aT)},\\qquad a_{\\boldsymbol{N}}=\\frac{\\|\\kvecv\\times \\kveca\\|}{\\|\\kvecv\\|}=\\frac{14}{\\sqrt{40t^{2}-36t+13}}=${n(aN)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (T1 - T0) / 6), draw });
})();

/* Figure 13.15: a ball dropped from rest 30.6 m up falls for 2.5 s at g = 9.8 m/sec², shown in 4 s; a and v drawn at
   0.6 m of the height scale per m/sec² and per m/sec. Height axis 0 to 32 m. */
(function () {
  const d = sim('sim-falling-ball', 560);
  const g = 9.8, T1 = 2.5, H0 = 0.5 * g * T1 * T1, cy = cycle(() => T1, 1.2), ro = readout(d);
  const BOX = { l: 560, r: 840, t: 120, b: 530 }, Y = (h) => BOX.b - (h / 32) * (BOX.b - BOX.t), sc = (BOX.b - BOX.t) / 32;
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('vector'), t = Math.min(cy.now(), T1), fall = 0.5 * g * t * t, h = H0 - fall, v = g * t, cx = 700, by = Y(h);
    line(ctx, BOX.l - 140, Y(0), BOX.r + 140, Y(0), PAL.ink, 3);
    line(ctx, BOX.l - 40, Y(0), BOX.l - 40, Y(32), PAL.muted, 2);
    for (let hh = 0; hh <= 32; hh += 4) { line(ctx, BOX.l - 48, Y(hh), BOX.l - 32, Y(hh), PAL.muted, 2); text(ctx, `${hh}`, BOX.l - 58, Y(hh), PAL.muted, { size: 17, align: 'right' }); }
    text(ctx, 'height (m)', BOX.l - 40, BOX.t - 24, PAL.muted, { size: 17, align: 'center' });
    line(ctx, cx, Y(H0), cx, Y(0), alpha(PAL.ink, 0.3), 2, [4, 8]);
    dot(ctx, cx, Y(H0), PAL.muted, false, 9);
    if (fall > 0.3) vbracket(ctx, cx + 70, Y(H0), by, PAL.ink, `fallen ${fmt(fall, 1)} m`, 1);
    arrow(ctx, cx - 40, by, cx - 40, by + g * sc * 0.6, vc, 6);
    if (v > 0.3) arrow(ctx, cx + 30, by, cx + 30, by + v * sc * 0.6, vc, 3.5);
    dot(ctx, cx, by, C('point'), true, 14);
    hits.length = 0;
    hits.push({ x: cx, y: by, r: 18, name: `the ball, ${fmt(h, 1)} m up` }, { x: cx - 40, y: by + g * sc * 0.6, r: 14, name: 'the acceleration a = −g j, constant (thick arrow)' }, { x: cx + 30, y: by + v * sc * 0.6, r: 14, name: `the velocity v(t) = −gt j = −${fmt(v, 2)} j (thin arrow)` }, { x: cx, y: Y(H0), r: 12, name: 'the initial position' });
    tl(ctx, '$\\kveca$ thick, $\\kvecv$ thin', BOX.l - 140, BOX.b - 20, PAL.muted, 'left', 18);
    headline(ctx, `t = ${fmt(t, 2)} sec: the ball has fallen ${fmt(fall, 1)} m and falls at ${fmt(v, 1)} m/sec`);
    ro.set(`\\kveca=-g\\,\\kvecj=-9.8\\,\\kvecj,\\qquad \\kvecv(t)=-gt\\,\\kvecj=-${n(v)}\\,\\kvecj,\\qquad \\tfrac{1}{2}gt^{2}=${n(fall)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T1 / 4), draw });
})();

/* Figure 13.16: a projectile from the origin at angle θ (10° to 80°) and speed v₀ (10 to 25 m/sec), g = 9.8; window x 0 to
   66 m, y 0 to 33 m from the sliders' maxima, one scale; velocities at 0.5 m per m/sec; the flight shown in 5 s. */
(function () {
  const d = sim('sim-projectile', 640);
  const g = 9.8;
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 10, max: 80, step: 1, value: 50, unit: '°', dec: 0, specials: [{ at: 45 }], onInput: () => cy.reset() });
  const vs = ctl(d.controls, { label: 'v_{0}', cls: '', key: 'v0', min: 10, max: 25, step: 0.5, value: 20, unit: 'm/sec', dec: 1, onInput: () => cy.reset() });
  const Tf = () => (2 * vs.v * Math.sin((th.v * PI) / 180)) / g;
  const cy = cycle(Tf, 1.2), ro = readout(d);
  const WIN = { x: [0, 66], y: [0, 33] }, BOX = fitIn(WIN, 160, 1240, 90, 560);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), vc = C('vector'), a = (th.v * PI) / 180, v0 = vs.v, TF = Tf(), t = Math.min(cy.now(), TF);
    const S = (u) => [v0 * u * Math.cos(a), v0 * u * Math.sin(a) - 0.5 * g * u * u], V = (u) => [v0 * Math.cos(a), v0 * Math.sin(a) - g * u];
    const R = (v0 * v0 * Math.sin(2 * a)) / g, H = (v0 * v0 * Math.sin(a) ** 2) / (2 * g), K = 0.5;
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x (m)', yl: 'y (m)', nx: 11, ny: 11 });
    F.polar.path(ctx, ax, S, [0, TF], cc, { upto: t, marks: 0 });
    hits.length = 0;
    for (let k = 0; k <= 4; k++) {
      const u = (k * TF) / 4, [x, y] = S(u), [p, q] = V(u), X0 = ax.X(x), Y0 = ax.Y(y);
      line(ctx, X0, Y0, ax.X(x + K * p), Y0, alpha(vc, 0.45), 2.5, [6, 6]);
      if (Math.abs(q) > 0.2) line(ctx, X0, Y0, X0, ax.Y(y + K * q), alpha(vc, 0.45), 2.5, [6, 6]);
      arrow(ctx, X0, Y0, ax.X(x + K * p), ax.Y(y + K * q), alpha(vc, 0.7), 3.5);
      dot(ctx, X0, Y0, cc, false, 6);
      hits.push({ x: ax.X(x + K * p), y: ax.Y(y + K * q), r: 12, name: `the velocity at t = ${fmt(u, 2)} sec: ⟨${fmt(p, 2)}, ${fmt(q, 2)}⟩, its horizontal part constant` });
    }
    angleArc(ctx, { x: ax.X(0), y: ax.Y(0) }, 70, 0, a, '', null, C('angle'));
    tl(ctx, '$\\ktheta$', ax.X(0) + 86 * Math.cos(a / 2), ax.Y(0) - 86 * Math.sin(a / 2), C('angle'), 'left');
    hbracket(ctx, ax.X(0), ax.X(R), ax.Y(0) + 52, PAL.ink, `R = ${fmt(R, 1)} m`, { side: 'below' });
    vbracket(ctx, ax.X(R / 2) + 18, ax.Y(0), ax.Y(H), PAL.ink, `H = ${fmt(H, 1)} m`, 1);
    const [x, y] = S(t), [p, q] = V(t);
    arrow(ctx, ax.X(x), ax.Y(y), ax.X(x + K * p), ax.Y(y + K * q), vc, 5);
    dot(ctx, ax.X(x), ax.Y(y), C('point'), true, 10);
    hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the projectile at t = ${fmt(t, 2)} sec` });
    headline(ctx, `θ = ${fmt(th.v, 0)}°: R = ${fmt(R, 1)} m, H = ${fmt(H, 1)} m`);
    ro.set(`\\kvecs(${n(t)})=${n(x)}\\,\\kveci${sg(y)}\\,\\kvecj,\\qquad R=\\frac{v_{0}^{2}\\sin 2\\ktheta}{g}=\\frac{(${n(v0, 1)})^{2}\\sin ${fmt(2 * th.v, 0)}^{\\circ}}{9.8}=${n(R)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => Tf() / 5), draw });
})();

/* Figure 13.17: Example 13.16's cannonball, s(t) = 300√3 t i + (300t − 16t²) j feet, the cannon at the origin on a cliff
   100 ft above the water; window x −700 to 10,600 ft, y −300 to 1700 ft, one scale; 19.08 sec of flight in 6 s. */
(function () {
  const d = sim('sim-cannonball', 440);
  const T1 = (75 + 5 * Math.sqrt(241)) / 8, cy = cycle(() => T1, 1.2), ro = readout(d);
  const S = (u) => [300 * Math.sqrt(3) * u, 300 * u - 16 * u * u];
  const WIN = { x: [-700, 10600], y: [-300, 1700] }, BOX = fitIn(WIN, 50, 1350, 90, 400);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), t = Math.min(cy.now(), T1), [x, y] = S(t);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x (ft)', yl: 'y (ft)', nx: 0, ny: 0 });
    line(ctx, ax.X(-700), ax.Y(-100), ax.X(10600), ax.Y(-100), PAL.ink, 2.5);
    line(ctx, ax.X(-700), ax.Y(0), ax.X(0), ax.Y(0), PAL.ink, 3); line(ctx, ax.X(0), ax.Y(0), ax.X(0), ax.Y(-100), PAL.ink, 3);
    tl(ctx, 'water', ax.X(10500), ax.Y(-100) + 18, PAL.muted, 'right', 18);
    tl(ctx, 'cliff, 100 ft', ax.X(-650), ax.Y(-100) + 18, PAL.muted, 'left', 18);
    F.polar.path(ctx, ax, S, [0, T1], cc, { upto: t, marks: 0 });
    const tm = 9.375, [xm, ym] = S(tm);
    line(ctx, ax.X(xm), ax.Y(ym), ax.X(xm), ax.Y(0), alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, ax.X(xm), ax.Y(ym), cc, false, 7);
    dot(ctx, ax.X(S(T1)[0]), ax.Y(-100), cc, false, 7);
    dot(ctx, ax.X(x), ax.Y(y), C('point'), true, 9);
    hits.length = 0;
    hits.push({ x: ax.X(xm), y: ax.Y(ym), r: 12, name: 'the top of the flight, where the vertical part of the velocity is zero' }, { x: ax.X(S(T1)[0]), y: ax.Y(-100), r: 12, name: 'the splash' }, { x: ax.X(x), y: ax.Y(y), r: 16, name: `the cannonball at t = ${fmt(t, 2)} sec` });
    headline(ctx, `t = ${fmt(t, 2)} sec: the ball is ${fmt(y + 100, 0)} ft above the water and ${fmt(x, 0)} ft out`);
    ro.set(`\\kvecs(t)=300\\sqrt{3}\\,t\\,\\kveci+(300t-16t^{2})\\kvecj=${n(x, 1)}\\,\\kveci${sg(y, 1)}\\,\\kvecj`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T1 / 6), draw });
})();

/* Figure 13.18 + 13.19: a planet on the ellipse of semimajor axis 3 and eccentricity e (0 to 0.8), the Sun at the focus
   (ae, 0), timed by Kepler's equation E − e sin E = 2πτ/P; six sectors each swept in 1/18 of a period; the force F toward
   the Sun drawn 6/‖r‖² long, at most 2.4; window ±3.8 by ±3.3, one scale; one period in 8 s. */
(function () {
  const d = sim('sim-kepler', 520);
  const A = 3, P = 8;
  const es = ctl(d.controls, { label: 'e', cls: '', key: 'e', min: 0, max: 0.8, step: 0.01, value: 0.5, unit: '', dec: 2 });
  const cy = cycle(() => P, 0), ro = readout(d);
  const WIN = { x: [-3.8, 3.8], y: [-3.3, 3.3] }, BOX = fitIn(WIN, 40, 1360, 90, 500);
  const hits = []; hover(d.stage, () => hits);
  const ecc = (Mn, e) => { let E = Mn; for (let i = 0; i < 30; i++) E -= (E - e * Math.sin(E) - Mn) / (1 - e * Math.cos(E)); return E; };
  function draw() {
    const { ctx } = begin(d.c);
    const e = es.v, B = A * Math.sqrt(1 - e * e), c = A * e, cc = C('curve'), ic = C('integral');
    const sc = (BOX.r - BOX.l) / (WIN.x[1] - WIN.x[0]), X = (u) => (BOX.l + BOX.r) / 2 + u * sc, Y = (v) => (BOX.t + BOX.b) / 2 - v * sc;
    const at = (Mn) => { const E = ecc(Mn, e); return [A * Math.cos(E), B * Math.sin(E)]; };
    hits.length = 0;
    for (let k = 0; k < 6; k++) {
      const m0 = (k * TAU) / 6, m1 = m0 + TAU / 18;
      ctx.save(); ctx.fillStyle = alpha(ic, 0.3); ctx.beginPath(); ctx.moveTo(X(c), Y(0));
      for (let i = 0; i <= 30; i++) { const [u, v] = at(m0 + ((m1 - m0) * i) / 30); ctx.lineTo(X(u), Y(v)); }
      ctx.closePath(); ctx.fill(); ctx.restore();
      const [u, v] = at((m0 + m1) / 2);
      hits.push({ x: X((u + c) / 2), y: Y(v / 2), r: 16, name: `a sector swept in 1/18 of a period: area πab/18 = ${fmt((PI * A * B) / 18, 2)}` });
    }
    ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(X(0), Y(0), A * sc, B * sc, 0, 0, TAU); ctx.stroke(); ctx.restore();
    const [x, y] = at((TAU * Math.min(cy.now(), P)) / P), rr = Math.hypot(x - c, y), Fm = Math.min(2.4, 6 / (rr * rr));
    line(ctx, X(c), Y(0), X(x), Y(y), alpha(cc, 0.7), 2, [6, 6]);
    arrow(ctx, X(x), Y(y), X(x + ((c - x) / rr) * Fm), Y(y + ((0 - y) / rr) * Fm), C('vector'), 5);
    dot(ctx, X(c), Y(0), C('point'), true, 13);
    tl(ctx, 'Sun', X(c), Y(0) + 30, PAL.muted, 'center', 18);
    dot(ctx, X(x), Y(y), C('point'), true, 9);
    hits.push({ x: X(c), y: Y(0), r: 16, name: 'the Sun, at one focus of the ellipse' }, { x: X(x), y: Y(y), r: 16, name: `the planet, ${fmt(rr, 2)} from the Sun` },
      { x: X(x + ((c - x) / rr) * Fm), y: Y(y - (y / rr) * Fm), r: 14, name: 'the gravitational force F, toward the Sun, proportional to 1/‖r‖²' });
    headline(ctx, `e = ${fmt(e, 2)}: each sector has area ${fmt((PI * A * B) / 18, 2)}; the planet is ${fmt(rr, 2)} from the Sun`);
    ro.set(`\\|\\kvecr\\|=\\frac{a(1-e^{2})}{1+e\\cos \\ktheta}=${n(rr)},\\qquad \\kvecF=-\\frac{GmM}{\\|\\kvecr\\|^{2}}\\cdot \\frac{\\kvecr}{\\|\\kvecr\\|}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 13.20 + 13.21: the banked turn, a still copy. Left, overhead: the circle of radius R with the car, v tangent and a
   toward the center. Right, front: the bank at θ = 24° with the car's box, its height h, and the forces N, mg and f. */
(function () {
  const d = sim('fig-banked-turn', 470);
  function draw() {
    const { ctx } = begin(d.c), cc = C('curve'), vc = C('vector'), ac = C('angle');
    const cx = 330, cy0 = 250, R = 150, ph = (3 * PI) / 4, px = cx + R * Math.cos(ph), py = cy0 - R * Math.sin(ph);
    ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(cx, cy0, R, 0, TAU); ctx.stroke(); ctx.restore();
    dot(ctx, cx, cy0, PAL.muted, true, 5);
    line(ctx, cx, cy0, cx + R, cy0, alpha(PAL.ink, 0.5), 2, [4, 6]); tl(ctx, '$R$', cx + R / 2, cy0 + 20, PAL.ink, 'center', 20);
    arrow(ctx, px, py, px - 110 * Math.sin(ph), py - 110 * Math.cos(ph), vc, 5);
    arrow(ctx, px, py, px + (cx - px) * 0.55, py + (cy0 - py) * 0.55, vc, 5);
    dot(ctx, px, py, C('point'), true, 12);
    tl(ctx, '$\\kvecv$', px - 110 * Math.sin(ph) - 14, py - 110 * Math.cos(ph) + 4, vc, 'right');
    tl(ctx, '$\\kveca$', px + (cx - px) * 0.55 + 8, py + (cy0 - py) * 0.55 - 18, vc, 'left');
    text(ctx, 'Overhead view', cx, 440, PAL.muted, { size: 20, align: 'center' });
    const ox = 1250, oy = 380, th = (24 * PI) / 180, L = 520, tx = ox - L * Math.cos(th), ty = oy - L * Math.sin(th);
    line(ctx, ox - L * Math.cos(th) - 20, oy, ox + 10, oy, PAL.ink, 3);
    line(ctx, ox, oy, tx, ty, PAL.ink, 3);
    angleArc(ctx, { x: ox, y: oy }, 70, PI, PI - th, '', null, ac);
    tl(ctx, '$\\ktheta$', ox - 92, oy - 18, ac, 'right');
    const m = 0.55, bx = ox - m * L * Math.cos(th), by = oy - m * L * Math.sin(th), u = [-Math.cos(th), -Math.sin(th)], nv = [-Math.sin(th), Math.cos(th)];
    const W = 120, Hh = 54, c0 = [bx + (u[0] * W) / 2, by + (u[1] * W) / 2], c1 = [bx - (u[0] * W) / 2, by - (u[1] * W) / 2];
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath();
    ctx.moveTo(c0[0], c0[1]); ctx.lineTo(c1[0], c1[1]); ctx.lineTo(c1[0] - nv[0] * Hh, c1[1] - nv[1] * Hh); ctx.lineTo(c0[0] - nv[0] * Hh, c0[1] - nv[1] * Hh); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    const mx = bx - nv[0] * Hh / 2, my = by - nv[1] * Hh / 2;
    arrow(ctx, mx, my, mx - nv[0] * 130, my - nv[1] * 130, vc, 5); tl(ctx, '$\\mathbf{N}$', mx - nv[0] * 130 - 10, my - nv[1] * 130 - 14, vc, 'right');
    arrow(ctx, mx, my, mx, my + 120, vc, 5); tl(ctx, '$m\\mathbf{g}$', mx + 12, my + 112, vc, 'left');
    arrow(ctx, mx, my, mx - u[0] * 110, my - u[1] * 110, vc, 5); tl(ctx, '$\\mathbf{f}$', mx - u[0] * 110 + 10, my - u[1] * 110 + 18, vc, 'left');
    dot(ctx, mx, my, PAL.ink, true, 5);
    line(ctx, bx - 200, by, bx - 200, oy, alpha(PAL.ink, 0.6), 2); line(ctx, bx - 210, by, bx - 190, by, alpha(PAL.ink, 0.6), 2); line(ctx, bx - 210, oy, bx - 190, oy, alpha(PAL.ink, 0.6), 2);
    line(ctx, bx - 200, by, bx, by, alpha(PAL.ink, 0.35), 1.5, [4, 6]);
    tl(ctx, '$h$', bx - 214, (by + oy) / 2, PAL.ink, 'right', 20);
    text(ctx, 'Front view', 960, 440, PAL.muted, { size: 20, align: 'center' });
  }
  still(d, draw);
})();
};
