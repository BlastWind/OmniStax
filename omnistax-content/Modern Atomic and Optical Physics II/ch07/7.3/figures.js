/* Figures for section 7.3 Adiabatic processes in multi-level systems.
   The book gives no numbers. The STIRAP figures measure time in τ, the width of each
   Gaussian pulse Ω_i(t) = Ω₀ e^{−(t − t_i)²/τ²}, and frequencies in 1/τ; |3⟩ decays as in
   Eq. (7.43), ċ₃ = −γ₁₃c₃ + …, with γ₁₃ = 1/τ; the Hamiltonian is (7.24) with the
   two-photon detuning added as −δ|2⟩⟨2|. The pulse area of each pulse is A = ∫2Ω dt
   (Eq. 7.20) = 2√π Ω₀τ. Referents: lvl-1, lvl-2, lvl-3, pump, stokes, dark (7.3.1);
   four-1 … four-4 (7.3.2), two groups. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, axes, curve, hover, readout, angleArc, mixColor } = F;
const sim = (id, H) => F.sim(root, id, H);
const ket = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, bg: PAL.panel, ...o });
const SQPI = Math.sqrt(Math.PI);
const omega0 = (A) => (A * Math.PI) / (2 * SQPI);            /* peak Ω₀τ of a pulse of area A (A in units of π) */
const GAMMA = 1, T0 = -5, T1 = 5;

/* The three amplitudes from |1⟩ at T0 under Eqs. (7.41)–(7.43) with (7.24)'s detuning and δ:
   ċ₁ = iΩ₁c₃, ċ₂ = iΩ₂c₃ + iδc₂, ċ₃ = (iΔ − γ₁₃)c₃ + i(Ω₁c₁ + Ω₂c₂); Ω₁ centred at +d/2, Ω₂ at −d/2,
   so a positive delay d sends the Stokes pulse first. RK4 with |λ|h ≤ q. With `keep`, every step is
   stored as [t, Re c₁, Im c₁, Re c₂, Im c₂, Re c₃, Im c₃]; otherwise only the end. */
function stirap(O0, d, D, dl, keep) {
  const lam = Math.sqrt(D * D + 4 * O0 * O0) + Math.abs(dl) + GAMMA;
  const n = Math.max(160, Math.ceil(((T1 - T0) * lam) / (keep ? 0.5 : 1))), h = (T1 - T0) / n;
  const c = new Float64Array(6), k = [new Float64Array(6), new Float64Array(6), new Float64Array(6), new Float64Array(6)], y = new Float64Array(6);
  c[0] = 1;
  const f = (t, u, out) => {
    const a = O0 * Math.exp(-((t - d / 2) ** 2)), b = O0 * Math.exp(-((t + d / 2) ** 2));
    out[0] = -a * u[5]; out[1] = a * u[4];
    out[2] = -b * u[5] - dl * u[3]; out[3] = b * u[4] + dl * u[2];
    out[4] = -GAMMA * u[4] - D * u[5] - a * u[1] - b * u[3]; out[5] = -GAMMA * u[5] + D * u[4] + a * u[0] + b * u[2];
  };
  const out = keep ? [[T0, ...c]] : null;
  let t = T0;
  for (let i = 0; i < n; i++) {
    f(t, c, k[0]);
    for (let j = 0; j < 6; j++) y[j] = c[j] + (h / 2) * k[0][j];
    f(t + h / 2, y, k[1]);
    for (let j = 0; j < 6; j++) y[j] = c[j] + (h / 2) * k[1][j];
    f(t + h / 2, y, k[2]);
    for (let j = 0; j < 6; j++) y[j] = c[j] + h * k[2][j];
    f(t + h, y, k[3]);
    for (let j = 0; j < 6; j++) c[j] += (h / 6) * (k[0][j] + 2 * k[1][j] + 2 * k[2][j] + k[3][j]);
    t += h;
    if (keep) out.push([t, ...c]);
  }
  return keep ? out : c[2] * c[2] + c[3] * c[3];
}
/* eigenvalues, largest first, of the real symmetric [[0,0,−a],[0,−δ,−b],[−a,−b,−Δ]] (trigonometric method) */
function eig3(a, b, dl, D) {
  const d1 = 0, d2 = -dl, d3 = -D, p1 = a * a + b * b, q = (d1 + d2 + d3) / 3;
  const p2 = (d1 - q) ** 2 + (d2 - q) ** 2 + (d3 - q) ** 2 + 2 * p1;
  if (p2 < 1e-18) return [q, q, q];
  const p = Math.sqrt(p2 / 6), B1 = (d1 - q) / p, B2 = (d2 - q) / p, B3 = (d3 - q) / p, ba = -a / p, bb = -b / p;
  const det = B1 * (B2 * B3 - bb * bb) - 0 + ba * (0 * bb - B2 * ba);
  const ph = Math.acos(Math.max(-1, Math.min(1, det / 2))) / 3;
  const e1 = q + 2 * p * Math.cos(ph), e3 = q + 2 * p * Math.cos(ph + (2 * Math.PI) / 3);
  return [e1, 3 * q - e1 - e3, e3];
}

/* =====================================================================
   FIGURE 7.2 · sim-stirap · moving, 2D, dial beside four strips
   The book's three panels (pulses, θ, P₁ and P₂) on one clock, t from −5τ to 5τ,
   plus the dressed energies ε₊ ≥ ε₀ ≥ ε₋ (exact eigenvalues of (7.24) with δ)
   and a dial in the |1⟩, −|2⟩ plane: |Φ₀⟩ of (7.26) at angle θ, tan θ = Ω₁/Ω₂ = e^{2td},
   and the atom's point (√P₁, √P₂). Strips fixed: Ω 0–18/τ (A = 20π peaks at 17.7),
   θ 0–π/2, ε −20…20/τ clipped at the frame (ε₋ reaches −30 at the slider maxima), P 0–1.
===================================================================== */
(function () {
  const d = sim('sim-stirap', 780);
  const cy = cycle(() => T1 - T0, 1.2);
  let run = null;
  const reset = () => { run = null; cy.reset(); };
  const A = ctl(d.controls, { label: '\\kAarea', cls: 'phase', key: 'A', min: 1, max: 20, step: 0.5, value: 10, unit: 'π', dec: 1, aria: 'the area of each pulse, in units of pi', onInput: reset });
  const del = ctl(d.controls, { label: '\\text{delay}', cls: 'time', key: 'delay', min: -3, max: 3, step: 0.05, value: 1.2, unit: 'τ', dec: 2, aria: 'how far the Stokes pulse leads the pump pulse, in units of tau',
    specials: [{ at: 0, label: 'coincident' }], onInput: reset });
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -4, max: 4, step: 0.05, value: 0, unit: '1/τ', dec: 2, aria: 'the two-photon detuning, in units of one over tau',
    specials: [{ at: 0, label: 'two-photon resonance' }], onInput: reset });
  const Dl = ctl(d.controls, { label: '\\kDelta', cls: 'frequency', key: 'Delta', min: 0, max: 20, step: 0.1, value: 0, unit: '1/τ', dec: 1, aria: 'the single-photon detuning, in units of one over tau',
    specials: [{ at: 0, label: 'resonance' }], onInput: reset });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  function solve() {
    const O0 = omega0(A.v), dd = del.v, rows = stirap(O0, dd, Dl.v, dl.v, true);
    const o1 = (t) => O0 * Math.exp(-((t - dd / 2) ** 2)), o2 = (t) => O0 * Math.exp(-((t + dd / 2) ** 2));
    const eps = rows.map((r) => eig3(o1(r[0]), o2(r[0]), dl.v, Dl.v));
    return { O0, dd, rows, eps, o1, o2 };
  }
  /* the stored state at t, interpolated between steps */
  const at = (r, t) => {
    const n = r.rows.length - 1, x = Math.max(0, Math.min(n, ((t - T0) / (T1 - T0)) * n)), i = Math.min(n - 1, Math.floor(x)), k = x - i;
    const a = r.rows[i], b = r.rows[i + 1], c = a.map((v, j) => v + (b[j] - v) * k);
    const e = r.eps[i].map((v, j) => v + (r.eps[i + 1][j] - v) * k);
    const p1 = c[1] ** 2 + c[2] ** 2, p2 = c[3] ** 2 + c[4] ** 2, p3 = c[5] ** 2 + c[6] ** 2;
    return { c, e, p1, p2, p3 };
  };
  const thetaAt = (r, t) => Math.atan(Math.exp(2 * t * r.dd));
  const O = { x: 140, y: 610 }, R = 330;
  const BOX = { l: 650, r: 1265 };
  const S = { om: { t: 130, b: 225 }, th: { t: 268, b: 330 }, en: { t: 372, b: 505 }, pp: { t: 548, b: 680 } };
  const box = (s) => ({ l: BOX.l, r: BOX.r, t: s.t, b: s.b });
  const legend = (ctx, y, s, col, dash, w = 4) => { line(ctx, BOX.r + 18, y, BOX.r + 50, y, col, w, dash); text(ctx, s, BOX.r + 60, y, col, { size: 20, weight: 600, tex: true }); };
  function draw() {
    if (!run) run = solve();
    const { ctx } = begin(d.c); hits.length = 0;
    const now = T0 + cy.now(), s = at(run, now), th = thetaAt(run, now);
    const L1 = F.ref('lvl-1'), L2 = F.ref('lvl-2'), L3 = F.ref('lvl-3'), FP = F.ref('pump'), FS = F.ref('stokes'), DK = F.ref('dark');
    const tm = C('time'), cpl = C('coupling'), ph = C('phase'), en = C('energy'), pp = C('population');
    const guide = alpha(PAL.ink, 0.35);
    /* ---- the dial ---- */
    line(ctx, O.x, O.y, O.x + R + 40, O.y, PAL.muted, 2);
    line(ctx, O.x, O.y, O.x, O.y - R - 40, PAL.muted, 2);
    ket(ctx, '$|1\\rangle$', O.x + R + 52, O.y, L1);
    ket(ctx, '$-|2\\rangle$', O.x, O.y - R - 64, L2, { align: 'center' });
    ctx.save(); ctx.strokeStyle = guide; ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.beginPath(); ctx.arc(O.x, O.y, R, -Math.PI / 2, 0); ctx.stroke(); ctx.restore();
    angleArc(ctx, O, 92, 0, Math.max(th, 1e-4), th > 0.12 ? 'θ' : '', null, ph);
    /* the atom's path so far and its point */
    const trail = [];
    for (let t = T0; t <= now + 1e-9; t += 0.04) { const q = at(run, t); trail.push([O.x + R * Math.sqrt(q.p1), O.y - R * Math.sqrt(q.p2)]); }
    if (trail.length > 1) { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.beginPath(); trail.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); }
    const tip = [O.x + R * Math.cos(th), O.y - R * Math.sin(th)];
    arrow(ctx, O.x, O.y, tip[0], tip[1], DK, 5);
    const side = th < Math.PI / 4 ? -1 : 1;                  /* the label on the side away from the nearer axis label */
    ket(ctx, '$|\\Phi_0\\rangle$', tip[0] + side * 38 * Math.sin(th), tip[1] + side * 38 * Math.cos(th), DK, { align: 'center' });
    const ax = O.x + R * Math.sqrt(s.p1), ay = O.y - R * Math.sqrt(s.p2);
    dot(ctx, ax, ay, PAL.ink, true, 11);
    hits.push({ x: tip[0], y: tip[1], r: 26, name: `the dark state |Φ₀⟩ = ${fmt(Math.cos(th), 2)}|1⟩ − ${fmt(Math.sin(th), 2)}|2⟩, at θ = ${fmt((th * 180) / Math.PI, 0)}°` },
      { x: ax, y: ay, r: 20, name: `the atom, at (√P₁, √P₂) = (${fmt(Math.sqrt(s.p1), 2)}, ${fmt(Math.sqrt(s.p2), 2)}); P₃ = ${fmt(s.p3, 3)}` },
      { x: O.x + R + 52, y: O.y, r: 24, name: 'the state |1⟩' }, { x: O.x, y: O.y - R - 64, r: 24, name: 'the state −|2⟩' });
    /* ---- the pulses ---- */
    const A1 = axes(ctx, box(S.om), [T0, T1], [0, 18], { nx: 0, ny: 3, xc: tm, yc: cpl });
    text(ctx, '$\\kOmegaone, \\kOmegatwo$ (1/τ)', BOX.l, S.om.t - 26, cpl, { size: 20, weight: 600, tex: true });
    const clip18 = (f) => (t) => Math.min(18, f(t));
    curve(ctx, clip18(run.o2), T0, T1, A1.X, A1.Y, FS, 4, 240);
    curve(ctx, clip18(run.o1), T0, T1, A1.X, A1.Y, FP, 4, 240);
    legend(ctx, S.om.t + 20, '$\\kOmegaone$', FP); legend(ctx, S.om.t + 54, '$\\kOmegatwo$', FS);
    hits.push({ x: A1.X(run.dd / 2), y: A1.Y(Math.min(18, run.O0)), r: 22, name: `the pump pulse Ω₁, peak ${fmt(run.O0, 1)}/τ` }, { x: A1.X(-run.dd / 2), y: A1.Y(Math.min(18, run.O0)), r: 22, name: `the Stokes pulse Ω₂, peak ${fmt(run.O0, 1)}/τ` });
    /* ---- the mixing angle ---- */
    const A2 = axes(ctx, box(S.th), [T0, T1], [0, Math.PI / 2], { nx: 0, ny: 2, xc: tm, yc: ph, fy: (v) => (v < 0.1 ? '0' : v < 1 ? 'π/4' : 'π/2') });
    text(ctx, '$\\ktheta$', BOX.l, S.th.t - 22, ph, { size: 20, weight: 600, tex: true });
    curve(ctx, (t) => thetaAt(run, t), T0, T1, A2.X, A2.Y, ph, 4, 240);
    dot(ctx, A2.X(now), A2.Y(th), ph, true, 8);
    /* ---- the dressed energies ---- */
    const A3 = axes(ctx, box(S.en), [T0, T1], [-20, 20], { nx: 0, ny: 4, xc: tm, yc: en });
    text(ctx, '$\\kepsp, \\kepszero, \\kepsm$ (1/τ)', BOX.l, S.en.t - 24, en, { size: 20, weight: 600, tex: true });
    const ei = (j) => (t) => at(run, t).e[j];
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, S.en.t, BOX.r - BOX.l, S.en.b - S.en.t); ctx.clip();
    curve(ctx, ei(0), T0, T1, A3.X, A3.Y, en, 4, 300);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, ei(2), T0, T1, A3.X, A3.Y, en, 4, 300); ctx.restore();
    curve(ctx, ei(1), T0, T1, A3.X, A3.Y, DK, 4, 300);
    ctx.restore();
    legend(ctx, S.en.t + 18, '$\\kepsp$', en); legend(ctx, S.en.t + 52, '$\\kepszero$', DK); legend(ctx, S.en.t + 86, '$\\kepsm$', en, [10, 10]);
    hits.push({ x: A3.X(now), y: A3.Y(Math.max(-20, Math.min(20, s.e[0]))), r: 16, name: `ε₊ = ${fmt(s.e[0], 2)}/τ` },
      { x: A3.X(now), y: A3.Y(Math.max(-20, Math.min(20, s.e[1]))), r: 16, name: `ε₀ = ${fmt(s.e[1], 2)}/τ, the energy of the state that is dark at δ = 0` },
      { x: A3.X(now), y: A3.Y(Math.max(-20, Math.min(20, s.e[2]))), r: 16, name: `ε₋ = ${fmt(s.e[2], 2)}/τ` });
    /* ---- the populations ---- */
    const A4 = axes(ctx, box(S.pp), [T0, T1], [0, 1], { nx: 10, ny: 2, xc: tm, yc: pp, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kt$ (τ)', BOX.r, S.pp.b + 58, tm, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, 'populations', BOX.l, S.pp.t - 24, pp, { size: 20, weight: 600 });
    [['p1', L1, 'P₁'], ['p2', L2, 'P₂'], ['p3', L3, 'P₃']].forEach(([key, col, nm], i) => {
      const f = (t) => at(run, t)[key];
      ctx.save(); ctx.globalAlpha *= 0.22; curve(ctx, f, T0, T1, A4.X, A4.Y, col, 3, 300); ctx.restore();
      curve(ctx, f, T0, now, A4.X, A4.Y, col, 4, 300);
      dot(ctx, A4.X(now), A4.Y(s[key]), col);
      legend(ctx, S.pp.t + 18 + 34 * i, nm, col);
      hits.push({ x: A4.X(now), y: A4.Y(s[key]), r: 14, name: `${nm}, the population of |${i + 1}⟩, ${fmt(s[key], 3)}` });
    });
    line(ctx, A1.X(now), S.om.t, A1.X(now), S.pp.b, guide, 2, [4, 8]);
    const deg = fmt((th * 180) / Math.PI, 0);
    topline(ctx, `At $\\kt = ${fmt(now, 1)}\\ktau$ the dark state has turned to $\\ktheta = ${deg}°$; ${fmt(100 * s.p2, 0)} % of the atom is in $|2\\rangle$ and ${fmt(100 * s.p3, 1)} % in $|3\\rangle$.`);
    const ov = (Math.cos(th) * s.c[1] - Math.sin(th) * s.c[3]) ** 2 + (Math.cos(th) * s.c[2] - Math.sin(th) * s.c[4]) ** 2;
    ro.set(`|\\Phi_0\\rangle = \\cos\\ktheta\\,|1\\rangle - \\sin\\ktheta\\,|2\\rangle = ${fmt(Math.cos(th), 2)}\\,|1\\rangle - ${fmt(Math.sin(th), 2)}\\,|2\\rangle`,
      `The atom's overlap with the dark state is $|\\langle\\Phi_0|\\kpsi\\rangle|^2 = ${fmt(ov, 2)}$.`, { form: 'D' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 2), draw });
})();

/* =====================================================================
   FIGURE 7.3 (recomputed) · sim-stirap-scans · still, 2D, two graphs
   The final P₂ of the model above (a) against the delay, −3τ…3τ, 121 points at
   Δ = δ = 0, and (b) over the pump and Stokes detunings Δ₁, Δ₂ ∈ [−20, 20]/τ at the
   live delay: Δ = Δ₁, δ = Δ₁ − Δ₂. The map is 33 × 33 when the thumb settles and
   17 × 17 while it moves. P₂ is drawn on one scale, panel → population hue, with its legend.
===================================================================== */
(function () {
  const d = sim('sim-stirap-scans', 640);
  let scan = null, map = null, fine = true, extras = null;
  const redo = () => { scan = null; map = null; extras = null; fine = false; };
  const A = ctl(d.controls, { label: '\\kAarea', cls: 'phase', key: 'A', min: 1, max: 20, step: 0.5, value: 10, unit: 'π', dec: 1, aria: 'the area of each pulse, in units of pi', onInput: redo });
  const del = ctl(d.controls, { label: '\\text{delay}', cls: 'time', key: 'delay', min: -3, max: 3, step: 0.05, value: 1.2, unit: 'τ', dec: 2, aria: 'how far the Stokes pulse leads the pump pulse, in units of tau',
    specials: [{ at: 0, label: 'coincident' }], onInput: () => { map = null; extras = null; fine = false; } });
  d.fig.addEventListener('change', () => { if (!fine) { fine = true; map = null; } });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const DS = [-3, 3], NS = 120, LIM = 20;
  const PA = { l: 190, r: 640, t: 170, b: 500 }, PB = { l: 820, r: 1150, t: 170, b: 500 };
  function draw() {
    const O0 = omega0(A.v), dd = del.v;
    if (!scan) scan = Array.from({ length: NS + 1 }, (_, i) => stirap(O0, DS[0] + ((DS[1] - DS[0]) * i) / NS, 0, 0, false));
    const N = fine ? 33 : 17;
    if (!map) map = Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => { const d1 = -LIM + (2 * LIM * i) / (N - 1), d2 = -LIM + (2 * LIM * j) / (N - 1); return stirap(O0, dd, d1, d1 - d2, false); }));
    const p0 = stirap(O0, dd, 0, 0, false);
    if (!extras) {
      const far = stirap(O0, dd, LIM, 0, false);
      let half = null;
      if (p0 > 0.05) { let lo = 0, hi = 40; if (stirap(O0, dd, 0, hi, false) < p0 / 2) { for (let k = 0; k < 18; k++) { const m = (lo + hi) / 2; if (stirap(O0, dd, 0, m, false) > p0 / 2) lo = m; else hi = m; } half = (lo + hi) / 2; } }
      extras = { far, half };
    }
    const { ctx } = begin(d.c); hits.length = 0;
    const pp = C('population'), fr = C('frequency'), tm = C('time'), FP = F.ref('pump'), FS = F.ref('stokes'), L2 = F.ref('lvl-2');
    /* (a) transfer against delay */
    const a = axes(ctx, PA, DS, [0, 1], { nx: 6, ny: 2, xc: tm, yc: pp, fy: (v) => fmt(v, 1) });
    text(ctx, 'delay (τ), Stokes first →', PA.r, PA.b + 58, tm, { size: 20, weight: 600, align: 'right' });
    ctx.save(); ctx.translate(PA.l - 64, (PA.t + PA.b) / 2); ctx.rotate(-Math.PI / 2);
    text(ctx, 'P₂ after the pulses', 0, 0, L2, { size: 20, weight: 600, align: 'center' }); ctx.restore();
    curve(ctx, (u) => scan[Math.round(u)], 0, NS, (u) => a.X(DS[0] + ((DS[1] - DS[0]) * u) / NS), a.Y, L2, 5, NS);
    dot(ctx, a.X(dd), a.Y(p0), L2, true, 10);
    line(ctx, a.X(dd), a.Y(p0) + 12, a.X(dd), PA.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    hits.push({ x: a.X(dd), y: a.Y(p0), r: 18, name: `P₂ = ${fmt(p0, 3)} at a delay of ${fmt(dd, 2)}τ` });
    /* the pulse orders above, as the book draws them: Stokes and pump against time */
    [-2, 0, 1.5, 3].forEach((g) => {
      const cx = a.X(g), w = 84, h = 44, y0 = PA.t - 74, bx = cx - w / 2;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.strokeRect(bx, y0, w, h); ctx.restore();
      const px = (t) => bx + ((t + 3.2) / 6.4) * w, py = (v) => y0 + h - 4 - v * (h - 10);
      curve(ctx, (t) => Math.exp(-((t + g / 2) ** 2)), -3.2, 3.2, px, py, FS, 2.5, 60);
      curve(ctx, (t) => Math.exp(-((t - g / 2) ** 2)), -3.2, 3.2, px, py, FP, 2.5, 60);
      arrow(ctx, cx, y0 + h + 4, cx, PA.t - 6, alpha(PAL.ink, 0.5), 2);
      hits.push({ x: cx, y: y0 + h / 2, r: 30, name: g > 0 ? `the Stokes pulse ${fmt(g, 1)}τ ahead of the pump: the counterintuitive order` : g < 0 ? `the pump pulse ${fmt(-g, 1)}τ ahead of the Stokes: the intuitive order` : 'the two pulses together' });
    });
    text(ctx, 'S', a.X(-2) - 58, PA.t - 52, FS, { size: 18, weight: 600, align: 'right' });
    text(ctx, 'P', a.X(-2) - 58, PA.t - 28, FP, { size: 18, weight: 600, align: 'right' });
    hits.push({ x: a.X(-2) - 64, y: PA.t - 52, r: 14, name: 'S, the Stokes pulse Ω₂' }, { x: a.X(-2) - 64, y: PA.t - 28, r: 14, name: 'P, the pump pulse Ω₁' });
    /* (b) the map over the two detunings */
    const b = axes(ctx, PB, [-LIM, LIM], [-LIM, LIM], { nx: 4, ny: 4, xc: fr, yc: fr });
    const cw = (PB.r - PB.l) / N, ch = (PB.b - PB.t) / N, base = PAL.panel;
    map.forEach((col, i) => col.forEach((v, j) => {
      ctx.fillStyle = mixColor(base, pp, Math.max(0, Math.min(1, v)));
      ctx.fillRect(PB.l + i * cw, PB.b - (j + 1) * ch, cw + 0.6, ch + 0.6);
      hits.push({ x: PB.l + (i + 0.5) * cw, y: PB.b - (j + 0.5) * ch, r: Math.max(cw, ch) / 2, name: `P₂ = ${fmt(v, 2)} at Δ₁ = ${fmt(-LIM + (2 * LIM * i) / (N - 1), 1)}/τ, Δ₂ = ${fmt(-LIM + (2 * LIM * j) / (N - 1), 1)}/τ` });
    }));
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.strokeRect(PB.l, PB.t, PB.r - PB.l, PB.b - PB.t); ctx.restore();
    line(ctx, b.X(-LIM), b.Y(-LIM), b.X(LIM), b.Y(LIM), alpha(PAL.ink, 0.55), 2, [10, 10]);
    text(ctx, '$\\kdelta = 0$', b.X(LIM * 0.55) - 10, b.Y(LIM * 0.55) - 22, fr, { size: 18, weight: 600, align: 'right', tex: true, bg: PAL.panel });
    text(ctx, '$\\kDeltaone$ (1/τ), pump', PB.r, PB.b + 58, fr, { size: 20, weight: 600, align: 'right', tex: true });
    ctx.save(); ctx.translate(PB.l - 72, (PB.t + PB.b) / 2); ctx.rotate(-Math.PI / 2);
    text(ctx, '$\\kDeltatwo$ (1/τ), Stokes', 0, 0, fr, { size: 20, weight: 600, align: 'center', tex: true }); ctx.restore();
    /* the scale */
    const lx = PB.r + 50, lw = 26, steps = 40;
    for (let k = 0; k < steps; k++) { ctx.fillStyle = mixColor(base, pp, (k + 0.5) / steps); ctx.fillRect(lx, PB.b - ((k + 1) * (PB.b - PB.t)) / steps, lw, (PB.b - PB.t) / steps + 0.6); }
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.strokeRect(lx, PB.t, lw, PB.b - PB.t); ctx.restore();
    [0, 0.5, 1].forEach((v) => text(ctx, fmt(v, 1), lx + lw + 10, PB.b - v * (PB.b - PB.t), PAL.muted, { size: 17 }));
    text(ctx, 'P₂', lx + lw / 2, PB.t - 24, L2, { size: 20, weight: 600, align: 'center' });
    text(ctx, '(a)', PA.l, PA.t - 112, PAL.ink, { size: 20, weight: 600 }); text(ctx, '(b)', PB.l, PA.t - 112, PAL.ink, { size: 20, weight: 600 });
    ro.set(`P_2(\\kDeltaone = \\kDeltatwo = 0) = ${fmt(p0, 2)}`,
      extras.half === null ? `Along $\\kdelta = 0$ it is ${fmt(extras.far, 2)} at $\\kDeltaone = \\kDeltatwo = 20/\\ktau$.`
        : `Along $\\kdelta = 0$ it is ${fmt(extras.far, 2)} at $\\kDeltaone = \\kDeltatwo = 20/\\ktau$; at $\\kDeltaone = 0$ half of it is gone by $|\\kdelta| = ${fmt(extras.half, 1)}/\\ktau$.`, { form: 'P' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.4 · sim-four-level · still, 2D, scheme beside bars
   The book's scheme with its excited level named |2⟩, as the text has it. The two
   dark states of Eqs. (7.35)–(7.36), tan θ = Ω₁/√(Ω₃² + Ω₄²) (7.37) and
   tan φ = Ω₄/Ω₃ (7.38 as corrected), for real fields in relative units; bars are
   their amplitudes on |1⟩ … |4⟩, −1…1, the |2⟩ bar always empty.
===================================================================== */
(function () {
  const d = sim('sim-four-level', 560);
  const o1 = ctl(d.controls, { label: '\\kOmegaone', cls: 'coupling', key: 'Omega1', min: 0, max: 3, step: 0.02, value: 1, unit: '', dec: 2, aria: 'the Rabi frequency of the field on |1⟩, relative units',
    specials: [{ at: 0, label: 'Ω₁ = 0' }] });
  const held = {};
  const o3 = ctl(d.controls, { label: '\\kOmegathree', cls: 'coupling', key: 'Omega3', min: 0, max: 3, step: 0.02, value: 1, unit: '', dec: 2, aria: 'the Rabi frequency of the field on |3⟩, relative units',
    specials: [{ at: () => (held.o4 ? held.o4.v : null), label: 'Ω₃ = Ω₄' }] });
  const o4 = ctl(d.controls, { label: '\\kOmegafour', cls: 'coupling', key: 'Omega4', min: 0, max: 3, step: 0.02, value: 1, unit: '', dec: 2, aria: 'the Rabi frequency of the field on |4⟩, relative units',
    specials: [{ at: () => o3.v, label: 'Ω₄ = Ω₃' }] });
  held.o4 = o4; o3.refresh();
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const LV = { 2: { x0: 250, x1: 410, y: 120 }, 1: { x0: 60, x1: 220, y: 330 }, 3: { x0: 250, x1: 410, y: 480 }, 4: { x0: 450, x1: 610, y: 400 } };
  const mid = (n) => (LV[n].x0 + LV[n].x1) / 2;
  const both = (ctx, x1, y1, x2, y2, col, w) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, w); arrow(ctx, mx, my, x2, y2, col, w); };
  const BARS = [{ t: 110, b: 270 }, { t: 350, b: 510 }], BL = 780, BR = 1300, KETS = [1, 2, 3, 4];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const W1 = o1.v, W3 = o3.v, W4 = o4.v, Rr = Math.hypot(W3, W4);
    const th = Math.atan2(W1, Rr), ph = Math.atan2(W4, W3);
    const st = C('state'), cpl = C('coupling'), am = C('amplitude');
    const RF = { 1: F.ref('four-1'), 2: F.ref('four-2'), 3: F.ref('four-3'), 4: F.ref('four-4') };
    /* the scheme: each field's arrow as strong as the field */
    const fields = [[1, W1, '$\\kOmegaone\\ \\nu_1$', -96, 0, 'Ω₁'], [3, W3, '$\\kOmegathree\\ \\nu_3$', 40, 70, 'Ω₃'], [4, W4, '$\\kOmegafour\\ \\nu_4$', 70, 0, 'Ω₄']];
    const ends = { 1: [mid(1) + 20, LV[1].y - 10, LV[2].x0 + 10, LV[2].y + 12], 3: [mid(3) + 10, LV[3].y - 10, mid(2) + 10, LV[2].y + 12], 4: [mid(4) - 20, LV[4].y - 10, LV[2].x1 - 10, LV[2].y + 12] };
    fields.forEach(([n, w, s, dx, dy, nm]) => {
      const [x1, y1, x2, y2] = ends[n], a = 0.18 + 0.82 * Math.min(1, w / 3);
      F.faded(ctx, a, [0, 0], () => both(ctx, x1, y1, x2, y2, cpl, 2.5 + 3 * Math.min(1, w / 3)));
      const mx = (x1 + x2) / 2 + dx, my = (y1 + y2) / 2 + dy;
      text(ctx, s, mx, my, cpl, { size: 24, weight: 600, tex: true, bg: PAL.panel, align: dx < 0 ? 'right' : 'left' });
      hits.push({ x: (x1 + x2) / 2, y: (y1 + y2) / 2, r: 26, name: `the field ${nm} on |${n}⟩ ↔ |2⟩, ${fmt(w, 2)}` });
    });
    KETS.forEach((n) => {
      const L = LV[n], col = RF[n];
      line(ctx, L.x0, L.y, L.x1, L.y, col, 5);
      ket(ctx, `$|${n}\\rangle$`, L.x1 + 12, L.y, col);
      hits.push({ x: mid(n), y: L.y, r: 30, name: n === 2 ? 'the excited state |2⟩' : `the metastable state |${n}⟩` });
    });
    /* the two dark states' amplitudes */
    const amps = [[Math.cos(th), 0, -Math.sin(th) * Math.cos(ph), -Math.sin(th) * Math.sin(ph)], [0, 0, Math.sin(ph), -Math.cos(ph)]];
    amps.forEach((v, k) => {
      const bx = { l: BL, r: BR, t: BARS[k].t, b: BARS[k].b };
      const Y = (u) => bx.b - ((u + 1) / 2) * (bx.b - bx.t), slot = (bx.r - bx.l) / 4;
      line(ctx, bx.l, Y(0), bx.r, Y(0), PAL.muted, 2);
      [-1, 1].forEach((u) => { line(ctx, bx.l, Y(u), bx.r, Y(u), PAL.rule, 1.5); text(ctx, fmt(u, 0), bx.l - 14, Y(u), PAL.muted, { size: 17, align: 'right' }); });
      text(ctx, '0', bx.l - 14, Y(0), PAL.muted, { size: 17, align: 'right' });
      ket(ctx, k ? '$|\\Phi_2\\rangle$' : '$|\\Phi_1\\rangle$', bx.l - 70, (bx.t + bx.b) / 2, st, { align: 'right', size: 24 });
      v.forEach((u, i) => {
        const cx = bx.l + slot * (i + 0.5), col = RF[i + 1], y0 = Y(0), y1 = Y(u);
        ctx.save(); ctx.fillStyle = alpha(col, 0.8); ctx.fillRect(cx - 32, Math.min(y0, y1), 64, Math.abs(y1 - y0)); ctx.restore();
        text(ctx, fmt(u, 2), cx, u >= 0 ? y1 - 16 : y1 + 16, col, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
        if (k) ket(ctx, `$|${i + 1}\\rangle$`, cx, bx.b + 26, col, { align: 'center', size: 20 });
        hits.push({ x: cx, y: (y0 + y1) / 2, r: 30, name: `the amplitude of |Φ${k ? '₂' : '₁'}⟩ on |${i + 1}⟩, ${fmt(u, 2)}` });
      });
    });
    text(ctx, 'amplitudes', BL, BARS[0].t - 28, am, { size: 20, weight: 600 });
    const tt = W1 === 0 ? '0' : Rr === 0 ? '\\infty' : fmt(W1 / Rr, 2), tp = W3 === 0 ? (W4 === 0 ? '0/0' : '\\infty') : fmt(W4 / W3, 2);
    ro.set(`|\\Phi_1\\rangle = \\cos\\ktheta|1\\rangle - \\sin\\ktheta\\cos\\kphi|3\\rangle - \\sin\\ktheta\\sin\\kphi|4\\rangle = ${fmt(amps[0][0], 2)}|1\\rangle - ${fmt(-amps[0][2], 2)}|3\\rangle - ${fmt(-amps[0][3], 2)}|4\\rangle`,
      `Here $\\tan\\ktheta = ${tt}$ and $\\tan\\kphi = \\kOmegafour/\\kOmegathree = ${tp}$; carried to $\\ktheta = \\pi/2$, $|\\Phi_1\\rangle$ ends as $c_3|3\\rangle + c_4|4\\rangle$ with $|c_3|^2 = ${fmt(Math.cos(ph) ** 2, 2)}$.`, { form: 'P1' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
