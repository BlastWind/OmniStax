/* Figures for section 12.4 Viscosity and Laminar Flow; Poiseuille's Law. Boots against the section's text article.
   Nothing here has a clock the reader must watch: laminar layers, a plate sheared
   at a steady speed, a steady velocity profile, Poiseuille's law, a water main
   and the circulation at rest are each a still picture that answers its
   controls, registers no cycle and carries no transport, as the chapter's
   config decides for everything before the onset of turbulence in 12.5. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, hover, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, axes, fixed, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific notation to three significant figures, once for the canvas and once for KaTeX */
function sci(v, sig = 3) {
  if (v === 0) return { txt: '0', tex: '0' };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e), ms = m.toFixed(sig - 1);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (m / 10).toFixed(sig - 1); }
  return { txt: ms + ' × 10' + sup(e), tex: ms + '\\times 10^{' + e + '}' };
}
/* a positive number to three significant figures, written plainly */
const sf = (v, sig = 3) => { if (v === 0) return '0'; const e = Math.floor(Math.log10(Math.abs(v))); return v.toFixed(Math.max(0, sig - 1 - e)); };
/* a bar from x0 on a fixed cap: the value's share of the full width, its edge ruled, its label to the left and its
   value at the end; a value past the cap fills the bar and is marked with a hollow dot at the cap */
function bar(ctx, x0, y, w, share, color, label, value) {
  const s = Math.min(1, share), xe = x0 + w * s;
  ctx.save(); ctx.fillStyle = alpha(color, 0.3); ctx.fillRect(x0, y - 13, w * s, 26); ctx.restore();
  line(ctx, x0, y - 18, x0, y + 18, PAL.muted, 2);
  line(ctx, xe, y - 13, xe, y + 13, color, 3);
  if (share > 1) dot(ctx, xe, y, color, false, 9);
  text(ctx, label, x0 - 16, y, PAL.ink, { size: 20, weight: 600, align: 'right' });
  text(ctx, value, xe + (share > 1 ? 20 : 14), y, color, { size: 20, weight: 600 });
}
/* The liquids of Table 12.1 at the temperatures the book tabulates them, in mPa·s. Honey and maple syrup are
   left out because the table gives them ranges, not values. */
const LIQUIDS = [
  { id: 'water0', name: 'Water, 0 °C', eta: 1.792 }, { id: 'water20', name: 'Water, 20 °C', eta: 1.002 },
  { id: 'water37', name: 'Water, 37 °C', eta: 0.6947 }, { id: 'water40', name: 'Water, 40 °C', eta: 0.653 },
  { id: 'water100', name: 'Water, 100 °C', eta: 0.282 }, { id: 'blood20', name: 'Whole blood, 20 °C', eta: 3.015 },
  { id: 'blood37', name: 'Whole blood, 37 °C', eta: 2.084 }, { id: 'plasma20', name: 'Blood plasma, 20 °C', eta: 1.810 },
  { id: 'plasma37', name: 'Blood plasma, 37 °C', eta: 1.257 }, { id: 'ethanol', name: 'Ethyl alcohol, 20 °C', eta: 1.20 },
  { id: 'methanol', name: 'Methanol, 20 °C', eta: 0.584 }, { id: 'milk', name: 'Milk, 20 °C', eta: 3.0 },
  { id: 'corn', name: 'Oil (corn), 20 °C', eta: 65 }, { id: 'olive', name: 'Oil (olive), 20 °C', eta: 138 },
  { id: 'motor', name: 'Oil (motor, SAE 10), 30 °C', eta: 200 }, { id: 'machine', name: 'Oil (heavy machine), 20 °C', eta: 660 },
  { id: 'glycerin', name: 'Glycerin, 20 °C', eta: 1500 },
];
const NEAR_WATER = LIQUIDS.slice(0, 12);      /* the ones within a factor of ten of water, for the needle */
const fluidOf = (list, id) => list.find((f) => f.id === id) ?? list[0];
const etaTex = (eta) => (eta >= 10 ? fmt(eta / 1000, 3) : sci(eta / 1000).tex) + '\\ \\text{Pa}\\cdot\\text{s}';

/* =====================================================================
   FIGURE 12.15: laminar layers over a bed, and the same stream over an
   obstruction that breaks it into eddies. Still: the two states are what
   the two kinds of flow look like, not one becoming the other, which is
   12.5's figure; a choice swaps them and each has one slider of its own.
===================================================================== */
(function () {
  const d = sim('sim-laminar-turbulent', 560);
  let mode = 'laminar';
  const vs = ctl(d.controls, { label: '{\\kv}_{\\text{t}}', cls: 'velocity', min: 0.2, max: 2, step: 0.05, value: 1, unit: 'm/s', dec: 2, aria: 'the speed of the top layer' });
  const hs = ctl(d.controls, { label: '\\text{obstruction}', cls: '', min: 10, max: 60, step: 1, value: 40, unit: '% of depth', dec: 0, aria: 'the height of the obstruction as a share of the depth', disabled: true });
  choice(d.controls, { label: '\\text{flow}', options: [{ value: 'laminar', label: 'Laminar' }, { value: 'turbulent', label: 'Turbulent' }], value: mode, aria: 'laminar or turbulent flow',
    onInput: (v) => { mode = v; vs.disable(mode !== 'laminar'); hs.disable(mode !== 'turbulent'); } });
  /* the channel: bed at BED, surface at TOP, depth D; five layers of equal thickness; the arrows are drawn at
     KV units per m/s, so the top layer's arrow at the slider's maximum of 2.0 m/s is 300 units long */
  const X1 = 80, X2 = 1320, BED = 470, TOP = 130, D = BED - TOP, N = 5, KV = 150;
  const hits = [];
  function laminar(ctx) {
    const vt = vs.v, vc = C('velocity');
    for (let i = 0; i < N; i++) {                                  /* i = 0 is the layer on the bed */
      const y1 = BED - (i + 1) * (D / N), y0 = BED - i * (D / N), yc = (y0 + y1) / 2, v = vt * (i + 1) / N;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, i % 2 ? 0.035 : 0.075); ctx.fillRect(X1, y1, X2 - X1, y0 - y1); ctx.restore();
      if (i) line(ctx, X1, y0, X2, y0, alpha(PAL.ink, 0.35), 2);
      for (let x = 160; x < 900; x += 330) arrow(ctx, x, yc, x + v * KV, yc, vc, 4);
      hits.push({ x: 700, y: yc, r: D / N / 2, name: `layer ${i + 1} of ${N}, moving at ${fmt(v, 2)} m/s` });
      if (i === N - 1) text(ctx, 'v_t = ' + fmt(v, 2) + ' m/s', 820 + v * KV + 16, yc, vc, { size: 22, weight: 600, bg: PAL.panel });
      if (i === 0) text(ctx, 'v_b = ' + fmt(v, 2) + ' m/s', 820 + v * KV + 16, yc, vc, { size: 22, weight: 600, bg: PAL.panel });
    }
    /* the friction between layers, marked as the book marks it: wavy strokes across two boundaries with one label */
    const wavy = (x, y) => { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); for (let t = -26; t <= 26; t += 2) ctx.lineTo(x + 5 * Math.sin(t / 4), y + t); ctx.stroke(); ctx.restore(); };
    wavy(1120, BED - 2 * (D / N)); wavy(1180, BED - 1 * (D / N));
    line(ctx, 1150, BED - 1.2 * (D / N) + 20, 1150, BED + 30, alpha(PAL.ink, 0.5), 1.5, [5, 6]);
    text(ctx, 'friction between layers, and with the bed', 1150, BED + 50, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'the stream in section, flowing to the right', X2, TOP - 22, PAL.muted, { size: 19, align: 'right' });
    topline(ctx, `The layers slide past one another without mixing: the top one moves at ${fmt(vt, 2)} m/s, the one on the bed at ${fmt(vt / N, 2)} m/s, and friction acts between each pair.`);
    readout(d.readout, `{\\kv}_{\\text{t}} = ${fmt(vt, 2)}\\ \\text{m/s},\\qquad {\\kv}_{\\text{b}} = ${fmt(vt / N, 2)}\\ \\text{m/s}`,
      'Laminar flow: the layers keep their order and slide past one another, and the friction between them is the drag that viscosity describes.');
  }
  function turbulent(ctx) {
    const vt = vs.v, vc = C('velocity'), hb = hs.v / 100 * D, XB = 640, WB = 220;
    /* the obstruction: a smooth bump on the bed, WB wide and hb tall */
    const bump = (x) => { const u = (x - XB) / WB; return Math.abs(u) < 1 ? hb * 0.5 * (1 + Math.cos(Math.PI * u)) : 0; };
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(XB - WB, BED);
    for (let x = XB - WB; x <= XB + WB; x += 6) ctx.lineTo(x, BED - bump(x)); ctx.lineTo(XB + WB, BED); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'obstruction', XB, BED - hb / 2, PAL.ink, { size: 19, weight: 600, align: 'center' });
    /* six streamlines: ahead of the bump each keeps its share of the depth above the bed, so it lifts over the bump;
       behind it the ones that ran below the bump's top are broken, and the ones above waver more the lower they are */
    const wakeEnd = XB + WB + 60 + hb * 3;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5;
    for (let k = 1; k <= 6; k++) {
      const f = k / 7, yLevel = BED - f * D; ctx.beginPath(); ctx.moveTo(X1, yLevel);
      const broken = f * D < hb;
      for (let x = X1; x <= X2; x += 8) {
        const b = bump(x); let y = BED - b - f * (D - b);
        if (x > XB && broken) break;
        if (x > XB + WB * 0.3) { const s = Math.min(1, (x - XB - WB * 0.3) / 300), a = (1 - f) * 22 * s * (hb / D) * 2; y += a * Math.sin((x - XB) / 38 + k); }
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      if (!broken) arrow(ctx, X1 + 40 + 0.001, yLevel, X1 + 40 + vt * KV * 0.6, yLevel, vc, 4);
    }
    ctx.restore();
    text(ctx, 'v = ' + fmt(vt, 2) + ' m/s', X1 + 40, TOP + 8, vc, { size: 22, weight: 600, bg: PAL.panel });
    /* the eddies behind the bump: curled arrows, one kind, labelled once, each with a hover name */
    const eddies = [];
    const n = 3 + Math.round(hb / 40);
    for (let i = 0; i < n; i++) {
      const ex = XB + WB * 0.55 + 70 + (i % 3) * 110 + Math.floor(i / 3) * 40, ey = BED - 30 - (i * 53) % Math.max(60, hb + 60), r = 18 + (i % 2) * 8;
      if (ex > X2 - 60) continue;
      const ccw = i % 2 === 0, a0 = 0.3 + i, a1 = ccw ? a0 - 4.6 : a0 + 4.6;
      ctx.save(); ctx.strokeStyle = vc; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(ex, ey, r, a0, a1, ccw); ctx.stroke(); ctx.restore();
      const tip = [ex + r * Math.cos(a1), ey + r * Math.sin(a1)], tx = ccw ? Math.sin(a1) : -Math.sin(a1), ty = ccw ? -Math.cos(a1) : Math.cos(a1);
      arrow(ctx, tip[0] - 4 * tx, tip[1] - 4 * ty, tip[0] + 14 * tx, tip[1] + 14 * ty, vc, 3.5);
      eddies.push({ x: ex, y: ey, r: r + 10, name: 'an eddy: fluid swirling across the direction of flow' });
    }
    hits.push(...eddies);
    if (eddies.length) { const e0 = eddies[eddies.length - 1]; text(ctx, 'eddies and swirls mix the layers', Math.min(1180, e0.x + 40), TOP + 60, vc, { size: 20, weight: 600, bg: PAL.panel, align: 'center' }); }
    text(ctx, 'the stream in section, flowing to the right', X2, TOP - 22, PAL.muted, { size: 19, align: 'right' });
    topline(ctx, `An obstruction ${fmt(hs.v, 0)}% of the depth bends the streamlines over it and leaves eddies behind it that carry fluid across the flow.`);
    readout(d.readout, `\\kv = ${fmt(vt, 2)}\\ \\text{m/s}`,
      'Turbulent flow: behind the obstruction the layers mix, there are velocities across the direction of flow, and there is more heating and more resistance than in laminar flow.');
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    fixed(ctx, X1, BED, X2 - X1, 30);
    line(ctx, X1, TOP, X2, TOP, alpha(PAL.ink, 0.5), 2, [12, 10]);
    text(ctx, 'the bed', X1 + 12, BED + 15, PAL.ink, { size: 17, bg: PAL.panel });
    if (mode === 'laminar') laminar(ctx); else turbulent(ctx);
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.16: a fluid sheared between two plates, drawn from the book's
   own viewpoint, with the force on the top plate on a bar and the liquids
   of Table 12.1 on a ladder that goes up by ten at every tick. Still: a
   plate moving at a steady speed is a steady shear, and the sliders are
   what change the picture.
===================================================================== */
(function () {
  const d = sim('sim-viscosity-plates', 940);
  let fluid = 'olive';
  select(d.controls, { label: '\\keta\\ \\text{(fluid)}', options: LIQUIDS.map((f) => ({ value: f.id, label: f.name })), value: fluid, aria: 'the fluid between the plates', onInput: (v) => { fluid = v; } });
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.2, max: 5, step: 0.05, value: 1, unit: 'cm/s', dec: 2, aria: 'the speed of the top plate' });
  const Ls = ctl(d.controls, { label: 'L', cls: '', min: 0.5, max: 3, step: 0.01, value: 1.5, unit: 'mm', dec: 2, aria: 'the distance between the plates' });
  const As = ctl(d.controls, { label: 'A', cls: '', min: 2, max: 12, step: 0.1, value: 6, unit: 'cm²', dec: 2, aria: 'the area of the plates' });
  /* the scene: the plates' side at 120 units to the centimeter, the fluid at 75 units to the millimeter, both fixed
     from the slider maxima (a 3.46 cm plate is 415 units, a 3.00 mm gap 225); the shear offset of the top layer grows
     with the speed only so that the staircase reads, since a steady shear has no displacement of its own */
  const V = view({ yaw: 0.62, pitch: 0.40, dist: 3600, cx: 560, cy: 330 }), N = 8, PT = 16;
  const FCAP = 3, BX = 460, BW = 640, BY = 760;                     /* the force bar: 3.00 mN on 640 units */
  const LX0 = 160, LX1 = 1240, LY = 880;                           /* the ladder: 0.1 to 10 000 mPa·s on 1080 units */
  const LX = (eta) => LX0 + ((Math.log10(eta) + 1) / 5) * (LX1 - LX0);
  /* one box of the scene: its right, front and top faces, filled with a colour and shaded by the fixed lamp */
  function box(ctx, x0, x1, y0, y1, z0, z1, fill) {
    const faces = [
      { pts: [[x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0]], n: [1, 0, 0] },
      { pts: [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], n: [0, 0, 1] },
      { pts: [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], n: [0, 1, 0] },
    ];
    for (const f of faces) {
      const pts = f.pts.map(V.P); ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
      ctx.fillStyle = fill; ctx.fill(); ctx.fillStyle = alpha(PAL.ink, V.shade(f.n)); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
    }
  }
  const hits = [];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const fl = fluidOf(LIQUIDS, fluid), eta = fl.eta * 1e-3, v = vs.v / 100, L = Ls.v * 1e-3, A = As.v * 1e-4;
    const Fn = eta * v * A / L, FmN = Fn * 1e3;
    const fc = C('force'), vc = C('velocity'), ec = C('viscosity');
    const s = Math.sqrt(As.v) * 120, T = Ls.v * 75, off = 50 + vs.v * 26;
    /* the fixed plate, the fluid in eight layers each a step further along than the one below, the moving plate */
    box(ctx, 0, s, -PT, 0, 0, s, PAL.soft);
    for (let i = 0; i < N; i++) { const dx = off * (i + 1) / N; box(ctx, dx, dx + s, (T * i) / N, (T * (i + 1)) / N, 0, s, alpha(ec, 0.3)); }
    box(ctx, off, off + s, T, T + PT, 0, s, PAL.soft);
    /* the force that keeps the top plate moving, and the speed it moves at */
    const lenF = Math.min(280, Math.max(0, (FmN / FCAP) * 280));
    const fh = V.P([off - 16, T + PT / 2, s / 2]), ft = V.P([off - 16 - lenF, T + PT / 2, s / 2]);
    if (lenF > 4) arrow(ctx, ft[0], ft[1], fh[0], fh[1], fc, 5);
    text(ctx, 'F = ' + sci(Fn).txt + ' N', ft[0] - (lenF > 4 ? 14 : 30), ft[1] - 26, fc, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    const vt = V.P([off + s, T + 2, s / 2]), vh = V.P([off + s + vs.v * 40, T + 2, s / 2]);
    arrow(ctx, vt[0], vt[1], vh[0], vh[1], vc, 5);
    text(ctx, 'v = ' + fmt(vs.v, 2) + ' cm/s', vh[0] + 12, vh[1], vc, { size: 22, weight: 600, bg: PAL.panel });
    const v0 = V.P([s, -PT / 2, s]); text(ctx, 'v = 0 on the fixed plate', v0[0] + 16, v0[1] + 4, vc, { size: 21, weight: 600, bg: PAL.panel });
    const ap = V.P([off + s / 2, T + PT, s * 0.35]); text(ctx, 'A = ' + fmt(As.v, 2) + ' cm²', ap[0], ap[1] - 22, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    const l0 = V.P([-22, 0, s]), l1 = V.P([-22, T, s]);
    vbracket(ctx, l0[0], l1[1], l0[1], PAL.ink, 'L = ' + fmt(Ls.v, 2) + ' mm', -1);
    const fp = V.P([0, -PT, s]); text(ctx, fl.name + ', η = ' + sf(fl.eta, 4) + ' mPa·s', fp[0] - 10, fp[1] + 32, ec, { size: 21, weight: 600, bg: PAL.panel });
    text(ctx, 'the fixed plate below, the moving plate above', 1330, 110, PAL.muted, { size: 19, align: 'right' });
    /* the force on a fixed cap */
    bar(ctx, BX, BY, BW, FmN / FCAP, fc, 'F on the top plate', sci(Fn).txt + ' N');
    text(ctx, 'the bar is drawn on a cap of 3.00 mN', BX, BY + 30, PAL.muted, { size: 17 });
    /* the ladder of viscosities */
    text(ctx, 'The liquids of Table 12.1, on an axis that rises by a factor of ten at every tick', (LX0 + LX1) / 2, LY - 60, PAL.muted, { size: 19, align: 'center' });
    line(ctx, LX0, LY, LX1, LY, PAL.muted, 2);
    ['0.1', '1', '10', '100', '1000', '10 000'].forEach((lab, i) => { const x = LX0 + (i / 5) * (LX1 - LX0); line(ctx, x, LY - 8, x, LY + 8, PAL.muted, 2); text(ctx, lab, x, LY + 30, PAL.muted, { size: 17, align: 'center' }); });
    text(ctx, 'η in mPa·s', LX1 + 14, LY, PAL.ink, { size: 19, weight: 600 });
    for (const f of LIQUIDS) { if (f.id === fluid) continue; dot(ctx, LX(f.eta), LY, PAL.ink, false, 6); hits.push({ x: LX(f.eta), y: LY, r: 14, name: f.name + ': ' + sf(f.eta, 4) + ' mPa·s' }); }
    dot(ctx, LX(fl.eta), LY, ec, true, 10);
    text(ctx, fl.name + ': ' + sf(fl.eta, 4) + ' mPa·s', Math.min(1100, Math.max(300, LX(fl.eta))), LY - 34, ec, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: LX(fl.eta), y: LY, r: 16, name: fl.name + ': ' + sf(fl.eta, 4) + ' mPa·s' });
    topline(ctx, `${fl.name.split(',')[0]} ${fmt(Ls.v, 2)} mm thick between plates of ${fmt(As.v, 2)} cm² takes ${sci(Fn).txt} N to keep the top plate moving at ${fmt(vs.v, 2)} cm/s.`);
    readout(d.readout, `\\kF = \\keta\\frac{\\kv A}{L} = (${etaTex(fl.eta)})\\frac{(${sci(v).tex}\\ \\text{m/s})(${sci(A).tex}\\ \\text{m}^2)}{${sci(L).tex}\\ \\text{m}} = ${sci(Fn).tex}\\ \\text{N}`,
      'The SI unit of viscosity is (N/m²)·s, or Pa·s; Table 12.1 lists it in mPa·s, a thousandth of that.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.17: the same flow rate up two tubes, one without viscosity and
   one with. Still: a steady flow has a profile, not a history, and the
   flame the book photographs beside the tubes is that profile standing.
===================================================================== */
(function () {
  const d = sim('sim-velocity-profile', 660);
  const Qs = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 0.25, max: 0.8, step: 0.01, value: 0.5, unit: 'L/s', dec: 2, aria: 'the flow rate through each tube' });
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 1.5, max: 2.5, step: 0.05, value: 2, unit: 'cm', dec: 2, aria: 'the radius of the tubes' });
  /* the tubes at 90 units to the centimeter of radius (2.5 cm is 225 units) and the arrows at 150 units per m/s,
     fixed from the slider extremes: the center of the viscous tube at 0.80 L/s and 1.50 cm reaches 2.26 m/s, 340 units */
  const KR = 90, KV = 150, BASE = 490, TOPY = 148, CX1 = 400, CX2 = 1000;
  const hits = [];
  function tube(ctx, cx, R, tint) {
    ctx.save(); ctx.fillStyle = alpha(tint, 0.12); ctx.fillRect(cx - R, TOPY, 2 * R, BASE - TOPY + 30); ctx.restore();
    line(ctx, cx - R, TOPY, cx - R, BASE + 30, PAL.ink, 5); line(ctx, cx + R, TOPY, cx + R, BASE + 30, PAL.ink, 5);
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const Q = Qs.v * 1e-3, r = rs.v * 1e-2, A = Math.PI * r * r, vb = Q / A, R = rs.v * KR;
    const vc = C('velocity'), fc = C('flow-rate'), ec = C('viscosity');
    tube(ctx, CX1, R, fc); tube(ctx, CX2, R, fc);
    text(ctx, 'Nonviscous, η = 0', CX1, TOPY - 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'Viscous', CX2, TOPY - 26, ec, { size: 22, weight: 600, align: 'center' });
    /* the flat profile: every arrow the average speed */
    for (let k = -3; k <= 3; k++) { const x = CX1 + (k / 3.6) * R; arrow(ctx, x, BASE, x, BASE - vb * KV, vc, 4); }
    hits.push({ x: CX1, y: BASE - vb * KV / 2, r: R, name: 'every part of the fluid moves at v̄ = ' + fmt(vb, 2) + ' m/s' });
    text(ctx, 'v̄ = ' + fmt(vb, 2) + ' m/s', CX1 + R + 14, BASE - vb * KV, vc, { size: 22, weight: 600, bg: PAL.panel });
    /* the viscous profile: zero at the wall, twice the average at the center, a parabola between */
    ctx.save(); ctx.strokeStyle = alpha(vc, 0.5); ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.beginPath();
    for (let u = -1; u <= 1.001; u += 0.05) { const x = CX2 + u * R, y = BASE - 2 * vb * (1 - u * u) * KV; if (u === -1) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    for (let k = -4; k <= 4; k++) { const u = k / 4.6, x = CX2 + u * R, v = 2 * vb * (1 - u * u); arrow(ctx, x, BASE, x, BASE - v * KV, vc, 4); }
    line(ctx, CX2 - R, BASE - vb * KV, CX2 + R, BASE - vb * KV, vc, 2.5, [10, 10]);
    text(ctx, 'v̄', CX2 - R - 14, BASE - vb * KV, vc, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, fmt(2 * vb, 2) + ' m/s at the center', CX2, BASE - 2 * vb * KV - 24, vc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'v = 0 at the wall', CX2 + R + 14, BASE - 10, vc, { size: 20, weight: 600, bg: PAL.panel });
    hits.push({ x: CX2, y: BASE - vb * KV, r: 40, name: 'the center, moving at ' + fmt(2 * vb, 2) + ' m/s' });
    hits.push({ x: CX2 - R, y: BASE - 20, r: 30, name: 'the layer on the wall does not move' }, { x: CX2 + R, y: BASE - 20, r: 30, name: 'the layer on the wall does not move' });
    /* the width of the tubes and the flow they carry */
    hbracket(ctx, CX1 - R, CX1 + R, BASE + 58, PAL.ink, '2r = ' + fmt(2 * rs.v, 2) + ' cm');
    hbracket(ctx, CX2 - R, CX2 + R, BASE + 58, PAL.ink, '2r = ' + fmt(2 * rs.v, 2) + ' cm');
    arrow(ctx, 700, BASE + 118, 700, BASE + 62, fc, 5);
    text(ctx, 'Q = ' + fmt(Qs.v, 2) + ' L/s up each tube', 700, BASE + 142, fc, { size: 22, weight: 600, align: 'center' });
    topline(ctx, `At ${fmt(Qs.v, 2)} L/s through a tube ${fmt(rs.v, 2)} cm in radius the average speed is ${fmt(vb, 2)} m/s; the viscous flow is fastest at the center and stands still at the wall.`);
    readout(d.readout, `\\kvb = \\frac{\\kQ}{A} = \\frac{\\kQ}{\\pi r^2} = \\frac{${sci(Q).tex}\\ \\text{m}^3\\text{/s}}{\\pi(${fmt(r, 4)}\\ \\text{m})^2} = ${fmt(vb, 3)}\\ \\text{m/s}`,
      'Both tubes carry the same flow rate: the viscous profile averages to the same v̄ as the flat one, faster than v̄ near the center and slower than v̄ near the wall.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.18: Poiseuille's law on the intravenous needle of Example
   12.8. Still: the law relates steady quantities and the figure answers
   its sliders; the fourth power of the radius is what the stream shows.
===================================================================== */
(function () {
  const d = sim('sim-poiseuille', 610);
  let fluid = 'water20';
  select(d.controls, { label: '\\keta\\ \\text{(fluid)}', options: NEAR_WATER.map((f) => ({ value: f.id, label: f.name })), value: fluid, aria: 'the fluid in the tube', onInput: (v) => { fluid = v; } });
  const dPs = ctl(d.controls, { label: '\\kPrtwo - \\kProne', cls: 'pressure', min: 0.5, max: 3, step: 0.01, value: 1.51, unit: '× 10⁴ N/m²', dec: 2, aria: 'the pressure difference between the ends of the tube' });
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 0.1, max: 0.2, step: 0.001, value: 0.15, unit: 'mm', dec: 3, aria: 'the radius of the tube', detents: [{ v: 0.15, label: 'the needle' }] });
  const ls = ctl(d.controls, { label: 'l', cls: '', min: 1, max: 5, step: 0.01, value: 2.5, unit: 'cm', dec: 2, aria: 'the length of the tube' });
  /* the tube at 170 units to the centimeter of length and 700 to the millimeter of radius, fixed from the slider maxima
     (5.00 cm is 850 units, 0.200 mm is 140); the profile arrows at 40 units per m/s, cut at the tube's end when the
     speed outruns it; the flow-rate bar on a cap of 0.500 cm³/s */
  const KL = 170, KR = 700, KV = 40, CY = 285, XC = 700, P1 = 1.066e3, QCAP = 0.5, BX = 420, BW = 680, BY = 548;
  const hits = [];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const fl = fluidOf(NEAR_WATER, fluid), eta = fl.eta * 1e-3, dP = dPs.v * 1e4, r = rs.v * 1e-3, l = ls.v * 1e-2;
    const Rres = (8 * eta * l) / (Math.PI * Math.pow(r, 4)), Q = dP / Rres, Qcc = Q * 1e6, vb = Q / (Math.PI * r * r);
    const fc = C('flow-rate'), ec = C('viscosity'), pc = C('pressure'), vc = C('velocity');
    const half = ls.v * KL / 2, X1 = XC - half, X2 = XC + half, R = rs.v * KR;
    /* the tube and the fluid in it */
    ctx.save(); ctx.fillStyle = alpha(ec, 0.12); ctx.fillRect(X1, CY - R, X2 - X1, 2 * R); ctx.restore();
    line(ctx, X1, CY - R, X2, CY - R, PAL.ink, 4); line(ctx, X1, CY + R, X2, CY + R, PAL.ink, 4);
    line(ctx, X1, CY - R - 20, X1, CY + R + 20, pc, 3); line(ctx, X2, CY - R - 20, X2, CY + R + 20, pc, 3, [8, 8]);
    /* the velocity profile inside it, and the flow along it */
    let cut = false;
    for (let k = -3; k <= 3; k++) {
      if (k === 0) continue;
      const u = k / 3.7, y = CY + u * R, v = 2 * vb * (1 - u * u), len = v * KV, L = Math.min(len, X2 - X1 - 130); if (len > L) cut = true;
      arrow(ctx, X1 + 40, y, X1 + 40 + L, y, vc, 3);
    }
    const qlen = Math.min(X2 - X1 - 130, Math.max(0, (Qcc / QCAP) * 600));
    if (qlen > 6) arrow(ctx, X1 + 40, CY, X1 + 40 + qlen, CY, fc, 6);
    text(ctx, 'Q', X1 + 40 + qlen / 2, CY - 26, fc, { size: 26, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fl.name + ', η = ' + sf(fl.eta, 4) + ' mPa·s', XC, CY - R - 40, ec, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    /* the pressures at the two ends, the radius and the length */
    text(ctx, 'P_2 = ' + sci(P1 + dP).txt + ' N/m²', X1 - 16, CY - 30, pc, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'the entrance', X1 - 16, CY + 4, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'P_1 = ' + sci(P1).txt + ' N/m²', X2 + 16, CY + 34, pc, { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, 'the vein', X2 + 16, CY + 68, PAL.muted, { size: 17 });
    vbracket(ctx, X2 + 30, CY - R, CY, PAL.ink, 'r = ' + fmt(rs.v, 3) + ' mm', 1);
    hbracket(ctx, X1, X2, CY + R + 70, PAL.ink, 'l = ' + fmt(ls.v, 2) + ' cm');
    if (cut) text(ctx, 'the profile arrows are cut at the tube’s end', X2, CY + R + 110, PAL.muted, { size: 17, align: 'right' });
    hits.push({ x: XC, y: CY, r: R, name: 'the stream: Q = ' + sf(Qcc) + ' cm³/s, v̄ = ' + sf(vb) + ' m/s' });
    /* the flow rate on a fixed cap, and the resistance in words */
    bar(ctx, BX, BY, BW, Qcc / QCAP, fc, 'Q', sf(Qcc) + ' cm³/s');
    text(ctx, 'the bar is drawn on a cap of 0.500 cm³/s; the tube begins as the needle of Example 12.8', BX + BW, BY + 36, PAL.muted, { size: 17, align: 'right' });
    topline(ctx, `${fl.name} driven by ${sci(dP).txt} N/m² through a tube ${fmt(rs.v, 3)} mm in radius and ${fmt(ls.v, 2)} cm long flows at ${sf(Qcc)} cm³/s.`);
    readout(d.readout, `\\kQ = \\frac{(\\kPrtwo - \\kProne)\\pi r^4}{8\\keta l} = \\frac{(${sci(dP).tex}\\ \\text{N/m}^2)\\pi(${sci(r).tex}\\ \\text{m})^4}{8(${etaTex(fl.eta)})(${sci(l).tex}\\ \\text{m})} = ${sci(Q).tex}\\ \\text{m}^3\\text{/s}`,
      `The resistance is R = 8ηl/πr⁴ = ${sci(Rres).txt} N·s/m⁵, and the flow is the pressure difference divided by it.`);
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.19: the water main from the water works to the houses. Still:
   the main carries a steady flow, and what the reader changes is how many
   taps are open, not the time.
===================================================================== */
(function () {
  const d = sim('sim-water-main', 600);
  const ns = ctl(d.controls, { label: '\\text{taps open}', cls: '', min: 0, max: 20, step: 1, value: 5, unit: 'of 20', dec: 0, aria: 'the number of houses drawing water at 20.0 L/min each' });
  const Rs = ctl(d.controls, { label: 'R', cls: '', min: 0.5, max: 2, step: 0.01, value: 1, unit: 'kPa·min/L', dec: 2, aria: 'the resistance of the water main' });
  const Ps = ctl(d.controls, { label: '\\kPrtwo', cls: 'pressure', min: 2, max: 6, step: 0.01, value: 4, unit: '× 10⁵ N/m²', dec: 2, aria: 'the pressure at the water works' });
  /* the gauges read 0 to 6.00 × 10⁵ N/m² on 220 units, the slider's maximum; the flow arrow along the main is drawn
     on a cap of 400 L/min, which is all twenty houses drawing */
  const PCAP = 6, GH = 220, GY = 420, MY = 330, X1 = 300, X2 = 800, QCAP = 400;
  const hits = [];
  function house(ctx, x, y, on, fc) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.fillStyle = on ? alpha(fc, 0.22) : PAL.panel;
    ctx.beginPath(); ctx.moveTo(x - 20, y + 16); ctx.lineTo(x - 20, y - 6); ctx.lineTo(x, y - 22); ctx.lineTo(x + 20, y - 6); ctx.lineTo(x + 20, y + 16); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    if (on) { ctx.save(); ctx.fillStyle = fc; ctx.beginPath(); ctx.arc(x, y + 4, 5, 0, 2 * Math.PI); ctx.fill(); ctx.restore(); }
  }
  function gauge(ctx, x, P, label, color) {
    const h = Math.min(1, Math.max(0, P / PCAP)) * GH;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x - 16, GY - GH, 32, GH); ctx.fillStyle = alpha(color, 0.35); ctx.fillRect(x - 16, GY - h, 32, h); ctx.restore();
    line(ctx, x - 16, GY - h, x + 16, GY - h, color, 3);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(x - 16, GY - GH, 32, GH); ctx.restore();
    text(ctx, label, x, GY - GH - 40, color, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, sci(P * 1e5).txt + ' N/m²', x, GY - GH - 14, color, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const n = ns.v, Q = 20 * n, R = Rs.v * 1e3, P2 = Ps.v * 1e5, drop = R * Q, P1raw = P2 - drop, P1 = Math.max(0, P1raw), starved = P1raw < 0;
    const fc = C('flow-rate'), pc = C('pressure');
    /* the water works and the main */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(90, 250, 150, 90); ctx.strokeRect(90, 250, 150, 90);
    ctx.beginPath(); ctx.moveTo(80, 250); ctx.lineTo(165, 205); ctx.lineTo(250, 250); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'Water works', 165, 370, PAL.ink, { size: 20, weight: 600, align: 'center' });
    ctx.save(); ctx.fillStyle = alpha(fc, 0.16); ctx.fillRect(240, MY - 18, X2 + 80 - 240, 36); ctx.restore();
    line(ctx, 240, MY - 18, X2 + 80, MY - 18, PAL.ink, 3); line(ctx, 240, MY + 18, X2 + 80, MY + 18, PAL.ink, 3);
    const qlen = (Q / QCAP) * (X2 - X1 - 120);
    if (qlen > 4) arrow(ctx, X1 + 60, MY, X1 + 60 + qlen, MY, fc, 6);
    text(ctx, 'Q = ' + fmt(Q, 0) + ' L/min', (X1 + X2) / 2 + 30, MY + 50, fc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'the main, resistance R = ' + fmt(Rs.v, 2) + ' × 10³ N/m² per L/min', (X1 + X2) / 2, MY - 44, PAL.ink, { size: 19, align: 'center', bg: PAL.panel });
    /* the two gauges */
    gauge(ctx, X1, P2 / 1e5, 'P_2', pc); gauge(ctx, X2, P1 / 1e5, 'P_1', pc);
    hits.push({ x: X1, y: GY - GH / 2, r: 40, name: 'the pressure at the water works, ' + sci(P2).txt + ' N/m²' }, { x: X2, y: GY - GH / 2, r: 40, name: 'the pressure at the houses, ' + sci(P1).txt + ' N/m²' });
    /* the trunk down the street and the twenty houses, the ones drawing water marked */
    const TX = X2 + 90;
    ctx.save(); ctx.fillStyle = alpha(fc, 0.16); ctx.fillRect(TX - 10, 120, 20, 445); ctx.restore(); line(ctx, TX - 10, 120, TX - 10, 565, PAL.ink, 2); line(ctx, TX + 10, 120, TX + 10, 565, PAL.ink, 2);
        for (let i = 0; i < 20; i++) {
      const col = i % 4, row = Math.floor(i / 4), hx = TX + 110 + col * 115, hy = 160 + row * 98, on = i < n;
      line(ctx, TX + 10, hy + 10, hx - 22, hy + 10, on ? fc : PAL.rule, on ? 4 : 2);
      house(ctx, hx, hy, on, fc);
      hits.push({ x: hx, y: hy, r: 26, name: on ? 'a house drawing 20.0 L/min' : 'a house with its taps closed' });
    }
    text(ctx, n + (n === 1 ? ' house drawing' : ' houses drawing') + ', 20.0 L/min each', TX + 282, 112, PAL.ink, { size: 19, align: 'center' });
    if (starved) text(ctx, 'the drop RQ would exceed P₂: the pressure at the houses falls to zero and the main cannot supply this flow', 460, 560, PAL.ink, { size: 18, align: 'center', bg: PAL.panel });
    topline(ctx, n === 0 ? `With no tap open nothing flows, and the pressure at the houses is the ${sci(P2).txt} N/m² of the water works.`
      : `${n} ${n === 1 ? 'house draws' : 'houses draw'} ${fmt(Q, 0)} L/min through the main, and the pressure falls from ${sci(P2).txt} N/m² at the water works to ${sci(P1).txt} N/m² at the houses.`);
    readout(d.readout, `\\kPrtwo - \\kProne = R\\kQ = (${sci(R).tex}\\ \\text{N/m}^2\\ \\text{per L/min})(${fmt(Q, 0)}\\ \\text{L/min}) = ${sci(drop).tex}\\ \\text{N/m}^2`,
      starved ? 'The drop the main would need exceeds the pressure the water works supplies, so the houses get no pressure at all.' : 'When the flow is very small the drop is negligible and P₁ ≈ P₂; when it is large the houses get much less than the water works creates.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.20: the circulatory system unrolled, with the average pressure
   of an adult at rest at each of its major parts, each stretch a fixed
   resistance found from the book's numbers at 5.00 L/min. Still: the
   pressures are averages and the figure answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-circulation', 590);
  const Qs = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 2, max: 10, step: 0.1, value: 5, unit: 'L/min', dec: 2, aria: 'the flow rate the heart pumps', detents: [{ v: 5, label: 'at rest' }] });
  const fs = ctl(d.controls, { label: '\\text{arterioles}', cls: '', min: 85, max: 115, step: 1, value: 100, unit: '% of resting radius', dec: 0, aria: 'the radius of the arterioles as a percent of its resting value', detents: [95, { v: 100, label: 'at rest' }] });
  /* the book's pressures at 5.00 L/min, in mm Hg, and the resistances they imply in mm Hg per L/min: aorta to small
     arteries 35, small arteries to arterioles 50, arterioles to venules 20, venules to the venae cavae 11, pulmonary
     artery to pulmonary veins 17; the venae cavae hold 4 and the pulmonary veins 8 */
  const Q0 = 5, R_AO = 35 / Q0, R_ART = 50 / Q0, R_CAP = 20 / Q0, R_VEN = 11 / Q0, R_PUL = 17 / Q0, P_VC = 4, P_PV = 8;
  const REST = [120, 85, 35, 15, 4, 25, 8];
  const NAMES = ['Aorta', 'Small arteries', 'Arterioles', 'Venules', 'Venae cavae', 'Pulmonary artery', 'Pulmonary veins'];
  /* the axis is 0 to 250 mm Hg, fixed from the slider maximum with the arterioles at rest (10.0 L/min puts the aorta at
     236); a narrowed arteriole at a high flow can carry the aorta past it, and that bar is pinned at the top with its value */
  const box = { l: 130, r: 1310, t: 120, b: 470 }, PMAX = 250;
  const hits = [];
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const Q = Qs.v, f = fs.v / 100, Rart = R_ART / Math.pow(f, 4);
    const pVen = P_VC + R_VEN * Q, pArt = pVen + R_CAP * Q, pSmall = pArt + Rart * Q, pAo = pSmall + R_AO * Q, pPA = P_PV + R_PUL * Q;
    const P = [pAo, pSmall, pArt, pVen, P_VC, pPA, P_PV];
    const pc = C('pressure'), fc = C('flow-rate');
    const { X, Y } = axes(ctx, box, [0, 8], [0, PMAX], { yl: 'blood pressure, mm Hg', yc: pc, nx: 8, ny: 5, fx: () => '' });
    const xs = (i) => X(i < 5 ? i + 0.5 : i + 1.5), W = 90;
    /* the two pumps and the gap for the lungs */
    line(ctx, X(5.5), box.t, X(5.5), box.b, PAL.muted, 2, [10, 10]);
    text(ctx, 'through the body, pumped by the left ventricle', X(2.5), box.b + 80, PAL.ink, { size: 19, weight: 600, align: 'center' });
    text(ctx, 'through the lungs, by the right', X(7), box.b + 80, PAL.ink, { size: 19, weight: 600, align: 'center' });
    /* the bars, the resting value hollow behind each one the reader has moved, and the drops between them */
    for (let i = 0; i < 7; i++) {
      const x = xs(i), moved = Math.abs(P[i] - REST[i]) > 0.5;
      if (moved) { ctx.save(); ctx.strokeStyle = alpha(pc, 0.6); ctx.lineWidth = 2; ctx.setLineDash([6, 6]); ctx.strokeRect(x - W / 2, Y(REST[i]), W, box.b - Y(REST[i])); ctx.restore(); }
      const top = Math.max(box.t, Y(P[i]));
      ctx.save(); ctx.fillStyle = alpha(pc, 0.32); ctx.fillRect(x - W / 2, top, W, box.b - top); ctx.restore();
      line(ctx, x - W / 2, top, x + W / 2, top, pc, 3);
      if (Y(P[i]) < box.t) dot(ctx, x, box.t, pc, false, 9);
      text(ctx, fmt(P[i], 0), x, top - 18, pc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
      NAMES[i].split(' ').forEach((w, k) => text(ctx, w, x, box.b + 30 + k * 20, PAL.ink, { size: 17, align: 'center' }));
      hits.push({ x, y: (top + box.b) / 2, r: W / 2, name: NAMES[i] + ': ' + fmt(P[i], 0) + ' mm Hg' + (moved ? ' (' + REST[i] + ' at rest)' : '') });
      if (i < 4 || i === 5) {
        const drop = P[i] - P[i + 1], xm = (x + xs(i + 1)) / 2, ym = Math.max(box.t + 40, (Y(P[i]) + Y(P[i + 1])) / 2);
        text(ctx, '−' + fmt(drop, 0), xm, Math.min(box.b - 30, ym), pc, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
      }
    }
    text(ctx, 'Q = ' + fmt(Q, 2) + ' L/min through every part', box.r, box.t + 18, fc, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'arterioles at ' + fmt(f, 2) + ' of their resting radius, R = ' + fmt(Rart, 1) + ' mm Hg per L/min', box.r, box.t + 46, PAL.ink, { size: 18, align: 'right', bg: PAL.panel });
    topline(ctx, `At ${fmt(Q, 2)} L/min the pressure falls from ${fmt(pAo, 0)} mm Hg in the aorta to 4 mm Hg in the venae cavae, ${fmt(pSmall - pArt, 0)} of the ${fmt(pAo - P_VC, 0)} mm Hg across the arterioles.`);
    readout(d.readout, `\\kPrtwo - \\kProne = R\\kQ = (${fmt(Rart, 1)}\\ \\text{mm Hg per L/min})(${fmt(Q, 2)}\\ \\text{L/min}) = ${fmt(pSmall - pArt, 1)}\\ \\text{mm Hg across the arterioles}`,
      `The left ventricle must supply ${fmt(pAo, 0)} mm Hg to drive this flow through the body; every stretch of vessel is a fixed resistance except the arterioles, whose resistance goes as the inverse fourth power of their radius.`);
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();
};
