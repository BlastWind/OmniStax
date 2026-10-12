/* Figures for section 1.3 Trigonometric Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, line, arrow, text, label, headline, register, readout, tex, fmt, hover, hbracket, vbracket, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const PI = Math.PI, DEG = PI / 180;
/* a multiple of π/2 as the book writes it, for tick labels */
const piTick = (v) => {
  const k = Math.round(v / (PI / 2)), s = k < 0 ? '−' : '', a = Math.abs(k);
  if (a === 0) return '0';
  if (a % 2 === 0) return `${s}${a === 2 ? '' : a / 2}π`;
  return `${s}${a === 1 ? '' : a}π/2`;
};
/* an arc about (cx, cy) from the direction a0 to a1, counterclockwise on the page for a1 > a0 */
const arcStroke = (ctx, cx, cy, r, a0, a1, color, w = 3, dash) => {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.arc(cx, cy, r, -a0, -a1, a1 > a0); ctx.stroke(); ctx.restore();
};
const circle = (ctx, cx, cy, r, color, w = 3, dash) => arcStroke(ctx, cx, cy, r, 0, 2 * PI, color, w, dash);
/* Table 1.8's angles, and the two of Example 1.22, in radians as the book writes them */
const EXACT = { 0: '0', 30: '\\frac{\\pi}{6}', 45: '\\frac{\\pi}{4}', 60: '\\frac{\\pi}{3}', 90: '\\frac{\\pi}{2}', 120: '\\frac{2\\pi}{3}', 135: '\\frac{3\\pi}{4}', 150: '\\frac{5\\pi}{6}', 180: '\\pi', 225: '\\frac{5\\pi}{4}', 300: '\\frac{5\\pi}{3}', 360: '2\\pi' };
const EXACT_TEXT = { 0: '0', 30: 'π/6', 45: 'π/4', 60: 'π/3', 90: 'π/2', 120: '2π/3', 135: '3π/4', 150: '5π/6', 180: 'π', 225: '5π/4', 300: '5π/3', 360: '2π' };
const exactOf = (deg) => { const k = Math.round(deg); return Math.abs(deg - k) < 1e-6 ? k : null; };

/* Figure 1.30: the arc an angle cuts off on the unit circle, laid flat on a rule at the same scale. */
(function () {
  const d = sim('sim-radian', 470);
  const ONE = 180 / PI;
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 360, step: 0.01, value: 60, unit: '°', dec: 1, aria: 'angle in degrees',
    detents: [0, 30, 45, 60, 90, 120, 135, 150, 225, 300], snap: true, specials: [{ at: ONE }, { at: 180 }, { at: 360 }] });
  const ro = readout(d);
  const R = 120, CX = 200, CY = 270, X0 = 470, RULE = 2 * PI * R, RY = 270;
  function draw() {
    const { ctx } = begin(d.c);
    const ac = C('angle'), deg = th.v, t = deg * DEG, k = exactOf(deg), one = Math.abs(t - 1) < 1e-3;
    const ex = k !== null && EXACT[k] !== undefined ? k : null;
    headline(ctx, one ? 'θ = 1 rad: the arc is exactly one radius long, about 57.3°.'
      : ex !== null ? `θ = ${ex}° = ${EXACT_TEXT[ex]} rad: the arc is ${fmt(t, 2)} radii long.`
        : `θ = ${fmt(deg, 1)}°: the arc is ${fmt(t, 2)} radii long, so θ = ${fmt(t, 2)} rad.`);
    /* the circle, its two radii and the arc s */
    circle(ctx, CX, CY, R, alpha(PAL.ink, 0.45), 2.5);
    line(ctx, CX, CY, CX + R, CY, PAL.ink, 4);
    line(ctx, CX, CY, CX + R * Math.cos(t), CY - R * Math.sin(t), PAL.ink, 4);
    if (t > 0) arcStroke(ctx, CX, CY, R, 0, t, PAL.ink, 7);
    for (let s = 1; s <= 6 && s <= t + 1e-9; s++) {
      const c = Math.cos(s), si = Math.sin(s);
      line(ctx, CX + (R - 10) * c, CY - (R - 10) * si, CX + (R + 10) * c, CY - (R + 10) * si, PAL.ink, 3);
    }
    if (t > 0.05) angleArc(ctx, { x: CX, y: CY }, 34, 0, t, 'θ', undefined, ac);
    dot(ctx, CX, CY, PAL.ink, true, 6);
    dot(ctx, CX + R * Math.cos(t), CY - R * Math.sin(t), PAL.ink, true, 9);
    const mid = t / 2;
    if (t > 0.2) text(ctx, 's', CX + (R + 26) * Math.cos(mid), CY - (R + 26) * Math.sin(mid), PAL.ink, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, '1', CX + R / 2, CY + 22, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the rule: s in radians above, the same angle in degrees below */
    line(ctx, X0, RY, X0 + RULE, RY, PAL.muted, 2);
    for (let s = 0; s <= 6; s++) { line(ctx, X0 + s * R, RY - 12, X0 + s * R, RY, PAL.muted, 2); text(ctx, String(s), X0 + s * R, RY - 30, PAL.muted, { size: 17, align: 'center' }); }
    [[PI, 'π'], [2 * PI, '2π']].forEach(([v, s]) => { line(ctx, X0 + v * R, RY - 12, X0 + v * R, RY - 52, alpha(PAL.ink, 0.4), 2, [4, 6]); text(ctx, s, X0 + v * R, RY - 70, PAL.ink, { size: 20, weight: 600, align: 'center' }); });
    for (let g = 0; g <= 360; g += 30) { const x = X0 + g * DEG * R; line(ctx, x, RY, x, RY + (g % 90 ? 7 : 12), PAL.muted, 2); if (g % 90 === 0) text(ctx, `${g}°`, x, RY + 32, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'radians', X0 - 18, RY - 30, PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'degrees', X0 - 18, RY + 32, PAL.ink, { size: 20, weight: 600, align: 'right' });
    if (t > 0) line(ctx, X0, RY, X0 + t * R, RY, PAL.ink, 7);
    dot(ctx, X0 + t * R, RY, PAL.ink, true, 9);
    hbracket(ctx, X0, X0 + Math.max(t, 1e-3) * R, RY + 80, ac, t > 0.15 ? 's = θ' : '', { side: 'below' });
    const rad = one ? '1' : ex !== null ? `${EXACT[ex]}` : n(t);
    ro.set(`\\ktheta = \\ks = ${rad}\\ \\text{rad}${ex !== null && ex !== 0 ? ` \\approx ${n(t)}\\ \\text{rad}` : ''} = ${n(deg, ex !== null ? 0 : 1)}^{\\circ}`);
  }
  still(d, draw);
})();

/* Figures 1.31 and 1.32: θ in standard position on a circle of radius r, the six values beside it.
   Axes fixed at −2.5 to 2.5 both ways, room for r = 2. */
(function () {
  const d = sim('sim-standard-position', 660);
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 360, step: 1, value: 30, unit: '°', dec: 0, aria: 'angle in degrees',
    specials: [0, 30, 45, 60, 90, 180, 270, 360].map((at) => ({ at })) });
  const r = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.5, max: 2, step: 0.05, value: 1, unit: '', dec: 2, aria: 'radius', specials: [{ at: 1 }] });
  const ro = readout(d);
  const BOX = { l: 120, r: 620, t: 90, b: 590 };
  const QUAD = ['in the first quadrant: $x$ and $y$ are both positive, and so are all six values.', 'in the second quadrant: $x < 0 < y$, so only sine and cosecant are positive.',
    'in the third quadrant: $x$ and $y$ are both negative, so only tangent and cotangent are positive.', 'in the fourth quadrant: $y < 0 < x$, so only cosine and secant are positive.'];
  const AXIS = { 0: 'lies on the positive $x$-axis: $y = 0$, so $\\cot\\ktheta$ and $\\csc\\ktheta$ are undefined.', 90: 'lies on the positive $y$-axis: $x = 0$, so $\\sec\\ktheta$ and $\\tan\\ktheta$ are undefined.',
    180: 'lies on the negative $x$-axis: $y = 0$, so $\\cot\\ktheta$ and $\\csc\\ktheta$ are undefined.', 270: 'lies on the negative $y$-axis: $x = 0$, so $\\sec\\ktheta$ and $\\tan\\ktheta$ are undefined.' };
  /* a ratio's value, or undefined where its denominator is zero */
  const ratio = (p, q) => (Math.abs(q) < 1e-9 ? null : p / q);
  function draw() {
    const { ctx } = begin(d.c);
    const ac = C('angle'), pc = C('point'), deg = th.v, t = deg * DEG, R = r.v;
    const x = Math.abs(Math.cos(t)) < 1e-9 ? 0 : R * Math.cos(t), y = Math.abs(Math.sin(t)) < 1e-9 ? 0 : R * Math.sin(t);
    const a = deg % 360;
    headline(ctx, `$\\ktheta = ${deg}^{\\circ}$ ${AXIS[a] ?? QUAD[Math.floor(a / 90)]}`);
    const ax = axes(ctx, BOX, [-2.5, 2.5], [-2.5, 2.5], { xl: 'x', yl: 'y', nx: 10, ny: 10, fx: (v) => (Number.isInteger(v) ? fmt(v, 0) : ''), fy: (v) => (Number.isInteger(v) ? fmt(v, 0) : '') });
    const O = { x: ax.X(0), y: ax.Y(0) }, U = ax.X(1) - ax.X(0), P = { x: ax.X(x), y: ax.Y(y) };
    if (Math.abs(R - 1) > 1e-9) circle(ctx, O.x, O.y, U, alpha(PAL.ink, 0.3), 2, [6, 8]);
    circle(ctx, O.x, O.y, R * U, PAL.ink, 3);
    line(ctx, O.x, O.y, ax.X(R), O.y, PAL.ink, 4);
    if (Math.abs(y) > 1e-9) drop(ctx, P.x, P.y, P.x, O.y);
    line(ctx, O.x, O.y, P.x, P.y, PAL.ink, 4);
    if (t > 0.02) angleArc(ctx, O, 36, 0, t, 'θ', undefined, ac);
    if (Math.abs(x) > 0.12 && Math.abs(y) > 0.12) { const sx = x > 0 ? -1 : 1, sy = y > 0 ? -1 : 1; ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(Math.min(P.x, P.x + 16 * sx), Math.min(O.y, O.y + 16 * sy), 16, 16); ctx.restore(); }
    if (Math.abs(x) > 0.08) text(ctx, 'x', (O.x + P.x) / 2, O.y + (y >= 0 ? 24 : -24), PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    if (Math.abs(y) > 0.08) text(ctx, 'y', P.x + (x >= 0 ? 14 : -14), (O.y + P.y) / 2, PAL.ink, { size: 22, weight: 600, align: x >= 0 ? 'left' : 'right', bg: PAL.panel });
    const mid = { x: (O.x + P.x) / 2, y: (O.y + P.y) / 2 }, nx = -Math.sin(t), ny = -Math.cos(t);
    text(ctx, 'r', mid.x + 22 * nx, mid.y + 22 * ny, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    dot(ctx, O.x, O.y, PAL.ink, true, 6);
    dot(ctx, P.x, P.y, pc, true, 10);
    const ux = Math.cos(t), uy = Math.sin(t);
    text(ctx, 'P = (x, y)', P.x + 30 * ux, P.y - 30 * uy, pc, { size: 20, weight: 600, align: ux > 0.3 ? 'left' : ux < -0.3 ? 'right' : 'center', bg: PAL.panel });
    const away = t / 2 + PI;
    text(ctx, 'O', O.x + 24 * Math.cos(away), O.y - 24 * Math.sin(away), PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the six definitions with this angle's numbers */
    const rows = [['\\sin', 'y', 'r', y, R], ['\\cos', 'x', 'r', x, R], ['\\tan', 'y', 'x', y, x], ['\\csc', 'r', 'y', R, y], ['\\sec', 'r', 'x', R, x], ['\\cot', 'x', 'y', x, y]];
    rows.forEach(([fn, p, q, pv, qv], i) => {
      const v = ratio(pv, qv);
      text(ctx, `$${fn}\\ktheta = \\dfrac{${p}}{${q}} = \\dfrac{${n(pv)}}{${n(qv)}} ${v === null ? '\\quad\\text{undefined}' : `= ${n(v)}`}$`, 720, 150 + i * 80, PAL.ink, { size: 24, align: 'left', tex: true });
    });
    ro.set(`x = r\\cos\\ktheta = ${n(R)}\\cos ${deg}^{\\circ} = ${n(x)},\\qquad y = r\\sin\\ktheta = ${n(R)}\\sin ${deg}^{\\circ} = ${n(y)}`);
  }
  still(d, draw);
})();

/* Example 1.23: each angle swept out from the positive x-axis, on the unit circle. Axes fixed at −1.5 to 1.5. */
(function () {
  const d = sim('sim-evaluate-angles', 620);
  const PARTS = {
    a: { t: (2 * PI) / 3, name: '2π/3', pt: '(−1/2, √3/2)', side: 'left', head: '$\\ktheta = 2\\pi/3$ turns a third of the way round, counterclockwise from the positive $x$-axis.',
      ro: '\\sin\\left(\\frac{2\\pi}{3}\\right) = y = \\frac{\\sqrt{3}}{2}' },
    b: { t: (-5 * PI) / 6, name: '−5π/6', pt: '(−√3/2, −1/2)', side: 'below', head: '$\\ktheta = -5\\pi/6$ turns clockwise, the negative direction.',
      ro: '\\cos\\left(-\\frac{5\\pi}{6}\\right) = x = -\\frac{\\sqrt{3}}{2}' },
    c: { t: (15 * PI) / 4, name: '15π/4', pt: '(√2/2, −√2/2)', side: 'right', head: '$\\ktheta = 15\\pi/4 = 2\\pi + 7\\pi/4$: one full turn, then $7\\pi/4$ more.',
      ro: '\\tan\\left(\\frac{15\\pi}{4}\\right) = \\frac{y}{x} = \\frac{-\\sqrt{2}/2}{\\sqrt{2}/2} = -1' },
  };
  const pick = choice(d.controls, { label: '', options: [{ value: 'a', label: 'a. sin(2π/3)' }, { value: 'b', label: 'b. cos(−5π/6)' }, { value: 'c', label: 'c. tan(15π/4)' }], value: 'a', ms: 2200, aria: 'which part' });
  const ro = readout(d);
  const BOX = { l: 485, r: 915, t: 110, b: 540 };
  /* the sweep as a widening spiral, so a full turn shows as a turn */
  const rho = (phi) => 0.2 + 0.03 * Math.abs(phi);
  function draw() {
    const { ctx } = begin(d.c);
    const ac = C('angle'), pc = C('point'), part = PARTS[pick.value], k = pick.from === pick.value ? 1 : pick.k, phi = part.t * k;
    headline(ctx, part.head);
    const ax = axes(ctx, BOX, [-1.5, 1.5], [-1.5, 1.5], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    const O = { x: ax.X(0), y: ax.Y(0) }, U = ax.X(1) - ax.X(0);
    circle(ctx, O.x, O.y, U, PAL.ink, 3);
    const px = Math.cos(phi), py = Math.sin(phi), P = { x: ax.X(px), y: ax.Y(py) };
    line(ctx, O.x, O.y, ax.X(1), O.y, PAL.ink, 4);
    line(ctx, O.x, O.y, P.x, P.y, PAL.ink, 4);
    drop(ctx, P.x, P.y, P.x, O.y);
    const N = Math.max(2, Math.ceil(Math.abs(phi) / 0.05));
    const pts = Array.from({ length: N + 1 }, (_, i) => { const f = (phi * i) / N, q = rho(f) * U; return [O.x + q * Math.cos(f), O.y - q * Math.sin(f)]; });
    if (Math.abs(phi) > 0.05) {
      ctx.save(); ctx.strokeStyle = ac; ctx.lineWidth = 3; ctx.beginPath(); pts.slice(0, -3).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
      const [a1, a2] = [pts[Math.max(0, pts.length - 5)], pts[pts.length - 1]];
      arrow(ctx, a1[0], a1[1], a2[0], a2[1], ac, 3);
      const m = pts[Math.floor(pts.length * 0.35)];
      if (k >= 1) text(ctx, `θ = ${part.name}`, m[0] + (m[0] > O.x ? 16 : -16), m[1] + (m[1] > O.y ? 18 : -18), ac, { size: 20, weight: 600, align: m[0] > O.x ? 'left' : 'right', bg: PAL.panel });
    }
    dot(ctx, O.x, O.y, PAL.ink, true, 6);
    dot(ctx, P.x, P.y, pc, true, 10);
    if (k >= 1) label(ctx, part.pt, P.x, P.y, { side: part.side, gap: 26, color: pc });
    ro.set(part.ro, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 1.33, a faithful copy: a right triangle inscribed in a circle of radius H. */
(function () {
  const d = sim('fig-inscribed-triangle', 470);
  function draw() {
    const { ctx } = begin(d.c);
    const ac = C('angle'), CX = 700, CY = 245, R = 175, t = 40 * DEG, P = { x: CX + R * Math.cos(t), y: CY - R * Math.sin(t) };
    circle(ctx, CX, CY, R, PAL.ink, 3);
    arrow(ctx, CX - R - 50, CY, CX + R + 60, CY, PAL.muted, 3);
    arrow(ctx, CX, CY + R + 25, CX, CY - R - 35, PAL.muted, 3);
    text(ctx, 'x', CX + R + 74, CY + 4, PAL.ink, { size: 22, weight: 600, align: 'left' });
    text(ctx, 'y', CX - 14, CY - R - 34, PAL.ink, { size: 22, weight: 600, align: 'right' });
    line(ctx, P.x, P.y, CX, P.y, alpha(PAL.ink, 0.4), 2.5, [6, 8]);
    line(ctx, CX, CY, P.x, P.y, PAL.ink, 4); line(ctx, P.x, P.y, P.x, CY, PAL.ink, 4); line(ctx, CX, CY, P.x, CY, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(P.x - 22, CY - 22, 22, 22); ctx.restore();
    angleArc(ctx, { x: CX, y: CY }, 44, 0, t, 'θ', undefined, ac);
    dot(ctx, CX, CY, PAL.ink, true, 7); dot(ctx, P.x, P.y, PAL.ink, true, 8);
    text(ctx, 'H', (CX + P.x) / 2 - 18, (CY + P.y) / 2 - 16, PAL.ink, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'O', P.x + 16, (CY + P.y) / 2, PAL.ink, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'A', (CX + P.x) / 2, CY + 28, PAL.ink, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
  }
  still(d, draw);
})();

/* Example 1.24: the ramp from the ground to the top of a 4 ft staircase, at the angle on the slider.
   The scale is fixed at 33 units per foot, which fits the longest ramp, at 8°, beside the staircase. */
(function () {
  const d = sim('sim-ramp', 430);
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 8, max: 45, step: 0.5, value: 10, unit: '°', dec: 1, aria: 'angle between the ground and the ramp', specials: [{ at: 10 }] });
  const ro = readout(d);
  const K = 33, GROUND = 360, TOP = GROUND - 4 * K, XS = 1100;
  function draw() {
    const { ctx } = begin(d.c);
    const ac = C('angle'), deg = th.v, t = deg * DEG, len = 4 / Math.sin(t), run = 4 / Math.tan(t), foot = XS - run * K;
    headline(ctx, `At ${fmt(deg, 1)}° the ramp must be ${fmt(len, 2)} ft long.`);
    line(ctx, 60, GROUND, 1340, GROUND, PAL.muted, 3);
    /* the staircase: four steps of one foot down to the right */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(XS, GROUND); ctx.lineTo(XS, TOP);
    for (let i = 0; i < 4; i++) { ctx.lineTo(XS + (i + 1) * K * 1.2, TOP + i * K); ctx.lineTo(XS + (i + 1) * K * 1.2, TOP + (i + 1) * K); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, foot, GROUND, XS, TOP, PAL.ink, 8);
    angleArc(ctx, { x: foot, y: GROUND }, 70, 0, t, '', undefined, ac);
    text(ctx, `${fmt(deg, 1)}°`, foot + 70, GROUND + 26, ac, { size: 20, weight: 600, align: 'center' });
    line(ctx, XS + K * 1.2, TOP, XS + 4 * K * 1.2 + 34, TOP, alpha(PAL.ink, 0.4), 2, [4, 6]);
    vbracket(ctx, XS + 4 * K * 1.2 + 24, TOP, GROUND, PAL.ink, '4 ft', 1);
    const mx = (foot + XS) / 2, my = (GROUND + TOP) / 2;
    text(ctx, `x = ${fmt(len, 2)} ft`, mx - 14 * Math.sin(t), my - 30, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    ro.set(`\\sin\\ktheta = \\frac{4}{x}:\\quad x = \\frac{4}{\\sin ${n(deg, 1)}^{\\circ}} = ${n(len, 2)}\\ \\text{ft}`);
  }
  still(d, draw);
})();

/* Example 1.25: each equation as one curve, left side minus right side, its zeros the solutions.
   Axes fixed at −2π to 2π by −2 to 3, which hold (a) whole and (b) away from its poles. */
(function () {
  const d = sim('sim-trig-equation', 560);
  const EQ = {
    a: { f: (t) => 1 + Math.cos(2 * t) - Math.cos(t), L: (t) => 1 + Math.cos(2 * t), R: (t) => Math.cos(t), l: '1 + \\cos(2\\ktheta)', r: '\\cos\\ktheta', yl: '1 + cos 2θ − cos θ', poles: [],
      fam: [{ at: (k) => PI / 2 + k * PI, name: 'θ = π/2 + nπ, where cos θ = 0' }, { at: (k) => PI / 3 + 2 * k * PI, name: 'θ = π/3 + 2nπ' }, { at: (k) => -PI / 3 + 2 * k * PI, name: 'θ = −π/3 + 2nπ' }] },
    b: { f: (t) => (Math.abs(Math.cos(t)) < 1e-12 ? NaN : Math.sin(2 * t) - Math.tan(t)), L: (t) => Math.sin(2 * t), R: (t) => (Math.abs(Math.cos(t)) < 1e-9 ? NaN : Math.tan(t)), l: '\\sin(2\\ktheta)', r: '\\tan\\ktheta', yl: 'sin 2θ − tan θ',
      poles: [-1.5 * PI, -0.5 * PI, 0.5 * PI, 1.5 * PI], fam: [{ at: (k) => k * PI, name: 'θ = nπ, where sin θ = 0' }, { at: (k) => PI / 4 + (k * PI) / 2, name: 'θ = π/4 + nπ/2, where cos²θ = 1/2' }] },
  };
  const sols = (e) => e.fam.flatMap((fm, j) => Array.from({ length: 17 }, (_, i) => fm.at(i - 8)).filter((v) => v >= -2 * PI - 1e-9 && v <= 2 * PI + 1e-9).map((v) => ({ v, j })));
  const pick = choice(d.controls, { label: '', options: [{ value: 'a', label: 'a. 1 + cos(2θ) = cos θ' }, { value: 'b', label: 'b. sin(2θ) = tan θ' }], value: 'a', aria: 'which equation' });
  const all = () => sols(EQ[pick.value]).map((s) => s.v).sort((p, q) => p - q);
  const th = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: -2 * PI, max: 2 * PI, step: 0.01, value: PI / 3, unit: 'rad', dec: 2, aria: 'angle in radians',
    specials: Array.from({ length: 13 }, (_, i) => ({ at: () => all()[i] ?? null })) });
  const P = drag(d, { x: th, y: (t) => EQ[pick.value].f(t) });
  const ro = readout(d);
  const BOX = { l: 150, r: 1290, t: 160, b: 480 };
  /* a solution's name in multiples of π/12, the grid every solution here lies on */
  const piName = (v) => {
    const k = Math.round(v / (PI / 12)); if (k === 0) return '0';
    const g = (p, q) => (q ? g(q, p % q) : p), c = g(Math.abs(k), 12), num = k / c, den = 12 / c, s = num < 0 ? '−' : '', a = Math.abs(num);
    return `${s}${a === 1 ? '' : a}π${den === 1 ? '' : `/${den}`}`;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), e = EQ[pick.value], t = th.v;
    const ax = axes(ctx, BOX, [-2 * PI, 2 * PI], [-2, 3], { xl: 'θ', yl: e.yl, yc: fc, nx: 8, ny: 5, fx: piTick });
    [...new Set([pick.from, pick.value])].forEach((v) => pick.only(ctx, v, () => {
      const g = EQ[v];
      plot(ctx, ax, g.f, fc, { poles: g.poles });
      sols(g).forEach((s) => dot(ctx, ax.X(s.v), ax.Y(0), F.cat(s.j), true, 9));
      g.fam.forEach((fm, j) => { const x = BOX.l + 20 + j * 380; dot(ctx, x, 100, F.cat(j), true, 8); text(ctx, fm.name, x + 16, 100, PAL.ink, { size: 18, align: 'left' }); });
    }));
    const L = e.L(t), Rv = e.R(t), ok = Number.isFinite(Rv), hit = sols(e).find((s) => Math.abs(s.v - t) < 0.006);
    if (ok) drop(ctx, ax.X(t), ax.Y(e.f(t)), ax.X(t), ax.Y(0));
    P.draw(ctx, ax, pc);
    const name = hit ? piName(hit.v) : fmt(t, 2);
    headline(ctx, !ok ? `$\\ktheta = ${name}$: $\\tan\\ktheta$ is undefined there, so $\\ktheta$ is no solution.`
      : hit ? `$\\ktheta = ${name}$ is a solution: both sides equal ${fmt(L, 2)}.` : `$\\ktheta = ${name}$: the two sides differ by ${fmt(Math.abs(L - Rv), 2)}.`);
    ro.set(!ok ? `${e.l} = ${n(L)},\\qquad ${e.r}\\ \\text{is undefined}`
      : `${e.l} = ${n(L)},\\qquad ${e.r} = ${n(Rv)}\\qquad ${hit ? '\\text{equal}' : '\\text{not equal}'}`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Figure 1.34: the six trigonometric functions in the book's six panels, each with a point at x and its
   repeat at x + p. Every panel is the book's −2π to 2π by −2 to 2. */
(function () {
  const d = sim('sim-periodic', 650);
  const sec = (x) => 1 / Math.cos(x), csc = (x) => 1 / Math.sin(x), cot = (x) => Math.cos(x) / Math.sin(x);
  const H2 = [-1.5 * PI, -0.5 * PI, 0.5 * PI, 1.5 * PI], W = [-2 * PI, -PI, 0, PI, 2 * PI];
  const FNS = [
    { f: Math.sin, name: 'f(x) = sin x', p: 2 * PI, poles: [] }, { f: Math.cos, name: 'f(x) = cos x', p: 2 * PI, poles: [] },
    { f: csc, name: 'f(x) = csc x', p: 2 * PI, poles: W }, { f: sec, name: 'f(x) = sec x', p: 2 * PI, poles: H2 },
    { f: Math.tan, name: 'f(x) = tan x', p: PI, poles: H2 }, { f: cot, name: 'f(x) = cot x', p: PI, poles: W },
  ];
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -2 * PI, max: 0, step: 0.01, value: -2.5, unit: '', dec: 2, aria: 'x' });
  const ro = readout(d);
  const boxOf = (i) => { const col = Math.floor(i / 2), row = i % 2, l = 110 + col * 440; return { l, r: l + 330, t: row ? 400 : 120, b: row ? 590 : 310 }; };
  const DRAGS = FNS.map((g) => drag(d, { x: xs, y: (x) => (Math.abs(x) < 1e-9 && g.poles.includes(0) ? NaN : g.f(x)) }));
  const val = (g, x) => { const y = g.f(x); return Number.isFinite(y) && Math.abs(y) < 1e6 ? y : null; };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), x = xs.v;
    headline(ctx, `x = ${fmt(x, 2)},  x + π = ${fmt(x + PI, 2)},  x + 2π = ${fmt(x + 2 * PI, 2)}`);
    FNS.forEach((g, i) => {
      const ax = axes(ctx, boxOf(i), [-2 * PI, 2 * PI], [-2, 2], { yl: g.name, yc: fc, nx: 4, ny: 4, fx: piTick });
      plot(ctx, ax, g.f, fc, { poles: g.poles, w: 4 });
      const y = val(g, x);
      if (y === null || Math.abs(y) > 2) { DRAGS[i].draw(ctx, ax, pc); return; }
      const x1 = ax.X(x), x2 = ax.X(x + g.p), yy = ax.Y(y);
      line(ctx, x1, yy, x2, yy, alpha(PAL.ink, 0.45), 2, [6, 6]);
      const above = y < 1;
      hbracket(ctx, x1, x2, yy + (above ? -22 : 22), PAL.ink, g.p === PI ? 'p = π' : 'p = 2π', { side: above ? 'above' : 'below', size: 18 });
      dot(ctx, x2, yy, pc, false, 8);
      DRAGS[i].draw(ctx, ax, pc);
    });
    const s = Math.sin(x), tv = Math.abs(Math.cos(x)) < 1e-9 ? null : Math.tan(x);
    ro.set(`\\sin(${n(x + 2 * PI)}) = \\sin(${n(x)}) = ${n(s)},\\qquad \\tan(${n(x + PI)}) = \\tan(${n(x)}) ${tv === null ? '\\ \\text{undefined}' : `= ${n(tv)}`}`);
  }
  still(d, draw);
})();

/* Figure 1.35: f(x) = A cos(B(x − α)) + C, or with sin, with the book's labels on the curve.
   Axes fixed at −π to 3π by −6 to 6, the reach of C ± |A| with room for the brackets, and two periods at B = 1. */
(function () {
  const d = sim('sim-general-cosine', 560);
  const kind = choice(d.controls, { label: '', options: [{ value: 'cos', label: 'cos' }, { value: 'sin', label: 'sin' }], value: 'cos', aria: 'cosine or sine' });
  const A = ctl(d.controls, { label: '\\kA', cls: '', key: 'A', min: -2.5, max: 2.5, step: 0.1, value: 1.5, unit: '', dec: 1 });
  const B = ctl(d.controls, { label: '\\kB', cls: '', key: 'B', min: 1, max: 4, step: 0.1, value: 2, unit: '', dec: 1 });
  const al = ctl(d.controls, { label: '\\alpha', cls: '', key: 'alpha', min: -3.14, max: 3.14, step: 0.01, value: 1.57, unit: '', dec: 2 });
  const Cc = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: -2, max: 2.5, step: 0.1, value: 2, unit: '', dec: 1 });
  const ro = readout(d);
  const BOX = { l: 150, r: 1290, t: 70, b: 470 }, XR = [-PI, 3 * PI];
  const fOf = (v) => (x) => A.v * (v === 'cos' ? Math.cos : Math.sin)(B.v * (x - al.v)) + Cc.v;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), a = A.v, b = B.v, alv = al.v, c = Cc.v, per = (2 * PI) / b;
    const ax = axes(ctx, BOX, XR, [-6, 6], { xl: 'x', yl: 'y', nx: 8, ny: 12, fx: piTick });
    line(ctx, BOX.l, ax.Y(c), BOX.r, ax.Y(c), alpha(PAL.ink, 0.4), 2, [10, 10]);
    kind.curve(ctx, fOf, XR[0], XR[1], ax.X, ax.Y, fc, 5, 400);
    /* the crest the labels hang from: x = α for cosine, a quarter period on for sine, at a maximum when A > 0 */
    const top = c + Math.abs(a), xc0 = alv + kind.mix((v) => (v === 'cos' ? 0 : per / 4)) + (a < 0 ? per / 2 : 0);
    /* the crest nearest the middle of the axes, from π/2 on, clear of the shift brackets at the left */
    const xc = xc0 + Math.ceil((PI / 2 - xc0) / per) * per;
    const xa = xc + per <= XR[1] ? xc : xc - per;
    if (Math.abs(a) > 0.05) { vbracket(ctx, ax.X(xc), ax.Y(c), ax.Y(top), PAL.ink); label(ctx, 'amplitude |A|', ax.X(xc) + 6, (ax.Y(c) + ax.Y(top)) / 2, { side: 'right', gap: 14, size: 19 }); }
    hbracket(ctx, ax.X(xa), ax.X(xa + per), ax.Y(top + 0.45), PAL.ink, 'period 2π/|B|', { size: 19 });
    if (Math.abs(c) > 0.05) { vbracket(ctx, ax.X(-PI) + 34, ax.Y(0), ax.Y(c), PAL.ink); label(ctx, 'vertical shift C', ax.X(-PI) + 40, (ax.Y(0) + ax.Y(c)) / 2, { side: 'right', gap: 14, size: 19 }); }
    if (Math.abs(alv) > 0.05) hbracket(ctx, ax.X(0), ax.X(alv), ax.Y(c - Math.abs(a) - 0.45), PAL.ink, 'horizontal shift α', { side: 'below', size: 19 });
    const fn = kind.value === 'cos' ? '\\cos' : '\\sin', inner = `x ${alv < 0 ? '+' : '-'} ${n(Math.abs(alv))}`;
    ro.set(`\\kf(x) = ${n(a, 1)}${fn}(${n(b, 1)}(${inner})) ${c < 0 ? '-' : '+'} ${n(Math.abs(c), 1)},\\qquad |\\kA| = ${n(Math.abs(a), 1)},\\quad \\frac{2\\pi}{|\\kB|} = ${n(per)}`, undefined, { form: kind.value });
  }
  still(d, draw);
})();

/* Figure 1.36: the daylight model h(t) = 3.7 sin(2π/365 (t − 80.5)) + 12, on the book's 0 to 365 days by 0 to 20 hours. */
(function () {
  const d = sim('sim-daylight', 520);
  const h = (t) => 3.7 * Math.sin(((2 * PI) / 365) * (t - 80.5)) + 12;
  const MONTHS = [['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]];
  const dateOf = (day) => { let left = Math.max(1, Math.round(day)); for (const [m, len] of MONTHS) { if (left <= len) return `${m} ${left}`; left -= len; } return 'December 31'; };
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: 1, max: 365, step: 1, value: 172, unit: '', dec: 0, aria: 'day of the year', specials: [{ at: 172 }, { at: 355 }] });
  const P = drag(d, { x: ts, y: h });
  const ro = readout(d);
  const BOX = { l: 170, r: 1290, t: 90, b: 430 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), t = ts.v, y = h(t);
    headline(ctx, `Day ${t}, ${dateOf(t)}: ${fmt(y, 2)} hours of daylight`);
    const ax = axes(ctx, BOX, [0, 365], [0, 20], { xl: 't, day of the year', yl: 'h, number of daylight hours', yc: fc, nx: 8, ny: 4, nice: true });
    line(ctx, BOX.l, ax.Y(12), BOX.r, ax.Y(12), alpha(PAL.ink, 0.4), 2, [10, 10]);
    plot(ctx, ax, h, fc, { x: [0, 365] });
    drop(ctx, ax.X(t), ax.Y(y), ax.X(t), ax.Y(0)); drop(ctx, ax.X(t), ax.Y(y), ax.X(0), ax.Y(y));
    P.draw(ctx, ax, pc);
    ro.set(`\\kh(${t}) = 3.7\\sin\\left(\\frac{2\\pi}{365}(${t} - 80.5)\\right) + 12 = ${n(y)}`);
  }
  still(d, draw);
})();

/* Example 1.27: the four steps from sin x to 3 sin(2(x − π/4)) + 1, on the book's −3π/2 to 2π by −3 to 5. */
(function () {
  const d = sim('sim-transformed-sine', 520);
  const S = {
    s0: { f: (x) => Math.sin(x), x0: 0, mid: 0, amp: 1, per: 2 * PI, ro: 'y = \\sin x,\\qquad \\text{period}\\ 2\\pi', head: 'Start from $y = \\sin x$, whose period is $2\\pi$.' },
    s1: { f: (x) => Math.sin(2 * x), x0: 0, mid: 0, amp: 1, per: PI, ro: 'y = \\sin(2x),\\qquad \\text{period}\\ \\pi', head: 'Compress horizontally by a factor of 2: the period becomes $\\pi$.' },
    s2: { f: (x) => Math.sin(2 * (x - PI / 4)), x0: PI / 4, mid: 0, amp: 1, per: PI, ro: 'y = \\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right),\\qquad \\text{period}\\ \\pi', head: 'Shift right by $\\pi/4$: the zero at $0$ moves to $\\pi/4$.' },
    s3: { f: (x) => 3 * Math.sin(2 * (x - PI / 4)), x0: PI / 4, mid: 0, amp: 3, per: PI, ro: 'y = 3\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right),\\qquad \\text{period}\\ \\pi', head: 'Stretch vertically by a factor of 3: the amplitude becomes 3.' },
    s4: { f: (x) => 3 * Math.sin(2 * (x - PI / 4)) + 1, x0: PI / 4, mid: 1, amp: 3, per: PI, ro: '\\kf(x) = 3\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right) + 1,\\qquad \\text{period}\\ \\pi', head: 'Shift up by 1 unit: the graph of $\\kf$, centered on the line $y = 1$.' },
  };
  const pick = choice(d.controls, { label: '', options: [{ value: 's0', label: 'y = sin x' }, { value: 's1', label: 'compress by 2' }, { value: 's2', label: 'shift π/4 right' }, { value: 's3', label: 'stretch by 3' }, { value: 's4', label: 'shift 1 up' }], value: 's4', ms: 1200, aria: 'step of the transformation' });
  const ro = readout(d);
  const BOX = { l: 170, r: 1290, t: 90, b: 450 }, XR = [-1.5 * PI, 2 * PI];
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), pc = C('point'), s = S[pick.value];
    headline(ctx, s.head);
    const ax = axes(ctx, BOX, XR, [-3, 5], { xl: 'x', yl: 'y', nx: 7, ny: 8, fx: piTick });
    plot(ctx, ax, Math.sin, alpha(fc, 0.25), { w: 3 });
    pick.curve(ctx, (v) => S[v].f, XR[0], XR[1], ax.X, ax.Y, fc, 5, 400);
    const x0 = pick.mix((v) => S[v].x0), mid = pick.mix((v) => S[v].mid), amp = pick.mix((v) => S[v].amp), per = pick.mix((v) => S[v].per);
    line(ctx, BOX.l, ax.Y(mid), BOX.r, ax.Y(mid), alpha(PAL.ink, 0.35), 2, [10, 10]);
    hbracket(ctx, ax.X(x0), ax.X(x0 + per), ax.Y(mid + amp + 0.5), PAL.ink, per > 4 ? 'period 2π' : 'period π', { size: 19 });
    dot(ctx, ax.X(x0), ax.Y(mid), pc, true, 9);
    hits = [{ x: ax.X(x0), y: ax.Y(mid), r: 18, name: 'where the curve rises through its middle line' }];
    ro.set(s.ro, undefined, { form: pick.value });
  }
  still(d, draw);
})();
};
