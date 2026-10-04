/* Figures for section 27.1 The Wave Aspect of Light: Interference. The page
   binds position for the two wavelengths, velocity for c and v, and frequency
   for f. The index n is untyped and in ink. The vacuum and the medium are the
   section's referents. The light is drawn in the color of its wavelength in
   vacuum by spectral(), a fact through F.fact, on both sides of the boundary,
   since its color follows its frequency. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, hbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* the color a wavelength is seen as, in sRGB, as in 25.5 */
function spectral(lam) {
  let r = 0, g = 0, b = 0;
  if (lam < 440) { r = (440 - lam) / 60; b = 1; }
  else if (lam < 490) { g = (lam - 440) / 50; b = 1; }
  else if (lam < 510) { g = 1; b = (510 - lam) / 20; }
  else if (lam < 580) { r = (lam - 510) / 70; g = 1; }
  else if (lam < 645) { r = 1; g = (645 - lam) / 65; }
  else r = 1;
  const f = lam < 420 ? 0.45 + (0.55 * (lam - 380)) / 40 : lam > 700 ? 0.45 + (0.55 * (760 - lam)) / 60 : 1;
  const c = (x) => Math.round(255 * Math.pow(x * f, 0.8));
  return F.fact(`rgb(${c(r)}, ${c(g)}, ${c(b)})`);
}
function colorName(lam) {
  return lam < 440 ? 'violet' : lam < 500 ? 'blue' : lam < 565 ? 'green' : lam < 595 ? 'yellow' : lam < 635 ? 'orange' : 'red';
}
/* a number in scientific notation for the headline, 2.25 × 10⁸ */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sci(x, dec) {
  const e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e);
  return { m: fmt(m, dec), e, plain: `${fmt(m, dec)} × 10${String(e).split('').map((ch) => SUP[ch]).join('')}`, tex: `${fmt(m, dec)}\\times 10^{${e}}` };
}

/* =====================================================================
   Sim · sim-wavelength-in-medium
   A wave runs from a vacuum on the left into a medium on the right. Its
   phase is continuous across the boundary: it advances by one wavelength per
   period on each side, λ drawn at PX units per nanometer and λ/n in the
   medium, so the crests close up and slow down while arriving and leaving at
   one rate. One loop is four drawn periods of one second each, so the wave
   repeats without a jump. Two markers bob on the wave, one on each side, in
   step. The brackets are fixed rulers of one wavelength each.
===================================================================== */
(function () {
  const d = sim('sim-wavelength-in-medium', 460);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 760, step: 1, value: 633, unit: 'nm', dec: 0, aria: 'the wavelength of the light in vacuum', detents: [{ v: 380, label: '380' }, { v: 760, label: '760' }] });
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 1, max: 2.42, step: 0.001, value: 1.333, unit: '', dec: 3, aria: 'the index of refraction of the medium', snap: true, detents: [{ v: 1.333, label: 'water' }, { v: 1.52 }, { v: 2.419, label: 'diamond' }] });
  const PERIODS = 4;
  const cy = cycle(() => PERIODS, 0.2);
  const PX = 0.3;                               /* drawn units per nanometer: 760 nm is 228 units */
  const XL = 60, XB = 700, XR = 1340, Y0 = 250, A = 64, MED = { t: 110, b: 400 };
  const PROBE = [380, 1020];
  const CVAC = 3e8;

  function phase(x, t, L, n) {
    const Ld = L * PX;
    const s = x <= XB ? (x - XL) / Ld : (XB - XL) / Ld + (x - XB) * n / Ld;
    return 2 * Math.PI * (s - t);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, n = nS.v, Ln = L / n, t = cy.now();
    const light = spectral(L), PC = C('position');
    const f = CVAC / (L * 1e-9), v = CVAC / n;
    const vs = sci(v, 2), fs = sci(f, 2);
    topline(ctx, `Light of ${fmt(L, 0)} nm enters a medium of index ${fmt(n, 3)}: it slows to ${vs.plain} m/s and its wavelength shrinks to ${fmt(Ln, 0)} nm, while its frequency and its color stay the same.`);

    ctx.save(); ctx.fillStyle = alpha(F.ref('medium'), 0.1); ctx.fillRect(XB, MED.t, XR - XB + 40, MED.b - MED.t); ctx.restore();
    line(ctx, XB, MED.t, XB, MED.b, PAL.rule, 2);
    line(ctx, XL, Y0, XR, Y0, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'vacuum', (XL + XB) / 2, MED.b + 26, F.ref('vacuum'), { size: 20, align: 'center' });
    text(ctx, `medium, n = ${fmt(n, 3)}`, (XB + XR) / 2, MED.b + 26, F.ref('medium'), { size: 20, align: 'center' });

    ctx.save(); ctx.strokeStyle = light; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let x = XL; x <= XR; x += 2) {
      const y = Y0 - A * Math.sin(phase(x, t, L, n));
      if (x === XL) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke(); ctx.restore();

    const hits = [];
    PROBE.forEach((x, i) => {
      const y = Y0 - A * Math.sin(phase(x, t, L, n));
      line(ctx, x, Y0 - A - 14, x, Y0 + A + 14, alpha(PAL.ink, 0.35), 2, [4, 8]);
      dot(ctx, x, y, PAL.ink, true, 9);
      hits.push({ x, y, r: 16, name: i === 0 ? `a point in the vacuum, rising and falling ${fs.plain} times a second` : `a point in the medium, rising and falling ${fs.plain} times a second` });
    });
    current = hits;

    /* the rulers: one wavelength on each side, starting at a fixed point */
    const b1 = 150, b2 = b1 + L * PX, m1 = XB + 120, m2 = m1 + Ln * PX, yb = MED.t + 34;
    hbracket(ctx, b1, b2, yb, PC, `λ = ${fmt(L, 0)} nm`);
    hbracket(ctx, m1, m2, yb, PC, `λₙ = ${fmt(Ln, 0)} nm`);

    readout(d.readout, `\\klamn = \\frac{\\klam}{n} = \\frac{${fmt(L, 0)}\\ \\text{nm}}{${fmt(n, 3)}} = ${fmt(Ln, 0)}\\ \\text{nm}`,
      `The frequency is ${fs.plain} Hz on both sides, so the light stays ${colorName(L)}; its speed drops from 3.00 × 10⁸ m/s in the vacuum to ${vs.plain} m/s in the medium.`);
  }
  let current = [];
  hover(d.stage, () => current);
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
