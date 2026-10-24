/* Figures for section 2.4 Acceleration. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, strip, scale, axes, nice, curve, car, topline, labeller, LW, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = Math.PI * 2;
/* a number with a real minus sign for the canvas, and with an explicit plus when asked */
const num = (x, d) => (x < 0 && Math.abs(x) >= Math.pow(10, -d) / 2 ? '−' : '') + fmt(Math.abs(x), d);
const signed = (x, d) => (x > 0 && Math.abs(x) >= Math.pow(10, -d) / 2 ? '+' : '') + num(x, d);
/* the same number for KaTeX, where the hyphen is the minus */
const tnum = (x, d) => fmt(x, d);
const tsigned = (x, d) => (x > 0 && Math.abs(x) >= Math.pow(10, -d) / 2 ? '+' : '') + fmt(x, d);
/* three significant figures, as the book prints an acceleration, with a real minus sign for the canvas and a hyphen for KaTeX */
const tsig3 = (x) => String(Number(x.toPrecision(3)));
const sig3 = (x) => tsig3(x).replace('-', '−');
const sig3s = (x) => (x > 0 ? '+' : '') + sig3(x);
const tsig3s = (x) => (x > 0 ? '+' : '') + tsig3(x);
/* a symbol followed by a small subscript, such as v with an f */
function sub(ctx, base, sfx, x, y, color, size = 24, align = 'left') {
  const wb = F.measure(ctx, base, { size, weight: 600 }), ws = F.measure(ctx, sfx, { size: size * 0.7, weight: 600 });
  const x0 = align === 'center' ? x - (wb + ws) / 2 : align === 'right' ? x - wb - ws : x;
  text(ctx, base, x0, y, color, { weight: 600, size }); text(ctx, sfx, x0 + wb, y + size * 0.3, color, { weight: 600, size: size * 0.7 });
}
/* a label in ink followed by a value in a colour, on one line */
function pair(ctx, left, right, x, y, color, size = 22) {
  const w = F.measure(ctx, left, { size });
  text(ctx, left, x, y, PAL.ink, { size }); text(ctx, right, x + w + 8, y, color, { weight: 600, size: size + 2 });
}
/* the range a function takes over [0, T], sampled */
function span(f, T, n = 80) { let lo = Infinity, hi = -Infinity; for (let i = 0; i <= n; i++) { const v = f((T * i) / n); lo = Math.min(lo, v); hi = Math.max(hi, v); } return [lo, hi]; }

/* ---------- sprites ---------- */
/* a subway car standing on the rail at y, about 112 units long; hollow draws only its outline */
function train(ctx, x, y, color, s = 1, hollow = false) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  if (hollow) {
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.setLineDash([6, 6]); ctx.strokeRect(-56, -60, 112, 44);
    ctx.beginPath(); ctx.arc(-36, -8, 8, 0, TAU); ctx.moveTo(44, -8); ctx.arc(36, -8, 8, 0, TAU); ctx.stroke(); ctx.restore(); return;
  }
  ctx.fillStyle = color; ctx.fillRect(-56, -60, 112, 44); ctx.fillRect(-48, -66, 96, 8);
  ctx.fillStyle = PAL.panel; [-46, -20, 6].forEach((wx) => ctx.fillRect(wx, -52, 20, 14)); ctx.fillRect(34, -52, 14, 32);
  ctx.fillStyle = color; ctx.beginPath();
  [-36, -18, 18, 36].forEach((wx) => { ctx.moveTo(wx + 8, -8); ctx.arc(wx, -8, 8, 0, TAU); }); ctx.fill();
  ctx.restore();
}
/* the library car, facing dir */
function carDir(ctx, x, y, color, s, dir) { ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1); car(ctx, 0, 0, color, s); ctx.restore(); }
/* a car seen from above, its nose pointing along heading (0 is to the right, a positive heading turns toward the top of the canvas) */
function topCar(ctx, x, y, heading, color) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-heading); ctx.fillStyle = color;
  /* four tyres under a rounded body, the windscreen and rear window as light bands, the bonnet forward */
  ctx.fillRect(-30, -24, 14, 48); ctx.fillRect(16, -24, 14, 48);
  ctx.beginPath(); ctx.roundRect(-40, -19, 80, 38, 9); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.roundRect(8, -14, 10, 28, 3); ctx.fill(); ctx.beginPath(); ctx.roundRect(-28, -13, 7, 26, 3); ctx.fill();
  ctx.fillStyle = alpha(PAL.panel, 0.5); ctx.fillRect(-12, -15, 18, 30); ctx.restore();
}

/* =====================================================================
   SIM: the definition. A car whose velocity changes by ā every second
   for 5.0 s; the v–t graph below is marked at each whole second, so the
   unit m/s² is read off the picture. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = sim('sim-average-acceleration', 640);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 5, unit: 'm/s', dec: 1, onInput: reset });
  const a = ctl(d.controls, { label: '\\kab', cls: 'acceleration', min: -5, max: 5, step: 0.1, value: 2.5, unit: 'm/s²', dec: 1, onInput: reset });
  const T = 5;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const vel = (s) => v0.v + a.v * s, pos = (s) => v0.v * s + 0.5 * a.v * s * s;
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T - 1e-9, vv = vel(tau), vend = vel(T);
    /* The road is a fixed −70 m to 165 m, which holds every run the two sliders allow, so the car
       covers a longer stretch when the acceleration is larger instead of the road shrinking to fit. */
    const MLO = -70, MHI = 165;
    const L = 80, R = 1320, y = 230, X = (m) => L + 120 + ((R - L - 260) * (m - MLO)) / (MHI - MLO);
    strip(ctx, L, R, y, 52);
    scale(ctx, X, MLO + 20, MHI - 15, 50, y + 26, 'm', 1);
    arrow(ctx, 1200, y - 55, 1300, y - 55, PAL.ink, 3); text(ctx, '+x', 1310, y - 55, PAL.ink, { size: 20, weight: 600 });
    const px = X(pos(tau));
    carDir(ctx, px, y - 6, F.ref('car'), 1.2, vv >= 0 ? 1 : -1);
    arrow(ctx, px, y - 106, px + vv * 6, y - 106, C('velocity'), 5);
    text(ctx, 'v = ' + num(vv, 1) + ' m/s', px + (vv >= 0 ? -6 : 6), y - 138, C('velocity'), { align: vv >= 0 ? 'left' : 'right', weight: 600 });
    if (Math.abs(a.v) > 0.05) {
      arrow(ctx, px, y + 72, px + a.v * 24, y + 72, C('acceleration'), 5);
      text(ctx, 'ā = ' + signed(a.v, 1) + ' m/s²', px + (a.v >= 0 ? -6 : 6), y + 104, C('acceleration'), { align: a.v >= 0 ? 'left' : 'right', weight: 600 });
    } else text(ctx, 'ā = 0：速度不变', px, y + 90, C('acceleration'), { align: 'center', weight: 600 });
    /* v against t, marked every whole second */
    /* the v axis is fixed at −30 to 50 m/s, which holds the −25 to 45 m/s every pair of slider values reaches */
    const box = { l: 160, r: 1240, t: 380, b: 580 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, T], [-30, 50], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: 5, ny: 8 });
    line(ctx, GX(0), GY(v0.v), GX(T), GY(vend), C('velocity'), 5);
    /* the whole-second readings sit on the side of the line away from the bracket, and every label
       goes through the labeller so none lands on another at any slope */
    const lab = labeller(ctx, 640);
    lab.block(box.l - 60, box.b, box.r + 140, box.b + 70);
    for (let k = 1; k <= T; k++) {
      dot(ctx, GX(k), GY(vel(k)), C('velocity'), true, 7);
      lab.add(num(vel(k), 1), GX(k), GY(vel(k)), 0, a.v >= 0 ? 1 : -1, C('velocity'), 17, 22);
    }
    if (Math.abs(a.v) > 0.05) {
      line(ctx, GX(2), GY(vel(2)), GX(3), GY(vel(2)), C('velocity'), 2, [4, 6]);
      vbracket(ctx, GX(3) + 22, GY(vel(2)), GY(vel(3)), C('velocity'));
      lab.add('1 s 内 Δv = ' + signed(a.v, 1) + ' m/s', GX(3) + 22, (GY(vel(2)) + GY(vel(3))) / 2, 1, a.v >= 0 ? -0.6 : 0.6, C('velocity'), 18, 22);
    }
    dot(ctx, GX(0), GY(v0.v), C('velocity'), false, 10); dot(ctx, GX(T), GY(vend), C('velocity'), true, 10);
    line(ctx, GX(tau), box.b, GX(tau), GY(vv), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(vv), PAL.ink, true, 9);
    lab.flush();
    /* the headline works from the time it shows, rounded, so its product and its sum agree as written */
    const tr = Math.round(tau * 100) / 100, as = a.v < 0 ? '(' + signed(a.v, 1) + ')' : signed(a.v, 1);
    topline(ctx, done ? '在 ' + fmt(T, 1) + ' s 内，速度变化了 ' + fmt(T, 0) + ' × ' + as + ' = ' + signed(vend - v0.v, 1) + ' m/s，从 ' + num(v0.v, 1) + ' 变为 ' + num(vend, 1) + ' m/s。'
      : '经过 ' + fmt(tr, 2) + ' s 后，速度变化了 ' + fmt(tr, 2) + ' × ' + as + ' = ' + signed(tr * a.v, 1) + ' m/s，变为 ' + num(v0.v + tr * a.v, 1) + ' m/s。');
    readout(d.readout, `\\kab = \\frac{\\kdv}{\\kdt} = \\frac{(${tnum(vend, 1)} - ${tnum(v0.v, 1)})\\ \\text{m/s}}{${fmt(T, 1)}\\ \\text{s}} = ${tnum(a.v, 1)}\\ \\text{m/s}^2`,
      '单位 m/s² 表示速度每秒变化 ' + signed(a.v, 1) + ' m/s，无论取哪一秒。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   SIM: the turning car. A car rounds a bend at constant speed; the
   velocity at the start of the turn and the velocity now are set tail
   to tail beside the road, and their difference points to the inside
   of the bend. Endless loop over the whole run.
===================================================================== */
(function () {
  const d = sim('sim-turning', 560);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 20, step: 0.5, value: 10, unit: 'm/s', dec: 1, onInput: reset });
  const Rm = ctl(d.controls, { label: '\\text{半径}', cls: 'position', min: 20, max: 80, step: 5, value: 40, unit: 'm', dec: 0, onInput: reset, aria: '弯道的半径' });
  const K = 2.75;                                     /* canvas units per meter */
  const x0 = 100, xb = 480, yroad = 430, ytop = 120;   /* the straight in, the start of the bend, the road's level and the top of the exit */
  const Rpx = () => Rm.v * K, Lin = xb - x0, arc = () => (Math.PI / 2) * Rpx(), Lout = () => yroad - Rpx() - ytop;
  const total = () => (Lin + arc() + Lout()) / K;    /* the run in meters */
  const T = () => total() / v.v;
  const cy = cycle(T, 0.6);
  function reset() { cy.reset(); }
  /* where the car is and which way it points after s meters */
  function place(s) {
    const p = s * K, R = Rpx(), cx = xb, cyy = yroad - R;
    if (p <= Lin) return { x: x0 + p, y: yroad, h: 0, phase: 'in' };
    if (p <= Lin + arc()) { const th = (p - Lin) / R; return { x: cx + R * Math.sin(th), y: cyy + R * Math.cos(th), h: th, phase: 'bend' }; }
    return { x: cx + R, y: cyy - (p - Lin - arc()), h: Math.PI / 2, phase: 'out' };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), s = v.v * tau, R = Rpx(), cx = xb, cyy = yroad - R, at = place(s);
    /* the road: two straights and the bend, drawn as a wide soft band */
    ctx.save(); ctx.strokeStyle = PAL.soft; ctx.lineWidth = 64; ctx.lineCap = 'butt'; ctx.beginPath();
    ctx.moveTo(x0 - 40, yroad); ctx.lineTo(cx, yroad); ctx.arc(cx, cyy, R, Math.PI / 2, 0, true); ctx.lineTo(cx + R, ytop - 20); ctx.stroke();
    ctx.setLineDash([22, 18]); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(x0 - 40, yroad); ctx.lineTo(cx, yroad); ctx.arc(cx, cyy, R, Math.PI / 2, 0, true); ctx.lineTo(cx + R, ytop - 20); ctx.stroke(); ctx.restore();
    /* the centre of the bend and its radius */
    dot(ctx, cx, cyy, PAL.muted, true, 5);
    line(ctx, cx, cyy, cx + R * Math.sin(Math.PI / 4), cyy + R * Math.cos(Math.PI / 4), C('position'), 2, [4, 8]);
    text(ctx, '半径 ' + fmt(Rm.v, 0) + ' m', cx - 14, cyy - 6, C('position'), { size: 17, align: 'right' });
    /* the car and its velocity */
    topCar(ctx, at.x, at.y, at.h, F.ref('turning-car'));
    /* the arrow on the exit straight is cut short of the headline band, and its label stands beside the car */
    const vl = v.v * 12, up = at.h >= Math.PI / 3, va = up ? Math.max(0, Math.min(vl, at.y - 130)) : vl;
    const ux = Math.cos(at.h), uy = -Math.sin(at.h), tx = at.x + ux * va, ty = at.y + uy * va;
    arrow(ctx, at.x, at.y, tx, ty, C('velocity'), 5);
    if (!up) text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', tx + 14, Math.max(100, ty), C('velocity'), { weight: 600, size: 20 });
    else text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', at.x + 44, (at.y + ty) / 2, C('velocity'), { weight: 600, size: 20, align: 'left' });
    /* the two velocities tail to tail, and their difference */
    const ox = 1080, oy = 330, hb = at.phase === 'in' ? 0 : at.h, dvx = Math.cos(hb) - 1, dvy = -Math.sin(hb), dvm = 2 * v.v * Math.sin(hb / 2);
    const tb = at.phase === 'in' ? 0 : Math.min(s * K - Lin, arc()) / K / v.v;   /* the time spent on the bend so far */
    const abar = tb > 0.02 ? dvm / tb : 0;
    /* On the bend the average acceleration is drawn along Δv, which is what this section defines it to
       be. Its length runs on a fixed scale from the fastest, tightest bend the sliders allow, about
       20 m/s²; the centripetal result that would give its size from the speed and the radius belongs
       to a later chapter and is not used here. */
    const AMAX = 20;
    if (at.phase === 'bend' && abar > 0.05) {
      const dl = Math.hypot(dvx, dvy) || 1, al = 30 + (110 * Math.min(abar, AMAX)) / AMAX;
      const ux2 = dvx / dl, uy2 = dvy / dl;
      arrow(ctx, at.x + ux2 * 30, at.y + uy2 * 30, at.x + ux2 * (30 + al), at.y + uy2 * (30 + al), C('acceleration'), 5);
      text(ctx, 'ā', at.x + ux2 * (al + 50), at.y + uy2 * (al + 50), C('acceleration'), { weight: 600, size: 24, align: 'center' });
    }
    text(ctx, '弯道起点处的速度与现在的速度', ox + 60, oy - 190, PAL.muted, { size: 17, align: 'center' });
    arrow(ctx, ox, oy, ox + vl, oy, C('velocity'), 4); text(ctx, '弯道起点处', ox + vl / 2, oy + 24, C('velocity'), { size: 17, align: 'center' });
    if (hb > 0.01) {
      arrow(ctx, ox, oy, ox + Math.cos(hb) * vl, oy - Math.sin(hb) * vl, C('velocity'), 5);
      text(ctx, '现在', ox + Math.cos(hb) * vl - 24, oy - Math.sin(hb) * vl - 4, C('velocity'), { size: 17, align: 'right' });
      arrow(ctx, ox + vl, oy, ox + vl + dvx * vl, oy + dvy * vl, C('velocity'), 6);
      text(ctx, 'Δv = ' + fmt(dvm, 1) + ' m/s', ox + vl + (dvx * vl) / 2 + 16, oy + (dvy * vl) / 2, C('velocity'), { weight: 600, size: 20 });
    }
    dot(ctx, ox, oy, PAL.ink, true, 5);
    const deg = fmt((hb * 180) / Math.PI, 0);
    topline(ctx, at.phase === 'in' ? '在直道上，速度向右，为 ' + fmt(v.v, 1) + ' m/s，且不变，所以加速度为零。'
      : at.phase === 'bend' ? '在弯道上，速率保持 ' + fmt(v.v, 1) + ' m/s，而方向已转过 ' + deg + '°，所以速度变化了 ' + fmt(dvm, 1) + ' m/s，汽车具有加速度。'
        : '过了弯道，速度向上，为 ' + fmt(v.v, 1) + ' m/s，虽然速率始终没有变化，速度却变化了 ' + fmt(dvm, 1) + ' m/s。');
    readout(d.readout, `|\\kdv| = ${fmt(dvm, 1)}\\ \\text{m/s}\\quad (\\kv = ${fmt(v.v, 1)}\\ \\text{m/s}\\ \\text{全程})` + (tb > 0.01 ? `\\qquad \\kab = \\frac{${fmt(dvm, 1)}\\ \\text{m/s}}{${fmt(tb, 2)}\\ \\text{s}} = ${fmt(dvm / tb, 1)}\\ \\text{m/s}^2` : ''),
      '速度的变化量指向弯道的内侧，加速度也是如此。弯道越急或汽车越快，加速度越大。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   FIGURE 2.14: the four cars. Each drives for the time the slowing cars
   take to stop; the velocity arrows change and the acceleration arrows
   keep their length and sign. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = sim('sim-four-cars', 620);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 5, max: 30, step: 1, value: 15, unit: 'm/s', dec: 0, onInput: reset, aria: '初速率' });
  const am = ctl(d.controls, { label: '|\\ka|', cls: 'acceleration', min: 1, max: 6, step: 0.1, value: 3, unit: 'm/s²', dec: 1, onInput: reset, aria: '加速度的大小' });
  /* Eight labels riding eight arrows that travel with four cars would sit on moving things, so none
     is drawn (rule 26.7): the coloured numbers beside each road name v and a, and the hover name
     says which car is which. */
  const T = () => v0.v / am.v;
  const cy = cycle(T, 1.2);
  function reset() { cy.reset(); }
  const CARS = [['(a)', 1, 1, 'car-a'], ['(b)', 1, -1, 'car-b'], ['(c)', -1, 1, 'car-c'], ['(d)', -1, -1, 'car-d']];   /* label, sign of v, sign of a, referent */
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T() - 1e-9;
    /* The four roads carry no scale and no ticks: this figure is about the signs of v and a, not
       about distance, so each road is simply the room the cars need to run in. Every number the
       reader is meant to take away is written beside the road and in the readout. */
    const L = 150, R = 1000, D = (1.5 * v0.v * v0.v) / am.v, k = (R - L - 100) / D;
    arrow(ctx, 1220, 96, 1320, 96, PAL.ink, 3); text(ctx, '+x', 1330, 96, PAL.ink, { size: 20, weight: 600 });
    const next = [];
    CARS.forEach(([lab, sv, sa, id], i) => {
      const y = 174 + 124 * i, vel = sv * v0.v + sa * am.v * tau, x = sv * v0.v * tau + 0.5 * sa * am.v * tau * tau;
      const px = sv > 0 ? L + 50 + x * k : R - 50 + x * k;
      const stopped = sv * sa < 0 && tau >= T() - 1e-9;
      const what = stopped ? '已停下' : sv * sa > 0 ? '加速' : '减速';
      strip(ctx, L, R, y, 44);
      text(ctx, lab, 36, y - 14, F.ref(id), { weight: 600 });
      text(ctx, what, 36, y + 14, PAL.muted, { size: 17 });
      carDir(ctx, px, y - 6, F.ref(id), 1.1, sv);
      if (Math.abs(vel) > 0.2) arrow(ctx, px, y - 58, px + vel * 4, y - 58, C('velocity'), 5);
      arrow(ctx, px, y + 44, px + sa * am.v * 20, y + 44, C('acceleration'), 5);
      pair(ctx, 'v =', signed(vel, 1) + ' m/s', 1040, y - 16, C('velocity'), 20);
      pair(ctx, 'a =', signed(sa * am.v, 1) + ' m/s²', 1040, y + 18, C('acceleration'), 20);
      next.push({ x: px, y: y - 20, r: 60, name: '汽车 ' + lab + '，' + what });
    });
    hits = next;
    topline(ctx, done ? '经过 ' + fmt(T(), 1) + ' s 后，汽车（b）和（c）已停下，而（a）和（d）仍在加速。'
      : '经过 ' + fmt(tau, 1) + ' s 后，汽车（b）和（c）在减速，而加速度为负的是（b）和（d）。');
    /* the live velocities, written as v = v₀ + at for each of the four cars */
    const row = ([lab, sv, sa]) => `\\text{${lab}}\\ \\kv = ${tsigned(sv * v0.v, 1)} + (${tsigned(sa * am.v, 1)})(${fmt(tau, 1)}) = ${tsigned(sv * v0.v + sa * am.v * tau, 1)}\\ \\text{m/s}`;
    readout(d.readout, `\\begin{aligned} ${row(CARS[0])} \\\\ ${row(CARS[1])} \\\\ ${row(CARS[2])} \\\\ ${row(CARS[3])} \\end{aligned}`,
      '加速度指向左时为负，如（b）和（d），无论汽车是否在减速。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5), draw });
})();

/* =====================================================================
   The average-acceleration sims: a sprite on a strip whose velocity
   runs from v₀ to v_f in Δt, a velocity arrow that changes and an
   acceleration arrow that does not, and the v–t graph below. Built
   once and used for the racehorse (Figure 2.16) and the three subway
   sketches (Figures 2.19, 2.20 and 2.23). Finite motion, scrubber.
===================================================================== */
function accelSim(o) {
  const d = sim(o.id, 680);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: o.vmin, max: o.vmax, step: o.vstep, value: o.v0, unit: o.unit, dec: 1, onInput: reset });
  const vf = ctl(d.controls, { label: '\\kvf', cls: 'velocity', min: o.vmin, max: o.vmax, step: o.vstep, value: o.vf, unit: o.unit, dec: 1, onInput: reset });
  const dt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: o.dtmin, max: o.dtmax, step: o.dtstep, value: o.dt, unit: 's', dec: o.dtdec, onInput: reset });
  const cy = cycle(() => dt.v, 1.2); let ph = 0;
  function reset() { cy.reset(); }
  const f = o.unit === 'km/h' ? 1000 / 3600 : 1;              /* display unit to m/s */
  const abar = () => (vf.v - v0.v) / dt.v;                     /* in display units per second */
  const vel = (s) => v0.v + abar() * s, pos = (s) => f * (v0.v * s + 0.5 * abar() * s * s);
  const dirName = (x) => (x > 0 ? o.pos : o.neg);
  function story(a) {
    const same = Math.sign(v0.v) === Math.sign(vf.v) || v0.v === 0 || vf.v === 0;
    if (Math.abs(a) < 1e-9) return { short: '速度不变，所以平均加速度为零', long: '速度不变，所以平均加速度为零。' };
    if (!same) return { short: o.subject + '先减速到停下，然后向相反方向加速', long: '速度的正负号改变，所以' + o.subject + '先减速到停下，再向相反方向加速；加速度始终指向' + dirName(a) + '。' };
    if (Math.abs(vf.v) > Math.abs(v0.v)) return { short: '加速度指向' + dirName(a) + '，与速度同向，所以' + o.subject + '在加速', long: '加速度与速度的变化量方向相同，总是如此；这里两者都指向' + dirName(a) + '，即运动方向，所以' + o.subject + '加速。' };
    return { short: '加速度指向' + dirName(a) + '，与速度反向，所以' + o.subject + '在减速', long: '加速度与速度方向相反，所以' + o.subject + '在减速，其正负号为' + (a > 0 ? '正' : '负') + '，因为它指向' + dirName(a) + '。' };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= dt.v - 1e-9, vv = vel(tau), a = abar(), aSI = a * f;
    /* The strip runs a fixed stretch of road, given per figure, and never follows the run; a sprite
       that would leave it is held at the end of it and the headline says so. */
    const L = 80, R = 1320, y = 250, X = (m) => L + 60 + ((R - L - 120) * (m - o.xlo)) / (o.xhi - o.xlo);
    strip(ctx, L, R, y, 52);
    const xstep = (o.xhi - o.xlo) / 6;
    scale(ctx, X, o.xlo, o.xhi, xstep, y + 26, 'm', 1);
    arrow(ctx, 1190, y - 55, 1280, y - 55, PAL.ink, 3); text(ctx, o.axis, 1290, y - 55, PAL.ink, { size: 20, weight: 600 });
    const here = pos(tau), off = here < o.xlo || here > o.xhi;
    const px = X(Math.min(o.xhi, Math.max(o.xlo, here))), dir = vv !== 0 ? Math.sign(vv) : vf.v - v0.v !== 0 ? Math.sign(vf.v - v0.v) : 1;
    if (o.sprite === 'horse') F.horse(ctx, px, y + 4, 1, ph, F.ref('horse'), dir);
    else { ctx.save(); ctx.translate(px, 0); ctx.scale(dir < 0 ? -1 : 1, 1); train(ctx, 0, y + 6, F.ref('train'), 1); ctx.restore(); }
    /* the velocity arrow above and the acceleration arrow below */
    const kv = 260 / o.vmax;
    if (Math.abs(vv) > 0.05) arrow(ctx, px, y - 108, px + vv * kv, y - 108, C('velocity'), 5);
    text(ctx, 'v = ' + num(vv, 1) + ' ' + o.unit, px + (vv >= 0 ? -6 : 6), y - 140, C('velocity'), { align: vv >= 0 ? 'left' : 'right', weight: 600 });
    const ka = Math.min(300, Math.abs(a) * o.ka);
    if (Math.abs(a) > 1e-9) arrow(ctx, px, y + 84, px + Math.sign(a) * ka, y + 84, C('acceleration'), 5);
    text(ctx, 'ā = ' + sig3s(aSI) + ' m/s²', px + (a >= 0 ? -6 : 6), y + 116, C('acceleration'), { align: a >= 0 ? 'left' : 'right', weight: 600 });
    /* v against t, on axes fixed once from the slider ranges: no value the sliders reach falls outside them */
    const box = { l: 160, r: 1240, t: 420, b: 600 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, o.dtmax], [o.vmin, o.vmax], { xl: 't (s)', xc: C('time'), yl: 'v (' + o.unit + ')', yc: C('velocity'), nx: o.dtmax <= 5 ? o.dtmax : 6, ny: 4, fx: (t) => fmt(t, 0) });
    line(ctx, GX(0), GY(v0.v), GX(dt.v), GY(vf.v), C('velocity'), 5);
    dot(ctx, GX(0), GY(v0.v), C('velocity'), false, 10); dot(ctx, GX(dt.v), GY(vf.v), C('velocity'), true, 10);
    /* the endpoint labels sit on the far side of the line from each other and stay inside the box, clear of the tick labels */
    const lab = labeller(ctx, 680), up = vf.v >= v0.v ? -1 : 1;
    lab.block(box.l - 60, box.b, box.r + 140, box.b + 70);
    for (let i = 0; i <= 20; i++) { const u = (dt.v * i) / 20, gy = GY(vel(u)); lab.block(GX(u) - 8, gy - 8, GX(u) + 8, gy + 8); } lab.block(box.l - 60, box.t, box.l, box.b); lab.block(box.l - 20, box.t - 40, box.l + 110, box.t - 6);
    lab.add('v_0', GX(0), GY(v0.v), 0.4, -up, C('velocity'), 24, 24);
    lab.add('v_f', GX(dt.v), GY(vf.v), 0.6, -0.8 * up, C('velocity'), 24, 24);
    lab.add('斜率 = ā', GX(dt.v / 2), GY(vel(dt.v / 2)), 0.3, -up, C('acceleration'), 20, 24);
    line(ctx, GX(tau), box.b, GX(tau), GY(vv), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(vv), PAL.ink, true, 9);
    lab.flush();
    const st = story(a);
    topline(ctx, '经过 ' + fmt(tau, o.dtdec) + ' s 后，速度为 ' + num(vv, 1) + ' ' + o.unit + '，' + st.short + (off ? '，并且图中的形象被固定在所画道路的尽头。' : '。'));
    readout(d.readout, o.readout(v0.v, vf.v, dt.v, aSI), o.small ? o.small(aSI, st) : st.long);
  }
  register(d.fig, { update: (dt2) => { cy.step(dt2, () => dt.v / 5); if (cy.tau < dt.v && Math.abs(vel(cy.tau)) > 0.05) ph += dt2 * 12; }, draw });
}
/* the racehorse of Example 2.1, in m/s with east positive */
accelSim({
  id: 'sim-racehorse', sprite: 'horse', unit: 'm/s', vmin: -20, vmax: 20, vstep: 0.5, v0: 0, vf: -15, dtmin: 0.5, dtmax: 5, dtstep: 0.05, dt: 1.8, dtdec: 2,
  xlo: -45, xhi: 45, ka: 14, adec: 2, vpad: 2, axis: '东（+）', pos: '东', neg: '西', subject: '这匹马',
  readout: (v0, vf, dt, a) => `\\kab = \\frac{\\kdv}{\\kdt} = \\frac{\\kvf - \\kvo}{\\kdt} = \\frac{(${tnum(vf, 1)}) - (${tnum(v0, 1)})\\ \\text{m/s}}{${fmt(dt, 2)}\\ \\text{s}} = ${tsig3(a)}\\ \\text{m/s}^2`,
  small: (a, st) => (Math.abs(a) > 1e-9 ? '加速度为 ' + sig3(Math.abs(a)) + ' m/s²、方向正' + (a < 0 ? '西' : '东') + '，意味着这匹马每秒获得 ' + sig3(Math.abs(a)) + ' m/s 向' + (a < 0 ? '西' : '东') + '的速度。' : st.long),
});
/* the subway train, in km/h with right positive, converted to m/s² in the readout as the book does it */
const trainReadout = (v0, vf, dt, a) => `\\kab = \\frac{\\kdv}{\\kdt} = \\left(\\frac{${tsigned(vf - v0, 1)}\\ \\text{km/h}}{${fmt(dt, 2)}\\ \\text{s}}\\right)\\left(\\frac{10^{3}\\ \\text{m}}{1\\ \\text{km}}\\right)\\left(\\frac{1\\ \\text{h}}{3600\\ \\text{s}}\\right) = ${tsig3s(a)}\\ \\text{m/s}^2`;
/* The velocity slider runs to ±40 km/h and the time slider to 30 s, which hold every number the
   subway examples use with room to spare; the graph axes are those ranges, fixed. */
const TRAIN = { sprite: 'train', unit: 'km/h', vmin: -40, vmax: 40, vstep: 0.5, dtmin: 1, dtmax: 30, dtstep: 0.5, dtdec: 2, ka: 60, adec: 3, vpad: 5, axis: '+x', pos: '右', neg: '左', subject: '列车', readout: trainReadout };
accelSim({ ...TRAIN, id: 'sim-subway-speeding-up', v0: 0, vf: 30, dt: 20, xlo: 0, xhi: 240 });
accelSim({ ...TRAIN, id: 'sim-subway-slowing-down', v0: 30, vf: 0, dt: 8, xlo: 0, xhi: 120 });
accelSim({ ...TRAIN, id: 'sim-subway-deceleration', v0: -20, vf: 0, dt: 10, xlo: -120, xhi: 0 });

/* =====================================================================
   FIGURE 2.17: instantaneous acceleration. The book's two a–t graphs
   side by side; an interval is chosen, its average is a dashed level,
   and the area under each curve fills in as the clock runs, since that
   area is the change in velocity. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = sim('sim-instantaneous', 560);
  const t1 = ctl(d.controls, { label: '\\kt_{1}', cls: 'time', min: 0, max: 5.5, step: 0.1, value: 0, unit: 's', dec: 1, onInput: reset, aria: '时间间隔的起点' });
  const t2 = ctl(d.controls, { label: '\\kt_{2}', cls: 'time', min: 0.5, max: 6, step: 0.1, value: 3, unit: 's', dec: 1, onInput: reset, aria: '时间间隔的终点' });
  const lo = () => Math.min(t1.v, t2.v), hi = () => Math.max(t1.v, t2.v, lo() + 0.1);
  const cy = cycle(() => hi() - lo(), 1.2);
  function reset() { cy.reset(); }
  const aA = (t) => 1.78 - 0.27 * Math.cos((TAU * t) / 2.9);
  const STEPS = [[0, 3], [1, -2], [3, 0], [4.2, 1.5], [4.8, 5], [5.5, -4]];
  const aB = (t) => STEPS.reduce((v, [from, a]) => (t >= from ? a : v), 3);
  function integral(f, from, to, n = 300) { if (to <= from) return 0; let s = 0; const h = (to - from) / n; for (let i = 0; i < n; i++) s += f(from + (i + 0.5) * h); return s * h; }
  const GRAPHS = [
    { name: '(a)', f: aA, tmax: 5, box: { l: 130, r: 640, t: 120, b: 430 }, yr: [0, 3], ny: 3 },
    { name: '(b)', f: aB, tmax: 6, box: { l: 800, r: 1320, t: 120, b: 430 }, yr: [-6, 6], ny: 6 },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), a0 = lo(), a1 = hi(), now = a0 + tau, done = tau >= a1 - a0 - 1e-9;
    const res = GRAPHS.map((g) => {
      const from = Math.min(a0, g.tmax), to = Math.min(a1, g.tmax), cur = Math.min(now, g.tmax);
      const { X, Y } = axes(ctx, g.box, [0, g.tmax], g.yr, { xl: 't (s)', xc: C('time'), yl: 'a (m/s²)', yc: C('acceleration'), nx: g.tmax, ny: g.ny, fx: (t) => fmt(t, 1), fy: (v) => fmt(v, 1) });
      text(ctx, g.name, (g.box.l + g.box.r) / 2, g.box.b + 58, PAL.ink, { size: 20, weight: 600, align: 'center' });
      /* The area under an acceleration-time curve is the change in velocity, but the book does not
         reach that result until it works with the equations of motion, so nothing here is shaded and
         the change in velocity is read from the definition of average acceleration instead. */
      /* the interval, the average over it, and the curve */
      line(ctx, X(from), g.box.t, X(from), g.box.b, C('time'), 3, [4, 8]); line(ctx, X(to), g.box.t, X(to), g.box.b, C('time'), 3, [4, 8]);
      curve(ctx, g.f, 0, g.tmax, X, Y, C('acceleration'), 5, 600);
      const dv = integral(g.f, from, to), ab = to > from ? dv / (to - from) : g.f(from);
      line(ctx, X(from), Y(ab), X(to), Y(ab), C('acceleration'), 3, [10, 10]);
      text(ctx, 'ā = ' + num(ab, 2) + ' m/s²', X(to) + (to < g.tmax - 1.2 ? 12 : -12), Y(ab) - 20, C('acceleration'), { size: 18, weight: 600, align: to < g.tmax - 1.2 ? 'left' : 'right', bg: alpha(PAL.panel, 0.8) });
      dot(ctx, X(cur), Y(g.f(cur)), PAL.ink, true, 9);
      text(ctx, '此刻 a = ' + num(g.f(cur), 2) + ' m/s²', g.box.l + 14, g.box.t + 22, C('acceleration'), { size: 18, weight: 600, bg: alpha(PAL.panel, 0.8) });
      return { dv, ab, from, to };
    });
    headline(ctx, done ? '在 ' + fmt(a0, 1) + ' 到 ' + fmt(a1, 1) + ' s 内，平均加速度在左图为 ' + num(res[0].ab, 2) + ' m/s²，在右图为 ' + num(res[1].ab, 2) + ' m/s²。'
      : '在 ' + fmt(now, 1) + ' s 时，加速度在左图为 ' + num(GRAPHS[0].f(Math.min(now, GRAPHS[0].tmax)), 2) + ' m/s²，在右图为 ' + num(GRAPHS[1].f(Math.min(now, GRAPHS[1].tmax)), 2) + ' m/s²。');
    readout(d.readout, `\\kab = \\frac{\\kdv}{\\kdt}:\\quad \\text{(a)}\\ \\frac{${tsigned(res[0].dv, 1)}\\ \\text{m/s}}{${fmt(res[0].to - res[0].from, 1)}\\ \\text{s}} = ${tnum(res[0].ab, 2)}\\ \\text{m/s}^2 \\qquad \\text{(b)}\\ \\frac{${tsigned(res[1].dv, 1)}\\ \\text{m/s}}{${fmt(res[1].to - res[1].from, 1)}\\ \\text{s}} = ${tnum(res[1].ab, 2)}\\ \\text{m/s}^2`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (hi() - lo()) / 5), draw });
})();

/* =====================================================================
   FIGURE 2.18: the train's two trips. A displacement is a difference of
   two positions and has no time in it, so this is a still picture that
   answers its four sliders: no cycle, no transport.
===================================================================== */
(function () {
  const d = sim('sim-subway-displacement', 600);
  const x0 = ctl(d.controls, { label: '\\kxo', cls: 'position', min: 0, max: 10, step: 0.05, value: 4.7, unit: 'km', dec: 2 });
  const xf = ctl(d.controls, { label: '\\kxf', cls: 'position', min: 0, max: 10, step: 0.05, value: 6.7, unit: 'km', dec: 2 });
  const x0p = ctl(d.controls, { label: "\\kxo'", cls: 'position', min: 0, max: 10, step: 0.05, value: 5.25, unit: 'km', dec: 2, aria: '行程（b）的初位置' });
  const xfp = ctl(d.controls, { label: "\\kxf'", cls: 'position', min: 0, max: 10, step: 0.05, value: 3.75, unit: 'km', dec: 2, aria: '行程（b）的末位置' });
  const L = 130, R = 1310, X = (km) => L + ((R - L) * km) / 10;
  function trip(ctx, lab, a, b, y, prime) {
    const dx = b - a;
    strip(ctx, L, R, y, 44); scale(ctx, X, 0, 10, 1, y + 22, 'km', 2);
    text(ctx, lab, 40, y - 14, PAL.ink, { weight: 600 });
    train(ctx, X(a), y + 6, alpha(F.ref('train'), 0.55), 0.9, true); train(ctx, X(b), y + 6, F.ref('train'), 0.9);
    dot(ctx, X(a), y, C('position'), false, 9); dot(ctx, X(b), y, C('position'), true, 9);
    if (Math.abs(dx) > 0.15) { arrow(ctx, X(a), y - 100, X(b), y - 100, C('position'), 5); text(ctx, 'Δx' + prime + ' = ' + signed(dx, 2) + ' km', (X(a) + X(b)) / 2, y - 126, C('position'), { align: 'center', weight: 600 }); }
    else text(ctx, 'Δx' + prime + ' = ' + signed(dx, 2) + ' km', X(a), y - 126, C('position'), { align: 'center', weight: 600 });
    line(ctx, X(a), y - 88, X(a), y + 72, C('position'), 2, [4, 8]); line(ctx, X(b), y - 88, X(b), y + 100, C('position'), 2, [4, 8]);
    text(ctx, 'x' + prime + '_0 = ' + fmt(a, 2) + ' km', X(a), y + 82, C('position'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'x' + prime + '_f = ' + fmt(b, 2) + ' km', X(b), y + 110, C('position'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    return dx;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const dxa = trip(ctx, '(a)', x0.v, xf.v, 215, ''), dxb = trip(ctx, '(b)', x0p.v, xfp.v, 470, '′');
    topline(ctx, '行程（a）的 Δx = ' + fmt(xf.v, 2) + ' − ' + fmt(x0.v, 2) + ' = ' + signed(dxa, 2) + ' km，行程（b）的 Δx′ = ' + fmt(xfp.v, 2) + ' − ' + fmt(x0p.v, 2) + ' = ' + signed(dxb, 2) + ' km。');
    readout(d.readout, `\\kdx = ${fmt(xf.v, 2)} - ${fmt(x0.v, 2)} = ${tsigned(dxa, 2)}\\ \\text{km} \\qquad \\kdx' = ${fmt(xfp.v, 2)} - ${fmt(x0p.v, 2)} = ${tsigned(dxb, 2)}\\ \\text{km}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 2.21: the whole journey of Examples 2.4 and 2.5 on one clock,
   with position, velocity and acceleration against time below the
   strip. Finite motion, scrubber.
===================================================================== */
(function () {
  const d = sim('sim-subway-graphs', 1060);
  /* The four slider ranges are cut so that every graph below can carry a fixed axis that no setting
     runs past: at most 40 km/h, 30 s of speeding up, 30 s steady and 15 s of braking, never less
     than 4 s of braking, which together reach 583 m in 75 s at 11.1 m/s and ±2.8 m/s². */
  const vt = ctl(d.controls, { label: '\\kv_{\\text{最大}}', cls: 'velocity', min: 10, max: 40, step: 1, value: 30, unit: 'km/h', dec: 1, onInput: reset, aria: '最大速率' });
  const t1 = ctl(d.controls, { label: '\\kt_{\\text{加速}}', cls: 'time', min: 5, max: 30, step: 0.5, value: 20, unit: 's', dec: 1, onInput: reset, aria: '加速所用的时间' });
  const t2 = ctl(d.controls, { label: '\\kt_{\\text{恒定}}', cls: 'time', min: 0, max: 30, step: 0.5, value: 20, unit: 's', dec: 1, onInput: reset, aria: '速度恒定的时间' });
  const t3 = ctl(d.controls, { label: '\\kt_{\\text{停止}}', cls: 'time', min: 4, max: 15, step: 0.5, value: 8, unit: 's', dec: 2, onInput: reset, aria: '停下所用的时间' });
  const T = () => t1.v + t2.v + t3.v;
  const cy = cycle(T, 1.4);
  function reset() { cy.reset(); }
  const vSI = () => vt.v / 3.6, a1 = () => vSI() / t1.v, a3 = () => -vSI() / t3.v;
  function vel(s) { if (s <= t1.v) return a1() * s; if (s <= t1.v + t2.v) return vSI(); return Math.max(0, vSI() + a3() * (s - t1.v - t2.v)); }
  function acc(s) { if (s < t1.v) return a1(); if (s <= t1.v + t2.v) return 0; return a3(); }
  function pos(s) {
    const x1 = 0.5 * a1() * t1.v * t1.v, x2 = x1 + vSI() * t2.v;
    if (s <= t1.v) return 0.5 * a1() * s * s; if (s <= t1.v + t2.v) return x1 + vSI() * (s - t1.v);
    const u = Math.min(s - t1.v - t2.v, t3.v); return x2 + vSI() * u + 0.5 * a3() * u * u;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= T() - 1e-9, xT = pos(T()), vv = vel(tau), aa = acc(tau);
    const phase = tau < t1.v ? 'up' : tau <= t1.v + t2.v ? 'steady' : 'stop';
    /* the strip is a fixed 0 to 600 m, which holds the longest journey the sliders allow */
    const XMAX = 600;
    const L = 80, R = 1320, y = 245, X = (m) => L + ((R - L) * m) / XMAX;
    strip(ctx, L, R, y, 52);
    scale(ctx, X, 0, XMAX, 100, y + 26, 'm', 1);
    const px = X(pos(tau));
    train(ctx, px, y + 6, F.ref('train'), 1);
    if (vv > 0.05) arrow(ctx, px, y - 104, px + vv * 14, y - 104, C('velocity'), 5);
    text(ctx, 'v = ' + fmt(vv, 2) + ' m/s (' + fmt(vv * 3.6, 1) + ' km/h)', px - 6, y - 132, C('velocity'), { weight: 600 });
    if (Math.abs(aa) > 1e-9) { arrow(ctx, px, y - 78, px + aa * 110, y - 78, C('acceleration'), 5); text(ctx, 'a', px + aa * 110 + 16 * Math.sign(aa), y - 78, C('acceleration'), { weight: 600, size: 24, align: 'center' }); }
    /* the three graphs, on ranges fixed once from the slider maxima: 75 s, 600 m, 12 m/s, ±3 m/s² */
    const TMAX = 75, tr = [0, TMAX], tn = 5;
    const G = [
      { box: { l: 160, r: 1240, t: 380, b: 530 }, yl: 'x (m)', yc: C('position'), yr: { lo: 0, hi: XMAX, n: 3 }, f: pos, fy: (v) => fmt(v, 0) },
      { box: { l: 160, r: 1240, t: 605, b: 755 }, yl: 'v (m/s)', yc: C('velocity'), yr: { lo: 0, hi: 12, n: 4 }, f: vel, fy: (v) => fmt(v, 1) },
      { box: { l: 160, r: 1240, t: 830, b: 980 }, yl: 'a (m/s²)', yc: C('acceleration'), yr: { lo: -3, hi: 3, n: 6 }, f: acc, fy: (v) => fmt(v, 1) },
    ];
    G.forEach((g) => {
      const { X: GX, Y: GY } = axes(ctx, g.box, tr, [g.yr.lo, g.yr.hi], { xl: 't (s)', xc: C('time'), yl: g.yl, yc: g.yc, nx: tn, ny: g.yr.n, fx: (t) => fmt(t, 0), fy: g.fy });
      line(ctx, GX(t1.v), g.box.t, GX(t1.v), g.box.b, PAL.muted, 1.5, [6, 6]); line(ctx, GX(t1.v + t2.v), g.box.t, GX(t1.v + t2.v), g.box.b, PAL.muted, 1.5, [6, 6]);
      curve(ctx, g.f, 0, T(), GX, GY, g.yc, 5, 400);
      line(ctx, GX(tau), g.box.b, GX(tau), GY(g.f(tau)), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(g.f(tau)), PAL.ink, true, 9);
    });
    const GX = (t) => 160 + ((1240 - 160) * t) / TMAX;
    text(ctx, '加速', GX(t1.v / 2), 334, PAL.muted, { size: 17, align: 'center' });
    if (t2.v > 4) text(ctx, '恒定速度', GX(t1.v + t2.v / 2), 334, PAL.muted, { size: 17, align: 'center' });
    text(ctx, '停止', GX(t1.v + t2.v + t3.v / 2), 334, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, done ? '在 ' + fmt(T(), 1) + ' s 内，列车行驶了 ' + fmt(xT, 0) + ' m，加速 ' + fmt(t1.v, 1) + ' s，平稳行驶 ' + fmt(t2.v, 1) + ' s，并在 ' + fmt(t3.v, 2) + ' s 内停下。'
      : phase === 'up' ? '经过 ' + fmt(tau, 1) + ' s 后，列车在加速，所以位置曲线向上弯曲，加速度为 ' + sig3s(a1()) + ' m/s²。'
        : phase === 'steady' ? '经过 ' + fmt(tau, 1) + ' s 后，速度恒定，所以加速度为零，位置均匀增大。'
          : '经过 ' + fmt(tau, 1) + ' s 后，列车在制动，所以速度减小，加速度为 ' + sig3s(a3()) + ' m/s²。');
    /* the conversion factors are carried, so km/h over s really does come out in m/s² */
    readout(d.readout, `\\begin{aligned} \\ka_{\\text{加速}} &= \\left(\\frac{+${fmt(vt.v, 1)}\\ \\text{km/h}}{${fmt(t1.v, 1)}\\ \\text{s}}\\right)\\left(\\frac{10^{3}\\ \\text{m}}{1\\ \\text{km}}\\right)\\left(\\frac{1\\ \\text{h}}{3600\\ \\text{s}}\\right) = ${tsig3s(a1())}\\ \\text{m/s}^2 \\\\ \\ka_{\\text{停止}} &= \\left(\\frac{-${fmt(vt.v, 1)}\\ \\text{km/h}}{${fmt(t3.v, 2)}\\ \\text{s}}\\right)\\left(\\frac{10^{3}\\ \\text{m}}{1\\ \\text{km}}\\right)\\left(\\frac{1\\ \\text{h}}{3600\\ \\text{s}}\\right) = ${tsig3s(a3())}\\ \\text{m/s}^2 \\end{aligned}`,
      '在 ' + fmt(t1.v, 1) + ' s 到 ' + fmt(t1.v + t2.v, 1) + ' s 之间，速度保持为 ' + fmt(vSI(), 2) + ' m/s，所以加速度为零，位置以恒定的变化率改变了 ' + fmt(vSI() * t2.v, 0) + ' m。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / 5.5), draw });
})();

/* =====================================================================
   FIGURE 2.22: the train's trip to the left, for Example 2.6. The train
   travels from x′₀ to x′_f in Δt at a steady rate; the x–t graph below
   is a straight line whose slope is the average velocity. Finite
   motion, scrubber.
===================================================================== */
(function () {
  const d = sim('sim-subway-velocity', 670);
  const x0 = ctl(d.controls, { label: "\\kxo'", cls: 'position', min: 0, max: 10, step: 0.05, value: 5.25, unit: 'km', dec: 2, onInput: reset, aria: '初位置' });
  const xf = ctl(d.controls, { label: "\\kxf'", cls: 'position', min: 0, max: 10, step: 0.05, value: 3.75, unit: 'km', dec: 2, onInput: reset, aria: '末位置' });
  const dt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 1, max: 15, step: 0.25, value: 5, unit: 'min', dec: 2, onInput: reset });
  const cy = cycle(() => dt.v, 1.2);
  function reset() { cy.reset(); }
  const L = 130, R = 1310, X = (km) => L + ((R - L) * km) / 10;
  const vb = () => ((xf.v - x0.v) / dt.v) * 60;          /* km/h */
  const pos = (s) => x0.v + (xf.v - x0.v) * (s / dt.v);
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= dt.v - 1e-9, dx = xf.v - x0.v, xm = pos(tau), v = vb();
    const y = 268;   /* low enough that the average-velocity label clears a two-line headline */
    strip(ctx, L, R, y, 44); scale(ctx, X, 0, 10, 1, y + 22, 'km', 2);
    dot(ctx, X(x0.v), y, C('position'), false, 9); dot(ctx, X(xf.v), y, C('position'), true, 9);
    line(ctx, X(x0.v), y - 60, X(x0.v), y + 72, C('position'), 2, [4, 8]); line(ctx, X(xf.v), y - 60, X(xf.v), y + 100, C('position'), 2, [4, 8]);
    text(ctx, 'x′_0 = ' + fmt(x0.v, 2) + ' km', X(x0.v), y + 82, C('position'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'x′_f = ' + fmt(xf.v, 2) + ' km', X(xf.v), y + 110, C('position'), { weight: 600, size: 20, align: 'center', bg: PAL.panel });
    if (Math.abs(dx) > 0.15) hbracket(ctx, X(x0.v), X(xf.v), y - 70, C('position'), 'Δx′ = ' + signed(dx, 2) + ' km');
    const px = X(xm);
    /* the train faces the way it is going, so a trip to the left is not drawn driving backwards */
    ctx.save(); ctx.translate(px, 0); ctx.scale(dx < 0 ? -1 : 1, 1); train(ctx, 0, y + 6, F.ref('train'), 0.9); ctx.restore();
    if (Math.abs(v) > 0.2) arrow(ctx, px, y - 120, px + v * 4, y - 120, C('velocity'), 5);
    text(ctx, 'v̄ = ' + num(v, 1) + ' km/h', Math.min(LW - 16, Math.max(16, px + (v >= 0 ? -6 : 6))), y - 150, C('velocity'), { align: v >= 0 ? 'left' : 'right', weight: 600 });
    /* x against t, on axes fixed at 0 to 15 min and the 0 to 10 km of the strip above, so the graph
       and the strip are read on one scale and neither follows the sliders */
    const box = { l: 160, r: 1240, t: 420, b: 600 };
    const { X: GX, Y: GY } = axes(ctx, box, [0, 15], [0, 10], { xl: 't (min)', xc: C('time'), yl: 'x (km)', yc: C('position'), nx: 5, ny: 5, fx: (t) => fmt(t, 0), fy: (v2) => fmt(v2, 0) });
    line(ctx, GX(0), GY(x0.v), GX(dt.v), GY(xf.v), C('position'), 5);
    dot(ctx, GX(0), GY(x0.v), C('position'), false, 10); dot(ctx, GX(dt.v), GY(xf.v), C('position'), true, 10);
    const lab = labeller(ctx, 670);
    lab.block(box.l, box.b, box.r, box.b + 40);
    lab.add('斜率 = v̄ = ' + num(v, 1) + ' km/h', GX(dt.v * 0.6), GY(pos(dt.v * 0.6)), 0.4, dx <= 0 ? 1 : -1, C('velocity'), 20, 28);
    line(ctx, GX(tau), box.b, GX(tau), GY(xm), C('time'), 3, [4, 8]); dot(ctx, GX(tau), GY(xm), PAL.ink, true, 9);
    lab.flush();
    topline(ctx, done ? '在 ' + fmt(dt.v, 2) + ' min 内，列车从 ' + fmt(x0.v, 2) + ' km 行驶到 ' + fmt(xf.v, 2) + ' km，位移为 ' + signed(dx, 2) + ' km，所以它的平均速度为 ' + num(v, 1) + ' km/h。'
      : '经过 ' + fmt(tau, 2) + ' min 后，列车位于 ' + fmt(xm, 2) + ' km 处，已完成百分之 ' + fmt((100 * tau) / dt.v, 0) + '，这趟行程共 ' + signed(dx, 2) + ' km。');
    readout(d.readout, `\\kvb = \\frac{\\kdx'}{\\kdt} = \\left(\\frac{${tnum(dx, 2)}\\ \\text{km}}{${fmt(dt.v, 2)}\\ \\text{min}}\\right)\\left(\\frac{60\\ \\text{min}}{1\\ \\text{h}}\\right) = ${tnum(v, 1)}\\ \\text{km/h}`,
      v < 0 ? '负的速度表示向左运动。' : v > 0 ? '正的速度表示向右运动。' : '列车回到出发的位置，所以它的平均速度为零。');
  }
  register(d.fig, { update: (dt2) => cy.step(dt2, () => dt.v / 5), draw });
})();
};
