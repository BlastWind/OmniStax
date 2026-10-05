/* Figures for section 30.2 Discovery of the Parts of the Atom: Electrons and Nuclei.
   The page binds velocity, acceleration, electric-field, magnetic-field, charge,
   mass, voltage, force and position. Counts of alpha particles and of
   electrons are ink. Electrons are F.el('e-'), alpha particles F.el('He'),
   gold atoms and nuclei F.el('Au'), the positive nucleus of the planetary
   model F.el('p+'). Thomson's tube and Millikan's drop are the section's
   referents, drawn with F.ref. No figure paints a fact. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, vbracket, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constants: |q_e| = 1.60 × 10⁻¹⁹ C, |q_e|/m_e = 1.76 × 10¹¹ C/kg, g = 9.80 m/s² */
const QE = 1.60e-19, QM = 1.76e11, G = 9.80;

const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
function split(x) { const a = Math.abs(x); let e = Math.floor(Math.log10(a)), m = a / Math.pow(10, e); if (+m.toFixed(2) >= 10) { m /= 10; e++; } return { m: Math.sign(x) * m, e }; }
/* x to three figures, as "m × 10ⁿ" in figure text and "m\times 10^{n}" in a formula */
const sciText = (x) => { if (Math.abs(x) < 1e-30) return '0'; const { m, e } = split(x); return e === 0 ? fmt(m, 2) : fmt(m, 2) + ' × 10' + sup(e); };
const sciTex = (x) => { if (Math.abs(x) < 1e-30) return '0'; const { m, e } = split(x); return e === 0 ? fmt(m, 2) : fmt(m, 2) + '\\times 10^{' + e + '}'; };

/* =====================================================================
   FIGURES 30.6 + 30.7, folded: Thomson's tube in the side view of 30.6,
   with the crossed fields of 30.7 between its plates. The beam's path is
   integrated in centimeters through the plates (|q_e|/m_e, E up on the
   electron, B into the page pushing it down at speed v), then runs
   straight to the screen 20 cm on, or stops where it meets a plate or
   the glass. Moving: the electrons stream along the beam, a steady flow.
   Scale 34 units per cm; the screen carries ±4 cm.
===================================================================== */
(function () {
  const d = sim('sim-thomson-tube', 600);
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 2, max: 8, step: 0.01, value: 6, unit: '× 10⁷ m/s', dec: 2, aria: 'the speed of the electrons',
    specials: [{ at: () => (bS.v > 0 ? eS.v / bS.v : null), label: 'balanced' }] });
  const eS = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 5, step: 0.01, value: 3, unit: '× 10⁴ N/C', dec: 2, aria: 'the electric field between the plates',
    specials: [{ at: () => vS.v * bS.v, label: 'balanced' }] });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 1, step: 0.001, value: 0.5, unit: 'mT', dec: 3, aria: 'the magnetic field across the beam',
    specials: [{ at: () => eS.v / vS.v, label: 'balanced' }] });
  const cy = cycle(() => Infinity, 0);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const U = 34, AX = 380, X0 = 440;                  /* units per cm, the beam's axis, the plates' entrance */
  const LP = 5, LS = 20, GAP = 1;                     /* plate length, plates to screen, half the gap, cm */
  const XC = 150, XS = X0 + (LP + LS) * U;            /* cathode, screen */
  const cx = (xcm) => X0 + xcm * U, cyy = (ycm) => AX - ycm * U;
  /* the glass's half-height in units at canvas x, past the plates */
  const glass = (x) => (x < 640 ? 62 : x < 1000 ? 62 + (x - 640) * (150 - 62) / 360 : 150);

  function path(v, E, B) {
    const k = QM;                                     /* |q_e|/m_e */
    const pts = [[XC + 26, AX], [X0, AX]];
    let x = 0, y = 0, vx = v, vy = 0, end = 'screen';
    const N = 200, dt = (LP / 100) / v / N;
    for (let i = 0; i < 4 * N && x < LP / 100; i++) {
      const ax = k * B * vy, ay = k * (E - B * vx);
      vx += ax * dt; vy += ay * dt; x += vx * dt; y += vy * dt;
      if (vx <= 0) { end = 'turned'; break; }
      pts.push([cx(x * 100), cyy(y * 100)]);
      if (Math.abs(y * 100) >= GAP) { end = y > 0 ? 'top' : 'bottom'; return { pts, end, y: y * 100 }; }
    }
    let px = cx(x * 100), py = cyy(y * 100);
    const sl = -vy / vx;
    while (px < XS) {
      const nx = Math.min(XS, px + 6), ny = py + sl * (nx - px);
      if (Math.abs(ny - AX) > glass(nx) - 4) { pts.push([nx, ny]); return { pts, end: 'glass', y: (AX - ny) / U }; }
      px = nx; py = ny; pts.push([px, py]);
    }
    return { pts, end, y: (AX - py) / U };
  }
  function along(pts) {
    const s = [0];
    for (let i = 1; i < pts.length; i++) s.push(s[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    return { total: s[s.length - 1], at(u) {
      let i = 1; while (i < s.length - 1 && s[i] < u) i++;
      const k = (u - s[i - 1]) / Math.max(1e-6, s[i] - s[i - 1]);
      return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k];
    } };
  }
  function tube(ctx, rc) {
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 3; ctx.fillStyle = alpha(PAL.soft, 0.45);
    ctx.beginPath();
    ctx.moveTo(196, AX - 20); ctx.lineTo(300, AX - 20); ctx.lineTo(330, AX - 62); ctx.lineTo(640, AX - 62); ctx.lineTo(1000, AX - 150);
    ctx.lineTo(XS, AX - 150); ctx.lineTo(XS, AX + 150); ctx.lineTo(1000, AX + 150); ctx.lineTo(640, AX + 62); ctx.lineTo(330, AX + 62); ctx.lineTo(300, AX + 20); ctx.lineTo(196, AX + 20);
    ctx.arc(150, AX, 50, Math.asin(20 / 50), 2 * Math.PI - Math.asin(20 / 50), false);
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the cathode, the two slit anodes, the plates and their terminals */
    line(ctx, XC - 20, AX, XC + 26, AX, PAL.ink, 6);
    [270, 300].forEach((x) => { line(ctx, x, AX - 19, x, AX - 4, PAL.muted, 6); line(ctx, x, AX + 4, x, AX + 19, PAL.muted, 6); });
    ctx.save(); ctx.fillStyle = PAL.muted;
    ctx.fillRect(X0, AX - GAP * U - 8, LP * U, 8); ctx.fillRect(X0, AX + GAP * U, LP * U, 8); ctx.restore();
    line(ctx, X0 + LP * U / 2, AX - GAP * U - 8, X0 + LP * U / 2, AX - 92, PAL.muted, 2);
    line(ctx, X0 + LP * U / 2, AX + GAP * U + 8, X0 + LP * U / 2, AX + 92, PAL.muted, 2);
    text(ctx, '+', X0 - 16, AX - GAP * U - 4, PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, '−', X0 - 16, AX + GAP * U + 4, PAL.ink, { size: 26, weight: 600, align: 'center' });
    /* the screen at the end of the bulb, with its centimeter scale */
    line(ctx, XS, AX - 4.4 * U, XS, AX + 4.4 * U, PAL.muted, 3);
    for (let k = -4; k <= 4; k++) {
      line(ctx, XS - (k % 2 ? 8 : 14), AX - k * U, XS, AX - k * U, PAL.muted, 2);
      if (k && k % 2 === 0) text(ctx, String(Math.abs(k)), XS - 22, AX - k * U, PAL.muted, { size: 17, align: 'right' });
    }
    text(ctx, 'cm', XS + 22, AX + 4.4 * U + 18, PAL.muted, { size: 17, align: 'center' });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v = vS.v * 1e7, E = eS.v * 1e4, B = bS.v * 1e-3;
    const ec = F.el('e-'), EC = C('electric-field'), BC = C('magnetic-field'), VC = C('velocity'), FC = C('force'), rc = F.ref('thomson-tube');
    const P = path(v, E, B), A = along(P.pts);
    hits = [
      { x: XC, y: AX, r: 30, name: 'the cathode, where the electrons leave' },
      { x: 285, y: AX - 12, r: 24, name: 'the anodes, two plates with slits that let a narrow beam through' },
      { x: X0 + 85, y: AX - 38, r: 22, name: 'the positive charging plate' },
      { x: X0 + 85, y: AX + 38, r: 22, name: 'the negative charging plate' },
      { x: XS, y: AX - 120, r: 30, name: 'the end of the tube, coated with phosphor that glows where the electrons strike' },
    ];
    tube(ctx, rc);

    /* the fields in the tube: E from the + plate to the − plate, B into the page across the plates */
    if (B > 0) for (let i = 0; i < 4; i++) for (const yy of [AX - 17, AX + 17]) {
      const x = X0 + 22 + i * 42, r = 5;
      line(ctx, x - r, yy - r, x + r, yy + r, alpha(BC, 0.75), 2); line(ctx, x - r, yy + r, x + r, yy - r, alpha(BC, 0.75), 2);
    }
    if (E > 0) for (const x of [X0 + 43, X0 + 127]) arrow(ctx, x, AX - GAP * U + 2, x, AX + GAP * U - 2, alpha(EC, 0.75), 2.5);

    /* the undeflected line and the beam */
    line(ctx, X0 + LP * U, AX, XS, AX, alpha(PAL.ink, 0.35), 2, [10, 10]);
    ctx.save(); ctx.strokeStyle = alpha(ec, 0.35); ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath();
    P.pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    const endP = P.pts[P.pts.length - 1];
    if (P.end === 'screen') {
      ctx.save(); ctx.fillStyle = alpha(ec, 0.25); ctx.beginPath(); ctx.arc(endP[0], endP[1], 16, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      hits.push({ x: endP[0], y: endP[1], r: 18, name: Math.abs(P.y) < 0.005 ? 'the glowing spot, at the center of the screen' : 'the glowing spot, ' + fmt(Math.abs(P.y), 2) + ' cm ' + (P.y > 0 ? 'above' : 'below') + ' the center' });
    }
    /* the electrons, a steady stream at a drawn speed that grows with v */
    const sp = 120 + 40 * vS.v, gapU = 46, off = (cy.now() * sp) % gapU;
    for (let u = off; u < A.total; u += gapU) { const [x, y] = A.at(u); dot(ctx, x, y, ec, true, 6); }
    hits.push({ x: 360, y: AX, r: 16, name: 'an electron of the beam, moving at ' + sciText(v) + ' m/s' });

    /* the plates enlarged, as in Figure 30.7: one electron entering them, its velocity and the two forces on it */
    const ZL = 70, ZR = 430, ZT = 90, ZB = 300, ZY = (ZT + ZB) / 2, ZX = 236;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.roundRect(ZL, ZT, ZR - ZL, ZB - ZT, 8); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, ZR - 40, ZB, X0 + 30, AX - GAP * U - 10, alpha(PAL.ink, 0.4), 1.5, [5, 6]);
    ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(ZL + 40, ZT + 16, ZR - ZL - 70, 8); ctx.fillRect(ZL + 40, ZB - 24, ZR - ZL - 70, 8); ctx.restore();
    text(ctx, '+', ZL + 22, ZT + 20, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '−', ZL + 22, ZB - 20, PAL.ink, { size: 22, weight: 600, align: 'center' });
    if (B > 0) for (const [x, y] of [[ZL + 70, ZY - 44], [ZL + 70, ZY + 44], [ZR - 104, ZY - 44], [ZR - 104, ZY + 44]]) {
      const r = 7; line(ctx, x - r, y - r, x + r, y + r, BC, 2.5); line(ctx, x - r, y + r, x + r, y - r, BC, 2.5);
    }
    if (B > 0) text(ctx, 'B', ZL + 92, ZY - 44, BC, { size: 22, weight: 600 });
    if (E > 0) { arrow(ctx, ZR - 58, ZT + 28, ZR - 58, ZB - 28, EC, 3); text(ctx, 'E', ZR - 44, ZY - 30, EC, { size: 22, weight: 600 }); }
    const fE = QE * E, fB = QE * v * B, SC = 76 / (QE * 8e4);
    arrow(ctx, ZX + 12, ZY, ZX + 92, ZY, VC, 4);
    text(ctx, 'v', ZX + 100, ZY, VC, { size: 22, weight: 600 });
    if (fE * SC > 3) arrow(ctx, ZX, ZY - 8, ZX, ZY - 8 - fE * SC, FC, 4);
    if (fB * SC > 3) arrow(ctx, ZX, ZY + 8, ZX, ZY + 8 + fB * SC, FC, 4);
    if (fE * SC > 3) text(ctx, 'F_{E}', ZX - 14, ZY - 8 - Math.max(16, fE * SC) + 8, FC, { size: 20, weight: 600, align: 'right' });
    if (fB * SC > 3) text(ctx, 'F_{B}', ZX - 14, ZY + 8 + Math.max(16, fB * SC) - 8, FC, { size: 20, weight: 600, align: 'right' });
    dot(ctx, ZX, ZY, ec, true, 8);
    hits.push({ x: ZX, y: ZY, r: 14, name: 'an electron between the plates, with the electric force F_E up and the magnetic force F_B down on it' });

    const bal = Math.abs(E - v * B) <= 0.002 * Math.max(E, v * B, 1);
    const head = bal ? 'The forces cancel and the beam runs straight, so $\\kv = \\kEf/\\kBmag$ = ' + sciText(v) + ' m/s.'
      : E > v * B ? 'The electric force is larger, so the beam bends up toward the + plate.'
      : 'The magnetic force is larger, so the beam bends down toward the − plate.';
    topline(ctx, head);
    const a = QM * (E - v * B);
    const tex = '\\ka = \\frac{|\\kqe|}{\\kme}(\\kEf - \\kv\\kBmag) = (1.76\\times 10^{11}\\ \\text{C/kg})(' + sciTex(E) + ' - ' + sciTex(v * B) + ')\\ \\text{N/C} = ' + (bal ? '0' : sciTex(a) + '\\ \\text{m/s}^2');
    const note = P.end === 'top' ? 'The beam strikes the + plate before it leaves the field.'
      : P.end === 'bottom' ? 'The beam strikes the − plate before it leaves the field.'
      : P.end === 'glass' ? 'The beam is bent so far that it strikes the side of the tube.'
      : bal ? '' : 'The spot lands ' + fmt(Math.abs(P.y), 2) + ' cm ' + (P.y > 0 ? 'above' : 'below') + ' the center of the screen.';
    ro.set(tex, note, { form: 'a' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.9: the zoomed plates of Millikan's apparatus. A drop of mass
   m_drop carrying n extra electrons sits between plates d = 2.00 cm
   apart. The electric force q V/d (up, toward the + plate) and the
   weight m_drop g (down) are drawn at 25 units per 10⁻¹⁴ N. Still: the
   balance is a condition; the dashed circle on V marks m_drop g d/q.
===================================================================== */
(function () {
  const D = 0.02;
  const d = sim('sim-millikan', 600);
  const nC = F.select(d.controls, { label: '\\text{extra electrons}', options: ['1', '2', '3', '4'].map((v) => ({ value: v, label: v })), value: '3', aria: 'the number of extra electrons on the drop' });
  const mS = ctl(d.controls, { label: '\\kmdrop', cls: 'mass', min: 0.5, max: 3, step: 0.01, value: 2.45, unit: '× 10⁻¹⁵ kg', dec: 2, aria: 'the mass of the drop' });
  const vS = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0, max: 2000, step: 1, value: 1000, unit: 'V', dec: 0, aria: 'the voltage between the plates',
    specials: [{ at: () => { const x = mS.v * 1e-15 * G * D / (+nC.value * QE); return x <= 2000 ? x : null; }, label: 'held' }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const L = 330, R = 1070, TOP = 170, BOT = 530, DX = 700, DY = 360, SC = 28 / 1e-14;

  function draw() {
    const { ctx } = begin(d.c);
    const n = +nC.value, m = mS.v * 1e-15, V = vS.v, q = n * QE, E = V / D, fE = q * E, w = m * G;
    const EC = C('electric-field'), FC = C('force'), VC = C('voltage'), PC = C('position'), MC = C('mass'), rc = F.ref('oil-drop'), ec = F.el('e-');
    hits = [];
    /* the light that shows the drop, and the microscope it is watched through */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.fillRect(40, DY - 34, R - 40, 68); ctx.restore();
    text(ctx, 'light', 60, DY - 52, PAL.muted, { size: 18 });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(1180, DY - 22, 170, 44, 8); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.roundRect(1140, DY - 30, 44, 60, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    hits.push({ x: 1260, y: DY, r: 40, name: 'the microscope, through which the drop is seen as a point of reflected light' });
    hits.push({ x: 160, y: DY, r: 40, name: 'the bright light that shines on the drop' });
    /* the plates, the pinhole and the oil mist from the atomizer above it */
    ctx.save(); ctx.fillStyle = PAL.muted;
    ctx.fillRect(L, TOP - 14, DX - 12 - L, 14); ctx.fillRect(DX + 12, TOP - 14, R - DX - 12, 14); ctx.fillRect(L, BOT, R - L, 14); ctx.restore();
    text(ctx, '+', L - 22, TOP - 7, PAL.ink, { size: 28, weight: 600, align: 'center' });
    text(ctx, '−', L - 22, BOT + 7, PAL.ink, { size: 28, weight: 600, align: 'center' });
    for (let i = 0; i < 18; i++) {
      const x = DX - 60 + ((i * 37) % 120), y = 92 + ((i * 53) % 52);
      dot(ctx, x, y, alpha(PAL.muted, 0.6), true, 3);
    }
    hits.push({ x: DX, y: 118, r: 50, name: 'oil drops sprayed from the atomizer, charged as they are sprayed, falling through the pinhole' });
    hits.push({ x: 520, y: TOP - 7, r: 30, name: 'the positive plate' });
    hits.push({ x: 520, y: BOT + 7, r: 30, name: 'the negative plate' });
    /* the field */
    if (V > 0) for (const x of [420, 560, 840, 980]) arrow(ctx, x, TOP + 6, x, BOT - 6, alpha(EC, 0.8), 3);
    if (V > 0) text(ctx, 'E = ' + sciText(E) + ' N/C', 1000, 250, EC, { size: 20, weight: 600, bg: PAL.panel });
    vbracket(ctx, 250, TOP, BOT, PC);
    text(ctx, 'd = 2.00 cm', 236, 250, PC, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'V = ' + fmt(V, 0) + ' V', 1110, TOP - 7, VC, { size: 22, weight: 600 });
    /* the drop, its extra electrons, and the two forces on it */
    ctx.save(); ctx.fillStyle = alpha(PAL.panel, 1); ctx.strokeStyle = rc; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(DX, DY, 22, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; dot(ctx, DX + (n > 1 ? 10 * Math.cos(a) : 0), DY + (n > 1 ? 10 * Math.sin(a) : 0), ec, true, 4); }
    hits.push({ x: DX, y: DY, r: 26, name: 'the oil drop, ' + fmt(mS.v, 2) + ' × 10⁻¹⁵ kg, with ' + n + ' extra electron' + (n > 1 ? 's' : '') });
    const lE = Math.min(166, fE * SC), lW = Math.min(166, w * SC);
    if (lE > 2) arrow(ctx, DX, DY - 24, DX, DY - 24 - lE, FC, 5);
    arrow(ctx, DX, DY + 24, DX, DY + 24 + lW, FC, 5);
    if (lE > 2) text(ctx, 'F_{E}', DX + 18, DY - 24 - lE + 10, FC, { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, 'w', DX + 18, DY + 24 + lW - 10, FC, { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, 'm_{drop} = ' + fmt(mS.v, 2) + ' × 10⁻¹⁵ kg', DX - 40, DY + 4, MC, { size: 20, weight: 600, align: 'right', bg: PAL.panel });

    const held = Math.abs(fE - w) <= 0.004 * w;
    topline(ctx, held ? 'At ' + fmt(V, 0) + ' V the electric force balances the weight and the drop hangs still.'
      : fE < w ? 'At ' + fmt(V, 0) + ' V the electric force is smaller than the weight, so the drop falls.'
      : 'At ' + fmt(V, 0) + ' V the electric force is larger than the weight, so the drop rises.');
    const rel = held ? '=' : fE < w ? '<' : '>';
    const tex = '\\kq\\frac{\\kV}{\\kd} = (' + sciTex(q) + '\\ \\text{C})\\frac{' + fmt(V, 0) + '\\ \\text{V}}{0.0200\\ \\text{m}} = ' + sciTex(fE) + '\\ \\text{N} ' + rel + ' \\kmdrop\\kg = ' + sciTex(w) + '\\ \\text{N}';
    const note = held ? 'The drop is held, so $\\kq = \\kmdrop\\kg\\kd/\\kV$ = ' + sciText(m * G * D / V) + ' C, ' + n + ' × 1.60 × 10⁻¹⁹ C.' : '';
    ro.set(tex, note, { form: 'f' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 30.10 + 30.11, folded: Rutherford's apparatus from above, the
   source, the foil and the ring of screen around it, and beside it the
   foil magnified to its atoms. Each alpha i is one deterministic draw:
   its impact parameter b (a fraction of half an atom's spacing) sets its
   angle, θ = 2 atan(D/2b) for a nucleus, a degree or two of jitter for
   charge spread through the atom. D = 1/75 sends about 1 alpha in 150
   past 90°, nuclei as large as those drawn; Rutherford's foil sent 1 in
   8000. Moving: 50 alphas a second over a 6 s loop held 1.2 s.
===================================================================== */
(function () {
  const d = sim('sim-rutherford', 640);
  const model = choice(d.controls, { label: '\\text{positive charge}', options: [
    { value: 'spread', label: 'spread through the atom' },
    { value: 'nucleus', label: 'in a tiny nucleus' }], value: 'nucleus', aria: 'where the positive charge of the atom sits', onInput: reset });
  const T = 6, RATE = 50, SPD = 700, DD = 1 / 75;
  const SRC = { x: 100, y: 330 }, FOIL = { x: 440, y: 330 }, RR = 228;
  const T1 = (FOIL.x - SRC.x - 30) / SPD, T2 = RR / SPD;
  const NMAX = Math.floor((T - T1 - T2 - 0.2) * RATE);
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
  const gauss = (i, s) => { const u = Math.max(1e-6, hash(i, s)), v = hash(i, s + 1); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  /* the inset's atoms: five staggered columns of seven */
  const BX = { l: 770, r: 1340, t: 112, b: 596 }, AR = 34;
  const atoms = [];
  for (let c = 0; c < 5; c++) for (let r = 0; r < 7; r++) {
    const y = 150 + r * 68 + (c % 2 ? 34 : 0);
    if (y < BX.b - 30) atoms.push({ x: 935 + c * 60, y });
  }
  function angleOf(i, m) {
    const b = hash(i, 3), sgn = hash(i, 4) < 0.5 ? -1 : 1, jit = gauss(i, 5) * 0.012;
    if (m === 'spread') return { th: jit, b, sgn };
    return { th: sgn * 2 * Math.atan(DD / (2 * Math.max(1e-6, b))) + jit, b, sgn };
  }
  function insetPath(i, th, b, sgn) {
    const a = atoms[Math.floor(hash(i, 6) * atoms.length)];
    const y0 = a.y - sgn * b * AR;                    /* passes the nucleus on the side it is turned away from */
    const pts = [[BX.l, y0], [a.x, y0]];
    const ux = Math.cos(th), uy = -Math.sin(th);
    let x = a.x, y = y0;
    for (let k = 0; k < 120; k++) { x += ux * 8; y += uy * 8; if (x < BX.l || x > BX.r || y < BX.t || y > BX.b) break; pts.push([x, y]); }
    return pts;
  }
  function partial(pts, k) {
    const seg = []; let tot = 0; for (let i = 1; i < pts.length; i++) { const s = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(s); tot += s; }
    let want = tot * k; const out = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      if (want >= seg[i - 1]) { out.push(pts[i]); want -= seg[i - 1]; continue; }
      const f = want / seg[i - 1]; out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f]); break;
    }
    return out;
  }
  function poly(ctx, pts, color, w) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
    pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const m = model.value, k = model.mix((v) => (v === 'nucleus' ? 1 : 0)), t = cy.now();
    const he = F.el('He'), au = F.el('Au'), ec = F.el('e-'), PC = C('position');
    hits = [];
    /* the screen ring, open where the beam comes in */
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(FOIL.x, FOIL.y, RR, Math.PI + 0.16, Math.PI - 0.16 + 2 * Math.PI); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(FOIL.x, FOIL.y, RR + 8, Math.PI + 0.16, Math.PI - 0.16 + 2 * Math.PI); ctx.stroke();
    ctx.beginPath(); ctx.arc(FOIL.x, FOIL.y, RR - 8, Math.PI + 0.16, Math.PI - 0.16 + 2 * Math.PI); ctx.stroke(); ctx.restore();
    text(ctx, 'screen', FOIL.x, FOIL.y + RR + 30, PAL.muted, { size: 18, align: 'center' });
    hits.push({ x: FOIL.x + RR, y: FOIL.y, r: 20, name: 'the phosphor screen, which glows where an alpha strikes it' });
    /* the source in its lead block, and the foil */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.75); ctx.fillRect(SRC.x - 40, SRC.y - 36, 70, 72); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(SRC.x + 6, SRC.y - 5, 26, 10); ctx.restore();
    dot(ctx, SRC.x, SRC.y, he, true, 8);
    text(ctx, 'source', SRC.x - 5, SRC.y + 58, PAL.muted, { size: 18, align: 'center' });
    hits.push({ x: SRC.x, y: SRC.y, r: 40, name: 'the radioactive source in its lead container, with a hole that lets out a beam' });
    ctx.save(); ctx.fillStyle = au; ctx.fillRect(FOIL.x - 4, FOIL.y - 34, 8, 68); ctx.restore();
    label(ctx, 'gold foil', FOIL.x, FOIL.y - 34, { side: 'above', color: PAL.muted, size: 18, gap: 26 });
    hits.push({ x: FOIL.x, y: FOIL.y, r: 30, name: 'the thin gold foil' });

    /* the magnified foil: atoms about 10⁻¹⁰ m across; their positive charge spread through them or gathered in a nucleus */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.6); ctx.fillRect(895, BX.t, 320, BX.b - BX.t); ctx.restore();
    const nr = 4 + (AR - 4) * (1 - k);
    atoms.forEach((a, j) => {
      ctx.save(); ctx.strokeStyle = alpha(au, 0.7); ctx.lineWidth = 1.5; ctx.fillStyle = alpha(au, 0.12);
      ctx.beginPath(); ctx.arc(a.x, a.y, AR, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = alpha(au, 0.25 + 0.75 * k); ctx.beginPath(); ctx.arc(a.x, a.y, nr, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      for (let e = 0; e < 3; e++) { const an = 2.1 * e + j; dot(ctx, a.x + 22 * Math.cos(an), a.y + 22 * Math.sin(an), alpha(ec, 1 - 0.6 * k), true, 2.5); }
    });
    hits.push(...atoms.map((a) => ({ x: a.x, y: a.y, r: AR - 4, name: m === 'nucleus' ? 'a gold atom, about 10⁻¹⁰ m across, its nucleus drawn far larger than scale' : 'a gold atom, its positive charge spread through it' })));
    const a0 = atoms[0];
    hbracket(ctx, a0.x - AR, a0.x + AR, BX.t - 2, PC, 'atom, about 10⁻¹⁰ m', { size: 18 });
    const a1 = atoms[atoms.length - 1];
    if (k > 0.5) label(ctx, 'nucleus, drawn far larger than scale', a1.x, a1.y, { side: 'below', color: PAL.muted, size: 17, gap: 40 });
    else label(ctx, 'positive charge spread through the atom', a1.x, a1.y, { side: 'below', color: PAL.muted, size: 17, gap: 40 });

    /* the alphas */
    let n = 0, nS = 0, nM = 0, nB = 0, maxDeg = 0;
    const marks = [];
    for (let i = 0; i < NMAX; i++) {
      const t0 = (i + 0.5) / RATE;
      if (t < t0) break;
      const { th, b, sgn } = angleOf(i, m), tau = t - t0, y0 = SRC.y + (hash(i, 1) - 0.5) * 6;
      const deg = Math.abs(th) * 180 / Math.PI;
      if (tau < T1) {
        const x = SRC.x + 30 + SPD * tau; dot(ctx, x, y0 + (FOIL.y - y0) * tau / T1, he, true, 5);
      } else if (tau < T1 + T2) {
        const r = SPD * (tau - T1); dot(ctx, FOIL.x + r * Math.cos(th), FOIL.y - r * Math.sin(th), he, true, 5);
      } else {
        n++; maxDeg = Math.max(maxDeg, deg);
        if (deg < 10) nS++; else if (deg < 90) nM++; else nB++;
        const fl = Math.max(0, 1 - (tau - T1 - T2) / 0.4);
        marks.push({ x: FOIL.x + RR * Math.cos(th) + gauss(i, 9) * 3, y: FOIL.y - RR * Math.sin(th) + gauss(i, 11) * 3, fl });
      }
      /* the inset: the deflected alphas and one straight one in four, crossing the slab while the alpha crosses the foil */
      const big = deg >= 10;
      if (!big && i % 4) continue;
      const s = tau - T1 + 0.3;
      if (s < 0 || s > 1.6) continue;
      const pts = insetPath(i, th, b, sgn), kk = Math.min(1, s / 0.6), fade = s > 0.6 ? Math.max(0, 1 - (s - 0.6) / 1.0) : 1;
      const pp = partial(pts, kk);
      poly(ctx, pp, big ? alpha(he, fade) : alpha(PAL.ink, 0.35 * fade), big ? 3 : 2);
      if (kk < 1) { const q = pp[pp.length - 1]; dot(ctx, q[0], q[1], he, true, 5); }
      else if (fade > 0) { const q = pp[pp.length - 1], q0 = pp[pp.length - 2] || pp[0]; arrow(ctx, q0[0], q0[1], q[0], q[1], big ? alpha(he, fade) : alpha(PAL.ink, 0.35 * fade), 2); }
    }
    marks.forEach((p) => { dot(ctx, p.x, p.y, alpha(PAL.ink, 0.55), true, 3); if (p.fl > 0) dot(ctx, p.x, p.y, alpha(he, 0.5 * p.fl), true, 10); });
    dot(ctx, 60, 600, he, true, 6);
    text(ctx, 'α particle', 74, 600, PAL.muted, { size: 18 });

    topline(ctx, n === 0 ? 'Alphas leave the source for the gold foil.' : m === 'nucleus'
      ? (nB === 1 ? '1 of the ' + n + ' alphas so far came back toward the source.' : nB + ' of the ' + n + ' alphas so far came back toward the source.')
      : 'All ' + n + ' alphas so far passed within ' + Math.max(1, Math.ceil(maxDeg)) + '° of straight through.');
    const tex = 'N = N_{<10^\\circ} + N_{10^\\circ\\text{ to }90^\\circ} + N_{>90^\\circ} = ' + nS + ' + ' + nM + ' + ' + nB + ' = ' + n;
    const note = m === 'nucleus' ? 'Rutherford’s foil sent about 1 alpha in 8000 straight back; nuclei as large as those drawn would send back about 1 in 150.'
      : 'With its charge spread through a whole atom, no gold atom pushes hard enough to turn an alpha far.';
    ro.set(tex, note, { form: 'n', values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.12: the planetary model, three circular orbits seen at the
   book's tilt (each a circle squashed by 0.36). The periods go as r^{3/2},
   as an inverse-square pull sets them: 4 s for the inner orbit. Moving:
   a steady motion with no loop to restart. The nucleus is drawn far
   larger than its 10⁻¹⁵ m, which the readout states.
===================================================================== */
(function () {
  const d = sim('sim-planetary-model', 470);
  const cy = cycle(() => Infinity, 0);
  let hits = [];
  hover(d.stage, () => hits);
  const O = { x: 700, y: 270 }, K = 0.36;
  const ORB = [{ r: 150, dir: 1, ph: 4.2 }, { r: 260, dir: -1, ph: 0.6 }, { r: 380, dir: 1, ph: 5.3 }];
  F.tex(d.readout, '\\frac{\\text{size of the atom}}{\\text{size of the nucleus}} \\approx \\frac{10^{-10}\\ \\text{m}}{10^{-15}\\ \\text{m}} = 10^{5}', false);
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), ec = F.el('e-'), pc = F.el('p+');
    hits = [];
    ORB.forEach((o) => { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(O.x, O.y, o.r, o.r * K, 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); });
    const pos = ORB.map((o) => { const T = 4 * Math.pow(o.r / 150, 1.5), a = o.ph + o.dir * 2 * Math.PI * t / T; return { x: O.x + o.r * Math.cos(a), y: O.y + o.r * K * Math.sin(a), back: Math.sin(a) < 0, T }; });
    /* electrons behind the nucleus first */
    const nuc = () => { dot(ctx, O.x, O.y, pc, true, 7); text(ctx, '+', O.x - 22, O.y, PAL.ink, { size: 24, weight: 600, align: 'center' }); };
    pos.filter((p) => p.back).forEach((p) => dot(ctx, p.x, p.y, ec, true, 12));
    nuc();
    pos.filter((p) => !p.back).forEach((p) => dot(ctx, p.x, p.y, ec, true, 12));
    pos.forEach((p, i) => hits.push({ x: p.x, y: p.y, r: 16, name: 'an electron on the ' + ['inner', 'middle', 'outer'][i] + ' orbit, once round in ' + fmt(p.T, 1) + ' s of this picture' }));
    hits.push({ x: O.x, y: O.y, r: 12, name: 'the nucleus, positive and nearly all of the atom’s mass, drawn far larger than scale' });
    label(ctx, 'nucleus', O.x, O.y, { side: 'right', color: PAL.muted, size: 18, gap: 60 });
    dot(ctx, 60, 440, ec, true, 10);
    text(ctx, 'e⁻ electron', 80, 440, PAL.muted, { size: 18 });
    topline(ctx, 'Low-mass electrons orbit a small, massive nucleus, the inner ones fastest, as planets orbit the Sun.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
