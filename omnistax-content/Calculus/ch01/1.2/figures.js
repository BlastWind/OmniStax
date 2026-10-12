/* Figures for section 1.2 Basic Classes of Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, tex, fmt, cycle, hover, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX, trailing zeros dropped and a minus as TeX writes one */
const num = (v, dec = 2) => String(+v.toFixed(dec) || 0);
const par = (v, dec = 2) => (v < 0 ? `(${num(v, dec)})` : num(v, dec));
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const near = (a, b) => Math.abs(a - b) < 1e-9;
/* a polyline in graph units, clipped to the axes' box and drawn along its length on arrival */
const poly = (ctx, d, ax, pts, color, w = 5, dash) => {
  const q = F.arrival(d), all = pts.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y)).map(([x, y]) => [ax.X(x), ax.Y(Math.max(-1e7, Math.min(1e7, y)))]);
  const shown = q < 1 ? F.partial(all, F.ease.smooth(Math.max(0, (q - 0.3) / 0.7))) : all;
  if (shown.length < 2) return;
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l - 6, ax.box.t - 6, ax.box.r - ax.box.l + 12, ax.box.b - ax.box.t + 12); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); shown.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
};
const span = (a, b, n) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* Figure 1.15, a faithful copy: the book's three lines on its −2 to 5 by −2 to 5. */
(function () {
  const d = sim('fig-linear-functions', 470);
  const LINES = [
    { f: (x) => 3 * x + 1, s: '$\\kf(x) = 3x + 1$', at: [1.45, 4.6], align: 'left' },
    { f: () => 2, s: '$\\kg(x) = 2$', at: [3.6, 2.45], align: 'left' },
    { f: (x) => -x / 2, s: '$\\kh(x) = -\\tfrac{1}{2}x$', at: [3.2, -1.25], align: 'left' },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 410 }, [-2, 5], [-2, 5], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    LINES.forEach((l, i) => {
      plot(ctx, ax, l.f, F.cat(i));
      text(ctx, l.s, ax.X(l.at[0]), ax.Y(l.at[1]), F.cat(i), { size: 24, weight: 600, align: l.align, tex: true, bg: PAL.panel });
    });
  }
  still(d, draw);
})();

/* Figure 1.16: the line through (3, 5) at slope m, the reader's triangle from x₁ to x₂ and the book's
   from 2 to 5. Axes fixed at −1 to 6 by −4 to 14, which hold the line at every slope from −2 to 2. */
(function () {
  const d = sim('sim-slope', 560);
  const PX = 3, PY = 5, GAP = 0.5;
  const m = ctl(d.controls, { label: '\\km', cls: 'derivative', key: 'm', min: -2, max: 2, step: 0.1, value: 2, unit: '', dec: 1, specials: [{ at: 0 }] });
  const x1 = ctl(d.controls, { label: 'x_1', cls: '', key: 'x1', min: -1, max: 6 - GAP, step: 0.1, value: 1, unit: '', dec: 1, onInput: () => { if (x2.v < x1.v + GAP) x2.set(x1.v + GAP); } });
  const x2 = ctl(d.controls, { label: 'x_2', cls: '', key: 'x2', min: -1 + GAP, max: 6, step: 0.1, value: 3, unit: '', dec: 1, onInput: () => { if (x1.v > x2.v - GAP) x1.set(x2.v - GAP); } });
  const f = (x) => PY + m.v * (x - PX);
  const P1 = drag(d, { x: x1, y: f }), P2 = drag(d, { x: x2, y: f });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 330, r: 1070, t: 90, b: 500 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), mv = m.v, a = x1.v, b = x2.v, ya = f(a), yb = f(b);
    const ax = axes(ctx, BOX, [-1, 6], [-4, 14], { xl: 'x', yl: 'y', nx: 7, ny: 9 });
    plot(ctx, ax, f, fc);
    const legs = (p, q, color, w, dash) => { line(ctx, ax.X(p), ax.Y(f(p)), ax.X(q), ax.Y(f(p)), color, w, dash); line(ctx, ax.X(q), ax.Y(f(p)), ax.X(q), ax.Y(f(q)), color, w, dash); };
    legs(2, 5, alpha(PAL.ink, 0.35), 2.5, [4, 8]);
    [2, 5].forEach((x) => dot(ctx, ax.X(x), ax.Y(f(x)), pc, false, 8));
    legs(a, b, alpha(PAL.ink, 0.7), 3, [10, 10]);
    const below = yb >= ya;
    text(ctx, 'Δx', ax.X((a + b) / 2), ax.Y(ya) + (below ? 24 : -24), PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    if (Math.abs(ax.Y(yb) - ax.Y(ya)) > 30) text(ctx, 'Δy', ax.X(b) + 14, ax.Y(ya + 0.35 * (yb - ya)), PAL.ink, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    P1.draw(ctx, ax, pc); P2.draw(ctx, ax, pc);
    hits = [[a, ya], [b, yb], [2, f(2)], [5, f(5)]].map(([x, y]) => ({ x: ax.X(x), y: ax.Y(y), r: 18, name: `(${fmt(x, 1)}, ${fmt(y, 2)})` }));
    headline(ctx, mv > 0 ? `$\\km = ${num(mv, 1)} > 0$: the line points upward from left to right.` : mv < 0 ? `$\\km = ${num(mv, 1)} < 0$: the line points downward from left to right.` : '$\\km = 0$: the line is horizontal.');
    ro.set(`\\km = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{${num(yb)} - ${par(ya)}}{${num(b, 1)} - ${par(a, 1)}} = ${num(mv, 1)} = \\dfrac{${num(f(5))} - ${par(f(2))}}{5 - 2}`);
  }
  still(d, draw);
})();

/* Figure 1.17, a faithful copy: the line through (−4, 5) and (11, −4) on the book's −5 to 12 by −5 to 6. */
(function () {
  const d = sim('fig-two-point-line', 470);
  const f = (x) => (-3 / 5) * x + 13 / 5;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const ax = axes(ctx, { l: 230, r: 1170, t: 40, b: 410 }, [-5, 12], [-5, 6], { xl: 'x', yl: 'y', nx: 17, ny: 11 });
    plot(ctx, ax, f, fc);
    dot(ctx, ax.X(-4), ax.Y(5), pc, true, 10); dot(ctx, ax.X(11), ax.Y(-4), pc, true, 10);
    label(ctx, '(−4, 5)', ax.X(-4), ax.Y(5), { side: 'right', gap: 22 });
    label(ctx, '(11, −4)', ax.X(11), ax.Y(-4), { side: 'above', gap: 30 });
  }
  still(d, draw);
})();

/* Example 1.13: Jessica's 78 minutes on a strip of distance run, above D(t) = 3t/26 on 0 to 80 min by
   0 to 10 mi. */
(function () {
  const d = sim('sim-jessica-run', 640);
  const END = 78, D = (t) => (3 * t) / 26, LAP = 13;
  const cy = cycle(() => END, 1.2);
  const SL = 220, SR = 1220, SY = 170, XS = (mi) => SL + ((SR - SL) * mi) / 9;
  const BOX = { l: 220, r: 1220, t: 350, b: 570 };
  const clock = (t) => { const mins = 5 * 60 + 50 + Math.floor(t + 1e-9); return `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')} a.m.`; };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), t = cy.now(), dist = D(t), tm = Math.floor(t + 1e-9), laps = Math.floor(tm / LAP);
    headline(ctx, `${clock(t)}, t = ${tm} min: Jessica has run ${fmt(D(tm), 2)} mi.`);
    F.strip(ctx, SL, SR, SY, 48);
    ctx.save(); ctx.fillStyle = alpha(fc, 0.3); ctx.fillRect(SL, SY - 24, XS(dist) - SL, 48); ctx.restore();
    F.scale(ctx, XS, 0, 9, 1, SY + 34, '', 1);
    text(ctx, 'distance run (mi)', SL - 20, SY, PAL.ink, { size: 20, weight: 600, align: 'right' });
    for (let k = 1; k <= laps; k++) line(ctx, XS(1.5 * k), SY - 24, XS(1.5 * k), SY + 24, pc, 4);
    if (laps >= 1) F.hbracket(ctx, XS(1.5 * (laps - 1)), XS(1.5 * laps), SY + 84, PAL.ink, '1.5 mi in 13 min', { side: 'below' });
    F.runner(ctx, XS(dist), SY - 42, PAL.ink, t * 1.4);
    const ax = axes(ctx, BOX, [0, 80], [0, 10], { xl: 't, time in minutes', yl: 'D(t), distance in miles', yc: fc, nx: 8, ny: 5 });
    plot(ctx, ax, D, alpha(fc, 0.25), { x: [0, END] });
    if (t > 0) plot(ctx, ax, D, fc, { x: [0, t] });
    for (let k = 1; k <= laps; k++) dot(ctx, ax.X(LAP * k), ax.Y(D(LAP * k)), pc, true, 7);
    drop(ctx, ax.X(t), ax.Y(dist), ax.X(t), ax.Y(0));
    dot(ctx, ax.X(t), ax.Y(dist), pc, true, 9);
    if (t >= END) label(ctx, '(78, 9)', ax.X(END), ax.Y(9), { side: 'left', gap: 24 });
    tex(d.readout, `D(${tm}) = \\tfrac{3}{26}\\cdot ${tm} ${near(D(tm) * 100, Math.round(D(tm) * 100)) ? '=' : '\\approx'} ${num(D(tm))} \\qquad \\km = \\tfrac{3}{26} \\approx 0.115`, false, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => END / 5), draw });
})();

/* Figure 1.18: the book's pairs x², x⁴ and x³, x⁵, each point with its partner at −x. Axes fixed at
   −3 to 3 by −6 to 6; a point past the box is pinned at its edge. */
(function () {
  const d = sim('sim-power-functions', 540);
  const PAIR = { a: [2, 4], b: [3, 5] }, REF = { 2: 'pow-2', 3: 'pow-3', 4: 'pow-4', 5: 'pow-5' };
  const pick = choice(d.controls, { label: '', key: 'panel', options: [{ value: 'a', label: '(a) n even' }, { value: 'b', label: '(b) n odd' }], value: 'a', aria: 'which pair' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2, max: 2, step: 0.01, value: 1.2, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: (x) => x ** PAIR[pick.value][0] });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 90, b: 480 };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('point'), k = pick.k, x = xs.v;
    const ax = axes(ctx, BOX, [-3, 3], [-6, 6], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    [0, 1].forEach((i) => {
      const pa = PAIR[pick.from][i], pb = PAIR[pick.value][i], color = pick.mixColor((v) => F.ref(REF[PAIR[v][i]]));
      plot(ctx, ax, (t) => t ** pa + (t ** pb - t ** pa) * k, color);
      const [lx, ly] = pick.mix((v) => { const r = 5.6 ** (1 / PAIR[v][i]); return i ? [-r, v === 'a' ? 5.6 : -5.6] : [r, 5.6]; });
      text(ctx, `$y = x^{${pb}}$`, ax.X(lx) + 16, ax.Y(ly), color, { size: 24, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    });
    PAIR[pick.value].forEach((p, i) => {
      const y = x ** p, ym = (-x) ** p, X = ax.X, Y = ax.Y;
      const inside = (v) => v >= -6 && v <= 6;
      if (inside(y) && inside(ym)) line(ctx, X(x), Y(y), X(-x), Y(ym), alpha(PAL.ink, 0.45), 2.5, [10, 10]);
      if (inside(ym)) dot(ctx, X(-x), Y(ym), pc, false, 9);
      if (i === 0) P.draw(ctx, ax, pc); else pinned(ctx, ax.box, X, Y, x, y, pc);
    });
    const [p, q] = PAIR[pick.value], even = pick.value === 'a';
    headline(ctx, even ? '(a) n even: each partner at −x sits at the same height as its point.' : '(b) n odd: each partner at −x sits at the opposite height.');
    const one = (n) => (even ? `(${num(-x)})^${n} = ${num((-x) ** n)} = (${num(x)})^${n}` : `(${num(-x)})^${n} = ${num((-x) ** n)} = -(${num(x)})^${n}`);
    ro.set(`${one(p)},\\qquad ${one(q)}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 1.19: the book's parabolas (a) and cubics (b) beside their leading terms, in a window the choice
   widens tenfold twice: x by 10 and y by 10ⁿ, so a leading term axⁿ keeps its shape. */
(function () {
  const d = sim('sim-end-behavior', 560);
  const PANEL = {
    a: { W0: 6, Y0: 8, n: 2, word: 'parabola', curves: [
      { f: (x) => 2 * x * x - 12 * x + 18, lead: (x) => 2 * x * x, ref: 'quad-up', s: '2x^2-12x+18', l: '2x^2', at: 'tr' },
      { f: (x) => -x * x - 4 * x - 4, lead: (x) => -x * x, ref: 'quad-down', s: '-x^2-4x-4', l: '-x^2', at: 'br' }] },
    b: { W0: 4, Y0: 6, n: 3, word: 'cubic', curves: [
      { f: (x) => x ** 3 - 3 * x * x + 3 * x - 1, lead: (x) => x ** 3, ref: 'cubic-up', s: 'x^3-3x^2+3x-1', l: 'x^3', at: 'tr' },
      { f: (x) => -(x ** 3) - 3 * x * x + x + 3, lead: (x) => -(x ** 3), ref: 'cubic-down', s: '-x^3-3x^2+x+3', l: '-x^3', at: 'tl' }] },
  };
  const winOpts = (p) => ['1', '10', '100'].map((v) => ({ value: v, label: `|x| ≤ ${PANEL[p].W0 * +v}` }));
  const panel = choice(d.controls, { label: '', key: 'panel', options: [{ value: 'a', label: '(a) quadratic' }, { value: 'b', label: '(b) cubic' }], value: 'a', aria: 'which pair', onInput: (v) => win.options(winOpts(v)) });
  const win = choice(d.controls, { label: '\\text{window}', key: 'window', options: winOpts('a'), value: '1', ms: 1400 });
  const ro = readout(d);
  const BOX = { l: 250, r: 1150, t: 90, b: 480 };
  const big = (v) => { if (Math.abs(v) < 1e4 || v === 0) return fmt(v, Math.abs(v) < 10 && v % 1 ? 1 : 0); const e = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / 10 ** e; return `${fmt(m, Number.isInteger(+m.toFixed(6)) ? 0 : 1)}·10^${e}`; };
  function draw() {
    const { ctx } = begin(d.c);
    const pk = panel.k, P = PANEL[panel.value], Pf = PANEL[panel.from];
    const s = Math.exp(win.mix((v) => Math.log(+v)));
    const W = panel.mix((v) => PANEL[v].W0) * s, Yr = panel.mix((v) => PANEL[v].Y0 * s ** PANEL[v].n);
    const ax = axes(ctx, BOX, [-W, W], [-Yr, Yr], { xl: 'x', yl: 'y', nx: panel.value === 'a' ? 6 : 4, ny: 4, fx: big, fy: big });
    const xs = span(-W, W, 240);
    [0, 1].forEach((i) => {
      const a = Pf.curves[i], b = P.curves[i], color = panel.mixColor((v) => F.ref(PANEL[v].curves[i].ref));
      const blend = (g, h) => (x) => g(x) + (h(x) - g(x)) * pk;
      poly(ctx, d, ax, xs.map((x) => [x, blend(a.lead, b.lead)(x)]), color, 3, [12, 10]);
      plot(ctx, ax, blend(a.f, b.f), color);
    });
    const SPOT = { tr: [BOX.r - 12, BOX.t + 24, 'right'], br: [BOX.r - 12, BOX.b - 24, 'right'], tl: [BOX.l + 12, BOX.t + 24, 'left'] };
    ['a', 'b'].forEach((v) => panel.only(ctx, v, () => PANEL[v].curves.forEach((c) => { const [sx, sy, al] = SPOT[c.at]; text(ctx, `$y = ${c.s}$, dashed $y = ${c.l}$`, sx, sy, F.ref(c.ref), { size: 22, weight: 600, align: al, tex: true, bg: PAL.panel }); })));
    const Wt = P.W0 * +win.value, worst = Math.max(...P.curves.flatMap((c) => [Wt, -Wt].map((x) => Math.abs(c.f(x) / c.lead(x) - 1))));
    headline(ctx, win.value === '1' ? `At the book’s window each ${P.word} still bends away from its leading term.` : `Out to |x| = ${Wt}, each ${P.word} is within ${Math.ceil(worst * 100)}% of its leading term.`);
    ro.set(`x = ${Wt}:\\quad ${P.curves.map((c) => `\\dfrac{${c.s}}{${c.l}} = ${num(c.f(Wt) / c.lead(Wt))}`).join(',\\quad ')}`, undefined, { form: panel.value });
  }
  still(d, draw);
})();

/* Example 1.14: (a) −2x² + 4x + c with its zeros by the quadratic formula, (b) the cubic x(x − 4)(x + 1).
   Axes fixed at −2 to 5, by −8 to 4 for (a) and the book's −14 to 7 for (b). */
(function () {
  const d = sim('sim-polynomial-zeros', 540);
  const part = choice(d.controls, { label: '', key: 'part', options: [{ value: 'a', label: 'a. quadratic' }, { value: 'b', label: 'b. cubic' }], value: 'a', aria: 'which function', onInput: (v) => c.show(v === 'a') });
  const c = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -4, max: 2, step: 0.1, value: -1, unit: '', dec: 1, specials: [{ at: -2 }] });
  const FN = { a: (x) => -2 * x * x + 4 * x + c.v, b: (x) => x ** 3 - 3 * x * x - 4 * x };
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 330, r: 1070, t: 90, b: 480 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), k = part.k, fa = FN[part.from], fb = FN[part.value];
    const [y0, y1] = part.mix((v) => (v === 'a' ? [-8, 4] : [-15, 6]));
    const ax = axes(ctx, BOX, [-2, 5], [y0, y1], { xl: 'x', yl: 'y', nx: 7, ny: part.value === 'a' ? 6 : 7 });
    plot(ctx, ax, (x) => fa(x) + (fb(x) - fa(x)) * k, fc);
    const D = 16 + 8 * c.v, zeros = { a: near(D, 0) ? [1] : D > 0 ? [1 - Math.sqrt(D) / 4, 1 + Math.sqrt(D) / 4] : [], b: [-1, 0, 4] };
    hits = [];
    ['a', 'b'].forEach((v) => part.only(ctx, v, () => zeros[v].forEach((z) => { dot(ctx, ax.X(z), ax.Y(0), pc, true, 10); if (v === part.value) hits.push({ x: ax.X(z), y: ax.Y(0), r: 18, name: `(${fmt(z, 2)}, 0)` }); })));
    const rule = part.value === 'a' ? `$\\kf(x) = -2x^2 + 4x ${c.v < 0 ? '-' : '+'} ${num(Math.abs(c.v), 1)}$` : '$\\kf(x) = x^3 - 3x^2 - 4x$';
    text(ctx, rule, BOX.r - 12, BOX.t + 24, fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    if (part.value === 'b') {
      headline(ctx, 'Factored, $\\kf(x) = x(x - 4)(x + 1)$ is zero at $x = -1$, $0$ and $4$.');
      ro.set('\\kf(x) = x(x-4)(x+1) = 0:\\quad x = -1,\\ 0,\\ 4', undefined, { form: 'b' });
      return;
    }
    headline(ctx, near(D, 0) ? '$b^2 - 4ac = 0$: one zero, at $x = 1$.' : D > 0 ? `$b^2 - 4ac = ${num(D, 1)} > 0$: two real zeros.` : `$b^2 - 4ac = ${num(D, 1)} < 0$: no real zeros.`);
    const head = `x = \\dfrac{-4 \\pm \\sqrt{4^2 - 4(-2)(${num(c.v, 1)})}}{2(-2)} = \\dfrac{-4 \\pm \\sqrt{${num(D, 1)}}}{-4}`;
    ro.set(near(D, 0) ? `${head} = 1` : D > 0 ? `${head} ${zeros.a.every((z) => near(z * 100, Math.round(z * 100))) ? '=' : '\\approx'} ${zeros.a.map((z) => num(z)).join(',\\ ')}` : `${head}:\\ \\sqrt{${num(D, 1)}}\\ \\text{is not a real number}`, undefined, { form: 'a' });
  }
  still(d, draw);
})();

/* Figure 1.20, a faithful copy: Table 1.6 and the model n = −1.04p + 26 on the book's 0 to 28 by 0 to 28. */
(function () {
  const d = sim('fig-units-sold', 470);
  const DATA = [[6, 19.4], [8, 18.5], [10, 16.2], [12, 13.8], [14, 12.2]], n = (p) => -1.04 * p + 26;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point');
    const ax = axes(ctx, { l: 330, r: 1070, t: 50, b: 400 }, [0, 28], [0, 28], { xl: 'p, price in dollars', yl: 'n, units sold in thousands', nx: 7, ny: 7 });
    plot(ctx, ax, [{ f: n, x: [0, 25], ends: '[]' }], fc);
    DATA.forEach(([p, v]) => dot(ctx, ax.X(p), ax.Y(v), pc, true, 8));
    label(ctx, '(0, 26)', ax.X(0), ax.Y(26), { side: 'right', gap: 24 });
    label(ctx, '(25, 0)', ax.X(25), ax.Y(0), { side: 'above', gap: 30 });
    text(ctx, '$n = -1.04p + 26$', ax.X(15), ax.Y(19), fc, { size: 24, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    hits = DATA.map(([p, v]) => ({ x: ax.X(p), y: ax.Y(v), r: 16, name: `(${p}, ${v}): ${v} thousand sold at ${p} dollars` }));
  }
  still(d, draw);
})();

/* Example 1.15: the price p on the demand line with the rectangle p by n under it, and the rectangle's area
   R(p) = p·n below on one p-axis. Axes fixed at the book's 0 to 28 dollars, by 0 to 28 thousand and by
   0 to 175 thousand dollars. */
(function () {
  const d = sim('sim-revenue', 700);
  const n = (p) => -1.04 * p + 26, R = (p) => p * n(p);
  const pr = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 0, max: 25, step: 0.1, value: 12.5, unit: 'dollars', dec: 2, detents: [5, 17], snap: false, specials: [{ at: 12.5 }] });
  const P1 = drag(d, { x: pr, y: n }), P2 = drag(d, { x: pr, y: R });
  const ro = readout(d);
  const TOP = { l: 330, r: 1150, t: 110, b: 310 }, LOW = { l: 330, r: 1150, t: 410, b: 620 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), p = pr.v, np = n(p), rp = R(p);
    headline(ctx, `At ${fmt(p, 2)} dollars, ${fmt(np, 1)} thousand sell: revenue ${fmt(rp, 1)} thousand dollars.`);
    const a1 = axes(ctx, TOP, [0, 28], [0, 28], { yl: 'n, units sold in thousands', nx: 7, ny: 7 });
    ctx.save(); ctx.fillStyle = alpha(fc, 0.16); ctx.fillRect(a1.X(0), a1.Y(np), a1.X(p) - a1.X(0), a1.Y(0) - a1.Y(np)); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(fc, 0.6); ctx.lineWidth = 2; ctx.strokeRect(a1.X(0), a1.Y(np), a1.X(p) - a1.X(0), a1.Y(0) - a1.Y(np)); ctx.restore();
    plot(ctx, a1, [{ f: n, x: [0, 25], ends: '[]' }], fc);
    if (p > 2.5 && np > 3) text(ctx, 'area p · n', (a1.X(0) + a1.X(p)) / 2, (a1.Y(0) + a1.Y(np)) / 2, fc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    P1.draw(ctx, a1, pc);
    const a2 = axes(ctx, LOW, [0, 28], [0, 175], { xl: 'p, price in dollars', yl: 'R, revenue in thousands of dollars', nx: 7, ny: 7 });
    plot(ctx, a2, [{ f: R, x: [0, 25], ends: '[]' }], fc);
    line(ctx, a1.X(p), a1.Y(0), a2.X(p), a2.Y(rp), alpha(PAL.ink, 0.35), 2.5, [4, 8]);
    dot(ctx, a2.X(12.5), a2.Y(162.5), pc, false, 9);
    label(ctx, '(12.5, 162.5)', a2.X(12.5), a2.Y(162.5), { side: 'right', gap: 26 });
    P2.draw(ctx, a2, pc);
    const exact = near(rp * 100, Math.round(rp * 100));
    ro.set(`R(${num(p, 1)}) = ${num(p, 1)}\\cdot(-1.04\\cdot ${num(p, 1)} + 26) ${exact ? '=' : '\\approx'} ${num(rp)}`);
  }
  still(d, draw);
})();

/* Figure 1.21: the book's even roots √x, ∜x (a) and odd roots ∛x, ⁵√x (b) with their domains along the
   x-axis. Axes fixed at −8 to 8 by −3 to 3. */
(function () {
  const d = sim('sim-root-functions', 540);
  const PAIR = { a: [2, 4], b: [3, 5] }, REF = { 2: 'root-2', 3: 'root-3', 4: 'root-4', 5: 'root-5' };
  const SIGN = { 2: '\\sqrt', 3: '\\sqrt[3]', 4: '\\sqrt[4]', 5: '\\sqrt[5]' };
  const root = (x, k) => (k % 2 ? Math.sign(x) * Math.abs(x) ** (1 / k) : x >= 0 ? x ** (1 / k) : NaN);
  const pick = choice(d.controls, { label: '', key: 'panel', options: [{ value: 'a', label: '(a) n even' }, { value: 'b', label: '(b) n odd' }], value: 'a', aria: 'which pair' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -8, max: 8, step: 0.05, value: 4, unit: '', dec: 2, specials: [{ at: 0 }] });
  const P = drag(d, { x: xs, y: (x) => { const r = root(x, PAIR[pick.value][0]); return Number.isFinite(r) ? r : 0; } });
  const ro = readout(d);
  const BOX = { l: 250, r: 1150, t: 90, b: 470 };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('point'), sc = C('set'), x = xs.v, even = pick.value === 'a';
    const ax = axes(ctx, BOX, [-8, 8], [-3, 3], { xl: 'x', yl: 'y', nx: 8, ny: 6 });
    pick.only(ctx, 'a', () => { line(ctx, ax.X(0), ax.Y(0), ax.X(8), ax.Y(0), alpha(sc, 0.35), 12); dot(ctx, ax.X(0), ax.Y(0), sc, true, 8); });
    pick.only(ctx, 'b', () => line(ctx, ax.X(-8), ax.Y(0), ax.X(8), ax.Y(0), alpha(sc, 0.35), 12));
    ['a', 'b'].forEach((v) => pick.only(ctx, v, () => PAIR[v].forEach((k, i) => {
      const color = F.ref(REF[k]);
      plot(ctx, ax, (t) => root(t, k), color);
      const lx = 6, ly = root(lx, k);
      text(ctx, `$y = ${SIGN[k]}{x}$`, ax.X(lx), ax.Y(ly) + (i ? 28 : -28), color, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    })));
    const ks = PAIR[pick.value], ys = ks.map((k) => root(x, k));
    if (Number.isFinite(ys[0])) {
      ys.forEach((y, i) => {
        drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0));
        if (!even && !near(x, 0)) { line(ctx, ax.X(x), ax.Y(y), ax.X(-x), ax.Y(-y), alpha(PAL.ink, 0.4), 2.5, [10, 10]); dot(ctx, ax.X(-x), ax.Y(-y), pc, false, 9); }
        if (i) dot(ctx, ax.X(x), ax.Y(y), pc, true, 9);
      });
      P.draw(ctx, ax, pc);
    } else P.draw(ctx, ax, PAL.ink);
    const dom = typed('set', even ? '[0,\\infty)' : '(-\\infty,\\infty)');
    headline(ctx, even ? (x >= 0 ? `$x = ${num(x)}$ is in the domain $${dom}$ of both even roots.` : `$x = ${num(x)}$ is not in the domain $${dom}$ of an even root.`) : `Odd roots: the domain is $${dom}$, and each partner at $-x$ sits at the opposite height.`);
    const at = (k) => `${SIGN[k]}{${num(x)}} = ${num(root(x, k))}`;
    ro.set(even && x < 0 ? `\\sqrt{${num(x)}}\\ \\text{and}\\ \\sqrt[4]{${num(x)}}\\ \\text{are not real numbers}` : even ? `${at(2)},\\qquad ${at(4)}` : ks.map((k) => `${at(k)} = -${SIGN[k]}{${num(-x)}}`).join(',\\qquad '), undefined, { form: even && x < 0 ? 'out' : pick.value });
  }
  still(d, draw);
})();

/* Figure 1.22: x + 3 for x < 1 and (x − 2)² for x ≥ 1, on the book's −7 to 5 by −4 to 6. */
(function () {
  const d = sim('sim-piecewise', 520);
  const f = (x) => (x < 1 ? x + 3 : (x - 2) ** 2);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -7, max: 5, step: 0.05, value: -1, unit: '', dec: 2, specials: [{ at: 1 }] });
  const P = drag(d, { x: xs, y: f });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 330, r: 1070, t: 90, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), x = xs.v, y = f(x), left = x < 1;
    const ax = axes(ctx, BOX, [-7, 5], [-4, 6], { xl: 'x', yl: 'y', nx: 12, ny: 10 });
    plot(ctx, ax, [{ f: (t) => t + 3, x: [-7, 1], ends: '-)' }, { f: (t) => (t - 2) ** 2, x: [1, 5], ends: '[-' }], fc);
    text(ctx, '$\\kf(x) = x + 3$, for $x < 1$', ax.X(-2.3), ax.Y(3.6), fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x) = (x - 2)^2$, for $x \\ge 1$', ax.X(4.9), ax.Y(5.4), fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0)); drop(ctx, ax.X(x), ax.Y(y), ax.X(0), ax.Y(y));
    P.draw(ctx, ax, pc);
    hits = [{ x: ax.X(1), y: ax.Y(4), r: 16, name: '(1, 4), the open end of x + 3: not on the graph' }, { x: ax.X(1), y: ax.Y(1), r: 16, name: '(1, 1), the closed end: f(1) = 1' }];
    headline(ctx, left ? `$x = ${num(x)} < 1$, so $\\kf(x) = x + 3$.` : near(x, 1) ? '$x = 1 \\ge 1$, so $\\kf(1) = (1 - 2)^2 = 1$, the closed circle.' : `$x = ${num(x)} \\ge 1$, so $\\kf(x) = (x - 2)^2$.`);
    ro.set(left ? `\\kf(${num(x)}) = ${num(x)} + 3 = ${num(y)}` : `\\kf(${num(x)}) = (${num(x)} - 2)^2 = ${num(y, 4)}`, undefined, { form: left ? 'line' : 'square' });
  }
  still(d, draw);
})();

/* Example 1.20: the parking cost C(x) as steps closed at the right, on the book's 0 to 18 h by 0 to 32
   dollars. */
(function () {
  const d = sim('sim-parking', 520);
  const C_ = (x) => (x <= 0 ? NaN : x > 10 ? 30 : 10 + 2 * (Math.ceil(x - 1e-9) - 1));
  const PIECES = [...Array.from({ length: 10 }, (_, k) => ({ f: () => 10 + 2 * k, x: [k, k + 1], ends: '(]' })), { f: () => 30, x: [10, 18], ends: '(]' }];
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.05, max: 18, step: 0.05, value: 2.5, unit: 'h', dec: 2, specials: [{ at: 10 }] });
  const P = drag(d, { x: xs, y: C_ });
  const ro = readout(d);
  const BOX = { l: 250, r: 1150, t: 90, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), x = xs.v, y = C_(x), k = Math.ceil(x - 1e-9) - 1;
    const ax = axes(ctx, BOX, [0, 18], [0, 32], { xl: 'x, hours', yl: 'y, cost in dollars', nx: 9, ny: 8 });
    plot(ctx, ax, PIECES, fc);
    drop(ctx, ax.X(x), ax.Y(y), ax.X(x), ax.Y(0)); drop(ctx, ax.X(x), ax.Y(y), ax.X(0), ax.Y(y));
    P.draw(ctx, ax, pc);
    headline(ctx, `${fmt(x, 2)} hours parked: ${y} dollars.`);
    ro.set(x > 10 ? `C(${num(x)}) = 30,\\ \\text{since}\\ 10 \\lt x \\le 18` : `C(${num(x)}) = ${y},\\ \\text{since}\\ ${k} \\lt x \\le ${k + 1}`);
  }
  still(d, draw);
})();

/* Figures 1.23 to 1.27: a starting function y = f(x) and its transform by f(x) + c, f(x + c), c f(x) or
   f(cx), one marked point carried to its image. Axes fixed at −6 to 6 by −6 to 10, which hold the
   book's five pairs. */
(function () {
  const d = sim('sim-transformations', 580);
  const PARENT = {
    sq: { f: (x) => x * x, s: 'x^2', at: (a) => `(${a})^2`, own: 'x^2', x0: 1, label: 'x²' },
    abs: { f: Math.abs, s: '|x|', at: (a) => `|${a}|`, own: '|x|', x0: 0, label: '|x|' },
    sqrt: { f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), s: '\\sqrt{x}', at: (a) => `\\sqrt{${a}}`, own: '\\sqrt{x}', x0: 4, label: '√x' },
    cube: { f: (x) => x ** 3 + 1, s: 'x^3+1', at: (a) => `(${a})^3+1`, own: '(x^3+1)', x0: 1, label: 'x³ + 1' },
  };
  const sgn = (c, s) => (c < 0 ? `${s} - ${num(-c)}` : `${s} + ${num(c)}`);
  const T = {
    vs: { label: 'f(x) + c', start: 'sq', c: 4, r: { min: -6, max: 6, step: 0.1, dec: 1 }, shift: true,
      g: (f, c) => (x) => f(x) + c, img: (x, y, c) => [x, y + c], form: (c) => (near(c, 0) ? '\\kf(x)' : sgn(c, '\\kf(x)')), rule: (p, c) => (near(c, 0) ? p.s : sgn(c, p.s)),
      say: (c) => (c > 0 ? `shifted up ${num(c, 1)} units` : `shifted down ${num(-c, 1)} units`) },
    hs: { label: 'f(x + c)', start: 'abs', c: 3, r: { min: -6, max: 6, step: 0.1, dec: 1 }, shift: true,
      g: (f, c) => (x) => f(x + c), img: (x, y, c) => [x - c, y], form: (c) => `\\kf(${near(c, 0) ? 'x' : sgn(c, 'x')})`, rule: (p, c) => (near(c, 0) ? p.s : p.at(sgn(c, 'x'))),
      say: (c) => (c > 0 ? `shifted left ${num(c, 1)} units` : `shifted right ${num(-c, 1)} units`) },
    vc: { label: 'c·f(x)', start: 'sq', c: 3, r: { min: -3, max: 3, step: 0.01, dec: 2 },
      g: (f, c) => (x) => c * f(x), img: (x, y, c) => [x, c * y], form: (c) => (near(c, 1) ? '\\kf(x)' : near(c, -1) ? '-\\kf(x)' : `${num(c)}\\kf(x)`),
      rule: (p, c) => (near(c, 1) ? p.s : near(c, -1) ? `-${p.own}` : near(c, 0) ? '0' : `${num(c)}${p.own}`),
      say: (c) => (c > 1 ? `stretched vertically by a factor of ${num(c)}` : c > 0 ? `compressed vertically, each height multiplied by ${num(c)}` : near(c, 0) ? 'flattened onto the x-axis'
        : near(c, -1) ? 'reflected about the x-axis' : `reflected about the x-axis and scaled vertically by ${num(-c)}`) },
    hc: { label: 'f(cx)', start: 'sqrt', c: 2, r: { min: -3, max: 3, step: 0.01, dec: 2 },
      g: (f, c) => (x) => f(c * x), img: (x, y, c) => (near(c, 0) ? null : [x / c, y]), form: (c) => `\\kf(${near(c, 1) ? 'x' : near(c, -1) ? '-x' : `${num(c)}x`})`,
      rule: (p, c) => (near(c, 1) ? p.s : p.at(near(c, -1) ? '-x' : near(c, 0) ? '0' : `${num(c)}x`)),
      say: (c) => (c > 1 ? `compressed horizontally by a factor of ${num(c)}` : c > 0 ? `stretched horizontally, each distance from the y-axis divided by ${num(c)}` : near(c, 0) ? 'flattened to the constant f(0)'
        : near(c, -1) ? 'reflected about the y-axis' : `reflected about the y-axis and scaled horizontally by ${num(-c)}`) },
  };
  let curT = 'vs', curP = 'sq', from = null;
  const tw = F.tween(d, 1);
  const snap = () => { const f = PARENT[curP].f; return { f, g: T[curT].g(f, c.v) }; };
  const morph = () => { from = snap(); tw.set(0); tw.to(1, 900); };
  const tf = choice(d.controls, { label: '', key: 'transformation', options: Object.entries(T).map(([value, t]) => ({ value, label: t.label })), value: 'vs', ms: 0, aria: 'which transformation',
    onInput: (v) => { morph(); curT = v; curP = T[v].start; start.set(curP); c.range({ ...T[v].r, value: T[v].c }); c.refresh(); } });
  const start = choice(d.controls, { label: 'f(x)', key: 'start', options: Object.entries(PARENT).map(([value, p]) => ({ value, label: p.label })), value: 'sq', ms: 0, aria: 'starting function',
    onInput: (v) => { morph(); curP = v; } });
  const c = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -6, max: 6, step: 0.1, value: 4, unit: '', dec: 1,
    specials: [{ at: () => (T[curT].shift ? 0 : 1) }, { at: () => (T[curT].shift ? null : -1) }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 330, r: 1070, t: 90, b: 500 };
  function draw() {
    const { ctx } = begin(d.c);
    const cf = F.ref('graph-f'), cg = F.ref('graph-g'), pc = C('point'), t = T[curT], p = PARENT[curP], cv = c.v;
    const f = p.f, g = t.g(f, cv), k = from ? tw.v : 1;
    const mixf = (a, b) => (x) => a(x) + (b(x) - a(x)) * k;
    const ax = axes(ctx, BOX, [-6, 6], [-6, 10], { xl: 'x', yl: 'y', nx: 6, ny: 8 });
    plot(ctx, ax, from ? mixf(from.f, f) : f, cf, { w: 4 });
    plot(ctx, ax, from ? mixf(from.g, g) : g, cg);
    hits = [];
    const y0 = f(p.x0), im = t.img(p.x0, y0, cv);
    F.faded(ctx, k, [0, 0], () => {
      if (im && Number.isFinite(im[1])) {
        const [ax0, ay0, ax1, ay1] = [ax.X(p.x0), ax.Y(y0), ax.X(im[0]), ax.Y(im[1])], dd = Math.hypot(ax1 - ax0, ay1 - ay0);
        if (dd > 30) { const ux = (ax1 - ax0) / dd, uy = (ay1 - ay0) / dd; line(ctx, ax0 + ux * 12, ay0 + uy * 12, ax1 - ux * 34, ay1 - uy * 34, alpha(PAL.ink, 0.6), 3, [10, 8]); arrow(ctx, ax1 - ux * 36, ay1 - uy * 36, ax1 - ux * 13, ay1 - uy * 13, alpha(PAL.ink, 0.6), 3); }
        dot(ctx, ax0, ay0, pc, false, 9); pinned(ctx, ax.box, ax.X, ax.Y, im[0], im[1], pc);
        hits = [{ x: ax0, y: ay0, r: 16, name: `(${fmt(p.x0, 0)}, ${fmt(y0, 0)}) on y = ${p.label}` }, { x: ax1, y: ay1, r: 16, name: `(${fmt(im[0], 2)}, ${fmt(im[1], 2)}), its image` }];
      }
    });
    const same = t.shift ? near(cv, 0) : near(cv, 1);
    headline(ctx, same ? `With $c = ${num(cv)}$ the graph of $y = ${p.s}$ stays where it is.` : `The graph of $y = ${t.rule(p, cv)}$ is the graph of $y = ${p.s}$ ${t.say(cv)}.`);
    ro.set(`y = ${t.form(cv)} = ${t.rule(p, cv)}`, undefined, { form: `${curT}-${curP}` });
  }
  still(d, draw);
})();

/* Figures 1.28 and 1.29: Example 1.21's three steps, each point of the starting graph carried by each
   transformation in turn. Axes fixed at the book's −7 to 7, by −7 to 7 for (a) and −2 to 10 for (b). */
(function () {
  const d = sim('sim-transform-sequence', 560);
  const SEQ = {
    a: { base: span(-9, 9, 180).map((x) => [x, Math.abs(x)]), y: [-7, 7],
      steps: [{ map: (q) => q, s: '|x|', say: 'The starting function' }, { map: ([x, y]) => [x - 2, y], s: '|x+2|', say: 'Shift 2 units to the left' },
        { map: ([x, y]) => [x, -y], s: '-|x+2|', say: 'Reflect about the x-axis' }, { map: ([x, y]) => [x, y - 3], s: '-|x+2|-3', say: 'Shift down 3 units' }],
      names: ['y = |x|', 'shift left 2', 'reflect', 'shift down 3'], ghosts: ['|x|', '|x + 2|', '−|x + 2|'] },
    b: { base: span(0, 1, 160).map((u) => [9 * u * u, 3 * u]), y: [-2, 10],
      steps: [{ map: (q) => q, s: '\\sqrt{x}', say: 'The starting function' }, { map: ([x, y]) => [-x, y], s: '\\sqrt{-x}', say: 'Reflect about the y-axis' },
        { map: ([x, y]) => [x, 3 * y], s: '3\\sqrt{-x}', say: 'Stretch vertically by a factor of 3' }, { map: ([x, y]) => [x, y + 1], s: '3\\sqrt{-x}+1', say: 'Move up 1 unit' }],
      names: ['y = √x', 'reflect', 'stretch by 3', 'up 1'], ghosts: ['√x', '√(−x)', '3√(−x)'] },
  };
  const stepOpts = (p) => SEQ[p].names.map((label, i) => ({ value: String(i), label }));
  const part = choice(d.controls, { label: '', key: 'part', options: [{ value: 'a', label: 'a. −|x + 2| − 3' }, { value: 'b', label: 'b. 3√(−x) + 1' }], value: 'a', aria: 'which function', onInput: (v) => step.options(stepOpts(v)) });
  const step = choice(d.controls, { label: '\\text{step}', key: 'step', options: stepOpts('a'), value: '3', ms: 1200 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 330, r: 1070, t: 90, b: 500 };
  /* the starting graph carried through the first j steps */
  const stage = (p, j) => SEQ[p].base.map((q) => SEQ[p].steps.slice(1, j + 1).reduce((r, s) => s.map(r), q));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pv = part.value, j = +step.value, i = part.from === pv ? +step.from : j, k = step.k;
    const ax = axes(ctx, BOX, [-7, 7], part.mix((v) => SEQ[v].y), { xl: 'x', yl: 'y', nx: 14, ny: pv === 'a' ? 14 : 12 });
    hits = [];
    ['a', 'b'].forEach((v) => part.only(ctx, v, () => {
      const jj = v === pv ? j : 3, ii = v === pv ? i : 3;
      for (let s = 0; s < Math.max(ii, jj); s++) {
        const a = s < Math.min(ii, jj) ? 1 : jj > ii ? k : 1 - k;
        F.faded(ctx, a, [0, 0], () => poly(ctx, d, ax, stage(v, s), alpha(fc, s ? 0.55 : 0.45), 3, s ? [12, 10] : undefined));
        if (v === pv && s < jj) stage(v, s).filter((_, n) => n % 30 === 15).forEach(([x, y]) => hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `y = ${SEQ[v].ghosts[s]}` }));
      }
      const A = stage(v, ii), B = stage(v, jj), cur = A.map(([x, y], n) => [x + (B[n][0] - x) * k, y + (B[n][1] - y) * k]);
      poly(ctx, d, ax, cur, fc, 5);
    }));
    const S = SEQ[pv].steps;
    headline(ctx, `${S[j].say}: $y = ${S[j].s}$.`);
    ro.set(S.slice(0, j + 1).map((s) => `y = ${s.s}`).join('\\;\\to\\;'), undefined, { form: `${pv}${j}` });
  }
  still(d, draw);
})();
};
