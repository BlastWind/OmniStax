/* Figures for section 27.7 Thin Film Interference. Position carries the
   wavelength, the wavelength in the film, the film's thickness and the spacer
   under the slides. The indices are untyped and in ink. Ray 1, ray 2 and the
   film of Figure 27.33 and the two slides and the spacer of Figure 27.34 are
   the section's referents. Light is drawn in the colour of its wavelength by
   spectral(), a film in white light in the colour it reflects, and the ground
   of the slides seen from above black, all facts through F.fact; with facts
   off a colour of light falls back to ink at its brightness. Every figure is a
   state of its controls and registers no cycle. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, text, topline, label, hbracket, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const nb = el('small', null, small); host.appendChild(nb); F.renderMath(nb); } }

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
/* a colour of light given as sRGB components, through the Facts switch: with facts off, ink at its brightness */
const lightFill = ([r, g, b], a = 1) => (F.shown.facts ? F.fact(`rgba(${r}, ${g}, ${b}, ${a})`) : alpha(PAL.ink, a * Math.max(r, g, b) / 255));

/* the colour white light takes on when each wavelength is reflected in the share refl(λ) */
const WHITE = (() => { const s = [0, 0, 0]; for (let l = 380; l <= 750; l += 5) spectralRGB(l).forEach((v, i) => { s[i] += v; }); return s; })();
function whiteRGB(refl) {
  const s = [0, 0, 0];
  for (let l = 380; l <= 750; l += 5) { const R = refl(l); spectralRGB(l).forEach((v, i) => { s[i] += v * R; }); }
  return s.map((v, i) => Math.round(clamp((255 * 1.6 * v) / WHITE[i], 0, 255)));
}

/* =====================================================================
   Figure 27.33 · sim-thin-film
   Light meets a film of index n2 between media n1 and n3. The film is drawn
   0.3 units per nanometre thick and the rays 25° from the normal so they
   part; the path difference is 2t, taken at perpendicular incidence. Ray 2
   falls behind ray 1 by s = 2t/λn plus half a wavelength for each shifted
   reflection it carries that ray 1 does not. Still.
===================================================================== */
(function () {
  const d = sim('sim-thin-film', 640);
  const FILMS = {
    bubble: { n: [1.0, 1.333, 1.0], name: 'A soap bubble', mat: 'soap film', lo: 'air' },
    coating: { n: [1.0, 1.38, 1.52], name: 'A magnesium fluoride coating', mat: 'magnesium fluoride', lo: 'glass' },
    oil: { n: [1.0, 1.4, 1.333], name: 'An oil film', mat: 'oil', lo: 'water' },
  };
  const film = F.select(d.controls, { label: '\\text{film}', options: [{ value: 'bubble', label: 'soap bubble' }, { value: 'coating', label: 'lens coating' }, { value: 'oil', label: 'oil on water' }], value: 'bubble', aria: 'which film the light meets' });
  const th = ctl(d.controls, { label: '\\ktfilm', cls: 'position', min: 0, max: 700, step: 1, value: 122, unit: 'nm', dec: 0, aria: 'the thickness of the film' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 650, unit: 'nm', dec: 0, aria: 'the wavelength of the light in a vacuum', detents: [{ v: 450, label: '450' }, { v: 550, label: '550' }, { v: 650, label: '650' }] });
  const TOP = 330, PX = 250, A = (25 * Math.PI) / 180, WAVE = { l: 830, r: 1340, k: 200 }, ROWS = [170, 280, 400];

  function draw() {
    const { ctx } = begin(d.c);
    const F0 = FILMS[film.value], [n1, n2, n3] = F0.n, t = th.v, L = lam.v, ln = L / n2;
    const sh1 = n2 > n1, sh2 = n3 > n2;
    const shiftOf = (l) => (2 * t * n2) / l + (sh2 ? 0.5 : 0) - (sh1 ? 0.5 : 0);
    const s = shiftOf(L), fr = s - Math.round(s), col = spectral(L), PC = C('position');
    const verdict = Math.abs(fr) < 0.05 ? 'con' : Math.abs(fr) > 0.45 ? 'des' : 'part';
    topline(ctx, verdict === 'con'
      ? `${F0.name} ${fmt(t, 0)} nm thick reflects ${fmt(L, 0)}-nm light constructively, since ray 2 falls behind ray 1 by a whole number of wavelengths in all.`
      : verdict === 'des'
        ? `${F0.name} ${fmt(t, 0)} nm thick cancels the reflection of ${fmt(L, 0)}-nm light, since ray 2 falls behind ray 1 by a half-integral number of wavelengths.`
        : `${F0.name} ${fmt(t, 0)} nm thick reflects ${fmt(L, 0)}-nm light only in part, since ray 2 falls ${fmt(s, 2)} wavelengths behind ray 1.`);

    const h = 0.3 * t, BOT = TOP + h;
    ctx.save();
    ctx.fillStyle = alpha(F.ref('film'), 0.1); ctx.fillRect(60, TOP, 600, h);
    ctx.fillStyle = alpha(PAL.ink, 0.14); ctx.fillRect(60, BOT, 600, 620 - BOT);
    ctx.restore();
    line(ctx, 60, TOP, 660, TOP, F.ref('film'), 2);
    line(ctx, 60, BOT, 660, BOT, F.ref('film'), 2);
    text(ctx, `air, n₁ = ${fmt(n1, 2)}`, 650, h > 34 ? TOP - 24 : TOP - 46, PAL.ink, { size: 18, align: 'right' });
    if (h > 34) text(ctx, `${F0.mat}, n₂ = ${fmt(n2, n2 === 1.333 ? 3 : 2)}`, 650, TOP + h / 2, F.ref('film'), { size: 18, align: 'right' });
    else text(ctx, `${F0.mat}, n₂ = ${fmt(n2, n2 === 1.333 ? 3 : 2)}`, 650, TOP + h / 2, F.ref('film'), { size: 17, align: 'right', bg: PAL.panel });
    text(ctx, `${F0.lo}, n₃ = ${fmt(n3, n3 === 1.333 ? 3 : 2)}`, 650, Math.min(BOT + 30, 600), PAL.ink, { size: 18, align: 'right' });

    const b = Math.asin((n1 * Math.sin(A)) / n2), up = 170, ta = Math.tan(A);
    const p1 = { x: PX, y: TOP }, p2 = { x: PX + h * Math.tan(b), y: BOT }, p3 = { x: PX + 2 * h * Math.tan(b), y: TOP };
    line(ctx, p1.x - up * ta, TOP - up, p1.x, p1.y, col, 5);
    arrow(ctx, p1.x - up * ta, TOP - up, p1.x - 0.45 * up * ta, TOP - 0.45 * up, col, 5);
    arrow(ctx, p1.x, p1.y, p1.x + up * ta, TOP - up, col, 5);
    ctx.save(); ctx.setLineDash([12, 9]);
    line(ctx, p1.x, p1.y, p2.x, p2.y, col, 4);
    line(ctx, p2.x, p2.y, p3.x, p3.y, col, 4);
    line(ctx, p3.x, p3.y, p3.x + up * ta, TOP - up, col, 4);
    ctx.restore();
    label(ctx, 'incident light', p1.x - up * ta, TOP - up, { side: 'left', size: 19, color: PAL.ink, gap: 14 });
    label(ctx, 'ray 1', p1.x + up * ta, TOP - up, { side: 'left', size: 19, color: F.ref('ray-1'), gap: 16 });
    label(ctx, 'ray 2', p3.x + up * ta, TOP - up, { side: 'right', size: 19, color: F.ref('ray-2'), gap: 16 });
    label(ctx, sh1 ? 'λ/2 shift' : 'no shift', p1.x, p1.y, { side: 'left', size: 17, color: PAL.muted, gap: 22 });
    label(ctx, sh2 ? 'λ/2 shift' : 'no shift', p2.x, Math.max(p2.y, TOP + 30), { side: 'below', size: 17, color: PAL.muted, gap: 22 });
    if (h > 18) vbracket(ctx, 700, TOP, BOT, PC, 't', 1, { size: 22 });

    const k = (2 * Math.PI) / WAVE.k, amp = 34;
    const ph1 = sh1 ? Math.PI : 0, ph2 = ph1 - 2 * Math.PI * s;
    const wave = (y0, f, c, w, dash) => {
      ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
      for (let x = WAVE.l; x <= WAVE.r; x += 3) { const y = y0 - f(x - WAVE.l); x === WAVE.l ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      ctx.stroke(); ctx.restore();
    };
    ROWS.forEach((y) => line(ctx, WAVE.l, y, WAVE.r, y, alpha(PAL.ink, 0.25), 1.5));
    wave(ROWS[0], (x) => amp * Math.sin(k * x + ph1), col, 4);
    wave(ROWS[1], (x) => amp * Math.sin(k * x + ph2), col, 4, [12, 9]);
    wave(ROWS[2], (x) => amp * (Math.sin(k * x + ph1) + Math.sin(k * x + ph2)), col, 5);
    text(ctx, 'ray 1', WAVE.l - 16, ROWS[0], F.ref('ray-1'), { size: 19, align: 'right' });
    text(ctx, 'ray 2', WAVE.l - 16, ROWS[1], F.ref('ray-2'), { size: 19, align: 'right' });
    text(ctx, 'sum', WAVE.l - 16, ROWS[2], PAL.ink, { size: 19, align: 'right' });

    ctx.save(); ctx.fillStyle = lightFill(whiteRGB((l) => Math.pow(Math.cos(Math.PI * shiftOf(l)), 2))); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2;
    ctx.fillRect(WAVE.l, 520, WAVE.r - WAVE.l, 56); ctx.strokeRect(WAVE.l, 520, WAVE.r - WAVE.l, 56); ctx.restore();
    text(ctx, 'the film in white light', (WAVE.l + WAVE.r) / 2, 500, PAL.muted, { size: 17, align: 'center' });

    const why = sh1 && sh2 ? 'Both rays are shifted by $\\klam/2$ on reflection, so the shifts cancel'
      : sh1 ? 'Ray 1 is shifted by $\\klam/2$ on reflection and ray 2 is not'
        : sh2 ? 'Ray 2 is shifted by $\\klam/2$ on reflection and ray 1 is not' : 'Neither ray is shifted on reflection';
    readout(d.readout, `2\\ktfilm = 2(${fmt(t, 0)}\\ \\text{nm}) = ${fmt((2 * t) / ln, 2)}\\,\\klamn`,
      `In the film $\\klamn = \\klam/n_2 = ${fmt(ln, 0)}\\ \\text{nm}$. ${why}, so the total shift is ${fmt(s, 2)} wavelengths: ${verdict === 'con' ? 'constructive' : verdict === 'des' ? 'destructive' : 'neither fully constructive nor destructive'}.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.34 · sim-air-wedge
   Two slides 75.0 mm long touch at the left and rest on a spacer h thick at
   the right. At x mm from the contact the air is t = h x / 75 thick, and the
   reflection, with its one shift at the lower slide, goes as sin²(2πt/λ).
   The strip is drawn 16 units per millimetre; the cross section's thickness
   8 units per micrometre, 500 times the horizontal scale. Still.
===================================================================== */
(function () {
  const d = sim('sim-air-wedge', 590);
  const light = choice(d.controls, { label: '\\text{light}', options: [{ value: 'pure', label: 'pure wavelength' }, { value: 'white', label: 'white' }], value: 'pure', aria: 'the light the slides are seen in' });
  const sp = ctl(d.controls, { label: '\\text{spacer}', cls: 'position', min: 1, max: 15, step: 0.1, value: 5, unit: 'μm', dec: 1, aria: 'the thickness of the spacer under one end of the top slide' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 589, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: [{ v: 450, label: '450' }, { v: 589, label: '589' }, { v: 700, label: '700' }] });
  const X0 = 100, X1 = 1300, LEN = 75, S = { t: 150, b: 240 }, BASE = 480, KV = 8;
  const xOf = (mm) => X0 + ((X1 - X0) * mm) / LEN;

  function draw() {
    const { ctx } = begin(d.c);
    const white = light.value === 'white', hs = sp.v, L = lam.v, PC = C('position');
    lam.disable(white);
    const tAt = (mm) => (hs * 1000 * mm) / LEN;
    const dx = (L / 2 / (hs * 1000)) * LEN;
    topline(ctx, white
      ? `In white light the colors repeat from violet to red, then wash out as the air grows thicker.`
      : `Dark bands of ${fmt(L, 0)}-nm light lie ${fmt(dx, 2)} mm apart on slides 7.50 cm long held ${fmt(hs, 1)} μm apart at one end.`);

    ctx.save(); ctx.fillStyle = F.shown.facts ? F.fact('#000') : PAL.soft; ctx.fillRect(X0, S.t, X1 - X0, S.b - S.t);
    const rgb = spectralRGB(L);
    for (let x = X0; x < X1; x += 2) {
      const t = tAt(((x + 1 - X0) / (X1 - X0)) * LEN);
      if (white) ctx.fillStyle = lightFill(whiteRGB((l) => Math.pow(Math.sin((2 * Math.PI * t) / l), 2)));
      else ctx.fillStyle = lightFill(rgb, Math.pow(Math.sin((2 * Math.PI * t) / L), 2));
      ctx.fillRect(x, S.t, 2.5, S.b - S.t);
    }
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(X0, S.t, X1 - X0, S.b - S.t); ctx.restore();
    text(ctx, 'the slides seen from above', (X0 + X1) / 2, S.t - 22, PAL.muted, { size: 17, align: 'center' });

    const gap = hs * KV, topY = (x) => BASE - (gap * (x - X0)) / (X1 - X0);
    const TS = F.ref('top-slide'), BS = F.ref('bottom-slide'), SPC = F.ref('spacer');
    ctx.save(); ctx.lineWidth = 3;
    ctx.fillStyle = alpha(BS, 0.12); ctx.strokeStyle = BS;
    ctx.beginPath(); ctx.rect(X0, BASE, X1 - X0, 30); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(TS, 0.12); ctx.strokeStyle = TS;
    ctx.beginPath(); ctx.moveTo(X0, BASE); ctx.lineTo(X1, BASE - gap); ctx.lineTo(X1, BASE - gap - 30); ctx.lineTo(X0, BASE - 30); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = SPC; ctx.fillRect(X1 - 14, BASE - gap, 10, gap); ctx.restore();
    label(ctx, 'top slide', xOf(20), topY(xOf(20)) - 30, { side: 'above', size: 19, color: TS, gap: 12 });
    label(ctx, 'bottom slide', xOf(20), BASE + 30, { side: 'below', size: 19, color: BS, gap: 12 });
    label(ctx, 'spacer', X1 - 9, BASE + 30, { side: 'below', size: 19, color: SPC, gap: 16 });
    label(ctx, 'slides touch', X0, BASE, { side: 'left', size: 17, color: PAL.muted, gap: 14 });
    vbracket(ctx, X1 + 30, BASE - gap, BASE, PC, '', 1);

    if (!white) {
      const px = xOf(dx) - X0;
      if (px > 14) {
        for (let m = 1; xOf(m * dx) < X1 - 4; m++) line(ctx, xOf(m * dx), S.b, xOf(m * dx), topY(xOf(m * dx)), alpha(PAL.ink, 0.28), 1.5, [4, 7]);
      }
      if (px > 60) hbracket(ctx, xOf(dx), xOf(2 * dx), S.b + 42, PC, `${fmt(dx, 2)} mm`);
      readout(d.readout, `\\Delta\\ktfilm = \\frac{\\klam}{2} = \\frac{${fmt(L, 0)}\\ \\text{nm}}{2} = ${fmt(L / 2, 0)}\\ \\text{nm}`,
        'The cross section is drawn 500 times thicker than it is.');
    } else {
      readout(d.readout, `\\Delta\\ktfilm = \\frac{\\klam}{2} = 190\\text{ to }375\\ \\text{nm}`,
        'Each color repeats at its own spacing, so the colors blur into one another as the air grows thicker. The cross section is drawn 500 times thicker than it is.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
