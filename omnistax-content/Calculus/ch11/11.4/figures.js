/* Figures for section 11.4 Area and Arc Length in Polar Coordinates. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.4'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, line, dot, label, headline, register, readout, fmt, hover, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI, TAU = 2 * PI;
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TH = (s) => typed('angle', s), I = (s) => typed('integral', s);
const fit = (win, t, b) => { const s = (b - t) / (win.y[1] - win.y[0]), w = s * (win.x[1] - win.x[0]); return { l: 700 - w / 2, r: 700 + w / 2, t, b }; };
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* the region swept between the polar curves r = g(θ) (inner) and r = f(θ) (outer) for θ in [a, b], filled */
function sweep(ctx, ax, f, g, a, b, color, k = 0.32) {
  if (!(b > a)) return;
  const m = Math.max(8, Math.round((b - a) * 120)), out = [], inn = [];
  for (let i = 0; i <= m; i++) { const t = a + ((b - a) * i) / m; out.push(F.polar.xy(f(t), t)); inn.push(F.polar.xy(g(t), t)); }
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
  ctx.globalAlpha *= k; ctx.fillStyle = color; ctx.beginPath();
  [...out, ...inn.reverse()].forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y))));
  ctx.closePath(); ctx.fill(); ctx.restore();
}
const simpson = (g, a, b, m = 400) => { if (!(b > a)) return 0; const h = (b - a) / m; let s = g(a) + g(b); for (let i = 1; i < m; i++) s += (i % 2 ? 4 : 2) * g(a + i * h); return (s * h) / 3; };
const arcAt = (ctx, ax, th, s = 'θ') => { if (Math.abs(th) > 0.04) angleArc(ctx, { x: ax.X(0), y: ax.Y(0) }, 42, 0, th, s, null, C('angle')); };

/* Figure 11.39: a stand-in curve r = 1 + θ on [0.2, 1.4] and the n sectors of radius f(θᵢ); window x −0.4 to 2.8, y −0.4 to 2.8 */
(function () {
  const d = sim('sim-polar-sectors', 540);
  const nn = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0, aria: 'number of sectors n' });
  const f = (t) => 1 + t, A0 = 0.2, B0 = 1.4, ro = readout(d);
  const exact = F.polar.area(f, A0, B0);
  const WIN = { x: [-0.4, 2.8], y: [-0.4, 2.8] }, BOX = fit(WIN, 100, 500);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { ring: 0.5, spokes: 24, angles: false }), k = nn.v, lc = C('line');
    const s = F.polar.sectors(ctx, ax, f, A0, B0, k, C('integral'));
    F.polar.curve(ctx, ax, f, [0, PI / 2], C('curve'), { faint: 0 });
    [[A0, 'θ = α'], [B0, 'θ = β']].forEach(([t, nm]) => { F.polar.ray(ctx, ax, t, 3.5, alpha(lc, 0.8), { w: 2.5 }); const [x, y] = F.polar.xy(2.75, t); label(ctx, nm, ax.X(x), ax.Y(y), { side: t < 1 ? 'right' : 'left', size: 20, gap: 10 }); });
    headline(ctx, `n = ${k} ${k === 1 ? 'sector' : 'sectors'}: Aₙ = ${fmt(s, 3)}; the area is ${fmt(exact, 3)}`);
    ro.set(`${I('\\kA_{' + k + '}')}=\\sum_{i=1}^{${k}}\\frac{1}{2}(\\Delta${TH('\\theta')})(\\kf(${TH('\\theta')}_{i}))^{2}=${I(n(s, 4))}\\qquad \\kA=\\frac{1}{2}\\int_{0.2}^{1.4}(1+${TH('\\theta')})^{2}\\,d${TH('\\theta')}=${I(n(exact, 4))}`);
  }
  still(d, draw);
})();

/* Figure 11.40: a sector of radius r and central angle θ; window ±3.4 */
(function () {
  const d = sim('sim-sector', 520);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0.05, max: TAU, step: 0.01, value: PI / 3, unit: '', dec: 2, aria: 'central angle theta' });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.5, max: 3, step: 0.01, value: 2, unit: '', dec: 2, aria: 'radius r' });
  const ro = readout(d);
  const WIN = { x: [-3.4, 3.4], y: [-3.4, 3.4] }, BOX = fit(WIN, 100, 490);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12, angles: false }), th = ts.v, r = rs.v, ic = C('integral'), A = 0.5 * th * r * r;
    const k = ax.X(1) - ax.X(0), px = ax.X(0), py = ax.Y(0);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(px, py, r * k, 0, TAU); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = ic; ctx.globalAlpha = 0.3; ctx.beginPath(); ctx.moveTo(px, py); ctx.arc(px, py, r * k, 0, -th, true); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, px, py, px + r * k, py, PAL.ink, 3); line(ctx, px, py, px + r * k * Math.cos(th), py - r * k * Math.sin(th), PAL.ink, 3);
    arcAt(ctx, ax, th);
    label(ctx, 'r', px + (r * k) / 2, py, { side: 'below', size: 22, gap: 14 });
    headline(ctx, `θ = ${fmt(th, 2)} is ${fmt(th / TAU, 2)} of a turn: A = ½θr² = ${fmt(A, 2)}`);
    ro.set(`${I('\\kA')}=\\left(\\frac{${TH('\\theta')}}{2\\pi}\\right)\\pi r^{2}=\\frac{1}{2}${TH('\\theta')}r^{2}=\\frac{1}{2}(${n(th)})(${n(r)})^{2}=${I(n(A, 3))}`);
  }
  still(d, draw);
})();

/* Figure 11.41: the area swept under r = 3 sin 2θ from 0 to θ ≤ π/2; window ±3.4 */
(function () {
  const d = sim('sim-petal-area', 540);
  const f = (t) => 3 * Math.sin(2 * t);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: PI / 2, step: 0.01, value: PI / 2, unit: '', dec: 2, aria: 'angle theta', specials: [{ at: PI / 2 }] });
  const G = F.polar.grip(d, { t: ts, at: F.polar.of(f), span: PI / 4 }), ro = readout(d);
  const WIN = { x: [-3.4, 3.4], y: [-3.4, 3.4] }, BOX = fit(WIN, 100, 510);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12 }), th = ts.v, r = f(th), A = (9 / 4) * (th - Math.sin(4 * th) / 4);
    sweep(ctx, ax, f, () => 0, 0, th, C('integral'));
    F.polar.curve(ctx, ax, f, [0, TAU], C('curve'), { upto: th, marks: 0 });
    F.polar.ray(ctx, ax, th, r, alpha(C('line'), 0.8), { w: 2.5 });
    arcAt(ctx, ax, th);
    G.draw(ctx, ax, C('point'));
    headline(ctx, th >= PI / 2 - 0.005 ? 'θ = π/2: the petal’s area is 9π/8 ≈ 3.53' : `θ = ${fmt(th, 2)}: the ray has swept ${fmt(A, 2)} of the petal’s 3.53`);
    ro.set(`${I('\\kA')}(${TH('\\theta')})=\\frac{1}{2}\\int_0^{${n(th)}}9\\sin^{2}(2u)\\,du=\\frac{9}{4}\\left(${n(th)}-\\frac{\\sin(4\\cdot ${n(th)})}{4}\\right)=${I(n(A, 3))}`);
  }
  still(d, draw);
})();

/* Figure 11.42: inside r = 6 sin θ and outside r = 2 + 2 sin θ, swept from π/6; window x ±3.8, y −1.2 to 6.4 */
(function () {
  const d = sim('sim-between-curves', 600);
  const f = (t) => 6 * Math.sin(t), g = (t) => 2 + 2 * Math.sin(t);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: PI / 6, max: (5 * PI) / 6, step: 0.01, value: (5 * PI) / 6, unit: '', dec: 2, aria: 'angle theta', specials: [{ at: PI / 6 }, { at: PI / 2 }, { at: (5 * PI) / 6 }] });
  const ro = readout(d);
  const WIN = { x: [-3.8, 3.8], y: [-1.2, 6.4] }, BOX = fit(WIN, 100, 570);
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12, angles: false }), th = ts.v, c6 = F.ref('circle-6'), c2 = F.ref('cardioid-2'), pc = C('point');
    const outer = 0.5 * simpson((u) => f(u) ** 2, PI / 6, th), inner = 0.5 * simpson((u) => g(u) ** 2, PI / 6, th), A = outer - inner;
    sweep(ctx, ax, f, g, PI / 6, th, C('integral'));
    F.polar.curve(ctx, ax, f, [0, PI], c6, { faint: 0 });
    F.polar.curve(ctx, ax, g, [0, TAU], c2, { faint: 0 });
    F.polar.ray(ctx, ax, th, f(th), alpha(C('line'), 0.8), { w: 2.5 });
    arcAt(ctx, ax, th);
    hits.length = 0;
    [[PI / 6], [(5 * PI) / 6]].forEach(([t]) => { const [x, y] = F.polar.xy(f(t), t); dot(ctx, ax.X(x), ax.Y(y), pc, true, 8); hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `the curves meet at θ = ${t < 1 ? 'π/6' : '5π/6'}, r = 3` }); });
    dot(ctx, ax.X(0), ax.Y(0), pc, true, 8); hits.push({ x: ax.X(0), y: ax.Y(0), r: 14, name: 'the pole: both curves pass through it, for different values of θ' });
    const [cx, cy] = F.polar.xy(f(1.1), 1.1), [gx, gy] = F.polar.xy(g(3.6), 3.6);
    label(ctx, 'r = 6 sin θ', ax.X(cx), ax.Y(cy), { side: 'right', size: 20, color: c6, gap: 14 });
    label(ctx, 'r = 2 + 2 sin θ', ax.X(gx), ax.Y(gy), { side: 'left', size: 20, color: c2, gap: 14 });
    headline(ctx, th >= (5 * PI) / 6 - 0.005 ? 'θ = 5π/6: the area between them is 4π ≈ 12.57' : `θ = ${fmt(th, 2)}: the area swept between them is ${fmt(A, 2)}`);
    ro.set(`${I('\\kA')}=\\frac{1}{2}\\int_{\\pi/6}^{${n(th)}}[6\\sin ${TH('\\theta')}]^{2}d${TH('\\theta')}-\\frac{1}{2}\\int_{\\pi/6}^{${n(th)}}[2+2\\sin ${TH('\\theta')}]^{2}d${TH('\\theta')}=${n(outer, 3)}-${n(inner, 3)}=${I(n(A, 3))}`);
  }
  still(d, draw);
})();

/* Sim: the length of the cardioid r = 2 + 2 cos θ traced from 0 (Example 11.18); window x −1.6 to 4.6, y ±3.2 */
(function () {
  const d = sim('sim-polar-arc-length', 520);
  const f = (t) => 2 + 2 * Math.cos(t);
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: PI, unit: '', dec: 2, aria: 'angle theta', specials: [{ at: PI }, { at: TAU }] });
  const G = F.polar.grip(d, { t: ts, at: F.polar.of(f), span: PI / 2 }), ro = readout(d);
  const L = (t) => (t <= PI ? 8 * Math.sin(t / 2) : 16 - 8 * Math.sin(t / 2));
  const WIN = { x: [-1.6, 4.6], y: [-3.2, 3.2] }, BOX = fit(WIN, 100, 490);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = F.polar.frame(ctx, BOX, WIN, { spokes: 12, angles: false }), th = ts.v, r = f(th), dr = -2 * Math.sin(th), ic = C('integral');
    F.polar.curve(ctx, ax, f, [0, TAU], C('curve'), { faint: 0, w: 3 });
    if (th > 0.005) F.polar.curve(ctx, ax, f, [0, th], ic, { faint: 0, w: 7 });
    F.polar.ray(ctx, ax, th, r, alpha(C('line'), 0.8), { w: 2.5 });
    arcAt(ctx, ax, th);
    G.draw(ctx, ax, C('point'));
    headline(ctx, `θ = ${fmt(th, 2)}: the curve traced so far is ${fmt(L(th), 2)} long, of 16`);
    ro.set(`${I('\\kL')}(${TH('\\theta')})=\\int_0^{${n(th)}}\\sqrt{r^{2}+\\left(\\frac{dr}{d${TH('\\theta')}}\\right)^{2}}\\,d${TH('\\theta')}=${I(n(L(th), 3))}\\qquad \\sqrt{r^{2}+(dr/d${TH('\\theta')})^{2}}=\\sqrt{${n(r)}^{2}+(${n(dr)})^{2}}=${n(Math.hypot(r, dr))}`);
  }
  still(d, draw);
})();
};
