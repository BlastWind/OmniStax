/* Figures for section 27.9 Microscopy Enhanced by the Wave Characteristics of
   Light. The page binds no type, as ch27/COLOR.md gives 27.9: the one slider is
   the index of the object and the readout counts wavelengths, both untyped. The
   light is drawn in the color of 546 nm by spectral(), the one literal color on
   the page, as in 27.1. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.9'] = function (root, F) {
const { el, fmt, tex, PAL, alpha, ctl, register, begin, line, text, topline, hbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* the color a wavelength is seen as, in sRGB, as in 27.1 */
function spectral(lam) {
  let r = 0, g = 0, b = 0;
  if (lam < 440) { r = (440 - lam) / 60; b = 1; }
  else if (lam < 490) { g = (lam - 440) / 50; b = 1; }
  else if (lam < 510) { g = 1; b = (510 - lam) / 20; }
  else if (lam < 580) { r = (lam - 510) / 70; g = 1; }
  else if (lam < 645) { r = 1; g = (645 - lam) / 65; }
  else r = 1;
  const c = (x) => Math.round(255 * Math.pow(x, 0.8));
  return '#' + [r, g, b].map((x) => c(x).toString(16).padStart(2, '0')).join('');
}

/* =====================================================================
   Figure 27.51 · sim-phase-through-object
   Two rays cross a sample of index NB. The lower one passes through an
   object THICK background wavelengths thick, where its wavelength is
   LB·NB/n, so it gains (n − NB)/NB · THICK wavelengths and leaves behind the
   upper one. On the right the two are superimposed; the sum's amplitude is
   2|cos(πΔN)| and its brightness cos²(πΔN) of two waves in step.
===================================================================== */
(function () {
  const d = sim('sim-phase-through-object', 530);
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 1.333, max: 1.78, step: 0.001, value: 1.55, unit: '', dec: 3, aria: 'the index of refraction of the object', snap: true, detents: [{ v: 1.333, label: 'background' }, { v: 1.52 }, { v: 1.78 }] });
  const NB = 1.333, THICK = 3, LB = 70, A = 38;
  const XL = 50, XO1 = 330, XO2 = XO1 + THICK * LB, XR = 860;
  const YU = 220, YD = 390, SX1 = 960, SX2 = 1340, YS = 305;
  const light = spectral(546);

  function phaseDown(x, n) {
    if (x <= XO1) return (x - XL) / LB;
    if (x <= XO2) return (XO1 - XL) / LB + (x - XO1) * n / (NB * LB);
    return (XO1 - XL) / LB + THICK * n / NB + (x - XO2) / LB;
  }
  function wave(ctx, x0, x1, y0, amp, ph, color, width, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = 'round';
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    for (let x = x0; x <= x1; x += 2) {
      const y = y0 - amp * Math.sin(2 * Math.PI * ph(x));
      if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke(); ctx.restore();
  }
  let current = [];
  function draw() {
    const { ctx } = begin(d.c);
    const n = nS.v, dN = THICK * (n - NB) / NB;
    const frac = dN - Math.floor(dN), off = Math.min(frac, 1 - frac);
    const bright = Math.pow(Math.cos(Math.PI * dN), 2);
    const verdict = off < 0.02 ? 'so its light leaves in step with the background and the two add to a bright sum'
      : off < 0.12 ? `so its light leaves ${fmt(off, 2)} of a wavelength out of step and the two still add to a bright sum`
      : off > 0.4 ? `so its light leaves nearly half a wavelength out of step and the two cancel`
      : `so its light leaves ${fmt(off, 2)} of a wavelength out of step and their sum is dimmer`;
    topline(ctx, `An object of index ${fmt(n, 3)} in water, three wavelengths thick, holds ${fmt(dN, 2)} more wavelengths than the background beside it, ${verdict}.`);

    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.1); ctx.fillRect(XL, 140, XR - XL, 330); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.28); ctx.fillRect(XO1, YD - 70, XO2 - XO1, 140); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(XO1, YD - 70, XO2 - XO1, 140); ctx.restore();
    text(ctx, `background, n = ${fmt(NB, 3)}`, (XL + XO1) / 2 - 10, 166, PAL.ink, { size: 19, align: 'center' });
    text(ctx, `object, n = ${fmt(n, 3)}`, (XO1 + XO2) / 2, YD + 98, PAL.ink, { size: 19, align: 'center' });

    const up = (x) => (x - XL) / LB, down = (x) => phaseDown(x, n);
    wave(ctx, XL, XR, YU, A, up, light, 5);
    wave(ctx, XL, XR, YD, A, down, light, 5);
    hbracket(ctx, XO1, XO2, YU - A - 26, PAL.ink, 'three wavelengths');

    const endU = up(XR), endD = down(XR);
    const shiftU = (x) => endU + (x - SX1) / LB, shiftD = (x) => endD + (x - SX1) / LB;
    const sumAmp = 2 * A * Math.abs(Math.cos(Math.PI * dN));
    const sumPh = (x) => (shiftU(x) + shiftD(x)) / 2 + (Math.cos(Math.PI * dN) < 0 ? 0.5 : 0);
    line(ctx, (XR + SX1) / 2, 140, (XR + SX1) / 2, 470, alpha(PAL.ink, 0.25), 2, [4, 8]);
    text(ctx, 'superimposed', (SX1 + SX2) / 2, 166, PAL.ink, { size: 19, align: 'center' });
    wave(ctx, SX1, SX2, YS, A, shiftU, alpha(light, 0.5), 3);
    wave(ctx, SX1, SX2, YS, A, shiftD, alpha(light, 0.5), 3, [8, 8]);
    wave(ctx, SX1, SX2, YS, sumAmp, sumPh, light, 6);

    const sw = 120, sy = 430;
    ctx.save();
    ctx.fillStyle = '#000'; ctx.fillRect(SX1, sy, sw, 50); ctx.fillRect(SX2 - sw, sy, sw, 50);
    ctx.globalAlpha = 1; ctx.fillStyle = light; ctx.fillRect(SX1, sy, sw, 50);
    ctx.globalAlpha = bright; ctx.fillRect(SX2 - sw, sy, sw, 50);
    ctx.restore();
    text(ctx, 'background', SX1 + sw / 2, sy + 76, PAL.ink, { size: 18, align: 'center' });
    text(ctx, 'object', SX2 - sw / 2, sy + 76, PAL.ink, { size: 18, align: 'center' });

    current = [
      { x: (XL + XO1) / 2, y: YU, r: 30, name: 'the ray through the background' },
      { x: (XO1 + XO2) / 2, y: YD, r: 30, name: `the ray through the object, ${fmt(THICK * n / NB, 2)} wavelengths across it` },
      { x: (SX1 + SX2) / 2, y: YS, r: 40, name: `the two rays superimposed, ${fmt(100 * bright, 0)}% as bright as two in step` },
      { x: SX2 - sw / 2, y: sy + 25, r: 40, name: `the object seen against the background, ${fmt(100 * bright, 0)}% as bright` }
    ];
    readout(d.readout, `\\Delta N = 3\\,\\frac{n - ${fmt(NB, 3)}}{${fmt(NB, 3)}} = 3\\,\\frac{${fmt(n, 3)} - ${fmt(NB, 3)}}{${fmt(NB, 3)}} = ${fmt(dN, 2)}`,
      `The rays arrive ${fmt(360 * off, 0)}° out of phase, so the object looks ${fmt(100 * bright, 0)}% as bright as the background.`);
  }
  hover(d.stage, () => current);
  register(d.fig, { update: () => {}, draw });
})();
};
