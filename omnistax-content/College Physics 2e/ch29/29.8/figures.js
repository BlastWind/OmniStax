/* Figures for section 29.8 The Particle-Wave Duality Reviewed. The figure draws
   momentum, velocity (the grain's recoil), position (the wavelength) and the
   grain's mass; Planck's constant is ink. A visible photon is drawn in the color
   of its wavelength, the physical fact, through `wavelengthColor` and F.fact.
   The photon and the grain of dust are the section's referents: the grain wears
   F.ref, and the photon, whose body is its fact colour, wears it on its name. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.8'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, text, topline, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constant: h = 6.63 × 10⁻³⁴ J·s */
const Hh = 6.63e-34;

/* the color of visible light of wavelength nm, the fit 29.2 uses */
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

/* a photon as a short wave packet along x, its wavelength drawn as the ripple count */
function packet(ctx, x, y, color, ripples) {
  const L = 110, N = 80;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const s = i / N - 0.5, a = 16 * Math.cos(Math.PI * s) * Math.sin(s * 2 * ripples * Math.PI);
    if (i) ctx.lineTo(x + s * L, y + a); else ctx.moveTo(x + s * L, y + a);
  }
  ctx.stroke(); ctx.restore();
}

/* a grain of dust as an irregular lump of radius r */
function grain(ctx, x, y, r, color) {
  ctx.save(); ctx.beginPath();
  for (let i = 0; i <= 14; i++) {
    const a = i / 14 * 2 * Math.PI, rr = r * (1 + 0.14 * Math.sin(3 * a + 0.6) + 0.08 * Math.cos(5 * a));
    if (i) ctx.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); else ctx.moveTo(x + rr * Math.cos(a), y + rr * Math.sin(a));
  }
  ctx.closePath(); ctx.fillStyle = alpha(color, 0.35); ctx.fill();
  ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
}

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
   Sim · sim-dust-recoil · still · flat (rule 28.1)
   Example 29.10: a photon of wavelength λ is absorbed by a grain of mass m
   at rest, p = h/λ and v = p/m. The momentum arrow keeps one length, since
   it is the same momentum before and after; the choice slides it from the
   photon to the grain as the photon arrives.
===================================================================== */
(function () {
  const H = 440;
  const d = sim('sim-dust-recoil', H);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 700, step: 1, value: 550, unit: 'nm', dec: 0, aria: 'the wavelength of the photon' });
  const ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 0.1, max: 10, step: 0.01, value: 1, unit: 'μg', dec: 2, aria: 'the mass of the grain of dust' });
  const pick = choice(d.controls, { label: '\\text{Absorption}', options: [
    { value: 'before', label: 'before' }, { value: 'after', label: 'after' },
  ], value: 'before', aria: 'before or after the photon is absorbed' });
  const ro = readout(d);
  const Y = 250, PX = 330, GX = 960, AL = 230, AY = 150;
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const nm = lam.v, m = ms.v * 1e-9, p = Hh / (nm * 1e-9), v = p / m;
    const PC = C('momentum'), VC = C('velocity'), MC = C('mass'), PH = F.ref('photon'), DU = F.ref('dust');
    const t = pick.mix((s) => (s === 'after' ? 1 : 0));
    const after = pick.value === 'after';
    const col = wavelengthColor(nm);
    const r = 30 + 10 * Math.log10(ms.v * 10) / 2;
    hits = [];

    line(ctx, 120, Y, 1280, Y, alpha(PAL.ink, 0.3), 2, [6, 6]);

    /* the photon travels to the grain and is gone on arrival */
    const px = PX + (GX - r - 60 - PX) * t, fade = t < 0.75 ? 1 : Math.max(0, 1 - (t - 0.75) / 0.25);
    if (fade > 0) F.faded(ctx, fade, [0, 0], () => {
      packet(ctx, px, Y, col, 2.5 + (700 - nm) / 110);
      text(ctx, fmt(nm, 0) + '-nm photon', px, Y + 52, PH, { size: 20, align: 'center', bg: PAL.panel });
    });
    if (!after) hits.push({ x: px, y: Y, r: 55, name: 'a ' + fmt(nm, 0) + '-nm photon of visible light' });

    grain(ctx, GX, Y, r, DU);
    text(ctx, 'dust', GX, Y + r + 34, DU, { size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'm = ' + fmt(ms.v, 2) + ' μg', GX, Y + r + 62, MC, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: GX, y: Y, r: r + 6, name: 'a grain of dust at rest in outer space' });

    /* one momentum, carried first by the photon and then by the grain */
    const ax = (PX - AL / 2) + (GX - (PX - AL / 2)) * t;
    arrow(ctx, ax, AY, ax + AL, AY, PC, 5);
    text(ctx, 'p = ' + sci(p, 2) + ' kg·m/s', ax + AL / 2, AY - 30, PC, { size: 22, weight: 600, align: 'center' });

    /* the recoil, after absorption only */
    pick.only(ctx, 'after', () => {
      arrow(ctx, GX + r + 14, Y, GX + r + 104, Y, VC, 4);
      text(ctx, 'v = ' + sci(v, 2) + ' m/s', GX + r + 116, Y, VC, { size: 22, weight: 600, align: 'left', base: 'middle', bg: PAL.panel });
    }, [-20, 0]);
    pick.only(ctx, 'before', () => {
      text(ctx, 'at rest', GX, Y - r - 26, PAL.muted, { size: 20, align: 'center' });
    }, [0, 0]);

    const yrs = 1e-3 / v / 3.156e7;
    topline(ctx, after
      ? 'The ' + fmt(ms.v, 2) + '-μg grain that absorbs the photon recoils at ' + sci(v, 2) + ' m/s, carrying the photon’s momentum.'
      : 'A ' + fmt(nm, 0) + '-nm photon carries ' + sci(p, 2) + ' kg·m/s toward a ' + fmt(ms.v, 2) + '-μg grain of dust at rest.');
    if (after) ro.set('\\kv = \\frac{\\kp}{\\km} = \\frac{' + sciTex(p, 2) + '\\ \\text{kg}\\cdot\\text{m/s}}{' + sciTex(m, 2) + '\\ \\text{kg}} = ' + sciTex(v, 2) + '\\ \\text{m/s}',
      'At this speed the grain would take ' + sci(yrs, 1) + ' years to move one millimeter.', { form: 'after' });
    else ro.set('\\kp = \\frac{h}{\\klam} = \\frac{6.63\\times 10^{-34}\\ \\text{J}\\cdot\\text{s}}{' + fmt(nm, 0) + '\\times 10^{-9}\\ \\text{m}} = ' + sciTex(p, 2) + '\\ \\text{kg}\\cdot\\text{m/s}',
      'Before absorption the grain is at rest, so the photon carries all the momentum there is.', { form: 'before' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
