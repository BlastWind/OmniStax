/* Figures for section 27.3 Young's Double Slit Experiment. Position carries
   the wavelength, the slit separation, the path difference, the distance to the
   screen and the positions along it, and angle every angle. The order m and the
   amplitudes of Figure 27.11 are untyped and in ink. The slits, the screen, the
   two waves and the resultant of Figure 27.11 and the two paths of Figure 27.13
   are the section's referents. Light is drawn in the colour of its wavelength
   by spectral(), and an unlit screen black, both facts through F.fact; where two
   waves of one light must be told apart the second is dashed. Only the ripple
   tank moves; every other figure is a state of its sliders and registers no
   cycle. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, dot, text, topline, label, angleArc, hbracket, vbracket, view, face } = F;
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
  const f = lam < 420 ? 0.3 + (0.7 * (lam - 380)) / 40 : lam > 700 ? 0.3 + (0.7 * (750 - lam)) / 50 : 1;
  const c = (x) => Math.round(255 * Math.pow(clamp(x * f, 0, 1), 0.8));
  return [c(r), c(g), c(b)];
}
const spectral = (lam, a = 1) => { const [r, g, b] = spectralRGB(lam); return F.fact(`rgba(${r}, ${g}, ${b}, ${a})`); };
/* the components of a wavelength's colour as the Facts switch leaves it, read back through a canvas */
const probe = document.createElement('canvas').getContext('2d');
function factRGB(lam) {
  probe.clearRect(0, 0, 1, 1); probe.fillStyle = F.fact(`rgb(${spectralRGB(lam).join(', ')})`); probe.fillRect(0, 0, 1, 1);
  const p = probe.getImageData(0, 0, 1, 1).data; return [p[0], p[1], p[2]];
}

/* The relative intensity of a double slit toward sin θ = s. Each slit is given a
   width of 2d/15, so the bright fringes fall off outward as the book draws them
   and no order through the seventh goes missing. */
function doubleSlit(s, d, lam) {
  const phi = (Math.PI * d * s) / lam, beta = (Math.PI * (2 * d / 15) * s) / lam;
  const env = Math.abs(beta) < 1e-6 ? 1 : Math.pow(Math.sin(beta) / beta, 2);
  return Math.pow(Math.cos(phi), 2) * env;
}
const LAM_DETENTS = [{ v: 450, label: '450' }, { v: 600 }, { v: 633, label: '633' }];

/* =====================================================================
   Figure 27.10 · sim-young-apparatus
   The book's oblique view of the slit wall in front and the screen behind,
   locked (rule 28.2). The screen stands 1.00 m beyond the slits and 0.60 m of
   it is drawn, 1170 scene units to the metre across the screen; the gap
   between the slits is drawn far larger than it is, growing with d. Still.
===================================================================== */
(function () {
  const d = sim('sim-young-apparatus', 690);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 633, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.005, max: 0.04, step: 0.0005, value: 0.01, unit: 'mm', dec: 4, aria: 'the distance between the slits' });
  const V = view({ yaw: -0.62, pitch: 0.42, dist: 2600, cx: 700, cy: 520 });
  const P = (p) => V.P(p);
  const HALF = 350, UPM = HALF / 0.30, XS = 1.0;      /* 0.30 m either side of the screen's center */
  const ZF = 260, ZB = -300, WH = 300;                 /* the slit wall, the screen, and their height */

  function quad(ctx, pts, fill) {
    ctx.save(); ctx.fillStyle = fill; ctx.beginPath();
    pts.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, D = dS.v, sp = (XS * L * 1e-6) / D;         /* the fringe spacing in metres */
    topline(ctx, `Light of ${fmt(L, 0)} nm through slits ${fmt(D, 4)} mm apart lays bright lines ${fmt(sp * 100, 2)} cm apart on a wall ${fmt(XS, 2)} m away.`);

    face(ctx, [[-HALF, 0, ZF], [HALF, 0, ZF], [HALF, 0, ZB], [-HALF, 0, ZB]].map(P), V.shade([0, 1, 0]), 1.5);
    face(ctx, [[-HALF, 0, ZB], [HALF, 0, ZB], [HALF, WH, ZB], [-HALF, WH, ZB]].map(P), V.shade([0, 0, 1]), 2);
    for (let x = -HALF + 20; x < HALF - 20; x += 2) {
      const y = x / UPM, s = y / Math.hypot(y, XS), I = doubleSlit(s, D * 1e-3, L * 1e-9);
      if (I > 0.02) quad(ctx, [[x, 40, ZB], [x + 2.4, 40, ZB], [x + 2.4, WH - 40, ZB], [x, WH - 40, ZB]], spectral(L, Math.min(1, I * 1.1)));
    }
    const so = [[-HALF, 0, ZB], [HALF, 0, ZB], [HALF, WH, ZB], [-HALF, WH, ZB]].map(P);
    ctx.save(); ctx.strokeStyle = F.ref('screen'); ctx.lineWidth = 3; ctx.beginPath(); so.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.closePath(); ctx.stroke(); ctx.restore();
    face(ctx, [[-HALF, 0, ZF], [HALF, 0, ZF], [HALF, WH, ZF], [-HALF, WH, ZF]].map(P), V.shade([0, 0, 1]), 2);
    const gap = 40 + ((D - 0.005) / 0.035) * 110;
    [-gap / 2, gap / 2].forEach((x) => {
      quad(ctx, [[x - 5, 70, ZF], [x + 5, 70, ZF], [x + 5, 230, ZF], [x - 5, 230, ZF]], F.ref('slits'));
      const a = P([x - 180, 150, ZF + 520]), b = P([x, 150, ZF]);
      F.arrow(ctx, a[0], a[1], b[0], b[1], spectral(L), 5);
    });
    const sl = P([gap / 2 + 20, 250, ZF]), sc = P([-HALF, 0, ZB]);
    label(ctx, 'double slit', sl[0], sl[1], { side: 'above', size: 20, color: F.ref('slits') });
    label(ctx, 'screen', sc[0] + 40, sc[1], { side: 'below', size: 20, color: F.ref('screen') });
    readout(d.readout, `\\kdy = \\frac{\\kx\\klam}{\\kd} = \\frac{(${fmt(XS, 2)}\\ \\text{m})(${fmt(L, 0)}\\ \\text{nm})}{${fmt(D, 4)}\\ \\text{mm}} = ${fmt(sp * 100, 2)}\\ \\text{cm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.11 · sim-two-waves
   Two waves three wavelengths long, the second shifted along by a fraction of
   a wavelength, and their sum beneath them. The first wave's amplitude A₁ is
   28 units; the second's is up to three times that and the sum up to four, and
   each panel is sized for its greatest reach. Still.
===================================================================== */
(function () {
  const d = sim('sim-two-waves', 610);
  const sh = ctl(d.controls, { label: '\\text{shift}', cls: '', min: 0, max: 1, step: 0.01, value: 0, unit: 'λ', dec: 2, aria: 'how far the second wave is shifted, in wavelengths', specials: [{ at: 0, label: 'in phase' }, { at: 0.5, label: 'out of phase' }, { at: 1 }] });
  const rA = ctl(d.controls, { label: 'A_2/A_1', cls: '', min: 0.5, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the amplitude of the second wave as a multiple of the first', specials: [{ at: 1, label: 'equal' }] });
  const X0 = 250, X1 = 1250, WL = (X1 - X0) / 3, U = 28;
  const ROWS = [{ y: 126, name: 'wave 1', ref: 'wave-1' }, { y: 262, name: 'wave 2', ref: 'wave-2' }, { y: 472, name: 'resultant', ref: 'resultant' }];

  function wave(ctx, y0, f, color, w) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    for (let i = 0; i <= 300; i++) { const x = X0 + (i / 300) * (X1 - X0), v = f((x - X0) / WL); if (i) ctx.lineTo(x, y0 - v); else ctx.moveTo(x, y0 - v); }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const s = sh.v, r = rA.v, A = Math.sqrt(1 + r * r + 2 * r * Math.cos(TAU * s));
    const inPhase = Math.abs(s - Math.round(s)) < 0.005, outPhase = Math.abs(s - 0.5) < 0.005;
    topline(ctx, inPhase ? `In phase, the two waves add to a wave of amplitude ${fmt(A, 2)} A₁.`
      : outPhase && Math.abs(r - 1) < 0.005 ? 'Shifted by half a wavelength, crest meets trough and the two waves cancel.'
        : `Shifted by ${fmt(s, 2)} λ, the two waves add to a wave of amplitude ${fmt(A, 2)} A₁.`);
    const c1 = F.ref('wave-1'), c2 = F.ref('wave-2'), c3 = F.ref('resultant');
    const f1 = (u) => U * Math.cos(TAU * u), f2 = (u) => r * U * Math.cos(TAU * (u - s));
    ROWS.forEach((row) => {
      line(ctx, X0, row.y, X1, row.y, alpha(PAL.ink, 0.3), 2, [4, 8]);
      text(ctx, row.name, X0 - 30, row.y, F.ref(row.ref), { size: 22, align: 'right' });
    });
    for (let k = 0; k <= 3; k++) line(ctx, X0 + k * WL, 90, X0 + k * WL, 592, alpha(PAL.ink, 0.12), 2);
    wave(ctx, ROWS[0].y, f1, c1, 5);
    wave(ctx, ROWS[1].y, f2, c2, 5);
    wave(ctx, ROWS[2].y, (u) => f1(u) + f2(u), c3, 5);
    vbracket(ctx, X1 + 30, ROWS[0].y - U, ROWS[0].y, PAL.ink, 'A₁', 1, { size: 20 });
    vbracket(ctx, X1 + 30, ROWS[1].y - r * U, ROWS[1].y, PAL.ink, 'A₂', 1, { size: 20 });
    if (A * U > 6) vbracket(ctx, X1 + 30, ROWS[2].y - A * U, ROWS[2].y, PAL.ink, 'A', 1, { size: 20 });
    readout(d.readout, `A = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos(${fmt(s, 2)}\\times 360^\\circ)} = ${fmt(A, 2)}\\,A_1`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.12 · sim-ripple-tank
   Plane waves reach a barrier with two slits, and each slit sends out waves of
   its own, their sum painted with crests bright and troughs dark. The scene is
   60 units to the micrometre, so the slits sit 60 to 240 units apart and a
   wavelength is 24 to 45 units. The lines of maxima and minima are the exact
   hyperbolas r₂ − r₁ = mλ and (m + ½)λ. One cycle is one period of the wave,
   so the loop runs on without a seam.
===================================================================== */
(function () {
  const d = sim('sim-ripple-tank', 640);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 750, step: 1, value: 633, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1, max: 4, step: 0.05, value: 2, unit: 'μm', dec: 2, aria: 'the distance between the slits' });
  const cy = cycle(() => 1, 0);
  const UPU = 60, XB = 300, XL = 60, XS = 1090, YT = 96, YB = 616, YC = (YT + YB) / 2, CELL = 4;
  const GW = Math.round((XS - XL) / CELL), GH = Math.round((YB - YT) / CELL);
  const off = document.createElement('canvas'); off.width = GW; off.height = GH;
  const octx = off.getContext('2d'), img = octx.createImageData(GW, GH);

  /* the points where r₂ − r₁ = δ, from the barrier out to the screen */
  function hyper(delta, dpx) {
    const a = Math.abs(delta) / 2, c = dpx / 2, b2 = c * c - a * a, pts = [];
    if (b2 <= 0) return pts;
    for (let i = 0; i <= 60; i++) {
      const u = ((XS - XB) * i) / 60, w = a * Math.sqrt(1 + (u * u) / b2);
      pts.push([XB + u, YC - Math.sign(delta) * w]);
    }
    return pts;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, D = dS.v, lpx = (UPU * L) / 1000, dpx = UPU * D, k = TAU / lpx, wt = TAU * cy.now();
    const th1 = Math.asin((L / 1000) / D) / RAD;
    topline(ctx, `Crests from two slits ${fmt(D, 2)} μm apart meet along lines, and the first bright line leaves at ${fmt(th1, 1)}°.`);
    const [R, G, B] = factRGB(L), s1 = YC - dpx / 2, s2 = YC + dpx / 2;
    for (let j = 0; j < GH; j++) {
      const y = YT + (j + 0.5) * CELL;
      for (let i = 0; i < GW; i++) {
        const x = XL + (i + 0.5) * CELL;
        let v;
        if (x < XB) v = Math.cos(k * (x - XB) - wt);
        else {
          const r1 = Math.hypot(x - XB, y - s1), r2 = Math.hypot(x - XB, y - s2);
          v = (Math.cos(k * r1 - wt) / Math.sqrt(1 + r1 / 160) + Math.cos(k * r2 - wt) / Math.sqrt(1 + r2 / 160)) * 0.75;
        }
        const o = 4 * (j * GW + i), a = clamp((v + 1.4) / 2.8, 0, 1);
        img.data[o] = R; img.data[o + 1] = G; img.data[o + 2] = B; img.data[o + 3] = Math.round(235 * a * a);
      }
    }
    octx.putImageData(img, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(off, XL, YT, XS - XL, YB - YT); ctx.restore();

    const labels = [];
    const nMax = Math.floor(dpx / lpx);
    for (let m = -nMax; m <= nMax; m++) {
      [[m, true], [m + 0.5, false]].forEach(([n, max]) => {
        const pts = hyper(n * lpx, dpx);
        if (!pts.length && n !== 0) return;
        const path = n === 0 ? [[XB, YC], [XS, YC]] : pts;
        ctx.save(); ctx.strokeStyle = alpha(PAL.ink, max ? 0.6 : 0.45); ctx.lineWidth = 2.5; if (!max) ctx.setLineDash([10, 10]);
        ctx.beginPath(); ctx.rect(XB, YT, XS - XB, YB - YT); ctx.clip(); ctx.beginPath(); path.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
        const ye = path[path.length - 1][1];
        if (ye > YT + 10 && ye < YB - 10) labels.push({ y: ye, s: max ? 'Max' : 'Min', c: n === 0 });
      });
    }
    ctx.save(); ctx.fillStyle = F.ref('slits'); ctx.fillRect(XB - 7, YT, 14, s1 - 8 - YT); ctx.fillRect(XB - 7, s1 + 8, 14, s2 - s1 - 16); ctx.fillRect(XB - 7, s2 + 8, 14, YB - s2 - 8); ctx.restore();
    ctx.save(); ctx.fillStyle = F.ref('screen'); ctx.fillRect(XS, YT, 12, YB - YT); ctx.restore();
    labels.sort((a, b) => a.y - b.y);
    const kept = [];
    labels.filter((l) => l.c).concat(labels.filter((l) => !l.c).sort((a, b) => Math.abs(a.y - YC) - Math.abs(b.y - YC)))
      .forEach((l) => { if (kept.every((q) => Math.abs(q.y - l.y) >= 26)) kept.push(l); });
    kept.forEach((l) => text(ctx, l.s, XS + 24, l.y, PAL.ink, { size: 19 }));
    text(ctx, 'screen', XS + 6, YB + 16, F.ref('screen'), { size: 17, align: 'center' });
    label(ctx, 'S_{1}', XB - 14, s1, { side: 'left', size: 20, color: F.ref('slits'), gap: 12 });
    label(ctx, 'S_{2}', XB - 14, s2, { side: 'left', size: 20, color: F.ref('slits'), gap: 12 });
    readout(d.readout, `\\kd\\sin\\ktheta = m\\klam:\\quad (${fmt(D, 2)}\\ \\mu\\text{m})\\sin ${fmt(th1, 1)}^\\circ = 1\\,(${fmt(L, 0)}\\ \\text{nm})`,
      `Between the slits and the screen there are ${2 * nMax + 1} lines of maxima, one for each whole number of wavelengths up to $\\kd/\\klam = ${fmt(D * 1000 / L, 2)}$.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.25), draw });
})();

/* =====================================================================
   Figure 27.13 + 27.14 · sim-path-difference
   Two paths leave the slits in phase toward one point of a distant screen, so
   they are drawn parallel at the angle θ, and each ends on the same line across
   them. The scene is 50 units to the micrometre. The path from the upper slit
   is a whole number of wavelengths long, about 480 units, so its wave arrives
   at a crest; the lower path is longer by d sin θ. Beside it, the two arriving
   waves over two periods and their sum. Still.
===================================================================== */
(function () {
  const d = sim('sim-path-difference', 700);
  let lam = { v: 600 }, dS = { v: 3 };
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 35, step: 0.1, value: 30, unit: '°', dec: 1, aria: 'the direction from the slits to the point on the screen',
    specials: Array.from({ length: 26 }, (_, k) => ({ at: () => { const s = (k * lam.v / 1000) / (2 * dS.v); return s <= Math.sin(35 * RAD) ? Math.asin(s) / RAD : null; } })) });
  lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 750, step: 1, value: 600, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1.5, max: 5, step: 0.05, value: 3, unit: 'μm', dec: 2, aria: 'the distance between the slits' });
  const UPU = 50, XB = 200, YC = 520, AMP = 13;
  const PX0 = 900, PX1 = 1340, PROWS = [{ y: 190, name: 'path 1', ref: 'path-1' }, { y: 330, name: 'path 2', ref: 'path-2' }, { y: 500, name: 'sum' }];

  function rayWave(ctx, x0, y0, ux, uy, len, lpx, color, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; if (dash) ctx.setLineDash([12, 8]); ctx.beginPath();
    const n = Math.max(40, Math.round(len / 3));
    for (let i = 0; i <= n; i++) {
      const s = (len * i) / n, v = AMP * Math.cos((TAU * s) / lpx);
      const x = x0 + ux * s - uy * v, y = y0 + uy * s + ux * v;     /* the normal to (ux, uy), turned toward the upper side */
      if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
  }
  function trace(ctx, y0, f, color, w, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash([12, 8]); ctx.beginPath();
    for (let i = 0; i <= 160; i++) { const x = PX0 + ((PX1 - PX0) * i) / 160, v = f((2 * i) / 160); if (i) ctx.lineTo(x, y0 - v); else ctx.moveTo(x, y0 - v); }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = th.v * RAD, L = lam.v, D = dS.v, lpx = (UPU * L) / 1000, dpx = UPU * D;
    const dl = D * Math.sin(t), n = (dl * 1000) / L, frac = n - Math.floor(n);
    const bright = Math.abs(n - Math.round(n)) < 0.01, dark = Math.abs(frac - 0.5) < 0.01;
    topline(ctx, bright ? `Toward $\\ktheta = ${fmt(th.v, 1)}^\\circ$, the lower path is ${fmt(n, 2)} wavelengths longer, so the waves arrive crest to crest and the screen is bright.`
      : dark ? `Toward $\\ktheta = ${fmt(th.v, 1)}^\\circ$, the lower path is ${fmt(n, 2)} wavelengths longer, so the waves arrive crest to trough and the screen is dark.`
        : `Toward $\\ktheta = ${fmt(th.v, 1)}^\\circ$, the lower path is ${fmt(n, 2)} wavelengths longer, so the waves arrive partly out of step.`);
    const col = spectral(L), PC = C('position');
    const S1 = { x: XB, y: YC - dpx / 2 }, S2 = { x: XB, y: YC + dpx / 2 };
    const ux = Math.cos(t), uy = -Math.sin(t), L1 = lpx * Math.round(480 / lpx), dlp = dpx * Math.sin(t);

    ctx.save(); ctx.fillStyle = F.ref('slits');
    ctx.fillRect(XB - 8, 110, 16, S1.y - 7 - 110); ctx.fillRect(XB - 8, S1.y + 7, 16, S2.y - S1.y - 14); ctx.fillRect(XB - 8, S2.y + 7, 16, 680 - S2.y - 7); ctx.restore();
    line(ctx, XB, YC, XB + 560, YC, alpha(PAL.ink, 0.35), 2, [4, 8]);
    const e1 = { x: S1.x + ux * L1, y: S1.y + uy * L1 }, e2 = { x: S2.x + ux * (L1 + dlp), y: S2.y + uy * (L1 + dlp) };
    line(ctx, e1.x - (e2.x - e1.x) * 0.5, e1.y - (e2.y - e1.y) * 0.5, e2.x + (e2.x - e1.x) * 0.5, e2.y + (e2.y - e1.y) * 0.5, alpha(PAL.ink, 0.45), 2, [10, 10]);
    rayWave(ctx, S1.x, S1.y, ux, uy, L1, lpx, col, false);
    rayWave(ctx, S2.x, S2.y, ux, uy, L1 + dlp, lpx, col, true);
    const Fp = { x: S2.x + ux * dlp, y: S2.y + uy * dlp };
    line(ctx, S1.x, S1.y, Fp.x, Fp.y, PAL.ink, 2.5);
    if (dlp > 2) line(ctx, S2.x, S2.y, Fp.x, Fp.y, PC, 7);
    vbracket(ctx, XB - 36, S1.y, S2.y, PC, 'd', -1, { size: 22 });
    if (t > 0.02) {
      angleArc(ctx, S2, 90, 0, t, 'θ', undefined, C('angle'));
      angleArc(ctx, S1, Math.min(46, dpx * 0.6), -Math.PI / 2, t - Math.PI / 2, 'θ', undefined, C('angle'));
    }
    if (dlp > 8) label(ctx, 'Δl', (S2.x + Fp.x) / 2, (S2.y + Fp.y) / 2, { side: 'below', size: 22, color: PC, gap: 18 });
    label(ctx, 'l_{1}', S1.x + ux * L1 * 0.55, S1.y + uy * L1 * 0.55, { side: 'above', size: 22, color: F.ref('path-1'), gap: 28 });
    label(ctx, 'l_{2}', S2.x + ux * L1 * 0.55, S2.y + uy * L1 * 0.55, { side: 'below', size: 22, color: F.ref('path-2'), gap: 28 });
    label(ctx, 'toward the screen', e1.x, e1.y, { side: 'above', size: 18, color: PAL.muted, gap: 30 });

    const ph = TAU * n;
    const f1 = (u) => 40 * Math.cos(TAU * u), f2 = (u) => 40 * Math.cos(TAU * u - ph);
    text(ctx, 'arriving at the screen', (PX0 + PX1) / 2, 116, PAL.ink, { size: 20, align: 'center' });
    PROWS.forEach((r) => {
      line(ctx, PX0, r.y, PX1, r.y, alpha(PAL.ink, 0.3), 2, [4, 8]);
      text(ctx, r.name, PX0 - 16, r.y, r.ref ? F.ref(r.ref) : PAL.ink, { size: 20, align: 'right' });
    });
    trace(ctx, PROWS[0].y, f1, col, 4, false);
    trace(ctx, PROWS[1].y, f2, col, 4, true);
    trace(ctx, PROWS[2].y, (u) => f1(u) + f2(u), PAL.ink, 5, false);
    text(ctx, bright ? 'bright' : dark ? 'dark' : '', (PX0 + PX1) / 2, 610, PAL.ink, { size: 22, weight: 600, align: 'center' });

    readout(d.readout, `\\kdl = \\kd\\sin\\ktheta = (${fmt(D, 2)}\\ \\mu\\text{m})\\sin ${fmt(th.v, 1)}^\\circ = ${fmt(dl, 3)}\\ \\mu\\text{m} = ${fmt(n, 2)}\\,\\klam`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.15 · sim-fringe-pattern
   The slits at the left and the screen a distance x from them, drawn at one
   scale of 330 units to the metre in both directions, so every angle is true;
   0.85 m either side of the center of the screen is drawn. The intensity is
   drawn out from the screen toward the slits, as the book draws it, and the
   fringes as seen stand in a strip at the right on the same scale. Still.
===================================================================== */
(function () {
  const d = sim('sim-fringe-pattern', 720);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 633, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.005, max: 0.05, step: 0.0005, value: 0.01, unit: 'mm', dec: 4, aria: 'the distance between the slits' });
  const xS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.5, max: 2, step: 0.01, value: 1, unit: 'm', dec: 2, aria: 'the distance from the slits to the screen' });
  const mC = choice(d.controls, { label: 'm', options: [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }], value: '3', aria: 'the order of the bright line marked' });
  const UPM = 330, XSL = 120, YC = 370, YR = 0.85, PEAK = 110, SX0 = 1190, SX1 = 1320;
  const Yof = (y) => YC - y * UPM;

  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, D = dS.v, x = xS.v, m = +mC.value, lm = L * 1e-9, dm = D * 1e-3, PC = C('position');
    const s = (m * lm) / dm, thm = Math.asin(s), ym = x * Math.tan(thm), dy = (x * lm) / dm;
    const onScreen = ym <= YR;
    topline(ctx, onScreen
      ? `Bright line ${m} of ${fmt(L, 0)}-nm light through slits ${fmt(D, 4)} mm apart lies at ${fmt(thm / RAD, 2)}°, ${fmt(ym, 3)} m from the center of a screen ${fmt(x, 2)} m away.`
      : `Bright line ${m} of ${fmt(L, 0)}-nm light through slits ${fmt(D, 4)} mm apart lies at ${fmt(thm / RAD, 2)}°, beyond the part of the screen drawn.`);
    const XSC = XSL + x * UPM, col = spectral(L), peak = Math.min(PEAK, x * UPM * 0.4);

    ctx.save(); ctx.fillStyle = F.ref('slits');
    ctx.fillRect(XSL - 12, Yof(YR), 12, YC - 6 - Yof(YR)); ctx.fillRect(XSL - 12, YC - 3, 12, 6); ctx.fillRect(XSL - 12, YC + 6, 12, Yof(-YR) - YC - 6); ctx.restore();
    line(ctx, XSC, Yof(YR), XSC, Yof(-YR), F.ref('screen'), 3);
    line(ctx, XSL, YC, XSC + 20, YC, alpha(PAL.ink, 0.5), 2);

    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.beginPath();
    for (let i = 0; i <= 900; i++) {
      const y = -YR + (2 * YR * i) / 900, I = doubleSlit(y / Math.hypot(y, x), dm, lm), px = XSC - peak * I, py = Yof(y);
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = F.shown.facts ? F.fact('#000') : PAL.soft; ctx.fillRect(SX0, Yof(YR), SX1 - SX0, Yof(-YR) - Yof(YR)); ctx.restore();
    for (let py = Yof(YR); py < Yof(-YR); py += 1.5) {
      const y = (YC - py) / UPM, I = doubleSlit(y / Math.hypot(y, x), dm, lm);
      if (I > 0.01) { ctx.save(); ctx.fillStyle = spectral(L, Math.min(1, 1.2 * Math.sqrt(I))); ctx.fillRect(SX0 + 10, py, SX1 - SX0 - 20, 1.8); ctx.restore(); }
    }
    text(ctx, 'as seen', (SX0 + SX1) / 2, Yof(-YR) + 20, PAL.muted, { size: 17, align: 'center' });

    if (onScreen) {
      const py = Yof(ym);
      line(ctx, XSL, YC, XSC, py, alpha(PAL.ink, 0.6), 2.5, [10, 10]);
      line(ctx, XSC, py, SX0, py, alpha(PAL.ink, 0.3), 2, [4, 8]);
      angleArc(ctx, { x: XSL, y: YC }, Math.min(170, (x * UPM - peak) * 0.6), 0, Math.atan2(ym * UPM, x * UPM), thm > 3 * RAD ? `θ_{${m}}` : '', undefined, C('angle'));
      vbracket(ctx, XSC + 26, py, YC, PC, `y_{${m}}`, 1, { size: 22 });
      const pp = Yof(x * Math.tan(Math.asin(((m - 1) * lm) / dm)));
      vbracket(ctx, SX0 - 24, py, pp, PC, 'Δy', -1, { size: 20 });
    }
    hbracket(ctx, XSL, XSC, Yof(-YR) + 30, PC, `x = ${fmt(x, 2)} m`, { side: 'below', size: 20 });
    const mMax = (dm / lm);
    readout(d.readout, `\\kd\\sin\\ktheta = m\\klam:\\quad (${fmt(D, 4)}\\ \\text{mm})\\sin ${fmt(thm / RAD, 2)}^\\circ = ${m}\\,(${fmt(L, 0)}\\ \\text{nm})`,
      `The highest order is the whole number below $\\kd/\\klam = ${fmt(mMax, 1)}$, which is ${Math.floor(mMax)}, and near the center the fringes are $\\kdy = \\kx\\klam/\\kd = ${fmt(dy * 1000, 1)}\\ \\text{mm}$ apart.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
