/* Figures for section 10.2 Model: An ion in a harmonic trap.
   The book gives η ∼ 0.1 and ν ∼ 10 MHz and no Ω: the ladder measures time in 1/Ω, the
   cooling sim measures detunings and γ in units of ν and time in γ/(ηΩ)². Referents: the
   levels |g⟩, |e⟩, and the three transitions a laser addresses (the bare resonance, the red
   and the blue sideband), one group. The ion has no element and is ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, axes, curve, vbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a decay: a wavy line from (x1, y1) to (x2, y2) with an arrowhead, the book's squiggle */
function squiggle(ctx, x1, y1, x2, y2, col, w = 2.5, amp = 6, wl = 20) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = 80, tail = 16;
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const s = (i / n) * (L - tail), a = amp * Math.sin((s / wl) * 2 * Math.PI) * Math.min(1, (L - tail - s) / 18);
    const x = x1 + ux * s - uy * a, y = y1 + uy * s + ux * a; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - ux * (tail + 4), y2 - uy * (tail + 4), x2, y2, col, w);
}
const parabola = (ctx, cx, yb, a, x0, x1, col, w = 5) => {
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= 120; i++) { const x = x0 + ((x1 - x0) * i) / 120, y = yb - a * (x - cx) ** 2; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
  ctx.stroke(); ctx.restore();
};

/* =====================================================================
   FIGURE 10.3 · fig-ion-trap · faithful copy, still
   The ion at the bottom of a parabolic trap, the laser coming in from the
   left, a photon leaving by spontaneous emission. Every arrow is notation.
===================================================================== */
(function () {
  const d = sim('fig-ion-trap', 470);
  const hits = []; hover(d.stage, () => hits, d.c);
  const CX = 700, YB = 420, A = 0.0062, IX = 700, IY = 270;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const E = C('energy'), cp = C('coupling'), rt = C('rate');
    parabola(ctx, CX, YB, A, 470, 930, E, 5);
    /* the ion: a nucleus and three orbits, ink */
    [0, Math.PI / 3, -Math.PI / 3].forEach((r) => { ctx.save(); ctx.translate(IX, IY); ctx.rotate(r); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(0, 0, 74, 24, 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); });
    dot(ctx, IX, IY, PAL.ink, true, 14);
    text(ctx, 'ion', IX, 132, PAL.ink, { size: 26, align: 'center' });
    /* the laser: a wave arriving from the left */
    ctx.save(); ctx.strokeStyle = cp; ctx.lineWidth = 4; ctx.beginPath();
    for (let x = 150; x <= 470; x += 2) { const y = IY + 12 * Math.sin(((x - 150) / 42) * 2 * Math.PI); if (x === 150) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    arrow(ctx, 466, IY, 520, IY, cp, 4);
    text(ctx, 'laser', 310, IY + 52, cp, { size: 26, align: 'center' });
    /* the emitted photon */
    squiggle(ctx, IX + 70, IY + 40, 1000, 420, rt, 4, 9, 30);
    text(ctx, 'spontaneous emission', 1010, 452, rt, { size: 26 });
    /* the trap */
    arrow(ctx, 1040, 220, 906, 200, PAL.ink, 3);
    text(ctx, 'trap', 1056, 222, PAL.ink, { size: 26 });
    hits.push({ x: IX, y: IY, r: 60, name: 'the ion, held at the bottom of the trap' }, { x: 320, y: IY, r: 50, name: 'the laser, which excites the ion' },
      { x: 880, y: 350, r: 40, name: 'a photon leaving by spontaneous emission' }, { x: 900, y: 200, r: 30, name: 'the harmonic trap potential' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.4 · fig-ion-levels · faithful copy, still
   Left: |g⟩, the short-lived upper level of the dipole-allowed transition
   and the long-lived |e⟩ of the dipole-forbidden one (the book labels them
   |e⟩ and |r⟩; the text's |e⟩ is the forbidden one, correction c-fig-10-4).
   Right: the trap's parabola and its first four motional levels.
===================================================================== */
(function () {
  const d = sim('fig-ion-levels', 540);
  const hits = []; hover(d.stage, () => hits, d.c);
  const G = { x0: 330, x1: 460, y: 410 }, U = { x0: 160, x1: 320, y: 100 }, Ee = { x0: 470, x1: 630, y: 170 };
  const PX = 1060, PB = 430, PA = 0.0098;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const rg = F.ref('lvl-g'), re = F.ref('lvl-e'), cp = C('coupling'), rt = C('rate'), E = C('energy');
    line(ctx, G.x0, G.y, G.x1, G.y, rg, 5); line(ctx, U.x0, U.y, U.x1, U.y, PAL.ink, 5); line(ctx, Ee.x0, Ee.y, Ee.x1, Ee.y, re, 5);
    text(ctx, '|g⟩', G.x1 + 16, G.y, rg, { size: 28, weight: 600 });
    text(ctx, '|e⟩', Ee.x1 + 16, Ee.y, re, { size: 28, weight: 600 });
    arrow(ctx, 380, G.y - 6, 270, U.y + 8, cp, 4);
    arrow(ctx, 410, G.y - 6, 530, Ee.y + 8, cp, 4);
    squiggle(ctx, 215, U.y + 14, 340, G.y - 8, rt, 4, 8, 22);
    squiggle(ctx, 590, Ee.y + 16, 440, G.y - 8, rt, 2, 5, 18);
    text(ctx, 'dipole-allowed', 150, 250, PAL.ink, { size: 22, align: 'right' }); text(ctx, 'transition', 150, 280, PAL.ink, { size: 22, align: 'right' });
    text(ctx, 'dipole-forbidden', 610, 280, PAL.ink, { size: 22 }); text(ctx, 'transition', 610, 310, PAL.ink, { size: 22 });
    text(ctx, 'internal: electronic levels', 395, 488, PAL.ink, { size: 24, align: 'center' });
    parabola(ctx, PX, PB, PA, 870, 1250, E, 5);
    const half = (y) => Math.sqrt((PB - y) / PA);
    [0, 1, 2, 3].forEach((n) => {
      const y = PB - (n + 0.5) * 80, h = half(y);
      line(ctx, PX - h, y, PX + h, y, PAL.ink, 4);
      if (n < 3) text(ctx, `|${n}⟩`, PX + h + 12, y + 18, PAL.ink, { size: 24 });
      hits.push({ x: PX, y, r: 22, name: `the motional state |${n}⟩: ${n} quant${n === 1 ? 'um' : 'a'} of vibration` });
    });
    text(ctx, 'external: motion', PX, 488, PAL.ink, { size: 24, align: 'center' });
    hits.push({ x: (G.x0 + G.x1) / 2, y: G.y, r: 24, name: 'the ground state |g⟩' },
      { x: (U.x0 + U.x1) / 2, y: U.y, r: 24, name: 'the upper level of the dipole-allowed transition, short-lived, used for cooling and readout' },
      { x: (Ee.x0 + Ee.x1) / 2, y: Ee.y, r: 24, name: 'the excited state |e⟩, long-lived, upper level of the dipole-forbidden transition' },
      { x: 277, y: 255, r: 26, name: 'fast decay on the dipole-allowed transition' }, { x: 515, y: 290, r: 26, name: 'slow decay on the dipole-forbidden transition' },
      { x: PX, y: 120, r: 40, name: 'the harmonic trap potential' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.5 + 10.6 · sim-sideband-ladder · moving, 2D, ladder with the graph beside
   Bare states |g, n⟩ and |e, n⟩, n = 0…4 in columns as the book draws them;
   the rungs ν apart, the two ladders ω_eg apart, neither to scale. The ion
   starts in |g, n⟩ and flops with the level the tuning reaches,
   P_e = sin²(Ω′t) with Ω′ = Ω (bare resonance, (10.20) to lowest order),
   ηΩ√n (red, (10.22)), ηΩ√(n+1) (blue, (10.21)); Ω ≪ ν/η, so each transition
   is resolved. Graph: P_e against Ωt, 0…40, 0…1, fixed.
===================================================================== */
(function () {
  const d = sim('sim-sideband-ladder', 650);
  const T = 40, cy = cycle(() => T, 1.2);
  const NAME = { car: 'bare resonance', red: 'red sideband', blue: 'blue sideband' };
  let eta = null;
  const tune = F.select(d.controls, { label: '\\text{laser}', key: 'tuning', value: 'red', aria: 'the transition the laser is tuned to',
    onInput: (v) => { eta.disable(v === 'car'); cy.reset(); },
    options: [{ value: 'car', label: 'bare resonance' }, { value: 'red', label: 'red sideband' }, { value: 'blue', label: 'blue sideband' }] });
  const nPick = choice(d.controls, { label: '\\text{start } n', key: 'n', value: '1', aria: 'the motional level the ion starts in',
    onInput: () => cy.reset(), options: ['0', '1', '2', '3'].map((v) => ({ value: v, label: v })) });
  eta = ctl(d.controls, { label: '\\ketaLD', cls: '', key: 'eta', min: 0.02, max: 0.3, step: 0.01, value: 0.1, unit: '', dec: 2,
    aria: 'the Lamb-Dicke parameter eta', onInput: () => cy.reset() });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const cx = (n) => 200 + n * 128, yg = (n) => 560 - n * 44, ye = (n) => 320 - n * 44, HW = 46;
  const BOX = { l: 870, r: 1330, t: 130, b: 520 };
  const rateOf = (v, n, h) => (v === 'car' ? 1 : v === 'red' ? h * Math.sqrt(n) : h * Math.sqrt(n + 1));
  const partner = (v, n) => (v === 'car' ? n : v === 'red' ? n - 1 : n + 1);
  const arrowOf = (v, n) => { const m = partner(v, n); if (m < 0) return null; const dx = v === 'car' ? 0 : v === 'red' ? -12 : 12; return [cx(n) + dx, yg(n) - 6, cx(m) - dx, ye(m) + 8]; };
  const strength = (v, n) => (v === 'car' ? 'Ω' : v === 'red' ? (n === 1 ? 'ηΩ' : `ηΩ√${n}`) : (n === 0 ? 'ηΩ' : `ηΩ√${n + 1}`));
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const v = tune.value, n0 = +nPick.value, h = eta.v, now = cy.now();
    const rg = F.ref('lvl-g'), re = F.ref('lvl-e'), pop = C('population'), fq = C('frequency');
    /* the phonon-number frame under the ladder */
    line(ctx, cx(0) - HW - 10, 612, cx(4) + HW + 10, 612, PAL.muted, 2);
    for (let n = 0; n <= 4; n++) { line(ctx, cx(n), 606, cx(n), 618, PAL.muted, 2); text(ctx, String(n), cx(n), 634, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'n', cx(4) + HW + 30, 612, PAL.ink, { size: 22, italic: true });
    /* the levels */
    for (let n = 0; n <= 4; n++) {
      line(ctx, cx(n) - HW, yg(n), cx(n) + HW, yg(n), rg, 4);
      line(ctx, cx(n) - HW, ye(n), cx(n) + HW, ye(n), re, 4);
      hits.push({ x: cx(n), y: yg(n), r: 22, name: `|g, ${n}⟩, energy ${n}ħν` },
        { x: cx(n), y: ye(n), r: 22, name: `|e, ${n}⟩, energy ħ(${n}ν + ω_eg)` });
    }
    text(ctx, '|g, n⟩', cx(0) - HW - 14, yg(0), rg, { size: 24, weight: 600, align: 'right' });
    text(ctx, '|e, n⟩', cx(0) - HW - 14, ye(0), re, { size: 24, weight: 600, align: 'right' });
    vbracket(ctx, cx(0) + HW + 18, yg(1), yg(0), fq);
    text(ctx, 'ν', cx(0) + HW + 32, (yg(0) + yg(1)) / 2 + 2, fq, { size: 22, weight: 600, italic: true });
    /* the transitions of each tuning, the active one bold; a change of tuning crossfades */
    ['car', 'red', 'blue'].forEach((tv) => tune.only(ctx, tv, () => {
      const col = fq;
      for (let n = 0; n <= 3; n++) {
        const a = arrowOf(tv, n); if (!a) continue;
        const on = n === n0;
        ctx.save(); ctx.globalAlpha *= on ? 1 : 0.3; arrow(ctx, a[0], a[1], a[2], a[3], col, on ? 5 : 3); ctx.restore();
        hits.push({ x: (a[0] + a[2]) / 2, y: (a[1] + a[3]) / 2, r: 20, name: `${NAME[tv]}: |g, ${n}⟩ → |e, ${partner(tv, n)}⟩, strength ${strength(tv, n)}` });
      }
      const a = arrowOf(tv, n0);
      if (a) {
        const mx = (a[0] + a[2]) / 2, my = (a[1] + a[3]) / 2, s = tv === 'red' ? -1 : 1;
        text(ctx, strength(tv, n0), mx + s * 18, my, col, { size: 22, weight: 600, align: s < 0 ? 'right' : 'left', bg: PAL.panel });
      }
    }));
    /* the populations on the active pair */
    const r = rateOf(v, n0, h), m = partner(v, n0), pe = m < 0 ? 0 : Math.sin(r * now) ** 2;
    const bar = (x, y, p, name) => {
      ctx.save(); ctx.strokeStyle = alpha(pop, 0.6); ctx.lineWidth = 2; ctx.strokeRect(x - HW, y - 18, 2 * HW, 12);
      ctx.fillStyle = pop; ctx.fillRect(x - HW, y - 18, 2 * HW * p, 12); ctx.restore();
      hits.push({ x, y: y - 12, r: 16, name: `${name}: population ${fmt(p, 2)}` });
    };
    bar(cx(n0), yg(n0), 1 - pe, `|g, ${n0}⟩`);
    if (m >= 0) bar(cx(m), ye(m), pe, `|e, ${m}⟩`);
    /* the graph: P_e against Ωt */
    const { X, Y } = axes(ctx, BOX, [0, T], [0, 1], { nx: 4, ny: 4, xc: C('time'), fy: (y) => fmt(y, 2) });
    text(ctx, '$\\kOmega\\kt$', BOX.r, BOX.b + 58, C('time'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, m < 0 ? 'population of |e⟩' : `population of |e, ${m}⟩`, BOX.l, BOX.t - 26, pop, { size: 20, weight: 600 });
    const fOf = (tv) => (t) => (partner(tv, n0) < 0 ? 0 : Math.sin(rateOf(tv, n0, h) * t) ** 2);
    ctx.save(); ctx.globalAlpha *= 0.25; tune.curve(ctx, fOf, 0, T, X, Y, pop, 3, 800); ctx.restore();
    tune.curve(ctx, fOf, 0, now, X, Y, pop, 5, 800);
    line(ctx, X(now), BOX.t, X(now), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, X(now), Y(pe), pop);
    hits.push({ x: X(now), y: Y(pe), r: 16, name: `population of |e⟩ at Ωt = ${fmt(now, 1)}: ${fmt(pe, 2)}` });
    const full = r > 0 ? Math.PI / (2 * r) : 0;
    topline(ctx, m < 0 ? 'On the red sideband |g, 0⟩ has no lower rung to reach, and the ion stays in |g, 0⟩.'
      : v === 'car' ? `On the bare resonance |g, ${n0}⟩ flops with |e, ${n0}⟩ at Ω, a full transfer by Ωt = ${fmt(full, 2)}, whatever n.`
      : `On the ${NAME[v]} |g, ${n0}⟩ flops with |e, ${m}⟩ at ${strength(v, n0)} = ${fmt(r, 3)} Ω, a full transfer by Ωt = ${fmt(full, 1)}.`);
    if (v === 'car') ro.set(`\\frac{|\\langle g|\\langle ${n0}|\\kH|e\\rangle|${n0}\\rangle|}{\\hbar} = \\kOmega\\left(1 + \\mathcal{O}(\\ketaLD^2)\\right) \\approx \\kOmega`, '', { form: 'car' });
    else if (m < 0) ro.set(`\\ketaLD\\kOmega\\sqrt{n} = ${fmt(h, 2)} \\cdot \\sqrt{0}\\,\\kOmega = 0`, '', { form: 'red' });
    else {
      const q = v === 'red' ? n0 : n0 + 1;
      ro.set(`\\frac{|\\langle g|\\langle ${n0}|\\kH|e\\rangle|${m}\\rangle|}{\\hbar} = \\ketaLD\\kOmega\\sqrt{${q}} = ${fmt(h, 2)} \\cdot ${fmt(Math.sqrt(q), 3)}\\,\\kOmega = ${fmt(r, 3)}\\,\\kOmega`, '', { form: v });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 8), draw });
})();

/* =====================================================================
   SIM · sim-sideband-cooling · moving, 2D, spectrum above bars
   The rate equations of MIT 8.422 Problem Set 10, Problem 2 (the section's
   exercise), in units ν = 1 and time τ = tη²Ω²/γ:
     dp_n/dτ = n a₊ p_{n−1} + (n+1) a₋ p_{n+1} − (n+1) a₊ p_n − n a₋ p_n,
     a∓ = γ²[1/((Δ ± 1)² + γ²/4) + 1/(Δ² + γ²/4)],
   n ≤ 60 with no transition out of the top; RK4 at h = 0.0025 over τ 0…2.5,
   from a thermal start ⟨n⟩ = 5. Spectrum: Lorentzians of width γ, heights
   1, η²⟨n⟩, η²(⟨n⟩ + 1) with η = 0.1, on Δ′ −2…2, 0…0.08, fixed (the bare
   resonance runs off the top). Bars: p_n for n = 0…19, 0…1, fixed.
===================================================================== */
(function () {
  const d = sim('sim-sideband-cooling', 700);
  const T = 2.5, H = 0.0025, NS = Math.round(T / H), EVERY = 5, NMAX = 60, NB = 20, ETA = 0.1, N0 = 5;
  const cy = cycle(() => T, 1.2);
  let traj = null;
  const reset = () => { traj = null; cy.reset(); };
  const De = ctl(d.controls, { label: '\\kDelta', cls: 'frequency', key: 'Delta', min: -1.5, max: 1.5, step: 0.01, value: -1, unit: 'ν', dec: 2, onInput: reset,
    aria: 'the detuning of the cooling laser from the bare resonance, in units of the trap frequency',
    specials: [{ at: -1, label: 'red sideband' }, { at: 0, label: 'bare resonance' }, { at: 1, label: 'blue sideband' }] });
  const ga = ctl(d.controls, { label: '\\kgamma', cls: 'rate', key: 'gamma', min: 0.02, max: 1, step: 0.01, value: 0.1, unit: 'ν', dec: 2, onInput: reset,
    aria: 'the decay rate of the excited state, in units of the trap frequency' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const SP = { l: 150, r: 1250, t: 120, b: 330 }, BB = { l: 150, r: 1250, t: 440, b: 620 };
  const thermal = Array.from({ length: NMAX + 1 }, (_, n) => (N0 ** n) / ((N0 + 1) ** (n + 1)));
  const ratesOf = (D, g) => {
    const c = 1 / (D * D + (g * g) / 4);
    return { am: g * g * (1 / ((D + 1) ** 2 + (g * g) / 4) + c), ap: g * g * (1 / ((D - 1) ** 2 + (g * g) / 4) + c) };
  };
  function integrate(D, g) {
    const { am, ap } = ratesOf(D, g), f = (p) => p.map((_, n) => {
      const up = n < NMAX ? (n + 1) * ap : 0;
      return (n > 0 ? n * ap * p[n - 1] : 0) + (n < NMAX ? (n + 1) * am * p[n + 1] : 0) - up * p[n] - n * am * p[n];
    });
    let p = thermal.slice(); const frames = [p];
    for (let i = 1; i <= NS; i++) {
      const k1 = f(p), k2 = f(p.map((x, j) => x + (H / 2) * k1[j])), k3 = f(p.map((x, j) => x + (H / 2) * k2[j])), k4 = f(p.map((x, j) => x + H * k3[j]));
      p = p.map((x, j) => x + (H / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
      if (i % EVERY === 0) frames.push(p);
    }
    return { frames, am, ap };
  }
  const at = (t) => {
    const x = Math.max(0, Math.min(traj.frames.length - 1, (t / T) * (traj.frames.length - 1))), i = Math.min(traj.frames.length - 2, Math.floor(x)), u = x - i;
    return traj.frames[i].map((q, j) => q + (traj.frames[i + 1][j] - q) * u);
  };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const D = De.v, g = ga.v, now = cy.now();
    if (!traj) traj = integrate(D, g);
    const p = at(now), nbar = p.reduce((s, q, n) => s + n * q, 0);
    const fq = C('frequency'), rc = fq, rr = fq, rb = fq, pop = C('population');
    /* the spectrum */
    const S = axes(ctx, SP, [-2, 2], [0, 0.08], { nx: 8, ny: 4, xc: fq, fx: (x) => fmt(x, 1), fy: (y) => fmt(y, 2) });
    text(ctx, 'detuning from the bare resonance, in units of $\\knu$', SP.r, SP.b + 58, fq, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, 'excitation by a weak probe, scaled to the bare resonance', SP.l, SP.t - 26, PAL.ink, { size: 20, weight: 600 });
    const L = (x) => (g * g / 4) / (x * x + g * g / 4);
    const comps = [
      { f: (x) => L(x), col: rc, name: 'the bare resonance' },
      { f: (x) => ETA * ETA * nbar * L(x + 1), col: rr, name: 'the red sideband' },
      { f: (x) => ETA * ETA * (nbar + 1) * L(x - 1), col: rb, name: 'the blue sideband' },
    ];
    ctx.save(); ctx.beginPath(); ctx.rect(SP.l, SP.t, SP.r - SP.l, SP.b - SP.t); ctx.clip();
    comps.forEach((c) => {
      ctx.save(); ctx.fillStyle = alpha(c.col, 0.22); ctx.beginPath(); ctx.moveTo(S.X(-2), S.Y(0));
      for (let i = 0; i <= 400; i++) { const x = -2 + (4 * i) / 400; ctx.lineTo(S.X(x), S.Y(Math.min(0.09, c.f(x)))); }
      ctx.lineTo(S.X(2), S.Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
      curve(ctx, (x) => Math.min(0.09, c.f(x)), -2, 2, S.X, S.Y, c.col, 4, 400);
    });
    curve(ctx, (x) => Math.min(0.09, comps.reduce((s, c) => s + c.f(x), 0)), -2, 2, S.X, S.Y, alpha(PAL.ink, 0.7), 2, 400);
    ctx.restore();
    text(ctx, 'bare resonance ↑', S.X(0), SP.t + 16, rc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const hr = ETA * ETA * nbar, hb = ETA * ETA * (nbar + 1);
    text(ctx, 'red sideband', S.X(-1), Math.max(SP.t + 50, S.Y(Math.min(0.08, hr)) - 24), rr, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'blue sideband', S.X(1), Math.max(SP.t + 50, S.Y(Math.min(0.08, hb)) - 24), rb, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: S.X(0), y: SP.t + 40, r: 30, name: 'the bare resonance: height 1, far above the plot' },
      { x: S.X(-1), y: S.Y(Math.min(0.08, hr)), r: 24, name: `the red sideband: height η²⟨n⟩ = ${fmt(hr, 4)}` },
      { x: S.X(1), y: S.Y(Math.min(0.08, hb)), r: 24, name: `the blue sideband: height η²(⟨n⟩ + 1) = ${fmt(hb, 4)}` });
    line(ctx, S.X(D), SP.t, S.X(D), SP.b, fq, 3, [10, 10]);
    hits.push({ x: S.X(D), y: SP.b - 40, r: 20, name: `the cooling laser, Δ = ${fmt(D, 2)} ν` });
    /* the motional populations */
    const B = axes(ctx, BB, [-0.5, NB - 0.5], [0, 1], { nx: 0, ny: 2, fy: (y) => fmt(y, 1) });
    text(ctx, '$p_n$', BB.l, BB.t - 26, pop, { size: 22, weight: 600, tex: true });
    text(ctx, 'n', BB.r + 22, BB.b, PAL.ink, { size: 22, italic: true });
    for (let n = 0; n < NB; n++) {
      const x0 = B.X(n - 0.35), x1 = B.X(n + 0.35);
      ctx.save(); ctx.fillStyle = pop; ctx.fillRect(x0, B.Y(p[n]), x1 - x0, B.Y(0) - B.Y(p[n])); ctx.restore();
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.setLineDash([4, 4]); ctx.strokeRect(x0, B.Y(thermal[n]), x1 - x0, B.Y(0) - B.Y(thermal[n])); ctx.restore();
      if (n % 2 === 0) text(ctx, String(n), B.X(n), BB.b + 22, PAL.muted, { size: 17, align: 'center' });
      hits.push({ x: B.X(n), y: B.Y(Math.max(p[n], 0.06)), r: 18, name: `p_${n} = ${fmt(p[n], 3)} (at the start ${fmt(thermal[n], 3)})` });
    }
    const heats = traj.am <= traj.ap, nss = heats ? Infinity : traj.ap / (traj.am - traj.ap);
    const tl = fmt(now, 2);
    topline(ctx, heats && nbar > 20 ? `At t = ${tl} γ/(ηΩ)², $\\langle n\\rangle$ is past 20 and climbing: this laser heats the ion.`
      : heats && nbar > 5 ? `At t = ${tl} γ/(ηΩ)², $\\langle n\\rangle$ = ${fmt(nbar, 1)} and climbing: this laser heats the ion.`
      : `At t = ${tl} γ/(ηΩ)², $\\langle n\\rangle$ = ${fmt(nbar, nbar < 0.1 ? 3 : 2)}, and the ion is in $|0\\rangle$ with probability ${fmt(p[0], 2)}.`);
    const ratio = nbar / (nbar + 1);
    ro.set(`\\frac{\\text{red sideband}}{\\text{blue sideband}} = \\frac{\\langle n\\rangle}{\\langle n\\rangle + 1} = \\frac{${fmt(nbar, 3)}}{${fmt(nbar + 1, 3)}} = ${fmt(ratio, 3)}`,
      heats ? `$\\kgamma = ${fmt(g, 2)}\\,\\knu$, $\\kDelta = ${fmt(D, 2)}\\,\\knu$: each excitation adds a phonon on average, and the ion heats.`
        : `$\\kgamma = ${fmt(g, 2)}\\,\\knu$, $\\kDelta = ${fmt(D, 2)}\\,\\knu$: off-resonant excitation stops the cooling at $\\langle n\\rangle$ = ${fmt(nss, nss < 0.01 ? 4 : nss < 1 ? 3 : 2)}.`, { form: 'ratio' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.5), draw });
})();
};
