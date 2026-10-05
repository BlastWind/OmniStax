/* Figures for section 30.4 X Rays: Atomic Origins and Applications.
   The page binds energy, voltage and frequency. Planck's constant, Z, n and the
   relative x-ray intensity are ink, and so are the x rays. An electron is
   F.el('e-'). The anode is the section's referent, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, labeller, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 30.20 + 30.21 · sim-x-ray-levels · still · flat (rule 28.1)
   Left, the anode's levels E_n = −(Z − 1)² E₀ / n², drawn to their 1/n²
   proportions with E = 0 at the top. Right, the spectrum: f from 0 to
   30 × 10¹⁸ Hz (120 kV gives 29.0), intensity relative and fixed from 0 to 1.1.
===================================================================== */
(function () {
  const E0 = 13.6e-3, H_EV = 4.14e-15, FPK = 1e3 / H_EV / 1e18;   /* keV; eV·s; 10¹⁸ Hz per keV */
  const ANODES = {
    Cu: { name: 'copper', Z: 29 },
    Mo: { name: 'molybdenum', Z: 42 },
    W: { name: 'tungsten', Z: 74 },
  };
  const LINES = {
    a: { name: 'K_{α}', tex: 'K_{\\alpha}', ni: 2, h: 1 },
    b: { name: 'K_{β}', tex: 'K_{\\beta}', ni: 3, h: 0.5 },
  };
  const SHELL = ['K', 'L', 'M', 'N'];
  const kShell = (a) => (ANODES[a].Z - 1) ** 2 * E0;               /* keV, the depth of the K shell */
  const level = (a, n) => -kShell(a) / (n * n);
  const lineE = (a, l) => kShell(a) * (1 - 1 / (LINES[l].ni ** 2));

  const d = sim('sim-x-ray-levels', 640);
  const an = choice(d.controls, { label: '\\text{Anode}', options: Object.keys(ANODES).map((k) => ({ value: k, label: ANODES[k].name })), value: 'W', aria: 'the material of the anode' });
  const ln = choice(d.controls, { label: '\\text{Line}', key: 'line', options: [{ value: 'a', label: 'Kα' }, { value: 'b', label: 'Kβ' }], value: 'a', aria: 'the characteristic line' });
  const V = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 5, max: 120, step: 0.5, value: 100, unit: 'kV', dec: 1, aria: 'the accelerating voltage',
    detents: [{ v: 50 }, { v: 100 }],
    specials: [{ at: () => kShell(an.value), label: 'K shell' }] });

  const LV = { x0: 150, x1: 430, top: 140, bot: 560 };
  const yOf = (n) => LV.top + (LV.bot - LV.top) / (n * n);
  const ARR = [
    { id: 'a', name: 'K_{α}', from: 2, to: 1, x: 215, side: 'left' },
    { id: 'b', name: 'K_{β}', from: 3, to: 1, x: 275, side: 'right' },
    { id: 'La', name: 'L_{α}', from: 3, to: 2, x: 345, side: 'left' },
    { id: 'Lb', name: 'L_{β}', from: 4, to: 2, x: 400, side: 'right' },
  ];
  const GB = { l: 640, r: 1340, t: 150, b: 540 };
  const YMAX = 1.1, HALF = 0.25;

  const brems = (f, fm) => (f <= 0 || f >= fm) ? 0 : (fm - f) * (1 - Math.exp(-Math.pow(f / (0.3 * fm), 2.5))) / 26;
  const peakH = (a, Em) => Em > kShell(a) ? 0.75 * Math.sqrt(1 - kShell(a) / Em) : 0;
  const spike = (f, f0, h) => Math.abs(f - f0) < HALF ? h * (1 - Math.abs(f - f0) / HALF) : 0;
  const trim = (x) => fmt(x, x % 1 ? 1 : 0);
  const keV = (e) => fmt(e, Math.abs(e) >= 10 ? 1 : Math.abs(e) >= 1 ? 2 : 3).replace('-', '−');

  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  function draw() {
    const { ctx } = begin(d.c);
    const a = an.value, A = ANODES[a], l = ln.value, Em = V.v, fm = Em * FPK;
    const on = Em > kShell(a), EC = C('energy'), FC = C('frequency');
    const two = topline(ctx, 'Electrons accelerated through $\\kV = ' + trim(Em) + '$ kV make x rays of up to $\\kEmax = ' + trim(Em) + '$ keV, ' +
      (on ? 'enough to empty ' + A.name + '’s K shell at ' + keV(kShell(a)) + ' keV.' : 'too little to empty ' + A.name + '’s K shell at ' + keV(kShell(a)) + ' keV, so no K lines appear.'));
    const lab = labeller(ctx, 640, { headline: two });
    hits = [];

    /* Figure 30.21: the levels, the faint ones above N crowding toward E = 0 */
    for (let n = 8; n >= 1; n--) {
      const y = yOf(n), faint = n > 4;
      line(ctx, LV.x0, y, LV.x1, y, faint ? alpha(PAL.ink, 0.3) : PAL.ink, faint ? 1.5 : 3);
      hits.push({ x: (LV.x0 + LV.x1) / 2, y, r: faint ? 4 : 8, name: (n <= 4 ? 'the ' + SHELL[n - 1] + ' shell, ' : 'the level ') + 'n = ' + n + ', at ' + keV(level(a, n)) + ' keV' });
      if (faint) continue;
      text(ctx, SHELL[n - 1] + '  n = ' + n, LV.x1 + 12, y + (n === 4 ? -6 : n === 3 ? 5 : 0), PAL.ink, { size: 18, weight: 600 });
      if (n <= 3) text(ctx, keV(level(a, n)) + ' keV', LV.x0 - 10, y, EC, { size: 17, weight: 600, align: 'right', bg: PAL.panel });
    }
    text(ctx, A.name + ' anode, Z = ' + A.Z, (LV.x0 + LV.x1) / 2, 620, F.ref('anode'), { size: 20, weight: 600, align: 'center' });

    ARR.forEach((r) => {
      const pick = r.id === l, y0 = yOf(r.from), y1 = yOf(r.to);
      const col = pick ? EC : alpha(PAL.ink, 0.45);
      if (pick) {
        ctx.save(); ctx.globalAlpha *= on ? 1 : 0.35;
        dot(ctx, r.x, y0, F.el('e-'), true, 9);
        dot(ctx, r.x, y1, PAL.ink, false, 10);
        ctx.restore();
        hits.push({ x: r.x, y: y0, r: 12, name: 'an electron of the ' + SHELL[r.from - 1] + ' shell' });
        hits.push({ x: r.x, y: y1, r: 12, name: on ? 'the vacancy in the K shell' : 'the K shell, which electrons of ' + trim(Em) + ' keV cannot empty' });
        if (on) lab.place(F.label(ctx, 'vacancy', r.x, y1, { side: 'below', size: 17, color: PAL.muted, gap: 26 }));
      }
      arrow(ctx, r.x, y0 + (pick ? 13 : 0), r.x, y1 - (pick ? 13 : 0), col, pick ? 5 : 3);
      lab.beside({ x1: r.x, y1: y0, x2: r.x, y2: y1 }, r.side === 'left' ? 'right' : 'left', r.name, pick ? EC : PAL.muted, 20, { offset: r.to === 1 ? 0.55 : 0.5 });
      hits.push({ x: r.x, y: (y0 + y1) / 2, r: 14, name: 'the ' + r.name.replace(/[_{}]/g, '') + ' transition, n = ' + r.from + ' to n = ' + r.to });
    });

    /* Figure 30.20: the spectrum, the K peaks standing on the bremsstrahlung once qV passes the K shell */
    const { X, Y } = axes(ctx, GB, [0, 30], [0, YMAX], { nx: 6, ny: 4, xl: 'f (10¹⁸ Hz)', xc: FC, yl: 'X-ray intensity', yc: PAL.ink, fy: () => '' });
    const P = peakH(a, Em), fa = lineE(a, 'a') * FPK, fb = lineE(a, 'b') * FPK;
    const I = (f) => brems(f, fm) + (f < fm ? spike(f, fa, P * LINES.a.h) + spike(f, fb, P * LINES.b.h) : 0);
    curve(ctx, I, 0, fm, X, Y, PAL.ink, 4, 1600);
    line(ctx, X(fm), GB.b, X(fm), GB.t + 24, FC, 3, [10, 10]);
    text(ctx, 'f_{max} = ' + fmt(fm, 1), X(fm) + (fm > 24 ? -10 : 10), GB.t + 10, FC, { size: 18, weight: 600, align: fm > 24 ? 'right' : 'left', bg: PAL.panel });
    hits.push({ x: X(fm), y: (GB.t + GB.b) / 2, r: 10, name: 'the highest frequency, f_max = ' + fmt(fm, 1) + ' × 10¹⁸ Hz, where hf_max = q_eV' });
    const fbx = Math.min(fm * 0.8, 27);
    if (fm > 6) lab.add('bremsstrahlung', X(fbx), Y(brems(fbx, fm)), 0.5, -0.87, PAL.muted, 17, 22);
    if (P > 0) {
      ['a', 'b'].forEach((k) => {
        const f0 = k === 'a' ? fa : fb, y = Y(I(f0)), pick = k === l;
        lab.add(LINES[k].name, X(f0), y, k === 'a' ? -0.6 : 0.6, -0.8, pick ? EC : PAL.muted, 20, 18);
        hits.push({ x: X(f0), y, r: 12, name: 'the ' + LINES[k].name.replace(/[_{}]/g, '') + ' peak of ' + A.name + ', ' + keV(lineE(a, k)) + ' keV' });
      });
    }
    lab.flush();

    const L = LINES[l];
    ro.set('\\mk{lhs}{E_{' + L.tex + '}} = \\kdE = \\kEini - \\kEfin = (\\mk{z}{' + A.Z + '} - 1)^2(13.6\\ \\text{eV})\\left(\\frac{1}{1^2} - \\mk{ni}{\\frac{1}{' + L.ni + '^2}}\\right) = \\mk{r}{' + keV(lineE(a, l)) + '}\\ \\text{keV}', '', { form: l });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
