/* Figures for section 16.4 Green's Theorem. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, select, cycle, begin, axes, arrow, dot, line, text, register, tex, fmt, hover, drag } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
const fit = (xr, yr, t, h, cx = 700) => { const s = h / (yr[1] - yr[0]), w = s * (xr[1] - xr[0]); return { l: cx - w / 2, r: cx + w / 2, t, b: t + h }; };
const ticks = (hi, dec = 0) => (v) => (Math.abs(v - hi) < 1e-9 ? '' : fmt(v, dec).replace('-', '−'));
function poly(ctx, ax, pts, color, w, fill) {
  ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(ax.X(p[0]), ax.Y(p[1])) : ctx.moveTo(ax.X(p[0]), ax.Y(p[1]))));
  if (fill) { ctx.fillStyle = fill; ctx.fill('evenodd'); }
  if (color) { ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke(); }
  ctx.restore();
}

/* The regions of the two Green's figures, each in width w and height h about the centre (cx, cy): its boundary loops (t in [0, 1],
   the outer one counterclockwise, an inner one clockwise) and a map of the unit square onto it with its Jacobian. */
const SHAPES = {
  rect: { loops: (cx, cy, w, h) => [(t) => { const s = 4 * t, k = Math.floor(Math.min(s, 3.999)), u = s - k, X0 = cx - w / 2, Y0 = cy - h / 2;
      return [[X0 + w * u, Y0], [X0 + w, Y0 + h * u], [X0 + w - w * u, Y0 + h], [X0, Y0 + h - h * u]][k]; }],
    map: (cx, cy, w, h) => (s, t) => [cx - w / 2 + w * s, cy - h / 2 + h * t, w * h] },
  ellipse: { loops: (cx, cy, w, h) => [(t) => [cx + (w / 2) * Math.cos(TAU * t), cy + (h / 2) * Math.sin(TAU * t)]],
    map: (cx, cy, w, h) => (s, t) => [cx + (w / 2) * s * Math.cos(TAU * t), cy + (h / 2) * s * Math.sin(TAU * t), (w / 2) * (h / 2) * s * TAU] },
  tri: { loops: (cx, cy, w, h) => { const A = [cx - w / 3, cy - h / 3], B = [A[0] + w, A[1]], Cc = [A[0], A[1] + h];
      return [(t) => { const s = 3 * t, k = Math.floor(Math.min(s, 2.999)), u = s - k, P = [A, B, Cc][k], Q = [B, Cc, A][k]; return [P[0] + (Q[0] - P[0]) * u, P[1] + (Q[1] - P[1]) * u]; }]; },
    map: (cx, cy, w, h) => (s, t) => [cx - w / 3 + w * s, cy - h / 3 + h * (1 - s) * t, w * h * (1 - s)] },
  ring: { loops: (cx, cy, w, h) => { const R = w / 2, r = Math.min(h, w * 0.9) / 2;
      return [(t) => [cx + R * Math.cos(TAU * t), cy + R * Math.sin(TAU * t)], (t) => [cx + r * Math.cos(-TAU * t), cy + r * Math.sin(-TAU * t)]]; },
    map: (cx, cy, w, h) => { const R = w / 2, r = Math.min(h, w * 0.9) / 2; return (s, t) => { const q = r + (R - r) * s; return [cx + q * Math.cos(TAU * t), cy + q * Math.sin(TAU * t), (R - r) * q * TAU]; }; } },
};
/* ∮ of the 1-form g(p, dp) round a loop by Simpson's rule */
function loopInt(r, g, m = 600) {
  const h = 1 / m, f = (t) => { const a = r(Math.min(1, t + 1e-6)), b = r(Math.max(0, t - 1e-6)), dt = Math.min(1, t + 1e-6) - Math.max(0, t - 1e-6); return g(r(t), [(a[0] - b[0]) / dt, (a[1] - b[1]) / dt]); };
  let s = 0; for (let i = 0; i < m; i++) s += (f(i * h) + 4 * f((i + 0.5) * h) + f((i + 1) * h)) / 6; return s * h;
}
function areaInt(map, g, n = 70) {
  let s = 0; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const [x, y, J] = map((i + 0.5) / n, (j + 0.5) / n); s += g(x, y) * J; } return s / (n * n);
}
const SHAPE_OPTS = [{ value: 'rect', label: 'rectangle' }, { value: 'ellipse', label: 'ellipse' }, { value: 'tri', label: 'triangle' }, { value: 'ring', label: 'annulus' }];

/* Green's theorem with the region D and its counterclockwise boundary C (inner circle clockwise for the annulus) drawn over
   the field: o.form 'circ' compares ∮ P dx + Q dy with ∬ (Q_x − P_y) dA, 'flux' ∮ F · N ds with ∬ (P_x + Q_y) dA.
   Axes −4 to 5 by −3 to 6, one scale; sizes w, h 0.5 to 6; the centre (cx, cy) dragged. */
function greens(id, o) {
  const d = sim(id, 640);
  const preset = select(d.controls, { label: 'F', key: 'preset', options: o.presets.map((p, i) => ({ value: String(i), label: p.label })), value: '0', ms: 0, onInput: () => apply() });
  const shape = choice(d.controls, { label: 'D', key: 'shape', options: SHAPE_OPTS, value: o.presets[0].shape, ms: 0 });
  const p0 = o.presets[0];
  const cxs = ctl(d.controls, { label: 'x₀', cls: '', key: 'cx', min: -3, max: 4, step: 0.05, value: p0.c[0], unit: '', dec: 2 });
  const cys = ctl(d.controls, { label: 'y₀', cls: '', key: 'cy', min: -2, max: 5, step: 0.05, value: p0.c[1], unit: '', dec: 2 });
  const ws = ctl(d.controls, { label: 'w', cls: '', key: 'w', min: 0.5, max: 6, step: 0.05, value: p0.wh[0], unit: '', dec: 2 });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: 0.5, max: 6, step: 0.05, value: p0.wh[1], unit: '', dec: 2 });
  const P = drag(d, { x: cxs, y: cys });
  function apply() { const p = o.presets[+preset.value]; shape.set(p.shape); cxs.drive(p.c[0]); cys.drive(p.c[1]); ws.drive(p.wh[0]); hs.drive(p.wh[1]); }
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), p = o.presets[+preset.value], S = SHAPES[shape.value], cc = C('curve'), rc = C('region'), vf = C('vector-field');
    const cx = cxs.v, cy = cys.v, w = ws.v, h = hs.v;
    const ax = axes(ctx, fit([-4, 5], [-3, 6], 30, 560, 700), [-4, 5], [-3, 6], { xl: 'x', yl: 'y', nx: 9, ny: 9, fx: ticks(5), fy: ticks(6) });
    const loops = S.loops(cx, cy, w, h);
    const pts = loops.flatMap((r) => Array.from({ length: 241 }, (_, i) => r(i / 240)));
    poly(ctx, ax, pts, null, 0, alpha(rc, 0.22));
    SP.field2(ctx, ax, p.F, alpha(vf, 0.5), { n: [9, 9], w: 2, scale: p.scale });
    loops.forEach((r) => {
      poly(ctx, ax, Array.from({ length: 241 }, (_, i) => r(i / 240)), cc, 5);
      [0.12, 0.62].forEach((t) => { const a = r(t), b = r(t + 0.01); const ux = ax.X(b[0]) - ax.X(a[0]), uy = ax.Y(b[1]) - ax.Y(a[1]), L = Math.hypot(ux, uy) || 1;
        arrow(ctx, ax.X(a[0]) - (ux / L) * 12, ax.Y(a[1]) - (uy / L) * 12, ax.X(a[0]) + (ux / L) * 12, ax.Y(a[1]) + (uy / L) * 12, cc, 5); });
    });
    const q = loops[0](0.32);
    text(ctx, '$\\kC$', ax.X(q[0]) + 22, ax.Y(q[1]) - 14, cc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '$\\kD$', ax.X(cx), ax.Y(cy) + 8, rc, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    const c = P.draw(ctx, ax, C('point'));
    hits.length = 0; if (c) hits.push({ x: c.x, y: c.y, r: 16, name: `the centre of D, (${n2(cx)}, ${n2(cy)})` });
    const bd = loops.reduce((s, r) => s + loopInt(r, o.form === 'circ' ? (pt, v) => { const f = p.F(pt); return f[0] * v[0] + f[1] * v[1]; } : (pt, v) => { const f = p.F(pt); return f[0] * v[1] - f[1] * v[0]; }), 0);
    const inner = areaInt(S.map(cx, cy, w, h), o.form === 'circ' ? p.curl : p.div);
    const hole = p.hole && pts.length && (() => { let inside = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const [xi, yi] = pts[i], [xj, yj] = pts[j]; if ((yi > 0) !== (yj > 0) && 0 < ((xj - xi) * (0 - yi)) / (yj - yi) + xi) inside = !inside; } return inside; })();
    const eq = Math.abs(bd - inner) < 0.02 * Math.max(1, Math.abs(bd)) ? '=' : '\\ne';
    const lhs = o.form === 'circ' ? '\\oint_{\\kC}\\kP\\,dx+\\kQ\\,dy' : '\\oint_{\\kC}\\kvecF\\cdot\\kvecN\\,ds';
    tex(d.readout, `${lhs}=${hue('integral', n2(bd))}\\;${eq}\\;${hue('integral', n2(inner))}=\\iint_{\\kD}${o.form === 'circ' ? p.ctex : p.dtex}\\,dA` +
      (hole ? `,\\quad (0,0)\\;\\text{inside}\\;\\kC\\;\\text{is outside the domain of}\\;\\kvecF` : ''));
  }
  still(d, draw);
}

/* Figure 16.33 + 16.35 + 16.36 + 16.37: the circulation form, the book's regions as presets */
greens('sim-greens-circulation', { form: 'circ', presets: [
  { label: '⟨x²y, y − 3⟩', F: ([x, y]) => [x * x * y, y - 3], curl: (x) => -x * x, ctex: '(-x^{2})', shape: 'rect', c: [2.5, 3], wh: [3, 4] },
  { label: '⟨y + sin x, eʸ − x⟩', F: ([x, y]) => [y + Math.sin(x), Math.exp(y) - x], curl: () => -2, ctex: '(-2)', shape: 'ellipse', c: [0, 0], wh: [4, 4] },
  { label: '⟨−y/2, x/2⟩', F: ([x, y]) => [-y / 2, x / 2], curl: () => 1, ctex: '1', shape: 'ellipse', c: [0.5, 1.5], wh: [6, 4] },
  { label: '⟨sin x − y³/3, x³/3 + sin y⟩', F: ([x, y]) => [Math.sin(x) - y ** 3 / 3, x ** 3 / 3 + Math.sin(y)], curl: (x, y) => x * x + y * y, ctex: '(x^{2}+y^{2})', shape: 'ring', c: [0, 0], wh: [4, 2] },
  { label: '⟨y, −x⟩/(x² + y²)', F: ([x, y]) => { const q = x * x + y * y; return [y / q, -x / q]; }, curl: () => 0, ctex: '0', shape: 'ellipse', c: [2, 2], wh: [2.5, 2], hole: true, scale: 0.35 },
] });

/* Figure 16.38 + 16.39 + 16.40 + 16.41: the flux form */
greens('sim-greens-flux', { form: 'flux', presets: [
  { label: '⟨x, y⟩', F: ([x, y]) => [x, y], div: () => 2, dtex: '2', shape: 'ellipse', c: [0, 0], wh: [4, 4] },
  { label: '⟨x² + eʸ, x + y⟩', F: ([x, y]) => [x * x + Math.exp(y), x + y], div: (x) => 2 * x + 1, dtex: '(2x+1)', shape: 'tri', c: [1 / 3, 1], wh: [1, 3] },
  { label: '⟨5x + y, x + 3y⟩', F: ([x, y]) => [5 * x + y, x + 3 * y], div: () => 8, dtex: '8', shape: 'rect', c: [0, 0.5], wh: [2, 5] },
  { label: '⟨y, −x⟩', F: ([x, y]) => [y, -x], div: () => 0, dtex: '0', shape: 'ellipse', c: [1, 1.5], wh: [4, 3] },
] });

/* Figure 16.42: the rotation field F = ⟨y, −x⟩ and its stream function g = (x² + y²)/2: at the dragged point F is tangent to the
   level curve of g and ∇g perpendicular to it. Axes −3 to 3, one scale. */
(function () {
  const d = sim('sim-stream-function', 620);
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -3, max: 3, step: 0.05, value: 1.5, unit: '', dec: 2 });
  const bs = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: -3, max: 3, step: 0.05, value: 1, unit: '', dec: 2 });
  const P = drag(d, { x: as, y: bs });
  const hits = []; hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), vf = C('vector-field'), gc = C('function');
    const ax = axes(ctx, fit([-3, 3], [-3, 3], 30, 560), [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6, fx: ticks(3), fy: ticks(3) });
    [1, 2, 3].forEach((R) => poly(ctx, ax, Array.from({ length: 121 }, (_, i) => [R * Math.cos((TAU * i) / 120), R * Math.sin((TAU * i) / 120)]), alpha(gc, 0.45), 2.5));
    SP.field2(ctx, ax, ([x, y]) => [y, -x], alpha(vf, 0.45), { n: [8, 8], w: 2, scale: 0.18 });
    const a = as.v, b = bs.v, R = Math.hypot(a, b), k = 0.4;
    if (R > 1e-3) poly(ctx, ax, Array.from({ length: 121 }, (_, i) => [R * Math.cos((TAU * i) / 120), R * Math.sin((TAU * i) / 120)]), gc, 4);
    const p = P.draw(ctx, ax, C('point'));
    hits.length = 0;
    if (p && R > 1e-3) {
      arrow(ctx, p.x, p.y, ax.X(a + b * k), ax.Y(b - a * k), vf, 5);
      line(ctx, p.x, p.y, ax.X(a + a * k), ax.Y(b + b * k), vf, 4, [10, 8]); arrow(ctx, ax.X(a + a * k * 0.85), ax.Y(b + b * k * 0.85), ax.X(a + a * k), ax.Y(b + b * k), vf, 4);
      text(ctx, '$\\kvecF$', ax.X(a + b * k * 1.25), ax.Y(b - a * k * 1.25) + 8, vf, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      text(ctx, '$\\nabla g$', ax.X(a + a * k * 1.3), ax.Y(b + b * k * 1.3) + 8, vf, { size: 24, weight: 600, align: 'center', tex: true, bg: PAL.panel });
      hits.push({ x: ax.X(-a), y: ax.Y(-b), r: 14, name: `the level curve g = ${n2(R * R / 2)}` });
    }
    tex(d.readout, `\\kvecF(a,b)\\cdot\\nabla \\kg(a,b)=\\langle ${n2(b)},${n2(-a)}\\rangle\\cdot\\langle ${n2(a)},${n2(b)}\\rangle=0,\\quad \\kg(a,b)=\\tfrac{a^{2}+b^{2}}{2}=${hue('function', n2(R * R / 2))}`);
  }
  still(d, draw);
})();

/* Sim: a rolling planimeter traces the ellipse with centre (2, 1) and semi-axes 0.8, 0.6 in 6 s; the pivot rolls on the y-axis,
   Y = y − √(L² − x²), tracer arm L = 3, wheel at l = 1 from the pivot. Axes −0.5 to 3.5 by −3 to 2.5, one scale. */
(function () {
  const d = sim('sim-planimeter', 600);
  const L = 3, l = 1, xc = 2, yc = 1, a = 0.8, b = 0.6, area = Math.PI * a * b;
  const tr = (t) => [xc + a * Math.cos(TAU * t), yc + b * Math.sin(TAU * t)];
  const Yof = ([x, y]) => y - Math.sqrt(L * L - x * x), thOf = ([x, y]) => Math.atan2(y - Yof([x, y]), x);
  /* the wheel's roll from t = 0 to t, (x/L) dY + l dθ summed over small steps */
  const roll = (t, m = 400) => { let s = 0, p = tr(0); for (let i = 1; i <= m; i++) { const q = tr((t * i) / m); s += (p[0] / L) * (Yof(q) - Yof(p)) + l * (thOf(q) - thOf(p)); p = q; } return s; };
  const cy = cycle(() => 6, 1.2);
  function draw() {
    const { ctx } = begin(d.c), t = Math.min(1, cy.now() / 6), cc = C('curve'), rc = C('region'), ic = C('integral');
    const ax = axes(ctx, fit([-0.5, 3.5], [-3, 2.5], 30, 540), [-0.5, 3.5], [-3, 2.5], { xl: 'x', yl: 'y', nx: 4, ny: 5, fx: ticks(3.5), fy: ticks(2.5) });
    const all = Array.from({ length: 181 }, (_, i) => tr(i / 180));
    poly(ctx, ax, all, alpha(cc, 0.35), 3, alpha(rc, 0.2));
    if (t > 1e-3) poly(ctx, ax, Array.from({ length: 181 }, (_, i) => tr((t * i) / 180)), cc, 5);
    const p = tr(t), Y = Yof(p), th = thOf(p);
    line(ctx, ax.X(0), ax.Y(-3), ax.X(0), ax.Y(2.5), alpha(PAL.ink, 0.5), 6);
    line(ctx, ax.X(0), ax.Y(Y), ax.X(p[0]), ax.Y(p[1]), PAL.ink, 4);
    const wx = l * Math.cos(th), wy = Y + l * Math.sin(th), R = 22, rot = roll(t) / 0.12;
    ctx.save(); ctx.strokeStyle = ic; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(ax.X(wx), ax.Y(wy), R, 0, TAU); ctx.stroke();
    for (let k = 0; k < 3; k++) { const q = rot + (k * TAU) / 3; ctx.beginPath(); ctx.moveTo(ax.X(wx), ax.Y(wy)); ctx.lineTo(ax.X(wx) + (R - 3) * Math.cos(q), ax.Y(wy) + (R - 3) * Math.sin(q)); ctx.stroke(); }
    ctx.restore();
    dot(ctx, ax.X(0), ax.Y(Y), PAL.ink, true, 9); dot(ctx, ax.X(p[0]), ax.Y(p[1]), C('point'), true, 9);
    text(ctx, 'pivot', ax.X(0) - 14, ax.Y(Y) + 8, PAL.ink, { size: 20, align: 'right', bg: PAL.panel });
    text(ctx, 'wheel', ax.X(wx) + 30, ax.Y(wy) + 26, ic, { size: 20, bg: PAL.panel });
    text(ctx, 'tracer', ax.X(p[0]) + 16, ax.Y(p[1]) - 14, PAL.ink, { size: 20, bg: PAL.panel });
    const rl = roll(t);
    tex(d.readout, `\\text{wheel roll}=${hue('integral', n2(rl, 3))},\\quad L\\times\\text{roll}=${hue('integral', n2(L * rl, 3))}\\;\\to\\;\\text{area of}\\;\\kD=\\pi(0.8)(0.6)=${n2(area, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
