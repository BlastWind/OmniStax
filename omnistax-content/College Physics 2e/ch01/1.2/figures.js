/* Figures for section 1.2 Physical Quantities and Units. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, strip, scale, car, FONT } = F;
const demo = (id, H) => F.demo(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
const pow10 = (n) => '10' + sup(n);
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = x.toPrecision(3); return s.includes('e') ? String(Math.round(Number(s))) : s; };
/* a label in ink followed by a value in a colour, on one line */
function pair(ctx, left, right, x, y, color) {
  ctx.save(); ctx.font = `400 22px ${FONT}`; const w = ctx.measureText(left).width; ctx.restore();
  text(ctx, left, x, y, PAL.ink); text(ctx, right, x + w + 8, y, color, { weight: 600, size: 24 });
}

/* ---------- sprites, in ink ---------- */
/* a flashlight whose lens is at (x, y), pointing right */
function flashlight(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color;
  ctx.fillRect(x - 112, y - 12, 78, 24); ctx.fillRect(x - 96, y - 19, 16, 7);
  ctx.beginPath(); ctx.moveTo(x - 34, y - 12); ctx.lineTo(x, y - 24); ctx.lineTo(x, y + 24); ctx.lineTo(x - 34, y + 12); ctx.closePath(); ctx.fill();
  ctx.restore();
}
/* a school building standing on (x, y), with a flag */
function school(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - 50, y - 60, 100, 60); ctx.strokeRect(x - 50, y - 60, 100, 60);
  ctx.fillStyle = color; ctx.fillRect(x - 10, y - 28, 20, 28); ctx.fillRect(x - 38, y - 48, 14, 12); ctx.fillRect(x + 24, y - 48, 14, 12);
  ctx.beginPath(); ctx.moveTo(x + 40, y - 60); ctx.lineTo(x + 40, y - 100); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x + 40, y - 100); ctx.lineTo(x + 68, y - 92); ctx.lineTo(x + 40, y - 84); ctx.closePath(); ctx.fill();
  ctx.restore();
}
/* a house standing on (x, y) */
function house(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - 40, y - 50, 80, 50); ctx.strokeRect(x - 40, y - 50, 80, 50);
  ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x - 48, y - 50); ctx.lineTo(x, y - 90); ctx.lineTo(x + 48, y - 50); ctx.closePath(); ctx.fill();
  ctx.fillRect(x - 9, y - 26, 18, 26);
  ctx.restore();
}
/* a stopwatch centred on (x, y) whose hand has turned the fraction f of one turn */
function stopwatch(ctx, x, y, r, f) {
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillRect(x - 12, y - r - 20, 24, 14); ctx.strokeRect(x - 12, y - r - 20, 24, 14);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; line(ctx, x + (r - 12) * Math.sin(a), y - (r - 12) * Math.cos(a), x + (r - 4) * Math.sin(a), y - (r - 4) * Math.cos(a), PAL.muted, i % 3 ? 2 : 4); }
  ctx.restore();
  const a = f * Math.PI * 2;
  line(ctx, x, y, x + (r - 22) * Math.sin(a), y - (r - 22) * Math.cos(a), C('time'), 5); dot(ctx, x, y, C('time'), true, 7);
}

/* =====================================================================
   FIGURE 1.18: the meter. A pulse of light leaves a flashlight at the
   left end of a meter stick and runs along it at the speed of light for
   the time set on the slider. In 3.34 ns it covers 1.00 m, which is what
   the meter is defined to be. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-light-meter', 370);
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.5, max: 5, step: 0.01, value: 3.34, unit: 'ns', dec: 2, onInput: reset, aria: 'elapsed time' });
  const CNS = 0.299792458;   /* the speed of light in meters per nanosecond, exact */
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  const L = 180, R = 1300, LEN = 1.5, X = (m) => L + ((R - L) * m) / LEN;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, dist = CNS * tau, dEnd = CNS * T.v;
    /* the meter stick, 1.5 m of it, with a tick every 10 cm and the meter mark called out */
    const ys = 250, yp = 150;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(X(0), ys - 24, X(LEN) - X(0), 32); ctx.strokeRect(X(0), ys - 24, X(LEN) - X(0), 32); ctx.restore();
    scale(ctx, (cm) => X(cm / 100), 0, 150, 10, ys, 'cm', 5);
    line(ctx, X(1), ys - 24, X(1), ys - 44, PAL.ink, 3);
    text(ctx, 'the meter mark', X(1), ys - 60, PAL.ink, { size: 17, align: 'center' });
    /* the flashlight and the pulse of light */
    flashlight(ctx, X(0) - 6, yp, PAL.ink);
    if (dist > 0.002) {
      ctx.save(); ctx.fillStyle = alpha(C('velocity'), 0.18); ctx.fillRect(X(0), yp - 14, X(dist) - X(0), 28); ctx.restore();
      line(ctx, X(0), yp, X(dist), yp, C('velocity'), 6);
    }
    dot(ctx, X(dist), yp, C('velocity'), true, 9);
    text(ctx, 't = ' + fmt(tau, 2) + ' ns', X(dist), yp - 44, C('time'), { weight: 600, align: 'center' });
    /* the distance covered so far */
    if (dist > 0.02) hbracket(ctx, X(0), X(dist), 330, PAL.ink, 'd = ' + fmt(dist, 2) + ' m');
    const clause = Math.abs(dEnd - 1) < 0.005 ? 'which is what the meter is defined to be' : dEnd < 1 ? 'which falls short of the meter mark' : 'which runs past the meter mark';
    headline(ctx, done ? 'in ' + fmt(T.v, 2) + ' ns light travels ' + fmt(dEnd, 2) + ' m, ' + clause
      : 'after ' + fmt(tau, 2) + ' ns the light has traveled ' + fmt(dist, 2) + ' m and is still going');
    readout(d.readout, `d = \\kc\\,\\kt = (299{,}792{,}458\\ \\text{m/s})(${fmt(T.v, 2)} \\times 10^{-9}\\ \\text{s}) = ${fmt(dEnd, 2)}\\ \\text{m}`,
      'The meter is the distance light travels in a vacuum in 1/299,792,458 of a second, so the speed of light is exact by definition and the meter is what is measured.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   DEMO: the ladder of powers of 10. A logarithmic ladder from 10⁻¹⁸ m to
   10²⁶ m, the metric prefixes under their powers, some known lengths
   above, and a marker at m × 10ⁿ. The decade the value falls in is
   shaded: every number in it has the same order of magnitude. No motion.
===================================================================== */
(function () {
  const d = demo('demo-ladder', 420);
  const M = ctl(d.controls, { label: '\\text{mantissa } m', cls: '', min: 1, max: 9.9, step: 0.1, value: 4.5, unit: '', dec: 1, aria: 'mantissa' });
  const N = ctl(d.controls, { label: '\\text{exponent } n', cls: '', min: -18, max: 26, step: 1, value: 2, unit: '', dec: 0, aria: 'exponent' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const PREFIX = [[-18, 'atto', 'a'], [-15, 'femto', 'f'], [-12, 'pico', 'p'], [-9, 'nano', 'n'], [-6, 'micro', 'µ'], [-3, 'milli', 'm'], [-2, 'centi', 'c'], [-1, 'deci', 'd'],
    [1, 'deka', 'da'], [2, 'hecto', 'h'], [3, 'kilo', 'k'], [6, 'mega', 'M'], [9, 'giga', 'G'], [12, 'tera', 'T'], [15, 'peta', 'P'], [18, 'exa', 'E']];
  /* the lengths of Table 1.3: power of ten, label, row above the ladder (0 nearest), and which side of its tick the label sits */
  const LENGTHS = [[-15, 'a proton', 1, 'left'], [-10, 'a hydrogen atom', 0, 'right'], [-8, 'a cell membrane', 1, 'right'], [-6, 'visible light', 2, 'right'],
    [-3, 'a grain of sand', 1, 'left'], [0, 'a child', 0, 'right'], [2, 'a football field', 2, 'left'], [7, 'the Earth', 0, 'left'], [11, 'the Earth to the Sun', 1, 'right'],
    [16, 'a light year', 2, 'left'], [21, 'the Milky Way', 0, 'left'], [26, 'the known universe', 1, 'right']];
  const L = 90, R = 1330, X = (n) => L + ((R - L) * (n + 18)) / 44;
  const yl = 250;
  /* the value written in the prefix nearest below n, when the mantissa stays under 1000 */
  function nearest(m, n) {
    const below = PREFIX.filter((p) => p[0] <= n).map((p) => p[0]); if (!below.length) return null;
    const p = Math.max(...below), k = n - p; if (k > 2) return null;
    const pre = PREFIX.find((q) => q[0] === p);
    return { num: fmt(m * Math.pow(10, k), Math.max(0, 1 - k)), sym: pre[2], name: pre[1], p };
  }
  function plain(m, n) { return n >= 0 ? commas(fmt(m * Math.pow(10, n), n === 0 ? 1 : 0)) : fmt(m * Math.pow(10, n), 1 - n); }
  function draw() {
    const { ctx } = begin(d.c);
    const m = M.v, n = N.v, x = X(n + Math.log10(m)), own = PREFIX.find((p) => p[0] === n), near = own ? null : nearest(m, n);
    const lit = own ? own[0] : near ? near.p : null;
    /* the shaded decade, the ladder and its ticks */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(X(n), yl - 14, X(n + 1) - X(n), 28); ctx.restore();
    line(ctx, X(-18), yl, X(26), yl, PAL.ink, 3);
    for (let k = -18; k <= 26; k++) { const big = k % 3 === 0; line(ctx, X(k), yl - (big ? 12 : 7), X(k), yl + (big ? 12 : 7), PAL.ink, 2); if (big) text(ctx, pow10(k), X(k), yl + 30, PAL.muted, { size: 17, align: 'center' }); }
    /* the prefixes under their powers, on three rows where they crowd */
    for (const [p, name] of PREFIX) {
      const row = Math.abs(p) === 2 ? 1 : Math.abs(p) === 1 ? 2 : 0, y = yl + 96 + 26 * row, on = p === lit;
      if (row) line(ctx, X(p), yl + 14, X(p), y - 12, PAL.rule, 1.5);
      text(ctx, name, X(p), y, on ? PAL.ink : PAL.muted, { size: 17, align: 'center', weight: on ? 600 : 400 });
    }
    /* the known lengths above the ladder */
    for (const [p, name, row, side] of LENGTHS) {
      const y = yl - 42 - 30 * row;
      line(ctx, X(p), yl - 8, X(p), y + 11, PAL.muted, 2);
      text(ctx, name, X(p) + (side === 'left' ? 6 : -6), y, PAL.ink, { size: 17, align: side });
    }
    /* the marker */
    dot(ctx, x, yl, PAL.ink, true, 10);
    text(ctx, fmt(m, 1) + ' × ' + pow10(n) + ' m', x, yl + 64, PAL.ink, { weight: 600, align: x > 1250 ? 'right' : x < 150 ? 'left' : 'center', bg: PAL.panel });
    /* what the value is, in words and in the readout */
    const sci = fmt(m, 1) + ' × ' + pow10(n) + ' m', oom = pow10(n);
    const sciTex = `${fmt(m, 1)} \\times 10^{${n}}\\ \\text{m}`;
    let h, r;
    if (Math.abs(n) <= 3) {
      h = sci + ' is ' + plain(m, n) + ' m' + (own ? ', or ' + fmt(m, 1) + ' ' + own[2] + 'm' : '') + ', and its order of magnitude is ' + oom;
      r = `${sciTex} = ${plain(m, n).replace(/,/g, '{,}')}\\ \\text{m}`;
    } else if (own) {
      h = sci + ' is ' + fmt(m, 1) + ' ' + own[2] + 'm, a ' + own[1] + 'meter being ' + pow10(n) + ' m, and its order of magnitude is ' + oom;
      r = `${sciTex} = ${fmt(m, 1)}\\ \\text{${own[2]}m}`;
    } else if (near) {
      h = sci + ' has no prefix of its own, so it is written as ' + near.num + ' ' + near.sym + 'm, and its order of magnitude is ' + oom;
      r = `${sciTex} = ${near.num}\\ \\text{${near.sym}m}`;
    } else {
      h = sci + ' is beyond what the largest prefix, exa, conveniently expresses, and its order of magnitude is ' + oom;
      r = `${sciTex} = ${fmt(m, 1)} \\times 10^{${n - 18}}\\ \\text{Em}`;
    }
    headline(ctx, h);
    readout(d.readout, r, 'Every number from 1 × ' + pow10(n) + ' to 9.9 × ' + pow10(n) + ' is of the same order of magnitude, ' + oom + ', just as 800 and 450 are.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   DEMO: the short drive home of Example 1.1. A car drives from school to
   home along a strip marked in kilometers while a stopwatch counts the
   minutes; the average speed is written in km/min, km/h and m/s. Finite
   motion, one run per set time, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-drive', 530);
  const D = ctl(d.controls, { label: 'd', cls: '', min: 2, max: 40, step: 0.5, value: 10, unit: 'km', dec: 1, onInput: reset, aria: 'distance' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 5, max: 60, step: 1, value: 20, unit: 'min', dec: 1, onInput: reset, aria: 'time' });
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  const L = 220, R = 1180, X = (km) => L + ((R - L) * km) / D.v;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T.v - 1e-9, pos = (D.v * tau) / T.v;
    const kmMin = D.v / T.v, kmH = kmMin * 60, mS = (kmH * 1000) / 3600;
    /* the road from school to home, marked in kilometers */
    const ys = 220;
    strip(ctx, L, R, ys, 48);
    school(ctx, L - 90, ys + 24, PAL.ink); house(ctx, R + 80, ys + 24, PAL.ink);
    text(ctx, 'school', L - 90, ys + 62, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'home', R + 80, ys + 62, PAL.muted, { size: 17, align: 'center' });
    const step = D.v <= 15 ? 1 : 5, every = D.v <= 6 ? 1 : D.v <= 15 ? 2 : 1;
    scale(ctx, X, 0, Math.floor(D.v / step) * step, step, ys + 34, 'km', every);
    hbracket(ctx, X(0), X(D.v), ys - 96, PAL.ink, 'd = ' + fmt(D.v, 1) + ' km');
    /* the car, with its speed drawn as an arrow */
    const cx = X(pos);
    car(ctx, cx, ys - 6, PAL.ink, 1.2);
    const end = Math.min(cx + Math.min(260, 40 + kmH * 1.2), R + 30);
    if (end - cx > 40) arrow(ctx, cx, ys - 46, end, ys - 46, C('velocity'), 5);
    const lx = (cx + end) / 2;
    text(ctx, sig3(kmH) + ' km/h', lx > R - 60 ? R + 30 : lx, ys - 68, C('velocity'), { weight: 600, size: 20, align: lx > R - 60 ? 'right' : 'center' });
    /* the stopwatch, one turn of the hand for the whole trip */
    const sx = 330, sy = 390, r = 72;
    stopwatch(ctx, sx, sy, r, tau / T.v);
    text(ctx, 't = ' + fmt(tau, 1) + ' min', sx, sy + r + 34, C('time'), { weight: 600, size: 26, align: 'center' });
    /* the speed, in the three units of the example */
    pair(ctx, 'average speed  =', sig3(kmMin) + ' km/min', 520, 350, C('velocity'));
    pair(ctx, 'which is', sig3(kmH) + ' km/h', 520, 396, C('velocity'));
    pair(ctx, 'or', sig3(mS) + ' m/s', 520, 442, C('velocity'));
    headline(ctx, done ? fmt(D.v, 1) + ' km in ' + fmt(T.v, 1) + ' min is ' + sig3(kmMin) + ' km/min, which is ' + sig3(kmH) + ' km/h, or ' + sig3(mS) + ' m/s'
      : 'after ' + fmt(tau, 1) + ' min the car has gone ' + fmt(pos, 1) + ' km of the ' + fmt(D.v, 1) + ' km');
    readout(d.readout, `\\text{average speed} = \\frac{${fmt(D.v, 1)}\\ \\text{km}}{${fmt(T.v, 1)}\\ \\text{min}} \\times \\frac{60\\ \\text{min}}{1\\ \\text{h}} = ${sig3(kmH)}\\ \\text{km/h}`,
      'Two more conversion factors, one for hours to seconds and one for kilometers to meters, turn ' + sig3(kmH) + ' km/h into ' + sig3(mS) + ' m/s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();
};
