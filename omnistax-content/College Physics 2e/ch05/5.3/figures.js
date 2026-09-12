/* Figures for section 5.3 Elasticity: Stress and Strain. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, nice, spring, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
const G = 9.80;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
/* a rectangle outlined in a dashed line: the shape the object had before the force was applied */
function ghost(ctx, x, y, w, h) { line(ctx, x, y, x + w, y, PAL.muted, 2, [8, 8]); line(ctx, x + w, y, x + w, y + h, PAL.muted, 2, [8, 8]); line(ctx, x + w, y + h, x, y + h, PAL.muted, 2, [8, 8]); line(ctx, x, y + h, x, y, PAL.muted, 2, [8, 8]); }
/* a value in units of 10^9, written the way the book writes a modulus */
const giga = (v) => fmt(v, v < 10 ? 1 : 0) + ' × 10⁹ N/m²';
/* a number in scientific form for a readout, "5.00 \times 10^{7}" */
function sci(v, d) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return `${fmt(m, d)} \\times 10^{${e}}`;
}
/* the same number for a headline or a note drawn on the canvas, "5.0 × 10⁷" */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function plain(v, d) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (e >= 0 && e <= 3) return fmt(v, Math.max(0, d - e));
  return fmt(m, d) + ' × 10' + String(e).split('').map((ch) => SUP[ch] ?? ch).join('');
}
/* how many times larger than life a deformation is drawn: the units it takes on the canvas against the units the object itself takes */
const timesLarger = (unitsPerMetreDrawn, unitsPerMetreScene) => (unitsPerMetreDrawn > 0 ? plain(unitsPerMetreDrawn / unitsPerMetreScene, 1) : '0');

/* =====================================================================
   FIGURE 5.11: deformation against applied force. A spring is pulled
   along its length and the deformation it takes is plotted against the
   force. While the graph is straight, Hooke's law holds; past the end of
   the straight segment the stretch is still elastic, then permanent, and
   at last the spring breaks. Still: the idea has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-hooke-graph', 700);
  const Fa = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 600, step: 5, value: 90, unit: 'N', dec: 0, aria: 'applied force' });
  const kk = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 50, max: 400, step: 10, value: 150, unit: 'N/m', dec: 0, aria: 'force constant' });
  const Fh = ctl(d.controls, { label: '\\text{Hooke limit}', cls: 'force', min: 40, max: 300, step: 10, value: 120, unit: 'N', dec: 0, aria: 'force at which the straight segment of the graph ends' });
  const elastic = () => 1.5 * Fh.v, fracture = () => 1.9 * Fh.v;
  /* the deformation the force produces: proportional while Hooke's law holds, then steeper, then steeper again */
  function dl(f) {
    const k = kk.v, h = Fh.v, e = elastic(), fr = fracture(), top = Math.min(f, fr);
    return Math.min(top, h) / k + Math.max(0, Math.min(top, e) - h) / (0.55 * k) + Math.max(0, top - e) / (0.18 * k);
  }
  const region = (f) => (f <= Fh.v ? 0 : f <= elastic() ? 1 : f <= fracture() ? 2 : 3);
  function draw() {
    const { ctx } = begin(d.c);
    const f = Fa.v, x = dl(f), reg = region(f), full = dl(fracture());
    /* the scene: a spring clamped at the left and pulled to the right */
    const y = 175, wall = 170, nat = 250, SC = 520 / Math.max(0.4, full);
    fixed(ctx, wall - 60, y - 80, 60, 160);
    const end = wall + nat + x * SC;
    strip(ctx, 120, Math.min(1320, end + 320), y, 50);
    if (reg < 3) {
      spring(ctx, wall, y, end, y, 11, 24, PAL.ink, 4);
      line(ctx, end, y - 34, end, y + 34, PAL.ink, 7);
      arrow(ctx, end + 24, y, end + 24 + Math.max(20, f * 0.5), y, C('force'), 5);
      text(ctx, 'F = ' + fmt(f, 0) + ' N', end + 30, y - 34, C('force'), { weight: 600, size: 22 });
    } else {
      spring(ctx, wall, y, wall + nat * 0.55, y, 5, 24, PAL.ink, 4);
      spring(ctx, end - nat * 0.55, y, end, y, 5, 24, PAL.ink, 4);
      text(ctx, 'the spring has broken', (wall + nat * 0.55 + end - nat * 0.55) / 2, y - 46, PAL.muted, { size: 20, align: 'center', weight: 600 });
    }
    line(ctx, wall + nat, y - 62, wall + nat, y + 62, PAL.muted, 2, [6, 6]);
    text(ctx, 'original length', wall + nat - 12, y - 76, PAL.muted, { size: 17, align: 'right' });
    if (x * SC > 8 && reg < 3) hbracket(ctx, wall + nat, end, y + 96, C('position'), 'ΔL = ' + fmt(x, 3) + ' m');
    /* the graph: the deformation against the force, with the three regions the book names */
    const yr = nice(0, Math.max(0.05, full) * 1.05, 4);
    const box = { l: 190, r: 1290, t: 330, b: 620 };
    const { X, Y } = axes(ctx, box, [0, 600], [0, yr.hi], { xl: 'applied force F (N)', xc: C('force'), yl: 'deformation ΔL (m)', yc: C('position'), nx: 6, ny: yr.n, fy: (v) => fmt(v, 1) });
    const band = (a, b, hue) => { ctx.save(); ctx.fillStyle = alpha(hue, 0.08); ctx.fillRect(X(a), box.t, X(Math.min(b, 600)) - X(a), box.b - box.t); ctx.restore(); };
    band(0, Fh.v, C('position')); band(elastic(), fracture(), C('force'));
    const seg = (a, b, w) => { if (b <= a) return; line(ctx, X(a), Y(dl(a)), X(Math.min(b, 600)), Y(dl(Math.min(b, 600))), C('position'), w); };
    seg(0, Fh.v, 5); seg(Fh.v, elastic(), 5); seg(elastic(), fracture(), 5);
    if (fracture() <= 600) {
      const fx = X(fracture()), fy = Y(dl(fracture()));
      line(ctx, fx - 14, fy - 14, fx + 14, fy + 14, C('force'), 4); line(ctx, fx - 14, fy + 14, fx + 14, fy - 14, C('force'), 4);
      text(ctx, 'fracture', fx + 22, fy - 14, C('force'), { size: 18, weight: 600 });
    }
    text(ctx, 'Hooke’s law', X(Fh.v / 2), box.t + 22, PAL.muted, { size: 18, align: 'center' });
    if (X(elastic()) - X(Fh.v) > 80) text(ctx, 'still elastic', (X(Fh.v) + X(elastic())) / 2, box.t + 22, PAL.muted, { size: 18, align: 'center' });
    if (X(Math.min(600, fracture())) - X(elastic()) > 110) text(ctx, 'permanent', (X(elastic()) + X(Math.min(600, fracture()))) / 2, box.t + 22, PAL.muted, { size: 18, align: 'center' });
    if (reg < 3) { line(ctx, X(f), box.b, X(f), Y(x), C('force'), 2, [4, 8]); line(ctx, box.l, Y(x), X(f), Y(x), C('position'), 2, [4, 8]); dot(ctx, X(f), Y(x), PAL.ink, true, 10); }
    headline(ctx, reg === 0 ? 'F = ' + fmt(f, 0) + ' N · the spring has stretched ' + fmt(x, 3) + ' m, and the graph is still on its straight segment, where Hooke’s law holds'
      : reg === 1 ? 'F = ' + fmt(f, 0) + ' N · the spring has stretched ' + fmt(x, 3) + ' m; the graph has left its straight segment, but the stretch is still elastic and comes back'
        : reg === 2 ? 'F = ' + fmt(f, 0) + ' N · the spring has stretched ' + fmt(x, 3) + ' m and is permanently deformed, so it will not return to its original length'
          : 'F = ' + fmt(f, 0) + ' N · the spring has fractured, which happens here at ' + fmt(fracture(), 0) + ' N');
    readout(d.readout, reg === 0
      ? `\\kdL = \\frac{\\kF}{\\kk} = \\frac{${fmt(f, 0)}\\ \\text{N}}{${fmt(kk.v, 0)}\\ \\text{N/m}} = ${fmt(x, 3)}\\ \\text{m}`
      : `\\kF = ${fmt(f, 0)}\\ \\text{N} > ${fmt(Fh.v, 0)}\\ \\text{N}, \\qquad \\kdL = ${fmt(x, 3)}\\ \\text{m} > \\frac{\\kF}{\\kk} = ${fmt(f / kk.v, 3)}\\ \\text{m}`,
      'The slope of the straight region is 1/k, so a stiffer spring gives a flatter line. Move the end of the straight segment to the right and the region in which Hooke’s law holds grows, as it does for a metal or a spring; move it to the left and it shrinks, as it does for a bone.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.12: the same weight on three guitar strings of the same
   length. The thicker string and the steel one have larger force
   constants, so the same weight stretches them less. Still.
===================================================================== */
(function () {
  const d = sim('sim-strings', 780);
  const w = ctl(d.controls, { label: '\\kwgt', cls: 'force', min: 2, max: 40, step: 1, value: 20, unit: 'N', dec: 0, aria: 'weight hung from each string' });
  const L0 = ctl(d.controls, { label: '\\kLo', cls: 'position', min: 0.2, max: 1.2, step: 0.05, value: 0.65, unit: 'm', dec: 2, aria: 'original length of the strings' });
  const STR = [
    { name: 'thin nylon', Y: 5e9, r: 0.5e-3 },
    { name: 'thicker nylon', Y: 5e9, r: 1.0e-3 },
    { name: 'steel', Y: 210e9, r: 0.5e-3 },
  ];
  const area = (s) => Math.PI * s.r * s.r;
  const dl = (s, force) => (force * L0.v) / (s.Y * area(s));       /* metres */
  function draw() {
    const { ctx } = begin(d.c);
    const biggest = dl(STR[0], 40);
    const MAG = 70 / Math.max(1e-9, biggest);                       /* units per metre of stretch, so the longest stretch always reads */
    const yTop = 210, len = 130 + 200 * (L0.v / 1.2);
    fixed(ctx, 200, yTop - 44, 560, 44);
    STR.forEach((s, i) => {
      const x = 270 + i * 190, dL = dl(s, w.v), grow = Math.min(90, dL * MAG);
      line(ctx, x, yTop, x, yTop + len, PAL.ink, i === 1 ? 7 : 4);
      line(ctx, x, yTop + len, x, yTop + len + grow, C('position'), i === 1 ? 7 : 4);
      block(ctx, x, yTop + len + grow + 30, 74, 46, PAL.ink);
      arrow(ctx, x, yTop + len + grow + 58, x, yTop + len + grow + 58 + 16 + w.v * 1.1, C('force'), 5);
      text(ctx, s.name, x, yTop - 100, PAL.ink, { size: 19, align: 'center', weight: 600 });
      text(ctx, 'Y = ' + giga(s.Y / 1e9), x, yTop - 74, C('elastic-modulus'), { size: 17, align: 'center' });
      text(ctx, fmt(dL * 1000, 2) + ' mm', x + 14, yTop + len + grow / 2 + 2, C('position'), { size: 17, weight: 600 });
    });
    text(ctx, 'w = ' + fmt(w.v, 0) + ' N on each string', 200, 700, C('force'), { size: 20, weight: 600 });
    text(ctx, 'the stretch is drawn about ' + timesLarger(MAG, len / L0.v) + ' times larger than it is', 200, 728, PAL.muted, { size: 17 });
    vbracket(ctx, 176, yTop, yTop + len, C('position'), 'L₀ = ' + fmt(L0.v, 2) + ' m', -1);
    /* the graph beside the vertical scene: the stretch each string takes against the weight hung on it */
    const yr = nice(0, dl(STR[0], 40) * 1000 * 1.05, 4);
    const box = { l: 830, r: 1310, t: 190, b: 600 };
    const { X, Y } = axes(ctx, box, [0, 40], [0, yr.hi], { xl: 'weight w (N)', xc: C('force'), yl: 'stretch ΔL (mm)', yc: C('position'), nx: 4, ny: yr.n, fy: (v) => fmt(v, 1) });
    STR.forEach((s, i) => {
      const e = Math.min(40, (yr.hi / 1000) * s.Y * area(s) / L0.v);
      line(ctx, X(0), Y(0), X(e), Y(dl(s, e) * 1000), C('position'), i === 1 ? 5 : 3);
      dot(ctx, X(w.v), Y(dl(s, w.v) * 1000), PAL.ink, true, 9);
      text(ctx, s.name, X(e) - 10, Y(dl(s, e) * 1000) - 18, PAL.muted, { size: 17, align: 'right' });
    });
    headline(ctx, 'a ' + fmt(w.v, 0) + ' N weight stretches the thin nylon string ' + fmt(dl(STR[0], w.v) * 1000, 2) + ' mm, the thicker nylon string ' + fmt(dl(STR[1], w.v) * 1000, 2) + ' mm and the steel string ' + fmt(dl(STR[2], w.v) * 1000, 2) + ' mm');
    readout(d.readout, `\\kdL = \\frac{1}{\\kY}\\frac{\\kwgt}{A}\\kLo = \\frac{(${fmt(w.v, 0)}\\ \\text{N})(${fmt(L0.v, 2)}\\ \\text{m})}{(${sci(STR[0].Y, 0)}\\ \\text{N/m}^2)(${sci(area(STR[0]), 2)}\\ \\text{m}^2)} = ${sci(dl(STR[0], w.v), 2)}\\ \\text{m}`,
      'The thicker nylon string has four times the cross-sectional area of the thin one, so the same weight stretches it a quarter as far; the steel string has the same area as the thin nylon one but forty-two times its Young’s modulus, so it stretches forty-two times less. All three lines are straight, which is Hooke’s law.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.13: the same rod in tension and in compression. The change in
   length is proportional to the force and to the original length and
   inversely proportional to the cross-sectional area. Still.
===================================================================== */
(function () {
  const d = sim('sim-rod', 740);
  const Fa = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 5000, step: 50, value: 1500, unit: 'N', dec: 0, aria: 'force applied to the rod' });
  const L0 = ctl(d.controls, { label: '\\kLo', cls: 'position', min: 0.2, max: 3, step: 0.1, value: 1, unit: 'm', dec: 1, aria: 'original length of the rod' });
  const rr = ctl(d.controls, { label: 'r', cls: '', min: 0.5, max: 5, step: 0.1, value: 1, unit: 'cm', dec: 1, aria: 'radius of the rod' });
  const YY = ctl(d.controls, { label: '\\kY', cls: 'elastic-modulus', min: 1, max: 210, step: 1, value: 70, unit: '× 10⁹ N/m²', dec: 0, aria: 'Young’s modulus' });
  const OTHERS = [{ name: 'steel', Y: 210 }, { name: 'aluminum', Y: 70 }, { name: 'bone, compression', Y: 9 }, { name: 'nylon', Y: 5 }];
  const area = () => Math.PI * Math.pow(rr.v / 100, 2);
  const dl = (force, Yg) => (force * L0.v) / (Yg * 1e9 * area());   /* metres */
  function draw() {
    const { ctx } = begin(d.c);
    const x = dl(Fa.v, YY.v), len = 130 + 300 * (L0.v / 3), wRod = 26 + 44 * (rr.v / 5);
    const MAG = x > 0 ? Math.min(90, x * 4e5) / x : 0;              /* units per metre of change, kept readable at every setting */
    const grow = x * MAG, yTop = 190, aL = 34 + Fa.v * 0.016;
    ['tension', 'compression'].forEach((mode, i) => {
      const cx = 200 + i * 320, pull = mode === 'tension' ? 1 : -1;
      const bot = yTop + len + pull * grow;
      ghost(ctx, cx - wRod / 2, yTop, wRod, len);
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
      ctx.fillRect(cx - wRod / 2, yTop, wRod, bot - yTop); ctx.strokeRect(cx - wRod / 2, yTop, wRod, bot - yTop); ctx.restore();
      if (pull > 0) { arrow(ctx, cx, yTop - 16, cx, yTop - 16 - aL, C('force'), 5); arrow(ctx, cx, bot + 16, cx, bot + 16 + aL, C('force'), 5); }
      else { arrow(ctx, cx, yTop - 16 - aL, cx, yTop - 16, C('force'), 5); arrow(ctx, cx, bot + 16 + aL, cx, bot + 16, C('force'), 5); }
      text(ctx, 'F', cx + wRod / 2 + 14, yTop - 16 - aL / 2, C('force'), { weight: 600, size: 22 });
      text(ctx, 'F', cx + wRod / 2 + 14, bot + 16 + aL / 2, C('force'), { weight: 600, size: 22 });
      text(ctx, '(' + (i ? 'b' : 'a') + ') ' + mode, cx, yTop + len + 150, PAL.ink, { size: 20, align: 'center', weight: 600 });
      if (grow > 4) vbracket(ctx, cx - wRod / 2 - 44, Math.min(yTop + len, bot), Math.max(yTop + len, bot), C('position'), 'ΔL', -1);
    });
    text(ctx, x > 0 ? 'ΔL = ' + fmt(x * 1000, 3) + ' mm, drawn about ' + timesLarger(MAG, len / L0.v) + ' times larger than it is' : 'with no force applied the rod keeps its original length', 110, 620, PAL.muted, { size: 18 });
    text(ctx, 'L₀ = ' + fmt(L0.v, 1) + ' m, r = ' + fmt(rr.v, 1) + ' cm, A = πr² = ' + plain(area(), 2) + ' m²', 110, 648, PAL.muted, { size: 18 });
    /* the graph beside the two vertical rods: the change in length against the force, with four materials of Table 5.3 */
    const yr = nice(0, dl(5000, YY.v) * 1000 * 1.05, 4);
    const box = { l: 790, r: 1310, t: 150, b: 560 };
    const { X, Y } = axes(ctx, box, [0, 5000], [0, yr.hi], { xl: 'force F (N)', xc: C('force'), yl: 'change in length ΔL (mm)', yc: C('position'), nx: 5, ny: yr.n, fy: (v) => fmt(v, 2) });
    OTHERS.forEach((o, i) => {
      const e = Math.min(5000, (yr.hi / 1000) * o.Y * 1e9 * area() / L0.v);
      if (e < 120) return;
      line(ctx, X(0), Y(0), X(e), Y(dl(e, o.Y) * 1000), PAL.rule, 3);
      /* a line that leaves through the top of the box is named beside where it leaves, not above it, so the labels keep off the axis title */
      if (e < 4980) text(ctx, o.name, X(e) + 10, box.t + 20 + i * 24, PAL.muted, { size: 16 });
      else text(ctx, o.name, X(e) - 8, Y(dl(e, o.Y) * 1000) - 16, PAL.muted, { size: 16, align: 'right' });
    });
    const ec = Math.min(5000, (yr.hi / 1000) * YY.v * 1e9 * area() / L0.v);
    line(ctx, X(0), Y(0), X(ec), Y(dl(ec, YY.v) * 1000), C('position'), 5);
    line(ctx, X(Fa.v), box.b, X(Fa.v), Y(x * 1000), C('force'), 2, [4, 8]);
    dot(ctx, X(Fa.v), Y(x * 1000), PAL.ink, true, 10);
    headline(ctx, 'F = ' + fmt(Fa.v, 0) + ' N · the rod stretches ' + fmt(x * 1000, 3) + ' mm in tension and is compressed by the same amount');
    readout(d.readout, `\\kdL = \\frac{1}{\\kY}\\frac{\\kF}{A}\\kLo = \\frac{(${fmt(Fa.v, 0)}\\ \\text{N})(${fmt(L0.v, 1)}\\ \\text{m})}{(${sci(YY.v * 1e9, 1)}\\ \\text{N/m}^2)(${sci(area(), 2)}\\ \\text{m}^2)} = ${sci(x, 2)}\\ \\text{m}`,
      'For very small deformations and uniform materials the change in length is the same for a tension and for a compression of the same size, which is why the two rods move by equal amounts. Double the length and the change doubles; double the radius and the area is four times as large, so the change falls to a quarter.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.15: the stress a mammalian tendon carries against its strain.
   The toe region gives easily, the linear region has the slope Table 5.3
   gives for tendon, and in the failure region fibers break. Still.
===================================================================== */
(function () {
  const d = sim('sim-tendon', 730);
  const eps = ctl(d.controls, { label: '\\text{strain}', cls: '', min: 0, max: 0.1, step: 0.002, value: 0.04, unit: '', dec: 3, aria: 'strain of the tendon' });
  const L0 = ctl(d.controls, { label: '\\kLo', cls: 'position', min: 5, max: 40, step: 1, value: 20, unit: 'cm', dec: 0, aria: 'original length of the tendon' });
  const Y = 1e9, TOE = 0.02, LIN = 0.06;                            /* Table 5.3 gives Young's modulus for tendon as 1 × 10⁹ N/m² */
  const stress = (e) => (e <= TOE ? (Y * e * e) / (2 * TOE)
    : e <= LIN ? (Y * TOE) / 2 + Y * (e - TOE)
      : (Y * TOE) / 2 + Y * (LIN - TOE) + 0.5 * Y * (e - LIN) - 12 * Y * (e - LIN) * (e - LIN));
  const slope = (e) => (e <= TOE ? (Y * e) / TOE : e <= LIN ? Y : Math.max(0, 0.5 * Y - 24 * Y * (e - LIN)));
  const TOP = 80e6;
  function draw() {
    const { ctx } = begin(d.c);
    const e = eps.v, s = stress(e), L = L0.v / 100, dL = e * L;
    /* the scene: the tendon stretched along a strip */
    const y = 160, x0 = 220, base = 260 + 460 * (L0.v / 40), grow = base * e;
    strip(ctx, 120, 1320, y, 56);
    fixed(ctx, x0 - 54, y - 60, 54, 120);
    ctx.save(); ctx.fillStyle = alpha(C('stress'), 0.3); ctx.fillRect(x0, y - 20, base + grow, 40); ctx.restore();
    line(ctx, x0, y - 20, x0 + base + grow, y - 20, PAL.ink, 4); line(ctx, x0, y + 20, x0 + base + grow, y + 20, PAL.ink, 4);
    line(ctx, x0 + base, y - 46, x0 + base, y + 46, PAL.muted, 2, [6, 6]);
    arrow(ctx, x0 + base + grow + 20, y, x0 + base + grow + 20 + 40 + s / 6e5, y, C('stress'), 5);
    text(ctx, 'stress ' + fmt(s / 1e6, 1) + ' MN/m²', x0 + base + grow + 26, y - 34, C('stress'), { weight: 600, size: 20 });
    if (grow > 6) hbracket(ctx, x0 + base, x0 + base + grow, y + 80, C('position'), 'ΔL = ' + fmt(dL * 1000, 1) + ' mm');
    text(ctx, 'L₀ = ' + fmt(L0.v, 0) + ' cm', x0 + base / 2, y + 124, C('position'), { size: 20, align: 'center', weight: 600 });
    /* the graph: the stress the tendon carries against its strain, with the three regions the book names */
    const box = { l: 210, r: 1270, t: 340, b: 640 };
    const { X, Y: Yg } = axes(ctx, box, [0, 0.1], [0, TOP / 1e6], { xl: 'strain ΔL / L₀', xc: PAL.ink, yl: 'tensile stress (MN/m²)', yc: C('stress'), nx: 5, ny: 4, fx: (v) => fmt(v, 2) });
    const band = (a, b) => { ctx.save(); ctx.fillStyle = alpha(C('stress'), 0.07); ctx.fillRect(X(a), box.t, X(b) - X(a), box.b - box.t); ctx.restore(); };
    band(0, TOE); band(LIN, 0.1);
    F.curve(ctx, (t) => stress(t) / 1e6, 0, 0.1, X, Yg, C('stress'), 5, 120);
    text(ctx, '(1) toe region', X(TOE / 2), box.t + 24, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '(2) linear region', X((TOE + LIN) / 2), box.t + 24, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '(3) failure region', X((LIN + 0.1) / 2), box.t + 24, PAL.muted, { size: 18, align: 'center' });
    /* the tangent, which is the modulus at this strain */
    const m = slope(e), half = 0.012;
    line(ctx, X(Math.max(0, e - half)), Yg((s + m * (Math.max(0, e - half) - e)) / 1e6), X(Math.min(0.1, e + half)), Yg((s + m * (Math.min(0.1, e + half) - e)) / 1e6), C('elastic-modulus'), 3, [10, 10]);
    line(ctx, X(e), box.b, X(e), Yg(s / 1e6), PAL.muted, 2, [4, 8]);
    line(ctx, box.l, Yg(s / 1e6), X(e), Yg(s / 1e6), C('stress'), 2, [4, 8]);
    dot(ctx, X(e), Yg(s / 1e6), PAL.ink, true, 10);
    headline(ctx, 'at a strain of ' + fmt(e, 3) + ' the tendon carries a stress of ' + fmt(s / 1e6, 1) + ' MN/m², and the slope of the curve there is ' + plain(m, 1) + ' N/m²');
    readout(d.readout, `\\text{stress} = ${sci(s, 2)}\\ \\text{N/m}^2 \\qquad \\text{strain} = \\frac{\\kdL}{\\kLo} = \\frac{${fmt(dL * 1000, 1)}\\ \\text{mm}}{${fmt(L0.v, 0)}\\ \\text{cm}} = ${fmt(e, 3)}`,
      'In the linear region the curve rises by Young’s modulus for tendon, 1 × 10⁹ N/m², for every unit of strain, so stress = Y × strain holds there. In the toe region the fibers are still aligning themselves with the stress and the tendon gives more easily, and in the failure region individual fibers break, so the slope falls away.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.16: a bookcase sheared sideways. The deformation is
   perpendicular to the length rather than parallel to it, and the
   constant is the shear modulus. Still.
===================================================================== */
(function () {
  const d = sim('sim-shear', 700);
  const Fa = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 2000, step: 20, value: 800, unit: 'N', dec: 0, aria: 'shearing force' });
  const L0 = ctl(d.controls, { label: '\\kLo', cls: 'position', min: 0.3, max: 2.5, step: 0.1, value: 1.8, unit: 'm', dec: 1, aria: 'height of the bookcase' });
  const AA = ctl(d.controls, { label: 'A', cls: '', min: 0.05, max: 1, step: 0.05, value: 0.3, unit: 'm²', dec: 2, aria: 'cross-sectional area' });
  const SS = ctl(d.controls, { label: '\\kS', cls: 'elastic-modulus', min: 1, max: 80, step: 1, value: 10, unit: '× 10⁹ N/m²', dec: 0, aria: 'shear modulus' });
  const MATS = [{ n: 'lead', S: 5, l: 1 }, { n: 'hardwood', S: 10 }, { n: 'glass, granite, marble', S: 20 }, { n: 'aluminum', S: 25, l: 1 }, { n: 'brass', S: 35 }, { n: 'iron', S: 40 }, { n: 'bone, steel', S: 80, l: 1 }];
  const dx = (Sg) => (Fa.v * L0.v) / (Sg * 1e9 * AA.v);              /* metres */
  function draw() {
    const { ctx } = begin(d.c);
    const x = dx(SS.v), h = 120 + 300 * (L0.v / 2.5), wB = 150 + 130 * AA.v;
    const MAG = x > 0 ? Math.min(96, x * 1.6e8) / x : 0;
    const lean = x * MAG, yb = 560, yt = yb - h, cx = 300;
    fixed(ctx, cx - wB / 2 - 60, yb, wB + 120, 34);
    ghost(ctx, cx - wB / 2, yt, wB, h);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(cx - wB / 2, yb); ctx.lineTo(cx + wB / 2, yb); ctx.lineTo(cx + wB / 2 + lean, yt); ctx.lineTo(cx - wB / 2 + lean, yt); ctx.closePath(); ctx.fill(); ctx.stroke();
    for (let i = 1; i <= 3; i++) { const f = i / 4, yy = yb - h * f; line(ctx, cx - wB / 2 + lean * f, yy, cx + wB / 2 + lean * f, yy, PAL.muted, 2); }
    ctx.restore();
    arrow(ctx, cx - wB / 2 - 30 + lean, yt + 16, cx - wB / 2 - 30 + lean + 40 + Fa.v * 0.055, yt + 16, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fa.v, 0) + ' N', cx - wB / 2 + lean, yt - 22, C('force'), { weight: 600, size: 21 });
    arrow(ctx, cx + wB / 2 + 30, yb - 16, cx + wB / 2 + 30 - 40 - Fa.v * 0.055, yb - 16, C('force'), 5);
    text(ctx, 'F', cx + wB / 2 + 44, yb - 46, C('force'), { weight: 600, size: 21 });
    vbracket(ctx, cx - wB / 2 - 80, yt, yb, C('position'), '', -1);
    text(ctx, 'L₀ = ' + fmt(L0.v, 1) + ' m', cx - wB / 2 - 92, (yt + yb) / 2, C('position'), { align: 'right', weight: 600, size: 20 });
    if (lean > 5) hbracket(ctx, cx + wB / 2, cx + wB / 2 + lean, yt - 56, C('position'), 'Δx');
    text(ctx, x > 0 ? 'Δx = ' + fmt(x * 1e6, 3) + ' µm, drawn about ' + timesLarger(MAG, h / L0.v) + ' times larger than it is' : 'with no force applied the bookcase stands square', 110, 636, PAL.muted, { size: 18 });
    /* the graph beside the vertical scene: the deformation falls as 1/S, with the materials of Table 5.3 along it */
    const yr = nice(0, dx(1) * 1e6 * 1.05, 4);
    const box = { l: 800, r: 1300, t: 170, b: 540 };
    const { X, Y } = axes(ctx, box, [0, 80], [0, yr.hi], { xl: 'shear modulus S (× 10⁹ N/m²)', xc: C('elastic-modulus'), yl: 'deformation Δx (µm)', yc: C('position'), nx: 4, ny: yr.n, fy: (v) => fmt(v, 1) });
    F.curve(ctx, (t) => Math.min(yr.hi, dx(t) * 1e6), 1, 80, X, Y, C('position'), 5, 140);
    MATS.forEach((m) => {
      const yv = dx(m.S) * 1e6; if (yv > yr.hi) return;
      dot(ctx, X(m.S), Y(yv), PAL.muted, false, 8);
      /* the curve crowds its points together at the right, so only three of the seven are named and the rest are left as marks */
      if (m.l) text(ctx, m.n, X(m.S) + (m.S > 60 ? -10 : 12), Y(yv) - 20, PAL.muted, { size: 17, align: m.S > 60 ? 'right' : 'left' });
    });
    if (dx(SS.v) * 1e6 <= yr.hi) { line(ctx, X(SS.v), box.b, X(SS.v), Y(x * 1e6), C('elastic-modulus'), 2, [4, 8]); dot(ctx, X(SS.v), Y(x * 1e6), PAL.ink, true, 10); }
    headline(ctx, 'F = ' + fmt(Fa.v, 0) + ' N · a bookcase ' + fmt(L0.v, 1) + ' m tall with a shear modulus of ' + giga(SS.v) + ' shears sideways by ' + fmt(x * 1e6, 3) + ' µm');
    readout(d.readout, `\\kdx = \\frac{1}{\\kS}\\frac{\\kF}{A}\\kLo = \\frac{(${fmt(Fa.v, 0)}\\ \\text{N})(${fmt(L0.v, 1)}\\ \\text{m})}{(${sci(SS.v * 1e9, 1)}\\ \\text{N/m}^2)(${fmt(AA.v, 2)}\\ \\text{m}^2)} = ${sci(x, 2)}\\ \\text{m}`,
      'The deformation falls as one over the shear modulus, so the curve drops steeply at the left and flattens at the right. Bone sits at the far right beside steel, which is why bones are so rigid, and lead sits at the far left.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.17: the nail a picture hangs from, seen from the side. The
   weight shears the nail across the cross section where it leaves the
   wall, and it flexes by an amount too small to see. Still.
===================================================================== */
(function () {
  const d = sim('sim-nail', 620);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 0.5, max: 20, step: 0.1, value: 5.2, unit: 'kg', dec: 1, aria: 'mass of the picture' });
  const rr = ctl(d.controls, { label: 'r', cls: '', min: 0.25, max: 2, step: 0.05, value: 0.75, unit: 'mm', dec: 2, aria: 'radius of the nail' });
  const L0 = ctl(d.controls, { label: '\\kLo', cls: 'position', min: 2, max: 20, step: 0.5, value: 5, unit: 'mm', dec: 2, aria: 'length of nail outside the wall' });
  const S = 80e9;                                                     /* steel, from Table 5.3, as Example 5.5 takes it */
  const area = () => Math.PI * Math.pow(rr.v / 1000, 2);
  const force = () => mm.v * G;
  const dx = () => (force() * (L0.v / 1000)) / (S * area());
  function draw() {
    const { ctx } = begin(d.c);
    const x = dx(), w = force();
    const len = 150 + 400 * (L0.v / 20), thick = 12 + 30 * (rr.v / 2);
    const wallR = 420, y = 220, MAG = x > 0 ? Math.min(110, x * 2.2e7) / x : 0, flex = x * MAG;
    fixed(ctx, 120, y - 140, 300, 360);
    line(ctx, wallR, y - 200, wallR, y + 230, PAL.rule, 2);
    /* the nail: straight inside the wall, bending to its flex at the free end */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = thick; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(wallR - 140, y);
    for (let i = 0; i <= 20; i++) { const f = i / 20; ctx.lineTo(wallR + len * f, y + flex * f * f); }
    ctx.stroke(); ctx.restore();
    line(ctx, wallR, y - 90, wallR + len, y - 90, PAL.muted, 2, [6, 6]);
    hbracket(ctx, wallR, wallR + len, y - 112, C('position'), 'L₀ = ' + fmt(L0.v, 2) + ' mm');
    text(ctx, '2r = ' + fmt(2 * rr.v, 2) + ' mm', wallR + 16, y + thick / 2 + 26, PAL.muted, { size: 18 });
    /* the picture hanging from the free end, and the two equal and opposite forces */
    const px = wallR + len, py = y + flex;
    line(ctx, px, py, px, py + 60, PAL.muted, 3);
    block(ctx, px, py + 150, 210, 170, PAL.ink);
    text(ctx, fmt(mm.v, 1) + ' kg', px, py + 150, PAL.ink, { size: 22, align: 'center', weight: 600 });
    arrow(ctx, px + 130, py + 150, px + 130, py + 150 + 40 + w * 0.6, C('force'), 5);
    text(ctx, 'w = ' + fmt(w, 1) + ' N', px + 144, py + 170, C('force'), { weight: 600, size: 20 });
    arrow(ctx, wallR - 80, y + 44, wallR - 80, y + 44 - 40 - w * 0.6, C('force'), 5);
    text(ctx, 'w', wallR - 96, y + 6, C('force'), { weight: 600, size: 20, align: 'right', bg: PAL.panel });
    if (flex > 4) vbracket(ctx, px + 46, y, py, C('position'), 'Δx', 1);
    text(ctx, 'the flex is drawn about ' + timesLarger(MAG, len / (L0.v / 1000)) + ' times larger than it is', 120, 560, PAL.muted, { size: 18 });
    text(ctx, 'the nail is steel, so its shear modulus is 80 × 10⁹ N/m²', 120, 588, PAL.muted, { size: 18 });
    headline(ctx, 'a ' + fmt(mm.v, 1) + ' kg picture weighs ' + fmt(w, 0) + ' N and bends the nail ' + fmt(x * 1e6, 2) + ' µm, which is far too small to see');
    readout(d.readout, `\\kdx = \\frac{1}{\\kS}\\frac{\\kF}{A}\\kLo = \\frac{(${fmt(w, 1)}\\ \\text{N})(${sci(L0.v / 1000, 2)}\\ \\text{m})}{(${sci(S, 1)}\\ \\text{N/m}^2)(${sci(area(), 2)}\\ \\text{m}^2)} = ${sci(x, 2)}\\ \\text{m}`,
      'Example 5.5 runs this the other way: it reads the flex off the figure as 1.80 µm and solves F = SAΔx/L₀ for the 51 N weight, which makes the picture’s mass w/g = 5.2 kg. Set the mass to 5.2 kg, the radius to 0.75 mm and the length to 5.00 mm to see those numbers.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.18: a cube squeezed by the same force per unit area on every
   surface. The change in volume is proportional to the stress and to the
   original volume, and the constant is the bulk modulus. Still.
===================================================================== */
(function () {
  const d = sim('sim-cube', 700);
  const st = ctl(d.controls, { label: '\\frac{\\kF}{A}', cls: 'stress', min: 0, max: 100, step: 1, value: 50, unit: '× 10⁶ N/m²', dec: 0, aria: 'force per unit area applied on every surface' });
  const V0 = ctl(d.controls, { label: 'V_0', cls: '', min: 0.1, max: 10, step: 0.1, value: 1, unit: 'L', dec: 1, aria: 'original volume' });
  const BB = ctl(d.controls, { label: '\\kBb', cls: 'elastic-modulus', min: 0.7, max: 130, step: 0.1, value: 2.2, unit: '× 10⁹ N/m²', dec: 1, aria: 'bulk modulus' });
  const LIQ = [{ n: 'acetone', B: 0.7 }, { n: 'ethanol', B: 0.9 }, { n: 'water', B: 2.2 }, { n: 'glycerin', B: 4.5 }, { n: 'mercury', B: 25 }];
  const stress = () => st.v * 1e6;
  const frac = (Bg) => Math.min(0.6, stress() / (Bg * 1e9));
  const TOPY = 15;
  function draw() {
    const { ctx } = begin(d.c);
    const f = frac(BB.v), dV = f * V0.v;
    const side = 170 + 130 * Math.cbrt(V0.v / 10), MAG = 20;
    const shrink = Math.min(0.45, (1 - Math.pow(1 - f, 1 / 3)) * MAG);
    const s2 = side * (1 - shrink), cx = 330, cy = 330;
    ghost(ctx, cx - side / 2, cy - side / 2, side, side);
    ctx.save(); ctx.fillStyle = alpha(C('stress'), 0.16); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.fillRect(cx - s2 / 2, cy - s2 / 2, s2, s2); ctx.strokeRect(cx - s2 / 2, cy - s2 / 2, s2, s2); ctx.restore();
    const al = 30 + st.v * 0.8;
    [[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(([ux, uy]) => {
      const sx = cx + ux * (s2 / 2 + al + 16), sy = cy + uy * (s2 / 2 + al + 16);
      arrow(ctx, sx, sy, cx + ux * (s2 / 2 + 14), cy + uy * (s2 / 2 + 14), C('stress'), 5);
    });
    text(ctx, 'F/A on every surface', cx, cy - side / 2 - al - 44, C('stress'), { size: 20, align: 'center', weight: 600 });
    text(ctx, 'V₀ = ' + fmt(V0.v, 1) + ' L', cx - side / 2 - al - 30, cy, PAL.muted, { size: 19, align: 'right' });
    text(ctx, 'V₀ − ΔV', cx, cy, PAL.ink, { size: 21, align: 'center', weight: 600 });
    text(ctx, 'ΔV = ' + fmt(dV * 1000, 1) + ' mL, which is ' + fmt(f * 100, 2) + '% of the volume', 120, 560, PAL.muted, { size: 18 });
    text(ctx, 'the shrinking is drawn ' + MAG + ' times larger than it is', 120, 588, PAL.muted, { size: 18 });
    /* the graph beside the scene: the fractional change against the force per unit area, for the five liquids of Table 5.3 */
    const box = { l: 790, r: 1300, t: 160, b: 540 };
    const { X, Y } = axes(ctx, box, [0, 100], [0, TOPY], { xl: 'force per unit area F/A (× 10⁶ N/m²)', xc: C('stress'), yl: 'fractional change ΔV / V₀ (%)', yc: PAL.ink, nx: 4, ny: 3, fy: (v) => fmt(v, 0) });
    LIQ.forEach((q) => {
      const e = Math.min(100, (TOPY / 100) * q.B * 1e9 / 1e6);
      line(ctx, X(0), Y(0), X(e), Y(Math.min(TOPY, (e * 1e6 / (q.B * 1e9)) * 100)), PAL.rule, 3);
      text(ctx, q.n, X(e) - 10, Y(Math.min(TOPY, (e * 1e6 / (q.B * 1e9)) * 100)) - 16, PAL.muted, { size: 16, align: 'right' });
    });
    const ec = Math.min(100, (TOPY / 100) * BB.v * 1e9 / 1e6);
    line(ctx, X(0), Y(0), X(ec), Y(Math.min(TOPY, (ec * 1e6 / (BB.v * 1e9)) * 100)), C('elastic-modulus'), 5);
    if (f * 100 <= TOPY) { line(ctx, X(st.v), box.b, X(st.v), Y(f * 100), C('stress'), 2, [4, 8]); dot(ctx, X(st.v), Y(f * 100), PAL.ink, true, 10); }
    headline(ctx, 'a force per unit area of ' + plain(stress(), 1) + ' N/m² on a material of bulk modulus ' + giga(BB.v) + ' compresses it by ' + fmt(f * 100, 2) + '% of its volume');
    readout(d.readout, `\\frac{\\Delta V}{V_0} = \\frac{1}{\\kBb}\\frac{\\kF}{A} = \\frac{${sci(stress(), 2)}\\ \\text{N/m}^2}{${sci(BB.v * 1e9, 1)}\\ \\text{N/m}^2} = ${fmt(f, 4)} = ${fmt(f * 100, 2)}\\%`,
      'Example 5.6 is the water line at a force per unit area of 5.00 × 10⁷ N/m², the pressure 5.00 km down, which compresses seawater by 2.3 percent. Acetone, whose bulk modulus is the smallest in Table 5.3, gives way about three times as much under the same squeeze, and mercury about eleven times less.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
