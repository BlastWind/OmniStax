/* Figures for section 11.4 Atomic interactions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, text, label, topline, axes, pinned, hover, hbracket, arrow, dot } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a curve clipped to its box and broken where it jumps (a divergence) or leaves the reals */
function piece(ctx, box, f, t0, t1, X, Y, color, w, n = 600, dash) {
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); let on = false, py = 0;
  const span = box.b - box.t;
  for (let i = 0; i <= n; i++) {
    const t = t0 + ((t1 - t0) * i) / n, v = f(t), y = Y(v);
    if (!Number.isFinite(y) || Math.abs(y - (box.t + box.b) / 2) > 40 * span) { on = false; continue; }
    if (on && Math.abs(y - py) > 3 * span) on = false;
    if (on) ctx.lineTo(X(t), y); else ctx.moveTo(X(t), y);
    on = true; py = y;
  }
  ctx.stroke(); ctx.restore();
}
const sgn = (v, d) => (v > 0 ? '+' : '') + fmt(v, d);

/* =====================================================================
   FIGURE 11.5 · sim-regions · still, graph alone
   U(r) in units of ħ²/2μr₀²: the tail −(r₀/r)⁶ of Eq. (11.42) on a
   repulsive core (s/r)¹², s = 0.35 r₀. Axes fixed: log₁₀(r/r₀) −1…3,
   U −2…1. Region A: r < 1/k; region B: r > r₀; overlap shaded.
===================================================================== */
(function () {
  const d = sim('sim-regions', 600);
  const Lk = ctl(d.controls, { label: '1/\\kkmag', cls: 'length', key: 'invk', min: 1, max: 100, step: 0.5, value: 20, unit: 'r₀', dec: 1,
    aria: 'one over the relative wavevector, in units of r zero', specials: [{ at: 1, label: 'kr₀ = 1, the regions no longer overlap' }] });
  const ro = F.readout(d);
  const G = { l: 150, r: 1300, t: 150, b: 500 };
  const U = (x) => -Math.pow(x, -6) + Math.pow(0.35 / x, 12);
  const hits = []; hover(d.stage, () => hits, d.c);
  const wavy = (ctx, x, y0, y1, color) => {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.beginPath();
    for (let y = y0; y <= y1; y += 2) { const xx = x + 7 * Math.sin((y - y0) / 9); if (y === y0) ctx.moveTo(xx, y); else ctx.lineTo(xx, y); }
    ctx.stroke(); ctx.restore();
  };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const L = Lk.v, cL = C('length'), cE = C('energy'), cK = C('wavevector');
    const { X, Y } = axes(ctx, G, [-1, 3], [-2, 1], { nx: 4, ny: 3, fx: (v) => ['0.1', '1', '10', '100', '1000'][Math.round(v + 1)],
      fy: (v) => fmt(v, 0), xl: 'r / r₀', xc: cL, yl: 'U(r) / (ℏ²/2μr₀²)', yc: cE });
    const xr0 = X(0), xk = X(Math.log10(L));
    if (L > 1) { ctx.save(); ctx.fillStyle = alpha(cL, 0.13); ctx.fillRect(xr0, G.t, xk - xr0, G.b - G.t); ctx.restore(); }
    piece(ctx, G, (lx) => U(Math.pow(10, lx)), -1, 3, X, Y, cE, 5, 800);
    wavy(ctx, xr0, G.t - 14, G.b - 6, cL);
    wavy(ctx, xk, G.t + 6, G.b + 4, cK);
    /* region B runs out from r₀ along the top; region A runs in from 1/k along the bottom */
    const yB = G.t + 34, yA = G.b - 40;
    arrow(ctx, xr0 + 16, yB, G.r - 6, yB, PAL.ink, 4);
    text(ctx, 'B: r > r_0', (xr0 + G.r) / 2 + 60, yB - 22, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, xk - 16, yA, G.l + 6, yA, PAL.ink, 4);
    text(ctx, 'A: kr ≪ 1', (G.l + Math.min(xk, xr0)) / 2, yA - 22, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'r_0', xr0 + 14, G.b + 52, cL, { size: 24, weight: 600 });
    text(ctx, '1/k', xk + (L > 60 ? -60 : 14), Y(-1.25), cK, { size: 24, weight: 600, bg: PAL.panel });
    hits.push({ x: xr0, y: G.t + 60, r: 18, name: 'r₀: region B, where the potential is negligible, begins here' },
      { x: xk, y: Y(-1), r: 18, name: `1/k = ${fmt(L, 1)} r₀: region A, where the energy term is negligible, ends here` },
      { x: X(Math.log10(1.6)), y: Y(U(1.6)), r: 16, name: `the van der Waals tail, U = −(r₀/r)⁶ in units of ħ²/2μr₀²` });
    if (L > 1) hits.push({ x: (xr0 + xk) / 2, y: Y(0.55), r: 30, name: `the overlap r₀ < r < 1/k, where the two solutions are matched` });
    const at1 = L <= 1 + 1e-9;
    topline(ctx, at1 ? 'At kr₀ = 1 the window has closed: no separation lies in both regions.'
      : `The regions overlap from r₀ out to 1/k = ${fmt(L, 1)} r₀, a factor of ${fmt(L, L < 10 ? 1 : 0)} in r where both solutions hold.`);
    ro.set(at1 ? `\\krzero = 1/\\kkmag, \\quad \\kkmag\\krzero = 1`
      : `\\krzero < r < 1/\\kkmag = ${fmt(L, 1)}\\,\\krzero, \\quad \\kkmag\\krzero = ${fmt(1 / L, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.6 + 11.7 · sim-square-well · still, scene above graph
   Zero-energy u = rR₀ for a square potential of radius r₀ (lengths in
   r₀), s = √(2μ|V₀|)r₀/ħ: attractive u = sin(sx)/s inside, a = 1 − tan s/s;
   repulsive sinh, tanh; hard sphere u = 0 inside, a = 1. Outside u is
   continued as its tangent line, whose root is a. Scene x −3…6, u scaled
   to its largest |u| on [0, 6]. Graph: s 0…9, a/r₀ −5…5 (fixed; the
   divergences at s = (n + ½)π are clipped and the marker pinned).
===================================================================== */
(function () {
  const d = sim('sim-square-well', 880);
  const SP = [0.5, 1.5, 2.5].map((k) => ({ at: k * Math.PI, label: 'a bound state enters' }));
  const pot = choice(d.controls, { label: '\\text{potential}', key: 'potential', value: 'att', aria: 'the potential inside r zero',
    options: [{ value: 'hard', label: 'hard sphere' }, { value: 'rep', label: 'repulsive' }, { value: 'att', label: 'attractive' }],
    onInput: (v) => { s.mark(v === 'att' ? SP : []); s.show(v !== 'hard'); } });
  const s = ctl(d.controls, { label: '\\sqrt{2\\kmured|\\kVzero|}\\,\\krzero/\\hbar', cls: '', key: 'strength', min: 0, max: 9, step: 0.01, value: 1.2, unit: '', dec: 2,
    aria: 'the strength of the potential, square root of two mu times V zero, times r zero over h bar', specials: SP });
  const ro = F.readout(d);
  const S = { l: 150, r: 1300, t: 120, b: 420 }, G = { l: 150, r: 1300, t: 540, b: 790 };
  const aOf = (kind, q) => kind === 'hard' ? 1 : q < 1e-9 ? 0 : kind === 'rep' ? 1 - Math.tanh(q) / q : 1 - Math.tan(q) / q;
  /* u inside and its value and slope at r₀ */
  const inside = (kind, q, x) => kind === 'hard' ? 0 : q < 1e-9 ? x : kind === 'rep' ? Math.sinh(q * x) / q : Math.sin(q * x) / q;
  const edge = (kind, q) => kind === 'hard' ? [0, 1] : q < 1e-9 ? [1, 1] : kind === 'rep' ? [Math.sinh(q) / q, Math.cosh(q)] : [Math.sin(q) / q, Math.cos(q)];
  const hits = []; hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const kind = pot.value, q = kind === 'hard' ? 0 : s.v, cL = C('length'), cE = C('energy'), cS = C('state');
    const [u1, du] = edge(kind, q), uOf = (x) => (x <= 1 ? inside(kind, q, x) : u1 + du * (x - 1));
    const flat = Math.abs(du) < 1e-6 * Math.max(1, Math.abs(u1));
    const a = flat ? (u1 * du >= 0 ? -Infinity : Infinity) : 1 - u1 / du;
    let M = 0; for (let i = 0; i <= 300; i++) M = Math.max(M, Math.abs(uOf((6 * i) / 300)));
    const u = (x) => uOf(x) / M;

    /* scene: the potential, u, and the asymptote back to its root */
    const X = (x) => S.l + ((x + 3) / 9) * (S.r - S.l), Y = (v) => (S.t + S.b) / 2 - v * (S.b - S.t) * 0.42, y0 = Y(0);
    line(ctx, S.l, y0, S.r, y0, PAL.muted, 2); line(ctx, X(0), S.t, X(0), S.b, PAL.muted, 2);
    text(ctx, 'r', S.r, y0 + 30, cL, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'u = rR_0', X(0) - 14, S.t + 4, cS, { size: 22, weight: 600, align: 'right' });
    const depth = kind === 'hard' ? 0 : Math.min(0.92, 0.12 + (0.8 * q) / 9);
    ctx.save(); ctx.fillStyle = alpha(cE, 0.12); ctx.strokeStyle = cE; ctx.lineWidth = 4;
    if (kind === 'hard') { const yt = Y(0.85); ctx.fillRect(X(0), yt, X(1) - X(0), y0 - yt); ctx.strokeRect(X(0), yt, X(1) - X(0), y0 - yt); }
    else if (q > 1e-9) { const yy = kind === 'rep' ? Y(depth) : Y(-depth); ctx.fillRect(X(0), Math.min(yy, y0), X(1) - X(0), Math.abs(yy - y0)); ctx.strokeRect(X(0), Math.min(yy, y0), X(1) - X(0), Math.abs(yy - y0)); }
    ctx.restore();
    if (kind === 'hard') text(ctx, '∞', (X(0) + X(1)) / 2, (S.t + y0) / 2, cE, { size: 26, weight: 600, align: 'center' });
    hits.push({ x: (X(0) + X(1)) / 2, y: kind === 'att' ? Y(-depth / 2) : (S.t + y0) / 2, r: 30,
      name: kind === 'hard' ? 'the hard sphere: an infinite wall inside r₀' : kind === 'rep' ? 'the repulsive barrier of height |V₀|, inside r₀' : 'the attractive well of depth |V₀|, inside r₀' });
    if (Number.isFinite(a)) {
      const xa = Math.max(-3, Math.min(6, a));
      ctx.save(); ctx.beginPath(); ctx.rect(S.l, S.t, S.r - S.l, S.b - S.t); ctx.clip();
      line(ctx, X(xa), Y(du * (xa - a) / M), X(6), Y(du * (6 - a) / M), alpha(cS, 0.75), 3, [10, 10]); ctx.restore();
    } else line(ctx, X(-3), Y(u1 / M), X(6), Y(u1 / M), alpha(cS, 0.75), 3, [10, 10]);
    piece(ctx, S, u, 0, 6, X, Y, cS, 5, 900);
    line(ctx, X(1), y0 - 10, X(1), y0 + 10, cL, 3);
    text(ctx, 'r_0', X(1) + 8, y0 + 30, cL, { size: 24, weight: 600 });
    if (Number.isFinite(a) && a >= -3 && a <= 6) {
      arrow(ctx, X(a), y0 + 70, X(a), y0 + 10, cL, 4);
      text(ctx, 'a', X(a), y0 + 92, cL, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x: X(a), y: y0, r: 16, name: `the asymptote crosses the axis at a = ${fmt(a, 2)} r₀` });
    } else {
      const right = a > 0;
      text(ctx, Number.isFinite(a) ? `a = ${fmt(a, 1)} r₀ ${right ? '→' : ''}` : 'a → ±∞', right ? S.r - 8 : S.l + 8, y0 + 60, cL,
        { size: 22, weight: 600, align: right ? 'right' : 'left', bg: PAL.panel });
    }

    /* graph: a/r₀ against the strength, both branches; the hard sphere's a = r₀ dashed */
    const { X: GX, Y: GY } = axes(ctx, G, [0, 9], [-5, 5], { nx: 9, ny: 5, fy: (v) => fmt(v, 0),
      xl: '√(2μ|V₀|) r₀/ℏ', yl: 'a / r₀', yc: cL });
    line(ctx, G.l, GY(1), G.r, GY(1), alpha(cL, 0.6), 3, [10, 10]);
    text(ctx, 'hard sphere, a = r₀', G.l + 12, GY(1) - 18, cL, { size: 17, bg: PAL.panel });
    SP.forEach((p, i) => { line(ctx, GX(p.at), G.t, GX(p.at), G.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
      hits.push({ x: GX(p.at), y: G.t + 20, r: 14, name: `bound state ${i + 1} enters the attractive well` }); });
    piece(ctx, G, (x) => aOf('rep', x), 0, 9, GX, GY, kind === 'rep' ? cL : alpha(cL, 0.3), kind === 'rep' ? 5 : 3, 400);
    piece(ctx, G, (x) => aOf('att', x), 0, 9, GX, GY, kind === 'att' ? cL : alpha(cL, 0.3), kind === 'att' ? 5 : 3, 1800);
    text(ctx, 'repulsive', GX(6.3), GY(aOf('rep', 6.3)) + 26, kind === 'rep' ? cL : alpha(cL, 0.55), { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, 'attractive', GX(0.5), GY(-3.6), kind === 'att' ? cL : alpha(cL, 0.55), { size: 17, align: 'left', bg: PAL.panel });
    const nb = kind === 'att' ? Math.floor(q / Math.PI + 0.5) : 0;
    if (kind === 'hard') { dot(ctx, G.r, GY(1), cL); hits.push({ x: G.r, y: GY(1), r: 14, name: 'the hard sphere, a = r₀' }); }
    else if (Number.isFinite(a)) { const p = pinned(ctx, G, GX, GY, q, a, cL, fmt(a, 1)); hits.push({ x: p.x, y: p.y, r: 14, name: `strength ${fmt(q, 2)}: a = ${fmt(a, 2)} r₀` }); }

    /* headline and readout */
    const bs = nb === 1 ? 'one bound state' : `${['no', 'one', 'two', 'three'][nb]} bound states`;
    topline(ctx, kind === 'hard' ? 'The hard sphere: the wavefunction vanishes at r₀, so the asymptote meets the axis at a = r₀.'
      : q < 1e-9 ? 'With no potential the wavefunction is the straight line u = r, and a = 0.'
      : !Number.isFinite(a) ? `A bound state is just entering the well: the asymptote runs flat and the scattering length diverges.`
      : kind === 'rep' ? `A barrier of strength ${fmt(q, 2)} gives a = ${fmt(a, 2)} r₀, positive but less than r₀.`
      : `With ${bs} in the well, a = ${fmt(a, 2)} r₀, ${a < 0 ? 'negative: the asymptote meets the axis behind the origin' : 'positive'}.`);
    if (kind === 'hard') ro.set(`\\kascat = a_H = \\krzero`, '', { form: 'hard' });
    else if (!Number.isFinite(a)) ro.set(`\\kascat = \\krzero\\left(1 - \\frac{\\tan K\\krzero}{K\\krzero}\\right) \\to \\pm\\infty`,
      `$K\\krzero = ${fmt(q, 3)}$, an odd multiple of $\\pi/2$`, { form: 'att' });
    else if (kind === 'rep') ro.set(`\\kascat = \\krzero\\left(1 - \\frac{\\tanh \\kappa\\krzero}{\\kappa\\krzero}\\right) = \\krzero\\left(1 - \\frac{\\tanh ${fmt(q, 2)}}{${fmt(q, 2)}}\\right) = ${fmt(a, 3)}\\,\\krzero`,
      `$\\kappa = \\sqrt{2\\kmured|\\kVzero|}/\\hbar$`, { form: 'rep' });
    else ro.set(`\\kascat = \\krzero\\left(1 - \\frac{\\tan K\\krzero}{K\\krzero}\\right) = \\krzero\\left(1 - \\frac{\\tan ${fmt(q, 2)}}{${fmt(q, 2)}}\\right) = ${fmt(a, 3)}\\,\\krzero`,
      `$K = \\sqrt{2\\kmured|\\kVzero|}/\\hbar$; ${bs}`, { form: 'att' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.8 + 11.9 · sim-feshbach · still, scene beside graph
   E*_res = μ_B(B₀ − B), Δ = −|Δ| (plan: the sign that puts the bound
   state below threshold where a is large and positive); a/a_bg = 1 + Δ/E*
   = 1 + ΔB/(B − B₀) with ΔB = |Δ|/μ_B, μ_B/k_B = 67.17 µK/G. Scene: Morse
   wells, energies in scene units, E* magnified (±2015 µK ↔ ±0.3).
   Graph: B − B₀ −30…30 G, a/a_bg −4…6 (fixed; the divergence clipped).
===================================================================== */
(function () {
  const d = sim('sim-feshbach', 640);
  const MUB = 67.1714;
  const D = ctl(d.controls, { label: '|\\kDeltaFesh|', cls: 'energy', key: 'Delta', min: 100, max: 1000, step: 10, value: 500, unit: 'µK', dec: 0,
    aria: 'the strength of the resonance, in microkelvin', onInput: () => b.refresh() });
  const b = ctl(d.controls, { label: 'B - B_0', cls: 'magnetic-field', key: 'B', min: -30, max: 30, step: 0.1, value: 15, unit: 'G', dec: 1,
    aria: 'the magnetic field minus the resonance field, in gauss',
    specials: [{ at: 0, label: 'resonance' }, { at: () => -D.v / MUB, label: 'a = 0' }] });
  const ro = F.readout(d);
  const S = { l: 90, r: 640, t: 120, b: 560 }, G = { l: 800, r: 1320, t: 140, b: 520 };
  const morse = (D0, re, w, top) => (r) => top + D0 * ((1 - Math.exp(-(r - re) / w)) ** 2 - 1);
  const LV = [0.95, 0.85, 0.73, 0.6];   /* closed-channel bound states, depths below its asymptote; the last is resonant */
  const hits = []; hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const bv = b.v, dB = D.v / MUB, Es = MUB * -bv, cL = C('length'), cE = C('energy'), cB = C('magnetic-field');
    const ro_ = F.ref('open-channel'), rc = F.ref('closed-channel');
    const atRes = Math.abs(bv) < 1e-9, aa = atRes ? NaN : 1 + dB / bv;

    /* the scene */
    const SX = (r) => S.l + r * (S.r - S.l), SY = (e) => S.t + ((1.1 - e) / 2.2) * (S.b - S.t);
    const eps = (0.3 * Es) / 2015, top = LV[3] + eps;
    const Uo = morse(1.0, 0.2, 0.08, 0), Uc = morse(1.0, 0.24, 0.07, top);
    line(ctx, S.l, S.t, S.l, S.b, PAL.muted, 2);
    text(ctx, 'Energy', S.l - 14, S.t - 12, cE, { size: 20, weight: 600 });
    text(ctx, 'r', S.r, SY(0) + 28, cL, { size: 22, weight: 600, align: 'right' });
    line(ctx, S.l, SY(0), S.r, SY(0), PAL.muted, 2, [10, 10]);
    text(ctx, 'threshold', S.r - 6, SY(0) - 16, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });
    piece(ctx, S, (r) => SY(Uo(r)) , 0.05, 1, SX, (y) => y, ro_, 5, 400);
    piece(ctx, S, (r) => SY(Uc(r)), 0.05, 1, SX, (y) => y, rc, 5, 400);
    LV.forEach((dep, i) => {
      const e = top - dep, xs = [];
      for (let k = 0; k <= 800; k++) { const r = 0.05 + (0.95 * k) / 800; if (Uc(r) <= e) xs.push(r); }
      if (!xs.length) return;
      const res = i === LV.length - 1;
      line(ctx, SX(xs[0]), SY(e), SX(xs[xs.length - 1]), SY(e), res ? rc : alpha(rc, 0.7), res ? 5 : 3, res ? undefined : [8, 6]);
      if (res) hits.push({ x: SX((xs[0] + xs[xs.length - 1]) / 2), y: SY(e), r: 18,
        name: `the closed channel's bound state nearest threshold, E*_res = ${sgn(Es, 0)} µK` });
    });
    text(ctx, 'U_o(r)', SX(0.66), SY(Uo(0.66)) + 30, ro_, { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, 'U_c(r)', SX(0.62), SY(Uc(0.62)) - 24, rc, { size: 22, weight: 600, bg: PAL.panel });
    hits.push({ x: SX(0.45), y: SY(Uo(0.45)), r: 16, name: 'the open channel, the atoms’ initial internal state' },
      { x: SX(0.45), y: SY(Uc(0.45)), r: 16, name: 'the closed channel, moved by the magnetic field' });

    /* the graph: a/a_bg against B − B₀ */
    const { X, Y } = axes(ctx, G, [-30, 30], [-4, 6], { nx: 6, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
      xl: 'B − B₀ (G)', xc: cB, yl: 'a / a_{bg}', yc: cL });
    line(ctx, G.l, Y(1), G.r, Y(1), alpha(cL, 0.6), 3, [10, 10]);
    text(ctx, 'a_{bg}', G.l + 10, Y(1) - 16, cL, { size: 17, bg: PAL.panel });
    line(ctx, X(0), G.t, X(0), G.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'B_0', X(0) - 10, G.t + 14, cB, { size: 20, weight: 600, align: 'right' });
    piece(ctx, G, (x) => 1 + dB / x, -30, -1e-6, X, Y, cL, 5, 600);
    piece(ctx, G, (x) => 1 + dB / x, 1e-6, 30, X, Y, cL, 5, 600);
    if (atRes) { line(ctx, X(0), G.t, X(0), G.b, alpha(cL, 0.8), 4); }
    else { const p = pinned(ctx, G, X, Y, bv, aa, cL, fmt(aa, 1)); hits.push({ x: p.x, y: p.y, r: 14, name: `B − B₀ = ${sgn(bv, 1)} G: a = ${fmt(aa, 2)} a_bg` }); }
    hits.push({ x: X(-dB), y: Y(0), r: 14, name: `B₀ − ΔB = B₀ − ${fmt(dB, 2)} G: a = 0` });

    /* headline and readout */
    const zero = Math.abs(aa) < 1e-6;
    topline(ctx, atRes ? 'The bound state sits on the threshold and the scattering length diverges.'
      : zero ? `At B₀ − ΔB the scattering length vanishes: the atoms do not interact at all.`
      : `The closed channel's bound state lies ${fmt(Math.abs(Es), 0)} µK ${Es < 0 ? 'below' : 'above'} threshold: $\\kascat$ = ${fmt(aa, 2)} $\\kabg$${Math.abs(aa) > 3 ? (aa > 0 ? ', large and positive' : ', large and negative') : ''}.`);
    ro.set(atRes ? `\\kascat = \\kabg\\left(1 + \\frac{\\kDeltaFesh}{\\kEres}\\right) \\to \\pm\\infty, \\quad \\kEres = 0`
      : `\\kascat = \\kabg\\left(1 + \\frac{\\kDeltaFesh}{\\kEres}\\right) = \\kabg\\left(1 + \\frac{-${fmt(D.v, 0)}\\ \\mu\\text{K}}{${sgn(Es, 0)}\\ \\mu\\text{K}}\\right) = ${fmt(aa, 2)}\\,\\kabg`,
      `$\\kEres = \\kmuB(B_0 - B)$ and $\\Delta B = |\\kDeltaFesh|/\\kmuB = ${fmt(dB, 2)}$ G`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-thomas-fermi · still, graph alone
   Ground state of Eq. (11.134) in an isotropic trap, lengths in a_t,
   energies in ħω_t: −½∇²φ + ½r²φ + gφ³ = μφ, g = 4πNa/a_t, ∫φ² = 1.
   Radial u = rφ on 400 points to r = 10, backward-Euler imaginary time
   with the density lagged, warm-started. Axes fixed: r/a_t −8…8, n/n(0)
   0…1. TF: μ = ½(15Na/a_t)^{2/5}, R = (15Na/a_t)^{1/5}; ξ = 1/√(8π n₀ a).
===================================================================== */
(function () {
  const d = sim('sim-thomas-fermi', 600);
  const lc = ctl(d.controls, { label: '\\log_{10}(N\\kascat/\\kat)', cls: '', key: 'Na', min: -2, max: 3, step: 0.01, value: 2, unit: '', dec: 2,
    aria: 'the base ten logarithm of N times a over a t', detents: [-2, -1, 0, 1, 2, 3] });
  const ro = F.readout(d);
  const G = { l: 150, r: 1300, t: 130, b: 500 };
  const M = 400, RM = 10, h = RM / (M + 1), rr = Float64Array.from({ length: M }, (_, i) => (i + 1) * h);
  let u = Float64Array.from(rr, (x) => x * Math.exp(-x * x / 2)), solvedFor = NaN, muGP = 1.5;
  const A = new Float64Array(M), cp = new Float64Array(M), dp = new Float64Array(M);
  const norm = (v) => { let s = 0; for (let i = 0; i < M; i++) s += v[i] * v[i]; s = Math.sqrt(4 * Math.PI * s * h); for (let i = 0; i < M; i++) v[i] /= s; };
  norm(u);
  function solve(g) {
    const dt = 0.2, off = -dt / (2 * h * h);
    for (let it = 0; it < 4000; it++) {
      for (let i = 0; i < M; i++) A[i] = 1 + dt * (1 / (h * h) + 0.5 * rr[i] * rr[i] + (g * u[i] * u[i]) / (rr[i] * rr[i]));
      cp[0] = off / A[0]; dp[0] = u[0] / A[0];
      for (let i = 1; i < M; i++) { const m = A[i] - off * cp[i - 1]; cp[i] = off / m; dp[i] = (u[i] - off * dp[i - 1]) / m; }
      const nu = new Float64Array(M); nu[M - 1] = dp[M - 1];
      for (let i = M - 2; i >= 0; i--) nu[i] = dp[i] - cp[i] * nu[i + 1];
      norm(nu);
      let ch = 0; for (let i = 0; i < M; i++) ch = Math.max(ch, Math.abs(nu[i] - u[i]));
      u = nu; if (ch < 1e-9) break;
    }
    let K = 0, V = 0, I = 0;
    for (let i = 0; i < M; i++) { const up = ((i + 1 < M ? u[i + 1] : 0) - (i ? u[i - 1] : 0)) / (2 * h); K += 0.5 * up * up; V += 0.5 * rr[i] * rr[i] * u[i] * u[i]; I += u[i] ** 4 / (rr[i] * rr[i]); }
    muGP = 4 * Math.PI * h * (K + V + g * I);
  }
  /* φ² at radius x, by linear interpolation of u/r; φ(0)² from the first point */
  const phi2 = (x) => { x = Math.abs(x); if (x <= h) { const p = u[0] / h; return p * p; } const k = x / h - 1, i = Math.floor(k), f = k - i; if (i >= M - 1) return 0; const p = (u[i] * (1 - f) + u[i + 1] * f) / x; return p * p; };
  const hits = []; hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const chi = Math.pow(10, lc.v), g = 4 * Math.PI * chi;
    if (chi !== solvedFor) { solve(g); solvedFor = chi; }
    const n0 = phi2(0), R = Math.pow(15 * chi, 0.2), muTF = 0.5 * Math.pow(15 * chi, 0.4), xi = 1 / Math.sqrt(8 * Math.PI * chi * n0);
    const cN = C('density'), cL = C('length'), cE = C('energy');
    const { X, Y } = axes(ctx, G, [-8, 8], [0, 1], { nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2),
      xl: 'r / a_t', xc: cL, yl: 'n(r) / n(0)', yc: cN });
    piece(ctx, G, (x) => Math.exp(-x * x), -8, 8, X, Y, alpha(PAL.ink, 0.6), 3, 400, [10, 10]);
    piece(ctx, G, (x) => Math.max(0, 1 - (x * x) / (R * R)), -8, 8, X, Y, alpha(PAL.ink, 0.6), 3, 800, [3, 7]);
    piece(ctx, G, (x) => phi2(x) / n0, -8, 8, X, Y, cN, 5, 800);
    /* the Thomas-Fermi radius, and the healing length at the edge where it is small beside R */
    if (R < 8 && chi >= 1) {
      [-R, R].forEach((x) => line(ctx, X(x), G.b - 12, X(x), G.b + 12, cL, 3));
      text(ctx, 'R', X(R) + 10, G.b - 18, cL, { size: 22, weight: 600, bg: PAL.panel });
      hits.push({ x: X(R), y: G.b, r: 14, name: `the Thomas-Fermi radius R = a_t(15Na/a_t)^{1/5} = ${fmt(R, 2)} a_t` });
    }
    if (chi >= 30 && R < 8) {
      const y = Y(0.16);
      hbracket(ctx, X(R - xi), X(R), y, cL);
      text(ctx, 'ξ', X(R) + 12, y, cL, { size: 24, weight: 600, bg: PAL.panel });
      hits.push({ x: X(R - xi / 2), y, r: 16, name: `the healing length ξ = ${fmt(xi, 2)} a_t` });
    }
    const LX = G.l + 20;
    line(ctx, LX, G.t + 18, LX + 44, G.t + 18, cN, 5); text(ctx, 'ground state, (11.134)', LX + 56, G.t + 18, PAL.ink, { size: 17 });
    line(ctx, LX, G.t + 46, LX + 44, G.t + 46, alpha(PAL.ink, 0.6), 3, [10, 10]); text(ctx, 'no interactions, (11.126)', LX + 56, G.t + 46, PAL.ink, { size: 17 });
    line(ctx, LX, G.t + 74, LX + 44, G.t + 74, alpha(PAL.ink, 0.6), 3, [3, 7]); text(ctx, 'Thomas-Fermi, (11.136)', LX + 56, G.t + 74, PAL.ink, { size: 17 });
    hits.push({ x: X(0), y: Y(1), r: 14, name: `the centre: n(0) = ${fmt(n0 * 1000, 3)} × 10⁻³ N/a_t³` });

    const cs = chi < 1 ? fmt(chi, chi < 0.1 ? 3 : 2) : fmt(chi, chi < 10 ? 1 : 0);
    topline(ctx, chi < 0.3 ? `At $N\\kascat/\\kat$ = ${cs} the interactions barely matter: the condensate is the oscillator's Gaussian, $\\kmuchem$ = ${fmt(muGP, 2)} $\\hbar\\komegat$.`
      : chi < 30 ? `At $N\\kascat/\\kat$ = ${cs} the condensate lies between the Gaussian and the parabola, $\\kmuchem$ = ${fmt(muGP, 2)} $\\hbar\\komegat$.`
      : `At $N\\kascat/\\kat$ = ${cs} the condensate fills the parabola out to R = ${fmt(R, 2)} $\\kat$, rounded at its edge over $\\kxiheal$ = ${fmt(xi, 2)} $\\kat$.`);
    ro.set(`\\kmuchem = \\frac{\\hbar\\komegat}{2}\\left(\\frac{15N\\kascat}{\\kat}\\right)^{2/5} = \\frac{\\hbar\\komegat}{2}(${fmt(15 * chi, 15 * chi < 10 ? 2 : 0)})^{2/5} = ${fmt(muTF, 2)}\\,\\hbar\\komegat`,
      `$R = \\kat(15N\\kascat/\\kat)^{1/5} = ${fmt(R, 2)}\\,\\kat$; the full ground state has $\\kmuchem = ${fmt(muGP, 2)}\\,\\hbar\\komegat$ and $\\kxiheal = ${fmt(xi, 2)}\\,\\kat$`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
