/* Figures for section 6.3 Centripetal Force. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, vbracket, axes, nice, curve, car, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const sgn = (v) => (v < 0 ? '−' : '');
/* a number as the book would print it: whole with thousands separated once it passes a thousand, three figures below that */
const sig3 = (x) => { const a = Math.abs(x); return sgn(x) + (a >= 1000 ? commas(String(Math.round(a))) : a.toPrecision(3)); };
/* a label with subscripts, written the way the book writes them: F_c, μ_s, F_c' */
function lab(ctx, s, x, y, color, o = {}) {
  const size = o.size ?? 21, ss = Math.round(size * 0.72), weight = o.weight ?? 600, parts = [];
  let i = 0;
  while (i < s.length) {
    const j = s.indexOf('_', i);
    if (j < 0 || j === s.length - 1) { if (i < s.length) parts.push([s.slice(i), false]); break; }
    if (j > i) parts.push([s.slice(i, j), false]);
    const k = j + 1;
    if (s[k] === '{') { const e = s.indexOf('}', k); parts.push([s.slice(k + 1, e), true]); i = e + 1; } else { parts.push([s[k], true]); i = k + 1; }
  }
  ctx.save();
  const widthOf = ([t, sub]) => { ctx.font = `${weight} ${sub ? ss : size}px ${FONT}`; return ctx.measureText(t).width; };
  const w = parts.reduce((a, p) => a + widthOf(p), 0);
  const align = o.align ?? 'center';
  let cx = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
  if (o.bg) { ctx.fillStyle = o.bg; ctx.fillRect(cx - 7, y - (size + 8) / 2, w + 14, size + 8); }
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillStyle = color;
  parts.forEach(([t, sub]) => { ctx.font = `${weight} ${sub ? ss : size}px ${FONT}`; ctx.fillText(t, cx, y + (sub ? size * 0.22 : 0)); cx += ctx.measureText(t).width; });
  ctx.restore();
}
/* an arc from the angle a1 to the angle a2, both measured from the horizontal with the angle growing upward */
function angleArc(ctx, x, y, r, a1, a2, label, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, -a1 * RAD, -a2 * RAD, a2 > a1); ctx.stroke(); ctx.restore();
  const a = ((a1 + a2) / 2) * RAD;
  if (label) lab(ctx, label, x + (r + 30) * Math.cos(a), y - (r + 30) * Math.sin(a), color, { size: 20 });
}
/* an arrow of drawn length L from (x, y) along the unit vector (ux, uy), its label beyond the head */
function vec(ctx, x, y, ux, uy, L, color, label, off = 26) {
  const hx = x + ux * L, hy = y + uy * L; arrow(ctx, x, y, hx, hy, color, 5);
  if (label) lab(ctx, label, hx + ux * off, hy + uy * off, color, { bg: alpha(PAL.panel, 0.75) });
}
/* the same, with the label set beside the arrow rather than beyond its head, so that two
   arrows along one line keep their labels apart */
function vecSide(ctx, x, y, ux, uy, L, color, label, side = 1, frac = 0.55, off = 28) {
  arrow(ctx, x, y, x + ux * L, y + uy * L, color, 5);
  if (label) lab(ctx, label, x + ux * L * frac - uy * side * off, y + uy * L * frac + ux * side * off, color, { bg: alpha(PAL.panel, 0.75) });
}
const ground = (ctx, x1, x2, y) => line(ctx, x1, y, x2, y, PAL.muted, 3);
/* a car seen from behind, centred on (x, y) and w wide */
function rearCar(ctx, x, y, w, color) {
  const h = w * 0.62; ctx.save(); ctx.translate(x, y); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(-w / 2, h / 2); ctx.lineTo(-w / 2, -h * 0.1); ctx.lineTo(-w * 0.3, -h * 0.55); ctx.lineTo(w * 0.3, -h * 0.55); ctx.lineTo(w / 2, -h * 0.1); ctx.lineTo(w / 2, h / 2); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-w * 0.26, -h * 0.13); ctx.lineTo(w * 0.26, -h * 0.13); ctx.stroke();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(-w * 0.33, h / 2, w * 0.1, 0, TAU); ctx.arc(w * 0.33, h / 2, w * 0.1, 0, TAU); ctx.fill(); ctx.restore();
}
/* a car seen from above, centred on (x, y) and pointing along the angle a */
function planCar(ctx, x, y, a, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s); ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(30, 0); ctx.lineTo(18, -13); ctx.lineTo(-24, -13); ctx.lineTo(-30, 0); ctx.lineTo(-24, 13); ctx.lineTo(18, 13); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a seated rider, the seat at (x, y) */
function rider(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(0, -15, 6.5, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(0, -9); ctx.lineTo(0, 6); ctx.lineTo(11, 8); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 6.9: the same speed taken with two different forces. Two objects
   travel their circles at the same speed, and the larger force bends its
   path into the tighter circle. The objects go round, so the figure runs a
   cycle of one turn of the wider circle and carries the transport.
===================================================================== */
(function () {
  const d = sim('sim-radius', 640);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'kg', dec: 1, onInput: reset, aria: 'mass' });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 30, step: 0.5, value: 20, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed' });
  const f1 = ctl(d.controls, { label: '\\kFc', cls: 'force', min: 200, max: 2000, step: 25, value: 600, unit: 'N', dec: 0, onInput: reset, aria: 'centripetal force on the first object' });
  const f2 = ctl(d.controls, { label: "\\kFc'", cls: 'force', min: 200, max: 2000, step: 25, value: 1200, unit: 'N', dec: 0, onInput: reset, aria: 'centripetal force on the second object' });
  const radii = () => [(m.v * v.v * v.v) / f1.v, (m.v * v.v * v.v) / f2.v];
  const period = () => (TAU * Math.max(...radii())) / v.v;
  const cy = cycle(period, 1.0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const [r1, r2] = radii(), tau = cy.now(), SC = 215 / Math.max(r1, r2);
    const one = (cx, cyy, r, Fc, sym, rsym) => {
      const R = r * SC, phi = (v.v * tau) / r;            /* both travel at the same speed, so the tighter circle turns faster */
      const px = cx + R * Math.sin(phi), py = cyy - R * Math.cos(phi);
      const tx = Math.cos(phi), ty = Math.sin(phi);       /* along the path */
      ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.stroke(); ctx.restore();
      dot(ctx, cx, cyy, PAL.muted, true, 6);
      line(ctx, cx, cyy, px, py, C('position'), 3);
      const off = Math.min(30, R * 0.26);
      lab(ctx, rsym + ' = ' + fmt(r, 2) + ' m', cx + (px - cx) * 0.3 + tx * off, cyy + (py - cyy) * 0.3 + ty * off, C('position'), { size: 20, bg: alpha(PAL.panel, 0.8) });
      vecSide(ctx, px, py, (cx - px) / R, (cyy - py) / R, Math.min(R * 0.58, 34 + Fc / 18), C('force'), sym, -1, 0.6, off);
      vec(ctx, px, py, tx, ty, 80, C('velocity'), 'v', 22);
      dot(ctx, px, py, PAL.ink, true, 11);
      lab(ctx, sym + ' = ' + sig3(Fc) + ' N', cx, 616, C('force'), { size: 21 });
    };
    one(400, 340, r1, f1.v, 'F_c', 'r');
    one(1040, 340, r2, f2.v, "F_c'", "r'");
    headline(ctx, 'at ' + fmt(v.v, 1) + ' m/s, ' + sig3(f1.v) + ' N bends the path into a circle of radius ' + fmt(r1, 2) + ' m and ' + sig3(f2.v) + ' N into one of ' + fmt(r2, 2) + ' m');
    readout(d.readout, `\\kr = \\frac{m\\kv^2}{\\kFc} = \\frac{(${fmt(m.v, 1)}\\ \\text{kg})(${fmt(v.v, 1)}\\ \\text{m/s})^2}{${sig3(f1.v)}\\ \\text{N}} = ${fmt(r1, 2)}\\ \\text{m}`,
      'The two objects move at the same speed, so the one on the tighter circle sweeps round faster: its angular velocity is ω = v/r = ' + fmt(v.v / r2, 1) + ' rad/s against ' + fmt(v.v / r1, 1) + ' rad/s for the other, which is why the same force can also be written F_c = mrω².');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 5), draw });
})();

/* =====================================================================
   FIGURE 6.10: the car on a level curve. Friction is the only horizontal
   force on the car, so friction is the whole centripetal force. The figure
   answers its sliders and nothing else, so it is still and carries no
   transport.
===================================================================== */
(function () {
  const d = sim('sim-level-curve', 620);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 500, max: 2000, step: 25, value: 900, unit: 'kg', dec: 0, aria: 'mass of the car' });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 40, step: 0.5, value: 25, unit: 'm/s', dec: 1, aria: 'speed of the car' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 50, max: 1000, step: 10, value: 500, unit: 'm', dec: 0, aria: 'radius of the curve' });
  function draw() {
    const { ctx } = begin(d.c);
    const Fc = (m.v * v.v * v.v) / r.v, mu = (v.v * v.v) / (r.v * G), N = m.v * G;
    /* on the left, the curve seen from above, with the car on it and the force pointing at the center */
    const R = 160 + 175 * Math.sqrt((r.v - 50) / 950), cx = 70, cyy = 545;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 4; ctx.setLineDash([12, 12]); ctx.beginPath(); ctx.arc(cx, cyy, R, -78 * RAD, -4 * RAD, false); ctx.stroke(); ctx.restore();
    dot(ctx, cx, cyy, PAL.muted, true, 6);
    const a = 44 * RAD, px = cx + R * Math.cos(a), py = cyy - R * Math.sin(a);
    line(ctx, cx, cyy, px, py, C('position'), 3, [6, 8]);
    lab(ctx, 'r = ' + sig3(r.v) + ' m', (cx + px) / 2 + 28 * Math.sin(a), (cyy + py) / 2 + 28 * Math.cos(a), C('position'), { size: 20, bg: alpha(PAL.panel, 0.8) });
    planCar(ctx, px, py, Math.PI / 2 - a, PAL.ink, 1.15);
    vecSide(ctx, px, py, -Math.cos(a), Math.sin(a), 104, C('force'), 'F_c', 1);
    vec(ctx, px, py, Math.sin(a), Math.cos(a), 84, C('velocity'), 'v', 22);
    text(ctx, 'the curve seen from above', 290, 590, PAL.muted, { size: 19, align: 'center' });
    /* in the middle, the car seen from behind with its three forces */
    const bx = 830, by = 400;
    ground(ctx, 640, 1030, by + 44);
    rearCar(ctx, bx, by, 200, PAL.ink);
    vec(ctx, bx, by, 0, -1, 150, C('force'), 'N');
    vec(ctx, bx, by, 0, 1, 104, C('force'), 'w');
    vec(ctx, bx, by, -1, 0, 132, C('force'), 'f');
    text(ctx, 'the car seen from behind', 830, 590, PAL.muted, { size: 19, align: 'center' });
    /* on the right, the free-body diagram */
    const fx = 1250, fy = 380;
    text(ctx, 'free-body diagram', fx, 156, PAL.muted, { size: 19, align: 'center' });
    dot(ctx, fx, fy, PAL.ink, true, 9);
    vec(ctx, fx, fy, 0, -1, 128, C('force'), 'N');
    vec(ctx, fx, fy, 0, 1, 92, C('force'), 'w');
    vec(ctx, fx, fy, -1, 0, 108, C('force'), 'f = F_c');
    headline(ctx, 'at ' + fmt(v.v, 1) + ' m/s a ' + sig3(r.v) + ' m curve needs ' + sig3(Fc) + ' N of friction, which a coefficient of ' + fmt(mu, 2) + ' can supply');
    readout(d.readout, `\\mu_{\\text{s}} = \\frac{\\kv^2}{\\kr\\kg} = \\frac{(${fmt(v.v, 1)}\\ \\text{m/s})^2}{(${sig3(r.v)}\\ \\text{m})(9.80\\ \\text{m/s}^2)} = ${fmt(mu, 2)}`,
      'The friction the road must supply is F_c = mv²/r = ' + sig3(Fc) + ' N, and the most it can supply is μ_s N = μ_s mg, with N = ' + sig3(N) + ' N. The mass cancels between the two, so it does not matter how heavily the car is loaded.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 6.11: the car on a frictionless banked curve. The free-body
   diagram on the left takes the normal force apart into the horizontal
   component that supplies the centripetal force and the vertical component
   that balances the weight. Still, since it is a balance of forces that
   answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-banked', 830);
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 2, max: 80, step: 0.5, value: 65, unit: '°', dec: 1, aria: 'banking angle' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 50, max: 1500, step: 10, value: 100, unit: 'm', dec: 0, aria: 'radius of the curve' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 500, max: 2000, step: 25, value: 900, unit: 'kg', dec: 0, aria: 'mass of the car' });
  const ideal = () => Math.sqrt(r.v * G * Math.tan(th.v * RAD));
  function draw() {
    const { ctx } = begin(d.c);
    const t = th.v * RAD, vi = ideal(), N = (m.v * G) / Math.cos(t), w = m.v * G;
    /* on the right, the road sloping up and away, so that the center of the curve lies to the left */
    const ox = 800, oy = 450, L = Math.min(470 / Math.cos(t), 320 / Math.sin(t));
    const ex = ox + L * Math.cos(t), ey = oy - L * Math.sin(t);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ex, ey); ctx.lineTo(ex, oy); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, ox, oy, ex, oy, PAL.muted, 2, [10, 10]);
    line(ctx, ox, oy, ex, ey, PAL.muted, 5);
    angleArc(ctx, ox, oy, 84, 0, th.v, null, PAL.ink);
    lab(ctx, 'θ = ' + fmt(th.v, 1) + 'º', ox + 146, oy + 32, PAL.ink, { size: 20 });
    const s = 0.55, px = ox + L * s * Math.cos(t), py = oy - L * s * Math.sin(t);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-t); ctx.translate(0, -52); rearCar(ctx, 0, 0, 166, PAL.ink); ctx.restore();
    const nx = -Math.sin(t), ny = -Math.cos(t);                      /* the outward normal of the road */
    const ccx = px + nx * 52, ccy = py + ny * 52;
    vec(ctx, ccx, ccy, nx, ny, 96, C('force'), 'N');
    vec(ctx, ccx, ccy, 0, 1, 66, C('force'), 'w');
    /* on the left, the same two forces with the normal force taken apart */
    const x0 = 440, y0 = 250, NL = 190, hx = x0 + nx * NL, hy = y0 + ny * NL;
    text(ctx, 'free-body diagram', x0, 104, PAL.muted, { size: 19, align: 'center' });
    line(ctx, hx, y0, hx, hy, PAL.rule, 2, [6, 8]);
    line(ctx, x0, hy, hx, hy, PAL.rule, 2, [6, 8]);
    arrow(ctx, x0, y0, hx, y0, C('force'), 5);
    arrow(ctx, x0, y0, x0, hy, C('force'), 5);
    vec(ctx, x0, y0, nx, ny, NL, C('force'), 'N = ' + sig3(N) + ' N');
    vec(ctx, x0, y0, 0, 1, 120, C('force'), 'w = ' + sig3(w) + ' N');
    lab(ctx, 'N sin θ = ' + sig3(N * Math.sin(t)) + ' N', x0 - 8, y0 + 36, C('force'), { size: 20, align: 'right' });
    lab(ctx, 'N cos θ = ' + sig3(N * Math.cos(t)) + ' N', x0 + 18, hy + 20, C('force'), { size: 20, align: 'left' });
    dot(ctx, x0, y0, PAL.ink, true, 8);
    text(ctx, 'the horizontal component points at the center of the curve', 400, 470, PAL.muted, { size: 19, align: 'center' });
    /* the graph: the ideal angle against the speed, for the radius that is set */
    const vmax = Math.max(20, Math.min(200, Math.ceil((vi * 1.5) / 20) * 20));
    const box = { l: 180, r: 1240, t: 540, b: 750 };
    const { X, Y } = axes(ctx, box, [0, vmax], [0, 90], { xl: 'v (m/s)', yl: 'θ (º)', xc: C('velocity'), yc: PAL.ink, nx: 4, ny: 3, fy: (q) => String(Math.round(q)) });
    curve(ctx, (q) => Math.atan((q * q) / (r.v * G)) / RAD, 0, vmax, X, Y, PAL.ink, 5, 140);
    line(ctx, X(Math.min(vi, vmax)), box.b, X(Math.min(vi, vmax)), Y(th.v), C('velocity'), 2, [4, 8]);
    line(ctx, box.l, Y(th.v), X(Math.min(vi, vmax)), Y(th.v), PAL.muted, 2, [4, 8]);
    dot(ctx, X(Math.min(vi, vmax)), Y(th.v), C('velocity'), true, 10);
    text(ctx, 'the ideal angle for a ' + sig3(r.v) + ' m curve', box.l + 14, box.t + 26, PAL.muted, { size: 19 });
    headline(ctx, 'banked at ' + fmt(th.v, 1) + 'º, a ' + sig3(r.v) + ' m curve is ideal for ' + fmt(vi, 1) + ' m/s, about ' + sig3(vi * 3.6) + ' km/h');
    readout(d.readout, `\\kv = (\\kr\\kg\\tan\\theta)^{1/2} = ((${sig3(r.v)}\\ \\text{m})(9.80\\ \\text{m/s}^2)(${fmt(Math.tan(t), 2)}))^{1/2} = ${fmt(vi, 1)}\\ \\text{m/s}`,
      'Read the other way, the same relation gives the angle, θ = tan⁻¹(v²/rg) = ' + fmt(th.v, 1) + 'º. The normal force is N = mg/cos θ = ' + sig3(N) + ' N; its horizontal part supplies the whole centripetal force and its vertical part balances the weight, and neither the angle nor the ideal speed depends on the mass of the car.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a car round a vertical loop at a constant speed. The track's normal
   force and the car's weight together supply the centripetal force, and
   the track has most to do at the bottom and least at the top. The car
   travels, so the figure runs a cycle of one turn and carries the
   transport.
===================================================================== */
(function () {
  const d = sim('sim-loop', 700);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 6, max: 22, step: 0.2, value: 12, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the car' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 4, max: 15, step: 0.5, value: 8, unit: 'm', dec: 1, onInput: reset, aria: 'radius of the loop' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 200, max: 800, step: 25, value: 500, unit: 'kg', dec: 0, aria: 'mass of the car' });
  const period = () => (TAU * r.v) / v.v;
  const cy = cycle(period, 0.8);
  function reset() { cy.reset(); }
  const normal = (phi) => (m.v * v.v * v.v) / r.v + m.v * G * Math.cos(phi);   /* phi is measured from the bottom of the loop */
  function draw() {
    const { ctx } = begin(d.c);
    const phi = (v.v * cy.now()) / r.v, Nb = normal(0), Nt = normal(Math.PI), Nnow = normal(phi), vmin = Math.sqrt(G * r.v);
    const cx = 350, cyy = 320, R = 235;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.stroke(); ctx.restore();
    ground(ctx, 50, 680, cyy + R + 70);
    const px = cx + R * Math.sin(phi), py = cyy + R * Math.cos(phi);
    const tx = Math.cos(phi), ty = -Math.sin(phi);                              /* along the track */
    line(ctx, cx, cyy, px, py, C('position'), 2, [6, 8]);
    lab(ctx, 'r = ' + fmt(r.v, 1) + ' m', cx + (px - cx) / 2 + tx * 28, cyy + (py - cyy) / 2 + ty * 28, C('position'), { size: 20, bg: alpha(PAL.panel, 0.8) });
    ctx.save(); ctx.translate(px, py); ctx.rotate(-phi); car(ctx, 0, 0, PAL.ink, 1); ctx.restore();
    vecSide(ctx, px, py, (cx - px) / R, (cyy - py) / R, 40 + (Nnow / Math.max(Nb, 1)) * 92, C('force'), 'N', -1);
    vec(ctx, px, py, 0, 1, 66, C('force'), 'w', 22);
    vec(ctx, px, py, tx, ty, 72, C('velocity'), 'v', 22);
    dot(ctx, cx, cyy, PAL.muted, true, 6);
    /* the graph: the normal force all the way round the loop */
    const box = { l: 820, r: 1330, t: 170, b: 550 };
    const rg = nice(Math.min(0, Nt), Nb, 3);
    const { X, Y } = axes(ctx, box, [0, 360], [rg.lo, rg.hi], { xl: 'angle from the bottom of the loop (º)', yl: 'N (N)', xc: PAL.ink, yc: C('force'), nx: 4, ny: rg.n, fy: (q) => commas(String(Math.round(q))) });
    curve(ctx, (q) => normal(q * RAD), 0, 360, X, Y, C('force'), 5, 140);
    dot(ctx, X((phi / TAU) * 360), Y(Nnow), C('force'), true, 10);
    headline(ctx, 'the car is ' + fmt((phi / TAU) * 360, 0) + 'º round the loop and the track pushes with ' + sig3(Nnow) + ' N there, against ' + sig3(Nb) + ' N at the bottom');
    readout(d.readout, `\\kN = m\\frac{\\kv^2}{\\kr} + m\\kg\\cos\\phi = ${sig3((m.v * v.v * v.v) / r.v)}\\ \\text{N} + (${sig3(m.v * G)}\\ \\text{N})\\cos ${fmt((phi / TAU) * 360, 0)}^\\circ = ${sig3(Nnow)}\\ \\text{N}`,
      Nt > 0 ? 'At the top the weight already points at the center, so the track has only ' + sig3(Nt) + ' N left to supply; below ' + fmt(vmin, 1) + ' m/s the weight alone would be more than the circle needs and the car would leave the track.'
        : 'At ' + fmt(v.v, 1) + ' m/s the weight is more than the circle needs at the top, so the car cannot keep contact there; it would have to travel at least ' + fmt(vmin, 1) + ' m/s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 5), draw });
})();

/* =====================================================================
   The figures the book draws inside its questions and problems, copied
   faithfully: no sliders, no motion, the book's own image under each.
===================================================================== */

/* the two paths through a race-track curve (conceptual question 4) */
(function () {
  const d = sim('fig-race-track', 540);
  function draw() {
    const { ctx } = begin(d.c);
    const cx = 700, cyy = 810;
    const at = (R, adeg) => [cx + R * Math.cos(adeg * RAD), cyy - R * Math.sin(adeg * RAD)];
    const band = (R, w, color, dash) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath(); ctx.arc(cx, cyy, R, -145 * RAD, -35 * RAD, false); ctx.stroke(); ctx.restore(); };
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(cx, cyy, 750, -145 * RAD, -35 * RAD, false); ctx.arc(cx, cyy, 500, -35 * RAD, -145 * RAD, true); ctx.closePath(); ctx.fill(); ctx.restore();
    band(750, 5, PAL.muted); band(500, 5, PAL.muted);
    band(690, 4, PAL.ink, [14, 12]); band(560, 4, PAL.ink, [14, 12]);
    const [ix, iy] = at(560, 62); planCar(ctx, ix, iy, Math.PI / 2 - 62 * RAD, PAL.ink, 1.2);
    const [ox, oy] = at(690, 88); planCar(ctx, ox, oy, Math.PI / 2 - 88 * RAD, PAL.ink, 1.2);
    arrow(ctx, ...at(560, 44), ...at(560, 38), PAL.ink, 4);
    arrow(ctx, ...at(690, 44), ...at(690, 38), PAL.ink, 4);
    text(ctx, 'the inside path, which cuts the corner', ...at(560, 120), PAL.ink, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'the outside path', ...at(690, 112), PAL.ink, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* the amusement ride with a vertical loop (conceptual questions 5 and 6) */
(function () {
  const d = sim('fig-loop-ride', 580);
  function draw() {
    const { ctx } = begin(d.c);
    const cx = 700, cyy = 240, R = 185;
    ground(ctx, 80, 1320, 524);
    for (let x = 210; x <= 1190; x += 140) { ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.strokeRect(x - 16, 478, 32, 46); ctx.restore(); }
    /* the two legs cross under the loop, which is what makes the shape a loop and not a hill */
    const rt = [cx + R * Math.cos(28 * RAD), cyy + R * Math.sin(28 * RAD)];
    const lt = [cx + R * Math.cos(152 * RAD), cyy + R * Math.sin(152 * RAD)];
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 7; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(140, 478); ctx.lineTo(420, 478); ctx.bezierCurveTo(640, 476, 800, 456, rt[0], rt[1]); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cyy, R, 28 * RAD, 152 * RAD, true); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(lt[0], lt[1]); ctx.bezierCurveTo(596, 456, 760, 476, 980, 478); ctx.lineTo(1260, 478); ctx.stroke();
    ctx.restore();
    /* the boat with four people in it, climbing the left side of the loop */
    const a = 205 * RAD, bx = cx + R * Math.cos(a), by = cyy + R * Math.sin(a);
    ctx.save(); ctx.translate(bx, by); ctx.rotate(a - Math.PI / 2); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-58, 0); ctx.lineTo(-46, -26); ctx.lineTo(46, -26); ctx.lineTo(58, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
    for (let i = 0; i < 4; i++) rider(ctx, -33 + i * 22, -28, PAL.ink, 0.8);
    ctx.restore();
    arrow(ctx, 190, 438, 300, 438, PAL.ink, 4);
    text(ctx, 'the cars are fastened to the rails so that they cannot fall off', 700, 560, PAL.muted, { size: 19, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* the merry-go-round and the three paths the lunch box might take (conceptual question 8) */
(function () {
  const d = sim('fig-merry-go-round', 620);
  function draw() {
    const { ctx } = begin(d.c);
    const cx = 520, cyy = 310, R = 230;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.fill(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.stroke(); ctx.restore();
    line(ctx, cx, cyy - R, cx, cyy + R, PAL.rule, 2, [10, 10]);
    line(ctx, cx - R, cyy, cx + R, cyy, PAL.rule, 2, [10, 10]);
    dot(ctx, cx, cyy, PAL.muted, true, 7);
    const RA = R + 38;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(cx, cyy, RA, -160 * RAD, -52 * RAD, false); ctx.stroke(); ctx.restore();
    arrow(ctx, cx + RA * Math.cos(-60 * RAD), cyy + RA * Math.sin(-60 * RAD), cx + RA * Math.cos(-52 * RAD), cyy + RA * Math.sin(-52 * RAD), PAL.ink, 4);
    text(ctx, 'the merry-go-round turns clockwise', 1090, 130, PAL.ink, { size: 21, align: 'center' });
    const px = cx + R * 0.52, py = cyy;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(px - 28, py + 16); ctx.lineTo(px - 28, py - 18); ctx.lineTo(px + 8, py - 26); ctx.lineTo(px + 28, py - 6); ctx.lineTo(px + 24, py + 16); ctx.stroke(); ctx.restore();
    rider(ctx, px - 4, py - 34, PAL.ink, 1.2);
    dot(ctx, px, py, PAL.ink, true, 9);
    text(ctx, 'P', px - 32, py + 34, PAL.ink, { size: 23, weight: 600, align: 'center' });
    [['A', -18], ['B', -54], ['C', -90]].forEach(([labl, deg]) => {
      const a = deg * RAD, ex = px + 235 * Math.cos(a), ey = py - 235 * Math.sin(a);
      arrow(ctx, px, py, ex, ey, PAL.ink, 4);
      text(ctx, labl, ex + 26 * Math.cos(a), ey - 26 * Math.sin(a), PAL.ink, { size: 23, weight: 600, align: 'center' });
    });
    text(ctx, 'seen from above', 180, 598, PAL.muted, { size: 19, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* the mass on a string tied to a nail on a frictionless table (conceptual question 10) */
(function () {
  const d = sim('fig-nail', 540);
  function draw() {
    const { ctx } = begin(d.c);
    const cx = 700, cyy = 300, RX = 300, RY = 112;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(180, 170); ctx.lineTo(1220, 170); ctx.lineTo(1330, 440); ctx.lineTo(70, 440); ctx.closePath(); ctx.fill(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.stroke(); ctx.restore();
    line(ctx, 170, 440, 148, 505, PAL.muted, 5); line(ctx, 1230, 440, 1252, 505, PAL.muted, 5);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.setLineDash([12, 12]); ctx.beginPath(); ctx.ellipse(cx, cyy, RX, RY, 0, 0, TAU); ctx.stroke(); ctx.restore();
    const a = -40 * RAD, mx = cx + RX * Math.cos(a), my = cyy + RY * Math.sin(a);
    line(ctx, cx, cyy, mx, my, PAL.ink, 3);
    dot(ctx, cx, cyy, PAL.ink, true, 8);
    text(ctx, 'the nail', cx, cyy + 34, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'the string', (cx + mx) / 2 + 6, (cyy + my) / 2 - 26, PAL.ink, { size: 20, align: 'center' });
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(mx, my, 20, 0, TAU); ctx.fill(); ctx.restore();
    text(ctx, 'the mass', mx + 34, my - 6, PAL.ink, { size: 20 });
    arrow(ctx, cx + 44, cyy - RY, cx - 44, cyy - RY, PAL.ink, 4);
    text(ctx, 'the table is frictionless, and the mass travels the circle at a constant speed', 700, 512, PAL.muted, { size: 19, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* the rider's cage on the arm of the large centrifuge, the book's part (b) (problem 7) */
(function () {
  const d = sim('fig-centrifuge', 580);
  function draw() {
    const { ctx } = begin(d.c);
    const ax = 190, ay = 140, pvx = 790, pvy = 140, th = 26 * RAD, rod = 250;
    line(ctx, ax, 60, ax, 470, PAL.muted, 5, [14, 10]);
    text(ctx, 'the axis of rotation', ax, 506, PAL.muted, { size: 19, align: 'center' });
    line(ctx, ax, ay, pvx, pvy, PAL.ink, 7);
    text(ctx, 'the arm', (ax + pvx) / 2, ay - 32, PAL.ink, { size: 21, weight: 600, align: 'center' });
    dot(ctx, pvx, pvy, PAL.ink, true, 10);
    text(ctx, 'the pivot', pvx + 12, pvy - 38, PAL.ink, { size: 20 });
    line(ctx, pvx, pvy, pvx + 350, pvy, PAL.rule, 2, [8, 8]);
    const kx = pvx + rod * Math.cos(th), ky = pvy + rod * Math.sin(th);
    line(ctx, pvx, pvy, kx, ky, PAL.ink, 5);
    angleArc(ctx, pvx, pvy, 170, 0, -26, 'θ', PAL.ink);
    ctx.save(); ctx.translate(kx, ky); ctx.rotate(th); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(-54, -10, 108, 126); ctx.fill(); ctx.stroke(); rider(ctx, -4, 74, PAL.ink, 1.7); ctx.restore();
    text(ctx, 'the cage', kx + 118, ky + 128, PAL.ink, { size: 20, align: 'center' });
    const fx = kx, fy = ky + 54;
    vec(ctx, fx, fy, -1, 0, 150, C('force'), 'F_c');
    vec(ctx, fx, fy, 0, 1, 116, C('force'), 'w');
    vecSide(ctx, fx, fy, -Math.cos(th), -Math.sin(th), 176, C('force'), 'F', -1, 0.94, 24);
    text(ctx, 'the cage swings outward as the centrifuge turns, so the arm holds the cage up and pulls it toward the axis at once', 700, 548, PAL.muted, { size: 19, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
