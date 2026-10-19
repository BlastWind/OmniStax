/* Figures for section 6.5 Solving PDEs with the Laplace transform. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, label, labeller, headline, register, readout, fmt, hover, cycle, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* a closed polygon in data units, filled, clipped to the box */
function fillPoly(ctx, ax, pts, color, a) {
  clip(ctx, ax.box, () => {
    ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.closePath(); ctx.fill();
  });
}
const integers = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? fmt(v, 0) : '');

/* Figure 6.5 + 6.6: the river of goo of Example 6.5.1, y_t = −αy_x on x > 0, t > 0, y(0, t) = C, y(x, 0) = 0, solved
   y(x, t) = C u(t − x/α). Top, the river as a strip from the factory at x = 0, the stretch the substance has reached
   (the present slice of the region y = C) tinted, its centre dashes carried along at speed α; below it the
   concentration y(x, t) at the present t; at the bottom the first quadrant of the (x, t) plane with y = 0 written on
   the x-axis and y = C on the t-axis (Figure 6.5), the wavefront t = x/α of slope 1/α dividing it into y = C above and
   y = 0 below (Figure 6.6), and the present time rising through it, its crossing with the wavefront dropped to the
   front above. The clock runs t from 0 to 6 over 6 s and holds. A choice of the data at x = 0: the constant C (the
   default) or Example 6.5.2's sin t, whose solution e^(−x) sin(t − x) u(t − x) has α = 1 and no C, so both sliders
   leave in that state. Sliders α (0.5 to 3, the book's 1 a detent) and C (0.5 to 2, 1 a detent). Axes x 0 to 6,
   y −1 to 2.5 (C reaches 2, the damped sine stays within ±1), t 0 to 6; a front past x = 6 is pinned. */
(function () {
  const d = sim('sim-goo-river', 850);
  const T = 6, XM = 6, cy = cycle(() => T, 1.2);
  const reset = () => cy.reset();
  const data = choice(d.controls, { label: 'data', key: 'data', aria: 'the concentration kept at x = 0', value: 'c',
    options: [{ value: 'c', label: 'y(0, t) = C' }, { value: 'sin', label: 'y(0, t) = sin t' }],
    onInput: (v) => { aS.show(v === 'c'); cS.show(v === 'c'); reset(); } });
  const aS = ctl(d.controls, { label: '\\alpha', cls: '', key: 'alpha', min: 0.5, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the speed α of the river', detents: [1], onInput: reset });
  const cS = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: 0.5, max: 2, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the concentration C at the factory', detents: [1], onInput: reset });
  const ro = readout(d);
  const SY = 120, SH = 44, GB = { l: 200, r: 1240, t: 190, b: 390 }, PB = { l: 200, r: 1240, t: 500, b: 760 };
  /* the profile of each choice at time t, with its speed */
  const speed = (v) => (v === 'c' ? aS.v : 1);
  const prof = (v, t) => (v === 'c'
    ? (x) => (x <= speed(v) * t ? cS.v : 0)
    : (x) => (x <= t ? Math.exp(-x) * Math.sin(t - x) : 0));
  let hits = [];
  hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), cc = C('curve'), rc = C('region'), v = data.value, t = cy.now();
    const a = data.mix((w) => speed(w)), xp = a * t, xs = Math.min(xp, XM), c = cS.v;
    hits = [];
    const gr = axes(ctx, GB, [0, XM], [-1, 2.5], { xl: 'x', yl: 'y', yc: fc, nx: 6, ny: 7, fy: integers });
    const pl = axes(ctx, PB, [0, XM], [0, T], { xl: 'x', yl: 't', nx: 6, ny: 6 });
    const lab = labeller(ctx, 850, { headline: 2 });
    /* the river: pure goo grey, the stretch the substance has reached tinted, its dashes carried along at speed α */
    const RX = gr.X(0), RR = gr.X(XM);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(RX, SY - SH / 2, RR - RX, SH); ctx.restore();
    if (xs > 0) { ctx.save(); ctx.globalAlpha *= 0.4; ctx.fillStyle = rc; ctx.fillRect(RX, SY - SH / 2, gr.X(xs) - RX, SH); ctx.restore(); }
    ctx.save(); ctx.lineDashOffset = -((a * t * (RR - RX)) / XM) % 40; line(ctx, RX, SY, RR, SY, PAL.panel, 3, [22, 18]); ctx.restore();
    hits.push({ x: (RX + gr.X(xs)) / 2, y: SY, r: 22, name: xs > 0 ? `the river from x = 0 to the front x = ${n(Math.min(xp, XM))}, which the toxic substance has reached` : 'the river, still pure goo' });
    if (xp < XM) hits.push({ x: (gr.X(xs) + RR) / 2, y: SY, r: 22, name: `the river past x = ${n(xp)}, still pure goo` });
    /* the factory at x = 0, a block with its chimney */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.55);
    ctx.fillRect(RX - 64, SY - 20, 58, SH - 2); ctx.fillRect(RX - 52, SY - 42, 14, 24); ctx.restore();
    text(ctx, 'factory', RX - 76, SY, PAL.ink, { size: 20, align: 'right', bg: PAL.panel });
    hits.push({ x: RX - 35, y: SY - 6, r: 30, name: v === 'c' ? `the factory at x = 0, keeping the concentration at y(0, t) = C = ${n(c)}` : 'the factory at x = 0, where y(0, t) = sin t' });
    /* the drop from the front through the graph to its point on the wavefront below */
    if (xp <= XM && t > 0.005) line(ctx, gr.X(xp), SY - SH / 2, gr.X(xp), pl.Y(t), alpha(PAL.ink, 0.35), 2, [4, 8]);
    /* the concentration y(x, t) at the present t */
    if (data.k < 1) F.blendCurve(ctx, prof(data.from, t), prof(v, t), F.ease.smooth(data.k), 0, XM, gr.X, gr.Y, fc, 5, 600);
    else if (v === 'c') {
      const pieces = [];
      if (xp > 1e-6) pieces.push({ f: () => c, x: [0, Math.min(xp, XM)], ends: xp <= XM ? '[]' : '[' });
      if (xp < XM) pieces.push({ f: () => 0, x: [Math.max(xp, 0), XM], ends: xp > 1e-6 ? '(' : '(' });
      plot(ctx, gr, pieces, fc, { w: 5, dots: xp > 1e-6 ? [] : [[0, c]] });
      hits.push({ x: gr.X(Math.max(xs, 0.3) / 2), y: gr.Y(c), r: 16, name: `y = C = ${n(c)} behind the front` });
      if (xp < XM) hits.push({ x: gr.X((xs + XM) / 2), y: gr.Y(0), r: 16, name: 'y = 0 ahead of the front' });
    } else {
      const env = (s) => (x) => (x <= t ? s * Math.exp(-x) : NaN);
      ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, gr, env(1), alpha(fc, 0.6), { w: 3 }); plot(ctx, gr, env(-1), alpha(fc, 0.6), { w: 3 }); ctx.restore();
      plot(ctx, gr, prof(v, t), fc, { w: 5 });
      if (t > 0.3) hits.push({ x: gr.X(0.15), y: gr.Y(Math.exp(-0.15)), r: 14, name: 'the envelope ±e^(−x): the signal is damped by e^(−x) as it travels' });
      [0.25, 0.5, 0.75].forEach((f) => { const x = f * Math.min(t, XM); hits.push({ x: gr.X(x), y: gr.Y(prof(v, t)(x)), r: 14, name: `y(${n(x)}, ${n(t)}) = e^(−x) sin(t − x) = ${n(prof(v, t)(x), 3)}` }); });
    }
    /* the (x, t) plane: the two parts of the quadrant either side of the wavefront t = x/α */
    const edge = a >= 1 ? [XM, XM / a] : [a * T, T];
    fillPoly(ctx, pl, a >= 1 ? [[0, 0], edge, [XM, T], [0, T]] : [[0, 0], edge, [0, T]], rc, 0.32);
    fillPoly(ctx, pl, a >= 1 ? [[0, 0], [XM, 0], edge] : [[0, 0], [XM, 0], [XM, T], edge], rc, 0.1);
    line(ctx, pl.X(0), pl.Y(0), pl.X(edge[0]), pl.Y(edge[1]), cc, 5);
    for (let i = 1; i < 5; i++) { const f = i / 5; hits.push({ x: pl.X(edge[0] * f), y: pl.Y(edge[1] * f), r: 14, name: `the wavefront t = x/α, a line of slope 1/α = ${n(1 / a)}` }); }
    hits.push({ x: pl.X(1.2), y: pl.Y(5), r: 30, name: v === 'c' ? `above the wavefront, where t > x/α: y = C = ${n(c)}` : 'above the wavefront, where t > x: y = e^(−x) sin(t − x)' });
    hits.push({ x: pl.X(4.8), y: pl.Y(0.8), r: 30, name: 'below the wavefront, where t < x/α: y = 0' });
    /* the present time and the front on the wavefront */
    line(ctx, pl.X(0), pl.Y(t), pl.X(XM), pl.Y(t), alpha(PAL.ink, 0.5), 2, [10, 10]);
    const st = pinned(ctx, pl.box, pl.X, pl.Y, xp, t, cc, `front at x = ${n(xp)}`);
    if (!st.out) hits.push({ x: st.x, y: st.y, r: 16, name: `(αt, t) = (${n(xp)}, ${n(t)}): the front at time t, on the wavefront` });
    hits.push({ x: pl.X(XM * 0.6), y: pl.Y(t), r: 10, name: `the present time t = ${n(t)}` });
    /* labels: the data on the axes (Figure 6.5), the two parts and the wavefront (Figure 6.6), the clock */
    const above = v === 'c' ? 'y = C' : 'y = e⁻ˣ sin(t − x)';
    lab.add(above, pl.X(1.2), pl.Y(5), 0, 0, fc, 20);
    lab.add('y = 0', pl.X(4.8), pl.Y(0.8), 0, 0, fc, 20);
    lab.add(v === 'c' ? 'y = C' : 'y = sin t', PB.l - 60, pl.Y(3), -1, 0, fc, 20, 0.001);
    lab.add('y = 0', pl.X(3), PB.b + 58, 0, 0, fc, 20);
    lab.beside({ x1: pl.X(0), y1: pl.Y(0), x2: pl.X(edge[0]), y2: pl.Y(edge[1]) }, a >= 1 ? 'left' : 'right', 'wavefront, slope 1/α', cc, 20, { offset: 0.62, gap: 30 });
    if (t > 0.05) text(ctx, `t = ${n(t)}`, pl.X(0.08), pl.Y(t) + (t > 5.4 ? 18 : -16), PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
    lab.flush();
    if (v === 'c') {
      headline(ctx, t < 0.005
        ? 'At $t = 0$ the factory opens, and the river is still pure goo, $\\ky = 0$, for every $x > 0$.'
        : `$t = ${n(t)}$: the goo has reached $x = \\alpha t = ${n(xp)}$; behind the front $\\ky = C = ${n(c)}$, ahead of it $\\ky = 0$.`);
      ro.set(`\\ky(x,t) = C\\,\\ku\\bigl(t - x/\\alpha\\bigr) = ${n(c)}\\,\\ku\\bigl(${n(t)} - x/${n(aS.v)}\\bigr)`, undefined, { form: v });
    } else {
      headline(ctx, t < 0.005
        ? 'At $t = 0$ the signal $\\sin t$ starts at the factory, and the river is still pure goo, $\\ky = 0$, for every $x > 0$.'
        : `$t = ${n(t)}$: the signal $\\sin t$ has reached $x = t = ${n(t)}$, delayed by $x$ and damped by $e^{-x}$; ahead of it $\\ky = 0$.`);
      ro.set(`\\ky(x,t) = e^{-x}\\sin(t - x)\\,\\ku(t - x) = e^{-x}\\sin(${n(t)} - x)\\,\\ku(${n(t)} - x)`, undefined, { form: v });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Figure 6.7: the ill-posed problem −y_t + y_x = 0, y(0, t) = sin t, y(x, 0) = 0. The first quadrant with y = 0 on
   the x-axis and y = sin t on the t-axis, the characteristics t = −x + k faint, and the one the reader picks,
   t = −x + C (the book's C = 1 the default), bold, its two ends marked with the data they carry: y(C, 0) = 0 and
   y(0, C) = sin C. A solution would be constant along the line, so the two would have to agree; a dashed special at
   C = π, where sin C = 0 and they do, for that one line only. Still: a family under its slider. Axes x 0 to 4.5,
   t 0 to 4.5, so the ends at the slider's maximum C = 4 keep clear of the frame. */
(function () {
  const d = sim('sim-ill-posed', 720);
  const M = 4.5;
  const cS = ctl(d.controls, { label: 'C', cls: '', key: 'C', min: 0.2, max: 4, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the characteristic t = −x + C', detents: [1], specials: [{ at: Math.PI, label: 'sin C = 0' }] });
  const ro = readout(d);
  const PB = { l: 400, r: 1000, t: 140, b: 620 };
  let hits = [];
  hover(d.stage, () => hits, d.c);
  /* the characteristic t = −x + k inside the box: from (k, 0) or (k − M, M) to (0, k) or (M, k − M) */
  const seg = (k) => [[Math.min(k, M), k - Math.min(k, M)], [k - Math.min(k, M), Math.min(k, M)]];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), cc = C('curve'), rc = C('region'), k = cS.v, pi = Math.abs(k - Math.PI) < 1e-9, sk = Math.sin(k);
    hits = [];
    const pl = axes(ctx, PB, [0, 4.5], [0, 4.5], { xl: 'x', yl: 't', nx: 9, ny: 9, fx: integers, fy: integers });
    const lab = labeller(ctx, 720, { headline: 2 });
    fillPoly(ctx, pl, [[0, 0], [M, 0], [M, M], [0, M]], rc, 0.14);
    for (let j = 1; j <= 17; j++) {
      const kk = j / 2; if (Math.abs(kk - k) < 0.05) continue;
      const [p, q] = seg(kk);
      line(ctx, pl.X(p[0]), pl.Y(p[1]), pl.X(q[0]), pl.Y(q[1]), alpha(cc, 0.3), 2);
      hits.push({ x: pl.X((p[0] + q[0]) / 2), y: pl.Y((p[1] + q[1]) / 2), r: 12, name: `the characteristic t = −x + ${fmt(kk, 1)}` });
    }
    const [p, q] = seg(k);
    line(ctx, pl.X(p[0]), pl.Y(p[1]), pl.X(q[0]), pl.Y(q[1]), cc, 5);
    hits.push({ x: pl.X((p[0] + q[0]) / 2), y: pl.Y((p[1] + q[1]) / 2), r: 16, name: `the characteristic t = −x + ${n(k)}, along which y would be constant` });
    hits.push({ x: pl.X(3.4), y: pl.Y(3.4), r: 30, name: 'the first quadrant x > 0, t > 0, where the solution is sought' });
    /* its two ends and the data they carry */
    const ends = [];
    if (k <= M) {
      dot(ctx, pl.X(k), pl.Y(0), fc, true, 10);
      hits.push({ x: pl.X(k), y: pl.Y(0), r: 16, name: `(${n(k)}, 0) on the x-axis, where y(x, 0) = 0` });
      ends.push([`y(${n(k)}, 0) = 0`, pl.X(k), pl.Y(0), 0.6, -0.8]);
    }
    dot(ctx, pl.X(0), pl.Y(Math.min(k, M)), fc, true, 10);
    if (k <= M) hits.push({ x: pl.X(0), y: pl.Y(k), r: 16, name: `(0, ${n(k)}) on the t-axis, where y(0, t) = sin t = ${n(sk, 3)}` });
    ends.push([pi ? 'y(0, π) = sin π = 0' : `y(0, ${fmt(k, 2)}) = sin ${fmt(k, 2)} = ${fmt(sk, 3)}`, pl.X(0), pl.Y(k), 0.7, -0.7]);
    lab.add(pi ? 'y(π, 0) = 0' : ends[0][0], ends[0][1], ends[0][2], ends[0][3], ends[0][4], fc, 20);
    lab.add(ends[1][0], ends[1][1], ends[1][2], ends[1][3], ends[1][4], fc, 20);
    lab.add(`t = −x + ${pi ? 'π' : n(k)}`, pl.X((p[0] + q[0]) / 2), pl.Y((p[1] + q[1]) / 2), 0.7, -0.7, cc, 20, 30);
    /* the data the axes carry (the book's labels) */
    lab.add('y = sin t', PB.l - 60, pl.Y(2), -1, 0, fc, 20, 0.001);
    lab.add('y = 0', pl.X(2), PB.b + 58, 0, 0, fc, 20);
    lab.flush();
    headline(ctx, pi
      ? 'Along $t = -x + \\pi$ the data agree, $\\ky(\\pi, 0) = 0 = \\sin \\pi = \\ky(0, \\pi)$, but on every other characteristic they still disagree.'
      : `Along $t = -x + ${n(k)}$ the solution would be constant, yet $\\ky(${n(k)}, 0) = 0$ and $\\ky(0, ${n(k)}) = \\sin ${n(k)} = ${n(sk, 3)}$.`);
    ro.set(pi
      ? '\\ky(\\pi, 0) = 0, \\quad \\ky(0, \\pi) = \\sin \\pi = 0'
      : `\\ky(${n(k)}, 0) = 0, \\quad \\ky(0, ${n(k)}) = \\sin(${n(k)}) = ${n(sk, 3)} \\neq 0`, undefined, { form: pi });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
