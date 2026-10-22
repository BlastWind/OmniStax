/* Figures for section 12.6 Motion of an Object in a Viscous Fluid. Boots against the section's text article.
   One figure moves: the fluid streaming past the ball, which is the ball's own
   motion seen from the ball, a steady flow with no end and so no scrubber. The
   terminal-speed figure is a balance of forces and answers its sliders. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, hover, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, pinned, curve, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific notation to three significant figures, once for the canvas and once for KaTeX */
function sci(v, sig = 3) {
  if (v === 0) return { txt: '0', tex: '0' };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e), ms = m.toFixed(sig - 1);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (m / 10).toFixed(sig - 1); }
  return { txt: ms + ' × 10' + sup(e), tex: ms + '\\times 10^{' + e + '}' };
}
/* a positive number to three significant figures: plain between 0.01 and 1000, scientific outside */
const num3 = (v) => (v === 0 ? { txt: '0', tex: '0' } : v >= 0.01 && v < 1000 ? { txt: v.toPrecision(3), tex: v.toPrecision(3) } : sci(v));
/* a speed: centimetres a second below a metre a second, metres a second above */
const speed = (v) => (Math.abs(v) < 1 ? { txt: num3(Math.abs(v) * 100).txt + ' cm/s', tex: num3(Math.abs(v) * 100).tex + '\\ \\text{cm/s}' } : { txt: num3(Math.abs(v)).txt + ' m/s', tex: num3(Math.abs(v)).tex + '\\ \\text{m/s}' });
/* the fluids that both Table 11.1 and Table 12.1 give, with the numbers as the book prints them;
   motor oil's density is the one the section's own problem states */
const FLUIDS = [
  { v: 'air', label: '空气 (20 °C)', name: '空气', rho: 1.29, eta: 1.81e-5, rhoTex: '1.29', etaTex: '1.81\\times 10^{-5}', etaTxt: '1.81 × 10⁻⁵' },
  { v: 'water', label: '水 (20 °C)', name: '水', rho: 1000, eta: 1.002e-3, rhoTex: '1000', etaTex: '1.002\\times 10^{-3}', etaTxt: '1.002 × 10⁻³' },
  { v: 'blood', label: '全血 (37 °C)', name: '全血', rho: 1050, eta: 2.084e-3, rhoTex: '1050', etaTex: '2.084\\times 10^{-3}', etaTxt: '2.084 × 10⁻³' },
  { v: 'alcohol', label: '乙醇 (20 °C)', name: '乙醇', rho: 790, eta: 1.20e-3, rhoTex: '790', etaTex: '1.20\\times 10^{-3}', etaTxt: '1.20 × 10⁻³' },
  { v: 'olive', label: '橄榄油 (20 °C)', name: '橄榄油', rho: 920, eta: 0.138, rhoTex: '920', etaTex: '0.138', etaTxt: '0.138' },
  { v: 'motor', label: '机油 (SAE 10)', name: '机油', rho: 880, eta: 0.200, rhoTex: '880', etaTex: '0.200', etaTxt: '0.200' },
  { v: 'glycerin', label: '丙三醇 (20 °C)', name: '丙三醇', rho: 1260, eta: 1.50, rhoTex: '1260', etaTex: '1.50', etaTxt: '1.50' },
];
const FLUID_OPTS = FLUIDS.map((f) => ({ value: f.v, label: f.label }));
const fluidOf = (v) => FLUIDS.find((f) => f.v === v) || FLUIDS[0];
/* the Reynolds number written for the canvas and for KaTeX: plain below a thousand, scientific above */
const reTxt = (Re) => (Re < 1000 ? num3(Re).txt : sci(Re).txt);
const reTex = (Re) => (Re < 1000 ? num3(Re).tex : sci(Re).tex);
/* a filled circle with an ink rim */
function ball(ctx, x, y, r, fill, w = 3, edge = PAL.ink) { ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = edge; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore(); }

/* =====================================================================
   FIGURE 12.24: the flow past a ball. The fluid streams to the left past a
   ball at rest, which is the ball moving to the right; the Reynolds number
   set by the speed, the size and the fluid decides whether the streamlines
   close smoothly, separate into a small wake, trail a turbulent wake, or
   break up everywhere. Tracers ride the streamlines and eddies turn and
   drift downstream: a steady flow, so the cycle is endless and there is no
   scrubber. The picture is a close-up, and a bar inside the ball states its
   true size.
===================================================================== */
(function () {
  const d = sim('sim-wake', 620);
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.1, max: 40, step: 0.1, value: 40, unit: 'm/s', dec: 1, aria: '球在流体中的速率',
    specials: [[1, '1'], [10, '10'], [1e6, '10^6']].map(([N, lab]) => ({ at: () => { const f = fluidOf(fl.value); return (N * f.eta) / (f.rho * (Ls.v / 100)); }, label: 'N′_R = ' + lab })) });
  const Ls = ctl(d.controls, { label: '\\kLlen', cls: 'position', min: 0.1, max: 10, step: 0.1, value: 7.4, unit: 'cm', dec: 1, aria: '球的直径' });
  const fl = select(d.controls, { label: '\\text{该流体}', options: FLUID_OPTS, value: 'air', aria: '球所穿过的流体' });
  vs.refresh();
  const cy = cycle(() => Infinity, 0);
  /* the scene: a frame of fluid with the ball at its centre, in logical units */
  const CX = 720, CY = 330, RB = 105, FX0 = 60, FX1 = 1340, FY0 = 100, FY1 = 560;
  const Y0 = [20, 58, 96, 134, 172, 210];                 /* the far heights of the streamlines above and below the axis */
  const XS = []; for (let x = FX1 - CX; x >= FX0 - CX; x -= 20) XS.push(x);   /* the sampled x, downstream, relative to the ball */
  /* the height of the streamline of far height y0 at x in the flow round a circle (the stream function
     y(1 − R²/(x² + y²)) = y0, monotone in y outside the circle, solved by bisection) */
  function potY(x, y0) {
    let lo = Math.max(y0, Math.sqrt(Math.max(0, RB * RB - x * x)) + 0.01), hi = y0 + RB + 10;
    for (let i = 0; i < 26; i++) { const m = (lo + hi) / 2; if (m * (1 - (RB * RB) / (x * x + m * m)) - y0 < 0) lo = m; else hi = m; }
    return (lo + hi) / 2;
  }
  const regimeOf = (Re) => (Re < 1 ? 0 : Re < 10 ? 1 : Re < 1e6 ? 2 : 3);
  /* where the flow leaves the surface, as an angle from the rear stagnation point: none below one, walking
     forward with the logarithm of the Reynolds number after that, past the equator above a million */
  function sepAngle(Re) {
    if (Re < 1) return null; const l = Math.log10(Re);
    return l < 1 ? 15 + 30 * l : l < 6 ? 45 + (55 * (l - 1)) / 5 : 110;
  }
  /* a streamline past the separation keeps the height it left the surface at and widens slowly downstream */
  function slineY(x, y0, sep) {
    const yp = potY(x, y0);
    if (!sep || x >= sep.x) return yp;
    return Math.max(yp, potY(sep.x, y0) + 0.025 * (sep.x - x));
  }
  /* the eddy seeds: a jittered grid over the frame, each with a size, a turning sense and a phase, fixed for the life of the figure */
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const SEEDS = [];
  for (let gy = FY0 - CY + 17; gy < FY1 - CY; gy += 34) for (let gx = FX0 - CX + 17; gx < FX1 - CX; gx += 34) SEEDS.push({ x: gx + (rnd() - 0.5) * 24, y: gy + (rnd() - 0.5) * 24, r: 7 + 8 * rnd(), s: rnd() < 0.5 ? -1 : 1, a: rnd() * TAU, w: 1.6 + 1.6 * rnd() });
  function eddy(ctx, x, y, r, a, s, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.beginPath();
    for (let i = 0; i <= 22; i++) { const f = i / 22, ang = a + s * f * 4.7, rr = r * (1 - 0.65 * f), px = x + rr * Math.cos(ang), py = y + rr * Math.sin(ang); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
  }
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx, H } = begin(d.c);
    const f = fluidOf(fl.value), v = vs.v, L = Ls.v / 100, Re = (f.rho * v * L) / f.eta, reg = regimeOf(Re);
    const t = isFinite(cy.now()) ? cy.now() : 0;
    const phi = sepAngle(Re), sep = phi === null ? null : { x: -RB * Math.cos(phi * RAD), y: RB * Math.sin(phi * RAD) };
    const ud = 110 + (50 * Math.log10(v / 0.1)) / Math.log10(400);   /* the drawn speed of the tracers, units a second */
    const innerY0 = reg === 3 ? 134 : 20;                          /* the innermost streamline drawn; the eddies fill inside it */
    const inner = (x) => slineY(x, innerY0, sep);
    const drawnY0 = reg === 3 ? Y0.filter((y) => y >= 172) : Y0;
    /* the fluid and its frame */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(FX0, FY0, FX1 - FX0, FY1 - FY0); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(FX0, FY0, FX1 - FX0, FY1 - FY0); ctx.clip();
    /* the eddies, where the flow has broken up: the wake behind the separation, and a band round the whole ball above a million */
    const inEddy = (x, y) => {
      if (Math.hypot(x, y) < RB + 8) return false;
      const ay = Math.abs(y);
      if (sep && x < sep.x && ay < inner(x) - 10) return true;
      return reg === 3 && ay < inner(x) - 10;
    };
    if (sep) {
      const span = FX1 - FX0, drift = ud * 0.35 * t, ec = alpha(C('velocity'), 0.75);
      for (const s of SEEDS) {
        let x = s.x - drift; x = ((((x - (FX0 - CX)) % span) + span) % span) + (FX0 - CX);
        if (inEddy(x, s.y)) eddy(ctx, CX + x, CY + s.y, s.r, s.a + s.s * s.w * t, s.s, ec);
      }
    }
    /* the streamlines, with a chevron each way from the ball and tracers riding them */
    const sc = alpha(PAL.ink, 0.35), tc = C('velocity');
    for (const y0 of drawnY0) for (const sg of [-1, 1]) {
      const pts = XS.map((x) => [CX + x, CY + sg * slineY(x, y0, sep)]);
      ctx.save(); ctx.strokeStyle = sc; ctx.lineWidth = 2; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
      const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      const T = cum[cum.length - 1];
      const at = (s) => { let i = 1; while (i < cum.length - 1 && cum[i] < s) i++; const k = (s - cum[i - 1]) / (cum[i] - cum[i - 1] || 1); const a = pts[i - 1], b = pts[i]; return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, tx: (b[0] - a[0]) / (cum[i] - cum[i - 1] || 1), ty: (b[1] - a[1]) / (cum[i] - cum[i - 1] || 1) };
      };
      for (const fr of [0.12, 0.88]) { const p = at(T * fr); arrow(ctx, p.x - 8 * p.tx, p.y - 8 * p.ty, p.x + 8 * p.tx, p.y + 8 * p.ty, PAL.muted, 2); }
      const S = 200, off = (((ud * t + y0 * 1.7 + (sg > 0 ? 90 : 0)) % S) + S) % S;   /* staggered line to line so the tracers form no lattice */
      for (let s = off; s < T; s += S) { const p = at(s); if (p.x > FX0 + 6 && p.x < FX1 - 6) dot(ctx, p.x, p.y, tc, true, 4); }
    }
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(FX0, FY0, FX1 - FX0, FY1 - FY0); ctx.restore();
    /* the ball, with its true size written across it */
    ball(ctx, CX, CY, RB, PAL.panel, 3, F.ref('ball'));
    hbracket(ctx, CX - RB + 6, CX + RB - 6, CY + 30, C('position'), 'L = ' + fmt(Ls.v, 1) + ' cm');
    /* the separation points */
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 96);
    if (sep && reg < 3) {
      dot(ctx, CX + sep.x, CY - sep.y, PAL.ink, true, 6); dot(ctx, CX + sep.x, CY + sep.y, PAL.ink, true, 6);
      lab.add('分离点', CX + sep.x, CY - sep.y, 0.55, -0.85, PAL.ink, 20, 48);
    }
    /* the far-field speed, on the axis where the flow enters the frame */
    arrow(ctx, 1310, CY, 1200, CY, tc, 5);
    text(ctx, 'v = ' + fmt(v, 1) + ' m/s', 1120, CY, tc, { weight: 600, size: 22, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the viscous drag on the ball, upstream, lengthening from one range to the next */
    const La = 60 + 200 * Math.min(1, Math.max(0, (Math.log10(Re) + 1.5) / 8.5)), ax0 = CX - RB - 8, fc = C('force');
    arrow(ctx, ax0, CY, ax0 - La, CY, fc, 5);
    text(ctx, 'F_V', ax0 - La / 2, CY - 28, fc, { weight: 600, size: 24, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (sep) text(ctx, '湍流尾流', 215, CY, PAL.ink, { weight: 600, size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    lab.flush();
    const heads = [
      'N′_R = ' + reTxt(Re) + '：流动在球的周围平滑地合拢，保持为层流，所以阻力只与速率按比例增大。',
      'N′_R = ' + reTxt(Re) + '：流动开始在球的后部分离，球的后面形成一个小的尾流。',
      'N′_R = ' + reTxt(Re) + '：流动与球分离，在球的后面留下湍流尾流，所以阻力远大于层流时。',
      'N′_R = ' + reTxt(Re) + '：球表面各处和球的后面，流动都是湍流，阻力急剧增大。',
    ];
    topline(ctx, heads[reg]);
    hits = [
      { x: CX, y: CY, r: RB, name: '球，在' + f.name + '中向右运动' },
      { x: 1255, y: CY, r: 70, name: f.name + '以 ' + fmt(v, 1) + ' m/s 的速率流过球' },
      { x: ax0 - La / 2, y: CY, r: 40, name: '球所受的黏性阻力 F_V' },
      ...(sep ? [{ x: CX - RB - 320, y: CY, r: 110, name: '湍流尾流' }] : []),
    ];
    const FS = 6 * Math.PI * (L / 2) * f.eta * v, FD = 0.5 * 0.45 * f.rho * Math.PI * (L / 2) * (L / 2) * v * v;
    const smalls = [
      '低于约 1 时，黏性阻力与速率成正比，斯托克斯定律给出 $\\kFs = 6\\pi\\kRsphere\\keta\\kv$ = ' + num3(FS).txt + ' N。',
      '介于 1 和约 10 之间时，流动正由层流转变为湍流，没有哪一个单一的定律能给出阻力。',
      '介于 10 和 10⁶ 之间时，黏性阻力与速率的平方成正比，取球的 $C = 0.45$，则 $\\kFV = \\tfrac{1}{2}C\\krho A\\kv^2$ = ' + num3(FD).txt + ' N。',
      '高于 10⁶ 时，阻力急剧增大，表现得更为复杂，所以没有简单的定律能给出它。',
    ];
    readout(d.readout, `{N'}_{\\text{R}} = \\frac{\\krho\\kv \\kLlen}{\\keta} = \\frac{(${f.rhoTex}\\ \\text{kg/m}^3)(${fmt(v, 1)}\\ \\text{m/s})(${fmt(L, 4)}\\ \\text{m})}{${f.etaTex}\\ \\text{Pa}\\cdot\\text{s}} = ${reTex(Re)}`, smalls[reg]);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 12.25: the forces on an object settling through a viscous fluid at
   its terminal speed. A marble in a tall glass with its weight, the buoyant
   force and Stokes' drag drawn to one scale, the free-body diagram beside it
   stacking the two upward forces to the length of the weight, and a graph of
   the terminal speed against the radius, dashed where the flow is no longer
   laminar. Nothing changes with time at terminal speed, so the figure is
   still and answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-terminal', 640);
  const Rs = ctl(d.controls, { label: '\\kRsphere', cls: 'position', min: 0.2, max: 10, step: 0.1, value: 0.8, unit: 'mm', dec: 1, aria: '弹珠的半径' });
  const ro = ctl(d.controls, { label: '\\krhoobj', cls: 'density', min: 500, max: 12000, step: 1, value: 7860, unit: 'kg/m³', dec: 0, detents: [{ v: 917 }, { v: 2600, label: '玻璃' }, { v: 2700 }, { v: 7860, label: '钢' }, { v: 11300, label: '铅' }], snap: true, aria: '弹珠的密度' });
  const fl = select(d.controls, { label: '\\text{该流体}', options: FLUID_OPTS, value: 'motor', aria: '杯中的流体' });
  const MATS = [[917, '冰弹珠', 'An'], [2600, '玻璃弹珠', 'A'], [2700, '铝弹珠', 'An'], [7860, '钢弹珠', 'A'], [11300, '铅弹珠', 'A']];
  const matOf = (rho) => MATS.find(([v]) => Math.abs(v - rho) < 0.5);
  /* the scene, in logical units: the glass on the left, the free-body diagram in the middle, the graph on the right */
  const GX0 = 130, GX1 = 390, GY0 = 120, GY1 = 590, SURF = 150, MX = 260, MY = 340, MR = 30, DX = 560;
  const BOX = { l: 800, r: 1330, t: 140, b: 520 };   /* R from 0 to 1.6 mm and v_t from 0 to 20 cm/s, twice and four times the default, fixed so the parabola of the default marble fills the box; a point past an edge is pinned */
  let hits = [];
  hover(d.stage, () => hits);
  /* the terminal speed of a sphere of radius R (m) and density rho in the fluid f, from w − F_B = F_S, signed upward when it rises */
  const vt = (R, rho, f) => (2 * R * R * G * (rho - f.rho)) / (9 * f.eta);
  const reOf = (R, v, f) => (f.rho * Math.abs(v) * 2 * R) / f.eta;
  function draw() {
    const { ctx, H } = begin(d.c);
    const f = fluidOf(fl.value), R = Rs.v / 1000, rho = ro.v, dr = rho - f.rho, v = vt(R, rho, f), Re = reOf(R, v, f);
    const V = (4 / 3) * Math.PI * R * R * R, w = rho * V * G, FB = f.rho * V * G, FS = Math.abs(w - FB);
    const rising = dr < 0, still = Math.abs(dr) < 0.5, mat = matOf(rho), fc = C('force'), vc = C('velocity');
    /* the glass and its fluid */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(GX0 + 4, SURF); ctx.lineTo(GX0 + 4, GY1 - 18); ctx.quadraticCurveTo(GX0 + 4, GY1 - 4, GX0 + 18, GY1 - 4); ctx.lineTo(GX1 - 18, GY1 - 4); ctx.quadraticCurveTo(GX1 - 4, GY1 - 4, GX1 - 4, GY1 - 18); ctx.lineTo(GX1 - 4, SURF); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = F.ref('glass'); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(GX0, GY0); ctx.lineTo(GX0, GY1 - 18); ctx.quadraticCurveTo(GX0, GY1, GX0 + 18, GY1); ctx.lineTo(GX1 - 18, GY1); ctx.quadraticCurveTo(GX1, GY1, GX1, GY1 - 18); ctx.lineTo(GX1, GY0); ctx.stroke(); ctx.restore();
    line(ctx, GX0 + 4, SURF, GX1 - 4, SURF, PAL.muted, 2);
    text(ctx, f.name, MX, GY1 - 24, PAL.muted, { size: 17, align: 'center' });
    /* the marble and its radius */
    ball(ctx, MX, MY, MR, PAL.panel, 3, F.ref('marble'));
    line(ctx, MX, MY, MX + MR * Math.cos(40 * RAD), MY + MR * Math.sin(40 * RAD), C('position'), 2);
    text(ctx, 'R = ' + fmt(Rs.v, 2) + ' mm', MX + 44, MY + 58, C('position'), { weight: 600, size: 20, bg: alpha(PAL.panel, 0.85) });
    /* the three forces on the marble, to one scale: the longest is 190 units */
    const K = 170 / Math.max(w, FB), Lw = K * w, Lb = K * FB, Ls = K * FS;
    arrow(ctx, MX, MY, MX, MY + Lw, fc, 5); text(ctx, 'w', MX + 18, MY + Math.max(Lw, 24), fc, { weight: 600, size: 24 });
    if (Lb > 2) arrow(ctx, MX + 16, MY, MX + 16, MY - Lb, fc, 5);
    text(ctx, 'F_B', MX + 34, MY - Math.max(Lb, 24), fc, { weight: 600, size: 24 });
    if (Ls > 2) {
      if (rising) { arrow(ctx, MX - 16, MY, MX - 16, MY + Ls, fc, 5); text(ctx, 'F_S', MX - 34, MY + Math.max(Ls, 24), fc, { weight: 600, size: 24, align: 'right' }); }
      else { arrow(ctx, MX - 16, MY, MX - 16, MY - Ls, fc, 5); text(ctx, 'F_S', MX - 34, MY - Math.max(Ls, 24), fc, { weight: 600, size: 24, align: 'right' }); }
    }
    /* the motion: a short arrow beside the glass saying which way the marble goes at its terminal speed */
    if (!still) { const dir = rising ? -1 : 1; arrow(ctx, GX1 + 26, MY - dir * 40, GX1 + 26, MY + dir * 40, vc, 4); text(ctx, 'v_t', GX1 + 44, MY, vc, { weight: 600, size: 24 }); }
    /* the free-body diagram: the two forces that share a direction stacked to the length of the one that opposes them */
    text(ctx, '受力图', DX, 118, PAL.muted, { size: 17, align: 'center' });
    dot(ctx, DX, MY, F.ref('marble'), true, 7);
    arrow(ctx, DX, MY, DX, MY + Lw, fc, 5); text(ctx, 'w', DX + 18, MY + Lw / 2, fc, { weight: 600, size: 24 });
    if (Lb > 2) arrow(ctx, DX, MY, DX, MY - Lb, fc, 5);
    if (!rising) {
      text(ctx, 'F_B', DX + 18, MY - Math.max(Lb / 2, 14), fc, { weight: 600, size: 24 });
      if (Ls > 2) { arrow(ctx, DX + 14, MY - Lb, DX + 14, MY - Lb - Ls, fc, 5); text(ctx, 'F_S', DX + 32, MY - Lb - Ls / 2, fc, { weight: 600, size: 24 }); }
    } else {
      text(ctx, 'F_B', DX + 18, MY - Lb / 2, fc, { weight: 600, size: 24 });
      if (Ls > 2) { arrow(ctx, DX + 14, MY + Lw, DX + 14, MY + Lw + Ls, fc, 5); text(ctx, 'F_S', DX + 32, MY + Lw + Ls / 2, fc, { weight: 600, size: 24 }); }
    }
    /* the graph: terminal speed against radius for this marble and fluid, solid while Stokes' law holds (N′R ≤ 1) and dashed past it */
    const RX = 1.6, VY = 20;
    const { X, Y } = axes(ctx, BOX, [0, RX], [0, VY], { xl: 'R (mm)', yl: 'v_t (cm/s)', yc: vc, nx: 4, ny: 4, fx: (x) => fmt(x, 1) });
    const vcm = (Rmm) => Math.abs(vt(Rmm / 1000, rho, f)) * 100;
    const Rstar = still ? RX : Math.min(RX, 1000 * Math.cbrt((9 * f.eta * f.eta) / (4 * f.rho * G * Math.abs(dr))));   /* the radius at which N′R reaches 1 */
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    if (Rstar > 0.001) curve(ctx, vcm, 0, Rstar, X, Y, vc, 5, 60);
    if (Rstar < RX) { ctx.setLineDash([10, 10]); curve(ctx, vcm, Rstar, RX, X, Y, PAL.muted, 3, 60); }
    ctx.restore();
    if (!still) { const p = pinned(ctx, BOX, X, Y, Rs.v, Math.abs(v) * 100, vc, speed(v).txt); if (!p.out) line(ctx, p.x, p.y, p.x, BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]); }
    text(ctx, '虚线表示 N′_R > 1、斯托克斯定律不再成立的范围', BOX.r, BOX.b + 86, PAL.muted, { size: 17, align: 'right' });
    /* the headline */
    const who = mat ? mat[1] : '密度为 ' + fmt(rho, 0) + ' kg/m³ 的弹珠';
    const whoR = '半径为 ' + fmt(Rs.v, 2) + ' mm 的' + (mat ? mat[1] : '密度为 ' + fmt(rho, 0) + ' kg/m³ 的弹珠');
    const head = still ? who + '与周围的' + f.name + '密度相同，所以它的重力与浮力已经平衡，它既不下沉也不上升。'
      : Re > 1 ? whoR + '，按斯托克斯定律，会以 ' + speed(v).txt + ' 的速率在' + f.name + '中' + (rising ? '上升' : '下沉') + '，但在这一速率下，绕它的流动已不再是层流，它真实的终极速率较低。'
      : rising ? whoR + '的密度小于周围的' + f.name + '，所以浮力占上风，它以 ' + speed(v).txt + ' 的终极速率上升。'
      : whoR + '以 ' + speed(v).txt + ' 的终极速率在' + f.name + '中下沉，此时阻力与浮力共同平衡它的重力。';
    topline(ctx, head);
    hits = [
      { x: MX, y: MY, r: MR, name: (mat ? mat[1] : '弹珠') + '，' + fmt(rho, 0) + ' kg/m³' },
      { x: MX, y: SURF + 60, r: 50, name: f.name + '，' + f.rhoTex + ' kg/m³ 和 ' + f.etaTxt + ' Pa·s' },
      { x: MX, y: MY + Lw / 2 + 20, r: 30, name: '弹珠的重力 w' },
      { x: MX + 16, y: MY - Lb / 2 - 10, r: 26, name: '浮力 F_B，即弹珠排开的流体的重力' },
      { x: MX - 16, y: rising ? MY + Ls / 2 + 10 : MY - Ls / 2 - 10, r: 26, name: '斯托克斯定律给出的黏性阻力 F_S' },
      { x: DX, y: MY, r: 12, name: '视为质点的弹珠' },
    ];
    const Rtex = fmt(Rs.v, 2) + '\\times 10^{-3}\\ \\text{m}';
    const main = still
      ? `\\kwgt = \\kFB,\\qquad \\krhoobj = \\krhofl = ${fmt(rho, 0)}\\ \\text{kg/m}^3,\\qquad \\text{所以}\\ \\kFs = 0\\ \\text{且}\\ \\kvt = 0`
      : rising
        ? `\\begin{aligned}\\kFB - \\kwgt &= \\kFs,\\qquad (\\krhofl - \\krhoobj)\\kvol\\kg = 6\\pi \\kRsphere\\keta\\kvt\\\\ \\kvt &= \\frac{2\\kRsphere^2\\kg(\\krhofl - \\krhoobj)}{9\\keta}\\\\ &= \\frac{2(${Rtex})^2(9.80\\ \\text{m/s}^2)(${f.rhoTex} - ${fmt(rho, 0)}\\ \\text{kg/m}^3)}{9(${f.etaTex}\\ \\text{Pa}\\cdot\\text{s})} = ${speed(v).tex}\\ \\text{向上}\\end{aligned}`
        : `\\begin{aligned}\\kwgt - \\kFB &= \\kFs,\\qquad (\\krhoobj - \\krhofl)\\kvol\\kg = 6\\pi \\kRsphere\\keta\\kvt\\\\ \\kvt &= \\frac{2\\kRsphere^2\\kg(\\krhoobj - \\krhofl)}{9\\keta}\\\\ &= \\frac{2(${Rtex})^2(9.80\\ \\text{m/s}^2)(${fmt(rho, 0)} - ${f.rhoTex}\\ \\text{kg/m}^3)}{9(${f.etaTex}\\ \\text{Pa}\\cdot\\text{s})} = ${speed(v).tex}\\end{aligned}`;
    const small = still ? '除阻力外没有合力，弹珠没有运动的理由，而斯托克斯定律在速率为零时不给出阻力。'
      : Re <= 1 ? '速率为 ' + speed(v).txt + ' 时，雷诺数为 $N^{\\prime}_{\\text{R}} = \\krhofl\\kvt(2\\kRsphere)/\\keta$ = ' + reTxt(Re) + '，所以绕弹珠的流动是层流，斯托克斯定律成立。'
      : '速率为 ' + speed(v).txt + ' 时，雷诺数将为 $N^{\\prime}_{\\text{R}} = \\krhofl\\kvt(2\\kRsphere)/\\keta$ = ' + reTxt(Re) + '，超出了斯托克斯定律成立的范围，所以真实的终极速率比这个值低。';
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
