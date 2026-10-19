/* Figures for section 6.1 The Laplace transform. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, line, text, pinned, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace(/−/g, '-');
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
const guide = () => alpha(PAL.ink, 0.4);

/* Sim: the Laplace integral as an area (3Blue1Brown survivor, Examples 6.1.1–6.1.4 and Table 6.1). Left, f(t) faint
   and the integrand e^(−st) f(t) solid over 0 ≤ t ≤ 6, the area under it shaded in the integral's colour; right,
   F(s) over s, the point (s, F(s)) on it and a bar in the integral's colour from the axis up to it, the same
   number as the area. The window holds t ≤ 6; the rest of the area, the tail I(∞) − I(6), is written in the
   readout's note. I(6) = ∫₀⁶ e^(−st) f(t) dt in closed form (checked by SymPy in the build's scratch answers.py):
     1: (1 − e^(−6s))/s; t: (1 − e^(−6s)(1 + 6s))/s²; e^(−at): (1 − e^(−6r))/r, r = s + a;
     cos ωt: (s + e^(−6s)(ω sin 6ω − s cos 6ω))/(s² + ω²); u(t − a): (e^(−as) − e^(−6s))/s for a < 6, else 0;
   and 6, 18, 6, sin(6ω)/ω, 6 − a where the denominator vanishes. The threshold is s = 0, or s = −a for e^(−at): at
   or below it the integral diverges (for cos ωt at s = 0 it swings without settling), and it is a dashed special
   on the s slider and, for e^(−at), on the a slider at a = −s. Axes: t 0 to 6 by −1 to 3 (cos and every decaying
   integrand inside; a growing one leaves through the top); s −1 to 6 (the slider's range) by F 0 to 4, a larger
   F pinned at the top edge. */
(function () {
  const d = sim('sim-laplace-area', 540);
  const T = 6;
  const KINDS = {
    one: {
      f: () => () => 1,
      g: (s) => (t) => Math.exp(-s * t),
      thr: () => 0,
      F: (s) => 1 / s,
      I: (s) => (Math.abs(s) < 1e-9 ? T : (1 - Math.exp(-s * T)) / s),
      fTex: () => '1', head: () => 'e^{-st}',
      entry: '\\frac{1}{s}', num: (S) => `\\frac{1}{${S}}`,
    },
    exp: {
      f: (p) => (t) => Math.exp(-p.a * t),
      g: (s, p) => (t) => Math.exp(-(s + p.a) * t),
      thr: (p) => -p.a,
      F: (s, p) => 1 / (s + p.a),
      I: (s, p) => { const r = s + p.a; return Math.abs(r) < 1e-9 ? T : (1 - Math.exp(-r * T)) / r; },
      fTex: (p) => (p.a < 0 ? `e^{${n(-p.a)}t}` : `e^{-${n(p.a)}t}`), head: () => 'e^{-st}e^{-at}',
      entry: '\\frac{1}{s+a}', num: (S, p) => `\\frac{1}{${S} + ${par(p.a)}}`,
    },
    t: {
      f: () => (t) => t,
      g: (s) => (t) => t * Math.exp(-s * t),
      thr: () => 0,
      F: (s) => 1 / (s * s),
      I: (s) => (Math.abs(s) < 1e-9 ? T * T / 2 : (1 - Math.exp(-s * T) * (1 + s * T)) / (s * s)),
      fTex: () => 't', head: () => 'e^{-st}\\,t',
      entry: '\\frac{1}{s^2}', num: (S) => `\\frac{1}{${S}^2}`,
    },
    step: {
      f: (p) => (t) => (t >= p.b ? 1 : 0),
      g: (s, p) => (t) => (t >= p.b ? Math.exp(-s * t) : 0),
      thr: () => 0,
      F: (s, p) => Math.exp(-p.b * s) / s,
      I: (s, p) => (p.b >= T ? 0 : Math.abs(s) < 1e-9 ? T - p.b : (Math.exp(-s * p.b) - Math.exp(-s * T)) / s),
      fTex: (p) => `\\ku(t - ${n(p.b)})`, head: () => 'e^{-st}\\,\\ku(t-a)',
      entry: '\\frac{e^{-as}}{s}', num: (S, p) => `\\frac{e^{-${n(p.b)} \\cdot ${S}}}{${S}}`,
    },
    cos: {
      f: (p) => (t) => Math.cos(p.w * t),
      g: (s, p) => (t) => Math.exp(-s * t) * Math.cos(p.w * t),
      thr: () => 0,
      F: (s, p) => s / (s * s + p.w * p.w),
      I: (s, p) => (s + Math.exp(-s * T) * (p.w * Math.sin(p.w * T) - s * Math.cos(p.w * T))) / (s * s + p.w * p.w),
      fTex: (p) => `\\cos(${n(p.w)}t)`, head: () => 'e^{-st}\\cos(\\omega t)',
      entry: '\\frac{s}{s^2+\\omega^2}', num: (S, p) => `\\frac{${S}}{${S}^2 + ${n(p.w)}^2}`,
    },
  };
  const pick = choice(d.controls, { label: '\\kf(t)', key: 'f', value: 'one', options: [
    { value: 'one', label: '1' }, { value: 'exp', label: 'e^(−at)' }, { value: 't', label: 't' },
    { value: 'step', label: 'u(t − a)' }, { value: 'cos', label: 'cos ωt' }], onInput: (v) => showFor(v) });
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: -1, max: 6, step: 0.05, value: 1, unit: '', dec: 2,
    specials: [{ at: () => KINDS[pick.value].thr(params()), label: 'threshold' }] });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -1, max: 2, step: 0.05, value: 1, unit: '', dec: 2,
    specials: [{ at: () => -ss.v, label: 's = −a' }] });
  const bs = ctl(d.controls, { label: 'a', cls: '', key: 'a-step', min: 0, max: 4, step: 0.05, value: 1, unit: '', dec: 2 });
  const ws = ctl(d.controls, { label: '\\omega', cls: '', key: 'omega', min: 0.5, max: 4, step: 0.05, value: 1, unit: '', dec: 2 });
  const SL = { exp: as, step: bs, cos: ws };
  Object.values(SL).forEach((h) => h.show(false, { ms: 0 }));
  let shown = null;
  function showFor(v) {
    const h = SL[v] ?? null; if (h === shown) return;
    if (shown) shown.show(false);
    if (h) h.show(true);
    shown = h; ss.refresh();
  }
  const params = () => ({ a: +as.v.toFixed(2), b: +bs.v.toFixed(2), w: +ws.v.toFixed(2) });
  const ro = readout(d);
  const LEFT = { l: 130, r: 650, t: 150, b: 440 }, RIGHT = { l: 820, r: 1340, t: 150, b: 440 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), tc = C('transform');
    const p = params(), s = +ss.v.toFixed(2), K = KINDS[pick.value], thr = K.thr(p);
    const live = s > thr + 1e-9;
    const Fv = live ? K.F(s, p) : NaN, I6 = K.I(s, p);
    /* the curves bend from the last choice into this one; the numbers are this choice's */
    const blend = (fOf) => (x) => pick.mix((v) => fOf(KINDS[v])(x));
    const gNow = blend((k) => k.g(s, p)), fNow = blend((k) => k.f(p));
    const FNow = (x) => { const y = pick.mix((v) => { const k = KINDS[v]; return x > k.thr(p) + 1e-9 ? k.F(x, p) : NaN; }); return Number.isFinite(y) ? y : NaN; };
    hits = [];
    /* left: f faint, the integrand e^(−st) f(t) and the area under it on 0 ≤ t ≤ 6 */
    const aL = axes(ctx, LEFT, [0, T], [-1, 3], { xl: 't', yl: 'e^{−st} f(t)', yc: fc, nx: 6, ny: 4 });
    shade(ctx, aL, gNow, 0, 0, T, ic, { alpha: 0.32 });
    plot(ctx, aL, fNow, alpha(fc, 0.32), { w: 3 });
    plot(ctx, aL, gNow, fc);
    line(ctx, LEFT.r - 120, LEFT.t - 24, LEFT.r - 84, LEFT.t - 24, alpha(fc, 0.45), 3);
    text(ctx, 'f(t)', LEFT.r - 74, LEFT.t - 24, alpha(fc, 0.6), { size: 20, weight: 600 });
    const tm = 1.2;
    hits.push({ x: aL.X(tm), y: aL.Y(Math.max(-1, Math.min(3, gNow(tm)))), r: 16, name: 'the integrand e^(−st) f(t)' });
    hits.push({ x: aL.X(4.5), y: aL.Y(Math.max(-1, Math.min(3, fNow(4.5)))), r: 16, name: 'f(t), before the factor e^(−st)' });
    hits.push({ x: aL.X(0.5), y: aL.Y(Math.max(-0.9, Math.min(2.9, gNow(0.5) / 2))), r: 18, name: `the area under e^(−st) f(t) on 0 ≤ t ≤ 6: ${n(I6, 3)}` });
    /* right: F(s) over s, the threshold dashed, the point (s, F(s)) and the bar of the area */
    const aR = axes(ctx, RIGHT, [-1, 6], [0, 4], { xl: 's', yl: 'F(s)', yc: tc, nx: 7, ny: 4 });
    if (thr >= -1 && thr <= 6) {
      line(ctx, aR.X(thr), RIGHT.t, aR.X(thr), RIGHT.b, guide(), 2.5, [10, 10]);
      const name = pick.value === 'exp' ? `s = −a = ${n(thr)}` : 's = 0';
      text(ctx, name, aR.X(thr) + 10, RIGHT.t + 14, PAL.muted, { size: 17 });
      hits.push({ x: aR.X(thr), y: aR.Y(2), r: 14, name: `the threshold ${name}: the integral converges only for s beyond it` });
    }
    plot(ctx, aR, FNow, tc);
    hits.push({ x: aR.X(4.5), y: aR.Y(Math.min(4, Math.max(0, K.F(4.5, p)))), r: 16, name: `F(s) = ℒ{f(t)}, the transform` });
    if (live && s >= -1) {
      const top = Math.min(Fv, 4);
      line(ctx, aR.X(s), aR.Y(0), aR.X(s), aR.Y(top), alpha(ic, 0.6), 10);
      const at = pinned(ctx, RIGHT, aR.X, aR.Y, s, Fv, tc, Fv > 4 ? `F = ${n(Fv, 2)}` : undefined);
      hits.push({ x: at.x, y: at.y, r: 18, name: `(s, F(s)) = (${n(s)}, ${n(Fv, 3)}): its height is the whole area` });
    } else {
      text(ctx, 'no value', aR.X(s), aR.Y(0) - 20, PAL.muted, { size: 17, align: s < 0 ? 'left' : 'center' });
    }
    /* the words and the equation */
    const S = n(s), shows = pick.value === 'cos';
    if (live) {
      headline(ctx, `$s = ${S}$: the area under $${K.head(p)}$ is $\\kF(s) = ${K.entry} = ${n(Fv, 3)}$.`);
      ro.set(`\\kF(${S}) = \\int_0^\\infty ${s === 0 ? '' : `e^{${s < 0 ? n(-s) : `-${S}`}t}`}\\,${K.fTex(p)}\\,dt = ${K.num(S, p)} = ${n(Fv, 3)}`,
        `Shaded on $0 \\le t \\le 6$: ${n(I6, 3)}; the tail past $t = 6$ adds ${n(Fv - I6, 3)}.`, { form: 'live' });
    } else {
      const why = shows && Math.abs(s - thr) < 1e-9 ? 'swings back and forth without settling' : shows ? 'swings ever wider and never settles' : 'grows without bound';
      const bound = pick.value === 'exp' ? `s \\le -a = ${n(thr)}` : 's \\le 0';
      headline(ctx, `$s = ${S}$: the area under $${K.head(p)}$ ${why}, so $\\kF(s)$ is not defined for $${bound}$.`);
      const factor = s === 0 ? '' : `e^{${s < 0 ? n(-s) : `-${S}`}t}`;
      ro.set(`\\int_0^\\infty ${factor}\\,${K.fTex(p)}\\,dt \\text{ diverges, so } \\kF(${S}) \\text{ is not defined}`,
        `Shaded on $0 \\le t \\le 6$: ${n(I6, 3)}; past $t = 6$ the area ${shows ? 'never settles' : 'keeps growing'}.`, { form: 'div' });
    }
  }
  still(d, draw);
})();
};
