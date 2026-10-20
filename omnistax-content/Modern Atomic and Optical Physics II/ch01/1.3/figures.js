/* Figures for section 1.3 Basic Atomic Physics. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, vbracket, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
const lerp = (a, b, k) => a + (b - a) * k;

/* =====================================================================
   SIM: the n = 3 levels of sodium, one column per correction. Still: the
   stages are successive approximations with no clock, so a choice morphs
   the ladder from one to the next. Not to scale: each splitting is a few
   hundred to a thousand times the next, so each is drawn enlarged and its
   true size written beside it.
===================================================================== */
(function () {
  const d = sim('sim-fine-hyperfine', 640);
  const STAGES = ['n', 'l', 'j', 'f'];
  const stage = F.choice(d.controls, {
    label: '\\text{corrections}', aria: 'corrections included',
    options: [{ value: 'n', label: 'n only' }, { value: 'l', label: 'L lifted' }, { value: 'j', label: 'fine' }, { value: 'f', label: 'hyperfine' }],
    value: 'f',
  });
  const ro = F.readout(d);
  const CX = [150, 420, 690, 960], HW = 70;
  const D_LINE = '#ffe200';                    /* 589 nm, the sodium D lines: the colour is the fact */
  /* E/A_HFS of a hyperfine level, (1/2)[F(F+1) − I(I+1) − J(J+1)] with I = 3/2 */
  const hfs = (Fq, J) => (Fq * (Fq + 1) - 3.75 - J * (J + 1)) / 2;
  /* each level: its column, parent, rest height, colour (a referent id or the energy hue), hover name */
  const L = [
    { id: 'n3', col: 0, y: 140, name: 'n = 3, hydrogen-like: 3s, 3p and 3d at one energy' },
    { id: '3p', col: 1, y: 230, parent: 'n3', ref: 'na-3p', name: '3p, L = 1' },
    { id: '3s', col: 1, y: 520, parent: 'n3', ref: 'na-3s', name: '3s, L = 0' },
    { id: 'p32', col: 2, y: 200, parent: '3p', ref: 'na-3p32', name: '3p ²P₃/₂, J = 3/2' },
    { id: 'p12', col: 2, y: 290, parent: '3p', ref: 'na-3p12', name: '3p ²P₁/₂, J = 1/2' },
    { id: 's12', col: 2, y: 520, parent: '3s', ref: 'na-3s', name: '3s ²S₁/₂, J = 1/2' },
    ...[3, 2, 1, 0].map((f) => ({ id: 'p32f' + f, col: 3, y: 200 - 8 * hfs(f, 1.5), parent: 'p32', name: '3p ²P₃/₂, F = ' + f })),
    ...[2, 1].map((f) => ({ id: 'p12f' + f, col: 3, y: 290 - 16 * hfs(f, 0.5), parent: 'p12', name: '3p ²P₁/₂, F = ' + f })),
    { id: 's12f2', col: 3, y: 520 - 40 * hfs(2, 0.5), parent: 's12', ref: 'na-f2', name: '3s ²S₁/₂, F = 2' },
    { id: 's12f1', col: 3, y: 520 - 40 * hfs(1, 0.5), parent: 's12', ref: 'na-f1', name: '3s ²S₁/₂, F = 1' },
  ];
  const byId = Object.fromEntries(L.map((l) => [l.id, l]));
  const colorOf = (l) => (l.ref ? F.ref(l.ref) : C('energy'));
  /* the labels and brackets of the newest column, which fade as it stops being the newest */
  const LABELS = {
    0: [['n3', 'n = 3']],
    1: [['3p', '3p'], ['3s', '3s']],
    2: [['p32', '^{2}P_{3/2}'], ['p12', '^{2}P_{1/2}'], ['s12', '^{2}S_{1/2}']],
    3: [['p32f2', 'F = 3, 2, 1, 0'], ['p12f2', 'F = 2, 1', 294], ['s12f2', 'F = 2'], ['s12f1', 'F = 1']],
  };
  const BRACKETS = {
    1: [['3p', '3s', '2.10 eV']],
    2: [['p32', 'p12', 'h × 515.5 GHz']],
    3: [['p12f2', 'p12f1', 'h × 188.9 MHz'], ['s12f2', 's12f1', 'h × 1771.6 MHz']],
  };
  const TITLES = ['hydrogen-like', 'screening', 'spin–orbit', 'hyperfine'];
  const HEAD = {
    n: 'Hydrogen-like, the n = 3 level holds 3s, 3p and 3d at one energy, $-\\kRinf/9$ = −1.51 eV.',
    l: 'Screening by the inner electrons lifts the degeneracy in l: in sodium 3s lies 2.10 eV below 3p.',
    j: 'Spin–orbit coupling splits 3p into $^2P_{1/2}$ and $^2P_{3/2}$, h × 515.5 GHz apart; 3s has L = 0 and stays single.',
    f: 'The nuclear spin I = 3/2 splits each J level by F: the ground state into F = 1 and F = 2, h × 1771.6 MHz apart.',
  };
  const READ = {
    n: ['\\kEn = -\\frac{\\kRinf}{n^2} = -\\frac{13.6\\ \\text{eV}}{3^2} = -1.51\\ \\text{eV}', ''],
    l: ['E(3,1) - E(3,0) = -3.04\\ \\text{eV} - (-5.14\\ \\text{eV}) = 2.10\\ \\text{eV}',
      'The 3s electron reaches inside the inner shells, where the nuclear charge is less screened, and is bound more deeply than 3p.'],
    j: ['\\Delta E_{3/2} - \\Delta E_{1/2} = \\frac{\\kASO}{2}\\left[\\left(\\tfrac{15}{4} - 2 - \\tfrac{3}{4}\\right) - \\left(\\tfrac{3}{4} - 2 - \\tfrac{3}{4}\\right)\\right] = \\tfrac{3}{2}\\kASO = h \\times 515.5\\ \\text{GHz}',
      'The brackets hold $J(J+1)$, $L(L+1)$ and $S(S+1)$, the eigenvalues of $\\kJ^2$, $\\kL^2$ and $\\kS^2$ in units of $\\hbar^2$; for 3p, $\\kASO = h \\times 343.7$ GHz.'],
    f: ['\\Delta E_{F=2} - \\Delta E_{F=1} = \\frac{\\kAHFS}{2}\\left[\\left(6 - \\tfrac{15}{4} - \\tfrac{3}{4}\\right) - \\left(2 - \\tfrac{15}{4} - \\tfrac{3}{4}\\right)\\right] = 2\\kAHFS = h \\times 1771.6\\ \\text{MHz}',
      'For the 3s ground state $I = 3/2$, $J = 1/2$ and $\\kAHFS = h \\times 885.8$ MHz; $^2P_{1/2}$ splits by $h \\times 188.9$ MHz, and $^2P_{3/2}$ into $F = 0$ to $3$.'],
  };
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    /* how far each column has arrived: 1 when the stage includes it, blended while the choice turns */
    const shown = CX.map((_, j) => stage.mix((v) => (STAGES.indexOf(v) >= j ? 1 : 0)));
    const yOf = (l) => (l.parent ? lerp(byId[l.parent].y, l.y, shown[l.col]) : l.y);
    const ce = C('energy');
    arrow(ctx, 44, 600, 44, 120, ce, 4);
    text(ctx, 'E', 44, 100, ce, { size: 24, weight: 600, align: 'center' });
    L.forEach((l) => {
      const s = shown[l.col]; if (!(s > 0)) return;
      const y = yOf(l), col = colorOf(l), x = CX[l.col];
      F.faded(ctx, s, [0, 0], () => {
        if (l.parent) line(ctx, CX[l.col - 1] + HW, byId[l.parent].y, x - HW, y, alpha(PAL.ink, 0.35), 2, [4, 8]);
        line(ctx, x - HW, y, x + HW, y, col, 5);
      });
      if (s > 0.5) [-45, 0, 45].forEach((dx) => hits.push({ x: x + dx, y, r: 16, name: l.name }));
    });
    TITLES.forEach((t, j) => F.faded(ctx, shown[j], [0, 0], () => text(ctx, t, CX[j], 612, PAL.muted, { size: 17, align: 'center' })));
    /* the D lines, symbolic arrows from the ground state up, in the colour of their light */
    const yellow = F.fact(D_LINE);
    const dArrow = (x, y1, y2, lab, lx, side) => {
      arrow(ctx, x, y1, x, y2, alpha(PAL.ink, 0.35), 8); arrow(ctx, x, y1, x, y2, yellow, 5);
      text(ctx, lab, lx, (y1 + y2) / 2 + (side < 0 ? 40 : 0), PAL.ink, { size: 18, weight: 600, align: side < 0 ? 'right' : 'left', bg: PAL.panel });
    };
    stage.only(ctx, 'l', () => dArrow(CX[1] - 30, 520 - 6, 230 + 6, 'D lines, 589 nm', CX[1] - 42, -1), [0, 0]);
    F.faded(ctx, shown[2], [0, 0], () => {
      dArrow(CX[2] - 40, 520 - 6, yOf(byId.p12) + 6, 'D1, 589.6 nm', CX[2] - 52, -1);
      dArrow(CX[2], 520 - 6, yOf(byId.p32) + 6, 'D2, 589.0 nm', CX[2] + 12, 1);
    });
    /* the newest column's names and splittings; earlier columns name themselves on hover */
    STAGES.forEach((v, j) => stage.only(ctx, v, () => {
      (BRACKETS[j] ?? []).forEach(([a, b, lab]) => vbracket(ctx, CX[j] + (j === 3 ? 190 : 150), byId[a].y, byId[b].y, ce, lab, 1, { size: 18 }));
      LABELS[j].forEach(([id, lab, at]) => {
        const l = byId[id];
        text(ctx, lab, CX[j] + HW + 12, at ?? l.y, colorOf(l), { size: 20, weight: 600, bg: PAL.panel });
      });
    }, [0, 0]));
    topline(ctx, HEAD[stage.value]);
    const [f, note] = READ[stage.value];
    ro.set(f, note, { form: stage.value });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the Zeeman levels of an L = 0 ground state against B_z. Still: the
   field is a parameter. The curves are the exact eigenvalues of
   A_HFS Î·Ĵ + g_J μ_B B_z Ĵ_z (J = 1/2, g_J = 2 from Eq. 1.39, the nuclear
   moment dropped since μ_e ≫ μ_N); the dashed lines are Eq. (1.37).
   Axes fixed for both atoms: B_z 0 to 2000 G, E/h −4 to 4 GHz.
===================================================================== */
(function () {
  const d = sim('sim-zeeman-levels', 560);
  const MUB = 1.39962e-3, GJ = 2;              /* μ_B/h in GHz per gauss; g_J of an S₁/₂ state, Eq. (1.39) */
  const ATOMS = {
    na: { I: 1.5, A: 0.8858, up: 'na-f2', lo: 'na-f1', name: 'sodium' },   /* A_HFS/h in GHz */
    h: { I: 0.5, A: 1.4204, up: 'h-f1', lo: 'h-f0', name: 'hydrogen' },
  };
  const B = ctl(d.controls, { label: '\\kBz', cls: 'magnetic-field', min: 0, max: 2000, step: 10, value: 300, unit: 'G', dec: 0 });
  const atom = F.choice(d.controls, {
    label: '\\text{atom}', aria: 'atom',
    options: [{ value: 'na', label: '²³Na, I = 3/2' }, { value: 'h', label: '¹H, I = 1/2' }], value: 'na',
  });
  const ro = F.readout(d);
  /* the level of total m_F = m on the F = I + ½ (upper) or F = I − ½ branch, E/h in GHz */
  function energy(at, m, upper, b) {
    const { I, A } = at, x = GJ * MUB * b;
    if (Math.abs(m) === I + 0.5) return A * I / 2 + Math.sign(m) * x / 2;
    const a = A * (m - 0.5) / 2 + x / 2, dd = -A * (m + 0.5) / 2 - x / 2;
    const c = (A / 2) * Math.sqrt(I * (I + 1) - (m - 0.5) * (m + 0.5));
    const r = Math.hypot((a - dd) / 2, c);
    return (a + dd) / 2 + (upper ? r : -r);
  }
  /* every |F, m_F⟩ of the atom; `strong` is the m_S its branch reaches in strong field */
  function levels(at) {
    const out = [], Fu = at.I + 0.5, Fl = at.I - 0.5;
    for (let m = -Fu; m <= Fu; m++) out.push({ F: Fu, m, upper: true, gF: GJ / (2 * at.I + 1), ms: m === -Fu ? -1 : 1 });
    for (let m = -Fl; m <= Fl; m++) out.push({ F: Fl, m, upper: false, gF: -GJ / (2 * at.I + 1), ms: -1 });
    return out;
  }
  const BOX = { l: 150, r: 1120, t: 110, b: 470 };
  const signed = (m) => (m > 0 ? '+' : m < 0 ? '−' : '') + Math.abs(m);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const b = B.v, cur = ATOMS[atom.value];
    const { X, Y } = axes(ctx, BOX, [0, 2000], [-4, 4], {
      nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
      xl: 'B_z (G)', xc: C('magnetic-field'), yl: 'E/h (GHz)', yc: C('energy'),
    });
    line(ctx, X(b), BOX.t, X(b), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    Object.entries(ATOMS).forEach(([key, at]) => atom.only(ctx, key, () => {
      const lv = levels(at), cu = F.ref(at.up), cl = F.ref(at.lo);
      /* Eq. (1.37): the straight weak-field lines, dashed and clipped to the frame */
      ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
      lv.forEach((q) => {
        const e0 = energy(at, q.m, q.upper, 0), e1 = e0 + q.gF * MUB * q.m * 2000;
        line(ctx, X(0), Y(e0), X(2000), Y(e1), alpha(q.upper ? cu : cl, 0.55), 2, [10, 10]);
      });
      ctx.restore();
      lv.forEach((q) => F.curve(ctx, (s) => energy(at, q.m, q.upper, s), 0, 2000, X, Y, q.upper ? cu : cl, 4, 120));
      lv.forEach((q) => {
        const e = energy(at, q.m, q.upper, b), y = Y(e), stretched = q.upper && q.m === q.F;
        dot(ctx, X(b), y, q.upper ? cu : cl, true, stretched ? 9 : 7);
        if (key === atom.value) hits.push({ x: X(b), y, r: 12, name: `|F = ${q.F}, m_F = ${signed(q.m)}⟩: E/h = ${fmt(e, 3)} GHz` });
      });
      /* F at zero field, m_S in strong field */
      const Fu = at.I + 0.5;
      text(ctx, 'F = ' + Fu, BOX.l + 14, Y(energy(at, Fu, true, 0)) - 30, cu, { size: 20, weight: 600, bg: PAL.panel });
      text(ctx, 'F = ' + (Fu - 1), BOX.l + 14, Y(energy(at, 0, false, 0)) + 30, cl, { size: 20, weight: 600, bg: PAL.panel });
      const mean = (ms) => { const g = lv.filter((q) => q.ms === ms).map((q) => energy(at, q.m, q.upper, 2000)); return g.reduce((s, e) => s + e, 0) / g.length; };
      text(ctx, 'm_S = +½', BOX.r + 14, Y(mean(1)), PAL.ink, { size: 20, weight: 600 });
      text(ctx, 'm_S = −½', BOX.r + 14, Y(mean(-1)), PAL.ink, { size: 20, weight: 600 });
    }, [0, 0]));
    /* headline: the regime, from g_J μ_B B_z against the hyperfine splitting A_HFS (I + ½) */
    const split = cur.A * (cur.I + 0.5), zee = GJ * MUB * b, ratio = zee / split;
    const Fu = cur.I + 0.5, Fl = cur.I - 0.5, bs = '$\\kBz$ = ' + fmt(b, 0) + ' G';
    topline(ctx, b === 0
      ? `With no field the ${cur.name} ground state is two levels, F = ${Fu} and F = ${Fl}, h × ${fmt(split * 1000, 1)} MHz apart.`
      : ratio < 0.5 ? `At ${bs} the field is weak: F and m_F are good quantum numbers, and each level shifts by $g_F\\kmuB m_F\\kBz$.`
        : ratio > 2 ? `At ${bs} the field is strong: m_S and m_I are good quantum numbers, and the levels gather by m_S.`
          : `At ${bs} neither basis is good: levels of the same m_F push apart as F and m_F give way to m_S and m_I.`);
    const gF = cur.I === 1.5 ? '\\tfrac{1}{2}' : '1', mF = Fu, shift = (GJ / (2 * cur.I + 1)) * MUB * 1000 * mF * b;
    ro.set(`\\kdEZ = g_F\\kmuB m_F\\kBz = ${gF} \\cdot h \\times 1.39962\\ \\tfrac{\\text{MHz}}{\\text{G}} \\cdot ${mF} \\cdot ${fmt(b, 0)}\\ \\text{G} = h \\times ${fmt(shift, 0)}\\ \\text{MHz}`,
      (cur.I === 1.5 ? '$g_F = +\\tfrac12$ for $F = 2$ and $-\\tfrac12$ for $F = 1$' : '$g_F = 1$ for $F = 1$, and $F = 0$ has only $m_F = 0$')
      + `; $g_J\\kmuB\\kBz$ = h × ${fmt(zee * 1000, 0)} MHz against the hyperfine splitting h × ${fmt(split * 1000, 1)} MHz.`,
      { form: atom.value });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
