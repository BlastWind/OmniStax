/* Figures for section 34.1 Cosmology and Particle Physics.
   The page binds velocity, position, time, temperature, energy and intensity.
   H₀, k, counts and ratios are ink. Referents: the Milky Way (milky-way) and
   the galaxy 100 Mly away of the text's example (distant-galaxy), drawn in
   Figure 34.5 + 34.6; every other galaxy is an unnamed ink body named by hover.
   No convention or fact colours: a microwave glow has no visible colour. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['34.1'] = function (root, F) {
const { fmt, C, PAL, alpha, choice, ctl, register, begin, line, arrow, text, topline, labeller, hover, axes, curve, cycle, dot, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* a number as m × 10ⁿ in TeX, to sig significant figures */
function sciParts(x, sig) {
  let e = Math.floor(Math.log10(x) + 1e-12), m = x / 10 ** e;
  if (+m.toFixed(sig - 1) >= 10) { m /= 10; e += 1; }
  return { m: +m.toFixed(sig - 1), e };
}
const sciTex = (x, sig) => { const p = sciParts(x, sig); return p.e >= 0 && p.e < sig ? (p.m * 10 ** p.e).toPrecision(sig) : p.m.toFixed(sig - 1) + '\\times 10^{' + p.e + '}'; };
const thousands = (x) => Math.round(x).toLocaleString('en-US');
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const pow10 = (n) => '10' + String(n).split('').map((ch) => SUP[ch]).join('');

/* a galaxy seen at an angle: a tilted ellipse with a brighter core */
function galaxy(ctx, x, y, rx, tilt, fill, a) {
  ctx.save(); ctx.globalAlpha *= a ?? 1;
  ctx.translate(x, y); ctx.rotate(tilt);
  ctx.fillStyle = fill; ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.ellipse(0, 0, rx, rx * 0.45, 0, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(PAL.ink, 0.75); ctx.beginPath(); ctx.ellipse(0, 0, rx * 0.28, rx * 0.16, 0, 0, TAU); ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 34.5 + 34.6 · sim-hubble-expansion · moving · flat (rule 28.1)
   A slice of space 800 Mly wide and 110 Mly high holds galaxies on a
   lattice 50 Mly apart, jittered; the Milky Way sits at the center and the
   distant galaxy of the text's example 100 Mly to its right. Every
   separation grows as e^{H₀t}: H₀ = 20 (km/s)/Mly is 0.0667 per billion
   years, so in the 5 billion years of the loop (1 billion years a second)
   the space between galaxies grows 1.40 times. The galaxy watched from
   stays put on screen, and each other galaxy carries its recession
   velocity v = H₀d as an arrow, 0.0075 px per km/s. The graph plots the
   galaxies on screen: d from 0 to 500 Mly, v from 0 to 15,000 km/s, the
   most that H₀ = 30 gives at 500 Mly.
===================================================================== */
(function () {
  const H = 880, X0 = 700, Y0 = 252, K = 1.7, SCENE = { l: 18, r: 1382, t: 92, b: 412 };
  const BOX = { l: 170, r: 1250, t: 560, b: 780 }, DMAX = 500, VMAX = 15000, KA = 0.0075, T_LOOP = 5;
  const MLY_PER_GY = 0.003336;   /* (km/s)/Mly to 1/Gy: 3.156 × 10¹⁶ s per Gy over 9.461 × 10¹⁸ km per Mly */
  const d = sim('sim-hubble-expansion', H);
  const HOME = { mw: [0, 0], far: [100, 0] };
  const homeC = choice(d.controls, { label: '\\text{watched from}', options: [{ value: 'mw', label: 'the Milky Way' }, { value: 'far', label: 'the distant galaxy' }], value: 'mw', aria: 'the galaxy the expansion is watched from', onInput: () => cy.reset() });
  const hS = ctl(d.controls, { label: 'H_{0}', cls: '', min: 10, max: 30, step: 0.5, value: 20, unit: '(km/s)/Mly', dec: 1, aria: 'the Hubble constant, in kilometers per second per million light years', onInput: () => cy.reset() });
  const cy = cycle(() => T_LOOP, 1.2);
  let hits = [];
  hover(d.stage, () => hits);
  let lastRO = '';

  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const GAL = [];
  for (let row = -1; row <= 1; row++) for (let col = -8; col <= 8; col++) {
    const id = row === 0 && col === 0 ? 'milky-way' : row === 0 && col === 2 ? 'distant-galaxy' : null;
    const jx = (rnd() - 0.5) * 26, jy = (rnd() - 0.5) * 20, tilt = rnd() * Math.PI, rx = 8 + rnd() * 5;
    GAL.push({ x: col * 50 + (id ? 0 : jx), y: row * 55 + (id ? 0 : jy), id, tilt: id ? 0.35 : tilt, rx: id ? 13 : rx });
  }
  const NAME = { 'milky-way': 'the Milky Way', 'distant-galaxy': 'the distant galaxy' };

  function draw() {
    const { ctx } = begin(d.c);
    const H0 = hS.v, t = cy.now(), a = Math.exp(H0 * MLY_PER_GY * t);
    const [hx, hy] = homeC.mix((v) => HOME[v]);
    const homeId = homeC.value === 'mw' ? 'milky-way' : 'distant-galaxy';
    const VC = C('velocity'), XC = C('position'), TC = C('time');
    const head = homeC.value === 'mw'
      ? 'From the Milky Way every galaxy recedes at a speed proportional to its distance, $\\kv = H_{0}\\kd$.'
      : 'From the distant galaxy the Milky Way and every other galaxy recede by the same law, $\\kv = H_{0}\\kd$.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    /* the slice of space */
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1; ctx.strokeRect(SCENE.l, SCENE.t, SCENE.r - SCENE.l, SCENE.b - SCENE.t); ctx.restore();
    const sx = (p) => X0 + (hx + (p.x - hx) * a) * K, sy = (p) => Y0 + (hy + (p.y - hy) * a) * K;
    const shown = [];
    GAL.forEach((g) => {
      const x = sx(g), y = sy(g);
      if (x < SCENE.l + 14 || x > SCENE.r - 14 || y < SCENE.t + 10 || y > SCENE.b - 10) return;
      const dx = (g.x - hx) * a, dy = (g.y - hy) * a, dist = Math.hypot(dx, dy);
      shown.push({ g, x, y, dist, v: H0 * dist, ux: dist ? dx / dist : 0, uy: dist ? dy / dist : 0 });
    });
    ctx.save(); ctx.beginPath(); ctx.rect(SCENE.l, SCENE.t, SCENE.r - SCENE.l, SCENE.b - SCENE.t); ctx.clip();
    shown.forEach((s) => {
      if (s.dist < 1e-6 || s.g.id === homeId) return;
      const L = s.v * KA, r0 = s.g.rx + 3;
      if (L > 4) arrow(ctx, s.x + s.ux * r0, s.y + s.uy * r0, s.x + s.ux * (r0 + L), s.y + s.uy * (r0 + L), VC, 3.5);
    });
    shown.forEach((s) => galaxy(ctx, s.x, s.y, s.g.rx, s.g.tilt, s.g.id ? F.ref(s.g.id) : alpha(PAL.ink, 0.28)));
    ctx.restore();
    const hp = shown.find((s) => s.g.id === homeId);
    if (hp) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(hp.x, hp.y, 24, 0, TAU); ctx.stroke(); ctx.restore();
      lab.add('watched from here', hp.x, hp.y + 26, 0, 1, PAL.ink, 18, 14);
    }
    shown.forEach((s) => hits.push({ x: s.x, y: s.y, r: 16, name: s.g.id === homeId ? NAME[homeId] + ', the galaxy watched from'
      : (s.g.id ? NAME[s.g.id] : 'a galaxy') + ', ' + fmt(s.dist, 0) + ' Mly away, receding at ' + thousands(s.v) + ' km/s' }));

    /* the frame of the scene, in the row beneath it: time, the scale and the two named galaxies */
    const RY = SCENE.b + 34;
    hbracket(ctx, SCENE.l + 14, SCENE.l + 14 + 100 * K, RY, PAL.ink);
    text(ctx, '100 Mly', SCENE.l + 30 + 100 * K, RY, PAL.ink, { size: 18, align: 'left' });
    text(ctx, 't = ' + fmt(t, 1) + ' billion years', 560, RY, TC, { size: 20, weight: 600, align: 'center' });
    ['milky-way', 'distant-galaxy'].forEach((id, i) => {
      const x = 900 + i * 210;
      galaxy(ctx, x, RY, 11, 0.35, F.ref(id));
      text(ctx, NAME[id], x + 20, RY, PAL.ink, { size: 18, align: 'left' });
    });
    lab.place({ l: SCENE.l, r: SCENE.r, t: SCENE.b + 6, b: SCENE.b + 60 });

    /* the graph: recession velocity against distance */
    const A = axes(ctx, BOX, [0, DMAX], [0, VMAX], { nx: 5, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => thousands(v), xl: 'd (Mly)', xc: XC, yl: 'v (km/s)', yc: VC });
    const k = F.arrival(d);
    const dEnd = Math.min(DMAX, VMAX / H0) * F.ease.smooth(Math.max(0, Math.min(1, (k - 0.3) / 0.7)));
    if (dEnd > 0) line(ctx, A.X(0), A.Y(0), A.X(dEnd), A.Y(H0 * dEnd), VC, 3);
    const dl = Math.min(DMAX, VMAX / H0) * 0.86;
    lab.add('slope H₀ = ' + fmt(H0, 1) + ' (km/s)/Mly', A.X(dl), A.Y(H0 * dl), 0.5, -1, PAL.ink, 18, 30);
    shown.forEach((s) => {
      if (s.g.id === homeId || s.dist > DMAX) return;
      const x = A.X(s.dist), y = A.Y(s.v);
      if (s.g.id) dot(ctx, x, y, F.ref(s.g.id), true, 9);
      else { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.55); ctx.beginPath(); ctx.arc(x, y, 5, 0, TAU); ctx.fill(); ctx.restore(); }
      hits.push({ x, y, r: 10, name: (s.g.id ? NAME[s.g.id] : 'a galaxy') + ': ' + fmt(s.dist, 0) + ' Mly, ' + thousands(s.v) + ' km/s' });
    });
    lab.flush();

    const dT = 100 * a;
    const ro = '\\kv = H_{0}\\kd = (' + fmt(H0, 1) + '\\;\\text{(km/s)/Mly})(' + fmt(dT, 0) + '\\;\\text{Mly}) = ' + thousands(H0 * Math.round(dT)).replace(',', '{,}') + '\\;\\text{km/s}';
    if (ro !== lastRO) { F.tex(d.readout, ro); lastRO = ro; }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 34.7 · sim-cmbr-stretch · moving · flat (rule 28.1)
   (a) The remnant of the fireball as a disc whose radius is the size of
   the universe, from a quarter of today's size to today's over the 5 s of
   the loop, galaxies riding outward with arrows of velocity proportional
   to their distance from the center of the drawing. (b) Planck's
   λ⁻⁵/(e^{hc/λkT} − 1), hc/k = 14.39 mm·K, at T = 2.725 K × (size today /
   size then), from 10.9 K (peak 0.27 mm) to 2.725 K (peak 1.06 mm). The
   intensity is on an arbitrary scale, each spectrum drawn to the book's
   peak height of 1.15; λ runs logarithmically from 0.1 to 10 mm, the
   book's 0.5 to 10 mm and the hotter peaks besides. The squares are the
   book's measured spectrum at 2.725 K.
===================================================================== */
(function () {
  const H = 620, CX = 300, CY = 345, RMAX = 205, T_LOOP = 5, T_NOW = 2.725, HCK = 14.388, WIEN = 2.8978;
  const BOX = { l: 660, r: 1300, t: 180, b: 490 };
  const d = sim('sim-cmbr-stretch', H);
  const cy = cycle(() => T_LOOP, 1.5);
  let hits = [];
  hover(d.stage, () => hits);
  let lastRO = '';
  const planck = (T) => (lam) => lam ** -5 / Math.expm1(HCK / (lam * T));
  const spectrum = (T) => { const f = planck(T), n = 1.15 / f(WIEN / T); return (u) => n * f(10 ** u); };
  const GAL = [[0.25, 0.4], [0.5, 1.5], [0.72, 2.6], [0.85, 0.1], [0.62, 3.9], [0.4, 4.9], [0.8, 5.5], [0.35, 2.2], [0.9, 4.4]];
  const MEAS = Array.from({ length: 32 }, (_, i) => Math.log10(0.5) + (i / 31) * (1 - Math.log10(0.5)));

  function draw() {
    const { ctx } = begin(d.c);
    const f = 0.25 + 0.75 * (cy.now() / T_LOOP), ratio = +(1 / f).toFixed(2), T = T_NOW * ratio, lp = WIEN / T;
    const IC = C('intensity'), XC = C('position'), VC = C('velocity');
    const head = ratio <= 1.0001
      ? 'Today the radiation peaks at 1.06 mm: a blackbody at 2.725 K, the cosmic microwave background.'
      : 'With the universe at ' + fmt(1 / ratio, 2) + ' of its present size, the radiation peaks at ' + fmt(lp, 2) + ' mm and looks like a ' + fmt(T, 1) + ' K blackbody.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    /* (a) the remnant of the fireball, expanding */
    text(ctx, '(a)', 40, 118, PAL.muted, { size: 20, align: 'left' });
    const R = RMAX * f;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    hits.push({ x: CX + R * 0.7, y: CY - R * 0.7, r: 12, name: 'the edge of the remnant, expanding' });
    GAL.forEach(([r, th], i) => {
      const x = CX + r * R * Math.cos(th), y = CY - r * R * Math.sin(th), L = 0.42 * r * R, ux = Math.cos(th), uy = -Math.sin(th);
      arrow(ctx, x + ux * 12, y + uy * 12, x + ux * (12 + L), y + uy * (12 + L), VC, 3.5);
      galaxy(ctx, x, y, 9, th + i, alpha(PAL.ink, 0.28));
      hits.push({ x, y, r: 14, name: 'a galaxy formed in the cooling remnant, flying outward with the expansion' });
    });
    hits.push({ x: CX, y: CY, r: R, name: 'the remnant of the primordial fireball, ' + fmt(1 / ratio, 2) + ' of its present size' });

    /* (b) the spectrum, on a logarithmic scale of wavelength */
    text(ctx, '(b)', BOX.l - 80, 118, PAL.muted, { size: 20, align: 'left' });
    const A = axes(ctx, BOX, [-1, 1], [0, 1.4], { nx: 2, ny: 7, fx: (u) => ({ '-1': '0.1', 0: '1', 1: '10' })[Math.round(u)], fy: (v) => fmt(v, 1), xl: 'λ (mm)', xc: XC, yl: 'I (arbitrary scale)', yc: IC });
    [0.2, 0.5, 2, 5].forEach((lam) => {
      const x = A.X(Math.log10(lam));
      line(ctx, x, BOX.t, x, BOX.b, PAL.rule, 1.5);
      text(ctx, String(lam), x, BOX.b + 26, PAL.muted, { size: 17, align: 'center' });
    });
    const meas = spectrum(T_NOW);
    ctx.save(); ctx.fillStyle = alpha(IC, 0.5);
    MEAS.forEach((u) => { const x = A.X(u), y = A.Y(meas(u)); ctx.fillRect(x - 5, y - 5, 10, 10); });
    ctx.restore();
    const uLab = Math.log10(2.2);
    lab.add('measured, 2.725 K', A.X(uLab) + 6, A.Y(meas(uLab)), 1, -0.3, IC, 18, 24);
    MEAS.forEach((u, i) => { if (i % 3 === 0) hits.push({ x: A.X(u), y: A.Y(meas(u)), r: 9, name: 'the spectrum measured today, ' + fmt(10 ** u, 2) + ' mm' }); });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t - 4, BOX.r - BOX.l, BOX.b - BOX.t + 4); ctx.clip();
    curve(ctx, spectrum(T), -1, 1, A.X, A.Y, IC, 5, 260);
    ctx.restore();
    const px = A.X(Math.log10(lp)), py = A.Y(1.15);
    line(ctx, px, py + 10, px, BOX.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, px, py, IC, true, 8);
    hits.push({ x: px, y: py, r: 12, name: 'the peak, at ' + fmt(lp, 2) + ' mm' });
    lab.flush();

    const ro = '\\kTemp = (2.725\\;\\text{K})\\left(\\frac{\\text{size today}}{\\text{size then}}\\right) = (2.725\\;\\text{K})(' + ratio.toFixed(2) + ') = ' + T.toFixed(2) + '\\;\\text{K}';
    if (ro !== lastRO) { F.tex(d.readout, ro); lastRO = ro; }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 34.9 · sim-epochs · still · flat (rule 28.1)
   u = log₁₀(t/s) on a fixed axis from −44 to 17.67, the present at
   1.5 × 10¹⁰ y = 4.73 × 10¹⁷ s. While radiation dominates,
   T = 10¹⁰ K (t/1 s)^{−1/2}; from t_eq the universe is matter-dominated and
   T ∝ t^{−2/3}, with t_eq = 2.0 × 10¹³ s chosen so the present lands on
   2.725 K. The average kinetic energy is (3/2)kT, k = 8.62 × 10⁻⁵ eV/K:
   10¹⁹ GeV near 10⁻⁴³ s and 10¹⁴ GeV near 10⁻³⁴ s, as the text says. The
   band's half-height is the size of the universe on a log scale,
   1.31 px per power of ten: size ∝ t^{1/2} before inflation, a factor of
   10⁵⁰ from 10⁻³⁵ to 10⁻³² s with log(size) growing in step with t, then
   t^{1/2} and t^{2/3}. The book's figure puts Earth, Life and Now at
   10, 10.5 and 15 × 10¹⁰ y; here they stand at 1.0, 1.05 and 1.5 × 10¹⁰ y,
   as the text's 13 to 15 billion years ask.
===================================================================== */
(function () {
  const H = 580, BOX = { l: 110, r: 1290 }, YM = 352, TA = 168, U0 = -44, YEAR = 3.156e7;
  const T_NOW = 2.725, T_NOW_S = 1.5e10 * YEAR, UN = Math.log10(T_NOW_S);
  const KB = 8.617e-5, KB_SHOWN = 8.62e-5;
  const tEq = (T_NOW * T_NOW_S ** (2 / 3) / 1e10) ** 6, uEq = Math.log10(tEq);
  const temp = (u) => { const t = 10 ** u; return t <= tEq ? 1e10 / Math.sqrt(t) : (1e10 / Math.sqrt(tEq)) * (t / tEq) ** (-2 / 3); };
  const logA = (u) => {
    if (u >= uEq) return (2 / 3) * (u - UN);
    const aEq = (2 / 3) * (uEq - UN);
    if (u >= -32) return aEq + 0.5 * (u - uEq);
    const a32 = aEq + 0.5 * (-32 - uEq);
    if (u >= -35) return a32 - 50 * (1e-32 - 10 ** u) / (1e-32 - 1e-35);
    return a32 - 50 + 0.5 * (u + 35);
  };
  const LA0 = logA(U0), KH = 100 / (logA(UN) - LA0);
  const half = (u) => 5 + KH * (logA(u) - LA0);
  const X = (u) => BOX.l + ((u - U0) / (UN - U0)) * (BOX.r - BOX.l);
  const uOfE = (gev) => 2 * Math.log10(1e10 / (gev * 1e9 / (1.5 * KB)));   /* the time the average energy is gev, radiation era */
  const yrU = (y) => Math.log10(y * YEAR);
  const ERAS = [
    [-6, 'the quark era, about 10⁻⁶ s', '; this is the quark era'], [-4, 'the lepton era, about 10⁻⁴ s', '; this is the lepton era'],
    [1, 'the photon era, about 10 s', '; this is the photon era'], [2, 'nucleosynthesis, about 100 s: light nuclei form', ', and light nuclei are forming'],
    [yrU(3e5), 'about 3 × 10⁵ y: atoms form, the atomic era', ', and atoms have formed'], [yrU(1e8), 'about 10⁸ y: stars and protogalaxies', ', and stars and protogalaxies are forming'],
    [yrU(1e9), 'about 10⁹ y: galaxies', ', and galaxies have formed'], [yrU(1e10), 'about 1.0 × 10¹⁰ y: the Earth forms', ', and the Earth has formed'],
    [yrU(1.05e10), 'about 1.05 × 10¹⁰ y: life begins', ', and life has begun'],
  ];
  const d = sim('sim-epochs', H);
  const uS = ctl(d.controls, { label: '\\log_{10}(\\kt/\\text{s})', cls: 'time', min: U0, max: +UN.toFixed(2), step: 0.01, value: -12, unit: '', dec: 2, aria: 'the time after the Big Bang, as a power of ten of seconds',
    specials: [{ at: -43, label: 'TOE' }, { at: -35, label: 'symmetry breaking' }, { at: -32, label: 'inflation ends' }, { at: -11, label: 'electroweak ends' }] });
  let hits = [];
  hover(d.stage, () => hits);

  function timeTex(u) {
    if (u < yrU(1)) return sciTex(10 ** u, 2) + '\\;\\text{s}';
    return sciTex(10 ** u / YEAR, 2) + '\\;\\text{y}';
  }
  function epochText(u) {
    if (u < -43) return 'the universe is in the TOE epoch, when all four forces are one, the superforce.';
    if (u < -35) return 'the universe is in the GUT epoch, when all forces except gravity are identical.';
    if (u < -32) return 'the universe is inflating, as spontaneous symmetry breaking separates the strong force from the electroweak.';
    if (u < -11) return 'the universe is in the electroweak epoch, when the electromagnetic and weak forces are identical.';
    const era = ERAS.filter((e) => e[0] <= u).pop();
    return 'the four forces are distinct' + (era ? era[2] : '') + '.';
  }

  function draw() {
    const { ctx } = begin(d.c);
    const u = uS.v, T = temp(u), TC = C('time'), EC = C('energy');
    const lab = labeller(ctx, H, { headline: topline(ctx, 'At $\\kt = ' + timeTex(u) + '$ ' + epochText(u)) });
    hits = [];
    const k = F.ease.smooth(F.arrival(d));

    /* the time axis along the top */
    line(ctx, BOX.l, TA, BOX.l + (BOX.r - BOX.l) * k, TA, PAL.muted, 2);
    for (let n = -40; n <= 10; n += 10) {
      const x = X(n);
      line(ctx, x, TA - 8, x, TA, PAL.muted, 2);
      text(ctx, pow10(n), x, TA - 24, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 't (s)', BOX.r, TA - 52, TC, { size: 20, weight: 600, align: 'right' });
    lab.place({ l: BOX.r - 70, r: BOX.r + 4, t: TA - 66, b: TA - 38 });
    line(ctx, X(UN), TA - 8, X(UN), TA + 8, PAL.ink, 2);
    lab.add('now', X(UN), TA + 8, 0, 1, PAL.ink, 18, 14);

    /* the band: its height the size of the universe on a logarithmic scale */
    const N = 700, top = [], bot = [];
    for (let i = 0; i <= N; i++) { const uu = U0 + ((UN - U0) * i * k) / N; top.push([X(uu), YM - half(uu)]); bot.push([X(uu), YM + half(uu)]); }
    ctx.save(); ctx.beginPath(); top.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); bot.slice().reverse().forEach(([x, y]) => ctx.lineTo(x, y)); ctx.closePath();
    ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fill(); ctx.restore();
    [top, bot].forEach((pts) => { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); });

    /* the epochs the text names, their boundaries dashed */
    [-43, -35, -32, -11].forEach((ub) => line(ctx, X(ub), YM - half(ub) - 6, X(ub), YM + half(ub) + 6, alpha(PAL.ink, 0.45), 2, [6, 6]));
    [[-43.5, 'TOE'], [-39, 'GUT'], [-33.5, 'inflation'], [-21.5, 'electroweak'], [3, 'forces distinct']].forEach(([uc, s]) => lab.add(s, X(uc), YM - half(uc) - 4, 0, -1, PAL.ink, 18, 16));

    /* the eras of the book's figure, as ticks named by hover */
    ERAS.forEach(([ue, name]) => {
      const x = X(ue), y = YM - half(ue);
      line(ctx, x, y, x, y + 14, alpha(PAL.ink, 0.6), 2);
      hits.push({ x, y: y + 6, r: 10, name });
    });

    /* the average energy along the bottom */
    [[19, '10¹⁹ GeV'], [14, '10¹⁴ GeV'], [2, '100 GeV'], [0, '1 GeV']].forEach(([e, s]) => {
      const ue = uOfE(10 ** e), x = X(ue), y = YM + half(ue);
      line(ctx, x, y, x, y + 8, EC, 2);
      lab.add(s, x, y + 8, 0, 1, EC, 17, 14);
    });

    /* the moment chosen */
    const xc = X(u);
    line(ctx, xc, TA, xc, YM + half(u) + 4, TC, 3);
    dot(ctx, xc, TA, TC, true, 8);
    lab.block(xc - 6, TA, xc + 6, YM + half(u) + 4);
    for (let i = 0; i <= 12; i++) { const uu = U0 + ((UN - U0) * i) / 12; hits.push({ x: X(uu), y: YM, r: Math.max(16, half(uu)), name: 'the size of the universe, on a logarithmic scale' }); }
    lab.flush();

    const p = sciParts(T, 2), Tr = p.m * 10 ** p.e, KE = (1.5 * KB_SHOWN * Tr) / 1e9;
    F.tex(d.readout, '\\kKEbar = \\frac{3}{2}k\\kTemp = \\frac{3}{2}(8.62\\times 10^{-5}\\;\\text{eV/K})(' + sciTex(Tr, 2) + '\\;\\text{K}) = ' + sciTex(KE, 2) + '\\;\\text{GeV}');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
