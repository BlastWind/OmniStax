/* Figures for section 6.1 Formalism. The book draws none; Table 6.1's procedure is a Sim. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-monte-carlo · moving, 2D, graph alone
   Table 6.1 run on a two-level atom: one channel ĉ = |1⟩⟨2| at rate γ,
   Ĥ_S = −ℏΩ(|2⟩⟨1| + |1⟩⟨2|) on resonance. Units γ = 1, γδt = 0.005,
   800 steps to t = 4/γ. Step (3) literally: δp = γδt p₂, no jump when
   δp < r (Euler step under Ĥ_eff, renormalized), else |ψ⟩ → |1⟩.
   Trajectory n draws from its own seeded stream, so sliders reshape the
   same trajectories and raising N keeps the first ones. The master
   equation, Eq. (6.1) for this ĉ, integrated by RK4 on the same grid.
   Axes fixed: t 0–4/γ, p₂ 0–1.
===================================================================== */
(function () {
  const d = sim('sim-monte-carlo', 600);
  const T = 4, DT = 0.005, STEPS = 800, SHOW = 16;
  const cy = cycle(() => T, 1.2);
  let dirty = true;
  const reset = () => { dirty = true; cy.reset(); };
  const nS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 300, step: 1, value: 30, unit: '', dec: 0, detents: [1, 10, 100],
    aria: 'the number of trajectories', onInput: reset });
  const pS = ctl(d.controls, { label: '\\kptwo(0)', cls: 'population', key: 'p2', min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2,
    aria: 'the initial population of the excited state', onInput: reset });
  const oS = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0, max: 3, step: 0.01, value: 0, unit: 'γ', dec: 2,
    aria: 'the Rabi frequency of the drive, in units of gamma', onInput: reset, specials: [{ at: 0, label: 'no drive' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);

  /* mulberry32: one reproducible stream of random numbers r per trajectory */
  const stream = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  let avg, jumpsBy, master, shown;
  function compute() {
    const N = Math.round(nS.v), p0 = pS.v, W = oS.v;
    avg = new Float64Array(STEPS + 1); jumpsBy = new Int32Array(STEPS + 1); shown = [];
    for (let n = 0; n < N; n++) {
      const r = stream(1009 * (n + 1));
      let a1r = Math.sqrt(1 - p0), a1i = 0, a2r = Math.sqrt(p0), a2i = 0;
      const p = n < SHOW ? new Float64Array(STEPS + 1) : null, jumps = [];
      avg[0] += p0; if (p) p[0] = p0;
      for (let i = 1; i <= STEPS; i++) {
        const dp = DT * (a2r * a2r + a2i * a2i);
        if (dp < r()) {
          const b1r = a1r - DT * W * a2i, b1i = a1i + DT * W * a2r;
          const b2r = a2r - DT * W * a1i - (DT / 2) * a2r, b2i = a2i + DT * W * a1r - (DT / 2) * a2i;
          const k = 1 / Math.sqrt(b1r * b1r + b1i * b1i + b2r * b2r + b2i * b2i);
          a1r = b1r * k; a1i = b1i * k; a2r = b2r * k; a2i = b2i * k;
        } else { a1r = 1; a1i = 0; a2r = 0; a2i = 0; jumpsBy[i]++; jumps.push(i); }
        const q = a2r * a2r + a2i * a2i; avg[i] += q; if (p) p[i] = q;
      }
      if (p) shown.push({ p, jumps });
    }
    for (let i = 0; i <= STEPS; i++) { avg[i] /= N; if (i) jumpsBy[i] += jumpsBy[i - 1]; }
    /* ρ₁₁, ρ₂₂ and ρ₁₂ = x + iy under dρ/dt = −i[Ĥ_S/ℏ, ρ] + 𝓛(ρ) */
    const f = ([r11, r22, x, y]) => [2 * W * y + r22, -2 * W * y - r22, -x / 2, W * (r22 - r11) - y / 2];
    let s = [1 - p0, p0, Math.sqrt(p0 * (1 - p0)), 0]; master = new Float64Array(STEPS + 1); master[0] = p0;
    const add = (u, v, h) => u.map((x, j) => x + h * v[j]);
    for (let i = 1; i <= STEPS; i++) {
      const k1 = f(s), k2 = f(add(s, k1, DT / 2)), k3 = f(add(s, k2, DT / 2)), k4 = f(add(s, k3, DT));
      s = s.map((x, j) => x + (DT / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j])); master[i] = s[1];
    }
    dirty = false;
  }
  const at = (a, t) => { const u = Math.max(0, Math.min(STEPS, t / DT)), i = Math.min(STEPS - 1, Math.floor(u)); return a[i] + (a[i + 1] - a[i]) * (u - i); };
  const samples = (t0, t1) => Math.max(2, Math.round((t1 - t0) / DT / 2));
  const BOX = { l: 130, r: 1060, t: 120, b: 500 };
  const LX = 1100;
  function draw() {
    if (dirty) compute();
    const { ctx } = begin(d.c); hits.length = 0;
    const N = Math.round(nS.v), now = cy.now(), i = Math.min(STEPS, Math.round(now / DT));
    const pop = C('population'), faint = alpha(pop, 0.22);
    const { X, Y } = axes(ctx, BOX, [0, T], [0, 1], { nx: 4, ny: 4, xc: C('time'), yc: pop, fy: (v) => fmt(v, 2) });
    text(ctx, '$\\kt$ (1/$\\kgamma$)', BOX.r, BOX.b + 58, C('time'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kptwo$', BOX.l, BOX.t - 26, pop, { size: 22, weight: 600, tex: true });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (t) => at(master, t), 0, T, X, Y, pop, 3, 200); ctx.restore();
    shown.slice(1).forEach(({ p }) => { if (now > 0) curve(ctx, (t) => at(p, t), 0, now, X, Y, faint, 2, samples(0, now)); });
    const one = shown[0];
    [0, ...one.jumps].forEach((s0, k, js) => {
      const t0 = s0 * DT, t1 = Math.min(now, ((k + 1 < js.length ? js[k + 1] : STEPS + 1) - 1) * DT);
      if (t1 > t0) curve(ctx, (t) => at(one.p, t), t0, t1, X, Y, alpha(pop, 0.7), 3, samples(t0, t1));
      if (k > 0 && t0 <= now) line(ctx, X(t0), Y(one.p[s0 - 1]), X(t0), Y(0), alpha(pop, 0.7), 2, [4, 8]);
    });
    if (now > 0) curve(ctx, (t) => at(avg, t), 0, now, X, Y, pop, 5, samples(0, now));
    dot(ctx, X(now), Y(one.p[i]), pop, false, 9);
    dot(ctx, X(now), Y(avg[i]), pop, true, 9);
    hits.push({ x: X(now), y: Y(one.p[i]), r: 16, name: 'the followed trajectory now: p₂ = ' + fmt(one.p[i], 2) + (one.jumps.filter((j) => j <= i).length ? ', jumped ' + one.jumps.filter((j) => j <= i).length + '×' : ', not yet jumped') });
    hits.push({ x: X(now), y: Y(avg[i]), r: 16, name: 'the average of ' + N + ' trajectories now: ' + fmt(avg[i], 2) });
    hits.push({ x: X(now), y: Y(master[i]), r: 12, name: 'the master equation now: ⟨2|ρ̂_S|2⟩ = ' + fmt(master[i], 2) });
    /* legend: one entry per kind of curve */
    const keys = [
      ['trajectories', (y) => line(ctx, LX, y, LX + 44, y, faint, 2)],
      ['followed trajectory', (y) => { line(ctx, LX, y, LX + 44, y, alpha(pop, 0.7), 3); dot(ctx, LX + 44, y, pop, false, 7); }],
      ['average of N', (y) => { line(ctx, LX, y, LX + 44, y, pop, 5); dot(ctx, LX + 44, y, pop, true, 7); }],
      ['master equation', (y) => line(ctx, LX, y, LX + 44, y, pop, 3, [10, 10])],
    ];
    keys.forEach(([name, mark], k) => { const y = BOX.t + 20 + 44 * k; mark(y); text(ctx, name, LX + 60, y, PAL.ink, { size: 20, base: 'middle' }); });
    const J = jumpsBy[i];
    topline(ctx, `${J} quantum jump${J === 1 ? '' : 's'} among ${N} trajector${N === 1 ? 'y' : 'ies'} by $\\kt$ = ${fmt(now, 2)}/$\\kgamma$.`);
    ro.set(`\\frac{1}{${N}}\\sum_{n=1}^{${N}}\\left|\\langle 2|\\tilde{\\kpsi}_n(\\kt)\\rangle\\right|^2 = ${fmt(avg[i], 2)}`,
      `The master equation gives $\\langle 2|\\krhoS(\\kt)|2\\rangle$ = ${fmt(master[i], 2)}.`, { form: 'avg' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.8), draw });
})();
};
