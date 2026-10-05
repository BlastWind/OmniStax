/* Figures for section 8.5 Inelastic Collisions in One Dimension. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, topline, strip, axes, nice, curve, spring, pinned, choice } = F;
const sim = (id, H) => F.sim(root, id, H);
/* the hollow companion marker: an ordinary hollow dot while it is inside the box, and the
   library's pinned marker once the fixed range can no longer hold it */
function hollowOrPinned(ctx, box, X, Y, xv, yv, color, label) {
  const py = Y(yv);
  if (py >= box.t && py <= box.b) dot(ctx, X(xv), py, color, false, 10);
  else pinned(ctx, box, X, Y, xv, yv, color, label);
}
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* ---------- numbers ---------- */
const MINUS = (s) => String(s).replace('-', '−');
/* three significant figures, in plain decimals wherever the value is not tiny */
function sig(x, digits) {
  const d = digits || 3, a = Math.abs(x);
  if (!isFinite(x) || a < 1e-12) return '0';
  const r = Number(x.toPrecision(d));
  return MINUS(Math.abs(r) >= 1e-4 && Math.abs(r) < 1e6 ? String(r) : r.toExponential(2));
}
/* the same number for a readout set in maths, with any exponent as a power of ten */
function texnum(x, digits) {
  const d = digits || 3, a = Math.abs(x);
  if (!isFinite(x) || a < 1e-12) return '0';
  if (a >= 1e-4 && a < 1e6) return MINUS(String(Number(x.toPrecision(d))));
  const e = Math.floor(Math.log10(a)), m = x / Math.pow(10, e);
  return `${MINUS(fmt(m, 2))}\\times 10^{${e}}`;
}
/* a range that nice() can divide, however flat the data is */
const sum = (a, b) => `${texnum(a)} ${b < 0 ? '-' : '+'} ${texnum(Math.abs(b))}`;
const span = (lo, hi, floor) => { const f = floor || 1e-3; return hi - lo < f ? nice(Math.min(lo, 0), Math.max(hi, lo + f), 4) : nice(lo, hi, 4); };

/* ---------- the scene's pieces ---------- */
/* a square object of mass m sitting on the ground line gy, centered on x, w wide */
function box(ctx, x, gy, w, label, color) {
  const y = gy - w / 2;
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - w / 2, y - w / 2, w, w); ctx.strokeRect(x - w / 2, y - w / 2, w, w); ctx.restore();
  if (label) text(ctx, label, x, y, color, { size: 19, weight: 600, align: 'center' });
}
/* an arrow of length L from (x, y) in the direction s, with its label beyond the head and never off the canvas */
function vec(ctx, x, y, L0, s, color, label) {
  /* an arrow longer than the canvas leaves room for is cut back, so its label still sits past the head */
  const room = (s < 0 ? x - 40 : 1360 - x) - F.measure(ctx, label, { size: 19, weight: 600 }) - 14, L = Math.min(L0, Math.max(30, room));
  if (!(L > 8)) { dot(ctx, x, y, color, true, 6); F.label(ctx, label, x, y, { side: 'right', gap: 14, leader: false, color, size: 19, H: 900 }); return; }
  arrow(ctx, x, y, x + s * L, y, color, 5);
  /* the label sits past the head and is held inside the canvas, however long the arrow */
  F.label(ctx, label, x + s * L, y, { side: s < 0 ? 'left' : 'right', gap: 14, leader: false, color, size: 19, H: 900 });
}

/* =====================================================================
   FIGURE 8.7 + 8.8 + 8.9: the one-dimensional inelastic collision. Two
   bodies slide together along a line, meet, and leave with the
   velocities conservation of momentum gives them. The book draws this
   one scene three times, and the choice brings back its bodies: two
   equal blocks that stop dead, a puck caught in a crouching goalie's
   glove on the ice, and two air-track carts a compressed spring pushes
   apart. The run is finite, so it loops and gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-collision', 900);
  /* Each book figure brings its numbers and its scales: choosing one sets the five sliders to its
     state and fixes both graph ranges and both arrow scales from it, so that neither range moves as
     the sliders are afterward dragged. */
  const PRESET = {
    '8.7': { m1: 1, m2: 1, v1: 2, v2: -2, c: 0, plo: -3, phi: 3, khi: 5, vmax: 3, pmax: 3 },
    '8.8': { m1: 0.15, m2: 70, v1: 35, v2: 0, c: 0, plo: -5, phi: 15, khi: 120, vmax: 40, pmax: 8 },
    '8.9': { m1: 0.35, m2: 0.5, v1: 2, v2: -0.5, c: 3.08, plo: -2, phi: 2, khi: 8, vmax: 5, pmax: 2.5 },
  };
  const which = choice(d.controls, {
    label: '\\text{figure}', value: '8.8', aria: 'which of the three book figures to show',
    options: [{ value: '8.7', label: '8.7' }, { value: '8.8', label: '8.8' }, { value: '8.9', label: '8.9' }],
    onInput: (v) => { const q = PRESET[v]; m1.set(q.m1); m2.set(q.m2); v1.set(q.v1); v2.set(q.v2); cc.set(q.c); reset(); },
  });
  const m1 = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 0.05, max: 5, step: 0.05, value: 0.15, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the first object' });
  const m2 = ctl(d.controls, { label: '\\kmtwo', cls: 'mass', min: 0.05, max: 80, step: 0.05, value: 70, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the second object' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: -40, max: 40, step: 0.05, value: 35, unit: 'm/s', dec: 2, onInput: reset });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: -40, max: 40, step: 0.05, value: 0, unit: 'm/s', dec: 2, onInput: reset });
  const cc = ctl(d.controls, { label: 'c', cls: '', min: 0, max: 3.5, step: 0.01, value: 0, unit: '', dec: 2, specials: [{ at: 0, label: 'perfectly inelastic' }, { at: 1, label: 'elastic' }], detents: [{ v: 3.08, label: '3.08' }], snap: true, onInput: reset, aria: 'the speed the objects separate at divided by the speed they approached at' });
  const ro = F.readout(d);
  const TC = 2, T = 4, GY = 350, cx = 700;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* the velocities after the collision follow from conservation of momentum and from c */
  function state() {
    const M = m1.v + m2.v, vcm = (m1.v * v1.v + m2.v * v2.v) / M, u = v1.v - v2.v, up = -cc.v * u;
    const a = vcm + (m2.v / M) * up, b = vcm - (m1.v / M) * up;
    return {
      v1p: a, v2p: b, hits: u > 1e-9, ptot: m1.v * v1.v + m2.v * v2.v,
      ke: 0.5 * m1.v * v1.v * v1.v + 0.5 * m2.v * v2.v * v2.v,
      kep: 0.5 * m1.v * a * a + 0.5 * m2.v * b * b,
    };
  }
  /* The goalie of Figure 8.8 kneels on the ice bent over his glove, the catching hand down at the
     ice where the puck arrives; joints in the silhouette's own frame, facing +x before the turn. */
  const GS = 1.7, GLOVE = { x: 54, y: -8 };
  const GOALIE = { pose: 'crouch', hip: { x: -8, y: -42 }, shoulder: { x: 24, y: -62 }, head: { x: 37, y: -78 }, feet: [{ x: -46, y: -2 }, { x: -56, y: -2 }], hands: [GLOVE, { x: 12, y: -30 }], kneeSide: -1 };
  /* a hockey puck in side view, a flat black disc, its right edge at x on the ice */
  function puck(ctx, x, color) {
    ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(x - 34, GY - 13, 34, 13, 4); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  /* The bodies of each figure: their half-width on the side that meets the other, the height the
     leader to their arrows starts from, and how they are drawn with their contact face at f. */
  const CART_H = 46;
  const cartW = (m, big) => 92 + 40 * Math.cbrt(m / big);
  const cartR = (w) => Math.max(6, Math.min(w, CART_H) / 6);
  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), tau = REDUCED ? T : cy.now(), after = s.hits && tau >= TC;
    const fig = which.value, P = PRESET[fig], KHI = P.khi;
    const big = Math.max(m1.v, m2.v), c1 = F.ref('object-1'), c2 = F.ref('object-2');
    /* body 1's right face meets body 2's left face at cx at the moment of the collision, or the end of
       the spring cart 1 carries; the ground covered is paced so that they meet at TC whatever their
       speeds, on the scale the chosen figure sets */
    const coil = fig === '8.9' || (fig === '8.7' && cc.v > 1.001), LS = 50, LU = 130, released = coil && cc.v > 1.001;
    const g0 = coil ? LS : 0;
    const SC = s.hits ? 470 / (P.vmax * TC) : 400 / (P.vmax * T);
    const u1 = after ? s.v1p : v1.v, u2 = after ? s.v2p : v2.v;
    const f1 = clamp(s.hits ? cx - g0 + SC * (tau <= TC ? v1.v : s.v1p) * (tau - TC) : cx - 300 + SC * v1.v * tau, 250, 1150);
    const f2 = clamp(s.hits ? cx + SC * (tau <= TC ? v2.v : s.v2p) * (tau - TC) : cx + 300 + SC * v2.v * tau, 250, 1150);
    const hits = [];
    /* the ground: an air track, the ice, or a plain floor */
    strip(ctx, 80, 1320, GY + 13, 26);
    let a1, a2, top1, top2;
    if (fig === '8.8') {
      const gx = f2 + GLOVE.x * GS, hipx = gx - GOALIE.hip.x * GS;
      F.silhouette(ctx, { x: gx, y: GY, s: GS, face: -1, color: c2, ...GOALIE });
      puck(ctx, f1, c1);
      a1 = f1 - 17; a2 = hipx; top1 = GY - 16; top2 = GY - 94 * GS;
      F.label(ctx, 'm₁', f1 - 34, GY - 16, { side: 'left', gap: 10, leader: false, color: c1, size: 20, H: 900 });
      F.label(ctx, 'm₂', gx + 10, GY - 84 * GS, { side: 'right', gap: 12, leader: false, color: c2, size: 20, H: 900 });
      hits.push({ x: f1 - 17, y: GY - 6, r: 30, name: 'the puck, m₁' }, { x: hipx, y: GY - 50 * GS, r: 70, name: 'the goalie, m₂' });
    } else if (fig === '8.9') {
      const w1 = cartW(m1.v, big), w2 = cartW(m2.v, big), r1 = cartR(w1), r2 = cartR(w2);
      a1 = f1 - g0 - w1 / 2; a2 = f2 + w2 / 2;
      top1 = GY - CART_H - 2 * r1; top2 = GY - CART_H - 2 * r2;
      F.cart(ctx, a1, GY - CART_H / 2 - 2 * r1, w1, CART_H, c1);
      F.cart(ctx, a2, GY - CART_H / 2 - 2 * r2, w2, CART_H, c2);
      text(ctx, 'm₁', a1, GY - CART_H / 2 - 2 * r1, c1, { size: 19, weight: 600, align: 'center' });
      text(ctx, 'm₂', a2, GY - CART_H / 2 - 2 * r2, c2, { size: 19, weight: 600, align: 'center' });
      hits.push({ x: a1, y: top1 + CART_H / 2, r: w1 / 2, name: 'cart 1, m₁' }, { x: a2, y: top2 + CART_H / 2, r: w2 / 2, name: 'cart 2, m₂' });
    } else {
      const w1 = 34 + 46 * Math.cbrt(m1.v / big), w2 = 34 + 46 * Math.cbrt(m2.v / big);
      a1 = f1 - g0 - w1 / 2; a2 = f2 + w2 / 2; top1 = GY - w1; top2 = GY - w2;
      box(ctx, a1, GY, w1, 'm₁', c1);
      box(ctx, a2, GY, w2, 'm₂', c2);
    }
    if (coil) {
      /* the spring rides on body 1's right face: compressed until the collision, and, where it gives
         the pair energy (c above 1), uncoiling as the two separate until it hangs loose at full length */
      const x0 = f1 - g0, sy = fig === '8.9' ? GY - CART_H / 2 - 2 * cartR(cartW(m1.v, big)) : GY - (34 + 46 * Math.cbrt(m1.v / big)) / 2;
      const len = released && after ? clamp(f2 - x0, LS, LU) : LS;
      spring(ctx, x0, sy, x0 + len, sy, 5, 12, F.ref('spring'), 3);
      hits.push({ x: x0 + len / 2, y: sy, r: Math.max(20, len / 2), name: released && after ? 'the spring, released' : 'the spring, compressed' });
    }
    /* each arrow starts over or under its own body, and a faint leader ties the row to the body,
       since the two velocity rows and the two momentum rows cannot share a line once the bodies touch */
    const V1 = GY - 176, V2 = GY - 230, Q1 = GY + 62, Q2 = GY + 118;
    const tie = (x, ya, yb) => { if (ya - yb > 6) line(ctx, x, ya, x, yb, alpha(PAL.ink, 0.35), 2, [4, 8]); };
    tie(a1, top1 - 8, V1 + 10); tie(a2, top2 - 8, V2 + 10);
    tie(a1, GY + 30, Q1 - 10); tie(a2, GY + 30, Q2 - 10);
    const KV = 180 / P.vmax, KP = 180 / P.pmax, p1 = m1.v * u1, p2 = m2.v * u2;
    vec(ctx, a1, V1, Math.abs(u1) * KV, u1 < 0 ? -1 : 1, C('velocity'), (after ? 'v₁′ = ' : 'v₁ = ') + sig(u1) + ' m/s');
    vec(ctx, a2, V2, Math.abs(u2) * KV, u2 < 0 ? -1 : 1, C('velocity'), (after ? 'v₂′ = ' : 'v₂ = ') + sig(u2) + ' m/s');
    vec(ctx, a1, Q1, Math.abs(p1) * KP, p1 < 0 ? -1 : 1, C('momentum'), (after ? 'p₁′ = ' : 'p₁ = ') + sig(p1) + ' kg·m/s');
    vec(ctx, a2, Q2, Math.abs(p2) * KP, p2 < 0 ? -1 : 1, C('momentum'), (after ? 'p₂′ = ' : 'p₂ = ') + sig(p2) + ' kg·m/s');
    hitsNow = hits;
    /* graph, left: the two momenta and their total against time */
    /* fixed axes. The run is the same 4 s whatever the sliders say, and the momentum range is the
       one the chosen figure asks for: −3 to 3 kg·m/s for the two equal masses of Figure 8.7, −5 to
       15 for the puck and the goalie of Figure 8.8, and −2 to 2 for the two carts of Figure 8.9. A
       pair heavier or faster than the figure it was chosen for runs off the top, where the steps are
       clipped. Neither range moves as the sliders are dragged. */
    const bA = { l: 170, r: 640, t: 540, b: 780 }, PLO = P.plo, PHI = P.phi;
    const A = axes(ctx, bA, [0, T], [PLO, PHI], { xl: 'time (s)', xc: C('time'), yl: 'momentum (kg·m/s)', yc: C('momentum'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => sig(v, 2) });
    const step = (S, before0, afterv0, color, w, dash) => {
      const end = s.hits ? TC : T, lo = S === A ? PLO : 0, hi = S === A ? PHI : KHI;
      const before = Math.min(Math.max(before0, lo), hi), afterv = Math.min(Math.max(afterv0, lo), hi);
      line(ctx, S.X(0), S.Y(before), S.X(end), S.Y(before), color, w, dash);
      if (s.hits) { line(ctx, S.X(TC), S.Y(before), S.X(TC), S.Y(afterv), color, w, dash); line(ctx, S.X(TC), S.Y(afterv), S.X(T), S.Y(afterv), color, w, dash); }
    };
    step(A, s.ptot, s.ptot, alpha(C('momentum'), 0.3), 10);
    step(A, m1.v * v1.v, m1.v * s.v1p, C('momentum'), 4);
    step(A, m2.v * v2.v, m2.v * s.v2p, C('momentum'), 4, [10, 10]);
    const clA = (v) => Math.min(Math.max(v, PLO), PHI);
    /* the three names take their turn at the right-hand ends of the lines, stepped out where two ends meet */
    const lab = F.labeller(ctx, 900);
    lab.add('total', A.X(T), A.Y(clA(s.ptot)), 0.3, -1, C('momentum'), 18, 18);
    lab.add('p₁', A.X(T), A.Y(clA(m1.v * s.v1p)), 0.3, -1, C('momentum'), 18, 18);
    lab.add('p₂', A.X(T), A.Y(clA(m2.v * s.v2p)), 0.3, 1, C('momentum'), 18, 18);
    lab.flush();
    line(ctx, A.X(Math.min(tau, T)), bA.t, A.X(Math.min(tau, T)), bA.b, PAL.ink, 2, [4, 8]);
    /* graph, right: the internal kinetic energy against time */
    /* the energy range is likewise the chosen figure's: 5 J for Figure 8.7, 120 J for the 91.9 J
       the puck of Figure 8.8 brings, and 8 J for the carts of Figure 8.9, whose spring adds energy
       rather than taking it away. A larger state is clipped at the top edge with its value pinned. */
    const bB = { l: 850, r: 1300, t: 540, b: 780 };
    const B = axes(ctx, bB, [0, T], [0, KHI], { xl: 'time (s)', xc: C('time'), yl: 'internal kinetic energy (J)', yc: C('energy'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => sig(v, 2) });
    step(B, s.ke, s.kep, C('energy'), 5);
    hollowOrPinned(ctx, bB, B.X, B.Y, 0.4, s.ke, C('energy'), sig(s.ke, 2) + ' J');
    pinned(ctx, bB, B.X, B.Y, T, s.kep, C('energy'), sig(s.kep, 2) + ' J');
    line(ctx, B.X(Math.min(tau, T)), bB.t, B.X(Math.min(tau, T)), bB.b, PAL.ink, 2, [4, 8]);
    /* the headline */
    const lost = s.ke - s.kep;
    topline(ctx, !s.hits ? 'The two objects are not approaching each other, so raise $\\kvone$ above $\\kvtwo$ and they will meet.'
      : !after ? 'The two are still approaching, with ' + sig(s.ke) + ' J of internal kinetic energy between them.'
        : 'They leave at ' + sig(s.v1p) + ' m/s and ' + sig(s.v2p) + ' m/s, and the internal kinetic energy has ' + (lost >= 0 ? 'fallen by ' + sig(lost) : 'risen by ' + sig(-lost)) + ' J.');
    /* at c = 0 the two leave together, and their two terms bend into the one term of the stuck pair */
    const stuck = cc.v === 0;
    ro.set(`\\mk{p}{\\kmone\\kvone + \\kmtwo\\kvtwo} = ${stuck ? '\\mk{s}{(\\kmone + \\kmtwo)\\kvprime}' : '\\mk{a}{\\kmone\\kvoneprime} + \\mk{b}{\\kmtwo\\kvtwoprime}'}:\\quad \\mk{l}{${sum(m1.v * v1.v, m2.v * v2.v)}} = \\mk{r}{${stuck ? texnum((m1.v + m2.v) * s.v1p) : sum(m1.v * s.v1p, m2.v * s.v2p)}} = \\mk{t}{${texnum(s.ptot)}}\\ \\text{kg}\\cdot\\text{m/s}`,
      s.hits ? `$\\kKEintprime - \\kKEint = ${texnum(s.kep)} - ${texnum(s.ke)} = ${texnum(s.kep - s.ke)}\\ \\text{J}$` : '',
      { keyMap: stuck ? { a: 's', b: 's' } : { s: ['a', 'b'] } });
  }
  let hitsNow = [];
  F.hover(d.stage, () => hitsNow);
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 4.6), draw });
})();

/* =====================================================================
   SIM: the recoil velocity. An object of mass m₁ is caught by an object
   of mass m₂ at rest, and the pair moves off at m₁v₁/(m₁ + m₂). The
   momentum arrow has the same length before the catch and after it; the
   velocity arrow does not. The curve below follows the recoil velocity
   across three decades of the catcher's mass. There is no time in the
   idea, so the figure is still and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-recoil', 800);
  const m1 = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 0.05, max: 5, step: 0.05, value: 0.15, unit: 'kg', dec: 2, aria: 'mass of the object that is caught' });
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 1, max: 60, step: 0.5, value: 35, unit: 'm/s', dec: 1 });
  const m2 = ctl(d.controls, { label: '\\kmtwo', cls: 'mass', min: 0.1, max: 100, step: 0.1, value: 70, unit: 'kg', dec: 1, aria: 'mass of the catcher' });
  const GY = 260;
  function draw() {
    const { ctx } = begin(d.c);
    const p = m1.v * v1.v, v = (m1.v / (m1.v + m2.v)) * v1.v;
    const big = Math.max(m1.v, m2.v);
    const w1 = 34 + 46 * Math.cbrt(m1.v / big), w2 = 34 + 46 * Math.cbrt(m2.v / big);
    strip(ctx, 80, 1320, GY + 13, 26);
    line(ctx, 700, 96, 700, GY + 40, PAL.rule, 2, [8, 8]);
    text(ctx, 'before the catch', 360, 100, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'after the catch', 1010, 100, PAL.muted, { size: 19, align: 'center' });
    /* before: the object comes in and the catcher is at rest */
    const c1 = F.ref('object-1'), c2 = F.ref('object-2');
    box(ctx, 170, GY, w1, 'm₁', c1);
    box(ctx, 600, GY, w2, 'm₂', c2);
    vec(ctx, 170, GY - w1 - 40, 150, 1, C('velocity'), 'v₁ = ' + fmt(v1.v, 1) + ' m/s');
    text(ctx, 'at rest', 600, GY - w2 - 40, PAL.muted, { size: 19, align: 'center' });
    vec(ctx, 170, GY + 66, 150, 1, C('momentum'), 'p = ' + sig(p) + ' kg·m/s');
    /* after: the two move off together */
    const xa = 880, xb = xa + w1 / 2 + w2 / 2;
    box(ctx, xa, GY, w1, 'm₁', c1);
    box(ctx, xb, GY, w2, 'm₂', c2);
    vec(ctx, xa, GY - Math.max(w1, w2) - 40, (v / v1.v) * 150, 1, C('velocity'), 'v′ = ' + sig(v) + ' m/s');
    vec(ctx, xa, GY + 66, 150, 1, C('momentum'), 'p = ' + sig(p) + ' kg·m/s');
    /* the curve: the recoil velocity against the catcher's mass, over three decades */
    /* fixed axes, both of them in decades. The catcher's mass is the slider's own range, 0.1 kg to
       100 kg. The recoil velocity runs from the 58.8 m/s of the lightest catcher down to the
       0.0748 m/s of the goalie of the worked example, which would lie flat against the base line of
       a plain scale, so the velocity axis is fixed in decades too, 0.001 m/s to 100 m/s, ticked
       every decade, which holds every state the sliders can reach. Neither range moves. */
    const VLO = -3, VHI = 2, g0 = { l: 200, r: 1280, t: 470, b: 700 };
    const lg = (y) => Math.log10(Math.max(1e-9, y));
    const g = axes(ctx, g0, [0, 3], [VLO, VHI], { xl: 'mass of the catcher m₂ (kg)', xc: C('mass'), yl: 'recoil velocity v′ (m/s)', yc: C('velocity'), nx: 3, ny: 5, fx: (L) => sig(Math.pow(10, L - 1), 2), fy: (L) => sig(Math.pow(10, L), 3) });
    curve(ctx, (L) => Math.max(VLO, lg((m1.v / (m1.v + Math.pow(10, L - 1))) * v1.v)), 0, 3, g.X, g.Y, C('velocity'), 5, 140);
    const L2 = Math.log10(m2.v) + 1, LV = Math.max(VLO, lg(v));
    line(ctx, g.X(L2), g0.b, g.X(L2), g.Y(LV), C('mass'), 2, [4, 8]);
    line(ctx, g0.l, g.Y(LV), g.X(L2), g.Y(LV), C('velocity'), 2, [4, 8]);
    pinned(ctx, g0, g.X, g.Y, L2, lg(v), C('velocity'), sig(v, 3) + ' m/s');
    topline(ctx, 'A ' + fmt(m1.v, 2) + ' kg object at ' + fmt(v1.v, 1) + ' m/s leaves a ' + fmt(m2.v, 1) + ' kg catcher moving at ' + sig(v) + ' m/s.');
    readout(d.readout, `\\kvprime = \\frac{\\kmone}{\\kmone + \\kmtwo}\\kvone = \\left(\\frac{${fmt(m1.v, 2)}\\ \\text{kg}}{${fmt(m1.v, 2)}\\ \\text{kg} + ${fmt(m2.v, 1)}\\ \\text{kg}}\\right)(${fmt(v1.v, 1)}\\ \\text{m/s}) = ${texnum(v)}\\ \\text{m/s}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
