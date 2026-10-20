/* Figures for section 11.3 Experimental techniques used in Bose condensation of atoms. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, text, topline, label, axes, curve, vbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const ease = F.ease.smooth;
const clamp01 = (k) => Math.max(0, Math.min(1, k));

/* =====================================================================
   FIGURE 11.2 · fig-buffer-gas · faithful copy, still
   The chamber, its walls coated with liquid He, the He buffer gas and the
   atom it cools. The arrows are the book's label leaders.
===================================================================== */
(function () {
  const d = sim('fig-buffer-gas', 520);
  const R = { l: 110, r: 830, t: 50, b: 480 }, WALL = 22;
  const ATOM = { x: 360, y: 300 }, GAS = { x: 640, y: 170 };
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const HE = [GAS];
  while (HE.length < 170) {
    const p = { x: R.l + WALL + 22 + rnd() * (R.r - R.l - 2 * WALL - 44), y: R.t + WALL + 22 + rnd() * (R.b - R.t - 2 * WALL - 44) };
    if (Math.hypot(p.x - ATOM.x, p.y - ATOM.y) > 34 && HE.every((q) => Math.hypot(p.x - q.x, p.y - q.y) > 22)) HE.push(p);
  }
  const hits = []; hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const he = F.el('He');
    ctx.save();
    ctx.fillStyle = alpha(he, 0.55); ctx.fillRect(R.l, R.t, R.r - R.l, R.b - R.t);
    ctx.fillStyle = PAL.panel; ctx.fillRect(R.l + WALL, R.t + WALL, R.r - R.l - 2 * WALL, R.b - R.t - 2 * WALL);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(R.l, R.t, R.r - R.l, R.b - R.t);
    ctx.fillStyle = he; ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 1.5;
    HE.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); });
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(ATOM.x, ATOM.y, 17, 0, 2 * Math.PI); ctx.fill();
    ctx.restore();
    const lead = alpha(PAL.ink, 0.75), LX = 900;
    arrow(ctx, LX - 12, 112, R.r - 4, 150, lead, 3);
    text(ctx, 'walls coated', LX, 98, PAL.ink, { size: 24 }); text(ctx, 'with liquid He', LX, 128, PAL.ink, { size: 24 });
    arrow(ctx, LX - 12, 268, GAS.x + 10, GAS.y + 6, lead, 3);
    text(ctx, 'vapor pressure', LX, 254, PAL.ink, { size: 24 }); text(ctx, 'He buffer gas', LX, 284, PAL.ink, { size: 24 });
    arrow(ctx, LX - 12, 390, ATOM.x + 22, ATOM.y + 6, lead, 3);
    text(ctx, 'cooled atom', LX, 390, PAL.ink, { size: 24 });
    HE.forEach((p) => hits.push({ x: p.x, y: p.y, r: 9, name: 'a helium atom of the buffer gas' }));
    hits.push({ x: ATOM.x, y: ATOM.y, r: 20, name: 'the atom being cooled' });
    [[R.l + WALL / 2, (R.t + R.b) / 2], [R.r - WALL / 2, (R.t + R.b) / 2], [(R.l + R.r) / 2, R.t + WALL / 2], [(R.l + R.r) / 2, R.b - WALL / 2]]
      .forEach(([x, y]) => hits.push({ x, y, r: 14, name: 'the chamber wall, coated with liquid helium' }));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.3 · sim-evaporation · moving, 2D, graph alone
   Atoms in the linear trap of 11.3.6 have g(E) ∝ E^{7/2}, so a thermal cloud
   holds dN/dE = N E^{7/2} e^{−E/k_BT} / (Γ(9/2)(k_BT)^{9/2}) with mean energy
   (9/2)k_BT, Eq. (11.32). A cut at E_th keeps the fraction P(9/2, x) of the
   atoms, x = E_th/k_BT, with mean energy (9/2)k_BT · P(11/2, x)/P(9/2, x);
   they rethermalize at T' = T P(11/2, x)/P(9/2, x). Three rounds of 2 s:
   cut 0–0.6, rethermalize 0.6–1.5, the depth lowered 1.5–2. Axes fixed:
   E 0 to 14 k_BT₀, dN/dE 0 to 0.25 N₀/k_BT₀ (the tallest curve any setting
   reaches is 0.22).
===================================================================== */
(function () {
  const d = sim('sim-evaporation', 640);
  const ROUNDS = 3, RT = 2, EMAX = 14, G45 = 11.631728396567448;
  /* the regularized lower incomplete gamma function, by its series */
  const lnG = (a) => { let x = a, s = 0; while (x < 7) { s -= Math.log(x); x += 1; } const z = 1 / (x * x); return s + (x - 0.5) * Math.log(x) - x + 0.9189385332046727 + (1 / x) * (1 / 12 - z * (1 / 360 - z / 1260)); };
  const P = (a, x) => { if (x <= 0) return 0; let term = 1 / a, sum = term; for (let k = 1; k < 400; k++) { term *= x / (a + k); sum += term; if (term < 1e-12 * sum) break; } return Math.min(1, sum * Math.exp(-x + a * Math.log(x) - lnG(a))); };
  const dist = (s) => (E) => (E <= 0 ? 0 : s.N * Math.pow(E, 3.5) * Math.exp(-E / s.T) / (G45 * Math.pow(s.T, 4.5)));
  const cy = cycle(() => ROUNDS * RT, 1.2);
  const eta = ctl(d.controls, { label: '\\ketaev', cls: '', key: 'eta', min: 3, max: 10, step: 0.1, value: 6, unit: '', dec: 1,
    aria: 'eta, the trap depth in units of the thermal energy', onInput: () => cy.reset(),
    specials: [{ at: 5, label: 'edge negligible' }] });
  const depth = choice(d.controls, { label: '\\text{depth}', key: 'depth', value: 'lowered', aria: 'whether the trap depth comes down after each round', onInput: () => cy.reset(),
    options: [{ value: 'lowered', label: 'lowered with T' }, { value: 'fixed', label: 'held fixed' }] });
  const ro = F.readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const G = { l: 170, r: 1250, t: 150, b: 520 };
  const states = () => {
    const s = [{ N: 1, T: 1, Et: eta.v }];
    for (let k = 1; k <= ROUNDS; k++) {
      const p = s[k - 1], x = p.Et / p.T, fN = P(4.5, x), fT = P(5.5, x) / fN;
      const T = p.T * fT;
      s.push({ N: p.N * fN, T, Et: depth.value === 'lowered' ? eta.v * T : s[0].Et, x, fN });
    }
    return s;
  };
  const pct = (f) => fmt(100 * f, 0);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const cE = C('energy'), cT = C('temperature');
    const s = states(), now = cy.now(), done = now >= ROUNDS * RT - 1e-9;
    const k = done ? ROUNDS - 1 : Math.floor(now / RT), u = done ? RT : now - k * RT;
    const a = s[k], b = s[k + 1];
    const { X, Y } = axes(ctx, G, [0, EMAX], [0, 0.25], { nx: 7, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2),
      xl: 'E  (k_BT₀)', xc: cE, yl: 'dN/dE  (N₀/k_BT₀)', yc: PAL.ink });
    ctx.save(); ctx.beginPath(); ctx.rect(G.l, G.t - 4, G.r - G.l, G.b - G.t + 4); ctx.clip();
    /* the earlier clouds, kept as faint traces */
    const traceTo = u >= 0.6 ? k + 1 : k;
    for (let j = 0; j < traceTo; j++) {
      const fade = j === k ? ease(clamp01((u - 0.6) / 0.9)) : 1;
      ctx.save(); ctx.globalAlpha *= 0.4 * fade; ctx.setLineDash([10, 10]); curve(ctx, dist(s[j]), 0, EMAX, X, Y, cT, 3, 200); ctx.restore();
    }
    const fa = dist(a), fb = dist(b);
    let Et = a.Et, cur = fb;
    if (u < 0.6) {
      /* the hot tail above the depth boils off */
      const q = ease(clamp01((u - 0.12) / 0.48)), dy = -50 * q;
      curve(ctx, fa, 0, a.Et, X, Y, cT, 5, 200);
      ctx.save(); ctx.globalAlpha *= 1 - q; ctx.translate(0, dy);
      ctx.fillStyle = alpha(cT, 0.35); ctx.beginPath(); ctx.moveTo(X(a.Et), Y(0));
      for (let i = 0; i <= 80; i++) { const E = a.Et + ((EMAX - a.Et) * i) / 80; ctx.lineTo(X(E), Y(fa(E))); }
      ctx.lineTo(X(EMAX), Y(0)); ctx.closePath(); ctx.fill();
      curve(ctx, fa, a.Et, EMAX, X, Y, cT, 5, 120);
      ctx.restore();
      cur = null;
    } else if (u < 1.5) {
      /* the kept atoms rethermalize */
      const q = ease(clamp01((u - 0.6) / 0.9)), cut = (E) => (E < a.Et ? fa(E) : 0);
      curve(ctx, (E) => (1 - q) * cut(E) + q * fb(E), 0, EMAX, X, Y, cT, 5, 280);
      cur = q > 0.5 ? fb : null;
    } else {
      curve(ctx, fb, 0, EMAX, X, Y, cT, 5, 200);
      Et = a.Et + (b.Et - a.Et) * ease(clamp01((u - 1.5) / 0.5));
    }
    ctx.restore();
    if (u < 0.6) {
      const q = ease(clamp01((u - 0.12) / 0.48)), Em = Math.min(EMAX - 1.6, a.Et + 1.2);
      F.faded(ctx, 1 - q, [0, -50 * q], () => text(ctx, 'evaporated atoms', X(Em), Y(fa(Em)) - 34, cT, { size: 20, weight: 600, bg: PAL.panel }));
    }
    /* the trap depth */
    line(ctx, X(Et), G.b, X(Et), G.t + 30, cE, 3, [10, 10]);
    text(ctx, 'E_{th}', X(Et), G.t + 12, cE, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: X(Et), y: G.t + 60, r: 18, name: `the trap depth, E_th = ${fmt(Et, 2)} k_BT₀` });
    /* the current cloud's temperature, beside its peak */
    const sNow = u < 0.6 ? a : b, Ep = 3.5 * sNow.T, fNow = dist(sNow);
    if (cur || u < 0.6) label(ctx, `T = ${fmt(sNow.T, 2)} T₀`, X(Ep), Y(fNow(Ep)), { side: 'above', color: cT, size: 20 });
    s.slice(0, traceTo).forEach((sj, j) => { const Ej = 3.5 * sj.T; hits.push({ x: X(Ej), y: Y(dist(sj)(Ej)), r: 16, name: `the cloud before round ${j + 1}: T = ${fmt(sj.T, 2)} T₀, N = ${fmt(sj.N, 2)} N₀` }); });
    /* headline and readout: Eq. (11.32) for the kept atoms */
    const rel = b.Et / b.T;
    topline(ctx, done
      ? `After three rounds $\\kT$ = ${fmt(b.T, 2)} $\\kT_0$, with ${pct(b.N)} % of the atoms left.`
      : u < 0.6
        ? `Round ${k + 1}: atoms above $E_{th}$ = ${fmt(b.x, 1)} $k_B\\kT$ boil off, ${pct(1 - b.fN)} % of the cloud.`
        : u < 1.5
          ? `The ${pct(b.fN)} % that stay rethermalize at $\\kT$ = ${fmt(b.T, 2)} $\\kT_0$.`
          : depth.value === 'lowered'
            ? `The trap depth comes down to ${fmt(eta.v, 1)} $k_B\\kT$ again.`
            : `The trap depth stays put, now ${fmt(rel, 1)} $k_B\\kT$ above the cooler cloud.`);
    const n = k + 1, gain = b.N / Math.pow(b.T, 4.5);
    ro.set(`\\bar{E}_{kept} = \\tfrac{9}{2}k_B\\kT_{${n}} = ${fmt(4.5 * b.T, 2)}\\,k_B\\kT_0 \\;\\Rightarrow\\; \\kT_{${n}} = ${fmt(b.T, 3)}\\,\\kT_0`,
      `$N_{${n}}$ = ${fmt(b.N, 3)} $N_0$, and $\\knzero\\klambdaDB^3 \\propto N/\\kT^{9/2}$ has grown ${fmt(gain, gain < 10 ? 2 : 1)} times.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 11.4 · sim-rf-knife · still, 2D, graph alone
   An Ioffe-Pritchard trap, μB(x)/h = √(1 + (x/10 µm)²) MHz. Bare curves:
   E_trapped = μB, E_untrapped + hν_RF = hν_RF − μB. Coupled by Ω_RF they
   become E± = hν_RF/2 ± √((μB − hν_RF/2)² + (ℏΩ_RF)²); the crossings sit
   where hν_RF = 2μB, and the lower curve's humps, hν_RF/2 − ℏΩ_RF, cap the
   depth at √((ν_RF/2 − μB₀/h)² + (Ω_RF/2π)²) − Ω_RF/2π. Energies over h in
   MHz. Axes fixed: x −100 to 100 µm, energy −8 to 16 MHz.
===================================================================== */
(function () {
  const d = sim('sim-rf-knife', 620);
  const U0 = 1, XS = 10, UK = 47.99;   /* µK per MHz of h·ν */
  const nu = ctl(d.controls, { label: '\\knu_{RF}', cls: 'frequency', key: 'nu', min: 1, max: 16, step: 0.1, value: 10, unit: 'MHz', dec: 1,
    aria: 'the RF frequency', specials: [{ at: 2 * U0, label: 'trap centre' }] });
  const om = ctl(d.controls, { label: '\\kOmega_{RF}/2\\pi', cls: 'coupling', key: 'Omega', min: 0, max: 1.5, step: 0.05, value: 0.5, unit: 'MHz', dec: 2,
    aria: 'the RF coupling', specials: [{ at: 0, label: 'RF off' }] });
  const ro = F.readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const G = { l: 170, r: 1110, t: 130, b: 540 };
  const u = (x) => Math.sqrt(U0 * U0 + (x / XS) * (x / XS));
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const cE = C('energy'), cF = C('frequency'), cO = C('coupling');
    const v = nu.v, w = om.v, half = v / 2;
    const lo = (x) => half - Math.sqrt((u(x) - half) ** 2 + w * w), hi = (x) => half + Math.sqrt((u(x) - half) ** 2 + w * w);
    const knife = half > U0, xc = knife ? XS * Math.sqrt(half * half - U0 * U0) : 0;
    const D = knife ? Math.sqrt((half - U0) ** 2 + w * w) - w : 0;
    const { X, Y } = axes(ctx, G, [-100, 100], [-8, 16], { nx: 4, ny: 6, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 0),
      xl: 'x  (µm)', xc: C('length'), yl: 'energy / h  (MHz)', yc: cE });
    ctx.save(); ctx.beginPath(); ctx.rect(G.l, G.t, G.r - G.l, G.b - G.t); ctx.clip();
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, u, -100, 100, X, Y, alpha(cE, 0.5), 2.5, 200);
    curve(ctx, (x) => v - u(x), -100, 100, X, Y, alpha(cE, 0.5), 2.5, 200);
    ctx.restore();
    if (w > 0) {
      curve(ctx, hi, -100, 100, X, Y, alpha(cE, 0.75), 3, 300);
      curve(ctx, lo, -100, 100, X, Y, cE, 5, 300);
    }
    if (knife && D > 0) {
      const top = half - w;
      line(ctx, X(-xc), Y(top), X(xc), Y(top), alpha(PAL.ink, 0.35), 2, [4, 8]);
    }
    ctx.restore();
    /* the bare curves named at the right edge, as the book names them */
    const yIn = (e) => Math.min(Math.max(Y(e), G.t + 12), G.b - 12);
    text(ctx, 'E_{trapped}', G.r + 14, yIn(u(100)), cE, { size: 22, weight: 600 });
    text(ctx, 'E_{untrapped} + hν_{RF}', G.r + 14, yIn(v - u(100)), cE, { size: 22, weight: 600 });
    if (knife && w > 0) {
      const top = half - w, ly = Y(-4.5), lead = alpha(PAL.ink, 0.75);
      arrow(ctx, X(0) - 70, ly - 16, X(-xc), Y(top) + 12, lead, 3);
      arrow(ctx, X(0) + 70, ly - 16, X(xc), Y(top) + 12, lead, 3);
      text(ctx, 'RF-induced spin flips', X(0), ly + 4, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
      if (D > 0.15) vbracket(ctx, X(0) + 16, Y(lo(0)), Y(top), cE, 'depth', 1, { size: 20 });
      [-1, 1].forEach((sg) => hits.push({ x: X(sg * xc), y: Y(top), r: 16, name: `RF-induced spin flip at x = ${sg < 0 ? '−' : ''}${fmt(xc, 0)} µm: the curves are split by 2Ω_RF/2π = ${fmt(2 * w, 2)} MHz` }));
    } else if (knife) {
      [-1, 1].forEach((sg) => hits.push({ x: X(sg * xc), y: Y(half), r: 16, name: `the bare crossing at x = ${sg < 0 ? '−' : ''}${fmt(xc, 0)} µm, where hν_RF = 2μB` }));
    }
    hits.push({ x: X(0), y: Y(w > 0 ? lo(0) : U0), r: 16, name: `the bottom of the trap, μB₀/h = ${fmt(U0, 0)} MHz` });
    topline(ctx, !knife
      ? `Below $h\\knu_{RF}$ = 2$\\kmumag B_0$ the knife has reached the centre and no atom stays trapped.`
      : w === 0
        ? `With no RF field the curves cross bare: atoms pass straight through on $E_{trapped}$ and nothing is cut.`
        : `The knife cuts at x = ±${fmt(xc, 0)} µm, where $h\\knu_{RF}$ = 2$\\kmumag B$; the trap is ${fmt(D, 2)} MHz deep.`);
    const t1 = fmt(half, 2), t2 = fmt(w, 2);
    if (!knife) ro.set(`\\frac{\\knu_{RF}}{2} = ${t1}\\ \\text{MHz} \\le \\frac{\\kmumag B_0}{h} = ${fmt(U0, 2)}\\ \\text{MHz} \\;\\Rightarrow\\; U_{depth} = 0`,
      'The crossings have met at the centre: the knife has cut the whole trap.', { form: 'none' });
    else ro.set(`\\frac{U_{depth}}{h} = \\sqrt{\\left(\\frac{\\knu_{RF}}{2} - \\frac{\\kmumag B_0}{h}\\right)^2 + \\left(\\frac{\\kOmega_{RF}}{2\\pi}\\right)^2} - \\frac{\\kOmega_{RF}}{2\\pi} = \\sqrt{(${t1} - ${fmt(U0, 2)})^2 + ${t2}^2} - ${t2} = ${fmt(D, 2)}\\ \\text{MHz}`,
      w === 0 ? 'With no gap the crossing is bare, and an atom keeps to the trapped curve however it moves.'
          : `A depth of ${fmt(D, 2)} MHz is $k_B$ × ${fmt(D * UK, 0)} µK: hotter atoms roll out over the humps.`, { form: 'depth' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
