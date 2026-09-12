/* Figures for section 8.2 Impulse. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, axes, nice, curve, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180, TAU = 2 * Math.PI;
/* a whole number with thousands separators, which is how this section's forces read */
const whole = (x) => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/* ---------- sprites drawn here, in ink ---------- */
/* a seated passenger facing right, the foot of their seat at (x, y) */
function passenger(ctx, x, y, color) {
  ctx.save();
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(x - 32, y - 64); ctx.lineTo(x - 26, y + 12); ctx.lineTo(x + 22, y + 14); ctx.stroke();
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(x + 4, y - 78, 13, 0, TAU); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x - 2, y - 64); ctx.lineTo(x - 8, y - 18);
  ctx.moveTo(x - 8, y - 18); ctx.lineTo(x + 34, y - 14);
  ctx.moveTo(x + 34, y - 14); ctx.lineTo(x + 30, y + 14);
  ctx.moveTo(x - 1, y - 54); ctx.lineTo(x + 32, y - 36);
  ctx.stroke(); ctx.restore();
}
/* a billiard ball centred on (x, y) */
function ball(ctx, x, y, color, r = 18) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.28, 0, TAU); ctx.fill(); ctx.restore();
}
/* an angle arc at (x, y) between two canvas angles, with its label beyond the arc */
function arc(ctx, x, y, r, a1, a2, label, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, a1, a2); ctx.stroke(); ctx.restore();
  const a = (a1 + a2) / 2;
  if (label) text(ctx, label, x + (r + 34) * Math.cos(a), y + (r + 34) * Math.sin(a), color, { size: 20, weight: 600, align: 'center' });
}

/* =====================================================================
   SIM: the passenger brought to rest by the padding. The momentum has to
   go whatever the padding is like, and the contact time is what sets the
   force. The stop happens in time, so the figure runs a finite loop and
   takes the transport; the contact is drawn in slow motion, since it is
   over in a few hundredths of a second.
===================================================================== */
(function () {
  const d = sim('sim-impulse', 860);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 120, step: 5, value: 75, unit: 'kg', dec: 0, onInput: reset, aria: 'mass of the passenger' });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 30, step: 0.5, value: 20, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed before the stop' });
  const dt = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.02, max: 0.5, step: 0.01, value: 0.1, unit: 's', dec: 2, onInput: reset, aria: 'contact time' });
  const APPROACH = 1.6, CONTACT = 1.8;            /* seconds of the drawing's own clock */
  const cy = cycle(() => APPROACH + CONTACT, 1.2);
  function reset() { cy.reset(); }
  const DTMIN = 0.02;
  function draw() {
    const { ctx } = begin(d.c);
    const p = m.v * v.v, Fn = p / dt.v;
    const tau = cy.now(), hit = tau >= APPROACH;
    const c = hit ? Math.min(1, (tau - APPROACH) / CONTACT) : 0, done = c > 0.999;
    const left = p * (1 - c), tin = c * dt.v;
    const cp = C('momentum'), cf = C('force');
    /* the scene: the strip, the padded barrier and the passenger */
    const y = 300, wallX = 1000, depth = 70, startX = 250;
    strip(ctx, 90, wallX, y + 22, 44);
    ctx.save(); ctx.fillStyle = PAL.soft2; ctx.fillRect(wallX, 190, depth, 260); ctx.restore();
    fixed(ctx, wallX + depth, 190, 110, 260);
    line(ctx, wallX, 190, wallX, 450, PAL.muted, 3, [10, 10]);
    text(ctx, 'the padding', wallX + depth / 2, 474, PAL.muted, { size: 17, align: 'center' });
    const squash = c * c * (3 - 2 * c) * depth * 0.7;
    const px = hit ? wallX - 44 + squash : startX + (wallX - 44 - startX) * (tau / APPROACH);
    passenger(ctx, px, y, PAL.ink);
    text(ctx, fmt(m.v, 0) + ' kg', px + 2, y + 46, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the momentum still to be taken away, and the force the padding pushes back with */
    const len = Math.min(320, (300 * left) / 2000);
    if (left > 1) {
      arrow(ctx, px, 125, px + len, 125, cp, 5);
      text(ctx, 'p = ' + whole(left) + ' kg·m/s', px - 16, 125, cp, { size: 21, weight: 600, align: 'right' });
    } else text(ctx, 'p = 0: the passenger is at rest', px - 16, 125, cp, { size: 21, weight: 600, align: 'right' });
    if (hit && !done) {
      const fl = 70 + 180 * Math.min(1, Fn / 90000);
      arrow(ctx, px + 50, 190, px + 50 - fl, 190, cf, 5);
      text(ctx, 'F = ' + whole(Fn) + ' N', px + 38 - fl, 190, cf, { size: 21, weight: 600, align: 'right' });
    }
    /* the graph: the force the stop needs against the time it is given */
    const box = { l: 230, r: 1290, t: 560, b: 750 };
    const yr = nice(0, p / DTMIN, 4);
    const g = axes(ctx, box, [0, 0.5], [0, yr.hi], { xl: 'Δt (s)', xc: C('time'), yl: 'F (N)', yc: cf, nx: 5, ny: yr.n, fx: (t) => fmt(t, 1), fy: (q) => whole(q) });
    ctx.save(); ctx.fillStyle = alpha(cp, 0.24); ctx.fillRect(g.X(0), g.Y(Fn), g.X(dt.v) - g.X(0), g.Y(0) - g.Y(Fn)); ctx.restore();
    curve(ctx, (t) => Math.min(yr.hi, p / t), DTMIN, 0.5, g.X, g.Y, cf, 5, 200);
    line(ctx, g.X(dt.v), g.Y(0), g.X(dt.v), g.Y(Fn), C('time'), 2, [4, 8]);
    line(ctx, g.X(0), g.Y(Fn), g.X(dt.v), g.Y(Fn), cf, 2, [4, 8]);
    dot(ctx, g.X(dt.v), g.Y(Fn), PAL.ink, true, 10);
    text(ctx, 'every rectangle under this curve has the same area, Δp = ' + whole(p) + ' kg·m/s', box.l, box.b + 96, cp, { size: 21, weight: 600 });
    headline(ctx, !hit
      ? 'the passenger is riding at ' + fmt(v.v, 1) + ' m/s and carries ' + whole(p) + ' kg·m/s of momentum'
      : !done
        ? 't = ' + fmt(tin, 3) + ' s into the contact · ' + whole(left) + ' kg·m/s is left, and the padding pushes back with ' + whole(Fn) + ' N'
        : 'all ' + whole(p) + ' kg·m/s has been taken away in ' + fmt(dt.v, 2) + ' s, which took a force of ' + whole(Fn) + ' N');
    readout(d.readout, `\\kFnet = \\frac{\\kdp}{\\kdt} = \\frac{(${fmt(m.v, 0)}\\ \\text{kg})(${fmt(v.v, 1)}\\ \\text{m/s})}{${fmt(dt.v, 2)}\\ \\text{s}} = ${whole(Fn)}\\ \\text{N}`,
      'The change in momentum is the same however the stop is made, so giving the force twice as long to act halves it. That is what the padding on a dashboard, and far more so an airbag, is for.');
  }
  register(d.fig, { update: (s) => cy.step(s, () => 1), draw });
})();

/* =====================================================================
   SIM: the billiard ball of Example 8.3 bouncing off the rigid wall. The
   momentum along the wall is untouched and the momentum across it is
   reversed, so the impulse is normal to the wall. The ball travels, so
   the figure runs a finite loop and takes the transport.
===================================================================== */
(function () {
  const d = sim('sim-billiard', 820);
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 60, step: 1, value: 30, unit: 'º', dec: 0, onInput: reset, aria: 'angle from the perpendicular' });
  const u = ctl(d.controls, { label: '\\ku', cls: 'velocity', min: 1, max: 10, step: 0.5, value: 5, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the ball' });
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 0.3, step: 0.01, value: 0.16, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the ball' });
  const IN = 1.8, OUT = 1.8;
  const cy = cycle(() => IN + OUT, 1.2);
  function reset() { cy.reset(); }
  const K = 170;                                  /* canvas units per kg·m/s of momentum arrow */
  function draw() {
    const { ctx } = begin(d.c);
    const a = th.v * RAD, p = m.v * u.v, dp = 2 * p * Math.cos(a);
    const tau = cy.now(), hit = tau >= IN, q = hit ? (tau - IN) / OUT : 1 - tau / IN;
    const cx = 1120, cyy = 380, run = Math.min(680, 240 / Math.max(Math.sin(a), 0.02));
    const cp = C('momentum'), cf = C('force');
    fixed(ctx, cx, 80, 110, 600);
    line(ctx, cx - 320, cyy, cx, cyy, PAL.muted, 2, [10, 10]);
    text(ctx, 'the perpendicular', cx - 330, cyy, PAL.muted, { size: 17, align: 'right' });
    /* the two lines the ball runs along, and the ball on one of them */
    line(ctx, cx - run * Math.cos(a), cyy - run * Math.sin(a), cx, cyy, PAL.rule, 3, [8, 8]);
    line(ctx, cx, cyy, cx - run * Math.cos(a), cyy + run * Math.sin(a), PAL.rule, 3, [8, 8]);
    ball(ctx, cx - q * run * Math.cos(a), hit ? cyy + q * run * Math.sin(a) : cyy - q * run * Math.sin(a), PAL.ink);
    /* the momentum before, the momentum after, and the change between them */
    const L = Math.min(p * K, 250);
    arrow(ctx, cx - L * Math.cos(a), cyy - L * Math.sin(a), cx, cyy, cp, 5);
    text(ctx, 'p before = ' + fmt(p, 2) + ' kg·m/s', cx - L * Math.cos(a) - 14, cyy - L * Math.sin(a) - 26, cp, { size: 21, weight: 600, align: 'right' });
    if (th.v > 4) arc(ctx, cx, cyy, 86, Math.PI, Math.PI + a, 'θ = ' + fmt(th.v, 0) + 'º', PAL.ink);
    if (hit) {
      arrow(ctx, cx, cyy, cx - L * Math.cos(a), cyy + L * Math.sin(a), cp, 5);
      text(ctx, 'p after = ' + fmt(p, 2) + ' kg·m/s', cx - L * Math.cos(a) - 14, cyy + L * Math.sin(a) + 28, cp, { size: 21, weight: 600, align: 'right' });
      if (th.v > 4) arc(ctx, cx, cyy, 130, Math.PI - a, Math.PI, 'θ = ' + fmt(th.v, 0) + 'º', PAL.ink);
      const dl = Math.min(dp * K, 500);
      arrow(ctx, cx - 40, 710, cx - 40 - dl, 710, cp, 7);
      text(ctx, 'Δp = ' + fmt(dp, 2) + ' kg·m/s, straight into the wall', cx - 54 - dl, 710, cp, { size: 22, weight: 600, align: 'right' });
      arrow(ctx, cx + 12, 650, cx + 146, 650, cf, 5);
      text(ctx, 'the force on the wall', cx + 14, 618, cf, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    text(ctx, 'along the wall the momentum keeps its ' + fmt(p * Math.sin(a), 2) + ' kg·m/s; across the wall, ' + fmt(p * Math.cos(a), 2) + ' kg·m/s is reversed',
      120, 780, PAL.ink, { size: 20 });
    headline(ctx, !hit
      ? 'the ball comes in at ' + fmt(u.v, 1) + ' m/s, ' + fmt(th.v, 0) + 'º from the perpendicular, carrying ' + fmt(p, 2) + ' kg·m/s'
      : 'θ = ' + fmt(th.v, 0) + 'º · the speed is the same on the way out, and the impulse the wall gives the ball is ' + fmt(dp, 2) + ' kg·m/s');
    readout(d.readout, `\\Delta p_x = -2m\\ku\\cos\\theta = -2(${fmt(m.v, 2)}\\ \\text{kg})(${fmt(u.v, 1)}\\ \\text{m/s})\\cos ${fmt(th.v, 0)}^\\circ = -${fmt(dp, 2)}\\ \\text{kg}\\cdot\\text{m/s}`,
      th.v === 0
        ? 'At the perpendicular the whole of the momentum is reversed, and that is the largest impulse the wall can give a ball of this speed.'
        : 'A ball that strikes head-on gets the larger impulse: the ratio of the two is 1/cos ' + fmt(th.v, 0) + 'º = ' + fmt(1 / Math.cos(a), 3) + '.');
  }
  register(d.fig, { update: (s) => cy.step(s, () => 1), draw });
})();

/* =====================================================================
   FIGURE 8.2: the actual force on a bouncing ball and the effective
   force that has the same area under it. The idea is one area against
   another and no clock runs in it, so this is a still picture that
   answers its sliders and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-effective-force', 680);
  const fp = ctl(d.controls, { label: '\\kF', cls: 'force', min: 200, max: 2000, step: 50, value: 1000, unit: 'N', dec: 0, aria: 'peak of the actual force' });
  const dur = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.02, max: 0.3, step: 0.01, value: 0.1, unit: 's', dec: 2, aria: 'length of the contact' });
  const sh = ctl(d.controls, { label: '\\text{shape}', cls: '', min: 1, max: 6, step: 0.1, value: 1.6, unit: '', dec: 1, aria: 'shape of the bump' });
  const T1 = 0.05;
  /* the mean of sin(πs) raised to the shape exponent: the fraction of the peak the effective force is */
  const mean = (k) => { let a = 0; const N = 400; for (let i = 0; i < N; i++) a += Math.pow(Math.sin((Math.PI * (i + 0.5)) / N), k); return a / N; };
  function draw() {
    const { ctx } = begin(d.c);
    const D = dur.v, t2 = T1 + D, feff = fp.v * mean(sh.v), imp = feff * D;
    const box = { l: 230, r: 1250, t: 150, b: 520 };
    const cf = C('force'), ct = C('time'), cp = C('momentum');
    const g = axes(ctx, box, [0, 0.4], [0, 2500], { xl: 't (s)', xc: ct, yl: 'F (N)', yc: cf, nx: 4, ny: 5, fx: (t) => fmt(t, 1), fy: (q) => whole(q) });
    const Fa = (t) => (t <= T1 || t >= t2 ? 0 : fp.v * Math.pow(Math.sin((Math.PI * (t - T1)) / D), sh.v));
    /* the area under the actual force is the impulse, so it is shaded as the momentum it is */
    ctx.save(); ctx.fillStyle = alpha(cp, 0.28); ctx.beginPath(); ctx.moveTo(g.X(T1), g.Y(0));
    for (let i = 0; i <= 200; i++) { const t = T1 + (D * i) / 200; ctx.lineTo(g.X(t), g.Y(Fa(t))); }
    ctx.lineTo(g.X(t2), g.Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(cp, 0.12); ctx.fillRect(g.X(T1), g.Y(feff), g.X(t2) - g.X(T1), g.Y(0) - g.Y(feff)); ctx.restore();
    ctx.save(); ctx.strokeStyle = cf; ctx.lineWidth = 3; ctx.setLineDash([10, 10]);
    ctx.strokeRect(g.X(T1), g.Y(feff), g.X(t2) - g.X(T1), g.Y(0) - g.Y(feff)); ctx.restore();
    curve(ctx, Fa, 0, 0.4, g.X, g.Y, cf, 5, 260);
    text(ctx, 'F actual', g.X(T1 + D / 2), g.Y(fp.v) - 28, cf, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'F effective = ' + whole(feff) + ' N', Math.min(g.X(t2) + 16, box.r - 250), g.Y(feff) - 26, cf, { size: 21, weight: 600 });
    line(ctx, g.X(T1), g.Y(0) + 10, g.X(T1), g.Y(0) + 34, PAL.muted, 2);
    line(ctx, g.X(t2), g.Y(0) + 10, g.X(t2), g.Y(0) + 34, PAL.muted, 2);
    text(ctx, 't₁', g.X(T1), g.Y(0) + 54, PAL.ink, { size: 21, weight: 600, align: 'center' });
    text(ctx, 't₂', g.X(t2), g.Y(0) + 54, PAL.ink, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'the shaded bump and the dashed rectangle have the same area, ' + fmt(imp, 1) + ' kg·m/s', box.l, box.b + 110, cp, { size: 21, weight: 600 });
    headline(ctx, 'the ball pushes with up to ' + whole(fp.v) + ' N for ' + fmt(D, 2) + ' s, and a steady ' + whole(feff) + ' N over the same ' + fmt(D, 2) + ' s would give the same impulse');
    readout(d.readout, `\\kdp = \\kFeff\\kdt = (${whole(feff)}\\ \\text{N})(${fmt(D, 2)}\\ \\text{s}) = ${fmt(imp, 1)}\\ \\text{kg}\\cdot\\text{m/s}`,
      'The area under the actual force has units of momentum and is the impulse between t₁ and t₂. The effective force is the steady force that encloses the same area over the same interval, so the two have the same effect on the ball.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   The two graphs the test prep items are set on, copied over as the book
   draws them: no sliders, and nothing moving.
===================================================================== */
function wallGraph(id, pts, note) {
  const d = sim(id, 540);
  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), ct = C('time');
    const g = axes(ctx, { l: 230, r: 1250, t: 130, b: 420 }, [0, 0.32], [0, 20], { xl: 't (s)', xc: ct, yl: 'F (N)', yc: cf, nx: 4, ny: 4, fx: (t) => fmt(t, 2), fy: (q) => fmt(q, 0) });
    ctx.save(); ctx.strokeStyle = cf; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath();
    pts.forEach(([t, f], i) => (i ? ctx.lineTo(g.X(t), g.Y(f)) : ctx.moveTo(g.X(t), g.Y(f))));
    ctx.stroke(); ctx.restore();
    headline(ctx, note);
  }
  register(d.fig, { update: () => {}, draw });
}
wallGraph('fig-bounce', [[0, 0], [0.08, 0], [0.08, 15], [0.24, 15], [0.24, 0], [0.32, 0]],
  'the wall pushes with a steady 15 N from 0.080 s until 0.24 s, and with nothing at all outside that interval');
wallGraph('fig-collision', [[0, 0], [0.08, 15], [0.24, 15], [0.32, 0]],
  'the wall builds up to 15 N by 0.080 s, holds it there until 0.24 s, and lets go by 0.32 s');
};
