/* Figures for section 30.3 Bohr's Theory of the Hydrogen Atom.
   The page's figures bind energy (every level and every transition), position
   (the wavelength, the radii of the orbits and the grating's spacing) and angle
   (the angle a line leaves the grating at). R, h, Z, n, the order m and every
   count are ink. Light is drawn in the colour of its wavelength by spectral(),
   the piecewise fit 27.4 uses, through F.fact; a UV or IR photon is ink. The
   electron is F.el('e-') and the hydrogen nucleus F.el('p+'). The Lyman, Balmer
   and Paschen series are the section's referents, drawn with F.ref, a visible
   line keeping its own colour. The light of Figure 30.14 flows and the atom of
   Figure 30.16 + 30.17 + 30.18 + 30.19 emits on a clock; Figure 30.15 is still. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.3'] = function (root, F) {
const { fmt, C, PAL, alpha, choice, register, cycle, begin, line, arrow, dot, text, topline, label, hbracket, angleArc, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

const RAD = Math.PI / 180;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
/* the book's Rydberg constant, m⁻¹ */
const RYD = 1.097e7;
const lamNm = (nf, ni) => 1e9 / (RYD * (1 / (nf * nf) - (ni === Infinity ? 0 : 1 / (ni * ni))));
const bandOf = (nm) => (nm < 380 ? 'ultraviolet' : nm <= 700 ? 'visible' : 'infrared');
const nmText = (nm) => fmt(nm, nm < 100 ? 1 : 0);

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

/* a photon as a short wave packet centred on (x, y), heading (ux, uy) */
function packet(ctx, x, y, ux, uy, color, a = 1) {
  const px = -uy, py = ux, L = 46, N = 40;
  ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let j = 0; j <= N; j++) {
    const s = j / N - 0.5, w = 8 * Math.cos(Math.PI * s) * Math.sin(s * 4 * 2 * Math.PI);
    const qx = x + ux * s * L + px * w, qy = y + uy * s * L + py * w;
    if (j) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
  }
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 30.14 · sim-line-spectrum · moving · flat, seen from above
   The tube, the slit and the grating of Example 30.1 (d = 1.88 μm, first
   order) and a film 660 units past the grating, every angle true. Pulses of
   light run at 120 units a second, 60 apart, ten spacings a 5 s loop, so the
   loop closes seamlessly; past the grating every pulse runs along every line's
   ray and the undeviated ray. The strip beneath is the film as developed,
   400 to 700 nm across, fixed.
===================================================================== */
(function () {
  const ELEMENTS = {
    H: { name: 'hydrogen', mark: 486.1, lines: [410.2, 434.0, 486.1, 656.3] },
    He: { name: 'helium', mark: 587.6, lines: [438.8, 447.1, 471.3, 492.2, 501.6, 504.8, 587.6, 667.8] },
    Ne: { name: 'neon', mark: 640.2, lines: [540.1, 585.2, 588.2, 594.5, 597.6, 603.0, 607.4, 609.6, 614.3, 616.4, 621.7, 626.6, 630.5, 633.4, 638.3, 640.2, 650.7, 659.9, 667.8, 671.7, 692.9] },
    Hg: { name: 'mercury', mark: 546.1, lines: [404.7, 407.8, 435.8, 491.6, 546.1, 577.0, 579.1, 623.4, 690.7] },
    Fe: { name: 'iron', mark: 438.4, lines: [404.6, 406.4, 407.2, 413.2, 414.4, 418.8, 419.9, 420.2, 425.1, 426.0, 427.2, 430.8, 432.6, 438.4, 440.5, 441.5, 442.7, 452.9, 466.8, 489.1, 491.9, 495.8, 516.7, 522.7, 527.0, 532.8, 537.1, 539.7, 540.6, 543.0, 543.5, 544.7, 545.6, 561.6, 606.5, 613.7, 619.2, 623.1, 625.3, 641.2, 643.1, 649.5] },
  };
  const d = sim('sim-line-spectrum', 630);
  const el = choice(d.controls, { label: '\\text{element}', options: Object.keys(ELEMENTS).map((k) => ({ value: k, label: ELEMENTS[k].name })), value: 'Fe', aria: 'the element in the discharge tube' });
  const D_NM = 1880, YA = 360, XT0 = 110, XT1 = 300, XS = 390, XG = 520, XF = 1180;
  const SX0 = 140, SX1 = 1290, ST = 500, SB = 556;
  const SP = 120, GAP = 60, PL = 18, T = 5;
  const XL = (nm) => SX0 + (SX1 - SX0) * (nm - 400) / 300;
  const thetaOf = (nm) => Math.asin(nm / D_NM);
  const yFilm = (nm) => YA - (XF - XG) * Math.tan(thetaOf(nm));
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  /* the colour the tube glows, the mean of its lines */
  function glow(E, a) {
    const s = E.lines.map(spectralRGB).reduce((p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]], [0, 0, 0]);
    const n = E.lines.length, top = Math.max(...s) / n || 1, k = 235 / top;
    return F.fact(`rgba(${Math.round(s[0] / n * k)}, ${Math.round(s[1] / n * k)}, ${Math.round(s[2] / n * k)}, ${a})`);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const E = ELEMENTS[el.value], XC = C('position'), AC = C('angle');
    const facts = F.shown.facts;
    hits = [];

    topline(ctx, `The light of ${E.name} leaves the grating only at certain angles, so the film records separate bright lines.`);

    /* the tube, glowing */
    ctx.save(); ctx.fillStyle = facts ? glow(E, 0.55) : PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(XT0, YA - 30, XT1 - XT0, 60, 30); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'discharge tube', (XT0 + XT1) / 2, YA - 56, PAL.ink, { size: 19, align: 'center' });
    hits.push({ x: (XT0 + XT1) / 2, y: YA, r: 40, name: `a discharge tube of ${E.name} gas, glowing` });

    /* the slit, the grating and the film */
    ctx.save(); ctx.fillStyle = PAL.ink;
    ctx.fillRect(XS - 4, YA - 70, 8, 62); ctx.fillRect(XS - 4, YA + 8, 8, 62);
    for (let k = -7; k <= 7; k++) ctx.fillRect(XG - 3, YA + k * 10 - 3, 6, 6);
    ctx.restore();
    text(ctx, 'slit', XS, YA - 92, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'grating', XG, YA - 96, PAL.ink, { size: 19, align: 'center' });
    hits.push({ x: XS, y: YA + 40, r: 24, name: 'the slit, which lets through a narrow beam' });
    hits.push({ x: XG, y: YA + 50, r: 24, name: 'the diffraction grating, d = 1.88 μm' });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(XF, 70, 16, YA - 40); ctx.restore();
    line(ctx, XF, 70, XF, YA + 30, PAL.muted, 2);
    text(ctx, 'film', XF + 28, YA + 10, PAL.ink, { size: 19, align: 'left' });
    hits.push({ x: XF + 8, y: YA, r: 20, name: 'the film, where each line lands' });

    /* the rays: the undeviated beam and one first-order ray for each line */
    const beam = PAL.muted;
    line(ctx, XT1, YA, XF, YA, alpha(beam, 0.35), 3);
    for (const nm of E.lines) {
      const y = yFilm(nm), c = spectral(nm, 0.3);
      line(ctx, XG, YA, XF, y, nm === E.mark ? spectral(nm, 0.75) : c, nm === E.mark ? 4 : 2);
      ctx.save(); ctx.fillStyle = spectral(nm); ctx.fillRect(XF, y - 1.5, 16, 3); ctx.restore();
    }

    /* the pulses, a whole number of spacings a loop */
    const shift = (SP * cy.now()) % GAP, L1 = XG - XT1;
    for (let s = shift - GAP; s < 760 + L1; s += GAP) {
      if (s + PL < 0) continue;
      if (s < L1) { const a = XT1 + Math.max(0, s), b = XT1 + Math.min(L1, s + PL); if (b > a) line(ctx, a, YA, b, YA, beam, 6); }
      if (s + PL > L1) {
        const a = Math.max(0, s - L1), b = s + PL - L1;
        if (XG + b <= XF) line(ctx, XG + a, YA, XG + b, YA, beam, 6);
        for (const nm of E.lines) {
          const t = thetaOf(nm), len = (XF - XG) / Math.cos(t);
          if (a >= len) continue;
          const bb = Math.min(b, len), cx = Math.cos(t), sy = Math.sin(t);
          line(ctx, XG + a * cx, YA - a * sy, XG + bb * cx, YA - bb * sy, spectral(nm), 4);
        }
      }
    }

    /* the named line's angle */
    const tm = thetaOf(E.mark);
    angleArc(ctx, { x: XG, y: YA }, 150, 0, tm, 'θ', undefined, AC);

    /* the film as developed */
    ctx.save(); ctx.fillStyle = facts ? F.fact('#000000') : PAL.soft; ctx.fillRect(SX0, ST, SX1 - SX0, SB - ST); ctx.restore();
    for (const nm of E.lines) {
      const x = XL(nm);
      ctx.save(); ctx.fillStyle = spectral(nm); ctx.fillRect(x - 1.5, ST, 3, SB - ST); ctx.restore();
      hits.push({ x, y: (ST + SB) / 2, r: 6, name: `${E.name}, ${fmt(nm, 1)} nm, leaving the grating at θ = ${fmt(thetaOf(nm) / RAD, 1)}°` });
    }
    label(ctx, `${fmt(E.mark, 0)} nm`, XL(E.mark), ST, { side: 'above', color: XC, size: 19, gap: 18 });
    for (let nm = 400; nm <= 700; nm += 50) {
      line(ctx, XL(nm), SB, XL(nm), SB + 8, PAL.muted, 2);
      text(ctx, String(nm), XL(nm), SB + 24, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'λ (nm)', SX1, SB + 54, XC, { size: 18, weight: 600, align: 'right' });

    ro.set(`\\ktheta = \\sin^{-1}\\frac{m\\klam}{\\kd} = \\sin^{-1}\\frac{(1)(${fmt(E.mark, 0)}\\ \\text{nm})}{1.88\\ \\mu\\text{m}} = ${fmt(tm / RAD, 1)}^\\circ`, '', { form: 'g' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.15 · sim-hydrogen-series · still · flat
   The lines of the first three series on one logarithmic wavelength scale,
   80 to 2000 nm, fixed; each series drawn from n_i = n_f + 1 to n_f + 40 and
   its limit dashed. The visible band is drawn in its own colours above.
===================================================================== */
(function () {
  const SERIES = [
    { v: '1', id: 'lyman', name: 'Lyman' },
    { v: '2', id: 'balmer', name: 'Balmer' },
    { v: '3', id: 'paschen', name: 'Paschen' },
  ];
  const LINES = [{ v: '1', label: '1st', word: 'first' }, { v: '2', label: '2nd', word: 'second' }, { v: '3', label: '3rd', word: 'third' }, { v: '4', label: '4th', word: 'fourth' }, { v: '5', label: '5th', word: 'fifth' }, { v: 'limit', label: 'limit', word: 'limit' }];
  const d = sim('sim-hydrogen-series', 500);
  const se = choice(d.controls, { label: '\\text{series}', options: SERIES.map((s) => ({ value: s.v, label: s.name })), value: '2', aria: 'the series, which fixes the final level', key: 'series' });
  const li = choice(d.controls, { label: '\\text{line}', options: LINES.map((l) => ({ value: l.v, label: l.label })), value: '2', aria: 'the line of the series, counted from the longest wavelength', key: 'line' });
  const X0 = 90, X1 = 1310, L0 = 80, L1 = 2000;
  const X = (nm) => X0 + (X1 - X0) * Math.log(nm / L0) / Math.log(L1 / L0);
  const LT = 200, LB = 310, AY = 330;
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const lineColor = (S, nm, a = 1) => (nm >= 380 && nm <= 700 ? spectral(nm, a) : alpha(F.ref(S.id), a));

  function draw() {
    const { ctx } = begin(d.c);
    const XC = C('position');
    const nf = +se.value, S = SERIES[nf - 1], lim = li.value === 'limit';
    const ni = lim ? Infinity : nf + +li.value, nm = lamNm(nf, ni), band = bandOf(nm);
    hits = [];

    /* the bands, the visible one in its colours */
    for (let k = 0; k < 40; k++) {
      const a = 380 + 8 * k;
      ctx.save(); ctx.fillStyle = spectral(a + 4); ctx.fillRect(X(a), 104, X(a + 8) - X(a) + 0.6, 14); ctx.restore();
    }
    text(ctx, 'visible', (X(380) + X(700)) / 2, 88, PAL.ink, { size: 18, align: 'center' });
    text(ctx, 'ultraviolet', (X(L0) + X(380)) / 2, 88, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'infrared', (X(700) + X(L1)) / 2, 88, PAL.muted, { size: 18, align: 'center' });

    /* every series, its lines crowding to its limit */
    for (const T of SERIES) {
      const f = +T.v, picked = T === S;
      for (let n = f + 40; n > f; n--) {
        const w = lamNm(f, n), x = X(w);
        line(ctx, x, LT, x, LB, lineColor(T, w, picked ? 1 : 0.55), n <= f + 5 ? 2.5 : 1.5);
        if (n <= f + 5) hits.push({ x, y: LT + 12, r: 6, name: `${T.name} series, n_i = ${n} to n_f = ${f}, ${nmText(w)} nm` });
      }
      const wl = lamNm(f, Infinity);
      line(ctx, X(wl), LT, X(wl), LB, alpha(F.ref(T.id), picked ? 1 : 0.55), 2, [4, 6]);
      hits.push({ x: X(wl), y: LB - 12, r: 6, name: `${T.name} series limit, n_i → ∞, ${nmText(wl)} nm` });
      hbracket(ctx, X(wl), X(lamNm(f, f + 1)), 404, F.ref(T.id), `${T.name} series, n_{f} = ${f}`, { side: 'below', size: 19 });
    }

    /* the chosen line */
    const x = X(nm);
    line(ctx, x, LT - 26, x, LB, lim ? F.ref(S.id) : lineColor(S, nm), 5, lim ? [10, 8] : undefined);
    label(ctx, `${lim ? 'n_{i} → ∞' : `n_{i} = ${ni}`}, ${nmText(nm)} nm`, x, LT - 26, { side: 'above', color: XC, size: 20, gap: 16 });

    /* the wavelength scale */
    line(ctx, X0, AY, X1, AY, PAL.muted, 2);
    for (const t of [100, 200, 500, 1000, 2000]) {
      line(ctx, X(t), AY, X(t), AY + 8, PAL.muted, 2);
      text(ctx, String(t), X(t), AY + 24, PAL.muted, { size: 17, align: t === 2000 ? 'right' : 'center' });
    }
    text(ctx, 'λ (nm)', X1, AY + 50, XC, { size: 18, weight: 600, align: 'right' });

    const ord = LINES.find((l) => l.v === li.value).word;
    topline(ctx, lim
      ? `The ${S.name} series limit, where $n_{\\text{i}}$ approaches infinity, lies at ${nmText(nm)} nm, in the ${band}.`
      : `The ${ord} ${S.name} line, from $n_{\\text{i}} = ${ni}$, lies at ${nmText(nm)} nm, in the ${band}.`);
    const inv = 1 / (nm * 1e-9), e = Math.floor(Math.log10(inv)), m = inv / Math.pow(10, e);
    ro.set(`\\frac{1}{\\klam} = R\\left(\\frac{1}{n_{\\text{f}}^{2}} - \\frac{1}{n_{\\text{i}}^{2}}\\right) = (1.097\\times 10^{7}\\ \\text{m}^{-1})\\left(\\frac{1}{${nf}^{2}} - ${lim ? '0' : `\\frac{1}{${ni}^{2}}`}\\right) = ${fmt(m, 3)}\\times 10^{${e}}\\ \\text{m}^{-1}`, '', { form: lim ? 'limit' : 'line' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 30.16 + 30.17 + 30.18 + 30.19 · sim-bohr-atom · moving · flat
   Left, the orbits n = 1 to 6 to scale, 8.8 units per Bohr radius, so r₆ is
   317 units. Right, the energy-level diagram, 0 to −13.6 eV over 580 units,
   fixed, with all three series' arrows faint and the chosen one bold. The
   electron circles orbit n_i at ω ∝ 1/n³ (its Bohr speed falls as 1/n), drops
   to n_f between 1.5 and 1.9 s at the same place on every loop, and its photon
   runs out of the atom from 1.7 s; its dot on the diagram drops with it. A
   5 s loop holding 1.2 s.
===================================================================== */
(function () {
  const d = sim('sim-bohr-atom', 780);
  let niC, nfC;
  niC = choice(d.controls, { label: 'n_{\\text{i}}', options: [2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: String(n) })), value: '4', aria: 'the initial level', key: 'ni',
    onInput: (v) => { if (+v <= +nfC.value) nfC.set(String(+v - 1)); cy.reset(); } });
  nfC = choice(d.controls, { label: 'n_{\\text{f}}', options: [1, 2, 3].map((n) => ({ value: String(n), label: String(n) })), value: '2', aria: 'the final level', key: 'nf',
    onInput: (v) => { if (+niC.value <= +v) niC.set(String(+v + 1)); cy.reset(); } });
  const SERIES = [null, { id: 'lyman', name: 'Lyman series', x0: 880 }, { id: 'balmer', name: 'Balmer series', x0: 1010 }, { id: 'paschen', name: 'Paschen series', x0: 1120 }];
  const OX = 360, OY = 446, K = 8.8, AB = 0.0529;
  const AX = 800, YT = 150, YB = 730, R0 = 820, R1 = 1250, DX = 15;
  const Y = (eV) => YT + (-eV / 13.6) * (YB - YT);
  const En = (n) => -13.6 / (n * n);
  const enText = (n) => { const v = En(n); return Math.abs(v) >= 10 ? fmt(v, 1) : Math.abs(v) >= 1 ? fmt(v, 2) : fmt(v, 3); };
  const minus = (s) => s.replace('-', '−');
  const rPx = (n) => K * n * n;
  const rText = (n) => { const r = AB * n * n; return fmt(r, r >= 1 ? 2 : r >= 0.1 ? 3 : 4); };
  const T = 5, TD = 1.5, TL = 1.9, TP = 1.7, W = 12.8, PHI = 160 * RAD, OUT = 140;
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const arrowX = (ni, nf) => SERIES[nf].x0 + DX * (ni - nf - 1);

  function draw() {
    const { ctx } = begin(d.c);
    const ni = +niC.value, nf = +nfC.value, S = SERIES[nf], t = cy.now();
    const EC = C('energy'), XC = C('position');
    const Ei = +enText(ni), Ef = +enText(nf), dE = Ei - Ef, nm = lamNm(nf, ni), band = bandOf(nm);
    const ph = band === 'visible' ? spectral(nm) : PAL.ink;
    hits = [];

    topline(ctx, `Dropping from $n = ${ni}$ to $n = ${nf}$, the electron gives off a ${fmt(dE, dE < 1 ? 3 : dE < 10 ? 2 : 1)}-eV photon of ${nmText(nm)} nm, ${band === 'visible' ? 'visible light' : band === 'ultraviolet' ? 'in the ultraviolet' : 'in the infrared'}.`);

    /* the orbits, to scale */
    for (let n = 1; n <= 6; n++) {
      const on = n === ni || n === nf;
      ctx.save(); ctx.strokeStyle = on ? PAL.ink : alpha(PAL.ink, 0.4); ctx.lineWidth = on ? 3 : 2;
      ctx.beginPath(); ctx.arc(OX, OY, rPx(n), 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      hits.push({ x: OX + rPx(n) * Math.cos(-100 * RAD), y: OY + rPx(n) * Math.sin(-100 * RAD), r: 8, name: `the orbit n = ${n}, r = ${rText(n)} nm, E = ${minus(enText(n))} eV` });
    }
    dot(ctx, OX, OY, F.el('p+'), true, 5);
    hits.push({ x: OX, y: OY, r: 8, name: 'the nucleus, a single proton' });

    /* the radii of the two orbits of the transition */
    const radius = (n, ang, side) => {
      const r = rPx(n), ex = OX + r * Math.cos(ang), ey = OY + r * Math.sin(ang);
      if (r > 30) arrow(ctx, OX, OY, ex, ey, XC, 3);
      label(ctx, `r_{${n}}`, ex, ey, { side, color: XC, size: 22, gap: r > 30 ? 14 : 34 });
    };
    radius(ni, -30 * RAD, 'right');
    radius(nf, 75 * RAD, 'below');

    /* the electron: round n_i, down to n_f, round n_f */
    const wi = W / (ni * ni * ni), wf = W / (nf * nf * nf);
    let r, phi;
    if (t < TD) { r = rPx(ni); phi = PHI - wi * (TD - t); }
    else if (t < TL) { r = rPx(ni) + (rPx(nf) - rPx(ni)) * (t - TD) / (TL - TD); phi = PHI; }
    else { r = rPx(nf); phi = PHI + wf * (t - TL); }
    const ex = OX + r * Math.cos(phi), ey = OY + r * Math.sin(phi);
    dot(ctx, ex, ey, F.el('e-'), true, 6);
    hits.push({ x: ex, y: ey, r: 12, name: t < TD ? `the electron, in orbit n = ${ni}` : t < TL ? 'the electron, dropping' : `the electron, in orbit n = ${nf}` });

    /* the photon, leaving */
    if (t >= TP) {
      const r0 = (rPx(ni) + rPx(nf)) / 2, rr = r0 + OUT * (t - TP), a = clamp((330 - rr) / 40, 0, 1);
      if (a > 0) {
        const px = OX + rr * Math.cos(PHI), py = OY + rr * Math.sin(PHI);
        packet(ctx, px, py, Math.cos(PHI), Math.sin(PHI), ph, a);
        hits.push({ x: px, y: py, r: 26, name: `a photon of ${fmt(dE, 2)} eV, λ = ${nmText(nm)} nm` });
      }
    }

    /* the energy-level diagram */
    arrow(ctx, AX, YB + 20, AX, YT - 50, EC, 3);
    text(ctx, 'E', AX + 14, YT - 52, EC, { size: 24, weight: 600, align: 'left' });
    for (let n = 7; n <= 30; n++) line(ctx, R0, Y(En(n)), R1, Y(En(n)), alpha(PAL.ink, 0.18), 1.5);
    line(ctx, R0, YT, R1, YT, alpha(PAL.ink, 0.6), 2, [10, 10]);
    for (let n = 1; n <= 6; n++) {
      const on = n === ni || n === nf;
      line(ctx, R0, Y(En(n)), R1, Y(En(n)), on ? PAL.ink : alpha(PAL.ink, 0.6), on ? 3 : 2);
      hits.push({ x: R1 - 20, y: Y(En(n)), r: 6, name: `the level n = ${n}, E = ${minus(enText(n))} eV` });
    }
    for (const n of [1, 2, 3, 4]) {
      text(ctx, `n = ${n}`, R1 + 12, Y(En(n)), PAL.ink, { size: 18, align: 'left' });
      text(ctx, `${minus(enText(n))} eV`, AX - 12, Y(En(n)), EC, { size: 17, align: 'right' });
    }
    text(ctx, 'n = ∞', R1 + 12, YT, PAL.ink, { size: 18, align: 'left' });
    text(ctx, '0', AX - 12, YT, EC, { size: 17, align: 'right' });

    /* the series, faint, and the chosen transition */
    for (let f = 1; f <= 3; f++) {
      const Sf = SERIES[f];
      for (let n = f + 1; n <= 6; n++) {
        if (f === nf && n === ni) continue;
        arrow(ctx, arrowX(n, f), Y(En(n)), arrowX(n, f), Y(En(f)), alpha(F.ref(Sf.id), 0.4), 2);
      }
      const xm = arrowX(f + 1, f) + DX * (5 - f) / 2;
      text(ctx, Sf.name, xm, Y(En(f)) + 20, F.ref(Sf.id), { size: 18, align: 'center', bg: PAL.panel });
    }
    const xa = arrowX(ni, nf);
    arrow(ctx, xa, Y(En(ni)), xa, Y(En(nf)), F.ref(S.id), 5);
    const ry = t < TD ? Y(En(ni)) : t < TL ? Y(En(ni)) + (Y(En(nf)) - Y(En(ni))) * (t - TD) / (TL - TD) : Y(En(nf));
    dot(ctx, xa, ry, F.el('e-'), true, 6);

    ro.set(`\\kdE = \\kEini - \\kEfin = (${enText(ni)}\\ \\text{eV}) - (${enText(nf)}\\ \\text{eV}) = ${fmt(dE, dE < 1 ? 3 : dE < 10 ? 2 : 1)}\\ \\text{eV}`,
      `$\\krn = n^{2}\\kaB$ is ${rText(ni)} nm at $n = ${ni}$ and ${rText(nf)} nm at $n = ${nf}$.`, { form: 'e' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
