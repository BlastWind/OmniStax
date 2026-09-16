/* Figures for section 23.4 Eddy Currents and Magnetic Damping.

   The page binds the five types ch23/COLOR.md gives it — magnetic-field, current,
   force, velocity and position — and one more, time, because two of its figures
   graph a displacement against time and their readouts state how long a swing
   takes to die away. Every field arrow and every cross wears the field hue, every
   eddy current loop the current hue, every drag arrow the force hue, every speed
   the velocity hue, and every displacement, position and distance the position
   hue. No device is tinted: a magnet, a pole piece, a plate, a beam, a ramp and a
   can are all ink. The flux is not drawn as a quantity, since the section prints
   no flux symbol and no equation; the part of a plate that lies in the field is an
   area, bracketed in ink, and whether the flux through it is growing, steady or
   falling is said in words. The three pendulum bobs carry no type of their own and
   must be told apart, so they take F.cat(0..2), which ch23/COLOR.md grants this
   page and which nothing else on it uses.

   Three of the four figures move, because damping is a rate and each of the three
   has a clock in it: a swing dying away, a balance settling, and three pieces of
   scrap separating down a ramp. The fourth, the plate crossing the pole faces, is
   still and answers its position slider, because the state the section's own
   sentence turns on — the plate wholly inside the field, with no current at all —
   is the one an animation flashes past. The pendulum's magnet is drawn on a locked
   view (rule 28.2), the book's own three-quarter view of the apparatus, with no
   orbit; everything else is flat. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, cat, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, labeller, note, hbracket, vbracket, axes, curve, pinned, fixed, hover, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const TAU = 2 * Math.PI;

/* How well a plate of each build carries an eddy current: a solid plate is the
   measure, a slotted one carries loops small enough that the forces on them very
   nearly cancel, and an insulator carries almost nothing at all. The same three
   numbers set the damping in every figure of the page. */
const MAT = { solid: 1, slotted: 0.12, insulating: 0.002 };

/* a circular arrow, the eddy current in a plate or a disc seen face on */
function swirl(ctx, x, y, r, ccw, color, w) {
  const a0 = 0.30 * TAU, a1 = a0 + (ccw ? -0.80 : 0.80) * TAU, h = a1 + (ccw ? -0.16 : 0.16);
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(x, y, r, a0, a1, ccw); ctx.stroke(); ctx.restore();
  arrow(ctx, x + r * Math.cos(a1), y + r * Math.sin(a1), x + r * Math.cos(h), y + r * Math.sin(h), color, w);
}
/* a current loop round a rectangle, four arrows nose to tail; ccw is counterclockwise on the page */
function loopArrows(ctx, cx, cy, hw, hh, ccw, color, w) {
  const c = [[cx + hw, cy + hh], [cx + hw, cy - hh], [cx - hw, cy - hh], [cx - hw, cy + hh]];
  const path = ccw ? c : [c[0], c[3], c[2], c[1]];
  for (let i = 0; i < 4; i++) { const a = path[i], b = path[(i + 1) % 4]; arrow(ctx, a[0], a[1], b[0], b[1], color, w); }
}
/* the field into the page: a cross in a faint disc, the way the book draws it */
function cross(ctx, x, y, r, color, w) {
  const k = r * 0.62;
  ctx.save(); ctx.strokeStyle = alpha(color, 0.55); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke(); ctx.restore();
  line(ctx, x - k, y - k, x + k, y + k, color, w); line(ctx, x - k, y + k, x + k, y - k, color, w);
}

/* =====================================================================
   FIGURE 23.12: the demonstration. Three bobs, a solid plate, a slotted
   plate and an insulator, released together from the same displacement
   and swinging between the poles of their own magnets. Moving: the
   damping is a process in time and the figure has a clock, eight seconds
   of it in five real ones. The magnets are drawn on one locked view
   (rule 28.2), the book's own three-quarter view, and never turn.
===================================================================== */
(function () {
  const d = sim('sim-magnetic-damping', 905);
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.8, step: 0.05, value: 0.5, unit: 'T', dec: 2, onInput: reset, aria: 'the strength of the field between the poles' });
  const aS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 4, max: 14, step: 1, value: 10, unit: 'cm', dec: 0, onInput: reset, aria: 'the displacement the three bobs are released from' });
  const RUN = 8, TP = 1.554;                 /* eight seconds of swinging; a 0.60 m pendulum has a period of 1.554 s */
  const cy = cycle(() => RUN, 1.2);
  function reset() { cy.reset(); }
  /* The damping rate of each bob: the drag on an eddy current grows with the
     current, and the current with the field, so the rate goes as the square of the
     field. The constant is set so that at the 0.50 T the figure loads with, the
     solid bob is inside a tenth of its swing after two and a half seconds, which is
     what the demonstration looks like on a bench. */
  const rate = (k) => 3.7 * MAT[k] * bS.v * bS.v;
  const swing = (k, t) => aS.v * Math.exp(-rate(k) * t);
  const xOf = (k, t) => swing(k, t) * Math.cos((TAU * t) / TP);
  const vOf = (k, t) => -swing(k, t) * ((TAU / TP) * Math.sin((TAU * t) / TP) + rate(k) * Math.cos((TAU * t) / TP));

  /* One viewpoint for all three magnets, from well to the right of the gap and a
     little above it, so that the swing along the gap reads as a wide sweep across
     the canvas and both pole faces stay in sight. Locked: the reader never turns
     it, because the apparatus is one the book shows whole from where it stands. */
  const YAW = 1.05, PITCH = 0.30, DIST = 2800;
  const CAM = [Math.sin(YAW) * Math.cos(PITCH), Math.sin(PITCH), Math.cos(YAW) * Math.cos(PITCH)];
  const facing = (n) => n[0] * CAM[0] + n[1] * CAM[1] + n[2] * CAM[2];
  function boxOf(x0, x1, y0, y1, z0, z1) {
    return [
      { n: [0, 0, 1], pts: [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]] },
      { n: [0, 0, -1], pts: [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]] },
      { n: [0, 1, 0], pts: [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]] },
      { n: [0, -1, 0], pts: [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]] },
      { n: [1, 0, 0], pts: [[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]] },
      { n: [-1, 0, 0], pts: [[x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]] },
    ];
  }
  const solid = (ctx, V, faces) => faces.forEach((f) => { if (facing(f.n) > 0.02) face(ctx, f.pts.map((p) => V.P(p)), V.shade(f.n), 2.5); });
  const GAP = 46, PW = 74, PZ = 96, LR = 205, SC = 8;   /* eight canvas units to the centimeter of swing, so the widest swing the slider reaches, 14 cm, is 112 units of a 205-unit rod */
  const COLS = [
    { k: 'solid', name: 'a solid metal bob', dash: [] },
    { k: 'slotted', name: 'a slotted metal bob', dash: [15, 9] },
    { k: 'insulating', name: 'an insulating bob', dash: [5, 8] },
  ];
  const VIEWS = [250, 700, 1150].map((cx) => view({ yaw: YAW, pitch: PITCH, dist: DIST, cx, cy: 385 }));

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), cB = C('magnetic-field'), cI = C('current'), cF = C('force');
    const vmax = aS.v * (TAU / TP);           /* the greatest speed any bob reaches, at the first pass through the middle */
    COLS.forEach((col, i) => {
      const V = VIEWS[i], P = (p) => V.P(p), cc = cat(i);
      const x = xOf(col.k, t), v = vOf(col.k, t);
      const sn = (x * SC) / LR, th = Math.asin(Math.max(-1, Math.min(1, sn))), cs = Math.cos(th);
      /* what this bob is made of, named once above its own apparatus (rule 26.7) */
      text(ctx, col.name, 250 + i * 450, 106, cc, { size: 21, weight: 600, align: 'center' });
      /* the beam the pendulum hangs from, the magnet's base and its two poles */
      solid(ctx, V, boxOf(-36, 36, LR + 8, LR + 38, -120, 120));
      solid(ctx, V, boxOf(-(GAP + PW), GAP + PW, -186, -118, -PZ, PZ));
      solid(ctx, V, boxOf(-(GAP + PW), -GAP, -118, 42, -PZ, PZ));
      solid(ctx, V, boxOf(GAP, GAP + PW, -118, 42, -PZ, PZ));
      /* the field across the gap, from the north face to the south face, thickening with its strength */
      if (bS.v > 0.001) {
        const lw = 2 + 4 * (bS.v / 0.8);
        [-74, -18].forEach((yy) => [-52, 52].forEach((zz) => { const a = P([GAP - 3, yy, zz]), b = P([-GAP + 3, yy, zz]); arrow(ctx, a[0], a[1], b[0], b[1], cB, lw); }));
      }
      /* the poles are lettered low on their outer sides, below the band the bob swings through */
      const pN = P([GAP + PW / 2, -86, -60]), pS = P([-(GAP + PW / 2), -86, 60]);
      text(ctx, 'N', pN[0], pN[1], PAL.ink, { size: 24, weight: 700, align: 'center' });
      text(ctx, 'S', pS[0], pS[1], PAL.ink, { size: 24, weight: 700, align: 'center' });
      /* the rod and the bob: the bob hangs square to the rod, as the book draws it */
      const piv = P([0, LR, 0]);
      const ctr = [0, LR - LR * cs, LR * sn];
      const dn = [0, -cs, sn], ac = [0, sn, cs];        /* down the rod, and across the bob */
      const HH = 54, HW = 46;
      const corner = (a, b) => P([0, ctr[1] + a * HH * dn[1] + b * HW * ac[1], ctr[2] + a * HH * dn[2] + b * HW * ac[2]]);
      const pc = P(ctr);
      line(ctx, piv[0], piv[1], pc[0], pc[1], PAL.ink, 5);
      dot(ctx, piv[0], piv[1], PAL.ink, true, 8);
      const quad = [corner(-1, -1), corner(-1, 1), corner(1, 1), corner(1, -1)];
      ctx.save(); ctx.beginPath(); quad.forEach((p, j) => (j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
      ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.stroke(); ctx.restore();
      /* the current the motion drives round inside the bob */
      const drive = (Math.abs(v) / (vmax || 1)) * (bS.v / 0.8) * MAT[col.k];
      const ccw = v > 0;
      if (col.k === 'slotted') {
        [-23, 23].forEach((b) => { const a = corner(-0.84, b / HW), q = corner(0.84, b / HW); line(ctx, a[0], a[1], q[0], q[1], PAL.ink, 3); });
        if (drive > 0.02) [-0.42, 0.42].forEach((a, r) => [-34, 0, 34].forEach((b, c) => { const q = corner(a, b / HW); swirl(ctx, q[0], q[1], 10, (r + c) % 2 ? !ccw : ccw, cI, 2.5); }));
      } else if (col.k === 'solid' && drive > 0.02) {
        swirl(ctx, pc[0], pc[1], 26, ccw, cI, 3 + 2.5 * Math.min(1, drive));
      }
      /* the drag, against the motion and proportional to the speed */
      const fl = 170 * Math.min(1, drive);
      if (fl > 14) {
        const s = v > 0 ? -1 : 1;
        const tail = P([0, ctr[1] + s * (HW + 18) * ac[1], ctr[2] + s * (HW + 18) * ac[2]]);
        const tip = P([0, ctr[1] + s * (HW + 18 + fl) * ac[1], ctr[2] + s * (HW + 18 + fl) * ac[2]]);
        arrow(ctx, tail[0], tail[1], tip[0], tip[1], cF, 5);
        label(ctx, 'F', tip[0], tip[1], { side: 'above', size: 22, color: cF, leader: false });
      }
    });
    /* the graph: the swing of each bob against time. Both ranges are fixed and never
       rescaled — the whole eight seconds the figure runs, and the displacement slider's
       own 14 cm on either side of the middle. The three curves are dashed differently as
       well as coloured differently, so that they can still be told apart with colour off. */
    const box = { l: 170, r: 1250, t: 645, b: 815 };
    const { X, Y } = axes(ctx, box, [0, RUN], [-14, 14], { xl: 'time t (s)', xc: C('time'), yl: 'displacement x (cm)', yc: C('position'), nx: 4, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    COLS.forEach((col, i) => {
      ctx.save(); ctx.setLineDash(col.dash);
      if (t > 0.001) curve(ctx, (q) => xOf(col.k, q), 0, t, X, Y, cat(i), i ? 3.5 : 4.5, Math.min(2200, Math.ceil((60 * t) / TP) + 20));
      ctx.restore();
      dot(ctx, X(t), Y(xOf(col.k, t)), cat(i), true, 8);
    });
    const now = COLS.map((c) => fmt(swing(c.k, t), 1));
    topline(ctx, bS.v < 0.001
      ? 'With the magnets switched off the three bobs swing alike: nothing damps any of them, whatever they are made of.'
      : t < 0.05
        ? 'The three bobs are released together from ' + fmt(aS.v, 0) + ' cm, one a solid metal plate, one a slotted plate and one an insulator.'
        : 'After ' + fmt(t, 1) + ' s the solid bob is swinging through ' + now[0] + ' cm, the slotted bob through ' + now[1] + ' cm and the insulator through ' + now[2] + ' cm.');
    readout(d.readout,
      `\\kx = ${now[0]}\\ \\text{cm (solid)},\\ ${now[1]}\\ \\text{cm (slotted)},\\ ${now[2]}\\ \\text{cm (insulating)}\\quad\\text{at } \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      'The drag is proportional to the speed, so it is greatest as a bob crosses the poles and falls away as the swing dies. The solid bob carries the largest eddy currents and is stopped first, the slotted bob carries small ones that work against each other, and the insulator carries almost none.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RUN / 5), draw });
})();

/* =====================================================================
   FIGURE 23.13 + 23.14: the plate crossing the pole faces, solid or
   slotted. Still: the reader walks the plate across on its slider and can
   stop it where the book's sentence turns, wholly inside the field with
   no current in it at all. Flat: the loops and the force lie in the plane
   of the plate and nothing is hidden by depth.
===================================================================== */
(function () {
  const d = sim('sim-eddy-currents-in-a-plate', 870);
  const pS = ctl(d.controls, { label: '\\kx', cls: 'position', min: -22, max: 22, step: 0.5, value: -9, unit: 'cm', dec: 1, aria: 'where the plate stands, measured from the middle of the field' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.8, step: 0.05, value: 0.5, unit: 'T', dec: 2, aria: 'the strength of the field between the poles' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 'm/s', dec: 2, aria: 'the speed the plate crosses the field at' });
  const mC = choice(d.controls, { label: '\\text{the plate is}', options: [{ value: 'solid', label: 'solid' }, { value: 'slotted', label: 'slotted' }, { value: 'insulating', label: 'insulating' }], value: 'solid', aria: 'what the plate is made of and whether it is cut into slots' });
  /* Twenty canvas units to the centimeter: the plate is 12 cm across and the field
     24 cm across and 14 cm deep, so the plate can be walked right out of the field on
     either side and still stand on the canvas. */
  const SC = 20, X0 = 700, Y0 = 340, PH = 6, FH = 12, FV = 7;
  const dragAt = (p) => {
    const inL = p - PH < -FH && p + PH > -FH, inR = p - PH < FH && p + PH > FH;
    return (inL || inR) ? MAT[mC.value] * (bS.v / 0.8) * (bS.v / 0.8) * (vS.v / 0.6) : 0;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const p = pS.v, cB = C('magnetic-field'), cI = C('current'), cF = C('force'), cV = C('velocity'), cP = C('position');
    const fl = X0 - FH * SC, fr = X0 + FH * SC, ft = Y0 - FV * SC, fb = Y0 + FV * SC;
    const cx = X0 + p * SC, pl = cx - PH * SC, pr = cx + PH * SC, pt = Y0 - PH * SC, pb = Y0 + PH * SC;
    /* the field between the poles: a region of the page with the field into it */
    ctx.save(); ctx.fillStyle = alpha(cB, 0.08); ctx.fillRect(fl, ft, fr - fl, fb - ft); ctx.restore();
    [[fl, ft, fr, ft], [fl, fb, fr, fb], [fl, ft, fl, fb], [fr, ft, fr, fb]].forEach((q) => line(ctx, q[0], q[1], q[2], q[3], alpha(cB, 0.6), 2, [10, 8]));
    const marks = [];
    for (let gx = fl + 50; gx < fr; gx += 76) for (let gy = ft + 40; gy < fb; gy += 66) marks.push([gx, gy]);
    if (bS.v > 0.001) marks.forEach((m) => cross(ctx, m[0], m[1], 10, cB, 2 + 2 * (bS.v / 0.8)));
    text(ctx, 'B = ' + fmt(bS.v, 2) + ' T into the page', 180, 140, cB, { size: 21, weight: 600 });
    /* the speed the plate is given */
    const vlen = 60 + 110 * (vS.v / 0.6);
    arrow(ctx, cx, 178, cx + vlen, 178, cV, 5);
    label(ctx, 'v = ' + fmt(vS.v, 2) + ' m/s', cx + vlen, 178, { side: 'right', size: 21, color: cV, leader: false });
    /* the plate, over the field, with the field still drawn through the part of it that lies inside */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(pl, pt, pr - pl, pb - pt); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(pl, pt, pr - pl, pb - pt); ctx.restore();
    const ol = Math.max(pl, fl), or = Math.min(pr, fr);
    if (or > ol) {
      ctx.save(); ctx.beginPath(); ctx.rect(ol, pt, or - ol, pb - pt); ctx.clip();
      ctx.fillStyle = alpha(cB, 0.1); ctx.fillRect(ol, pt, or - ol, pb - pt);
      if (bS.v > 0.001) marks.forEach((m) => cross(ctx, m[0], m[1], 10, cB, 2 + 2 * (bS.v / 0.8)));
      ctx.restore();
      hbracket(ctx, ol, or, 545, PAL.ink, fmt((or - ol) / SC, 1) + ' cm of the plate is in the field', { side: 'below' });
    } else {
      text(ctx, 'none of the plate is in the field', cx, 552, PAL.muted, { size: 19, align: 'center' });
    }
    /* the eddy current: one large loop in a solid plate, small loops that run opposite
       ways in a slotted one, and nothing worth drawing in an insulator */
    const entering = p - PH < -FH && p + PH > -FH, leaving = p - PH < FH && p + PH > FH;
    const ccw = entering;                      /* entering, the amount of the plate in the field grows and the current runs counterclockwise */
    const drag = dragAt(p);
    if (mC.value === 'slotted') {
      [-2.4, 0, 2.4].forEach((k) => line(ctx, cx + k * SC, pt + 18, cx + k * SC, pb - 18, PAL.ink, 3));
      if (drag > 0.0005) [-1, 1].forEach((r, ri) => [-3.6, -1.2, 1.2, 3.6].forEach((k, ci) => swirl(ctx, cx + k * SC, Y0 + r * 52, 16, (ri + ci) % 2 ? !ccw : ccw, cI, 2.5)));
    } else if (mC.value === 'solid' && drag > 0.0005) {
      loopArrows(ctx, cx, Y0, PH * SC - 32, PH * SC - 32, ccw, cI, 4.5);
    }
    if (drag > 0.0005) label(ctx, 'I runs ' + (ccw ? 'counterclockwise' : 'clockwise'), cx, 500, { side: 'above', size: 21, color: cI, leader: false, gap: 0 });
    if (mC.value === 'insulating') label(ctx, 'no current: the plate does not conduct', cx, 500, { side: 'above', size: 20, color: PAL.muted, leader: false, gap: 0 });
    /* the drag that answers the motion */
    if (drag > 0.004) {
      const fx = pl - 22 - (50 + 190 * drag);
      arrow(ctx, pl - 22, Y0, fx, Y0, cF, 5);
      label(ctx, 'F', fx, Y0, { side: 'left', size: 22, color: cF, leader: false });
    }
    /* the graph: the drag against where the plate stands. Both ranges are fixed — 24 cm
       on either side of the middle, which is past both ends of the position slider, and
       nought to one, the greatest drag the three sliders can make between them. */
    const box = { l: 170, r: 1250, t: 630, b: 780 };
    const { X, Y } = axes(ctx, box, [-24, 24], [0, 1], { xl: 'where the plate stands, x (cm)', xc: cP, yl: 'drag force F (as a fraction of the greatest)', yc: cF, nx: 4, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 2) });
    const lvl = MAT[mC.value] * (bS.v / 0.8) * (bS.v / 0.8) * (vS.v / 0.6);
    [[-FH - PH, -FH + PH], [FH - PH, FH + PH]].forEach(([a, b]) => {
      line(ctx, X(a), Y(0), X(a), Y(lvl), cF, 4); line(ctx, X(a), Y(lvl), X(b), Y(lvl), cF, 5); line(ctx, X(b), Y(lvl), X(b), Y(0), cF, 4);
    });
    [[-24, -FH - PH], [-FH + PH, FH - PH], [FH + PH, 24]].forEach(([a, b]) => line(ctx, X(a), Y(0), X(b), Y(0), cF, 5));
    const marker = pinned(ctx, box, X, Y, p, drag, cF, fmt(drag, 2));
    note(ctx, box, 'The drag is nothing at all while the plate is wholly inside the field.', [{ l: X(-FH - PH), r: X(FH + PH), t: box.t, b: box.b }, { l: marker.x - 90, r: marker.x + 90, t: marker.y - 30, b: marker.y + 30 }]);
    const where = entering ? 'entering the field' : leaving ? 'leaving the field' : Math.abs(p) < FH - PH ? 'inside' : 'clear';
    topline(ctx, mC.value === 'insulating'
      ? 'An insulating plate carries no eddy current wherever it stands, so the magnet does not slow it at all.'
      : where === 'inside'
        ? 'The plate is wholly inside the field, so nothing about the field through it is changing: no current runs and there is no drag.'
        : where === 'clear'
          ? 'The plate stands clear of the poles, where there is no field to induce anything in it.'
          : 'The plate is ' + where + ', so the amount of it in the field is changing, the current runs ' + (ccw ? 'counterclockwise' : 'clockwise') + ' and the force on it is to the left.');
    readout(d.readout,
      `\\kBmag = ${fmt(bS.v, 2)}\\ \\text{T},\\quad \\kv = ${fmt(vS.v, 2)}\\ \\text{m/s},\\quad \\kx = ${fmt(p, 1)}\\ \\text{cm}\\quad\\Rightarrow\\quad \\kF = ${fmt(drag, 2)}`,
      'Only the side of the loop that lies in the field is pushed, and it is pushed against the motion, on the way in and on the way out alike. Cutting the plate into slots leaves the same emf with many small loops to run in, and neighboring loops run opposite ways, so the forces on them very nearly cancel.');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => [
    { x: X0 + pS.v * SC, y: Y0, r: PH * SC, name: 'the ' + mC.value + ' plate, 12 cm across' },
    { x: X0, y: Y0 - FV * SC + 24, r: 70, name: 'the field between the poles, ' + fmt(bS.v, 2) + ' T into the page' },
  ]);
})();

/* =====================================================================
   FIGURE 23.15: the balance. A conducting disc turns with the beam
   between the poles of a fixed magnet, and the eddy currents in it bring
   the beam to rest. Moving: how quickly a reading settles is the claim
   the section makes, and six seconds of it run in five real ones.
===================================================================== */
(function () {
  const d = sim('sim-damped-balance', 850);
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.6, step: 0.05, value: 0.35, unit: 'T', dec: 2, onInput: reset, aria: 'the strength of the field the disc turns in' });
  const aS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 2, max: 20, step: 1, value: 14, unit: 'mm', dec: 0, onInput: reset, aria: 'how far the pan is lifted before the beam is let go' });
  const RUN = 6, TP = 2.2, ARM = 90;          /* six seconds; the beam takes 2.2 s to a swing and its arms are 90 mm long */
  const cy = cycle(() => RUN, 1.2);
  function reset() { cy.reset(); }
  /* As in the pendulum, the rate goes as the square of the field. The constant is set
     so that at the 0.35 T the figure loads with, the pan is inside one division, a
     millimeter, in about two and a half seconds. */
  const rate = () => 8.2 * bS.v * bS.v;
  const env = (t) => aS.v * Math.exp(-rate() * t);
  const lift = (t) => env(t) * Math.cos((TAU * t) / TP);
  const speed = (t) => Math.abs(-env(t) * ((TAU / TP) * Math.sin((TAU * t) / TP) + rate() * Math.cos((TAU * t) / TP)));
  const PX = 700, PY = 300, HALF = 300;       /* the pivot, and half the beam drawn 300 units long for 90 mm of arm */
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), cB = C('magnetic-field'), cI = C('current'), cF = C('force'), cP = C('position');
    const y = lift(t), th = Math.asin(Math.max(-1, Math.min(1, y / ARM))), cs = Math.cos(th), sn = Math.sin(th);
    /* the column the beam is pivoted on, and the field the disc turns in */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(PX - 34, PY + 40, 68, 460 - PY); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(PX - 34, PY + 40, 68, 460 - PY); ctx.restore();
    fixed(ctx, PX - 150, 500, 300, 34);
    ctx.save(); ctx.fillStyle = alpha(cB, 0.09); ctx.fillRect(PX - 100, PY - 80, 200, 160); ctx.restore();
    if (bS.v > 0.001) [[-72, -52], [72, -52], [-72, 54], [72, 54]].forEach((m) => cross(ctx, PX + m[0], PY + m[1], 12, cB, 2 + 2 * (bS.v / 0.6)));
    text(ctx, 'B = ' + fmt(bS.v, 2) + ' T into the page', PX + 118, PY - 62, cB, { size: 21, weight: 600 });
    /* the disc on the beam's shaft, which turns with it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(PX, PY, 46, 0, TAU); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.stroke(); ctx.restore();
    const drive = Math.min(1, (speed(t) / (aS.v * (TAU / TP) || 1)) * (bS.v / 0.6));
    if (drive > 0.02) {
      swirl(ctx, PX, PY, 29, y <= 0, cI, 3 + 2 * drive);
      const s = y > 0 ? 1 : -1, tail = PX + s * 56, tip = tail + s * (40 + 110 * drive);
      arrow(ctx, tail, PY - 104, tip, PY - 104, cF, 5);
      label(ctx, 'F', tip, PY - 104, { side: s > 0 ? 'right' : 'left', size: 22, color: cF, leader: false });
    }
    /* the beam, its two pans, and the level it settles to */
    line(ctx, PX - 360, PY, PX + 360, PY, alpha(PAL.ink, 0.35), 2, [10, 10]);
    const lx = PX - HALF * cs, ly = PY - HALF * sn, rx = PX + HALF * cs, ry = PY + HALF * sn;
    line(ctx, lx, ly, rx, ry, PAL.ink, 7);
    [[lx, ly], [rx, ry]].forEach(([ex, ey]) => {
      line(ctx, ex, ey, ex, ey + 92, PAL.ink, 2.5);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.ellipse(ex, ey + 100, 56, 15, 0, 0, Math.PI); ctx.stroke(); ctx.restore();
      line(ctx, ex - 56, ey + 100, ex + 56, ey + 100, PAL.ink, 3.5);
      dot(ctx, ex, ey, PAL.ink, true, 7);
    });
    if (Math.abs(y) > 0.4) vbracket(ctx, lx - 74, PY, ly, cP, fmt(Math.abs(y), 1) + ' mm', -1, { size: 21 });
    label(ctx, 'the disc turns with the beam', PX, PY + 56, { side: 'below', size: 19, color: PAL.muted, gap: 30 });
    /* the graph: how the pan settles. Both ranges are fixed — the whole six seconds the
       figure runs, and the slider's own 20 mm on either side of the level. */
    const box = { l: 170, r: 1250, t: 590, b: 760 };
    const { X, Y } = axes(ctx, box, [0, RUN], [-20, 20], { xl: 'time t (s)', xc: C('time'), yl: 'how far the pan stands off its level (mm)', yc: cP, nx: 3, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    [1, -1].forEach((s) => line(ctx, box.l, Y(s), box.r, Y(s), alpha(PAL.ink, 0.4), 2, [4, 8]));
    text(ctx, 'one division either way', box.r - 10, Y(1) - 18, PAL.muted, { size: 17, align: 'right' });
    ctx.save(); ctx.setLineDash([10, 10]);
    [1, -1].forEach((s) => curve(ctx, (q) => s * env(q), 0, RUN, X, Y, alpha(cP, 0.5), 2.5, 200));
    ctx.restore();
    if (t > 0.001) curve(ctx, lift, 0, t, X, Y, cP, 4.5, Math.min(2200, Math.ceil((60 * t) / TP) + 20));
    dot(ctx, X(t), Y(y), cP, true, 9);
    const settle = rate() > 0.0001 ? Math.log(Math.max(1.0001, aS.v)) / rate() : Infinity;
    topline(ctx, bS.v < 0.001
      ? 'With no field in the gap nothing damps the beam, and a friction-free balance of this kind swings for as long as you care to watch it.'
      : settle > RUN
        ? 'A field of ' + fmt(bS.v, 2) + ' T is too weak to settle this beam inside the six seconds the figure runs, and the pan still stands ' + fmt(Math.abs(y), 1) + ' mm off its level.'
        : 'With the disc in a field of ' + fmt(bS.v, 2) + ' T the pan is inside one division after ' + fmt(settle, 1) + ' s, and the drag on the beam has fallen to ' + fmt(drive, 2) + ' of its greatest.');
    readout(d.readout,
      `\\kBmag = ${fmt(bS.v, 2)}\\ \\text{T}:\\quad \\kx = ${fmt(y, 1)}\\ \\text{mm},\\quad \\kF = ${fmt(drive, 2)}\\quad\\text{at } \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      'The eddy currents run only while the disc is turning, so the drag is proportional to the speed and goes with it. Once the pan is still there is nothing left holding the beam off its true reading, which is what makes damping of this kind safe to put on an instrument.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RUN / 5), draw });
})();

/* =====================================================================
   FIGURE 23.16: the sorting ramp. Three pieces are sent down together and
   pass over a magnet buried under the run-out; the two conductors are held
   back and the plastic bottle is not. Moving: the separation happens along
   the length of the ramp and is what the reader has come to see.
===================================================================== */
(function () {
  const d = sim('sim-recycling-ramp', 640);
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.9, step: 0.05, value: 0.6, unit: 'T', dec: 2, onInput: reset, aria: 'the strength of the magnet under the ramp' });
  const rS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.2, max: 0.85, step: 0.05, value: 0.7, unit: 'm', dec: 2, onInput: reset, aria: 'how far up the ramp the pieces are let go' });
  const RUN = 6, DT = 0.01, N = Math.round(RUN / DT) + 1;
  const RAMP = 1.2, AINC = 4.56, MU = 2.16, ZA = 0.25, ZB = 0.75, DRAGK = 10;
  const ITEMS = [{ mat: 1, name: 'an aluminum can' }, { mat: 1.8, name: 'a copper fitting' }, { mat: 0, name: 'a plastic bottle' }];
  const cy = cycle(() => RUN, 1.2);
  let track = null;
  function reset() { track = null; cy.reset(); }
  /* One run of each piece, worked out once whenever a slider moves: down the ramp
     under gravity, then along the run-out against friction, and against the magnetic
     drag as well wherever the field reaches. The drag is proportional to the speed,
     as the section says, and grows with the square of the field, since the field both
     drives the current and pushes on it. */
  function build() {
    track = ITEMS.map((it) => {
      const out = new Float64Array(2 * N);
      let s = RAMP - rS.v, v = 0;
      for (let i = 0; i < N; i++) {
        out[2 * i] = s; out[2 * i + 1] = v;
        let a = s < RAMP ? AINC : -MU;
        const g = s - RAMP;
        if (s >= RAMP && g >= ZA && g <= ZB) a -= DRAGK * it.mat * bS.v * bS.v * v;
        v = Math.max(0, v + a * DT); s += v * DT;
      }
      return out;
    });
  }
  /* 380 canvas units to the meter along the run-out, so the farthest the release
     slider can send the bottle, 1.79 m, still stands on the scale. The chute is drawn
     170 units deep above its floor and the three pieces ride in it at three depths, so
     that none of them is drawn over another at the moment they are let go. */
  const SCM = 380, GX = 540, GY = 478, CH = 170, TOPX = 141, TOPY = 268, RX = 1319;
  const ANG = Math.atan2(GY - TOPY, GX - TOPX);
  const at = (s) => (s < RAMP ? [GX - (RAMP - s) * SCM * Math.cos(ANG), GY - (RAMP - s) * SCM * Math.sin(ANG)] : [GX + (s - RAMP) * SCM, GY]);
  function draw() {
    const { ctx } = begin(d.c);
    if (!track) build();
    const t = cy.now(), i = Math.min(N - 1, Math.round(t / DT));
    const cB = C('magnetic-field'), cI = C('current'), cF = C('force'), cV = C('velocity'), cP = C('position');
    /* the chute: a floor from the top of the ramp to the end of the run-out, and its far
       wall drawn a fixed depth above it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath();
    ctx.moveTo(TOPX, TOPY); ctx.lineTo(GX, GY); ctx.lineTo(RX, GY); ctx.lineTo(RX, GY - CH); ctx.lineTo(GX, GY - CH); ctx.lineTo(TOPX, TOPY - CH); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, TOPX, TOPY - CH, GX, GY - CH, alpha(PAL.ink, 0.3), 2, [10, 10]);
    line(ctx, GX, GY - CH, RX, GY - CH, alpha(PAL.ink, 0.3), 2, [10, 10]);
    line(ctx, TOPX, TOPY, GX, GY, PAL.ink, 5); line(ctx, GX, GY, RX, GY, PAL.ink, 5);
    /* the magnet buried under the run-out, and the field it sends up through the chute */
    const ma = GX + ZA * SCM, mb = GX + ZB * SCM;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(ma, GY + 6, mb - ma, 52); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(ma, GY + 6, mb - ma, 52); ctx.restore();
    text(ctx, 'N', (ma + mb) / 2, GY + 32, PAL.ink, { size: 24, weight: 700, align: 'center' });
    if (bS.v > 0.001) for (let x = ma + 24; x < mb; x += 40) arrow(ctx, x, GY + 2, x, GY - 30 - 70 * (bS.v / 0.9), cB, 2 + 2.5 * (bS.v / 0.9));
    label(ctx, 'the magnet, B = ' + fmt(bS.v, 2) + ' T', ma - 12, GY + 32, { side: 'left', size: 20, color: cB, leader: false });
    /* the scale the pieces come to rest against */
    for (let m = 0; m <= 2.0001; m += 0.5) { const x = GX + m * SCM; line(ctx, x, GY + 66, x, GY + 82, PAL.muted, 2); text(ctx, fmt(m, 1), x, GY + 100, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'distance past the foot of the ramp (m)', RX, GY + 128, cP, { size: 20, weight: 600, align: 'right' });
    /* the three pieces, each at its own depth in the chute, and where they have got to.
       The headline is written first so that the label queue can keep out of its band, the
       pieces and their arrows are drawn next, and the three names are queued last, so that
       none of them is ever set over another piece however close together they run. */
    const ends = ITEMS.map((it, j) => Math.max(0, track[j][2 * (N - 1)] - RAMP));
    const hl = topline(ctx, bS.v < 0.001
      ? 'With the magnet switched off all three pieces run the same ' + fmt(ends[2], 2) + ' m, whatever they are made of: only friction slows them.'
      : 'The copper fitting comes to rest ' + fmt(ends[1], 2) + ' m past the foot of the ramp, the aluminum can ' + fmt(ends[0], 2) + ' m and the plastic bottle runs on to ' + fmt(ends[2], 2) + ' m.');
    const lab = labeller(ctx, 640, { headline: hl });
    const state = ITEMS.map((it, j) => {
      const sv = track[j][2 * i], v = track[j][2 * i + 1], q = at(sv);
      const over = sv > RAMP && sv - RAMP >= ZA && sv - RAMP <= ZB;
      return { it, v, x: q[0], y: q[1] - 34 - j * 62, drive: over ? Math.min(1, (v / 2.8) * (bS.v / 0.9) * it.mat) : 0 };
    });
    state.forEach((e, j) => {
      /* three pieces a reader knows at sight, each about 50 units tall: a drink
         can standing up with its rim and tab, a copper elbow fitting with its two
         open sockets, and a bottle with its shoulders, neck and cap */
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel; ctx.lineJoin = 'round';
      if (j === 0) {
        const w = 30, h = 52, x = e.x - w / 2, y = e.y - h / 2;
        ctx.beginPath(); ctx.moveTo(x + 4, y + 8); ctx.lineTo(x, y + 14); ctx.lineTo(x, y + h - 8); ctx.lineTo(x + 4, y + h);
        ctx.lineTo(x + w - 4, y + h); ctx.lineTo(x + w, y + h - 8); ctx.lineTo(x + w, y + 14); ctx.lineTo(x + w - 4, y + 8); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(e.x, y + 8, w / 2 - 4, 4, 0, 0, TAU); ctx.fill(); ctx.stroke();   /* the rim */
        line(ctx, e.x - 6, y + 8, e.x + 5, y + 8, PAL.ink, 2.5);                                     /* the tab */
        line(ctx, x + 1, y + 24, x + w - 1, y + 24, alpha(PAL.ink, 0.35), 2); line(ctx, x + 1, y + h - 14, x + w - 1, y + h - 14, alpha(PAL.ink, 0.35), 2);
      } else if (j === 1) {
        const r = 12, a = 24;                                                                     /* an elbow: two sockets at right angles */
        ctx.beginPath();
        ctx.moveTo(e.x - a, e.y - r); ctx.lineTo(e.x + r, e.y - r); ctx.lineTo(e.x + r, e.y + a); ctx.lineTo(e.x - r, e.y + a);
        ctx.lineTo(e.x - r, e.y + r); ctx.lineTo(e.x - a, e.y + r); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(e.x - a, e.y, 4, r, 0, 0, TAU); ctx.fill(); ctx.stroke();       /* the open ends */
        ctx.beginPath(); ctx.ellipse(e.x, e.y + a, r, 4, 0, 0, TAU); ctx.fill(); ctx.stroke();
        line(ctx, e.x - a + 5, e.y - r, e.x - a + 5, e.y + r, PAL.ink, 2); line(ctx, e.x - r, e.y + a - 5, e.x + r, e.y + a - 5, PAL.ink, 2);   /* the socket shoulders */
      } else {
        const w = 26, h = 56, y = e.y - h / 2;
        ctx.beginPath(); ctx.moveTo(e.x - w / 2, y + h - 4); ctx.quadraticCurveTo(e.x - w / 2, y + h, e.x - w / 2 + 4, y + h);
        ctx.lineTo(e.x + w / 2 - 4, y + h); ctx.quadraticCurveTo(e.x + w / 2, y + h, e.x + w / 2, y + h - 4);
        ctx.lineTo(e.x + w / 2, y + 26); ctx.quadraticCurveTo(e.x + w / 2, y + 16, e.x + 6, y + 12); ctx.lineTo(e.x + 6, y + 4);
        ctx.lineTo(e.x - 6, y + 4); ctx.lineTo(e.x - 6, y + 12); ctx.quadraticCurveTo(e.x - w / 2, y + 16, e.x - w / 2, y + 26); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.rect(e.x - 8, y - 2, 16, 8); ctx.fill(); ctx.stroke();                 /* the cap */
        line(ctx, e.x - w / 2 + 1, y + 34, e.x + w / 2 - 1, y + 34, alpha(PAL.ink, 0.35), 2);       /* the label's edge */
      }
      ctx.restore();
      lab.place({ l: e.x - 28, r: e.x + 28, t: e.y - 32, b: e.y + 30 });
      if (e.drive > 0.02) {
        swirl(ctx, e.x, e.y, 10, true, cI, 2.5);
        const fx = e.x - 30 - 30 - 60 * e.drive;
        arrow(ctx, e.x - 30, e.y, fx, e.y, cF, 4.5);
        if (j === 0) lab.add('F', fx, e.y, -1, 0, cF, 21, 16);
      }
      if (e.v > 0.05) {
        const vx = e.x + 30 + 20 + 40 * (e.v / 2.8);
        arrow(ctx, e.x + 30, e.y, vx, e.y, cV, 4);
        if (j === 0) lab.add('v', vx, e.y, 1, 0, cV, 21, 16);
      }
    });
    state.forEach((e) => lab.add(e.it.name, e.x, e.y - 30, 0, -1, PAL.ink, 19, 16));
    lab.flush();
    const speeds = state.map((e) => e.v);
    readout(d.readout,
      `\\kBmag = ${fmt(bS.v, 2)}\\ \\text{T}:\\quad \\kv = ${fmt(speeds[0], 2)},\\ ${fmt(speeds[1], 2)},\\ ${fmt(speeds[2], 2)}\\ \\text{m/s}\\quad\\text{at } \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      'The drag on a conductor is proportional to its speed and acts only where the field reaches, so each metal loses most of what it had over the magnet and stops short, while the bottle carries its speed straight past. The sorting works on every metal, not only on the ones a magnet would pick up when they are standing still.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RUN / 5), draw });
})();
};
