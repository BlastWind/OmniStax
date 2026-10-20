/* Figures for section 9.3 The effects of dissipation on quantum fields.
   The book gives no numbers: the cavity QED figures measure g, κ, γ, δ in μs⁻¹ and time in μs,
   the dissipation sim measures time in 1/κ. Referents: the cat's two components (Figure 9.4),
   the signal and the vacuum (Figure 9.5), and in 9.3.3 the atom, the cavity mode and their two
   reservoirs; on the ladder and the population curves a state wears the referent its one quantum
   sits in (|2⟩_a|n−1⟩ the atom, |1⟩_a|n⟩ the cavity). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, label, axes, curve, vbracket, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const US = '\\ \\mu\\text{s}^{-1}';
const sgn = (x, d) => (x < 0 ? '−' + fmt(-x, d) : fmt(x, d));
const sgnTex = (x, d) => (x < 0 ? '-' + fmt(-x, d) : fmt(x, d));
const tx = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 22, weight: 600, tex: true, ...o });
/* a decay: a wavy line from (x1, y1) to (x2, y2) with an arrowhead, the book's squiggle */
function squiggle(ctx, x1, y1, x2, y2, col) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = 60, tail = 16;
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const s = (i / n) * (L - tail), a = 6 * Math.sin((s / 20) * 2 * Math.PI) * Math.min(1, (L - tail - s) / 18);
    const x = x1 + ux * s - uy * a, y = y1 + uy * s + ux * a; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - ux * (tail + 4), y2 - uy * (tail + 4), x2, y2, col, 2.5);
}
const both = (ctx, x1, y1, x2, y2, col, w = 4) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, w); arrow(ctx, mx, my, x2, y2, col, w); };
const ellipse = (ctx, x, y, rx, ry, stroke, fill, w = 3, dash) => {
  ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.stroke(); }
  ctx.restore();
};

/* =====================================================================
   FIGURE 9.4 · fig-cat · faithful copy, still, 2D
   The book's cat ∼ |iα⟩ − |−iα⟩ in the quadrature plane: two discs on a
   diagonal through the origin, the solid ray to |iα⟩, the dotted to |−iα⟩.
   Not to scale.
===================================================================== */
(function () {
  const d = sim('fig-cat', 500);
  const hits = []; hover(d.stage, () => hits, d.c);
  const O = { x: 700, y: 280 }, P = { x: 1010, y: 130 }, M = { x: 390, y: 430 }, R = 52;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const q = C('quadrature'), rp = F.ref('cat-plus'), rm = F.ref('cat-minus');
    line(ctx, 160, O.y, 1240, O.y, PAL.ink, 3); line(ctx, O.x, 70, O.x, 480, PAL.ink, 3);
    tx(ctx, '$\\kxquad$', 1258, O.y + 26, q, { size: 26 }); tx(ctx, '$\\kpquad$', O.x - 34, 82, q, { size: 26 });
    const u = (a, b) => { const L = Math.hypot(b.x - a.x, b.y - a.y); return [(b.x - a.x) / L, (b.y - a.y) / L]; };
    const [px, py] = u(O, P), [mx, my] = u(O, M);
    line(ctx, O.x, O.y, P.x - px * R, P.y - py * R, rp, 5);
    line(ctx, O.x, O.y, M.x - mx * R, M.y - my * R, rm, 5, [6, 9]);
    ellipse(ctx, P.x, P.y, R, R, rp, alpha(rp, 0.35), 3);
    ellipse(ctx, M.x, M.y, R, R, rm, alpha(rm, 0.35), 3, [8, 7]);
    tx(ctx, '$|i\\kalphacoh\\rangle$', P.x + 8, P.y + R + 34, rp, { size: 26, align: 'center' });
    tx(ctx, '$|{-i\\kalphacoh}\\rangle$', M.x - 8, M.y - R - 34, rm, { size: 26, align: 'center' });
    hits.push({ x: P.x, y: P.y, r: R, name: 'the coherent component |iα⟩' }, { x: M.x, y: M.y, r: R, name: 'the coherent component |−iα⟩, in superposition with |iα⟩' },
      { x: O.x, y: O.y, r: 18, name: 'the origin of the quadrature plane, the vacuum' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.5 · fig-bs-loss · faithful copy, still, 2D
   The book's beamsplitter model of loss: the signal â_in passes as the lossy
   signal â_out, the vacuum b̂_vac enters the other port, the loss leaves.
   Every arrow is notation for a port.
===================================================================== */
(function () {
  const d = sim('fig-bs-loss', 470);
  const hits = []; hover(d.stage, () => hits, d.c);
  const cx = 700, cy = 250;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const s = F.ref('signal'), v = F.ref('vacuum');
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = PAL.soft; ctx.fillRect(-175, -14, 350, 28); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(-175, -14, 350, 28); ctx.restore();
    arrow(ctx, 360, cy - 4, cx - 22, cy, s, 5);
    arrow(ctx, cx + 22, cy, 1050, cy - 6, s, 5);
    arrow(ctx, cx - 18, 70, cx - 18, cy - 38, v, 5);
    arrow(ctx, cx, cy + 22, cx, 430, PAL.ink, 5);
    text(ctx, 'signal', 300, cy - 42, s, { size: 24, align: 'center' }); tx(ctx, '$\\hat{a}_\\mathrm{in}$', 300, cy + 4, s, { size: 30, align: 'center' });
    text(ctx, 'lossy signal', 1150, cy - 42, s, { size: 24, align: 'center' }); tx(ctx, '$\\hat{a}_\\mathrm{out}$', 1150, cy + 4, s, { size: 30, align: 'center' });
    text(ctx, 'fluctuations', cx - 18, 26, v, { size: 24, align: 'center' }); tx(ctx, '$\\hat{b}_\\mathrm{vac}$', cx + 50, 100, v, { size: 30 });
    text(ctx, 'loss', cx + 26, 420, PAL.ink, { size: 24 });
    hits.push({ x: 480, y: cy, r: 40, name: 'the signal â_in entering the beamsplitter' }, { x: 900, y: cy, r: 40, name: 'the lossy signal â_out = t â_in + i√(1 − |t|²) b̂_vac' },
      { x: cx - 18, y: 140, r: 40, name: 'the vacuum field b̂_vac entering the other port' }, { x: cx, y: 360, r: 40, name: 'the part of the signal reflected out: the loss' },
      { x: cx + 90, y: cy + 90, r: 30, name: 'the beamsplitter, transmission amplitude t' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.6 · fig-lossy-cavity · faithful copy, still, 2D
   The book's lossy cavity: a partially transparent mirror (t, r) facing a
   perfect mirror a length L away, the field E making round trips, E_in in,
   E_out out. Every arrow is notation.
===================================================================== */
(function () {
  const d = sim('fig-lossy-cavity', 520);
  const hits = []; hover(d.stage, () => hits, d.c);
  const ML = 420, MR = 920, T = 90, B = 350;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const E = C('electric-field'), Ln = C('length');
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(ML - 22, T, 22, B - T); ctx.strokeRect(ML - 22, T, 22, B - T);
    ctx.fillRect(MR, T, 170, B - T); ctx.strokeRect(MR, T, 170, B - T); ctx.restore();
    ctx.save(); ctx.strokeStyle = E; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(ML + 20, 130);
    ctx.bezierCurveTo(780, 130, 905, 175, 905, 220); ctx.bezierCurveTo(905, 265, 780, 310, ML + 46, 310); ctx.stroke(); ctx.restore();
    arrow(ctx, ML + 60, 310, ML + 16, 310, E, 4);
    tx(ctx, '$\\kEcav$', 660, 175, E, { size: 30, align: 'center' });
    arrow(ctx, 200, 130, ML - 34, 130, E, 4); tx(ctx, '$\\kEcav_\\mathrm{in}$', 150, 130, E, { size: 28, align: 'center' });
    arrow(ctx, ML - 34, 310, 200, 310, E, 4); tx(ctx, '$\\kEcav_\\mathrm{out}$', 150, 310, E, { size: 28, align: 'center' });
    both(ctx, ML + 4, 370, MR - 4, 370, Ln, 3); tx(ctx, '$\\kLmed$', (ML + MR) / 2, 400, Ln, { size: 30, align: 'center' });
    text(ctx, 'partially transparent', ML - 11, 430, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'mirror, t, r', ML - 11, 458, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'perfectly reflecting', MR + 85, 430, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'mirror', MR + 85, 458, PAL.ink, { size: 20, align: 'center' });
    hits.push({ x: ML - 11, y: 220, r: 30, name: 'the partially transparent mirror, transmission t and reflection r' }, { x: MR + 85, y: 220, r: 60, name: 'the perfectly reflecting mirror' },
      { x: 660, y: 220, r: 60, name: 'the intracavity field E on its round trip, Δt = 2L/c' }, { x: 260, y: 130, r: 30, name: 'the field E_in incident on the cavity' },
      { x: 260, y: 310, r: 30, name: 'the output field E_out = −r E_in + t E' }, { x: (ML + MR) / 2, y: 370, r: 30, name: 'the cavity length L' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-damped-field · moving, 2D, graph beside
   A minimum-uncertainty state of the cavity mode decaying into vacuum:
   ⟨â⟩ = αe^{−κt/2}, Eq. (9.104), with α = |α|e^{iπ/4}, so ⟨x̂⟩ = ⟨p̂⟩ = |α|e^{−κt/2};
   ⟨δx̂²(t)⟩ = ⟨δx̂²(0)⟩e^{−κt} + (1 − e^{−κt})/2, Eq. (9.107), and the same for p̂
   with ⟨δp̂²(0)⟩ = 1/(4⟨δx̂²(0)⟩). The ellipse has the standard deviations for
   semi-axes. Axes fixed: plane −5…5 (|α| ≤ 4); variances 0…2.5 (the largest
   initial ⟨δp̂²⟩ the slider reaches), κt 0…5.
===================================================================== */
(function () {
  const d = sim('sim-damped-field', 700);
  const T = 5, cy = cycle(() => T, 1.2);
  const am = ctl(d.controls, { label: '|\\kalphacoh|', cls: 'quadrature', key: 'alpha', min: 0, max: 4, step: 0.1, value: 3, unit: '', dec: 1,
    aria: 'the initial coherent amplitude', onInput: () => cy.reset(), specials: [{ at: 0, label: 'vacuum' }] });
  const vx = ctl(d.controls, { label: '\\langle\\delta\\kxquad^2(0)\\rangle', cls: 'quadrature', key: 'varx', min: 0.1, max: 2, step: 0.01, value: 0.5, unit: '', dec: 2,
    aria: 'the initial variance of the x quadrature', onInput: () => cy.reset(), specials: [{ at: 0.5, label: 'coherent state' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const PL = { l: 130, r: 590, t: 150, b: 610 }, GR = { l: 780, r: 1320, t: 150, b: 610 };
  const V = (v0, kt) => v0 * Math.exp(-kt) + 0.5 * (1 - Math.exp(-kt));
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const q = C('quadrature'), tm = C('time'), st = C('state'), kt = cy.now(), A = am.v, vx0 = vx.v, vp0 = 1 / (4 * vx0);
    const m = A * Math.exp(-kt / 2), Vx = V(vx0, kt), Vp = V(vp0, kt);
    const P = axes(ctx, PL, [-5, 5], [-5, 5], { nx: 10, ny: 10, fx: (v) => (v % 5 === 0 ? fmt(v, 0) : ''), fy: (v) => (v % 5 === 0 ? fmt(v, 0) : '') });
    tx(ctx, '$\\kxquad$', PL.r, PL.b + 58, q, { size: 22, align: 'right' }); tx(ctx, '$\\kpquad$', PL.l, PL.t - 26, q, { size: 22 });
    const s = (PL.r - PL.l) / 10;
    ctx.save(); ctx.beginPath(); ctx.rect(PL.l, PL.t, PL.r - PL.l, PL.b - PL.t); ctx.clip();
    ellipse(ctx, P.X(0), P.Y(0), Math.SQRT1_2 * s, Math.SQRT1_2 * s, alpha(PAL.ink, 0.45), null, 2, [6, 6]);
    ellipse(ctx, P.X(A), P.Y(A), Math.sqrt(vx0) * s, Math.sqrt(vp0) * s, alpha(st, 0.7), null, 2, [6, 6]);
    line(ctx, P.X(A), P.Y(A), P.X(0), P.Y(0), alpha(PAL.ink, 0.35), 2, [4, 8]);
    ellipse(ctx, P.X(m), P.Y(m), Math.sqrt(Vx) * s, Math.sqrt(Vp) * s, st, alpha(st, 0.3), 3);
    dot(ctx, P.X(m), P.Y(m), st, true, 7);
    ctx.restore();
    hits.push({ x: P.X(m), y: P.Y(m), r: Math.max(20, Math.sqrt(Math.max(Vx, Vp)) * s), name: `the state now: mean ⟨x̂⟩ = ⟨p̂⟩ = ${fmt(m, 2)}, ⟨δx̂²⟩ = ${fmt(Vx, 2)}, ⟨δp̂²⟩ = ${fmt(Vp, 2)}` },
      { x: P.X(A), y: P.Y(A), r: 22, name: 'the state at t = 0' }, { x: P.X(0), y: P.Y(0), r: 16, name: 'the vacuum, ⟨δx̂²⟩ = ⟨δp̂²⟩ = 1/2' });
    const G = axes(ctx, GR, [0, T], [0, 2.5], { nx: 5, ny: 5, fy: (v) => fmt(v, 1) });
    tx(ctx, '$\\kkappa\\kt$', GR.r, GR.b + 58, tm, { size: 22, align: 'right' });
    text(ctx, 'variance', GR.l, GR.t - 26, PAL.ink, { size: 20, weight: 600 });
    line(ctx, GR.l, G.Y(0.5), GR.r, G.Y(0.5), alpha(PAL.ink, 0.45), 2, [10, 10]);
    text(ctx, '1/2, the vacuum', GR.r - 6, G.Y(0.5) - 18, PAL.muted, { size: 17, align: 'right' });
    ctx.save(); ctx.globalAlpha *= 0.25; curve(ctx, (t) => V(vx0, t), 0, T, G.X, G.Y, q, 3, 160);
    ctx.setLineDash([10, 8]); curve(ctx, (t) => V(vp0, t), 0, T, G.X, G.Y, q, 3, 160); ctx.restore();
    curve(ctx, (t) => V(vx0, t), 0, kt, G.X, G.Y, q, 5, 160);
    ctx.save(); ctx.setLineDash([10, 8]); curve(ctx, (t) => V(vp0, t), 0, kt, G.X, G.Y, q, 5, 160); ctx.restore();
    dot(ctx, G.X(kt), G.Y(Vx), q); dot(ctx, G.X(kt), G.Y(Vp), q, false);
    const lt = 0.9, cl = (v) => Math.min(GR.b - 18, Math.max(GR.t + 18, v));
    const ex = G.Y(V(vx0, lt)), ep = G.Y(V(vp0, lt)), xUp = ex <= ep;
    tx(ctx, '$\\langle\\delta\\kxquad^2\\rangle$', G.X(lt), cl(ex + (xUp ? -26 : 26)), q, { size: 20, bg: PAL.panel, align: 'center' });
    tx(ctx, '$\\langle\\delta\\kpquad^2\\rangle$', G.X(lt), cl(ep + (xUp ? 26 : -26)), q, { size: 20, bg: PAL.panel, align: 'center' });
    hits.push({ x: G.X(kt), y: G.Y(Vx), r: 16, name: `⟨δx̂²⟩ = ${fmt(Vx, 2)} at κt = ${fmt(kt, 2)}` }, { x: G.X(kt), y: G.Y(Vp), r: 16, name: `⟨δp̂²⟩ = ${fmt(Vp, 2)} at κt = ${fmt(kt, 2)}` });
    const coh = Math.abs(vx0 - 0.5) < 1e-6;
    topline(ctx, coh ? `$\\kkappa\\kt$ = ${fmt(kt, 2)}: the mean has fallen to ${fmt(m, 2)} and both variances stay 1/2; the state is the coherent state $|\\kalphacoh e^{-\\kkappa\\kt/2}\\rangle$.`
      : `$\\kkappa\\kt$ = ${fmt(kt, 2)}: the mean has fallen to ${fmt(m, 2)}, and the variances ${fmt(Vx, 2)} and ${fmt(Vp, 2)} are relaxing to the vacuum's 1/2.`);
    const e = Math.exp(-kt);
    ro.set(`\\langle\\delta\\kxquad^2(\\kt)\\rangle = \\langle\\delta\\kxquad^2(0)\\rangle e^{-\\kkappa\\kt} + \\tfrac{1}{2}\\left(1 - e^{-\\kkappa\\kt}\\right) = ${fmt(vx0, 2)} \\cdot ${fmt(e, 3)} + \\tfrac{1}{2} \\cdot ${fmt(1 - e, 3)} = ${fmt(Vx, 3)}`,
      '', { form: 'var', values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 9.7 · fig-cqed-reservoirs · faithful copy, still, 2D
   The book's system-reservoir division: the atom and the cavity mode (the
   total system, coupled by g) each decaying into its own reservoir (γ into
   the 4π continuum, κ into the modes of the cavity's leak). Every arrow is
   notation: γ and κ name decay channels, g the coherent coupling.
===================================================================== */
(function () {
  const d = sim('fig-cqed-reservoirs', 520);
  const hits = []; hover(d.stage, () => hits, d.c);
  const AT = { x: 330, y: 380, rx: 82, ry: 50 }, CV = { x: 690, y: 395, rx: 135, ry: 85 };
  const RF = { x: 330, y: 150, rx: 200, ry: 58 }, RL = { x: 1020, y: 170, rx: 265, ry: 88 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const ra = F.ref('atom'), rc = F.ref('cavity'), rf = F.ref('res-free'), rl = F.ref('res-leak'), rt = C('rate'), cp = C('coupling');
    ctx.save(); ctx.translate(690, 160); ctx.rotate(0.03); ellipse(ctx, 0, 0, 650, 140, alpha(PAL.ink, 0.5), null, 2, [10, 8]); ctx.restore();
    ellipse(ctx, 520, 390, 380, 112, alpha(PAL.ink, 0.5), null, 2, [10, 8]);
    ellipse(ctx, RF.x, RF.y, RF.rx, RF.ry, rf, alpha(rf, 0.12), 3);
    ellipse(ctx, RL.x, RL.y, RL.rx, RL.ry, rl, alpha(rl, 0.12), 3);
    ellipse(ctx, AT.x, AT.y, AT.rx, AT.ry, ra, alpha(ra, 0.15), 3);
    ellipse(ctx, CV.x, CV.y, CV.rx, CV.ry, rc, alpha(rc, 0.15), 3);
    text(ctx, '4π continuum modes', RF.x, RF.y, PAL.ink, { size: 22, align: 'center' });
    ['free space modes', 'co-propagating with leak', 'from cavity mode'].forEach((s, i) => text(ctx, s, RL.x, RL.y - 32 + 32 * i, PAL.ink, { size: 22, align: 'center' }));
    text(ctx, 'separate', 662, 140, PAL.muted, { size: 20, align: 'center' }); text(ctx, 'reservoirs', 662, 168, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'atom', AT.x, AT.y, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'cavity', CV.x, CV.y - 14, PAL.ink, { size: 22, align: 'center' }); text(ctx, 'mode', CV.x, CV.y + 16, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'total reservoir', 1300, 40, PAL.muted, { size: 22, align: 'right' });
    text(ctx, 'total system', 930, 480, PAL.muted, { size: 22 });
    arrow(ctx, AT.x, AT.y - AT.ry - 4, AT.x, RF.y + RF.ry + 6, rt, 4); tx(ctx, '$\\kgamma$', AT.x + 20, 265, rt, { size: 28 });
    arrow(ctx, CV.x + 80, CV.y - 70, RL.x - 140, RL.y + 72, rt, 4); tx(ctx, '$\\kkappa$', 840, 300, rt, { size: 28 });
    both(ctx, AT.x + AT.rx + 6, AT.y, CV.x - CV.rx - 6, AT.y + 6, cp, 4);
    tx(ctx, '$\\kg$', 482, 352, cp, { size: 26, align: 'center' }); tx(ctx, '$\\kH_{JC}$', 482, 420, cp, { size: 22, align: 'center' });
    hits.push({ x: AT.x, y: AT.y, r: 50, name: 'the atom, part of the total system' }, { x: CV.x, y: CV.y, r: 80, name: 'the cavity mode, part of the total system' },
      { x: RF.x, y: RF.y, r: 60, name: 'the atom’s reservoir: free-space modes in all 4π' }, { x: RL.x, y: RL.y, r: 90, name: 'the cavity’s reservoir: the free-space modes that carry its leak' },
      { x: AT.x, y: 265, r: 30, name: 'the atom’s decay into free space, at γ' }, { x: 840, y: 285, r: 30, name: 'the cavity’s loss through the mirror, at κ' },
      { x: 482, y: 385, r: 34, name: 'the coherent coupling g of the Jaynes-Cummings Hamiltonian' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.8 · sim-jc-ladder · still, 2D level diagram, both panels
   (a) Rung n: |2,n−1⟩ at −δ/2 and |1,n⟩ at +δ/2 about the rung's centre,
   coupled by g√n, the dressed pair at ±√(4ng² + δ²)/2 (Figure 9.8a).
   (b) The decays on the same bare levels: κ takes |1,n⟩ → |1,n−1⟩ and
   |2,n−1⟩ → |2,n−2⟩, γ takes |2,n−1⟩ → |1,n−1⟩. Within a rung the energies
   are to scale, S = 17 units per μs⁻¹ (the largest pair, n = 3 at g = 2 and
   |δ| = 3, spans ±64 and stays clear of its neighbours 150 apart); the rungs
   stand ħν apart, not to scale.
===================================================================== */
(function () {
  const d = sim('sim-jc-ladder', 660);
  const gS = ctl(d.controls, { label: '\\kg', cls: 'coupling', key: 'g', min: 0, max: 2, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the atom-cavity coupling g, in inverse microseconds', specials: [{ at: 0, label: 'uncoupled' }] });
  const dS = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -3, max: 3, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: 'the detuning of the cavity from the atom, in inverse microseconds', specials: [{ at: 0, label: 'resonance' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const S = 17, YG = 600, Y = [null, 470, 320, 170];
  const A = { a2: [60, 190], a1: [230, 360], dr: [430, 560], br: 610 }, B = { b2: [975, 1090], b1: [1190, 1305], g: [1075, 1210] };
  const ket = (a, n) => `|${a},${n}⟩`;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const g = gS.v, de = dS.v, ra = F.ref('atom'), rc = F.ref('cavity'), cp = C('coupling'), rt = C('rate'), fq = C('frequency');
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(30, 80, 860, 565); ctx.strokeRect(920, 80, 460, 565); ctx.restore();
    text(ctx, 'a', 50, 108, PAL.ink, { size: 26 }); text(ctx, 'b', 940, 108, PAL.ink, { size: 26 });
    /* (a) the ground state and the rungs */
    line(ctx, A.a1[0], YG, A.a1[1], YG, PAL.ink, 4); line(ctx, A.a1[1], YG, A.dr[0], YG, alpha(PAL.ink, 0.5), 2, [5, 6]); line(ctx, A.dr[0], YG, A.dr[1], YG, PAL.ink, 4);
    text(ctx, ket(1, 0), (A.a1[0] + A.a1[1]) / 2, YG + 26, PAL.ink, { size: 20, align: 'center' });
    hits.push({ x: (A.a1[0] + A.a1[1]) / 2, y: YG, r: 24, name: 'the ground state |1⟩_a|0⟩, which no coupling touches' });
    const split = [];
    for (let n = 1; n <= 3; n++) {
      const y0 = Y[n], y2 = y0 + (de / 2) * S, y1 = y0 - (de / 2) * S, W = Math.sqrt(4 * n * g * g + de * de), yu = y0 - (W / 2) * S, yd = y0 + (W / 2) * S;
      split.push(W);
      line(ctx, A.a2[0], y2, A.a2[1], y2, ra, 4); line(ctx, A.a1[0], y1, A.a1[1], y1, rc, 4);
      text(ctx, ket(2, n - 1), (A.a2[0] + A.a2[1]) / 2, y2 + 24, ra, { size: 20, align: 'center' });
      text(ctx, ket(1, n), (A.a1[0] + A.a1[1]) / 2, y1 + 24, rc, { size: 20, align: 'center' });
      if (g > 1e-6) {
        const P0 = [A.a2[1] - 30, y2 - 8], P1 = [A.a1[0] + 30, y1 - 8], Cq = [210, Math.min(y1, y2) - 46];
        ctx.save(); ctx.strokeStyle = cp; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(...P0); ctx.quadraticCurveTo(...Cq, ...P1); ctx.stroke(); ctx.restore();
        [[P0, Cq], [P1, Cq]].forEach(([P, Q]) => { const L = Math.hypot(P[0] - Q[0], P[1] - Q[1]); arrow(ctx, P[0] + ((Q[0] - P[0]) / L) * 22, P[1] + ((Q[1] - P[1]) / L) * 22, P[0], P[1], cp, 3); });
        tx(ctx, n === 1 ? '$\\kg$' : `$\\kg\\sqrt{${n}}$`, 210, Math.min(y1, y2) - 52, cp, { size: 20, align: 'center' });
      }
      line(ctx, A.a1[1], y1, A.dr[0], yu, alpha(PAL.ink, 0.5), 2, [5, 6]); line(ctx, A.a1[1], y1, A.dr[0], yd, alpha(PAL.ink, 0.5), 2, [5, 6]);
      line(ctx, A.dr[0], yu, A.dr[1], yu, PAL.ink, 4); line(ctx, A.dr[0], yd, A.dr[1], yd, PAL.ink, 4);
      if (yd - yu > 6) vbracket(ctx, A.br, yu, yd, fq);
      tx(ctx, `$\\sqrt{4\\cdot ${n}\\,\\kg^2 + \\kdelta^2}$ = ${fmt(W, 2)}`, A.br + 20, y0, fq, { size: 19 });
      hits.push({ x: (A.a2[0] + A.a2[1]) / 2, y: y2, r: 22, name: `|2⟩_a|${n - 1}⟩: the atom excited, ${n - 1} photon${n - 1 === 1 ? '' : 's'} in the cavity` },
        { x: (A.a1[0] + A.a1[1]) / 2, y: y1, r: 22, name: `|1⟩_a|${n}⟩: the atom in |1⟩, ${n} photon${n === 1 ? '' : 's'} in the cavity` },
        { x: (A.dr[0] + A.dr[1]) / 2, y: yu, r: 18, name: `the upper dressed state of rung ${n}, +${fmt(W / 2, 2)} μs⁻¹ from the rung's centre` },
        { x: (A.dr[0] + A.dr[1]) / 2, y: yd, r: 18, name: `the lower dressed state of rung ${n}, −${fmt(W / 2, 2)} μs⁻¹ from the rung's centre` });
    }
    text(ctx, '⋮', (A.dr[0] + A.dr[1]) / 2, 100, PAL.muted, { size: 26, align: 'center' });
    /* (b) the same bare levels and their decays */
    line(ctx, B.g[0], YG, B.g[1], YG, PAL.ink, 4); text(ctx, ket(1, 0), (B.g[0] + B.g[1]) / 2, YG + 26, PAL.ink, { size: 20, align: 'center' });
    const bx2 = (B.b2[0] + B.b2[1]) / 2, bx1 = (B.b1[0] + B.b1[1]) / 2, lv = [];
    for (let n = 1; n <= 3; n++) {
      const y2 = Y[n] + (de / 2) * S, y1 = Y[n] - (de / 2) * S; lv[n] = { y2, y1 };
      line(ctx, B.b2[0], y2, B.b2[1], y2, ra, 4); line(ctx, B.b1[0], y1, B.b1[1], y1, rc, 4);
      text(ctx, ket(2, n - 1), bx2, y2 + 24, ra, { size: 18, align: 'center' }); text(ctx, ket(1, n), bx1, y1 + 24, rc, { size: 18, align: 'center' });
    }
    const gnd = { y2: YG, y1: YG };
    for (let n = 1; n <= 3; n++) {
      const lo = n === 1 ? gnd : lv[n - 1], hi = lv[n];
      squiggle(ctx, bx1 + 28, hi.y1 + 34, n === 1 ? B.g[1] - 30 : bx1 + 28, lo.y1 - 6, rt);
      if (n >= 2) squiggle(ctx, bx2 - 28, hi.y2 + 34, bx2 - 28, lo.y2 - 6, rt);
      squiggle(ctx, bx2 + 30, hi.y2 + 34, n === 1 ? B.g[0] + 30 : bx1 - 30, lo.y1 - 6, rt);
      hits.push({ x: bx1 + 28, y: (hi.y1 + lo.y1) / 2, r: 20, name: `cavity loss κ: |1⟩_a|${n}⟩ → |1⟩_a|${n - 1}⟩` },
        { x: (bx2 + (n === 1 ? B.g[0] : bx1)) / 2, y: (hi.y2 + lo.y1) / 2, r: 20, name: `atomic decay γ: |2⟩_a|${n - 1}⟩ → |1⟩_a|${n - 1}⟩` });
      if (n >= 2) hits.push({ x: bx2 - 28, y: (hi.y2 + lo.y2) / 2, r: 20, name: `cavity loss κ: |2⟩_a|${n - 1}⟩ → |2⟩_a|${n - 2}⟩` });
    }
    const gm = [(bx2 + 30 + B.g[0] + 30) / 2, (lv[1].y2 + 34 + YG - 6) / 2], km = [(bx1 + 28 + B.g[1] - 30) / 2, (lv[1].y1 + 34 + YG - 6) / 2];
    tx(ctx, '$\\kgamma$', gm[0] - 26, gm[1] + 14, rt, { size: 24, align: 'right' });
    tx(ctx, '$\\kkappa$', km[0] + 26, km[1] + 14, rt, { size: 24 });
    const r21 = split[1] / Math.max(split[0], 1e-9), r31 = split[2] / Math.max(split[0], 1e-9);
    topline(ctx, g < 1e-6 ? `With $\\kg$ = 0 each pair stays bare, $|\\kdelta|$ = ${fmt(Math.abs(de), 2)} μs⁻¹ apart.`
      : `The pairs split by ${fmt(split[0], 2)}, ${fmt(split[1], 2)} and ${fmt(split[2], 2)} μs⁻¹: ${fmt(r21, 2)} and ${fmt(r31, 2)} times the first${Math.abs(de) < 1e-9 ? ', √2 and √3 on resonance' : ''}.`);
    ro.set(`\\sqrt{4\\kg^2 n + \\kdelta^2}\\Big|_{n=1} = \\sqrt{4 \\cdot ${fmt(g, 2)}^2 + ${de < 0 ? `(${sgnTex(de, 2)})` : fmt(de, 2)}^2} = ${fmt(split[0], 2)}${US}`, '', { form: 'split' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-vacuum-rabi · moving, 2D, two graphs side by side
   The no-jump equations in the sign convention of Eq. (9.110) (the
   populations equal the book's (9.116)–(9.117)):
     ċ₁,₁ = −(κ/2 + iδ)c₁,₁ − igc₂,₀,  ċ₂,₀ = −igc₁,₁ − (γ/2)c₂,₀,  c₂,₀(0) = 1,
   RK4 at h = 0.0025 μs over 0–3 μs. Right: a weak probe at detuning Δ from
   the atom drives the cavity; in steady state
     a ∝ 1/[κ/2 − i(Δ − δ) + g²/(γ/2 − iΔ)],  σ₁₂ ∝ g a/(γ/2 − iΔ),
   |a|² and |σ₁₂|² each scaled to its largest value on Δ −16…16 μs⁻¹.
   Axes fixed: t 0…3 μs, probability 0…1; Δ −16…16 (g ≤ 8, |δ| ≤ 12).
===================================================================== */
(function () {
  const d = sim('sim-vacuum-rabi', 640);
  const T = 3, NT = 1200, cy = cycle(() => T, 1.2);
  let gS = null, kS = null, yS = null, traj = null;
  const reset = () => { traj = null; cy.reset(); };
  gS = ctl(d.controls, { label: '\\kg', cls: 'coupling', key: 'g', min: 0, max: 8, step: 0.05, value: 3, unit: 'μs⁻¹', dec: 2, onInput: reset,
    aria: 'the atom-cavity coupling g, in inverse microseconds', specials: [{ at: () => (kS && yS ? Math.sqrt(kS.v * yS.v) : null), label: 'g² = γκ' }] });
  kS = ctl(d.controls, { label: '\\kkappa', cls: 'rate', key: 'kappa', min: 0.2, max: 30, step: 0.1, value: 2, unit: 'μs⁻¹', dec: 1, onInput: reset,
    aria: 'the cavity loss rate kappa, in inverse microseconds', specials: [{ at: () => (yS && yS.v > 0 ? (gS.v * gS.v) / yS.v : null), label: 'g² = γκ' }] });
  yS = ctl(d.controls, { label: '\\kgamma', cls: 'rate', key: 'gamma', min: 0, max: 4, step: 0.05, value: 1, unit: 'μs⁻¹', dec: 2, onInput: reset,
    aria: 'the atomic decay rate into free space, in inverse microseconds', specials: [{ at: 0, label: 'closed cavity' }] });
  const dS = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -12, max: 12, step: 0.1, value: 0, unit: 'μs⁻¹', dec: 1, onInput: reset,
    aria: 'the detuning of the cavity from the atom, in inverse microseconds', specials: [{ at: 0, label: 'resonance' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const TB = { l: 110, r: 640, t: 160, b: 540 }, SB = { l: 800, r: 1330, t: 160, b: 540 }, NS = 1600;
  function integrate(g, k, y, de) {
    const h = T / NT, p20 = [1], p11 = [0];
    let a = [0, 0], b = [1, 0];           /* c₁,₁ and c₂,₀ as [re, im] */
    const f = (a, b) => [
      [-(k / 2) * a[0] + de * a[1] + g * b[1], -(k / 2) * a[1] - de * a[0] - g * b[0]],
      [g * a[1] - (y / 2) * b[0], -g * a[0] - (y / 2) * b[1]],
    ];
    const add = (u, v, s) => [u[0] + s * v[0], u[1] + s * v[1]];
    for (let i = 1; i <= NT; i++) {
      const k1 = f(a, b), k2 = f(add(a, k1[0], h / 2), add(b, k1[1], h / 2)), k3 = f(add(a, k2[0], h / 2), add(b, k2[1], h / 2)), k4 = f(add(a, k3[0], h), add(b, k3[1], h));
      a = [a[0] + (h / 6) * (k1[0][0] + 2 * k2[0][0] + 2 * k3[0][0] + k4[0][0]), a[1] + (h / 6) * (k1[0][1] + 2 * k2[0][1] + 2 * k3[0][1] + k4[0][1])];
      b = [b[0] + (h / 6) * (k1[1][0] + 2 * k2[1][0] + 2 * k3[1][0] + k4[1][0]), b[1] + (h / 6) * (k1[1][1] + 2 * k2[1][1] + 2 * k3[1][1] + k4[1][1])];
      p11.push(a[0] * a[0] + a[1] * a[1]); p20.push(b[0] * b[0] + b[1] * b[1]);
    }
    /* the probe: D = κ/2 − i(Δ − δ) + g²(γ/2 + iΔ)/(γ²/4 + Δ²) */
    const xs = [], cav = [], atm = [];
    for (let i = 0; i < NS; i++) {
      const D = -16 + (32 * (i + 0.5)) / NS, q = (y * y) / 4 + D * D;
      const re = k / 2 + (g * g * (y / 2)) / q, im = -(D - de) + (g * g * D) / q, m = re * re + im * im;
      xs.push(D); cav.push(1 / m); atm.push((g * g) / (q * m));
    }
    const norm = (v) => { const M = Math.max(...v); return M > 0 ? v.map((x) => x / M) : v; };
    return { p20, p11, xs, cav: norm(cav), atm: g > 1e-6 ? norm(atm) : null };
  }
  const at = (arr, t) => { const x = Math.max(0, Math.min(NT, (t / T) * NT)), i = Math.min(NT - 1, Math.floor(x)); return arr[i] + (arr[i + 1] - arr[i]) * (x - i); };
  const peaks = (v) => { const out = []; for (let i = 1; i < v.length - 1; i++) if (v[i] > 0.12 && v[i] >= v[i - 1] && v[i] > v[i + 1]) out.push(i); return out; };
  function fwhm(xs, v) { let lo = null, hi = null; for (let i = 0; i < v.length; i++) if (v[i] >= 0.5) { if (lo === null) lo = xs[i]; hi = xs[i]; } return lo === null ? 0 : hi - lo; }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const g = gS.v, k = kS.v, y = yS.v, de = dS.v, now = cy.now();
    if (!traj) traj = integrate(g, k, y, de);
    const ra = F.ref('atom'), rc = F.ref('cavity'), tm = C('time'), fq = C('frequency'), am = C('amplitude');
    /* left: the no-jump populations */
    const L = axes(ctx, TB, [0, T], [0, 1], { nx: 6, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 2) });
    tx(ctx, '$\\kt$ (μs)', TB.r, TB.b + 58, tm, { size: 20, align: 'right' });
    text(ctx, 'probability', TB.l, TB.t - 26, PAL.ink, { size: 20, weight: 600 });
    const f20 = (t) => at(traj.p20, t), f11 = (t) => at(traj.p11, t);
    ctx.save(); ctx.globalAlpha *= 0.25; curve(ctx, f20, 0, T, L.X, L.Y, ra, 3, 600); curve(ctx, f11, 0, T, L.X, L.Y, rc, 3, 600); ctx.restore();
    curve(ctx, f20, 0, now, L.X, L.Y, ra, 5, 600); curve(ctx, f11, 0, now, L.X, L.Y, rc, 5, 600);
    line(ctx, L.X(now), TB.t, L.X(now), TB.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, L.X(now), L.Y(f20(now)), ra); dot(ctx, L.X(now), L.Y(f11(now)), rc);
    tx(ctx, '$|\\kctwozero|^2$, atom', TB.r - 190, TB.t - 26, ra, { size: 20, align: 'right' });
    tx(ctx, '$|\\kconeone|^2$, cavity', TB.r, TB.t - 26, rc, { size: 20, align: 'right' });
    hits.push({ x: L.X(now), y: L.Y(f20(now)), r: 16, name: `|c₂,₀|² = ${fmt(f20(now), 3)}: the excitation still in the atom, t = ${fmt(now, 2)} μs` },
      { x: L.X(now), y: L.Y(f11(now)), r: 16, name: `|c₁,₁|² = ${fmt(f11(now), 3)}: the photon in the cavity, t = ${fmt(now, 2)} μs` });
    /* right: the weak-probe spectrum */
    const R = axes(ctx, SB, [-16, 16], [0, 1], { nx: 8, ny: 4, fy: (v) => fmt(v, 2) });
    tx(ctx, '$\\Delta$ (μs⁻¹)', SB.r, SB.b + 58, fq, { size: 20, align: 'right' });
    text(ctx, 'probe excitation, scaled', SB.l, SB.t - 26, PAL.ink, { size: 20, weight: 600 });
    const xs = traj.xs, idx = (D) => (D + 16) / 32 * NS - 0.5;
    const sample = (arr) => (D) => { const x = Math.max(0, Math.min(NS - 1, idx(D))), i = Math.min(NS - 2, Math.floor(x)); return arr[i] + (arr[i + 1] - arr[i]) * (x - i); };
    line(ctx, R.X(0), SB.t, R.X(0), SB.b, alpha(ra, 0.6), 2, [10, 10]);
    if (Math.abs(de) > 1e-9) line(ctx, R.X(de), SB.t, R.X(de), SB.b, alpha(rc, 0.6), 2, [10, 10]);
    curve(ctx, sample(traj.cav), -16, 16, R.X, R.Y, rc, 4, NS);
    if (traj.atm) curve(ctx, sample(traj.atm), -16, 16, R.X, R.Y, ra, 4, NS);
    text(ctx, 'cavity', SB.r, SB.t - 26, rc, { size: 20, weight: 600, align: 'right' });
    if (traj.atm) text(ctx, 'atom', SB.r - 100, SB.t - 26, ra, { size: 20, weight: 600, align: 'right' });
    hits.push({ x: R.X(0), y: SB.b - 16, r: 16, name: 'Δ = 0: the bare atomic resonance' });
    if (Math.abs(de) > 1e-9) hits.push({ x: R.X(de), y: SB.b - 16, r: 16, name: `Δ = δ = ${sgn(de, 1)} μs⁻¹: the bare cavity resonance` });
    const pk = traj.atm ? peaks(traj.atm) : [];
    const two = pk.length >= 2, sep = two ? xs[pk[pk.length - 1]] - xs[pk[0]] : 0;
    if (two) {
      const yb = R.Y(0.45), x1 = R.X(xs[pk[0]]), x2 = R.X(xs[pk[pk.length - 1]]);
      hbracket(ctx, x1, x2, yb, C('coupling'));
      hits.push({ x: (x1 + x2) / 2, y: yb, r: 20, name: `the two peaks, ${fmt(sep, 2)} μs⁻¹ apart` });
      pk.forEach((i) => hits.push({ x: R.X(xs[i]), y: R.Y(traj.atm[i]), r: 16, name: `a dressed state of the lowest pair, at Δ = ${sgn(xs[i], 2)} μs⁻¹` }));
    }
    const geff = y + (k * g * g) / ((k * k) / 4 + de * de), purcell = g < k / 2, swings = g > (k + y) / 4, W = Math.sqrt(4 * g * g + de * de);
    const width = traj.atm ? fwhm(xs, traj.atm) : 0;
    topline(ctx, g < 1e-6 ? `With $\\kg$ = 0 the atom ignores the cavity and decays at $\\kgamma$ = ${fmt(y, 2)} μs⁻¹.`
      : swings ? `The excitation swings between atom and cavity, and the probe finds the two dressed states $\\sqrt{4\\kg^2 + \\kdelta^2}$ = ${fmt(W, 2)} μs⁻¹ apart.`
      : !purcell ? `The excitation decays before it can swing back: $\\kg$ = ${fmt(g, 2)} is below $(\\kkappa + \\kgamma)/4$ = ${fmt((k + y) / 4, 2)} μs⁻¹.`
      : y < 1e-9 ? `With no free-space decay the atom decays only through the cavity, at $\\kgammaeff$ = ${fmt(geff, 3)} μs⁻¹.`
      : `The excitation leaks away in one line ${fmt(width, 2)} μs⁻¹ wide, ${fmt(geff / y, 2)} times the atom's own $\\kgamma$ = ${fmt(y, 2)}.`);
    if (purcell) ro.set(`\\kgammaeff = \\kgamma + \\frac{\\kkappa\\kg^2}{\\kkappa^2/4 + \\kdelta^2} = ${fmt(y, 2)} + \\frac{${fmt(k, 1)} \\cdot ${fmt(g, 2)}^2}{${fmt(k, 1)}^2/4 + ${de < 0 ? `(${sgnTex(de, 1)})` : fmt(de, 1)}^2} = ${fmt(geff, 3)}${US}`, '', { form: 'purcell' });
    else ro.set(`\\sqrt{4\\kg^2 + \\kdelta^2} = ${fmt(W, 2)}${US} \\quad \\text{against} \\quad \\frac{\\kkappa + \\kgamma}{2} = ${fmt((k + y) / 2, 2)}${US}`, '', { form: 'split' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.6), draw });
})();
};
