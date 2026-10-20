/* Figures for section 9.4 Quantum dynamics in non-linear mixing processes.
   Quadratures are Lukin's x̂, p̂ (Eqs. 9.162–9.163): the vacuum has ⟨Δx̂²⟩ = ⟨Δp̂²⟩ = 1/2, so a
   coherent state's noise disc, drawn one standard deviation out, has radius 1/√2. Rates are in
   units of κ where κ appears. Referents: the cascade levels and the pump and generated fields of
   Figure 9.9, the signal and local oscillator of Figure 9.12, the two inputs of Figure 9.14. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, label, axes, curve, hbracket, vbracket, hover, readout, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const SQ2 = Math.SQRT2, S0 = 1 / SQ2;
const both = (ctx, x1, y1, x2, y2, col, w) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, w); arrow(ctx, mx, my, x2, y2, col, w); };
/* A Gaussian noise distribution shaded on one scale, its one-standard-deviation contour outlined.
   (px, py) the centre in canvas units, (a, b) the standard deviations in canvas units, ang the
   rotation counterclockwise on the page. */
function blob(ctx, px, py, a, b, ang, col, fill, dash) {
  if (fill) {
    ctx.save(); ctx.translate(px, py); ctx.rotate(-ang); ctx.scale(a, b);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 2.2);
    [0, 0.5, 1, 1.5, 2.2].forEach((r) => g.addColorStop(r / 2.2, alpha(col, r > 2.1 ? 0 : 0.55 * Math.exp(-r * r / 2))));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 2.2, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
  }
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.ellipse(px, py, a, b, -ang, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
}
/* a beamsplitter or mirror: a slab of length len at angle ang (radians, on the page) */
function slab(ctx, x, y, len, ang, thick, hollow) {
  const ux = Math.cos(ang), uy = -Math.sin(ang), nx = -uy * thick / 2, ny = ux * thick / 2, h = len / 2;
  const P = [[x - ux * h + nx, y - uy * h + ny], [x + ux * h + nx, y + uy * h + ny], [x + ux * h - nx, y + uy * h - ny], [x - ux * h - nx, y - uy * h - ny]];
  ctx.save(); ctx.beginPath(); P.forEach(([a, b], i) => (i ? ctx.lineTo(a, b) : ctx.moveTo(a, b))); ctx.closePath();
  ctx.fillStyle = hollow ? PAL.panel : PAL.ink; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
}
/* a photodetector: a half disc whose flat face meets the beam coming from `from` ('left' or 'up') */
function detector(ctx, x, y, from) {
  ctx.save(); ctx.beginPath();
  if (from === 'left') { ctx.moveTo(x - 4, y - 34); ctx.lineTo(x - 4, y + 34); ctx.arc(x - 4, y, 34, Math.PI / 2, -Math.PI / 2, true); }
  else { ctx.moveTo(x - 34, y - 4); ctx.lineTo(x + 34, y - 4); ctx.arc(x, y - 4, 34, 0, Math.PI, false); }
  ctx.closePath(); ctx.fillStyle = PAL.soft; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
}
function subtractor(ctx, x, y) {
  ctx.save(); ctx.beginPath(); ctx.arc(x, y, 26, 0, 2 * Math.PI); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
  line(ctx, x - 11, y, x + 11, y, PAL.ink, 4);
}
/* two beams side by side, the colours of the two fields a beam carries after the beamsplitter */
function pair(ctx, x1, y1, x2, y2, c1, c2) {
  const d = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / d * 4, ny = (x2 - x1) / d * 4;
  line(ctx, x1 + nx, y1 + ny, x2 + nx - (x2 - x1) / d * 14, y2 + ny - (y2 - y1) / d * 14, c1, 4);
  line(ctx, x1 - nx, y1 - ny, x2 - nx - (x2 - x1) / d * 14, y2 - ny - (y2 - y1) / d * 14, c2, 4);
  arrow(ctx, x2 - (x2 - x1) / d * 30, y2 - (y2 - y1) / d * 30, x2, y2, PAL.ink, 4);
}

/* =====================================================================
   FIGURE 9.9 · fig-opo · faithful copy, still
   The cascade |1⟩, |3⟩, |2⟩: the pump ℰ₀ at ν₀ spans |1⟩–|2⟩, two photons
   of the cavity field at ν_c = ν₀/2 return the atom, far from |3⟩. Right:
   the pump entering a cavity of atoms. Not to scale.
===================================================================== */
(function () {
  const d = sim('fig-opo', 520);
  const hits = []; hover(d.stage, () => hits, d.c);
  const Y1 = 450, Y2 = 90, YM = (Y1 + Y2) / 2, Y3 = 190;
  const ATOMS = [[1010, 220], [1060, 255], [1105, 205], [1150, 250], [1195, 215], [1035, 300], [1090, 310], [1140, 295], [1185, 300], [1070, 190]];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2'), r3 = F.ref('lvl-3'), rp = F.ref('pump'), rg = F.ref('generated');
    const fr = C('frequency'), ef = C('electric-field');
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(40, 30, 600, 460); ctx.strokeRect(680, 30, 680, 460); ctx.restore();
    line(ctx, 100, Y2, 520, Y2, r2, 5); line(ctx, 100, Y1, 520, Y1, r1, 5); line(ctx, 400, Y3, 520, Y3, r3, 4, [12, 10]);
    text(ctx, '|2⟩', 540, Y2, r2, { size: 28, weight: 600 }); text(ctx, '|1⟩', 540, Y1, r1, { size: 28, weight: 600 });
    text(ctx, '|3⟩', 540, Y3, r3, { size: 28, weight: 600 });
    text(ctx, 'intermediate', 460, Y3 + 32, PAL.muted, { size: 17, align: 'center' }); text(ctx, 'state', 460, Y3 + 54, PAL.muted, { size: 17, align: 'center' });
    both(ctx, 170, Y2 + 4, 170, Y1 - 4, rp, 5);
    text(ctx, 'ℰ_0', 150, (Y1 + Y2) / 2, ef, { size: 26, weight: 600, align: 'right' }); text(ctx, 'ν_0', 190, (Y1 + Y2) / 2, fr, { size: 26, weight: 600 });
    both(ctx, 320, Y2 + 4, 320, YM - 6, rg, 5); both(ctx, 320, YM + 6, 320, Y1 - 4, rg, 5);
    text(ctx, 'ℰ', 300, (Y2 + YM) / 2, ef, { size: 26, weight: 600, align: 'right' }); text(ctx, 'ν_c', 340, (Y2 + YM) / 2, fr, { size: 26, weight: 600 });
    text(ctx, 'ℰ', 300, (YM + Y1) / 2, ef, { size: 26, weight: 600, align: 'right' }); text(ctx, 'ν_c', 340, (YM + Y1) / 2, fr, { size: 26, weight: 600 });
    /* the cavity: two concave mirrors, the atoms between them, the pump coming in */
    [[900, 1], [1300, -1]].forEach(([x, s]) => {
      ctx.save(); ctx.beginPath(); ctx.moveTo(x - s * 22, 110); ctx.quadraticCurveTo(x + s * 40, 255, x - s * 22, 400); ctx.lineTo(x - s * 52, 400); ctx.quadraticCurveTo(x + s * 2, 255, x - s * 52, 110); ctx.closePath();
      ctx.fillStyle = PAL.soft; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    });
    ATOMS.forEach(([x, y]) => dot(ctx, x, y, PAL.ink, true, 8));
    arrow(ctx, 730, 255, 850, 255, rp, 5); text(ctx, 'ℰ_0', 780, 220, ef, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'atomic medium', 1100, 360, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'optical cavity', 1100, 455, PAL.ink, { size: 22, align: 'center' });
    hits.push({ x: 300, y: Y2, r: 30, name: 'the upper state |2⟩' }, { x: 300, y: Y1, r: 30, name: 'the ground state |1⟩' },
      { x: 460, y: Y3, r: 28, name: 'the intermediate state |3⟩, far from the two-photon midpoint' },
      { x: 170, y: (Y1 + Y2) / 2, r: 34, name: 'the pump ℰ₀ at frequency ν₀' },
      { x: 320, y: (Y2 + YM) / 2, r: 30, name: 'a photon of the cavity field at ν_c = ν₀/2' }, { x: 320, y: (YM + Y1) / 2, r: 30, name: 'a photon of the cavity field at ν_c = ν₀/2' },
      { x: 790, y: 255, r: 34, name: 'the pump ℰ₀ entering the cavity' }, { x: 890, y: 255, r: 40, name: 'a cavity mirror' }, { x: 1290, y: 255, r: 40, name: 'a cavity mirror' },
      ...ATOMS.map(([x, y]) => ({ x, y, r: 14, name: 'an atom of the medium' })));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.10 · sim-squeezing · still, 2D, field strip beside
   ⟨Δx̂²⟩ = e^{2β̃t}/2, ⟨Δp̂²⟩ = e^{−2β̃t}/2 (9.168–9.169); the means
   follow (9.166–9.167) from the coherent state |α⟩, |α| = 1.5, ⟨x̂⟩ + i⟨p̂⟩
   = √2 α. Plane fixed at ±6 (the centre reaches 2.12·e^{0.7} = 4.3 and the
   ellipse 1.4 beyond). Strip: x̂ cos ν_c t + p̂ sin ν_c t (Eq. 9.17), ν_c t
   0–4π, field −6…6 fixed; the dashed lines are the vacuum's noise about
   the same mean.
===================================================================== */
(function () {
  const d = sim('sim-squeezing', 640);
  const bt = ctl(d.controls, { label: '\\kbetatilde\\kt', cls: '', key: 'bt', min: 0, max: 0.7, step: 0.01, value: 0.5, unit: '', dec: 2,
    aria: 'the gain beta tilde times the time t', specials: [{ at: 0, label: 'coherent' }] });
  const ph = ctl(d.controls, { label: '\\arg\\kalphacoh', cls: 'phase', key: 'arg', min: -180, max: 180, step: 1, value: 35, unit: '°', dec: 0,
    aria: 'the phase of the starting coherent amplitude, in degrees', specials: [{ at: 0, label: 'along x' }, { at: 90, label: 'along p' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const PS = { l: 110, r: 590, t: 116, b: 596 }, ST = { l: 740, r: 1330, t: 200, b: 520 }, A = 1.5;
  const K = (PS.r - PS.l) / 12;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const q = C('quadrature'), st = C('state'), ef = C('electric-field');
    const g = bt.v, a = (ph.v * Math.PI) / 180;
    const x0 = SQ2 * A * Math.cos(a), p0 = SQ2 * A * Math.sin(a), x = x0 * Math.exp(g), p = p0 * Math.exp(-g);
    const Vx = 0.5 * Math.exp(2 * g), Vp = 0.5 * Math.exp(-2 * g);
    const { X, Y } = axes(ctx, PS, [-6, 6], [-6, 6], { nx: 6, ny: 6 });
    text(ctx, '$\\kxquad$', PS.r + 18, Y(0), q, { size: 24, weight: 600, tex: true });
    text(ctx, '$\\kpquad$', X(0), PS.t - 22, q, { size: 24, weight: 600, tex: true, align: 'center' });
    /* the path of the centre: x̂p̂ fixed, Eqs. 9.166–9.167 */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.beginPath();
    for (let i = 0; i <= 40; i++) { const s = (g * i) / 40, px = X(x0 * Math.exp(s)), py = Y(p0 * Math.exp(-s)); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    blob(ctx, X(0), Y(0), S0 * K, S0 * K, 0, PAL.muted, false, [8, 8]);
    line(ctx, X(0), Y(0), X(x0), Y(p0), alpha(q, 0.5), 3, [10, 10]);
    blob(ctx, X(x0), Y(p0), S0 * K, S0 * K, 0, st, false, [10, 8]);
    line(ctx, X(0), Y(0), X(x), Y(p), q, 4);
    blob(ctx, X(x), Y(p), Math.sqrt(Vx) * K, Math.sqrt(Vp) * K, 0, st, true);
    dot(ctx, X(x), Y(p), st, true, 6);
    hits.push({ x: X(0), y: Y(0), r: S0 * K, name: 'the vacuum: noise 1/2 in every quadrature' },
      { x: X(x0), y: Y(p0), r: S0 * K, name: `the coherent state |α⟩ it starts from, ⟨x̂⟩ = ${fmt(x0, 2)}, ⟨p̂⟩ = ${fmt(p0, 2)}` },
      { x: X(x), y: Y(p), r: Math.max(14, Math.sqrt(Vp) * K), name: `the squeezed state, ⟨x̂⟩ = ${fmt(x, 2)}, ⟨p̂⟩ = ${fmt(p, 2)}, ⟨Δx̂²⟩ = ${fmt(Vx, 2)}, ⟨Δp̂²⟩ = ${fmt(Vp, 2)}` });
    /* legend */
    const LY = 116;
    blob(ctx, 760, LY, 12, 12, 0, PAL.muted, false, [6, 6]); text(ctx, 'vacuum', 782, LY, PAL.muted, { size: 18 });
    blob(ctx, 920, LY, 12, 12, 0, st, false, [6, 6]); text(ctx, '$|\\kalphacoh\\rangle$, the start', 942, LY, st, { size: 18, tex: true });
    blob(ctx, 1150, LY, 18, 8, 0, st, true); text(ctx, 'squeezed', 1176, LY, st, { size: 18 });
    /* the field over two cycles */
    const S = axes(ctx, ST, [0, 4 * Math.PI], [-6, 6], { nx: 4, ny: 6, fx: (v) => ['0', 'π', '2π', '3π', '4π'][Math.round(v / Math.PI)] });
    text(ctx, '$\\knu_c\\kt$', ST.r, ST.b + 58, C('frequency'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kxquad\\cos\\knu_c\\kt + \\kpquad\\sin\\knu_c\\kt$', ST.l, ST.t - 28, ef, { size: 20, weight: 600, tex: true });
    const m = (f) => x * Math.cos(f) + p * Math.sin(f), sd = (f) => Math.sqrt(Vx * Math.cos(f) ** 2 + Vp * Math.sin(f) ** 2);
    ctx.save(); ctx.fillStyle = alpha(st, 0.35); ctx.beginPath();
    for (let i = 0; i <= 240; i++) { const f = (4 * Math.PI * i) / 240; const yy = S.Y(m(f) + sd(f)); if (i) ctx.lineTo(S.X(f), yy); else ctx.moveTo(S.X(f), yy); }
    for (let i = 240; i >= 0; i--) { const f = (4 * Math.PI * i) / 240; ctx.lineTo(S.X(f), S.Y(m(f) - sd(f))); }
    ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.setLineDash([8, 8]);
    curve(ctx, (f) => m(f) + S0, 0, 4 * Math.PI, S.X, S.Y, alpha(PAL.ink, 0.55), 2, 240);
    curve(ctx, (f) => m(f) - S0, 0, 4 * Math.PI, S.X, S.Y, alpha(PAL.ink, 0.55), 2, 240);
    ctx.restore();
    curve(ctx, m, 0, 4 * Math.PI, S.X, S.Y, ef, 4, 240);
    /* where the band is narrowest: the p̂ quadrature, ν_c t = π/2 + kπ */
    if (g > 0.02) for (let k = 0; k < 4; k++) { const f = Math.PI / 2 + k * Math.PI; hits.push({ x: S.X(f), y: S.Y(m(f)), r: 18, name: `here the field is p̂ alone and its noise is √⟨Δp̂²⟩ = ${fmt(Math.sqrt(Vp), 2)}, below the vacuum's 0.71` }); }
    hits.push({ x: S.X(0.2), y: S.Y(m(0.2)), r: 16, name: 'the mean field ⟨x̂⟩cos ν_c t + ⟨p̂⟩sin ν_c t' });
    topline(ctx, g < 0.005 ? 'At $\\kbetatilde\\kt = 0$ the state is the coherent state: noise 1/2 in every quadrature.'
      : `$\\langle\\Delta\\kxquad^2\\rangle$ = ${fmt(Vx, 2)} and $\\langle\\Delta\\kpquad^2\\rangle$ = ${fmt(Vp, 2)}; their product stays 1/4.`);
    ro.set(`\\langle\\Delta\\kxquad^2\\rangle\\langle\\Delta\\kpquad^2\\rangle = \\tfrac{1}{2}e^{2\\kbetatilde\\kt}\\cdot\\tfrac{1}{2}e^{-2\\kbetatilde\\kt} = ${fmt(Vx, 3)}\\times${fmt(Vp, 3)} = 0.25`,
      `The centre moves too: $\\langle\\kxquad\\rangle = ${fmt(x0, 2)}e^{\\kbetatilde\\kt} = ${fmt(x, 2)}$ and $\\langle\\kpquad\\rangle = ${fmt(p0, 2)}e^{-\\kbetatilde\\kt} = ${fmt(p, 2)}$, Eqs. (9.166)–(9.167).`, { form: 'sq' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.11 · sim-output-squeezing · still, graph alone
   ⟨ΔP̂_out²(ω)⟩/⟨ΔP²⟩_SQL = ((κ/2 − β̃)² + ω²)/((κ/2 + β̃)² + ω²), from
   |Eq. 9.191|² with ⟨F̂_pF̂_p⟩ = κ/2 (9.178); the intracavity 2⟨Δp̂²⟩ =
   κ/(κ + 2β̃) of (9.185) dashed. Axes fixed: ω/κ −4…4, ratio 0–1.2.
===================================================================== */
(function () {
  const d = sim('sim-output-squeezing', 560);
  const bk = ctl(d.controls, { label: '\\kbetatilde/\\kkappa', cls: '', key: 'bk', min: 0, max: 0.5, step: 0.005, value: 0.5, unit: '', dec: 2,
    aria: 'the gain beta tilde over the cavity loss rate kappa', specials: [{ at: 0, label: 'no pump' }, { at: 0.5, label: 'threshold' }] });
  const om = ctl(d.controls, { label: '\\komega/\\kkappa', cls: 'frequency', key: 'omega', min: -4, max: 4, step: 0.01, value: 0.5, unit: '', dec: 2,
    aria: 'the Fourier frequency omega over kappa', specials: [{ at: 0, label: 'zero' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 190, r: 1250, t: 120, b: 450 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const q = C('quadrature'), rt = C('rate'), fq = C('frequency');
    const u = bk.v, w = om.v, a = 0.5 - u, b = 0.5 + u;
    const Sf = (x) => (a * a + x * x) / (b * b + x * x), inside = 1 / (1 + 2 * u);
    const { X, Y } = axes(ctx, BOX, [-4, 4], [0, 1.2], { nx: 8, ny: 6, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\komega/\\kkappa$', BOX.r, BOX.b + 58, fq, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\langle\\Delta\\kPquad_\\mathrm{out}^2\\rangle/\\langle\\Delta P^2\\rangle_\\mathrm{SQL}$', BOX.l, BOX.t - 30, q, { size: 20, weight: 600, tex: true });
    line(ctx, BOX.l, Y(1), BOX.r, Y(1), PAL.ink, 3);
    text(ctx, 'standard quantum limit', BOX.r - 8, Y(1) - 20, PAL.muted, { size: 17, align: 'right' });
    line(ctx, BOX.l, Y(inside), BOX.r, Y(inside), alpha(q, 0.75), 3, [10, 10]);
    if (u > 0.01) text(ctx, 'inside the cavity', BOX.l + 12, Y(inside) - 18, q, { size: 17, bg: PAL.panel });
    curve(ctx, Sf, -4, 4, X, Y, q, 5, 320);
    const S0v = Sf(0);
    if (u > 0.02) {
      const h = (1 + S0v) / 2, wh = Math.sqrt(Math.max(0, (h * b * b - a * a) / (1 - h)));
      if (wh < 3.9) hbracket(ctx, X(-wh), X(wh), Y(h), rt, `${fmt(2 * wh, 2)}κ`, { size: 20 });
    }
    line(ctx, X(w), BOX.b, X(w), Y(Sf(w)), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, X(w), Y(Sf(w)), q);
    hits.push({ x: X(w), y: Y(Sf(w)), r: 18, name: `at ω = ${fmt(w, 2)}κ the output noise is ${fmt(Sf(w), 2)} of the standard quantum limit` },
      { x: X(0), y: Y(S0v), r: 18, name: `at ω = 0 the output noise is ${fmt(S0v, 2)} of the standard quantum limit` },
      { x: X(-3.5), y: Y(inside), r: 16, name: `inside the cavity the noise of p̂ is ${fmt(inside, 2)} of the vacuum's, Eq. (9.185)` });
    const W = w < 0 ? `(${fmt(w, 2)})` : fmt(w, 2);
    topline(ctx, u < 0.005 ? 'With no pump the output carries exactly the noise of a coherent state.'
      : `At $\\komega$ = ${fmt(w, 2)}$\\kkappa$ the output noise is ${fmt(Sf(w), 2)} of the standard quantum limit; inside the cavity it is ${fmt(inside, 2)}.`);
    ro.set(`\\frac{\\langle\\Delta\\kPquad_\\mathrm{out}^2\\rangle}{\\langle\\Delta P^2\\rangle_\\mathrm{SQL}} = \\frac{(\\kkappa/2 - \\kbetatilde)^2 + \\komega^2}{(\\kkappa/2 + \\kbetatilde)^2 + \\komega^2} = \\frac{${fmt(a, 2)}^2 + ${W}^2}{${fmt(b, 2)}^2 + ${W}^2} = ${fmt(Sf(w), 2)}`,
      `In units of $\\kkappa$. Inside the cavity $2\\langle\\Delta\\kpquad^2\\rangle = \\kkappa/(\\kkappa + 2\\kbetatilde) = ${fmt(inside, 2)}$, Eq. (9.185).`, { form: 'out' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.12 · fig-homodyne · faithful copy, still
   The signal â and the local oscillator b̂_LO on a 50/50 beamsplitter;
   each output beam carries both fields; two photodetectors; the
   difference current n̂₋.
===================================================================== */
(function () {
  const d = sim('fig-homodyne', 500);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BS = [420, 190];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const rs = F.ref('signal'), rl = F.ref('lo');
    arrow(ctx, 110, BS[1], BS[0] - 14, BS[1], rs, 5);
    text(ctx, '$\\hat{a}$', 90, BS[1], rs, { size: 28, weight: 600, align: 'right', tex: true }); text(ctx, 'signal', 200, BS[1] + 28, rs, { size: 20 });
    arrow(ctx, BS[0], 40, BS[0], BS[1] - 14, rl, 5);
    text(ctx, '$\\hat{b}_{LO}$', BS[0] - 20, 52, rl, { size: 26, weight: 600, align: 'right', tex: true }); text(ctx, 'local oscillator', BS[0] + 22, 76, rl, { size: 20 });
    pair(ctx, BS[0] + 14, BS[1], 880, BS[1], rs, rl);
    pair(ctx, BS[0], BS[1] + 14, BS[0], 360, rs, rl);
    slab(ctx, BS[0], BS[1], 150, -Math.PI / 4, 16, true);
    text(ctx, 'beamsplitter', BS[0] + 66, BS[1] + 70, PAL.ink, { size: 20 });
    text(ctx, '$\\hat{a}^{(1)}_\\mathrm{out}$', 660, BS[1] - 30, PAL.ink, { size: 22, tex: true, align: 'center' });
    text(ctx, '$\\hat{a}^{(2)}_\\mathrm{out}$', BS[0] - 24, 290, PAL.ink, { size: 22, tex: true, align: 'right' });
    detector(ctx, 920, BS[1], 'left'); detector(ctx, BS[0], 400, 'up');
    text(ctx, 'photodetector', 920, BS[1] - 60, PAL.ink, { size: 20, align: 'center' });
    line(ctx, 950, BS[1], 1040, BS[1], PAL.ink, 3); line(ctx, 1040, BS[1], 1040, 434, PAL.ink, 3);
    line(ctx, BS[0], 430, BS[0], 460, PAL.ink, 3); line(ctx, BS[0], 460, 1014, 460, PAL.ink, 3);
    subtractor(ctx, 1040, 460); line(ctx, 1066, 460, 1240, 460, PAL.ink, 3);
    text(ctx, 'difference current $\\hat{n}_-$', 1080, 425, PAL.ink, { size: 20, tex: true });
    hits.push({ x: 200, y: BS[1], r: 30, name: 'the signal â, whose quadrature is measured' }, { x: BS[0], y: 100, r: 30, name: 'the local oscillator b̂_LO, a strong coherent field of phase φ' },
      { x: BS[0], y: BS[1], r: 40, name: 'the 50/50 beamsplitter' }, { x: 660, y: BS[1], r: 30, name: 'output 1, (â + ib̂_LO)/√2' }, { x: BS[0], y: 290, r: 30, name: 'output 2, (iâ + b̂_LO)/√2' },
      { x: 930, y: BS[1], r: 34, name: 'a photodetector: its current counts the photons of output 1' }, { x: BS[0], y: 410, r: 34, name: 'a photodetector: its current counts the photons of output 2' },
      { x: 1040, y: 460, r: 28, name: 'the subtraction: the difference current n̂₋ = i(â†b̂_LO − b̂_LO†â)' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.13 · sim-phase-shift · still, 2D, p̂ distributions beside
   (a) coherent ⟨x̂⟩ = 3, (b) squeezed in p̂ with r = 1, (c) coherent
   ⟨x̂⟩ = 6. The shift δφ moves the centre round the origin; the noise of
   p̂ is taken unchanged by the small shift, ⟨ΔP²⟩ = e^{−2r}/2 (9.201), as
   the book draws it. Plane x̂ −1…8, p̂ −2…4, one scale; densities 0–1.6.
===================================================================== */
(function () {
  const d = sim('sim-phase-shift', 620);
  const STATES = { a: { x: 3, r: 0 }, b: { x: 3, r: 1 }, c: { x: 6, r: 0 } };
  const pick = F.select(d.controls, { label: '\\text{state}', key: 'state', value: 'a', aria: 'the state used to measure the phase',
    options: [{ value: 'a', label: '(a) coherent' }, { value: 'b', label: '(b) squeezed' }, { value: 'c', label: '(c) stronger coherent' }] });
  const dp = ctl(d.controls, { label: '\\delta\\kphi', cls: 'phase', key: 'dphi', min: 0, max: 0.4, step: 0.005, value: 0.2, unit: 'rad', dec: 3,
    aria: 'the phase shift delta phi, in radians', specials: [{ at: 0, label: 'none' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const PS = { l: 100, r: 760, t: 120, b: 560 }, G = { l: 900, r: 1300, t: 120, b: 560 };
  const K = (PS.r - PS.l) / 9;
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const q = C('quadrature'), st = C('state'), phc = C('phase');
    const xm = pick.mix((v) => STATES[v].x), r = pick.mix((v) => STATES[v].r), f = dp.v;
    const Vx = 0.5 * Math.exp(2 * r), Vp = 0.5 * Math.exp(-2 * r), sp = Math.sqrt(Vp);
    const xa = xm * Math.cos(f), pa = xm * Math.sin(f);
    const { X, Y } = axes(ctx, PS, [-1, 8], [-2, 4], { nx: 9, ny: 6 });
    text(ctx, '$\\kxquad$', PS.r + 18, Y(0), q, { size: 24, weight: 600, tex: true });
    text(ctx, '$\\kpquad$', X(0), PS.t - 22, q, { size: 24, weight: 600, tex: true, align: 'center' });
    line(ctx, X(0), Y(0), X(xm), Y(0), alpha(q, 0.5), 3, [10, 10]);
    blob(ctx, X(xm), Y(0), Math.sqrt(Vx) * K, sp * K, 0, st, false, [10, 8]);
    line(ctx, X(0), Y(0), X(xa), Y(pa), q, 4);
    blob(ctx, X(xa), Y(pa), Math.sqrt(Vx) * K, sp * K, 0, st, true);
    if (f > 0.01) angleArc(ctx, { x: X(0), y: Y(0) }, 150, 0, f, 'δφ', null, phc);
    hits.push({ x: X(xm), y: Y(0), r: Math.max(16, sp * K), name: `the state before the shift, ⟨x̂⟩ = ${fmt(xm, 2)}` },
      { x: X(xa), y: Y(pa), r: Math.max(16, sp * K), name: `the state after the shift, ⟨p̂⟩ = ${fmt(pa, 2)}` });
    /* the two p̂ distributions, on the plane's own p̂ axis */
    const D = (y0) => (y) => Math.exp(-((y - y0) ** 2) / (2 * Vp)) / Math.sqrt(2 * Math.PI * Vp);
    const DX = (v) => G.l + (v / 1.6) * (G.r - G.l), YY = Y;
    line(ctx, G.l, G.t, G.l, G.b, PAL.muted, 2); line(ctx, G.l, YY(0), G.r, YY(0), alpha(PAL.muted, 0.6), 1.5);
    [0, 0.4, 0.8, 1.2, 1.6].forEach((v) => text(ctx, fmt(v, 1), DX(v), G.b + 26, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, 'probability density of $\\kpquad$', G.r, G.b + 58, PAL.ink, { size: 20, weight: 600, align: 'right', tex: true });
    const trace = (g, col, dash, fill) => {
      ctx.save(); ctx.beginPath();
      for (let i = 0; i <= 200; i++) { const y = -2 + (6 * i) / 200, px = DX(Math.min(1.6, g(y))); if (i) ctx.lineTo(px, YY(y)); else ctx.moveTo(px, YY(y)); }
      if (fill) { ctx.lineTo(G.l, YY(4)); ctx.lineTo(G.l, YY(-2)); ctx.closePath(); ctx.fillStyle = alpha(col, 0.3); ctx.fill(); }
      ctx.strokeStyle = col; ctx.lineWidth = dash ? 3 : 4; if (dash) ctx.setLineDash(dash); ctx.stroke(); ctx.restore();
    };
    trace(D(0), st, [10, 8], false); trace(D(pa), st, null, true);
    if (pa > 0.02) vbracket(ctx, G.r - 30, YY(pa), YY(0), q, 'ΔP', 1);
    hits.push({ x: DX(D(0)(0)), y: YY(0), r: 18, name: `p̂ before the shift: mean 0, spread ${fmt(sp, 2)}` }, { x: DX(D(pa)(pa)), y: YY(pa), r: 18, name: `p̂ after the shift: mean ${fmt(pa, 2)}, spread ${fmt(sp, 2)}` });
    const ratio = pa / sp;
    topline(ctx, f < 0.0025 ? 'With no shift the two distributions of $\\kpquad$ coincide.'
      : `The shift moves $\\kpquad$ by ${fmt(pa, 2)}, ${fmt(ratio, 1)} times its spread ${fmt(sp, 2)}: ${ratio >= 1 ? 'resolved' : 'not yet resolved'}.`);
    ro.set(`\\Delta P = \\langle\\kxquad\\rangle\\sin\\delta\\kphi = ${fmt(xm, 2)}\\times\\sin ${fmt(f, 3)} = ${fmt(pa, 2)},\\quad \\sqrt{\\langle\\Delta P^2\\rangle} = \\frac{e^{-\\krsq}}{\\sqrt{2}} = ${fmt(sp, 2)}`,
      `For small $\\delta\\kphi$ this is Eq. (9.200); the shift is resolved from $\\delta\\kphi_\\mathrm{min} \\approx e^{-\\krsq}/(\\sqrt{2}\\langle\\kxquad\\rangle) = ${fmt(sp / xm, 3)}$ rad, Eq. (9.202).`, { form: 'ph' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.14 · fig-interferometer · faithful copy, still
   A Mach-Zehnder: the squeezed â_i and the coherent b̂_i meet on the first
   beamsplitter, one arm shifts the phase by φ = π/2 + δφ, the second
   beamsplitter gives â_f and b̂_f, whose photocurrents are subtracted.
===================================================================== */
(function () {
  const d = sim('fig-interferometer', 600);
  const hits = []; hover(d.stage, () => hits, d.c);
  const B1 = [330, 170], M1 = [930, 170], M2 = [330, 400], B2 = [930, 400], PH = [630, 170];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const rs = F.ref('sq-in'), rc = F.ref('coh-in'), phc = C('phase');
    arrow(ctx, 90, B1[1], B1[0] - 16, B1[1], rs, 5);
    text(ctx, '$\\hat{a}_i$', 70, B1[1], rs, { size: 28, weight: 600, tex: true, align: 'right' }); text(ctx, 'squeezed', 150, B1[1] + 28, rs, { size: 20 });
    arrow(ctx, B1[0], 40, B1[0], B1[1] - 16, rc, 5);
    text(ctx, '$\\hat{b}_i$', B1[0] - 20, 52, rc, { size: 28, weight: 600, tex: true, align: 'right' }); text(ctx, 'coherent', B1[0] + 20, 70, rc, { size: 20 });
    line(ctx, B1[0] + 12, B1[1], PH[0] - 46, B1[1], PAL.ink, 3); line(ctx, PH[0] + 46, B1[1], M1[0], M1[1], PAL.ink, 3);
    line(ctx, M1[0], M1[1], B2[0], B2[1] - 12, PAL.ink, 3);
    line(ctx, B1[0], B1[1] + 12, M2[0], M2[1], PAL.ink, 3); line(ctx, M2[0], M2[1], B2[0] - 12, B2[1], PAL.ink, 3);
    ctx.save(); ctx.beginPath(); ctx.arc(PH[0], PH[1], 46, 0, 2 * Math.PI); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    text(ctx, '$\\kphi = \\pi/2 + \\delta\\kphi$', PH[0], PH[1] - 74, phc, { size: 24, tex: true, align: 'center' });
    slab(ctx, M1[0], M1[1], 110, -Math.PI / 4, 12, false); slab(ctx, M2[0], M2[1], 110, -Math.PI / 4, 12, false);
    slab(ctx, B1[0], B1[1], 130, -Math.PI / 4, 16, true); slab(ctx, B2[0], B2[1], 130, -Math.PI / 4, 16, true);
    arrow(ctx, B2[0] + 12, B2[1], 1130, B2[1], PAL.ink, 4); arrow(ctx, B2[0], B2[1] + 12, B2[0], 488, PAL.ink, 4);
    text(ctx, '$\\hat{a}_f$', 1040, B2[1] - 28, PAL.ink, { size: 26, tex: true, align: 'center' });
    text(ctx, '$\\hat{b}_f$', B2[0] - 22, 450, PAL.ink, { size: 26, tex: true, align: 'right' });
    detector(ctx, 1170, B2[1], 'left'); detector(ctx, B2[0], 500, 'up');
    line(ctx, 1200, B2[1], 1260, B2[1], PAL.ink, 3); line(ctx, 1260, B2[1], 1260, 534, PAL.ink, 3);
    line(ctx, B2[0], 530, B2[0], 560, PAL.ink, 3); line(ctx, B2[0], 560, 1234, 560, PAL.ink, 3);
    subtractor(ctx, 1260, 560);
    text(ctx, 'difference current', 1240, 520, PAL.ink, { size: 18, align: 'right' });
    hits.push({ x: 150, y: B1[1], r: 30, name: 'the squeezed vacuum â_i' }, { x: B1[0], y: 90, r: 30, name: 'the coherent state b̂_i = |β⟩' },
      { x: B1[0], y: B1[1], r: 40, name: 'the first beamsplitter' }, { x: B2[0], y: B2[1], r: 40, name: 'the second beamsplitter' },
      { x: M1[0], y: M1[1], r: 36, name: 'a mirror' }, { x: M2[0], y: M2[1], r: 36, name: 'a mirror' },
      { x: PH[0], y: PH[1], r: 46, name: 'the phase shift φ = π/2 + δφ in one arm' },
      { x: 1170, y: B2[1], r: 34, name: 'a photodetector on â_f' }, { x: B2[0], y: 510, r: 34, name: 'a photodetector on b̂_f' },
      { x: 1260, y: 560, r: 28, name: 'the subtraction: n̂₋ = b̂_f†b̂_f − â_f†â_f' });
  }
  register(d.fig, { update: () => {}, draw });
})();

};
