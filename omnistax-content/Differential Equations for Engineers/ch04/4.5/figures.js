/* Figures for section 4.5 Applications of Fourier series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, arrow, text, label, hbracket, headline, register, readout, fmt, hover, cycle, spring, fixed, cart, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const PI = Math.PI;
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');                 /* a number for TeX, with a plain minus */
const signed = (v, dec = 4) => (v < 0 ? ' - ' : ' + ') + n(Math.abs(v), dec);
/* a coefficient to three significant figures, in TeX: 0.0271, or 8.06 × 10⁻⁴ below a hundredth */
const sig = (v) => {
  const a = Math.abs(v), s = v < 0 ? '-' : '';
  if (a === 0) return '0';
  if (a >= 0.01) return s + n(a, a >= 10 ? 1 : a >= 1 ? 2 : 4);
  const e = Math.floor(Math.log10(a)), m = a / 10 ** e;
  return `${s}${n(m, 2)} \\times 10^{${e}}`;
};
const ord = (j) => j + (j % 10 === 1 && j % 100 !== 11 ? 'st' : j % 10 === 2 && j % 100 !== 12 ? 'nd' : j % 10 === 3 && j % 100 !== 13 ? 'rd' : 'th');
const guide = () => alpha(PAL.ink, 0.35);
const harmTex = (j) => (j === 1 ? '\\pi' : `${j}\\pi`);

/* Figure 4.14, with the book's cart sketch: Example 4.5.1's cart, m = 1, on a spring k with no damping, and a
   jetpack on its roof that fires 1 N for 1 s and rests for 1 s, F(t) the 2-periodic step. The cart rides its
   steady periodic solution: for ω₀ = √k not an odd multiple of π,
   x_sp = 1/(2k) + Σ_{n odd} 2/(πn(k − n²π²)) sin(nπt), summed here in closed form: with s = t mod 2,
   x = 1/k − (cos ω₀s + tan(ω₀/2) sin ω₀s)/(2k) on 0 < s < 1 and x = (cos ω₀u + tan(ω₀/2) sin ω₀u)/(2k), u = s − 1,
   on 1 < s < 2 (it agrees with the series to 10⁻¹⁰). On the dashed circles k = N²π² (N = 1, 3) the jetpack's Nth
   harmonic resonates and x_p = 1/(2k) − t cos(Nπt)/(N²π²) + Σ_{n odd ≠ N} b_n sin(nπt), whose periodic part is
   the closed form at k(1 ± 10⁻⁵) less its Nth term, averaged (good to 10⁻⁷). Graph t 0 to 10 (Figure 4.14's
   window) by x −0.3 to 0.6 (k ≥ 1 keeps x_sp below 0.57 away from resonance; a point past the box is pinned).
   The scene is 400 units per metre, a cart past −0.7 or 1.1 m drawn at the track's end with its true x.
   10 s of t over 5 s. */
(function () {
  const d = sim('sim-jetpack', 820);
  const FLAME_OUT = '#f2a33a', FLAME_IN = '#ffd166';   /* the jetpack's flame, in a flame's own colours (rule 7) */
  const RES = [1, 3].map((j) => ({ j, k: j * j * PI * PI }));
  const kS = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 1, max: 100, step: 0.05, value: 2, unit: 'N/m', dec: 2, aria: 'the spring constant k', detents: [2],
    specials: RES.map((r) => ({ at: r.k, label: `ω₀ = ${r.j === 1 ? '' : r.j}π, resonance` })), onInput: () => { state = model(kS.v); cy.reset(); } });
  const ro = readout(d);
  const BOX = { l: 160, r: 1300, t: 450, b: 740 }, STRIP = { l: 160, r: 1300, t: 356, b: 404 };
  const X0 = 560, SC = 400, FY = 286, WX = 110, REACH = [-0.7, 1.1];
  const Fof = (t) => ((((t % 2) + 2) % 2) < 1 ? 1 : 0);
  const bOf = (j, k) => 2 / (PI * j * (k - j * j * PI * PI));
  const closed = (k) => {
    const w = Math.sqrt(k), h = Math.tan(w / 2);
    return (t) => {
      const s = ((t % 2) + 2) % 2;
      if (s < 1) return 1 / k - (Math.cos(w * s) + h * Math.sin(w * s)) / (2 * k);
      const u = s - 1;
      return (Math.cos(w * u) + h * Math.sin(w * u)) / (2 * k);
    };
  };
  function model(k) {
    const hit = RES.find((r) => Math.abs(k - r.k) <= 1e-7);
    if (!hit) {
      const x = closed(k);
      let lo = Infinity, hi = -Infinity;
      for (let i = 0; i <= 800; i++) { const v = x((2 * i) / 800); lo = Math.min(lo, v); hi = Math.max(hi, v); }
      return { k, N: 0, x, lo, hi, b1: bOf(1, k), b3: bOf(3, k) };
    }
    const N = hit.j, kp = k * (1 + 1e-5), km = k * (1 - 1e-5), xp = closed(kp), xm = closed(km), aN = -1 / (N * N * PI * PI);
    const rest = (t) => (xp(t) - bOf(N, kp) * Math.sin(N * PI * t) + xm(t) - bOf(N, km) * Math.sin(N * PI * t)) / 2;
    return { k, N, aN, x: (t) => rest(t) + aN * t * Math.cos(N * PI * t), other: bOf(N === 1 ? 3 : 1, k) };
  }
  let state = model(kS.v), hits = [];
  hover(d.stage, () => hits);

  /* the pack on the cart's roof at (x, y), its nozzle to the left: the flame, while it fires, blows left and drives the cart right */
  function jetpack(ctx, x, y, firing, t) {
    const w = 54, h = 40, l = x - w / 2, tp = y - h, ny = y - 16;
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(l, y); ctx.lineTo(l, tp + 10); ctx.quadraticCurveTo(l, tp, l + 10, tp); ctx.lineTo(l + w - 10, tp);
    ctx.quadraticCurveTo(l + w, tp, l + w, tp + 10); ctx.lineTo(l + w, y); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(l, ny - 6); ctx.lineTo(l - 16, ny - 11); ctx.lineTo(l - 16, ny + 11); ctx.lineTo(l, ny + 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    if (!firing) return null;
    const s = 1 + 0.12 * Math.sin(37 * t) + 0.06 * Math.sin(91 * t), L = 76 * s, bx = l - 17;
    ctx.save();
    ctx.fillStyle = F.fact(FLAME_OUT); ctx.beginPath(); ctx.moveTo(bx, ny - 11);
    ctx.bezierCurveTo(bx - L * 0.35, ny - 17, bx - L * 0.7, ny - 8, bx - L, ny); ctx.bezierCurveTo(bx - L * 0.7, ny + 8, bx - L * 0.35, ny + 17, bx, ny + 11); ctx.closePath(); ctx.fill();
    ctx.fillStyle = F.fact(FLAME_IN); ctx.beginPath(); ctx.moveTo(bx, ny - 6);
    ctx.bezierCurveTo(bx - L * 0.2, ny - 9, bx - L * 0.4, ny - 4, bx - L * 0.55, ny); ctx.bezierCurveTo(bx - L * 0.4, ny + 4, bx - L * 0.2, ny + 9, bx, ny + 6); ctx.closePath(); ctx.fill();
    ctx.restore();
    return { x: bx - L / 2, y: ny };
  }

  function draw(t) {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, S = state, k = S.k, xt = S.x(t), on = Fof(t) === 1;
    hits = [];
    /* the scene: the wall, the spring, the cart with its jetpack, the force while the jetpack fires */
    const cw = 130, ch = 70, r = Math.max(6, Math.min(cw, ch) / 6), cyy = FY - ch / 2 - 2 * r;
    const xd = Math.max(REACH[0], Math.min(REACH[1], xt)), cx = X0 + xd * SC, off = xd !== xt;
    fixed(ctx, WX - 24, FY - 160, 24, 160);
    line(ctx, WX, FY, 1300, FY, ink, 3);
    line(ctx, X0, FY - 170, X0, FY + 12, guide(), 2, [4, 8]);
    spring(ctx, WX, cyy, cx - cw / 2, cyy, 9, 16, ink, 3);
    cart(ctx, cx, cyy, cw, ch, ink);
    text(ctx, 'm', cx, cyy, ink, { size: 24, align: 'center', italic: true });
    const flame = jetpack(ctx, cx, cyy - ch / 2, on, t);
    const fx = cx + cw / 2;
    if (on) {
      arrow(ctx, fx, cyy, fx + 120, cyy, fc, 5);
      label(ctx, 'F(t) = 1 N', fx + 126, cyy, { side: 'right', color: fc, size: 20, weight: 600, gap: 4 });
    }
    if (Math.abs(cx - X0) > 12) hbracket(ctx, X0, cx, FY + 26, fc, `x = ${fmt(xt, 2)} m${off ? ' (off the track)' : ''}`, { side: 'below', size: 18 });
    hits.push(
      { x: cx, y: cyy, r: 50, name: 'the cart, m = 1 kg' },
      { x: (WX + cx - cw / 2) / 2, y: cyy, r: 24, name: `the spring, k = ${fmt(k, 2)} N/m, no damping (c = 0)` },
      { x: cx, y: cyy - ch / 2 - 20, r: 26, name: on ? 'the jetpack, firing: 1 N for 1 s' : 'the jetpack, off for 1 s' },
      { x: X0, y: FY - 140, r: 18, name: 'the rest position x = 0, where the spring is neither stretched nor squeezed' },
    );
    if (flame) hits.push({ x: flame.x, y: flame.y, r: 30, name: 'the jetpack’s exhaust, blowing left and pushing the cart right' });
    if (on) hits.push({ x: fx + 60, y: cyy, r: 20, name: 'the force F(t) = 1 N while the jetpack fires' });
    if (Math.abs(cx - X0) > 12) hits.push({ x: (X0 + cx) / 2, y: FY + 26, r: 22, name: `the displacement x = ${fmt(xt, 3)} m from the rest position` });

    /* the force, on its own strip */
    const aF = axes(ctx, STRIP, [0, 10], [0, 1], { yl: 'F(t)', yc: fc, nx: 0, ny: 1, fy: (v) => fmt(v, 0) });
    plot(ctx, aF, Fof, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, aF, Fof, fc, { w: 4, x: [0, t] });
    dot(ctx, aF.X(t), aF.Y(Fof(t)), fc, true, 7);
    hits.push({ x: aF.X(t), y: aF.Y(Fof(t)), r: 14, name: `F(${fmt(t, 1)}) = ${Fof(t)} N` });

    /* the motion */
    const ax = axes(ctx, BOX, [0, 10], [-0.3, 0.6], { xl: 't', yl: 'x', yc: fc, nx: 10, ny: 9, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    const mean = 1 / (2 * k);
    if (!S.N) {
      line(ctx, ax.box.l, ax.Y(mean), ax.box.r, ax.Y(mean), alpha(fc, 0.55), 2, [10, 10]);
      hits.push({ x: ax.X(9.6), y: ax.Y(mean), r: 14, name: `the mean of x_sp, a₀/2 = 1/(2k) = ${fmt(mean, 3)}` });
    } else {
      const g = -S.aN;
      plot(ctx, ax, (s) => mean + g * s, alpha(fc, 0.55), { w: 2 });
      plot(ctx, ax, (s) => mean - g * s, alpha(fc, 0.55), { w: 2 });
      const tl = Math.min(8.5, (0.6 - 0.04 - mean) / g);
      label(ctx, `t/(${S.N === 1 ? '' : S.N * S.N}π²)`, ax.X(tl), ax.Y(mean + g * tl), { side: 'left', color: fc, size: 18, weight: 600 });
      hits.push({ x: ax.X(tl), y: ax.Y(mean + g * tl), r: 16, name: `the size of the growing term, 1/(2k) ± t/(${S.N === 1 ? '' : S.N * S.N}π²)` });
    }
    plot(ctx, ax, S.x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, S.x, fc, { w: 5, x: [0, t] });
    const at = pinned(ctx, ax.box, ax.X, ax.Y, t, xt, fc);
    hits.push({ x: at.x, y: at.y, r: 16, name: `(t, x(t)) = (${fmt(t, 1)}, ${fmt(xt, 3)})` });

    if (!S.N) {
      headline(ctx, `$k = ${n(k)}$: $\\komegazero = \\sqrt{k} = ${n(Math.sqrt(k))}$ misses the jetpack’s harmonics $\\pi, 3\\pi, 5\\pi, \\ldots$, and $\\kxsp$ swings between ${n(S.lo)} and ${n(S.hi)} about its mean $1/(2k) = ${n(mean)}$.`);
      ro.set(`\\kxsp(t) = \\frac{1}{2k} + \\sum_{n\\ \\text{odd}} \\frac{2\\sin(n\\pi t)}{\\pi n\\,(k - n^2\\pi^2)} = ${n(mean, 4)}${signed(S.b1)}\\sin(\\pi t)${signed(S.b3)}\\sin(3\\pi t) + \\cdots`, undefined, { form: 'sp' });
    } else {
      const N = S.N, NN = N === 1 ? '' : N * N, hT = harmTex(N);
      headline(ctx, `$k = ${NN}\\pi^2 = ${n(k)}$: $\\komegazero = ${hT}$ meets the jetpack’s ${ord(N)} harmonic, so $\\kxp$ carries $-t\\cos(${hT} t)/(${NN}\\pi^2)$, which grows without bound.`);
      const tTerm = `${signed(S.aN)}\\,t\\cos(${hT} t)`, oTerm = `${signed(S.other)}\\sin(${N === 1 ? '3\\pi' : '\\pi'} t)`;
      ro.set(`\\kxp(t) = \\frac{1}{2k} - \\frac{t\\cos(${hT} t)}{${NN}\\pi^2} + \\sum_{n\\ \\text{odd},\\ n \\neq ${N}} \\frac{2\\sin(n\\pi t)}{\\pi n\\,(k - n^2\\pi^2)} = ${n(mean, 4)}${N === 1 ? tTerm + oTerm : oTerm + tTerm} + \\cdots`, undefined, { form: 'res' + N });
    }
  }
  const cy = cycle(() => 10, 1.2);
  register(d.fig, { update: (dt) => cy.step(dt, () => 2), draw: () => draw(cy.now()) });
})();

/* Sim: the forcing's harmonics against the natural frequency, the paragraph on overtones drawn. The forcing F of
   half period L takes one of three shapes, each with the mass of the book's problem on it: the jetpack's on–off
   step (Example 4.5.1, m = 1; c₀ = 1, d_n = 2/(πn) for odd n), the ±1 square wave (Example 4.5.2, m = 2;
   d_n = 4/(πn) for odd n), the sawtooth t/L (Exercise 4.5.5, m = 1; d_n = 2(−1)^{n+1}/(πn)); the shape is fixed
   and L sets the base frequency π/L, so every coefficient stays put while the harmonics nπ/L slide. Above, F(t)
   over t 0 to 8; below it the harmonics as bars |d_n| at nπ/L on a frequency axis 0 to 32 (|d_n| 0 to 1.5, the
   largest 4/π = 1.27), and under them the undamped response m x″ + mω₀²x = F, harmonic by harmonic:
   a₀/2 = c₀/(2mω₀²), b_n = d_n/(m(ω₀² − (nπ/L)²)), as bars on a log scale 10⁻⁵ to 10, a taller one pinned at the
   top. ω₀ is the dashed line through both. Where ω₀ = Nπ/L for a harmonic F carries (the dashed circles on both
   sliders: the first ten in range) that harmonic lights up, the others dim, and its response is the term
   t·a_N cos(ω₀t) with a_N = −d_N/(2mω₀), which grows as t (an arrow off the top). Defaults: Example 4.5.2, the ±1
   wave, m = 2, L = 1, ω₀ = 3π. Still: the spectrum answers its controls; landing on a circle pulses the bar. */
(function () {
  const d = sim('sim-harmonic-resonance', 800);
  const SHAPES = {
    step: { m: 1, c0: 1, d: (j) => (j % 2 ? 2 / (PI * j) : 0), F: (v) => (v >= 0 ? 1 : 0), odd: true, name: 'the on–off step' },
    square: { m: 2, c0: 0, d: (j) => (j % 2 ? 4 / (PI * j) : 0), F: (v) => (v >= 0 ? 1 : -1), odd: true, name: 'the ±1 square wave' },
    saw: { m: 1, c0: 0, d: (j) => (2 * (j % 2 ? 1 : -1)) / (PI * j), F: (v) => v, odd: false, name: 'the sawtooth' },
  };
  const JMAX = 31, WMAX = 32;
  const harm = (i) => (SHAPES[fS.value].odd ? 2 * i + 1 : i + 1);   /* the i-th harmonic the shape carries */
  const fS = choice(d.controls, { label: '\\kF(t)', key: 'forcing', value: 'square', aria: 'the shape of the forcing F(t)', options: [
    { value: 'step', label: 'on–off' }, { value: 'square', label: '±1' }, { value: 'saw', label: 'sawtooth' }] });
  const wS = ctl(d.controls, { label: '\\komegazero', cls: 'frequency', key: 'omega0', min: 0.5, max: 30, step: 0.01, value: 3 * PI, unit: '', dec: 2, aria: 'the natural frequency ω₀',
    specials: Array.from({ length: 10 }, (_, i) => ({ at: () => harm(i) * PI / LS.v, label: 'a harmonic of F, resonance' })) });
  const LS = ctl(d.controls, { label: 'L', cls: '', key: 'L', min: 0.25, max: 3, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the half period L of the forcing',
    specials: Array.from({ length: 10 }, (_, i) => ({ at: () => harm(i) * PI / wS.v, label: 'a harmonic of F, resonance' })) });
  const ro = readout(d);
  const pulse = F.tween(d, 1);
  const INSET = { l: 160, r: 1300, t: 136, b: 196 }, TOP = { l: 160, r: 1300, t: 300, b: 440 }, LOW = { l: 160, r: 1300, t: 520, b: 720 };
  const LMIN = -5, LMAX = 1;
  let hits = [], lastN = 0;
  hover(d.stage, () => hits);
  /* the coefficients of the shape s at half period L and natural frequency w: index 0 the constant, j the jth harmonic */
  const spectrum = (s, L, w) => {
    const S = SHAPES[s], dd = [S.c0 / 2], bb = [S.c0 / (2 * S.m * w * w)];
    for (let j = 1; j < JMAX; j++) { const dj = S.d(j), wj = (j * PI) / L; dd.push(dj); bb.push(dj === 0 ? 0 : dj / (S.m * (w * w - wj * wj))); }
    return { dd, bb };
  };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), fq = C('frequency'), sq = C('sequence'), ink = PAL.ink;
    const s = fS.value, S = SHAPES[s], L = LS.v, w = wS.v, m = S.m;
    hits = [];
    /* the harmonic sitting on ω₀, if any */
    let N = 0;
    for (let j = 1; j < JMAX; j++) if (S.d(j) !== 0 && Math.abs(w - (j * PI) / L) <= 1e-7 * Math.max(1, w)) { N = j; break; }
    if (N && N !== lastN) { pulse.set(0); pulse.to(1, 1400); }
    lastN = N;
    const glow = N ? Math.sin(PI * pulse.v) : 0;
    const now = spectrum(s, L, w), mix = fS.mix((v) => { const q = spectrum(v, L, w); return { dd: q.dd.map(Math.abs), bb: q.bb.map(Math.abs) }; });

    /* the forcing in time */
    const aF = axes(ctx, INSET, [0, 8], [-1, 1], { xl: 't', yl: 'F(t)', yc: fc, nx: 8, ny: 2, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, aF.box.l, aF.Y(0), aF.box.r, aF.Y(0), guide(), 2);
    const shapeAt = (v) => (t) => { const u = t / L, p = (((u + 1) % 2) + 2) % 2 - 1; return SHAPES[v].F(p); };
    if (fS.k < 1) fS.curve(ctx, shapeAt, 0, 8, aF.X, aF.Y, fc, 4, 600);
    else plot(ctx, aF, shapeAt(s), fc, { w: 4 });
    hits.push({ x: aF.X(L), y: aF.Y(0), r: 20, name: `${S.name}, period 2L = ${fmt(2 * L, 2)}` });

    /* the two panes share the frequency axis */
    const aT = axes(ctx, TOP, [0, WMAX], [0, 1.5], { yl: s === 'step' ? '|c_0|/2,  |d_n|' : '|d_n|', yc: sq, nx: 0, ny: 3, fy: (v) => fmt(v, 1) });
    const aB = axes(ctx, LOW, [0, WMAX], [LMIN, LMAX], { xl: 'ω', xc: fq, yl: s === 'step' ? '|a_0|/2,  |b_n|' : '|b_n|', yc: sq, nx: 8, ny: 6, fx: (v) => fmt(v, 0),
      fy: (v) => (v === 0 ? '1' : v === 1 ? '10' : `10^{${fmt(v, 0)}}`) });
    const X = aT.X, ly = (v) => (v <= 10 ** LMIN ? LOW.b : aB.Y(Math.min(LMAX, Math.log10(v))));
    const gap = (PI / L) * ((TOP.r - TOP.l) / WMAX), bw = Math.min(14, 0.6 * gap);
    const bar = (x, yTop, yBot, color, a) => { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.fillRect(x - bw / 2, yTop, bw, yBot - yTop); ctx.restore(); };
    for (let j = 0; j < JMAX; j++) {
      const wj = (j * PI) / L, dj = mix.dd[j], bj = mix.bb[j];
      if (wj > WMAX || (j === 0 && S.c0 === 0 && fS.k >= 1) || (j > 0 && dj < 1e-9)) continue;
      const x = j === 0 ? X(0) + bw / 2 + 2 : X(wj), lit = j === N, a = N && !lit ? 0.4 : 1;
      if (lit) {
        const pad = 7 + 14 * glow;
        ctx.save(); ctx.fillStyle = alpha(sq, 0.2 + 0.3 * glow);
        ctx.fillRect(x - bw / 2 - pad, aT.Y(dj) - pad, bw + 2 * pad, TOP.b - aT.Y(dj) + pad);
        ctx.fillRect(x - bw / 2 - pad, LOW.t - 6, bw + 2 * pad, LOW.b - LOW.t + 6);
        ctx.restore();
      }
      bar(x, aT.Y(dj), TOP.b, sq, a);
      const dName = j === 0 ? `the constant term c₀/2 = ${fmt(now.dd[0], 2)}` : `the ${ord(j)} harmonic of F at ω = ${j === 1 ? '' : j}π/L = ${fmt(wj, 2)}: d${j === 1 ? '₁' : '_' + j} = ${fmt(now.dd[j], 4)}`;
      hits.push({ x, y: (aT.Y(dj) + TOP.b) / 2, r: 12, name: dName });
      if (lit) {
        arrow(ctx, x, LOW.b, x, LOW.t - 22, sq, 5);
        label(ctx, 'grows as t', x + 14, LOW.t + 22, { side: 'right', color: sq, size: 18, weight: 600, gap: 4 });
        hits.push({ x, y: (LOW.t + LOW.b) / 2, r: 14, name: `resonance: the ${ord(j)} harmonic's term in x_p is a_${j} t cos(ω₀t), a_${j} = −d_${j}/(2mω₀) = ${fmt(-now.dd[j] / (2 * m * w), 4)}, which grows as t` });
        continue;
      }
      const top = ly(bj);
      bar(x, top, LOW.b, sq, a);
      if (bj > 10 ** LMAX) dot(ctx, x, LOW.t, sq, false, 7);
      const bName = j === 0 ? `the constant term of the response, a₀/2 = c₀/(2mω₀²) = ${fmt(now.bb[0], 4)}`
        : `the response to the ${ord(j)} harmonic, b_${j} = d_${j}/(m(ω₀² − (${j === 1 ? '' : j}π/L)²)) = ${fmt(now.bb[j], 5)}`;
      hits.push({ x, y: (Math.max(top, LOW.t) + LOW.b) / 2, r: 12, name: bName });
    }
    /* the natural frequency, through both panes */
    const xw = X(w);
    line(ctx, xw, TOP.t, xw, LOW.b, alpha(fq, 0.8), 2.5, [10, 10]);
    label(ctx, `ω_0 = ${fmt(w, 2)}`, N ? xw - 10 : xw, 476, { side: N ? 'left' : 'right', color: fq, size: 20, weight: 600, gap: 0 });
    hits.push({ x: xw, y: (TOP.t + TOP.b) / 2, r: 12, name: `the natural frequency ω₀ = √(k/m) = ${fmt(w, 2)}` });
    if (N) {
      label(ctx, `n = ${N}`, X(w), aT.Y(Math.abs(now.dd[N])) - 18, { side: 'above', color: sq, size: 18, weight: 600 });
    }

    /* the headline and the readout */
    if (N) {
      const hT = N === 1 ? '\\pi' : `${N}\\pi`, aN = -S.d(N) / (2 * m * w);
      headline(ctx, `$\\komegazero = ${hT}/L = ${n(w)}$: the ${ord(N)} harmonic of $\\kF$ meets the natural frequency, and its term in $\\kxp$ grows as $t$.`);
      ro.set(`\\komegazero = \\frac{${hT}}{L}:\\quad a_{${N}} = -\\frac{d_{${N}}}{2m\\komegazero} = -\\frac{${n(S.d(N), 4)}}{2 \\cdot ${m} \\cdot ${n(w, 3)}} = ${sig(aN)},\\ \\text{the coefficient of } t\\cos(\\komegazero t)`, undefined, { form: 'res' });
    } else {
      let jb = 0, best = Math.abs(now.bb[0]);
      for (let j = 1; j < JMAX; j++) if (Math.abs(now.bb[j]) > best) { best = Math.abs(now.bb[j]); jb = j; }
      const big = jb === 0 ? `the constant term draws the largest response, $|\\kazero|/2 = ${sig(best)}$`
        : `the ${ord(jb)} harmonic, at $${jb === 1 ? '' : jb}\\pi/L = ${n((jb * PI) / L)}$, draws the largest response, $|b_{${jb}}| = ${sig(best)}$`;
      headline(ctx, `$\\komegazero = ${n(w)}$: ${big}.`);
      let jn = 1, dn = Infinity;
      for (let j = 1; j < JMAX; j++) if (S.d(j) !== 0 && Math.abs((j * PI) / L - w) < dn) { dn = Math.abs((j * PI) / L - w); jn = j; }
      const wj = (jn * PI) / L;
      ro.set(`\\kbn = \\frac{\\kdn}{m\\bigl(\\komegazero^2 - (n\\pi/L)^2\\bigr)},\\qquad b_{${jn}} = \\frac{${n(S.d(jn), 4)}}{${m}\\,(${n(w * w)} - ${n(wj * wj)})} = ${sig(now.bb[jn])}`, undefined, { form: 'b' });
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
