/* Figures for section 27.6 Limits of Resolution: The Rayleigh Criterion.
   Position carries the wavelength, the aperture and the distances d and x, and
   angle every angle. The numerical aperture, the index and the relative
   intensity are untyped and in ink. The two objects, the antenna, the
   objective, the specimen, point P, the two point objects, the lens and the
   focal spot are the section's referents. Light is drawn in the colour of its
   wavelength by spectral(), and the panel where an image is seen is black,
   both facts through F.fact. Every figure is a state of its controls and
   registers no cycle. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, dot, text, topline, label, angleArc, axes, curve, hbracket, vbracket, hover } = F;
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
/* the components of a wavelength's colour as the Facts switch leaves it, read back through a canvas */
const probe = document.createElement('canvas').getContext('2d');
function factRGB(lam) {
  probe.clearRect(0, 0, 1, 1); probe.fillStyle = F.fact(`rgb(${spectralRGB(lam).join(', ')})`); probe.fillRect(0, 0, 1, 1);
  const p = probe.getImageData(0, 0, 1, 1).data; return [p[0], p[1], p[2]];
}
const LAM_DETENTS = [{ v: 450, label: '450' }, { v: 550, label: '550' }, { v: 633, label: '633' }];

/* the relative intensity of a circular aperture's pattern, (2 J1(u) / u)², tabulated to u = 60 */
const AIRY = (() => {
  const N = 6000, out = new Float64Array(N + 1);
  for (let i = 0; i <= N; i++) {
    const u = (i / N) * 60;
    if (u < 1e-6) { out[i] = 1; continue; }
    let s = 0; const M = 64;
    for (let k = 0; k < M; k++) { const t = ((k + 0.5) / M) * Math.PI; s += Math.cos(t - u * Math.sin(t)); }
    const j1 = s / M;
    out[i] = Math.pow((2 * j1) / u, 2);
  }
  return (u) => { const x = (Math.abs(u) / 60) * N; return x >= N ? 0 : out[Math.round(x)]; };
})();

/* =====================================================================
   Figure 27.25 + 27.26 · sim-rayleigh
   Two point sources an angle θ apart seen through a circular aperture of
   diameter D. With D in mm, θ in μrad and λ in nm, u = π D θ / λ. The graph
   is relative intensity against θ from −800 to 800 μrad and 0 to 2 (fixed);
   the image panel spans the same angles both ways. Still.
===================================================================== */
(function () {
  const d = sim('sim-rayleigh', 600);
  let lam = { v: 550 }, Dap = { v: 3 };
  const lim = () => (1.22 * lam.v) / Dap.v;
  const sep = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 800, step: 1, value: 300, unit: 'μrad', dec: 0, aria: 'the angle between the two sources', specials: [{ at: () => { const v = lim(); return v <= 800 ? v : null; }, label: 'Rayleigh' }] });
  lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 550, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  Dap = ctl(d.controls, { label: '\\kDap', cls: 'position', min: 1.5, max: 8, step: 0.01, value: 3, unit: 'mm', dec: 2, aria: 'the diameter of the aperture' });
  const P = { l: 60, t: 130, s: 400 }, TM = 800;
  const box = { l: 600, r: 1340, t: 150, b: 480 };
  let hits = [];

  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, D = Dap.v, th = sep.v, R = lim(), col = spectral(L), PC = C('position');
    const k = (Math.PI * D) / L;
    const I1 = (t) => AIRY(k * (t + th / 2)), I2 = (t) => AIRY(k * (t - th / 2));
    const just = Math.abs(th - R) < 0.5, ok = th >= R;
    topline(ctx, just
      ? `Two sources ${fmt(th, 0)} μrad apart through an aperture ${fmt(D, 2)} mm wide are just resolvable: the center of each pattern lies on the first minimum of the other.`
      : ok
        ? `Two sources ${fmt(th, 0)} μrad apart through an aperture ${fmt(D, 2)} mm wide are resolved, since the limit for ${fmt(L, 0)}-nm light is ${fmt(R, 0)} μrad.`
        : `Two sources ${fmt(th, 0)} μrad apart through an aperture ${fmt(D, 2)} mm wide blur together, since the limit for ${fmt(L, 0)}-nm light is ${fmt(R, 0)} μrad.`);

    ctx.save(); ctx.fillStyle = F.shown.facts ? F.fact('#000') : PAL.soft; ctx.fillRect(P.l, P.t, P.s, P.s); ctx.restore();
    const cell = 5, n = P.s / cell, [r, g, b] = factRGB(L);
    for (let i = 0; i < n; i++) {
      const tx = -TM + ((i + 0.5) / n) * 2 * TM;
      for (let j = 0; j < n; j++) {
        const ty = -TM + ((j + 0.5) / n) * 2 * TM;
        const I = AIRY(k * Math.hypot(tx + th / 2, ty)) + AIRY(k * Math.hypot(tx - th / 2, ty));
        if (I < 0.003) continue;
        const v = Math.min(1, 1.2 * Math.pow(I, 0.6));
        ctx.fillStyle = `rgb(${Math.round(r * v)}, ${Math.round(g * v)}, ${Math.round(b * v)})`;
        ctx.fillRect(P.l + i * cell, P.t + j * cell, cell, cell);
      }
    }
    text(ctx, 'the image as seen', P.l + P.s / 2, P.t + P.s + 28, PAL.muted, { size: 17, align: 'center' });
    const px = (t) => P.l + ((t + TM) / (2 * TM)) * P.s;
    hits = [{ x: px(-th / 2), y: P.t + P.s / 2, r: 24, name: 'the image of object 1' }, { x: px(th / 2), y: P.t + P.s / 2, r: 24, name: 'the image of object 2' }];

    const { X, Y } = axes(ctx, box, [-TM, TM], [0, 2], { nx: 4, ny: 2, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1), xl: 'θ (μrad)', xc: C('angle'), yl: 'relative intensity' });
    ctx.save(); ctx.setLineDash([10, 8]);
    curve(ctx, I1, -TM, TM, X, Y, alpha(col, 0.85), 3, 600);
    curve(ctx, I2, -TM, TM, X, Y, alpha(col, 0.85), 3, 600);
    ctx.restore();
    curve(ctx, (t) => I1(t) + I2(t), -TM, TM, X, Y, col, 5, 800);
    [-1, 1].forEach((sg) => line(ctx, X(sg * th / 2), box.b, X(sg * th / 2), Y(1), alpha(PAL.ink, 0.4), 2, [4, 8]));
    if (X(th / 2) - X(-th / 2) > 60) {
      label(ctx, 'object 1', X(-th / 2), Y(1), { side: 'left', size: 20, color: F.ref('object-1'), gap: 14 });
      label(ctx, 'object 2', X(th / 2), Y(1), { side: 'right', size: 20, color: F.ref('object-2'), gap: 14 });
      hbracket(ctx, X(-th / 2), X(th / 2), Y(1.35), C('angle'));
      text(ctx, 'θ', X(0), Y(1.35) - 24, C('angle'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    } else label(ctx, 'objects 1 and 2', X(0), Y(Math.max(1, I1(0) + I2(0))), { side: 'above', size: 20, color: PAL.ink, gap: 14 });

    readout(d.readout, `\\ktheta_{\\text{min}} = 1.22\\frac{\\klam}{\\kDap} = 1.22\\,\\frac{${fmt(L, 0)}\\ \\text{nm}}{${fmt(D, 2)}\\ \\text{mm}} = ${fmt(R, 0)}\\ \\mu\\text{rad}`,
      th === 0 ? 'The two sources lie in one direction and make a single image.' : just ? 'The two sources sit exactly at the Rayleigh criterion.' : ok ? `The sources are ${fmt(th / R, 2)} times the smallest resolvable angle apart.` : `The sources are only ${fmt(th / R, 2)} times the smallest resolvable angle apart.`);
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.29 · sim-beam-spread
   A beam of diameter D leaves a dish antenna and spreads at θ = 1.22 λ/D.
   The beam is drawn 30 units per millimetre across and its spreading angle
   100 times larger than it is (rule 28.4). Still.
===================================================================== */
(function () {
  const d = sim('sim-beam-spread', 560);
  const Dap = ctl(d.controls, { label: '\\kDap', cls: 'position', min: 0.5, max: 5, step: 0.01, value: 1, unit: 'mm', dec: 2, aria: 'the diameter of the beam' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 633, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const X0 = 260, CY = 330, LEN = 900, K = 100, PXMM = 30;

  function draw() {
    const { ctx } = begin(d.c);
    const D = Dap.v, L = lam.v, th = (1.22 * L) / D, a = th * 1e-6 * K, col = spectral(L), PC = C('position');
    const h = (D * PXMM) / 2;
    topline(ctx, `A beam ${fmt(D, 2)} mm across of ${fmt(L, 0)}-nm light spreads at ${fmt(th, 0)} μrad on either side, however parallel its rays start out.`);

    const x1 = X0 + LEN, rise = LEN * Math.tan(a);
    ctx.save(); ctx.fillStyle = spectral(L, 0.18); ctx.beginPath();
    ctx.moveTo(X0, CY - h); ctx.lineTo(x1, CY - h - rise); ctx.lineTo(x1, CY + h + rise); ctx.lineTo(X0, CY + h); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X0, CY - h, x1, CY - h - rise, col, 4);
    line(ctx, X0, CY + h, x1, CY + h + rise, col, 4);
    line(ctx, X0, CY - h, x1, CY - h, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, X0, CY + h, x1, CY + h, alpha(PAL.ink, 0.4), 2, [4, 8]);

    const dh = Math.max(h + 30, 60);
    const AN = F.ref('antenna');
    ctx.save(); ctx.strokeStyle = AN; ctx.lineWidth = 5; ctx.beginPath();
    for (let i = 0; i <= 40; i++) { const y = -dh + (2 * dh * i) / 40, x = X0 - 40 * (1 - Math.pow(y / dh, 2)); i ? ctx.lineTo(x, y + CY) : ctx.moveTo(x, y + CY); }
    ctx.stroke(); ctx.restore();
    line(ctx, X0 - 40, CY, X0 - 40, 540, AN, 4);
    line(ctx, X0 - 100, 540, X0 + 20, 540, AN, 4);
    text(ctx, 'antenna', X0 + 34, 540, AN, { size: 17, align: 'left' });

    vbracket(ctx, X0 - 70, CY - h, CY + h, PC, 'D', -1, { size: 22 });
    angleArc(ctx, { x: X0, y: CY - h }, 560, 0, a, 'θ', undefined, C('angle'));
    readout(d.readout, `\\ktheta = 1.22\\frac{\\klam}{\\kDap} = 1.22\\,\\frac{${fmt(L, 0)}\\ \\text{nm}}{${fmt(D, 2)}\\ \\text{mm}} = ${fmt(th, 0)}\\ \\mu\\text{rad}`,
      'The spreading is drawn 100 times larger than it is; a wider beam spreads less.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.30 · sim-resolving-power
   A microscope objective of diameter D a distance d above the specimen, drawn
   25 units per millimetre, gathers a cone of half-angle α with sin α = D/2d.
   The inset on the right shows the specimen magnified, 55 units per μm, with
   the two points x apart. Still.
===================================================================== */
(function () {
  const d = sim('sim-resolving-power', 600);
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 5, max: 15, step: 0.1, value: 5, unit: 'mm', dec: 1, aria: 'the distance from the specimen to the objective lens' });
  const Dap = ctl(d.controls, { label: '\\kDap', cls: 'position', min: 2, max: 9, step: 0.1, value: 4, unit: 'mm', dec: 1, aria: 'the diameter of the objective lens' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 380, max: 750, step: 1, value: 550, unit: 'nm', dec: 0, aria: 'the wavelength of the light', detents: LAM_DETENTS });
  const CX = 420, LY = 150, PX = 25, IN = { l: 820, r: 1340, t: 190, b: 470 }, PXUM = 55;

  function draw() {
    const { ctx } = begin(d.c);
    const dd = dS.v, D = Dap.v, L = lam.v, x = (1.22 * L * dd) / D / 1000, sa = D / (2 * dd), NA = sa;
    const col = spectral(L), PC = C('position');
    topline(ctx, `An objective ${fmt(D, 1)} mm across held ${fmt(dd, 1)} mm above the specimen can separate points ${fmt(x, 2)} μm apart.`);

    const SY = LY + dd * PX, hw = (D * PX) / 2;
    const OB = F.ref('objective'), SP = F.ref('specimen'), PP = F.ref('point-p');
    line(ctx, CX - 260, SY, CX + 260, SY, SP, 3);
    ctx.save(); ctx.fillStyle = spectral(L, 0.2); ctx.beginPath(); ctx.moveTo(CX, SY); ctx.lineTo(CX - hw, LY); ctx.lineTo(CX + hw, LY); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, CX, SY, CX - hw, LY, col, 4);
    line(ctx, CX, SY, CX + hw, LY, col, 4);
    line(ctx, CX, SY, CX, LY, alpha(PAL.ink, 0.4), 2, [4, 8]);
    ctx.save(); ctx.fillStyle = alpha(OB, 0.12); ctx.strokeStyle = OB; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(CX, LY, hw, 14, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    dot(ctx, CX, SY, PP, true, 7);
    label(ctx, 'P', CX, SY, { side: 'below', size: 22, color: PP, gap: 12 });
    text(ctx, 'microscope objective', CX + hw + 20, LY - 30, OB, { size: 17 });
    hbracket(ctx, CX - hw, CX + hw, LY - 40, PC, 'D');
    vbracket(ctx, CX + 290, LY, SY, PC, 'd', 1, { size: 22 });
    const ea = Math.atan2(SY - LY, hw);
    angleArc(ctx, { x: CX, y: SY }, Math.min(90, (SY - LY) * 0.55), ea, Math.PI / 2, 'α', undefined, C('angle'));

    line(ctx, CX + 12, SY, IN.l, IN.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(IN.l, IN.t, IN.r - IN.l, IN.b - IN.t); ctx.restore();
    text(ctx, 'the specimen near P, magnified', (IN.l + IN.r) / 2, IN.t - 18, SP, { size: 17, align: 'center' });
    const mx = (IN.l + IN.r) / 2, my = (IN.t + IN.b) / 2 + 20, half = (x * PXUM) / 2;
    dot(ctx, mx - half, my, F.ref('point-objects'), true, 7); dot(ctx, mx + half, my, F.ref('point-objects'), true, 7);
    hbracket(ctx, mx - half, mx + half, my - 40, PC, `x = ${fmt(x, 2)} μm`);
    line(ctx, IN.l + 30, IN.b - 30, IN.l + 30 + PXUM, IN.b - 30, PAL.ink, 3);
    text(ctx, '1 μm', IN.l + 30 + PXUM / 2, IN.b - 50, PAL.muted, { size: 17, align: 'center' });

    readout(d.readout, `\\kx = 1.22\\frac{\\klam\\kd}{\\kDap} = 1.22\\,\\frac{(${fmt(L, 0)}\\ \\text{nm})(${fmt(dd, 1)}\\ \\text{mm})}{${fmt(D, 1)}\\ \\text{mm}} = ${fmt(x, 2)}\\ \\mu\\text{m}`,
      `In air, $n = 1.00$ and $\\text{NA} = n\\sin\\kalphahalf \\approx \\kDap/2\\kd = ${fmt(NA, 2)}$, so $0.61\\klam n/\\text{NA}$ gives the same ${fmt(x, 2)} μm.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.31 · sim-focal-spot
   Parallel rays through a lens converge at the half-angle α with sin α = NA.
   In geometric optics they meet at a point; in wave optics the waist is the
   focal spot, about x = 0.61 λ/NA across for 550-nm light in air, drawn
   0.022 units per nanometre. Still.
===================================================================== */
(function () {
  const d = sim('sim-focal-spot', 500);
  const mode = choice(d.controls, { label: '\\text{optics}', options: [{ value: 'geo', label: 'geometric' }, { value: 'wave', label: 'wave' }], value: 'wave', aria: 'which optics describes the focus' });
  const na = ctl(d.controls, { label: '\\text{NA}', cls: '', min: 0.1, max: 0.95, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'the numerical aperture of the lens' });
  const FX = 860, CY = 300, HMAX = 170, LAM = 550;

  function draw() {
    const { ctx } = begin(d.c);
    const N = na.v, al = Math.asin(N), ta = Math.tan(al), x = (0.61 * LAM) / N;
    const wv = mode.mix((v) => (v === 'wave' ? 1 : 0)), wave = mode.value === 'wave', col = spectral(LAM);
    const Lf = Math.min(560, HMAX / ta), h = Lf * ta, LX = FX - Lf, x1 = Math.min(1360, FX + Lf), w = wv * Math.min(0.022 * x, 0.45 * h);
    topline(ctx, wave
      ? `In wave optics the rays never meet at a point, and for NA = ${fmt(N, 2)} the focal spot is about ${fmt(x / 1000, 2)} μm across.`
      : 'In geometric optics the rays cross at a focal point with no width at all, which would mean an infinite intensity.');

    for (const sg of [-1, 1]) {
      line(ctx, 60, CY + sg * h, LX, CY + sg * h, col, 4);
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.beginPath();
      for (let i = 0; i <= 80; i++) { const xx = LX + ((x1 - LX) * i) / 80, z = xx - FX, y = CY + sg * Math.sqrt(w * w + (h * h - w * w) * (z / Lf) * (z / Lf)); i ? ctx.lineTo(xx, y) : ctx.moveTo(xx, y); }
      ctx.stroke(); ctx.restore();
    }
    ctx.save(); ctx.fillStyle = alpha(F.ref('lens'), 0.12); ctx.strokeStyle = F.ref('lens'); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(LX, CY, 14, h + 24, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, 60, CY, 1360, CY, alpha(PAL.ink, 0.3), 2, [4, 8]);
    if (w > 0.5) { ctx.save(); ctx.fillStyle = spectral(LAM, 0.35 * mode.a('wave')); ctx.beginPath(); ctx.ellipse(FX, CY, Math.max(8, w), w, 0, 0, 2 * Math.PI); ctx.fill(); ctx.restore(); }
    else dot(ctx, FX, CY, F.ref('focal-spot'), true, 6);
    /* past NA 0.77 the rays leave no room below the focus, and the hover names it */
    spotName = wave ? 'focal region' : 'focal point';
    if (ta < 1.2) label(ctx, spotName, FX, CY + w, { side: 'below', size: 20, color: F.ref('focal-spot'), gap: 40 });
    angleArc(ctx, { x: FX, y: CY }, Math.min(130, Lf * 0.8), Math.PI - al, Math.PI, Lf > 100 ? 'α' : '', undefined, C('angle'));

    readout(d.readout, `\\kx = 0.61\\frac{\\klam n}{\\text{NA}} = 0.61\\,\\frac{(${LAM}\\ \\text{nm})(1.00)}{${fmt(N, 2)}} = ${fmt(x / 1000, 2)}\\ \\mu\\text{m}`,
      wave ? 'A larger NA makes the spot smaller and brighter; the waist is drawn far wider than it is.' : 'Geometric optics ignores diffraction, so it predicts a spot of no size whatever the NA.');
  }
  let spotName = 'focal region';
  hover(d.stage, () => [{ x: FX, y: CY, r: 24, name: spotName }]);
  register(d.fig, { update: () => {}, draw });
})();
};
