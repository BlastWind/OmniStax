/* Figures for section 6.5 Newton's Universal Law of Gravitation. Boots against
   the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, axes, nice, curve, pinned, labeller, topline } = F;
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
/* a world: a sphere with two masses of land on it, so that it reads as a planet and not a ball */
function world(ctx, x, y, r, color) {
  sphere(ctx, x, y, r, color);
  ctx.save(); ctx.beginPath(); ctx.arc(x, y, r - 1.5, 0, TAU); ctx.clip(); ctx.fillStyle = alpha(color, 0.38);
  ctx.beginPath(); ctx.moveTo(x - 0.55 * r, y - 0.55 * r); ctx.bezierCurveTo(x - 0.1 * r, y - 0.7 * r, x + 0.2 * r, y - 0.35 * r, x - 0.05 * r, y - 0.05 * r);
  ctx.bezierCurveTo(x - 0.15 * r, y + 0.3 * r, x - 0.5 * r, y + 0.1 * r, x - 0.55 * r, y - 0.55 * r); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x + 0.25 * r, y + 0.05 * r); ctx.bezierCurveTo(x + 0.7 * r, y - 0.1 * r, x + 0.75 * r, y + 0.45 * r, x + 0.35 * r, y + 0.6 * r);
  ctx.bezierCurveTo(x + 0.1 * r, y + 0.5 * r, x + 0.05 * r, y + 0.2 * r, x + 0.25 * r, y + 0.05 * r); ctx.fill(); ctx.restore();
}
/* a building of three storeys standing on (x, y), h tall, rotated so that up is along the angle a from straight up */
function building(ctx, x, y, h, a, color) {
  const w = h * 0.62;
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.fillStyle = alpha(color, 0.16); ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.rect(-w / 2, -h, w, h); ctx.fill(); ctx.stroke();
  ctx.fillStyle = PAL.panel;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { ctx.beginPath(); ctx.rect(-w / 2 + w * (0.12 + 0.3 * j), -h * (0.9 - 0.3 * i), w * 0.17, h * 0.17); ctx.fill(); ctx.stroke(); }
  ctx.beginPath(); ctx.moveTo(-w * 0.5 - 4, -h); ctx.lineTo(w * 0.5 + 4, -h); ctx.stroke();
  ctx.restore();
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
    /* fixed axes. The masses run from 0.5 kg to 100 kg each, so the force itself covers more than
       four decades and no one scale in newtons could hold both ends. What the graph is about is the
       shape, so the force is drawn as a fraction of its value at the closest separation the slider
       allows, r = 0.5 m: the range is always 0 to 5 m by 0 to 1, ticked every 0.25, and it never
       moves. The value that fraction is taken of is written on the graph, and the headline and the
       readout carry the force in newtons. */
    const Fhi = force(0.5);
    const ax = axes(ctx, box, [0, 5], [0, 1], { xl: 'r (m)', xc: C('position'), yl: 'F, as a fraction of its value at r = 0.5 m', yc: C('force'), nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2) });
    curve(ctx, (s) => force(s) / Fhi, 0.5, 5, ax.X, ax.Y, C('force'), 5, 120);
    line(ctx, ax.X(r.v), ax.Y(0), ax.X(r.v), ax.Y(Fnow / Fhi), PAL.muted, 2, [4, 8]);
    dot(ctx, ax.X(r.v), ax.Y(Fnow / Fhi), C('force'), true, 10);
    text(ctx, 'at r = 0.5 m the force is ' + sci(Fhi, 3) + ' N', box.r - 8, box.t + 26, PAL.muted, { size: 17, align: 'right' });
    headline(ctx, 'Masses of ' + fmt(m.v, 3) + ' kg and ' + fmt(M.v, 3) + ' kg, ' + fmt(r.v, 3) + ' m apart, attract each other with ' + sci(Fnow, 3) + ' N.');
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
  /* The bodies the section and its exercises ask about run from the Moon at a hundredth of Earth's
     mass to Jupiter at three hundred times it, four and a half decades in all, and on a linear
     slider everything below ten Earth masses would crowd into the first tenth of the track. Both
     sliders therefore carry the power of ten, with soft detents on the bodies the page names; the
     headline and the readout write the mass and the radius themselves. */
  const mass = ctl(d.controls, { label: '\\log_{10}(M/M_\\oplus)', cls: '', min: -2, max: 2.6, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the mass of the body in Earth masses, on a logarithmic scale', snap: true, detents: [{ v: -1.91, label: 'Moon' }, { v: 0, label: 'Earth' }, { v: 0.3 }, { v: 2.5, label: 'Jupiter' }] });
  const rad = ctl(d.controls, { label: '\\log_{10}(r/r_\\oplus)', cls: '', min: -1, max: 1.1, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the radius of the body in Earth radii, on a logarithmic scale', snap: true, detents: [{ v: -0.56, label: 'Moon' }, { v: 0, label: 'Earth' }, { v: 0.3 }, { v: 1.05, label: 'Jupiter' }] });
  const ratios = () => ({ Mr: Math.pow(10, mass.v), Rr: Math.pow(10, rad.v) });
  /* a ratio written the way the page reads it, three figures below a thousand */
  const rat = (x) => (x >= 100 ? fmt(x, 0) : x >= 1 ? fmt(x, 2) : fmt(x, 3));
  function draw() {
    const { ctx } = begin(d.c);
    const { Mr, Rr } = ratios();
    const M = Mr * M_EARTH, R = Rr * R_EARTH;
    const gs = (G_THREE * M) / (R * R);
    /* the scene: the body, its center of mass, the radius out to a house on the surface */
    /* the body, drawn as the book draws Earth: a world with land on it, a quarter cut away to
       show the layers down to the center of mass, and the radius drawn from that center out to
       the building on the surface */
    const cx = 330, cy = 330, Rpx = 60 + 118 * Math.sqrt(Math.min(1, Rr / 12));
    world(ctx, cx, cy, Rpx, PAL.ink);
    const a = -50 * RAD;
    ctx.save(); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, Rpx + 1, -Math.PI / 2, 0); ctx.closePath(); ctx.clip();
    ctx.fillStyle = PAL.panel; ctx.fillRect(cx - 2, cy - Rpx - 4, Rpx + 8, Rpx + 8);
    [[1, 0.1], [0.62, 0.22], [0.3, 0.4]].forEach(([k, al]) => { ctx.fillStyle = alpha(PAL.ink, al); ctx.beginPath(); ctx.arc(cx, cy, Rpx * k, 0, TAU); ctx.fill(); });
    ctx.restore();
    line(ctx, cx, cy, cx, cy - Rpx, PAL.ink, 2); line(ctx, cx, cy, cx + Rpx, cy, PAL.ink, 2);
    dot(ctx, cx, cy, PAL.ink, true, 7);
    text(ctx, 'center of mass', cx - 12, cy + 24, PAL.ink, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.85) });
    const hx = cx + Rpx * Math.cos(a), hy = cy + Rpx * Math.sin(a);
    /* the radius, from the center of mass to the building's own center of mass, an arrowhead at each end */
    const BH = 34, bcx = hx + (BH / 2) * Math.cos(a), bcy = hy + (BH / 2) * Math.sin(a);
    arrow(ctx, cx + 12 * Math.cos(a), cy + 12 * Math.sin(a), bcx, bcy, C('position'), 4);
    arrow(ctx, bcx, bcy, cx + 12 * Math.cos(a), cy + 12 * Math.sin(a), C('position'), 4);
    { const mx = cx + Rpx * 0.5 * Math.cos(a), my = cy + Rpx * 0.5 * Math.sin(a); text(ctx, 'r', mx + 22 * Math.sin(a) * -1 + 0, my + 22 * Math.cos(a), C('position'), { weight: 600, size: 22, align: 'center', bg: alpha(PAL.panel, 0.85) }); }
    text(ctx, 'r = ' + sci(R, 2) + ' m', cx, cy + Rpx + 30, C('position'), { weight: 600, align: 'center' });
    building(ctx, hx, hy, BH, a + Math.PI / 2, PAL.ink);
    dot(ctx, bcx, bcy, C('position'), true, 4);
    /* the magnified view the book puts beside its Earth: the building on a curved surface, and the
       radius reaching up to it, through a break, from the center of mass far below */
    const ix = 690, iy = 236, ir = 92;
    line(ctx, hx, hy, ix - ir * 0.7, iy - ir * 0.7, PAL.rule, 1.5); line(ctx, hx, hy, ix - ir * 0.7, iy + ir * 0.7, PAL.rule, 1.5);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(ix, iy, ir, 0, TAU); ctx.fill(); ctx.stroke(); ctx.clip();
    ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(ix, iy + 10 + 520, 520, 0, TAU); ctx.fill(); ctx.stroke();
    building(ctx, ix, iy + 10, 90, 0, PAL.ink);
    ctx.restore();
    arrow(ctx, ix, iy + ir, ix, iy + 10 - 45 + 4, C('position'), 3);
    dot(ctx, ix, iy + 10 - 45, C('position'), true, 5);
    line(ctx, ix - 12, iy + 62, ix + 12, iy + 54, PAL.panel, 8); line(ctx, ix - 12, iy + 62, ix + 12, iy + 54, C('position'), 2);
    line(ctx, ix - 12, iy + 70, ix + 12, iy + 62, C('position'), 2);
    text(ctx, 'r', ix + 14, iy + 40, C('position'), { weight: 600, size: 20 });
    text(ctx, 'the building, magnified: r reaches its center of mass', ix, iy + ir + 26, PAL.muted, { size: 15, align: 'center' });
    /* the acceleration at the surface, drawn beside the building, straight down toward the center */
    const tx = -Math.sin(a), ty = Math.cos(a), ox = hx + 46 * tx, oy = hy + 46 * ty;
    arrow(ctx, ox + 40 * Math.cos(a), oy + 40 * Math.sin(a), ox - 40 * Math.cos(a), oy - 40 * Math.sin(a), C('acceleration'), 5);
    text(ctx, 'g = ' + fmt(gs, 2) + ' m/s\u00B2', ox + 52 * Math.cos(a) + 40 * tx, oy + 52 * Math.sin(a) + 40 * ty, C('acceleration'), { weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the graph beside the scene: how g falls away above the surface */
    const box = { l: 860, r: 1330, t: 150, b: 440 };
    /* fixed axes. The sliders reach 320 Earth masses at a tenth of an Earth radius, where g would be
       32,000 times its value here; an axis that tall would leave Earth's own 9.80 m/s² on the base
       line, so the range is fixed at 0 to 10 m/s², ticked every 2, which holds the default state
       comfortably. A stronger surface gravity is clipped at the top edge and read off the pinned
       marker. The distance axis is the whole of the drawn range, 1 to 4 radii. */
    const GR = 10;
    const ax = axes(ctx, box, [1, 4], [0, GR], { xl: 'distance from the center (radii)', xc: PAL.ink, yl: 'g (m/s\u00B2)', yc: C('acceleration'), nx: 3, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, (u) => Math.min(gs / (u * u), GR), 1, 4, ax.X, ax.Y, C('acceleration'), 5, 120);
    const gC = Math.min(gs, GR);
    line(ctx, ax.X(1), ax.Y(0), ax.X(1), ax.Y(gC), PAL.muted, 2, [4, 8]);
    pinned(ctx, box, ax.X, ax.Y, 1, gs, C('acceleration'), fmt(gs, 2) + ' m/s\u00B2');
    text(ctx, 'the surface', ax.X(1) + 16, ax.Y(gC) + 26, PAL.muted, { size: 17 });
    headline(ctx, Math.abs(mass.v) < 1e-9 && Math.abs(rad.v) < 1e-9
      ? 'With the mass and the radius of Earth, the surface acceleration is g = ' + fmt(gs, 2) + ' m/s\u00B2.'
      : 'At ' + rat(Mr) + ' Earth masses and ' + rat(Rr) + ' Earth radii, g = ' + fmt(gs, 2) + ' m/s\u00B2 at the surface.');
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
    world(ctx, ex, ey, 54, PAL.ink); moon(ctx, mx, my, 22, PAL.ink);
    text(ctx, 'Earth', ex, ey + 80, PAL.ink, { weight: 600, align: 'center' });
    /* the centripetal acceleration, drawn from the Moon toward Earth */
    const dx = ex - mx, dy = ey - my, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
    arrow(ctx, mx, my, mx + 82 * ux, my + 82 * uy, C('acceleration'), 5);
    text(ctx, 'the Moon', mx - 64 * ux, my - 64 * uy, PAL.ink, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
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
    dot(ctx, X(u), sy, PAL.ink, false, 9); world(ctx, p.x, p.y, 15, PAL.ink);
    text(ctx, 'the center of mass travels on smoothly', x0, sy + 66, PAL.muted, { size: 17 });
    text(ctx, 'Earth wiggles about it', x1, sy + 66, PAL.muted, { size: 17, align: 'right' });
    headline(ctx, 'At r = ' + sci(R, 2) + ' meters, gravity gives ' + sci(gm, 2) + ' m/s\u00B2 and the orbit needs ' + sci(ac, 2) + ' m/s\u00B2.');
    readout(d.readout, `\\kac = \\kr\\kw^2 = (${texSci(R, 2)}\\ \\text{m})(${texSci(om, 2)}\\ \\text{rad/s})^2 = ${texSci(ac, 2)}\\ \\text{m/s}^2`,
      'The acceleration due to Earth\u2019s gravity at that distance is g = GM/r\u00B2 = ' + sci(gm, 2) + ' m/s\u00B2, which differs from what the orbit needs by ' + fmt(Math.abs(100 * (ac - gm)) / gm, 1) + ' percent. Newton found that the two agreed pretty nearly, and concluded that Earth\u2019s gravitational force causes the Moon to orbit Earth.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   FIGURE 6.21 + 6.22: the tides as a day's motion. The Moon pulls the
   near water hardest, Earth less and the far water least, and what is
   left of each pull once the pull on Earth's center is taken away is the
   tidal force that stands the water up on both sides. Earth turns under
   those two bulges once a day while the Moon creeps along its orbit, so
   a marked coast passes high, low, high, low and its second high tide
   comes a little after twelve hours. The Sun's bulge adds along or across
   the Moon's, which is the spring and the neap tide. Runs a day, so it
   gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-tides', 700);
  const rM = ctl(d.controls, { label: '\\kr', cls: 'position', min: 3, max: 5, step: 0.01, value: 3.84, unit: '\u00D7 10\u2078 m', dec: 2, aria: 'the distance from Earth to the Moon' });
  const phi = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 90, step: 1, value: 0, unit: '°', dec: 0, aria: 'the angle of the Sun from the Earth-Moon line, zero for a spring tide and ninety for a neap tide' });
  const cy = cycle(() => 24, 1.2);
  const pull = (dist) => (G_MEASURED * M_MOON) / (dist * dist);
  /* the arrows are forces, so the readout writes the force the Moon exerts on a named parcel of
     water rather than the acceleration it would give it */
  const M_WATER = 1.00;
  const force = (dist) => M_WATER * pull(dist);
  const cx = 680, cyy = 320, R = 100, D0 = 400;        /* Earth, and the Moon's drawn distance at 3.84 */
  /* a point at drawn distance q from Earth's center along the direction th (counterclockwise, as on the page) */
  const at = (q, th) => ({ x: cx + q * Math.cos(th), y: cyy - q * Math.sin(th) });
  /* the trace of the tide at the coast: a fixed frame of one day and of the
     largest tide the Sun can add to the Moon's, so the curve never rescales */
  const box = { l: 985, t: 500, r: 1340, b: 640 };
  function draw() {
    const { ctx } = begin(d.c);
    const L = labeller(ctx, 700); L.block(0, 0, 1400, 90);
    const tau = cy.now();
    const a = (TAU * tau) / 24;                        /* Earth has turned this far */
    const lineA = (TAU * tau) / (24 * T_MOON);         /* and the Moon has moved this far along its orbit */
    const D = D0 * (rM.v / 3.84);
    /* The Moon raises a bulge along its own line and the Sun along its own, and
       the two add as tidal bulges do: the Sun's is about half the Moon's, and the
       water stands highest when the Sun is in line with the Moon and lowest when
       it stands at ninety degrees to it. psi is where the joint bulge points,
       measured from the Moon's line. */
    const p = phi.v * RAD, A = 1, B = 0.46;
    const amp = Math.sqrt(A * A + B * B + 2 * A * B * Math.cos(2 * p));
    const psi = 0.5 * Math.atan2(B * Math.sin(2 * p), A + B * Math.cos(2 * p));
    const bulgeA = lineA + psi;
    const sa = R * (1.14 + 0.36 * amp), sb = R * (1.08 - 0.02 * amp);
    /* the water: a body of ocean all round Earth, drawn as an ellipse stretched along
       the joint bulge, so that it stands high on two sides and low on the other two */
    ctx.save(); ctx.translate(cx, cyy); ctx.rotate(-bulgeA);
    ctx.fillStyle = alpha(PAL.muted, 0.28); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(0, 0, sa, sb, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(cx, cyy, R, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'Earth', cx, cyy - 64, PAL.ink, { weight: 600, align: 'center' });
    const wl = at(sa - 22, bulgeA + 0.5 * Math.PI + 0.9);
    text(ctx, 'water', wl.x, wl.y, PAL.muted, { size: 16, align: 'center', weight: 600 });
    /* Earth turns: a curved arrow inside it, running the way the coast goes */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyy, R * 0.55, 0.2 * Math.PI, 0.6 * Math.PI); ctx.stroke(); ctx.restore();
    const ta = at(R * 0.55, -0.2 * Math.PI), tb = at(R * 0.55, -0.12 * Math.PI);
    arrow(ctx, ta.x, ta.y, tb.x, tb.y, PAL.muted, 3);
    text(ctx, 'Earth turns', cx, cyy + 14, PAL.muted, { size: 15, align: 'center' });
    /* the Moon on its line, the line itself, and the orbit it creeps along */
    const m = at(D, lineA);
    line(ctx, cx + R * Math.cos(lineA), cyy - R * Math.sin(lineA), m.x - 40 * Math.cos(lineA), m.y + 40 * Math.sin(lineA), alpha(PAL.ink, 0.35), 2, [10, 10]);
    const rl = at(D * 0.72, lineA - 0.09);
    text(ctx, 'r = ' + fmt(rM.v, 2) + ' \u00D7 10\u2078 m', rl.x, rl.y + 26, C('position'), { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.beginPath(); ctx.arc(cx, cyy, D, -lineA - 0.5, -lineA + 0.34); ctx.stroke(); ctx.restore();
    const oa = at(D, lineA + 0.14), ob = at(D, lineA + 0.24);
    arrow(ctx, oa.x, oa.y, ob.x, ob.y, PAL.ink, 3);
    moon(ctx, m.x, m.y, 34, PAL.ink);
    text(ctx, 'the Moon', m.x, m.y + 62, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'moves ' + fmt((lineA / RAD), 1) + '° along its orbit', m.x, m.y + 88, PAL.muted, { size: 15, align: 'center' });
    /* the Sun, swung round from the far end of the Earth-Moon line by theta. It is 390 times as far
       away as the Moon, so it cannot stand on the Moon's own scale: it is drawn at the edge of the
       picture along its true direction, on a line with a break cut out of it, and the note beside it
       says that this one distance is not to scale. */
    const sunA = lineA + Math.PI + p;
    const SB = { l: 70, r: 1320, t: 130, b: 478 };
    const cS = Math.cos(sunA), sS = -Math.sin(sunA);
    let kEdge = Infinity;
    if (cS > 1e-6) kEdge = Math.min(kEdge, (SB.r - cx) / cS); else if (cS < -1e-6) kEdge = Math.min(kEdge, (SB.l - cx) / cS);
    if (sS > 1e-6) kEdge = Math.min(kEdge, (SB.b - cyy) / sS); else if (sS < -1e-6) kEdge = Math.min(kEdge, (SB.t - cyy) / sS);
    const kSun = Math.max(140, kEdge - 40), s = { x: cx + kSun * cS, y: cyy + kSun * sS };
    const sA = { x: cx + R * cS, y: cyy + R * sS }, sB2 = { x: s.x - 44 * cS, y: s.y - 44 * sS };
    const bkx = sA.x + (sB2.x - sA.x) * 0.55, bky = sA.y + (sB2.y - sA.y) * 0.55;
    line(ctx, sA.x, sA.y, bkx - 10 * cS, bky - 10 * sS, alpha(PAL.ink, 0.35), 2, [10, 10]);
    line(ctx, bkx + 10 * cS, bky + 10 * sS, sB2.x, sB2.y, alpha(PAL.ink, 0.35), 2, [10, 10]);
    [-1, 1].forEach((q) => line(ctx, bkx + q * 5 * cS - 9 * sS + 5 * cS, bky + q * 5 * sS + 9 * cS + 5 * sS, bkx + q * 5 * cS + 9 * sS - 5 * cS, bky + q * 5 * sS - 9 * cS - 5 * sS, PAL.muted, 2));
    sun(ctx, s.x, s.y, 26, PAL.ink);
    /* the note is long, so near an edge it is set against that edge rather than centered on the Sun */
    const al = s.x < 340 ? 'left' : s.x > 1060 ? 'right' : 'center';
    const nx = al === 'left' ? Math.max(24, s.x - 46) : al === 'right' ? Math.min(1376, s.x + 46) : s.x;
    text(ctx, 'the Sun', s.x, s.y + 62, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'The Sun is 390 times as far away as the Moon, so this distance is not to scale.', nx, s.y + 88, PAL.muted, { size: 15, align: al });
    /* the three pulls the Moon exerts, drawn at the near side, the center and the
       far side along the Moon's line with lengths that follow 1/r squared in the
       drawing's own distances, so the near arrow is longest and the far one shortest */
    const near = pull(rM.v * 1e8 - R_EARTH), mid = pull(rM.v * 1e8), far = pull(rM.v * 1e8 + R_EARTH);
    const drawn = (q) => 55 * (D0 / q) * (D0 / q);   /* 55 units at the default distance, so the near arrow stops short of the Moon at 3 */
    const Ln = drawn(D - R), Lm = drawn(D), Lf = drawn(D + R);
    const ux = Math.cos(lineA), uy = -Math.sin(lineA), vx = -uy, vy = ux;
    const raw = [[R, Ln, 'pull on the near water'], [0, Lm, 'pull on Earth'], [-R, Lf, 'pull on the far water']];
    raw.forEach(([q, len, lab]) => {
      const x0 = cx + q * ux, y0 = cyy + q * uy;
      arrow(ctx, x0, y0, x0 + len * ux, y0 + len * uy, C('force'), 4);
      L.add(lab, x0 + len * ux, y0 + len * uy, q > 0 ? vx : -vx, q > 0 ? vy : -vy, C('force'), 16, q === 0 ? 34 : 24);
    });
    /* what is left of each once the pull on Earth's center is taken away: the
       tidal force, outward on both sides, which is what stands the water up */
    const kt = 2, tn = kt * (Ln - Lm), tf = kt * (Lm - Lf);
    [[1, tn], [-1, tf]].forEach(([sg, len]) => {
      const x0 = cx + sg * sa * ux + 24 * vx * sg, y0 = cyy + sg * sa * uy + 24 * vy * sg;
      arrow(ctx, x0, y0, x0 + sg * len * ux, y0 + sg * len * uy, C('force'), 6);
      L.add('tidal force', x0 + sg * len * ux, y0 + sg * len * uy, sg * ux, sg * uy, C('force'), 17, 22);
    });
    /* the coast that Earth carries round under the bulge, and its tide */
    const k = at(R, a);
    dot(ctx, k.x, k.y, PAL.ink, true, 10);
    L.add('a coast', k.x, k.y, Math.cos(a), -Math.sin(a), PAL.ink, 17, 22);
    const height = (t) => amp * Math.cos(2 * ((TAU * t) / 24 - (TAU * t) / (24 * T_MOON) - psi));
    const h = height(tau);
    /* the ledger: the subtraction, arrow by arrow */
    const lx = 70, ly = 505;
    text(ctx, "the Moon's pull", lx + 120, ly, PAL.muted, { size: 16 });
    text(ctx, "what is left once the pull on Earth's center is taken away", lx + 300, ly, PAL.muted, { size: 16 });
    [['near water', Ln, tn], ['Earth', Lm, 0], ['far water', Lf, -tf]].forEach(([lab, len, tid], i) => {
      const y = ly + 40 + i * 44;
      text(ctx, lab, lx, y, PAL.muted, { size: 17 });
      arrow(ctx, lx + 120, y, lx + 120 + len, y, C('force'), 4);
      if (tid === 0) { dot(ctx, lx + 400, y, C('force'), false, 6); text(ctx, 'nothing', lx + 416, y, PAL.muted, { size: 15 }); }
      else arrow(ctx, lx + 400, y, lx + 400 + tid, y, C('force'), 6);
    });
    /* the tide-height trace: axes fixed once from the largest spring tide */
    text(ctx, 'the tide at the coast', box.l, box.t - 24, PAL.muted, { size: 17 });
    const { X, Y } = axes(ctx, box, [0, 24], [-1.6, 1.6], { nx: 4, ny: 2, fx: (v) => fmt(v, 0) + ' h', fy: (v) => (v > 0 ? 'high' : v < 0 ? 'low' : '') });
    if (tau > 0.05) curve(ctx, height, 0, tau, X, Y, PAL.ink, 3);
    pinned(ctx, box, X, Y, tau, h, PAL.ink);
    /* the state of the marked coast, read off the water above it */
    const rel = h / amp, ahead = height(tau + 0.3) / amp;
    const stateOf = rel > 0.92 ? 'stands at high tide' : rel < -0.92 ? 'stands at low tide' : ahead > rel ? 'is running toward high tide' : 'is running toward low tide';
    topline(ctx, 'After ' + fmt(tau, 1) + ' h Earth has turned ' + fmt((tau / 24) * 360, 0) + '° under the bulges, and the marked coast ' + stateOf + '.');
    text(ctx, phi.v < 15 ? 'The Sun is in line with the Moon, so its bulge adds to the Moon\u2019s and these are the largest tides of the month, the spring tides.'
      : phi.v > 75 ? 'The Sun stands at right angles to the Earth-Moon line, so its bulge works against the Moon\u2019s and these are the smallest tides, the neap tides.'
        : 'The Sun stands part way round from the Earth-Moon line, so its bulge adds to the Moon\u2019s only in part and the tides are middling.', 700, 680, PAL.muted, { size: 19, align: 'center' });
    L.flush();
    readout(d.readout, `\\kF = G\\frac{mM}{\\kr^2}:\\quad ${texSci(force(rM.v * 1e8 - R_EARTH), 3)}\\;>\\;${texSci(force(rM.v * 1e8), 3)}\\;>\\;${texSci(force(rM.v * 1e8 + R_EARTH), 3)}\\ \\text{N}`,
      'Those are the forces the Moon exerts on a parcel of water of mass m = 1.00 kg, held first at the near side of Earth, then at Earth\u2019s center and then at the far side. The Moon pulls the near water ' + fmt((100 * (near - mid)) / mid, 1) + ' percent harder than it pulls Earth, and Earth ' + fmt((100 * (mid - far)) / far, 1) + ' percent harder than the far water. Take away the pull on Earth\u2019s center and what is left pulls the near water away from Earth and Earth away from the far water, so the water stands high on both sides at once, and Earth turns under both bulges in a day. The drawing\u2019s distances are not to scale, so its arrows differ by more than these numbers do.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 24 / 8), draw });
})();

/* =====================================================================
   FIGURE 6.25: the Cavendish balance, built as a scene in three dimensions
   on the app's own viewer. The large spheres swing in on their arm, the
   attraction turns the rod, the fiber takes up the twist, the mirror on
   the rod's hanger sends the lamp's beam to a new place on the scale, and
   the balance swings a few times about its new rest before it settles.
   Two things about the drawing depart from life, and the readout states
   both: the twist is far too small to see, so a slider draws it larger
   than life, and the balance swings freely once in seven minutes, so the
   motion runs 175 times faster than life while the clock reads the true
   minutes. The scale follows the path the spot really travels, and its
   ticks are numbered in the true millimeters the readout gives, so the
   measurement can be read off the drawing. The 2D layer above the scene
   carries the headline, the labels, the force arrow and the distance
   between the centers in the book's colors; where WebGL is missing the
   same canvas draws the balance from above instead.
===================================================================== */
(function () {
  const d = sim('sim-cavendish', 620);
  const M = ctl(d.controls, { label: 'M', cls: '', min: 5, max: 160, step: 1, value: 30, unit: 'kg', dec: 0, aria: 'the mass of each sphere on the stand', onInput: reset });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.2, max: 0.6, step: 0.01, value: 0.2, unit: 'm', dec: 2, aria: 'the distance between the centers of a small sphere and the large one beside it', onInput: reset });
  const X = ctl(d.controls, { label: '\\times', cls: '', min: 1, max: 300, step: 1, value: 150, unit: '', dec: 0, aria: 'how many times larger than life the twist is drawn' });
  /* Ten names sit on this apparatus and half of them ride the rod as it turns, which is more than
     rule 26.7 lets a figure show at once. The two typed quantities the readout writes, the distance
     between the centers and the force across it, stay on the drawing; the names of the parts go
     behind this button, off to begin with, and the pointer gives every part its name in any case. */
  const LAB = F.choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the parts of the balance' });

  /* ---------- the balance as numbers ---------- */
  /* Lead spheres of 0.73 kg hang from the rod, as Cavendish's did, and every
     sphere is drawn at the size lead of its mass really has. The rod is a
     meter long, the arm carries the large spheres 0.6 m from the axis, and
     the fiber is as stiff as one that lets the balance swing freely once in
     seven minutes. The scale stands where the beam reaches the floor. */
  const m_S = 0.73, RHO_LEAD = 11340;
  const L = 0.5, A = 0.6, T_FREE = 420;
  const R_S = Math.cbrt((3 * m_S) / (4 * Math.PI * RHO_LEAD));
  const radiusL = (Mv) => Math.cbrt((3 * Mv) / (4 * Math.PI * RHO_LEAD));
  const KAPPA = (4 * Math.PI * Math.PI * (2 * m_S * L * L)) / (T_FREE * T_FREE);   /* the fiber's torsion constant, N·m per radian */
  const PHI_FAR = 115 * RAD;                                                        /* where the arm waits before it swings in */
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  /* the arm angle that puts a large sphere a distance rv from the small one beside it */
  const phiFor = (rv) => Math.acos(clamp((A * A + L * L - rv * rv) / (2 * A * L), -1, 1));
  /* the attraction across one pair when the arm stands at phi, and the twist the fiber holds against two of them */
  function pull(Mv, phi) {
    const dist = Math.sqrt(A * A + L * L - 2 * A * L * Math.cos(phi));
    const F = (G_MEASURED * m_S * Mv) / (dist * dist);
    const theta = (2 * F * L * ((A * Math.sin(phi)) / dist)) / KAPPA;
    return { dist, F, theta };
  }
  /* The loop: a short rest, the arm swings in, then the balance rings down about its new rest. The
     loop's own seconds are not the balance's: one drawn swing takes 2.4 of them where the balance
     takes its true 420 s, so the whole motion is drawn 175 times faster than life, and the clock in
     the headline reads the true time rather than the loop's. */
  const T0 = 1.2, T1 = 4.0, T = 10, RING = 2.4;
  const TIME_X = T_FREE / RING;
  const clock = (tau) => { const s = tau * TIME_X; return s < 90 ? fmt(s, 0) + ' s' : fmt(s / 60, 1) + ' min'; };
  const cy = cycle(() => T, 1.2);
  const ease = (u) => u * u * (3 - 2 * u);
  function state(tau) {
    const u = tau <= T0 ? 0 : tau >= T1 ? 1 : ease((tau - T0) / (T1 - T0));
    const phiRest = phiFor(r.v), phi = PHI_FAR + (phiRest - PHI_FAR) * u;
    const now = pull(M.v, phi), rest = pull(M.v, phiRest);
    const s = Math.max(0, tau - T1), ring = s > 0 ? 0.35 * rest.theta * Math.exp(-s / 1.6) * Math.sin((TAU / RING) * s) : 0;
    const theta = now.theta + ring, rL = radiusL(M.v);
    /* drawn larger than life, but never so large that the small sphere is drawn into the large one */
    const cap = Math.max(0, phi - phiFor(R_S + rL + 0.01));
    const drawn = Math.min(theta * X.v, cap);
    return { tau, u, phi, phiRest, now, rest, theta, rL, drawn, pinned: rest.theta * X.v > Math.max(0, phiRest - phiFor(R_S + rL + 0.01)), ringing: Math.abs(ring) > 0.04 * rest.theta };
  }
  function reset() { cy.reset(); }
  const deg = (a) => fmt(a / RAD, a / RAD < 0.1 ? 3 : 2) + '°';
  const mm = (x) => (x * 1000 < 10 ? fmt(x * 1000, 2) : fmt(x * 1000, 1)) + ' mm';

  /* ---------- the scene ---------- */
  const THREE = window.THREE;
  const hasGL = !!(THREE && typeof WebGLRenderingContext === 'function');   /* the renderer itself throws where no context can be made, and the flat drawing takes over */
  const Y_ROD = 0.45, Y_MIRROR = 0.6, Y_HUB_TOP = 0.68, Y_TOP = 1.5, Y_ARM = 0.2, Y_SCALE = 0.014;
  const LAMP = [1.8, Y_MIRROR, 0];
  const N0 = [1, -0.355, 1];                       /* the mirror faces the lamp and the scale at once, tilted a little downward */
  /* the scale: a strip on the floor along the path the spot really travels as the rod turns, from A0
     to A1 of turn. With M and r at their extremes and the ring-down at its peak the rod is drawn
     turned 17.7 degrees at 300 times life, so the scale reaches 20 degrees and the slider stops at 300. */
  const SCALE = { a0: -1.5 * RAD, a1: 20 * RAD, half: 0.05 };
  /* The view, and the bound on it. Yaw zero is the side the book draws the balance from, which the
     scene is pre-turned by 36 degrees to give; the three buttons snap to that side, to a look from
     above and to a look along the scale, and the wheel and the two zoom buttons come in and out.
     The pitch is held between 8 and 70 degrees above the floor, so the bench is never seen from
     beneath, and the yaw stays within 92 degrees of the book's side, which keeps the reader in
     front of the apparatus where the lamp, the mirror and the scale all show at once. A balance
     standing in a room with a lamp and a scale has a front, so an idle spin would say nothing about
     it and there is no auto-rotate button. */
  const AZ0 = 36 * RAD, TARGET = [0.3, 0.56, 0.3];
  const VIEWS = [
    { label: 'side', yaw: 0, pitch: 20 * RAD },
    { label: 'above', yaw: 0, pitch: 66 * RAD },
    { label: 'along the scale', yaw: 88 * RAD, pitch: 26 * RAD },
  ];
  let V3D = null;                                  /* the app's viewer, once it is mounted */
  let S = null;                                    /* everything the scene holds, built once */
  let last = null, frame3 = null;                  /* the state, and what the 2D layer redraws from */

  /* a canvas the size given, drawn by fn, as a repeating texture */
  function canvasTex(w, h, fn, rep) {
    const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; if (rep) t.repeat.set(rep[0], rep[1]); return t;
  }
  /* a small deterministic noise, so the textures are the same on every visit */
  function noise(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function woodTex() {
    return canvasTex(512, 512, (g, w, h) => {
      const rnd = noise(7);
      g.fillStyle = '#7d4f28'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 2) {
        const k = 0.5 + 0.5 * Math.sin(y * 0.09 + 2 * Math.sin(y * 0.021)) + 0.25 * (rnd() - 0.5);
        g.fillStyle = `rgba(${(60 + 30 * k) | 0}, ${(34 + 18 * k) | 0}, ${(14 + 8 * k) | 0}, ${0.18 + 0.22 * k})`; g.fillRect(0, y, w, 2);
      }
      for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(40,22,8,0.12)'; g.fillRect(0, rnd() * h, w, 1); }
    }, [2, 2]);
  }
  /* the fiber: a few strands wound round each other, as a color map and a normal map made from the same relief */
  function strandRelief(w, h) {
    const rel = new Float32Array(w * h), N = 5;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const u = x / w, v = y / h;                          /* u round the fiber, v along it */
      const phase = (((u * N - v * 3) % 1) + 1) % 1;       /* N strands, wound at about 45 degrees */
      const bump = Math.sin(phase * Math.PI);
      rel[y * w + x] = bump * bump;
    }
    return rel;
  }
  function fiberMaps() {
    const w = 256, h = 256, rel = strandRelief(w, h), rnd = noise(11);
    const col = canvasTex(w, h, (g) => {
      const img = g.createImageData(w, h);
      for (let i = 0; i < w * h; i++) { const k = 150 + 80 * rel[i] + 12 * (rnd() - 0.5); img.data[i * 4] = k + 10; img.data[i * 4 + 1] = k + 4; img.data[i * 4 + 2] = k - 14; img.data[i * 4 + 3] = 255; }
      g.putImageData(img, 0, 0);
    });
    const nor = canvasTex(w, h, (g) => {
      const img = g.createImageData(w, h);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const l = rel[y * w + ((x + w - 1) % w)], rr = rel[y * w + ((x + 1) % w)], up = rel[((y + h - 1) % h) * w + x], dn = rel[((y + 1) % h) * w + x];
        const nx = (l - rr) * 2.2, ny = (up - dn) * 2.2, nz = 1, len = Math.hypot(nx, ny, nz), i = (y * w + x) * 4;
        img.data[i] = 128 + 127 * (nx / len); img.data[i + 1] = 128 + 127 * (ny / len); img.data[i + 2] = 128 + 127 * (nz / len); img.data[i + 3] = 255;
      }
      g.putImageData(img, 0, 0);
    });
    return { col, nor };
  }
  /* the room the polished metal reflects: a grey sky above, a darker floor below and two bright
     windows. These colors are the physical fact of a lit room and not any type's hue. */
  function roomEnv() {
    const t = canvasTex(256, 128, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, '#e6eaef'); gr.addColorStop(0.5, '#9aa1a9'); gr.addColorStop(1, '#43464c');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      g.fillStyle = '#ffffff'; g.fillRect(30, 18, 46, 32);
      g.fillStyle = '#fff1d6'; g.fillRect(166, 34, 30, 22);
    });
    t.mapping = THREE.EquirectangularReflectionMapping; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  }
  /* a soft round patch of shade under a body, which is how the balance is grounded: the app's
     viewer renders without a shadow map, so nothing here casts a real shadow */
  function blobTex() {
    return canvasTex(128, 128, (g, w, h) => {
      const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    });
  }
  /* a cylinder of unit height standing on the origin, so scale.y is its length and position its foot */
  const stalkGeo = () => new THREE.CylinderGeometry(1, 1, 1, 16).translate(0, 0.5, 0);
  const between = (mesh, a, b, rad) => {
    const dir = new THREE.Vector3().subVectors(b, a), len = dir.length();
    mesh.position.copy(a); mesh.scale.set(rad, len, rad); mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  };
  /* the fiber twists: its top stays put and every ring below turns by its share of the angle at the bottom */
  function twist(mesh, angle) {
    const pos = mesh.geometry.attributes.position, base = mesh.userData.base, len = mesh.userData.len;
    for (let i = 0; i < pos.count; i++) {
      const x = base[3 * i], y = base[3 * i + 1], z = base[3 * i + 2], a = angle * ((len / 2 - y) / len), c = Math.cos(a), s = Math.sin(a);
      pos.setXYZ(i, x * c + z * s, y, -x * s + z * c);
    }
    pos.needsUpdate = true; mesh.geometry.computeVertexNormals();
  }
  function fiber(rad, len, segs, mat) {
    const g = new THREE.CylinderGeometry(rad, rad, len, 24, segs);
    const mesh = new THREE.Mesh(g, mat); mesh.userData.base = Float32Array.from(g.attributes.position.array); mesh.userData.len = len;
    return mesh;
  }
  /* where the lamp's beam goes after the mirror when the rod has turned by ang: the point it leaves the mirror, its direction, and where it lands at the height of the scale */
  function reflect(ang) {
    const n = new THREE.Vector3(...N0).normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), ang);
    const at = new THREE.Vector3(0, Y_MIRROR, 0).addScaledVector(n, 0.024);
    const i = new THREE.Vector3().subVectors(at, new THREE.Vector3(...LAMP)).normalize();
    const dir = i.clone().addScaledVector(n, -2 * i.dot(n)).normalize();
    const hit = dir.y < -1e-4, t = hit ? (Y_SCALE - at.y) / dir.y : 6;
    return { at, dir, land: at.clone().addScaledVector(dir, t), hit };
  }
  /* the spot's path along the floor: where it lands for a turn ang, how far along the scale that is, and the turn that puts it a distance s along */
  const PATH = hasGL ? (() => {
    const n = 440, ang = [], s = [], pt = [];
    for (let k = 0; k <= n; k++) { const a = SCALE.a0 + ((SCALE.a1 - SCALE.a0) * k) / n; const l = reflect(a).land; ang.push(a); pt.push(l); s.push(k ? s[k - 1] + Math.hypot(l.x - pt[k - 1].x, l.z - pt[k - 1].z) : 0); }
    const s0 = s.reduce((best, v, k) => (Math.abs(ang[k]) < Math.abs(ang[best]) ? k : best), 0);
    const off = s[s0]; for (let k = 0; k <= n; k++) s[k] -= off;
    const interp = (xs, ys, x) => { let k = 1; while (k < n && xs[k] < x) k++; const t = (x - xs[k - 1]) / (xs[k] - xs[k - 1]); return ys[k - 1] + t * (ys[k] - ys[k - 1]); };
    return { along: (a) => interp(ang, s, a), turnFor: (q) => interp(s, ang, q), end: s[n], start: s[0] };
  })() : (() => {
    /* with no renderer there is no scene to trace, so the travel is taken from the geometry alone:
       the scale stands about 1.9 m from the mirror along the beam, and turning the mirror through an
       angle swings the reflected beam through twice it */
    const K = 2 * 1.9;
    return { along: (a) => K * a, turnFor: (q) => q / K, end: K * SCALE.a1, start: K * SCALE.a0 };
  })();
  /* the true distance the spot moves for a twist theta, in meters along the scale */
  const travel = (theta) => PATH.along(theta);
  /* a clean tick spacing near x: 1, 2 or 5 times a power of ten */
  const niceStep = (x) => { const p = Math.pow(10, Math.floor(Math.log10(x))); const m = x / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
  /* the strip's in-plane normal at a turn ang, pointing away from the axis */
  const pathNormal = (a) => { const l = reflect(a).land, q = Math.hypot(l.x, l.z); return new THREE.Vector3(l.x / q, 0, l.z / q); };
  /* a world point on the 2D layer over the scene, in the canvas's own logical units, and a point of
     the balance's own frame taken there through the turntable */
  const projected = (w) => { const p = w.clone().project(V3D.camera); return [((p.x + 1) / 2) * 1400, ((1 - p.y) / 2) * 620]; };
  const proj = (p) => projected(S.root3.localToWorld(p.clone()));
  const world = (obj, dy = 0) => { const v = new THREE.Vector3(); obj.getWorldPosition(v); v.y += dy; return v; };
  const setCol = (m, c) => { try { m.color.set(c); } catch (e) { /* a palette the renderer cannot read is left as it was */ } };

  function build() {
    V3D = F.view3d(d.stage, {
      h: 620, dist: 4.35, tilt: 20 * RAD, spin: 'none', views: VIEWS,
      pitch: [8 * RAD, 70 * RAD], yaw: [-92 * RAD, 92 * RAD], zoomMin: 0.7, zoomMax: 2.4,
      onRender: () => { if (last && frame3) paint(last); },
    });
    if (!V3D.scene) { V3D.wrap.remove(); V3D = null; return; }
    /* the 2D layer lies over the scene, so the figure's canvas is moved on top of the viewer */
    d.stage.insertBefore(V3D.wrap, d.c);
    Object.assign(d.c.style, { position: 'absolute', top: '0', left: '0', width: '100%', background: 'transparent', pointerEvents: 'none', zIndex: '1' });
    /* the turntable the orbit drives, the pre-turn that makes yaw zero the book's own side, and the
       offset that brings the middle of the balance onto the axis the orbit turns about */
    const turn = V3D.part(0);
    const pre = new THREE.Group(); pre.rotation.y = -AZ0; turn.add(pre);
    const root3 = new THREE.Group(); root3.position.set(-TARGET[0], -TARGET[1], -TARGET[2]); pre.add(root3);
    /* materials. The wood, the brass, the lead, the lamp's light and the mirror's glass are drawn in
       the colors those things have, which is a physical fact rather than a type's hue; the scale
       is a body and so takes the page's grey, with the ticks and the mirror's back in its ink,
       and both follow a change of theme. */
    const env = roomEnv();
    const phong = (c, o) => new THREE.MeshPhongMaterial(Object.assign({ color: c }, o));
    const wood = phong(0xffffff, { map: woodTex(), shininess: 14, specular: 0x241a10 });
    const brass = phong(0xc9a45c, { shininess: 90, specular: 0x8a6a2a, envMap: env, reflectivity: 0.5, combine: THREE.MixOperation });
    const lead = phong(0x585c66, { shininess: 44, specular: 0x2c2f36, envMap: env, reflectivity: 0.3, combine: THREE.MixOperation });
    const fm = fiberMaps();
    const silk = phong(0xffffff, { map: fm.col, normalMap: fm.nor, normalScale: new THREE.Vector2(0.9, 0.9), shininess: 60, specular: 0x6a6255 });
    const glass = phong(0xf6f8fb, { shininess: 150, specular: 0xffffff, envMap: env, reflectivity: 0.85, combine: THREE.MixOperation });
    const ivory = phong(PAL.soft2, { shininess: 8 });
    const inkm = phong(PAL.ink, { shininess: 6 });
    const light = new THREE.MeshBasicMaterial({ color: 0xf0a828, transparent: true, opacity: 0.92, depthWrite: false });
    const glow = new THREE.MeshBasicMaterial({ color: 0xf0a828, transparent: true, opacity: 0.32, depthWrite: false });
    const shade = new THREE.MeshBasicMaterial({ color: PAL.ink, map: blobTex(), transparent: true, opacity: 0.28, depthWrite: false });
    const blob = (host, x, z, rad, y = 0.002) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(2 * rad, 2 * rad), shade); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); host.add(m); return m; };
    /* the frame: a small round stand under the pivot, a post at the left and a beam over the axis that the fiber hangs from */
    blob(root3, 0, 0, 0.46);
    root3.add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.06, 64), wood).translateY(0.03));
    const postH = Y_TOP + 0.1 - 0.06;
    root3.add(new THREE.Mesh(new THREE.BoxGeometry(0.08, postH, 0.08), wood).translateX(-1.08).translateY(postH / 2 + 0.06));
    blob(root3, -1.08, 0, 0.15);
    root3.add(new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.07, 0.08), wood).translateX(-0.5).translateY(Y_TOP + 0.065));
    const clampTop = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.05, 24), brass); clampTop.position.y = Y_TOP + 0.005; root3.add(clampTop);
    root3.add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.14, 32), brass).translateY(0.13));
    /* the arm that carries the large spheres, turning on the pivot */
    const arm = new THREE.Group(); root3.add(arm);
    const armBar = new THREE.Mesh(new THREE.BoxGeometry(2 * A + 0.16, 0.035, 0.1), wood); armBar.position.y = Y_ARM; arm.add(armBar);
    V3D.pickable(armBar, 'the arm that carries the large spheres');
    const bigs = [1, -1].map((s) => {
      const stalk = new THREE.Mesh(stalkGeo(), brass); stalk.position.set(s * A, Y_ARM + 0.017, 0); arm.add(stalk);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), lead); ball.position.set(s * A, Y_ROD, 0); arm.add(ball);
      V3D.pickable(ball, 'a lead sphere on the stand, of mass M');
      blob(arm, s * A, 0, 0.16);
      return { stalk, ball };
    });
    /* the rod, its two small spheres, the hanger above it and the mirror on the hanger, all hung from the fiber */
    const rod = new THREE.Group(); root3.add(rod);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 2 * L, 16), brass); bar.rotation.z = Math.PI / 2; bar.position.y = Y_ROD; rod.add(bar);
    V3D.pickable(bar, 'the rod the small spheres hang from');
    const smalls = [1, -1].map((s) => {
      const b = new THREE.Mesh(new THREE.SphereGeometry(R_S, 40, 28), lead); b.position.set(s * L, Y_ROD, 0); rod.add(b);
      V3D.pickable(b, 'a suspended lead sphere, of mass m');
      return b;
    });
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, Y_HUB_TOP - Y_ROD, 24), brass); hub.position.y = (Y_HUB_TOP + Y_ROD) / 2; rod.add(hub);
    const notch = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.02, 0.004), inkm); notch.position.set(0.011, Y_HUB_TOP - 0.012, 0); rod.add(notch);
    const n0 = new THREE.Vector3(...N0).normalize();
    const mirror = new THREE.Group(); mirror.position.set(0, Y_MIRROR, 0).addScaledVector(n0, 0.02); mirror.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n0); rod.add(mirror);
    const mirrorFace = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.004, 40), [brass, glass, inkm]); mirror.add(mirrorFace);
    V3D.pickable(mirrorFace, 'the mirror on the rod');
    const mirrorRim = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.004, 12, 40), brass); mirrorRim.rotation.x = Math.PI / 2; mirror.add(mirrorRim);
    /* the fiber */
    const fibLen = Y_TOP - Y_HUB_TOP;
    const fib = fiber(0.008, fibLen, 64, silk); fib.position.y = (Y_TOP + Y_HUB_TOP) / 2; fm.col.repeat.set(1, 36); fm.nor.repeat.set(1, 36); root3.add(fib);
    V3D.pickable(fib, 'the fiber the balance hangs from');
    /* the lamp on its block, aimed at the mirror */
    const lampBody = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.2, 32), brass); lampBody.rotation.z = Math.PI / 2; lampBody.position.set(LAMP[0] + 0.1, LAMP[1], LAMP[2]); root3.add(lampBody);
    V3D.pickable(lampBody, 'the light source');
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.05, 32), new THREE.MeshBasicMaterial({ color: 0xfff1c0, side: THREE.DoubleSide })); lens.rotation.y = -Math.PI / 2; lens.position.set(LAMP[0] - 0.001, LAMP[1], LAMP[2]); root3.add(lens);
    root3.add(new THREE.Mesh(new THREE.BoxGeometry(0.08, LAMP[1] - 0.055, 0.08), wood).translateX(LAMP[0] + 0.1).translateY((LAMP[1] - 0.055) / 2));
    blob(root3, LAMP[0] + 0.1, LAMP[2], 0.15);
    /* the two beams and the spot they end in */
    const beamIn = new THREE.Mesh(stalkGeo(), light), beamOut = new THREE.Mesh(stalkGeo(), light); root3.add(beamIn, beamOut);
    const spot = new THREE.Mesh(new THREE.CircleGeometry(0.02, 24), light), halo = new THREE.Mesh(new THREE.CircleGeometry(0.05, 24), glow);
    spot.rotation.x = halo.rotation.x = -Math.PI / 2; root3.add(spot, halo);
    /* the scale: a strip in the page's grey along the path the spot travels, with ticks
       placed each frame in the true millimeters the readout gives, and a brass pin at the zero mark */
    const at0 = reflect(0).land;
    const shape = new THREE.Shape(), NS = 60, edge = (k, side) => { const a = SCALE.a0 + ((SCALE.a1 - SCALE.a0) * k) / NS; return reflect(a).land.clone().addScaledVector(pathNormal(a), side * SCALE.half); };
    for (let k = 0; k <= NS; k++) { const q = edge(k, 1); if (k) shape.lineTo(q.x, -q.z); else shape.moveTo(q.x, -q.z); }
    for (let k = NS; k >= 0; k--) { const q = edge(k, -1); shape.lineTo(q.x, -q.z); }
    shape.closePath();
    const scaleMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.012, bevelEnabled: false }), ivory); scaleMesh.rotation.x = -Math.PI / 2; root3.add(scaleMesh);
    V3D.pickable(scaleMesh, 'the scale the spot is read off');
    const tickMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.0025, 0.002, 0.03), inkm, 120), tall = new THREE.InstancedMesh(new THREE.BoxGeometry(0.004, 0.002, 0.06), inkm, 40);
    root3.add(tickMesh, tall);
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.05, 12), brass); pin.position.copy(at0).addScaledVector(pathNormal(0), -0.032); pin.position.y = 0.037; root3.add(pin);
    V3D.pickable(pin, 'the zero mark of the scale');
    S = { root3, turn, arm, bigs, rod, smalls, fib, fibLen, mirror, lampBody, beamIn, beamOut, spot, halo, at0, tickMesh, tall, hues: { ivory, inkm, shade } };
  }

  /* ---------- the scene each frame ---------- */
  function apply3d(st) {
    const { turn, arm, bigs, rod, fib, beamIn, beamOut, spot, halo, tickMesh, tall, hues } = S;
    setCol(hues.ivory, PAL.soft2); setCol(hues.inkm, PAL.ink); setCol(hues.shade, PAL.ink);
    arm.rotation.y = st.phi; rod.rotation.y = st.drawn;
    bigs.forEach(({ stalk, ball }) => { ball.scale.setScalar(st.rL); stalk.scale.set(0.016, Y_ROD - st.rL - stalk.position.y + 0.01, 0.016); });
    twist(fib, st.drawn);
    const ref = reflect(st.drawn);
    between(beamIn, new THREE.Vector3(...LAMP), ref.at, 0.006); between(beamOut, ref.at, ref.land, 0.006);
    spot.visible = halo.visible = ref.hit; spot.position.set(ref.land.x, Y_SCALE + 0.002, ref.land.z); halo.position.copy(spot.position);
    /* the ticks, in the true millimeters the readout gives: a fine tick about every twentieth of the
       scale and a tall, numbered one every fifth of those */
    const fine = niceStep((PATH.end / X.v) * 1000 / 20), marks = [];
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1);
    let ti = 0, tj = 0;
    for (let k = Math.ceil((PATH.start * 1000) / (fine * X.v)); k * fine * X.v <= PATH.end * 1000 && ti < 120 && tj < 40; k++) {
      const a = PATH.turnFor((k * fine * X.v) / 1000), big = k % 5 === 0, nrm = pathNormal(a), pos = reflect(a).land.clone().addScaledVector(nrm, big ? 0.02 : 0.035); pos.y = Y_SCALE;
      mtx.compose(pos, q.setFromAxisAngle(up, Math.atan2(nrm.x, nrm.z)), one);
      if (big) { tall.setMatrixAt(tj++, mtx); marks.push({ v: k * fine, p: pos.clone().addScaledVector(nrm, 0.03) }); } else tickMesh.setMatrixAt(ti++, mtx);
    }
    tickMesh.count = ti; tall.count = tj; tickMesh.instanceMatrix.needsUpdate = tall.instanceMatrix.needsUpdate = true;
    /* the 2D layer projects points of the scene, so the matrices are brought up to date before it draws */
    V3D.camera.updateMatrixWorld(); turn.updateMatrixWorld(true);
    frame3 = { ref, marks, fine };
    V3D.invalidate();
  }

  /* ---------- the 2D layer, and the headline it carries ---------- */
  function paint(st) {
    const { ctx } = begin(d.c);
    /* the scene reaches the top of the frame, so the headline gets a band of the page's own color
       under it and stays readable over the woodwork */
    if (S) { ctx.save(); ctx.fillStyle = alpha(PAL.panel, 0.82); ctx.fillRect(0, 0, 1400, 94); ctx.restore(); }
    if (S) over3d(ctx, st); else drawFlat(ctx, st);
    topline(ctx, st.u === 0 ? 'The large spheres stand away from the small ones, and the light spot rests by the zero mark of the scale.'
      : st.u < 1 ? 'After ' + clock(st.tau) + ' the large spheres are swinging in, and the rod is turning toward them as the attraction grows.'
        : st.ringing ? 'After ' + clock(st.tau) + ' the balance is still swinging about its new rest, one swing taking the seven minutes it takes in life.'
          : 'Each pair attracts with ' + sci(st.rest.F, 2) + ' N, the fiber holds a twist of ' + deg(st.rest.theta) + ', and the spot rests ' + mm(travel(st.rest.theta)) + ' from the zero mark.');
  }

  function over3d(ctx, st) {
    const { bigs, smalls, spot, fibLen } = S, { ref, marks, fine } = frame3;
    const on = LAB.value === 'on';
    /* the labels: each beside its thing on a page-color panel, and the two typed quantities in their colors */
    const lab = labeller(ctx, 620);
    lab.block(0, 0, 1400, 96); lab.block(280, 582, 1120, 620);
    /* the spheres keep the labels off them: each is reserved as the square round its projected disc */
    [...bigs.map((b) => [b.ball, st.rL]), ...smalls.map((b) => [b, R_S])].forEach(([ball, rad]) => {
      const c = projected(world(ball)), t = projected(world(ball, rad)), q = Math.hypot(t[0] - c[0], t[1] - c[1]);
      lab.block(c[0] - q, c[1] - q, c[0] + q, c[1] + q);
    });
    const pBack = projected(world(bigs[0].ball)), pSmallBack = projected(world(smalls[0]));
    /* the distance between the centers of the back pair, and the force that pulls the small sphere across it */
    line(ctx, pSmallBack[0], pSmallBack[1], pBack[0], pBack[1], C('position'), 3, [6, 8]);
    lab.add('r = ' + fmt(r.v, 2) + ' m', (pSmallBack[0] + pBack[0]) / 2, (pSmallBack[1] + pBack[1]) / 2, 0.2, -1, C('position'), 20);
    const fx = pBack[0] - pSmallBack[0], fy = pBack[1] - pSmallBack[1], fl = Math.hypot(fx, fy) || 1;
    const fMax = pull(160, phiFor(0.2)).F, aLen = 34 + 56 * Math.sqrt(st.now.F / fMax);
    arrow(ctx, pSmallBack[0], pSmallBack[1], pSmallBack[0] + (fx / fl) * aLen, pSmallBack[1] + (fy / fl) * aLen, C('force'), 5);
    lab.add('F', pSmallBack[0] + (fx / fl) * aLen, pSmallBack[1] + (fy / fl) * aLen, fy / fl, -Math.abs(fx / fl) - 0.2, C('force'), 24, 16);
    const pZero = proj(new THREE.Vector3(S.at0.x, Y_SCALE, S.at0.z));
    dot(ctx, pZero[0], pZero[1], PAL.muted, false, 7);
    /* the light spot's label stands still, just past the far end of the scale, and a leader runs from it to wherever the spot is */
    const pEnd = proj(reflect(SCALE.a1).land.clone().addScaledVector(pathNormal(SCALE.a1), SCALE.half + 0.03));
    const spotLab = [Math.min(pEnd[0] + 70, 1300), Math.min(pEnd[1] + 24, 560)];
    if (on) {
      const pBigFoot = projected(world(bigs[1].ball, -st.rL)), pSmallFoot = projected(world(smalls[1], -R_S));
      lab.add('M = ' + fmt(M.v, 0) + ' kg', pBigFoot[0], pBigFoot[1], 0, 1, PAL.ink, 20, 22);
      lab.add('m = ' + fmt(m_S, 2) + ' kg', pSmallFoot[0], pSmallFoot[1], 0, 1, PAL.ink, 20, 22);
      const pMirror = projected(world(S.mirror)), pFib = proj(new THREE.Vector3(0, Y_HUB_TOP + 0.4 * fibLen, 0));
      const pLamp = proj(new THREE.Vector3(LAMP[0] + 0.1, LAMP[1] + 0.07, LAMP[2]));
      const aMid = (SCALE.a0 + SCALE.a1) / 2, pScale = proj(reflect(aMid).land.clone().addScaledVector(pathNormal(aMid), SCALE.half + 0.02));
      lab.add('the fiber', pFib[0], pFib[1], -1, 0, PAL.muted, 18, 30);
      lab.add('the mirror', pMirror[0], pMirror[1], 1, 0.3, PAL.muted, 18, 44);
      lab.add('the light source', pLamp[0], pLamp[1], 0, -1, PAL.muted, 18, 40);
      lab.add('zero mark', pZero[0], pZero[1], -0.6, -1, PAL.muted, 17, 26);
      lab.add('the scale', pScale[0], pScale[1], 0.3, -1, PAL.muted, 18, 40);
      lab.block(spotLab[0] - 8, spotLab[1] - 14, spotLab[0] + 120, spotLab[1] + 14);
    }
    /* the numbers on the tall ticks, in the readout's millimeters */
    marks.forEach(({ v, p }, i) => { const q = proj(p), num = v === 0 ? '0' : fine < 1 ? fmt(v, 1) : fmt(v, 0); text(ctx, num + (i === marks.length - 1 ? ' mm' : ''), q[0], q[1] + 9, PAL.muted, { size: 14, align: 'center', bg: alpha(PAL.panel, 0.7) }); });
    lab.flush();
    if (on && ref.hit) {
      const pSpot = projected(world(spot));
      line(ctx, pSpot[0], pSpot[1], spotLab[0], spotLab[1], alpha(PAL.ink, 0.5), 1.5, [5, 6]);
      text(ctx, 'the light spot', spotLab[0], spotLab[1], PAL.ink, { weight: 600, size: 18, align: 'left', bg: PAL.panel });
    }
  }

  /* ---------- the balance from above, when there is no WebGL to draw the scene ---------- */
  function drawFlat(ctx, st) {
    const on = LAB.value === 'on';
    const px = 400, py = 340, armS = 150, armL = armS * (A / L), rs = 12, rl = 14 + 16 * Math.sqrt(M.v / 160);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(px, py, armL + rl + 30, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'the stand, seen from above', px, py + armL + rl + 54, PAL.muted, { size: 15, align: 'center' });
    /* canvas x is the scene's x and canvas y (down) is the scene's z, so a turn about the axis is drawn clockwise */
    const sx = (s) => px + s * armS * Math.cos(st.drawn), sy = (s) => py - s * armS * Math.sin(st.drawn);
    const ax = (s) => px + s * armL * Math.cos(st.phi), ay = (s) => py - s * armL * Math.sin(st.phi);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.translate(px, py); ctx.rotate(-st.phi);
    ctx.beginPath(); ctx.rect(-armL - rl, -8, 2 * (armL + rl), 16); ctx.fill(); ctx.stroke(); ctx.restore();
    [1, -1].forEach((s) => sphere(ctx, ax(s), ay(s), rl, PAL.ink));
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.translate(px, py); ctx.rotate(-st.drawn);
    ctx.beginPath(); ctx.rect(-armS, -4, 2 * armS, 8); ctx.fill(); ctx.stroke(); ctx.restore();
    [1, -1].forEach((s) => sphere(ctx, sx(s), sy(s), rs, PAL.ink));
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 96); lab.block(0, 582, 760, 620);
    [1, -1].forEach((s) => {
      const dx = ax(s) - sx(s), dy = ay(s) - sy(s), Ld = Math.hypot(dx, dy) || 1;
      arrow(ctx, sx(s), sy(s), sx(s) + (dx / Ld) * 54, sy(s) + (dy / Ld) * 54, C('force'), 4);
    });
    lab.add('F', sx(1) + 30, sy(1) + 20, 0, 1, C('force'), 24, 20);
    line(ctx, sx(1), sy(1), ax(1), ay(1), C('position'), 3, [6, 8]);
    lab.add('r = ' + fmt(r.v, 2) + ' m', (sx(1) + ax(1)) / 2, (sy(1) + ay(1)) / 2, 1, -0.3, C('position'), 20, 24);
    dot(ctx, px, py, PAL.ink, true, 8);
    const lx = 1180, ly = 540, zero = 1000, spotX = zero + 300 * Math.min(1, st.drawn / 0.6);
    line(ctx, lx, ly, px, py, alpha(PAL.ink, 0.3), 2);
    line(ctx, 700, 160, 1340, 160, PAL.muted, 3);
    for (let x = 700; x <= 1340.5; x += 32) line(ctx, x, 160, x, 174, PAL.muted, 2);
    dot(ctx, zero, 160, PAL.muted, false, 9);
    line(ctx, px, py, spotX, 172, alpha(PAL.ink, 0.3), 2); dot(ctx, spotX, 160, PAL.ink, true, 10);
    if (on) {
      lab.add('M = ' + fmt(M.v, 0) + ' kg', ax(1), ay(1), 1, 0, PAL.ink, 20, rl + 14);
      lab.add('m = ' + fmt(m_S, 2) + ' kg', sx(-1), sy(-1), -1, 0, PAL.ink, 20, rs + 14);
      lab.add('the fiber, seen end on', px, py, -0.4, 1, PAL.muted, 17, 30);
      lab.add('the light source', lx, ly, 0, 1, PAL.muted, 17, 26);
      lab.add('the scale', 1340, 160, 0, -1, PAL.muted, 17, 26);
      lab.add('zero mark', zero, 160, 0, 1, PAL.muted, 17, 26);
      lab.add('the light spot', spotX, 160, 0.3, -1, PAL.ink, 17, 26);
    }
    lab.flush();
    text(ctx, 'This browser cannot draw the balance in three dimensions, so it is drawn from above.', 24, 600, PAL.muted, { size: 15 });
  }

  function draw() {
    const st = state(cy.now());
    last = st;
    if (S) apply3d(st);
    paint(st);
    readout(d.readout, `\\kF = G\\frac{mM}{\\kr^2} = \\frac{(${texSci(G_MEASURED, 3)})(${fmt(m_S, 2)}\\ \\text{kg})(${fmt(M.v, 0)}\\ \\text{kg})}{(${fmt(r.v, 2)}\\ \\text{m})^2} = ${texSci(st.rest.F, 2)}\\ \\text{N}`,
      'The fiber twists until the torque it resists balances the torque of the attraction, so the spot moves further along the scale the stronger the attraction is. Here a twist of ' + deg(st.rest.theta) + ' carries the spot ' + mm(travel(st.rest.theta)) + ', which the drawing shows ' + fmt(X.v, 0) + ' times larger than life' + (st.pinned ? ', or as large as it can before the spheres would touch' : '') + '. The balance swings freely once in seven minutes, as Cavendish’s did, and the scene runs that swing ' + fmt(TIME_X, 0) + ' times faster than life while the clock above it reads the true time. The suspended spheres have a mass of ' + fmt(m_S, 2) + ' kg.');
  }

  if (hasGL) { try { build(); } catch (e) { console.error('sim-cavendish: falling back to the flat drawing', e); S = null; } }
  register(d.fig, { update: (dt) => cy.step(dt, () => 2), draw });
})();

};
