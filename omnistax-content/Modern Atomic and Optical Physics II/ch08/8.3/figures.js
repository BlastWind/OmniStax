/* Figures for section 8.3 Doppler Cooling.
   The book gives no numbers. Frequencies are in γ₁₂, velocities in γ₁₂/k (so kv is in γ₁₂), forces in
   ℏkR⁰_opt(δ = 0), one beam's push on resonance, and the trap's position in z₀, where the Zeeman shift
   of m = ±1 reaches γ₁₂. Each beam pushes with Eq. (8.23)'s weak-field force ℏkR_opt at its own
   Doppler- and Zeeman-shifted detuning x, which in these units is 1/(1 + x²); the two are summed as
   the text sums them. The beams (σ₊ and σ₋ in the trap) and the J = 0 → J = 1 levels are the
   section's referents, one group. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const tx = (x, d) => fmt(x, d).replace('−', '-');
const sum = (x, d) => (x < 0 ? '(' + tx(x, d) + ')' : tx(x, d));
const R = (x) => 1 / (1 + x * x);
const Fp = (de, u) => R(de - u), Fm = (de, u) => -R(de + u), Fs = (de, u) => Fp(de, u) + Fm(de, u);
/* ηm of Eq. (8.30) in ℏk²R⁰_opt(δ = 0)/γ₁₂ */
const etaM = (de) => (4 * de) / (1 + de * de) ** 2;
/* v_c: where |F| is largest for v > 0; none on resonance, where F vanishes */
const vcOf = (de) => {
  if (Math.abs(de) < 1e-6) return null;
  let best = 0, at = 0; for (let u = 0; u <= 12; u += 0.004) { const f = Math.abs(Fs(de, u)); if (f > best) { best = f; at = u; } }
  return at;
};
const FU = '\\ \\hbar\\kkmag\\kRoptzero(\\kdelta = 0)';
const mtex = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, ...o });
/* one entry of a legend: a short stroke and its name; returns where the next starts */
const key = (ctx, x, y, col, dash, s) => { line(ctx, x, y, x + 36, y, col, dash ? 3 : 5, dash ? [8, 6] : undefined); mtex(ctx, s, x + 46, y, PAL.ink, { size: 18, weight: 400 }); return x + 56 + F.measure(ctx, s, { size: 18, tex: true }) + 30; };
const dSlider = (d, extra = [], onInput) => ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -4, max: 2, step: 0.01, value: -1, unit: 'γ₁₂', dec: 2,
  aria: 'the detuning delta, in units of gamma 1 2', specials: [{ at: 0, label: 'resonance' }, ...extra], onInput });

/* =====================================================================
   FIGURE 8.1 + 8.2 · sim-doppler-force · still, 2D, scene above graph
   The atom between the two beams (Figure 8.1) with its velocity and the
   force of each beam; F₊, F₋ and F = F₊ + F₋ against v (Figure 8.2).
   Axes fixed: v −6…6 γ₁₂/k, F −1…1 (one beam on resonance gives 1).
===================================================================== */
(function () {
  const d = sim('sim-doppler-force', 700);
  const dl = dSlider(d, [{ at: -1, label: 'δ = −γ₁₂' }]);
  const vv = ctl(d.controls, { label: '\\kvmag', cls: 'velocity', key: 'v', min: -6, max: 6, step: 0.01, value: 1, unit: 'γ₁₂/k', dec: 2,
    aria: 'the velocity of the atom, in units of gamma 1 2 over k', specials: [{ at: () => vcOf(dl.v), label: 'v_c' }, { at: () => { const c = vcOf(dl.v); return c === null ? null : -c; }, label: '−v_c' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const AX = 700, AY = 150, KF = 250, KV = 34;
  const BOX = { l: 170, r: 1240, t: 360, b: 620 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const de = dl.v, u = vv.v, rp = F.ref('beam-plus'), rm = F.ref('beam-minus'), cF = C('force'), cV = C('velocity'), cE = C('friction');
    const fp = Fp(de, u), fm = Fm(de, u), f = fp + fm, vc = vcOf(de), em = etaM(de);
    /* the scene: Figure 8.1, the beams meeting at the atom */
    arrow(ctx, 110, AY, AX - 60, AY, rp, 9); arrow(ctx, 1290, AY, AX + 60, AY, rm, 9);
    hits.push({ x: 330, y: AY, r: 30, name: 'the beam travelling along +z, wavevector k' }, { x: 1070, y: AY, r: 30, name: 'the beam travelling along −z, wavevector −k' });
    arrow(ctx, 110, 236, 210, 236, PAL.muted, 3); text(ctx, 'z', 224, 236, PAL.muted, { size: 20, italic: true });
    if (Math.abs(u) > 0.02) { arrow(ctx, AX, AY - 46, AX + KV * u, AY - 46, cV, 4); mtex(ctx, '$\\kvmag$', AX + KV * u + (u > 0 ? 14 : -14), AY - 46, cV, { align: u > 0 ? 'left' : 'right' }); }
    dot(ctx, AX, AY, PAL.ink, true, 15);
    hits.push({ x: AX, y: AY, r: 18, name: 'the atom, moving at v = ' + fmt(u, 2) + ' γ₁₂/k' });
    const fa = (y, val, s, name) => {
      if (Math.abs(val) * KF < 14) return;
      arrow(ctx, AX, y, AX + KF * val, y, cF, 5); mtex(ctx, s, AX + KF * val + (val > 0 ? 14 : -14), y, cF, { align: val > 0 ? 'left' : 'right' });
      hits.push({ x: AX + (KF * val) / 2, y, r: 16, name: name + fmt(val, 2) });
    };
    fa(AY + 44, fp, '$\\kFp$', 'the force of the beam along +z, F₊ = '); fa(AY + 44, fm, '$\\kFm$', 'the force of the beam along −z, F₋ = ');
    fa(AY + 86, f, '$\\kFmag$', 'the total force, F = ');
    /* the graph: Figure 8.2 */
    let lx = BOX.l; const ly = BOX.t - 50;
    lx = key(ctx, lx, ly, rp, true, '$\\kFp$, beam along $+z$'); lx = key(ctx, lx, ly, rm, true, '$\\kFm$, beam along $-z$');
    lx = key(ctx, lx, ly, cF, false, '$\\kFmag = \\kFp + \\kFm$'); key(ctx, lx, ly, cE, true, '$\\keta\\km\\kvmag$');
    if (vc !== null) {
      const X0 = BOX.l + ((-vc + 6) / 12) * (BOX.r - BOX.l), X1 = BOX.l + ((vc + 6) / 12) * (BOX.r - BOX.l);
      ctx.save(); ctx.fillStyle = alpha(cV, 0.1); ctx.fillRect(X0, BOX.t, X1 - X0, BOX.b - BOX.t); ctx.restore();
      line(ctx, X0, BOX.t, X0, BOX.b, alpha(cV, 0.7), 2, [10, 10]); line(ctx, X1, BOX.t, X1, BOX.b, alpha(cV, 0.7), 2, [10, 10]);
      mtex(ctx, '$\\pm\\kvc$', X1, BOX.t - 16, cV, { size: 20, align: 'center' });
      hits.push({ x: X1, y: BOX.t + 60, r: 20, name: 'the critical velocity v_c = ' + fmt(vc, 2) + ' γ₁₂/k; between −v_c and v_c lies the capture range' });
    }
    const { X, Y } = axes(ctx, BOX, [-6, 6], [-1, 1], { nx: 6, ny: 4, fy: (y) => fmt(y, 1) });
    mtex(ctx, '$\\kvmag$ ($\\kgammaonetwo/\\kkmag$)', BOX.r, BOX.b + 58, cV, { size: 20, align: 'right' });
    mtex(ctx, '$\\kFmag$ ($\\hbar\\kkmag\\kRoptzero(\\kdelta = 0)$)', BOX.l - 150, BOX.t - 20, cF, { size: 20 });
    ctx.save(); ctx.setLineDash([8, 6]);
    curve(ctx, (x) => Fp(de, x), -6, 6, X, Y, rp, 3, 240); curve(ctx, (x) => Fm(de, x), -6, 6, X, Y, rm, 3, 240);
    if (Math.abs(em) > 1e-6) { const lim = Math.min(6, 1 / Math.abs(em)); curve(ctx, (x) => em * x, -lim, lim, X, Y, cE, 3, 2); }
    ctx.restore();
    curve(ctx, (x) => Fs(de, x), -6, 6, X, Y, cF, 5, 300);
    line(ctx, X(u), BOX.t, X(u), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, X(u), Y(fp), rp, true, 7); dot(ctx, X(u), Y(fm), rm, true, 7); dot(ctx, X(u), Y(f), cF);
    hits.push({ x: X(u), y: Y(fp), r: 14, name: 'F₊ at this velocity, ' + fmt(fp, 2) }, { x: X(u), y: Y(fm), r: 14, name: 'F₋ at this velocity, ' + fmt(fm, 2) }, { x: X(u), y: Y(f), r: 16, name: 'F = F₊ + F₋ at this velocity, ' + fmt(f, 2) });
    const nearPlus = Math.abs(de - u) < Math.abs(de + u), side = nearPlus ? '$+z$' : '$-z$';
    topline(ctx, Math.abs(de) < 1e-6 ? 'On resonance the two beams push equally at every velocity, and the atom feels no force.'
      : Math.abs(u) < 0.005 ? `At rest the atom sees both beams at the same detuning, and their pushes cancel.`
      : `At $\\kvmag$ = ${fmt(u, 2)} the beam along ${side} is Doppler shifted nearer resonance and pushes harder: $\\kFmag$ = ${fmt(f, 2)}, ${f * u < 0 ? 'against' : 'along'} the motion.`);
    ro.set(`\\kFmag = \\kFp + \\kFm = ${tx(fp, 2)} + ${sum(fm, 2)} = ${tx(f, 2)}${FU}`,
      vc === null ? 'On resonance $\\keta = 0$ and there is no capture range.'
        : `Near $\\kvmag = 0$ the sum is the viscous force $\\keta\\km\\kvmag$ of Eq. (8.30), with $\\keta\\km = ${tx(em, 2)}\\,\\hbar\\kkmag^2\\kRoptzero(\\kdelta = 0)/\\kgammaonetwo$; the force is largest at $\\kvc = ${tx(vc, 2)}\\,\\kgammaonetwo/\\kkmag$.`, { form: 'F' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-molasses · moving, 2D, graph alone
   2000 atoms (a Gaussian of rms 2.5 γ₁₂/k, sampled on an even grid with
   weights) obey m dv/dt = F(v): du/dτ = 4(|Ω|/γ₁₂)² F(u) with τ = ω_R t,
   |Ω| = 0.3 γ₁₂. Window 0–15/ω_R. Axes fixed: v −6…6, share per bin 0–8 %.
===================================================================== */
(function () {
  const d = sim('sim-molasses', 560);
  const T = 15, M = 300, N = 2000, A = 4 * 0.3 * 0.3, SIG = 2.5, BW = 0.25, NB = 48, YMAX = 0.08;
  const cy = cycle(() => T, 1.2);
  const dl = dSlider(d, [{ at: -1, label: 'δ = −γ₁₂' }], () => cy.reset());
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 170, r: 1240, t: 130, b: 470 };
  const u0 = new Float64Array(N), w = new Float64Array(N);
  let wt = 0; for (let i = 0; i < N; i++) { u0[i] = -8 + (16 * (i + 0.5)) / N; w[i] = Math.exp(-(u0[i] ** 2) / (2 * SIG * SIG)); wt += w[i]; }
  for (let i = 0; i < N; i++) w[i] /= wt;
  let path = null, pathDe = NaN;
  const solve = (de) => {
    const P = new Float32Array(N * (M + 1)), h = T / M, g = (u) => A * Fs(de, u);
    for (let i = 0; i < N; i++) {
      let u = u0[i]; P[i * (M + 1)] = u;
      for (let s = 1; s <= M; s++) { const k1 = g(u), k2 = g(u + (h * k1) / 2), k3 = g(u + (h * k2) / 2), k4 = g(u + h * k3); u += (h * (k1 + 2 * k2 + 2 * k3 + k4)) / 6; P[i * (M + 1) + s] = u; }
    }
    return P;
  };
  const at = (i, t) => { const x = (t / T) * M, s = Math.min(M - 1, Math.floor(x)), f = x - s, b = i * (M + 1) + s; return path[b] + (path[b + 1] - path[b]) * f; };
  const hist = (get) => { const h = new Float64Array(NB); for (let i = 0; i < N; i++) { const b = Math.floor((get(i) + 6) / BW); if (b >= 0 && b < NB) h[b] += w[i]; } return h; };
  const slow = (get) => { let s = 0; for (let i = 0; i < N; i++) if (Math.abs(get(i)) < 0.5) s += w[i]; return s; };
  const H0 = hist((i) => u0[i]), S0 = slow((i) => u0[i]);
  function draw() {
    const de = dl.v; if (de !== pathDe) { path = solve(de); pathDe = de; }
    const { ctx } = begin(d.c); hits.length = 0;
    const now = cy.now(), cV = C('velocity'), vc = vcOf(de), get = (i) => at(i, now);
    const { X, Y } = axes(ctx, BOX, [-6, 6], [0, YMAX], { nx: 6, ny: 4, fy: (y) => fmt(100 * y, 0) + ' %' });
    mtex(ctx, '$\\kvmag$ ($\\kgammaonetwo/\\kkmag$)', BOX.r, BOX.b + 58, cV, { size: 20, align: 'right' });
    text(ctx, 'share of the atoms in each 0.25-wide bin', BOX.l - 150, BOX.t - 24, PAL.ink, { size: 20, weight: 600 });
    const Hn = hist(get); let top = -1;
    for (let b = 0; b < NB; b++) {
      const x0 = X(-6 + b * BW) + 1, x1 = X(-6 + (b + 1) * BW) - 1, y = Y(Math.min(YMAX, Hn[b]));
      ctx.save(); ctx.fillStyle = alpha(cV, 0.55); ctx.fillRect(x0, y, x1 - x0, BOX.b - y); ctx.restore();
      if (Hn[b] > YMAX && (top < 0 || Hn[b] > Hn[top])) top = b;
      if (Hn[b] > 0.002) hits.push({ x: (x0 + x1) / 2, y: Math.max(y + 12, BOX.b - 20), r: 10, name: `${fmt(100 * Hn[b], 1)} % of the atoms between ${fmt(-6 + b * BW, 2)} and ${fmt(-6 + (b + 1) * BW, 2)} γ₁₂/k` });
    }
    ctx.save(); ctx.strokeStyle = cV; ctx.lineWidth = 2.5; ctx.setLineDash([8, 6]); ctx.beginPath();
    for (let b = 0; b < NB; b++) { const xa = X(-6 + b * BW), xb = X(-6 + (b + 1) * BW), y = Y(H0[b]); if (b) ctx.lineTo(xa, y); else ctx.moveTo(xa, y); ctx.lineTo(xb, y); }
    ctx.stroke(); ctx.restore();
    if (vc !== null) [-vc, vc].forEach((c) => { if (Math.abs(c) < 6) line(ctx, X(c), BOX.t, X(c), BOX.b, alpha(cV, 0.8), 2, [10, 10]); });
    if (top >= 0) {
      const xm = X(-6 + (top + 0.5) * BW), past = Hn.filter((h) => h > YMAX).length;
      arrow(ctx, xm, BOX.t + 34, xm, BOX.t + 4, PAL.ink, 3);
      text(ctx, fmt(100 * Hn[top], 0) + ' %' + (past > 1 ? ' at most' : ''), xm + 14, BOX.t + 22, PAL.ink, { size: 17, weight: 600, bg: PAL.panel });
    }
    if (vc !== null && vc < 5.4) mtex(ctx, '$\\pm\\kvc$', X(vc) + 10, BOX.b - 24, cV, { size: 20, bg: PAL.panel });
    const S = slow(get);
    topline(ctx, `After ${fmt(now, 1)}/$\\komegaR$, ${fmt(100 * S, 0)} % of the atoms move slower than 0.5 $\\kgammaonetwo/\\kkmag$; at the start ${fmt(100 * S0, 0)} % did.`);
    const eta = (16 * de * 0.09) / (1 + de * de) ** 2;
    ro.set(`\\keta = \\frac{8\\hbar\\kkmag^2}{\\km}\\frac{\\kdelta\\kgammaonetwo|\\kOmega|^2}{(\\kgammaonetwo^2 + \\kdelta^2)^2} = ${tx(eta, 2)}\\,\\komegaR`, '', { form: 'eta' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 8.3 · sim-mot · still; physical 3D above, 2D below
   Above: the six beams, the anti-Helmholtz coils and the field B = B₀z ẑ
   on the axis, −B₀r/2 inward in the midplane; the trap's z runs along the
   scene's x, so it reads left to right as the canvas below. No ground (the
   trap stands in vacuum), yaw free, pitch within ±75°, no buttons.
   Below: the J = 1 sublevels at ω + mζ against z (ζ = z/z₀ in γ₁₂), the laser
   at δ, the σ± transitions from J = 0 at the atom; F₊ = 1/(1 + (δ − ζ)²),
   F₋ = −1/(1 + (δ + ζ)²) and F against z. Axes fixed: z −4…4 z₀,
   frequency −4…4 γ₁₂, F −1…1. Without WebGL a flat strip copies the
   book's top panel.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const d = sim('sim-mot', 0);
  const zs = ctl(d.controls, { label: 'z', cls: 'length', key: 'z', min: -4, max: 4, step: 0.01, value: -1, unit: 'z₀', dec: 2,
    aria: 'the position of the atom along z, in units of z0', specials: [{ at: 0, label: 'center' }] });
  const dl = dSlider(d, [{ at: -1, label: 'δ = −γ₁₂' }]);
  const ro = readout(d);
  const SZ = 0.28, CX = 1.25;
  let V = null, g3 = null, sig = '', atom = null, flat = null;
  if (THREE && glOk()) {
    V = F.view3d(d.stage, { h: 440, dist: 9, tilt: 0.35, spin: 'off', yaw: 'free', pitch: [-1.3, 1.3] });
    if (!V.scene) V = null; else { g3 = V.part(0); V.look({ yaw: -0.55, pitch: 0.38, zoom: 0.9, target: [0, -0.1, 0] }); }
  }
  if (!V) flat = F.makeCanvas(d.stage, 250);
  function build() {
    V.clear(); const g = g3, ink = PAL.muted, cB = C('magnetic-field'), rp = F.ref('beam-plus'), rm = F.ref('beam-minus');
    [-1, 1].forEach((s) => {
      const coil = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.09, 12, 80), F.mesh.mat(ink));
      coil.rotation.y = Math.PI / 2; coil.position.x = s * CX; g.add(coil);
      V.pickable(coil, `the coil on the ${s < 0 ? '−z' : '+z'} side, its current circulating opposite to the other coil’s`);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.36, 18), F.mesh.mat(ink));
      cone.position.set(s * CX, 1.5, 0); cone.rotation.x = s < 0 ? Math.PI / 2 : -Math.PI / 2; g.add(cone);
      V.pickable(cone, `the sense of the current in the coil on the ${s < 0 ? '−z' : '+z'} side`);
    });
    const beam = (from, to, col, name) => { F.mesh.arrow(g, from, to, 0.055, col); const m = F.mesh.stick(g, from, to, 0.16, col, { transparent: true, opacity: 0.0, depthWrite: false }); V.pickable(m, name); };
    beam([-3.4, 0, 0], [-0.3, 0, 0], rp, 'the σ₊ beam, travelling along +z');
    beam([3.4, 0, 0], [0.3, 0, 0], rm, 'the σ₋ beam, travelling along −z');
    [[0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].forEach((u) => beam(u.map((x) => 2.7 * x), u.map((x) => 0.3 * x), ink, 'one of the four molasses beams across the axis'));
    const lp = V.label('σ<sub>+</sub>', [-3.4, 0.32, 0], g, 0); lp.style.color = rp;
    const lm = V.label('σ<sub>−</sub>', [3.4, 0.32, 0], g, 0); lm.style.color = rm;
    F.mesh.arrow(g, [2.0, 2.0, 0], [2.9, 2.0, 0], 0.02, ink); const lz = V.label('<i>z</i>', [3.1, 2.0, 0], g, 0); lz.style.color = PAL.muted;
    [0.5, 1.0].forEach((x) => [-1, 1].forEach((s) => {
      const a = [s * x, 0.62, 0], b = [s * (x + 0.32 * x), 0.62, 0]; F.mesh.arrow(g, a, b, 0.022, cB);
    }));
    const lb = V.label('<b>B</b>', [1.42, 0.86, 0], g, 0); lb.style.color = cB;
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([p, q]) => { const r = 1.05 / Math.SQRT2; F.mesh.arrow(g, [0, p * r, q * r], [0, p * r * 0.78, q * r * 0.78], 0.022, cB); });
    const fieldPick = F.mesh.sphere(g, [0.75, 0.62, 0], 0.12, cB, { transparent: true, opacity: 0, depthWrite: false });
    V.pickable(fieldPick, 'the magnetic field: zero at the center, B₀z along the axis and −B₀r/2 inward across it');
    atom = F.mesh.sphere(g, [zs.v * SZ, 0, 0], 0.11, PAL.ink); V.pickable(atom, 'the atom');
  }
  const cv = F.makeCanvas(d.stage, 740);
  const hits = []; hover(d.stage, () => hits, cv);
  const LV = { l: 170, r: 1240, t: 175, b: 365 }, GY = 425, FB = { l: 170, r: 1240, t: 525, b: 650 };
  const X = (z) => LV.l + ((z + 4) / 8) * (LV.r - LV.l);
  function drawFlat(z) {
    const { ctx } = begin(flat), rp = F.ref('beam-plus'), rm = F.ref('beam-minus'), cB = C('magnetic-field'), y = 80;
    arrow(ctx, 260, y, 640, y, rp, 8); arrow(ctx, 1140, y, 760, y, rm, 8);
    text(ctx, 'σ₊', 400, y + 34, rp, { size: 24, weight: 600 }); text(ctx, 'σ₋', 1000, y + 34, rm, { size: 24, weight: 600 });
    dot(ctx, 700 + 60 * z, y, PAL.ink, true, 13);
    line(ctx, 260, 190, 1140, 190, PAL.muted, 2); line(ctx, 700, 150, 700, 235, PAL.muted, 2);
    line(ctx, 260, 225, 1140, 155, cB, 5); text(ctx, 'B = B₀z ẑ', 270, 160, cB, { size: 22, weight: 600 });
  }
  function draw() {
    const z = zs.v, de = dl.v;
    if (V) {
      const s = [C('magnetic-field'), F.ref('beam-plus'), F.ref('beam-minus'), PAL.muted, PAL.ink].join('|');
      if (s !== sig) { sig = s; build(); }
      atom.position.set(z * SZ, 0, 0); V.invalidate();
    } else drawFlat(z);
    const { ctx } = begin(cv); hits.length = 0;
    const rp = F.ref('beam-plus'), rm = F.ref('beam-minus'), r0 = F.ref('lvl-ground'), rl = { 1: F.ref('lvl-m-plus'), 0: F.ref('lvl-m-zero'), '-1': F.ref('lvl-m-minus') };
    const cF = C('force'), cW = C('frequency'), cL = C('length');
    const Yf = (w) => LV.b - ((w + 4) / 8) * (LV.b - LV.t);
    /* legend */
    let lx = LV.l; lx = key(ctx, lx, 122, cW, true, 'laser frequency'); lx = key(ctx, lx, 122, rp, false, 'σ₊ beam, $\\kFp$'); lx = key(ctx, lx, 122, rm, false, 'σ₋ beam, $\\kFm$'); key(ctx, lx, 122, cF, false, '$\\kFmag = \\kFp + \\kFm$');
    /* the J = 1 levels against z, and the laser */
    line(ctx, LV.l, LV.t, LV.l, LV.b, PAL.muted, 2);
    [-4, -2, 0, 2, 4].forEach((w) => { if (w) line(ctx, LV.l, Yf(w), LV.r, Yf(w), PAL.rule, 1.5); text(ctx, fmt(w, 0), LV.l - 14, Yf(w), PAL.muted, { size: 17, align: 'right' }); });
    text(ctx, 'transition frequency − ω (γ₁₂)', LV.l - 150, LV.t - 22, cW, { size: 20, weight: 600 });
    [1, 0, -1].forEach((m) => {
      line(ctx, X(-4), Yf(-4 * m), X(4), Yf(4 * m), rl[m], 5);
      text(ctx, m > 0 ? 'm = +1' : m < 0 ? 'm = −1' : 'm = 0', LV.r + 12, Yf(4 * m), rl[m], { size: 20, weight: 600 });
      hits.push({ x: X(z), y: Yf(m * z), r: 14, name: `the m = ${m > 0 ? '+1' : m < 0 ? '−1' : '0'} sublevel of J = 1, at ω ${m * z < 0 ? '−' : '+'} ${fmt(Math.abs(m * z), 2)} γ₁₂ here` });
    });
    line(ctx, LV.l, Yf(de), LV.r, Yf(de), cW, 3, [10, 10]);
    hits.push({ x: (LV.l + LV.r) / 2, y: Yf(de), r: 12, name: 'the laser frequency, δ = ' + fmt(de, 2) + ' γ₁₂ from ω' });
    /* the gap to the ground state, and J = 0 */
    line(ctx, LV.l, LV.b, LV.l, LV.b + 16, PAL.muted, 2); line(ctx, LV.l - 10, LV.b + 22, LV.l + 10, LV.b + 14, PAL.muted, 2); line(ctx, LV.l - 10, LV.b + 32, LV.l + 10, LV.b + 24, PAL.muted, 2);
    line(ctx, LV.l, GY, LV.r, GY, r0, 5); text(ctx, 'J = 0', LV.r + 12, GY, r0, { size: 20, weight: 600 });
    line(ctx, X(z), LV.t, X(z), FB.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    /* the two transitions from the atom's ground state to the laser line */
    const xp = X(z) + 34, xm = X(z) - 34;
    arrow(ctx, X(z) + 6, GY - 4, xp, Yf(de) + 2, rp, 4); arrow(ctx, X(z) - 6, GY - 4, xm, Yf(de) + 2, rm, 4);
    text(ctx, 'σ₊', xp + 12, (GY + Yf(de)) / 2 + 30, rp, { size: 22, weight: 600 }); text(ctx, 'σ₋', xm - 12, (GY + Yf(de)) / 2 + 30, rm, { size: 22, weight: 600, align: 'right' });
    line(ctx, xp, Yf(de), xp, Yf(z), alpha(cW, 0.8), 2, [4, 6]); line(ctx, xm, Yf(de), xm, Yf(-z), alpha(cW, 0.8), 2, [4, 6]);
    dot(ctx, X(z), GY, PAL.ink, true, 11);
    hits.push({ x: X(z), y: GY, r: 16, name: 'the atom in J = 0, at z = ' + fmt(z, 2) + ' z₀' },
      { x: xp, y: (GY + Yf(de)) / 2, r: 18, name: 'σ₊ light, driving J = 0 to m = +1, detuned by ' + fmt(de - z, 2) + ' γ₁₂ here' },
      { x: xm, y: (GY + Yf(de)) / 2, r: 18, name: 'σ₋ light, driving J = 0 to m = −1, detuned by ' + fmt(de + z, 2) + ' γ₁₂ here' });
    /* the force against z */
    const fp = Fp(de, z), fm = Fm(de, z), f = fp + fm;
    const { Y } = axes(ctx, FB, [-4, 4], [-1, 1], { nx: 8, ny: 2, fy: (y) => fmt(y, 0) });
    mtex(ctx, '$z$ ($z_0$)', FB.r, FB.b + 58, cL, { size: 20, align: 'right' });
    mtex(ctx, '$\\kFmag$ ($\\hbar\\kkmag\\kRoptzero(\\kdelta = 0)$)', FB.l - 150, FB.t - 22, cF, { size: 20 });
    const Xs = (x) => X(x);
    ctx.save(); ctx.setLineDash([8, 6]); curve(ctx, (x) => Fp(de, x), -4, 4, Xs, Y, rp, 3, 200); curve(ctx, (x) => Fm(de, x), -4, 4, Xs, Y, rm, 3, 200); ctx.restore();
    curve(ctx, (x) => Fs(de, x), -4, 4, Xs, Y, cF, 5, 240);
    dot(ctx, X(z), Y(fp), rp, true, 7); dot(ctx, X(z), Y(fm), rm, true, 7); dot(ctx, X(z), Y(f), cF);
    if (Math.abs(f) > 0.01) arrow(ctx, X(z), GY + 30, X(z) + 160 * f, GY + 30, cF, 5);
    hits.push({ x: X(z), y: Y(f), r: 16, name: 'F = F₊ + F₋ here, ' + fmt(f, 2) }, { x: X(z) + 80 * f, y: GY + 30, r: 16, name: 'the total force on the atom, ' + fmt(f, 2) },
      { x: X(z), y: Y(fp), r: 12, name: 'F₊ here, ' + fmt(fp, 2) }, { x: X(z), y: Y(fm), r: 12, name: 'F₋ here, ' + fmt(fm, 2) });
    const plusNear = Math.abs(de - z) < Math.abs(de + z);
    topline(ctx, Math.abs(de) < 1e-6 ? 'On resonance the Zeeman shift detunes σ₊ and σ₋ equally, and the two beams cancel at every z.'
      : Math.abs(z) < 0.005 ? 'At the center the levels are unshifted, and the two beams cancel.'
      : `At z = ${fmt(z, 2)} z₀ the Zeeman shift brings ${plusNear ? 'σ₊' : 'σ₋'} nearer the laser: $\\kFmag$ = ${fmt(f, 2)} pushes the atom ${f * z < 0 ? 'toward' : 'away from'} the center.`);
    ro.set(`\\kFmag = \\kFp + \\kFm = ${tx(fp, 2)} + ${sum(fm, 2)} = ${tx(f, 2)}${FU}`,
      `Here σ₊ is detuned by ${fmt(de - z, 2)} $\\kgammaonetwo$ from its transition and σ₋ by ${fmt(de + z, 2)} $\\kgammaonetwo$.`, { form: 'F' });
  }
  register(d.fig, { update: () => {}, draw });
})();

};
