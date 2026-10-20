/* Figures for section 6.3 Non-Hermitian evolution: Summary. The book draws none. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-weak-leak · still, 2D, graph alone
   6.1's two-level atom with γ = ℏ = 1: Ĥ_S = −Ω(|2⟩⟨1| + |1⟩⟨2|),
   ĉ = |1⟩⟨2|, from |1⟩. The state under Ĥ_eff = Ĥ_S − (i/2)ĉ†ĉ and
   the master equation's ρ, both RK4 at δt = 0.01. 1 − ⟨ψ̃|ψ̃⟩ equals
   ∫γ|⟨2|ψ̃⟩|²dt exactly, so the leak is read off the norm.
   Axes fixed: t 0–10/γ, populations 0–1.
===================================================================== */
(function () {
  const d = sim('sim-weak-leak', 560);
  const T = 10, DT = 0.01, N = Math.round(T / DT);
  const oS = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0, max: 0.5, step: 0.01, value: 0.05, unit: 'γ', dec: 2,
    aria: 'the Rabi frequency of the weak field, in units of the decay rate' });
  const tS = ctl(d.controls, { label: '\\kt', cls: 'time', key: 't', min: 0, max: T, step: 0.1, value: 5, unit: '/γ', dec: 1,
    aria: 'the length of the time interval under consideration' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 130, r: 980, t: 120, b: 470 };
  const LX = 1030;

  /* complex 2-vectors and 2×2 matrices as flat [re, im] arrays */
  function evolve(W) {
    const a1 = new Float64Array(N + 1), a2 = new Float64Array(N + 1), r11 = new Float64Array(N + 1), r22 = new Float64Array(N + 1);
    /* ψ = (x1 + i y1, x2 + i y2): i dψ/dt = Ĥ_eff ψ */
    const fp = (s) => { const [x1, y1, x2, y2] = s; return [-W * y2, W * x2, -W * y1 - 0.5 * x2, W * x1 - 0.5 * y2]; };
    /* ρ = (p11, p22, u + i v = ρ12): Lindblad with ĉ = |1⟩⟨2| */
    const fr = (s) => { const [p11, p22, u, v] = s; return [p22 + 2 * W * v, -p22 - 2 * W * v, -0.5 * u, W * (p22 - p11) - 0.5 * v]; };
    const rk = (f, s) => {
      const k1 = f(s), k2 = f(s.map((x, i) => x + DT / 2 * k1[i])), k3 = f(s.map((x, i) => x + DT / 2 * k2[i])), k4 = f(s.map((x, i) => x + DT * k3[i]));
      return s.map((x, i) => x + DT / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
    };
    let p = [1, 0, 0, 0], r = [1, 0, 0, 0];
    for (let k = 0; k <= N; k++) {
      a1[k] = p[0] * p[0] + p[1] * p[1]; a2[k] = p[2] * p[2] + p[3] * p[3]; r11[k] = r[0]; r22[k] = r[1];
      p = rk(fp, p); r = rk(fr, r);
    }
    return { a1, a2, r11, r22 };
  }
  let memo = { W: NaN };
  const model = (W) => (memo.W === W ? memo : (memo = Object.assign(evolve(W), { W })));
  const weak = evolve(1e-3);
  const at = (arr) => (t) => arr[Math.max(0, Math.min(N, Math.round(t / DT)))];

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const W = oS.v, tv = tS.v, m = model(W), k = Math.round(tv / DT);
    const pop = C('population');
    const { X, Y } = axes(ctx, BOX, [0, T], [0, 1], { nx: 5, ny: 4, xc: C('time'), yc: pop, fy: (v) => fmt(v, 2) });
    text(ctx, '$\\kt$ (1/$\\kgamma$)', BOX.r, BOX.b + 58, C('time'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, 'population', BOX.l, BOX.t - 26, pop, { size: 22, weight: 600 });
    const norm = (t) => at(m.a1)(t) + at(m.a2)(t);
    /* the leak: between ⟨ψ̃|ψ̃⟩ and 1, from 0 to t */
    if (k > 0) {
      ctx.save(); ctx.fillStyle = alpha(pop, 0.16); ctx.beginPath(); ctx.moveTo(X(0), Y(1));
      for (let j = 0; j <= k; j++) ctx.lineTo(X(j * DT), Y(m.a1[j] + m.a2[j]));
      ctx.lineTo(X(tv), Y(1)); ctx.closePath(); ctx.fill(); ctx.restore();
    }
    curve(ctx, norm, 0, T, X, Y, alpha(pop, 0.4), 2, 300);
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, at(m.r11), 0, T, X, Y, pop, 3, 300); curve(ctx, at(m.r22), 0, T, X, Y, pop, 3, 300);
    ctx.restore();
    curve(ctx, at(m.a1), 0, T, X, Y, pop, 5, 300); curve(ctx, at(m.a2), 0, T, X, Y, pop, 5, 300);
    text(ctx, '$\\krhooneone$', X(0.1), Y(0.9), pop, { size: 24, weight: 600, tex: true, base: 'middle' });
    text(ctx, '$\\krhotwotwo$', X(0.1), Y(0.12), pop, { size: 24, weight: 600, tex: true, base: 'middle' });
    const leak = 1 - m.a1[k] - m.a2[k];
    line(ctx, X(tv), Y(1), X(tv), Y(0), alpha(PAL.ink, 0.35), 2, [4, 8]);
    [[m.a1[k], true, 'ρ₁₁ without jumps: '], [m.r11[k], false, 'ρ₁₁ from the master equation: ']].forEach(([v, filled, name]) => {
      dot(ctx, X(tv), Y(v), pop, filled, 10);
      hits.push({ x: X(tv), y: Y(v), r: 16, name: name + fmt(v, 3) });
    });
    hits.push({ x: X(tv), y: Y(1 - leak / 2), r: 16, name: 'leaked by t: ' + fmt(leak, 3) });
    const keys = [
      ['without jumps', (y) => line(ctx, LX, y, LX + 44, y, pop, 5)],
      ['master equation', (y) => line(ctx, LX, y, LX + 44, y, pop, 3, [10, 10])],
      ['leaked', (y) => { ctx.save(); ctx.fillStyle = alpha(pop, 0.16); ctx.fillRect(LX, y - 12, 44, 24); ctx.restore(); line(ctx, LX, y - 12, LX + 44, y - 12, alpha(pop, 0.4), 2); }],
    ];
    keys.forEach(([name, mark], j) => { const y = BOX.t + 20 + 44 * j; mark(y); text(ctx, name, LX + 60, y, PAL.ink, { size: 20, base: 'middle' }); });
    const tt = fmt(tv, 1), P = fmt(leak, 3);
    if (W === 0) topline(ctx, 'With no field the atom stays in $|1\\rangle$: nothing leaks, and the two descriptions agree.');
    else topline(ctx, `By $\\kt$ = ${tt}/$\\kgamma$, ${fmt(100 * leak, 1)}% has leaked: $\\krhooneone$ is ${fmt(m.a1[k], 3) === fmt(m.r11[k], 3) ? fmt(m.a1[k], 3) + ' in both' : fmt(m.a1[k], 3) + ', not the master equation’s ' + fmt(m.r11[k], 3)}.`);
    ro.set(`\\int_0^{${tt}/\\kgamma}\\kgamma\\krhotwotwo\\,d\\kt' = 1 - \\langle\\tilde{\\kpsi}|\\tilde{\\kpsi}\\rangle = ${P}`,
      W > 0 && tv > 0 ? `Over $|\\kOmega|^2$ it is ${fmt(leak / (W * W), 1)}/$\\kgamma^2$; as $|\\kOmega| \\to 0$, ${fmt((1 - weak.a1[k] - weak.a2[k]) / 1e-6, 1)}/$\\kgamma^2$.` : '');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
