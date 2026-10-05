/* Figures for section 33.5 Quarks: Is That All There Is?
   The page binds charge, position, energy and velocity. Spin, B, S, charm,
   bottomness and h are ink. The π⁺ and π⁻ are the referents pi-plus and
   pi-minus, the three families family-1 to family-3. Color charge is the fact:
   red, green and blue, their anticolors the sums of the other two, white where
   they meet, through F.fact and for nothing else; a quark's flavor is its letter.
   The electron, the neutrinos and the photon wear F.el. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['33.5'] = function (root, F) {
const { fmt, PAL, alpha, select, ctl, register, cycle, begin, line, arrow, text, topline, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* color charge: R, G, B and their anticolors, each anticolor the sum of the other two primaries */
const RGB = { R: [230, 40, 40], G: [40, 190, 60], B: [40, 80, 230] };
const add = (...cs) => [0, 1, 2].map((i) => Math.min(255, cs.reduce((s, c) => s + c[i], 0)));
const RGBOF = { R: RGB.R, G: RGB.G, B: RGB.B, Rb: add(RGB.G, RGB.B), Gb: add(RGB.R, RGB.B), Bb: add(RGB.R, RGB.G) };
const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
const COLNAME = { R: 'red', G: 'green', B: 'blue', Rb: 'antired, or cyan', Gb: 'antigreen, or magenta', Bb: 'antiblue, or yellow' };
const COLTEX = { R: 'R', G: 'G', B: 'B', Rb: '\\bar{R}', Gb: '\\bar{G}', Bb: '\\bar{B}' };

/* a quark disc: its color charge as a pale fill, its flavor as its letter */
function quark(ctx, x, y, r, fill, letter, a = 1) {
  ctx.save(); ctx.globalAlpha *= a;
  ctx.fillStyle = alpha(fill, 0.55); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (letter) text(ctx, '$' + letter + '$', x, y, PAL.ink, { size: r > 24 ? 28 : 22, align: 'center', tex: true });
}

/* =====================================================================
   FIGURE 33.15 + 33.19 · sim-quark-content · still, a choice that morphs · flat (rule 28.1)
   Table 33.3 per flavor, in thirds of q_e for the charge: an antiquark negates
   all. Spins as Figure 33.15 draws its four hadrons; the other spin-½ baryons
   up, down, up; the Δ's and Ω⁻ (3/2) and the J/ψ and ϒ (1) all up; the kaons as
   the pions. Colors as Figure 33.15 for its four, but the π⁻'s ū antigreen and
   its d green, a color and its anticolor; else R, G, B for a baryon, their
   anticolors for the antiproton, red and antired for a meson. The π⁰ and η⁰
   are mixtures and are left out.
===================================================================== */
(function () {
  const H = 560, HX = 290, HY = 300, HR = 168, QR = 34, VX = 660, VY = 290, VR = 64;
  const FL = { u: { q: 2, S: 0, c: 0, b: 0, name: 'up' }, d: { q: -1, S: 0, c: 0, b: 0, name: 'down' }, s: { q: -1, S: -1, c: 0, b: 0, name: 'strange' },
    c: { q: 2, S: 0, c: 1, b: 0, name: 'charmed' }, b: { q: -1, S: 0, c: 0, b: -1, name: 'bottom' } };
  /* each quark: flavor, anti, color, spin (+1 up) */
  const q = (f, col, sp) => ({ f: f.replace('~', ''), anti: f.includes('~'), col, sp });
  const HAD = {
    p: { name: 'proton', sym: 'p', comp: 'uud', qs: [q('u', 'B', 1), q('d', 'G', -1), q('u', 'R', 1)] },
    n: { name: 'neutron', sym: 'n', comp: 'udd', qs: [q('u', 'G', -1), q('d', 'B', 1), q('d', 'R', 1)] },
    pip: { name: 'pion', sym: '\\pi^{+}', comp: 'u\\bar{d}', ref: 'pi-plus', qs: [q('u', 'R', 1), q('~d', 'Rb', -1)] },
    pim: { name: 'pion', sym: '\\pi^{-}', comp: '\\bar{u}d', ref: 'pi-minus', qs: [q('~u', 'Gb', 1), q('d', 'G', -1)] },
    K0: { name: 'kaon', sym: 'K^{0}', comp: 'd\\bar{s}', qs: [q('d', 'R', 1), q('~s', 'Rb', -1)] },
    K0b: { name: 'antikaon', sym: '\\bar{K}^{0}', comp: '\\bar{d}s', qs: [q('~d', 'Rb', 1), q('s', 'R', -1)] },
    Kp: { name: 'kaon', sym: 'K^{+}', comp: 'u\\bar{s}', qs: [q('u', 'R', 1), q('~s', 'Rb', -1)] },
    Km: { name: 'kaon', sym: 'K^{-}', comp: '\\bar{u}s', qs: [q('~u', 'Rb', 1), q('s', 'R', -1)] },
    jpsi: { name: 'J/psi meson', sym: 'J/\\psi', comp: 'c\\bar{c}', qs: [q('c', 'R', 1), q('~c', 'Rb', 1)] },
    ups: { name: 'upsilon meson', sym: '\\Upsilon', comp: 'b\\bar{b}', qs: [q('b', 'R', 1), q('~b', 'Rb', 1)] },
    D0: { name: 'delta', sym: '\\Delta^{0}', comp: 'udd', note: 'The $\\Delta^{0}$ has the quarks of the neutron and is a different state of the same particle.', qs: [q('u', 'R', 1), q('d', 'G', 1), q('d', 'B', 1)] },
    Dp: { name: 'delta', sym: '\\Delta^{+}', comp: 'uud', note: 'The $\\Delta^{+}$ has the quarks of the proton and is an excited state of it.', qs: [q('u', 'R', 1), q('d', 'G', 1), q('u', 'B', 1)] },
    Dm: { name: 'delta', sym: '\\Delta^{-}', comp: 'ddd', qs: [q('d', 'R', 1), q('d', 'G', 1), q('d', 'B', 1)] },
    Dpp: { name: 'delta', sym: '\\Delta^{++}', comp: 'uuu', qs: [q('u', 'R', 1), q('u', 'G', 1), q('u', 'B', 1)] },
    L0: { name: 'lambda', sym: '\\Lambda^{0}', comp: 'uds', qs: [q('u', 'R', 1), q('d', 'G', -1), q('s', 'B', 1)] },
    S0: { name: 'sigma', sym: '\\Sigma^{0}', comp: 'uds', note: 'The $\\Sigma^{0}$ has the quarks of the $\\Lambda^{0}$ and is a different state of the same particle.', qs: [q('u', 'R', 1), q('d', 'G', -1), q('s', 'B', 1)] },
    Sp: { name: 'sigma', sym: '\\Sigma^{+}', comp: 'uus', qs: [q('u', 'R', 1), q('u', 'G', -1), q('s', 'B', 1)] },
    Sm: { name: 'sigma', sym: '\\Sigma^{-}', comp: 'dds', qs: [q('d', 'R', 1), q('d', 'G', -1), q('s', 'B', 1)] },
    X0: { name: 'xi', sym: '\\Xi^{0}', comp: 'uss', qs: [q('u', 'R', 1), q('s', 'G', -1), q('s', 'B', 1)] },
    Xm: { name: 'xi', sym: '\\Xi^{-}', comp: 'dss', qs: [q('d', 'R', 1), q('s', 'G', -1), q('s', 'B', 1)] },
    Om: { name: 'omega', sym: '\\Omega^{-}', comp: 'sss', qs: [q('s', 'R', 1), q('s', 'G', 1), q('s', 'B', 1)] },
    pb: { name: 'antiproton', sym: '\\bar{p}', comp: '\\bar{u}\\bar{u}\\bar{d}', qs: [q('~u', 'Rb', 1), q('~u', 'Gb', -1), q('~d', 'Bb', 1)] },
  };
  const OPTS = [['p', 'p, proton'], ['n', 'n, neutron'], ['pip', 'π⁺'], ['pim', 'π⁻'], ['K0', 'K⁰'], ['K0b', 'K̄⁰'], ['Kp', 'K⁺'], ['Km', 'K⁻'], ['jpsi', 'J/ψ'], ['ups', 'ϒ'],
    ['D0', 'Δ⁰'], ['Dp', 'Δ⁺'], ['Dm', 'Δ⁻'], ['Dpp', 'Δ⁺⁺'], ['L0', 'Λ⁰'], ['S0', 'Σ⁰'], ['Sp', 'Σ⁺'], ['Sm', 'Σ⁻'], ['X0', 'Ξ⁰'], ['Xm', 'Ξ⁻'], ['Om', 'Ω⁻'], ['pb', 'p̄, antiproton']];
  /* slot places in units of HR, Figure 33.15's: a baryon's three, a meson's two and its third hidden at the center */
  const POS3 = [[-0.5, -0.05], [0, 0.42], [0.5, -0.12]], POS2 = [[-0.42, 0], [0.42, 0], [0, 0]];
  const d = sim('sim-quark-content', H);
  const pick = select(d.controls, { label: '\\text{Hadron}', options: OPTS.map(([value, label]) => ({ value, label })), value: 'p', aria: 'the hadron built from its quarks', key: 'hadron' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const val = (k, key) => { const f = FL[k.f], s = k.anti ? -1 : 1; return key === 'B' ? s : key === 'q' ? s * f.q : s * f[key]; };
  /* a fraction n/den as TeX, reduced; sign shown when asked */
  const frac = (n, den, sign) => {
    if (n === 0) return '0';
    const g = (a, b) => (b ? g(b, a % b) : a), k = g(Math.abs(n), den), a = Math.abs(n) / k, b = den / k;
    const body = b === 1 ? String(a) : '\\frac{' + a + '}{' + b + '}';
    return (n < 0 ? '-' : sign ? '+' : '') + body;
  };
  const sumRow = (vals, den) => {
    const parts = vals.map((v, i) => (i === 0 ? frac(v, den, true) : v < 0 ? '- ' + frac(-v, den) : '+ ' + frac(v, den)));
    return '$' + parts.join(' ') + ' = ' + frac(vals.reduce((s, v) => s + v, 0), den) + '$';
  };
  const qtex = (k) => (k.anti ? '\\bar{' + k.f + '}' : k.f);
  const comp = (h) => h.comp;

  function venn(ctx, cs, ws) {
    if (F.fact('#ffffff') !== '#ffffff') {
      cs.forEach((c) => { ctx.save(); ctx.globalAlpha *= c.a; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(c.x, c.y, VR, 0, TAU); ctx.stroke(); ctx.restore(); });
      return;
    }
    const circle = (c) => { ctx.beginPath(); ctx.arc(c.x, c.y, VR, 0, TAU); };
    const subsets = [[0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]].filter((s) => s.every((i) => i < cs.length));
    subsets.forEach((s) => {
      const w = Math.min(...s.map((i) => ws[i])); if (w <= 0.01) return;
      ctx.save(); s.slice(0, -1).forEach((i) => { circle(cs[i]); ctx.clip(); });
      ctx.globalAlpha *= s.length === 1 ? ws[s[0]] : 1;
      ctx.fillStyle = F.fact(hex(add(...s.map((i) => cs[i].rgb.map((v) => v * (s.length === 1 ? 1 : ws[i]))))));
      circle(cs[s[s.length - 1]]); ctx.fill(); ctx.restore();
    });
    cs.forEach((c) => { ctx.save(); ctx.globalAlpha *= c.a; ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5; circle(c); ctx.stroke(); ctx.restore(); });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const h = HAD[pick.value], three = h.qs.length === 3, anti = h.qs.every((k) => k.anti);
    hits = [];
    const desc = three ? (anti ? 'three antiquarks whose anticolors add to white' : 'three quarks whose colors add to white') : 'a quark and an antiquark whose color and anticolor add to white';
    topline(ctx, 'The ' + h.name + ' $' + h.sym + '$ is $' + comp(h) + '$, ' + desc + '.');

    /* the slots blend from the last hadron's to this one's: places, colors, spins, the third's presence */
    const slot = (v) => { const hh = HAD[v], P = hh.qs.length === 3 ? POS3 : POS2; return [0, 1, 2].flatMap((i) => [P[i][0], P[i][1]]); };
    const P = pick.mix(slot);
    const third = pick.mix((v) => (HAD[v].qs.length === 3 ? 1 : 0));
    const ws = [1, 1, third];
    const rgbAt = (i) => pick.mix((v) => { const k = HAD[v].qs[i]; return k ? RGBOF[k.col] : RGBOF[HAD[v].qs[0].col]; });
    const spinAt = (i) => pick.mix((v) => { const k = HAD[v].qs[i]; return k ? k.sp : 0; });
    const refCol = h.ref ? F.ref(h.ref) : PAL.ink;

    /* the hadron */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.04); ctx.strokeStyle = h.ref ? refCol : alpha(PAL.ink, 0.6); ctx.lineWidth = h.ref ? 4 : 2.5;
    ctx.beginPath(); ctx.arc(HX, HY, HR, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, h.name + ' $' + h.sym + '$', HX, HY + HR + 32, refCol, { size: 24, weight: 600, align: 'center', tex: true });
    hits.push({ x: HX, y: HY - HR + 20, r: 22, name: 'the ' + h.name + ', ' + comp(h).replace(/\\bar\{(\w)\}/g, '$1-bar') });

    for (let i = 0; i < 3; i++) {
      const w = ws[i]; if (w <= 0.01) continue;
      const x = HX + P[2 * i] * HR, y = HY + P[2 * i + 1] * HR, rgb = rgbAt(i), sp = spinAt(i), k = h.qs[i];
      const sx = x, y0 = y - Math.sign(sp || 1) * QR, len = 52 * Math.abs(sp);
      if (len > 4) F.faded(ctx, w, [0, 0], () => arrow(ctx, sx, y0, sx, y0 - Math.sign(sp) * len, PAL.ink, 3));
      quark(ctx, x, y, QR, F.fact(hex(rgb)), k && pick.k > 0.5 ? qtex(k) : (HAD[pick.from]?.qs[i] && pick.k <= 0.5 ? qtex(HAD[pick.from].qs[i]) : ''), w);
      if (k) {
        const f = FL[k.f];
        hits.push({ x, y, r: QR + 4, name: (k.anti ? 'an anti' + f.name : (f.name === 'up' ? 'an ' : 'a ') + f.name) + ' quark, charge ' + (val(k, 'q') > 0 ? '+' : '−') + Math.abs(val(k, 'q')) + '/3 of q_e, color ' + COLNAME[k.col] + ', spin ' + (k.sp > 0 ? 'up' : 'down') });
      }
    }

    /* the colors added: a circle of each quark's color, overlapping where they add */
    const cs = [0, 1, 2].slice(0, three || pick.k < 1 ? 3 : 2).map((i) => ({ x: VX + P[2 * i] * 80, y: VY + P[2 * i + 1] * 80, rgb: rgbAt(i), a: ws[i] }));
    venn(ctx, cs, ws);
    h.qs.forEach((k, i) => {
      const c = cs[i], dx = c.x - VX, dy = c.y - VY, L = Math.hypot(dx, dy) || 1;
      text(ctx, '$' + COLTEX[k.col] + '$', c.x + (dx / L) * (VR + 20), c.y + (dy / L) * (VR + 20) + (Math.abs(dy) > L * 0.7 ? 6 : 0), PAL.ink, { size: 24, align: 'center', tex: true });
      hits.push({ x: c.x + (dx / L) * 30, y: c.y + (dy / L) * 30, r: 26, name: COLNAME[k.col] });
    });
    hits.push({ x: VX, y: VY, r: 14, name: 'white, where the colors all overlap' });

    /* the quarks' numbers added, as Figure 33.15 adds them */
    const ROWS = [['spin', (k) => k.sp, 2], ['$B$', (k) => val(k, 'B'), 3], ['$S$', (k) => val(k, 'S'), 1], ['charm', (k) => val(k, 'c'), 1], ['bottomness', (k) => val(k, 'b'), 1]];
    ROWS.forEach(([lab, f, den], j) => {
      const y = 160 + 70 * j;
      text(ctx, lab, 935, y, PAL.ink, { size: 24, align: 'right', tex: true });
      text(ctx, sumRow(h.qs.map(f), den), 960, y, PAL.ink, { size: 26, tex: true });
    });

    const terms = h.qs.map((k, i) => { const v = val(k, 'q'); return '\\mk{t' + i + '}{' + (i === 0 ? frac(v, 3, true) : (v < 0 ? '- ' : '+ ') + frac(Math.abs(v), 3)) + '\\kqe}'; });
    const tot = h.qs.reduce((s, k) => s + val(k, 'q'), 0) / 3;
    const res = tot === 0 ? '0' : (tot > 0 ? '+' : '-') + (Math.abs(tot) === 1 ? '' : Math.abs(tot)) + '\\kqe';
    ro.set('\\mk{q}{\\kq} = ' + terms.join(' ') + ' = \\mk{r}{' + res + '}', h.note || '', { form: h.qs.length });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 33.17 · sim-quark-scattering · moving · flat (rule 28.1)
   Lengths in fm; the proton a circle of radius 1.2 fm (r₀A^{1/3}, A = 1), its
   quarks where Figure 33.17 has them. Each quark pulls (u, +2/3) or pushes
   (d, −1/3) the electron through a Gaussian bump of width λ whose strength
   falls as 1/λ: a cartoon of resolution, drawn, not computed. The electrons
   keep their speed and only turn. E ≈ pc, so λ = h/p gives E ≈ hc/λ, with
   h = 6.63 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s, 1 GeV = 1.602 × 10⁻¹⁰ J; the
   text's 20-GeV electrons have λ = 0.0621 fm. Twelve electrons launched
   0.36 s apart at 5.5 fm/s; a loop of 6.0 s.
===================================================================== */
(function () {
  const H = 600, PX = 700, PY = 340, S = 150, RP = 1.2, X0 = -4.6;
  const HC = 6.63e-34 * 3e8, GEV = 1.602e-10, LSLAC = HC / (20 * GEV) * 1e15;
  const QK = [{ x: -0.35, y: 0.6, q: 2 / 3, f: 'u', col: 'B' }, { x: 0.55, y: -0.2, q: -1 / 3, f: 'd', col: 'R' }, { x: -0.4, y: -0.6, q: 2 / 3, f: 'u', col: 'G' }];
  const BS = [0.12, 0.95, -0.66, 0.48, -0.16, -1.05, 0.66, -0.3, 0.3, -0.85, -0.06, -0.54];
  const K = 1.5, V = 5.5, GAP = 0.36, T = 6.0;
  const d = sim('sim-quark-scattering', H);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 0.05, max: 3, step: 0.001, value: LSLAC, unit: 'fm', dec: 3, aria: 'the wavelength of the electrons', onInput: reset,
    specials: [{ at: LSLAC, label: 'SLAC, 20 GeV' }] });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let paths = [], hits = [];
  hover(d.stage, () => hits);

  function trace(b, l) {
    const s = Math.max(l, 0.05), A = K * 0.06 / s, ds = 0.004, pts = [[X0, b]], len = [0];
    let x = X0, y = b, ux = 1, uy = 0, L = 0;
    for (let n = 0; n < 4000 && x <= 4.7 && x >= X0 - 0.01 && Math.abs(y) < 1.5; n++) {
      let fx = 0, fy = 0;
      QK.forEach((k) => { const dx = x - k.x, dy = y - k.y, e = Math.exp(-(dx * dx + dy * dy) / (2 * s * s)); fx -= k.q * A * e * dx / (s * s); fy -= k.q * A * e * dy / (s * s); });
      const fp = fx * -uy + fy * ux; ux -= uy * fp * ds; uy += ux * fp * ds;
      const m = Math.hypot(ux, uy); ux /= m; uy /= m; x += ux * ds; y += uy * ds; L += ds;
      if (n % 3 === 2) { pts.push([x, y]); len.push(L); }
    }
    return { pts, len, L };
  }
  function reset() { paths = BS.map((b) => trace(b, lam.v)); cy.reset(); }
  reset();

  const SX = (x) => PX + x * S, SY = (y) => PY - y * S;
  /* the point of a path at arc length s, and its direction */
  function at(p, s) {
    let i = 1; while (i < p.len.length - 1 && p.len[i] < s) i++;
    const a = p.pts[i - 1], b = p.pts[i], k = Math.min(1, Math.max(0, (s - p.len[i - 1]) / ((p.len[i] - p.len[i - 1]) || 1)));
    const dx = b[0] - a[0], dy = b[1] - a[1], m = Math.hypot(dx, dy) || 1;
    return { x: a[0] + dx * k, y: a[1] + dy * k, ux: dx / m, uy: dy / m };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const l = lam.v, tn = cy.now(), E = F.el('e-');
    hits = [];
    const head = l < 0.2 ? 'Electrons of $\\klam = ' + fmt(l, 3) + '$ fm are thrown back from three hard points inside the proton.'
      : l < 1.2 ? 'Electrons of $\\klam = ' + fmt(l, 2) + '$ fm blur the three quarks together and are bent only gently.'
        : 'Electrons of $\\klam = ' + fmt(l, 2) + '$ fm are too long to see inside the proton and pass almost straight through.';
    topline(ctx, head);

    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(PX, PY, RP * S, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'proton', PX + RP * S * 0.72 + 14, PY + RP * S * 0.72 + 14, PAL.ink, { size: 22, weight: 600, bg: PAL.panel });
    hits.push({ x: PX + RP * S * 0.7, y: PY - RP * S * 0.7, r: 30, name: 'the proton, radius about 1.2 fm' });

    /* trails, then the moving electrons with their wave trains */
    paths.forEach((p, i) => {
      const s = (tn - i * GAP) * V; if (s <= 0) return;
      const sEnd = Math.min(s, p.L), out = s >= p.L;
      ctx.save(); ctx.strokeStyle = alpha(E, out ? 0.4 : 0.6); ctx.lineWidth = 2.5; ctx.beginPath();
      for (let j = 0; j < p.pts.length && p.len[j] <= sEnd; j++) { const [x, y] = p.pts[j]; j ? ctx.lineTo(SX(x), SY(y)) : ctx.moveTo(SX(x), SY(y)); }
      const e = at(p, sEnd); ctx.lineTo(SX(e.x), SY(e.y)); ctx.stroke(); ctx.restore();
      if (out) return;
      const lp = l * S, Lw = Math.min(Math.max(6 * lp, 70), Math.max(lp, 300)), n = Math.max(40, Math.round(Lw / 2));
      ctx.save(); ctx.strokeStyle = E; ctx.lineWidth = 2.5; ctx.beginPath();
      for (let j = 0; j <= n; j++) {
        const u = j / n, sj = sEnd - (u * Lw) / S; if (sj < 0) break;
        const q = at(p, sj), amp = 10 * Math.sin(Math.PI * u) * Math.cos(TAU * (u * Lw) / lp);
        const x = SX(q.x) + q.uy * amp, y = SY(q.y) + q.ux * amp;
        j ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke(); ctx.restore();
      F.dot(ctx, SX(e.x), SY(e.y), E, true, 7);
      hits.push({ x: SX(e.x), y: SY(e.y), r: 16, name: 'an electron of wavelength ' + fmt(l, 3) + ' fm' });
    });

    QK.forEach((k) => {
      quark(ctx, SX(k.x), SY(k.y), 18, F.fact(hex(RGBOF[k.col])), k.f);
      hits.push({ x: SX(k.x), y: SY(k.y), r: 22, name: (k.f === 'u' ? 'an up quark, charge +2/3' : 'a down quark, charge −1/3') + ' of q_e' });
    });

    text(ctx, 'e⁻ beam', 30, SY(1.28), E, { size: 22, weight: 600 });
    const bx = 60, by = 568;
    line(ctx, bx, by, bx + S, by, F.C('position'), 3);
    line(ctx, bx, by - 8, bx, by + 8, F.C('position'), 3); line(ctx, bx + S, by - 8, bx + S, by + 8, F.C('position'), 3);
    text(ctx, '1 fm', bx + S / 2, by - 20, F.C('position'), { size: 20, weight: 600, align: 'center' });

    const EJ = HC / (l * 1e-15), G = EJ / GEV, ratio = 2 * RP / l;
    const sci = (x) => { const e = Math.floor(Math.log10(x)); return fmt(x / 10 ** e, 2) + '\\times 10^{' + e + '}'; };
    const note = ratio >= 1 ? 'The proton’s 2.4-fm diameter is ' + fmt(ratio, ratio < 10 ? 1 : 0) + ' times $\\klam$.' : '$\\klam$ is ' + fmt(1 / ratio, 2) + ' times the proton’s 2.4-fm diameter.';
    ro.set('\\kE \\approx \\frac{h\\kc}{\\klam} = \\frac{(6.63\\times 10^{-34}\\;\\text{J}\\cdot\\text{s})(3.00\\times 10^{8}\\;\\text{m/s})}{' + sci(l * 1e-15) + '\\;\\text{m}} = '
      + sci(EJ) + '\\;\\text{J} = ' + fmt(G, G >= 10 ? 0 : G >= 1 ? 1 : 2) + '\\;\\text{GeV}', note);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 33.20 · fig-three-families · faithful copy · still
   The book's chart: leptons, quarks and carrier particles in three family
   columns. A column wears its family's referent colour; the electron, the
   neutrinos and the photon keep F.el.
===================================================================== */
(function () {
  const H = 600, CX = [500, 820, 1140], RY = { lep: 205, qk: 345, car: 485 };
  const d = sim('fig-three-families', H);
  let hits = [];
  hover(d.stage, () => hits);
  const FAM = [
    { lep: [['e^{-}', 'the electron', 'e-', 26], ['\\nu_{e}', 'the electron neutrino', 'nu', 11]], qk: [['u', 'the up quark'], ['d', 'the down quark']] },
    { lep: [['\\mu', 'the muon', null, 26], ['\\nu_{\\mu}', 'the muon neutrino', 'nu', 11]], qk: [['s', 'the strange quark'], ['c', 'the charmed quark']] },
    { lep: [['\\tau', 'the tau', null, 26], ['\\nu_{\\tau}', 'the tau neutrino', 'nu', 11]], qk: [['t', 'the top quark'], ['b', 'the bottom quark']] },
  ];
  function packet(ctx, x, y, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.fillStyle = alpha(color, 0.18);
    ctx.beginPath(); ctx.ellipse(x, y, 34, 17, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= 30; i++) { const u = i / 30, px = x - 26 + 52 * u, py = y - 10 * Math.sin(u * 2.5 * TAU) * Math.sin(u * Math.PI); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
  }
  function ball(ctx, x, y, r, c) { ctx.save(); ctx.fillStyle = alpha(c, 0.75); ctx.strokeStyle = c; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore(); }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    topline(ctx, 'Leptons, quarks and carrier particles each fall into three analogous families.');
    [['Leptons', RY.lep], ['Quarks', RY.qk], ['Carrier particles', RY.car - 14], ['(gauge bosons)', RY.car + 14]].forEach(([s, y]) => text(ctx, s, 40, y, PAL.ink, { size: 24 }));
    FAM.forEach((fam, i) => {
      const cx = CX[i], col = F.ref('family-' + (i + 1));
      ctx.save(); ctx.fillStyle = alpha(col, 0.06); ctx.strokeStyle = alpha(col, 0.45); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect(cx - 145, 92, 290, 478, 12); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, 'Family ' + (i + 1), cx, 120, col, { size: 24, weight: 600, align: 'center' });
      fam.lep.forEach(([s, name, el, r], j) => {
        const x = cx + (j ? 62 : -62), c = el ? F.el(el) : col;
        ball(ctx, x, RY.lep - 8, r, c);
        text(ctx, '$' + s + '$', x, RY.lep + 42, PAL.ink, { size: 28, align: 'center', tex: true });
        hits.push({ x, y: RY.lep - 8, r: Math.max(r, 16) + 4, name: name });
      });
      fam.qk.forEach(([s, name], j) => {
        const x = cx + (j ? 62 : -62);
        quark(ctx, x, RY.qk, 28, col, s);
        hits.push({ x, y: RY.qk, r: 32, name: name });
      });
    });
    const G = F.el('gamma'), c2 = F.ref('family-2'), c3 = F.ref('family-3');
    packet(ctx, CX[0] - 30, RY.car - 8, G);
    text(ctx, '$\\gamma$', CX[0] + 30, RY.car - 8, PAL.ink, { size: 30, tex: true });
    hits.push({ x: CX[0] - 30, y: RY.car - 8, r: 36, name: 'the photon, carrier of the electromagnetic force' });
    [['W^{+}', 'the W⁺'], ['W^{-}', 'the W⁻'], ['Z^{0}', 'the Z⁰']].forEach(([s, name], j) => {
      const x = CX[1] - 80 + 80 * j;
      ball(ctx, x, RY.car - 12, 8, c2);
      text(ctx, '$' + s + '$', x, RY.car + 28, PAL.ink, { size: 28, align: 'center', tex: true });
      hits.push({ x, y: RY.car - 12, r: 18, name: name + ', a carrier of the weak force' });
    });
    for (let j = 0; j < 8; j++) ball(ctx, CX[2] - 98 + 28 * j, RY.car - 12, 10, c3);
    text(ctx, 'Gluons', CX[2], RY.car + 28, PAL.ink, { size: 24, align: 'center' });
    hits.push({ x: CX[2], y: RY.car - 12, r: 100, name: 'the eight gluons, carriers of the strong force' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
