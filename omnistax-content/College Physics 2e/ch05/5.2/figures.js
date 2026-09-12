/* Figures for section 5.2 Drag Forces. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, axes, nice, curve, strip, car } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- constants and small helpers shared by the figures ---------- */
const G = 9.80, RHO_AIR = 1.21, RHO_STEEL = 7.8e3, TAU = 2 * Math.PI;
/* ln(cosh x) without letting cosh overflow, which it does for a slow body falling a long way */
const lncosh = (x) => { const a = Math.abs(x); return a + Math.log1p(Math.exp(-2 * a)) - Math.LN2; };
/* how far a body of terminal velocity vt has fallen from rest after the time t, and how fast it is going */
const fallen = (vt, t) => ((vt * vt) / G) * lncosh((G * t) / vt);
const speed = (vt, t) => vt * Math.tanh((G * t) / vt);
/* the time such a body takes to fall the distance s */
function fallTime(vt, s) {
  const u = (G * s) / (vt * vt);
  return (vt / G) * (u > 30 ? u + Math.LN2 : Math.acosh(Math.exp(u)));
}
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => { const st = (r.hi - r.lo) / r.n; return st >= 1 ? 0 : st >= 0.1 ? 1 : st >= 0.01 ? 2 : 3; };
/* a number in the book's three significant figures, never in exponent form */
const sig3 = (x) => (Math.abs(x) >= 100 ? fmt(x, 0) : Math.abs(x) >= 10 ? fmt(x, 1) : Math.abs(x) >= 1 ? fmt(x, 2) : fmt(x, 3));
/* a mass in the unit that reads best for its size */
const massLabel = (m) => (m >= 1 ? fmt(m, 1) + ' kg' : m >= 1e-3 ? fmt(m * 1e3, 1) + ' g' : fmt(m * 1e6, 1) + ' mg');
/* the same number as LaTeX in scientific form */
function sciTex(x, d) { const p = Math.floor(Math.log10(Math.abs(x))); return `${fmt(x / Math.pow(10, p), d)} \\times 10^{${p}}`; }
/* a ratio smaller than one, said the way the book says it: a hundredth, a thousandth */
const partOf = (x) => { const n = 1 / x; return '1 part in ' + fmt(n, n >= 20 || Math.abs(n - Math.round(n)) < 0.05 ? 0 : 1); };

/* ---------- sprites, in ink ---------- */
/* a skydiver falling face down with arms and legs spread, centred on (x, y) */
function skydiver(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 7; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(-44, -2, 12, 0, TAU); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-34, 0); ctx.lineTo(22, 0);
  ctx.moveTo(-14, 0); ctx.lineTo(-2, -28);
  ctx.moveTo(-14, 0); ctx.lineTo(-2, 28);
  ctx.moveTo(22, 0); ctx.lineTo(46, -24);
  ctx.moveTo(22, 0); ctx.lineTo(46, 24);
  ctx.stroke(); ctx.restore();
}
/* a jar of fluid: the glass from (x1, top) to (x2, bottom), filled from the surface down */
function jar(ctx, x1, x2, top, bottom, surface) {
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(x1, surface, x2 - x1, bottom - surface); ctx.restore();
  line(ctx, x1, surface, x2, surface, PAL.muted, 2);
  line(ctx, x1, top, x1, bottom, PAL.muted, 3);
  line(ctx, x2, top, x2, bottom, PAL.muted, 3);
  line(ctx, x1, bottom, x2, bottom, PAL.muted, 3);
}

/* =====================================================================
   SIM: the drag force against the speed. A body travels through air at
   the speed you set and the drag behind it is drawn to scale, with the
   curve below showing that the force goes as the square of the speed.
   The idea answers its sliders and no clock runs in it, so the figure is
   still and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-drag', 740);
  const TABLE = [['an airfoil', 0.05], ['a Toyota Camry', 0.28], ['a Ford Focus', 0.32], ['a Honda Civic', 0.36], ['a Ferrari Testarossa', 0.37],
    ['a Dodge Ram pickup', 0.43], ['a sphere', 0.45], ['a Hummer H2 SUV', 0.64], ['a skydiver feet first', 0.70], ['a bicycle', 0.90],
    ['a skydiver lying horizontal', 1.0], ['a circular flat plate', 1.12]];
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 20, max: 150, step: 5, value: 100, unit: 'km/h', dec: 0, aria: 'speed through the air' });
  const Cd = ctl(d.controls, { label: 'C', cls: '', min: 0.05, max: 1.12, step: 0.01, value: 0.28, unit: '', dec: 2, aria: 'drag coefficient' });
  const Ar = ctl(d.controls, { label: 'A', cls: '', min: 0.2, max: 3, step: 0.05, value: 0.7, unit: 'm²', dec: 2, aria: 'area facing the fluid' });
  const VMAX = 150;
  const drag = (kmh) => 0.5 * Cd.v * RHO_AIR * Ar.v * Math.pow(kmh / 3.6, 2);
  const named = () => { const m = TABLE.reduce((a, b) => (Math.abs(b[1] - Cd.v) < Math.abs(a[1] - Cd.v) ? b : a)); return Math.abs(m[1] - Cd.v) <= 0.015 ? m[0] : null; };
  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), cv = C('velocity');
    const Fnow = drag(V.v), Ftop = drag(VMAX), Fhalf = drag(V.v / 2);
    /* the scene: the body on a strip, its drag behind it and its velocity in front */
    const yline = 250, cx = 760, cy = yline - 26;
    strip(ctx, 90, 1340, yline, 50);
    car(ctx, cx, cy, PAL.ink, 1.6);
    const Ld = 380 * (Fnow / Ftop), Lv = 380 * (V.v / VMAX);
    arrow(ctx, cx - 74, cy, cx - 74 - Ld, cy, cf, 5);
    text(ctx, 'FD = ' + sig3(Fnow) + ' N', cx - 74 - Ld / 2, 164, cf, { weight: 600, align: 'center' });
    arrow(ctx, cx + 74, cy, cx + 74 + Lv, cy, cv, 5);
    text(ctx, 'v = ' + fmt(V.v, 0) + ' km/h', cx + 74 + Lv / 2, 164, cv, { weight: 600, align: 'center' });
    const who = named();
    text(ctx, who === null ? 'a body with C = ' + fmt(Cd.v, 2) + ' and A = ' + fmt(Ar.v, 2) + ' m²'
      : 'C = ' + fmt(Cd.v, 2) + ', which Table 5.2 gives for ' + who, cx, yline + 58, PAL.muted, { size: 17, align: 'center' });
    /* the graph: the drag against the speed, with the current speed and half of it marked */
    const fr = nice(0, Ftop, 4), fd = decs(fr);
    const g = axes(ctx, { l: 200, r: 1300, t: 400, b: 650 }, [0, VMAX], [0, fr.hi],
      { xl: 'v (km/h)', xc: cv, yl: 'FD (N)', yc: cf, nx: 5, ny: fr.n, fy: (y) => fmt(y, fd) });
    curve(ctx, drag, 0, VMAX, g.X, g.Y, cf, 5, 90);
    line(ctx, g.X(V.v), g.Y(0), g.X(V.v), g.Y(Fnow), cv, 2, [4, 8]);
    line(ctx, g.X(0), g.Y(Fnow), g.X(V.v), g.Y(Fnow), cf, 2, [4, 8]);
    line(ctx, g.X(V.v / 2), g.Y(0), g.X(V.v / 2), g.Y(Fhalf), cv, 2, [4, 8]);
    dot(ctx, g.X(V.v / 2), g.Y(Fhalf), cf, false, 10);
    dot(ctx, g.X(V.v), g.Y(Fnow), cf, true, 10);
    text(ctx, 'half the speed, a quarter of the drag', g.X(V.v / 2) + 16, g.Y(Fhalf) - 36, PAL.muted, { size: 17 });
    headline(ctx, 'At ' + fmt(V.v, 0) + ' km/h the drag is ' + sig3(Fnow) + ' N, four times the ' + sig3(Fhalf) + ' N it would be at half that speed');
    readout(d.readout, `\\kFD = \\tfrac{1}{2}C\\rho A\\kv^2 = \\tfrac{1}{2}(${fmt(Cd.v, 2)})(1.21\\ \\text{kg/m}^3)(${fmt(Ar.v, 2)}\\ \\text{m}^2)(${fmt(V.v / 3.6, 1)}\\ \\text{m/s})^2 = ${sig3(Fnow)}\\ \\text{N}`,
      'The speed enters as its square, so the drag at ' + fmt(V.v, 0) + ' km/h is four times the drag at ' + fmt(V.v / 2, 0) + ' km/h and nine times the drag at ' + fmt(V.v / 3, 0) + ' km/h.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a skydiver falling to terminal velocity. The weight stays the
   same while the drag grows with the speed, and the acceleration falls
   to zero as the two forces come together. The idea has a clock in it
   and the run is finite, so it loops with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-terminal', 760);
  const M = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 120, step: 1, value: 85, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the skydiver' });
  const Ar = ctl(d.controls, { label: 'A', cls: '', min: 0.15, max: 1.2, step: 0.01, value: 0.7, unit: 'm²', dec: 2, onInput: reset, aria: 'area facing the fluid' });
  const Cd = ctl(d.controls, { label: 'C', cls: '', min: 0.4, max: 1.2, step: 0.01, value: 1, unit: '', dec: 2, onInput: reset, aria: 'drag coefficient' });
  const vt = () => Math.sqrt((2 * M.v * G) / (RHO_AIR * Cd.v * Ar.v));
  const total = () => (3.5 * vt()) / G;
  const cy = cycle(total, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), cv = C('velocity'), ca = C('acceleration'), ct = C('time');
    const T = total(), t = cy.now(), V = vt(), v = speed(V, t), w = M.v * G;
    const FD = w * Math.pow(v / V, 2), a = G * (1 - Math.pow(v / V, 2)), depth = fallen(V, t), deep = fallen(V, T);
    /* the scene: a column of air with the skydiver falling down it */
    const top = 170, bot = 690, xl = 180, xr = 460, xc = 310;
    line(ctx, xl, top, xl, bot, PAL.rule, 2); line(ctx, xr, top, xr, bot, PAL.rule, 2);
    text(ctx, 'how far the skydiver has fallen', xc, top - 34, PAL.muted, { size: 17, align: 'center' });
    const Yd = (s) => top + (s / deep) * (bot - top);
    const dr = nice(0, deep, 4);
    for (let i = 0; i <= dr.n; i++) {
      const s = (dr.hi * i) / dr.n; if (s > deep) continue;
      line(ctx, xl, Yd(s), xl + 14, Yd(s), PAL.muted, 2);
      text(ctx, fmt(s, 0) + ' m', xl - 12, Yd(s), PAL.muted, { size: 17, align: 'right' });
    }
    const py = Math.min(bot - 110, Math.max(top + 10, Yd(depth)));
    skydiver(ctx, xc, py, PAL.ink, 0.9);
    arrow(ctx, xc, py + 30, xc, py + 140, cf, 5);
    text(ctx, 'w = ' + sig3(w) + ' N', xc + 16, py + 88, cf, { size: 20, weight: 600 });
    if (FD > 1) {
      const L = 120 * (FD / w);
      arrow(ctx, xc, py - 30, xc, py - 30 - L, cf, 5);
      text(ctx, 'FD = ' + sig3(FD) + ' N', xc + 16, py - 30 - L / 2, cf, { size: 20, weight: 600 });
    }
    if (a > 0.05) {
      arrow(ctx, xc + 200, py, xc + 200, py + 90 * (a / G), ca, 5);
      text(ctx, 'a = ' + fmt(a, 2) + ' m/s²', xc + 214, py + 45 * (a / G), ca, { size: 20, weight: 600 });
    } else text(ctx, 'a = 0', xc + 214, py, ca, { size: 20, weight: 600 });
    /* the graph: the falling speed against time, levelling on the terminal velocity */
    const tr = nice(0, T, 4), td = decs(tr), vr = nice(0, V * 1.15, 4);
    const g = axes(ctx, { l: 720, r: 1330, t: 200, b: 600 }, [0, tr.hi], [0, vr.hi],
      { xl: 't (s)', xc: ct, yl: 'v (m/s)', yc: cv, nx: tr.n, ny: vr.n, fx: (x) => fmt(x, td), fy: (y) => fmt(y, 0) });
    line(ctx, g.X(0), g.Y(V), g.X(tr.hi), g.Y(V), cv, 3, [10, 10]);
    text(ctx, 'vt = ' + fmt(V, 1) + ' m/s', g.X(0) + 16, g.Y(V) - 22, cv, { size: 19, weight: 600 });
    curve(ctx, (s) => speed(V, s), 0, T, g.X, g.Y, cv, 5, 90);
    line(ctx, g.X(t), g.Y(0), g.X(t), g.Y(v), ct, 2, [4, 8]);
    dot(ctx, g.X(t), g.Y(v), PAL.ink, true, 9);
    headline(ctx, t < 0.05 ? 'the skydiver has just been released, so there is no drag yet and the whole weight of ' + sig3(w) + ' N is free to accelerate the fall'
      : a < 0.05 ? 't = ' + fmt(t, 1) + ' s · the drag has grown equal to the weight, ' + sig3(w) + ' N, so the net force is zero and the speed stays at ' + fmt(V, 1) + ' m/s'
        : 't = ' + fmt(t, 1) + ' s · the fall is ' + fmt(v, 1) + ' m/s, the drag is ' + sig3(FD) + ' N against a weight of ' + sig3(w) + ' N, and the acceleration is down to ' + fmt(a, 2) + ' m/s²');
    readout(d.readout, `\\kvt = \\sqrt{\\frac{2m\\kg}{\\rho C A}} = \\sqrt{\\frac{2(${fmt(M.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)}{(1.21\\ \\text{kg/m}^3)(${fmt(Cd.v, 2)})(${fmt(Ar.v, 2)}\\ \\text{m}^2)}} = ${fmt(V, 1)}\\ \\text{m/s}`,
      'That is ' + fmt(V * 3.6, 0) + ' km/h, and the skydiver falls ' + fmt(deep, 0) + ' m in the ' + fmt(T, 1) + ' s it takes to come within a hundredth of it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();

/* =====================================================================
   SIM: the size of the falling body. Two bodies of the same shape and
   different size are released together; the small one settles early and
   slowly, since its weight falls as the cube of its length and the area
   that meets the air only as the square. The fall is finite, so it loops
   with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-size', 740);
  const K = ctl(d.controls, { label: 'k', cls: '', min: 0.05, max: 1, step: 0.01, value: 0.1, unit: '', dec: 2, onInput: reset, aria: 'how many times shorter the second body is' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 120, step: 1, value: 75, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the full-size body' });
  const H = ctl(d.controls, { label: 'h', cls: '', min: 20, max: 900, step: 10, value: 200, unit: 'm', dec: 0, onInput: reset, aria: 'height of the drop' });
  const AREA = 0.7, CD = 1;
  const vtA = () => Math.sqrt((2 * M.v * G) / (RHO_AIR * CD * AREA));
  const vtB = () => vtA() * Math.sqrt(K.v);
  const total = () => Math.max(fallTime(vtA(), H.v), fallTime(vtB(), H.v));
  const cy = cycle(total, 1.2);
  function reset() { cy.reset(); }
  const body = (ctx, x, y, s) => (s < 0.2 ? dot(ctx, x, y, PAL.ink, true, Math.max(4, 46 * s)) : skydiver(ctx, x, y, PAL.ink, s));
  function draw() {
    const { ctx } = begin(d.c);
    const cv = C('velocity'), ct = C('time');
    const T = total(), t = cy.now(), VA = vtA(), VB = vtB(), TA = fallTime(VA, H.v), TB = fallTime(VB, H.v);
    const sA = Math.min(H.v, fallen(VA, t)), sB = Math.min(H.v, fallen(VB, t));
    const vA = speed(VA, Math.min(t, TA)), vB = speed(VB, Math.min(t, TB));
    const mB = M.v * Math.pow(K.v, 3);
    /* the scene: two columns with a body falling down each */
    const top = 160, bot = 650, xA = 250, xB = 500;
    line(ctx, 140, top - 26, 610, top - 26, PAL.muted, 3);
    line(ctx, 140, bot, 610, bot, PAL.muted, 3);
    const Y = (s) => top + (s / H.v) * (bot - top);
    text(ctx, 'full size, ' + fmt(M.v, 0) + ' kg', xA, top - 54, PAL.ink, { size: 19, weight: 600, align: 'center' });
    text(ctx, fmt(K.v, 2) + ' times the length, ' + massLabel(mB), xB, top - 54, PAL.ink, { size: 19, weight: 600, align: 'center' });
    for (const [x, s, sc] of [[xA, sA, 0.8], [xB, sB, 0.8 * K.v]]) {
      line(ctx, x, top - 26, x, bot, PAL.rule, 1.5);
      body(ctx, x, Y(s), sc);
    }
    text(ctx, 'the ground, ' + fmt(H.v, 0) + ' m down', 375, bot + 32, PAL.muted, { size: 17, align: 'center' });
    /* the graph: the two speeds against time, each levelling on its own terminal velocity */
    const tr = nice(0, T, 4), td = decs(tr), vr = nice(0, VA * 1.15, 4);
    const g = axes(ctx, { l: 700, r: 1330, t: 200, b: 590 }, [0, tr.hi], [0, vr.hi],
      { xl: 't (s)', xc: ct, yl: 'v (m/s)', yc: cv, nx: tr.n, ny: vr.n, fx: (x) => fmt(x, td), fy: (y) => fmt(y, 0) });
    line(ctx, g.X(0), g.Y(VA), g.X(tr.hi), g.Y(VA), cv, 3, [10, 10]);
    text(ctx, 'full size, vt = ' + fmt(VA, 1) + ' m/s', g.X(0) + 16, g.Y(VA) - 22, cv, { size: 18, weight: 600 });
    line(ctx, g.X(0), g.Y(VB), g.X(tr.hi), g.Y(VB), alpha(cv, 0.6), 3, [10, 10]);
    text(ctx, 'smaller body, vt = ' + fmt(VB, 1) + ' m/s', g.X(0) + 16, g.Y(VB) - 22, cv, { size: 18, weight: 600 });
    curve(ctx, (s) => speed(VA, s), 0, TA, g.X, g.Y, cv, 5, 90);
    curve(ctx, (s) => speed(VB, s), 0, TB, g.X, g.Y, alpha(cv, 0.6), 5, 90);
    dot(ctx, g.X(TA), g.Y(speed(VA, TA)), cv, false, 10); dot(ctx, g.X(TB), g.Y(speed(VB, TB)), cv, false, 10);
    line(ctx, g.X(t), g.Y(0), g.X(t), g.Y(vr.hi), ct, 2, [4, 8]);
    dot(ctx, g.X(t), g.Y(vA), PAL.ink, true, 9); dot(ctx, g.X(t), g.Y(vB), PAL.ink, true, 9);
    headline(ctx, sA >= H.v && sB >= H.v ? 'both have landed: the full-size body hit the ground at ' + fmt(vA, 1) + ' m/s and the smaller one at ' + fmt(vB, 1) + ' m/s'
      : 't = ' + fmt(t, 1) + ' s · the full-size body is falling at ' + fmt(vA, 1) + ' m/s and the smaller one at ' + fmt(vB, 1) + ' m/s');
    readout(d.readout, `\\kvt \\propto \\sqrt{k}: \\quad (${fmt(VA, 1)}\\ \\text{m/s})\\sqrt{${fmt(K.v, 2)}} = ${fmt(VB, 1)}\\ \\text{m/s}`,
      K.v > 0.995 ? 'The two bodies are the same size, so they meet the same drag at the same speed and settle at the same terminal velocity.'
        : 'Dividing every length by ' + fmt(1 / K.v, 1) + ' reduces the weight to ' + partOf(Math.pow(K.v, 3)) + ' of what it was and the surface facing the air only to '
          + partOf(K.v * K.v) + ', so the resistance to falling is relatively ' + fmt(1 / K.v, 1) + ' times greater and the smaller body settles at ' + fmt(VB, 1)
          + ' m/s rather than ' + fmt(VA, 1) + ' m/s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();

/* =====================================================================
   SIM: Stokes' law. A steel bead sinks through motor oil at the one
   steady speed at which the drag matches its weight, and that speed
   grows as the square of the radius. The fall is timed and finite, so it
   loops with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-stokes', 800);
  const R = ctl(d.controls, { label: 'r', cls: '', min: 0.5, max: 4, step: 0.1, value: 1.5, unit: 'mm', dec: 1, onInput: reset, aria: 'radius of the bead' });
  const ETA = ctl(d.controls, { label: '\\eta', cls: '', min: 0.1, max: 2, step: 0.01, value: 0.76, unit: 'kg/(m·s)', dec: 2, onInput: reset, aria: 'viscosity of the fluid' });
  const DROP = 0.6;
  const steady = (rmm) => (2 * RHO_STEEL * Math.pow(rmm / 1000, 2) * G) / (9 * ETA.v);
  const mass = () => RHO_STEEL * (4 / 3) * Math.PI * Math.pow(R.v / 1000, 3);
  const total = () => DROP / steady(R.v);
  const cy = cycle(total, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), cv = C('velocity');
    const T = total(), t = cy.now(), v = steady(R.v), s = Math.min(DROP, v * t), w = mass() * G;
    /* the scene: a jar of oil with the bead sinking through it */
    const top = 110, bot = 740, xl = 200, xr = 460, xc = 330, surf = 150;
    jar(ctx, xl, xr, top, bot, surf);
    text(ctx, 'motor oil', xc, surf - 26, PAL.muted, { size: 17, align: 'center' });
    const Y = (m) => 230 + (m / DROP) * 410;
    for (let i = 0; i <= 6; i++) {
      const m = (DROP * i) / 6;
      line(ctx, xl, Y(m), xl + 12, Y(m), PAL.muted, 2);
      text(ctx, fmt(m * 100, 0) + ' cm', xl - 12, Y(m), PAL.muted, { size: 17, align: 'right' });
    }
    const rad = 5 + 5 * R.v, py = Y(s);
    arrow(ctx, xc, py + rad + 6, xc, py + rad + 66, cf, 5);
    text(ctx, 'w', xc + 16, py + rad + 40, cf, { size: 20, weight: 600 });
    arrow(ctx, xc, py - rad - 6, xc, py - rad - 66, cf, 5);
    text(ctx, 'Fs', xc + 16, py - rad - 40, cf, { size: 20, weight: 600 });
    dot(ctx, xc, py, PAL.ink, true, rad);
    text(ctx, fmt(v * 1000, 1) + ' mm/s', xr + 20, py, cv, { size: 20, weight: 600 });
    /* the graph: the steady speed against the radius of the bead */
    const vr = nice(0, steady(4) * 1000, 4), vd = decs(vr);
    const g = axes(ctx, { l: 700, r: 1320, t: 210, b: 620 }, [0, 4], [0, vr.hi],
      { xl: 'r (mm)', xc: PAL.ink, yl: 'v (mm/s)', yc: cv, nx: 4, ny: vr.n, fy: (y) => fmt(y, vd) });
    curve(ctx, (x) => steady(x) * 1000, 0, 4, g.X, g.Y, cv, 5, 90);
    line(ctx, g.X(R.v), g.Y(0), g.X(R.v), g.Y(v * 1000), PAL.muted, 2, [4, 8]);
    line(ctx, g.X(0), g.Y(v * 1000), g.X(R.v), g.Y(v * 1000), cv, 2, [4, 8]);
    dot(ctx, g.X(R.v), g.Y(v * 1000), cv, true, 10);
    text(ctx, 'the steady speed grows as the square of the radius', g.X(0) + 16, g.Y(vr.hi) + 28, PAL.muted, { size: 17 });
    headline(ctx, s >= DROP - 1e-9 ? 't = ' + fmt(T, 1) + ' s · the bead has reached the bottom, ' + fmt(DROP * 100, 0) + ' cm down, at the ' + fmt(v * 1000, 1) + ' mm/s it held the whole way'
      : 't = ' + fmt(t, 1) + ' s · the ' + fmt(R.v, 1) + ' mm bead has sunk ' + fmt(s * 100, 1) + ' cm at a steady ' + fmt(v * 1000, 1) + ' mm/s, since the drag matched its weight almost at once');
    readout(d.readout, `\\kFs = 6\\pi r\\eta\\kv = 6\\pi(${sciTex(R.v / 1000, 2)}\\ \\text{m})(${fmt(ETA.v, 2)}\\ \\text{kg/(m}\\cdot\\text{s)})(${fmt(v, 4)}\\ \\text{m/s}) = ${sciTex(w, 2)}\\ \\text{N}`,
      'That is exactly the weight of the bead, ' + massLabel(mass()) + ' of steel at 7.8 × 10³ kg/m³, which is why the speed never changes, and the ' + fmt(DROP * 100, 0) + ' cm fall takes ' + fmt(T, 1) + ' s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();
};
