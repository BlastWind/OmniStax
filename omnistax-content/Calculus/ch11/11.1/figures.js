/* Figures for section 11.1 Parametric Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, dot, text, label, headline, register, readout, cycle, fmt, hover, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI;
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
/* a box of the given height holding the window at one scale in x and y, centred on the canvas */
const fit = (win, t, b) => {
  const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]);
  return { l: 700 - w / 2, r: 700 + w / 2, t, b };
};

/* A parametric curve traced by its clock: the curve faint over its range and solid up to t, arrowheads the way t runs,
   the book's marked values of t dotted and named, the moving point with drops to the axes. Axes fixed from the curve's
   reach, one scale in x and y. */
function trace(id, o) {
  const d = sim(id, o.H ?? 520);
  const T = o.t1 - o.t0, cy = cycle(() => T, 1.2), ro = readout(d);
  const P = (t) => [o.x(t), o.y(t)];
  const BOX = o.equal ? fit(o.win, 90, (o.H ?? 520) - 70) : { l: 260, r: 1140, t: 90, b: (o.H ?? 520) - 70 };
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), t = o.t0 + Math.min(cy.now(), T), [x, y] = P(t);
    const ax = axes(ctx, BOX, o.win.x, o.win.y, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny });
    if (o.under) o.under(ctx, ax);
    F.polar.path(ctx, ax, P, [o.t0, o.t1], cc, { upto: t, marks: o.marks ?? 3 });
    hits.length = 0;
    o.at.forEach(([s, name]) => {
      const [u, v] = P(s), px = ax.X(u), py = ax.Y(v);
      dot(ctx, px, py, cc, false, 7);
      label(ctx, `t = ${name}`, px, py, { side: o.side?.[name] ?? 'right', size: 20, gap: 16 });
      hits.push({ x: px, y: py, r: 14, name: `t = ${name}: (${fmt(u, 2)}, ${fmt(v, 2)})` });
    });
    const guide = alpha(PAL.ink, 0.4), px = ax.X(x), py = ax.Y(y);
    line(ctx, px, py, px, ax.Y(Math.max(o.win.y[0], Math.min(o.win.y[1], 0))), guide, 2.5, [4, 8]);
    line(ctx, px, py, ax.X(Math.max(o.win.x[0], Math.min(o.win.x[1], 0))), py, guide, 2.5, [4, 8]);
    dot(ctx, px, py, pc, true, 9);
    hits.push({ x: px, y: py, r: 16, name: `the point (x(t), y(t)) at t = ${fmt(t, 2)}` });
    headline(ctx, `t = ${fmt(t, 2)}: the point is at (${fmt(x, 2)}, ${fmt(y, 2)})`);
    ro.set(o.ro(t, x, y));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / (o.secs ?? 5)), draw });
}

/* Figure 11.2 + 11.3: the book's schematic orbit (a = 5, b = 4, no scale), the Sun at the right focus and F₂ at the
   left; Earth on the parameterization that puts the book's four dates at the ends of the axes. 6 s a year. */
(function () {
  const d = sim('sim-earth-orbit', 560);
  const A = 5, B = 4, Cf = 3, DAYS = 365, cy = cycle(() => DAYS - 1, 1.2), ro = readout(d);
  const phi = (t) => PI / 2 + (2 * PI * (t - 1)) / DAYS, P = (t) => [A * Math.cos(phi(t)), B * Math.sin(phi(t))];
  const MONTHS = [['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]];
  const date = (t) => { let k = Math.floor(t); for (const [m, len] of MONTHS) { if (k <= len) return `${m} ${k}`; k -= len; } return 'December 31'; };
  const WIN = { x: [-6.5, 6.5], y: [-5, 5] }, BOX = fit(WIN, 90, 500);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), t = 1 + Math.min(cy.now(), DAYS - 1), [x, y] = P(t);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 13, ny: 10, fx: () => '', fy: () => '' });
    F.polar.path(ctx, ax, P, [1, DAYS], cc, { upto: t, marks: 3, faint: 0.35 });
    hits.length = 0;
    [[1, 'January 1 (t = 1)', 'above'], [92, 'April 2 (t = 92)', 'left'], [182, 'July 1 (t = 182)', 'below'], [274, 'October 1 (t = 274)', 'right']].forEach(([s, name, side]) => {
      const [u, v] = P(s); dot(ctx, ax.X(u), ax.Y(v), cc, false, 7); label(ctx, name, ax.X(u), ax.Y(v), { side, size: 20, gap: 18 });
    });
    [[-Cf, 'F₂'], [Cf, 'Sun']].forEach(([u, name]) => { dot(ctx, ax.X(u), ax.Y(0), pc, true, name === 'Sun' ? 13 : 8); label(ctx, name, ax.X(u), ax.Y(0), { side: 'below', size: 20, gap: 22 }); hits.push({ x: ax.X(u), y: ax.Y(0), r: 16, name: name === 'Sun' ? 'the Sun, at one focus' : 'F₂, the other focus' }); });
    const px = ax.X(x), py = ax.Y(y);
    dot(ctx, px, py, pc, true, 10);
    label(ctx, 'Earth', px, py, { side: x > 0 ? 'right' : 'left', size: 20, gap: 20 });
    hits.push({ x: px, y: py, r: 16, name: `Earth on day ${Math.floor(t)}` });
    headline(ctx, `Day ${Math.floor(t)} (${date(t)}): Earth is at (${fmt(x, 2)}, ${fmt(y, 2)})`);
    ro.set(`t=${Math.floor(t)}\\qquad (x(t),\\,y(t))=(${n(x)},\\;${n(y)})`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (DAYS - 1) / 6), draw });
})();

/* Figures 11.4–11.6, Example 11.1 a–c */
trace('sim-trace-line', { x: (t) => t - 1, y: (t) => 2 * t + 4, t0: -3, t1: 2, win: { x: [-5, 3], y: [-3, 9] }, nx: 8, ny: 12, H: 560,
  at: [[-3, '−3'], [-1, '−1'], [2, '2']], side: { '−1': 'left' }, ro: (t, x, y) => `x(t)=t-1=${n(x)},\\qquad y(t)=2t+4=${n(y)}` });
trace('sim-trace-parabola', { x: (t) => t * t - 3, y: (t) => 2 * t + 1, t0: -2, t1: 3, win: { x: [-5, 7], y: [-4, 8] }, nx: 12, ny: 12, H: 560,
  at: [[-2, '−2'], [0, '0'], [3, '3']], side: { '0': 'left' }, ro: (t, x, y) => `x(t)=t^{2}-3=${n(x)},\\qquad y(t)=2t+1=${n(y)}` });
trace('sim-trace-circle', { x: (t) => 4 * Math.cos(t), y: (t) => 4 * Math.sin(t), t0: 0, t1: 2 * PI, win: { x: [-6, 6], y: [-5, 5] }, nx: 12, ny: 10, secs: 6, equal: true, H: 620,
  at: [[0, '0'], [PI / 2, 'π/2'], [PI, 'π'], [1.5 * PI, '3π/2']], side: { '0': 'left', 'π/2': 'below', 'π': 'right', '3π/2': 'above' },
  ro: (t, x, y) => `x(t)=4\\cos t=${n(x)},\\qquad y(t)=4\\sin t=${n(y)}` });

/* Figures 11.7 and 11.8, Example 11.2 a and b */
trace('sim-trace-half-parabola', { x: (t) => Math.sqrt(2 * t + 4), y: (t) => 2 * t + 1, t0: -2, t1: 6, win: { x: [-4, 5], y: [-4, 14] }, nx: 9, ny: 9, secs: 6, H: 600,
  at: [[-2, '−2'], [0, '0'], [2, '2'], [4, '4'], [6, '6']],
  under: (ctx, ax) => { ctx.save(); ctx.setLineDash([10, 10]); F.polar.path(ctx, ax, (u) => [u, u * u - 3], [-4, 5], alpha(C('curve'), 0.5), { w: 3, faint: 0 }); ctx.restore(); label(ctx, 'y = x² − 3', ax.X(-3.2), ax.Y(7.24), { side: 'left', size: 20, color: C('curve') }); },
  ro: (t, x, y) => `x(t)=\\sqrt{2t+4}=${n(x)},\\quad y(t)=2t+1=${n(y)},\\quad x^{2}-3=${n(x * x - 3)}` });
trace('sim-trace-ellipse', { x: (t) => 4 * Math.cos(t), y: (t) => 3 * Math.sin(t), t0: 0, t1: 2 * PI, win: { x: [-6, 6], y: [-4, 4] }, nx: 12, ny: 8, secs: 6, equal: true, H: 560,
  at: [[0, '0'], [PI / 2, 'π/2'], [PI, 'π'], [1.5 * PI, '3π/2']], side: { '0': 'left', 'π/2': 'below', 'π': 'right', '3π/2': 'above' },
  ro: (t, x, y) => `x(t)=4\\cos t=${n(x)},\\quad y(t)=3\\sin t=${n(y)},\\quad \\frac{x^{2}}{16}+\\frac{y^{2}}{9}=${n(x * x / 16 + y * y / 9, 3)}` });

/* Figure 11.9 + 11.13 + 11.14 + 11.15: a wheel of radius a = 1 rolls two turns, t from 0 to 4π, the ant at distance b from
   its centre. Window x −0.6 to 13.4, y −0.8 to 2.8, one scale. 6 s a run. */
(function () {
  const d = sim('sim-cycloid', 450);
  const a = 1, T = 4 * PI, cy = cycle(() => T, 1.2), ro = readout(d);
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.3, max: 1.6, step: 0.01, value: 1, unit: '', dec: 2, aria: 'distance b of the ant from the center of the wheel', specials: [{ at: 1 }], onInput: () => cy.reset() });
  const WIN = { x: [-1.8, 4 * PI + 1.8], y: [-0.8, 2.8] }, BOX = fit(WIN, 92, 430);
  const SC = { X: (v) => BOX.l + ((v - WIN.x[0]) / (WIN.x[1] - WIN.x[0])) * (BOX.r - BOX.l), Y: (v) => BOX.b - ((v - WIN.y[0]) / (WIN.y[1] - WIN.y[0])) * (BOX.b - BOX.t), box: BOX, xr: WIN.x, yr: WIN.y };
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), ac = C('angle'), ant = F.ref('ant'), bv = b.v, t = Math.min(cy.now(), T);
    const P = (s) => [a * s - bv * Math.sin(s), a - bv * Math.cos(s)];
    const ax = SC, X = ax.X, Y = ax.Y, k = X(1) - X(0);
    line(ctx, X(WIN.x[0]), Y(0), X(WIN.x[1]), Y(0), PAL.ink, 3);
    F.polar.path(ctx, ax, P, [0, T], cc, { upto: t, marks: 0, faint: 0.3 });
    hits.length = 0;
    if (Math.abs(bv - a) < 1e-9) [0, 2 * PI, 4 * PI].forEach((s) => { if (s <= t + 1e-9) { dot(ctx, X(a * s), Y(0), pc, true, 7); hits.push({ x: X(a * s), y: Y(0), r: 12, name: 'a cusp, where the ant touches the road' }); } });
    const cx = X(a * t), cyy = Y(a), [xa, ya] = P(t), px = X(xa), py = Y(ya);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyy, a * k, 0, 2 * PI); ctx.stroke();
    if (bv > a) { ctx.setLineDash([8, 8]); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cyy, bv * k, 0, 2 * PI); ctx.stroke(); }
    ctx.restore();
    for (let i = 0; i < 6; i++) { const s = t + (i * PI) / 3; line(ctx, cx, cyy, cx - a * k * Math.sin(s), cyy + a * k * Math.cos(s), alpha(PAL.ink, 0.35), 2); }
    line(ctx, cx, cyy, px, py, PAL.ink, 3);
    const guide = alpha(PAL.ink, 0.45);
    line(ctx, cx, cyy, px, cyy, guide, 2.5, [4, 8]); line(ctx, px, cyy, px, py, guide, 2.5, [4, 8]);
    const down = -PI / 2, tm = ((t % (2 * PI)) + 2 * PI) % (2 * PI);
    if (tm > 0.05) angleArc(ctx, { x: cx, y: cyy }, 0.36 * k, down, down - tm, 't', null, ac);
    dot(ctx, cx, cyy, pc, true, 7); label(ctx, 'C', cx, cyy, { side: 'above', size: 20, gap: 18 });
    dot(ctx, px, py, ant, true, 10); label(ctx, 'A', px, py, { side: py < cyy ? 'above' : 'below', size: 20, gap: 20, color: ant });
    hits.push({ x: cx, y: cyy, r: 14, name: `the center C = (${fmt(a * t, 2)}, ${fmt(a, 2)})` }, { x: px, y: py, r: 16, name: `the ant A = (${fmt(xa, 2)}, ${fmt(ya, 2)})` },
      { x: (cx + px) / 2, y: cyy, r: 14, name: `x_C − x_A = ${fmt(a * t - xa, 2)}` }, { x: px, y: (cyy + py) / 2, r: 14, name: `y_C − y_A = ${fmt(a - ya, 2)}` });
    const kind = Math.abs(bv - a) < 1e-9 ? 'on the rim, tracing a cycloid' : bv < a ? 'on a spoke, tracing a curtate cycloid' : 'on the flange, tracing a prolate cycloid';
    headline(ctx, `t = ${fmt(t, 2)}: the center is at (${fmt(a * t, 2)}, ${fmt(a, 2)}) and the ant, ${kind}, at (${fmt(xa, 2)}, ${fmt(ya, 2)})`);
    const A = (s) => typed('point', s);
    ro.set(`x_{C}=at=${n(a * t)},\\; y_{C}=a=${n(a)}\\qquad ${A('x_{A}')}=x_{C}-(x_{C}-x_{A})=${n(a * t)}-(${n(a * t - xa)})=${n(xa)},\\; ${A('y_{A}')}=y_{C}-(y_{C}-y_{A})=${n(a)}-(${n(a - ya)})=${n(ya)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* Figure 11.10 + 11.11: the fixed circle of radius a = 4 and the rolling circle of radius b = a/(a/b); the curve closes after q
   turns for a/b = p/q and is run twelve turns for π and √2. Window ±5, one scale. 6 s a run. */
(function () {
  const d = sim('sim-hypocycloid', 640);
  const RATIOS = { '3': [3, 1], '4': [4, 1], '5': [5, 1], '5/3': [5 / 3, 3], '7/3': [7 / 3, 3], '8/3': [8 / 3, 3], 'π': [PI, null], '√2': [Math.SQRT2, null] };
  const NAMES = { 3: 'three', 4: 'four', 5: 'five', 7: 'seven', 8: 'eight' };
  const a = 4, ro = readout(d);
  const span = () => { const [, q] = RATIOS[pick.value]; return 2 * PI * (q ?? 12); };
  const cy = cycle(() => span(), 1.2);
  const pick = choice(d.controls, { label: 'a/b', options: Object.keys(RATIOS).map((v) => ({ value: v, label: v })), value: '4', onInput: () => cy.reset() });
  const WIN = { x: [-5, 5], y: [-5, 5] }, BOX = fit(WIN, 96, 590);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), [ratio, q] = RATIOS[pick.value], b = a / ratio, T = span(), t = Math.min(cy.now(), T);
    const P = (s) => [(a - b) * Math.cos(s) + b * Math.cos(((a - b) / b) * s), (a - b) * Math.sin(s) - b * Math.sin(((a - b) / b) * s)];
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { nx: 10, ny: 10, fx: (v) => (v % 2 === 0 ? fmt(v, 0) : ''), fy: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    const X = ax.X, Y = ax.Y, k = X(1) - X(0);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(X(0), Y(0), a * k, 0, 2 * PI); ctx.stroke();
    ctx.setLineDash([8, 8]); ctx.lineWidth = 2; ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.beginPath(); ctx.arc(X(0), Y(0), (a - b) * k, 0, 2 * PI); ctx.stroke(); ctx.restore();
    F.polar.path(ctx, ax, P, [0, T], cc, { upto: t, faint: 0, w: 4, n: 2400 });
    const ox = X((a - b) * Math.cos(t)), oy = Y((a - b) * Math.sin(t)), [x, y] = P(t);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(ox, oy, b * k, 0, 2 * PI); ctx.stroke(); ctx.restore();
    line(ctx, ox, oy, X(x), Y(y), alpha(PAL.ink, 0.5), 2.5);
    dot(ctx, X(x), Y(y), pc, true, 9);
    hits.length = 0;
    hits.push({ x: X(x), y: Y(y), r: 16, name: `the tracing point (${fmt(x, 2)}, ${fmt(y, 2)})` }, { x: ox, y: oy, r: 14, name: `the center of the rolling circle, on the circle of radius a − b = ${fmt(a - b, 2)}` });
    const cusps = q ? Math.round(ratio * q) : null;
    headline(ctx, q ? `a/b = ${pick.value}: ${NAMES[cusps] ?? cusps} cusps, and the curve closes after ${q === 1 ? 'one turn' : q + ' turns'}` : `a/b = ${pick.value}: the curve never returns to its starting point`);
    const c = n((a - b) / b, 3);
    ro.set(`x(t)=(a-b)\\cos t+b\\cos\\left(\\tfrac{a-b}{b}\\right)t=${n(a - b, 3)}\\cos ${n(t)}+${n(b, 3)}\\cos(${c}\\cdot ${n(t)})=${n(x)}\\qquad y(t)=${n(y)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => span() / 6), draw });
})();

/* Figure 11.12: the witch of Agnesi for the circle of radius a = 1 through O and (0, 2). θ runs 0.12 to π − 0.12 in 6 s.
   Window x −5 to 5, y −0.5 to 2.6, one scale. */
(function () {
  const d = sim('sim-witch', 480);
  const a = 1, T0 = 0.12, T1 = PI - 0.12, cy = cycle(() => T1 - T0, 1.2), ro = readout(d);
  const W = (th) => [2 * a / Math.tan(th), 2 * a * Math.sin(th) ** 2];
  const WIN = { x: [-5, 5], y: [-0.5, 2.6] }, BOX = fit(WIN, 92, 436);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), lc = C('line'), ac = C('angle'), th = T0 + Math.min(cy.now(), T1 - T0);
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { nx: 10, ny: 0, fx: (v) => (v % 2 === 0 ? fmt(v, 0) : '') });
    const X = ax.X, Y = ax.Y, k = X(1) - X(0);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(X(0), Y(a), a * k, 0, 2 * PI); ctx.stroke(); ctx.restore();
    line(ctx, X(WIN.x[0]), Y(2 * a), X(WIN.x[1]), Y(2 * a), lc, 2.5);
    F.polar.path(ctx, ax, W, [T0, T1], cc, { upto: th, faint: 0.3, marks: 0 });
    const A = [2 * a * Math.sin(th) * Math.cos(th), 2 * a * Math.sin(th) ** 2], B = [2 * a / Math.tan(th), 2 * a], P = W(th);
    const Bc = { x: X(B[0]), y: Y(B[1]) };
    line(ctx, X(0), Y(0), Bc.x, Bc.y, lc, 3);
    const guide = alpha(PAL.ink, 0.45);
    line(ctx, Bc.x, Bc.y, X(P[0]), Y(P[1]), guide, 2.5, [8, 8]); line(ctx, X(A[0]), Y(A[1]), X(P[0]), Y(P[1]), guide, 2.5, [8, 8]);
    angleArc(ctx, { x: X(0), y: Y(0) }, 0.42 * k, 0, th, 'θ', null, ac);
    [['O', [0, 0], 'below'], ['A', A, A[0] > 0 ? 'left' : 'right'], ['B', B, 'above'], ['P', P, 'below']].forEach(([s, p, side]) => {
      if (p[0] < WIN.x[0] || p[0] > WIN.x[1]) return;
      const clear = (q) => Math.hypot(X(p[0]) - X(q[0]), Y(p[1]) - Y(q[1])) > 46;
      if ((s === 'P' && !clear(A)) || (s === 'B' && !clear(A))) { dot(ctx, X(p[0]), Y(p[1]), s === 'P' ? cc : pc, true, s === 'P' ? 9 : 7); return; }
      dot(ctx, X(p[0]), Y(p[1]), s === 'P' ? cc : pc, true, s === 'P' ? 9 : 7); label(ctx, s, X(p[0]), Y(p[1]), { side, size: 20, gap: 18 });
    });
    hits.length = 0;
    hits.push({ x: X(A[0]), y: Y(A[1]), r: 14, name: 'A, on the circle' }, { x: Bc.x, y: Bc.y, r: 14, name: 'B, where the line OA meets y = 2a' }, { x: X(P[0]), y: Y(P[1]), r: 16, name: `P = (${fmt(P[0], 2)}, ${fmt(P[1], 2)}), on the witch` });
    headline(ctx, `θ = ${fmt(th, 2)}: A on the circle and B on the line y = 2a put P at (${fmt(P[0], 2)}, ${fmt(P[1], 2)})`);
    ro.set(`x=2a\\cot ${typed('angle', '\\theta')}=2\\cot ${n(th)}=${n(P[0])},\\qquad y=2a\\sin^{2}${typed('angle', '\\theta')}=2\\sin^{2}${n(th)}=${n(P[1])}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (T1 - T0) / 6), draw });
})();
};
