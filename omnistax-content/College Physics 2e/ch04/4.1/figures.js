/* Figures for section 4.1 Development of Force Concept. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, spring, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const RAD = Math.PI / 180;

/* ---------- sprites ---------- */
/* the hook of a spring scale, hanging off the rod that ends at (x, y) */
function hook(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.beginPath();
  ctx.arc(x + 26, y, 22, Math.PI * 1.45, Math.PI * 0.75); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 4.3: two ice skaters push on a third. The overhead view, the
   two pushes laid head to tail, and the free-body diagram of the third
   skater, all answering the two magnitudes and the angle between them.
   Nothing in the idea has a time in it, so the figure is a still one.
===================================================================== */
(function () {
  const d = sim('sim-skaters', 620);
  const F1 = ctl(d.controls, { label: '\\kFone', cls: 'force', min: 10, max: 80, step: 1, value: 50, unit: 'N', dec: 0, aria: 'the push of the first skater' });
  const F2 = ctl(d.controls, { label: '\\kFtwo', cls: 'force', min: 10, max: 80, step: 1, value: 40, unit: 'N', dec: 0, aria: 'the push of the second skater' });
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 30, max: 150, step: 1, value: 90, unit: '°', dec: 0, aria: 'the angle between the two pushes',
    specials: [{ at: 90, label: 'right angle' }] });
  const ro = F.readout(d);
  const U = 2.5, S = 1.6, ARM = 96;               /* units per newton; the skaters' scale; a pusher's centre behind its hands */
  const person = (ctx, c, h, color, reach) => F.personTop(ctx, c.x, c.y, S, h, color, reach);
  let hits = [];
  F.hover(d.stage, () => hits);
  const at = (o, a, r) => ({ x: o.x + r * Math.cos(a), y: o.y - r * Math.sin(a) });   /* a is measured counterclockwise, as the book's angles are */
  const box = (p, r) => ({ l: p.x - r, r: p.x + r, t: p.y - r, b: p.y + r });
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, fx = F1.v + F2.v * Math.cos(th), fy = F2.v * Math.sin(th);
    const tot = Math.hypot(fx, fy), ang = Math.atan2(fy, fx);
    const lines = headline(ctx, 'A push of ' + fmt(F1.v, 0) + ' N and a push of ' + fmt(F2.v, 0) + ' N, ' + fmt(TH.v, 0)
      + '° apart, add to a total force of ' + fmt(tot, 1) + ' N at ' + fmt(ang / RAD, 1) + '° from the first push');
    const lab = F.labeller(ctx, 620, { headline: lines });
    line(ctx, 720, 150, 720, 590, PAL.rule, 1.5);
    lab.place({ l: 0, t: 98, r: 1400, b: 126 });
    text(ctx, '(a) the two pushes, seen from above and laid head to tail', 360, 112, PAL.muted, { size: 17, align: 'center' });
    text(ctx, '(b) the free-body diagram of the third skater', 1060, 112, PAL.muted, { size: 17, align: 'center' });

    /* ---- (a) the scene: the third skater facing the way the total force points, each pusher behind her
       facing along its push, both hands on her; the two lines of push are set apart as the angle
       closes or opens, so the pushers never meet each other or the arrows ---- */
    const o = { x: 250, y: 400 };
    const pusher = (a, side, color) => {
      const u = { x: Math.cos(a), y: -Math.sin(a) }, n = { x: Math.sin(a), y: Math.cos(a) }, off = 34 * Math.cos(th) * side;
      const base = { x: o.x + n.x * off, y: o.y + n.y * off }, c = { x: base.x - u.x * ARM, y: base.y - u.y * ARM };
      person(ctx, c, -a, color, [{ x: base.x + n.x * 8, y: base.y + n.y * 8 }, { x: base.x - n.x * 8, y: base.y - n.y * 8 }]);
      return c;
    };
    const c1 = pusher(0, -1, F.ref('skater-1')), c2 = pusher(th, 1, F.ref('skater-2'));
    person(ctx, o, -ang, F.ref('skater-3'));
    hits = [{ ...c1, r: 40, name: 'the first skater' }, { ...c2, r: 40, name: 'the second skater' }, { ...o, r: 40, name: 'the third skater' }];
    [c1, c2, o].forEach((p) => lab.place(box(p, 40)));
    /* the arrows and dashed lines join the collision set as a run of points, so no label lands on one */
    const keep = (p, q) => { const n = Math.ceil(Math.hypot(q.x - p.x, q.y - p.y) / 20); for (let k = 0; k <= n; k++) lab.place(box({ x: p.x + (q.x - p.x) * k / n, y: p.y + (q.y - p.y) * k / n }, 1)); };

    const h1 = at(o, 0, F1.v * U), h2 = at(o, th, F2.v * U), tip = at(o, ang, tot * U);
    const ar = Math.min(60, 0.6 * Math.min(F1.v, F2.v) * U), am = ang > th - ang ? ang / 2 : (ang + th) / 2;
    F.angleArc(ctx, o, ar, 0, th, undefined, undefined, C('angle'));
    line(ctx, h1.x, h1.y, tip.x, tip.y, alpha(C('force'), 0.5), 3, [10, 10]);
    [[o, tip], [o, h1], [o, h2], [h1, tip]].forEach(([p, q]) => keep(p, q));
    arrow(ctx, o.x, o.y, tip.x, tip.y, C('force'), 5);
    arrow(ctx, o.x, o.y, h1.x, h1.y, C('force'), 5);
    arrow(ctx, o.x, o.y, h2.x, h2.y, C('force'), 5);
    lab.add('F_tot', tip.x, tip.y, Math.cos(ang), -Math.sin(ang), C('force'), 22, 26);
    lab.add('F₂', h2.x, h2.y, Math.cos(th), -Math.sin(th), C('force'), 22, 26);
    lab.add('F₁', h1.x, h1.y, 1, 0, C('force'), 22, 26);
    /* θ is named inside the wider of the two wedges the total force cuts, and by hover where that is too narrow to hold it */
    const wedge = Math.max(ang, th - ang), arcAt = at(o, am, ar);
    if (wedge >= 34 * RAD) lab.add('θ', arcAt.x, arcAt.y, Math.cos(am), -Math.sin(am), C('angle'), 20, 18);
    hits.push({ ...arcAt, r: 18, name: 'θ, the angle between the two pushes' });

    /* ---- (b) the free-body diagram: the body as a single point, the outside forces leaving it ---- */
    const b = { x: 940, y: 400 };
    const e1 = at(b, 0, F1.v * U), e2 = at(b, th, F2.v * U), et = at(b, ang, tot * U);
    line(ctx, e1.x, e1.y, et.x, et.y, PAL.rule, 2, [8, 8]);
    line(ctx, e2.x, e2.y, et.x, et.y, PAL.rule, 2, [8, 8]);
    arrow(ctx, b.x, b.y, et.x, et.y, C('force'), 5);
    arrow(ctx, b.x, b.y, e1.x, e1.y, C('force'), 5);
    arrow(ctx, b.x, b.y, e2.x, e2.y, C('force'), 5);
    dot(ctx, b.x, b.y, F.ref('skater-3'), true, 11);
    [[b, et], [b, e1], [b, e2], [e1, et], [e2, et]].forEach(([p, q]) => keep(p, q));
    lab.place(box(b, 14));
    lab.add('F_tot', et.x, et.y, Math.cos(ang), -Math.sin(ang), C('force'), 22, 26);
    lab.add('F₁', e1.x, e1.y, 1, 0, C('force'), 22, 26);
    lab.add('F₂', e2.x, e2.y, Math.cos(th), -Math.sin(th), C('force'), 22, 26);
    lab.add('the third skater, as a single point', b.x, b.y, 0, 1, F.ref('skater-3'), 17, 34);
    const missed = lab.flush();
    if (missed.length) d.fig.dataset.missed = missed.join('|'); else delete d.fig.dataset.missed;

    const right = Math.abs(TH.v - 90) < 1e-9;
    ro.set(`\\mk{t}{\\kFtot} = \\sqrt{\\mk{x}{${right ? '\\kFone' : '\\kFx'}}^2 + \\mk{y}{${right ? '\\kFtwo' : '\\kFy'}}^2} = \\sqrt{(\\mk{nx}{${fmt(fx, 1)}}\\ \\text{N})^2 + (\\mk{ny}{${fmt(fy, 1)}}\\ \\text{N})^2} = \\mk{nt}{${fmt(tot, 1)}}\\ \\text{N}`, undefined, { form: right });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.4: the stretched spring as a standard of force. The spring
   relaxed, the same spring pulled out by Δx with its restoring force
   drawn back toward the fixed end, and a spring scale whose face is
   marked off in units of that standard. A stretch answers a slider and
   nothing more, so this figure is still as well.
===================================================================== */
(function () {
  const d = sim('sim-spring', 660);
  const X = { v: 0.20 };                          /* the relaxed length, the book's */
  const DX = ctl(d.controls, { label: '\\kdx', cls: 'position', min: 0, max: 0.10, step: 0.005, value: 0.06, unit: 'm', dec: 3, aria: 'the distance the spring is stretched' });
  const SC = 2000;                                /* logical units per meter */
  const STD = 0.01;                               /* the standard: the restoring force of a one centimeter stretch */
  const WALL = 120, X0 = 160;
  function draw() {
    const { ctx } = begin(d.c);
    const rest = X0 + X.v * SC, pulled = X0 + (X.v + DX.v) * SC, r = DX.v / STD;

    /* ---- (a) the spring at its undistorted length ---- */
    text(ctx, '(a) the spring at its relaxed length', WALL, 112, PAL.muted, { size: 17 });
    fixed(ctx, WALL - 40, 130, 40, 90);
    spring(ctx, X0, 175, rest, 175, 9, 20, F.ref('spring'), 4);
    line(ctx, rest, 149, rest, 201, F.ref('spring'), 5);
    hbracket(ctx, X0, rest, 240, C('position'), 'x = ' + fmt(X.v, 2) + ' m');

    /* ---- (b) the spring stretched, and the restoring force it exerts ---- */
    text(ctx, '(b) the same spring, pulled out a distance Δx', WALL, 290, PAL.muted, { size: 17 });
    fixed(ctx, WALL - 40, 318, 40, 90);
    spring(ctx, X0, 363, pulled, 363, 9, 20, F.ref('spring'), 4);
    line(ctx, pulled, 337, pulled, 389, F.ref('spring'), 5);
    F.hand(ctx, pulled + 78, 363, { aim: [-1, 0], view: 'back', curl: 0.85, thumb: 'along', s: 0.85 });
    line(ctx, rest, 320, rest, 430, PAL.muted, 2, [8, 8]);
    if (DX.v > 0.0001) {
      const al = 40 + 1600 * DX.v;
      arrow(ctx, pulled, 326, pulled - al, 326, C('force'), 5);
      text(ctx, 'restoring force F_restore', pulled - al - 14, 326, C('force'), { weight: 600, size: 20, align: 'right' });
      hbracket(ctx, rest, pulled, 430, C('position'), 'Δx = ' + fmt(DX.v * 100, 1) + ' cm');
    } else text(ctx, 'the spring is relaxed, so it pulls on nothing', pulled + 60, 430, PAL.muted, { size: 17 });

    /* ---- (c) the spring scale, its face marked off in standard units ---- */
    text(ctx, '(c) a spring scale, its face marked off in units of the standard force', WALL, 490, PAL.muted, { size: 17 });
    const fy = 570, FX = (u) => 250 + u * 88;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.fillRect(180, fy - 48, 1010, 96); ctx.strokeRect(180, fy - 48, 1010, 96); ctx.restore();
    line(ctx, FX(0), fy + 22, FX(10), fy + 22, PAL.muted, 2);
    for (let u = 0; u <= 10; u++) { line(ctx, FX(u), fy + 14, FX(u), fy + 22, PAL.muted, 2); text(ctx, String(u), FX(u), fy + 40, PAL.muted, { size: 17, align: 'center' }); }
    spring(ctx, 196, fy - 12, Math.max(FX(0), FX(r)) - 8, fy - 12, 9, 16, F.ref('spring'), 4);
    line(ctx, FX(r), fy - 40, FX(r), fy + 10, C('force'), 5);
    text(ctx, fmt(r, 1) + ' units', FX(r), fy - 58, C('force'), { weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, FX(r), fy - 12, 1240, fy - 12, PAL.ink, 5);
    hook(ctx, 1240, fy - 12, PAL.ink);
    text(ctx, 'the pull on the hook', 1266, fy + 72, PAL.muted, { size: 17, align: 'center' });

    headline(ctx, DX.v < 0.0001
      ? 'The spring sits at its relaxed length of ' + fmt(X.v * 100, 0) + ' cm, so it exerts no restoring force and the scale reads nothing'
      : 'The spring is stretched ' + fmt(DX.v * 100, 1) + ' cm past its relaxed length of ' + fmt(X.v * 100, 0) + ' cm, and the scale reads ' + fmt(r, 1) + ' units of the standard force');
    readout(d.readout, `\\kFres = \\frac{\\kdx}{\\htmlClass{kv-position}{\\Delta x_{\\text{std}}}}\\,\\htmlClass{kv-force}{F_{\\text{std}}} = \\frac{${fmt(DX.v * 100, 1)}\\ \\text{cm}}{1.0\\ \\text{cm}}\\,\\htmlClass{kv-force}{F_{\\text{std}}} = ${fmt(r, 1)}\\,\\htmlClass{kv-force}{F_{\\text{std}}}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
