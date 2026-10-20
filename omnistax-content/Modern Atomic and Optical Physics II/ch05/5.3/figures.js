/* Figures for section 5.3 Parametric Processes.
   The cascade's levels |1⟩, |2⟩, |i⟩ and its three fields ℰ₁, ℰ₂, ℰ₃ are the section's referents,
   one group, drawn in Figure 5.6. The book gives no numbers: Figure 5.7 measures lengths in an
   arbitrary unit ℓ, Δk in 1/ℓ and |Ẽ₃|² in |ν₃χ⁽²⁾Ẽ₁Ẽ₂ℓ/2c|². */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, label, axes, curve, hover, readout, pinned, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const tx = (ctx, s, x, y, col, o = {}) => text(ctx, s, x, y, col, { size: 24, weight: 600, tex: true, ...o });
const both = (ctx, x, y1, y2, col) => { const m = (y1 + y2) / 2; arrow(ctx, x, m, x, y1, col, 4); arrow(ctx, x, m, x, y2, col, 4); };

/* =====================================================================
   FIGURE 5.6 · fig-cascade-sfg · faithful copy, still
   Left: the cascade |1⟩ → |2⟩ driven by ℰ₁, ℰ₂ through far-detuned
   intermediate states |i⟩, ℰ₃ at ν₃ on the single-photon transition.
   Right: hydrogen, 2s and 2p mixed by a DC field into hybrids; the
   lower hybrid is |2⟩, 1s is |1⟩. Every arrow is notation. Not to scale.
===================================================================== */
(function () {
  const d = sim('fig-cascade-sfg', 560);
  const hits = []; hover(d.stage, () => hits, d.c);
  const frame = (ctx, l, r) => { const c = alpha(PAL.ink, 0.3); line(ctx, l, 20, r, 20, c, 1.5); line(ctx, r, 20, r, 540, c, 1.5); line(ctx, r, 540, l, 540, c, 1.5); line(ctx, l, 540, l, 20, c, 1.5); };
  function fields(ctx, x3, x12, yTop, yBot, f1, f2, f3, fq) {
    const ym = (yTop + yBot) / 2;
    both(ctx, x3, yBot - 6, yTop + 6, f3);
    tx(ctx, '$\\kEthree$', x3 - 54, ym, f3, { align: 'right' }); tx(ctx, '$\\knu_3$', x3 - 16, ym, fq, { align: 'right' });
    both(ctx, x12, yBot - 6, ym + 12, f1); both(ctx, x12, ym - 12, yTop + 6, f2);
    tx(ctx, '$\\kEone$', x12 - 16, (ym + yBot) / 2, f1, { align: 'right' }); tx(ctx, '$\\knu_1$', x12 + 16, (ym + yBot) / 2, fq);
    tx(ctx, '$\\kEtwo$', x12 - 16, (ym + yTop) / 2, f2, { align: 'right' }); tx(ctx, '$\\knu_2$', x12 + 16, (ym + yTop) / 2, fq);
    return ym;
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), ri = F.ref('lvl-i'), f1 = F.ref('field-1'), f2 = F.ref('field-2'), f3 = F.ref('field-3'), fq = C('frequency');
    frame(ctx, 30, 680); frame(ctx, 720, 1370);
    /* the cascade */
    text(ctx, 'Cascade system:', 355, 58, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'frequency sum generation', 355, 88, PAL.ink, { size: 22, align: 'center' });
    const Y2 = 150, Y1 = 480;
    line(ctx, 140, Y2, 420, Y2, r2, 5); line(ctx, 140, Y1, 420, Y1, r1, 5);
    tx(ctx, '$|2\\rangle$', 434, Y2, r2, { size: 26 }); tx(ctx, '$|1\\rangle$', 434, Y1, r1, { size: 26 });
    [292, 306, 320, 334].forEach((y) => line(ctx, 450, y, 590, y, ri, 2.5, [8, 6]));
    tx(ctx, '$|i\\rangle$', 602, 313, ri, { size: 26 });
    text(ctx, 'intermediate', 530, 380, ri, { size: 20, align: 'center' }); text(ctx, 'states', 530, 406, ri, { size: 20, align: 'center' });
    const ym = fields(ctx, 230, 350, Y2, Y1, f1, f2, f3, fq);
    /* hydrogen in a DC field */
    text(ctx, 'Hydrogen atom in a DC electric field', 1045, 58, PAL.ink, { size: 22, align: 'center' });
    const YP = 140, YS = 166, YU = 118, YH = 192, YG = 480;
    line(ctx, 800, YP, 860, YP, PAL.ink, 3); line(ctx, 860, YP, 900, YU, PAL.ink, 3); line(ctx, 900, YU, 1180, YU, PAL.ink, 3);
    line(ctx, 800, YS, 860, YS, PAL.ink, 3); line(ctx, 860, YS, 900, YH, r2, 4); line(ctx, 900, YH, 1180, YH, r2, 5);
    tx(ctx, '$|2p\\rangle$', 790, YP, PAL.ink, { size: 22, align: 'right' }); tx(ctx, '$|2s\\rangle$', 790, YS, PAL.ink, { size: 22, align: 'right' });
    text(ctx, 'hybrid state', 1040, (YU + YH) / 2 + 4, r2, { size: 20, align: 'center' });
    line(ctx, 990, YG, 1240, YG, r1, 5); tx(ctx, '$|1s\\rangle$', 1252, YG, r1, { size: 26 });
    ['Both single-', 'and two-photon', 'transitions are', 'dipole allowed.'].forEach((s, i) => text(ctx, s, 870, 300 + 28 * i, PAL.ink, { size: 20, align: 'center' }));
    const yh = fields(ctx, 1080, 1180, YH, YG, f1, f2, f3, fq);
    hits.push({ x: 280, y: Y2, r: 30, name: 'the upper state |2⟩' }, { x: 280, y: Y1, r: 30, name: 'the lower state |1⟩' },
      { x: 520, y: 313, r: 40, name: 'the intermediate states |i⟩, far detuned from both fields' },
      { x: 230, y: ym, r: 34, name: 'the sum-frequency field ℰ₃ at ν₃ = ν₁ + ν₂, on the single-photon transition' },
      { x: 350, y: (ym + Y1) / 2, r: 30, name: 'the applied field ℰ₁ of frequency ν₁' }, { x: 350, y: (ym + Y2) / 2, r: 30, name: 'the applied field ℰ₂ of frequency ν₂' },
      { x: 830, y: YP, r: 22, name: 'the 2p level of hydrogen without the field' }, { x: 830, y: YS, r: 22, name: 'the 2s level of hydrogen without the field' },
      { x: 1100, y: YU, r: 24, name: 'the upper hybrid of 2s and 2p in the DC field' }, { x: 960, y: YH, r: 24, name: 'the hybrid state |2⟩, a mixture of 2s and 2p of no definite parity' },
      { x: 1115, y: YG, r: 30, name: 'the ground state |1s⟩ of hydrogen, |1⟩' },
      { x: 1080, y: yh, r: 34, name: 'the sum-frequency field ℰ₃ at ν₃ = ν₁ + ν₂, on the single-photon transition' },
      { x: 1180, y: (yh + YG) / 2, r: 30, name: 'the applied field ℰ₁ of frequency ν₁' }, { x: 1180, y: (yh + YH) / 2, r: 30, name: 'the applied field ℰ₂ of frequency ν₂' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.7 · sim-phase-matching · still, 2D, graph alone
   |Ẽ₃(z)|² = sin²(Δk z/2)/(Δk/2)², Eq. (5.76) squared, in units of
   |ν₃χ⁽²⁾Ẽ₁Ẽ₂ℓ/2c|², beside the phase-matched z² of Eq. (5.77).
   Axes fixed: z 0…12 ℓ, |Ẽ₃|² 0…2 (the default peak 4/Δk² = 1.31);
   larger values are clipped at the top and pinned where marked.
===================================================================== */
(function () {
  const d = sim('sim-phase-matching', 560);
  const XM = 12, YM = 2, BOX = { l: 150, r: 1290, t: 140, b: 430 };
  const dk = ctl(d.controls, { label: '\\kDeltakmis', cls: 'wavevector', key: 'dk', min: 0, max: 4, step: 0.01, value: 1.75, unit: 'ℓ⁻¹', dec: 2,
    aria: 'the wavevector mismatch, in inverse units of length', specials: [{ at: 0, label: 'phase-matched' }] });
  const Lc = ctl(d.controls, { label: '\\kLmed', cls: 'length', key: 'L', min: 0.5, max: 12, step: 0.05, value: 8, unit: 'ℓ', dec: 2,
    aria: 'the length of the medium', specials: [{ at: () => (dk.v > 0 && Math.PI / dk.v <= XM ? Math.PI / dk.v : null), label: 'peak' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const clip = (ctx, f) => { ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t - 2, BOX.r - BOX.l, BOX.b - BOX.t + 4); ctx.clip(); f(); ctx.restore(); };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const k = dk.v, L = Lc.v, E = C('electric-field'), len = C('length'), matched = k < 1e-9;
    const I = (z) => (matched ? z * z : (4 * Math.sin((k * z) / 2) ** 2) / (k * k));
    const { X, Y } = axes(ctx, BOX, [0, XM], [0, YM], { nx: 6, ny: 4, fy: (v) => fmt(v, 1) });
    tx(ctx, '$|\\tilde{\\kEenv}_3|^2$', BOX.l, BOX.t - 26, E, { size: 20 });
    tx(ctx, '$\\kzprop$ (ℓ)', BOX.r + 24, BOX.b + 26, len, { size: 20 });
    ctx.save(); ctx.fillStyle = alpha(len, 0.08); ctx.fillRect(X(0), BOX.t, X(L) - X(0), BOX.b - BOX.t); ctx.restore();
    line(ctx, X(L), BOX.t, X(L), BOX.b, alpha(len, 0.7), 2, [10, 10]);
    tx(ctx, '$\\kLmed$', X(L) + (L > XM - 0.8 ? -10 : 10), BOX.b - 18, len, { size: 22, align: L > XM - 0.8 ? 'right' : 'left', bg: PAL.panel });
    if (!matched) clip(ctx, () => { ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (z) => z * z, 0, Math.sqrt(YM) + 0.05, X, Y, alpha(E, 0.6), 3, 60); ctx.restore(); });
    clip(ctx, () => curve(ctx, I, 0, XM, X, Y, E, 5, 720));
    const xs = Math.sqrt(YM);
    label(ctx, matched ? 'phase-matched' : 'phase-matched, Δk = 0', X(xs), BOX.t, { side: 'right', color: E, gap: 16, leader: false, size: 18 });
    hits.push({ x: X(xs * 0.8), y: Y(0.64 * YM), r: 22, name: 'the phase-matched growth |Ẽ₃|² = z², Eq. (5.77)' });
    if (!matched) {
      const zp = Math.PI / k, ip = 4 / (k * k);
      if (zp <= XM) {
        if (ip <= YM) {
          line(ctx, X(zp), Y(ip), X(zp), BOX.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
          dot(ctx, X(zp), Y(ip), E, false, 10);
          label(ctx, 'π/Δk', X(zp), Y(ip), { side: 'above', color: PAL.ink, gap: 22, leader: false, size: 18 });
        } else pinned(ctx, BOX, X, Y, zp, ip, E, `peak ${fmt(ip, 1)}`);
        hits.push({ x: X(zp), y: Y(Math.min(ip, YM)), r: 20, name: `the peak at z = π/Δk = ${fmt(zp, 2)} ℓ, |Ẽ₃|² = ${fmt(ip, 2)}, Eq. (5.78)` });
      }
      if ((2 * Math.PI) / k <= XM) hbracket(ctx, X(0), X((2 * Math.PI) / k), BOX.b + 64, len, 'coherence length 2π/Δk', { side: 'below', size: 18 });
    }
    const out = pinned(ctx, BOX, X, Y, L, I(L), E, I(L) > YM ? fmt(I(L), 1) : undefined);
    hits.push({ x: out.x, y: out.y, r: 20, name: `the field leaving the medium at L = ${fmt(L, 2)} ℓ, |Ẽ₃|² = ${fmt(I(L), 2)}` });
    topline(ctx, matched ? `Phase-matched, the field grows linearly with distance: $|\\tilde{\\kEenv}_3|^2$ = ${fmt(L * L, 1)} at the end of the medium, $\\kLmed$ = ${fmt(L, 2)} ℓ.`
      : `The field peaks at $\\kzprop$ = π/$\\kDeltakmis$ = ${fmt(Math.PI / k, 2)} ℓ with $|\\tilde{\\kEenv}_3|^2$ = ${fmt(4 / (k * k), 2)}; at $\\kLmed$ = ${fmt(L, 2)} ℓ it is ${fmt(I(L), 2)}.`);
    const unit = 'in units of $|\\knu_3\\kchiII\\tilde{\\kEenv}_1\\tilde{\\kEenv}_2\\,\\ell/2c|^2$.';
    if (matched) ro.set(`|\\tilde{\\kEenv}_3(\\kLmed)|^2 = \\kLmed^2 = ${fmt(L, 2)}^2 = ${fmt(L * L, 2)}`, `Eq. (5.77) squared, ${unit}`, { form: 'pm' });
    else ro.set(`|\\tilde{\\kEenv}_3(\\kLmed)|^2 = \\frac{\\sin^2(\\kDeltakmis\\kLmed/2)}{(\\kDeltakmis/2)^2} = \\frac{\\sin^2(${fmt((k * L) / 2, 3)})}{${fmt(k / 2, 3)}^2} = ${fmt(I(L), 3)}`,
      `Eq. (5.76) squared, ${unit}`, { form: 'mis' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
