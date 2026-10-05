/* Figures for section 31.6 Binding Energy.
   The page binds energy (BE, BE/A, the work done), mass (the mass defect and
   the masses it is the difference of), position (the range of the nuclear
   force), and in Figure 31.23 time and activity. Z, N and A are counts and stay
   in ink. Protons are F.el('p+'), neutrons F.el('n0'); the β of the blowup is
   F.el('e-') and its γ F.el('gamma'); an α is two protons and two neutrons.
   Atomic masses and half-lives are the book's Appendix A. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, axes, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
const sig3 = (x) => { if (x >= 1000) { const e = Math.floor(Math.log10(x)); return fmt(x / Math.pow(10, e), 2) + '\\times 10^{' + e + '}'; } return String(+x.toPrecision(3)); };
const M_H = 1.007825, M_N = 1.008665, U_MEV = 931.5;

/* A nucleus as the book draws it: nucleons packed as a ball. The sites are an
   fcc lattice whose spacing gives one nucleon per (4/3)π r₀³, r₀ = 1.2 fm, so A
   of them fill a ball of radius r₀A^{1/3}; a nucleus is the A sites nearest a
   point just off a lattice site, and its protons are Z of them picked by hash. */
const D_NN = 2.172;
const SITES = (() => {
  const a = D_NN * Math.SQRT2, out = [], B = [[0, 0, 0], [0.5, 0.5, 0], [0.5, 0, 0.5], [0, 0.5, 0.5]];
  const cy = Math.cos(0.45), sy = Math.sin(0.45), cp = Math.cos(0.32), sp = Math.sin(0.32);
  for (let i = -5; i <= 5; i++) for (let j = -5; j <= 5; j++) for (let k = -5; k <= 5; k++) B.forEach((b) => {
    const x = a * (i + b[0]) - 0.31, y = a * (j + b[1]) - 0.17, z = a * (k + b[2]) - 0.09;
    if (x * x + y * y + z * z > 100) return;
    const x1 = cy * x + sy * z, z1 = -sy * x + cy * z, y1 = cp * y - sp * z1, z2 = sp * y + cp * z1;
    out.push({ x: x1, y: y1, z: z2, r: Math.hypot(x, y, z) });
  });
  return out.sort((p, q) => p.r - q.r);
})();
const clusters = new Map();
function cluster(A, Z) {
  const key = A + ':' + Z;
  if (clusters.has(key)) return clusters.get(key);
  const s = SITES.slice(0, A), c = s.reduce((m, p) => [m[0] + p.x / A, m[1] + p.y / A, m[2] + p.z / A], [0, 0, 0]);
  const order = s.map((_, i) => i).sort((i, j) => hash(i, A) - hash(j, A));
  const prot = new Set(order.slice(0, Z));
  const out = s.map((p, i) => ({ x: p.x - c[0], y: p.y - c[1], z: p.z - c[2], p: prot.has(i) }));
  clusters.set(key, out);
  return out;
}
function ball(ctx, x, y, r, color, a = 1) {
  ctx.save(); ctx.globalAlpha *= a;
  ctx.fillStyle = color; ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(PAL.panel, 0.5);
  ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.3, 0, 2 * Math.PI); ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 31.22 · sim-binding-energy · still · flat (rule 28.1)
   Left, the nucleus with one proton in the library's hand; right, all its
   nucleons apart on the table. Beneath, the mass defect Δm as one bar on a
   fixed axis of 0 to 0.6 u (⁵⁶Fe's 0.528 u is the largest), its upper stripe
   read in u and its lower stripe read on the MeV scale under it, 1 u being
   931.5 MeV/c², so the same length is BE. The choice morphs the bar's length;
   the pictures crossfade.
===================================================================== */
(function () {
  const H = 580, CX = 200, CY = 236, K = 18, RB = D_NN / 2 * K, TY = 330, ROW0 = 580, ROWW = 620;
  const NUC = {
    He4: { A: 4, Z: 2, sym: 'He', m: 4.002602 },
    O16: { A: 16, Z: 8, sym: 'O', m: 15.994915 },
    Mg24: { A: 24, Z: 12, sym: 'Mg', m: 23.985042 },
    Fe56: { A: 56, Z: 26, sym: 'Fe', m: 55.934939 },
  };
  Object.values(NUC).forEach((n) => {
    n.N = n.A - n.Z; n.name = sup(n.A) + n.sym; n.apart = n.Z * M_H + n.N * M_N; n.dm = n.apart - n.m; n.BE = n.dm * U_MEV;
    const c = cluster(n.A, n.Z), held = c.filter((p) => p.p).reduce((a, b) => (b.x > a.x ? b : a));
    n.rest = c.filter((p) => p !== held).sort((p, q) => p.z - q.z);
    n.reach = Math.max(...c.map((p) => p.x)) * K + RB;
    n.sp = Math.min(60, ROWW / Math.max(n.Z, n.N));
  });
  const d = sim('sim-binding-energy', H);
  const pick = choice(d.controls, { label: '\\text{nucleus}', options: Object.keys(NUC).map((k) => ({ value: k, label: NUC[k].name })), value: 'He4', aria: 'the nucleus pulled apart' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BX0 = 210, BX1 = 1250, DMAX = 0.6, BY = 470;
  const BXu = (u) => BX0 + (BX1 - BX0) * u / DMAX;

  function scene(ctx, n, live) {
    const PC = F.el('p+'), NC = F.el('n0');
    n.rest.forEach((p) => {
      ball(ctx, CX + p.x * K, CY + p.y * K, RB, p.p ? PC : NC);
      if (live) hits.push({ x: CX + p.x * K, y: CY + p.y * K, r: RB, name: p.p ? 'a proton, bound in the nucleus' : 'a neutron, bound in the nucleus' });
    });
    text(ctx, n.name + ' nucleus', CX, CY + 128, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'm(' + n.name + ') = ' + n.m.toFixed(6) + ' u', CX, CY + 162, C('mass'), { size: 20, weight: 600, align: 'center' });
    const r2 = Math.min(14, n.sp / 2 - 1.5);
    [[n.Z, PC, TY - 3 * r2 - 6, ' protons', 'a proton, separated'], [n.N, NC, TY - r2 - 2, ' neutrons', 'a neutron, separated']].forEach(([cnt, col, y, word, name]) => {
      for (let i = 0; i < cnt; i++) {
        const x = ROW0 + n.sp * (i + 0.5);
        ball(ctx, x, y, r2, col);
        if (live) hits.push({ x, y, r: r2 + 2, name });
      }
      text(ctx, cnt + word, ROW0 + n.sp * cnt + 14, y, PAL.ink, { size: 20, align: 'left' });
    });
    text(ctx, n.Z + 'm(¹H) + ' + n.N + 'm_{n} = ' + n.apart.toFixed(6) + ' u', ROW0 + ROWW / 2, TY + 36, C('mass'), { size: 20, weight: 600, align: 'center' });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const n = NUC[pick.value], EC = C('energy'), MC = C('mass');
    hits = [];
    topline(ctx, 'Pulling ' + n.name + ' apart takes ' + sig3(n.BE) + ' MeV of work, and the separated pieces have ' + n.dm.toFixed(6) + ' u more mass.');

    Object.keys(NUC).forEach((key) => { const a = pick.a(key); if (a > 0) F.faded(ctx, a, [0, 0], () => scene(ctx, NUC[key], key === pick.value)); });

    /* the proton in the hand, the pull and the arrow on to the table */
    const px = CX + pick.mix((v) => NUC[v].reach) + 34, py = CY;
    ball(ctx, px, py, RB, F.el('p+'));
    F.hand(ctx, px + 66, py + 2, { aim: [-1, 0], view: 'back', curl: 0.85, thumb: 'along', s: 0.62 });
    hits.push({ x: px, y: py, r: RB, name: 'a proton being pulled out of the nucleus' });
    hits.push({ x: px + 50, y: py, r: 26, name: 'the hand doing work against the nuclear force' });
    arrow(ctx, px - 10, py + 52, px + 78, py + 52, PAL.ink, 4);
    text(ctx, 'work done = BE', px + 34, py + 80, EC, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 3; ctx.beginPath();
    const a0 = [px + 40, py - 52], cp = [ROW0 - 70, CY - 170], a1 = [ROW0 - 18, TY - 92];
    ctx.moveTo(a0[0], a0[1]); ctx.quadraticCurveTo(cp[0], cp[1], a1[0], a1[1]); ctx.stroke(); ctx.restore();
    const tq = [a1[0] - (cp[0] + (a1[0] - cp[0]) * 0.9), a1[1] - (cp[1] + (a1[1] - cp[1]) * 0.9)];
    arrow(ctx, a1[0] - tq[0] * 2, a1[1] - tq[1] * 2, a1[0], a1[1], alpha(PAL.ink, 0.8), 3);
    line(ctx, ROW0 - 20, TY, ROW0 + ROWW, TY, alpha(PAL.ink, 0.6), 3);
    hits.push({ x: ROW0 + ROWW / 2, y: TY + 4, r: 12, name: 'the table the separated nucleons rest on' });

    /* the mass defect, one bar on two scales */
    const len = pick.mix((v) => NUC[v].dm) * F.ease.smooth(F.arrival(d));
    for (let u = 0; u <= DMAX + 1e-9; u += 0.1) {
      line(ctx, BXu(u), BY - 18, BXu(u), BY - 8, PAL.muted, 2);
      text(ctx, fmt(u, 1), BXu(u), BY - 34, PAL.muted, { size: 17, align: 'center' });
    }
    for (let e = 0; e <= 500; e += 100) {
      const x = BXu(e / U_MEV);
      line(ctx, x, BY + 44, x, BY + 54, PAL.muted, 2);
      text(ctx, String(e), x, BY + 72, PAL.muted, { size: 17, align: 'center' });
    }
    line(ctx, BX0, BY - 8, BX1, BY - 8, alpha(PAL.ink, 0.35), 1.5);
    line(ctx, BX0, BY + 44, BX1, BY + 44, alpha(PAL.ink, 0.35), 1.5);
    ctx.save();
    ctx.fillStyle = MC; ctx.fillRect(BX0, BY - 2, BXu(len) - BX0, 18);
    ctx.fillStyle = EC; ctx.fillRect(BX0, BY + 18, BXu(len) - BX0, 18);
    ctx.restore();
    text(ctx, 'Δm (u)', BX0 - 16, BY + 7, MC, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'BE (MeV)', BX0 - 16, BY + 27, EC, { size: 20, weight: 600, align: 'right' });
    hits.push({ x: (BX0 + BXu(len)) / 2, y: BY + 7, r: 14, name: 'the mass defect Δm = ' + n.dm.toFixed(6) + ' u' });
    hits.push({ x: (BX0 + BXu(len)) / 2, y: BY + 27, r: 14, name: 'the binding energy BE = ' + sig3(n.BE) + ' MeV' });

    ro.set('\\kBE = \\{[Zm({}^{1}\\text{H}) + N\\kmn] - m({}^{A}\\text{X})\\}\\kc^{2} = \\{[' + n.Z + '(1.007825\\ \\text{u}) + ' + n.N + '(1.008665\\ \\text{u})] - ' + n.m.toFixed(6) + '\\ \\text{u}\\}\\kc^{2} = (' + n.dm.toFixed(6) + '\\ \\text{u})\\kc^{2} = ' + sig3(n.BE) + '\\ \\text{MeV}', undefined, { form: 'be' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 31.23 · sim-earth-interior · moving · flat (rule 28.1)
   The Earth in cross-section: a solid mantle (radius R to 0.546 R), a liquid
   outer core (to 0.19 R) and a solid inner core. Heat crosses the mantle by
   conduction and leaves the surface as radiation along five rays; two
   convection cells turn in the outer core. The blowup is a piece of the
   mantle where primordial nuclei decay: a 6 s loop holds 0.6 s, and the
   decays scheduled in it number 4 R₀/R, R₀/R = e^{0.693 t/t½} being the
   activity t before today over today's. Each emission flies 0.7 s and is
   stopped in the rock; the last are still in flight when the loop holds, so
   the stopped end state shows decays. The heat's patterns repeat a whole
   number of times per loop, so they close on themselves.
===================================================================== */
(function () {
  const H = 600, T = 6, EX = 330, EY = 340, R = 210, BXc = 1010, BYc = 318, BR = 200;
  const ISO = {
    U238: { name: '²³⁸U', half: 4.47, mix: [['alpha', 0.55], ['beta', 0.3], ['gamma', 0.15]] },
    K40: { name: '⁴⁰K', half: 1.28, mix: [['beta', 0.89], ['gamma', 0.11]] },
  };
  const RAYS = [130, 155, 180, 205, 230].map((g) => g * Math.PI / 180);
  const d = sim('sim-earth-interior', H);
  const tAgo = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0, max: 4.5, step: 0.1, value: 0, unit: '× 10⁹ y', dec: 1, detents: [1, 3.5, 4.5], aria: 'the time before today' });
  const iso = choice(d.controls, { label: '\\text{nuclide}', options: [{ value: 'U238', label: '²³⁸U' }, { value: 'K40', label: '⁴⁰K' }], value: 'U238', aria: 'the primordial nuclide decaying in the rock' });
  const cy = cycle(() => T, 0.6);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const NUCLEI = Array.from({ length: 16 }, (_, i) => {
    const a = 2 * Math.PI * hash(i, 4), r = BR * 0.78 * Math.sqrt(hash(i, 5));
    return { x: BXc + r * Math.cos(a), y: BYc + r * Math.sin(a) };
  });
  const ratioOf = (I) => Math.exp(0.693 * tAgo.v / I.half);

  function wave(ctx, x0, y0, ux, uy, L, amp, color, w) {
    const px = -uy, py = ux;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    for (let j = 0; j <= 24; j++) {
      const s = j / 24, a = amp * Math.sin(s * 3 * 2 * Math.PI);
      const x = x0 + ux * s * L + px * a, y = y0 + uy * s * L + py * a;
      if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
  }
  function alphaParticle(ctx, x, y, r) {
    [[-1, -1, 'p+'], [1, 1, 'p+'], [1, -1, 'n0'], [-1, 1, 'n0']].forEach(([i, j, k]) => ball(ctx, x + i * r * 0.75, y + j * r * 0.75, r, F.el(k)));
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), I = ISO[iso.value], ratio = ratioOf(I), EC = C('energy'), ink = PAL.ink;
    hits = [];
    topline(ctx, tAgo.v < 0.05
      ? 'Decays of ' + I.name + ' in the rock release energy that slows the Earth’s cooling.'
      : fmt(tAgo.v, 1) + ' × 10⁹ y ago, ' + I.name + ' decayed ' + sig3(ratio) + ' times as fast as it does today.');

    /* the layers */
    [[R, 0.07], [0.546 * R, 0.15], [0.19 * R, 0.26]].forEach(([r, a]) => {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, a); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(EX, EY, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    });
    hits.push({ x: EX + 0.78 * R, y: EY - 0.3 * R, r: 40, name: 'the solid mantle, which conducts heat outward' });
    hits.push({ x: EX + 0.37 * R, y: EY, r: 30, name: 'the liquid outer core, where convection carries heat' });
    hits.push({ x: EX, y: EY, r: 0.19 * R, name: 'the solid inner core' });

    /* conduction across the mantle and radiation from the surface */
    RAYS.forEach((g, i) => {
      const ux = Math.cos(g), uy = -Math.sin(g), r0 = 0.6 * R, r1 = 0.96 * R;
      line(ctx, EX + ux * r0, EY + uy * r0, EX + ux * r1, EY + uy * r1, alpha(EC, 0.3), 3);
      for (let k = 0; k < 2; k++) {
        const f = ((t / T) * 4 + k / 2 + i * 0.13) % 1, r = r0 + (r1 - r0 - 26) * f;
        ctx.save(); ctx.globalAlpha *= Math.min(1, 4 * f, 4 * (1 - f));
        arrow(ctx, EX + ux * r, EY + uy * r, EX + ux * (r + 26), EY + uy * (r + 26), EC, 4);
        ctx.restore();
      }
      for (let k = 0; k < 2; k++) {
        const f = ((t / T) * 3 + k / 2 + i * 0.21) % 1, r = R + 8 + 40 * f;
        ctx.save(); ctx.globalAlpha *= Math.min(1, 5 * f, 2.5 * (1 - f));
        wave(ctx, EX + ux * r, EY + uy * r, ux, uy, 34, 5, EC, 3);
        ctx.restore();
      }
    });
    hits.push({ x: EX + Math.cos(RAYS[2]) * (R + 30), y: EY, r: 30, name: 'radiation leaving the surface into space' });
    hits.push({ x: EX + Math.cos(RAYS[2]) * 0.78 * R, y: EY, r: 26, name: 'heat conducted outward through the mantle' });

    /* convection: two cells turning in the outer core */
    [150, 210].forEach((g, i) => {
      const a = g * Math.PI / 180, cx = EX + Math.cos(a) * 0.37 * R, cyy = EY - Math.sin(a) * 0.37 * R, rr = 0.11 * R;
      const s = (i ? -1 : 1) * 2 * Math.PI * (t / T) * 2, a0 = s, a1 = s + (i ? -1 : 1) * 4.6;
      ctx.save(); ctx.strokeStyle = EC; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cyy, rr, a0, a1, i === 1); ctx.stroke(); ctx.restore();
      const hx = cx + rr * Math.cos(a1), hy = cyy + rr * Math.sin(a1), tx = -(i ? -1 : 1) * Math.sin(a1), ty = (i ? -1 : 1) * Math.cos(a1);
      arrow(ctx, hx - tx * 14, hy - ty * 14, hx + tx * 2, hy + ty * 2, EC, 3);
      hits.push({ x: cx, y: cyy, r: rr + 6, name: 'a convection cell in the liquid outer core' });
    });

    /* the blowup's tie to a piece of the mantle */
    const ga = -30 * Math.PI / 180, sx = EX + Math.cos(ga) * 0.8 * R, sy = EY - Math.sin(ga) * 0.8 * R, sr = 12;
    const dd = Math.hypot(BXc - sx, BYc - sy), base = Math.atan2(BYc - sy, BXc - sx), off = Math.asin((BR - sr) / dd);
    [1, -1].forEach((sg) => {
      const a = base + sg * off;
      line(ctx, sx - sg * sr * Math.sin(a), sy + sg * sr * Math.cos(a), sx + Math.cos(a) * Math.sqrt(dd * dd - (BR - sr) ** 2) - sg * sr * Math.sin(a), sy + Math.sin(a) * Math.sqrt(dd * dd - (BR - sr) ** 2) + sg * sr * Math.cos(a), alpha(PAL.ink, 0.35), 2, [6, 6]);
    });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(sx, sy, sr, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();

    /* the blowup: rock, nuclei and their decays */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(BXc, BYc, BR, 0, 2 * Math.PI); ctx.fill();
    ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5; ctx.stroke();
    ctx.clip();
    NUCLEI.forEach((p) => { dot(ctx, p.x, p.y, alpha(PAL.ink, 0.6), false, 6); });
    const n = Math.max(1, Math.round(4 * ratio)), FLY = 0.7;
    for (let i = 0; i < n; i++) {
      const t0 = (T - 0.4) * (i + 1 - 0.2 * hash(i, 7)) / n, k = (t - t0) / FLY;
      if (k < 0 || k > 1.25) continue;
      const p = NUCLEI[Math.floor(hash(i, 8) * NUCLEI.length)], a = 2 * Math.PI * hash(i, 9);
      let u = hash(i, 10), kind = I.mix[0][0];
      for (const [kk, w] of I.mix) { if (u < w) { kind = kk; break; } u -= w; }
      const L = kind === 'alpha' ? 34 : kind === 'beta' ? 70 : 100, e = F.ease.out(Math.min(1, k)), x = p.x + Math.cos(a) * L * e, y = p.y + Math.sin(a) * L * e;
      const fade = k > 1 ? Math.max(0, 1 - (k - 1) / 0.25) : 1;
      if (k < 0.35) { ctx.save(); ctx.globalAlpha *= 1 - k / 0.35; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, p.y, 6 + 30 * k, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
      ctx.save(); ctx.globalAlpha *= fade;
      if (kind === 'alpha') alphaParticle(ctx, x, y, 4.5);
      else if (kind === 'beta') dot(ctx, x, y, F.el('e-'), true, 6);
      else wave(ctx, x - Math.cos(a) * 30, y - Math.sin(a) * 30, Math.cos(a), Math.sin(a), 30, 4, F.el('gamma'), 3);
      ctx.restore();
      if (fade > 0) hits.push({ x, y, r: 12, name: (kind === 'alpha' ? 'an α particle' : kind === 'beta' ? 'a β particle, an electron' : 'a γ ray') + (kind === 'alpha' || I === ISO.K40 ? ' from ' + I.name : ' from the decay chain of ' + I.name) + ', stopped in the rock' });
    }
    ctx.restore();
    NUCLEI.forEach((p) => hits.push({ x: p.x, y: p.y, r: 9, name: 'a primordial ' + I.name + ' nucleus' }));

    /* the names */
    label(ctx, 'radiation', EX + Math.cos(RAYS[0]) * (R + 46), EY - Math.sin(RAYS[0]) * (R + 46), { side: 'above', size: 20, color: ink, gap: 22 });
    text(ctx, 'conduction', EX + Math.cos(1.85) * 0.78 * R, EY - Math.sin(1.85) * 0.78 * R, ink, { size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'convection', EX, EY - 0.37 * R, ink, { size: 18, align: 'center', bg: PAL.panel });
    label(ctx, 'inner core', EX, EY + 0.19 * R, { side: 'below', size: 18, color: ink, gap: 16, weight: 400 });
    text(ctx, 'nuclear decay in the rock', BXc, BYc - BR - 22, ink, { size: 20, align: 'center' });
    const LY = BYc + BR + 36;
    alphaParticle(ctx, BXc - 150, LY, 5);
    text(ctx, 'α', BXc - 132, LY, ink, { size: 20, align: 'left' });
    dot(ctx, BXc - 20, LY, F.el('e-'), true, 6);
    text(ctx, 'β', BXc - 6, LY, ink, { size: 20, align: 'left' });
    wave(ctx, BXc + 90, LY, 1, 0, 30, 4, F.el('gamma'), 3);
    text(ctx, 'γ', BXc + 128, LY, ink, { size: 20, align: 'left' });
    hits.push({ x: BXc - 145, y: LY, r: 14, name: 'an α particle: two protons and two neutrons' });
    hits.push({ x: BXc - 20, y: LY, r: 12, name: 'a β particle: an electron' });
    hits.push({ x: BXc + 105, y: LY, r: 16, name: 'a γ ray: a photon' });

    ro.set('\\frac{\\kRoact}{\\kRact} = e^{0.693\\kt/\\kthalf} = e^{0.693(' + fmt(tAgo.v, 1) + '\\times 10^{9}\\ \\text{y})/(' + fmt(I.half, 2) + '\\times 10^{9}\\ \\text{y})} = ' + sig3(ratio), undefined, { form: 'r' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 31.24 + 31.25 · sim-binding-curve · still · flat (rule 28.1)
   BE/A of the stable nuclides of Appendix A (one per A, the most tightly
   bound; ⁶³Cu is left out, its tabulated mass making a dip no measurement
   shows), joined as the book joins them, on axes fixed at A 0 to 250 and
   BE/A 0 to 10 MeV. Beside it the nucleus at the slider's A, its nucleons
   drawn from the cluster above at 15 px/fm, with the range of the nuclear
   force a dashed circle about the leftmost nucleon: the diameter of an A = 60
   nucleus, which the book's problem on this curve names, taken centre to
   centre across the A = 60 cluster (8.96 fm). Nucleons farther than that from
   the marked one in three dimensions are drawn faint; the first is at A = 72.
===================================================================== */
(function () {
  const H = 620, K = 15, CX = 300, CY = 340, RB = D_NN / 2 * K;
  const RANGE = (() => { const c = cluster(60, 28), m = c.reduce((a, b) => (b.x < a.x ? b : a)); return Math.max(...c.map((p) => Math.hypot(p.x - m.x, p.y - m.y, p.z - m.z))); })();
  const RAW = [[2,1,'H',1.112],[3,2,'He',2.572],[4,2,'He',7.074],[6,3,'Li',5.333],[7,3,'Li',5.607],[9,4,'Be',6.463],[10,5,'B',6.475],[11,5,'B',6.928],[12,6,'C',7.68],[13,6,'C',7.47],[14,7,'N',7.476],[15,7,'N',7.7],[16,8,'O',7.976],[18,8,'O',7.767],[19,9,'F',7.779],[20,10,'Ne',8.033],[22,10,'Ne',8.081],[23,11,'Na',8.112],[24,12,'Mg',8.261],[27,13,'Al',8.332],[28,14,'Si',8.448],[31,15,'P',8.481],[32,16,'S',8.493],[35,17,'Cl',8.52],[37,17,'Cl',8.57],[39,19,'K',8.557],[40,18,'Ar',8.595],[45,21,'Sc',8.619],[48,22,'Ti',8.723],[51,23,'V',8.742],[52,24,'Cr',8.776],[55,25,'Mn',8.765],[56,26,'Fe',8.79],[58,28,'Ni',8.732],[59,27,'Co',8.768],[60,28,'Ni',8.781],[64,30,'Zn',8.736],[65,29,'Cu',8.757],[66,30,'Zn',8.76],[69,31,'Ga',8.725],[72,32,'Ge',8.732],[74,32,'Ge',8.725],[75,33,'As',8.701],[79,35,'Br',8.688],[80,34,'Se',8.711],[84,36,'Kr',8.717],[85,37,'Rb',8.697],[86,38,'Sr',8.709],[88,38,'Sr',8.733],[89,39,'Y',8.714],[90,40,'Zr',8.71],[93,41,'Nb',8.664],[98,42,'Mo',8.635],[102,44,'Ru',8.607],[103,45,'Rh',8.584],[106,46,'Pd',8.58],[107,47,'Ag',8.554],[109,47,'Ag',8.548],[114,48,'Cd',8.532],[115,49,'In',8.517],[120,50,'Sn',8.505],[121,51,'Sb',8.482],[127,53,'I',8.446],[130,52,'Te',8.43],[132,54,'Xe',8.428],[133,55,'Cs',8.41],[136,54,'Xe',8.396],[137,56,'Ba',8.392],[138,56,'Ba',8.394],[139,57,'La',8.378],[140,58,'Ce',8.377],[141,59,'Pr',8.354],[142,60,'Nd',8.346],[152,62,'Sm',8.244],[153,63,'Eu',8.229],[158,64,'Gd',8.202],[159,65,'Tb',8.189],[164,66,'Dy',8.159],[165,67,'Ho',8.147],[166,68,'Er',8.142],[169,69,'Tm',8.115],[174,70,'Yb',8.084],[175,71,'Lu',8.069],[180,72,'Hf',8.035],[181,73,'Ta',8.024],[184,74,'W',8.005],[187,75,'Re',7.978],[191,77,'Ir',7.948],[192,76,'Os',7.949],[193,77,'Ir',7.938],[195,78,'Pt',7.927],[197,79,'Au',7.916],[199,80,'Hg',7.905],[202,80,'Hg',7.897],[205,81,'Tl',7.879],[206,82,'Pb',7.876],[207,82,'Pb',7.87],[208,82,'Pb',7.868],[209,83,'Bi',7.848],[232,90,'Th',7.615],[235,92,'U',7.591],[238,92,'U',7.57]];
  const PTS = RAW.map(([A, Z, sym, bea]) => ({ A, Z, N: A - Z, sym, bea, name: sup(A) + sym }));
  const near = (a) => PTS.reduce((p, q) => (Math.abs(q.A - a) < Math.abs(p.A - a) ? q : p));
  const SHOWN = [4, 56, 238];
  const d = sim('sim-binding-curve', H);
  const A = ctl(d.controls, { label: 'A', cls: '', min: 2, max: 238, step: 1, value: 4, unit: '', dec: 0, aria: 'the mass number of the nuclide', specials: [{ at: 56, label: 'iron' }], onInput: () => { const p = near(A.v); if (p.A !== A.v) A.set(p.A); } });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const box = { l: 620, r: 1330, t: 130, b: 520 };

  function draw() {
    const { ctx } = begin(d.c);
    const P = near(A.v), EC = C('energy'), XC = C('position'), PC = F.el('p+'), NC = F.el('n0');
    hits = [];

    /* the nucleus, the marked nucleon and the range of its nuclear force */
    const c = cluster(P.A, P.Z), m = c.reduce((a, b) => (b.x < a.x ? b : a));
    const far = c.filter((p) => Math.hypot(p.x - m.x, p.y - m.y, p.z - m.z) > RANGE + 1e-6).length;
    [...c].sort((p, q) => p.z - q.z).forEach((p) => {
      const x = CX + p.x * K, y = CY + p.y * K, out = Math.hypot(p.x - m.x, p.y - m.y, p.z - m.z) > RANGE + 1e-6;
      ball(ctx, x, y, RB, p.p ? PC : NC, out ? 0.3 : 1);
      hits.push({ x, y, r: RB, name: (p.p ? 'a proton' : 'a neutron') + (p === m ? ', the nucleon the range is drawn for' : out ? ', beyond the range of its nuclear force' : ', within the range of its nuclear force') });
    });
    const mx = CX + m.x * K, my = CY + m.y * K;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(mx, my, RB + 4, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = XC; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(mx, my, RANGE * K, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, mx, my, mx - RANGE * K * Math.cos(0.6), my + RANGE * K * Math.sin(0.6), alpha(XC, 0.8), 2);
    label(ctx, 'range of the nuclear force', mx, my - RANGE * K, { side: 'above', size: 20, color: XC, gap: 18 });
    hits.push({ x: mx - RANGE * K * Math.cos(0.6) / 2, y: my + RANGE * K * Math.sin(0.6) / 2, r: 14, name: 'the range of the nuclear force, about the diameter of a nucleus with A near 60' });
    text(ctx, P.name + ': ' + P.Z + ' protons, ' + P.N + ' neutrons', CX - 40, 556, PAL.ink, { size: 20, align: 'center' });
    ball(ctx, 90, 596, 9, PC); text(ctx, 'proton', 106, 596, PAL.ink, { size: 18, align: 'left' });
    ball(ctx, 210, 596, 9, NC); text(ctx, 'neutron', 226, 596, PAL.ink, { size: 18, align: 'left' });

    /* the curve */
    const { X, Y } = axes(ctx, box, [0, 250], [0, 10], { nx: 5, ny: 5, xl: 'A', yl: 'BE/A (MeV per nucleon)', yc: EC });
    const q = F.ease.smooth(Math.min(1, Math.max(0, (F.arrival(d) - 0.3) / 0.7)));
    const pts = F.partial(PTS.map((p) => [X(p.A), Y(p.bea)]), q);
    ctx.save(); ctx.strokeStyle = EC; ctx.lineWidth = 3; ctx.beginPath(); pts.forEach(([x, y], i) => { if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    PTS.forEach((p) => {
      hits.push({ x: X(p.A), y: Y(p.bea), r: 6, name: p.name + ': BE/A = ' + p.bea.toFixed(3) + ' MeV per nucleon' });
      if (q >= 1) dot(ctx, X(p.A), Y(p.bea), EC, true, 3.5);
    });
    const px = X(P.A), py = Y(P.bea);
    line(ctx, px, py, px, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, box.l, py, px, py, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, px, py, EC, true, 9);
    const gapOf = (p) => (p.A < 25 ? 50 : 18);
    SHOWN.forEach((a) => {
      const s = PTS.find((p) => p.A === a);
      if (s === P || Math.abs(X(s.A) - px) < 60) return;
      label(ctx, s.name, X(s.A), Y(s.bea), { side: 'above', size: 18, color: PAL.ink, gap: gapOf(s), weight: 400 });
    });
    label(ctx, P.name, px, py, { side: 'above', size: 20, color: PAL.ink, gap: gapOf(P) });

    const bea = +P.bea.toPrecision(3), BE = bea * P.A;
    topline(ctx, far
      ? P.name + ' holds each of its ' + P.A + ' nucleons by $\\kBE/A = ' + bea + '$ MeV on average, less than near iron.'
      : P.name + ' holds each of its ' + P.A + ' nucleons by $\\kBE/A = ' + bea + '$ MeV on average.');
    ro.set('\\kBE = (\\kBE/A)\\,A = (' + bea + '\\ \\text{MeV})(' + P.A + ') = ' + sig3(BE) + '\\ \\text{MeV}',
      far ? far + ' of the ' + P.A + ' nucleons lie beyond the range of the marked one.' : 'Every nucleon lies within the range of the marked one.', { form: 'bea' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
