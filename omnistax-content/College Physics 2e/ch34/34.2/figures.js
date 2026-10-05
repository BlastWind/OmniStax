/* Figures for section 34.2 General Relativity and Quantum Gravity.
   The page binds acceleration, position, time, angle and mass. G and the factors a
   drawing is enlarged by are ink. The two elevators of Figure 34.10 and the Sun and
   the star of Figure 34.11 are referents; the flashlight's light, the Sun, the star,
   the Earth and the black hole wear their own colours through F.fact. The particles
   of Figure 34.17 wear the element palette; an antiparticle is an open disc in its
   particle's hue, the muon pair F.cat(0). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['34.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, labeller, label, hover, readout, hbracket, vbracket, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const sci = (x, d = 2) => {
  if (!x) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)) + 1e-9), m = x / 10 ** e;
  return e === 0 ? fmt(x, d) : fmt(m, d) + '\\times 10^{' + e + '}';
};

/* =====================================================================
   FIGURE 34.10 · sim-elevator · moving · flat (rule 28.1)
   Lengths in metres at S = 150 units per metre. The flashlight's lens is
   2.00 m from the far wall, so with c = 3.00 × 10⁸ m/s the light crosses in
   T = 6.67 × 10⁻⁹ s (model time in ns, played over 4.5 s). In each elevator's
   own frame the beam falls ½a(x/c)², x the distance from the lens. The left
   elevator is at rest when the light leaves and rises ½at², so the beam's
   front crosses the page level while the walls move up round it; the right
   one stands on the Earth and the beam falls. Every drop and rise is drawn
   K = 10¹⁵ times its true size (rule 28.4): 2.18 × 10⁻¹⁶ m at 9.80 m/s² is
   drawn 0.218 m. The sliders reach 25 m/s², a drawn rise of 0.556 m.
===================================================================== */
(function () {
  const H = 640, S = 150, K = 1e15, CL = 3e8, L = 2.0, T = (L / CL) * 1e9;
  const FY = 560, EH = 2.5 * S, PS = 1.65, HAND = { x: 101.8, y: -184.8 };
  const LENS = 45 + HAND.x + 40, EW = LENS + L * S;
  const PANELS = [
    { key: 'a', ref: 'elevator-accelerated', l: 130 },
    { key: 'g', ref: 'elevator-at-rest', l: 783 },
  ];
  const LIGHT = '#E8A317', EARTH = '#7A9A5A';
  const d = sim('sim-elevator', H);
  let A = null, G = null;
  A = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: 0, max: 25, step: 0.05, value: 9.8, unit: 'm/s²', dec: 2, aria: 'the acceleration of the elevator upward', key: 'a', onInput: reset,
    specials: [{ at: () => (G ? G.v : null), label: 'a = g' }] });
  G = ctl(d.controls, { label: '\\kg', cls: 'acceleration', min: 0, max: 25, step: 0.05, value: 9.8, unit: 'm/s²', dec: 2, aria: 'the gravitational field the elevator at rest stands in', key: 'g', onInput: reset,
    specials: [{ at: () => A.v, label: 'g = a' }] });
  A.refresh();
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); A.refresh(); G.refresh(); }
  let hits = [];
  hover(d.stage, () => hits);

  /* the drop below the aim line at x units past the lens, in units, for an acceleration acc */
  const drop = (x, acc) => 0.5 * acc * ((x / S / CL) ** 2) * K * S;
  const rise = (tn, acc) => 0.5 * acc * ((tn * 1e-9) ** 2) * K * S;

  function flashlight(ctx, x, y) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.rect(x - 4, y - 6, 30, 12); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + 26, y - 6); ctx.lineTo(x + 40, y - 11); ctx.lineTo(x + 40, y + 11); ctx.lineTo(x + 26, y + 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const av = A.v, gv = G.v, tn = cy.now(), equal = Math.abs(av - gv) < 0.005;
    const head = equal
      ? 'With $\\ka = \\kg = ' + fmt(av, 2) + '$ m/s² the two beams fall alike, so no one inside can tell acceleration from gravity.'
      : av > gv
        ? 'With $\\ka$ greater than $\\kg$, the beam falls further in the accelerated elevator.'
        : 'With $\\kg$ greater than $\\ka$, the beam falls further in the elevator at rest.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];
    const LC = F.fact(LIGHT), guide = alpha(PAL.ink, 0.35);

    /* the Earth under the elevator at rest */
    ctx.save(); ctx.fillStyle = alpha(F.fact(EARTH), 0.35); ctx.fillRect(720, FY, 680, H - FY); ctx.restore();
    line(ctx, 720, FY, 1400, FY, F.fact(EARTH), 3);
    text(ctx, 'Earth', 760, FY + 40, PAL.ink, { size: 22 });

    PANELS.forEach((p) => {
      const acc = p.key === 'a' ? av : gv, up = p.key === 'a' ? rise(tn, av) : 0;
      const l = p.l, r = l + EW, floor = FY - up, top = floor - EH, col = F.ref(p.ref);
      const fx = l + 45, hx = fx + HAND.x, hy = floor + HAND.y, lx = hx + 40;
      const xf = lx + (Math.min(tn, T) / T) * L * S;

      /* where the accelerated elevator stood when the light left */
      if (up > 2) {
        ctx.save(); ctx.strokeStyle = alpha(col, 0.45); ctx.lineWidth = 2; ctx.setLineDash([10, 10]); ctx.strokeRect(l, FY - EH, EW, EH); ctx.restore();
      }
      ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.6); ctx.fillRect(l, top, EW, EH); ctx.restore();
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.strokeRect(l, top, EW, EH); ctx.restore();
      line(ctx, l, floor, r, floor, col, 7);
      hits.push({ x: l + EW * 0.75, y: top + 40, r: 60, name: p.key === 'a' ? 'the elevator, accelerated upward far from any mass' : 'the elevator, at rest on the Earth' });

      F.silhouette(ctx, { x: fx, y: floor, s: PS, pose: 'stand', hands: [{ x: 62, y: -112 }, { x: -6, y: -76 }] });
      hits.push({ x: fx + 10, y: floor - 130, r: 60, name: 'the person holding the flashlight' });
      flashlight(ctx, hx - 2, hy);
      hits.push({ x: hx + 18, y: hy, r: 26, name: 'the flashlight, aimed horizontally at the far wall' });

      /* the aim line, then the beam as the person sees it */
      line(ctx, lx, hy, r, hy, guide, 2, [10, 10]);
      const pts = [];
      for (let x = lx; x <= xf + 0.5; x += 6) pts.push([x, hy + drop(x - lx, acc)]);
      pts.push([xf, hy + drop(xf - lx, acc)]);
      ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.strokeStyle = alpha(LC, 0.3); ctx.lineWidth = 16; ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke();
      ctx.strokeStyle = LC; ctx.lineWidth = 4; ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke();
      ctx.restore();
      const yf = hy + drop(xf - lx, acc);
      dot(ctx, xf, yf, LC, true, 8);
      hits.push({ x: xf, y: yf, r: 18, name: tn >= T ? 'where the beam strikes the far wall' : 'the front of the beam, crossing at the speed of light' });

      const dy = yf - hy;
      if (dy >= 10) vbracket(ctx, Math.min(xf + 16, r - 12), hy, yf, C('position'));
      if (dy >= 10) lab.add('Δy', Math.min(xf + 16, r - 12) + 12, (hy + yf) / 2, 1, 0, C('position'), 22, 14);

      /* the acceleration or the field, drawn outside the walls */
      const len = (acc / 25) * 150;
      if (p.key === 'a' && len > 6) {
        const ax = l - 34, ay = FY - EH / 2 + len / 2;
        arrow(ctx, ax, ay, ax, ay - len, C('acceleration'), 5);
        lab.add('a', ax, ay - len, 0, -1, C('acceleration'), 24, 18);
      }
      if (p.key === 'g' && len > 6) {
        const gx = r + 50, gy = FY - EH / 2 - len / 2;
        arrow(ctx, gx, gy, gx, gy + len, C('acceleration'), 5);
        lab.add('g', gx + 4, gy + len / 2, 1, 0, C('acceleration'), 24, 14);
      }
    });
    lab.flush();

    const dA = 0.5 * av * (L / CL) ** 2, dG = 0.5 * gv * (L / CL) ** 2;
    ro.set('\\tfrac{1}{2}\\ka\\kt^{2} = ' + sci(dA) + '\\;\\text{m} \\qquad \\tfrac{1}{2}\\kg\\kt^{2} = ' + sci(dG) + '\\;\\text{m}',
      'Light crosses the 2.00 m in $\\kt = ' + sci(L / CL) + '$ s; each drop is drawn $10^{15}$ times its true size.');
  }
  register(d.fig, { update: (s) => cy.step(s, () => T / 4.5), draw });
})();

/* =====================================================================
   FIGURE 34.11 · sim-starlight · still · flat (rule 28.1)
   Einstein's bend for light passing a mass M at closest approach r is
   θ = 4GM/c²r = 2R_S/r. The Sun's R_S is 2.95 km (M = 1.99 × 10³⁰ kg) and
   its radius 6.96 × 10⁵ km, so θ = 8.48 × 10⁻⁶ rad at the limb. The bend is
   drawn 3 × 10⁴ times its true size; r runs 1.0 to 3.0 solar radii, drawn
   60 units each; distances along the line of sight are not to scale. The ray
   is the straight run to the observer's eye, turned back by θ at the closest
   approach, the two joined by a short curve.
===================================================================== */
(function () {
  const H = 540, SX = 520, SY = 390, SR = 60, XS = 110, ZOOM = 3e4, RS = 2.95, RSUN = 6.96e5;
  const EX = 1240, EY = 450, ER = 46, PS = 0.5;
  const SUN = '#F5A524', STAR = '#F2C230', EARTH = '#3A7BC8';
  const d = sim('sim-starlight', H);
  const R = ctl(d.controls, { label: '\\krad', cls: 'position', min: 1, max: 3, step: 0.1, value: 1, unit: 'solar radii', dec: 1, aria: 'the closest approach of the starlight to the Sun’s center, in solar radii', key: 'r' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  function starShape(ctx, x, y, r, color, filled) {
    ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = filled ? color : PAL.panel; ctx.lineWidth = 2.5;
    if (!filled) ctx.setLineDash([4, 4]);
    ctx.beginPath();
    for (let i = 0; i < 16; i++) { const a = (i * Math.PI) / 8 - Math.PI / 2, q = i % 2 ? r * 0.45 : r; i ? ctx.lineTo(x + q * Math.cos(a), y + q * Math.sin(a)) : ctx.moveTo(x + q * Math.cos(a), y + q * Math.sin(a)); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const rv = R.v, th = (2 * RS) / (rv * RSUN), bend = th * ZOOM;
    const one = Math.abs(rv - 1) < 1e-9;
    const lab = labeller(ctx, H, { headline: topline(ctx, 'Starlight passing $\\krad = ' + fmt(rv, 1) + '$ solar ' + (one ? 'radius' : 'radii') + ' from the Sun’s center bends toward it, so the star seems higher than it is.') });
    hits = [];
    const eye = { x: EX + 3, y: EY - ER - 140 * PS };
    const P = { x: SX, y: SY - rv * SR };
    const aOut = Math.atan2(eye.y - P.y, eye.x - P.x), aIn = aOut - bend;
    const back = (a) => ({ x: XS, y: P.y - (P.x - XS) * Math.tan(a) });
    const star = back(aIn), seen = back(aOut);
    const w = 70, Ain = { x: P.x - w * Math.cos(aIn), y: P.y - w * Math.sin(aIn) }, Bout = { x: P.x + w * Math.cos(aOut), y: P.y + w * Math.sin(aOut) };
    const SC = F.fact(SUN), ST = F.fact(STAR), RC = PAL.ink;

    /* the very large distance, not to scale */
    hbracket(ctx, XS, SX, 494, PAL.ink);
    text(ctx, 'very large distance (not to scale)', (XS + SX) / 2, 520, PAL.ink, { size: 18, align: 'center' });

    /* the Sun, the Earth and its observer */
    ctx.save(); ctx.fillStyle = alpha(SC, 0.25); ctx.beginPath(); ctx.arc(SX, SY, SR + 12, 0, TAU); ctx.fill();
    ctx.fillStyle = SC; ctx.beginPath(); ctx.arc(SX, SY, SR, 0, TAU); ctx.fill(); ctx.restore();
    hits.push({ x: SX, y: SY, r: SR, name: 'the Sun, 6.96 × 10⁵ km in radius, whose Schwarzschild radius is 2.95 km' });
    ctx.save(); ctx.fillStyle = F.fact(EARTH); ctx.beginPath(); ctx.arc(EX, EY, ER, 0, TAU); ctx.fill(); ctx.restore();
    F.silhouette(ctx, { x: EX, y: EY - ER, s: PS, pose: 'stand' });
    hits.push({ x: EX, y: EY, r: ER, name: 'the Earth' }, { x: EX, y: eye.y + 20, r: 30, name: 'an observer on the Earth, seeing the star along the light that arrives' });

    /* r, from the Sun's center to the ray's closest approach */
    line(ctx, SX, SY, SX, P.y + 4, C('position'), 3);
    dot(ctx, SX, SY, C('position'), true, 5);
    lab.add('r', SX + 8, (P.y + SY) / 2, 1, 0, C('position'), 24, 10);

    /* the line of sight back to where the star seems to be, and the undeflected path */
    line(ctx, P.x, P.y, seen.x, seen.y, alpha(RC, 0.55), 2.5, [10, 10]);
    line(ctx, P.x, P.y, P.x + 170 * Math.cos(aIn), P.y + 170 * Math.sin(aIn), alpha(RC, 0.3), 2, [4, 8]);
    /* the ray */
    ctx.save(); ctx.strokeStyle = RC; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(star.x, star.y); ctx.lineTo(Ain.x, Ain.y); ctx.quadraticCurveTo(P.x, P.y, Bout.x, Bout.y); ctx.lineTo(eye.x - 6, eye.y); ctx.stroke(); ctx.restore();
    angleArc(ctx, P, 110, -aIn, -aOut, '', null, C('angle'));
    lab.add('θ', P.x + 110 * Math.cos(aIn), P.y + 110 * Math.sin(aIn), 0, -1, C('angle'), 22, 14);

    starShape(ctx, star.x, star.y, 11, ST, true);
    starShape(ctx, seen.x, seen.y, 11, ST, false);
    hits.push({ x: star.x, y: star.y, r: 20, name: 'the star, where it actually is' }, { x: seen.x, y: seen.y, r: 20, name: 'where the star appears to be, along the light that reaches the Earth' });
    label(ctx, 'actual star', star.x, star.y, { side: 'below', gap: 30, color: F.ref('star'), size: 20 });
    label(ctx, 'apparent position', seen.x, seen.y, { side: 'above', gap: 30, color: F.ref('star'), size: 20 });
    label(ctx, 'Sun', SX + SR + 12, SY + 20, { side: 'right', gap: 10, color: F.ref('sun'), size: 22 });
    label(ctx, 'Earth-bound observer', EX, EY + ER, { side: 'below', gap: 24, color: PAL.ink, size: 20 });
    lab.flush();

    ro.set('\\ktheta = \\frac{2\\kRS}{\\krad} = \\frac{2(2.95\\;\\text{km})}{' + sci(rv * RSUN) + '\\;\\text{km}} = ' + sci(th) + '\\;\\text{rad}',
      'The bend is drawn $3\\times 10^{4}$ times its true size.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 34.17 · sim-black-hole · moving · flat (rule 28.1)
   R_S = 2GM/c² with G = 6.67 × 10⁻¹¹ N·m²/kg², c = 3.00 × 10⁸ m/s and
   M☉ = 1.99 × 10³⁰ kg: 2.95 km per solar mass. The horizon is drawn on a fixed
   scale of 8 units per km, so the 6.0 solar masses at the top of the slider
   reach 142 units; 1.7 solar masses, the "perhaps 10 km across" of the text,
   is the default. The particles are not to that scale. Model time 0 to 5.6 s at
   rate 1: the book's four pairs, created 22 units outside the horizon at
   0.2, 1.0, 1.8 and 2.6 s, split, and one member falls in (from rest, 260
   units/s²) while the other escapes (120 units/s); both muons fall in; the
   escaping positron meets an electron 110 units further out and the two γ rays
   leave at 220 units/s. The paths are drawn, not computed: the book gives no rate.
===================================================================== */
(function () {
  const H = 660, O = { x: 700, y: 330 }, KM = 8, T = 5.6;
  const G6 = 6.67e-11, CL = 3e8, MSUN = 1.99e30;
  const VOUT = 120, AIN = 260, VG = 220, GAP = 22, MEET = 110;
  const deg = (a) => (a * Math.PI) / 180;
  const PAIRS = [
    { t0: 0.2, ang: deg(180), out: 'p', inn: 'pbar' },
    { t0: 1.0, ang: deg(-40), out: 'e-', inn: 'e+' },
    { t0: 1.8, ang: deg(40), out: null, inn: 'mu-', inn2: 'mu+' },
    { t0: 2.6, ang: deg(118), out: 'e+', inn: 'e-', meet: true },
  ];
  const NAME = {
    p: 'a proton, escaping', pbar: 'an antiproton, falling into the hole', 'e-': 'an electron', 'e+': 'a positron',
    'mu-': 'a muon, falling into the hole', 'mu+': 'an antimuon, falling into the hole',
  };
  const d = sim('sim-black-hole', H);
  const M = ctl(d.controls, { label: '\\kM', cls: 'mass', min: 1, max: 6, step: 0.1, value: 1.7, unit: 'M☉', dec: 1, aria: 'the mass of the black hole, in solar masses', key: 'M', onInput: reset });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); }
  let hits = [];
  hover(d.stage, () => hits);

  const look = (k) => ({
    p: [F.el('p+'), true], pbar: [F.el('p+'), false], 'e-': [F.el('e-'), true], 'e+': [F.el('e+'), true],
    'mu-': [F.cat(0), true], 'mu+': [F.cat(0), false],
  })[k];
  function particle(ctx, x, y, k, a = 1) {
    const [c, filled] = look(k);
    F.faded(ctx, a, [0, 0], () => {
      ctx.save(); ctx.lineWidth = 3.5; ctx.strokeStyle = c; ctx.fillStyle = filled ? c : PAL.panel;
      ctx.beginPath(); ctx.arc(x, y, 10, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    });
  }
  /* a γ ray: a wave train with an arrowhead, as 33.4 draws a photon */
  function photon(ctx, x, y, u, col, Lw = 90) {
    const lam = 20, A = 9, n = [-u[1], u[0]];
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3.5; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i <= 50; i++) {
      const s = -Lw / 2 + (Lw * i) / 50, env = Math.cos((Math.PI * s) / Lw), w = A * env * Math.sin((TAU * s) / lam);
      const px = x + u[0] * s + n[0] * w, py = y + u[1] * s + n[1] * w;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.stroke(); ctx.restore();
    arrow(ctx, x + u[0] * (Lw / 2 - 4), y + u[1] * (Lw / 2 - 4), x + u[0] * (Lw / 2 + 22), y + u[1] * (Lw / 2 + 22), col, 3.5);
  }
  const at = (ang, r) => ({ x: O.x + r * Math.cos(ang), y: O.y + r * Math.sin(ang) });
  const inside = (q) => q.x > -20 && q.x < 1420 && q.y > 90 && q.y < H + 20;

  function draw() {
    const { ctx } = begin(d.c);
    const mv = M.v, mkg = mv * MSUN, rsm = (2 * G6 * mkg) / (CL * CL), rskm = Number((rsm / 1000).toPrecision(3)), Rh = rskm * KM, Rc = Rh + GAP;
    const tn = cy.now(), GA = F.el('gamma'), PC = C('position');
    const lab = labeller(ctx, H, { headline: topline(ctx, 'Pairs form just outside the event horizon, $\\kRS = ' + rskm + '\\;\\text{km}$ from the center, and one of a pair may escape.') });
    hits = [];

    /* the hole and its horizon */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.12); ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(O.x, O.y, Rh + 9, 0, TAU); ctx.stroke();
    ctx.fillStyle = F.fact('#000000'); ctx.beginPath(); ctx.arc(O.x, O.y, Rh, 0, TAU); ctx.fill();
    ctx.strokeStyle = PC; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(O.x, O.y, Rh, 0, TAU); ctx.stroke(); ctx.restore();
    hits.push({ x: O.x, y: O.y, r: Math.max(Rh, 14), name: 'the black hole: nothing inside the event horizon can escape' });
    const ra = deg(-115), rim = at(ra, Rh);
    line(ctx, O.x, O.y, rim.x, rim.y, PC, 3);
    lab.add('R_{S}', rim.x, rim.y, Math.cos(ra), Math.sin(ra), PC, 24, 22);
    const hz = at(deg(-155), Rh);
    lab.add('event horizon', hz.x, hz.y, Math.cos(deg(-155)), Math.sin(deg(-155)), PAL.ink, 20, 60);

    /* the pairs */
    PAIRS.forEach((p) => {
      const s = tn - p.t0; if (s < 0) return;
      const split = Math.min(1, s / 0.3), tg = [-Math.sin(p.ang), Math.cos(p.ang)];
      const base = at(p.ang, Rc), sp = 12 * split;
      const sm = Math.max(0, s - 0.3);
      /* the member that falls in, or both of the muons */
      [[p.inn, -1], ...(p.inn2 ? [[p.inn2, 1]] : [])].forEach(([k, side]) => {
        const r = Rc - 0.5 * AIN * sm * sm; if (r <= Rh - 4) return;
        const off = p.inn2 ? side * sp : -sp, q = { x: O.x + r * Math.cos(p.ang) + tg[0] * off, y: O.y + r * Math.sin(p.ang) + tg[1] * off };
        const a = Math.min(1, Math.max(0, (r - Rh + 4) / 10));
        particle(ctx, q.x, q.y, k, a);
        hits.push({ x: q.x, y: q.y, r: 16, name: NAME[k] + (k === 'e+' || k === 'e-' ? ', falling into the hole' : '') });
      });
      if (!p.out) return;
      const ro2 = Rc + VOUT * sm, met = p.meet && ro2 >= Rc + MEET;
      if (!met) {
        const q = { x: O.x + ro2 * Math.cos(p.ang) + tg[0] * sp, y: O.y + ro2 * Math.sin(p.ang) + tg[1] * sp };
        if (inside(q)) {
          particle(ctx, q.x, q.y, p.out);
          hits.push({ x: q.x, y: q.y, r: 16, name: NAME[p.out] + ', escaping' });
        }
      }
      if (p.meet) {
        const tm = MEET / VOUT + 0.3, wait = at(p.ang, Rc + MEET);
        const wq = { x: wait.x + tg[0] * 12, y: wait.y + tg[1] * 12 };
        if (!met) { particle(ctx, wq.x, wq.y, 'e-'); hits.push({ x: wq.x, y: wq.y, r: 16, name: 'an electron outside the hole' }); }
        if (met) {
          const k = s - tm, rr = VG * k;
          if (k < 0.4) F.faded(ctx, 1 - k / 0.4, [0, 0], () => { for (let i = 0; i < 10; i++) { const a = (i * TAU) / 10, r0 = 12 + 40 * k, r1 = r0 + 18; line(ctx, wq.x + Math.cos(a) * r0, wq.y + Math.sin(a) * r0, wq.x + Math.cos(a) * r1, wq.y + Math.sin(a) * r1, GA, 3); } });
          [p.ang - deg(40), p.ang + deg(40)].forEach((g) => {
            const u = [Math.cos(g), Math.sin(g)], q = { x: wq.x + u[0] * (rr + 40), y: wq.y + u[1] * (rr + 40) };
            if (rr > 6 && inside(q)) { photon(ctx, q.x, q.y, u, GA); hits.push({ x: q.x, y: q.y, r: 40, name: 'a γ ray from the annihilation, escaping' }); }
          });
        }
      }
    });

    /* the scale and the legend */
    const sx = 1180, sy = 620, bar = 10 * KM;
    hbracket(ctx, sx, sx + bar, sy, PAL.ink);
    text(ctx, '10 km', sx + bar + 16, sy, PAL.ink, { size: 18 });
    const LG = [['p', 'proton p'], ['pbar', 'antiproton p̄'], ['e-', 'electron e⁻'], ['e+', 'positron e⁺'], ['mu-', 'muon μ⁻'], ['mu+', 'antimuon μ⁺']];
    LG.forEach(([k, s], i) => { const y = 432 + i * 30; particle(ctx, 60, y, k); text(ctx, s, 92, y, PAL.ink, { size: 19 }); });
    photon(ctx, 44, 612, [1, 0], GA, 26);
    text(ctx, 'γ ray', 92, 612, PAL.ink, { size: 19 });
    lab.flush();

    ro.set('\\kRS = \\frac{2G\\kM}{\\kc^{2}} = \\frac{2(6.67\\times 10^{-11}\\;\\text{N}\\cdot\\text{m}^{2}/\\text{kg}^{2})(' + sci(mkg) + '\\;\\text{kg})}{(3.00\\times 10^{8}\\;\\text{m/s})^{2}} = ' + rskm + '\\;\\text{km}');
  }
  register(d.fig, { update: (s) => cy.step(s, () => 1), draw });
})();
};
