/* Figures for section 17.1 Second-Order Linear Equations. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, cycle, spring, block, fixed, vbracket, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-').replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const f1 = (v) => fmt(v, 1);
const signed = (v, dec = 2) => (v < 0 ? '-' : '+') + n(Math.abs(v), dec);
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw) => { ctx.save(); ctx.setLineDash([10, 10]); draw(); ctx.restore(); };

/* The roots of λ² + bλ + c = 0 in the plane of λ beside the solution of y″ + by′ + cy = 0 with y(0) = 1, y′(0) = 0.
   b in [−8, 8] and c in [−10, 20] keep the real roots within ±9.1 and the imaginary parts within ±4.5, so the plane is
   −10 to 10 by −5 to 5 at one scale; the graph is x 0 to 4 by y −2 to 2. */
(function () {
  const d = sim('sim-characteristic-roots', 560);
  let cS = null;
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -8, max: 8, step: 0.1, value: 6, unit: '', dec: 1, aria: 'the coefficient b',
    specials: [{ at: () => (cS ? (cS.v >= 0 ? 2 * Math.sqrt(cS.v) : null) : null) }, { at: () => (cS ? (cS.v >= 0 ? -2 * Math.sqrt(cS.v) : null) : null) }] });
  cS = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -10, max: 20, step: 0.1, value: 13, unit: '', dec: 1, aria: 'the coefficient c',
    specials: [{ at: () => (bS.v * bS.v) / 4 }] });
  const ro = readout(d);
  const PLANE = { l: 110, r: 610, t: 120, b: 470 }, GRAPH = { l: 730, r: 1300, t: 110, b: 480 };
  let hits = [];
  hover(d.stage, () => hits);
  /* the case and the solution with y(0) = 1, y′(0) = 0 */
  function solve(b, c) {
    const disc = b * b - 4 * c;
    if (Math.abs(disc) < 1e-9) { const l = -b / 2; return { kind: 'repeated', l, y: (x) => Math.exp(l * x) * (1 - l * x) }; }
    if (disc > 0) {
      const r = Math.sqrt(disc), l1 = (-b + r) / 2, l2 = (-b - r) / 2, c1 = l2 / (l2 - l1), c2 = -l1 / (l2 - l1);
      return { kind: 'distinct', l1, l2, y: (x) => c1 * Math.exp(l1 * x) + c2 * Math.exp(l2 * x) };
    }
    const a = -b / 2, be = Math.sqrt(-disc) / 2;
    return { kind: 'complex', a, be, y: (x) => Math.exp(a * x) * (Math.cos(be * x) - (a / be) * Math.sin(be * x)) };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const b = bS.v, c = cS.v, fc = C('function'), S = solve(b, c);
    const pl = axes(ctx, PLANE, [-10, 10], [-5, 5], { xl: 'Re λ', yl: 'Im λ', nx: 4, ny: 2 });
    const gr = axes(ctx, GRAPH, [0, 4], [-2, 2], { xl: 'x', yl: 'y', nx: 4, ny: 4 });
    line(ctx, gr.box.l, gr.Y(0), gr.box.r, gr.Y(0), guide(), 2);
    if (S.kind === 'complex') {
      const A = Math.hypot(1, S.a / S.be);
      dashed(ctx, () => { plot(ctx, gr, (x) => A * Math.exp(S.a * x), alpha(fc, 0.45), { w: 3 }); plot(ctx, gr, (x) => -A * Math.exp(S.a * x), alpha(fc, 0.45), { w: 3 }); });
    }
    plot(ctx, gr, S.y, fc, { w: 5 });
    dot(ctx, gr.X(0), gr.Y(1), C('point'), true, 9);
    text(ctx, '$\\kyfn$', gr.box.r - 10, gr.box.t + 18, fc, { size: 24, tex: true, align: 'right', bg: PAL.panel });
    const pts = S.kind === 'distinct' ? [[S.l1, 0, 'λ₁'], [S.l2, 0, 'λ₂']] : S.kind === 'repeated' ? [[S.l, 0, 'λ']] : [[S.a, S.be, 'α + βi'], [S.a, -S.be, 'α − βi']];
    hits = [];
    pts.forEach(([re, im, name], i) => {
      const x = pl.X(Math.max(-10, Math.min(10, re))), y = pl.Y(im);
      dot(ctx, x, y, PAL.ink, true, 10);
      const below = S.kind === 'complex' ? im < 0 : i === 1;
      text(ctx, name, x, y + (below ? 30 : -24), PAL.ink, { size: 22, align: 'center', bg: PAL.panel });
      hits.push({ x, y, r: 16, name: `${name} = ${fmt(re, 2)}${S.kind === 'complex' ? (im < 0 ? ' − ' : ' + ') + fmt(Math.abs(im), 2) + 'i' : ''}, a root of λ² + bλ + c = 0` });
    });
    if (S.kind === 'repeated') text(ctx, 'a double root', pl.X(Math.max(-10, Math.min(10, S.l))), pl.Y(0) + 32, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    hits.push({ x: gr.X(0), y: gr.Y(1), r: 14, name: 'the initial point (0, 1), where y′(0) = 0' });
    const eq = `\\lambda^{2}${signed(b, 1)}\\lambda${signed(c, 1)}=0`;
    if (S.kind === 'distinct') {
      headline(ctx, `$b^{2}-4c=${n(b * b - 4 * c, 2)}\\gt 0$: two distinct real roots, $\\lambda_{1}=${n(S.l1)}$ and $\\lambda_{2}=${n(S.l2)}$`);
      ro.set(`${eq},\\quad \\kyfn(x)=c_{1}e^{${n(S.l1)}x}+c_{2}e^{${n(S.l2)}x}`, undefined, { form: 'distinct' });
    } else if (S.kind === 'repeated') {
      headline(ctx, `$b^{2}-4c=0$: one repeated real root, $\\lambda=${n(S.l)}$`);
      ro.set(`${eq},\\quad \\kyfn(x)=c_{1}e^{${n(S.l)}x}+c_{2}xe^{${n(S.l)}x}`, undefined, { form: 'repeated' });
    } else {
      headline(ctx, `$b^{2}-4c=${n(b * b - 4 * c, 2)}\\lt 0$: complex conjugate roots $${n(S.a)}\\pm ${n(S.be)}i$`);
      ro.set(`${eq},\\quad \\kyfn(x)=e^{${n(S.a)}x}(c_{1}\\cos ${n(S.be)}x+c_{2}\\sin ${n(S.be)}x)`, undefined, { form: 'complex' });
    }
  }
  still(d, draw);
})();

/* Example 17.8: y″ + 6y′ + 13y = 0 with y(0) and y′(0) as sliders; the book's y(0) = 0, y′(0) = 2 give y = e^(−3x) sin 2x.
   c₁ = y(0), c₂ = (y′(0) + 3y(0))/2. Axes x 0 to 2.5 by y −0.8 to 0.8 (the largest swing the sliders reach is 0.63). */
(function () {
  const d = sim('sim-ivp', 470);
  const y0 = ctl(d.controls, { label: '\\kyfn(0)', cls: 'function', key: 'y0', min: -0.5, max: 0.5, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the initial value y(0)' });
  const v0 = ctl(d.controls, { label: '\\kyprime(0)', cls: 'derivative', key: 'v0', min: -2, max: 2, step: 0.05, value: 2, unit: '', dec: 2, aria: 'the initial slope y′(0)' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const c1 = y0.v, c2 = (v0.v + 3 * y0.v) / 2, f = (x) => Math.exp(-3 * x) * (c1 * Math.cos(2 * x) + c2 * Math.sin(2 * x));
    const ax = axes(ctx, { l: 170, r: 1250, t: 100, b: 410 }, [0, 2.5], [-0.8, 0.8], { xl: 'x', yl: 'y', nx: 5, ny: 4, fx: f1, fy: f1 });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    plot(ctx, ax, f, C('function'), { w: 5 });
    const dx = 0.22, x1 = ax.X(0), yA = ax.Y(c1), x2 = ax.X(dx), yB = ax.Y(c1 + v0.v * dx);
    line(ctx, x1, yA, x2, yB, C('line'), 4);
    dot(ctx, x1, yA, C('point'), true, 10);
    text(ctx, '$\\kyfn$', ax.box.r - 10, ax.box.t + 18, C('function'), { size: 24, tex: true, align: 'right', bg: PAL.panel });
    hits = [{ x: x1, y: yA, r: 16, name: `the initial point (0, ${fmt(c1, 2)})` }, { x: (x1 + x2) / 2, y: (yA + yB) / 2, r: 14, name: `the tangent at x = 0, slope y′(0) = ${fmt(v0.v, 2)}` }];
    headline(ctx, `$\\kyfn(0)=${n(c1)}$ and $\\kyprime(0)=${n(v0.v)}$ give $c_{1}=${n(c1)}$ and $c_{2}=${n(c2)}$`);
    ro.set(`\\kyfn=e^{-3x}(${n(c1)}\\cos 2x${signed(c2)}\\sin 2x)`);
  }
  still(d, draw);
})();

/* Example 17.9: the mass on its spring, released from rest 1 m below equilibrium, y(t) = e^(−t) + te^(−t), down positive.
   The scene's scale is 150 units per metre from the equilibrium line; the graph is t 0 to 5 by y −0.2 to 1.2. */
(function () {
  const d = sim('sim-spring-ivp', 520);
  const T = 5, cy = cycle(() => T, 1.2), ro = readout(d);
  const y = (t) => Math.exp(-t) * (1 + t), v = (t) => -t * Math.exp(-t);
  const EQ = 250, SC = 150, X0 = 250;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T : cy.now(), yt = y(t), vt = v(t), fc = C('function');
    fixed(ctx, X0 - 110, 70, 220, 24);
    const my = EQ + yt * SC;
    spring(ctx, X0, 94, X0, my - 34, 10, 26, PAL.ink, 3);
    block(ctx, X0, my, 96, 64, PAL.ink);
    line(ctx, X0 - 150, EQ, X0 + 150, EQ, guide(), 2, [10, 10]);
    text(ctx, 'equilibrium', X0 - 150, EQ - 14, PAL.muted, { size: 17, align: 'left' });
    if (yt > 0.06) vbracket(ctx, X0 + 92, EQ, my, fc, `y = ${fmt(yt, 2)} m`, 1, { size: 22 });
    const ax = axes(ctx, { l: 560, r: 1300, t: 110, b: 440 }, [0, 5], [-0.2, 1.2], { xl: 't', yl: 'y', nx: 5, ny: 7, fy: f1 });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    plot(ctx, ax, y, fc, { w: 5 });
    const s1 = v(1), xa = ax.X(0.5), xb = ax.X(1.5);
    line(ctx, xa, ax.Y(y(1) - 0.5 * s1), xb, ax.Y(y(1) + 0.5 * s1), C('line'), 4);
    dot(ctx, ax.X(1), ax.Y(y(1)), C('point'), false, 9);
    dot(ctx, ax.X(2), ax.Y(y(2)), C('point'), false, 9);
    text(ctx, '$\\kyfn(2)\\approx 0.406$', ax.X(2) + 16, ax.Y(y(2)) - 18, C('point'), { size: 20, tex: true, align: 'left', bg: PAL.panel });
    dot(ctx, ax.X(t), ax.Y(yt), C('point'), true, 10);
    hits = [{ x: X0, y: my, r: 44, name: 'the mass' }, { x: X0, y: (94 + my) / 2, r: 26, name: 'the spring' },
      { x: ax.X(1), y: ax.Y(y(1)), r: 16, name: 'the tangent at t = 1, slope y′(1) = −e^(−1) ≈ −0.3679' },
      { x: ax.X(2), y: ax.Y(y(2)), r: 14, name: '(2, 3e^(−2)) ≈ (2, 0.406)' }];
    headline(ctx, `$t=${n(t, 1)}$ s: the mass is $${n(yt)}$ m below equilibrium${t > 0.02 ? `, moving up at $${n(-vt)}$ m/sec` : ', at rest'}`);
    ro.set(`\\kyfn(t)=e^{-t}+te^{-t}=${n(yt, 3)},\\quad \\kyprime(t)=-te^{-t}=${n(vt, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Example 17.10: y″ + 16y = 0 under its three pairs of boundary conditions. The family left by the first condition is drawn
   faint for the constant at −2.5, −2, …, 2.5, the member the slider sets bold. Axes t 0 to π/2 by y −3 to 3. */
(function () {
  const d = sim('sim-boundary-value', 500);
  const P = Math.PI;
  const CASES = {
    a: { fam: (k) => (t) => k * Math.sin(4 * t), first: [0, () => 0], second: [P / 4, 0], name: 'c_{2}', k0: 1 },
    b: { fam: (k) => (t) => Math.cos(4 * t) + k * Math.sin(4 * t), first: [0, () => 1], second: [P / 8, 0], name: 'c_{2}', k0: 0.5 },
    c: { fam: (k) => (t) => k * Math.cos(4 * t), first: [P / 8, () => 0], second: [3 * P / 8, 2], name: 'c_{1}', k0: 1 },
  };
  const pick = choice(d.controls, { label: 'problem', key: 'problem', value: 'a', options: [{ value: 'a', label: 'a' }, { value: 'b', label: 'b' }, { value: 'c', label: 'c' }], onInput: (v) => { kS.relabel(CASES[v].name); kS.mark(v === 'b' ? [{ at: 0 }] : []); kS.set(CASES[v].k0); } });
  const kS = ctl(d.controls, { label: 'c_{2}', cls: '', key: 'k', min: -2.5, max: 2.5, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the constant left free by the first condition' });
  const ro = readout(d);
  const piLab = (v) => { const k = Math.round(v / (P / 8)); return k === 0 ? '0' : k === 4 ? 'π/2' : k === 2 ? 'π/4' : k === 1 ? 'π/8' : '3π/8'; };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const v = pick.value, K = CASES[v], k = kS.v, fc = C('function'), pc = C('point');
    const ax = axes(ctx, { l: 170, r: 1250, t: 110, b: 440 }, [0, P / 2], [-3, 3], { xl: 't', yl: 'y', nx: 4, ny: 6, fx: piLab });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    for (let j = -2.5; j <= 2.501; j += 0.5) plot(ctx, ax, K.fam(j), alpha(fc, 0.22), { w: 2 });
    const f = K.fam(k);
    plot(ctx, ax, f, fc, { w: 5 });
    const [t1, y1] = [K.first[0], K.first[1]()], [t2, y2] = K.second;
    dot(ctx, ax.X(t1), ax.Y(y1), pc, true, 10);
    const met = Math.abs(f(t2) - y2) < 1e-6;
    dot(ctx, ax.X(t2), ax.Y(y2), pc, met, 11);
    if (!met) dot(ctx, ax.X(t2), ax.Y(f(t2)), fc, true, 7);
    hits = [{ x: ax.X(t1), y: ax.Y(y1), r: 16, name: `the first boundary condition, y(${piLab(t1)}) = ${fmt(y1, 0)}` },
      { x: ax.X(t2), y: ax.Y(y2), r: 16, name: `the second boundary condition, y(${piLab(t2)}) = ${fmt(y2, 0)}` }];
    if (v === 'a') {
      headline(ctx, `Every member meets $\\kyfn(\\tfrac{\\pi}{4})=0$: infinitely many solutions`);
      ro.set(`\\kyfn(t)=${n(k)}\\sin 4t,\\quad \\kyfn(\\tfrac{\\pi}{4})=${n(k)}\\sin\\pi=0`, undefined, { form: 'a' });
    } else if (v === 'b') {
      headline(ctx, met ? `$c_{2}=0$ meets $\\kyfn(\\tfrac{\\pi}{8})=0$: the one solution $\\kyfn=\\cos 4t$` : `This member has $\\kyfn(\\tfrac{\\pi}{8})=${n(k)}\\ne 0$: only $c_{2}=0$ solves the problem`);
      ro.set(`\\kyfn(t)=\\cos 4t${signed(k)}\\sin 4t,\\quad \\kyfn(\\tfrac{\\pi}{8})=${n(k)}`, undefined, { form: 'b' });
    } else {
      headline(ctx, `Every member has $\\kyfn(\\tfrac{3\\pi}{8})=0$, never $2$: no solution`);
      ro.set(`\\kyfn(t)=${n(k)}\\cos 4t,\\quad \\kyfn(\\tfrac{3\\pi}{8})=${n(k)}\\cos\\tfrac{3\\pi}{2}=0\\ne 2`, undefined, { form: 'c' });
    }
  }
  still(d, draw);
})();
};
