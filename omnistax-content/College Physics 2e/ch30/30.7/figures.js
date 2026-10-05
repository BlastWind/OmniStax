/* Figures for section 30.7 Patterns in Spectra Reveal More Quantization.
   The page binds magnetic-field (B_ext, B_orb, B_int), angular-momentum (L_orb),
   angle (the angle to a field) and energy (the spacing of Zeeman lines). The
   spectral lines name no element and no wavelength, so they are ink. The
   electron is F.el('e-') and the nucleus F.el('p+'). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.7'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, labeller, hbracket, angleArc, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the energy one tesla moves a line of a Zeeman triplet, 5.79 × 10⁻⁵ eV */
const MU_B = 5.79e-5;
const sciTex = (x) => { if (x === 0) return '0'; let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e); if (+m.toFixed(2) >= 10) { m /= 10; e++; } return fmt(m, 2) + '\\times 10^{' + e + '}'; };

/* a spectrum strip: two rules, the lines between them */
function strip(ctx, x0, x1, y0, y1) { line(ctx, x0, y0, x1, y0, PAL.ink, 2); line(ctx, x0, y1, x1, y1, PAL.ink, 2); }
function energyAxis(ctx, x0, x1, y) { arrow(ctx, x0, y, x1, y, PAL.muted, 3); text(ctx, 'photon energy', x1, y + 24, PAL.muted, { size: 17, align: 'right' }); }

/* =====================================================================
   FIGURE 30.47 · sim-zeeman · still · flat (rule 28.1)
   The field-free strip above, the live strip below. Line spacing 40 units per
   tesla, so 2.00 T opens the quintet to ±160 about its line; fixed.
===================================================================== */
(function () {
  const d = sim('sim-zeeman', 420);
  const B = ctl(d.controls, { label: '\\kBext', cls: 'magnetic-field', min: 0, max: 2, step: 0.01, value: 1, unit: 'T', dec: 2,
    aria: 'the external magnetic field', specials: [{ at: 0, label: 'no field' }] });
  const X0 = 150, X1 = 1150, XA = 420, XB = 880, PX = 40;
  const A0 = 100, A1 = 170, B0 = 240, B1 = 310;
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  function draw() {
    const { ctx } = begin(d.c);
    const b = B.v, s = PX * b, MC = C('magnetic-field'), EC = C('energy');
    hits = [];
    strip(ctx, X0, X1, A0, A1); strip(ctx, X0, X1, B0, B1);
    for (const x of [XA, XB]) {
      line(ctx, x, A0, x, A1, PAL.ink, 4);
      line(ctx, x, A1, x, B0, alpha(PAL.ink, 0.35), 2, [6, 6]);
    }
    hits.push({ x: XA, y: (A0 + A1) / 2, r: 14, name: 'the left line with no field' }, { x: XB, y: (A0 + A1) / 2, r: 14, name: 'the right line with no field' });
    for (let i = -1; i <= 1; i++) line(ctx, XA + i * s, B0, XA + i * s, B1, PAL.ink, 4);
    for (let i = -2; i <= 2; i++) line(ctx, XB + i * s, B0, XB + i * s, B1, PAL.ink, 4);
    hits.push({ x: XA, y: (B0 + B1) / 2, r: 14 + s, name: b > 0 ? 'the left line, split into three' : 'the left line' },
      { x: XB, y: (B0 + B1) / 2, r: 14 + 2 * s, name: b > 0 ? 'the right line, split into five' : 'the right line' });
    text(ctx, 'B_{ext} = 0', X1 + 24, (A0 + A1) / 2, MC, { size: 22, weight: 600, align: 'left' });
    text(ctx, 'B_{ext} = ' + fmt(b, 2) + ' T', X1 + 24, (B0 + B1) / 2, MC, { size: 22, weight: 600, align: 'left' });
    if (s >= 18) hbracket(ctx, XA, XA + s, B1 + 18, EC, 'ΔE', { side: 'below' });
    energyAxis(ctx, X0, X1, 386);

    topline(ctx, b === 0 ? 'With no external field each line is single.'
      : 'In a ' + fmt(b, 2) + '-T field the left line splits into three lines and the right into five.');
    ro.set('\\kdE = (5.79\\times 10^{-5}\\ \\text{eV/T})\\,\\kBext = (5.79\\times 10^{-5}\\ \\text{eV/T})(' + fmt(b, 2) + '\\ \\text{T}) = ' + sciTex(MU_B * b) + '\\ \\text{eV}', '', { form: 'z' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 30.48 + 30.49 · sim-orbit-in-field · moving · locked view (rule 28.2)
   The orbit and its two vectors in a fixed view from slightly above; the
   five directions lie in the picture's plane. The electron circles twice in
   5 s. Beside, the five lines of the right-hand line of Figure 30.47 at
   1.00 T, highest photon energy to the right.
===================================================================== */
(function () {
  const d = sim('sim-orbit-in-field', 560);
  const ANG = ['35.3', '65.9', '90', '114.1', '144.7'];
  const RANK = ['highest', 'second highest', 'middle', 'second lowest', 'lowest'];
  const th = choice(d.controls, { label: '\\ktheta', options: ANG.map((a) => ({ value: a, label: a + '°' })), value: '35.3', aria: 'the angle of the orbital angular momentum to the field' });
  const V = F.view({ yaw: 0, pitch: 0.28, dist: 2400, cx: 420, cy: 320 });
  const R = 150, LV = 200, T = 5;
  const cy = cycle(() => T, 1.2);
  const rad = (a) => (+a * Math.PI) / 180;
  const pt = (p) => { const q = V.P(p); return { x: q[0], y: q[1] }; };
  const SX0 = 860, SX1 = 1320, SY0 = 230, SY1 = 310, SC = 1090, SP = 44;
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  function state(ctx, a, phi, lab) {
    const t = rad(a), n = [Math.sin(t), Math.cos(t), 0], u = [Math.cos(t), -Math.sin(t), 0];
    const ring = [];
    for (let k = 0; k <= 72; k++) { const f = (k / 72) * 2 * Math.PI; ring.push(pt([R * (Math.cos(f) * u[0]), R * (Math.cos(f) * u[1]), R * Math.sin(f)])); }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ring.forEach((p, k) => (k ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y))); ctx.stroke(); ctx.restore();
    const o = pt([0, 0, 0]), hl = pt([n[0] * LV, n[1] * LV, 0]), hb = pt([-n[0] * LV, -n[1] * LV, 0]);
    arrow(ctx, o.x, o.y, hb.x, hb.y, C('magnetic-field'), 5);
    arrow(ctx, o.x, o.y, hl.x, hl.y, C('angular-momentum'), 5);
    dot(ctx, o.x, o.y, F.el('p+'), true, 9);
    const e = pt([R * Math.cos(phi) * u[0], R * Math.cos(phi) * u[1], R * Math.sin(phi)]);
    dot(ctx, e.x, e.y, F.el('e-'), true, 11);
    if (!lab) return;
    hits.push({ x: e.x, y: e.y, r: 16, name: 'the electron, circling its orbit' }, { x: o.x, y: o.y, r: 12, name: 'the nucleus' });
    lab.beside({ x1: o.x, y1: o.y, x2: hl.x, y2: hl.y }, n[0] > 0.2 ? 'right' : 'left', 'L_{orb}', C('angular-momentum'), 24, { offset: 0.95 });
    lab.beside({ x1: o.x, y1: o.y, x2: hb.x, y2: hb.y }, 'left', 'B_{orb}', C('magnetic-field'), 24, { offset: 0.95 });
    const am = Math.atan2(-(hl.y - o.y), hl.x - o.x);
    angleArc(ctx, o, 64, Math.PI / 2, am, 'θ', lab, C('angle'));
  }

  function draw() {
    const { ctx, H } = begin(d.c);
    const lab = labeller(ctx, H, { headline: 2 });
    const MC = C('magnetic-field'), AC = C('angle');
    const phi = -2 * Math.PI * 2 * cy.now() / T;
    hits = [];

    const zb = pt([0, -250, 0]), zt = pt([0, 250, 0]), o = pt([0, 0, 0]);
    arrow(ctx, zb.x, zb.y, zt.x, zt.y, MC, 4);
    text(ctx, 'B_{ext} (z-axis)', zt.x + 16, zt.y + 8, MC, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    lab.place({ l: zt.x + 8, r: zt.x + 200, t: zt.y - 10, b: zt.y + 26 });
    for (const a of ANG) {
      const t = rad(a), h = pt([Math.sin(t) * LV, Math.cos(t) * LV, 0]);
      line(ctx, o.x, o.y, h.x, h.y, alpha(C('angular-momentum'), 0.28), 3, [8, 8]);
      hits.push({ x: h.x, y: h.y, r: 16, name: 'an allowed direction of L_orb, ' + a + '° to the field' });
    }
    if (th.k < 1) F.faded(ctx, 1 - th.k, [0, 0], () => state(ctx, th.from, phi, null));
    F.faded(ctx, th.k, [0, 0], () => state(ctx, th.value, phi, lab));

    /* the five lines in a field, beside */
    const i = ANG.indexOf(th.value), ip = ANG.indexOf(th.from);
    strip(ctx, SX0, SX1, SY0, SY1);
    text(ctx, 'the five lines at 1.00 T', (SX0 + SX1) / 2, SY0 - 26, PAL.muted, { size: 17, align: 'center' });
    for (let j = 0; j < 5; j++) {
      const x = SC + (2 - j) * SP, on = (j === i ? th.k : 0) + (j === ip && ip !== i ? 1 - th.k : 0);
      line(ctx, x, SY0, x, SY1, alpha(PAL.ink, 0.25 + 0.75 * on), 3 + 2 * on);
      hits.push({ x, y: (SY0 + SY1) / 2, r: 14, name: 'the line from the orbit with L_orb at ' + ANG[j] + '° to the field' });
    }
    text(ctx, 'θ = ' + th.value + '°', SC + (2 - i) * SP, SY1 + 28, AC, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    energyAxis(ctx, SX0, SX1, SY1 + 76);

    lab.flush();
    topline(ctx, 'With $\\kLorb$ at ' + th.value + '° to $\\kBext$, the orbit has the ' + RANK[i] + ' of its five energies in the field.');
    ro.set('\\ktheta = ' + th.value + '^\\circ', '', { form: 'a' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.50 + 30.51 · sim-spin-doublet · moving · locked view (rule 28.2)
   The electron where the book puts it, at the near right of the orbit,
   turning three times in 5 s. B_int at 54.7° (up) or 125.3° (down) from
   B_orb. Beside, two lines and the left one magnified into its doublet,
   the lower photon energy to the left; spin up is the lower energy.
===================================================================== */
(function () {
  const d = sim('sim-spin-doublet', 520);
  const sp = choice(d.controls, { label: '\\text{Spin}', options: [{ value: 'up', label: 'up' }, { value: 'down', label: 'down' }], value: 'up', aria: 'the direction of the electron spin' });
  const V = F.view({ yaw: 0, pitch: 0.28, dist: 2400, cx: 400, cy: 330 });
  const R = 230, T = 5, A = (54.7 * Math.PI) / 180;
  const cy = cycle(() => T, 1.2);
  const pt = (p) => { const q = V.P(p); return { x: q[0], y: q[1] }; };
  const LX = 960, RX = 1200, SY0 = 130, SY1 = 200, MX = 960, MY = 390, MR = 86, DS = 13;
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  /* the spin axis in screen terms, x right and y up: up leans 54.7° right of up, down 54.7° right of down */
  const axis = (v) => (v === 'up' ? [Math.sin(A), Math.cos(A)] : [Math.sin(A), -Math.cos(A)]);

  function spin(ctx, e, v, psi, lab) {
    const [ax, ay] = axis(v), px = ay, py = -ax, IC = C('magnetic-field');
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2.5; ctx.beginPath();
    for (let k = 0; k <= 48; k++) { const f = (k / 48) * 2 * Math.PI, x = e.x + 36 * Math.cos(f) * px + 13 * Math.sin(f) * ax, y = e.y - (36 * Math.cos(f) * py + 13 * Math.sin(f) * ay); k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    const back = Math.sin(psi) < 0, mx = e.x + 36 * Math.cos(psi) * px + 13 * Math.sin(psi) * ax, my = e.y - (36 * Math.cos(psi) * py + 13 * Math.sin(psi) * ay);
    if (back) dot(ctx, mx, my, alpha(PAL.ink, 0.5), true, 7);
    dot(ctx, e.x, e.y, F.el('e-'), true, 17);
    if (!back) dot(ctx, mx, my, PAL.ink, true, 7);
    const h = { x: e.x + 160 * ax, y: e.y - 160 * ay };
    arrow(ctx, e.x, e.y, h.x, h.y, IC, 5);
    const am = Math.atan2(ay, ax);
    if (!lab) { angleArc(ctx, e, 58, Math.PI / 2, am, undefined, undefined, C('angle')); return; }
    lab.beside({ x1: e.x, y1: e.y, x2: h.x, y2: h.y }, v === 'up' ? 'left' : 'right', 'B_{int}', IC, 24, { offset: 0.95 });
    angleArc(ctx, e, 58, Math.PI / 2, am, 'θ', lab, C('angle'));
  }

  function draw() {
    const { ctx, H } = begin(d.c);
    const lab = labeller(ctx, H, { headline: 2 });
    const MC = C('magnetic-field'), up = sp.value === 'up';
    const psi = 2 * Math.PI * 3 * cy.now() / T;
    hits = [];

    const ring = [];
    for (let k = 0; k <= 72; k++) { const f = (k / 72) * 2 * Math.PI; ring.push(pt([R * Math.cos(f), 0, R * Math.sin(f)])); }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ring.forEach((p, k) => (k ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y))); ctx.stroke(); ctx.restore();
    const o = pt([0, 0, 0]), top = pt([0, 180, 0]), e = pt([R, 0, 0]);
    arrow(ctx, o.x, o.y, top.x, top.y, MC, 5);
    dot(ctx, o.x, o.y, F.el('p+'), true, 26);
    lab.beside({ x1: o.x, y1: o.y, x2: top.x, y2: top.y }, 'left', 'B_{orb}', MC, 24, { offset: 0.9 });
    line(ctx, e.x, e.y - 150, e.x, e.y + 150, alpha(PAL.ink, 0.35), 2, [6, 6]);
    hits.push({ x: o.x, y: o.y, r: 28, name: 'the nucleus' }, { x: e.x, y: e.y, r: 20, name: 'the electron, turning on its axis' });

    if (sp.k < 1) F.faded(ctx, 1 - sp.k, [0, 0], () => spin(ctx, e, sp.from, psi, null));
    F.faded(ctx, sp.k, [0, 0], () => spin(ctx, e, sp.value, psi, lab));

    /* two lines, the left one magnified into its doublet */
    strip(ctx, 820, 1320, SY0, SY1);
    line(ctx, LX, SY0, LX, SY1, PAL.ink, 4); line(ctx, RX, SY0, RX, SY1, PAL.ink, 4);
    energyAxis(ctx, 820, 1320, SY1 + 40);
    for (const s of [-1, 1]) line(ctx, LX, SY1, MX + s * MR * 0.72, MY - MR * 0.69, alpha(PAL.ink, 0.3), 2);
    ctx.save(); ctx.beginPath(); ctx.arc(MX, MY, MR, 0, 2 * Math.PI); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.clip();
    line(ctx, MX - MR, MY - 36, MX + MR, MY - 36, PAL.ink, 2); line(ctx, MX - MR, MY + 36, MX + MR, MY + 36, PAL.ink, 2);
    const onUp = sp.mix((v) => (v === 'up' ? 1 : 0));
    line(ctx, MX - DS, MY - 36, MX - DS, MY + 36, alpha(PAL.ink, 0.25 + 0.75 * onUp), 3 + 2 * onUp);
    line(ctx, MX + DS, MY - 36, MX + DS, MY + 36, alpha(PAL.ink, 1 - 0.75 * onUp), 5 - 2 * onUp);
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(MX, MY, MR, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    text(ctx, 'magnified', MX + MR + 16, MY, PAL.muted, { size: 17, align: 'left' });
    hits.push({ x: MX - DS, y: MY, r: 10, name: 'the doublet line from spin up' }, { x: MX + DS, y: MY, r: 10, name: 'the doublet line from spin down' }, { x: LX, y: (SY0 + SY1) / 2, r: 12, name: 'a spectral line, a doublet at high resolution' }, { x: RX, y: (SY0 + SY1) / 2, r: 12, name: 'a spectral line, a doublet at high resolution' });

    lab.flush();
    topline(ctx, 'Spin ' + sp.value + ': $\\kBint$ makes ' + (up ? '54.7' : '125.3') + '° with $\\kBorb$, and the level gives the ' + (up ? 'lower' : 'higher') + '-energy line of the doublet.');
    ro.set(up ? '\\ktheta = 54.7^\\circ' : '\\ktheta = 180^\\circ - 54.7^\\circ = 125.3^\\circ', '', { form: sp.value });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
