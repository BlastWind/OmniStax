/* Figures for section 29.4 Photon Momentum. The figures draw momentum, energy,
   position (the wavelength), velocity (the electron's speed), mass and the
   scattering angle; Planck's constant is ink. A visible photon is drawn in the
   color of its wavelength, the physical fact, through `wavelengthColor` and
   F.fact; any other photon is a referent of the section and wears F.ref, its
   band named. An electron's body is F.el('e-'), and its name label F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, labeller, angleArc, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constants: h = 6.63 × 10⁻³⁴ J·s, m = 9.11 × 10⁻³¹ kg, c = 3.00 × 10⁸ m/s, 1 eV = 1.60 × 10⁻¹⁹ J */
const Hh = 6.63e-34, ME = 9.11e-31, CL = 3.00e8, EV = 1.60e-19;

/* the color of visible light of wavelength nm, the fit 29.2 uses; outside 380 to 700 nm the photon is ink */
function wavelengthColor(nm) {
  if (nm < 380 || nm > 700) return null;
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

/* a photon as a short wave packet along (ux, uy), with its wavelength drawn as the ripple count */
function packet(ctx, x, y, ux, uy, color, ripples) {
  const px = -uy, py = ux, L = 70, N = 60;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const s = i / N - 0.5, env = Math.cos(Math.PI * s), a = 11 * env * Math.sin(s * 2 * ripples * Math.PI);
    const qx = x + ux * s * L + px * a, qy = y + uy * s * L + py * a;
    if (i) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
  }
  ctx.stroke(); ctx.restore();
}

/* a number as m × 10ⁿ in figure text */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sci(v, dec) {
  v = +v.toPrecision(dec + 1);
  const n = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / Math.pow(10, n);
  if (n >= 0 && n < 4) return fmt(v, n >= 2 ? 0 : dec);
  return fmt(m, dec) + ' × 10' + String(n).split('').map((ch) => SUP[ch]).join('');
}
function sciTex(v, dec) {
  v = +v.toPrecision(dec + 1);
  const n = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / Math.pow(10, n);
  if (n >= 0 && n < 4) return fmt(v, n >= 2 ? 0 : dec);
  return fmt(m, dec) + '\\times 10^{' + n + '}';
}

/* =====================================================================
   FIGURE 29.15 · sim-compton · still · flat (rule 28.1)
   An x-ray photon of wavelength λ scatters through θ from an electron at
   rest. λ′ = λ + (h/mc)(1 − cos θ) is computed but not shown, since the
   book does not teach it. The collision is drawn on the left, directions
   only; on the right the momenta p, p′ and pₑ = p − p′ at one fixed scale,
   a 2-pm photon's p being 380 units (p = 33.2 × 10⁻²³ kg·m/s).
===================================================================== */
(function () {
  const H = 600;
  const d = sim('sim-compton', H);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 2, max: 12, step: 0.1, value: 5, unit: 'pm', dec: 1, aria: 'the wavelength of the incoming photon' });
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 180, step: 1, value: 90, unit: '°', dec: 0, aria: 'the scattering angle' });
  const ro = readout(d);
  const LC = Hh / (ME * CL) * 1e12;                    /* h/mc, 2.43 pm */
  const HC_KEV_PM = Hh * CL / EV / 1e3 * 1e12;         /* hc in keV·pm, 1243 */
  const S = 380 / (Hh / 2e-12 / 1e-23);                /* units per 10⁻²³ kg·m/s */
  const EL = { x: 340, y: 380 }, O = { x: 880, y: 470 };
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, t = th.v * Math.PI / 180, L2 = L + LC * (1 - Math.cos(t));
    const E = HC_KEV_PM / L, E2 = HC_KEV_PM / L2, KE = E - E2;
    const p = Hh / (L * 1e-12) / 1e-23, p2 = Hh / (L2 * 1e-12) / 1e-23;
    const pex = p - p2 * Math.cos(t), pey = -p2 * Math.sin(t), pe = Math.hypot(pex, pey);
    const PC = C('momentum'), XC = C('position'), AC = C('angle');
    const IN = F.ref('compton-photon'), OUT = F.ref('scattered-photon'), EL_ = F.ref('compton-electron');
    const lab = labeller(ctx, H, { headline: true });
    hits = [];

    /* the collision: the incoming photon, the scattered photon at θ, the recoiling electron */
    const ripples = (l) => Math.max(1.5, 7 - l * 0.45);
    line(ctx, EL.x - 300, EL.y, EL.x + 200, EL.y, alpha(PAL.ink, 0.3), 2, [6, 6]);
    packet(ctx, EL.x - 235, EL.y, 1, 0, IN, ripples(L));
    arrow(ctx, EL.x - 190, EL.y, EL.x - 30, EL.y, PAL.muted, 4);
    const ux = Math.cos(t), uy = -Math.sin(t);
    arrow(ctx, EL.x + ux * 30, EL.y + uy * 30, EL.x + ux * 105, EL.y + uy * 105, PAL.muted, 4);
    packet(ctx, EL.x + ux * 150, EL.y + uy * 150, ux, uy, OUT, ripples(L2));
    if (th.v > 0) angleArc(ctx, EL, 64, 0, t, 'θ = ' + fmt(th.v, 0) + '°', undefined, AC);
    if (pe * S > 6) {
      const ex = pex / pe, ey = -pey / pe;
      arrow(ctx, EL.x + ex * 20, EL.y + ey * 20, EL.x + ex * 140, EL.y + ey * 140, PAL.muted, 4);
    }
    dot(ctx, EL.x, EL.y, F.el('e-'), true, 12);
    label(ctx, 'e⁻', EL.x, EL.y, { side: 'below', size: 20, gap: 22, color: EL_ });
    text(ctx, 'λ = ' + fmt(L, 2) + ' pm', EL.x - 235, EL.y + 44, XC, { size: 20, align: 'center', bg: PAL.panel });
    label(ctx, "λ′ = " + fmt(L2, 2) + ' pm', EL.x + ux * 150, EL.y + uy * 150 - Math.abs(Math.sin(t)) * 35, { side: 'above', color: XC, size: 20, gap: 30 });
    hits.push({ x: EL.x - 235, y: EL.y, r: 40, name: 'the x-ray photon before, ' + fmt(E, 0) + ' keV' });
    hits.push({ x: EL.x + ux * 150, y: EL.y + uy * 150, r: 40, name: 'the scattered photon, ' + fmt(E2, 0) + ' keV' });
    hits.push({ x: EL.x, y: EL.y, r: 16, name: 'the electron, which recoils with ' + fmt(KE, 1) + ' keV' });

    /* the momenta: p along the axis, p′ at θ from the same tail, pₑ closing the triangle */
    const P = { x: O.x + p * S, y: O.y }, P2 = { x: O.x + p2 * S * Math.cos(t), y: O.y - p2 * S * Math.sin(t) };
    arrow(ctx, O.x, O.y, P.x, P.y, PC, 5);
    arrow(ctx, O.x, O.y, P2.x, P2.y, PC, 5);
    if (pe * S > 6) arrow(ctx, P2.x, P2.y, P.x, P.y, alpha(PC, 0.75), 5);
    dot(ctx, O.x, O.y, PAL.ink, true, 5);
    lab.beside({ x1: O.x, y1: O.y, x2: P.x, y2: P.y }, 'right', 'p', PC, 24);
    lab.beside({ x1: O.x, y1: O.y, x2: P2.x, y2: P2.y }, 'left', "p′", PC, 24);
    if (pe * S > 6) lab.beside({ x1: P2.x, y1: P2.y, x2: P.x, y2: P.y }, 'left', 'pₑ', PC, 24);
    text(ctx, 'momentum, p = p′ + pₑ', O.x + 190, 560, PAL.muted, { size: 18, align: 'center' });
    lab.flush();

    topline(ctx, th.v === 0
      ? 'A ' + fmt(E, 0) + '-keV photon that passes straight on keeps all its energy, and the electron stays at rest.'
      : 'A ' + fmt(E, 0) + '-keV photon scatters through ' + fmt(th.v, 0) + '° and leaves with ' + fmt(E2, 0) + ' keV, and the electron recoils with ' + fmt(KE, 1) + ' keV.');
    ro.set('\\kKEe = \\kE - \\kEprime = ' + fmt(E, 1) + '\\ \\text{keV} - ' + fmt(E2, 1) + '\\ \\text{keV} = ' + fmt(KE, 1) + '\\ \\text{keV}',
      'The momentum falls from $\\kp = h/\\klam = ' + fmt(p, 2) + '\\times 10^{-23}\\ \\text{kg}\\cdot\\text{m/s}$ to $\\kp\' = ' + fmt(p2, 2) + '\\times 10^{-23}\\ \\text{kg}\\cdot\\text{m/s}$, and the electron carries $\\kp_{e} = ' + fmt(pe, 2) + '\\times 10^{-23}\\ \\text{kg}\\cdot\\text{m/s}$.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-photon-electron · still · flat (rule 28.1)
   A photon of one of the section's wavelengths and an electron with the
   same momentum, p = h/λ and v = p/m. Both arrows are the same length,
   since the momenta are equal. Beneath, E = hc/λ and KEₑ = ½mv² on a log
   axis of energy from 10⁻¹⁶ to 10⁴ eV (4.00 cm gives KEₑ = 9.4 × 10⁻¹⁶ eV,
   10.0 nm gives E = 124 eV), fixed.
===================================================================== */
(function () {
  const H = 560;
  const d = sim('sim-photon-electron', H);
  const PH = {
    mw: { nm: 4.00e7, name: '4.00-cm microwave', band: 'microwave' },
    ir: { nm: 2500, name: '2.50-μm infrared', band: 'infrared' },
    vis: { nm: 500, name: '500-nm visible', band: 'visible' },
    uv: { nm: 10.0, name: '10.0-nm ultraviolet', band: 'ultraviolet' },
  };
  const pick = choice(d.controls, { label: '\\text{Photon}', options: [
    { value: 'mw', label: '4.00 cm' }, { value: 'ir', label: '2.50 μm' }, { value: 'vis', label: '500 nm' }, { value: 'uv', label: '10.0 nm' },
  ], value: 'vis', aria: 'the wavelength of the photon' });
  const ro = readout(d);
  const GB = { l: 120, r: 1280, y: 440 }, LO = -16, HI = 4;
  const X = (ev) => GB.l + (Math.log10(ev) - LO) / (HI - LO) * (GB.r - GB.l);
  const ROW1 = 160, ROW2 = 290, AX = 560, AL = 360;
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const ph = PH[pick.value], lam = ph.nm * 1e-9;
    const p = Hh / lam, v = p / ME, Ej = Hh * CL / lam, E = Ej / EV, KE = 0.5 * ME * v * v / EV;
    const PC = C('momentum'), EC = C('energy'), VC = C('velocity'), XC = C('position');
    const PH_ = F.ref('photon'), EL_ = F.ref('electron');
    const col = wavelengthColor(ph.nm) || PH_;
    hits = [];

    /* the two with equal momenta */
    packet(ctx, 330, ROW1, 1, 0, col, ph.band === 'microwave' ? 1.5 : ph.band === 'infrared' ? 2.5 : ph.band === 'visible' ? 4 : 6);
    text(ctx, 'photon', 330, ROW1 + 40, PH_, { size: 20, align: 'center' });
    text(ctx, 'λ = ' + (ph.nm >= 1e6 ? '4.00 cm' : ph.nm >= 1000 ? '2.50 μm' : fmt(ph.nm, ph.nm < 100 ? 1 : 0) + ' nm'), 330, ROW1 + 66, XC, { size: 20, align: 'center' });
    arrow(ctx, AX, ROW1, AX + AL, ROW1, PC, 5);
    text(ctx, 'p = ' + sci(p, 2) + ' kg·m/s', AX + AL + 24, ROW1, PC, { size: 22, weight: 600, align: 'left', base: 'middle' });
    dot(ctx, 330, ROW2, F.el('e-'), true, 12);
    text(ctx, 'electron', 330, ROW2 + 40, EL_, { size: 20, align: 'center' });
    text(ctx, 'v = ' + sci(v, 2) + ' m/s', 330, ROW2 + 66, VC, { size: 20, weight: 600, align: 'center' });
    arrow(ctx, AX, ROW2, AX + AL, ROW2, PC, 5);
    text(ctx, 'p = ' + sci(p, 2) + ' kg·m/s', AX + AL + 24, ROW2, PC, { size: 22, weight: 600, align: 'left', base: 'middle' });
    hits.push({ x: 330, y: ROW1, r: 40, name: 'a ' + ph.name + ' photon' }, { x: 330, y: ROW2, r: 16, name: 'an electron with the same momentum' });

    /* the energy axis, one tick per power of ten, labelled every other one */
    line(ctx, GB.l, GB.y, GB.r, GB.y, PAL.muted, 3);
    for (let n = LO; n <= HI; n++) {
      line(ctx, X(Math.pow(10, n)), GB.y - 6, X(Math.pow(10, n)), GB.y + 6, PAL.muted, 2);
      if (n % 2 === 0) text(ctx, n === 0 ? '1' : '10' + String(n).split('').map((ch) => SUP[ch]).join(''), X(Math.pow(10, n)), GB.y + 30, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'energy (eV)', GB.r, GB.y + 64, EC, { size: 20, weight: 600, align: 'right' });
    const xe = X(E), xk = X(KE);
    line(ctx, xk, GB.y, xe, GB.y, alpha(EC, 0.35), 8);
    dot(ctx, xe, GB.y, PH_, true, 11);
    dot(ctx, xk, GB.y, EL_, false, 11);
    label(ctx, 'photon E = ' + sci(E, 2) + ' eV', xe, GB.y, { side: 'above', color: PH_, size: 20, gap: 30 });
    label(ctx, 'electron KEₑ = ' + sci(KE, 2) + ' eV', xk, GB.y, { side: 'below', color: EL_, size: 20, gap: 62 });
    hits.push({ x: xe, y: GB.y, r: 14, name: 'the photon’s energy' }, { x: xk, y: GB.y, r: 14, name: 'the electron’s kinetic energy' });

    topline(ctx, 'A ' + ph.name + ' photon and an electron moving at ' + sci(v, 2) + ' m/s carry the same momentum, ' + sci(p, 2) + ' kg·m/s.');
    ro.set('\\kp = \\frac{h}{\\klam} = ' + sciTex(p, 2) + '\\ \\text{kg}\\cdot\\text{m/s},\\quad \\kv = \\frac{\\kp}{\\km} = ' + sciTex(v, 2) + '\\ \\text{m/s}',
      'The photon carries $' + sciTex(E / KE, 2) + '$ times the energy of the electron.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
