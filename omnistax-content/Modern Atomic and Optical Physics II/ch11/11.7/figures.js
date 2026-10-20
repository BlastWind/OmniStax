/* Figures for section 11.7 Higher-order coherence of atomic matter waves. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.7'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, hover, readout, arrow, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

/* The ground state of Eq. (11.168) + Eq. (11.173) in the number basis |n_L, N − n_L⟩, energies in units of t
   (t real): diagonal u[k(k − 1) + (N − k)(N − k − 1)], off-diagonal −√((k + 1)(N − k)). The lowest eigenvalue
   by Sturm bisection, its vector by inverse iteration from just below it (H − σ is then positive definite,
   so the tridiagonal solve needs no pivoting). Returns c_k ≥ 0. */
function ground(N, u) {
  const n = N + 1, d = [], e = [];
  for (let k = 0; k <= N; k++) d.push(u * (k * (k - 1) + (N - k) * (N - k - 1)));
  for (let k = 0; k < N; k++) e.push(-Math.sqrt((k + 1) * (N - k)));
  const below = (x) => {
    let q = d[0] - x, c = q < 0 ? 1 : 0;
    for (let i = 1; i < n; i++) { q = d[i] - x - (e[i - 1] * e[i - 1]) / (q || 1e-300); if (q < 0) c++; }
    return c;
  };
  let lo = Infinity, hi = Infinity;
  for (let i = 0; i < n; i++) { lo = Math.min(lo, d[i] - Math.abs(e[i - 1] || 0) - Math.abs(e[i] || 0)); hi = Math.min(hi, d[i]); }
  for (let it = 0; it < 90 && hi - lo > 1e-13 * (1 + Math.abs(hi)); it++) { const m = (lo + hi) / 2; if (below(m) > 0) hi = m; else lo = m; }
  const s = lo - 1e-9 * (1 + Math.abs(lo));
  let x = new Array(n).fill(1);
  for (let it = 0; it < 3; it++) {
    const cp = [], bp = [];
    for (let i = 0; i < n; i++) {
      const m = d[i] - s - (i ? e[i - 1] * cp[i - 1] : 0);
      cp.push(i < N ? e[i] / m : 0); bp.push((x[i] - (i ? e[i - 1] * bp[i - 1] : 0)) / m);
    }
    for (let i = n - 1; i >= 0; i--) x[i] = bp[i] - (i < N ? cp[i] * x[i + 1] : 0);
    const nm = Math.hypot(...x); x = x.map((v) => Math.abs(v) / nm);
  }
  return x;
}

/* =====================================================================
   FIGURE 11.13: the double well and its levels, the occupations N/2 ± ⟨â_L†â_R⟩
   of |+⟩ and |−⟩ as bars on them, and P(n_L) of the exact N-atom ground state
   below, plotted against n_L − N/2. Still: U₀/t and N are parameters.
   Scene: V(u) = (u² − 1)², wells at u = ±1, barrier 1; levels |+⟩ 0.35,
   |L⟩ |R⟩ 0.65, |−⟩ 0.95 (schematic, as the book's). Graph axes fixed:
   n_L − N/2 from −20 to 20 (N up to 40), P from 0 to 1.
===================================================================== */
(function () {
  const d = sim('sim-double-well', 820);
  const lu = ctl(d.controls, { label: '\\log_{10}(\\kUzero/\\kt)', cls: '', min: -3, max: 3, step: 0.01, value: -3, unit: '', dec: 2,
    detents: [-3, -2, -1, 0, 1, 2, 3], aria: 'the interaction energy over the tunnelling amplitude, as a power of ten' });
  const nN = ctl(d.controls, { label: 'N', cls: '', min: 2, max: 40, step: 2, value: 20, unit: '', dec: 0, aria: 'the number of atoms' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const X0 = 700, SX = 300, Y0 = 392, SY = 150, VMAX = 1.75;
  const XU = (u) => X0 + SX * u, YV = (v) => Y0 - SY * v;
  const V = (u) => (u * u - 1) * (u * u - 1);
  const EP = 0.35, EL = 0.65, EM = 0.95;
  const inner = (E) => Math.sqrt(1 - Math.sqrt(E)), outer = (E) => Math.sqrt(1 + Math.sqrt(E));
  const G = { l: 170, r: 1250, t: 486, b: 744 };
  const sig = (v) => (v >= 100 ? fmt(v, 0) : v >= 10 ? fmt(v, 1) : v >= 1 ? fmt(v, 2) : (+v.toPrecision(2)).toString());

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const N = nN.v, u = +sig(Math.pow(10, lu.v)), c = ground(N, u);
    let hop = 0, I = 0, varn = 0, pmax = 0;
    c.forEach((ck, k) => {
      const p = ck * ck; pmax = Math.max(pmax, p);
      I += p * (k * (k - 1) + (N - k) * (N - k - 1)); varn += p * (k - N / 2) * (k - N / 2);
      if (k < N) hop += ck * c[k + 1] * Math.sqrt((k + 1) * (N - k));
    });
    const dn = Math.sqrt(varn), dnB = Math.sqrt(N) / 2, nPlus = N / 2 + hop, nMinus = N / 2 - hop;
    const cT = C('coupling'), cP = C('population'), cE = C('energy'), cL = F.ref('well-L'), cR = F.ref('well-R');

    /* the double well */
    const um = Math.sqrt(1 + Math.sqrt(VMAX));
    F.curve(ctx, V, -um, um, XU, YV, cE, 5, 240);
    hits.push({ x: X0, y: YV(1), r: 22, name: 'the barrier between the two wells' });

    /* the levels: |L⟩ and |R⟩ localized, |+⟩ and |−⟩ dashed across both wells */
    const yP = YV(EP), yL = YV(EL), yM = YV(EM);
    line(ctx, XU(-outer(EL)), yL, XU(-inner(EL)), yL, cL, 4);
    line(ctx, XU(inner(EL)), yL, XU(outer(EL)), yL, cR, 4);
    [[EP, yP], [EM, yM]].forEach(([E, y]) => line(ctx, XU(-outer(E)), y, XU(outer(E)), y, PAL.ink, 3, [10, 10]));
    /* the atoms in |+⟩ and |−⟩: a bar under each level, its length the share of N */
    [[EP, yP, nPlus], [EM, yM, nMinus]].forEach(([E, y, nn]) => {
      const x1 = XU(-outer(E - 0.12)), w = (XU(outer(E - 0.12)) - x1) * (nn / N);   /* inside the walls at the bar's lower edge */
      if (w > 0.5) { ctx.save(); ctx.fillStyle = alpha(cP, 0.55); ctx.fillRect(x1, y + 4, w, 14); ctx.restore(); }
    });
    text(ctx, '|L⟩', XU(-1), yL + 22, cL, { size: 24, align: 'center', weight: 600 });
    text(ctx, '|R⟩', XU(1), yL + 22, cR, { size: 24, align: 'center', weight: 600 });
    const xr = XU(outer(EM)) + 22;
    text(ctx, `|−⟩  ${fmt(nMinus, 1)} atoms`, xr, yM + 4, PAL.ink, { size: 22, weight: 600 });
    text(ctx, `|+⟩  ${fmt(nPlus, 1)} atoms`, xr, yP + 4, PAL.ink, { size: 22, weight: 600 });
    hits.push({ x: XU(-1), y: yL, r: 20, name: '|L⟩, the state localized in the left well' });
    hits.push({ x: XU(1), y: yL, r: 20, name: '|R⟩, the state localized in the right well' });
    hits.push({ x: XU(0.5), y: yP + 10, r: 18, name: `|+⟩ = (|L⟩ + |R⟩)/√2, holding ${fmt(nPlus, 2)} of the ${N} atoms` });
    hits.push({ x: XU(-0.5), y: yM + 10, r: 18, name: `|−⟩ = (|L⟩ − |R⟩)/√2, holding ${fmt(nMinus, 2)} of the ${N} atoms` });

    /* 2t between |+⟩ and |−⟩ */
    const xb = XU(-outer(EM)) - 70;
    line(ctx, xb, yP, XU(-outer(EP)), yP, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, xb, yM, XU(-outer(EM)), yM, alpha(PAL.ink, 0.35), 2, [4, 8]);
    vbracket(ctx, xb, yM, yP, cT, '2t', -1);
    hits.push({ x: xb, y: (yP + yM) / 2, r: 20, name: 'the splitting 2t of |+⟩ and |−⟩' });

    /* tunnelling, the coupling t: a double-headed arc over the barrier (notation) */
    const ax = XU(0.42), ay = YV(1.22), cy = YV(1.82);
    ctx.save(); ctx.strokeStyle = cT; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(X0 - (ax - X0), ay); ctx.quadraticCurveTo(X0, cy, ax, ay); ctx.stroke(); ctx.restore();
    const tip = (sx) => { const px = X0 + sx * (ax - X0), tx = px - X0, ty = ay - cy, L = Math.hypot(tx, ty); arrow(ctx, px - (26 * tx) / L, ay - (26 * ty) / L, px, ay, cT, 4); };
    tip(-1); tip(1);
    text(ctx, '$\\kt$', X0, (ay + cy) / 2 - 26, cT, { size: 24, align: 'center', weight: 600, tex: true });
    hits.push({ x: X0, y: (ay + cy) / 2, r: 24, name: 'tunnelling between the wells, amplitude t' });

    /* P(n_L) against n_L − N/2 */
    const { X, Y } = axes(ctx, G, [-20, 20], [0, 1], {
      nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2),
      xl: 'n_L − N/2, atoms in the left well beyond half', xc: cL, yl: 'P(n_L)', yc: cP,
    });
    const bw = 0.7 * (X(1) - X(0)), lnB = (k) => { let s = 0; for (let i = 1; i <= N; i++) s += Math.log(i); for (let i = 1; i <= k; i++) s -= Math.log(i); for (let i = 1; i <= N - k; i++) s -= Math.log(i); return s - N * Math.log(2); };
    c.forEach((ck, k) => {
      const p = ck * ck, x = X(k - N / 2);
      if (p > 1e-4) { ctx.save(); ctx.fillStyle = alpha(cP, 0.75); ctx.fillRect(x - bw / 2, Y(p), bw, Y(0) - Y(p)); ctx.restore(); }
      const pb = Math.exp(lnB(k));
      if (pb > 2e-3) dot(ctx, x, Y(pb), PAL.ink, false, 6);
      hits.push({ x, y: Y(Math.max(p, pb) / 2), r: Math.max(8, bw / 2), name: `n_L = ${k}: P = ${fmt(p, 3)} here, ${fmt(pb, 3)} at U₀ = 0` });
    });
    /* legend */
    const ly = G.t - 30, l1 = 'ground state', l2 = 'U₀ = 0, Eq. (11.169)';
    let lx = G.r - F.measure(ctx, l2, { size: 17 });
    text(ctx, l2, lx, ly, PAL.ink, { size: 17 }); dot(ctx, lx - 22, ly, PAL.ink, false, 6);
    lx -= 56 + F.measure(ctx, l1, { size: 17 });
    text(ctx, l1, lx, ly, PAL.ink, { size: 17 });
    ctx.save(); ctx.fillStyle = alpha(cP, 0.75); ctx.fillRect(lx - 34, ly - 9, 22, 18); ctx.restore();

    const us = sig(u), Ns = String(N);
    topline(ctx, hop > 0.97 * N / 2
      ? `With $\\kUzero$ = ${us} $\\kt$ the ${Ns} atoms share |+⟩, and $n_L$ spreads binomially: $\\Delta n_L$ = ${fmt(dn, 2)}.`
      : pmax > 0.97
        ? `With $\\kUzero$ = ${us} $\\kt$ the ${Ns} atoms sit ${N / 2} to a well, a Fock state: $\\Delta n_L$ = ${fmt(dn, 2)}.`
        : `With $\\kUzero$ = ${us} $\\kt$ the spread of $n_L$ narrows to $\\Delta n_L$ = ${fmt(dn, 2)}, from the binomial's ${fmt(dnB, 2)}.`);
    const Id = I < 100 ? 2 : 1, hr = +hop.toFixed(2), Ir = +I.toFixed(Id), E = -2 * hr + u * Ir;
    ro.set(`\\kEdw_0 = -2\\kt\\langle\\hat{a}_L^\\dagger\\hat{a}_R\\rangle + \\kUzero\\langle\\hat{n}_L(\\hat{n}_L-1)+\\hat{n}_R(\\hat{n}_R-1)\\rangle = -2\\kt\\times ${fmt(hr, 2)} + ${us}\\,\\kt\\times ${fmt(Ir, Id)} = ${fmt(E, Math.abs(E) >= 1000 ? 0 : 2)}\\,\\kt`,
      `$\\langle\\hat{a}_L^\\dagger\\hat{a}_R\\rangle$ = ${fmt(hr, 2)} of $N/2$ = ${fmt(N / 2, 0)}; $\\Delta n_L$ = ${fmt(dn, 2)}, against $\\sqrt{N}/2$ = ${fmt(dnB, 2)} for Eq. (11.169).`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
