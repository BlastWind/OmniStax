/* Figures for section 27.5 Single Slit Diffraction. Position carries the
   wavelength and the slit width, and angle every angle. sin θ, the order m and
   the relative intensity are untyped and in ink. The slit of Figure 27.22 is
   the section's referent. Light is drawn in the colour of its wavelength by
   spectral(), and the strip where the pattern is seen is black, both facts
   through F.fact. Both figures are states of their sliders and register no
   cycle. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, text, topline, label, angleArc, axes, pinned, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

/* the colour a wavelength in nanometres is seen as, as sRGB components */
function spectralRGB(lam) {
  let r = 0, g = 0, b = 0;
  if (lam < 440) { r = (440 - lam) / 60; b = 1; }
  else if (lam < 490) { g = (lam - 440) / 50; b = 1; }
  else if (lam < 510) { g = 1; b = (510 - lam) / 20; }
  else if (lam < 580) { r = (lam - 510) / 70; g = 1; }
  else if (lam < 645) { r = 1; g = (645 - lam) / 65; }
  else r = 1;
  const f = lam < 420 ? 0.3 + (0.7 * (lam - 380)) / 40 : lam > 700 ? 0.3 + (0.7 * (750 - lam)) / 50 : 1;
  const c = (x) => Math.round(255 * Math.pow(clamp(x * f, 0, 1), 0.8));
  return [c(r), c(g), c(b)];
}
const spectral = (lam, a = 1) => { const [r, g, b] = spectralRGB(lam); return F.fact(`rgba(${r}, ${g}, ${b}, ${a})`); };

/* the relative intensity of a single slit of width D toward sin θ = s */
function singleSlit(s, D, lam) {
  const beta = (Math.PI * D * s) / lam;
  return Math.abs(beta) < 1e-6 ? 1 : Math.pow(Math.sin(beta) / beta, 2);
}
const LAM_DETENTS = [{ v: 450, label: '450' }, { v: 550, label: '550' }, { v: 633, label: '633' }];

/* the curve of f six times higher, clipped to the box as the book clips it */
function tallCurve(ctx, box, f, t0, t1, X, Y, color) {
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.setLineDash([10, 8]); curve(ctx, (t) => 6 * f(t), t0, t1, X, Y, color, 3, 600);
  ctx.restore();
}

/* =====================================================================
   Figure 27.21 + 27.23 · sim-single-slit-pattern
   Relative intensity against sin θ from −1 to 1 (fixed), the true curve and
   the same curve six times higher, and beneath it the pattern as seen on the
   same axis. Still.
===================================================================== */
(function () {
  const d = sim('sim-single-slit-pattern', 620);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 633, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const wS = ctl(d.controls, { label: '\\kDslit', cls: 'position', min: 1, max: 10, step: 0.01, value: 2.5, unit: 'μm', dec: 2, aria: 'the width of the slit' });
  const box = { l: 150, r: 1300, t: 150, b: 420 }, SY0 = 490, SY1 = 560;

  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, D = wS.v, lm = L / 1000, s1 = lm / D, col = spectral(L), PC = C('position');
    topline(ctx, s1 <= 1
      ? `Light of ${fmt(L, 0)} nm through a slit ${fmt(D, 2)} μm wide has its first minima at sin θ = ±${fmt(s1, 3)}, and the central maximum is twice as wide as the others.`
      : `Light of ${fmt(L, 0)} nm through a slit ${fmt(D, 2)} μm wide spreads into a central maximum with no minimum at all.`);
    const { X, Y } = axes(ctx, box, [-1, 1], [0, 1], { nx: 4, ny: 2, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1), xl: 'sin θ', yl: 'relative intensity' });
    const f = (s) => singleSlit(s, D, lm);
    tallCurve(ctx, box, f, -1, 1, X, Y, alpha(col, 0.8));
    curve(ctx, f, -1, 1, X, Y, col, 5, 800);
    const sm = 1.5 * s1;
    if (sm < 0.95) label(ctx, '× 6', X(sm), Y(Math.min(0.92, 6 * f(sm))), { side: 'above', size: 20, color: PAL.ink, gap: 14 });

    const px = (box.r - box.l) / 2 * s1;
    for (let m = 1; m * s1 <= 1 && px >= 25; m++) {
      [1, -1].forEach((sg) => {
        const x = X(sg * m * s1);
        line(ctx, x, box.b, x, box.b - 16, PC, 3);
        if (m <= 3 && px > 70) text(ctx, `${sg < 0 ? '−' : ''}${m === 1 ? '' : m}λ/D`, x, box.b - 30, PC, { size: 17, align: 'center', weight: 600, bg: PAL.panel });
      });
    }

    ctx.save(); ctx.fillStyle = F.shown.facts ? F.fact('#000') : PAL.soft; ctx.fillRect(box.l, SY0, box.r - box.l, SY1 - SY0); ctx.restore();
    for (let x = box.l; x < box.r; x += 1.5) {
      const s = -1 + (2 * (x - box.l)) / (box.r - box.l), I = f(s);
      if (I > 0.002) { ctx.save(); ctx.fillStyle = spectral(L, Math.min(1, 1.6 * Math.pow(I, 0.4))); ctx.fillRect(x, SY0 + 8, 1.8, SY1 - SY0 - 16); ctx.restore(); }
    }
    text(ctx, 'as seen', box.l - 14, (SY0 + SY1) / 2, PAL.muted, { size: 17, align: 'right' });

    const th1 = s1 <= 1 ? Math.asin(s1) / RAD : null;
    readout(d.readout, th1 !== null
      ? `\\kDslit\\sin\\ktheta_1 = \\klam:\\quad \\sin\\ktheta_1 = \\frac{${fmt(L, 0)}\\ \\text{nm}}{${fmt(D, 2)}\\ \\mu\\text{m}} = ${fmt(s1, 3)},\\quad \\ktheta_1 = ${fmt(th1, 1)}^\\circ`
      : `\\kDslit\\sin\\ktheta_1 = \\klam \\ \\text{asks}\\ \\sin\\ktheta_1 = \\frac{${fmt(L, 0)}\\ \\text{nm}}{${fmt(D, 2)}\\ \\mu\\text{m}} = ${fmt(s1, 3)} > 1`,
      th1 !== null ? `The central maximum spreads ${fmt(th1, 1)}° on either side of the beam, ${fmt(2 * th1, 1)}° in all.` : 'No angle has a sine greater than 1, so the slit, narrower than the wavelength, makes no minimum.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.22 + 27.24 · sim-slit-rays
   Parallel rays leave every part of one slit at the angle θ. The slit is
   drawn 220 units tall whatever its width, and the wavelength to the same
   scale, so the extra path D sin θ of the bottom ray is true against λ. The
   graph beside is relative intensity against θ from 0 to 60° (fixed). Still.
===================================================================== */
(function () {
  const d = sim('sim-slit-rays', 640);
  let lam = { v: 550 }, wS = { v: 1.56 };
  const TMAX = 60;
  const specials = [
    ...Array.from({ length: 14 }, (_, k) => ({ at: () => { const s = ((k + 1) * lam.v / 1000) / wS.v; return s <= Math.sin(TMAX * RAD) ? Math.asin(s) / RAD : null; } })),
    { at: () => { const s = (1.5 * lam.v / 1000) / wS.v; return s <= Math.sin(TMAX * RAD) ? Math.asin(s) / RAD : null; } },
  ];
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: TMAX, step: 0.1, value: 45, unit: '°', dec: 1, aria: 'the angle of the rays from the original direction of the light', specials });
  lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 550, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  wS = ctl(d.controls, { label: '\\kDslit', cls: 'position', min: 1, max: 5, step: 0.01, value: 1.56, unit: 'μm', dec: 2, aria: 'the width of the slit' });
  const XB = 220, YC = 480, HS = 220, LEN = 250, NR = 7;
  const box = { l: 830, r: 1320, t: 170, b: 520 };

  function draw() {
    const { ctx } = begin(d.c);
    const t = th.v * RAD, L = lam.v, D = wS.v, lm = L / 1000;
    const dl = D * Math.sin(t), n = dl / lm, col = spectral(L), PC = C('position');
    const dark = n >= 0.99 && Math.abs(n - Math.round(n)) < 0.01, center = n < 0.01;
    const bright = Math.abs(n - 1.5) < 0.01;
    topline(ctx, center
      ? 'Straight ahead every ray from the slit travels the same distance, so all arrive in phase and the central maximum is bright.'
      : dark
        ? `Toward θ = ${fmt(th.v, 1)}° the ray from the bottom of the slit travels ${fmt(n, 2)} wavelengths farther than the ray from the top, so every ray has a partner that cancels it and the screen is dark.`
        : bright
          ? `Toward θ = ${fmt(th.v, 1)}° the rays from the top and bottom differ by 1.50 wavelengths, so most rays have a partner in phase and a dimmer maximum appears.`
          : `Toward θ = ${fmt(th.v, 1)}° the ray from the bottom of the slit travels ${fmt(n, 2)} wavelengths farther than the ray from the top.`);

    const top = YC - HS / 2, bot = YC + HS / 2, ux = Math.cos(t), uy = -Math.sin(t);
    ctx.save(); ctx.fillStyle = F.ref('slit');
    ctx.fillRect(XB - 8, 110, 16, top - 110); ctx.fillRect(XB - 8, bot, 16, 620 - bot); ctx.restore();
    for (let i = 0; i < 4; i++) { const y = top + (HS * (i + 0.5)) / 4; line(ctx, 70, y, XB - 14, y, col, 3); }
    line(ctx, XB, YC, XB + 480, YC, alpha(PAL.ink, 0.35), 2, [4, 8]);

    const px = HS / D, extra = HS * Math.sin(t);
    for (let i = 0; i < NR; i++) {
      const y0 = top + (HS * i) / (NR - 1), len = LEN + (extra * i) / (NR - 1);
      line(ctx, XB, y0, XB + ux * len, y0 + uy * len, col, i === 0 || i === NR - 1 ? 4 : 2.5);
    }
    const Fp = { x: XB + ux * extra, y: bot + uy * extra };
    line(ctx, XB, top, Fp.x, Fp.y, alpha(PAL.ink, 0.6), 2.5, [10, 10]);
    if (extra > 3) {
      line(ctx, XB, bot, Fp.x, Fp.y, PC, 7);
      const lpx = lm * px;
      for (let k = 1; k * lpx <= extra + 0.5; k++) {
        const q = { x: XB + ux * k * lpx, y: bot + uy * k * lpx };
        line(ctx, q.x + uy * 12, q.y - ux * 12, q.x - uy * 12, q.y + ux * 12, PAL.ink, 3);
      }
      label(ctx, 'D sin θ', (XB + Fp.x) / 2, (bot + Fp.y) / 2, { side: 'right', size: 22, color: PC, gap: 20 });
    }
    F.vbracket(ctx, XB - 34, top, bot, PC, 'D', -1, { size: 22 });
    if (t > 0.03) angleArc(ctx, { x: XB, y: bot }, Math.max(110, extra + 70), 0, t, 'θ', undefined, C('angle'));
    label(ctx, 'toward a distant screen', XB + ux * LEN, top + uy * LEN, { side: 'right', size: 17, color: PAL.muted, gap: 16 });

    const f = (deg) => singleSlit(Math.sin(deg * RAD), D, lm);
    const { X, Y } = axes(ctx, box, [0, TMAX], [0, 1], { nx: 6, ny: 2, fx: (v) => `${fmt(v, 0)}°`, fy: (v) => fmt(v, 1), xl: 'θ', xc: C('angle'), yl: 'relative intensity' });
    tallCurve(ctx, box, f, 0, TMAX, X, Y, alpha(col, 0.8));
    curve(ctx, f, 0, TMAX, X, Y, col, 5, 400);
    line(ctx, X(th.v), box.b, X(th.v), Y(f(th.v)), alpha(PAL.ink, 0.4), 2, [4, 8]);
    pinned(ctx, box, X, Y, th.v, f(th.v), PAL.ink);
    const s15 = (1.5 * lm) / D;
    if (s15 < Math.sin(55 * RAD)) { const a = Math.asin(s15) / RAD; label(ctx, '× 6', X(a), Y(Math.min(0.92, 6 * f(a))), { side: 'above', size: 20, color: PAL.ink, gap: 14 }); }

    readout(d.readout, `\\kDslit\\sin\\ktheta = (${fmt(D, 2)}\\ \\mu\\text{m})\\sin ${fmt(th.v, 1)}^\\circ = ${fmt(dl * 1000, 0)}\\ \\text{nm} = ${fmt(n, 2)}\\,\\klam`,
      dark ? `A minimum of order m = ${Math.round(n)}.` : undefined);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
