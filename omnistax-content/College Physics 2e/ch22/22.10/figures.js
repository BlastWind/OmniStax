/* Figures for section 22.10 Magnetic Force between Two Parallel Conductors.
   The page binds magnetic-field, force, current and position, the four types
   ch22/COLOR.md gives it: the field circling a wire and the arrow it arrives at
   the next wire with wear the field hue, the current along a wire and the dot
   and cross that stand for a current toward the reader and away from her wear
   the current hue, every force arrow wears the force hue, a magnetic force
   being a force and nothing here being given a hue for being magnetic, and the
   separation of two conductors, on its slider and in the bracket that measures
   it, wears the position hue. The diameter of an arc column, the number of
   turns on a coil, the length of wire that faces its neighbor and the mass on a
   balance pan are untyped and in ink, and no body is tinted: a wire is ink, a
   balance beam is ink, and the boundary of the arc column is a faint ink circle.

   All three figures answer their controls and register no cycle (rule 14): two
   wires carrying steady currents pull on each other, an arc of a given current
   squeezes itself by a given amount, and a balance at balance is level. None of
   the three has a clock in it, so none carries a transport.

   A field line that circles a current is drawn with one arrowhead on it, which
   is the one place this chapter departs from ch22/COLOR.md's closing sentence
   about closed field lines. A magnet's lines take their sense from the N and S
   on its poles; a current has no poles, and the sense of the circle is the whole
   of RHR-2 and therefore the whole of this section's argument. With colour off a
   field line is still told from a force arrow, being a closed circle where the
   force arrow is a straight segment.

   The force arrows of Figure 22.40 and of the current balance carry their
   direction in their heads and their size in their labels, in the readout and,
   softly, in the thickness of their stroke: the currents, the turns and the
   separation between them can change these forces by four orders of magnitude,
   and no fixed length scale could draw both ends of that. The pinch figure is
   the one place where an arrow's length is the size of a force, because its two
   sliders together can change that force by only a factor of three from the
   default and one fixed scale holds at every setting. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.10'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, note, hbracket, vbracket, axes, curve, pinned, hover, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* mu_0 / 2 pi, exactly 2 x 10^-7 T.m/A, the constant every figure of the page uses */
const K = 2e-7;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
function sciParts(v, sig) {
  if (!v) return { m: '0', e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (Math.abs(+m.toFixed(sig - 1)) >= 10) { m /= 10; e += 1; }
  return { m: m.toFixed(sig - 1), e };
}
const sci = (v, sig = 3) => { const { m, e } = sciParts(v, sig); return e === 0 ? m : m + ' × 10' + sup(e); };
const sciTex = (v, sig = 3) => { const { m, e } = sciParts(v, sig); return e === 0 ? m : m + '\\times 10^{' + e + '}'; };
const big = (v) => Math.abs(v) >= 1e5 || (v !== 0 && Math.abs(v) < 0.01);
/* three significant figures, written out where that is readable and in scientific
   notation where it is not; this page's forces run from micronewtons to newtons */
const num = (v) => (!v ? '0' : big(v) ? sci(v) : Number(v).toPrecision(3));
const numTex = (v) => (!v ? '0' : big(v) ? sciTex(v) : Number(v).toPrecision(3));

/* a current seen end-on: a ring with a dot in it for a current toward the reader
   and a cross in it for a current away from her (ch22/COLOR.md; the mark wears the
   current hue, and no sign anywhere on this page is told by a second colour) */
function currentMark(ctx, x, y, out, color, R) {
  dot(ctx, x, y, PAL.panel, true, R); dot(ctx, x, y, color, false, R);
  if (out) dot(ctx, x, y, color, true, Math.max(4, R * 0.34));
  else { const k = R * 0.62; line(ctx, x - k, y - k, x + k, y + k, color, 3.5); line(ctx, x - k, y + k, x + k, y - k, color, 3.5); }
}
/* a force arrow's stroke, between 3.5 and 8 units, thickening with the force it
   carries against the force the figure's own defaults make */
const fw = (val, ref) => Math.max(3.5, Math.min(8, 3.5 + 4.5 * (val / ref)));

/* =====================================================================
   FIGURE 22.40: two long parallel wires, the field the first makes at the
   second, and the equal and opposite forces they put on each other. Still:
   the arrangement has no clock in it. The defaults are the section's own
   first problem, the hot and neutral lines of a light-rail train, so the
   figure reads 0.171 N/m on load, which over the 50.0 m that problem asks
   about is the 8.53 N the book's key gives.
===================================================================== */
(function () {
  const d = sim('sim-parallel-wires', 900);
  const i1S = ctl(d.controls, { label: '\\kIcurone', cls: 'current', min: 0, max: 1000, step: 10, value: 800, unit: 'A', dec: 0, aria: 'the current in wire 1' });
  const i2S = ctl(d.controls, { label: '\\kIcurtwo', cls: 'current', min: 0, max: 1000, step: 10, value: 800, unit: 'A', dec: 0, aria: 'the current in wire 2' });
  const rS = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.1, max: 2, step: 0.05, value: 0.75, unit: 'm', dec: 2, aria: 'the distance between the two wires' });
  const dirC = choice(d.controls, { label: '\\text{wire 2 carries its current}', options: [{ value: 'same', label: 'the same way' }, { value: 'opp', label: 'the opposite way' }], value: 'same', aria: 'which way the current in wire 2 runs' });
  const viewC = choice(d.controls, { label: '\\text{the view}', options: [{ value: 'persp', label: 'in perspective' }, { value: 'end', label: 'from the end' }], value: 'persp', aria: 'whether the wires are seen in perspective or end-on' });
  /* The book's own viewpoint for the perspective state: from the right and well
     above, so that the horizontal field circles read as open ellipses and the two
     vertical wires stay apart on the canvas at every separation. Never changed and
     never turned by the reader (rule 28.2). */
  const V = view({ yaw: 0.55, pitch: 0.34, dist: 2600, cx: 640, cy: 310 });
  /* 170 canvas units to the meter of separation in perspective and 300 end-on, both
     fixed: the widest separation the slider reaches, 2.00 m, is 340 and 600 units,
     and the scene is clipped to its own band so that a field circle wider than the
     canvas is cut by the frame rather than allowed to rescale the drawing. The graph
     runs 0 to 1.00 N/m over 0 to 2.00 m and never rescales: the default state,
     0.171 N/m, stands a sixth of the way up it, and the greatest the sliders can
     make together, 2.00 N/m at 1000 A in each wire 0.100 m apart, is carried at the
     top edge by pinned() with its value written beside it. */
  const SR = 195, SE = 250, SCENE = 575, WY = 150;
  const BOX = { l: 200, r: 1260, t: 610, b: 826 };
  const FREF = K * 800 * 800 / 0.75, BREF = K * 800 / 0.75;
  let hits = [];

  const line3 = (ctx, a, b, color, w, dash) => { const A = V.P(a), B = V.P(b); line(ctx, A[0], A[1], B[0], B[1], color, w, dash); };
  const arr3 = (ctx, a, b, color, w) => { const A = V.P(a), B = V.P(b); arrow(ctx, A[0], A[1], B[0], B[1], color, w); };
  /* a field line of wire 1: the horizontal circle about it at the height y, drawn as
     the ellipse the locked view makes of it, with one arrowhead at the point nearest
     the reader, where the field runs to the right for a current running up */
  function circle3(ctx, cx0, y, rho, color, w, head) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    for (let i = 0; i <= 96; i++) { const a = (2 * Math.PI * i) / 96, p = V.P([cx0 + rho * Math.cos(a), y, rho * Math.sin(a)]); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
    ctx.closePath(); ctx.stroke(); ctx.restore();
    if (head) arr3(ctx, [cx0 - 30, y, rho], [cx0 + 30, y, rho], color, w + 1.5);
  }
  const widthOf = (B) => Math.max(1.6, Math.min(7, 1.6 + 3.4 * (B / BREF)));

  function draw() {
    const { ctx } = begin(d.c);
    const I1 = i1S.v, I2 = i2S.v, r = rS.v, same = dirC.value === 'same', persp = viewC.value === 'persp';
    const B1 = K * I1 / r, B2 = K * I2 / r, FL = K * I1 * I2 / r;
    const cB = C('magnetic-field'), cI = C('current'), cF = C('force'), cR = C('position');
    const pull = same ? 1 : -1;               /* +1 draws each wire pulled toward the other */
    const W = fw(FL, FREF), lw = widthOf(B1);
    const pts = [];

    ctx.save(); ctx.beginPath(); ctx.rect(0, 74, 1400, SCENE - 74); ctx.clip();
    if (persp) {
      const D = r * SR, x1 = -D / 2, x2 = D / 2, up2 = same ? 1 : -1;
      /* the field of wire 1: a circle through wire 2 at each of three heights, and
         two more radii at the middle height so that the falling off with distance
         shows in the drawing as well as on the curve below */
      if (I1 > 0.5) {
        [-118, 0, 118].forEach((y) => circle3(ctx, x1, y, D, cB, lw, true));
        [0.55, 1.45].forEach((k) => { if (D * k < 560) circle3(ctx, x1, 0, D * k, alpha(cB, 0.65), Math.max(1.4, widthOf(B1 / k) * 0.8), false); });
      }
      /* the two wires, ink, and the current along each of them */
      [x1, x2].forEach((x) => line3(ctx, [x, -WY, 0], [x, WY, 0], PAL.ink, 7));
      if (I1 > 0.5) arr3(ctx, [x1, -46, 0], [x1, 130, 0], cI, 6);
      if (I2 > 0.5) arr3(ctx, [x2, -up2 * 74, 0], [x2, up2 * 74, 0], cI, 6);
      /* the field wire 1 makes where wire 2 stands is at right angles to wire 2 and
         runs away from the reader, which is where RHR-1 takes over from RHR-2 */
      if (B1 > 1e-12) arr3(ctx, [x2, 0, 0], [x2, 0, -76], cB, 5);
      /* the pair of forces, equal in size and opposite in direction (Newton's third law) */
      if (FL > 1e-12) {
        arr3(ctx, [x2, 58, 0], [x2 - pull * 118, 58, 0], cF, W);
        arr3(ctx, [x1, -58, 0], [x1 + pull * 118, -58, 0], cF, W);
      }
      const t1 = V.P([x1, WY, 0]), t2 = V.P([x2, WY, 0]);
      text(ctx, '1', t1[0], t1[1] - 28, PAL.ink, { size: 26, weight: 700, align: 'center' });
      text(ctx, '2', t2[0], t2[1] - 28, PAL.ink, { size: 26, weight: 700, align: 'center' });
      const b1 = V.P([x1, -WY, 0]), b2 = V.P([x2, -WY, 0]);
      hbracket(ctx, b1[0], b2[0], Math.max(b1[1], b2[1]) + 42, cR, 'r = ' + fmt(r, 2) + ' m', { side: 'below', H: SCENE });
      ctx.restore();
      /* the names: six of them, none on a thing that moves far (rule 26.7) */
      const pI1 = V.P([x1, 130, 0]), pI2 = V.P([x2, up2 * 74, 0]), pB = V.P([x2, 0, -76]);
      const pF2 = V.P([x2 - pull * 118, 58, 0]), pF1 = V.P([x1 + pull * 118, -58, 0]);
      label(ctx, 'I₁ = ' + fmt(I1, 0) + ' A', pI1[0], pI1[1], { side: 'left', size: 21, color: cI, H: SCENE });
      label(ctx, 'I₂ = ' + fmt(I2, 0) + ' A', pI2[0], pI2[1], { side: 'right', size: 21, color: cI, H: SCENE });
      if (B1 > 1e-12) label(ctx, 'B₁ = ' + num(B1) + ' T', pB[0], pB[1], { side: 'right', size: 21, color: cB, H: SCENE });
      if (FL > 1e-12) {
        label(ctx, 'F₂/l = ' + num(FL) + ' N/m', pF2[0], pF2[1], { side: 'above', size: 21, color: cF, H: SCENE });
        label(ctx, 'F₁/l = ' + num(FL) + ' N/m', pF1[0], pF1[1], { side: 'below', size: 21, color: cF, H: SCENE });
      }
      pts.push({ p: V.P([x1, 0, 0]), r: 56, name: 'wire 1, carrying ' + fmt(I1, 0) + ' A' }, { p: V.P([x2, 0, 0]), r: 56, name: 'wire 2, carrying ' + fmt(I2, 0) + ' A' });
    } else {
      /* the book's second panel: both wires seen end-on, with one field line for each */
      const D = r * SE, y0 = 300, xa = 700 - D / 2, xb = 700 + D / 2, R = 11;
      /* each field line closes on itself, and the one arrowhead it carries, at the top
         of the circle, gives the sense RHR-2 asks for: counterclockwise about a
         current that comes toward the reader, so the field runs to the left up there */
      const ring = (cx0, out, w) => {
        ctx.save(); ctx.strokeStyle = cB; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(cx0, y0, D, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
        const s = out ? 1 : -1;
        arrow(ctx, cx0 + s * 34, y0 - D, cx0 - s * 34, y0 - D, cB, w + 1.5);
      };
      if (I1 > 0.5) ring(xa, true, lw);
      if (I2 > 0.5) ring(xb, same, widthOf(B2));
      /* the field each wire makes where the other one stands, at right angles to the
         line between them, so that RHR-1 sends the force straight along that line */
      if (B1 > 1e-12) arrow(ctx, xb, y0, xb, y0 - 88, cB, 5);
      if (B2 > 1e-12) arrow(ctx, xa, y0, xa, y0 + (same ? 88 : -88), cB, 5);
      currentMark(ctx, xa, y0, true, cI, R);
      currentMark(ctx, xb, y0, same, cI, R);
      /* each force arrow is set on the side of its wire that the other wire's field
         arrow has left clear, so that no force crosses a field */
      const fy2 = y0 + 44, fy1 = y0 + (same ? -44 : 44);
      if (FL > 1e-12) {
        arrow(ctx, xb, fy2, xb - pull * 126, fy2, cF, W);
        arrow(ctx, xa, fy1, xa + pull * 126, fy1, cF, W);
      }
      text(ctx, '1', xa, y0 - 34, PAL.ink, { size: 24, weight: 700, align: 'center' });
      text(ctx, '2', xb, y0 - 34, PAL.ink, { size: 24, weight: 700, align: 'center' });
      hbracket(ctx, xa, xb, y0 + 178, cR, 'r = ' + fmt(r, 2) + ' m', { side: 'below', H: SCENE });
      ctx.restore();
      label(ctx, 'I₁ = ' + fmt(I1, 0) + ' A', xa, y0 - 16, { side: 'left', size: 21, color: cI, gap: 30, H: SCENE });
      label(ctx, 'I₂ = ' + fmt(I2, 0) + ' A', xb, y0 + 16, { side: 'right', size: 21, color: cI, gap: 30, H: SCENE });
      if (B1 > 1e-12) label(ctx, 'B₁ = ' + num(B1) + ' T', xb, y0 - 88, { side: 'above', size: 21, color: cB, H: SCENE });
      if (FL > 1e-12) {
        label(ctx, 'F₂/l = ' + num(FL) + ' N/m', xb - pull * 126, fy2, { side: 'below', size: 21, color: cF, H: SCENE });
        label(ctx, 'F₁/l = ' + num(FL) + ' N/m', xa + pull * 126, fy1, { side: same ? 'above' : 'below', size: 21, color: cF, H: SCENE });
      }
      text(ctx, 'A current is drawn as a dot where it comes toward you and as a cross where it runs away from you.', 700, 546, PAL.muted, { size: 18, align: 'center' });
      pts.push({ p: [xa, y0], r: 40, name: 'wire 1, carrying ' + fmt(I1, 0) + ' A' }, { p: [xb, y0], r: 40, name: 'wire 2, carrying ' + fmt(I2, 0) + ' A' });
    }
    hits = pts;
    /* the force per unit length at every separation, with the state now set on it */
    const { X, Y } = axes(ctx, BOX, [0, 2], [0, 1], { xl: 'r, the distance between the wires (meters)', xc: cR, yl: 'F/l (N/m)', yc: cF, nx: 4, ny: 4, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 2) });
    if (FL > 1e-12) {
      ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
      curve(ctx, (t) => K * I1 * I2 / t, 0.1, 2, X, Y, cF, 5, 160);
      ctx.restore();
      line(ctx, X(r), Math.max(Y(FL), BOX.t), X(r), BOX.b, alpha(PAL.ink, 0.35), 2.5, [4, 8]);
      const pt = pinned(ctx, BOX, X, Y, r, FL, cF, num(FL) + ' N/m');
      if (!pt.out) { const rightish = pt.x > BOX.r - 200; text(ctx, num(FL) + ' N/m', pt.x + (rightish ? -16 : 16), pt.y - 22, cF, { size: 18, weight: 600, align: rightish ? 'right' : 'left', bg: PAL.panel }); }
    }
    note(ctx, BOX, 'The force falls away as the wires are drawn apart, but it never quite falls to nothing.',
      [{ l: X(r) - 190, r: X(r) + 190, t: BOX.t, b: BOX.b }, { l: BOX.l, r: BOX.l + (BOX.r - BOX.l) * 0.55, t: BOX.t, b: BOX.b }, { l: BOX.l, r: BOX.r, t: BOX.b - 64, b: BOX.b }]);
    topline(ctx, FL < 1e-12
      ? 'With no current in one of the wires there is no force on either of them, however close together they are laid.'
      : `Two wires ${fmt(r, 2)} m apart, one carrying ${fmt(I1, 0)} A and the other ${fmt(I2, 0)} A ${same ? 'the same way' : 'the opposite way'}, ${same ? 'are pulled together with' : 'are pushed apart with'} ${num(FL)} N on every meter of their length.`);
    readout(d.readout,
      `\\frac{\\kF}{l} = \\frac{\\mu_0\\kIcurone\\kIcurtwo}{2\\pi\\kr} = \\frac{(4\\pi\\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(I1, 0)}\\ \\text{A})(${fmt(I2, 0)}\\ \\text{A})}{2\\pi(${fmt(r, 2)}\\ \\text{m})} = ${numTex(FL)}\\ \\text{N/m}`,
      (same
        ? 'The two currents run the same way, so each wire is pulled toward the other. '
        : 'The two currents run opposite ways, so each wire is pushed away from the other, and nothing else about the arrangement has changed: the force is the size it was and only its direction has turned over. ')
      + 'By Newton’s third law the two forces are the same size whichever way the currents run, and over a 50.0 m run of line a force of this size on every meter comes to ' + num(FL * 50) + ' N.');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => hits.map((h) => ({ x: h.p[0], y: h.p[1], r: h.r, name: h.name })));
})();

/* =====================================================================
   SIM: the pinch effect. The current of an arc is shared among seven
   strands and the force on each is the vector sum of the pair force this
   section derives, taken over the six others: no new law and no model of a
   plasma. The six strands of the rim are pulled inward and the strand on
   the axis is pulled nowhere. Still: how hard a given current squeezes
   itself is a state of the arrangement.
===================================================================== */
(function () {
  const d = sim('sim-pinch-effect', 780);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 5, max: 20, step: 0.5, value: 15, unit: 'kA', dec: 1, aria: 'the current in the arc' });
  const dS = ctl(d.controls, { label: 'd', cls: '', min: 6, max: 16, step: 0.5, value: 10, unit: 'mm', dec: 1, aria: 'the diameter of the column the current flows in' });
  /* 22 canvas units to the millimeter, so the widest column the slider reaches,
     16.0 mm, has a rim 176 units from the axis. The force arrows are drawn to one
     fixed scale, 0.1365 units to the newton per meter, taken from the greatest force
     the two sliders can make together: 20.0 kA in a 6.00 mm column comes to 1905 N/m
     and is drawn 230 units long, and the default state is drawn 78 units. */
  const SD = 22, SA = 230 / 1905, CX = 700, CY = 360;

  /* the seven strands, one on the axis and six on the rim, in meters */
  function strands(a) {
    const out = [{ x: 0, y: 0 }];
    for (let i = 0; i < 6; i++) { const t = (i * Math.PI) / 3; out.push({ x: a * Math.cos(t), y: a * Math.sin(t) }); }
    return out;
  }
  /* the force per unit length on one strand, summed over the pair force this section
     derives between it and every other strand */
  function netOn(ps, Is, k) {
    let fx = 0, fy = 0;
    ps.forEach((p, j) => {
      if (j === k) return;
      const dx = p.x - ps[k].x, dy = p.y - ps[k].y, s = Math.hypot(dx, dy), f = K * Is * Is / s;
      fx += (f * dx) / s; fy += (f * dy) / s;
    });
    return Math.hypot(fx, fy);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const I = iS.v * 1000, dmm = dS.v, a = dmm / 2000, Is = I / 7, R = (dmm / 2) * SD;
    const cI = C('current'), cF = C('force');
    const ps = strands(a), net = netOn(ps, Is, 1), pair = K * Is * Is / a, L = Math.max(10, net * SA);
    /* the column the current runs in, an ink outline with no tint of any kind */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.setLineDash([9, 9]);
    ctx.beginPath(); ctx.arc(CX, CY, R + 34, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    /* the squeeze: one arrow to each strand of the rim, all six the same size by
       symmetry, drawn from outside the column and stopping short of the strand */
    for (let i = 0; i < 6; i++) {
      const t = (i * Math.PI) / 3, ux = Math.cos(t), uy = -Math.sin(t);
      const hx = CX + ux * (R + 26), hy = CY + uy * (R + 26);
      arrow(ctx, hx + ux * L, hy + uy * L, hx, hy, cF, 5);
    }
    /* the two neighbors whose pair force the readout writes */
    const p0 = { x: CX + R, y: CY }, p1 = { x: CX + R * Math.cos(Math.PI / 3), y: CY - R * Math.sin(Math.PI / 3) };
    line(ctx, p0.x, p0.y, p1.x, p1.y, alpha(PAL.ink, 0.55), 2.5, [7, 7]);
    /* the strands themselves: seven equal currents, all coming toward the reader */
    dot(ctx, CX, CY, cF, false, Math.max(18, R * 0.16 + 11));
    const mr = Math.max(10, Math.min(16, R * 0.16));
    ps.forEach((p) => currentMark(ctx, CX + p.x * SD * 1000, CY - p.y * SD * 1000, true, cI, mr));
    /* the names: four of them, the six arrows named once on one representative
       because symmetry makes every one of them the same (rule 26.7) */
    label(ctx, 'F/l = ' + fmt(net, 0) + ' N/m', CX + R + 26 + L, CY, { side: 'right', size: 22, color: cF, H: 780 });
    label(ctx, fmt(Is / 1000, 2) + ' kA in each strand', p1.x, p1.y, { side: 'above', size: 20, color: cI, gap: 28, H: 780 });
    label(ctx, fmt(dmm / 2, 2) + ' mm apart', (p0.x + p1.x) / 2, (p0.y + p1.y) / 2, { side: 'above', size: 19, gap: 18, H: 780 });
    text(ctx, 'The column is drawn as seven strands of equal current. Each of the six on the rim is pulled toward the other six, so that the whole', 700, 650, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'column squeezes itself into a narrower tube, while the strand on the axis, pulled equally in every direction, is pulled nowhere at all.', 700, 678, PAL.muted, { size: 18, align: 'center' });
    topline(ctx, `A ${fmt(iS.v, 1)} kA arc ${fmt(dmm, 1)} mm across squeezes itself: each strand of the rim is pulled toward the other six with ${fmt(net, 0)} N on every meter.`);
    readout(d.readout,
      `\\frac{\\kF}{l} = \\frac{\\mu_0\\kIcurone\\kIcurtwo}{2\\pi\\kr} = \\frac{(4\\pi\\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${sciTex(Is)}\\ \\text{A})^2}{2\\pi(${sciTex(a)}\\ \\text{m})} = ${fmt(pair, 0)}\\ \\text{N/m}`,
      `That is the pull between one strand and the neighbor beside it. Adding the pull of all six of the others on one strand of the rim gives ${fmt(net, 0)} N on every meter, directed straight at the axis, while the strand on the axis is pulled equally in every direction and so is pulled nowhere at all. Double the current and the squeeze is four times as strong, which is why it is the largest currents that burn holes in the plates of a breaker.`);
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const R = (dS.v / 2) * SD, out = [{ x: CX, y: CY, r: 30, name: 'the strand on the axis, pulled equally in every direction' }];
    for (let i = 0; i < 6; i++) { const t = (i * Math.PI) / 3; out.push({ x: CX + R * Math.cos(t), y: CY - R * Math.sin(t), r: 30, name: 'one of the six strands of the rim, carrying ' + fmt(iS.v / 7, 2) + ' kA toward you' }); }
    return out;
  });
})();

/* =====================================================================
   SIM: the current balance, the instrument the section's last paragraph
   describes. Two straight wires a meter apart carrying an ampere each pull
   on one another with the weight of about twenty micrograms per meter,
   which is why the definition is realised with many turns a few
   centimeters apart instead. Still: a balance at balance is a state.
===================================================================== */
(function () {
  const d = sim('sim-current-balance', 800);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 10, step: 0.1, value: 5, unit: 'A', dec: 2, aria: 'the current through both coils' });
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 40, step: 1, value: 20, unit: 'turns', dec: 0, aria: 'the number of turns on each coil' });
  const rS = ctl(d.controls, { label: '\\kr', cls: 'position', min: 1, max: 10, step: 0.25, value: 3, unit: 'cm', dec: 2, aria: 'the gap between the facing sides of the two coils' });
  /* 18 canvas units to the centimeter of gap, so the widest gap the slider reaches,
     10.0 cm, is 180 units and the fixed coil never leaves its stand. The sides the
     coils turn toward each other are 10.0 cm of wire, the length the force is
     reckoned over, and g is 9.80 m/s^2 for the mass the balance must carry. */
  const SG = 18, LEN = 0.100, G = 9.80, FREF = K * 100 * 100 / 0.03 * LEN;
  const PIV = 700, BEAM = 140, ARM = 300, PANX = PIV - ARM, COILX = PIV + ARM, BASE = 726, YU = 380, MK = 16, PER = 10;

  function draw() {
    const { ctx } = begin(d.c);
    const I = iS.v, N = nS.v, rcm = rS.v, r = rcm / 100;
    const cI = C('current'), cF = C('force'), cR = C('position');
    const FL = K * (N * I) * (N * I) / r, Fn = FL * LEN, mg = (Fn / G) * 1e6;   /* the mass in milligrams */
    const gap = rcm * SG, yL = YU + gap, rows = Math.ceil(N / PER), span = (rows - 1) * MK * 1.35;
    const upTop = YU - MK * 0.7 - span - MK / 2, lowBot = yL + MK * 0.7 + span + MK / 2;
    const mass = mg >= 1000 ? fmt(mg / 1000, 2) + ' g' : fmt(mg, mg < 10 ? 2 : 0) + ' mg';
    /* the beam, its pivot and its pan, all ink: the beam is drawn level, because the
       mass on the pan is the mass that balances what the coils do to each other */
    line(ctx, PANX - 30, BEAM, COILX + 30, BEAM, PAL.ink, 7);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.6); ctx.beginPath(); ctx.moveTo(PIV, BEAM + 6); ctx.lineTo(PIV - 34, BEAM + 96); ctx.lineTo(PIV + 34, BEAM + 96); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, PIV - 76, BEAM + 96, PIV + 76, BEAM + 96, PAL.ink, 5);
    line(ctx, PANX, BEAM, PANX, BEAM + 100, PAL.ink, 3);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(PANX - 92, BEAM + 100); ctx.lineTo(PANX + 92, BEAM + 100); ctx.lineTo(PANX + 62, BEAM + 142); ctx.lineTo(PANX - 62, BEAM + 142); ctx.closePath(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(PANX - 42, BEAM + 54, 84, 46); ctx.fill(); ctx.stroke(); ctx.restore();
    label(ctx, mass, PANX, BEAM + 77, { side: 'left', size: 22, gap: 58, H: 800 });
    /* the hanger and the coil it carries */
    line(ctx, COILX, BEAM, COILX, upTop, PAL.ink, 3);
    /* each coil is drawn end-on, one mark to a turn, in rows of eight, so that the
       block of current grows visibly with the turns the reader asks for */
    const bank = (yBase, up) => {
      for (let k = 0; k < N; k++) {
        const row = Math.floor(k / PER), col = k % PER, wide = Math.min(PER, N - row * PER);
        currentMark(ctx, COILX + (col - (wide - 1) / 2) * MK * 1.35, yBase + up * row * MK * 1.35, true, cI, MK / 2.1);
      }
    };
    bank(YU - MK * 0.7, -1);
    bank(yL + MK * 0.7, 1);
    /* the stand the fixed coil rests on */
    line(ctx, COILX - 130, BASE, COILX + 130, BASE, PAL.ink, 5);
    [-84, 84].forEach((k) => line(ctx, COILX + k, lowBot + 8, COILX + k, BASE, PAL.ink, 3));
    /* the pair of forces on the sides that face each other, drawn toward each other
       because both coils carry their current the same way round */
    const W = fw(Fn, FREF), len = Math.min(76, Math.max(10, gap * 0.42));
    if (Fn > 1e-14) {
      arrow(ctx, COILX - 156, YU, COILX - 156, YU + len, cF, W);
      arrow(ctx, COILX - 156, yL, COILX - 156, yL - len, cF, W);
    }
    vbracket(ctx, COILX + 156, YU, yL, cR, 'r = ' + fmt(rcm, 2) + ' cm', 1, { side: 'right', H: 800 });
    label(ctx, 'I = ' + fmt(I, 2) + ' A', COILX, upTop, { side: 'above', size: 21, color: cI, gap: 18, H: 800 });
    label(ctx, 'N = ' + fmt(N, 0) + (N === 1 ? ' turn' : ' turns') + ' on each coil', COILX, lowBot, { side: 'below', size: 20, gap: 26, H: 800 });
    if (Fn > 1e-14) label(ctx, 'F = ' + num(Fn) + ' N', COILX - 156, (YU + yL) / 2, { side: 'left', size: 21, color: cF, H: 800 });
    text(ctx, 'The 10.0 cm of wire that the two coils turn toward each other is the length the force is reckoned over.', 700, 766, PAL.muted, { size: 18, align: 'center' });
    topline(ctx, Fn < 1e-14
      ? 'With no current in the coils there is nothing for the balance to weigh.'
      : `${fmt(N, 0)} ${N === 1 ? 'turn' : 'turns'} carrying ${fmt(I, 2)} A, ${fmt(rcm, 2)} cm above ${N === 1 ? 'one more' : fmt(N, 0) + ' more'}, are pulled together with ${num(Fn)} N over the 10.0 cm that face each other, the weight of ${mass}.`);
    readout(d.readout,
      `\\frac{\\kF}{l} = \\frac{\\mu_0\\kIcurone\\kIcurtwo}{2\\pi\\kr} = \\frac{(4\\pi\\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(N, 0)}\\times ${fmt(I, 2)}\\ \\text{A})^2}{2\\pi(${fmt(r, 4)}\\ \\text{m})} = ${numTex(FL)}\\ \\text{N/m}`,
      `Every turn of the upper coil is a current running parallel to every turn of the lower one, so each of the two currents in the law is ${fmt(N, 0)} times ${fmt(I, 2)} A. The definition itself asks for two wires one meter apart carrying one ampere each, which pull with 2 × 10⁻⁷ N on every meter, the weight of about twenty micrograms; gathering the wire into coils and bringing them a few centimeters apart is what turns that into something a balance can weigh.`);
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const gap = rS.v * SG, yL = YU + gap;
    return [
      { x: COILX, y: YU - 24, r: 80, name: 'the coil hanging from the beam, ' + fmt(nS.v, 0) + ' turns carrying ' + fmt(iS.v, 2) + ' A toward you' },
      { x: COILX, y: yL + 24, r: 80, name: 'the fixed coil on its stand, carrying the same current the same way round' },
      { x: PANX, y: BEAM + 77, r: 60, name: 'the rider whose weight balances what the coils do to each other' },
    ];
  });
})();

};
