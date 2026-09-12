/* Figures for section 9.6 Forces and Torques in Muscles and Joints. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
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
/* a rectangle standing for a book or a box, drawn in ink on the page's own panel */
function crate(ctx, cx, top, w, h) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.fillRect(cx - w / 2, top, w, h); ctx.strokeRect(cx - w / 2, top, w, h); ctx.restore();
  line(ctx, cx - w / 2 + 14, top + h / 2, cx + w / 2 - 14, top + h / 2, PAL.rule, 2);
}

/* =====================================================================
   FIGURE 9.25: the forearm holding a book, with the equivalent lever
   system drawn over it. The elbow is the pivot, the biceps pulls up a
   few centimetres along the forearm and the two weights pull down much
   farther along it, so the second condition can only balance if the
   muscle force is the large one. A forearm held level is in static
   equilibrium and has no time in it, so the figure answers its sliders,
   registers no cycle and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-forearm', 990);
  const R1 = ctl(d.controls, { label: '\\krone', cls: 'position', min: 2, max: 8, step: 0.5, value: 4, unit: 'cm', dec: 1, aria: 'distance from the elbow to the biceps' });
  const MB = ctl(d.controls, { label: 'm_{\\text{b}}', cls: '', min: 0, max: 8, step: 0.5, value: 4, unit: 'kg', dec: 2, aria: 'mass of the book' });
  const R3 = ctl(d.controls, { label: '\\krthree', cls: 'position', min: 25, max: 45, step: 1, value: 38, unit: 'cm', dec: 1, aria: 'distance from the elbow to the book' });
  const MA = 2.50, R2 = 0.160;         /* the book's forearm: 2.50 kg with its centre of gravity 16.0 cm out */
  const PX = 230, PY = 330, S = 1750;  /* the elbow, and the units the scene draws one metre in */
  const force = (r1, mb, r3) => (R2 * MA * G + r3 * mb * G) / r1;

  function draw() {
    const { ctx } = begin(d.c);
    const r1 = R1.v / 100, r3 = R3.v / 100, mb = MB.v;
    const wa = MA * G, wb = mb * G, FB = force(r1, mb, r3), FE = FB - wa - wb;
    const K = 240 / Math.max(FB, 260);                 /* the biceps arrow is 240 units long whenever the force is large */
    const x1 = PX + r1 * S, x2 = PX + R2 * S, x3 = PX + r3 * S, hand = x3 + 52;

    /* the upper arm, the biceps and the forearm with the book in the hand */
    line(ctx, PX, PY, PX, 200, PAL.muted, 16);
    line(ctx, PX + 13, 218, x1, PY - 6, PAL.soft2, 14);
    line(ctx, PX, PY, hand, PY, PAL.ink, 11);
    dot(ctx, PX, PY, PAL.ink, true, 11);
    crate(ctx, x3, PY + 26, 96, 48);

    /* the four forces on the forearm */
    const lB = Math.min(K * FB, 240);
    arrow(ctx, x1, PY, x1, PY - lB, C('force'), 5);
    text(ctx, 'F_B = ' + fmt(FB, 0) + ' N', x1 + 18, PY - lB + 16, C('force'), { size: 22, weight: 600, align: 'left' });
    const la = Math.max(K * wa, 26);
    arrow(ctx, x2, PY, x2, PY + la, C('force'), 5);
    text(ctx, 'w_a = ' + fmt(wa, 1) + ' N', x2 + 14, PY + la + 18, C('force'), { size: 20, weight: 600, align: 'left' });
    if (wb > 0) {
      const lb = Math.max(K * wb, 26);
      arrow(ctx, x3, PY + 74, x3, PY + 74 + lb, C('force'), 5);
      text(ctx, 'w_b = ' + fmt(wb, 1) + ' N', x3 + 14, PY + 74 + lb + 18, C('force'), { size: 20, weight: 600, align: 'left' });
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
    const box = { l: 250, r: 1290, t: 740, b: 930 };
    const top = nice(0, force(0.02, mb, r3), 4);
    const { X, Y } = axes(ctx, box, [2, 8], [0, top.hi], {
      xl: 'r₁ (cm)', xc: C('position'), yl: 'F_B (N)', yc: C('force'),
      nx: 6, ny: top.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    curve(ctx, (r) => force(r / 100, mb, r3), 2, 8, X, Y, C('force'), 5, 140);
    line(ctx, X(R1.v), Y(FB), X(R1.v), box.b, PAL.muted, 2, [4, 8]);
    dot(ctx, X(R1.v), Y(FB), C('force'), true, 10);

    headline(ctx, 'r₁ = ' + fmt(R1.v, 1) + ' cm · the biceps pulls with ' + fmt(FB, 0) + ' N to hold ' + fmt(wa + wb, 1)
      + ' N, ' + fmt(FB / (wa + wb), 2) + ' times the weight it supports');
    readout(d.readout,
      `\\kFB = \\frac{\\krtwo\\kwarm + \\krthree\\kwbook}{\\krone} = \\frac{(${fmt(R2, 3)}\\ \\text{m})(${fmt(wa, 1)}\\ \\text{N}) + (${fmt(r3, 3)}\\ \\text{m})(${fmt(wb, 1)}\\ \\text{N})}{${fmt(r1, 4)}\\ \\text{m}} = ${fmt(FB, 0)}\\ \\text{N}`,
      'The humerus pushes down on the forearm at the elbow with ' + fmt(FE, 0)
      + ' N, so the muscle and the joint act in opposite directions and leave just the ' + fmt(wa + wb, 1)
      + ' N that is actually being supported.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.26: good posture and bad posture. Standing straight, the
   upper body's weight acts through the pivot in the hips and makes no
   torque, so the back muscles hold nothing. Leaning forward gives that
   weight a perpendicular lever arm, and the muscles of the lower back
   answer it on a lever arm of a few centimetres, so their force is very
   large. The body stands in both cases and nothing in the idea has a
   time in it, so the lean is a slider and the figure is still.
===================================================================== */
(function () {
  const d = sim('sim-posture', 720);
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 60, step: 1, value: 0, unit: '°', dec: 0, aria: 'lean of the upper body away from the vertical' });
  const MU = ctl(d.controls, { label: 'm_{\\text{ub}}', cls: '', min: 40, max: 80, step: 1, value: 55, unit: 'kg', dec: 1, aria: 'mass of the upper body' });
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
    line(ctx, hip[0], hip[1], FX - 12, GY, PAL.ink, 10);
    line(ctx, hip[0], hip[1], FX + 16, GY, PAL.ink, 10);
    /* the upper body, pivoted at the hips */
    line(ctx, hip[0], hip[1], top[0], top[1], PAL.ink, 12);
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath();
    ctx.arc(top[0] + 26 * u[0], top[1] + 26 * u[1], 26, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    dot(ctx, hip[0], hip[1], PAL.ink, true, 11);
    text(ctx, 'hips', hip[0] - 22, hip[1] + 8, PAL.muted, { size: 17, align: 'right' });

    /* the weight of the upper body through its centre of gravity, and its lever arm */
    dot(ctx, cg[0], cg[1], PAL.ink, false, 10);
    text(ctx, 'cg', cg[0] + 18, cg[1] - 16, PAL.muted, { size: 17, align: 'left' });
    const lw = 0.12 * wub;
    arrow(ctx, cg[0], cg[1], cg[0], cg[1] + lw, C('force'), 5);
    text(ctx, 'w_ub = ' + fmt(wub, 0) + ' N', cg[0] + 14, cg[1] + lw + 18, C('force'), { size: 20, weight: 600, align: 'left' });
    if (TH.v > 0) {
      line(ctx, hip[0], hip[1], hip[0], 546, PAL.rule, 2, [6, 8]);
      line(ctx, cg[0], cg[1] + lw, cg[0], 546, PAL.rule, 2, [6, 8]);
      hbracket(ctx, hip[0], cg[0], 546, C('position'), 'r⊥ = ' + fmt(rperp, 3) + ' m');
    }

    /* the back muscles: a cable parallel to the spine, offset behind it by its lever arm */
    const a = [hip[0] + rb * SP * n[0], hip[1] + rb * SP * n[1]];
    const b = [a[0] + 132 * u[0], a[1] + 132 * u[1]];
    line(ctx, a[0], a[1], b[0], b[1], PAL.muted, 9);
    line(ctx, hip[0], hip[1], a[0], a[1], C('position'), 3);
    text(ctx, 'r_b⊥ = ' + fmt(RB.v, 1) + ' cm', a[0] - 14, a[1] - 20, C('position'), { size: 17, weight: 600, align: 'right' });
    if (FB > 0) {
      const lf = Math.max(Math.min(170 * FB / 2600, 170), 28);
      arrow(ctx, b[0], b[1], b[0] - lf * u[0], b[1] - lf * u[1], C('force'), 5);
      text(ctx, 'F_B = ' + fmt(FB, 0) + ' N', b[0] - lf * u[0] - 16, b[1] - lf * u[1] - 20, C('force'), { size: 20, weight: 600, align: 'right' });
      turn(ctx, hip[0], hip[1], 62, 300 * RAD, 240 * RAD, C('torque'));
      turn(ctx, hip[0], hip[1], 92, 240 * RAD, 300 * RAD, C('torque'));
    }
    text(ctx, FB > 0 ? 'τ = ' + fmt(wub * rperp, 1) + ' N·m each way' : 'no torque about the hips at all',
      660, 556, C('torque'), { size: 18, weight: 600, align: 'right' });

    /* the force the back muscles must exert, against the lean */
    const box = { l: 820, r: 1330, t: 190, b: 520 };
    const top2 = nice(0, Math.max(muscle(60, MU.v, rb), 100), 4);
    const { X, Y } = axes(ctx, box, [0, 60], [0, top2.hi], {
      xl: 'lean θ (°)', yl: 'F_B (N)', yc: C('force'),
      nx: 6, ny: top2.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    curve(ctx, (t) => muscle(t, MU.v, rb), 0, 60, X, Y, C('force'), 5, 120);
    line(ctx, X(TH.v), Y(FB), X(TH.v), box.b, PAL.muted, 2, [4, 8]);
    dot(ctx, X(TH.v), Y(FB), C('force'), true, 10);

    headline(ctx, TH.v === 0
      ? 'Standing straight, the weight of the upper body acts through the hips and makes no torque at all'
      : 'Leaning ' + fmt(TH.v, 0) + '° puts the center of gravity ' + fmt(rperp, 3) + ' m in front of the hips, and the muscles pull ' + fmt(FB, 0) + ' N');
    readout(d.readout,
      `\\kFB = \\frac{\\kwub\\,\\krperp}{\\krbperp} = \\frac{(${fmt(wub, 0)}\\ \\text{N})(${fmt(rperp, 3)}\\ \\text{m})}{${fmt(rb, 4)}\\ \\text{m}} = ${fmt(FB, 0)}\\ \\text{N}`,
      TH.v === 0
        ? 'With no torque to counter, the only force needed at the hips is a vertical one equal to the weight supported, and the bones carry it up from the floor.'
        : 'The weight hangs ' + fmt(rperp / rb, 1) + ' times farther from the hips than the muscles pull, so the muscles must pull ' + fmt(rperp / rb, 1) + ' times as hard as the weight they hold.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.28: lifting a box with the back. The pivot is in the hips,
   the weight of the upper body and the weight of the box both hang far
   in front of it, and the back muscles answer both on a lever arm of
   8.00 cm. The bars beside the scene compare the weight being supported
   with the force in the muscles and the force the vertebrae carry. The
   box goes up at constant speed, so the scene is a frozen one and the
   figure registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-lift', 820);
  const MBX = ctl(d.controls, { label: 'm_{\\text{box}}', cls: '', min: 0, max: 50, step: 1, value: 30, unit: 'kg', dec: 1, aria: 'mass of the box' });
  const RBX = ctl(d.controls, { label: 'r_{\\text{box}}', cls: 'position', min: 30, max: 70, step: 1, value: 50, unit: 'cm', dec: 1, aria: 'distance from the hips to the box' });
  const MUB = ctl(d.controls, { label: 'm_{\\text{ub}}', cls: '', min: 40, max: 80, step: 1, value: 55, unit: 'kg', dec: 1, aria: 'mass of the upper body' });
  const RUB = 0.350, RM = 0.0800, ANG = 29.0 * RAD;   /* the book's lever arms, and the angle of the spine and the muscles */
  const HX = 250, HY = 300, S = 520, GY = 560;
  const u = [Math.cos(ANG), -Math.sin(ANG)], n = [-Math.sin(ANG), -Math.cos(ANG)];

  function draw() {
    const { ctx } = begin(d.c);
    const wub = MUB.v * G, wbox = MBX.v * G, rbox = RBX.v / 100;
    const FB = (RUB * wub + rbox * wbox) / RM;
    const FVy = wub + wbox + FB * Math.sin(ANG), FVx = FB * Math.cos(ANG);
    const FV = Math.hypot(FVx, FVy), th = Math.atan2(FVy, FVx) / RAD;
    const K = 150 / Math.max(FB, 2000);
    const onSpine = (x) => HY - (x - HX) * Math.tan(ANG);
    const xub = HX + RUB * S, xbox = HX + rbox * S;

    /* the ground, the legs, the spine and the arms holding the box */
    line(ctx, 60, GY, 780, GY, PAL.muted, 3);
    line(ctx, HX, HY, HX - 16, GY, PAL.ink, 10);
    line(ctx, HX, HY, HX + 18, GY, PAL.ink, 10);
    const head = [HX + 330 * u[0], HY + 330 * u[1]];
    line(ctx, HX, HY, head[0], head[1], PAL.ink, 12);
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(head[0] + 24 * u[0], head[1] + 24 * u[1], 25, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    const sh = [HX + 288 * u[0], HY + 288 * u[1]];
    line(ctx, sh[0], sh[1], xbox, 410, PAL.ink, 8);
    crate(ctx, xbox, 410, 92, 62);
    dot(ctx, HX, HY, PAL.ink, true, 11);

    /* the two weights, with a drop line each to the lever arms below the ground */
    dot(ctx, xub, onSpine(xub), PAL.ink, false, 10);
    const lu = Math.max(K * wub, 34);
    arrow(ctx, xub, onSpine(xub), xub, onSpine(xub) + lu, C('force'), 5);
    text(ctx, 'w_ub = ' + fmt(wub, 0) + ' N', xub + 14, onSpine(xub) + lu + 18, C('force'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    if (wbox > 0) {
      const lx = Math.max(K * wbox, 30);
      arrow(ctx, xbox, 472, xbox, 472 + lx, C('force'), 5);
      text(ctx, 'w_box = ' + fmt(wbox, 0) + ' N', xbox + 14, 472 + lx + 18, C('force'), { size: 19, weight: 600, align: 'left' });
    }
    line(ctx, HX, GY + 12, HX, 676, PAL.rule, 2, [6, 8]);
    line(ctx, xub, GY + 12, xub, 628, PAL.rule, 2, [6, 8]);
    line(ctx, xbox, GY + 12, xbox, 676, PAL.rule, 2, [6, 8]);
    hbracket(ctx, HX, xub, 620, C('position'), 'r_ub⊥ = 0.350 m');
    hbracket(ctx, HX, xbox, 668, C('position'), 'r_box⊥ = ' + fmt(rbox, 3) + ' m');

    /* the back muscles, parallel to the spine and offset behind it by their lever arm */
    const a = [HX + RM * S * n[0], HY + RM * S * n[1]];
    const b = [a[0] + 210 * u[0], a[1] + 210 * u[1]];
    line(ctx, a[0], a[1], b[0], b[1], PAL.muted, 9);
    line(ctx, HX, HY, a[0], a[1], C('position'), 3);
    text(ctx, '0.0800 m', a[0] - 12, a[1] - 18, C('position'), { size: 17, weight: 600, align: 'right' });
    const lf = Math.max(K * FB, 30);
    arrow(ctx, b[0], b[1], b[0] - lf * u[0], b[1] - lf * u[1], C('force'), 5);
    text(ctx, 'F_B = ' + fmt(FB, 0) + ' N', b[0] - lf * u[0] + 8, b[1] - lf * u[1] - 26, C('force'), { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    /* the force the vertebrae push back with, at the pivot */
    const lv = Math.min(Math.max(K * FV, 34), 110), vd = [Math.cos(th * RAD), -Math.sin(th * RAD)];
    arrow(ctx, HX, HY, HX + lv * vd[0], HY + lv * vd[1], C('force'), 5);
    text(ctx, 'F_V = ' + fmt(FV, 0) + ' N', HX - 26, 392, C('force'), { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    turn(ctx, HX, HY, 118, 214 * RAD, 158 * RAD, C('torque'));
    text(ctx, 'τ = ' + fmt(FB * RM, 0) + ' N·m each way', 210, 150, C('torque'), { size: 18, weight: 600, align: 'center' });

    /* the three forces side by side, which is the comparison the example ends on */
    const rows = [['the weight supported', wub + wbox], ['the back muscles', FB], ['the vertebrae', FV]];
    const mx = Math.max(FB, FV, 1), BL = 1000, BW = 280;
    rows.forEach((row, i) => {
      const y = 230 + i * 86, w = Math.max((row[1] / mx) * BW, 3);
      text(ctx, row[0], BL - 20, y, PAL.ink, { size: 19, align: 'right' });
      ctx.save(); ctx.fillStyle = C('force'); ctx.fillRect(BL, y - 18, w, 36); ctx.restore();
      text(ctx, fmt(row[1], 0) + ' N', BL + w + 12, y, C('force'), { size: 19, weight: 600, align: 'left' });
    });
    text(ctx, 'The muscles and the joint carry many times the weight being lifted.', 1040, 470, PAL.muted, { size: 17, align: 'center' });

    headline(ctx, 'A ' + fmt(MBX.v, 1) + ' kg box lifted with the back makes the muscles pull ' + fmt(FB, 0)
      + ' N and loads the vertebrae with ' + fmt(FV, 0) + ' N');
    readout(d.readout,
      `\\kFB = \\frac{(${fmt(RUB, 3)}\\ \\text{m})\\kwub + (${fmt(rbox, 3)}\\ \\text{m})\\kwbox}{${fmt(RM, 4)}\\ \\text{m}} = ${fmt(FB, 0)}\\ \\text{N}`,
      'The first condition then gives the force on the vertebrae: its horizontal component is ' + fmt(FVx, 0)
      + ' N and its vertical component ' + fmt(FVy, 0) + ' N, so it comes to ' + fmt(FV, 0) + ' N at '
      + fmt(th, 1) + '° above the horizontal.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: what the short lever arm buys. The section answers its own
   question about the benefits of attaching muscles close to joints with
   speed, flexibility and agility, and draws nothing for the answer. The
   biceps runs from the upper arm to a point a few centimetres along the
   forearm, so closing the elbow shortens it by about a centimetre while
   the hand sweeps ten times as far. The elbow angle is a slider and not
   a clock, so the figure is still, as every figure of this chapter is.
===================================================================== */
(function () {
  const d = sim('sim-lever-arm-trade', 770);
  const PH = ctl(d.controls, { label: '\\varphi', cls: '', min: 40, max: 140, step: 1, value: 70, unit: '°', dec: 0, aria: 'angle at the elbow' });
  const R1 = ctl(d.controls, { label: '\\krone', cls: 'position', min: 2, max: 8, step: 0.5, value: 4, unit: 'cm', dec: 1, aria: 'distance from the elbow to the biceps' });
  const HUM = 0.250, HAND = 0.380;     /* the biceps runs from 25.0 cm up the humerus, and the hand sits where the book has it */
  const EX = 430, EY = 470, S = 1060;
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
    line(ctx, up[0], up[1], EX + r1 * S * now[0], EY + r1 * S * now[1], PAL.soft2, 13);
    line(ctx, EX, EY, EX + HAND * S * now[0], EY + HAND * S * now[1], PAL.ink, 11);
    dot(ctx, EX, EY, PAL.ink, true, 11);
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
    text(ctx, 'φ = ' + fmt(ph, 0) + '°', EX + 62, EY - 46, PAL.ink, { size: 22, weight: 600, align: 'left' });

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
      ? 'The forearm is where Example 9.4 holds it. Move the elbow away from 90° and compare the two bars below'
      : (ph < 90 ? 'Closing' : 'Opening') + ' the elbow to ' + fmt(ph, 0) + '° '
        + (ph < 90 ? 'shortens' : 'lengthens') + ' the biceps by ' + fmt(Math.abs(dL) * 100, 2)
        + ' cm while the hand sweeps ' + fmt(ds * 100, 1) + ' cm, ' + fmt(ds / Math.abs(dL), 0) + ' times as far');
    readout(d.readout,
      Math.abs(dL) < 1e-4
        ? `\\frac{\\Delta s}{\\Delta L}\\ \\text{at}\\ \\varphi = 90^\\circ`
        : `\\frac{\\Delta s}{\\Delta L} = \\frac{${fmt(ds * 100, 1)}\\ \\text{cm}}{${fmt(Math.abs(dL) * 100, 2)}\\ \\text{cm}} = ${fmt(ds / Math.abs(dL), 1)}`,
      Math.abs(dL) < 1e-4
        ? 'Nothing has moved yet, since the arm is still in the position the example draws.'
        : 'The same short lever arm that makes the biceps pull so hard is what turns a contraction of a centimetre or so into a large and quick movement of the hand. Slide the attachment out along the forearm and the muscle has to travel much farther for the same sweep.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
