/* Figures for section 10.2 Kinematics of Rotational Motion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, pinned, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const sgn = (v) => (v < 0 ? '−' : '');
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return sgn(x) + (s.includes('e') || Math.abs(x) >= 1000 ? String(Math.round(Number(s))) : s); };
/* a curved arrow about (cx, cy) at radius R from angle a0 through sweep radians; positive sweep is clockwise on the canvas */
function arcArrow(ctx, cx, cy, R, a0, sweep, color, w = 4) {
  const a1 = a0 + sweep, cw = sweep > 0;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1, !cw); ctx.stroke(); ctx.restore();
  const back = a1 - (cw ? 1 : -1) * (14 / R);
  arrow(ctx, cx + R * Math.cos(back), cy + R * Math.sin(back), cx + R * Math.cos(a1), cy + R * Math.sin(a1), color, w);
}
/* a filled disc with a stroke */
function disc(ctx, cx, cy, R, fill, stroke, w = 3) {
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); } ctx.restore();
}
/* the fly: a body and two wings, in ink, about 30 units long */
function fly(ctx, x, y, heading, color, halo) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(heading); ctx.fillStyle = color; ctx.strokeStyle = halo; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.ellipse(0, 0, 19, 10, 0, 0, TAU); ctx.stroke(); ctx.fill();
  ctx.beginPath(); ctx.arc(21, 0, 8, 0, TAU); ctx.stroke(); ctx.fill();
  ctx.globalAlpha = 0.4; ctx.beginPath(); ctx.ellipse(-7, -15, 20, 8, -0.5, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(-7, 15, 20, 8, 0.5, 0, TAU); ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 10.7: the fishing reel of Examples 10.3 and 10.4. The reel spins up
   (or brakes) under a constant angular acceleration for the set time, the
   line slides off the top and its paid-out length is marked on a scale, and
   the graph below follows ω against t with the area under the line shaded
   as the angle turned through. Finite motion, so it gets the scrubber.
   Axes fixed at 0 to 4 s (the time slider's maximum) and 0 to 500 rad/s
   (from the default final value of 220 rad/s); values beyond are pinned.
===================================================================== */
(function () {
  const d = sim('sim-reel', 880);
  const al = ctl(d.controls, { label: '\\kalpha', cls: 'angular-acceleration', min: -300, max: 200, step: 5, value: 110, unit: 'rad/s²', dec: 0, onInput: reset, aria: 'angular acceleration', detents: [-300, 0, 110] });
  const w0 = ctl(d.controls, { label: '\\kwo', cls: 'angular-rate', min: 0, max: 250, step: 5, value: 0, unit: 'rad/s', dec: 0, onInput: reset, aria: 'initial angular velocity', detents: [0, 220] });
  const tt = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.5, max: 4, step: 0.05, value: 2, unit: 's', dec: 2, onInput: reset, aria: 'time the acceleration lasts' });
  const rr = ctl(d.controls, { label: '\\kr', cls: 'position', min: 1, max: 10, step: 0.05, value: 4.5, unit: 'cm', dec: 2, onInput: reset, aria: 'radius of the reel' });
  /* the motion: ω = ω0 + αt until the reel stops under a brake, after which it stays at rest */
  const model = () => {
    const a = al.v, o0 = w0.v, T = tt.v, idle = o0 === 0 && a <= 0, ts = a < 0 && o0 > 0 ? -o0 / a : Infinity, stop = idle ? 0 : Math.min(T, ts);
    const om = (s) => (s < stop ? o0 + a * s : a < 0 ? 0 : o0 + a * s);
    const th = (s) => { const u = Math.min(s, stop); return o0 * u + 0.5 * a * u * u; };
    return { a, o0, T, ts, stop, om, th, braked: ts <= T, idle };
  };
  const cy = cycle(() => tt.v, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const m = model(), tau = cy.now(), r = rr.v / 100, ended = tau >= m.T - 1e-9;
    const om = m.om(tau), th = m.th(tau), rev = th / TAU, x = r * th, v = r * om, a = r * (tau < m.stop ? m.a : m.a < 0 ? 0 : m.a);
    /* the reel, face on, its drawn radius following the slider */
    const cx = 270, cyy = 300, Rd = 70 + rr.v * 9, top = cyy - Rd;
    disc(ctx, cx, cyy, Rd, PAL.soft, PAL.ink, 6);
    for (let i = 0; i < 4; i++) { const p = th + (i * TAU) / 4; line(ctx, cx, cyy, cx + (Rd - 4) * Math.cos(p), cyy + (Rd - 4) * Math.sin(p), i ? alpha(PAL.ink, 0.35) : PAL.ink, i ? 3 : 4); }
    disc(ctx, cx, cyy, 16, PAL.panel, PAL.ink, 3);
    dot(ctx, cx + (Rd - 4) * Math.cos(th), cyy + (Rd - 4) * Math.sin(th), PAL.ink, true, 8);
    /* the line leaving the top of the reel: its dashes slide with the length paid out */
    const dashLen = 24, off = ((x * 41) % (2 * dashLen));
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([dashLen, dashLen]); ctx.lineDashOffset = -off; ctx.beginPath(); ctx.moveTo(cx, top); ctx.lineTo(1340, top); ctx.stroke(); ctx.restore();
    /* the angular velocity as a curved arrow round the reel, and the speed of the line as a straight one above it */
    if (om > 0) { arcArrow(ctx, cx, cyy, Rd + 24, Math.PI * 0.62, (0.25 + Math.min(om, 400) / 400) * 1.6, C('angular-rate'), 4); }
    if (v > 0) { arrow(ctx, cx + 30, top - 22, cx + 30 + 24 + Math.min(v, 30) * 8, top - 22, C('velocity'), 4); text(ctx, 'v', cx + 30 + 24 + Math.min(v, 30) * 8 + 14, top - 22, C('velocity'), { size: 24, weight: 600 }); }
    /* the live quantities, on a panel to the right of the reel */
    const px = 700, py = 250;
    text(ctx, 'ω = ' + sig3(om) + ' rad/s', px, py, C('angular-rate'), { size: 22, weight: 600 });
    text(ctx, 'α = ' + sgn(m.a) + fmt(Math.abs(m.a), 0) + ' rad/s²', px, py + 36, C('angular-acceleration'), { size: 22, weight: 600 });
    text(ctx, 'θ = ' + sig3(th) + ' rad = ' + sig3(rev) + ' rev', px, py + 72, PAL.ink, { size: 22, weight: 600 });
    text(ctx, 'v = rω = ' + sig3(v) + ' m/s', px, py + 108, C('velocity'), { size: 22, weight: 600 });
    text(ctx, 'a = rα = ' + sgn(a) + sig3(Math.abs(a)) + ' m/s²', px, py + 144, C('acceleration'), { size: 22, weight: 600 });
    /* the length of line paid out, on a fixed scale of 0 to 20 m */
    const sy = 500, X0 = 520, K = 41;
    F.strip(ctx, X0, 1340, sy, 44);
    F.scale(ctx, (mm) => X0 + mm * K, 0, 20, 5, sy, 'm');
    const xm = Math.min(x, 20), xp = X0 + xm * K;
    line(ctx, X0, sy, xp, sy, C('position'), 6);
    dot(ctx, xp, sy, C('position'), x <= 20, 10);
    if (x > 0.05) hbracket(ctx, X0, xp, sy - 40, C('position'), 'x = rθ = ' + sig3(x) + ' m' + (x > 20 ? ' (beyond the scale)' : ''));
    text(ctx, 'line paid out', X0 - 24, sy, PAL.muted, { size: 17, align: 'right' });
    /* ω against t below, the area under the line shaded as θ */
    const box = { l: 130, r: 1310, t: 590, b: 800 }, cw = C('angular-rate');
    const g = axes(ctx, box, [0, 4], [0, 500], { xl: 't (s)', xc: C('time'), yl: 'ω (rad/s)', yc: cw, nx: 4, ny: 5, fx: (s) => fmt(s, 0), fy: (s) => fmt(s, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    ctx.fillStyle = alpha(cw, 0.18); ctx.beginPath(); ctx.moveTo(g.X(0), g.Y(0));
    for (let i = 0; i <= 60; i++) { const s = (tau * i) / 60; ctx.lineTo(g.X(s), g.Y(m.om(s))); }
    ctx.lineTo(g.X(tau), g.Y(0)); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = cw; ctx.lineWidth = 5; ctx.beginPath();
    for (let i = 0; i <= 80; i++) { const s = (m.T * i) / 80; const yy = g.Y(m.om(s)); if (i) ctx.lineTo(g.X(s), yy); else ctx.moveTo(g.X(s), yy); }
    ctx.stroke(); ctx.restore();
    const tc = Math.min(tau, m.stop) * 0.4;   /* the θ label sits well inside the shaded region, clear of the note the brake leaves */
    if (tau > 0.3 && th > 30) text(ctx, 'θ', g.X(tc), g.Y(Math.min(m.om(tc), 500) * 0.4), cw, { size: 24, weight: 600, align: 'center' });
    dot(ctx, g.X(0), g.Y(Math.min(m.o0, 500)), cw, false, 9);
    line(ctx, g.X(tau), box.b, g.X(tau), Math.max(g.Y(om), box.t), C('time'), 2, [4, 8]);
    pinned(ctx, box, g.X, g.Y, tau, om, cw, sig3(om) + ' rad/s');
    if (m.braked && m.o0 > 0) text(ctx, 'reel at rest from t = ' + sig3(m.ts) + ' s', g.X(m.ts) + 12, g.Y(0) - 22, PAL.muted, { size: 17 });
    /* the headline */
    const sT = fmt(tau, 2) + ' s';
    const headline = m.idle ? 'With no initial angular velocity and no positive angular acceleration, the reel stays at rest.'
      : m.braked && tau >= m.ts ? 'The brake brings the reel to rest after ' + sig3(m.ts) + ' s, in which it turns through ' + sig3(m.th(m.ts) / TAU) + ' rev and pays out ' + sig3(r * m.th(m.ts)) + ' m of line.'
      : ended ? 'After ' + sT + ' the reel spins at ' + sig3(om) + ' rad/s, has turned through ' + sig3(rev) + ' rev and has paid out ' + sig3(x) + ' m of line.'
      : 'After ' + sT + ' the reel spins at ' + sig3(om) + ' rad/s and has turned through ' + sig3(rev) + ' rev.';
    topline(ctx, headline);
    const aStr = (m.a < 0 ? '(' : '') + sgn(m.a) + fmt(Math.abs(m.a), 0) + '\\ \\text{rad/s}^2' + (m.a < 0 ? ')' : '');
    const tEnd = Math.min(tau, m.stop), omEnd = m.om(tEnd);
    readout(d.readout, `\\kw = \\kwo + \\kalpha\\kt = ${fmt(m.o0, 0)}\\ \\text{rad/s} + ${aStr}(${sig3(tEnd)}\\ \\text{s}) = ${sig3(omEnd)}\\ \\text{rad/s}`,
      'The angle turned through is θ = ω₀t + ½αt² = ' + sig3(th) + ' rad = ' + sig3(rev) + ' rev, so x = rθ = ' + sig3(x) + ' m of line has left the reel, at v = rω = ' + sig3(v) + ' m/s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tt.v / 5), draw });
})();

/* =====================================================================
   FIGURE 10.8: the fly on the microwave plate of Example 10.6. The plate
   turns at a steady angular velocity for the cooking time, the fly rides
   the rim, and the graph beside the plate follows the distance travelled
   x = rθ as a straight line against time. Finite motion, so it gets the
   scrubber. Axes fixed at 0 to 4 min (the time slider's maximum) and 0 to
   30 m (from the default 11 m); values beyond are pinned.
===================================================================== */
(function () {
  const d = sim('sim-fly', 700);
  const rr = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.05, max: 0.3, step: 0.01, value: 0.15, unit: 'm', dec: 2, onInput: reset, aria: 'radius of the plate' });
  const wb = ctl(d.controls, { label: '\\kwb', cls: 'angular-rate', min: 1, max: 12, step: 0.5, value: 6, unit: 'rpm', dec: 1, onInput: reset, aria: 'angular velocity of the plate' });
  const tt = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'min', dec: 1, onInput: reset, aria: 'cooking time' });
  const cy = cycle(() => tt.v, 1.2);
  function reset() { cy.reset(); }
  const cx = 340, cyy = 370;
  const geom = () => ({ Rp: 110 + (rr.v - 0.05) * 520 });
  const state = () => { const tau = cy.now(), th = wb.v * TAU * tau; return { tau, th, rev: th / TAU, x: rr.v * th, disp: 2 * rr.v * Math.abs(Math.sin(th / 2)) }; };
  const flyAt = () => { const { Rp } = geom(), { th } = state(); return { x: cx + Rp * Math.cos(-th), y: cyy + Rp * Math.sin(-th) }; };
  hover(d.stage, () => { const p = flyAt(); return [{ x: p.x, y: p.y, r: 34, name: 'the fly' }]; });
  function draw() {
    const { ctx } = begin(d.c);
    const { Rp } = geom(), s = state(), T = tt.v, ended = s.tau >= T - 1e-9;
    const ang = -s.th;   /* the plate turns counterclockwise, as the book draws it */
    /* the plate with its grooves and the lunch on it */
    disc(ctx, cx, cyy, Rp, PAL.soft, PAL.ink, 4);
    disc(ctx, cx, cyy, Rp * 0.78, null, alpha(PAL.ink, 0.15), 2);
    disc(ctx, cx, cyy, 10, PAL.ink, null);
    const lx = cx + Rp * 0.6 * Math.cos(ang + 2.4), ly = cyy + Rp * 0.6 * Math.sin(ang + 2.4);
    disc(ctx, lx, ly, Rp * 0.2, PAL.panel, PAL.muted, 2); text(ctx, 'lunch', lx, ly, PAL.muted, { size: 17, align: 'center' });
    /* the path along the rim since the fly started, wrapping each revolution, and the displacement chord */
    const sx = cx + Rp, sy = cyy, p = flyAt(), cp = C('position');
    if (s.th > 0) {
      ctx.save(); ctx.strokeStyle = alpha(cp, 0.55); ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(cx, cyy, Rp + 8, 0, Math.min(s.th, TAU), true); ctx.stroke(); ctx.restore();
      if (s.disp > 0.004) line(ctx, sx, sy, p.x, p.y, cp, 2.5, [8, 8]);
    }
    dot(ctx, sx, sy, PAL.ink, false, 9); text(ctx, 'start', sx + 16, sy + 22, PAL.muted, { size: 17 });
    fly(ctx, p.x, p.y, ang - Math.PI / 2, PAL.ink, PAL.panel);
    /* the angular velocity as a curved arrow round the centre */
    arcArrow(ctx, cx, cyy, Rp * 0.3, Math.PI * 0.15, -(0.5 + Math.min(wb.v, 12) / 12) * 1.7, C('angular-rate'), 4);
    text(ctx, 'ω̄ = ' + fmt(wb.v, 1) + ' rpm', 40, 112, C('angular-rate'), { size: 22, weight: 600 });   /* on the frame, where the fly on the rim can never reach it */
    line(ctx, cx, cyy, cx + Rp * Math.cos(0.2), cyy - Rp * Math.sin(0.2), cp, 3);
    text(ctx, 'r = ' + fmt(rr.v, 2) + ' m', cx + Rp + 16, cyy - 18 - Rp * Math.sin(0.2), cp, { size: 22, weight: 600 });
    text(ctx, 'displacement ' + fmt(s.disp, 2) + ' m', cx, cyy + Rp + 52, cp, { size: 20, weight: 600, align: 'center' });
    /* x against t beside the plate */
    const box = { l: 760, r: 1310, t: 150, b: 540 };
    const g = axes(ctx, box, [0, 4], [0, 30], { xl: 't (min)', xc: C('time'), yl: 'x (m)', yc: cp, nx: 4, ny: 3, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    line(ctx, g.X(0), g.Y(0), g.X(T), g.Y(rr.v * wb.v * TAU * T), cp, 5); ctx.restore();
    line(ctx, g.X(s.tau), box.b, g.X(s.tau), Math.max(g.Y(s.x), box.t), C('time'), 2, [4, 8]);
    pinned(ctx, box, g.X, g.Y, s.tau, s.x, cp, sig3(s.x) + ' m');
    text(ctx, 'slope rω̄ = ' + sig3(rr.v * wb.v * TAU) + ' m/min', box.r - 10, box.t + 22, cp, { size: 17, weight: 600, align: 'right' });
    /* the headline */
    const whole = Math.abs(s.rev - Math.round(s.rev)) < 0.02 && s.rev > 0.5;
    const headline = ended
      ? 'After ' + fmt(s.tau, 1) + ' min the fly has gone round ' + sig3(s.rev) + ' times and travelled ' + sig3(s.x) + ' m' + (whole ? ', and is back where it started.' : ', and sits ' + fmt(s.disp, 2) + ' m from where it started.')
      : 'After ' + fmt(s.tau, 2) + ' min the fly has gone round ' + sig3(s.rev) + ' times and travelled ' + sig3(s.x) + ' m.';
    topline(ctx, headline);
    readout(d.readout, `\\theta = \\kwb\\kt = (${fmt(wb.v, 1)}\\ \\text{rpm})(${fmt(s.tau, 2)}\\ \\text{min}) = ${sig3(s.rev)}\\ \\text{rev} = ${sig3(s.th)}\\ \\text{rad}, \\quad \\kx = \\kr\\theta = ${sig3(s.x)}\\ \\text{m}`,
      'The distance travelled keeps growing, but the displacement is zero after every complete revolution, because each one brings the fly back to its original position.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => tt.v / 6), draw });
})();
};
