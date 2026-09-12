/* Figures for section 7.4 Conservative Forces and Potential Energy. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, axes, nice, spring, fixed, car } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const G = 9.80, TAU = 2 * Math.PI;
const SMOOTH = (u) => u * u * (3 - 2 * u);
/* a stacked bar of energies: one filled band per term, drawn against the constant total */
function stack(ctx, x0, y0, w, h, total, parts) {
  let x = x0;
  parts.forEach((p, i) => {
    const pw = total > 0 ? (w * p.value) / total : 0;
    if (pw > 0.5) {
      ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.78 - 0.24 * i); ctx.fillRect(x, y0, pw, h); ctx.restore();
      if (pw > 120) { text(ctx, p.label + ' = ' + fmt(p.value, 3) + ' J', x + pw / 2, y0 + h / 2, PAL.panel, { size: 18, weight: 600, align: 'center' }); }
    }
    x += pw;
  });
  ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; ctx.strokeRect(x0, y0, w, h); ctx.restore();
}

/* =====================================================================
   FIGURE 7.10: the spring stretched, and the triangle under the force
   line whose area is the stored energy. Still: the energy depends only
   on the stretch the spring is left at, so the figure answers its
   sliders and nothing else.
===================================================================== */
(function () {
  const d = sim('sim-spring-energy', 700);
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 50, max: 500, step: 10, value: 250, unit: 'N/m', dec: 0, aria: 'force constant of the spring' });
  const x = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0, max: 0.2, step: 0.005, value: 0.04, unit: 'm', dec: 3, aria: 'stretch of the spring' });
  const XMAX = 0.2;
  function draw() {
    const { ctx } = begin(d.c);
    const xv = x.v, kv = k.v, Fv = kv * xv, pe = 0.5 * kv * xv * xv, SC = 1800;
    /* the scene: a spring fixed at one end, stretched to the right */
    const y = 200, wall = 150, nat = 380, rest = wall + 44 + nat, plate = rest + xv * SC;
    strip(ctx, 110, 1310, y + 120, 30);
    fixed(ctx, wall, y - 78, 44, 156);
    spring(ctx, wall + 44, y, plate - 16, y, 13, 26, PAL.ink, 4);
    line(ctx, plate - 16, y - 42, plate - 16, y + 42, PAL.ink, 8);
    /* the reference stops above the bracket, whose label is centred on it when the stretch is small */
    line(ctx, rest, y - 96, rest, y + 38, PAL.muted, 2, [8, 8]);
    text(ctx, 'undeformed length', rest, y - 112, PAL.muted, { size: 18, align: 'center' });
    if (xv > 0.0005) {
      hbracket(ctx, rest, plate - 16, y + 86, C('position'), 'x = ' + fmt(xv, 3) + ' m');
      arrow(ctx, plate + 10, y, Math.min(plate + 70 + 320 * (Fv / (500 * XMAX)), 1370), y, C('force'), 5);
      text(ctx, 'F = kx = ' + fmt(Fv, 1) + ' N', plate + 16, y - 36, C('force'), { weight: 600 });
    } else {
      text(ctx, 'no force is needed to hold the spring here', plate + 26, y - 36, PAL.muted, { size: 19 });
    }
    /* the graph: the force against the stretch, and the work as the triangle under the line */
    const Fr = nice(0, kv * XMAX, 4);
    const box = { l: 210, r: 1250, t: 380, b: 620 };
    const { X, Y } = axes(ctx, box, [0, XMAX], [0, Fr.hi], { xl: 'stretch x (m)', xc: C('position'), yl: 'force needed (N)', yc: C('force'), nx: 4, ny: Fr.n, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0) });
    if (xv > 0.0005) {
      ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.3); ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(xv), Y(0)); ctx.lineTo(X(xv), Y(Fv)); ctx.closePath(); ctx.fill(); ctx.restore();
      line(ctx, X(xv), Y(0), X(xv), Y(Fv), C('position'), 2, [4, 8]);
      dot(ctx, X(xv), Y(Fv), C('force'), true, 9);
      const wide = xv > 0.11;
      text(ctx, 'area = ½kx² = ' + fmt(pe, 3) + ' J', wide ? X(xv * 0.5) : X(xv) + 20, Math.min(Y(Fv * (wide ? 0.3 : 0.5)), box.b - 30), C('energy'), { size: 19, weight: 600, align: wide ? 'center' : 'left', bg: PAL.panel });
    }
    line(ctx, X(0), Y(0), X(XMAX), Y(kv * XMAX), C('force'), 5);
    text(ctx, 'slope = k = ' + fmt(kv, 0) + ' N/m', box.l + 24, box.t + 26, C('stiffness'), { size: 18, weight: 600 });
    headline(ctx, xv < 0.0005 ? 'the spring is at its undeformed length, so nothing is stored in it'
      : 'stretched by ' + fmt(xv, 3) + ' m, the spring pulls back with ' + fmt(Fv, 1) + ' N, and the shaded triangle is the ' + fmt(pe, 3) + ' J stored in it');
    readout(d.readout, `\\kPEs = \\tfrac{1}{2}\\kk\\kx^2 = \\tfrac{1}{2}(${fmt(kv, 0)}\\ \\text{N/m})(${fmt(xv, 3)}\\ \\text{m})^2 = ${fmt(pe, 3)}\\ \\text{J}`,
      'The force grows from 0 to ' + fmt(Fv, 1) + ' N, so its average is ½kx = ' + fmt(0.5 * Fv, 1) + ' N, and that average force acting through ' + fmt(xv, 3) + ' m does ' + fmt(pe, 3) + ' J of work, which is the same answer the area gives.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: two compressions, x and 2x, and the larger triangle ruled into
   four copies of the smaller. Still: it compares two configurations and
   has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-double', 660);
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 50, max: 500, step: 10, value: 250, unit: 'N/m', dec: 0, aria: 'force constant of the spring' });
  const x = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.01, max: 0.06, step: 0.005, value: 0.02, unit: 'm', dec: 3, aria: 'smaller compression' });
  function draw() {
    const { ctx } = begin(d.c);
    const xv = x.v, kv = k.v, SC = 1500;
    const pe1 = 0.5 * kv * xv * xv, pe2 = 4 * pe1;
    /* the two springs, one squeezed twice as far as the other */
    [[0, xv, 'the first setting'], [1, 2 * xv, 'the second setting']].forEach(([i, xc, lab]) => {
      const y = 120 + i * 120, wall = 180, nat = 380, rest = wall + 44 + nat, plate = rest - xc * SC;
      fixed(ctx, wall, y - 44, 44, 88);
      spring(ctx, wall + 44, y, plate - 10, y, 11, 20, PAL.ink, 4);
      line(ctx, plate - 10, y - 30, plate - 10, y + 30, PAL.ink, 7);
      line(ctx, rest, y - 38, rest, y + 38, PAL.muted, 2, [8, 8]);
      hbracket(ctx, plate - 10, rest, y + 66, C('position'), fmt(xc, 3) + ' m');
      text(ctx, lab, wall - 20, y, PAL.muted, { size: 19, align: 'right' });
      text(ctx, '½kx² = ' + fmt(0.5 * kv * xc * xc, 3) + ' J', rest + 60, y, C('energy'), { size: 21, weight: 600 });
    });
    /* the graph: the big triangle cut into four copies of the small one */
    const box = { l: 240, r: 1180, t: 350, b: 580 };
    const xr = 2.3 * xv, Fr = nice(0, kv * xr, 4);
    const { X, Y } = axes(ctx, box, [0, xr], [0, Fr.hi], { xl: 'compression x (m)', xc: C('position'), yl: 'force needed (N)', yc: C('force'), nx: 4, ny: Fr.n, fx: (v) => fmt(v, 3), fy: (v) => fmt(v, 0) });
    const F1 = kv * xv, F2 = 2 * F1;
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.3); ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(xv), Y(0)); ctx.lineTo(X(xv), Y(F1)); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.12); ctx.beginPath(); ctx.moveTo(X(xv), Y(0)); ctx.lineTo(X(2 * xv), Y(0)); ctx.lineTo(X(2 * xv), Y(F2)); ctx.lineTo(X(xv), Y(F1)); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X(xv), Y(0), X(xv), Y(F1), C('energy'), 2, [6, 6]);
    line(ctx, X(xv), Y(F1), X(2 * xv), Y(F1), C('energy'), 2, [6, 6]);
    line(ctx, X(xv), Y(0), X(2 * xv), Y(F1), C('energy'), 2, [6, 6]);
    line(ctx, X(2 * xv), Y(0), X(2 * xv), Y(F2), C('position'), 2, [4, 8]);
    line(ctx, X(0), Y(0), X(xr), Y(kv * xr), C('force'), 5);
    [[0.667, 0.167], [1.667, 0.167], [1.333, 0.333], [1.667, 0.667]].forEach(([fx, fy]) => text(ctx, fmt(pe1, 3) + ' J', X(xv * fx), Y(F2 * fy), C('energy'), { size: 17, align: 'center' }));
    text(ctx, '2x', X(2 * xv), box.b + 26, C('position'), { size: 18, weight: 600, align: 'center' });
    headline(ctx, 'compressing this spring by ' + fmt(2 * xv, 3) + ' m stores ' + fmt(pe2, 3) + ' J, four times the ' + fmt(pe1, 3) + ' J that ' + fmt(xv, 3) + ' m stores');
    readout(d.readout, `\\frac{\\tfrac{1}{2}\\kk(2\\kx)^2}{\\tfrac{1}{2}\\kk\\kx^2} = \\frac{${fmt(pe2, 3)}\\ \\text{J}}{${fmt(pe1, 3)}\\ \\text{J}} = 4`,
      'Squeezing the spring twice as far doubles the force it pushes back with and doubles the distance that force acts through, so the work done on it is four times as great. The larger triangle holds four copies of the smaller one.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.11: the plucked guitar string. It swings through its rest
   line endlessly, trading the energy of its shape for the energy of its
   motion, so it moves; an endless oscillation has no period to scrub.
===================================================================== */
(function () {
  const d = sim('sim-guitar', 520);
  const x0 = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0.002, max: 0.02, step: 0.001, value: 0.01, unit: 'm', dec: 3, onInput: reset, aria: 'pluck of the string' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 200, max: 2000, step: 50, value: 800, unit: 'N/m', dec: 0, onInput: reset, aria: 'force constant of the string' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? 1.1 : cy.now();
    const xv = x0.v * Math.cos((TAU / 5) * tau), SC = 7000;
    const E = 0.5 * k.v * x0.v * x0.v, PE = 0.5 * k.v * xv * xv, KE = E - PE;
    /* the scene: one string held between a nut and a bridge, plucked at its middle */
    const y = 270, nut = 130, bridge = 1000, mid = (nut + 44 + bridge) / 2, dy = -xv * SC;
    fixed(ctx, nut, y - 100, 44, 200); fixed(ctx, bridge, y - 100, 44, 200);
    line(ctx, nut + 44, y, bridge, y, PAL.muted, 2, [10, 10]);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(nut + 44, y); ctx.lineTo(mid, y + dy); ctx.lineTo(bridge, y); ctx.stroke(); ctx.restore();
    dot(ctx, mid, y + dy, PAL.ink, true, 9);
    if (Math.abs(xv) > 0.0004) {
      vbracket(ctx, mid, y, y + dy, C('position'));
      text(ctx, 'x = ' + fmt(Math.abs(xv), 4) + ' m', mid + 18, y + dy / 2, C('position'), { weight: 600, bg: PAL.panel });
    }
    text(ctx, 'rest line', nut + 60, y + 26, PAL.muted, { size: 18 });
    /* the two energies, side by side against the total the pluck put in */
    const b0 = 440, bh = 250, bw = 78, bx = [1110, 1230];
    line(ctx, bx[0] - 34, b0 - bh, bx[1] + bw + 34, b0 - bh, C('energy'), 2, [8, 6]);
    text(ctx, 'total ½kx₀² = ' + fmt(E, 3) + ' J', (bx[0] + bx[1] + bw) / 2, b0 - bh - 24, C('energy'), { size: 18, weight: 600, align: 'center' });
    [[0, PE, 'PE_s'], [1, KE, 'KE']].forEach(([i, val, lab]) => {
      const h = E > 0 ? (bh * Math.max(0, val)) / E : 0;
      ctx.save(); ctx.fillStyle = alpha(C('energy'), i ? 0.4 : 0.78); ctx.fillRect(bx[i], b0 - h, bw, h); ctx.restore();
      ctx.save(); ctx.strokeStyle = C('energy'); ctx.lineWidth = 2; ctx.strokeRect(bx[i], b0 - bh, bw, bh); ctx.restore();
      text(ctx, lab, bx[i] + bw / 2, b0 + 24, C('energy'), { size: 18, weight: 600, align: 'center' });
      text(ctx, fmt(Math.max(0, val), 3) + ' J', bx[i] + bw / 2, b0 + 48, C('energy'), { size: 17, align: 'center' });
    });
    headline(ctx, KE < 0.02 * E ? 'at the full pluck the string is momentarily at rest, and the whole ' + fmt(E, 3) + ' J is stored in its shape'
      : PE < 0.02 * E ? 'crossing the rest line the string is not deformed, so the whole ' + fmt(E, 3) + ' J is the energy of its motion'
      : 'the string is ' + fmt(Math.abs(xv), 4) + ' m from its rest line, so its shape holds ' + fmt(PE, 3) + ' J and its motion carries ' + fmt(KE, 3) + ' J');
    readout(d.readout, `\\kPEs + \\kKE = ${fmt(PE, 3)}\\ \\text{J} + ${fmt(Math.max(0, KE), 3)}\\ \\text{J} = ${fmt(E, 3)}\\ \\text{J}`,
      'The pluck did ½kx₀² = ' + fmt(E, 3) + ' J of work on the string, and because the string’s force is conservative that total stays the same however the two energies share it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 7.12: the toy car of Example 7.8, launched by a compressed
   spring and coasting to a shelf by either of two paths. It is a
   journey with a time in it, so it runs a finite loop with the
   scrubber, and the stacked bar keeps the account of the car that takes
   the gradual rise.
===================================================================== */
(function () {
  const d = sim('sim-toy-car', 640);
  const xi = ctl(d.controls, { label: '\\kxi', cls: 'position', min: 0.01, max: 0.08, step: 0.005, value: 0.04, unit: 'm', dec: 3, onInput: reset, aria: 'compression of the spring' });
  const k = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 100, max: 500, step: 10, value: 250, unit: 'N/m', dec: 0, onInput: reset, aria: 'force constant of the spring' });
  const hf = ctl(d.controls, { label: '\\khf', cls: 'position', min: 0, max: 0.25, step: 0.01, value: 0.18, unit: 'm', dec: 2, onInput: reset, aria: 'height of the shelf' });
  const M = 0.100, SC = 600, GY = 300, X0 = 250, X1 = 1060, LSC = 1200;
  function reset() { cy.reset(); }
  const energy = () => 0.5 * k.v * xi.v * xi.v;
  const speedAt = (E, h) => Math.sqrt(Math.max(0, (2 * (E - M * G * h)) / M));
  function buildA(h) {
    const pts = [], a = 50 / (X1 - X0), b = 470 / (X1 - X0);
    for (let i = 0; i <= 70; i++) { const s = i / 70, hh = s <= a ? 0 : s >= b ? h : h * SMOOTH((s - a) / (b - a)); pts.push([X0 + s * (X1 - X0), GY - hh * SC]); }
    return pts;
  }
  function buildB(h) {
    const pts = [], DIP = -0.22, R = 55, LX = 520, dipY = GY - DIP * SC, cyc = dipY - R;
    for (let i = 0; i <= 22; i++) { const u = i / 22; pts.push([X0 + u * 170, GY + SMOOTH(u) * (dipY - GY)]); }
    for (let i = 1; i <= 10; i++) pts.push([420 + (i / 10) * 100, dipY]);
    for (let i = 1; i <= 48; i++) { const th = (i / 48) * TAU; pts.push([LX + R * Math.sin(th), cyc + R * Math.cos(th)]); }
    for (let i = 1; i <= 14; i++) pts.push([LX + (i / 14) * 240, dipY]);
    for (let i = 1; i <= 34; i++) { const u = i / 34; pts.push([760 + u * (X1 - 760), dipY + SMOOTH(u) * (GY - h * SC - dipY)]); }
    return pts;
  }
  function timeline(pts, E) {
    const ts = [0]; let stall = -1;
    for (let i = 1; i < pts.length; i++) {
      const hm = (GY - (pts[i][1] + pts[i - 1][1]) / 2) / SC, vm = speedAt(E, hm);
      if (vm < 0.05) { stall = i - 1; break; }
      ts.push(ts[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]) / SC / vm);
    }
    return { pts, ts, stall, T: ts[ts.length - 1] };
  }
  let memo = null;
  function tracks() {
    const key = k.v + '|' + xi.v + '|' + hf.v;
    if (memo && memo.key === key) return memo;
    const E = energy();
    memo = { key, E, A: timeline(buildA(hf.v), E), B: timeline(buildB(hf.v), E), rel: (Math.PI / 2) * Math.sqrt(M / k.v) };
    memo.T = memo.rel + Math.max(memo.A.T, memo.B.T);
    return memo;
  }
  const cy = cycle(() => tracks().T, 1.4);
  function at(tr, t) {
    const ts = tr.ts, last = ts.length - 1;
    if (t >= ts[last]) return { p: tr.pts[last], done: true };
    let i = 1; while (i < last && ts[i] < t) i++;
    const u = (t - ts[i - 1]) / (ts[i] - ts[i - 1] || 1);
    return { p: [tr.pts[i - 1][0] + u * (tr.pts[i][0] - tr.pts[i - 1][0]), tr.pts[i - 1][1] + u * (tr.pts[i][1] - tr.pts[i - 1][1])], done: false };
  }
  function trace(ctx, pts, color, w, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const T = tracks(), E = T.E, tau = cy.now();
    const launching = tau < T.rel;
    const xc = launching ? xi.v * Math.cos(Math.sqrt(k.v / M) * tau) : 0, tr = Math.max(0, tau - T.rel);
    const A = at(T.A, tr), B = at(T.B, tr);
    const hA = (GY - A.p[1]) / SC, hB = (GY - B.p[1]) / SC;
    const vA = launching ? 0 : speedAt(E, hA), vB = launching ? 0 : speedAt(E, hB);
    const peS = 0.5 * k.v * xc * xc, peA = M * G * hA, keA = Math.max(0, E - peS - peA);
    /* the launcher */
    const carA = launching ? [X0 - xc * LSC, GY] : A.p;
    fixed(ctx, 60, GY - 86, 40, 86);
    spring(ctx, 100, GY - 26, (launching ? carA[0] : X0) - 26, GY - 26, 10, 18, PAL.ink, 4);
    /* the two paths and the shelf they share */
    trace(ctx, T.B.pts, PAL.muted, 3, [10, 10]);
    trace(ctx, T.A.pts, PAL.ink, 4);
    line(ctx, 60, GY, X0, GY, PAL.ink, 4);
    line(ctx, X0, GY + 16, X0, GY - 150, PAL.rule, 1.5);
    line(ctx, 110, GY - hf.v * SC, X1 + 40, GY - hf.v * SC, PAL.rule, 1.5);
    if (hf.v > 0.005) vbracket(ctx, X1 + 26, GY, GY - hf.v * SC, C('position'), 'h_f = ' + fmt(hf.v, 2) + ' m', 1);
    line(ctx, 120, 96, 180, 96, PAL.ink, 4);
    text(ctx, 'the gradual rise', 194, 96, PAL.muted, { size: 18 });
    line(ctx, 120, 126, 180, 126, PAL.muted, 3, [10, 10]);
    text(ctx, 'the dip and the loop', 194, 126, PAL.muted, { size: 18 });
    /* the two cars */
    car(ctx, B.p[0], B.p[1] - 14, PAL.muted, 0.46);
    car(ctx, carA[0], carA[1] - 14, PAL.ink, 0.46);
    /* the label of the car on the dip goes below and behind it, since the two cars run
       side by side at the start and a label above this one lands on the other car */
    if (!launching && !B.done) text(ctx, fmt(vB, 2) + ' m/s', B.p[0] - 28, B.p[1] + 40, C('velocity'), { size: 18, weight: 600, align: 'right' });
    if (!launching && vA > 0.02) { arrow(ctx, carA[0] + 24, carA[1] - 36, carA[0] + 24 + Math.min(40 + 70 * vA, 210), carA[1] - 36, C('velocity'), 5); text(ctx, 'v = ' + fmt(vA, 2) + ' m/s', carA[0] + 24, carA[1] - 62, C('velocity'), { size: 19, weight: 600 }); }
    if (launching) { hbracket(ctx, carA[0] - 26, X0, GY + 46, C('position'), 'x = ' + fmt(xc, 3) + ' m'); }
    /* the account: the whole energy of the car on the gradual rise, however it is shared */
    const bx = 260, bw = 800, by = 520, bh = 46;
    stack(ctx, bx, by, bw, bh, E, [{ label: 'PE_s', value: peS }, { label: 'KE', value: keA }, { label: 'PE_g', value: peA }]);
    text(ctx, 'the total mechanical energy of the car stays ' + fmt(E, 3) + ' J', bx + bw / 2, by - 26, C('energy'), { size: 19, weight: 600, align: 'center' });
    text(ctx, 'in the spring ' + fmt(peS, 3) + ' J · of the motion ' + fmt(keA, 3) + ' J · of the height ' + fmt(peA, 3) + ' J', bx + bw / 2, by + bh + 26, C('energy'), { size: 17, align: 'center' });
    const short = T.A.stall >= 0 || T.B.stall >= 0;
    headline(ctx, launching ? 'the spring is still pushing: ' + fmt(peS, 3) + ' J is left in it and ' + fmt(keA, 3) + ' J has become the energy of the car’s motion'
      : short ? 'the spring stores ' + fmt(E, 3) + ' J, less than the ' + fmt(M * G * hf.v, 3) + ' J the climb costs, so the car stops short of the shelf'
      : A.done && B.done ? 'both cars are on the shelf ' + fmt(hf.v, 2) + ' m up, each moving at ' + fmt(speedAt(E, hf.v), 3) + ' m/s, whichever path it took'
      : 't = ' + fmt(tr, 2) + ' s · the car on the rise is ' + fmt(hA, 3) + ' m up and moving at ' + fmt(vA, 2) + ' m/s, and the car round the loop is moving at ' + fmt(vB, 2) + ' m/s');
    readout(d.readout, `\\tfrac{1}{2}\\kk\\kxi^2 = \\tfrac{1}{2}m\\kvf^2 + m\\kg\\khf \\;\\Rightarrow\\; ${fmt(E, 3)}\\ \\text{J} = ${fmt(Math.max(0, E - M * G * hf.v), 3)}\\ \\text{J} + ${fmt(M * G * hf.v, 3)}\\ \\text{J}`,
      'Before the slope the whole ' + fmt(E, 3) + ' J is kinetic, so the car leaves the spring at √(k/m)·x_i = ' + fmt(speedAt(E, 0), 2) + ' m/s, and at the top of the ' + fmt(hf.v, 2) + ' m shelf it has ' + fmt(speedAt(E, hf.v), 3) + ' m/s left.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tracks().T / 5), draw });
})();
};
