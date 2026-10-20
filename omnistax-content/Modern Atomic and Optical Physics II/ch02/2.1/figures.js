/* Figures for section 2.1 Atomic Transitions.
   The book gives no numbers, so Ω and δ are angular frequencies in μs⁻¹ and time is in μs;
   Figure 2.2b's own frame (±5 on the detuning axis at |Ω| = 1) is the dressed figure's default.
   The levels |1⟩, |2⟩ (|2̃⟩ in the rotating frame) and the dressed |+⟩, |−⟩ are the section's
   referents, one group. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, axes, curve, vbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const US = '\\ \\mu\\text{s}^{-1}';
const sgn = (x, d) => (x < 0 ? '−' + fmt(-x, d) : fmt(x, d));
const sgnTex = (x, d) => (x < 0 ? '-' + fmt(-x, d) : fmt(x, d));
/* a double-headed arrow, the book's mark for an interval on a level scheme */
const K2 = '$|\\tilde{2}\\rangle$';
/* a ket set as TeX on a panel, since a combining tilde over 2 does not survive every face */
const ket = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });
const both = (ctx, x, y1, y2, col, w) => { const m = (y1 + y2) / 2; arrow(ctx, x, m, x, y1, col, w); arrow(ctx, x, m, x, y2, col, w); };

/* =====================================================================
   FIGURE 2.1 · fig-level-scheme · faithful copy, still
   The book's scheme: |1⟩ and |2⟩ ħω apart, the field ν reaching a dashed
   line −δ below |2⟩. Every arrow is notation. Not to scale.
===================================================================== */
(function () {
  const d = sim('fig-level-scheme', 520);
  const hits = []; hover(d.stage, () => hits, d.c);
  const Y1 = 450, Y2 = 90, YL = 170;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const f = C('frequency'), r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2');
    line(ctx, 520, Y2, 900, Y2, r2, 5); line(ctx, 520, Y1, 900, Y1, r1, 5);
    text(ctx, '|2⟩', 920, Y2, r2, { size: 30, weight: 600 }); text(ctx, '|1⟩', 920, Y1, r1, { size: 30, weight: 600 });
    line(ctx, 470, Y2 + 8, 470, Y1 - 8, f, 3, [10, 10]); arrow(ctx, 470, Y2 + 40, 470, Y2 + 6, f, 3); arrow(ctx, 470, Y1 - 40, 470, Y1 - 6, f, 3);
    text(ctx, 'ω', 440, (Y1 + Y2) / 2, f, { size: 28, weight: 600, align: 'right' });
    line(ctx, 590, YL, 780, YL, PAL.ink, 3, [10, 10]);
    both(ctx, 700, Y1 - 4, YL + 4, f, 6);
    text(ctx, 'ν', 726, (Y1 + YL) / 2, f, { size: 28, weight: 600 });
    both(ctx, 620, Y2 + 4, YL - 4, f, 3);
    text(ctx, '−δ = ω − ν', 646, (Y2 + YL) / 2, f, { size: 22, weight: 600 });
    hits.push({ x: 710, y: Y2, r: 30, name: 'the excited state |2⟩' }, { x: 710, y: Y1, r: 30, name: 'the ground state |1⟩' },
      { x: 470, y: (Y1 + Y2) / 2, r: 30, name: 'the transition frequency ω' }, { x: 700, y: (Y1 + YL) / 2, r: 30, name: 'the frequency ν of the applied field' },
      { x: 620, y: (Y2 + YL) / 2, r: 24, name: 'the detuning, −δ = ω − ν' }, { x: 685, y: YL, r: 20, name: 'the energy the field reaches, ħν above |1⟩' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-pulse-area · moving, 2D, graph alone
   Three pulse shapes of one area drive the atom on resonance from |1⟩:
   p₂(t) = sin²(∫₀ᵗ|Ω|dt'), Eqs. (2.18)–(2.19). Window 0–4 μs; |Ω| axis
   0–5 μs⁻¹ fixed (the narrowest pulse at the largest area, 1.5π, peaks at 4.7).
===================================================================== */
(function () {
  const d = sim('sim-pulse-area', 620);
  const T = 4, N = 400, SQ2PI = Math.sqrt(2 * Math.PI);
  const gauss = (t, m, s) => Math.exp(-((t - m) ** 2) / (2 * s * s)) / (s * SQ2PI);
  /* each shape has unit area over the window */
  const SHAPES = {
    square: (t) => (t >= 1 && t <= 3 ? 0.5 : 0),
    gauss: (t) => gauss(t, 2, 0.4),
    two: (t) => 0.5 * (gauss(t, 1.1, 0.22) + gauss(t, 2.9, 0.22)),
  };
  const cum = {};
  Object.entries(SHAPES).forEach(([k, g]) => {
    const a = [0]; for (let i = 1; i <= N; i++) { const t0 = ((i - 1) * T) / N, t1 = (i * T) / N; a.push(a[i - 1] + ((g(t0) + g(t1)) / 2) * (t1 - t0)); }
    const tot = a[N]; cum[k] = a.map((x) => x / tot);
  });
  const cumAt = (k, t) => { const x = Math.max(0, Math.min(N, (t / T) * N)), i = Math.min(N - 1, Math.floor(x)); return cum[k][i] + (cum[k][i + 1] - cum[k][i]) * (x - i); };
  const cy = cycle(() => T, 1.2);
  const area = ctl(d.controls, { label: '\\int|\\kOmega|d\\kt', cls: 'phase', key: 'area', min: 0, max: 1.5, step: 0.01, value: 0.5, unit: 'π', dec: 2,
    aria: 'the area of the pulse, in units of pi', onInput: () => cy.reset(),
    specials: [{ at: 0.25, label: 'π/4' }, { at: 0.5, label: 'π/2' }, { at: 1, label: 'π' }] });
  const shape = choice(d.controls, { label: '\\text{pulse}', key: 'shape', value: 'gauss', aria: 'the shape of the pulse', onInput: () => cy.reset(),
    options: [{ value: 'square', label: 'square' }, { value: 'gauss', label: 'Gaussian' }, { value: 'two', label: 'two pulses' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const TOP = { l: 190, r: 1240, t: 140, b: 300 }, BOT = { l: 190, r: 1240, t: 400, b: 540 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const A = area.v * Math.PI, now = cy.now();
    const g = (t) => A * shape.mix((k) => SHAPES[k](t));
    const theta = (t) => A * shape.mix((k) => cumAt(k, t));
    const p2 = (t) => Math.sin(theta(t)) ** 2;
    const cpl = C('coupling'), ph = C('phase'), pop = C('population'), tm = C('time');
    const a1 = axes(ctx, TOP, [0, T], [0, 5], { nx: 4, ny: 5, xc: tm, yc: cpl });
    const { X, Y } = a1;
    ctx.save(); ctx.fillStyle = alpha(ph, 0.35); ctx.beginPath(); ctx.moveTo(X(0), Y(0));
    for (let i = 0; i <= 200; i++) { const t = (now * i) / 200; ctx.lineTo(X(t), Y(Math.min(5, g(t)))); }
    ctx.lineTo(X(now), Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    curve(ctx, (t) => Math.min(5, g(t)), 0, T, X, Y, cpl, 5, 240);
    text(ctx, '$|\\kOmega(\\kt)|$ (μs⁻¹)', TOP.l, TOP.t - 26, cpl, { size: 20, weight: 600, tex: true });
    line(ctx, X(now), TOP.t, X(now), BOT.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    hits.push({ x: X(now), y: TOP.b - 20, r: 24, name: 'the area swept so far, ∫|Ω|dt = ' + fmt(theta(now) / Math.PI, 2) + 'π' });
    const b = axes(ctx, BOT, [0, T], [0, 1], { nx: 4, ny: 2, xl: 't (μs)', xc: tm, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kptwo$', BOT.l, BOT.t - 26, pop, { size: 22, weight: 600, tex: true });
    ket(ctx, K2, BOT.r + 18, b.Y(1), F.ref('lvl-2'));
    text(ctx, '|1⟩', BOT.r + 18, b.Y(0), F.ref('lvl-1'), { size: 22, weight: 600 });
    const end = Math.sin(A) ** 2;
    line(ctx, BOT.l, b.Y(end), BOT.r, b.Y(end), alpha(pop, 0.6), 2, [10, 10]);
    ctx.save(); ctx.globalAlpha *= 0.25; curve(ctx, p2, 0, T, b.X, b.Y, pop, 3, 240); ctx.restore();
    curve(ctx, p2, 0, now, b.X, b.Y, pop, 5, 240);
    dot(ctx, b.X(now), b.Y(p2(now)), pop);
    hits.push({ x: b.X(now), y: b.Y(p2(now)), r: 18, name: 'the population p₂ of |2̃⟩ now, ' + fmt(p2(now), 2) });
    topline(ctx, `After an area of ${fmt(theta(now) / Math.PI, 2)}π, $\\kptwo$ = ${fmt(p2(now), 2)}; the pulse ends at $\\kptwo$ = ${fmt(end, 2)}.`);
    ro.set(`\\kptwo = \\sin^2\\left(\\int|\\kOmega|d\\kt\\right) = \\sin^2(${fmt(area.v, 2)}\\pi) = ${fmt(end, 2)}`, '', { form: 'p2' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.8), draw });
})();

/* =====================================================================
   FIGURE 2.2 · sim-dressed · still, 2D, graph with the level panel beside
   ϵ±/ℏ = −δ/2 ∓ √((δ/2)² + |Ω|²), Eq. (2.24); the bare states dashed at 0
   and −δ. Axes fixed: δ −5…5, ϵ/ℏ −6…6 μs⁻¹ (the largest |ϵ|/ℏ the sliders
   reach is 5.7). Eq. (2.24) puts |+⟩ on the lower branch; the book's
   panel (b) labels it the other way round (plan: corrections).
===================================================================== */
(function () {
  const d = sim('sim-dressed', 640);
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -5, max: 5, step: 0.01, value: -2, unit: 'μs⁻¹', dec: 2,
    aria: 'the detuning delta, in inverse microseconds', specials: [{ at: 0, label: 'resonance' }] });
  const om = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0, max: 2, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the magnitude of the Rabi frequency, in inverse microseconds', specials: [{ at: 0, label: 'bare states' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 150, r: 900, t: 120, b: 570 };
  const R = (de, o) => Math.sqrt((de / 2) ** 2 + o * o);
  const ep = (de, o) => -de / 2 - R(de, o), em = (de, o) => -de / 2 + R(de, o);
  /* the weight of |1⟩ in the eigenvector of energy ℏλ: |Ω|²/(|Ω|² + λ²) */
  const w1 = (lam, o, de) => (o > 1e-9 ? (o * o) / (o * o + lam * lam) : Math.abs(lam) < Math.abs(lam + de) ? 1 : 0);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const de = dl.v, o = om.v, E = C('energy'), r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), rp = F.ref('dressed-plus'), rm = F.ref('dressed-minus');
    const { X, Y } = axes(ctx, BOX, [-5, 5], [-6, 6], { nx: 10, ny: 6, xc: C('frequency'), yc: E });
    text(ctx, '$\\kdelta$ (μs⁻¹)', BOX.r, BOX.b + 58, C('frequency'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kepspm/\\hbar$ (μs⁻¹)', BOX.l, BOX.t - 26, E, { size: 20, weight: 600, tex: true });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (x) => -x, -5, 5, X, Y, r2, 3, 2); ctx.restore();
    line(ctx, X(-5), Y(0), X(5), Y(0), r1, 3, [10, 10]);
    curve(ctx, (x) => ep(x, o), -5, 5, X, Y, rp, 5, 160);
    curve(ctx, (x) => em(x, o), -5, 5, X, Y, rm, 5, 160);
    label(ctx, '|−⟩', X(-4.4), Y(em(-4.4, o)), { side: 'above', color: rm, leader: false, gap: 26 });
    label(ctx, '|+⟩', X(-4.4), Y(ep(-4.4, o)), { side: 'below', color: rp, leader: false, gap: 26 });
    const yp = Y(ep(de, o)), ym = Y(em(de, o)), x = X(de);
    line(ctx, x, BOX.t, x, BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    const gap = em(de, o) - ep(de, o);
    if (ym < yp - 4) { const bx = de > 3 ? x - 22 : x + 22; vbracket(ctx, bx, ym, yp, E); label(ctx, fmt(gap, 2), bx, (ym + yp) / 2, { side: de > 3 ? 'left' : 'right', color: E, gap: 14, leader: false }); }
    dot(ctx, x, yp, rp); dot(ctx, x, ym, rm);
    /* the levels at the cursor, on the graph's own energy axis */
    const P = { bare: [950, 1030], dr: [1150, 1310] };
    line(ctx, P.bare[0], Y(0), P.bare[1], Y(0), r1, 4, [10, 8]);
    line(ctx, P.bare[0], Y(-de), P.bare[1], Y(-de), r2, 4, [10, 8]);
    text(ctx, 'bare', (P.bare[0] + P.bare[1]) / 2, BOX.t - 26, PAL.muted, { size: 17, align: 'center' });
    const near = Math.abs(Y(-de) - Y(0)) < 34;
    ket(ctx, '$|1\\rangle$', P.bare[1] + 10, Y(0) + (near ? (de > 0 ? -14 : 14) : 0), r1, { size: 20 });
    ket(ctx, K2, P.bare[1] + 10, Y(-de) + (near ? (de > 0 ? 14 : -14) : 0), r2, { size: 20 });
    text(ctx, 'dressed', (P.dr[0] + P.dr[1]) / 2, BOX.t - 26, PAL.muted, { size: 17, align: 'center' });
    const wp = w1(ep(de, o), o, de), wm = w1(em(de, o), o, de);
    [[yp, wp, rp, '|+⟩', 'the dressed state |+⟩'], [ym, wm, rm, '|−⟩', 'the dressed state |−⟩']].forEach(([y, w, c, s, name]) => {
      const mid = P.dr[0] + (P.dr[1] - P.dr[0]) * w;
      ctx.save(); ctx.fillStyle = r1; ctx.fillRect(P.dr[0], y - 7, mid - P.dr[0], 14); ctx.fillStyle = r2; ctx.fillRect(mid, y - 7, P.dr[1] - mid, 14);
      ctx.strokeStyle = c; ctx.lineWidth = 3; ctx.strokeRect(P.dr[0], y - 7, P.dr[1] - P.dr[0], 14); ctx.restore();
      line(ctx, x + 10, y, P.dr[0] - 8, y, alpha(c, 0.45), 1.5, [3, 6]);
      hits.push({ x: (P.dr[0] + P.dr[1]) / 2, y, r: 30, name: `${name}: ${fmt(100 * w, 0)} % |1⟩ and ${fmt(100 * (1 - w), 0)} % |2̃⟩` });
      hits.push({ x, y, r: 16, name: `${name}, ϵ/ℏ = ${sgn(y === yp ? ep(de, o) : em(de, o), 2)} μs⁻¹` });
    });
    const sep = Math.abs(ym - yp) < 34;
    text(ctx, '|−⟩', P.dr[1] + 14, ym - (sep ? 14 : 0), rm, { size: 20, weight: 600 });
    text(ctx, '|+⟩', P.dr[1] + 14, yp + (sep ? 14 : 0), rp, { size: 20, weight: 600 });
    hits.push({ x: (P.bare[0] + P.bare[1]) / 2, y: Y(0), r: 20, name: 'the bare state |1⟩, at 0' }, { x: (P.bare[0] + P.bare[1]) / 2, y: Y(-de), r: 20, name: 'the bare state |2̃⟩, at −δ' });
    const lead = wp >= 0.5 ? ['$|1\\rangle$', wp] : [K2, 1 - wp];
    topline(ctx, o < 1e-9 ? `With no field the dressed states are the bare states $|1\\rangle$ and ${K2}, and their energies cross at resonance.`
      : Math.abs(de) < 1e-9 ? `On resonance the dressed states are equal mixtures of $|1\\rangle$ and ${K2}, 2|Ω| = ${fmt(gap, 2)} μs⁻¹ apart.`
      : `At δ = ${sgn(de, 2)} μs⁻¹ the dressed states are ${fmt(gap, 2)} μs⁻¹ apart; $|+\\rangle$ is ${fmt(100 * lead[1], 0)} % ${lead[0]}.`);
    ro.set(`\\kepspm/\\hbar = -\\frac{\\kdelta}{2} \\mp \\sqrt{\\left(\\frac{\\kdelta}{2}\\right)^2 + |\\kOmega|^2} = ${sgnTex(-de / 2, 2)} \\mp ${fmt(R(de, o), 2)}${US}`,
      `$\\kepsp/\\hbar = ${sgnTex(ep(de, o), 2)}$ and $\\kepsm/\\hbar = ${sgnTex(em(de, o), 2)}\\ \\mu\\text{s}^{-1}$; $|+\\rangle$ is ${fmt(100 * wp, 0)} % $|1\\rangle$ and ${fmt(100 * (1 - wp), 0)} % $|\\tilde{2}\\rangle$, $|-\\rangle$ the reverse.`, { form: 'eps' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.3 · sim-bloch · moving, mathematical 3D (rule 28.3), strip below
   dS̃/dt = Ω × S̃ with Ω = (−2|Ω|, 0, −δ) for a real Ω, Eq. (2.33); S̃(t) is
   S̃(0) turned about Ω by |Ω|t (Rodrigues). Bloch (x, y, z) is drawn as
   scene (y, z, x), a cyclic swap, so the handedness holds and z is up.
   Orbit free, no ground, no buttons. Strip: p₂ = (1 + S̃_z)/2 over 0–10 μs.
   Without WebGL a flat canvas draws the sphere from one fixed view.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-bloch', 0);
  const T = 10, RS = 1.55;
  const cy = cycle(() => T, 1.2);
  const om = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0, max: 2, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the magnitude of the Rabi frequency, in inverse microseconds', onInput: () => cy.reset(), specials: [{ at: 0, label: 'free' }] });
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -4, max: 4, step: 0.01, value: 0, unit: 'μs⁻¹', dec: 2,
    aria: 'the detuning delta, in inverse microseconds', onInput: () => cy.reset(), specials: [{ at: 0, label: 'resonance' }] });
  const start = choice(d.controls, { label: '\\text{start}', key: 'start', value: '1', ms: 0, aria: 'the state the atom starts in', onInput: () => cy.reset(),
    options: [{ value: '1', label: '|1⟩' }, { value: 'x', label: '(|1⟩ + |2̃⟩)/√2' }] });
  [['1', '|1\\rangle'], ['x', '(|1\\rangle + |\\tilde{2}\\rangle)/\\sqrt{2}']].forEach(([v, t]) => { const btn = d.controls.querySelector(`.segbtn[data-value="${v}"]`); if (btn) F.tex(btn, t); });
  const ro = readout(d);
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dotp = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const st = () => {
    const W = [-2 * om.v, 0, -dl.v], w = Math.hypot(...W), S0 = start.value === '1' ? [0, 0, -1] : [1, 0, 0];
    const n = w > 1e-9 ? W.map((x) => x / w) : [0, 0, 1], c = dotp(n, S0), perp = S0.map((x, i) => x - c * n[i]), r = Math.hypot(...perp);
    const at = (t) => { const a = w * t, k = cross(n, S0); return S0.map((x, i) => x * Math.cos(a) + k[i] * Math.sin(a) + n[i] * c * (1 - Math.cos(a))); };
    const top = w > 1e-9 ? Math.min(1, n[2] * c + r * Math.sqrt(Math.max(0, 1 - n[2] * n[2]))) : S0[2];
    return { W, w, n, c, r, S0, at, p2max: (1 + top) / 2 };
  };
  const scene = (b, k = RS) => [b[1] * k, b[2] * k, b[0] * k];

  /* ---------- the sphere: rebuilt when a slider or a colour changes ---------- */
  let V = null, g3 = null, sig = '', shaft = null, cone = null, flat = null;
  function build(s) {
    V.clear(); const g = g3, ink = PAL.muted, cS = C('state'), cO = C('coupling');
    const ball = new THREE.Mesh(new THREE.SphereGeometry(RS, 48, 32), F.mesh.mat(PAL.soft, { transparent: true, opacity: 0.16, depthWrite: false }));
    g.add(ball);
    const ring = (f) => F.mesh.polyline(g, Array.from({ length: 97 }, (_, i) => scene(f((2 * Math.PI * i) / 96))), ink);
    ring((a) => [Math.cos(a), Math.sin(a), 0]); ring((a) => [Math.cos(a), 0, Math.sin(a)]); ring((a) => [0, Math.cos(a), Math.sin(a)]);
    [[[1, 0, 0], 'x'], [[0, 1, 0], 'y'], [[0, 0, 1], 'z']].forEach(([u, nm]) => {
      F.mesh.stick(g, scene(u.map((x) => -x), 1.0 * RS), scene(u, 1.18 * RS), 0.008, ink);
      const l = V.label(`<i>${nm}</i>`, scene(u, 1.18 * RS), g, 0); l.style.color = PAL.muted; l.style.transform = nm === 'z' ? 'translate(40%,-100%)' : 'translate(-50%,-50%)';
    });
    const p2 = V.label('', scene([0, 0, 1], 1.0 * RS), g, 0); F.tex(p2, '|\\tilde{2}\\rangle'); p2.style.color = F.ref('lvl-2'); p2.style.transform = 'translate(-130%,-50%)';
    const p1 = V.label('', scene([0, 0, -1], 1.0 * RS), g, 0); F.tex(p1, '|1\\rangle'); p1.style.color = F.ref('lvl-1'); p1.style.transform = 'translate(-130%,-50%)';
    V.pickable(F.mesh.sphere(g, scene([0, 0, 1]), 0.05, F.ref('lvl-2')), 'the state |2̃⟩, at the top');
    V.pickable(F.mesh.sphere(g, scene([0, 0, -1]), 0.05, F.ref('lvl-1')), 'the state |1⟩, at the bottom');
    if (s.w > 1e-9) {
      F.mesh.arrow(g, [0, 0, 0], scene(s.n, 1.32 * RS), 0.03, cO);
      const tip = V.label('<b>Ω</b>', scene(s.n, 1.32 * RS), g, 0); tip.style.color = cO; tip.style.transform = 'translate(25%,-110%)';
      if (s.r > 1e-6) {
        const pts = Array.from({ length: 121 }, (_, i) => s.at((2 * Math.PI * i) / 120 / s.w).map((x) => x * RS)).map((b) => [b[1], b[2], b[0]]);
        const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), true), 160, 0.012, 6, true), F.mesh.mat(cS, { transparent: true, opacity: 0.55 }));
        g.add(tube); V.pickable(tube, 'the circle the state sweeps about Ω');
      }
    }
    shaft = F.mesh.stick(g, [0, 0, 0], [0, -RS, 0], 0.035, cS); V.pickable(shaft, 'the state vector S̃');
    cone = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 18), F.mesh.mat(cS)); g.add(cone); V.pickable(cone, 'the state vector S̃');
  }
  function place(S) {
    const tip = scene(S), u = tip.map((x) => x / RS), hl = 0.26, base = tip.map((x, i) => x - u[i] * hl);
    F.mesh.setStick(shaft, [0, 0, 0], base);
    cone.position.set(base[0] + (u[0] * hl) / 2, base[1] + (u[1] * hl) / 2, base[2] + (u[2] * hl) / 2);
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...u)); cone.scale.set(0.1, hl, 0.1);
    V.invalidate();
  }

  /* ---------- the flat view, where there is no WebGL ---------- */
  const YAW = 0.55, PIT = 0.32, FC = [700, 300], FK = 210;
  const proj = (b) => { const [x, y, z] = scene(b, 1); const x1 = x * Math.cos(YAW) + z * Math.sin(YAW), z1 = -x * Math.sin(YAW) + z * Math.cos(YAW); const y1 = y * Math.cos(PIT) - z1 * Math.sin(PIT); return [FC[0] + FK * x1, FC[1] - FK * y1]; };
  function drawFlat(s, S) {
    const { ctx } = begin(flat), ink = PAL.muted, cS = C('state'), cO = C('coupling');
    const poly = (f, col, w) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); for (let i = 0; i <= 96; i++) { const [x, y] = proj(f((2 * Math.PI * i) / 96)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); } ctx.stroke(); ctx.restore(); };
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(FC[0], FC[1], FK, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    poly((a) => [Math.cos(a), Math.sin(a), 0], alpha(ink, 0.7), 1.5);
    [[[1, 0, 0], 'x'], [[0, 1, 0], 'y'], [[0, 0, 1], 'z']].forEach(([u, nm]) => { const [a, b] = proj(u.map((x) => -x)), [c, e] = proj(u.map((x) => 1.15 * x)); line(ctx, a, b, c, e, alpha(ink, 0.7), 1.5); text(ctx, nm, c + 10, e, ink, { size: 20 }); });
    const [tx, ty] = proj([0, 0, 1]), [bx, by] = proj([0, 0, -1]);
    ket(ctx, K2, tx, ty - 26, F.ref('lvl-2'), { align: 'center' });
    text(ctx, '|1⟩', bx, by + 26, F.ref('lvl-1'), { size: 22, weight: 600, align: 'center' });
    if (s.w > 1e-9) {
      if (s.r > 1e-6) poly((a) => s.at(a / s.w), alpha(cS, 0.55), 2);
      const [ox, oy] = proj(s.n.map((x) => 1.3 * x)); arrow(ctx, FC[0], FC[1], ox, oy, cO, 4); label(ctx, 'Ω', ox, oy, { side: 'right', color: cO, gap: 14 });
    }
    const [sx, sy] = proj(S); arrow(ctx, FC[0], FC[1], sx, sy, cS, 5);
  }

  /* ---------- the strip: p₂(t) on fixed axes, 0–10 μs by 0–1 ---------- */
  if (hasGL) {
    V = F.view3d(d.stage, { h: 560, dist: 7.4, tilt: 0.3, spin: 'off', yaw: 'free', pitch: [-Math.PI / 2, Math.PI / 2] });
    if (!V.scene) V = null; else { g3 = V.part(0); V.look({ yaw: -0.6, pitch: 0.3, zoom: 0.82, target: [0, 0.18, 0] }); }
  }
  if (!V) flat = F.makeCanvas(d.stage, 600);
  const strip = F.makeCanvas(d.stage, 300);
  const hits = []; hover(d.stage, () => hits, strip);
  const BOX = { l: 170, r: 1260, t: 70, b: 220 };
  function draw() {
    const s = st(), now = cy.now(), S = s.at(now), p2 = (t) => (1 + s.at(t)[2]) / 2;
    if (V) {
      const key = [om.v, dl.v, start.value, C('state'), C('coupling'), PAL.muted, PAL.soft, F.ref('lvl-1'), F.ref('lvl-2')].join('|');
      if (key !== sig) { sig = key; build(s); }
      place(S);
      V.headline(s.w < 1e-9 ? 'With no field and no detuning the state stays where it starts.'
        : `The state precesses about $\\kOmegavec$ at $|\\kOmegavec|$ = ${fmt(s.w, 2)} μs⁻¹; $\\kptwo$ reaches at most ${fmt(s.p2max, 2)}.`);
    } else drawFlat(s, S);
    const { ctx } = begin(strip); hits.length = 0;
    const pop = C('population'), cS = C('state');
    const { X, Y } = axes(ctx, BOX, [0, T], [0, 1], { nx: 5, ny: 2, xl: 't (μs)', xc: C('time'), fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kptwo$', BOX.l, BOX.t - 26, pop, { size: 22, weight: 600, tex: true });
    if (s.p2max < 0.995 && s.w > 1e-9) { line(ctx, BOX.l, Y(s.p2max), BOX.r, Y(s.p2max), alpha(pop, 0.6), 2, [10, 10]); text(ctx, 'max ' + fmt(s.p2max, 2), BOX.r + 12, Y(s.p2max), pop, { size: 17 }); }
    ctx.save(); ctx.globalAlpha *= 0.25; curve(ctx, p2, 0, T, X, Y, pop, 3, 400); ctx.restore();
    curve(ctx, p2, 0, now, X, Y, pop, 5, 400);
    dot(ctx, X(now), Y(p2(now)), pop);
    hits.push({ x: X(now), y: Y(p2(now)), r: 18, name: 'the population p₂ of |2̃⟩ now, ' + fmt(p2(now), 2) });
    line(ctx, BOX.r - 210, 22, BOX.r - 170, 22, cS, 5); text(ctx, '$\\kStilde$, the state', BOX.r - 160, 22, cS, { size: 18, tex: true });
    if (!V) topline(ctx, s.w < 1e-9 ? 'With no field the state stays where it starts.' : `The state precesses at ${fmt(s.w, 2)} μs⁻¹; $\\kptwo$ reaches at most ${fmt(s.p2max, 2)}.`);
    ro.set(`\\frac{d}{d\\kt}\\kStilde = \\kOmegavec\\times\\kStilde,\\quad \\kOmegavec = (-2\\,\\mathrm{Re}\\,\\kOmega,\\ -2\\,\\mathrm{Im}\\,\\kOmega^*,\\ -\\kdelta) = (${sgnTex(-2 * om.v, 2)},\\ 0,\\ ${sgnTex(-dl.v, 2)})${US}`,
      `The rate $|\\kOmegavec| = \\sqrt{4|\\kOmega|^2 + \\kdelta^2} = ${fmt(s.w, 2)}\\ \\mu\\text{s}^{-1}$ is the splitting of the dressed states over $\\hbar$.`, { form: 'bloch' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

};
