/* Figures for section 17.2 Speed of Sound, Frequency, and Wavelength. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, curve, labeller, hover, scale } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the section's numbers ---------- */
const TAU = 2 * Math.PI;
const vAir = (Tc) => 331 * Math.sqrt((Tc + 273) / 273);          /* the book's formula, T in kelvin as °C + 273 */
const K = (Tc) => Tc + 273;
/* three significant figures the way the book writes them: 343, 0.780, 17.5, and whole numbers past a thousand */
const sig = (x, n = 3) => (Math.abs(x) >= 1000 ? String(Math.round(x)) : x.toPrecision(n));
const degC = (Tc) => fmt(Tc, 1) + ' °C';
/* the wavelength in the unit the book would choose */
const lamTxt = (l) => (l >= 0.1 ? sig(l) + ' m' : sig(l * 100) + ' cm');
const lamTex = (l) => (l >= 0.1 ? sig(l) + '\\ \\text{m}' : sig(l * 100) + '\\ \\text{cm}');
/* an arc of a wavefront: centre, radius, the direction it faces (0 right, π left) and the half-angle of the sector */
function front(ctx, cx, cy, r, dir, half, color, w, dash) {
  if (r <= 0) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.arc(cx, cy, r, dir - half, dir + half); ctx.stroke(); ctx.restore();
}
/* a scale bar in ink, one metre long at the figure's scale */
function metreBar(ctx, x, y, px, label = '1 m') {
  line(ctx, x, y, x + px, y, PAL.ink, 3); line(ctx, x, y - 8, x, y + 8, PAL.ink, 3); line(ctx, x + px, y - 8, x + px, y + 8, PAL.ink, 3);
  text(ctx, label, x + px / 2, y + 22, PAL.ink, { size: 17, align: 'center' });
}

/* =====================================================================
   FIGURE 17.8: the tuning fork and its wavefronts. Compressions are solid
   ink arcs at radii nλ on either side of the fork, rarefactions dashed
   between them, out to 4.0 m each way at 140 px per metre; λ is bracketed
   between two compressions, v_w arrows point outward at both ends, and
   the graph beneath draws v_w against T on fixed axes, −20 to 50 °C and
   300 to 380 m/s, the slider's own range. Still: the pattern answers its
   two sliders, and nothing in it has a clock.
===================================================================== */
(function () {
  const d = sim('sim-tuning-fork', 780);
  const fs = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 100, max: 1000, step: 1, value: 440, unit: 'Hz', dec: 0, aria: 'the frequency of the tuning fork', detents: [{ v: 256, label: '256' }, { v: 440, label: '440' }], snap: false });
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -20, max: 50, step: 0.5, value: 20, unit: '°C', dec: 1, aria: 'the temperature of the air', detents: [{ v: 0, label: '0' }, { v: 20, label: '20' }, { v: 30, label: '30' }], snap: false });
  const CX = 700, CY = 262, PPM = 140, REACH = 4.0, HALF = 0.62, TOP = 100, BOT = 430;           /* the fork's centre, px per metre, the scene's reach in metres, the sector's half-angle */
  const G = { l: 170, r: 1230, t: 540, b: 690 };                             /* the graph box; axes fixed, see the header comment */
  const names = [];
  hover(d.stage, () => names);
  function fork(ctx) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 7; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(CX - 13, CY - 70); ctx.lineTo(CX - 13, CY + 36); ctx.arc(CX, CY + 36, 13, Math.PI, 0, true); ctx.lineTo(CX + 13, CY - 70); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX, CY + 49); ctx.lineTo(CX, CY + 118); ctx.stroke();
    ctx.restore();
    /* the prongs' motion, drawn as faint ghosts either side */
    [-1, 1].forEach((s) => { line(ctx, CX + s * 20, CY - 70, CX + s * 20, CY - 10, alpha(PAL.ink, 0.28), 4); });
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const f = fs.v, Tc = Ts.v, v = vAir(Tc), lam = v / f, lpx = lam * PPM;
    const fc = C('frequency'), vc = C('velocity'), xc = C('position'), tc = C('temperature');
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    names.length = 0;
    /* the wavefronts: compressions solid at nλ, rarefactions dashed at (n − ½)λ, both ways, clipped to the scene's band */
    /* the scene's band less a window round the fork, so no arc crosses the prongs or the frequency written above them */
    ctx.save(); ctx.beginPath(); ctx.rect(0, TOP, 1400, BOT - TOP); ctx.rect(CX - 34, CY - 112, 68, 250); ctx.clip('evenodd');
    for (let n = 1; n * lpx <= REACH * PPM + 1; n++) {
      [0, Math.PI].forEach((dir) => {
        front(ctx, CX, CY, (n - 0.5) * lpx, dir, HALF, alpha(PAL.ink, 0.45), 2, [7, 9]);
        front(ctx, CX, CY, n * lpx, dir, HALF, PAL.ink, 3.5);
      });
    }
    ctx.restore();
    fork(ctx);
    names.push({ x: CX, y: CY, r: 60, name: 'the tuning fork, vibrating at ' + f + ' Hz' });
    /* the wavelength, bracketed from one compression to the next on the right, or from the fork's face to the first where the second lies past the drawing */
    const x1 = 2 * lpx <= REACH * PPM ? CX + lpx : CX, x2 = 2 * lpx <= REACH * PPM ? CX + 2 * lpx : CX + lpx;   /* one compression to the next, or the fork to the first where only one fits */
    hbracket(ctx, x1, x2, CY + 140, xc);
    text(ctx, 'λ = ' + lamTxt(lam), (x1 + x2) / 2, CY + 140 + 24, xc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, x1, CY + 140, x1, CY, alpha(xc, 0.35), 2, [4, 8]); line(ctx, x2, CY + 140, x2, CY, alpha(xc, 0.35), 2, [4, 8]);
    /* the speed, as an arrow at each end, and the frequency on the fork */
    arrow(ctx, CX + REACH * PPM + 10, CY, CX + REACH * PPM + 100, CY, vc, 5); arrow(ctx, CX - REACH * PPM - 10, CY, CX - REACH * PPM - 100, CY, vc, 5);
    text(ctx, 'v_w = ' + sig(v) + ' m/s', CX + REACH * PPM + 55, CY - 28, vc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'v_w', CX - REACH * PPM - 55, CY - 28, vc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'f = ' + f + ' Hz', CX, CY - 92, fc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'air at ' + degC(Tc), CX, CY - 138, tc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    metreBar(ctx, 90, 468, PPM);
    lab.flush();
    /* the graph beneath: the speed of sound against the temperature */
    const A = axes(ctx, G, [-20, 50], [300, 380], { xl: 'temperature T (°C)', xc: tc, yl: 'speed of sound v_w (m/s)', yc: vc, nx: 7, ny: 4, fx: (x) => fmt(x, 0), fy: (y) => fmt(y, 0) });
    curve(ctx, vAir, -20, 50, A.X, A.Y, vc, 5, 120);
    line(ctx, A.X(Tc), G.b, A.X(Tc), A.Y(v), tc, 2.5, [4, 8]);
    dot(ctx, A.X(Tc), A.Y(v), vc, true, 10);
    text(ctx, sig(v) + ' m/s at ' + degC(Tc), A.X(Tc) + (Tc > 25 ? -16 : 16), A.Y(v) - 26, vc, { size: 19, weight: 600, align: Tc > 25 ? 'right' : 'left', bg: PAL.panel });
    /* the two temperatures the book names, as ticks on the curve */
    [0, 20].forEach((t0) => { if (Math.abs(t0 - Tc) > 0.4) dot(ctx, A.X(t0), A.Y(vAir(t0)), vc, false, 7); });
    topline(ctx, 'At ' + degC(Tc) + ' sound travels at ' + sig(v) + ' m/s, so a ' + f + ' Hz tone has a wavelength of ' + lamTxt(lam) + '.');
    const dl = Math.abs(vAir(20) - vAir(0)) / f;
    readout(d.readout, `\\kvw = (331\\ \\text{m/s})\\sqrt{\\frac{${K(Tc)}\\ \\text{K}}{273\\ \\text{K}}} = ${sig(v)}\\ \\text{m/s}, \\qquad \\klam = \\frac{\\kvw}{\\kf} = \\frac{${sig(v)}\\ \\text{m/s}}{${f}\\ \\text{Hz}} = ${lamTex(lam)}`,
      'At 0 °C the speed of sound is 331 m/s and at 20 °C it is 343 m/s, less than a 4% increase, so the wavelength of this ' + f + ' Hz tone changes by only ' + sig(dl * 100, 2) + ' cm between the two temperatures. The frequency is the fork\u2019s own and does not change with the air.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 17.9: the bat and its echo. A wavefront leaves the bat's mouth,
   reaches the insect d away and returns as a dashed echo while a clock
   counts the milliseconds; the graph beneath draws the echo time against
   the distance on fixed axes, 0 to 10 m and 0 to 70 ms (10 m in air at
   −20 °C). Moves: one cycle is the round trip 2d/v_w in model time,
   played over four real seconds and held, so the rate is the period over
   four.
===================================================================== */
(function () {
  const d = sim('sim-bat', 760);
  const ds = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.5, max: 10, step: 0.05, value: 3, unit: 'm', dec: 2, aria: 'the distance from the bat to the insect', detents: [{ v: 3, label: '3.00' }], snap: false, onInput: () => cy.reset() });
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -20, max: 50, step: 0.5, value: 20, unit: '°C', dec: 1, aria: 'the temperature of the air', detents: [{ v: 5, label: '5' }, { v: 20, label: '20' }, { v: 35, label: '35' }], snap: false, onInput: () => cy.reset() });
  const period = () => (2 * ds.v) / vAir(Ts.v);
  const cy = cycle(period, 1.2);
  const X0 = 190, PPM = 106, SY = 280, HALF = 0.5;                          /* the bat's mouth, px per metre, the strip's centre line, the sector's half-angle */
  const X = (m) => X0 + m * PPM;
  const G = { l: 170, r: 1230, t: 500, b: 690 };                              /* the graph box; axes fixed, see the header comment */
  const names = [];
  hover(d.stage, () => names);
  /* a bat in flight, seen from the side, mouth to the right: two membranes with scalloped
     trailing edges and finger struts, a body, a head with ears, under 12 path commands each */
  function bat(ctx, x, y) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    const wing = (sy, span, rise) => {
      ctx.beginPath(); ctx.moveTo(x - 6, y + sy * 2);
      ctx.quadraticCurveTo(x - span * 0.45, y - sy * rise * 1.15, x - span, y - sy * rise);
      ctx.quadraticCurveTo(x - span * 0.78, y - sy * rise * 0.42, x - span * 0.62, y - sy * rise * 0.5);
      ctx.quadraticCurveTo(x - span * 0.5, y - sy * rise * 0.1, x - span * 0.38, y - sy * rise * 0.2);
      ctx.quadraticCurveTo(x - span * 0.26, y + sy * 8, x - 8, y + sy * 10);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.save(); ctx.lineWidth = 1.6; ctx.strokeStyle = alpha(PAL.ink, 0.6);
      [0.62, 0.38].forEach((k) => { ctx.beginPath(); ctx.moveTo(x - 8, y + sy * 4); ctx.lineTo(x - span * k, y - sy * rise * (k > 0.5 ? 0.5 : 0.2)); ctx.stroke(); });
      ctx.beginPath(); ctx.moveTo(x - 8, y + sy * 4); ctx.lineTo(x - span, y - sy * rise); ctx.stroke();
      ctx.restore();
    };
    wing(1, 104, 72);                                        /* the far wing, raised */
    ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.ellipse(x - 10, y + 4, 27, 12, -0.08, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + 17, y, 11, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + 10, y - 9); ctx.lineTo(x + 7, y - 26); ctx.lineTo(x + 18, y - 10); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + 21, y - 9); ctx.lineTo(x + 27, y - 25); ctx.lineTo(x + 28, y - 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(x + 21, y - 2, 2.4, 0, TAU); ctx.fill();
    ctx.fillStyle = PAL.soft; wing(-1, 84, 54);               /* the near wing, lowered */
    ctx.restore();
  }
  /* a moth seen from above, about 60 wide: two forewings swept back, two hindwings, a body and antennae */
  function insect(ctx, x, y) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    [-1, 1].forEach((sy) => {
      ctx.beginPath(); ctx.moveTo(x - 4, y + sy * 3); ctx.quadraticCurveTo(x - 30, y + sy * 26, x - 34, y + sy * 12); ctx.quadraticCurveTo(x - 24, y + sy * 4, x - 6, y + sy * 5); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + 6, y + sy * 3); ctx.quadraticCurveTo(x + 22, y + sy * 30, x + 2, y + sy * 26); ctx.quadraticCurveTo(x - 10, y + sy * 18, x - 6, y + sy * 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    });
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(x, y, 20, 4.5, 0, 0, TAU); ctx.fill();
    ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(x + 18, y - 2); ctx.quadraticCurveTo(x + 30, y - 12, x + 40, y - 14); ctx.moveTo(x + 18, y + 2); ctx.quadraticCurveTo(x + 30, y + 12, x + 40, y + 14); ctx.stroke();
    ctx.restore();
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const dist = ds.v, Tc = Ts.v, v = vAir(Tc), P = period(), t = Math.min(cy.now(), P), done = t >= P - 1e-12;
    const vc = C('velocity'), xc = C('position'), tc = C('temperature'), kc = C('time');
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    names.length = 0;
    const xi = X(dist);
    /* the air, a strip with a ruler in metres beneath it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(56, SY - 130, 1224, 260); ctx.restore();
    scale(ctx, X, 0, 10, 1, SY + 150, 'm', 2);
    text(ctx, 'air at ' + degC(Tc), 70, SY + 112, tc, { size: 20, weight: 600 });
    /* the pulse out, then the echo back */
    const out = v * t, back = v * t - dist;
    ctx.save(); ctx.beginPath(); ctx.rect(56, SY - 130, 1224, 260); ctx.clip();
    if (out <= dist) {
      front(ctx, X0, SY, out * PPM, 0, HALF, PAL.ink, 4);
      if (out * PPM > 30) { arrow(ctx, X(out) - 60, SY - 40, X(out) - 12, SY - 40, vc, 4); text(ctx, 'v_w = ' + sig(v) + ' m/s', X(out) - 36, SY - 66, vc, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); }
    } else {
      front(ctx, X0, SY, out * PPM, 0, HALF, alpha(PAL.ink, 0.3), 3);
      front(ctx, xi, SY, back * PPM, Math.PI, HALF, PAL.ink, 4, [12, 10]);
      if (back * PPM > 30) { arrow(ctx, xi - back * PPM + 60, SY - 40, xi - back * PPM + 12, SY - 40, vc, 4); text(ctx, 'v_w = ' + sig(v) + ' m/s', xi - back * PPM + 36, SY - 66, vc, { size: 19, weight: 600, align: 'center', bg: PAL.panel }); }
    }
    ctx.restore();
    bat(ctx, 150, SY); insect(ctx, xi, SY);
    names.push({ x: 150, y: SY, r: 60, name: 'the bat' }, { x: xi, y: SY, r: 34, name: 'the insect, ' + fmt(dist, 2) + ' m away' });
    lab.add('the bat', 150, SY + 62, 0, 1, PAL.ink, 19, 26);
    lab.add('the insect', xi, SY + 30, 0, 1, PAL.ink, 19, 26);
    /* the distance and the clock */
    hbracket(ctx, X0, xi, SY - 100, xc);
    text(ctx, 'd = ' + fmt(dist, 2) + ' m', (X0 + xi) / 2, SY - 124, xc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 't = ' + fmt(t * 1000, 1) + ' ms', 1270, SY + 100, kc, { size: 26, weight: 600, align: 'right' });
    text(ctx, done ? 'the echo is back' : out <= dist ? 'the pulse is on its way out' : 'the echo is on its way back', 1270, SY + 128, PAL.ink, { size: 17, align: 'right' });
    lab.flush();
    /* the graph beneath: the echo time against the distance, the line 2d/v_w and the reading being taken */
    const A = axes(ctx, G, [0, 10], [0, 70], { xl: 'distance to the insect d (m)', xc: xc, yl: 'time for the echo to return t (ms)', yc: kc, nx: 5, ny: 7, fx: (x) => fmt(x, 0), fy: (y) => fmt(y, 0) });
    curve(ctx, (x) => (2000 * x) / v, 0, 10, A.X, A.Y, kc, 4, 2);
    line(ctx, A.X(dist), G.b, A.X(dist), A.Y(P * 1000), xc, 2.5, [4, 8]);
    line(ctx, G.l, A.Y(P * 1000), A.X(dist), A.Y(P * 1000), kc, 2.5, [4, 8]);
    dot(ctx, A.X(dist), A.Y(P * 1000), kc, done, 10);
    if (!done) dot(ctx, A.X(dist), A.Y(t * 1000), kc, true, 7);
    text(ctx, 't = 2d/v_w = ' + fmt(P * 1000, 1) + ' ms', A.X(dist) + (dist > 7 ? -16 : 16), A.Y(P * 1000) - 24, kc, { size: 19, weight: 600, align: dist > 7 ? 'right' : 'left', bg: PAL.panel });
    topline(ctx, 'The echo from an insect ' + fmt(dist, 2) + ' m away returns to the bat after ' + fmt(P * 1000, 1) + ' ms at ' + degC(Tc) + '.');
    const v5 = vAir(5), v35 = vAir(35), t5 = (2 * dist) / v5 * 1000, t35 = (2 * dist) / v35 * 1000;
    readout(d.readout, `\\kvw = (331\\ \\text{m/s})\\sqrt{\\frac{${K(Tc)}\\ \\text{K}}{273\\ \\text{K}}} = ${sig(v)}\\ \\text{m/s}, \\qquad \\kt = \\frac{2\\kd}{\\kvw} = \\frac{2(${fmt(dist, 2)}\\ \\text{m})}{${sig(v)}\\ \\text{m/s}} = ${fmt(P * 1000, 1)}\\ \\text{ms}`,
      'Between 5.00 °C and 35.0 °C the speed of sound rises from ' + sig(v5) + ' m/s to ' + sig(v35) + ' m/s, so the same ' + fmt(dist, 2) + ' m returns its echo in ' + fmt(t5, 1) + ' ms on the cold day and ' + fmt(t35, 1) + ' ms on the warm one, a difference of ' + fmt(((t5 - t35) / t5) * 100, 1) + '% that the bat cannot tell from a change of distance.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 4), draw });
})();

/* =====================================================================
   FIGURE 17.10: the woofer and the tweeter. Two sets of wavefronts leave
   the two drivers of one cabinet at t = 0 and cross 4.0 m of air at 20 °C
   at the same speed while their spacings differ; a marker rides the front
   that left each driver at the start, and a clock counts the model time.
   Moves: one cycle is the 11.7 ms the marked fronts take to cross the
   scene, played over four real seconds and held, so both sets are seen to
   emerge at their own rates and to travel at one speed.
===================================================================== */
(function () {
  const d = sim('sim-woofer', 660);
  const f1 = ctl(d.controls, { label: '\\kfone', cls: 'frequency', min: 50, max: 500, step: 1, value: 100, unit: 'Hz', dec: 0, aria: 'the frequency of the woofer', detents: [{ v: 100, label: '100' }], snap: false, onInput: () => cy.reset() });
  const f2 = ctl(d.controls, { label: '\\kftwo', cls: 'frequency', min: 500, max: 4000, step: 10, value: 2000, unit: 'Hz', dec: 0, aria: 'the frequency of the tweeter', detents: [{ v: 2000, label: '2000' }], snap: false, onInput: () => cy.reset() });
  const V = vAir(20), REACH = 4.0, PPM = 250, X0 = 300, YT = 200, YW = 450, HALF = 0.62, SPLIT = 325;   /* 343 m/s; the room's reach; px per metre; the cabinet's face; the drivers' heights; the sector's half-angle; where the two lanes meet */
  const period = () => REACH / V;
  const cy = cycle(period, 1.2);
  const names = [];
  hover(d.stage, () => names);
  function cabinet(ctx) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.rect(150, 120, 150, 440); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.arc(X0 - 40, YT, 22, 0, TAU); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(X0 - 40, YT, 8, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.arc(X0 - 40, YW, 60, 0, TAU); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(X0 - 40, YW, 40, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(X0 - 40, YW, 14, 0, TAU); ctx.stroke();
    ctx.restore();
  }
  /* one lane: the fronts of frequency f at radii vt − nλ, clipped to its half of the scene, with the marker on the front that left at t = 0 */
  function lane(ctx, y, f, t, top, lab, name, sub) {
    const lam = V / f, lpx = lam * PPM, r0 = V * t * PPM;
    ctx.save(); ctx.beginPath(); ctx.rect(X0, top ? 100 : SPLIT, 1100, top ? SPLIT - 100 : 570 - SPLIT); ctx.clip();
    for (let n = 0; r0 - n * lpx > 0; n++) front(ctx, X0, y, r0 - n * lpx, 0, HALF, PAL.ink, 3);
    ctx.restore();
    if (r0 > 0 && r0 <= REACH * PPM + 1) { dot(ctx, X0 + r0, y, C('velocity'), true, 10); names.push({ x: X0 + r0, y, r: 16, name: 'the wavefront that left the ' + name + ' at t = 0' }); }
    /* the wavelength between the first two fronts, where both are in the room */
    if (r0 - lpx > 0) {
      const xa = X0 + r0 - lpx, xb = X0 + r0, yb = top ? y - 60 : y + 70;
      hbracket(ctx, xa, xb, yb, C('position'));
      text(ctx, 'λ' + sub + ' = ' + lamTxt(lam), (xa + xb) / 2, yb + (top ? -22 : 24), C('position'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    }
    text(ctx, name, X0 - 75, top ? y + 40 : y + 78, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'f' + sub + ' = ' + f + ' Hz', X0 - 75, top ? y + 62 : y + 100, C('frequency'), { size: 17, weight: 600, align: 'center', bg: PAL.panel });
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const t = Math.min(cy.now(), period()), l1 = V / f1.v, l2 = V / f2.v;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    names.length = 0;
    cabinet(ctx);
    lane(ctx, YT, f2.v, t, true, lab, 'tweeter', '₂');
    lane(ctx, YW, f1.v, t, false, lab, 'woofer', '₁');
    names.push({ x: X0 - 40, y: YT, r: 26, name: 'the tweeter, ' + f2.v + ' Hz' }, { x: X0 - 40, y: YW, r: 62, name: 'the woofer, ' + f1.v + ' Hz' });
    const r0 = V * t * PPM;
    if (r0 > 40) text(ctx, 'v_w = ' + sig(V) + ' m/s', X0 + r0, SPLIT, C('velocity'), { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 't = ' + fmt(t * 1000, 1) + ' ms', 1330, 596, C('time'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'air at 20 °C', 1330, 626, PAL.ink, { size: 17, align: 'right', bg: PAL.panel });
    metreBar(ctx, X0 + 20, 600, PPM);
    lab.flush();
    topline(ctx, 'Both sets of wavefronts cross the room at ' + sig(V) + ' m/s: the ' + f1.v + ' Hz sound is ' + lamTxt(l1) + ' from crest to crest and the ' + f2.v + ' Hz sound ' + lamTxt(l2) + '.');
    readout(d.readout, `\\kvw = \\kfone\\klam_1 = (${f1.v}\\ \\text{Hz})(${lamTex(l1)}) = ${sig(V)}\\ \\text{m/s} = \\kftwo\\klam_2 = (${f2.v}\\ \\text{Hz})(${lamTex(l2)})`,
      'In the ' + fmt(period() * 1000, 1) + ' ms the marked wavefronts take to cross 4.0 m, the woofer sends out ' + fmt(f1.v * period(), 1) + ' wavefronts and the tweeter ' + fmt(f2.v * period(), 1) + '. The count each second is the frequency and the spacing is the wavelength, and neither changes the speed at which the sound travels.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => period() / 4), draw });
})();

/* =====================================================================
   SIM: a wave crossing from air into another medium. A strip 32 m long,
   16 m of air at 20 °C on the left and 16 m of the chosen medium on the
   right at 34.4 px per metre; each medium is ink dots displaced along the
   wave so that a compression is a dense column, with an ink line on every
   compression. Moves endlessly at 1/200 of real time, so a 100 Hz wave
   takes two real seconds per period; the frequency is the same on both
   sides and the fronts on the right move at that medium's speed.
===================================================================== */
(function () {
  const d = sim('sim-boundary', 560);
  const MEDIA = [
    { value: 'co2', label: 'carbon dioxide', name: 'carbon dioxide at 0 °C', v: 259 },
    { value: 'he', label: 'helium', name: 'helium at 0 °C', v: 965 },
    { value: 'water', label: 'fresh water', name: 'fresh water', v: 1480 },
    { value: 'sea', label: 'sea water', name: 'sea water', v: 1540 },
    { value: 'steel', label: 'steel', name: 'steel', v: 5960 },
  ];
  const pick = (v) => MEDIA.find((m) => m.value === v) || MEDIA[3];
  const fs = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 50, max: 250, step: 1, value: 100, unit: 'Hz', dec: 0, aria: 'the frequency of the sound', detents: [{ v: 100, label: '100' }], snap: false });
  const med = select(d.controls, { label: '\\text{the second medium}', options: MEDIA.map((m) => ({ value: m.value, label: m.label })), value: 'sea', aria: 'the medium on the right of the boundary' });
  const V1 = vAir(20), HALFM = 16, PPM = 1100 / 32, XL = 150, XB = 700, XR = 1250, YT = 215, YB = 385, SLOW = 1 / 200;   /* 343 m/s; metres each side; px per metre; the strip's edges and boundary; its top and bottom; the slow-down */
  const cy = cycle(() => Infinity, 0);
  const COLS = 7, ROWS = 9;
  function draw() {
    const { ctx, H } = begin(d.c);
    const f = fs.v, m = pick(med.value), V2 = m.v, t = cy.now() * SLOW, l1 = V1 / f, l2 = V2 / f;
    const fc = C('frequency'), vc = C('velocity'), xc = C('position');
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    /* the two media as dots, displaced along the wave; the amplitude follows the wavelength up to a cap so that the packing is visible */
    const w = TAU * f;
    const side = (x0, x1, lam, phase) => {
      const k = TAU / lam, A = 0.62 * (lam * PPM) / TAU;   /* the displacement that packs the dots: A k = 0.62 on both sides, so a compression is three times as dense as a rarefaction whatever the wavelength */
      ctx.save(); ctx.beginPath(); ctx.rect(x0, YT, x1 - x0, YB - YT); ctx.clip(); ctx.fillStyle = alpha(PAL.ink, 0.85);
      for (let px = x0 - 40 - A; px <= x1 + 40 + A; px += COLS) {
        const xm = (px - XB) / PPM, s = A * Math.sin(k * xm - w * t + phase);
        for (let r = 0; r < ROWS; r++) { ctx.beginPath(); ctx.arc(px + s, YT + 12 + r * ((YB - YT - 24) / (ROWS - 1)), 2.6, 0, TAU); ctx.fill(); }
      }
      /* the compressions, where the dots are densest: kx − ωt = π + 2πn */
      for (let n = -40; n <= 40; n++) { const xm = (Math.PI + n * TAU + w * t - phase) / k, px = XB + xm * PPM; if (px >= x0 && px <= x1) line(ctx, px, YT, px, YB, alpha(PAL.ink, 0.6), 1.5); }
      ctx.restore();
      return { A, k };
    };
    side(XL, XB, l1, 0); side(XB, XR, l2, 0);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(XL, YT, XR - XL, YB - YT); ctx.restore();
    line(ctx, XB, YT - 14, XB, YB + 14, PAL.ink, 5);
    /* names, speeds and the frequency on each side */
    text(ctx, 'air at 20 °C', XL + 14, YT - 26, PAL.ink, { size: 20, weight: 600 });
    text(ctx, m.name, XR - 14, YT - 26, PAL.ink, { size: 20, weight: 600, align: 'right' });
    arrow(ctx, XL + 200, YT - 64, XL + 290, YT - 64, vc, 5); text(ctx, 'v_w = ' + sig(V1) + ' m/s', XL + 300, YT - 64, vc, { size: 20, weight: 600 });
    arrow(ctx, XB + 200, YT - 64, XB + 290, YT - 64, vc, 5); text(ctx, 'v_w = ' + sig(V2) + ' m/s', XB + 300, YT - 64, vc, { size: 20, weight: 600 });
    text(ctx, 'f = ' + f + ' Hz', (XL + XB) / 2, YB + 92, fc, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'f = ' + f + ' Hz, the same', (XB + XR) / 2, YB + 92, fc, { size: 21, weight: 600, align: 'center' });
    /* the wavelengths, bracketed between two compressions on each side where two fit, and said where they do not */
    const bracket = (x0, x1, lam, sub) => {
      const k = TAU / lam, xs = [];
      for (let n = -40; n <= 40; n++) { const px = XB + ((Math.PI + n * TAU + w * t) / k) * PPM; if (px >= x0 && px <= x1) xs.push(px); }
      xs.sort((a, b) => a - b);
      if (xs.length >= 2) { const i = Math.floor((xs.length - 1) / 2) - (xs.length > 2 ? 1 : 0), a = xs[Math.max(0, i)], b = xs[Math.max(0, i) + 1]; hbracket(ctx, a, b, YB + 30, xc); text(ctx, 'λ' + sub + ' = ' + lamTxt(lam), (a + b) / 2, YB + 56, xc, { size: 21, weight: 600, align: 'center', bg: PAL.panel }); }
      else text(ctx, 'λ' + sub + ' = ' + lamTxt(lam) + (lam > HALFM ? ', longer than these 16 m' : ''), (x0 + x1) / 2, YB + 40, xc, { size: 21, weight: 600, align: 'center' });
    };
    bracket(XL, XB, l1, '₁'); bracket(XB, XR, l2, '₂');
    metreBar(ctx, XL, YT - 96, PPM * 4, '4 m');
    lab.flush();
    const up = V2 > V1;
    topline(ctx, 'At ' + f + ' Hz the wave passes from air into ' + m.label + ': the frequency stays ' + f + ' Hz, the speed ' + (up ? 'rises' : 'falls') + ' from ' + sig(V1) + ' to ' + sig(V2) + ' m/s, and the wavelength ' + (up ? 'stretches' : 'shrinks') + ' from ' + lamTxt(l1) + ' to ' + lamTxt(l2) + '.');
    readout(d.readout, `\\kf = ${f}\\ \\text{Hz on both sides}, \\qquad \\klam_1 = \\frac{\\kvw}{\\kf} = \\frac{${sig(V1)}\\ \\text{m/s}}{${f}\\ \\text{Hz}} = ${lamTex(l1)}, \\qquad \\klam_2 = \\frac{${sig(V2)}\\ \\text{m/s}}{${f}\\ \\text{Hz}} = ${lamTex(l2)}`,
      'The ratio of the wavelengths is the ratio of the speeds, λ₂/λ₁ = ' + sig(V2) + '/' + sig(V1) + ' = ' + sig(V2 / V1) + ', so the same sound has a wavelength in air ' + sig(V1 / V2) + ' times its wavelength in ' + m.label + '. The frequency is the source\u2019s own, like a driven oscillation, and the boundary does not change it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
