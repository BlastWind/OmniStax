/* Figures for section 9.4 Applications of Statics, Including Problem-Solving Strategies.
   Boots against the section's text article. Every figure of this section is still: a pole
   held at rest has no time in it, so nothing registers a cycle and nothing carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, EDGE = 60, WIDE = 1340;
/* a signed number for the canvas, with the typographic minus the rest of the book uses */
const signed = (v, d) => (Math.abs(v) < 5e-4 ? '' : v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* the same for KaTeX, where the minus is the maths one */
const signedTex = (v, d) => (Math.abs(v) < 5e-4 ? '' : v < 0 ? '-' : '+') + fmt(Math.abs(v), d);

/* The world axis lies along the pole, its origin at the right hand and growing to the right,
   which is the way round the book draws the vaulter as he faces us. The picture is fitted to
   whatever the sliders put on the pole, with a margin at each end, and the pole itself runs off
   both edges of the drawing, as it does in all three of the book's photographs. */
function along(marks) {
  const lo = Math.min(...marks) - 0.3, hi = Math.max(...marks) + 0.3;
  const span = Math.max(hi - lo, 1.4), mid = (lo + hi) / 2;
  const a = mid - span / 2;
  return (x) => EDGE + ((x - a) / span) * (WIDE - EDGE);
}
/* the pole itself: two rails, as the book draws it */
function pole(ctx, y) {
  line(ctx, 0, y - 6, 1400, y - 6, PAL.ink, 3);
  line(ctx, 0, y + 6, 1400, y + 6, PAL.ink, 3);
}
/* the vaulter standing between his hands, in muted ink so that the free body diagram reads over him */
function vaulter(ctx, xR, xL, yPole, yFeet) {
  const cx = (xR + xL) / 2, yHead = yPole - 108, yHip = yPole + 70;
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.fillStyle = PAL.muted; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(cx, yHead, 17, 0, TAU); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx, yHead + 17); ctx.lineTo(cx, yHip);
  ctx.moveTo(cx, yHip); ctx.lineTo(cx - 26, yFeet);
  ctx.moveTo(cx, yHip); ctx.lineTo(cx + 26, yFeet);
  ctx.moveTo(cx, yHead + 44); ctx.lineTo(xR, yPole);
  ctx.moveTo(cx, yHead + 44); ctx.lineTo(xL, yPole);
  ctx.stroke(); ctx.restore();
}
/* the center of gravity, marked where the book marks it */
function cgMark(ctx, x, y) {
  dot(ctx, x, y, PAL.ink, true, 11);
  text(ctx, 'cg', x - 22, y - 26, PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
}
/* a force applied to the pole at x: up when positive, down when negative */
function forceArrow(ctx, x, yPole, len, up, label, color) {
  const tip = up ? yPole - len : yPole + len;
  arrow(ctx, x, yPole, x, tip, color, 5);
  text(ctx, label, x, up ? tip - 22 : tip + 22, color, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
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
  const P = ctl(d.controls, { label: '\\krlev', cls: 'position', min: 0, max: 3, step: 0.05, value: 0.3, unit: 'm', dec: 3, aria: 'distance from the right hand to the center of gravity' });
  const S = ctl(d.controls, { label: '\\text{hands apart}', cls: 'position', min: 0.3, max: 1.5, step: 0.05, value: 0.9, unit: 'm', dec: 3, aria: 'distance between the hands' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 1, max: 10, step: 0.25, value: 5, unit: 'kg', dec: 2, aria: 'mass of the pole' });
  const YP = 290;
  function draw() {
    const { ctx } = begin(d.c);
    const p = P.v, s = S.v, w = M.v * G;
    const FL = (w * p) / s, FR = (w * (s - p)) / s;
    const rL = Math.abs(s - p);                       /* the book's lever arm, from the left hand to the cg */
    const even = Math.abs(p - s / 2) < 1e-6, beyond = p > s + 1e-6;
    const Fmax = Math.max(w, Math.abs(FL), Math.abs(FR));
    const alen = (f) => 26 + 144 * Math.min(1, Math.abs(f) / Fmax);
    const X = along([0, s, p]);
    /* the scene */
    vaulter(ctx, X(0), X(s), YP, 470);
    pole(ctx, YP);
    forceArrow(ctx, X(0), YP, alen(FR), FR >= 0, 'F_R = ' + signed(FR, 1) + ' N', C('force'));
    forceArrow(ctx, X(s), YP, alen(FL), FL >= 0, 'F_L = ' + signed(FL, 1) + ' N', C('force'));
    arrow(ctx, X(p), YP, X(p), YP + alen(w), C('force'), 5);
    text(ctx, 'w = ' + fmt(w, 1) + ' N', X(p) + 18, YP + alen(w) / 2, C('force'), { size: 22, weight: 600, bg: PAL.panel });
    cgMark(ctx, X(p), YP);
    text(ctx, 'right hand', X(0), YP + 32, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, 'left hand', X(s), YP + 32, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    /* the two lever arms the worked example measures */
    hbracket(ctx, Math.min(X(p), X(s)), Math.max(X(p), X(s)), 540, C('position'), fmt(rL, 3) + ' m from the left hand to the cg');
    hbracket(ctx, X(0), X(s), 600, C('position'), fmt(s, 3) + ' m between the hands');
    /* the graph: both hand forces as the center of gravity travels along the pole */
    const FLat = (x) => (w * x) / s, FRat = (x) => (w * (s - x)) / s;
    const span = nice(Math.min(0, FRat(3)), Math.max(w, FLat(3)), 4);
    const box = { l: 230, r: 1280, t: 680, b: 890 };
    const A = axes(ctx, box, [0, 3], [span.lo, span.hi], {
      xl: 'the center of gravity, measured from the right hand (m)', yl: 'force (N)',
      xc: C('position'), yc: C('force'), nx: 6, ny: span.n, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0),
    });
    line(ctx, A.X(s / 2), box.t, A.X(s / 2), box.b, PAL.muted, 2, [6, 8]);
    text(ctx, 'the hands share the weight', Math.min(Math.max(A.X(s / 2), box.l + 150), box.r - 150), box.t + 20, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    line(ctx, A.X(0), A.Y(FLat(0)), A.X(3), A.Y(FLat(3)), C('force'), 5);
    line(ctx, A.X(0), A.Y(FRat(0)), A.X(3), A.Y(FRat(3)), C('force'), 5, [12, 10]);
    text(ctx, 'F_L', A.X(2.6), A.Y(FLat(2.6)) - 26, C('force'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'F_R', A.X(2.6), A.Y(FRat(2.6)) + 28, C('force'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, A.X(p), box.b, A.X(p), Math.min(A.Y(FL), A.Y(FR)), PAL.muted, 2, [4, 8]);
    dot(ctx, A.X(p), A.Y(FL), C('force'), true, 10);
    dot(ctx, A.X(p), A.Y(FR), C('force'), true, 10);
    /* what the picture says */
    headline(ctx, even
      ? 'the cg is halfway between the hands, so each hand carries ' + fmt(w / 2, 1) + ' N, half the weight of the pole'
      : beyond
        ? 'the cg is ' + fmt(rL, 3) + ' m beyond the left hand, so the right hand must push down with ' + fmt(Math.abs(FR), 1) + ' N'
        : 'the cg is ' + fmt(rL, 3) + ' m from the left hand, so the right hand carries ' + fmt(FR, 1) + ' N and the left hand ' + fmt(FL, 1) + ' N');
    readout(d.readout, even
      ? `\\kFR = \\kFL = \\frac{\\kwgt}{2} = \\frac{${fmt(w, 1)}\\ \\text{N}}{2} = ${fmt(w / 2, 1)}\\ \\text{N}`
      : `\\kFL + \\kFR = (${fmt(FL, 1)}\\ \\text{N}) + (${signedTex(FR, 1)}\\ \\text{N}) = \\kwgt = mg = ${fmt(w, 1)}\\ \\text{N}`,
      even
        ? 'Taking the pivot at the center of gravity, the weight has no lever arm and the two hands are equally far from the pivot, so their equal forces exert equal and opposite torques and both conditions for equilibrium are satisfied at once.'
        : beyond
          ? 'Taking the pivot at the left hand, the weight acts ' + fmt(rL, 3) + ' m away on the side away from the right hand, so the right hand can balance it only by pulling the pole down: it exerts ' + signed(FR, 1) + ' N, and the first condition then gives F_L = ' + fmt(FL, 1) + ' N.'
          : 'Taking the pivot at the left hand, the weight’s lever arm is ' + fmt(rL, 3) + ' m and the right hand’s is ' + fmt(s, 3) + ' m, so the second condition gives F_R = (' + fmt(rL, 3) + ' m)(' + fmt(w, 1) + ' N)/(' + fmt(s, 3) + ' m) = ' + fmt(FR, 1) + ' N, and the first condition then gives F_L = ' + fmt(FL, 1) + ' N.');
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
  const Q = ctl(d.controls, { label: '\\text{pivot}', cls: 'position', min: 0, max: 3, step: 0.05, value: 0.9, unit: 'm', dec: 3, aria: 'position of the pivot, measured from the right hand' });
  const P = ctl(d.controls, { label: '\\krlev', cls: 'position', min: 0, max: 3, step: 0.05, value: 0.3, unit: 'm', dec: 3, aria: 'distance from the right hand to the center of gravity' });
  const YP = 250, S = 0.9, MASS = 5, BASE = 710, BAR = 90;
  function draw() {
    const { ctx } = begin(d.c);
    const q = Q.v, p = P.v, w = MASS * G;
    const FL = (w * p) / S, FR = (w * (S - p)) / S;
    /* the torques about the pivot, counterclockwise positive */
    const tR = -(q - 0) * FR, tW = -(p - q) * w, tL = (S - q) * FL;
    const Fmax = Math.max(w, Math.abs(FL), Math.abs(FR));
    const alen = (f) => 24 + 86 * Math.min(1, Math.abs(f) / Fmax);
    const X = along([0, S, p, q]);
    /* the scene: the free body diagram alone, so that the lever arms have the room under the pole */
    pole(ctx, YP);
    forceArrow(ctx, X(0), YP, alen(FR), FR >= 0, 'F_R = ' + signed(FR, 1) + ' N', C('force'));
    forceArrow(ctx, X(S), YP, alen(FL), FL >= 0, 'F_L = ' + signed(FL, 1) + ' N', C('force'));
    arrow(ctx, X(p), YP, X(p), YP + alen(w), C('force'), 5);
    text(ctx, 'w = ' + fmt(w, 1) + ' N', X(p) + 18, YP + alen(w) / 2, C('force'), { size: 22, weight: 600, bg: PAL.panel });
    cgMark(ctx, X(p), YP);
    /* the pivot the reader chooses */
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath();
    ctx.moveTo(X(q), YP + 9); ctx.lineTo(X(q) - 19, YP + 48); ctx.lineTo(X(q) + 19, YP + 48); ctx.closePath(); ctx.fill(); ctx.restore();
    text(ctx, 'pivot', X(q), YP + 68, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the three lever arms, each measured from the pivot */
    const arms = [
      { x: X(0), r: Math.abs(q - 0), y: 400, name: 'to the right hand' },
      { x: X(p), r: Math.abs(q - p), y: 452, name: 'to the weight' },
      { x: X(S), r: Math.abs(q - S), y: 504, name: 'to the left hand' },
    ];
    for (const a of arms) {
      if (Math.abs(a.x - X(q)) < 4) text(ctx, 'no lever arm ' + a.name + ', so that torque is zero', Math.min(Math.max(a.x, 360), 980), a.y - 22, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
      else hbracket(ctx, Math.min(a.x, X(q)), Math.max(a.x, X(q)), a.y, C('position'), fmt(a.r, 3) + ' m ' + a.name);
    }
    /* the bars: one torque each, and their sum */
    const TM = Math.max(12, Math.abs(tR), Math.abs(tW), Math.abs(tL));
    const bars = [{ v: tR, n: 'from the right hand' }, { v: tW, n: 'from the weight' }, { v: tL, n: 'from the left hand' }, { v: tR + tW + tL, n: 'the three added up' }];
    text(ctx, 'a bar above the line is a counterclockwise torque, and one below it is clockwise', 700, 552, PAL.muted, { size: 18, align: 'center' });
    line(ctx, 190, BASE, 1290, BASE, PAL.muted, 2);
    bars.forEach((b, i) => {
      const cx = 340 + i * 250, h = (BAR * b.v) / TM, top = h >= 0 ? BASE - h : BASE;
      ctx.save(); ctx.fillStyle = alpha(C('torque'), 0.65); ctx.strokeStyle = C('torque'); ctx.lineWidth = 3;
      ctx.fillRect(cx - 58, top, 116, Math.max(2, Math.abs(h))); ctx.strokeRect(cx - 58, top, 116, Math.max(2, Math.abs(h))); ctx.restore();
      text(ctx, signed(b.v, 1) + ' N·m', cx, h >= 0 ? BASE - h - 24 : BASE - h + 24, C('torque'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, b.n, cx, 868, PAL.muted, { size: 18, align: 'center' });
    });
    /* what the picture says */
    const atR = Math.abs(q) < 1e-6, atL = Math.abs(q - S) < 1e-6, atW = Math.abs(q - p) < 1e-6;
    headline(ctx, atL
      ? 'with the pivot at the left hand that hand’s torque is zero, and the other two add to nothing'
      : atR
        ? 'with the pivot at the right hand that hand’s torque is zero, and the other two add to nothing'
        : 'the pivot is ' + fmt(q, 3) + ' m from the right hand, and the three torques still add to zero');
    readout(d.readout,
      `\\text{net}\\;\\ktau = \\ktau_{\\text{R}} + \\ktau_{\\text{w}} + \\ktau_{\\text{L}} = (${signedTex(tR, 1)}) + (${signedTex(tW, 1)}) + (${signedTex(tL, 1)}) = 0\\ \\text{N}\\cdot\\text{m}`,
      atL ? 'The left hand is at the pivot, so its lever arm is zero and its torque drops out. The second condition is then left with one unknown force instead of two, which is why the worked example chooses this pivot.'
        : atR ? 'The right hand is at the pivot, so its lever arm is zero and its torque drops out, and the second condition gives the left hand’s force on its own.'
          : atW ? 'The weight acts at the pivot, so its lever arm is zero and its torque drops out, and the two hand forces are left to balance each other.'
            : 'No force acts at this pivot, so all three torques have to be counted. They still add to zero, which is what lets any pivot point be chosen; the useful ones are those that make the torque of an unknown force vanish.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
