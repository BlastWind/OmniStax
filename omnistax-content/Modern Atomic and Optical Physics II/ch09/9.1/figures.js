/* Figures for section 9.1 Basic properties of quantum fields.
   Quadratures as the book defines them, x̂ = (â + â†)/√2, p̂ = (â − â†)/i√2 (Eqs. 9.13–9.14):
   a coherent state sits at (√2 Re α, √2 Im α) with ⟨δx²⟩ = ⟨δp²⟩ = 1/2. The field is
   Ê ∝ x̂ cos ωt + p̂ sin ωt (Eq. 9.17), in units of √(ħω/ε₀V). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, text, topline, label, axes, curve, hbracket, vbracket, hover, readout, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const S2 = Math.SQRT2, SD = 1 / S2;

/* =====================================================================
   FIGURE 9.1 + 9.2 · sim-coherent · moving, 2D, graphs beside
   Left: the x̂, p̂ plane, −8…8 fixed (√2·4 + 1/√2 = 6.4 at the largest |α|),
   the circle of diameter √2 at √2α. A dashed line through the origin turns
   at ω: the quadrature x̂ cos ωt + p̂ sin ωt; the circle's shadow on it is the
   field. Right above: ρ_nn = e^{−|α|²}|α|^{2n}/n!, n 0…32, 0…0.3 fixed (bars
   past 0.3, at |α| < 1.3, are cut at the top and carry their value). Right
   below: the field over ωt 0…4π, −8…8 fixed, mean √2|α|cos(ωt − φ) ± 1/√2.
===================================================================== */
(function () {
  const d = sim('sim-coherent', 700);
  const T = 4 * Math.PI, NMAX = 32, PMAX = 0.3, R = 8;
  const cy = cycle(() => T, 1.2);
  const am = ctl(d.controls, { label: '|\\kalphacoh|', cls: 'quadrature', key: 'alpha', min: 0, max: 4, step: 0.001, value: 3.162, unit: '', dec: 2,
    aria: 'the magnitude of the coherent amplitude alpha', onInput: () => cy.reset(),
    specials: [{ at: 0, label: 'vacuum' }, { at: Math.sqrt(10), label: 'n̄ = 10' }] });
  const ph = ctl(d.controls, { label: '\\kphi', cls: 'phase', key: 'phi', min: 0, max: 2, step: 0.01, value: 0.2, unit: 'π', dec: 2,
    aria: 'the argument phi of alpha, in units of pi', onInput: () => cy.reset(),
    specials: [{ at: 0, label: 'in phase' }, { at: 0.5, label: 'out of phase' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const PS = { l: 100, r: 620, t: 130, b: 650 }, BARS = { l: 770, r: 1340, t: 150, b: 350 }, TR = { l: 770, r: 1340, t: 440, b: 620 };
  const PI_TICK = ['0', 'π', '2π', '3π', '4π'];
  function poisson(nb) {
    const p = [Math.exp(-nb)];
    for (let n = 1; n <= NMAX; n++) p.push((p[n - 1] * nb) / n);
    return p;
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const a = am.v, phi = ph.v * Math.PI, nb = a * a, dn = Math.sqrt(nb), now = cy.now();
    const q = C('quadrature'), st = C('state'), pc = C('phase'), pop = C('population');
    const mean = (wt) => S2 * a * Math.cos(wt - phi);

    /* the phase plane */
    const { X, Y } = axes(ctx, PS, [-R, R], [-R, R], { nx: 8, ny: 8 });
    text(ctx, '$\\kxquad$', PS.r - 6, Y(0) - 22, q, { size: 24, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$\\kpquad$', X(0) + 18, PS.t + 14, q, { size: 24, weight: 600, tex: true, bg: PAL.panel });
    const k = (PS.r - PS.l) / (2 * R), cx = X(S2 * a * Math.cos(phi)), cyy = Y(S2 * a * Math.sin(phi)), rr = SD * k;
    /* the quadrature measured now, through the origin at ωt */
    const ux = Math.cos(now), uy = Math.sin(now), L = R / Math.max(Math.abs(ux), Math.abs(uy));
    line(ctx, X(-L * ux), Y(-L * uy), X(L * ux), Y(L * uy), alpha(PAL.ink, 0.4), 2, [10, 10]);
    const s = mean(now), fx = X(s * ux), fy = Y(s * uy);
    line(ctx, cx, cyy, fx, fy, alpha(PAL.ink, 0.35), 2, [4, 8]);
    ctx.save(); ctx.fillStyle = alpha(st, 0.45); ctx.strokeStyle = st; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyy, rr, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    if (a > 0.05) {
      line(ctx, X(0), Y(0), cx, cyy, q, 5);
      if (a > 0.6) angleArc(ctx, { x: X(0), y: Y(0) }, 46, 0, phi, 'φ', undefined, pc);
      const mx = X(0) + 0.62 * (cx - X(0)), my = Y(0) + 0.62 * (cyy - Y(0)), nx = -Math.sin(phi), ny = -Math.cos(phi);
      if (a > 2) label(ctx, '√2|α|', mx + nx * 30, my + ny * 30, { side: nx < 0 ? 'left' : 'right', color: q, gap: 4, leader: false, size: 22 });
    }
    hbracket(ctx, cx - rr, cx + rr, cyy - rr - 16, st);
    label(ctx, 'δx', cx, cyy - rr - 16, { side: 'above', color: st, gap: 18, leader: false, size: 20 });
    vbracket(ctx, cx + rr + 16, cyy - rr, cyy + rr, st, 'δp', 1, { size: 20 });
    line(ctx, X((s - SD) * ux), Y((s - SD) * uy), X((s + SD) * ux), Y((s + SD) * uy), q, 7);
    dot(ctx, fx, fy, q);
    hits.push({ x: cx, y: cyy, r: Math.max(rr, 18), name: `the coherent state |α⟩: a circle of diameter √2, δx = δp = 1/√2, at (${fmt(S2 * a * Math.cos(phi), 2)}, ${fmt(S2 * a * Math.sin(phi), 2)})` },
      { x: (X(0) + cx) / 2, y: (Y(0) + cyy) / 2, r: 20, name: `√2|α| = ${fmt(S2 * a, 2)}, the distance from the origin` },
      { x: fx, y: fy, r: 18, name: `the quadrature x̂ cos ωt + p̂ sin ωt now: ${fmt(s, 2)} ± ${fmt(SD, 2)}` },
      { x: X(0.6 * L * ux), y: Y(0.6 * L * uy), r: 16, name: 'the direction of the quadrature the field shows now, at the angle ωt' });

    /* the photon number distribution */
    const B = axes(ctx, BARS, [0, NMAX], [0, PMAX], { nx: 8, ny: 3, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\krhonn$', BARS.l, BARS.t - 26, pop, { size: 22, weight: 600, tex: true });
    text(ctx, 'n', BARS.r, BARS.b + 52, PAL.ink, { size: 20, weight: 600, align: 'right' });
    const P = poisson(nb), bw = 0.7 * (B.X(1) - B.X(0)), grow = F.ease.smooth(F.arrival(d));
    const cut = [];
    P.forEach((p, n) => {
      const top = Math.min(p, PMAX) * grow, x = B.X(n);
      if (p * grow < 1e-4) return;
      ctx.save(); ctx.fillStyle = alpha(pop, 0.75); ctx.fillRect(x - bw / 2, B.Y(top), bw, B.Y(0) - B.Y(top)); ctx.restore();
      if (p > PMAX) cut.push(n);
      hits.push({ x, y: B.Y(top / 2), r: Math.max(10, (B.Y(0) - B.Y(top)) / 2), name: `n = ${n}: ρ_nn = ${fmt(p, 3)}` });
    });
    cut.forEach((n, i) => text(ctx, `n = ${n}: ${fmt(P[n], 2)}`, B.X(cut[cut.length - 1]) + bw / 2 + 12, BARS.t + 14 + 24 * i, pop, { size: 17, weight: 600, bg: PAL.panel }));
    if (Math.max(...P) < 0.8 * PMAX && nb + dn <= NMAX) {
      const ytop = B.Y(Math.min(PMAX, Math.max(...P))) - 20;
      hbracket(ctx, B.X(nb - dn), B.X(nb + dn), Math.max(BARS.t + 10, ytop), pop);
      label(ctx, 'n̄ ± √n̄', B.X(nb), Math.max(BARS.t + 10, ytop), { side: 'above', color: pop, gap: 20, leader: false, size: 20 });
    }

    /* the field */
    const E = axes(ctx, TR, [0, T], [-R, R], { nx: 4, ny: 4, fx: (v) => PI_TICK[Math.round(v / Math.PI)] || '', xl: 'ωt', xc: pc });
    text(ctx, '$\\kxquad\\cos\\komega\\kt + \\kpquad\\sin\\komega\\kt$', TR.l, TR.t - 24, q, { size: 20, weight: 600, tex: true });
    const band = (t0, t1, fill) => {
      const n = 160; ctx.save(); ctx.fillStyle = fill; ctx.beginPath();
      for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; const yy = E.Y(mean(t) + SD); if (i) ctx.lineTo(E.X(t), yy); else ctx.moveTo(E.X(t), yy); }
      for (let i = n; i >= 0; i--) { const t = t0 + ((t1 - t0) * i) / n; ctx.lineTo(E.X(t), E.Y(mean(t) - SD)); }
      ctx.closePath(); ctx.fill(); ctx.restore();
    };
    band(0, T, alpha(q, 0.08));
    ctx.save(); ctx.globalAlpha *= 0.25; curve(ctx, mean, 0, T, E.X, E.Y, q, 3, 240); ctx.restore();
    if (now > 0) { band(0, now, alpha(q, 0.28)); curve(ctx, mean, 0, now, E.X, E.Y, q, 5, Math.max(2, Math.round(240 * now / T))); }
    line(ctx, E.X(now), E.Y(s - SD), E.X(now), E.Y(s + SD), q, 7);
    dot(ctx, E.X(now), E.Y(s), q);
    hits.push({ x: E.X(now), y: E.Y(s), r: 18, name: `the field at ωt = ${fmt(now / Math.PI, 2)}π: ${fmt(s, 2)} ± ${fmt(SD, 2)}` });

    topline(ctx, a < 1e-9
      ? 'The vacuum: no photons, and a field that only fluctuates, ±0.71 about zero.'
      : `$\\knbar$ = ${fmt(nb, 1)} photons on average, give or take ${fmt(dn, 2)}; the field swings ±${fmt(S2 * a, 2)} with a spread of ±0.71.`);
    ro.set(`\\krhonn = e^{-|\\kalphacoh|^2}\\frac{|\\kalphacoh|^{2n}}{n!}, \\quad \\knbar = |\\kalphacoh|^2 = ${fmt(nb, 2)}, \\quad \\sqrt{\\langle\\Delta n^2\\rangle} = \\sqrt{\\knbar} = ${fmt(dn, 2)}`,
      `The field $\\kxquad\\cos\\komega\\kt + \\kpquad\\sin\\komega\\kt$ has mean $\\sqrt{2}|\\kalphacoh|\\cos(\\komega\\kt - \\kphi) = ${fmt(S2 * a, 2)}\\cos(\\komega\\kt - ${fmt(ph.v, 2)}\\pi)$ and spread $\\sqrt{\\langle\\delta x^2\\rangle} = 1/\\sqrt{2}$ at every $\\komega\\kt$.`, { form: 'poisson' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();
};
