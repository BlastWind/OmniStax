/* Figures for section 2.6 Problem-Solving Basics for One-Dimensional Kinematics. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, strip, scale, axes, nice, runner } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const WORDS = ['', '', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const times = (n) => (WORDS[n] ?? String(n)) + ' times';

/* =====================================================================
   SIM: the runner of Unreasonable Results. A person accelerates at a
   for t seconds; the strip shows the run and the graph below draws the
   velocity along v = v0 + at up to the present moment. A dashed level at
   10 m/s is about what a person can run (the book's 89 mph is "about
   four times greater than a person can run"), and the run crosses it
   at t = 10/a. Finite motion, one loop per set time, so it gets the
   scrubber.
===================================================================== */
(function () {
  const d = sim('sim-runner', 660);
  const A = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0.1, max: 1, step: 0.05, value: 0.4, unit: 'm/s²', dec: 2, onInput: reset, aria: 'acceleration' });
  const T = ctl(d.controls, { label: '\\kt', cls: 'time', min: 5, max: 120, step: 5, value: 100, unit: 's', dec: 0, onInput: reset, aria: 'time' });
  const RUN = 10;                       /* about what a person can run, in m/s */
  const MPH = (3.28 / 5280) * 3600;     /* the book's chain of factors from m/s to mph */
  const cy = cycle(() => T.v, 1.2);
  function reset() { cy.reset(); }
  let stride = 0;
  /* miles per hour as the book rounds them, to a whole number, with one decimal only for a walking pace */
  const mphOf = (v) => (v * MPH < 10 ? fmt(v * MPH, 1) : String(Math.round(v * MPH)));
  /* the time axis ends at the set time, which is a multiple of 5 s, and is cut into round ticks */
  const ticks = (tEnd) => [5, 4, 6, 3, 8, 7, 2].find((n) => tEnd % n === 0 && (tEnd / n <= 5 || (tEnd / n) % 5 === 0)) ?? 5;
  /* the strip: the whole run from 0 to ½at², with room at the right for the velocity arrow */
  const L = 120, R = 1120;
  function draw() {
    const { ctx } = begin(d.c);
    const a = A.v, tEnd = T.v, tau = cy.now(), done = tau >= tEnd - 1e-9;
    const v = a * tau, vEnd = a * tEnd, mph = mphOf(v), mphEnd = mphOf(vEnd);
    const D = 0.5 * a * tEnd * tEnd, dist = 0.5 * a * tau * tau;
    const X = (m) => L + ((R - L) * m) / D;
    /* the strip and its scale in meters */
    const ys = 190;
    strip(ctx, L, R, ys, 48);
    const st = nice(0, D, 5); const step = Math.max(1, (st.hi - st.lo) / st.n);
    scale(ctx, X, 0, Math.floor(D / step + 1e-9) * step, step, ys + 34, 'm', 1);
    text(ctx, 'start', L - 34, ys, PAL.muted, { size: 17, align: 'right' });
    /* the runner, whose stride quickens with the speed */
    const rx = X(dist);
    if (!done && v > 0) stride += 0.25 + 0.3 * Math.min(1, v / RUN);
    runner(ctx, rx, ys + 6, PAL.ink, stride);
    /* the velocity arrow over the runner, its length proportional to v */
    if (v > 0.05) {
      const len = Math.min(240, 24 + 5.4 * v), ax = rx + 18;
      arrow(ctx, ax, ys - 64, ax + len, ys - 64, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(v, 1) + ' m/s', ax + len / 2, ys - 90, C('velocity'), { weight: 600, size: 20, align: 'center' });
    }
    /* the graph of v against t, with the level a person can run */
    const box = { l: L, r: 1280, t: 320, b: 580 };
    const vt = nice(0, Math.max(vEnd, 12), 4), tt = { hi: tEnd, n: ticks(tEnd) };
    const { X: GX, Y: GY } = axes(ctx, box, [0, tt.hi], [0, vt.hi], { xl: 't (s)', xc: C('time'), yl: 'v (m/s)', yc: C('velocity'), nx: tt.n, ny: vt.n });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(box.l, box.t, box.r - box.l, GY(RUN) - box.t); ctx.restore();
    line(ctx, box.l, GY(RUN), box.r, GY(RUN), PAL.ink, 3, [10, 10]);
    const right = vEnd > 20;   /* the label sits at the end of the level the line is farther from */
    text(ctx, 'about what a person can run, 10 m/s', right ? box.r - 8 : box.l + 12, GY(RUN) - 16, PAL.muted, { size: 17, align: right ? 'right' : 'left' });
    text(ctx, 'faster than anyone runs', box.l + 12, box.t + 20, PAL.muted, { size: 17, align: 'left' });
    /* the whole planned run faintly, the part run so far in the velocity hue */
    line(ctx, GX(0), GY(0), GX(tEnd), GY(vEnd), C('velocity'), 3, [4, 8]);
    if (tau > 0) line(ctx, GX(0), GY(0), GX(tau), GY(v), C('velocity'), 5);
    const tc = RUN / a;
    /* the crossing, marked hollow, with its time above the level to the left of the mark, where neither line nor label can reach it */
    if (tc < tEnd - 1e-9) {
      dot(ctx, GX(tc), GY(RUN), C('velocity'), false, 10);
      text(ctx, 't = ' + fmt(tc, 0) + ' s', GX(tc) - 16, GY(RUN) - 22, C('time'), { size: 17, weight: 600, align: 'right' });
    }
    line(ctx, GX(tau), GY(v), GX(tau), box.b, C('time'), 2, [4, 8]);
    dot(ctx, GX(tau), GY(v), C('velocity'), true, 9);
    /* the present time under the point, where the line climbs too gently to reach it, or beside the point while it is still near the axis */
    const low = GY(v) > box.b - 52, atRight = GX(tau) + 110 > box.r;
    if (low) text(ctx, 't = ' + fmt(tau, 0) + ' s', GX(tau) + (atRight ? -16 : 16), box.b - 22, C('time'), { weight: 600, size: 20, align: atRight ? 'right' : 'left' });
    else text(ctx, 't = ' + fmt(tau, 0) + ' s', Math.min(Math.max(GX(tau), box.l + 44), box.r - 44), GY(v) + 30, C('time'), { weight: 600, size: 20, align: 'center' });
    /* what the numbers say */
    const ratio = vEnd / RUN, n = Math.round(ratio);
    const verdict = ratio >= 1.5 ? 'about ' + times(n) + ' what a person can run' : ratio > 1.05 ? 'faster than a person can run' : 'which a person can run';
    headline(ctx, done ? 'after ' + fmt(tEnd, 0) + ' s at ' + fmt(a, 2) + ' m/s² the runner would be at ' + fmt(vEnd, 1) + ' m/s, about ' + mphEnd + ' mph, ' + verdict
      : 'after ' + fmt(tau, 0) + ' s at ' + fmt(a, 2) + ' m/s² the runner ' + (v > RUN * 1.05 ? 'would be at ' + fmt(v, 1) + ' m/s, about ' + mph + ' mph, faster than a person can run' : 'has reached ' + fmt(v, 1) + ' m/s, about ' + mph + ' mph, which is reasonable'));
    readout(d.readout, `\\kv = \\kvo + \\ka\\kt = 0 + (${fmt(a, 2)}\\ \\text{m/s}^2)(${fmt(tEnd, 0)}\\ \\text{s}) = ${fmt(vEnd, 1)}\\ \\text{m/s}`,
      ratio > 1.05
        ? fmt(vEnd, 1) + ' m/s is ' + mphEnd + ' mph, ' + verdict + ', so the result is unreasonable. The acceleration adds only ' + fmt(a, 2) + ' m/s each second, which a runner can manage, so the premise that fails is the time: nobody keeps up a constant acceleration for ' + fmt(tEnd, 0) + ' s.'
        : fmt(vEnd, 1) + ' m/s is ' + mphEnd + ' mph, which a person can run, so both premises are reasonable: the acceleration adds ' + fmt(a, 2) + ' m/s each second, and it lasts only ' + fmt(tEnd, 0) + ' s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();
};
