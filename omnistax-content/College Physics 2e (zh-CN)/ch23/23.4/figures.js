/* Figures for section 23.4 Eddy Currents and Magnetic Damping.

   The page binds the five types ch23/COLOR.md gives it — magnetic-field, current,
   force, velocity and position — and one more, time, because two of its figures
   graph a displacement against time and their readouts state how long a swing
   takes to die away. Every field arrow and every cross wears the field hue, every
   eddy current loop the current hue, every drag arrow the force hue, every speed
   the velocity hue, and every displacement, position and distance the position
   hue. The things the text points at are the section's referents and wear their
   referent colours through F.ref: the three bobs and their magnet, the plate, the
   balance and its disc, and the can, the fitting, the bottle, the ramp and the
   magnet under it. The flux is not drawn as a quantity, since the section prints
   no flux symbol and no equation; the part of a plate that lies in the field is an
   area, bracketed in ink, and whether the flux through it is growing, steady or
   falling is said in words. The three pendulum bobs are three referents, so each
   bob, its name and its curve on the graph take its referent colour.

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
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, labeller, note, hbracket, vbracket, axes, curve, pinned, fixed, hover, view, face } = F;
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
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.8, step: 0.05, value: 0.5, unit: 'T', dec: 2, onInput: reset, aria: '两极之间磁场的磁感应强度' });
  const aS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 4, max: 14, step: 1, value: 10, unit: 'cm', dec: 0, onInput: reset, aria: '三个摆锤释放时的位移' });
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
  const solid = (ctx, V, faces, color) => faces.forEach((f) => {
    if (facing(f.n) <= 0.02) return;
    const q = f.pts.map((p) => V.P(p));
    if (!color) { face(ctx, q, V.shade(f.n), 2.5); return; }
    face(ctx, q, V.shade(f.n));
    ctx.save(); ctx.beginPath(); q.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
  });
  const GAP = 46, PW = 74, PZ = 96, LR = 205, SC = 8;   /* eight canvas units to the centimeter of swing, so the widest swing the slider reaches, 14 cm, is 112 units of a 205-unit rod */
  const COLS = [
    { k: 'solid', id: 'solid-bob', name: '实心金属摆锤', dash: [] },
    { k: 'slotted', id: 'slotted-bob', name: '开槽金属摆锤', dash: [15, 9] },
    { k: 'insulating', id: 'insulating-bob', name: '绝缘摆锤', dash: [5, 8] },
  ];
  const VIEWS = [250, 700, 1150].map((cx) => view({ yaw: YAW, pitch: PITCH, dist: DIST, cx, cy: 385 }));

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), cB = C('magnetic-field'), cI = C('current'), cF = C('force');
    const vmax = aS.v * (TAU / TP);           /* the greatest speed any bob reaches, at the first pass through the middle */
    COLS.forEach((col, i) => {
      const V = VIEWS[i], P = (p) => V.P(p), cc = F.ref(col.id), cMag = F.ref('pendulum-magnet');
      const x = xOf(col.k, t), v = vOf(col.k, t);
      const sn = (x * SC) / LR, th = Math.asin(Math.max(-1, Math.min(1, sn))), cs = Math.cos(th);
      /* what this bob is made of, named once above its own apparatus (rule 26.7) */
      text(ctx, col.name, 250 + i * 450, 106, cc, { size: 21, weight: 600, align: 'center' });
      /* the beam the pendulum hangs from, the magnet's base and its two poles */
      solid(ctx, V, boxOf(-36, 36, LR + 8, LR + 38, -120, 120));
      solid(ctx, V, boxOf(-(GAP + PW), GAP + PW, -186, -118, -PZ, PZ), cMag);
      solid(ctx, V, boxOf(-(GAP + PW), -GAP, -118, 42, -PZ, PZ), cMag);
      solid(ctx, V, boxOf(GAP, GAP + PW, -118, 42, -PZ, PZ), cMag);
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
      /* the north pole stands between the viewer and the gap, so it is drawn again over the bob, see-through */
      ctx.save(); ctx.globalAlpha = 0.55; solid(ctx, V, boxOf(GAP, GAP + PW, -118, 42, -PZ, PZ), cMag); ctx.restore();
      text(ctx, 'N', pN[0], pN[1], PAL.ink, { size: 24, weight: 700, align: 'center' });
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
    const { X, Y } = axes(ctx, box, [0, RUN], [-14, 14], { xl: '时间 t (s)', xc: C('time'), yl: '位移 x (cm)', yc: C('position'), nx: 4, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    COLS.forEach((col, i) => {
      ctx.save(); ctx.setLineDash(col.dash);
      if (t > 0.001) curve(ctx, (q) => xOf(col.k, q), 0, t, X, Y, F.ref(col.id), i ? 3.5 : 4.5, Math.min(2200, Math.ceil((60 * t) / TP) + 20));
      ctx.restore();
      dot(ctx, X(t), Y(xOf(col.k, t)), F.ref(col.id), true, 8);
    });
    const now = COLS.map((c) => fmt(swing(c.k, t), 1));
    topline(ctx, bS.v < 0.001
      ? '磁体关闭时，三个摆锤的摆动完全一样：无论它们由什么制成，都没有任何东西使它们受到阻尼。'
      : t < 0.05
        ? '三个摆锤一起从 ' + fmt(aS.v, 0) + ' cm 处释放，其一是实心金属板，其一是开槽板，其一是绝缘体。'
        : '经过 ' + fmt(t, 1) + ' s 后，实心摆锤的摆幅为 ' + now[0] + ' cm，开槽摆锤为 ' + now[1] + ' cm，绝缘体为 ' + now[2] + ' cm。');
    readout(d.readout,
      `\\kx = ${now[0]}\\ \\text{cm（实心）},\\ ${now[1]}\\ \\text{cm（开槽）},\\ ${now[2]}\\ \\text{cm（绝缘）}\\quad\\text{在 } \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      '阻力与速率成正比，所以摆锤经过两极时阻力最大，随着摆动衰减而减小。实心摆锤中的涡流最大，最先被止住，开槽摆锤中的涡流较小，且相互对抗，绝缘体中的涡流几乎没有。');
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
  const pS = ctl(d.controls, { label: '\\kx', cls: 'position', min: -22, max: 22, step: 0.5, value: -9, unit: 'cm', dec: 1, aria: '板所在的位置，从磁场中央量起' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.8, step: 0.05, value: 0.5, unit: 'T', dec: 2, aria: '两极之间磁场的磁感应强度' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 'm/s', dec: 2, aria: '板穿过磁场的速率' });
  const mC = choice(d.controls, { label: '\\text{板是}', options: [{ value: 'solid', label: '实心的' }, { value: 'slotted', label: '开槽的' }, { value: 'insulating', label: '绝缘的' }], value: 'solid', aria: '板的材料，以及是否开槽' });
  /* Twenty canvas units to the centimeter: the plate is 12 cm across and the field
     24 cm across and 14 cm deep, so the plate can be walked right out of the field on
     either side and still stand on the canvas. */
  const SC = 20, X0 = 700, Y0 = 340, PH = 6, FH = 12, FV = 7;
  /* a change of plate carries its conductivity from one value to the other, so the loops, the drag and its curve shrink or grow instead of cutting */
  const mat = () => mC.mix((m) => MAT[m]);
  const dragAt = (p) => {
    const inL = p - PH < -FH && p + PH > -FH, inR = p - PH < FH && p + PH > FH;
    return (inL || inR) ? mat() * (bS.v / 0.8) * (bS.v / 0.8) * (vS.v / 0.6) : 0;
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
    text(ctx, 'B = ' + fmt(bS.v, 2) + ' T，垂直纸面向里', 180, 140, cB, { size: 21, weight: 600 });
    /* the speed the plate is given */
    const vlen = 60 + 110 * (vS.v / 0.6);
    arrow(ctx, cx, 178, cx + vlen, 178, cV, 5);
    label(ctx, 'v = ' + fmt(vS.v, 2) + ' m/s', cx + vlen, 178, { side: 'right', size: 21, color: cV, leader: false });
    /* the plate, over the field, with the field still drawn through the part of it that lies inside */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(pl, pt, pr - pl, pb - pt); ctx.strokeStyle = F.ref('plate'); ctx.lineWidth = 4; ctx.strokeRect(pl, pt, pr - pl, pb - pt); ctx.restore();
    const ol = Math.max(pl, fl), or = Math.min(pr, fr);
    if (or > ol) {
      ctx.save(); ctx.beginPath(); ctx.rect(ol, pt, or - ol, pb - pt); ctx.clip();
      ctx.fillStyle = alpha(cB, 0.1); ctx.fillRect(ol, pt, or - ol, pb - pt);
      if (bS.v > 0.001) marks.forEach((m) => cross(ctx, m[0], m[1], 10, cB, 2 + 2 * (bS.v / 0.8)));
      ctx.restore();
      hbracket(ctx, ol, or, 545, cP, '板有 ' + fmt((or - ol) / SC, 1) + ' cm 在磁场中', { side: 'below' });
    } else {
      text(ctx, '板完全不在磁场中', cx, 552, PAL.muted, { size: 19, align: 'center' });
    }
    /* the eddy current: one large loop in a solid plate, small loops that run opposite
       ways in a slotted one, and nothing worth drawing in an insulator */
    const entering = p - PH < -FH && p + PH > -FH, leaving = p - PH < FH && p + PH > FH;
    const ccw = entering;                      /* entering, the amount of the plate in the field grows and the current runs counterclockwise */
    const drag = dragAt(p);
    const aSlot = mC.a('slotted'), aSolid = mC.a('solid'), aIns = mC.a('insulating');
    if (aSlot > 0) {
      ctx.save(); ctx.globalAlpha = aSlot;
      [-2.4, 0, 2.4].forEach((k) => line(ctx, cx + k * SC, pt + 18, cx + k * SC, pb - 18, PAL.ink, 3));
      if (drag > 0.0005) [-1, 1].forEach((r, ri) => [-3.6, -1.2, 1.2, 3.6].forEach((k, ci) => swirl(ctx, cx + k * SC, Y0 + r * 52, 16, (ri + ci) % 2 ? !ccw : ccw, cI, 2.5)));
      ctx.restore();
    }
    if (aSolid > 0 && drag > 0.0005) {
      ctx.save(); ctx.globalAlpha = aSolid; loopArrows(ctx, cx, Y0, PH * SC - 32, PH * SC - 32, ccw, cI, 4.5); ctx.restore();
    }
    if (drag > 0.0005 && aIns < 1) label(ctx, 'I 沿' + (ccw ? '逆时针' : '顺时针') + '方向流动', cx, 500, { side: 'above', size: 21, color: alpha(cI, 1 - aIns), leader: false, gap: 0 });
    if (aIns > 0) label(ctx, '无电流：板不导电', cx, 500, { side: 'above', size: 20, color: alpha(PAL.muted, aIns), leader: false, gap: 0 });
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
    const { X, Y } = axes(ctx, box, [-24, 24], [0, 1], { xl: '板所在的位置 x (cm)', xc: cP, yl: '阻力 F（占最大值的比例）', yc: cF, nx: 4, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 2) });
    const lvl = mat() * (bS.v / 0.8) * (bS.v / 0.8) * (vS.v / 0.6);
    [[-FH - PH, -FH + PH], [FH - PH, FH + PH]].forEach(([a, b]) => {
      line(ctx, X(a), Y(0), X(a), Y(lvl), cF, 4); line(ctx, X(a), Y(lvl), X(b), Y(lvl), cF, 5); line(ctx, X(b), Y(lvl), X(b), Y(0), cF, 4);
    });
    [[-24, -FH - PH], [-FH + PH, FH - PH], [FH + PH, 24]].forEach(([a, b]) => line(ctx, X(a), Y(0), X(b), Y(0), cF, 5));
    const marker = pinned(ctx, box, X, Y, p, drag, cF, fmt(drag, 2));
    const where = entering ? '正在进入磁场' : leaving ? '正在离开磁场' : Math.abs(p) < FH - PH ? 'inside' : 'clear';
    topline(ctx, mC.value === 'insulating'
      ? '绝缘板无论处在哪里都没有涡流，所以磁体根本不会使它减慢。'
      : where === 'inside'
        ? '板完全处于磁场内，所以穿过它的磁场没有任何变化：没有电流流动，也没有阻力。'
        : where === 'clear'
          ? '板处在两极之外，那里没有磁场可以在它里面感应出任何东西。'
          : '板' + where + '，所以它处在磁场中的部分在变化，电流沿' + (ccw ? '逆时针' : '顺时针') + '方向流动，作用在它上的力向左。');
    readout(d.readout,
      `\\kF = ${fmt(drag, 2)}`,
      '磁场为 ' + fmt(bS.v, 2) + ' T，板以 ' + fmt(vS.v, 2) + ' m/s 运动并位于 ' + fmt(p, 1) + ' cm 处时，阻力就是最大值的那一比例。槽缝使同一个电动势在许多小环路中驱动电流，这些小环路所受的力几乎完全抵消。');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => [
    { x: X0 + pS.v * SC, y: Y0, r: PH * SC, name: ({ solid: '实心', slotted: '开槽', insulating: '绝缘' })[mC.value] + '板，宽 12 cm' },
    { x: X0, y: Y0 - FV * SC + 24, r: 70, name: '两极之间的磁场，' + fmt(bS.v, 2) + ' T，垂直纸面向里' },
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
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.6, step: 0.05, value: 0.35, unit: 'T', dec: 2, onInput: reset, aria: '圆盘转动处磁场的磁感应强度' });
  const aS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 2, max: 20, step: 1, value: 14, unit: 'mm', dec: 0, onInput: reset, aria: '释放横梁前秤盘被抬起的高度' });
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
    if (bS.v > 0.001) [[-72, -34], [72, -34], [-72, 34], [72, 34]].forEach((m) => cross(ctx, PX + m[0], PY + m[1], 12, cB, 2 + 2 * (bS.v / 0.6)));
    text(ctx, 'B = ' + fmt(bS.v, 2) + ' T，垂直纸面向里', PX + 118, PY - 100, cB, { size: 21, weight: 600 });
    /* the disc on the beam's shaft, which turns with it */
    const cDisc = F.ref('disc'), cBal = F.ref('balance');
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(PX, PY, 46, 0, TAU); ctx.fill(); ctx.strokeStyle = cDisc; ctx.lineWidth = 3.5; ctx.stroke(); ctx.restore();
    const drive = Math.min(1, (speed(t) / (aS.v * (TAU / TP) || 1)) * (bS.v / 0.6));
    if (drive > 0.02) {
      swirl(ctx, PX, PY, 29, y <= 0, cI, 3 + 2 * drive);
      const s = y > 0 ? 1 : -1, tail = PX, tip = tail + s * (40 + 110 * drive);
      arrow(ctx, tail, PY - 72, tip, PY - 72, cF, 5);
      label(ctx, 'F', tip, PY - 72, { side: s > 0 ? 'right' : 'left', size: 22, color: cF, leader: false });
    }
    /* the beam, its two pans, and the level it settles to */
    line(ctx, PX - 360, PY, PX + 360, PY, alpha(PAL.ink, 0.35), 2, [10, 10]);
    const lx = PX - HALF * cs, ly = PY - HALF * sn, rx = PX + HALF * cs, ry = PY + HALF * sn;
    line(ctx, lx, ly, rx, ry, cBal, 7);
    [[lx, ly], [rx, ry]].forEach(([ex, ey]) => {
      line(ctx, ex, ey, ex, ey + 92, cBal, 2.5);
      ctx.save(); ctx.strokeStyle = cBal; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.ellipse(ex, ey + 100, 56, 15, 0, 0, Math.PI); ctx.stroke(); ctx.restore();
      line(ctx, ex - 56, ey + 100, ex + 56, ey + 100, cBal, 3.5);
      dot(ctx, ex, ey, cBal, true, 7);
    });
    if (Math.abs(y) > 0.4) vbracket(ctx, lx - 74, PY, ly, cP, fmt(Math.abs(y), 1) + ' mm', -1, { size: 21 });
    label(ctx, '圆盘随横梁一起转动', PX, PY + 56, { side: 'below', size: 19, color: cDisc, gap: 30 });
    /* the graph: how the pan settles. Both ranges are fixed — the whole six seconds the
       figure runs, and the slider's own 20 mm on either side of the level. */
    const box = { l: 170, r: 1250, t: 590, b: 760 };
    const { X, Y } = axes(ctx, box, [0, RUN], [-20, 20], { xl: '时间 t (s)', xc: C('time'), yl: '秤盘偏离水平位置的距离 (mm)', yc: cP, nx: 3, ny: 4, fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    [1, -1].forEach((s) => line(ctx, box.l, Y(s), box.r, Y(s), alpha(PAL.ink, 0.4), 2, [4, 8]));
    text(ctx, '任一侧一格', box.r - 10, Y(1) - 18, PAL.muted, { size: 17, align: 'right' });
    ctx.save(); ctx.setLineDash([10, 10]);
    [1, -1].forEach((s) => curve(ctx, (q) => s * env(q), 0, RUN, X, Y, alpha(cP, 0.5), 2.5, 200));
    ctx.restore();
    if (t > 0.001) curve(ctx, lift, 0, t, X, Y, cP, 4.5, Math.min(2200, Math.ceil((60 * t) / TP) + 20));
    dot(ctx, X(t), Y(y), cP, true, 9);
    const settle = rate() > 0.0001 ? Math.log(Math.max(1.0001, aS.v)) / rate() : Infinity;
    topline(ctx, bS.v < 0.001
      ? '间隙中没有磁场时，没有任何东西使横梁受到阻尼，这样一台无摩擦的天平会一直摆动，你愿意看多久，它就摆多久。'
      : settle > RUN
        ? '' + fmt(bS.v, 2) + ' T 的磁场太弱，不能在六秒内使这根横梁静止下来，秤盘仍偏离水平位置 ' + fmt(Math.abs(y), 1) + ' mm。'
        : '圆盘处在 ' + fmt(bS.v, 2) + ' T 的磁场中时，秤盘在 ' + fmt(settle, 1) + ' s 后进入一格以内，此时横梁所受的阻力已降到最大值的 ' + fmt(drive, 2) + ' 倍。');
    readout(d.readout,
      `\\kBmag = ${fmt(bS.v, 2)}\\ \\text{T}:\\quad \\kx = ${fmt(y, 1)}\\ \\text{mm},\\quad \\kF = ${fmt(drive, 2)}\\quad\\text{在 } \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      '涡流只在圆盘转动时才有，所以阻力与速率成正比，并随速率一同消失。秤盘一旦静止，就没有什么能使横梁偏离其真实读数，这正是这种阻尼可以放心用在仪器上的原因。');
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
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 0.9, step: 0.05, value: 0.6, unit: 'T', dec: 2, onInput: reset, aria: '斜面下方磁体的磁感应强度' });
  const rS = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.2, max: 0.85, step: 0.05, value: 0.7, unit: 'm', dec: 2, onInput: reset, aria: '物块在斜面上多高处释放' });
  const RUN = 6, DT = 0.01, N = Math.round(RUN / DT) + 1;
  const RAMP = 1.2, AINC = 4.56, MU = 2.16, ZA = 0.25, ZB = 0.75, DRAGK = 10;
  const ITEMS = [{ mat: 1, id: 'can', name: '铝罐' }, { mat: 1.8, id: 'fitting', name: '铜管件' }, { mat: 0, id: 'bottle', name: '塑料瓶' }];
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
    const cRamp = F.ref('ramp');
    line(ctx, TOPX, TOPY, GX, GY, cRamp, 5); line(ctx, GX, GY, RX, GY, cRamp, 5);
    /* the magnet buried under the run-out, and the field it sends up through the chute */
    const ma = GX + ZA * SCM, mb = GX + ZB * SCM;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(ma, GY + 6, mb - ma, 52); ctx.strokeStyle = F.ref('ramp-magnet'); ctx.lineWidth = 3; ctx.strokeRect(ma, GY + 6, mb - ma, 52); ctx.restore();
    text(ctx, 'N', (ma + mb) / 2, GY + 32, PAL.ink, { size: 24, weight: 700, align: 'center' });
    if (bS.v > 0.001) for (let x = ma + 24; x < mb; x += 40) arrow(ctx, x, GY + 2, x, GY - 30 - 70 * (bS.v / 0.9), cB, 2 + 2.5 * (bS.v / 0.9));
    label(ctx, '磁体，B = ' + fmt(bS.v, 2) + ' T', ma - 12, GY + 32, { side: 'left', size: 20, color: cB, leader: false });
    /* the scale the pieces come to rest against */
    for (let m = 0; m <= 2.0001; m += 0.5) { const x = GX + m * SCM; line(ctx, x, GY + 66, x, GY + 82, PAL.muted, 2); text(ctx, fmt(m, 1), x, GY + 100, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, '越过斜面底端的距离 (m)', RX, GY + 128, cP, { size: 20, weight: 600, align: 'right' });
    /* the three pieces, each at its own depth in the chute, and where they have got to.
       The headline is written first so that the label queue can keep out of its band, the
       pieces and their arrows are drawn next, and the three names are queued last, so that
       none of them is ever set over another piece however close together they run. */
    const ends = ITEMS.map((it, j) => Math.max(0, track[j][2 * (N - 1)] - RAMP));
    const hl = topline(ctx, bS.v < 0.001
      ? '磁体关闭时，三个物块运行的距离都是 ' + fmt(ends[2], 2) + ' m，无论它们由什么制成：使它们减慢的只有摩擦。'
      : '铜管件在越过斜面底端 ' + fmt(ends[1], 2) + ' m 处停下，铝罐在 ' + fmt(ends[0], 2) + ' m 处停下，塑料瓶一直运行到 ' + fmt(ends[2], 2) + ' m 处。');
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
      const cIt = F.ref(e.it.id);
      ctx.save(); ctx.strokeStyle = cIt; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel; ctx.lineJoin = 'round';
      if (j === 0) {
        const w = 30, h = 52, x = e.x - w / 2, y = e.y - h / 2;
        ctx.beginPath(); ctx.moveTo(x + 4, y + 8); ctx.lineTo(x, y + 14); ctx.lineTo(x, y + h - 8); ctx.lineTo(x + 4, y + h);
        ctx.lineTo(x + w - 4, y + h); ctx.lineTo(x + w, y + h - 8); ctx.lineTo(x + w, y + 14); ctx.lineTo(x + w - 4, y + 8); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(e.x, y + 8, w / 2 - 4, 4, 0, 0, TAU); ctx.fill(); ctx.stroke();   /* the rim */
        line(ctx, e.x - 6, y + 8, e.x + 5, y + 8, cIt, 2.5);                                     /* the tab */
        line(ctx, x + 1, y + 24, x + w - 1, y + 24, alpha(PAL.ink, 0.35), 2); line(ctx, x + 1, y + h - 14, x + w - 1, y + h - 14, alpha(PAL.ink, 0.35), 2);
      } else if (j === 1) {
        const r = 12, a = 24;                                                                     /* an elbow: two sockets at right angles */
        ctx.beginPath();
        ctx.moveTo(e.x - a, e.y - r); ctx.lineTo(e.x + r, e.y - r); ctx.lineTo(e.x + r, e.y + a); ctx.lineTo(e.x - r, e.y + a);
        ctx.lineTo(e.x - r, e.y + r); ctx.lineTo(e.x - a, e.y + r); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(e.x - a, e.y, 4, r, 0, 0, TAU); ctx.fill(); ctx.stroke();       /* the open ends */
        ctx.beginPath(); ctx.ellipse(e.x, e.y + a, r, 4, 0, 0, TAU); ctx.fill(); ctx.stroke();
        line(ctx, e.x - a + 5, e.y - r, e.x - a + 5, e.y + r, cIt, 2); line(ctx, e.x - r, e.y + a - 5, e.x + r, e.y + a - 5, cIt, 2);   /* the socket shoulders */
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
    state.forEach((e) => lab.add(e.it.name, e.x, e.y - 30, 0, -1, F.ref(e.it.id), 19, 16));
    lab.flush();
    const speeds = state.map((e) => e.v);
    readout(d.readout,
      `\\kBmag = ${fmt(bS.v, 2)}\\ \\text{T}:\\quad \\kv = ${fmt(speeds[0], 2)},\\ ${fmt(speeds[1], 2)},\\ ${fmt(speeds[2], 2)}\\ \\text{m/s}\\quad\\text{在 } \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      '导体所受的阻力与其速率成正比，且只在磁场所及之处起作用，所以每种金属在磁体上方都损失掉它原有的大部分速率而提前停下，而塑料瓶则带着它的速率径直通过。这种分选对每一种金属都有效，不只是对那些静止时能被磁体吸起的金属。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RUN / 5), draw });
})();
};
