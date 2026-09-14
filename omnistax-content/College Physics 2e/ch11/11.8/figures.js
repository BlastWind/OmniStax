/* Figures for section 11.8 Cohesion and Adhesion in Liquids: Surface Tension and Capillary Action.
   Boots against the section's text article. A liquid at rest has no time in it, so every
   figure here but one is a still picture that answers its sliders and registers no cycle; the
   one that moves is the pair of balloons, whose emptying is a genuine clock. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, axes, curve, pinned, labeller, hover, fixed, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers ---------- */
const G = 9.80, ATM = 1.013e5, RAD = Math.PI / 180, TAU = 2 * Math.PI;
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a value to n significant figures as a mantissa and a power of ten */
function sci(v, n) {
  if (v === 0) return { ms: (0).toFixed(n - 1), e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), ms = (v / Math.pow(10, e)).toPrecision(n);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (v / Math.pow(10, e)).toPrecision(n); }
  return { ms, e };
}
const sciTex = (v, n) => { const { ms, e } = sci(v, n); return e === 0 ? ms : `${ms} \\times 10^{${e}}`; };
const sciText = (v, n) => { const { ms, e } = sci(v, n); return e === 0 ? ms : `${ms} × 10${sup(e)}`; };
/* a plain number to n significant figures, keeping trailing zeros where it is between 0.01 and 1000 */
const sigz = (v, n) => { const a = Math.abs(v); if (a === 0) return (0).toFixed(n - 1); if (!(a >= 0.01 && a < 1000)) return sciText(v, n); const d = Math.max(0, n - 1 - Math.floor(Math.log10(a))); return v.toFixed(d); };
const minus = (s) => String(s).replace(/^-/, '−');
/* a value that rounds to nothing is nothing, so that cos 90° does not print as 10⁻¹⁷ */
const zero = (v, tol = 5e-4) => (Math.abs(v) < tol ? 0 : v);

/* ---------- Table 11.3 and Table 11.4 ---------- */
/* the surface tensions of Table 11.3, in N/m, in the book's order */
const TABLE = [
  { n: 'water at 0°C', g: 0.0756 }, { n: 'water at 20°C', g: 0.0728 }, { n: 'water at 100°C', g: 0.0589 },
  { n: 'soapy water', g: 0.0370 }, { n: 'ethyl alcohol', g: 0.0223 }, { n: 'glycerin', g: 0.0631 },
  { n: 'mercury', g: 0.465 }, { n: 'olive oil', g: 0.032 }, { n: 'tissue fluids', g: 0.050 },
  { n: 'whole blood at 37°C', g: 0.058 }, { n: 'blood plasma at 37°C', g: 0.073 }, { n: 'gold at 1070°C', g: 1.0 },
  { n: 'oxygen at −193°C', g: 0.0157 }, { n: 'helium at −269°C', g: 0.00012 },
];
/* the detents a surface-tension slider settles on: the four liquids of the table that a reader meets in the examples and problems */
const GAMMA_DETENTS = [{ v: 0.0223, label: 'alcohol' }, { v: 0.037, label: 'soapy water' }, { v: 0.0631, label: 'glycerin' }, { v: 0.0728, label: 'water' }];
const GAMMA_TICKS = GAMMA_DETENTS.map((d) => d.v), THETA_TICKS = [0, 26, 90, 107, 140];   /* the same stops without labels, for a slider too short to carry them */
const gammaName = (g) => { const d = GAMMA_DETENTS.find((x) => Math.abs(x.v - g) < 0.0006); return d ? (d.label === 'water' ? 'water at 20°C' : d.label === 'alcohol' ? 'ethyl alcohol' : d.label) : null; };
/* the contact angles of Table 11.4 that a contact-angle slider settles on */
const THETA_DETENTS = [{ v: 0, label: 'water–glass' }, { v: 26, label: 'kerosene' }, { v: 90, label: 'silver' }, { v: 107, label: 'paraffin' }, { v: 140, label: 'mercury' }];
const PAIRS = { 0: 'water on glass, ethyl alcohol on glass and most organic liquids on glass', 26: 'kerosene on glass', 90: 'water on silver', 107: 'water on paraffin', 140: 'mercury on glass' };

/* ---------- small drawing helpers ---------- */
/* the angle between two directions at (x, y): an arc from the canvas angle a0 sweeping deg degrees, its label beyond the middle */
function angleArc(ctx, x, y, a0, deg, R, color, label, lsz = 20) {
  const d = deg * RAD;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, R, a0, a0 + d, d < 0); ctx.stroke(); ctx.restore();
  if (label) { const m = a0 + d / 2; text(ctx, label, x + (R + 30) * Math.cos(m), y + (R + 30) * Math.sin(m), color, { align: 'center', size: lsz, weight: 600, bg: alpha(PAL.panel, 0.85) }); }
}
/* a filled shape from a path-building function, in a fill and an optional stroke */
function shape(ctx, build, fill, stroke, w = 3) {
  ctx.save(); ctx.beginPath(); build(ctx); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); } ctx.restore();
}
/* a glass wall: a pale double line */
function glass(ctx, x1, y1, x2, y2, w = 5) { line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.35), w); }
/* a free-body diagram: a point with named arrows in the given directions (unit vectors) and lengths */
function freeBody(ctx, x, y, arrows, title) {
  text(ctx, title, x, y - 150, PAL.muted, { size: 19, align: 'center' });
  for (const a of arrows) { arrow(ctx, x, y, x + a.ux * a.len, y + a.uy * a.len, a.color, 4); text(ctx, a.name, x + a.ux * (a.len + 26), y + a.uy * (a.len + 26), a.color, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) }); }
  dot(ctx, x, y, PAL.ink, true, 7);
}

/* =====================================================================
   FIGURE 11.25: the surface as a stretched sheet. A body rests on the
   liquid in cross-section; the surface dents under its weight, and the two
   restoring forces along the surface turn toward the vertical until their
   upward parts hold the weight, or the weight is more than γL and the
   surface breaks. Still: an equilibrium with no time in it.
===================================================================== */
(function () {
  const d = sim('sim-surface-sheet', 660);
  const BODIES = { insect: { L: 10, w: 0.3 }, needle: { L: 70, w: 1.0 } };
  const body = choice(d.controls, { label: '\\text{the body}', options: [{ value: 'insect', label: 'insect’s foot' }, { value: 'needle', label: 'iron needle' }], value: 'insect', aria: 'which body rests on the surface', onInput: (v) => { ws.set(BODIES[v].w); Ls.set(BODIES[v].L); } });
  const ws = ctl(d.controls, { label: '\\kwgt', cls: 'force', min: 0, max: 8, step: 0.01, value: 0.3, unit: 'mN', dec: 2, aria: 'the weight of the body' });
  const Ls = ctl(d.controls, { label: 'L', cls: '', min: 2, max: 100, step: 1, value: 10, unit: 'mm', dec: 0, aria: 'the length of the line along which the body touches the liquid' });
  const gs = ctl(d.controls, { label: '\\kgamma', cls: 'surface-tension', min: 0.01, max: 0.1, step: 0.0001, value: 0.0728, unit: 'N/m', dec: 4, detents: GAMMA_TICKS, snap: true, aria: 'the surface tension of the liquid' });
  /* the basin, the undisturbed surface and the force scale: 220 units per millinewton, so that the book's own weights are readable, every arrow capped at 250 units and carrying its number */
  const XL = 90, XR = 900, Y0 = 320, YB = 580, CX = 495, KF = 220, DENT = 120, CAP = 250;
  const alen = (mN) => Math.min(CAP, mN * KF);
  function draw() {
    const { ctx, H } = begin(d.c);
    const fc = C('force'), gc = C('surface-tension');
    const w = ws.v, L = Ls.v / 1000, g = gs.v, hold = g * L * 1000;          /* hold: the most the surface can carry, in mN */
    const s = hold > 0 ? w / hold : Infinity, breaks = s > 1, th = breaks ? 90 : Math.asin(s) / RAD;
    const needle = body.value === 'needle', R = needle ? 16 : 30;
    const D = breaks ? DENT : DENT * Math.sin(th * RAD), yc = Y0 + D;      /* the dent bottom, where the body's equator sits */
    const cosT = Math.cos(th * RAD), sinT = Math.sin(th * RAD), k = 0.35 * (CX - R - XL);
    /* the liquid: flat far away, dented to the contact points, or closed over a body that has sunk */
    const sunk = { x: CX, y: Y0 + 170 };
    shape(ctx, (c) => {
      c.moveTo(XL, YB); c.lineTo(XL, Y0);
      if (breaks) { c.lineTo(XR, Y0); }
      else {
        c.bezierCurveTo(XL + 0.5 * (CX - R - XL), Y0, CX - R - k * cosT, yc - k * sinT, CX - R, yc);
        c.arc(CX, yc, R, Math.PI, 0, true);
        c.bezierCurveTo(CX + R + k * cosT, yc - k * sinT, XR - 0.5 * (XR - CX - R), Y0, XR, Y0);
      }
      c.lineTo(XR, YB); c.closePath();
    }, alpha(PAL.ink, 0.1));
    shape(ctx, (c) => {
      c.moveTo(XL, Y0);
      if (breaks) c.lineTo(XR, Y0);
      else { c.bezierCurveTo(XL + 0.5 * (CX - R - XL), Y0, CX - R - k * cosT, yc - k * sinT, CX - R, yc); c.moveTo(CX + R, yc); c.bezierCurveTo(CX + R + k * cosT, yc - k * sinT, XR - 0.5 * (XR - CX - R), Y0, XR, Y0); }
    }, null, PAL.ink, 3);
    glass(ctx, XL, Y0 - 40, XL, YB); glass(ctx, XR, Y0 - 40, XR, YB); glass(ctx, XL, YB, XR, YB);
    const liq = gammaName(g);
    text(ctx, liq ? liq : 'the liquid, γ = ' + sigz(g, 3) + ' N/m', XL + 16, YB - 26, PAL.muted, { size: 18 });
    /* the body: the foot of an insect on its leg, or a needle seen end-on */
    const bx = CX, by = breaks ? sunk.y : yc;
    if (needle) {
      dot(ctx, bx, by, PAL.ink, false, R); dot(ctx, bx, by, PAL.ink, true, R - 8);
      text(ctx, 'iron needle, seen end-on', bx + R + 150, by + 58, PAL.ink, { size: 19, bg: alpha(PAL.panel, 0.85) });
      line(ctx, bx + R + 10, by + 10, bx + R + 62, by + 50, alpha(PAL.ink, 0.5), 1.5, [5, 6]);
    } else {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(bx, by - R + 4); ctx.lineTo(bx + 60, by - 130); ctx.lineTo(bx + 210, by - 225); ctx.stroke(); ctx.restore();
      shape(ctx, (c) => c.ellipse(bx, by, R, R * 0.6, 0, 0, TAU), PAL.ink);
      text(ctx, 'insect’s foot on its leg', bx + 120, by - 250, PAL.ink, { size: 19, bg: alpha(PAL.panel, 0.85) });
    }
    /* the forces: the two pulls of the surface along itself, their net, and the weight */
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    const half = hold / 2;
    if (!breaks && w > 0) {
      const len = alen(half);
      arrow(ctx, CX - R, yc, CX - R - len * cosT, yc - len * sinT, fc, 4); lab.add('F_ST', CX - R - len * cosT, yc - len * sinT, -cosT, -sinT, fc, 20, 22);
      arrow(ctx, CX + R, yc, CX + R + len * cosT, yc - len * sinT, fc, 4); lab.add('F_ST', CX + R + len * cosT, yc - len * sinT, cosT, -sinT, fc, 20, 22);
      const nl = Math.min(alen(w), yc - R * 0.6 - 130); arrow(ctx, CX, yc - R * 0.6, CX, yc - R * 0.6 - nl, fc, 5); lab.add('net F_ST = ' + sigz(w, 3) + ' mN', CX, yc - R * 0.6 - nl, 0, -1, fc, 20, 22);
      angleArc(ctx, CX + R, yc, 0, -th, 96, PAL.ink, 'θ = ' + fmt(th, 0) + '°');
    } else if (!breaks) {
      arrow(ctx, CX - R, yc, CX - R - alen(half), yc, fc, 4); lab.add('F_ST', CX - R - alen(half), yc, -1, 0, fc, 20, 22);
      arrow(ctx, CX + R, yc, CX + R + alen(half), yc, fc, 4); lab.add('F_ST', CX + R + alen(half), yc, 1, 0, fc, 20, 22);
    }
    if (w > 0) { const wl = Math.min(alen(w), YB - 30 - by - R); arrow(ctx, bx, by + (needle ? R : R * 0.6), bx, by + R + wl, fc, 5); lab.add('w = ' + sigz(w, 3) + ' mN', bx, by + R + wl, 0, 1, fc, 20, 22); }
    lab.flush();
    /* the free-body diagram the book draws beside each panel */
    const FX = 1160, FY = 300, fl = 100;                                    /* each pull is drawn 100 long, and the weight as their two upward parts, 200 sin θ */
    freeBody(ctx, FX, FY, breaks || w === 0 ? (w === 0 ? [{ ux: -1, uy: 0, len: fl, color: fc, name: 'F_ST' }, { ux: 1, uy: 0, len: fl, color: fc, name: 'F_ST' }] : [{ ux: 0, uy: 1, len: 150, color: fc, name: 'w' }])
      : [{ ux: -cosT, uy: -sinT, len: fl, color: fc, name: 'F_ST' }, { ux: cosT, uy: -sinT, len: fl, color: fc, name: 'F_ST' }, { ux: 0, uy: 1, len: Math.max(24, 2 * fl * sinT), color: fc, name: 'w' }], 'free-body diagram');
    const what = needle ? 'the needle' : 'the foot';
    topline(ctx, breaks ? 'A weight of ' + sigz(w, 3) + ' mN is more than the ' + sigz(hold, 3) + ' mN this surface can hold along ' + fmt(Ls.v, 0) + ' mm, so the surface breaks and ' + what + ' sinks.'
      : w === 0 ? 'With no weight on it the surface stays flat, and its two pulls are level and cancel.'
      : 'A weight of ' + sigz(w, 3) + ' mN on a contact line ' + fmt(Ls.v, 0) + ' mm long dents the surface until its pull rises at ' + fmt(th, 0) + '° and holds ' + what + ' up.');
    readout(d.readout, breaks
      ? `\\kwgt = ${sigz(w, 3)}\\ \\text{mN} > \\kgamma L = (${sigz(g, 3)}\\ \\text{N/m})(${sigz(L, 3)}\\ \\text{m}) = ${sigz(hold, 3)}\\ \\text{mN}`
      : `\\kwgt = \\kgamma L\\sin\\theta:\\quad ${sigz(w, 3)}\\times 10^{-3}\\ \\text{N} = (${sigz(g, 3)}\\ \\text{N/m})(${sigz(L, 3)}\\ \\text{m})\\sin\\theta,\\quad \\theta = ${fmt(th, 0)}^\\circ`,
      breaks ? 'The surface can pull no harder than γL, which it reaches when its two pulls are vertical, so a body heavier than that is not held up; it breaks through and sinks, as the needle placed point down does, since a point touches the water along a far shorter line.'
        : 'The two pulls act along the dented surface, so only their upward parts hold the weight, and the surface dents until those parts add up to w. The most it can carry is γL = ' + sigz(hold, 3) + ' mN, when the pulls are vertical; a heavier body breaks the surface.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.26: the sliding wire device, and Table 11.3 on one axis. The
   film pulls the wire inward along both of its surfaces; the force that
   holds the wire gives γ = F/(2l), and the value is read against the
   liquids of the table. Still: a measurement with no clock.
===================================================================== */
(function () {
  const d = sim('sim-slide-wire', 780);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 8, step: 0.01, value: 3.16, unit: 'mN', dec: 2, aria: 'the force that holds the wire in place' });
  const ls = ctl(d.controls, { label: 'l', cls: '', min: 5, max: 50, step: 0.1, value: 25, unit: 'mm', dec: 1, aria: 'the length of the sliding wire' });
  const labels = choice(d.controls, { label: 'Labels', options: [{ value: 'off', label: 'Off' }, { value: 'on', label: 'On' }], value: 'off', aria: 'the names of the liquids on the axis' });
  /* the frame, the axis and the force scale: 40 units per millinewton, fixed from the slider maximum; the axis runs 0 to 0.10 N/m */
  const FL = 260, FY = 280, WX = 580, KF = 40;
  const AX = { l: 200, r: 1300, t: 620, b: 690 }, GR = [0, 0.1];
  const onAxis = TABLE.filter((r) => r.g <= GR[1]), beyond = TABLE.filter((r) => r.g > GR[1]);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx, H } = begin(d.c);
    const fc = C('force'), gc = C('surface-tension');
    const Fv = Fs.v, l = ls.v, g = (Fv / 1000) / (2 * l / 1000);
    const hgt = 7 * l, FT = FY - hgt / 2, FB = FY + hgt / 2;
    /* the frame and the film, seen face on */
    shape(ctx, (c) => c.rect(FL, FT, WX - FL, hgt), alpha(PAL.ink, 0.1));
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 12; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(FL + 560, FT); ctx.lineTo(FL, FT); ctx.lineTo(FL, FB); ctx.lineTo(FL + 560, FB); ctx.stroke(); ctx.restore();
    line(ctx, WX, FT - 10, WX, FB + 10, PAL.ink, 9);
    text(ctx, 'the sliding wire', WX + 18, FT + 16, PAL.ink, { size: 19, bg: alpha(PAL.panel, 0.85) });
    if (hgt > 90) text(ctx, 'the film', (FL + WX) / 2 - 40, FT + hgt * 0.22, PAL.muted, { size: 18, align: 'center' });
    /* the film's pull on the wire, spread along its length, and the force that holds the wire */
    const n = Math.max(2, Math.round(hgt / 70));
    for (let i = 0; i < n; i++) { const y = FT + hgt * (i + 0.5) / n; arrow(ctx, WX - 12, y, WX - 12 - Math.min(70, 26 + g * 600), y, fc, 3); }
    if (Fv > 0) { arrow(ctx, WX + 12, (FT + FB) / 2, WX + 12 + Fv * KF, (FT + FB) / 2, fc, 5); text(ctx, 'F = ' + sigz(Fv, 3) + ' mN', WX + 12 + Fv * KF + 14, (FT + FB) / 2 - 22, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) }); }
    vbracket(ctx, FL - 60, FT, FB, PAL.ink, 'l = ' + fmt(l, 1) + ' mm', -1);
    /* the side view: two film surfaces between the frame wire and the sliding wire */
    const SY = FB + 44, SL = 260, SR = 580;
    dot(ctx, SL, SY, alpha(PAL.ink, 0.45), true, 8); dot(ctx, SR, SY, PAL.ink, true, 8);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(SL + 8, SY - 4); ctx.quadraticCurveTo((SL + SR) / 2, SY - 14, SR - 8, SY - 4); ctx.moveTo(SL + 8, SY + 4); ctx.quadraticCurveTo((SL + SR) / 2, SY + 14, SR - 8, SY + 4); ctx.stroke(); ctx.restore();
    text(ctx, 'side view: the two surfaces of the film', SR + 24, SY, PAL.muted, { size: 18 });
    /* Table 11.3 on one fixed axis of surface tension */
    const { X } = axes(ctx, AX, GR, [0, 1], { nx: 5, ny: 0, fx: (v) => fmt(v, 2), fy: () => '', xl: 'surface tension γ (N/m)', xc: gc });
    const near = TABLE.slice().sort((a, b) => Math.abs(a.g - g) - Math.abs(b.g - g))[0], match = Math.abs(near.g - g) <= 0.025 * near.g;
    hits = onAxis.map((r) => ({ x: X(r.g), y: AX.b - 20, r: 16, name: r.n + ', ' + sigz(r.g, 3) + ' N/m' }));
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92); lab.block(AX.l - 60, AX.b - 4, AX.r + 60, H);
    onAxis.forEach((r, i) => {
      const x = X(r.g), isMatch = match && r === near;
      line(ctx, x, AX.b - 36, x, AX.b, isMatch ? gc : PAL.ink, isMatch ? 4 : 2);
      dot(ctx, x, AX.b - 36, isMatch ? gc : PAL.ink, isMatch, isMatch ? 8 : 6);
      if (labels.value === 'on' || isMatch) lab.add(r.n, x, AX.b - 36, i % 2 ? 0.4 : -0.4, -1, isMatch ? gc : PAL.ink, 17, i % 2 ? 24 : 58);
    });
    text(ctx, beyond.map((r) => r.n + ' at ' + sigz(r.g, 3) + ' N/m').join(' and ') + ' lie beyond the axis', AX.l, AX.b + 58, PAL.muted, { size: 17 });
    const p = pinned(ctx, AX, X, (v) => AX.b, g, 0, gc, 'γ = ' + sigz(g, 3) + ' N/m');
    if (!p.out) { line(ctx, p.x, AX.t + 10, p.x, AX.b, gc, 3, [8, 8]); text(ctx, 'γ = ' + sigz(g, 3) + ' N/m', p.x, AX.t - 44, gc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) }); lab.block(p.x - 120, AX.t - 62, p.x + 120, AX.t - 26); }
    lab.flush();
    topline(ctx, Fv === 0 ? 'With no force on the wire there is no film pulling on it, and nothing is measured.'
      : 'A force of ' + sigz(Fv, 3) + ' mN holds a wire ' + fmt(l, 1) + ' mm long against two liquid surfaces, so the surface tension is ' + sigz(g, 3) + ' N/m' + (match ? ', which is ' + near.n + '’s.' : '.'));
    readout(d.readout, `\\kgamma = \\frac{\\kF}{L} = \\frac{\\kF}{2l} = \\frac{${sigz(Fv, 3)}\\times 10^{-3}\\ \\text{N}}{2(${sigz(l / 1000, 3)}\\ \\text{m})} = ${sigz(g, 3)}\\ \\text{N/m}`,
      'The wire is attached to two liquid surfaces, the front and the back of the film, so the length the force is spread along is 2l and not l. ' + (match ? 'The value matches ' + near.n + ' in Table 11.3.' : 'No liquid of Table 11.3 is within a few percent of this value; the nearest is ' + near.n + ' at ' + sigz(near.g, 3) + ' N/m.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.27: two balloons joined by a tube. The gauge pressure in each is
   4γ/r, so the smaller holds the higher pressure; open the valve and the air
   runs from the small one into the large one until the small one is empty.
   Moving: the emptying is a clock, one of the three the chapter allows.
===================================================================== */
(function () {
  const d = sim('sim-two-balloons', 660);
  const reset = () => cy.reset();
  const r1s = ctl(d.controls, { label: 'r_1', cls: '', min: 1, max: 8, step: 0.1, value: 6, unit: 'cm', dec: 1, onInput: reset, aria: 'the radius of the first balloon' });
  const r2s = ctl(d.controls, { label: 'r_2', cls: '', min: 1, max: 8, step: 0.1, value: 3, unit: 'cm', dec: 1, onInput: reset, aria: 'the radius of the second balloon' });
  const gs = ctl(d.controls, { label: '\\kgamma', cls: 'surface-tension', min: 0.01, max: 0.1, step: 0.0001, value: 0.037, unit: 'N/m', dec: 4, detents: GAMMA_TICKS, snap: true, onInput: reset, aria: 'the surface tension of the film' });
  /* one loop: the valve is closed for the first 0.8 s, the air crosses over the next 3.4 s, then the picture holds */
  const T0 = 0.8, T1 = 4.2;
  const cy = cycle(() => T1, 1.4);
  /* the tube, the balloon scale (16 units per centimetre, so that two 8 cm balloons merged still fit under the headline) and the pressure bars, capped at 20 Pa, half the pressure of the smallest balloon at the largest surface tension, so that the book's own balloons read as more than slivers */
  const TY = 460, X1 = 380, X2 = 1020, S = 16, PCAP = 20, BW = 260;
  const P = (g, r) => (r > 0 ? 4 * g / (r / 100) : Infinity);
  function balloon(ctx, x, r, name, p, ok) {
    if (r < 0.03) { line(ctx, x, TY, x, TY - 40, PAL.ink, 4); text(ctx, name + ' is empty', x, TY - 66, PAL.ink, { size: 19, align: 'center' }); return; }
    const R = r * S, cyy = TY - 40 - R;
    line(ctx, x, TY, x, cyy + R - 2, PAL.ink, 4);
    shape(ctx, (c) => c.arc(x, cyy, R, 0, TAU), alpha(PAL.ink, 0.06), PAL.ink, 3);
    text(ctx, name, x, cyy - R - 22, PAL.ink, { size: 19, align: 'center' });
    if (R > 50) text(ctx, 'r = ' + fmt(r, 1) + ' cm', x, cyy, PAL.ink, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), gc = C('surface-tension');
    const t = cy.now(), g = gs.v, ra = r1s.v, rb = r2s.v;
    const same = Math.abs(ra - rb) < 0.05, open = t >= T0;
    /* the small balloon empties into the large one with the total volume kept: its volume fraction falls from 1 to 0 along an eased ramp */
    const prog = same ? 0 : Math.min(1, Math.max(0, (t - T0) / (T1 - T0))), f = 1 - (1 - Math.cos(Math.PI * prog)) / 2;
    const smallFirst = ra <= rb, rs = smallFirst ? ra : rb, rl = smallFirst ? rb : ra;
    const V = ra ** 3 + rb ** 3, rsn = rs * Math.cbrt(f), rln = Math.cbrt(V - rsn ** 3);
    const r1 = smallFirst ? rsn : rln, r2 = smallFirst ? rln : rsn, p1 = P(g, r1), p2 = P(g, r2);
    /* the tube and the valve */
    line(ctx, X1, TY, X2, TY, PAL.ink, 4);
    const VX = (X1 + X2) / 2;
    dot(ctx, VX, TY, PAL.ink, false, 18);
    line(ctx, VX + (open ? -12 : 0), TY + (open ? 0 : -12), VX + (open ? 12 : 0), TY + (open ? 0 : 12), PAL.ink, 5);
    text(ctx, open ? 'valve open' : 'valve closed', VX, TY + 44, PAL.ink, { size: 19, align: 'center' });
    balloon(ctx, X1, r1, 'balloon 1', p1); balloon(ctx, X2, r2, 'balloon 2', p2);
    /* the air on its way: a dashed run along the tube toward the larger balloon while the small one empties */
    if (open && !same && prog < 1) {
      const dir = smallFirst ? 1 : -1, from = smallFirst ? X1 : X2;
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([14, 14]); ctx.lineDashOffset = -(t * 120) * dir; ctx.beginPath(); ctx.moveTo(X1 + 30, TY - 12); ctx.lineTo(X2 - 30, TY - 12); ctx.stroke(); ctx.restore();
      arrow(ctx, VX - dir * 90, TY - 12, VX - dir * 30, TY - 12, PAL.ink, 4);
      text(ctx, 'air', VX - dir * 60, TY - 40, PAL.ink, { size: 18, align: 'center' });
    }
    /* the two pressures as bars on one fixed scale */
    for (const [x, p, r, k] of [[X1, p1, r1, 1], [X2, p2, r2, 2]]) {
      const y = TY + 80, w = BW * Math.min(1, p / PCAP), lx = x - BW / 2;
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(lx, y, BW, 26); ctx.fillStyle = pc; if (r >= 0.03) ctx.fillRect(lx, y, w, 26); ctx.restore();
      text(ctx, r < 0.03 ? 'no balloon, no pressure' : (p > PCAP ? 'gauge pressure P_' + k + ' > ' + fmt(PCAP, 0) + ' Pa' : 'gauge pressure P_' + k + ' = ' + sigz(p, 3) + ' Pa'), x, y + 48, pc, { size: 20, weight: 600, align: 'center' });
      text(ctx, '0', lx, y - 14, PAL.muted, { size: 15, align: 'center' }); text(ctx, fmt(PCAP, 0) + ' Pa', lx + BW, y - 14, PAL.muted, { size: 15, align: 'center' });
    }
    const nm = smallFirst ? ['balloon 1', 'balloon 2'] : ['balloon 2', 'balloon 1'];
    topline(ctx, same ? 'The two balloons are the same size, so their pressures are equal, ' + sigz(p1, 3) + ' Pa each, and opening the valve moves no air at all.'
      : !open ? 'With the valve closed ' + nm[0] + ' holds ' + sigz(P(g, rs), 3) + ' Pa above the air outside and ' + nm[1] + ' ' + sigz(P(g, rl), 3) + ' Pa, so air will flow from the small one to the large one.'
      : prog < 1 ? 'The valve is open and air runs from ' + nm[0] + ' into ' + nm[1] + ': the small balloon shrinks, its pressure climbs, and the large one grows.'
      : nm[0][0].toUpperCase() + nm[0].slice(1) + ' has emptied into ' + nm[1] + ', which now has a radius of ' + fmt(rln, 2) + ' cm and holds ' + sigz(P(g, rln), 3) + ' Pa.');
    const one = r1 < 0.03 ? '\\kProne\\ \\text{undefined, balloon 1 empty}' : `\\kProne = \\frac{4\\kgamma}{r_1} = \\frac{4(${sigz(g, 3)}\\ \\text{N/m})}{${sigz(r1 / 100, 3)}\\ \\text{m}} = ${sigz(p1, 3)}\\ \\text{Pa}`;
    const two = r2 < 0.03 ? '\\kPrtwo\\ \\text{undefined, balloon 2 empty}' : `\\kPrtwo = \\frac{4\\kgamma}{r_2} = \\frac{4(${sigz(g, 3)}\\ \\text{N/m})}{${sigz(r2 / 100, 3)}\\ \\text{m}} = ${sigz(p2, 3)}\\ \\text{Pa}`;
    readout(d.readout, `${one},\\qquad ${two}`,
      'The pressure inside a balloon is inversely proportional to its radius, so the smaller balloon holds the greater pressure and air moves from it to the larger one, which is the opposite of what a balloon full of air seems to promise. As the small one shrinks its pressure rises further, so the flow does not stop until it is empty; the total volume of air is kept throughout.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 11.29: surface tension against surface area for three linings of
   an alveolus, with the sac drawn at the radius you choose and the pressure
   4γ/r inside it for each. Still: the graph and the sac answer the slider.
   The book prints no numbers on this graph, so the values are representative.
===================================================================== */
(function () {
  const d = sim('sim-surfactant', 640);
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 0.02, max: 0.1, step: 0.001, value: 0.05, unit: 'mm', dec: 3, aria: 'the radius of the alveolus' });
  /* the three linings: the surfactant's surface tension runs from 0.010 N/m at the smallest area to 0.050 N/m at the largest; the detergent stands at soapy water's 0.037 N/m and the tissue fluid at Table 11.3's 0.050 N/m */
  const AMIN = 4 * Math.PI * 0.02 ** 2, AMAX = 4 * Math.PI * 0.1 ** 2;
  const gSurf = (A) => 0.01 + 0.04 * (A - AMIN) / (AMAX - AMIN);
  const LININGS = [{ n: 'lung surfactant', g: gSurf }, { n: 'detergent', g: () => 0.037 }, { n: 'interstitial fluid', g: () => 0.05 }];
  /* fixed axes: surface tension 0 to 0.08 N/m across, area 0 to 0.14 mm² up; the pressure bars are capped at 10 kPa, the tissue fluid's pressure in the smallest sac */
  const BOX = { l: 130, t: 130, r: 700, b: 560 }, GR = [0, 0.08], AR = [0, 0.14], PCAP = 10000;
  const SX = 1090, SY = 250, SS = 1500;                                       /* the sac: 0.1 mm draws as a 150-unit radius */
  const CAT = [0, 1, 2];                                                     /* three categorical hues, the palette itself keeping clear of the bound type hues */
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), gc = C('surface-tension');
    const r = rs.v, A = 4 * Math.PI * r * r;
    const { X, Y } = axes(ctx, BOX, GR, AR, { nx: 4, ny: 7, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 2), xl: 'surface tension γ (N/m)', xc: gc, yl: 'surface area of the alveolus (mm²)' });
    /* the three linings, told apart by the categorical palette and named in a legend */
    LININGS.forEach((L, i) => { const c = F.cat(CAT[i]); ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(X(L.g(AMIN)), Y(AMIN)); ctx.lineTo(X(L.g(AMAX)), Y(AMAX)); ctx.stroke(); ctx.restore(); });
    LININGS.forEach((L, i) => { const c = F.cat(CAT[i]), y = BOX.t + 22 + i * 30; line(ctx, BOX.l + 24, y, BOX.l + 64, y, c, 4); text(ctx, L.n, BOX.l + 76, y, c, { size: 18, weight: 600 }); });
    /* the chosen area, and the surface tension of each lining at it */
    line(ctx, BOX.l, Y(A), BOX.r, Y(A), alpha(PAL.ink, 0.4), 2, [8, 8]);
    text(ctx, 'A = 4πr² = ' + sigz(A, 3) + ' mm²', BOX.r - 10, Y(A) - 18, PAL.ink, { size: 18, align: 'right', bg: alpha(PAL.panel, 0.85) });
    const vals = LININGS.map((L, i) => { const g = L.g(A), p = 4 * g / (r / 1000); dot(ctx, X(g), Y(A), F.cat(CAT[i]), true, 8); return { n: L.n, g, p, c: F.cat(CAT[i]) }; });
    /* the sac at the chosen radius, and the pressure inside it for each lining */
    const R = r * SS;
    shape(ctx, (c) => c.arc(SX, SY, R, 0, TAU), alpha(PAL.ink, 0.06), PAL.ink, 3);
    text(ctx, 'an alveolus, r = ' + fmt(r, 3) + ' mm', SX, SY + R + 28, PAL.ink, { size: 19, align: 'center' });
    hbracket(ctx, SX - R, SX, SY - R - 30, PAL.ink, 'r');
    text(ctx, 'gauge pressure inside, P = 4γ/r', SX + 20, 446, PAL.muted, { size: 18, align: 'center' });
    vals.forEach((v, i) => {
      const y = 472 + i * 48, w = 260 * Math.min(1, v.p / PCAP), lx = SX - 110;
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(lx, y, 260, 22); ctx.fillStyle = pc; ctx.fillRect(lx, y, w, 22); ctx.restore();
      text(ctx, v.n, lx - 12, y + 11, v.c, { size: 17, weight: 600, align: 'right' });
      text(ctx, sigz(v.p / 1000, 3) + ' kPa', lx + 260 + 12, y + 11, pc, { size: 18, weight: 600 });
    });
    text(ctx, '0', SX - 110, 464, PAL.muted, { size: 14, align: 'center' }); text(ctx, '10 kPa', SX + 150, 464, PAL.muted, { size: 14, align: 'center' });
    const [s, dg, tf] = vals;
    topline(ctx, 'At a radius of ' + fmt(r, 3) + ' mm the surfactant’s surface tension is ' + sigz(s.g, 3) + ' N/m and the pressure inside the sac is ' + sigz(s.p / 1000, 3) + ' kPa, against ' + sigz(dg.p / 1000, 3) + ' kPa for a detergent and ' + sigz(tf.p / 1000, 3) + ' kPa for tissue fluid.');
    readout(d.readout, `\\kPr = \\frac{4\\kgamma}{r} = \\frac{4(${sigz(s.g, 3)}\\ \\text{N/m})}{${sciTex(r / 1000, 3)}\\ \\text{m}} = ${sigz(s.p / 1000, 3)}\\ \\text{kPa}\\ \\text{for the surfactant}`,
      'A lining whose surface tension does not change makes the pressure climb as 1/r when the sac shrinks, so a small alveolus would empty into a large one; the surfactant’s surface tension falls with the area, and the pressure inside stays nearly level from the largest sac to the smallest. The values here are representative, since the book prints none on this graph.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.30: a drop on a solid at the contact angle you choose. The drop
   keeps its volume and takes every shape from a thin film to a bead; the
   tangent and the angle are drawn as the book draws them. Still: a drop at
   rest has no clock. Everything here is ink: the angle is untyped.
===================================================================== */
(function () {
  const d = sim('sim-contact-angle', 560);
  const ts = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 180, step: 1, value: 107, unit: '°', dec: 0, detents: THETA_DETENTS, snap: true, aria: 'the contact angle' });
  const YS = 420, CX = 620, A0 = 150 * 150 * Math.PI / 2;                    /* the drop's area: a half-disc of radius 150 at 90°; below 10° and above 172° the drawing holds its shape, since a thinner film would run off the canvas */
  function draw() {
    const { ctx } = begin(d.c);
    const th = ts.v, td = Math.max(10, Math.min(172, th)) * RAD, sn = Math.sin(td), cs = Math.cos(td);
    const R = Math.sqrt(A0 / (td - sn * cs)), a = R * sn, yc = YS + R * cs;
    /* the solid and the drop */
    fixed(ctx, 60, YS, 1280, 40);
    text(ctx, th <= 20 ? 'the solid, which the liquid wets' : th >= 160 ? 'the solid, which the liquid barely touches' : 'the solid', 80, YS + 66, PAL.muted, { size: 18 });
    shape(ctx, (c) => c.arc(CX, yc, R, td - Math.PI / 2, 1.5 * Math.PI - td, true), alpha(PAL.ink, 0.12), PAL.ink, 3);
    line(ctx, CX - a, YS, CX + a, YS, PAL.ink, 3);
    text(ctx, 'the liquid', CX, Math.max(YS - 24, yc - R + Math.min(R, 40)) - (th < 30 ? 44 : 0), PAL.ink, { size: 19, align: 'center' });
    /* the tangent to the liquid surface at the contact point, and the angle between it and the solid, measured through the liquid */
    const px = CX + a, ux = -cs, uy = -sn;
    line(ctx, px - 320 * ux, YS - 320 * uy, px + 320 * ux, YS + 320 * uy, PAL.ink, 2, [10, 10]);
    const rad = Math.min(260, Math.max(90, 2 * R + 20));
    angleArc(ctx, px, YS, Math.PI, th, rad, PAL.ink, 'θ = ' + fmt(th, 0) + '°', 22);
    dot(ctx, px, YS, PAL.ink, true, 6);
    text(ctx, 'tangent to the liquid surface', px + 60 * ux + 16, YS + 60 * uy - 28, PAL.ink, { size: 17, bg: alpha(PAL.panel, 0.85), align: ux < 0 ? 'right' : 'left' });
    const pair = PAIRS[th];
    topline(ctx, th < 90 ? 'At a contact angle of ' + fmt(th, 0) + '° the adhesive forces are the stronger, and the liquid spreads out and flattens on the solid.'
      : th === 90 ? 'At a contact angle of 90° the cohesive and adhesive forces are evenly matched, and the drop stands as a half-dome.'
      : 'At a contact angle of ' + fmt(th, 0) + '° the cohesive forces are the stronger, and the liquid draws itself up into a bead.');
    readout(d.readout, th < 90 ? `\\theta = ${fmt(th, 0)}^\\circ < 90^\\circ` : th === 90 ? `\\theta = 90^\\circ` : `\\theta = ${fmt(th, 0)}^\\circ > 90^\\circ`,
      (pair ? 'Table 11.4 gives this angle for ' + pair + '. ' : '') + 'The larger the angle, the larger the ratio of cohesive to adhesive forces; the drop keeps the same volume at every angle here, so what changes is only how far the adhesive forces can flatten it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.31 + 11.32: a capillary tube in a container of liquid. The
   liquid, the contact angle and the radius are set; the column stands at
   h = 2γ cos θ / ρgr, raised or suppressed, with the meniscus curved as the
   angle says, the pulls of the surface at its edge, and the graph of h
   against r beside it. Still: the column stands at its equilibrium height.
===================================================================== */
(function () {
  const d = sim('sim-capillary', 740);
  const LIQ = { water: { n: 'water', g: 0.0728, rho: 1000 }, alcohol: { n: 'ethyl alcohol', g: 0.0223, rho: 790 }, glycerin: { n: 'glycerin', g: 0.0631, rho: 1260 }, mercury: { n: 'mercury', g: 0.465, rho: 13600 }, olive: { n: 'olive oil', g: 0.032, rho: 920 } };
  const liq = choice(d.controls, { label: '\\text{the liquid}', options: Object.entries(LIQ).map(([v, L]) => ({ value: v, label: L.n })), value: 'water', aria: 'the liquid in the container' });
  const ts = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 180, step: 1, value: 0, unit: '°', dec: 0, detents: THETA_TICKS, snap: true, aria: 'the contact angle between the liquid and the glass' });
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 0.1, max: 9, step: 0.01, value: 0.5, unit: 'mm', dec: 2, aria: 'the radius of the tube' });
  /* the scene: the level in the container at Y0, 20 units per centimetre of height, the tube from 16 cm above to 8 cm below; the graph: r 0 to 9 mm, h −8 to 16 cm, fixed */
  const Y0 = 480, SC = 20, HMAX = 16, HMIN = -8, TX = 400, BL = 160, BR = 640, BB = 680;
  const BOX = { l: 860, t: 150, r: 1340, b: 630 }, RR = [0, 9], HR = [HMIN, HMAX];
  const hOf = (L, th, r) => 2 * L.g * Math.cos(th * RAD) / (L.rho * G * (r / 1000));   /* metres */
  function draw() {
    const { ctx, H } = begin(d.c);
    const hc = C('position'), gc = C('surface-tension'), dc = C('density'), fc = C('force');
    const L = LIQ[liq.value], th = ts.v, r = rs.v, h = zero(hOf(L, th, r), 5e-6), hcm = h * 100;
    const fill = alpha(PAL.ink, L.n === 'mercury' ? 0.35 : 0.1);
    const bw = 14 + r * 6, wall = 5, TT = Y0 - (HMAX + 3) * SC;              /* the bore half-width follows the radius; the tube top stands above the tallest column the frame shows */
    const ytop = Y0 - Math.max(HMIN, Math.min(HMAX, hcm)) * SC, out = hcm > HMAX || hcm < HMIN;
    /* the container and its liquid */
    shape(ctx, (c) => c.rect(BL, Y0, BR - BL, BB - Y0), fill);
    glass(ctx, BL, Y0 - 120, BL, BB); glass(ctx, BR, Y0 - 120, BR, BB); glass(ctx, BL, BB, BR, BB);
    line(ctx, BL, Y0, TX - bw - wall, Y0, PAL.ink, 2); line(ctx, TX + bw + wall, Y0, BR, Y0, PAL.ink, 2);
    text(ctx, L.n, BL + 18, BB - 26, PAL.ink, { size: 19 });
    /* the tube, and the column in it with its meniscus */
    const dep = Math.max(-bw, Math.min(bw, bw * (1 - Math.sin(th * RAD)) / Math.max(0.05, Math.abs(Math.cos(th * RAD))) * Math.sign(Math.cos(th * RAD) || 1)));
    shape(ctx, (c) => { c.moveTo(TX - bw, BB - 30); c.lineTo(TX - bw, ytop); c.quadraticCurveTo(TX, ytop + 2 * dep, TX + bw, ytop); c.lineTo(TX + bw, BB - 30); c.closePath(); }, fill);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(TX - bw, ytop); ctx.quadraticCurveTo(TX, ytop + 2 * dep, TX + bw, ytop); ctx.stroke(); ctx.restore();
    glass(ctx, TX - bw - wall / 2, TT, TX - bw - wall / 2, BB - 30, wall); glass(ctx, TX + bw + wall / 2, TT, TX + bw + wall / 2, BB - 30, wall);
    text(ctx, 'glass tube, r = ' + fmt(r, 2) + ' mm', TX + bw + 24, TT + 16, PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.85) });
    /* the pulls of the surface at the edge of the meniscus, and their net */
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    const cs = Math.cos(th * RAD), sn = Math.sin(th * RAD), len = 50 + 180 * L.g;
    if (Math.abs(cs) > 0.02) {
      for (const s of [-1, 1]) { const x0 = TX + s * bw, ux = s * sn, uy = -cs; arrow(ctx, x0, ytop, x0 + ux * len, ytop + uy * len, fc, 4); lab.add('F_ST', x0 + ux * len, ytop + uy * len, s * 0.8, uy * 0.6, fc, 19, 22); }
      const nl = Math.min(150, len * 1.3 * Math.abs(cs));
      arrow(ctx, TX, ytop + dep, TX, ytop + dep - Math.sign(cs) * nl, fc, 5); lab.add('net F_ST', TX, ytop + dep - Math.sign(cs) * nl, 0.7, -Math.sign(cs) * 0.7, fc, 19, 22);
    }
    /* the height, bracketed from the level in the container to the column */
    if (Math.abs(hcm) > 0.15) vbracket(ctx, TX + bw + 60, Math.min(Y0, ytop), Math.max(Y0, ytop), hc, 'h = ' + (out ? sigz(hcm, 3) + ' cm, beyond the frame' : sigz(hcm, 3) + ' cm'), 1);
    if (out) dot(ctx, TX, ytop + dep, hc, false, 9);
    lab.flush();
    /* the graph of h against r for this liquid and angle */
    const { X, Y } = axes(ctx, BOX, RR, HR, { nx: 3, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => minus(fmt(v, 0)), xl: 'tube radius r (mm)', yl: 'height h (cm)', yc: hc });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (rr) => hOf(L, th, rr) * 100, 0.1, 9, X, Y, hc, 4, 240);
    ctx.restore();
    pinned(ctx, BOX, X, Y, r, hcm, hc, 'h = ' + sigz(hcm, 3) + ' cm');
    text(ctx, L.n + ', θ = ' + fmt(th, 0) + '°', BOX.r - 10, BOX.t + 22, PAL.ink, { size: 18, align: 'right', bg: alpha(PAL.panel, 0.85) });
    const rword = fmt(r, 2) + ' mm', tword = fmt(th, 0) + '°';
    topline(ctx, Math.abs(cs) <= 0.02 ? L.n[0].toUpperCase() + L.n.slice(1) + ' in a glass tube ' + rword + ' in radius, with a contact angle of 90°, is neither raised nor suppressed.'
      : L.n[0].toUpperCase() + L.n.slice(1) + ' in a glass tube ' + rword + ' in radius, with a contact angle of ' + tword + ', is ' + (h > 0 ? 'raised ' : 'suppressed ') + sigz(Math.abs(hcm), 3) + ' cm' + (out ? ', which is beyond the frame drawn here.' : '.'));
    readout(d.readout, `\\kh = \\frac{2\\kgamma\\cos\\theta}{\\krho\\kg r} = \\frac{2(${sigz(L.g, 3)}\\ \\text{N/m})\\cos ${fmt(th, 0)}^\\circ}{(${L.rho}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2)(${sciTex(r / 1000, 3)}\\ \\text{m})} = ${minus(sigz(hcm, 3))}\\ \\text{cm}`,
      'The height is positive, and the liquid raised, when the contact angle is less than 90°, and negative, the liquid suppressed, when it is more, as it is for mercury in glass. The column is held up by the pull of the surface round the rim of the tube, and it climbs until the weight of the column matches that pull, which is why a narrower tube and a lighter liquid climb higher.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.33: the piston that stretches a liquid. The force on the piston
   puts the water under a negative pressure P = −F/A; past 25 atm below zero
   the cohesive forces give way and the water parts. Still: a held piston
   has no clock. The cylinder is drawn from a locked view (rule 28.2).
===================================================================== */
(function () {
  const d = sim('sim-negative-pressure', 680);
  const Fs = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 300, step: 1, value: 100, unit: 'N', dec: 0, aria: 'the force pulling the piston up' });
  const As = ctl(d.controls, { label: 'A', cls: '', min: 0.5, max: 4, step: 0.05, value: 1, unit: 'cm²', dec: 2, aria: 'the area of the piston' });
  const LIMIT = 25.0;                                                        /* atmospheres below zero, the value the book states for this device */
  const V = view({ yaw: 0.0, pitch: 0.42, dist: 2600, cx: 560, cy: 400 });
  const ring = (R, y, n = 48) => Array.from({ length: n + 1 }, (_, i) => V.P([R * Math.cos(TAU * i / n), y, R * Math.sin(TAU * i / n)]));
  const half = (pts, front) => pts.filter((_, i) => (front ? i <= (pts.length - 1) / 2 : i >= (pts.length - 1) / 2));   /* the ring runs from +x through +z (the front) to −x and round the back */
  function path(ctx, pts, close) { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); if (close) ctx.closePath(); }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), fc = C('force');
    const Fv = Fs.v, A = As.v, P = -Fv / (A * 1e-4), atm = P / ATM, parts = -atm > LIMIT;
    const R = 110 * Math.sqrt(A), YB = -170, YT = 230, YL = parts ? 110 : 60;                /* the cylinder's radius follows the area; the piston sits at YL */
    const front = (y) => half(ring(R, y), true), back = (y) => half(ring(R, y), false);
    /* the liquid: from the bottom rim up to the piston, or, parted, a lower body and a layer clinging to the piston */
    const body = (yLow, yHigh, wavyTop) => {
      const lo = front(yLow), hi = wavyTop ? ring(R, yHigh).map((p, i) => [p[0], p[1] + 6 * Math.sin(i * 0.9)]) : ring(R, yHigh);
      const hiF = half(hi, true);
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); path(ctx, [...lo, ...hiF.slice().reverse()], true); ctx.fill();
      ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; path(ctx, hi, false); ctx.stroke(); ctx.restore();
    };
    /* the glass: the back rim of the bottom dashed, the front solid, the two sides */
    const bot = ring(R, YB);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]); path(ctx, half(bot, false), false); ctx.stroke(); ctx.restore();
    if (parts) { body(YB, -10, true); body(YL - 46, YL, false); const gapC = V.P([0, 30, 0]); text(ctx, 'the water has parted', gapC[0], gapC[1], PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) }); }
    else body(YB, YL, false);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2.5; path(ctx, half(bot, true), false); ctx.stroke(); ctx.restore();
    const lt = V.P([-R, YT, 0]), lb = V.P([-R, YB, 0]), rt = V.P([R, YT, 0]), rb = V.P([R, YB, 0]);
    glass(ctx, lt[0], lt[1], lb[0], lb[1], 4); glass(ctx, rt[0], rt[1], rb[0], rb[1], 4);
    /* the piston, a disc with a rod, and the pull on it */
    const pT = ring(R, YL + 28), pB = ring(R, YL);
    ctx.save(); ctx.fillStyle = PAL.soft; path(ctx, [...half(pB, true), ...half(pT, true).slice().reverse()], true); ctx.fill(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.fill();
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.stroke(); ctx.fillStyle = PAL.soft; path(ctx, pT, true); ctx.fill(); ctx.stroke(); ctx.restore();
    const rodB = V.P([0, YL + 28, 0]), rodT = V.P([0, YL + 90, 0]);
    line(ctx, rodB[0], rodB[1], rodT[0], rodT[1], PAL.ink, 14);
    text(ctx, 'piston', rodB[0] + 22, rodB[1] - 8, PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.85) });
    if (Fv > 0) { const al = 24 + Fv * 0.3; arrow(ctx, rodT[0], rodT[1], rodT[0], rodT[1] - al, fc, 5); text(ctx, 'F = ' + fmt(Fv, 0) + ' N', rodT[0] + 22, rodT[1] - al + 10, fc, { size: 21, weight: 600 }); }
    const wl = V.P([0, YB + 40, 0]);
    text(ctx, 'water', wl[0], wl[1], PAL.ink, { size: 18, align: 'center' });
    const aL = V.P([-R, YL + 14, 0]);
    text(ctx, 'A = ' + fmt(A, 2) + ' cm²', aL[0] - 18, aL[1], PAL.ink, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    const pL = V.P([0, parts ? -100 : (YB + YL) / 2, 0]);
    if (Fv > 0) text(ctx, 'P = −F/A = ' + minus(sigz(atm, 3)) + ' atm', pL[0], pL[1], pc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the height of water a pull this size could hold up, stated beside the cylinder */
    const hw = -P / (1000 * G);
    topline(ctx, Fv === 0 ? 'With no pull on the piston the water is under no tension, and its pressure is simply the pressure of the air above the piston.'
      : parts ? 'A pull of ' + fmt(Fv, 0) + ' N on a piston of ' + fmt(A, 2) + ' cm² would put the water ' + sigz(-atm, 3) + ' atm below zero, which is more than its cohesive forces can bear, and it separates.'
      : 'A pull of ' + fmt(Fv, 0) + ' N on a piston of ' + fmt(A, 2) + ' cm² puts the water under a negative pressure of ' + sigz(-atm, 3) + ' atm, and the water holds together.');
    readout(d.readout, `\\kPr = -\\frac{\\kF}{A} = -\\frac{${fmt(Fv, 0)}\\ \\text{N}}{${sciTex(A * 1e-4, 3)}\\ \\text{m}^2} = ${minus(sciTex(P, 3))}\\ \\text{Pa} = ${minus(sigz(atm, 3))}\\ \\text{atm}`,
      parts ? 'The device reaches about 25 atm below zero before the water separates, which is the limit the book gives for it. Up to that limit the water is under tension, held together by the cohesive forces between its molecules.'
        : 'A fluid under tension has a negative absolute pressure, and a negative pressure of this size could hold up a column of water h = |P|/ρg = ' + sigz(hw, 3) + ' m tall, so a pull of this kind, made by evaporation in the leaves, is what can bring sap to the top of a tall tree. The device parts the water at about 25 atm below zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
