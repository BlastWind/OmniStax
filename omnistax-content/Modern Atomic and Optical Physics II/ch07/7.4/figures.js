/* Figures for section 7.4 Analysis of STIRAP: The condition for adiabatic following.
   Referents (7.3's ids): the Λ levels lvl-1, lvl-2, lvl-3 (|E⟩), its fields pump (Ω₁) and stokes (Ω₂),
   dark |D⟩ and bright |B⟩; the four-level states four-1, four-3, four-4 and fields four-s (S = Ω₃),
   four-c (C = Ω₄), with P = Ω₁ wearing pump; pumped, the state m∥ = 0 of Figure 7.7. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const both = (ctx, x1, y1, x2, y2, col, w) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, w); arrow(ctx, mx, my, x2, y2, col, w); };
const kets = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, ...o });
const poly = (ctx, xs, ys, col, w, dash) => {
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); xs.forEach((x, i) => (i ? ctx.lineTo(x, ys[i]) : ctx.moveTo(x, ys[i]))); ctx.stroke(); ctx.restore();
};
const pct = (x) => fmt(100 * x, 0) + ' %';
/* end labels of curves that may end together: placed from the lowest up, each at least gap above the last */
const stacked = (vals, Y, gap = 24) => { const out = new Array(vals.length); let prev = Infinity; vals.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]).forEach(([v, i]) => { const y = Math.min(Y(v), prev - gap); out[i] = y; prev = y; }); return out; };
const sig = (x) => (x < 1 ? fmt(x, 3) : x < 10 ? fmt(x, 2) : x < 100 ? fmt(x, 1) : fmt(x, 0));

/* =====================================================================
   FIGURE 7.5 + 7.6 · sim-four-level-pulses · still, 2D, graph alone with stems beside
   The four-level atom of 7.3.2, every field resonant: ċ₁ = iP c₂, ċ₃ = iS c₂, ċ₄ = iC c₂,
   ċ₂ = −γc₂ + i(P c₁ + S c₃ + C c₄), |2⟩ the excited state decaying out at γ = 5/T.
   Pulses Ω₀ e^{−(t−tᵢ)²/T²}, Ω₀T = 20, P at 0.8 T; RK4 from −6 T to 6 T, step 0.008 T.
   Axes fixed: t/T −4…4 (the book's), Ω/Ω₀ 0…2, populations 0…1; stems at −ħk, 0, +ħk.
   Defaults are the book's second panel; its third (t_S = 0, t_C = −0.75) and fourth
   (S = C at 0) are the detents. Its first panel draws C wider and is only approached.
===================================================================== */
(function () {
  const d = sim('sim-four-level-pulses', 650);
  const O0 = 20, G = 5, TP = 0.8, T0 = -6, T1 = 6, DT = 0.008, N = Math.round((T1 - T0) / DT);
  const tS = ctl(d.controls, { label: '\\kt_S', cls: 'time', key: 'tS', min: -2, max: 1.5, step: 0.05, value: -0.75, unit: 'T', dec: 2,
    aria: 'the time at which the pulse S peaks, in units of T', detents: [-0.75, 0], specials: [{ at: () => tC.v, label: 'S = C' }] });
  const tC = ctl(d.controls, { label: '\\kt_C', cls: 'time', key: 'tC', min: -2, max: 2, step: 0.05, value: 0, unit: 'T', dec: 2,
    aria: 'the time at which the control pulse C peaks, in units of T', detents: [-0.75, 0], specials: [{ at: () => tS.v, label: 'S = C' }] });
  const aC = ctl(d.controls, { label: '\\kOmegafour/\\kOmegathree', cls: 'coupling', key: 'aC', min: 0, max: 2, step: 0.02, value: 1, unit: '', dec: 2,
    aria: 'the peak of the control pulse C over the peak of S', detents: [1] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const pulse = (t, t0) => Math.exp(-((t - t0) ** 2));
  let memo = '', run = null;
  function solve() {
    const key = [tS.v, tC.v, aC.v].join('|'); if (key === memo) return run; memo = key;
    const s0 = tS.v, c0 = tC.v, a = aC.v;
    /* state as [re1, im1, re2, im2, re3, im3, re4, im4]; index 1 is the excited |2⟩ */
    const f = (t, y) => {
      const P = O0 * pulse(t, TP), S = O0 * pulse(t, s0), Cc = O0 * a * pulse(t, c0);
      const [r1, i1, r2, i2, r3, i3, r4, i4] = y;
      const sr = P * r1 + S * r3 + Cc * r4, si = P * i1 + S * i3 + Cc * i4;
      return [-P * i2, P * r2, -G * r2 - si, -G * i2 + sr, -S * i2, S * r2, -Cc * i2, Cc * r2];
    };
    let y = [1, 0, 0, 0, 0, 0, 0, 0], t = T0;
    const p1 = [], p3 = [], p4 = [], ts = [];
    const add = (u, v, h) => u.map((x, i) => x + h * v[i]);
    for (let n = 0; n <= N; n++) {
      if (n % 5 === 0) { ts.push(t); p1.push(y[0] ** 2 + y[1] ** 2); p3.push(y[4] ** 2 + y[5] ** 2); p4.push(y[6] ** 2 + y[7] ** 2); }
      if (n === N) break;
      const k1 = f(t, y), k2 = f(t + DT / 2, add(y, k1, DT / 2)), k3 = f(t + DT / 2, add(y, k2, DT / 2)), k4 = f(t + DT, add(y, k3, DT));
      y = y.map((x, i) => x + (DT / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])); t += DT;
    }
    const end = { p1: p1[p1.length - 1], p3: p3[p3.length - 1], p4: p4[p4.length - 1] };
    run = { ts, p1, p3, p4, end }; return run;
  }
  const TOP = { l: 150, r: 900, t: 125, b: 255 }, BOT = { l: 150, r: 900, t: 335, b: 545 }, STEM = { l: 1060, r: 1330, t: 335, b: 545 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const r = solve(), cpl = C('coupling'), pop = C('population'), tm = C('time'), mom = C('momentum');
    const rP = F.ref('pump'), rS = F.ref('four-s'), rC = F.ref('four-c'), r1 = F.ref('four-1'), r3 = F.ref('four-3'), r4 = F.ref('four-4');
    /* pulses: Ω/Ω₀ on 0…2 so a C twice S still fits */
    const a = axes(ctx, TOP, [-4, 4], [0, 2], { nx: 8, ny: 2, yc: cpl, fx: () => '', fy: (v) => fmt(v, 0) });
    text(ctx, 'Ω/Ω₀', TOP.l, TOP.t - 24, cpl, { size: 20, weight: 600 });
    const fP = (t) => pulse(t, TP), fS = (t) => pulse(t, tS.v), fC = (t) => aC.v * pulse(t, tC.v);
    curve(ctx, fS, -4, 4, a.X, a.Y, rS, 4, 200);
    curve(ctx, fC, -4, 4, a.X, a.Y, rC, 4, 200);
    curve(ctx, fP, -4, 4, a.X, a.Y, rP, 4, 200);
    /* names on the peaks, S = C where the two coincide */
    const same = Math.abs(tS.v - tC.v) < 0.12 && Math.abs(aC.v - 1) < 0.04;
    const names = (same ? [['S = C', tS.v, 1, rC], ['P', TP, 1, rP]] : [['S', tS.v, 1, rS], ['C', tC.v, aC.v, rC], ['P', TP, 1, rP]])
      .filter((n) => n[2] > 0.04).sort((u, v) => u[1] - v[1]);
    let lastX = -1e9, lift = 0;
    names.forEach(([s, t0, h, col]) => {
      const x = a.X(t0); lift = x - lastX < 46 ? lift + 26 : 0; lastX = x;
      text(ctx, s, x, a.Y(Math.min(2, h)) - 18 - lift, col, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x, y: a.Y(Math.min(2, h)), r: 22, name: s === 'P' ? 'the pump P = Ω₁, coupling |1⟩ to |2⟩' : s === 'S' ? 'the pulse S = Ω₃, coupling |3⟩ to |2⟩' : s === 'C' ? 'the control pulse C = Ω₄, coupling |4⟩ to |2⟩' : 'S = Ω₃ and C = Ω₄, coinciding' });
    });
    /* populations */
    const b = axes(ctx, BOT, [-4, 4], [0, 1], { nx: 8, ny: 5, xl: 't / T', xc: tm, fy: (v) => fmt(v, 1) });
    text(ctx, 'populations', BOT.l, BOT.t - 24, pop, { size: 20, weight: 600 });
    const lo = r.ts.findIndex((t) => t >= -4), hi = r.ts.findIndex((t) => t > 4);
    const xs = r.ts.slice(lo, hi).map(b.X);
    [[r.p1, r1, '1', 'the population of |1⟩'], [r.p3, r3, '3', 'the population of |3⟩'], [r.p4, r4, '4', 'the population of |4⟩']].forEach(([p, col]) => poly(ctx, xs, p.slice(lo, hi).map(b.Y), col, 5));
    /* end labels, stepped apart where the curves end close together */
    const ends = [[r.p1[hi - 1], r1, '1'], [r.p3[hi - 1], r3, '3'], [r.p4[hi - 1], r4, '4']], ey = stacked(ends.map((e) => e[0]), b.Y);
    ends.forEach(([, col, s], i) => text(ctx, s, BOT.r + 12, ey[i], col, { size: 22, weight: 600 }));
    /* the atoms' final momenta: |4⟩ and |3⟩ kicked oppositely by ħk, |1⟩ undeflected */
    const s = axes(ctx, STEM, [-1.5, 1.5], [0, 1], { nx: 0, ny: 5, fy: () => '' });
    [[-1, '−ħk'], [0, '0'], [1, '+ħk']].forEach(([v, t]) => text(ctx, t, s.X(v), STEM.b + 26, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, 'final momentum', STEM.r, STEM.b + 58, mom, { size: 20, weight: 600, align: 'right' });
    const E = r.end;
    [[-1, E.p4, r4, '$|4\\rangle$', 'atoms ending in |4⟩'], [0, E.p1, r1, '$|1\\rangle$', 'atoms left in |1⟩'], [1, E.p3, r3, '$|3\\rangle$', 'atoms ending in |3⟩']].forEach(([v, p, col, k, nm]) => {
      const x = s.X(v); line(ctx, x, STEM.b, x, s.Y(p), col, 8);
      if (p > 0.005) dot(ctx, x, s.Y(p), col, true, 8);
      kets(ctx, k, x, Math.min(STEM.b - 22, s.Y(p) - 26), col, { align: 'center', bg: PAL.panel, size: 20 });
      hits.push({ x, y: (STEM.b + s.Y(p)) / 2, r: 24, name: `${nm}: ${pct(p)}` });
    });
    /* the scheme the pulses act on */
    const SX = { e: [1140, 1250], g1: [1050, 1120], g3: [1160, 1230], g4: [1270, 1340] }, YE = 120;
    line(ctx, SX.e[0], YE, SX.e[1], YE, PAL.ink, 4);
    [[SX.g1, 236, r1, '|1⟩'], [SX.g3, 256, r3, '|3⟩'], [SX.g4, 236, r4, '|4⟩']].forEach(([xx, y, col, k]) => { line(ctx, xx[0], y, xx[1], y, col, 4); text(ctx, k, (xx[0] + xx[1]) / 2, y + 22, col, { size: 20, weight: 600, align: 'center' }); });
    text(ctx, '|2⟩', SX.e[1] + 12, YE, PAL.ink, { size: 20, weight: 600 });
    both(ctx, 1095, 230, 1165, YE + 6, rP, 3); both(ctx, 1195, 250, 1195, YE + 6, rS, 3); both(ctx, 1305, 230, 1225, YE + 6, rC, 3);
    hits.push({ x: 1195, y: YE, r: 24, name: 'the excited state |2⟩, decaying out of the system' }, { x: 1085, y: 236, r: 24, name: 'the initial state |1⟩' },
      { x: 1195, y: 256, r: 20, name: 'the final state |3⟩' }, { x: 1305, y: 236, r: 24, name: 'the final state |4⟩' });
    const order = [['S', tS.v], ['C', tC.v], ['P', TP]].sort((u, v) => u[1] - v[1]).map((n) => n[0]);
    const lost = Math.max(0, 1 - E.p1 - E.p3 - E.p4);
    topline(ctx, same ? `S and C together, then P: the atoms end ${pct(E.p3)} in $|3\\rangle$ and ${pct(E.p4)} in $|4\\rangle$.`
      : `In the order ${order.join(', ')} the atoms end ${pct(E.p3)} in $|3\\rangle$ and ${pct(E.p4)} in $|4\\rangle$, ${pct(E.p1)} left in $|1\\rangle$.`);
    const rd = (v) => Math.round(100 * Math.max(0, v)) / 100, q1 = rd(E.p1), q3 = rd(E.p3), q4 = rd(E.p4), sum = q1 + q3 + q4;
    ro.set(`|\\kcinst_3|^2 + |\\kcinst_4|^2 + |\\kcinst_1|^2 = ${fmt(q3, 2)} + ${fmt(q4, 2)} + ${fmt(q1, 2)} = ${fmt(sum, 2)}`,
      lost > 0.005 ? `The other ${fmt(1 - sum, 2)} decayed from the excited state on the way.` : 'Nothing is lost through the excited state.', { form: 'fl' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-dark-loss · still, 2D, two graphs side by side
   Eqs. (7.41)–(7.43) with Ω₁ = Ω sin(t/τ), Ω₂ = Ω cos(t/τ), written in the |D⟩, |B⟩, |E⟩ basis:
   c₁ = d cos s + b sin s, c₂ = −d sin s + b cos s, c₃ = i e, s = t/τ, and
   ḋ = −b/τ, ḃ = d/τ − Ω e, ė = Ω b − γ₁₃ e: constant coefficients, so a run is a matrix
   exponential. ρ₂₂ at t = πτ/2 is d². The law drawn is e^{−πγ₁₃/Ω²τ} (the book's exponent
   carries a stray 1/2: correction c-eq-7-58). Axes fixed: t/τ 0…π/2, populations 0…1;
   τ 0…60 μs, ρ₂₂ 0…1.
===================================================================== */
(function () {
  const d = sim('sim-dark-loss', 640);
  const tau = ctl(d.controls, { label: '\\ktau', cls: 'time', key: 'tau', min: 1, max: 60, step: 0.5, value: 20, unit: 'μs', dec: 1,
    aria: 'the pulse timescale tau, in microseconds', specials: [{ at: () => gam.v / (om.v * om.v), label: 'γ₁₃/Ω²τ = 1' }] });
  const om = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0.2, max: 2, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the Rabi frequency, in inverse microseconds' });
  const gam = ctl(d.controls, { label: '\\kgammaonethree', cls: 'rate', key: 'gamma', min: 0, max: 5, step: 0.05, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the decay rate gamma 1 3, in inverse microseconds', specials: [{ at: 0, label: 'no decay' }] });
  const basis = choice(d.controls, { label: '\\text{basis}', key: 'basis', value: 'bare', aria: 'the basis the populations are drawn in',
    options: [{ value: 'bare', label: '|1⟩, |2⟩, |3⟩' }, { value: 'db', label: '|D⟩, |B⟩, |E⟩' }] });
  [['bare', '|1\\rangle, |2\\rangle, |3\\rangle'], ['db', '|D\\rangle, |B\\rangle, |E\\rangle']].forEach(([v, t]) => { const btn = d.controls.querySelector(`.segbtn[data-value="${v}"]`); if (btn) F.tex(btn, t); });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const mul = (A, B) => A.map((r) => B[0].map((_, j) => r[0] * B[0][j] + r[1] * B[1][j] + r[2] * B[2][j]));
  /* e^A by scaling and squaring a Taylor series; A is 3 × 3 and real */
  function expm(A) {
    const n = Math.max(...A.map((r) => r.reduce((s, x) => s + Math.abs(x), 0)));
    const k = Math.max(0, Math.ceil(Math.log2(n || 1)) + 2), s = 2 ** k, B = A.map((r) => r.map((x) => x / s));
    let E = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], P = E;
    for (let i = 1; i <= 14; i++) { P = mul(P, B).map((r) => r.map((x) => x / i)); E = E.map((r, a) => r.map((x, b) => x + P[a][b])); }
    for (let i = 0; i < k; i++) E = mul(E, E);
    return E;
  }
  const M = (O, g, T) => [[0, -1 / T, 0], [1 / T, 0, -O], [0, O, -g]];
  const final = (O, g, T) => { const E = expm(M(O, g, T).map((r) => r.map((x) => x * Math.PI * T / 2))); return E[0][0] ** 2; };
  const NT = 160;
  let memo = '', run = null;
  function solve() {
    const key = [tau.v, om.v, gam.v].join('|'); if (key === memo) return run; memo = key;
    const O = om.v, g = gam.v, T = tau.v, h = (Math.PI * T / 2) / NT, E = expm(M(O, g, T).map((r) => r.map((x) => x * h)));
    const s = [], dd = [], bb = [], ee = [];
    let v = [1, 0, 0];
    for (let i = 0; i <= NT; i++) {
      s.push((i * h) / T); dd.push(v[0]); bb.push(v[1]); ee.push(v[2]);
      v = [0, 1, 2].map((a) => E[a][0] * v[0] + E[a][1] * v[1] + E[a][2] * v[2]);
    }
    const scan = [];
    for (let i = 0; i <= 118; i++) { const t = 1 + (i * 59) / 118; scan.push([t, final(O, g, t)]); }
    run = { s, dd, bb, ee, scan, end: dd[NT] ** 2 }; return run;
  }
  const PUL = { l: 140, r: 640, t: 135, b: 200 }, POP = { l: 140, r: 640, t: 270, b: 540 }, FIN = { l: 840, r: 1300, t: 135, b: 540 };
  const piTicks = ['0', 'π/8', 'π/4', '3π/8', 'π/2'];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const r = solve(), O = om.v, g = gam.v, T = tau.v, x = g / (O * O * T), law = Math.exp(-Math.PI * x);
    const cpl = C('coupling'), pop = C('population'), tm = C('time');
    const rP = F.ref('pump'), rS = F.ref('stokes'), r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), r3 = F.ref('lvl-3'), rD = F.ref('dark'), rB = F.ref('bright');
    /* the two pulses, Ω₁/Ω and Ω₂/Ω, over the transfer */
    const p = axes(ctx, PUL, [0, Math.PI / 2], [0, 1], { nx: 4, ny: 1, fx: () => '', fy: (v) => fmt(v, 0) });
    curve(ctx, (s) => Math.cos(s), 0, Math.PI / 2, p.X, p.Y, rS, 4, 80);
    curve(ctx, (s) => Math.sin(s), 0, Math.PI / 2, p.X, p.Y, rP, 4, 80);
    kets(ctx, '$\\kOmegatwo/\\kOmega$', PUL.l + 10, PUL.t - 22, rS, { size: 19 });
    kets(ctx, '$\\kOmegaone/\\kOmega$', PUL.r, PUL.t - 22, rP, { size: 19, align: 'right' });
    /* populations in the chosen basis */
    const q = axes(ctx, POP, [0, Math.PI / 2], [0, 1], { nx: 4, ny: 5, xl: 't / τ', xc: tm, fx: (v) => piTicks[Math.round((v / (Math.PI / 2)) * 4)], fy: (v) => fmt(v, 1) });
    text(ctx, 'populations', POP.l, POP.t - 24, pop, { size: 20, weight: 600 });
    const set = (v) => {
      const c1 = r.s.map((s, i) => (r.dd[i] * Math.cos(s) + r.bb[i] * Math.sin(s)) ** 2), c2 = r.s.map((s, i) => (-r.dd[i] * Math.sin(s) + r.bb[i] * Math.cos(s)) ** 2);
      return v === 'bare' ? [c1, c2, r.ee.map((e) => e * e)] : [r.dd.map((z) => z * z), r.bb.map((z) => z * z), r.ee.map((e) => e * e)];
    };
    const flat = basis.mix((v) => set(v).flat()), L = r.s.length, xs = r.s.map(q.X);
    const cols = [basis.mixColor((v) => (v === 'bare' ? r1 : rD)), basis.mixColor((v) => (v === 'bare' ? r2 : rB)), r3];
    const names = (v) => (v === 'bare' ? ['|1⟩', '|2⟩', '|3⟩'] : ['|D⟩', '|B⟩', '|E⟩']);
    const lost = r.s.map((_, i) => 1 - r.dd[i] ** 2 - r.bb[i] ** 2 - r.ee[i] ** 2);
    poly(ctx, xs, lost.map(q.Y), alpha(PAL.ink, 0.6), 3, [10, 10]);
    [2, 1, 0].forEach((j) => poly(ctx, xs, flat.slice(j * L, (j + 1) * L).map(q.Y), cols[j], 5));
    const endV = [0, 1, 2].map((j) => flat[(j + 1) * L - 1]);
    const ey = stacked(endV, q.Y, 26);
    [0, 1, 2].forEach((j) => {
      const y = ey[j];
      basis.only(ctx, 'bare', () => text(ctx, names('bare')[j], POP.r + 12, y, cols[j], { size: 20, weight: 600 }), [0, 8]);
      basis.only(ctx, 'db', () => text(ctx, names('db')[j], POP.r + 12, y, cols[j], { size: 20, weight: 600 }), [0, 8]);
      hits.push({ x: POP.r - 4, y: q.Y(endV[j]), r: 18, name: `the population of ${names(basis.value)[j]} at the end, ${fmt(endV[j], 3)}` });
    });
    const lEnd = lost[L - 1];
    if (lEnd > 0.04) text(ctx, 'decayed', q.X(Math.PI / 2) - 8, q.Y(lEnd) - 16, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    hits.push({ x: q.X(Math.PI / 2) - 10, y: q.Y(lEnd), r: 16, name: `the probability that the atom has decayed, ${fmt(lEnd, 3)}` });
    /* final ρ₂₂ against τ: the exact runs solid, the law dashed */
    const f = axes(ctx, FIN, [0, 60], [0, 1], { nx: 6, ny: 5, xl: 'τ (μs)', xc: tm, fy: (v) => fmt(v, 1) });
    kets(ctx, '$\\krhotwotwo$ at $\\kt = \\pi\\ktau/2$', FIN.l, FIN.t - 24, pop, { size: 20 });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (t) => Math.exp(-Math.PI * g / (O * O * Math.max(t, 1e-6))), 0.3, 60, f.X, f.Y, alpha(pop, 0.75), 3, 240); ctx.restore();
    poly(ctx, r.scan.map((u) => f.X(u[0])), r.scan.map((u) => f.Y(u[1])), pop, 5);
    dot(ctx, f.X(T), f.Y(r.end), pop);
    hits.push({ x: f.X(T), y: f.Y(r.end), r: 18, name: `this run: ρ₂₂ = ${fmt(r.end, 3)} at τ = ${fmt(T, 1)} μs` });
    line(ctx, FIN.r - 250, FIN.b - 40, FIN.r - 210, FIN.b - 40, pop, 5); text(ctx, 'exact', FIN.r - 200, FIN.b - 40, pop, { size: 17 });
    line(ctx, FIN.r - 130, FIN.b - 40, FIN.r - 90, FIN.b - 40, alpha(pop, 0.75), 3, [10, 10]); kets(ctx, '$e^{-\\pi x}$', FIN.r - 80, FIN.b - 40, pop, { size: 17, weight: 400 });
    topline(ctx, `$\\kgammaonethree/\\kOmega^2\\ktau$ = ${sig(x)}, and $\\krhotwotwo$ = ${fmt(r.end, 2)} of the atoms reach $-|2\\rangle$.`);
    ro.set(`\\krhotwotwo = ${fmt(r.end, 3)},\\qquad e^{-\\pi\\kgammaonethree/|\\kOmega|^2\\ktau} = e^{-\\pi\\cdot ${sig(x)}} = ${fmt(law, 3)}`,
      g > 0 ? `$\\kOmegaNA = 1/\\ktau = ${fmt(1 / T, 3)}\\ \\mu\\text{s}^{-1}$ against $\\kgammaB = |\\kOmega|^2/\\kgammaonethree = ${fmt((O * O) / g, 2)}\\ \\mu\\text{s}^{-1}$.`
        : `With no decay only the coherent condition $\\kOmega\\ktau \\gg 1$ limits the transfer; here $\\kOmega\\ktau = ${fmt(O * T, 1)}$.`, { form: 'loss' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.7 · sim-two-bases · still, 2D, a choice of basis that morphs
   J = 1 → J′ = 1 under linear polarization, after optical pumping. Parallel: π light couples
   m = ±1 → m′ = ±1, the atoms in m∥ = 0. Perpendicular: σ± couple −1→0′, 0→−1′, 0→+1′, +1→0′;
   the Λ −1→0′←+1 has the dark state (|−1⟩ − |+1⟩)/√2 = |0∥⟩, populations ½, ½, coherence −½.
   The π arrows bend into the Λ's; the m∥ = 0 disc splits into the two halves.
===================================================================== */
(function () {
  const d = sim('sim-two-bases', 530);
  const axis = choice(d.controls, { label: '\\text{axis}', key: 'axis', value: 'par', aria: 'the axis of quantization',
    options: [{ value: 'par', label: 'parallel' }, { value: 'perp', label: 'perpendicular' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const XS = [420, 700, 980], HW = 95, YU = 140, YL = 360, R0 = 30;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const rp = F.ref('pumped'), coh = C('coherence'), pop = C('population'), perp = axis.value === 'perp';
    const sub = (v) => (v === 'par' ? '∥' : '⊥');
    XS.forEach((x, i) => {
      line(ctx, x - HW, YU, x + HW, YU, PAL.ink, 4); line(ctx, x - HW, YL, x + HW, YL, PAL.ink, 4);
      const m = ['−1', '0', '+1'][i];
      ['par', 'perp'].forEach((v) => axis.only(ctx, v, () => text(ctx, `m${sub(v)} = ${m}`, x, YL + 52, PAL.ink, { size: 20, align: 'center' }), [0, 8]));
      hits.push({ x, y: YU, r: 26, name: `the excited sublevel m′ = ${m}` }, { x, y: YL, r: 26, name: `the ground sublevel m = ${m}` });
    });
    text(ctx, "J′ = 1", XS[2] + HW + 20, YU, PAL.ink, { size: 22 }); text(ctx, 'J = 1', XS[2] + HW + 20, YL, PAL.ink, { size: 22 });
    /* the two arrows both views have: π at m = ±1 bending into the Λ, −1 → 0′ and +1 → 0′ */
    const k = axis.mix((v) => (v === 'perp' ? 1 : 0));
    const lam = [[XS[0], XS[1] - 40], [XS[2], XS[1] + 40]];
    lam.forEach(([x0, x1]) => { const xu = x0 + (x1 - x0) * k, xl = x0 + (x0 < XS[1] ? -15 : 15) * k; both(ctx, xl, YL - 8, xu, YU + 8, PAL.ink, 3 + 2 * k); });
    axis.only(ctx, 'perp', () => {
      both(ctx, XS[1] - 30, YL - 8, XS[0] + 40, YU + 8, PAL.muted, 3); both(ctx, XS[1] + 30, YL - 8, XS[2] - 40, YU + 8, PAL.muted, 3);
      text(ctx, 'Λ', XS[1], YU - 34, PAL.ink, { size: 24, weight: 600, align: 'center' });
    }, [0, 0]);
    axis.only(ctx, 'par', () => text(ctx, 'π', XS[0] - 30, (YU + YL) / 2, PAL.ink, { size: 24, align: 'right' }), [0, 0]);
    axis.only(ctx, 'perp', () => text(ctx, 'σ⁺, σ⁻', XS[0] - 50, (YU + YL) / 2, PAL.ink, { size: 22, align: 'right' }), [0, 0]);
    /* the atoms: one disc of area 1 in m∥ = 0 splitting into two of area ½ in m⊥ = ±1 */
    const rr = R0 * (1 - k * (1 - Math.SQRT1_2));
    const xa = XS[1] + (XS[0] - XS[1]) * k, xb = XS[1] + (XS[2] - XS[1]) * k;
    ctx.save(); ctx.fillStyle = rp; [xa, xb].forEach((x) => { ctx.beginPath(); ctx.arc(x, YL, rr, 0, 2 * Math.PI); ctx.fill(); }); ctx.restore();
    axis.only(ctx, 'par', () => text(ctx, '1', XS[1], YL - R0 - 18, pop, { size: 20, weight: 600, align: 'center' }), [0, 6]);
    axis.only(ctx, 'perp', () => {
      [XS[0], XS[2]].forEach((x) => text(ctx, '½', x, YL - rr - 18, pop, { size: 20, weight: 600, align: 'center' }));
      ctx.save(); ctx.strokeStyle = coh; ctx.lineWidth = 4; ctx.setLineDash([10, 10]); ctx.beginPath();
      ctx.moveTo(XS[0], YL + 76); ctx.quadraticCurveTo(XS[1], YL + 150, XS[2], YL + 76); ctx.stroke(); ctx.restore();
      text(ctx, 'coherence −½', XS[1], YL + 140, coh, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    }, [0, 8]);
    hits.push(perp ? { x: XS[0], y: YL, r: 30, name: 'half the atoms, in m⊥ = −1, coherent with the half in m⊥ = +1' } : { x: XS[1], y: YL, r: 34, name: 'all the atoms, in m∥ = 0' });
    if (perp) hits.push({ x: XS[2], y: YL, r: 30, name: 'half the atoms, in m⊥ = +1, coherent with the half in m⊥ = −1' }, { x: XS[1], y: YL + 110, r: 30, name: 'the coherence between m⊥ = −1 and m⊥ = +1' });
    topline(ctx, perp ? 'Quantized across the polarization, σ⁺ and σ⁻ make a Λ, and the atoms are pumped into its dark superposition of m⊥ = ±1.'
      : 'Quantized along the polarization, the light couples only m = ±1, and the atoms are pumped into m∥ = 0.');
    ro.set(perp ? '\\mk{rho}{\\krhohat} = \\mk{pop}{\\tfrac{1}{2}\\left(|{-1}\\rangle\\langle{-1}| + |{+1}\\rangle\\langle{+1}|\\right)} \\mk{coh}{- \\tfrac{1}{2}\\left(|{-1}\\rangle\\langle{+1}| + |{+1}\\rangle\\langle{-1}|\\right)}'
      : '\\mk{rho}{\\krhohat} = \\mk{pop}{|0_\\parallel\\rangle\\langle 0_\\parallel|}',
      perp ? 'Two populations of ½ and a coherence of −½: the pure state (|−1⟩ − |+1⟩)/√2 in the perpendicular basis.' : 'One population, 1, and no coherence.', { form: axis.value });
  }
  register(d.fig, { update: () => {}, draw });
})();

};
