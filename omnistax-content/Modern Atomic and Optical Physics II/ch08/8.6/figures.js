/* Figures for section 8.6 Sub-Doppler cooling.
   The book gives no numbers. Figures 8.4 and 8.5 measure energies in the light shift ℏ|Ω|²/|δ|
   (Figure 8.4 draws the shifts in |Ω|²/|δ|); Figure 8.5 takes positions as kz, velocities in u, the
   speed whose kinetic energy is ℏ|Ω|²/|δ|, and times in 1/ku. Figure 8.6 measures frequencies in γ
   (γ₁₂ = γ/2), velocities in γ/k and forces in ℏkγ. The σ₊ and σ₋ light and the two ground
   sublevels m = ±1/2 are the section's referents, one group. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, axes, curve, hover, readout, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const tx = (x, d) => fmt(x, d).replace('−', '-');
const sum = (x, d) => (x < 0 ? '(' + tx(x, d) + ')' : tx(x, d));
const mtex = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, ...o });
/* a spontaneous decay: a wavy line from (x1, y1) to (x2, y2) with an arrowhead, the book's squiggle */
function squiggle(ctx, x1, y1, x2, y2, col, w = 2.5) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 24) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = 60, tail = 16;
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const s = (i / n) * (L - tail), a = 7 * Math.sin((s / 22) * 2 * Math.PI) * Math.min(1, (L - tail - s) / 20);
    const x = x1 + ux * s - uy * a, y = y1 + uy * s + ux * a; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - ux * (tail + 4), y2 - uy * (tail + 4), x2, y2, col, w);
}
/* one entry of a legend: a short stroke and its name; returns where the next starts */
const key = (ctx, x, y, col, dash, s) => { line(ctx, x, y, x + 36, y, col, dash ? 3 : 5, dash ? [8, 6] : undefined); mtex(ctx, s, x + 46, y, PAL.ink, { size: 18, weight: 400 }); return x + 56 + F.measure(ctx, s, { size: 18, tex: true }) + 30; };

/* =====================================================================
   FIGURE 8.4 · sim-cg-levels · still, 2D level diagram
   J = 1/2 below, J′ = 3/2 above, the book's Clebsch-Gordan coefficients on
   every line. The choice lights one polarization's two transitions; the
   ground sublevels it shifts move down (red detuning) by |Ω|²/|δ| on the
   strong line and a third of it on the weak one, 80 units per |Ω|²/|δ|.
   The pumping route: absorb on the weak line, decay on the √(2/3) line.
===================================================================== */
(function () {
  const d = sim('sim-cg-levels', 600);
  const pol = choice(d.controls, { label: '\\text{light}', key: 'light', value: 'plus', aria: 'the polarization of the light',
    options: [{ value: 'plus', label: 'σ₊ light' }, { value: 'minus', label: 'σ₋ light' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const YE = 150, YG = 470, HW = 95, UNIT = 80;
  const XE = { '-3': 230, '-1': 540, '1': 860, '3': 1170 }, XG = { '-1': 540, '1': 860 };
  /* each line: ground m (in halves), excited m′, light, CG coefficient as printed */
  const LINES = [
    { g: -1, e: 1, p: 'plus', cg: '\\tfrac{1}{\\sqrt{3}}', w: 1 / 3 }, { g: 1, e: 3, p: 'plus', cg: '1', w: 1 },
    { g: 1, e: -1, p: 'minus', cg: '\\tfrac{1}{\\sqrt{3}}', w: 1 / 3 }, { g: -1, e: -3, p: 'minus', cg: '1', w: 1 },
  ];
  const shiftOf = (p, g) => LINES.find((l) => l.p === p && l.g === g).w;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const rp = F.ref('sigma-plus'), rm = F.ref('sigma-minus'), gp = F.ref('lvl-g-plus'), gm = F.ref('lvl-g-minus'), cR = C('rate'), cW = C('frequency');
    const lc = { plus: rp, minus: rm }, gc = { '1': gp, '-1': gm }, p = pol.value;
    const gy = { '1': YG + UNIT * pol.mix((v) => shiftOf(v, 1)), '-1': YG + UNIT * pol.mix((v) => shiftOf(v, -1)) };
    /* the excited sublevels */
    [-3, -1, 1, 3].forEach((m) => {
      line(ctx, XE[m] - HW, YE, XE[m] + HW, YE, PAL.ink, 5);
      mtex(ctx, `$m' = ${m < 0 ? '-' : ''}${Math.abs(m)}/2$`, XE[m], YE - 26, PAL.ink, { size: 20, weight: 400, align: 'center' });
      hits.push({ x: XE[m], y: YE, r: 40, name: `the excited sublevel m′ = ${m < 0 ? '−' : '+'}${Math.abs(m)}/2 of J′ = 3/2` });
    });
    /* the ground sublevels, unshifted (dashed) and shifted */
    [-1, 1].forEach((g) => {
      const x = XG[g], y = gy[g], col = gc[g];
      line(ctx, x - HW, YG, x + HW, YG, alpha(PAL.ink, 0.35), 2, [10, 10]);
      line(ctx, x - HW, y, x + HW, y, col, 6);
      mtex(ctx, `$m = ${g < 0 ? '-' : ''}1/2$`, x, y + 32, col, { size: 22, align: 'center' });
      const bx = g < 0 ? x - HW - 22 : x + HW + 22;
      vbracket(ctx, bx, YG, y, cW);
      mtex(ctx, `$\\kDelta^{\\sigma_${p === 'plus' ? '+' : '-'}}_{${g < 0 ? '-' : ''}1/2} = ${shiftOf(p, g) === 1 ? '' : '\\tfrac{1}{3}'}|\\kOmega${p === 'plus' ? 'p' : 'm'}|^2/\\kdelta$`,
        g < 0 ? bx - 16 : bx + 16, (YG + y) / 2, cW, { size: 20, align: g < 0 ? 'right' : 'left' });
      hits.push({ x, y, r: 40, name: `the ground sublevel m = ${g < 0 ? '−' : '+'}1/2, shifted by ${shiftOf(p, g) === 1 ? '' : '1/3 of '}|Ω|²/δ by the ${p === 'plus' ? 'σ₊' : 'σ₋'} light` });
    });
    /* the transitions; the unlit polarization is faded */
    LINES.forEach((l) => {
      const on = 0.15 + 0.85 * pol.a(l.p), x1 = XG[l.g] + (l.e > l.g ? 40 : -40), y1 = gy[l.g] - 6, x2 = XE[l.e] + (l.e > l.g ? -40 : 40), y2 = YE + 6;
      ctx.save(); ctx.globalAlpha *= on;
      arrow(ctx, x1, y1, x2, y2, lc[l.p], 4);
      const t = 0.62, lx = x1 + (x2 - x1) * t, ly = y1 + (y2 - y1) * t, side = l.e > l.g ? -1 : 1;
      mtex(ctx, `$${l.cg}$`, lx + side * 26, ly, PAL.ink, { size: 22, weight: 400, align: side < 0 ? 'right' : 'left', bg: PAL.panel });
      ctx.restore();
      hits.push({ x: (x1 + x2) / 2, y: (y1 + y2) / 2, r: 26, name: `${l.p === 'plus' ? 'σ₊' : 'σ₋'} light on m = ${l.g < 0 ? '−' : '+'}1/2 → m′ = ${l.e < 0 ? '−' : '+'}${Math.abs(l.e)}/2, Clebsch-Gordan coefficient ${l.w === 1 ? '1' : '1/√3'}` });
    });
    /* the decays that close the pumping cycle: m′ = ±1/2 → m = ±1/2 */
    [-1, 1].forEach((g) => {
      const on = 0.25 + 0.75 * pol.a(g > 0 ? 'plus' : 'minus'), x = XE[g] + (g > 0 ? 24 : -24);
      ctx.save(); ctx.globalAlpha *= on; squiggle(ctx, x, YE + 10, x, gy[g] - 8, cR, 3);
      mtex(ctx, '$\\sqrt{\\tfrac{2}{3}}$', x + (g > 0 ? 22 : -22), (YE + YG) / 2 - 20, PAL.ink, { size: 22, weight: 400, align: g > 0 ? 'left' : 'right', bg: PAL.panel });
      ctx.restore();
      hits.push({ x, y: (YE + YG) / 2, r: 26, name: `spontaneous decay m′ = ${g < 0 ? '−' : '+'}1/2 → m = ${g < 0 ? '−' : '+'}1/2, probability 2/3` });
    });
    const to = p === 'plus' ? '1/2' : '-1/2', from = p === 'plus' ? '-1/2' : '1/2', s = p === 'plus' ? '+' : '-';
    topline(ctx, `$\\sigma_${s}$ light shifts $m = ${to}$ three times as far as $m = ${from}$, and pumps the atom into $m = ${to}$.`);
    ro.set(`\\kDelta^{\\sigma_${s}}_{${to}} = \\frac{|\\kOmega${p === 'plus' ? 'p' : 'm'}|^2}{\\kdelta}, \\quad \\kDelta^{\\sigma_${s}}_{${from}} = \\frac{|\\kOmega${p === 'plus' ? 'p' : 'm'}|^2}{3\\kdelta}`,
      `From $m = ${from}$ to $m = ${to}$ the atom is pumped at $\\tfrac{1}{3}\\cdot\\tfrac{2}{3}\\,\\kRopt^${s} = \\tfrac{2}{9}\\kRopt^${s}$.`, { form: p });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 8.5 · sim-sisyphus · moving, 2D: potentials, strip, graph
   x = kz over 0…3π (1.5 λ), wrapped. U₊ = −s(1 − ⅔ sin²x), U₋ = −s(1 − ⅔ cos²x),
   s = +1 red, −1 blue, in ℏ|Ω|²/|δ|; with w = v/u the motion is
   dw/dτ = −½ dU/dx, τ = kut, and E = w² + U. Pumping at random (seeded):
   −½ → +½ at cos²x/τ_P, +½ → −½ at sin²x/τ_P (Eq. 8.110), τ_P = 1/(2v_c).
   Window 0–14/ku. Axes fixed: U −1.2…1.2; E −1.2…6 (pinned above).
===================================================================== */
(function () {
  const d = sim('sim-sisyphus', 850);
  const XW = 3 * Math.PI, T = 14, DT = 0.002, EVERY = 2, SEED = 7, DROP = 0.3, FADE = 1.6, TRAIL = 1.4;
  const cy = cycle(() => T, 1.2);
  let solved = '';
  const reset = () => { solved = ''; cy.reset(); };
  const v0 = ctl(d.controls, { label: '\\kvmag_0', cls: 'velocity', key: 'v0', min: 0.5, max: 2.5, step: 0.01, value: 1.7, unit: 'u', dec: 2,
    aria: 'the starting speed of the atom, in units of u', onInput: reset, specials: [{ at: () => vc.v, label: 'v₀ = v_c' }] });
  const vc = ctl(d.controls, { label: '\\kvc', cls: 'velocity', key: 'vc', min: 0.1, max: 5, step: 0.01, value: 0.8, unit: 'u', dec: 2,
    aria: 'the capture velocity, one over two k tau P, in units of u', onInput: reset, specials: [{ at: () => v0.v, label: 'v_c = v₀' }] });
  const det = choice(d.controls, { label: '\\text{detuning}', key: 'sign', value: 'red', aria: 'the sign of the detuning', onInput: reset,
    options: [{ value: 'red', label: 'red, δ < 0' }, { value: 'blue', label: 'blue, δ > 0' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const P = { l: 170, r: 1240, t: 120, b: 400 }, S = { l: 170, r: 1240, t: 446, b: 520 }, G = { l: 170, r: 1240, t: 610, b: 780 };
  const Uof = (m, x, s) => -s * (1 - (2 / 3) * (m > 0 ? Math.sin(x) ** 2 : Math.cos(x) ** 2));
  const dUof = (m, x, s) => s * (m > 0 ? 1 : -1) * (2 / 3) * Math.sin(2 * x);
  const rng = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  let run = null;
  function solve() {
    const k = [v0.v, vc.v, det.value].join('|'); if (k === solved) return; solved = k;
    const s = det.value === 'red' ? 1 : -1, r = rng(SEED), tau = 1 / (2 * vc.v), n = Math.round(T / DT);
    let x = Math.PI, w = v0.v, m = 1; const X = [], W = [], M = [], E = [], ev = [];
    for (let i = 0; i <= n; i++) {
      if (i % EVERY === 0) { X.push(x); W.push(w); M.push(m); E.push(w * w + Uof(m, x, s)); }
      w -= 0.25 * dUof(m, x, s) * DT; x += w * DT; w -= 0.25 * dUof(m, x, s) * DT;
      if (r() < ((m > 0 ? Math.sin(x) ** 2 : Math.cos(x) ** 2) / tau) * DT) { const dE = Uof(-m, x, s) - Uof(m, x, s); m = -m; ev.push({ t: (i + 1) * DT, x, to: m, dE }); }
    }
    run = { s, X, W, M, E, ev, h: DT * EVERY };
  }
  const idx = (t) => Math.max(0, Math.min(run.X.length - 1, Math.round(t / run.h)));
  const wrap = (x) => ((x % XW) + XW) % XW;
  /* tick labels: z in quarter wavelengths */
  const zLab = (q) => (q === 0 ? '0' : q % 4 === 0 ? (q / 4 === 1 ? 'λ' : `${q / 4}λ`) : q % 2 === 0 ? (q / 2 === 1 ? 'λ/2' : `${q / 2}λ/2`) : `${q === 1 ? '' : q}λ/4`);
  function draw() {
    solve();
    const { ctx } = begin(d.c); hits.length = 0;
    const now = cy.now(), i = idx(now), s = run.s, sm = det.mix((v) => (v === 'red' ? 1 : -1));
    const gp = F.ref('lvl-g-plus'), gm = F.ref('lvl-g-minus'), rp = F.ref('sigma-plus'), rm = F.ref('sigma-minus');
    const cE = C('energy'), cL = C('length'), cT = C('time'), gc = (m) => (m > 0 ? gp : gm);
    /* the potentials: U₊ solid, U₋ dashed; the choice bends one sign into the other */
    const { X, Y } = axes(ctx, P, [0, XW], [-1.2, 1.2], { nx: 0, ny: 6, fy: (v) => fmt(v, 1) });
    mtex(ctx, '$\\kU$ ($\\hbar|\\kOmega|^2/|\\kdelta|$)', P.l - 150, P.t - 26, cE, { size: 20 });
    const Um = (m) => (x) => -sm * (1 - (2 / 3) * (m > 0 ? Math.sin(x) ** 2 : Math.cos(x) ** 2));
    curve(ctx, Um(1), 0, XW, X, Y, gp, 5, 240);
    ctx.save(); ctx.setLineDash([12, 8]); curve(ctx, Um(-1), 0, XW, X, Y, gm, 5, 240); ctx.restore();
    const xe = XW, yP = Y(Um(1)(xe)), yM = Y(Um(-1)(xe));
    mtex(ctx, '$\\kU_{1/2}$', P.r + 12, yP, gp, { size: 22 }); mtex(ctx, '$\\kU_{-1/2}$', P.r + 12, yM + (Math.abs(yP - yM) < 30 ? (yM > yP ? 18 : -18) : 0), gm, { size: 22 });
    hits.push({ x: X(Math.PI / 2), y: Y(Um(1)(Math.PI / 2)), r: 18, name: 'U₁/₂, the light-shift potential of m = +1/2, Eq. (8.106)' },
      { x: X(Math.PI), y: Y(Um(-1)(Math.PI)), r: 18, name: 'U₋₁/₂, the light-shift potential of m = −1/2, Eq. (8.107)' });
    /* the energy line, the trail, the pumps and the atom */
    const E = run.E[i], hill = s > 0 ? -1 / 3 : 1;
    if (E <= 1.2) {
      line(ctx, P.l, Y(E), P.r, Y(E), alpha(cE, 0.8), 3, [10, 10]);
      mtex(ctx, '$E$', P.l + 10, Y(E) - 16, cE, { size: 20, bg: PAL.panel });
    } else {
      mtex(ctx, `$E$ = ${fmt(E, 2)}`, P.r - 30, P.t - 22, cE, { size: 18, align: 'right' }); arrow(ctx, P.r - 16, P.t - 8, P.r - 16, P.t - 38, cE, 3);
    }
    hits.push({ x: E <= 1.2 ? P.l + 30 : P.r - 60, y: E <= 1.2 ? Y(E) : P.t - 22, r: 20, name: `the atom's energy E = K + U = ${fmt(E, 2)} ℏ|Ω|²/|δ|` });
    const yAt = (j) => { const x = wrap(run.X[j]), m = run.M[j], t = j * run.h; let y = Uof(m, x, s);
      const e = run.ev.find((q) => q.t <= t && t - q.t < DROP); if (e) { const k = F.ease.smooth((t - e.t) / DROP); y = Uof(-m, x, s) + (y - Uof(-m, x, s)) * k; } return [X(x), Y(y)]; };
    const j0 = idx(Math.max(0, now - TRAIL));
    for (let j = j0 + 1; j <= i; j++) {
      const a = yAt(j - 1), b = yAt(j); if (Math.abs(b[0] - a[0]) > 200 || run.M[j] !== run.M[j - 1]) continue;
      line(ctx, a[0], a[1], b[0], b[1], alpha(gc(run.M[j]), 0.25 + (0.6 * (j - j0)) / (i - j0 + 1)), 6);
    }
    run.ev.forEach((e) => {
      const age = now - e.t; if (age < 0 || age > FADE) return;
      const xx = X(wrap(e.x)), y1 = Y(Uof(-e.to, e.x, s)), y2 = Y(Uof(e.to, e.x, s)), col = e.to > 0 ? rp : rm;
      ctx.save(); ctx.globalAlpha *= 1 - F.ease.smooth(age / FADE); squiggle(ctx, xx, y1, xx, y2 + (y2 > y1 ? -10 : 10), col, 3); ctx.restore();
      hits.push({ x: xx, y: (y1 + y2) / 2, r: 18, name: `pumped by ${e.to > 0 ? 'σ₊' : 'σ₋'} light into m = ${e.to > 0 ? '+' : '−'}1/2; the photon carried off ${fmt(-e.dE, 2)} ℏ|Ω|²/|δ|` });
    });
    const [ax, ay] = yAt(i);
    dot(ctx, ax, ay, PAL.ink, true, 11);
    hits.push({ x: ax, y: ay, r: 18, name: `the atom, in m = ${run.M[i] > 0 ? '+' : '−'}1/2, moving at ${fmt(Math.abs(run.W[i]), 2)} u` });
    /* the strip: |Ω₊|² and |Ω₋|² against z, the book's lower panel */
    const SY = (u) => S.b - u * (S.b - S.t);
    line(ctx, S.l, S.b, S.r, S.b, PAL.muted, 2);
    curve(ctx, (x) => Math.cos(x) ** 2, 0, XW, X, SY, rp, 4, 200); curve(ctx, (x) => Math.sin(x) ** 2, 0, XW, X, SY, rm, 4, 200);
    mtex(ctx, '$|\\kOmegap|^2$', P.r + 12, SY(1) + 4, rp, { size: 20 }); mtex(ctx, '$|\\kOmegam|^2$', P.r + 12, SY(0) - 4, rm, { size: 20 });
    for (let q = 0; q <= 6; q++) text(ctx, zLab(q), X((q * Math.PI) / 2), S.b + 26, PAL.muted, { size: 17, align: 'center' });
    mtex(ctx, '$z$', S.r, S.b + 54, cL, { size: 20, align: 'right' });
    hits.push({ x: X(0.15), y: SY(0.98), r: 18, name: 'where σ₊ light dominates, |Ω₊|² = |Ω|²cos²kz' }, { x: X(Math.PI / 2), y: SY(0.98), r: 18, name: 'where σ₋ light dominates, |Ω₋|² = |Ω|²sin²kz' });
    line(ctx, ax, P.b, ax, S.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    /* the energy against time */
    const G2 = axes(ctx, G, [0, T], [-1.2, 6], { nx: 7, ny: 6, fy: (v) => fmt(v, 1) });
    mtex(ctx, '$E$ ($\\hbar|\\kOmega|^2/|\\kdelta|$)', G.l - 150, G.t - 24, cE, { size: 20 });
    mtex(ctx, '$\\kt$ ($1/\\kkmag u$)', G.r, G.b + 56, cT, { size: 20, align: 'right' });
    line(ctx, G.l, G2.Y(hill), G.r, G2.Y(hill), alpha(PAL.ink, 0.45), 2, [10, 10]);
    text(ctx, 'hilltops', G.r - 8, G2.Y(hill) - 14, PAL.muted, { size: 17, align: 'right' });
    hits.push({ x: G.r - 40, y: G2.Y(hill), r: 16, name: `the tops of the hills, U = ${fmt(hill, 2)}: below them the atom cannot leave its well` });
    ctx.save(); ctx.beginPath(); ctx.rect(G.l, G.t, G.r - G.l, G.b - G.t); ctx.clip();
    ctx.strokeStyle = cE; ctx.lineWidth = 4; ctx.beginPath();
    for (let j = 0; j <= i; j += 2) { const x = G2.X(j * run.h), y = G2.Y(run.E[j]); if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.lineTo(G2.X(now), G2.Y(E)); ctx.stroke(); ctx.restore();
    F.pinned(ctx, G, G2.X, G2.Y, now, E, cE, fmt(E, 1));
    hits.push({ x: G2.X(now), y: Math.max(G.t, Math.min(G.b, G2.Y(E))), r: 16, name: `E = ${fmt(E, 2)} at t = ${fmt(now, 1)}/ku` });
    /* headline and readout */
    const n = run.ev.filter((e) => e.t <= now).length, E0 = run.E[0], K = run.W[i] ** 2, U = Uof(run.M[i], run.X[i], s), m = run.M[i];
    const trapped = s > 0 && E < hill;
    topline(ctx, `After ${n} pumping cycle${n === 1 ? '' : 's'} the atom's energy is ${fmt(E, 2)}, ${E < E0 ? 'down' : 'up'} from ${fmt(E0, 2)}${trapped ? ': below the hilltops it stays in one well.' : '.'}`);
    ro.set(`\\tfrac{1}{2}\\km\\kvmag^2 + \\kU_{${m > 0 ? '' : '-'}1/2} = ${tx(K, 2)} + ${sum(U, 2)} = ${tx(K + U, 2)}\\ \\hbar|\\kOmega|^2/|\\kdelta|`,
      `With $\\kvc$ = ${fmt(vc.v, 2)} u the pumping time is $\\ktauP = 1/2\\kkmag\\kvc$ = ${fmt(1 / (2 * vc.v), 2)}/ku.`, { form: 'E' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* =====================================================================
   FIGURE 8.6 · sim-sisyphus-doppler · still, 2D, graph alone
   |F| against v > 0 on log axes (v 10⁻⁶…10² γ/k, |F| 10⁻¹⁰…1 ℏkγ), γ = 1.
   Doppler: two beams, F_D = R(δ − v) − R(δ + v), R(x) = |Ω|²/(¼ + x²)
   (8.3's weak-field sum). Sisyphus: Eq. (8.125), F_S = ⅓(|Ω|²/δ)(v/v_c)/(1 + (v/v_c)²),
   v_c = R_opt/9 with R_opt = |Ω|²/(¼ + δ²) (8.124). Both oppose v for δ < 0.
===================================================================== */
(function () {
  const d = sim('sim-sisyphus-doppler', 660);
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -8, max: -2, step: 0.01, value: -5, unit: 'γ', dec: 2,
    aria: 'the detuning delta, in units of gamma' });
  const om = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0.15, max: 0.5, step: 0.01, value: 0.4, unit: 'γ', dec: 2,
    aria: 'the Rabi frequency of each beam, in units of gamma' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const B = { l: 190, r: 1240, t: 130, b: 570 }, LV = [-6, 2], LF = [-10, 0], SV = 6, SF = 10;
  const R = (o2, x) => o2 / (0.25 + x * x);
  const FD = (de, o2, v) => Math.abs(R(o2, de - v) - R(o2, de + v));
  const vcS = (de, o2) => R(o2, de) / 9;
  const FS = (de, o2, v) => { const c = vcS(de, o2), u = v / c; return Math.abs((o2 / (3 * de)) * (u / (1 + u * u))); };
  const vcD = (de, o2) => { let best = 0, at = 0; for (let l = -2; l <= 2; l += 0.0005) { const v = 10 ** l, f = FD(de, o2, v); if (f > best) { best = f; at = v; } } return at; };
  const sup = (e) => (e === 0 ? '1' : `10^{${e < 0 ? '−' : ''}${Math.abs(e)}}`);
  const three = (x) => { const p = 10 ** Math.max(0, Math.floor(Math.log10(x)) - 2); return fmt(Math.round(x / p) * p, 0); };
  const two = (x) => { const p = 10 ** Math.max(0, Math.floor(Math.log10(x)) - 1); return fmt(Math.round(x / p) * p, 0); };
  const sig = (x) => { const a = Math.abs(x); return a >= 100 ? fmt(x, 0) : a >= 1 ? fmt(x, a >= 10 ? 1 : 2) : x.toPrecision(2).replace('-', '−'); };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const de = dl.v, o2 = om.v * om.v, cF = C('force'), cV = C('velocity'), cE = C('friction');
    /* the axes run over log v + 6 and log|F| + 10, so they cross no zero */
    const A = axes(ctx, B, [0, LV[1] + SV], [0, LF[1] + SF], { nx: 8, ny: 10, fx: (e) => sup(Math.round(e) - SV), fy: (e) => (Math.round(e) % 2 ? '' : sup(Math.round(e) - SF)) });
    const X = (l) => A.X(l + SV), Y = (l) => A.Y(l + SF);
    mtex(ctx, '$\\kvmag$ ($\\kgamma/\\kkmag$)', B.r, B.b + 58, cV, { size: 20, align: 'right' });
    mtex(ctx, '$|\\kFmag|$ ($\\hbar\\kkmag\\kgamma$)', B.l - 170, B.t - 26, cF, { size: 20 });
    let lx = B.l + 300; lx = key(ctx, lx, B.t - 26, cF, true, '$\\kFmag_D$, Doppler'); key(ctx, lx, B.t - 26, cF, false, '$\\kFmag_S$, Sisyphus');
    const lg = (f) => (l) => { const y = f(10 ** l); return y > 0 ? Math.log10(y) : LF[0] - 5; };
    ctx.save(); ctx.beginPath(); ctx.rect(B.l, B.t - 6, B.r - B.l, B.b - B.t + 6); ctx.clip();
    ctx.save(); ctx.setLineDash([12, 8]); curve(ctx, lg((v) => FD(de, o2, v)), LV[0], LV[1], X, Y, cF, 4, 400); ctx.restore();
    curve(ctx, lg((v) => FS(de, o2, v)), LV[0], LV[1], X, Y, cF, 5, 400);
    ctx.restore();
    /* the two capture velocities */
    const cS = vcS(de, o2), cD = vcD(de, o2);
    [[cS, '$\\kvc^S$', 'S'], [cD, '$\\kvc^D$', 'D']].forEach(([c, s, w]) => {
      const x = X(Math.log10(c)), f = w === 'S' ? FS(de, o2, c) : FD(de, o2, c), y = Y(Math.log10(f));
      line(ctx, x, y, x, B.b, alpha(cV, 0.8), 2, [10, 10]); dot(ctx, x, y, cF, true, 8);
      mtex(ctx, s, x + 10, B.b - 22, cV, { size: 22, bg: PAL.panel });
      hits.push({ x, y, r: 16, name: `${w === 'S' ? 'the Sisyphus' : 'the Doppler'} capture velocity, ${sig(c)} γ/k, where the force is largest: ${sig(f)} ℏkγ` });
    });
    /* the friction ratio: both forces are ηmv well below v_c^S */
    const vb = Math.max(2e-6, cS / 6), lb = Math.log10(vb), ys = Y(Math.log10(FS(de, o2, vb))), yd = Y(Math.max(LF[0], Math.log10(FD(de, o2, vb))));
    vbracket(ctx, X(lb), ys, yd, cE);
    mtex(ctx, '$\\ketaS/\\keta_D$', X(lb) + 16, (ys + yd) / 2, cE, { size: 22, bg: PAL.panel });
    hits.push({ x: X(lb), y: (ys + yd) / 2, r: 20, name: 'at low velocity both forces are ηmv; the gap between the two lines is the ratio of their friction coefficients' });
    for (let l = LV[0]; l <= LV[1]; l += 0.5) {
      const v = 10 ** l, a = FD(de, o2, v), b = FS(de, o2, v);
      if (a > 1e-10) hits.push({ x: X(l), y: Y(Math.log10(a)), r: 12, name: `the Doppler force at v = ${sig(v)} γ/k: ${sig(a)} ℏkγ` });
      if (b > 1e-10) hits.push({ x: X(l), y: Y(Math.log10(b)), r: 12, name: `the Sisyphus force at v = ${sig(v)} γ/k: ${sig(b)} ℏkγ` });
    }
    const etaS = 3 * de, etaD = (8 * 0.5 * o2) / de ** 3, ratio = etaS / etaD;
    topline(ctx, `At $\\kdelta$ = ${fmt(de, 2)} $\\kgamma$ the Sisyphus friction is ${two(ratio)} times the Doppler friction, and its capture velocity 1/${two(cD / cS)} of the Doppler one.`);
    ro.set(`\\frac{\\ketaS}{\\keta_D} = \\frac{3\\kdelta/\\kgamma}{8\\kgammaonetwo|\\kOmega|^2/\\kdelta^3} = \\frac{${tx(etaS, 1)}}{${etaD.toPrecision(4)}} = ${three(ratio)}`,
      `Eqs. (8.128)–(8.129) in units of $\\hbar\\kkmag^2/\\km$; the capture velocities are $\\kvc^S$ = ${sig(cS)} and $\\kvc^D$ = ${sig(cD)} $\\kgamma/\\kkmag$.`, { form: 'eta' });
  }
  register(d.fig, { update: () => {}, draw });
})();

};
