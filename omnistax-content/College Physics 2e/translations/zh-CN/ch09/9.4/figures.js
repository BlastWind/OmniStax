/* Figures for section 9.4 Applications of Statics, Including Problem-Solving Strategies.
   Boots against the section's text article. Every figure of this section is still: a pole
   held at rest has no time in it, so nothing registers a cycle and nothing carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, pinned, silhouette } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, EDGE = 60, WIDE = 1340;
/* a signed number for the canvas, with the typographic minus the rest of the book uses */
const signed = (v, d) => (Math.abs(v) < 5e-4 ? '' : v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* the same for KaTeX, where the minus is the maths one */
const signedTex = (v, d) => (Math.abs(v) < 5e-4 ? '' : v < 0 ? '-' : '+') + fmt(Math.abs(v), d);

/* The world axis lies along the pole, its origin at the right hand and growing to the right,
   which is the way round the book draws the vaulter as he faces us, and the pole itself runs off
   both edges of the drawing, as it does in all three of the book's photographs.
   The scale is fixed. The sliders can put the center of gravity 3.00 m along the pole and the
   left hand 1.50 m along it, so the drawing covers −0.50 m to 3.30 m at every setting and neither
   hand moves when the center of gravity does. Nothing here is ever rescaled to fit. */
const LO = -0.5, HI = 3.3;
const along = () => (x) => EDGE + ((x - LO) / (HI - LO)) * (WIDE - EDGE);
/* Arrows are drawn to a fixed 100 N, which is the book's own pole comfortably and is passed only
   when the hands are brought close together with the cg far out. Past it the arrow stops and the
   label goes on printing the true force, and the scene says so. */
const FCAP = 100;
const alen = (f, base, span) => base + span * Math.min(1, Math.abs(f) / FCAP);
/* the pole itself: two rails, as the book draws it */
function pole(ctx, y) {
  const c = F.ref('pole');
  line(ctx, 0, y - 6, 1400, y - 6, c, 3);
  line(ctx, 0, y + 6, 1400, y + 6, c, 3);
}
/* the vaulter standing between his hands and facing us, in muted ink so that the free body
   diagram reads over him: the library's silhouette with its shoulders at the height of the pole
   and its hands on the two grips, drawn in its own 150-unit frame */
function vaulter(ctx, xR, xL, yPole, yFeet) {
  const cx = (xR + xL) / 2, s = (yFeet - yPole) / 118;
  silhouette(ctx, { x: cx, y: yFeet, s, color: alpha(F.ref('vaulter'), 0.55), pose: 'stand',
    feet: [{ x: 16, y: 0 }, { x: -16, y: 0 }], hip: { x: 0, y: -72 }, shoulder: { x: 0, y: -118 }, head: { x: 0, y: -140 },
    hands: [{ x: (xL - cx) / s, y: -118 }, { x: (xR - cx) / s, y: -118 }], elbowSide: -1 });
}
/* the center of gravity, marked where the book marks it */
function cgMark(ctx, x, y) {
  dot(ctx, x, y, PAL.ink, true, 11);
  text(ctx, '重心', x - 22, y - 26, PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
}
/* A force applied to the pole at x: up when positive, down when negative. The label sits to one
   side, which keeps the two hand labels apart when the hands are brought close together. */
function forceArrow(ctx, x, yPole, len, up, label, color, side) {
  const tip = up ? yPole - len : yPole + len;
  arrow(ctx, x, yPole, x, tip, color, 5);
  text(ctx, label, x + side * 14, tip + (up ? 12 : -12), color, { size: 22, weight: 600, align: side > 0 ? 'left' : 'right', bg: PAL.panel });
}

/* =====================================================================
   FIGURE 9.18 + 9.19 + 9.20: the pole vaulter's three holds of one pole.
   The center of gravity slides along the pole and the two hands stop
   sharing the weight equally; beyond the left hand the right hand
   reverses. A still picture: it registers no cycle, so it gets no
   transport, and a slider's input alone redraws it.
===================================================================== */
(function () {
  const d = sim('sim-pole', 980);
  const P = ctl(d.controls, { label: '\\krlev', cls: 'position', min: 0, max: 3, step: 0.05, value: 0.3, unit: 'm', dec: 3, aria: '右手到重心的距离',
    specials: [{ at: () => S.v / 2, label: '正中' }, { at: () => S.v, label: '在左手正上方' }] });
  const S = ctl(d.controls, { label: '\\text{两手相距}', cls: 'position', min: 0.3, max: 1.5, step: 0.05, value: 0.9, unit: 'm', dec: 3, aria: '两手之间的距离' });
  P.refresh();
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 1, max: 10, step: 0.25, value: 5, unit: 'kg', dec: 2, aria: '撑杆的质量' });
  const YP = 290;
  function draw() {
    const { ctx } = begin(d.c);
    const p = P.v, s = S.v, w = M.v * G;
    const FL = (w * p) / s, FR = (w * (s - p)) / s;
    const rL = Math.abs(s - p);                       /* the book's lever arm, from the left hand to the cg */
    const even = Math.abs(p - s / 2) < 1e-6, beyond = p > s + 1e-6;
    const L = (f) => alen(f, 26, 150);
    const over = Math.max(w, Math.abs(FL), Math.abs(FR)) > FCAP;
    const X = along();
    /* the scene */
    vaulter(ctx, X(0), X(s), YP, 500);
    pole(ctx, YP);
    forceArrow(ctx, X(0), YP, L(FR), FR >= 0, 'F_R = ' + signed(FR, 1) + ' N', C('force'), -1);
    forceArrow(ctx, X(s), YP, L(FL), FL >= 0, 'F_L = ' + signed(FL, 1) + ' N', C('force'), 1);
    arrow(ctx, X(p), YP, X(p), YP + L(w), C('force'), 5);
    text(ctx, 'w = ' + fmt(w, 1) + ' N', X(p) + 18, YP + L(w) - 12, C('force'), { size: 22, weight: 600, bg: PAL.panel });
    if (over) text(ctx, '箭头在 100 N 处不再变长，标注仍给出真实的力。', 700, 92, PAL.muted, { size: 17, align: 'center' });
    cgMark(ctx, X(p), YP);
    text(ctx, '右手', X(0), YP + 32, F.ref('right-hand'), { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, '左手', X(s), YP + 32, F.ref('left-hand'), { size: 17, align: 'center', bg: PAL.panel });
    /* the two lever arms the worked example measures */
    hbracket(ctx, Math.min(X(p), X(s)), Math.max(X(p), X(s)), 540, C('position'), fmt(rL, 3) + ' m，左手到重心');
    hbracket(ctx, X(0), X(s), 600, C('position'), fmt(s, 3) + ' m，两手之间');
    /* the graph: both hand forces as the center of gravity travels along the pole */
    const FLat = (x) => (w * x) / s, FRat = (x) => (w * (s - x)) / s;
    /* fixed axes. The centre of gravity is followed along the whole 3 m of pole. A 10 kg pole held
       with the hands only 0.30 m apart would ask nearly 1000 N of each hand, but the book's pole
       asks between −114 N and 163 N and would be a flat pair of lines on a scale that large, so the
       force axis is fixed at −200 to 200 N, ticked every 50, which holds the default pole
       comfortably; each line is drawn only as far as the box reaches and the hand forces are
       pinned at the edge. Neither range moves. */
    const FR2 = 200, box = { l: 230, r: 1280, t: 680, b: 890 };
    const A = axes(ctx, box, [0, 3], [-FR2, FR2], {
      xl: '重心的位置，从右手量起（m）', yl: '力（N）',
      xc: C('position'), yc: C('force'), nx: 6, ny: 8, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0),
    });
    const xL = Math.min(3, (FR2 * s) / w), xR = Math.min(3, s * (1 + FR2 / w));   /* where each line leaves the box */
    line(ctx, A.X(s / 2), box.t, A.X(s / 2), box.b, PAL.muted, 2, [6, 8]);
    text(ctx, '两手在这里平均分担重力。', Math.min(Math.max(A.X(s / 2), box.l + 180), box.r - 180), box.t + 20, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    line(ctx, A.X(0), A.Y(FLat(0)), A.X(xL), A.Y(FLat(xL)), C('force'), 5);
    line(ctx, A.X(0), A.Y(FRat(0)), A.X(xR), A.Y(FRat(xR)), C('force'), 5, [12, 10]);
    text(ctx, 'F_L', A.X(Math.min(2.6, xL)), A.Y(FLat(Math.min(2.6, xL))) - 26, C('force'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'F_R', A.X(Math.min(2.6, xR)), A.Y(FRat(Math.min(2.6, xR))) + 28, C('force'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    const cf = (v) => Math.min(Math.max(v, -FR2), FR2);
    line(ctx, A.X(p), box.b, A.X(p), Math.min(A.Y(cf(FL)), A.Y(cf(FR))), PAL.muted, 2, [4, 8]);
    pinned(ctx, box, A.X, A.Y, p, FL, C('force'), fmt(FL, 0) + ' N');
    pinned(ctx, box, A.X, A.Y, p, FR, C('force'), fmt(FR, 0) + ' N');
    /* what the picture says */
    headline(ctx, even
      ? '重心在两手正中间，所以每只手承担 ' + fmt(w / 2, 1) + ' N，即撑杆重力的一半。'
      : beyond
        ? '重心在左手外侧 ' + fmt(rL, 3) + ' m 处，所以右手必须以 ' + fmt(Math.abs(FR), 1) + ' N 向下推。'
        : '重心距左手 ' + fmt(rL, 3) + ' m，所以右手承担 ' + fmt(FR, 1) + ' N，左手承担 ' + fmt(FL, 1) + ' N。');
    /* The main line is the second condition taken about the left hand, which is the condition the
       figure is about and the one the worked example uses; the first condition, which then gives
       the other hand, follows on the small line. */
    readout(d.readout,
      `\\kFR = \\frac{(${fmt(s - p, 3)}\\ \\text{m})\\,\\kwgt}{${fmt(s, 3)}\\ \\text{m}} = \\frac{(${fmt(s - p, 3)}\\ \\text{m})(${fmt(w, 1)}\\ \\text{N})}{${fmt(s, 3)}\\ \\text{m}} = ${signedTex(FR, 1)}\\ \\text{N}`,
      `于是平衡的第一条件给出 $\\kFL = \\kwgt - \\kFR = ${signedTex(FL, 1)}\\ \\text{N}$。`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the pivot is yours to choose. The pole stands in equilibrium and
   the three torques are taken about a pivot the reader moves; they add
   to zero wherever it is put, and a pivot at a hand removes that hand's
   torque. A still picture: no cycle, no transport.
===================================================================== */
(function () {
  const d = sim('sim-pivot', 900);
  const Q = ctl(d.controls, { label: '\\text{支点}', cls: 'position', min: 0, max: 3, step: 0.05, value: 0.9, unit: 'm', dec: 3, aria: '支点的位置，从右手量起',
    specials: [{ at: 0, label: '右手' }, { at: () => P.v, label: '重心' }, { at: 0.9, label: '左手' }] });
  const P = ctl(d.controls, { label: '\\krlev', cls: 'position', min: 0, max: 3, step: 0.05, value: 0.3, unit: 'm', dec: 3, aria: '右手到重心的距离' });
  Q.refresh();
  const YP = 250, S = 0.9, MASS = 5, BASE = 710, BAR = 90;
  function draw() {
    const { ctx } = begin(d.c);
    const q = Q.v, p = P.v, w = MASS * G;
    const FL = (w * p) / S, FR = (w * (S - p)) / S;
    /* the torques about the pivot, counterclockwise positive */
    const tR = -(q - 0) * FR, tW = -(p - q) * w, tL = (S - q) * FL;
    const L = (f) => alen(f, 24, 96);
    const over = Math.max(w, Math.abs(FL), Math.abs(FR)) > FCAP;
    const X = along();
    /* the scene: the free body diagram alone, so that the lever arms have the room under the pole */
    pole(ctx, YP);
    forceArrow(ctx, X(0), YP, L(FR), FR >= 0, 'F_R = ' + signed(FR, 1) + ' N', C('force'), -1);
    forceArrow(ctx, X(S), YP, L(FL), FL >= 0, 'F_L = ' + signed(FL, 1) + ' N', C('force'), 1);
    arrow(ctx, X(p), YP, X(p), YP + L(w), C('force'), 5);
    text(ctx, 'w = ' + fmt(w, 1) + ' N', X(p) + 18, YP + L(w) / 2, C('force'), { size: 22, weight: 600, bg: PAL.panel });
    if (over) text(ctx, '箭头在 100 N 处不再变长，标注仍给出真实的力。', 700, 104, PAL.muted, { size: 17, align: 'center' });
    cgMark(ctx, X(p), YP);
    /* the pivot the reader chooses */
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath();
    ctx.moveTo(X(q), YP + 9); ctx.lineTo(X(q) - 19, YP + 48); ctx.lineTo(X(q) + 19, YP + 48); ctx.closePath(); ctx.fill(); ctx.restore();
    text(ctx, '支点', X(q), YP + 68, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the three lever arms, each measured from the pivot */
    const arms = [
      { x: X(0), r: Math.abs(q - 0), y: 400, name: '到右手' },
      { x: X(p), r: Math.abs(q - p), y: 452, name: '到重力作用点' },
      { x: X(S), r: Math.abs(q - S), y: 504, name: '到左手' },
    ];
    for (const a of arms) {
      if (Math.abs(a.x - X(q)) < 4) text(ctx, '没有' + a.name + '的力臂，所以该力矩为零。', Math.min(Math.max(a.x, 400), 1000), a.y - 22, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
      else hbracket(ctx, Math.min(a.x, X(q)), Math.max(a.x, X(q)), a.y, C('position'), fmt(a.r, 3) + ' m ' + a.name);
    }
    /* The bars: one torque each, and their sum. The scale is fixed at 60 N·m, which is a little
       over twice what the book's own hold asks, so that the default state is a picture and not
       three slivers; a bar that would pass it stops there and its label gives the true torque. */
    const TM = 60;
    const bars = [{ v: tR, n: '来自右手' }, { v: tW, n: '来自重力' }, { v: tL, n: '来自左手' }, { v: tR + tW + tL, n: '三者之和' }];
    text(ctx, Math.max(Math.abs(tR), Math.abs(tW), Math.abs(tL)) > TM
      ? '线上方的条形表示逆时针，下方的条形表示顺时针；条形在 60 N·m 处不再增长，其标注给出真实的力矩。'
      : '线上方的条形是逆时针力矩，下方的条形是顺时针力矩。', 700, 552, PAL.muted, { size: 18, align: 'center' });
    line(ctx, 190, BASE, 1290, BASE, PAL.muted, 2);
    bars.forEach((b, i) => {
      const cx = 340 + i * 250, h = BAR * Math.max(-1, Math.min(1, b.v / TM)), top = h >= 0 ? BASE - h : BASE;
      ctx.save(); ctx.fillStyle = alpha(C('torque'), 0.65); ctx.strokeStyle = C('torque'); ctx.lineWidth = 3;
      ctx.fillRect(cx - 58, top, 116, Math.max(2, Math.abs(h))); ctx.strokeRect(cx - 58, top, 116, Math.max(2, Math.abs(h))); ctx.restore();
      text(ctx, signed(b.v, 1) + ' N·m', cx, h >= 0 ? BASE - h - 24 : BASE - h + 24, C('torque'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, b.n, cx, 868, PAL.muted, { size: 18, align: 'center' });
    });
    /* what the picture says */
    const atR = Math.abs(q) < 1e-6, atL = Math.abs(q - S) < 1e-6, atW = Math.abs(q - p) < 1e-6;
    headline(ctx, atL
      ? '支点在左手时，左手的力矩为零，其余两个力矩之和为零。'
      : atR
        ? '支点在右手时，右手的力矩为零，其余两个力矩之和为零。'
        : '支点距右手 ' + fmt(q, 3) + ' m，三个力矩之和仍为零。');
    readout(d.readout,
      `\\text{合力矩}\\;\\ktau = \\ktau_{\\text{R}} + \\ktau_{\\text{w}} + \\ktau_{\\text{L}} = (${signedTex(tR, 1)}) + (${signedTex(tW, 1)}) + (${signedTex(tL, 1)}) = 0\\ \\text{N}\\cdot\\text{m}`,
null);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
