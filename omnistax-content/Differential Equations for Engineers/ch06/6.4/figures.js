/* Figures for section 6.4 Dirac delta and impulse response. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, arrow, text, label, vbracket, headline, register, readout, fmt, hover, cycle, pinned, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw, d = [10, 10]) => { ctx.save(); ctx.setLineDash(d); draw(); ctx.restore(); };
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Figure 6.3: the rectangular pulse φ(t) = M(u(t − a) − u(t − b)) on the left, its transform
   ℒ{φ} = M(e^(−as) − e^(−bs))/s on the right, whose value at s = 0 is the area M(b − a). Two states: the
   height M on its slider (the book's a = 0.5, b = 1, M = 2 on load), or area 1, where M = 1/(b − a) follows
   b and the M slider leaves. As b slides down to a at area 1 the pulse grows tall and thin and the transform
   rises onto e^(−as) (dashed), the transform of δ(t − a). Axes: t 0 to 3 by φ 0 to 8 (M's slider maximum; a
   taller pulse at area 1 is pinned at the top with its height written); s 0 to 10 by 0 to 2 (the default area
   1 at mid height; a larger area is pinned at s = 0). Still: a shape under sliders. */
(function () {
  const d = sim('sim-pulse', 560);
  const mode = choice(d.controls, { label: 'pulse', key: 'mode', value: 'M', options: [
    { value: 'M', label: 'height M' }, { value: 'unit', label: 'area 1' }], onInput: (v) => mS.show(v === 'M') });
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 2, step: 0.01, value: 0.5, unit: '', dec: 2, aria: 'the start a of the pulse', detents: [0],
    onInput: () => { bS.range({ min: +(aS.v + 0.02).toFixed(2), max: 3, step: 0.01, value: Math.max(bS.v, +(aS.v + 0.02).toFixed(2)) }); mS.refresh(); } });
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.52, max: 3, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the end b of the pulse', onInput: () => mS.refresh() });
  const mS = ctl(d.controls, { label: 'M', cls: '', key: 'M', min: 0.25, max: 8, step: 0.05, value: 2, unit: '', dec: 2, aria: 'the height M of the pulse',
    specials: [{ at: () => 1 / (bS.v - aS.v), label: 'area 1' }] });
  const ro = readout(d);
  const LB = { l: 120, r: 640, t: 140, b: 460 }, RB = { l: 800, r: 1320, t: 140, b: 460 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), tc = C('transform'), ink = PAL.ink;
    const a = aS.v, b = Math.max(bS.v, a + 0.02), unit = mode.value === 'unit', M = unit ? 1 / (b - a) : mS.v, area = M * (b - a);
    const L = (s) => (s < 1e-6 ? area : (M * (Math.exp(-a * s) - Math.exp(-b * s))) / s), E = (s) => Math.exp(-a * s);
    /* left: the pulse and its area */
    const al = axes(ctx, LB, [0, 3], [0, 8], { xl: 't', yl: 'φ(t)', yc: fc, nx: 6, ny: 4, fx: (v) => fmt(v, 1) });
    const top = Math.min(M, 8), x1 = al.X(a), x2 = al.X(b), yT = al.Y(top), y0 = al.Y(0);
    ctx.save(); ctx.fillStyle = alpha(ic, 0.3); ctx.fillRect(x1, yT, x2 - x1, y0 - yT); ctx.restore();
    line(ctx, x1, y0, x1, yT, alpha(fc, 0.45), 2, [4, 8]); line(ctx, x2, y0, x2, yT, alpha(fc, 0.45), 2, [4, 8]);
    plot(ctx, al, [...(a > 0 ? [{ f: () => 0, x: [0, a], ends: '-)' }] : []), { f: () => M, x: [a, b], ends: '[)' }, { f: () => 0, x: [b, 3], ends: '[-' }], fc);
    /* a pulse taller than the frame rises out of it as an arrow, the way the delta is drawn */
    if (M > 8) arrow(ctx, (x1 + x2) / 2, al.Y(5), (x1 + x2) / 2, LB.t - 6, fc, 4);
    const right = b <= 2, sx = right ? x2 : x1, side = right ? 'right' : 'left';
    const mText = M > 8 ? `M = ${fmt(M, 1)}, off the top` : `M = ${fmt(M, 2)}`, aText = `area M(b − a) = ${fmt(area, 2)}`;
    label(ctx, mText, sx, Math.max(yT, LB.t + 16), { side, color: fc, size: 18, gap: 14 });
    if (x2 - x1 >= 240 && top >= 1.5) text(ctx, aText, (x1 + x2) / 2, al.Y(top / 2), ic, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    else label(ctx, aText, sx, top < 3 ? yT - 38 : al.Y(top / 2), { side, color: ic, size: 18, gap: 14 });
    /* right: the transform, with e^(−as) dashed for the limit */
    const ar = axes(ctx, RB, [0, 10], [0, 2], { xl: 's', yl: 'ℒ{φ(t)}', yc: tc, nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    dashed(ctx, () => plot(ctx, ar, E, alpha(tc, 0.6), { w: 3 }));
    plot(ctx, ar, L, tc);
    const at0 = pinned(ctx, ar.box, ar.X, ar.Y, 0, area, tc, area > 2 ? `M(b − a) = ${fmt(area, 2)}` : undefined);
    label(ctx, 'e^{−as}', ar.X(3.2), ar.Y(E(3.2)), { side: 'above', color: tc, size: 18, weight: 400 });
    let gap = 0;
    for (let i = 0; i <= 400; i++) { const s = (10 * i) / 400; gap = Math.max(gap, Math.abs(L(s) - E(s))); }
    hits = [
      { x: (x1 + x2) / 2, y: (yT + y0) / 2, r: 28, name: `the area under the pulse, M(b − a) = ${fmt(area, 2)}` },
      { x: x2, y: yT, r: 16, name: `the pulse φ(t) = ${fmt(M, 2)} for ${fmt(a, 2)} ≤ t < ${fmt(b, 2)}` },
      { x: ar.X(1.5), y: ar.Y(L(1.5)), r: 16, name: `the transform M(e^(−as) − e^(−bs))/s, ${fmt(L(1.5), 3)} at s = 1.5` },
      { x: ar.X(6), y: ar.Y(E(6)), r: 16, name: `e^(−as) = e^(−${fmt(a, 2)}s), the transform of δ(t − a)` },
      { x: at0.x, y: at0.y, r: 14, name: `the transform at s = 0 is the area, ${fmt(area, 2)}` },
    ];
    if (unit) headline(ctx, `Area 1 with $a = ${n(a)}$, $b = ${n(b)}$: $M = 1/(b-a) = ${n(M)}$, and the transform is within ${n(gap, 3)} of $e^{-as}$.`);
    else headline(ctx, `$a = ${n(a)}$, $b = ${n(b)}$, $M = ${n(M)}$: the pulse has area ${n(area)} and transform $${n(M)}\\,(e^{-${n(a)}s} - e^{-${n(b)}s})/s$.`);
    const tex = `{\\mathcal{L}}\\bigl\\{\\kvarphi(t)\\bigr\\} = M\\frac{e^{-as} - e^{-bs}}{s} = ${n(M)}\\,\\frac{e^{-${n(a)}s} - e^{-${n(b)}s}}{s},\\quad \\int_0^\\infty \\kvarphi(t)\\,dt = M(b-a) = ${n(M)}\\,(${n(b)} - ${n(a)}) = ${n(area)}`;
    ro.set(tex, unit ? `As $b \\to a$ with the area held at 1, the transform tends to $e^{-as} = {\\mathcal{L}}\\{\\kdelta(t-a)\\}$.` : '', { form: mode.value });
  }
  still(d, draw);
})();

/* Sim: the response to any input as a sum of impulse responses, for x″ + ω₀²x = f(t), x(0) = x′(0) = 0,
   whose impulse response is h(t) = sin(ω₀t)/ω₀ (Example 6.4.2). The input is cut into N slices of width
   Δτ with middles τᵢ (over [1, 5] for the rocket's pulse, over [0, 10] for 1 and cos t); when t passes τᵢ
   the slice launches f(τᵢ)Δτ h(t − τᵢ), drawn in the impulse response's colour from τᵢ to the present t.
   Their sum (the output, solid) closes on the exact x = f ∗ h (dashed): (1 − cos ω₀t)/ω₀² for 1,
   the same shifted twice for u(t − 1) − u(t − 5), and (cos t − cos ω₀t)/(ω₀² − 1), or t sin t/2 at
   ω₀ = 1, for cos t. The δ input is one impulse at 0, and its output is h alone. Input strip τ 0 to 10 by
   −1.2 to 1.2; graph t 0 to 10 by x −4 to 4 (ω₀ ≥ 0.75 keeps every exact output inside but cos t near
   ω₀ = 0.75, max 4.13, which is pinned). Moving: t runs 0 to 10 over 6 s, then holds. */
(function () {
  const d = sim('sim-impulse-response', 780);
  const IN = {
    delta: { label: 'δ(t)' },
    one: { label: '1', f: () => 1, span: [0, 10] },
    pulse: { label: 'u(t − 1) − u(t − 5)', f: (t) => (t >= 1 && t < 5 ? 1 : 0), span: [1, 5] },
    cos: { label: 'cos t', f: (t) => Math.cos(t), span: [0, 10] },
  };
  const pick = choice(d.controls, { label: 'input', key: 'input', value: 'pulse', options: Object.keys(IN).map((k) => ({ value: k, label: IN[k].label })),
    onInput: (v) => { nS.show(v !== 'delta'); wS.refresh(); cy.reset(); } });
  const wS = ctl(d.controls, { label: '\\komegazero', cls: 'frequency', key: 'omega0', min: 0.75, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the natural frequency ω₀',
    specials: [{ at: () => (pick.value === 'cos' ? 1 : null), label: 'resonance with cos t' }], onInput: () => cy.reset() });
  const nS = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 2, max: 32, step: 1, value: 8, unit: '', dec: 0, aria: 'the number N of slices', detents: [4, 8, 16, 32], onInput: () => cy.reset() });
  const ro = readout(d);
  const T = 10, STRIP = { l: 150, r: 1300, t: 150, b: 262 }, BOX = { l: 150, r: 1300, t: 350, b: 700 };
  let hits = [];
  hover(d.stage, () => hits);
  const exact = (k, w) => {
    const g = (u) => (u > 0 ? (1 - Math.cos(w * u)) / (w * w) : 0);
    if (k === 'delta') return (t) => (t > 0 ? Math.sin(w * t) / w : 0);
    if (k === 'one') return g;
    if (k === 'pulse') return (t) => g(t - 1) - g(t - 5);
    return Math.abs(w - 1) < 1e-9 ? (t) => (t * Math.sin(t)) / 2 : (t) => (Math.cos(t) - Math.cos(w * t)) / (w * w - 1);
  };
  const cy = cycle(() => T, 1.2);
  function draw() {
    const t = REDUCED ? T : cy.now();
    const { ctx } = begin(d.c);
    const fc = C('function'), rin = F.ref('input'), rim = F.ref('impulse'), k = pick.value, w = wS.v, N = Math.round(nS.v);
    const h = (u) => (u > 0 ? Math.sin(w * u) / w : 0), X = exact(k, w), inp = IN[k];
    /* the slices: middles c[i], strengths wt[i] = f(c[i])Δτ */
    let c = [], wt = [], dt = 0;
    if (k === 'delta') { c = [0]; wt = [1]; } else {
      const [lo, hi] = inp.span; dt = (hi - lo) / N;
      for (let i = 0; i < N; i++) { const m = lo + dt * (i + 0.5); c.push(m); wt.push(inp.f(m) * dt); }
    }
    const S = (u) => c.reduce((acc, ci, i) => acc + wt[i] * h(u - ci), 0);
    /* the input strip */
    const as = axes(ctx, STRIP, [0, T], [-1.2, 1.2], { yl: 'input f(τ)', yc: rin, nx: 0, ny: 2, fy: (v) => fmt(v, 1) });
    line(ctx, as.box.l, as.Y(0), as.box.r, as.Y(0), guide(), 2);
    if (k === 'delta') {
      arrow(ctx, as.X(0) + 3, as.Y(0), as.X(0) + 3, as.Y(1), rin, 5);
      label(ctx, 'δ(t), weight 1', as.X(0) + 3, as.Y(1), { side: 'right', color: rin, size: 18 });
    } else {
      c.forEach((m, i) => {
        const on = m <= t, x1 = as.X(m - dt / 2), x2 = as.X(m + dt / 2), y = as.Y(inp.f(m)), y0 = as.Y(0);
        ctx.save(); ctx.fillStyle = alpha(rin, on ? 0.45 : 0.12); ctx.fillRect(x1 + 1, Math.min(y, y0), x2 - x1 - 2, Math.abs(y - y0)); ctx.restore();
        if (on) line(ctx, as.X(m), y0, as.X(m), y, rin, 3);
      });
      plot(ctx, as, inp.f, rin, { w: 3, x: [0, T] });
    }
    line(ctx, as.X(t), as.box.t, as.X(t), BOX.b, guide(), 2, [4, 8]);
    /* the launched copies, their sum, and the exact output */
    const ax = axes(ctx, BOX, [0, T], [-4, 4], { xl: 't', yl: 'x(t)', yc: fc, nx: 10, ny: 4, fy: (v) => fmt(v, 0) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    const live = c.map((m, i) => i).filter((i) => c[i] <= t);
    clip(ctx, ax.box, () => live.forEach((i) => {
      const fresh = t - c[i] < 0.6;
      if (t > c[i]) plot(ctx, ax, (u) => wt[i] * h(u - c[i]), alpha(rim, fresh ? 0.95 : 0.55), { w: fresh ? 3 : 2, x: [c[i], t] });
    }));
    dashed(ctx, () => plot(ctx, ax, X, alpha(fc, 0.7), { w: 3 }));
    if (t > 0) plot(ctx, ax, S, fc, { w: 5, x: [0, t] });
    const now = S(t), ex = X(t);
    const pt = pinned(ctx, ax.box, ax.X, ax.Y, t, now, fc);
    /* labels: a kind once each */
    const lastI = live.length ? live[live.length - 1] : -1, copyHits = [];
    if (k !== 'delta' && lastI >= 0 && t - c[lastI] > 0.5) {
      const u = Math.min(t, c[lastI] + Math.PI / (2 * w)), yv = wt[lastI] * h(u - c[lastI]);
      label(ctx, 'f(τ_i)Δτ h(t − τ_i)', ax.X(u), ax.Y(yv), { side: yv >= 0 ? 'below' : 'above', color: rim, size: 17, gap: 26 });
      copyHits.push({ x: ax.X(u), y: ax.Y(yv), r: 14, name: `the copy of h launched by the slice at τ = ${fmt(c[lastI], 2)}, of strength ${fmt(wt[lastI], 3)}` });
    }
    let err = 0;
    for (let i = 0; i <= 500; i++) { const u = (T * i) / 500; err = Math.max(err, Math.abs(S(u) - X(u))); }
    hits = [
      { x: pt.x, y: pt.y, r: 16, name: `the sum of the launched copies at t = ${fmt(t, 2)}: ${fmt(now, 3)}` },
      { x: ax.X(9), y: ax.Y(Math.max(-4, Math.min(4, X(9)))), r: 14, name: 'the exact output x = f ∗ h, dashed' },
      { x: as.X(t), y: as.Y(0), r: 14, name: `the present time t = ${fmt(t, 2)}` },
      ...copyHits,
    ];
    if (k === 'delta') {
      label(ctx, 'x = h(t)', ax.X(Math.PI / (2 * w) > 9 ? 9 : Math.PI / (2 * w)), ax.Y(1 / w), { side: 'above', color: fc, size: 18 });
      headline(ctx, `One impulse at $t = 0$: the output is the impulse response $\\kh(t) = \\sin(\\komegazero t)/\\komegazero$ itself, with $\\komegazero = ${n(w)}$.`);
      ro.set(`\\kx(t) = (\\kdelta * \\kh)(t) = \\kh(t) = \\frac{\\sin(\\komegazero t)}{\\komegazero} = \\frac{\\sin(${n(w)} \\cdot ${n(t)})}{${n(w)}} = ${n(ex, 3)}`, undefined, { form: 'delta' });
    } else {
      label(ctx, 'x = f ∗ h', ax.X(9.2), ax.Y(Math.max(-3.6, Math.min(3.6, X(9.2)))), { side: X(9.2) > S(9.2) ? 'above' : 'below', color: fc, size: 18 });
      headline(ctx, `$N = ${N}$ slices of width $\\Delta\\tau = ${n(dt)}$: the sum of their impulse responses stays within ${n(err, 3)} of $\\kx = \\kf * \\kh$.`);
      const strength = k === 'cos' ? '\\cos(\\tau_i)\\,\\Delta\\tau' : '\\Delta\\tau';
      ro.set(`\\kx(${n(t)}) \\approx \\sum_{\\tau_i \\le t} \\kf(\\tau_i)\\,\\Delta\\tau\\,\\kh(t - \\tau_i) = \\sum_{\\tau_i \\le t} ${strength}\\,\\frac{\\sin\\bigl(${n(w)}(t - \\tau_i)\\bigr)}{${n(w)}} = ${n(now, 3)},\\quad (\\kf * \\kh)(${n(t)}) = \\int_0^t \\kf(\\tau)\\kh(t-\\tau)\\,d\\tau = ${n(ex, 3)}`, undefined, { form: 'sum' });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* Figure 6.4: three-point bending. The beam of length L = 2 with EI = 1 on simple supports at x = 0 and
   x = 2, the force F pushing down at x = a (the book's F = 1, a = 1 on load, Example 6.4.3). Its deflection
   y(x) = −F(x − a)³u(x − a)/6 + C₁x + C₂x³/6 with C₂ = F(L − a)/L, C₁ = F(L − a)³/(6L) − F(L − a)L/6 (from
   y(L) = y″(L) = 0; C₁ = −1/4, C₂ = 1/2 in the book). Drawn at true scale, 500 units per unit of x in both
   directions: the deepest sag, 0.35 at F = 3 and a = 0.5 or 1.5, is 175 units. The deepest point is marked
   with its depth. Still: the beam answers its sliders. */
(function () {
  const d = sim('sim-beam', 470);
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.1, max: 1.9, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the point a where the force acts', detents: [1] });
  const fS = ctl(d.controls, { label: '\\kF', cls: '', key: 'F', min: 0, max: 3, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the force F' });
  const ro = readout(d);
  const L = 2, X0 = 200, SC = 500, BY = 170;
  const PX = (x) => X0 + x * SC, PY = (y) => BY - y * SC;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, a = aS.v, Fv = fS.v;
    const C2 = (Fv * (L - a)) / L, C1 = (Fv * (L - a) ** 3) / (6 * L) - (Fv * (L - a) * L) / 6;
    const y = (x) => (-Fv * Math.max(x - a, 0) ** 3) / 6 + C1 * x + (C2 * x ** 3) / 6;
    let xm = 0, ym = 0;
    for (let i = 0; i <= 2000; i++) { const x = (L * i) / 2000, v = y(x); if (v < ym) { ym = v; xm = x; } }
    /* the rest line, the supports and the scale */
    line(ctx, PX(0) - 40, BY, PX(L) + 40, BY, guide(), 2, [4, 8]);
    [0, L].forEach((x) => {
      const px = PX(x);
      ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(px, BY + 10); ctx.lineTo(px - 26, BY + 52); ctx.lineTo(px + 26, BY + 52); ctx.closePath(); ctx.stroke(); ctx.restore();
      line(ctx, px - 40, BY + 54, px + 40, BY + 54, ink, 3);
      for (let j = -36; j <= 28; j += 12) line(ctx, px + j, BY + 54, px + j + 10, BY + 66, PAL.muted, 2);
    });
    const pts = []; for (let i = 0; i <= 200; i++) { const x = (L * i) / 200; pts.push([PX(x), PY(y(x))]); }
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = alpha(ink, 0.18); ctx.lineWidth = 20; ctx.beginPath(); pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = fc; ctx.lineWidth = 5; ctx.beginPath(); pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.stroke(); ctx.restore();
    F.scale(ctx, PX, 0, 2, 1, BY + 110);
    [0.5, 1.5].forEach((v) => line(ctx, PX(v), BY + 104, PX(v), BY + 116, PAL.muted, 2));
    text(ctx, 'x', PX(L) + 70, BY + 138, ink, { size: 20, weight: 600 });
    /* the load */
    const ya = PY(y(a)), len = 30 + 40 * Fv;
    if (Fv > 0) {
      arrow(ctx, PX(a), ya - 14 - len, PX(a), ya - 12, ink, 5);
      label(ctx, `F = ${fmt(Fv, 2)}`, PX(a), ya - 14 - len, { side: 'above', size: 20, gap: 14 });
    }
    line(ctx, PX(a), BY + 98, PX(a), BY + 122, ink, 3);
    text(ctx, 'a', PX(a), BY + 84, ink, { size: 20, align: 'center', weight: 600 });
    /* the deepest point */
    hits = [
      { x: PX(0), y: BY + 34, r: 30, name: 'the simple support at x = 0, where y = y″ = 0' },
      { x: PX(L), y: BY + 34, r: 30, name: 'the simple support at x = L = 2, where y = y″ = 0' },
      { x: PX(a < 1 ? 1.5 : 0.5), y: PY(y(a < 1 ? 1.5 : 0.5)), r: 16, name: 'the beam, bent to its deflection y(x)' },
    ];
    if (Fv > 0) {
      dot(ctx, PX(xm), PY(ym), fc, true, 8);
      vbracket(ctx, PX(xm) + (xm < a ? -60 : 60), BY, PY(ym), PAL.muted, fmt(-ym, 3), xm < a ? -1 : 1, { size: 18 });
      hits.push({ x: PX(xm), y: PY(ym), r: 16, name: `the deepest point, x = ${fmt(xm, 2)}, y = ${fmt(ym, 3)}` },
        { x: PX(a), y: ya - 14 - len / 2, r: 18, name: `the point load F δ(x − a), F = ${fmt(Fv, 2)} at a = ${fmt(a, 2)}` });
      headline(ctx, `$\\kF = ${n(Fv)}$ at $x = ${n(a)}$: the beam sags most at $x = ${n(xm)}$, by ${n(-ym, 3)}.`);
    } else headline(ctx, 'No load, $\\kF = 0$: the beam rests straight on its supports.');
    ro.set(`\\ky(x) = -\\frac{\\kF}{6}(x-a)^3\\ku(x-a) + C_1 x + \\frac{C_2}{6} x^3,\\quad C_1 = ${n(C1, 3)},\\ C_2 = ${n(C2, 3)},\\quad \\ky(${n(a)}) = ${n(y(a), 3)}`);
  }
  still(d, draw);
})();
};
