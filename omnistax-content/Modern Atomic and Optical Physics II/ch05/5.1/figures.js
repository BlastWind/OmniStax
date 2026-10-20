/* Figures for section 5.1 Raman transitions in the Λ level configuration.
   The levels |1⟩, |2⟩, |3⟩ and the two fields (the probe Ω₁, ν₁ and the coupling Ω₂, ν₂) are the
   section's referents, one group. The book gives no numbers: Figure 5.3 measures frequencies in
   units of γ₁₃, the Rabi Sim rates in units of γ₃ and time in 1/γ₃. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, label, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const tx = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });
const both = (ctx, x1, y1, x2, y2, col, w = 4) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, w); arrow(ctx, mx, my, x2, y2, col, w); };
/* a decay: a wavy line from (x1, y1) to (x2, y2) with an arrowhead, the book's squiggle */
function squiggle(ctx, x1, y1, x2, y2, col) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = 60, tail = 16;
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const s = (i / n) * (L - tail), a = 7 * Math.sin((s / 22) * 2 * Math.PI) * Math.min(1, (L - tail - s) / 20);
    const x = x1 + ux * s - uy * a, y = y1 + uy * s + ux * a; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - ux * (tail + 4), y2 - uy * (tail + 4), x2, y2, col, 2.5);
}

/* =====================================================================
   FIGURE 5.2 · fig-lambda · faithful copy, still
   The book's Λ scheme: |3⟩ above, |2⟩ and |1⟩ below; the two fields reach
   dashed lines Δ₂ and Δ₁ below |3⟩, δ apart; squiggles for the decays.
   Every arrow is notation. Not to scale.
===================================================================== */
(function () {
  const d = sim('fig-lambda', 520);
  const hits = []; hover(d.stage, () => hits, d.c);
  const Y3 = 60, YB = 102, YR = 205, Y2 = 380, Y1 = 470;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const f = C('frequency'), rt = C('rate'), r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), r3 = F.ref('lvl-3'), p = F.ref('field-1'), q = F.ref('field-2');
    line(ctx, 540, Y3, 760, Y3, r3, 5); line(ctx, 300, Y2, 520, Y2, r2, 5); line(ctx, 720, Y1, 940, Y1, r1, 5);
    tx(ctx, '$|3\\rangle$', 772, Y3, r3, { size: 28, bg: undefined }); tx(ctx, '$|2\\rangle$', 532, Y2, r2, { size: 28, bg: undefined }); tx(ctx, '$|1\\rangle$', 952, Y1, r1, { size: 28, bg: undefined });
    line(ctx, 330, YB, 700, YB, q, 3, [10, 10]); line(ctx, 320, YR, 1080, YR, p, 3, [10, 10]);
    both(ctx, 600, YB + 4, 400, Y2 - 6, q, 5);
    tx(ctx, '$\\kOmegatwo\\quad \\knu_2$', 420, 280, q, { size: 26, align: 'right' });
    both(ctx, 860, Y1 - 6, 720, YR + 6, p, 5);
    tx(ctx, '$\\kOmegaone\\quad \\knu_1$', 840, 330, p, { size: 26 });
    both(ctx, 625, Y3 + 4, 625, YB - 4, f, 3);
    tx(ctx, '$\\kDeltatwo = \\knu_2 - \\omega_{23}$', 595, (Y3 + YB) / 2, f, { align: 'right' });
    both(ctx, 1010, Y3 + 4, 1010, YR - 4, f, 3);
    tx(ctx, '$\\kDeltaone = \\knu_1 - \\omega_{13}$', 1036, (Y3 + YR) / 2, f);
    both(ctx, 345, YB + 4, 345, YR - 4, f, 3);
    tx(ctx, '$\\kdelta = \\kDeltaone - \\kDeltatwo$', 320, (YB + YR) / 2, f, { align: 'right' });
    squiggle(ctx, 680, Y3 + 6, 620, 168, rt); squiggle(ctx, 740, Y3 + 6, 800, 168, rt); squiggle(ctx, 450, Y2 + 6, 510, 470, rt);
    hits.push({ x: 650, y: Y3, r: 30, name: 'the excited state |3⟩' }, { x: 410, y: Y2, r: 30, name: 'the metastable state |2⟩' }, { x: 830, y: Y1, r: 30, name: 'the ground state |1⟩' },
      { x: 400, y: 280, r: 40, name: 'the coupling field Ω₂ of frequency ν₂, on |2⟩ → |3⟩' }, { x: 860, y: 330, r: 40, name: 'the probe field Ω₁ of frequency ν₁, on |1⟩ → |3⟩' },
      { x: 625, y: (Y3 + YB) / 2, r: 22, name: 'the single-photon detuning Δ₂ = ν₂ − ω₂₃' }, { x: 1010, y: (Y3 + YR) / 2, r: 26, name: 'the single-photon detuning Δ₁ = ν₁ − ω₁₃' },
      { x: 345, y: (YB + YR) / 2, r: 26, name: 'the two-photon detuning δ = Δ₁ − Δ₂' },
      { x: 650, y: 120, r: 26, name: 'decay from |3⟩ to |2⟩' }, { x: 770, y: 120, r: 26, name: 'decay from |3⟩ to |1⟩' }, { x: 480, y: 425, r: 26, name: 'the slow decay of |2⟩' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.3 · sim-raman-absorption · still, 2D, graph alone
   ρ₃₁/Ω₁ = iΓ₁₂/(Γ₁₂Γ₁₃ + |Ω₂|²), Eq. (5.32), with Γ₁₂ = γ₁₂ − iδ,
   Γ₁₃ = γ₁₃ − iΔ₁, δ = Δ₁ − Δ₂, γ₁₃ = 1. Axes fixed: Δ₁ −6…16 (the farthest
   peak the sliders reach is 12.3), Im(ρ₃₁/Ω₁)γ₁₃ 0…1.2. The narrow peak is
   sampled densely about its centre, since its width runs down to 10⁻³.
===================================================================== */
(function () {
  const d = sim('sim-raman-absorption', 600);
  const D2 = ctl(d.controls, { label: '\\kDeltatwo', cls: 'frequency', key: 'Delta2', min: 3, max: 12, step: 0.01, value: 6, unit: 'γ₁₃', dec: 2,
    aria: 'the detuning of the coupling field, in units of gamma 13' });
  const O2 = ctl(d.controls, { label: '|\\kOmegatwo|', cls: 'coupling', key: 'Omega2', min: 0, max: 2, step: 0.01, value: 1.5, unit: 'γ₁₃', dec: 2,
    aria: 'the Rabi frequency of the coupling field, in units of gamma 13', specials: [{ at: 0, label: 'no coupling' }] });
  const G12 = ctl(d.controls, { label: '\\kgammaonetwo', cls: 'rate', key: 'gamma12', min: 0, max: 0.2, step: 0.001, value: 0, unit: 'γ₁₃', dec: 3,
    aria: 'the decoherence rate of the lower states, in units of gamma 13', specials: [{ at: 0, label: 'no dephasing' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 150, r: 1300, t: 130, b: 520 }, XR = [-6, 16], YM = 1.2;
  /* Im of iΓ₁₂/(Γ₁₂Γ₁₃ + Ω²) = Re of Γ₁₂/(Γ₁₂Γ₁₃ + Ω²) */
  const absorb = (x, D, O, g) => {
    const dl = x - D, ar = g * 1 - dl * x, ai = -(g * x) - dl * 1, br = ar + O * O, bi = ai, m = br * br + bi * bi;
    return (g * br + -dl * bi) / m;
  };
  function nodes(D, O, g) {
    const w = g + (O * O) / (D * D) + 1e-4, x0 = D + (O * O) / D, xs = [];
    for (let i = 0; i <= 1100; i++) xs.push(XR[0] + ((XR[1] - XR[0]) * i) / 1100);
    for (let i = 0; i <= 600; i++) xs.push(D - 4 * w + ((x0 - D + 16 * w) * i) / 600);
    for (let i = -200; i <= 200; i++) xs.push(x0 + (3 * w * i) / 200);
    return xs.filter((x) => x >= XR[0] && x <= XR[1]).sort((a, b) => a - b);
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const D = D2.v, O = O2.v, g = G12.v, chi = C('susceptibility'), fq = C('frequency');
    const { X, Y } = axes(ctx, BOX, XR, [0, YM], { nx: 11, ny: 6, xc: fq, yc: chi, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kDeltaone$ (units of $\\kgammaonethree$)', BOX.r, BOX.b + 58, fq, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\mathrm{Im}(\\krhothreeone/\\kOmegaone)\\,\\kgammaonethree$', BOX.l, BOX.t - 30, chi, { size: 20, weight: 600, tex: true });
    const f = (x) => Math.min(YM, absorb(x, D, O, g));
    const xs = nodes(D, O, g), n = xs.length - 1;
    curve(ctx, (i) => f(xs[Math.round(i)]), 0, n, (i) => X(xs[Math.round(i)]), Y, chi, 5, n);
    let x1 = 0, h1 = -1;
    for (let i = 0; i <= 600; i++) { const x = -3 + (Math.min(6, D - 1) * i) / 600, v = absorb(x, D, O, g); if (v > h1) { h1 = v; x1 = x; } }
    label(ctx, 'single-photon resonance, ν₁ ≈ ω₁₃', X(x1), Y(Math.min(YM, h1)), { side: 'above', color: PAL.ink, gap: 18, leader: false });
    hits.push({ x: X(x1), y: Y(Math.min(YM, h1)), r: 24, name: `the single-photon resonance near ν₁ = ω₁₃, absorption ${fmt(h1, 2)}` });
    const geff = g + (O * O) / (D * D), x0 = D + (O * O) / D;
    let xp = x0, hp = -1;
    if (O > 1e-6) { for (let i = -400; i <= 400; i++) { const x = x0 + (4 * geff * i) / 400, v = absorb(x, D, O, g); if (v > hp) { hp = v; xp = x; } } }
    if (O > 1e-6) {
      dot(ctx, X(xp), Y(Math.min(YM, hp)), chi, true, 8);
      label(ctx, 'two-photon resonance', X(xp), Y(Math.min(YM, hp)), { side: 'right', color: PAL.ink, gap: 22, leader: false });
      line(ctx, X(D), BOX.b, X(D), BOX.b - 40, alpha(PAL.ink, 0.4), 2, [4, 8]);
      hits.push({ x: X(xp), y: Y(Math.min(YM, hp)), r: 22, name: `the two-photon peak at δ = ${fmt(xp - D, 3)}, absorption ${fmt(hp, 2)}` },
        { x: X(D), y: BOX.b - 12, r: 18, name: 'δ = 0: ν₁ = ν₂ + ω₁₃ − ω₂₃, where the absorption vanishes when γ₁₂ = 0' });
    }
    const hs = absorb(0, D, 0, g);
    topline(ctx, O < 1e-6 ? 'With no coupling field only the single-photon resonance at ν₁ = ω₁₃ is left, 2 γ₁₃ wide.'
      : `The two-photon peak stands at $\\kdelta$ = ${fmt(xp - D, 2)}, ${fmt(2 * geff, 3)} wide against the single-photon line's 2, and ${fmt((100 * hp) / hs, 0)} % as high.`);
    ro.set(`\\kgammaeff = \\kgammaonetwo + \\kgammaonethree\\frac{|\\kOmegatwo|^2}{\\kDelta^2} = ${fmt(g, 3)} + 1 \\cdot \\frac{${fmt(O, 2)}^2}{${fmt(D, 2)}^2} = ${fmt(geff, 3)}`,
      'Δ ≈ Δ₂ near the two-photon peak; every rate is in units of γ₁₃.', { form: 'geff' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-two-photon-rabi · moving, 2D, level panel with the graph beside
   Eqs. (5.23)–(5.25) with γ₂ = 0 and δ = (|Ω₂|² − |Ω₁|²)/Δ, the light-shifted
   two-photon resonance; RK4 at h = 0.001/γ₃ over 0–20/γ₃, Ω₁, Ω₂ real.
   P_jump = 1 − Σ|c_n|², Eq. (5.22). Axes fixed: t 0…20, populations 0…1.
===================================================================== */
(function () {
  const d = sim('sim-two-photon-rabi', 560);
  const T = 20, NS = 400, cy = cycle(() => T, 1.2);
  let om2 = null, traj = null;
  const om1 = ctl(d.controls, { label: '|\\kOmegaone|', cls: 'coupling', key: 'Omega1', min: 0, max: 10, step: 0.1, value: 6, unit: 'γ₃', dec: 1,
    aria: 'the Rabi frequency of the probe field, in units of gamma 3', onInput: () => { traj = null; cy.reset(); },
    specials: [{ at: () => (om2 ? om2.v : null), label: 'Ω₁ = Ω₂' }] });
  om2 = ctl(d.controls, { label: '|\\kOmegatwo|', cls: 'coupling', key: 'Omega2', min: 0, max: 10, step: 0.1, value: 6, unit: 'γ₃', dec: 1,
    aria: 'the Rabi frequency of the coupling field, in units of gamma 3', onInput: () => { traj = null; cy.reset(); },
    specials: [{ at: () => om1.v, label: 'Ω₂ = Ω₁' }] });
  const DL = ctl(d.controls, { label: '\\kDelta', cls: 'frequency', key: 'Delta', min: 20, max: 100, step: 1, value: 60, unit: 'γ₃', dec: 0,
    aria: 'the single-photon detuning, in units of gamma 3', onInput: () => { traj = null; cy.reset(); } });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  function solve(O1, O2, D) {
    const g = 0.5, dl = (O2 * O2 - O1 * O1) / D, h = 0.001, per = Math.round(T / NS / h);
    const fn = (c) => [-O1 * c[5], O1 * c[4], -dl * c[3] - O2 * c[5], dl * c[2] + O2 * c[4],
      -g * c[4] - D * c[5] - O1 * c[1] - O2 * c[3], -g * c[5] + D * c[4] + O1 * c[0] + O2 * c[2]];
    const add = (a, b, k) => a.map((v, i) => v + k * b[i]);
    let c = [1, 0, 0, 0, 0, 0]; const out = [];
    for (let s = 0; s <= NS; s++) {
      const p1 = c[0] ** 2 + c[1] ** 2, p2 = c[2] ** 2 + c[3] ** 2, p3 = c[4] ** 2 + c[5] ** 2;
      out.push([p1, p2, p3, Math.max(0, 1 - p1 - p2 - p3)]);
      for (let i = 0; i < per; i++) {
        const k1 = fn(c), k2 = fn(add(c, k1, h / 2)), k3 = fn(add(c, k2, h / 2)), k4 = fn(add(c, k3, h));
        c = c.map((v, j) => v + (h / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
      }
    }
    return out;
  }
  const at = (t, j) => { const x = Math.max(0, Math.min(NS, (t / T) * NS)), i = Math.min(NS - 1, Math.floor(x)); return traj[i][j] + (traj[i + 1][j] - traj[i][j]) * (x - i); };
  const BOX = { l: 600, r: 1320, t: 130, b: 470 };
  function draw() {
    if (!traj) traj = solve(om1.v, om2.v, DL.v);
    const { ctx } = begin(d.c); hits.length = 0;
    const now = cy.now(), O1 = om1.v, O2 = om2.v, D = DL.v, oe = (O1 * O2) / D;
    const r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), r3 = F.ref('lvl-3'), p = F.ref('field-1'), q = F.ref('field-2'), fq = C('frequency');
    /* the level panel: |3⟩ sits Δ above the dashed line the fields reach, drawn to a fixed fraction */
    const YD = 240, Y3 = YD - 30 - D, Y2 = 390, Y1 = 470;
    line(ctx, 190, Y3, 350, Y3, r3, 5); line(ctx, 60, Y2, 220, Y2, r2, 5); line(ctx, 320, Y1, 480, Y1, r1, 5);
    line(ctx, 140, YD, 420, YD, alpha(PAL.ink, 0.4), 2, [10, 10]);
    both(ctx, 250, YD + 4, 140, Y2 - 6, q, 4); both(ctx, 300, YD + 4, 400, Y1 - 6, p, 4);
    both(ctx, 440, Y3 + 4, 440, YD - 4, fq, 3);
    tx(ctx, `$\\kDelta$ = ${fmt(D, 0)}`, 456, (Y3 + YD) / 2, fq, { size: 20 });
    tx(ctx, '$\\kOmegatwo$', 168, 300, q, { size: 22, align: 'right' }); tx(ctx, '$\\kOmegaone$', 372, 340, p, { size: 22 });
    const ps = [at(now, 0), at(now, 1), at(now, 2)];
    [[ps[2], 270, Y3, r3, '|3⟩', 'the excited state |3⟩'], [ps[1], 140, Y2, r2, '|2⟩', 'the metastable state |2⟩'], [ps[0], 400, Y1, r1, '|1⟩', 'the ground state |1⟩']].forEach(([v, x, y, col, s, name]) => {
      const r = 5 + 30 * Math.sqrt(v);
      ctx.save(); ctx.fillStyle = alpha(col, 0.85); ctx.beginPath(); ctx.arc(x, y - r - 3, r, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      text(ctx, s, x + (s === '|2⟩' ? -92 : 92), y, col, { size: 24, weight: 600, align: 'center' });
      hits.push({ x, y: y - r, r: Math.max(18, r), name: `${name}: population ${fmt(v, v < 0.1 ? 3 : 2)}` });
    });
    /* the graph */
    const { X, Y } = axes(ctx, BOX, [0, T], [0, 1], { nx: 4, ny: 4, xl: 't (1/γ₃)', xc: C('time'), yc: C('population'), fy: (v) => fmt(v, 2) });
    const lines = [[0, r1, '$|\\kcone|^2$'], [1, r2, '$|\\kctwo|^2$']];
    lines.forEach(([j, col]) => {
      ctx.save(); ctx.globalAlpha *= 0.22; curve(ctx, (t) => at(t, j), 0, T, X, Y, col, 3, 400); ctx.restore();
      curve(ctx, (t) => at(t, j), 0, now, X, Y, col, 5, 400); dot(ctx, X(now), Y(at(now, j)), col);
    });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (t) => at(t, 3), 0, now, X, Y, PAL.ink, 3, 400); ctx.restore();
    line(ctx, X(now), BOX.t, X(now), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    [[0, r1, '$|\\kcone|^2$'], [1, r2, '$|\\kctwo|^2$'], [3, PAL.ink, '$\\kPjump$']].forEach(([j, col, s], i) => {
      const lx = BOX.l + 20 + i * 150;
      if (j === 3) line(ctx, lx, BOX.t - 30, lx + 36, BOX.t - 30, col, 3, [8, 6]); else line(ctx, lx, BOX.t - 30, lx + 36, BOX.t - 30, col, 5);
      text(ctx, s, lx + 46, BOX.t - 30, col, { size: 20, weight: 600, tex: true });
    });
    hits.push({ x: X(now), y: Y(at(now, 0)), r: 16, name: `|c₁|² = ${fmt(at(now, 0), 2)}` }, { x: X(now), y: Y(at(now, 1)), r: 16, name: `|c₂|² = ${fmt(at(now, 1), 2)}` },
      { x: X(now), y: Y(at(now, 3)), r: 16, name: `the jump probability so far, ${fmt(at(now, 3), 3)}` });
    topline(ctx, `At t = ${fmt(now, 1)}/γ₃ the atom has made ${fmt((oe * now) / Math.PI, 1)} Rabi cycles between $|1\\rangle$ and $|2\\rangle$; $\\kPjump$ = ${fmt(at(now, 3), 2)}.`);
    const c1 = ((O1 * O1) / (D * D)) * T, c2 = ((O2 * O2) / (D * D)) * T;
    ro.set(`|\\kOmegaeff| = \\frac{|\\kOmegaone||\\kOmegatwo|}{\\kDelta} = \\frac{${fmt(O1, 1)} \\cdot ${fmt(O2, 1)}}{${fmt(D, 0)}} = ${fmt(oe, 2)}\\,\\kgammathree`,
      `By t = 20/$\\kgammathree$: $|\\kOmegaeff|\\kt$ = ${fmt(oe * T, 1)} against $|\\kOmegaone|^2\\kgammathree\\kt/\\kDelta^2$ = ${fmt(c1, 2)} and $|\\kOmegatwo|^2\\kgammathree\\kt/\\kDelta^2$ = ${fmt(c2, 2)}, Eqs. (5.40)–(5.41).`, { form: 'oeff' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 4), draw });
})();
};
