/* Figures for section 4.7 One-dimensional wave equation. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.7'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, dot, line, text, label, headline, register, readout, fmt, hover, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* a polyline through canvas points */
function stroke(ctx, pts, color, w, dash) {
  if (pts.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
}

/* Figure 4.20 + 4.21 + 4.22 + 4.23: the string of Example 4.7.1 (L = 2, a = 1, plucked to 0.1 in the middle, let go
   from rest) on its guitar, moving as the clock runs one period 2L/a of t (4 s at the book's a = 1; a larger a
   vibrates faster). The guitar is mirrored so the bridge sits at x = 0 on the left and the nut at x = L, as in the
   book's sketch; the string's height on the guitar is drawn 3 times its size (said in the readout), the graph of
   y(x, t) below it is to scale (x 0 to 2, y −0.1 to 0.1, Figures 4.21 and 4.23's window). Beside it the spectrum:
   the amplitude of each mode n at its frequency nπa/L (ω 0 to 20, amplitude 0 to 0.1), the fundamental πa/L
   dashed. The solution is drawn exactly by d'Alembert's form of the series, (F(x − at) + F(x + at))/2 for a
   pluck and (H(x + at) − H(x − at))/(2a) for a strike (F the odd 2L-periodic extension of f, H the integral of
   g's), so the corners stay sharp. A choice of start: plucked at x = p (p on a slider, 0.2 to 1.8, the book's 1 a
   detent), struck flat with y_t = −0.05 (Exercise 4.7.6's dropped instrument, at this string's scale), or a
   single mode n = 1 to 4, 0.1 sin(nπx/L) cos(nπat/L); a on a slider 0.5 to 3, the book's 1 a detent. */
(function () {
  const d = sim('sim-plucked-string', 790);
  const L = 2, H0 = 0.1, V0 = 0.05, WMAX = 20, NX = 240, NB = 30, EX = 3;
  const start = choice(d.controls, { label: 'start', key: 'start', aria: 'how the string starts', value: 'pluck',
    options: [{ value: 'pluck', label: 'plucked' }, { value: 'strike', label: 'struck' }, { value: 'm1', label: 'mode 1' }, { value: 'm2', label: 'mode 2' }, { value: 'm3', label: 'mode 3' }, { value: 'm4', label: 'mode 4' }],
    onInput: (v) => { pS.show(v === 'pluck'); cy.reset(); } });
  const pS = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 0.2, max: 1.8, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the point x = p where the string is plucked', detents: [1], onInput: () => cy.reset() });
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the constant a of the wave equation', detents: [1], onInput: () => cy.reset() });
  const cy = cycle(() => (2 * L) / aS.v, 0);
  const ro = readout(d);
  const GS = 1.05, GX = 700 - 502 * GS, YS = 230;
  const GB = { l: 130, r: 770, t: 470, b: 700 }, SB = { l: 920, r: 1330, t: 470, b: 700 };
  const XS = Array.from({ length: NX + 1 }, (_, i) => (L * i) / NX);
  /* fold a point of the line into [0, L], as the reflections at the two fixed ends do */
  const fold = (u) => Math.abs((((u + L) % (2 * L)) + 2 * L) % (2 * L) - L);
  /* the odd 2L-periodic extension of the pluck of height H0 at x = p, and the integral of the odd extension of g = −V0 */
  const Fx = (u, p) => { const v = ((((u + L) % (2 * L)) + 2 * L) % (2 * L)) - L, s = Math.sign(v), w = Math.abs(v); return s * (w <= p ? (H0 * w) / p : (H0 * (L - w)) / (L - p)); };
  const Hx = (u) => -V0 * fold(u);
  const mode = (v) => (v[0] === 'm' ? +v.slice(1) : 0);
  function y(v, x, t, a, p) {
    const m = mode(v);
    if (m) return H0 * Math.sin((m * Math.PI * x) / L) * Math.cos((m * Math.PI * a * t) / L);
    if (v === 'strike') return (Hx(x + a * t) - Hx(x - a * t)) / (2 * a);
    return (Fx(x - a * t, p) + Fx(x + a * t, p)) / 2;
  }
  const shape = (v, t, a, p) => XS.map((x) => y(v, x, t, a, p));
  /* the sine-series coefficients: c_n of the pluck, b_n L/(nπa) of the strike (the amplitude of sin(nπat/L)) */
  const cn = (k, p) => (2 * H0 * L * L * Math.sin((k * Math.PI * p) / L)) / (k * k * Math.PI * Math.PI * p * (L - p));
  const bn = (k, a) => (k % 2 ? (-4 * V0) / (k * Math.PI) : 0) * (L / (k * Math.PI * a));
  function amps(v, a, p) {
    const m = mode(v);
    return Array.from({ length: NB }, (_, i) => { const k = i + 1; return m ? (k === m ? H0 : 0) : Math.abs(v === 'strike' ? bn(k, a) : cn(k, p)); });
  }
  let hits = [];
  hover(d.stage, () => hits, d.c);
  function readoutOf(v, a, p) {
    const fq = (k) => `\\htmlClass{kv-frequency}{${n((k * Math.PI * a) / L)}}`, wk = (k) => n((k * Math.PI) / L);
    const sq = (c) => `\\htmlClass{kv-sequence}{${n(Math.abs(c), 4)}}`;
    const m = mode(v);
    if (m) return `\\ky(x,t) = 0.1\\sin\\left(\\frac{${m}\\pi}{L}x\\right)\\cos\\left(\\frac{${m}\\pi a}{L}t\\right) = 0.1\\sin(${wk(m)}x)\\cos(${fq(m)}\\,t)`;
    const coef = v === 'strike' ? (k) => bn(k, a) : (k) => cn(k, p);
    const ks = []; for (let k = 1; ks.length < 2 && k < 40; k++) if (Math.abs(coef(k)) > 5e-6) ks.push(k);
    const trig = v === 'strike' ? '\\sin' : '\\cos';
    const terms = ks.map((k, i) => { const c = coef(k); return `${c < 0 ? '-' : i ? '+' : ''}${sq(c)}\\sin(${wk(k)}x)${trig}(${fq(k)}\\,t)`; }).join(' ');
    const sum = v === 'strike'
      ? '\\sum_{n=1}^{\\infty} \\kbn \\frac{L}{n\\pi a}\\sin\\left(\\frac{n\\pi}{L}x\\right)\\sin\\left(\\frac{n\\pi a}{L}t\\right)'
      : '\\sum_{n=1}^{\\infty} \\kcn \\sin\\left(\\frac{n\\pi}{L}x\\right)\\cos\\left(\\frac{n\\pi a}{L}t\\right)';
    return `\\ky(x,t) = ${sum} = ${terms} + \\cdots`;
  }
  function headOf(v, t, a, p) {
    const T = `$t = ${n(t)}$`, m = mode(v);
    if (m === 1) return `${T}: mode 1 swings as one arch at the fundamental frequency $\\pi a/L = ${n((Math.PI * a) / L)}$.`;
    if (m) return `${T}: mode ${m} swings at $${m}\\pi a/L = ${n((m * Math.PI * a) / L)}$ and never moves at its node${m > 2 ? 's' : ''} $x = ${Array.from({ length: m - 1 }, (_, i) => n(((i + 1) * L) / m)).join(',\\ ')}$.`;
    if (v === 'strike') {
      if (t < 0.005) return `${T}: the string is flat, and every point of it is moving down at speed $0.05$.`;
      const k1 = fold(a * t), k2 = L - k1;
      if (Math.abs(k1 - k2) < 0.005) return `${T}: the two corners meet in the middle, at $x = ${n(L / 2)}$, where $\\ky = ${n(y(v, L / 2, t, a, p), 3)}$.`;
      return `${T}: the string is flat at $\\ky = ${n(y(v, L / 2, t, a, p), 3)}$ between its two corners, at $x = ${n(Math.min(k1, k2))}$ and $x = ${n(Math.max(k1, k2))}$, which move at speed $a = ${n(a)}$.`;
    }
    const k1 = fold(p - a * t), k2 = fold(p + a * t);
    if (Math.abs(k1 - k2) < 0.005) return t < 0.005 ? `${T}: the string is let go from its pluck, a corner at $x = ${n(p)}$ of height $0.1$.` : `${T}: the two corners meet at $x = ${n(k1)}$.`;
    return `${T}: the corner of the pluck has split in two, at $x = ${n(Math.min(k1, k2))}$ and $x = ${n(Math.max(k1, k2))}$, each running at speed $a = ${n(a)}$.`;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), sc = C('sequence'), wc = C('frequency'), v = start.value, a = aS.v, p = pS.v, t = cy.now();
    const now = start.mix((s) => shape(s, t, a, p)), was = start.mix((s) => shape(s, 0, a, p)), amp = start.mix((s) => amps(s, a, p));
    hits = [];
    /* the scene: the guitar mirrored so its bridge is on the left, the rest line, the string drawn ×EX */
    ctx.save(); ctx.translate(1400, 0); ctx.scale(-1, 1); F.guitar(ctx, GX, YS, GS); ctx.restore();
    const ends = F.guitar.string(GX, GS), BR = 1400 - ends.bridge, NU = 1400 - ends.nut, PX = (NU - BR) / L;
    line(ctx, BR, YS, NU, YS, alpha(PAL.ink, 0.35), 2, [10, 10]);
    const onGuitar = (ys) => ys.map((yv, i) => [BR + XS[i] * PX, YS - EX * yv * PX]);
    stroke(ctx, onGuitar(was), alpha(fc, 0.3), 3);
    stroke(ctx, onGuitar(now), fc, 4);
    for (let i = 10; i < NX; i += 20) hits.push({ x: BR + XS[i] * PX, y: YS - EX * now[i] * PX, r: 16, name: `the string at x = ${n(XS[i])}: y = ${n(now[i], 3)}, its height drawn 3 times as large` });
    hits.push({ x: BR, y: YS, r: 22, name: 'the bridge, where the string is fixed at x = 0' }, { x: NU, y: YS, r: 22, name: 'the nut, where the string is fixed at x = L = 2' });
    label(ctx, 'x = 0', BR, YS, { side: 'left', color: PAL.ink, size: 20, gap: 28 });
    label(ctx, 'x = L', NU, YS, { side: 'right', color: PAL.ink, size: 20, gap: 28 });
    /* the graph of y(x, t) to scale: the start faint, the string now full, its corners or nodes dotted */
    const gx = axes(ctx, GB, [0, L], [-0.1, 0.1], { xl: 'x', yl: 'y(x, t)', yc: fc, nx: 4, ny: 4, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 2) });
    const onGraph = (ys) => ys.map((yv, i) => [gx.X(XS[i]), gx.Y(yv)]);
    clip(ctx, GB, () => { stroke(ctx, onGraph(was), alpha(fc, 0.35), 3); stroke(ctx, onGraph(now), fc, 5); });
    hits.push({ x: gx.X(0.25), y: gx.Y(was[30]), r: 12, name: `the start, y(x, 0)` });
    for (let i = 20; i < NX; i += 40) hits.push({ x: gx.X(XS[i]), y: gx.Y(now[i]), r: 14, name: `y(${n(XS[i])}, ${n(t)}) = ${n(now[i], 3)}` });
    if (start.k >= 1) {
      const m = mode(v);
      const pts = m ? Array.from({ length: m - 1 }, (_, i) => ((i + 1) * L) / m)
        : v === 'strike' ? [fold(a * t), L - fold(a * t)].filter((x) => x > 0.01 && x < L - 0.01) : [fold(p - a * t), fold(p + a * t)];
      pts.forEach((x) => {
        const yv = y(v, x, t, a, p);
        dot(ctx, gx.X(x), gx.Y(yv), fc, !m, 7);
        hits.push({ x: gx.X(x), y: gx.Y(yv), r: 14, name: m ? `a node of mode ${m}, x = ${n(x)}, where the string never moves` : `a corner, at x = ${n(x)}, moving at speed a = ${n(a)}` });
      });
    }
    /* the spectrum: a bar per mode n at its frequency nπa/L, the fundamental πa/L dashed */
    const sx = axes(ctx, SB, [0, WMAX], [0, 0.1], { xl: 'frequency nπa/L', xc: wc, yl: 'amplitude', yc: sc, nx: 4, ny: 2, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 2) });
    const w1 = (Math.PI * a) / L, bw = Math.max(4, Math.min(18, 0.55 * (sx.X(w1) - sx.X(0))));
    line(ctx, sx.X(w1), SB.b, sx.X(w1), SB.t, wc, 2, [10, 10]);
    text(ctx, `πa/L = ${n(w1)}`, sx.X(w1) + 10, SB.t + 16, wc, { size: 20, weight: 600, bg: PAL.panel });
    hits.push({ x: sx.X(w1), y: SB.t + 60, r: 12, name: `the fundamental frequency πa/L = ${n(w1)}` });
    for (let k = 1; k <= NB; k++) {
      const wk = k * w1; if (wk > WMAX) break;
      const A = Math.min(amp[k - 1], 0.1), top = sx.Y(A);
      if (SB.b - top >= 0.5) { ctx.save(); ctx.fillStyle = alpha(sc, 0.85); ctx.fillRect(sx.X(wk) - bw / 2, top, bw, SB.b - top); ctx.restore(); }
      hits.push({ x: sx.X(wk), y: Math.min(top, SB.b - 10), r: Math.max(10, bw), name: `n = ${k}: amplitude ${n(amp[k - 1], 4)} at the frequency ${k === 1 ? '' : k}πa/L = ${n(wk)}${k === 1 ? ', the fundamental' : ', an overtone'}` });
    }
    headline(ctx, headOf(v, t, a, p));
    ro.set(readoutOf(v, a, p), 'On the guitar the string’s height is drawn 3 times its size; the graph of $\\ky$ is to scale.', { form: v });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
