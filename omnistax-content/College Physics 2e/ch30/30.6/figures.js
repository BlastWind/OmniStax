/* Figures for section 30.6 The Wave Nature of Matter Causes Quantization.
   The figures draw position (the orbit radius r_n, the wavelength λ_n, the
   circumference, the Bohr radius a_B and the distance r) and, in a readout
   note, angular momentum. Planck's h, n and counts of measurements are ink.
   The electron's wave and the specks of the cloud are F.el('e-'), the nucleus
   F.el('p+'). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.6'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, label, hbracket, axes, hover, readout, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the Bohr radius, a_B = 0.529 × 10⁻¹⁰ m, in nanometers */
const AB = 0.0529;
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };

/* =====================================================================
   FIGURE 30.44 + 30.45 · sim-orbit-wave · still · flat (rule 28.1)
   An electron on a circular orbit of radius r about a proton moves at the
   speed the Coulomb force sets as the centripetal force, so its de Broglie
   wavelength is λ = h/mₑv = 2π√(r a_B) and the orbit holds 2πr/λ = √(r/a_B)
   wavelengths: a whole number exactly at r = n²a_B. The orbit is drawn at 230
   units per nanometer (0.900 nm and its wave reach 236 units). The string is
   the circumference unrolled: s from 0 to 7 nm, fixed (2π × 0.900 nm = 5.65 nm
   plus a wavelength of 1.37 nm), the wave's height from −2.2 to 1.8 so
   the bracket for λ sits under its troughs. Opens on n = 3, Figure 30.44(b).
===================================================================== */
(function () {
  const H = 610;
  const d = sim('sim-orbit-wave', H);
  const r = ctl(d.controls, { label: '\\krn', cls: 'position', min: 0.03, max: 0.9, step: 0.001, value: 0.476, unit: 'nm', dec: 3, aria: 'the radius of the orbit',
    specials: [1, 2, 3, 4].map((n) => ({ at: n * n * AB, label: 'n = ' + n })) });
  const ro = readout(d);
  const RC = { x: 330, y: 352 }, S = 230;
  const GB = { l: 720, r: 1330, t: 236, b: 492 };
  let hits = [];
  hover(d.stage, () => hits);

  const amp = (R) => 0.12 * R + 4;
  /* the wave round the orbit from φ0 to φ1, φ measured from the top, clockwise on the page */
  function ring(ctx, R, N, f0, f1, color, w, a) {
    const A = amp(R), n = Math.max(60, Math.ceil((f1 - f0) * 60));
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    for (let k = 0; k <= n; k++) {
      const f = f0 + (f1 - f0) * k / n, q = R + A * Math.sin(N * f), th = -Math.PI / 2 + f;
      const x = RC.x + q * Math.cos(th), y = RC.y + q * Math.sin(th);
      if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
  }
  function wave(ctx, X, Y, f, s0, s1, color, w, a, dash) {
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    const n = 160;
    for (let k = 0; k <= n; k++) { const s = s0 + (s1 - s0) * k / n, x = X(s), y = Y(f(s)); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const rv = r.v, N = Math.sqrt(rv / AB), lam = 2 * Math.PI * Math.sqrt(rv * AB), circ = 2 * Math.PI * rv;
    const n = Math.round(N), fits = n >= 1 && Math.abs(N - n) < 0.004;
    const XC = C('position'), EC = F.el('e-'), R = rv * S;
    hits = [];

    const lines = topline(ctx, fits
      ? 'Exactly ' + (n === 1 ? 'one wavelength fits' : n + ' wavelengths fit') + ' round the orbit, so the wave meets itself crest to crest: an allowed orbit.'
      : fmt(N, 2) + ' wavelengths fit round the orbit, so the wave comes back out of step with itself: a forbidden orbit.');
    const lab = labeller(ctx, H, { headline: lines });

    /* the allowed orbits r = n²a_B, dashed */
    [1, 2, 3, 4].forEach((k) => {
      const Rk = k * k * AB * S;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2; ctx.setLineDash([6, 7]);
      ctx.beginPath(); ctx.arc(RC.x, RC.y, Rk, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      hits.push({ x: RC.x - Rk * Math.SQRT1_2, y: RC.y + Rk * Math.SQRT1_2, r: 10, name: 'the allowed orbit n = ' + k + ', r = ' + (k * k) + 'a_B = ' + fmt(k * k * AB, 3) + ' nm' });
    });
    const R4 = 16 * AB * S;
    lab.add('allowed orbits', RC.x - R4 * Math.SQRT1_2, RC.y + R4 * Math.SQRT1_2, -0.7, 0.7, PAL.muted, 18, 30);

    /* the orbit, the wave's second trip faded, its first trip, the nucleus and the radius */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(RC.x, RC.y, R, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    ring(ctx, R, N, 2 * Math.PI, 4 * Math.PI, EC, 2.5, 0.4);
    ring(ctx, R, N, 0, 2 * Math.PI, EC, 4, 1);
    dot(ctx, RC.x, RC.y - R, EC, true, 5);
    hits.push({ x: RC.x, y: RC.y - R, r: 12, name: 'where the wave sets out on its first trip round' });
    const tw = Math.PI / 3;
    const wa = -Math.PI / 2 + tw, wq = R + amp(R) * Math.sin(N * tw);
    if (R > 60) lab.add('electron wave', RC.x + wq * Math.cos(wa), RC.y + wq * Math.sin(wa), Math.cos(wa), Math.sin(wa), EC, 20, 26 + amp(R));
    hits.push({ x: RC.x + wq * Math.cos(wa), y: RC.y + wq * Math.sin(wa), r: 14, name: 'the wave of the electron, ' + fmt(N, 2) + ' wavelengths round the orbit' });
    const ra = Math.PI / 5, ex = RC.x + R * Math.cos(ra), ey = RC.y + R * Math.sin(ra);
    if (R > 20) arrow(ctx, RC.x, RC.y, ex, ey, XC, 3.5); else line(ctx, RC.x, RC.y, ex, ey, XC, 3);
    lab.add('r = ' + fmt(rv, 3) + ' nm', ex, ey, Math.cos(ra), Math.sin(ra), XC, 20, amp(R) + 24);
    dot(ctx, RC.x, RC.y, F.el('p+'), true, 7);
    hits.push({ x: RC.x, y: RC.y, r: 12, name: 'the nucleus, a single proton' });

    /* the orbit unrolled into a string */
    const { X, Y } = axes(ctx, GB, [0, 7], [-2.2, 1.8], { nx: 7, ny: 1, fx: (v) => fmt(v, 0), fy: () => '', xl: 's along the orbit (nm)', xc: XC });
    text(ctx, 'wave', GB.l - 14, Y(0), PAL.ink, { size: 20, weight: 600, align: 'right' });
    const first = (s) => Math.sin(2 * Math.PI * s / lam), again = (s) => Math.sin(2 * Math.PI * (s - circ) / lam);
    const end = Math.min(7, circ + lam);
    line(ctx, X(circ), GB.t, X(circ), GB.b, alpha(PAL.ink, 0.5), 2, [4, 8]);
    hits.push({ x: X(circ), y: GB.t + 20, r: 12, name: 'the end of one trip round, which is the starting point again' });
    wave(ctx, X, Y, again, circ, end, PAL.ink, 3, 0.65, [10, 10]);
    wave(ctx, X, Y, first, circ, end, EC, 3, 0.4);
    wave(ctx, X, Y, first, 0, circ, EC, 4, 1);
    const sx = Math.min(X(circ + lam * 0.3), X(end) - 4);
    hits.push({ x: sx, y: Y(again(circ + lam * 0.3)), r: 12, name: 'the wave as it began its first trip' });
    hits.push({ x: sx, y: Y(first(circ + lam * 0.3)), r: 12, name: 'the wave on its second trip round' });
    hbracket(ctx, X(0), X(circ), GB.t - 26, XC, '2πr = ' + fmt(circ, circ < 1 ? 3 : 2) + ' nm', { size: 20 });
    hbracket(ctx, X(0), X(lam), Y(-1.35), XC);
    text(ctx, 'λ = ' + fmt(lam, 3) + ' nm', X(lam) + 16, Y(-1.35), XC, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    lab.flush();

    const tag = (x, k) => fmt(x, k) + '\\ \\text{nm}';
    if (fits) ro.set('\\mk{n}{' + n + '}\\klamorb = 2\\pi\\krn,\\quad \\mk{n2}{' + n + '}(\\mk{l}{' + tag(lam, 3) + '}) = 2\\pi(\\mk{r}{' + tag(rv, 3) + '}) = \\mk{c}{' + tag(circ, circ < 1 ? 3 : 2) + '}',
      '$\\kL = h\\krn/\\klamorb = ' + n + '\\,h/2\\pi$', { form: 'fit' });
    else ro.set('\\frac{2\\pi\\krn}{\\klamorb} = \\frac{2\\pi(\\mk{r}{' + tag(rv, 3) + '})}{\\mk{l}{' + tag(lam, 3) + '}} = \\mk{n}{' + fmt(N, 2) + '}',
      '$\\kL = h\\krn/\\klamorb = ' + fmt(N, 2) + '\\,h/2\\pi$', { form: 'ratio' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 30.46 · sim-probability-cloud · moving · locked view (rule 28.2)
   The ground state of hydrogen: the distance of each measurement is drawn
   from P(r) ∝ r²e^(−2r/a_B), a gamma distribution of shape 3 and scale a_B/2,
   and its direction is uniform over the sphere; the speck is that point seen
   from the book's view. Measurement i arrives at T√(i/N), so the count grows
   as t² to N = 1500 in T = 6 s. a_B is drawn 64 units long, and a speck
   beyond 250 units (3.9a_B, 2% of them) is counted but not drawn. The count runs
   over r from 0 to 0.25 nm in bins of 0.01 nm and from 0 to 200, fixed: the
   peak bin expects 153 at N = 1500.
===================================================================== */
(function () {
  const H = 600;
  const d = sim('sim-probability-cloud', H);
  const N = 1500, T = 6, AS = 64, BIN = 0.01, BINS = 25, YMAX = 200;
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  const V = F.view({ yaw: 0.62, pitch: 0.3, dist: 5000, cx: 340, cy: 350 });
  const O = V.P([0, 0, 0]);
  const GB = { l: 780, r: 1330, t: 150, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);

  const pts = [];
  for (let i = 0; i < N; i++) {
    const u = Math.max(1e-9, hash(i, 1) * hash(i, 2) * hash(i, 3)), rr = -0.5 * AS * Math.log(u);
    const ct = 2 * hash(i, 4) - 1, st = Math.sqrt(1 - ct * ct), ph = 2 * Math.PI * hash(i, 5);
    const p = V.P([rr * st * Math.cos(ph), rr * ct, rr * st * Math.sin(ph)]);
    pts.push({ x: p[0], y: p[1], r: rr / AS * AB, at: T * Math.sqrt(i / N) });
  }
  const dens = (x) => 4 * x * x / (AB * AB * AB) * Math.exp(-2 * x / AB);

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), EC = F.el('e-'), XC = C('position');
    hits = [];

    /* the three axes through the nucleus, as the book draws them */
    [[0, 270, 0], [270, 0, 0], [0, 0, 270]].forEach((a) => { const p = V.P(a); line(ctx, O[0], O[1], p[0], p[1], alpha(PAL.ink, 0.55), 2); });

    const counts = new Array(BINS).fill(0);
    let n = 0, near = 0, last = null;
    for (const p of pts) {
      if (p.at > t) break;
      n++; if (p.r < AB) near++;
      const b = Math.floor(p.r / BIN); if (b < BINS) counts[b]++;
      if (Math.hypot(p.x - O[0], p.y - O[1]) > 250) continue;
      const age = t - p.at, fresh = Math.max(0, 1 - age / 0.15);
      ctx.save(); ctx.fillStyle = EC; ctx.globalAlpha *= 0.5 + 0.5 * fresh;
      ctx.beginPath(); ctx.arc(p.x, p.y, 2.2 + 3 * fresh, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      last = p;
    }
    if (last) hits.push({ x: last.x, y: last.y, r: 10, name: 'the latest measurement of the electron’s position, ' + fmt(last.r, 3) + ' nm from the nucleus' });

    ctx.save(); ctx.strokeStyle = XC; ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]);
    ctx.beginPath(); ctx.arc(O[0], O[1], AS, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    const ax = O[0] - AS * Math.cos(Math.PI / 4), ay = O[1] - AS * Math.sin(Math.PI / 4);
    arrow(ctx, O[0], O[1], ax, ay, XC, 3.5);
    dot(ctx, O[0], O[1], F.el('p+'), true, 8);
    hits.push({ x: O[0], y: O[1], r: 12, name: 'the nucleus, a single proton' });
    hits.push({ x: O[0] + AS, y: O[1], r: 10, name: 'the sphere of radius a_B, the Bohr radius' });

    const lines = topline(ctx, n === 0 ? 'Each measurement finds the electron at one definite place near the nucleus.'
      : n + ' measurement' + (n === 1 ? '' : 's') + ' so far; each finds the electron at one place, and their distances from the nucleus crowd round $\\kaB$.');
    const lab = labeller(ctx, H, { headline: lines });
    lab.add('r_{1} = a_{B}', ax, ay, -0.8, -0.6, XC, 20, 70);
    lab.add('nucleus', O[0], O[1], 0.75, -0.66, PAL.ink, 20, 120);

    /* the count of measurements by distance, and the count the cloud predicts */
    const { X, Y } = axes(ctx, GB, [0, 0.25], [0, YMAX], { nx: 5, ny: 4, fx: (v) => fmt(v, 2), xl: 'r (nm)', xc: XC, yl: 'measurements' });
    ctx.save(); ctx.fillStyle = alpha(EC, 0.45);
    counts.forEach((c, b) => { if (c) ctx.fillRect(X(b * BIN) + 1, Y(Math.min(c, YMAX)), X(BIN) - X(0) - 2, GB.b - Y(Math.min(c, YMAX))); });
    ctx.restore();
    if (n > 0) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.globalAlpha *= n > 40 ? 0.85 : 0.4; ctx.beginPath();
      for (let k = 0; k <= 120; k++) { const x = 0.25 * k / 120, y = Y(Math.min(YMAX, n * BIN * dens(x))); if (k) ctx.lineTo(X(x), y); else ctx.moveTo(X(x), y); }
      ctx.stroke(); ctx.restore();
      hits.push({ x: X(AB), y: Y(n * BIN * dens(AB)), r: 12, name: 'the count the probability cloud predicts for this many measurements' });
    }
    line(ctx, X(AB), GB.t, X(AB), GB.b, alpha(XC, 0.8), 2, [4, 8]);
    text(ctx, 'a_{B} = 0.0529 nm', X(AB) + 10, GB.t + 16, XC, { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    lab.flush();

    ro.set(n + '\\ \\text{measurements} = ' + near + '\\ \\text{nearer than}\\ \\kaB + ' + (n - near) + '\\ \\text{farther}',
      'Seen from one side, the specks pile up over the nucleus, although the electron is seldom found that close to it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
