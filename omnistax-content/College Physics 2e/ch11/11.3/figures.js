/* Figures for section 11.3 Pressure. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider's or a
   choice's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, strip } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const RAD = Math.PI / 180, TAU = 2 * Math.PI;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
/* a number in scientific notation with `sig` significant figures: mantissa and exponent */
function sciParts(v, sig) {
  if (v === 0) return { m: '0', e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (Math.abs(+m.toFixed(sig - 1)) >= 10) { m /= 10; e += 1; }
  return { m: m.toFixed(sig - 1), e };
}
const sci = (v, sig) => { const { m, e } = sciParts(v, sig); return e === 0 ? m : m + ' × 10' + sup(e); };
const sciTex = (v, sig) => { const { m, e } = sciParts(v, sig); return e === 0 ? m : m + '\\times 10^{' + e + '}'; };
/* a number with three significant figures written out in full, for the small areas in square millimeters */
const sig3 = (v) => Number(v.toPrecision(3)).toString();

/* =====================================================================
   FIGURE 11.5: the finger and the needle. One push against the skin, over
   a round contact whose width slides from the pad of a fingertip to the
   point of a needle, and a ruler of pressures below marked in powers of
   ten. Still: a push held against the skin has no time in it, so the figure
   answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-poke', 700);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 20, step: 0.5, value: 5, unit: 'N', dec: 1, aria: 'the size of the push' });
  /* The width rather than the area is the slider: a width is what the picture shows, and the
     area, which goes as the square of the width, runs through four powers of ten. The two
     detents are the book's two panels, the point of a needle and the pad of a fingertip. */
  const ds = ctl(d.controls, { label: 'd', cls: '', min: 0.1, max: 12, step: 0.1, value: 12, unit: 'mm', dec: 1, aria: 'the width of the contact', detents: [{ v: 0.3, label: 'needle' }, { v: 12, label: 'fingertip' }], snap: true });
  /* the scene: 1 mm is 20 units; the skin stands at x = 900 with the body behind it, and the push
     comes from the left. A finger 14 mm across pushes while the contact is 4 mm or wider, its pad
     flattening against the skin to the width d; below that the pusher is a hypodermic needle on its
     syringe, tapering to the point d across, and the skin dents under it, deeper as the pressure climbs. */
  const MM = 20, SX = 900, CY = 300, FR = 7 * MM, X0 = 300;
  /* the ruler of pressures: fixed from the slider extremes, 20 N over the point at 0.1 mm is 2.5 × 10⁹ Pa, so the ruler runs 10² to 10¹⁰ Pa */
  const RX0 = 150, RX1 = 1250, E0 = 2, E1 = 10, RY = 600;
  const RX = (p) => RX0 + ((Math.log10(p) - E0) / (E1 - E0)) * (RX1 - RX0);
  const marks = [[1e4, '1 × 10⁴ Pa, which is 100 mb'], [6.9e6, 'the air tank of Example 11.2'], [3.0e9, 'a nail tip under a hammer']];
  /* the skin's dent under the contact: a smooth bump of depth `dent` and half-width `hw` centred on CY */
  const skinX = (y, dent, hw) => { const u = (y - CY) / hw; return Math.abs(u) >= 1 ? SX : SX + dent * 0.5 * (1 + Math.cos(Math.PI * u)); };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('pressure');
    const Fv = Fs.v, dw = ds.v, A = Math.PI * (dw / 2) * (dw / 2) * 1e-6, P = Fv / A;
    const half = dw * MM / 2, finger = dw >= 4;
    const dent = Fv === 0 ? 0 : Math.min(44, Math.max(6, 12 + 8 * Math.log10(P / 1e4)));
    const hw = Math.max(finger ? half + 70 : 60, 2.2 * half);
    /* the body behind the skin, its surface dented where the push lands */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.14); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(SX, 100);
    for (let y = 100; y <= 500; y += 4) ctx.lineTo(skinX(y, dent, hw), y);
    ctx.lineTo(1300, 500); ctx.lineTo(1300, 100); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(SX, 100); for (let y = 100; y <= 500; y += 4) ctx.lineTo(skinX(y, dent, hw), y); ctx.stroke(); ctx.restore();
    text(ctx, 'the skin', SX + 120, 128, PAL.muted, { size: 19 });
    const tipX = SX + dent;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    if (finger) {
      /* a finger: a rounded rod whose tip circle meets the skin along the chord d wide, so the pad flattens to the contact */
      const cx = tipX - Math.sqrt(FR * FR - half * half), th = Math.asin(half / FR);
      ctx.beginPath(); ctx.moveTo(X0, CY - FR); ctx.lineTo(cx, CY - FR); ctx.arc(cx, CY, FR, -Math.PI / 2, -th); ctx.lineTo(tipX, CY + half); ctx.arc(cx, CY, FR, th, Math.PI / 2); ctx.lineTo(X0, CY + FR); ctx.closePath(); ctx.fill(); ctx.stroke();
      /* the nail, an oval on the upper side of the tip, and the knuckle crease */
      ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(cx - 30, CY - FR + 34, 62, 26, 0, 0, TAU); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X0 + 200, CY - FR + 6); ctx.quadraticCurveTo(X0 + 214, CY - FR + 40, X0 + 200, CY - FR + 70); ctx.stroke();
      text(ctx, 'a fingertip', (X0 + cx) / 2, CY - FR - 24, PAL.muted, { size: 19, align: 'center' });
    } else {
      /* a hypodermic needle on its syringe: the barrel, its flange, the hub and a shaft that tapers to the point */
      const barrelR = 36, hubX = X0 + 330, taper = 110, shaftR = 0.6 * MM;
      ctx.fillRect(X0, CY - barrelR, hubX - X0, 2 * barrelR); ctx.strokeRect(X0, CY - barrelR, hubX - X0, 2 * barrelR);
      ctx.fillRect(X0 - 10, CY - barrelR - 14, 14, 2 * barrelR + 28); ctx.strokeRect(X0 - 10, CY - barrelR - 14, 14, 2 * barrelR + 28);
      ctx.beginPath(); ctx.moveTo(hubX, CY - barrelR); ctx.lineTo(hubX + 40, CY - shaftR - 6); ctx.lineTo(hubX + 40, CY + shaftR + 6); ctx.lineTo(hubX, CY + barrelR); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(hubX + 40, CY - shaftR); ctx.lineTo(tipX - taper, CY - shaftR); ctx.lineTo(tipX, CY - half); ctx.lineTo(tipX, CY + half); ctx.lineTo(tipX - taper, CY + shaftR); ctx.lineTo(hubX + 40, CY + shaftR); ctx.closePath(); ctx.fill(); ctx.stroke();
      text(ctx, 'a hypodermic needle', (X0 + hubX) / 2, CY - barrelR - 24, PAL.muted, { size: 19, align: 'center' });
    }
    ctx.restore();
    /* the contact, marked on the skin and bracketed */
    line(ctx, tipX, CY - half, tipX, CY + half, pc, 8);
    if (half > 14) vbracket(ctx, tipX + 60, CY - half, CY + half, PAL.ink, 'd = ' + fmt(dw, 1) + ' mm', 1);
    else { line(ctx, tipX + 40, CY, tipX + 60, CY, PAL.ink, 3); text(ctx, 'd = ' + fmt(dw, 1) + ' mm', tipX + 66, CY, PAL.ink, { weight: 600 }); }
    /* the force, along the axis of the push, anchored on the pusher's end and drawn thicker than any body line */
    if (Fv > 0) {
      const la = 50 + Fv * 11, ax = X0 - (finger ? 0 : 10);
      arrow(ctx, ax - la, CY, ax - 4, CY, fc, 7);
      F.label(ctx, 'F = ' + fmt(Fv, 1) + ' N', ax - la / 2, CY, { side: 'below', color: fc, gap: 26, leader: false });
    }
    hbracket(ctx, X0, X0 + 10 * MM, 522, PAL.muted, '10 mm');
    /* the ruler of pressures */
    line(ctx, RX0, RY, RX1, RY, PAL.ink, 3);
    for (let e = E0; e <= E1; e++) { const x = RX(Math.pow(10, e)); line(ctx, x, RY - 8, x, RY + 8, PAL.ink, 2); text(ctx, '10' + sup(e) + (e === E1 ? ' Pa' : ''), x, RY + 30, PAL.muted, { size: 17, align: 'center' }); }
    for (const [p, nm] of marks) { const x = RX(p); line(ctx, x, RY - 12, x, RY - 34, PAL.muted, 2); text(ctx, nm, x, RY - 48, PAL.muted, { size: 17, align: 'center' }); }
    if (Fv > 0) {
      const x = RX(P);
      ctx.save(); ctx.fillStyle = alpha(pc, 0.3); ctx.fillRect(RX0, RY - 9, x - RX0, 18); ctx.restore();
      dot(ctx, x, RY, pc, true, 9);
      const right = x > 980;
      text(ctx, 'P = ' + sci(P, 3) + ' Pa', x + (right ? -18 : 18), RY + 62, pc, { weight: 600, align: right ? 'right' : 'left' });
    }
    const like = dw <= 0.5 ? ', about the point of a needle,' : dw >= 8 ? ', about the pad of a fingertip,' : '';
    topline(ctx, Fv === 0 ? 'With no push against the skin there is no pressure on it, however narrow the contact.'
      : 'A push of ' + fmt(Fv, 1) + ' N over a contact ' + fmt(dw, 1) + ' mm across' + like + ' makes a pressure of ' + sci(P, 3) + ' Pa.');
    readout(d.readout, Fv === 0 ? `\\kPr = \\frac{\\kF}{A} = \\frac{0\\ \\text{N}}{${sciTex(A, 3)}\\ \\text{m}^2} = 0\\ \\text{Pa}`
      : `\\kPr = \\frac{\\kF}{A} = \\frac{${fmt(Fv, 1)}\\ \\text{N}}{${sciTex(A, 3)}\\ \\text{m}^2} = ${sciTex(P, 3)}\\ \\text{Pa}`,
      'The contact is a circle ' + fmt(dw, 1) + ' mm across, so its area is A = π(d/2)² = ' + sig3(A * 1e6) + ' mm² = ' + sci(A, 3) + ' m². Halving the width quarters the area and multiplies the pressure by four, which is why the same push over the point of a needle, 0.3 mm across, makes 1600 times the pressure it makes over the pad of a fingertip, 12.0 mm across.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.6: the tire. The air inside pushes on every wall, the field of
   arrows growing with the pressure, and one patch of wall the reader
   chooses, on the tread, on the rim or on the face of the valve core,
   carries the force F = PA in numbers. Still: an inflated tire standing on
   the ground has no clock, so the figure answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-tire', 760);
  const Ps = ctl(d.controls, { label: '\\kPr', cls: 'pressure', min: 0, max: 400, step: 5, value: 220, unit: 'kPa', dec: 0, aria: 'the pressure of the air in the tire' });
  const As = ctl(d.controls, { label: 'A', cls: '', min: 0.1, max: 10, step: 0.1, value: 2, unit: 'cm²', dec: 1, aria: 'the area of the patch of wall' });
  /* which wall the patch sits on is a state, not a quantity, so it is a choice */
  const where = choice(d.controls, { label: '\\text{the patch}', options: [{ value: 'tread', label: 'tread' }, { value: 'rim', label: 'rim' }, { value: 'valve', label: 'valve' }], value: 'tread', aria: 'which wall the patch sits on' });
  const CX = 540, CY = 410, RO = 290, RI = 150, GROUND = 712;
  const VA = 45 * RAD;                                    /* the valve sits on the rim at the lower right, its stem toward the hub */
  const IX = 1140, IY = 440, IR = 190;                    /* the magnified valve beside the tire */
  const PA = 165 * RAD;                                   /* the patch on the tread or the rim, at the left, between two of the field's arrows */
  const PMAX = 400, FMAX = 400;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('pressure');
    const Pk = Ps.v, P = Pk * 1e3, A = As.v * 1e-4, Fv = P * A, w = where.value;
    const L = Pk > 0 ? 18 + (Pk / PMAX) * 80 : 0;         /* the field's arrows, the same length everywhere at one pressure */
    const LF = Fv > 0 ? 60 + (Fv / FMAX) * 150 : 0;      /* the one force on the chosen patch */
    hits = [];
    /* the ground and the tire: tread, the air between tread and rim, the rim and the hub */
    strip(ctx, 140, 940, GROUND, 24);
    text(ctx, 'the ground', 940, GROUND + 36, PAL.muted, { size: 17, align: 'right' });
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.12); ctx.beginPath(); ctx.arc(CX, CY, RO, 0, TAU); ctx.arc(CX, CY, RI, 0, TAU, true); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.arc(CX, CY, RO + 4, 0, TAU); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(CX, CY, RO - 3, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(CX, CY, RI, 0, TAU); ctx.stroke(); ctx.restore();
    text(ctx, 'the tread', CX + RO + 14, CY - 60, PAL.muted, { size: 17 });
    text(ctx, 'the rim', CX, CY - RI + 32, PAL.muted, { size: 17, align: 'center' });
    /* the valve on the rim, pointing in toward the hub, and the leaders to its magnified view */
    const vx = CX + RI * Math.cos(VA), vy = CY + RI * Math.sin(VA), ux = -Math.cos(VA), uy = -Math.sin(VA);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.arc(vx + ux * 18, vy + uy * 18, 34, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(vx + ux * 18 + 14, vy + uy * 18 - 31); ctx.lineTo(IX - IR * 0.94, IY - IR * 0.34); ctx.moveTo(vx + ux * 18 + 30, vy + uy * 18 + 16); ctx.lineTo(IX - IR * 0.86, IY + IR * 0.5); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.translate(vx, vy); ctx.rotate(Math.atan2(uy, ux)); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(-6, -9, 40, 18); ctx.strokeRect(-6, -9, 40, 18); ctx.restore();
    hits.push({ x: vx + ux * 18, y: vy + uy * 18, r: 34, name: 'the valve, magnified at the right' });
    /* the field of arrows: the push of the air on the tread, outward, and on the rim, inward */
    if (Pk > 0) for (let k = 0; k < 12; k++) {
      const a = k * 30 * RAD, cx = Math.cos(a), sy = Math.sin(a);
      arrow(ctx, CX + (RO - 12 - L) * cx, CY + (RO - 12 - L) * sy, CX + (RO - 12) * cx, CY + (RO - 12) * sy, pc, 4);
      hits.push({ x: CX + (RO - 12 - L / 2) * cx, y: CY + (RO - 12 - L / 2) * sy, r: 22, name: 'the push of the air on the tread here, perpendicular to it' });
      if (Math.abs(((a - VA + 3 * Math.PI) % TAU) - Math.PI) < 0.3) continue;   /* the valve stands where the rim's arrow would sit */
      arrow(ctx, CX + (RI + 10 + L) * cx, CY + (RI + 10 + L) * sy, CX + (RI + 10) * cx, CY + (RI + 10) * sy, pc, 4);
      hits.push({ x: CX + (RI + 10 + L / 2) * cx, y: CY + (RI + 10 + L / 2) * sy, r: 22, name: 'the push of the air on the rim here, perpendicular to it' });
    }
    /* the magnified valve: the stem, the core seated at its top, the air below pushing the core shut */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(IX, IY, IR, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.arc(IX, IY, IR - 2, 0, TAU); ctx.clip();
    ctx.fillStyle = alpha(PAL.muted, 0.12); ctx.fillRect(IX - 64, IY - 54, 128, 260);                       /* the air in the stem */
    for (const s of [-1, 1]) { line(ctx, IX + s * 64, IY - 100, IX + s * 64, IY + 200, PAL.ink, 5); for (let y = IY - 80; y < IY + 200; y += 24) line(ctx, IX + s * 64, y, IX + s * 76, y + 8, PAL.ink, 3); }
    ctx.strokeStyle = PAL.ink;
    ctx.fillStyle = PAL.soft; ctx.lineWidth = 3; ctx.fillRect(IX - 56, IY - 100, 112, 46); ctx.strokeRect(IX - 56, IY - 100, 112, 46);   /* the core, seated shut */
    ctx.fillRect(IX - 12, IY - 160, 24, 60); ctx.strokeRect(IX - 12, IY - 160, 24, 60);                      /* its pin */
    ctx.restore();
    text(ctx, 'the valve core', IX, IY - 174, PAL.muted, { size: 17, align: 'center' });
    if (Pk > 0) {
      const l = 0.4 * L;
      for (const dx of [-36, 36]) arrow(ctx, IX + dx, IY - 54 + 12 + l, IX + dx, IY - 54 + 12, pc, 4);   /* on the underside of the core */
      for (const y of [IY + 20, IY + 110]) for (const s of [-1, 1]) arrow(ctx, IX + s * (64 - 12 - l), y, IX + s * (64 - 12), y, pc, 4);
      hits.push({ x: IX, y: IY + 40, r: 60, name: 'the air in the stem, pushing on the core and on the walls' });
    }
    /* the chosen patch and the force on it */
    let px, py, nx, ny;
    if (w === 'valve') { px = IX; py = IY - 54; nx = 0; ny = -1; }
    else {
      /* the patch: a short solid arc of the wall itself, wider with the area, on the tread at its outer edge or on the rim */
      const r = w === 'tread' ? RO + 4 : RI, sgn = w === 'tread' ? 1 : -1, half = 0.07 + 0.13 * Math.sqrt(As.v / 10);
      ctx.save(); ctx.strokeStyle = fc; ctx.lineWidth = w === 'tread' ? 18 : 14; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.arc(CX, CY, r, PA - half, PA + half); ctx.stroke(); ctx.restore();
      px = CX + (r + sgn * 7) * Math.cos(PA); py = CY + (r + sgn * 7) * Math.sin(PA); nx = sgn * Math.cos(PA); ny = sgn * Math.sin(PA);
    }
    hits.push({ x: px, y: py, r: 30, name: 'the patch of ' + fmt(As.v, 1) + ' cm² you chose' });
    if (Fv > 0) {
      arrow(ctx, px, py, px + nx * LF, py + ny * LF, fc, 7);
      const tx = px + nx * (LF + 8), ty = py + ny * (LF + 8);
      F.label(ctx, 'F = ' + (Fv < 10 ? fmt(Fv, 1) : fmt(Fv, 0)) + ' N', tx, ty, { side: w === 'valve' ? 'right' : nx < -0.3 ? 'left' : nx > 0.3 ? 'right' : 'above', color: fc, gap: 14, leader: false });
    }
    if (w === 'valve') text(ctx, 'the patch is the face of the core', IX, IY + IR + 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'the arrows are the push of the air on the walls, the same size everywhere at one pressure', 700, 100, PAL.muted, { size: 17, align: 'center' });
    const Fs = (Fv < 10 ? fmt(Fv, 1) : fmt(Fv, 0)) + ' N';
    topline(ctx, Pk === 0 ? 'With no air pressure inside, nothing pushes on the walls of the tire.'
      : w === 'tread' ? 'At ' + fmt(Pk, 0) + ' kPa the air pushes on a ' + fmt(As.v, 1) + ' cm² patch of the tread with ' + Fs + ', straight out through the wall.'
      : w === 'rim' ? 'At ' + fmt(Pk, 0) + ' kPa the air pushes on a ' + fmt(As.v, 1) + ' cm² patch of the rim with ' + Fs + ', straight in toward the hub, the same force as on the tread.'
      : 'At ' + fmt(Pk, 0) + ' kPa the air pushes on the ' + fmt(As.v, 1) + ' cm² face of the valve core with ' + Fs + ', which is what holds the valve shut.');
    readout(d.readout, `\\kF = \\kPr A = (${sciTex(P, 3)}\\ \\text{N/m}^2)(${sciTex(A, 2)}\\ \\text{m}^2) = ${Fv < 10 ? fmt(Fv, 1) : fmt(Fv, 0)}\\ \\text{N}`,
      'The pressure is the same at every point inside the tire, so an equal patch of the tread, of the rim or of the valve core feels the same force, and on each it stands perpendicular to the wall, since a static fluid cannot exert a force along a surface. A tire gauge reads this pressure as ' + fmt(Pk / 6.895, 1) + ' psi.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.7: the swimmer. The water pushes on every part of his skin at
   once, perpendicular to it, the forces underneath a little larger; a
   choice takes him away and leaves the water that fills his place with the
   same forces on its boundary, and a slider tilts his body so the arrows
   follow his skin. Still: a swimmer holding his position has no clock.
===================================================================== */
(function () {
  const d = sim('sim-swimmer', 640);
  const who = choice(d.controls, { label: '\\text{in the water}', options: [{ value: 'swimmer', label: 'the swimmer' }, { value: 'water', label: 'water in his place' }], value: 'swimmer', aria: 'whether the swimmer is there or the water fills his place' });
  const ts = ctl(d.controls, { label: '\\text{his tilt}', cls: '', min: -30, max: 30, step: 5, value: 0, unit: '°', dec: 0, aria: 'the tilt of his body, positive with his head down' });
  const CX = 700, CY = 380, S = 3.2, LEN = 124 * S, R = 46, SURF = 140, BASE = 58, NX = 1090;
  let hits = [];
  hover(d.stage, () => hits);
  /* the outline of the space he fills, a stadium along his body: points and outward normals in his own frame, y along the body */
  function outline() {
    const pts = [], half = LEN / 2 - R, gap = 46;
    for (let y = -half + gap / 2; y < half; y += gap) { pts.push({ x: R, y, nx: 1, ny: 0 }); pts.push({ x: -R, y, nx: -1, ny: 0 }); }
    for (let k = 0; k < 3; k++) { const b = -Math.PI / 2 + Math.PI * (k + 0.5) / 3; pts.push({ x: R * Math.sin(b), y: half + R * Math.cos(b), nx: Math.sin(b), ny: Math.cos(b) }); pts.push({ x: R * Math.sin(b), y: -half - R * Math.cos(b), nx: Math.sin(b), ny: -Math.cos(b) }); }
    return pts;
  }
  const PTS = outline();
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('pressure');
    const t = ts.v * RAD, a = Math.PI / 2 + t, ca = Math.cos(a), sa = Math.sin(a), w = who.value;
    const toCanvas = (x, y) => ({ x: CX + x * ca - y * sa, y: CY + x * sa + y * ca });
    hits = [];
    /* the water and its surface */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.12); ctx.fillRect(0, SURF, 1400, 640 - SURF); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    for (let x = 0; x <= 1400; x += 10) { const y = SURF + 6 * Math.sin(x / 38); if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'the surface of the water', 1380, SURF - 22, PAL.muted, { size: 17, align: 'right' });
    /* the space he fills: the swimmer himself, or the water that would take his place */
    const half = LEN / 2 - R;
    ctx.save(); ctx.translate(CX, CY); ctx.rotate(a);
    ctx.beginPath(); ctx.moveTo(R, -half); ctx.lineTo(R, half); ctx.arc(0, half, R, 0, Math.PI); ctx.lineTo(-R, -half); ctx.arc(0, -half, R, Math.PI, TAU); ctx.closePath();
    if (w === 'water') { ctx.fillStyle = alpha(PAL.muted, 0.22); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.stroke(); }
    ctx.restore();
    if (w === 'swimmer') {
      ctx.save(); ctx.translate(CX, CY); ctx.rotate(a);
      F.silhouette(ctx, { x: 0, y: LEN / 2 - 8, s: (LEN - 16) / 160, face: -1, pose: 'reach', hands: [{ x: 10, y: -158 }, { x: 2, y: -156 }], feet: [{ x: 6, y: 0 }, { x: -6, y: 0 }], kneeSide: 1, elbowSide: -1 });
      ctx.restore();
    } else {
      const c = toCanvas(0, 0);
      text(ctx, 'the water that would fill his place', c.x, c.y, PAL.ink, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.85) });
    }
    /* the forces of the water on the boundary, each perpendicular to it, longer underneath */
    const cs = PTS.map((p) => ({ p, c: toCanvas(p.x, p.y) }));
    const ys = cs.map((q) => q.c.y), yTop = Math.min(...ys), yBot = Math.max(...ys);
    for (const { p, c } of cs) {
      const n = toCanvas(p.nx, p.ny), nx = n.x - CX, ny = n.y - CY;
      const len = BASE * (1 + 0.25 * (c.y - yTop) / (yBot - yTop));
      arrow(ctx, c.x + nx * (len + 6), c.y + ny * (len + 6), c.x + nx * 6, c.y + ny * 6, pc, 4);
      hits.push({ x: c.x + nx * (len / 2 + 6), y: c.y + ny * (len / 2 + 6), r: 20, name: w === 'swimmer' ? 'the push of the water on his skin here, perpendicular to it' : 'the push of the surrounding water on this boundary, perpendicular to it' });
    }
    /* the sum of the pushes, and the weight that balances it */
    dot(ctx, NX, CY, PAL.ink, true, 8);
    arrow(ctx, NX, CY, NX, CY - 130, fc, 5);
    text(ctx, 'the net upward force', NX + 18, CY - 112, fc, { weight: 600 });
    hits.push({ x: NX, y: CY - 65, r: 24, name: 'the net upward force, the sum of every push of the water' });
    arrow(ctx, NX, CY, NX, CY + 130, fc, 5);
    text(ctx, w === 'swimmer' ? 'w, his weight' : 'w, the weight of that water', NX + 18, CY + 112, fc, { weight: 600 });
    hits.push({ x: NX, y: CY + 65, r: 24, name: w === 'swimmer' ? 'his weight, which balances the net upward force' : 'the weight of the water in his place, which the net upward force holds up' });
    text(ctx, 'the sum of the pushes,', NX, CY - 160, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'and the weight it balances', NX, CY - 138, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'the arrows are the push of the water, perpendicular to the surface at every point', 700, 112, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, w === 'swimmer' ? 'The water pushes on every part of the swimmer’s skin at once, each force perpendicular to the skin where it acts, and the forces underneath are a little larger than those on top.'
      : 'With the swimmer gone, the water that fills his place feels the same forces on its boundary, which is why water would flow into that space if he were not there.');
    readout(d.readout, `\\kF = \\kPr A\\ \\text{on every patch of ${w === 'swimmer' ? 'his skin' : 'the boundary'}, perpendicular to that patch}`,
      'The pressure is a little greater on the patches underneath, because the water is deeper there, so the forces underneath are a little larger than those on top and their sum has an upward part. On the swimmer that net upward force is balanced by his weight; on the water in his place it holds up the weight of that water, which is why the water stays where it is. How much greater the pressure is at a greater depth is the subject of the next section.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
