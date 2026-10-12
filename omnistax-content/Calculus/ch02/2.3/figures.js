/* Figures for section 2.3 The Limit Laws. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, tex, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const near = (p, q) => Math.abs(p - q) < 1e-9;

/* Figure 2.24: g(x) = x + 1 and f(x) = (x² − 1)/(x − 1), one x on both. Both panels fixed at −4 to 4
   by −4 to 5, the book's window, which holds both lines and the hole at (1, 2). */
(function () {
  const d = sim('sim-equal-except-at-one', 500);
  const g = (x) => x + 1, f = (x) => (near(x, 1) ? NaN : (x * x - 1) / (x - 1));
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3.5, max: 3.5, step: 0.01, value: 2.5, unit: '', dec: 2, specials: [{ at: 1 }] });
  const Pg = drag(d, { x: xs, y: g }), Pf = drag(d, { x: xs, y: f });
  const ro = readout(d);
  const BOXES = [{ l: 120, r: 630, t: 100, b: 420 }, { l: 800, r: 1310, t: 100, b: 420 }];
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), lc = C('limit'), x = xs.v, at1 = near(x, 1);
    const [ag, af] = BOXES.map((b) => axes(ctx, b, [-4, 4], [-4, 5], { xl: 'x', yl: 'y', nx: 8, ny: 9 }));
    [ag, af].forEach((ax) => {
      line(ctx, ax.X(-4), ax.Y(2), ax.X(4), ax.Y(2), alpha(lc, 0.55), 2.5, [10, 10]);
      line(ctx, ax.X(1), ax.box.t, ax.X(1), ax.box.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    });
    plot(ctx, ag, g, fc);
    plot(ctx, af, f, fc, { holes: [1] });
    text(ctx, '$\\kg(x) = x + 1$', ag.box.l + 16, ag.box.t + 22, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$\\kf(x) = \\dfrac{x^2 - 1}{x - 1}$', af.box.l + 16, af.box.t + 34, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, '$\\kL = 2$', af.box.r - 8, af.Y(2) - 20, lc, { size: 20, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    drop(ctx, ag.X(x), ag.Y(g(x)), ag.X(x), ag.Y(0));
    Pg.draw(ctx, ag, pc);
    if (!at1) { drop(ctx, af.X(x), af.Y(f(x)), af.X(x), af.Y(0)); Pf.draw(ctx, af, pc); }
    hits = [{ x: af.X(1), y: af.Y(2), r: 18, name: 'the hole at (1, 2): f(1) is undefined' }, { x: ag.X(1), y: ag.Y(2), r: 18, name: '(1, 2) on the graph of g' }];
    headline(ctx, at1 ? 'At $x = 1$: $\\kg(1) = 2$, and $\\kf(1)$ is undefined.' : `$\\kf(${n(x)}) = ${n(f(x))} = \\kg(${n(x)})$: the two agree wherever $x \\ne 1$.`);
    ro.set(at1
      ? `\\kg(1) = 2, \\qquad \\lim_{x\\to 1}\\kf(x) = \\lim_{x\\to 1}\\kg(x) = ${typed('limit', '2')}`
      : `\\kf(${n(x)}) = \\dfrac{(${n(x)} - 1)(${n(x)} + 1)}{${n(x)} - 1} = ${n(x)} + 1 = ${n(g(x))} = \\kg(${n(x)})`, undefined, { form: at1 });
  }
  still(d, draw);
})();

/* Figure 2.25, a faithful copy: f(x) = √(x − 3) from its closed end, on −1 to 9 by −1 to 3. */
(function () {
  const d = sim('fig-root-one-sided', 420);
  const f = (x) => Math.sqrt(x - 3);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 330, r: 1070, t: 40, b: 360 }, [-1, 9], [-1, 3], { xl: 'x', yl: 'y', nx: 10, ny: 4 });
    plot(ctx, ax, [{ f, x: [3, 9], ends: '[-' }], fc);
    label(ctx, '(3, 0)', ax.X(3), ax.Y(0), { side: 'below', gap: 30 });
    text(ctx, '$\\kf(x) = \\sqrt{x - 3}$', ax.X(8.8), ax.Y(2.75), fc, { size: 24, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(3), y: ax.Y(0), r: 18, name: '(3, 0), the closed end: f is not defined to the left of 3' }];
  }
  still(d, draw);
})();

/* Figure 2.26, a faithful copy: 4x − 3 for x < 2 and (x − 3)² for x ≥ 2, on −1 to 5 by −4 to 6. */
(function () {
  const d = sim('fig-piecewise-two-sided', 470);
  const left = (x) => 4 * x - 3, right = (x) => (x - 3) ** 2;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function');
    const ax = axes(ctx, { l: 380, r: 1020, t: 40, b: 410 }, [-1, 5], [-4, 6], { xl: 'x', yl: 'y', nx: 6, ny: 10 });
    plot(ctx, ax, [{ f: left, x: [-1, 2], ends: '-)' }, { f: right, x: [2, 5], ends: '[-' }], fc);
    label(ctx, '(2, 5)', ax.X(2), ax.Y(5), { side: 'right', gap: 26 });
    label(ctx, '(2, 1)', ax.X(2), ax.Y(1), { side: 'left', gap: 26 });
    text(ctx, '$4x - 3$', ax.X(0.9), ax.Y(3.6), fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$(x - 3)^2$', ax.X(3.9), ax.Y(2.6), fc, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    hits = [{ x: ax.X(2), y: ax.Y(5), r: 18, name: '(2, 5), open: the left-hand limit at 2 is 5' }, { x: ax.X(2), y: ax.Y(1), r: 18, name: '(2, 1), closed: f(2) = 1, the right-hand limit' }];
  }
  still(d, draw);
})();

/* Figures 2.27 and 2.28: three functions f ≤ g ≤ h through (a, L), and −|x| ≤ x cos x ≤ |x|. The
   theorem's stand-ins sit on −1 to 3.5 by −3 to 4.5 about (1, 2); Example 2.24's on −3 to 3, the book's −2.5 to 2.5 rounded out to whole ticks. */
(function () {
  const d = sim('sim-squeeze', 540);
  const lin = (x) => 2 - 0.3 * (x - 1);
  const S = {
    theorem: {
      a: 1, L: 2, xr: [-1, 3.5], yr: [-3, 4.5], x0: 2.4,
      f: (x) => lin(x) - (x - 1) ** 2, h: (x) => lin(x) + 0.6 * (x - 1) ** 2,
      g: (x) => lin(x) + (x - 1) ** 2 * (-0.2 + 0.6 * Math.cos(2.2 * (x - 1))),
      names: ['$\\kf(x)$', '$\\kg(x)$', '$\\kh(x)$'], at: [2.75, 3.2, 2.8],
    },
    xcos: {
      a: 0, L: 0, xr: [-3, 3], yr: [-3, 3], x0: 1,
      f: (x) => -Math.abs(x), h: (x) => Math.abs(x), g: (x) => x * Math.cos(x),
      names: ['$y = -|x|$', '$\\kg(x) = x\\cos x$', '$y = |x|$'], at: [-1.6, 2.0, 1.55],
    },
  };
  const REFS = ['bound-f', 'squeezed-g', 'bound-h'];
  const pick = choice(d.controls, {
    label: '', options: [{ value: 'theorem', label: 'the theorem' }, { value: 'xcos', label: 'x cos x' }], value: 'theorem', aria: 'which three functions',
    onInput: (v) => { xs.range({ min: S[v].xr[0], max: S[v].xr[1], step: 0.01, dec: 2 }); xs.set(S[v].x0); },
  });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -1, max: 3.5, step: 0.01, value: 2.4, unit: '', dec: 2, specials: [{ at: () => S[pick.value].a }] });
  const P = drag(d, { x: xs, y: (x) => S[pick.value].g(x) });
  const ro = readout(d);
  const BOX = { l: 230, r: 1170, t: 100, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  function scene(ctx, key) {
    const s = S[key], lc = C('limit'), thm = key === 'theorem';
    const ax = axes(ctx, BOX, s.xr, s.yr, thm ? { xl: 'x', yl: 'y', nx: 0, ny: 0 } : { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    line(ctx, BOX.l, ax.Y(s.L), BOX.r, ax.Y(s.L), alpha(lc, 0.55), 2.5, [10, 10]);
    if (thm) {
      line(ctx, ax.X(s.a), ax.Y(0) - 8, ax.X(s.a), ax.Y(0) + 8, PAL.ink, 2.5);
      text(ctx, 'a', ax.X(s.a), ax.Y(0) + 28, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, '$\\kL$', BOX.l - 14, ax.Y(s.L), lc, { size: 24, weight: 600, align: 'right', tex: true });
    }
    [s.f, s.g, s.h].forEach((fn, i) => plot(ctx, ax, fn, F.ref(REFS[i]), { w: i === 1 ? 5 : 4 }));
    s.names.forEach((nm, i) => {
      const xv = s.at[i], yv = [s.f, s.g, s.h][i](xv);
      text(ctx, nm, ax.X(xv), ax.Y(yv) + (i === 0 ? 30 : -30), F.ref(REFS[i]), { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    });
    return ax;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const key = pick.value, s = S[key], thm = key === 'theorem', x = xs.v, atA = near(x, s.a);
    let ax = null;
    [...new Set([pick.from, key])].forEach((v) => pick.only(ctx, v, () => { const a = scene(ctx, v); if (v === key) ax = a; }));
    ax = ax || scene(ctx, key);
    const yf = s.f(x), yg = s.g(x), yh = s.h(x);
    if (!atA) line(ctx, ax.X(x), ax.Y(yf), ax.X(x), ax.Y(yh), alpha(PAL.ink, 0.55), 3);
    dot(ctx, ax.X(x), ax.Y(yf), F.ref('bound-f'), true, 8);
    dot(ctx, ax.X(x), ax.Y(yh), F.ref('bound-h'), true, 8);
    P.draw(ctx, ax, F.ref('squeezed-g'));
    if (atA) dot(ctx, ax.X(s.a), ax.Y(s.L), C('limit'), false, 12);
    hits = [{ x: ax.X(x), y: ax.Y(yf), r: 16, name: 'f(x), the lower bound' }, { x: ax.X(x), y: ax.Y(yg), r: 16, name: 'g(x), held between them' }, { x: ax.X(x), y: ax.Y(yh), r: 16, name: 'h(x), the upper bound' }];
    if (thm) {
      headline(ctx, atA ? 'At $x = a$ the bracket has closed on $\\kL$, and $\\kg(x)$ with it.' : `$|x - a| = ${n(Math.abs(x - s.a))}$: $\\kg(x)$ is held in a bracket ${fmt(yh - yf, 2)} tall.`);
      ro.set(atA ? `\\lim_{x\\to a}\\kf(x) = \\kL = \\lim_{x\\to a}\\kh(x), \\quad\\text{so}\\quad \\lim_{x\\to a}\\kg(x) = \\kL`
        : `\\kf(x) \\le \\kg(x) \\le \\kh(x), \\qquad \\kh(x) - \\kf(x) = ${n(yh - yf)}`, undefined, { form: `t${atA}` });
    } else {
      headline(ctx, atA ? 'At $x = 0$ the bracket has closed: $-|x|$, $x\\cos x$ and $|x|$ all reach 0.' : `$x = ${n(x)}$: $${n(yf)} \\le ${n(yg)} \\le ${n(yh)}$`);
      ro.set(atA ? `\\lim_{x\\to 0}(-|x|) = ${typed('limit', '0')} = \\lim_{x\\to 0}|x|, \\quad\\text{so}\\quad \\lim_{x\\to 0}x\\cos x = ${typed('limit', '0')}`
        : `-|${n(x)}| \\le (${n(x)})\\cos(${n(x)}) \\le |${n(x)}|: \\quad ${n(yf)} \\le ${n(yg)} \\le ${n(yh)}`, undefined, { form: `x${atA}` });
    }
  }
  still(d, draw);
})();

/* Figures 2.29 and 2.30: sin θ < θ < tan θ on the unit circle, and cos θ < sin θ/θ < 1 beside it. The
   circle is 190 units to the radius, so tan θ stays under the headline to θ = 1; the graph is fixed at
   −1.2 to 1.2 by 0 to 1.2, which holds cos θ and sin θ/θ over the slider's reach on both sides. */
(function () {
  const d = sim('sim-unit-circle-squeeze', 660);
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 1, step: 0.01, value: 0.9, unit: 'rad', dec: 2, specials: [{ at: 0 }] });
  const sinc = (t) => (near(t, 0) ? NaN : Math.sin(t) / t);
  const ro = readout(d);
  const O = { x: 320, y: 440 }, R = 190;
  const BOX = { l: 660, r: 1320, t: 120, b: 560 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const t = th.v, zero = near(t, 0), ac = C('angle'), fc = C('function'), lc = C('limit'), pc = C('point');
    const cs = F.ref('sine-segment'), ct = F.ref('tangent-segment');
    const P = { x: O.x + R * Math.cos(t), y: O.y - R * Math.sin(t) }, T = { x: O.x + R, y: O.y - R * Math.tan(t) };
    const show = Math.min(1, Math.max(0, (t - 0.18) / 0.12));
    arrow(ctx, O.x - R - 50, O.y, O.x + R + 70, O.y, PAL.ink, 2.5);
    arrow(ctx, O.x, O.y + R + 30, O.x, O.y - R - 60, PAL.ink, 2.5);
    text(ctx, 'x', O.x + R + 84, O.y + 2, PAL.ink, { size: 22, weight: 600, align: 'left' });
    text(ctx, 'y', O.x - 14, O.y - R - 60, PAL.ink, { size: 22, weight: 600, align: 'right' });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(O.x, O.y, R, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    line(ctx, O.x, O.y, T.x, T.y, PAL.ink, 3);
    line(ctx, P.x, P.y, P.x, O.y, cs, 5);
    line(ctx, T.x, O.y, T.x, T.y, ct, 5);
    ctx.save(); ctx.strokeStyle = ac; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(O.x, O.y, R, 0, -t, true); ctx.stroke(); ctx.restore();
    F.angleArc(ctx, O, 46, 0, t, undefined, undefined, ac);
    dot(ctx, P.x, P.y, PAL.ink, true, 7); dot(ctx, O.x + R, O.y, PAL.ink, true, 7);
    label(ctx, '(1, 0)', O.x + R, O.y, { side: 'below', gap: 26, size: 18 });
    F.faded(ctx, show, [0, 0], () => {
      text(ctx, '$\\sin\\ktheta$', P.x - 12, (P.y + O.y) / 2, cs, { size: 22, weight: 600, align: 'right', tex: true, bg: PAL.panel });
      text(ctx, '$\\tan\\ktheta$', T.x + 14, (T.y + O.y) / 2, ct, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
      const m = t / 2;
      text(ctx, '$\\ktheta$', O.x + 66 * Math.cos(m), O.y - 66 * Math.sin(m), ac, { size: 20, weight: 600, align: 'left', tex: true });
    });
    hits = [{ x: P.x, y: (P.y + O.y) / 2, r: 18, name: `sin θ = ${fmt(Math.sin(t), 3)}` }, { x: T.x, y: (T.y + O.y) / 2, r: 18, name: `tan θ = ${fmt(Math.tan(t), 3)}` }, { x: O.x + R * Math.cos(t / 2), y: O.y - R * Math.sin(t / 2), r: 18, name: `the arc θ = ${fmt(t, 3)}` }];
    const ax = axes(ctx, BOX, [-1.2, 1.2], [0, 1.2], { xl: 'θ', yl: 'y', nx: 6, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    line(ctx, BOX.l, ax.Y(1), BOX.r, ax.Y(1), alpha(lc, 0.7), 2.5, [10, 10]);
    plot(ctx, ax, Math.cos, fc, { w: 3 });
    plot(ctx, ax, sinc, fc, { holes: [0] });
    text(ctx, '$\\sin\\ktheta/\\ktheta$', ax.X(-0.95), ax.Y(sinc(-0.95)) - 26, fc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\cos\\ktheta$', ax.X(-0.95), ax.Y(Math.cos(-0.95)) + 26, fc, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '1', BOX.r - 8, ax.Y(1) - 20, lc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    if (!zero) { drop(ctx, ax.X(t), ax.Y(sinc(t)), ax.X(t), ax.Y(Math.cos(t))); dot(ctx, ax.X(t), ax.Y(Math.cos(t)), fc, true, 7); dot(ctx, ax.X(t), ax.Y(sinc(t)), pc, true, 9); }
    if (zero) {
      headline(ctx, 'At $\\ktheta = 0$ all three lengths are 0, and $\\sin\\ktheta/\\ktheta$ has no value; its limit is 1.');
      ro.set(`\\lim_{\\ktheta\\to 0}\\dfrac{\\sin\\ktheta}{\\ktheta} = ${typed('limit', '1')}`, undefined, { form: true });
    } else {
      headline(ctx, `$\\ktheta = ${n(t)}$: $\\sin\\ktheta = ${n(Math.sin(t), 3)} \\lt \\ktheta = ${n(t, 3)} \\lt \\tan\\ktheta = ${n(Math.tan(t), 3)}$`);
      ro.set(`\\cos\\ktheta \\lt \\dfrac{\\sin\\ktheta}{\\ktheta} \\lt 1: \\quad ${n(Math.cos(t), 3)} \\lt ${n(sinc(t), 3)} \\lt 1`, undefined, { form: false });
    }
  }
  still(d, draw);
})();

/* Figure 2.31, a faithful copy: an octagon inscribed in a circle, one of its isosceles triangles, and
   that triangle drawn again beside it. */
(function () {
  const d = sim('fig-inscribed-triangle', 500);
  const O = { x: 380, y: 260 }, R = 220, N = 8;
  const V = Array.from({ length: N }, (_, k) => { const a = Math.PI / 2 + Math.PI / N + (2 * Math.PI * k) / N; return { x: O.x + R * Math.cos(a), y: O.y - R * Math.sin(a) }; });
  function draw() {
    const { ctx } = begin(d.c);
    const ac = C('angle'), half = Math.PI / N;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(O.x, O.y, R, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); V.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y))); ctx.closePath(); ctx.stroke(); ctx.restore();
    const A = V[N - 1], B = V[0], M = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    line(ctx, O.x, O.y, A.x, A.y, PAL.ink, 3); line(ctx, O.x, O.y, B.x, B.y, PAL.ink, 3); line(ctx, O.x, O.y, M.x, M.y, PAL.ink, 2.5);
    F.angleArc(ctx, O, 34, Math.PI / 2 - half, Math.PI / 2 + half, undefined, undefined, ac);
    text(ctx, '$\\ktheta$', O.x, O.y - 58, ac, { size: 20, weight: 600, align: 'center', tex: true });
    text(ctx, 'h', M.x - 12, O.y - 0.66 * (O.y - M.y), PAL.ink, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'r', (O.x + A.x) / 2 + 26 * Math.cos(half), (O.y + A.y) / 2 + 26 * Math.sin(half), PAL.ink, { size: 22, weight: 600, align: 'left' });
    text(ctx, 'b', M.x, M.y - 42, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    label(ctx, 'circle', O.x + R * Math.cos(1.0), O.y - R * Math.sin(1.0), { side: 'right', gap: 60, size: 20 });
    label(ctx, 'inscribed polygon', O.x + R * 0.75 * Math.cos(-1.0), O.y - R * 0.75 * Math.sin(-1.0), { side: 'right', gap: 150, size: 20 });
    /* the triangle again: apex angle 2π/8, height 220 */
    const Q = { x: 1060, y: 110 }, Hh = 230, w = Hh * Math.tan(half);
    const L = { x: Q.x - w, y: Q.y + Hh }, Rr = { x: Q.x + w, y: Q.y + Hh };
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(Q.x, Q.y); ctx.lineTo(L.x, L.y); ctx.lineTo(Rr.x, Rr.y); ctx.closePath(); ctx.stroke(); ctx.restore();
    line(ctx, Q.x, Q.y, Q.x, Q.y + Hh, PAL.ink, 2.5);
    F.angleArc(ctx, Q, 40, -Math.PI / 2 - half, -Math.PI / 2 + half, undefined, undefined, ac);
    text(ctx, '$\\ktheta$', Q.x, Q.y + 62, ac, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, 'r', (Q.x + L.x) / 2 - 16, (Q.y + L.y) / 2, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'h', Q.x + 14, Q.y + Hh * 0.62, PAL.ink, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'b', Q.x, Q.y + Hh + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    arrow(ctx, M.x + 70, M.y + 20, Q.x - 90, Q.y + 50, PAL.ink, 4);
  }
  still(d, draw);
})();
};
