/* Figures for section 32.3 Therapeutic Uses of Ionizing Radiation.
   The page binds dose, position and angle. The γ beam is F.el('gamma'), the ⁶⁰Co
   capsule F.el('Co'); the tumor is the section's referent, drawn with F.ref. The dose
   map is one scalar over the chest, drawn in the dose hue at an opacity proportional
   to the dose, with its scale beside the graph (rule 7.1). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, arrow, text, topline, label, hover, readout, axes, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
const PI = Math.PI, DEG = 180 / PI;

/* =====================================================================
   FIGURE 32.9 · sim-crossfire · moving · flat (rule 28.1)
   A cut through the chest in the plane the source turns in, 8 units to the
   cm, the tumor at the origin and the turning axis through it. The chest is an
   ellipse 34 by 22 cm centred 4 cm right of and 2 cm below the tumor, on a
   table; the source's aperture turns at 29 cm from φ = 0 (the patient's right,
   beam running across the chest) counterclockwise through θ in RUN seconds.
   The beam is parallel-sided, d wide, unattenuated. A point at (r, ψ) lies in
   it while (φ − ψ) mod π is within β = asin(d/2r) of 0, so its share of the
   treatment is the measure of those φ in the arc swept so far over θ; the
   tumor's 2.00 Sv is the text's 200-rem treatment. Graph: the dose along
   y = 0, 0 to 2.5 Sv against x from −15 to 25 cm, fixed.
===================================================================== */
(function () {
  const H = 745, S = 9.5, RUN = 5, DT = 2.0, RA = 27, RO = 32, HW = 4.5;
  const CX = 4, CY = -2, A = 17, B = 11, CELL = 0.5, LEVELS = 24;
  const RC = { x: 380, y: 415 }, GB = { l: 820, r: 1340, t: 160, b: 480 };
  const P = (x, y) => ({ x: RC.x + x * S, y: RC.y - y * S });
  const d = sim('sim-crossfire', H);
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 360, step: 5, value: 360, unit: '°', dec: 0, onInput: reset, aria: 'the arc the source sweeps about the patient' });
  const DW = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1, max: 8, step: 0.5, value: 3, unit: 'cm', dec: 1, onInput: reset, aria: 'the width of the tumor and of the beam' });
  const cy = cycle(() => 1, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const inChest = (x, y) => ((x - CX) / A) ** 2 + ((y - CY) / B) ** 2 <= 1;
  const CELLS = [];
  for (let x = CX - A + CELL / 2; x < CX + A; x += CELL)
    for (let y = CY - B + CELL / 2; y < CY + B; y += CELL)
      if (inChest(x, y)) CELLS.push({ x, y, r: Math.hypot(x, y), psi: Math.atan2(y, x) });
  const SKIN = Array.from({ length: 720 }, (_, i) => { const a = (i / 720) * 2 * PI, x = CX + A * Math.cos(a), y = CY + B * Math.sin(a); return { x, y, r: Math.hypot(x, y), psi: Math.atan2(y, x) }; });

  const mod = (a, m) => ((a % m) + m) % m;
  /* the share of a sweep through Φ from φ = 0 in which the beam, d wide, covers a point at (r, ψ) */
  function covered(p, w, Phi) {
    if (p.r <= w / 2) return Phi;
    const b = Math.asin(w / (2 * p.r)), u0 = mod(b - p.psi, PI);
    const G = (x) => Math.floor(x / PI) * 2 * b + Math.min(mod(x, PI), 2 * b);
    return G(u0 + Phi) - G(u0);
  }
  const inBeam = (p, w) => Math.abs(p.r * Math.sin(p.psi)) <= w / 2;
  /* the fraction of the tumor's dose a point has received when the source has swept τ of its arc */
  const share = (p, w, th, tau) => (th > 0 ? covered(p, w, th * tau) / th : inBeam(p, w) ? tau : 0);

  function draw() {
    const { ctx } = begin(d.c);
    const thDeg = Math.round(TH.v), th = thDeg / DEG, w = DW.v, t = cy.now(), on = t < 1;
    const DC = C('dose'), PC = C('position'), TUM = F.ref('tumor'), GA = F.el('gamma'), CO = F.el('Co');
    hits = [];

    /* the most exposed patch of skin, by the end of the treatment */
    let best = SKIN[0], bf = -1;
    for (const p of SKIN) { const f = share(p, w, th, 1); if (f > bf + 1e-9) { bf = f; best = p; } }
    const dth = th > 0 ? Math.round(covered(best, w, th) * DEG) : 0;
    const dSkin = th > 0 ? DT * dth / thDeg : DT;

    topline(ctx, th > 0
      ? 'Swept through $\\ktheta = ' + thDeg + '^\\circ$, the beam never leaves the tumor, but crosses each patch of skin for at most $\\kdtheta = ' + dth + '^\\circ$.'
      : 'From one fixed direction the beam gives the tissue all along its path the tumor’s whole dose.');

    /* the table and the chest, in section */
    const T0 = P(-14, -13), T1 = P(22, -14.5);
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.fillRect(T0.x, T0.y, T1.x - T0.x, T1.y - T0.y); ctx.restore();
    hits.push({ x: P(17, -14).x, y: P(0, -13.75).y, r: 12, name: 'the treatment table' });
    const c0 = P(CX, CY);
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.8); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(c0.x, c0.y, A * S, B * S, 0, 0, 2 * PI); ctx.fill(); ctx.restore();

    /* the dose so far, cell by cell, in LEVELS steps of opacity */
    const lv = Array.from({ length: LEVELS }, () => []);
    for (const p of CELLS) {
      const k = Math.round(share(p, w, th, t) * (LEVELS - 1));
      if (k > 0) lv[k].push(p);
    }
    ctx.save();
    lv.forEach((ps, k) => {
      if (!ps.length) return;
      ctx.fillStyle = alpha(DC, 0.95 * k / (LEVELS - 1)); ctx.beginPath();
      for (const p of ps) { const q = P(p.x, p.y); ctx.rect(q.x - CELL * S / 2, q.y - CELL * S / 2, CELL * S + 0.4, CELL * S + 0.4); }
      ctx.fill();
    });
    ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(c0.x, c0.y, A * S, B * S, 0, 0, 2 * PI); ctx.stroke(); ctx.restore();
    hits.push({ x: P(CX + 9, CY - 5).x, y: P(CX + 9, CY - 5).y, r: 40, name: 'the patient’s chest, in section' });

    /* the line the profile is read along */
    const L0 = P(CX - A * Math.sqrt(1 - (CY / B) ** 2), 0), L1 = P(CX + A * Math.sqrt(1 - (CY / B) ** 2), 0);
    line(ctx, L0.x, L0.y, L1.x, L1.y, alpha(PAL.ink, 0.35), 2, [4, 8]);
    hits.push({ x: P(14, 0).x, y: L0.y, r: 12, name: 'the line x across the chest through the tumor, along which the graph reads the dose' });

    /* the source's path, and the source with its beam */
    if (th > 0) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([10, 10]);
      ctx.beginPath(); ctx.arc(RC.x, RC.y, (RA + RO) / 2 * S, 0, -th, true); ctx.stroke(); ctx.restore();
      hits.push({ x: RC.x, y: RC.y - (RA + RO) / 2 * S, r: 18, name: 'the path of the source, an arc of ' + thDeg + '° about the tumor' });
    }
    const phi = th * t, ux = Math.cos(phi), uy = Math.sin(phi), nx = -uy, ny = ux;
    if (on) {
      const a = P(RA * ux + nx * w / 2, RA * uy + ny * w / 2), b = P(RA * ux - nx * w / 2, RA * uy - ny * w / 2);
      const c = P(-RA * ux - nx * w / 2, -RA * uy - ny * w / 2), e = P(-RA * ux + nx * w / 2, -RA * uy + ny * w / 2);
      ctx.save(); ctx.fillStyle = alpha(GA, 0.16); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.lineTo(e.x, e.y); ctx.closePath(); ctx.fill(); ctx.restore();
      line(ctx, a.x, a.y, e.x, e.y, alpha(GA, 0.6), 1.5);
      line(ctx, b.x, b.y, c.x, c.y, alpha(GA, 0.6), 1.5);
      for (let k = 0; k < 6; k++) {
        const s = mod(k / 6 + t * RUN * 0.9, 1) * 2 * RA, h = P((RA - s) * ux, (RA - s) * uy), tl = P((RA - s + 3.5) * ux, (RA - s + 3.5) * uy);
        if (s > 3.5) arrow(ctx, tl.x, tl.y, h.x, h.y, GA, 4);
      }
      const m = P(RA * 0.55 * ux, RA * 0.55 * uy);
      hits.push({ x: m.x, y: m.y, r: 16, name: 'the beam of ⁶⁰Co γ rays, ' + fmt(w, 1) + ' cm wide, aimed through the tumor' });
    }
    const corner = (rr, s) => P(rr * ux + s * HW * nx, rr * uy + s * HW * ny);
    const h1 = corner(RA, 1), h2 = corner(RO, 1), h3 = corner(RO, -1), h4 = corner(RA, -1);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(h1.x, h1.y); ctx.lineTo(h2.x, h2.y); ctx.lineTo(h3.x, h3.y); ctx.lineTo(h4.x, h4.y); ctx.closePath(); ctx.fill();
    ctx.fillStyle = alpha(PAL.muted, 0.45); ctx.fill(); ctx.stroke(); ctx.restore();
    const g1 = P((RA + 0.1) * ux + nx * w / 2, (RA + 0.1) * uy + ny * w / 2), g2 = P((RA + 0.1) * ux - nx * w / 2, (RA + 0.1) * uy - ny * w / 2);
    line(ctx, g1.x, g1.y, g2.x, g2.y, on ? GA : PAL.ink, 4);
    const sc = P((RA + RO) / 2 * ux, (RA + RO) / 2 * uy);
    dot(ctx, sc.x, sc.y, CO, true, 7);
    hits.push({ x: sc.x, y: sc.y, r: 34, name: 'the ⁶⁰Co source in its shielded housing' + (on ? '' : ', its beam now off') });

    /* the tumor */
    ctx.save(); ctx.strokeStyle = TUM; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(RC.x, RC.y, w / 2 * S, 0, 2 * PI); ctx.stroke(); ctx.restore();
    hits.push({ x: RC.x, y: RC.y, r: Math.max(10, w / 2 * S), name: 'the tumor, ' + fmt(w, 1) + ' cm across, at the crossing point of the beams' });

    /* the most exposed patch of skin */
    const bs = P(best.x, best.y);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(bs.x, bs.y, 9, 0, 2 * PI); ctx.stroke(); ctx.restore();
    hits.push({ x: bs.x, y: bs.y, r: 14, name: 'the patch of skin that receives the most, ' + fmt(dSkin, dSkin < 0.1 ? 3 : 2) + ' Sv' });

    label(ctx, 'tumor', RC.x, RC.y + w / 2 * S, { side: 'below', size: 20, color: TUM, gap: 46, H });
    const ox = (best.x - CX) / A ** 2, oy = (best.y - CY) / B ** 2;
    label(ctx, 'skin', bs.x, bs.y, { side: Math.abs(oy) * B > Math.abs(ox) * A ? (oy > 0 ? 'above' : 'below') : (ox > 0 ? 'right' : 'left'), size: 20, gap: 30, H });
    text(ctx, 'table', T0.x + 8, T1.y + 22, PAL.ink, { size: 20 });

    /* the dose profile along x */
    const xl = CX - A * Math.sqrt(1 - (CY / B) ** 2), xr = CX + A * Math.sqrt(1 - (CY / B) ** 2);
    const at = (x) => ({ r: Math.abs(x), psi: x >= 0 ? 0 : PI });
    const { X, Y } = axes(ctx, GB, [-15, 25], [0, 2.5], { nx: 8, ny: 5, xl: 'x (cm)', xc: PC, yl: 'dose (Sv)', yc: DC, fy: (v) => fmt(v, 1) });
    ctx.save(); ctx.fillStyle = alpha(TUM, 0.14); ctx.fillRect(X(-w / 2), GB.t, X(w / 2) - X(-w / 2), GB.b - GB.t); ctx.restore();
    hits.push({ x: X(0), y: (GB.t + GB.b) / 2, r: 14, name: 'the tumor’s width along x' });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (x) => DT * share(at(x), w, th, 1), xl, xr, X, Y, alpha(PAL.ink, 0.45), 3, 240); ctx.restore();
    curve(ctx, (x) => DT * share(at(x), w, th, t), xl, xr, X, Y, DC, 5, 240);
    hits.push({ x: X(xr) - 20, y: Y(DT * share(at(xr - 1), w, th, 1)), r: 14, name: 'the dose at the end of the treatment (dashed) and so far (solid)' });

    /* the legend: the dose scale, the beam and the source */
    const BX = GB.l, BY = 610, BW = 300;
    ctx.save();
    for (let i = 0; i < 60; i++) { ctx.fillStyle = alpha(DC, 0.95 * i / 59); ctx.fillRect(BX + (BW * i) / 60, BY - 10, BW / 60 + 0.5, 20); }
    ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 1.5; ctx.strokeRect(BX, BY - 10, BW, 20); ctx.restore();
    [0, 1, 2].forEach((v) => text(ctx, String(v), BX + BW * v / DT, BY + 30, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, 'dose (Sv)', BX + BW + 18, BY, DC, { size: 20, weight: 600 });
    line(ctx, BX, BY + 70, BX + 44, BY + 70, GA, 5);
    text(ctx, 'γ beam', BX + 58, BY + 70, PAL.ink, { size: 20 });
    dot(ctx, BX + 240, BY + 70, CO, true, 8);
    text(ctx, '⁶⁰Co source', BX + 258, BY + 70, PAL.ink, { size: 20 });

    ro.set(th > 0
      ? '\\kdose_{\\text{skin}} = \\frac{\\kdtheta}{\\ktheta}\\,\\kdose_{\\text{tumor}} = \\frac{' + dth + '^\\circ}{' + thDeg + '^\\circ}(2.00\\;\\text{Sv}) = ' + fmt(dSkin, dSkin < 0.1 ? 3 : 2) + '\\;\\text{Sv}'
      : '\\kdose_{\\text{skin}} = \\kdose_{\\text{tumor}} = 2.00\\;\\text{Sv}',
      th > 0 ? 'Tissue just outside the tumor is in the beam from almost every direction, so its dose stays close to the tumor’s.' : '', { form: th > 0 });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / RUN), draw });
})();
};
