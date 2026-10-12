/* Figures for section 11.3 Polar Coordinates. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, line, dot, text, label, headline, register, readout, fmt, hover, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI, TAU = 2 * PI;
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TH = (s) => typed('angle', s);
const fit = (win, t, b) => { const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]); return { l: 700 - w / 2, r: 700 + w / 2, t, b }; };
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* an angle written as a multiple of π where it is one of twelfths, else to two decimals */
const piOf = (th) => {
  const k = Math.round((th * 12) / PI); if (Math.abs(th - (k * PI) / 12) > 1e-6) return fmt(th, 2);
  if (k === 0) return '0';
  const g = (a, b) => (b ? g(b, a % b) : a), q = 12 / g(Math.abs(k), 12), p = k / g(Math.abs(k), 12);
  return `${p === 1 ? '' : p === -1 ? '−' : fmt(p, 0)}π${q === 1 ? '' : '/' + q}`;
};
const piTex = (th) => piOf(th).replace('−', '-').replace(/(-?)(\d*)π\/(\d+)/, (m, s, p, q) => `${s}\\frac{${p}\\pi}{${q}}`).replace('π', '\\pi');
/* The ray at θ, its angle from the polar axis, and the point at (r, θ) dragged by G: the polar picture every figure here shares */
function rayAndAngle(ctx, ax, th, r, G) {
  const lc = C('line'), ac = C('angle'), pc = C('point');
  F.polar.ray(ctx, ax, th, r, alpha(lc, 0.8), { w: 2.5 });
  const m = ((th % TAU) + TAU) % TAU, show = th < 0 ? -((-th) % TAU) : th > TAU ? m : th;
  if (Math.abs(show) > 0.04) angleArc(ctx, { x: ax.X(0), y: ax.Y(0) }, 46, 0, show, 'θ', null, ac);
  return G ? G.draw(ctx, ax, pc) : null;
}

/* Figure 11.27: P anywhere, its rectangular and polar coordinates; axes ±5, one scale */
(function () {
  const d = sim('sim-polar-point', 520);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -5, max: 5, step: 0.01, value: 3, unit: '', dec: 2, aria: 'x-coordinate of P' });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: -5, max: 5, step: 0.01, value: 2, unit: '', dec: 2, aria: 'y-coordinate of P' });
  const P = F.drag(d, { x: xs, y: ys }), ro = readout(d);
  const WIN = { x: [-6, 6], y: [-6, 6] }, BOX = fit(WIN, 100, 480);
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('point'), ac = C('angle'), x = xs.v, y = ys.v, r = Math.hypot(x, y), th = r > 1e-9 ? ((Math.atan2(y, x) % TAU) + TAU) % TAU : 0;
    const ax = axes(ctx, BOX, WIN.x, WIN.y, { xl: 'x', yl: 'y', nx: 12, ny: 12, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const guide = alpha(PAL.ink, 0.45), O = { x: ax.X(0), y: ax.Y(0) }, px = ax.X(x), py = ax.Y(y);
    line(ctx, px, py, px, O.y, guide, 2.5, [4, 8]); line(ctx, px, py, O.x, py, guide, 2.5, [4, 8]);
    line(ctx, O.x, O.y, px, py, PAL.ink, 3);
    if (r > 0.3) angleArc(ctx, O, Math.min(50, 0.45 * Math.hypot(px - O.x, py - O.y)), 0, th, 'θ', null, ac);
    P.draw(ctx, ax, pc);
    label(ctx, `P(${fmt(x, 2)}, ${fmt(y, 2)})`, px, py, { side: y >= 0 ? 'above' : 'below', size: 20, gap: 26 });
    if (r > 0.8) label(ctx, 'r', (O.x + px) / 2, (O.y + py) / 2, { side: x * y >= 0 ? 'left' : 'right', size: 22, gap: 14 });
    headline(ctx, r > 1e-9 ? `P = (${fmt(x, 2)}, ${fmt(y, 2)}): r = ${fmt(r, 2)}, θ = ${fmt(th, 2)}` : 'P is the origin: r = 0, and every θ names it');
    ro.set(`x=r\\cos ${TH('\\theta')}=${n(r)}\\cos ${n(th)}=${n(x)},\\;\\; y=r\\sin ${TH('\\theta')}=${n(y)}\\qquad r^{2}=x^{2}+y^{2}=${n(r * r)},\\;\\;\\tan ${TH('\\theta')}=\\frac{y}{x}=${Math.abs(x) < 1e-9 ? '\\text{undefined}' : n(y / x, 3)}`);
  }
  still(d, draw);
})();

/* Figure 11.28: the polar grid of the book (spokes every π/12, rings 1–5) and a point plotted by (r, θ) */
(function () {
  const d = sim('sim-polar-plot', 560);
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: -5, max: 5, step: 0.01, value: -2, unit: '', dec: 2, aria: 'radial coordinate r' });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: -TAU, max: TAU, step: 0.01, value: (4 * PI) / 3, unit: '', dec: 2, aria: 'angular coordinate theta', detents: Array.from({ length: 25 }, (_, i) => -TAU + (i * PI) / 6) });
  const G = F.polar.grip(d, { t: ts, r: rs }), ro = readout(d);
  const WIN = { x: [-5.6, 5.6], y: [-5.6, 5.6] }, BOX = fit(WIN, 100, 530);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 24 });
    const r = rs.v, th = ts.v, [x, y] = F.polar.xy(r, th);
    const p = rayAndAngle(ctx, ax, th, r, G);
    hits.length = 0; hits.push({ x: ax.X(0), y: ax.Y(0), r: 14, name: 'the pole, r = 0' }, { x: ax.X(4.6), y: ax.Y(0), r: 16, name: 'the polar axis, θ = 0' });
    if (p) hits.push({ x: p.x, y: p.y, r: 16, name: `(r, θ) = (${fmt(r, 2)}, ${piOf(th)}), the point (${fmt(x, 2)}, ${fmt(y, 2)})` });
    const how = Math.abs(r) < 0.005 ? 'r = 0 is the pole, whatever the angle' : r > 0 ? `turn ${piOf(th)} from the polar axis, then go ${fmt(r, 2)} along the ray` : `turn ${piOf(th)} from the polar axis, then go ${fmt(-r, 2)} back through the pole`;
    headline(ctx, `(${fmt(r, 2)}, ${piOf(th)}): ${how}`);
    ro.set(`(r,${TH('\\theta')})=(${n(r)},\\,${piTex(th)})\\;\\Rightarrow\\;(x,y)=(r\\cos ${TH('\\theta')},\\,r\\sin ${TH('\\theta')})=(${n(x)},\\,${n(y)})`);
  }
  still(d, draw);
})();

/* Figure 11.29, a faithful copy: Example 11.11's three points on the polar grid, each at the end of its ray */
(function () {
  const d = sim('fig-three-points', 480);
  const WIN = { x: [-4.8, 4.8], y: [-4.8, 4.8] }, BOX = fit(WIN, 20, 460);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12 }), pc = C('point'), lc = C('line');
    [[2, PI / 4, '(2, π/4)', 'right'], [-3, (2 * PI) / 3, '(−3, 2π/3)', 'right'], [4, (5 * PI) / 4, '(4, 5π/4)', 'left']].forEach(([r, th, s, side]) => {
      const p = F.polar.ray(ctx, ax, th, r, alpha(lc, 0.7), { w: 2 });
      dot(ctx, p.x, p.y, pc, true, 9); label(ctx, s, p.x, p.y, { side, size: 20, gap: 18 });
    });
  }
  still(d, draw);
})();

/* Figure 11.30: r = 4 sin θ on [0, 2π]; window x ±4.4, y −1 to 4.8, one scale */
(function () {
  const d = sim('sim-polar-circle', 520);
  const f = (t) => 4 * Math.sin(t);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: (3 * PI) / 4, unit: '', dec: 2, aria: 'angle theta', specials: [{ at: PI / 2 }, { at: PI }] });
  const G = F.polar.grip(d, { t: ts, at: F.polar.of(f), span: PI / 2 }), ro = readout(d);
  const WIN = { x: [-4.6, 4.6], y: [-1.2, 4.8] }, BOX = fit(WIN, 100, 480);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12 }), th = ts.v, r = f(th), [x, y] = F.polar.xy(r, th);
    F.polar.curve(ctx, ax, f, [0, TAU], C('curve'), { upto: th, marks: 2 });
    rayAndAngle(ctx, ax, th, r, G);
    headline(ctx, `θ = ${fmt(th, 2)}: r = 4 sin θ = ${fmt(r, 2)}${r < -0.005 ? ', so the point lies behind the pole' : ''}`);
    ro.set(`r=4\\sin ${TH('\\theta')}=4\\sin ${n(th)}=${n(r)}\\qquad x^{2}+(y-2)^{2}=${n(x * x + (y - 2) ** 2)}`);
  }
  still(d, draw);
})();

/* Figure 11.31 + 11.32: the common curves of the book's tables; window ±6.6, one scale */
(function () {
  const d = sim('sim-common-curves', 600);
  const FAM = {
    line: { label: 'line θ = K', span: [0, PI], th: PI / 3, a: null, b: null },
    circle: { label: 'circle', span: [0, PI], th: PI, a: [-4, 4, 2], b: [-4, 4, -3], f: (t, a, b) => a * Math.cos(t) + b * Math.sin(t), tex: (a, b, t) => `r=a\\cos ${TH('\\theta')}+b\\sin ${TH('\\theta')}=${n(a)}\\cos ${n(t)}+(${n(b)})\\sin ${n(t)}` },
    spiral: { label: 'spiral', span: [0, 4 * PI], th: 4 * PI, a: [0, 2, 0], b: [0.05, 0.6, 1 / 3], f: (t, a, b) => a + b * t, tex: (a, b, t) => `r=a+b${TH('\\theta')}=${n(a)}+${n(b)}(${n(t)})` },
    cardioid: { label: 'cardioid', span: [0, TAU], th: TAU, a: [0.5, 3, 3], b: null, f: (t, a) => a * (1 + Math.cos(t)), tex: (a, b, t) => `r=a(1+\\cos ${TH('\\theta')})=${n(a)}(1+\\cos ${n(t)})` },
    limacon: { label: 'limaçon', span: [0, TAU], th: TAU, a: [0.5, 4, 4], b: [0, 4, 2], f: (t, a, b) => a * Math.sin(t) + b, tex: (a, b, t) => `r=a\\sin ${TH('\\theta')}+b=${n(a)}\\sin ${n(t)}+${n(b)}` },
    rose: { label: 'rose', span: [0, TAU], th: TAU, a: [0.5, 3, 3], b: [1, 6, 2], step: 1, f: (t, a, b) => a * Math.sin(b * t), tex: (a, b, t) => `r=a\\sin(b${TH('\\theta')})=${n(a)}\\sin(${fmt(b, 0)}\\cdot ${n(t)})` },
  };
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: PI, step: 0.01, value: PI / 3, unit: '', dec: 2, aria: 'angle theta' });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -4, max: 4, step: 0.01, value: 2, unit: '', dec: 2, aria: 'constant a' });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -4, max: 4, step: 0.01, value: -3, unit: '', dec: 2, aria: 'constant b' });
  const set = (v) => {
    const c = FAM[v];
    ts.range({ min: c.span[0], max: c.span[1], step: 0.01, value: c.th, dec: 2 });
    [[as, c.a], [bs, c.b]].forEach(([s, r], i) => { s.show(!!r); if (r) s.range({ min: r[0], max: r[1], step: i === 1 && c.step ? c.step : 0.01, value: r[2], dec: i === 1 && c.step ? 0 : 2 }); });
  };
  const pick = choice(d.controls, { label: 'curve', options: Object.entries(FAM).map(([value, c]) => ({ value, label: c.label })), value: 'line', onInput: set });
  set('line');
  const fOf = () => { const c = FAM[pick.value]; return (t) => c.f(t, as.v, bs.v); };
  const G = F.polar.grip(d, { t: ts, at: (t) => (pick.value === 'line' ? F.polar.xy(4, t) : F.polar.of(fOf())(t)), span: PI / 2 }), ro = readout(d);
  const WIN = { x: [-6.6, 6.6], y: [-6.6, 6.6] }, BOX = fit(WIN, 100, 570);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12 }), cc = C('curve'), c = FAM[pick.value], th = ts.v;
    if (pick.value === 'line') {
      const far = 12, k = Math.cos(th), s = Math.sin(th);
      line(ctx, ax.X(-far * k), ax.Y(-far * s), ax.X(far * k), ax.Y(far * s), cc, 5);
      rayAndAngle(ctx, ax, th, 4, G);
      headline(ctx, `θ = K = ${piOf(th)}: the line through the pole with slope tan K = ${Math.abs(Math.cos(th)) < 1e-3 ? 'undefined' : fmt(Math.tan(th), 2)}`);
      ro.set(Math.abs(Math.cos(th)) < 1e-3 ? `${TH('\\theta')}=K=${n(th)}\\qquad x=0` : `${TH('\\theta')}=K=${n(th)}\\qquad y=(\\tan K)\\,x=${n(Math.tan(th), 3)}\\,x`);
      return;
    }
    const f = fOf(), r = f(th);
    F.polar.curve(ctx, ax, f, c.span, cc, { upto: th, marks: 2, n: 1800 });
    rayAndAngle(ctx, ax, th, r, G);
    const eq = { circle: `r = ${fmt(as.v, 2)} cos θ + ${fmt(bs.v, 2)} sin θ`, spiral: `r = ${fmt(as.v, 2)} + ${fmt(bs.v, 2)}θ`, cardioid: `r = ${fmt(as.v, 2)}(1 + cos θ)`, limacon: `r = ${fmt(as.v, 2)} sin θ + ${fmt(bs.v, 2)}`, rose: `r = ${fmt(as.v, 2)} sin(${fmt(bs.v, 0)}θ)` }[pick.value];
    const name = pick.value === 'limacon' && Math.abs(as.v - bs.v) < 0.005 ? 'limaçon with a = b, a cardioid' : c.label;
    headline(ctx, `The ${name} ${eq}, drawn to θ = ${fmt(th, 2)}`);
    ro.set(`${c.tex(as.v, bs.v, th)}=${n(r)}`);
  }
  still(d, draw);
})();

/* Figure 11.33 + 11.34: r = 3 sin kθ for the book's k = 3 and 2, 4, 5, and stand-ins 6/5 (rational) and √2 (irrational); window ±3.4 */
(function () {
  const d = sim('sim-rose', 560);
  const K = { '2': [2, TAU], '3': [3, PI], '4': [4, TAU], '5': [5, PI], '6/5': [6 / 5, 10 * PI], '√2': [Math.SQRT2, 40 * PI] };
  const PETALS = { '2': 'four petals, twice the coefficient', '3': 'three petals, as many as the coefficient', '4': 'eight petals, twice the coefficient', '5': 'five petals, as many as the coefficient' };
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: PI, step: 0.01, value: PI, unit: '', dec: 2, aria: 'angle theta' });
  const pick = choice(d.controls, { label: 'k', options: Object.keys(K).map((v) => ({ value: v, label: v })), value: '3', onInput: (v) => ts.range({ min: 0, max: K[v][1], step: 0.01, value: K[v][1], dec: 2 }) });
  const fOf = () => { const k = K[pick.value][0]; return (t) => 3 * Math.sin(k * t); };
  const G = F.polar.grip(d, { t: ts, at: (t) => F.polar.of(fOf())(t), span: 0.6 }), ro = readout(d);
  const WIN = { x: [-3.5, 3.5], y: [-3.5, 3.5] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12, angles: false }), [k, T] = K[pick.value], f = fOf(), th = ts.v, r = f(th);
    F.polar.curve(ctx, ax, f, [0, T], C('curve'), { upto: th, w: T > 20 ? 2.5 : 4, n: Math.round(T * 300) });
    rayAndAngle(ctx, ax, th, r, G);
    const what = PETALS[pick.value] ?? (pick.value === '6/5' ? (th >= T - 0.01 ? 'the curve has closed, back at its start at θ = 10π' : 'a rational coefficient: the curve closes at θ = 10π') : 'an irrational coefficient: the curve never closes, the petals never repeat');
    headline(ctx, `k = ${pick.value}: ${what}`);
    ro.set(`r=3\\sin(k${TH('\\theta')})=3\\sin(${n(k, 3)}\\cdot ${n(th)})=${n(r)}`);
  }
  still(d, draw);
})();

/* Figure 11.35: the spiral r = a + kθ, 0 ≤ θ ≤ 4π; window ±9.5 */
(function () {
  const d = sim('sim-spiral', 560);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 4 * PI, step: 0.01, value: 3 * PI, unit: '', dec: 2, aria: 'angle theta' });
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.1, max: 0.6, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'constant k' });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 1.5, step: 0.01, value: 0, unit: '', dec: 2, aria: 'constant a' });
  const f = (t) => as.v + ks.v * t;
  const G = F.polar.grip(d, { t: ts, at: (t) => F.polar.of(f)(t), span: PI / 2 }), ro = readout(d);
  const WIN = { x: [-9.5, 9.5], y: [-9.5, 9.5] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { ring: 2, spokes: 12 }), th = ts.v, r = f(th), [x, y] = F.polar.xy(r, th);
    F.polar.curve(ctx, ax, f, [0, 4 * PI], C('curve'), { upto: th, marks: 3 });
    line(ctx, ax.X(0), ax.Y(0), ax.X(x), ax.Y(y), PAL.ink, 3);
    const p = rayAndAngle(ctx, ax, th, r, G);
    if (p) label(ctx, `P(${fmt(x, 2)}, ${fmt(y, 2)})`, p.x, p.y, { side: y >= 0 ? 'above' : 'below', size: 20, gap: 26 });
    headline(ctx, `θ = ${fmt(th, 2)}: P is ${fmt(r, 2)} from the origin`);
    ro.set(`d(P,O)=r=a+k${TH('\\theta')}=${n(as.v)}+${n(ks.v)}(${n(th)})=${n(r)}\\qquad (x,y)=(${n(x)},\\,${n(y)})`);
  }
  still(d, draw);
})();

/* Figure 11.36: the logarithmic spiral r = a·b^θ, −4π ≤ θ ≤ 3π; window ±11 from the book's a = 1.2, b = 1.25 */
(function () {
  const d = sim('sim-log-spiral', 560);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: -4 * PI, max: 3 * PI, step: 0.01, value: 3 * PI, unit: '', dec: 2, aria: 'angle theta' });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.6, max: 1.8, step: 0.01, value: 1.2, unit: '', dec: 2, aria: 'constant a', specials: [{ at: 1.2 }] });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 1.1, max: 1.3, step: 0.005, value: 1.25, unit: '', dec: 3, aria: 'constant b', specials: [{ at: 1.25 }] });
  const f = (t) => as.v * bs.v ** t;
  const G = F.polar.grip(d, { t: ts, at: (t) => F.polar.of(f)(t), span: PI / 2 }), ro = readout(d);
  const WIN = { x: [-11, 11], y: [-11, 11] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { ring: 2, spokes: 12 }), th = ts.v, r = f(th);
    F.polar.curve(ctx, ax, f, [-4 * PI, 3 * PI], C('curve'), { upto: th, marks: 0, n: 2400, gap: 30 });
    rayAndAngle(ctx, ax, th, r, G);
    headline(ctx, `θ = ${fmt(th, 2)}: r = ${fmt(as.v, 2)}(${fmt(bs.v, 3)})^θ = ${fmt(r, 2)}; each turn multiplies r by ${fmt(bs.v ** TAU, 2)}`);
    ro.set(`r=a\\cdot b^{${TH('\\theta')}}=${n(as.v)}\\cdot ${n(bs.v, 3)}^{${n(th)}}=${n(r)}`);
  }
  still(d, draw);
})();

/* Sim for the book's table of symmetries: each curve with a point (r, θ) and its reflection; window ±4.4 */
(function () {
  const d = sim('sim-symmetry', 560);
  const lem = (t) => 3 * Math.sqrt(Math.max(0, Math.sin(2 * t)));
  const S = {
    axis: { label: 'polar axis', f: (t) => 2 - 2 * Math.cos(t), span: [0, TAU], th: PI / 3, mirror: (r, t) => [r, -t], q: '(r, −θ)',
      tex: (t) => `\\kf(${TH('\\theta')})=2-2\\cos ${n(t)}=${n(2 - 2 * Math.cos(t))}=2-2\\cos(${n(-t)})=\\kf(-${TH('\\theta')})` },
    pole: { label: 'pole', f: lem, span: [0.02, PI / 2 - 0.02], th: PI / 6, mirror: (r, t) => [-r, t], q: '(−r, θ)',
      tex: (t) => `r^{2}=9\\cos(2${TH('\\theta')}-\\tfrac{\\pi}{2})=${n(9 * Math.sin(2 * t))}=(-r)^{2}` },
    vertical: { label: 'line θ = π/2', f: (t) => 2 - 2 * Math.sin(t), span: [0, TAU], th: PI / 6, mirror: (r, t) => [r, PI - t], q: '(r, π − θ)',
      tex: (t) => `\\kf(${TH('\\theta')})=2-2\\sin ${n(t)}=${n(2 - 2 * Math.sin(t))}=2-2\\sin(${n(PI - t)})=\\kf(\\pi-${TH('\\theta')})` },
  };
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: PI / 3, unit: '', dec: 2, aria: 'angle theta' });
  const pick = choice(d.controls, { label: '\\text{about}', options: Object.entries(S).map(([value, c]) => ({ value, label: c.label })), value: 'axis', onInput: (v) => ts.range({ min: S[v].span[0], max: S[v].span[1], step: 0.01, value: S[v].th, dec: 2 }) });
  const G = F.polar.grip(d, { t: ts, at: (t) => F.polar.of(S[pick.value].f)(t), span: PI / 2 }), ro = readout(d);
  const WIN = { x: [-4.4, 4.4], y: [-4.4, 4.4] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12, angles: false }), c = S[pick.value], cc = C('curve'), lc = C('line'), pc = C('point'), th = ts.v, r = c.f(th);
    if (pick.value === 'pole') { F.polar.curve(ctx, ax, lem, [0, PI / 2], cc, { faint: 0 }); F.polar.curve(ctx, ax, (t) => -lem(t), [0, PI / 2], cc, { faint: 0 }); }
    else F.polar.curve(ctx, ax, c.f, c.span, cc, { faint: 0 });
    if (pick.value === 'axis') line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), lc, 3.5);
    if (pick.value === 'vertical') line(ctx, ax.X(0), ax.box.t, ax.X(0), ax.box.b, lc, 3.5);
    if (pick.value === 'pole') dot(ctx, ax.X(0), ax.Y(0), lc, true, 8);
    const [qr, qt] = c.mirror(r, th), [px, py] = F.polar.xy(r, th), [qx, qy] = F.polar.xy(qr, qt);
    line(ctx, ax.X(px), ax.Y(py), ax.X(qx), ax.Y(qy), alpha(PAL.ink, 0.45), 2.5, [8, 8]);
    dot(ctx, ax.X(qx), ax.Y(qy), pc, false, 9);
    G.draw(ctx, ax, pc);
    label(ctx, '(r, θ)', ax.X(px), ax.Y(py), { side: px >= 0 ? 'right' : 'left', size: 20, gap: 22 });
    label(ctx, c.q, ax.X(qx), ax.Y(qy), { side: qx >= 0 ? 'right' : 'left', size: 20, gap: 22 });
    headline(ctx, `Symmetric about the ${c.label}: with (r, θ) = (${fmt(r, 2)}, ${fmt(th, 2)}) on the graph, ${c.q} is on it too`);
    ro.set(c.tex(th));
  }
  still(d, draw);
})();

/* Figure 11.37 + 11.38: r = 3 sin 2θ traced from 0; the part drawn over [0, π/2] reflected about the polar axis, the pole and θ = π/2 */
(function () {
  const d = sim('sim-rose-symmetry', 560);
  const f = (t) => 3 * Math.sin(2 * t);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: PI / 2, unit: '', dec: 2, aria: 'angle theta', specials: [{ at: PI / 2 }] });
  const G = F.polar.grip(d, { t: ts, at: F.polar.of(f), span: PI / 3 }), ro = readout(d);
  const WIN = { x: [-3.5, 3.5], y: [-3.5, 3.5] }, BOX = fit(WIN, 100, 530);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12 }), cc = C('curve'), th = ts.v, r = f(th), up = Math.min(th, PI / 2);
    const base = (t) => F.polar.xy(f(t), t);
    if (up > 0.01) [[1, -1], [-1, -1], [-1, 1]].forEach(([sx, sy]) => {
      ctx.save(); ctx.setLineDash([10, 8]);
      F.polar.path(ctx, ax, (t) => { const [x, y] = base(t); return [sx * x, sy * y]; }, [0, up], alpha(cc, 0.55), { w: 3, faint: 0 });
      ctx.restore();
    });
    F.polar.curve(ctx, ax, f, [0, TAU], cc, { upto: th, marks: 0 });
    rayAndAngle(ctx, ax, th, r, G);
    headline(ctx, th <= PI / 2 + 0.005 ? `θ = ${fmt(th, 2)}: ${th >= PI / 2 - 0.005 ? 'one petal; its three reflections complete the four-petaled rose' : 'the first petal, reflected in the other three quadrants'}` : `θ = ${fmt(th, 2)}: the curve itself goes on to trace the petals the reflections drew`);
    ro.set(`r=3\\sin 2${TH('\\theta')}=3\\sin(2\\cdot ${n(th)})=${n(r)}`);
  }
  still(d, draw);
})();
};
