/* Figures for section 12.1 Flow Rate and Its Relation to Velocity. Boots against the section's text article.
   Continuity has no clock the reader must watch: each figure here is a still
   picture that answers its sliders, registers no cycle and carries no
   transport, as the chapter's config decides for everything before the onset
   of turbulence. The shaded cylinder's one transport is its story slider,
   the book's derivation of Q = Av̄, not a clock. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific notation to three significant figures, once for the canvas and once for KaTeX */
function sci(v, sig = 3) {
  if (v === 0) return { txt: '0', tex: '0' };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e), ms = m.toFixed(sig - 1);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (m / 10).toFixed(sig - 1); }
  return { txt: ms + ' × 10' + sup(e), tex: ms + '\\times 10^{' + e + '}' };
}
/* a positive number to three significant figures, written plainly */
const sf = (v, sig = 3) => { if (v === 0) return '0'; const e = Math.floor(Math.log10(Math.abs(v))); return v.toFixed(Math.max(0, sig - 1 - e)); };
/* a section through a tube on the canvas: the wall in ink and the fluid inside it in the flow-rate hue, from x1 to x2 about the axis y, of radius R */
function tube(ctx, x1, x2, y, R, fc, wc = PAL.ink) {
  /* drawn as a cylinder seen a little from one end: the body, an open mouth at the left and a rim at the right */
  const rx = Math.max(8, R * 0.32);
  ctx.save(); ctx.fillStyle = alpha(fc, 0.14); ctx.fillRect(x1, y - R, x2 - x1, 2 * R);
  ctx.beginPath(); ctx.ellipse(x2, y, rx, R, 0, 0, 2 * Math.PI); ctx.fill();
  ctx.fillStyle = alpha(fc, 0.22); ctx.beginPath(); ctx.ellipse(x1, y, rx, R, 0, 0, 2 * Math.PI); ctx.fill();
  ctx.strokeStyle = wc; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(x1, y - R); ctx.lineTo(x2, y - R); ctx.moveTo(x1, y + R); ctx.lineTo(x2, y + R); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x1, y, rx, R, 0, 0, 2 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x2, y, rx, R, 0, -Math.PI / 2, Math.PI / 2); ctx.stroke();
  ctx.lineWidth = 2.5; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.ellipse(x2, y, rx, R, 0, Math.PI / 2, 3 * Math.PI / 2); ctx.stroke();
  ctx.restore();
}
/* the cylinder of fluid that has passed P: its body and its two elliptical faces, the near half of each ruled */
function slug(ctx, x, L, y, R, fc) {
  const rx = Math.max(8, R * 0.32);
  ctx.save(); ctx.fillStyle = alpha(fc, 0.42); ctx.fillRect(x, y - R + 2, L, 2 * R - 4);
  ctx.beginPath(); ctx.ellipse(x + L, y, rx, R - 2, 0, -Math.PI / 2, Math.PI / 2); ctx.fill();
  ctx.fillStyle = alpha(fc, 0.55); ctx.beginPath(); ctx.ellipse(x, y, rx, R - 2, 0, 0, 2 * Math.PI); ctx.fill();
  ctx.strokeStyle = fc; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.ellipse(x, y, rx, R - 2, 0, 0, 2 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x + L, y, rx, R - 2, 0, -Math.PI / 2, Math.PI / 2); ctx.stroke();
  ctx.restore();
}
/* a bar from x0 on a fixed cap: the value's share of the full width, its edge ruled, its label to the left and its value at the end */
function bar(ctx, x0, y, w, share, color, label, value) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.3); ctx.fillRect(x0, y - 13, w * Math.min(1, share), 26); ctx.restore();
  line(ctx, x0, y - 18, x0, y + 18, PAL.muted, 2);
  line(ctx, x0 + w * Math.min(1, share), y - 13, x0 + w * Math.min(1, share), y + 13, color, 3);
  text(ctx, label, x0 - 16, y, PAL.ink, { size: 20, weight: 600, align: 'right' });
  text(ctx, value, x0 + w * Math.min(1, share) + 14, y, color, { size: 20, weight: 600 });
}

/* =====================================================================
   FIGURE 12.2: the shaded cylinder of fluid that has passed the point P in
   a uniform pipe, and the book's derivation on it as a story slider:
   Q = V/t, then V = Ad makes Q = Ad/t, then d/t bends into v̄ and Q = Av̄.
   At the last stop the length bracket of the shaded volume becomes the
   speed arrow. Still otherwise: the time is a slider here, so the figure
   exposes the clock without running one, and the reader's three sliders
   work at every stop.
===================================================================== */
(function () {
  const d = sim('sim-flow-cylinder', 640);
  const vs = ctl(d.controls, { label: '\\kvb', cls: 'velocity', min: 0.2, max: 4, step: 0.02, value: 1.96, unit: 'm/s', dec: 2, aria: 'the average speed of the fluid' });
  const rs = ctl(d.controls, { label: '\\krad', cls: 'position', min: 0.3, max: 1.5, step: 0.01, value: 0.9, unit: 'cm', dec: 3, aria: 'the radius of the pipe' });
  const ts = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.1, max: 2, step: 0.01, value: 1, unit: 's', dec: 2, aria: 'the elapsed time' });
  const st = ctl(d.controls, { label: '\\text{step}', cls: 'k', min: 0, max: 2, step: 0.01, value: 0, unit: '', dec: 0, aria: 'how far the derivation has been carried' });
  F.story(d, st, { stops: [{ v: 0, label: 'V/t' }, { v: 1, label: 'Ad/t' }, { v: 2, label: 'Av̄' }], ms: 1400 });
  /* the radius is drawn at 60 units to the centimeter and the length at 110 to the meter: the slider maxima
     give a pipe 180 tall and a cylinder 880 long, and neither scale ever follows a slider */
  const KR = 60, KL = 110, KV = 40, PX = 400, CY = 250, X1 = 110, X2 = 1300;
  const QCAP = 3, VCAP = 6, BX = 640, BW = 560;        /* the bars: 3.00 L/s and 6.00 L on 560 units */
  /* the three steps of the derivation; V splits into A and d, and d over t bends together into v̄ */
  const mk = (key, x) => '\\mk{' + key + '}{' + x + '}';
  const L = (n) => n + '\\ \\text{L}';
  const FORM = [
    (n) => mk('Q', '\\kQ') + ' = \\frac{' + mk('V', '\\kvol') + '}{' + mk('t', '\\kt') + '} = \\frac{' + mk('Vn', L(n.V)) + '}{' + mk('tn', n.t + '\\ \\text{s}') + '} = ' + mk('Qn', n.Q + '\\ \\text{L/s}'),
    (n) => mk('Q', '\\kQ') + ' = \\frac{' + mk('A', '\\karea') + mk('d', '\\kd') + '}{' + mk('t', '\\kt') + '} = \\frac{' + mk('An', '(' + n.A + '\\ \\text{cm}^2)') + mk('dn', '(' + n.d + '\\ \\text{m})') + '}{' + mk('tn', n.t + '\\ \\text{s}') + '} = ' + mk('Qn', n.Q + '\\ \\text{L/s}'),
    (n) => mk('Q', '\\kQ') + ' = ' + mk('A', '\\karea') + mk('d', '\\kvb') + ' = ' + mk('An', '(' + n.A + '\\ \\text{cm}^2)') + mk('dn', '(' + n.v + '\\ \\text{m/s})') + ' = ' + mk('Qn', n.Q + '\\ \\text{L/s}'),
  ];
  const KEYS = [{ V: ['A', 'd'], Vn: ['An', 'dn'] }, { t: 'd', tn: 'dn' }];
  const NOTE = [
    'Flow rate is the volume that passes a point in a unit of time: the shaded cylinder has passed P in the time $\\kt$.',
    'The cylinder’s volume is its cross-section times its length, $\\kvol = \\karea\\kd$, and its length is $\\kd = \\kvb\\kt$.',
    'The length over the time is the average speed, $\\kd/\\kt = \\kvb$, so the flow rate is the area times the average speed.',
  ];
  const { formula: fx, note } = F.readout(d);
  let said = '';
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('flow-rate'), vc = C('velocity'), tc = C('time'), pc = C('position'), ac = C('area'), oc = C('volume');
    const pipe = F.ref('pipe'), cyl = F.ref('cylinder');
    const v = vs.v, r = rs.v, t = ts.v, s = st.v, R = r * KR, dm = v * t;
    const A = Math.PI * r * r, Q = A * 1e-4 * v, V = Q * t;          /* A in cm², Q in m³/s, V in m³ */
    const QL = Q * 1000, VL = V * 1000;
    /* the bracket's length becoming the speed arrow, over the second step */
    const k = F.ease.smooth(Math.min(1, Math.max(0, s - 1)));
    /* the pipe, the fluid in it and the cylinder that has passed P */
    tube(ctx, X1, X2, CY, R, fc, pipe);
    slug(ctx, PX, dm * KL, CY, R, cyl);
    for (let x = X1 + 60; x < PX - 40; x += 90) arrow(ctx, x, CY, x + 40, CY, alpha(PAL.ink, 0.35), 2);
    const yb = CY + R + 84, xe = F.lerp(PX + dm * KL, PX + v * KV, k), ye = F.lerp(yb, CY, k);
    if (k < 1) {
      ctx.save(); ctx.globalAlpha = 1 - k;
      hbracket(ctx, PX, xe, ye, pc, k > 0 ? undefined : 'd = v̄t = ' + sf(dm) + ' m');
      if (k === 0) text(ctx, 'in t = ' + fmt(t, 2) + ' s', PX + dm * KL + 44, yb + 30, tc, { size: 21, weight: 600 });
      ctx.restore();
    }
    if (k > 0) {
      ctx.save(); ctx.globalAlpha = k;
      arrow(ctx, PX, ye, xe, ye, vc, 5);
      if (k === 1) text(ctx, 'v̄ = ' + fmt(v, 2) + ' m/s', PX + Math.max(v * KV, 40) + 14, CY - R - 26, vc, { size: 21, weight: 600 });
      ctx.restore();
    }
    dot(ctx, PX, CY, PAL.ink, true, 8);
    text(ctx, 'P', PX - 14, CY + R + 24, PAL.ink, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'the pipe', X2 - 40, CY - R - 26, pipe, { size: 19, align: 'right' });
    /* the cross-section of the pipe at P, seen end on */
    const ex = 200, ey = 500;
    ctx.save(); ctx.fillStyle = alpha(ac, 0.2); ctx.strokeStyle = pipe; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(ex, ey, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, ex, ey, ex + R * Math.cos(-0.6), ey + R * Math.sin(-0.6), pc, 3);
    dot(ctx, ex, ey, PAL.ink, true, 4);
    text(ctx, 'r = ' + fmt(r, 3) + ' cm', ex + R + 16, ey - 30, pc, { size: 21, weight: 600 });
    text(ctx, 'A = πr² = ' + sf(A) + ' cm²', ex + R + 16, ey + 8, ac, { size: 21, weight: 600 });
    text(ctx, 'the cross-section at P', ex, ey + R + 30, PAL.muted, { size: 19, align: 'center' });
    /* the flow rate and the volume that has passed, on fixed caps */
    bar(ctx, BX, 470, BW, QL / QCAP, fc, 'Q = Av̄', sf(QL) + ' L/s');
    bar(ctx, BX, 540, BW, VL / VCAP, oc, 'V = Ad', sf(VL) + ' L');
    text(ctx, 'the bars are drawn on caps of 3.00 L/s and 6.00 L', BX + BW, 590, PAL.muted, { size: 17, align: 'right' });
    topline(ctx, 'In ' + fmt(t, 2) + ' s a cylinder of fluid ' + sf(dm) + ' m long passes the point P, so the flow rate through the ' + fmt(r, 3) + ' cm pipe is ' + sf(QL) + ' L/s.');
    const n = { V: sf(VL), t: fmt(t, 2), Q: sf(QL), A: sf(A), d: sf(dm), v: fmt(v, 2) };
    const i = Math.min(1, Math.floor(s)), at = Math.round(s);
    if (Math.abs(s - at) < 1e-6) F.morph(fx, FORM[at](n));
    else F.morphAt(fx, FORM[i](n), FORM[i + 1](n), s - i, { keyMap: KEYS[i] });
    const line2 = NOTE[at] + ' The radius of the pipe and the length of the cylinder are not drawn to one scale, since a centimeter of one and a meter of the other could not share a picture.';
    if (said !== line2) { said = line2; note.textContent = line2; F.renderMath(note); }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.3: the tube that narrows from point 1 to point 2. The same
   2.00 cm³ of fluid is drawn to scale in both parts, so the slab in the
   wide part becomes a long cylinder in the narrow one, and the speeds and
   the graph beneath show the inverse square. Still: two shaded volumes and
   a pair of speeds have no time in them, and dragging a radius is the
   reader's choice of tube.
===================================================================== */
(function () {
  const d = sim('sim-continuity', 810);
  const Qs = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 0.05, max: 1, step: 0.005, value: 0.5, unit: 'L/s', dec: 3, aria: 'the flow rate through the tube',
    detents: [{ v: 0.0833, label: 'heart' }, { v: 0.5, label: 'hose' }], snap: true });
  const r1s = ctl(d.controls, { label: '\\krone', cls: 'position', min: 0.5, max: 1.2, step: 0.01, value: 0.9, unit: 'cm', dec: 3, aria: 'the radius of the tube at point 1' });
  const r2s = ctl(d.controls, { label: '\\krtwo', cls: 'position', min: 0.25, max: 1.2, step: 0.01, value: 0.25, unit: 'cm', dec: 3, aria: 'the radius of the tube at point 2' });
  /* one scale for radii and lengths, 60 units to the centimeter, so a 2.00 cm³ volume in a 0.25 cm tube is 611 units long and
     fits the narrow part; the speed arrows are at 12 units per m/s, and the largest speed the sliders reach, 50.9 m/s, still fits */
  const K = 60, KV = 12, VOL = 2, CY = 250, XA = 60, XT = 520, XN = 640, XB = 1340, P1 = 240, P2 = 700;
  const box = { l: 200, r: 1300, t: 460, b: 710 };     /* v̄ against r: 0 to 1.20 cm across, 0 to 60 m/s up, never rescaled */
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('flow-rate'), vc = C('velocity'), pc = C('position'), oc = C('volume'), c1 = F.ref('point-1'), c2 = F.ref('point-2');
    const Q = Qs.v, r1 = r1s.v, r2 = r2s.v, R1 = r1 * K, R2 = r2 * K;
    const A1 = Math.PI * r1 * r1, A2 = Math.PI * r2 * r2;                      /* cm² */
    const v1 = (Q * 1000) / A1 / 100, v2 = (Q * 1000) / A2 / 100;             /* m/s */
    const d1 = VOL / A1, d2 = VOL / A2, tpass = (VOL / (Q * 1000)) * 1000;    /* cm, cm, ms */
    const same = Math.abs(r1 - r2) < 0.005;
    /* the tube: a wide part, a taper and a narrow part, and the fluid through all of it */
    ctx.save(); ctx.fillStyle = alpha(fc, 0.14); ctx.beginPath();
    ctx.moveTo(XA, CY - R1); ctx.lineTo(XT, CY - R1); ctx.lineTo(XN, CY - R2); ctx.lineTo(XB, CY - R2); ctx.lineTo(XB, CY + R2); ctx.lineTo(XN, CY + R2); ctx.lineTo(XT, CY + R1); ctx.lineTo(XA, CY + R1); ctx.closePath(); ctx.fill(); ctx.restore();
    /* the wide part in point 1's colour, the narrow part in point 2's and the taper between in ink */
    for (const [pts, col] of [[[[XA, -R1], [XT, -R1]], c1], [[[XT, -R1], [XN, -R2]], PAL.ink], [[[XN, -R2], [XB, -R2]], c2]]) {
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.beginPath();
      for (const s of [1, -1]) { ctx.moveTo(pts[0][0], CY + s * pts[0][1]); ctx.lineTo(pts[1][0], CY + s * pts[1][1]); }
      ctx.stroke(); ctx.restore();
    }
    /* the same volume at the two points, and the speed at each */
    slug(ctx, P1, d1 * K, CY, R1, fc);
    slug(ctx, P2, d2 * K, CY, R2, fc);
    arrow(ctx, P1, CY, P1 + v1 * KV, CY, vc, 5);
    arrow(ctx, P2, CY, P2 + v2 * KV, CY, vc, 5);
    text(ctx, 'v̄_1 = ' + sf(v1) + ' m/s', P1, CY - R1 - 26, vc, { size: 21, weight: 600 });
    text(ctx, 'v̄_2 = ' + sf(v2) + ' m/s', P2, CY - R2 - 26, vc, { size: 21, weight: 600 });
    for (const [x, R, nm, cp] of [[P1, R1, '1', c1], [P2, R2, '2', c2]]) { dot(ctx, x, CY, cp, true, 8); text(ctx, nm, x, CY + R + 26, cp, { size: 24, weight: 600, align: 'center' }); }
    text(ctx, 'V = 2.00 cm³', P1 + (d1 * K) / 2 + 24, CY + R1 + 58, oc, { size: 20, align: 'center' });
    text(ctx, 'V = 2.00 cm³', P2 + (d2 * K) / 2 + 60, CY + R2 + 58, oc, { size: 20, align: 'center' });
    vbracket(ctx, 190, CY, CY + R1, pc); text(ctx, 'r_1 = ' + fmt(r1, 3) + ' cm', 196, CY + R1 + 26, pc, { size: 21, weight: 600, align: 'right' });
    vbracket(ctx, 670, CY, CY + R2, pc); text(ctx, 'r_2 = ' + fmt(r2, 3) + ' cm', 676, CY + R2 + 58, pc, { size: 21, weight: 600, align: 'right' });
    text(ctx, 'Q = ' + fmt(Q, 3) + ' L/s through the whole tube', XB, CY - R2 - 26, fc, { size: 21, weight: 600, align: 'right' });
    /* the graph: speed against radius for this flow rate, both points on it */
    const { X, Y } = axes(ctx, box, [0, 1.2], [0, 60], { xl: 'r (cm)', yl: 'v̄ (m/s)', xc: pc, yc: vc, nx: 6, ny: 3, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    const vOf = (r) => (Q * 1000) / (Math.PI * r * r) / 100, r0 = Math.sqrt((Q * 1000) / (Math.PI * 60 * 100));
    curve(ctx, vOf, Math.max(r0, 0.02), 1.2, X, Y, vc, 4, 160);
    for (const [r, v, nm, cp] of same ? [[r1, v1, '1, 2', vc]] : [[r1, v1, '1', c1], [r2, v2, '2', c2]]) {
      line(ctx, X(r), Y(v), X(r), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
      line(ctx, box.l, Y(v), X(r), Y(v), alpha(PAL.ink, 0.35), 2, [4, 8]);
      const p = pinned(ctx, box, X, Y, r, v, cp);
      text(ctx, nm, p.x + 16, p.y - 16, cp, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, 'v̄ = Q / πr² for Q = ' + fmt(Q, 3) + ' L/s', box.r, box.t - 24, vc, { size: 20, weight: 600, align: 'right' });
    topline(ctx, same
      ? 'The tube has the same radius, ' + fmt(r1, 3) + ' cm, at both points, so the ' + fmt(Q, 3) + ' L/s moves at ' + sf(v1) + ' m/s at both.'
      : 'The same ' + fmt(Q, 3) + ' L/s passes both points, so fluid moving at ' + sf(v1) + ' m/s where the radius is ' + fmt(r1, 3) + ' cm moves at ' + sf(v2) + ' m/s where it is ' + fmt(r2, 3) + ' cm.');
    readout(d.readout, `\\kQone = \\kQtwo:\\quad \\kareaone\\kvbone = \\kareatwo\\kvbtwo:\\quad (${sf(A1)}\\ \\text{cm}^2)(${sf(v1)}\\ \\text{m/s}) = (${sf(A2)}\\ \\text{cm}^2)(${sf(v2)}\\ \\text{m/s}) = ${fmt(Q, 3)}\\ \\text{L/s}`,
      'The two shaded cylinders are the same 2.00 cm³ of fluid, drawn to scale, and each passes its point in ' + sf(tpass) + ' ms. The speeds stand in the ratio $\\kvbtwo/\\kvbone = (\\krone/\\krtwo)^2 = ' + sf(v2 / v1) + '$, which is why the graph climbs so steeply as the radius shrinks.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a vessel that divides into branches. The book states the branching
   form of continuity in one equation and works it once, for the aorta and
   five billion capillaries; here a vessel divides into a few branches whose
   number and radius the reader sets, and the total cross-section and the
   speed in a branch answer. Still: it answers its sliders and nothing else.
===================================================================== */
(function () {
  const d = sim('sim-branching', 740);
  const Qs = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 2, max: 10, step: 0.1, value: 5, unit: 'L/min', dec: 1, aria: 'the flow rate through the vessel' });
  const r1s = ctl(d.controls, { label: '\\krone', cls: 'position', min: 6, max: 15, step: 0.1, value: 10, unit: 'mm', dec: 1, aria: 'the radius of the vessel' });
  const ns = ctl(d.controls, { label: 'n_2', cls: '', min: 2, max: 6, step: 1, value: 6, unit: '', dec: 0, aria: 'the number of branches' });
  const r2s = ctl(d.controls, { label: '\\krtwo', cls: 'position', min: 2, max: 8, step: 0.1, value: 5, unit: 'mm', dec: 1, aria: 'the radius of each branch' });
  /* radii at 4 units to the millimeter, so six branches of 8 mm fan across 444 units; speed arrows at 120 units
     per m/s and pinned at 560 with a hollow head, which the largest speed the sliders reach, 6.6 m/s, overruns; the area bars sit on a cap of 12.5 cm² */
  const K = 4, KV = 120, VMAX = 560, CY = 340, XA = 40, XJ = 520, XF = 680, XE = 1140, ACAP = 12.5, BX = 420, BW = 820;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('flow-rate'), vc = C('velocity'), pc = C('position'), ac = C('area'), cv1 = F.ref('vessel'), cbr = F.ref('branches');
    const Q = Qs.v, r1 = r1s.v, n = ns.v, r2 = r2s.v, R1 = r1 * K, R2 = r2 * K;
    const A1 = Math.PI * r1 * r1 / 100, A2 = Math.PI * r2 * r2 / 100, Atot = n * A2;       /* cm² */
    const Qc = (Q * 1000) / 60;                                                             /* cm³/s */
    const v1 = Qc / A1 / 100, v2 = Qc / Atot / 100;                                         /* m/s */
    /* the branches fan out from the mouth of the vessel: their roots are spread across the mouth where they fit,
       and where they do not the mouth flares to take them */
    const sp = 2 * R2 + 12, spr = Math.min(sp, Math.max((2 * R1 - 2 * R2) / (n - 1), 2 * R2 + 2)), Mh = Math.max(R1, ((n - 1) * spr) / 2 + R2);
    const ys = Array.from({ length: n }, (_, i) => CY + (i - (n - 1) / 2) * sp), yr = Array.from({ length: n }, (_, i) => CY + (i - (n - 1) / 2) * spr);
    const fill = (path) => { ctx.save(); path(); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.fillStyle = alpha(fc, 0.14); ctx.fill(); ctx.restore(); };
    ys.forEach((y, i) => {
      const y0 = yr[i];
      const XM = (XJ + XF) / 2;
      fill(() => { ctx.beginPath(); ctx.moveTo(XJ - 4, y0 - R2); ctx.bezierCurveTo(XM, y0 - R2, XM, y - R2, XF, y - R2); ctx.lineTo(XE, y - R2); ctx.lineTo(XE, y + R2); ctx.lineTo(XF, y + R2); ctx.bezierCurveTo(XM, y + R2, XM, y0 + R2, XJ - 4, y0 + R2); ctx.closePath(); });
      ctx.save(); ctx.strokeStyle = cbr; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
      ctx.moveTo(XJ, y0 - R2); ctx.bezierCurveTo(XM, y0 - R2, XM, y - R2, XF, y - R2); ctx.lineTo(XE, y - R2);
      ctx.moveTo(XJ, y0 + R2); ctx.bezierCurveTo(XM, y0 + R2, XM, y - R2 + 2 * R2, XF, y + R2); ctx.lineTo(XE, y + R2); ctx.stroke(); ctx.restore();
    });
    /* the vessel, drawn over the roots of its branches */
    fill(() => { ctx.beginPath(); ctx.moveTo(XA, CY - R1); ctx.lineTo(XJ - 60, CY - R1); ctx.lineTo(XJ, CY - Mh); ctx.lineTo(XJ, CY + Mh); ctx.lineTo(XJ - 60, CY + R1); ctx.lineTo(XA, CY + R1); ctx.closePath(); });
    ctx.save(); ctx.strokeStyle = cv1; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
    ctx.moveTo(XJ, CY - Mh); ctx.lineTo(XJ - 60, CY - R1); ctx.lineTo(XA, CY - R1); ctx.lineTo(XA, CY + R1); ctx.lineTo(XJ - 60, CY + R1); ctx.lineTo(XJ, CY + Mh); ctx.stroke(); ctx.restore();
    /* the speeds, one arrow in the vessel and one in the last branch standing for all of them */
    const yb = ys[n - 1];
    for (const [x, y, v, nm] of [[260, CY, v1, 'v̄_1'], [700, yb, v2, 'v̄_2']]) {
      const L = v * KV, over = L > VMAX, Ld = Math.min(L, VMAX);
      arrow(ctx, x, y, x + Ld, y, vc, 5);
      if (over) dot(ctx, x + Ld, y, vc, false, 8);
      text(ctx, nm + ' = ' + sf(v) + ' m/s', x, y + (nm === 'v̄_1' ? R1 : R2) + 26, vc, { size: 21, weight: 600 });
    }
    vbracket(ctx, 200, CY, CY + R1, pc); text(ctx, 'r_1 = ' + fmt(r1, 1) + ' mm', 206, CY + R1 + 26, pc, { size: 21, weight: 600, align: 'right' });
    vbracket(ctx, XE + 22, yb - R2, yb, pc, 'r_2 = ' + fmt(r2, 1) + ' mm', 1);
    text(ctx, 'n_1 = 1 vessel', 260, CY - R1 - 26, cv1, { size: 20, weight: 600 });
    text(ctx, 'n_2 = ' + n + ' branches, each of radius r_2', 1000, yb + R2 + 26, cbr, { size: 20, weight: 600 });
    /* the cross-section of the vessel against the total cross-section of its branches, on one cap */
    bar(ctx, BX, 640, BW, A1 / ACAP, ac, 'A_1', sf(A1) + ' cm²');
    bar(ctx, BX, 688, BW, Atot / ACAP, ac, 'n_{2}A_{2}', sf(Atot) + ' cm²');
    text(ctx, 'the bars are drawn on a cap of 12.5 cm²', BX + BW, 724, PAL.muted, { size: 17, align: 'right' });
    const ratio = Atot / A1, same = Math.abs(ratio - 1) < 0.02;
    topline(ctx, 'One vessel of ' + fmt(r1, 1) + ' mm radius divides into ' + n + ' branches of ' + fmt(r2, 1) + ' mm, so the total cross-section ' + (same
      ? 'is unchanged and the blood keeps its ' + sf(v1) + ' m/s.'
      : 'is ' + sf(ratio) + ' times the vessel’s and the blood ' + (ratio > 1 ? 'slows' : 'quickens') + ' from ' + sf(v1) + ' m/s to ' + sf(v2) + ' m/s.'));
    readout(d.readout, `n_1\\kareaone\\kvbone = n_2\\kareatwo\\kvbtwo:\\quad (1)(${sf(A1)}\\ \\text{cm}^2)(${sf(v1)}\\ \\text{m/s}) = (${n})(${sf(A2)}\\ \\text{cm}^2)(${sf(v2)}\\ \\text{m/s}) = ${sf(Qc)}\\ \\text{cm}^3\\text{/s} = ${fmt(Q, 1)}\\ \\text{L/min}`,
      'The body’s 5 × 10⁹ capillaries of 4.0 μm radius have a total cross-section of about 2500 cm², some 800 times the aorta’s 3.14 cm², so the same 5.0 L/min that moves at 0.27 m/s in the aorta crawls through the capillaries at 0.33 mm/s, slowly enough for exchange with the tissues and fast enough not to clot.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
