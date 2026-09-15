/* Figures for section 19.7 Energy Stored in Capacitors. Boots against the section's text article.
   Both figures are still. A capacitor does take time to charge, but what this
   section asks the reader to see is how much energy a given charge and voltage
   hold and how large a capacitor a given energy demands, and neither of those
   is a motion; so neither figure registers a cycle, neither carries a
   transport, and a slider's input alone redraws it (rule 14, and the chapter's
   config.md, which settles the energy triangle as still). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, hbracket, axes, pinned, curve, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* The three quantities of this section in the units the sliders carry: a
   capacitance in microfarads and a voltage in kilovolts give a charge in
   millicoulombs and an energy in joules with no powers of ten left over,
   since a microfarad times a kilovolt is a millicoulomb. */
const chargeOf = (Cuf, Vkv) => Cuf * Vkv;                 /* mC */
const energyOf = (Cuf, Vkv) => 0.5 * Cuf * Vkv * Vkv;     /* J  */

/* =====================================================================
   SIM: the energy triangle. The voltage on the capacitor against the charge
   already on it is a straight line of slope 1/C, the first charge arriving
   at no voltage and the last at the full voltage, so the average voltage is
   half the final one and the energy is the triangle under the line, half of
   the rectangle QV drawn round it. The graph is the scene (archetype 2).
   Still: it answers its two sliders and has no clock in it.
===================================================================== */
(function () {
  const d = sim('sim-capacitor-energy', 660);
  const cs = ctl(d.controls, { label: '\\kCap', cls: 'capacitance', min: 1, max: 20, step: 0.25, value: 8, unit: 'µF', dec: 2, aria: 'the capacitance of the capacitor' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0.5, max: 10, step: 0.25, value: 10, unit: 'kV', dec: 2, aria: 'the voltage the capacitor is charged to' });
  /* fixed from the slider maxima: 20.0 µF at 10.0 kV is 200 mC, and the
     voltage never passes 10.0 kV, so neither axis ever rescales */
  const XR = [0, 200], YR = [0, 10];
  const BOX = { l: 210, t: 140, r: 1240, b: 520 };
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), vc = C('voltage'), cc = C('capacitance'), ec = C('energy');
    const Cu = cs.v, Vk = vs.v, Q = chargeOf(Cu, Vk), E = energyOf(Cu, Vk);
    const { X, Y } = axes(ctx, BOX, XR, YR, { xl: 'charge on the capacitor (mC)', xc: qc, yl: 'voltage across the capacitor (kV)', yc: vc, nx: 4, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    /* the rectangle QV, in ink, so that the triangle can be seen to be half of it */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5; ctx.setLineDash([10, 10]);
    ctx.strokeRect(X(0), Y(Vk), X(Q) - X(0), Y(0) - Y(Vk)); ctx.restore();
    /* the energy: the area under the line, which is the triangle */
    ctx.save(); ctx.fillStyle = alpha(ec, 0.28); ctx.beginPath();
    ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(Q), Y(0)); ctx.lineTo(X(Q), Y(Vk)); ctx.closePath(); ctx.fill(); ctx.restore();
    /* the average voltage the whole charge passes through */
    line(ctx, X(0), Y(Vk / 2), X(Q), Y(Vk / 2), vc, 3, [10, 10]);
    label(ctx, 'the average voltage, V/2 = ' + fmt(Vk / 2, 2) + ' kV', X(Q * 0.5), Y(Vk / 2), { side: 'above', color: vc, gap: 18, size: 20 });
    /* the capacitor's own line, whose slope is one over the capacitance */
    curve(ctx, (q) => q / Cu, 0, Q, X, Y, cc, 5, 2);
    label(ctx, 'V = Q/C, of slope 1/C', X(Q * 0.72), Y((Q * 0.72) / Cu), { side: 'left', color: cc, gap: 26, size: 20 });
    /* the state the sliders ask for, and the charge it puts on the plates */
    pinned(ctx, BOX, X, Y, Q, Vk, vc, fmt(Vk, 2) + ' kV');
    line(ctx, X(Q), Y(0), X(Q), Y(Vk), alpha(PAL.ink, 0.35), 2, [4, 8]);
    hbracket(ctx, X(0), X(Q), BOX.b + 74, qc, 'Q = CV = ' + fmt(Q, 1) + ' mC');
    text(ctx, 'E_cap = ' + fmt(E, E < 10 ? 2 : 0) + ' J', (X(0) + X(Q)) / 2, Y(Vk * 0.28), ec, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    headline(ctx, 'A capacitor of ' + fmt(Cu, 2) + ' µF charged to ' + fmt(Vk, 2) + ' kV holds ' + fmt(Q, 1) + ' mC of separated charge and stores ' + fmt(E, E < 10 ? 2 : 0) + ' J.');
    readout(d.readout, `\\kEcap = \\frac{\\kQch\\kV}{2} = \\frac{\\kCap\\kV^2}{2} = \\frac{\\kQch^2}{2\\kCap} = ${fmt(E, E < 10 ? 2 : 0)}\\ \\text{J}`,
      'The voltage rises in step with the charge, so the first charge placed on the capacitor arrives at no voltage and the last arrives at ' + fmt(Vk, 2) + ' kV, and the whole charge passes through the average of the two, ' + fmt(Vk / 2, 2) + ' kV. That is why the energy is the triangle and not the rectangle: it is half of QV, which here would be ' + fmt(2 * E, 2 * E < 10 ? 2 : 0) + ' J.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the defibrillator of Example 19.11. The machine is set to deliver an
   energy and its capacitor is charged to a voltage, and the capacitance it
   must carry follows from C = 2E/V². The curve below the paddles is that
   capacitance against the voltage at the chosen energy, which is what shows
   why a defibrillator charges to thousands of volts and not to hundreds.
   Still: the reader is choosing a setting, not watching a shock.
===================================================================== */
(function () {
  const d = sim('sim-defibrillator', 860);
  const es = ctl(d.controls, { label: '\\kEcap', cls: 'energy', min: 40, max: 400, step: 10, value: 400, unit: 'J', dec: 0, aria: 'the energy the defibrillator is to deliver' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 2, max: 12, step: 0.25, value: 10, unit: 'kV', dec: 2, aria: 'the voltage the capacitor is charged to' });
  /* fixed from the slider ranges: 400 J at 2.00 kV is 200 µF, the largest the
     sliders can ask for, and the voltage never passes 12.0 kV */
  const XR = [0, 12], YR = [0, 200];
  const BOX = { l: 210, t: 470, r: 1240, b: 740 };
  const capOf = (E, Vk) => (2 * E) / (Vk * Vk);           /* µF */
  /* a paddle: a rounded head on a handle, drawn in ink, facing `face` */
  function paddle(ctx, x, y, face) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(x - face * 30, y - 58, face * 30, 116, 14); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.strokeStyle = PAL.muted;
    ctx.beginPath(); ctx.moveTo(x - face * 30, y); ctx.lineTo(x - face * 104, y); ctx.stroke();
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), vc = C('voltage'), cc = C('capacitance'), ec = C('energy');
    const E = es.v, Vk = vs.v, Cu = capOf(E, Vk), Q = chargeOf(Cu, Vk);
    /* the machine: its case, the energy it is set to deliver, the capacitor
       inside it charged to the working voltage, and the two paddles */
    const CX = 700, CY = 250;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(CX - 210, CY - 150, 420, 300, 18); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'set to deliver', CX, CY - 108, PAL.muted, { size: 19, align: 'center' });
    text(ctx, fmt(E, 0) + ' J', CX, CY - 64, ec, { size: 30, weight: 600, align: 'center' });
    /* the capacitor inside, drawn as two plates with their separated charge */
    const PY = CY + 46;
    for (const s of [-1, 1]) line(ctx, CX + s * 26, PY - 52, CX + s * 26, PY + 52, PAL.ink, 6);
    line(ctx, CX - 130, PY, CX - 26, PY, PAL.ink, 3); line(ctx, CX + 26, PY, CX + 130, PY, PAL.ink, 3);
    text(ctx, '+Q', CX - 52, PY - 76, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, '−Q', CX + 52, PY - 76, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'C = ' + fmt(Cu, 2) + ' µF', CX, PY + 92, cc, { size: 23, weight: 600, align: 'center' });
    text(ctx, 'charged to ' + fmt(Vk, 2) + ' kV', CX, CY + 176, vc, { size: 22, weight: 600, align: 'center' });
    /* the leads out to the paddles */
    line(ctx, CX - 210, CY + 46, CX - 300, CY + 46, PAL.muted, 4);
    line(ctx, CX + 210, CY + 46, CX + 300, CY + 46, PAL.muted, 4);
    paddle(ctx, CX - 300, CY + 46, -1); paddle(ctx, CX + 300, CY + 46, 1);
    text(ctx, 'the paddles, across the chest', CX, CY + 230, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'it must hold ' + fmt(Q, 1) + ' mC', CX + 300, CY - 110, qc, { size: 21, weight: 600, align: 'center' });
    /* the capacitance the setting demands, against the working voltage */
    const { X, Y } = axes(ctx, BOX, XR, YR, { xl: 'voltage the capacitor is charged to (kV)', xc: vc, yl: 'capacitance the machine must carry (µF)', yc: cc, nx: 6, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, (v) => Math.min(capOf(E, v), YR[1] * 1.6), 2, 12, X, Y, cc, 5, 120);
    line(ctx, X(Vk), Y(0), X(Vk), Y(Math.min(Cu, YR[1])), alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, BOX, X, Y, Vk, Cu, cc, fmt(Cu, 2) + ' µF');
    label(ctx, 'C = 2E/V², so it falls as the square of the voltage', X(8.4), Y(capOf(E, 8.4)), { side: 'above', color: cc, gap: 30, size: 20 });
    headline(ctx, 'Delivering ' + fmt(E, 0) + ' J from a capacitor charged to ' + fmt(Vk, 2) + ' kV takes a capacitance of ' + fmt(Cu, 2) + ' µF, holding ' + fmt(Q, 1) + ' mC.');
    readout(d.readout, `\\kCap = \\frac{2\\kEcap}{\\kV^2} = \\frac{2(${fmt(E, 0)}\\ \\text{J})}{(${fmt(Vk * 1000, 0)}\\ \\text{V})^2} = ${fmt(Cu, 2)}\\ \\mu\\text{F}`,
      'Halving the voltage asks for four times the capacitance, which is why a defibrillator charges its capacitor to thousands of volts: the same ' + fmt(E, 0) + ' J at a tenth of this voltage would need ' + fmt(capOf(E, Vk / 10), 0) + ' µF, a capacitor far too large to carry to a patient.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
