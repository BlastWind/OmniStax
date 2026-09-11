/* Figures for section 3.4 Projectile Motion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, axes, nice, curve } = F;
const demo = (id, H) => F.demo(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const sgn = (v) => (v < 0 ? '−' : '');
/* three significant figures, never in exponent form, with commas */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return sgn(x) + (s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s); };
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => ((r.hi - r.lo) / r.n < 1 ? 1 : 0);
/* the launch velocity arrow from (x, y) at th degrees, its label to the left of the launch point where the path is not */
function launch(ctx, x, y, L, th, label) {
  arrow(ctx, x, y, x + L * Math.cos(th * RAD), y - L * Math.sin(th * RAD), C('velocity'), 5);
  text(ctx, label, x - 14, y - L * Math.sin(th * RAD) - 4, C('velocity'), { size: 20, weight: 600, align: 'right' });
}
/* the trajectory of a projectile launched from the origin with speed v0 at angle th (degrees) */
const flight = (v0, th) => {
  const vx = v0 * Math.cos(th * RAD), vy0 = v0 * Math.sin(th * RAD);
  return { vx, vy0, x: (t) => vx * t, y: (t) => vy0 * t - 0.5 * G * t * t, vy: (t) => vy0 - G * t, T: (2 * vy0) / G, R: (2 * vx * vy0) / G, h: (vy0 * vy0) / (2 * G), tTop: vy0 / G };
};
/* the path of a flight drawn through the scales X, Y from t0 to t1 */
function path(ctx, f, t0, t1, X, Y, color, w = 4, dash, n = 90) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; if (i) ctx.lineTo(X(f.x(t)), Y(f.y(t))); else ctx.moveTo(X(f.x(t)), Y(f.y(t))); }
  ctx.stroke(); ctx.restore();
}
/* an angle arc at (x, y) from the horizontal up to th degrees, with its label beyond the arc */
function angleArc(ctx, x, y, r, th, label, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, 0, -th * RAD, true); ctx.stroke(); ctx.restore();
  const a = (th / 2) * RAD; text(ctx, label, x + (r + 26) * Math.cos(a), y - (r + 26) * Math.sin(a), color, { size: 20, weight: 600, align: 'center' });
}
/* a flat piece of ground through the scene at the height y */
function ground(ctx, x1, x2, y) { line(ctx, x1, y, x2, y, PAL.muted, 3); }

/* ---------- sprites, in ink ---------- */
/* a soccer ball centred on (x, y) */
function ball(ctx, x, y, color, r = 13) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  ctx.strokeStyle = PAL.panel; ctx.lineWidth = 2; ctx.beginPath();
  for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + (i * TAU) / 5, px = x + r * 0.45 * Math.cos(a), py = y + r * 0.45 * Math.sin(a); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
  ctx.closePath(); ctx.stroke(); ctx.restore();
}
/* a rock centred on (x, y) */
function rock(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(-14, 2); ctx.lineTo(-8, -10); ctx.lineTo(4, -12); ctx.lineTo(14, -3); ctx.lineTo(10, 9); ctx.lineTo(-4, 11); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a fireworks shell centred on (x, y), its fuse trailing */
function shell(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, 9, 0, TAU); ctx.fill();
  ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(x, y + 9); ctx.quadraticCurveTo(x - 8, y + 18, x - 4, y + 26); ctx.stroke(); ctx.restore();
}
/* the burst of a shell at (x, y), f from 0 to 1 as it opens */
function burst(ctx, x, y, f) {
  const r = 30 + 50 * f;
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.8 - 0.5 * f); ctx.lineWidth = 3;
  for (let i = 0; i < 12; i++) { const a = (i * TAU) / 12 + 0.2; ctx.beginPath(); ctx.moveTo(x + 8 * Math.cos(a), y + 8 * Math.sin(a)); ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a)); ctx.stroke(); dot(ctx, x + r * Math.cos(a), y + r * Math.sin(a), PAL.ink, true, 4); }
  ctx.restore();
}
/* a tower standing on (x, y), h tall */
function tower(ctx, x, y, h, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  ctx.moveTo(x - 12, y); ctx.lineTo(x - 4, y - h); ctx.lineTo(x + 4, y - h); ctx.lineTo(x + 12, y); ctx.moveTo(x - 8, y - h / 2); ctx.lineTo(x + 8, y - h / 2); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 3.34: the soccer ball and its total displacement. The ball flies
   its parabola once per loop; at every instant s is drawn from the kick
   to the ball with its components x and y and its angle θ. Finite motion,
   so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-displacement', 560);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 10, max: 40, step: 0.5, value: 20, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial speed' });
  const th = ctl(d.controls, { label: '\\theta_0', cls: '', min: 15, max: 80, step: 1, value: 50, unit: 'º', dec: 0, onInput: reset, aria: 'launch angle' });
  const fl = () => flight(v0.v, th.v);
  const cy = cycle(() => fl().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const f = fl(), tau = cy.now(), done = tau >= f.T - 1e-9;
    const x = f.x(tau), y = Math.max(0, f.y(tau)), s = Math.hypot(x, y), ang = x > 0 ? Math.atan2(y, x) / RAD : th.v;
    /* the scene: the trajectory fitted to the box with one scale for both axes */
    const box = { l: 150, r: 1300, t: 120, b: 450 };
    const SC = Math.min((box.r - box.l) / f.R, (box.b - box.t) / f.h);
    const X = (m) => box.l + m * SC, Y = (m) => box.b - m * SC;
    ground(ctx, 60, 1340, box.b);
    line(ctx, X(0), box.b + 6, X(0), box.t - 30, PAL.muted, 2); text(ctx, 'y', X(0) - 22, box.t - 22, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'x', 1340, box.b + 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    path(ctx, f, 0, f.T, X, Y, PAL.muted, 3, [8, 8]);
    path(ctx, f, 0, tau, X, Y, PAL.ink, 4);
    /* the components as drop lines and the displacement itself */
    if (x > 0.5) {
      line(ctx, X(x), box.b, X(x), Y(y), C('position'), 3, [4, 8]);
      arrow(ctx, X(0), box.b + 40, X(x), box.b + 40, C('position'), 4);
      text(ctx, 'x = ' + fmt(x, 1) + ' m', (X(0) + X(x)) / 2, box.b + 66, C('position'), { weight: 600, align: 'center' });
      if (y > 0.5) { arrow(ctx, X(x) + 46, box.b, X(x) + 46, Y(y), C('position'), 4); text(ctx, 'y = ' + fmt(y, 1) + ' m', X(x) + 62, (box.b + Y(y)) / 2, C('position'), { weight: 600 }); }
      arrow(ctx, X(0), Y(0), X(x), Y(y), C('position'), 5);
      const mid = 0.55; text(ctx, 's = ' + fmt(s, 1) + ' m', X(x * mid) - 14, Y(y * mid) - 24, C('position'), { weight: 600, size: 24, align: 'center', bg: alpha(PAL.panel, 0.8) });
      if (ang > 4 && x * SC > 120) angleArc(ctx, X(0), Y(0), 70, ang, 'θ = ' + fmt(ang, 1) + 'º', PAL.ink);
    }
    dot(ctx, X(0), Y(0), C('position'), false, 10);
    ball(ctx, X(x), Y(y), PAL.ink);
    headline(ctx, tau < 1e-9 ? 'the ball is at the origin, about to be kicked at ' + fmt(v0.v, 1) + ' m/s and ' + th.v + 'º above the horizontal'
      : done ? 't = ' + fmt(f.T, 2) + ' s · the ball lands ' + fmt(f.R, 1) + ' m away, where s = x = ' + fmt(f.R, 1) + ' m and θ = 0'
      : 't = ' + fmt(tau, 2) + ' s · the ball is ' + fmt(x, 1) + ' m along and ' + fmt(y, 1) + ' m up, so s = ' + fmt(s, 1) + ' m at ' + fmt(ang, 1) + 'º above the horizontal');
    readout(d.readout, `\\ks = \\sqrt{\\kx^2 + \\ky^2} = \\sqrt{(${fmt(x, 1)}\\ \\text{m})^2 + (${fmt(y, 1)}\\ \\text{m})^2} = ${fmt(s, 1)}\\ \\text{m}`,
      x > 0.5 ? 'The direction of the displacement is θ = tan⁻¹(y/x) = tan⁻¹(' + fmt(y, 1) + '/' + fmt(x, 1) + ') = ' + fmt(ang, 1) + 'º above the horizontal.'
        : 'The ball has not left the origin yet, so its displacement is zero and has no direction.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => fl().T / 5), draw });
})();

/* =====================================================================
   FIGURE 3.35: the velocity and its components along the trajectory. vx
   never changes; vy shrinks to zero at the top and grows again downward;
   the acceleration always points straight down. Two graphs below follow
   the components against time. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-components', 860);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 10, max: 40, step: 0.5, value: 25, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial speed' });
  const th = ctl(d.controls, { label: '\\theta_0', cls: '', min: 10, max: 80, step: 1, value: 60, unit: 'º', dec: 0, onInput: reset, aria: 'launch angle' });
  const fl = () => flight(v0.v, th.v);
  const cy = cycle(() => fl().T, 1.2);
  function reset() { cy.reset(); }
  const K = 5;   /* canvas units per m/s of velocity arrow */
  function draw() {
    const { ctx } = begin(d.c);
    const f = fl(), tau = cy.now(), done = tau >= f.T - 1e-9;
    const x = f.x(tau), y = Math.max(0, f.y(tau)), vy = f.vy(tau), v = Math.hypot(f.vx, vy), thv = Math.atan2(vy, f.vx) / RAD;
    /* the scene */
    const box = { l: 150, r: 1250, t: 120, b: 440 };
    const SC = Math.min((box.r - box.l) / f.R, (box.b - box.t) / f.h);
    box.l = Math.max(150, (1400 - f.R * SC) / 2);   /* a tall flight is centred rather than left */
    const X = (m) => box.l + m * SC, Y = (m) => box.b - m * SC;
    ground(ctx, 60, 1340, box.b);
    line(ctx, X(0), box.b + 6, X(0), box.t - 40, PAL.muted, 2); text(ctx, 'y', X(0) - 22, box.t - 32, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'x', 1340, box.b + 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    path(ctx, f, 0, f.T, X, Y, PAL.muted, 3, [8, 8]);
    path(ctx, f, 0, tau, X, Y, PAL.ink, 4);
    for (let k = 1; k < 10; k++) { const tk = (k * f.T) / 10; if (tk <= tau) dot(ctx, X(f.x(tk)), Y(f.y(tk)), PAL.ink, false, 6); }
    /* the velocity, its components and the acceleration at the projectile */
    const px = X(x), py = Y(y), cv = C('velocity');
    arrow(ctx, px, py, px + f.vx * K, py, alpha(cv, 0.6), 3);
    text(ctx, 'vx = ' + fmt(f.vx, 1) + ' m/s', px + f.vx * K * 0.5, py + (vy >= 0 ? 24 : -24), cv, { size: 20, weight: 600, align: 'center' });
    if (Math.abs(vy) > 0.4) {
      arrow(ctx, px, py, px, py - vy * K, alpha(cv, 0.6), 3);
      text(ctx, 'vy = ' + sgn(vy) + fmt(Math.abs(vy), 1) + ' m/s', px - 12, py - vy * K * 0.5, cv, { size: 20, weight: 600, align: 'right' });
    }
    arrow(ctx, px, py, px + f.vx * K, py - vy * K, cv, 5);
    const vn = Math.hypot(f.vx, vy) || 1;
    text(ctx, 'v = ' + fmt(v, 1) + ' m/s', px + f.vx * K + (f.vx / vn) * 22 + 8, py - vy * K - (vy / vn) * 22, cv, { size: 22, weight: 600 });
    arrow(ctx, px - 30, py, px - 30, py + G * 5.5, C('acceleration'), 5);
    text(ctx, 'a = −g', px - 44, py + G * 5.5 + 4, C('acceleration'), { size: 20, weight: 600, align: 'right' });
    dot(ctx, px, py, PAL.ink, true, 9);
    /* the two graphs: vx against t, and vy against t */
    const vmax = Math.ceil(v0.v / 10) * 10, tr = nice(0, f.T, 4), td = decs(tr);
    const gl = axes(ctx, { l: 180, r: 620, t: 600, b: 780 }, [0, tr.hi], [0, vmax], { xl: 't (s)', xc: C('time'), yl: 'vx (m/s)', yc: cv, nx: tr.n, ny: 2, fx: (t) => fmt(t, td) });
    line(ctx, gl.X(0), gl.Y(f.vx), gl.X(f.T), gl.Y(f.vx), cv, 5);
    line(ctx, gl.X(tau), gl.Y(0), gl.X(tau), gl.Y(f.vx), C('time'), 2, [4, 8]);
    dot(ctx, gl.X(tau), gl.Y(f.vx), PAL.ink, true, 9);
    text(ctx, 'vx stays the same', gl.X(f.T / 2), gl.Y(f.vx) - 24, cv, { size: 18, weight: 600, align: 'center' });
    const gr = axes(ctx, { l: 860, r: 1300, t: 600, b: 780 }, [0, tr.hi], [-vmax, vmax], { xl: 't (s)', xc: C('time'), yl: 'vy (m/s)', yc: cv, nx: tr.n, ny: 2, fx: (t) => fmt(t, td) });
    line(ctx, gr.X(0), gr.Y(f.vy0), gr.X(f.T), gr.Y(-f.vy0), cv, 5);
    line(ctx, gr.X(tau), gr.Y(0), gr.X(tau), gr.Y(vy), C('time'), 2, [4, 8]);
    dot(ctx, gr.X(0), gr.Y(f.vy0), cv, false, 9); dot(ctx, gr.X(tau), gr.Y(vy), PAL.ink, true, 9);
    text(ctx, 'slope = −g', gr.X(f.T * 0.78), gr.Y(-f.vy0 * 0.56) - 30, C('acceleration'), { size: 18, weight: 600, align: 'center' });
    headline(ctx, done ? 't = ' + fmt(f.T, 2) + ' s · at landing vy = −' + fmt(f.vy0, 1) + ' m/s, the negative of its initial value, and vx is unchanged'
      : Math.abs(vy) < 0.6 ? 't = ' + fmt(tau, 2) + ' s · at the highest point vy = 0 and the velocity is entirely horizontal, v = vx = ' + fmt(f.vx, 1) + ' m/s'
      : vy > 0 ? 't = ' + fmt(tau, 2) + ' s · vx stays at ' + fmt(f.vx, 1) + ' m/s while vy has fallen from ' + fmt(f.vy0, 1) + ' m/s to ' + fmt(vy, 1) + ' m/s'
      : 't = ' + fmt(tau, 2) + ' s · vx stays at ' + fmt(f.vx, 1) + ' m/s while vy is now −' + fmt(-vy, 1) + ' m/s, pointing downward');
    readout(d.readout, `\\kv = \\sqrt{\\kvx^2 + \\kvy^2} = \\sqrt{${fmt(f.vx, 1)}^2 + (${sgn(vy)}${fmt(Math.abs(vy), 1)})^2} = ${fmt(v, 1)}\\ \\text{m/s}\\qquad \\theta_v = \\tan^{-1}(\\kvy/\\kvx) = ${sgn(thv)}${fmt(Math.abs(thv), 1)}^\\circ`,
      'The horizontal motion has no acceleration, so vx is the same at every point; the vertical motion is free fall with a_y = −g, so vy changes by 9.80 m/s every second.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => fl().T / 5), draw });
})();

/* =====================================================================
   FIGURE 3.36: the fireworks shell of Example 3.4. The shell rises to its
   apex, where the fuse fires; h is bracketed beside the path and x under
   it, and vy falls to zero on the graph beside. Finite motion, one run to
   the top per loop, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-fireworks', 640);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 30, max: 100, step: 0.5, value: 70, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial speed' });
  const th = ctl(d.controls, { label: '\\theta_0', cls: '', min: 30, max: 89, step: 0.5, value: 75, unit: 'º', dec: 1, onInput: reset, aria: 'launch angle' });
  const fl = () => flight(v0.v, th.v);
  const cy = cycle(() => fl().tTop + 0.6, 1.4);   /* the flight to the top, then the burst opens */
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const f = fl(), tau = cy.now(), t = Math.min(tau, f.tTop), atTop = tau >= f.tTop - 1e-9, open = Math.min(1, (tau - f.tTop) / 0.6);
    const x = f.x(t), y = f.y(t), vy = f.vy(t), xTop = f.x(f.tTop);
    /* the scene, a tall trajectory with one scale for both axes */
    const box = { l: 220, r: 760, t: 170, b: 540 };
    const SC = Math.min((box.r - box.l) / xTop, (box.b - box.t) / f.h);
    const X = (m) => box.l + m * SC, Y = (m) => box.b - m * SC;
    ground(ctx, 60, 840, box.b);
    line(ctx, X(0), box.b + 6, X(0), box.t - 40, PAL.muted, 2); text(ctx, 'y', X(0) - 22, box.t - 32, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'x', 850, box.b + 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    path(ctx, f, 0, f.tTop, X, Y, PAL.muted, 3, [8, 8]);
    path(ctx, f, 0, t, X, Y, PAL.ink, 4);
    /* the launch velocity and its angle */
    launch(ctx, X(0), Y(0), 40 + v0.v * 1.4, th.v, 'v₀ = ' + fmt(v0.v, 1) + ' m/s');
    angleArc(ctx, X(0), Y(0), 56, th.v, 'θ₀ = ' + fmt(th.v, 1) + 'º', PAL.ink);
    /* the height and the horizontal displacement of the apex */
    line(ctx, X(xTop), Y(f.h), X(xTop), box.b, PAL.muted, 2, [4, 8]);
    line(ctx, X(0), Y(f.h), X(xTop), Y(f.h), PAL.muted, 2, [4, 8]);
    vbracket(ctx, X(xTop) + 46, Y(f.h), Y(0), C('position'), 'h = ' + fmt(f.h, 0) + ' m', 1);
    hbracket(ctx, X(0), X(xTop), box.b + 54, C('position'), '');
    text(ctx, 'x = ' + fmt(xTop, 0) + ' m', (X(0) + X(xTop)) / 2, box.b + 80, C('position'), { weight: 600, align: 'center' });
    /* the shell and, at the top, its burst */
    if (atTop) burst(ctx, X(xTop), Y(f.h), open);
    shell(ctx, X(x), Y(y), PAL.ink);
    if (!atTop && vy > 1) { arrow(ctx, X(x) + 30, Y(y), X(x) + 30, Y(y) - vy * 2.2, C('velocity'), 4); text(ctx, 'vy = ' + fmt(vy, 1) + ' m/s', X(x) + 42, Y(y) - vy * 1.1, C('velocity'), { size: 20, weight: 600 }); }
    /* vy against t, beside the scene */
    const tr = nice(0, f.tTop, 3);
    const g = axes(ctx, { l: 960, r: 1310, t: 170, b: 480 }, [0, tr.hi], [0, Math.ceil(f.vy0 / 20) * 20], { xl: 't (s)', xc: C('time'), yl: 'vy (m/s)', yc: C('velocity'), nx: tr.n, ny: 2, fx: (s) => fmt(s, decs(tr)) });
    line(ctx, g.X(0), g.Y(f.vy0), g.X(f.tTop), g.Y(0), C('velocity'), 5);
    line(ctx, g.X(t), g.Y(0), g.X(t), g.Y(vy), C('time'), 2, [4, 8]);
    dot(ctx, g.X(0), g.Y(f.vy0), C('velocity'), false, 9); dot(ctx, g.X(t), g.Y(vy), PAL.ink, true, 9);
    text(ctx, 'vy = 0 at the top', g.X(tr.hi) - 10, g.Y(Math.ceil(f.vy0 / 20) * 20) + 22, C('velocity'), { size: 17, weight: 600, align: 'right' });
    headline(ctx, atTop ? 't = ' + fmt(f.tTop, 2) + ' s · the shell reaches its highest point, ' + fmt(f.h, 0) + ' m up and ' + fmt(xTop, 0) + ' m along, where vy = 0'
      : 't = ' + fmt(t, 2) + ' s · the shell is ' + fmt(y, 0) + ' m up and still rising at vy = ' + fmt(vy, 1) + ' m/s');
    readout(d.readout, `\\kh = \\frac{\\kvoy^2}{2\\kg} = \\frac{(${fmt(f.vy0, 1)}\\ \\text{m/s})^2}{2(9.80\\ \\text{m/s}^2)} = ${fmt(f.h, 0)}\\ \\text{m}`,
      'The time to the top is t = 2y/(v₀y + vy) = ' + fmt(f.tTop, 2) + ' s, and in that time the horizontal velocity vx = ' + fmt(f.vx, 1) + ' m/s carries the shell x = vx t = ' + fmt(xTop, 0) + ' m.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (fl().tTop + 0.6) / 5), draw });
})();

/* =====================================================================
   FIGURE 3.37: the hot rock of Example 3.5. The rock leaves the rim,
   rises and falls to the slope below; at impact its velocity is drawn
   with its components and its angle. The graph below is y against t, the
   parabola crossing the landing level twice, the earlier root hollow.
   Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-rock', 800);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 10, max: 40, step: 0.5, value: 25, unit: 'm/s', dec: 1, onInput: reset, aria: 'initial speed' });
  const th = ctl(d.controls, { label: '\\theta_0', cls: '', min: 0, max: 70, step: 0.5, value: 35, unit: 'º', dec: 1, onInput: reset, aria: 'launch angle' });
  const yl = ctl(d.controls, { label: '\\ky', cls: 'position', min: -60, max: -5, step: 0.5, value: -20, unit: 'm', dec: 1, onInput: reset, aria: 'height of the landing point' });
  const fl = () => flight(v0.v, th.v);
  const roots = () => { const f = fl(), disc = Math.sqrt(f.vy0 * f.vy0 - 2 * G * yl.v); return [(f.vy0 + disc) / G, (f.vy0 - disc) / G]; };
  const cy = cycle(() => roots()[0], 1.4);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const f = fl(), [tp, tn] = roots(), tau = cy.now(), done = tau >= tp - 1e-9;
    const x = f.x(tau), y = f.y(tau), vy = f.vy(tau), v = Math.hypot(f.vx, vy), thv = Math.atan2(vy, f.vx) / RAD;
    const xl = f.x(tp), vyl = f.vy(tp), vl = Math.hypot(f.vx, vyl), thl = Math.atan2(vyl, f.vx) / RAD;
    /* the scene: the rim at the origin, the flank of the volcano as the straight line down to the landing point */
    const box = { l: 240, r: 1150, t: 100, b: 400 };
    const top = Math.max(f.h, 2), SC = Math.min((box.r - box.l) / xl, (box.b - box.t) / (top - yl.v));
    const X = (m) => box.l + m * SC, Y = (m) => box.t + (top - m) * SC;
    const xr = Math.min(X(1.25 * xl), 1190), yr0 = Y(yl.v) + ((xr - X(xl)) * (Y(yl.v) - Y(0))) / (X(xl) - X(0));
    const surface = [[40, Y(0) + 90], [Math.max(70, X(-0.3 * xl)), Y(0)], [X(0), Y(0)], [X(xl), Y(yl.v)], [xr, yr0], [1340, yr0 + 40]];
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); surface.forEach(([sx, sy], i) => (i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy))); ctx.lineTo(1340, 530); ctx.lineTo(40, 530); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); surface.forEach(([sx, sy], i) => (i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy))); ctx.stroke(); ctx.restore();
    /* the level of the rim, the drop to the landing point, and the trajectory */
    line(ctx, X(0), Y(0), xr + 60, Y(0), PAL.muted, 2, [8, 8]);
    vbracket(ctx, xr + 40, Y(0), Y(yl.v), C('position'), 'y = ' + fmt(yl.v, 1) + ' m', 1);
    path(ctx, f, 0, tp, X, Y, PAL.muted, 3, [8, 8]);
    path(ctx, f, 0, tau, X, Y, PAL.ink, 4);
    launch(ctx, X(0), Y(0), 30 + v0.v * 2.2, th.v, 'v₀ = ' + fmt(v0.v, 1) + ' m/s');
    if (th.v > 8) angleArc(ctx, X(0), Y(0), 44, th.v, fmt(th.v, 1) + 'º', PAL.ink);
    dot(ctx, X(xl), Y(yl.v), C('position'), true, 8);
    /* the rock and its velocity; at impact the components and the angle below the horizontal */
    const px = X(x), py = Y(y), K = 4.5, cv = C('velocity');
    rock(ctx, px, py, PAL.ink);
    if (done) {
      arrow(ctx, px, py, px + f.vx * K, py, alpha(cv, 0.6), 3); text(ctx, 'vx = ' + fmt(f.vx, 1) + ' m/s', px + f.vx * K + 10, py - 4, cv, { size: 18, weight: 600 });
      arrow(ctx, px, py, px, py - vyl * K, alpha(cv, 0.6), 3); text(ctx, 'vy = ' + sgn(vyl) + fmt(Math.abs(vyl), 1) + ' m/s', px - 12, py - vyl * K + 6, cv, { size: 18, weight: 600, align: 'right' });
      arrow(ctx, px, py, px + f.vx * K, py - vyl * K, cv, 5);
      text(ctx, 'v = ' + fmt(vl, 1) + ' m/s', px + f.vx * K + 10, py - vyl * K + 8, cv, { size: 20, weight: 600 });
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(px, py, 40, 0, -thl * RAD, false); ctx.stroke(); ctx.restore();
      text(ctx, 'θv = ' + fmt(thl, 1) + 'º', px + 62, py + 40, PAL.ink, { size: 20, weight: 600 });
    } else if (tau > 0.05) {
      arrow(ctx, px, py, px + f.vx * K * 0.6, py - vy * K * 0.6, cv, 4);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', px + f.vx * K * 0.6 + 12, py - vy * K * 0.6, cv, { size: 18, weight: 600 });
    }
    arrow(ctx, px - 28, py, px - 28, py + G * 4.5, C('acceleration'), 4); text(ctx, 'a = −g', px - 40, py + G * 4.5 + 2, C('acceleration'), { size: 18, weight: 600, align: 'right' });
    /* y against t: both roots of the quadratic */
    const t0 = tn * 1.6 - 0.3, t1 = tp * 1.12, yr = nice(Math.min(yl.v, f.y(t1)) * 1.05, Math.max(f.h, 1), 3), tr = nice(t0, t1, 5);
    const g = axes(ctx, { l: 180, r: 1240, t: 585, b: 770 }, [tr.lo, tr.hi], [yr.lo, yr.hi], { xl: 't (s)', xc: C('time'), yl: 'y (m)', yc: C('position'), nx: tr.n, ny: yr.n, fx: (s) => fmt(s, decs(tr)) });
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.08); ctx.fillRect(g.X(tr.lo), 585, g.X(0) - g.X(tr.lo), 185); ctx.restore();
    curve(ctx, f.y, tr.lo, tr.hi, g.X, g.Y, C('position'), 5, 120);
    line(ctx, g.X(tr.lo), g.Y(yl.v), g.X(tr.hi), g.Y(yl.v), C('position'), 3, [10, 10]);
    text(ctx, 'landing level, y = ' + fmt(yl.v, 1) + ' m', g.X((tn + tp) / 2), g.Y(yl.v) - 20, C('position'), { size: 17, weight: 600, align: 'center' });   /* between the roots, clear of both markers */
    line(ctx, g.X(tp), g.Y(0), g.X(tp), g.Y(yl.v), C('time'), 3, [4, 8]); line(ctx, g.X(tn), g.Y(0), g.X(tn), g.Y(yl.v), PAL.muted, 3, [4, 8]);
    dot(ctx, g.X(tp), g.Y(yl.v), C('time'), true, 10); dot(ctx, g.X(tn), g.Y(yl.v), PAL.muted, false, 10);
    dot(ctx, g.X(tau), g.Y(y), PAL.ink, true, 9);
    text(ctx, 't = ' + fmt(tp, 2) + ' s', g.X(tp) + 14, g.Y(yl.v) - 22, C('time'), { size: 18, weight: 600 });
    text(ctx, 't = ' + fmt(tn, 2) + ' s, before the launch', g.X(tn) + 14, g.Y(yl.v) + 24, PAL.muted, { size: 17, weight: 600 });
    headline(ctx, done ? 't = ' + fmt(tp, 2) + ' s · the rock lands ' + fmt(-yl.v, 1) + ' m below its start at ' + fmt(vl, 1) + ' m/s, ' + fmt(-thl, 1) + 'º below the horizontal'
      : 't = ' + fmt(tau, 2) + ' s · the rock is ' + fmt(Math.abs(y), 1) + ' m ' + (y >= 0 ? 'above' : 'below') + ' the rim and ' + fmt(x, 1) + ' m along, moving at ' + fmt(v, 1) + ' m/s');
    readout(d.readout, `(${fmt(G / 2, 2)}\\ \\text{m/s}^2)\\kt^2 - (${fmt(f.vy0, 1)}\\ \\text{m/s})\\kt - (${fmt(-yl.v, 1)}\\ \\text{m}) = 0 \\;\\Rightarrow\\; \\kt = ${fmt(tp, 2)}\\ \\text{s}\\ \\text{or}\\ ${fmt(tn, 2)}\\ \\text{s}`,
      'The negative root is an event before the launch and is discarded. At impact vx = ' + fmt(f.vx, 1) + ' m/s and vy = ' + sgn(vyl) + fmt(Math.abs(vyl), 1) + ' m/s, so v = ' + fmt(vl, 1) + ' m/s at θv = ' + fmt(thl, 1) + 'º.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => roots()[0] / 5), draw });
})();

/* =====================================================================
   FIGURE 3.38: the range on level ground. The projectile flies its
   trajectory; the complementary angle's path is dashed and lands at the
   same range; the 45º path is faint and goes farthest. Below, R against
   θ₀ for the set speed. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-range', 800);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 10, max: 60, step: 1, value: 50, unit: 'm/s', dec: 0, onInput: reset, aria: 'initial speed' });
  const th = ctl(d.controls, { label: '\\theta_0', cls: '', min: 5, max: 85, step: 1, value: 45, unit: 'º', dec: 0, onInput: reset, aria: 'launch angle' });
  const fl = () => flight(v0.v, th.v);
  const cy = cycle(() => fl().T, 1.2);
  function reset() { cy.reset(); }
  const range = (v, a) => (v * v * Math.sin(2 * a * RAD)) / G;
  function draw() {
    const { ctx } = begin(d.c);
    const f = fl(), tau = cy.now(), done = tau >= f.T - 1e-9, comp = 90 - th.v, fc = flight(v0.v, comp), f45 = flight(v0.v, 45), is45 = th.v === 45;
    const x = f.x(tau), y = Math.max(0, f.y(tau));
    /* the scene: all three trajectories at one scale */
    const box = { l: 200, r: 1300, t: 110, b: 390 };
    const SC = Math.min((box.r - box.l) / f45.R, (box.b - box.t) / Math.max(f.h, fc.h, f45.h));
    const X = (m) => box.l + m * SC, Y = (m) => box.b - m * SC;
    ground(ctx, 60, 1340, box.b);
    if (!is45) { path(ctx, f45, 0, f45.T, X, Y, alpha(PAL.muted, 0.45), 3); text(ctx, '45º', X(f45.x(f45.tTop)), Y(f45.h) - 20, PAL.muted, { size: 18, align: 'center' }); }
    if (!is45) { path(ctx, fc, 0, fc.T, X, Y, PAL.muted, 3, [10, 10]); text(ctx, comp + 'º', X(fc.x(fc.tTop)), Y(fc.h) - 20, PAL.muted, { size: 18, weight: 600, align: 'center' }); }
    path(ctx, f, 0, f.T, X, Y, alpha(PAL.ink, 0.35), 3);
    path(ctx, f, 0, tau, X, Y, PAL.ink, 4);
    text(ctx, th.v + 'º', X(f.x(f.tTop)), Y(f.h) - 20, PAL.ink, { size: 18, weight: 600, align: 'center' });
    launch(ctx, X(0), Y(0), 30 + v0.v * 1.6, th.v, 'v₀ = ' + v0.v + ' m/s');
    hbracket(ctx, X(0), X(f.R), box.b + 50, C('position'), '');
    text(ctx, 'R = ' + fmt(f.R, 0) + ' m', X(f.R / 2), box.b + 76, C('position'), { weight: 600, align: 'center' });
    dot(ctx, X(f.R), Y(0), C('position'), true, 8);
    dot(ctx, X(x), Y(y), PAL.ink, true, 10);
    /* R against θ₀ for the set speed */
    const Rmax = f45.R, yr = nice(0, Rmax, 3);
    const g = axes(ctx, { l: 180, r: 1240, t: 570, b: 760 }, [0, 90], [0, yr.hi], { xl: 'θ₀ (º)', xc: PAL.ink, yl: 'R (m)', yc: C('position'), nx: 6, ny: yr.n, fx: (a) => fmt(a, 0) });
    curve(ctx, (a) => range(v0.v, a), 0, 90, g.X, g.Y, C('position'), 5, 90);
    line(ctx, g.X(th.v), g.Y(0), g.X(th.v), g.Y(f.R), PAL.ink, 2, [4, 8]);
    if (!is45) { line(ctx, g.X(comp), g.Y(0), g.X(comp), g.Y(f.R), PAL.muted, 2, [4, 8]); line(ctx, g.X(th.v), g.Y(f.R), g.X(comp), g.Y(f.R), C('position'), 2, [10, 10]); dot(ctx, g.X(comp), g.Y(f.R), C('position'), false, 10); }
    dot(ctx, g.X(th.v), g.Y(f.R), C('position'), true, 10);
    text(ctx, 'R = ' + fmt(f.R, 0) + ' m at ' + th.v + 'º' + (is45 ? '' : ' and at ' + comp + 'º'), g.X(45), g.Y(f.R) + (f.R > 0.7 * Rmax ? 30 : -24), C('position'), { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.8) });
    text(ctx, 'farthest at 45º', g.X(45), g.Y(Rmax) - 22, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, is45 ? 't = ' + fmt(tau, 2) + ' s · at 45º a ' + v0.v + ' m/s launch lands ' + fmt(f.R, 0) + ' m away, the farthest this speed can reach'
      : 't = ' + fmt(tau, 2) + ' s · at ' + th.v + 'º a ' + v0.v + ' m/s launch lands ' + fmt(f.R, 0) + ' m away, and so does a launch at ' + comp + 'º');
    readout(d.readout, `\\kR = \\frac{\\kvo^2 \\sin 2\\theta_0}{\\kg} = \\frac{(${v0.v}\\ \\text{m/s})^2 \\sin ${2 * th.v}^\\circ}{9.80\\ \\text{m/s}^2} = ${fmt(f.R, 0)}\\ \\text{m}`,
      is45 ? 'No other angle reaches as far at this speed, and every other angle shares its range with its complement, the angle that makes 90º with it.'
        : 'A launch at ' + comp + 'º has the same range but rises to ' + fmt(fc.h, 1) + ' m, where the ' + th.v + 'º launch rises to ' + fmt(f.h, 1) + ' m.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => fl().T / 5), draw });
})();

/* =====================================================================
   FIGURE 3.39: the tower and the satellite. A projectile leaves a tall
   tower horizontally and falls around the Earth under an acceleration
   that always points at the centre, until it lands or completes an
   orbit. The path is integrated under the inverse-square attraction with
   g = 9.80 m/s² at the surface. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-orbit', 660);
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 1, max: 9, step: 0.1, value: 6, unit: 'km/s', dec: 1, onInput: reset, aria: 'launch speed' });
  const ht = ctl(d.controls, { label: '\\text{tower height}', cls: '', min: 200, max: 3000, step: 100, value: 1000, unit: 'km', dec: 0, onInput: reset, aria: 'tower height' });
  const RE = 6.37e6, GM = G * RE * RE;
  /* the flight integrated from the top of the tower: points (x, y, t, angle swept) until the surface or one full turn */
  function integrate(v, h) {
    const r0 = RE + h * 1000; let x = 0, y = r0, vx = v * 1000, vy = 0, t = 0, swept = 0, last = Math.PI / 2;
    const acc = (px, py) => { const r = Math.hypot(px, py), a = -GM / (r * r * r); return [a * px, a * py]; };
    const pts = [{ x, y, t, swept, r: r0 }];
    const dt = Math.max(2, Math.min(8, 40000 / (v * 1000)));
    for (let i = 0; i < 60000; i++) {
      /* one step of RK4 */
      const [a1x, a1y] = acc(x, y);
      const x2 = x + 0.5 * dt * vx, y2 = y + 0.5 * dt * vy, vx2 = vx + 0.5 * dt * a1x, vy2 = vy + 0.5 * dt * a1y; const [a2x, a2y] = acc(x2, y2);
      const x3 = x + 0.5 * dt * vx2, y3 = y + 0.5 * dt * vy2, vx3 = vx + 0.5 * dt * a2x, vy3 = vy + 0.5 * dt * a2y; const [a3x, a3y] = acc(x3, y3);
      const x4 = x + dt * vx3, y4 = y + dt * vy3, vx4 = vx + dt * a3x, vy4 = vy + dt * a3y; const [a4x, a4y] = acc(x4, y4);
      x += (dt / 6) * (vx + 2 * vx2 + 2 * vx3 + vx4); y += (dt / 6) * (vy + 2 * vy2 + 2 * vy3 + vy4);
      vx += (dt / 6) * (a1x + 2 * a2x + 2 * a3x + a4x); vy += (dt / 6) * (a1y + 2 * a2y + 2 * a3y + a4y); t += dt;
      const ang = Math.atan2(y, x); let da = last - ang; if (da < -Math.PI) da += TAU; if (da > Math.PI) da -= TAU; swept += da; last = ang;
      const r = Math.hypot(x, y);
      if (r <= RE) { const p = pts[pts.length - 1], k = (p.r - RE) / (p.r - r); pts.push({ x: p.x + k * (x - p.x), y: p.y + k * (y - p.y), t: p.t + k * dt, swept: p.swept + k * (swept - p.swept), r: RE }); return { pts, landed: true, T: pts[pts.length - 1].t, rmax: Math.max(...pts.map((q) => q.r)) }; }
      pts.push({ x, y, t, swept, r });
      if (swept >= TAU) return { pts, landed: false, T: t, rmax: Math.max(...pts.map((q) => q.r)) };
    }
    return { pts, landed: false, T: t, rmax: Math.max(...pts.map((q) => q.r)) };
  }
  /* the paths are computed when a slider has changed since the last frame, never more often */
  let run = null, faint = null, key = '';
  function paths() {
    const k = v0.v + '|' + ht.v; if (k === key) return;
    key = k; run = integrate(v0.v, ht.v);
    faint = [3, 5, 7].filter((v) => Math.abs(v - v0.v) > 0.05).map((v) => integrate(v, ht.v));
  }
  const cy = cycle(() => { paths(); return run.T; }, 1.4);
  function reset() { cy.reset(); }
  /* the index of the first point at or after the model time tau */
  const at = (tau) => { const p = run.pts; let lo = 0, hi = p.length - 1; while (lo < hi) { const m = (lo + hi) >> 1; if (p[m].t < tau) lo = m + 1; else hi = m; } return Math.max(0, Math.min(lo, p.length - 1)); };
  function draw() {
    paths();
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = tau >= run.T - 1e-9, pi = at(tau), p = run.pts[pi], end = run.pts[run.pts.length - 1];
    const cx = 660, cyy = 350, RPX = 250 / Math.max(1.14, run.rmax / RE + 0.05);
    const X = (m) => cx + (m / RE) * RPX, Y = (m) => cyy - (m / RE) * RPX;
    /* the Earth */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyy, RPX, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'Earth', cx, cyy + 8, PAL.muted, { size: 22, align: 'center' });
    /* the surface the projectile covers, from the tower to the landing point */
    const arcTo = run.landed ? end.swept : Math.min(p.swept, TAU);
    ctx.save(); ctx.strokeStyle = C('position'); ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(cx, cyy, RPX + 2, -Math.PI / 2, -Math.PI / 2 + Math.min(p.swept, arcTo), false); ctx.stroke(); ctx.restore();
    /* the faint launches at lower speeds, and the current path */
    const names = [3, 5, 7].filter((v) => Math.abs(v - v0.v) > 0.05);
    faint.forEach((q, i) => {
      ctx.save(); ctx.strokeStyle = alpha(PAL.muted, 0.7); ctx.lineWidth = 2; ctx.beginPath(); q.pts.forEach((s, j) => (j ? ctx.lineTo(X(s.x), Y(s.y)) : ctx.moveTo(X(s.x), Y(s.y)))); ctx.stroke(); ctx.restore();
      const e = q.pts[q.pts.length - 1], a = Math.atan2(e.y, e.x);
      if (RPX > 150) text(ctx, names[i] + ' km/s', X(e.x) + 30 * Math.cos(a), Y(e.y) - 30 * Math.sin(a), PAL.muted, { size: 16, align: Math.cos(a) < -0.2 ? 'right' : 'left' });
    });
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath(); run.pts.forEach((s, i) => (i ? ctx.lineTo(X(s.x), Y(s.y)) : ctx.moveTo(X(s.x), Y(s.y)))); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); for (const s of run.pts) { if (s.t > tau) break; ctx.lineTo(X(s.x), Y(s.y)); } ctx.stroke(); ctx.restore();
    /* the tower and the launch */
    const hpx = (ht.v * 1000 / RE) * RPX;
    tower(ctx, cx, cyy - RPX, hpx, PAL.ink);
    text(ctx, commas(fmt(ht.v, 0)) + ' km tower', cx - 40, cyy - RPX - hpx - 4, PAL.muted, { size: 17, align: 'right' });
    const L = 40 + v0.v * 14, ay = cyy - RPX - hpx;
    arrow(ctx, cx, ay, cx + L, ay, C('velocity'), 5);
    text(ctx, 'v₀ = ' + fmt(v0.v, 1) + ' km/s', cx + L / 2 + 10, ay - 24, C('velocity'), { size: 20, weight: 600, align: 'center' });
    /* the projectile, its velocity and the acceleration toward the centre */
    const px = X(p.x), py = Y(p.y), r = Math.hypot(p.x, p.y), ga = (RE * RE) / (r * r);
    if (tau > 0 && !(done && run.landed) && pi + 1 < run.pts.length) {
      const q = run.pts[pi + 1], qx = X(q.x) - px, qy = Y(q.y) - py, qn = Math.hypot(qx, qy) || 1;
      const sp = Math.hypot(q.x - p.x, q.y - p.y) / Math.max(1e-6, q.t - p.t) / 1000;
      arrow(ctx, px, py, px + (qx / qn) * (30 + sp * 10), py + (qy / qn) * (30 + sp * 10), C('velocity'), 4);
    }
    arrow(ctx, px, py, px + ((cx - px) / (Math.hypot(cx - px, cyy - py) || 1)) * 46 * ga, py + ((cyy - py) / (Math.hypot(cx - px, cyy - py) || 1)) * 46 * ga, C('acceleration'), 4);
    dot(ctx, px, py, PAL.ink, true, 9);
    /* the ranges: along the curved surface, and on level ground */
    const along = (arcTo * RE) / 1000, flat = (v0.v * 1000 * Math.sqrt((2 * ht.v * 1000) / G)) / 1000, sofar = (Math.min(p.swept, arcTo) * RE) / 1000;
    if (run.landed) {
      const a = -Math.PI / 2 + end.swept, lx = cx + (RPX + 34) * Math.cos(a), ly = Math.max(ay + 44, cyy + (RPX + 34) * Math.sin(a));
      text(ctx, sig3(along) + ' km along the surface', lx, ly, C('position'), { size: 20, weight: 600, align: Math.cos(a) < -0.2 ? 'right' : 'left', bg: alpha(PAL.panel, 0.8) });
    }
    const min = (s) => fmt(s / 60, 1) + ' min';
    headline(ctx, done && run.landed ? 't = ' + min(run.T) + ' · it lands ' + sig3(along) + ' km along the curved surface, against ' + sig3(flat) + ' km on level ground'
      : done ? 't = ' + min(run.T) + ' · at ' + fmt(v0.v, 1) + ' km/s the Earth curves away as fast as the projectile falls: it is in orbit'
      : 't = ' + min(tau) + ' · the projectile is ' + sig3((r - RE) / 1000) + ' km up and has covered ' + sig3(sofar) + ' km of the surface so far');
    readout(d.readout, `\\kR = \\kvo\\sqrt{2h/\\kg} = (${fmt(v0.v, 1)}\\ \\text{km/s})\\sqrt{\\frac{2(${commas(fmt(ht.v * 1000, 0))}\\ \\text{m})}{9.80\\ \\text{m/s}^2}} = ${sig3(flat)}\\ \\text{km on level ground}`,
      run.landed ? 'The projectile went ' + sig3(along) + ' km along the curved surface, ' + fmt(along / flat, 1) + ' times as far, because the ground fell away beneath it and it had farther to fall.'
        : 'Instead of landing, the projectile circles the Earth in ' + fmt(run.T / 60, 0) + ' min: it falls the whole way round and never reaches the surface.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => run.T / 5), draw });
})();
};
