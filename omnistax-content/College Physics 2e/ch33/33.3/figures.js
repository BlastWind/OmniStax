/* Figures for section 33.3 Accelerators Create Matter from Energy.
   The page binds energy, voltage, magnetic-field, electric-field, velocity, position, mass, charge
   and time. Protons are F.el('p+'), electrons F.el('e-'), positrons F.el('e+'); an antiproton is the
   proton's hue as an open marker. Referents: the cyclotron's dees, the synchrotron's tubes, the
   Fermilab rings and SLAC, each drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['33.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, dot, arrow, text, topline, label, hover, readout, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sci = (v, s = 3) => {
  const e = Math.floor(Math.log10(Math.abs(v)) + 1e-9), m = v / 10 ** e;
  return fmt(m, s - 1) + '\\times 10^{' + e + '}';
};
function cross(ctx, x, y, r, color) {
  dot(ctx, x, y, color, false, r);
  const k = r * 0.62;
  line(ctx, x - k, y - k, x + k, y + k, color, 2.5);
  line(ctx, x - k, y + k, x + k, y - k, color, 2.5);
}

/* =====================================================================
   FIGURE 33.8 · sim-cyclotron · moving · flat (rule 28.1)
   B = 1.00 T, so every half turn takes πm/qB = 32.8 ns whatever its radius; the gap takes 3 ns
   of it. The protons leave at 1.20 MeV, on r = 0.158 m, drawn 200 units. Crossing n leaves the
   proton with n qV_gap, so the semicircle after it has radius 200 √(n/N), N the whole number of
   crossings below 1.20 MeV / qV_gap (12 at 100 kV, 4 at 300 kV). The gap voltage is
   V_gap cos 2π(t − 1.5 ns)/T, at its peak, with the sign the crossing needs, at every crossing.
   Ranges fixed: t 0 to 450 ns (12 crossings exit at 410 ns), KE 0 to 1.40 MeV.
===================================================================== */
(function () {
  const H = 640, CX = 330, CY = 365, RD = 230, GX = 22, RN = 200, EXL = 160;
  const HP = 32.8, TAU = 3, SEM = HP - TAU, RATE = 70, KMAX = 1200;
  const GB = { l: 720, r: 1320, t: 150, b: 520 };
  const d = sim('sim-cyclotron', H);
  const V = ctl(d.controls, { label: '\\kVgap', cls: 'voltage', min: 100, max: 300, step: 10, value: 150, unit: 'kV', dec: 0, onInput: reset, aria: 'the voltage across the gap' });
  const crossings = () => Math.floor(KMAX / V.v + 1e-9);

  function plan() {
    const N = crossings(), r = (n) => RN * Math.sqrt(n / N), s = (n) => (n % 2 ? -1 : 1);
    let off = s(N) * r(N);
    for (let k = 1; k < N; k++) off += 2 * s(k) * r(k);
    const Y = [CY - off];
    for (let n = 1; n <= N; n++) Y.push(Y[n - 1] + 2 * s(n) * r(n));
    const exitT = (N - 1) * HP + TAU + SEM / 2, vN = Math.PI * r(N) / SEM;
    return { N, r, s, Y, exitT, vN, end: exitT + EXL / vN };
  }
  const cy = cycle(() => plan().end, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  /* where the proton is at time t, which way it moves, and the radius whose speed it has */
  function where(P, t) {
    const n = Math.min(P.N, Math.floor(t / HP) + 1), t0 = (n - 1) * HP, odd = n % 2 === 1, dir = odd ? 1 : -1;
    if (t - t0 < TAU) {
      const u = (t - t0) / TAU;
      return { x: CX - dir * GX + 2 * dir * GX * u, y: P.Y[n - 1], ux: dir, uy: 0, rr: P.r(n) };
    }
    const rn = P.r(n), cx = CX + dir * GX, cyc = P.Y[n - 1] + P.s(n) * rn;
    let u = (t - t0 - TAU) / SEM;
    if (n === P.N && u > 0.5) {
      const run = (t - P.exitT) * P.vN, x = cx + dir * rn;
      return { x, y: cyc - dir * run, ux: 0, uy: -dir, rr: rn };
    }
    u = Math.min(1, u);
    const sn = Math.sin(Math.PI * u), cs = Math.cos(Math.PI * u);
    return odd
      ? { x: cx + rn * sn, y: cyc + rn * cs, ux: cs, uy: -sn, rr: rn }
      : { x: cx - rn * sn, y: cyc - rn * cs, ux: -cs, uy: sn, rr: rn };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const P = plan(), t = cy.now(), Vk = V.v;
    const REF = F.ref('dees'), BC = C('magnetic-field'), EC = C('electric-field'), VC = C('voltage'), KC = C('energy'), TC = C('time'), VEL = C('velocity');
    const PRO = F.el('p+');
    const phase = Math.cos(2 * Math.PI * (t - TAU / 2) / (2 * HP));
    const done = (s) => Math.max(0, Math.min(P.N, Math.floor((s - TAU / 2) / HP) + 1));
    const n = done(t);
    hits = [];

    topline(ctx, 'The gap voltage reverses every half turn, so the proton gains $\\kq\\kVgap = ' + fmt(Vk, 0) + '\\;\\text{keV}$ at each of its ' + P.N + ' crossings.');

    /* the two dees, the field through them, and the potential each holds */
    for (const side of [-1, 1]) {
      ctx.save(); ctx.beginPath();
      ctx.arc(CX + side * GX, CY, RD, side < 0 ? Math.PI / 2 : -Math.PI / 2, side < 0 ? 1.5 * Math.PI : Math.PI / 2);
      ctx.closePath(); ctx.fillStyle = alpha(REF, 0.12); ctx.fill(); ctx.strokeStyle = REF; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
      hits.push({ x: CX + side * (GX + RD * 0.55), y: CY + 150, r: 40, name: (side < 0 ? 'the left' : 'the right') + ' D, a hollow electrode at ' + ((side < 0) === (phase > 0) ? 'the higher' : 'the lower') + ' potential just now' });
    }
    const marks = [[-160, -100], [-160, 100], [-70, -160], [160, -100], [160, 100], [70, 160]];
    marks.forEach(([dx, dy]) => { cross(ctx, CX + dx, CY + dy, 11, BC); hits.push({ x: CX + dx, y: CY + dy, r: 16, name: 'the magnetic field B, 1.00 T, into the page' }); });
    label(ctx, 'B', CX - 160, CY - 100, { side: 'left', gap: 22, color: BC, size: 22, H });
    const sl = phase > 0 ? '+' : '−', sr = phase > 0 ? '−' : '+', sa = clamp01(Math.abs(phase) * 1.4);
    ctx.save(); ctx.globalAlpha *= sa;
    text(ctx, sl, CX - GX - 22, CY - RD - 16, VC, { size: 34, weight: 600, align: 'center' });
    text(ctx, sr, CX + GX + 22, CY - RD - 16, VC, { size: 34, weight: 600, align: 'center' });
    ctx.restore();

    /* the field across the gap, following the alternating voltage */
    for (let k = -2; k <= 2; k++) {
      const y = CY + k * 72, L = GX * 1.8 * phase;
      if (Math.abs(phase) > 0.15) arrow(ctx, CX - L, y, CX + L, y, EC, 4);
    }
    label(ctx, 'E', CX, CY + RD, { side: 'below', gap: 22, color: EC, size: 22, H });
    hits.push({ x: CX, y: CY - 30, r: 24, name: 'the gap, where the alternating voltage accelerates the proton' });

    /* the dashed path the proton will follow, and the external beam */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.beginPath();
    for (let s = 0, first = true; s <= P.end; s += 0.4) { const q = where(P, s); if (first) { ctx.moveTo(q.x, q.y); first = false; } else ctx.lineTo(q.x, q.y); }
    ctx.stroke(); ctx.restore();
    const ex = where(P, P.end), up = ex.uy < 0;
    arrow(ctx, ex.x, ex.y - ex.uy * 30, ex.x, ex.y + ex.uy * 6, alpha(PAL.ink, 0.55), 3);
    label(ctx, 'external beam', ex.x, ex.y, { side: up ? 'above' : 'below', gap: 44, size: 20, H, leader: false });
    hits.push({ x: ex.x, y: ex.y, r: 30, name: 'the external beam, leaving at ' + fmt(P.N * Vk / 1000, 2) + ' MeV' });

    /* the proton and its velocity, the arrow's length proportional to its speed */
    const q = where(P, t), vl = 0.42 * (n ? q.rr : 0);
    if (vl > 6) arrow(ctx, q.x + q.ux * 13, q.y + q.uy * 13, q.x + q.ux * (13 + vl), q.y + q.uy * (13 + vl), VEL, 4);
    dot(ctx, q.x, q.y, PRO, true, 11);
    hits.push({ x: q.x, y: q.y, r: 22, name: 'the proton, ' + (n ? fmt(n * Vk, 0) + ' keV after ' + n + (n === 1 ? ' crossing' : ' crossings') : 'about to cross the gap') });

    /* the legend: the proton and its velocity, which move and so carry no labels of their own */
    dot(ctx, 52, 150, PRO, true, 11);
    text(ctx, 'p⁺', 76, 150, PAL.ink, { size: 22, weight: 600 });
    arrow(ctx, 40, 192, 74, 192, VEL, 4);
    text(ctx, 'v', 84, 192, VEL, { size: 22, weight: 600 });

    /* the kinetic energy against time: equal steps at equal intervals */
    const { X, Y } = axes(ctx, GB, [0, 450], [0, 1.4], { nx: 9, ny: 7, xl: 't (ns)', xc: TC, yl: 'KE (MeV)', yc: KC, fy: (v) => fmt(v, 1) });
    const stairs = (upTo) => {
      const pts = [[X(0), Y(0)]];
      for (let k = 1; k <= P.N; k++) {
        const tk = (k - 1) * HP + TAU / 2; if (tk > upTo) break;
        pts.push([X(tk), Y((k - 1) * Vk / 1000)], [X(tk), Y(k * Vk / 1000)]);
      }
      pts.push([X(upTo), Y(done(upTo) * Vk / 1000)]);
      return pts;
    };
    const stroke = (pts, color, w, dash) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); };
    stroke(stairs(P.end), alpha(PAL.ink, 0.35), 2, [6, 8]);
    stroke(stairs(t), KC, 5);
    pinned(ctx, GB, X, Y, t, n * Vk / 1000, KC);
    hits.push({ x: X(t), y: Y(n * Vk / 1000), r: 16, name: 'the kinetic energy, ' + fmt(n * Vk, 0) + ' keV, at ' + fmt(t, 0) + ' ns' });

    const KE = n * Vk, keTex = KE < 1000 ? fmt(KE, 0) + '\\;\\text{keV}' : fmt(KE / 1000, 2) + '\\;\\text{MeV}';
    ro.set('\\kKE = n\\,\\kq\\kVgap = ' + n + ' \\times (1\\,e)(' + fmt(Vk, 0) + '\\;\\text{kV}) = ' + keTex,
      'Every half turn takes the same 32.8 ns, on a small circle or a large one.');
  }
  register(d.fig, { update: (s) => cy.step(s, () => RATE), draw });
})();

/* =====================================================================
   FIGURE 33.9 · sim-synchrotron · moving · flat (rule 28.1)
   The proton circles at an angular rate proportional to v: one turn at c would take 1.2 s.
   With θ its angle from gap 0, tube i holds the sign of (−1)^(i+1) cos 4θ, so every potential
   reverses while the proton is mid-tube and the gap it reaches always pushes it forward.
   B = γmv/qr (22.5 with 28.5's momentum), m = 1.67e-27 kg, q = 1.60e-19 C, c = 3.00e8 m/s.
   Ranges fixed: v/c 0 to 1, B 0 to 5 T (r = 5 m at 0.99 c needs 4.4 T).
===================================================================== */
(function () {
  const H = 640, CX = 330, CY = 365, RR = 205, NT = 8, TW = 0.29, BAND = 17;
  const M = 1.67e-27, Q = 1.6e-19, CL = 3e8, TURN = 1.2;
  const GB = { l: 720, r: 1320, t: 150, b: 520 };
  const d = sim('sim-synchrotron', H);
  const Vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.2, max: 0.99, step: 0.01, value: 0.6, unit: 'c', dec: 2, onInput: reset, aria: 'the speed of the proton, as a fraction of the speed of light' });
  const Rs = ctl(d.controls, { label: '\\krad', cls: 'position', min: 5, max: 50, step: 0.5, value: 10, unit: 'm', dec: 1, aria: 'the radius of the ring' });
  const cy = cycle(() => TURN / Vs.v, 0);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const at = (th, r) => [CX + r * Math.cos(th), CY - r * Math.sin(th)];
  const field = (b, r) => b / Math.sqrt(1 - b * b) * M * b * CL / (Q * r);

  function draw() {
    const { ctx } = begin(d.c);
    const b = Vs.v, r = Rs.v, th = 2 * Math.PI * cy.now() / (TURN / b), p = Math.cos(NT * th / 2);
    const REF = F.ref('tubes'), BC = C('magnetic-field'), EC = C('electric-field'), VC = C('voltage'), PC = C('position'), VEL = C('velocity');
    const PRO = F.el('p+');
    const gam = Number((1 / Math.sqrt(1 - b * b)).toPrecision(3)), v = Number((b * CL).toPrecision(3));
    const B = Number((gam * M * v / (Q * r)).toPrecision(3));
    hits = [];

    topline(ctx, 'The tubes reverse while the proton is inside one, so every gap pushes it forward; a faster proton needs faster reversals and a stronger field.');

    /* the beam pipe, the tubes and the potential each holds now */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, RR, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    for (let i = 0; i < NT; i++) {
      const mid = (i + 0.5) * 2 * Math.PI / NT, a0 = mid - TW, a1 = mid + TW;
      ctx.save(); ctx.beginPath();
      ctx.arc(CX, CY, RR + BAND, -a0, -a1, true); ctx.arc(CX, CY, RR - BAND, -a1, -a0, false); ctx.closePath();
      ctx.fillStyle = alpha(REF, 0.22); ctx.fill(); ctx.strokeStyle = REF; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
      const sg = (i % 2 ? 1 : -1) * p, [sx, sy] = at(mid, RR + 44);
      ctx.save(); ctx.globalAlpha *= clamp01(Math.abs(p) * 1.4);
      text(ctx, sg > 0 ? '+' : '−', sx, sy, VC, { size: 30, weight: 600, align: 'center' });
      ctx.restore();
      const [hx, hy] = at(mid, RR);
      hits.push({ x: hx, y: hy, r: 26, name: 'an accelerating tube, ' + (Math.abs(p) < 0.15 ? 'its potential reversing' : sg > 0 ? 'positive just now' : 'negative just now') });
      const [bx, by] = at(mid, RR - 62);
      cross(ctx, bx, by, 8 + 2.5 * Math.min(B, 5), BC);
      hits.push({ x: bx, y: by, r: 18, name: 'the magnetic field B, ' + fmt(B, B < 1 ? 3 : 2) + ' T, into the page' });
    }
    const [lbx, lby] = at(3.5 * 2 * Math.PI / NT, RR - 62);
    label(ctx, 'B', lbx, lby, { side: 'right', gap: 30, color: BC, size: 22, H });

    /* the field in each gap, from the positive tube to the negative one */
    for (let j = 0; j < NT; j++) {
      const g = j * 2 * Math.PI / NT, e = (j % 2 ? -1 : 1) * p, [gx, gy] = at(g, RR), tx = -Math.sin(g), ty = -Math.cos(g);
      if (Math.abs(e) > 0.15) arrow(ctx, gx - tx * 20 * e, gy - ty * 20 * e, gx + tx * 20 * e, gy + ty * 20 * e, EC, 4);
      hits.push({ x: gx, y: gy, r: 18, name: 'a gap between two tubes' });
    }
    const [ex, ey] = at(0, RR + 40);
    label(ctx, 'E', ex, ey, { side: 'right', gap: 6, color: EC, size: 22, H });

    /* the radius of the ring */
    const [rx, ry] = at(1.25 * Math.PI, RR - BAND - 4);
    line(ctx, CX, CY, rx, ry, PC, 3);
    dot(ctx, CX, CY, PC, true, 4);
    label(ctx, 'r = ' + fmt(r, 1) + ' m', (CX + rx) / 2, (CY + ry) / 2, { side: 'right', gap: 18, color: PC, size: 20, H });

    /* the proton and its velocity */
    const [px, py] = at(th, RR), tx = -Math.sin(th), ty = -Math.cos(th), vl = 85 * b;
    arrow(ctx, px + tx * 14, py + ty * 14, px + tx * (14 + vl), py + ty * (14 + vl), VEL, 4);
    dot(ctx, px, py, PRO, true, 11);
    hits.push({ x: px, y: py, r: 22, name: 'the proton, moving at ' + fmt(b, 2) + ' c' });

    dot(ctx, 52, 150, PRO, true, 11);
    text(ctx, 'p⁺', 76, 150, PAL.ink, { size: 22, weight: 600 });
    arrow(ctx, 40, 192, 74, 192, VEL, 4);
    text(ctx, 'v', 84, 192, VEL, { size: 22, weight: 600 });

    /* the field the ring needs against the speed */
    const { X, Y } = axes(ctx, GB, [0, 1], [0, 5], { nx: 5, ny: 5, xl: 'v / c', xc: VEL, yl: 'B (T)', yc: BC, fx: (x) => fmt(x, 1) });
    const k = 5 * Q * r / (M * CL), bTop = Math.min(0.9995, k / Math.sqrt(1 + k * k));
    curve(ctx, (x) => field(x, r), 0, bTop, X, Y, BC, 5, 160);
    ctx.save(); ctx.setLineDash([4, 8]); line(ctx, X(1), GB.t, X(1), GB.b, alpha(PAL.ink, 0.4), 2); ctx.restore();
    pinned(ctx, GB, X, Y, b, field(b, r), BC);
    hits.push({ x: X(b), y: Y(Math.min(5, field(b, r))), r: 16, name: 'the field this ring needs at ' + fmt(b, 2) + ' c' });

    const turn = 2 * Math.PI * r / v;
    ro.set('\\kBmag = \\frac{\\gamma\\km\\kv}{\\kq\\krad} = \\frac{(' + fmt(gam, 2) + ')(1.67\\times 10^{-27}\\;\\text{kg})(' + sci(v) + '\\;\\text{m/s})}{(1.60\\times 10^{-19}\\;\\text{C})(' + fmt(r, 1) + '\\;\\text{m})} = ' + B + '\\;\\text{T}',
      'One turn takes $2\\pi\\krad/\\kv = ' + Number((turn * 1e6).toPrecision(3)) + '\\;\\mu\\text{s}$.');
  }
  register(d.fig, { update: (s) => cy.step(s, () => 1), draw });
})();

/* =====================================================================
   FIGURE 33.10 + 33.11 · sim-colliders · moving · flat (rule 28.1)
   Fermilab: the Tevatron ring, 2.00 km across, drawn 400 units; the proton bunch goes clockwise
   and the antiproton bunch the other way, a half turn each from the top to the detector.
   SLAC: 3.2 km of linac drawn 560 units, then two arcs to the Mark II detector; each bunch runs
   its own path in the same time. One pass takes 4 s and ends in the collision, held 1.2 s.
===================================================================== */
(function () {
  const H = 600, T = 4;
  const TC = { x: 760, y: 320, R: 200 }, DET = { x: 760, y: 520 };
  const BOOST = [1230, 125], A = [700, 305], D = [430, 475];
  const MACH = {
    fermilab: { beam: '1\\;\\text{TeV}', sum: '2\\;\\text{TeV}' },
    slac: { beam: '50\\;\\text{GeV}', sum: '100\\;\\text{GeV}' },
  };
  const d = sim('sim-colliders', H);
  const pick = choice(d.controls, { label: '\\text{machine}', options: [{ value: 'fermilab', label: 'Fermilab' }, { value: 'slac', label: 'SLAC' }], value: 'fermilab', aria: 'the collider', onInput: reset });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const bez = (p0, p1, p2, p3, n = 60) => Array.from({ length: n + 1 }, (_, i) => {
    const s = i / n, u = 1 - s;
    return [u * u * u * p0[0] + 3 * u * u * s * p1[0] + 3 * u * s * s * p2[0] + s * s * s * p3[0], u * u * u * p0[1] + 3 * u * u * s * p1[1] + 3 * u * s * s * p2[1] + s * s * s * p3[1]];
  });
  const dir = [(A[0] - BOOST[0]) / Math.hypot(A[0] - BOOST[0], A[1] - BOOST[1]), (A[1] - BOOST[1]) / Math.hypot(A[0] - BOOST[0], A[1] - BOOST[1])];
  const P1 = [A[0] + dir[0] * 110, A[1] + dir[1] * 110];
  const ARC_E = bez(A, P1, [640, 520], D), ARC_P = bez(A, P1, [230, 470], D);
  const PATH_E = [BOOST, ...ARC_E], PATH_P = [BOOST, ...ARC_P];
  const along = (pts, k) => {
    const seg = pts.slice(1).map((q, i) => Math.hypot(q[0] - pts[i][0], q[1] - pts[i][1])), tot = seg.reduce((a, b) => a + b, 0);
    let s = clamp01(k) * tot, i = 0;
    while (i < seg.length - 1 && s > seg[i]) { s -= seg[i]; i++; }
    const f = seg[i] ? s / seg[i] : 0;
    return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f];
  };
  const poly = (ctx, pts, color, w, dash) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); };
  function burst(ctx, x, y, k, color) {
    if (k <= 0) return;
    const n = 9, ro2 = 30 * k, ri = 13 * k;
    ctx.save(); ctx.beginPath();
    for (let i = 0; i < 2 * n; i++) { const a = (i * Math.PI) / n, rr = i % 2 ? ri : ro2; i ? ctx.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)) : ctx.moveTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); }
    ctx.closePath(); ctx.fillStyle = alpha(color, 0.85); ctx.fill(); ctx.restore();
  }
  function scaleBar(ctx, x, y, px, txt) {
    line(ctx, x, y, x + px, y, PAL.ink, 3);
    line(ctx, x, y - 8, x, y + 8, PAL.ink, 3); line(ctx, x + px, y - 8, x + px, y + 8, PAL.ink, 3);
    text(ctx, txt, x + px / 2, y - 20, PAL.ink, { size: 18, align: 'center' });
  }

  function fermilab(ctx, t, EN) {
    const TEV = F.ref('tevatron'), PRO = F.el('p+');
    const src = [[300, 200, 'proton source', 'above'], [300, 440, 'antiproton source', 'below']];
    src.forEach(([x, y, name, side], i) => {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(x, y, 55, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      const a = i ? -0.85 : 0.85, [jx, jy] = [TC.x + TC.R * Math.cos(Math.PI - a), TC.y - TC.R * Math.sin(Math.PI - a)];
      const ux = (jx - x) / Math.hypot(jx - x, jy - y), uy = (jy - y) / Math.hypot(jx - x, jy - y);
      line(ctx, x + 55 * ux, y + 55 * uy, jx, jy, alpha(PAL.ink, 0.5), 6);
      label(ctx, name, x, y, { side, gap: 74, size: 20, H, leader: false });
      hits.push({ x, y, r: 60, name: i ? 'the antiproton source, where antiprotons are made and gathered' : 'the proton source' });
    });
    ctx.save(); ctx.strokeStyle = TEV; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(TC.x, TC.y, TC.R, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    label(ctx, 'Tevatron ring', TC.x + TC.R, TC.y - 90, { side: 'right', gap: 24, color: TEV, size: 20, H });
    hits.push({ x: TC.x + TC.R, y: TC.y, r: 24, name: 'the Tevatron ring, 2.00 km across, where protons and antiprotons circulate in opposite directions' });

    const k = clamp01(t / T), pa = Math.PI / 2 - Math.PI * k, aa = Math.PI / 2 + Math.PI * k;
    const at = (a) => [TC.x + TC.R * Math.cos(a), TC.y - TC.R * Math.sin(a)];
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(DET.x - 26, DET.y - 26, 52, 52); ctx.strokeRect(DET.x - 26, DET.y - 26, 52, 52); ctx.restore();
    burst(ctx, DET.x, DET.y, clamp01((k - 0.97) / 0.03), EN);
    label(ctx, 'collision detector', DET.x + 26, DET.y, { side: 'right', gap: 18, size: 20, H });
    hits.push({ x: DET.x, y: DET.y, r: 30, name: 'the collision detector, where the beams meet head-on' });
    if (k < 1) {
      const [x1, y1] = at(pa), [x2, y2] = at(aa);
      dot(ctx, x1, y1, PRO, true, 11); dot(ctx, x2, y2, PRO, false, 11);
      hits.push({ x: x1, y: y1, r: 20, name: 'a bunch of protons, going clockwise' }, { x: x2, y: y2, r: 20, name: 'a bunch of antiprotons, going counterclockwise' });
    }
    dot(ctx, 52, 150, PRO, true, 11); text(ctx, 'p⁺', 76, 150, PAL.ink, { size: 22, weight: 600 });
    dot(ctx, 52, 192, PRO, false, 11); text(ctx, 'p̄', 76, 192, PAL.ink, { size: 22, weight: 600 });
    scaleBar(ctx, 1080, 560, TC.R, '1 km');
  }

  function slac(ctx, t, EN) {
    const SL = F.ref('slac'), EL = F.el('e-'), PO = F.el('e+');
    line(ctx, BOOST[0], BOOST[1], A[0], A[1], SL, 10);
    poly(ctx, ARC_E, SL, 5); poly(ctx, ARC_P, SL, 5);
    const mid = [(BOOST[0] + A[0]) / 2, (BOOST[1] + A[1]) / 2];
    label(ctx, 'linear accelerator', mid[0] - dir[1] * 52, mid[1] + dir[0] * 52, { side: 'above', gap: 0, color: SL, size: 20, H });
    hits.push({ x: mid[0], y: mid[1], r: 30, name: 'the linear accelerator, 3.2 km long' });
    dot(ctx, BOOST[0], BOOST[1], PAL.ink, false, 9);
    label(ctx, 'electron and positron sources', BOOST[0], BOOST[1], { side: 'above', gap: 30, size: 20, H });
    hits.push({ x: BOOST[0], y: BOOST[1], r: 20, name: 'where the electrons and positrons enter the linear accelerator' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; i ? ctx.lineTo(D[0] + 30 * Math.cos(a), D[1] + 30 * Math.sin(a)) : ctx.moveTo(D[0] + 30 * Math.cos(a), D[1] + 30 * Math.sin(a)); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    const k = clamp01(t / T);
    burst(ctx, D[0], D[1], clamp01((k - 0.97) / 0.03), EN);
    label(ctx, 'Mark II detector', D[0], D[1], { side: 'below', gap: 48, size: 20, H, leader: false });
    hits.push({ x: D[0], y: D[1], r: 32, name: 'the Mark II particle detector, where the beams meet head-on' });
    if (k < 1) {
      const [ex, ey] = along(PATH_E, k), [qx, qy] = along(PATH_P, clamp01((k - 0.12) / 0.88));
      dot(ctx, qx, qy, PO, true, 11); dot(ctx, ex, ey, EL, true, 11);
      hits.push({ x: ex, y: ey, r: 20, name: 'a bunch of electrons' }, { x: qx, y: qy, r: 20, name: 'a bunch of positrons' });
    }
    dot(ctx, 52, 150, EL, true, 11); text(ctx, 'e⁻', 76, 150, PAL.ink, { size: 22, weight: 600 });
    dot(ctx, 52, 192, PO, true, 11); text(ctx, 'e⁺', 76, 192, PAL.ink, { size: 22, weight: 600 });
    scaleBar(ctx, 1080, 560, 175, '1 km');
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), EN = C('energy');
    hits = [];
    topline(ctx, 'The two beams meet head-on in the detector, where their total momentum is zero.');
    pick.only(ctx, 'fermilab', () => fermilab(ctx, t, EN), [0, 0]);
    pick.only(ctx, 'slac', () => slac(ctx, t, EN), [0, 0]);
    const m = MACH[pick.value];
    ro.set('\\km = \\frac{\\kdE}{\\kc^{2}} = \\frac{2(' + m.beam + ')}{\\kc^{2}} = ' + m.sum + '/\\kc^{2}');
  }
  register(d.fig, { update: (s) => cy.step(s, () => 1), draw });
})();
};
