/* Figures for section 23.7 Transformers. The page binds magnetic-flux,
   voltage, current and power, which is what ch23/COLOR.md gives it, together
   with two the plan argues for: resistance, since sim-power-line carries the
   resistance of the transmission line on a slider and states the loss that
   Chapter 20's P = I²R makes of it, and time, which the axis of sim-dc-ac
   carries. The section never names the magnetic field, and this page never
   binds it: what the core carries from one coil to the other is the flux, and
   the flux hue is what it is drawn in. The plant, the step-up transformer, the
   line's towers, the substation, the pole transformer and the house, and the
   primary, the secondary and the core, are the section's referents and wear
   their referent colours through F.ref; the variables rows of V, I and P name
   the primary and the secondary, so their subscripts wear the same colours.
   Every wire carries the current hue, and the number of turns, the turns ratio
   and the percentages stay in ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, register, begin, line, arrow, dot, text, topline, label, axes, curve, pinned, note, hover, view, house } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* =====================================================================
   FIGURE 23.26: the power distribution line. The book's drawing fixes the
   transmission line at 400 kV and says, without showing it, that a higher
   voltage needs less current for the same power and so wastes less of it in
   the line. Here the voltage, the power delivered and the resistance of the
   line are all on sliders, the current and the loss are stated on the line
   itself, and the graph below carries the loss against the voltage, so the
   reader can see how steeply it falls. Still: the power flows steadily and
   nothing here has a clock (rule 14). It opens on the book's own 400 kV and
   on the 1000 MW and 2.00 Ω of the section's eighth problem.
===================================================================== */
(function () {
  const H = 940;
  const d = sim('sim-power-line', H);
  const vS = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 100, max: 700, step: 10, value: 400, unit: 'kV', dec: 0, aria: '输电线路所用的电压' });
  const pS = ctl(d.controls, { label: '\\kP', cls: 'power', min: 100, max: 1000, step: 50, value: 1000, unit: 'MW', dec: 0, aria: '线路输送的功率' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'Ω', dec: 2, aria: '输电线路的电阻' });

  const GY = 440;                                    /* the ground line */
  /* Fixed ranges, stated once and never rescaled: the voltage spans the whole
     of the slider, and the loss axis is set from the default power and
     resistance, where the curve enters the box at about 220 kV; a setting that
     wastes more than 40 MW is pinned at the top edge. */
  const VLO = 100, VHI = 700, LMAX = 40;

  function ground(ctx) {
    line(ctx, 40, GY, 1360, GY, PAL.muted, 3);
  }
  /* the plant: a hall with a row of windows and three chimneys beside it */
  function plant(ctx) {
    const pc = F.ref('plant');
    ctx.save();
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = pc; ctx.lineWidth = 4;
    ctx.fillRect(118, 348, 128, GY - 348); ctx.strokeRect(118, 348, 128, GY - 348);
    ctx.fillStyle = PAL.ink;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) ctx.fillRect(130 + i * 29, 362 + j * 34, 18, 20);
    [[74, 258], [95, 272], [116, 286]].forEach(([x, t]) => {
      ctx.fillStyle = PAL.panel; ctx.strokeStyle = pc; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(x - 7, GY); ctx.lineTo(x - 5, t); ctx.lineTo(x + 5, t); ctx.lineTo(x + 7, GY); ctx.closePath(); ctx.fill(); ctx.stroke();
    });
    ctx.restore();
  }
  /* a transformer on the ground: a canister with a domed top, as the book draws it */
  function canister(ctx, x, w, h, id) {
    const t = GY - h, cc = F.ref(id);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = cc; ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x - w / 2, GY); ctx.lineTo(x - w / 2, t + w / 2);
    ctx.arc(x, t + w / 2, w / 2, Math.PI, 0);
    ctx.lineTo(x + w / 2, GY); ctx.closePath(); ctx.fill(); ctx.stroke();
    line(ctx, x - w / 2 - 6, GY - h * 0.28, x + w / 2 + 6, GY - h * 0.28, cc, 3);
    ctx.restore();
    return t;
  }
  /* a lattice tower, its two crossarms carrying the line */
  function tower(ctx, cx) {
    const top = 250, halfB = 40, halfT = 11;
    const legX = (y, s) => cx + s * (halfT + (halfB - halfT) * ((y - top) / (GY - top)));
    ctx.save(); ctx.strokeStyle = F.ref('power-line'); ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
    [-1, 1].forEach((s) => { ctx.beginPath(); ctx.moveTo(legX(top, s), top); ctx.lineTo(legX(GY, s), GY); ctx.stroke(); });
    ctx.lineWidth = 2;
    const ys = [top, 288, 326, 364, 402, GY];
    ys.forEach((y) => { ctx.beginPath(); ctx.moveTo(legX(y, -1), y); ctx.lineTo(legX(y, 1), y); ctx.stroke(); });
    for (let i = 0; i < ys.length - 1; i++) {
      ctx.beginPath(); ctx.moveTo(legX(ys[i], -1), ys[i]); ctx.lineTo(legX(ys[i + 1], 1), ys[i + 1]);
      ctx.moveTo(legX(ys[i], 1), ys[i]); ctx.lineTo(legX(ys[i + 1], -1), ys[i + 1]); ctx.stroke();
    }
    ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.moveTo(cx - 48, 262); ctx.lineTo(cx + 48, 262); ctx.moveTo(cx - 30, 240); ctx.lineTo(cx + 30, 240); ctx.stroke();
    ctx.restore();
  }
  /* a wooden pole with one crossarm */
  function pole(ctx, cx, top) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(cx, GY); ctx.lineTo(cx, top); ctx.moveTo(cx - 24, top + 10); ctx.lineTo(cx + 24, top + 10); ctx.stroke();
    ctx.restore();
  }
  /* one span of wire, sagging between its two supports */
  function span(ctx, x1, y1, x2, y2, sag, color, w) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo((x1 + x2) / 2, (y1 + y2) / 2 + 2 * sag, x2, y2); ctx.stroke(); ctx.restore();
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const V = vS.v, P = pS.v, R = rS.v;
    const I = (P * 1000) / V;                          /* MW and kV give amperes directly */
    const lossOf = (v) => { const i = (P * 1000) / v; return (i * i * R) / 1e6; };
    const loss = lossOf(V), frac = (100 * loss) / P;
    const cV = C('voltage'), cI = C('current'), cP = C('power'), cR = C('resistance');

    ground(ctx);
    plant(ctx);
    const upTop = canister(ctx, 302, 42, 58, 'step-up');
    [440, 610, 780].forEach((x) => tower(ctx, x));
    const subTop = canister(ctx, 888, 50, 70, 'substation');
    pole(ctx, 995, 322); pole(ctx, 1088, 322);
    /* the pole transformer: a small cylinder hung on the last pole */
    pole(ctx, 1175, 322);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = F.ref('pole-transformer'); ctx.lineWidth = 3.5;
    ctx.fillRect(1163, 340, 26, 44); ctx.strokeRect(1163, 340, 26, 44); ctx.restore();
    house(ctx, 1282, GY, 104, 1, F.ref('house'));

    /* the wires: every one of them carries the current, so every one is drawn
       in the current hue, and the line between the towers is drawn heavier
       because it is the one the figure is about */
    span(ctx, 246, 372, 281, upTop + 8, 3, cI, 3);
    span(ctx, 323, upTop + 8, 392, 262, 4, cI, 4.5);
    span(ctx, 392, 262, 562, 262, 13, cI, 4.5);
    span(ctx, 658, 262, 732, 262, 6, cI, 4.5);
    span(ctx, 828, 262, 864, subTop + 10, 4, cI, 4.5);
    span(ctx, 912, subTop + 10, 971, 332, 4, cI, 3);
    span(ctx, 1019, 332, 1064, 332, 5, cI, 3);
    span(ctx, 1112, 332, 1163, 352, 4, cI, 3);
    span(ctx, 1189, 358, 1252, 380, 4, cI, 3);
    /* the line runs on through the second and third towers */
    span(ctx, 562, 262, 658, 262, 8, cI, 4.5);
    span(ctx, 732, 262, 828, 262, 8, cI, 4.5);

    /* the voltage at each stage of the line, and the current the line carries */
    label(ctx, '12 kV', 264, 366, { side: 'above', size: 21, color: cV, gap: 18, H });
    label(ctx, fmt(V, 0) + ' kV', 695, 280, { side: 'above', size: 22, color: cV, gap: 26, H });
    label(ctx, 'I = ' + fmt(I, 0) + ' A', 525, 288, { side: 'below', size: 22, color: cI, gap: 22, H });
    label(ctx, '13 kV', 1042, 337, { side: 'above', size: 21, color: cV, gap: 18, H });
    label(ctx, '240 V', 1222, 371, { side: 'above', size: 21, color: cV, gap: 18, H });

    /* the names the book gives the stages, set under the ground line */
    const stage = (x, id, a, b) => {
      const c = F.ref(id);
      text(ctx, a, x, 476, c, { size: 18, align: 'center' });
      if (b) text(ctx, b, x, 500, c, { size: 18, align: 'center' });
    };
    stage(150, 'plant', '发电厂');
    stage(302, 'step-up', '升压', '变压器');
    stage(610, 'power-line', '高压', '输电线');
    stage(888, 'substation', '降压变压器', '（变电站）');
    stage(1130, 'pole-transformer', '降压', '变压器');

    hits = [
      { x: 160, y: 390, r: 90, name: '发电厂，其发电机输出约 12 kV' },
      { x: 302, y: 400, r: 46, name: '升压变压器，把电压升高以便远距离输电' },
      { x: 610, y: 300, r: 130, name: '高压输电线，电压越高，电流越小，损失的功率越少' },
      { x: 888, y: 390, r: 52, name: '变电站，其降压变压器把电压降回几千伏' },
      { x: 1175, y: 362, r: 46, name: '电线杆上的降压变压器，向住宅供电 240 V' },
      { x: 1282, y: 390, r: 70, name: '线路末端的住宅，供电电压 240 V' },
    ];

    /* the graph: the power the line wastes against the voltage it is run at */
    const box = { l: 250, r: 1230, t: 640, b: 850 };
    const { X, Y } = axes(ctx, box, [VLO, VHI], [0, LMAX], {
      xl: '输电电压 (kV)', xc: cV, yl: '线路中损失的功率 (MW)', yc: cP,
      nx: 6, ny: 4, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0),
    });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, lossOf, VLO, VHI, X, Y, cP, 5, 400);
    ctx.restore();
    line(ctx, X(V), box.t, X(V), box.b, alpha(cR, 0.35), 2, [4, 8]);
    const mk = pinned(ctx, box, X, Y, V, loss, cP, loss > LMAX ? undefined : fmt(loss, 1) + ' MW');
    if (loss > LMAX) text(ctx, fmt(loss, 1) + ' MW，超出刻度上限', mk.x + 18, mk.y + 26, cP, { size: 17, weight: 600, align: 'left', bg: PAL.panel });
    if (!mk.out) label(ctx, fmt(loss, 1) + ' MW', mk.x, mk.y, { side: 'right', size: 19, color: cP, gap: 18, H });

    topline(ctx, '以 ' + fmt(V, 0) + ' kV 输送 ' + fmt(P, 0) + ' MW，送入线路的电流为 ' + fmt(I, 0) + ' A，于是 ' + fmt(R, 2) + ' Ω 的线路损耗 ' + fmt(loss, 1) + ' MW，占所送功率的 ' + fmt(frac, 2) + '%。');
    readout(d.readout,
      `\\kIcur = \\dfrac{\\kP}{\\kV} = \\dfrac{${fmt(P, 0)}\\ \\text{MW}}{${fmt(V, 0)}\\ \\text{kV}} = ${fmt(I, 0)}\\ \\text{A}`,
      '该电流在 ' + fmt(R, 2) + ' Ω 的线路中耗散 ' + fmt(loss, 1) + ' MW，因为电阻所吸收的功率等于电流的平方乘以电阻。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.27: the transformer itself, on the locked view the book prints
   it in (rule 28.2). One viewpoint, from above and to the right, shows the
   front of the laminated ring, the laminations on its top and its right
   side, and both coils at once; the reader never turns it, because nothing
   further is on the other side. The flux runs round the core in the flux
   hue, so that the reason both coils see the same rate of change is there to
   be seen. Still: the two ratios answer the sliders and the section's
   argument has no clock in it (rule 14). The figure opens on 120 V with
   sixteen turns on the primary against two on the secondary and 2.00 A drawn,
   which is the ratio, the input and the currents of Example 23.6.
===================================================================== */
(function () {
  const H = 880;
  const d = sim('sim-transformer', H);
  const vpS = ctl(d.controls, { label: '\\kVprim', cls: 'voltage', min: 0, max: 240, step: 5, value: 120, unit: 'V', dec: 0, aria: '加在原线圈上的电压' });
  const npS = ctl(d.controls, { label: 'N_{\\text{p}}', cls: '', min: 2, max: 20, step: 1, value: 16, unit: '匝', dec: 0, aria: '原线圈的匝数' });
  const nsS = ctl(d.controls, { label: 'N_{\\text{s}}', cls: '', min: 2, max: 20, step: 1, value: 2, unit: '匝', dec: 0, aria: '副线圈的匝数' });
  const ipS = ctl(d.controls, { label: '\\kIprim', cls: 'current', min: 0.2, max: 6, step: 0.1, value: 2, unit: 'A', dec: 2, aria: '原线圈取用的电流' });

  /* the locked view: yaw 0.34 and pitch 0.24, from above and to the right */
  const V3 = view({ yaw: 0.34, pitch: 0.24, dist: 3000, cx: 620, cy: 352 });
  const P3 = (x, y, z) => V3.P([x, y, z]);
  const A = 250, B = 222, a = 108, b = 94, D = 65;      /* the core: outer, window and half-depth */
  const quad = (ctx, pts, n, stroke) => {
    const q = pts.map((p) => P3(p[0], p[1], p[2]));
    F.face(ctx, q, V3.shade(n));
    ctx.save(); ctx.beginPath(); q.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.strokeStyle = F.ref('core'); ctx.lineWidth = stroke; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
  };
  const seg = (ctx, p, q, color, w, dash) => line(ctx, p[0], p[1], q[0], q[1], color, w, dash);

  /* one coil wound on a leg: n turns of wire round the bar between xa and xb,
     drawn as a flat helix so the winding reads as a winding and not as a row
     of rings. The wire is drawn in the coil's referent colour. */
  function coil(ctx, xa, xb, n, y0, y1, color) {
    const cx = (xa + xb) / 2, rx = Math.abs(xb - xa) / 2 + 16, rz = D + 15;
    const dy = (y1 - y0) / n;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      for (let k = 0; k <= 48; k++) {
        const th = (k / 48) * Math.PI * 2;
        const p = P3(cx + rx * Math.cos(th), y0 + dy * (i + 0.5 + 0.8 * (th / (Math.PI * 2) - 0.5)), rz * Math.sin(th));
        if (k) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
      }
      ctx.stroke();
    }
    ctx.restore();
    /* where the top and the bottom of the winding come out to meet the leads */
    return { top: P3(cx - rx, y0 + dy * 0.5, 0), bot: P3(cx - rx, y1 - dy * 0.5, 0), rx, cx };
  }

  /* the flux the core carries, drawn as a closed loop round the ring just in
     front of its face, with an arrowhead on each side */
  function fluxLoop(ctx, color) {
    const mx = (A + a) / 2, my = (B + b) / 2, r = 34, z = D + 3, pts = [];
    const corner = (cx, cy, a0) => { for (let k = 0; k <= 8; k++) { const t = a0 + (k / 8) * (Math.PI / 2); pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]); } };
    corner(mx - r, my - r, 0); corner(-mx + r, my - r, Math.PI / 2);
    corner(-mx + r, -my + r, Math.PI); corner(mx - r, -my + r, -Math.PI / 2);
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4.5; ctx.lineJoin = 'round'; ctx.beginPath();
    pts.concat([pts[0]]).forEach((p, i) => { const q = P3(p[0], p[1], z); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.stroke(); ctx.restore();
    /* clockwise seen from the front: along the top to the right, down the
       right leg, back along the bottom, up the left leg */
    const head = (x1, y1, x2, y2) => arrow(ctx, ...P3(x1, y1, z), ...P3(x2, y2, z), color, 4.5);
    head(-30, my, 30, my); head(mx, 30, mx, -30); head(30, -my, -30, -my); head(-mx, -30, -mx, 30);
    return P3(0, my, z);
  }

  /* the symbol the book prints under its drawing: two coils with the core
     between them, drawn in ink at a fifth of the size of the scene */
  function symbol(ctx, cx, cy) {
    const s = 1, top = cy - 46, bot = cy + 46;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    [-1, 1].forEach((side) => {
      const x = cx + side * 24;
      ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, top + 6);
      for (let i = 0; i < 4; i++) { const y = top + 6 + i * 22; ctx.arc(x, y + 11, 11, -Math.PI / 2, Math.PI / 2, side < 0); }
      ctx.lineTo(x, bot); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, top); ctx.lineTo(x, top - 22); ctx.lineTo(x + side * 62, top - 22);
      ctx.moveTo(x, bot); ctx.lineTo(x, bot + 22); ctx.lineTo(x + side * 62, bot + 22); ctx.stroke();
    });
    [-4, 4].forEach((o) => { ctx.beginPath(); ctx.moveTo(cx + o, top - 4); ctx.lineTo(cx + o, bot + 4); ctx.stroke(); });
    ctx.restore();
    return s;
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const vp = vpS.v, np = Math.round(npS.v), ns = Math.round(nsS.v), ip = ipS.v;
    const vs = (vp * ns) / np, is = (ip * np) / ns, pw = vp * ip;
    const cV = C('voltage'), cI = C('current'), cPhi = C('magnetic-flux'), cP = C('power');

    /* the core: the two outer faces we see, the two walls of the window, then
       the ring itself, and the laminations that give the slab its grain */
    quad(ctx, [[-A, B, D], [A, B, D], [A, B, -D], [-A, B, -D]], [0, 1, 0], 3);
    quad(ctx, [[A, B, D], [A, -B, D], [A, -B, -D], [A, B, -D]], [1, 0, 0], 3);
    quad(ctx, [[-a, b, D], [-a, -b, D], [-a, -b, -D], [-a, b, -D]], [1, 0, 0], 2);
    quad(ctx, [[-a, -b, D], [a, -b, D], [a, -b, -D], [-a, -b, -D]], [0, 1, 0], 2);
    [[[-A, B], [A, B], [A, b], [-A, b]], [[-A, -b], [A, -b], [A, -B], [-A, -B]],
     [[-A, b], [-a, b], [-a, -b], [-A, -b]], [[a, b], [A, b], [A, -b], [a, -b]]]
      .forEach((r) => quad(ctx, r.map((p) => [p[0], p[1], D]), [0, 0, 1], 3));
    ctx.save(); ctx.globalAlpha = 0.55;
    for (let k = -3; k <= 3; k++) {
      const z = (k / 3.6) * D;
      seg(ctx, P3(-A, B, z), P3(A, B, z), PAL.muted, 1.5);
      seg(ctx, P3(A, B, z), P3(A, -B, z), PAL.muted, 1.5);
    }
    ctx.restore();

    const cPr = F.ref('primary'), cSe = F.ref('secondary');
    const pc = coil(ctx, -A, -a, np, -168, 168, cPr);
    const sc = coil(ctx, a, A, ns, -168, 168, cSe);
    /* the flux is drawn over the windings, as the book draws it, so that the
       loop reads as a closed loop and not as two arcs either side of a coil */
    const fluxTop = fluxLoop(ctx, cPhi);
    const lower = (p, q) => (p[1] > q[1] ? p : q);

    /* the leads and the terminals, and the current along each of them */
    const TL = 250, TR = 990;
    const lead = (from, tx, ty) => { seg(ctx, from, [from[0], ty], PAL.ink, 3.5); seg(ctx, [from[0], ty], [tx, ty], PAL.ink, 3.5); dot(ctx, tx, ty, PAL.ink, true, 9); };
    lead(pc.top, TL, 210); lead(pc.bot, TL, 500);
    const scTop = P3(sc.cx + sc.rx, -168 + (336 / ns) * 0.5, 0), scBot = P3(sc.cx + sc.rx, 168 - (336 / ns) * 0.5, 0);
    lead(scTop, TR, 210); lead(scBot, TR, 500);
    if (ip > 0.001) arrow(ctx, TL + 30, 210, TL + 96, 210, cI, 4.5);
    if (is > 0.001) arrow(ctx, TR - 30, 210, TR - 96, 210, cI, 4.5);

    /* the two voltages, each a double-headed arrow between its terminals */
    const vbar = (x, color) => { arrow(ctx, x, 220, x, 490, color, 4); arrow(ctx, x, 490, x, 220, color, 4); };
    vbar(215, cV); vbar(1025, cV);

    const symCx = 700, symCy = 722;
    symbol(ctx, symCx, symCy);

    /* the names: five, each in a slot no slider moves (rule 26.7) */
    const coreFoot = P3(0, -B, 0);
    label(ctx, '叠片铁芯', coreFoot[0], coreFoot[1], { side: 'below', size: 20, gap: 44, color: F.ref('core'), H });
    label(ctx, '磁通量 Φ', fluxTop[0] + 150, fluxTop[1], { side: 'above', size: 20, gap: 16, color: cPhi, H });
    const pcLow = lower(pc.top, pc.bot), scLow = lower(scTop, scBot);
    label(ctx, '原线圈，' + np + ' 匝', pcLow[0], pcLow[1], { side: 'below', size: 20, gap: 92, color: cPr, H });
    label(ctx, '副线圈，' + ns + ' 匝', scLow[0], scLow[1], { side: 'below', size: 20, gap: 92, color: cSe, H });
    label(ctx, '变压器的电路符号', symCx, symCy + 74, { side: 'below', size: 20, gap: 18, color: PAL.ink, H });
    /* the readings, which are the figure's frame rather than names of things */
    label(ctx, 'V_p = ' + fmt(vp, 0) + ' V', 215, 355, { side: 'left', size: 22, color: cV, gap: 16, H });
    label(ctx, 'V_s = ' + fmt(vs, 1) + ' V', 1025, 355, { side: 'right', size: 22, color: cV, gap: 16, H });
    label(ctx, 'I_p = ' + fmt(ip, 2) + ' A', TL + 63, 210, { side: 'above', size: 21, color: cI, gap: 18, H });
    label(ctx, 'I_s = ' + fmt(is, 2) + ' A', TR - 63, 210, { side: 'above', size: 21, color: cI, gap: 18, H });

    hits = [
      { x: pc.top[0], y: 350, r: 110, name: '原线圈，输入电压加在其上' },
      { x: scTop[0], y: 350, r: 110, name: '副线圈，变化的磁通量在其中感应出输出电压' },
      { x: fluxTop[0], y: fluxTop[1], r: 90, name: '铁芯中的磁通量，穿过两个线圈的相同' },
      { x: symCx, y: symCy, r: 90, name: '电路图中表示变压器的符号' },
    ];

    const kind = ns > np ? '升压变压器' : ns < np ? '降压变压器' : '既不升压也不降压的变压器';
    topline(ctx, '原线圈 ' + np + ' 匝，副线圈 ' + ns + ' 匝，输入端的 ' + fmt(vp, 0) + ' V 在输出端变为 ' + fmt(vs, 1) + ' V，所以这是' + kind + '。');
    readout(d.readout,
      `\\kVsec = \\kVprim\\dfrac{N_{\\text{s}}}{N_{\\text{p}}} = (${fmt(vp, 0)}\\ \\text{V})\\dfrac{${ns}}{${np}} = ${fmt(vs, 1)}\\ \\text{V}`,
      '电流比是匝数比反过来，所以原线圈取用的 ' + fmt(ip, 2) + ' A 在副线圈中变为 ' + fmt(is, 2) + ' A，输出功率 ' + fmt(pw, 0) + ' W 等于输入功率。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.28: what the secondary makes of what the primary is given. The
   book draws one of the three cases, a direct voltage switched on and off,
   and the other two are the ones that make its point. The primary is a coil
   with a resistance of its own, so its current, and the flux with it, settles
   towards a steady value with a time constant of 15 ms, and the secondary
   voltage is whatever is left of the primary voltage while the flux is still
   moving: nothing at all for a steady voltage, a spike of either sign at each
   throw of the switch, and, at 60 Hz, where the coil's reactance is far
   larger than its resistance, the input's own sinusoid in the ratio of the
   turns. Still: the traces are whole waveforms over a fixed window and answer
   the choice and the sliders, so there is no cycle and no transport (rule 14).
===================================================================== */
(function () {
  const H = 820;
  const d = sim('sim-dc-ac', H);
  const vpS = ctl(d.controls, { label: '\\kVprim', cls: 'voltage', min: 0, max: 240, step: 5, value: 120, unit: 'V', dec: 0, aria: '加在原线圈上的电压大小' });
  const rS = ctl(d.controls, { label: 'N_{\\text{s}}/N_{\\text{p}}', cls: '', min: 0.25, max: 2, step: 0.25, value: 2, unit: '', dec: 2, aria: '副线圈匝数与原线圈匝数之比' });
  const kindC = select(d.controls, {
    label: '\\text{原线圈得到}',
    options: [{ value: 'steady', label: '恒定' }, { value: 'switched', label: '通断切换' }, { value: 'ac', label: '交变' }],
    value: 'switched', aria: '给原线圈加的是什么电压',
  });

  const TAU = 9, TMAX = 160, STEP = 40;                /* milliseconds */
  const OM = 2 * Math.PI * 60 / 1000;                  /* radians per millisecond at 60 Hz */
  const WT = OM * TAU, PSI = Math.PI / 2 - Math.atan(WT);
  /* Fixed ranges: the window holds four throws of the switch or nine and a
     half cycles of the 60 Hz supply, the primary axis holds the whole of its
     slider, and the secondary axis holds the largest the turns ratio can make
     of it. */
  const VP = 240, VS = 480;

  /* the primary voltage, and what the secondary makes of it */
  function waves(kind, v0, r) {
    if (kind === 'steady') return { u: () => v0, s: () => 0 };
    /* At 60 Hz the coil's reactance is far larger than its resistance, which is
       the section's own assumption of negligible coil resistance, so the
       secondary carries the primary's sinusoid in the ratio of the turns. */
    if (kind === 'ac') return { u: (t) => v0 * Math.sin(OM * t), s: (t) => r * v0 * Math.sin(OM * t + PSI) };
    /* the switch: closed at the start and thrown every 40 ms. The current in
       the primary is where the last throw left it, decaying towards the new
       value, and what the secondary sees is the difference that is left. */
    const j = [v0];                                    /* the settled part at each throw */
    for (let k = 1; k * STEP <= TMAX; k++) {
      const uPrev = (k - 1) % 2 === 0 ? v0 : 0;
      j.push(uPrev + (j[k - 1] - uPrev) * Math.exp(-STEP / TAU));
    }
    const uOf = (t) => (Math.floor(t / STEP) % 2 === 0 ? v0 : 0);
    return {
      u: uOf,
      s: (t) => { const k = Math.floor(t / STEP), t0 = k * STEP; return r * (uOf(t) - j[k]) * Math.exp(-(t - t0) / TAU); },
    };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v0 = vpS.v, r = rS.v, kind = kindC.value;
    /* a change of what the primary is given bends both traces from one shape into the other on the same frames */
    const KINDS = ['steady', 'switched', 'ac'];
    const wt = kindC.mix((k) => KINDS.map((q) => (q === k ? 1 : 0)));
    const ws = KINDS.map((q) => waves(q, v0, r));
    const w = { u: (t) => ws.reduce((a, x, i) => a + (wt[i] ? wt[i] * x.u(t) : 0), 0), s: (t) => ws.reduce((a, x, i) => a + (wt[i] ? wt[i] * x.s(t) : 0), 0) };
    const cV = C('voltage'), cT = C('time');

    const top = { l: 240, r: 1250, t: 150, b: 350 };
    const bot = { l: 240, r: 1250, t: 480, b: 700 };
    const ax1 = axes(ctx, top, [0, TMAX], [-VP, VP], { yl: '初级电压 V_p (V)', yc: cV, nx: 4, ny: 4, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0) });
    const ax2 = axes(ctx, bot, [0, TMAX], [-VS, VS], { xl: '时间 t (ms)', xc: cT, yl: '次级电压 V_s (V)', yc: cV, nx: 4, ny: 4, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0) });

    if (wt[1] > 0) {
      for (let t = STEP; t < TMAX; t += STEP) {
        line(ctx, ax1.X(t), top.t, ax1.X(t), top.b, alpha(PAL.ink, 0.3 * wt[1]), 2, [4, 8]);
        line(ctx, ax2.X(t), bot.t, ax2.X(t), bot.b, alpha(PAL.ink, 0.3 * wt[1]), 2, [4, 8]);
      }
    }
    curve(ctx, w.u, 0, TMAX, ax1.X, ax1.Y, cV, 5, 1400);
    curve(ctx, w.s, 0, TMAX, ax2.X, ax2.Y, cV, 5, 1400);


    const peak = kind === 'steady' ? 0 : r * v0;
    topline(ctx, kind === 'steady'
      ? '原线圈上恒定的 ' + fmt(v0, 0) + ' V 使磁通量保持不变，副线圈什么也显示不出来。'
      : kind === 'switched'
        ? '开关每 40 ms 拨动一次，每拨动一次，副线圈就得到一个约 ' + fmt(peak, 0) + ' V 的尖峰，随着电流稳定下来而衰减消失。'
        : '60 Hz 的交变 ' + fmt(v0, 0) + ' V 到达副线圈时变为 ' + fmt(peak, 0) + ' V，按匝数比变化，并与输入同步。');
    readout(d.readout,
      kind === 'ac'
        ? `\\kVsec = -N_{\\text{s}}\\dfrac{\\kdPhi}{\\kdt} = \\dfrac{N_{\\text{s}}}{N_{\\text{p}}}\\kVprim = (${fmt(r, 2)})(${fmt(v0, 0)}\\ \\text{V}) = ${fmt(peak, 0)}\\ \\text{V}`
        : kind === 'steady'
          ? `\\kVsec = -N_{\\text{s}}\\dfrac{\\kdPhi}{\\kdt} = 0\\ \\text{V}`
          : `\\kVsec = -N_{\\text{s}}\\dfrac{\\kdPhi}{\\kdt} \\approx \\pm${fmt(peak, 0)}\\ \\text{V，每拨动一次开关}`,
      kind === 'steady'
        ? '初级电压始终不变，所以磁通量始终不变，而不变的磁通量什么也感应不出来。这就是变压器对直流电毫无用处的原因。'
        : kind === 'switched'
          ? '只有磁通量在变动时，副线圈才会显示出东西，而开关只在拨动的那一刻使它变动，此时副线圈的峰值约为 ' + fmt(peak, 0) + ' V。输出是一串尖峰，而不是大多数用电器所需要的正弦交流电。'
          : '交变的初级电压使磁通量一直在变动，所以副线圈的电压波形与输入相同，只是前面乘上了匝数比。');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
