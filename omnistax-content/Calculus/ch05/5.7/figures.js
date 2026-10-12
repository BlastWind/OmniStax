/* Figures for section 5.7 Integrals Resulting in Inverse Trigonometric Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.7'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, dot, line, text, headline, register, readout, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Sim: the area under 1/√(1 − t²) from 0 to x is the angle sin⁻¹ x, and the area under 1/(1 + t²) from 0 to x is tan⁻¹ x.
   Left, the integrand and the area; right, the unit circle with that angle, its sine or its tangent of length x. The defaults
   are the bounds of Examples 5.49 (x = 1/2) and 5.53 (x = √3). Graph −1 to 1 by 0 to 4 (sine), −4 to 4 by 0 to 1.2 (tangent). */
(function () {
  const d = sim('sim-inverse-trig', 500);
  const CASES = {
    sin: { f: (t) => 1 / Math.sqrt(1 - t * t), inv: Math.asin, x: [-1, 1], y: [0, 4], ny: 4, range: { min: -0.99, max: 0.99, step: 0.01, value: 0.5 }, tex: '\\frac{1}{\\sqrt{1-t^{2}}}', name: '\\sin^{-1}', word: 'sine' },
    tan: { f: (t) => 1 / (1 + t * t), inv: Math.atan, x: [-4, 4], y: [0, 1.2], ny: 6, range: { min: -4, max: 4, step: 0.01, value: Math.sqrt(3) }, tex: '\\frac{1}{1+t^{2}}', name: '\\tan^{-1}', word: 'tangent' },
  };
  const pick = choice(d.controls, { label: '\\text{integrand}', options: [{ value: 'sin', label: '1/√(1 − t²)' }, { value: 'tan', label: '1/(1 + t²)' }], value: 'sin',
    onInput: () => xs.range(CASES[pick.value].range) });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -0.99, max: 0.99, step: 0.01, value: 0.5, unit: '', dec: 2, detents: [0.5, Math.sqrt(3) / 2] });
  const ro = readout(d);
  const NICE = [[Math.PI / 6, 'π/6'], [Math.PI / 4, 'π/4'], [Math.PI / 3, 'π/3']];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), ac = C('angle'), c = CASES[pick.value], x = Math.max(c.range.min, Math.min(c.range.max, xs.v)), th = c.inv(x);
    const ax = axes(ctx, { l: 110, r: 690, t: 90, b: 430 }, c.x, c.y, { xl: 't', yl: 'y', nx: c.x[1] - c.x[0], ny: c.ny, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : fmt(v, 1)), fy: (v) => fmt(v, c.y[1] < 2 ? 1 : 0) });
    if (Math.abs(x) > 1e-6) shade(ctx, ax, c.f, 0, Math.min(0, x), Math.max(0, x), ic, { alpha: 0.32 });
    plot(ctx, ax, c.f, fc, { x: pick.value === 'sin' ? [-0.999, 0.999] : c.x });
    text(ctx, `$${c.tex}$`, ax.box.r - 8, ax.box.t + 8, fc, { size: 22, weight: 600, align: 'right', base: 'top', tex: true, bg: PAL.panel });
    /* the unit circle */
    const O = { x: 1000, y: 280 }, R = 150;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(O.x, O.y, R, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    line(ctx, O.x - R - 30, O.y, O.x + R + 70, O.y, PAL.muted, 2); line(ctx, O.x, O.y + R + 30, O.x, O.y - R - 30, PAL.muted, 2);
    const P = { x: O.x + R * Math.cos(th), y: O.y - R * Math.sin(th) };
    line(ctx, O.x, O.y, P.x, P.y, PAL.ink, 3);
    if (pick.value === 'sin') {
      line(ctx, P.x, O.y, P.x, P.y, fc, 4);
      text(ctx, '$x$', P.x + 12, (O.y + P.y) / 2, fc, { size: 22, weight: 600, align: 'left', base: 'middle', tex: true, bg: PAL.panel });
    } else {
      const T = { x: O.x + R, y: O.y - R * x };
      line(ctx, O.x + R, O.y - R * 1.2, O.x + R, O.y + R * 1.2, alpha(PAL.ink, 0.3), 2, [4, 8]);
      line(ctx, P.x, P.y, T.x, Math.max(O.y - R * 1.2, Math.min(O.y + R * 1.2, T.y)), alpha(PAL.ink, 0.45), 2, [4, 8]);
      line(ctx, O.x + R, O.y, O.x + R, Math.max(O.y - R * 1.2, Math.min(O.y + R * 1.2, T.y)), fc, 4);
      text(ctx, '$x$', O.x + R + 12, (O.y + Math.max(O.y - R * 1.2, Math.min(O.y + R * 1.2, T.y))) / 2, fc, { size: 22, weight: 600, align: 'left', base: 'middle', tex: true, bg: PAL.panel });
    }
    ctx.save(); ctx.strokeStyle = ac; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(O.x, O.y, 46, th > 0 ? -th : 0, th > 0 ? 0 : -th); ctx.stroke(); ctx.restore();
    text(ctx, '$\\ktheta$', O.x + 62 * Math.cos(th / 2), O.y - 62 * Math.sin(th / 2), ac, { size: 22, weight: 600, align: 'center', base: 'middle', tex: true, bg: PAL.panel });
    dot(ctx, P.x, P.y, PAL.ink, true, 7);
    const nice = NICE.find(([v]) => Math.abs(Math.abs(th) - v) < 0.004);
    const say = nice ? ` = ${th < 0 ? '−' : ''}${nice[1]}` : '';
    headline(ctx, `x = ${fmt(x, 2)}: the area under the curve from 0 to x is ${fmt(th, 3)}${say}, the angle whose ${c.word} is ${fmt(x, 2)}.`);
    ro.set(`\\int_{0}^{${n(x, 2)}}${c.tex}\\,dt=${c.name}(${n(x, 2)})=${typed('angle', n(th, 3))}`, undefined, { form: pick.value });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
