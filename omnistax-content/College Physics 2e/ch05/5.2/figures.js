/* Figures for section 5.2 Drag Forces. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, topline, axes, curve, pinned, strip, car } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

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
/* draws inside the graph box, so a curve that runs past a fixed range is cut off at the frame
   instead of the frame being stretched to hold it */
const inbox = (ctx, box, f) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); f(); ctx.restore(); };
/* a number in the book's three significant figures, never in exponent form */
const sig3 = (x) => (Math.abs(x) >= 100 ? fmt(x, 0) : Math.abs(x) >= 10 ? fmt(x, 1) : Math.abs(x) >= 1 ? fmt(x, 2) : fmt(x, 3));
/* a mass in the unit that reads best for its size */
const massLabel = (m) => (m >= 1 ? fmt(m, 1) + ' kg' : m >= 1e-3 ? fmt(m * 1e3, 1) + ' g' : fmt(m * 1e6, 1) + ' mg');
/* the same number as LaTeX in scientific form */
function sciTex(x, d) { const p = Math.floor(Math.log10(Math.abs(x))); return `${fmt(x / Math.pow(10, p), d)} \\times 10^{${p}}`; }
/* a ratio smaller than one, said the way the book says it: a hundredth, a thousandth */
const partOf = (x) => { const n = 1 / x; return '1 part in ' + fmt(n, n >= 20 || Math.abs(n - Math.round(n)) < 0.05 ? 0 : 1); };

/* ---------- sprites ---------- */
/* a skydiver spread-eagled, belly to the earth and seen from below, centred on (x, y): a round head,
   a solid torso, and arms and legs thrown out as thick rounded strokes bent at the elbow and knee */
const skydiver = (ctx, x, y, color, s = 1) => F.skydiver(ctx, x, y, s, color);
/* The body the drag coefficient belongs to, in its referent colour. A car, a cyclist, a sphere, a plate or an
   airfoil travels to the right along the road, (x, y) on the road line; a skydiver falls down the page, (x, y) her
   centre. It returns the box the body fills and the height its arrows act at. */
function bluff(ctx, x, y, name, col) {
  if (name === 'a skydiver lying horizontal') { F.skydiver(ctx, x, y, 1, col); return { l: x - 50, r: x + 50, t: y - 58, b: y + 60 }; }
  if (name === 'a skydiver feet first') { F.silhouette(ctx, { x, y: y + 66, s: 0.9, pose: 'stand', color: col, hip: { x: 0, y: -77 }, feet: [{ x: 4, y: 0 }, { x: -4, y: 0 }], hands: [{ x: 8, y: -60 }, { x: 2, y: -60 }] }); return { l: x - 22, r: x + 22, t: y - 72, b: y + 68 }; }
  const cy = y - 26, at = (l, r, t, b, ay) => ({ l, r, t, b, ay });
  if (name === 'a sphere') { dot(ctx, x, cy, col, true, 44); return at(x - 44, x + 44, cy - 44, cy + 44, cy); }
  if (name === 'a circular flat plate') { ctx.save(); ctx.fillStyle = col; ctx.fillRect(x - 9, cy - 56, 18, 112); ctx.restore(); return at(x - 9, x + 9, cy - 56, cy + 56, cy); }
  if (name === 'an airfoil') {
    ctx.save(); ctx.fillStyle = col; ctx.beginPath();
    ctx.moveTo(x - 94, cy + 4); ctx.quadraticCurveTo(x - 10, cy - 36, x + 94, cy - 2);
    ctx.quadraticCurveTo(x - 20, cy + 18, x - 94, cy + 4); ctx.closePath(); ctx.fill(); ctx.restore();
    return at(x - 94, x + 94, cy - 18, cy + 12, cy);
  }
  if (name === 'a bicycle') {
    /* the frame round the bottom bracket B, the wheels standing on the road; the rider sits on the saddle with her
       feet on the pedals and her hands on the bars, joints given in the silhouette's frame from B */
    const bx = x, by = y - 30, P = (u, v) => [bx + u, by + v];
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.arc(...P(-50, 0), 30, 0, TAU); ctx.moveTo(...P(88, 0)); ctx.arc(...P(58, 0), 30, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(...P(-50, 0)); ctx.lineTo(...P(0, 0)); ctx.lineTo(...P(-18, -54)); ctx.lineTo(...P(-50, 0));
    ctx.moveTo(...P(-18, -54)); ctx.lineTo(...P(44, -50)); ctx.lineTo(...P(0, 0)); ctx.moveTo(...P(44, -50)); ctx.lineTo(...P(58, 0));
    ctx.moveTo(...P(44, -50)); ctx.lineTo(...P(42, -64)); ctx.lineTo(...P(54, -66)); ctx.stroke();
    ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(...P(-30, -58)); ctx.lineTo(...P(-10, -58)); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(...P(10, 4)); ctx.lineTo(...P(-10, -4)); ctx.stroke();
    ctx.restore();
    F.silhouette(ctx, { x: bx, y: by, s: 1, pose: 'sit', color: col, hip: { x: -20, y: -64 }, shoulder: { x: 10, y: -102 }, head: { x: 24, y: -120 },
      feet: [{ x: 10, y: 4 }, { x: -10, y: -4 }], hands: [{ x: 52, y: -66 }, { x: 48, y: -64 }] });
    return at(x - 80, x + 88, by - 132, y, by - 40);
  }
  if (name) { car(ctx, x, cy, col, 1.6); return at(x - 64, x + 67, cy - 38, cy + 26, cy - 13); }
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = col; ctx.lineWidth = 4;
  ctx.fillRect(x - 80, cy - 40, 160, 80); ctx.strokeRect(x - 80, cy - 40, 160, 80); ctx.restore();
  return at(x - 82, x + 82, cy - 42, cy + 42, cy);
}
/* two slashes across an arrow cut short of its length, at (x, y) on the shaft running along (ux, uy) */
function cut(ctx, x, y, ux, uy, col) {
  for (const o of [-7, 7]) {
    const cx = x + ux * o, cy = y + uy * o, ex = -uy * 13 + ux * 6, ey = ux * 13 + uy * 6;
    line(ctx, cx - ex, cy - ey, cx + ex, cy + ey, PAL.panel, 7); line(ctx, cx - ex, cy - ey, cx + ex, cy + ey, col, 2.5);
  }
}
/* a jar of fluid: the glass from (x1, top) to (x2, bottom), filled from the surface down */
function jar(ctx, x1, x2, top, bottom, surface, col) {
  ctx.save(); ctx.fillStyle = alpha(col, 0.14); ctx.fillRect(x1, surface, x2 - x1, bottom - surface); ctx.restore();
  line(ctx, x1, surface, x2, surface, PAL.muted, 2);
  line(ctx, x1, top, x1, bottom, PAL.muted, 3);
  line(ctx, x2, top, x2, bottom, PAL.muted, 3);
  line(ctx, x1, bottom, x2, bottom, PAL.muted, 3);
}
/* =====================================================================
   SIM: the drag force against the speed. A body moves through air at
   the speed you set with its drag drawn to scale, and the curve below
   shows that the force goes as the square of the speed. Each value of
   Table 5.2 draws the body it belongs to, moving the way it really
   moves: the cars, the cyclist and the shapes along a road, the two
   skydivers down a column of air. The idea answers its sliders and no
   clock runs in it, so the figure is still and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-drag', 850);
  const TABLE = [['an airfoil', 0.05], ['a Toyota Camry', 0.28], ['a Ford Focus', 0.32], ['a Honda Civic', 0.36], ['a Ferrari Testarossa', 0.37],
    ['a Dodge Ram pickup', 0.43], ['a sphere', 0.45], ['a Hummer H2 SUV', 0.64], ['a skydiver feet first', 0.70], ['a bicycle', 0.90],
    ['a skydiver lying horizontal', 1.0], ['a circular flat plate', 1.12]];
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 20, max: 150, step: 5, value: 100, unit: 'km/h', dec: 0, aria: 'speed through the air' });
  /* every value Table 5.2 prints is a tick on the drag-coefficient slider, and the hundredth the
     slider steps by lands on each of them exactly */
  const Cd = ctl(d.controls, { label: 'C', cls: '', min: 0.05, max: 1.12, step: 0.01, value: 0.28, unit: '', dec: 2, aria: 'drag coefficient', detents: TABLE.map((t) => t[1]) });
  const Ar = ctl(d.controls, { label: '\\karea', cls: 'area', min: 0.2, max: 3, step: 0.05, value: 0.7, unit: 'm²', dec: 2, aria: 'area facing the fluid' });
  const VMAX = 150;
  const drag = (kmh) => 0.5 * Cd.v * RHO_AIR * Ar.v * Math.pow(kmh / 3.6, 2);
  const named = () => { const m = TABLE.reduce((a, b) => (Math.abs(b[1] - Cd.v) < Math.abs(a[1] - Cd.v) ? b : a)); return Math.abs(m[1] - Cd.v) <= 0.015 ? m[0] : null; };
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), cv = C('velocity'), cb = F.ref('body');
    const Fnow = drag(V.v), Fhalf = drag(V.v / 2), who = named();
    const n = headline(ctx, 'At ' + fmt(V.v, 0) + ' km/h the drag is ' + sig3(Fnow) + ' N, four times the ' + sig3(Fhalf) + ' N it would be at half that speed');
    const lab = F.labeller(ctx, 850, { headline: n }), top = n === 2 ? 106 : 80;
    const name = who === null ? 'a bluff body with C = ' + fmt(Cd.v, 2) : who + ', C = ' + fmt(Cd.v, 2) + ' in Table 5.2';
    /* the scene. Arrows are to one scale within each scene: along the road 1.2 units a newton and 380 units for
       150 km/h, down the column of air, which is shorter, 0.45 units a newton and 115 units for 150 km/h. A drag
       longer than the room left is cut short with two slashes, and its label still gives its size. */
    let dseg, vseg, box, cutD = false;
    if (who && who.indexOf('skydiver') >= 0) {
      const cx = 820, cy = 300;
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(cx - 25, top, 50, 490 - top); ctx.restore();
      line(ctx, cx, top, cx, 490, PAL.panel, 3, [22, 18]);
      box = bluff(ctx, cx, cy, who, cb);
      const room = box.t - 6 - top, Ld = Math.min(0.45 * Fnow, room);
      cutD = 0.45 * Fnow > room;
      dseg = { x1: cx, y1: box.t - 6, x2: cx, y2: box.t - 6 - Ld };
      vseg = { x1: cx, y1: box.b + 6, x2: cx, y2: box.b + 6 + (115 * V.v) / VMAX };
      lab.place(box); lab.place({ l: cx - 25, r: cx + 25, t: top, b: 490 });
      lab.add(name, box.l - 30, cy, -1, 0, cb, 17, 10);
    } else {
      const yl = 300, cx = 820;
      strip(ctx, 90, 1340, yl, 50);
      box = bluff(ctx, cx, yl, who, cb);
      const room = box.l - 6 - 100, Ld = Math.min(1.2 * Fnow, room);
      cutD = 1.2 * Fnow > room;
      dseg = { x1: box.l - 6, y1: box.ay, x2: box.l - 6 - Ld, y2: box.ay };
      vseg = { x1: box.r + 6, y1: box.ay, x2: box.r + 6 + (380 * V.v) / VMAX, y2: box.ay };
      lab.place(box);
      lab.add(name, cx, yl + 30, 0, 1, cb, 17, 26);
    }
    arrow(ctx, dseg.x1, dseg.y1, dseg.x2, dseg.y2, cf, 5);
    if (cutD) { const L = Math.hypot(dseg.x2 - dseg.x1, dseg.y2 - dseg.y1); cut(ctx, (dseg.x1 + dseg.x2) / 2, (dseg.y1 + dseg.y2) / 2, (dseg.x2 - dseg.x1) / L, (dseg.y2 - dseg.y1) / L, cf); }
    arrow(ctx, vseg.x1, vseg.y1, vseg.x2, vseg.y2, cv, 5);
    lab.beside(dseg, 'right', 'F_D = ' + sig3(Fnow) + ' N', cf, 22);
    lab.beside(vseg, 'left', 'v = ' + fmt(V.v, 0) + ' km/h', cv, 22);
    /* the graph: the drag against the speed, the current speed filled and half of it hollow */
    /* fixed axes: the speed slider stops at 150 km/h, so the speed axis is always 0 to 150. The
       bluntest, largest body the sliders allow, C = 1.12 and A = 3 m², would meet 3,530 N of drag at
       that speed, and an axis that tall would leave the Camry the figure opens with, which meets
       206 N, in a seventeenth of the height. So the drag axis is fixed at 0 to 250 N, which holds
       that car comfortably, and a bluffer body climbs off the top as a pinned marker. Neither range
       changes as a slider moves. */
    const FR = 250, g0 = { l: 200, r: 1300, t: 556, b: 776 };
    const g = axes(ctx, g0, [0, VMAX], [0, FR],
      { xl: 'v (km/h)', xc: cv, yl: 'F_D (N)', yc: cf, nx: 5, ny: 5, fy: (y) => fmt(y, 0) });
    inbox(ctx, g0, () => {
      curve(ctx, drag, 0, VMAX, g.X, g.Y, cf, 5, 90);
      line(ctx, g.X(V.v), g.Y(0), g.X(V.v), g.Y(Fnow), cv, 2, [4, 8]);
      line(ctx, g.X(0), g.Y(Fnow), g.X(V.v), g.Y(Fnow), cf, 2, [4, 8]);
      line(ctx, g.X(V.v / 2), g.Y(0), g.X(V.v / 2), g.Y(Fhalf), cv, 2, [4, 8]);
      line(ctx, g.X(0), g.Y(Fhalf), g.X(V.v / 2), g.Y(Fhalf), cf, 2, [4, 8]);
    });
    const ph = Fhalf <= FR ? (dot(ctx, g.X(V.v / 2), g.Y(Fhalf), cf, false, 10), { x: g.X(V.v / 2), y: g.Y(Fhalf) }) : pinned(ctx, g0, g.X, g.Y, V.v / 2, Fhalf, cf, sig3(Fhalf) + ' N');
    const pn = pinned(ctx, g0, g.X, g.Y, V.v, Fnow, cf, sig3(Fnow) + ' N');
    lab.flush();
    hits = [{ x: pn.x, y: pn.y, r: 18, name: 'the drag at ' + fmt(V.v, 0) + ' km/h' }, { x: ph.x, y: ph.y, r: 18, name: 'the drag at half the speed, ' + fmt(V.v / 2, 1) + ' km/h' },
      { x: (box.l + box.r) / 2, y: (box.t + box.b) / 2, r: Math.max(box.r - box.l, box.b - box.t) / 2, name: name }];
    tex(d.readout, `\\kFD = \\tfrac{1}{2}C\\krhomat\\karea\\kv^2 = \\tfrac{1}{2}(${fmt(Cd.v, 2)})(1.21\\ \\text{kg/m}^3)(${fmt(Ar.v, 2)}\\ \\text{m}^2)(${fmt(V.v / 3.6, 1)}\\ \\text{m/s})^2 = ${sig3(Fnow)}\\ \\text{N}`);
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
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 120, step: 1, value: 85, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the skydiver' });
  const Ar = ctl(d.controls, { label: '\\karea', cls: 'area', min: 0.15, max: 1.2, step: 0.01, value: 0.7, unit: 'm²', dec: 2, onInput: reset, aria: 'area facing the fluid' });
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
    text(ctx, 'how far the skydiver has fallen', 24, top - 34, PAL.muted, { size: 17 });
    /* fixed scene scale: the column is ruled 0 to 1000 m and never rescales. The skydiver the figure
       opens with falls 564 m in the run and so fills most of it; a heavier or sleeker one falls past
       the bottom, where the drawing holds her at the last mark and the note says how far she has gone. */
    const DEEP = 1000, Yd = (s) => top + 50 + (Math.min(s, DEEP) / DEEP) * (bot - top - 110);
    for (let i = 0; i <= 5; i++) {
      const s = (DEEP * i) / 5;
      line(ctx, xl, Yd(s), xl + 14, Yd(s), PAL.muted, 2);
      text(ctx, fmt(s, 0) + ' m', xl - 12, Yd(s), PAL.muted, { size: 17, align: 'right' });
    }
    const py = Yd(depth);
    if (depth > DEEP) text(ctx, 'fallen ' + fmt(depth, 0) + ' m, past the column', xc, bot + 26, PAL.muted, { size: 17, align: 'center' });
    skydiver(ctx, xc, py, F.ref('skydiver'), 0.8);
    /* the weight leaves her centre and the drag meets her from below, so it leaves her belly */
    arrow(ctx, xc, py + 10, xc, py + 56 + 120, cf, 5);
    text(ctx, 'w = ' + sig3(w) + ' N', xc + 40, py + 120, cf, { size: 20, weight: 600, bg: PAL.panel });
    if (FD > 1) {
      const L = 120 * (FD / w);
      arrow(ctx, xc, py - 10, xc, py - 10 - 50 - L, cf, 5);
      text(ctx, 'F_D = ' + sig3(FD) + ' N', xc + 40, py - 60 - L / 2, cf, { size: 20, weight: 600, bg: PAL.panel });
    }
    if (a > 0.05) {
      arrow(ctx, xc + 200, py, xc + 200, py + 90 * (a / G), ca, 5);
      text(ctx, 'a = ' + fmt(a, 2) + ' m/s²', xc + 214, py + 45 * (a / G), ca, { size: 20, weight: 600 });
    } else text(ctx, 'a = 0', xc + 214, py, ca, { size: 20, weight: 600 });
    /* the graph: the falling speed against time, levelling on the terminal velocity */
    /* fixed axes: the smallest, sleekest, heaviest body the sliders allow falls at 180 m/s and takes
       3.5 vt / g = 64 s to settle there, and a graph that large would leave the skydiver the figure
       opens with, who reaches 44 m/s in 16 s, in a fifth of its width and a fifth of its height. So
       the graph is fixed at 0 to 20 s by 0 to 60 m/s, which holds that fall comfortably, and a faster
       one runs off the edges as a pinned marker. Neither range changes as a slider moves. */
    const TR = 20, VR = 60, box = { l: 720, r: 1330, t: 200, b: 600 };
    const g = axes(ctx, box, [0, TR], [0, VR],
      { xl: 't (s)', xc: ct, yl: 'v (m/s)', yc: cv, nx: 5, ny: 3, fx: (x) => fmt(x, 0), fy: (y) => fmt(y, 0) });
    inbox(ctx, box, () => {
      line(ctx, g.X(0), g.Y(V), g.X(TR), g.Y(V), cv, 3, [10, 10]);
      if (V <= VR) text(ctx, 'v_t = ' + fmt(V, 1) + ' m/s', g.X(0) + 16, g.Y(V) - 22, cv, { size: 19, weight: 600 });
      curve(ctx, (s) => speed(V, s), 0, Math.min(T, TR), g.X, g.Y, cv, 5, 90);
      line(ctx, g.X(t), g.Y(0), g.X(t), g.Y(v), ct, 2, [4, 8]);
    });
    pinned(ctx, box, g.X, g.Y, t, v, PAL.ink, fmt(v, 1) + ' m/s');
    if (V > VR) text(ctx, 'v_t = ' + fmt(V, 1) + ' m/s, above this graph', g.X(TR) - 16, box.b - 24, cv, { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    headline(ctx, t < 0.05 ? 'The skydiver has just been released, so there is no drag yet and the whole weight of ' + sig3(w) + ' N is free to accelerate the fall'
      : a < 0.05 ? 'After ' + fmt(t, 1) + ' s the drag has grown equal to the weight, ' + sig3(w) + ' N, so the net force is zero and the speed stays at ' + fmt(V, 1) + ' m/s'
        : 'After ' + fmt(t, 1) + ' s the fall is ' + fmt(v, 1) + ' m/s, the drag is ' + sig3(FD) + ' N against a weight of ' + sig3(w) + ' N, and the acceleration is down to ' + fmt(a, 2) + ' m/s²');
    readout(d.readout, `\\kvt = \\sqrt{\\frac{2\\km\\kg}{\\krhomat C \\karea}} = \\sqrt{\\frac{2(${fmt(M.v, 0)}\\ \\text{kg})(9.80\\ \\text{m/s}^2)}{(1.21\\ \\text{kg/m}^3)(${fmt(Cd.v, 2)})(${fmt(Ar.v, 2)}\\ \\text{m}^2)}} = ${fmt(V, 1)}\\ \\text{m/s}`,
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
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 10, max: 120, step: 1, value: 75, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the full-size body' });
  const H = ctl(d.controls, { label: 'h', cls: '', min: 20, max: 900, step: 10, value: 200, unit: 'm', dec: 0, onInput: reset, aria: 'height of the drop' });
  const AREA = 0.7, CD = 1;
  const vtA = () => Math.sqrt((2 * M.v * G) / (RHO_AIR * CD * AREA));
  const vtB = () => vtA() * Math.sqrt(K.v);
  const total = () => Math.max(fallTime(vtA(), H.v), fallTime(vtB(), H.v));
  const cy = cycle(total, 1.2);
  function reset() { cy.reset(); }
  const body = (ctx, x, y, s, col) => (s < 0.2 ? dot(ctx, x, y, col, true, Math.max(4, 46 * s)) : skydiver(ctx, x, y, col, s));
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
    const Y = (s) => top + 20 + (s / H.v) * (bot - top - 66);         /* her feet reach the ground line, not past it */
    const cA = F.ref('body-full'), cB = F.ref('body-small');
    text(ctx, 'full size, ' + fmt(M.v, 0) + ' kg', xA, top - 54, cA, { size: 19, weight: 600, align: 'center' });
    text(ctx, fmt(K.v, 2) + ' times the length, ' + massLabel(mB), xB, top - 54, cB, { size: 19, weight: 600, align: 'center' });
    for (const [x, s, sc, col] of [[xA, sA, 0.8, cA], [xB, sB, 0.8 * K.v, cB]]) {
      line(ctx, x, top - 26, x, bot, PAL.rule, 1.5);
      body(ctx, x, Y(s), sc, col);
    }
    text(ctx, 'the ground, ' + fmt(H.v, 0) + ' m down', 375, bot + 32, PAL.muted, { size: 17, align: 'center' });
    /* the graph: the two speeds against time, each levelling on its own terminal velocity */
    /* fixed axes: the heaviest body the slider allows falls at 53 m/s, and the smallest body dropped
       from the greatest height takes some four minutes to land, so a graph that wide would leave the
       200 m drop the figure opens with, which lasts 16 s and reaches 42 m/s, in a sixteenth of its
       width. So the graph is fixed at 0 to 20 s by 0 to 60 m/s, which holds that drop comfortably,
       and a longer fall runs off the right edge as a pinned marker. Neither range changes as a
       slider moves. */
    const TR = 20, VR = 60, box = { l: 700, r: 1330, t: 200, b: 590 };
    const g = axes(ctx, box, [0, TR], [0, VR],
      { xl: 't (s)', xc: ct, yl: 'v (m/s)', yc: cv, nx: 5, ny: 3, fx: (x) => fmt(x, 0), fy: (y) => fmt(y, 0) });
    inbox(ctx, box, () => {
      line(ctx, g.X(0), g.Y(VA), g.X(TR), g.Y(VA), cv, 3, [10, 10]);
      line(ctx, g.X(0), g.Y(VB), g.X(TR), g.Y(VB), alpha(cv, 0.6), 3, [10, 10]);
      curve(ctx, (s) => speed(VA, s), 0, Math.min(TA, TR), g.X, g.Y, cv, 5, 90);
      curve(ctx, (s) => speed(VB, s), 0, Math.min(TB, TR), g.X, g.Y, alpha(cv, 0.6), 5, 90);
      line(ctx, g.X(t), g.Y(0), g.X(t), g.Y(VR), ct, 2, [4, 8]);
    });
    /* the names over the middle of their lines, where both curves have levelled below them and clear
       of the landing marks pinned at the right edge, on panels so the time line never runs through
       them; when the two terminal velocities lie within a label's height of each other the second
       name goes under its line at the right end */
    const vlab = { size: 18, weight: 600, bg: PAL.panel }, close = g.Y(VB) - g.Y(VA) < 44;
    text(ctx, 'full size, v_t = ' + fmt(VA, 1) + ' m/s', g.X(0.45 * TR), g.Y(VA) - 26, cv, vlab);
    if (close) text(ctx, 'smaller body, v_t = ' + fmt(VB, 1) + ' m/s', g.X(TR) - 16, g.Y(VB) + 26, cv, { ...vlab, align: 'right' });
    else text(ctx, 'smaller body, v_t = ' + fmt(VB, 1) + ' m/s', g.X(0.45 * TR), g.Y(VB) - 26, cv, vlab);
    pinned(ctx, box, g.X, g.Y, TA, speed(VA, TA), cv, 'lands at ' + fmt(TA, 1) + ' s');
    pinned(ctx, box, g.X, g.Y, TB, speed(VB, TB), cv, 'lands at ' + fmt(TB, 1) + ' s');
    pinned(ctx, box, g.X, g.Y, t, vA, PAL.ink); pinned(ctx, box, g.X, g.Y, t, vB, PAL.ink);
    hits = [[TA, VA, 'the full-size body lands at ' + fmt(TA, 1) + ' s'], [TB, VB, 'the smaller body lands at ' + fmt(TB, 1) + ' s']]
      .filter((q) => q[0] <= TR).map(([tt, vv, name]) => ({ x: g.X(tt), y: g.Y(speed(vv, tt)), r: 20, name }));
    headline(ctx, sA >= H.v && sB >= H.v ? 'Both have landed: the full-size body hit the ground at ' + fmt(vA, 1) + ' m/s and the smaller one at ' + fmt(vB, 1) + ' m/s'
      : 'After ' + fmt(t, 1) + ' s the full-size body is falling at ' + fmt(vA, 1) + ' m/s and the smaller one at ' + fmt(vB, 1) + ' m/s');
    readout(d.readout, `\\kvt \\propto \\sqrt{k}: \\quad (${fmt(VA, 1)}\\ \\text{m/s})\\sqrt{${fmt(K.v, 2)}} = ${fmt(VB, 1)}\\ \\text{m/s}`);
  }
  let hits = [];
  F.hover(d.stage, () => hits);
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
  const R = ctl(d.controls, { label: '\\krad', cls: 'position', min: 0.5, max: 4, step: 0.1, value: 1.5, unit: 'mm', dec: 1, onInput: reset, aria: 'radius of the bead' });
  const ETA = ctl(d.controls, { label: '\\ketav', cls: 'viscosity', min: 0.1, max: 2, step: 0.01, value: 0.76, unit: 'kg/(m·s)', dec: 2, onInput: reset, aria: 'viscosity of the fluid' });
  const DROP = 0.6, RHO_OIL = 900;
  const steady = (rmm) => (2 * RHO_STEEL * Math.pow(rmm / 1000, 2) * G) / (9 * ETA.v);
  /* Stokes' law holds while the flow round the bead stays smooth, which is while the Reynolds number
     ρ v (2r) / η is of order one or less. Solving Re = 1 for the radius gives the largest bead this
     oil will carry smoothly, past which the drawing has no claim to make. */
  const rSmooth = () => 1000 * Math.cbrt((9 * ETA.v * ETA.v) / (4 * RHO_OIL * RHO_STEEL * G));
  const reynolds = (rmm) => (RHO_OIL * steady(rmm) * 2 * (rmm / 1000)) / ETA.v;
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
    const co = F.ref('oil');
    jar(ctx, xl, xr, top, bot, surf, co);
    text(ctx, 'motor oil', xc, surf - 26, co, { size: 17, align: 'center' });
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
    text(ctx, 'F_s', xc + 16, py - rad - 40, cf, { size: 20, weight: 600 });
    dot(ctx, xc, py, F.ref('bead'), true, rad);
    text(ctx, fmt(v * 1000, 1) + ' mm/s', xr + 20, py, cv, { size: 20, weight: 600 });
    /* the graph: the steady speed against the radius of the bead */
    /* fixed axes: the radius slider stops at 4 mm, so the radius runs 0 to 4 mm. The largest bead in
       the thinnest oil the viscosity slider allows would sink at 2,720 mm/s, and an axis that tall
       would leave the motor oil the figure opens with, in which that bead sinks at 358 mm/s, in an
       eighth of the height. So the speed axis is fixed at 0 to 400 mm/s, which holds that oil
       comfortably, and a thinner one carries the bead off the top as a pinned marker. Neither range
       changes as a slider moves. */
    const VR = 400, box = { l: 700, r: 1320, t: 210, b: 620 };
    const g = axes(ctx, box, [0, 4], [0, VR],
      { xl: 'r (mm)', xc: C('position'), yl: 'v (mm/s)', yc: cv, nx: 4, ny: 4, fy: (y) => fmt(y, 0) });
    const rMax = rSmooth(), rough = R.v > rMax;
    inbox(ctx, box, () => {
      /* the curve is drawn in the velocity hue while Stokes' law holds and greyed past the radius at
         which the flow round the bead stops being smooth */
      curve(ctx, (x) => steady(x) * 1000, 0, Math.min(4, rMax), g.X, g.Y, cv, 5, 90);
      if (rMax < 4) {
        curve(ctx, (x) => steady(x) * 1000, rMax, 4, g.X, g.Y, PAL.muted, 5, 90);
        line(ctx, g.X(rMax), box.t, g.X(rMax), box.b, PAL.muted, 2, [8, 8]);
      }
      line(ctx, g.X(R.v), g.Y(0), g.X(R.v), g.Y(v * 1000), PAL.muted, 2, [4, 8]);
      line(ctx, g.X(0), g.Y(v * 1000), g.X(R.v), g.Y(v * 1000), cv, 2, [4, 8]);
    });
    /* above the frame, where neither the live point nor its drop lines reach */
    if (rMax < 4) {
      const say = 'past ' + fmt(rMax, 1) + ' mm the flow is no longer smooth', lw = 1.15 * F.measure(ctx, say, { size: 17 });
      text(ctx, say, Math.min(Math.max(g.X(rMax), box.l + 160 + lw / 2), 1390 - lw / 2), box.t - 16, PAL.muted, { size: 17, align: 'center' });
    }
    pinned(ctx, box, g.X, g.Y, R.v, v * 1000, rough ? PAL.muted : cv, fmt(v * 1000, 1) + ' mm/s');
    topline(ctx, rough
      ? 'A bead of ' + fmt(R.v, 1) + ' mm is too large for this oil to carry smoothly, so Stokes\u2019 law no longer holds and the ' + fmt(v * 1000, 1) + ' mm/s drawn here is only what it would predict'
      : s >= DROP - 1e-9 ? 'After ' + fmt(T, 1) + ' s the bead has reached the bottom, ' + fmt(DROP * 100, 0) + ' cm down, at the ' + fmt(v * 1000, 1) + ' mm/s it held the whole way'
        : 'After ' + fmt(t, 1) + ' s the ' + fmt(R.v, 1) + ' mm bead has sunk ' + fmt(s * 100, 1) + ' cm at a steady ' + fmt(v * 1000, 1) + ' mm/s, since the drag matched its weight almost at once');
    readout(d.readout, `\\kFs = 6\\pi\\krad\\ketav\\kv = 6\\pi(${sciTex(R.v / 1000, 2)}\\ \\text{m})(${fmt(ETA.v, 2)}\\ \\text{kg/(m}\\cdot\\text{s)})(${fmt(v, 4)}\\ \\text{m/s}) = ${sciTex(w, 2)}\\ \\text{N}`,
      'That is the weight of the bead, ' + massLabel(mass()) + ' of steel, so the speed never changes and the ' + fmt(DROP * 100, 0) + ' cm fall takes ' + fmt(T, 1) + ' s.'
      + (rough ? ' Here the Reynolds number is ' + fmt(reynolds(R.v), 0) + ', past the one the smooth flow of Stokes\u2019 law needs, so the real bead falls more slowly than the line says.' : ''));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => total() / 5), draw });
})();
};
