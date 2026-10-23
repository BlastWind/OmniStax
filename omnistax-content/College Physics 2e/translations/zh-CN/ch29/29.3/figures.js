/* Figures for section 29.3 Photon Energies and the Electromagnetic Spectrum.
   The page binds energy, frequency, position (the wavelength), voltage and
   charge. Planck's constant, counts of photons, the relative x-ray intensity
   and the anode's element are ink. The visible band is drawn in its true
   colours through `wavelengthColor` and F.fact, the physical fact; every photon
   outside it, x rays included, is ink with its band's name. An electron is
   F.el('e-'). The tube, its filament and its anode are the section's
   referents, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, hbracket, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constants: h = 4.14 × 10⁻¹⁵ eV·s, c = 3.00 × 10⁸ m/s, q = 1.60 × 10⁻¹⁹ C */
const H_EV = 4.14e-15, C_LIGHT = 3.00e8;

const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
/* x as "m × 10ⁿ" in figure text, and as "m\times10^{n}" in a formula, to three figures */
function split(x) { let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e); if (+m.toFixed(2) >= 10) { m /= 10; e++; } return { m, e }; }
const sciText = (x) => { const { m, e } = split(x); return e === 0 ? fmt(m, 2) : fmt(m, 2) + ' × 10' + sup(e); };
const sciTex = (x) => { const { m, e } = split(x); return e === 0 ? fmt(m, 2) : fmt(m, 2) + '\\times 10^{' + e + '}'; };
/* an energy in eV with the prefix the book would use */
function energyText(eV) {
  const sig = (v) => fmt(v, Math.max(0, 2 - Math.floor(Math.log10(v) + 1e-9)));
  if (eV >= 1e9) return sig(eV / 1e9) + ' GeV';
  if (eV >= 1e6) return sig(eV / 1e6) + ' MeV';
  if (eV >= 1e3) return sig(eV / 1e3) + ' keV';
  if (eV >= 1) return sig(eV) + ' eV';
  return sciText(eV) + ' eV';
}
/* a wavelength with a sensible unit */
function lengthText(m) {
  if (m >= 1) return sciText(m) + ' m';
  if (m >= 1e-3) return fmt(m * 1e3, 1) + ' mm';
  if (m >= 1e-6) return fmt(m * 1e6, 2) + ' μm';
  if (m >= 1e-9) return fmt(m * 1e9, 0) + ' nm';
  return sciText(m) + ' m';
}

/* the color of visible light of wavelength nm, the piecewise fit 29.2 uses */
function wavelengthColor(nm) {
  if (nm < 380 || nm > 700) return PAL.ink;
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
  else r = 1;
  const k = nm < 420 ? 0.4 + 0.6 * (nm - 380) / 40 : nm > 680 ? 0.4 + 0.6 * (700 - nm) / 20 : 1;
  const c = (x) => Math.round(255 * Math.pow(x * Math.max(k, 0.55), 0.8));
  return F.fact('rgb(' + c(r) + ',' + c(g) + ',' + c(b) + ')');
}

/* =====================================================================
   FIGURE 29.9 · sim-em-spectrum · still · flat (rule 28.1)
   Three matching log scales, frequency, wavelength and photon energy, under
   the bands of the spectrum; one photon placed by its frequency. Table 29.1's
   energies sit under the energy scale. Scale: log₁₀ f from 0 to 24, fixed.
===================================================================== */
(function () {
  const d = sim('sim-em-spectrum', 580);
  const IONIZE = Math.log10(10 / H_EV);                    /* 15.38, a 10-eV photon */
  const lf = ctl(d.controls, { label: '\\log_{10}(\\kf/\\text{Hz})', cls: 'frequency', min: 0, max: 24, step: 0.01, value: 21, unit: '', dec: 2, aria: '光子的频率，表示为 10 的幂',
    detents: [{ v: 14.71 }, { v: 15.48 }, { v: 21 }],
    specials: [{ at: IONIZE, label: '10 eV' }] });
  const X0 = 110, X1 = 1290, X = (s) => X0 + (X1 - X0) * s / 24;
  const BANDS = [
    { name: '无线电波', a: 0, b: 12, row: 0 }, { name: '紫外线', a: 14.9, b: 16.9, row: 0 }, { name: 'γ 射线', a: 18.5, b: 24, row: 0 },
    { name: '微波', a: 8.5, b: 11.5, row: 1 }, { name: '红外线', a: 11.5, b: 14.58, row: 1 }, { name: 'X 射线', a: 16.5, b: 20, row: 1 },
  ];
  const ROWY = [120, 176], VIS = [Math.log10(C_LIGHT / 700e-9), Math.log10(C_LIGHT / 380e-9)];
  const YF = 262, YL = 342, YE = 422;
  const TABLE = [
    { eV: 1e-5, name: '分子的转动能，10⁻⁵ eV', tag: '转动', row: 0 },
    { eV: 0.1, name: '分子的振动能，0.1 eV', tag: '振动', row: 0, align: 'right' },
    { eV: 1, name: '外层电子壳层之间的能量以及束缚较弱的分子的结合能，1 eV' },
    { eV: 2, name: '红光的能量，2 eV', tag: '红光', row: 1, align: 'right' },
    { eV: 10, name: '束缚较紧的分子的结合能，10 eV' },
  ];
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);
  const bandOf = (s) => s < 8.5 ? '无线电波' : s < 11.5 ? '微波' : s < VIS[0] ? '红外线' : s < VIS[1] ? '可见光' : s < 16.9 ? '紫外线' : s < 19.5 ? 'X 射线' : 'γ 射线';

  function scaleRow(ctx, y, color, name, lab) {
    line(ctx, X0, y, X1, y, PAL.muted, 2);
    for (let s = 0; s <= 24; s += 4) { line(ctx, X(s), y - 7, X(s), y + 7, PAL.muted, 2); text(ctx, lab(s), X(s), y + 26, PAL.muted, { size: 16, align: 'center', bg: PAL.panel }); }
    text(ctx, name, X0 - 24, y, color, { size: 18, weight: 600, align: 'right' });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = lf.v, f = Math.pow(10, s), E = H_EV * f, lam = C_LIGHT / f, nm = lam * 1e9;
    const FC = C('frequency'), XC = C('position'), EC = C('energy');
    hits = [];
    const x = X(s), pc = wavelengthColor(nm);
    line(ctx, x, 90, x, YE, alpha(pc, 0.7), 3, [10, 10]);

    /* the bands, and the visible strip in its own colours */
    for (const B of BANDS) {
      const y = ROWY[B.row], a = X(B.a), b = X(B.b);
      arrow(ctx, (a + b) / 2, y, a + 2, y, PAL.muted, 3); arrow(ctx, (a + b) / 2, y, b - 2, y, PAL.muted, 3);
      text(ctx, B.name, (a + b) / 2, y - 18, PAL.ink, { size: 18, align: 'center', bg: PAL.panel });
    }
    for (let k = 0; k < 24; k++) {
      const s0 = VIS[0] + (VIS[1] - VIS[0]) * k / 24, s1 = VIS[0] + (VIS[1] - VIS[0]) * (k + 1) / 24;
      ctx.save(); ctx.fillStyle = wavelengthColor(C_LIGHT / Math.pow(10, (s0 + s1) / 2) * 1e9); ctx.fillRect(X(s0), 114, X(s1) - X(s0) + 0.6, 84); ctx.restore();
    }
    text(ctx, '可见光', X(VIS[1]) + 8, 212, PAL.muted, { size: 16, align: 'left' });
    hits.push({ x: X((VIS[0] + VIS[1]) / 2), y: 150, r: 20, name: '可见光，380 至 700 nm，1.77 至 3.26 eV' });

    /* the three scales */
    scaleRow(ctx, YF, FC, 'f', (k) => '10' + sup(k) + ' Hz');
    scaleRow(ctx, YL, XC, 'λ', (k) => lengthText(C_LIGHT / Math.pow(10, k)));
    scaleRow(ctx, YE, EC, 'E', (k) => energyText(H_EV * Math.pow(10, k)));

    /* Table 29.1 under the energy scale */
    const ty = [486, 516];
    for (const T of TABLE) {
      const x = X(Math.log10(T.eV / H_EV));
      line(ctx, x, YE + 44, x, YE + 54, PAL.muted, 2);
      hits.push({ x, y: YE + 44, r: 12, name: T.name });
      if (T.tag) { line(ctx, x, YE + 54, x, ty[T.row] - 10, alpha(PAL.ink, 0.3), 2); text(ctx, T.tag, x + (T.align === 'right' ? -6 : 6), ty[T.row], PAL.muted, { size: 16, align: T.align || 'left' }); }
    }
    const i0 = X(IONIZE), i1 = X(Math.log10(1000 / H_EV));
    hbracket(ctx, i0, i1, YE + 56, PAL.muted);
    text(ctx, '电离，10 至 1000 eV', i0, ty[1] + 2, PAL.ink, { size: 16, align: 'left' });
    hits.push({ x: (i0 + i1) / 2, y: YE + 56, r: 26, name: '使原子或分子电离所需的能量，10 至 1000 eV' });

    /* the photon: one mark through every scale, in its own colour where it is visible */
    dot(ctx, x, YF, FC, true, 9); dot(ctx, x, YL, XC, true, 9); dot(ctx, x, YE, EC, true, 9);
    const side = x > 900 ? 'left' : 'right';
    label(ctx, 'f = ' + sciText(f) + ' Hz', x, YF - 22, { side, color: FC, size: 20, gap: 14 });
    label(ctx, 'λ = ' + lengthText(lam), x, YL - 22, { side, color: XC, size: 20, gap: 14 });
    label(ctx, 'E = ' + energyText(E), x, YE - 22, { side, color: EC, size: 20, gap: 14 });

    const ionizes = E >= 10 - 1e-9;
    topline(ctx, '一个 ' + energyText(E) + ' 的' + bandOf(s) + (ionizes ? '光子带有足以使原子或分子电离的能量。' : '光子带有的能量太少，不足以使原子或分子电离。'));
    ro.set('\\kE = h\\kf = (4.14\\times 10^{-15}\\ \\text{eV}\\cdot\\text{s})(' + sciTex(f) + '\\ \\text{Hz}) = ' + sciTex(E) + '\\ \\text{eV}', '', { form: 'e' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 29.11 + 29.12 · sim-x-ray-tube · moving · flat (rule 28.1)
   Electrons leave the filament at a steady rate, cross the tube with uniform
   acceleration and each makes one x-ray photon at the anode, whose frequency
   is counted into the spectrum beneath. Everything at time t follows from t
   alone. Graph: f from 0 to 25 × 10¹⁸ Hz (100 kV gives 24.2), intensity
   relative, fixed so the expected spectrum's tallest bin sits at 0.9.
===================================================================== */
(function () {
  const ANODES = {
    Cu: { name: '铜', ka: 8.05, kb: 8.90, edge: 8.98 },
    Mo: { name: '钼', ka: 17.5, kb: 19.6, edge: 20.0 },
    W: { name: '钨', ka: 59.3, kb: 67.2, edge: 69.5 },
  };
  const d = sim('sim-x-ray-tube', 820);
  const an = choice(d.controls, { label: '\\text{阳极}', options: Object.keys(ANODES).map((k) => ({ value: k, label: ANODES[k].name })), value: 'Cu', aria: '阳极的材料', onInput: reset });
  const V = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 20, max: 100, step: 0.5, value: 50, unit: 'kV', dec: 1, onInput: reset, aria: '加速电压',
    detents: [{ v: 25 }, { v: 50 }, { v: 100 }],
    specials: [{ at: () => { const e = ANODES[an.value].edge; return e >= 20 && e <= 100 ? e : null; }, label: 'K 吸收边' }] });

  const T = 6, RATE = 40, FLY = 0.8, OUT = 0.5;              /* loop, electrons per second, flight across the tube and of a photon to the detector, s */
  const CAT = { x: 300, y: 250 }, AN = { x: 1060, y: 250 }, DET = { x: 860, y: 440 };
  const GB = { l: 200, r: 1250, t: 540, b: 750 };
  const FPK = 1e3 / H_EV / 1e18;                             /* 10¹⁸ Hz per keV, 0.2415 */
  const BIN = 0.5, NB = 50, NMAX = Math.floor((T - FLY - OUT) * RATE);
  const PC = 0.1;                                            /* the share of photons in the characteristic lines, once qV passes the K edge */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  /* bremsstrahlung per unit energy for a tube at Emax keV, softened at low energy as the tube's window absorbs */
  const brems = (E, Em) => (E <= 0 || E >= Em) ? 0 : (Em - E) * (1 - Math.exp(-Math.pow(E / (0.3 * Em), 2.5)));
  let model = null;
  function modelFor(Em, A) {
    const key = Em + A.name;
    if (model && model.key === key) return model;
    const N = 400, cdf = [0];
    for (let k = 1; k <= N; k++) cdf.push(cdf[k - 1] + brems(Em * (k - 0.5) / N, Em));
    const tot = cdf[N], lines = Em > A.edge;
    const inv = (u) => { let lo = 0, hi = N; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cdf[m] / tot < u) lo = m; else hi = m; } return Em * hi / N; };
    const pb = lines ? 1 - PC : 1;
    const dens = (E) => pb * brems(E, Em) / (tot * Em / N);            /* probability per keV */
    const exp = [];
    for (let b = 0; b < NB; b++) { let p = 0; for (let j = 0; j < 10; j++) p += dens((b + (j + 0.5) / 10) * BIN / FPK) * BIN / FPK / 10; exp.push(p); }
    if (lines) { exp[Math.floor(A.ka * FPK / BIN)] += PC * 0.8; exp[Math.floor(A.kb * FPK / BIN)] += PC * 0.2; }
    const top = Math.max(...exp) * NMAX;
    model = { key, inv, lines, dens, exp, top };
    return model;
  }
  function photonE(i, Em, A, M) {
    if (M.lines && hash(i, 7) < PC) return hash(i, 8) < 0.8 ? A.ka : A.kb;
    return M.inv(Math.max(1e-4, hash(i, 5)));
  }

  function packet(ctx, x, y, ux, uy, k) {
    const px = -uy, py = ux, L = 44, N = 36, turns = 3 + 5 * k;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath();
    for (let j = 0; j <= N; j++) {
      const s = j / N - 0.5, a = 7 * Math.cos(Math.PI * s) * Math.sin(s * turns * 2 * Math.PI);
      const qx = x + ux * s * L + px * a, qy = y + uy * s * L + py * a;
      if (j) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
    }
    ctx.stroke(); ctx.restore();
  }
  function tube(ctx, A) {
    ctx.save();
    ctx.strokeStyle = F.ref('tube'); ctx.lineWidth = 3; ctx.fillStyle = alpha(PAL.soft, 0.5);
    ctx.beginPath(); ctx.roundRect(200, 160, 1000, 180, 90); ctx.fill(); ctx.stroke();
    /* the filament as a coil */
    ctx.strokeStyle = F.ref('filament'); ctx.lineWidth = 3; ctx.beginPath();
    for (let j = 0; j <= 40; j++) { const y = 200 + j * 2.5, x = CAT.x - 10 + 12 * Math.sin(j * Math.PI / 4); if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke();
    ctx.restore();
    /* the anode, a block with its face slanted toward the window */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = F.ref('anode'); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(AN.x - 10, 190); ctx.lineTo(AN.x + 40, 190); ctx.lineTo(AN.x + 40, 330); ctx.lineTo(AN.x + 20, 330); ctx.lineTo(AN.x + 20, 290); ctx.lineTo(AN.x - 30, 290); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    text(ctx, '灯丝', CAT.x, 372, F.ref('filament'), { size: 18, align: 'center' });
    text(ctx, '阳极，' + A.name, AN.x + 20, 372, F.ref('anode'), { size: 18, align: 'center' });
    /* the detector the photons are counted in */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(DET.x - 60, DET.y, 120, 22); ctx.restore();
    line(ctx, DET.x - 60, DET.y, DET.x + 60, DET.y, PAL.muted, 2);
    text(ctx, '探测器', DET.x - 74, DET.y + 12, PAL.muted, { size: 17, align: 'right' });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const A = ANODES[an.value], Em = V.v, fmax = Em * FPK, t = cy.now();
    const M = modelFor(Em, A);
    const VC = C('voltage'), FC = C('frequency'), EC = C('energy');
    hits = [];

    tube(ctx, A);
    hits.push({ x: 700, y: 162, r: 20, name: '抽成真空的 X 射线管' });
    hbracket(ctx, CAT.x, AN.x - 30, 128, VC, 'V = ' + fmt(Em, 1) + ' kV', { side: 'above' });

    const counts = new Array(NB).fill(0);
    let lastE = null, lastP = null, counted = 0;
    for (let i = 0; i < NMAX; i++) {
      const t0 = (i + 0.5) / RATE;
      if (t < t0) break;
      const y0 = CAT.y + (hash(i, 1) - 0.5) * 60, tau = t - t0;
      if (tau < FLY) {
        const k = tau / FLY, x = CAT.x + 20 + (AN.x - 42 - CAT.x) * k * k;
        const y = y0 + (AN.y - 8 - y0) * k;
        dot(ctx, x, y, F.el('e-'), true, 7);
        hits.push({ x, y, r: 12, name: '一个电子，到达阳极时具有 ' + fmt(Em, 1) + ' keV' });
        lastE = { x, y };
        continue;
      }
      const E = photonE(i, Em, A, M), s = tau - FLY;
      if (s < OUT) {
        const k = s / OUT, sx = AN.x - 26, sy = 250, ex = DET.x + (hash(i, 2) - 0.5) * 90, ey = DET.y;
        const dx = ex - sx, dy = ey - sy, L = Math.hypot(dx, dy), x = sx + dx * k, y = sy + dy * k;
        packet(ctx, x, y, dx / L, dy / L, E / 100);
        hits.push({ x, y, r: 24, name: '一个 ' + fmt(E, 1) + ' keV 的 X 射线光子' });
        if (!lastP || Math.abs(k - 0.6) < lastP.d) lastP = { x, y, E, d: Math.abs(k - 0.6) };
        continue;
      }
      counted++;
      const b = Math.min(NB - 1, Math.floor(E * FPK / BIN));
      counts[b]++;
    }
    if (lastE) label(ctx, 'e⁻', lastE.x, lastE.y, { side: 'above', color: PAL.ink, size: 20, gap: 14 });
    if (lastP) label(ctx, 'X 射线，' + fmt(lastP.E, 1) + ' keV', lastP.x, lastP.y, { side: 'left', color: EC, size: 20, gap: 30 });
    text(ctx, counted + ' 个光子已被计数', 1250, 480, PAL.muted, { size: 17, align: 'right' });

    /* Figure 29.12: the counted photons against the expected spectrum */
    const { X, Y } = axes(ctx, GB, [0, 25], [0, 1], { nx: 5, ny: 4, xl: 'f (10¹⁸ Hz)', xc: FC, yl: 'X 射线强度', yc: PAL.ink, fy: () => '' });
    const sc = 0.9 / M.top;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.32);
    counts.forEach((n, b) => { if (n) { const y = Y(Math.min(1, n * sc)); ctx.fillRect(X(b * BIN) + 1, y, X(BIN) - X(0) - 2, GB.b - y); } });
    ctx.restore();
    curve(ctx, (f) => M.dens(f / FPK) * BIN / FPK * NMAX * sc, 0.01, fmax - 0.01, X, Y, alpha(PAL.ink, 0.7), 3, 160);
    line(ctx, X(fmax), GB.b, X(fmax), GB.t + 20, FC, 3, [10, 10]);
    text(ctx, 'fₘₐₓ = ' + fmt(fmax, 1), X(fmax) + (fmax > 20 ? -10 : 10), GB.t + 8, FC, { size: 18, weight: 600, align: fmax > 20 ? 'right' : 'left', bg: PAL.panel });
    if (M.lines) [A.ka, A.kb].forEach((e) => { const xs = X(e * FPK); line(ctx, xs, GB.b, xs, Y(Math.min(1, M.exp[Math.floor(e * FPK / BIN)] * NMAX * sc)), alpha(PAL.ink, 0.7), 3); });
    if (M.lines) {
      const xa = X(A.ka * FPK), ya = Y(Math.min(1, M.exp[Math.floor(A.ka * FPK / BIN)] * NMAX * sc));
      label(ctx, '特征', xa, ya, { side: 'right', color: PAL.muted, size: 17, gap: 18 });
    }
    const bx = X(Math.min(fmax * 0.45, 9));
    label(ctx, '轫致辐射', bx, Y(Math.min(1, M.dens(Math.min(fmax * 0.45, 9) / FPK) * BIN / FPK * NMAX * sc)), { side: 'above', color: PAL.muted, size: 17, gap: 16 });

    topline(ctx, '电子经 ' + fmt(Em, 1) + ' kV 加速，产生的 X 射线光子能量最高可达 ' + fmt(Em, 1) + ' keV，所以 fₘₐₓ = ' + fmt(fmax, 1) + ' × 10¹⁸ Hz。');
    const note = M.lines
      ? A.name + '在 ' + fmt(A.ka, 2) + ' 和 ' + fmt(A.kb, 2) + ' keV 处的峰出现了，因为 $\\kq\\kV$ 高于激发它们的 ' + fmt(A.edge, 2) + ' keV 能量。'
      : A.name + '的峰没有出现，因为 $\\kq\\kV$ 低于激发它们的 ' + fmt(A.edge, 1) + ' keV 能量。';
    ro.set('h\\kfmax = \\kq\\kV = (1.60\\times 10^{-19}\\ \\text{C})(' + fmt(Em, 1) + '\\times 10^{3}\\ \\text{V}) = ' + sciTex(1.60e-19 * Em * 1e3) + '\\ \\text{J} = ' + fmt(Em, 1) + '\\ \\text{keV}', note, { form: 'x' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
