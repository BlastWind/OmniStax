/* Figures for section 6.3 Convolution. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, line, dot, text, vbracket, headline, register, readout, fmt, hover, cycle, pinned, faded, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const par = (v, dec = 2) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
const guide = () => alpha(PAL.ink, 0.4);

/* Sim: the convolution (6.2), (f ∗ g)(t) = ∫₀ᵗ f(τ) g(t − τ) dτ, drawn as g flipped and slid under f. Three panels
   share one horizontal scale, so the line τ = t in the upper two falls on the point (t, (f ∗ g)(t)) below:
   top, f(τ) in conv-f and the flipped, shifted g(t − τ) in conv-g, drawn faint where τ < 0 (outside the overlap,
   where f is undefined); middle, the product f(τ) g(t − τ) on 0 ≤ τ ≤ t, its area shaded in integral; bottom,
   (f ∗ g)(t) in function, faint over the whole window and solid up to the present t, with a bracket from the axis
   to the point carrying the area. Four pairs, each with its closed form checked by SymPy:
     e^t ∗ t = e^t − t − 1 (Example 6.3.1), sin ωt ∗ cos ωt = ½ t sin ωt (Example 6.3.2),
     t ∗ e^(−t) = e^(−t) + t − 1 (Example 6.3.3), cos t ∗ e^(−t) = ½(cos t + sin t − e^(−t)) (Exercise 6.3.101).
   Windows, fixed per pair (the frame eases between them when the pair changes): τ and t over [−T/4, T] with T the
   run of t (2, 12, 4, 8); y ranges hold each pair's curves for every t ≤ T (the sine pair's ½ t sin ωt stays
   within ±6 for t ≤ 12 at every ω). Moving: t runs 0 to T in 6 s, then holds; the transport scrubs t. */
(function () {
  const d = sim('sim-convolution', 930);
  const PAIRS = {
    exp: { label: 'eᵗ ∗ t', T: 2, xr: [-0.5, 2], ya: [0, 8], yb: [0, 3], yc: [0, 5],
      f: () => (u) => Math.exp(u), g: () => (u) => u, fg: () => (t) => Math.exp(t) - t - 1,
      fh: 'f(τ) = e^τ', gh: 'g(t − τ) = t − τ',
      tex: (t) => `\\int_0^{${n(t)}} e^{\\tau}\\,(${n(t)}-\\tau)\\,d\\tau = e^{${n(t)}} - ${n(t)} - 1` },
    sin: { label: 'sin ωt ∗ cos ωt', T: 12, xr: [-3, 12], ya: [-1.2, 1.2], yb: [-1.2, 1.2], yc: [-6.5, 6.5],
      f: (w) => (u) => Math.sin(w * u), g: (w) => (u) => Math.cos(w * u), fg: (w) => (t) => 0.5 * t * Math.sin(w * t),
      fh: 'f(τ) = sin ωτ', gh: 'g(t − τ) = cos ω(t − τ)',
      tex: (t, w) => `\\int_0^{${n(t)}} \\sin(${n(w)}\\,\\tau)\\cos\\bigl(${n(w)}\\,(${n(t)}-\\tau)\\bigr)\\,d\\tau = \\tfrac{1}{2}\\,(${n(t)})\\sin(${n(w)}\\cdot ${n(t)})` },
    texp: { label: 't ∗ e⁻ᵗ', T: 4, xr: [-1, 4], ya: [0, 4.4], yb: [0, 4.4], yc: [0, 4],
      f: () => (u) => u, g: () => (u) => Math.exp(-u), fg: () => (t) => Math.exp(-t) + t - 1,
      fh: 'f(τ) = τ', gh: 'g(t − τ) = e^(−(t − τ))',
      tex: (t) => `\\int_0^{${n(t)}} \\tau\\, e^{-(${n(t)}-\\tau)}\\,d\\tau = e^{-${n(t)}} + ${n(t)} - 1` },
    cos: { label: 'cos t ∗ e⁻ᵗ', T: 8, xr: [-2, 8], ya: [-1.2, 1.2], yb: [-1.2, 1.2], yc: [-1, 1],
      f: () => (u) => Math.cos(u), g: () => (u) => Math.exp(-u), fg: () => (t) => 0.5 * (Math.cos(t) + Math.sin(t) - Math.exp(-t)),
      fh: 'f(τ) = cos τ', gh: 'g(t − τ) = e^(−(t − τ))',
      tex: (t) => `\\int_0^{${n(t)}} \\cos\\tau\\, e^{-(${n(t)}-\\tau)}\\,d\\tau = \\tfrac{1}{2}\\bigl(\\cos ${n(t)} + \\sin ${n(t)} - e^{-${n(t)}}\\bigr)` },
  };
  const pick = choice(d.controls, { label: 'pair', key: 'pair', value: 'exp', aria: 'the two functions convolved',
    options: Object.keys(PAIRS).map((v) => ({ value: v, label: PAIRS[v].label })),
    onInput: (v) => { cy.reset(); om.show(v === 'sin'); } });
  const om = ctl(d.controls, { label: '\\omega', cls: '', key: 'omega', min: 0.5, max: 3, step: 0.01, value: 1, unit: '', dec: 2,
    aria: 'the frequency ω of the sine and cosine', detents: [1], onInput: () => cy.reset() });
  om.show(false, { ms: 0 });
  const ro = readout(d);
  const TOP = { l: 150, r: 1110, t: 136, b: 306 }, MID = { l: 150, r: 1110, t: 404, b: 564 }, BOT = { l: 150, r: 1110, t: 662, b: 852 };
  const LX = 1146;
  const cy = cycle(() => PAIRS[pick.value].T, 1.2);
  register(d.fig, { update: (dt) => cy.step(dt, () => PAIRS[pick.value].T / 6), draw: () => draw(REDUCED ? PAIRS[pick.value].T : cy.now()) });
  let hits = [];
  hover(d.stage, () => hits);
  /* a legend entry at the right of a panel: a short stroke or a swatch, then the name */
  function key(ctx, y, color, s, swatch) {
    if (swatch) { ctx.save(); ctx.globalAlpha *= 0.35; ctx.fillStyle = color; ctx.fillRect(LX, y - 11, 34, 22); ctx.restore(); line(ctx, LX, y + 11, LX + 34, y + 11, color, 4); }
    else line(ctx, LX, y, LX + 34, y, color, 5);
    text(ctx, s, LX + 46, y, color, { size: 20, weight: 600 });
  }
  function draw(tNow) {
    const { ctx } = begin(d.c);
    const fcol = F.ref('conv-f'), gcol = F.ref('conv-g'), ic = C('integral'), fc = C('function');
    const P = PAIRS[pick.value], w = om.v;
    /* the frame eases from the last pair's window to this one's while the choice turns */
    const fr = pick.mix((v) => ({ x0: PAIRS[v].xr[0], x1: PAIRS[v].xr[1], a0: PAIRS[v].ya[0], a1: PAIRS[v].ya[1], b0: PAIRS[v].yb[0], b1: PAIRS[v].yb[1], c0: PAIRS[v].yc[0], c1: PAIRS[v].yc[1] }));
    const xr = [fr.x0, fr.x1];
    const t = Math.min(tNow, P.T), tr = +t.toFixed(2);
    const f = P.f(w), g = P.g(w), fg = P.fg(w), gs = (u) => g(t - u), prod = (u) => f(u) * g(t - u);
    hits = [];
    const aA = axes(ctx, TOP, xr, [fr.a0, fr.a1], { xl: 'τ', nx: 5, ny: 4, nice: true });
    const aB = axes(ctx, MID, xr, [fr.b0, fr.b1], { xl: 'τ', nx: 5, ny: 3, nice: true });
    const aC = axes(ctx, BOT, xr, [fr.c0, fr.c1], { xl: 't', xc: PAL.ink, nx: 5, ny: 4, nice: true });
    const k = pick.k < 1 ? pick.a(pick.value) : 1;
    faded(ctx, k, [0, 0], () => {
      /* top: f fixed on τ ≥ 0, the flipped g sliding with its head at τ = t */
      plot(ctx, aA, f, fcol, { w: 5, x: [0, P.T] });
      if (xr[0] < t) {
        if (t > 0) plot(ctx, aA, gs, gcol, { w: 5, x: [0, t] });
        plot(ctx, aA, gs, alpha(gcol, 0.35), { w: 4, x: [xr[0], Math.min(0, t)] });
      }
      /* middle: the product where both are defined, and its area */
      if (t > 0.002) {
        shade(ctx, aB, prod, 0, 0, t, ic, { alpha: 0.3 });
        plot(ctx, aB, prod, ic, { w: 4, x: [0, t] });
      }
      /* bottom: f ∗ g, faint ahead, solid behind, the bracket from the axis to the point */
      plot(ctx, aC, fg, alpha(fc, 0.22), { w: 3, x: [0, P.T] });
      if (t > 0) plot(ctx, aC, fg, fc, { w: 5, x: [0, t] });
    });
    const yv = fg(t), xT = aA.X(t);
    const at = pinned(ctx, aC.box, aC.X, aC.Y, t, yv, fc);
    line(ctx, xT, TOP.t, xT, at.y, guide(), 2.5, [4, 8]);
    if (Math.abs(aC.Y(yv) - aC.Y(0)) > 14) vbracket(ctx, xT + 16, aC.Y(0), at.y, ic);
    /* legends, fixed at the right of each panel */
    key(ctx, TOP.t + 34, fcol, 'f(τ)'); key(ctx, TOP.t + 84, gcol, 'g(t − τ)');
    key(ctx, MID.t + 34, ic, 'f(τ) g(t − τ)', true);
    text(ctx, 'its area', LX + 46, MID.t + 72, ic, { size: 18 });
    key(ctx, BOT.t + 34, fc, '(f ∗ g)(t)');
    const area = fg(tr);
    hits.push(
      { x: aA.X(P.T * 0.75), y: aA.Y(f(P.T * 0.75)), r: 18, name: `${P.fh}, fixed while g slides` },
      { x: aA.X(Math.max(xr[0] + 0.05 * (xr[1] - xr[0]), t - 0.2 * P.T)), y: aA.Y(gs(Math.max(xr[0] + 0.05 * (xr[1] - xr[0]), t - 0.2 * P.T))), r: 18, name: `${P.gh}: g flipped, its value at τ = t being g(0)` },
      { x: xT, y: (TOP.b + MID.t) / 2, r: 14, name: `the line τ = t = ${n(tr)}` },
      { x: aB.X(t / 2), y: aB.Y(prod(t / 2) / 2), r: 22, name: `the product f(τ) g(t − τ) on 0 ≤ τ ≤ ${n(tr)}; its area is ${n(area)}` },
      { x: at.x, y: at.y, r: 18, name: `(t, (f ∗ g)(t)) = (${n(tr)}, ${n(area)})` });
    headline(ctx, `$t = ${n(tr)}$: the product $\\kf(\\tau)\\kg(t-\\tau)$ lives on $0 \\le \\tau \\le ${n(tr)}$, and its area $${n(area)}$ is the height of $\\kfconvg$ at $t$.`);
    ro.set(`(\\kfconvg)(${n(tr)}) = ${P.tex(tr, w)} = ${n(area)}`, undefined, { form: pick.value });
  }
})();
};
