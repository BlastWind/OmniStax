/* Figures for section 31.7 Tunneling.
   The page binds energy (the marble's and the α's), position (the barrier's
   thickness, the distance from the nucleus, the probe's gap), time (the
   half-life) and current (the tunneling current). The wave function is no
   category and is ink. The α is two protons F.el('p+') and two neutrons
   F.el('n0'). The marble of Figure 31.26 is the section's referent. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.7'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, dot, text, topline, label, axes, hover, readout, hbracket, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
const sig2 = (x) => x >= 10 ? fmt(x, 1) : x >= 1 ? fmt(x, 1) : x >= 0.1 ? fmt(x, 2) : x >= 0.01 ? fmt(x, 3) : fmt(x, 4);

/* =====================================================================
   FIGURE 31.26 · sim-marble-bowl · moving · flat (rule 28.1)
   A section through the volcano, 900 px to the metre: a circular bowl of
   radius 0.16 m, 0.100 m deep, between two sharp peaks, and flanks falling
   1.2 m per metre to a base 0.25 m below the bowl's floor. A 20-g marble
   starts at the floor with kinetic energy KE and slides along the profile
   (s'' = −g dy/ds, rolling ignored), slowed four times. It reaches
   h = KE/mg; trapped, it swings twice and loops with no hold; over the rim
   (19.6 mJ) or into the tunnel (floor 0.060 m, roof 0.090 m) it rolls to
   the base and holds 1.2 s. Everything at time t follows from t alone.
===================================================================== */
(function () {
  const H = 520, M = 0.020, G = 9.80, RB = 0.16, DEPTH = 0.100, SLOPE = 1.2, BASE = -0.25;
  const TF = 0.060, TR = 0.090, SC = 900, CX = 600, YB = 240, RPX = 12, RATE = 0.25;
  const XR = Math.sqrt(RB * RB - (RB - DEPTH) * (RB - DEPTH));
  const XF = XR + (DEPTH - BASE) / SLOPE;
  const bowl = (x) => RB - Math.sqrt(Math.max(0, RB * RB - x * x));
  const bowlX = (y) => Math.sqrt(Math.max(0, RB * RB - (RB - y) * (RB - y)));
  const flank = (y) => XR + (DEPTH - y) / SLOPE;
  const PE_RIM = M * G * DEPTH * 1000;
  const d = sim('sim-marble-bowl', H);
  const KE = ctl(d.controls, { label: '\\kKE', cls: 'energy', min: 5, max: 30, step: 0.1, value: 15, unit: 'mJ', dec: 1, onInput: reset, aria: 'the marble’s kinetic energy at the bottom of the bowl', specials: [{ at: PE_RIM, label: 'rim' }] });
  const rim = choice(d.controls, { label: '\\text{rim}', options: [{ value: 'solid', label: 'solid' }, { value: 'tunnel', label: 'tunnel' }], value: 'solid', aria: 'whether a tunnel runs through the rim', onInput: reset });
  const ro = readout(d);
  let hits = [], run = null;
  hover(d.stage, () => hits);
  const cy = cycle(() => (run ? run.T : 1), 0);
  function reset() { run = null; cy.reset(); }
  const sx = (x) => CX + x * SC, sy = (y) => YB - y * SC;

  function path(tunnel) {
    const pts = [[-XF, BASE], [-XR, DEPTH]], x1 = tunnel ? bowlX(TF) : XR;
    for (let i = 1; i <= 80; i++) { const x = -XR + (x1 + XR) * i / 80; pts.push([x, bowl(x)]); }
    pts.push(tunnel ? [flank(TF), TF] : [XR, DEPTH]);
    pts.push([XF, BASE]);
    const s = [0];
    for (let i = 1; i < pts.length; i++) s.push(s[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    return { pts, s, L: s[s.length - 1] };
  }
  function at(p, s) {
    let i = 1; while (i < p.s.length - 1 && p.s[i] < s) i++;
    const k = (s - p.s[i - 1]) / (p.s[i] - p.s[i - 1] || 1), a = p.pts[i - 1], b = p.pts[i];
    const ds = p.s[i] - p.s[i - 1] || 1;
    return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, ux: (b[0] - a[0]) / ds, uy: (b[1] - a[1]) / ds };
  }
  function simulate() {
    const ke = KE.v / 1000, h = ke / (M * G), tunnel = rim.value === 'tunnel';
    const escape = h >= DEPTH - 1e-9 || (tunnel && h >= TF);
    const p = path(tunnel);
    let sB = 0; { let lo = p.s[1], hi = p.s[p.s.length - 2]; for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if (at(p, m).x < 0) lo = m; else hi = m; } sB = (lo + hi) / 2; }
    const dir = escape ? 1 : -1, dt = 1 / 4000, rec = 1 / 240, out = [sB];
    let s = sB, v = dir * Math.sqrt(2 * ke / M), t = 0, next = rec, passes = 0, prev = s;
    for (let k = 0; k < 400000; k++) {
      const q = at(p, s);
      if (escape) { v = Math.sqrt(Math.max(2 * G * (h - q.y), 0.0016)); s += v * dt; }
      else { v += -G * q.uy * dt; s += v * dt; }
      t += dt;
      if (!escape && prev > sB && s <= sB) { passes++; if (passes === 2) { out.push(sB); break; } }
      prev = s;
      if (t >= next) { out.push(s); next += rec; }
      if (escape && s >= p.L - RPX / SC) { out.push(p.L - RPX / SC); break; }
    }
    return { p, h, escape, tunnel, rec, out, T: (out.length - 1) * rec };
  }

  function draw() {
    const { ctx } = begin(d.c);
    if (!run) run = simulate();
    const t = cy.now(), ke = KE.v, h = run.h, MAR = F.ref('marble');
    hits = [];
    const cmp = Math.abs(ke - PE_RIM) < 1e-9 ? '=' : ke < PE_RIM ? '<' : '>';
    topline(ctx, run.escape
      ? (h >= DEPTH - 1e-9
        ? 'With ' + fmt(ke, 1) + ' mJ the marble clears the 10.0-cm rim and gains kinetic energy rolling downhill.'
        : 'With ' + fmt(ke, 1) + ' mJ the marble reaches ' + fmt(h * 100, 1) + ' cm, above the tunnel’s floor at 6.0 cm, and escapes through it.')
      : 'With ' + fmt(ke, 1) + ' mJ the marble reaches ' + fmt(h * 100, 1) + ' cm, ' + (run.tunnel ? 'below the tunnel' : 'short of the 10.0-cm rim') + ', and is trapped forever.');

    /* the volcano in section, with the tunnel cut through its right rim */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(sx(-XF), sy(BASE)); ctx.lineTo(sx(-XR), sy(DEPTH));
    for (let i = 1; i <= 80; i++) { const x = -XR + 2 * XR * i / 80; ctx.lineTo(sx(x), sy(bowl(x))); }
    ctx.lineTo(sx(XF), sy(BASE)); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, 120, sy(BASE), 1280, sy(BASE), alpha(PAL.ink, 0.5), 2);
    if (run.tunnel) {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.beginPath();
      ctx.moveTo(sx(bowlX(TF)), sy(TF)); ctx.lineTo(sx(flank(TF)), sy(TF)); ctx.lineTo(sx(flank(TR)), sy(TR)); ctx.lineTo(sx(bowlX(TR)), sy(TR)); ctx.closePath(); ctx.fill(); ctx.restore();
      line(ctx, sx(bowlX(TF)), sy(TF), sx(flank(TF)), sy(TF), alpha(PAL.ink, 0.75), 2.5);
      line(ctx, sx(bowlX(TR)), sy(TR), sx(flank(TR)), sy(TR), alpha(PAL.ink, 0.75), 2.5);
      label(ctx, 'tunnel', sx(flank((TF + TR) / 2)) + 4, sy((TF + TR) / 2), { side: 'right', size: 20, color: PAL.ink, gap: 60 });
      hits.push({ x: sx((bowlX(TF) + flank(TF)) / 2), y: sy((TF + TR) / 2), r: 18, name: 'a tunnel through the rim, its floor 6.0 cm above the bottom of the bowl' });
    }
    label(ctx, 'rim', sx(XR), sy(DEPTH) - 4, { side: 'above', size: 20, color: PAL.ink, gap: 22 });
    hits.push({ x: sx(XR), y: sy(DEPTH), r: 16, name: 'the rim, 10.0 cm above the bottom of the bowl' });

    /* the height the marble's energy lets it reach */
    if (h < DEPTH) {
      const xh = bowlX(h);
      line(ctx, sx(-xh), sy(h), sx(xh), sy(h), alpha(PAL.ink, 0.55), 2, [10, 10]);
      label(ctx, 'reach', sx(-xh) - 4, sy(h), { side: 'left', size: 20, color: PAL.ink, gap: 40 });
    }

    /* the marble, resting on the profile */
    const out = run.out, i = Math.min(out.length - 1, t / run.rec), i0 = Math.floor(i), k = i - i0;
    const s = out[i0] + ((out[Math.min(out.length - 1, i0 + 1)] ?? out[i0]) - out[i0]) * k;
    const q = at(run.p, s), mx = sx(q.x) - q.uy * RPX, my = sy(q.y) - q.ux * RPX;
    ctx.save(); ctx.fillStyle = MAR; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(mx, my, RPX, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    hits.push({ x: mx, y: my, r: 18, name: 'the marble' });

    ro.set('\\kKE = ' + fmt(ke, 1) + '\\ \\text{mJ} ' + cmp + ' \\kPEg(\\text{rim}) = ' + fmt(PE_RIM, 1) + '\\ \\text{mJ}', '', { form: 'cmp' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => RATE), draw });
})();

/* =====================================================================
   FIGURE 31.27 + 31.28 · sim-alpha-tunneling · moving · flat (rule 28.1)
   The potential energy of an α at distance r from the centre of ²³⁵U, the
   daughter of Example 31.2's ²³⁹Pu: a well of −30 MeV inside
   R = 1.2 fm (235^{1/3} + 4^{1/3}) = 9.3 fm, edge 0.2 fm wide, joined to the
   Coulomb energy (1.44 MeV·fm)(2)(92)/r outside. Axes fixed: r 0 to 70 fm
   (the far turning point is 66.2 fm at 4.0 MeV), PE −40 to 30 MeV. The
   barrier at E runs from r_in to r_out; G = ∫ √(2μ(PE − E))/ħc dr over it,
   μc² = 3665 MeV. Gamow's half-life: ln 2 / (f e^{−2G}) with f = v/(2 r_in).
   The wave function is drawn beneath on the same r: cos of the WKB phase
   inside, peaking at r_in; inside the barrier it falls as exp of the same
   integral scaled so the tail outside is 10^{−(G/ln10)/24} of its height
   (the true factor e^{−G} is in the note); outside, the WKB phase from
   r_out. The α rattles inside for 1.6 s, is gone from r_in and appears at
   r_out, and rolls out at a speed ∝ √(E − PE); the rattle inside is drawn
   at 0.32 s a round trip.
===================================================================== */
(function () {
  const H = 740, HC = 197.327, MU = 3727.38 * 235 / 239, MA = 3727.38, KZZ = 1.43996 * 2 * 92;
  const R = 1.2 * (Math.cbrt(235) + Math.cbrt(4)), V0 = 30, AW = 0.2, AMP = 1, TIN = 1.6, CS = 2.6;
  const BOX = { l: 130, r: 1290, t: 110, b: 400 }, WB = { l: 130, r: 1290, t: 490, b: 650 };
  const V = (r) => { const S = 1 / (1 + Math.exp(-(r - R) / AW)); return -V0 + (KZZ / Math.max(r, 0.5) + V0) * S; };
  const d = sim('sim-alpha-tunneling', H);
  const E = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 4, max: 9.5, step: 0.01, value: 5.25, unit: 'MeV', dec: 2, onInput: reset, aria: 'the energy of the α particle' });
  const ro = readout(d);
  let hits = [], m = null;
  hover(d.stage, () => hits);
  const cy = cycle(() => (m ? m.T : 4), 1.2);
  function reset() { m = null; cy.reset(); }

  function model() {
    const e = E.v;
    let lo = R - 3, hi = R + 4;
    for (let i = 0; i < 60; i++) { const c = (lo + hi) / 2; if (V(c) < e) lo = c; else hi = c; }
    const rin = (lo + hi) / 2;
    lo = R + 2; hi = 200;
    for (let i = 0; i < 60; i++) { const c = (lo + hi) / 2; if (V(c) > e) lo = c; else hi = c; }
    const rout = (lo + hi) / 2;
    const k = (r) => Math.sqrt(Math.max(0, 2 * MU * (e - V(r)))) / HC, kap = (r) => Math.sqrt(Math.max(0, 2 * MU * (V(r) - e))) / HC;
    const N = 600;
    let Gm = 0; const cum = [0];
    for (let i = 0; i < N; i++) { const r = rin + (rout - rin) * (i + 0.5) / N; Gm += kap(r) * (rout - rin) / N; cum.push(Gm); }
    const dec = Gm / Math.LN10, tail = Math.pow(10, -dec / 24), scale = -Math.log(tail) / Gm;
    const phIn = [0], phOut = [0], NI = 400, NO = 600;
    for (let i = 0; i < NI; i++) { const r = rin * (i + 0.5) / NI; phIn.push(phIn[i] + k(r) * rin / NI); }
    for (let i = 0; i < NO; i++) { const r = rout + (70 - rout) * (i + 0.5) / NO; phOut.push(phOut[i] + k(r) * (70 - rout) / NO); }
    const look = (arr, a, b, r) => { const u = (r - a) / (b - a) * (arr.length - 1), j = Math.max(0, Math.min(arr.length - 2, Math.floor(u))); return arr[j] + (arr[j + 1] - arr[j]) * (u - j); };
    const psi = (r) => {
      if (r <= rin) return AMP * Math.cos(look(phIn, 0, rin, r) - phIn[NI]);
      if (r <= rout) return AMP * Math.exp(-scale * look(cum, rin, rout, r));
      return AMP * tail * Math.cos(look(phOut, rout, 70, r));
    };
    const v = Math.sqrt(2 * e / MA) * 2.998e8, f = v / (2 * rin * 1e-15), logT = Math.log10(Math.LN2 / f) + 2 * Gm / Math.LN10;
    const walk = [rout + 0.02], dt = 1 / 240;
    for (let i = 0; i < 2400 && walk[walk.length - 1] < 69; i++) { const r = walk[walk.length - 1]; walk.push(r + CS * Math.sqrt(Math.max(0.0004, e - V(r))) * dt * 10); }
    return { e, rin, rout, psi, Gm, dec, logT, walk, dt, T: TIN + 0.15 + (walk.length - 1) * dt };
  }

  function alphaAt(ctx, x, y, a) {
    ctx.save(); ctx.globalAlpha *= a;
    [[-6, -6, 'p+'], [6, 6, 'p+'], [6, -6, 'n0'], [-6, 6, 'n0']].forEach(([dx, dy, s]) => {
      ctx.fillStyle = F.el(s); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(x + dx, y + dy, 8, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    });
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    if (!m) m = model();
    const t = cy.now(), EN = C('energy'), PO = C('position');
    hits = [];
    const th = Math.round(m.logT);
    topline(ctx, 'A ' + fmt(m.e, 2) + '-MeV α faces a barrier ' + fmt(m.rout - m.rin, 1) + ' fm thick, and its half-life is of order 10' + sup(th) + ' s.');

    const { X, Y } = axes(ctx, BOX, [0, 70], [-40, 30], { nx: 7, ny: 7, yl: 'PE (MeV)', yc: EN });
    const W = axes(ctx, WB, [0, 70], [-1.25, 1.25], { nx: 7, ny: 2, xl: 'r (fm)', xc: PO, yl: 'wave function', yc: PAL.ink, fy: () => '' });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(X(m.rin), WB.t, X(m.rout) - X(m.rin), WB.b - WB.t); ctx.restore();
    [m.rin, m.rout].forEach((r) => line(ctx, X(r), Y(m.e), X(r), WB.b, alpha(PAL.ink, 0.35), 2, [4, 8]));
    curve(ctx, V, 0, 70, X, Y, EN, 5, 400);
    hits.push({ x: X(4), y: Y(-30), r: 22, name: 'the nuclear well: inside the nucleus the attractive nuclear force binds the α' });
    hits.push({ x: X(30), y: Y(V(30)), r: 22, name: 'the barrier: outside the nucleus the α feels the repulsive Coulomb force' });
    label(ctx, 'attractive nuclear force', X(R) + 4, Y(-24), { side: 'right', size: 18, color: PAL.ink, gap: 50 });
    label(ctx, 'repulsive Coulomb force', X(24), Y(V(24)) - 2, { side: 'above', size: 18, color: PAL.ink, gap: 40 });

    /* the α's energy above, and the wave function beneath on the same r */
    line(ctx, BOX.l, Y(m.e), BOX.r, Y(m.e), alpha(EN, 0.75), 3, [10, 10]);
    text(ctx, 'E', BOX.r + 12, Y(m.e), EN, { size: 24, weight: 600, align: 'left' });
    curve(ctx, m.psi, 0.2, 70, W.X, W.Y, PAL.ink, 4, 900);
    hits.push({ x: X((m.rin + m.rout) / 2), y: W.Y(0.3), r: 24, name: 'inside the barrier the wave function decreases exponentially' });
    hits.push({ x: X(Math.min(68, m.rout + 6)), y: W.Y(0), r: 20, name: 'the wave function outside the barrier: small but finite' });

    /* the tunnel: the part of the barrier above E */
    hbracket(ctx, X(m.rin), X(m.rout), Y(-8), PO, 'd', { side: 'below' });
    hits.push({ x: X((m.rin + m.rout) / 2), y: Y(-8), r: 20, name: 'the barrier’s thickness d at the α’s energy' });

    /* the α: rattling inside, then outside without having crossed */
    if (t < TIN) {
      const lo = 1.2, hi = m.rin - 0.9, per = 0.32;
      const u = ((t + 0.25 * per) % per) / per, r = lo + (hi - lo) * (u < 0.5 ? 2 * u : 2 - 2 * u);
      alphaAt(ctx, X(r), Y(m.e), 1);
      hits.push({ x: X(r), y: Y(m.e), r: 18, name: 'the α particle, two protons and two neutrons, inside the nucleus' });
    } else if (t >= TIN + 0.15) {
      const j = Math.min(m.walk.length - 1, Math.round((t - TIN - 0.15) / m.dt)), r = m.walk[j];
      alphaAt(ctx, X(r), Y(m.e), Math.min(1, (t - TIN - 0.15) / 0.12));
      hits.push({ x: X(r), y: Y(m.e), r: 18, name: 'the α particle, outside the barrier' });
    }

    ro.set('\\kd = ' + fmt(m.rout, 1) + '\\ \\text{fm} - ' + fmt(m.rin, 1) + '\\ \\text{fm} = ' + fmt(m.rout - m.rin, 1) + '\\ \\text{fm}',
      'Outside the barrier the true wave function is $10^{-' + Math.round(m.dec) + '}$ of its height inside; it is drawn far larger.', { form: 'd' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM · sim-stm-scan · moving · flat (rule 28.1)
   A row of twelve atoms 0.30 nm apart, 250 px to the nanometre; the
   surface rises 0.10 nm over each atom. The probe's tip is held at
   y = 210 and the surface sits d below it over an atom, so the gap is
   g(x) = d + 0.10 sin²(π(x − 0.15)/0.30) nm. The current is
   I = I₀e^{−2κg} with κ = 10 nm⁻¹ and I₀ = (5.0 nA)e^{7} = 5.5 μA, so
   5.0 nA at the default 0.35 nm. The probe crosses 0.05 to 3.55 nm in
   5.0 s and holds 1.2 s. The graph's x axis is the scene's (0 to 3.6 nm),
   I from 0 to 15 nA fixed (13.6 nA at 0.30 nm).
===================================================================== */
(function () {
  const H = 740, S = 250, X0 = 250, YT = 210, T = 5, K2 = 20, I0 = 5.0 * Math.exp(7), CORR = 0.10;
  const BOX = { l: X0, r: X0 + 3.6 * S, t: 520, b: 660 };
  const d = sim('sim-stm-scan', H);
  const gap = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.3, max: 0.7, step: 0.01, value: 0.35, unit: 'nm', dec: 2, onInput: reset, aria: 'the gap between the probe’s tip and the tops of the atoms' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const g = (x) => gap.v + CORR * Math.pow(Math.sin(Math.PI * (x - 0.15) / 0.30), 2);
  const I = (x) => I0 * Math.exp(-K2 * g(x));

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), dv = gap.v, PO = C('position'), CU = C('current');
    const top = YT + dv * S, xs = (x) => X0 + x * S, ys = (x) => top + (g(x) - dv) * S;
    const xt = 0.05 + 3.5 * Math.min(1, t / T);
    hits = [];
    topline(ctx, 'With the tip ' + fmt(dv, 2) + ' nm above the atoms, the current peaks at ' + sig2(I0 * Math.exp(-K2 * dv)) + ' nA over each one.');

    /* the surface: atoms under a skin that rises over each one */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.beginPath(); ctx.moveTo(xs(0), top + 72);
    for (let i = 0; i <= 360; i++) { const x = 3.6 * i / 360; ctx.lineTo(xs(x), ys(x)); }
    ctx.lineTo(xs(3.6), top + 72); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= 360; i++) { const x = 3.6 * i / 360; if (i) ctx.lineTo(xs(x), ys(x)); else ctx.moveTo(xs(x), ys(x)); }
    ctx.stroke(); ctx.restore();
    for (let i = 0; i < 12; i++) {
      const x = 0.15 + 0.30 * i;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.14); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(xs(x), top + 34, 26, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
      hits.push({ x: xs(x), y: top + 34, r: 26, name: 'an atom of the surface' });
    }
    label(ctx, 'surface atoms', xs(0.15) - 4, top + 34, { side: 'left', size: 20, color: PAL.ink, gap: 70 });

    /* the probe and the gap under its tip */
    const px = xs(xt);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(px - 30, 96); ctx.lineTo(px + 30, 96); ctx.lineTo(px + 6, YT); ctx.lineTo(px - 6, YT); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, px, YT + 4, px, ys(xt) - 4, PO, 3);
    line(ctx, px - 8, YT + 4, px + 8, YT + 4, PO, 3);
    line(ctx, px - 8, ys(xt) - 4, px + 8, ys(xt) - 4, PO, 3);
    hits.push({ x: px, y: 150, r: 26, name: 'the probe' });
    hits.push({ x: px, y: (YT + ys(xt)) / 2, r: 14, name: 'the gap, ' + fmt(g(xt), 2) + ' nm, that the electrons tunnel across' });
    line(ctx, px, ys(xt) + 70, px, BOX.b, alpha(PAL.ink, 0.25), 2, [4, 8]);

    /* the current traced as the probe goes */
    const { X, Y } = axes(ctx, BOX, [0, 3.6], [0, 15], { nx: 6, ny: 3, xl: 'x (nm)', xc: PAL.ink, yl: 'I (nA)', yc: CU, fx: (v) => fmt(v, 1) });
    curve(ctx, I, 0, xt, X, Y, CU, 4, Math.max(2, Math.round(360 * xt / 3.6)));
    pinned(ctx, BOX, X, Y, xt, I(xt), CU);

    ro.set('\\kI = I_0\\,e^{-2\\kappa \\kd} = (5.5\\ \\mu\\text{A})\\,e^{-(20\\ \\text{nm}^{-1})(' + fmt(dv, 2) + '\\ \\text{nm})} = ' + sig2(I0 * Math.exp(-K2 * dv)) + '\\ \\text{nA}',
      'Between atoms the gap is 0.10 nm wider and $\\kI$ is $e^{2} = 7.4$ times smaller.', { form: 'i' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
