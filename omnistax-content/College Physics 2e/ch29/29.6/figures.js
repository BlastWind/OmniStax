/* Figures for section 29.6 The Wave Nature of Matter. The figures draw
   position (λ, d and the path length difference), momentum, velocity, energy,
   mass and the angle θ; Planck's constant and the order n are ink. An electron
   is F.el('e-'), a proton F.el('p+'), a neutron F.el('n0'), and the atoms of
   the crystal F.el('Ni'), the nickel of Davisson and Germer. The bowling ball,
   the electron of Example 29.7 and the two scattered waves of Figure 29.20 are
   the section's referents, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, vbracket, angleArc, axes, curve, pinned, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constants: h = 6.63 × 10⁻³⁴ J·s, mₑ = 9.11 × 10⁻³¹ kg, 1 eV = 1.602 × 10⁻¹⁹ J */
const Hh = 6.63e-34, ME = 9.11e-31, EV = 1.602e-19;

const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const pow10 = (n) => '10' + String(n).split('').map((ch) => SUP[ch]).join('');
function sci(v, dec) {
  v = +v.toPrecision(dec + 1);
  const n = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / Math.pow(10, n);
  if (n >= -1 && n < 4) return fmt(v, Math.max(0, dec - n));
  return fmt(m, dec) + ' × ' + pow10(n);
}
function sciTex(v, dec) {
  v = +v.toPrecision(dec + 1);
  const n = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / Math.pow(10, n);
  if (n >= -1 && n < 4) return fmt(v, Math.max(0, dec - n));
  return fmt(m, dec) + '\\times 10^{' + n + '}';
}
/* a length in the unit that reads best: nm from 10 pm up, fm from 1 fm up, otherwise meters */
function lengthOf(m) {
  if (m >= 1e-11) return { v: m * 1e9, u: 'nm' };
  if (m >= 1e-15) return { v: m * 1e15, u: 'fm' };
  return { v: m, u: 'm' };
}
const lenText = (m) => { const l = lengthOf(m); return l.u === 'm' ? sci(m, 2) + ' m' : sci(l.v, 2) + ' ' + l.u; };
const lenTex = (m) => { const l = lengthOf(m); return l.u === 'm' ? sciTex(m, 2) + '\\ \\text{m}' : sciTex(l.v, 2) + '\\ \\text{' + l.u + '}'; };

/* =====================================================================
   Sim · sim-de-broglie · still · flat (rule 28.1)
   λ = h/mv for a 3-kg bowling ball, an electron, a proton or a neutron.
   The speed slider's range follows the particle. The log axis of length
   runs from 10⁻³⁶ to 10⁻⁶ m, fixed: the ball at 1 to 20 m/s gives 2.2 × 10⁻³⁴
   to 1.1 × 10⁻³⁵ m, an electron at 0.5 to 10 × 10⁶ m/s 1.5 nm to 0.073 nm, a
   proton at 10⁷ m/s 40 fm. Opens on Example 29.7, 4.36 × 10⁶ m/s and 0.167 nm.
===================================================================== */
(function () {
  const H = 520;
  const d = sim('sim-de-broglie', H);
  const FAST = { min: 0.5, max: 10, step: 0.01, unit: '× 10⁶ m/s', dec: 2 };
  const PARTS = {
    ball: { m: 3, name: '3-kg bowling ball', a: 'A 3-kg bowling ball', mText: '3 kg', mTex: '3\\ \\text{kg}', k: 1, r: { min: 1, max: 20, step: 0.5, unit: 'm/s', dec: 1, value: 10 } },
    e: { m: ME, name: 'electron', a: 'An electron', mText: '9.11 × 10⁻³¹ kg', mTex: '9.11\\times 10^{-31}\\ \\text{kg}', k: 1e6, el: 'e-', sym: 'e⁻', r: FAST },
    p: { m: 1.67e-27, name: 'proton', a: 'A proton', mText: '1.67 × 10⁻²⁷ kg', mTex: '1.67\\times 10^{-27}\\ \\text{kg}', k: 1e6, el: 'p+', sym: 'p⁺', r: FAST },
    n: { m: 1.675e-27, name: 'neutron', a: 'A neutron', mText: '1.675 × 10⁻²⁷ kg', mTex: '1.675\\times 10^{-27}\\ \\text{kg}', k: 1e6, el: 'n0', sym: 'n', r: FAST },
  };
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.5, max: 10, step: 0.01, value: 4.36, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed of the particle' });
  const pick = choice(d.controls, { label: '\\text{Particle}', options: [
    { value: 'ball', label: 'ball' }, { value: 'e', label: 'electron' }, { value: 'p', label: 'proton' }, { value: 'n', label: 'neutron' },
  ], value: 'e', aria: 'the particle', onInput: () => v.range(PARTS[pick.value].r) });
  const ro = readout(d);
  const AX = { l: 110, r: 1290, y: 360 }, LO = -36, HI = -6;
  const X = (m) => AX.l + (Math.log10(m) - LO) / (HI - LO) * (AX.r - AX.l);
  const REFS = [
    { at: 1e-15, name: 'a nucleus' },
    { at: 1e-10, name: 'spacing of atoms' },
    { at: 5e-7, name: 'visible light' },
  ];
  let hits = [];
  hover(d.stage, () => hits);

  function where(lam) {
    if (lam < 1e-16) return 'far smaller than anything known';
    if (lam < 1e-13) return 'near the size of a nucleus';
    if (lam < 3e-11) return 'between the size of a nucleus and the spacing of atoms';
    return 'about the spacing of atoms in a crystal';
  }

  function draw() {
    const { ctx } = begin(d.c);
    const P = PARTS[pick.value], speed = v.v * P.k;
    const p = P.m * speed, lam = Hh / p, KEj = 0.5 * P.m * speed * speed;
    const XC = C('position'), PC = C('momentum'), VC = C('velocity');
    hits = [];

    /* the particle, its velocity, and the chain v → p → λ */
    const Y1 = 160, PX = 170;
    if (P.el) dot(ctx, PX, Y1, F.el(P.el), true, 14);
    else dot(ctx, PX, Y1, F.ref('bowling-ball'), true, 34);
    const nameC = pick.value === 'ball' ? F.ref('bowling-ball') : pick.value === 'e' ? F.ref('electron') : PAL.ink;
    label(ctx, P.el ? P.sym : 'ball', PX, Y1, { side: 'below', size: 20, gap: P.el ? 24 : 44, color: nameC });
    arrow(ctx, PX + (P.el ? 24 : 44), Y1, PX + 170, Y1, VC, 5);
    hits.push({ x: PX, y: Y1, r: P.el ? 16 : 36, name: 'a ' + P.name + ' of mass ' + P.mText });
    text(ctx, 'v = ' + sci(speed, 2) + ' m/s', PX + 190, Y1, VC, { size: 22, weight: 600, align: 'left', base: 'middle' });
    text(ctx, 'p = mv = ' + sci(p, 2) + ' kg·m/s', 740, Y1 - 30, PC, { size: 22, weight: 600, align: 'left', base: 'middle' });
    text(ctx, 'λ = h/p = ' + lenText(lam), 740, Y1 + 30, XC, { size: 22, weight: 600, align: 'left', base: 'middle' });

    /* the length axis, a tick per power of ten and a label every fifth */
    line(ctx, AX.l, AX.y, AX.r, AX.y, PAL.muted, 3);
    for (let n = LO; n <= HI; n++) {
      const x = X(Math.pow(10, n)), big = n % 5 === 0;
      line(ctx, x, AX.y - (big ? 8 : 5), x, AX.y + (big ? 8 : 5), PAL.muted, 2);
      if (big) text(ctx, pow10(n), x, AX.y + 32, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'length (m)', AX.l, AX.y + 66, PAL.ink, { size: 20, weight: 600, align: 'left' });
    REFS.forEach((rf) => {
      const x = X(rf.at);
      line(ctx, x, AX.y + 44, x, AX.y + 74, alpha(PAL.ink, 0.4), 2, [4, 6]);
      text(ctx, rf.name, x, AX.y + 96, PAL.muted, { size: 18, align: 'center' });
      hits.push({ x, y: AX.y + 90, r: 30, name: rf.name + ', about ' + lenText(rf.at) });
    });
    const xl = X(lam);
    dot(ctx, xl, AX.y, XC, true, 11);
    label(ctx, 'λ = ' + lenText(lam), xl, AX.y, { side: 'above', color: XC, size: 20, gap: 30 });
    hits.push({ x: xl, y: AX.y, r: 14, name: 'the de Broglie wavelength of the ' + P.name });

    topline(ctx, P.a + ' moving at ' + sci(speed, 2) + ' m/s has a de Broglie wavelength of ' + lenText(lam) + ', ' + where(lam) + '.');
    const ke = P.el ? sciTex(KEj / EV, 2) + '\\ \\text{eV}' : sciTex(KEj, 2) + '\\ \\text{J}';
    ro.set('\\klam = \\frac{h}{\\km\\kv} = \\frac{6.63\\times 10^{-34}\\ \\text{J}\\cdot\\text{s}}{(' + P.mTex + ')(' + sciTex(speed, 2) + '\\ \\text{m/s})} = ' + lenTex(lam) + ',\\quad \\kKE = \\frac{1}{2}\\km\\kv^{2} = ' + ke, '');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 29.20 · sim-bragg · still · flat (rule 28.1)
   Electrons of λ = h/mv strike planes of nickel atoms d apart at θ. The
   crystal is drawn at 1400 units per nanometer, and the two electron waves
   are drawn along their paths at the same scale, in step on the incoming
   wavefront through P₁ and A. The path A → B → C is 2d sin θ longer, so the
   outgoing crests line up on the wavefront through P₁ and C exactly when
   2d sin θ = nλ. Beside it, the intensity from four planes,
   [sin(2φ)/(4 sin(φ/2))]² with φ = 2π·2d sin θ/λ, against θ from 0 to 90°
   and 0 to 1, fixed.
===================================================================== */
(function () {
  const H = 640;
  const d = sim('sim-bragg', H);
  const lamOf = () => Hh / (ME * vS.v * 1e6) * 1e9;
  const bragg = (n) => () => { const s = n * lamOf() / (2 * dS.v); if (s > 1) return null; const a = Math.asin(s) * 180 / Math.PI; return a >= 5 ? a : null; };
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 2, max: 10, step: 0.01, value: 4.36, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed of the electrons' });
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.05, max: 0.25, step: 0.001, value: 0.091, unit: 'nm', dec: 3, aria: 'the spacing between planes of atoms' });
  const first = Math.asin(Hh / (ME * 4.36e6) * 1e9 / (2 * 0.091)) * 180 / Math.PI;
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 5, max: 90, step: 0.1, value: +first.toFixed(1), unit: '°', dec: 1, aria: 'the angle of incidence',
    specials: [1, 2, 3, 4, 5, 6].map((n) => ({ at: bragg(n), label: 'n = ' + n })) });
  const ro = readout(d);
  const S = 1400, NPL = 4;
  const SC = { l: 20, r: 720, t: 90, b: H - 10 };
  const Y0 = 250, XC0 = 380;
  const GB = { l: 820, r: 1340, t: 150, b: 520 };
  let hits = [];
  hover(d.stage, () => hits);

  const inten = (tDeg, lam, dd) => {
    const ph = 2 * Math.PI * 2 * dd * Math.sin(tDeg * Math.PI / 180) / lam, den = NPL * Math.sin(ph / 2);
    return Math.abs(den) < 1e-6 ? 1 : Math.pow(Math.sin(NPL * ph / 2) / den, 2);
  };

  /* a wave drawn along a ray from a to b; ℓ0 is its path length at a, measured from the incoming wavefront */
  function wave(ctx, a, u, len, l0, lamU, color) {
    const nx = -u.y, ny = u.x, N = Math.max(40, Math.round(len / 4));
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const s = len * i / N, w = 11 * Math.sin(2 * Math.PI * (l0 + s) / lamU);
      const x = a.x + u.x * s + nx * w, y = a.y + u.y * s + ny * w;
      if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const lam = lamOf(), dd = dS.v, t = th.v * Math.PI / 180;
    const XC = C('position');
    const dU = dd * S, lamU = lam * S, pld = 2 * dd * Math.sin(t), ratio = pld / lam;
    hits = [];

    ctx.save(); ctx.beginPath(); ctx.rect(SC.l, SC.t, SC.r - SC.l, SC.b - SC.t); ctx.clip();
    /* the crystal: a square array of atoms, d apart, its top plane at Y0 */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fillRect(SC.l, Y0 - dU / 2, SC.r - SC.l, SC.b - Y0 + dU / 2); ctx.restore();
    for (let k = 0; Y0 + k * dU < SC.b; k++) {
      const y = Y0 + k * dU;
      line(ctx, SC.l, y, SC.r, y, alpha(PAL.ink, 0.12), 2);
      for (let j = -Math.ceil((XC0 - SC.l) / dU); XC0 + j * dU < SC.r; j++) dot(ctx, XC0 + j * dU, y, F.el('Ni'), true, dU > 60 ? 9 : 6);
      hits.push({ x: SC.l + 30, y, r: 14, name: k === 0 ? 'the top plane of atoms' : 'plane ' + (k + 1) + ' of atoms' });
    }

    /* the two paths, their waves, and the extra path A → B → C */
    const ui = { x: Math.cos(t), y: Math.sin(t) }, uo = { x: Math.cos(t), y: -Math.sin(t) }, L = 440;
    const P1 = { x: XC0, y: Y0 }, P2 = { x: XC0, y: Y0 + dU }, ds = dU * Math.sin(t);
    const A = { x: P2.x - ui.x * ds, y: P2.y - ui.y * ds }, Cc = { x: P2.x + uo.x * ds, y: P2.y + uo.y * ds };
    [[P1, 0, F.ref('top-ray')], [P2, ds, F.ref('second-ray')]].forEach(([P, lp, rc]) => {
      const a = { x: P.x - ui.x * L, y: P.y - ui.y * L };
      line(ctx, a.x, a.y, P.x, P.y, alpha(PAL.ink, 0.25), 2);
      line(ctx, P.x, P.y, P.x + uo.x * L, P.y + uo.y * L, alpha(PAL.ink, 0.25), 2);
      wave(ctx, a, ui, L, lp - L, lamU, rc);
      wave(ctx, P, uo, L, lp, lamU, rc);
    });
    line(ctx, A.x, A.y, P2.x, P2.y, XC, 6);
    line(ctx, P2.x, P2.y, Cc.x, Cc.y, XC, 6);
    line(ctx, P1.x, P1.y, A.x, A.y, alpha(PAL.ink, 0.45), 2, [6, 6]);
    line(ctx, P1.x, P1.y, Cc.x, Cc.y, alpha(PAL.ink, 0.45), 2, [6, 6]);
    ctx.restore();

    const e0 = { x: P1.x - ui.x * 330, y: P1.y - ui.y * 330 };
    if (e0.x > SC.l + 60 && e0.y > SC.t + 20) {
      dot(ctx, e0.x, e0.y, F.el('e-'), true, 11);
      label(ctx, 'e⁻', e0.x, e0.y, { side: 'left', size: 20, gap: 20 });
      hits.push({ x: e0.x, y: e0.y, r: 14, name: 'an electron of the beam' });
    }
    angleArc(ctx, P1, 62, Math.PI - t, Math.PI, 'θ', undefined, C('angle'));
    if (ds > 30) text(ctx, 'A', A.x - 16, A.y + 4, PAL.ink, { size: 18, align: 'right', base: 'middle', bg: PAL.panel });
    text(ctx, 'B', P2.x, P2.y + 26, PAL.ink, { size: 18, align: 'center', bg: PAL.panel });
    if (ds > 30) text(ctx, 'C', Cc.x + 16, Cc.y + 4, PAL.ink, { size: 18, align: 'left', base: 'middle', bg: PAL.panel });
    vbracket(ctx, 690, Y0, Y0 + dU, XC, 'd = ' + fmt(dd, 3) + ' nm', 1, { side: 'left', size: 20 });
    text(ctx, 'PLD = AB + BC = ' + fmt(pld, 3) + ' nm', GB.l, H - 40, XC, { size: 20, weight: 600, align: 'left', bg: PAL.panel });

    /* the intensity against θ, with the orders marked */
    const { X, Y } = axes(ctx, GB, [0, 90], [0, 1], { nx: 6, ny: 4, xl: 'θ (°)', yl: 'intensity', yc: PAL.ink, fy: () => '' });
    curve(ctx, (a) => inten(a, lam, dd), 0, 90, X, Y, alpha(PAL.ink, 0.75), 4, 600);
    let lastX = GB.l + 40;
    for (let n = 1; n <= 6; n++) {
      const s = n * lam / (2 * dd);
      if (s > 1) break;
      const a = Math.asin(s) * 180 / Math.PI;
      const xn = Math.max(X(a), GB.l + 145);
      if (xn - lastX < 64) continue;
      lastX = xn;
      text(ctx, 'n = ' + n, xn, Y(1) - 28, PAL.muted, { size: 17, align: 'center' });
    }
    pinned(ctx, GB, X, Y, th.v, inten(th.v, lam, dd), XC);

    const near = Math.round(ratio), off = Math.abs(ratio - near);
    const state = near >= 1 && off < 0.02 ? ', and the electrons interfere constructively.'
      : Math.abs(ratio - Math.floor(ratio) - 0.5) < 0.03 ? ', and the electrons interfere destructively.'
      : ', not a whole number of wavelengths, so the waves partly cancel.';
    topline(ctx, 'At θ = ' + fmt(th.v, 1) + '° the path length difference is ' + fmt(ratio, 2) + ' λ' + state);
    ro.set('\\klam = \\frac{h}{\\km\\kv} = ' + fmt(lam, 3) + '\\ \\text{nm},\\quad \\text{PLD} = 2\\kd\\sin\\ktheta = 2(' + fmt(dd, 3) + '\\ \\text{nm})\\sin ' + fmt(th.v, 1) + '^\\circ = ' + fmt(pld, 3) + '\\ \\text{nm} = ' + fmt(ratio, 2) + '\\,\\klam', '');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
