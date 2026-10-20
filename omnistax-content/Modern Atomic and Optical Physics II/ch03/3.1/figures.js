/* Figures for section 3.1 The density operator.
   One still Sim: thermal populations against the one ratio k_BT/ℏω (Eqs. 3.12, 3.14, 3.16).
   The levels |1⟩, |2⟩ of the two-level atom are the section's referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, dot, text, topline, axes, curve, vbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-thermal · still, 2D, ladder with the graph beside
   r = k_BT/ℏω, x = 1/r. Atom: ρ₂₂ = e^{−x}/(1 + e^{−x}), ρ₁₁ = 1 − ρ₂₂ (Eq. 3.12).
   Mode: ρ_nn = (1 − e^{−x})e^{−nx} (Eq. 3.14), n̄ = Σ nρ_nn = 1/(e^x − 1).
   The atom's two levels are the mode's first two rungs. Graph axes fixed:
   r 0–4; populations 0–1, n̄ 0–4 (3.52 at r = 4). At 300 K, k_BT/h = 6.25 THz.
===================================================================== */
(function () {
  const d = sim('sim-thermal', 600);
  const KT300 = 6.25e12, RMAX = 4, NR = 8;
  const sys = choice(d.controls, { label: '\\text{system}', key: 'system', value: 'atom', aria: 'the system in thermal equilibrium',
    onInput: (v) => ra.relabel(v === 'atom' ? 'k_B\\kT/\\hbar\\komega' : 'k_B\\kT/\\hbar\\knu_j'),
    options: [{ value: 'atom', label: 'two-level atom' }, { value: 'mode', label: 'field mode' }] });
  const ra = ctl(d.controls, { label: 'k_B\\kT/\\hbar\\komega', cls: '', key: 'ratio', min: 0.02, max: RMAX, step: 0.01, value: 1, unit: '', dec: 2,
    aria: 'the thermal energy over the level spacing', specials: [{ at: 1, label: 'k_BT = ℏω' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const atomP = (r) => { const e = Math.exp(-1 / r); return [1 / (1 + e), e / (1 + e)]; };
  const modeP = (r) => { const e = Math.exp(-1 / r); return Array.from({ length: NR }, (_, n) => (1 - e) * Math.pow(e, n)); };
  const nbar = (r) => 1 / Math.expm1(1 / r);
  const freq = (r) => { const f = KT300 / r; return f >= 1e14 ? `${fmt(f / 1e12, 0)} THz` : `${fmt(f / 1e12, f >= 1e13 ? 0 : 1)} THz`; };
  const pct = (p) => fmt(100 * p, 0) + ' %';
  /* the ladder: ground rung at Y0, one rung every S; bars from BX, BL long at population 1 */
  const Y0 = 530, S = 46, LX = [150, 300], BX = 320, BL = 240, HB = 16;
  const BOX = { l: 880, r: 1330, t: 150, b: 510 };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const r = ra.v, atom = sys.value === 'atom', E = C('energy'), Pc = C('population'), r1 = F.ref('lvl-1'), r2 = F.ref('lvl-2');
    const pa = atomP(r), pm = modeP(r), P = sys.mix((v) => (v === 'atom' ? [...pa, 0, 0, 0, 0, 0, 0] : pm));
    const yOf = (n) => Y0 - n * S;
    /* rungs and bars: the first two morph between the atom's levels and the mode's, the rest only the mode has */
    for (let n = 0; n < NR; n++) {
      const y = yOf(n), body = () => {
        const col = n === 0 ? sys.mixColor((v) => (v === 'atom' ? r1 : PAL.ink)) : n === 1 ? sys.mixColor((v) => (v === 'atom' ? r2 : PAL.ink)) : PAL.ink;
        line(ctx, LX[0], y, LX[1], y, col, 4);
        ctx.save(); ctx.fillStyle = Pc; ctx.fillRect(BX, y - HB / 2, BL * P[n], HB); ctx.restore();
      };
      if (n < 2) body(); else sys.only(ctx, 'mode', body, [0, 12]);
    }
    sys.only(ctx, 'atom', () => {
      text(ctx, '$|1\\rangle$', LX[0] - 14, yOf(0), r1, { size: 22, weight: 600, align: 'right', tex: true });
      text(ctx, '$|2\\rangle$', LX[0] - 14, yOf(1), r2, { size: 22, weight: 600, align: 'right', tex: true });
    }, [0, 0]);
    sys.only(ctx, 'mode', () => {
      for (let n = 0; n < NR; n++) text(ctx, String(n), LX[0] - 14, yOf(n), PAL.muted, { size: 17, align: 'right' });
      text(ctx, 'n', LX[0] - 14, yOf(NR - 1) - 34, PAL.muted, { size: 17, align: 'right', italic: true });
      const rest = 1 - pm.reduce((a, b) => a + b, 0);
      text(ctx, `n ≥ ${NR}: ${pct(rest)}`, BX, yOf(NR - 1) - 34, PAL.muted, { size: 17 });
    }, [0, 0]);
    /* the two energies compared: the spacing and k_BT */
    const sp = atom ? 'ℏω' : 'ℏν_j';
    vbracket(ctx, 600, yOf(1), yOf(0), E, sp, 1);
    const top = Y0 - r * S;
    if (Y0 - top > 6) vbracket(ctx, 700, top, Y0, E, 'k_{B}T', 1);
    hits.push({ x: 600, y: (yOf(0) + yOf(1)) / 2, r: 22, name: `the level spacing ${sp}` },
      { x: 700, y: (top + Y0) / 2, r: 22, name: `the thermal energy k_BT = ${fmt(r, 2)} ${sp}` });
    (atom ? [0, 1] : [...Array(NR).keys()]).forEach((n) => {
      const name = atom ? `${n ? 'the excited state |2⟩: ρ₂₂' : 'the ground state |1⟩: ρ₁₁'} = ${fmt(pa[n], 3)}` : `the photon-number state |${n}⟩: ρ_${n}${n} = ${fmt(pm[n], 3)}`;
      hits.push({ x: (LX[0] + LX[1]) / 2, y: yOf(n), r: 20, name }, { x: BX + Math.max(20, (BL * P[n]) / 2), y: yOf(n), r: 18, name });
    });

    /* the graph: the populations, or n̄, across the whole range */
    const ymax = atom ? 1 : 4;
    const { X, Y } = axes(ctx, BOX, [0, RMAX], [0, ymax], { nx: 4, ny: 4, fy: (v) => fmt(v, atom ? 2 : 0) });
    text(ctx, atom ? '$k_B\\kT/\\hbar\\komega$' : '$k_B\\kT/\\hbar\\knu_j$', BOX.r, BOX.b + 58, PAL.ink, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, atom ? 'population' : '$\\knbar_j$', BOX.l, BOX.t - 26, atom ? Pc : PAL.ink, { size: 20, weight: 600, tex: true });
    const x = X(r);
    line(ctx, x, BOX.t, x, BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    sys.only(ctx, 'atom', () => {
      line(ctx, X(0), Y(0.5), X(RMAX), Y(0.5), alpha(PAL.ink, 0.4), 2, [10, 10]);
      curve(ctx, (t) => (t < 1e-3 ? 1 : atomP(t)[0]), 0, RMAX, X, Y, r1, 5, 160);
      curve(ctx, (t) => (t < 1e-3 ? 0 : atomP(t)[1]), 0, RMAX, X, Y, r2, 5, 160);
      text(ctx, 'ρ_{11}', X(2.2), Y(0.71), r1, { size: 22, weight: 600, bg: PAL.panel });
      text(ctx, 'ρ_{22}', X(2.2), Y(0.29), r2, { size: 22, weight: 600, bg: PAL.panel });
      dot(ctx, x, Y(pa[0]), r1); dot(ctx, x, Y(pa[1]), r2);
    }, [0, 0]);
    sys.only(ctx, 'mode', () => {
      curve(ctx, (t) => (t < 1e-3 ? 0 : nbar(t)), 0, RMAX, X, Y, PAL.ink, 5, 160);
      dot(ctx, x, Y(nbar(r)), PAL.ink);
    }, [0, 0]);
    if (atom) hits.push({ x, y: Y(pa[0]), r: 16, name: `ρ₁₁ = ${fmt(pa[0], 3)}` }, { x, y: Y(pa[1]), r: 16, name: `ρ₂₂ = ${fmt(pa[1], 3)}` },
      { x: X(RMAX) - 30, y: Y(0.5), r: 14, name: 'one half, which both populations approach as k_BT grows' });
    else hits.push({ x, y: Y(nbar(r)), r: 16, name: `n̄_j = ${fmt(nbar(r), 3)}` });

    const R = fmt(r, 2);
    topline(ctx, atom
      ? `At $k_B\\kT = ${R}\\,\\hbar\\komega$ the atom is ${pct(pa[0])} in $|1\\rangle$ and ${pct(pa[1])} in $|2\\rangle$, as a ${freq(r)} transition is at 300 K.`
      : `At $k_B\\kT = ${R}\\,\\hbar\\knu_j$ the mode holds $\\knbar_j = ${fmt(nbar(r), 2)}$ photons on average, as a ${freq(r)} mode does at 300 K.`);
    const h = fmt(1 / (2 * r), 2), xe = fmt(1 / r, 2);
    ro.set(atom
      ? `\\krhotwotwo = \\frac{e^{-\\hbar\\komega/2k_B\\kT}}{2\\cosh(\\hbar\\komega/2k_B\\kT)} = \\frac{e^{-${h}}}{2\\cosh ${h}} = ${fmt(pa[1], 2)}, \\quad \\krhooneone = 1 - \\krhotwotwo = ${fmt(1 - +fmt(pa[1], 2), 2)}`
      : `\\knbar_j = \\sum_n n\\,\\krhonn = \\frac{1}{e^{\\hbar\\knu_j/k_B\\kT} - 1} = \\frac{1}{e^{${xe}} - 1} = ${fmt(nbar(r), 2)}`, '', { form: sys.value });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
