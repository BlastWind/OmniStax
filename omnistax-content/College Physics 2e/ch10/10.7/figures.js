/* Figures for section 10.7 Gyroscopic Effects: Vector Aspects of Angular Momentum.
   Boots against the section's text article. Two still figures from a locked
   view (the right-hand rule and the direction of a torque), one moving
   figure from a locked view (the bicycle wheel that swings toward the woman
   instead of tipping) and one full three-dimensional scene (the precessing
   gyroscope), the chapter's one, argued in plan.md under root rule 28.3. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, topline, labeller, silhouette, view, face, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180, TAU = 2 * Math.PI, G = 9.80;
const unit = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const add = (a, b, k = 1) => [a[0] + k * b[0], a[1] + k * b[1], a[2] + k * b[2]];
/* the points of a circle of radius R about c in the plane spanned by the unit vectors u and v, from angle a0 to a1 */
function ring(c, R, u, v, n = 64, a0 = 0, a1 = TAU) {
  const pts = [];
  for (let i = 0; i <= n; i++) { const t = a0 + ((a1 - a0) * i) / n; pts.push(add(add(c, u, R * Math.cos(t)), v, R * Math.sin(t))); }
  return pts;
}
/* a stroked polyline on the canvas */
function poly(ctx, pts, color, w, close = false) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); if (close) ctx.closePath(); ctx.stroke(); ctx.restore();
}
/* A short cylinder standing on a vertical axis, seen from a locked view: the far
   half of its wall, the bottom rim, the near half of the wall over it and the top
   face last. `e` is the eye's horizontal direction, which says which half is near. */
function drum(ctx, V, c, R, h, e) {
  const X = [1, 0, 0], Z = [0, 0, 1], top = add(c, [0, 1, 0], h);
  const phi = Math.atan2(e[2], e[0]);
  const near = (cc) => ring(cc, R, X, Z, 40, phi - Math.PI / 2, phi + Math.PI / 2);
  const far = (cc) => ring(cc, R, X, Z, 40, phi + Math.PI / 2, phi + (3 * Math.PI) / 2);
  const side = (a, b) => [...a.map(V.P), ...b.map(V.P).reverse()];
  face(ctx, side(far(c), far(top)), V.shade([-e[0], 0, -e[2]]) + 0.1, 0);
  face(ctx, side(near(c), near(top)), V.shade([e[0], 0.2, e[2]]), 2.5);
  face(ctx, ring(top, R, X, Z).map(V.P), V.shade([0, 1, 0]), 2.5);
}
/* an arrow along a projected direction with its length in canvas units */
function arrowTo(ctx, V, from, dir, len, color, w = 5) {
  const a = V.P(from), b = V.P(add(from, unit(dir), 1e-3)), dx = b[0] - a[0], dy = b[1] - a[1], q = Math.hypot(dx, dy) || 1;
  const tip = [a[0] + (dx / q) * len, a[1] + (dy / q) * len];
  if (len > 6) arrow(ctx, a[0], a[1], tip[0], tip[1], color, w);
  return tip;
}
/* a curved arrow of the turning about a vertical axis, drawn on the near half of a
   horizontal circle: ccw is the sense seen from above, which moves the near rim to the right */
function turnArrow(ctx, V, c, R, e, ccw, color, w = 4, far = false) {
  const phi = Math.atan2(e[2], e[0]) + (far ? Math.PI : 0);
  const a0 = phi + 0.35 * Math.PI, a1 = phi - 0.35 * Math.PI;
  const pts = ring(c, R, [1, 0, 0], [0, 0, 1], 30, ccw ? a0 : a1, ccw ? a1 : a0).map(V.P);
  poly(ctx, pts.slice(0, -2), color, w);
  const n = pts.length, p = pts[n - 3], q = pts[n - 1];
  arrow(ctx, p[0], p[1], q[0], q[1], color, w);
}

/* =====================================================================
   Figure 10.37 · sim-right-hand-rule · still · locked view
   A disk turning about a vertical axis and a right hand curled the way its
   rim moves. The angular velocity and the angular momentum both stand along
   the axis in the direction of the thumb; the sense of the turn is a choice
   and the angular velocity a slider. The disk is 2.0 kg and 0.25 m, so
   I = ½MR² = 0.0625 kg·m², in ink. The arrows are scaled from the slider's
   maximum: ω = 20 rad/s and L = 1.25 kg·m²/s both reach 200 units.
===================================================================== */
(function () {
  const H = 520;
  const d = sim('sim-right-hand-rule', H);
  const sense = choice(d.controls, { label: '\\text{Seen from above}', options: [{ value: 'ccw', label: 'counterclockwise' }, { value: 'cw', label: 'clockwise' }], value: 'ccw', aria: 'the sense of the rotation seen from above' });
  const w = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 2, max: 20, step: 0.5, value: 10, unit: 'rad/s', dec: 1, aria: 'the angular velocity of the disk' });
  const M = 2.0, R = 0.25, I = 0.5 * M * R * R;
  const V = view({ yaw: 0.28, pitch: 0.42, dist: 1500, cx: 430, cy: 330 });
  const E = [Math.sin(0.28), 0, Math.cos(0.28)];
  const RD = 190, HD = 34, ARROW = 200;
  /* a right hand, drawn about the point (0, 0) of its own frame: the thumb up
     along the axis, four fingers curled across the front of the axis toward
     the right, which is the way the near rim moves when the turn is
     counterclockwise seen from above. The clockwise hand is this one turned
     through 180° in the plane of the page, which is still a right hand. */
  function hand(ctx, x, y, cw) {
    ctx.save(); ctx.translate(x, y); if (cw) ctx.rotate(Math.PI);
    ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft2; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    /* the palm, a rounded slab to the left of the axis */
    ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(-92, -40); ctx.lineTo(-30, -52); ctx.quadraticCurveTo(-8, -52, -6, -30); ctx.lineTo(-6, 90); ctx.quadraticCurveTo(-8, 112, -30, 114); ctx.lineTo(-96, 108); ctx.quadraticCurveTo(-118, 100, -118, 70); ctx.lineTo(-118, -10); ctx.quadraticCurveTo(-116, -38, -92, -40);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    /* four fingers, each an arc round the front of the axis, wrapping from the palm to the right */
    for (let k = 0; k < 4; k++) {
      const cy = -26 + k * 40, a = 58 - k * 3, b = 22;
      ctx.lineWidth = 26; ctx.strokeStyle = PAL.soft2; ctx.beginPath(); ctx.ellipse(-6, cy, a, b, 0, 0.62 * Math.PI, 2.02 * Math.PI, false); ctx.stroke();
      ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(-6, cy, a, b + 13, 0, 0.6 * Math.PI, 2.02 * Math.PI, false); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(-6, cy, a, b - 13, 0, 0.66 * Math.PI, 2.0 * Math.PI, false); ctx.stroke();
      ctx.beginPath(); ctx.arc(-6 + a, cy, 13, -Math.PI / 2, Math.PI / 2); ctx.stroke();
    }
    /* the thumb, up along the axis from the top of the palm */
    ctx.lineWidth = 30; ctx.strokeStyle = PAL.soft2; ctx.beginPath(); ctx.moveTo(-40, -44); ctx.lineTo(-22, -136); ctx.stroke();
    ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(-56, -42); ctx.lineTo(-38, -138); ctx.arc(-22, -136, 16, Math.PI, 0); ctx.lineTo(-7, -50); ctx.stroke();
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ccw = sense.value === 'ccw', up = ccw ? 1 : -1;
    const L = I * w.v;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 96);
    /* the disk */
    const c = [0, -HD / 2, 0];
    drum(ctx, V, c, RD, HD, E);
    turnArrow(ctx, V, [0, HD / 2 + 4, 0], RD * 0.78, E, ccw, PAL.ink, 4);
    /* the axis through the disk, faint, then ω and L standing along it from the top face */
    const top = [0, HD / 2, 0], bottom = [0, -HD / 2 - 40, 0];
    const pa = V.P(top), pb = V.P(bottom), axisTop = V.P([0, HD / 2 + 300, 0]), axisBot = V.P([0, -HD / 2 - 300, 0]);
    line(ctx, axisTop[0], axisTop[1], axisBot[0], axisBot[1], alpha(PAL.ink, 0.3), 2, [6, 8]);
    const len = ARROW * (w.v / 20);
    const start = up > 0 ? top : bottom;
    const tw = arrowTo(ctx, V, add(start, [1, 0, 0], -14), [0, up, 0], len, C('angular-rate'), 5);
    const tl = arrowTo(ctx, V, add(start, [1, 0, 0], 14), [0, up, 0], len, C('angular-momentum'), 5);
    lab.add('ω', tw[0], tw[1], -1, 0, C('angular-rate'), 24, 26);
    lab.add('L = Iω', tl[0], tl[1], 1, 0, C('angular-momentum'), 24, 26);
    const rim = V.P([RD * 0.55, HD / 2 + 4, RD * 0.55]);
    lab.add(ccw ? 'the rim turns counterclockwise seen from above' : 'the rim turns clockwise seen from above', rim[0], rim[1], 0.2, 1, PAL.ink, 18, 40);
    /* the hand beside the disk, with its own axis and thumb arrow */
    const hx = 1010, hy = 300;
    line(ctx, hx, 110, hx, 500, alpha(PAL.ink, 0.3), 2, [6, 8]);
    hand(ctx, hx, hy, !ccw);
    const thumbTip = ccw ? [hx - 22, hy - 156] : [hx + 22, hy + 156];
    arrow(ctx, thumbTip[0], thumbTip[1] + (ccw ? 4 : -4), thumbTip[0], thumbTip[1] - up * 70, PAL.ink, 4);
    lab.add('thumb: the direction of ω and L', thumbTip[0], thumbTip[1] - up * 70, 1, 0, PAL.ink, 18, 30);
    lab.add('fingers curl the way the rim moves', hx + 60, hy + (ccw ? 70 : -70), 1, 0.2, PAL.ink, 18, 40);
    lab.flush();
    topline(ctx, `Seen from above the disk turns ${ccw ? 'counterclockwise' : 'clockwise'}, so the thumb, ω and L all point ${up > 0 ? 'up' : 'down'} along the axis.`);
    readout(d.readout, `\\kL = I\\kw = (${fmt(I, 4)}\\ \\text{kg}\\cdot\\text{m}^2)(${fmt(w.v, 1)}\\ \\text{rad/s}) = ${fmt(L, 3)}\\ \\text{kg}\\cdot\\text{m}^2\\text{/s}`,
      `The moment of inertia is a positive number, so the angular momentum points the way the angular velocity points; here both point ${up > 0 ? 'up' : 'down'} the axis. The disk has a mass of 2.0 kg and a radius of 0.25 m, so I = ½MR² = ${fmt(I, 4)} kg·m².`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 10.38 · sim-torque-direction · still · locked view
   A merry-go-round pushed at its rim. The torque τ = rF stands along the
   axis, out of the platform for a counterclockwise push seen from above,
   and the change in angular momentum it produces stands the same way. The
   platform is 2.5 m across its radius, the slider's maximum, drawn at 300
   units; the force arrow reaches 200 units at 100 N and the torque arrow
   170 units at 250 N·m. The push is to the right of the near point of the
   rim so that r is seen beside the post and not behind the person.
===================================================================== */
(function () {
  const H = 580;
  const d = sim('sim-torque-direction', H);
  const Fv = ctl(d.controls, { label: '\\kF', cls: 'force', min: 10, max: 100, step: 1, value: 50, unit: 'N', dec: 0, aria: 'the force of the push' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.5, max: 2.5, step: 0.1, value: 2.0, unit: 'm', dec: 1, aria: 'the distance from the axis to the push' });
  const sense = select(d.controls, { label: '\\text{Push}', options: [{ value: 'ccw', label: 'counterclockwise' }, { value: 'cw', label: 'clockwise' }], value: 'ccw', aria: 'the sense of the push seen from above' });
  const YAW = 0.34, V = view({ yaw: YAW, pitch: 0.5, dist: 1700, cx: 640, cy: 360 });
  const E = [Math.sin(YAW), 0, Math.cos(YAW)];
  const S = 120;                                  /* canvas units per metre: the 2.5 m platform is 300 units */
  const HP = 24;
  function draw() {
    const { ctx } = begin(d.c);
    const ccw = sense.value === 'ccw', up = ccw ? 1 : -1;
    const tau = r.v * Fv.v;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 110);
    /* the ground shadow and the platform */
    const c = [0, -HP, 0];
    face(ctx, ring([0, -HP - 2, 0], 2.55 * S, [1, 0, 0], [0, 0, 1]).map(V.P), 0.08, 0);
    drum(ctx, V, c, 2.5 * S, HP, E);
    /* the central post */
    const pB = V.P([0, 0, 0]), pT = V.P([0, 1.1 * S, 0]);
    line(ctx, pB[0], pB[1], pT[0], pT[1], PAL.muted, 10);
    /* the axis, faint, through the platform */
    const aT = V.P([0, 3.4 * S, 0]), aB = V.P([0, -1.6 * S, 0]);
    line(ctx, aT[0], aT[1], aB[0], aB[1], alpha(PAL.ink, 0.3), 2, [6, 8]);
    /* the push at the near point of the rim, a distance r from the axis, on a handle the person leans on */
    const phi = Math.atan2(E[2], E[0]) - 0.7;
    const hp = [r.v * S * Math.cos(phi), 0, r.v * S * Math.sin(phi)];
    const tangent = ccw ? unit([Math.sin(phi), 0, -Math.cos(phi)]) : unit([-Math.sin(phi), 0, Math.cos(phi)]);
    const handleTop = add(hp, [0, 1, 0], 0.9 * S);
    const q0 = V.P(hp), q1 = V.P(handleTop), o = V.P([0, 0, 0]);
    /* the person stands a step behind the handle, against the push, and reaches to it */
    const stand = add(hp, tangent, -0.42 * S);
    const feet = V.P(stand);
    const pf = tangent[0] >= 0 ? 1 : -1, PS = 2.0, phx = (q1[0] - feet[0]) / (PS * pf), phy = (q1[1] - feet[1]) / PS;
    silhouette(ctx, { x: feet[0], y: feet[1], s: PS, face: pf, pose: 'push', hands: [{ x: phx, y: phy }, { x: phx - 3, y: phy + 5 }] });
    line(ctx, q0[0], q0[1], q1[0], q1[1], PAL.muted, 8);
    /* r from the axis to the handle, along the platform */
    arrow(ctx, o[0], o[1], q0[0], q0[1], C('position'), 4);
    lab.add('r', (o[0] + q0[0]) / 2, (o[1] + q0[1]) / 2, 0.4, 1, C('position'), 24, 22);
    /* F along the rim at the handle */
    const fl = 200 * (Fv.v / 100);
    const ft = arrowTo(ctx, V, handleTop, tangent, fl, C('force'), 5);
    /* F is named beside its shaft, on the side away from the platform's axis, so the name never lands on τ */
    const fd = [ft[0] - q1[0], ft[1] - q1[1]], fq = Math.hypot(fd[0], fd[1]) || 1, fn = [-fd[1] / fq, fd[0] / fq];
    const fs = fn[0] * (q1[0] - o[0]) + fn[1] * (q1[1] - o[1]) >= 0 ? 1 : -1;
    lab.add('F', (q1[0] + ft[0]) / 2, (q1[1] + ft[1]) / 2, fs * fn[0], fs * fn[1], C('force'), 24, 22);
    /* the torque and the change in angular momentum, along the axis in the direction of the thumb */
    const tl = 170 * (tau / 250);
    const from = [0, up > 0 ? 1.1 * S : -HP, 0];
    const tt = arrowTo(ctx, V, add(from, [1, 0, 0], -16), [0, up, 0], tl, C('torque'), 5);
    const dl = arrowTo(ctx, V, add(from, [1, 0, 0], 16), [0, up, 0], tl * 0.7, C('angular-momentum'), 5);
    lab.add('τ', tt[0], tt[1], -1, 0, C('torque'), 24, 26);
    lab.add('ΔL', dl[0], dl[1], 1, 0, C('angular-momentum'), 24, 26);
    turnArrow(ctx, V, [0, 4, 0], 1.9 * S, E, ccw, PAL.ink, 4, true);
    lab.flush();
    topline(ctx, `A ${fmt(Fv.v, 0)} N push ${fmt(r.v, 1)} m from the axis makes a torque of ${fmt(tau, 0)} N·m pointing ${up > 0 ? 'up out of' : 'down through'} the platform, and the angular momentum it produces points the same way.`);
    readout(d.readout, `\\ktau = \\kr\\kF = (${fmt(r.v, 1)}\\ \\text{m})(${fmt(Fv.v, 0)}\\ \\text{N}) = ${fmt(tau, 0)}\\ \\text{N}\\cdot\\text{m}`,
      `The push is along the rim, so the whole force turns the platform. The torque is perpendicular to the plane of r and F and points the way your right thumb points when your fingers curl in the direction of the push, and the change in angular momentum ΔL = τΔt points along the torque, ${up > 0 ? 'up out of' : 'down through'} the platform here.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 10.39 · sim-bike-wheel · moving · locked view
   A woman holds a spinning bicycle wheel by its handles, lifts with her right
   hand and pushes down with her left for 1.5 s. The torque of the two hands
   points toward her, so does the change in angular momentum, and the axis
   swings toward her instead of tipping. The model is exact for a constant
   torque, L(t) = L₀ + τt, so the direction tilts by tan⁻¹(ΔL/L₀) and the
   magnitude grows a little. The vector diagram beside her is the book's (b),
   seen from above. The wheel is 0.33 m in radius with I = 0.15 kg·m², the
   handles 0.50 m apart, both in ink. The diagram's scale is 30 units per
   kg·m²/s, fixed from the sliders' maxima (L up to 9, ΔL up to 7.5). The
   view is from her right and above, so the axle's swing toward her turns
   the wheel toward the reader rather than edge-on.
===================================================================== */
(function () {
  const H = 580;
  const d = sim('sim-bike-wheel', H);
  const w = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 10, max: 60, step: 1, value: 30, unit: 'rad/s', dec: 0, aria: 'the spin of the wheel', onInput: reset });
  const Fv = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0.5, max: 10, step: 0.5, value: 2, unit: 'N', dec: 1, aria: 'the force of each hand', onInput: reset });
  const LAB = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the arrows' });
  const I = 0.15, RW = 0.33, DH = 0.25, T = 1.5;
  const YAW = -0.55, V = view({ yaw: YAW, pitch: 0.42, dist: 2200, cx: 430, cy: 290 });
  const S = 300;                                  /* canvas units per metre */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const state = (t) => {
    const L0 = I * w.v, tau = 2 * Fv.v * DH, dL = tau * t;
    const phi = Math.atan2(dL, L0);
    return { t, L0, tau, dL, phi, L: Math.hypot(L0, dL), a: unit([Math.cos(phi), 0, -Math.sin(phi)]) };
  };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const st = state(cy.now()), on = LAB.value === 'on';
    hits = [];
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 100);
    /* the scene: the woman behind the wheel, the wheel on its axle */
    const hub = [0, 0, 0], a = st.a;
    const floorY = -0.84 * S;
    const near = add(hub, a, DH * S), far = add(hub, a, -DH * S);
    const pn = V.P(near), pf = V.P(far), ph = V.P(hub);
    const stand = V.P([0, floorY, -0.42 * S]);
    /* her right arm goes to the far handle and her left to the near one: the sprite is
       drawn twice, each half clipped at her midline, so each arm reaches its own handle */
    const WS = 2.7;
    const drawHalf = (side, reach) => {
      const lh = { x: (reach[0] - stand[0]) / WS, y: (reach[1] - stand[1]) / WS };
      ctx.save(); ctx.beginPath(); ctx.rect(side < 0 ? 0 : stand[0], 0, side < 0 ? stand[0] : 1400 - stand[0], H); ctx.clip();
      silhouette(ctx, { x: stand[0], y: stand[1], s: WS, pose: 'stand', hands: [lh, lh], elbowSide: side });
      ctx.restore();
    };
    drawHalf(-1, pf[0] < stand[0] ? pf : pn); drawHalf(1, pf[0] < stand[0] ? pn : pf);
    /* the wheel: the rim in the plane perpendicular to the axle, the spokes turning at a fifth of the true rate */
    const u = [0, 1, 0], v = cross(a, u);
    const rim = ring(hub, RW * S, u, v, 72).map(V.P);
    poly(ctx, rim, PAL.ink, 9, true);
    poly(ctx, rim, PAL.soft2, 3, true);
    const psi = (w.v * st.t) / 5;
    for (let k = 0; k < 8; k++) {
      const t = psi + (k * TAU) / 8, p = V.P(add(add(hub, u, RW * S * 0.94 * Math.cos(t)), v, RW * S * 0.94 * Math.sin(t)));
      line(ctx, ph[0], ph[1], p[0], p[1], PAL.muted, 2.5);
    }
    line(ctx, pf[0], pf[1], pn[0], pn[1], PAL.ink, 10);
    dot(ctx, ph[0], ph[1], PAL.ink, true, 8);
    hits.push({ x: ph[0], y: ph[1], r: RW * S * 0.5, name: 'the spinning bicycle wheel, seen from her side' }, { x: pn[0], y: pn[1], r: 18, name: 'the handle her left hand pushes down' }, { x: pf[0], y: pf[1], r: 18, name: 'the handle her right hand lifts' });
    /* the two forces at the handles and the torque they make, toward her */
    const fl2 = 150 * (Fv.v / 10);
    const tn = arrowTo(ctx, V, near, [0, -1, 0], fl2, C('force'), 5);
    const tf = arrowTo(ctx, V, far, [0, 1, 0], fl2, C('force'), 5);
    hits.push({ x: (pn[0] + tn[0]) / 2, y: (pn[1] + tn[1]) / 2, r: 24, name: 'F, the push of her left hand, down' }, { x: (pf[0] + tf[0]) / 2, y: (pf[1] + tf[1]) / 2, r: 24, name: 'F, the lift of her right hand, up' });
    const tl = 200 * (st.tau / 10);
    const tt = arrowTo(ctx, V, hub, [0, 0, -1], tl, C('torque'), 5);
    hits.push({ x: (ph[0] + tt[0]) / 2, y: (ph[1] + tt[1]) / 2, r: 24, name: 'τ, the torque of her two hands, toward her' });
    /* L along the axle, out of her left side */
    const ll = 200 * (st.L / 12);
    const tL = arrowTo(ctx, V, near, a, ll, C('angular-momentum'), 5);
    hits.push({ x: (pn[0] + tL[0]) / 2, y: (pn[1] + tL[1]) / 2, r: 24, name: 'L, the angular momentum of the wheel, along its axle' });
    if (on) {
      lab.add('F', tn[0], tn[1], 1, 0.3, C('force'), 24, 22);
      lab.add('F', tf[0], tf[1], -1, -0.3, C('force'), 24, 22);
      lab.add('τ', tt[0], tt[1], -0.6, -1, C('torque'), 24, 22);
      lab.add('L', tL[0], tL[1], 1, 0, C('angular-momentum'), 24, 22);
    }
    /* the vector diagram, seen from above: L to her left, ΔL toward her */
    const ox = 1010, oy = 470, K = 30;
    line(ctx, ox - 40, oy, ox + 280, oy, alpha(PAL.ink, 0.3), 2, [6, 8]);
    line(ctx, ox, oy + 40, ox, oy - 380, alpha(PAL.ink, 0.3), 2, [6, 8]);
    text(ctx, 'seen from above', ox + 120, 130, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'toward her', ox - 12, oy - 362, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'to her left', ox + 270, oy + 22, PAL.muted, { size: 17, align: 'right' });
    const L0x = ox + K * st.L0, dLy = oy - K * st.dL;
    arrow(ctx, ox, oy, L0x, oy, C('angular-momentum'), 5);
    if (st.dL > 0.05) arrow(ctx, L0x, oy, L0x, dLy, C('angular-momentum'), 4);
    if (st.dL > 0.05) arrow(ctx, ox, oy, L0x, dLy, C('angular-momentum'), 3);
    dot(ctx, ox, oy, PAL.ink, true, 7);
    lab.add('L', (ox + L0x) / 2, oy, 0, 1, C('angular-momentum'), 24, 24);
    if (st.dL > 0.05) lab.add('ΔL = τΔt', L0x, (oy + dLy) / 2, 1, 0, C('angular-momentum'), 22, 22);
    if (st.dL > 0.05) lab.add('L + ΔL', (ox + L0x) / 2, (oy + dLy) / 2, -1, -0.3, C('angular-momentum'), 22, 22);
    hits.push({ x: (ox + L0x) / 2, y: oy, r: 20, name: 'L, the angular momentum before the push' });
    lab.flush();
    topline(ctx, `After ${fmt(st.t, 2)} s of pushing the axis has swung ${fmt(st.phi / RAD, 0)}° toward her, and the wheel has not tipped.`);
    readout(d.readout, `\\kdLang = \\ktau\\,\\Delta t = (${fmt(st.tau, 1)}\\ \\text{N}\\cdot\\text{m})(${fmt(st.t, 2)}\\ \\text{s}) = ${fmt(st.dL, 2)}\\ \\text{kg}\\cdot\\text{m}^2\\text{/s}, \\qquad \\kL = I\\kw = ${fmt(st.L0, 2)}\\ \\text{kg}\\cdot\\text{m}^2\\text{/s}`,
      `The two hands make a torque τ = 2Fd = 2(${fmt(Fv.v, 1)} N)(0.25 m) = ${fmt(st.tau, 1)} N·m toward her, and the change in angular momentum points the same way, perpendicular to L. The new angular momentum makes an angle of tan⁻¹(ΔL/L) = ${fmt(st.phi / RAD, 0)}° with the old, so the axis has swung ${fmt(st.phi / RAD, 0)}° toward her. The wheel has I = 0.15 kg·m², and its spin is drawn at one fifth of its true rate.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   Figure 10.40 · sim-gyroscope · moving · a full 3D scene (root rule 28.3)
   A gyroscope on a stand, its axle tilted θ from the vertical. Its weight at
   the center and the supporting force at the pivot make a horizontal torque
   perpendicular to L, so L turns without shrinking and the axle sweeps a
   cone at Ω = mgr/(Iω). With the spin stopped the same gyroscope acquires
   angular momentum along the torque and falls, drawn six times slower than
   life. The flywheel is a 0.50 kg disk of radius 0.050 m, 0.060 m from the
   pivot; the scene's unit is 0.050 m, and the pivot sits 0.6 units below
   the centre of the orbit so the wheel and the whole stand share the
   frame. Arrows are scaled from the sliders' maxima: L reaches 2.0 units at
   ω = 200 rad/s and τ 1.8 units at θ = 80°; the weight and the normal force
   are 1.2 units. The default view is three quarters on, so the tilt and
   the horizontal torque are both seen; Side is the book's own view.
===================================================================== */
(function () {
  const d = sim('sim-gyroscope');
  const mode = choice(d.controls, { label: '\\text{Gyroscope}', options: [{ value: 'spin', label: 'spinning' }, { value: 'still', label: 'not spinning' }], value: 'spin', aria: 'whether the gyroscope spins', onInput: reset });
  const w = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 40, max: 200, step: 5, value: 100, unit: 'rad/s', dec: 0, aria: 'the spin of the flywheel', onInput: reset });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 10, max: 80, step: 1, value: 30, unit: '°', dec: 0, aria: 'the tilt of the axle from the vertical', onInput: reset });
  const LAB = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the arrows' });
  const m = 0.50, R = 0.050, r = 0.060, I = 0.5 * m * R * R, IP = 0.25 * m * R * R + m * r * r;
  const U = 1 / R;                                /* scene units per metre */
  const KL = 2.0 / (I * 200), KT = 1.8 / (m * G * r), KF = 1.2 / (m * G), DT = 0.2, SLOW = 6, PY = -0.6;
  const THREE = window.THREE, hasGL = !!(THREE && typeof WebGLRenderingContext === 'function');
  /* the fall of the unspun gyroscope from its tilt to the horizontal, integrated once per reset */
  let fall = { t: [], th: [], om: [], T: 1 };
  function integrateFall() {
    const ts = [], ths = [], oms = []; let t = 0, q = th.v * RAD, om = 0; const h = 0.001;
    while (q < Math.PI / 2 && t < 5) {
      ts.push(t); ths.push(q); oms.push(om);
      const acc = ((m * G * r) / IP) * Math.sin(q); om += acc * h; q += om * h; t += h;
    }
    ts.push(t); ths.push(Math.PI / 2); oms.push(om);
    fall = { t: ts, th: ths, om: oms, T: t };
  }
  const OMEGA = () => (m * G * r) / (I * w.v);
  const period = () => (mode.value === 'spin' ? TAU / OMEGA() : fall.T * SLOW);
  const cy = cycle(period, 1.2);
  function reset() { integrateFall(); cy.reset(); build(); }
  const at = (t) => {
    if (mode.value === 'spin') return { theta: th.v * RAD, phi: OMEGA() * t, Lfall: 0 };
    const s = Math.min(t / SLOW, fall.T), n = fall.t.length; let k = 0;
    while (k < n - 1 && fall.t[k + 1] <= s) k++;
    return { theta: fall.th[k], phi: 0, Lfall: IP * fall.om[k] };
  };
  let V = null, S = null, psi = 0, head = null;
  const paint = [];                               /* materials and the palette colour each takes, re-read every frame for a change of theme */
  const mat = (col) => { const mm = F.mesh.mat(col(), { shininess: 30 }); paint.push({ m: mm, col }); return mm; };
  /* an arrow of shaft radius rr that can be re-pointed */
  function vec(g, col, rr, name) {
    const shaft = new THREE.Mesh(F.mesh.geo().cyl, mat(col)); shaft.scale.set(rr, 1, rr); g.add(shaft);
    const cone = new THREE.Mesh(F.mesh.geo().cone, mat(col)); g.add(cone);
    V.pickable(shaft, name); V.pickable(cone, name);
    const o = { shaft, cone, set(a, b) {
      const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), dd = B.clone().sub(A), L = dd.length();
      if (L < 1e-4) { shaft.visible = cone.visible = false; return; }
      shaft.visible = cone.visible = true;
      const hl = Math.min(0.42, L * 0.45), uu = dd.clone().normalize(), base = B.clone().sub(uu.clone().multiplyScalar(hl));
      F.mesh.setStick(shaft, a, base.toArray());
      cone.position.copy(base).add(uu.clone().multiplyScalar(hl / 2)); cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), uu); cone.scale.set(rr * 3.4, hl, rr * 3.4);
    }, show(v) { shaft.visible = cone.visible = v; } };
    return o;
  }
  function build() {
    if (!V || !V.scene) return;
    V.clear(); paint.length = 0;
    const turn = V.part(0);
    const inkC = () => PAL.ink, mutedC = () => PAL.muted, softC = () => PAL.soft2;
    const LC = () => C('angular-momentum'), TC = () => C('torque'), FC = () => C('force');
    /* the stand: a round foot, a post and the cup the axle turns in */
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.45, 0.16, 48), mat(mutedC)); base.position.set(0, PY - 1.35, 0); turn.add(base); V.pickable(base, 'the foot of the stand');
    const post = F.mesh.stick(turn, [0, PY - 1.27, 0], [0, PY - 0.1, 0], 0.09, PAL.muted); paint.push({ m: post.material, col: mutedC }); V.pickable(post, 'the stand');
    const cup = F.mesh.sphere(turn, [0, PY, 0], 0.15, PAL.muted); paint.push({ m: cup.material, col: mutedC }); V.pickable(cup, 'the pivot, where the stand supports the gyroscope');
    /* the precessing frame, the tilted axle in it, the wheel on the axle */
    S = { turn, prec: new THREE.Group(), tilt: new THREE.Group(), wheel: new THREE.Group() };
    turn.add(S.prec); S.prec.add(S.tilt); S.tilt.add(S.wheel); S.prec.position.set(0, PY, 0);
    const axle = F.mesh.stick(S.tilt, [0, 0, 0], [0, 1.95, 0], 0.05, PAL.muted); paint.push({ m: axle.material, col: mutedC }); V.pickable(axle, 'the axle');
    S.wheel.position.set(0, r * U, 0);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R * U, 0.1, 12, 56), mat(inkC)); rim.rotation.x = Math.PI / 2; S.wheel.add(rim); V.pickable(rim, 'the flywheel');
    for (let k = 0; k < 6; k++) { const t = (k * TAU) / 6; const sp = F.mesh.stick(S.wheel, [0, 0, 0], [R * U * 0.95 * Math.cos(t), 0, R * U * 0.95 * Math.sin(t)], 0.035, PAL.soft2); paint.push({ m: sp.material, col: softC }); }
    const hubm = F.mesh.sphere(S.wheel, [0, 0, 0], 0.12, PAL.ink); paint.push({ m: hubm.material, col: inkC });
    /* the arrows: L along the axle, w at the center, N at the pivot, τ horizontal at the pivot, ΔL at the tip of L */
    S.L = vec(S.tilt, LC, 0.07, 'L, the angular momentum, along the axle');
    S.Lfall = vec(S.prec, LC, 0.07, 'L = ΔL, the angular momentum the falling gyroscope acquires along the torque');
    S.w = vec(S.prec, FC, 0.05, 'w, the weight, at the center of the flywheel');
    S.N = vec(turn, FC, 0.05, 'N, the supporting force of the stand, at the pivot');
    S.tau = vec(S.prec, TC, 0.055, 'τ, the torque of the weight about the pivot, horizontal');
    S.dL = vec(S.prec, LC, 0.05, 'ΔL, the change in angular momentum in 0.2 s, along the torque');
    S.N.set([0, PY, 0], [0, PY + KF * m * G, 0]);
    /* the circle the tip of L traces, and the arc of the tilt */
    const theta = th.v * RAD, Llen = KL * I * w.v;
    S.circle = F.mesh.polyline(turn, ring([0, PY + Llen * Math.cos(theta), 0], Llen * Math.sin(theta), [1, 0, 0], [0, 0, 1], 96), alpha(PAL.ink, 0.5));
    S.arcPt = F.mesh.arc(S.prec, [0, 1, 0], [Math.sin(theta), Math.cos(theta), 0], 0.9, [0, 0, 0], PAL.muted);
    /* the labels, in the page's face, behind the Labels button */
    S.labels = {
      L: V.label('L', [0, Llen, 0], S.tilt, 8),
      Lf: V.label('L = ΔL', [0, 0, -1], S.prec, 8),
      w: V.label('w', [0, 0, 0], S.prec, -6),
      N: V.label('N', [0, PY + KF * m * G, 0], turn, 8),
      tau: V.label('τ', [0, 0, 0], S.prec, 8),
      dL: V.label('ΔL', [0, 0, 0], S.prec, 8),
      th: V.label('θ', S.arcPt, S.prec, 4),
    };
    V.invalidate();
  }
  function apply(st) {
    const spin = mode.value === 'spin', theta = st.theta, Llen = KL * I * w.v, tauv = m * G * r * Math.sin(theta);
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    S.prec.rotation.y = st.phi; S.tilt.rotation.z = -theta; S.wheel.rotation.y = psi;
    const cm = [r * U * Math.sin(theta), r * U * Math.cos(theta), 0];
    S.w.set(cm, add(cm, [0, -1, 0], KF * m * G));
    S.tau.set([0, 0, 0], [0, 0, -KT * tauv]);
    S.L.show(spin); S.circle.visible = spin; S.dL.show(spin); S.Lfall.show(!spin);
    if (spin) {
      S.L.set([0, 0, 0], [0, Llen, 0]);
      const tip = [Llen * Math.sin(theta), Llen * Math.cos(theta), 0];
      S.dL.set(tip, add(tip, [0, 0, -1], KL * tauv * DT));
      V.move(S.labels.dL.el ?? S.labels.dL, add(tip, [0, 0, -1], KL * tauv * DT));
    } else {
      S.Lfall.set([0, 0, 0], [0, 0, -KL * st.Lfall]);
      V.move(S.labels.Lf, [0, 0, -KL * st.Lfall]);
    }
    V.move(S.labels.w, add(cm, [0, -1, 0], KF * m * G));
    V.move(S.labels.tau, [0, 0, -KT * tauv]);
    const on = LAB.value === 'on';
    Object.entries(S.labels).forEach(([k, e]) => { e.hidden = !on || (k === 'L' && !spin) || (k === 'dL' && !spin) || (k === 'Lf' && spin) || (k === 'Lf' && st.Lfall < 1e-4); });
    const P = TAU / OMEGA();
    head.textContent = spin
      ? `The axle sweeps round once every ${fmt(P, 2)} s: the torque is always horizontal and perpendicular to L, so L turns and does not shrink.`
      : `With no spin there is no angular momentum to turn: the torque gives the gyroscope angular momentum in its own direction and it falls over, drawn ${SLOW} times slower than life.`;
    V.invalidate();
  }
  function draw() {
    const t = cy.now(), st = at(t);
    if (S) apply(st);
    const spin = mode.value === 'spin', theta = st.theta, tauv = m * G * r * Math.sin(theta), L = I * w.v, P = TAU / OMEGA();
    readout(d.readout, spin
      ? `\\ktau = mgr\\sin\\theta = ${fmt(tauv, 3)}\\ \\text{N}\\cdot\\text{m}\\ \\text{at}\\ ${fmt(th.v, 0)}^\\circ, \\qquad \\kL = I\\kw = ${fmt(L, 4)}\\ \\text{kg}\\cdot\\text{m}^2\\text{/s}`
      : `\\kL = \\kdLang = \\ktau\\,\\Delta t, \\qquad \\ktau = mgr\\sin\\theta = ${fmt(tauv, 3)}\\ \\text{N}\\cdot\\text{m}\\ \\text{at a tilt of}\\ ${fmt(theta / RAD, 0)}^\\circ`,
      spin
        ? `The torque turns L through the small horizontal change ΔL = τΔt every Δt, so the tip of L goes round the circle once every 2πIω/(mgr) = ${fmt(P, 2)} s without the tilt changing. The arrow ΔL is the change in ${fmt(DT, 2)} s. The flywheel is a ${fmt(m, 2)} kg disk of radius ${fmt(R, 3)} m, so I = ½mR² = ${fmt(I, 6)} kg·m², and its center is ${fmt(r, 3)} m from the pivot; its spin is drawn at one twentieth of its true rate so the spokes can be followed.`
        : `With the flywheel still, the gyroscope starts with no angular momentum, so the angular momentum it acquires is ΔL itself, horizontal and along the torque, and it turns about a horizontal axis through the pivot: it falls. The fall from ${fmt(th.v, 0)}° to the horizontal takes ${fmt(fall.T, 2)} s and is drawn ${SLOW} times slower than life.`);
  }
  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 560, dist: 8.5, tilt: 16 * RAD, spin: 'off',
      views: [{ label: 'Side', yaw: 0, pitch: 10 * RAD }, { label: 'Above', yaw: 0, pitch: 72 * RAD }, { label: 'Front', yaw: 90 * RAD, pitch: 12 * RAD }],
      pitch: [5 * RAD, 75 * RAD], yaw: 'free', zoomMin: 0.7, zoomMax: 2.5,
    });
    if (!V.scene) V = null;
    else {
      V.setView(0.6, 16 * RAD);
      head = el('div', 'lab3d'); head.style.left = '50%'; head.style.top = '12px'; head.style.transform = 'translate(-50%, 0)'; head.style.whiteSpace = 'normal'; head.style.maxWidth = '92%'; head.style.textAlign = 'center'; head.style.fontWeight = '400'; V.wrap.appendChild(head);
    }
  } else {
    d.stage.appendChild(el('p', 'lab3d', 'This figure needs WebGL, which this browser does not provide.'));
  }
  integrateFall();
  try { if (V) build(); } catch (e) { console.error('sim-gyroscope: the scene could not be built', e); S = null; }
  register(d.fig, {
    update: (dt) => {
      if (mode.value === 'spin') { psi += (w.v * dt) / 20; if (cy.tau >= cy.period()) { cy.tau = 0; cy.wait = 0; } }
      cy.step(dt, () => 1);
    },
    draw,
  });
})();

};
