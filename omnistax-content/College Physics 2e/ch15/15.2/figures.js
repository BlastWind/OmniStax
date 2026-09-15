/* Figures for section 15.2 The First Law of Thermodynamics and Some Simple Processes. Boots against the section's text article.
   Two figures have a clock in them and move: the piston of Figure 15.8, whose
   three panels are three moments of one stroke, and the cycle of Figure 15.12,
   which is walked round its loop while the area fills leg by leg. Every other
   figure answers its sliders, registers no cycle and carries no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, headline, topline, hbracket, vbracket, axes, pinned, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific form, in plain text and in TeX: sci(150000, 5, 2) is "1.50 × 10⁵" */
const sci = (v, e, dec) => fmt(v / Math.pow(10, e), dec) + ' × 10' + sup(e);
const sciTex = (v, e, dec) => `${fmt(v / Math.pow(10, e), dec)}\\times 10^{${e}}`;
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
const numTex = (v, d) => { const x = eps(v, d); return (x < 0 ? '-' : '') + fmt(Math.abs(x), d); };
/* a whole number of joules with a thin space every three digits */
const J = (v) => { const x = Math.round(eps(v, 0)); return (x < 0 ? '−' : '') + String(Math.abs(x)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); };
const JTex = (v) => { const x = Math.round(eps(v, 0)); return (x < 0 ? '-' : '') + String(Math.abs(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,'); };
/* a closed polygon from a list of [x, y] points */
function poly(ctx, pts) { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); }
/* a region filled in a hue, at the alpha the figure asks for */
function fillPoly(ctx, pts, color, a) { ctx.save(); poly(ctx, pts); ctx.fillStyle = alpha(color, a); ctx.fill(); ctx.restore(); }
/* a region hatched in a hue: the mark of an area counted negative */
function hatchPoly(ctx, pts, color, gap = 13) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const l = Math.min(...xs), r = Math.max(...xs), t = Math.min(...ys), b = Math.max(...ys), h = b - t;
  ctx.save(); poly(ctx, pts); ctx.clip(); ctx.strokeStyle = alpha(color, 0.85); ctx.lineWidth = 2; ctx.beginPath();
  for (let s = l - h; s < r; s += gap) { ctx.moveTo(s, b); ctx.lineTo(s + h, t); }
  ctx.stroke(); ctx.restore();
}
/* a block arrow, as wide as the energy it carries, from (x1, y1) to (x2, y2); `flow`
   is a phase in [0, 1) that slides chevrons along it when the energy is moving */
function fatArrow(ctx, x1, y1, x2, y2, w, color, flow) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 2) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
  const hl = Math.min(0.45 * L, 0.9 * w + 26), hw = 0.75 * w + 12, bx = x2 - ux * hl, by = y2 - uy * hl, h = w / 2;
  const pts = [[x1 + px * h, y1 + py * h], [bx + px * h, by + py * h], [bx + px * hw, by + py * hw], [x2, y2], [bx - px * hw, by - py * hw], [bx - px * h, by - py * h], [x1 - px * h, y1 - py * h]];
  ctx.save(); poly(ctx, pts); ctx.fillStyle = alpha(color, 0.3); ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.stroke();
  if (flow !== undefined) {
    poly(ctx, pts); ctx.clip(); ctx.lineWidth = 3; ctx.strokeStyle = alpha(color, 0.7); ctx.beginPath();
    const step = 34, k = Math.min(h - 2, 12);
    for (let s = (flow * step) % step - step; s < L; s += step) { const cx = x1 + ux * s, cy = y1 + uy * s; ctx.moveTo(cx - ux * 10 + px * k, cy - uy * 10 + py * k); ctx.lineTo(cx, cy); ctx.lineTo(cx - ux * 10 - px * k, cy - uy * 10 - py * k); }
    ctx.stroke();
  }
  ctx.restore();
}
/* an arrowhead on a path at (x, y), pointing along (ux, uy) */
function head(ctx, x, y, ux, uy, color, s = 14) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x + ux * s * 0.6, y + uy * s * 0.6);
  ctx.lineTo(x - ux * s * 0.6 - uy * s * 0.55, y - uy * s * 0.6 + ux * s * 0.55); ctx.lineTo(x - ux * s * 0.6 + uy * s * 0.55, y - uy * s * 0.6 - ux * s * 0.55);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a state on a PV diagram, with its letter set beside it in the direction (ox, oy) */
function state(ctx, x, y, letter, ox, oy) {
  dot(ctx, x, y, PAL.ink, true, 8);
  text(ctx, letter, x + ox * 24, y + oy * 24, PAL.ink, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
}
/* Simpson's rule over [a, b] */
function integrate(f, a, b, n = 200) { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; }
/* a curve of the graph, walked from t0 to t1, with an arrowhead at its far end */
function walk(ctx, f, t0, t1, X, Y, color, w, dash, n = 90) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; if (i) ctx.lineTo(X(t), Y(f(t))); else ctx.moveTo(X(t), Y(f(t))); }
  ctx.stroke(); ctx.restore();
}
/* the area under a curve of the graph between two volumes, as a polygon */
function under(f, t0, t1, X, Y, n = 60) { const pts = [[X(t0), Y(0)]]; for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; pts.push([X(t), Y(f(t))]); } pts.push([X(t1), Y(0)]); return pts; }
/* the band between two curves of the graph, as a polygon */
function between(fa, fb, t0, t1, X, Y, n = 60) { const pts = []; for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; pts.push([X(t), Y(fa(t))]); } for (let i = n; i >= 0; i--) { const t = t0 + ((t1 - t0) * i) / n; pts.push([X(t), Y(fb(t))]); } return pts; }
const GAMMA = 5 / 3;   /* the adiabatic exponent of a monatomic ideal gas */

/* =====================================================================
   FIGURE 15.7: the schematic heat engine. Heat in from the left, work out
   to the right, heat out below, every arrow as wide as the energy it
   carries. Still: an energy account has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-heat-engine', 560);
  const qi = ctl(d.controls, { label: '\\kQin', cls: 'energy', min: 0, max: 200, step: 5, value: 100, unit: 'J', dec: 0, aria: 'the heat transfer into the engine' });
  const qo = ctl(d.controls, { label: '\\kQout', cls: 'energy', min: 0, max: 200, step: 5, value: 60, unit: 'J', dec: 0, aria: 'the heat transfer out of the engine to the environment' });
  const CX = 640, CY = 300, R = 132, KW = 0.6;   /* 200 J is an arrow 120 units wide */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const Qi = qi.v, Qo = qo.v, W = Qi - Qo;
    /* the engine as a system */
    ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.stroke(); ctx.restore();
    text(ctx, 'heat engine', CX, CY - 30, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'ΔE_int = 0', CX, CY + 14, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'over each cycle', CX, CY + 50, PAL.muted, { size: 17, align: 'center' });
    /* heat in, from the left */
    if (Qi > 0) fatArrow(ctx, 150, CY, CX - R - 6, CY, Math.max(8, Qi * KW), ec);
    text(ctx, 'Q_in = ' + J(Qi) + ' J', 150, CY - Math.max(8, Qi * KW) / 2 - 30, ec, { size: 22, weight: 600 });
    /* heat out, downward */
    if (Qo > 0) fatArrow(ctx, CX, CY + R + 6, CX, 520, Math.max(8, Qo * KW), ec);
    const ho = 0.75 * Math.max(8, Qo * KW) + 12;   /* the half-width of the head of the arrow out */
    text(ctx, 'Q_out = ' + J(Qo) + ' J', CX + ho + 18, 470, ec, { size: 22, weight: 600 });
    /* work, out to the right; when the heat out exceeds the heat in, the device needs work put in */
    if (W > 0) fatArrow(ctx, CX + R + 6, CY, 1230, CY, Math.max(8, W * KW), ec);
    else if (W < 0) fatArrow(ctx, 1230, CY, CX + R + 6, CY, Math.max(8, -W * KW), ec);
    text(ctx, (W < 0 ? 'W = ' + J(W) + ' J (work put in)' : 'W = ' + J(W) + ' J'), 1230, CY - Math.max(8, Math.abs(W) * KW) / 2 - 30, ec, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'to the environment', CX - ho - 18, 470, PAL.muted, { size: 17, align: 'right' });
    headline(ctx, Qi === 0 ? 'With no heat transfer in there is nothing for the engine to turn into work.'
      : W > 0 && Qo === 0 ? 'All ' + J(Qi) + ' J of heat transfer would become work, which the first law allows and no engine achieves.'
      : W > 0 ? 'The engine takes in ' + J(Qi) + ' J of heat, gives ' + J(Qo) + ' J back to the environment, and puts out ' + J(W) + ' J of work.'
      : W === 0 ? 'All ' + J(Qi) + ' J of heat transfer goes straight through to the environment, and there is no work output.'
      : 'More heat leaves than enters, so ' + J(-W) + ' J of work must be put in: this is no longer a heat engine.');
    readout(d.readout, `\\kW = \\kQin - \\kQout = ${J(Qi)}\\ \\text{J} - ${J(Qo)}\\ \\text{J} = ${JTex(W)}\\ \\text{J}`,
      'Because the engine returns to its starting state each cycle, ΔE_int = Q − W = 0 and the work out is the heat in less the heat out. Q_out is never zero for a real engine: some heat transfer to the environment always occurs, and the next sections say why.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.8: the gas in a cylinder heated, expanding against a piston
   and pushed back. Moving: the three panels of the book are three moments
   of one stroke, so the figure plays heat in, expansion and heat out with
   the return over about six seconds, then holds.
===================================================================== */
(function () {
  const d = sim('sim-piston', 620);
  const ps = ctl(d.controls, { label: '\\kPr', cls: 'pressure', min: 1, max: 5, step: 0.1, value: 3, unit: '× 10⁵ N/m²', dec: 1, onInput: reset, aria: 'the pressure of the heated gas' });
  const qs = ctl(d.controls, { label: "P'", cls: 'pressure', min: 0.5, max: 4, step: 0.1, value: 1, unit: '× 10⁵ N/m²', dec: 1, onInput: reset, aria: 'the pressure of the gas after heat has left it' });
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.05, max: 0.3, step: 0.01, value: 0.2, unit: 'm', dec: 2, onInput: reset, aria: 'the distance the piston moves' });
  const A = 0.01, T = 6, TA = 1.5, TB = 3.5;   /* the piston area, the loop's model seconds, and the ends of the heating and expansion phases */
  const S = 1200, X0 = 380, YC = 350, HALF = 96, ROD = 470, KF = 0.14;   /* units per metre; the piston face at rest; the cylinder's axis and half height */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure'), fc = C('force'), xc = C('position');
    const P = ps.v * 1e5, Pp = qs.v * 1e5, dd = ds.v, t = cy.now();
    const phase = t < TA ? 'a' : t <= TB ? 'b' : 'c';
    const th = phase === 'a' ? 0 : phase === 'b' ? (Math.PI * (t - TA)) / (TB - TA) : Math.PI + (Math.PI * (t - TB)) / (T - TB);
    const r = (dd * S) / 2, xc0 = X0 + r + ROD;                      /* the crank's radius and centre */
    const px = xc0 - r * Math.cos(th) - Math.sqrt(ROD * ROD - Math.pow(r * Math.sin(th), 2));   /* the piston face */
    const s = (px - X0) / (dd * S);                                  /* the fraction of the stroke */
    const Fv = P * A, Fp = Pp * A, Wout = Fv * dd, Win = Fp * dd;
    const pNow = phase === 'a' ? Pp + (P - Pp) * (t / TA) : phase === 'b' ? P : Pp;
    /* the cylinder, closed at the left, and the gas inside it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(160, YC - HALF, px - 160, 2 * HALF); ctx.restore();
    fixed(ctx, 140, YC - HALF - 18, 660, 18); fixed(ctx, 140, YC + HALF, 660, 18); fixed(ctx, 140, YC - HALF - 18, 20, 2 * HALF + 36);
    text(ctx, 'gas', 200, YC - 72, PAL.muted, { size: 19 });
    text(ctx, (phase === 'c' ? "P' = " : 'P = ') + sci(pNow, 5, 1) + ' N/m²', 200, YC + 62, pc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the piston, its rod and the crank */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.fillRect(px, YC - HALF + 2, 46, 2 * HALF - 4); ctx.strokeRect(px, YC - HALF + 2, 46, 2 * HALF - 4); ctx.restore();
    const cpx = xc0 - r * Math.cos(th), cpy = YC - r * Math.sin(th);
    line(ctx, px + 46, YC, cpx, cpy, PAL.ink, 9);
    ctx.save(); ctx.beginPath(); ctx.arc(xc0, YC, r, 0, TAU); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.arc(xc0, YC, 26, 0, TAU); ctx.fillStyle = PAL.soft; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.stroke(); ctx.restore();
    line(ctx, xc0, YC, cpx, cpy, PAL.ink, 9);
    dot(ctx, xc0, YC, PAL.ink, true, 8); dot(ctx, cpx, cpy, PAL.panel, true, 9); dot(ctx, cpx, cpy, PAL.ink, false, 9); dot(ctx, px + 46, YC, PAL.ink, true, 7);
    text(ctx, 'crank', xc0, YC + r + 44, PAL.muted, { size: 19, align: 'center' });
    /* the rest position of the piston face, and the stroke measured from it */
    line(ctx, X0, YC - HALF + 4, X0, YC + HALF - 4, alpha(PAL.ink, 0.4), 2, [8, 8]);
    if (s > 0.01) { hbracket(ctx, X0, px, YC + HALF + 60, xc, 'd = ' + fmt(s * dd, 2) + ' m'); }
    /* phase a: heat flows in, the pressure rises, nothing moves yet */
    if (phase === 'a') {
      fatArrow(ctx, 250, 90, 330, YC - HALF - 22, 46, ec, (t * 1.6) % 1);
      text(ctx, 'Q_in', 200, 96, ec, { size: 24, weight: 600, align: 'right' });
      text(ctx, 'ΔE_int = Q_in', 560, YC + HALF + 60, ec, { size: 22, weight: 600, align: 'center' });
    }
    /* phase b: the gas pushes the piston out, doing work */
    if (phase === 'b') {
      arrow(ctx, px - 24 - Fv * KF, YC, px - 24, YC, fc, 5);
      text(ctx, 'F = PA = ' + sci(Fv, 3, 2) + ' N', px - 24 - Fv * KF, YC - 34, fc, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'W_out = Fd = ' + J(Wout * s) + ' J', 1230, 120, ec, { size: 22, weight: 600, align: 'right' });
      text(ctx, 'ΔE_int = −W_out', 1230, 160, ec, { size: 22, weight: 600, align: 'right' });
    }
    /* phase c: heat leaves, and a smaller force pushes the piston back */
    if (phase === 'c') {
      fatArrow(ctx, 330, YC + HALF + 22, 250, 590, 46, ec, (t * 1.6) % 1);
      text(ctx, 'Q_out', 200, 590, ec, { size: 24, weight: 600, align: 'right' });
      arrow(ctx, px + 46 + 24 + Fp * KF, YC - 60, px + 46 + 24, YC - 60, fc, 5);
      text(ctx, "F' = P'A = " + sci(Fp, 3, 2) + ' N', px + 70, YC - 28, fc, { size: 21, weight: 700, align: 'left', bg: alpha(PAL.panel, 0.9) });
      text(ctx, "W_in = F'd = " + J(Win * (1 - s)) + ' J', 1230, 120, ec, { size: 22, weight: 600, align: 'right' });
      text(ctx, "F' < F", 1230, 160, PAL.ink, { size: 22, weight: 600, align: 'right' });
    }
    topline(ctx, phase === 'a' ? 'Heat flows into the gas and its pressure rises to ' + sci(P, 5, 1) + ' N/m².'
      : phase === 'b' ? 'The gas pushes the piston ' + fmt(dd, 2) + ' m with a force of ' + sci(Fv, 3, 2) + ' N, doing ' + J(Wout) + ' J of work.'
      : 'Heat leaves the gas, and a force of ' + sci(Fp, 3, 2) + ' N pushes the piston back, doing ' + J(Win) + ' J of work on it.');
    const net = Wout - Win;
    readout(d.readout, phase === 'a' ? `\\kdEint = \\kQin \\quad\\text{(the gas is heated at constant volume)}`
      : phase === 'b' ? `\\kWout = \\kF\\kd = \\kPr A\\kd = (${sciTex(P, 5, 1)}\\ \\text{N/m}^2)(0.0100\\ \\text{m}^2)(${fmt(dd, 2)}\\ \\text{m}) = ${JTex(Wout)}\\ \\text{J}`
      : `\\kWin = F'\\kd = P'A\\kd = (${sciTex(Pp, 5, 1)}\\ \\text{N/m}^2)(0.0100\\ \\text{m}^2)(${fmt(dd, 2)}\\ \\text{m}) = ${JTex(Win)}\\ \\text{J}`,
      net > 0 ? 'Over the whole stroke the gas does ' + J(Wout) + ' J of work going out and has ' + J(Win) + ' J done on it coming back, so the net work output is ' + J(net) + ' J. Heat transfer out is what lowers the pressure and makes the return cheaper than the outward stroke.'
        : 'The gas is pushed back at a pressure no lower than the one it expanded at, so the return costs as much work as the expansion gave, or more, and there is no net work output. Heat transfer out of the gas is what makes an engine possible.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 15.9 + 15.10: the isobaric expansion of a gas in a vertical
   cylinder, with the same expansion drawn on a PV diagram beside it. Still:
   one expansion, whose stroke is the reader's choice of ΔV.
===================================================================== */
(function () {
  const d = sim('sim-isobaric', 640);
  const ps = ctl(d.controls, { label: '\\kPr', cls: 'pressure', min: 1, max: 5, step: 0.1, value: 2, unit: '× 10⁵ N/m²', dec: 1, aria: 'the constant pressure of the gas' });
  const as = ctl(d.controls, { label: 'A', cls: '', min: 50, max: 150, step: 5, value: 100, unit: 'cm²', dec: 0, aria: 'the cross-sectional area of the cylinder' });
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0, max: 0.3, step: 0.01, value: 0.1, unit: 'm', dec: 3, aria: 'the distance the piston rises' });
  const H0 = 0.1, SY = 1000, YB = 560, CX = 360, KF = 0.04;   /* the gas column at rest, units per metre, the cylinder's floor and axis */
  const box = { l: 780, r: 1320, t: 150, b: 520 };            /* V 0 to 6 × 10⁻³ m³, P 0 to 5 × 10⁵ N/m², fixed */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure'), fc = C('force'), xc = C('position');
    const P = ps.v * 1e5, A = as.v * 1e-4, dd = ds.v, dV = A * dd, W = P * dV, Fv = P * A;
    const V0 = A * H0, V1 = V0 + dV;
    const hw = 120 * (as.v / 100), y0 = YB - H0 * SY, yp = YB - (H0 + dd) * SY;
    /* the cylinder and the gas, the piston and its rod */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(CX - hw, yp, 2 * hw, YB - yp); ctx.restore();
    fixed(ctx, CX - hw - 18, 120, 18, YB - 120 + 18); fixed(ctx, CX + hw, 120, 18, YB - 120 + 18); fixed(ctx, CX - hw - 18, YB, 2 * hw + 36, 18);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.fillRect(CX - hw + 2, yp - 26, 2 * hw - 4, 26); ctx.strokeRect(CX - hw + 2, yp - 26, 2 * hw - 4, 26); ctx.restore();
    line(ctx, CX, yp - 26, CX, 92, PAL.ink, 12);
    text(ctx, 'A', CX + hw - 12, yp - 13, PAL.ink, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'V', CX, YB - 40, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* where the piston started, and the volume swept out */
    line(ctx, CX - hw + 2, y0, CX + hw - 2, y0, alpha(PAL.ink, 0.5), 2, [8, 8]);
    if (dd > 0.004) {
      vbracket(ctx, CX + hw + 54, yp, y0, xc, 'd = ' + fmt(dd, 3) + ' m', 1);
      if (dd > 0.045) text(ctx, 'ΔV = Ad', CX - hw + 14, (yp + y0) / 2, PAL.ink, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
    }
    /* the force of the gas on the piston, and the heat that keeps the pressure up */
    const fy0 = Math.min(YB - 20, yp + 4 + Fv * KF);   /* the force on the piston, drawn up to its face, as long as the gas column allows */
    arrow(ctx, CX, fy0, CX, yp + 4, fc, 5);
    text(ctx, 'F = PA', CX + 18, (fy0 + yp) / 2, fc, { size: 22, weight: 700, bg: alpha(PAL.panel, 0.9) });
    text(ctx, 'P = ' + sci(P, 5, 1) + ' N/m²', CX + 18, YB - 70, pc, { size: 20, weight: 700, bg: alpha(PAL.panel, 0.9) });
    fatArrow(ctx, 40, 612, CX - hw - 26, YB - 30, 40, ec);
    text(ctx, 'Q_in', 40, 566, ec, { size: 24, weight: 600 });
    /* the PV diagram beside it: the process is the horizontal line from A to B, and the work the rectangle under it */
    const g = axes(ctx, box, [0, 6], [0, 5], { xl: 'V (10⁻³ m³)', xc: PAL.ink, yl: 'P (10⁵ N/m²)', yc: pc, nx: 6, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const xa = g.X(V0 * 1e3), xb = g.X(V1 * 1e3), yl = g.Y(ps.v);
    if (dd > 0) fillPoly(ctx, [[xa, g.Y(0)], [xa, yl], [xb, yl], [xb, g.Y(0)]], ec, 0.35);
    line(ctx, xa, yl, xb, yl, PAL.ink, 5);
    if (dd > 0.01) head(ctx, (xa + xb) / 2 + 8, yl, 1, 0, PAL.ink);
    state(ctx, xa, yl, 'A', -0.7, -0.9); state(ctx, xb, yl, 'B', 0.7, -0.9);
    text(ctx, 'isobaric', (xa + xb) / 2, yl - 40, PAL.ink, { size: 19, align: 'center' });
    if (dd > 0.02 && g.Y(0) - yl > 56) text(ctx, 'W = PΔV', (xa + xb) / 2, (yl + g.Y(0)) / 2, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, dd === 0 ? 'With the piston at rest the gas holds ' + fmt(V0 * 1e3, 2) + ' × 10⁻³ m³ at ' + sci(P, 5, 1) + ' N/m², and no work is done.'
      : 'At a constant pressure of ' + sci(P, 5, 1) + ' N/m² the piston rises ' + fmt(dd, 3) + ' m, the volume grows by ' + sci(dV, -3, 2) + ' m³ and the gas does ' + J(W) + ' J of work.');
    readout(d.readout, `\\kW = \\kPr\\Delta V = (${sciTex(P, 5, 2)}\\ \\text{N/m}^2)(${sciTex(dV, -3, 2)}\\ \\text{m}^3) = ${JTex(W)}\\ \\text{J}`,
      'The force on the piston is F = PA = ' + sci(Fv, 3, 2) + ' N, and Fd = (' + sci(Fv, 3, 2) + ' N)(' + fmt(dd, 3) + ' m) = ' + J(W) + ' J, the same work. On the graph the same number is the area of the rectangle under the line from A to B.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.11: a path along which both pressure and volume change, cut
   into strips of average pressure, and the same path reversed. Still: an
   area has no clock; the number of strips is the reader's approximation.
===================================================================== */
(function () {
  const d = sim('sim-strips', 600);
  const ns = ctl(d.controls, { label: '\\text{strips}', cls: '', min: 1, max: 40, step: 1, value: 6, unit: '', dec: 0, aria: 'the number of strips the area is cut into' });
  const dir = choice(d.controls, { label: '\\text{the path}', options: [{ value: 'ab', label: 'A to B' }, { value: 'ba', label: 'B to A' }], value: 'ab', aria: 'which way the process runs' });
  const box = { l: 220, r: 1240, t: 130, b: 480 };   /* V 0 to 5 × 10⁻³ m³, P 0 to 4 × 10⁵ N/m², fixed */
  const VA = 1, VB = 4, PA = 3;
  const f = (v) => PA * Math.pow(VA / v, 1.2);       /* the pressure along the path, in 10⁵ N/m² */
  const exact = integrate(f, VA, VB) * 100;          /* 10⁵ N/m² × 10⁻³ m³ is 100 J */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure');
    const n = ns.v, rev = dir.value === 'ba', dv = (VB - VA) / n;
    const g = axes(ctx, box, [0, 5], [0, 4], { xl: 'V (10⁻³ m³)', xc: PAL.ink, yl: 'P (10⁵ N/m²)', yc: pc, nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* the strips, each of the average pressure at its middle */
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const v0 = VA + i * dv, v1 = v0 + dv, pm = f(v0 + dv / 2); sum += pm * dv;
      const pts = [[g.X(v0), g.Y(0)], [g.X(v0), g.Y(pm)], [g.X(v1), g.Y(pm)], [g.X(v1), g.Y(0)]];
      if (rev) hatchPoly(ctx, pts, ec); else fillPoly(ctx, pts, ec, 0.32);
      ctx.save(); poly(ctx, pts); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
    }
    sum *= 100;
    /* the path itself, and which way it is walked */
    walk(ctx, f, VA, VB, g.X, g.Y, PAL.ink, 5);
    const vm = 2.2, dvm = 1e-3, slope = (g.Y(f(vm + dvm)) - g.Y(f(vm))) / (g.X(vm + dvm) - g.X(vm)), L = Math.hypot(1, slope);
    head(ctx, g.X(vm), g.Y(f(vm)), (rev ? -1 : 1) / L, (rev ? -1 : 1) * slope / L, PAL.ink, 18);
    state(ctx, g.X(VA), g.Y(PA), 'A', 0.7, -0.9); state(ctx, g.X(VB), g.Y(f(VB)), 'B', 0.8, -0.8);
    /* one strip named, when the strips are wide enough to read */
    if (n <= 12) {
      const v0 = VA, v1 = VA + dv, pm = f(VA + dv / 2);
      hbracket(ctx, g.X(v0), g.X(v1), g.Y(0) + 74, PAL.ink, '');
      text(ctx, 'ΔV_1', (g.X(v0) + g.X(v1)) / 2, g.Y(0) + 100, PAL.ink, { size: 19, weight: 600, align: 'center' });
      line(ctx, g.X(v0) - 40, g.Y(pm), g.X(v0) - 6, g.Y(pm), pc, 2, [4, 6]);
      text(ctx, 'P_{1(ave)}', g.X(v0) - 46, g.Y(pm), pc, { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, rev ? 'the reverse path: the area counts as negative' : 'the area under the path is the work done by the gas', box.r, box.t - 24, PAL.muted, { size: 19, align: 'right' });
    topline(ctx, rev
      ? 'Walked from B back to A the volume decreases, so the ' + J(sum) + ' J is work done on the gas and counts as negative.'
      : (n === 1 ? 'One strip' : n + ' strips') + ' of average pressure add to ' + J(sum) + ' J, against ' + J(exact) + ' J under the curve.');
    readout(d.readout, rev
      ? `\\kWin = \\sum P_{i(\\text{ave})}\\Delta V_i = -${JTex(sum)}\\ \\text{J} = -\\kWout`
      : `\\kW \\approx \\sum_{i=1}^{${n}} P_{i(\\text{ave})}\\Delta V_i = ${JTex(sum)}\\ \\text{J}`,
      rev ? 'Each ΔV_i is negative on the reverse path, so every strip subtracts, and the work in along B to A is the same size as the work out along A to B. Cut the path into more strips and the sum closes on the ' + J(exact) + ' J under the curve.'
        : 'The exact area under the curve is ' + J(exact) + ' J. Each strip counts its average pressure times its width, and as the strips narrow the steps at their tops shrink toward the curve, so the sum of the strips becomes the area under it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.12: the rectangle ABCD of Example 15.2, the two paths from A
   to C, the cycle walked either way, and a general loop. Moving: the path
   is walked over about five seconds and the area is laid down leg by leg,
   filled where the volume grows and hatched where it shrinks, so that what
   is left at the end is the area inside the loop.
===================================================================== */
(function () {
  const d = sim('sim-cycle-work', 690);
  const pab = ctl(d.controls, { label: '\\kPrAB', cls: 'pressure', min: 1, max: 2, step: 0.05, value: 1.5, unit: '× 10⁶ N/m²', dec: 2, onInput: reset, aria: 'the pressure along AB' });
  const pcd = ctl(d.controls, { label: '\\kPrCD', cls: 'pressure', min: 0.1, max: 0.9, step: 0.05, value: 0.2, unit: '× 10⁶ N/m²', dec: 2, onInput: reset, aria: 'the pressure along CD' });
  const dvs = ctl(d.controls, { label: '\\Delta V', cls: '', min: 100, max: 800, step: 10, value: 500, unit: 'cm³', dec: 0, onInput: reset, aria: 'the change in volume along AB' });
  const path = select(d.controls, { label: '\\text{the path}', options: [
    { value: 'ABC', label: 'A to C by B' }, { value: 'ADC', label: 'A to C by D' },
    { value: 'ABCDA', label: 'ABCDA ↻ clockwise' }, { value: 'ADCBA', label: 'ADCBA ↺ the other way' },
    { value: 'CW', label: 'a loop ↻ clockwise' }, { value: 'CCW', label: 'a loop ↺ the other way' }], value: 'ABCDA', aria: 'the path the gas follows', onInput: reset });
  const box = { l: 230, r: 1240, t: 130, b: 480 };   /* V 0 to 1000 cm³, P 0 to 2.0 × 10⁶ N/m², fixed */
  const VA = 200, TWALK = 5;
  const cy = cycle(() => TWALK, 1.4);
  function reset() { cy.reset(); }
  /* the corners, in cm³ and 10⁶ N/m² */
  const corners = () => { const Ph = pab.v, Pl = pcd.v, dv = dvs.v; return { A: [VA, Ph], B: [VA + dv, Ph], C: [VA + dv, Pl], D: [VA, Pl] }; };
  /* the path as a list of points, and the name of each leg */
  function route() {
    const c = corners(), k = path.value;
    if (k === 'CW' || k === 'CCW') {
      const cx = (c.A[0] + c.B[0]) / 2, cyy = (c.A[1] + c.C[1]) / 2, a = (c.B[0] - c.A[0]) / 2, b = (c.A[1] - c.C[1]) / 2, pts = [];
      for (let i = 0; i <= 120; i++) { const t = (TAU * i) / 120; pts.push([cx - a * Math.cos(t), cyy + (k === 'CW' ? 1 : -1) * b * Math.sin(t)]); }
      return { pts, legs: null, a, b };
    }
    const letters = k.split(''); return { pts: letters.map((L) => c[L]), legs: letters.slice(0, -1).map((L, i) => L + letters[i + 1]) };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure');
    const c = corners(), R = route(), k = path.value, t = cy.now(), done = t >= TWALK - 1e-9;
    const g = axes(ctx, box, [0, 1000], [0, 2], { xl: 'V (cm³)', xc: PAL.ink, yl: 'P (10⁶ N/m²)', yc: pc, nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    const X = (p) => g.X(p[0]), Y = (p) => g.Y(p[1]);
    /* how far along the path the walk has come, by length on the canvas */
    const segs = R.pts.slice(1).map((p, i) => [R.pts[i], p]);
    const lens = segs.map(([p, q]) => Math.hypot(X(q) - X(p), Y(q) - Y(p))), total = lens.reduce((a, b) => a + b, 0);
    let left = (t / TWALK) * total, W = 0, cur = R.pts[0];
    const legW = R.legs ? R.legs.map(() => 0) : null, legI = (i) => (R.legs ? i : 0);
    const pos = [], neg = [];
    segs.forEach(([p, q], i) => {
      if (left <= 0) return;
      const fr = Math.min(1, left / Math.max(lens[i], 1e-9)); left -= lens[i];
      const e = [p[0] + (q[0] - p[0]) * fr, p[1] + (q[1] - p[1]) * fr];
      const w = ((p[1] + e[1]) / 2) * (e[0] - p[0]) * 1e6 * 1e-6;   /* 10⁶ N/m² × cm³ = 1 J */
      W += w; if (legW) legW[legI(i)] += w; cur = e;
      if (Math.abs(e[0] - p[0]) > 1e-9) (e[0] > p[0] ? pos : neg).push([[X(p), g.Y(0)], [X(p), Y(p)], [X(e), Y(e)], [X(e), g.Y(0)]]);
    });
    pos.forEach((pts) => fillPoly(ctx, pts, ec, 0.3));
    neg.forEach((pts) => hatchPoly(ctx, pts, ec));
    /* the whole path faintly, the walked part in ink, and the point on it */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath(); R.pts.forEach((p, i) => (i ? ctx.lineTo(X(p), Y(p)) : ctx.moveTo(X(p), Y(p)))); ctx.stroke(); ctx.restore();
    let rem = (t / TWALK) * total;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(X(R.pts[0]), Y(R.pts[0]));
    segs.forEach(([p, q], i) => { if (rem <= 0) return; const fr = Math.min(1, rem / Math.max(lens[i], 1e-9)); rem -= lens[i]; ctx.lineTo(X(p) + (X(q) - X(p)) * fr, Y(p) + (Y(q) - Y(p)) * fr); });
    ctx.stroke(); ctx.restore();
    /* the direction of each leg of the rectangle, or of the loop */
    if (R.legs) segs.forEach(([p, q]) => { const mx = (X(p) + X(q)) / 2, my = (Y(p) + Y(q)) / 2, L = Math.hypot(X(q) - X(p), Y(q) - Y(p)); if (L > 30) head(ctx, mx, my, (X(q) - X(p)) / L, (Y(q) - Y(p)) / L, PAL.ink); });
    else [30, 90].forEach((i) => { const p = R.pts[i], q = R.pts[i + 1], L = Math.hypot(X(q) - X(p), Y(q) - Y(p)); head(ctx, X(p), Y(p), (X(q) - X(p)) / L, (Y(q) - Y(p)) / L, PAL.ink); });
    /* the four states, the two pressures on the axis and the volume change under it */
    state(ctx, X(c.A), Y(c.A), 'A', -0.8, -0.8); state(ctx, X(c.B), Y(c.B), 'B', 0.8, -0.8); state(ctx, X(c.C), Y(c.C), 'C', 0.8, 0.9); state(ctx, X(c.D), Y(c.D), 'D', -0.8, 0.9);
    line(ctx, box.l, Y(c.A), X(c.A) - 26, Y(c.A), pc, 2, [6, 6]); line(ctx, box.l, Y(c.D), X(c.D) - 26, Y(c.D), pc, 2, [6, 6]);
    const near = Y(c.D) - Y(c.A) < 110;   /* the two pressures close together: the lower label goes under its line */
    text(ctx, 'P_AB', box.l + 10, Y(c.A) + 22, pc, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, sci(pab.v * 1e6, 6, 2) + ' N/m²', box.l + 10, Y(c.A) + 46, pc, { size: 17, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'P_CD', box.l + 10, Y(c.D) + (near ? 22 : -46), pc, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, sci(pcd.v * 1e6, 5, 2) + ' N/m²', box.l + 10, Y(c.D) + (near ? 46 : -22), pc, { size: 17, weight: 600, bg: alpha(PAL.panel, 0.85) });
    hbracket(ctx, X(c.A), X(c.B), box.b + 84, PAL.ink, '');
    text(ctx, 'ΔV = ' + fmt(dvs.v, 0) + ' cm³', (X(c.A) + X(c.B)) / 2, box.b + 108, PAL.ink, { size: 19, weight: 600, align: 'center' });
    dot(ctx, X(cur), Y(cur), ec, true, 10);
    /* what the fills mean */
    fillPoly(ctx, [[860, 622], [860, 646], [900, 646], [900, 622]], ec, 0.3); text(ctx, 'counted positive, the volume growing', 912, 634, PAL.muted, { size: 17 });
    hatchPoly(ctx, [[860, 654], [860, 678], [900, 678], [900, 654]], ec); text(ctx, 'counted negative, the volume shrinking', 912, 666, PAL.muted, { size: 17 });
    /* the numbers */
    const Ph = pab.v * 1e6, Pl = pcd.v * 1e6, dV = dvs.v * 1e-6, inside = (Ph - Pl) * dV, ell = Math.PI * (R.a ?? 0) * (R.b ?? 0);
    const legTex = (i) => (R.legs[i] === 'BC' || R.legs[i] === 'DA' || R.legs[i] === 'AD' || R.legs[i] === 'CB' ? '0' : (legW[i] < 0 ? '(' + JTex(legW[i]) + '\\ \\text{J})' : JTex(legW[i]) + '\\ \\text{J}'));
    const names = { AB: '\\kWAB', BC: '\\kWBC', CD: '\\kWCD', DA: '\\kWDA', AD: 'W_{\\text{AD}}', DC: 'W_{\\text{DC}}', CB: 'W_{\\text{CB}}', BA: 'W_{\\text{BA}}' };
    let main, small, line1;
    if (R.legs) {
      main = `\\kW = ${R.legs.map((L) => names[L]).join(' + ')} = ${R.legs.map((L, i) => legTex(i)).join(' + ')} = ${JTex(W)}\\ \\text{J}`;
      if (k === 'ABC') { line1 = done ? 'From A to C by way of B the work is ' + J(W) + ' J, the area under AB; the isochoric leg BC adds nothing.' : 'Walking from A to C by way of B: the area laid down so far is ' + J(W) + ' J.'; small = 'The same two endpoints reached by way of D give only P_CD ΔV = ' + J(Pl * dV) + ' J, because that path runs at the lower pressure. The work depends on the path, not only on where it starts and ends.'; }
      else if (k === 'ADC') { line1 = done ? 'From A to C by way of D the work is ' + J(W) + ' J, the area under DC; the isochoric leg AD adds nothing.' : 'Walking from A to C by way of D: the area laid down so far is ' + J(W) + ' J.'; small = 'By way of B the same endpoints give P_AB ΔV = ' + J(Ph * dV) + ' J, because that path runs at the higher pressure. The work depends on the path, not only on where it starts and ends.'; }
      else if (k === 'ABCDA') { line1 = done ? 'Around ABCDA the work is ' + J(Ph * dV) + ' + 0 − ' + J(Pl * dV) + ' + 0 = ' + J(W) + ' J, the area inside the rectangle.' : 'Walking the cycle ABCDA clockwise: the work so far is ' + J(W) + ' J.'; small = 'The hatched area under CD cancels the same part of the area under AB, and what is left is the rectangle, (P_AB − P_CD)ΔV = ' + J(inside) + ' J. Walked clockwise the net work is positive: it is work done on the outside environment.'; }
      else { line1 = done ? 'Around ADCBA the work is 0 + ' + J(Pl * dV) + ' + 0 − ' + J(Ph * dV) + ' = ' + J(W) + ' J, the same area with the opposite sign.' : 'Walking the cycle ADCBA counterclockwise: the work so far is ' + J(W) + ' J.'; small = 'The area under DC is laid down first and the larger area under BA hatched over it, leaving the rectangle counted negative, −(P_AB − P_CD)ΔV = ' + J(-inside) + ' J. Walked counterclockwise the net work is work done on the system.'; }
    } else {
      main = `\\kW = \\text{area inside the loop} = ${k === 'CW' ? '' : '-'}\\pi ab = ${JTex(k === 'CW' ? ell : -ell)}\\ \\text{J}`;
      line1 = done ? 'Around the loop walked ' + (k === 'CW' ? 'clockwise' : 'counterclockwise') + ' the net work is ' + J(W) + ' J, the area inside it.' : 'Walking the loop ' + (k === 'CW' ? 'clockwise' : 'counterclockwise') + ': the work so far is ' + J(W) + ' J.';
      small = 'The loop is the ellipse inscribed in the rectangle, with half-axes a = ' + fmt(dvs.v / 2, 0) + ' cm³ and b = ' + sci((Ph - Pl) / 2, 5, 2) + ' N/m². The area under its upper half is laid down as the volume grows and the area under its lower half is hatched as the volume shrinks, and only the inside of the loop is left: positive when the loop is walked clockwise, negative when it is walked counterclockwise.';
    }
    topline(ctx, line1);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 15.13: the isotherm and the adiabat from A, and the cycle ABCA.
   Still: two paths from one starting point are a relation, not a motion.
===================================================================== */
(function () {
  const d = sim('sim-isotherm-adiabat', 600);
  const ps = ctl(d.controls, { label: '\\kPr\\ \\text{at A}', cls: 'pressure', min: 1, max: 5, step: 0.1, value: 3, unit: '× 10⁵ N/m²', dec: 1, aria: 'the pressure at A' });
  const rs = ctl(d.controls, { label: 'V_{\\text{B}}/V_{\\text{A}}', cls: '', min: 1.2, max: 4, step: 0.1, value: 3, unit: '', dec: 1, aria: 'how far the gas expands' });
  const panel = choice(d.controls, { label: '\\text{the panel}', options: [{ value: 'a', label: '(a) two paths from A' }, { value: 'b', label: '(b) the cycle ABCA' }], value: 'a', aria: 'which panel of the figure is drawn' });
  const box = { l: 220, r: 1240, t: 130, b: 480 };   /* V 0 to 5 × 10⁻³ m³, P 0 to 5 × 10⁵ N/m², fixed */
  const VA = 1;
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure');
    const PA = ps.v, r = rs.v, VB = VA * r, b = panel.value === 'b';
    const iso = (v) => (PA * VA) / v, adi = (v) => PA * Math.pow(VA / v, GAMMA);
    const PC = adi(VB), EA = 1.5 * PA * VA * 100, Wiso = PA * VA * 100 * Math.log(r), Wad = 1.5 * (PA * VA - PC * VB) * 100;
    const g = axes(ctx, box, [0, 5], [0, 5], { xl: 'V (10⁻³ m³)', xc: PAL.ink, yl: 'P (10⁵ N/m²)', yc: pc, nx: 5, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* the areas: under the adiabat, and the band the isotherm adds above it (or the net work of the cycle) */
    if (!b) fillPoly(ctx, under(adi, VA, VB, g.X, g.Y), ec, 0.22);
    fillPoly(ctx, between(iso, adi, VA, VB, g.X, g.Y), ec, b ? 0.35 : 0.22);
    /* the two paths, the isotherm solid and the adiabat dashed, and the way each is walked */
    walk(ctx, iso, VA, VB, g.X, g.Y, PAL.ink, 5);
    walk(ctx, adi, VA, VB, g.X, g.Y, PAL.ink, 4, [12, 9]);
    const mid = VA * Math.sqrt(r), dvm = 1e-3;
    for (const [f, sgn] of [[iso, 1], [adi, b ? -1 : 1]]) { const sl = (g.Y(f(mid + dvm)) - g.Y(f(mid))) / (g.X(mid + dvm) - g.X(mid)), L = Math.hypot(1, sl); head(ctx, g.X(mid), g.Y(f(mid)), sgn / L, (sgn * sl) / L, PAL.ink, 18); }
    if (b) { line(ctx, g.X(VB), g.Y(iso(VB)), g.X(VB), g.Y(PC), PAL.ink, 5); head(ctx, g.X(VB), (g.Y(iso(VB)) + g.Y(PC)) / 2, 0, 1, PAL.ink); }
    line(ctx, g.X(VA), g.Y(PA), g.X(VA), g.Y(0), alpha(PAL.ink, 0.5), 2, [4, 8]);
    line(ctx, g.X(VB), g.Y(b ? PC : 0), g.X(VB), g.Y(0), alpha(PAL.ink, 0.5), 2, [4, 8]);
    state(ctx, g.X(VA), g.Y(PA), 'A', -0.9, -0.6); state(ctx, g.X(VB), g.Y(iso(VB)), 'B', 0.9, -0.5); state(ctx, g.X(VB), g.Y(PC), 'C', 0.9, 0.7);
    const lx = VA * Math.pow(r, 0.6);
    text(ctx, 'isothermal, ΔT = 0', g.X(lx) + 14, g.Y(iso(lx)) - 30, PAL.ink, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'adiabatic, Q = 0', g.X(lx) - 30, g.Y(adi(lx)) + 44, PAL.ink, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    if (b) text(ctx, 'isochoric', g.X(VB) + 16, (g.Y(iso(VB)) + g.Y(PC)) / 2, PAL.ink, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, b ? 'net work of the cycle = ' + J(Wiso - Wad) + ' J' : 'work along AB = ' + J(Wiso) + ' J, along AC = ' + J(Wad) + ' J', box.r - 10, box.t + 26, ec, { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, b
      ? 'Out along the isotherm, cooled to C and back along the adiabat, the cycle ABCA puts out ' + J(Wiso - Wad) + ' J of net work.'
      : 'The isothermal path from A does ' + J(Wiso) + ' J of work, the adiabatic path only ' + J(Wad) + ' J.');
    readout(d.readout, b
      ? `\\kW = (\\text{area under AB}) - (\\text{area under CA}) = ${JTex(Wiso)}\\ \\text{J} - ${JTex(Wad)}\\ \\text{J} = ${JTex(Wiso - Wad)}\\ \\text{J}`
      : `\\text{AB: } \\kQh = \\kW = ${JTex(Wiso)}\\ \\text{J}\\qquad \\text{AC: } \\kdEint = -\\kW = ${JTex(-Wad)}\\ \\text{J}`,
      b ? 'The isochoric leg BC does no work, so the net work is the area between the two curves. Cooling the gas at B to C is what makes the return along the adiabat cheaper than the expansion along the isotherm was.'
        : 'For a monatomic ideal gas E_int = (3/2)NkT = (3/2)PV, which is ' + J(EA) + ' J at A. Along the isotherm it stays ' + J(EA) + ' J, since heat transfer replaces the work as it is done; along the adiabat the work comes out of the internal energy, which falls to ' + J(EA - Wad) + ' J at C, so the gas is colder and its pressure lower.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the four simple processes of Table 15.2 from one state A, with the
   first law written for each. Still: a choice of process and how far it
   goes, and the readout answers.
===================================================================== */
(function () {
  const d = sim('sim-four-processes', 600);
  const kind = select(d.controls, { label: '\\text{the process}', options: [{ value: 'isobaric', label: 'isobaric' }, { value: 'isochoric', label: 'isochoric' }, { value: 'isothermal', label: 'isothermal' }, { value: 'adiabatic', label: 'adiabatic' }], value: 'isobaric', aria: 'the kind of process', onInput: hold });
  const rv = ctl(d.controls, { label: 'V_{\\text{B}}/V_{\\text{A}}', cls: '', min: 0.6, max: 3, step: 0.1, value: 2, unit: '', dec: 1, aria: 'the final volume as a multiple of the initial one' });
  const rp = ctl(d.controls, { label: 'P_{\\text{B}}/P_{\\text{A}}', cls: '', min: 0.5, max: 2.5, step: 0.1, value: 2, unit: '', dec: 1, aria: 'the final pressure as a multiple of the initial one, for the isochoric process' });
  function hold() { rv.disable(kind.value === 'isochoric'); rp.disable(kind.value !== 'isochoric'); }
  hold();
  const box = { l: 220, r: 1240, t: 130, b: 480 };   /* V 0 to 4 × 10⁻³ m³, P 0 to 6 × 10⁵ N/m², fixed */
  const VA = 1, PA = 2;
  /* each process as a curve of V (or, for the isochoric one, a vertical line), and its first-law numbers in joules */
  function model(k) {
    const r = rv.v, q = rp.v;
    if (k === 'isobaric') { const VB = VA * r, W = PA * (VB - VA) * 100, dE = 1.5 * PA * (VB - VA) * 100; return { f: () => PA, VB, PB: PA, W, dE, Q: W + dE }; }
    if (k === 'isochoric') { const PB = PA * q, dE = 1.5 * VA * (PB - PA) * 100; return { f: null, VB: VA, PB, W: 0, dE, Q: dE }; }
    if (k === 'isothermal') { const VB = VA * r, W = PA * VA * 100 * Math.log(r); return { f: (v) => (PA * VA) / v, VB, PB: PA / r, W, dE: 0, Q: W }; }
    const VB = VA * r, PB = PA * Math.pow(1 / r, GAMMA), W = 1.5 * (PA * VA - PB * VB) * 100; return { f: (v) => PA * Math.pow(VA / v, GAMMA), VB, PB, W, dE: -W, Q: 0 };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure');
    const k = kind.value, m = model(k);
    const g = axes(ctx, box, [0, 4], [0, 6], { xl: 'V (10⁻³ m³)', xc: PAL.ink, yl: 'P (10⁵ N/m²)', yc: pc, nx: 4, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* the other three processes, faintly, so the chosen one is seen against them */
    const ghosts = [];
    for (const o of ['isobaric', 'isochoric', 'isothermal', 'adiabatic']) {
      if (o === k) continue; const mo = model(o), col = alpha(PAL.ink, 0.35);
      if (mo.f) walk(ctx, mo.f, VA, mo.VB, g.X, g.Y, col, 2.5, o === 'adiabatic' ? [10, 8] : undefined); else line(ctx, g.X(VA), g.Y(PA), g.X(VA), g.Y(Math.min(mo.PB, 6)), col, 2.5);
      /* each ghost is named at the middle of its own path, clear of the chosen path's endpoint B, and the names are set after B so nothing is drawn over them */
      if (mo.f) { const vm = (VA + mo.VB) / 2, dy = o === 'adiabatic' ? 26 : -20; ghosts.push([o, g.X(vm), g.Y(mo.f(vm)) + dy, 'center']); }
      else ghosts.push([o, g.X(VA) - 14, g.Y((PA + Math.min(mo.PB, 6)) / 2), 'right']);
    }
    /* the chosen process: its path, the area under it, and its endpoint */
    if (m.f) {
      const pts = under(m.f, VA, m.VB, g.X, g.Y);
      if (m.VB > VA) fillPoly(ctx, pts, ec, 0.32); else hatchPoly(ctx, pts, ec);
      walk(ctx, m.f, VA, m.VB, g.X, g.Y, PAL.ink, 5, k === 'adiabatic' ? [12, 9] : undefined);
      const mid = (VA + m.VB) / 2, dv = 1e-3 * (m.VB > VA ? 1 : -1), sl = (g.Y(m.f(mid + dv)) - g.Y(m.f(mid))) / (g.X(mid + dv) - g.X(mid)), L = Math.hypot(1, sl), sg = m.VB > VA ? 1 : -1;
      head(ctx, g.X(mid), g.Y(m.f(mid)), sg / L, (sg * sl) / L, PAL.ink, 18);
    } else {
      line(ctx, g.X(VA), g.Y(PA), g.X(VA), g.Y(Math.min(m.PB, 6)), PAL.ink, 5);
      head(ctx, g.X(VA), g.Y((PA + Math.min(m.PB, 6)) / 2), 0, m.PB > PA ? -1 : 1, PAL.ink, 18);
    }
    state(ctx, g.X(VA), g.Y(PA), 'A', k === 'isochoric' ? 0.9 : -0.9, k === 'isochoric' ? 0 : -0.7);
    const e = pinned(ctx, box, g.X, g.Y, m.VB, m.PB, PAL.ink, 'B');
    if (!e.out) text(ctx, 'B', e.x + (m.VB >= VA ? 24 : -24), e.y - 24, PAL.ink, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    ghosts.forEach(([o, x, y, al]) => text(ctx, o, x, y, PAL.muted, { size: 17, align: al, bg: alpha(PAL.panel, 0.8) }));
    text(ctx, k + (k === 'isochoric' ? ': constant volume, W = 0' : k === 'isobaric' ? ': constant pressure, W = PΔV' : k === 'isothermal' ? ': constant temperature, Q = W' : ': no heat transfer, Q = 0'), box.r - 10, box.t + 26, PAL.ink, { size: 19, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the words and the numbers */
    const exp = m.VB > VA + 1e-9, comp = m.VB < VA - 1e-9;
    const lines = {
      isobaric: exp ? 'An isobaric expansion to ' + fmt(rv.v, 1) + ' times the volume does ' + J(m.W) + ' J of work and takes in ' + J(m.Q) + ' J of heat.' : comp ? 'An isobaric compression to ' + fmt(rv.v, 1) + ' times the volume takes ' + J(-m.W) + ' J of work in and gives up ' + J(-m.Q) + ' J of heat.' : 'With no change in volume there is no isobaric process at all.',
      isochoric: m.PB > PA ? 'Heating at constant volume does no work: all ' + J(m.Q) + ' J of heat transfer goes into the internal energy.' : m.PB < PA ? 'Cooling at constant volume does no work: the internal energy falls by the ' + J(-m.dE) + ' J that leaves as heat.' : 'With no change in pressure the gas simply stays at A.',
      isothermal: exp ? 'An isothermal expansion to ' + fmt(rv.v, 1) + ' times the volume does ' + J(m.W) + ' J of work, all of it replaced by heat transfer in.' : comp ? 'An isothermal compression to ' + fmt(rv.v, 1) + ' times the volume takes ' + J(-m.W) + ' J of work in, and the same heat leaves.' : 'With no change in volume the gas simply stays at A.',
      adiabatic: exp ? 'An adiabatic expansion to ' + fmt(rv.v, 1) + ' times the volume does ' + J(m.W) + ' J of work, all of it out of the internal energy.' : comp ? 'An adiabatic compression to ' + fmt(rv.v, 1) + ' times the volume takes ' + J(-m.W) + ' J of work in, all of it into the internal energy.' : 'With no change in volume the gas simply stays at A.',
    };
    topline(ctx, lines[k]);
    const smalls = {
      isobaric: 'At constant pressure the internal energy (3/2)PV rises with the volume, so the gas needs more heat than the work it does: Q = ΔE_int + W. The work is the rectangle under the line.',
      isochoric: 'The path is vertical and encloses no area, so W = 0 and the first law reads ΔE_int = Q. Every joule of heat transfer changes the internal energy, and with it the pressure.',
      isothermal: 'PV is constant along the curve, so (3/2)PV is too and ΔE_int = 0. The work is the area under the curve, and the heat transfer must equal it; the process is slow, because that heat must spread through the gas as it goes.',
      adiabatic: 'With Q = 0 the work comes entirely out of the internal energy, ΔE_int = −W, so the pressure falls faster along this path than along the isotherm and the gas ends colder. The dashed curve is the adiabat, the steeper of the two.',
    };
    readout(d.readout, `\\kQh = ${JTex(m.Q)}\\ \\text{J},\\quad \\kW = ${JTex(m.W)}\\ \\text{J},\\quad \\kdEint = \\kQh - \\kW = ${JTex(m.dE)}\\ \\text{J}`, smalls[k]);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (unnumbered): the nested loops ABCFA and ABDEA that a conceptual
   question and two AP items read. A faithful copy: no sliders, still.
===================================================================== */
(function () {
  const d = sim('fig-loops', 520);
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), pc = C('pressure');
    const L = 300, R = 1100, T = 90, B = 470;
    const A = [430, 130], Bp = [960, 130], Cp = [960, 360], Fp = [430, 360], Dp = [960, 420], Ep = [430, 420];
    fillPoly(ctx, [A, Bp, Cp, Fp], ec, 0.3); fillPoly(ctx, [Fp, Cp, Dp, Ep], ec, 0.14);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; poly(ctx, [A, Bp, Dp, Ep]); ctx.stroke(); ctx.beginPath(); ctx.moveTo(Fp[0], Fp[1]); ctx.lineTo(Cp[0], Cp[1]); ctx.stroke(); ctx.restore();
    /* the axes, unnumbered as the book leaves them */
    arrow(ctx, L, B, L, T, PAL.muted, 3); arrow(ctx, L, B, R, B, PAL.muted, 3);
    text(ctx, 'P', L - 30, T + 10, pc, { size: 24, weight: 600, align: 'center' }); text(ctx, 'V', R, B + 34, PAL.ink, { size: 24, weight: 600, align: 'center' });
    for (const [p, s, ox, oy] of [[A, 'A', -1, 0], [Bp, 'B', 1, 0], [Cp, 'C', 1, 0], [Dp, 'D', 1, 0], [Ep, 'E', -1, 0], [Fp, 'F', -1, 0]]) text(ctx, s, p[0] + ox * 34, p[1] + oy * 30, PAL.ink, { size: 24, weight: 600, align: 'center' });
    headline(ctx, 'Two cyclical processes start and end at A: the loop ABCFA, and the taller loop ABDEA.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (unnumbered): the parallelogram ABCD with its diagonal DB and the
   book's numbers, which a keyed problem and three AP items read. A
   faithful copy: no sliders, still.
===================================================================== */
(function () {
  const d = sim('fig-parallelogram', 560);
  const box = { l: 300, r: 1200, t: 100, b: 470 };   /* V 0 to 5 × 10⁻³ m³, P 0 to 3 × 10⁶ N/m² */
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure');
    const X = (v) => box.l + (v / 5) * (box.r - box.l), Y = (p) => box.b - (p / 3) * (box.b - box.t);
    arrow(ctx, box.l, box.b, box.l, box.t - 10, PAL.muted, 3); arrow(ctx, box.l, box.b, box.r + 10, box.b, PAL.muted, 3);
    text(ctx, 'P (10⁶ N/m²)', box.l, box.t - 36, pc, { size: 20, weight: 600, align: 'left' });
    text(ctx, 'V (10⁻³ m³)', box.r, box.b + 62, PAL.ink, { size: 20, weight: 600, align: 'right' });
    const A = [1, 2.6], B = [4, 2.0], Cc = [4, 0.6], D = [1, 1.0];
    /* the values each state sits at, dropped to the axes as the book draws them */
    for (const p of [2.6, 2.0, 1.0, 0.6]) { line(ctx, box.l, Y(p), X(p === 2.6 || p === 1.0 ? 1 : 4), Y(p), alpha(PAL.ink, 0.45), 2, [6, 6]); text(ctx, fmt(p, 1), box.l - 12, Y(p), pc, { size: 19, weight: 600, align: 'right' }); }
    for (const v of [1, 4]) { line(ctx, X(v), box.b, X(v), Y(v === 1 ? 2.6 : 2.0), alpha(PAL.ink, 0.45), 2, [6, 6]); text(ctx, fmt(v, 1), X(v), box.b + 28, PAL.ink, { size: 19, weight: 600, align: 'center' }); }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; poly(ctx, [A, B, Cc, D].map(([v, p]) => [X(v), Y(p)])); ctx.stroke(); ctx.restore();
    line(ctx, X(D[0]), Y(D[1]), X(B[0]), Y(B[1]), PAL.ink, 3, [12, 9]);
    for (const [p, s, ox, oy] of [[A, 'A', -0.9, -0.8], [B, 'B', 1, -0.3], [Cc, 'C', 1, 0.4], [D, 'D', -1, 0]]) { dot(ctx, X(p[0]), Y(p[1]), PAL.ink, true, 8); text(ctx, s, X(p[0]) + ox * 30, Y(p[1]) + oy * 30, PAL.ink, { size: 24, weight: 600, align: 'center' }); }
    headline(ctx, 'The heat engine runs round the parallelogram ABCDA, and the dashed line DB cuts it in two.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
