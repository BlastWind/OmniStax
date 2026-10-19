/* Figures for section 5.2 Higher-order eigenvalue problems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, cycle, fixed, pinned, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(Math.abs(v) < 0.5 * 10 ** -dec ? 0 : v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const run = (d, T, rate, draw, hold = 1.2) => { const cy = cycle(T, hold); register(d.fig, { update: (dt) => cy.step(dt, rate), draw: () => draw(REDUCED ? T() : cy.now()) }); return cy; };
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });
const freq = (s) => `\\htmlClass{kv-frequency}{${s}}`;
const PI2 = Math.PI * Math.PI;
/* a stroked polyline through canvas points */
const path = (ctx, pts, color, w, dash) => {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
};
/* a hinge: a pin at (x, y) on a triangle standing on a hatched footing */
const hinge = (ctx, x, y) => {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 20, y + 38); ctx.lineTo(x + 20, y + 38); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  fixed(ctx, x - 36, y + 38, 72, 14);
};
const pinHead = (ctx, x, y) => { dot(ctx, x, y, PAL.panel, true, 8); dot(ctx, x, y, PAL.ink, false, 8); };

/* Figure 5.2: the hinged beam of (5.5), length 1, moving as y(x, t) = Σ bₙ sin(nπx) cos(n²π²a²t). Released from rest
   from Example 5.2.1's f(x) = x(x − 1)/10 (bₙ = −4/(5π³n³) for odd n, the series cut at n = 29, within 6 × 10⁻⁶ of f) or
   from one mode −0.025 sin(nπx), n = 1, 2, 3, the same 0.025 as f's sag at the middle. |y| never passes Σ|bₙ| = 0.0272,
   so the scene draws y six times taller (rule 28.4): x = 0 to 1 is 880 units, y 5280 units per unit, at most 144 units
   from the rest line at 250. Moving: t runs from 0 to 0.7 in 5 s (one fundamental period 2/(πa²) is 0.64 at a = 1); the
   graph is y(1/4, t) over that window by −0.03 to 0.03. A change of motion bends the beam from one motion into the next. */
(function () {
  const d = sim('sim-beam-vibration', 720);
  const T = 0.7, MAG = 6, X0 = 260, X1 = 1140, LEN = X1 - X0, REST = 250, YS = LEN * MAG, AMP = -0.025, Q = 0.25;
  const BOX = { l: 200, r: 1250, t: 470, b: 670 };
  const EX = []; for (let k = 1; k <= 29; k += 2) EX.push([k, -4 / (5 * Math.PI ** 3 * k ** 3)]);
  const TERMS = { ex: EX, m1: [[1, AMP]], m2: [[2, AMP]], m3: [[3, AMP]] };
  const motion = choice(d.controls, { label: '\\text{motion}', key: 'motion', value: 'ex', options: [
    { value: 'ex', label: 'Example 5.2.1' }, { value: 'm1', label: 'Mode 1' }, { value: 'm2', label: 'Mode 2' }, { value: 'm3', label: 'Mode 3' }], onInput: () => cy.reset() });
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 1.5, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the constant a of the beam equation', onInput: () => cy.reset() });
  const ro = readout(d);
  const Y = (v, x, t, a) => TERMS[v].reduce((s, [k, b]) => s + b * Math.sin(k * Math.PI * x) * Math.cos(k * k * PI2 * a * a * t), 0);
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, () => T, () => T / 5, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, a = aS.v, v = motion.value;
    const y = (x, s) => motion.mix((w) => Y(w, x, s, a));
    const px = (x) => X0 + x * LEN, py = (u) => REST - u * YS;
    const shape = (s) => Array.from({ length: 121 }, (_, i) => { const x = i / 120; return [px(x), py(y(x, s))]; });
    /* the scene: the rest line, the release shape, the hinges, the beam and the point x = 1/4 */
    line(ctx, X0 - 50, REST, X1 + 50, REST, guide(), 2, [4, 8]);
    path(ctx, shape(0), alpha(fc, 0.45), 3, [10, 10]);
    hinge(ctx, X0, REST); hinge(ctx, X1, REST);
    path(ctx, shape(t), fc, 10);
    pinHead(ctx, X0, REST); pinHead(ctx, X1, REST);
    text(ctx, 'x = 0', X0, REST + 78, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'x = 1', X1, REST + 78, PAL.muted, { size: 17, align: 'center' });
    const qx = px(Q), qy = py(y(Q, t));
    line(ctx, qx, REST - 160, qx, REST + 160, guide(), 2, [4, 8]);
    text(ctx, 'x = 1/4', qx + 10, REST + 150, PAL.muted, { size: 17, align: 'left' });
    dot(ctx, qx, qy, fc, true, 9);
    /* the graph of y(1/4, t), faint over the window and solid up to t; the fundamental period marked where it fits */
    const ax = axes(ctx, BOX, [0, T], [-0.03, 0.03], { xl: 't', yl: 'y(1/4, t)', yc: fc, nx: 7, ny: 6, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 2) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    const per = 2 / (Math.PI * a * a);
    if (per <= T) {
      line(ctx, ax.X(per), ax.box.t, ax.X(per), ax.box.b, guide(), 2, [4, 8]);
      text(ctx, `one period of mode 1, 2/(πa^2) = ${n(per)}`, ax.X(per) - 8, ax.box.t - 14, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    }
    const g = (s) => y(Q, s);
    plot(ctx, ax, g, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, g, fc, { w: 5, x: [0, t] });
    const P = pinned(ctx, ax.box, ax.X, ax.Y, t, g(t), fc);
    const now = Y(v, Q, t, a), k = v === 'ex' ? 1 : +v[1], f1 = PI2 * a * a, fk = k * k * f1;
    hits = [
      { x: px(0.5), y: py(y(0.5, t)), r: 30, name: `the beam, y(x, t), drawn ${MAG} times taller than it is` },
      { x: px(0.62), y: py(y(0.62, 0)), r: 18, name: 'the shape the beam is released from, y(x, 0)' },
      { x: X0, y: REST + 20, r: 26, name: 'the hinge at x = 0: y(0, t) = y_xx(0, t) = 0' }, { x: X1, y: REST + 20, r: 26, name: 'the hinge at x = 1: y(1, t) = y_xx(1, t) = 0' },
      { x: qx, y: qy, r: 16, name: `the point x = 1/4 of the beam, y = ${n(now, 4)}` },
      { x: P.x, y: P.y, r: 14, name: `y(1/4, ${n(t, 3)}) = ${n(now, 4)}` }];
    if (per <= T) hits.push({ x: ax.X(per), y: ax.box.t + 30, r: 14, name: `t = 2/(πa²) = ${n(per)}, one period of the fundamental π²a² = ${n(f1)}` });
    const head = {
      ex: `Released from $\\kf(x) = \\frac{x(x-1)}{10}$ at $a = ${n(a)}$: nearly all the swing is mode 1, at the fundamental $${freq(`\\pi^2a^2 = ${n(f1)}`)}$; mode 3 starts $27$ times smaller.`,
      m1: `Mode 1 at $a = ${n(a)}$: the beam swings as one arch at the fundamental $${freq(`\\pi^2a^2 = ${n(f1)}`)}$.`,
      m2: `Mode 2 at $a = ${n(a)}$: the beam swings at $${freq(`4\\pi^2a^2 = ${n(fk)}`)}$, four times the fundamental, about a node at $x = \\frac12$.`,
      m3: `Mode 3 at $a = ${n(a)}$: the beam swings at $${freq(`9\\pi^2a^2 = ${n(fk)}`)}$, nine times the fundamental, about nodes at $x = \\frac13$ and $\\frac23$.`,
    }[v];
    headline(ctx, head);
    const form = v === 'ex'
      ? `\\ky(x,t) = \\sum_{n\\ \\mathrm{odd}} \\frac{-4}{5\\pi^3 n^3}\\sin(n\\pi x)\\cos(${freq(`${n(f1)}\\,n^2`)}\\,t)`
      : `\\ky(x,t) = -0.025\\sin(${k === 1 ? '' : k}\\pi x)\\cos(${freq(n(fk))}\\,t)`;
    ro.set(`${form},\\quad \\ky(\\tfrac{1}{4}, ${n(t, 3)}) = ${n(now, 4)}`, `The scene draws $\\ky$ ${MAG} times taller than it is.`, { form: v, values: false });
  });
})();

/* Sim: the beam's ladder of natural frequencies beside a string's. Both are released from one shape, so both carry the
   same sine coefficients bₙ: Example 5.2.1's x(x − 1)/10 (bₙ = −4/(5π³n³), odd n), or a pluck of height 0.025 at p = 1/2 or
   p = 1/4 (bₙ = 2h sin(nπp)/(n²π² p(1 − p))). The string is tuned so its fundamental is the beam's π²a², so the beam's
   rungs stand at n² and the string's at n times it. Frequency axis 0 to 26 times π²a² (the beam's n = 1 to 5 and the
   string's n = 1 to 26); rung heights |bₙ| / |b₁|, 0 to 1. Still: a change of shape bends the rungs to their new heights. */
(function () {
  const d = sim('sim-beam-timbre', 600);
  const NMAX = 26, H0 = 0.025;
  const pluck = (k, p) => (2 * H0 * Math.sin(k * Math.PI * p)) / (k * k * PI2 * p * (1 - p));
  const B = { ex: (k) => (k % 2 ? -4 / (5 * Math.PI ** 3 * k ** 3) : 0), mid: (k) => pluck(k, 0.5), quarter: (k) => pluck(k, 0.25) };
  const rel = (v, k) => { const r = Math.abs(B[v](k) / B[v](1)); return r < 1e-9 ? 0 : r; };
  const HEIGHTS = {}; Object.keys(B).forEach((v) => { HEIGHTS[v] = Array.from({ length: NMAX }, (_, i) => rel(v, i + 1)); });
  const shape = choice(d.controls, { label: '\\text{shape}', key: 'shape', value: 'ex', options: [
    { value: 'ex', label: 'Example 5.2.1' }, { value: 'mid', label: 'pluck at 1/2' }, { value: 'quarter', label: 'pluck at 1/4' }] });
  const ro = readout(d);
  const TOP = { l: 220, r: 1250, t: 140, b: 300 }, BOT = { l: 220, r: 1250, t: 390, b: 550 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('frequency'), sc = C('sequence'), rb = F.ref('beam'), rs = F.ref('string'), v = shape.value;
    const h = shape.mix((w) => HEIGHTS[w]);
    hits = [];
    const panel = (box, title, color, rungs, who) => {
      const ax = axes(ctx, box, [0, NMAX], [0, 1], { xl: who === 'the string' ? 'angular frequency ÷ π^2a^2' : '', xc: qc, yl: '', nx: 0, ny: 2, fy: (u) => fmt(u, 1) });
      if (who === 'the string') for (let m = 0; m <= 25; m += 5) text(ctx, String(m), ax.X(m), box.b + 22, PAL.muted, { size: 17, align: 'center' });
      text(ctx, title, box.l, box.t - 26, color, { size: 20, weight: 600, align: 'left', tex: true, bg: PAL.panel });
      rungs.forEach(([k, at]) => {
        const r = h[k - 1], x = ax.X(at);
        if (r > 0.004) {
          ctx.save(); ctx.fillStyle = alpha(color, 0.85); ctx.fillRect(x - 7, ax.Y(r), 14, ax.Y(0) - ax.Y(r)); ctx.restore();
        } else dot(ctx, x, ax.Y(0), color, false, 6);
        hits.push({ x, y: ax.Y(Math.max(r, 0.04)), r: 12, name: `${who}, n = ${k}: angular frequency ${at === 1 ? '' : at}π²a²${r > 0 ? `, |bₙ|/|b₁| = ${fmt(r, 3)}` : ', bₙ = 0, silent'}` });
      });
      return ax;
    };
    const beamRungs = [1, 2, 3, 4, 5].map((k) => [k, k * k]);
    const stringRungs = Array.from({ length: NMAX }, (_, i) => [i + 1, i + 1]);
    const A = panel(TOP, `the beam: rungs at $${freq('n^2\\pi^2a^2')}$`, rb, beamRungs, 'the beam');
    panel(BOT, `the string: rungs at $${freq('n\\pi^2a^2')}$`, rs, stringRungs, 'the string');
    beamRungs.forEach(([k, at]) => text(ctx, `n = ${k}`, A.X(at), TOP.b + 22, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, '|b_n| / |b_1|', 60, (TOP.t + TOP.b) / 2, sc, { size: 20, weight: 600, align: 'left' });
    text(ctx, '|b_n| / |b_1|', 60, (BOT.t + BOT.b) / 2, sc, { size: 20, weight: 600, align: 'left' });
    const now = HEIGHTS[v], beamOn = beamRungs.filter(([k]) => now[k - 1] > 0).map(([, at]) => at), stringOn = now.filter((r) => r > 0).length;
    const name = { ex: 'Released from $\\frac{x(x-1)}{10}$', mid: 'Plucked at the middle', quarter: 'Plucked at $x = \\frac14$' }[v];
    const list = beamOn.length > 1 ? `${beamOn.slice(0, -1).join(', ')} and ${beamOn[beamOn.length - 1]}` : String(beamOn[0]);
    headline(ctx, `${name}: up to $26$ times the fundamental, the beam sounds ${beamOn.length} rungs (${list} times $${freq('\\pi^2a^2')}$) and the string ${stringOn}.`);
    const coef = {
      ex: '\\kbn = \\frac{-4}{5\\pi^3 n^3}\\ (n\\ \\text{odd}),\\ 0\\ (n\\ \\text{even})',
      mid: '\\kbn = \\frac{0.2\\sin(n\\pi/2)}{n^2\\pi^2}',
      quarter: '\\kbn = \\frac{0.8\\sin(n\\pi/4)}{3n^2\\pi^2}',
    }[v];
    ro.set(`${coef},\\qquad \\frac{|\\kbn|}{|b_1|} = ${now.slice(0, 6).map((r) => n(r)).join(',\\ ')},\\ \\ldots`, 'The heights are the same in both ladders; only the frequencies differ.', { form: v });
  }
  still(d, draw);
})();

/* Sim: the end x = 0 of a beam, hinged, free or clamped. The beam near the end is drawn as a polynomial that meets the
   end's two conditions and leaves the drawn piece level at x = 1 with y = −2/3 (in units of 210 canvas units), so the
   three shapes differ only near the end: hinged y = −x + x³/3 (y = y_xx = 0 at 0, slope −1), free
   y = 11/24 − 3x/2 + 3x⁴/8 (y_xx = y_xxx = 0 at 0, the end raised 11/24 and tilted), clamped y = −2x² + 4x³/3
   (y = y_x = 0 at 0). x = 0 to 1 is 780 units from the end at 420. Still: a change of end bends the beam into the next shape
   and swaps the support; the slope y_x(0, t) is the short tangent at the end. */
(function () {
  const d = sim('sim-beam-ends', 500);
  const COEF = { hinged: [0, -1, 0, 1 / 3, 0], free: [11 / 24, -1.5, 0, 0, 3 / 8], clamped: [0, 0, -2, 4 / 3, 0] };
  const pick = choice(d.controls, { label: '\\text{end}', key: 'end', value: 'hinged', options: [
    { value: 'hinged', label: 'hinged' }, { value: 'free', label: 'free' }, { value: 'clamped', label: 'clamped' }] });
  const ro = readout(d);
  const EX = 420, LEN = 780, Y0 = 270, S = 210;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), ink = PAL.ink, v = pick.value;
    const c = pick.mix((w) => COEF[w]);
    const y = (x) => c[0] + c[1] * x + c[2] * x * x + c[3] * x ** 3 + c[4] * x ** 4;
    const px = (x) => EX + x * LEN, py = (u) => Y0 - u * S;
    line(ctx, EX - 120, Y0, px(1) + 130, Y0, guide(), 2, [4, 8]);
    text(ctx, 'y = 0', px(1) + 130, Y0 - 16, PAL.muted, { size: 17, align: 'right' });
    /* the supports: a wall the clamped end is welded into, a hinge under the hinged end; the free end has none */
    pick.only(ctx, 'clamped', () => fixed(ctx, EX - 70, Y0 - 150, 70, 300), [-12, 0]);
    pick.only(ctx, 'hinged', () => hinge(ctx, EX, Y0), [0, 12]);
    /* the beam, its piece beyond x = 1 dashed and faint */
    const pts = Array.from({ length: 101 }, (_, i) => [px(i / 100), py(y(i / 100))]);
    path(ctx, [[px(1), py(y(1))], [px(1) + 120, py(y(1))]], alpha(fc, 0.4), 10, [14, 12]);
    path(ctx, pts, fc, 12);
    pick.only(ctx, 'hinged', () => pinHead(ctx, EX, Y0), [0, 12]);
    /* the slope at the end, a short tangent */
    const s = c[1] * S / LEN, u = 1 / Math.hypot(1, s), ex = EX, ey = py(c[0]);
    line(ctx, ex - 70 * u, ey + 70 * u * s, ex + 190 * u, ey - 190 * u * s, dc, 4);
    mark(ctx, '$\\kyx$', ex + 200 * u + 26, ey - 200 * u * s, dc, { align: 'left' });
    dot(ctx, ex, ey, fc, true, 9);
    text(ctx, 'x = 0', EX, Y0 + 90, PAL.muted, { size: 17, align: 'center' });
    hits = [
      { x: px(0.6), y: py(y(0.6)), r: 26, name: 'the beam near its end, y(x, t) at one instant' },
      { x: ex, y: ey, r: 16, name: `the end x = 0, displaced y(0, t) = ${n(c[0], 2)} (in the drawing's units)` },
      { x: ex + 120 * u, y: ey - 120 * u * s, r: 16, name: `the slope y_x(0, t) = ${n(c[1], 2)} (in the drawing's units)` }];
    if (v === 'hinged') hits.push({ x: EX, y: Y0 + 24, r: 26, name: 'the hinge: a pin that holds the end in place and lets it turn' });
    if (v === 'clamped') hits.push({ x: EX - 35, y: Y0 - 90, r: 30, name: 'the wall the end is welded into' });
    headline(ctx, {
      hinged: 'Hinged at $x = 0$: the pin holds the end in place, $\\ky(0,t) = 0$, but lets it turn, and $\\kyxx(0,t) = 0$.',
      free: 'Free at $x = 0$: nothing holds the end, so it may move and tilt, and $\\kyxx(0,t) = \\kyxxx(0,t) = 0$.',
      clamped: 'Clamped at $x = 0$: the wall holds the end in place and level, $\\ky(0,t) = \\kyx(0,t) = 0$.',
    }[v]);
    const T = { y: '\\mk{y}{\\ky(0,t)}', yx: '\\mk{yx}{\\kyx(0,t)}', yxx: '\\mk{yxx}{\\kyxx(0,t)}', yxxx: '\\mk{yxxx}{\\kyxxx(0,t)}' };
    const held = { hinged: ['y', 'yxx'], free: ['yxx', 'yxxx'], clamped: ['y', 'yx'] }[v];
    const loose = ['y', 'yx', 'yxx', 'yxxx'].filter((k) => !held.includes(k));
    ro.set(`${T[held[0]]} = ${T[held[1]]} = 0, \\qquad \\text{not held: } ${T[loose[0]]},\\ ${T[loose[1]]}`, undefined, { form: v });
  }
  still(d, draw);
})();
};
