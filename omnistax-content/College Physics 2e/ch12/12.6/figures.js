/* Figures for section 12.6 Motion of an Object in a Viscous Fluid. Boots against the section's text article.
   One figure moves: the fluid streaming past the ball, which is the ball's own
   motion seen from the ball, a steady flow with no end and so no scrubber. The
   terminal-speed figure is a balance of forces and answers its sliders. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, hover, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, pinned, curve, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

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
  { v: 'air', label: 'Air (20 °C)', name: 'air', rho: 1.29, eta: 1.81e-5, rhoTex: '1.29', etaTex: '1.81\\times 10^{-5}', etaTxt: '1.81 × 10⁻⁵' },
  { v: 'water', label: 'Water (20 °C)', name: 'water', rho: 1000, eta: 1.002e-3, rhoTex: '1000', etaTex: '1.002\\times 10^{-3}', etaTxt: '1.002 × 10⁻³' },
  { v: 'blood', label: 'Whole blood (37 °C)', name: 'whole blood', rho: 1050, eta: 2.084e-3, rhoTex: '1050', etaTex: '2.084\\times 10^{-3}', etaTxt: '2.084 × 10⁻³' },
  { v: 'alcohol', label: 'Ethyl alcohol (20 °C)', name: 'ethyl alcohol', rho: 790, eta: 1.20e-3, rhoTex: '790', etaTex: '1.20\\times 10^{-3}', etaTxt: '1.20 × 10⁻³' },
  { v: 'olive', label: 'Olive oil (20 °C)', name: 'olive oil', rho: 920, eta: 0.138, rhoTex: '920', etaTex: '0.138', etaTxt: '0.138' },
  { v: 'motor', label: 'Motor oil (SAE 10)', name: 'motor oil', rho: 880, eta: 0.200, rhoTex: '880', etaTex: '0.200', etaTxt: '0.200' },
  { v: 'glycerin', label: 'Glycerin (20 °C)', name: 'glycerin', rho: 1260, eta: 1.50, rhoTex: '1260', etaTex: '1.50', etaTxt: '1.50' },
];
const FLUID_OPTS = FLUIDS.map((f) => ({ value: f.v, label: f.label }));
const fluidOf = (v) => FLUIDS.find((f) => f.v === v) || FLUIDS[0];
/* the Reynolds number written for the canvas and for KaTeX: plain below a thousand, scientific above */
const reTxt = (Re) => (Re < 1000 ? num3(Re).txt : sci(Re).txt);
const reTex = (Re) => (Re < 1000 ? num3(Re).tex : sci(Re).tex);
/* a filled circle with an ink rim */
function ball(ctx, x, y, r, fill, w = 3) { ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = PAL.ink; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore(); }

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
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.1, max: 40, step: 0.1, value: 40, unit: 'm/s', dec: 1, aria: 'the speed of the ball through the fluid' });
  const Ls = ctl(d.controls, { label: 'L', cls: '', min: 0.1, max: 10, step: 0.1, value: 7.4, unit: 'cm', dec: 1, aria: 'the diameter of the ball' });
  const fl = select(d.controls, { label: '\\text{the fluid}', options: FLUID_OPTS, value: 'air', aria: 'the fluid the ball moves through' });
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
    ball(ctx, CX, CY, RB, PAL.panel);
    hbracket(ctx, CX - RB + 6, CX + RB - 6, CY + 30, PAL.ink, 'L = ' + fmt(Ls.v, 1) + ' cm');
    /* the separation points */
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 96);
    if (sep && reg < 3) {
      dot(ctx, CX + sep.x, CY - sep.y, PAL.ink, true, 6); dot(ctx, CX + sep.x, CY + sep.y, PAL.ink, true, 6);
      lab.add('separation points', CX + sep.x, CY - sep.y, 0.55, -0.85, PAL.ink, 20, 48);
    }
    /* the far-field speed, on the axis where the flow enters the frame */
    arrow(ctx, 1310, CY, 1200, CY, tc, 5);
    text(ctx, 'v = ' + fmt(v, 1) + ' m/s', 1120, CY, tc, { weight: 600, size: 22, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the viscous drag on the ball, upstream, lengthening from one range to the next */
    const La = 60 + 200 * Math.min(1, Math.max(0, (Math.log10(Re) + 1.5) / 8.5)), ax0 = CX - RB - 8, fc = C('force');
    arrow(ctx, ax0, CY, ax0 - La, CY, fc, 5);
    text(ctx, 'F_V', ax0 - La / 2, CY - 28, fc, { weight: 600, size: 24, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (sep) text(ctx, 'turbulent wake', 215, CY, PAL.ink, { weight: 600, size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    lab.flush();
    const heads = [
      'N′_R = ' + reTxt(Re) + ': the flow closes smoothly around the ball and stays laminar, so the drag grows only in step with the speed.',
      'N′_R = ' + reTxt(Re) + ': the flow begins to separate at the back of the ball and a small wake forms behind it.',
      'N′_R = ' + reTxt(Re) + ': the flow separates from the ball and leaves a turbulent wake behind it, so the drag is far greater than for laminar flow.',
      'N′_R = ' + reTxt(Re) + ': the flow is turbulent everywhere on the surface of the ball and behind it, and the drag increases dramatically.',
    ];
    topline(ctx, heads[reg]);
    hits = [
      { x: CX, y: CY, r: RB, name: 'the ball, moving to the right through ' + f.name },
      { x: 1255, y: CY, r: 70, name: f.name + ' streaming past the ball at ' + fmt(v, 1) + ' m/s' },
      { x: ax0 - La / 2, y: CY, r: 40, name: 'the viscous drag F_V on the ball' },
      ...(sep ? [{ x: CX - RB - 320, y: CY, r: 110, name: 'the turbulent wake' }] : []),
    ];
    const FS = 6 * Math.PI * (L / 2) * f.eta * v, FD = 0.5 * 0.45 * f.rho * Math.PI * (L / 2) * (L / 2) * v * v;
    const smalls = [
      'Below about 1 the viscous drag is proportional to the speed, and Stokes’ law gives <i>F</i><sub>S</sub> = 6π<i>Rηv</i> = ' + num3(FS).txt + ' N.',
      'Between 1 and about 10 the flow is changing from laminar to turbulent, and no single law gives the drag.',
      'Between 10 and 10⁶ the viscous drag is proportional to the speed squared, and with <i>C</i> = 0.45 for a sphere <i>F</i><sub>V</sub> = ½<i>CρAv</i>² = ' + num3(FD).txt + ' N.',
      'Above 10⁶ the drag increases dramatically and behaves with greater complexity, so no simple law gives it.',
    ];
    readout(d.readout, `{N'}_{\\text{R}} = \\frac{\\krho\\kv L}{\\keta} = \\frac{(${f.rhoTex}\\ \\text{kg/m}^3)(${fmt(v, 1)}\\ \\text{m/s})(${fmt(L, 4)}\\ \\text{m})}{${f.etaTex}\\ \\text{Pa}\\cdot\\text{s}} = ${reTex(Re)}`, smalls[reg]);
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
  const Rs = ctl(d.controls, { label: 'R', cls: '', min: 0.2, max: 10, step: 0.1, value: 0.8, unit: 'mm', dec: 1, aria: 'the radius of the marble' });
  const ro = ctl(d.controls, { label: '\\krhoobj', cls: 'density', min: 500, max: 12000, step: 1, value: 7860, unit: 'kg/m³', dec: 0, detents: [{ v: 917 }, { v: 2600, label: 'glass' }, { v: 2700 }, { v: 7860, label: 'steel' }, { v: 11300, label: 'lead' }], snap: true, aria: 'the density of the marble' });
  const fl = select(d.controls, { label: '\\text{the fluid}', options: FLUID_OPTS, value: 'motor', aria: 'the fluid in the glass' });
  const MATS = [[917, 'ice', 'An'], [2600, 'glass', 'A'], [2700, 'aluminum', 'An'], [7860, 'steel', 'A'], [11300, 'lead', 'A']];
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
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(GX0, GY0); ctx.lineTo(GX0, GY1 - 18); ctx.quadraticCurveTo(GX0, GY1, GX0 + 18, GY1); ctx.lineTo(GX1 - 18, GY1); ctx.quadraticCurveTo(GX1, GY1, GX1, GY1 - 18); ctx.lineTo(GX1, GY0); ctx.stroke(); ctx.restore();
    line(ctx, GX0 + 4, SURF, GX1 - 4, SURF, PAL.muted, 2);
    text(ctx, f.name, MX, GY1 - 24, PAL.muted, { size: 17, align: 'center' });
    /* the marble and its radius */
    ball(ctx, MX, MY, MR, PAL.panel);
    line(ctx, MX, MY, MX + MR * Math.cos(40 * RAD), MY + MR * Math.sin(40 * RAD), PAL.ink, 2);
    text(ctx, 'R = ' + fmt(Rs.v, 2) + ' mm', MX + 44, MY + 58, PAL.ink, { weight: 600, size: 20, bg: alpha(PAL.panel, 0.85) });
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
    text(ctx, 'free-body diagram', DX, 118, PAL.muted, { size: 17, align: 'center' });
    dot(ctx, DX, MY, PAL.ink, true, 7);
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
    text(ctx, 'dashed where N′_R > 1 and Stokes’ law no longer holds', BOX.r, BOX.b + 86, PAL.muted, { size: 17, align: 'right' });
    /* the headline */
    const who = mat ? mat[2] + ' ' + mat[1] + ' marble' : 'A marble of density ' + fmt(rho, 0) + ' kg/m³';
    const head = still ? who + ' is as dense as the ' + f.name + ' around it, so its weight and the buoyant force already balance and it neither settles nor rises.'
      : Re > 1 ? who + ' of radius ' + fmt(Rs.v, 2) + ' mm would ' + (rising ? 'rise' : 'settle') + ' through ' + f.name + ' at ' + speed(v).txt + ' by Stokes’ law, but at that speed the flow around it is no longer laminar and its real terminal speed is lower.'
      : rising ? who + ' of radius ' + fmt(Rs.v, 2) + ' mm is less dense than the ' + f.name + ' around it, so the buoyant force wins and it rises at a terminal speed of ' + speed(v).txt + '.'
      : who + ' of radius ' + fmt(Rs.v, 2) + ' mm settles through ' + f.name + ' at a terminal speed of ' + speed(v).txt + ', where the drag and the buoyant force together balance its weight.';
    topline(ctx, head);
    hits = [
      { x: MX, y: MY, r: MR, name: (mat ? mat[1] : 'the') + ' marble, ' + fmt(rho, 0) + ' kg/m³' },
      { x: MX, y: SURF + 60, r: 50, name: f.name + ', ' + f.rhoTex + ' kg/m³ and ' + f.etaTxt + ' Pa·s' },
      { x: MX, y: MY + Lw / 2 + 20, r: 30, name: 'the weight w of the marble' },
      { x: MX + 16, y: MY - Lb / 2 - 10, r: 26, name: 'the buoyant force F_B, the weight of the fluid the marble displaces' },
      { x: MX - 16, y: rising ? MY + Ls / 2 + 10 : MY - Ls / 2 - 10, r: 26, name: 'the viscous drag F_S of Stokes’ law' },
      { x: DX, y: MY, r: 12, name: 'the marble, as a point' },
    ];
    const Rtex = fmt(Rs.v, 2) + '\\times 10^{-3}\\ \\text{m}';
    const main = still
      ? `\\kwgt = \\kFB,\\qquad \\krhoobj = \\krhofl = ${fmt(rho, 0)}\\ \\text{kg/m}^3,\\qquad \\text{so}\\ \\kFs = 0\\ \\text{and}\\ \\kvt = 0`
      : rising
        ? `\\begin{aligned}\\kFB - \\kwgt &= \\kFs,\\qquad (\\krhofl - \\krhoobj)V\\kg = 6\\pi R\\keta\\kvt\\\\ \\kvt &= \\frac{2R^2\\kg(\\krhofl - \\krhoobj)}{9\\keta}\\\\ &= \\frac{2(${Rtex})^2(9.80\\ \\text{m/s}^2)(${f.rhoTex} - ${fmt(rho, 0)}\\ \\text{kg/m}^3)}{9(${f.etaTex}\\ \\text{Pa}\\cdot\\text{s})} = ${speed(v).tex}\\ \\text{upward}\\end{aligned}`
        : `\\begin{aligned}\\kwgt - \\kFB &= \\kFs,\\qquad (\\krhoobj - \\krhofl)V\\kg = 6\\pi R\\keta\\kvt\\\\ \\kvt &= \\frac{2R^2\\kg(\\krhoobj - \\krhofl)}{9\\keta}\\\\ &= \\frac{2(${Rtex})^2(9.80\\ \\text{m/s}^2)(${fmt(rho, 0)} - ${f.rhoTex}\\ \\text{kg/m}^3)}{9(${f.etaTex}\\ \\text{Pa}\\cdot\\text{s})} = ${speed(v).tex}\\end{aligned}`;
    const small = still ? 'With no net force but the drag, the marble has no reason to move, and Stokes’ law gives no drag at zero speed.'
      : Re <= 1 ? 'At ' + speed(v).txt + ' the Reynolds number is <i>N′</i><sub>R</sub> = <i>ρv</i><sub>t</sub>(2<i>R</i>)/<i>η</i> = ' + reTxt(Re) + ', so the flow around the marble is laminar and Stokes’ law holds.'
      : 'At ' + speed(v).txt + ' the Reynolds number would be <i>N′</i><sub>R</sub> = <i>ρv</i><sub>t</sub>(2<i>R</i>)/<i>η</i> = ' + reTxt(Re) + ', past the range where Stokes’ law holds, so the real terminal speed is lower than this.';
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
