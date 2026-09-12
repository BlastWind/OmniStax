/* Figures for section 9.5 Simple Machines. Boots against the section's text article.
   Every figure of this section is still: a simple machine in equilibrium has no time
   in it, so none of them registers a cycle and none carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, register, begin, line, arrow, dot, text, hbracket, vbracket, fixed, block } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const G = 9.80;                                  /* the acceleration due to gravity, as the chapter takes it */
const RAD = Math.PI / 180;
const commas = (s) => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* a quantity written to three significant figures, with commas over a thousand */
const sig3 = (x) => {
  const s = Math.abs(x).toPrecision(3);
  return (x < 0 ? '−' : '') + (s.includes('e') || Math.abs(x) >= 1000 ? commas(Math.round(Number(s))) : s);
};
/* the headline, set a little smaller where the sentence is long enough to reach the edges */
function head(ctx, s) {
  ctx.save(); ctx.font = '400 26px ' + F.FONT; const w = ctx.measureText(s).width; ctx.restore();
  text(ctx, s, 700, 46, PAL.ink, { size: w > 1320 ? Math.max(19, (26 * 1320) / w) : 26, align: 'center' });
}
/* a horizontal bar starting at x0, its name to the left and its value to the right */
function bar(ctx, x0, y, w, h, color, label, value) {
  const width = Math.max(2, w);
  ctx.save(); ctx.fillStyle = color; ctx.fillRect(x0, y - h / 2, width, h); ctx.restore();
  text(ctx, label, x0 - 16, y, color, { size: 20, weight: 600, align: 'right' });
  text(ctx, value, x0 + width + 16, y, PAL.muted, { size: 18, align: 'left' });
}
/* a hand gripping a bar at (x, y) */
function grip(ctx, x, y) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
  ctx.arc(x, y - 18, 15, 0, Math.PI * 2); ctx.moveTo(x - 9, y - 3); ctx.lineTo(x + 9, y - 3); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 9.21: the nail puller. The hand presses down on the handle, the
   nail pulls back on the claw and the plank pushes up at the pivot. The
   nail is not moving, so the two torques about the pivot are equal and
   there is nothing to play through: the figure is still. The arrows in
   the scene say which way each force acts and the bars below compare
   the sizes, since an arrow twenty times longer than its neighbour
   cannot be drawn beside it.
===================================================================== */
(function () {
  const d = sim('sim-nail-puller', 810);
  const li = ctl(d.controls, { label: '\\kli', cls: 'position', min: 0.20, max: 0.80, step: 0.01, value: 0.50, unit: 'm', dec: 2, aria: 'input lever arm, from the pivot to the hand' });
  const lo = ctl(d.controls, { label: '\\klo', cls: 'position', min: 0.010, max: 0.080, step: 0.001, value: 0.025, unit: 'm', dec: 3, aria: 'output lever arm, from the pivot to the nail' });
  const Fi = ctl(d.controls, { label: '\\kFi', cls: 'force', min: 10, max: 120, step: 5, value: 50, unit: 'N', dec: 0, aria: 'input force on the handle' });
  const SC = 1000, PX = 1150, PY = 350, HY = 140;   /* units per metre, the pivot, and the height of the handle */

  function draw() {
    const { ctx } = begin(d.c);
    const MA = li.v / lo.v, Fo = Fi.v * MA, N = Fi.v + Fo, tq = li.v * Fi.v;
    const hx = PX - SC * li.v, nx = PX + SC * lo.v;

    fixed(ctx, 220, PY, 1120, 34);                                       /* the plank */
    line(ctx, nx, PY + 40, nx, 338, PAL.muted, 6);                       /* the nail */
    dot(ctx, nx, 336, PAL.muted, true, 8);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(hx, HY); ctx.lineTo(PX, PY); ctx.lineTo(nx + 8, 348); ctx.stroke(); ctx.restore();
    dot(ctx, PX, PY, PAL.ink, false, 11);                                /* the pivot */
    text(ctx, 'pivot', PX, PY + 62, PAL.muted, { size: 17, align: 'center' });
    grip(ctx, hx, HY);

    arrow(ctx, hx, HY + 22, hx, HY + 110, C('force'), 5);                /* the three external forces on the puller */
    text(ctx, 'Fᵢ = ' + sig3(Fi.v) + ' N', hx - 18, HY + 66, C('force'), { size: 21, weight: 600, align: 'right' });
    arrow(ctx, nx, 254, nx, 338, C('force'), 5);
    text(ctx, 'Fₙ = ' + sig3(Fo) + ' N', nx + 20, 240, C('force'), { size: 21, weight: 600, align: 'left' });
    arrow(ctx, PX, PY, PX, PY - 148, C('force'), 5);
    text(ctx, 'N = ' + sig3(N) + ' N', PX - 20, PY - 160, C('force'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });

    hbracket(ctx, hx, PX, 458, C('position'), 'lᵢ = ' + fmt(li.v, 2) + ' m');   /* the two perpendicular lever arms */
    hbracket(ctx, PX, nx, 506, C('position'));
    text(ctx, 'lₒ = ' + fmt(lo.v, 3) + ' m', (PX + nx) / 2, 540, C('position'), { size: 21, weight: 600, align: 'center' });

    const X0 = 380, WMAX = 720;                                          /* the forces and the torques, each pair on a scale of its own */
    text(ctx, 'the two forces, on one scale', X0, 588, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, X0, 622, WMAX / MA, 26, C('force'), 'Fᵢ', sig3(Fi.v) + ' N');
    bar(ctx, X0, 662, WMAX, 26, C('force'), 'Fₒ', sig3(Fo) + ' N');
    text(ctx, 'the two torques about the pivot, on one scale', X0, 708, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, X0, 742, 560, 26, C('torque'), 'τᵢ', sig3(tq) + ' N·m');
    bar(ctx, X0, 780, 560, 26, C('torque'), 'τₙ', sig3(tq) + ' N·m');

    head(ctx, 'A pull of ' + sig3(Fi.v) + ' N at ' + fmt(li.v, 2) + ' m from the pivot draws the nail with '
      + sig3(Fo) + ' N: the advantage is ' + fmt(MA, 1));
    readout(d.readout, `\\text{MA} = \\frac{\\kFo}{\\kFi} = \\frac{\\kli}{\\klo} = \\frac{${fmt(li.v, 2)}\\ \\text{m}}{${fmt(lo.v, 3)}\\ \\text{m}} = ${fmt(MA, 1)}`,
      'The output force is ' + fmt(MA, 1) + ' times the input force, while the two torques they make about the pivot are equal at '
      + sig3(tq) + ' N·m, which is what it means for the nail to be on the point of moving. The plank pushes up with '
      + sig3(N) + ' N, the sum of the two downward forces.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.22: the wheelbarrow and the shovel. Both keep their pivot at
   one end and both forces on the same side of it, so one skeleton draws
   them both: slide the load's lever arm out past the hands and the
   wheelbarrow becomes a shovel, whose mechanical advantage is less than
   one. The barrow is held up and nothing travels, so the figure is
   still.
===================================================================== */
(function () {
  const d = sim('sim-wheelbarrow', 610);
  const lo = ctl(d.controls, { label: '\\klo', cls: 'position', min: 0.05, max: 1.40, step: 0.005, value: 0.075, unit: 'm', dec: 3, aria: 'lever arm of the load' });
  const li = ctl(d.controls, { label: '\\kli', cls: 'position', min: 0.50, max: 1.50, step: 0.01, value: 1.02, unit: 'm', dec: 2, aria: 'lever arm of the hands' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 100, step: 2.5, value: 45, unit: 'kg', dec: 1, aria: 'combined mass of the load and the machine' });
  const SC = 600, PX = 1180, PY = 392, GY = 430;   /* units per metre, the pivot, and the ground */

  /* the tray of a wheelbarrow, centred on x and standing on the frame */
  function tray(ctx, x) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(x - 92, 268); ctx.lineTo(x + 92, 268); ctx.lineTo(x + 56, 344); ctx.lineTo(x - 56, 344); ctx.closePath();
    ctx.fill(); ctx.stroke(); ctx.restore();
  }
  /* the blade of a shovel, centred on x */
  function blade(ctx, x) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(x - 64, 296); ctx.lineTo(x + 60, 314); ctx.lineTo(x + 48, 356); ctx.lineTo(x - 60, 338); ctx.closePath();
    ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function wheel(ctx, x, y) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(x, y, 38, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const w = M.v * G, MA = li.v / lo.v, Fi = w / MA, N = w - Fi;
    const xi = PX - SC * li.v, xo = PX - SC * lo.v, shovel = lo.v > li.v;
    const left = Math.min(xi, xo) - 96;

    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.lineCap = 'round';   /* the frame of the barrow, or the shaft of the shovel */
    ctx.beginPath(); ctx.moveTo(left, 296); ctx.lineTo(PX, PY); ctx.stroke(); ctx.restore();
    if (shovel) { blade(ctx, xo); grip(ctx, PX - 10, PY - 6); } else { tray(ctx, xo); wheel(ctx, PX, PY); line(ctx, 120, GY, 1360, GY, PAL.muted, 3); }
    grip(ctx, xi, 300);
    dot(ctx, PX, PY, PAL.ink, false, 10);
    text(ctx, shovel ? 'pivot: the rear hand' : 'pivot: the wheel’s axle', PX + 40, PY + 58, PAL.muted, { size: 17, align: 'right' });

    dot(ctx, xo, 312, PAL.ink, true, 9);                                   /* the centre of gravity and the weight that acts there */
    arrow(ctx, xo, 312, xo, 404, C('force'), 5);
    text(ctx, 'w = ' + sig3(w) + ' N', xo - 18, 388, C('force'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    arrow(ctx, xi, 258, xi, 168, C('force'), 5);                           /* the lift */
    text(ctx, 'Fᵢ = ' + sig3(Fi) + ' N', xi, 144, C('force'), { size: 21, weight: 600, align: 'center' });
    if (!shovel) {                                                         /* the wheel carries the rest of the weight */
      arrow(ctx, PX, PY, PX, PY - 90, C('force'), 5);
      text(ctx, 'N = ' + sig3(N) + ' N', PX + 18, PY - 76, C('force'), { size: 21, weight: 600, align: 'left' });
    }

    hbracket(ctx, xi, PX, 488, C('position'), 'lᵢ = ' + fmt(li.v, 2) + ' m');
    hbracket(ctx, xo, PX, 552, C('position'), 'lₒ = ' + fmt(lo.v, 3) + ' m');

    head(ctx, shovel
      ? 'A shovel: the lift of ' + sig3(Fi) + ' N at ' + fmt(li.v, 2) + ' m holds ' + sig3(w) + ' N acting at '
        + fmt(lo.v, 2) + ' m, so the advantage is ' + fmt(MA, 2)
      : 'A lift of ' + sig3(Fi) + ' N at ' + fmt(li.v, 2) + ' m from the axle holds ' + sig3(w) + ' N acting at '
        + fmt(lo.v, 3) + ' m: the advantage is ' + fmt(MA, 1));
    readout(d.readout, `\\kFi = \\kFo\\frac{\\klo}{\\kli} = (${sig3(w)}\\ \\text{N})\\frac{${fmt(lo.v, 3)}\\ \\text{m}}{${fmt(li.v, 2)}\\ \\text{m}} = ${sig3(Fi)}\\ \\text{N}`,
      shovel
        ? 'The load is farther from the pivot than the hand that lifts it, so the mechanical advantage is ' + fmt(MA, 2)
          + ', less than one, and the reach of the shovel is bought with a larger force.'
        : 'The wheel carries what your hands do not, ' + sig3(N)
          + ' N, and by Newton’s third law it presses on the ground with the same ' + sig3(N) + ' N.');
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
  const d = sim('sim-incline', 715);
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 10, max: 60, step: 1, value: 20, unit: 'º', dec: 0, aria: 'angle of the ramp' });
  const W = ctl(d.controls, { label: '\\kwgt', cls: 'force', min: 100, max: 1200, step: 25, value: 500, unit: 'N', dec: 0, aria: 'weight of the cart' });
  const HT = ctl(d.controls, { label: 'h', cls: '', min: 0.5, max: 3.0, step: 0.1, value: 1.5, unit: 'm', dec: 1, aria: 'height to be climbed' });
  const GY = 440, X0 = 150, LX = 1150;

  /* a cart, its deck centred on (x, y) and tilted to a slope of th radians */
  function cart(ctx, x, y, th) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-th); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(-42, -46, 84, 38); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(-24, 0, 9, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(24, 0, 9, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, w = W.v, h = HT.v, s = Math.sin(th);
    const L = h / s, run = h / Math.tan(th), sc = Math.min(720 / run, 240 / h), Fi = w * s, kF = 190 / w;
    const tx = X0 + run * sc, ty = GY - h * sc;

    line(ctx, 100, GY, 1360, GY, PAL.muted, 3);                              /* the ground */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath();                   /* the ramp */
    ctx.moveTo(X0, GY); ctx.lineTo(tx, ty); ctx.lineTo(tx, GY); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X0, GY, tx, ty, PAL.ink, 4); line(ctx, tx, ty, tx, GY, PAL.ink, 4);
    text(ctx, fmt(TH.v, 0) + 'º', X0 + 70, GY - 18, PAL.ink, { size: 20, weight: 600, align: 'left' });

    const mx = (X0 + tx) / 2, my = (GY + ty) / 2;                            /* the cart on the ramp, and the push along it */
    cart(ctx, mx, my, th);
    arrow(ctx, mx, my - 28, mx + Fi * kF * Math.cos(th), my - 28 - Fi * kF * s, C('force'), 5);
    text(ctx, 'Fᵢ = ' + sig3(Fi) + ' N', mx + 14, my - 86, C('force'), { size: 21, weight: 600, align: 'left' });
    text(ctx, 'a push of ' + sig3(Fi) + ' N over ' + fmt(L, 2) + ' m', mx, GY + 36, PAL.muted, { size: 18, align: 'center' });

    cart(ctx, LX, ty, 0);                                                    /* the same cart taken straight up beside the ramp */
    line(ctx, LX - 78, GY, LX + 78, GY, PAL.rule, 2, [10, 10]);
    vbracket(ctx, LX - 105, ty, GY, PAL.ink, fmt(h, 2) + ' m', -1);
    arrow(ctx, LX + 95, GY - 10, LX + 95, GY - 200, C('force'), 5);
    text(ctx, 'w = ' + sig3(w) + ' N', LX + 111, GY - 116, C('force'), { size: 21, weight: 600, align: 'left' });
    text(ctx, 'a lift of ' + sig3(w) + ' N over ' + fmt(h, 2) + ' m', LX, GY + 36, PAL.muted, { size: 18, align: 'center' });

    const BX = 430, BW = 720;                                                /* the force and the distance, each pair on a scale of its own */
    text(ctx, 'the force you must apply', BX, 510, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, BX, 544, BW * s, 24, C('force'), 'ramp', sig3(Fi) + ' N');
    bar(ctx, BX, 582, BW, 24, C('force'), 'lift', sig3(w) + ' N');
    text(ctx, 'the distance you must apply it through', BX, 628, PAL.muted, { size: 17, align: 'left' });
    bar(ctx, BX, 662, BW, 24, PAL.ink, 'ramp', fmt(L, 2) + ' m');
    bar(ctx, BX, 700, BW * s, 24, PAL.ink, 'lift', fmt(h, 2) + ' m');

    head(ctx, 'A ramp at ' + fmt(TH.v, 0) + 'º needs a push of ' + sig3(Fi) + ' N over ' + fmt(L, 2)
      + ' m, against a lift of ' + sig3(w) + ' N over ' + fmt(h, 2) + ' m');
    readout(d.readout, `\\text{MA} = \\frac{\\kFo}{\\kFi} = \\frac{\\kwgt}{\\kwgt\\sin\\theta} = \\frac{1}{\\sin ${fmt(TH.v, 0)}^\\circ} = ${fmt(1 / s, 2)}`,
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
  const TTL = ['(a) a crank: the input at the larger radius', '(b) an axle driving a wheel: the input at the smaller', '(c) an ordinary pulley: one radius only'];

  function ring(ctx, x, y, r, w) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
  /* a radius drawn from the centre out to the angle a, with its name just beyond the rim */
  function radius(ctx, x, y, r, a, label) {
    line(ctx, x, y, x + r * Math.cos(a), y + r * Math.sin(a), C('position'), 3);
    text(ctx, label, x + (r + 32) * Math.cos(a), y + (r + 32) * Math.sin(a), C('position'), { size: 19, weight: 600, align: Math.cos(a) < 0 ? 'right' : 'left' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const Ri = Math.max(15, SC * ri.v), Ro = Math.max(15, SC * ro.v);
    const MAa = ri.v / ro.v, MAb = ro.v / ri.v, out = [Fi.v * MAa, Fi.v * MAb, Fi.v];

    CX.forEach((cx, i) => text(ctx, TTL[i], cx, 116, PAL.muted, { size: 17, align: 'center' }));

    /* (a) the crank: the hand turns the handle at r_i and the shaft gives its force at r_o */
    ring(ctx, CX[0], CY, Ri, 4); ring(ctx, CX[0], CY, Ro, 4);
    dot(ctx, CX[0], CY, PAL.ink, true, 6);
    radius(ctx, CX[0], CY, Ri, -0.6, 'rᵢ'); radius(ctx, CX[0], CY, Ro, 2.3, 'rₒ');
    dot(ctx, CX[0] + Ri * Math.cos(-0.6), CY + Ri * Math.sin(-0.6), PAL.ink, true, 13);
    arrow(ctx, CX[0], CY - Ri, CX[0] + 104, CY - Ri, C('force'), 5);
    text(ctx, 'Fᵢ', CX[0] + 116, CY - Ri, C('force'), { size: 21, weight: 600, align: 'left' });
    arrow(ctx, CX[0], CY + Ro, CX[0] - 104, CY + Ro, C('force'), 5);
    text(ctx, 'Fₒ', CX[0] - 116, CY + Ro, C('force'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });

    /* (b) the axle and the wheel: the input turns the axle and the output is the force on the road */
    ring(ctx, CX[1], CY, Ri, 6); ring(ctx, CX[1], CY, Ro, 4);
    dot(ctx, CX[1], CY, PAL.ink, true, 6);
    radius(ctx, CX[1], CY, Ri, -0.6, 'rᵢ'); radius(ctx, CX[1], CY, Ro, 2.3, 'rₒ');
    arrow(ctx, CX[1], CY + Ro, CX[1] + 104, CY + Ro, C('force'), 5);
    text(ctx, 'Fᵢ', CX[1] + 116, CY + Ro, C('force'), { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    arrow(ctx, CX[1], CY - Ri, CX[1] - 104, CY - Ri, C('force'), 5);
    text(ctx, 'Fₒ', CX[1] - 116, CY - Ri, C('force'), { size: 21, weight: 600, align: 'right' });
    line(ctx, CX[1] - 160, CY + Ri + 28, CX[1] + 160, CY + Ri + 28, PAL.muted, 3);
    text(ctx, 'the road', CX[1] + 160, CY + Ri + 48, PAL.muted, { size: 17, align: 'right' });

    /* (c) the pulley: the cord comes down one side and goes up the other with the tension it arrived with */
    fixed(ctx, CX[2] - 70, 132, 140, 24);
    line(ctx, CX[2], 156, CX[2], CY - Ri, PAL.muted, 3);
    ring(ctx, CX[2], CY, Ri, 5); dot(ctx, CX[2], CY, PAL.ink, true, 6);
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

    head(ctx, 'A handle at ' + fmt(ri.v, 3) + ' m turning a shaft at ' + fmt(ro.v, 3) + ' m has an advantage of '
      + fmt(MAa, 1) + '; the two radii the other way round give ' + fmt(MAb, 3));
    readout(d.readout, `\\text{MA} = \\frac{r_{\\text{i}}}{r_{\\text{o}}} = \\frac{${fmt(ri.v, 3)}\\ \\text{m}}{${fmt(ro.v, 3)}\\ \\text{m}} = ${fmt(MAa, 1)}`,
      'A crank is usually built with a large mechanical advantage, while an axle driving a much larger wheel has one well below one. The pulley is the case where the two radii are the same circle, so it turns the direction of the force and leaves its magnitude alone.');
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
  const N = ctl(d.controls, { label: 'n', cls: '', min: 1, max: 4, step: 1, value: 2, unit: 'cables', dec: 0, aria: 'number of cables pulling directly on the load' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 20, max: 200, step: 5, value: 115, unit: 'kg', dec: 0, aria: 'mass of the load' });
  const BEAM = 150, YOKE = 456, CX = 640;

  function pulleyAt(ctx, x, y, r) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const n = Math.round(N.v), w = M.v * G, T = w / n;
    const xs = Array.from({ length: n }, (_, i) => CX + (i - (n - 1) / 2) * 120);

    fixed(ctx, 260, BEAM - 34, 900, 34);                                      /* the ceiling the system hangs from */
    text(ctx, 'the ceiling', 272, BEAM - 52, PAL.muted, { size: 17, align: 'left' });
    line(ctx, CX - 150, YOKE, CX + 150, YOKE, PAL.ink, 8);                    /* the movable block and the load under it */
    line(ctx, CX - 62, YOKE, CX - 62, YOKE + 40, PAL.ink, 4);
    line(ctx, CX + 62, YOKE, CX + 62, YOKE + 40, PAL.ink, 4);
    block(ctx, CX, YOKE + 96, 280, 104, PAL.ink);
    text(ctx, fmt(M.v, 0) + ' kg', CX, YOKE + 78, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'w = ' + sig3(w) + ' N', CX, YOKE + 116, C('force'), { size: 21, weight: 600, align: 'center' });

    xs.forEach((x, i) => {                                                     /* every cable that pulls directly up on the load */
      line(ctx, x, YOKE, x, BEAM, PAL.muted, 4);
      if (i === 0) dot(ctx, x, BEAM, PAL.ink, true, 9);                        /* the end of the cord, tied to the ceiling */
      else pulleyAt(ctx, x, i % 2 === 1 ? YOKE - 24 : BEAM + 22, 22);
      arrow(ctx, x, 400, x, 322, C('force'), 5);
      text(ctx, 'T', x, 294, C('force'), { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    });
    const last = xs[xs.length - 1], px = last + 200;                           /* the free end of the cord, which is what you pull on */
    line(ctx, last, BEAM + 22, px, BEAM + 22, PAL.muted, 4);
    pulleyAt(ctx, px, BEAM + 22, 22);
    line(ctx, px + 22, BEAM + 22, px + 22, 480, PAL.muted, 4);
    arrow(ctx, px + 22, 400, px + 22, 486, C('force'), 5);
    text(ctx, 'you pull with T = ' + sig3(T) + ' N', px + 38, 446, C('force'), { size: 19, weight: 600, align: 'left' });

    text(ctx, (n === 1 ? 'one cable pulls' : n + ' cables pull') + ' directly up on the load, each with the same tension T = '
      + sig3(T) + ' N', CX, 634, PAL.muted, { size: 18, align: 'center' });
    head(ctx, n === 1
      ? 'One cable pulls up on the load, so the pulley only turns your pull around: you supply the whole ' + sig3(w) + ' N'
      : n + ' cables pull up on the load, so ' + sig3(T) + ' N of tension holds ' + sig3(w)
        + ' N: the advantage is about ' + n);
    readout(d.readout, `\\kFo \\approx n\\kTf = ${n}(${sig3(T)}\\ \\text{N}) = ${sig3(w)}\\ \\text{N}`,
      'The tension is the same everywhere along a friction-free cord, so each of the ' + n + ' cable'
      + (n === 1 ? '' : 's') + ' pulling on the block carries the same ' + sig3(T)
      + ' N. Raise the count and each cable, and the hand at the free end with it, carries less.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
