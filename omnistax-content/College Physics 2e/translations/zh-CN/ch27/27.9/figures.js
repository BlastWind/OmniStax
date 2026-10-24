/* Figures for section 27.9 Microscopy Enhanced by the Wave Characteristics of
   Light. The one slider is the index of the object and the readout counts
   wavelengths, both untyped; the object's thickness wears position. The object
   and the background are the section's referents. The light is drawn in the
   color of 546 nm by spectral(), and the strip it is seen on is black, both
   facts through F.fact, as in 27.1. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, text, topline, hbracket, hover } = F;
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
  return F.fact('#' + [r, g, b].map((x) => c(x).toString(16).padStart(2, '0')).join(''));
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
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 1.333, max: 1.78, step: 0.001, value: 1.55, unit: '', dec: 3, aria: '物体的折射率', snap: true, detents: [{ v: 1.333, label: '背景' }, { v: 1.52 }, { v: 1.78 }] });
  const NB = 1.333, THICK = 3, LB = 70, A = 38;
  const XL = 50, XO1 = 330, XO2 = XO1 + THICK * LB, XR = 860;
  const YU = 220, YD = 390, SX1 = 960, SX2 = 1340, YS = 305;

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
    const n = nS.v, dN = THICK * (n - NB) / NB, light = spectral(546), OB = F.ref('object'), BG = F.ref('background');
    const frac = dN - Math.floor(dN), off = Math.min(frac, 1 - frac);
    const bright = Math.pow(Math.cos(Math.PI * dN), 2);
    const verdict = off < 0.02 ? '所以它的光与背景的光同步射出，两者相加得到明亮的和'
      : off < 0.12 ? `所以它的光射出时与背景的光错开 ${fmt(off, 2)} 个波长，两者相加仍得到明亮的和`
      : off > 0.4 ? `所以它的光射出时与背景的光几乎错开半个波长，两者相互抵消`
      : `所以它的光射出时与背景的光错开 ${fmt(off, 2)} 个波长，它们的和较暗`;
    topline(ctx, `一个折射率为 ${fmt(n, 3)}、位于水中、厚三个波长的物体，比它旁边的背景多容纳 ${fmt(dN, 2)} 个波长，${verdict}。`);

    ctx.save(); ctx.fillStyle = alpha(BG, 0.1); ctx.fillRect(XL, 140, XR - XL, 330); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(OB, 0.25); ctx.fillRect(XO1, YD - 70, XO2 - XO1, 140); ctx.restore();
    ctx.save(); ctx.strokeStyle = OB; ctx.lineWidth = 2; ctx.strokeRect(XO1, YD - 70, XO2 - XO1, 140); ctx.restore();
    text(ctx, `背景，n = ${fmt(NB, 3)}`, (XL + XO1) / 2 - 10, 166, BG, { size: 19, align: 'center' });
    text(ctx, `物体，n = ${fmt(n, 3)}`, (XO1 + XO2) / 2, YD + 98, OB, { size: 19, align: 'center' });

    const up = (x) => (x - XL) / LB, down = (x) => phaseDown(x, n);
    wave(ctx, XL, XR, YU, A, up, light, 5);
    wave(ctx, XL, XR, YD, A, down, light, 5);
    hbracket(ctx, XO1, XO2, YU - A - 26, C('position'), '三个波长');

    const endU = up(XR), endD = down(XR);
    const shiftU = (x) => endU + (x - SX1) / LB, shiftD = (x) => endD + (x - SX1) / LB;
    const sumAmp = 2 * A * Math.abs(Math.cos(Math.PI * dN));
    const sumPh = (x) => (shiftU(x) + shiftD(x)) / 2 + (Math.cos(Math.PI * dN) < 0 ? 0.5 : 0);
    line(ctx, (XR + SX1) / 2, 140, (XR + SX1) / 2, 470, alpha(PAL.ink, 0.25), 2, [4, 8]);
    text(ctx, '叠加', (SX1 + SX2) / 2, 166, PAL.ink, { size: 19, align: 'center' });
    wave(ctx, SX1, SX2, YS, A, shiftU, alpha(light, 0.5), 3);
    wave(ctx, SX1, SX2, YS, A, shiftD, alpha(light, 0.5), 3, [8, 8]);
    wave(ctx, SX1, SX2, YS, sumAmp, sumPh, light, 6);

    const sw = 120, sy = 430;
    ctx.save();
    ctx.fillStyle = F.shown.facts ? F.fact('#000') : PAL.soft; ctx.fillRect(SX1, sy, sw, 50); ctx.fillRect(SX2 - sw, sy, sw, 50);
    ctx.globalAlpha = 1; ctx.fillStyle = light; ctx.fillRect(SX1, sy, sw, 50);
    ctx.globalAlpha = bright; ctx.fillRect(SX2 - sw, sy, sw, 50);
    ctx.restore();
    text(ctx, '背景', SX1 + sw / 2, sy + 76, BG, { size: 18, align: 'center' });
    text(ctx, '物体', SX2 - sw / 2, sy + 76, OB, { size: 18, align: 'center' });

    current = [
      { x: (XL + XO1) / 2, y: YU, r: 30, name: '穿过背景的光线' },
      { x: (XO1 + XO2) / 2, y: YD, r: 30, name: `穿过物体的光线，在物体内共有 ${fmt(THICK * n / NB, 2)} 个波长` },
      { x: (SX1 + SX2) / 2, y: YS, r: 40, name: `叠加后的两条光线，亮度为两条同相光线的 ${fmt(100 * bright, 0)}%` },
      { x: SX2 - sw / 2, y: sy + 25, r: 40, name: `背景衬托下所见的物体，亮度为 ${fmt(100 * bright, 0)}%` }
    ];
    readout(d.readout, `\\Delta N = 3\\,\\frac{n - ${fmt(NB, 3)}}{${fmt(NB, 3)}} = 3\\,\\frac{${fmt(n, 3)} - ${fmt(NB, 3)}}{${fmt(NB, 3)}} = ${fmt(dN, 2)}`,
      `两条光线到达时的相位差为 ${fmt(360 * off, 0)}°，所以物体看起来的亮度是背景的 ${fmt(100 * bright, 0)}%。`);
  }
  hover(d.stage, () => current);
  register(d.fig, { update: () => {}, draw });
})();
};
