/* Figures for section 31.1 Nuclear Radioactivity.
   The page binds energy, charge, magnetic field, velocity, position and time. Masses
   are ink. Every ray is a particle with an identity and wears the element palette: an α
   is two F.el('p+') and two F.el('n0'), a β is F.el('e-'), a γ is F.el('gamma'). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, dot, text, topline, labeller, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sig = (x, n) => Number(x.toPrecision(n));
const sciTex = (x, n) => { const e = Math.floor(Math.log10(Math.abs(x))), m = x / 10 ** e; return fmt(m, n - 1) + '\\times 10^{' + e + '}'; };
const sciText = (x, n) => { const e = Math.floor(Math.log10(Math.abs(x))), m = x / 10 ** e; return fmt(m, n - 1) + ' × 10' + String(e).split('').map((c) => SUP[c]).join(''); };
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const M_ALPHA = 3727.4, M_E = 0.511;                  /* rest energies, MeV */

/* an α drawn as the helium nucleus it is: two protons and two neutrons */
function alphaParticle(ctx, x, y, s = 1) {
  const r = 5.5 * s, o = 4.2 * s;
  [[-o, -o, 'p+'], [o, o, 'p+'], [o, -o, 'n0'], [-o, o, 'n0']].forEach(([dx, dy, k]) => {
    ctx.save(); ctx.fillStyle = F.el(k); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  });
}
function particle(ctx, kind, x, y, s = 1) {
  if (kind === 'a') { alphaParticle(ctx, x, y, s); return; }
  ctx.save(); ctx.fillStyle = F.el(kind === 'b' ? 'e-' : 'gamma'); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(x, y, 6.5 * s, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
const COL = { a: () => F.el('p+'), b: () => F.el('e-'), g: () => F.el('gamma') };
const NAME = { a: 'α', b: 'β', g: 'γ' };

/* =====================================================================
   FIGURE 31.3 · sim-rays-in-field · moving · flat (rule 28.1)
   Seen looking along the field, B out of the page. The field fills a gap
   GAP cm deep above the slot; the screen stands LS cm above the slot and
   reaches XMAX cm either side. α classical (v ≈ 5 % of c, as the text says),
   β relativistic; r = p/(|q|B). Time is slowed by c/K, about 3 × 10⁸.
===================================================================== */
(function () {
  const S = 36, X0 = 700, Y0 = 650;                  /* logical units per cm; the slot's mouth */
  const GAP = 5, LS = 12, XMAX = 15;                  /* cm */
  const MA_KG = 6.64e-27, QE = 1.60e-19, MEV = 1.602e-13, CL = 2.998e8;
  const T = 6, EMIT = 0.5, NEMIT = 10, K = 103;       /* s; s between particles; particles per ray; cm/s at v = c */
  const d = sim('sim-rays-in-field', 760);
  const B = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.05, max: 1, step: 0.01, value: 0.3, unit: 'T', dec: 2, onInput: reset, aria: 'the strength of the magnetic field' });
  const E = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 1, max: 10, step: 0.1, value: 5, unit: 'MeV', dec: 1, onInput: reset, aria: 'the energy of each ray' });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); }

  /* the α's speed to three figures, so the readout's numbers multiply out to its radius */
  const vAlpha = (e) => sig(Math.sqrt(2 * e * MEV / MA_KG), 3);
  function rays(b, e) {
    const va = vAlpha(e), ra = 100 * MA_KG * va / (2 * QE * b);
    const pcb = Math.sqrt(e * e + 2 * e * M_E), rb = 100 * pcb * MEV / CL / (QE * b);
    return [
      { k: 'a', sgn: 1, r: ra, beta: va / CL },
      { k: 'b', sgn: -1, r: rb, beta: pcb / (e + M_E) },
      { k: 'g', sgn: 0, r: Infinity, beta: 1 },
    ].map(path);
  }
  /* the path in cm, x across and y up from the slot: an arc while in the field, then straight */
  function path(ray) {
    const pts = [], { r, sgn } = ray;
    let end, curl = false;
    if (!isFinite(r)) { pts.push([0, 0], [0, LS]); end = [0, LS]; }
    else {
      const pe = r > GAP ? Math.asin(GAP / r) : Math.PI;
      for (let i = 0; i <= 80; i++) { const p = pe * i / 80; pts.push([sgn * r * (1 - Math.cos(p)), r * Math.sin(p)]); }
      if (r > GAP) {
        const [xe] = pts[pts.length - 1], ux = sgn * Math.sin(pe), uy = Math.cos(pe);
        let t = (LS - GAP) / uy;
        if (Math.abs(xe + ux * t) > XMAX) t = (sgn * XMAX - xe) / ux;
        end = [xe + ux * t, GAP + uy * t]; pts.push(end);
      } else { curl = true; end = pts[pts.length - 1]; }
    }
    let len = 0; const cum = [0];
    for (let i = 1; i < pts.length; i++) { len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); cum.push(len); }
    const hit = !curl && end[1] >= LS - 1e-6;
    return { ...ray, pts, cum, len, end, curl, hit };
  }
  function at(ray, s) {
    const { pts, cum } = ray;
    if (s <= 0) return pts[0];
    let i = 1; while (i < cum.length - 1 && cum[i] < s) i++;
    const k = Math.min(1, (s - cum[i - 1]) / (cum[i] - cum[i - 1] || 1));
    return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k];
  }
  const P = ([x, y]) => [X0 + x * S, Y0 - y * S];
  function stroke(ctx, ray, s, color, w) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath();
    let [x, y] = P(ray.pts[0]); ctx.moveTo(x, y);
    for (let i = 1; i < ray.pts.length && ray.cum[i - 1] < s; i++) { [x, y] = P(ray.cum[i] <= s ? ray.pts[i] : at(ray, s)); ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const b = B.v, e = E.v, R = rays(b, e), t = cy.now(), BC = C('magnetic-field');
    const [ra, rb] = R;
    const head = 'A field of $\\kBmag = ' + fmt(b, 2) + '$ T bends the α to the right and ' +
      (rb.hit ? 'the β to the left, and leaves the γ unbent.' : rb.curl ? 'curls the β into a circle that never reaches the screen.' : 'bends the β so far to the left that it misses the screen.');
    const lab = labeller(ctx, 760, { headline: topline(ctx, head) });
    hits = [];

    /* the field: the gap between the poles, B out of the page */
    const fy0 = Y0 - GAP * S, fl = X0 - XMAX * S, fr = X0 + XMAX * S;
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.55); ctx.fillRect(fl, fy0, fr - fl, GAP * S); ctx.restore();
    for (let gx = fl + 40; gx < fr; gx += 80) for (let gy = fy0 + 30; gy < Y0; gy += 70) {
      ctx.save(); ctx.strokeStyle = alpha(BC, 0.75); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(gx, gy, 9, 0, TAU); ctx.stroke(); ctx.restore();
      dot(ctx, gx, gy, alpha(BC, 0.9), true, 3);
    }
    lab.place(F.label(ctx, 'B out of the page', fl, fy0 - 20, { side: 'right', size: 20, color: BC, gap: 0 }));
    hits.push({ x: (fl + fr) / 2, y: fy0 + 12, r: 14, name: 'the gap between the poles: the N pole face is behind the page, so B points out of it' });

    /* the screen */
    const sy = Y0 - LS * S;
    line(ctx, fl, sy, fr, sy, PAL.ink, 4);
    lab.place(F.label(ctx, 'phosphorescent screen', fr - 4, sy + 24, { side: 'left', size: 18, color: PAL.muted, gap: 0 }));
    hits.push({ x: X0 + 360, y: sy, r: 10, name: 'the phosphorescent screen, which glows where a ray strikes it' });

    /* the lead box and its slot */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(X0 - 70, Y0, 140, 86); ctx.strokeRect(X0 - 70, Y0, 140, 86);
    ctx.fillStyle = PAL.panel; ctx.fillRect(X0 - 5, Y0, 10, 62); ctx.restore();
    dot(ctx, X0, Y0 + 66, PAL.ink, true, 8);
    lab.place(F.label(ctx, 'lead box', X0 - 84, Y0 + 45, { side: 'left', size: 18, color: PAL.muted, gap: 0 }));
    hits.push({ x: X0, y: Y0 + 66, r: 12, name: 'the radioactive source, at the foot of the slot' });
    hits.push({ x: X0 + 45, y: Y0 + 45, r: 26, name: 'the lead box, which stops every ray but those leaving by the slot' });

    R.forEach((ray) => {
      const v = ray.beta * K, col = COL[ray.k]();
      const lead = Math.min(ray.len, v * t);
      stroke(ctx, ray, lead, alpha(col, 0.5), 3);
      let n = 0;
      for (let j = 0; j < NEMIT; j++) {
        const s = v * (t - j * EMIT);
        if (s < 0) continue;
        if (s >= ray.len) { n++; continue; }
        const [x, y] = P(at(ray, s));
        if (ray.k !== 'a') {
          const [tx, ty] = P(at(ray, Math.max(0, s - v / 120)));
          line(ctx, tx, ty, x, y, alpha(col, 0.6), 4);
        }
        particle(ctx, ray.k, x, y);
      }
      const [ex, ey] = P(ray.end);
      if (ray.hit && n) {
        const g = Math.min(1, n / 4);
        dot(ctx, ex, ey, alpha(col, 0.25 * g), true, 22);
        dot(ctx, ex, ey, col, true, 7 + 3 * g);
      }
      const where = ray.hit ? [ex, ey] : P([ray.sgn * ray.r, Math.min(ray.r, GAP)]);
      lab.add(NAME[ray.k], where[0], where[1], 0, -1, PAL.ink, 24, 20);
      hits.push({ x: ex, y: ey, r: 14, name: ray.k === 'g' ? 'the γ rays, photons with no charge, unbent' :
        ray.k === 'a' ? 'the α rays, positive, on a radius of ' + fmt(ray.r / 100, ray.r >= 100 ? 2 : 3) + ' m in the field' :
        'the β rays, negative, on a radius of ' + fmt(ray.r, 1) + ' cm in the field' + (ray.hit ? '' : ', never reaching the screen') });
    });
    lab.flush();

    const va = vAlpha(E.v), ram = ra.r / 100;
    ro.set('\\kr_{\\alpha} = \\frac{m_{\\alpha}\\kv_{\\alpha}}{2\\kqe\\kBmag} = \\frac{(6.64\\times 10^{-27}\\,\\text{kg})(' + sciTex(va, 3) + '\\,\\text{m/s})}{2(1.60\\times 10^{-19}\\,\\text{C})(' + fmt(b, 2) + '\\,\\text{T})} = ' + fmt(ram, ram >= 1 ? 2 : 3) + '\\ \\text{m}',
      'The β of the same energy turns on $\\kr_{\\beta} = ' + fmt(rb.r, 1) + '$ cm, ' + fmt(ra.r / rb.r, 0) + ' times more tightly than the α.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 31.5 · sim-range · moving · flat (rule 28.1)
   Depth on a log ruler from 1 μm to 1 km; the clock is logarithmic too, so a
   ray of constant speed v sits at log(vt) and moves evenly across the page.
   α: Geiger's rule in air, R = 0.318 E^1.5 cm, carried to other materials by
   Bragg–Kleeman, R = 3.2 × 10⁻⁴ (√A / ρ) R_air. β: Katz–Penfold range in
   g/cm², divided by ρ. γ: mass attenuation coefficients at 1, 2, 5, 10 MeV,
   interpolated log–log; X10 is the depth that absorbs nine tenths.
===================================================================== */
(function () {
  const MAT = {
    air: { name: 'air', rho: 1.205e-3, sqA: 3.82, mu: [0.0636, 0.0445, 0.0275, 0.0205], dots: 6 },
    tissue: { name: 'tissue', rho: 1.0, sqA: 3.0, mu: [0.0707, 0.0494, 0.0303, 0.0222], dots: 40 },
    al: { name: 'aluminum', rho: 2.7, sqA: 5.2, mu: [0.0615, 0.0432, 0.0284, 0.0232], dots: 70 },
    pb: { name: 'lead', rho: 11.35, sqA: 14.39, mu: [0.071, 0.0461, 0.0427, 0.0497], dots: 130 },
  };
  const EMU = [1, 2, 5, 10];
  const L0 = -6, L1 = 3, XL = 250, XR = 1330, DX = (XR - XL) / (L1 - L0);   /* log10 of depth in m */
  const LANE = { a: 205, b: 315, g: 425 }, TOP = 150, BOT = 480;
  const T = 5, NP = 28, CL = 2.998e8;
  const LT0 = Math.log10(10 ** L0 / CL);                                    /* the γ at 1 μm */
  const d = sim('sim-range', 640);
  const mat = choice(d.controls, { label: '\\text{Material}', options: Object.keys(MAT).map((k) => ({ value: k, label: MAT[k].name })), value: 'tissue', aria: 'the material the rays enter', onInput: reset });
  const E = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 1, max: 10, step: 0.1, value: 2, unit: 'MeV', dec: 1, onInput: reset, aria: 'the energy of each ray' });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); }

  const rangeAlpha = (m, e) => { const air = 0.318 * e ** 1.5 / 100; return m === 'air' ? air : 3.2e-4 * MAT[m].sqA / MAT[m].rho * air; };
  const rangeBeta = (m, e) => (e <= 2.5 ? 0.412 * e ** (1.265 - 0.0954 * Math.log(e)) : 0.53 * e - 0.106) / MAT[m].rho / 100;
  function muOf(m, e) {
    const mu = MAT[m].mu; let i = 0; while (i < EMU.length - 2 && e > EMU[i + 1]) i++;
    const k = Math.log(e / EMU[i]) / Math.log(EMU[i + 1] / EMU[i]);
    return Math.exp(Math.log(mu[i]) + k * Math.log(mu[i + 1] / mu[i])) * MAT[m].rho * 100;    /* 1/m */
  }
  const X = (depth) => XL + (Math.log10(depth) - L0) * DX;
  const len = (m) => m >= 1000 ? fmt(m / 1000, 2) + ' km' : m >= 1 ? fmt(m, m >= 10 ? 0 : 1) + ' m' : m >= 0.01 ? fmt(m * 100, m >= 0.1 ? 0 : 1) + ' cm' : m >= 1e-3 ? fmt(m * 1000, 1) + ' mm' : fmt(m * 1e6, m >= 1e-5 ? 0 : 1) + ' μm';
  const lenTex = (m) => len(m).replace(/ (μm|mm|cm|m|km)$/, (u) => '\\;' + (u === ' μm' ? '\\mu\\text{m}' : '\\text{' + u.trim() + '}'));

  /* fixed scatter: the depths as fractions of each ray's reach, and the ion pairs' heights */
  const rnd = rng(7), U = Array.from({ length: NP }, (_, i) => (i + 0.5) / NP), JIT = Array.from({ length: 3 * NP }, () => 2 * rnd() - 1);
  const DOTS = Array.from({ length: 140 }, () => [rnd(), rnd()]);

  function ionPair(ctx, x, y, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath();
    ctx.moveTo(x - 10, y - 5); ctx.lineTo(x - 2, y - 5); ctx.moveTo(x - 6, y - 9); ctx.lineTo(x - 6, y - 1);
    ctx.moveTo(x + 2, y + 5); ctx.lineTo(x + 10, y + 5); ctx.stroke(); ctx.restore();
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const m = mat.value, M = MAT[m], e = E.v, tau = cy.now(), PC = C('position');
    const Ra = rangeAlpha(m, e), Rb = rangeBeta(m, e), mu = muOf(m, e), x10 = Math.LN10 / mu;
    const lt = LT0 + (L1 - L0) * Math.min(1, tau / T);
    const v = { a: Math.sqrt(2 * e / M_ALPHA) * CL, b: Math.sqrt(1 - (M_E / (e + M_E)) ** 2) * CL, g: CL };
    const front = (k) => Math.log10(v[k]) + lt;                          /* log10 of the depth reached */
    const lab = labeller(ctx, 640, { headline: topline(ctx, 'Rays of $\\kE = ' + fmt(e, 1) + '$ MeV enter ' + M.name + ': the α stops at ' + len(Ra) + ', the β at ' + len(Rb) + ', and the γ rays are only thinned out.') });
    hits = [];

    /* the material, its atoms drawn more crowded as it is denser */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.fillRect(XL, TOP, XR - XL, BOT - TOP); ctx.restore();
    DOTS.slice(0, M.dots).forEach(([a, b]) => dot(ctx, XL + 6 + a * (XR - XL - 12), TOP + 6 + b * (BOT - TOP - 12), alpha(PAL.ink, 0.18), true, 3));
    line(ctx, XL, TOP, XL, BOT, PAL.ink, 3);
    lab.place(F.label(ctx, M.name, XL + 12, BOT - 20, { side: 'right', size: 20, color: PAL.ink, gap: 0 }));
    hits.push({ x: (XL + XR) / 2, y: TOP + 10, r: 12, name: M.name + ', density ' + (M.rho < 0.01 ? '1.2 kg/m³' : fmt(M.rho * 1000, 0) + ' kg/m³') });

    /* the ruler */
    const RY = BOT + 18;
    line(ctx, XL, RY, XR, RY, PAL.muted, 2);
    const TICK = ['1 μm', '10 μm', '100 μm', '1 mm', '1 cm', '10 cm', '1 m', '10 m', '100 m', '1 km'];
    TICK.forEach((s, i) => { const x = XL + i * DX; line(ctx, x, RY, x, RY + 10, PAL.muted, 2); text(ctx, s, x, RY + 28, PAL.muted, { size: 17, align: 'center' }); });
    text(ctx, 'depth into the material, each step ten times the last', (XL + XR) / 2, RY + 62, PC, { size: 20, weight: 600, align: 'center' });

    /* the clock, also stepping by tens */
    text(ctx, 't = ' + sciText(10 ** lt, 2) + ' s', XR, TOP - 22, C('time'), { size: 20, weight: 600, align: 'right' });

    ['a', 'b', 'g'].forEach((k, ki) => {
      const y = LANE[k], col = COL[k](), f = front(k);
      const stop = k === 'a' ? Ra : k === 'b' ? Rb : 10 ** L1;
      const fx = Math.min(X(stop), X(10 ** Math.max(L0, f))), entered = f >= L0;
      text(ctx, NAME[k], 70, y, PAL.ink, { size: 26, weight: 600, align: 'center' });
      particle(ctx, k, 120, y, 1.2);
      F.arrow(ctx, 150, y, XL - 6, y, alpha(col, 0.8), 4);
      hits.push({ x: 120, y, r: 16, name: k === 'a' ? 'an α, a helium nucleus, charge +2q_e' : k === 'b' ? 'a β, an electron, charge −q_e' : 'a γ, a photon, no charge' });

      /* the track: α and β end at their ranges, the γ beam fades by nine tenths every X10 */
      if (entered && k !== 'g') line(ctx, XL, y, fx, y, alpha(col, 0.6), 4);
      if (entered && k === 'g') {
        for (let x = XL; x < fx; x += 6) {
          const depth = 10 ** (L0 + (x - XL) / DX);
          line(ctx, x, y, Math.min(fx, x + 6), y, alpha(col, 0.15 + 0.6 * Math.exp(-mu * depth)), 4);
        }
      }
      /* ion pairs, as many for each ray, appearing as the ray passes */
      for (let i = 0; i < NP; i++) {
        const depth = k === 'g' ? -Math.log(1 - U[i]) / mu : stop * U[i];
        if (depth < 10 ** L0 || depth > 10 ** L1 || Math.log10(depth) > f) continue;
        ionPair(ctx, X(depth) + 6 * JIT[ki * NP + i], y + 30 * JIT[(ki + 1) % 3 * NP + i], 0.85);
      }
      if (entered) particle(ctx, k, fx, y, 1.2);

      if (k !== 'g' && f >= Math.log10(stop)) {
        const x = X(stop);
        line(ctx, x, y - 30, x, y + 30, PC, 4);
        lab.add(len(stop), x, y - 30, 0, -1, PC, 20, 14);
        hits.push({ x, y, r: 14, name: 'the range of the ' + NAME[k] + ' in ' + M.name + ', ' + len(stop) });
      }
      if (k === 'g') {
        [[1, '90% absorbed'], [2, '99% absorbed']].forEach(([n, s]) => {
          const x = X(n * x10); if (Math.log10(n * x10) > f || n * x10 > 10 ** L1) return;
          line(ctx, x, y - 26, x, y + 26, PC, n === 1 ? 4 : 2, [6, 6]);
          if (n === 1) lab.add(s, x, y + 26, 0, 1, PC, 18, 14);
          hits.push({ x, y, r: 12, name: s + ' in ' + len(n * x10) + ' of ' + M.name });
        });
      }
    });
    lab.flush();

    ro.set('\\kR_{\\alpha} = ' + lenTex(Ra) + ' < \\kR_{\\beta} = ' + lenTex(Rb), 'Each ' + len(x10) + ' of ' + M.name + ' absorbs nine tenths of the γ rays that reach it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
