/* Figures for section 11.4 Variation of Pressure with Depth in a Fluid. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider's input
   alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, axes, curve, pinned, labeller, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, PATM = 1.01e5, RHO_AIR = 1.29;
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific notation to three significant figures, once for the canvas and once for KaTeX */
function sci(v, sig = 3) {
  if (v === 0) return { txt: '0', tex: '0' };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e), ms = m.toFixed(sig - 1);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (m / 10).toFixed(sig - 1); }
  return { txt: ms + ' × 10' + sup(e), tex: ms + '\\times 10^{' + e + '}' };
}
/* a pressure in kilopascals to about three significant figures */
const kpa = (P) => { const x = P / 1000; return x < 10 ? x.toFixed(2) : x < 100 ? x.toFixed(1) : x.toFixed(0); };
/* the liquids of Table 11.1 that the density slider settles on, named when the thumb sits on one */
const LIQUIDS = [[680, 'gasoline'], [790, 'ethyl alcohol'], [920, 'olive oil'], [1000, 'water'], [1025, 'sea water'], [1050, 'blood'], [1260, 'glycerin']];
const liquidOf = (rho) => (LIQUIDS.find(([v]) => Math.abs(v - rho) < 0.5) || [])[1];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
/* a bracket between two canvas points with end ticks square to it and a label offset to one side */
function bracket(ctx, a, b, color, label, side = 1, w = 3) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
  ctx.moveTo(a[0] - nx * 10, a[1] - ny * 10); ctx.lineTo(a[0] + nx * 10, a[1] + ny * 10);
  ctx.moveTo(b[0] - nx * 10, b[1] - ny * 10); ctx.lineTo(b[0] + nx * 10, b[1] + ny * 10);
  ctx.stroke(); ctx.restore();
  if (side === 0) side = ny < 0 ? 1 : -1;   /* above the line */
  if (label) text(ctx, label, (a[0] + b[0]) / 2 + side * nx * 18, (a[1] + b[1]) / 2 + side * ny * 18, color, { align: side * nx > 0.3 ? 'left' : side * nx < -0.3 ? 'right' : 'center', weight: 600, size: 22, bg: alpha(PAL.panel, 0.85) });
}
/* a small tree in ink, its foot at (x, y), for the scale of a scene on the ground */
function tree(ctx, x, y, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = PAL.muted; ctx.fillStyle = PAL.soft2; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-4, 0); ctx.lineTo(-3, -40); ctx.lineTo(3, -40); ctx.lineTo(4, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(0, -62, 30, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 11.8: the container whose bottom supports the weight of the fluid
   in it. A tank with vertical sides holds a fluid to a chosen depth over a
   chosen area; the weight of the fluid is drawn down through it, the
   pressure it produces as arrows on the walls and the bottom, each as long
   as the pressure at its depth, and the graph beside it plots the pressure
   against the depth. Still: a fluid at rest has no time in it.
===================================================================== */
(function () {
  const H = 660;
  const d = sim('sim-column', H);
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 0, max: 12, step: 0.1, value: 10.3, unit: 'm', dec: 1, aria: 'the depth of the fluid' });
  const rs = ctl(d.controls, { label: '\\krho', cls: 'density', min: 600, max: 1400, step: 5, value: 1000, unit: 'kg/m³', dec: 0, aria: 'the density of the fluid',
    detents: [{ v: 680, label: 'gasoline' }, 790, 920, 1000, 1025, 1050, { v: 1260, label: 'glycerin' }] });
  const As = ctl(d.controls, { label: 'A', cls: '', min: 0.25, max: 2, step: 0.05, value: 1, unit: 'm²', dec: 2, aria: 'the area of the bottom of the container' });
  /* Scales, fixed from the slider maxima and never rescaled: 32 canvas units to the
     metre of depth, so 12 m fills the tank; the tank's width follows the square
     root of the area on a scale of its own, 95 units to the metre, since a tank
     12 m deep and 1 m across drawn to one scale would be a thread; the pressure
     arrows take 88 units at the largest pressure the sliders reach (12 m of
     1400 kg/m³, 165 kPa); the weight arrow takes 300 units at the largest weight
     (2 m² of that, 329 kN). The graph runs 0 to 12 m and 0 to 200 kPa. */
  const KD = 32, BOT = 530, CX = 340, KW2 = 95, KP = 88 / 165000, KW = 300 / 330000;
  const TOPY = BOT - 12 * KD - 14;
  const box = { l: 830, r: 1340, t: 150, b: 540 };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), dc = C('density'), xc = C('position'), fc = C('force');
    const h = hs.v, rho = rs.v, A = As.v;
    const P = h * rho * G, m = rho * A * h, w = m * G;
    const half = KW2 * Math.sqrt(A) / 2, L = CX - half, R = CX + half, SY = BOT - h * KD;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 100);
    /* the fluid, a translucent fill, and the tank in ink */
    if (h > 0) { ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.22); ctx.fillRect(L, SY, R - L, BOT - SY); ctx.restore(); line(ctx, L, SY, R, SY, PAL.muted, 2); }
    line(ctx, L, TOPY, L, BOT, PAL.ink, 4); line(ctx, R, TOPY, R, BOT, PAL.ink, 4); line(ctx, L - 2, BOT, R + 2, BOT, PAL.ink, 4);
    /* the pressure on the walls, one arrow per metre of depth and one at the bottom, and on the bottom */
    const depths = []; for (let k = 1; k < h - 0.3; k += 1) depths.push(k); if (h > 0) depths.push(h);
    for (const dd of depths) {
      const y = BOT - (h - dd) * KD, len = dd * rho * G * KP;
      if (len < 6) continue;
      arrow(ctx, L, y, L - len, y, pc, 3); arrow(ctx, R, y, R + len, y, pc, 3);
    }
    const lenB = P * KP;
    const nB = A < 0.6 ? 3 : 5;   /* fewer arrows under a narrow bottom, so they never touch */
    if (lenB >= 6) for (let i = 0; i < nB; i++) { const x = L + ((R - L) * (i + 0.5)) / nB; arrow(ctx, x, BOT, x, BOT + lenB, pc, 3); }
    /* the weight of the fluid, down through its middle */
    if (w > 0) {
      const y0 = (SY + BOT) / 2 - Math.min(w * KW, BOT - SY) / 2, y1 = y0 + w * KW;
      arrow(ctx, CX, y0, CX, y1, fc, 5);
      /* named beyond the wall arrows at its own depth, with a leader back to the arrow */
      const ym = (y0 + y1) / 2, reach = (R - CX) + Math.max(0, (h - (BOT - ym) / KD) * rho * G * KP) + 26;
      lab.add('w = mg = ' + sci(w).txt + ' N', CX, ym, 1, 0, fc, 21, reach);
    }
    /* the depth, the area and the pressure at the bottom */
    if (h > 0) vbracket(ctx, L - 118, SY, BOT, xc, 'h = ' + fmt(h, 1) + ' m', -1);
    text(ctx, 'A = ' + fmt(A, 2) + ' m²', CX, BOT + 88 + 24, PAL.ink, { align: 'center', weight: 600, size: 22 });
    if (h > 0) lab.add('P = ' + kpa(P) + ' kPa', R + 4, BOT + Math.max(lenB, 10) / 2 + 6, 1, 0.2, pc, 21, 20);
    text(ctx, 'the container', L - 4, TOPY - 16, PAL.muted, { size: 18, align: 'left' });
    /* the graph: pressure against depth for this fluid, the 1 atm level dashed across it */
    const { X, Y } = axes(ctx, box, [0, 12], [0, 200], { xl: 'depth h (m)', yl: 'pressure due to the fluid, P (kPa)', xc, yc: pc, nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, box.l, Y(101), box.r, Y(101), PAL.muted, 2, [10, 10]);
    text(ctx, '1 atm = 101 kPa', box.l + 8, Y(101) - 16, PAL.muted, { size: 17, align: 'left' });
    curve(ctx, (x) => (x * rho * G) / 1000, 0, 12, X, Y, pc, 4);
    text(ctx, 'slope ρg, ρ = ' + fmt(rho, 0) + ' kg/m³', X(12) - 6, Y((12 * rho * G) / 1000) + (rho > 1250 ? 24 : -20), dc, { size: 18, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    if (h > 0) {
      line(ctx, X(h), Y(P / 1000), X(h), box.b, xc, 2, [4, 8]);
      line(ctx, box.l, Y(P / 1000), X(h), Y(P / 1000), pc, 2, [4, 8]);
    }
    pinned(ctx, box, X, Y, h, P / 1000, pc);
    lab.flush();
    const name = liquidOf(rho);
    const what = name ? cap(name) : 'A fluid of density ' + fmt(rho, 0) + ' kg/m³';
    topline(ctx, h === 0 ? 'With no fluid in the container there is no weight on the bottom and no pressure.'
      : what + ' ' + fmt(h, 1) + ' m deep over ' + fmt(A, 2) + ' m² weighs ' + sci(w).txt + ' N, so the pressure it exerts on the bottom is ' + sci(P).txt + ' N/m², or ' + kpa(P) + ' kPa.');
    readout(d.readout, `\\kPr = \\frac{m\\kg}{A} = \\kh\\krho\\kg = (${fmt(h, 1)}\\ \\text{m})(${sci(rho).tex}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2) = ${sci(P).tex}\\ \\text{N/m}^2`,
      h === 0 ? 'The bottom supports nothing until there is fluid above it, and the pressure grows in proportion to the depth as soon as there is.'
        : 'The fluid has a mass of ' + sci(m).txt + ' kg and weighs ' + sci(w).txt + ' N. A wider bottom holds up more fluid and more weight over more area, and the pressure, which is the weight divided by the area, does not change; only the depth and the density move it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.9: the dam and the water it retains, from the book's own
   viewpoint on a locked view. The pressure of the water on the face grows
   linearly from nothing at the surface to hρg at the bottom, the average
   depth is marked halfway down, and the force on the whole face is the
   average pressure times the area. Still: the dam and the water stand.
===================================================================== */
(function () {
  const H = 640;
  const d = sim('sim-dam', H);
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 10, max: 120, step: 1, value: 80, unit: 'm', dec: 1, aria: 'the depth of the water at the dam' });
  const Ls = ctl(d.controls, { label: 'L', cls: '', min: 100, max: 1000, step: 10, value: 500, unit: 'm', dec: 0, aria: 'the length of the dam' });
  /* The scene is in metres scaled by K, 1.9 canvas units to the metre, fixed from the
     120 m maximum of the depth. The dam is a prism 125 m tall, 10 m across at the crest
     and 80 m at its base, its water face at x = 0 running from z = 0 (the near end) to
     z = −L; the water lies at x > 0. The eye stands on the water's side and in front
     of the near end, as the book's drawing has it, so the face is seen through the
     water, which is drawn translucent for that reason; it stands close enough that
     the far end of a 1000 m dam stays under the top of the frame instead of running
     off to the horizon. */
  const K = 1.9, RHO = 1000, DAMH = 125, WRES = 150;
  const V = view({ yaw: 0.62, pitch: 0.3, dist: 1500, cx: 480, cy: 520 });
  const P = (x, y, z) => V.P([x * K, y * K, z * K]);
  function draw() {
    const { ctx } = begin(d.c);
    /* a filled and stroked polygon of projected points */
    const poly = (pts, fill, stroke, w = 2.5) => { ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); } ctx.restore(); };
    const pc = C('pressure'), xc = C('position'), fc = C('force');
    const h = hs.v, L = Ls.v, hb = h / 2;
    const Pbar = hb * RHO * G, A = h * L, Fv = Pbar * A, Pbot = h * RHO * G;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 100);
    /* the ground, then the dam: its water face, its near end and its crest */
    poly([P(-160, 0, 70), P(WRES + 120, 0, 70), P(WRES + 120, 0, -L - 200), P(-160, 0, -L - 200)], PAL.soft, null);
    const solid = (pts, k) => { poly(pts, PAL.soft, null); poly(pts, alpha(PAL.ink, k), PAL.ink, 2.5); };
    solid([P(0, 0, 0), P(0, DAMH, 0), P(0, DAMH, -L), P(0, 0, -L)], 0.16);
    solid([P(0, 0, 0), P(0, DAMH, 0), P(-10, DAMH, 0), P(-80, 0, 0)], 0.08);
    solid([P(0, DAMH, 0), P(-10, DAMH, 0), P(-10, DAMH, -L), P(0, DAMH, -L)], 0.03);
    /* the water: its surface and the cut face at the near end, translucent so the dam's face shows through */
    const wf = alpha(PAL.muted, 0.24), ws = alpha(PAL.muted, 0.7);
    poly([P(0, h, 0), P(WRES, h, 0), P(WRES, h, -L), P(0, h, -L)], wf, ws, 1.5);
    poly([P(0, 0, 0), P(WRES, 0, 0), P(WRES, h, 0), P(0, h, 0)], wf, ws, 1.5);
    /* the pressure on the face, at the near end: arrows that grow linearly with the depth, and the line their tails make */
    const zA = -10, n = 6, tails = [P(0, h, zA)];
    for (let i = 1; i <= n; i++) {
      const dd = (h * i) / n, len = 70 * (dd / 120);
      const tail = P(len, h - dd, zA), tip = P(0, h - dd, zA);
      arrow(ctx, tail[0], tail[1], tip[0], tip[1], pc, 3.5); tails.push(tail);
    }
    ctx.save(); ctx.strokeStyle = alpha(pc, 0.6); ctx.lineWidth = 2; ctx.beginPath(); tails.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    const tb = tails[n];
    lab.add('hρg = ' + kpa(Pbot) + ' kPa at the bottom', tb[0], tb[1], 0.5, 0.85, pc, 20, 26);
    /* the force on the whole face, at the average depth and halfway along, drawn at one length since it stands for the sum of all the pressure */
    const ft = P(0, h - hb, -L / 2), ff = P(110, h - hb, -L / 2);
    arrow(ctx, ff[0], ff[1], ft[0], ft[1], fc, 7);
    lab.add('F = ' + sci(Fv).txt + ' N', ff[0], ff[1], 1, 0.4, fc, 22, 22);
    /* the depth and the average depth, in front of the near end, and the length along the crest */
    const hA = P(0, h, 10), hB = P(0, 0, 10), bA = P(34, h, 10), bB = P(34, h - hb, 10);
    bracket(ctx, hA, hB, xc); bracket(ctx, bA, bB, xc);
    lab.add('h = ' + fmt(h, 1) + ' m', (hA[0] + hB[0]) / 2, (hA[1] + hB[1]) / 2, -1, 0, xc, 22, 22);
    lab.add('h̄ = ' + fmt(hb, 1) + ' m', bB[0], bB[1], 1, 1.5, xc, 22, 22);
    bracket(ctx, P(0, DAMH + 7, 0), P(0, DAMH + 7, -L), PAL.ink, 'L = ' + fmt(L, 0) + ' m', 0);
    dot(ctx, ...P(34, h - hb, 10), xc, true, 6);
    const cn = P(-5, DAMH, -L * 0.3), wn = P(WRES * 0.8, h, -L * 0.85);
    lab.add('the dam', cn[0], cn[1], -0.3, 1, PAL.ink, 19, 34);
    lab.add('the water it retains', wn[0], wn[1], 0.9, -0.5, PAL.muted, 19, 26);
    lab.flush();
    topline(ctx, 'Water ' + fmt(h, 1) + ' m deep along a dam ' + fmt(L, 0) + ' m long presses on it with an average pressure of ' + kpa(Pbar) + ' kPa and a force of ' + sci(Fv).txt + ' N.');
    readout(d.readout, `\\begin{aligned}\\kPbar &= \\khbar\\krho\\kg = (${fmt(hb, 1)}\\ \\text{m})(1.00\\times 10^{3}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2) = ${sci(Pbar).tex}\\ \\text{N/m}^2\\\\ \\kF &= \\kPbar A = (${sci(Pbar).tex}\\ \\text{N/m}^2)(${sci(A).tex}\\ \\text{m}^2) = ${sci(Fv).tex}\\ \\text{N}\\end{aligned}`,
      'The pressure grows in a straight line from nothing at the surface to hρg = ' + kpa(Pbot) + ' kPa at the bottom, so its average over the face is the pressure at the average depth, halfway down. That average depends on the depth alone and not on how far the reservoir reaches behind the dam; the force depends on the depth and on the size of the face, A = hL = ' + sci(A).txt + ' m².');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.10: the column of air over a patch of ground, reaching to the
   top of the atmosphere. Its weight is what atmospheric pressure is, and the
   bars beside it compare the density of air at sea level with the average
   density of the whole column. Still: the air stands on the ground.
===================================================================== */
(function () {
  const H = 600;
  const d = sim('sim-atmosphere', H);
  const As = ctl(d.controls, { label: 'A', cls: '', min: 0.25, max: 4, step: 0.05, value: 1, unit: 'm²', dec: 2, aria: 'the area of the patch of ground' });
  const hs = ctl(d.controls, { label: '\\kh', cls: 'position', min: 20, max: 200, step: 1, value: 120, unit: 'km', dec: 0, aria: 'the height the atmosphere is taken to extend to' });
  /* The patch's width follows the square root of the area at 70 units to the metre,
     so the 4 m² patch is 140 wide; the weight arrow takes 260 units at the largest
     weight the slider reaches (4.04 × 10⁵ N). The column is broken below its top,
     since 120 km cannot share a scale with a tree. The bars run 0 to 1.5 kg/m³. */
  const GND = 520, CX = 300, KA = 70, KW = 260 / 4.04e5, TOP = 118, BRK = 262;
  const box = { l: 900, r: 1300, t: 170, b: 480 };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), dc = C('density'), xc = C('position'), fc = C('force');
    const A = As.v, h = hs.v * 1000, w = PATM * A, rhobar = PATM / (h * G);
    const half = (KA * Math.sqrt(A)) / 2, L = CX - half, R = CX + half;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 100);
    /* the ground and a tree for scale */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(60, GND, 720, 30); ctx.restore();
    line(ctx, 60, GND, 780, GND, PAL.muted, 3);
    tree(ctx, 640, GND, 1.1);
    /* the column of air, thinning upward, drawn in two parts with a break below its top */
    const part = (y0, y1, a0, a1) => {
      const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, alpha(PAL.ink, a0)); g.addColorStop(1, alpha(PAL.ink, a1));
      ctx.save(); ctx.fillStyle = g; ctx.fillRect(L, y1, R - L, y0 - y1); ctx.restore();
      line(ctx, L, y0, L, y1, PAL.muted, 2); line(ctx, R, y0, R, y1, PAL.muted, 2);
    };
    part(GND, BRK, 0.34, 0.06); part(BRK - 22, TOP, 0.05, 0.01);
    for (const x of [L, R]) { line(ctx, x - 12, BRK - 4, x + 12, BRK - 18, PAL.muted, 2); }
    line(ctx, L, TOP, R, TOP, PAL.muted, 2, [6, 6]);
    text(ctx, 'the top of the atmosphere', R + 14, TOP, PAL.muted, { size: 18, align: 'left' });
    /* the patch of ground the column stands on */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.beginPath(); ctx.moveTo(L, GND); ctx.lineTo(R, GND); ctx.lineTo(R + 18, GND + 12); ctx.lineTo(L + 18, GND + 12); ctx.closePath(); ctx.fill(); ctx.restore();
    text(ctx, 'A = ' + fmt(A, 2) + ' m²', CX + 9, GND + 42, PAL.ink, { align: 'center', weight: 600, size: 22 });
    text(ctx, 'P = w/A = 1.01 × 10⁵ N/m² = 1 atm', CX + 9, GND + 70, pc, { align: 'center', weight: 600, size: 20 });
    /* the height of the column, with the same break */
    const bx = L - 40;
    line(ctx, bx, GND, bx, BRK, xc, 3); line(ctx, bx, BRK - 22, bx, TOP, xc, 3);
    line(ctx, bx - 10, GND, bx + 10, GND, xc, 3); line(ctx, bx - 10, TOP, bx + 10, TOP, xc, 3);
    line(ctx, bx - 12, BRK - 4, bx + 12, BRK - 18, xc, 2);
    text(ctx, 'h = ' + fmt(hs.v, 0) + ' km', bx - 16, (GND + BRK) / 2, xc, { align: 'right', weight: 600, size: 22 });
    /* the weight of the air over the patch */
    const len = w * KW, y0 = GND - 60 - len;
    arrow(ctx, CX, y0, CX, GND - 8, fc, 5);
    lab.add('w = ' + sci(w).txt + ' N', CX, (y0 + GND - 8) / 2, 1, 0, fc, 21, 24);
    /* the bars: the density of air at sea level beside the average density of the column */
    const { Y } = axes(ctx, box, [0, 2], [0, 1.5], { yl: 'density of air (kg/m³)', yc: dc, nx: 2, ny: 3, fx: () => '', fy: (v) => fmt(v, 1) });
    const bar = (i, v, label, dashed) => {
      const x0 = box.l + ((box.r - box.l) * (i + 0.25)) / 2, x1 = box.l + ((box.r - box.l) * (i + 0.75)) / 2;
      ctx.save(); ctx.strokeStyle = dc; ctx.lineWidth = 3;
      if (dashed) { ctx.setLineDash([10, 8]); ctx.fillStyle = alpha(dc, 0.15); } else ctx.fillStyle = alpha(dc, 0.55);
      ctx.beginPath(); ctx.rect(x0, Y(v), x1 - x0, box.b - Y(v)); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, v.toPrecision(3) + ' kg/m³', (x0 + x1) / 2, Y(v) - 18, dc, { align: 'center', weight: 600, size: 20 });
      text(ctx, label, (x0 + x1) / 2, box.b + 26, PAL.ink, { align: 'center', size: 17 });
    };
    bar(0, RHO_AIR, 'air at sea level, ρ', false);
    bar(1, rhobar, 'the whole column, ρ̄', true);
    lab.flush();
    topline(ctx, 'The air over ' + fmt(A, 2) + ' m² of ground weighs ' + sci(w).txt + ' N, and spread over ' + fmt(hs.v, 0) + ' km its average density is ' + rhobar.toPrecision(3) + ' kg/m³, so air at sea level is about ' + fmt(RHO_AIR / rhobar, 0) + ' times as dense as the average.');
    readout(d.readout, `\\krhobar = \\frac{\\kPatm}{\\kh\\kg} = \\frac{1.01\\times 10^{5}\\ \\text{N/m}^2}{(${fmt(hs.v, 0)}\\times 10^{3}\\ \\text{m})(9.80\\ \\text{m/s}^2)} = ${sci(rhobar).tex}\\ \\text{kg/m}^3`,
      'The column of air over the patch weighs w = P<sub>atm</sub>A = (1.01 × 10⁵ N/m²)(' + fmt(A, 2) + ' m²) = ' + sci(w).txt + ' N. A wider patch carries more air and more weight at the same pressure, and taking the atmosphere to end higher spreads the same weight over a taller column and lowers its average density.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
