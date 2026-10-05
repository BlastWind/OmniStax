/* Figures for section 27.4 Multiple Slit Diffraction. Position carries the
   wavelength, the slit separation, the path difference, the distance to the
   screen and the positions along it, and angle every angle. The order m and
   the number of slits are untyped and in ink, and the brightness graphs are
   relative, so intensity is not drawn. The screen, the double slit and the
   grating are the section's referents. Light is drawn in the colour of its
   wavelength by spectral(); white light is white on the black ground of the
   screen as seen, both facts through F.fact, and muted on the page, since the
   page itself is its background. No figure moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, dot, text, topline, label, angleArc, vbracket, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const nb = el('small', null, small); host.appendChild(nb); F.renderMath(nb); } }

const RAD = Math.PI / 180, TAU = 2 * Math.PI;
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
  const f = lam < 420 ? 0.3 + (0.7 * (lam - 380)) / 40 : lam > 700 ? 0.3 + (0.7 * (780 - lam)) / 80 : 1;
  const c = (x) => Math.round(255 * Math.pow(clamp(x * f, 0, 1), 0.8));
  return [c(r), c(g), c(b)];
}
const spectral = (lam, a = 1) => { const [r, g, b] = spectralRGB(lam); return F.fact(`rgba(${r}, ${g}, ${b}, ${a})`); };
const LAM_DETENTS = [{ v: 450, label: '450' }, { v: 633, label: '633' }];

/* =====================================================================
   Figure 27.16 + 27.20 · sim-grating-spectrum
   The grating at the left and the screen a distance x from it, drawn at one
   scale of 110 units to the metre in both directions, so every angle is true;
   2.6 m either side of the center of the screen is drawn. Beside it, the
   screen as seen, and a graph of the angle of each order against the
   wavelength, 380 to 760 nm across and 0 to 90° up, fixed. Still.
===================================================================== */
(function () {
  const d = sim('sim-grating-spectrum', 720);
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.8, max: 5, step: 0.01, value: 1, unit: 'μm', dec: 2, aria: 'the distance between neighboring lines of the grating',
    detents: [{ v: 1, label: '10,000/cm' }, { v: 5, label: '2000/cm' }] });
  const xS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.5, max: 2.5, step: 0.01, value: 2, unit: 'm', dec: 2, aria: 'the distance from the grating to the screen' });
  const light = F.select(d.controls, { label: 'light', options: [{ value: 'white', label: 'white' }, { value: '633', label: '633 nm' }, { value: '450', label: '450 nm' }], value: 'white', aria: 'the light sent through the grating' });
  const UPM = 110, XG = 110, YC = 384, YR = 2.6, SX0 = 480, SX1 = 548;
  const Yof = (y) => YC - y * UPM, TOP = Yof(YR), BOT = Yof(-YR);
  const GB = { l: 700, r: 1330, t: 120, b: 600 };

  function draw() {
    const { ctx } = begin(d.c);
    const D = dS.v, x = xS.v, white = light.value === 'white', L0 = white ? 0 : +light.value, PC = C('position');
    const XSC = XG + x * UPM, perCm = 1e4 / D;
    const lams = white ? Array.from({ length: 39 }, (_, i) => 380 + i * 10) : [L0];
    const mMax = Math.floor(D * 1000 / (white ? 380 : L0));
    const yAt = (m, lam) => { const s = (m * lam) / (D * 1000); return Math.abs(s) < 1 ? x * Math.tan(Math.asin(s)) : null; };

    const yV = yAt(1, 380), yR = yAt(1, 760);
    const lines = `${Math.round(perCm).toLocaleString('en-US')} lines per centimeter`;
    if (white) topline(ctx, yR !== null
      ? `White light through a grating with ${lines} spreads its first-order rainbow from ${fmt(yV, 3)} m to ${fmt(yR, 3)} m along a screen ${fmt(x, 2)} m away.`
      : `White light through a grating with ${lines} bends its first order so far that only wavelengths up to ${fmt(D * 1000, 0)} nm leave the grating at all.`);
    else topline(ctx, `Light of ${L0} nm through a grating with ${lines} ${mMax === 1 ? 'makes one bright line' : `makes a bright line in each of ${mMax} orders`} on either side of the center.`);

    ctx.save(); ctx.beginPath(); ctx.rect(XG, TOP, XSC - XG, BOT - TOP); ctx.clip();
    for (let m = -mMax; m <= mMax; m++) {
      if (m === 0) continue;
      lams.forEach((lam) => {
        const s = (m * lam) / (D * 1000); if (Math.abs(s) >= 1) return;
        const t = Math.asin(s);
        line(ctx, XG, YC, XG + 3000 * Math.cos(t), YC - 3000 * Math.sin(t), spectral(lam, white ? 0.55 : 1), white ? 2 : 3);
      });
    }
    line(ctx, XG, YC, XSC, YC, white ? PAL.muted : spectral(L0), 3);
    ctx.restore();
    F.arrow(ctx, 20, YC, XG - 10, YC, white ? PAL.muted : spectral(L0), 4);

    ctx.save(); ctx.fillStyle = F.ref('grating');
    for (let k = -8; k <= 8; k++) ctx.fillRect(XG - 6, YC + k * 12 - 4, 12, 7);
    ctx.fillRect(XG - 6, TOP + 60, 12, YC - 100 - TOP - 60); ctx.fillRect(XG - 6, YC + 100, 12, BOT - 60 - YC - 100);
    ctx.restore();
    line(ctx, XSC, TOP, XSC, BOT, F.ref('screen'), 3);
    text(ctx, 'grating', XG, TOP + 34, F.ref('grating'), { size: 18, align: 'center' });
    text(ctx, 'screen', XSC + 10, TOP + 10, F.ref('screen'), { size: 17, align: 'left' });

    ctx.save(); ctx.fillStyle = F.shown.facts ? F.fact('#000') : PAL.soft; ctx.fillRect(SX0, TOP, SX1 - SX0, BOT - TOP); ctx.restore();
    ctx.save(); ctx.fillStyle = F.fact('#fff'); ctx.fillRect(SX0 + 6, YC - 2, SX1 - SX0 - 12, 4); ctx.restore();
    for (let m = -mMax; m <= mMax; m++) {
      if (m === 0) continue;
      lams.forEach((lam, i) => {
        const y = yAt(m, lam); if (y === null || Math.abs(y) > YR) return;
        const yn = white && i < lams.length - 1 ? yAt(m, lam + 10) : null;
        const h = yn === null ? 4 : Math.max(2, Math.abs(yn - y) * UPM + 0.6);
        ctx.save(); ctx.fillStyle = spectral(lam); ctx.fillRect(SX0 + 6, Math.min(Yof(y), yn === null ? Yof(y) - 2 : Yof(yn)), SX1 - SX0 - 12, h); ctx.restore();
      });
    }
    text(ctx, 'as seen', (SX0 + SX1) / 2, BOT + 20, PAL.muted, { size: 17, align: 'center' });
    [0, 1, 2].forEach((m) => {
      if (m > mMax) return;
      const y = m === 0 ? 0 : yAt(m, white ? 570 : L0);
      if (y === null || y > YR - 0.1 || (m > 0 && y * UPM < 26 * m)) return;
      text(ctx, `m = ${m}`, SX1 + 14, Yof(y), PAL.ink, { size: 19 });
    });

    if (white) {
      /* a bracket or an angle too small to hold its name is left to the readout */
      const tV = Math.asin(0.38 / D), showV = yV * UPM >= 36, showR = yR !== null && (Math.min(yR, YR) - (showV ? yV : 0)) * UPM >= 36;
      if (showV) vbracket(ctx, XSC + 22, Yof(yV), YC, PC, 'y_{V}', 1, { size: 20 });
      if (showR) vbracket(ctx, XSC + 62, Yof(Math.min(yR, YR)), YC, PC, 'y_{R}', 1, { size: 20 });
      if (showV) angleArc(ctx, { x: XG, y: YC }, Math.min(70, x * UPM * 0.4), 0, tV, 'θ_{V}', undefined, C('angle'));
      if (showR) angleArc(ctx, { x: XG, y: YC }, Math.min(150, x * UPM * 0.8), 0, Math.asin(0.76 / D), 'θ_{R}', undefined, C('angle'));
    } else {
      const y1 = yAt(1, L0);
      if (y1 !== null && y1 * UPM > 36) {
        vbracket(ctx, XSC + 22, Yof(Math.min(y1, YR)), YC, PC, 'y', 1, { size: 20 });
        angleArc(ctx, { x: XG, y: YC }, Math.min(90, x * UPM * 0.8), 0, Math.asin(L0 / (D * 1000)), 'θ', undefined, C('angle'));
      }
    }
    F.hbracket(ctx, XG, XSC, BOT + 44, PC, `x = ${fmt(x, 2)} m`, { side: 'below', size: 20 });

    /* the angle of each order against the wavelength */
    const { X, Y } = axes(ctx, GB, [380, 760], [0, 90], { xl: 'λ (nm)', xc: PC, yl: 'θ (°)', yc: C('angle'), nx: 4, ny: 3, fx: (v) => fmt(v, 0) });
    for (let m = 1; m <= 14; m++) {
      let prev = null, lab = null;
      for (let lam = 380; lam <= 760; lam += 4) {
        const s = (m * lam) / (D * 1000); if (s >= 1) break;
        const p = [X(lam), Y(Math.asin(s) / RAD)];
        if (prev) line(ctx, prev[0], prev[1], p[0], p[1], spectral(lam), 5);
        prev = p; lab = p;
      }
      if (lab && m <= 3) label(ctx, `m = ${m}`, lab[0], lab[1], { side: lab[0] > GB.r - 60 ? 'above' : 'right', size: 19, color: PAL.ink });
    }
    if (!white) {
      for (let m = 1; m <= mMax; m++) dot(ctx, X(L0), Y(Math.asin((m * L0) / (D * 1000)) / RAD), PAL.ink, true, 8);
      line(ctx, X(L0), GB.t, X(L0), GB.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    }

    if (white) {
      if (yR !== null) readout(d.readout, `\\ky_{\\text{R}} - \\ky_{\\text{V}} = \\kx(\\tan\\ktheta_{\\text{R}} - \\tan\\ktheta_{\\text{V}}) = (${fmt(x, 2)}\\ \\text{m})(\\tan ${fmt(Math.asin(0.76 / D) / RAD, 2)}^\\circ - \\tan ${fmt(Math.asin(0.38 / D) / RAD, 2)}^\\circ) = ${fmt(yR - yV, 2)}\\ \\text{m}`,
        `The angles come from $\\kd\\sin\\ktheta = m\\klam$ with $m = 1$, $\\kd = ${fmt(D, 2)}\\ \\mu\\text{m}$, and $\\klam = 380\\ \\text{nm}$ for violet and $760\\ \\text{nm}$ for red.`);
      else readout(d.readout, `\\ky_{\\text{V}} = \\kx\\tan\\ktheta_{\\text{V}} = (${fmt(x, 2)}\\ \\text{m})\\tan ${fmt(Math.asin(0.38 / D) / RAD, 2)}^\\circ = ${fmt(yV, 3)}\\ \\text{m}`,
        `Red light of 760 nm would need $\\sin\\ktheta = ${fmt(0.76 / D, 2)}$, more than 1, so it has no first-order maximum with lines this close.`);
    } else {
      const t1 = Math.asin(L0 / (D * 1000));
      readout(d.readout, `\\ky = \\kx\\tan\\ktheta = (${fmt(x, 2)}\\ \\text{m})\\tan ${fmt(t1 / RAD, 2)}^\\circ = ${fmt(x * Math.tan(t1), 3)}\\ \\text{m}`,
        `The first-order angle comes from $\\kd\\sin\\ktheta = m\\klam$: $\\sin\\ktheta = (1)(${L0}\\ \\text{nm})/(${fmt(D, 2)}\\ \\mu\\text{m}) = ${fmt(L0 / (D * 1000), 3)}$.`);
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.18 · sim-grating-sharpness
   The relative brightness of one wavelength through a double slit, above, and
   through a grating of N slits with the same separation d = 2.00 μm, below,
   against the angle from −60° to 60°, both fixed from 0 to 1. The patterns
   are the idealized ones the book draws, with no single slit falloff. Still.
===================================================================== */
(function () {
  const d = sim('sim-grating-sharpness', 640);
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 2, max: 30, step: 1, value: 8, unit: '', dec: 0, aria: 'the number of slits in the grating', specials: [{ at: 2, label: 'double slit' }] });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 700, step: 1, value: 600, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const DS = 2.0;
  const B1 = { l: 150, r: 1320, t: 120, b: 270 }, B2 = { l: 150, r: 1320, t: 360, b: 540 };
  function pattern(N, s, L) {
    const phi = (Math.PI * DS * 1000 * s) / L, sn = Math.sin(phi);
    if (Math.abs(sn) < 1e-9) return 1;
    return Math.pow(Math.sin(N * phi) / (N * sn), 2);
  }
  function trace(ctx, box, X, Y, N, L) {
    ctx.save(); ctx.strokeStyle = spectral(L); ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i <= 2400; i++) {
      const th = -60 + (120 * i) / 2400, v = pattern(N, Math.sin(th * RAD), L);
      if (i) ctx.lineTo(X(th), Y(v)); else ctx.moveTo(X(th), Y(v));
    }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const N = Math.round(nS.v), L = lam.v;
    topline(ctx, N === 2
      ? 'With only two slits the grating is a double slit, and the two patterns are the same.'
      : `With ${N} slits the bright lines stand where the double slit’s do, but each is ${fmt(2 / N, 2)} as wide, with ${N - 2} small peaks between neighbors.`);
    const a1 = axes(ctx, B1, [-60, 60], [0, 1], { yl: 'double slit', yc: F.ref('double-slit'), nx: 6, ny: 1, fx: (v) => `${fmt(v, 0)}°`, fy: (v) => fmt(v, 0) });
    trace(ctx, B1, a1.X, a1.Y, 2, L);
    const a2 = axes(ctx, B2, [-60, 60], [0, 1], { yl: `grating, N = ${N}`, yc: F.ref('grating'), xl: 'θ', xc: C('angle'), nx: 6, ny: 1, fx: (v) => `${fmt(v, 0)}°`, fy: (v) => fmt(v, 0) });
    trace(ctx, B2, a2.X, a2.Y, N, L);
    const mTop = Math.floor(DS * 1000 * Math.sin(60 * RAD) / L);
    for (let m = -mTop; m <= mTop; m++) {
      const th = Math.asin((m * L) / (DS * 1000)) / RAD;
      line(ctx, a1.X(th), B1.t, a1.X(th), B2.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
      if (Math.abs(m) <= 2) text(ctx, `m = ${m}`, a1.X(th), B1.t - 8, PAL.ink, { size: 18, align: 'center' });
    }
    const th1 = Math.asin(L / (DS * 1000)) / RAD;
    readout(d.readout, `\\kd\\sin\\ktheta = m\\klam:\\quad (${fmt(DS, 2)}\\ \\mu\\text{m})\\sin ${fmt(th1, 1)}^\\circ = 1\\,(${fmt(L, 0)}\\ \\text{nm})`,
      `From the center of a bright line to the first dark place beside it, $\\sin\\ktheta$ changes by $\\klam/(N\\kd) = ${fmt(L / (N * DS * 1000), 4)}$ for the grating and by $\\klam/(2\\kd) = ${fmt(L / (2 * DS * 1000), 4)}$ for the double slit.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.19 · sim-grating-rays
   Five slits of a grating, 40 units to the micrometre, send rays in the one
   direction θ toward a distant screen. At each slit a right triangle shows the
   extra distance d sin θ the ray travels beyond its neighbor above. Beside it,
   the five waves as they arrive and their sum, over two periods. Still.
===================================================================== */
(function () {
  const d = sim('sim-grating-rays', 700);
  let lam = { v: 600 }, dS = { v: 2 };
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 40, step: 0.01, value: Math.asin(0.3) / RAD, unit: '°', dec: 1, aria: 'the direction of the rays from the grating',
    specials: Array.from({ length: 8 }, (_, k) => ({ at: () => { const s = (k * lam.v / 1000) / dS.v; return s <= Math.sin(40 * RAD) ? Math.asin(s) / RAD : null; } })) });
  lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 700, step: 1, value: 600, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1, max: 3, step: 0.05, value: 2, unit: 'μm', dec: 2, aria: 'the distance between neighboring slits' });
  const UPU = 40, XB = 200, YC = 390, NS = 5, XR = 760, AMP = 16;
  const PX0 = 920, PX1 = 1340, ROWS = [150, 205, 260, 315, 370], YSUM = 545;

  function trace(ctx, y0, f, color, w) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    for (let i = 0; i <= 160; i++) { const x = PX0 + ((PX1 - PX0) * i) / 160, v = f((2 * i) / 160); if (i) ctx.lineTo(x, y0 - v); else ctx.moveTo(x, y0 - v); }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = th.v * RAD, L = lam.v, D = dS.v, dpx = UPU * D, PC = C('position'), col = spectral(L);
    const n = (D * Math.sin(t) * 1000) / L, inPhase = Math.abs(n - Math.round(n)) < 0.01;
    const sn = Math.sin(Math.PI * n), amp = Math.abs(sn) < 1e-6 ? NS : Math.abs(Math.sin(NS * Math.PI * n) / sn);
    topline(ctx, inPhase
      ? `Toward $\\ktheta = ${fmt(th.v, 1)}^\\circ$, each ray travels ${fmt(n, 2)} wavelengths farther than its neighbor, so all five arrive in phase.`
      : `Toward $\\ktheta = ${fmt(th.v, 1)}^\\circ$, each ray travels ${fmt(n, 2)} wavelengths farther than its neighbor, so the five arrive out of step.`);
    const ux = Math.cos(t), uy = -Math.sin(t);
    const S = Array.from({ length: NS }, (_, k) => ({ x: XB, y: YC + (k - (NS - 1) / 2) * dpx }));

    ctx.save(); ctx.fillStyle = F.ref('grating');
    ctx.fillRect(XB - 7, 110, 14, S[0].y - 6 - 110);
    for (let k = 0; k < NS - 1; k++) ctx.fillRect(XB - 7, S[k].y + 6, 14, dpx - 12);
    ctx.fillRect(XB - 7, S[NS - 1].y + 6, 14, 680 - S[NS - 1].y - 6);
    ctx.restore();
    S.forEach((s) => {
      F.arrow(ctx, 60, s.y, XB - 12, s.y, col, 3);
      const len = (XR - XB) / ux;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 104, 900, 600); ctx.clip(); line(ctx, s.x, s.y, s.x + ux * len, s.y + uy * len, col, 3); ctx.restore();
    });
    const dlp = dpx * Math.sin(t);
    for (let k = 1; k < NS; k++) {
      const Fp = { x: S[k].x + ux * dlp, y: S[k].y + uy * dlp };
      line(ctx, S[k - 1].x, S[k - 1].y, Fp.x, Fp.y, PAL.ink, 2);
      if (dlp > 2) line(ctx, S[k].x, S[k].y, Fp.x, Fp.y, PC, 7);
      if (k === NS - 1) {
        if (dlp > 8) label(ctx, 'Δl', (S[k].x + Fp.x) / 2, (S[k].y + Fp.y) / 2, { side: 'below', size: 22, color: PC, gap: 16 });
        if (t > 0.03) angleArc(ctx, S[k], Math.min(70, dpx * 0.9), 0, t, 'θ', undefined, C('angle'));
      }
    }
    vbracket(ctx, XB - 34, S[0].y, S[1].y, PC, 'd', -1, { size: 22 });
    const lo = S[NS - 1], loLen = Math.min((XR - XB) / ux, (lo.y - 110) / Math.max(-uy, 1e-6));
    label(ctx, 'toward the screen', lo.x + ux * loLen, lo.y + uy * loLen, { side: 'below', size: 18, color: PAL.muted, gap: 14 + 90 * Math.tan(t) });

    const ph = TAU * n;
    text(ctx, 'arriving at the screen', (PX0 + PX1) / 2, 104, PAL.ink, { size: 20, align: 'center' });
    ROWS.forEach((y, k) => {
      line(ctx, PX0, y, PX1, y, alpha(PAL.ink, 0.3), 2, [4, 8]);
      text(ctx, `ray ${k + 1}`, PX0 - 14, y, PAL.ink, { size: 18, align: 'right' });
      trace(ctx, y, (u) => AMP * Math.cos(TAU * u - k * ph), col, 3);
    });
    line(ctx, PX0, YSUM, PX1, YSUM, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'sum', PX0 - 14, YSUM, PAL.ink, { size: 20, align: 'right' });
    trace(ctx, YSUM, (u) => { let v = 0; for (let k = 0; k < NS; k++) v += AMP * Math.cos(TAU * u - k * ph); return v; }, PAL.ink, 5);

    readout(d.readout, `\\kdl = \\kd\\sin\\ktheta = (${fmt(D, 2)}\\ \\mu\\text{m})\\sin ${fmt(th.v, 1)}^\\circ = ${fmt(D * Math.sin(t), 3)}\\ \\mu\\text{m} = ${fmt(n, 2)}\\,\\klam`,
      `The sum of the five waves is ${fmt(amp, 2)} times as large as one of them.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
