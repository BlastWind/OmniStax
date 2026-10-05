/* Figures for section 32.6 Fission.
   The page binds power (the reactor's power as a multiple of its start). Counts,
   x, the share of neutrons that go on to cause fission and the rods' insertion
   are ink. Neutrons are F.el('n0'); a nucleus drawn as a packing takes the
   proton and neutron colours, a ²³⁵U nucleus drawn small and the fuel rods take
   F.el('U'). The fission fragments FF₁ and FF₂ are the section's referents: their
   bodies keep the nucleon colours, their outlines and names wear F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, axes, hover, readout, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (k) => F.ease.smooth(clamp(k, 0, 1));
const GOLD = 2.399963;
function sciTex(x) { let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e); if (+m.toFixed(1) >= 10) { m /= 10; e++; } return fmt(m, 1) + '\\times 10^{' + e + '}'; }
function disc(ctx, x, y, r, fill, stroke, w = 1.5) {
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); }
}
function neutron(ctx, x, y, ux, uy, r = 5) {
  if (ux || uy) arrow(ctx, x - ux * 22, y - uy * 22, x, y, alpha(PAL.ink, 0.55), 2.5);
  disc(ctx, x, y, r, F.el('n0'), PAL.ink, 1.2);
}
/* a fragment drawn small: seven nucleons in a hexagon, outlined in its referent's colour */
function packing(ctx, x, y, r, ring) {
  const d = r * 0.36, P = F.el('p+'), N = F.el('n0');
  [[0, 0]].concat([0, 1, 2, 3, 4, 5].map((j) => [2 * d * Math.cos(j * Math.PI / 3), 2 * d * Math.sin(j * Math.PI / 3)]))
    .forEach(([dx, dy], j) => disc(ctx, x + dx, y + dy, d, j % 2 ? P : N, alpha(PAL.ink, 0.5), 0.8));
  disc(ctx, x, y, r + 1, null, ring, 2.2);
}

/* =====================================================================
   FIGURE 32.21 + 32.22 · sim-fission-chain · moving · flat (rule 28.1)
   Left, one fission close up: 92 nucleons in a sunflower packing (36 protons,
   the ratio 92/235), struck at 0.55 s; the drop stretches and narrows over
   0.5 s, splits at 1.05 s into FF₁ (61% of the rest) and FF₂ with x neutrons
   taken from the waist, the fragments separate till 1.5 s and hold.
   Right, a lump of 100 ²³⁵U nuclei (radius 13, sunflower, radius 214).
   Generation 0 is four nuclei struck at 0.55 s, the centre one the close-up.
   Generation g splits at 1.05 + 0.7 g s; its neutrons fly 0.28 s, and those
   that go on strike the next generation's nuclei. The number that go on is
   carried by error diffusion from x × share, so k = 1 holds exactly steady;
   each fission sends at most x, and only to unstruck nuclei. The rest fly out
   of the lump. Graph: fissions per generation, 0 to 6, fixed 0 to 40, pinned()
   past it (k = 3 strikes 48 in generation 3).
===================================================================== */
(function () {
  const H = 700, G = 0.7, A0 = 0.55, S0 = 1.05, NG = 7, T = S0 + (NG - 1) * G + 0.45, YMAX = 40;
  const d = sim('sim-fission-chain', H);
  const xc = choice(d.controls, { label: 'x', key: 'x', options: [{ value: '2', label: '2' }, { value: '3', label: '3' }, { value: '4', label: '4' }], value: '3', aria: 'the number of neutrons each fission produces', onInput: () => { sh.refresh(); reset(); } });
  const sh = ctl(d.controls, { label: '\\text{share}', cls: '', key: 'share', min: 0.1, max: 1, step: 0.01, value: 0.67, unit: '', dec: 2, onInput: reset,
    aria: 'the share of neutrons that go on to cause another fission', specials: [{ at: () => 1 / +xc.value, label: 'criticality' }] });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  /* the close-up */
  const CU = { l: 30, r: 420, t: 112, b: 560 }, CX = 225, CY = 330, R = 72, NN = 92;
  const NUC = Array.from({ length: NN }, (_, i) => {
    const rr = Math.sqrt((i + 0.5) / NN), a = i * GOLD;
    return { u: rr * Math.cos(a), v: rr * Math.sin(a), p: hash(i, 9) < 36 / 92 };
  });
  const RD = R / Math.sqrt(NN) * 0.98;
  let cuKey = '', CUP = null;
  function closeup(x) {
    if (cuKey === String(x)) return CUP;
    cuKey = String(x);
    const free = NUC.map((n, i) => i).filter((i) => !NUC[i].p).sort((a, b) => Math.abs(NUC[a].u) - Math.abs(NUC[b].u)).slice(0, x);
    const rest = NUC.map((n, i) => i).filter((i) => !free.includes(i)).sort((a, b) => NUC[a].u - NUC[b].u);
    const n1 = Math.round(rest.length * 0.61), r1 = RD * Math.sqrt(n1) * 1.02, r2 = RD * Math.sqrt(rest.length - n1) * 1.02;
    const role = new Array(NN);
    rest.forEach((i, j) => {
      const one = j < n1, m = one ? j : j - n1, n = one ? n1 : rest.length - n1, rr = Math.sqrt((m + 0.5) / n) * (one ? r1 : r2), a = m * GOLD;
      role[i] = { g: one ? 1 : 2, tx: rr * Math.cos(a), ty: rr * Math.sin(a) };
    });
    free.forEach((i, j) => { const a = -Math.PI / 2 + (j + 0.5) * (2 * Math.PI) / x + 0.4; role[i] = { g: 0, ux: Math.cos(a), uy: Math.sin(a) }; });
    CUP = { role, r1, r2 };
    return CUP;
  }
  function deformed(n, k) {
    const x = n.u * (1 + 0.6 * k), y = n.v * (1 - 0.18 * k) * (1 - 0.5 * k * Math.exp(-((n.u / 0.42) ** 2)));
    return [CX + R * x, CY + R * y];
  }

  /* the lump and its chain */
  const LC = { x: 760, y: 352 }, RL = 230, NL = 100, RU = 13;
  const LUMP = Array.from({ length: NL }, (_, i) => {
    const rr = (RL - 22) * Math.sqrt((i + 0.5) / NL), a = i * GOLD;
    return { x: LC.x + rr * Math.cos(a), y: LC.y + rr * Math.sin(a), phi: Math.PI * hash(i, 4) };
  });
  const near = (px, py) => LUMP.reduce((b, n, i) => (Math.hypot(n.x - px, n.y - py) < Math.hypot(LUMP[b].x - px, LUMP[b].y - py) ? i : b), 0);
  const START = [0, near(LC.x + 120 * Math.cos(-0.5), LC.y + 120 * Math.sin(-0.5)), near(LC.x + 125 * Math.cos(2.2), LC.y + 125 * Math.sin(2.2)), near(LC.x + 115 * Math.cos(3.9), LC.y + 115 * Math.sin(3.9))];
  const aOf = (g) => (g === 0 ? A0 : S0 + (g - 1) * G + 0.4 * G), sOf = (g) => S0 + g * G;

  let chKey = '', CH = null;
  function chain(x, k) {
    const key = x + '|' + k;
    if (key === chKey) return CH;
    chKey = key;
    const gen = new Array(NL).fill(-1), flights = [], counts = [];
    const avail = new Set(LUMP.map((n, i) => i));
    START.forEach((i) => { gen[i] = 0; avail.delete(i); });
    let cur = START.slice(), acc = 0.5;
    for (let g = 0; g < NG; g++) {
      counts.push(cur.length);
      const want = cur.length * k + acc;
      let S = Math.floor(want + 1e-9); acc = want - S;
      S = Math.min(S, cur.length * x, g < NG - 1 ? avail.size : 0);
      const next = [];
      cur.forEach((f, j) => {
        const P = LUMP[f], mine = Math.floor(S / cur.length) + (j < S % cur.length ? 1 : 0);
        for (let m = 0; m < x; m++) {
          const h = hash(f * 7 + m, g + 11);
          if (m < mine && avail.size) {
            const cand = [...avail].sort((a, b) => Math.hypot(LUMP[a].x - P.x, LUMP[a].y - P.y) - Math.hypot(LUMP[b].x - P.x, LUMP[b].y - P.y)).slice(0, 4);
            const tgt = cand[Math.floor(h * cand.length)];
            avail.delete(tgt); gen[tgt] = g + 1; next.push(tgt);
            flights.push({ g, x0: P.x, y0: P.y, x1: LUMP[tgt].x, y1: LUMP[tgt].y, hit: true });
          } else {
            const a = 2 * Math.PI * h;
            flights.push({ g, x0: P.x, y0: P.y, ux: Math.cos(a), uy: Math.sin(a), hit: false });
          }
        }
      });
      cur = next;
    }
    CH = { gen, flights, counts };
    return CH;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), x = +xc.value, sv = sh.v, crit = Math.abs(sv * x - 1) < 1e-6;
    const sr = +fmt(sv, 2), k = crit ? 1 : +(x * sr).toFixed(2);
    const CHN = chain(x, k), CP = closeup(x), F1 = F.ref('ff-1'), F2 = F.ref('ff-2'), U = F.el('U');
    hits = [];

    topline(ctx, crit ? 'Each fission sends exactly one neutron on to cause another, so the fissions hold steady from one generation to the next.'
      : k < 1 ? 'Each fission sends only ' + fmt(k, 2) + ' neutrons on to cause another, so the fissions die away.'
        : 'Each fission sends ' + fmt(k, 2) + ' neutrons on to cause another, so the fissions grow from one generation to the next.');

    /* the close-up of generation 0's first fission */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect(CU.l, CU.t, CU.r - CU.l, CU.b - CU.t, 8); ctx.stroke(); ctx.restore();
    text(ctx, 'one fission, close up', (CU.l + CU.r) / 2, CU.t - 22, PAL.ink, { size: 20, align: 'center' });
    const k1 = smooth((t - A0) / (S0 - A0)), k2 = smooth((t - S0) / 0.3), sep = smooth((t - S0) / 0.45);
    const c1 = { x: CX - R * 0.62 - 70 * sep, y: CY }, c2 = { x: CX + R * 0.78 + 70 * sep, y: CY };
    ctx.save(); ctx.beginPath(); ctx.rect(CU.l, CU.t, CU.r - CU.l, CU.b - CU.t); ctx.clip();
    NUC.forEach((n, i) => {
      const ro0 = CP.role[i], [dx, dy] = deformed(n, k1);
      let px = dx, py = dy;
      if (t > S0) {
        if (ro0.g === 0) { const s = 330 * (t - S0); px = dx + ro0.ux * s; py = dy + ro0.uy * s; }
        else { const c = ro0.g === 1 ? c1 : c2; px = dx + (c.x + ro0.tx - dx) * k2; py = dy + (c.y + ro0.ty - dy) * k2; }
      }
      if (ro0.g === 0 && t > S0) { neutron(ctx, px, py, ro0.ux, ro0.uy, RD); return; }
      disc(ctx, px, py, RD, n.p ? F.el('p+') : F.el('n0'), alpha(PAL.ink, 0.45), 1);
    });
    if (k2 > 0) {
      ctx.save(); ctx.globalAlpha *= k2;
      disc(ctx, c1.x, c1.y, CP.r1 + 5, null, F1, 3); disc(ctx, c2.x, c2.y, CP.r2 + 5, null, F2, 3);
      ctx.restore();
    }
    if (t < A0) {
      const s = t / A0, nx = CU.l + 30 + (CX - R - 4 - CU.l - 30) * s, ny = CY - 70 + 70 * s * 0.9;
      neutron(ctx, nx, ny, 0.93, 0.37, RD);
      hits.push({ x: nx, y: ny, r: 14, name: 'a slow neutron about to be absorbed' });
    }
    ctx.restore();
    if (t >= S0 + 0.45) {
      label(ctx, 'FF_{1}', c1.x, c1.y + CP.r1 + 6, { side: 'below', color: F1, gap: 18 });
      label(ctx, 'FF_{2}', c2.x, c2.y + CP.r2 + 6, { side: 'below', color: F2, gap: 18 });
    }
    hits.push(t < S0 ? { x: CX, y: CY, r: R, name: t < A0 ? 'a ²³⁵U nucleus, 92 protons and 143 neutrons' : 'the nucleus stretching and narrowing like a struck liquid drop' }
      : { x: c1.x, y: c1.y, r: CP.r1, name: 'fission fragment FF₁, the larger daughter nucleus' });
    if (t >= S0) hits.push({ x: c2.x, y: c2.y, r: CP.r2, name: 'fission fragment FF₂, the smaller daughter nucleus' });

    /* the lump */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.55); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(LC.x, LC.y, RL, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'a lump of ²³⁵U fuel', LC.x, LC.y + RL + 24, PAL.ink, { size: 20, align: 'center' });
    LUMP.forEach((n, i) => {
      const g = CHN.gen[i], a = g < 0 ? Infinity : aOf(g), s = g < 0 ? Infinity : sOf(g);
      if (t < a) { disc(ctx, n.x, n.y, RU, alpha(U, 0.85), alpha(PAL.ink, 0.4), 1); if (i % 3 === 0) hits.push({ x: n.x, y: n.y, r: RU, name: 'a ²³⁵U nucleus' }); return; }
      const ux = Math.cos(n.phi), uy = Math.sin(n.phi);
      if (t < s) {
        const q = smooth((t - a) / (s - a)), r = RU * (1 - 0.2 * q), dd = 8 * q;
        disc(ctx, n.x - ux * dd, n.y - uy * dd, r, U); disc(ctx, n.x + ux * dd, n.y + uy * dd, r, U);
        hits.push({ x: n.x, y: n.y, r: RU + 4, name: 'a ²³⁵U nucleus that has absorbed a neutron, stretching' });
        return;
      }
      const q = smooth((t - s) / 0.3), dd = 9 + 12 * q;
      packing(ctx, n.x - ux * dd, n.y - uy * dd, 9.5, F1); packing(ctx, n.x + ux * dd * 0.9, n.y + uy * dd * 0.9, 8, F2);
      hits.push({ x: n.x, y: n.y, r: RU + 8, name: 'the fission fragments FF₁ and FF₂ of a ²³⁵U nucleus' });
    });
    if (t < A0) START.forEach((i, j) => {
      const n = LUMP[i], a = -0.3 + j * 1.9, sx = n.x - Math.cos(a) * 90, sy = n.y - Math.sin(a) * 90, s = t / A0;
      neutron(ctx, sx + (n.x - RU - sx) * s, sy + (n.y - sy) * s, Math.cos(a), Math.sin(a));
    });
    CHN.flights.forEach((f) => {
      const s0 = sOf(f.g), dt = t - s0;
      if (dt < 0) return;
      if (f.hit) {
        const q = dt / (0.4 * G);
        if (q >= 1) return;
        const L = Math.hypot(f.x1 - f.x0, f.y1 - f.y0), ux = (f.x1 - f.x0) / L, uy = (f.y1 - f.y0) / L;
        const px = f.x0 + (f.x1 - f.x0) * q, py = f.y0 + (f.y1 - f.y0) * q;
        neutron(ctx, px, py, ux, uy); hits.push({ x: px, y: py, r: 10, name: 'a neutron that goes on to cause fission' });
      } else {
        const sd = 380 * dt, px = f.x0 + f.ux * sd, py = f.y0 + f.uy * sd, far = Math.hypot(px - LC.x, py - LC.y);
        if (far > RL + 30) return;
        ctx.save(); ctx.globalAlpha *= clamp((RL + 30 - far) / 40, 0, 1);
        neutron(ctx, px, py, f.ux, f.uy); ctx.restore();
        hits.push({ x: px, y: py, r: 10, name: 'a neutron that escapes or is captured without causing fission' });
      }
    });

    /* fissions per generation */
    const GB = { l: 1090, r: 1350, t: 150, b: 530 };
    const { X, Y } = axes(ctx, GB, [0, NG], [0, YMAX], { nx: NG, ny: 4, fx: () => '', xl: 'generation', yl: 'fissions' });
    for (let g = 0; g < NG; g++) {
      text(ctx, String(g), X(g + 0.5), GB.b + 26, PAL.muted, { size: 17, align: 'center' });
      if (t < aOf(g)) continue;
      const n = CHN.counts[g], top = Y(Math.min(n, YMAX));
      if (n > 0) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.45); ctx.fillRect(X(g) + 6, top, X(g + 1) - X(g) - 12, GB.b - top); ctx.restore(); }
      if (n > YMAX) pinned(ctx, GB, X, Y, g + 0.5, n, PAL.ink, String(n));
      hits.push({ x: X(g + 0.5), y: Math.max(top, GB.b - 20), r: 18, name: n + (n === 1 ? ' fission' : ' fissions') + ' in generation ' + g });
    }

    /* the legend */
    const LY = 660;
    neutron(ctx, 60, LY, 0, 0, 7); text(ctx, 'neutron', 76, LY, PAL.ink, { size: 18 });
    disc(ctx, 190, LY, 7, F.el('p+'), alpha(PAL.ink, 0.45), 1); text(ctx, 'proton', 206, LY, PAL.ink, { size: 18 });
    disc(ctx, 320, LY, RU, alpha(U, 0.85), alpha(PAL.ink, 0.4), 1); text(ctx, '²³⁵U nucleus', 342, LY, PAL.ink, { size: 18 });
    packing(ctx, 500, LY, 9.5, F1); text(ctx, 'FF_{1}', 518, LY, F1, { size: 18, weight: 600 });
    packing(ctx, 590, LY, 8, F2); text(ctx, 'FF_{2}', 606, LY, F2, { size: 18, weight: 600 });
    text(ctx, 'fission fragments', 660, LY, PAL.ink, { size: 18 });

    const shT = crit ? '\\tfrac{1}{' + x + '}' : fmt(sr, 2), kT = crit ? '1' : fmt(k, 2);
    ro.set('\\mk{x}{x} \\times \\mk{s}{\\text{share}} = \\mk{xv}{' + x + '} \\times \\mk{sv}{' + shT + '} = \\mk{k}{' + kT + '}', undefined, { form: crit ? 'c' : k < 1 ? 'sub' : 'super' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 32.23 · sim-reactor · moving · flat (rule 28.1)
   The book's pressurized water reactor in section. Each fission makes x = 3
   neutrons; the share that go on is 0.40 × (1 − (2/3)(rods in)) with water in
   the core and 0.02 × (…) with it boiled away, a schematic model whose only
   claim is the trend: criticality at 25% in, 1.20 with the rods out, 0.40 with
   them in. Both rounded as shown, so the readout adds up. Ten generations over
   5 s (0.5 s each), holding 1.2 s: P/P₀ = k^g, the graph fixed at 0 to 3 with
   pinned() past it. Fission neutrons in the core come at 30 a second times
   P/P₀ (capped at 3); the turbine, the generator and the steam turn and flow
   at a rate ∝ P/P₀, integrated in closed form, so every frame follows from t.
   The primary water and the cooling water flow at a fixed rate.
===================================================================== */
(function () {
  const H = 680, OY = 40, T = 5, NGEN = 10, TAU = T / NGEN, PMAX = 3;
  const d = sim('sim-reactor', H);
  const core = choice(d.controls, { label: '\\text{core}', key: 'core', options: [{ value: 'water', label: 'water' }, { value: 'boiled', label: 'boiled away' }], value: 'water', aria: 'the water in the reactor core', onInput: () => { rods.refresh(); reset(); } });
  const sw = () => (core.value === 'water' ? 0.40 : 0.02);
  const rods = ctl(d.controls, { label: '\\text{rods in}', cls: '', key: 'rods', min: 0, max: 100, step: 1, value: 25, unit: '%', dec: 0, onInput: reset,
    aria: 'how far the control rods are inserted into the core', specials: [{ at: () => (core.value === 'water' ? 25 : null), label: 'criticality' }] });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const CV = { l: 110, r: 300, t: 200, b: 430 }, SG = { l: 360, r: 452, t: 168, b: 470 };
  const FUEL = [138, 178, 218, 258], RODX = [158, 198, 238], FT = 232, FB = 412;
  const TB = { l: 640, r: 740, t: 118, b: 178 }, GN = { l: 790, r: 900, t: 108, b: 188 }, CD = { l: 610, r: 790, t: 262, b: 482 };
  const zig = (x0, x1, y0, y1, n) => Array.from({ length: n + 1 }, (_, i) => [i % 2 ? x1 : x0, y0 + (y1 - y0) * i / n]);
  const PRIMARY = [[300, 252], [372, 252], ...zig(372, 440, 270, 440, 6), [440, 492], [250, 492], [84, 492], [84, 392], [110, 392], [205, 330], [300, 252]];
  const SECONDARY = [[406, 168], [406, 148], [640, 148], [690, 148], [690, 182], [690, 280], ...zig(660, 740, 290, 440, 6), [740, 456], [610, 456], [470, 456], [452, 430]];
  const COOL = [[672, 600], [672, 440], [728, 440], [728, 600]];
  function along(pts) {
    const segs = []; let L = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); segs.push({ a: pts[i - 1], b: pts[i], s: L, l }); L += l; }
    return { L, at: (s) => { s = ((s % L) + L) % L; const g = segs.find((q) => s <= q.s + q.l) || segs[segs.length - 1], k = (s - g.s) / g.l; return [g.a[0] + (g.b[0] - g.a[0]) * k, g.a[1] + (g.b[1] - g.a[1]) * k]; } };
  }
  const PA = along(PRIMARY), SA = along(SECONDARY), CA = along(COOL);
  const pipe = (ctx, pts, w, col) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); };
  const pump = (ctx, x, y) => { disc(ctx, x, y, 13, PAL.panel, alpha(PAL.ink, 0.7), 2); line(ctx, x - 7, y, x + 7, y, alpha(PAL.ink, 0.7), 2); };
  const powerAt = (k, g) => Math.pow(k, g);
  const integral = (k, t) => (Math.abs(k - 1) < 1e-9 ? t : TAU * (Math.pow(k, t / TAU) - 1) / Math.log(k));

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), iv = rods.v / 100, wet = core.value === 'water', crit = wet && rods.v === 25;
    const share = +(sw() * (1 - (2 / 3) * iv)).toFixed(2), k = crit ? 1 : +(3 * share).toFixed(2);
    const g = t / TAU, P = powerAt(k, g), Pc = Math.min(P, PMAX), turn = integral(Math.min(k, 1.2), t);
    const level = core.mix((v) => (v === 'water' ? 1 : 0)), INK = PAL.ink, U = F.el('U'), PW = C('power');
    hits = [];

    topline(ctx, !wet ? 'With the water boiled away, the fast neutrons are not thermalized, and the chain reaction stops.'
      : crit ? 'With the control rods 25% in, each fission sends exactly one neutron on, and the reactor’s power holds steady.'
        : 'With the control rods ' + fmt(rods.v, 0) + '% in, each fission sends ' + fmt(k, 2) + ' neutrons on, and the reactor’s power ' + (k < 1 ? 'dies away.' : 'climbs.'));

    /* the scene, drawn 40 units down so the headline has the top to itself */
    ctx.save(); ctx.translate(0, OY);
    const h0 = hits.length;
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.18); ctx.strokeStyle = alpha(INK, 0.45); ctx.lineWidth = 10;
    ctx.beginPath(); ctx.roundRect(52, 112, 520, 418, 22); ctx.fill(); ctx.stroke(); ctx.restore();
    hits.push({ x: 70, y: 300, r: 22, name: 'the containment vessel, shielding' });
    pipe(ctx, PRIMARY.slice(0, 2), 12, alpha(INK, 0.35)); pipe(ctx, PRIMARY.slice(9, 15), 12, alpha(INK, 0.35));
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(INK, 0.75); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(CV.l, CV.t, CV.r - CV.l, CV.b - CV.t, 26); ctx.fill(); ctx.stroke();
    if (level > 0) { ctx.save(); ctx.clip(); ctx.fillStyle = alpha(INK, 0.12); const top = CV.b - (CV.b - CV.t - 10) * level; ctx.fillRect(CV.l, top, CV.r - CV.l, CV.b - top); ctx.restore(); }
    ctx.restore();
    hits.push({ x: 205, y: 420, r: 20, name: wet ? 'the core: fuel and water, the moderator that thermalizes the neutrons' : 'the core with its water boiled away: the neutrons are not thermalized' });
    FUEL.forEach((x) => { ctx.save(); ctx.fillStyle = alpha(U, 0.8); ctx.strokeStyle = alpha(INK, 0.5); ctx.lineWidth = 1; ctx.fillRect(x - 5, FT, 10, FB - FT); ctx.strokeRect(x - 5, FT, 10, FB - FT); ctx.restore(); hits.push({ x, y: 380, r: 10, name: 'a fuel rod of enriched uranium' }); });
    const rb = FT - 6 + (FB - FT) * iv;
    RODX.forEach((x) => { line(ctx, x, 130, x, CV.t, alpha(INK, 0.45), 3); ctx.save(); ctx.fillStyle = alpha(INK, 0.8); ctx.fillRect(x - 4, 150, 8, rb - 150); ctx.restore(); hits.push({ x, y: Math.max(rb - 12, 170), r: 10, name: 'a control rod, ' + fmt(rods.v, 0) + '% in, absorbing neutrons' }); });

    /* neutrons in the core, more as the power grows */
    const RATE = 30;
    for (let j = Math.floor((t - 0.25) * RATE * PMAX); j <= Math.floor(t * RATE * PMAX); j++) {
      if (j < 0) continue;
      const tj = j / (RATE * PMAX), pj = Math.min(powerAt(k, tj / TAU), PMAX);
      if (hash(j, 1) * PMAX > pj) continue;
      const q = (t - tj) / 0.25;
      if (q < 0 || q > 1) continue;
      const f = Math.floor(hash(j, 2) * FUEL.length), dir = hash(j, 3) < 0.5 ? -1 : 1, y = FT + 12 + (FB - FT - 24) * hash(j, 4);
      const x = FUEL[f] + dir * (7 + 13 * q);
      ctx.save(); ctx.globalAlpha *= 1 - q * q; neutron(ctx, x, y, dir, 0, 4); ctx.restore();
    }

    /* the heat exchanger */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(INK, 0.75); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(SG.l, SG.t, SG.r - SG.l, SG.b - SG.t, 44); ctx.fill(); ctx.stroke(); ctx.clip();
    ctx.fillStyle = alpha(INK, 0.12); ctx.fillRect(SG.l, 262, SG.r - SG.l, SG.b - 262); ctx.restore();
    pipe(ctx, PRIMARY.slice(1, 10), 7, alpha(INK, 0.5));
    hits.push({ x: 406, y: 210, r: 26, name: 'steam boiled from the second loop’s water' });
    hits.push({ x: 406, y: 360, r: 30, name: 'the heat exchanger: hot water from the core boils the second loop’s water' });

    /* the secondary loop, the turbine, the generator, the condenser and the cooling water */
    pipe(ctx, SECONDARY.slice(0, 4), 10, alpha(INK, 0.3)); pipe(ctx, SECONDARY.slice(4, 6), 10, alpha(INK, 0.3)); pipe(ctx, SECONDARY.slice(-4), 10, alpha(INK, 0.3));
    pump(ctx, 540, 456); pump(ctx, 250, 492);
    hits.push({ x: 540, y: 456, r: 16, name: 'a pump returning the condensed water' }, { x: 250, y: 492, r: 16, name: 'the pump of the primary loop' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(INK, 0.75); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(CD.l, CD.t, CD.r - CD.l, CD.b - CD.t, 50); ctx.fill(); ctx.stroke(); ctx.restore();
    pipe(ctx, SECONDARY.slice(5, 14), 6, alpha(INK, 0.45)); pipe(ctx, COOL, 9, alpha(INK, 0.3)); pump(ctx, 672, 560);
    hits.push({ x: 700, y: 560, r: 30, name: 'cooling water, carrying heat away from the condenser' }, { x: 640, y: 380, r: 22, name: 'the condenser: the steam gives up its heat and becomes water again' });
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 1); ctx.strokeStyle = alpha(INK, 0.75); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.roundRect(TB.l, TB.t, TB.r - TB.l, TB.b - TB.t, 14); ctx.fill(); ctx.stroke(); ctx.clip();
    for (let j = 0; j < 9; j++) { const x = TB.l + ((j * 14 + turn * 40) % 126) - 10; line(ctx, x, TB.t, x + 16, TB.b, alpha(INK, 0.55), 2); }
    ctx.restore();
    line(ctx, TB.r, 148, GN.l, 148, alpha(INK, 0.6), 6);
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 1); ctx.strokeStyle = alpha(INK, 0.75); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.roundRect(GN.l, GN.t, GN.r - GN.l, GN.b - GN.t, 18); ctx.fill(); ctx.stroke(); ctx.restore();
    const ang = turn * 4;
    ctx.save(); ctx.strokeStyle = alpha(INK, 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(765, 148, 8, 26, 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    dot(ctx, 765 + 8 * Math.sin(ang), 148 - 26 * Math.cos(ang), INK, true, 4);
    line(ctx, GN.r, 136, 960, 136, alpha(INK, 0.6), 4); line(ctx, GN.r, 160, 960, 160, alpha(INK, 0.6), 4);
    hits.push({ x: 690, y: 148, r: 30, name: 'the steam turbine, turned by the steam' }, { x: 845, y: 148, r: 40, name: 'the electric generator, turned by the turbine' });

    /* what flows: the primary water, the steam and condensate, the cooling water */
    for (let j = 0; j < 22; j++) { const [x, y] = PA.at(j * PA.L / 22 + 70 * t); ctx.save(); ctx.globalAlpha *= level; disc(ctx, x, y, 3.5, alpha(INK, 0.6)); ctx.restore(); }
    if (level > 0.05) { const [x, y] = PA.at(70 * t); arrow(ctx, x - 0, y, ...PA.at(70 * t + 18), alpha(INK, 0.7), 3); }
    for (let j = 0; j < 26; j++) { const [x, y] = SA.at(j * SA.L / 26 + 60 * turn); disc(ctx, x, y, 3.5, alpha(INK, 0.6)); }
    { const [x, y] = SA.at(60 * turn + 230); arrow(ctx, x, y, ...SA.at(60 * turn + 248), alpha(INK, 0.7), 3); }
    for (let j = 0; j < 10; j++) { const [x, y] = CA.at(j * CA.L / 10 + 50 * t); disc(ctx, x, y, 3, alpha(INK, 0.45)); }

    /* the frame's names */
    label(ctx, 'control rods', RODX[1], 130, { side: 'above', size: 20, gap: 38, H: H - OY });
    label(ctx, 'fuel rods', FUEL[1], FB, { side: 'below', size: 20, gap: 40, H: H - OY });
    label(ctx, 'heat exchanger', 406, SG.t, { side: 'above', size: 20, gap: 76, H: H - OY });
    label(ctx, 'steam turbine', 690, TB.t, { side: 'above', size: 20, gap: 22, H: H - OY });
    label(ctx, 'generator', 845, GN.t, { side: 'above', size: 20, gap: 22, H: H - OY });
    label(ctx, 'condenser', CD.r, 372, { side: 'right', size: 20, gap: 20, H: H - OY });
    ctx.restore();
    for (let i = h0; i < hits.length; i++) hits[i] = { ...hits[i], y: hits[i].y + OY };

    /* the power over ten generations */
    const GB = { l: 1030, r: 1350, t: 160, b: 480 };
    const { X, Y } = axes(ctx, GB, [0, NGEN], [0, PMAX], { nx: 5, ny: 3, xl: 'neutron generations', yl: 'P ÷ P_{0}', yc: PW });
    line(ctx, GB.l, Y(1), GB.r, Y(1), alpha(INK, 0.4), 2, [10, 10]);
    const gEnd = Math.min(g, NGEN), pts = [];
    for (let i = 0; i <= 120; i++) { const gi = gEnd * i / 120, p = powerAt(k, gi); if (p > PMAX) break; pts.push([X(gi), Y(p)]); }
    if (pts.length > 1) pipe(ctx, pts, 5, PW);
    const pv = powerAt(k, gEnd);
    if (pv > PMAX) { const gx = Math.log(PMAX) / Math.log(k); pipe(ctx, [pts[pts.length - 1], [X(gx), Y(PMAX)]], 5, PW); pinned(ctx, GB, X, Y, gEnd, pv, PW, fmt(pv, 1)); }
    else dot(ctx, X(gEnd), Y(pv), PW, true, 9);
    hits.push({ x: X(gEnd), y: Y(Math.min(pv, PMAX)), r: 14, name: 'the power after ' + fmt(gEnd, 1) + ' generations: ' + (pv < 0.01 ? 'almost nothing' : fmt(pv, 2) + ' times its starting value') });

    const p10 = Math.pow(k, NGEN), pT = crit ? '1' : p10 >= 0.01 ? fmt(p10, 2) : sciTex(p10), shT = crit ? '\\tfrac{1}{3}' : fmt(share, 2);
    ro.set('\\dfrac{\\kP_{10}}{\\kP_{0}} = (\\mk{x}{x} \\times \\mk{s}{\\text{share}})^{10} = (\\mk{xv}{3} \\times \\mk{sv}{' + shT + '})^{10} = \\mk{p}{' + pT + '}', undefined, { form: crit ? 'c' : k < 1 ? 'sub' : 'super' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
