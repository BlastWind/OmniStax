/* Figures for section 2.6 Forced oscillations and resonance. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, arrow, text, label, hbracket, headline, register, readout, fmt, hover, cycle, spring, fixed, cart, fist, pinned, drag, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const signed = (v, dec = 2) => (v < 0 ? '-' : '+') + n(Math.abs(v), dec);
const guide = () => alpha(PAL.ink, 0.35);
const dashed = (ctx, draw, d = [10, 10]) => { ctx.save(); ctx.setLineDash(d); draw(); ctx.restore(); };
const run = (d, T, rate, draw, hold = 1.2) => { const cy = cycle(() => T, hold); register(d.fig, { update: (dt) => cy.step(dt, () => rate), draw: () => draw(REDUCED ? T : cy.now()) }); return cy; };

/* The solution of m x″ + c x′ + k x = 0 with x(0) = x0, x′(0) = v0, by the three cases of c² − 4km. */
function homog(m, c, k, x0, v0) {
  const disc = c * c - 4 * m * k;
  if (Math.abs(disc) < 1e-9) {
    const p = c / (2 * m), c2 = v0 + p * x0;
    return { kind: 'critical', p, c1: x0, c2, f: (t) => (x0 + c2 * t) * Math.exp(-p * t) };
  }
  if (disc > 0) {
    const r = Math.sqrt(disc), r1 = (-c + r) / (2 * m), r2 = (-c - r) / (2 * m), c1 = (v0 - r2 * x0) / (r1 - r2), c2 = x0 - c1;
    return { kind: 'over', r1, r2, c1, c2, f: (t) => c1 * Math.exp(r1 * t) + c2 * Math.exp(r2 * t) };
  }
  const p = c / (2 * m), w1 = Math.sqrt(-disc) / (2 * m), c1 = x0, c2 = (v0 + p * x0) / w1;
  return { kind: 'under', p, w1, c1, c2, f: (t) => Math.exp(-p * t) * (c1 * Math.cos(w1 * t) + c2 * Math.sin(w1 * t)) };
}
/* x_c(t) written out from homog's constants */
function written(S) {
  if (S.kind === 'over') return `${n(S.c1)}e^{${n(S.r1)}t}${signed(S.c2)}e^{${n(S.r2)}t}`;
  if (S.kind === 'critical') return `(${n(S.c1)}${signed(S.c2)}t)e^{-${n(S.p)}t}`;
  return `e^{-${n(S.p)}t}\\bigl(${n(S.c1)}\\cos(${n(S.w1)}t)${signed(S.c2)}\\sin(${n(S.w1)}t)\\bigr)`;
}

/* The cart of the book's sketch on its floor, the spring to the wall, the hand that shakes it on top, and the
   force F(t) as an arrow at the right face: leaving it when F pulls (F > 0), arriving when F pushes. The rest
   position x = 0 is the dashed line at X0; the bracket under the floor is x. Returns the hover hits. */
function scene(ctx, o) {
  const { x, Fv, Fmax, X0, SC, FY, WX, reach, floorText, massText, springText, floorName } = o;
  const cw = 120, ch = 70, r = Math.max(6, Math.min(cw, ch) / 6), cy = FY - ch / 2 - 2 * r;
  const xd = Math.max(-reach, Math.min(reach, x)), cx = X0 + xd * SC, off = Math.abs(x) > reach;
  const fc = C('function'), ink = PAL.ink;
  fixed(ctx, WX - 24, FY - 150, 24, 150);
  line(ctx, WX, FY, 1300, FY, ink, 3);
  line(ctx, X0, FY - 150, X0, FY + 12, guide(), 2, [4, 8]);
  spring(ctx, WX, cy, cx - cw / 2, cy, 9, 16, ink, 3);
  cart(ctx, cx, cy, cw, ch, ink);
  text(ctx, 'm', cx, cy, ink, { size: 24, align: 'center', italic: true });
  fist(ctx, cx, cy - ch / 2, 0.3, -1, 0.75, ink);
  const L = (Fv / Fmax) * 150, fx = cx + cw / 2;
  if (Math.abs(L) > 10) {
    if (L > 0) arrow(ctx, fx, cy, fx + L, cy, fc, 5); else arrow(ctx, fx - L, cy, fx + 4, cy, fc, 5);
    label(ctx, 'F(t)', fx + Math.abs(L) + 6, cy, { side: 'right', color: fc, size: 20, weight: 600, gap: 4 });
  }
  if (Math.abs(cx - X0) > 12) hbracket(ctx, X0, cx, FY + 26, fc, `x = ${n(x)}${off ? ' (off the track)' : ''}`, { side: 'below', size: 18 });
  if (floorText) text(ctx, floorText, WX + 16, FY - 16, PAL.muted, { size: 17 });
  return [
    { x: cx, y: cy, r: 50, name: massText },
    { x: (WX + cx - cw / 2) / 2, y: cy, r: 22, name: springText },
    { x: cx + 10, y: cy - ch / 2 - 40, r: 34, name: 'the hand shaking the cart' },
    { x: fx + Math.abs(L) / 2, y: cy, r: 18, name: `the force F(t) = ${n(Fv)}, drawn pulling when positive and pushing when negative` },
    { x: X0 + 40 * Math.sign(cx - X0 || 1), y: FY + 24, r: 24, name: `the displacement x = ${n(x)} from the rest position` },
    { x: X0, y: FY - 120, r: 18, name: 'the rest position x = 0' },
    { x: (X0 + 1300) / 2, y: FY, r: 14, name: floorName },
  ];
}

/* Figures 2.5 + 2.6: the undamped cart shaken from rest, m x″ + k x = F₀ cos ωt, x(0) = x′(0) = 0. Off resonance
   x = F₀/(m(ω₀² − ω²))(cos ωt − cos ω₀t) inside the envelope ±2F₀/(m|ω₀² − ω²|)|sin((ω₀ − ω)t/2)|, one beat
   every 2π/|ω₀ − ω|; on ω = ω₀ it is x = F₀t/(2mω) sin ωt between the lines ±F₀t/(2mω). Two setups: Example 2.6.1
   (m = 0.5, k = 8, F₀ = 10, ω₀ = 4, ω = π on load, Figure 2.5) and Figure 2.6 (m = 1, k = π², F₀ = 2, ω₀ = π).
   Graph t 0 to 20 by x −10 to 10, the book's window for Figure 2.5 (Figure 2.6's ±6.4 sits inside); the scene is
   45 units per unit of x, and a cart past ±10 is drawn at the track's end with its true x. 20 s of t over 10 s. */
(function () {
  const d = sim('sim-beats', 690);
  const SET = { ex: { m: 0.5, k: 8, F0: 10, w0: 4 }, fig: { m: 1, k: Math.PI * Math.PI, F0: 2, w0: Math.PI } };
  const setup = choice(d.controls, { label: 'system', key: 'setup', value: 'ex', options: [
    { value: 'ex', label: 'Example 2.6.1' }, { value: 'fig', label: 'Figure 2.6' }], onInput: () => { cy.reset(); if (om.refresh) om.refresh(); } });
  const om = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0.5, max: 6, step: 0.01, value: Math.PI, unit: '', dec: 2, aria: 'the forcing frequency ω',
    specials: [{ at: () => SET[setup.value].w0, label: 'ω₀, resonance' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const BOX = { l: 120, r: 1300, t: 330, b: 630 }, X0 = 700, SC = 45, FY = 268, WX = 110;
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 20, 2, (t) => {
    const { ctx } = begin(d.c);
    /* the slider's grid holds 3.14 for the book's π, so a ω within half a step of ω₀ is resonance */
    const fc = C('function'), S = SET[setup.value], w0 = S.w0, res = Math.abs(om.v - w0) <= 0.0051, w = res ? w0 : om.v;
    const K = S.F0 / (S.m * (w0 * w0 - w * w)), G = S.F0 / (2 * S.m * w);
    const x = res ? (s) => G * s * Math.sin(w * s) : (s) => K * (Math.cos(w * s) - Math.cos(w0 * s));
    const env = res ? (s) => G * s : (s) => 2 * Math.abs(K) * Math.abs(Math.sin(((w0 - w) * s) / 2));
    const xt = x(t), Ft = S.F0 * Math.cos(w * t);
    hits = scene(ctx, { x: xt, Fv: Ft, Fmax: 10, X0, SC, FY, WX, reach: 10, massText: `the mass, m = ${n(S.m, 1)}`, springText: `the spring, k = ${n(S.k)}`, floorName: 'the floor, no damping (c = 0)' });
    const ax = axes(ctx, BOX, [0, 20], [-10, 10], { xl: 't', yl: 'x', yc: fc, nx: 4, ny: 4, fy: (v) => fmt(v, 0) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    dashed(ctx, () => { plot(ctx, ax, env, alpha(fc, 0.5), { w: 2 }); plot(ctx, ax, (s) => -env(s), alpha(fc, 0.5), { w: 2 }); });
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    const at = pinned(ctx, ax.box, ax.X, ax.Y, t, xt, fc);
    hits.push({ x: at.x, y: at.y, r: 16, name: `(t, x(t)) = (${n(t, 1)}, ${n(xt)})` });
    const Tb = res ? Infinity : (2 * Math.PI) / Math.abs(w0 - w), peak = env(res ? 20 : Math.min(20, Tb / 2));
    if (!res && Tb <= 20) {
      hbracket(ctx, ax.X(0), ax.X(Tb), ax.box.t + 24, PAL.ink, `one beat, 2π/|ω_0 − ω| = ${n(Tb)} s`, { side: 'below', size: 18 });
      hits.push({ x: ax.X(Tb / 2), y: ax.box.t + 24, r: 16, name: `one beat of the envelope, 2π/|ω₀ − ω| = ${n(Tb)} s` });
    }
    if (res) {
      const tl = Math.min(18, 8.5 / G);
      label(ctx, 'F_0 t/(2mω)', ax.X(tl), ax.Y(env(tl)), { side: 'above', color: fc, size: 18, weight: 600 });
      hits.push({ x: ax.X(tl), y: ax.Y(env(tl)), r: 16, name: `the line F₀t/(2mω) = ${n(G)}t that the peaks climb` });
    } else {
      hits.push({ x: ax.X(Tb / 4 > 20 ? 10 : Tb / 4), y: ax.Y(env(Tb / 4 > 20 ? 10 : Tb / 4)), r: 16, name: `the envelope 2F₀/(m|ω₀² − ω²|)|sin((ω₀ − ω)t/2)|, reaching ${n(2 * Math.abs(K))}` });
    }
    const beyond = peak > 10 ? ', past the edge of this graph' : '';
    if (res) headline(ctx, `$\\komega = \\komegazero = ${n(w0)}$: pure resonance, the peaks climbing the line $F_0 t/(2m\\komega) = ${n(G)}\\,t$ and reaching ${n(env(20))} at $t = 20$${beyond}.`);
    else headline(ctx, `$\\komega = ${n(w)}$ against $\\komegazero = ${n(w0)}$: one beat every $2\\pi/|\\komegazero - \\komega| = ${n(Tb)}$ s, the envelope reaching $2F_0/(m|\\komegazero^2 - \\komega^2|) = ${n(2 * Math.abs(K))}$${beyond}.`);
    if (res) ro.set(`\\kx = \\frac{F_0}{2m\\komega}\\,t\\sin(\\komega t) = ${n(G)}\\,t\\sin(${n(w)}\\,t)`, undefined, { form: 'res' });
    else ro.set(`\\kx = \\frac{F_0}{m(\\komegazero^2 - \\komega^2)}\\bigl(\\cos(\\komega t) - \\cos(\\komegazero t)\\bigr) = ${n(K)}\\bigl(\\cos(${n(w)}\\,t) - \\cos(${n(w0)}\\,t)\\bigr)`, undefined, { form: 'beat' });
  });
})();

/* Figure 2.7: the damped cart, x″ + 2px′ + ω₀²x = F₀/m cos ωt with the book's k = m = F₀ = 1 (so ω₀ = 1), c = 0.7,
   ω = 1.1, and the initial conditions on sliders (x(0) = 4.7, x′(0) = 0 on load, the book's top curve). The
   motion is x = x_tr + x_sp: x_sp = A cos ωt + B sin ωt = C cos(ωt − γ) with A = (ω₀² − ω²)/D, B = 2ωp/D,
   D = (2ωp)² + (ω₀² − ω²)², and x_tr the homogeneous solution through x(0) − x_sp(0), x′(0) − x_sp′(0). The force
   rides its own strip above the graph and the lag γ/ω between a crest of F and the next crest of x_sp is
   bracketed. Graph t 0 to 20 by x −6 to 6 (the book's window; c ≥ 0.2 keeps C ≤ 5.03); 20 s of t over 10 s. */
(function () {
  const d = sim('sim-transient', 770);
  const cS = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0.2, max: 2, step: 0.01, value: 0.7, unit: '', dec: 2, aria: 'the damping c', onInput: () => cy.reset() });
  const wS = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0.2, max: 3, step: 0.01, value: 1.1, unit: '', dec: 2, aria: 'the forcing frequency ω',
    specials: [{ at: 1, label: 'ω₀, where γ = π/2' }], onInput: () => cy.reset() });
  const x0S = ctl(d.controls, { label: '\\kx(0)', cls: 'function', key: 'x0', min: -5, max: 5, step: 0.1, value: 4.7, unit: '', dec: 1, aria: 'the initial position x(0)', onInput: () => cy.reset() });
  const v0S = ctl(d.controls, { label: '\\kxprime(0)', cls: 'derivative', key: 'v0', min: -5, max: 5, step: 0.1, value: 0, unit: '', dec: 1, aria: 'the initial velocity x′(0)', onInput: () => cy.reset() });
  const ro = readout(d);
  const STRIP = { l: 120, r: 1300, t: 282, b: 342 }, BOX = { l: 120, r: 1300, t: 392, b: 710 }, X0 = 700, SC = 45, FY = 236, WX = 110;
  let hits = [];
  hover(d.stage, () => hits);
  const cy = run(d, 20, 2, (t) => {
    const { ctx } = begin(d.c);
    const fc = C('function'), rtr = F.ref('xtr'), rsp = F.ref('xsp'), c = cS.v, w = wS.v, x0 = x0S.v, v0 = v0S.v, p = c / 2;
    const D = (2 * w * p) ** 2 + (1 - w * w) ** 2, A = (1 - w * w) / D, B = (2 * w * p) / D, Cm = 1 / Math.sqrt(D), g = Math.atan2(B, A);
    const xsp = (s) => A * Math.cos(w * s) + B * Math.sin(w * s), S = homog(1, c, 1, x0 - A, v0 - B * w), xtr = S.f, x = (s) => xtr(s) + xsp(s);
    const Fv = (s) => Math.cos(w * s), xt = x(t);
    hits = scene(ctx, { x: xt, Fv: Fv(t), Fmax: 1, X0, SC, FY, WX, reach: 6, floorText: `damping c = ${n(c)}`, massText: 'the mass, m = 1', springText: 'the spring, k = 1', floorName: `the floor, damping c = ${n(c)}` });
    /* the force on its own strip */
    const aF = axes(ctx, STRIP, [0, 20], [-1, 1], { yl: 'F(t)', yc: fc, nx: 0, ny: 2, fy: (v) => fmt(v, 0) });
    line(ctx, aF.box.l, aF.Y(0), aF.box.r, aF.Y(0), guide(), 2);
    plot(ctx, aF, Fv, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, aF, Fv, fc, { w: 4, x: [0, t] });
    dot(ctx, aF.X(t), aF.Y(Fv(t)), fc, true, 7);
    /* the motion: x_sp, x_tr and their sum */
    const ax = axes(ctx, BOX, [0, 20], [-6, 6], { xl: 't', yl: 'x', yc: fc, nx: 4, ny: 6, fy: (v) => fmt(v, 0) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    plot(ctx, ax, xsp, alpha(rsp, 0.35), { w: 3 });
    if (t > 0) plot(ctx, ax, xsp, rsp, { w: 4, x: [0, t] });
    dashed(ctx, () => { plot(ctx, ax, xtr, alpha(rtr, 0.35), { w: 3 }); if (t > 0) plot(ctx, ax, xtr, rtr, { w: 3, x: [0, t] }); }, [12, 9]);
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    /* the lag between a crest of the force and the next crest of x_sp, in the steady region */
    const lag = g / w, T = (2 * Math.PI) / w;
    let nF = Math.floor((20 - lag) / T);
    while (nF > 1 && nF * T > 12) nF--;
    const tF = nF * T, tX = tF + lag, yb = ax.box.t + 26;
    if (nF >= 1 && tX <= 20) {
      line(ctx, ax.X(tF), aF.Y(1), ax.X(tF), yb, guide(), 2, [4, 8]);
      line(ctx, ax.X(tX), yb, ax.X(tX), ax.Y(Cm), guide(), 2, [4, 8]);
      hbracket(ctx, ax.X(tF), ax.X(tX), yb, PAL.ink, `γ/ω = ${n(lag)} s`, { side: 'below', size: 18 });
      hits.push({ x: ax.X((tF + tX) / 2), y: yb, r: 16, name: `the lag γ/ω = ${n(lag)} s from a crest of F (t = ${n(tF)}) to the next crest of x_sp (t = ${n(tX)})` });
    }
    /* labels: x_sp at the right edge, x_tr where it is largest; the sum is named on hover */
    label(ctx, 'x_{sp}', ax.X(20) + 2, ax.Y(Math.max(-6, Math.min(6, xsp(20)))), { side: 'right', color: rsp, size: 20, weight: 600, gap: 6 });
    let tm = 0.6, best = 0;
    for (let s = 0.6; s <= 8; s += 0.1) { const v = Math.abs(xtr(s)); if (v > best && Math.abs(xtr(s)) < 5.6) { best = v; tm = s; } }
    label(ctx, 'x_{tr}', ax.X(tm), ax.Y(xtr(tm)), { side: xtr(tm) >= 0 ? 'above' : 'below', color: rtr, size: 20, weight: 600 });
    const at = pinned(ctx, ax.box, ax.X, ax.Y, t, xt, fc);
    hits.push({ x: at.x, y: at.y, r: 16, name: `x(${n(t, 1)}) = x_tr + x_sp = ${n(xtr(t))} ${signed(xsp(t))} = ${n(xt)}` },
      { x: ax.X(tm), y: ax.Y(xtr(tm)), r: 16, name: 'the transient solution x_tr, which carries the initial conditions and dies away' },
      { x: ax.X(19), y: ax.Y(xsp(19)), r: 16, name: `the steady periodic solution x_sp = ${n(Cm)} cos(${n(w)}t − ${n(g)})` },
      { x: aF.X(t), y: aF.Y(Fv(t)), r: 14, name: `the force F(t) = cos(${n(w)}t) = ${n(Fv(t))}` });
    headline(ctx, `$C = ${n(Cm)}$, $\\gamma = ${n(g)}$: $\\kxsp$ crests $\\gamma/\\komega = ${n(lag)}$ s after the force; at $t = ${n(t, 1)}$ the transient is down to $\\kxtr = ${n(xtr(t))}$.`);
    ro.set(`\\kx = \\kxtr + \\kxsp,\\quad \\kxtr = ${written(S)},\\quad \\kxsp = C\\cos(\\komega t - \\gamma) = ${n(Cm)}\\cos(${n(w)}\\,t - ${n(g)})`, undefined, { form: S.kind });
  });
})();

/* Figure 2.8: the amplitude C(ω) = F₀/(m√((2ωp)² + (ω₀² − ω²)²)) for k = m = F₀ = 1 (ω₀ = 1, p = c/2) under the
   damping c, the book's three curves (c = 0.4, 0.8, 1.6) faint behind the live one. The peak at ω = √(ω₀² − 2p²)
   slides left and sinks as c grows and is gone at c = √(2km) = √2, where the maximum moves to ω = 0 and
   C(0) = F₀/k = 1. The point rides the curve at the slider's ω. Graph ω 0 to 3 by C 0 to 3.5 (c ≥ 0.3 keeps the
   peak under 3.37). Still: the curve answers its sliders. */
(function () {
  const d = sim('sim-practical-resonance', 560);
  const cS = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0.3, max: 2.5, step: 0.01, value: 0.4, unit: '', dec: 2, aria: 'the damping c', detents: [0.4, 0.8, 1.6],
    specials: [{ at: Math.SQRT2, label: 'c² = 2km' }], onInput: () => { if (wS.refresh) wS.refresh(); } });
  const wS = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0, max: 3, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the forcing frequency ω',
    specials: [{ at: () => (cS.v < Math.SQRT2 ? Math.sqrt(1 - (cS.v * cS.v) / 2) : null), label: 'practical resonance' }, { at: 1, label: 'ω₀' }] });
  const Cof = (c) => (u) => 1 / Math.sqrt((u * c) ** 2 + (1 - u * u) ** 2);   /* 2ωp = ωc */
  const P = drag(d, { x: wS, y: (u) => Cof(cS.v)(u) });
  const ro = readout(d);
  const BOOK = [0.4, 0.8, 1.6], BOX = { l: 160, r: 1300, t: 100, b: 490 };
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fq = C('frequency'), ink = PAL.ink, c = cS.v, p = c / 2, w = wS.v, Cw = Cof(c);
    const has = c < Math.SQRT2, wr = has ? Math.sqrt(1 - 2 * p * p) : 0, Cr = Cw(wr), Cv = Cw(w);
    const ax = axes(ctx, BOX, [0, 3], [0, 3.5], { xl: 'ω', xc: fq, yl: 'C(ω)', nx: 6, ny: 7, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    hits = [];
    BOOK.forEach((b) => {
      plot(ctx, ax, Cof(b), alpha(ink, 0.28), { w: 3 });
      [0.5, 1.6].forEach((u) => hits.push({ x: ax.X(u), y: ax.Y(Cof(b)(u)), r: 13, name: `the book's curve for c = ${n(b, 1)}` }));
    });
    plot(ctx, ax, Cw, ink, { w: 5 });
    line(ctx, ax.X(1), ax.Y(0), ax.X(1), ax.box.t + 30, alpha(fq, 0.6), 2, [10, 10]);
    label(ctx, 'ω_0', ax.X(1), ax.box.t + 30, { side: 'right', color: fq, size: 20, weight: 600, gap: 6 });
    hits.push({ x: ax.X(1), y: ax.Y(3.2), r: 16, name: 'the natural frequency ω₀ = √(k/m) = 1' });
    if (has) {
      line(ctx, ax.X(wr), ax.Y(0), ax.X(wr), ax.Y(Cr), alpha(fq, 0.7), 2, [4, 8]);
      dot(ctx, ax.X(wr), ax.Y(Cr), ink, false, 10);
      label(ctx, `C = ${n(Cr)}`, ax.X(wr), ax.Y(Cr) - 8, { side: 'above', color: ink, size: 18, weight: 600 });
      label(ctx, `ω = ${n(wr)}`, ax.X(wr) - 4, ax.Y(0.18), { side: 'left', color: fq, size: 18, weight: 600, gap: 8 });
      hits.push({ x: ax.X(wr), y: ax.Y(Cr), r: 18, name: `practical resonance: ω = √(ω₀² − 2p²) = ${n(wr)}, C = ${n(Cr)}` });
    } else {
      dot(ctx, ax.X(0), ax.Y(1), ink, false, 10);
      hits.push({ x: ax.X(0), y: ax.Y(1), r: 18, name: 'no practical resonance: C is largest at ω = 0, C(0) = F₀/k = 1' });
    }
    const at = P.draw(ctx, ax, ink);
    if (at) hits.push({ x: at.x, y: at.y, r: 18, name: `C(${n(w)}) = ${n(Cv)}` });
    const gone = `at $c = \\sqrt{2km} = ${n(Math.SQRT2)}$ the peak reaches $\\komega = 0$ and is gone`;
    if (has) headline(ctx, `$c = ${n(c)}$: practical resonance at $\\komega = \\sqrt{\\komegazero^2 - 2p^2} = ${n(wr)}$, with amplitude $C = ${n(Cr)}$; ${gone}.`);
    else headline(ctx, `$c = ${n(c)}$: $\\komegazero^2 - 2p^2 = ${n(1 - 2 * p * p)} \\le 0$, so there is no practical resonance; $C$ is largest at $\\komega = 0$, where $C(0) = F_0/k = 1$.`);
    ro.set(`C(\\komega) = \\frac{F_0}{m\\sqrt{(2\\komega p)^2 + (\\komegazero^2 - \\komega^2)^2}} = \\frac{1}{\\sqrt{(2 \\cdot ${n(w)} \\cdot ${n(p)})^2 + (1 - ${n(w)}^2)^2}} = ${n(Cv)}`);
  }
  still(d, draw);
})();
};
