/* Figures for section 5.3 Steady periodic solutions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.3'] = function (root, F) {
const { C, PAL, alpha, ctl, begin, axes, plot, dot, line, arrow, text, label, headline, register, readout, fmt, hover, cycle, pinned, drag, guitar, silhouette, faded, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
/* a polyline of canvas points */
function poly(ctx, pts, color, w, dash) {
  if (pts.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
}
/* the multiples nπa/L (L = 1) of the base frequency that lie in [lo, hi], as text: "3.14, 6.28, 9.42" */
const ladder = (a, lo, hi) => { const out = []; for (let k = 1; k * Math.PI * a <= hi + 1e-9; k++) if (k * Math.PI * a >= lo) out.push(n(k * Math.PI * a)); return out.join(', '); };

/* The forced string y_tt = a² y_xx + F₀ cos ωt, y = 0 at x = 0 and x = L, at rest at t = 0, with F₀ = L = 1.
   Off resonance (sin(ωL/a) ≠ 0) it is the book's y = y_c + y_p: y_p = X(x) cos ωt with the boxed X, and y_c the
   free string started from f = −X, g = 0, by d'Alembert y_c = (F(x − at) + F(x + at))/2 with F the odd 2L-periodic
   extension of −X, which is (5.10) at the book's numbers. On an even multiple of πa/L the book's B = 0 is used. On
   an odd multiple there is no y_p, and y is the modal series Σ over odd m of (4F₀/(mπ)) sin(mπx/L) q_m(t) with
   q_m = (cos ωt − cos ω_m t)/(ω_m² − ω²), ω_m = mπa/L, whose resonant term is the limit t sin(ω_m t)/(2ω_m); the series
   equals the d'Alembert form to 10⁻⁷ off resonance (check.py in the task's scratch). */
const FS = (() => {
  const TOL = 1e-6;
  /* which multiple of πa/L ω sits on, if any */
  const special = (w, a) => { const k = Math.round(w / (Math.PI * a)); return k >= 1 && Math.abs(w - k * Math.PI * a) < TOL ? k : 0; };
  function make(w, a) {
    const k = special(w, a), th = w / a;
    const res = k % 2 === 1;
    const Bc = k ? 0 : (Math.cos(th) - 1) / Math.sin(th);      /* the bracket's (cos(ωL/a) − 1)/sin(ωL/a); 0 on an even multiple */
    const A = 1 / (w * w);
    const X = (x) => A * (Math.cos(w * x / a) - Bc * Math.sin(w * x / a) - 1);
    const odd = (s) => { const r = ((s % 2) + 2) % 2, u = r > 1 ? r - 2 : r; return u >= 0 ? -X(u) : X(-u); };   /* F, the odd 2-periodic extension of −X */
    const yp = (x, t) => X(x) * Math.cos(w * t);
    const yc = (x, t) => (odd(x - a * t) + odd(x + a * t)) / 2;
    const modal = (x, t) => {
      let s = 0;
      for (let m = 1; m <= 201; m += 2) {
        const wm = m * Math.PI * a;
        const q = m === k ? (t * Math.sin(wm * t)) / (2 * wm) : (Math.cos(w * t) - Math.cos(wm * t)) / (wm * wm - w * w);
        s += (4 / (m * Math.PI)) * Math.sin(m * Math.PI * x) * q;
      }
      return s;
    };
    const y = res ? modal : (x, t) => yc(x, t) + yp(x, t);
    /* the midpoint's traces, sampled once per state */
    const N = 500, ts = Array.from({ length: N + 1 }, (_, i) => (5 * i) / N);
    const ym = ts.map((t) => y(0.5, t)), ypm = res ? null : ts.map((t) => yp(0.5, t)), ycm = res ? null : ts.map((t) => yc(0.5, t));
    const at = (arr) => (t) => { const u = Math.max(0, Math.min(N, (t / 5) * N)), i = Math.min(N - 1, Math.floor(u)), f = u - i; return arr[i] * (1 - f) + arr[i + 1] * f; };
    let iMax = 0, iMin = 0, iAbs = 0;
    ym.forEach((v, i) => { if (v > ym[iMax]) iMax = i; if (v < ym[iMin]) iMin = i; if (Math.abs(v) > Math.abs(ym[iAbs])) iAbs = i; });
    const B = k ? 0 : -(Math.cos(th) - 1) / (w * w * Math.sin(th));   /* the book's (5.9) with F₀ = L = 1 */
    return { k, res, X, yp, yc, y, A, B, Bc, mid: at(ym), midP: ypm && at(ypm), midC: ycm && at(ycm), max: [ts[iMax], ym[iMax]], min: [ts[iMin], ym[iMin]], peak: [ts[iAbs], ym[iAbs]] };
  }
  return { make, special };
})();

/* Figure 5.3 + 5.4: the string on its guitar (the sketch's bridge at x = 0 on the left, the nut at x = L on the right),
   moving from rest under the uniform force F₀ cos ωt, drawn as short arrows along the string that grow and turn with the
   cosine; below, the midpoint's y(L/2, t) over Figure 5.4's 0 ≤ t ≤ 5 with its parts y_p and y_c in their referent
   colours. ω on a slider (0.2 to 12) with dashed circles at the multiples nπa/L, a on a slider (0.5 to 2). The scene's
   string is 800 units long and its vertical scale is 260 units per unit of y (the graph's ±0.5 is the scene's ±130), a
   string past ±0.58 clipped at the band's edge; the graph is t 0 to 5 by y −0.5 to 0.5 (the example's swing is 0.24),
   a midpoint past the edge pinned. 5 s of t over 5 s. */
(function () {
  const d = sim('sim-forced-string', 800);
  const reset = () => { cy.reset(); };
  const om = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0.2, max: 12, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the forcing frequency ω',
    specials: [1, 2, 3, 4, 5, 6, 7].map((k) => ({ at: () => k * Math.PI * aS.v, label: k % 2 ? `${k}πa/L: resonance` : `${k}πa/L: no resonance` })), onInput: reset });
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 2, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the wave speed a', detents: [1], onInput: () => { om.refresh(); reset(); } });
  om.refresh();   /* the circles on ω read a, made just now */
  const ro = readout(d);
  const XB = 330, XN = 1130, SY = 282, SC = 260, BAND = { l: 120, r: 1290, t: SY - 150, b: SY + 150 };
  const GS = (XN - XB) / 750, GX = XN + 84 * GS;          /* the guitar, mirrored so its bridge sits at x = 0 */
  const BOX = { l: 160, r: 1300, t: 520, b: 715 };
  const SX = (x) => XB + x * (XN - XB), SYv = (y) => SY - y * SC;
  let S = null, key = '';
  const state = () => { const k = `${om.v}|${aS.v}`; if (k !== key) { key = k; S = FS.make(om.v, aS.v); } return S; };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => 5, 1.2);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), rp = F.ref('yp'), rc = F.ref('yc'), ink = PAL.ink, w = om.v, a = aS.v, t = REDUCED ? 5 : cy.now(), St = state();
    hits = [];
    /* the guitar, faint, and the string's frame: the rest line, y at the bridge, 0 and L */
    faded(ctx, 0.3, [0, 0], () => { ctx.save(); ctx.translate(GX, SY); ctx.scale(-1, 1); guitar(ctx, 0, 0, GS, ink); ctx.restore(); });
    line(ctx, XB, SY, XN, SY, guide(), 2, [4, 8]);
    line(ctx, XB, SY - 140, XB, SY + 140, PAL.muted, 2);
    [0.5, -0.5].forEach((v) => { line(ctx, XB - 8, SYv(v), XB, SYv(v), PAL.muted, 2); text(ctx, fmt(v, 1), XB - 14, SYv(v), PAL.muted, { size: 17, align: 'right' }); });
    text(ctx, 'y', XB - 14, SY - 140, fc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'x = 0', XB, SY + 168, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'x = L', XN, SY + 168, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: XB, y: SY + 120, r: 22, name: 'the bridge, x = 0, where the string is fixed' }, { x: XN, y: SY + 30, r: 22, name: 'the nut, x = L, where the string is fixed' });
    /* the string y(x, t) at this t */
    const pts = Array.from({ length: 161 }, (_, i) => { const x = i / 160; return [SX(x), SYv(St.y(x, t))]; });
    clip(ctx, BAND, () => poly(ctx, pts, fc, 5));
    dot(ctx, XB, SY, ink, true, 7); dot(ctx, XN, SY, ink, true, 7);
    hits.push({ x: SX(0.3), y: Math.max(BAND.t, Math.min(BAND.b, SYv(St.y(0.3, t)))), r: 20, name: `the string y(x, ${n(t)})` });
    /* the force per unit mass F₀ cos ωt, the same at every point of the string */
    const Fv = Math.cos(w * t), Lf = 56 * Fv;
    if (Math.abs(Lf) > 8) {
      for (let i = 1; i <= 9; i++) {
        const x = i / 10, sx = SX(x), sy = Math.max(BAND.t + 60, Math.min(BAND.b - 60, SYv(St.y(x, t))));
        arrow(ctx, sx, sy, sx, sy - Lf, alpha(fc, 0.55), 3);
      }
      hits.push({ x: SX(0.1), y: Math.max(BAND.t + 60, Math.min(BAND.b - 60, SYv(St.y(0.1, t)))) - Lf / 2, r: 18, name: `the force per unit mass F₀ cos(ωt) = ${n(Fv)}, the same all along the string` });
    }
    /* the midpoint, shared with the graph below */
    const ymid = St.y(0.5, t), my = SYv(ymid);
    if (my >= BAND.t && my <= BAND.b) { dot(ctx, SX(0.5), my, fc, true, 9); hits.push({ x: SX(0.5), y: my, r: 16, name: `the midpoint, y(L/2, ${n(t)}) = ${n(ymid, 3)}` }); }
    /* the graph: y(L/2, t) and its two parts */
    const ax = axes(ctx, BOX, [0, 5], [-0.5, 0.5], { xl: 't', yl: 'y(L/2, t)', yc: fc, nx: 5, ny: 4, fy: (v) => fmt(v, 2) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    if (!St.res) {
      plot(ctx, ax, St.midP, alpha(rp, 0.35), { w: 3 });
      if (t > 0) plot(ctx, ax, St.midP, rp, { w: 3, x: [0, t] });
      ctx.save(); ctx.setLineDash([12, 9]);
      plot(ctx, ax, St.midC, alpha(rc, 0.35), { w: 3 });
      if (t > 0) plot(ctx, ax, St.midC, rc, { w: 3, x: [0, t] });
      ctx.restore();
      const vp = St.midP(5), vc = St.midC(5), clampY = (v) => Math.max(-0.48, Math.min(0.48, v));
      let yp5 = ax.Y(clampY(vp)), yc5 = ax.Y(clampY(vc));
      if (Math.abs(yp5 - yc5) < 26) { const m = (yp5 + yc5) / 2, s = vp >= vc ? -1 : 1; yp5 = m + 13 * s; yc5 = m - 13 * s; }
      text(ctx, 'y_p', ax.box.r + 10, yp5, rp, { size: 20, weight: 600 });
      text(ctx, 'y_c', ax.box.r + 10, yc5, rc, { size: 20, weight: 600 });
      hits.push({ x: ax.X(4.6), y: ax.Y(clampY(St.midP(4.6))), r: 14, name: `the particular solution y_p(L/2, t) = X(L/2) cos(ωt), X(L/2) = ${n(St.X(0.5), 3)}` },
        { x: ax.X(4.2), y: ax.Y(clampY(St.midC(4.2))), r: 14, name: 'the free vibration y_c(L/2, t), started from f = −y_p(x, 0) and g = 0' });
    }
    plot(ctx, ax, St.mid, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, St.mid, fc, { w: 5, x: [0, t] });
    const at = pinned(ctx, ax.box, ax.X, ax.Y, t, ymid, fc);
    hits.push({ x: at.x, y: at.y, r: 16, name: St.res ? `y(L/2, ${n(t)}) = ${n(ymid, 3)}` : `y(L/2, ${n(t)}) = y_c + y_p = ${n(St.yc(0.5, t), 3)} + ${n(St.yp(0.5, t), 3)} = ${n(ymid, 3)}` });
    /* headline and readout */
    const freqs = ladder(a, 0, 12), wn = St.k ? `${St.k === 1 ? '' : St.k}\\pi a/L` : '';
    const swing = (v) => `${n(v, 2)}${Math.abs(v) > 0.5 ? ' (off the graph)' : ''}`;
    if (St.res) headline(ctx, `$\\komega = ${wn} = ${n(w)}$, an odd multiple: resonance. There is no $\\kyp$, and the midpoint's swing grows with $t$, reaching ${swing(St.peak[1])} at $t = ${n(St.peak[0])}$.`);
    else if (St.k) headline(ctx, `$\\komega = ${wn} = ${n(w)}$, an even multiple: $B = 0$ and $\\kyp$ is bounded, no resonance; the midpoint stays between ${swing(St.min[1])} and ${swing(St.max[1])}.`);
    else headline(ctx, `$\\komega = ${n(w)}$, natural frequencies $n\\pi a/L$ = ${freqs || 'none below 12'}: no resonance; the midpoint rises to ${swing(St.max[1])} at $t = ${n(St.max[0])}$ and dips to ${swing(St.min[1])} at $t = ${n(St.min[0])}$.`);
    const eq = `\\kytt = ${n(a * a)}\\,\\kyxx + \\cos(${n(w)}\\,t)`;
    const c = Math.cos(w / a), s = Math.sin(w / a);
    if (St.res) ro.set(`${eq},\\quad \\cos(\\tfrac{\\komega L}{a}) - 1 = -2,\\ \\ \\sin(\\tfrac{\\komega L}{a}) = 0:\\ \\text{no } B`, undefined, { form: 'odd' });
    else if (St.k) ro.set(`${eq},\\quad \\cos(\\tfrac{\\komega L}{a}) - 1 = 0,\\ \\ \\sin(\\tfrac{\\komega L}{a}) = 0:\\ B = 0`, undefined, { form: 'even' });
    else ro.set(`${eq},\\quad B = \\frac{-F_0\\left(\\cos(\\frac{\\komega L}{a}) - 1\\right)}{\\komega^2 \\sin(\\frac{\\komega L}{a})} = \\frac{-(${n(c, 4)} - 1)}{${n(w * w, 4)} \\cdot (${n(s, 4)})} = ${n(St.B, 4)}`, undefined, { form: 'gen' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* Sim: the coefficient B(ω) = −F₀(cos(ωL/a) − 1)/(ω² sin(ωL/a)) of (5.9) with F₀ = L = 1, which is tan(ωL/(2a))/ω²: poles
   at the odd multiples of πa/L (dashed), a removable point at the even ones where numerator and denominator both
   vanish and the limit is 0 (an open circle). A probe on the curve at the slider's ω, with dashed circles on the
   multiples; a on a slider moves the ladder. ω 0 to 13 by B −1 to 1 (B(1) = 0.546 at the book's a = 1; the curve
   climbs past the top as ω → 0, where B ~ L/(2aω)). Still: the curve answers its sliders. */
(function () {
  const d = sim('sim-string-resonance', 600);
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 2, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the wave speed a', detents: [1], onInput: () => wS.refresh() });
  const wS = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0.3, max: 13, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the forcing frequency ω',
    specials: [1, 2, 3, 4, 5, 6, 7, 8].map((k) => ({ at: () => k * Math.PI * aS.v, label: k % 2 ? `${k}πa/L: B blows up` : `${k}πa/L: B = 0` })) });
  const Bof = (a) => (u) => -(Math.cos(u / a) - 1) / (u * u * Math.sin(u / a));
  const P = drag(d, { x: wS, y: (u) => { const k = FS.special(u, aS.v); return k ? (k % 2 ? NaN : 0) : Bof(aS.v)(u); } });
  const ro = readout(d);
  const BOX = { l: 170, r: 1300, t: 120, b: 500 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), fq = C('frequency'), ink = PAL.ink, a = aS.v, w = wS.v, B = Bof(a), k = FS.special(w, a);
    const odd = [], even = [];
    for (let m = 1; m * Math.PI * a <= 13; m++) (m % 2 ? odd : even).push(m * Math.PI * a);
    const ax = axes(ctx, BOX, [0, 13], [-1, 1], { xl: 'ω', xc: fq, yl: 'B', nx: 13, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    hits = [];
    plot(ctx, ax, B, fc, { w: 5, x: [0.3, 13], poles: odd, holes: even.map((v) => [v, 0]) });
    /* the natural frequencies on the axis */
    [...odd, ...even].sort((p, q) => p - q).forEach((v) => {
      const m = Math.round(v / (Math.PI * a));
      line(ctx, ax.X(v), ax.Y(-1), ax.X(v), ax.Y(-1) - 14, fq, 4);
      label(ctx, `${m === 1 ? '' : m}πa/L`, ax.X(v), ax.Y(-1) - 16, { side: 'above', color: fq, size: 17, weight: 600, gap: 4 });
      hits.push(m % 2
        ? { x: ax.X(v), y: ax.Y(0.6), r: 16, name: `ω = ${m}πa/L = ${n(v)}: cos(ωL/a) − 1 = −2 and sin(ωL/a) = 0, so B blows up (resonance)` }
        : { x: ax.X(v), y: ax.Y(0), r: 16, name: `ω = ${m}πa/L = ${n(v)}: cos(ωL/a) − 1 = 0 and sin(ωL/a) = 0; B → 0, and B = 0 gives the bounded solution` });
    });
    const at = P.draw(ctx, ax, ink);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: k ? `ω = ${n(w)}` : `B(${n(w)}) = ${n(B(w), 4)}` });
    const list = (arr) => arr.map((v) => n(v)).join(', ');
    if (k % 2) headline(ctx, `$\\komega = ${k === 1 ? '' : k}\\pi a/L = ${n(w)}$: the numerator is $2F_0$ and the denominator is 0, so $B$ blows up; the poles are the odd multiples ${list(odd)}.`);
    else if (k) headline(ctx, `$\\komega = ${k}\\pi a/L = ${n(w)}$: numerator and denominator both vanish, and $B$ passes through 0 here, as at every even multiple (${list(even)}).`);
    else headline(ctx, `$\\komega = ${n(w)}$: $B = ${n(B(w), 3)}$. $B$ blows up only at the odd multiples of $\\pi a/L$${odd.length ? ` (${list(odd)})` : ''}${even.length ? ` and passes through 0 at the even ones (${list(even)})` : ''}.`);
    const c = Math.cos(w / a), s = Math.sin(w / a);
    const f = 'B = \\frac{-F_0\\left(\\cos(\\frac{\\komega L}{a}) - 1\\right)}{\\komega^2 \\sin(\\frac{\\komega L}{a})}';
    if (k % 2) ro.set(`${f},\\quad \\cos(\\tfrac{\\komega L}{a}) - 1 = -2,\\ \\ \\sin(\\tfrac{\\komega L}{a}) = 0`, undefined, { form: 'odd' });
    else if (k) ro.set(`${f},\\quad \\cos(\\tfrac{\\komega L}{a}) - 1 = 0,\\ \\ \\sin(\\tfrac{\\komega L}{a}) = 0:\\ B = 0`, undefined, { form: 'even' });
    else ro.set(`${f} = \\frac{-(${n(c, 4)} - 1)}{${n(w * w, 4)} \\cdot (${n(s, 4)})} = ${n(B(w), 4)}`, undefined, { form: 'gen' });
  }
  still(d, draw);
})();

/* Figure 5.5: the ground as a column from the surface down to 1500 cm, the sketch's person standing on it, coloured by
   u(x, t) = A₀e^(−cx) cos(ωt − cx), c = √(ω/2k), on one temperature scale (the fact: cold blue through pale to hot red,
   ±A₀ = ±15 °C, with its legend); beside it, sharing the depth axis, the profile u against depth with the envelope
   ±A₀e^(−cx) dashed, the reversal depth π/c (the dashed rule) and a probe depth on a slider with u there. The year
   runs from midsummer (t = 0) over 6 s; ω = 2π/31,557,341 s⁻¹, the book's. k on a slider (0.001 to 0.01 cm²/s,
   detents at the book's 0.005 and Exercise 5.3.102's 0.01), the probe depth x (0 to 1500 cm, the book's 700 the
   default, a dashed circle at the reversal depth). Depth 0 to 1500 cm at 0.34 units per cm; u −15 to 15 °C. */
(function () {
  const d = sim('sim-underground-temperature', 810);
  const OMEGA = (2 * Math.PI) / 31557341, A0 = 15, DMAX = 1500;
  const cOf = (k) => Math.sqrt(OMEGA / (2 * k));
  const kS = ctl(d.controls, { label: 'k', cls: '', key: 'k', min: 0.001, max: 0.01, step: 0.0005, value: 0.005, unit: 'cm²/s', dec: 4, aria: 'the diffusivity k of the soil', detents: [0.005, 0.01], onInput: () => xS.refresh() });
  const xS = ctl(d.controls, { label: 'x', cls: '', key: 'depth', min: 0, max: DMAX, step: 10, value: 700, unit: 'cm', dec: 0, aria: 'the depth x of the probe',
    specials: [{ at: () => Math.PI / cOf(kS.v), label: 'the seasons reversed' }] });
  const ro = readout(d);
  const Y0 = 210, YB = 720, CL = 130, CR = 330, BOX = { l: 560, r: 1300, t: Y0, b: YB };
  const YD = (x) => Y0 + (x / DMAX) * (YB - Y0);
  /* the temperature scale, a fact: blue for cold, pale at the mean, red for hot (RdYlBu stops) */
  const STOPS = [[-1, [49, 54, 149]], [-0.5, [116, 173, 209]], [0, [255, 255, 191]], [0.5, [244, 109, 67]], [1, [165, 0, 38]]];
  const temp = (v) => {
    const s = Math.max(-1, Math.min(1, v / A0));
    let i = 0; while (i < STOPS.length - 2 && s > STOPS[i + 1][0]) i++;
    const [s0, c0] = STOPS[i], [s1, c1] = STOPS[i + 1], f = (s - s0) / (s1 - s0);
    const c = c0.map((q, j) => Math.round(q + (c1[j] - q) * f));
    return F.fact(`rgb(${c[0]}, ${c[1]}, ${c[2]})`);
  };
  let hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => 1, 1.2);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), fq = C('frequency'), ink = PAL.ink, k = kS.v, c = cOf(k), xp = xS.v, t = REDUCED ? 1 : cy.now();
    const u = (x) => A0 * Math.exp(-c * x) * Math.cos(2 * Math.PI * t - c * x);
    const env = (x) => A0 * Math.exp(-c * x), xr = Math.PI / c;
    hits = [];
    /* the column, slice by slice, and the surface with the person on it */
    for (let y = Y0; y < YB; y += 4) { const x = ((y + 2 - Y0) / (YB - Y0)) * DMAX; ctx.fillStyle = temp(u(x)); ctx.fillRect(CL, y, CR - CL, 4.6); }
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(CL, Y0, CR - CL, YB - Y0); ctx.restore();
    line(ctx, 90, Y0, 370, Y0, ink, 3);
    silhouette(ctx, { x: (CL + CR) / 2, y: Y0 - 2, s: 0.62, pose: 'stand', color: ink });
    hits.push({ x: (CL + CR) / 2, y: Y0 - 50, r: 34, name: 'a person standing on the surface, x = 0' },
      { x: (CL + CR) / 2, y: (Y0 + YB) / 2, r: 60, name: `the ground, coloured by its temperature u(x, ${n(t)} year)` });
    /* the legend: the scale from −A₀ to A₀ */
    const LX = 380, LT = 280, LBt = 580;
    for (let y = LT; y < LBt; y += 3) { ctx.fillStyle = temp(A0 - ((y + 1.5 - LT) / (LBt - LT)) * 2 * A0); ctx.fillRect(LX, y, 22, 3.6); }
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 1.5; ctx.strokeRect(LX, LT, 22, LBt - LT); ctx.restore();
    [[15, LT], [0, (LT + LBt) / 2], [-15, LBt]].forEach(([v, y]) => { line(ctx, LX + 22, y, LX + 30, y, PAL.muted, 2); text(ctx, `${fmt(v, 0)} °C`, LX + 34, y, PAL.muted, { size: 17 }); });
    text(ctx, 'u', LX + 11, LT - 22, fc, { size: 20, weight: 600, align: 'center' });
    hits.push({ x: LX + 11, y: (LT + LBt) / 2, r: 30, name: 'the temperature scale, from −15 °C (blue) through the mean 0 °C to 15 °C (red)' });
    /* the profile beside it, depth down the page as in the column */
    const ax = axes(ctx, BOX, [-15, 15], [-DMAX, 0], { xl: 'u (°C)', xc: fc, yl: 'depth x (cm)', nx: 6, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(-v, 0) });
    line(ctx, ax.X(0), ax.box.t, ax.X(0), ax.box.b, guide(), 2);
    const prof = (f) => Array.from({ length: 301 }, (_, i) => { const x = (DMAX * i) / 300; return [ax.X(f(x)), ax.Y(-x)]; });
    poly(ctx, prof(env), alpha(fc, 0.55), 2.5, [10, 10]);
    poly(ctx, prof((x) => -env(x)), alpha(fc, 0.55), 2.5, [10, 10]);
    poly(ctx, prof(u), fc, 5);
    hits.push({ x: ax.X(env(120)), y: ax.Y(-120), r: 14, name: `the envelope ±A₀e^(−x√(ω/2k)), the swing at each depth` },
      { x: ax.X(u(60)), y: ax.Y(-60), r: 16, name: `the temperature profile u(x, ${n(t)} year)` });
    /* the reversal depth across the column and the graph */
    if (xr <= DMAX) {
      line(ctx, CL, YD(xr), ax.box.r, YD(xr), alpha(ink, 0.6), 2, [10, 10]);
      text(ctx, `seasons reversed, x = ${fmt(xr, 0)} cm`, ax.box.r - 6, YD(xr) - 14, ink, { size: 17, align: 'right', bg: PAL.panel });
      hits.push({ x: (ax.box.l + ax.box.r) / 2, y: YD(xr), r: 14, name: `x√(ω/2k) = π at x = ${fmt(xr, 0)} cm: summer is the coldest there, and the swing is ±${n(env(xr))} °C` });
    }
    /* the probe */
    const up = u(xp);
    line(ctx, CL - 10, YD(xp), ax.box.l, YD(xp), alpha(ink, 0.5), 2, [4, 8]);
    dot(ctx, ax.X(up), YD(xp), fc, true, 9);
    label(ctx, `u = ${n(up)} °C`, ax.X(up), YD(xp), { side: up > 4 ? 'left' : 'right', color: fc, size: 18, weight: 600 });
    hits.push({ x: ax.X(up), y: YD(xp), r: 16, name: `at x = ${fmt(xp, 0)} cm: u = ${n(up)} °C, within ±${n(env(xp))} °C` });
    text(ctx, `t = ${n(t)} year`, ax.box.l + 12, ax.box.b - 18, PAL.muted, { size: 17 });
    /* headline and readout */
    const days = (x) => fmt((c * x * 365.25) / (2 * Math.PI), 0);
    const rev = xr <= DMAX ? `the seasons reverse at $x = ${fmt(xr, 0)}$ cm, where the swing is ±${n(env(xr))} °C` : `the seasons reverse at $x = ${fmt(xr, 0)}$ cm, below this column`;
    headline(ctx, `$k = ${fmt(k, 4)}$ cm²/s: ${rev}; at $x = ${fmt(xp, 0)}$ cm the swing is ±${n(env(xp))} °C, ${days(xp)} days behind the surface.`);
    ro.set(`\\ku(x,t) = A_0 e^{-\\sqrt{\\komega/2k}\\,x}\\cos\\bigl(\\komega t - \\sqrt{\\komega/2k}\\,x\\bigr),\\quad \\ku(${fmt(xp, 0)}, t) = 15\\,e^{-${n(c * xp, 3)}}\\cos(\\komega t - ${n(c * xp, 3)}) = ${n(env(xp), 3)}\\cos(\\komega t - ${n(c * xp, 3)})`,
      `$\\komega = 2\\pi/\\text{year} = 1.991 \\times 10^{-7}$ s⁻¹ and $\\sqrt{\\komega/2k} = ${fmt(c * 1000, 4)} \\times 10^{-3}$ cm⁻¹; the delay $x\\sqrt{\\komega/2k}$ is in radians.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 6), draw });
})();
};
