/* Figures for section 5.2 Resonant excitation: Electromagnetically induced transparency.
   The book gives no numbers: the EIT figure measures frequencies in units of γ₁₃ (5.1's choice for
   Figure 5.3), the dark-state Sim rates in units of γ₃ and time in 1/γ₃ (5.1's Rabi Sim).
   The Λ scheme's levels |1⟩, |2⟩, |3⟩ and its two fields are the section's referents, one group. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, axes, curve, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const ket = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });

/* =====================================================================
   FIGURE 5.4 + 5.5 · sim-eit · still, 2D, graph alone
   ρ₃₁/Ω₁ = iΓ₁₂/(Γ₁₂Γ₁₃ + |Ω₂|²), Eqs. (5.32)–(5.33) = (5.46), exact, with
   Γ₁₂ = γ₁₂ − iδ, Γ₁₃ = γ₁₃ − iΔ₁, δ = Δ₁ − Δ₂ and γ₁₃ = 1. Axes fixed:
   Δ₁ −8…8, ρ₃₁/Ω₁ −0.6…1.2 (Im ≤ 1 and |Re| ≤ 0.5 at every slider position).
   Sampled densely about δ = 0 and the light-shifted peak δ = |Ω₂|²/Δ₂.
   Im solid, Re dashed, one hue (COLOR.md).
===================================================================== */
(function () {
  const d = sim('sim-eit', 600);
  const D2 = ctl(d.controls, { label: '\\kDeltatwo', cls: 'frequency', key: 'Delta2', min: 0, max: 6, step: 0.05, value: 0, unit: 'γ₁₃', dec: 2,
    aria: 'the detuning of the coupling field, in units of gamma 1 3', specials: [{ at: 0, label: 'resonance' }] });
  const Om = ctl(d.controls, { label: '|\\kOmegatwo|', cls: 'coupling', key: 'Omega2', min: 0, max: 3, step: 0.02, value: 0.6, unit: 'γ₁₃', dec: 2,
    aria: 'the Rabi frequency of the coupling field, in units of gamma 1 3', specials: [{ at: 0, label: 'no coupling field' }, { at: 1, label: '|Ω₂| = γ₁₃' }] });
  const G = ctl(d.controls, { label: '\\kgammaonetwo', cls: 'rate', key: 'gamma12', min: 0, max: 0.3, step: 0.01, value: 0, unit: 'γ₁₃', dec: 2,
    aria: 'the decay rate of the lower-state coherence, in units of gamma 1 3', specials: [{ at: 0, label: 'γ₁₂ → 0' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 170, r: 1310, t: 130, b: 500 };
  /* ρ₃₁/Ω₁ at probe detuning x, as [Re, Im] */
  const resp = (x, D, O, g) => {
    const ar = 1, ai = -x;                                    /* Γ₁₃ */
    if (O < 1e-9) { const m = ar * ar + ai * ai; return [ai / m, ar / m]; }   /* i/Γ₁₃ */
    const br = g, bi = -(x - D);                               /* Γ₁₂ */
    const nr = -bi, ni = br;                                   /* iΓ₁₂ */
    const dr = br * ar - bi * ai + O * O, di = br * ai + bi * ar;
    const m = dr * dr + di * di;
    if (m < 1e-300) return [0, 0];
    return [(nr * dr + ni * di) / m, (ni * dr - nr * di) / m];
  };
  /* sample points: an even grid plus a log-spaced cluster on each narrow feature */
  const grid = (D, O) => {
    const xs = []; for (let i = 0; i <= 1600; i++) xs.push(-8 + i / 100);
    const centres = [D]; if (D > 0.3 && O > 0) centres.push(D + (O * O) / D);
    centres.forEach((c) => { for (let k = 0; k < 200; k++) { const o = 1e-4 * Math.pow(1.05, k); xs.push(c - o, c + o); } xs.push(c); });
    return xs.filter((x) => x >= -8 && x <= 8).sort((a, b) => a - b);
  };
  const legend = (ctx, x, y, dash, s, col) => { line(ctx, x, y, x + 54, y, col, dash ? 3 : 5, dash ? [10, 10] : undefined); text(ctx, s, x + 66, y, col, { size: 20, weight: 600, tex: true }); };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const D = D2.v, O = Om.v, g = G.v, chi = C('susceptibility'), fr = C('frequency');
    const { X, Y } = axes(ctx, BOX, [-8, 8], [-0.6, 1.2], { nx: 8, ny: 9, xc: fr, yc: chi, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kDeltaone$ (γ₁₃)', BOX.r, BOX.b + 58, fr, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kchi \\propto \\krhothreeone/\\kOmegaone$ (1/γ₁₃)', BOX.l, BOX.t - 30, chi, { size: 20, weight: 600, tex: true });
    /* the two resonances */
    const guide = alpha(PAL.ink, 0.35);
    line(ctx, X(0), BOX.t, X(0), BOX.b, guide, 2, [4, 8]);
    if (D > 0) {
      line(ctx, X(D), BOX.t, X(D), BOX.b, guide, 2, [4, 8]);
      text(ctx, '$\\kDeltaone = 0$', X(0) - 8, BOX.t - 14, fr, { size: 18, weight: 600, align: 'right', tex: true, bg: PAL.panel });
      text(ctx, '$\\kdelta = 0$', X(D) + 8, BOX.t - 14, fr, { size: 18, weight: 600, align: 'left', tex: true, bg: PAL.panel });
      hits.push({ x: X(0), y: BOX.t - 14, r: 22, name: 'the single-photon resonance, Δ₁ = 0' }, { x: X(D), y: BOX.t - 14, r: 22, name: 'the two-photon resonance, δ = Δ₁ − Δ₂ = 0' });
    } else {
      text(ctx, '$\\kDeltaone = \\kdelta = 0$', X(0) + 8, BOX.t - 14, fr, { size: 18, weight: 600, align: 'left', tex: true, bg: PAL.panel });
      hits.push({ x: X(0), y: BOX.t - 14, r: 22, name: 'both resonances, Δ₁ = δ = 0' });
    }
    /* the curves on a shared, feature-dense grid */
    const xs = grid(D, O), n = xs.length - 1, at = (u) => xs[Math.min(n, Math.max(0, Math.round(u)))];
    const XU = (u) => X(at(u));
    const clip = (v) => Math.max(-0.6, Math.min(1.2, v));
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (u) => clip(resp(at(u), D, O, g)[0]), 0, n, XU, Y, chi, 3, n); ctx.restore();
    curve(ctx, (u) => clip(resp(at(u), D, O, g)[1]), 0, n, XU, Y, chi, 5, n);
    legend(ctx, BOX.l + 24, Y(1.08), false, '$\\mathrm{Im}[\\kchi]$', chi);
    legend(ctx, BOX.l + 24, Y(0.92), true, '$\\mathrm{Re}[\\kchi]$', chi);
    hits.push({ x: BOX.l + 80, y: Y(1.08), r: 30, name: 'Im χ: the absorption of the probe' }, { x: BOX.l + 80, y: Y(0.92), r: 30, name: 'Re χ: the dispersion, which sets the index of refraction' });
    /* the absorption at the two-photon resonance */
    const im0 = resp(D, D, O, g)[1];
    dot(ctx, X(D), Y(im0), chi);
    hits.push({ x: X(D), y: Y(im0), r: 18, name: `the absorption at δ = 0, Im[ρ₃₁/Ω₁] = ${fmt(im0, 3)}/γ₁₃` });
    /* the dressed states the strong coupling field makes, 2|Ω₂| apart */
    if (D === 0 && O >= 1) {
      const cpl = C('coupling'), yb = Y(1.1);
      hbracket(ctx, X(-O), X(O), yb, cpl, `2|Ω₂| = ${fmt(2 * O, 2)}`, { side: 'below' });
      hits.push({ x: X(-O), y: yb, r: 20, name: 'the transition to one dressed state |±⟩, at Δ₁ = −|Ω₂|' }, { x: X(O), y: yb, r: 20, name: 'the transition to the other dressed state |±⟩, at Δ₁ = +|Ω₂|' });
    }
    const pct = fmt(100 * im0, im0 < 0.1 ? 1 : 0);
    topline(ctx, O < 1e-9 ? 'With no coupling field the probe sees the bare single-photon line, absorbed most at $\\kDeltaone = 0$.'
      : D === 0 ? (g === 0 ? 'On resonance the probe is not absorbed at all at $\\kdelta = 0$: a dark resonance at the centre of the line.'
        : `On resonance the probe absorption at $\\kdelta = 0$ falls to ${pct} % of the bare line's peak.`)
      : `At the two-photon resonance $\\kdelta = 0$, ${fmt(D, 2)} γ₁₃ from the single-photon line, the probe absorption is ${pct} % of the bare line's peak.`);
    const IM = '\\mathrm{Im}\\left[\\frac{\\krhothreeone}{\\kOmegaone}\\right]_{\\kdelta = 0}';
    if (O < 1e-9 && g === 0) {
      ro.set(`${IM} = \\mathrm{Im}\\left[\\frac{i}{\\kGammaonethree}\\right] = \\frac{\\kgammaonethree}{\\kgammaonethree^2 + \\kDeltatwo^2} = ${fmt(im0, 3)}/\\kgammaonethree`, '', { form: 'bare' });
    } else if (D === 0) {
      const W = O < 1 ? g + O * O : g + O, S = 1 / (O * O + g);
      ro.set(`${IM} = \\frac{\\kgammaonetwo}{\\kgammaonethree\\kgammaonetwo + |\\kOmegatwo|^2} = \\frac{${fmt(g, 2)}}{${fmt(g, 2)} + ${fmt(O * O, 2)}}\\,\\frac{1}{\\kgammaonethree} = ${fmt(im0, 3)}/\\kgammaonethree`,
        O < 1e-9 ? '' : `The window is about ${O < 1 ? '$\\kgammaonetwo + |\\kOmegatwo|^2/\\kgammaonethree' : '$\\kgammaonetwo + |\\kOmegatwo|'} = ${fmt(W, 2)}\\,\\kgammaonethree$ wide, and $\\mathrm{Re}[\\krhothreeone/\\kOmegaone] \\approx \\kdelta/(|\\kOmegatwo|^2 + \\kgammaonetwo\\kgammaonethree)$ climbs through it with slope ${fmt(S, S < 10 ? 2 : 0)}$/\\kgammaonethree^2$.`,
        { form: 'res' });
    } else {
      ro.set(`${IM} = \\mathrm{Im}\\left[\\frac{i\\kgammaonetwo}{\\kgammaonetwo(\\kgammaonethree - i\\kDeltatwo) + |\\kOmegatwo|^2}\\right] = ${fmt(im0, 3)}/\\kgammaonethree`, '', { form: 'off' });
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-dark-state · moving, 2D, level panel beside two strips
   ċ₁ = iΩ₁c₃, ċ₂ = iΩ₂c₃, ċ₃ = −(γ₃/2)c₃ + iΩ₁c₁ + iΩ₂c₂: Eqs. (5.23)–(5.25)
   with Δ₁ = δ = 0 and γ₂ = 0, the Ĥ_eff of Eq. (5.48), real Ω; γ₃ = 1.
   Gaussian pulses of width 6 centred at 16 and 24, order by the choice;
   RK4 at h = 0.01 over 0–40, stored every 0.05. The norm lost is the
   probability of a decay from |3⟩. Strips fixed: Ω 0–4 (slider max), 0–1.
===================================================================== */
(function () {
  const d = sim('sim-dark-state', 600);
  const T = 40, TAU = 6, H = 0.01, EVERY = 5, NS = Math.round(T / H / EVERY);
  const cy = cycle(() => T, 1.2);
  let run = null;
  const om = ctl(d.controls, { label: '\\text{peak }|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0.2, max: 4, step: 0.05, value: 3, unit: 'γ₃', dec: 2,
    aria: 'the peak Rabi frequency of both pulses, in units of gamma 3', onInput: () => { run = null; cy.reset(); } });
  const order = choice(d.controls, { label: '\\text{order}', key: 'order', value: 'ci', ms: 0, aria: 'which pulse comes first', onInput: () => { run = null; cy.reset(); },
    options: [{ value: 'ci', label: 'Ω₂ first' }, { value: 'int', label: 'Ω₁ first' }] });
  [['ci', '\\kOmegatwo\\ \\text{first}'], ['int', '\\kOmegaone\\ \\text{first}']].forEach(([v, t]) => { const b = d.controls.querySelector(`.segbtn[data-value="${v}"]`); if (b) F.tex(b, t); });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const pulses = (O0, ci) => { const t1 = ci ? 24 : 16, t2 = ci ? 16 : 24; return { o1: (t) => O0 * Math.exp(-(((t - t1) / TAU) ** 2)), o2: (t) => O0 * Math.exp(-(((t - t2) / TAU) ** 2)) }; };
  /* c = [Re c₁, Im c₁, Re c₂, Im c₂, Re c₃, Im c₃] */
  function solve() {
    const { o1, o2 } = pulses(om.v, order.value === 'ci');
    const f = (t, c) => { const a = o1(t), b = o2(t);
      return [-a * c[5], a * c[4], -b * c[5], b * c[4], -0.5 * c[4] - a * c[1] - b * c[3], -0.5 * c[5] + a * c[0] + b * c[2]]; };
    let c = [1, 0, 0, 0, 0, 0], t = 0; const out = [c];
    const add = (u, k, s) => u.map((x, i) => x + s * k[i]);
    for (let i = 1; i <= NS * EVERY; i++) {
      const k1 = f(t, c), k2 = f(t + H / 2, add(c, k1, H / 2)), k3 = f(t + H / 2, add(c, k2, H / 2)), k4 = f(t + H, add(c, k3, H));
      c = c.map((x, j) => x + (H / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j])); t += H;
      if (i % EVERY === 0) out.push(c);
    }
    return { o1, o2, c: out };
  }
  const state = (r, t) => {
    const x = Math.max(0, Math.min(NS, (t / T) * NS)), i = Math.min(NS - 1, Math.floor(x)), k = x - i;
    const c = r.c[i].map((v, j) => v + (r.c[i + 1][j] - v) * k);
    const p1 = c[0] ** 2 + c[1] ** 2, p2 = c[2] ** 2 + c[3] ** 2, p3 = c[4] ** 2 + c[5] ** 2;
    return { c, p1, p2, p3, lost: Math.max(0, 1 - p1 - p2 - p3) };
  };
  const pop = (r, key) => (t) => state(r, t)[key];
  /* the Λ panel, as Figure 5.2 draws it: |3⟩ above, |2⟩ upper left, |1⟩ lowest right */
  const LV = { 3: { x0: 230, x1: 390, y: 150 }, 2: { x0: 110, x1: 270, y: 410 }, 1: { x0: 350, x1: 510, y: 480 } };
  const mid = (n) => (LV[n].x0 + LV[n].x1) / 2;
  const both = (ctx, x1, y1, x2, y2, col) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, 4); arrow(ctx, mx, my, x2, y2, col, 4); };
  const squiggle = (ctx, x1, y1, x2, y2, col) => {
    const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, N = 60; let px = x1, py = y1;
    for (let i = 1; i <= N; i++) { const s = (i / N) * (L - 14), w = 8 * Math.sin((s / L) * 6 * Math.PI); const x = x1 + ux * s - uy * w, y = y1 + uy * s + ux * w; line(ctx, px, py, x, y, col, 2.5); px = x; py = y; }
    arrow(ctx, px, py, x2, y2, col, 2.5);
  };
  const TOP = { l: 640, r: 1170, t: 120, b: 270 }, BOT = { l: 640, r: 1170, t: 330, b: 510 };
  function draw() {
    if (!run) run = solve();
    const { ctx } = begin(d.c); hits.length = 0;
    const now = cy.now(), s = state(run, now), O0 = om.v, a1 = run.o1(now), a2 = run.o2(now);
    const R = { 1: F.ref('lvl-1'), 2: F.ref('lvl-2'), 3: F.ref('lvl-3') }, f1 = F.ref('field-1'), f2 = F.ref('field-2');
    const P = { 1: s.p1, 2: s.p2, 3: s.p3 };
    /* fields, faded with their pulses */
    F.faded(ctx, 0.15 + 0.85 * (a2 / 4), [0, 0], () => both(ctx, mid(2) + 10, LV[2].y - 8, mid(3) - 30, LV[3].y + 8, f2));
    F.faded(ctx, 0.15 + 0.85 * (a1 / 4), [0, 0], () => both(ctx, mid(1) - 10, LV[1].y - 8, mid(3) + 30, LV[3].y + 8, f1));
    text(ctx, '$\\kOmegatwo$', 186, 270, f2, { size: 24, weight: 600, tex: true, bg: PAL.panel });
    text(ctx, '$\\kOmegaone$', 440, 300, f1, { size: 24, weight: 600, tex: true, bg: PAL.panel });
    hits.push({ x: 186, y: 270, r: 30, name: `the coupling field Ω₂, now ${fmt(a2, 2)} γ₃` }, { x: 440, y: 300, r: 30, name: `the probe field Ω₁, now ${fmt(a1, 2)} γ₃` });
    squiggle(ctx, LV[3].x1 + 10, LV[3].y - 6, LV[3].x1 + 110, LV[3].y - 76, PAL.muted);
    text(ctx, '$\\kgammathree$', LV[3].x1 + 70, LV[3].y - 18, PAL.muted, { size: 22, weight: 600, tex: true });
    hits.push({ x: LV[3].x1 + 60, y: LV[3].y - 40, r: 30, name: `decay out of |3⟩ at γ₃; ${fmt(100 * s.lost, 1)} % decayed so far` });
    [3, 2, 1].forEach((n) => {
      const L = LV[n], col = R[n], r = 34 * Math.sqrt(Math.min(1, P[n]));
      line(ctx, L.x0, L.y, L.x1, L.y, col, 5);
      if (r > 0.5) { ctx.save(); ctx.fillStyle = alpha(col, 0.8); ctx.beginPath(); ctx.arc(mid(n), L.y, r, 0, 2 * Math.PI); ctx.fill(); ctx.restore(); }
      ket(ctx, `$|${n}\\rangle$`, n === 1 ? L.x1 + 12 : L.x0 - 12, L.y, col, { align: n === 1 ? 'left' : 'right' });
      hits.push({ x: mid(n), y: L.y, r: 36, name: `the population of |${n}⟩, ${fmt(P[n], 3)}` });
    });
    /* pulses */
    const tm = C('time'), cpl = C('coupling'), pp = C('population');
    const A = axes(ctx, TOP, [0, T], [0, 4], { nx: 0, ny: 4, xc: tm, yc: cpl });
    text(ctx, '$|\\kOmegaone|, |\\kOmegatwo|$ (γ₃)', TOP.l, TOP.t - 30, cpl, { size: 20, weight: 600, tex: true });
    curve(ctx, run.o2, 0, T, A.X, A.Y, f2, 4, 200);
    curve(ctx, run.o1, 0, T, A.X, A.Y, f1, 4, 200);
    const t1 = order.value === 'ci' ? 24 : 16, t2 = 40 - t1;
    const tE = Math.min(t1, t2), tL = Math.max(t1, t2), hE = O0 * Math.exp(-1), side = (tc) => (tc === tE ? 'left' : 'right');
    [[t2, 'Ω₂', f2], [t1, 'Ω₁', f1]].forEach(([tc, s, col]) => label(ctx, s, A.X(tc === tE ? tE - TAU : tL + TAU), A.Y(hE), { side: side(tc), color: col, gap: 14, leader: false }));
    /* populations */
    const B = axes(ctx, BOT, [0, T], [0, 1], { nx: 4, ny: 2, xl: 't (1/γ₃)', xc: tm, yc: pp, fy: (v) => fmt(v, 1) });
    text(ctx, 'populations', BOT.l, BOT.t - 30, pp, { size: 20, weight: 600 });
    line(ctx, A.X(now), TOP.t, A.X(now), BOT.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    [[1, R[1]], [2, R[2]], [3, R[3]]].forEach(([n, col]) => {
      const f = pop(run, 'p' + n);
      ctx.save(); ctx.globalAlpha *= 0.22; curve(ctx, f, 0, T, B.X, B.Y, col, 3, 400); ctx.restore();
      curve(ctx, f, 0, now, B.X, B.Y, col, 4, 400);
      dot(ctx, B.X(now), B.Y(f(now)), col);
    });
    const fl = pop(run, 'lost');
    ctx.save(); ctx.setLineDash([10, 10]); ctx.globalAlpha *= 0.22; curve(ctx, fl, 0, T, B.X, B.Y, PAL.ink, 3, 400); ctx.restore();
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, fl, 0, now, B.X, B.Y, PAL.ink, 3, 400); ctx.restore();
    dot(ctx, B.X(now), B.Y(s.lost), PAL.ink, false);
    hits.push({ x: B.X(now), y: B.Y(s.lost), r: 16, name: `the probability of a decay from |3⟩, ${fmt(s.lost, 3)}` });
    /* legend of the lower strip */
    [[1, R[1]], [2, R[2]], [3, R[3]]].forEach(([n, col], i) => { const y = BOT.t + 14 + 34 * i; line(ctx, BOT.r + 30, y, BOT.r + 70, y, col, 4); ket(ctx, `$|${n}\\rangle$`, BOT.r + 80, y, col, { size: 20 }); });
    { const y = BOT.t + 14 + 34 * 3; line(ctx, BOT.r + 30, y, BOT.r + 70, y, PAL.ink, 3, [10, 10]); text(ctx, 'decayed', BOT.r + 80, y, PAL.ink, { size: 20, weight: 600 }); }
    topline(ctx, `At $\\kt = ${fmt(now, 1)}/\\kgammathree$, ${fmt(100 * s.p2, 0)} % of the atom is in $|2\\rangle$, ${fmt(100 * s.p3, 1)} % in $|3\\rangle$, and ${fmt(100 * s.lost, 0)} % has decayed.`);
    const N = Math.hypot(a1, a2), ca = N > 1e-12 ? a2 / N : 1, cb = N > 1e-12 ? a1 / N : 0;
    const ov = N > 1e-12 ? ((a2 * s.c[0] - a1 * s.c[2]) ** 2 + (a2 * s.c[1] - a1 * s.c[3]) ** 2) / (N * N) : s.p1;
    ro.set(`|D\\rangle = \\frac{\\kOmegatwo|1\\rangle - \\kOmegaone|2\\rangle}{\\sqrt{|\\kOmegaone|^2 + |\\kOmegatwo|^2}} = ${fmt(ca, 2)}\\,|1\\rangle - ${fmt(cb, 2)}\\,|2\\rangle`,
      `The atom's overlap with the dark state is $|\\langle D|\\psi\\rangle|^2 = ${fmt(ov, 2)}$.`, { form: 'D' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 8), draw });
})();
};
