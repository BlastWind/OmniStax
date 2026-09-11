/* Figures for section 2.2 Vectors, Scalars, and Coordinate Systems. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, plane } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a number with its sign written out, as the book writes a signed displacement; a value that rounds to zero takes no sign */
const eps = (d) => 0.5 * Math.pow(10, -d);
const signed = (x, d) => (x > eps(d) ? '+' : x < -eps(d) ? '−' : '') + fmt(Math.abs(x), d);
const signedTex = (x, d) => (x > eps(d) ? '+' : x < -eps(d) ? '-' : '') + fmt(Math.abs(x), d);
/* a scalar reading, whose minus sign is a point below zero and which takes no plus */
const reading = (x, d) => (x < -eps(d) ? '−' : '') + fmt(Math.abs(x), d);
const readingTex = (x, d) => (x < -eps(d) ? '-' : '') + fmt(Math.abs(x), d);
/* the jet of Figure 2.6, nose to the left when heading is −1 and to the right when it is +1 */
function jet(ctx, x, y, heading, s) {
  ctx.save(); ctx.translate(x, y); ctx.scale(heading < 0 ? -1 : 1, 1); plane(ctx, 0, 0, PAL.ink, s); ctx.restore();
}

/* =====================================================================
   SIM: a vector and a scalar. On the left the velocity of a jet is an
   arrow whose length is proportional to its magnitude and which points
   east or west by its sign; on the right a temperature is a point on the
   scale of a thermometer, below the zero mark when it is negative. No
   motion: the figure answers its sliders and nothing else.
===================================================================== */
(function () {
  const d = sim('sim-vector-scalar', 430);
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: -120, max: 120, step: 5, value: 90, unit: 'km/h', dec: 0, aria: 'velocity, east positive' });
  const T = ctl(d.controls, { label: '\\text{temperature}', cls: '', min: -40, max: 40, step: 1, value: 20, unit: 'ºC', dec: 0, aria: 'temperature' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const jx = 400, jy = 262;                 /* where the jet sits on its strip */
  const tx = 1060, tTop = 150, tBot = 366;  /* the thermometer's tube and the scale along it */
  const Y = (deg) => tBot - ((tBot - tTop) * (deg + 40)) / 80;
  function draw() {
    const { ctx } = begin(d.c);
    const v = V.v, temp = T.v, east = v >= 0, mag = Math.abs(v);
    /* the vector: the jet on a strip, with its velocity drawn as an arrow from its nose */
    text(ctx, 'A vector: the velocity of the jet', 70, 108, PAL.muted, { size: 20, weight: 600 });
    strip(ctx, 70, 750, jy + 30, 44);
    text(ctx, 'west', 76, jy + 84, PAL.muted, { size: 17 }); text(ctx, 'east', 744, jy + 84, PAL.muted, { size: 17, align: 'right' });
    jet(ctx, jx, jy, east ? 1 : -1, 1.1);
    const len = mag * 2.2, nose = east ? jx + 54 : jx - 54, tip = east ? nose + len : nose - len;
    if (mag > 0) arrow(ctx, nose, jy, tip, jy, C('velocity'), 5);
    const lx = mag > 0 ? (nose + tip) / 2 : jx;
    text(ctx, mag > 0 ? 'v = ' + signed(v, 0) + ' km/h' : 'v = 0 km/h', lx, jy - 74, C('velocity'), { weight: 600, size: 24, align: 'center' });
    text(ctx, mag > 0 ? 'the arrow points ' + (east ? 'east' : 'west') : 'there is no arrow to draw', lx, jy - 44, PAL.ink, { size: 17, align: 'center' });
    text(ctx, 'its length alone is the speed, ' + fmt(mag, 0) + ' km/h, a scalar', 410, jy + 140, PAL.ink, { size: 17, align: 'center' });
    /* the scalar: a thermometer, with the reading a point on its scale */
    text(ctx, 'A scalar: a temperature', 900, 108, PAL.muted, { size: 20, weight: 600 });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.roundRect(tx - 14, tTop - 22, 28, tBot - tTop + 44, 14); ctx.fill();
    ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.fillRect(tx - 7, Y(temp), 14, tBot + 10 - Y(temp)); ctx.restore();
    for (let deg = -40; deg <= 40; deg += 10) {
      line(ctx, tx + 16, Y(deg), tx + (deg % 20 ? 26 : 34), Y(deg), PAL.muted, 2);
      if (deg % 20 === 0) text(ctx, reading(deg, 0) + ' ºC', tx + 44, Y(deg), PAL.muted, { size: 17 });
    }
    line(ctx, tx - 26, Y(0), tx - 16, Y(0), PAL.muted, 2);
    dot(ctx, tx, Y(temp), PAL.ink, true, 10);
    text(ctx, reading(temp, 0) + ' ºC', tx - 28, Y(temp), PAL.ink, { weight: 600, size: 24, align: 'right' });
    text(ctx, temp < 0 ? 'the minus sign is a point below zero, not a direction' : temp > 0 ? 'a point above zero on the scale' : 'the zero of the scale', 1060, jy + 140, PAL.ink, { size: 17, align: 'center' });
    headline(ctx, (mag > 0 ? 'A velocity of ' + fmt(mag, 0) + ' km/h ' + (east ? 'east' : 'west') + ' is an arrow' : 'A velocity of 0 km/h has no arrow')
      + ', and a temperature of ' + reading(temp, 0) + ' ºC is a point on a scale');
    readout(d.readout, `\\kv = ${signedTex(v, 0)}\\ \\text{km/h}${mag > 0 ? `\\ (\\text{${east ? 'east' : 'west'}})` : ''} \\qquad \\text{temperature} = ${readingTex(temp, 0)}^{\\circ}\\text{C}`,
      'The length of the arrow alone, ' + fmt(mag, 0) + ' km/h, is the speed, which is a scalar, and the sign of the temperature is a point on a scale rather than a direction.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.7: the coordinate line. The jet flies a set distance to the
   left, and the flight is read on two coordinate lines with the same
   origin, one with right positive and one with left positive. Finite
   motion, one flight in about four real seconds, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-axes', 520);
  const D = ctl(d.controls, { label: '\\text{distance flown}', cls: '', min: 0.5, max: 8, step: 0.5, value: 5, unit: 'km', dec: 1, onInput: reset, aria: 'distance flown' });
  const O = ctl(d.controls, { label: '\\text{origin}', cls: '', min: 0, max: 10, step: 0.5, value: 9, unit: 'km', dec: 1, onInput: reset, aria: 'where the zero of the line is placed' });
  const PERIOD = 4;                          /* seconds of flight */
  const cy = cycle(() => PERIOD, 1.2);
  function reset() { cy.reset(); }
  const L = 160, R = 1240, S0 = 9.0, X = (s) => L + ((R - L) * s) / 10;   /* s is the ground coordinate, 0 to 10 km across the strip */
  const yA = 170, yS = 300, yB = 430;        /* the upper line, the strip, the lower line */
  /* one coordinate line: its arrow toward the positive end, its ticks in its own coordinate, the start, the current position and the displacement */
  function axis(ctx, y, sign, label, s0, s, o) {
    const Xc = (x) => X(o + sign * x);                   /* x on this line to the ground */
    text(ctx, label, L, y - 58, PAL.ink, { size: 20, weight: 600 });
    if (sign > 0) arrow(ctx, L - 40, y, R + 44, y, PAL.muted, 3); else arrow(ctx, R + 40, y, L - 44, y, PAL.muted, 3);
    const from = Math.ceil(sign > 0 ? -o : o - 10), to = Math.floor(sign > 0 ? 10 - o : o);
    for (let k = from; k <= to; k++) { line(ctx, Xc(k), y - 8, Xc(k), y + 8, PAL.muted, 2); if (k % 2 === 0) text(ctx, signed(k, 0).replace('+', '') + ' km', Xc(k), y + 28, PAL.muted, { size: 17, align: 'center' }); }
    const x0 = sign * (s0 - o), x = sign * (s - o), dx = x - x0;
    if (Math.abs(dx) > 1e-9) arrow(ctx, X(s0), y, X(s), y, C('position'), 5);
    dot(ctx, X(s0), y, C('position'), false, 10); dot(ctx, X(s), y, C('position'), true, 9);
    text(ctx, 'x₀', X(s0), y - 30, C('position'), { size: 24, weight: 600, align: 'center' });
    if (Math.abs(s - s0) > 0.3) text(ctx, 'x', X(s), y - 30, C('position'), { size: 24, weight: 600, align: 'center' });
    if (Math.abs(dx) > 0.2) text(ctx, 'Δx = ' + signed(dx, 1) + ' km', (X(s0) + X(s)) / 2, y - 58, C('position'), { size: 22, weight: 600, align: 'center' });
    return { x0, x, dx };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= PERIOD - 1e-9, flown = (D.v * tau) / PERIOD, s = S0 - flown, o = O.v;
    /* the origin, the same point on both lines */
    line(ctx, X(o), yA - 8, X(o), yB + 8, PAL.rule, 2, [6, 8]);
    /* the strip with the jet flying left */
    strip(ctx, L, R, yS, 48);
    jet(ctx, X(s), yS - 6, -1, 1.2);
    const a = axis(ctx, yA, +1, 'Right positive, the usual choice', S0, s, o);
    const b = axis(ctx, yB, -1, 'Left positive, the forward direction of the jet', S0, s, o);
    headline(ctx, done ? 'Flying ' + fmt(D.v, 1) + ' km to the left gives Δx = ' + signed(a.dx, 1) + ' km with right positive and ' + signed(b.dx, 1) + ' km with left positive'
      : 'The jet has flown ' + fmt(flown, 1) + ' km of its ' + fmt(D.v, 1) + ' km to the left');
    readout(d.readout, `\\begin{aligned} \\text{right positive:}\\quad \\kdx &= \\kx - \\kxo = (${signedTex(a.x, 1)}) - (${signedTex(a.x0, 1)}) = ${signedTex(a.dx, 1)}\\ \\text{km} \\\\ \\text{left positive:}\\quad \\kdx &= \\kx - \\kxo = (${signedTex(b.x, 1)}) - (${signedTex(b.x0, 1)}) = ${signedTex(b.dx, 1)}\\ \\text{km} \\end{aligned}`,
      'Moving the origin changes the two positions but not the displacement, and choosing the other direction as positive changes the sign of all three.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
