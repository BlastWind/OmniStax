/* Figures for section 29.7 Probability: The Heisenberg Uncertainty Principle.
   The figures draw position (λ, d, Δx), momentum (Δp), velocity (Δv), energy
   (ΔE), time (Δt) and the angle θ₁. Planck's constant, a mass, the order m and a
   count of arrivals are ink. A photon is drawn in the color of its wavelength,
   the physical fact, through `wavelengthColor` and F.fact; an electron is
   F.el('e-') and a proton F.el('p+'). The source, slits, screen and coils, the
   atom and electron of Example 29.8 and the excited state of Example 29.9 are
   the section's referents, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.7'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, hbracket, axes, curve, pinned, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constants: h = 6.63 × 10⁻³⁴ J·s, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg, 1 eV = 1.60 × 10⁻¹⁹ J */
const Hh = 6.63e-34, ME = 9.11e-31, MP = 1.67e-27, EV = 1.60e-19;

const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const pow10 = (n) => '10' + String(n).split('').map((ch) => SUP[ch]).join('');
function sci(v, dec) {
  v = +v.toPrecision(dec + 1);
  const n = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / Math.pow(10, n);
  if (n >= -1 && n < 4) return fmt(v, Math.max(0, dec - n));
  return fmt(m, dec) + ' × ' + pow10(n);
}
function sciTex(v, dec) {
  v = +v.toPrecision(dec + 1);
  const n = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / Math.pow(10, n);
  if (n >= -1 && n < 4) return fmt(v, Math.max(0, dec - n));
  return fmt(m, dec) + '\\times 10^{' + n + '}';
}

/* the color of visible light of wavelength nm, the piecewise fit 29.2 uses */
function wavelengthColor(nm) {
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
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };

/* =====================================================================
   FIGURE 29.21 + 29.22 · sim-buildup · moving · flat (rule 28.1)
   Particles of wavelength λ pass two slits d = 2.00 µm apart, each D =
   0.800 µm wide, and land on a screen. Not watched, the chance of landing at
   sin θ is cos²(πd sin θ/λ)·sinc²(πD sin θ/λ); watched, it is the single-slit
   sinc² alone. Arrival i lands at a place fixed by its index, drawn from that
   distribution, and at the time FLY + (T − FLY)√(i/N), so the count grows as
   t² to N = 2400 and the scrubber is exact. The screen and the tally share
   the axis sin θ from −0.8 to 0.8; the tally runs to a fixed count set by the
   sharpest pattern the controls reach (double slit at 400 nm).
===================================================================== */
(function () {
  const H = 660;
  const d = sim('sim-buildup', H);
  const DS = 2000, DW = 800, N = 2400, T = 6, FLY = 0.5, S0 = -0.8, S1 = 0.8, BINS = 40, BW = (S1 - S0) / BINS;
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 700, step: 1, value: 490, unit: 'nm', dec: 0, onInput: reset, aria: 'the wavelength of the particles' });
  const part = choice(d.controls, { label: '\\text{Particles}', options: [{ value: 'e', label: 'electrons' }, { value: 'ph', label: 'photons' }], value: 'e', aria: 'the kind of particle', onInput: reset });
  const watch = choice(d.controls, { label: '\\text{Slits}', options: [{ value: 'no', label: 'not watched' }, { value: 'yes', label: 'watched' }], value: 'no', aria: 'whether the slits are watched', onInput: reset });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const sinc2 = (x) => (Math.abs(x) < 1e-9 ? 1 : Math.pow(Math.sin(x) / x, 2));
  const inten = (s, nm, watched) => sinc2(Math.PI * DW * s / nm) * (watched ? 1 : Math.pow(Math.cos(Math.PI * DS * s / nm), 2));
  const GRID = 1200;
  function table(nm, watched) {
    const cdf = [0];
    let z = 0;
    for (let k = 1; k <= GRID; k++) { const s = S0 + (S1 - S0) * (k - 0.5) / GRID; z += inten(s, nm, watched); cdf.push(z); }
    return { z: z * (S1 - S0) / GRID, cdf: cdf.map((c) => c / z) };
  }
  const peakBin = (t) => N * BW / t.z;
  const XMAX = Math.ceil(peakBin(table(400, false)) / 50) * 50;

  let tab = null, place = [];
  function build() {
    tab = table(lam.v, watch.value === 'yes');
    place = [];
    for (let i = 0; i < N; i++) {
      const u = hash(i, 5);
      let lo = 0, hi = GRID;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (tab.cdf[m] < u) lo = m; else hi = m; }
      const f = (u - tab.cdf[lo]) / Math.max(1e-12, tab.cdf[hi] - tab.cdf[lo]);
      place.push(S0 + (S1 - S0) * (lo + f) / GRID);
    }
  }
  function reset() { build(); cy.reset(); }
  build();

  const SRC = { x: 110, y: 370 }, BAR = 420, SLIT = 40, SCR = 720;
  const PAN = { l: 740, r: 900 }, GB = { l: 1010, r: 1330, t: 150, b: 590 };
  const Ys = (s) => GB.b - (s - S0) / (S1 - S0) * (GB.b - GB.t);
  const arriveAt = (i) => FLY + (T - FLY) * Math.sqrt(i / N);

  function draw() {
    const { ctx } = begin(d.c);
    const nm = lam.v, isE = part.value === 'e', watched = watch.value === 'yes', t = cy.now();
    const col = isE ? F.el('e-') : wavelengthColor(nm), XC = C('position');
    const who = isE ? 'electron' : 'photon';
    hits = [];

    /* the source, the barrier with its two slits, the screen seen edge on and face on */
    const SRC_ = F.ref('source'), SL = F.ref('slits'), SCN = F.ref('screen'), CO = F.ref('coils');
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = SRC_; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(SRC.x - 60, SRC.y - 26, 60, 52); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, isE ? 'electron gun' : 'faint lamp', SRC.x - 30, SRC.y + 52, SRC_, { size: 18, align: 'center' });
    hits.push({ x: SRC.x - 30, y: SRC.y, r: 34, name: isE ? 'a source that sends out one electron at a time' : 'a lamp so faint it sends out one photon at a time' });
    const g = 9;
    line(ctx, BAR, GB.t - 10, BAR, SRC.y - SLIT - g, SL, 6);
    line(ctx, BAR, SRC.y - SLIT + g, BAR, SRC.y + SLIT - g, SL, 6);
    line(ctx, BAR, SRC.y + SLIT + g, BAR, GB.b + 10, SL, 6);
    text(ctx, 'two slits', BAR, GB.t - 34, SL, { size: 18, align: 'center' });
    hits.push({ x: BAR, y: SRC.y - SLIT, r: 14, name: 'the upper slit' }, { x: BAR, y: SRC.y + SLIT, r: 14, name: 'the lower slit' });
    watch.only(ctx, 'yes', () => {
      [-1, 1].forEach((k) => {
        ctx.save(); ctx.strokeStyle = CO; ctx.lineWidth = 2.5;
        for (let j = 0; j < 4; j++) { ctx.beginPath(); ctx.ellipse(BAR - 12 + j * 8, SRC.y + k * SLIT, 5, 17, 0, 0, 2 * Math.PI); ctx.stroke(); }
        ctx.restore();
      });
      text(ctx, 'coils detect which slit', BAR, GB.b + 36, CO, { size: 18, align: 'center' });
    }, [8, 0]);
    if (watched) hits.push({ x: BAR, y: SRC.y + SLIT + 30, r: 20, name: 'coils around each slit that detect the particle passing through it' });
    line(ctx, SCR, GB.t, SCR, GB.b, SCN, 4);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(PAN.l, GB.t, PAN.r - PAN.l, GB.b - GB.t); ctx.restore();
    text(ctx, 'screen', (SCR + PAN.r) / 2, GB.t - 34, SCN, { size: 18, align: 'center' });
    hits.push({ x: (PAN.l + PAN.r) / 2, y: GB.t + 20, r: 40, name: 'the screen, seen face on, with a dot where each particle landed' });

    /* arrivals so far, and a few in flight */
    const counts = new Array(BINS).fill(0);
    let n = 0, flying = null;
    for (let i = 0; i < N; i++) {
      const ta = arriveAt(i);
      if (t < ta - FLY) break;
      const s = place[i], y = Ys(s);
      if (t >= ta) {
        n++;
        counts[Math.min(BINS - 1, Math.max(0, Math.floor((s - S0) / BW)))]++;
        dot(ctx, PAN.l + 6 + hash(i, 7) * (PAN.r - PAN.l - 12), y, col, true, 2.2);
        continue;
      }
      if (i > 40 && i % 20) continue;
      const k = (t - ta + FLY) / FLY, ys = SRC.y + (hash(i, 9) < 0.5 ? -SLIT : SLIT), kb = (BAR - SRC.x) / (SCR - SRC.x);
      const x = SRC.x + (SCR - SRC.x) * k;
      const yy = k < kb ? SRC.y + (ys - SRC.y) * k / kb : ys + (y - ys) * (k - kb) / (1 - kb);
      dot(ctx, x, yy, col, true, 7);
      flying = { x, y: yy };
    }
    if (flying) hits.push({ x: flying.x, y: flying.y, r: 12, name: 'one ' + who + ' on its way to the screen' });

    /* the tally against sin θ, and the distribution the waves predict */
    const { X, Y } = axes(ctx, GB, [0, XMAX], [S0, S1], { nx: 2, ny: 4, xl: 'arrivals', yl: 'sin θ', fy: (v) => fmt(v, 1) });
    const bh = (GB.b - GB.t) / BINS;
    ctx.save(); ctx.fillStyle = isE ? alpha(PAL.ink, 0.35) : col; ctx.globalAlpha *= isE ? 1 : 0.6;
    counts.forEach((c, b) => { if (c) ctx.fillRect(GB.l, Ys(S0 + (b + 1) * BW) + 1, Math.min(X(c), GB.r) - GB.l, bh - 2); });
    ctx.restore();
    const shape = watch.mix((v) => { const w = v === 'yes', z = table(nm, w).z; const a = []; for (let k = 0; k <= 160; k++) a.push(inten(S0 + (S1 - S0) * k / 160, nm, w) / z); return a; });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    shape.forEach((p, k) => { const x = Math.min(X(Math.max(n, 1) * BW * p), GB.r), y = Ys(S0 + (S1 - S0) * k / 160); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
    ctx.globalAlpha *= n > 30 ? 0.9 : 0.35; ctx.stroke(); ctx.restore();
    if (!watched) for (let m = 1; m * nm / DS < S1; m++) [m, -m].forEach((q) => text(ctx, 'm = ' + q, GB.r - 4, Ys(q * nm / DS), PAL.muted, { size: 16, align: 'right', bg: PAL.panel }));

    const plural = isE ? 'electrons' : 'photons';
    topline(ctx, n === 0 ? 'The ' + plural + ' leave the source one at a time.'
      : n + ' ' + (n === 1 ? who + ' has' : plural + ' have') + ' arrived, each at one definite place, and together they build ' + (watched ? 'a single-slit pattern, because each was seen to pass through one slit.' : 'a double-slit pattern.'));
    const note = isE ? 'An electron of this wavelength moves at only v = h/mλ = ' + fmt(Hh / (ME * nm * 1e-9), 0) + ' m/s.' : 'Electrons of the same wavelength build exactly the same pattern.';
    if (watched) ro.set('D\\sin\\kthetaone = \\klam,\\quad \\sin\\kthetaone = \\frac{\\klam}{D} = \\frac{' + fmt(nm, 0) + '\\ \\text{nm}}{800\\ \\text{nm}} = ' + fmt(nm / DW, 3) + '\\ \\text{(first dark place)}', note, { form: 'single' });
    else ro.set('\\kd\\sin\\kthetaone = \\klam,\\quad \\sin\\kthetaone = \\frac{\\klam}{\\kd} = \\frac{' + fmt(nm, 0) + '\\ \\text{nm}}{2000\\ \\text{nm}} = ' + fmt(nm / DS, 3) + '\\ \\text{(first bright band)}', note, { form: 'double' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   Sim · sim-position-momentum · still · flat (rule 28.1)
   Δp = h/4πΔx. Graph: Δx from 0 to 0.200 nm, Δp from 0 to 12 × 10⁻²⁴
   kg·m/s (0.005 nm gives 10.6), fixed. Beside it an atom 0.1 nm across at
   1400 units per nanometer, with a band Δx wide through it, and the Δv
   arrow at 30 units per 10⁶ m/s, capped at the panel. Opens on Example
   29.8: 0.0100 nm, 5.28 × 10⁻²⁴ kg·m/s, 5.79 × 10⁶ m/s, 95.5 eV.
===================================================================== */
(function () {
  const H = 540;
  const d = sim('sim-position-momentum', H);
  const PARTS = { e: { m: ME, name: 'electron', el: 'e-', sym: 'e⁻', mTex: '9.11\\times 10^{-31}' }, p: { m: MP, name: 'proton', el: 'p+', sym: 'p⁺', mTex: '1.67\\times 10^{-27}' } };
  const dx = ctl(d.controls, { label: '\\kdx', cls: 'position', min: 0.005, max: 0.2, step: 0.0005, value: 0.01, unit: 'nm', dec: 4, aria: 'the uncertainty in position',
    specials: [{ at: 0.1, label: 'atom' }] });
  const pick = choice(d.controls, { label: '\\text{Particle}', options: [{ value: 'e', label: 'electron' }, { value: 'p', label: 'proton' }], value: 'e', aria: 'the particle' });
  const ro = readout(d);
  const GB = { l: 140, r: 780, t: 150, b: 440 };
  const AT = { x: 1110, y: 300 }, S = 1400;
  const dpOf = (x) => Hh / (4 * Math.PI * x * 1e-9) / 1e-24;
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const P = PARTS[pick.value], x = dx.v, dp = dpOf(x), dv = dp * 1e-24 / P.m, KE = 0.5 * P.m * dv * dv / EV;
    const XC = C('position'), PC = C('momentum'), VC = C('velocity');
    hits = [];

    const { X, Y } = axes(ctx, GB, [0, 0.2], [0, 12], { nx: 4, ny: 4, xl: 'Δx (nm)', xc: XC, yl: 'Δp (10⁻²⁴ kg·m/s)', yc: PC, fx: (v) => fmt(v, 2) });
    const x0 = 0.0044;
    ctx.save(); ctx.beginPath(); ctx.rect(GB.l, GB.t, GB.r - GB.l, GB.b - GB.t); ctx.clip();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(0), Y(12));
    for (let k = 0; k <= 120; k++) { const v = x0 + (0.2 - x0) * k / 120; ctx.lineTo(X(v), Y(Math.min(dpOf(v), 12))); }
    ctx.lineTo(X(0.2), Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    curve(ctx, dpOf, x0, 0.2, X, Y, PC, 5, 160);
    label(ctx, 'ruled out: Δx Δp < h/4π', X(0.16), Y(0.15), { side: 'above', size: 18, gap: 56, color: PAL.muted, leader: true });
    line(ctx, X(0.1), GB.t, X(0.1), GB.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'size of an atom', X(0.1) + 8, GB.t + 16, PAL.muted, { size: 17, align: 'left', bg: PAL.panel });
    line(ctx, X(x), GB.b, X(x), Y(dp), alpha(XC, 0.6), 2, [4, 8]);
    line(ctx, GB.l, Y(dp), X(x), Y(dp), alpha(PC, 0.6), 2, [4, 8]);
    pinned(ctx, GB, X, Y, x, dp, PC);
    hits.push({ x: X(x), y: Y(dp), r: 14, name: 'the smallest uncertainty in momentum for this uncertainty in position' });

    /* the atom to scale, the band where the particle may be, and the uncertainty in its velocity */
    const ATC = F.ref('atom');
    ctx.save(); ctx.strokeStyle = ATC; ctx.lineWidth = 2.5; ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.arc(AT.x, AT.y, 0.05 * S, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    dot(ctx, AT.x, AT.y, ATC, true, 5);
    hits.push({ x: AT.x, y: AT.y - 0.05 * S, r: 12, name: 'an atom, about 0.1 nm across' });
    const w = x * S, ex = AT.x + 0.3 * w;
    ctx.save(); ctx.fillStyle = alpha(XC, 0.18); ctx.fillRect(AT.x - w / 2, AT.y - 120, w, 240); ctx.restore();
    line(ctx, AT.x - w / 2, AT.y - 120, AT.x - w / 2, AT.y + 120, alpha(XC, 0.7), 2);
    line(ctx, AT.x + w / 2, AT.y - 120, AT.x + w / 2, AT.y + 120, alpha(XC, 0.7), 2);
    hbracket(ctx, AT.x - w / 2, AT.x + w / 2, AT.y - 138, XC, 'Δx = ' + fmt(x, 4) + ' nm', {});
    dot(ctx, ex, AT.y + 40, F.el(P.el), true, 9);
    label(ctx, P.sym, ex, AT.y + 40, { side: 'right', size: 20, gap: 18, color: P.el === 'e-' ? F.ref('electron') : PAL.ink });
    hits.push({ x: ex, y: AT.y + 40, r: 12, name: 'the ' + P.name + ', found somewhere within Δx' });
    const L = Math.min(380, Math.max(6, dv / 1e6 * 30)), AY = AT.y + 170, AX = 920;
    arrow(ctx, AX, AY, AX + L, AY, VC, 5);
    text(ctx, 'Δv = ' + sci(dv, 2) + ' m/s', AX, AY + 32, VC, { size: 20, weight: 600, align: 'left' });

    topline(ctx, 'Locating ' + (P.name === 'electron' ? 'an electron' : 'a proton') + ' to ' + fmt(x, 4) + ' nm leaves its momentum uncertain by at least ' + sci(dp * 1e-24, 2) + ' kg·m/s and its velocity by ' + sci(dv, 2) + ' m/s.');
    ro.set('\\kdp = \\frac{h}{4\\pi\\kdx} = \\frac{6.63\\times 10^{-34}\\ \\text{J}\\cdot\\text{s}}{4\\pi(' + sciTex(x * 1e-9, 2) + '\\ \\text{m})} = ' + sciTex(dp * 1e-24, 2) + '\\ \\text{kg}\\cdot\\text{m/s}',
      'Then Δv = Δp/m = ' + sci(dv, 2) + ' m/s, and ' + (P.name === 'electron' ? 'an electron' : 'a proton') + ' moving that fast has a kinetic energy of ' + sci(KE, 2) + ' eV.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-energy-time · still · flat (rule 28.1)
   ΔE = h/4πΔt = 3.30 × 10⁻¹⁶ eV·s / Δt, on log–log axes: Δt from 10⁻²⁶ to
   10⁻² s, ΔE from 10⁻¹⁵ to 10¹² eV, fixed. The slider carries log₁₀ of Δt
   from −25 to −2 and writes its value as a time. Levels: 1 eV, the
   electron's rest energy 0.511 MeV, 1 GeV. Opens on Example 29.9:
   1.0 × 10⁻¹⁰ s, 5.3 × 10⁻²⁵ J, 3.3 × 10⁻⁶ eV.
===================================================================== */
(function () {
  const H = 520;
  const d = sim('sim-energy-time', H);
  const lt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: -25, max: -2, step: 0.05, value: -10, unit: '', dec: 2, aria: 'the lifetime of the state, as a power of ten in seconds', detents: [-10] });
  const valEl = lt.el.querySelector('.ctl-val');
  const ro = readout(d);
  const GB = { l: 160, r: 1320, t: 140, b: 430 };
  const K = Hh / (4 * Math.PI) / EV;
  const LEVELS = [{ e: 0, name: 'typical atomic excitation, 1 eV' }, { e: Math.log10(0.511e6), name: 'rest energy of an electron, 0.511 MeV' }, { e: 9, name: '1 GeV' }];
  let hits = [];
  hover(d.stage, () => hits);

  function compare(eV) {
    if (eV < 0.01) return ', far less than a typical atomic excitation of 1 eV.';
    if (eV < 100) return ', comparable to the energy of an atomic excitation.';
    if (eV < 0.511e6) return ', far more than an atomic excitation.';
    if (eV < 1e9) return ', more than the rest energy of an electron.';
    return ', more than 1 GeV.';
  }

  function draw() {
    const { ctx } = begin(d.c);
    const tl = lt.v, dt = Math.pow(10, tl), dEj = Hh / (4 * Math.PI * dt), dE = dEj / EV;
    const TC = C('time'), EC = C('energy');
    if (valEl) valEl.textContent = sci(dt, 1) + ' s';
    hits = [];

    const { X, Y } = axes(ctx, GB, [-26, -2], [-15, 12], { nx: 6, ny: 9, xl: 'Δt (s)', xc: TC, yl: 'ΔE (eV)', yc: EC, fx: (v) => pow10(Math.round(v)), fy: (v) => pow10(Math.round(v)) });
    const f = (u) => Math.log10(K) - u;
    ctx.save(); ctx.beginPath(); ctx.rect(GB.l, GB.t, GB.r - GB.l, GB.b - GB.t); ctx.clip();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.beginPath(); ctx.moveTo(X(-26), Y(-15));
    ctx.lineTo(X(-26), Y(f(-26))); ctx.lineTo(X(-2), Y(f(-2))); ctx.lineTo(X(-2), Y(-15)); ctx.closePath(); ctx.fill(); ctx.restore();
    LEVELS.forEach((lv) => {
      line(ctx, GB.l, Y(lv.e), GB.r, Y(lv.e), alpha(PAL.ink, 0.4), 2, [10, 10]);
      text(ctx, lv.name, GB.r - 8, Y(lv.e) - 14, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    });
    curve(ctx, f, -26, -2, X, Y, EC, 5, 60);
    text(ctx, 'ruled out: ΔE Δt < h/4π', X(-8), Y(-12), PAL.muted, { size: 18, align: 'center' });
    dot(ctx, X(-10), Y(f(-10)), F.ref('excited-state'), false, 11);
    hits.push({ x: X(-10), y: Y(f(-10)), r: 14, name: 'Example 29.9: an atomic excited state that lives 1.0 × 10⁻¹⁰ s' });
    line(ctx, X(tl), GB.b, X(tl), Y(f(tl)), alpha(TC, 0.6), 2, [4, 8]);
    line(ctx, GB.l, Y(f(tl)), X(tl), Y(f(tl)), alpha(EC, 0.6), 2, [4, 8]);
    pinned(ctx, GB, X, Y, tl, f(tl), EC);
    hits.push({ x: X(tl), y: Y(f(tl)), r: 14, name: 'the smallest uncertainty in energy for this lifetime' });

    topline(ctx, 'A state that lives ' + sci(dt, 1) + ' s has its energy uncertain by at least ' + sci(dE, 1) + ' eV' + compare(dE));
    ro.set('\\kdE = \\frac{h}{4\\pi\\kdt} = \\frac{6.63\\times 10^{-34}\\ \\text{J}\\cdot\\text{s}}{4\\pi(' + sciTex(dt, 1) + '\\ \\text{s})} = ' + sciTex(dEj, 1) + '\\ \\text{J} = ' + sciTex(dE, 1) + '\\ \\text{eV}', '');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
