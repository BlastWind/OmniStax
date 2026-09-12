/* Figures for section 4.3 Newton's Second Law of Motion: Concept of a System.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, strip, axes, nice, curve, runner, car, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s); };
/* a power of ten as the reader writes it */
const POW = { '-2': '0.01', '-1': '0.1', 0: '1', 1: '10', 2: '100', 3: '1,000', 4: '10,000' };
const powLabel = (e) => POW[String(Math.round(e))] ?? String(Math.pow(10, Math.round(e)));
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0);
/* an arrow long enough to be seen: the book draws the friction on the rocket sled larger than scale for the same reason */
const alen = (v, k, min) => Math.max(min ?? 26, Math.abs(v) * k);
/* a free-body diagram: a dot at (cx, cy) with one arrow per force. The horizontal
   forces share a scale of their own so that a push can be told from a friction,
   and the weight and the support of the ground, which are always equal and
   opposite, are drawn at a fixed length and read from their labels. */
function fbd(ctx, cx, cy, horiz, vert, k, title) {
  if (title) text(ctx, title, cx, cy - 150, PAL.muted, { size: 18, align: 'center' });
  vert.forEach((f) => {
    arrow(ctx, cx, cy, cx, cy + f.dy * 96, f.c, 4);
    text(ctx, f.label, cx + 14, cy + f.dy * 96 + f.dy * 16, f.c, { size: 19, weight: 600 });
  });
  horiz.forEach((f) => {
    const y = cy + (f.row ?? 0);
    arrow(ctx, cx, y, cx + f.dx * alen(f.v, k), y, f.c, 4);
    text(ctx, f.label, cx + f.dx * (alen(f.v, k) + 12), y, f.c, { size: 19, weight: 600, align: f.dx > 0 ? 'left' : 'right' });
  });
  dot(ctx, cx, cy, PAL.ink, true, 8);
}

/* ---------- sprites, in ink ---------- */
/* a wagon carrying a child, its bed centred on (x, y) */
function wagon(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(x - 56, y - 16); ctx.lineTo(x + 56, y - 16); ctx.lineTo(x + 46, y + 16); ctx.lineTo(x - 46, y + 16); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.arc(x - 34, y + 30, 14, 0, TAU); ctx.arc(x + 34, y + 30, 14, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x + 54, y - 6); ctx.lineTo(x + 96, y - 34); ctx.stroke();
  ctx.beginPath(); ctx.arc(x - 6, y - 58, 15, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 6, y - 42); ctx.lineTo(x - 6, y - 18); ctx.moveTo(x - 6, y - 34); ctx.lineTo(x + 20, y - 26); ctx.stroke();
  ctx.restore();
}
/* a basketball centred on (x, y) */
function basketball(ctx, x, y, color, r) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  ctx.strokeStyle = PAL.panel; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(x - r, y); ctx.lineTo(x + r, y); ctx.moveTo(x, y - r); ctx.lineTo(x, y + r); ctx.stroke();
  ctx.restore();
}
/* a lawn mower, its deck centred on (x, y), the handle trailing to the left */
function mower(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(x - 44, y + 12); ctx.lineTo(x - 44, y - 10); ctx.lineTo(x - 14, y - 24); ctx.lineTo(x + 30, y - 24); ctx.lineTo(x + 44, y - 6); ctx.lineTo(x + 44, y + 12); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.arc(x - 30, y + 20, 11, 0, TAU); ctx.arc(x + 30, y + 20, 11, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 40, y - 14); ctx.lineTo(x - 104, y - 78); ctx.moveTo(x - 104, y - 78); ctx.lineTo(x - 128, y - 78); ctx.stroke();
  ctx.restore();
}
/* a rocket sled with n of its four rockets burning, its platform centred on (x, y) */
function sled(ctx, x, y, color, n) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - 86, y - 6, 172, 14);
  for (let i = 0; i < 4; i++) { const rx = x - 66 + i * 38; ctx.fillRect(rx - 15, y - 30, 30, 22); if (i < n) { ctx.beginPath(); ctx.moveTo(rx - 15, y - 26); ctx.lineTo(rx - 44, y - 19); ctx.lineTo(rx - 15, y - 12); ctx.closePath(); ctx.fill(); } }
  ctx.beginPath(); ctx.arc(x + 58, y - 44, 13, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x + 58, y - 30); ctx.lineTo(x + 58, y - 8); ctx.stroke();
  ctx.beginPath(); ctx.arc(x - 50, y + 20, 12, 0, TAU); ctx.arc(x + 52, y + 20, 12, 0, TAU); ctx.fill();
  ctx.restore();
}
/* a bathroom scale standing on the floor at (x, y), w wide */
function bathScale(ctx, x, y, w, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.rect(x - w / 2, y - 34, w, 34); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y - 17, 12, 0, TAU); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   FIGURE 4.5: the wagon, its free-body diagram, and the adult who pushes
   harder. The wagon starts from rest and rolls for four seconds under the
   forces the sliders set, so the idea has a time in it and the figure
   loops with the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-wagon', 800);
  const F1 = ctl(d.controls, { label: '\\kFone', cls: 'force', min: 0, max: 60, step: 0.5, value: 25, unit: 'N', dec: 1, onInput: reset, aria: 'force of the first child' });
  const F2 = ctl(d.controls, { label: '\\kFtwo', cls: 'force', min: 0, max: 60, step: 0.5, value: 30, unit: 'N', dec: 1, onInput: reset, aria: 'force of the second child' });
  const ff = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 40, step: 0.5, value: 12, unit: 'N', dec: 1, onInput: reset, aria: 'force of friction' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 60, step: 0.5, value: 30, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the wagon and its rider' });
  const T = 4;
  const net = () => F1.v + F2.v - ff.v;
  const acc = () => Math.max(0, net()) / mm.v;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const a = acc(), n = net(), w = mm.v * G, tau = cy.now();
    const x = 0.5 * a * tau * tau, v = a * tau, xEnd = Math.max(0.5 * a * T * T, 0.5);
    /* the scene: the wagon rolling to the right on the ground */
    const gy = 300, x0 = 320, SC = Math.min(820 / xEnd, 400);
    strip(ctx, 60, 1340, gy + 22, 44);
    const wx = x0 + x * SC, wy = gy - 30, K = 3, cf = C('force');
    wagon(ctx, wx, wy, PAL.ink);
    [[F1.v, 'F₁', wy - 148], [F2.v, 'F₂', wy - 104]].forEach(([val, lab, y]) => {
      const L = alen(val, K, 10);
      arrow(ctx, wx - 70, y, wx - 70 + L, y, cf, 5);
      text(ctx, lab + ' = ' + fmt(val, 1) + ' N', wx - 70 + L + 12, y, cf, { size: 20, weight: 600 });
    });
    const Lf = alen(ff.v, K, 10);
    arrow(ctx, wx - 70, wy - 60, wx - 70 - Lf, wy - 60, cf, 5);
    text(ctx, 'f = ' + fmt(ff.v, 1) + ' N', wx - 82 - Lf, wy - 60, cf, { size: 20, weight: 600, align: 'right' });
    if (a > 0.01) {
      const La = Math.min(200, 30 + a * 60);
      arrow(ctx, wx + 130, wy - 34, wx + 130 + La, wy - 34, C('acceleration'), 5);
      text(ctx, 'a = ' + fmt(a, 2) + ' m/s²', wx + 134, wy - 60, C('acceleration'), { size: 20, weight: 600 });
    }
    dot(ctx, x0, gy + 22, C('position'), false, 8);
    if (wx - x0 > 34) {
      hbracket(ctx, x0, wx, gy + 74, C('position'), '');
      text(ctx, fmt(x, 2) + ' m', (x0 + wx) / 2, gy + 100, C('position'), { size: 19, weight: 600, align: 'center' });
    }
    /* the free-body diagram of the system: the wagon and its rider */
    const k = 170 / Math.max(F1.v, F2.v, ff.v, 1);
    fbd(ctx, 420, 600,
      [{ dx: 1, v: F1.v, label: 'F₁ = ' + fmt(F1.v, 1) + ' N', c: cf, row: -22 },
       { dx: 1, v: F2.v, label: 'F₂ = ' + fmt(F2.v, 1) + ' N', c: cf, row: 22 },
       { dx: -1, v: ff.v, label: 'f = ' + fmt(ff.v, 1) + ' N', c: cf, row: 0 }],
      [{ dy: 1, label: 'w = ' + sig3(w) + ' N', c: cf },
       { dy: -1, label: 'N = ' + sig3(w) + ' N', c: cf }],
      k, 'the external forces on the wagon and its rider');
    if (n > 0) {
      arrow(ctx, 420, 762, 420 + alen(n, k), 762, C('acceleration'), 5);
      text(ctx, 'F net = ' + fmt(n, 1) + ' N', 420 + alen(n, k) + 12, 762, C('acceleration'), { size: 19, weight: 600 });
    }
    /* the speed the wagon reaches, against time */
    const vr = nice(0, Math.max(a * T, 0.5), 3);
    const g = axes(ctx, { l: 900, r: 1290, t: 500, b: 730 }, [0, T], [0, vr.hi], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 4, ny: vr.n, fx: (s) => fmt(s, 0), fy: (s) => fmt(s, decs(vr)) });
    line(ctx, g.X(0), g.Y(0), g.X(T), g.Y(a * T), C('velocity'), 5);
    line(ctx, g.X(tau), g.Y(0), g.X(tau), g.Y(v), C('time'), 2, [4, 8]);
    dot(ctx, g.X(tau), g.Y(v), PAL.ink, true, 9);
    text(ctx, 'the slope is the acceleration', g.X(2), g.Y(vr.hi) + 26, C('acceleration'), { size: 17, weight: 600, align: 'center' });
    headline(ctx, n <= 0
      ? 'the two pushes together, ' + fmt(F1.v + F2.v, 1) + ' N, do not overcome the ' + fmt(ff.v, 1) + ' N of friction, so the wagon stays where it is'
      : 't = ' + fmt(tau, 2) + ' s · a net force of ' + fmt(n, 1) + ' N on ' + fmt(mm.v, 1) + ' kg gives a = ' + fmt(a, 2) + ' m/s², and the wagon has reached ' + fmt(v, 2) + ' m/s');
    readout(d.readout, `\\kFnet = \\kFone + \\kFtwo - \\kff = ${fmt(F1.v, 1)}\\ \\text{N} + ${fmt(F2.v, 1)}\\ \\text{N} - ${fmt(ff.v, 1)}\\ \\text{N} = ${fmt(n, 1)}\\ \\text{N}`,
      n <= 0
        ? 'The weight of the system, ' + sig3(w) + ' N, and the support of the ground are equal and opposite, so the net external force is the horizontal one alone, and here it is not greater than zero.'
        : 'Dividing by the mass gives a = F net / m = ' + fmt(n, 1) + ' N / ' + fmt(mm.v, 1) + ' kg = ' + fmt(a, 2) + ' m/s², in the direction of the net force. The weight of the system, ' + sig3(w) + ' N, and the support of the ground are equal and opposite, so they add nothing to it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 4.6: the same force on a basketball and on an SUV. The idea has
   no time in it — it answers its sliders — so the figure is a still
   picture with no transport. The graph carries the reading, since the two
   accelerations are thousands apart. Its axes are shifted by a decade and
   two so that neither range straddles zero and no zero line is drawn on a
   scale that has no zero.
===================================================================== */
(function () {
  const d = sim('sim-mass', 860);
  const Fp = ctl(d.controls, { label: '\\kF', cls: 'force', min: 10, max: 500, step: 5, value: 200, unit: 'N', dec: 0, aria: 'force the player exerts' });
  const mb = ctl(d.controls, { label: 'm_{\\text{ball}}', cls: '', min: 0.2, max: 3, step: 0.001, value: 0.624, unit: 'kg', dec: 3, aria: 'mass of the basketball' });
  const ms = ctl(d.controls, { label: 'm_{\\text{SUV}}', cls: '', min: 800, max: 3000, step: 20, value: 1800, unit: 'kg', dec: 0, aria: 'mass of the SUV' });
  const MX = 1, MY = 2;   /* the decades the two axes are shifted by */
  function draw() {
    const { ctx } = begin(d.c);
    const ab = Fp.v / mb.v, as = Fp.v / ms.v, cf = C('force'), ca = C('acceleration');
    /* the two scenes, the same push drawn the same length on each */
    const L = 40 + Fp.v * 0.34, gy = 300;
    line(ctx, 80, gy, 680, gy, PAL.muted, 3); line(ctx, 740, gy, 1340, gy, PAL.muted, 3);
    runner(ctx, 190, gy, PAL.ink, 0.6);
    basketball(ctx, 300, gy - 50, PAL.ink, 26);
    arrow(ctx, 332, gy - 50, 332 + L, gy - 50, cf, 5);
    text(ctx, 'F = ' + fmt(Fp.v, 0) + ' N', 332 + L / 2, gy - 78, cf, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'a basketball of ' + fmt(mb.v, 3) + ' kg', 360, gy + 36, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'a = ' + sig3(ab) + ' m/s²', 360, gy - 140, ca, { size: 22, weight: 600, align: 'center' });
    runner(ctx, 830, gy, PAL.ink, 0.6);
    car(ctx, 980, gy - 26, PAL.ink, 1.5);
    arrow(ctx, 1046, gy - 50, 1046 + L, gy - 50, cf, 5);
    text(ctx, 'F = ' + fmt(Fp.v, 0) + ' N', 1046 + L / 2, gy - 78, cf, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'an SUV of ' + commas(fmt(ms.v, 0)) + ' kg', 1020, gy + 36, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'a = ' + sig3(as) + ' m/s²', 1020, gy - 140, ca, { size: 22, weight: 600, align: 'center' });
    /* acceleration against mass, both axes stepping by tens */
    const g = axes(ctx, { l: 220, r: 1230, t: 470, b: 780 }, [0, 5], [0, 6],
      { xl: 'm (kg)', xc: PAL.ink, yl: 'a (m/s²)', yc: ca, nx: 5, ny: 6, fx: (e) => powLabel(e - MX), fy: (e) => powLabel(e - MY) });
    curve(ctx, (e) => Math.log10(Fp.v) - (e - MX) + MY, 0, 5, g.X, g.Y, ca, 5, 40);
    [[mb.v, ab, 'the ball'], [ms.v, as, 'the SUV']].forEach(([m, a, name]) => {
      const ex = Math.log10(m) + MX, ey = Math.log10(a) + MY;
      line(ctx, g.X(ex), g.Y(0), g.X(ex), g.Y(ey), PAL.muted, 2, [4, 8]);
      line(ctx, g.X(0), g.Y(ey), g.X(ex), g.Y(ey), PAL.muted, 2, [4, 8]);
      dot(ctx, g.X(ex), g.Y(ey), ca, true, 10);
      text(ctx, name, g.X(ex) + 16, g.Y(ey) + 24, PAL.ink, { size: 18, weight: 600 });
    });
    text(ctx, 'every step of ten in the mass is a step of a tenth in the acceleration', g.X(2.6), g.Y(5.5), PAL.muted, { size: 17, align: 'center' });
    headline(ctx, 'the same ' + fmt(Fp.v, 0) + ' N gives the ' + fmt(mb.v, 3) + ' kg ball ' + sig3(ab) + ' m/s² and the ' + commas(fmt(ms.v, 0)) + ' kg SUV ' + sig3(as) + ' m/s²');
    readout(d.readout, `\\ka = \\frac{\\kF}{m} = \\frac{${fmt(Fp.v, 0)}\\ \\text{N}}{${fmt(mb.v, 3)}\\ \\text{kg}} = ${sig3(ab)}\\ \\text{m/s}^2 \\qquad \\ka = \\frac{\\kF}{m} = \\frac{${fmt(Fp.v, 0)}\\ \\text{N}}{${commas(fmt(ms.v, 0))}\\ \\text{kg}} = ${sig3(as)}\\ \\text{m/s}^2`,
      'The force is the same in both cases, so the only thing that sets the two accelerations apart is the mass: the SUV is ' + sig3(ms.v / mb.v) + ' times as massive as the ball and accelerates at ' + sig3(ms.v / mb.v) + ' times less.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.7: the lawn mower of Example 4.1. It starts from rest and is
   pushed across the lawn for three seconds, so the idea has a time in it
   and the figure loops with the scrubber. The readout carries the newton
   through as a kilogram metre per second squared, as the example does.
===================================================================== */
(function () {
  const d = sim('sim-mower', 470);
  const Fn = ctl(d.controls, { label: '\\kFnet', cls: 'force', min: 10, max: 120, step: 1, value: 51, unit: 'N', dec: 0, onInput: reset, aria: 'net external force on the mower' });
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 5, max: 60, step: 0.5, value: 24, unit: 'kg', dec: 1, onInput: reset, aria: 'mass of the mower' });
  const T = 3;
  const acc = () => Fn.v / mm.v;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const a = acc(), tau = cy.now(), x = 0.5 * a * tau * tau, v = a * tau, xEnd = 0.5 * a * T * T;
    const gy = 300, x0 = 330, SC = Math.min(820 / Math.max(xEnd, 0.5), 300);
    strip(ctx, 60, 1340, gy + 22, 44);
    const px = x0 + x * SC, py = gy - 26, cf = C('force');
    runner(ctx, px - 150, gy, PAL.ink, 0.5);
    mower(ctx, px, py, PAL.ink);
    const La = Math.min(230, 30 + a * 48), LF = Fn.v * 3.2, Lv = Math.min(240, v * 22);
    arrow(ctx, px + 60, py - 116, px + 60 + La, py - 116, C('acceleration'), 5);
    text(ctx, 'a = ' + fmt(a, 2) + ' m/s²', px + 74 + La, py - 116, C('acceleration'), { size: 21, weight: 600 });
    arrow(ctx, px + 60, py - 62, px + 60 + LF, py - 62, cf, 5);
    text(ctx, 'F net = ' + fmt(Fn.v, 0) + ' N', px + 74 + LF, py - 62, cf, { size: 21, weight: 600 });
    if (v > 0.02) {
      arrow(ctx, px + 60, py - 8, px + 60 + Lv, py - 8, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 2) + ' m/s', px + 74 + Lv, py - 8, C('velocity'), { size: 21, weight: 600 });
    }
    dot(ctx, x0, gy + 22, C('position'), false, 8);
    if (px - x0 > 34) {
      hbracket(ctx, x0, px, gy + 78, C('position'), '');
      text(ctx, fmt(x, 2) + ' m', (x0 + px) / 2, gy + 104, C('position'), { size: 20, weight: 600, align: 'center' });
    }
    headline(ctx, 't = ' + fmt(tau, 2) + ' s · a net force of ' + fmt(Fn.v, 0) + ' N on ' + fmt(mm.v, 1) + ' kg gives a = ' + fmt(a, 2) + ' m/s², so the mower has reached ' + fmt(v, 2) + ' m/s and gone ' + fmt(x, 2) + ' m');
    readout(d.readout, `\\ka = \\frac{\\kFnet}{m} = \\frac{${fmt(Fn.v, 0)}\\ \\text{kg}\\cdot\\text{m/s}^2}{${fmt(mm.v, 1)}\\ \\text{kg}} = ${fmt(a, 2)}\\ \\text{m/s}^2`,
      'One newton is one kilogram metre per second squared, so substituting the units for N leaves the kilograms to cancel and an answer in metres per second squared. The acceleration points the same way as the net force, which is parallel to the ground.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 4.8: the rocket sled of Example 4.2. The sled runs down its rail
   for two seconds, so the idea has a time in it and the figure loops with
   the scrubber. The graph beside the free-body diagram is the acceleration
   against the number of rockets burning, against the dashed line the
   accelerations would lie on if they were simply proportional.
===================================================================== */
(function () {
  const d = sim('sim-sled', 860);
  const Tt = ctl(d.controls, { label: '\\kTf', cls: 'force', min: 5000, max: 40000, step: 100, value: 25900, unit: 'N', dec: 0, onInput: reset, aria: 'thrust of one rocket' });
  const nn = ctl(d.controls, { label: '\\text{rockets burning}', cls: '', min: 1, max: 4, step: 1, value: 4, unit: '', dec: 0, onInput: reset, aria: 'number of rockets burning' });
  const ff = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 2000, step: 50, value: 650, unit: 'N', dec: 0, onInput: reset, aria: 'force of friction' });
  const M = 2100, T = 2;
  const accOf = (n) => Math.max(0, n * Tt.v - ff.v) / M;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const n = Math.round(nn.v), a = accOf(n), net = n * Tt.v - ff.v, w = M * G;
    const tau = cy.now(), x = 0.5 * a * tau * tau, v = a * tau, xEnd = Math.max(0.5 * a * T * T, 1);
    /* the scene: the sled on its rail */
    const gy = 330, x0 = 250, SC = Math.min(840 / xEnd, 200);
    strip(ctx, 60, 1340, gy + 26, 40);
    const sx = x0 + x * SC, sy = gy - 34, cf = C('force'), K = 170 / 40000;
    sled(ctx, sx, sy, PAL.ink, n);
    for (let i = 0; i < n; i++) arrow(ctx, sx + 10, sy - 92 - i * 26, sx + 10 + alen(Tt.v, K, 20), sy - 92 - i * 26, cf, 4);
    text(ctx, n + ' × T = ' + sig3(n * Tt.v) + ' N', sx + 10, sy - 92 - (n - 1) * 26 - 28, cf, { size: 20, weight: 600 });
    const Lf = alen(ff.v, K, 24);
    arrow(ctx, sx - 20, sy - 56, sx - 20 - Lf, sy - 56, cf, 4);
    text(ctx, 'f = ' + commas(fmt(ff.v, 0)) + ' N', sx - 32 - Lf, sy - 56, cf, { size: 20, weight: 600, align: 'right' });
    if (a > 0.01) {
      const La = Math.min(180, 30 + a * 2.2);
      arrow(ctx, sx + 130, sy - 40, sx + 130 + La, sy - 40, C('acceleration'), 5);
      text(ctx, 'a = ' + fmt(a, 1) + ' m/s²', sx + 144 + La, sy - 40, C('acceleration'), { size: 20, weight: 600 });
    }
    if (v > 0.1) {
      const Lv = Math.min(180, v * 1.8);
      arrow(ctx, sx + 130, sy + 6, sx + 130 + Lv, sy + 6, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', sx + 144 + Lv, sy + 6, C('velocity'), { size: 20, weight: 600 });
    }
    /* the free-body diagram of the sled, its rockets and its rider */
    const k = 170 / Math.max(n * Tt.v, ff.v, 1);
    fbd(ctx, 400, 620,
      [{ dx: 1, v: n * Tt.v, label: n + 'T = ' + sig3(n * Tt.v) + ' N', c: cf, row: -20 },
       { dx: -1, v: ff.v, label: 'f = ' + commas(fmt(ff.v, 0)) + ' N', c: cf, row: 20 }],
      [{ dy: 1, label: 'w = ' + sig3(w) + ' N', c: cf },
       { dy: -1, label: 'N = ' + sig3(w) + ' N', c: cf }],
      k, 'the external forces on the sled, its rockets and its rider');
    if (net > 0) {
      arrow(ctx, 400, 782, 400 + alen(net, k), 782, C('acceleration'), 5);
      text(ctx, 'F net = ' + sig3(net) + ' N', 400 + alen(net, k) + 12, 782, C('acceleration'), { size: 19, weight: 600 });
    }
    /* the acceleration against the number of rockets burning */
    const ar = nice(0, Math.max(accOf(4), 1) * 1.14, 4);
    const g = axes(ctx, { l: 920, r: 1270, t: 520, b: 770 }, [0, 4], [0, ar.hi], { xl: 'rockets burning', xc: PAL.ink, yl: 'a (m/s²)', yc: C('acceleration'), nx: 4, ny: ar.n, fx: (s) => fmt(s, 0), fy: (s) => fmt(s, decs(ar)) });
    line(ctx, g.X(0), g.Y(0), g.X(4), g.Y(accOf(4)), PAL.muted, 3, [10, 10]);
    line(ctx, g.X(1), g.Y(accOf(1)), g.X(4), g.Y(accOf(4)), C('acceleration'), 5);
    for (let i = 1; i <= 4; i++) dot(ctx, g.X(i), g.Y(accOf(i)), C('acceleration'), i !== n, 9);
    dot(ctx, g.X(n), g.Y(a), PAL.ink, true, 10);
    text(ctx, 'simply proportional', g.X(2), g.Y(accOf(4) / 2) - 24, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, 't = ' + fmt(tau, 2) + ' s · ' + (n === 1 ? 'one thrust of ' : n + ' thrusts of ') + sig3(Tt.v) + ' N less ' + commas(fmt(ff.v, 0)) + ' N of friction give a = ' + fmt(a, 1) + ' m/s², and the sled is at ' + fmt(v, 1) + ' m/s');
    readout(d.readout, `\\kFnet = ${n}\\kTf - \\kff = ${n}(${sig3(Tt.v)}\\ \\text{N}) - ${commas(fmt(ff.v, 0))}\\ \\text{N} = ${sig3(net)}\\ \\text{N} = m\\ka`,
      'Dividing by the 2,100 kg of the sled, its rockets and its rider gives a = ' + fmt(a, 1) + ' m/s². With one rocket burning the acceleration is ' + fmt(accOf(1), 1) + ' m/s², not a quarter of ' + fmt(accOf(4), 1) + ' m/s², because the same ' + commas(fmt(ff.v, 0)) + ' N of friction is taken off it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   SIM: the weight of a mass, on Earth and elsewhere. Weight has no time in
   it — the figure answers its sliders — so it is a still picture with no
   transport. The scene stands upright, so its graph goes beside it, and
   the weight and the support of the scale are drawn on a free-body diagram
   of their own beneath the scene, as the other figures of the page draw
   their forces.
===================================================================== */
(function () {
  const d = sim('sim-weight', 740);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 100, step: 0.1, value: 1, unit: 'kg', dec: 1, aria: 'mass on the scale' });
  const gg = ctl(d.controls, { label: '\\kg', cls: 'acceleration', min: 1, max: 11, step: 0.005, value: 9.8, unit: 'm/s²', dec: 3, aria: 'acceleration due to gravity' });
  /* 9.80 and 1.625 are the two the book names, so each is printed as the book prints it */
  const gtxt = (g) => (Math.abs(g * 100 - Math.round(g * 100)) < 1e-9 ? fmt(g, 2) : fmt(g, 3));
  const place = (g) => (Math.abs(g - 9.8) < 0.003 ? 'on Earth, where' : Math.abs(g - 1.625) < 0.003 ? 'on the Moon, where' : 'where');
  function draw() {
    const { ctx } = begin(d.c);
    const w = mm.v * gg.v, cf = C('force'), ca = C('acceleration');
    /* the scene: a mass resting on a bathroom scale on the floor */
    const cx = 340, fy = 300;
    fixed(ctx, 100, fy, 480, 28);
    bathScale(ctx, cx, fy, 240, PAL.ink);
    const bh = 46 + Math.min(110, Math.cbrt(mm.v) * 30), bw = 84 + Math.min(130, Math.cbrt(mm.v) * 38);
    const by = fy - 34 - bh / 2;
    block(ctx, cx, by, bw, bh, PAL.ink);
    text(ctx, fmt(mm.v, 1) + ' kg', cx, by, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'the dial reads ' + sig3(w / G) + ' kg', cx, fy + 58, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'g = ' + gtxt(gg.v) + ' m/s²', cx, fy + 90, ca, { size: 21, weight: 600, align: 'center' });
    /* the two forces on the mass, equal and opposite, at a length that follows the gravity */
    const dy = 580, L = 34 + 96 * (gg.v / 11);
    text(ctx, 'the forces on the mass', cx, dy - 152, PAL.muted, { size: 18, align: 'center' });
    arrow(ctx, cx, dy, cx, dy + L, cf, 5);
    text(ctx, 'w = ' + sig3(w) + ' N', cx + 16, dy + L - 12, cf, { size: 21, weight: 600 });
    arrow(ctx, cx, dy, cx, dy - L, cf, 5);
    text(ctx, 'the scale pushes back with ' + sig3(w) + ' N', cx + 16, dy - L + 12, cf, { size: 19, weight: 600 });
    dot(ctx, cx, dy, PAL.ink, true, 8);
    /* the weight against the acceleration due to gravity */
    const wr = nice(0, mm.v * 11, 4);
    const g = axes(ctx, { l: 850, r: 1280, t: 170, b: 630 }, [0, 11], [0, wr.hi], { xl: 'g (m/s²)', xc: ca, yl: 'w (N)', yc: cf, nx: 11, ny: wr.n, fx: (s) => fmt(s, 0), fy: (s) => fmt(s, decs(wr)) });
    line(ctx, g.X(0), g.Y(0), g.X(11), g.Y(mm.v * 11), cf, 5);
    [[1.625, 'the Moon', 1], [9.8, 'Earth', -1]].forEach(([gv, name, side]) => {
      line(ctx, g.X(gv), g.Y(0), g.X(gv), g.Y(mm.v * gv), PAL.muted, 2, [4, 8]);
      dot(ctx, g.X(gv), g.Y(mm.v * gv), cf, true, 9);
      text(ctx, name, g.X(gv) + side * 22, g.Y(mm.v * gv) + 34, PAL.ink, { size: 18, weight: 600, align: side > 0 ? 'left' : 'right' });
    });
    line(ctx, g.X(gg.v), g.Y(0), g.X(gg.v), g.Y(w), ca, 3, [10, 10]);
    line(ctx, g.X(0), g.Y(w), g.X(gg.v), g.Y(w), cf, 2, [10, 10]);
    dot(ctx, g.X(gg.v), g.Y(w), ca, true, 11);
    headline(ctx, place(gg.v) + ' g = ' + gtxt(gg.v) + ' m/s², a mass of ' + fmt(mm.v, 1) + ' kg weighs ' + sig3(w) + ' N');
    readout(d.readout, `\\kwgt = m\\kg = (${fmt(mm.v, 1)}\\ \\text{kg})(${gtxt(gg.v)}\\ \\text{m/s}^2) = ${sig3(w)}\\ \\text{N}`,
      'The mass is the same wherever the scale is carried, but the weight is not: the same ' + fmt(mm.v, 1) + ' kg weighs ' + sig3(mm.v * G) + ' N on Earth and ' + sig3(mm.v * 1.625) + ' N on the Moon. A bathroom scale measures the force and divides it by 9.80 to print a mass, so here it would read ' + sig3(w / G) + ' kg.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
