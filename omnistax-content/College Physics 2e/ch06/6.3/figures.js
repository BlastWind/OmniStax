/* Figures for section 6.3 Centripetal Force. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, vbracket, axes, nice, curve, car, view, face, FONT, pinned, labeller, person } = F;
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
/* a carousel horse standing on (x, y), facing along the sign `face`, drawn s times its 90-unit length:
   body, neck and head, four legs and a tail, with the pole through the saddle and a rider on it */
function horse(ctx, x, y, color, s = 1, face = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s * face, s); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3 / s; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  /* the legs behind, the body, the legs in front */
  ctx.beginPath(); ctx.moveTo(-26, -34); ctx.lineTo(-30, -4); ctx.lineTo(-34, 0); ctx.moveTo(20, -34); ctx.lineTo(24, -4); ctx.lineTo(28, 0); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, -44, 36, 15, 0, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-18, -34); ctx.lineTo(-20, -4); ctx.lineTo(-16, 0); ctx.moveTo(26, -36); ctx.lineTo(30, -4); ctx.lineTo(34, 0); ctx.stroke();
  /* the neck and head, the ear, the tail */
  ctx.beginPath(); ctx.moveTo(24, -52); ctx.lineTo(44, -84); ctx.lineTo(58, -80); ctx.lineTo(62, -70); ctx.lineTo(50, -66); ctx.lineTo(34, -44); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(48, -86); ctx.lineTo(50, -94); ctx.lineTo(54, -86); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-34, -48); ctx.quadraticCurveTo(-52, -40, -50, -18); ctx.stroke();
  ctx.restore();
  /* the pole, and the rider astride the saddle */
  line(ctx, x + 2 * face * s, y - 130 * s, x + 2 * face * s, y - 6 * s, color, 3);
  person(ctx, x + 2 * face * s, y - 50 * s, color, { s: 0.62 * s, face, crouch: 0.9 });
}
/* a roller-coaster car with one rider, its wheels on the rail at (x, y) and its floor along the unit vector (ux, uy) */
function coasterCar(ctx, x, y, ux, uy, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(Math.atan2(uy, ux)); ctx.scale(s, s); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3 / s; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(-30, -6); ctx.lineTo(-26, -34); ctx.lineTo(26, -34); ctx.lineTo(30, -6); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = color; ctx.beginPath(); ctx.arc(-18, -4, 5, 0, TAU); ctx.arc(18, -4, 5, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(2, -48, 8, 0, TAU); ctx.fill();
  ctx.lineWidth = 3.5 / s; ctx.beginPath(); ctx.moveTo(2, -40); ctx.lineTo(2, -30); ctx.stroke();
  ctx.restore();
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
    const L = labeller(ctx, 640); L.block(0, 0, 1400, 90);
    const one = (cx, cyy, r, Fc, sym, rsym) => {
      const R = r * SC, phi = (v.v * tau) / r;            /* both travel at the same speed, so the tighter circle turns faster */
      const px = cx + R * Math.sin(phi), py = cyy - R * Math.cos(phi);
      const tx = Math.cos(phi), ty = Math.sin(phi);       /* along the path */
      ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.stroke(); ctx.restore();
      dot(ctx, cx, cyy, PAL.muted, true, 6);
      line(ctx, cx, cyy, px, py, C('position'), 3);
      /* the radius is named behind the object, the force beside its head and the velocity beyond its head */
      L.add(rsym + ' = ' + fmt(r, 2) + ' m', cx + (px - cx) * 0.45, cyy + (py - cyy) * 0.45, -tx, -ty, C('position'), 20, 22);
      const FL = Math.min(R * 0.58, 34 + Fc / 18), fx = px + ((cx - px) / R) * FL, fy = py + ((cyy - py) / R) * FL;
      arrow(ctx, px, py, fx, fy, C('force'), 5);
      L.add(sym, fx, fy, tx, ty, C('force'), 21, 22);
      arrow(ctx, px, py, px + tx * 80, py + ty * 80, C('velocity'), 5);
      L.add('v', px + tx * 80, py + ty * 80, tx, ty, C('velocity'), 21, 22);
      dot(ctx, px, py, PAL.ink, true, 11);
      lab(ctx, sym + ' = ' + sig3(Fc) + ' N', cx, 616, C('force'), { size: 21 });
    };
    one(400, 340, r1, f1.v, 'F_c', 'r');
    one(1040, 340, r2, f2.v, "F_c'", "r'");
    L.flush();
    headline(ctx, 'At ' + fmt(v.v, 1) + ' m/s, ' + sig3(f1.v) + ' N bends the path into a circle of ' + fmt(r1, 2) + ' m and ' + sig3(f2.v) + ' N into one of ' + fmt(r2, 2) + ' m.');
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
    headline(ctx, 'At ' + fmt(v.v, 1) + ' m/s a ' + sig3(r.v) + ' m curve needs ' + sig3(Fc) + ' N of friction, which a coefficient of ' + fmt(mu, 2) + ' supplies.');
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
    const LB = labeller(ctx, 830); LB.block(0, 0, 1400, 90);
    /* on the right, the road sloping up and away, so that the center of the curve lies to the left */
    const ox = 800, oy = 450, L = Math.min(470 / Math.cos(t), 320 / Math.sin(t));
    const ex = ox + L * Math.cos(t), ey = oy - L * Math.sin(t);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ex, ey); ctx.lineTo(ex, oy); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, ox, oy, ex, oy, PAL.muted, 2, [10, 10]);
    line(ctx, ox, oy, ex, ey, PAL.muted, 5);
    angleArc(ctx, ox, oy, 84, 0, th.v, null, PAL.ink);
    lab(ctx, 'θ = ' + fmt(th.v, 1) + '°', ox + 146, oy + 32, PAL.ink, { size: 20 });
    /* the car sits on the slope with its wheels on the road and its body tilted with it */
    const s = 0.55, px = ox + L * s * Math.cos(t), py = oy - L * s * Math.sin(t);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-t); ctx.translate(0, -44); rearCar(ctx, 0, 0, 140, PAL.ink); ctx.restore();
    const nx = -Math.sin(t), ny = -Math.cos(t);                      /* the outward normal of the road */
    const ccx = px + nx * 44, ccy = py + ny * 44;
    arrow(ctx, ox + 60, oy + 80, ox - 40, oy + 80, PAL.muted, 3);
    text(ctx, 'toward the center of the curve', ox + 70, oy + 80, PAL.muted, { size: 17 });
    dot(ctx, ccx, ccy, PAL.ink, true, 6);
    arrow(ctx, ccx, ccy, ccx + nx * 120, ccy + ny * 120, C('force'), 5);
    LB.add('N', ccx + nx * 120, ccy + ny * 120, nx, ny, C('force'), 22, 22);
    arrow(ctx, ccx, ccy, ccx, ccy + 84, C('force'), 5);
    LB.add('w', ccx, ccy + 84, 0, 1, C('force'), 22, 22);
    LB.flush();
    /* on the left, the same two forces with the normal force taken apart */
    /* the normal force is drawn 150 units long whatever the angle, its two components as dashed drops */
    const x0 = 470, y0 = 300, NL = 150, hx = x0 + nx * NL, hy = y0 + ny * NL;
    text(ctx, 'free-body diagram', x0, 112, PAL.muted, { size: 19, align: 'center' });
    LB.block(x0 - 110, 98, x0 + 110, 126);
    line(ctx, hx, y0, hx, hy, PAL.rule, 2, [6, 8]);
    line(ctx, x0, hy, hx, hy, PAL.rule, 2, [6, 8]);
    arrow(ctx, x0, y0, hx, y0, C('force'), 5);
    arrow(ctx, x0, y0, x0, hy, C('force'), 5);
    arrow(ctx, x0, y0, hx, hy, C('force'), 5);
    arrow(ctx, x0, y0, x0, y0 + 110, C('force'), 5);
    LB.add('N = ' + sig3(N) + ' N', hx, hy, nx, ny, C('force'), 20, 24);
    LB.add('w = ' + sig3(w) + ' N', x0, y0 + 110, 0, 1, C('force'), 20, 24);
    LB.add('N sin θ = ' + sig3(N * Math.sin(t)) + ' N', hx, y0, -1, 0.15, C('force'), 19, 22);
    LB.add('N cos θ = ' + sig3(N * Math.cos(t)) + ' N', x0, hy, 1, -0.2, C('force'), 19, 22);
    dot(ctx, x0, y0, PAL.ink, true, 8);
    LB.flush();
    text(ctx, 'the horizontal component points at the center of the curve', 400, 476, PAL.muted, { size: 19, align: 'center' });
    /* the graph: the ideal angle against the speed, for the radius that is set */
    /* fixed axes. The angle axis is the whole of its own range, 0 to 90°. The ideal speed the
       sliders can reach is (1500 × 9.80 × tan 80°)^(1/2) = 289 m/s, but on the default 100 m curve
       the marker would then sit in the first sixth of the width, so the speed axis is fixed at
       0 to 60 m/s, ticked every 15, which holds the default 45.8 m/s comfortably; a faster ideal
       speed is pinned at the right-hand edge. Neither range moves with the sliders. */
    const VR = 60, box = { l: 180, r: 1240, t: 540, b: 750 };
    const { X, Y } = axes(ctx, box, [0, VR], [0, 90], { xl: 'v (m/s)', yl: 'θ (°)', xc: C('velocity'), yc: PAL.ink, nx: 4, ny: 3, fy: (q) => String(Math.round(q)) });
    curve(ctx, (q) => Math.atan((q * q) / (r.v * G)) / RAD, 0, VR, X, Y, PAL.ink, 5, 140);
    const vC = Math.min(vi, VR);
    line(ctx, X(vC), box.b, X(vC), Y(th.v), C('velocity'), 2, [4, 8]);
    line(ctx, box.l, Y(th.v), X(vC), Y(th.v), PAL.muted, 2, [4, 8]);
    pinned(ctx, box, X, Y, vi, th.v, C('velocity'), fmt(vi, 1) + ' m/s');
    text(ctx, 'the ideal angle for a ' + sig3(r.v) + ' m curve', box.l + 14, box.t + 26, PAL.muted, { size: 19 });
    headline(ctx, 'Banked at ' + fmt(th.v, 1) + '°, a curve of ' + sig3(r.v) + ' m is ideal for ' + fmt(vi, 1) + ' m/s, which is about ' + sig3(vi * 3.6) + ' km/h.');
    readout(d.readout, `\\kv = (\\kr\\kg\\tan\\theta)^{1/2} = ((${sig3(r.v)}\\ \\text{m})(9.80\\ \\text{m/s}^2)(${fmt(Math.tan(t), 2)}))^{1/2} = ${fmt(vi, 1)}\\ \\text{m/s}`,
      'Read the other way, the same relation gives the angle, θ = tan⁻¹(v²/rg) = ' + fmt(th.v, 1) + '°. The normal force is N = mg/cos θ = ' + sig3(N) + ' N, whose horizontal part supplies the whole centripetal force while its vertical part balances the weight, and neither the angle nor the ideal speed depends on the mass of the car.');
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
  /* phi is measured from the bottom of the loop. A track can push a car but never pull it, so what
     the relation gives is the force the circle asks of the track, and where that falls below zero
     the car has already left the track: the figure clamps the force at zero, draws no arrow there
     and says in words that contact is lost. */
  const asked = (phi) => (m.v * v.v * v.v) / r.v + m.v * G * Math.cos(phi);
  const normal = (phi) => Math.max(0, asked(phi));
  /* the angle from the bottom at which contact is lost, or 180° where it is never lost */
  const loseAt = () => { const c = -(v.v * v.v) / (G * r.v); return c <= -1 ? Math.PI : Math.acos(c); };
  function draw() {
    const { ctx } = begin(d.c);
    const phi = (v.v * cy.now()) / r.v, Nb = normal(0), Nt = asked(Math.PI), Nnow = normal(phi), vmin = Math.sqrt(G * r.v);
    const phiLose = loseAt(), inContact = Nnow > 0;
    const cx = 350, cyy = 300, R = 225;
    const L = labeller(ctx, 700); L.block(0, 0, 1400, 90);
    /* the track: a rail round the loop, with the approach and the run-out meeting the ground at the bottom */
    const gy = cyy + R + 40;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(40, gy); ctx.lineTo(150, gy); ctx.quadraticCurveTo(cx - 40, gy, cx + 50, cyy + R - 6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(660, gy); ctx.lineTo(550, gy); ctx.quadraticCurveTo(cx + 40, gy, cx - 50, cyy + R - 6); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.stroke();
    ctx.strokeStyle = PAL.panel; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.stroke(); ctx.restore();
    ground(ctx, 30, 680, gy + 8);
    const px = cx + R * Math.sin(phi), py = cyy + R * Math.cos(phi);
    const tx = Math.cos(phi), ty = -Math.sin(phi);                              /* along the track */
    line(ctx, cx, cyy, px, py, C('position'), 2, [6, 8]);
    L.add('r = ' + fmt(r.v, 1) + ' m', cx + (px - cx) * 0.5, cyy + (py - cyy) * 0.5, -tx, -ty, C('position'), 20, 24);
    /* the stretch of the loop the car cannot keep contact along, drawn broken */
    if (phiLose < Math.PI) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 9; ctx.setLineDash([12, 14]);
      ctx.beginPath(); ctx.arc(cx, cyy, R, Math.PI / 2 - phiLose, Math.PI / 2 - (TAU - phiLose), true); ctx.stroke(); ctx.restore();
      text(ctx, 'The car cannot keep contact along the broken stretch of the loop.', cx, gy + 48, PAL.muted, { size: 17, align: 'center' });
    }
    /* the car rides on the inside of the rail, its wheels on the track, the forces drawn from its centre */
    const ix = (cx - px) / R, iy = (cyy - py) / R, ccx = px + ix * 14, ccy = py + iy * 14;
    ctx.save(); ctx.translate(px, py); ctx.rotate(-phi); ctx.translate(0, -8); car(ctx, 0, 0, PAL.ink, 1); ctx.restore();
    if (inContact) { const NL = 40 + (Nnow / Math.max(Nb, 1)) * 92; arrow(ctx, ccx, ccy, ccx + ix * NL, ccy + iy * NL, C('force'), 5); L.add('N', ccx + ix * NL, ccy + iy * NL, ix, iy, C('force'), 22, 22); }
    arrow(ctx, ccx, ccy, ccx, ccy + 66, C('force'), 5); L.add('w', ccx, ccy + 66, 0, 1, C('force'), 22, 22);
    arrow(ctx, ccx, ccy, ccx + tx * 72, ccy + ty * 72, C('velocity'), 5); L.add('v', ccx + tx * 72, ccy + ty * 72, tx, ty, C('velocity'), 22, 22);
    dot(ctx, cx, cyy, PAL.muted, true, 6);
    L.flush();
    /* the graph: the normal force all the way round the loop */
    /* fixed axes. The angle axis is the whole loop, 0 to 360°. The force at the bottom can reach
       800 × 22²/4 + 800 × 9.80 = 105,000 N, but at the default setting the curve would then keep
       to the bottom eighth of the box, so the force axis is fixed at −4000 to 16,000 N, ticked
       every 4000, which holds the default 4100 N to 13,900 N comfortably. A larger force is
       clipped at the top edge and read off the pinned marker; neither range moves. */
    const box = { l: 820, r: 1330, t: 170, b: 550 }, NLO = 0, NHI = 16000;
    const { X, Y } = axes(ctx, box, [0, 360], [NLO, NHI], { xl: 'angle from the bottom of the loop (°)', yl: 'N (N)', xc: PAL.ink, yc: C('force'), nx: 4, ny: 4, fy: (q) => commas(String(Math.round(q))) });
    curve(ctx, (q) => Math.min(normal(q * RAD), NHI), 0, 360, X, Y, C('force'), 5, 140);
    pinned(ctx, box, X, Y, (phi / TAU) * 360, Nnow, C('force'), sig3(Nnow) + ' N');
    headline(ctx, inContact
      ? 'The car is ' + fmt((phi / TAU) * 360, 0) + '° round the loop, where the track pushes with ' + sig3(Nnow) + ' N.'
      : 'The track stops pushing ' + fmt((phiLose / TAU) * 360, 0) + '° round, so the car has already left it here.');
    readout(d.readout, `\\kN = m\\frac{\\kv^2}{\\kr} + m\\kg\\cos\\phi = ${sig3((m.v * v.v * v.v) / r.v)}\\ \\text{N} + (${sig3(m.v * G)}\\ \\text{N})\\cos ${fmt((phi / TAU) * 360, 0)}^\\circ = ${sig3(Nnow)}\\ \\text{N}`,
      Nt > 0 ? 'At the top the weight already points at the center, so the track has only ' + sig3(Nt) + ' N left to supply. Below ' + fmt(vmin, 1) + ' m/s the weight alone would be more than the circle needs there, and the car would leave the track.'
        : 'At ' + fmt(v.v, 1) + ' m/s the weight is already more than the circle needs from ' + fmt((phiLose / TAU) * 360, 0) + '° round, so the track can push no harder than nothing and the car leaves it. The car would have to travel at least ' + fmt(vmin, 1) + ' m/s to hold the loop all the way round.');
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
    const cx = 700, cyy = 230, R = 180, TY = 470;
    /* the trestle: posts and cross-braces under the level track and up under the loop, as the book draws it */
    ctx.save(); ctx.strokeStyle = alpha(PAL.muted, 0.45); ctx.lineWidth = 3;
    for (let x = 120; x <= 1280; x += 80) { ctx.beginPath(); ctx.moveTo(x, TY); ctx.lineTo(x, 540); ctx.stroke(); }
    for (let x = 120; x < 1280; x += 80) { ctx.beginPath(); ctx.moveTo(x, TY); ctx.lineTo(x + 80, 540); ctx.moveTo(x + 80, TY); ctx.lineTo(x, 540); ctx.stroke(); }
    for (let x = cx - 200; x <= cx + 200; x += 80) { ctx.beginPath(); ctx.moveTo(x, TY); ctx.lineTo(x, cyy + 70); ctx.stroke(); }
    for (let y = cyy + 70; y < TY; y += 80) for (let x = cx - 200; x < cx + 200; x += 80) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 80, y + 80); ctx.moveTo(x + 80, y); ctx.lineTo(x, y + 80); ctx.stroke(); }
    ctx.restore();
    ground(ctx, 60, 1340, 540);
    /* the two legs cross under the loop, which is what makes the shape a loop and not a hill */
    const rt = [cx + R * Math.cos(28 * RAD), cyy + R * Math.sin(28 * RAD)];
    const lt = [cx + R * Math.cos(152 * RAD), cyy + R * Math.sin(152 * RAD)];
    const rail = (w, color) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(80, TY); ctx.lineTo(420, TY); ctx.bezierCurveTo(640, TY - 2, 800, TY - 22, rt[0], rt[1]); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx, cyy, R, 28 * RAD, 152 * RAD, true); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(lt[0], lt[1]); ctx.bezierCurveTo(596, TY - 22, 760, TY - 2, 980, TY); ctx.lineTo(1320, TY); ctx.stroke();
      ctx.restore();
    };
    rail(9, PAL.ink); rail(3, PAL.panel);
    /* the train of four cars climbing the right side of the loop, each with a rider, fastened to the rail's inside */
    for (let i = 0; i < 4; i++) {
      const a = (62 - i * 12) * RAD, bx = cx + R * Math.cos(a), by = cyy + R * Math.sin(a);
      coasterCar(ctx, bx - 8 * Math.cos(a), by - 8 * Math.sin(a), Math.sin(a), -Math.cos(a), PAL.ink, 0.85);
    }
    { const a = 6 * RAD, hx = cx + (R + 44) * Math.cos(a), hy = cyy + (R + 44) * Math.sin(a); arrow(ctx, hx, hy + 70, hx - 20, hy - 30, PAL.ink, 4); }
    text(ctx, 'the cars are fastened to the rails so that they cannot fall off', 700, 566, PAL.muted, { size: 19, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* the merry-go-round and the three paths the lunch box might take (conceptual question 8) */
(function () {
  const d = sim('fig-merry-go-round', 620);
  function draw() {
    const { ctx } = begin(d.c);
    /* the book's viewpoint: a little above the platform and in front of it, so the disc reads as an
       ellipse and the horse stands up out of it; the view is locked (root rule 28.2) */
    const V = view({ yaw: 0.0, pitch: 0.62, dist: 2600, cx: 620, cy: 330 }), P = V.P;
    const RP = 330, on = (rr, a, h = 0) => P([rr * Math.cos(a), h, -rr * Math.sin(a)]);   /* a point on the platform at radius rr and bearing a, counterclockwise seen from above */
    const ring = (rr, color, w, fill) => {
      ctx.save(); ctx.beginPath(); for (let i = 0; i <= 120; i++) { const q = on(rr, (i / 120) * TAU); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); } ctx.closePath();
      if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke(); ctx.restore();
    };
    /* the platform: its rim, its deck and the star of boards, then the mast */
    const rimTop = (a) => on(RP, a), rimBot = (a) => on(RP, a, -26);
    ctx.save(); ctx.beginPath(); for (let i = 0; i <= 60; i++) { const q = rimBot(Math.PI + (i / 60) * Math.PI); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }
    for (let i = 60; i >= 0; i--) { const q = rimTop(Math.PI + (i / 60) * Math.PI); ctx.lineTo(q[0], q[1]); } ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.fill(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    ring(RP, PAL.muted, 3, PAL.soft);
    ring(RP * 0.72, alpha(PAL.muted, 0.5), 2);
    for (let k = 0; k < 12; k++) { const q0 = on(0, 0), q1 = on(RP * 0.72, (k * TAU) / 12); line(ctx, q0[0], q0[1], q1[0], q1[1], alpha(PAL.muted, 0.35), 2); }
    { const c = on(0, 0); dot(ctx, c[0], c[1], PAL.muted, true, 6); }
    /* the turning arrow along the far rim, clockwise seen from above */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); for (let i = 0; i <= 40; i++) { const q = on(RP + 30, (150 - i * 1.5) * RAD); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); } ctx.stroke(); ctx.restore();
    { const a = on(RP + 30, 92 * RAD), b = on(RP + 30, 86 * RAD); arrow(ctx, a[0], a[1], b[0], b[1], PAL.ink, 4); }
    text(ctx, 'the merry-go-round turns clockwise, seen from above', 1080, 150, PAL.ink, { size: 20, align: 'center' });
    /* the child on her horse, a little way in from the rim on the near right, and the point P beside her */
    const aH = -24 * RAD, rH = RP * 0.55, hq = on(rH, aH);
    horse(ctx, hq[0], hq[1], PAL.ink, 1.25, -1);
    const aP = -10 * RAD, rPt = RP * 0.72, pq = on(rPt, aP);
    dot(ctx, pq[0], pq[1], PAL.ink, true, 9);
    text(ctx, 'P', pq[0] + 24, pq[1] - 18, PAL.ink, { size: 23, weight: 600, align: 'center' });
    /* the three paths from P, drawn on the platform's plane: one bends left, one runs straight, one bends right */
    [['A', 0.9], ['B', 0], ['C', -0.9]].forEach(([labl, bend]) => {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.beginPath();
      let last = null;
      for (let i = 0; i <= 30; i++) {
        const u = (i / 30) * 300, w = bend * u * u / 300;                 /* along the outward radial, and across it */
        const px3 = rPt * Math.cos(aP) + u * Math.cos(aP) - w * Math.sin(aP), pz3 = -(rPt * Math.sin(aP) + u * Math.sin(aP) + w * Math.cos(aP));
        const q = P([px3, 0, pz3]); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); if (i === 29) last = q;
        if (i === 30) { ctx.stroke(); arrow(ctx, last[0], last[1], q[0], q[1], PAL.ink, 4); text(ctx, labl, q[0] + 26, q[1] + 10, PAL.ink, { size: 23, weight: 600, align: 'center' }); }
      }
      ctx.restore();
    });
    text(ctx, 'the box leaves the child’s hand at P; the platform is seen from a little above', 700, 598, PAL.muted, { size: 19, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* the mass on a string tied to a nail on a frictionless table (conceptual question 10) */
(function () {
  const d = sim('fig-nail', 580);
  function draw() {
    const { ctx } = begin(d.c);
    /* the book's viewpoint: standing at the near right corner of the table and looking down on it, so the top, the front edge and the right edge all show */
    const V = view({ yaw: 0.30, pitch: 0.50, dist: 2600, cx: 700, cy: 160 });
    const P = V.P, TW = 330, TD = 260, TT = 24, LEG = 146, R = 230;   /* the table half-width, half-depth, the thickness of its top, the length of a leg and the radius of the circle, all in scene units */
    const q = (pts) => pts.map(P);
    const kTop = V.shade([0, 1, 0]), kFront = V.shade([0, 0, 1]), kSide = V.shade([1, 0, 0]);
    /* the four legs, drawn first so the top covers the two that stand behind it */
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
      const lx = sx * (TW - 30), lz = sz * (TD - 30), w = 16, y0 = -TT, y1 = -TT - LEG;
      face(ctx, q([[lx - w, y0, lz + w], [lx + w, y0, lz + w], [lx + w, y1, lz + w], [lx - w, y1, lz + w]]), kFront, 2);
      face(ctx, q([[lx + w, y0, lz + w], [lx + w, y0, lz - w], [lx + w, y1, lz - w], [lx + w, y1, lz + w]]), kSide, 2);
    });
    /* the top of the table: the front and right edges of the slab, then its surface */
    face(ctx, q([[-TW, 0, TD], [TW, 0, TD], [TW, -TT, TD], [-TW, -TT, TD]]), kFront, 3);
    face(ctx, q([[TW, 0, TD], [TW, 0, -TD], [TW, -TT, -TD], [TW, -TT, TD]]), kSide, 3);
    face(ctx, q([[-TW, 0, -TD], [TW, 0, -TD], [TW, 0, TD], [-TW, 0, TD]]), kTop, 3);
    /* the circle the mass travels, lying flat on the table top: from this viewpoint it reads as an ellipse */
    const on = (t) => P([R * Math.cos(t), 0, R * Math.sin(t)]);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([12, 12]); ctx.beginPath();   /* muted, not rule: a rule-grey dash vanishes on the soft table top */
    for (let i = 0; i <= 120; i++) { const c = on((i / 120) * TAU); i ? ctx.lineTo(c[0], c[1]) : ctx.moveTo(c[0], c[1]); }
    ctx.closePath(); ctx.stroke(); ctx.restore();
    /* the direction of travel, marked at the far side of the circle the way the book marks it */
    const a1 = on(-Math.PI / 2 + 0.16), a2 = on(-Math.PI / 2 - 0.16);
    arrow(ctx, a1[0], a1[1], a2[0], a2[1], PAL.ink, 4);
    /* the nail through the centre of the circle, the string along the radius, and the mass on the end of it */
    const t = 0.12, nail = P([0, 0, 0]), head = P([0, 22, 0]), mb = P([R * Math.cos(t), 0, R * Math.sin(t)]);
    line(ctx, nail[0], nail[1], mb[0], mb[1], PAL.ink, 3);
    line(ctx, nail[0], nail[1], head[0], head[1], PAL.ink, 5);
    dot(ctx, head[0], head[1], PAL.ink, true, 7);
    const mx = R * Math.cos(t), mz = R * Math.sin(t), h = 22, corner = P([mx + h, 2 * h, mz + h]);
    face(ctx, q([[mx - h, 2 * h, mz - h], [mx + h, 2 * h, mz - h], [mx + h, 2 * h, mz + h], [mx - h, 2 * h, mz + h]]), kTop, 3);
    face(ctx, q([[mx - h, 2 * h, mz + h], [mx + h, 2 * h, mz + h], [mx + h, 0, mz + h], [mx - h, 0, mz + h]]), kFront, 3);
    face(ctx, q([[mx + h, 2 * h, mz + h], [mx + h, 2 * h, mz - h], [mx + h, 0, mz - h], [mx + h, 0, mz + h]]), kSide, 3);
    text(ctx, 'the nail', head[0] - 16, head[1] - 26, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'the string', (nail[0] + mb[0]) / 2, (nail[1] + mb[1]) / 2 + 30, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'the mass', corner[0] + 22, corner[1] - 10, PAL.ink, { size: 20 });
    text(ctx, 'the table is frictionless, and the mass travels the circle at a constant speed', 700, 552, PAL.muted, { size: 19, align: 'center' });
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
    ctx.beginPath(); ctx.rect(-54, -10, 108, 126); ctx.fill(); ctx.stroke();
    /* the seat and the rider on it, facing the axis */
    ctx.beginPath(); ctx.moveTo(-40, 60); ctx.lineTo(-40, 100); ctx.lineTo(0, 100); ctx.stroke();
    person(ctx, 8, 104, PAL.ink, { s: 0.8, face: -1, crouch: 0.85 }); ctx.restore();
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
