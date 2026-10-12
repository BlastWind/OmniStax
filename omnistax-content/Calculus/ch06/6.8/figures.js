/* Figures for section 6.8 Exponential Growth and Decay. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.8'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, text, headline, register, readout, fmt, drag } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 3) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const dash = (ctx, x1, y1, x2, y2, c = alpha(PAL.ink, 0.4)) => line(ctx, x1, y1, x2, y2, c, 2.5, [10, 10]);
const big = (v) => Math.round(v).toLocaleString('en-US');
/* the steps of a doubling or a halving: from (t₀, y) across one period and up or down to the next level */
function steps(ctx, ax, f, period, tmax, color) {
  for (let k = 0; (k + 1) * period <= tmax + 1e-9; k++) {
    const t0 = k * period, t1 = t0 + period;
    line(ctx, ax.X(t0), ax.Y(f(t0)), ax.X(t1), ax.Y(f(t0)), color, 2.5, [8, 6]);
    line(ctx, ax.X(t1), ax.Y(f(t0)), ax.X(t1), ax.Y(f(t1)), color, 2.5, [8, 6]);
    dot(ctx, ax.X(t1), ax.Y(f(t1)), color, false, 6);
  }
}

/* Figure 6.79: the bacteria of the text, f(t) = 200e^{kt} over two hours, with k from 0.01 to 0.04 per minute (the book's 0.02);
   the doublings every (ln 2)/k minutes are stepped in, and the dragged point reads f(t). */
(function () {
  const d = sim('sim-growth', 520);
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.01, max: 0.04, step: 0.001, value: 0.02, unit: '', dec: 3, specials: [{ at: 0.02, label: 'the book’s' }] });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: 120, step: 0.5, value: 90, unit: 'min', dec: 1 });
  const ro = readout(d);
  const P = drag(d, { x: ts, y: (t) => 200 * Math.exp(ks.v * t) });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), k = ks.v, f = (t) => 200 * Math.exp(k * t), D = Math.log(2) / k, t = ts.v;
    const ax = axes(ctx, { l: 230, r: 1180, t: 110, b: 450 }, [0, 120], [0, f(120) * 1.15], { xl: 't (min)', yl: 'population', nx: 6, ny: 4, nice: true, fy: (v) => big(v) });
    steps(ctx, ax, f, D, 120, alpha(PAL.ink, 0.55));
    plot(ctx, ax, f, fc, { x: [0, 120] });
    dash(ctx, ax.X(t), ax.Y(0), ax.X(t), ax.Y(f(t)));
    P.draw(ctx, ax, fc); dot(ctx, ax.X(t), ax.Y(f(t)), fc, true, 8);
    text(ctx, big(f(t)), ax.X(t) - 14, ax.Y(f(t)) - 22, fc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    const n = Math.floor(120 / D);
    headline(ctx, `k = ${fmt(k, 3)}: the population doubles every ${fmt(D, 1)} minutes, ${n} ${n === 1 ? 'time' : 'times'} in two hours.`);
    ro.set(`\\kf(${n2(t, 1)})=200e^{${n2(k, 3)}\\cdot ${n2(t, 1)}}=${typed('function', big(f(t)).replace(/,/g, '{,}'))}\\qquad \\text{doubling time}=\\frac{\\ln 2}{${n2(k, 3)}}=${n2(D, 1)}\\ \\text{min}`);
  }
  still(d, draw);
})();

/* Figure 6.80: a representative decay y = y₀e^{−kt} with y₀ = 100; the halvings every (ln 2)/k are stepped in. */
(function () {
  const d = sim('sim-decay', 480);
  const ks = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.1, max: 1.5, step: 0.01, value: 0.4, unit: '', dec: 2 });
  const ro = readout(d);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), k = ks.v, f = (t) => 100 * Math.exp(-k * t), H = Math.log(2) / k;
    const ax = axes(ctx, { l: 260, r: 1140, t: 100, b: 420 }, [0, 10], [0, 100], { xl: 't', yl: 'y', nx: 10, ny: 4 });
    steps(ctx, ax, f, H, 10, alpha(PAL.ink, 0.55));
    plot(ctx, ax, f, fc, { x: [0, 10] });
    text(ctx, '$y=100e^{-kt}$', ax.X(Math.min(9.5, 3 / k)) + 10, ax.Y(f(Math.min(9.5, 3 / k))) - 30, fc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    headline(ctx, `k = ${fmt(k, 2)}: the amount halves every ${fmt(H, 2)}, from 100 to 50, from 50 to 25, from 25 to 12.5.`);
    ro.set(`\\text{half-life}=\\frac{\\ln 2}{${n2(k, 2)}}=${typed('function', n2(H, 3))}`);
  }
  still(d, draw);
})();

/* The added Sim: the coffee of Example 6.45, T(t) = 130e^{−kt} + 70 with k = (ln 13 − ln 11)/2, poured at 200°F; the band is the
   serving range 155°F to 175°F, and the room's 70°F a dashed line the curve approaches. */
(function () {
  const d = sim('sim-cooling', 500);
  const k = (Math.log(13) - Math.log(11)) / 2, T = (t) => 130 * Math.exp(-k * t) + 70;
  const t1 = Math.log(130 / 105) / k, t2 = Math.log(130 / 85) / k;
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 0, max: 30, step: 0.05, value: 2, unit: 'min', dec: 2, specials: [{ at: 2, label: '2 min' }] });
  const ro = readout(d);
  const P = drag(d, { x: ts, y: T });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), t = ts.v, v = T(t);
    const ax = axes(ctx, { l: 230, r: 1180, t: 100, b: 430 }, [0, 30], [50, 210], { xl: 't (min)', yl: 'T (°F)', yc: fc, nx: 6, ny: 4 });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(ax.X(0), ax.Y(175), ax.X(30) - ax.X(0), ax.Y(155) - ax.Y(175)); ctx.restore();
    text(ctx, 'serving range', ax.X(29.5), ax.Y(165), PAL.muted, { size: 18, align: 'right' });
    dash(ctx, ax.X(0), ax.Y(70), ax.X(30), ax.Y(70)); text(ctx, 'room, 70°F', ax.X(29.5), ax.Y(70) - 16, PAL.muted, { size: 18, align: 'right' });
    plot(ctx, ax, T, fc, { x: [0, 30] });
    [t1, t2].forEach((s) => dash(ctx, ax.X(s), ax.Y(50), ax.X(s), ax.Y(T(s))));
    text(ctx, '2.56', ax.X(t1) + 6, ax.Y(62), PAL.ink, { size: 16, align: 'left' }); text(ctx, '5.09', ax.X(t2) + 6, ax.Y(62), PAL.ink, { size: 16, align: 'left' });
    P.draw(ctx, ax, fc); dot(ctx, ax.X(t), ax.Y(v), fc, true, 8);
    const state = v > 175 ? 'too hot to serve' : v >= 155 ? 'ready to serve' : 'too cold to serve';
    headline(ctx, `After ${fmt(t, 2)} min the coffee is at ${fmt(v, 1)}°F: ${state}.`);
    ro.set(`\\kT(${n2(t, 2)})=130e^{-${n2(k, 4)}\\cdot ${n2(t, 2)}}+70=${typed('function', n2(v, 1))}^{\\circ}\\text{F}`);
  }
  still(d, draw);
})();
};
