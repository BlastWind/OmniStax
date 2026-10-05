/* Figures for section 11.3 Pressure. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider's or a
   choice's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, strip } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

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
   FIGURE 11.5: the finger and the needle. One push against the skin of an
   arm, over a round contact whose width slides from the pad of a fingertip
   to the point of a needle. The pusher is drawn at body scale, the library's
   hand with its fingers straight onto the arm, or the same hand holding a
   syringe below 4 mm; a magnified inset at 20 units/mm shows the pad or the
   point denting the skin over the width d. A ruler of pressures below is
   marked in powers of ten. Still: a push held against the skin has no time
   in it, so the figure answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-poke', 740);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 20, step: 0.5, value: 5, unit: 'N', dec: 1, aria: 'the size of the push' });
  /* The width rather than the area is the slider: a width is what the picture shows, and the
     area, which goes as the square of the width, runs through four powers of ten. The two
     detents are the book's two panels, the point of a needle and the pad of a fingertip; they are
     ticks without the snap, whose reach of a third of the gap between them would take 0.1 to 4.3 mm
     and 8 to 12 mm to the two ends. */
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.1, max: 12, step: 0.1, value: 12, unit: 'mm', dec: 1, aria: 'the width of the contact', detents: [{ v: 0.3, label: 'needle' }, { v: 12, label: 'fingertip' }], snap: false });
  /* Two scales of one push: the body at BS units/mm with the contact at (SX, CY), and the inset at
     IS units/mm round (ICX, CY), radius IR. Lengths below are in millimetres, x into the skin from its
     undented surface and u across the push. HMM is the library hand's frame unit in millimetres,
     set so the middle fingertip (radius TIP.r in that frame, hand.ts) is 8.4 mm round. */
  const BS = 4 / 3, IS = 20, SX = 560, CY = 340, ICX = 990, IR = 200;
  const HMM = 465, TIP = { x: 0.4542, z: -0.004, r: 0.01806 }, RT = TIP.r * HMM;
  /* the ruler of pressures: fixed from the slider extremes, 20 N over the point at 0.1 mm is 2.5 × 10⁹ Pa, so the ruler runs 10² to 10¹⁰ Pa */
  const RX0 = 150, RX1 = 1250, E0 = 2, E1 = 10, RY = 670;
  const RX = (p) => RX0 + ((Math.log10(p) - E0) / (E1 - E0)) * (RX1 - RX0);
  const marks = [[1e4, '1 × 10⁴ Pa, which is 100 mb'], [6.9e6, 'the air tank of Example 11.2'], [3.0e9, 'a nail tip under a hammer']];
  /* the pusher's face in mm, x as a function of u, -Infinity where it has none; the skin wraps whatever pushes past its surface */
  function pusher(dw, P, finger) {
    const a = dw / 2;
    if (finger) { const xc = RT - Math.sqrt(RT * RT - a * a) - RT; return { xc, face: (u) => (Math.abs(u) < RT ? xc + Math.sqrt(RT * RT - u * u) : -Infinity), sag: () => 0 }; }
    const xT = P > 0 ? Math.min(2.2, Math.max(0.3, 0.6 + 0.4 * Math.log10(P / 1e4))) : 0, sh = Math.max(0.4, a), Lt = 5.5, hw = Math.max(3, 2.2 * a);
    return {
      xT, sh, Lt, a,
      face: (u) => { const v = Math.abs(u); return v <= a ? xT : v <= sh ? xT - (Lt * (v - a)) / (sh - a) : -Infinity; },
      sag: (u) => (Math.abs(u) < hw ? xT * 0.5 * (1 + Math.cos((Math.PI * u) / hw)) : 0),
    };
  }
  const skin = (p, u) => Math.max(0, p.sag(u), p.face(u));
  /* the arm's outer edge at body scale bows gently out to the contact */
  const bow = (y) => 0.0007 * (y - CY) * (y - CY);
  function skinPath(ctx, p, S, ox, y0, y1, bowed) {
    for (let y = y0; y <= y1; y += 1) { const x = ox + (bowed ? bow(y) : 0) + S * skin(p, (y - CY) / S); y === y0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
  }
  /* the hand at scale S with its middle fingertip centred on (cx, CY): fingers straight along +x, seen from the side */
  function fingerHand(ctx, S, cx, col) {
    const k = S * HMM;
    F.hand(ctx, cx - k * TIP.x, CY + k * TIP.z, { aim: [1, 0], view: 'side', curl: 0, thumb: 'along', s: k / 240, color: col, ink: col });
  }
  /* the needle's outline in mm from its face back to x0, drawn at scale S about (ox, CY) */
  function needlePath(ctx, p, S, ox, x0) {
    const X = (x) => ox + S * x, Y = (u) => CY + S * u;
    ctx.moveTo(X(x0), Y(-p.sh)); if (p.sh > p.a) ctx.lineTo(X(p.xT - p.Lt), Y(-p.sh));
    ctx.lineTo(X(p.xT), Y(-p.a)); ctx.lineTo(X(p.xT), Y(p.a));
    if (p.sh > p.a) ctx.lineTo(X(p.xT - p.Lt), Y(p.sh)); ctx.lineTo(X(x0), Y(p.sh)); ctx.closePath();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), pc = C('pressure'), posc = C('position'), sc = F.ref('skin');
    const Fv = Fs.v, dw = ds.v, A = Math.PI * (dw / 2) * (dw / 2) * 1e-6, P = Fv / A;
    const finger = dw > 3.95, who = F.ref(finger ? 'fingertip' : 'needle'), p = pusher(dw, P, finger), a = dw / 2;
    const like = dw <= 0.5 ? ', about the point of a needle,' : dw >= 8 ? ', about the pad of a fingertip,' : '';
    const rows = topline(ctx, Fv === 0 ? 'With no push against the skin there is no pressure on it, however narrow the contact.'
      : 'A push of ' + fmt(Fv, 1) + ' N over a contact ' + fmt(dw, 1) + ' mm across' + like + ' makes a pressure of ' + sci(P, 3) + ' Pa.');
    const lab = F.labeller(ctx, 740, { headline: rows });
    /* ---- body scale: the arm, 112 mm thick, and the pusher ---- */
    const AY0 = 130, AY1 = 545, AW = 150;
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.14); ctx.beginPath(); skinPath(ctx, p, BS, SX, AY0, AY1, true);
    ctx.lineTo(SX + AW + bow(AY1), AY1); for (let y = AY1; y >= AY0; y -= 4) ctx.lineTo(SX + AW + bow(y), y); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = sc; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); skinPath(ctx, p, BS, SX, AY0, AY1, true); ctx.stroke();
    ctx.beginPath(); for (let y = AY0; y <= AY1; y += 4) y === AY0 ? ctx.moveTo(SX + AW + bow(y), y) : ctx.lineTo(SX + AW + bow(y), y); ctx.stroke(); ctx.restore();
    let pushBox;
    if (finger) {
      const k = BS * HMM;
      fingerHand(ctx, BS, SX + BS * p.xc, who);
      pushBox = { l: SX + BS * p.xc - k * (TIP.x + 0.12), t: CY - 34, r: SX, b: CY + 34 };
    } else {
      /* a 10 mL syringe: needle 25 mm, hub 8 mm, barrel 75 mm by 16 mm, plunger 40 mm; the hand holds the barrel from above */
      const X = (x) => SX + BS * x, br = 8 * BS, nb = p.xT - 25, hb = nb - 8, b0 = hb - 75, pl = b0 - 40;
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = who; ctx.lineWidth = 3; ctx.lineJoin = 'round';
      ctx.fillRect(X(pl), CY - 3, X(b0) - X(pl), 6); ctx.strokeRect(X(pl), CY - 3, X(b0) - X(pl), 6);
      ctx.fillRect(X(pl) - 5, CY - br + 2, 6, 2 * br - 4); ctx.strokeRect(X(pl) - 5, CY - br + 2, 6, 2 * br - 4);
      ctx.fillRect(X(b0), CY - br, X(hb) - X(b0), 2 * br); ctx.strokeRect(X(b0), CY - br, X(hb) - X(b0), 2 * br);
      ctx.fillRect(X(b0) - 4, CY - br - 9, 6, 2 * br + 18); ctx.strokeRect(X(b0) - 4, CY - br - 9, 6, 2 * br + 18);
      ctx.beginPath(); ctx.moveTo(X(hb), CY - br); ctx.lineTo(X(nb), CY - 3); ctx.lineTo(X(nb), CY + 3); ctx.lineTo(X(hb), CY + br); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.restore();
      line(ctx, X(nb), CY, X(p.xT), CY, who, Math.max(2.5, 2 * BS * p.sh));
      const k = BS * HMM, gx = (X(b0) + X(hb)) / 2;
      F.hand(ctx, gx, CY - 0.24 * k, { aim: [0, 1], view: 'back', curl: 0.8, thumb: 'along', s: k / 240, color: who, ink: who });
      lab.place({ l: gx - 0.07 * k, t: CY - 0.36 * k, r: gx + 0.07 * k, b: CY + 0.06 * k });
      pushBox = { l: X(pl) - 6, t: CY - br - 10, r: X(nb), b: CY + br + 10 };
    }
    lab.place(pushBox);
    /* the force along the axis of the push, below the pusher and drawn heavier than any body line */
    if (Fv > 0) {
      const la = 40 + Fv * 8, y = CY + 70, x1 = SX - 30;
      arrow(ctx, x1 - la, y, x1, y, fc, 7);
      lab.beside({ x1: x1 - la, y1: y, x2: x1, y2: y }, 'right', 'F = ' + fmt(Fv, 1) + ' N', fc, 22, { gap: 28 });
    }
    if (finger) lab.add('a fingertip', SX - 40, CY - 12, -0.35, -1, who, 19, 70);
    else lab.add('a hypodermic needle', pushBox.l, CY, -1, -0.4, who, 19, 30);
    lab.add('the skin of an arm', SX + AW / 2 + 10, AY1 - 30, 0, 1, sc, 19, 50);
    /* ---- the leaders from the patch the inset magnifies ---- */
    const rb = (IR / IS) * BS, D = ICX - SX, ph = Math.acos((IR - rb) / D);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.arc(SX, CY, rb, 0, TAU); ctx.stroke();
    for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.moveTo(SX - rb * Math.cos(ph), CY + sgn * rb * Math.sin(ph)); ctx.lineTo(ICX - IR * Math.cos(ph), CY + sgn * IR * Math.sin(ph)); ctx.stroke(); }
    ctx.restore();
    /* ---- the inset, 15 times the body scale: the skin wraps the pad or the point ---- */
    const IX = ICX - 40;
    ctx.save(); ctx.beginPath(); ctx.arc(ICX, CY, IR, 0, TAU); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.clip();
    ctx.fillStyle = alpha(PAL.muted, 0.14); ctx.beginPath(); skinPath(ctx, p, IS, IX, CY - IR, CY + IR, false); ctx.lineTo(ICX + IR, CY + IR); ctx.lineTo(ICX + IR, CY - IR); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = sc; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath(); skinPath(ctx, p, IS, IX, CY - IR, CY + IR, false); ctx.stroke();
    if (finger) fingerHand(ctx, IS, IX + IS * p.xc, who);
    else { ctx.fillStyle = PAL.panel; ctx.strokeStyle = who; ctx.lineWidth = 3; ctx.beginPath(); needlePath(ctx, p, IS, IX, -20); ctx.fill(); ctx.stroke(); }
    /* the contact in the pressure hue, along the pad's arc or the point's face */
    ctx.strokeStyle = pc; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath();
    if (finger) { const t = Math.asin(a / RT); ctx.arc(IX + IS * p.xc, CY, IS * RT, -t, t); }
    else { ctx.moveTo(IX + IS * p.xT, CY - IS * a); ctx.lineTo(IX + IS * p.xT, CY + IS * a); }
    ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(ICX, CY, IR, 0, TAU); ctx.stroke(); ctx.restore();
    /* d bracketed beside the inset, its ends carried out from the edges of the contact */
    const bx = ICX + IR + 26, cx0 = IX + IS * (finger ? 0 : p.xT);
    for (const sgn of [-1, 1]) line(ctx, cx0 + 8, CY + sgn * IS * a, bx - 6, CY + sgn * IS * a, alpha(posc, 0.5), 2, [4, 8]);
    vbracket(ctx, bx, CY - IS * a, CY + IS * a, posc, 'd = ' + fmt(dw, 1) + ' mm', 1);
    text(ctx, 'magnified ' + Math.round(IS / BS) + ' times', ICX, CY + IR + 26, PAL.muted, { size: 17, align: 'center' });
    /* the ruler of pressures */
    line(ctx, RX0, RY, RX1, RY, PAL.ink, 3);
    for (let e = E0; e <= E1; e++) { const x = RX(Math.pow(10, e)); line(ctx, x, RY - 8, x, RY + 8, PAL.ink, 2); text(ctx, '10' + sup(e) + (e === E1 ? ' Pa' : ''), x, RY + 30, PAL.muted, { size: 17, align: 'center' }); }
    for (const [pm, nm] of marks) { const x = RX(pm); line(ctx, x, RY - 12, x, RY - 34, PAL.muted, 2); text(ctx, nm, x, RY - 48, PAL.muted, { size: 17, align: 'center' }); }
    if (Fv > 0) {
      const x = RX(P);
      ctx.save(); ctx.fillStyle = alpha(pc, 0.3); ctx.fillRect(RX0, RY - 9, x - RX0, 18); ctx.restore();
      dot(ctx, x, RY, pc, true, 9);
      const right = x > 980;
      text(ctx, 'P = ' + sci(P, 3) + ' Pa', x + (right ? -18 : 18), RY + 56, pc, { weight: 600, align: right ? 'right' : 'left' });
    }
    const missed = lab.flush(); d.fig.dataset.missed = missed.join(' | ');
    readout(d.readout, `\\kPr = \\frac{\\kF}{\\karea} = \\frac{${fmt(Fv, 1)}\\ \\text{N}}{${sciTex(A, 3)}\\ \\text{m}^2} = ${Fv === 0 ? '0' : sciTex(P, 3)}\\ \\text{Pa}`,
      'The contact is a circle, so $\\karea = \\pi(\\kd/2)^2 = ' + sig3(A * 1e6) + '\\ \\text{mm}^2$.');
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
  const As = ctl(d.controls, { label: '\\karea', cls: 'area', min: 0.1, max: 10, step: 0.1, value: 2, unit: 'cm²', dec: 1, aria: 'the area of the patch of wall' });
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
    const tc = F.ref('tire');
    ctx.save(); ctx.strokeStyle = tc; ctx.lineWidth = 12; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.arc(CX, CY, RO + 4, 0, TAU); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = tc; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(CX, CY, RO - 3, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(CX, CY, RI, 0, TAU); ctx.stroke(); ctx.restore();
    text(ctx, 'the tread', CX + RO + 14, CY - 60, tc, { size: 17 });
    text(ctx, 'the rim', CX, CY - RI + 32, tc, { size: 17, align: 'center' });
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
    text(ctx, 'the valve core', IX, IY - IR - 18, PAL.muted, { size: 17, align: 'center' });
    if (Pk > 0) {
      const l = 0.4 * L;
      for (const dx of [-36, 36]) arrow(ctx, IX + dx, IY - 54 + 12 + l, IX + dx, IY - 54 + 12, pc, 4);   /* on the underside of the core */
      for (const y of [IY + 20, IY + 110]) for (const s of [-1, 1]) arrow(ctx, IX + s * (64 - 12 - l), y, IX + s * (64 - 12), y, pc, 4);
      hits.push({ x: IX, y: IY + 40, r: 60, name: 'the air in the stem, pushing on the core and on the walls' });
    }
    /* the chosen patch and the force on it: a short solid arc of the wall itself, wider with the area, on the tread at its outer edge
       or on the rim, or the face of the core; a new choice slides the patch and its force from the one wall to the other */
    const spot = (v) => {
      if (v === 'valve') return { px: IX, py: IY - 54, nx: 0, ny: -1, r: RI, lw: 14, on: 0 };
      const r = v === 'tread' ? RO + 4 : RI, sgn = v === 'tread' ? 1 : -1;
      return { px: CX + (r + sgn * 7) * Math.cos(PA), py: CY + (r + sgn * 7) * Math.sin(PA), nx: sgn * Math.cos(PA), ny: sgn * Math.sin(PA), r, lw: v === 'tread' ? 18 : 14, on: 1 };
    };
    const { px, py, nx, ny, r, lw, on } = where.mix(spot), half = 0.07 + 0.13 * Math.sqrt(As.v / 10);
    if (on > 0) { ctx.save(); ctx.globalAlpha = on; ctx.strokeStyle = C('area'); ctx.lineWidth = lw; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.arc(CX, CY, r, PA - half, PA + half); ctx.stroke(); ctx.restore(); }
    hits.push({ x: px, y: py, r: 30, name: 'the patch of ' + fmt(As.v, 1) + ' cm² you chose' });
    if (Fv > 0) {
      arrow(ctx, px, py, px + nx * LF, py + ny * LF, fc, 7);
      const tx = px + nx * (LF + 8), ty = py + ny * (LF + 8);
      F.label(ctx, 'F = ' + (Fv < 10 ? fmt(Fv, 1) : fmt(Fv, 0)) + ' N', tx, ty, { side: w === 'valve' ? 'right' : nx < -0.3 ? 'left' : nx > 0.3 ? 'right' : 'above', color: fc, gap: 14, leader: false });
    }
    const va = where.a('valve');
    if (va > 0) { ctx.save(); ctx.globalAlpha = va; text(ctx, 'the patch is the face of the core', IX, IY + IR + 30, PAL.muted, { size: 17, align: 'center' }); ctx.restore(); }
    const Fs = (Fv < 10 ? fmt(Fv, 1) : fmt(Fv, 0)) + ' N';
    topline(ctx, Pk === 0 ? 'With no air pressure inside, nothing pushes on the walls of the tire.'
      : w === 'tread' ? 'At ' + fmt(Pk, 0) + ' kPa the air pushes on a ' + fmt(As.v, 1) + ' cm² patch of the tread with ' + Fs + ', straight out through the wall.'
      : w === 'rim' ? 'At ' + fmt(Pk, 0) + ' kPa the air pushes on a ' + fmt(As.v, 1) + ' cm² patch of the rim with ' + Fs + ', straight in toward the hub, the same force as on the tread.'
      : 'At ' + fmt(Pk, 0) + ' kPa the air pushes on the ' + fmt(As.v, 1) + ' cm² face of the valve core with ' + Fs + ', which is what holds the valve shut.');
    readout(d.readout, `\\kF = \\kPr \\karea = (${sciTex(P, 3)}\\ \\text{N/m}^2)(${sciTex(A, 2)}\\ \\text{m}^2) = ${Fv < 10 ? fmt(Fv, 1) : fmt(Fv, 0)}\\ \\text{N}`,
      'A tire gauge reads this pressure as ' + fmt(Pk / 6.895, 1) + ' psi.');
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
  const ts = ctl(d.controls, { label: '\\text{his tilt}', cls: 'angle', min: -30, max: 30, step: 5, value: 0, unit: '°', dec: 0, aria: 'the tilt of his body, positive with his head down' });
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
    /* his outline holds its place while his body fades into the water that fills it, and back */
    const aw = who.a('water'), as = who.a('swimmer');
    ctx.globalAlpha = aw; ctx.fillStyle = alpha(PAL.muted, 0.22); ctx.fill();
    ctx.globalAlpha = 0.35 + 0.65 * aw; ctx.strokeStyle = F.ref('swimmer'); ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.stroke();
    ctx.restore();
    if (as > 0) {
      ctx.save(); ctx.globalAlpha = as; ctx.translate(CX, CY); ctx.rotate(a);
      F.silhouette(ctx, { x: 0, y: LEN / 2 - 8, s: (LEN - 16) / 184, color: F.ref('swimmer'), face: -1, pose: 'reach', hands: [{ x: 8, y: -176 }, { x: 2, y: -175 }], feet: [{ x: 6, y: 0 }, { x: -6, y: 0 }], kneeSide: 1 });
      ctx.restore();
    }
    if (aw > 0) {
      const c = toCanvas(0, 0);
      ctx.save(); ctx.globalAlpha = aw; text(ctx, 'the water that would fill his place', c.x, c.y, PAL.ink, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.85) }); ctx.restore();
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
    dot(ctx, NX, CY, F.ref('swimmer'), true, 8);
    arrow(ctx, NX, CY, NX, CY - 130, fc, 5);
    text(ctx, 'the net upward force', NX + 18, CY - 112, fc, { weight: 600 });
    hits.push({ x: NX, y: CY - 65, r: 24, name: 'the net upward force, the sum of every push of the water' });
    arrow(ctx, NX, CY, NX, CY + 130, fc, 5);
    ctx.save(); ctx.globalAlpha = as; text(ctx, 'w, his weight', NX, CY + 140, fc, { weight: 600, align: 'center' });
    ctx.globalAlpha = aw; text(ctx, 'w, the weight of that water', NX, CY + 140, fc, { weight: 600, align: 'center' }); ctx.restore();
    hits.push({ x: NX, y: CY + 65, r: 24, name: w === 'swimmer' ? 'his weight, which balances the net upward force' : 'the weight of the water in his place, which the net upward force holds up' });
    text(ctx, 'the sum of the pushes,', NX, CY - 188, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'and the weight it balances', NX, CY - 166, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, w === 'swimmer' ? 'The water pushes on every part of the swimmer’s skin at once, each force perpendicular to the skin where it acts, and the forces underneath are a little larger than those on top.'
      : 'With the swimmer gone, the water that fills his place feels the same forces on its boundary, which is why water would flow into that space if he were not there.');
    readout(d.readout, `\\kF = \\kPr \\karea\\ \\text{on every patch of ${w === 'swimmer' ? 'his skin' : 'the boundary'}, perpendicular to that patch}`,
      'The water is deeper underneath, so the forces there are a little larger and their sum has an upward part, ' + (w === 'swimmer' ? 'which his weight balances.' : 'which holds up the weight of the water in his place.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
