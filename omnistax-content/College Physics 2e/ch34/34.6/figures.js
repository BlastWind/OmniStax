/* Figures for section 34.6 High-temperature Superconductors.
   The page binds temperature and resistivity. The atoms of the ceramic's
   lattice wear the element palette through F.el; the three trials of one
   sample in Figure 34.25(a) are unnamed instances, F.cat(0) to F.cat(2). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['34.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, curve, measure, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const THREE = window.THREE;
const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };

/* =====================================================================
   FIGURE 34.23 · sim-critical-temperature · still
   Resistivity against temperature for the three samples the text names, on
   one logarithmic temperature axis from 1 K to 400 K, fixed, so that the
   boiling points of liquid helium (4.2 K) and liquid nitrogen (77 K) and
   room temperature (293 K) stand beside each critical temperature. The
   resistivity is drawn to its shape, not its size: zero at and below T_c,
   then a jump to 0.35 of its room-temperature value and a straight climb in
   T to 1 at 300 K; the vertical axis runs from 0 to 1.3 of that value. The
   slider's range follows the sample, so that its T_c can be crossed by hand:
   1 to 10 K for mercury, 1 to 100 K for the ceramic of 1986, 1 to 300 K for
   the thallium ceramic.
===================================================================== */
(function () {
  const HE = 4.2, N2 = 77, ROOM = 293, TTOP = 400;
  const SAMPLES = {
    mercury: { tc: 4.2, name: 'mercury', range: { min: 1, max: 10, step: 0.05, value: 4.2, unit: 'K', dec: 2 },
      note: 'Only liquid helium, at 4.2 K, is cold enough to hold it at $\\kTempc$.' },
    ceramic: { tc: 35, name: 'the ceramic of 1986', range: { min: 1, max: 100, step: 0.5, value: 77, unit: 'K', dec: 1 },
      note: 'Only liquid helium, at 4.2 K, is cold enough to hold it below $\\kTempc$; liquid nitrogen, at 77 K, is not.' },
    thallium: { tc: 125, name: 'the thallium ceramic', range: { min: 1, max: 300, step: 1, value: 77, unit: 'K', dec: 0 },
      note: 'Liquid nitrogen, at 77 K, is cold enough to hold it below $\\kTempc$.' },
  };
  const rho = (T, tc) => (T <= tc ? 0 : 0.35 + (0.65 * (T - tc)) / (300 - tc));

  const d = sim('sim-critical-temperature', 560);
  const pick = F.select(d.controls, { label: '\\text{sample}', aria: 'the sample', value: 'mercury',
    options: [{ value: 'mercury', label: 'mercury, 1911' }, { value: 'ceramic', label: 'ceramic, 1986' }, { value: 'thallium', label: 'thallium ceramic, 1988' }],
    onInput: (v) => { tS.range(SAMPLES[v].range); tS.refresh(); } });
  const r0 = SAMPLES.mercury.range;
  const tS = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: r0.min, max: r0.max, step: r0.step, value: r0.value, unit: 'K', dec: r0.dec,
    aria: 'the temperature of the sample',
    specials: [{ at: HE, label: 'liquid helium' }, { at: N2, label: 'liquid nitrogen' }, { at: ROOM, label: 'room temperature' },
      { at: () => SAMPLES[pick.value].tc, label: 'the critical temperature' }] });
  const ro = readout(d);

  const box = { l: 170, r: 1250, t: 120, b: 470 };
  const COOL = [{ T: HE, name: 'liquid helium', side: 1 }, { T: N2, name: 'liquid nitrogen', side: -1 }, { T: ROOM, name: 'room', side: 1 }];

  function draw() {
    const { ctx } = begin(d.c);
    const s = SAMPLES[pick.value], T = tS.v, dec = s.range.dec;
    const tc = Math.pow(10, pick.mix((v) => Math.log10(SAMPLES[v].tc)));
    const rel = Math.abs(T - s.tc) < 1e-6 ? 'at' : T < s.tc ? 'below' : 'above';
    topline(ctx, rel === 'above'
      ? `At ${fmt(T, dec)} K, ${s.name} is above its $\\kTempc$ and has resistivity like an ordinary conductor.`
      : `At ${fmt(T, dec)} K, ${s.name} is ${rel} its $\\kTempc$ and superconducts: its resistivity is zero.`);

    const { X, Y } = axes(ctx, box, [0, Math.log10(TTOP)], [0, 1.3], { nx: 1, ny: 1, fx: (v) => (v < 0.01 ? '1' : ''), fy: (v) => (v < 0.01 ? '0' : ''),
      xl: 'T (K)', xc: C('temperature'), yl: 'ρ', yc: C('resistivity') });
    const XT = (t) => X(Math.log10(t));
    F.faded(ctx, F.arrival(d), [0, 0], () => {
      [10, 100].forEach((t) => { line(ctx, XT(t), box.t, XT(t), box.b, PAL.rule, 1.5); text(ctx, String(t), XT(t), box.b + 26, PAL.muted, { size: 17, align: 'center' }); });
      for (let k = 0; k < 3; k++) for (let m = 2; m <= 9; m++) { const t = m * Math.pow(10, k); if (t <= TTOP) line(ctx, XT(t), box.b, XT(t), box.b - 8, PAL.muted, 1.5); }
      COOL.forEach((c) => {
        const x = XT(c.T), al = c.side > 0 ? 'left' : 'right', tx = x + 8 * c.side;
        line(ctx, x, box.t, x, box.b, alpha(PAL.ink, 0.45), 2, [4, 8]);
        text(ctx, c.name, tx, box.t + 16, PAL.ink, { size: 17, align: al, bg: PAL.panel });
        text(ctx, `${fmt(c.T, c.T < 10 ? 1 : 0)} K`, tx, box.t + 38, C('temperature'), { size: 17, align: al, bg: PAL.panel });
      });
    });

    /* zero up to T_c, the jump, then the straight climb in T */
    const col = C('resistivity'), lt = Math.log10(tc);
    curve(ctx, () => 0, 0, lt, X, Y, col, 5, 40);
    if (F.arrival(d) >= 1) line(ctx, X(lt), Y(0), X(lt), Y(0.35), col, 3, [10, 10]);
    curve(ctx, (u) => rho(Math.pow(10, u), tc - 1e-9), lt + 1e-6, Math.log10(300), X, Y, col, 5, 120);

    /* T_c beside its jump, on whichever side no coolant line crosses */
    const lab = `T_{c} = ${fmt(s.tc, s.tc < 10 ? 1 : 0)} K`, w = measure(ctx, lab, { size: 20, weight: 600 }), xj = X(lt);
    const clash = COOL.some((c) => XT(c.T) > xj + 6 && XT(c.T) < xj + w + 26);
    text(ctx, lab, clash ? xj - 14 : xj + 14, Y(0.62), C('temperature'), { size: 20, weight: 600, align: clash ? 'right' : 'left', bg: PAL.panel });

    /* the sample at its temperature */
    const r = rho(T, tc);
    line(ctx, XT(T), Y(r), XT(T), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, XT(T), Y(r), col, true, 9);

    const sign = rel === 'at' ? '=' : rel === 'below' ? '<' : '>';
    ro.set(`\\kTemp = ${fmt(T, dec)}\\;\\text{K} ${sign} \\kTempc = ${fmt(s.tc, s.tc < 10 ? 1 : 0)}\\;\\text{K}:\\quad \\krhomat ${rel === 'above' ? '> 0' : '= 0'}`, s.note);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 34.25 · sim-ceramic · still · physical 3D (rule 28.3)
   (a) The book's graph redrawn on its own axes: resistivity from −0.1 to
   0.6 mΩ·cm against temperature from 100 to 300 K, the three trials traced
   from the book's points. (b) YBa₂Cu₃O₇, the lattice the book draws, at its
   real cell (a = 3.82 Å, b = 3.885 Å, c = 11.68 Å) and atom positions, two
   cells side by side along b; scene x is c, y is a, z is b, 1 unit to
   3.85 Å. Rods join copper to oxygen within 2.35 Å, barium to oxygen within
   3.0 Å and yttrium to oxygen within 2.5 Å, as the book's scaffold does.
   Balls at the book's relative sizes. No ground: pitch within 80° of level,
   yaw free. Without WebGL the lattice is drawn flat on the canvas from the
   book's view.
===================================================================== */
(function () {
  const TRIALS = [
    [[100, 0.105], [105, 0.1], [110, 0.11], [113, 0.15], [115, 0.175], [120, 0.185], [125, 0.19], [130, 0.22], [140, 0.24], [150, 0.26], [160, 0.28], [170, 0.31], [180, 0.33],
      [190, 0.37], [200, 0.4], [210, 0.43], [220, 0.455], [230, 0.475], [232, 0.49], [235, 0.52], [240, 0.535], [250, 0.555], [260, 0.58], [270, 0.605]],
    [[135, -0.1], [138, -0.05], [140, 0.03], [145, 0.07], [150, 0.1], [160, 0.12], [170, 0.155], [180, 0.18], [181, 0.195], [190, 0.215], [200, 0.24], [210, 0.26],
      [220, 0.28], [230, 0.3], [240, 0.315], [250, 0.33], [258, 0.345], [262, 0.36], [265, 0.385], [270, 0.41], [280, 0.44], [290, 0.46], [300, 0.47]],
    [[100, 0], [215, 0], [220, -0.012], [230, 0], [233.5, 0], [234.5, 0.05], [235.2, 0.19], [236, 0.4], [240, 0.415], [245, 0.43], [250, 0.44], [255, 0.46], [258, 0.485]],
  ];
  const at = (pts) => (t) => {
    for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [t0, y0] = pts[i - 1], [t1, y1] = pts[i]; return y0 + ((y1 - y0) * (t - t0)) / (t1 - t0); }
    return pts[pts.length - 1][1];
  };

  /* the lattice: element, fractional position in one cell */
  const CELL = [3.82, 3.885, 11.68], NB = 2, PER = 1 / 3.85;
  const BASE = [['Y', 0.5, 0.5, 0.5], ['Ba', 0.5, 0.5, 0.1843], ['Ba', 0.5, 0.5, 0.8157], ['Cu', 0, 0, 0], ['Cu', 0, 0, 0.3556], ['Cu', 0, 0, 0.6444],
    ['O', 0, 0.5, 0], ['O', 0.5, 0, 0.3779], ['O', 0.5, 0, 0.6221], ['O', 0, 0.5, 0.379], ['O', 0, 0.5, 0.621], ['O', 0, 0, 0.159], ['O', 0, 0, 0.841]];
  const SIZE = { Ba: 0.2, Y: 0.17, Cu: 0.13, O: 0.075 };
  const NAME = { Ba: 'a barium atom', Y: 'an yttrium atom', Cu: 'a copper atom', O: 'an oxygen atom' };
  const REACH = { Cu: 2.35, Ba: 3.0, Y: 2.5 };
  const ATOMS = [];
  BASE.forEach(([el, x, y, z]) => {
    for (let i = 0; i <= 1; i++) for (let j = 0; j <= NB; j++) for (let k = 0; k <= 1; k++) {
      const f = [x + i, y + j, z + k];
      if (f[0] > 1 + 1e-6 || f[1] > NB + 1e-6 || f[2] > 1 + 1e-6) continue;
      const a = [f[0] * CELL[0], f[1] * CELL[1], f[2] * CELL[2]];
      ATOMS.push({ el, a, p: [(a[2] - CELL[2] / 2) * PER, (a[0] - CELL[0] / 2) * PER, (a[1] - (NB * CELL[1]) / 2) * PER] });
    }
  });
  const BONDS = [];
  ATOMS.forEach((m) => {
    if (!REACH[m.el]) return;
    ATOMS.forEach((o) => { if (o.el === 'O' && Math.hypot(m.a[0] - o.a[0], m.a[1] - o.a[1], m.a[2] - o.a[2]) <= REACH[m.el]) BONDS.push([m.p, o.p]); });
  });
  const P3 = (f) => [(f[2] * CELL[2] - CELL[2] / 2) * PER, (f[0] * CELL[0] - CELL[0] / 2) * PER, (f[1] * CELL[1] - (NB * CELL[1]) / 2) * PER];
  const EDGES = [];
  for (let j = 0; j <= NB; j++) for (const [x, z] of [[0, 0], [1, 0], [0, 1], [1, 1]]) if (j < NB) EDGES.push([P3([x, j, z]), P3([x, j + 1, z])]);
  for (let j = 0; j <= NB; j++) { EDGES.push([P3([0, j, 0]), P3([1, j, 0])], [P3([0, j, 1]), P3([1, j, 1])], [P3([0, j, 0]), P3([0, j, 1])], [P3([1, j, 0]), P3([1, j, 1])]); }
  const ORDER = ['Cu', 'O', 'Ba', 'Y'], WORD = { Cu: 'copper', O: 'oxygen', Ba: 'barium', Y: 'yttrium' };

  const hasGL = !!(THREE && glOk());
  const HC = hasGL ? 600 : 1060;
  const d = sim('sim-ceramic', HC);
  let V = null, grp = null, sig = '';
  if (hasGL) {
    V = F.view3d(d.stage, { h: 460, dist: 6.6, tilt: 0.45, spin: 'idle', pitch: [-1.4, 1.4], yaw: 'free', zoomMin: 0.6, zoomMax: 2.4,
      views: [{ label: 'the book’s view', yaw: -0.35, pitch: 0.45 }, { label: 'along the layers', yaw: 0, pitch: 0 }, { label: 'down the long axis', yaw: Math.PI / 2, pitch: 0 }] });
    if (!V.scene) V = null; else { grp = V.part(0); V.setView(-0.35, 0.45); }
  }

  function build() {
    const key = [PAL.ink, PAL.muted, ...ORDER.map((e) => F.el(e))].join('|');
    if (key === sig || !grp) return; sig = key;
    V.clear();
    const g = new THREE.Group(); grp.add(g);
    EDGES.forEach(([a, b]) => F.mesh.stick(g, a, b, 0.012, PAL.muted));
    BONDS.forEach(([a, b]) => F.mesh.stick(g, a, b, 0.018, PAL.muted));
    ATOMS.forEach((m) => V.pickable(F.mesh.sphere(g, m.p, SIZE[m.el], F.el(m.el)), NAME[m.el]));
    V.headline('Turn the ceramic to see its atoms lie in flat layers, repeated cell after cell.');
    V.invalidate();
  }

  /* the same lattice from the book's view, where there is no WebGL */
  function drawFlat(ctx, top) {
    const yaw = -0.35, pitch = 0.45, W = F.view({ yaw, pitch, dist: 2400, cx: 700, cy: top + 200 }), Sc = 140;
    const eye = [Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)];
    const P = (p) => W.P([p[0] * Sc, p[1] * Sc, p[2] * Sc]), depth = (p) => p[0] * eye[0] + p[1] * eye[1] + p[2] * eye[2];
    text(ctx, 'The ceramic’s atoms lie in flat layers, repeated cell after cell.', 700, top, PAL.ink, { size: 22, align: 'center' });
    [...EDGES, ...BONDS].forEach(([a, b]) => { const p = P(a), q = P(b); line(ctx, p[0], p[1], q[0], q[1], alpha(PAL.ink, 0.35), 2); });
    [...ATOMS].sort((m, n) => depth(m.p) - depth(n.p)).forEach((m) => {
      const q = P(m.p); dot(ctx, q[0], q[1], F.el(m.el), true, SIZE[m.el] * Sc * 0.75);
    });
  }

  function draw() {
    const { ctx } = begin(d.c);
    topline(ctx, 'One sample, three trials: only once did its resistivity fall to zero, below about 230 K.');

    /* (a) on the book's axes */
    const box = { l: 200, r: 1250, t: 150, b: 490 };
    const { X, Y } = axes(ctx, box, [100, 300], [-0.1, 0.6], { nx: 5, ny: 7, fx: (v) => fmt(v, 0),
      fy: (v) => (Math.round(v * 10) % 2 ? '' : Math.abs(v) < 1e-9 ? '0' : fmt(v, 1)), xl: 'T (K)', xc: C('temperature'), yl: 'ρ (mΩ·cm)', yc: C('resistivity') });
    TRIALS.forEach((pts, i) => curve(ctx, at(pts), pts[0][0], pts[pts.length - 1][0], X, Y, F.cat(i), 4, 240));
    const lx = box.l + 40, ly = box.t + 24;
    TRIALS.forEach((_, i) => line(ctx, lx + i * 34, ly, lx + i * 34 + 26, ly, F.cat(i), 4));
    text(ctx, 'three trials of one sample', lx + 112, ly, PAL.ink, { size: 18, align: 'left' });
    text(ctx, 'T_{c} ≈ 230 K', X(234) - 14, Y(0.12), C('temperature'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });

    /* (b) the elements, named once */
    const ky = hasGL ? HC - 30 : HC - 26, kw = ORDER.map((e) => measure(ctx, WORD[e], { size: 18 }) + 56), total = kw.reduce((s, w) => s + w, 0);
    let kx = 700 - total / 2;
    ORDER.forEach((e, i) => { dot(ctx, kx + 9, ky, F.el(e), true, 10); text(ctx, WORD[e], kx + 28, ky, PAL.ink, { size: 18, align: 'left' }); kx += kw[i]; });

    if (V) build(); else drawFlat(ctx, 600);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
