/* Figures for section 9.6 Forces and Torques in Muscles and Joints. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, curve, pinned, silhouette, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }
const G = 9.80;                        /* the acceleration due to gravity, as the chapter takes it */
const RAD = Math.PI / 180;

/* A turning arc about a pivot: an arc of radius r from a0 to a1 (canvas angles,
   y downward) with an arrowhead at the far end. This is how a torque is drawn. */
function turn(ctx, cx, cy, r, a0, a1, color, w) {
  const lw = w || 4;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = lw;
  ctx.beginPath(); ctx.arc(cx, cy, r, a0, a1, a1 < a0); ctx.stroke(); ctx.restore();
  const s = a1 > a0 ? 1 : -1, tan = a1 + s * Math.PI / 2;
  const tx = cx + r * Math.cos(a1), ty = cy + r * Math.sin(a1);
  arrow(ctx, tx - 16 * Math.cos(tan), ty - 16 * Math.sin(tan), tx, ty, color, lw);
}
/* a closed book lying flat, its top edge centred on (cx, top): the cover with the block of pages under it */
function book(ctx, cx, top, w, h, color = PAL.ink) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.fillRect(cx - w / 2, top, w, h); ctx.strokeRect(cx - w / 2, top, w, h);
  ctx.fillStyle = color; ctx.fillRect(cx - w / 2, top, w, 8);                                     /* the cover */
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 1.5; ctx.beginPath();
  for (let y = top + 16; y < top + h - 4; y += 7) { ctx.moveTo(cx - w / 2 + 6, y); ctx.lineTo(cx + w / 2 - 6, y); } ctx.stroke();   /* the pages */
  ctx.restore();
}
/* a box carried in the hands, drawn as the library's crate */
/* =====================================================================
   FIGURE 9.25: the forearm holding a book, with the equivalent lever
   system drawn over it. The elbow is the pivot, the biceps pulls up a
   few centimeters along the forearm and the two weights pull down much
   farther along it, so the second condition can only balance if the
   muscle force is the large one. A forearm held level is in static
   equilibrium and has no time in it, so the figure answers its sliders,
   registers no cycle and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-forearm', 990);
  const R1 = ctl(d.controls, { label: '\\krone', cls: 'position', min: 2, max: 8, step: 0.5, value: 4, unit: 'cm', dec: 1, aria: 'distance from the elbow to the biceps' });
  const MB = ctl(d.controls, { label: '\\km_{\\htmlData{ref=book}{\\text{b}}}', cls: 'mass', min: 0, max: 8, step: 0.5, value: 4, unit: 'kg', dec: 2, aria: 'mass of the book' });
  const R3 = ctl(d.controls, { label: '\\krthree', cls: 'position', min: 25, max: 45, step: 1, value: 38, unit: 'cm', dec: 1, aria: 'distance from the elbow to the book' });
  const MA = 2.50, R2 = 0.160;         /* the book's forearm: 2.50 kg with its centre of gravity 16.0 cm out */
  const PX = 230, PY = 330, S = 1750;  /* the elbow, and the units the scene draws one metre in */
  const force = (r1, mb, r3) => (R2 * MA * G + r3 * mb * G) / r1;

  function draw() {
    const { ctx } = begin(d.c);
    const r1 = R1.v / 100, r3 = R3.v / 100, mb = MB.v;
    const wa = MA * G, wb = mb * G, FB = force(r1, mb, r3), FE = FB - wa - wb;
    /* The arrows run to a fixed 500 N, which is what the book's own forearm asks, so that a
       heavier book lengthens them; an arrow that would pass it stops there and the labels go on
       giving the true forces, and the graph beneath carries the whole range honestly. */
    const FULL = 500, K = 240 / FULL;
    const x1 = PX + r1 * S, x2 = PX + R2 * S, x3 = PX + r3 * S, hand = x3 + 52;

    /* the upper arm, the biceps and the forearm with the book in the hand */
    line(ctx, PX, PY, PX, 170, PAL.muted, 22);                                                     /* the upper arm */
    const cbi = F.ref('biceps'), cfa = F.ref('forearm');
    ctx.save(); ctx.fillStyle = alpha(cbi, 0.25); ctx.strokeStyle = cbi; ctx.lineWidth = 2.5;   /* the biceps, from the upper arm to its tendon on the forearm */
    ctx.beginPath(); ctx.moveTo(PX + 11, 200); ctx.quadraticCurveTo(PX + 60, 236, x1, PY - 8); ctx.quadraticCurveTo(PX + 34, 250, PX + 11, 200); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, PX, PY, hand, PY, cfa, 12);                                                       /* the forearm */
    ctx.save(); ctx.fillStyle = cfa; ctx.beginPath(); ctx.roundRect(hand - 14, PY - 12, 44, 34, 10); ctx.fill(); ctx.restore();   /* the hand */
    dot(ctx, PX, PY, F.ref('elbow'), true, 11);
    if (MB.v > 0) book(ctx, x3, PY + 22, 100, 46, F.ref('book'));

    /* the four forces on the forearm */
    const lB = Math.min(K * FB, 240);
    arrow(ctx, x1, PY, x1, PY - lB, C('force'), 5);
    text(ctx, 'F_B = ' + fmt(FB, 0) + ' N', x1 + 18, PY - lB + 16, C('force'), { size: 22, weight: 600, align: 'left' });
    const la = Math.max(K * wa, 26);
    arrow(ctx, x2, PY, x2, PY + la, C('force'), 5);
    text(ctx, 'w_a = ' + fmt(wa, 1) + ' N', x2 + 14, PY + la + 18, C('force'), { size: 20, weight: 600, align: 'left' });
    if (wb > 0) {
      const lb = Math.max(K * wb, 26);
      arrow(ctx, x3, PY + 68, x3, PY + 68 + lb, C('force'), 5);
      text(ctx, 'w_b = ' + fmt(wb, 1) + ' N', x3 + 14, PY + 68 + lb + 18, C('force'), { size: 20, weight: 600, align: 'left' });
    }
    const le = Math.min(K * FE, 180);
    if (le > 4) {
      arrow(ctx, PX, PY, PX, PY + le, C('force'), 5);
      text(ctx, 'F_E = ' + fmt(FE, 0) + ' N', PX - 16, PY + le / 2, C('force'), { size: 20, weight: 600, align: 'right' });
    }

    /* the two torques the second condition sets equal, as turning arcs about the elbow */
    turn(ctx, PX, PY, 78, 250 * RAD, 190 * RAD, C('torque'));
    turn(ctx, PX, PY, 112, 190 * RAD, 250 * RAD, C('torque'));
    text(ctx, 'τ_B = τ_w = ' + fmt(FB * r1, 1) + ' N·m', 22, 176, C('torque'), { size: 18, weight: 600, align: 'left' });

    /* the three lever arms, measured from the elbow */
    hbracket(ctx, PX, x1, 580, C('position'), 'r₁ = ' + fmt(R1.v, 1) + ' cm');
    hbracket(ctx, PX, x2, 624, C('position'), 'r₂ = 16.0 cm');
    hbracket(ctx, PX, x3, 668, C('position'), 'r₃ = ' + fmt(R3.v, 1) + ' cm');

    /* how the force in the biceps climbs as the tendon moves towards the joint */
    const box = { l: 250, r: 1290, t: 730, b: 916 };   /* the axis title below it stays inside the canvas */
    /* fixed axes: the heaviest book the sliders allow, 8.00 kg at 45.0 cm, held on the shortest
       lever arm, 2.00 cm, asks ((0.160 m)(24.5 N) + (0.450 m)(78.4 N)) / 0.0200 m = 1960 N, so the
       graph is always 2 to 8 cm by 0 to 2000 N, ticked every 500 N, and never rescales */
    const FR = 2000;
    const { X, Y } = axes(ctx, box, [2, 8], [0, FR], {
      xl: 'r₁ (cm)', xc: C('position'), yl: 'F_B (N)', yc: C('force'),
      nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    curve(ctx, (r) => force(r / 100, mb, r3), 2, 8, X, Y, C('force'), 5, 140);
    line(ctx, X(R1.v), Y(Math.min(FB, FR)), X(R1.v), box.b, PAL.muted, 2, [4, 8]);
    pinned(ctx, box, X, Y, R1.v, FB, C('force'), fmt(FB, 0) + ' N');

    if (FB > FULL) text(ctx, 'An arrow stops at 500 N, and the labels go on giving the true forces.', 700, 130, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, 'Pulling ' + fmt(R1.v, 1) + ' cm from the elbow, the biceps exerts ' + fmt(FB, 0) + ' N to hold ' + fmt(wa + wb, 1)
      + ' N, which is ' + fmt(FB / (wa + wb), 2) + ' times the weight it supports.');
    readout(d.readout,
      `\\kFB = \\frac{\\krtwo\\kwarm + \\krthree\\kwbook}{\\krone} = \\frac{(${fmt(R2, 3)}\\ \\text{m})(${fmt(wa, 1)}\\ \\text{N}) + (${fmt(r3, 3)}\\ \\text{m})(${fmt(wb, 1)}\\ \\text{N})}{${fmt(r1, 4)}\\ \\text{m}} = ${fmt(FB, 0)}\\ \\text{N}`,
      `The elbow takes up the difference, $\\kFE = \\kFB - \\kwarm - \\kwbook = ${fmt(FE, 0)}\\ \\text{N}$.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.26: good posture and bad posture. Standing straight, the
   upper body's weight acts through the pivot in the hips and makes no
   torque, so the back muscles hold nothing. Leaning forward gives that
   weight a perpendicular lever arm, and the muscles of the lower back
   answer it on a lever arm of a few centimeters, so their force is very
   large. The body stands in both cases and nothing in the idea has a
   time in it, so the lean is a slider and the figure is still.
===================================================================== */
(function () {
  const d = sim('sim-posture', 720);
  /* The lean runs to 65° rather than 60° so that the 0.350 m lever arm the worked example uses is
     reachable: with the center of gravity 0.400 m up the spine it arrives at 61°, which is given
     a detent of its own, as the upright position is. */
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 65, step: 1, value: 0, unit: '°', dec: 0, aria: 'lean of the upper body away from the vertical',
    specials: [{ at: 0, label: 'upright' }], detents: [{ v: 61, label: 'Example 9.5' }], snap: true });
  const MU = ctl(d.controls, { label: '\\km_{\\text{ub}}', cls: 'mass', min: 40, max: 80, step: 1, value: 55, unit: 'kg', dec: 1, aria: 'mass of the upper body' });
  const RB = ctl(d.controls, { label: '\\krbperp', cls: 'position', min: 4, max: 12, step: 0.5, value: 8, unit: 'cm', dec: 1, aria: 'perpendicular lever arm of the back muscles' });
  const DCG = 0.400, SP = 308;         /* the centre of gravity sits 0.400 m up the spine, which makes its lever */
  const FX = 250, GY = 600, TRUNK = 210;  /* arm the 0.350 m of Example 9.5 at the lean the book draws there */
  const muscle = (th, mub, rb) => (mub * G * DCG * Math.sin(th * RAD)) / rb;

  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, wub = MU.v * G, rb = RB.v / 100;
    const rperp = DCG * Math.sin(th), FB = muscle(TH.v, MU.v, rb);
    const hip = [FX - 62 * Math.sin(th), 380];
    const u = [Math.sin(th), -Math.cos(th)];                 /* along the spine, from the hips upward */
    const n = [-Math.cos(th), -Math.sin(th)];                /* behind the spine */
    const cg = [hip[0] + DCG * SP * u[0], hip[1] + DCG * SP * u[1]];
    const top = [hip[0] + TRUNK * u[0], hip[1] + TRUNK * u[1]];

    /* the ground, the legs and the base of support */
    line(ctx, 70, GY, 640, GY, PAL.muted, 3);
    hbracket(ctx, FX - 46, FX + 52, GY + 34, PAL.muted, 'base of support');
    /* the whole body, the legs planted and the trunk pivoted at the hips, in the silhouette's own frame */
    const ps = 2.4, J = (q) => ({ x: (q[0] - FX) / ps, y: (q[1] - GY) / ps });
    const sh = [hip[0] + 160 * u[0], hip[1] + 160 * u[1]], hd = [hip[0] + (TRUNK + 14) * u[0], hip[1] + (TRUNK + 14) * u[1]];
    const hnd = [sh[0] - 50 * n[0] + 10 * u[0], sh[1] - 50 * n[1] + 10 * u[1]];
    silhouette(ctx, { x: FX, y: GY, s: ps, color: F.ref('person'), pose: 'stand', feet: [J([FX + 16, GY]), J([FX - 12, GY])], hip: J(hip), shoulder: J(sh), head: J(hd), hands: [J(hnd), J([hnd[0] - 10, hnd[1] + 8])], kneeSide: 1, elbowSide: -1 });
    dot(ctx, hip[0], hip[1], PAL.ink, true, 11);
    text(ctx, 'hips', hip[0] - 22, hip[1] + 8, PAL.muted, { size: 17, align: 'right' });

    /* the weight of the upper body through its centre of gravity, and its lever arm */
    dot(ctx, cg[0], cg[1], PAL.ink, false, 10);
    text(ctx, 'cg', cg[0] + 18, cg[1] - 16, PAL.muted, { size: 17, align: 'left' });
    const lw = 0.12 * wub;
    arrow(ctx, cg[0], cg[1], cg[0], cg[1] + lw, C('force'), 5);
    text(ctx, 'w_ub = ' + fmt(wub, 0) + ' N', cg[0] + 14, cg[1] + lw + 18, C('force'), { size: 20, weight: 600, align: 'left' });
    if (TH.v > 0) {
      /* the lever arm is measured below the ground, clear of the legs */
      line(ctx, hip[0], hip[1], hip[0], GY + 96, alpha(PAL.ink, 0.35), 2, [6, 8]);
      line(ctx, cg[0], cg[1] + lw, cg[0], GY + 96, alpha(PAL.ink, 0.35), 2, [6, 8]);
      hbracket(ctx, hip[0], cg[0], GY + 96, C('position'), 'r⊥ = ' + fmt(rperp, 3) + ' m');
    }

    /* the back muscles: a cable parallel to the spine, offset behind it by its lever arm */
    const a = [hip[0] + rb * SP * n[0], hip[1] + rb * SP * n[1]];
    const b = [a[0] + 132 * u[0], a[1] + 132 * u[1]];
    line(ctx, a[0], a[1], b[0], b[1], F.ref('back-muscles'), 9);
    line(ctx, hip[0], hip[1], a[0], a[1], C('position'), 3);
    /* the muscle's names sit behind the back, away from the body */
    text(ctx, 'r_b⊥ = ' + fmt(RB.v, 1) + ' cm', a[0] + 26 * n[0] - 8, a[1] + 26 * n[1] - 8, C('position'), { size: 17, weight: 600, align: 'right', bg: PAL.panel });
    if (FB > 0) {
      const lf = Math.max(Math.min(170 * FB / 2600, 170), 28);
      arrow(ctx, b[0], b[1], b[0] - lf * u[0], b[1] - lf * u[1], C('force'), 5);
      /* the label goes to the right of the arrowhead, which keeps it on the canvas at the
         deepest lean, where the muscle is drawn furthest to the left */
      label(ctx, 'F_B = ' + fmt(FB, 0) + ' N', b[0] - lf * u[0], b[1] - lf * u[1], { side: 'left', color: C('force'), gap: 16, size: 20 });
      turn(ctx, hip[0], hip[1], 62, 300 * RAD, 240 * RAD, C('torque'));
      turn(ctx, hip[0], hip[1], 92, 240 * RAD, 300 * RAD, C('torque'));
    }
    if (FB > 0) text(ctx, 'τ = ' + fmt(wub * rperp, 1) + ' N·m each way', 660, 556, C('torque'), { size: 18, weight: 600, align: 'right' });

    /* the force the back muscles must exert, against the lean */
    const box = { l: 820, r: 1330, t: 190, b: 520 };
    /* fixed axes: the heaviest upper body the sliders allow, 80.0 kg, leaned the full 65° over the
       shortest lever arm, 4.00 cm, asks (784 N)(0.400 m)(sin 65°) / 0.0400 m = 7100 N, so the graph
       is always 0 to 70° by 0 to 8000 N, ticked every 10° and every 1000 N, and never rescales */
    const FR2 = 8000, THR = 70;
    const { X, Y } = axes(ctx, box, [0, THR], [0, FR2], {
      xl: 'lean θ (°)', xc: C('angle'), yl: 'F_B (N)', yc: C('force'),
      nx: 7, ny: 8, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    curve(ctx, (t) => Math.min(muscle(t, MU.v, rb), FR2), 0, 65, X, Y, C('force'), 5, 120);
    line(ctx, X(TH.v), Y(Math.min(FB, FR2)), X(TH.v), box.b, PAL.muted, 2, [4, 8]);
    pinned(ctx, box, X, Y, TH.v, FB, C('force'), fmt(FB, 0) + ' N');

    headline(ctx, TH.v === 0
      ? 'Standing straight, the weight of the upper body acts through the hips and makes no torque at all.'
      : 'Leaning ' + fmt(TH.v, 0) + '° puts the center of gravity ' + fmt(rperp, 3) + ' m in front of the hips, so the muscles must pull ' + fmt(FB, 0) + ' N.');
    readout(d.readout,
      `\\kFB = \\frac{\\kwub\\,\\krperp}{\\krbperp} = \\frac{(${fmt(wub, 0)}\\ \\text{N})(${fmt(rperp, 3)}\\ \\text{m})}{${fmt(rb, 4)}\\ \\text{m}} = ${fmt(FB, 0)}\\ \\text{N}`,
      TH.v === 0 ? null
        : 'The weight hangs ' + fmt(rperp / rb, 1) + ' times farther from the hips than the muscles pull, so the muscles must pull ' + fmt(rperp / rb, 1) + ' times as hard as the weight they hold.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.28: lifting a box with the back, seen from the side as the
   book draws it. The pivot is in the hips, the weight of the upper body
   and the weight of the box both hang far in front of it, and the back
   muscles answer both on a lever arm of 8.00 cm. The bars beside the
   scene compare the weight being supported with the force in the
   muscles and the force the vertebrae carry. The box goes up at constant
   speed, so the scene is a frozen one and the figure registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-lift', 760);
  const MBX = ctl(d.controls, { label: '\\km_{\\htmlData{ref=box}{\\text{box}}}', cls: 'mass', min: 0, max: 50, step: 1, value: 30, unit: 'kg', dec: 1, aria: 'mass of the box' });
  const RBX = ctl(d.controls, { label: 'r_{\\text{box}}', cls: 'position', min: 30, max: 70, step: 1, value: 50, unit: 'cm', dec: 1, aria: 'distance from the hips to the box' });
  const MUB = ctl(d.controls, { label: '\\km_{\\text{ub}}', cls: 'mass', min: 40, max: 80, step: 1, value: 55, unit: 'kg', dec: 1, aria: 'mass of the upper body' });
  const RUB = 0.350, RM = 0.0800, ANG = 29.0 * RAD;   /* the book's lever arms, and the angle of the spine and the muscles */
  /* One scale for the person and the lever arms: the silhouette at s = 3.2 stands 480 units, a
     person of 1.75 m, so a metre is 274 units. Bent 29° at hips 74 of its 150 units up, over
     the nearly straight legs a lift with the back has, the shoulder sits 0.47 m in front of the
     hips, and the hands reach the box's handles from 0.30 m to 0.70 m with the elbows bent. */
  const P = 3.2, SC = 150 * P / 1.75, HX = 360, GY = 600;
  const hip = { x: HX, y: GY - 74 * P };
  const u = [Math.cos(ANG), -Math.sin(ANG)], n = [-Math.sin(ANG), -Math.cos(ANG)];
  const sh = { x: hip.x + 46 * P * u[0], y: hip.y + 46 * P * u[1] };
  const head = { x: sh.x + 20 * P * Math.cos(15 * RAD), y: sh.y - 20 * P * Math.sin(15 * RAD) };
  const feet = [{ x: HX + 16 * P, y: GY }, { x: HX + 4 * P, y: GY }];
  const BW = 0.24 * SC, BH = 0.35 * SC, BT = hip.y + 0.16 * SC;           /* the box, 24 cm deep and 35 cm tall, its top just below the hips */
  const HDL = BT + 0.075 * SC;                                              /* the handle slot in its near face */
  const K = 200 / 8000;     /* arrows to a fixed 8000 N, the heaviest box at the longest reach; one past it stops there */
  const ah = (f) => Math.min(Math.max(K * f, 40), 200);
  const J = (p) => ({ x: (p.x - HX) / P, y: (p.y - GY) / P });
  /* blocks a run of small boxes along a segment, so labels step round a body or an arrow */
  const along = (lab, x1, y1, x2, y2, r) => { const L = Math.hypot(x2 - x1, y2 - y1), k = Math.max(1, Math.ceil(L / 12)); for (let i = 0; i <= k; i++) { const x = x1 + (x2 - x1) * i / k, y = y1 + (y2 - y1) * i / k; lab.block(x - r, y - r, x + r, y + r); } };
  let hits = [];
  F.hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), cp = C('position'), ca = C('angle'), cl = F.ref('lifter'), cb = F.ref('box'), cm = F.ref('back-muscles');
    const wub = MUB.v * G, wbox = MBX.v * G, rbox = RBX.v / 100, has = MBX.v > 0;
    const FB = (RUB * wub + rbox * wbox) / RM;
    const FVy = wub + wbox + FB * Math.sin(ANG), FVx = FB * Math.cos(ANG);
    const FV = Math.hypot(FVx, FVy), th = Math.atan2(FVy, FVx);
    const xub = HX + RUB * SC, yub = hip.y - RUB * SC * Math.tan(ANG), xbox = HX + rbox * SC, ybox = BT + BH / 2;

    const rows = headline(ctx, (has ? 'A ' + fmt(MBX.v, 1) + ' kg box lifted with the back makes' : 'With no box, the upper body alone makes')
      + ' the muscles pull $\\kFB = ' + fmt(FB, 0) + '\\ \\text{N}$ and loads the vertebrae with $\\kFV = ' + fmt(FV, 0) + '\\ \\text{N}$.');
    const lab = F.labeller(ctx, 760, { headline: rows });

    /* the lever arms, measured below the ground from faint drop lines the body and the box cover */
    const B1 = GY + 56, B2 = GY + 116;
    line(ctx, HX, hip.y, HX, B2, alpha(PAL.ink, 0.3), 2, [4, 8]);
    line(ctx, xub, yub, xub, B1, alpha(PAL.ink, 0.3), 2, [4, 8]);
    if (has) line(ctx, xbox, ybox, xbox, B2, alpha(PAL.ink, 0.3), 2, [4, 8]);
    line(ctx, 60, GY, 760, GY, PAL.muted, 3);
    hbracket(ctx, HX, xub, B1, cp);
    lab.add('r_ub⊥ = 0.350 m', (HX + xub) / 2, B1, 0, -1, cp, 20, 26);
    if (has) { hbracket(ctx, HX, xbox, B2, cp); lab.add('r_box⊥ = ' + fmt(rbox, 3) + ' m', (HX + xbox) / 2, B2, 0, -1, cp, 20, 26); }

    /* the box with a handle slot in its near face, behind the arms that hold it */
    if (has) {
      F.crate(ctx, xbox, ybox, BW, BH, cb);
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = cb; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(xbox - 0.07 * SC, HDL - 0.026 * SC, 0.14 * SC, 0.052 * SC, 0.026 * SC); ctx.fill(); ctx.stroke(); ctx.restore();
      lab.block(xbox - BW / 2, BT, xbox + BW / 2, BT + BH);
    }
    /* the person, bent 29° at the hips over nearly straight legs, the hands in the slot or hanging free */
    const hands = has ? [{ x: xbox - 1.5 * P, y: HDL + 0.5 * P }, { x: xbox + 1.5 * P, y: HDL }] : [{ x: sh.x + 2.5 * P, y: sh.y + 50 * P }, { x: sh.x + 0.5 * P, y: sh.y + 49 * P }];
    silhouette(ctx, { x: HX, y: GY, s: P, color: cl, pose: 'stand', feet: feet.map(J), hip: J(hip), shoulder: J(sh), head: J(head), hands: hands.map(J), kneeSide: -1, elbowSide: -1 });
    along(lab, hip.x, hip.y, sh.x, sh.y, 10 * P); along(lab, sh.x, sh.y, head.x, head.y, 6 * P); lab.block(head.x - 13 * P, head.y - 13 * P, head.x + 13 * P, head.y + 13 * P);
    feet.forEach((f) => along(lab, hip.x + 5 * P, hip.y + 5 * P, f.x + 6 * P, f.y, 6 * P));
    hands.forEach((h) => along(lab, sh.x, sh.y, h.x, h.y, 7 * P));

    /* the back muscles, parallel to the spine and offset behind it by their lever arm */
    const a = { x: hip.x + RM * SC * n[0], y: hip.y + RM * SC * n[1] }, b = { x: a.x + 30 * P * u[0], y: a.y + 30 * P * u[1] };
    line(ctx, a.x, a.y, b.x, b.y, cm, 9);
    line(ctx, hip.x, hip.y, a.x, a.y, cp, 3);
    along(lab, a.x, a.y, b.x, b.y, 8);
    lab.add('r_b⊥ = 0.0800 m', a.x, a.y, n[0], n[1], cp, 20, 18);


    /* the muscles pull the upper body toward the pelvis */
    const lf = ah(FB), fb = { x: a.x - lf * u[0], y: a.y - lf * u[1] };
    lab.halo({ x1: a.x, y1: a.y, x2: fb.x, y2: fb.y }, 12);
    arrow(ctx, a.x, a.y, fb.x, fb.y, cf, 5);
    along(lab, a.x, a.y, fb.x, fb.y, 8);
    lab.add('F_B', fb.x, fb.y, -u[0], -u[1], cf, 24, 16);
    /* the vertebrae push back on it at the pivot, at θ above the horizontal */
    const lv = ah(FV), tl = { x: hip.x - lv * Math.cos(th), y: hip.y + lv * Math.sin(th) };
    lab.halo({ x1: tl.x, y1: tl.y, x2: hip.x, y2: hip.y }, 12);
    arrow(ctx, tl.x, tl.y, hip.x, hip.y, cf, 5);
    along(lab, tl.x, tl.y, hip.x, hip.y, 8);
    F.angleArc(ctx, tl, 56, 0, th, 'θ', undefined, ca);
    lab.place({ l: tl.x + 76 * Math.cos(th / 2) - 14, t: tl.y - 76 * Math.sin(th / 2) - 14, r: tl.x + 76 * Math.cos(th / 2) + 14, b: tl.y - 76 * Math.sin(th / 2) + 14 });
    lab.add('F_V', tl.x, tl.y, -Math.cos(th), Math.sin(th), cf, 24, 16);
    dot(ctx, hip.x, hip.y, PAL.ink, true, 11);

    /* the weights, from the two centers of gravity */
    const lu = Math.max(ah(wub), 70);
    dot(ctx, xub, yub, PAL.ink, false, 10);
    lab.halo({ x1: xub, y1: yub, x2: xub, y2: yub + lu }, 12);
    arrow(ctx, xub, yub, xub, yub + lu, cf, 5);
    along(lab, xub, yub, xub, yub + lu, 8);
    lab.add('w_ub', xub, yub, 0, -1, cf, 24, 40);
    if (has) {
      const lx = ah(wbox);
      dot(ctx, xbox, ybox, PAL.ink, false, 10);
      lab.halo({ x1: xbox, y1: ybox, x2: xbox, y2: ybox + lx }, 12);
      arrow(ctx, xbox, ybox, xbox, ybox + lx, cf, 5);
      along(lab, xbox, ybox, xbox, ybox + lx, 8);
      lab.add('w_box', xbox, ybox + lx, 1, 0.4, cf, 24, 18);
    }
    d.fig.dataset.missed = lab.flush().join(" | ");

    /* the three forces side by side, which is the comparison the example ends on, to a fixed
       9000 N taken from the heaviest box at the longest reach */
    const rowsB = [['the weight supported', wub + wbox], ['the back muscles', FB], ['the vertebrae', FV]];
    const mx = 9000, BL = 1000, BWD = 280;
    rowsB.forEach((row, i) => {
      const y = 240 + i * 86, w = Math.max(Math.min(row[1] / mx, 1) * BWD, 3);
      text(ctx, row[0], BL - 20, y, PAL.ink, { size: 19, align: 'right' });
      ctx.save(); ctx.fillStyle = cf; ctx.fillRect(BL, y - 18, w, 36); ctx.restore();
      text(ctx, fmt(row[1], 0) + ' N', BL + w + 12, y, cf, { size: 19, weight: 600, align: 'left' });
    });

    hits = [
      { x: head.x, y: head.y, r: 50, name: 'the person lifting' },
      { x: hip.x, y: hip.y, r: 16, name: 'the pivot in the hips' },
      { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, r: 30, name: 'the back muscles' },
      { x: xub, y: yub, r: 14, name: 'the center of gravity of the upper body' },
      ...(has ? [{ x: xbox, y: ybox, r: 14, name: 'the center of gravity of the box' }, { x: xbox, y: ybox, r: BH / 2, name: 'the box' }] : []),
    ];
    readout(d.readout,
      `\\kFB = \\frac{(${fmt(RUB, 3)}\\ \\text{m})\\kwub${has ? ` + (${fmt(rbox, 3)}\\ \\text{m})\\kwbox` : ''}}{\\krbperp} = \\frac{(${fmt(RUB, 3)}\\ \\text{m})(${fmt(wub, 0)}\\ \\text{N})${has ? ` + (${fmt(rbox, 3)}\\ \\text{m})(${fmt(wbox, 0)}\\ \\text{N})` : ''}}{${fmt(RM, 4)}\\ \\text{m}} = ${fmt(FB, 0)}\\ \\text{N}`,
      `With $\\kFVx = ${fmt(FVx, 0)}\\ \\text{N}$ and $\\kFVy = ${fmt(FVy, 0)}\\ \\text{N}$, the vertebrae push at $\\ktheta = ${fmt(th / RAD, 1)}°$ above the horizontal.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: what the short lever arm buys. The section answers its own
   question about the benefits of attaching muscles close to joints with
   speed, flexibility and agility, and draws nothing for the answer. The
   biceps runs from the upper arm to a point a few centimeters along the
   forearm, so closing the elbow shortens it by about a centimeter while
   the hand sweeps ten times as far. The elbow angle is a slider and not
   a clock, so the figure is still, as every figure of this chapter is.
===================================================================== */
(function () {
  const d = sim('sim-lever-arm-trade', 770);
  const PH = ctl(d.controls, { label: '\\varphi', cls: 'angle', min: 40, max: 140, step: 1, value: 70, unit: '°', dec: 0, aria: 'angle at the elbow',
    specials: [{ at: 90, label: 'Example 9.4' }] });
  const R1 = ctl(d.controls, { label: '\\krone', cls: 'position', min: 2, max: 8, step: 0.5, value: 4, unit: 'cm', dec: 1, aria: 'distance from the elbow to the biceps' });
  const { formula, note } = F.readout(d);
  const HUM = 0.250, HAND = 0.380;    /* the biceps runs from 25.0 cm up the humerus, and the hand sits where the book has it */
  const EX = 430, EY = 400, S = 700;   /* the forearm opened to 140° stays above the bars */
  const len = (ph, r1) => Math.sqrt(HUM * HUM + r1 * r1 - 2 * HUM * r1 * Math.cos(ph * RAD));

  function draw() {
    const { ctx } = begin(d.c);
    const ph = PH.v, r1 = R1.v / 100;
    const dL = len(ph, r1) - len(90, r1), ds = HAND * Math.abs(ph - 90) * RAD;
    const dir = (a) => [Math.sin(a * RAD), -Math.cos(a * RAD)];
    const up = [EX, EY - HUM * S], now = dir(ph), ref = dir(90);

    /* the upper arm, with the forearm of Example 9.4 drawn faint behind the one the slider sets */
    line(ctx, EX, EY, EX, EY - 0.300 * S, PAL.muted, 16);
    dot(ctx, up[0], up[1], PAL.muted, true, 8);
    text(ctx, '25.0 cm up the humerus', up[0] - 22, up[1], PAL.muted, { size: 17, align: 'right' });
    line(ctx, EX, EY, EX + HAND * S * ref[0], EY + HAND * S * ref[1], PAL.rule, 9);
    line(ctx, up[0], up[1], EX + r1 * S * ref[0], EY + r1 * S * ref[1], PAL.rule, 8);
    line(ctx, up[0], up[1], EX + r1 * S * now[0], EY + r1 * S * now[1], alpha(F.ref('biceps'), 0.6), 13);
    line(ctx, EX, EY, EX + HAND * S * now[0], EY + HAND * S * now[1], F.ref('forearm'), 11);
    dot(ctx, EX, EY, F.ref('elbow'), true, 11);
    text(ctx, 'elbow', EX - 22, EY + 32, PAL.muted, { size: 17, align: 'right' });
    dot(ctx, EX + r1 * S * now[0], EY + r1 * S * now[1], C('position'), true, 9);
    dot(ctx, EX + HAND * S * ref[0], EY + HAND * S * ref[1], PAL.ink, false, 10);
    dot(ctx, EX + HAND * S * now[0], EY + HAND * S * now[1], PAL.ink, true, 10);
    text(ctx, 'hand', EX + HAND * S * now[0] + 20, EY + HAND * S * now[1], PAL.muted, { size: 17, align: 'left' });

    /* the arc the hand sweeps out as the elbow closes */
    if (ds > 0.002) {
      const a0 = Math.atan2(ref[1], ref[0]), a1 = Math.atan2(now[1], now[0]);
      turn(ctx, EX, EY, HAND * S, a0, a1, C('position'), 4);
    }
    text(ctx, 'φ = ' + fmt(ph, 0) + '°', EX - 22, EY - 46, C('angle'), { size: 22, weight: 600, align: 'right' });

    /* the contraction beside the movement it produces, drawn to one scale */
    const SB = 900 / (HAND * 50 * RAD), BL = 320;
    const bars = [['the biceps changes length by', Math.abs(dL)], ['the hand moves', ds]];
    bars.forEach((row, i) => {
      const y = 636 + i * 70, w = Math.max(row[1] * SB, 2);
      text(ctx, row[0], BL - 18, y, PAL.ink, { size: 19, align: 'right' });
      ctx.save(); ctx.fillStyle = C('position'); ctx.fillRect(BL, y - 14, w, 28); ctx.restore();
      text(ctx, fmt(row[1] * 100, 2) + ' cm', BL + w + 12, y, C('position'), { size: 19, weight: 600, align: 'left' });
    });

    headline(ctx, Math.abs(ph - 90) < 0.5
      ? 'At 90° the forearm stands where Example 9.4 holds it, so neither the biceps nor the hand has moved.'
      : (ph < 90 ? 'Closing' : 'Opening') + ' the elbow to ' + fmt(ph, 0) + '° '
        + (ph < 90 ? 'shortens' : 'lengthens') + ' the biceps by ' + fmt(Math.abs(dL) * 100, 2)
        + ' cm while the hand sweeps ' + fmt(ds * 100, 1) + ' cm, which is ' + fmt(ds / Math.abs(dL), 1) + ' times as far.');
    /* at 90° nothing has moved, and the ratio unfolds into its two parts, each of them nothing */
    F.morph(formula,
      Math.abs(dL) < 1e-4
        ? `\\mk{s}{\\Delta s} = \\mk{l}{\\Delta L} = \\mk{n}{0}\\ \\text{cm}`
        : `\\frac{\\mk{s}{\\Delta s}}{\\mk{l}{\\Delta L}} = \\frac{\\mk{sn}{${fmt(ds * 100, 1)}}\\ \\text{cm}}{\\mk{ln}{${fmt(Math.abs(dL) * 100, 2)}}\\ \\text{cm}} = \\mk{q}{${fmt(ds / Math.abs(dL), 1)}}`);
    note.textContent = '';
  }
  register(d.fig, { update: () => {}, draw });
})();

};
