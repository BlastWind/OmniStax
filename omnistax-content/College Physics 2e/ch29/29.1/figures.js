/* Figures for section 29.1 Quantization of Energy. The page binds energy,
   frequency, temperature, intensity and position, as ch29/COLOR.md gives 29.1.
   Planck's constant h, the integer n and every count are untyped and in ink.
   Light is drawn in the color of its wavelength by spectral(), as in 27.1, and a
   stretch of spectrum with no light in it is black; those are the only literal
   colors on the page, since both are the physical fact. Nothing here moves: a
   spectrum and an allowed energy are states with no clock in them, so every
   figure registers no cycle, takes no transport and redraws on its controls
   alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, dot, text, topline, label, vbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const H_PLANCK = 6.626e-34;   /* Planck's constant, J·s */
const CLIGHT = 2.998e8;       /* the speed of light, m/s */
const K_B = 1.381e-23;        /* Boltzmann's constant, J/K */
const SIGMA = 5.67e-8;        /* the Stefan-Boltzmann constant, W/(m²·K⁴) */
const EV = 1.602e-19;         /* one electron volt, in joules */

const SUPS = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
const supOf = (e) => String(e).replace(/-/g, '\u2212').replace(/[0-9]/g, (c) => SUPS[+c]);
function sci(x, dp) {
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \u00D7 10' + supOf(e);
}
function sciTex(x, dp) {
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}

/* the color a wavelength in nanometres is seen as, in sRGB, as in 27.1 */
function spectral(lam) {
  let r = 0, g = 0, b = 0;
  if (lam < 440) { r = (440 - lam) / 60; b = 1; }
  else if (lam < 490) { g = (lam - 440) / 50; b = 1; }
  else if (lam < 510) { g = 1; b = (510 - lam) / 20; }
  else if (lam < 580) { r = (lam - 510) / 70; g = 1; }
  else if (lam < 645) { r = 1; g = (645 - lam) / 65; }
  else r = 1;
  const f = lam < 420 ? 0.45 + (0.55 * (lam - 380)) / 40 : lam > 700 ? 0.45 + (0.55 * (760 - lam)) / 60 : 1;
  const c = (x) => Math.round(255 * Math.pow(Math.max(0, x * f), 0.8));
  return `rgb(${c(r)}, ${c(g)}, ${c(b)})`;
}

/* =====================================================================
   FIGURE 29.3 · sim-blackbody · still · flat (root rule 28.1)
   The book draws three blackbody curves at temperatures it does not name.
   Here the temperature is the reader's, the three faint curves stand at
   3000, 4000 and 5000 K, and the classical prediction is drawn dashed so the
   ultraviolet catastrophe the text names can be seen: it climbs without
   limit toward short wavelengths where the measured curve falls to zero.
   The curve is the power radiated per square metre of surface per micrometre
   of wavelength, 2πhc²/λ⁵ over (e^{hc/λkT} − 1), in MW/(m²·μm).
   Scales: 0 to 2500 nm across; 0 to 120 MW/(m²·μm) up, above the 100 the
   peak reaches at the slider's 6000 K.
===================================================================== */
(function () {
  const d = sim('sim-blackbody', 600);
  const tS = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 2000, max: 6000, step: 50, value: 5000, unit: 'K', dec: 0, aria: 'the temperature of the blackbody' });
  const planck = (T) => (nm) => {
    if (nm <= 0) return 0;
    const l = nm * 1e-9, x = (H_PLANCK * CLIGHT) / (l * K_B * T);
    return x > 700 ? 0 : (2 * Math.PI * H_PLANCK * CLIGHT * CLIGHT) / Math.pow(l, 5) / Math.expm1(x) * 1e-12;
  };
  const classical = (T) => (nm) => (nm <= 0 ? Infinity : (2 * Math.PI * CLIGHT * K_B * T) / Math.pow(nm * 1e-9, 4) * 1e-12);
  const box = { l: 170, r: 1250, t: 140, b: 500 };
  const X_MAX = 2500, Y_MAX = 120;

  function draw() {
    const T = tS.v;
    const { ctx } = begin(d.c);
    const IC = C('intensity'), PC = C('position');
    const peak = 2.898e6 / T, pv = planck(T)(peak), ratio = Math.pow(T / 3000, 4);
    topline(ctx, `At ${fmt(T, 0)} K the spectrum peaks at ${fmt(peak, 0)} nm, and the total intensity is ${fmt(ratio, 1)} times that at 3000 K.`);

    const { X, Y } = axes(ctx, box, [0, X_MAX], [0, Y_MAX], {
      xl: 'wavelength (nm)', xc: PC, yl: 'intensity (MW/m\u00B2 per \u03BCm)', yc: IC,
      nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });

    /* the visible band in its true colors, a faint wash over the graph and a solid strip at its foot */
    for (let nm = 380; nm < 750; nm += 2) {
      const c = spectral(nm);
      ctx.save(); ctx.globalAlpha = 0.14; line(ctx, X(nm), box.t, X(nm), box.b - 14, c, 3); ctx.restore();
      line(ctx, X(nm), box.b - 12, X(nm), box.b - 1, c, 3);
    }
    text(ctx, 'visible', X(565), box.t + 18, PAL.ink, { size: 17, align: 'center', bg: PAL.panel });

    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    [3000, 4000, 5000].forEach((Tr) => curve(ctx, planck(Tr), 1, X_MAX, X, Y, alpha(IC, 0.3), 2.5, 240));
    ctx.setLineDash([10, 10]);
    curve(ctx, classical(T), 300, X_MAX, X, Y, alpha(PAL.ink, 0.7), 3, 240);
    ctx.setLineDash([]);
    curve(ctx, planck(T), 1, X_MAX, X, Y, IC, 5, 320);
    ctx.restore();

    /* where the classical curve leaves the top of the graph */
    const exitNm = Math.pow((2 * Math.PI * CLIGHT * K_B * T * 1e-12) / Y_MAX, 0.25) * 1e9;
    label(ctx, 'classical prediction', X(exitNm), box.t, { side: 'right', color: PAL.ink, size: 18, gap: 18 });

    const p = pinned(ctx, box, X, Y, peak, pv, IC);
    line(ctx, p.x, p.y + 12, p.x, box.b - 14, alpha(PAL.ink, 0.4), 2, [4, 8]);
    label(ctx, `peak at ${fmt(peak, 0)} nm`, p.x, p.y, { side: 'right', color: IC, size: 20, gap: 24 });

    readout(d.readout,
      `\\kIntens = \\sigma\\kTemp^4 = (5.67\\times 10^{-8}\\ \\text{W/m}^2\\cdot\\text{K}^4)(${fmt(T, 0)}\\ \\text{K})^4 = ${fmt(SIGMA * Math.pow(T, 4) / 1e6, 1)}\\ \\text{MW/m}^2`,
      `The total intensity goes as the fourth power of the absolute temperature, so it is (${fmt(T, 0)} K / 3000 K)\u2074 = ${fmt(ratio, 1)} times the total at 3000 K.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-oscillator-ladder · still · flat (root rule 28.1)
   Planck's allowed energies E = (n + ½)hf drawn as the rungs of a ladder on
   one fixed energy axis, the oscillator a dot on its rung, and beside them a
   continuous bar for a classical oscillator, which may have any energy. The
   book's own 10¹⁴ Hz is the default; at the slider's low end the rungs are
   0.04 eV apart and can hardly be told from the continuous bar, which is the
   correspondence principle. An allowed energy is a state and not a motion, so
   the figure registers no cycle.
   Scale: 0 to 3.5 eV up, above the 3.22 eV of n = 6 at 1.20 × 10¹⁴ Hz.
===================================================================== */
(function () {
  const d = sim('sim-oscillator-ladder', 560);
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 0.1, max: 1.2, step: 0.01, value: 1.0, unit: '\u00D7 10\u00B9\u2074 Hz', dec: 2, aria: 'the frequency of the oscillator, in units of 10 to the 14 hertz' });
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 0, max: 6, step: 1, value: 2, unit: '', dec: 0, detents: [0, 1, 2, 3, 4, 5, 6], aria: 'the state n of the oscillator' });
  const E_TOP = 3.5;
  const AX = 250, YB = 500, YT = 120, L1 = 330, L2 = 760, BX = 1000, BW = 80;
  const Y = (e) => YB - (e / E_TOP) * (YB - YT);

  function draw() {
    const f = fS.v * 1e14, n = nS.v;
    const { ctx } = begin(d.c);
    const EC = C('energy');
    const stepJ = H_PLANCK * f, step = stepJ / EV, E = (n + 0.5) * step;
    topline(ctx, `An oscillator of ${sci(f, 2)} Hz can have only energies ${fmt(step, 3)} eV apart, and in the state n = ${n} it has ${fmt(E, 2)} eV.`);

    line(ctx, AX, YB, AX, YT - 10, PAL.muted, 2);
    for (let e = 0; e <= E_TOP + 1e-9; e += 0.5) {
      line(ctx, AX - 8, Y(e), AX, Y(e), PAL.muted, 2);
      text(ctx, fmt(e, 1), AX - 16, Y(e), PAL.muted, { size: 17, align: 'right' });
    }
    text(ctx, 'energy (eV)', AX - 60, YT - 40, EC, { size: 20, weight: 600, align: 'left' });
    text(ctx, 'allowed energies, E = (n + \u00BD)hf', (L1 + L2) / 2, YB + 36, PAL.ink, { size: 20, align: 'center' });

    for (let k = 0; (k + 0.5) * step <= E_TOP; k++) {
      if (k !== n) line(ctx, L1, Y((k + 0.5) * step), L2, Y((k + 0.5) * step), alpha(EC, 0.45), step > 0.1 ? 3 : 1.5);
    }
    const yE = Y(E);
    line(ctx, L1, yE, L2, yE, EC, 6);
    dot(ctx, (L1 + L2) / 2, yE, EC, true, 11);
    text(ctx, `n = ${n}`, L1 - 16, yE, EC, { size: 22, weight: 600, align: 'right', bg: PAL.panel });

    /* the step to the next rung, or to the one below where the next is off the axis */
    const up = (n + 1.5) * step <= E_TOP, other = Y((up ? n + 1.5 : n - 0.5) * step);
    if (up || n > 0) vbracket(ctx, L2 + 30, Math.min(yE, other), Math.max(yE, other), EC, `\u0394E = hf = ${fmt(step, 3)} eV`, 1, { side: 'right', size: 20 });

    const g = ctx.createLinearGradient(0, YB, 0, YT);
    g.addColorStop(0, alpha(EC, 0.15)); g.addColorStop(1, alpha(EC, 0.55));
    ctx.save(); ctx.fillStyle = g; ctx.fillRect(BX, Y(E_TOP), BW, YB - Y(E_TOP)); ctx.restore();
    text(ctx, 'classical oscillator:', BX + BW / 2, YB + 36, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'any energy', BX + BW / 2, YB + 62, PAL.ink, { size: 20, align: 'center' });

    readout(d.readout,
      `\\kE = \\left(n + \\tfrac{1}{2}\\right)h\\kf = \\left(${n} + \\tfrac{1}{2}\\right)(6.63\\times 10^{-34}\\ \\text{J}\\cdot\\text{s})(${sciTex(f, 2)}\\ \\text{Hz}) = ${sciTex(E * EV, 2)}\\ \\text{J} = ${fmt(E, 2)}\\ \\text{eV}`,
      `Each step is \u0394E = hf = ${sci(stepJ, 2)} J, or ${fmt(step, 3)} eV, so the oscillator can gain or lose energy only in lumps of that size.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-line-spectrum · still · flat (root rule 28.1)
   A hot solid emits every visible wavelength; hydrogen gas emits four, at
   656, 486, 434 and 410 nm. The reader moves a wavelength across the strip
   and reads the energy step ΔE = hf light of that wavelength carries, and
   with the gas chosen, finds light only at the four steps hydrogen's atoms
   have. A spectrum has no clock, so the figure registers no cycle.
   Scale: 380 to 750 nm across the strip, the visible band.
===================================================================== */
(function () {
  const d = sim('sim-line-spectrum', 420);
  const LINES = [656.3, 486.1, 434.0, 410.2];
  const srcC = choice(d.controls, {
    label: '\\text{source}',
    options: [{ value: 'solid', label: 'a hot solid' }, { value: 'gas', label: 'hydrogen gas' }],
    value: 'gas', aria: 'whether the light comes from a hot solid or from hydrogen gas',
    onInput: () => lS.refresh(),
  });
  const lS = ctl(d.controls, {
    label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 656.3, unit: 'nm', dec: 0, aria: 'the wavelength of the light',
    specials: LINES.map((w) => ({ at: () => (srcC.value === 'gas' ? w : null) })),
  });
  const SX1 = 150, SX2 = 1250, ST = 170, SB = 260;
  const X = (nm) => SX1 + ((nm - 380) / 370) * (SX2 - SX1);

  function draw() {
    const lam = lS.v, gas = srcC.value === 'gas';
    const { ctx } = begin(d.c);
    const PC = C('position');
    const f = CLIGHT / (lam * 1e-9), dEJ = H_PLANCK * f, dE = dEJ / EV;
    const lit = !gas || LINES.some((w) => Math.abs(w - lam) < 1.5);
    topline(ctx, gas
      ? (lit ? `Hydrogen emits at ${fmt(lam, 0)} nm, where each atom gives up ${fmt(dE, 2)} eV.`
             : `Hydrogen emits no light at ${fmt(lam, 0)} nm, since no hydrogen atom has an energy step of ${fmt(dE, 2)} eV.`)
      : `A hot solid emits at ${fmt(lam, 0)} nm as at every visible wavelength, and the light there carries ${fmt(dE, 2)} eV.`);

    const aSolid = srcC.mix((v) => (v === 'solid' ? 1 : 0)), aGas = 1 - aSolid;
    ctx.save(); ctx.fillStyle = '#000'; ctx.fillRect(SX1, ST, SX2 - SX1, SB - ST); ctx.restore();
    F.faded(ctx, aSolid, [0, 0], () => { for (let nm = 380; nm <= 750; nm += 1) line(ctx, X(nm), ST, X(nm), SB, spectral(nm), 4); });
    F.faded(ctx, aGas, [0, 0], () => LINES.forEach((w) => line(ctx, X(w), ST, X(w), SB, spectral(w), 7)));
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1; ctx.strokeRect(SX1, ST, SX2 - SX1, SB - ST); ctx.restore();

    for (let nm = 400; nm <= 750; nm += 50) {
      line(ctx, X(nm), SB, X(nm), SB + 8, PAL.muted, 2);
      text(ctx, fmt(nm, 0), X(nm), SB + 28, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'wavelength (nm)', SX2, SB + 62, PC, { size: 20, weight: 600, align: 'right' });

    const x = X(lam);
    line(ctx, x, ST - 30, x, SB + 4, PC, 3);
    ctx.save(); ctx.fillStyle = PC; ctx.beginPath(); ctx.moveTo(x, ST - 14); ctx.lineTo(x - 10, ST - 32); ctx.lineTo(x + 10, ST - 32); ctx.closePath(); ctx.fill(); ctx.restore();
    label(ctx, `\u03BB = ${fmt(lam, 0)} nm`, x, ST - 32, { side: 'above', color: PC, size: 20, gap: 18 });

    readout(d.readout,
      `\\kdE = h\\kf = (6.63\\times 10^{-34}\\ \\text{J}\\cdot\\text{s})(${sciTex(f, 2)}\\ \\text{Hz}) = ${sciTex(dEJ, 2)}\\ \\text{J} = ${fmt(dE, 2)}\\ \\text{eV}`,
      `The frequency is the speed of light divided by the wavelength, 3.00 \u00D7 10\u2078 m/s over ${fmt(lam, 0)} nm.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
