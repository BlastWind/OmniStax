/* Figures for section 7.2 Adiabaticity for the two-level system.
   The book gives no numbers, so Ω and Δ are angular frequencies in μs⁻¹ and τ is in μs, as in 2.1.
   The levels |1⟩, |2⟩ and the instantaneous eigenstates |+⟩, |−⟩ are the section's referents, one group. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, dot, text, topline, axes, curve, hover, readout } = F;

/* =====================================================================
   FIGURE 7.1 · sim-adiabatic · moving, 2D, graph alone (three strips on one t/τ axis)
   H/ℏ = −[[0, Ω], [Ω, Δ]], Eqs. (7.11)–(7.12), integrated by RK4 from |1⟩ at t = −3τ.
   Ω(t) = Ω₀ e^{−t²/2τ²}. Return: Δ = −2 μs⁻¹ held (|1⟩ is the lower state |−⟩ for Δ < 0).
   Passage: Δ = αt from −6 to 6 μs⁻¹ over ±3τ, α = 2/τ μs⁻².
   ϵ±/ℏ = (−Δ ± √(Δ² + 4Ω²))/2, Eq. (7.15); |−⟩ ∝ (Ω, −ϵ₋/ℏ) in the bare basis.
   Axes fixed: t/τ −3…3; Δ, Ω −6…6 μs⁻¹; ϵ/ℏ −8…8 μs⁻¹ (the sliders reach ±6); P 0…1.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-adiabatic', 800);
  const S = 3, N = 1200, SUB = 2, DR = 2, DP = 6;
  const sAt = (i) => -S + (2 * S * i) / N;
  const cy = cycle(() => 2 * S, 1.2);
  const mode = choice(d.controls, { value: 'passage', aria: 'adiabatic return or adiabatic passage', onInput: () => cy.reset(),
    options: [{ value: 'return', label: 'adiabatic return' }, { value: 'passage', label: 'adiabatic passage' }] });
  const om = ctl(d.controls, { label: '\\kOmega_0', cls: 'coupling', key: 'Omega0', min: 0.2, max: 4, step: 0.01, value: 3, unit: 'μs⁻¹', dec: 2,
    aria: 'the peak Rabi frequency, in inverse microseconds', onInput: () => cy.reset() });
  const ta = ctl(d.controls, { label: '\\ktau', cls: 'time', key: 'tau', min: 0.02, max: 4, step: 0.01, value: 3, unit: 'μs', dec: 2,
    aria: 'the length of the pulse, in microseconds', onInput: () => cy.reset(),
    specials: [{ at: () => 1 / om.v, label: '1/Ω₀' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);

  function solve(m, O0, tau) {
    const Om = (s) => O0 * Math.exp(-s * s / 2), De = (s) => (m === 'return' ? -DR : (DP * s) / S);
    /* c = [Re c₁, Im c₁, Re c₂, Im c₂], s = t/τ: dc₁/ds = iτΩc₂, dc₂/ds = iτ(Ωc₁ + Δc₂) */
    const f = (s, c) => { const o = Om(s) * tau, e = De(s) * tau;
      return [-o * c[3], o * c[2], -(o * c[1] + e * c[3]), o * c[0] + e * c[2]]; };
    const add = (a, b, h) => a.map((x, i) => x + h * b[i]);
    const r = { D: [], O: [], ep: [], em: [], P1: [], P2: [], P1a: [], P2a: [], pm: [] };
    let c = [1, 0, 0, 0];
    const h = (2 * S) / N / SUB;
    for (let i = 0; i <= N; i++) {
      const s = sAt(i), o = Om(s), e = De(s), R = Math.sqrt(e * e + 4 * o * o), lm = (-e - R) / 2, n2 = o * o + lm * lm;
      r.D.push(e); r.O.push(o); r.ep.push((-e + R) / 2); r.em.push(lm);
      const p1 = c[0] * c[0] + c[1] * c[1], p2 = c[2] * c[2] + c[3] * c[3];
      r.P1.push(p1 / (p1 + p2)); r.P2.push(p2 / (p1 + p2));
      r.P1a.push((o * o) / n2); r.P2a.push((lm * lm) / n2);
      const re = o * c[0] - lm * c[2], im = o * c[1] - lm * c[3];
      r.pm.push(Math.min(1, (re * re + im * im) / n2 / (p1 + p2)));
      if (i === N) break;
      for (let k = 0; k < SUB; k++) {
        const t = s + k * h, k1 = f(t, c), k2 = f(t + h / 2, add(c, k1, h / 2)), k3 = f(t + h / 2, add(c, k2, h / 2)), k4 = f(t + h, add(c, k3, h));
        c = c.map((x, j) => x + (h / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
      }
    }
    /* how far the mixing angle turns, ∫|θ̇|dt, from sin²θ = P₁ of |−⟩ */
    let turn = 0; for (let i = 1; i <= N; i++) turn += Math.abs(Math.asin(Math.sqrt(r.P1a[i])) - Math.asin(Math.sqrt(r.P1a[i - 1])));
    r.turn = turn;
    return r;
  }
  let key = '', SOL = null;
  const sol = () => { const k = om.v + '|' + ta.v; if (k !== key) { key = k; SOL = { return: solve('return', om.v, ta.v), passage: solve('passage', om.v, ta.v) }; } return SOL; };
  const at = (arr, s) => { const x = Math.max(0, Math.min(N, ((s + S) / (2 * S)) * N)), i = Math.min(N - 1, Math.floor(x)); return arr[i] + (arr[i + 1] - arr[i]) * (x - i); };

  const B1 = { l: 190, r: 1240, t: 112, b: 252 }, B2 = { l: 190, r: 1240, t: 312, b: 532 }, B3 = { l: 190, r: 1240, t: 592, b: 722 };
  const ket = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const both = sol(), m = mode.value, end = both[m];
    const mix = (k) => mode.mix((v) => both[v][k]);
    const D = mix('D'), O = mix('O'), EP = mix('ep'), EM = mix('em'), P1 = mix('P1'), P2 = mix('P2'), P1a = mix('P1a'), P2a = mix('P2a'), PM = mix('pm');
    const now = cy.now() - S;
    const fq = C('frequency'), cp = C('coupling'), E = C('energy'), pop = C('population'), tm = C('time');
    const r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), rp = F.ref('dressed-plus'), rm = F.ref('dressed-minus');
    const f = (arr) => (s) => at(arr, s);

    /* Δ and Ω */
    const a1 = axes(ctx, B1, [-S, S], [-6, 6], { nx: 0, ny: 4 });
    text(ctx, '$\\kDelta$, $\\kOmega$ (μs⁻¹)', B1.l, B1.t - 26, PAL.ink, { size: 20, weight: 600, tex: true });
    curve(ctx, f(D), -S, S, a1.X, a1.Y, fq, 5, 200);
    curve(ctx, f(O), -S, S, a1.X, a1.Y, cp, 5, 200);
    const dl = at(D, -2.7); ket(ctx, '$\\kDelta$', a1.X(-2.7), a1.Y(dl) + (dl < -4 ? -20 : 22), fq, { align: 'center' });
    ket(ctx, '$\\kOmega$', a1.X(-1.3) - 10, a1.Y(at(O, -1.3)) - 22, cp, { align: 'right' });

    /* ϵ± with the state's population on each */
    const a2 = axes(ctx, B2, [-S, S], [-8, 8], { nx: 0, ny: 4 });
    text(ctx, '$\\kepspm/\\hbar$ (μs⁻¹)', B2.l, B2.t - 26, E, { size: 20, weight: 600, tex: true });
    curve(ctx, f(EP), -S, S, a2.X, a2.Y, rp, 5, 240);
    curve(ctx, f(EM), -S, S, a2.X, a2.Y, rm, 5, 240);
    ket(ctx, '$|+\\rangle$', a2.X(-2.75), a2.Y(at(EP, -2.75)) - 22, rp, { align: 'center' });
    ket(ctx, '$|-\\rangle$', a2.X(-2.75), a2.Y(at(EM, -2.75)) + 24, rm, { align: 'center' });

    /* P₁, P₂: the state solid, following |−⟩ dashed */
    const a3 = axes(ctx, B3, [-S, S], [0, 1], { nx: 6, ny: 2, fy: (v) => fmt(v, 1), xl: 't / τ', xc: tm });
    text(ctx, '$\\kPone$, $\\kPtwo$', B3.l, B3.t - 26, pop, { size: 20, weight: 600, tex: true });
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, f(P1a), -S, S, a3.X, a3.Y, alpha(r1, 0.75), 3, 200); curve(ctx, f(P2a), -S, S, a3.X, a3.Y, alpha(r2, 0.75), 3, 200);
    ctx.restore();
    curve(ctx, f(P1), -S, now, a3.X, a3.Y, r1, 5, 400); curve(ctx, f(P2), -S, now, a3.X, a3.Y, r2, 5, 400);
    const e1 = at(P1, S), e2 = at(P2, S), close = Math.abs(a3.Y(e1) - a3.Y(e2)) < 30, up = e1 >= e2 ? [-1, 1] : [1, -1];
    ket(ctx, '$\\kPone$', B3.r + 14, a3.Y(e1) + (close ? 13 * up[0] : 0), r1, { align: 'left' });
    ket(ctx, '$\\kPtwo$', B3.r + 14, a3.Y(e2) + (close ? 13 * up[1] : 0), r2, { align: 'left' });
    const LX = B3.r - 420, LY = B3.t - 24;
    line(ctx, LX, LY, LX + 36, LY, PAL.ink, 4); text(ctx, 'the state', LX + 46, LY, PAL.ink, { size: 17 });
    line(ctx, LX + 170, LY, LX + 206, LY, alpha(PAL.ink, 0.75), 3, [10, 10]); text(ctx, 'following $|-\\rangle$', LX + 216, LY, PAL.ink, { size: 17, tex: true });

    /* the cursor and the state now */
    const x = a1.X(now);
    line(ctx, x, B1.t, x, B3.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    const pm = at(PM, now), pp = 1 - pm, ye = a2.Y(at(EP, now)), ym = a2.Y(at(EM, now));
    if (pp > 0.003) dot(ctx, x, ye, rp, true, 4 + 14 * Math.sqrt(pp));
    if (pm > 0.003) dot(ctx, x, ym, rm, true, 4 + 14 * Math.sqrt(pm));
    const p1 = at(P1, now), p2 = at(P2, now);
    dot(ctx, x, a3.Y(p1), r1); dot(ctx, x, a3.Y(p2), r2);
    hits.push({ x, y: ye, r: 20, name: `the state's population in |+⟩, ${fmt(100 * pp, 0)} %` },
      { x, y: ym, r: 20, name: `the state's population in |−⟩, ${fmt(100 * pm, 0)} %` },
      { x, y: a3.Y(p1), r: 16, name: `P₁, the population of |1⟩ now, ${fmt(p1, 2)}` },
      { x, y: a3.Y(p2), r: 16, name: `P₂, the population of |2⟩ now, ${fmt(p2, 2)}` },
      { x, y: a1.Y(at(D, now)), r: 16, name: `the detuning Δ now, ${fmt(at(D, now), 2)} μs⁻¹` },
      { x, y: a1.Y(at(O, now)), r: 16, name: `the Rabi frequency Ω now, ${fmt(at(O, now), 2)} μs⁻¹` });

    const fin = m === 'return' ? `$\\kPone$ = ${fmt(end.P1[N], 2)}` : `$\\kPtwo$ = ${fmt(end.P2[N], 2)}`;
    topline(ctx, `At $\\kt$ = ${fmt(now, 1)}$\\ktau$ the state is ${fmt(100 * pm, 0)} % $|-\\rangle$; it ends with ${fin}.`);

    const A = 2 * Math.sqrt(2 * Math.PI) * om.v * ta.v, fA = fmt(A, A < 10 ? 2 : 1);
    if (m === 'return') {
      ro.set(`\\int|\\dot{\\ktheta}|\\,d\\kt = ${fmt(end.turn, 2)},\\quad \\kAarea = \\int 2\\kOmega\\,d\\kt = 2\\sqrt{2\\pi}\\,\\kOmega_0\\ktau = ${fA}`,
        `The state ends with $\\kPone = ${fmt(end.P1[N], 2)}$ and $\\kPtwo = ${fmt(end.P2[N], 2)}$.`, { form: 'return' });
    } else {
      const al = DP / (S * ta.v), x2 = (2 * Math.PI * om.v * om.v) / al;
      ro.set(`\\kPLZ = 1 - e^{-2\\pi|\\kOmega_0|^2/|\\kalpha|} = 1 - e^{-2\\pi(${fmt(om.v, 2)})^2/${fmt(al, 2)}} = 1 - e^{-${fmt(x2, x2 < 0.1 ? 3 : 2)}} = ${fmt(1 - Math.exp(-x2), 2)}`,
        `With $\\int|\\dot{\\ktheta}|\\,d\\kt = ${fmt(end.turn, 2)}$ and $\\kAarea = ${fA}$, the pulse, whose $\\kOmega$ falls away from $\\kOmega_0$, leaves $\\kPtwo = ${fmt(end.P2[N], 2)}$.`, { form: 'passage' });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (2 * S) / 5), draw });
})();

};
