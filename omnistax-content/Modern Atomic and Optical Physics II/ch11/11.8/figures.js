/* Figures for section 11.8 Cold atoms in an optical lattice. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.8'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, text, topline, axes, hover, tex, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

/* Legend row, right-aligned at `right`: [{ color, fill, dot, w, dash, name }]. */
function legend(ctx, items, right, y) {
  let x = right;
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i], w = F.measure(ctx, it.name, { size: 17 });
    x -= w;
    text(ctx, it.name, x, y, PAL.ink, { size: 17 });
    if (it.dot) { x -= 22; dot(ctx, x, y, it.dot, true, 9); x -= 26; continue; }
    x -= 52;
    if (it.fill) { ctx.save(); ctx.fillStyle = it.fill; ctx.fillRect(x, y - 10, 40, 20); ctx.restore(); }
    else line(ctx, x, y, x + 40, y, it.color, it.w, it.dash);
    x -= 28;
  }
}

/* =====================================================================
   FIGURE 11.14: the wedding cake. One site of the Bose-Hubbard model in
   the mean field of its z neighbours (the product state of Eq. 11.205,
   minimized site by site), energies in units of U₀ and J = zt/U₀:
     h(ψ) = −Jψ(b̂ + b̂†) + Jψ² + n̂(n̂ − 1)/2 − μ_i n̂,  μ_i = μ − V_trap(r_i),
   ψ = ⟨b̂⟩ the minimizer, ν = ⟨n̂⟩ = −∂E/∂μ at it. The Mott lobe of filling n
   ends at J = 1/(2n + 1 + 2√(n(n + 1))), 1/5.83 for n = 1. V_trap(r) = 0.02 U₀ r²,
   r in sites. Still: zt/U₀ and μ are parameters.
   Axes fixed: r −12.5 to 12.5 sites (the book's 25); ν 0 to 4.
===================================================================== */
(function () {
  const d = sim('sim-wedding-cake', 640);
  const NMAX = 7, KAPPA = 0.02, R = 12.5, JC1 = 1 / (3 + 2 * Math.SQRT2);
  const D = new Float64Array(NMAX + 1), E2 = new Float64Array(NMAX);
  /* the number of eigenvalues of the tridiagonal (D, off-diagonal² E2) below x, by Sturm's sequence */
  const below = (x) => { let q = D[0] - x, c = q < 0 ? 1 : 0; for (let i = 1; i <= NMAX; i++) { q = D[i] - x - E2[i - 1] / (q === 0 ? 1e-300 : q); if (q < 0) c++; } return c; };
  function lowest(J, psi, mu) {
    let lo = Infinity, hi = -Infinity;
    for (let n = 0; n <= NMAX; n++) {
      D[n] = n * (n - 1) / 2 - mu * n;
      if (n < NMAX) E2[n] = J * J * psi * psi * (n + 1);
      const r = Math.sqrt(n < NMAX ? E2[n] : 0) + Math.sqrt(n > 0 ? E2[n - 1] : 0);
      lo = Math.min(lo, D[n] - r); hi = Math.max(hi, D[n] + r);
    }
    for (let k = 0; k < 46; k++) { const x = (lo + hi) / 2; if (below(x) >= 1) hi = x; else lo = x; }
    return (lo + hi) / 2 + J * psi * psi;
  }
  /* one site at chemical potential mu: [ν, ψ] */
  function site(J, mu) {
    let psi = 0;
    if (J > 0) {
      const g = (Math.sqrt(5) - 1) / 2; let a = 0, b = Math.sqrt(NMAX), x1 = b - g * (b - a), x2 = a + g * (b - a);
      let f1 = lowest(J, x1, mu), f2 = lowest(J, x2, mu);
      for (let k = 0; k < 32; k++) {
        if (f1 < f2) { b = x2; x2 = x1; f2 = f1; x1 = b - g * (b - a); f1 = lowest(J, x1, mu); }
        else { a = x1; x1 = x2; f1 = f2; x2 = a + g * (b - a); f2 = lowest(J, x2, mu); }
      }
      psi = (a + b) / 2;
      if (lowest(J, 0, mu) <= lowest(J, psi, mu) + 1e-12) psi = 0;
    }
    const h = 1e-5, nu = -(lowest(J, psi, mu + h) - lowest(J, psi, mu - h)) / (2 * h);
    return [Math.max(0, nu), psi];
  }
  /* ν(μ) and ψ(μ) tabulated for one J, μ from −0.4 to 3.2 */
  const M0 = -0.4, DM = 0.02, NM = 181, tables = new Map();
  function table(J) {
    const key = J.toFixed(3); if (tables.has(key)) return tables.get(key);
    const nu = new Float64Array(NM), ps = new Float64Array(NM);
    for (let i = 0; i < NM; i++) { const [n, p] = site(J, M0 + i * DM); nu[i] = n; ps[i] = p; }
    const t = { nu, ps }; tables.set(key, t); return t;
  }
  const at = (t, mu) => {
    if (mu <= M0) return [0, 0];
    const f = Math.min((mu - M0) / DM, NM - 1.000001), i = Math.floor(f), k = f - i;
    return [t.nu[i] + k * (t.nu[i + 1] - t.nu[i]), t.ps[i] + k * (t.ps[i + 1] - t.ps[i])];
  };

  const J = ctl(d.controls, { label: 'z\\kt/\\kUzero', cls: 'coupling', min: 0, max: 0.25, step: 0.001, value: 0.03, unit: '', dec: 3,
    aria: 'the hopping times the number of neighbours, in units of the on-site interaction', specials: [{ at: JC1, label: 'Mott transition at filling 1' }] });
  const MU = ctl(d.controls, { label: '\\kmuchem/\\kUzero', cls: 'energy', min: 0.2, max: 2.9, step: 0.01, value: 2.5, unit: '', dec: 2,
    aria: 'the chemical potential at the centre of the trap, in units of the on-site interaction' });
  const S = { l: 150, r: 1250 }, K = { l: 150, r: 1250, t: 440, b: 560 };
  const XS = (x) => S.l + ((x + R) / (2 * R)) * (S.r - S.l);
  const YB = 380, A = 64, B = 128 / (R * R);
  const pot = (x) => YB - A * (1 - Math.cos(2 * Math.PI * x)) / 2 - B * x * x;
  const hits = []; hover(d.stage, () => hits, d.c);

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const j = J.v, mu0 = MU.v, tb = table(j), cE = C('energy');
    const grey = PAL.muted, mott = (p) => p <= 0.01;

    /* the lattice and the trap, and the atoms in each well */
    ctx.save(); ctx.beginPath();
    for (let k = 0; k <= 600; k++) { const x = -R + (2 * R * k) / 600; k ? ctx.lineTo(XS(x), pot(x)) : ctx.moveTo(XS(x), pot(x)); }
    ctx.strokeStyle = cE; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    hits.push({ x: XS(-R + 0.5), y: pot(-R + 0.5) - 20, r: 30, name: 'the lattice potential, raised toward the edges by the harmonic trap' });
    const sites = [];
    for (let i = -12; i <= 12; i++) {
      const [nu, p] = at(tb, mu0 - KAPPA * i * i), m = mott(p), whole = m ? Math.round(nu) : Math.floor(nu + 1e-6), frac = m ? 0 : nu - whole;
      sites.push({ i, nu, m, whole });
      const x = XS(i), y0 = pot(i) - 12;
      for (let k = 0; k < whole; k++) dot(ctx, x, y0 - 19 * k, PAL.ink, true, 9);
      if (frac > 0.04) { ctx.save(); ctx.globalAlpha *= Math.max(0.3, frac); dot(ctx, x, y0 - 19 * whole, grey, true, 9); ctx.restore(); }
      if (nu > 0.02) hits.push({ x, y: y0 - 9 * Math.max(0, Math.ceil(nu) - 1), r: 24,
        name: m ? `site ${i}: ${whole} atom${whole === 1 ? '' : 's'}, a Mott insulator` : `site ${i}: ν = ${fmt(nu, 2)} atoms, superfluid` });
    }

    /* plateau brackets over the Mott runs: the central one, and the outer ones on the right as the book draws them */
    const runs = [];
    sites.forEach((s) => { const last = runs[runs.length - 1]; if (s.m && s.whole >= 1 && last && last.n === s.whole && last.b === s.i - 1) last.b = s.i; else if (s.m && s.whole >= 1) runs.push({ n: s.whole, a: s.i, b: s.i }); });
    runs.filter((r) => r.b >= 0 && r.b > r.a).forEach((r) => {
      const top = Math.min(pot(r.b + 0.5), pot(r.a - 0.5)) - 24;
      hbracket(ctx, XS(r.a - 0.4), XS(r.b + 0.4), Math.max(110, top), PAL.ink, `ν = ${r.n}`, { size: 20 });
    });

    /* the cake: ν(r) across the cloud, its Mott plateaus and superfluid slopes filled as runs */
    const { X: X0, Y } = axes(ctx, K, [0, 2 * R], [0, 4], { nx: 0, ny: 4, fy: (v) => fmt(v, 0), xl: 'distance from the centre (sites)', yl: 'filling ν' });
    const X = (r) => X0(r + R);
    for (let r = -12; r <= 12; r += 4) { line(ctx, X(r), K.b, X(r), K.b + 8, PAL.muted, 2); text(ctx, fmt(r, 0), X(r), K.b + 26, PAL.muted, { size: 17, align: 'center' }); }
    const N = 500, pts = [];
    for (let k = 0; k <= N; k++) { const x = -R + (2 * R * k) / N, [nu, p] = at(tb, mu0 - KAPPA * x * x); pts.push({ x, nu: Math.min(nu, 4), m: mott(p) }); }
    for (let k = 0; k < N;) {
      let e = k; while (e < N && pts[e + 1].m === pts[k].m) e++;
      const run = pts.slice(k, Math.min(e + 1, N) + 1);
      ctx.save(); ctx.beginPath(); ctx.moveTo(X(run[0].x), Y(0)); run.forEach((q) => ctx.lineTo(X(q.x), Y(q.nu))); ctx.lineTo(X(run[run.length - 1].x), Y(0)); ctx.closePath();
      ctx.fillStyle = pts[k].m ? alpha(PAL.ink, 0.85) : alpha(grey, 0.55); ctx.fill(); ctx.restore();
      k = e + 1;
    }
    legend(ctx, [{ fill: alpha(PAL.ink, 0.85), name: 'Mott insulator' }, { fill: alpha(grey, 0.55), name: 'superfluid' }], K.r, K.t - 24);

    const sf = sites.filter((s) => !s.m && s.nu > 0.02).length, plateaus = [...new Set(sites.filter((s) => s.m && s.whole >= 1).map((s) => s.whole))].sort((a, b) => b - a);
    const list = plateaus.length > 1 ? `${plateaus.slice(0, -1).join(', ')} and ${plateaus[plateaus.length - 1]}` : `${plateaus[0]}`;
    topline(ctx, plateaus.length === 0
      ? `No plateau stands: all ${sf} occupied sites are superfluid.`
      : sf === 0 ? `Plateau${plateaus.length > 1 ? 's' : ''} ν = ${list} stand${plateaus.length > 1 ? '' : 's'}, with no superfluid site between them.` : `Plateau${plateaus.length > 1 ? 's' : ''} ν = ${list} stand${plateaus.length > 1 ? '' : 's'}, with ${sf} superfluid site${sf === 1 ? '' : 's'} between and around them.`);
    const per = plateaus.map((n) => { const c = sites.filter((s) => s.m && s.whole === n).length; return `\\frac{${n * c}}{${c}} = ${n}`; });
    const occ = sites.filter((s) => s.nu > 0.02), tot = occ.reduce((a, s) => a + s.nu, 0);
    tex(d.readout, per.length
      ? `\\nu = \\frac{N_\\mathrm{atoms}}{N_\\mathrm{sites}}:\\quad ${per.join(',\\quad ')}`
      : `\\nu = \\frac{N_\\mathrm{atoms}}{N_\\mathrm{sites}} = \\frac{${fmt(tot, 1)}}{${occ.length}} = ${fmt(tot / Math.max(1, occ.length), 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.15, recomputed (the book's image is published data and is not
   shown): each site in the trial state of Eq. (11.211). Its energy per site,
   −zt|⟨b̂⟩|² + U₀ sin²θ/2 with |⟨b̂⟩|² = (1 + 1/√2)² sin²θ cos²θ, is least at
   sin²θ = ½(1 − (U₀/zt)/UC), UC = 2(1 + 1/√2)² = 3 + 2√2, and at θ = 0 beyond.
   The expansion image is the momentum distribution of that product state:
   a Wannier envelope times (1 − |⟨b̂⟩|²) plus |⟨b̂⟩|² in peaks at the
   reciprocal lattice, multiples of 2ℏK_L. Moving: U₀/zt ramps linearly up
   over 80 ms, holds 20 ms, ramps down over 80 ms.
   Axes fixed: p ±5 ℏK_L; τ 0 to 180 ms; U₀/zt 0 to 40 (the slider's
   maximum); |⟨b̂⟩|² 0 to 0.8.
===================================================================== */
(function () {
  const d = sim('sim-mott-ramp', 620);
  const A = Math.pow(1 + Math.SQRT1_2, 2), UC = 2 * A, T = 180;
  const s2 = (u) => (u < UC ? 0.5 * (1 - u / UC) : 0), b2 = (u) => { const s = s2(u); return A * s * (1 - s); };
  const cy = cycle(() => T, 1.2);
  const um = ctl(d.controls, { label: '\\kUzero/z\\kt', cls: 'energy', min: 2, max: 40, step: 0.1, value: 20, unit: '', dec: 1,
    aria: 'the turning value of the ramp, the on-site interaction over the hopping times the number of neighbours', specials: [{ at: UC, label: 'Mott transition' }], onInput: () => cy.reset() });
  const uOf = (tau, m) => (tau <= 80 ? (m * tau) / 80 : tau <= 100 ? m : (m * (T - tau)) / 80);
  /* the readout: a clock drives it, so it is set, never morphed */
  const fx = document.createElement('div'), nt = document.createElement('small'); d.readout.append(fx, nt);

  /* the image: envelope and peaks on a fixed grid, p in units of ℏK_L, painted into its own small
     canvas in the density hue and drawn smoothed over the box */
  const NG = 64, P = 4, SE = 2, SP = 0.28, CP = 3;
  const env = new Float64Array(NG * NG), peaks = new Float64Array(NG * NG);
  for (let a = 0; a < NG; a++) for (let b = 0; b < NG; b++) {
    const px = -P + (2 * P * (a + 0.5)) / NG, py = -P + (2 * P * (b + 0.5)) / NG, e = Math.exp(-(px * px + py * py) / (2 * SE * SE));
    let s = 0; for (let m = -2; m <= 2; m++) for (let n = -2; n <= 2; n++) { const dx = px - 2 * m, dy = py - 2 * n; s += Math.exp(-(dx * dx + dy * dy) / (2 * SP * SP)); }
    env[a * NG + b] = e; peaks[a * NG + b] = e * s;
  }
  const NMAX = (1 - b2(0)) + CP * b2(0);
  const img = document.createElement('canvas'); img.width = img.height = NG;
  const ic = img.getContext('2d'), px = ic.createImageData(NG, NG);
  const rgbOf = (c) => { ic.clearRect(0, 0, 1, 1); ic.fillStyle = c; ic.fillRect(0, 0, 1, 1); return ic.getImageData(0, 0, 1, 1).data; };
  const I = { l: 70, r: 500, t: 120, b: 550 }, G1 = { l: 720, r: 1200, t: 130, b: 300 }, G2 = { l: 720, r: 1200, t: 400, b: 540 };
  const hits = []; hover(d.stage, () => hits, d.c);
  let last = '';

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const tau = cy.now(), m = um.v, u = uOf(tau, m), w = b2(u), cD = C('density'), cE = C('energy');

    /* the expansion image, one scale; the axes run 0 to 2P so no zero cross lies over the central peak */
    axes(ctx, I, [0, 2 * P], [0, 2 * P], { nx: 4, ny: 4, fx: (v) => fmt(v - P, 0), fy: (v) => fmt(v - P, 0), xl: 'p_x (ℏK_L)', yl: 'p_y (ℏK_L)' });
    const [cr, cg, cb] = rgbOf(cD);
    for (let a = 0; a < NG; a++) for (let b = 0; b < NG; b++) {
      const v = Math.min(1, ((1 - w) * env[a * NG + b] + CP * w * peaks[a * NG + b]) / NMAX), o = 4 * ((NG - 1 - b) * NG + a);
      px.data[o] = cr; px.data[o + 1] = cg; px.data[o + 2] = cb; px.data[o + 3] = Math.round(255 * v);
    }
    ic.putImageData(px, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(img, I.l, I.t, I.r - I.l, I.b - I.t); ctx.restore();
    const PX = (p) => I.l + ((p + P) / (2 * P)) * (I.r - I.l), PY = (p) => I.b - ((p + P) / (2 * P)) * (I.b - I.t);
    if (w > 0.02) {
      hits.push({ x: PX(0), y: PY(0), r: 20, name: 'the central peak: coherent atoms at rest' });
      [[2, 0], [-2, 0], [0, 2], [0, -2]].forEach(([a, b]) => hits.push({ x: PX(a), y: PY(b), r: 18, name: 'a peak of the reciprocal lattice, 2ℏK_L from the centre' }));
    } else hits.push({ x: PX(0), y: PY(0), r: 60, name: 'a broad blob with no peaks: no first-order coherence between sites' });
    /* its colour scale */
    const bx = 535, bt = 150, bb = 510;
    for (let k = 0; k < 40; k++) { ctx.save(); ctx.fillStyle = alpha(cD, (k + 0.5) / 40); ctx.fillRect(bx, bb - ((k + 1) * (bb - bt)) / 40, 18, (bb - bt) / 40 + 0.5); ctx.restore(); }
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(bx, bt, 18, bb - bt); ctx.restore();
    text(ctx, '1', bx + 26, bt, PAL.muted, { size: 17 }); text(ctx, '0', bx + 26, bb, PAL.muted, { size: 17 });
    text(ctx, 'density', bx + 9, bt - 22, cD, { size: 17, weight: 600, align: 'center' });
    hits.push({ x: bx + 9, y: (bt + bb) / 2, r: 30, name: 'column density, relative to the superfluid’s central peak' });

    /* the ramp */
    const g1 = axes(ctx, G1, [0, T], [0, 40], { nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0), yl: 'U₀/zt', yc: cE });
    line(ctx, G1.l, g1.Y(UC), G1.r, g1.Y(UC), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'Mott insulator', G1.r + 12, g1.Y(UC) - 16, PAL.ink, { size: 17 });
    text(ctx, 'superfluid', G1.r + 12, g1.Y(UC) + 14, PAL.ink, { size: 17 });
    F.curve(ctx, (x) => uOf(x, m), 0, T, g1.X, g1.Y, alpha(cE, 0.35), 3, 180);
    F.curve(ctx, (x) => uOf(x, m), 0, tau, g1.X, g1.Y, cE, 5, 180);
    dot(ctx, g1.X(tau), g1.Y(u), cE, true, 9);
    hits.push({ x: (G1.l + G1.r) / 2, y: g1.Y(UC), r: 16, name: `the transition of the trial state, U₀/zt = 3 + 2√2 = ${fmt(UC, 2)}` });

    const g2 = axes(ctx, G2, [0, T], [0, 0.8], { nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1), xl: 'time since the ramp began (ms)', xc: C('time'), yl: 'coherent share |⟨b̂_i⟩|²' });
    F.curve(ctx, (x) => b2(uOf(x, m)), 0, T, g2.X, g2.Y, alpha(PAL.ink, 0.3), 3, 360);
    F.curve(ctx, (x) => b2(uOf(x, m)), 0, tau, g2.X, g2.Y, PAL.ink, 5, 360);
    dot(ctx, g2.X(tau), g2.Y(w), PAL.ink, true, 9);
    line(ctx, g2.X(tau), g2.Y(w) + 12, g2.X(tau), G2.b, alpha(PAL.ink, 0.3), 2, [4, 8]);

    const ts = fmt(tau, 0), us = fmt(u, 1), uv = +us, sv = s2(uv), wv = b2(uv);
    topline(ctx, uv >= UC
      ? `At $\\ktau$ = ${ts} ms, $\\kUzero/z\\kt$ = ${us}: a Mott insulator, and the image has no peaks.`
      : `At $\\ktau$ = ${ts} ms, $\\kUzero/z\\kt$ = ${us}: a superfluid, ${fmt(100 * wv, 0)} % of each site coherent.`);
    const s = uv >= UC
      ? `|\\langle\\hat{b}_i\\rangle|^2 = \\left(1 + \\tfrac{1}{\\sqrt{2}}\\right)^2\\sin^2\\ktheta\\cos^2\\ktheta = 0 \\quad (\\ktheta = 0)`
      : `|\\langle\\hat{b}_i\\rangle|^2 = \\left(1 + \\tfrac{1}{\\sqrt{2}}\\right)^2\\sin^2\\ktheta\\cos^2\\ktheta = ${fmt(A, 2)} \\times ${fmt(sv, 3)} \\times ${fmt(1 - sv, 3)} = ${fmt(wv, 2)}`;
    const n = uv >= UC
      ? `\\kUzero/z\\kt = ${us} > 3 + 2\\sqrt{2} = ${fmt(UC, 2)}\\text{: } \\ktheta = 0\\text{, the Mott state } |1\\rangle_i\\text{, has the least energy}`
      : `\\sin^2\\ktheta = \\tfrac{1}{2}\\left(1 - \\frac{\\kUzero/z\\kt}{3 + 2\\sqrt{2}}\\right) = \\tfrac{1}{2}\\left(1 - \\frac{${us}}{${fmt(UC, 2)}}\\right) = ${fmt(sv, 3)}\\text{ minimizes the energy of the state (11.211)}`;
    if (s + n !== last) { last = s + n; tex(fx, s, false, { values: false }); tex(nt, n, false, { values: false }); }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();
};
