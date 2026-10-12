/* Figures for section 13.3 Arc Length and Curvature. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, arrow, dot, text, headline, register, readout, cycle, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const sg = (v) => (v < 0 ? `-${n(-v)}` : `+${n(v)}`);
const PI = Math.PI, TAU = 2 * Math.PI;
const tl = (ctx, s, x, y, color, align = 'left') => text(ctx, s, x, y, color, { size: 22, tex: true, align, bg: PAL.panel });
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const fitIn = (win, l, r, t, b) => {
  const s = Math.min((r - l) / (win.x[1] - win.x[0]), (b - t) / (win.y[1] - win.y[0])), w = s * (win.x[1] - win.x[0]), h = s * (win.y[1] - win.y[0]);
  return { l: (l + r) / 2 - w / 2, r: (l + r) / 2 + w / 2, t: (t + b) / 2 - h / 2, b: (t + b) / 2 + h / 2 };
};

/* Sim: the helix of radius R, N turns over the height h, on its ghosted cylinder; box x, y ±3.2, z 0 to 8.2 from the
   sliders' maxima. Still: the wire answers its sliders. */
(function () {
  const d = sim('sim-helix-length');
  const box = [[-3.2, 3.2], [-3.2, 3.2], [0, 8.2]];
  const S = F.space3d(d, { box, h: 600 });
  const Rs = ctl(d.controls, { label: 'R', cls: '', key: 'R', min: 0.5, max: 3, step: 0.05, value: 1, unit: '', dec: 2 });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 1, max: 8, step: 0.05, value: 6, unit: '', dec: 2 });
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 6, step: 1, value: 3, unit: '', dec: 0, detents: [1, 2, 3, 4, 5, 6] });
  const ro = readout(d);
  function draw() {
    const R = Rs.v, h = hs.v, N = Math.round(Ns.v), cc = C('curve');
    const r = (t) => [R * Math.cos((TAU * N * t) / h), R * Math.sin((TAU * N * t) / h), t];
    const s = Math.sqrt(4 * PI * PI * N * N * R * R + h * h);
    S.set('axes', SP.axes(box, { ticks: [2, 2, 2] }));
    S.set('cyl', [{ k: 'sheet', rows: SP.gridOf((u, v) => [R * Math.cos(u), R * Math.sin(u), v], [0, TAU], [0, h], [48, 6]), color: 'muted', alpha: 0.12 },
      ...SP.curve((u) => [R * Math.cos(u), R * Math.sin(u), 0], [0, TAU], 'guide', { w: 2 }), ...SP.curve((u) => [R * Math.cos(u), R * Math.sin(u), h], [0, TAU], 'guide', { w: 2 })]);
    S.set('helix', [...SP.curve(r, [0, h], cc, { n: 80 * N, w: 5 }), { k: 'dot', p: r(0), color: C('point'), r: 7 }, { k: 'dot', p: r(h), color: C('point'), r: 7 }]);
    S.headline(`N = ${N} ${N === 1 ? 'turn' : 'turns'} of radius ${fmt(R, 2)} over height ${fmt(h, 2)}: the wire is ${fmt(s, 2)} long`);
    ro.set(`\\ks=\\int_{0}^{h}\\|\\kvecrprime(t)\\|\\,dt=\\sqrt{4\\pi^{2}N^{2}R^{2}+h^{2}}=\\sqrt{4\\pi^{2}(${N})^{2}(${n(R)})^{2}+(${n(h)})^{2}}=${n(s)}`);
  }
  still(d, draw);
})();

/* Sim: a point on the spiral r(t) = ⟨t cos t, t sin t⟩, 0 ≤ t ≤ 2π, beside the graph of s(t) = ∫₀ᵗ √(1 + u²) du
   (s(2π) ≈ 21.26), parameter t or s; a run is 6 s. Spiral window ±7 one scale; graph 0 to 2π (or 0 to 21.26) by 0 to 22. */
(function () {
  const d = sim('sim-arc-length-function', 560);
  const sOf = (t) => (t * Math.sqrt(1 + t * t) + Math.asinh(t)) / 2, S1 = sOf(TAU);
  const tOf = (s) => { let lo = 0, hi = TAU; for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if (sOf(m) < s) lo = m; else hi = m; } return (lo + hi) / 2; };
  const P = (t) => [t * Math.cos(t), t * Math.sin(t)];
  const par = choice(d.controls, { label: '\\text{parameter}', options: [{ value: 't', label: 't' }, { value: 's', label: 's, arc length' }], value: 't', onInput: () => cy.reset() });
  const span = () => (par.value === 's' ? S1 : TAU);
  const cy = cycle(span, 1.2), ro = readout(d);
  const WIN = { x: [-7, 7], y: [-7, 7] }, BOX = fitIn(WIN, 40, 640, 86, 540), GB = { l: 790, r: 1330, t: 100, b: 480 };
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), ic = C('integral'), pc = C('point'), byS = par.value === 's';
    const q = Math.min(cy.now(), span()), t = byS ? tOf(q) : q, s = sOf(t), [x, y] = P(t), speed = Math.sqrt(1 + t * t);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    F.polar.path(ctx, ax, P, [0, TAU], cc, { upto: t, marks: 2 });
    hits.length = 0;
    const marks = byS ? Math.floor(S1) : 6;
    for (let k = 1; k <= marks; k++) {
      const tk = byS ? tOf(k) : k, [u, v] = P(tk);
      dot(ctx, ax.X(u), ax.Y(v), cc, false, 6);
      hits.push({ x: ax.X(u), y: ax.Y(v), r: 10, name: byS ? `s = ${k}: ${k} units of arc length from the start` : `t = ${k}: s = ${fmt(sOf(k), 2)} from the start` });
    }
    dot(ctx, ax.X(x), ax.Y(y), pc, true, 9);
    hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the point r(t) at t = ${fmt(t, 2)}, s = ${fmt(s, 2)}` });
    const gx = byS ? [0, 22] : [0, 7], g = axes(ctx, GB, gx, [0, 22], { xl: byS ? 's' : 't', yl: 's', nx: byS ? 11 : 7, ny: 11 });
    F.polar.path(ctx, g, byS ? (u) => [u, u] : (u) => [u, sOf(u)], [0, span()], ic, { upto: q, marks: 0 });
    dot(ctx, g.X(q), g.Y(s), ic, true, 9);
    line(ctx, g.X(q), g.Y(s), g.X(q), g.Y(0), alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    line(ctx, g.X(q), g.Y(s), g.X(0), g.Y(s), alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    hits.push({ x: g.X(q), y: g.Y(s), r: 16, name: `s = ${fmt(s, 2)} at ${byS ? 's' : 't'} = ${fmt(q, 2)}` });
    headline(ctx, byS ? `s = ${fmt(s, 2)}: the point has traveled ${fmt(s, 2)} along the curve, at speed 1` : `t = ${fmt(t, 2)}: the point has traveled s = ${fmt(s, 2)}, at speed ${fmt(speed, 2)}`);
    ro.set(byS ? `\\ks(t)=\\int_{0}^{t}\\sqrt{1+u^{2}}\\,du=${n(s)},\\qquad \\|\\frac{d\\kvecr}{d\\ks}\\|=1`
      : `\\ks(t)=\\int_{0}^{t}\\|\\kvecrprime(u)\\|\\,du=\\int_{0}^{${n(t)}}\\sqrt{1+u^{2}}\\,du=${n(s)},\\qquad \\frac{ds}{dt}=\\|\\kvecrprime(t)\\|=${n(speed)}`, undefined, { form: par.value });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => span() / 6), draw });
})();

/* Figure 13.6 + 13.8: the stand-in y = 1.5 − sin x − ¼ sin(2x + 1) on [0.2, 6.2] (the book prints no function) and its
   osculating circle at the dragged x; window x 0 to 6.4, y 0 to 3.5, one scale. Specials at the minimum (1.048) and
   maximum (4.854). */
(function () {
  const d = sim('sim-osculating', 560);
  const f = (x) => 1.5 - Math.sin(x) - Math.sin(2 * x + 1) / 4, f1 = (x) => -Math.cos(x) - Math.cos(2 * x + 1) / 2, f2 = (x) => Math.sin(x) + Math.sin(2 * x + 1);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.4, max: 5.9, step: 0.01, value: 1.0478, unit: '', dec: 2, specials: [{ at: 1.0478 }, { at: 4.8543 }] });
  const P = drag(d, { x: xs, y: f });
  const WIN = { x: [0, 6.4], y: [0, 3.5] }, BOX = fitIn(WIN, 40, 1360, 86, 520), ro = readout(d);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), x = xs.v, y = f(x), y1 = f1(x), y2 = f2(x), k = Math.abs(y2) / Math.pow(1 + y1 * y1, 1.5);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 8, ny: 7, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    F.plot(ctx, ax, f, cc, { x: [0.2, 6.2] });
    hits.length = 0;
    const L = Math.hypot(1, y1), nrm = [-y1 / L, 1 / L], side = Math.sign(y2) || 1, sc = ax.X(1) - ax.X(0);
    if (k > 0.05) {
      const R = 1 / k, cx = x + side * nrm[0] * R, cyy = y + side * nrm[1] * R, X = ax.X(cx), Y = ax.Y(cyy);
      ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
      ctx.setLineDash([10, 8]); ctx.strokeStyle = cc; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(X, Y, R * sc, 0, TAU); ctx.stroke(); ctx.restore();
      line(ctx, X, Y, ax.X(x), ax.Y(y), alpha(PAL.ink, 0.6), 2.5);
      dot(ctx, X, Y, C('point'), true, 7);
      hits.push({ x: X, y: Y, r: 12, name: `the center of the osculating circle, (${fmt(cx, 2)}, ${fmt(cyy, 2)})` }, { x: (X + ax.X(x)) / 2, y: (Y + ax.Y(y)) / 2, r: 12, name: `the radius of curvature, 1/κ = ${fmt(R, 2)}` });
    }
    P.draw(ctx, ax, C('point'));
    hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `the point (${fmt(x, 2)}, ${fmt(y, 2)}); drag it along the curve` });
    headline(ctx, k > 0.05 ? `x = ${fmt(x, 2)}: $\\kkappa=${n(k)}$, the osculating circle has radius ${fmt(1 / k, 2)}` : `x = ${fmt(x, 2)}: $\\kkappa=${n(k, 3)}$, the curve is nearly straight and the circle too large to draw`);
    ro.set(`\\kkappa=\\frac{|\\kydprime|}{[1+(\\kyprime)^{2}]^{3/2}}=\\frac{|${n(y2)}|}{[1+(${n(y1)})^{2}]^{3/2}}=${n(k, 3)},\\qquad \\frac{1}{\\kkappa}=${k > 0.002 ? n(1 / k) : '\\infty'}`);
  }
  still(d, draw);
})();

/* Figure 13.7: the Frenet frame at a point running along the helix r(t) = ⟨4 cos t, 4 sin t, 3t⟩, 0 ≤ t ≤ 4π/3, ending at Example 13.11's
   point (box ±5 by 0 to 13), or the twisted cubic ⟨t, t², t³⟩, −1.4 ≤ t ≤ 1.4 (box ±2.2, −0.4 to 2.6, ±3.1); 8 s a run. The osculating plane (T, N)
   and the normal plane (N, B) are squares at the point. */
(function () {
  const d = sim('sim-frenet');
  const CURVES = {
    helix: { r: (t) => [4 * Math.cos(t), 4 * Math.sin(t), 3 * t], T: [0, (4 * PI) / 3], box: [[-5, 5], [-5, 5], [0, 13]], len: 3.2, ticks: [4, 4, 4] },
    cubic: { r: (t) => [t, t * t, t * t * t], T: [-1.4, 1.4], box: [[-2.2, 2.2], [-0.4, 2.6], [-3.1, 3.1]], len: 0.75, ticks: [1, 1, 1] },
  };
  const pick = choice(d.controls, { label: 'curve', options: [{ value: 'helix', label: 'helix' }, { value: 'cubic', label: 'twisted cubic' }], value: 'helix', onInput: () => cy.reset() });
  const K = () => CURVES[pick.value];
  const cy = cycle(() => K().T[1] - K().T[0], 1.2), ro = readout(d);
  let S = null, at = '';
  const sq = (p, a, b, k) => [SP.add(p, SP.add(SP.mul(a, k), SP.mul(b, k))), SP.add(p, SP.add(SP.mul(a, -k), SP.mul(b, k))), SP.add(p, SP.add(SP.mul(a, -k), SP.mul(b, -k))), SP.add(p, SP.add(SP.mul(a, k), SP.mul(b, -k)))];
  function draw() {
    const c = K();
    if (at !== pick.value) {
      at = pick.value;
      const was = S ? (S.v ? S.v.wrap : d.stage.querySelector('canvas')) : null;
      S?.v?.dispose(); was?.remove();
      S = F.space3d(d, { box: c.box, h: 600 });
      const w = S.v ? S.v.wrap : d.stage.querySelector('canvas'), bar = d.stage.querySelector('.transport');
      if (w && bar) d.stage.insertBefore(w, bar);
    }
    const t = c.T[0] + Math.min(cy.now(), c.T[1] - c.T[0]), fr = SP.frenet(c.r, t), vc = C('vector'), pl = C('plane');
    S.set('axes', SP.axes(c.box, { ticks: c.ticks }));
    S.set('curve', SP.curve(c.r, c.T, C('curve'), { n: 260, w: 4 }));
    const planes = fr.N && fr.B ? [
      { k: 'faces', faces: [sq(fr.p, fr.T, fr.N, c.len * 0.8)], color: pl, alpha: 0.3 }, { k: 'line', pts: [...sq(fr.p, fr.T, fr.N, c.len * 0.8), sq(fr.p, fr.T, fr.N, c.len * 0.8)[0]], color: pl, w: 2.5 },
      { k: 'faces', faces: [sq(fr.p, fr.N, fr.B, c.len * 0.8)], color: pl, alpha: 0.14 }, { k: 'line', pts: [...sq(fr.p, fr.N, fr.B, c.len * 0.8), sq(fr.p, fr.N, fr.B, c.len * 0.8)[0]], color: pl, w: 2.5, dash: [8, 8] },
    ] : [];
    S.set('frame', [...planes, ...SP.frame(c.r, t, [vc, vc, vc], { len: c.len, names: ['$\\kvecT$', '$\\kvecN$', '$\\kvecB$'] })]);
    const v3 = (u) => (u ? `${n(u[0])}\\,\\kveci${sg(u[1])}\\,\\kvecj${sg(u[2])}\\,\\kveck` : '\\text{undefined}');
    S.headline(`$t=${n(t)}$: $\\kkappa=${n(fr.kappa, 3)}$`);
    ro.set(`\\kkappa=\\frac{\\|\\kvecrprime\\times \\kvecrdprime\\|}{\\|\\kvecrprime\\|^{3}}=${n(fr.kappa, 3)},\\qquad \\kvecB=\\kvecT\\times \\kvecN=${v3(fr.B)}`, undefined, { form: pick.value });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (K().T[1] - K().T[0]) / 8), draw });
})();

/* Figure 13.9 + 13.10: Example 13.13's y = x³ − 3x + 1 and its osculating circle at x = 1, radius 1/6, center (1, −5/6);
   window x −2.5 to 2.5, y −2.5 to 4, one scale. A still copy. */
(function () {
  const d = sim('fig-osculating-cubic', 480);
  const f = (x) => x * x * x - 3 * x + 1, WIN = { x: [-2.5, 2.5], y: [-2.5, 4] }, BOX = fitIn(WIN, 40, 1360, 40, 450);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), cc = C('curve');
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 5, ny: 13, fx: (v) => fmt(v, 0), fy: (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : '') });
    F.plot(ctx, ax, f, cc, { x: [-2.5, 2.5] });
    const X = ax.X(1), Y = ax.Y(-5 / 6), R = (ax.X(1) - ax.X(0)) / 6;
    ctx.save(); ctx.setLineDash([6, 5]); ctx.strokeStyle = cc; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(X, Y, R, 0, TAU); ctx.stroke(); ctx.restore();
    dot(ctx, ax.X(1), ax.Y(-1), C('point'), true, 6);
    dot(ctx, X, Y, C('point'), true, 4);
    hits.length = 0;
    hits.push({ x: ax.X(1), y: ax.Y(-1), r: 12, name: 'the point (1, −1) where x = 1' }, { x: X, y: Y, r: 12, name: 'the osculating circle at x = 1: radius 1/6, center (1, −5/6)' });
  }
  still(d, draw);
})();
};
