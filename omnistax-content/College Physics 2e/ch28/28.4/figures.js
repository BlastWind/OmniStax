/* Figures for section 28.4 Relativistic Addition of Velocities. The figures draw
   velocity (v, u, u', c), position (λ_s, λ_obs) and frequency (f_s, f_obs). u' is
   the dashed variant of the velocity hue, the classical sum a hollow marker, λ_s
   the dashed bracket. v/c and u/c are in ink. The girl, the sled, the snowball,
   the man, the boy, the car, its driver, the observer on the sidewalk, the
   spaceship, the Earth, the canister and the Doppler source are referents. The
   one physical-fact colour is the spectral colour of hydrogen light in the
   Doppler sim, drawn through F.fact only while its wavelength is visible. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['28.4'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, hbracket, silhouette, car } = F;
const sim = (id, H) => F.sim(root, id, H);

const sig = (n, k) => {
  if (!n) return fmt(0, k - 1);
  const e = Math.floor(Math.log10(Math.abs(n)));
  return fmt(n, Math.max(0, k - 1 - e));
};
const signed = (n, d) => (n < 0 ? '−' : '') + fmt(Math.abs(n), d);
const addRel = (v, up) => (v + up) / (1 + v * up);

/* an arrow drawn dashed along its shaft, for a velocity measured in the other frame */
function dashArrow(ctx, x1, y1, x2, y2, color, w) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 2) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, head = Math.min(18, L);
  line(ctx, x1, y1, x2 - ux * head, y2 - uy * head, color, w, [10, 7]);
  arrow(ctx, x2 - ux * head, y2 - uy * head, x2, y2, color, w);
}
function solidArrow(ctx, x1, y1, x2, y2, color, w) { if (Math.abs(x2 - x1) + Math.abs(y2 - y1) >= 2) arrow(ctx, x1, y1, x2, y2, color, w); }

/* a hollow arrow, for a classical sum that is never observed */
function ghostArrow(ctx, x1, y, x2, color) {
  if (Math.abs(x2 - x1) < 4) return;
  const s = Math.sign(x2 - x1), head = 20;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.setLineDash([6, 6]);
  ctx.beginPath(); ctx.moveTo(x1, y - 5); ctx.lineTo(x2 - s * head, y - 5); ctx.moveTo(x1, y + 5); ctx.lineTo(x2 - s * head, y + 5); ctx.stroke();
  ctx.setLineDash([]); ctx.beginPath(); ctx.moveTo(x2 - s * head, y - 13); ctx.lineTo(x2, y); ctx.lineTo(x2 - s * head, y + 13); ctx.closePath(); ctx.stroke();
  ctx.restore();
}

function ship(ctx, x, y, s, color) {
  const L = 90 * s, h = 16 * s;
  ctx.save(); ctx.fillStyle = alpha(color, 0.85); ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x - 28 * s, y - h); ctx.lineTo(x - L, y - h);
  ctx.lineTo(x - L - 14 * s, y - h - 12 * s); ctx.lineTo(x - L - 14 * s, y + h + 12 * s);
  ctx.lineTo(x - L, y + h); ctx.lineTo(x - 28 * s, y + h); ctx.closePath(); ctx.fill(); ctx.restore();
}

function planet(ctx, x, y, r, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.2); ctx.strokeStyle = alpha(color, 0.85); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
}

function star(ctx, x, y, color) {
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4, r1 = i % 2 ? 12 : 16, r2 = i % 2 ? 22 : 30;
    line(ctx, x + Math.cos(a) * r1, y + Math.sin(a) * r1, x + Math.cos(a) * r2, y + Math.sin(a) * r2, alpha(color, 0.85), 3);
  }
  dot(ctx, x, y, color, true, 10);
}

/* a velocity line: ticks from lo to hi in steps of one unit, named by `name` */
function velocityLine(ctx, X, lo, hi, y, name) {
  line(ctx, X(lo), y, X(hi), y, PAL.muted, 2);
  for (let k = lo; k <= hi; k++) {
    line(ctx, X(k), y - 8, X(k), y + 8, PAL.muted, 2);
    text(ctx, name(k), X(k), y + 28, PAL.muted, { size: 17, align: 'center' });
  }
}

/* =====================================================================
   Figure 28.14 · sim-sled-snowball · still · flat (root rule 28.1)
   The scene on the ground at y = 250; below it a velocity strip from −4 to
   7 m/s at 100 units per m/s, 0 at x = 550, where v and u' add head to tail.
===================================================================== */
(function () {
  const d = sim('sim-sled-snowball', 520);
  const thr = choice(d.controls, { label: 'throw', options: [{ value: 'fwd', label: 'forward' }, { value: 'back', label: 'backward' }], value: 'fwd', aria: 'the direction the snowball is thrown' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 3, step: 0.1, value: 1, unit: 'm/s', dec: 1,
    aria: 'the velocity of the sled relative to the Earth', specials: [{ at: 1, label: '1.0 m/s' }] });
  const uS = ctl(d.controls, { label: '|\\kuprime|', cls: 'velocity', min: 0, max: 3, step: 0.1, value: 1.5, unit: 'm/s', dec: 1,
    aria: 'the speed of the snowball relative to the sled', specials: [{ at: 1.5, label: '1.5 m/s' }] });

  const G = 250, X = (u) => 550 + 100 * u, SY = 400;

  function draw() {
    const { ctx } = begin(d.c);
    const fwd = thr.value === 'fwd', v = vS.v, up = (fwd ? 1 : -1) * uS.v, u = v + up;
    const side = thr.mix((s) => (s === 'fwd' ? 1 : -1));

    topline(ctx, 'Thrown ' + (fwd ? 'forward' : 'backward') + ', the snowball moves at u = ' + signed(u, 1) + ' m/s relative to the Earth.');

    const cG = F.ref('girl'), cS = F.ref('sled'), cB = F.ref('snowball'), cY = F.ref('boy'), cM = F.ref('man');
    line(ctx, 60, G, 1340, G, alpha(PAL.ink, 0.35), 2);
    ctx.save(); ctx.strokeStyle = cS; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(300, G - 6); ctx.lineTo(470, G - 6); ctx.quadraticCurveTo(495, G - 6, 495, G - 26); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(330, G - 6); ctx.lineTo(330, G - 26); ctx.moveTo(450, G - 6); ctx.lineTo(450, G - 26); ctx.moveTo(310, G - 26); ctx.lineTo(480, G - 26); ctx.stroke();
    ctx.restore();
    silhouette(ctx, { x: 395, y: G - 26, s: 0.62, pose: 'sit', face: fwd ? 1 : -1, color: cG });
    silhouette(ctx, { x: 610, y: G, s: 0.8, pose: 'pull', face: 1, color: cM });
    line(ctx, 490, G - 24, 640, G - 80, alpha(PAL.ink, 0.6), 2);
    silhouette(ctx, { x: 1250, y: G, s: 0.8, pose: 'stand', face: -1, color: cY });
    label(ctx, 'girl', 360, G - 70, { side: 'left', color: cG, gap: 30, size: 19 });
    label(ctx, 'man', 640, G - 60, { side: 'right', color: cM, gap: 24, size: 19 });
    label(ctx, 'boy', 1250, G - 60, { side: 'left', color: cY, gap: 36, size: 19 });

    solidArrow(ctx, 300, G + 30, 300 + 60 * v, G + 30, C('velocity'), 4);
    if (v > 0.05) text(ctx, 'v', 300 + 30 * v, G + 52, C('velocity'), { size: 22, weight: 600, align: 'center' });

    const bx = 405 + side * 90, by = 120;
    dot(ctx, bx, by, cB, true, 11);
    const L = 60 * Math.abs(u), dir = Math.sign(u);
    if (L >= 2) {
      solidArrow(ctx, bx + dir * 16, by, bx + dir * (16 + L), by, C('velocity'), 4);
      text(ctx, 'u', bx + dir * (16 + L / 2), by - 22, C('velocity'), { size: 22, weight: 600, align: 'center' });
    }

    velocityLine(ctx, X, -4, 7, SY + 60, (k) => signed(k, 0) + (k === 7 ? ' m/s' : ''));
    line(ctx, X(0), SY - 30, X(0), SY + 60, alpha(PAL.ink, 0.3), 2, [4, 6]);
    solidArrow(ctx, X(0), SY - 10, X(v), SY - 10, C('velocity'), 4);
    if (v > 0.05) text(ctx, 'v', (X(0) + X(v)) / 2, SY - 30, C('velocity'), { size: 22, weight: 600, align: 'center' });
    line(ctx, X(v), SY - 10, X(v), SY - 48, alpha(C('velocity'), 0.5), 1.5, [3, 5]);
    dashArrow(ctx, X(v), SY - 48, X(u), SY - 48, C('velocity'), 4);
    if (Math.abs(up) > 0.05) text(ctx, 'u′', (X(v) + X(u)) / 2, SY - 70, C('velocity'), { size: 22, weight: 600, align: 'center' });
    solidArrow(ctx, X(0), SY + 22, X(u), SY + 22, C('velocity'), 5);
    if (Math.abs(u) > 0.05) text(ctx, 'u', X(u) + (u > 0 ? 18 : -18), SY + 22, C('velocity'), { size: 22, weight: 600, align: u > 0 ? 'left' : 'right' });

    tex(d.readout, '\\ku = \\kv + \\kuprime = ' + fmt(v, 1) + '\\;\\text{m/s} + (' + signed(up, 1) + '\\;\\text{m/s}) = ' + signed(u, 1) + '\\;\\text{m/s}');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 28.15 · sim-headlights · still · flat
   c is drawn 320 units long from the headlights at x = 380. The hollow
   arrow is the classical v + c, which reaches 1.99c = 637 units at most.
===================================================================== */
(function () {
  const d = sim('sim-headlights', 500);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.99, step: 0.001, value: 0.5, unit: '', dec: 3,
    aria: 'the speed of the car as a fraction of the speed of light', specials: [{ at: 0.5, label: '0.500c' }] });

  const X0 = 380, CU = 320, ROAD = 350;

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, u = addRel(b, 1), V = C('velocity');

    topline(ctx, 'At ' + fmt(b, 3) + 'c the light leaves the car at c and reaches the sidewalk at c, not ' + fmt(1 + b, 3) + 'c.');

    line(ctx, 60, ROAD, 1340, ROAD, alpha(PAL.ink, 0.5), 3);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.beginPath();
    ctx.moveTo(X0, ROAD - 26); ctx.lineTo(1180, ROAD - 70); ctx.lineTo(1180, ROAD - 6); ctx.closePath(); ctx.fill(); ctx.restore();
    car(ctx, X0 - 70, ROAD - 16, F.ref('car'), 1.65);
    label(ctx, 'driver', X0 - 90, ROAD - 60, { side: 'above', color: F.ref('driver'), gap: 26, size: 19 });
    silhouette(ctx, { x: 1250, y: ROAD, s: 0.8, pose: 'stand', face: -1, color: F.ref('sidewalk-observer') });
    label(ctx, 'observer', 1250, ROAD - 50, { side: 'left', color: F.ref('sidewalk-observer'), gap: 40, size: 19 });

    if (b > 0.005) {
      solidArrow(ctx, X0 - 150, ROAD + 40, X0 - 150 + CU * b, ROAD + 40, V, 4);
      text(ctx, 'v', X0 - 150 + CU * b / 2, ROAD + 64, V, { size: 22, weight: 600, align: 'center' });
    }

    dashArrow(ctx, X0, 120, X0 + CU, 120, V, 4);
    text(ctx, 'u′ = c, as the driver measures it', X0 + CU + 18, 120, V, { size: 20, weight: 600 });
    solidArrow(ctx, X0, 180, X0 + CU * u, 180, V, 5);
    text(ctx, 'u = c, as the observer measures it', X0 + CU * u + 18, 180, V, { size: 20, weight: 600 });
    if (b > 0.005) {
      ghostArrow(ctx, X0, 236, X0 + CU * (1 + b), alpha(V, 0.6));
      text(ctx, 'v + c = ' + fmt(1 + b, 3) + 'c', X0 + CU * (1 + b) + 18, 236, PAL.muted, { size: 19, weight: 600, bg: PAL.panel });
    }
    line(ctx, X0 + CU, 96, X0 + CU, 256, alpha(V, 0.7), 2, [6, 6]);
    text(ctx, 'c', X0 + CU, 84, V, { size: 20, weight: 600, align: 'center' });

    tex(d.readout, '\\ku = \\frac{\\kv + \\kc}{1 + \\kv\\kc/\\kc^{2}} = \\frac{' + fmt(b, 3) + '\\kc + \\kc}{1 + ' + fmt(b, 3) + '} = \\kc');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 28.16 + 28.17 · sim-ship-canister · still · flat
   Towards the Earth (to the right) is positive. The velocity line runs
   from −2c to 2c at 275 units per c, 0 at x = 700; the walls at ±c are
   dashed. u' = c is the laser of Example 28.3, drawn as a beam.
===================================================================== */
(function () {
  const d = sim('sim-ship-canister', 540);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.99, step: 0.001, value: 0.5, unit: '', dec: 3,
    aria: 'the velocity of the ship towards the Earth as a fraction of the speed of light', specials: [{ at: 0.5, label: '0.500c' }] });
  const uS = ctl(d.controls, { label: '\\kuprime/\\kc', cls: 'velocity', min: -1, max: 1, step: 0.001, value: 0.75, unit: '', dec: 3,
    aria: 'the velocity of the canister relative to the ship as a fraction of the speed of light',
    specials: [{ at: 0.75, label: '0.750c' }, { at: -0.75, label: '−0.750c' }, { at: 1, label: 'laser' }] });

  const SY = 170, SX = 420, X = (w) => 700 + 275 * w, LY = 420, V = () => C('velocity');

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, up = uS.v, u = addRel(b, up), cl = b + up, laser = Math.abs(up) > 0.9995;

    topline(ctx, laser
      ? 'The laser light ' + (up > 0 ? 'reaches the Earth at c' : 'moves away from the Earth at −c') + ', not the ' + signed(cl, 3) + 'c classical addition gives.'
      : 'The Earth sees the canister at ' + signed(u, 3) + 'c, not the ' + signed(cl, 3) + 'c classical addition gives.');

    const cSh = F.ref('spaceship'), cE = F.ref('earth'), cC = F.ref('canister');
    ship(ctx, SX, SY, 1, cSh);
    label(ctx, 'ship', SX - 55, SY + 30, { side: 'below', color: cSh, gap: 20, size: 19 });
    planet(ctx, 1250, SY, 48, cE);
    label(ctx, 'Earth', 1250, SY + 48, { side: 'below', color: cE, gap: 22, size: 19 });
    if (b > 0.005) {
      solidArrow(ctx, SX - 110, SY - 50, SX - 110 + 150 * b, SY - 50, V(), 4);
      text(ctx, 'v', SX - 110 + 75 * b, SY - 72, V(), { size: 22, weight: 600, align: 'center' });
    }
    if (laser) {
      if (up > 0) line(ctx, SX + 6, SY, 1196, SY, V(), 3); else line(ctx, SX - 120, SY, 60, SY, V(), 3);
      text(ctx, up > 0 ? 'u′ = c' : 'u′ = −c', up > 0 ? 820 : 170, SY - 24, V(), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    } else {
      const cx = up >= 0 ? SX + 150 : SX - 160, dir = up >= 0 ? 1 : -1;
      ctx.save(); ctx.fillStyle = alpha(cC, 0.2); ctx.strokeStyle = cC; ctx.lineWidth = 3;
      ctx.fillRect(cx - 18, SY - 11, 36, 22); ctx.strokeRect(cx - 18, SY - 11, 36, 22); ctx.restore();
      if (Math.abs(up) > 0.005) {
        dashArrow(ctx, cx + dir * 24, SY, cx + dir * (24 + 150 * Math.abs(up)), SY, V(), 4);
        text(ctx, 'u′', cx + dir * (24 + 75 * Math.abs(up)), SY - 24, V(), { size: 22, weight: 600, align: 'center' });
      }
    }

    velocityLine(ctx, X, -2, 2, LY + 50, (k) => (k === 0 ? '0' : (k < 0 ? '−' : '') + (Math.abs(k) === 1 ? '' : '2') + 'c'));
    [-1, 1].forEach((k) => line(ctx, X(k), LY - 110, X(k), LY + 50, alpha(V(), 0.8), 2.5, [8, 7]));
    solidArrow(ctx, X(0), LY - 80, X(b), LY - 80, V(), 4);
    if (b > 0.03) text(ctx, 'v', (X(0) + X(b)) / 2, LY - 102, V(), { size: 22, weight: 600, align: 'center' });
    dashArrow(ctx, X(b), LY - 80, X(cl), LY - 80, V(), 4);
    if (Math.abs(up) > 0.03) text(ctx, 'u′', (X(b) + X(cl)) / 2, LY - 102, V(), { size: 22, weight: 600, align: 'center' });
    dot(ctx, X(cl), LY, V(), false, 11);
    label(ctx, 'classical', X(cl), LY - 12, { side: 'above', gap: 18, size: 18, color: PAL.muted, leader: false });
    solidArrow(ctx, X(0), LY, X(u) - Math.sign(u) * 12, LY, V(), 5);
    dot(ctx, X(u), LY, V(), true, 11);
    label(ctx, 'u', X(u), LY + 12, { side: 'below', gap: 14, size: 22, color: V(), leader: false });

    tex(d.readout, '\\ku = \\frac{\\kv + \\kuprime}{1 + \\kv\\kuprime/\\kc^{2}} = \\frac{' + fmt(b, 3) + '\\kc + (' + signed(up, 3) + '\\kc)}{1 + (' + fmt(b, 3) + ')(' + signed(up, 3) + ')} = ' + signed(u, 3) + '\\kc');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-relativistic-doppler · still · flat
   Two wave strips from x = 150 to 1050: λ_s is drawn 120 units, λ_obs
   120 k units with k = √((1 + β)/(1 − β)), 27 to 523 units over the slider.
   Positive u is away from the Earth, which sits on the right, so the
   source's arrow points left. The received wave of hydrogen light is drawn
   in its spectral colour between 380 and 750 nm and in ink outside.
===================================================================== */
(function () {
  const d = sim('sim-relativistic-doppler', 500);
  const src = choice(d.controls, { label: 'source', options: [{ value: 'radio', label: 'radio, 0.525 m' }, { value: 'hydrogen', label: 'hydrogen, 656 nm' }], value: 'radio', aria: 'the radiation the source emits' });
  const uS = ctl(d.controls, { label: '\\ku/\\kc', cls: 'velocity', min: -0.9, max: 0.9, step: 0.001, value: 0.825, unit: '', dec: 3,
    aria: 'the velocity of the source away from the Earth as a fraction of the speed of light',
    specials: [{ at: 0.825, label: 'galaxy' }, { at: 0.35, label: 'probe' }, { at: 0, label: 'at rest' }] });

  const LAM = 120, XA = 150, XB = 1050, YA = 235, YB = 385, AMP = 32, CL = 3.00e8;

  /* the colour of light of wavelength nm, a physical fact; null outside the visible */
  function spectral(nm) {
    if (nm < 380 || nm > 750) return null;
    const stops = [[380, [130, 0, 200]], [440, [60, 70, 255]], [490, [0, 190, 230]], [530, [40, 200, 60]], [580, [235, 215, 0]], [620, [255, 120, 0]], [680, [230, 20, 20]], [750, [160, 0, 0]]];
    let i = 0; while (i < stops.length - 2 && nm > stops[i + 1][0]) i++;
    const [a, ca] = stops[i], [bb, cb] = stops[i + 1], k = (nm - a) / (bb - a);
    const c = ca.map((x, j) => Math.round(x + (cb[j] - x) * k));
    return 'rgb(' + c.join(',') + ')';
  }
  const band = (nm) => (nm < 380 ? 'ultraviolet' : nm > 750 ? 'infrared' : 'visible');

  function wave(ctx, y, lam, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.beginPath();
    for (let x = XA; x <= XB; x += 2) { const yy = y - AMP * Math.sin(2 * Math.PI * (x - XA) / lam); if (x === XA) ctx.moveTo(x, yy); else ctx.lineTo(x, yy); }
    ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const b = uS.v, k = Math.sqrt((1 + b) / (1 - b)), radio = src.value === 'radio';
    const ls = radio ? 0.525 : 656e-9, lo = ls * k, fs = CL / ls, fo = fs / k;
    const lamTxt = (l) => radio ? sig(l, 3) + ' m' : fmt(l * 1e9, 0) + ' nm';
    const fTxt = (f) => radio ? sig(f / 1e6, 3) + ' MHz' : sig(f / 1e12, 3) + ' THz';
    const P = C('position'), Fq = C('frequency'), V = C('velocity');

    const what = radio ? '0.525 m radio waves' : '656 nm hydrogen light';
    topline(ctx, Math.abs(b) < 0.0005
      ? 'At rest relative to the Earth, ' + what + (radio ? ' arrive' : ' arrives') + ' unchanged.'
      : (b > 0 ? 'Receding' : 'Approaching') + ' at ' + fmt(Math.abs(b), 3) + 'c, ' + what + (radio ? ' arrive ' : ' arrives ') + lamTxt(lo) + ' long: a ' + (b > 0 ? 'red' : 'blue') + ' shift.');

    const cSrc = F.ref('source'), cRe = F.ref('receiver');
    star(ctx, 250, 110, cSrc);
    label(ctx, radio ? 'galaxy' : 'hydrogen gas', 250, 110, { side: 'right', color: cSrc, gap: 40, size: 19 });
    planet(ctx, 1290, 110, 26, cRe);
    label(ctx, 'Earth', 1290, 110, { side: 'left', color: cRe, gap: 40, size: 19 });
    if (Math.abs(b) > 0.005) {
      const x0 = b > 0 ? 210 : 290;
      solidArrow(ctx, x0, 158, x0 - 160 * b, 158, V, 4);
      text(ctx, 'u', x0 - 80 * b, 180, V, { size: 22, weight: 600, align: 'center' });
    }

    const seen = (nm) => { const s = spectral(nm); return s ? F.fact(s) : PAL.ink; };
    const cs = radio ? PAL.ink : seen(656), co = radio ? PAL.ink : seen(lo * 1e9);
    wave(ctx, YA, LAM, cs);
    wave(ctx, YB, LAM * k, co);
    ctx.save(); ctx.setLineDash([8, 6]);
    hbracket(ctx, XA, XA + LAM, YA + AMP + 22, P, 'λ_{s} = ' + lamTxt(ls), { side: 'below' });
    ctx.restore();
    hbracket(ctx, XA, XA + LAM * k, YB + AMP + 22, P, 'λ_{obs} = ' + lamTxt(lo), { side: 'below' });

    text(ctx, 'emitted', XB + 40, YA - 16, PAL.muted, { size: 18 });
    text(ctx, 'f_{s} = ' + fTxt(fs), XB + 40, YA + 14, Fq, { size: 20, weight: 600 });
    text(ctx, 'received', XB + 40, YB - 16, PAL.muted, { size: 18 });
    text(ctx, 'f_{obs} = ' + fTxt(fo), XB + 40, YB + 14, Fq, { size: 20, weight: 600 });
    if (!radio) text(ctx, band(lo * 1e9), XB + 40, YB + 44, PAL.muted, { size: 18 });

    tex(d.readout, '\\klamobs = \\klams\\sqrt{\\frac{1 + \\ku/\\kc}{1 - \\ku/\\kc}} = (' + (radio ? sig(ls, 3) + '\\;\\text{m}' : '656\\;\\text{nm}') + ')\\sqrt{\\frac{1 + (' + signed(b, 3) + ')}{1 - (' + signed(b, 3) + ')}} = ' + (radio ? sig(lo, 3) + '\\;\\text{m}' : fmt(lo * 1e9, 0) + '\\;\\text{nm}'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
