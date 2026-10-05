/* Figures for section 31.4 Nuclear Decay and Conservation Laws.
   The page binds energy, mass, momentum and velocity. Z, A and N are counts and
   stay ink. Protons, neutrons, electrons, positrons, neutrinos and γ rays wear
   the particle convention of F.el; the parents and daughters of the decay
   figure are the section's referents, their bodies in that convention and
   their names in the referent color. On the chart of the series a nuclide is
   hollow when unstable and filled when stable, and the two kinds of decay
   arrow are ink (α) and F.cat(1) (β⁻), named by a legend. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.4'] = function (root, F) {
const { C, PAL, alpha, choice, select, register, cycle, begin, line, arrow, dot, text, topline, axes, hover, readout, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
const nucTex = (A, Z, s, star) => '{}^{' + A + '}_{' + Z + '}\\text{' + s + '}' + (star ? '^{*}' : '') + '_{' + (A - Z) + '}';

/* =====================================================================
   SIM · sim-decay-series · Figure 31.14 · still · flat (rule 28.1)
   The ²³⁸U series on the book's axes, N up and Z across, fixed at Z 79 to 93
   and N 123 to 147 so every member sits inside with a unit of headroom. The
   faint diagonals are the lines of constant A = Z + N for the series' A
   (206 to 238 in steps of 4). The chosen decay is drawn in full, the others
   faded; its parent and daughter are named, with the two ends of the series.
   Half-lives are the book's, its "m" written min.
===================================================================== */
(function () {
  const H = 760;
  const NUC = {
    U238: [92, 146, 'U', '4.5 × 10⁹ y'], Th234: [90, 144, 'Th', '24 d'], Pa234: [91, 143, 'Pa', '6.7 h'],
    U234: [92, 142, 'U', '2.5 × 10⁵ y'], Th230: [90, 140, 'Th', '7.5 × 10⁴ y'], Ra226: [88, 138, 'Ra', '1600 y'],
    Rn222: [86, 136, 'Rn', '3.8 d'], Po218: [84, 134, 'Po', '3.1 min'], Pb214: [82, 132, 'Pb', '27 min'],
    At218: [85, 133, 'At', '2 s'], Rn218: [86, 132, 'Rn', '35 ms'], Bi214: [83, 131, 'Bi', '21 min'],
    Po214: [84, 130, 'Po', '0.16 ms'], Tl210: [81, 129, 'Tl', '1.3 min'], Pb210: [82, 128, 'Pb', '22 y'],
    Hg206: [80, 126, 'Hg', '8.2 min'], Bi210: [83, 127, 'Bi', '5 d'], Po210: [84, 126, 'Po', '138 d'],
    Tl206: [81, 125, 'Tl', '4.2 min'], Pb206: [82, 124, 'Pb', null],
  };
  const STEPS = [
    ['U238', 'Th234'], ['Th234', 'Pa234'], ['Pa234', 'U234'], ['U234', 'Th230'], ['Th230', 'Ra226'], ['Ra226', 'Rn222'],
    ['Rn222', 'Po218'], ['Po218', 'Pb214'], ['Po218', 'At218'], ['At218', 'Bi214'], ['At218', 'Rn218'], ['Rn218', 'Po214'],
    ['Pb214', 'Bi214'], ['Bi214', 'Po214'], ['Bi214', 'Tl210'], ['Po214', 'Pb210'], ['Tl210', 'Pb210'], ['Pb210', 'Bi210'],
    ['Pb210', 'Hg206'], ['Bi210', 'Po210'], ['Bi210', 'Tl206'], ['Hg206', 'Tl206'], ['Po210', 'Pb206'], ['Tl206', 'Pb206'],
  ];
  const A = (k) => NUC[k][0] + NUC[k][1];
  const name = (k) => sup(A(k)) + NUC[k][2];
  const isAlpha = ([p, q]) => NUC[q][0] === NUC[p][0] - 2;
  const d = sim('sim-decay-series', H);
  const pick = select(d.controls, {
    label: 'decay', aria: 'the decay in the series',
    options: STEPS.map((s, i) => ({ value: String(i), label: name(s[0]) + ' → ' + name(s[1]) + (isAlpha(s) ? ' (α)' : ' (β⁻)') })),
    value: '0',
  });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 150, r: 878, t: 100, b: 676 };

  function draw() {
    const { ctx } = begin(d.c);
    const st = STEPS[+pick.value] || STEPS[0], [pk, dk] = st, al = isAlpha(st);
    const CA = PAL.ink, CB = F.cat(1);
    hits = [];
    const half = NUC[pk][3];
    topline(ctx, '${}^{' + A(pk) + '}\\text{' + NUC[pk][2] + '}$ ' + (al ? 'α' : 'β⁻') + ' decays to ${}^{' + A(dk) + '}\\text{' + NUC[dk][2] + '}$ with a half-life of ' + half + '.');
    const { X, Y } = axes(ctx, BOX, [79, 93], [123, 147], {
      nx: 14, ny: 24, fx: (v) => (v === 79 || v === 93 ? '' : String(Math.round(v))), fy: (v) => (v === 123 || v === 147 ? '' : String(Math.round(v))),
      xl: 'Z', yl: 'N',
    });
    const P = (k) => ({ x: X(NUC[k][0]), y: Y(NUC[k][1]) });

    /* lines of constant A, clipped to the box: the parent's (and an α daughter's) drawn darker and named */
    const keep = [A(pk), A(dk)];
    const lab = labeller(ctx, H, { headline: 1 });
    for (let a = 206; a <= 238; a += 4) {
      const z0 = Math.max(79, a - 147), z1 = Math.min(93, a - 123);
      const on = keep.includes(a);
      line(ctx, X(z0), Y(a - z0), X(z1), Y(a - z1), alpha(PAL.ink, on ? 0.5 : 0.16), on ? 2 : 1.5, [6, 7]);
      if (on) {
        const right = z1 === 93, ex = X(z1), ey = right ? Y(a - z1) : Y(a - z1) - 16;
        text(ctx, 'A = ' + a, ex + (right ? 10 : 8), ey, PAL.ink, { size: 17, align: 'left', bg: PAL.panel });
        lab.place({ l: ex + 2, r: ex + 96, t: ey - 13, b: ey + 13 });
      }
    }

    /* the decay arrows: the chosen one in full, the rest faded */
    STEPS.forEach((s, i) => {
      const a = P(s[0]), b = P(s[1]), L = Math.hypot(b.x - a.x, b.y - a.y), ux = (b.x - a.x) / L, uy = (b.y - a.y) / L;
      const chosen = s === st, col = isAlpha(s) ? CA : CB;
      arrow(ctx, a.x + ux * 11, a.y + uy * 11, b.x - ux * 11, b.y - uy * 11, chosen ? col : alpha(col, 0.42), chosen ? 5 : 3);
      hits.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, r: 10, name: (isAlpha(s) ? 'α' : 'β⁻') + ' decay of ' + name(s[0]) + ' to ' + name(s[1]) + ', half-life ' + NUC[s[0]][3] });
    });

    /* the nuclides: hollow while unstable, filled when stable; the chosen pair ringed */
    Object.keys(NUC).forEach((k) => {
      const p = P(k), stable = !NUC[k][3];
      if (k === pk || k === dk) dot(ctx, p.x, p.y, PAL.ink, false, 13);
      dot(ctx, p.x, p.y, PAL.ink, stable, 7);
      hits.push({ x: p.x, y: p.y, r: 12, name: name(k) + ': Z = ' + NUC[k][0] + ', N = ' + NUC[k][1] + ', A = ' + A(k) + (stable ? ', stable' : ', half-life ' + NUC[k][3]) });
    });
    const named = [...new Set([pk, dk, 'U238', 'Pb206'])];
    named.forEach((k) => {
      const p = P(k), right = NUC[k][0] >= 84 ? -1 : 1, low = k === 'Pb206';
      lab.add(name(k), p.x, p.y, low ? -0.9 : right * 0.94, low ? 0.44 : -0.34, PAL.ink, 22, 22);
    });
    lab.flush();

    /* legend */
    const LX = 1060;
    arrow(ctx, LX, 150, LX + 60, 150 + 28, CA, 5);
    text(ctx, 'α decay', LX + 80, 164, PAL.ink, { size: 20 });
    arrow(ctx, LX, 222, LX + 30, 222 + 28, CB, 5);
    text(ctx, 'β⁻ decay', LX + 80, 236, PAL.ink, { size: 20 });
    dot(ctx, LX + 22, 300, PAL.ink, true, 7);
    text(ctx, 'stable', LX + 80, 300, PAL.ink, { size: 20 });
    dot(ctx, LX + 22, 344, PAL.ink, false, 7);
    text(ctx, 'unstable', LX + 80, 344, PAL.ink, { size: 20 });

    const [zp, np, sp] = NUC[pk], [zd, nd, sd] = NUC[dk];
    const tex = '\\mk{p}{' + nucTex(A(pk), zp, sp) + '} \\to \\mk{d}{' + nucTex(A(dk), zd, sd) + '} + '
      + (al ? '\\mk{x}{' + nucTex(4, 2, 'He') + '}' : '\\mk{b}{\\beta^{-}} + \\mk{n}{\\bar{\\nu}_{e}}');
    ro.set(tex, al ? 'An α step leaves the line $A$ = ' + A(pk) + ' for the line $A$ = ' + A(dk) + ', four nucleons lower.'
      : 'A β⁻ step stays on the line $A$ = ' + A(pk) + ': a neutron has become a proton.', { form: al });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-decay-modes · Figure 31.15 + 31.17 + 31.18 · moving · flat
   A parent at rest waits 0.8 s and decays; the products fly for 3.7 s (a
   4.5 s loop holding 1.2 s). The nucleus is a packed disc of radius in
   proportion to A^(1/3), about 1.25 A^(2/3) nucleons showing, protons and
   neutrons in the proportion Z : N. The α leaves at 100 units/s and the
   ²³⁵U recoils at 100 × 4.0026/235.04, the true ratio; the light particles
   leave at 120 units/s and γ rays at 140, and a daughter that throws off only
   electrons, neutrinos or photons is drawn without recoil (its speed is a few
   parts in 10⁵ of c). In β⁺ the positron meets a waiting electron 1.2 s
   after the decay and the pair becomes two γ rays going opposite ways. In EC
   an inner-shell electron falls in over 0.65 s before the decay. The panel at
   the right draws the decay's momenta from one tail, the daughter's the
   negative of the others' sum. Everything at time t follows from t alone.
===================================================================== */
(function () {
  const H = 560, T = 4.5, T0 = 0.8, CX = 470, CY = 300, NS = 13, SP = 23.5;
  const VL = 120, VG = 140, VA = 100;
  const unit = (x, y) => { const L = Math.hypot(x, y); return [x / L, y / L]; };
  const MODES = {
    a: { label: 'α', P: [239, 94, 'Pu', 'pu-239'], D: [235, 92, 'U', 'u-235'] },
    bm: { label: 'β⁻', P: [60, 27, 'Co', 'co-60'], D: [60, 28, 'Ni', 'ni-60'], ePart: 'e-', dE: unit(0.9, -0.44), dN: unit(0.86, 0.48) },
    bp: { label: 'β⁺', P: [22, 11, 'Na', 'na-22'], D: [22, 10, 'Ne', 'ne-22'], ePart: 'e+', dE: unit(0.88, -0.47), dN: unit(0.85, 0.5) },
    ec: { label: 'EC', P: [22, 11, 'Na', 'na-22'], D: [22, 10, 'Ne', 'ne-22'], dN: unit(0.9, 0.43) },
    g: { label: 'γ', P: [60, 28, 'Ni', 'ni-60'], D: [60, 28, 'Ni', 'ni-60'], g1: unit(-0.9, -0.42), g2: unit(0.92, 0.38) },
  };
  const d = sim('sim-decay-modes', H);
  const mode = choice(d.controls, {
    label: 'mode', aria: 'the mode of decay',
    options: Object.keys(MODES).map((k) => ({ value: k, label: MODES[k].label })), value: 'a', onInput: () => cy.reset(),
  });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  /* hexagonal packing, nearest the center first */
  const LATTICE = [];
  for (let j = -12; j <= 12; j++) for (let i = -12; i <= 12; i++) {
    const x = (i + (j & 1) * 0.5) * SP, y = j * SP * 0.866;
    LATTICE.push({ x, y, r: Math.hypot(x, y) + hash(i, j) * 0.5 });
  }
  LATTICE.sort((a, b) => a.r - b.r);
  /* a nucleus of mass number A and atomic number Z: n positions and which are protons */
  function nucleus(A, Z, salt) {
    const n = Math.round(1.25 * Math.pow(A, 2 / 3)), pts = LATTICE.slice(0, n).map((p) => ({ x: p.x, y: p.y }));
    const order = pts.map((_, i) => i).sort((i, j) => hash(i, salt) - hash(j, salt));
    const np = Math.round((n * Z) / A);
    order.forEach((i, k) => { pts[i].p = k < np; });
    const R = Math.max(...pts.map((p) => Math.hypot(p.x, p.y))) + NS;
    return { pts, R };
  }
  const nucleon = (ctx, x, y, isP, s = 1) => {
    ctx.save(); ctx.fillStyle = F.el(isP ? 'p+' : 'n0'); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(x, y, NS * s, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  };
  const particle = (ctx, x, y, key, r = 7) => {
    ctx.save(); ctx.fillStyle = F.el(key); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  };
  /* a γ ray: a wave packet 64 long ending in its head, moving along u */
  function photon(ctx, hx, hy, u, len = 64) {
    const col = F.el('gamma'), nx = -u[1], ny = u[0];
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath();
    for (let k = 0; k <= 40; k++) {
      const s = -len + (len - 12) * (k / 40), w = 6 * Math.sin((s / 16) * 2 * Math.PI);
      const x = hx + u[0] * s + nx * w, y = hy + u[1] * s + ny * w;
      if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
    arrow(ctx, hx - u[0] * 14, hy - u[1] * 14, hx, hy, col, 3);
  }
  const head = (ctx, x, y, u, gap) => arrow(ctx, x + u[0] * gap, y + u[1] * gap, x + u[0] * (gap + 30), y + u[1] * (gap + 30), alpha(PAL.ink, 0.6), 3);
  const ease = (k) => (k <= 0 ? 0 : k >= 1 ? 1 : F.ease.smooth(k));

  function draw() {
    const { ctx } = begin(d.c);
    const m = mode.value, M = MODES[m], t = cy.now(), dt = Math.max(0, t - T0), after = t >= T0;
    const [Ap, Zp, sp, rp] = M.P, [Ad, Zd, sd, rd] = M.D;
    hits = [];
    topline(ctx, {
      a: '${}^{239}\\text{Pu}$ emits an α particle, and the ${}^{235}\\text{U}$ daughter recoils the other way.',
      bm: 'A neutron in ${}^{60}\\text{Co}$ becomes a proton as the nucleus emits a β⁻ and an antineutrino.',
      bp: 'A proton in ${}^{22}\\text{Na}$ becomes a neutron, and the positron meets an electron and annihilates.',
      ec: '${}^{22}\\text{Na}$ captures an inner-shell electron, a proton becomes a neutron, and a neutrino leaves.',
      g: 'The excited ${}^{60}\\text{Ni}$ nucleus emits two γ rays and remains ${}^{60}\\text{Ni}$.',
    }[m]);

    ctx.save(); ctx.beginPath(); ctx.rect(20, 80, 1000, H - 90); ctx.clip();
    const mom = [];   /* the decay's momenta for the panel: [ux, uy, length, name] */
    let nucX = CX, R;
    if (m === 'a') {
      const D = nucleus(Ad, Zd, 3); R = D.R;
      const vd = (VA * 4.0026) / 235.04;
      nucX = CX - vd * dt;
      D.pts.forEach((p) => nucleon(ctx, nucX + p.x, CY + p.y, p.p));
      const ax = CX + D.R - 4 + VA * dt;
      [[-1, -1, true], [1, -1, false], [-1, 1, false], [1, 1, true]].forEach(([i, j, isP]) => nucleon(ctx, ax + i * 11.5, CY + j * 11.5, isP));
      if (after) head(ctx, ax, CY, [1, 0], 28);
      hits.push({ x: ax, y: CY, r: 22, name: after ? 'the α particle, a ⁴He nucleus: 2 protons and 2 neutrons' : 'the two protons and two neutrons that will leave as an α particle' });
      if (after) mom.push([1, 0, 70, 'α'], [-1, 0, 70, 'U']);
    } else {
      const Pn = nucleus(Ap, Zp, m === 'g' ? 7 : 5); R = Pn.R;
      let flip = -1;
      if (m === 'bm') flip = Pn.pts.findIndex((p, i) => !p.p && i > Pn.pts.length * 0.3);
      if (m === 'bp' || m === 'ec') flip = Pn.pts.findIndex((p, i) => p.p && i > Pn.pts.length * 0.3);
      Pn.pts.forEach((p, i) => nucleon(ctx, CX + p.x, CY + p.y, i === flip && after ? !p.p : p.p));
      if (flip >= 0 && after && dt < 0.6) {
        const f = Pn.pts[flip];
        ctx.save(); ctx.globalAlpha = 1 - dt / 0.6;
        dot(ctx, CX + f.x, CY + f.y, PAL.ink, false, NS + 4 + 18 * dt);
        ctx.restore();
      }
      if (m === 'bm' || m === 'bp') {
        const s = R + 10 + VL * dt, ex = CX + M.dE[0] * s, ey = CY + M.dE[1] * s;
        const nx = CX + M.dN[0] * s, ny = CY + M.dN[1] * s;
        const meet = 1.2, met = m === 'bp' && dt >= meet;
        const wx = CX + M.dE[0] * (R + 10 + VL * meet), wy = CY + M.dE[1] * (R + 10 + VL * meet);
        if (m === 'bp' && !met) {
          particle(ctx, wx, wy, 'e-');
          hits.push({ x: wx, y: wy, r: 14, name: 'an electron of the surrounding matter' });
        }
        if (after && !met) {
          particle(ctx, ex, ey, M.ePart); head(ctx, ex, ey, M.dE, 12);
          hits.push({ x: ex, y: ey, r: 16, name: m === 'bm' ? 'the β⁻, an electron created in the decay' : 'the β⁺, a positron created in the decay' });
        }
        if (after) {
          particle(ctx, nx, ny, 'nu', 6); head(ctx, nx, ny, M.dN, 11);
          hits.push({ x: nx, y: ny, r: 16, name: m === 'bm' ? 'the electron’s antineutrino' : 'the electron’s neutrino' });
          mom.push([M.dE[0], M.dE[1], 70, 'β'], [M.dN[0], M.dN[1], 58, 'ν']);
        }
        if (met) {
          const k = dt - meet, g = [-M.dE[1], M.dE[0]];
          if (k < 0.35) { ctx.save(); ctx.globalAlpha = 1 - k / 0.35; dot(ctx, wx, wy, F.el('gamma'), false, 10 + 50 * k); ctx.restore(); }
          [[1], [-1]].forEach(([sg]) => {
            const u = [g[0] * sg, g[1] * sg], hx = wx + u[0] * (12 + VG * k), hy = wy + u[1] * (12 + VG * k);
            photon(ctx, hx, hy, u, Math.min(64, 12 + VG * k));
            hits.push({ x: hx, y: hy, r: 18, name: 'a γ ray from the annihilation of the positron and an electron' });
          });
        }
      }
      if (m === 'ec') {
        const RS = 140;
        ctx.save(); ctx.setLineDash([6, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(CX, CY, RS, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
        hits.push({ x: CX - RS * 0.7, y: CY + RS * 0.7, r: 14, name: 'the innermost electron shell of the atom' });
        const a1 = -0.7, a2 = Math.PI - 0.7;
        particle(ctx, CX + RS * Math.cos(a2), CY + RS * Math.sin(a2), 'e-');
        hits.push({ x: CX + RS * Math.cos(a2), y: CY + RS * Math.sin(a2), r: 14, name: 'an inner-shell electron' });
        const k = Math.min(1, Math.max(0, (t - 0.15) / (T0 - 0.15))), rr = RS - (RS - R + 4) * k;
        if (!after) {
          particle(ctx, CX + rr * Math.cos(a1), CY + rr * Math.sin(a1), 'e-');
          hits.push({ x: CX + rr * Math.cos(a1), y: CY + rr * Math.sin(a1), r: 14, name: 'the inner-shell electron the nucleus captures' });
        }
        if (after) {
          const s = R + 10 + VL * dt, nx = CX + M.dN[0] * s, ny = CY + M.dN[1] * s;
          particle(ctx, nx, ny, 'nu', 6); head(ctx, nx, ny, M.dN, 11);
          hits.push({ x: nx, y: ny, r: 16, name: 'the electron’s neutrino' });
          mom.push([M.dN[0], M.dN[1], 64, 'ν']);
        }
      }
      if (m === 'g') {
        [[M.g1, 0, 'γ1'], [M.g2, 0.5, 'γ2']].forEach(([u, lag, nm]) => {
          const k = dt - lag; if (!after || k < 0) return;
          const hx = CX + u[0] * (R + 12 + VG * k), hy = CY + u[1] * (R + 12 + VG * k);
          photon(ctx, hx, hy, u, Math.min(64, 12 + VG * k));
          hits.push({ x: hx, y: hy, r: 18, name: 'a γ ray from the excited nucleus' });
          mom.push([u[0], u[1], 60, nm]);
        });
      }
    }
    ctx.restore();

    /* the parent's name before the decay, the daughter's after; in γ decay the nucleus is excited until its second γ */
    const excited = m === 'g' && dt < 0.5;
    const isParent = !after || excited;
    const nm = isParent ? (m === 'g' ? 'excited ' + sup(Ap) + sp + '*' : 'parent ' + sup(Ap) + sp) : (m === 'g' ? sup(Ad) + sd : 'daughter ' + sup(Ad) + sd);
    text(ctx, nm, CX, CY + R + 34, F.ref(isParent ? rp : rd), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: nucX, y: CY, r: R, name: (isParent ? sup(Ap) + sp + (m === 'g' ? '*' : '') + ' nucleus: ' + Zp + ' protons, ' + (Ap - Zp) : sup(Ad) + sd + ' nucleus: ' + Zd + ' protons, ' + (Ad - Zd)) + ' neutrons' });

    /* legend: the kinds this mode draws */
    const LX = 1070, rows = [['p+', 'proton'], ['n0', 'neutron']];
    if (m === 'a') rows.push(['alpha', 'α particle, ⁴He']);
    if (m === 'bm') rows.push(['e-', 'β⁻, an electron'], ['nu', 'antineutrino ν̄_{e}']);
    if (m === 'bp') rows.push(['e+', 'β⁺, a positron'], ['nu', 'neutrino ν_{e}'], ['e-', 'electron'], ['gamma', 'γ ray']);
    if (m === 'ec') rows.push(['e-', 'electron'], ['nu', 'neutrino ν_{e}']);
    if (m === 'g') rows.push(['gamma', 'γ ray']);
    rows.forEach(([k, s], i) => {
      const y = 110 + i * 34, gx = LX + 14;
      if (k === 'p+' || k === 'n0') nucleon(ctx, gx, y, k === 'p+', 0.8);
      else if (k === 'alpha') [[-1, -1, true], [1, -1, false], [-1, 1, false], [1, 1, true]].forEach(([i2, j2, isP]) => nucleon(ctx, gx + i2 * 5, y + j2 * 5, isP, 0.45));
      else if (k === 'gamma') photon(ctx, gx + 22, y, [1, 0], 40);
      else particle(ctx, gx, y, k, k === 'nu' ? 6 : 7);
      text(ctx, s, LX + 48, y, PAL.ink, { size: 19 });
    });

    /* the momenta of the decay from one tail; the daughter's balances the rest */
    const PX = 1215, PY = 440, MC = C('momentum');
    text(ctx, 'momenta', LX, 345, MC, { size: 19, weight: 600 });
    dot(ctx, PX, PY, PAL.ink, true, 4);
    if (m !== 'a' && mom.length) {
      const sx = mom.reduce((s, q) => s + q[0] * q[2], 0), sy = mom.reduce((s, q) => s + q[1] * q[2], 0);
      const L = Math.hypot(sx, sy);
      mom.push([-sx / L, -sy / L, L, sd]);
    }
    const g = ease(dt / 0.45);
    mom.forEach(([ux, uy, L, s]) => {
      const hx = PX + ux * L * g, hy = PY + uy * L * g;
      arrow(ctx, PX, PY, hx, hy, MC, 4);
      if (g > 0.6) text(ctx, 'p_{' + s + '}', hx + ux * 14, hy + uy * 14 + (Math.abs(uy) < 0.3 ? -14 : 0), MC, { size: 20, weight: 600, align: ux > 0.3 ? 'left' : ux < -0.3 ? 'right' : 'center', bg: PAL.panel });
    });
    hits.push({ x: PX, y: PY, r: 60, name: after ? 'the momenta of the products, which add to zero' : 'the parent is at rest: its momentum is zero' });

    const tex = {
      a: '\\mk{p}{' + nucTex(239, 94, 'Pu') + '} \\to \\mk{d}{' + nucTex(235, 92, 'U') + '} + \\mk{x}{' + nucTex(4, 2, 'He') + '}',
      bm: '\\mk{p}{' + nucTex(60, 27, 'Co') + '} \\to \\mk{d}{' + nucTex(60, 28, 'Ni') + '} + \\mk{b}{\\beta^{-}} + \\mk{n}{\\bar{\\nu}_{e}}',
      bp: '\\mk{p}{' + nucTex(22, 11, 'Na') + '} \\to \\mk{d}{' + nucTex(22, 10, 'Ne') + '} + \\mk{b}{\\beta^{+}} + \\mk{n}{\\nu_{e}}',
      ec: '\\mk{p}{' + nucTex(22, 11, 'Na') + '} + \\mk{e}{e^{-}} \\to \\mk{d}{' + nucTex(22, 10, 'Ne') + '} + \\mk{n}{\\nu_{e}}',
      g: '\\mk{p}{' + nucTex(60, 28, 'Ni', true) + '} \\to \\mk{d}{' + nucTex(60, 28, 'Ni') + '} + \\mk{g1}{\\gamma_{1}} + \\mk{g2}{\\gamma_{2}}',
    }[m];
    const note = {
      a: 'Of $\\kE$ = 5.25 MeV released, the α carries 5.16 MeV and the ${}^{235}\\text{U}$ only 0.09 MeV.',
      bm: '$\\kE = (\\kdm)\\kc^{2}$ = 2.82 MeV goes almost all to the β⁻ and the antineutrino; the heavy ${}^{60}\\text{Ni}$ barely recoils.',
    }[m] || '';
    ro.set(tex, note, { form: m });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
