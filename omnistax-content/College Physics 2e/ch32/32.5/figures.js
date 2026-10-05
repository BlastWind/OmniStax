/* Figures for section 32.5 Fusion.
   The page binds energy (the energy released, KE, PE, BE/A), mass (m_i, m_f),
   velocity (c) and position (the separation r of two nuclei). A, the mass
   number, is a count and stays in ink, as do ke² and a probability. Protons are
   F.el('p+'), neutrons F.el('n0'), electrons F.el('e-'), positrons F.el('e+'),
   neutrinos F.el('nu') and γ rays F.el('gamma'). The Sun is drawn in ink.
   Atomic masses are the book's Appendix A. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.5'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, select, register, cycle, begin, line, arrow, dot, text, topline, label, axes, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const U_MEV = 931.5;
function ball(ctx, x, y, r, color, a = 1) {
  ctx.save(); ctx.globalAlpha *= a;
  ctx.fillStyle = color; ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.fillStyle = alpha(PAL.panel, 0.5);
  ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.3, 0, 2 * Math.PI); ctx.fill();
  ctx.restore();
}
function wave(ctx, x0, y0, ux, uy, L, amp, color, w) {
  const px = -uy, py = ux;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let j = 0; j <= 24; j++) {
    const s = j / 24, a = amp * Math.sin(s * 3 * 2 * Math.PI);
    const x = x0 + ux * s * L + px * a, y = y0 + uy * s * L + py * a;
    if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 32.12 · sim-fusion-curve · still · flat (rule 28.1)
   Left, BE/A of the stable nuclides on the book's axes (A 0 to 250, BE/A 0
   to 10 MeV), the same Appendix A curve as 31.6, its light end boxed. Right,
   that box enlarged (A 0 to 8, BE/A 0 to 8 MeV), where the chosen reaction's
   reactants are hollow and its products filled, an ink arrow from each
   reactant to the main product. The readout is E = (m_i − m_f)c² with atomic
   masses; where a positron leaves, m_f carries two electron masses.
===================================================================== */
(function () {
  const H = 560;
  const RAW = [[2,1.112],[3,2.572],[4,7.074],[6,5.333],[7,5.607],[9,6.463],[10,6.475],[11,6.928],[12,7.68],[13,7.47],[14,7.476],[15,7.7],[16,7.976],[18,7.767],[19,7.779],[20,8.033],[22,8.081],[23,8.112],[24,8.261],[27,8.332],[28,8.448],[31,8.481],[32,8.493],[35,8.52],[37,8.57],[39,8.557],[40,8.595],[45,8.619],[48,8.723],[51,8.742],[52,8.776],[55,8.765],[56,8.79],[58,8.732],[59,8.768],[60,8.781],[64,8.736],[65,8.757],[66,8.76],[69,8.725],[72,8.732],[74,8.725],[75,8.701],[79,8.688],[80,8.711],[84,8.717],[85,8.697],[86,8.709],[88,8.733],[89,8.714],[90,8.71],[93,8.664],[98,8.635],[102,8.607],[103,8.584],[106,8.58],[107,8.554],[109,8.548],[114,8.532],[115,8.517],[120,8.505],[121,8.482],[127,8.446],[130,8.43],[132,8.428],[133,8.41],[136,8.396],[137,8.392],[138,8.394],[139,8.378],[140,8.377],[141,8.354],[142,8.346],[152,8.244],[153,8.229],[158,8.202],[159,8.189],[164,8.159],[165,8.147],[166,8.142],[169,8.115],[174,8.084],[175,8.069],[180,8.035],[181,8.024],[184,8.005],[187,7.978],[191,7.948],[192,7.949],[193,7.938],[195,7.927],[197,7.916],[199,7.905],[202,7.897],[205,7.879],[206,7.876],[207,7.87],[208,7.868],[209,7.848],[232,7.615],[235,7.591],[238,7.57]];
  const M = { H1: 1.007825, n: 1.008665, H2: 2.014102, H3: 3.016049, He3: 3.016029, He4: 4.002603, e: 0.000549 };
  const NUC = {
    H1: { A: 1, bea: 0, name: '¹H', side: 'left' }, n: { A: 1, bea: 0, name: 'n', side: 'left' },
    H2: { A: 2, bea: 1.112, name: '²H', side: 'below' }, H3: { A: 3, bea: 2.827, name: '³H', side: 'right' },
    He3: { A: 3, bea: 2.573, name: '³He', side: 'right' }, He4: { A: 4, bea: 7.074, name: '⁴He', side: 'right' },
  };
  const RX = {
    pp1: { label: '¹H + ¹H → ²H + e⁺ + vₑ', ins: ['H1', 'H1'], outs: ['H2'], mf: M.H2 + 2 * M.e },
    pp2: { label: '¹H + ²H → ³He + γ', ins: ['H1', 'H2'], outs: ['He3'] },
    pp3: { label: '³He + ³He → ⁴He + ¹H + ¹H', ins: ['He3', 'He3'], outs: ['He4', 'H1', 'H1'] },
    ddT: { label: '²H + ²H → ³H + ¹H', ins: ['H2', 'H2'], outs: ['H3', 'H1'] },
    ddHe: { label: '²H + ²H → ³He + n', ins: ['H2', 'H2'], outs: ['He3', 'n'] },
    dt: { label: '²H + ³H → ⁴He + n', ins: ['H2', 'H3'], outs: ['He4', 'n'] },
    ddg: { label: '²H + ²H → ⁴He + γ', ins: ['H2', 'H2'], outs: ['He4'] },
  };
  Object.values(RX).forEach((r) => {
    r.mi = r.ins.reduce((s, k) => s + M[k], 0);
    if (r.mf === undefined) r.mf = r.outs.reduce((s, k) => s + M[k], 0);
    r.dm = +(r.mi.toFixed(6) - r.mf.toFixed(6)).toFixed(6);
    r.E = r.dm * U_MEV;
  });
  const d = sim('sim-fusion-curve', H);
  const pick = select(d.controls, { label: '\\text{reaction}', options: Object.keys(RX).map((k) => ({ value: k, label: RX[k].label })), value: 'dt', aria: 'the fusion reaction' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const W = { l: 90, r: 470, t: 140, b: 440 }, Z = { l: 650, r: 1320, t: 140, b: 440 };
  const bea = (b) => (b === 0 ? '0' : b.toFixed(2));
  const groups = (keys) => { const out = []; keys.forEach((k) => { const g = out.find((o) => o.k === k); if (g) g.n++; else out.push({ k, n: 1 }); }); return out; };
  const nameOf = (g) => (g.n > 1 ? 'two ' : '') + NUC[g.k].name;

  function bow(ctx, x0, y0, x1, y1, color) {
    const L = Math.hypot(x1 - x0, y1 - y0), nx = (y1 - y0) / L, ny = -(x1 - x0) / L;
    const cx = (x0 + x1) / 2 + nx * L * 0.22, cy = (y0 + y1) / 2 + ny * L * 0.22, tl = Math.hypot(x1 - cx, y1 - cy);
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo(cx, cy, x1 - (x1 - cx) / tl * 8, y1 - (y1 - cy) / tl * 8); ctx.stroke(); ctx.restore();
    arrow(ctx, x1 - (x1 - cx) / tl * 16, y1 - (y1 - cy) / tl * 16, x1, y1, color, 3);
  }
  function reaction(ctx, r, X, Y, live) {
    const ink = PAL.ink, EC = C('energy'), main = NUC[r.outs[0]];
    groups(r.ins).forEach((g) => {
      const p = NUC[g.k], x = X(p.A), y = Y(p.bea), mx = X(main.A), my = Y(main.bea), L = Math.hypot(mx - x, my - y);
      if (L > 30) bow(ctx, x + (mx - x) * 16 / L, y + (my - y) * 16 / L, mx - (mx - x) * 18 / L, my - (my - y) * 18 / L, alpha(ink, 0.7));
    });
    groups(r.ins).forEach((g) => {
      const p = NUC[g.k]; dot(ctx, X(p.A), Y(p.bea), EC, false, 10);
      if (live) hits.push({ x: X(p.A), y: Y(p.bea), r: 12, name: nameOf(g) + ', a reactant: BE/A = ' + bea(p.bea) + ' MeV' });
    });
    groups(r.outs).forEach((g) => {
      const p = NUC[g.k]; dot(ctx, X(p.A), Y(p.bea), EC, true, 10);
      if (live) hits.push({ x: X(p.A), y: Y(p.bea), r: 12, name: nameOf(g) + ', a product: BE/A = ' + bea(p.bea) + ' MeV' });
    });
    const named = new Set();
    [...groups(r.ins), ...groups(r.outs)].forEach((g) => {
      const p = NUC[g.k], key = p.A + ':' + p.bea; if (named.has(key)) return; named.add(key);
      const both = groups(r.ins).some((h) => h.k === g.k) && groups(r.outs).some((h) => h.k === g.k);
      label(ctx, both ? NUC[g.k].name : nameOf(g), X(p.A), Y(p.bea), { side: p.side, size: 20, color: ink, gap: 28, weight: 400 });
    });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const r = RX[pick.value], EC = C('energy'), ink = PAL.ink;
    hits = [];
    const ins = groups(r.ins), main = NUC[r.outs[0]];
    const from = ins.length === 1 ? bea(NUC[ins[0].k].bea) : ins.map((g) => bea(NUC[g.k].bea)).join(' and ');
    topline(ctx, 'Fusing ' + (ins.length === 1 ? 'two ' + NUC[ins[0].k].name : ins.map((g) => NUC[g.k].name).join(' and ')) + ' into ' + main.name + ' raises $\\kBE/A$ from ' + from + ' to ' + bea(main.bea) + ' MeV.');

    /* the whole curve, its light end boxed */
    const q = F.ease.smooth(clamp01((F.arrival(d) - 0.3) / 0.7));
    const A1 = axes(ctx, W, [0, 250], [0, 10], { nx: 5, ny: 5, xl: 'A', yl: 'BE/A (MeV)', yc: EC });
    const whole = F.partial(RAW.map(([a, b]) => [A1.X(a), A1.Y(b)]), q);
    ctx.save(); ctx.strokeStyle = EC; ctx.lineWidth = 3; ctx.beginPath(); whole.forEach(([x, y], i) => { if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    RAW.forEach(([a, b]) => hits.push({ x: A1.X(a), y: A1.Y(b), r: 5, name: 'A = ' + a + ': BE/A = ' + b.toFixed(3) + ' MeV per nucleon' }));
    label(ctx, '⁵⁶Fe', A1.X(56), A1.Y(8.79), { side: 'above', size: 18, color: ink, gap: 18, weight: 400 });
    const bx0 = A1.X(0), bx1 = A1.X(8), by0 = A1.Y(8), by1 = A1.Y(0);
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.strokeRect(bx0, by0, bx1 - bx0, by1 - by0); ctx.restore();
    line(ctx, bx1, by0, Z.l, Z.t, alpha(ink, 0.3), 2, [6, 6]);
    line(ctx, bx1, by1, Z.l, Z.b, alpha(ink, 0.3), 2, [6, 6]);
    text(ctx, 'fusion', bx1 + 12, (by0 + by1) / 2 + 40, ink, { size: 18, align: 'left', bg: PAL.panel });
    hits.push({ x: (bx0 + bx1) / 2, y: (by0 + by1) / 2, r: 14, name: 'the light nuclei, enlarged on the right' });

    /* the light end enlarged */
    const A2 = axes(ctx, Z, [0, 8], [0, 8], { nx: 8, ny: 4, xl: 'A', yl: 'BE/A (MeV per nucleon)', yc: EC });
    const light = RAW.filter(([a]) => a <= 7).concat([[8, (5.607 + 6.463) / 2]]);
    const lp = F.partial(light.map(([a, b]) => [A2.X(a), A2.Y(b)]), q);
    ctx.save(); ctx.strokeStyle = EC; ctx.lineWidth = 3; ctx.beginPath(); lp.forEach(([x, y], i) => { if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    if (q >= 1) light.slice(0, -1).forEach(([a, b]) => dot(ctx, A2.X(a), A2.Y(b), EC, true, 4));
    [[6, 5.333, '⁶Li'], [7, 5.607, '⁷Li']].forEach(([a, b, s]) => {
      label(ctx, s, A2.X(a), A2.Y(b), { side: 'below', size: 18, color: ink, gap: 18, weight: 400 });
      hits.push({ x: A2.X(a), y: A2.Y(b), r: 8, name: s + ': BE/A = ' + b.toFixed(3) + ' MeV per nucleon' });
    });
    Object.keys(RX).forEach((k) => { const a = pick.a(k); if (a > 0) F.faded(ctx, a, [0, 0], () => reaction(ctx, RX[k], A2.X, A2.Y, k === pick.value)); });

    const mi = r.mi.toFixed(6), mf = r.mf.toFixed(6), E = r.E.toFixed(2);
    ro.set('\\kE = (\\kmi - \\kmf)\\kc^{2} = (' + mi + '\\ \\text{u} - ' + mf + '\\ \\text{u})\\kc^{2} = (' + r.dm.toFixed(6) + '\\ \\text{u})\\kc^{2} = ' + E + '\\ \\text{MeV}',
      pick.value === 'pp1' ? '$\\kmf$ adds two electron masses to ²H: the positron, and the electron the atom no longer needs.' : '', { form: 'e' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 32.13 + 32.14 · sim-coulomb-barrier · moving · flat (rule 28.1)
   A deuteron approaches a triton, in the triton's frame, on the r axis the
   graph shares (0 to 40 fm at 29 px/fm). The nuclei are drawn to scale,
   r = r₀A^{1/3} with r₀ = 1.2 fm, so they touch at R = 3.24 fm, where the
   Coulomb energy ke²/R = 0.444 MeV is the top of the barrier. The approach is
   integrated from energy conservation with time linear, at a speed scale
   chosen so a loop lasts 4 to 6 s. At the turning point r_min = ke²/KE the
   pair tunnels with the WKB probability through the barrier between R and
   r_min (reduced mass of D and T), drawn per loop from a seeded number, the
   first loop always turned back; a pair over the top always fuses. A fusion
   makes ⁴He and a neutron leaving in opposite directions, the neutron four
   times as fast. The graph is PE against r on fixed axes (0 to 40 fm, −0.2 to
   0.8 MeV); the nuclear well inside R drops out of the box, as the book's
   graph shows it, its true depth tens of MeV.
===================================================================== */
(function () {
  const H = 660, KE2 = 1.44, RC = 1.2 * (Math.cbrt(2) + Math.cbrt(3)), VB = KE2 / RC, S = 60, R0 = 40, DT = 1 / 240, RHO = 21;
  const MU = 2.014102 * 3.016049 / 5.030151 * U_MEV, HC = 197.327, TUN = 0.35, FUSE = 1.8;
  const tunnel = (E) => { const b = KE2 / E; if (b <= RC) return 1; const x = RC / b; return Math.exp(-2 * Math.sqrt(2 * MU * E) / HC * b * (Math.acos(Math.sqrt(x)) - Math.sqrt(x * (1 - x)))); };
  const G = { l: 170, r: 1330, t: 330, b: 590 };
  const XR = (r) => G.l + (G.r - G.l) * r / 40, SY = 172;
  const d = sim('sim-coulomb-barrier', H);
  const KE = ctl(d.controls, { label: '\\kKE', cls: 'energy', min: 0.05, max: 0.6, step: 0.01, value: 0.1, unit: 'MeV', dec: 2, aria: 'the kinetic energy of the two nuclei far apart', specials: [{ at: VB, label: 'barrier top' }], onInput: () => restart() });
  const ro = readout(d);
  let hits = [], loop = 0, path = null, fuse = false, period = 4;
  hover(d.stage, () => hits);
  const over = () => KE.v >= VB - 1e-9;
  function trace(E) {
    const m = 2 / (S * S), rs = [R0];
    let r = R0, v = -Math.sqrt(Math.max(0, 2 * (E - KE2 / r) / m));
    for (;;) {
      v += KE2 / (r * r) / m * DT; r += v * DT;
      if (r <= RC) { rs.push(RC); return { rs, tIn: (rs.length - 1) * DT, contact: true }; }
      if (v >= 0) return { rs, tIn: (rs.length - 1) * DT, contact: false };
      rs.push(r);
    }
  }
  const rAt = (t) => { const i = Math.max(0, Math.min(path.rs.length - 1, t / DT)), j = Math.floor(i), k = i - j; return path.rs[j] + ((path.rs[Math.min(j + 1, path.rs.length - 1)] ?? path.rs[j]) - path.rs[j]) * k; };
  function plan() {
    path = trace(KE.v);
    fuse = over() || (loop === 0 ? 0.5 : hash(loop, 3)) < tunnel(KE.v);
    period = fuse ? path.tIn + TUN + FUSE : Math.max(4, 2 * path.tIn);
  }
  const cy = cycle(() => period, 1);
  function restart() { loop = 0; plan(); cy.reset(); }
  plan();
  const PE = (r) => (r >= RC ? KE2 / r : VB - (VB + 30) * F.ease.smooth(clamp01((RC - r) / 1.4)));

  function nucleus(ctx, x, y, list, a = 1) {
    list.forEach(([dx, dy, k]) => ball(ctx, x + dx, y + dy, RHO, F.el(k), a));
  }
  const TRI = [[-12, -11, 'n0'], [12, -11, 'p+'], [0, 12, 'n0']], DEU = [[-RHO, 0, 'p+'], [RHO, 0, 'n0']];
  const HE4 = [[-RHO, -RHO, 'p+'], [RHO, -RHO, 'n0'], [-RHO, RHO, 'n0'], [RHO, RHO, 'p+']];

  function draw() {
    const { ctx } = begin(d.c);
    const E = KE.v, t = cy.now(), EC = C('energy'), XC = C('position'), ink = PAL.ink, b = KE2 / E, T = tunnel(E);
    hits = [];
    topline(ctx, over()
      ? 'With $\\kKE = ' + fmt(E, 2) + '$ MeV the deuteron passes over the barrier and fuses.'
      : 'A deuteron with $\\kKE = ' + fmt(E, 2) + '$ MeV turns back at $\\krad = ' + fmt(b, 1) + '$ fm unless it tunnels through the barrier.');

    /* where the deuteron is, and what has happened */
    let r = R0, phase = 'in', k = 0;
    if (t <= path.tIn) r = rAt(t);
    else if (!fuse) { r = rAt(Math.max(0, 2 * path.tIn - t)); phase = 'out'; }
    else if (t <= path.tIn + TUN) { k = (t - path.tIn) / TUN; r = path.contact ? RC : rAt(path.tIn) + (RC - rAt(path.tIn)) * F.ease.smooth(k); phase = 'tunnel'; }
    else { k = clamp01((t - path.tIn - TUN) / FUSE); phase = 'fused'; }

    /* the scene: the triton at r = 0, the deuteron at r */
    const tx = XR(0);
    if (phase !== 'fused') {
      nucleus(ctx, tx, SY, TRI);
      hits.push({ x: tx, y: SY, r: 40, name: 'a triton, ³H: one proton and two neutrons' });
      const dx = XR(r);
      line(ctx, dx, SY + 44, dx, G.b, alpha(ink, 0.25), 2, [4, 8]);
      if (phase === 'tunnel' && !path.contact) {
        ctx.save(); ctx.setLineDash([6, 6]); ctx.strokeStyle = alpha(ink, 0.6); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(XR(rAt(path.tIn)), SY, RHO * 2 + 4, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      }
      nucleus(ctx, dx, SY, DEU, phase === 'tunnel' ? 0.75 : 1);
      hits.push({ x: dx, y: SY, r: 40, name: 'a deuteron, ²H: one proton and one neutron' });
      if (phase === 'in' || phase === 'out') {
        const v = phase === 'in' ? -1 : 1, sp = Math.sqrt(Math.max(0, E - KE2 / r) / E);
        if (sp > 0.08) arrow(ctx, dx + v * 48, SY - 48, dx + v * (48 + 70 * sp), SY - 48, ink, 4);
      }
    } else {
      const cx = XR(RC * 0.4), sp = 420 * F.ease.out(k);
      const ux = Math.cos(-0.5), uy = Math.sin(-0.5);
      if (k < 0.35) { ctx.save(); ctx.globalAlpha *= 1 - k / 0.35; ctx.strokeStyle = ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, SY, 40 + 140 * k, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
      const hx = cx - ux * sp / 4, hy = SY - uy * sp / 4 * 0.3;
      nucleus(ctx, hx, hy, HE4);
      hits.push({ x: hx, y: hy, r: 44, name: 'the ⁴He nucleus the fusion made' });
      const nx = cx + ux * sp, ny = SY + uy * sp * 0.3;
      if (nx < 1380 && ny > 70) {
        ball(ctx, nx, ny, RHO, F.el('n0'));
        arrow(ctx, nx + ux * 30, ny + uy * 12, nx + ux * 100, ny + uy * 40, ink, 4);
        hits.push({ x: nx, y: ny, r: 26, name: 'the neutron the fusion released, carrying most of the 17.59 MeV' });
      }
      arrow(ctx, hx - ux * 52, hy - uy * 20, hx - ux * 82, hy - uy * 32, ink, 4);
    }
    const LY = 268;
    ball(ctx, 470, LY, 11, F.el('p+')); text(ctx, 'proton', 488, LY, ink, { size: 18, align: 'left' });
    ball(ctx, 600, LY, 11, F.el('n0')); text(ctx, 'neutron', 618, LY, ink, { size: 18, align: 'left' });
    if (phase !== 'fused') label(ctx, '³H', tx, SY, { side: 'below', size: 20, color: ink, gap: 62, weight: 400 });

    /* the graph */
    const { X, Y } = axes(ctx, G, [0, 40], [-0.2, 0.8], { nx: 4, ny: 5, xl: 'r (fm)', xc: XC, yl: 'PE (MeV)', yc: EC, fy: (v) => fmt(v, 1) });
    ctx.save(); ctx.beginPath(); ctx.rect(G.l, G.t - 20, G.r - G.l, G.b - G.t + 20); ctx.clip();
    if (!over()) {
      ctx.save(); ctx.fillStyle = alpha(EC, 0.18); ctx.beginPath(); ctx.moveTo(X(RC), Y(E));
      for (let i = 0; i <= 40; i++) { const rr = RC + (b - RC) * i / 40; ctx.lineTo(X(rr), Y(PE(rr))); }
      ctx.closePath(); ctx.fill(); ctx.restore();
    }
    F.curve(ctx, PE, 0, 40, X, Y, EC, 5, 240);
    line(ctx, X(0), Y(E), X(40), Y(E), EC, 3, [10, 10]);
    ctx.restore();
    line(ctx, X(RC), G.b, X(RC), Y(VB), alpha(ink, 0.35), 2, [4, 8]);
    text(ctx, 'contact', X(RC) + 6, G.b + 50, ink, { size: 17, align: 'left' });
    const clash = E > 0.22 && E < 0.36, ra = clash ? 12 : 5;
    label(ctx, 'repulsive Coulomb', X(ra), Y(PE(ra)), { side: clash ? 'above' : 'right', size: 18, color: ink, gap: clash ? 24 : 14, weight: 400 });
    label(ctx, 'attractive nuclear', X(RC - 0.9), Y(-0.1), { side: 'right', size: 18, color: ink, gap: 34, weight: 400 });
    hits.push({ x: X(32), y: Y(E), r: 10, name: 'the total energy of the pair, ' + fmt(E, 2) + ' MeV, all of it KE when they are far apart' });
    if (!over()) hits.push({ x: X((RC + b) / 2), y: Y((E + PE((RC + b) / 2)) / 2), r: 14, name: 'the barrier the pair must tunnel through, ' + fmt(b - RC, 1) + ' fm wide' });
    hits.push({ x: X(25), y: Y(PE(25)), r: 10, name: 'PE of the two nuclei, from their Coulomb repulsion' });

    /* the deuteron's point on the energy level */
    if (phase === 'in' || phase === 'out' || phase === 'tunnel') {
      const px = X(r), py = Y(E);
      if (phase !== 'tunnel') line(ctx, px, Y(PE(r)), px, py, alpha(EC, 0.7), 4);
      dot(ctx, px, py, EC, true, 9);
      hits.push({ x: px, y: py, r: 12, name: 'the pair at r = ' + fmt(r, 1) + ' fm; the bar beneath the dot is its KE' });
    } else F.pinned(ctx, G, X, Y, RC * 0.6, -1, EC);

    if (over()) ro.set('\\kKE = ' + fmt(E, 3) + '\\ \\text{MeV} \\geq \\frac{ke^{2}}{\\krad} = \\frac{1.44\\ \\text{MeV}\\cdot\\text{fm}}{' + fmt(RC, 2) + '\\ \\text{fm}} = ' + fmt(VB, 3) + '\\ \\text{MeV}', '', { form: 'over' });
    else {
      const n = Math.round(T * 100);
      ro.set('\\krad_{\\text{min}} = \\frac{ke^{2}}{\\kKE} = \\frac{1.44\\ \\text{MeV}\\cdot\\text{fm}}{' + fmt(E, 2) + '\\ \\text{MeV}} = ' + fmt(b, 1) + '\\ \\text{fm}',
        n < 1 ? 'Fewer than 1 pair in 100 with this energy tunnels through and fuses.' : 'About ' + n + ' pairs in 100 with this energy tunnel through and fuse.', { form: 'under' });
    }
  }
  register(d.fig, {
    update: (dt) => { const before = cy.tau; cy.step(dt, () => 1); if (cy.tau < before) { loop++; plan(); } },
    draw,
  });
})();

/* =====================================================================
   FIGURE 32.15 · sim-sun-fusion · story · flat (rule 28.1)
   Left, the Sun in cross-section, drawn in ink: a helium core, the shell at
   its boundary where fusion runs, hydrogen outside. A marked spot on the
   shell is blown up on the right, where one proton-proton cycle plays on a
   story slider: 0 six protons and two electrons; 1 two ²H, each with a
   positron and a neutrino; 2 the positrons annihilate, two γ each; 3 a
   proton joins each ²H, a γ each; 4 ⁴He and two protons given back; 5 the
   core too hot, expanding; 6 too cool, contracting. Everything is a
   function of the slider. The neutrinos cross the Sun within their beat;
   the γ energy's random walk grows a few steps a beat. The tally beneath
   adds 2(0.42) + 2(1.02) + 2(5.49) + 12.86 MeV on a fixed 0 to 27 MeV axis,
   each segment growing in the second half of its beat, when its reaction
   happens.
===================================================================== */
(function () {
  const H = 640, SX = 250, SY = 330, RS = 205, RK = 72, RHO = 17;
  const P = { l: 600, r: 1340, t: 100, b: 470 }, TB = { l: 690, r: 1300, y: 540 };
  const MK = { a: -0.45 }, mkx = (rk) => SX + (rk + 9) * Math.cos(MK.a), mky = (rk) => SY - (rk + 9) * Math.sin(MK.a);
  const SEG = [0.84, 2.04, 10.98, 12.86], SEGN = ['two ¹H + ¹H reactions, 2(0.42 MeV)', 'two annihilations, 2(1.02 MeV)', 'two ¹H + ²H reactions, 2(5.49 MeV)', 'the ³He + ³He reaction, 12.86 MeV'];
  const d = sim('sim-sun-fusion', H);
  const st = ctl(d.controls, { label: '\\text{step}', cls: '', min: 0, max: 6, step: 0.01, value: 0, unit: '', dec: 0, aria: 'the step of the proton-proton cycle' });
  F.story(d, st, { stops: [{ v: 0, label: 'start' }, { v: 1, label: '²H' }, { v: 2, label: 'annihilation' }, { v: 3, label: '³He' }, { v: 4, label: '⁴He' }, { v: 5, label: 'too hot' }, { v: 6, label: 'too cool' }], ms: 1800 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const WALK = (() => { const pts = [[0, 0]]; let x = 0, y = 0; for (let i = 0; i < 60; i++) { const a = 2 * Math.PI * hash(i, 21); x += 6 * Math.cos(a) + 0.6; y += 6 * Math.sin(a) + 0.5; pts.push([x, y]); } return pts; })();
  const HEAD = ['Six protons and two electrons are the fuel for one cycle.',
    'Twice, two protons fuse into ²H, giving off a positron and a neutrino: 0.42 MeV each time.',
    'Each positron annihilates with an electron into two γ rays: 1.02 MeV each time.',
    'Twice, a proton fuses with ²H into ³He and a γ ray: 5.49 MeV each time.',
    'The two ³He fuse into ⁴He and give back two protons: 12.86 MeV.',
    'Too hot: the reaction rate rises, and the energy released expands the core and cools it.',
    'Too cool: the core contracts, which heats it and raises the reaction rate.'];
  const TERMS = ['\\mk{a}{2(0.42\\ \\text{MeV})}', '\\mk{b}{2(1.02\\ \\text{MeV})}', '\\mk{c}{2(5.49\\ \\text{MeV})}', '\\mk{d}{12.86\\ \\text{MeV}}'];
  const SUMS = ['0.84', '2.88', '13.86', '26.7'];
  const lerp = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
  const sm = F.ease.smooth;

  /* nucleon places in the blowup at each of stops 0, 1, 3 and 4 */
  const A0 = [[730, 200], [800, 215], [760, 360]], B0 = [[1140, 200], [1210, 215], [1180, 360]];
  const A1 = [[752, 210], [788, 210]], B1 = [[1152, 210], [1188, 210]];
  const A3 = [[752, 210], [788, 210], [770, 241]], B3 = [[1152, 210], [1188, 210], [1170, 241]];
  const HE = [[952, 255], [988, 255], [952, 291], [988, 291]], OUT = [[800, 400], [1140, 400]];
  const E0 = [[880, 398], [1060, 398]], POS = [[860, 310], [1080, 310]], MEET = [[870, 356], [1070, 356]];

  function particles(ctx, s) {
    const k1 = clamp01(s), k2 = clamp01(s - 1), k3 = clamp01(s - 2), k4 = clamp01(s - 3);
    const ink = PAL.ink, out = [];
    const pos = (i, side) => {
      const start = (side ? B0 : A0)[i];
      if (i === 2) {
        const p3 = lerp(start, (side ? B3 : A3)[2], sm(k3));
        return k4 > 0 ? lerp(p3, OUT[side], sm(k4)) : p3;
      }
      const p1 = lerp(start, (side ? B1 : A1)[i], sm(k1));
      return k4 > 0 ? lerp(p1, HE[side ? (i === 0 ? 3 : 2) : i], sm(k4)) : p1;
    };
    [0, 1].forEach((side) => [0, 1, 2].forEach((i) => {
      const p = pos(i, side), isN = i === 1, kind = isN ? F.mixColor(F.el('p+'), F.el('n0'), clamp01((k1 - 0.4) / 0.3)) : F.el('p+');
      ball(ctx, p[0], p[1], RHO, kind);
      out.push({ x: p[0], y: p[1], r: RHO, name: isN && k1 >= 0.7 ? 'a neutron, made from a proton in the ¹H + ¹H reaction' : 'a proton' });
    }));
    /* the two electrons and the positrons they meet */
    [0, 1].forEach((side) => {
      const born = k1 >= 0.5, gone = k2 >= 0.5, m = MEET[side];
      if (!gone) {
        const ep = k2 > 0 ? lerp(E0[side], m, sm(k2 / 0.5)) : E0[side];
        dot(ctx, ep[0], ep[1], F.el('e-'), true, 7); out.push({ x: ep[0], y: ep[1], r: 10, name: 'an electron' });
        if (born) {
          const birth = side ? [1170, 210] : [770, 210];
          const pp = k2 > 0 ? lerp(POS[side], m, sm(k2 / 0.5)) : lerp(birth, POS[side], sm((k1 - 0.5) / 0.5));
          dot(ctx, pp[0], pp[1], F.el('e+'), true, 7); out.push({ x: pp[0], y: pp[1], r: 10, name: 'a positron from the ¹H + ¹H reaction' });
        }
      }
      if (gone && k2 < 1) {
        const g = (k2 - 0.5) / 0.5;
        if (g < 0.3) { ctx.save(); ctx.globalAlpha *= 1 - g / 0.3; ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(m[0], m[1], 10 + 40 * g, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
        [[1, 0.25], [-1, -0.25]].forEach(([ux, uy]) => { const L = Math.hypot(ux, uy), D = 420 * g; wave(ctx, m[0] + ux / L * D, m[1] + uy / L * D, ux / L, uy / L, 40, 5, F.el('gamma'), 3); out.push({ x: m[0] + ux / L * (D + 20), y: m[1] + uy / L * (D + 20), r: 18, name: 'a 0.511-MeV γ ray from an annihilation' }); });
      }
      /* the neutrino, leaving at once */
      if (k1 >= 0.5 && k1 < 1) {
        const g = (k1 - 0.5) / 0.5, birth = side ? [1170, 210] : [770, 210], ux = side ? 0.5 : -0.5, D = 400 * g;
        const x = birth[0] + ux * D, y = birth[1] - 0.87 * D;
        if (y > P.t) { dot(ctx, x, y, F.el('nu'), true, 6); line(ctx, x - ux * 40, y + 0.87 * 40, x, y, alpha(F.el('nu'), 0.5), 2); out.push({ x, y, r: 12, name: 'an electron neutrino, leaving the Sun' }); }
      }
      /* the γ of the ¹H + ²H reaction */
      if (k3 >= 0.5 && k3 < 1) {
        const g = (k3 - 0.5) / 0.5, o = side ? [1170, 225] : [770, 225], ux = side ? 0.8 : -0.8, uy = 0.6, D = 380 * g;
        wave(ctx, o[0] + ux * D, o[1] + uy * D, ux, uy, 40, 5, F.el('gamma'), 3);
        out.push({ x: o[0] + ux * (D + 20), y: o[1] + uy * (D + 20), r: 18, name: 'the γ ray of the ¹H + ²H reaction' });
      }
    });
    if (k4 > 0.4 && k4 < 0.8) { const g = (k4 - 0.4) / 0.4; ctx.save(); ctx.globalAlpha *= 1 - g; ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(970, 273, 40 + 80 * g, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
    return out;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = st.v, ink = PAL.ink, EC = C('energy'), stop = Math.round(s);
    hits = [];
    topline(ctx, HEAD[stop]);

    /* the Sun */
    const k5 = clamp01(s - 4), k6 = clamp01(s - 5), rk = RK * (1 + 0.14 * sm(k5) - 0.14 * sm(k6));
    ctx.save(); ctx.fillStyle = alpha(ink, 0.06); ctx.strokeStyle = alpha(ink, 0.5); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(SX, SY, RS, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(ink, 0.16); ctx.beginPath(); ctx.arc(SX, SY, rk, 0, 2 * Math.PI); ctx.fill();
    ctx.strokeStyle = alpha(ink, 0.7); ctx.lineWidth = 6; ctx.setLineDash([3, 7]); ctx.beginPath(); ctx.arc(SX, SY, rk + 6, 0, 2 * Math.PI); ctx.stroke();
    ctx.restore();
    text(ctx, 'He', SX, SY, ink, { size: 22, align: 'center' });
    text(ctx, 'H', SX - 0.62 * RS, SY - 0.55 * RS, ink, { size: 22, align: 'center' });
    label(ctx, 'fusion', SX, SY - rk - 6, { side: 'above', size: 18, color: ink, gap: 72, weight: 400, leader: true });
    hits.push({ x: SX, y: SY, r: rk - 8, name: 'the helium core' });
    hits.push({ x: SX - (rk + 6), y: SY, r: 10, name: 'the boundary of the helium core, where fusion runs' });
    hits.push({ x: SX, y: SY - 0.8 * RS, r: 30, name: 'the hydrogen of the outer Sun' });

    /* the feedback: the core expanding, then contracting */
    [[k5, 1], [k6, -1]].forEach(([k, dir]) => {
      const a = Math.sin(Math.PI * k);
      if (a < 0.02) return;
      for (let i = 0; i < 8; i++) {
        const g = (i + 0.5) * Math.PI / 4, cx = Math.cos(g), cyy = -Math.sin(g), r0 = rk + 22, r1 = rk + 62;
        ctx.save(); ctx.globalAlpha *= a;
        if (dir > 0) arrow(ctx, SX + cx * r0, SY + cyy * r0, SX + cx * r1, SY + cyy * r1, ink, 4);
        else arrow(ctx, SX + cx * (r1 + 30), SY + cyy * (r1 + 30), SX + cx * (r0 + 6), SY + cyy * (r0 + 6), ink, 4);
        ctx.restore();
      }
      hits.push({ x: SX, y: SY - rk - 40, r: 24, name: dir > 0 ? 'the core expanding, which cools it' : 'the core contracting, which heats it' });
    });

    /* the spot blown up, and its ties */
    const mx = mkx(rk), my = mky(rk);
    ctx.save(); ctx.strokeStyle = alpha(ink, 0.8); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(mx, my, 10, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, mx + 8, my - 6, P.l, P.t, alpha(ink, 0.3), 2, [6, 6]);
    line(ctx, mx + 8, my + 6, P.l, P.b, alpha(ink, 0.3), 2, [6, 6]);

    /* the neutrinos crossing the Sun, the γ energy wandering */
    const kv = clamp01((s - 0.5) / 0.5);
    if (kv > 0) {
      [-1.65, -2.1].forEach((a) => {
        const L = (RS + 30) * F.ease.out(kv), ux = Math.cos(a), uy = -Math.sin(a);
        line(ctx, mx, my, mx + ux * (L - 8), my + uy * (L - 8), alpha(F.el('nu'), 0.6), 2);
        dot(ctx, mx + ux * L, my + uy * L, F.el('nu'), true, 6);
        hits.push({ x: mx + ux * L, y: my + uy * L, r: 12, name: 'an electron neutrino, out of the Sun in less than two seconds' });
      });
    }
    const nw = Math.round(clamp01((s - 1.5) / 2.5) * (WALK.length - 1));
    if (nw > 0) {
      ctx.save(); ctx.strokeStyle = F.el('gamma'); ctx.lineWidth = 2; ctx.beginPath();
      WALK.slice(0, nw + 1).forEach(([x, y], i) => { if (i) ctx.lineTo(mx + x, my + y); else ctx.moveTo(mx + x, my + y); }); ctx.stroke(); ctx.restore();
      const [hx, hy] = WALK[nw], [px, py] = WALK[nw - 1];
      arrow(ctx, mx + px, my + py, mx + hx, my + hy, F.el('gamma'), 3);
      hits.push({ x: mx + hx, y: my + hy, r: 14, name: 'the energy of the γ rays, about 32,000 years from the surface' });
    }

    /* the blowup */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(ink, 0.6); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(P.l, P.t, P.r - P.l, P.b - P.t, 10); ctx.fill(); ctx.stroke(); ctx.clip();
    ctx.fillStyle = alpha(ink, 0.04); ctx.fillRect(P.l, P.t, P.r - P.l, P.b - P.t);
    hits.push(...particles(ctx, Math.min(s, 4)));
    ctx.restore();
    const rest = Math.max(0, 1 - 8 * Math.abs(s - Math.round(s)));
    if (rest > 0) F.faded(ctx, rest, [0, 0], () => {
      if (stop === 1) [[770, 210], [1170, 210]].forEach(([x, y]) => label(ctx, '²H', x, y, { side: 'above', size: 20, color: ink, gap: 34, weight: 400 }));
      if (stop === 3) [[770, 225], [1170, 225]].forEach(([x, y]) => label(ctx, '³He', x, y, { side: 'above', size: 20, color: ink, gap: 50, weight: 400 }));
      if (stop >= 4) { label(ctx, '⁴He', 970, 273, { side: 'above', size: 20, color: ink, gap: 66, weight: 400 }); OUT.forEach(([x, y]) => label(ctx, '¹H', x, y, { side: 'right', size: 20, color: ink, gap: 26, weight: 400 })); }
    });
    const LG = [['p+', 'proton'], ['n0', 'neutron'], ['e-', 'e⁻'], ['e+', 'e⁺'], ['nu', 'vₑ'], ['gamma', 'γ']];
    LG.forEach(([k, s2], i) => {
      const x = P.l + 34 + i * 118, y = P.b - 26;
      if (k === 'gamma') wave(ctx, x - 14, y, 1, 0, 28, 4, F.el('gamma'), 3);
      else if (k === 'p+' || k === 'n0') ball(ctx, x, y, 10, F.el(k));
      else dot(ctx, x, y, F.el(k), true, 7);
      text(ctx, s2, x + 20, y, ink, { size: 18, align: 'left' });
    });

    /* the tally */
    const X = (e) => TB.l + (TB.r - TB.l) * e / 27;
    let at = 0;
    SEG.forEach((e, i) => {
      const g = sm(clamp01((s - i - 0.4) / 0.5)), w = e * g;
      if (w > 0) {
        ctx.save(); ctx.fillStyle = alpha(EC, 0.45 + 0.15 * (i % 2)); ctx.strokeStyle = EC; ctx.lineWidth = 2;
        ctx.fillRect(X(at), TB.y - 14, X(at + w) - X(at), 28); ctx.strokeRect(X(at), TB.y - 14, X(at + w) - X(at), 28); ctx.restore();
        hits.push({ x: X(at + w / 2), y: TB.y, r: Math.max(10, (X(at + w) - X(at)) / 2), name: SEGN[i] });
      }
      at += w;
    });
    line(ctx, TB.l, TB.y + 20, TB.r, TB.y + 20, alpha(ink, 0.4), 1.5);
    for (let e = 0; e <= 25; e += 5) { line(ctx, X(e), TB.y + 20, X(e), TB.y + 28, PAL.muted, 2); text(ctx, String(e), X(e), TB.y + 44, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'E (MeV)', TB.l - 16, TB.y, EC, { size: 20, weight: 600, align: 'right' });

    const n = Math.min(4, Math.floor(s + 0.1));
    ro.set(n === 0 ? '\\mk{E}{\\kE} = \\mk{s}{0}' : '\\mk{E}{\\kE} = ' + TERMS.slice(0, n).join(' + ') + ' = \\mk{s}{' + SUMS[n - 1] + '\\ \\text{MeV}}', undefined, { form: n, values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
