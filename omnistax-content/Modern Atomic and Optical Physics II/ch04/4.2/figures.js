/* Figures for section 4.2 Linear optical propagation.
   The book gives no numbers for the line, so frequencies are in units of γ and χ in units of
   (3/8π²)(N/V)λ³ with ρ₁₁⁰ − ρ₂₂⁰ = 1, the prefactor of Eq. (4.44): there
   χ = iγ/(γ₁₂ − iδν), Im χ = γγ₁₂/(γ₁₂² + δν²), Re χ = −γδν/(γ₁₂² + δν²).
   The velocity class resonant with the field is the section's one referent. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, label, axes, curve, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const tx = (x, d) => fmt(x, d).replace('−', '-');
const dashed = (ctx, draw) => { ctx.save(); ctx.setLineDash([14, 10]); draw(); ctx.restore(); };

/* =====================================================================
   FIGURE 4.1 · sim-susceptibility · still, 2D, graph alone
   Re χ dashed and Im χ solid against δν, Eq. (4.44). Axes fixed from the
   slider extremes: δν −6…6 γ; χ −1…2 (Im χ peaks at γ/γ₁₂ ≤ 2 for
   γ₁₂ ≥ γ/2, Re χ stays within ±γ/2γ₁₂ ≤ 1).
===================================================================== */
(function () {
  const d = sim('sim-susceptibility', 600);
  const dn = ctl(d.controls, { label: '\\kdeltanu', cls: 'frequency', key: 'deltanu', min: -6, max: 6, step: 0.05, value: 2, unit: 'γ', dec: 2,
    aria: 'the detuning delta nu, in units of gamma', specials: [{ at: 0, label: 'resonance' }] });
  const gw = ctl(d.controls, { label: '\\kgammaonetwo', cls: 'rate', key: 'gamma12', min: 0.5, max: 2, step: 0.01, value: 0.5, unit: 'γ', dec: 2,
    aria: 'the coherence decay rate gamma one two, in units of gamma', specials: [{ at: 0.5, label: 'radiative' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 160, r: 1250, t: 120, b: 530 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const g = gw.v, x0 = dn.v, S = C('susceptibility'), fq = C('frequency'), rt = C('rate');
    const im = (x) => g / (g * g + x * x), re = (x) => -x / (g * g + x * x);
    const { X, Y } = axes(ctx, BOX, [-6, 6], [-1, 2], { nx: 6, ny: 6, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kdeltanu/\\kgamma$', BOX.r, BOX.b + 58, fq, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kchi$', BOX.l, BOX.t - 26, S, { size: 22, weight: 600, tex: true });
    dashed(ctx, () => curve(ctx, re, -6, 6, X, Y, S, 5, 360));
    curve(ctx, im, -6, 6, X, Y, S, 5, 360);
    hbracket(ctx, X(0), X(g), Y(im(g)), rt, 'γ_{12}', { side: 'below' });
    hits.push({ x: X(g / 2), y: Y(im(g)), r: 22, name: 'the half-width γ₁₂ of the line, at half its height' });
    label(ctx, 'Im[χ]', X(0.35), Y(im(0.35)), { side: 'right', color: S, gap: 24 });
    label(ctx, 'Re[χ]', X(3.6), Y(re(3.6)), { side: 'below', color: S, gap: 30 });
    /* the cursor: both parts at δν, and the slope of Re χ there, which sets v_g (Eq. 4.42) */
    line(ctx, X(x0), BOX.t, X(x0), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    const s = -(g * g - x0 * x0) / (g * g + x0 * x0) ** 2;
    const px = X(1) - X(0), py = Y(0) - Y(1), ux = px, uy = -py * s, n = Math.hypot(ux, uy), L = 110;
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    line(ctx, X(x0) - (ux / n) * L, Y(re(x0)) - (uy / n) * L, X(x0) + (ux / n) * L, Y(re(x0)) + (uy / n) * L, alpha(S, 0.45), 3);
    ctx.restore();
    dot(ctx, X(x0), Y(im(x0)), S); dot(ctx, X(x0), Y(re(x0)), S);
    hits.push({ x: X(x0), y: Y(im(x0)), r: 18, name: 'Im[χ] = ' + fmt(im(x0), 2) + ', the absorptive part' },
      { x: X(x0), y: Y(re(x0)), r: 18, name: 'Re[χ] = ' + fmt(re(x0), 2) + ', the refractive part' },
      { x: X(x0) + (ux / n) * 70, y: Y(re(x0)) + (uy / n) * 70, r: 16, name: 'the slope dRe[χ]/dν = ' + fmt(s, 2) + ' per γ, which sets the group velocity' });
    const r = Math.abs(x0) / g;
    const at = `At $\\kdeltanu = ${tx(x0, 2)}\\kgamma$`;
    topline(ctx, Math.abs(x0) < 0.005 ? 'On resonance $\\kchi$ is purely imaginary: the medium absorbs and does not refract.'
      : Math.abs(r - 1) < 0.005 ? `${at} the medium refracts as strongly as it absorbs.`
      : r > 1 ? `${at} the medium refracts ${fmt(r, 1)} times as strongly as it absorbs.`
      : `${at} the medium absorbs ${fmt(1 / r, 1)} times as strongly as it refracts.`);
    const pre = '\\frac{3N\\klambda^3}{8\\pi^2\\kV}';
    const ri = im(x0), rr = re(x0);
    ro.set(`\\kchi = ${pre}\\,\\frac{i\\kgamma}{\\kgammaonetwo - i\\kdeltanu} = ${pre}\\,(${tx(rr, 2)} ${ri < 0 ? '-' : '+'} ${fmt(Math.abs(ri), 2)}\\,i)`,
      `$\\ksigmatilde = \\frac{3}{4\\pi}\\klambda^2\\frac{\\kgamma}{\\kgammaonetwo} = ${fmt(3 / (4 * Math.PI * g), 3)}\\,\\klambda^2$` + (g < 0.505 ? ', the unitary limit' : ''), { form: 'chi' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.2 · sim-doppler · still, 2D, graph alone
   Im χ(δν) = ∫dx g(x) γγ₁₂/(γ₁₂² + (δν − x)²), x = kv_z, g the Gaussian
   of Eq. (4.51) normalized to one with width w = kv_T: Eq. (4.50) in the
   units of Figure 4.1, integrated numerically (step ≤ γ₁₂/4 and w/4 over
   ±4w). Axes fixed: δν −12…12 γ (the widest Gaussian, w = 5, is down to
   e⁻⁵·⁸ at 12); Im χ 0…2 (the peak γ/γ₁₂ at γ₁₂ = γ/2).
   The thin velocity classes are drawn up to the spectrum at their centres,
   as the book draws them; the resonant class kv_z = δν is the referent.
===================================================================== */
(function () {
  const d = sim('sim-doppler', 600);
  const kv = ctl(d.controls, { label: '\\kkmag\\kvT', cls: 'frequency', key: 'kvT', min: 0, max: 5, step: 0.05, value: 3, unit: 'γ', dec: 2,
    aria: 'the Doppler width k v T, in units of gamma' });
  const gw = ctl(d.controls, { label: '\\kgammaonetwo', cls: 'rate', key: 'gamma12', min: 0.5, max: 2, step: 0.01, value: 0.5, unit: 'γ', dec: 2,
    aria: 'the coherence decay rate gamma one two, in units of gamma', specials: [{ at: 0.5, label: 'radiative' }] });
  const dn = ctl(d.controls, { label: '\\kdeltanu', cls: 'frequency', key: 'deltanu', min: -10, max: 10, step: 0.1, value: 2, unit: 'γ', dec: 1,
    aria: 'the detuning delta nu of the field, in units of gamma' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 160, r: 1250, t: 130, b: 530 };
  const SQPI = Math.sqrt(Math.PI);
  let key = '', spec = null;
  /* the spectrum on a fixed grid, recomputed only when kv_T or γ₁₂ moves */
  function spectrum(w, g) {
    const k = w + '|' + g; if (k === key) return spec;
    const lor = (x) => g / (g * g + x * x);
    let f = lor;
    if (w >= 0.02) {
      const h = Math.min(w, g) / 4, m = Math.ceil((8 * w) / h), us = [], ws = [];
      for (let i = 0; i <= m; i++) { const u = -4 * w + (8 * w * i) / m; us.push(u); ws.push(((i === 0 || i === m) ? 0.5 : 1) * ((8 * w) / m) * Math.exp(-(u * u) / (w * w)) / (SQPI * w)); }
      f = (x) => { let s = 0; for (let i = 0; i < us.length; i++) s += ws[i] * lor(x - us[i]); return s; };
    }
    const N = 400, xs = [], ys = [];
    for (let i = 0; i <= N; i++) { const x = -12 + (24 * i) / N; xs.push(x); ys.push(f(x)); }
    key = k; spec = { f, at: (x) => { const t = Math.max(0, Math.min(N, ((x + 12) / 24) * N)), i = Math.min(N - 1, Math.floor(t)); return ys[i] + (ys[i + 1] - ys[i]) * (t - i); }, peak: f(0) };
    return spec;
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const w = kv.v, g = gw.v, x0 = dn.v, S = C('susceptibility'), fq = C('frequency'), rt = C('rate'), rc = F.ref('resonant-class');
    const sp = spectrum(w, g), cls = (c, h) => (x) => (h * g * g) / (g * g + (x - c) * (x - c));
    const { X, Y } = axes(ctx, BOX, [-12, 12], [0, 2], { nx: 6, ny: 4, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kdeltanu/\\kgamma$', BOX.r, BOX.b + 58, fq, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\mathrm{Im}[\\kchi]$', BOX.l, BOX.t - 26, S, { size: 22, weight: 600, tex: true });
    line(ctx, BOX.l, Y(1 / g), BOX.r, Y(1 / g), alpha(PAL.ink, 0.4), 3, [10, 10]);
    label(ctx, 'atoms at rest', X(-10), Y(1 / g), { side: 'below', color: PAL.muted, leader: false, size: 17 });
    hits.push({ x: X(-7), y: Y(1 / g), r: 14, name: 'the peak γ/γ₁₂ = ' + fmt(1 / g, 2) + ' of the line of atoms at rest' });
    const cs = w < 0.02 ? [0] : Array.from({ length: 13 }, (_, j) => (j - 6) * 0.4 * w);
    cs.forEach((c) => {
      const h = sp.f(c); curve(ctx, cls(c, h), -12, 12, X, Y, alpha(PAL.ink, 0.45), 2, 300);
      hits.push({ x: X(c), y: Y(h), r: 12, name: 'the velocity class kv_z = ' + fmt(c, 1) + 'γ' });
    });
    curve(ctx, sp.at, -12, 12, X, Y, S, 5, 400);
    hits.push({ x: X(0), y: Y(sp.peak), r: 18, name: 'the absorption spectrum of the gas, Im[χ] = ' + fmt(sp.peak, 2) + ' on resonance' });
    const hx = sp.f(x0);
    curve(ctx, cls(x0, hx), -12, 12, X, Y, rc, 5, 400);
    if (hx > 0.1) { hbracket(ctx, X(x0), X(x0 + g), Y(hx / 2), rt); label(ctx, 'γ_{12}', X(x0 + g), Y(hx / 2), { side: 'right', color: rt, leader: false, gap: 16 }); }
    label(ctx, 'kv_z = δν', X(x0), Y(hx), { side: 'above', color: rc, gap: 26 });
    hits.push({ x: X(x0), y: Y(hx), r: 18, name: 'the velocity class on resonance with the field, kv_z = δν = ' + fmt(x0, 1) + 'γ' });
    if (w >= 2 * g) {
      const yb = Y(sp.peak) - 60;
      hbracket(ctx, X(-w), X(w), yb, fq, '2kv_T');
      hits.push({ x: X(0), y: yb, r: 18, name: 'the Doppler width, ±kv_T about resonance' });
    }
    const R = sp.peak * g;
    topline(ctx, `The field at $\\kdeltanu = ${tx(x0, 1)}\\kgamma$ is resonant with the class $k\\kvz = ${tx(x0, 1)}\\kgamma$; on resonance the gas absorbs ${fmt(R, 2)} times as strongly as atoms at rest.`);
    if (w >= 3 * g) ro.set(`\\frac{\\sigma_{inhom.}(0)}{\\ksigmatilde} = ${fmt(R, 2)} \\approx \\frac{\\sqrt{\\pi}\\kgammaonetwo}{k\\kvT} = ${fmt((SQPI * g) / w, 2)}`, '', { form: 'est' });
    else ro.set(`\\frac{\\sigma(0)}{\\ksigmatilde} = ${fmt(R, 2)}`, '', { form: 'exact' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
