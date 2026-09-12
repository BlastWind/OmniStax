/* Figures for section 6.5 Newton's Universal Law of Gravitation. Boots against
   the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers the section works with ---------- */
/* The measured value the text quotes, and the three-figure value the text
   substitutes when it works out g at Earth's surface and at the Moon. Each
   figure uses the one the passage it belongs to uses, so every figure
   reproduces the book's own arithmetic. */
const G_MEASURED = 6.674e-11, G_THREE = 6.67e-11;
const M_EARTH = 5.98e24, R_EARTH = 6.38e6;          /* the values the text substitutes */
const M_MOON = 7.35e22, R_MOON_ORBIT = 3.84e8, T_MOON = 27.3;
const TAU = 2 * Math.PI, RAD = Math.PI / 180;

/* a number in scientific notation, for the canvas and for the readout */
const SUP = { '-': '\u207B', 0: '\u2070', 1: '\u00B9', 2: '\u00B2', 3: '\u00B3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079' };
function split(x, d) {
  if (x === 0) return { m: (0).toFixed(d), e: 0 };
  let e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  if (Math.abs(+m.toFixed(d)) >= 10) { m /= 10; e += 1; }
  return { m: m.toFixed(d), e };
}
const sup = (n) => String(n).split('').map((c) => SUP[c]).join('');
const sci = (x, d = 2) => { const { m, e } = split(x, d); return e === 0 ? m : m + ' \u00D7 10' + sup(e); };
const texSci = (x, d = 2) => { const { m, e } = split(x, d); return e === 0 ? m : `${m} \\times 10^{${e}}`; };

/* ---------- sprites, in ink ---------- */
/* a filled sphere of radius r centred on (x, y), with a lighter cap so that it reads as a body */
function sphere(ctx, x, y, r, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.22); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x - r * 0.32, y - r * 0.32, r * 0.28, 0, TAU); ctx.fillStyle = alpha(color, 0.35); ctx.fill(); ctx.restore();
}
/* a small house standing on (x, y), its base on the ground, rotated so that up is away from (cx, cy) */
function house(ctx, x, y, a, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.fillStyle = alpha(color, 0.18);
  ctx.beginPath(); ctx.moveTo(-16, 0); ctx.lineTo(-16, -20); ctx.lineTo(0, -32); ctx.lineTo(16, -20); ctx.lineTo(16, 0); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the Moon: a disc with three craters */
function moon(ctx, x, y, r, color) {
  sphere(ctx, x, y, r, color);
  ctx.save(); ctx.fillStyle = alpha(color, 0.45);
  [[-0.35, -0.2, 0.22], [0.28, 0.1, 0.18], [-0.05, 0.42, 0.13]].forEach(([u, v, k]) => { ctx.beginPath(); ctx.arc(x + u * r, y + v * r, k * r, 0, TAU); ctx.fill(); });
  ctx.restore();
}
/* the Sun: a disc with eight rays */
function sun(ctx, x, y, r, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.3); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  for (let i = 0; i < 8; i++) { const a = (i * TAU) / 8; ctx.beginPath(); ctx.moveTo(x + r * 1.2 * Math.cos(a), y + r * 1.2 * Math.sin(a)); ctx.lineTo(x + r * 1.6 * Math.cos(a), y + r * 1.6 * Math.sin(a)); ctx.stroke(); }
  ctx.restore();
}

/* =====================================================================
   FIGURE 6.18: the two bodies, the line joining their centers of mass and
   the equal and opposite forces. The force answers the two masses and the
   separation and nothing else, so nothing here runs on a clock: a still
   picture with no transport.
===================================================================== */
(function () {
  const d = sim('sim-two-masses', 640);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.5, max: 100, step: 0.5, value: 1, unit: 'kg', dec: 3, aria: 'the smaller mass' });
  const M = ctl(d.controls, { label: 'M', cls: '', min: 0.5, max: 100, step: 0.5, value: 1, unit: 'kg', dec: 3, aria: 'the larger mass' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.5, max: 5, step: 0.05, value: 1, unit: 'm', dec: 3, aria: 'the distance between the centers of mass' });
  const force = (sep) => (G_MEASURED * m.v * M.v) / (sep * sep);
  function draw() {
    const { ctx } = begin(d.c);
    const Fnow = force(r.v);
    /* the scene: two bodies on a line, drawn larger for a larger mass */
    const cy = 220, sepPx = 270 + ((r.v - 0.5) / 4.5) * 490;
    const x1 = 700 - sepPx / 2, x2 = 700 + sepPx / 2;
    const rad = (kg) => 26 + 34 * Math.pow(kg / 100, 1 / 3);
    const r1 = rad(m.v), r2 = rad(M.v), low = cy + Math.max(r1, r2);
    line(ctx, x1, cy, x2, cy, PAL.rule, 2, [10, 10]);
    sphere(ctx, x1, cy, r1, PAL.ink); sphere(ctx, x2, cy, r2, PAL.ink);
    dot(ctx, x1, cy, PAL.ink, true, 5); dot(ctx, x2, cy, PAL.ink, true, 5);
    text(ctx, 'm = ' + fmt(m.v, 3) + ' kg', x1, cy - r1 - 34, PAL.ink, { weight: 600, align: 'center' });
    text(ctx, 'M = ' + fmt(M.v, 3) + ' kg', x2, cy - r2 - 34, PAL.ink, { weight: 600, align: 'center' });
    text(ctx, 'center of mass', x1, low + 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'center of mass', x2, low + 30, PAL.muted, { size: 17, align: 'center' });
    /* the two forces, the same length whatever the masses are */
    const len = Math.max(30, Math.min(100, (sepPx - r1 - r2) / 2 - 18));
    arrow(ctx, x1 + r1 + 8, cy, x1 + r1 + 8 + len, cy, C('force'), 5);
    arrow(ctx, x2 - r2 - 8, cy, x2 - r2 - 8 - len, cy, C('force'), 5);
    text(ctx, 'F', x1 + r1 + 8 + len / 2, cy - 28, C('force'), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'F', x2 - r2 - 8 - len / 2, cy - 28, C('force'), { size: 24, weight: 600, align: 'center' });
    hbracket(ctx, x1, x2, low + 78, C('position'), 'r = ' + fmt(r.v, 3) + ' m');
    /* the graph: how the force falls away as the bodies are drawn apart */
    const box = { l: 190, r: 1300, t: 400, b: 570 };
    const Fhi = force(0.5), dec = split(Fhi, 2).e, k = Math.pow(10, dec);
    const yr = nice(0, Fhi / k, 4);
    const ax = axes(ctx, box, [0, 5], [0, yr.hi], { xl: 'r (m)', xc: C('position'), yl: 'F (10' + sup(dec) + ' N)', yc: C('force'), nx: 5, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, yr.hi / yr.n < 1 ? 1 : 0) });
    curve(ctx, (s) => force(s) / k, 0.5, 5, ax.X, ax.Y, C('force'), 5, 120);
    line(ctx, ax.X(r.v), ax.Y(0), ax.X(r.v), ax.Y(Fnow / k), PAL.muted, 2, [4, 8]);
    dot(ctx, ax.X(r.v), ax.Y(Fnow / k), C('force'), true, 10);
    headline(ctx, 'masses of ' + fmt(m.v, 3) + ' kg and ' + fmt(M.v, 3) + ' kg, ' + fmt(r.v, 3) + ' m apart, attract each other with ' + sci(Fnow, 3) + ' N, the same force on each');
    readout(d.readout, `\\kF = G\\frac{mM}{\\kr^2} = \\frac{(${texSci(G_MEASURED, 3)})(${fmt(m.v, 3)}\\ \\text{kg})(${fmt(M.v, 3)}\\ \\text{kg})}{(${fmt(r.v, 3)}\\ \\text{m})^2} = ${texSci(Fnow, 3)}\\ \\text{N}`,
      'The arrow drawn on each body is the same length, because the force the smaller mass feels is equal in magnitude to the force the larger one feels, as Newton\u2019s third law requires. Drawing the bodies twice as far apart leaves a quarter of the force, which is the curve below the scene.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 6.19: the house on the surface of a body, and the radius that is
   very nearly the distance between the two centers of mass. The figure
   answers its two sliders and nothing accumulates as a clock runs, so it
   is a still picture with no transport.
===================================================================== */
(function () {
  const d = sim('sim-surface-gravity', 560);
  const mass = ctl(d.controls, { label: 'M/M_\\oplus', cls: '', min: 0.01, max: 320, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the mass of the body in Earth masses' });
  const rad = ctl(d.controls, { label: 'r/r_\\oplus', cls: '', min: 0.1, max: 12, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the radius of the body in Earth radii' });
  function draw() {
    const { ctx } = begin(d.c);
    const M = mass.v * M_EARTH, R = rad.v * R_EARTH;
    const gs = (G_THREE * M) / (R * R);
    /* the scene: the body, its center of mass, the radius out to a house on the surface */
    const cx = 340, cy = 330, Rpx = 46 + 132 * Math.sqrt(rad.v / 12);
    sphere(ctx, cx, cy, Rpx, PAL.ink);
    dot(ctx, cx, cy, PAL.ink, true, 7);
    text(ctx, 'center of mass', cx, cy + 26, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the radius, drawn down to the left where the house is not */
    const b = 205 * RAD, bx = cx + Rpx * Math.cos(b), by = cy + Rpx * Math.sin(b);
    arrow(ctx, cx, cy, bx, by, C('position'), 4);
    text(ctx, 'r = ' + sci(R, 2) + ' m', bx - 12, by + 20, C('position'), { weight: 600, align: 'right' });
    /* the house on the surface, and the acceleration it falls with, drawn beside it */
    const a = -50 * RAD, hx = cx + Rpx * Math.cos(a), hy = cy + Rpx * Math.sin(a);
    house(ctx, hx, hy, a + Math.PI / 2, PAL.ink);
    const tx = -Math.sin(a), ty = Math.cos(a), ox = hx + 74 * tx, oy = hy + 74 * ty;
    arrow(ctx, ox + 44 * Math.cos(a), oy + 44 * Math.sin(a), ox - 34 * Math.cos(a), oy - 34 * Math.sin(a), C('acceleration'), 5);
    text(ctx, 'g = ' + fmt(gs, 2) + ' m/s\u00B2', ox + 58 * Math.cos(a), oy + 58 * Math.sin(a), C('acceleration'), { weight: 600 });
    /* the graph beside the scene: how g falls away above the surface */
    const box = { l: 790, r: 1320, t: 150, b: 440 };
    const yr = nice(0, gs, 4);
    const ax = axes(ctx, box, [1, 4], [0, yr.hi], { xl: 'distance from the center (radii)', xc: PAL.ink, yl: 'g (m/s\u00B2)', yc: C('acceleration'), nx: 3, ny: yr.n, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, yr.hi / yr.n < 1 ? 2 : 1) });
    curve(ctx, (u) => gs / (u * u), 1, 4, ax.X, ax.Y, C('acceleration'), 5, 120);
    line(ctx, ax.X(1), ax.Y(0), ax.X(1), ax.Y(gs), PAL.muted, 2, [4, 8]);
    dot(ctx, ax.X(1), ax.Y(gs), C('acceleration'), true, 10);
    text(ctx, 'the surface', ax.X(1) + 16, ax.Y(gs) + 26, PAL.muted, { size: 17 });
    headline(ctx, rad.v === 1 && mass.v === 1
      ? 'with the mass and the radius of Earth, r = ' + sci(R, 2) + ' m and the surface acceleration is g = ' + fmt(gs, 2) + ' m/s\u00B2'
      : 'at ' + fmt(mass.v, 2) + ' Earth masses and ' + fmt(rad.v, 2) + ' Earth radii, g = ' + fmt(gs, 2) + ' m/s\u00B2 at the surface, which is ' + fmt(gs / 9.7995, 2) + ' times the value on Earth');
    readout(d.readout, `\\kg = G\\frac{M}{\\kr^2} = \\frac{(${texSci(G_THREE, 2)})(${texSci(M, 2)}\\ \\text{kg})}{(${texSci(R, 2)}\\ \\text{m})^2} = ${fmt(gs, 2)}\\ \\text{m/s}^2`,
      'Turned round, the same relation gives the mass of the body from a measurement of its surface gravity and its radius: M = gr\u00B2/G = ' + sci((gs * R * R) / G_THREE, 2) + ' kg. That is how an accurate value for Earth\u2019s mass was finally obtained.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 6.20: Earth and the Moon turning about their common center of
   mass, and the wiggle the center of mass leaves in Earth's path. The pair
   comes round once a month, so the idea has a time in it: the figure runs
   a cycle of one orbit and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-earth-moon', 660);
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 2, max: 6, step: 0.01, value: 3.84, unit: '\u00D7 10\u2078 m', dec: 2, onInput: reset, aria: 'the radius of the orbit' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 10, max: 60, step: 0.1, value: T_MOON, unit: 'd', dec: 1, onInput: reset, aria: 'the period of the orbit' });
  const cy = cycle(() => T.v, 1.0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const R = r.v * 1e8, period = T.v * 86400, om = TAU / period;
    const ac = R * om * om, gm = (G_THREE * M_EARTH) / (R * R);
    const tau = cy.now(), th = (TAU * tau) / T.v;
    /* the pair, turning about the common center of mass. The two bodies and the
       offset of the center of mass are drawn larger than they are, so that both
       can be seen beside an orbit that is sixty Earths wide. */
    const cx = 700, cyy = 280, Rpx = 180 + ((r.v - 2) / 4) * 120, ry = 0.5 * Rpx, off = 44, offY = off * 0.5;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.ellipse(cx, cyy, Rpx, ry, 0, 0, TAU); ctx.stroke(); ctx.restore();
    const ex = cx - off * Math.cos(th), ey = cyy - offY * Math.sin(th);
    const mx = cx + Rpx * Math.cos(th), my = cyy + ry * Math.sin(th);
    line(ctx, ex, ey, mx, my, PAL.rule, 2, [10, 10]);
    sphere(ctx, ex, ey, 54, PAL.ink); moon(ctx, mx, my, 22, PAL.ink);
    text(ctx, 'Earth', ex, ey + 80, PAL.ink, { weight: 600, align: 'center' });
    /* the centripetal acceleration, drawn from the Moon toward Earth */
    const dx = ex - mx, dy = ey - my, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
    arrow(ctx, mx, my, mx + 82 * ux, my + 82 * uy, C('acceleration'), 5);
    text(ctx, 'the Moon', mx - 48 * ux, my - 48 * uy, PAL.ink, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'a\u1D04 = ' + sci(ac, 2) + ' m/s\u00B2', mx + 46 * ux - 46 * uy, my + 46 * uy + 46 * ux, C('acceleration'), { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    dot(ctx, cx, cyy, PAL.ink, false, 9);
    text(ctx, 'center of mass', cx, cyy - 26, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the strip below: the center of mass travels on while Earth wiggles about it */
    const sy = 540, x0 = 200, x1 = 1240, X = (u) => x0 + u * (x1 - x0);
    line(ctx, x0, sy, x1, sy, PAL.rule, 2, [10, 10]);
    const u = T.v === 0 ? 0 : tau / T.v;
    const wob = (s) => ({ x: X(s) + 46 * Math.cos(TAU * s), y: sy + 32 * Math.sin(TAU * s) });
    const trace = (from, to, color, w) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i <= 120; i++) { const s = from + ((to - from) * i) / 120, p = wob(s); if (i) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); }
      ctx.stroke(); ctx.restore();
    };
    trace(0, 1, PAL.rule, 2); trace(0, u, PAL.muted, 3);
    const p = wob(u);
    dot(ctx, X(u), sy, PAL.ink, false, 9); sphere(ctx, p.x, p.y, 15, PAL.ink);
    text(ctx, 'the center of mass travels on smoothly', x0, sy + 66, PAL.muted, { size: 17 });
    text(ctx, 'Earth wiggles about it', x1, sy + 66, PAL.muted, { size: 17, align: 'right' });
    headline(ctx, 't = ' + fmt(tau, 1) + ' d \u00B7 at ' + sci(R, 2) + ' m gravity gives ' + sci(gm, 2) + ' m/s\u00B2 and the orbit needs ' + sci(ac, 2) + ' m/s\u00B2');
    readout(d.readout, `\\kac = \\kr\\kw^2 = (${texSci(R, 2)}\\ \\text{m})(${texSci(om, 2)}\\ \\text{rad/s})^2 = ${texSci(ac, 2)}\\ \\text{m/s}^2`,
      'The acceleration due to Earth\u2019s gravity at that distance is g = GM/r\u00B2 = ' + sci(gm, 2) + ' m/s\u00B2, which differs from what the orbit needs by ' + fmt(Math.abs(100 * (ac - gm)) / gm, 1) + ' per cent. Newton found that the two agreed pretty nearly, and concluded that Earth\u2019s gravitational force causes the Moon to orbit Earth.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   FIGURE 6.21 + 6.22: the tidal bulge, and what the Sun does to it. Earth
   turns under the bulge once a day, which is why a coast passes through
   two high tides and two low ones, so the figure runs a cycle of one day
   and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-tides', 680);
  const phi = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 90, step: 1, value: 0, unit: '\u00BA', dec: 0, aria: 'the angle of the Sun from the Earth-Moon line' });
  const cy = cycle(() => 24, 1.0);
  const pull = (dist) => (G_MEASURED * M_MOON) / (dist * dist);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), a = (TAU * tau) / 24;
    /* The Moon raises a bulge along its own line and the Sun along its own, and
       the two add as tidal bulges do, so the water stands highest when the Sun
       is in line with the Earth-Moon direction and lowest when it stands at
       ninety degrees to it. */
    const p = phi.v * RAD, A = 1, B = 0.46;
    const amp = Math.sqrt(A * A + B * B + 2 * A * B * Math.cos(2 * p));
    const psi = 0.5 * Math.atan2(B * Math.sin(2 * p), A + B * Math.cos(2 * p));
    const cx = 480, cyy = 300, R = 100;
    const sa = R * (1 + 0.26 * amp), sb = R * (1 - 0.1 * amp);
    /* the water, drawn as an ellipse stretched along the bulge */
    ctx.save(); ctx.translate(cx, cyy); ctx.rotate(psi);
    ctx.fillStyle = alpha(C('position'), 0.18); ctx.strokeStyle = C('position'); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(0, 0, sa, sb, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    sphere(ctx, cx, cyy, R, PAL.ink);
    text(ctx, 'Earth', cx, cyy, PAL.ink, { weight: 600, align: 'center' });
    text(ctx, 'high tide', cx + (sa - 30) * Math.cos(psi), cyy + (sa - 30) * Math.sin(psi), PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'high tide', cx - (sa - 30) * Math.cos(psi), cyy - (sa - 30) * Math.sin(psi), PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'low tide', cx - (sb + 26) * Math.sin(psi), cyy + (sb + 26) * Math.cos(psi), PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'low tide', cx + (sb + 26) * Math.sin(psi), cyy - (sb + 26) * Math.cos(psi), PAL.muted, { size: 17, align: 'center' });
    /* the coast that Earth carries round under the bulge */
    const kx = cx + R * Math.cos(a), ky = cyy + R * Math.sin(a);
    dot(ctx, kx, ky, PAL.ink, true, 10);
    text(ctx, 'a coast', kx + 22 * Math.cos(a), ky + 22 * Math.sin(a), PAL.ink, { size: 17, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the Moon on the line, and the Sun swung round from it */
    const mx = cx + 620, my = cyy;
    moon(ctx, mx, my, 34, PAL.ink);
    text(ctx, 'the Moon', mx, my + 62, PAL.ink, { size: 20, weight: 600, align: 'center' });
    line(ctx, cx + sa, cyy, mx - 44, my, PAL.rule, 2, [10, 10]);
    const sx = cx - 230 * Math.cos(p), sy2 = cyy + 230 * Math.sin(p);
    line(ctx, cx, cyy, sx, sy2, PAL.rule, 2, [10, 10]);
    sun(ctx, sx, sy2, 28, PAL.ink);
    text(ctx, 'the Sun', sx, sy2 + 66, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the three pulls that raise the water on both sides */
    const near = pull(R_MOON_ORBIT - R_EARTH), mid = pull(R_MOON_ORBIT), far = pull(R_MOON_ORBIT + R_EARTH);
    text(ctx, 'the Moon pulls the near water hardest and the far water least', 780, 452, PAL.muted, { size: 17 });
    [['near water', 112], ['Earth', 82], ['far water', 60]].forEach(([lab, len], i) => {
      const y = 500 + i * 46;
      arrow(ctx, 780, y, 780 + len, y, C('force'), 5);
      text(ctx, lab, 780 + len + 16, y, PAL.muted, { size: 17 });
    });
    /* the state of the marked coast, read off the water above it */
    const rel = Math.abs(Math.cos(a - psi));
    const stateOf = rel > 0.92 ? 'stands at high tide' : rel < 0.08 ? 'stands at low tide' : rel > 0.5 ? 'is running toward high tide' : 'is running toward low tide';
    headline(ctx, 't = ' + fmt(tau, 1) + ' h \u00B7 the marked coast has turned ' + fmt((tau / 24) * 360, 0) + '\u00BA and ' + stateOf);
    text(ctx, phi.v < 15 ? 'The Sun is in line with the Earth-Moon direction, so the two bulges add and these are the largest tides of the month, the spring tides.'
      : phi.v > 75 ? 'The Sun stands at right angles to the Earth-Moon line, so the two bulges work against each other and these are the smallest tides, the neap tides.'
        : 'The Sun stands part way round from the Earth-Moon line, so its bulge adds to the Moon\u2019s only in part and the tides are middling.', 700, 648, PAL.muted, { size: 20, align: 'center' });
    readout(d.readout, `G\\frac{M}{\\kr^2}:\\quad ${texSci(near, 2)}\\ \\text{(near)}\\;>\\;${texSci(mid, 2)}\\ \\text{(Earth)}\\;>\\;${texSci(far, 2)}\\ \\text{m/s}^2\\ \\text{(far)}`,
      'The near side is pulled ' + fmt((100 * (near - mid)) / mid, 1) + ' per cent harder than Earth, and Earth ' + fmt((100 * (mid - far)) / far, 1) + ' per cent harder than the far side. Small as that difference is, it is what pulls the near water away from Earth and Earth away from the far water, so the water stands high on both sides at once.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 24 / 5), draw });
})();

/* =====================================================================
   FIGURE 6.25: the Cavendish balance, seen from above. The fiber twists
   until what it resists balances the attraction, and the figure answers
   its sliders; nothing accumulates as a clock runs, so it is a still
   picture with no transport.
===================================================================== */
(function () {
  const d = sim('sim-cavendish', 620);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.2, max: 5, step: 0.1, value: 1, unit: 'kg', dec: 1, aria: 'the suspended masses' });
  const M = ctl(d.controls, { label: 'M', cls: '', min: 2, max: 50, step: 1, value: 20, unit: 'kg', dec: 0, aria: 'the masses on the stand' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.05, max: 0.5, step: 0.01, value: 0.1, unit: 'm', dec: 2, aria: 'the distance between the centers' });
  const FULL = 3.8e-7;                        /* the attraction that carries the spot to the far end of the scale */
  function draw() {
    const { ctx } = begin(d.c);
    const Fnow = (G_MEASURED * m.v * M.v) / (r.v * r.v);
    const frac = Math.min(1, Fnow / FULL), off = Fnow >= FULL;
    /* the balance seen from above: the beam with its two small spheres, the two
       large spheres standing beside them, and the mirror at the fiber */
    const px = 400, py = 330, arm = 150, twist = -12 * RAD * frac;
    const gap = 70 + ((r.v - 0.05) / 0.45) * 120;
    const rs = 12 + 8 * Math.sqrt(m.v / 5), rl = 20 + 12 * Math.sqrt(M.v / 50);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(px, py, arm, 0, TAU); ctx.stroke(); ctx.restore();
    const bx = (s) => px + s * arm * Math.cos(twist), by = (s) => py + s * arm * Math.sin(twist);
    [1, -1].forEach((s) => sphere(ctx, px + s * arm, py - s * gap, rl, PAL.ink));
    line(ctx, bx(1), by(1), bx(-1), by(-1), PAL.ink, 5);
    [1, -1].forEach((s) => sphere(ctx, bx(s), by(s), rs, PAL.ink));
    text(ctx, 'M = ' + fmt(M.v, 0) + ' kg', px + arm, py - gap - rl - 26, PAL.ink, { weight: 600, align: 'center' });
    text(ctx, 'm = ' + fmt(m.v, 1) + ' kg', bx(-1), by(-1) - rs - 26, PAL.ink, { weight: 600, align: 'center' });
    /* each small sphere is drawn toward the large one beside it */
    [1, -1].forEach((s) => {
      const dx = px + s * arm - bx(s), dy = py - s * gap - by(s), L = Math.hypot(dx, dy) || 1;
      arrow(ctx, bx(s), by(s), bx(s) + (dx / L) * 54, by(s) + (dy / L) * 54, C('force'), 4);
    });
    text(ctx, 'F', bx(1) - 46, by(1) - 8, C('force'), { size: 24, weight: 600, align: 'right' });
    line(ctx, px + arm, by(1), px + arm, py - gap, C('position'), 3, [6, 8]);
    text(ctx, 'r = ' + fmt(r.v, 2) + ' m', px + arm + rl + 20, (by(1) + py - gap) / 2, C('position'), { size: 20, weight: 600 });
    line(ctx, px - 32 * Math.sin(twist), py + 32 * Math.cos(twist), px + 32 * Math.sin(twist), py - 32 * Math.cos(twist), PAL.muted, 5);
    dot(ctx, px, py, PAL.ink, true, 8);
    text(ctx, 'the fiber and its mirror', px, py + 54, PAL.muted, { size: 17, align: 'center' });
    /* the light source, the reflected beam and the scale the spot rests on */
    const sx = 1180, sy = 540, zero = 1060, spot = zero - 300 * frac;
    line(ctx, sx, sy, px, py, PAL.rule, 2, [8, 8]);
    dot(ctx, sx, sy, PAL.muted, true, 7);
    text(ctx, 'light source', sx + 20, sy, PAL.muted, { size: 17 });
    line(ctx, 700, 160, 1340, 160, PAL.muted, 3);
    for (let x = 700; x <= 1340.5; x += 32) line(ctx, x, 160, x, 174, PAL.muted, 2);
    text(ctx, 'the scale', 1340, 128, PAL.muted, { size: 17, align: 'right' });
    dot(ctx, zero, 160, PAL.muted, false, 9);
    text(ctx, 'no attraction', zero + 14, 128, PAL.muted, { size: 17 });
    line(ctx, px, py, spot, 160, C('force'), 3);
    dot(ctx, spot, 160, C('force'), true, 10);
    headline(ctx, 'each pair attracts with ' + sci(Fnow, 2) + ' N, and the light spot rests ' + (off ? 'against the far end of the scale' : fmt(100 * frac, 0) + ' per cent of the way along the scale'));
    readout(d.readout, `\\kF = G\\frac{mM}{\\kr^2} = \\frac{(${texSci(G_MEASURED, 3)})(${fmt(m.v, 1)}\\ \\text{kg})(${fmt(M.v, 0)}\\ \\text{kg})}{(${fmt(r.v, 2)}\\ \\text{m})^2} = ${texSci(Fnow, 2)}\\ \\text{N}`,
      'The fiber twists until what it resists balances the attraction, so the distance the reflected spot moves along the scale is proportional to the force. That is how Cavendish measured an attraction of less than a millionth of a newton, and with it the value of G.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
