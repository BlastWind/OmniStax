/* Figures for section 20.2 Ohm's Law: Resistance and Simple Circuits. Boots
   against the section's text article.
   The figures colour current, resistance and voltage. The battery, the
   resistor, the voltmeter, the pump and the narrow pipe of 20.8 + 20.9 are
   referents and wear F.ref; the wires and the frame are ink; the free
   electrons are drawn from the element palette with F.el('e-'), and their
   sign is told by their label and never by a hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, arrow, dot, text, headline, axes, curve, pinned } = F;
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
function battery(ctx, x, y, orient, color) {
  ctx.save(); ctx.strokeStyle = color || PAL.ink; ctx.lineCap = 'butt';
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
function resistor(ctx, x, y, half, amp, color) {
  ctx.save(); ctx.strokeStyle = color || PAL.ink; ctx.lineWidth = 4.5; ctx.lineJoin = 'miter'; ctx.lineCap = 'round';
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
  const view = choice(d.controls, { label: '\\text{所画内容}', options: [
    { value: 'circuit', label: '电路' },
    { value: 'meter', label: '接电压表' },
    { value: 'pipe', label: '泵和管道' }], value: 'circuit', aria: '图所画的内容' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 2, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: '电源的电压' });
  const rs = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.5, max: 20, step: 0.1, value: 4.8, unit: 'Ω', dec: 2, aria: '电阻器的电阻' });
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
    const bc = F.ref('battery'), zc = F.ref('resistor'), mc = F.ref('voltmeter');
    const V = vs.v, Rv = rs.v, I = V / Rv;
    /* p carries the circuit into its analogy: the wire swells into the pipe, the battery
       gives way to the pump that grows where it stood, and the zigzag straightens into
       the narrow section; the voltmeter is the one part only its own state has */
    const p = view.mix((v) => (v === 'pipe' ? 1 : 0)), am = view.a('meter');
    if (p > 0.01) { ctx.save(); ctx.globalAlpha = p; pipe(ctx, V, Rv, I, ic, rc, vc, p); ctx.restore(); }
    if (p > 0.99) return;
    ctx.save(); ctx.globalAlpha = 1 - p;
    /* the loop, broken where the battery and the resistor stand in it */
    wire(ctx, [[L, MY - 30], [L, T], [R, T], [R, MY - 78]], PAL.ink, 4 + 40 * p);
    wire(ctx, [[R, MY + 78], [R, B], [L, B], [L, MY + 30]], PAL.ink, 4 + 40 * p);
    ctx.save(); ctx.translate(L, MY); ctx.scale(1 - p, 1 - p); battery(ctx, 0, 0, 'v', bc); ctx.restore();
    resistor(ctx, R, MY, 78, 26 * (1 - p), zc);
    text(ctx, '+', L + 34, MY - 44, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, '−', L + 34, MY + 44, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'V = ' + fmt(V, 1) + ' V', L - 46, MY, vc, { size: 24, weight: 600, align: 'right' });
    text(ctx, '电压源', L - 46, MY + 36, bc, { size: 18, weight: 600, align: 'right' });
    text(ctx, 'R = ' + fmt(Rv, 2) + ' Ω', R - 52, MY, rc, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '电阻器', R - 52, MY + 36, zc, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    /* the conventional current, out of the positive terminal and round the loop */
    for (const x of [520, 700, 880]) arrow(ctx, x - 34, T - 26, x + 34, T - 26, ic, 5);
    for (const x of [880, 700, 520]) arrow(ctx, x + 34, B + 26, x - 34, B + 26, ic, 5);
    text(ctx, 'I = ' + fmt(I, 2) + ' A', 700, T - 84, ic, { size: 24, weight: 600, align: 'center' });
    text(ctx, '约定电流', 700, T - 54, PAL.muted, { size: 18, align: 'center' });
    /* the free electrons, drifting the other way round the loop */
    const off = cy.now() * speed(I);
    for (let i = 0; i < NDOT; i++) {
      const p = path.at(-off + (path.total * i) / NDOT);
      if (Math.abs(p[0] - L) < 6 && Math.abs(p[1] - MY) < 40) continue;      /* inside the battery */
      if (Math.abs(p[0] - R) < 6 && Math.abs(p[1] - MY) < 86) continue;      /* inside the resistor */
      dot(ctx, p[0], p[1], ec, true, 8);
    }
    dot(ctx, 96, B + 84, ec, true, 8);
    text(ctx, 'e⁻，载流的自由电子，沿回路向相反方向漂移', 114, B + 84, PAL.muted, { size: 18 });
    ctx.restore();
    if (am > 0.01) {
      const MX = 1250, VR = I * Rv;
      ctx.save(); ctx.globalAlpha = am;
      wire(ctx, [[R, MY - 78], [MX, MY - 78], [MX, MY - 50]], PAL.muted, 3);
      wire(ctx, [[R, MY + 78], [MX, MY + 78], [MX, MY + 50]], PAL.muted, 3);
      ctx.save(); ctx.strokeStyle = mc; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.arc(MX, MY, 50, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, 'V', MX, MY, mc, { size: 26, weight: 600, align: 'center' });
      text(ctx, fmt(VR, 1) + ' V', MX, MY + 100, vc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, '电压表', MX, MY - 116, mc, { size: 18, weight: 600, align: 'center' });
      ctx.restore();
    }
    if (view.value === 'pipe') return;
    headline(ctx, view.value === 'meter'
      ? '跨接在电阻器两端的电压表读数为 ' + fmt(I * Rv, 1) + ' V，即电源的全部电压，因为电阻器把电源提供的能量全部转换掉了。'
      : fmt(V, 1) + ' V 加在 ' + fmt(Rv, 2) + ' Ω 上，驱动 ' + fmt(I, 2) + ' A 绕回路流动，载流的电子则沿相反方向漂移。');
    readout(d.readout, `\\kIcur = \\frac{\\kV}{\\kRes} = \\frac{${fmt(V, 1)}\\ \\text{V}}{${fmt(Rv, 2)}\\ \\Omega} = ${fmt(I, 2)}\\ \\text{A}`);
  }
  /* the pump and the narrow pipe the text compares the circuit with: the two
     referents in their own colours, the rest of the pipe and the water in ink,
     and only the electrical quantities they stand for in a category hue */
  function pipe(ctx, V, Rv, I, ic, rc, vc, g) {
    const pc = F.ref('pump'), nc = F.ref('narrow-pipe');
    const wide = 44, narrow = Math.max(7, 40 - 34 * (Rv - 0.5) / 19.5);
    /* the wide pipe everywhere but the right side's middle, where it tapers to the narrow section */
    const pipeRun = (path, w) => { wire(ctx, path, PAL.muted, w + 6); wire(ctx, path, PAL.soft, w); };
    pipeRun([[R, MY + 120], [R, B], [L, B], [L, T], [R, T], [R, MY - 120]], wide);
    const taper = (y0, y1) => {
      const hw = wide / 2 + 3, hn = narrow / 2 + 3, hw2 = wide / 2, hn2 = narrow / 2;
      ctx.save(); ctx.fillStyle = PAL.muted; ctx.beginPath(); ctx.moveTo(R - hw, y0); ctx.lineTo(R + hw, y0); ctx.lineTo(R + hn, y1); ctx.lineTo(R - hn, y1); ctx.closePath(); ctx.fill();
      ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(R - hw2, y0); ctx.lineTo(R + hw2, y0); ctx.lineTo(R + hn2, y1); ctx.lineTo(R - hn2, y1); ctx.closePath(); ctx.fill(); ctx.restore();
    };
    taper(MY - 122, MY - 90); taper(MY + 122, MY + 90);
    wire(ctx, [[R, MY - 92], [R, MY + 92]], nc, narrow + 6);
    wire(ctx, [[R, MY - 94], [R, MY + 94]], PAL.soft, narrow);
    /* the pump: a round casing with a turning impeller inside it */
    ctx.save(); ctx.strokeStyle = pc; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(L, MY, 54 * g, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    const spin = cy.now() * 3;
    ctx.lineWidth = 3; ctx.strokeStyle = PAL.muted;
    for (let k = 0; k < 6; k++) { const a = spin + (k * Math.PI) / 3; ctx.beginPath(); ctx.moveTo(L, MY); ctx.quadraticCurveTo(L + 26 * g * Math.cos(a + 0.5), MY + 26 * g * Math.sin(a + 0.5), L + 42 * g * Math.cos(a), MY + 42 * g * Math.sin(a)); ctx.stroke(); }
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(L, MY, 6, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    arrow(ctx, L - 74, MY + 30, L - 74, MY - 30, PAL.ink, 4);
    text(ctx, '泵', 400, B + 62, pc, { size: 22, weight: 600, align: 'center' });
    text(ctx, '它提高压强，正如电源', 400, B + 92, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '把电压提高到 ' + fmt(V, 1) + ' V', 400, B + 118, vc, { size: 18, weight: 600, align: 'center' });
    text(ctx, '狭窄段', 1000, B + 62, nc, { size: 22, weight: 600, align: 'center' });
    text(ctx, '它限制流动，正如电阻器', 1000, B + 92, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '以 ' + fmt(Rv, 2) + ' Ω 限制电流', 1000, B + 118, rc, { size: 18, weight: 600, align: 'center' });
    /* the water, going round at the rate the flow is */
    const off = cy.now() * speed(I);
    for (let i = 0; i < NDOT; i++) {
      const p = path.at(off + (path.total * i) / NDOT);
      if (Math.abs(p[0] - L) < 6 && Math.abs(p[1] - MY) < 54) continue;      /* inside the pump */
      dot(ctx, p[0], p[1], PAL.ink, true, Math.abs(p[0] - R) < 6 && Math.abs(p[1] - MY) < 122 ? 4 : 7);
    }
    for (const x of [560, 760, 900]) arrow(ctx, x - 34, T - 40, x + 34, T - 40, PAL.ink, 4);
    text(ctx, '每秒都有同样多的水通过每一点，', 700, T - 108, PAL.muted, { size: 19, align: 'center' });
    text(ctx, '正如同样的电流 I = ' + fmt(I, 2) + ' A 通过电路的每一点', 700, T - 80, ic, { size: 19, weight: 600, align: 'center' });
    if (view.value !== 'pipe') return;
    headline(ctx, '泵驱动水绕回路流过一个狭窄段，就是另一种材料中的电路：压强对应电压，流动对应电流，细管对应电阻器。');
    readout(d.readout, `\\kIcur = \\frac{\\kV}{\\kRes} = \\frac{${fmt(V, 1)}\\ \\text{V}}{${fmt(Rv, 2)}\\ \\Omega} = ${fmt(I, 2)}\\ \\text{A}`);
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
  const mat = choice(d.controls, { label: '\\text{材料}', options: [
    { value: 'ohmic', label: '欧姆电阻器' },
    { value: 'filament', label: '灯泡灯丝' }], value: 'ohmic', aria: '测量电流所通过的材料' });
  const rs = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 2, max: 12, step: 0.1, value: 4.8, unit: 'Ω', dec: 2, aria: '材料在低电压下的电阻' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0.5, max: 16, step: 0.5, value: 12, unit: 'V', dec: 1, aria: '加在材料上的电压' });
  /* the axes are fixed at 0 to 16 V and 0 to 8 A, the largest current the
     sliders reach (16 V across the smallest resistance, 2 Ω) */
  const BOX = { l: 200, t: 150, r: 1250, b: 500 };
  const WARM = 0.12;                                  /* how fast a filament's resistance climbs with the voltage across it */
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('current'), rc = C('resistance'), vc = C('voltage');
    const R0 = rs.v, V = vs.v, hot = mat.value === 'filament';
    /* the curve bends from the straight line into the filament's as the material changes */
    const warm = mat.mix((m) => (m === 'filament' ? WARM : 0));
    const Reff = (v) => R0 * (1 + warm * v);
    const cur = (v) => v / Reff(v);
    const I = cur(V), Rread = V / I;
    const { X, Y } = axes(ctx, BOX, [0, 16], [0, 8], { xl: '电压 V (V)', xc: vc, yl: '电流 I (A)', yc: ic, nx: 8, ny: 8, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const ah = mat.a('filament');
    if (ah > 0.01) {
      ctx.save(); ctx.globalAlpha = ah;
      curve(ctx, (v) => v / R0, 0, 16, X, Y, PAL.muted, 3, 2);
      text(ctx, '同样冷态电阻的欧姆电阻器应给出的直线', X(0.4), BOX.t + 54, PAL.muted, { size: 17, bg: PAL.panel });
      ctx.restore();
    }
    curve(ctx, cur, 0, 16, X, Y, ic, 5, 120);
    text(ctx, hot ? '一根灯丝，其电阻随电流使它发热而升高' : '欧姆电阻器：过原点、斜率为 1/R 的直线',
      X(0.4), BOX.t + 24, ic, { size: 20, weight: 600, bg: PAL.panel });
    /* the one measurement the voltage slider picks out */
    line(ctx, X(V), BOX.b, X(V), Y(I), alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    line(ctx, BOX.l, Y(I), X(V), Y(I), alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    pinned(ctx, BOX, X, Y, V, I, ic, '这次测量');
    text(ctx, fmt(I, 2) + ' A', BOX.l + 16, Y(I) - 24, ic, { size: 20, weight: 600, bg: PAL.panel });
    /* the resistance read at the point: below it and to the side where the point rides high, above it where it sits near the axis */
    const low = Y(I) > BOX.b - 80;
    text(ctx, 'R = V/I = ' + fmt(Rread, 2) + ' Ω', V > 10 ? X(V) - 18 : X(V) + 18, low ? Y(I) - 80 : Y(I) + 46, rc, { size: 22, weight: 600, align: V > 10 ? 'right' : 'left', bg: PAL.panel });
    headline(ctx, hot
      ? '在 ' + fmt(V, 1) + ' V 时，灯丝中的电流为 ' + fmt(I, 2) + ' A，由图像读出的电阻已从 ' + fmt(R0, 2) + ' Ω 升到 ' + fmt(Rread, 2) + ' Ω，所以这种材料不是欧姆的。'
      : '在 ' + fmt(V, 1) + ' V 时，欧姆电阻器中的电流为 ' + fmt(I, 2) + ' A，其他每个电压也都落在电阻为 ' + fmt(R0, 2) + ' Ω 的同一条直线上。');
    readout(d.readout, `\\kRes = \\frac{\\kV}{\\kIcur} = \\frac{${fmt(V, 1)}\\ \\text{V}}{${fmt(I, 2)}\\ \\text{A}} = ${fmt(Rread, 2)}\\ \\Omega`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
