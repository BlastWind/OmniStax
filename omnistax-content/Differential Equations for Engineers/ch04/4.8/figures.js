/* Figures for section 4.8 D’Alembert solution of the wave equation. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.8'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, label, headline, register, readout, fmt, hover, cycle, pinned, hbracket, space: SP } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* a polyline in data units, clipped to the box */
function poly(ctx, ax, pts, color, w, dash) {
  if (pts.length < 2) return;
  clip(ctx, ax.box, () => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
    ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.stroke();
  });
}

/* Figure 4.24 (Example 4.8.1): d’Alembert’s solution y(x, t) = A(x − at) + B(x + at) as two waves and their sum.
   A(ξ) = F(ξ)/2 − H(ξ)/(2a) runs right (referent wave-right), B(η) = F(η)/2 + H(η)/(2a) runs left (wave-left), with F
   and G the odd periodic extensions of f and g and H(x) = ∫₀ˣ G (4.17, 4.18). Above, the string on 0 < x < L (its sum,
   in function) and the two waves drawn on −L/2 < x < 3L/2, faint beyond the fixed ends where their mirrored, inverted
   copies come in. Below, the (x, t) plane on the same x: the region 0 < x < L, the characteristic lines x ∓ at = c
   through the corners of the initial data (faint), the line t = now, and the reader’s point (x, t) with its two
   characteristics traced back to their feet x − at and x + at, the interval between them bracketed (the wavefronts).
   Starts: Example 4.8.1’s impulse (L = 1, the default, a = 1), Example 4.7.1’s plucked string (L = 2, height 0.1) and
   Exercise 4.7.6’s struck string (L = 1, f = 0, g = −1, the H form). The clock runs t from 0 to 2L, 5 s a loop, so the
   impulse passes the book’s t = 0, 0.2, 0.4, 0.6. Axes x −L/2 to 3L/2, y ±1 (±0.1 for the plucked string), t 0 to 2L.
   The 3D view (archetype 10, mounted on the first switch) is the surface y(x, t) over 0 < x < L, 0 < t < 2L with the
   same characteristic lines on it and the current slice; the plucked string’s heights are drawn ×10 there and the
   z axis says so. The orbit stays above the (x, t) plane (pitch 0.12 to 1.45): the ridges are read from above. */
(function () {
  const d = sim('sim-dalembert', 800);
  const imp = (z) => (z < 0.45 ? 0 : z < 0.5 ? 20 * (z - 0.45) : z < 0.55 ? 20 * (0.55 - z) : 0);
  const tri = (z) => (z <= 1 ? 0.1 * z : 0.1 * (2 - z));
  const wrapP = (x, L) => { const P = 2 * L; return ((((x + L) % P) + P) % P) - L; };
  const oddExt = (f, L) => (x) => { const w = wrapP(x, L); return w >= 0 ? f(w) : -f(-w); };
  const START = {
    impulse: { L: 1, ymax: 1, yt: 0.5, F: oddExt(imp, 1), H: null, xp: 0.1, kinks: [-0.5, 0.5], dec: 2, zk: 1,
      what: 'Example 4.8.1’s impulse' },
    plucked: { L: 2, ymax: 0.1, yt: 0.05, F: oddExt(tri, 2), H: null, xp: 0.5, kinks: [-1, 1], dec: 3, zk: 10,
      what: 'Example 4.7.1’s plucked string' },
    struck: { L: 1, ymax: 1, yt: 0.5, F: null, H: (x) => -Math.abs(wrapP(x, 1)), xp: 0.5, kinks: [-1, 0], dec: 2, zk: 1,
      what: 'Exercise 4.7.6’s struck string' },
  };
  const pick = choice(d.controls, { label: 'start', key: 'start', value: 'impulse', aria: 'how the string starts', options: [
    { value: 'impulse', label: 'impulse' }, { value: 'plucked', label: 'plucked' }, { value: 'struck', label: 'struck' }],
    onInput: () => { const s = START[pick.value]; xs.range({ min: 0, max: s.L, step: 0.01, value: s.xp, unit: '', dec: 2 }); reset(); } });
  const view = choice(d.controls, { label: 'view', key: 'view', value: '2d', aria: 'the string and the (x, t) plane, or the surface y(x, t)', ms: 0,
    options: [{ value: '2d', label: '2D' }, { value: '3d', label: '3D' }] });
  const as = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 2, step: 0.05, value: 1, unit: '', dec: 2, detents: [1], onInput: reset });
  const cy = cycle(() => 2 * START[pick.value].L, 1.2);
  function reset() { cy.reset(); }
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: 1, step: 0.01, value: 0.1, unit: '', dec: 2, detents: [0.1] });
  const ro = readout(d);
  const TOP = { l: 200, r: 1240, t: 104, b: 380 }, BOT = { l: 200, r: 1240, t: 452, b: 736 };
  let hits = [], S = null, S3 = '', surfKey = '';
  hover(d.stage, () => hits, d.c);

  const waves = (s, a) => ({
    A: (z) => (s.F ? s.F(z) / 2 : 0) - (s.H ? s.H(z) / (2 * a) : 0),
    B: (z) => (s.F ? s.F(z) / 2 : 0) + (s.H ? s.H(z) / (2 * a) : 0),
  });
  /* the characteristic lines x − at = c and x + at = c through the corners of the initial data, as [x0, 0] → [x1, T] */
  const kinkLines = (s, a, T) => {
    const out = [];
    s.kinks.forEach((c0) => { for (let k = -4; k <= 4; k++) { const c = c0 + 2 * s.L * k; out.push({ c, dir: 1, p: [[c, 0], [c + a * T, T]] }, { c, dir: -1, p: [[c, 0], [c - a * T, T]] }); } });
    return out;
  };
  function mount3d(s) {
    const zt = s.zk === 1 ? 0.5 : 0;
    S = F.space3d(d, { box: [[0, s.L], [0, 2 * s.L], [-1, 1]], h: 640, pitch: [0.12, 1.45], fit: 2.5, turn: -0.65, tilt: 0.6 });
    S.set('axes', SP.axes([[0, s.L], [0, 2 * s.L], [-1, 1]], { ticks: [s.L / 2, s.L / 2, zt], names: ['$x$', '$t$', s.zk === 1 ? '$\\ky$' : '$10\\,\\ky$'] }));
    const w = S.v ? S.v.wrap : [...d.stage.querySelectorAll('canvas')].pop(), bar = d.stage.querySelector('.transport');
    if (w && bar) d.stage.insertBefore(w, bar);
    d.c.style.display = 'none'; S3 = pick.value; surfKey = '';
  }
  function unmount3d() {
    const w = S.v ? S.v.wrap : [...d.stage.querySelectorAll('canvas')].pop();
    S.v?.dispose(); if (w && w !== d.c) w.remove(); S = null; S3 = '';
    d.c.style.display = '';
  }
  function draw() {
    const s = START[pick.value], a = as.v, t = cy.now(), T = 2 * s.L, L = s.L;
    const fc = C('function'), cc = C('curve'), pc = C('point'), rc = C('region'), wr = F.ref('wave-right'), wl = F.ref('wave-left');
    const { A, B } = waves(s, a), y = (x, tt) => A(x - a * tt) + B(x + a * tt);
    const xp = Math.min(xs.v, L), xi = xp - a * t, eta = xp + a * t, dec = s.dec;
    /* the readout: the section's formula with the live numbers, each part rounded as shown and the sum taken from them */
    let tx;
    if (s.F) {
      const f1 = +s.F(xi).toFixed(dec), f2 = +s.F(eta).toFixed(dec), yv = f1 / 2 + f2 / 2;
      const plus = (v) => (v < 0 ? `- ${n(-v, dec)}` : `+ ${n(v, dec)}`);
      tx = `\\ky(x,t) = \\frac{\\kF(x-at) + \\kF(x+at)}{2},\\quad \\ky(${n(xp)}, ${n(t)}) = \\frac{\\kF(${n(xi)}) + \\kF(${n(eta)})}{2} = \\frac{${n(f1, dec)} ${plus(f2)}}{2} = ${n(yv, dec)}`;
    } else {
      const h1 = +s.H(xi).toFixed(dec), h2 = +s.H(eta).toFixed(dec), yv = (-h1 + h2) / (2 * a);
      const neg = (v) => (v < 0 ? `(${n(v, dec)})` : n(v, dec));
      tx = `\\ky(x,t) = \\frac{-\\kH(x-at) + \\kH(x+at)}{2a},\\quad \\ky(${n(xp)}, ${n(t)}) = \\frac{-\\kH(${n(xi)}) + \\kH(${n(eta)})}{2 \\cdot ${n(a)}} = \\frac{-${neg(h1)} + ${neg(h2)}}{${n(2 * a)}} = ${n(yv, dec)}`;
    }
    const head = `$t = ${n(t)}$: at $x = ${n(xp)}$ the string has felt only the initial data on $[x - at,\\ x + at] = [${n(xi)},\\ ${n(eta)}]$.`;
    if (view.value === '3d' && S && S3 !== pick.value) unmount3d();
    if (view.value === '3d' && !S) mount3d(s);
    if (view.value === '2d' && S) unmount3d();
    if (S) {
      const zk = s.zk, key = `${pick.value}|${a}|${fc}`;
      if (key !== surfKey) {
        surfKey = key;
        S.set('surf', SP.surface((u, v) => [u * L, v * T, zk * y(u * L, v * T)], [0, 1], [0, 1], fc, { n: [110, 220], grid: 8, alpha: 0.7 }));
        S.set('chars', kinkLines(s, a, T).flatMap((k) => {
          const [[x0], [x1]] = k.p, lo = Math.max(0, Math.min(x0, x1)), hi = Math.min(L, Math.max(x0, x1));
          if (hi - lo < 1e-6) return [];
          const pts = Array.from({ length: 81 }, (_, i) => { const x = lo + ((hi - lo) * i) / 80, tt = (x - k.c) / (k.dir * a); return [x, tt, zk * y(x, tt) + 0.02]; }).filter((p) => p[1] >= 0 && p[1] <= T);
          return pts.length > 1 ? [{ k: 'line', pts, color: cc, w: 3, name: `the characteristic line x ${k.dir > 0 ? '−' : '+'} at = ${n(k.c)}, along which a corner of the initial data travels` }] : [];
        }));
      }
      const slice = Array.from({ length: 201 }, (_, i) => { const x = (L * i) / 200; return [x, t, zk * y(x, t) + 0.02]; });
      S.set('slice', [{ k: 'line', pts: slice, color: fc, w: 5, name: `the string at t = ${n(t)}, y(x, ${n(t)})` },
        { k: 'dot', p: [xp, t, zk * y(xp, t) + 0.02], color: pc, r: 8, name: `the point (x, t) = (${n(xp)}, ${n(t)}), y = ${n(y(xp, t), dec)}` },
        { k: 'label', s: `$t = ${n(t)}$`, p: [-0.12 * L, t, zk * y(0, t)], color: fc }]);
      S.headline(head);
    } else {
      const { ctx } = begin(d.c);
      const Lm = pick.mix((v) => START[v].L), ym = pick.mix((v) => START[v].ymax), yt = s.yt;
      const top = axes(ctx, TOP, [-Lm / 2, 1.5 * Lm], [-ym, ym], { xl: 'x', yl: 'y', nx: 4, ny: 4, fx: (v) => n(v, Lm < 1.5 ? 1 : 0), fy: (v) => n(v, yt < 0.1 ? 2 : 1) });
      const bot = axes(ctx, BOT, [-Lm / 2, 1.5 * Lm], [0, 2 * Lm], { xl: 'x', yl: 't', nx: 4, ny: 4, fx: (v) => n(v, Lm < 1.5 ? 1 : 0), fy: (v) => n(v, Lm < 1.5 ? 1 : 0) });
      hits = [];
      const lo = -L / 2, hi = 1.5 * L;
      /* the (x, t) plane: the region, the characteristic lines through the corners, the fixed ends */
      clip(ctx, bot.box, () => { ctx.fillStyle = alpha(rc, 0.12); ctx.fillRect(bot.X(0), bot.Y(T), bot.X(L) - bot.X(0), bot.Y(0) - bot.Y(T)); });
      hits.push({ x: bot.X(L / 2), y: bot.Y(T * 0.93), r: 16, name: `the region 0 < x < ${n(L, 0)}, t > 0 where the string lives` });
      kinkLines(s, a, T).forEach((k) => {
        poly(ctx, bot, k.p, alpha(cc, 0.32), 2);
        const mt = T * 0.15, mx = k.c + k.dir * a * mt;
        if (mx > lo && mx < hi) hits.push({ x: bot.X(mx), y: bot.Y(mt), r: 10, name: `the characteristic line x ${k.dir > 0 ? '−' : '+'} at = ${n(k.c)}: a corner of the initial data rides it` });
      });
      [0, L].forEach((xw) => { line(ctx, top.X(xw), top.box.t, top.X(xw), top.box.b, alpha(PAL.ink, 0.55), 3); line(ctx, bot.X(xw), bot.box.t, bot.X(xw), bot.box.b, alpha(PAL.ink, 0.55), 3); });
      hits.push({ x: top.X(0), y: top.Y(-ym * 0.85), r: 14, name: 'the fixed end x = 0, y(0, t) = 0' }, { x: top.X(L), y: top.Y(-ym * 0.85), r: 14, name: `the fixed end x = L = ${n(L, 0)}, y(L, t) = 0` });
      /* now, the reader’s point and its two characteristics back to t = 0, the interval of initial data it has felt */
      line(ctx, bot.X(lo), bot.Y(t), bot.X(hi), bot.Y(t), alpha(PAL.ink, 0.5), 2, [10, 10]);
      if (t > 0.04 * T) text(ctx, `t = ${n(t)}`, bot.X(lo) + 8, bot.Y(t) - 14, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
      poly(ctx, bot, [[xi, 0], [xp, t]], cc, 4);
      poly(ctx, bot, [[eta, 0], [xp, t]], cc, 4);
      hits.push({ x: bot.X((xi + xp) / 2), y: bot.Y(t / 2), r: 12, name: `the characteristic x − at = ${n(xi)} through the point: the right-moving wave A keeps its value along it` });
      hits.push({ x: bot.X((eta + xp) / 2), y: bot.Y(t / 2), r: 12, name: `the characteristic x + at = ${n(eta)} through the point: the left-moving wave B keeps its value along it` });
      if (t > 0.02 * T) hbracket(ctx, bot.X(Math.max(xi, lo)), bot.X(Math.min(eta, hi)), bot.Y(0) - 16, PAL.ink);
      hits.push({ x: bot.X(Math.min(Math.max(xp, lo), hi)), y: bot.Y(0) - 16, r: 14, name: `the initial data on [x − at, x + at] = [${n(xi)}, ${n(eta)}]; its ends are the wavefronts` });
      [[xi, 'x − at', 'left'], [eta, 'x + at', 'right']].forEach(([xv, s1, side]) => {
        const q = pinned(ctx, bot.box, bot.X, bot.Y, xv, 0, pc, `${s1} = ${n(xv)}`);
        if (!q.out) { dot(ctx, q.x, q.y, pc, false, 9); if (t > 0.06 * T) label(ctx, s1, q.x, q.y - 30, { side, color: pc, size: 20, weight: 600, gap: 10 }); }
        hits.push({ x: q.x, y: q.y, r: 14, name: `the foot ${s1} = ${n(xv)}, a wavefront` });
      });
      dot(ctx, bot.X(xp), bot.Y(t), pc, true, 9);
      hits.push({ x: bot.X(xp), y: bot.Y(t), r: 16, name: `the point (x, t) = (${n(xp)}, ${n(t)})` });
      /* the scene: the two waves on the whole line, faint beyond the ends, and the string their sum on 0 < x < L */
      const At = (x) => A(x - a * t), Bt = (x) => B(x + a * t);
      [[At, wr], [Bt, wl]].forEach(([g, col]) => {
        plot(ctx, top, g, alpha(col, 0.38), { w: 3, x: [lo, 0] });
        plot(ctx, top, g, alpha(col, 0.38), { w: 3, x: [L, hi] });
        plot(ctx, top, g, col, { w: 3, x: [0, L] });
      });
      plot(ctx, top, (x) => At(x) + Bt(x), fc, { w: 5, x: [0, L] });
      line(ctx, top.X(xp), top.box.t, top.X(xp), bot.Y(t), alpha(PAL.ink, 0.35), 2, [4, 8]);
      const yA = At(xp), yB = Bt(xp);
      [[yA, wr, `A(x − at) = ${n(yA, dec)}, the right-moving wave at x = ${n(xp)}`], [yB, wl, `B(x + at) = ${n(yB, dec)}, the left-moving wave at x = ${n(xp)}`], [yA + yB, fc, `y(x, t) = A + B = ${n(yA + yB, dec)}, the string at x = ${n(xp)}`]].forEach(([v, col, name], i) => {
        const q = pinned(ctx, top.box, top.X, top.Y, xp, v, col);
        if (!q.out) dot(ctx, q.x, q.y, col, true, i === 2 ? 9 : 7);
        hits.push({ x: q.x, y: q.y, r: 14, name });
      });
      const sx = (x) => top.X(x);
      hits.push({ x: sx(L * 0.25), y: top.Y(At(L * 0.25) + Bt(L * 0.25)), r: 12, name: `the string y(x, ${n(t)}) = A(x − at) + B(x + at) on 0 < x < L` });
      /* legend, top right, on a panel */
      [['the wave A(x − at), moving right', wr], ['the wave B(x + at), moving left', wl], ['the string y = A + B', fc]].forEach(([str, col], i) => {
        const lx = top.box.r - 360, ly = top.box.t + 18 + i * 28;
        line(ctx, lx, ly, lx + 36, ly, col, i === 2 ? 5 : 3);
        text(ctx, str, lx + 46, ly, col, { size: 18, weight: 600, align: 'left', base: 'middle', bg: PAL.panel });
      });
      headline(ctx, head);
    }
    ro.set(tx);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (2 * START[pick.value].L) / 5), draw });
})();
};
