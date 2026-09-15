/* Figures for section 19.2 Electric Potential in a Uniform Electric Field. Boots against the section's text article.
   The section has one relation and one generalisation of it. Figure 19.5 is
   the pair of parallel plates: the voltage across them, the gap between them
   and the uniform field that is one divided by the other, with the potential
   graphed across the gap so that the field is the steepness of that graph.
   The sim that follows takes the same reading where the potential does not
   fall evenly, which is what E = −ΔV/Δs says. Neither idea has a clock in
   it, so both figures are still and neither takes a transport. The page
   binds voltage, electric-field, position, charge and force; the work and
   the potential energy are not drawn, so they stay in ink, and the spark of
   a gap that has broken down is drawn in ink as well. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the two figures ---------- */
const TAU = 2 * Math.PI;
const E_BREAKDOWN = 3.0e6;                               /* the field dry air will support, in V/m, as Example 19.4 gives it */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sciParts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return m + ' × 10' + sup(e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return m + ' \\times 10^{' + e + '}'; };
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
/* a metal plate standing on the canvas, its charge signs in the charge hue */
function plate(ctx, x, y1, y2, w, sign, n) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.fillRect(x - w / 2, y1, w, y2 - y1); ctx.strokeRect(x - w / 2, y1, w, y2 - y1); ctx.restore();
  for (let i = 0; i < n; i++) text(ctx, sign, x, y1 + ((y2 - y1) * (i + 0.5)) / n, C('charge'), { size: 24, weight: 600, align: 'center' });
}

/* =====================================================================
   FIGURE 19.5: the parallel plates. The voltage between them and the gap
   between them set the uniform field, which the field lines draw and the
   graph beneath reads as the steepness of the potential. Still: the
   relation has no time in it, so the figure answers its sliders only.
===================================================================== */
(function () {
  const d = sim('sim-plates-voltage-field', 880);
  const V = ctl(d.controls, { label: '\\kVAB', cls: 'voltage', min: 5, max: 100, step: 0.5, value: 25, unit: 'kV', dec: 1, detents: [{ v: 25, label: '25.0' }, { v: 75, label: '75.0' }], snap: true, aria: 'voltage between the plates' });
  const D = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1, max: 10, step: 0.1, value: 4, unit: 'cm', dec: 2, detents: [{ v: 2.5, label: '2.5' }, { v: 4, label: '4.0' }], snap: true, aria: 'separation of the plates' });
  const Q = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0.1, max: 2, step: 0.05, value: 0.5, unit: 'µC', dec: 3, aria: 'charge between the plates' });
  const xA = 300, pT = 170, pB = 420, yq = 295;
  const gx = { l: 300, r: 1180, t: 610, b: 790 };          /* the graph: 0 to 10 cm across, 0 to 100 kV up, the slider maxima, never rescaled */
  function draw() {
    const { ctx } = begin(d.c);
    const dm = D.v / 100, Vv = V.v * 1000, E = Vv / dm, q = Q.v * 1e-6, Fq = q * E;
    const xB = xA + 200 + 62 * D.v;
    const broken = E >= E_BREAKDOWN;
    /* the plates and their potentials */
    plate(ctx, xA, pT, pB, 26, '+', 7); plate(ctx, xB, pT, pB, 26, '−', 7);
    text(ctx, 'A', xA, pB + 32, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'B', xB, pB + 32, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'V_A = ' + fmt(V.v, 1) + ' kV', xA - 26, pT - 34, C('voltage'), { size: 22, weight: 600, align: 'right' });
    text(ctx, 'V_B = 0', xB + 26, pT - 34, C('voltage'), { size: 22, weight: 600 });
    /* the field lines, drawn more closely together where the field is stronger */
    const n = Math.max(5, Math.min(12, Math.round(4 + (8 * E) / E_BREAKDOWN)));
    for (let i = 0; i < n; i++) {
      const y = pT + 24 + ((pB - pT - 48) * i) / (n - 1);
      if (y > yq - 30 && y < yq + 62) continue;
      arrow(ctx, xA + 20, y, xB - 20, y, C('electric-field'), 4);
    }
    text(ctx, 'E = ' + sci(E, 2) + ' V/m', (xA + xB) / 2, pT - 34, C('electric-field'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the charge between the plates and the force on it */
    const xq = xA + (xB - xA) / 2 - 60, len = Math.min(30 + 110 * Math.min(1, Fq / 0.6), xB - 40 - (xq + 16));
    dot(ctx, xq, yq, C('charge'), true, 14);
    text(ctx, '+q', xq, yq - 34, C('charge'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, xq + 16, yq, xq + 16 + len, yq, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fq, 3) + ' N', (xA + xB) / 2, yq + 46, C('force'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the gap, bracketed */
    hbracket(ctx, xA, xB, pB + 78, C('position'), 'd = ' + fmt(D.v, 2) + ' cm');
    /* the spark, where the field has passed what dry air will support */
    if (broken) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(xA + 14, yq + 100);
      for (let i = 1; i <= 8; i++) ctx.lineTo(xA + 14 + ((xB - xA - 28) * i) / 8, yq + 100 + (i % 2 ? -20 : 20));
      ctx.stroke(); ctx.restore();
      text(ctx, 'the air breaks down and a spark jumps', (xA + xB) / 2, pB + 126, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    }
    /* the graph: the potential falling across the gap, its steepness the field */
    const { X, Y } = axes(ctx, gx, [0, 10], [0, 100], { nx: 5, ny: 4, xl: 'distance from plate A (cm)', xc: C('position'), yl: 'V (kV)', yc: C('voltage') });
    line(ctx, X(0), Y(V.v), X(D.v), Y(0), C('voltage'), 5);
    line(ctx, X(D.v), Y(0), X(10), Y(0), alpha(PAL.ink, 0.35), 2, [10, 10]);
    dot(ctx, X(0), Y(V.v), C('voltage'), true, 10); dot(ctx, X(D.v), Y(0), C('voltage'), true, 10);
    const right = D.v <= 6.5;
    text(ctx, 'the slope is −E = −' + sci(E, 2) + ' V/m', X(D.v) + (right ? 16 : -16), Y(V.v / 2), C('electric-field'), { size: 19, weight: 600, align: right ? 'left' : 'right', bg: PAL.panel });
    topline(ctx, 'Across ' + fmt(D.v, 2) + ' cm, ' + fmt(V.v, 1) + ' kV makes a field of ' + sci(E, 2) + ' V/m, and the field pushes the ' + fmt(Q.v, 3) + ' µC charge toward plate B with ' + fmt(Fq, 3) + ' N.'
      + (broken ? ' That is more than dry air will support, so the gap sparks over.' : ''));
    readout(d.readout, `\\kEf = \\frac{\\kVAB}{\\kd} = \\frac{${sciTex(Vv, 2)}\\ \\text{V}}{${fmt(dm, 4)}\\ \\text{m}} = ${sciTex(E, 2)}\\ \\text{V/m}`,
      'The force on the ' + fmt(Q.v, 3) + ' µC charge is F = qE = ' + fmt(Fq, 3) + ' N, and it is the same wherever the charge sits between the plates, because the field is uniform. The answer comes out in newtons although the field is in volts per meter, because 1 N/C = 1 V/m. '
      + (broken ? 'At ' + sci(E, 2) + ' V/m the field has passed the ' + sci(E_BREAKDOWN, 1) + ' V/m that dry air will support: the air is ionized enough to conduct, and a spark discharges the plates.' : 'Dry air will support about ' + sci(E_BREAKDOWN, 1) + ' V/m, so this gap holds at most ' + fmt((E_BREAKDOWN * dm) / 1000, 0) + ' kV before it sparks over.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the field as the gradient of the potential. A window of width Δs
   slides along a potential, and the chord across it gives the average field
   there. Where the potential falls evenly every window reads the same, and
   where it falls unevenly the reading follows the steepness. Still: a
   gradient has no clock, and the dragging is the reader's own.
===================================================================== */
(function () {
  const d = sim('sim-potential-gradient', 740);
  const shape = F.select(d.controls, { label: '\\text{The potential}', options: [{ value: 'even', label: 'Falls evenly' }, { value: 'uneven', label: 'Falls unevenly' }], value: 'even', aria: 'which potential is graphed' });
  const S = ctl(d.controls, { label: 's', cls: 'position', min: 0.5, max: 9.5, step: 0.1, value: 5, unit: 'cm', dec: 2, aria: 'middle of the window' });
  const DS = ctl(d.controls, { label: '\\kds', cls: 'position', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'cm', dec: 2, aria: 'width of the window' });
  const gx = { l: 280, r: 1160, t: 130, b: 430 };          /* 0 to 10 cm across, 0 to 100 V up, both fixed */
  const Vof = (s, kind) => (kind === 'even' ? 100 * (1 - s / 10) : 100 * (1 - Math.pow(s / 10, 3)));
  const yArr = 610;
  function draw() {
    const { ctx } = begin(d.c);
    const kind = shape.value;
    const half = DS.v / 2, s1 = Math.max(0, Math.min(10 - DS.v, S.v - half)), s2 = s1 + DS.v;
    const V1 = Vof(s1, kind), V2 = Vof(s2, kind), dV = V2 - V1, E = -dV / (DS.v / 100);
    const { X, Y } = axes(ctx, gx, [0, 10], [0, 100], { nx: 5, ny: 4, xl: 'distance s (cm)', xc: C('position'), yl: 'V (V)', yc: C('voltage') });
    /* the window, shaded, and the potential across it */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(X(s1), gx.t, X(s2) - X(s1), gx.b - gx.t); ctx.restore();
    F.curve(ctx, (s) => Vof(s, kind), 0, 10, X, Y, C('voltage'), 5, 120);
    line(ctx, X(s1), Y(V1), X(s1), gx.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, X(s2), Y(V2), X(s2), gx.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, X(s1), Y(V1), X(s2), Y(V2), C('electric-field'), 5);
    dot(ctx, X(s1), Y(V1), C('voltage'), false, 10); dot(ctx, X(s2), Y(V2), C('voltage'), true, 10);
    text(ctx, 'the chord across the window', Math.max(X((s1 + s2) / 2), gx.l + 230), gx.t - 26, C('electric-field'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    hbracket(ctx, X(s1), X(s2), gx.b + 132, C('position'), 'Δs = ' + fmt(DS.v, 2) + ' cm');
    vbracket(ctx, X(s2) + 34, Y(V1), Y(V2), C('voltage'), 'ΔV = ' + num(dV, 1) + ' V', 1);
    /* the field at each place along the way, drawn to the same scale */

    for (let i = 0; i < 10; i++) {
      const s = 0.5 + i, h = 0.05;
      const Eloc = (-(Vof(Math.min(10, s + h), kind) - Vof(Math.max(0, s - h), kind)) / ((Math.min(10, s + h) - Math.max(0, s - h)) / 100));
      const L = 8 + (120 * Eloc) / 3000;
      arrow(ctx, X(s) - L / 2, yArr, X(s) + L / 2, yArr, C('electric-field'), 4);
    }
    line(ctx, X(s1), yArr - 36, X(s1), yArr + 36, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, X(s2), yArr - 36, X(s2), yArr + 36, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'the field at each place along the way, drawn to one scale, with the window marked', (gx.l + gx.r) / 2, yArr + 74, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, 'Over the ' + fmt(DS.v, 2) + ' cm window centered ' + fmt((s1 + s2) / 2, 2) + ' cm along, the potential falls ' + fmt(-dV, 1) + ' V, so the average field there is ' + sci(E, 2) + ' V/m.');
    readout(d.readout, `\\kEf = -\\frac{\\kdV}{\\kds} = -\\frac{${(dV < 0 ? '-' : '') + fmt(Math.abs(dV), 1)}\\ \\text{V}}{${fmt(DS.v / 100, 4)}\\ \\text{m}} = ${sciTex(E, 2)}\\ \\text{V/m}`,
      kind === 'even'
        ? 'The potential falls evenly here, as it does between two parallel plates, so every window of every width gives the same field and the arrows beneath are all of one length. That is the uniform field of Figure 19.5 again, read as a slope.'
        : 'Here the potential falls slowly at first and then steeply, so the window reads a small field near s = 0 and a field several times larger near s = 10 cm. The minus sign puts the field along the direction in which the potential falls, which is to the right in both graphs.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
