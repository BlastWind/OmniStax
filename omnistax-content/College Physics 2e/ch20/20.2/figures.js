/* Figures for section 20.2 Ohm's Law: Resistance and Simple Circuits. Boots
   against the section's text article.
   The page binds three types and no others, as ch20/COLOR.md gives it:
   current, resistance and voltage. The battery, the wires, the resistor's
   zigzag, the voltmeter and the whole of the fluid analogy are the frame of a
   diagram and are drawn in ink; the free electrons are drawn from the element
   palette with F.el('e-'), and their sign is told by their label and never by
   a hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, choice, register, begin, cycle, line, arrow, dot, text, headline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces of a circuit diagram, all in ink ---------- */
/* the wire of a circuit, drawn along a path of corner points */
function wire(ctx, pts, color, w) {
  ctx.save(); ctx.strokeStyle = color || PAL.ink; ctx.lineWidth = w || 4; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.stroke(); ctx.restore();
}
/* a battery in a wire, the long plate the positive terminal; `flip` puts the
   long plate at the far end instead of the near one */
function battery(ctx, x, y, orient) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'butt';
  const pairs = [[-26, 30, 4], [-10, 15, 7], [10, 30, 4], [26, 15, 7]];
  for (const [o, h, w] of pairs) {
    ctx.lineWidth = w; ctx.beginPath();
    if (orient === 'h') { ctx.moveTo(x + o, y - h); ctx.lineTo(x + o, y + h); }
    else { ctx.moveTo(x - h, y + o); ctx.lineTo(x + h, y + o); }
    ctx.stroke();
  }
  ctx.restore();
}
/* the zigzag of a resistor standing in a vertical wire, centred on (x, y) */
function resistor(ctx, x, y, half, amp) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4.5; ctx.lineJoin = 'miter'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y - half);
  const n = 6, step = (2 * half) / n;
  for (let i = 0; i < n; i++) ctx.lineTo(x + (i % 2 ? -amp : amp), y - half + step * (i + 0.5));
  ctx.lineTo(x, y + half); ctx.stroke(); ctx.restore();
}

/* a closed path of corners, with the arc length along it and the point at a
   given arc length; used for the carriers of the circuit and the water of the
   pipe, which both run round a loop */
function loop(pts) {
  const seg = [];
  let total = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    seg.push({ a, b, L, s0: total }); total += L;
  }
  return { total, at(s) {
    let u = ((s % total) + total) % total;
    for (const g of seg) if (u <= g.s0 + g.L) { const k = (u - g.s0) / g.L; return [g.a[0] + (g.b[0] - g.a[0]) * k, g.a[1] + (g.b[1] - g.a[1]) * k]; }
    return pts[0];
  } };
}

/* =====================================================================
   FIGURES 20.8 + 20.9, folded: the simple circuit, and the same circuit
   with a voltmeter across the resistor, which ch20/config.md folds with
   the meter as a state; a third state draws the pump and the narrow pipe
   the text compares the circuit with.
   Moving: a current is a rate, and the whole point of the figure is that
   the reader sees a flow rather than a number, so the carriers run round
   the loop endlessly and the figure takes the app's transport.
===================================================================== */
(function () {
  const d = sim('sim-simple-circuit', 700);
  const view = choice(d.controls, { label: '\\text{what is drawn}', options: [
    { value: 'circuit', label: 'the circuit' },
    { value: 'meter', label: 'with a voltmeter' },
    { value: 'pipe', label: 'pump and pipe' }], value: 'circuit', aria: 'what the figure draws' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 2, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the voltage of the source' });
  const rs = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.5, max: 20, step: 0.1, value: 4.8, unit: 'Ω', dec: 2, aria: 'the resistance of the resistor' });
  const cy = cycle(() => Infinity, 0);
  const L = 330, R = 1070, T = 250, B = 560, MY = (T + B) / 2;
  const path = loop([[L, T], [R, T], [R, B], [L, B]]);           /* clockwise, the way the conventional current runs */
  const NDOT = 30;
  /* the drawn speed of the carriers is bounded, since the current runs from
     0.1 A to 48 A across the sliders and a crowd moving at the full ratio
     would be a blur at one end and still at the other */
  const speed = (I) => Math.min(70 + 26 * I, 290);
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('current'), rc = C('resistance'), vc = C('voltage'), ec = F.el('e-');
    const V = vs.v, Rv = rs.v, I = V / Rv, meter = view.value === 'meter';
    if (view.value === 'pipe') { pipe(ctx, V, Rv, I, ic, rc, vc); return; }
    /* the loop, broken where the battery and the resistor stand in it */
    wire(ctx, [[L, MY - 30], [L, T], [R, T], [R, MY - 78]]);
    wire(ctx, [[R, MY + 78], [R, B], [L, B], [L, MY + 30]]);
    battery(ctx, L, MY, 'v');
    resistor(ctx, R, MY, 78, 26);
    text(ctx, '+', L + 34, MY - 44, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, '−', L + 34, MY + 44, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'V = ' + fmt(V, 1) + ' V', L - 46, MY, vc, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'the voltage source', L - 46, MY + 36, PAL.muted, { size: 18, align: 'right' });
    text(ctx, 'R = ' + fmt(Rv, 2) + ' Ω', R - 52, MY, rc, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'the resistor', R - 52, MY + 36, PAL.muted, { size: 18, align: 'right', bg: PAL.panel });
    /* the conventional current, out of the positive terminal and round the loop */
    for (const x of [520, 700, 880]) arrow(ctx, x - 34, T, x + 34, T, ic, 5);
    for (const x of [880, 700, 520]) arrow(ctx, x + 34, B, x - 34, B, ic, 5);
    text(ctx, 'I = ' + fmt(I, 2) + ' A', 700, T - 54, ic, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'the conventional current', 700, T - 24, PAL.muted, { size: 18, align: 'center' });
    /* the free electrons, drifting the other way round the loop */
    const off = cy.now() * speed(I);
    for (let i = 0; i < NDOT; i++) {
      const p = path.at(-off + (path.total * i) / NDOT);
      if (Math.abs(p[0] - L) < 6 && Math.abs(p[1] - MY) < 40) continue;      /* inside the battery */
      if (Math.abs(p[0] - R) < 6 && Math.abs(p[1] - MY) < 86) continue;      /* inside the resistor */
      dot(ctx, p[0], p[1], ec, true, 8);
    }
    dot(ctx, 96, B + 84, ec, true, 8);
    text(ctx, 'e⁻, the free electrons that carry the current, drifting the other way round the loop', 114, B + 84, PAL.muted, { size: 18 });
    if (meter) {
      const MX = 1250, VR = I * Rv;
      wire(ctx, [[R, MY - 78], [MX, MY - 78], [MX, MY - 50]], PAL.muted, 3);
      wire(ctx, [[R, MY + 78], [MX, MY + 78], [MX, MY + 50]], PAL.muted, 3);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.arc(MX, MY, 50, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, 'V', MX, MY, PAL.ink, { size: 26, weight: 600, align: 'center' });
      text(ctx, fmt(VR, 1) + ' V', MX, MY + 100, vc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, 'the voltmeter', MX, MY - 116, PAL.muted, { size: 18, align: 'center' });
      headline(ctx, 'The voltmeter across the resistor reads ' + fmt(VR, 1) + ' V, the whole voltage of the source, because the resistor converts all the energy the source supplies.');
    } else {
      headline(ctx, fmt(V, 1) + ' V across ' + fmt(Rv, 2) + ' Ω drives ' + fmt(I, 2) + ' A round the loop, and the electrons carrying it drift the other way.');
    }
    readout(d.readout, `\\kIcur = \\frac{\\kV}{\\kRes} = \\frac{${fmt(V, 1)}\\ \\text{V}}{${fmt(Rv, 2)}\\ \\Omega} = ${fmt(I, 2)}\\ \\text{A}`,
      'Raise the voltage and the current rises in the same proportion, which is Ohm’s law; raise the resistance and the current falls, so that doubling the resistance cuts the current in half. The voltage drop across the resistor is V = IR = ' + fmt(I * Rv, 1) + ' V, equal to the voltage of the source, since there is nothing else in the loop for the energy to go into.');
  }
  /* the pump and the narrow pipe the text compares the circuit with, drawn
     wholly in ink: the analogy is the frame, and only the electrical
     quantities it stands for wear a hue */
  function pipe(ctx, V, Rv, I, ic, rc, vc) {
    const wide = 44, narrow = Math.max(7, 40 - 34 * (Rv - 0.5) / 19.5);
    const pts = [[L, T], [R, T], [R, B], [L, B]];
    wire(ctx, [...pts, pts[0]], PAL.muted, wide + 6);
    wire(ctx, [...pts, pts[0]], PAL.soft, wide);
    wire(ctx, [[R, MY - 90], [R, MY + 90]], PAL.muted, narrow + 6);
    wire(ctx, [[R, MY - 90], [R, MY + 90]], PAL.soft, narrow);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(L, MY, 54, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    arrow(ctx, L - 22, MY + 20, L + 22, MY - 20, PAL.ink, 4);
    text(ctx, 'the pump', 400, B + 62, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'it raises the pressure, as the source', 400, B + 92, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'raises the voltage to ' + fmt(V, 1) + ' V', 400, B + 118, vc, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'the narrow section', 1000, B + 62, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'it limits the flow, as the resistor limits', 1000, B + 92, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'the current with ' + fmt(Rv, 2) + ' Ω', 1000, B + 118, rc, { size: 18, weight: 600, align: 'center' });
    /* the water, going round at the rate the flow is */
    const off = cy.now() * speed(I);
    for (let i = 0; i < NDOT; i++) {
      const p = path.at(off + (path.total * i) / NDOT);
      dot(ctx, p[0], p[1], PAL.ink, true, Math.abs(p[0] - R) < 6 && Math.abs(p[1] - MY) < 92 ? 5 : 7);
    }
    for (const x of [560, 760, 900]) arrow(ctx, x - 34, T, x + 34, T, PAL.ink, 4);
    text(ctx, 'the same water passes every point each second,', 700, T - 108, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'as the same current I = ' + fmt(I, 2) + ' A passes every point of the circuit', 700, T - 80, ic, { size: 19, weight: 600, align: 'center' });
    headline(ctx, 'A pump driving water round a loop through one narrow section is the circuit in another material: pressure for voltage, flow for current, and the narrow pipe for the resistor.');
    readout(d.readout, `\\kIcur = \\frac{\\kV}{\\kRes} = \\frac{${fmt(V, 1)}\\ \\text{V}}{${fmt(Rv, 2)}\\ \\Omega} = ${fmt(I, 2)}\\ \\text{A}`,
      'The pump does not make the water; it raises the pressure that drives water already in the pipe, and the voltage source does the same for the charge already in the wire. Narrowing the pipe slows the flow without changing the pump, which is what raising the resistance does to the current.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the current through a material against the voltage that drove it.
   What "ohmic" means is the shape of this graph, a straight line through
   the origin whose slope is one over the resistance, and the section
   introduces the idea with no figure of its own. Still: a set of
   measurements has no clock in it, so no cycle and no transport.
===================================================================== */
(function () {
  const d = sim('sim-ohmic', 600);
  const mat = choice(d.controls, { label: '\\text{the material}', options: [
    { value: 'ohmic', label: 'an ohmic resistor' },
    { value: 'filament', label: 'a bulb filament' }], value: 'ohmic', aria: 'the material the current is measured through' });
  const rs = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 2, max: 12, step: 0.1, value: 4.8, unit: 'Ω', dec: 2, aria: 'the resistance of the material at low voltage' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0.5, max: 16, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the voltage applied to the material' });
  /* the axes are fixed at 0 to 16 V and 0 to 8 A, the largest current the
     sliders reach (16 V across the smallest resistance, 2 Ω) */
  const BOX = { l: 200, t: 150, r: 1250, b: 500 };
  const WARM = 0.12;                                  /* how fast a filament's resistance climbs with the voltage across it */
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('current'), rc = C('resistance'), vc = C('voltage');
    const R0 = rs.v, V = vs.v, hot = mat.value === 'filament';
    const Reff = (v) => R0 * (hot ? 1 + WARM * v : 1);
    const cur = (v) => v / Reff(v);
    const I = cur(V), Rread = V / I;
    const { X, Y } = axes(ctx, BOX, [0, 16], [0, 8], { xl: 'voltage V (V)', xc: vc, yl: 'current I (A)', yc: ic, nx: 8, ny: 8, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    if (hot) {
      curve(ctx, (v) => v / R0, 0, 16, X, Y, PAL.muted, 3, 2);
      text(ctx, 'the straight line an ohmic resistor of the same cold resistance would give', X(0.4), BOX.t + 54, PAL.muted, { size: 17, bg: PAL.panel });
    }
    curve(ctx, cur, 0, 16, X, Y, ic, 5, 120);
    text(ctx, hot ? 'a filament, whose resistance rises as the current heats it' : 'an ohmic resistor: a straight line through the origin, of slope 1/R',
      X(0.4), BOX.t + 24, ic, { size: 20, weight: 600, bg: PAL.panel });
    /* the one measurement the voltage slider picks out */
    line(ctx, X(V), BOX.b, X(V), Y(I), PAL.rule, 2.5, [4, 8]);
    line(ctx, BOX.l, Y(I), X(V), Y(I), PAL.rule, 2.5, [4, 8]);
    pinned(ctx, BOX, X, Y, V, I, ic, 'the measurement');
    text(ctx, fmt(I, 2) + ' A', BOX.l + 16, Y(I) - 24, ic, { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, 'R = V/I = ' + fmt(Rread, 2) + ' Ω', V > 10 ? X(V) - 18 : X(V) + 18, Y(I) + 46, rc, { size: 22, weight: 600, align: V > 10 ? 'right' : 'left', bg: PAL.panel });
    headline(ctx, hot
      ? 'At ' + fmt(V, 1) + ' V the filament carries ' + fmt(I, 2) + ' A, and the resistance read off the graph has risen from ' + fmt(R0, 2) + ' Ω to ' + fmt(Rread, 2) + ' Ω, so the material is not ohmic.'
      : 'At ' + fmt(V, 1) + ' V the ohmic resistor carries ' + fmt(I, 2) + ' A, and every other voltage lands on the same straight line of resistance ' + fmt(R0, 2) + ' Ω.');
    readout(d.readout, `\\kRes = \\frac{\\kV}{\\kIcur} = \\frac{${fmt(V, 1)}\\ \\text{V}}{${fmt(I, 2)}\\ \\text{A}} = ${fmt(Rread, 2)}\\ \\Omega`,
      hot
        ? 'The filament grows hotter as more current passes through it, and a hotter filament has a greater resistance, so the graph bends away from the straight line and the ratio of voltage to current is different at every point. Ohm’s law, like Hooke’s law, is not universally valid.'
        : 'An ohmic material has a resistance that does not depend on the voltage across it or the current through it, so every measurement gives the same ratio and the graph is a straight line through the origin. Good conductors such as copper and aluminum are ohmic over a wide range.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
