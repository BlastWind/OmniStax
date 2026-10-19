/* Figures for section 1.9 First-order linear PDEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.9'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, label, headline, register, readout, fmt, hover, cycle, pinned, space: SP } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 600, tex: true, bg: PAL.panel, ...o });
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* a polyline in data units, clipped to the box */
function poly(ctx, ax, pts, color, w, dash) {
  if (pts.length < 2) return;
  clip(ctx, ax.box, () => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
    ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.stroke();
  });
}
const integers = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : '');

/* Figure 1.20 + 1.21: the transport equation αu_x + u_t = 0 with Figure 1.21's peak f(x) = e^(−5x²) at the origin.
   Above, the profile u(x, t) = f(x − αt) moving as the clock runs t from 0 to 2 (5 s a loop); below, the (x, t)
   plane with the characteristic lines ξ = constant, t = (x − ξ)/α (Figure 1.20's ξ = 0, 1, 2 labelled, the others
   faint), the line t = now sweeping up, and the peak's own characteristic ξ = 0 lit with the state (αt, t) on it.
   α on a slider, a dashed circle at 0 where nothing moves. Axes x −3 to 3 (the book's), u 0 to 1.25, t 0 to 2. */
(function () {
  const d = sim('sim-transport', 760);
  const T = 2, cy = cycle(() => T, 1.2);
  const reset = () => cy.reset();
  const as = ctl(d.controls, { label: '\\alpha', cls: '', key: 'alpha', min: -2, max: 2, step: 0.05, value: 1, unit: '', dec: 2, detents: [1], specials: [{ at: 0, label: 'nothing moves' }], onInput: reset });
  const ro = readout(d);
  const f = (x) => Math.exp(-5 * x * x);
  const TOP = { l: 200, r: 1240, t: 100, b: 330 }, BOT = { l: 200, r: 1240, t: 420, b: 700 };
  const XI = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], BOOK = [0, 1, 2];
  let hits = [];
  hover(d.stage, () => hits, d.c);
  /* the characteristic ξ inside the plane: from its foot (ξ, 0) to where it leaves the box (t = T, or an x edge) */
  function charLine(xi, a) {
    const x0 = xi, x1 = xi + a * T;
    let t1 = T, xe = x1;
    if (x1 > 3) { xe = 3; t1 = (3 - xi) / a; } else if (x1 < -3) { xe = -3; t1 = (-3 - xi) / a; }
    return { from: [x0, 0], to: [xe, t1], side: xe >= 3 ? 'left' : xe <= -3 ? 'right' : 'above' };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), cc = C('curve'), pc = C('point'), a = as.v, t = cy.now(), xp = a * t;
    const top = axes(ctx, TOP, [-3, 3], [0, 1.2], { xl: 'x', yl: 'u', nx: 6, ny: 6, fy: (v) => fmt(v, 1) });
    const bot = axes(ctx, BOT, [-3, 3], [0, T], { xl: 'x', yl: 't', nx: 6, ny: 4, fy: (v) => fmt(v, 1) });
    hits = [];
    /* the (x, t) plane: every characteristic faint, the book's three labelled, the peak's lit */
    XI.forEach((xi) => {
      const L = charLine(xi, a), book = BOOK.includes(xi);
      if (L.from[0] < -3 && L.to[0] < -3) return;
      if (L.from[0] > 3 && L.to[0] > 3) return;
      poly(ctx, bot, [L.from, L.to], xi === 0 ? cc : alpha(cc, book ? 0.75 : 0.3), xi === 0 ? 5 : book ? 3 : 2);
      const mx = (L.from[0] + L.to[0]) / 2, mt = (L.from[1] + L.to[1]) / 2;
      if (mx >= -3 && mx <= 3) hits.push({ x: bot.X(mx), y: bot.Y(mt), r: 14, name: a === 0 ? `the characteristic ξ = ${xi}, the line x = ${xi}` : `the characteristic ξ = ${xi}, the line t = (x − ${xi})/α` });
      if (book) label(ctx, `ξ = ${xi}`, bot.X(L.to[0]), bot.Y(L.to[1]), { side: L.side, color: cc, size: 20, weight: 600, gap: 10 });
    });
    /* the line t = now and the state (αt, t) on the lit characteristic, its foot (0, 0) */
    line(ctx, bot.X(-3), bot.Y(t), bot.X(3), bot.Y(t), alpha(PAL.ink, 0.5), 2, [10, 10]);
    if (t > 0.02) mark(ctx, `$t = ${n(t)}$`, bot.X(-2.95), bot.Y(t) - 12, PAL.ink, { align: 'left', base: 'bottom', weight: 400 });
    dot(ctx, bot.X(0), bot.Y(0), pc, false, 10);
    hits.push({ x: bot.X(0), y: bot.Y(0), r: 14, name: 'the foot (ξ, 0) = (0, 0) of the peak’s characteristic' });
    const st = pinned(ctx, bot.box, bot.X, bot.Y, xp, t, pc, `(αt, t) = (${n(xp)}, ${n(t)})`);
    if (!st.out) {
      dot(ctx, st.x, st.y, pc, true, 10);
      hits.push({ x: st.x, y: st.y, r: 16, name: `the state (αt, t) = (${n(xp)}, ${n(t)}) on the characteristic ξ = 0` });
    }
    /* the profile: the initial peak faint, u(x, t) = f(x − αt) full, the drop from the moving peak to its state below */
    if (Math.abs(xp) <= 3) line(ctx, top.X(xp), top.Y(1), top.X(xp), bot.Y(t), alpha(PAL.ink, 0.35), 2, [4, 8]);
    plot(ctx, top, f, alpha(fc, 0.35), { w: 3 });
    plot(ctx, top, (x) => f(x - xp), fc, { w: 5 });
    hits.push({ x: top.X(0), y: top.Y(1), r: 14, name: 'the initial condition u(x, 0) = f(x), a peak at the origin' });
    const pk = pinned(ctx, top.box, top.X, top.Y, xp, 1, fc, `peak at x = ${n(xp)}`);
    if (!pk.out) hits.push({ x: pk.x, y: pk.y, r: 16, name: `u(x, ${n(t)}) = f(x − ${n(xp)}), the peak carried to x = αt = ${n(xp)}` });
    mark(ctx, '$\\ku(x, 0) = \\kf(x)$', top.X(-2.95), top.Y(1.05), fc, { align: 'left', base: 'bottom', weight: 400 });
    headline(ctx, a === 0
      ? `$t = ${n(t)}$: with $\\alpha = 0$ nothing moves, and the peak is still at $x = 0$.`
      : `$t = ${n(t)}$: the peak started at $x = 0$ and is now at $x = \\alpha t = ${n(xp)}$.`);
    const sh = Math.abs(xp) < 0.005 ? 'x' : xp > 0 ? `(x - ${n(xp)})` : `(x + ${n(-xp)})`;
    ro.set(`\\ku(x,t) = \\kf(x - \\alpha t) = e^{-5(x - \\alpha t)^2},\\quad \\alpha = ${n(a)},\\ t = ${n(t)}:\\quad \\ku(x, ${n(t)}) = e^{-5${sh}^2}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();

/* Figure 1.22, made concrete with Example 1.9.3's x u_x + u_t + 2u = 0: the characteristics x = ξe^s, t = s in the
   (x, t) plane for ξ = −2 to 2 faint, the one through the reader's foot (ξ, 0) bold, the point (x(s), t(s)) at the
   reader's s, and the value u = e^(−2s) cos ξ carried along it. Still: a family under its sliders. Axes x −7 to 7
   (ξ = 2 at s = 1.2 reaches 6.64), t 0 to 1.2. */
(function () {
  const d = sim('sim-curvy-characteristic', 600);
  const xs = ctl(d.controls, { label: '\\xi', cls: '', key: 'xi', min: -2, max: 2, step: 0.05, value: 1, unit: '', dec: 2, detents: [1] });
  const ss = ctl(d.controls, { label: 's', cls: '', key: 's', min: 0, max: 1.2, step: 0.01, value: 0.8, unit: '', dec: 2, detents: [0.8] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 110, b: 500 }, SMAX = 1.2;
  const FAM = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];
  const path = (xi) => Array.from({ length: 61 }, (_, i) => { const s = (SMAX * i) / 60; return [xi * Math.exp(s), s]; });
  let hits = [];
  hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('curve'), pc = C('point'), fc = C('function'), xi = xs.v, s = ss.v;
    const ax = axes(ctx, BOX, [-7, 7], [0, SMAX], { xl: 'x', yl: 't', nx: 14, ny: 6, fx: integers, fy: (v) => fmt(v, 1) });
    hits = [];
    FAM.forEach((k) => {
      poly(ctx, ax, path(k), alpha(cc, 0.3), 2);
      const q = path(k)[40];
      hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 12, name: `the characteristic ξ = ${fmt(k, 1)}: x = ${fmt(k, 1)}e^s, t = s` });
    });
    poly(ctx, ax, path(xi), cc, 5);
    const x = xi * Math.exp(s), u = Math.exp(-2 * s) * Math.cos(xi);
    const mid = path(xi)[50];
    hits.push({ x: ax.X(mid[0]), y: ax.Y(mid[1]), r: 14, name: `the characteristic ξ = ${n(xi)}: x = ${n(xi)}e^s, t = s` });
    label(ctx, 'ξ = constant', ax.X(path(xi)[58][0]), ax.Y(path(xi)[58][1]), { side: xi >= 0 ? 'right' : 'left', color: cc, size: 20, weight: 600 });
    /* the foot and the point */
    dot(ctx, ax.X(xi), ax.Y(0), pc, false, 10);
    label(ctx, 'x = ξ, s = 0', ax.X(xi), ax.Y(0), { side: 'below', color: pc, size: 20, weight: 600, gap: 48 });   /* under the tick labels */
    hits.push({ x: ax.X(xi), y: ax.Y(0), r: 14, name: `the foot (ξ, 0) = (${n(xi)}, 0), where s = 0` });
    const P = pinned(ctx, ax.box, ax.X, ax.Y, x, s, fc, `(x(s), t(s)) = (${n(x)}, ${n(s)})`);
    if (!P.out) {
      dot(ctx, P.x, P.y, fc, true, 10);
      label(ctx, `(x(s), t(s)), u = ${n(u, 3)}`, P.x, P.y, { side: x >= 0 ? 'left' : 'right', color: fc, size: 20, weight: 600 });
      hits.push({ x: P.x, y: P.y, r: 16, name: `(x(s), t(s)) = (${n(x)}, ${n(s)}), where u = e^(−2s) cos ξ = ${n(u, 3)}` });
    }
    headline(ctx, `On $\\xi = ${n(xi)}$, at $s = ${n(s)}$: $(x, t) = (${n(x)}, ${n(s)})$ and $\\ku = e^{-2s}\\cos\\xi = ${n(u, 3)}$.`);
    ro.set(`x = \\xi e^{s} = ${n(x)},\\quad t = s = ${n(s)},\\quad \\ku = e^{-2s}\\cos\\xi = e^{-${n(2 * s)}}\\cos(${n(xi)}) = ${n(u, 3)}`);
  }
  still(d, draw);
})();

/* Figure 1.23 (Example 1.9.2): u = e^(−(x−t)² − t) + (1 − x + t)e^(−t) + x − 1, the solution of u_x + u_t + u = x,
   u(x, 0) = e^(−x²). The 2D view is the profile at time t as the clock runs t from 0 to 3 (6 s a loop): the bump
   riding its characteristic x − t = 0 while it fades, the initial e^(−x²) faint, the rest of the profile
   (1 − x + t)e^(−t) + x − 1 dashed. The 3D view (archetype 10, mounted on the first switch) is the surface over
   x −3 to 3, t 0 to 3 with the characteristic lines x − t = ξ drawn on it and the current slice; the orbit stays
   above the (x, t) plane (pitch 0.12 to 1.45), since from beneath the surface shows nothing new. u −4 to 2.5. */
(function () {
  const d = sim('sim-pde-surface', 600);
  const T = 3, cy = cycle(() => T, 1.2);
  const view = choice(d.controls, { label: 'view', key: 'view', options: [{ value: '2d', label: '2D' }, { value: '3d', label: '3D' }], value: '2d', aria: 'flat profile or surface', ms: 0 });
  const ro = readout(d);
  const u = (x, t) => Math.exp(-(x - t) * (x - t) - t) + (1 - x + t) * Math.exp(-t) + x - 1;
  const rest = (x, t) => (1 - x + t) * Math.exp(-t) + x - 1;
  const BOX = { l: 200, r: 1240, t: 110, b: 540 }, box = [[-3, 3], [0, 3], [-4, 2.5]];
  let S = null, hits = [];
  hover(d.stage, () => hits, d.c);
  function mount3d() {
    S = F.space3d(d, { box, h: 600, pitch: [0.12, 1.45], fit: 2.9, turn: -0.7, tilt: 0.5 });   /* x left to right, t receding, read from above */
    const w = S.v ? S.v.wrap : [...d.stage.querySelectorAll('canvas')].pop(), bar = d.stage.querySelector('.transport');
    if (w && bar) d.stage.insertBefore(w, bar);
    d.c.style.display = 'none';
  }
  function unmount3d() {
    const w = S.v ? S.v.wrap : [...d.stage.querySelectorAll('canvas')].pop();
    S.v?.dispose(); if (w && w !== d.c) w.remove(); S = null;
    d.c.style.display = '';
  }
  function draw() {
    const fc = C('function'), cc = C('curve'), t = cy.now(), h = Math.exp(-t);
    const head = `$t = ${n(t)}$: the bump has moved to $x = t = ${n(t)}$ and its height $e^{-t}$ has fallen to ${n(h)}.`;
    if (view.value === '3d' && !S) mount3d();
    if (view.value === '2d' && S) unmount3d();
    if (S) {
      S.set('axes', SP.axes(box, { ticks: [1, 1, 1], names: ['$x$', '$t$', '$\\ku$'] }));
      S.set('surf', SP.graph(u, { x: [-3, 3], y: [0, 3] }, fc, { n: 48, grid: 12, alpha: 0.65 }));
      S.set('chars', [-6, -5, -4, -3, -2, -1, 0, 1, 2].flatMap((xi) => {
        const s0 = Math.max(0, -3 - xi), s1 = Math.min(3, 3 - xi); if (s1 <= s0) return [];
        const pts = Array.from({ length: 41 }, (_, i) => { const s = s0 + ((s1 - s0) * i) / 40; return [xi + s, s, u(xi + s, s) + 0.03]; });
        return [{ k: 'line', pts, color: cc, w: xi === 0 ? 5.5 : 3.5, name: `the characteristic x − t = ${xi}` },
          ...(xi === 0 ? [{ k: 'label', s: '$x - t = 0$', p: [3.2, 3, u(3, 3) + 0.03], color: cc }] : [])];
      }));
      const slice = Array.from({ length: 121 }, (_, i) => { const x = -3 + i / 20; return [x, t, u(x, t) + 0.03]; });
      S.set('slice', [{ k: 'line', pts: slice, color: fc, w: 5, name: `the profile u(x, ${n(t)})` },
        { k: 'dot', p: [t, t, u(t, t) + 0.03], color: fc, r: 8, name: `the top of the bump, x = t = ${n(t)}` },
        { k: 'label', s: `$t = ${n(t)}$`, p: [3.3, t, u(3, t)], color: fc }]);
      S.headline(head);
    } else {
      const { ctx } = begin(d.c);
      const ax = axes(ctx, BOX, [-3, 3], [-4, 2.5], { xl: 'x', yl: 'u', nx: 6, ny: 13, fy: integers });
      hits = [];
      plot(ctx, ax, (x) => Math.exp(-x * x), alpha(fc, 0.35), { w: 3 });
      hits.push({ x: ax.X(0), y: ax.Y(1), r: 14, name: 'the initial condition u(x, 0) = e^(−x²)' });
      ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, ax, (x) => rest(x, t), alpha(fc, 0.6), { w: 3 }); ctx.restore();
      hits.push({ x: ax.X(-2), y: ax.Y(rest(-2, t)), r: 14, name: `the profile without its bump, (1 − x + t)e^(−t) + x − 1 at t = ${n(t)}` });
      plot(ctx, ax, (x) => u(x, t), fc, { w: 5 });
      hits.push({ x: ax.X(2.4), y: ax.Y(u(2.4, t)), r: 14, name: `the profile u(x, ${n(t)})` });
      const P = pinned(ctx, ax.box, ax.X, ax.Y, t, u(t, t), fc, `x = t = ${n(t)}`);
      if (!P.out) {
        dot(ctx, P.x, P.y, fc, true, 9);
        label(ctx, `x = t = ${n(t)}`, P.x, P.y, { side: 'above', color: fc, size: 20, weight: 600, gap: 14 });
        hits.push({ x: P.x, y: P.y, r: 16, name: `the top of the bump, x = t = ${n(t)}, height e^(−t) = ${n(h)} above the dashed line` });
      }
      mark(ctx, '$\\ku(x, 0) = e^{-x^2}$', ax.X(-2.95), ax.Y(1.1), fc, { align: 'left', base: 'bottom', weight: 400 });
      headline(ctx, head);
    }
    const tt = n(t), one = n(1 + t);
    ro.set(t < 0.005
      ? '\\ku(x,t) = e^{-(x-t)^2 - t} + (1 - x + t)\\,e^{-t} + x - 1,\\quad t = 0:\\quad \\ku(x, 0) = e^{-x^2} + (1 - x) + x - 1 = e^{-x^2}'
      : `\\ku(x,t) = e^{-(x-t)^2 - t} + (1 - x + t)\\,e^{-t} + x - 1,\\quad t = ${tt}:\\quad \\ku(x, ${tt}) = e^{-(x - ${tt})^2 - ${tt}} + (${one} - x)\\,e^{-${tt}} + x - 1`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.5), draw });
})();
};
