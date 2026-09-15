/* Figures for section 11.6 Gauge Pressure, Absolute Pressure, and Pressure Measurement. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a control's input
   alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, pinned, spring, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- shared numbers ---------- */
const G = 9.80, PATM = 101.3e3;                       /* Pa; the book's 1.013 × 10⁵ N/m² */
const PSI = 6.90e3;                                   /* Pa per lb/in², Table 11.2 */
/* The fluids of Table 11.1 a manometer or a barometer is filled with, their
   densities in kg/m³, and the colour each is drawn in. The colours are the
   physical fact and not a hue of the scheme (root rule 7, ch11/COLOR.md):
   mercury is silver, and the three colourless liquids are the pale blue the
   book prints its water in, told apart by their label. */
const HG = '#a9b2bd', CLEAR = '#bfe0f2';
const FLUIDS = {
  water: { name: 'water', rho: 1000, s: '1.00\\times 10^{3}', color: CLEAR, of: 'of water' },
  alcohol: { name: 'ethyl alcohol', rho: 790, s: '0.79\\times 10^{3}', color: CLEAR, of: 'of ethyl alcohol' },
  glycerin: { name: 'glycerin', rho: 1260, s: '1.26\\times 10^{3}', color: CLEAR, of: 'of glycerin' },
  mercury: { name: 'mercury', rho: 13600, s: '13.6\\times 10^{3}', color: HG, of: 'of mercury' },
};
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
/* three significant figures, for a height that may be millimetres or metres */
function sig3(v) { const a = Math.abs(v); if (a === 0) return '0'; const d = Math.max(0, 2 - Math.floor(Math.log10(a))); return (v < 0 ? '−' : '') + fmt(a, d); }
/* a height written in the unit that suits its size */
function hstr(h) { const a = Math.abs(h); return a >= 1 ? sig3(h) + ' m' : a >= 0.01 ? sig3(h * 100) + ' cm' : sig3(h * 1000) + ' mm'; }
/* a rounded-rectangle outline, for a jar and a lid */
function rrect(ctx, x, y, w, h, r, fill, stroke, lw) {
  ctx.save(); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r); ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r); ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r); ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || 3; ctx.stroke(); } ctx.restore();
}

/* =====================================================================
   FIGURE 11.13: the aneroid gauge. The pressure being measured enters a
   set of bellows, the bellows push on a rod, the rod turns a pointer on a
   pivot against a spring, and the pointer reads on a dial. Still: a gauge
   held on a tire has no time in it, so the figure answers its slider and
   registers no cycle. The dial's numbers are placed by the same linkage
   that places the pointer, so the dial is honest to the mechanism drawn.
===================================================================== */
(function () {
  const d = sim('sim-aneroid', 740);
  /* The slider is in pounds per square inch because the tire gauge of the text reads
     psi and the book's worked numbers (34, 14.7, 48.7) are in it; the readout gives the pascals. */
  const Ps = ctl(d.controls, { label: '\\kPg', cls: 'pressure', min: -14.7, max: 60, step: 0.1, value: 34, unit: 'psi', dec: 1, aria: 'the gauge pressure being measured',
    detents: [{ v: 0, label: 'atmospheric' }, { v: 34, label: 'the tire' }], snap: true });
  const dial = choice(d.controls, { label: '\\text{the dial reads}', options: [{ value: 'gauge', label: 'gauge pressure' }, { value: 'abs', label: 'absolute pressure' }], value: 'gauge', aria: 'whether the dial is numbered from atmospheric pressure or from a vacuum' });
  const PATM_PSI = 14.7;
  /* the linkage, in canvas units: the fixed plate of the bellows at XR, the bellows
     L0 + K·P long, a rod of length R from the moving plate to the lower end of the
     pointer, ARM below the pivot; the pointer's tip TIP above it. */
  const XR = 1020, L0 = 180, K = 2.0, R = 155, PX = 640, PY = 432, ARM = 120, TIP = 270, DIAL = 290, BH = 96;
  const lengthOf = (p) => L0 + K * p;
  /* the angle of the pointer from the vertical for a gauge pressure p, positive leaning left */
  function angleOf(p) { const bx = XR - lengthOf(p) - R; return Math.asin(Math.max(-1, Math.min(1, (bx - PX) / ARM))); }
  const KF = 2.6, KPA = PSI / 1000;
  /* the ruler of absolute pressure under the gauge: 0 to 80 psi, fixed from the slider maximum */
  const RX0 = 230, RX1 = 1170, RY = 660, RMAX = 80;
  const RX = (v) => RX0 + (v / RMAX) * (RX1 - RX0);
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), fc = C('force');
    const p = Ps.v, pabs = p + PATM_PSI, abs = dial.value === 'abs';
    const L = lengthOf(p), xm = XR - L, phi = angleOf(p), s = Math.sin(phi), c = Math.cos(phi);
    const B = { x: PX + ARM * s, y: PY + ARM * c }, T = { x: PX - TIP * s, y: PY - TIP * c }, S = { x: PX - 110 * s, y: PY - 110 * c };
    /* the wall the spring is anchored to, the spring, the pivot and the pointer */
    fixed(ctx, 250, PY - 70, 24, 140);
    spring(ctx, 274, PY, S.x, S.y, 9, 13, PAL.ink, 3);
    text(ctx, 'spring', 262, PY - 100, PAL.ink, { size: 19, align: 'left', bg: alpha(PAL.panel, 0.85) });
    /* the dial: an arc about the pivot with its ticks placed by the linkage */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.beginPath();
    ctx.arc(PX, PY, DIAL, -Math.PI / 2 - angleOf(-14.7), -Math.PI / 2 - angleOf(60)); ctx.stroke(); ctx.restore();
    const ticks = abs ? [0, 10, 20, 30, 40, 50, 60, 70] : [-10, 0, 10, 20, 30, 40, 50, 60];
    for (const t of ticks) {
      const g = abs ? t - PATM_PSI : t; if (g < -14.7 - 1e-9 || g > 60 + 1e-9) continue;
      const a = angleOf(g), zero = (abs ? t : g) === 0;
      const ux = -Math.sin(a), uy = -Math.cos(a);
      line(ctx, PX + ux * (DIAL - 16), PY + uy * (DIAL - 16), PX + ux * DIAL, PY + uy * DIAL, zero ? PAL.ink : PAL.muted, zero ? 3.5 : 2);
      text(ctx, num(t, 0), PX + ux * (DIAL + 26), PY + uy * (DIAL + 26), zero ? PAL.ink : PAL.muted, { size: 18, weight: zero ? 600 : 400, align: 'center' });
    }
    text(ctx, abs ? 'the dial reads absolute pressure, in psi:' : 'the dial reads gauge pressure, in psi:', 1300, 230, PAL.muted, { size: 18, align: 'right' });
    text(ctx, abs ? 'zero is a vacuum' : 'zero is atmospheric pressure', 1300, 256, PAL.muted, { size: 18, align: 'right' });
    /* the stem the pressure comes in through, and the pressure itself */
    line(ctx, XR + 14, PY - 14, 1130, PY - 14, PAL.ink, 3); line(ctx, XR + 14, PY + 14, 1130, PY + 14, PAL.ink, 3);
    arrow(ctx, 1220, PY, 1060, PY, pc, 5);
    text(ctx, 'P_g = ' + num(p, 1) + ' psi', 1236, PY - 12, pc, { size: 21, weight: 600, align: 'left' });
    text(ctx, 'the pressure', 1236, PY + 20, PAL.muted, { size: 18, align: 'left' });
    text(ctx, 'being measured', 1236, PY + 44, PAL.muted, { size: 18, align: 'left' });
    /* the bellows: a pleated box between the moving plate at xm and the fixed plate at XR */
    const n = 6, step = L / n;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(xm, PY - BH);
    for (let i = 0; i < n; i++) { ctx.lineTo(xm + step * (i + 0.5), PY - BH - 22); ctx.lineTo(xm + step * (i + 1), PY - BH); }
    ctx.lineTo(XR, PY + BH);
    for (let i = n; i > 0; i--) { ctx.lineTo(xm + step * (i - 0.5), PY + BH + 22); ctx.lineTo(xm + step * (i - 1), PY + BH); }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    for (let i = 1; i < n; i++) line(ctx, xm + step * i, PY - BH, xm + step * i, PY + BH, alpha(PAL.ink, 0.3), 2);
    ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(xm - 14, PY - BH - 20, 14, 2 * BH + 40); ctx.fillRect(XR, PY - BH - 20, 14, 2 * BH + 40); ctx.restore();
    text(ctx, 'flexible bellows', (xm + XR) / 2, PY - BH - 52, PAL.ink, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the force the pressure makes on the two ends, outward when the gauge pressure is positive */
    if (Math.abs(p) >= 0.05) {
      const len = KF * Math.abs(p), a = xm - 7, b = xm - 7 - len, c2 = XR + 7, e = XR + 7 + len, y = PY - 40;
      if (p > 0) { arrow(ctx, a, y, b, y, fc, 5); arrow(ctx, c2, y, e, y, fc, 5); }
      else { arrow(ctx, b, y, a, y, fc, 5); arrow(ctx, e, y, c2, y, fc, 5); }
      if (p > 0) text(ctx, 'F', (a + b) / 2, y - 28, fc, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      else text(ctx, 'F', b - 18, y, fc, { size: 24, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    }
    /* the rod from the moving plate to the lower end of the pointer, the pivot, the pointer */
    line(ctx, xm - 14, PY, B.x, B.y, PAL.ink, 4);
    dot(ctx, B.x, B.y, PAL.ink, true, 5);
    line(ctx, B.x, B.y, T.x, T.y, PAL.ink, 5);
    arrow(ctx, PX - (TIP - 60) * s, PY - (TIP - 60) * c, T.x, T.y, PAL.ink, 5);
    dot(ctx, PX, PY, PAL.ink, true, 11);
    text(ctx, 'pivot', PX - 22, PY + 34, PAL.ink, { size: 19, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'pointer', T.x + (s > -0.1 ? 22 : -22), T.y + 30, PAL.ink, { size: 19, align: s > -0.1 ? 'left' : 'right', bg: alpha(PAL.panel, 0.85) });
    /* the ruler of absolute pressure under the gauge, fixed from 0 to 80 psi */
    line(ctx, RX0, RY, RX1, RY, PAL.muted, 2);
    for (let v = 0; v <= RMAX; v += 10) { line(ctx, RX(v), RY - 8, RX(v), RY + 8, PAL.muted, 2); text(ctx, fmt(v, 0), RX(v), RY + 28, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'absolute pressure (psi)', RX1, RY + 60, pc, { size: 19, weight: 600, align: 'right' });
    text(ctx, 'vacuum', RX0, RY + 60, PAL.muted, { size: 17, align: 'left' });
    line(ctx, RX(PATM_PSI), RY - 12, RX(PATM_PSI), RY + 40, pc, 3, [6, 6]);
    text(ctx, 'P_atm = 14.7 psi', RX(PATM_PSI), RY + 60, pc, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (Math.abs(p) >= 0.05) hbracket(ctx, RX(PATM_PSI), RX(pabs), RY - 66, pc, 'P_g = ' + num(p, 1) + ' psi');
    dot(ctx, RX(pabs), RY, pc, true, 9);
    const pl = p < 0 || pabs > 40;
    text(ctx, 'P_abs = ' + num(pabs, 1) + ' psi', RX(pabs) + (pl ? -16 : 16), RY - 30, pc, { size: 19, weight: 600, align: pl ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, Math.abs(p) < 0.05 ? 'The gauge reads zero: the pressure inside is atmospheric pressure, 14.7 psi absolute, and the bellows feel no net force.'
      : pabs < 0.05 ? 'The gauge reads −14.7 psi, the smallest gauge pressure there is: the absolute pressure inside is zero, a vacuum.'
      : p > 0 ? 'The gauge reads ' + num(p, 1) + ' psi, so the absolute pressure inside is ' + num(p, 1) + ' psi plus 14.7 psi, or ' + num(pabs, 1) + ' psi.'
      : 'The gauge reads ' + num(p, 1) + ' psi: the pressure inside is below atmospheric, the atmosphere squeezes the bellows, and the absolute pressure is ' + num(pabs, 1) + ' psi.');
    readout(d.readout, `\\kPabs = \\kPg + \\kPatm = ${num(p, 1)}\\ \\text{psi} + 14.7\\ \\text{psi} = ${num(pabs, 1)}\\ \\text{psi} = ${fmt(pabs * KPA, 0)}\\ \\text{kPa}`,
      Math.abs(p) < 0.05 ? 'The bellows are at their rest length, the spring is unstretched, and the pointer sits on the zero of the gauge scale, which is the 14.7 psi mark of the absolute scale. This is what a tire gauge reads on a tire with a gaping hole in it.'
      : p > 0 ? 'The pressure inside the bellows exceeds the atmosphere outside by ' + num(p, 1) + ' psi, or ' + fmt(p * KPA, 0) + ' kPa, so the bellows are pushed out with a force of that pressure times their area, the spring is stretched, and the pointer turns. The dial can be numbered from atmospheric pressure or from a vacuum without moving the pointer at all.'
      : 'The pressure inside the bellows is below the atmosphere outside by ' + num(-p, 1) + ' psi, so the atmosphere squeezes the bellows shut and the pointer turns the other way. Fluids push rather than pull, so the reading can fall no lower than −14.7 psi, where the absolute pressure inside is zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.14: the open-tube manometer. The left leg is open to the
   atmosphere and the right is connected to a source; the difference in the
   two levels is the height the gauge pressure supports. The three panels
   of the book are three states of one slider: open at zero, the balloon
   above it and the vacuum-packed jar below it. Still: a manometer settles
   and stays, so the figure answers its controls and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-manometer', 740);
  const Ps = ctl(d.controls, { label: '\\kPg', cls: 'pressure', min: -10, max: 20, step: 0.01, value: 0.49, unit: 'kPa', dec: 2, aria: 'the gauge pressure of the source connected to the right side',
    detents: [{ v: -6.66, label: 'the jar' }, { v: 0 }, { v: 0.49, label: 'the balloon' }, { v: 16, label: 'systolic' }], snap: true });
  const fl = choice(d.controls, { label: '\\text{the fluid}', options: [{ value: 'water', label: 'water' }, { value: 'alcohol', label: 'ethyl alcohol' }, { value: 'glycerin', label: 'glycerin' }, { value: 'mercury', label: 'mercury' }], value: 'water', aria: 'the fluid in the tube' });
  /* The scene scale is fixed from the slider maximum in mercury, 0.150 m across the
     two levels, at 2000 canvas units to the metre, and never follows a slider. */
  const S = 2000, XL = 340, XR = 720, Y0 = 390, YT = 190, YB = 630, IW = 44, WALL = 6, YRUN = 640, RB = 40, TOP = 180;
  const legBox = (x) => ({ l: x, r: x, t: YT, b: YB });
  const ident = (v) => v;
  function tubePath(ctx) { ctx.beginPath(); ctx.moveTo(XL, TOP); ctx.lineTo(XL, YRUN - RB); ctx.arcTo(XL, YRUN, XL + RB, YRUN, RB); ctx.lineTo(XR - RB, YRUN); ctx.arcTo(XR, YRUN, XR, YRUN - RB, RB); ctx.lineTo(XR, TOP); }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), hc = C('position'), rc = C('density');
    const p = Ps.v * 1000, f = FLUIDS[fl.value];
    const h = p / (f.rho * G), half = h * S / 2;
    const yl = Y0 - half, yr = Y0 + half;                          /* the level on the open side rises when the source pushes */
    const outL = yl < YT || yl > YB, outR = yr < YT || yr > YB, out = outL || outR;
    const yL = Math.min(Math.max(yl, YT), YB), yR = Math.min(Math.max(yr, YT), YB);
    /* the glass: walls, then the bore */
    ctx.save(); ctx.lineCap = 'butt'; ctx.strokeStyle = PAL.ink; ctx.lineWidth = IW + 2 * WALL; tubePath(ctx); ctx.stroke();
    ctx.strokeStyle = PAL.panel; ctx.lineWidth = IW; tubePath(ctx); ctx.stroke(); ctx.restore();
    /* the fluid, clipped to below the two levels */
    ctx.save(); ctx.beginPath(); ctx.rect(XL - IW / 2, yL, IW, YRUN - yL + IW); ctx.rect(XR - IW / 2, yR, IW, YRUN - yR + IW); ctx.rect(XL, YRUN - IW, XR - XL, 2 * IW); ctx.clip();
    ctx.lineCap = 'butt'; ctx.strokeStyle = f.color; ctx.lineWidth = IW; tubePath(ctx); ctx.stroke(); ctx.restore();
    line(ctx, XL - IW / 2, yL, XL + IW / 2, yL, PAL.ink, 2.5); line(ctx, XR - IW / 2, yR, XR + IW / 2, yR, PAL.ink, 2.5);
    /* the meter stick between the legs, in centimetres from the rest level */
    const MX = 450;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(MX - 12, YT - 10, 24, YB - YT + 20); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(MX - 12, YT - 10, 24, YB - YT + 20); ctx.restore();
    for (let cm = -10; cm <= 10; cm++) {
      const y = Y0 - cm * 0.01 * S; if (y < YT - 4 || y > YB + 4) continue;
      const big = cm % 5 === 0; line(ctx, MX - 12, y, MX - 12 + (big ? 24 : 10), y, PAL.muted, big ? 2 : 1.5);
      if (big) text(ctx, num(cm, 0) + ' cm', MX + 20, y, PAL.muted, { size: 15, align: 'left' });
    }
    text(ctx, 'meter stick', MX - 12, YT - 32, PAL.muted, { size: 17, align: 'left' });
    /* the levels carried to the stick, and the height between them */
    line(ctx, XL + IW / 2, yL, MX - 12, yL, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, XR - IW / 2, yR, MX + 12, yR, alpha(PAL.ink, 0.35), 2, [4, 8]);
    if (Math.abs(h) >= 0.0005) vbracket(ctx, 570, Math.min(yL, yR), Math.max(yL, yR), hc, 'h = ' + hstr(Math.abs(h)), 1);
    if (outL) pinned(ctx, legBox(XL), ident, ident, XL, yl, hc);
    if (outR) pinned(ctx, legBox(XR), ident, ident, XR, yr, hc);
    /* the open side, and the source on the right */
    text(ctx, 'open to atmosphere', XL, 148, PAL.muted, { size: 18, align: 'center' });
    if (Math.abs(p) < 0.5) text(ctx, 'open to atmosphere', XR, 148, PAL.muted, { size: 18, align: 'center' });
    else {
      /* a pipe from the top of the right leg to the source */
      const PY = TOP;
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(XR - IW / 2, PY - 22, IW, 30); ctx.restore();
      line(ctx, XR - IW / 2 - WALL, PY, XR - IW / 2 - WALL, PY - 22, PAL.ink, 3); line(ctx, XR + IW / 2 + WALL, PY, XR + IW / 2 + WALL, PY - 22, PAL.ink, 3);
      line(ctx, XR - IW / 2 - WALL, PY - 22, 1000, PY - 22, PAL.ink, 3); line(ctx, XR + IW / 2 + WALL, PY + 22, 1000, PY + 22, PAL.ink, 3);
      arrow(ctx, 960, PY, 810, PY, pc, 5);
      text(ctx, 'P_abs = ' + fmt((PATM + p) / 1000, 1) + ' kPa', 885, PY + 50, pc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      if (p > 0) {
        /* the toy balloon */
        ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(1130, PY, 124, 94, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(1222, PY - 54, 44, 32, 0.6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(1222, PY + 54, 44, 32, -0.6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(1000, PY - 18); ctx.lineTo(1012, PY); ctx.lineTo(1000, PY + 18); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
        text(ctx, 'toy balloon', 1130, PY + 130, PAL.ink, { size: 19, align: 'center' });
      } else {
        /* the vacuum-packed jar, its lid at the pipe */
        rrect(ctx, 1040, PY - 12, 180, 210, 18, PAL.soft, PAL.ink, 3);
        rrect(ctx, 1000, PY - 28, 60, 56, 8, PAL.muted, PAL.ink, 3);
        ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); for (let i = 0; i < 26; i++) { const x = 1060 + (i * 37) % 140, y = PY + 60 + (i * 53) % 118; ctx.beginPath(); ctx.ellipse(x, y, 9, 6, i, 0, Math.PI * 2); ctx.fill(); } ctx.restore();
        text(ctx, 'vacuum-packed jar', 1130, PY + 226, PAL.ink, { size: 19, align: 'center' });
      }
    }
    text(ctx, f.name, (XL + XR) / 2, YRUN + 62, PAL.ink, { size: 18, align: 'center' });
    const cmw = p / (FLUIDS.water.rho * G) * 100, mmhg = p / (FLUIDS.mercury.rho * G) * 1000;
    topline(ctx, Math.abs(p) < 0.5 ? 'Both sides are open to the atmosphere, so the ' + f.name + ' stands at the same level on each side.'
      : out ? 'The ' + (p > 0 ? 'balloon' : 'jar') + ' is ' + fmt(Math.abs(p) / 1000, 2) + ' kPa ' + (p > 0 ? 'above' : 'below') + ' atmospheric pressure, which would stand ' + hstr(Math.abs(h)) + ' of ' + f.name + ', more than this tube can hold.'
      : p > 0 ? 'The balloon is ' + fmt(p / 1000, 2) + ' kPa above atmospheric pressure, so the ' + f.name + ' stands ' + hstr(h) + ' higher on the open side.'
      : 'The jar is ' + fmt(-p / 1000, 2) + ' kPa below atmospheric pressure, so the atmosphere pushes the ' + f.name + ' ' + hstr(-h) + ' higher on the jar’s side.');
    readout(d.readout, `\\begin{aligned}\\kPg &= \\kh\\krho\\kg = (${Math.abs(h) < 0.1 ? num(h, 4) : sig3(h)}\\ \\text{m})(${f.s}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2) = ${Math.abs(p) >= 1000 ? fmt(p / 1000, 2) + '\\ \\text{kPa}' : num(p, 0) + '\\ \\text{Pa}'}\\\\ \\kPabs &= \\kPatm + \\kh\\krho\\kg = 101.3\\ \\text{kPa} ${p < 0 ? '-' : '+'} ${fmt(Math.abs(p) / 1000, 2)}\\ \\text{kPa} = ${fmt((PATM + p) / 1000, 1)}\\ \\text{kPa}\\end{aligned}`,
      Math.abs(p) < 0.5 ? 'Atmospheric pressure pushes down on each side equally, so its effect cancels and the levels are equal whatever the diameters of the two legs. Slide the pressure either way to connect a source to the right side.'
      : out ? 'In the units the problem set asks for, this is ' + num(cmw, 1) + ' cm of water, which is ' + num(mmhg, 1) + ' mm of mercury. A column of ' + f.name + ' ' + hstr(Math.abs(h)) + ' tall runs far beyond this tube, which is why mercury, 13.6 times as dense as water, is used for pressures of this size.'
      : 'In the units the problem set asks for, this is ' + num(cmw, 2) + ' cm of water, which is ' + num(mmhg, 2) + ' mm of mercury. The gauge pressure is negative when the source is below atmospheric pressure, and the atmosphere then holds the column up on the source’s side.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.16: the mercury barometer. A tube closed at the top and empty
   of air stands in a dish open to the atmosphere, and the atmosphere holds
   up a column whose weight makes exactly the atmosphere's pressure. Still:
   a barometer stands and reads, so the figure answers its controls and
   registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-barometer', 720);
  const Ps = ctl(d.controls, { label: '\\kPatm', cls: 'pressure', min: 0, max: 120, step: 0.1, value: 101.3, unit: 'kPa', dec: 1, aria: 'the atmospheric pressure on the dish', detents: [{ v: 101.3, label: '1 atm' }], snap: true });
  const fl = choice(d.controls, { label: '\\text{the fluid}', options: [{ value: 'mercury', label: 'mercury' }, { value: 'water', label: 'water' }], value: 'mercury', aria: 'the fluid in the dish and the tube' });
  /* The scene scale is fixed from the slider maximum in mercury, 0.900 m, at 540
     canvas units to the metre, and never follows a slider; the tube holds 0.95 m. */
  const S = 540, TX = 700, TW = 40, WALL = 6, YS = 620, TUBE = 0.95, YTOP = YS - TUBE * S;
  const ident = (v) => v;
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), hc = C('position');
    const p = Ps.v * 1000, f = FLUIDS[fl.value];
    const h = p / (f.rho * G), out = h > TUBE, yh = YS - Math.min(h, TUBE) * S;
    /* the dish and the fluid in it */
    ctx.save(); ctx.fillStyle = f.color; ctx.fillRect(452, YS, 496, 60); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(450, 580); ctx.lineTo(450, 682); ctx.lineTo(950, 682); ctx.lineTo(950, 580); ctx.stroke(); ctx.restore();
    line(ctx, 452, YS, TX - TW / 2 - WALL, YS, PAL.ink, 2.5); line(ctx, TX + TW / 2 + WALL, YS, 948, YS, PAL.ink, 2.5);
    text(ctx, f.name, 700, 706, PAL.ink, { size: 19, align: 'center' });
    /* the tube: the walls, the bore, the vacuum above the column and the column itself */
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.fillRect(TX - TW / 2 - WALL, YTOP - WALL, TW + 2 * WALL, YS + 40 - YTOP + WALL); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(TX - TW / 2, YTOP, TW, YS + 40 - YTOP); ctx.restore();
    ctx.save(); ctx.fillStyle = f.color; ctx.fillRect(TX - TW / 2, yh, TW, YS + 40 - yh); ctx.restore();
    if (!out) line(ctx, TX - TW / 2, yh, TX + TW / 2, yh, PAL.ink, 2.5);
    if (!out) text(ctx, 'vacuum (P_abs = 0)', TX + TW / 2 + 24, YTOP + 22, PAL.ink, { size: 19, align: 'left', bg: alpha(PAL.panel, 0.85) });
    /* a scale up the tube, in tenths of a metre */
    for (let k = 1; k <= 9; k++) { const y = YS - k * 0.1 * S, x0 = TX - TW / 2 - WALL; line(ctx, x0 - 14, y, x0, y, PAL.muted, 2); text(ctx, fmt(k * 0.1, 1) + ' m', x0 - 20, y, PAL.muted, { size: 15, align: 'right' }); }
    /* the atmosphere on the surface of the dish */
    for (const x of [470, 940]) arrow(ctx, x, YS - 110, x, YS - 12, pc, 5);
    text(ctx, 'P_atm = ' + fmt(p / 1000, 1) + ' kPa', 470, YS - 134, pc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the point in the tube at the level of the surface, where the column's weight balances the atmosphere */
    line(ctx, TX - 9, YS - 9, TX + 9, YS + 9, PAL.ink, 2.5); line(ctx, TX - 9, YS + 9, TX + 9, YS - 9, PAL.ink, 2.5);
    text(ctx, 'P_abs = hρg = P_atm', TX + TW / 2 + 26, YS - 34, pc, { size: 19, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
    /* the height of the column */
    if (h > 0.0005) vbracket(ctx, TX - 130, out ? YTOP : yh, YS, hc, 'h = ' + (h >= 1 ? sig3(h) : fmt(h, 3)) + ' m', -1);
    if (out) pinned(ctx, { l: TX, r: TX, t: YTOP, b: YS }, ident, ident, TX, YS - h * S, hc);
    const mmhg = p / (FLUIDS.mercury.rho * G) * 1000, atm = p / PATM;
    topline(ctx, p < 50 ? 'With no atmosphere pressing on the dish, nothing holds the column up, and the ' + f.name + ' in the tube falls to the level of the dish.'
      : out ? 'At ' + fmt(p / 1000, 1) + ' kPa the atmosphere would hold up ' + hstr(h) + ' of water, far beyond the top of this tube.'
      : 'At ' + fmt(p / 1000, 1) + ' kPa the atmosphere holds up ' + fmt(h, 3) + ' m of ' + f.name + ', which is ' + fmt(mmhg, 0) + ' mm Hg or ' + fmt(atm, 2) + ' atm.');
    readout(d.readout, `\\kh\\krho\\kg = (${h >= 1 ? sig3(h) : fmt(h, 3)}\\ \\text{m})(${f.s}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2) = ${fmt(p / 1000, 1)}\\ \\text{kPa} = \\kPatm`,
      out ? 'A water barometer at this pressure would stand ' + hstr(h) + ' tall, ' + fmt(h / TUBE, 0) + ' times the height of the tube drawn here, which is why barometers hold mercury, 13.6 times as dense as water. The same pressure holds up ' + fmt(p / (FLUIDS.mercury.rho * G), 3) + ' m of mercury.'
      : p < 50 ? 'The pressure above the column is zero, so the column stands only as high as the atmosphere on the dish can push it. When the atmosphere is gone, so is the column.'
      : 'The atmosphere is quoted in millimeters of mercury because this is what a barometer reads: ' + fmt(p / 1000, 1) + ' kPa is ' + fmt(mmhg, 0) + ' mm Hg, or ' + fmt(atm, 2) + ' atm. A water barometer at the same pressure would stand ' + hstr(p / (FLUIDS.water.rho * G)) + ' tall.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
