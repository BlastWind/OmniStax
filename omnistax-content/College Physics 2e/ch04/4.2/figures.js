/* Figures for section 4.2 Newton's First Law of Motion: Inertia. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, strip, scale, axes, nice, curve, block } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* =====================================================================
   SIM: the block that slides farther and farther. A block is pushed
   along a surface 60 m long and left alone; the surface slows it at a
   rate the reader sets, from a rough floor down to the frictionless
   surface of an air hockey table. The graph of the speed against time
   below the scene tilts down to zero while there is friction and lies
   flat when there is none, which is Newton's first law drawn. The idea
   has a time in it, so the figure runs a finite loop and takes the
   transport and its scrubber.
===================================================================== */
(function () {
  const d = sim('sim-frictionless', 700);
  const V = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 2, max: 10, step: 0.5, value: 8, unit: 'm/s', dec: 1, onInput: reset, aria: 'the speed the block starts with' });
  const A = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0, max: 3, step: 0.1, value: 2, unit: 'm/s²', dec: 1, onInput: reset, aria: 'the rate at which the surface slows the block' });
  const TRACK = 60;                                   /* the surface drawn, in metres */
  const SL = 150, SR = 1200, X = (s) => SL + ((SR - SL) * s) / TRACK;
  const yS = 250, yBlk = yS - 50, GB = { l: 150, r: 1200, t: 440, b: 630 };
  /* the run: when the block stops inside the picture the loop ends there, and when it does not the loop ends as it leaves */
  function run() {
    const v0 = V.v, a = A.v;
    const ts = a > 0 ? v0 / a : Infinity;                       /* the time it takes to stop */
    const ds = a > 0 ? (v0 * v0) / (2 * a) : Infinity;          /* the distance it takes to stop */
    const stops = ds <= TRACK;
    const T = stops ? ts : a > 0 ? (v0 - Math.sqrt(Math.max(0, v0 * v0 - 2 * a * TRACK))) / a : TRACK / v0;
    return { v0, a, ts, ds, stops, T };
  }
  const cy = cycle(() => run().T, 1.2);
  function reset() { cy.reset(); }
  /* the surface names itself, in the words the section uses for it */
  const surface = (a) => (a === 0 ? 'a frictionless surface, as on an air hockey table' : a <= 0.5 ? 'a surface rubbed with lubricating oil' : a <= 1.5 ? 'a surface dusted with talcum powder' : 'a rough surface');
  function draw() {
    const { ctx } = begin(d.c);
    const r = run(), t = Math.min(cy.now(), r.T), done = t >= r.T - 1e-9;
    const s = Math.min(TRACK, r.v0 * t - 0.5 * r.a * t * t), v = Math.max(0, r.v0 - r.a * t);
    /* the scene: the surface, the block on it, and how far it has come */
    text(ctx, surface(r.a), 700, 104, PAL.muted, { size: 20, weight: 600, align: 'center' });
    strip(ctx, SL, SR, yS, 48);
    line(ctx, X(TRACK), yS - 44, X(TRACK), yS + 44, PAL.rule, 2, [6, 8]);
    block(ctx, X(s), yBlk, 76, 52, PAL.ink);
    if (v > 0.05) {
      const nose = X(s) + 42, tip = nose + v * 14;
      arrow(ctx, nose, yBlk, tip, yBlk, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', (nose + tip) / 2, yBlk - 46, C('velocity'), { size: 24, weight: 600, align: 'center' });
    } else {
      text(ctx, 'the block has stopped', Math.max(X(s), SL + 110), yBlk - 46, PAL.ink, { size: 22, weight: 600, align: 'center' });
    }
    dot(ctx, X(0), yS, C('position'), false, 10);
    if (s > 1.5) {
      hbracket(ctx, X(0), X(s), yS + 62, C('position'));
      text(ctx, 'Δx = ' + fmt(s, 1) + ' m', Math.max((X(0) + X(s)) / 2, SL + 70), yS + 40, C('position'), { size: 22, weight: 600, align: 'center' });
    }
    scale(ctx, X, 0, 60, 10, 356, 'm', 1);
    /* the graph: the speed against the time, flat when the friction is gone */
    const nz = nice(0, Math.max(r.T, 0.4), 4);
    const g = axes(ctx, GB, [0, nz.hi], [0, 12], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: nz.n, ny: 6, fx: (q) => fmt(q, nz.hi >= 8 ? 0 : 1), fy: (q) => fmt(q, 0) });
    curve(ctx, (q) => Math.max(0, r.v0 - r.a * q), 0, r.T, g.X, g.Y, C('velocity'), 5);
    dot(ctx, g.X(0), g.Y(r.v0), C('velocity'), false, 10);
    line(ctx, g.X(t), g.Y(v), g.X(t), GB.b, PAL.muted, 2, [4, 8]);
    dot(ctx, g.X(t), g.Y(v), C('velocity'), true, 9);
    if (r.a === 0) text(ctx, 'the velocity does not change', (g.X(0) + g.X(r.T)) / 2, r.v0 > 8 ? g.Y(r.v0) + 30 : g.Y(r.v0) - 30, C('velocity'), { size: 20, weight: 600, align: 'center' });
    headline(ctx, !done ? 'The block has covered ' + fmt(s, 1) + ' m of the surface and is still moving at ' + fmt(v, 1) + ' m/s'
      : r.stops ? 'On ' + surface(r.a) + ' the block slides ' + fmt(r.ds, 1) + ' m and stops'
      : r.a === 0 ? 'With the friction gone the block leaves the picture at ' + fmt(r.v0, 1) + ' m/s, and nothing will stop it'
      : 'The block leaves the picture still moving at ' + fmt(v, 1) + ' m/s, since stopping it would take ' + fmt(r.ds, 1) + ' m');
    readout(d.readout, `\\kv = \\kvo - \\ka\\kt = ${fmt(r.v0, 1)} - ${fmt(r.a, 1)}(${fmt(t, 2)}) = ${fmt(v, 2)}\\ \\text{m/s}`,
      r.a === 0 ? 'With the slowing set to zero the block never stops: the line of the speed is flat, and the distance it covers goes on growing with the time.'
        : r.stops ? 'The block covers ' + fmt(r.ds, 1) + ' m before it stops, and halving the slowing would double that distance.'
        : 'Stopping the block would take ' + fmt(r.ds, 1) + ' m, which is more than the 60 m of surface drawn here.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => run().T / 5), draw });
})();
};
