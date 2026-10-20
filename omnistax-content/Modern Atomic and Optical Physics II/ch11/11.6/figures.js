/* Figures for section 11.6 First-order coherence of Bose condensates. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, text, topline, axes, hover, readout, tex } = F;
const sim = (id, H) => F.sim(root, id, H);

/* Legend row above a graph box, right-aligned: [{ color, w, dash, fill, name }]. */
function legend(ctx, items, right, y) {
  let x = right;
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i], w = F.measure(ctx, it.name, { size: 17 });
    x -= w;
    text(ctx, it.name, x, y, PAL.ink, { size: 17 });
    x -= 52;
    if (it.fill) { ctx.save(); ctx.fillStyle = it.fill; ctx.fillRect(x, y - 10, 40, 20); ctx.restore(); }
    else line(ctx, x, y, x + 40, y, it.color, it.w, it.dash);
    x -= 28;
  }
}

/* =====================================================================
   FIGURE 11.11: two sodium condensates released ∆R_s apart, each a Gaussian
   wavepacket of initial width σ₀ = 1.5 µm, expanding freely (interactions
   neglected). With θ = ℏτ/mσ₀² and W² = σ₀²(1 + θ²), cloud j's amplitude is
   exp(−(x − x_j)²(1 − iθ)/2W²), the second carrying the relative phase φ; the
   cross term is cos(kx − φ) with k = ∆R_s θ/W², so the fringe spacing is
   2πW²/∆R_s θ → 2πℏτ/m∆R_s. Moving: τ runs 0 to 40 ms, linear.
   Axes fixed: x −200 to 200 µm; density relative to its peak, 0 to 1.
===================================================================== */
(function () {
  const d = sim('sim-two-condensates', 600);
  const HBAR = 1.054571817e-34, M = 22.98977 * 1.66053907e-27, S0 = 1.5, T = 40;
  const RATE = (HBAR / (M * S0 * S0 * 1e-12)) * 1e-3; /* θ per ms */
  const cy = cycle(() => T, 1.2);
  const dR = ctl(d.controls, { label: '\\kDeltaRs', cls: 'length', min: 20, max: 80, step: 1, value: 40, unit: 'µm', dec: 0,
    aria: 'the separation of the two condensates, in micrometres', onInput: () => cy.reset() });
  const ph = ctl(d.controls, { label: '\\kphi', cls: 'phase', min: 0, max: 2, step: 0.01, value: 0, unit: 'π', dec: 2,
    aria: 'the relative phase of the two condensates, in units of pi' });
  const G = { l: 150, r: 1250, t: 150, b: 470 };
  const hits = []; hover(d.stage, () => hits, d.c);
  let last = '';

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const tau = cy.now(), D = dR.v, a = D / 2, phi = ph.v * Math.PI;
    const th = RATE * tau, W2 = S0 * S0 * (1 + th * th), W = Math.sqrt(W2);
    const amp = (x, xj) => { const u = (x - xj) * (x - xj) / (2 * W2); return [Math.exp(-u), u * th]; };
    const N = 1600, xs = [], n1 = [], n2 = [], nt = [];
    let peak = 0;
    for (let i = 0; i <= N; i++) {
      const x = -200 + (400 * i) / N, [r1, p1] = amp(x, -a), [r2, p2] = amp(x, a);
      const re = r1 * Math.cos(p1) + r2 * Math.cos(p2 + phi), im = r1 * Math.sin(p1) + r2 * Math.sin(p2 + phi);
      xs.push(x); n1.push(r1 * r1); n2.push(r2 * r2); nt.push(re * re + im * im);
      peak = Math.max(peak, re * re + im * im);
    }
    const cD = C('density'), cL = C('length'), c1 = F.ref('bec-1'), c2 = F.ref('bec-2');
    const { X, Y } = axes(ctx, G, [-200, 200], [0, 1], {
      nx: 8, ny: 2, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1),
      xl: 'x (µm)', xc: cL, yl: 'density, relative to its peak', yc: cD,
    });
    const path = (arr) => { ctx.beginPath(); arr.forEach((v, i) => { const px = X(xs[i]), py = Y(v / peak); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); };
    ctx.save(); path(nt); ctx.lineTo(X(200), Y(0)); ctx.lineTo(X(-200), Y(0)); ctx.closePath(); ctx.fillStyle = alpha(cD, 0.18); ctx.fill(); ctx.restore();
    ctx.save(); path(nt); ctx.strokeStyle = cD; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
    [[n1, c1], [n2, c2]].forEach(([arr, c]) => { ctx.save(); path(arr); ctx.strokeStyle = c; ctx.lineWidth = 3; ctx.stroke(); ctx.restore(); });

    /* where the clouds were released, and their separation */
    const yb = G.b + 74;
    line(ctx, X(-a), G.b + 12, X(-a), yb, alpha(PAL.ink, 0.3), 2, [4, 8]); line(ctx, X(a), G.b + 12, X(a), yb, alpha(PAL.ink, 0.3), 2, [4, 8]);
    dot(ctx, X(-a), G.b, c1, false, 10); dot(ctx, X(a), G.b, c2, false, 10);
    line(ctx, X(-a), yb, X(a), yb, cL, 3);
    line(ctx, X(-a), yb - 10, X(-a), yb + 10, cL, 3); line(ctx, X(a), yb - 10, X(a), yb + 10, cL, 3);
    text(ctx, `$\\kDeltaRs$ = ${fmt(D, 0)} µm`, X(a) + 16, yb, cL, { size: 20, weight: 600, tex: true });
    hits.push({ x: X(-a), y: G.b, r: 16, name: 'condensate 1, released here at τ = 0' });
    hits.push({ x: X(a), y: G.b, r: 16, name: 'condensate 2, released here at τ = 0' });

    /* the fringe spacing, over two neighbouring central maxima once the clouds overlap */
    const k = (D * th) / W2, sp = k > 0 ? (2 * Math.PI) / k : Infinity;
    const overlap = Math.exp(-(a * a) / W2);
    if (overlap > 0.2 && sp * (G.r - G.l) / 400 > 18) {
      const x0 = (phi - 2 * Math.PI * Math.round(phi / (2 * Math.PI))) / k, yt = G.t - 14;
      line(ctx, X(x0), yt, X(x0 + sp), yt, cL, 3);
      line(ctx, X(x0), yt - 9, X(x0), yt + 9, cL, 3); line(ctx, X(x0 + sp), yt - 9, X(x0 + sp), yt + 9, cL, 3);
      line(ctx, X(x0), yt, X(x0), Y(1), alpha(PAL.ink, 0.3), 2, [4, 8]); line(ctx, X(x0 + sp), yt, X(x0 + sp), Y(1), alpha(PAL.ink, 0.3), 2, [4, 8]);
      text(ctx, `$\\kDeltaR$`, X(x0 + sp) + 14, yt, cL, { size: 22, weight: 600, tex: true });
      hits.push({ x: X(x0 + sp / 2), y: yt, r: 18, name: `the fringe spacing ΔR = ${fmt(sp, 1)} µm` });
    }
    legend(ctx, [
      { color: c1, w: 3, name: 'condensate 1 alone' },
      { color: c2, w: 3, name: 'condensate 2 alone' },
      { color: cD, w: 5, name: 'both' },
    ], G.r, G.t - 52);

    const ts = fmt(tau, 1), thv = RATE * +ts, spv = (2 * Math.PI * S0 * S0 * (1 + thv * thv)) / (D * thv);
    topline(ctx, overlap > 0.2
      ? `${ts} ms after release the clouds overlap, and their fringes are ${fmt(spv, 1)} µm apart.`
      : `${ts} ms after release each cloud has spread to ${fmt(W, 0)} µm, and the two have yet to meet.`);
    const tv = +ts, val = (2 * Math.PI * HBAR * tv * 1e-3) / (M * D * 1e-6) * 1e6;
    const s = `\\kDeltaR \\approx \\frac{2\\pi\\hbar\\,\\ktau}{\\km\\,\\kDeltaRs} = \\frac{2\\pi\\hbar \\times ${ts}\\ \\text{ms}}{(23.0\\ \\text{u}) \\times ${fmt(D, 0)}\\ \\mu\\text{m}} = ${fmt(val, 1)}\\ \\mu\\text{m}`;
    if (s !== last) { last = s; tex(d.readout, s, false, { values: false }); }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 11.12, recomputed (the book's image is published data and is not
   shown): the visibility of two atom-laser beams outcoupled ∆z apart, for an
   ideal gas. The thermal atoms' first-order coherence falls as
   e^{−π∆z²/λ_dB²}; the condensed share N_g.s./N = 1 − (T/T_c)³ of
   Eq. (11.10) is coherent at every distance. Still: T/T_c is a parameter.
   Axes fixed: ∆z 0 to 2.5 λ_dB(T_c); visibility 0 to 1.
===================================================================== */
(function () {
  const d = sim('sim-spatial-coherence', 580);
  const t = ctl(d.controls, { label: '\\kT/\\kTc', cls: 'temperature', min: 0.2, max: 2, step: 0.01, value: 0.8, unit: '', dec: 2,
    aria: 'the temperature as a fraction of the critical temperature', specials: [{ at: 1, label: 'critical temperature' }] });
  const ro = readout(d);
  const G = { l: 170, r: 1250, t: 150, b: 430 };
  const hits = []; hover(d.stage, () => hits, d.c);

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const T = t.v, f0 = +(T < 1 ? 1 - T * T * T : 0).toFixed(2), lam = +(1 / Math.sqrt(T)).toFixed(2);
    const th = (z) => (1 - f0) * Math.exp(-Math.PI * z * z / (lam * lam));
    const cC = F.ref('condensate'), cT = F.ref('thermal'), cL = C('length');
    const { X, Y } = axes(ctx, G, [0, 2.5], [0, 1], {
      nx: 5, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 2),
      xl: 'Δz (in units of λ_{dB}(T_c))', xc: cL, yl: 'visibility 𝒱', yc: PAL.ink,
    });
    const n = 240, zs = Array.from({ length: n + 1 }, (_, i) => (2.5 * i) / n);
    if (f0 > 0) { ctx.save(); ctx.fillStyle = alpha(cC, 0.4); ctx.fillRect(X(0), Y(f0), X(2.5) - X(0), Y(0) - Y(f0)); ctx.restore(); }
    ctx.save(); ctx.beginPath(); zs.forEach((z, i) => (i ? ctx.lineTo(X(z), Y(f0 + th(z))) : ctx.moveTo(X(z), Y(f0 + th(z)))));
    for (let i = n; i >= 0; i--) ctx.lineTo(X(zs[i]), Y(f0)); ctx.closePath(); ctx.fillStyle = alpha(cT, 0.4); ctx.fill(); ctx.restore();
    F.curve(ctx, (z) => f0 + th(z), 0, 2.5, X, Y, PAL.ink, 5, 240);
    if (f0 > 0) line(ctx, X(0), Y(f0), X(2.5), Y(f0), cC, 3, [10, 10]);

    /* λ_dB(T) along the axis */
    const yb = G.b + 66, xe = X(Math.min(lam, 2.5));
    line(ctx, X(0), yb, xe, yb, cL, 3); line(ctx, X(0), yb - 9, X(0), yb + 9, cL, 3); line(ctx, xe, yb - 9, xe, yb + 9, cL, 3);
    text(ctx, `$\\klambdadB$ = ${fmt(lam, 2)} $\\klambdadB(\\kTc)$`, (X(0) + xe) / 2, yb + 28, cL, { size: 20, weight: 600, align: 'center', tex: true });
    hits.push({ x: (X(0) + xe) / 2, y: yb, r: 16, name: `the deBroglie wavelength at this temperature, ${fmt(lam, 2)} λ_dB(T_c)` });
    if (f0 > 0) hits.push({ x: X(2.2), y: Y(f0 / 2), r: 30, name: `the condensed atoms: ${fmt(100 * f0, 0)} % of the visibility at every distance` });
    hits.push({ x: X(0.08), y: Y(f0 + (1 - f0) / 2), r: 24, name: `the thermal atoms: ${fmt(100 * (1 - f0), 0)} % of the visibility at Δz = 0, gone within about λ_dB` });
    legend(ctx, [
      { fill: alpha(cC, 0.4), name: 'condensed atoms' },
      { fill: alpha(cT, 0.4), name: 'thermal atoms' },
      { color: PAL.ink, w: 5, name: 'both' },
    ], G.r, G.t - 44);

    const at = Math.abs(T - 1) < 1e-9, w = fmt(lam / Math.sqrt(Math.PI), 2);
    topline(ctx, at
      ? `At $\\kTc$ nothing is condensed yet: the visibility falls to 1/e within ${w} $\\klambdadB(\\kTc)$.`
      : T > 1
        ? `Above $\\kTc$ all atoms are thermal, and the visibility falls to 1/e within ${w} $\\klambdadB(\\kTc)$.`
        : `At $\\kT$ = ${fmt(T, 2)} $\\kTc$ the condensed atoms hold the visibility at ${fmt(f0, 2)} at every distance.`);
    ro.set(`\\mathcal{V}(\\kDeltaz) = \\frac{\\kNgs}{N} + \\left(1 - \\frac{\\kNgs}{N}\\right)e^{-\\pi\\kDeltaz^2/\\klambdadB^2} = ${fmt(f0, 2)} + ${fmt(1 - f0, 2)}\\,e^{-\\pi\\kDeltaz^2/(${fmt(lam, 2)}\\,\\klambdadB(\\kTc))^2}`,
      (T < 1 ? `$\\kNgs/N = 1 - (\\kT/\\kTc)^3 = 1 - ${fmt(T, 2)}^3 = ${fmt(f0, 2)}$ by Eq. (11.10)` : `$\\kNgs/N = 0$ at and above $\\kTc$`)
      + `; $\\klambdadB = \\klambdadB(\\kTc)(\\kTc/\\kT)^{1/2}$ = ${fmt(lam, 2)} $\\klambdadB(\\kTc)$.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
