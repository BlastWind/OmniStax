/* Figures for section 33.4 Particles, Patterns, and Conservation Laws.
   The page binds energy, mass, time and charge. Electrons, positrons, photons, neutrinos,
   protons and neutrons wear the element palette, as do the ⁸Be nucleus and the α particles;
   an antiparticle is an open disc in its particle's hue. The particles of Example 33.3 are
   the section's referents, drawn with F.ref; the muon and the tau of the other decays are
   F.cat(3) and F.cat(5). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['33.4'] = function (root, F) {
const { PAL, C, alpha, register, cycle, begin, line, dot, arrow, text, topline, hover, tex, readout, select } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 33.13 · sim-annihilation · moving · flat (rule 28.1)
   Model time 0 to 4.6 s at rate 1, the pair meeting at 2.2 s, as the book draws
   it: the electron from the upper left, the positron from the lower right, the
   photons leaving along another line, lower left and upper right. The pair
   closes at 200 units/s each and the photons leave at 280, so the pair moves at
   about 0.7 c on the drawing's own scale.
===================================================================== */
(function () {
  const H = 520, T = 4.6, TM = 2.2, V_IN = 200, V_OUT = 280;
  const O = { x: 700, y: 290 };
  const unit = (x, y) => { const n = Math.hypot(x, y); return [x / n, y / n]; };
  const IN = unit(1, 0.3), OUT = unit(1, -0.28);
  const d = sim('sim-annihilation', H);
  const cy = cycle(() => T, 1.2);
  let hits = [];
  hover(d.stage, () => hits);
  tex(d.readout, '\\kErest + \\kErest = 2(0.511\\;\\text{MeV}) = \\kEgam + \\kEgam');

  function photon(ctx, x, y, u, col, L = 110) {
    const lam = 22, A = 10, n = [-u[1], u[0]];
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const s = -L / 2 + (L * i) / 60, env = Math.cos((Math.PI * s) / L), w = A * env * Math.sin((2 * Math.PI * s) / lam);
      const px = x + u[0] * s + n[0] * w, py = y + u[1] * s + n[1] * w;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.stroke(); ctx.restore();
    arrow(ctx, x + u[0] * (L / 2 - 4), y + u[1] * (L / 2 - 4), x + u[0] * (L / 2 + 26), y + u[1] * (L / 2 + 26), col, 4);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), EL = F.el('e-'), PO = F.el('e+'), GA = F.el('gamma');
    const guide = alpha(PAL.ink, 0.3);
    hits = [];
    topline(ctx, t < TM
      ? 'An electron and a positron close in head-on, so their total momentum is zero.'
      : 'They annihilate into two identical photons that move apart in opposite directions.');

    if (t < TM) {
      const s = V_IN * (TM - t);
      const e = { x: O.x - IN[0] * s, y: O.y - IN[1] * s }, p = { x: O.x + IN[0] * s, y: O.y + IN[1] * s };
      line(ctx, e.x, e.y, p.x, p.y, guide, 2, [4, 8]);
      dot(ctx, e.x, e.y, EL, true, 18);
      dot(ctx, p.x, p.y, PO, true, 18);
      hits.push({ x: e.x, y: e.y, r: 24, name: 'the electron e⁻, charge −1, rest energy 0.511 MeV' });
      hits.push({ x: p.x, y: p.y, r: 24, name: 'the positron e⁺, its antiparticle: charge +1, the same rest energy' });
    } else {
      const k = t - TM, s = V_OUT * k;
      const flash = Math.max(0, 1 - k / 0.5);
      if (flash > 0) {
        F.faded(ctx, flash, [0, 0], () => {
          for (let i = 0; i < 12; i++) {
            const a = (i * Math.PI) / 6 + 0.2, r0 = 14 + 30 * (1 - flash), r1 = r0 + 26;
            line(ctx, O.x + Math.cos(a) * r0, O.y + Math.sin(a) * r0, O.x + Math.cos(a) * r1, O.y + Math.sin(a) * r1, GA, 3);
          }
        });
      }
      const a = { x: O.x + OUT[0] * s, y: O.y + OUT[1] * s }, b = { x: O.x - OUT[0] * s, y: O.y - OUT[1] * s };
      if (s > 60) line(ctx, b.x, b.y, a.x, a.y, guide, 2, [4, 8]);
      if (s > 20) {
        photon(ctx, a.x, a.y, OUT, GA);
        photon(ctx, b.x, b.y, [-OUT[0], -OUT[1]], GA);
        hits.push({ x: a.x, y: a.y, r: 50, name: 'a photon of 0.511 MeV, moving at the speed of light' });
        hits.push({ x: b.x, y: b.y, r: 50, name: 'the other photon, the same energy, moving the opposite way' });
      }
    }

    /* the legend: every body here moves, so none carries a label of its own */
    dot(ctx, 70, 104, EL, true, 12); text(ctx, 'electron e⁻', 128, 104, PAL.ink, { size: 20 });
    dot(ctx, 70, 140, PO, true, 12); text(ctx, 'positron e⁺', 128, 140, PAL.ink, { size: 20 });
    photon(ctx, 62, 176, [1, 0], GA, 66);
    text(ctx, 'photon γ', 128, 176, PAL.ink, { size: 20 });
  }
  register(d.fig, { update: (s) => cy.step(s, () => 1), draw });
})();

/* =====================================================================
   Sim · sim-decay-checker · still · flat (rule 28.1)
   The quantum numbers are Table 33.2's; charge is in units of q_e. ⁸Be and α
   carry the baryon number of their nucleons. Lifetimes (s) are the table's,
   with ⁸Be's 10⁻¹⁶ s from the text. The lifetime ruler is fixed at 10⁻²⁴ to
   10⁴ s, ticks every four decades; strong decays 10⁻²³ to 10⁻¹⁶ s, weak
   decays from 10⁻¹⁶ s on, as the text gives them. A decay that changes a
   number other than S is one the text rules out and carries no lifetime.
===================================================================== */
(function () {
  const H = 640;
  const P = {
    xi: { tex: '\\Xi^{-}', name: 'the Ξ⁻, a baryon', q: -1, B: 1, S: -2, life: 1.64e-10, ref: 'xi-minus' },
    lam: { tex: '\\Lambda^{0}', name: 'the Λ⁰, a baryon', B: 1, S: -1, ref: 'lambda-zero' },
    pim: { tex: '\\pi^{-}', name: 'the π⁻, a meson', q: -1, ref: 'pi-minus' },
    kp: { tex: 'K^{+}', name: 'the K⁺, a meson', q: 1, S: 1, life: 1.24e-8, ref: 'k-plus' },
    mup: { tex: '\\mu^{+}', name: 'the μ⁺, the antiparticle of the muon', q: 1, Lmu: -1, ref: 'mu-plus', anti: true },
    mum: { tex: '\\mu^{-}', name: 'the muon μ⁻, a lepton', q: -1, Lmu: 1, life: 2.2e-6, cat: 3 },
    taum: { tex: '\\tau^{-}', name: 'the tau τ⁻, a lepton', q: -1, Ltau: 1, life: 2.91e-13, cat: 5 },
    em: { tex: 'e^{-}', name: 'the electron, a lepton', q: -1, Le: 1, el: 'e-' },
    nue_b: { tex: '\\bar{\\nu}_{e}', name: 'the electron’s antineutrino', Le: -1, el: 'nu', anti: true },
    numu: { tex: '\\nu_{\\mu}', name: 'the muon’s neutrino', Lmu: 1, el: 'nu' },
    numu_b: { tex: '\\bar{\\nu}_{\\mu}', name: 'the muon’s antineutrino', Lmu: -1, el: 'nu', anti: true },
    nutau: { tex: '\\nu_{\\tau}', name: 'the tau’s neutrino', Ltau: 1, el: 'nu' },
    n: { tex: 'n', name: 'the neutron, a baryon', B: 1, life: 882, el: 'n0' },
    p: { tex: 'p', name: 'the proton, a baryon', q: 1, B: 1, el: 'p+' },
    be8: { tex: '{}^{8}\\text{Be}', name: 'the ⁸Be nucleus, four protons and four neutrons', q: 4, B: 8, life: 1e-16, el: 'Be' },
    alpha: { tex: '\\alpha', name: 'an α particle, two protons and two neutrons', q: 2, B: 4, el: 'He' },
  };
  const DECAYS = {
    xi: { label: 'Ξ⁻ → Λ⁰ + π⁻', from: 'xi', to: ['lam', 'pim'], key: 'S' },
    kaon: { label: 'K⁺ → μ⁺ + νμ', from: 'kp', to: ['mup', 'numu'], key: 'Lmu' },
    muon: { label: 'μ⁻ → e⁻ + ν̄e + νμ', from: 'mum', to: ['em', 'nue_b', 'numu'], key: 'Lmu' },
    tau: { label: 'τ⁻ → μ⁻ + ν̄μ + ντ', from: 'taum', to: ['mum', 'numu_b', 'nutau'], key: 'Ltau' },
    neutron: { label: 'n → p + e⁻ + ν̄e', from: 'n', to: ['p', 'em', 'nue_b'], key: 'Le' },
    be8: { label: '⁸Be → α + α', from: 'be8', to: ['alpha', 'alpha'], key: 'B' },
    'no-nue': { label: 'n → p + e⁻, no antineutrino', from: 'n', to: ['p', 'em'], key: 'Le' },
    'no-numu': { label: 'μ⁻ → e⁻ + ν̄e, no νμ', from: 'mum', to: ['em', 'nue_b'], key: 'Lmu' },
  };
  const ROWS = [
    { k: 'q', name: 'charge', tex: 'q/q_{e}' },
    { k: 'B', name: 'B', tex: 'B' },
    { k: 'Le', name: 'L_{e}', tex: 'L_{e}' },
    { k: 'Lmu', name: 'L_{μ}', tex: 'L_{\\mu}' },
    { k: 'Ltau', name: 'L_{τ}', tex: 'L_{\\tau}' },
    { k: 'S', name: 'S', tex: 'S' },
  ];
  const PX = 250, X0 = 480, DX = 190, XA = 1050, XV = 1150, RY = 150, R = 24, GY = 262, GDY = 40;
  const LX0 = 170, LX1 = 1250, LY = 580, LMIN = -24, LMAX = 4;
  const LX = (lt) => LX0 + ((lt - LMIN) / (LMAX - LMIN)) * (LX1 - LX0);
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const pow10 = (e) => '10' + String(e).split('').map((c) => SUP[c]).join('');
  const val = (id, k) => P[id][k] || 0;
  const sum = (ids, k) => ids.reduce((a, id) => a + val(id, k), 0);
  const sg = (v) => (v > 0 ? '+' + v : v < 0 ? '−' + -v : '0');
  const sgT = (v) => (v > 0 ? '+' + v : String(v));
  const lifeText = (v) => {
    if (v >= 1) return v + ' s';
    const e = Math.floor(Math.log10(v) + 1e-9), m = v / 10 ** e;
    return (Math.abs(m - 1) < 1e-9 ? '' : m.toFixed(2) + ' × ') + pow10(e) + ' s';
  };

  const d = sim('sim-decay-checker', H);
  const pick = select(d.controls, { label: 'decay', options: Object.keys(DECAYS).map((v) => ({ value: v, label: DECAYS[v].label })), value: 'xi', aria: 'the decay' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const xs = (n) => Array.from({ length: n }, (_, i) => X0 + i * DX);
  const hue = (id) => { const o = P[id]; return o.ref ? F.ref(o.ref) : o.el ? F.el(o.el) : F.cat(o.cat); };
  const changes = (dc) => ROWS.map((r) => ({ ...r, b: val(dc.from, r.k), a: sum(dc.to, r.k) }));

  function disc(ctx, x, y, id) {
    const col = hue(id);
    if (!P[id].anti) { dot(ctx, x, y, col, true, R); return; }
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = col; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(x, y, R - 2, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  }

  function headlineOf(dc) {
    const rows = changes(dc), broken = rows.find((r) => r.k !== 'S' && r.a !== r.b), s = rows.find((r) => r.k === 'S');
    if (broken) return (broken.k === 'q' ? 'The charge' : '$' + broken.tex + '$') + ' goes from ' + sg(broken.b) + ' to ' + sg(broken.a) + ', so this decay never happens.';
    if (s.a !== s.b) return 'Strangeness changes by ' + sg(s.a - s.b) + ' while every other number is conserved, so only the weak force can cause this decay.';
    const leptons = [dc.from, ...dc.to].some((id) => val(id, 'Le') || val(id, 'Lmu') || val(id, 'Ltau'));
    return leptons ? 'Every number is conserved, and the leptons the decay creates mark the weak force.'
      : 'Every number is conserved and no leptons are created, as in a decay by the strong force.';
  }

  function readoutOf(dc) {
    const r = ROWS.find((x) => x.k === dc.key), keys = ['b', 'c', 'd'];
    const eq = '\\mk{a}{' + P[dc.from].tex + '} \\to ' + dc.to.map((id, i) => '\\mk{' + keys[i] + '}{' + P[id].tex + '}').join(' + ');
    const terms = dc.to.map((id, i) => { const v = val(id, r.k); return i && v < 0 ? '(' + v + ')' : String(v); }).join(' + ');
    return eq + '\\qquad ' + r.tex + ':\\ ' + val(dc.from, r.k) + ' \\to ' + terms + ' = ' + sum(dc.to, r.k);
  }

  function drawDecay(ctx, v, live) {
    const dc = DECAYS[v], px = xs(dc.to.length), rows = changes(dc);
    /* the reaction: the parent, the arrow, the products */
    disc(ctx, PX, RY, dc.from);
    text(ctx, '$' + P[dc.from].tex + '$', PX, RY + R + 26, PAL.ink, { size: 24, align: 'center', tex: true });
    arrow(ctx, PX + R + 30, RY, X0 - R - 40, RY, PAL.ink, 4);
    dc.to.forEach((id, i) => {
      disc(ctx, px[i], RY, id);
      text(ctx, '$' + P[id].tex + '$', px[i], RY + R + 26, PAL.ink, { size: 24, align: 'center', tex: true });
      if (i) text(ctx, '+', (px[i] + px[i - 1]) / 2, RY, PAL.ink, { size: 26, align: 'center' });
    });
    if (live) {
      hits.push({ x: PX, y: RY, r: R + 6, name: P[dc.from].name });
      dc.to.forEach((id, i) => hits.push({ x: px[i], y: RY, r: R + 6, name: P[id].name }));
    }
    /* the tallies: the parent's number, each product's, their total and the verdict */
    rows.forEach((r, j) => {
      const y = GY + j * GDY, ink = r.k === 'q' ? C('charge') : PAL.ink;
      const cell = (x, n, w) => text(ctx, sg(n), x, y, n ? ink : alpha(PAL.muted, 0.8), { size: 21, align: 'center', weight: w });
      cell(PX, r.b, 400);
      dc.to.forEach((id, i) => cell(px[i], val(id, r.k), 400));
      cell(XA, r.a, 600);
      const kept = r.a === r.b;
      text(ctx, kept ? 'conserved' : 'changes by ' + sg(r.a - r.b), XV, y, kept ? PAL.muted : PAL.ink, { size: 20, weight: kept ? 400 : 600 });
    });
    /* the parent's lifetime, where the decay happens at all */
    const allowed = rows.every((r) => r.k === 'S' || r.a === r.b);
    const life = P[dc.from].life;
    if (allowed && life) {
      const x = LX(Math.log10(life));
      dot(ctx, x, LY, C('time'), true, 10);
      text(ctx, lifeText(life), x, LY - 62, C('time'), { size: 20, align: 'center', weight: 600 });
      line(ctx, x, LY - 50, x, LY - 36, alpha(PAL.ink, 0.35), 2, [4, 8]);
      if (live) hits.push({ x, y: LY, r: 16, name: 'the lifetime of the decaying particle, ' + lifeText(life) });
    }
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v = pick.value, dc = DECAYS[v];
    hits = [];
    topline(ctx, headlineOf(dc));

    /* the frame: row names, the total and the ruler, which every decay shares */
    text(ctx, 'total after', XA, RY, PAL.muted, { size: 20, align: 'center' });
    line(ctx, 50, GY - 30, 1350, GY - 30, alpha(PAL.ink, 0.25), 2);
    ROWS.forEach((r, j) => {
      const y = GY + j * GDY;
      text(ctx, r.name, 60, y, r.k === 'q' ? C('charge') : PAL.ink, { size: 21, weight: 600 });
      text(ctx, '→', (PX + X0) / 2 - 20, y, PAL.muted, { size: 21, align: 'center' });
    });

    const band = (l0, l1, a, name) => {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, a); ctx.fillRect(LX(l0), LY - 34, LX(l1) - LX(l0), 28); ctx.restore();
      text(ctx, name, (LX(l0) + LX(l1)) / 2, LY - 20, PAL.ink, { size: 17, align: 'center' });
    };
    band(-23, -16, 0.16, 'strong force');
    band(-16, LMAX, 0.07, 'weak force');
    line(ctx, LX0, LY, LX1, LY, PAL.muted, 3);
    for (let e = LMIN; e <= LMAX; e += 4) {
      line(ctx, LX(e), LY - 6, LX(e), LY + 6, PAL.muted, 2);
      text(ctx, pow10(e), LX(e), LY + 28, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'lifetime (s)', LX0 - 18, LY, C('time'), { size: 20, align: 'right', weight: 600 });

    if (pick.from !== v && pick.k < 1) pick.only(ctx, pick.from, () => drawDecay(ctx, pick.from, false));
    pick.only(ctx, v, () => drawDecay(ctx, v, true));

    ro.set(readoutOf(dc), undefined, { form: v });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
