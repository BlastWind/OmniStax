/* Figures for section 31.3 Substructure of the Nucleus.
   The page binds position (a nuclear radius), density, mass, energy, velocity
   and force; the figures color position, and density through the readout's
   note. Z, N and A are counts and stay in ink. Protons and neutrons are
   F.el('p+') and F.el('n0'). On the chart of the nuclides a stable nuclide is a
   filled ink dot and the band of unstable ones a hollow outline, never a hue.
   Both figures answer their sliders and register no cycle: the size of a
   packing and the place of a nuclide on a chart are states, with no clock. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, label, axes, curve, pinned, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const themeKey = () => [PAL.ink, PAL.muted, PAL.panel].join('|');

const R0 = 1.2;                                  /* fm, the book's r₀ */
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c]).join('');
const SYM = ('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og').split(' ');
const sym = (Z) => SYM[Z - 1] ?? '?';

/* The 251 stable nuclides, as each element's stable mass numbers (¹⁸⁰ᵐTa counted). */
const STABLE = { 1: [1, 2], 2: [3, 4], 3: [6, 7], 4: [9], 5: [10, 11], 6: [12, 13], 7: [14, 15], 8: [16, 17, 18], 9: [19], 10: [20, 21, 22], 11: [23], 12: [24, 25, 26], 13: [27], 14: [28, 29, 30], 15: [31], 16: [32, 33, 34, 36], 17: [35, 37], 18: [36, 38, 40], 19: [39, 41], 20: [40, 42, 43, 44, 46], 21: [45], 22: [46, 47, 48, 49, 50], 23: [51], 24: [50, 52, 53, 54], 25: [55], 26: [54, 56, 57, 58], 27: [59], 28: [58, 60, 61, 62, 64], 29: [63, 65], 30: [64, 66, 67, 68, 70], 31: [69, 71], 32: [70, 72, 73, 74], 33: [75], 34: [74, 76, 77, 78, 80], 35: [79, 81], 36: [80, 82, 83, 84, 86], 37: [85], 38: [84, 86, 87, 88], 39: [89], 40: [90, 91, 92, 94], 41: [93], 42: [92, 94, 95, 96, 97, 98], 44: [96, 98, 99, 100, 101, 102, 104], 45: [103], 46: [102, 104, 105, 106, 108, 110], 47: [107, 109], 48: [106, 108, 110, 111, 112, 114], 49: [113], 50: [112, 114, 115, 116, 117, 118, 119, 120, 122, 124], 51: [121, 123], 52: [120, 122, 123, 124, 125, 126], 53: [127], 54: [126, 128, 129, 130, 131, 132, 134], 55: [133], 56: [132, 134, 135, 136, 137, 138], 57: [139], 58: [136, 138, 140, 142], 59: [141], 60: [142, 143, 145, 146, 148], 62: [144, 149, 150, 152, 154], 63: [153], 64: [154, 155, 156, 157, 158, 160], 65: [159], 66: [156, 158, 160, 161, 162, 163, 164], 67: [165], 68: [162, 164, 166, 167, 168, 170], 69: [169], 70: [168, 170, 171, 172, 173, 174, 176], 71: [175], 72: [176, 177, 178, 179, 180], 73: [180, 181], 74: [182, 183, 184, 186], 75: [185], 76: [187, 188, 189, 190, 192], 77: [191, 193], 78: [192, 194, 195, 196, 198], 79: [197], 80: [196, 198, 199, 200, 201, 202, 204], 81: [203, 205], 82: [204, 206, 207, 208] };
const isStable = (Z, A) => (STABLE[Z] ?? []).includes(A);
/* the valley of stability, Z ≈ A/(1.98 + 0.0155 A^{2/3}), and its N for a given Z */
const zValley = (A) => A / (1.98 + 0.0155 * Math.pow(A, 2 / 3));
function nValley(Z) { let lo = Z, hi = 3.2 * Z + 4; for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (zValley(m) < Z) lo = m; else hi = m; } return (lo + hi) / 2 - Z; }
const LONG_LIVED = { 232: 90, 235: 92, 238: 92 };
/* the nucleus drawn for a mass number: its stable isobar nearest the valley, else the longest-lived the text names, else the valley's own Z */
function zOf(A) {
  const zv = zValley(A);
  const iso = Object.keys(STABLE).map(Number).filter((Z) => isStable(Z, A)).sort((a, b) => Math.abs(a - zv) - Math.abs(b - zv));
  if (iso.length) return iso[0];
  return LONG_LIVED[A] ?? Math.max(1, Math.round(zv));
}

/* =====================================================================
   FIGURE 31.11 · sim-nucleus-model · still · physical 3D (rule 28.3)
   A nucleons of radius a = r₀(π/(3√2))^{1/3} = 1.09 fm on a face-centered
   cubic lattice, whose volume per site is (4/3)πr₀³, so the A sites nearest
   the center fill a ball of radius r₀A^{1/3}. A ring in the position hue marks
   that radius. Yaw free, pitch within ±70°: a ball has no ground and no
   privileged side, and the bound keeps the ring from closing to a line.
   Graph below: r from 0 to 8 fm (7.4 at A = 238) against A from 0 to 250.
   Without WebGL the ball is drawn flat from the front on the canvas.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const FLAT = 470;                                 /* the canvas band the flat ball takes where there is no scene */
  const d = sim('sim-nucleus-model', hasGL ? 300 : 300 + FLAT);
  const aS = ctl(d.controls, { label: 'A', cls: '', min: 1, max: 238, step: 1, value: 56, unit: '', dec: 0, aria: 'the mass number of the nucleus, its number of nucleons',
    detents: [{ v: 4, label: '⁴He' }, { v: 56, label: '⁵⁶Fe' }, { v: 238, label: '²³⁸U' }] });
  const ro = readout(d);

  const NUC = R0 * Math.cbrt(Math.PI / (3 * Math.SQRT2));   /* 1.086 fm, a nucleon's radius in the packing */
  const STEP = NUC * Math.SQRT2;                             /* lattice step, so neighbours touch */
  const hash = (i, j, k, s) => { const x = Math.sin(i * 127.1 + j * 311.7 + k * 74.7 + s * 19.3) * 43758.5453; return x - Math.floor(x); };
  const SITES = [];
  for (let i = -7; i <= 7; i++) for (let j = -7; j <= 7; j++) for (let k = -7; k <= 7; k++) {
    if (((i + j + k) % 2 + 2) % 2) continue;
    const p = [i * STEP, j * STEP, k * STEP];
    SITES.push({ p, key: Math.hypot(p[0], p[1], p[2]) + 1e-3 * hash(i, j, k, 1), u: hash(i, j, k, 2) });
  }
  SITES.sort((a, b) => a.key - b.key);
  /* the first A sites about their own center, and which of them are protons */
  function packing(A, Z) {
    const s = SITES.slice(0, A), c = [0, 1, 2].map((q) => s.reduce((t, x) => t + x.p[q], 0) / A);
    const order = s.map((x, i) => [x.u, i]).sort((a, b) => a[0] - b[0]);
    const proton = new Array(A).fill(false); order.slice(0, Z).forEach(([, i]) => { proton[i] = true; });
    return s.map((x, i) => ({ p: [x.p[0] - c[0], x.p[1] - c[1], x.p[2] - c[2]], proton: proton[i] }));
  }

  const SC = 0.2;                                    /* scene units per fm: the ball of ²³⁸U, 8.5 fm to its outer nucleons, fits the stage */
  let V = null, grp = null, sig = '';
  if (hasGL) {
    V = F.view3d(d.stage, { h: 460, dist: 7.6, tilt: 0.3, spin: 'idle', pitch: [-1.22, 1.22], yaw: 'free', zoomMin: 0.6, zoomMax: 2.6 });
    if (!V.scene) V = null;
    else { grp = V.part(0); V.look({ target: [0, 0.22, 0] }); d.stage.appendChild(d.c); }
  }

  function build(A, Z, r) {
    const key = [A, themeKey(), F.el('p+'), F.el('n0'), C('position')].join('|');
    if (key === sig || !grp) return; sig = key;
    V.clear();
    const g = new THREE.Group(); grp.add(g);
    packing(A, Z).forEach((n) => V.pickable(F.mesh.sphere(g, n.p.map((x) => x * SC), NUC * SC * 0.985, n.proton ? F.el('p+') : F.el('n0')), n.proton ? 'a proton' : 'a neutron'));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r * SC, 0.018, 8, 120), new THREE.MeshBasicMaterial({ color: new THREE.Color(C('position')), depthTest: false, transparent: true, opacity: 0.95 }));
    ring.rotation.x = Math.PI / 2; ring.renderOrder = 5; g.add(ring);
    V.label('r = ' + fmt(r, 1) + ' fm', [(r + NUC) * SC + 0.6, 0, 0], g, 0).style.color = C('position');
  }

  /* the ball from the front, painted back to front, where there is no WebGL */
  function drawFlat(ctx, A, Z, r) {
    const cx = 700, cy = 70 + FLAT / 2, k = 24;      /* px per fm: 7.4 + 1.1 fm fills the band at A = 238 */
    packing(A, Z).sort((a, b) => a.p[2] - b.p[2]).forEach((n) => {
      ctx.save(); ctx.fillStyle = n.proton ? F.el('p+') : F.el('n0'); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx + n.p[0] * k, cy - n.p[1] * k, NUC * k, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    });
    ctx.save(); ctx.strokeStyle = C('position'); ctx.lineWidth = 3; ctx.setLineDash([10, 10]);
    ctx.beginPath(); ctx.arc(cx, cy, r * k, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    label(ctx, 'r = ' + fmt(r, 1) + ' fm', cx + r * k, cy, { side: 'right', color: C('position'), size: 20, gap: 14 });
  }

  function draw() {
    const A = aS.v, Z = zOf(A), N = A - Z, r = R0 * Math.cbrt(A);
    const name = sup(A) + sym(Z);
    const head = A === 1 ? `${name} is a single nucleon, a proton, ${fmt(r, 1)} fm in radius.` : `${name} packs ${A} nucleons into a ball ${fmt(r, 1)} fm in radius.`;
    const { ctx } = begin(d.c);
    let y0 = 0;
    if (V) { build(A, Z, r); V.headline(head); V.invalidate(); }
    else { topline(ctx, head); drawFlat(ctx, A, Z, r); y0 = FLAT; }

    /* the legend: one of each kind, with its count */
    const ly = y0 + 34;
    dot(ctx, 470, ly, F.el('p+'), true, 11); text(ctx, Z + (Z === 1 ? ' proton' : ' protons'), 492, ly, PAL.ink, { size: 20, align: 'left' });
    dot(ctx, 760, ly, F.el('n0'), true, 11); text(ctx, N + (N === 1 ? ' neutron' : ' neutrons'), 782, ly, PAL.ink, { size: 20, align: 'left' });

    /* r against A, fixed: A from 0 to 250, r from 0 to 8 fm */
    const box = { l: 170, r: 1280, t: y0 + 104, b: y0 + 236 };
    const { X, Y } = axes(ctx, box, [0, 250], [0, 8], { xl: 'A, the mass number', yl: 'r (fm)', yc: C('position'), nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, (a) => R0 * Math.cbrt(a), 0, 250, X, Y, C('position'), 5, 160);
    const p = pinned(ctx, box, X, Y, A, r, C('position'));
    line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);

    ro.set(`\\krnuc = \\kronuc A^{1/3} = (1.2\\;\\text{fm})(${A})^{1/3} = ${fmt(r, 1)}\\;\\text{fm}`,
      'Each nucleon adds the same volume, so $\\krho = 2.3\\times10^{17}\\;\\text{kg/m}^{3}$ at every $A$.');
  }
  still(d, draw);
})();

/* =====================================================================
   FIGURE 31.12 · sim-nuclide-chart · still · flat (rule 28.1)
   N against Z on the book's frame, Z from 0 to 120 and N from 0 to 180,
   fixed, so the sliders' extremes (110, 160) stay inside. The 251 stable
   nuclides are filled ink dots; the band of unstable nuclides is a hollow
   outline round the valley, as simplified as the book's. Diagonals of
   constant A every 10, labeled every 20 above the band.
===================================================================== */
(function () {
  const d = sim('sim-nuclide-chart', 780);
  let nS = null;
  const zS = ctl(d.controls, { label: 'Z', cls: '', min: 1, max: 110, step: 1, value: 26, unit: '', dec: 0, aria: 'the number of protons, the atomic number',
    specials: [{ at: () => (nS ? nS.v : null), label: 'N = Z' }] });
  nS = ctl(d.controls, { label: 'N', cls: '', min: 0, max: 160, step: 1, value: 30, unit: '', dec: 0, aria: 'the number of neutrons',
    specials: [{ at: () => zS.v, label: 'N = Z' }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const MAGIC = [2, 8, 20, 28, 50, 82, 126];
  const BAND = [];
  for (let Z = 1; Z <= 106; Z++) { const nv = nValley(Z); BAND.push([Z, Math.max(0, nv - (2 + 0.11 * Z)), nv + (3 + 0.12 * Z)]); }

  function draw() {
    const Z = zS.v, N = nS.v, A = N + Z, stable = isStable(Z, A), name = sup(A) + sym(Z);
    const { ctx } = begin(d.c);
    hits = [];
    const box = { l: 150, r: 1250, t: 140, b: 690 };
    const { X, Y } = axes(ctx, box, [0, 120], [0, 180], { xl: 'Z, number of protons (atomic number)', yl: 'N, number of neutrons', nx: 12, ny: 9, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();

    /* the element's column: its isotopes */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(X(Z - 0.5), box.t, X(Z + 0.5) - X(Z - 0.5), box.b - box.t); ctx.restore();
    /* diagonals of constant A and the magic numbers */
    for (let a = 10; a <= 290; a += 10) line(ctx, X(0), Y(a), X(a), Y(0), alpha(PAL.ink, 0.16), 1.5, [6, 8]);
    MAGIC.forEach((m) => { if (m <= 120) line(ctx, X(m), box.t, X(m), box.b, alpha(PAL.ink, 0.3), 2, [2, 6]); line(ctx, box.l, Y(m), box.r, Y(m), alpha(PAL.ink, 0.3), 2, [2, 6]); });
    /* N = Z */
    line(ctx, X(0), Y(0), X(120), Y(120), PAL.muted, 3, [10, 10]);
    /* the band of known nuclides, hollow */
    ctx.save(); ctx.beginPath();
    BAND.forEach(([z, lo], i) => (i ? ctx.lineTo(X(z), Y(lo)) : ctx.moveTo(X(z - 0.5), Y(lo))));
    for (let i = BAND.length - 1; i >= 0; i--) ctx.lineTo(X(BAND[i][0]), Y(BAND[i][2]));
    ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    /* the stable nuclides, filled */
    Object.entries(STABLE).forEach(([z, As]) => As.forEach((a) => {
      const zz = +z, x = X(zz), y = Y(a - zz);
      dot(ctx, x, y, PAL.ink, true, 3);
      hits.push({ x, y, r: 6, name: `${sup(a)}${sym(zz)}, stable: ${zz} protons, ${a - zz} neutrons` });
    }));
    ctx.restore();

    /* A along the diagonals, above the band as the book prints them */
    for (let a = 20; a <= 260; a += 20) {
      const z = zValley(a) - (4 + a * 0.05), n = a - z;
      if (z > 1 && n < 178) text(ctx, String(a), X(z), Y(n), PAL.muted, { size: 16, align: 'center', bg: PAL.panel });
    }
    text(ctx, 'N = Z', X(104), Y(98), PAL.muted, { size: 20, align: 'left', bg: PAL.panel });

    /* the legend */
    const gx = box.l + 30, gy = box.t + 30;
    dot(ctx, gx, gy, PAL.ink, true, 5); text(ctx, 'stable nuclei', gx + 20, gy, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.fillRect(gx - 9, gy + 24, 18, 14); ctx.strokeRect(gx - 9, gy + 24, 18, 14); ctx.restore();
    text(ctx, 'unstable nuclei', gx + 20, gy + 31, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
    line(ctx, gx - 10, gy + 62, gx + 10, gy + 62, alpha(PAL.ink, 0.5), 2, [2, 6]);
    text(ctx, 'magic numbers', gx + 20, gy + 62, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
    text(ctx, 'diagonals: mass number A', gx + 20, gy + 93, PAL.muted, { size: 17, align: 'left', bg: PAL.panel });
    line(ctx, gx - 10, gy + 100, gx + 10, gy + 86, alpha(PAL.ink, 0.35), 1.5, [6, 8]);

    /* the chosen nuclide: filled when stable, hollow when not */
    const p = pinned(ctx, box, X, Y, Z, N, PAL.ink);
    dot(ctx, p.x, p.y, PAL.ink, false, 12);
    if (stable) dot(ctx, p.x, p.y, PAL.ink, true, 6);
    label(ctx, name, p.x, p.y, { side: p.x > 1000 ? 'left' : 'right', color: PAL.ink, size: 22, gap: 18 });

    const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
    topline(ctx, `${name}, with ${plural(Z, 'proton')} and ${plural(N, 'neutron')}, ${stable ? 'is stable.' : 'is not stable: it lies off the band of stable nuclei.'}`);

    const nIso = (STABLE[Z] ?? []).length;
    const isoWord = nIso === 0 ? 'none of them is stable' : nIso === 1 ? 'one of them is stable' : `${nIso} of them are stable`;
    const atN = Object.entries(STABLE).filter(([z, As]) => As.includes(N + +z)).length;
    const note = MAGIC.includes(Z) ? `$Z = ${Z}$ is a magic number, and ${nIso} stable isotopes of ${sym(Z)} share its column.`
      : MAGIC.includes(N) ? `$N = ${N}$ is a magic number, and ${atN} stable nuclides share its row.`
      : `The isotopes of ${sym(Z)} share its column, $Z = ${Z}$; ${isoWord}.`;
    ro.set(`{}^{${A}}_{${Z}}\\text{${sym(Z)}}_{${N}}:\\quad A = N + Z = ${N} + ${Z} = ${A}`, note);
  }
  still(d, draw);
})();
};
