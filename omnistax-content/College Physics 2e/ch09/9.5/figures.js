/* Figures for section 9.5 Simple Machines. Boots against the section's text article.
   Every figure of this section is still: a simple machine in equilibrium has no time
   in it, so none of them registers a cycle and none carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, choice, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, fixed, block, silhouette, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

const G = 9.80;                                  /* the acceleration due to gravity, as the chapter takes it */
const RAD = Math.PI / 180;
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* a quantity written to three significant figures, with commas over a thousand */
const sig3 = (x) => {
  const s = Math.abs(x).toPrecision(3);
  return (x < 0 ? '−' : '') + (s.includes('e') || Math.abs(x) >= 1000 ? commas(Math.round(Number(s))) : s);
};
/* The headline is the library's, which breaks a long sentence over two lines at its evenest
   space rather than shrinking the type, so that every figure of the chapter sets it the same. */
const head = (ctx, s) => topline(ctx, s);
/* A horizontal bar starting at x0, its name to the left and its value to the right. `v` is the
   quantity and `full` the value the whole width stands for, fixed per figure and never taken
   from the pair on show, so that a slider lengthens the bars instead of leaving them as they
   were; a bar that would pass the end stops there and its label goes on giving the true value. */
function bar(ctx, x0, y, wmax, v, full, h, color, label, value) {
  const width = Math.max(2, wmax * Math.min(1, Math.abs(v) / full));
  ctx.save(); ctx.fillStyle = color; ctx.fillRect(x0, y - h / 2, width, h); ctx.restore();
  text(ctx, label, x0 - 16, y, color, { size: 20, weight: 600, align: 'right' });
  text(ctx, value, x0 + width + 16, y, PAL.muted, { size: 18, align: 'left' });
}
/* =====================================================================
   FIGURE 9.21: the nail puller. The hand presses down on the handle, the
   nail pulls back on the claw and the plank pushes up at the pivot. The
   nail is not moving, so the two torques about the pivot are equal and
   there is nothing to play through: the figure is still. The arrows in
   the scene say which way each force acts and the bars below compare
   the sizes, since an arrow twenty times longer than its neighbor
   cannot be drawn beside it.
===================================================================== */
(function () {
  const d = sim('sim-nail-puller', 850);
  const li = ctl(d.controls, { label: '\\kli', cls: 'position', min: 0.20, max: 0.80, step: 0.01, value: 0.50, unit: 'm', dec: 2, aria: 'input lever arm, from the pivot to the hand' });
  const lo = ctl(d.controls, { label: '\\klo', cls: 'position', min: 0.010, max: 0.080, step: 0.001, value: 0.025, unit: 'm', dec: 3, aria: 'output lever arm, from the pivot to the nail' });
  const Fi = ctl(d.controls, { label: '\\kFi', cls: 'force', min: 10, max: 120, step: 5, value: 50, unit: 'N', dec: 0, aria: 'input force on the handle' });
  const SC = 1000, PX = 1150, PY = 350, HY = 210;   /* units per metre, the pivot, and the height of the handle */

  function draw() {
    const { ctx } = begin(d.c);
    const MA = li.v / lo.v, Fo = Fi.v * MA, N = Fi.v + Fo, tq = li.v * Fi.v;
    const hx = PX - SC * li.v, nx = PX + SC * lo.v;

    fixed(ctx, 220, PY, 1120, 34);                                       /* the plank */
    const cn = F.ref('nail');
    line(ctx, nx, PY + 44, nx, 330, cn, 5);                       /* the nail, its head just clear of the plank */
    line(ctx, nx - 9, 330, nx + 9, 330, cn, 5);
    ctx.save(); ctx.strokeStyle = F.ref('puller'); ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(hx, HY); ctx.lineTo(PX, PY); ctx.stroke();                          /* the handle */
    ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(PX, PY); ctx.quadraticCurveTo(nx - 4, PY + 14, nx - 10, 336); ctx.stroke();   /* the claw under the head */
    ctx.beginPath(); ctx.moveTo(PX, PY); ctx.quadraticCurveTo(nx + 14, PY + 4, nx + 10, 336); ctx.stroke();
    ctx.restore();
    dot(ctx, PX, PY, PAL.ink, false, 11);                                /* the pivot */
    text(ctx, 'pivot', PX, PY + 62, PAL.muted, { size: 17, align: 'center' });
    F.fist(ctx, hx, HY, -0.5, -0.87, 1, F.ref('hand'));

    arrow(ctx, hx, HY + 28, hx, HY + 110, C('force'), 5);                /* the three external forces on the puller */
    label(ctx, 'Fᵢ = ' + sig3(Fi.v) + ' N', hx, HY + 80, { side: 'left', color: C('force'), gap: 20, size: 21 });
    arrow(ctx, nx, 254, nx, 338, C('force'), 5);
    text(ctx, 'Fₙ = ' + sig3(Fo) + ' N', nx + 20, 240, C('force'), { size: 21, weight: 600, align: 'left' });
    arrow(ctx, PX, PY, PX, PY - 148, C('force'), 5);
    text(ctx, 'N = ' + sig3(N) + ' N', PX - 20, PY - 160, C('force'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });

    hbracket(ctx, hx, PX, 458, C('position'), 'lᵢ = ' + fmt(li.v, 2) + ' m');   /* the two perpendicular lever arms */
    hbracket(ctx, PX, nx, 506, C('position'));
    text(ctx, 'lₒ = ' + fmt(lo.v, 3) + ' m', (PX + nx) / 2, 540, C('position'), { size: 21, weight: 600, align: 'center' });

    /* The forces run to a fixed 1,200 N and the torques to a fixed 100 N·m, both a little over
       what the book's own nail puller asks, so that the default state fills the bars and a
       heavier pull lengthens them. */
    const X0 = 380, WMAX = 720, FULLF = 1200, FULLT = 100;
    text(ctx, 'the two forces, on one scale', X0, 588, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, X0, 622, WMAX, Fi.v, FULLF, 26, C('force'), 'Fᵢ', sig3(Fi.v) + ' N');
    bar(ctx, X0, 662, WMAX, Fo, FULLF, 26, C('force'), 'Fₒ', sig3(Fo) + ' N');
    text(ctx, 'the two torques about the pivot, on one scale', X0, 708, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, X0, 742, WMAX, tq, FULLT, 26, C('torque'), 'τᵢ', sig3(tq) + ' N·m');
    bar(ctx, X0, 780, WMAX, tq, FULLT, 26, C('torque'), 'τₙ', sig3(tq) + ' N·m');
    if (Fo > FULLF || tq > FULLT) text(ctx, 'A bar that runs past the end of its scale stops there, and the labels go on giving the true values.', 700, 820, PAL.muted, { size: 17, align: 'center' });

    head(ctx, 'A pull of ' + sig3(Fi.v) + ' N at ' + fmt(li.v, 2) + ' m from the pivot draws the nail with '
      + sig3(Fo) + ' N, so the mechanical advantage is ' + fmt(MA, 1) + '.');
    readout(d.readout, `\\text{MA} = \\frac{\\kFo}{\\kFi} = \\frac{\\kli}{\\klo} = \\frac{${fmt(li.v, 2)}\\ \\text{m}}{${fmt(lo.v, 3)}\\ \\text{m}} = ${fmt(MA, 1)}`,
null);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.22: the wheelbarrow and the shovel. Both keep their pivot at
   one end and both forces on the same side of it: slide the load's lever
   arm out past the hands and the wheelbarrow becomes a shovel, held by
   the same person with the rear hand at the pivot, whose mechanical
   advantage is less than one. The barrow is held up and nothing travels,
   so the figure is still.
===================================================================== */
(function () {
  const d = sim('sim-wheelbarrow', 760);
  const lo = ctl(d.controls, { label: '\\klo', cls: 'position', min: 0.05, max: 1.40, step: 0.005, value: 0.075, unit: 'm', dec: 3, aria: 'lever arm of the load',
    specials: [{ at: () => li.v, label: 'MA = 1' }] });
  const li = ctl(d.controls, { label: '\\kli', cls: 'position', min: 0.50, max: 1.50, step: 0.01, value: 1.02, unit: 'm', dec: 2, aria: 'lever arm of the hands',
    specials: [{ at: () => lo.v, label: 'MA = 1' }] });
  lo.refresh();
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 10, max: 100, step: 2.5, value: 45, unit: 'kg', dec: 1, aria: 'combined mass of the load and the machine' });
  /* One scale for the barrow, the shovel and the person: 260 units a metre, the person 1.75 m
     tall, the wheel 0.20 m in radius, the handles held at 0.72 m and the shovel at 0.95 m. */
  const SC = 260, PX = 1100, GY = 575, S = SC * 1.75 / 150, R = 0.20 * SC, HB = GY - 0.72 * SC, HS = GY - 0.95 * SC;
  const B1 = 635, B2 = 705;   /* the two lever-arm brackets */
  const texN = (x) => sig3(x).replace(/,/g, '{,}');
  let hits = [];
  F.hover(d.stage, () => hits);

  /* the silhouette's joints, in its own frame (feet at the origin, facing +x), for a canvas point */
  const local = (x0, face) => (x, y) => ({ x: (x - x0) / (S * face), y: (y - GY) / S });
  /* the boxes the head, the torso and the legs fill on the canvas; the arms are left out, since
     the forces act at the hands and their labels belong beside them */
  function bodyBoxes(x0, face, j) {
    const box = (pts, m) => {
      const xs = pts.map((q) => x0 + q.x * S * face), ys = pts.map((q) => GY + q.y * S);
      return { l: Math.min(...xs) - m * S, r: Math.max(...xs) + m * S, t: Math.min(...ys) - m * S, b: Math.max(...ys) + m * S };
    };
    return [box([j.head], 13), box([j.shoulder, j.hip], 10), box([j.hip, ...j.feet], 6)];
  }
  /* Behind the handles, upright with both hands on the grips. */
  function wheelbarrowPerson(xi) {
    const x0 = xi - 22 * S, at = local(x0, 1), h = at(xi, HB);
    const j = { shoulder: { x: 6, y: -116 }, head: { x: 12, y: -137 }, hip: { x: 0, y: -72 }, feet: [{ x: 9, y: 0 }, { x: -11, y: 0 }], hands: [h, { x: h.x - 2, y: h.y - 3 }] };
    return { x0, face: 1, j, boxes: bodyBoxes(x0, 1, j) };
  }
  /* Facing the blade, the rear hand on the end of the handle and the front hand down the shaft.
     The shoulder sits over the shaft between the hands, as near the front hand as the reach
     allows, and stoops lower as the hands part, so that both arms always reach the shaft. */
  function shovelPerson(xi) {
    const x0 = PX, at = local(x0, -1), D = (PX - xi) / S, ys = (GY - HS) / S;
    const sx = Math.min(D / 2, Math.max(0.3 * D, D - 54));
    const v = 0.9 * Math.sqrt(Math.max(0, 59.5 ** 2 - Math.max(sx, D - sx) ** 2));
    const sh = Math.min(116, ys + v), hh = Math.min(70, Math.max(46, sh - 12)), dy = sh - hh, dx = Math.sqrt(Math.max(0, 44 ** 2 - dy ** 2));
    const shoulder = { x: sx, y: -sh }, hip = { x: sx - dx, y: -hh };
    const ux = (shoulder.x - hip.x) / 44, uy = (shoulder.y - hip.y) / 44;
    const j = { shoulder, hip, head: { x: shoulder.x + 22 * ux + 4, y: shoulder.y + 22 * uy - 6 },
      feet: [{ x: hip.x + 16, y: 0 }, { x: hip.x - 22, y: 0 }], hands: [at(xi, HS), at(PX, HS)] };
    return { x0, face: -1, j, boxes: bodyBoxes(x0, -1, j) };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const w = M.v * G, MA = li.v / lo.v, Fi = w / MA, N = w - Fi, Frh = Fi - w;
    const xi = PX - SC * li.v, xo = PX - SC * lo.v, shovel = lo.v > li.v;
    const cb = F.ref('barrow'), cp = F.ref('lifter'), cf = C('force'), cpos = C('position');

    const rows = head(ctx, shovel
      ? 'On a shovel the load lies beyond the lifting hand: a lift of ' + sig3(Fi) + ' N at ' + fmt(li.v, 2)
        + ' m from the rear hand holds ' + sig3(w) + ' N acting at ' + fmt(lo.v, 3) + ' m, so the mechanical advantage is ' + sig3(MA) + '.'
      : 'A lift of ' + sig3(Fi) + ' N at ' + fmt(li.v, 2) + ' m from the axle holds ' + sig3(w) + ' N acting at '
        + fmt(lo.v, 3) + ' m, so the mechanical advantage is ' + sig3(MA) + '.');
    const lab = F.labeller(ctx, 760, { headline: rows });
    line(ctx, 60, GY, 1340, GY, PAL.muted, 3);                            /* the ground */

    let cgY, hy, person;
    if (!shovel) {
      const ay = GY - R, slope = (HB - ay) / (xi - PX), yF = (x) => ay + slope * (x - PX);
      const ang = Math.atan2(HB - ay, xi - PX) + Math.PI;                  /* the frame's direction, axle toward handles, turned to read left to right */
      ctx.save(); ctx.strokeStyle = cb; ctx.lineWidth = 7; ctx.lineCap = 'round';
      const xl = xi - 0.10 * SC, xleg = PX + 0.6 * (xi - PX);
      ctx.beginPath(); ctx.moveTo(xl, yF(xl)); ctx.lineTo(PX, ay);         /* the frame, out past the grips */
      ctx.moveTo(xleg, yF(xleg)); ctx.lineTo(xleg + 6, yF(xleg) + 0.18 * SC); ctx.stroke(); ctx.restore();   /* the leg it rests on when set down */
      ctx.save(); ctx.strokeStyle = cb; ctx.fillStyle = PAL.panel; ctx.lineWidth = 5;   /* the wheel, its rim and its hub */
      ctx.beginPath(); ctx.arc(PX, ay, R - 3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(PX, ay, 9, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      /* the tray, standing on the frame and centred over the center of gravity */
      const hw = Math.min(0.42, Math.max(0.2, li.v - lo.v + 0.1)) * SC, dep = 0.28 * SC;
      ctx.save(); ctx.translate(xo, yF(xo) - 6); ctx.rotate(ang);
      ctx.strokeStyle = cb; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(-hw * 0.6, 0); ctx.lineTo(hw * 0.6, 0); ctx.lineTo(hw, -dep); ctx.lineTo(-hw, -dep); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
      cgY = yF(xo) - 6 - 0.45 * dep;
      hy = HB;
      person = wheelbarrowPerson(xi);
      lab.block(PX - R, ay - R, PX + R, GY);
      lab.block(xo - hw - 10, cgY - 0.6 * dep - 20, xo + hw + 10, yF(xo) + 10);
      hits = [{ x: PX, y: ay, r: R, name: 'the wheel; its axle is the pivot' }];
    } else {
      ctx.save(); ctx.strokeStyle = cb; ctx.lineWidth = 7; ctx.lineCap = 'round';   /* the shaft */
      ctx.beginPath(); ctx.moveTo(PX + 0.07 * SC, HS); ctx.lineTo(xo + 0.10 * SC, HS); ctx.stroke(); ctx.restore();
      const bl = xo - 0.18 * SC, br = xo + 0.12 * SC, by = HS + 0.05 * SC;
      ctx.save(); ctx.strokeStyle = cb; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(br, HS); ctx.lineTo(br, by); ctx.lineTo(bl, by + 10); ctx.lineTo(bl - 8, by - 6); ctx.stroke();   /* the blade */
      ctx.beginPath(); ctx.moveTo(bl + 4, by + 2); ctx.quadraticCurveTo(xo, HS - 0.22 * SC, br - 4, by - 2); ctx.closePath(); ctx.fill(); ctx.stroke();   /* the heap it carries */
      ctx.restore();
      cgY = HS - 0.02 * SC;
      hy = HS;
      person = shovelPerson(xi);
      lab.block(bl - 12, HS - 0.14 * SC, br + 8, by + 14);
      hits = [];
    }
    person.boxes.forEach((b) => lab.block(b.l, b.t, b.r, b.b));
    silhouette(ctx, { x: person.x0, y: GY, s: S, face: person.face, color: cp, pose: 'stand', ...person.j });
    dot(ctx, xo, cgY, PAL.ink, true, 8);                                   /* the center of gravity */
    hits.push({ x: xo, y: cgY, r: 16, name: 'center of gravity of ' + (shovel ? 'the shovel and its load' : 'the barrow and its load') },
      ...person.boxes.map((b) => ({ x: (b.l + b.r) / 2, y: (b.t + b.b) / 2, r: Math.max(b.r - b.l, b.b - b.t) / 2, name: 'you, lifting' })));

    /* Every arrow is drawn to a fixed 1,000 N, the heaviest barrow the mass slider reaches, so
       that loading the barrow lengthens the weight arrow; a longer force stops at that length
       and its label goes on giving the true value. */
    const alen = (f) => 20 + 100 * Math.min(1, Math.abs(f) / 1000);
    const force = (x1, y1, x2, y2, s, ux, uy, gap) => {
      lab.halo({ x1, y1, x2, y2 }, 12); arrow(ctx, x1, y1, x2, y2, cf, 5);
      lab.block(Math.min(x1, x2) - 3, Math.min(y1, y2), Math.max(x1, x2) + 3, Math.max(y1, y2));
      return () => lab.add(s, ux < 0 ? Math.min(x1, x2) : ux > 0 ? Math.max(x1, x2) : x1, uy < 0 ? Math.min(y1, y2) : uy > 0 ? Math.max(y1, y2) : (y1 + y2) / 2, ux, uy, cf, 21, gap);
    };
    const labels = [];
    labels.push(force(xo, cgY - 14 - alen(w), xo, cgY - 14, 'w = ' + sig3(w) + ' N', shovel ? -1 : 1, -0.4, 22));
    labels.push(force(xi, hy + 12 + alen(Fi), xi, hy + 12, 'Fᵢ = ' + sig3(Fi) + ' N', shovel ? -1 : 0.5, shovel ? 0 : 1, shovel ? 22 : 18));
    if (!shovel) labels.push(force(PX, GY + alen(N), PX, GY + 2, 'N = ' + sig3(N) + ' N', 1, 0, 22));
    else labels.push(force(PX, hy - 12 - alen(Frh), PX, hy - 12, 'rear hand ' + sig3(Frh) + ' N', 1, -0.4, 22));   /* the rear hand presses down on the end of the handle */
    dot(ctx, PX, shovel ? HS : GY - R, PAL.ink, false, 10);                /* the pivot */

    /* each bracket's name sits under it, centred, and the two rows are far enough apart that the names never meet */
    hbracket(ctx, xi, PX, B1, cpos, 'lᵢ = ' + fmt(li.v, 2) + ' m', { side: 'below', size: 21, H: 760 }); lab.block(Math.min(xi, PX - 80), B1 - 12, PX + 80, B1 + 40);
    hbracket(ctx, xo, PX, B2, cpos, 'lₒ = ' + fmt(lo.v, 3) + ' m', { side: 'below', size: 21, H: 760 }); lab.block(Math.min(xo, PX - 80), B2 - 12, PX + 80, B2 + 40);
    labels.forEach((f) => f());
    lab.add(shovel ? 'pivot, the rear hand' : 'pivot, the axle', PX, shovel ? HS : GY - R, shovel ? 0.6 : 1, -0.8, PAL.muted, 18, shovel ? 30 : R + 12);
    lab.flush();

    readout(d.readout, `\\kFi = \\kFo\\frac{\\klo}{\\kli} = (${texN(w)}\\ \\text{N})\\frac{${fmt(lo.v, 3)}\\ \\text{m}}{${fmt(li.v, 2)}\\ \\text{m}} = ${texN(Fi)}\\ \\text{N}`,
      shovel
        ? `The rear hand presses down with $\\kFi - \\kwgt = ${texN(Fi)}\\ \\text{N} - ${texN(w)}\\ \\text{N} = ${texN(Frh)}\\ \\text{N}$.`
        : `The wheel carries the rest, $\\kN = \\kwgt - \\kFi = ${texN(w)}\\ \\text{N} - ${texN(Fi)}\\ \\text{N} = ${texN(N)}\\ \\text{N}$.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the inclined plane. The same cart is taken to the same height
   twice, pushed up a ramp and lifted straight up beside it. The ramp
   asks for the smaller force and the longer path, and the two products
   are equal, which is what the text means when it says the work done is
   the same either way. The cart travels at constant velocity and the
   figure is about the force and the distance rather than about when the
   cart arrives, so it is still.
===================================================================== */
(function () {
  const d = sim('sim-incline', 760);
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 10, max: 60, step: 1, value: 20, unit: '°', dec: 0, aria: 'angle of the ramp' });
  const W = ctl(d.controls, { label: '\\kwgt', cls: 'force', min: 100, max: 1200, step: 25, value: 500, unit: 'N', dec: 0, aria: 'weight of the cart' });
  const HT = ctl(d.controls, { label: 'h', cls: 'position', min: 0.5, max: 3.0, step: 0.1, value: 1.5, unit: 'm', dec: 1, aria: 'height to be climbed' });
  const GY = 440, X0 = 150, LX = 1150;

  /* a cart, its deck centred on (x, y) and tilted to a slope of th radians */
  function cart(ctx, x, y, th) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-th); ctx.strokeStyle = F.ref('cart'); ctx.fillStyle = PAL.soft; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(-42, -46, 84, 38); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(-24, 0, 9, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(24, 0, 9, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, w = W.v, h = HT.v, s = Math.sin(th);
    /* The force arrows run to a fixed 1,200 N, the heaviest cart the slider reaches, so that the
       weight slider lengthens them; the ramp itself is fitted to the height and the angle, which
       are its own shape and not a scale. */
    const L = h / s, run = h / Math.tan(th), sc = Math.min(720 / run, 240 / h), Fi = w * s, kF = 230 / 1200;
    const tx = X0 + run * sc, ty = GY - h * sc;

    line(ctx, 100, GY, 1360, GY, PAL.muted, 3);                              /* the ground */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath();                   /* the ramp */
    ctx.moveTo(X0, GY); ctx.lineTo(tx, ty); ctx.lineTo(tx, GY); ctx.closePath(); ctx.fill(); ctx.restore();
    const cr = F.ref('ramp');
    line(ctx, X0, GY, tx, ty, cr, 4); line(ctx, tx, ty, tx, GY, cr, 4);
    text(ctx, fmt(TH.v, 0) + '°', X0 + 70, GY - 18, C('angle'), { size: 20, weight: 600, align: 'left' });

    const mx = (X0 + tx) / 2, my = (GY + ty) / 2;                            /* the cart on the ramp, and the push along it */
    cart(ctx, mx, my, th);
    arrow(ctx, mx, my - 28, mx + Fi * kF * Math.cos(th), my - 28 - Fi * kF * s, C('force'), 5);
    label(ctx, 'Fᵢ = ' + sig3(Fi) + ' N', mx + Fi * kF * Math.cos(th), my - 28 - Fi * kF * s, { side: 'right', color: C('force'), gap: 18, size: 21 });
    text(ctx, 'a push of ' + sig3(Fi) + ' N over ' + fmt(L, 2) + ' m', mx, GY + 36, PAL.muted, { size: 18, align: 'center' });

    cart(ctx, LX, ty, 0);                                                    /* the same cart taken straight up beside the ramp */
    line(ctx, LX - 78, GY, LX + 78, GY, PAL.rule, 2, [10, 10]);
    vbracket(ctx, LX - 105, ty, GY, C('position'), fmt(h, 2) + ' m', -1);
    arrow(ctx, LX + 95, GY - 10, LX + 95, GY - 10 - w * kF, C('force'), 5);
    text(ctx, 'lift = ' + sig3(w) + ' N', LX + 111, GY - 10 - (w * kF) / 2, C('force'), { size: 21, weight: 600, align: 'left' });
    text(ctx, 'a lift of ' + sig3(w) + ' N over ' + fmt(h, 2) + ' m', LX, GY + 36, PAL.muted, { size: 18, align: 'center' });

    /* Both pairs run to fixed ends, 1,200 N and 8.00 m, taken from the sliders and from the
       longest ramp the book's own cart would climb; nothing is scaled to the pair on show. */
    const BX = 430, BW = 720, FULLF = 1200, FULLD = 8;
    text(ctx, 'the force you must apply', BX, 510, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, BX, 544, BW, Fi, FULLF, 24, C('force'), 'ramp', sig3(Fi) + ' N');
    bar(ctx, BX, 582, BW, w, FULLF, 24, C('force'), 'lift', sig3(w) + ' N');
    text(ctx, 'the distance you must apply it through', BX, 628, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, BX, 662, BW, L, FULLD, 24, C('position'), 'ramp', fmt(L, 2) + ' m');
    bar(ctx, BX, 700, BW, h, FULLD, 24, C('position'), 'lift', fmt(h, 2) + ' m');
    if (L > FULLD) text(ctx, 'The ramp is longer than the 8.00 m the bar runs to, so the bar stops at the end and the label gives the true length.', 700, 742, PAL.muted, { size: 17, align: 'center' });

    head(ctx, 'A ramp at ' + fmt(TH.v, 0) + '° needs a push of ' + sig3(Fi) + ' N over ' + fmt(L, 2)
      + ' m, where lifting the cart straight up needs ' + sig3(w) + ' N over ' + fmt(h, 2) + ' m.');
    readout(d.readout, `\\text{MA} = \\frac{\\kFo}{\\kFi} = \\frac{\\kwgt}{\\kwgt\\sin\\ktheta} = \\frac{1}{\\sin ${fmt(TH.v, 0)}^\\circ} = ${fmt(1 / s, 2)}`,
      'The push of ' + sig3(Fi) + ' N over ' + fmt(L, 2) + ' m and the lift of ' + sig3(w) + ' N over ' + fmt(h, 2)
      + ' m each come to ' + sig3(w * h) + ' J of work, so the ramp buys its smaller force with a longer path and with nothing else.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.23: the crank, the car axle and the ordinary pulley. One pair
   of radii makes all three. The crank takes its input at the larger
   radius and gives its output at the smaller, the axle takes its input
   at the smaller and gives its output at the larger, and the pulley has
   only one radius, so it hands the tension on unchanged. A crank is
   turned, but the angle it is turned through does not enter the
   mechanical advantage, which is the point of the passage, so the
   figure is still.
===================================================================== */
(function () {
  const d = sim('sim-crank', 620);
  const ri = ctl(d.controls, { label: 'r_{\\text{i}}', cls: 'position', min: 0.02, max: 0.50, step: 0.005, value: 0.24, unit: 'm', dec: 3, aria: 'input radius' });
  const ro = ctl(d.controls, { label: 'r_{\\text{o}}', cls: 'position', min: 0.02, max: 0.50, step: 0.005, value: 0.02, unit: 'm', dec: 3, aria: 'output radius' });
  const Fi = ctl(d.controls, { label: '\\kFi', cls: 'force', min: 100, max: 12000, step: 100, value: 1000, unit: 'N', dec: 0, aria: 'input force' });
  const SC = 280, CY = 320, CX = [250, 700, 1150];
  const TTL = ['(a) a crank, driven at the handle', '(b) an axle driving a wheel, driven at the axle', '(c) an ordinary pulley, one radius only'];

  function ring(ctx, x, y, r, w, color = PAL.ink) { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
  /* a radius drawn from the centre out to the angle a, with its name just beyond the rim */
  function radius(ctx, x, y, r, a, label) {
    line(ctx, x, y, x + r * Math.cos(a), y + r * Math.sin(a), C('position'), 3);
    text(ctx, label, x + (r + 32) * Math.cos(a), y + (r + 32) * Math.sin(a), C('position'), { size: 19, weight: 600, align: Math.cos(a) < 0 ? 'right' : 'left' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const Ri = Math.max(30, SC * ri.v), Ro = Math.max(30, SC * ro.v);   /* the smallest radii are drawn at 30 units so their names have room */
    const MAa = ri.v / ro.v, MAb = ro.v / ri.v, out = [Fi.v * MAa, Fi.v * MAb, Fi.v];

    CX.forEach((cx, i) => text(ctx, TTL[i], cx, 116, PAL.muted, { size: 17, align: 'center' }));

    /* (a) the crank: the hand turns the handle at r_i and the shaft gives its force at r_o */
    const ck = F.ref('crank');
    ring(ctx, CX[0], CY, Ri, 4, ck); ring(ctx, CX[0], CY, Ro, 4, ck);
    dot(ctx, CX[0], CY, ck, true, 6);
    radius(ctx, CX[0], CY, Ri, -0.6, 'rᵢ'); radius(ctx, CX[0], CY, Ro, 3.7, 'rₒ');
    dot(ctx, CX[0] + Ri * Math.cos(-0.6), CY + Ri * Math.sin(-0.6), ck, true, 13);
    arrow(ctx, CX[0], CY - Ri, CX[0] + 104, CY - Ri, C('force'), 5);
    text(ctx, 'Fᵢ', CX[0] + 116, CY - Ri, C('force'), { size: 21, weight: 600, align: 'left' });
    arrow(ctx, CX[0], CY + Ro, CX[0] - 104, CY + Ro, C('force'), 5);
    text(ctx, 'Fₒ', CX[0] - 116, CY + Ro, C('force'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });

    /* (b) the axle and the wheel: the input turns the axle and the output is the force on the road */
    ring(ctx, CX[1], CY, Ri, 6, F.ref('wheel')); ring(ctx, CX[1], CY, Ro, 4, F.ref('axle'));
    dot(ctx, CX[1], CY, F.ref('axle'), true, 6);
    /* The two radii change places here, as the book's sentence about the car axle does: the input
       is at the axle, which is the circle the crank drove its output at, and the output is at the
       rim of the much larger wheel, so this machine's MA is the other one's turned upside down. */
    radius(ctx, CX[1], CY, Ro, -0.6, 'rᵢ'); radius(ctx, CX[1], CY, Ri, 2.3, 'rₒ');
    arrow(ctx, CX[1], CY + Ro, CX[1] + 104, CY + Ro, C('force'), 5);
    text(ctx, 'Fᵢ', CX[1] + 116, CY + Ro, C('force'), { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    arrow(ctx, CX[1], CY - Ri, CX[1] - 104, CY - Ri, C('force'), 5);
    text(ctx, 'Fₒ', CX[1] - 116, CY - Ri, C('force'), { size: 21, weight: 600, align: 'right' });
    line(ctx, CX[1] - 160, CY + Ri + 28, CX[1] + 160, CY + Ri + 28, PAL.muted, 3);
    text(ctx, 'the road', CX[1] - 160, CY + Ri + 48, PAL.muted, { size: 17, align: 'left' });

    /* (c) the pulley: the cord comes down one side and goes up the other with the tension it arrived with */
    fixed(ctx, CX[2] - 70, 132, 140, 24);
    line(ctx, CX[2], 156, CX[2], CY - Ri, PAL.muted, 3);
    ring(ctx, CX[2], CY, Ri, 5, F.ref('pulley')); dot(ctx, CX[2], CY, F.ref('pulley'), true, 6);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(CX[2], CY, Ri, Math.PI, 0, false); ctx.stroke(); ctx.restore();
    line(ctx, CX[2] - Ri, CY, CX[2] - Ri, CY + 118, PAL.muted, 4);
    line(ctx, CX[2] + Ri, CY, CX[2] + Ri, CY + 84, PAL.muted, 4);
    block(ctx, CX[2] + Ri, CY + 118, 74, 56, PAL.ink);
    arrow(ctx, CX[2] - Ri, CY + 38, CX[2] - Ri, CY + 116, C('force'), 5);
    text(ctx, 'Fᵢ', CX[2] - Ri - 16, CY + 80, C('force'), { size: 21, weight: 600, align: 'right' });
    arrow(ctx, CX[2] + Ri, CY + 82, CX[2] + Ri, CY + 20, C('force'), 5);
    text(ctx, 'Fₒ', CX[2] + Ri + 16, CY + 50, C('force'), { size: 21, weight: 600, align: 'left' });

    [MAa, MAb, 1].forEach((ma, i) => {
      text(ctx, 'MA = ' + (ma >= 1 ? fmt(ma, 1) : fmt(ma, 3)), CX[i], 546, PAL.ink, { size: 22, weight: 600, align: 'center' });
      text(ctx, sig3(Fi.v) + ' N in, ' + sig3(out[i]) + ' N out', CX[i], 578, PAL.muted, { size: 17, align: 'center' });
    });

    head(ctx, 'A handle at ' + fmt(ri.v, 3) + ' m turning a shaft at ' + fmt(ro.v, 3) + ' m has a mechanical advantage of '
      + fmt(MAa, 1) + ', and the same two radii the other way round, as an axle driving a wheel, give ' + fmt(MAb, 3) + '.');
    readout(d.readout, `\\text{MA} = \\frac{r_{\\text{i}}}{r_{\\text{o}}} = \\frac{${fmt(ri.v, 3)}\\ \\text{m}}{${fmt(ro.v, 3)}\\ \\text{m}} = ${fmt(MAa, 1)}`,
null);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.24: combinations of pulleys. The cord is friction-free, so
   the tension is the same everywhere along it, and every cable that
   pulls directly upward on the load adds its share. The load hangs in
   equilibrium and nothing travels, so the figure is still.
===================================================================== */
(function () {
  const d = sim('sim-pulleys', 690);
  /* The number of cables is a count of separate arrangements and not a quantity that slides, so
     it is a choice and not a slider (rule 26.1); n = 2 is the book's panel (a). */
  const N = choice(d.controls, {
    label: 'n', aria: 'number of cables pulling directly on the load',
    options: [{ value: '1', label: '1 cable' }, { value: '2', label: '2 cables' }, { value: '3', label: '3 cables' }, { value: '4', label: '4 cables' }],
    value: '2',
  });
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 20, max: 200, step: 5, value: 115, unit: 'kg', dec: 0, aria: 'mass of the load' });
  const BEAM = 150, YOKE = 456, CX = 620;

  function pulleyAt(ctx, x, y, r) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const n = Number(N.value), w = M.v * G, T = w / n;
    /* One cord runs through the whole tackle. Its n + 1 straight legs stand a gap apart, and each
       neighbouring pair is joined by a sheave: at the bottom by one in the movable block, at the
       top by one under the ceiling, the two kinds alternating. The legs are a sheave's diameter
       apart, so every one of them is vertical and tangent to the sheave it runs onto. Legs 0 to
       n − 1 all end on the movable block and each pulls up on it with the same tension; leg n is
       the free end, which always comes down off a ceiling sheave into your hands. The dead end is
       tied to the ceiling when n is even and to the movable block when n is odd, which is what
       makes the count come out at n. At n = 1 there is no movable sheave at all and the picture
       is the ordinary pulley of Figure 9.23(c), and at n = 2 it is the book's own panel (a).
       A change of count moves the legs, the block and the cables to their new places; the sheaves
       swap top for bottom with the count, so they have no counterparts and fade, each set sliding
       toward the block it hangs from, as do a leg, a cable and the dead end that only one count has. */
    const nf = N.mix((v) => Number(v)), from = Number(N.from);
    const counts = from === n ? [n] : [from, n];
    const GAP = Math.max(90, Math.min(130, 330 / nf)), r = GAP / 2;
    const Xk = (k) => CX + (k - (nf - 1) / 2) * GAP;
    const bottomJoin = (c, k) => (k + c) % 2 === 0;
    const half = ((nf - 1) * GAP) / 2 + GAP * 0.42;
    const aOf = (c) => (counts.length === 1 ? 1 : N.a(String(c)));
    const legY = (c, k) => {
      const up = k > 0 ? bottomJoin(c, k - 1) : null, dn = k < c ? bottomJoin(c, k) : null;
      const hasTop = up === false || dn === false, hasBot = up === true || dn === true;
      return [hasTop ? BEAM + r : BEAM, k === c ? 486 : hasBot ? YOKE - r : YOKE];
    };

    fixed(ctx, 260, BEAM - 34, 900, 34);                                      /* the ceiling the system hangs from */
    text(ctx, 'the ceiling', 272, BEAM - 52, PAL.muted, { size: 17, align: 'left' });
    const cy2 = F.ref('block'), cl = F.ref('load');
    line(ctx, CX - half, YOKE, CX + half, YOKE, cy2, 8);                  /* the movable block and the load under it */
    const strop = Math.min(62, half - 12);
    line(ctx, CX - strop, YOKE, CX - strop, YOKE + 40, cy2, 4);
    line(ctx, CX + strop, YOKE, CX + strop, YOKE + 40, cy2, 4);
    block(ctx, CX, YOKE + 96, Math.min(2 * half, 280), 104, cl);
    text(ctx, fmt(M.v, 0) + ' kg', CX, YOKE + 78, C('mass'), { size: 22, weight: 600, align: 'center' });
    text(ctx, 'w = ' + sig3(w) + ' N', CX, YOKE + 116, C('force'), { size: 21, weight: 600, align: 'center' });

    /* the straight legs of the cord: a leg both counts have runs between its two lengths */
    const kq = counts.length === 1 ? 1 : N.k;
    for (let k = 0; k <= Math.max(...counts); k++) {
      const both = counts.every((c) => k <= c);
      const [a0, a1] = legY(from, Math.min(k, from)), [b0, b1] = legY(n, Math.min(k, n));
      const y0 = both ? a0 + (b0 - a0) * kq : k <= n ? b0 : a0, y1 = both ? a1 + (b1 - a1) * kq : k <= n ? b1 : a1;
      ctx.save(); ctx.globalAlpha = both ? 1 : aOf(k <= n ? n : from);
      line(ctx, Xk(k), y0, Xk(k), y1, PAL.muted, 4); ctx.restore();
    }
    /* the sheaves, and the cord running over each of them */
    for (const c of counts) {
      ctx.save(); ctx.globalAlpha = aOf(c);
      for (let k = 0; k < c; k++) {
        const bot = bottomJoin(c, k), [, dy] = counts.length === 1 ? [0, 0] : N.off(String(c), [0, bot ? 30 : -30]);
        const cx = (Xk(k) + Xk(k + 1)) / 2, cy = (bot ? YOKE - r : BEAM + r) + dy;
        ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(cx, cy, r, bot ? 0 : Math.PI, bot ? Math.PI : 2 * Math.PI, false); ctx.stroke(); ctx.restore();
        pulleyAt(ctx, cx, cy, r - 5);
      }
      ctx.restore();
    }
    /* the dead end, tied to whichever block the count leaves it on */
    for (const c of counts) {
      const deadTop = c % 2 === 0;
      ctx.save(); ctx.globalAlpha = aOf(c);
      dot(ctx, Xk(0), deadTop ? BEAM : YOKE, PAL.ink, true, 9);
      if (c === n) text(ctx, deadTop ? 'the cord is tied to the ceiling here' : 'the cord is tied to the block here',
        Xk(0) - 22, deadTop ? BEAM + 24 : YOKE - 22, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
      ctx.restore();
    }

    /* every cable that pulls directly up on the load, all at the one tension */
    for (let k = 0; k < Math.max(...counts); k++) {
      ctx.save(); ctx.globalAlpha = counts.every((c) => k < c) ? 1 : aOf(k < n ? n : from);
      arrow(ctx, Xk(k), 378, Xk(k), 306, C('force'), 5); ctx.restore();
    }
    text(ctx, 'T, on every one of them', Xk(0) - 16, 342, C('force'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    /* the free end, which is what you pull on */
    arrow(ctx, Xk(n), 400, Xk(n), 486, C('force'), 5);
    text(ctx, 'you pull with T = ' + sig3(T) + ' N', Xk(n) + 16, 446, C('force'), { size: 19, weight: 600, align: 'left' });

    head(ctx, n === 1
      ? 'One cable pulls up on the load, so the pulley only turns your pull around and you supply the whole ' + sig3(w) + ' N.'
      : n + ' cables pull up on the load, so ' + sig3(T) + ' N of tension holds ' + sig3(w)
        + ' N and the mechanical advantage is about ' + n + '.');
    const tx = (v) => sig3(v).replace(/,/g, '{,}');   /* a thousands comma in TeX, not a list comma */
    readout(d.readout, `\\kFo \\approx n\\kTf = ${n}(${tx(T)}\\ \\text{N}) = ${tx(w)}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
