/* Figures for section 12.2 Bernoulli's Equation. Boots against the section's text article.
   Every figure here is a steady flow held at one state while the reader drags
   its sliders, so none registers a cycle, none carries a transport, and a
   slider's or a choice's input alone redraws it (ch12/config.md). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, vbracket, faded } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, RHO_AIR = 1.29, RHO_W = 1000, P_ATM = 1.01e5;
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const ease = (t) => { const s = clamp(t, 0, 1); return s * s * (3 - 2 * s); };
/* a number as a mantissa and a power of ten: {m, e} with 1 ≤ m < 10, or e = 0 for small numbers */
function sci(v, d) {
  if (Math.abs(v) < 1e-12) return { m: 0, e: 0 };
  const e = Math.floor(Math.log10(Math.abs(v)));
  let m = v / Math.pow(10, e);
  if (Math.abs(+m.toFixed(d)) >= 10) { m /= 10; return { m: +m.toFixed(d), e: e + 1 }; }
  return { m: +m.toFixed(d), e };
}
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (e) => String(e).split('').map((c) => SUP[c]).join('');
/* a value written against a fixed power of ten, for the canvas ("0.69 × 10⁵") and for KaTeX */
const atPow = (v, e, d) => fmt(v / Math.pow(10, e), d) + ' × 10' + sup(e);
const atPowTex = (v, e, d) => fmt(v / Math.pow(10, e), d) + ' \\times 10^{' + e + '}';
/* a pressure difference for the canvas and the readout: plain newtons per square metre below a thousand, ×10³ above */
const dP = (v) => (Math.abs(v) < 1000 ? fmt(v, 0) + ' N/m²' : atPow(v, sci(v, 2).e, 2) + ' N/m²');
const dPtex = (v) => (Math.abs(v) < 1000 ? fmt(v, 0) + '\\ \\text{N/m}^2' : atPowTex(v, sci(v, 2).e, 2) + '\\ \\text{N/m}^2');
/* a height for the canvas: millimetres below a decimetre, centimetres below a metre, metres above */
const hStr = (h, mm = 0.1) => (h < mm ? fmt(h * 1000, 1) + ' mm' : h < 1 ? fmt(h * 100, 1) + ' cm' : fmt(h, 2) + ' m');
const hTex = (h, mm = 0.1) => (h < mm ? fmt(h * 1000, 1) + '\\ \\text{mm}' : h < 1 ? fmt(h * 100, 1) + '\\ \\text{cm}' : fmt(h, 2) + '\\ \\text{m}');
/* a smooth polyline through sampled points */
function path(ctx, pts, color, w, dash) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
}
/* a streamline: the sampled path in a muted ink, with one arrowhead at its end so the direction of flow is read */
function streamline(ctx, pts, color) {
  path(ctx, pts, color, 2);
  const [x1, y1] = pts[pts.length - 2], [x2, y2] = pts[pts.length - 1];
  arrow(ctx, x1, y1, x2, y2, color, 2);
}
/* a closed filled shape */
function shape(ctx, pts, fill, stroke, w = 3) {
  ctx.save(); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.stroke(); }
  ctx.restore();
}
const range = (n) => Array.from({ length: n }, (_, i) => i);
const samples = (x0, x1, n, f) => range(n + 1).map((i) => { const x = x0 + ((x1 - x0) * i) / n; return [x, f(x)]; });

/* =====================================================================
   FIGURE 12.5: the car passing the truck, from overhead. The air that ends
   up between the vehicles came from a band 3.0 m wide, so the equation of
   continuity fixes how much faster it moves in the gap, and Bernoulli's
   principle fixes how much lower its pressure is. Still: a steady flow held
   at one state while the gap and the speed are dragged.
===================================================================== */
(function () {
  const d = sim('sim-car-truck', 800);
  const vs = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 5, max: 35, step: 1, value: 25, unit: 'm/s', dec: 0, aria: 'the speed of the air past the outside of the vehicles' });
  const gs = ctl(d.controls, { label: '\\text{the gap}', cls: 'position', min: 1.2, max: 3, step: 0.1, value: 1.5, unit: 'm', dec: 1, aria: 'the gap between the car and the truck' });
  const S = 70, BAND = 3.0, YG = 470, KV = 3, KP = 0.04;              /* 70 units per metre; the push arrows at 0.04 units per N/m² */
  const TW = 2.5 * S, CW = 1.8 * S, CX0 = 560, CX1 = 875, TX0 = 330, TX1 = 1250;
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('pressure'), cTruck = F.ref('truck'), cCar = F.ref('car');
    const v1 = vs.v, gap = gs.v, v2 = (v1 * BAND) / gap, dp = 0.5 * RHO_AIR * (v2 * v2 - v1 * v1);
    const half = (gap * S) / 2, tB = YG - half, tT = tB - TW, cT = YG + half, cB = cT + CW;
    /* how far the band of air between the vehicles is pinched at each x: 1 upstream, gap/BAND alongside the car */
    const pinch = (x) => { const k = x < CX0 ? ease((x - (CX0 - 260)) / 260) : x > CX1 ? 1 - ease((x - CX1) / 260) : 1; return 1 + (gap / BAND - 1) * k; };
    /* the streamlines between the vehicles, seven of them spread over the 3.0 m band upstream */
    const mid = alpha(PAL.ink, 0.55);
    for (let i = 0; i < 7; i++) {
      const u = -105 + i * 35;
      streamline(ctx, samples(60, 1330, 64, (x) => YG + u * pinch(x)), mid);
    }
    /* the streamlines outside, which bend around the bodies */
    const bump = (x, x0, x1) => { const k = x < x0 ? ease((x - (x0 - 200)) / 200) : x > x1 ? 1 - ease((x - x1) / 240) : 1; return k; };
    for (let i = 1; i <= 3; i++) {
      streamline(ctx, samples(60, 1330, 64, (x) => tT - 22 * i - 24 * bump(x, TX0, TX1) * (1 - (i - 1) * 0.25)), mid);
      streamline(ctx, samples(60, 1330, 64, (x) => cB + 22 * i + 24 * bump(x, CX0, CX1) * (1 - (i - 1) * 0.25)), mid);
    }
    /* the truck: cab at the left, trailer behind, seen from above */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = cTruck; ctx.lineWidth = 3;
    ctx.fillRect(TX0, tT, TX1 - TX0, TW); ctx.strokeRect(TX0, tT, TX1 - TX0, TW);
    ctx.fillStyle = PAL.soft; ctx.fillRect(TX0 + 6, tT + 6, 150, TW - 12); ctx.strokeRect(TX0 + 6, tT + 6, 150, TW - 12);
    ctx.fillRect(TX0 + 60, tT + 6, 40, TW - 12);
    ctx.restore();
    text(ctx, 'the truck', (TX0 + TX1) / 2 + 60, (tT + tB) / 2, cTruck, { size: 20, align: 'center' });
    /* the car, a rounded body with its windows, seen from above */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = cCar; ctx.lineWidth = 3;
    const r = 26;
    ctx.beginPath(); ctx.moveTo(CX0 + r, cT); ctx.lineTo(CX1 - r, cT); ctx.quadraticCurveTo(CX1, cT, CX1, cT + r); ctx.lineTo(CX1, cB - r); ctx.quadraticCurveTo(CX1, cB, CX1 - r, cB);
    ctx.lineTo(CX0 + r, cB); ctx.quadraticCurveTo(CX0, cB, CX0, cB - r); ctx.lineTo(CX0, cT + r); ctx.quadraticCurveTo(CX0, cT, CX0 + r, cT); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.soft; ctx.fillRect(CX0 + 70, cT + 10, 26, CW - 20); ctx.fillRect(CX0 + 96, cT + 10, 120, CW - 20); ctx.fillRect(CX1 - 90, cT + 10, 22, CW - 20);
    ctx.strokeRect(CX0 + 96, cT + 10, 120, CW - 20); ctx.restore();
    text(ctx, 'the car', CX0 - 16, (cT + cB) / 2, cCar, { size: 20, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the two speeds: the air upstream and the air in the gap */
    arrow(ctx, 90, YG, 90 + v1 * KV, YG, vc, 5);
    text(ctx, 'v_1 = ' + fmt(v1, 0) + ' m/s', 90, YG - 34, vc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    const gx = CX0 + 60;
    arrow(ctx, gx, YG, gx + v2 * KV, YG, vc, 5);
    text(ctx, 'v_2 = ' + fmt(v2, 0) + ' m/s', gx, YG - 30, vc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the pressures: outside on either side, and in the gap */
    text(ctx, 'P_o', 1370, tT - 33, pc, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'P_o', 1370, cB + 33, pc, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'P_i', 1370, YG, pc, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the inward push on each vehicle, to the scale of the pressure difference */
    if (dp > 1) {
      const L = dp * KP, px = 560;
      arrow(ctx, px, tB - 10 - L, px, tB - 10, pc, 5);
      arrow(ctx, 600, cT + 10 + L, 600, cT + 10, pc, 5);
      text(ctx, 'P_o − P_i = ' + dP(dp), px + 22, tB - 14 - L / 2, pc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    topline(ctx, dp < 1
      ? 'With the vehicles ' + fmt(gap, 1) + ' m apart the air between them is not squeezed at all, so it moves at ' + fmt(v1, 0) + ' m/s and the pressure is the same inside and out.'
      : 'With the vehicles ' + fmt(gap, 1) + ' m apart the air between them moves at ' + fmt(v2, 0) + ' m/s, and the pressure there is ' + dP(dp) + ' below the pressure outside.');
    readout(d.readout, `\\kProut - \\kPrin = \\tfrac{1}{2}\\krho(\\kvtwo^2 - \\kvone^2) = \\tfrac{1}{2}(1.29\\ \\text{kg/m}^3)[(${fmt(v2, 0)}\\ \\text{m/s})^2 - (${fmt(v1, 0)}\\ \\text{m/s})^2] = ${dPtex(dp)}`,
      'The air that passes between the vehicles came from a band 3.0 m wide, so the equation of continuity gives v₂ = v₁(3.0 m)/(' + fmt(gap, 1) + ' m) = ' + fmt(v2, 0) + ' m/s, with the density of air taken as 1.29 kg/m³. '
      + (dp < 1 ? 'With no difference in speed there is no difference in pressure, and nothing pushes the vehicles together.'
        : 'The greater pressure outside pushes on every square meter of the car’s side with ' + dP(dp).replace('N/m²', 'N') + ' toward the truck, and on the truck toward the car.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the three terms of Bernoulli's equation. A bit of water is followed
   from point 1 to point 2 of a tube that changes height and width, and the
   pressure, the kinetic energy per unit volume and the gravitational
   potential energy per unit volume are drawn as bars for each point, the
   total ruled across in ink. The special cases the section takes in turn
   come out of the sliders themselves, each a dashed circle: both speeds at
   zero is the static fluid, both heights equal is constant depth, and the
   equation morphs into that form as its terms fade. Still: a sum between
   two points has no clock.
===================================================================== */
(function () {
  const d = sim('sim-bernoulli', 770);
  const P1 = 1.50e5, RHO = RHO_W, V1 = 4, V2 = 9;
  const zero = { at: 0, label: '0' };
  let h1, h2;
  const v1 = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 0, max: 10, step: 0.5, value: V1, unit: 'm/s', dec: 1, aria: 'the speed of the water at point 1', specials: [zero] });
  const v2 = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: 0, max: 10, step: 0.5, value: V2, unit: 'm/s', dec: 1, aria: 'the speed of the water at point 2', specials: [zero] });
  h1 = ctl(d.controls, { label: '\\khone', cls: 'position', min: 0, max: 10, step: 0.5, value: 2, unit: 'm', dec: 1, aria: 'the height of point 1 above the reference', specials: [zero, { at: () => (h2 ? h2.v : null), label: 'h₂' }] });
  h2 = ctl(d.controls, { label: '\\khtwo', cls: 'position', min: 0, max: 10, step: 0.5, value: 5, unit: 'm', dec: 1, aria: 'the height of point 2 above the reference', specials: [zero, { at: () => h1.v, label: 'h₁' }] });
  h1.refresh();
  const ro = F.readout(d);
  /* the kinetic and the gravitational bars, and their legend entries, fade with the terms the case strikes */
  const P = F.presence(d);
  const YREF = 440, SH = 24, X1 = 340, X2 = 1000, XA = 500, XB = 860;
  const AX0 = 300, AX1 = 1280, EMAX = 3.0e5, KX = (AX1 - AX0) / EMAX;
  const halfw = (v) => (v === 0 ? 44 : clamp(22 * Math.sqrt(4 / v), 14, 44));
  const T = {
    P1: '\\kProne', k1: '\\tfrac{1}{2}\\krho\\kvone^2', g1: '\\krho\\kg\\khone',
    P2: '\\kPrtwo', k2: '\\tfrac{1}{2}\\krho\\kvtwo^2', g2: '\\krho\\kg\\khtwo',
  };
  /* one line: the two sides in symbols, then in numbers (× 10⁵ J/m³), then their common total; each term and each number keyed by its point */
  function form(L, R, val) {
    const n = (k) => `\\mk{${k}v}{${fmt(val[k] / 1e5, 2)}}`;
    const sym = (ks) => ks.map((k) => `\\mk{${k}}{${T[k]}}`).join(' + ');
    const num = (ks) => (ks.length > 1 ? `(${ks.map(n).join(' + ')})` : n(ks[0])) + '\\times 10^{5}';
    const segs = [sym(L), sym(R), num(L)];
    if (L.length > 1 || R.length > 1) segs.push(num(R));
    if (L.length > 1 && R.length > 1) segs.push(`\\mk{tot}{${fmt(L.reduce((s, k) => s + val[k], 0) / 1e5, 2)}}\\times 10^{5}`);
    return segs.join(' = ') + '\\ \\text{J/m}^3';
  }
  /* the three terms end to end on the one axis, told apart by their labels and by an ink rule between them, since two hues of the scheme may sit close */
  function bars(ctx, y, P, ke, pe, total, pc, ec, aK, aG) {
    let x = AX0;
    const seg = (w, fill, hatch, a) => {
      if (w < 0.5) { x += w; return; }
      ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = fill; ctx.fillRect(x, y - 17, w, 34);
      if (hatch) { ctx.beginPath(); ctx.rect(x, y - 17, w, 34); ctx.clip(); ctx.strokeStyle = ec; ctx.lineWidth = 2; ctx.beginPath(); for (let s = x - 34; s < x + w; s += 12) { ctx.moveTo(s, y + 17); ctx.lineTo(s + 34, y - 17); } ctx.stroke(); }
      ctx.restore(); x += w;
    };
    seg(P * KX, pc, false, 1); seg(ke * KX, ec, false, aK); seg(pe * KX, alpha(ec, 0.35), true, aG);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.5; ctx.strokeRect(AX0, y - 17, total * KX, 34);
    for (const bx of [AX0 + P * KX, AX0 + (P + ke) * KX]) { ctx.beginPath(); ctx.moveTo(bx, y - 17); ctx.lineTo(bx, y + 17); ctx.stroke(); }
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const vc = C('velocity'), pc = C('pressure'), hc = C('position'), ec = C('energy');
    const va = v1.v, vb = v2.v, ha = h1.v, hb = h2.v;
    const still = va === 0 && vb === 0, level = ha === hb, ground = hb === 0, base = ha === 0;
    P.show('k', !still, { ms: 1200 }); P.show('g', !level, { ms: 1200 });
    const aK = 0.2 + 0.8 * P.a('k'), aG = 0.2 + 0.8 * P.a('g');
    const ke1 = 0.5 * RHO * va * va, ke2 = 0.5 * RHO * vb * vb, pe1 = RHO * G * ha, pe2 = RHO * G * hb;
    const total = P1 + ke1 + pe1, P2 = total - ke2 - pe2;
    const ya = YREF - SH * ha, yb = YREF - SH * hb, wa = halfw(va), wb = halfw(vb);
    const cen = (x) => ya + (yb - ya) * ease((x - XA) / (XB - XA)), wid = (x) => wa + (wb - wa) * ease((x - XA) / (XB - XA));
    const top = samples(200, 1120, 80, (x) => cen(x) - wid(x)), bot = samples(200, 1120, 80, (x) => cen(x) + wid(x)).reverse();
    line(ctx, 100, YREF, 1300, YREF, alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'reference height, h = 0', 1300, YREF, PAL.muted, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.9) });
    shape(ctx, top.concat(bot), PAL.soft, PAL.ink, 3);
    for (const [x, v, h, y, w, P, nm] of [[X1, va, ha, ya, wa, P1, '1'], [X2, vb, hb, yb, wb, P2, '2']]) {
      const cp = F.ref('point-' + nm);
      if (v > 0) arrow(ctx, x - v * 7, y, x + v * 7, y, vc, 6);
      dot(ctx, x, y, cp, true, 8);
      text(ctx, nm, x, y - w - 24, cp, { size: 22, weight: 600, align: 'center' });
      text(ctx, 'P_' + nm + ' = ' + atPow(P, 5, 2) + ' N/m²', x, y - w - 54, pc, { size: 20, weight: 600, align: 'center' });
      text(ctx, 'v_' + nm + ' = ' + fmt(v, 1) + ' m/s', x, y + w + 26, vc, { size: 20, weight: 600, align: 'center' });
      if (h > 0.01) vbracket(ctx, nm === '1' ? x - 110 : x + 130, y, YREF, hc, 'h_' + nm + ' = ' + fmt(h, 1) + ' m', nm === '1' ? -1 : 1);
      else text(ctx, 'h_' + nm + ' = 0', x - 110, YREF + 60, hc, { size: 20, weight: 600, align: 'right' });
    }
    /* the legend: a term the case has crossed out is struck through where it stands */
    const legend = [['P', 300, pc, 1], ['½ρv²', 340, ec, P.a('k')], ['ρgh (hatched)', 412, ec, P.a('g')]];
    for (const [s, x, col, a] of legend) {
      text(ctx, s, x, 530, alpha(col, 0.45 + 0.55 * a), { size: 19, weight: 600 });
      if (a < 1) { const w = F.measure(ctx, s, { size: 19, weight: 600 }); line(ctx, x - 4, 530, x - 4 + (w + 8) * (1 - a), 530, col, 3); }
    }
    text(ctx, 'the three terms of Bernoulli’s equation, as energy per unit volume', 1280, 530, PAL.muted, { size: 17, align: 'right' });
    for (const [nm, y, Pr, ke, pe, cp] of [['at point 1', 572, P1, ke1, pe1, F.ref('point-1')], ['at point 2', 650, P2, ke2, pe2, F.ref('point-2')]]) {
      text(ctx, nm, 280, y, cp, { size: 20, weight: 600, align: 'right' });
      bars(ctx, y, Pr, ke, pe, total, pc, ec, aK, aG);
      const vy = y + 36;
      text(ctx, '× 10⁵ J/m³:', 280, vy, PAL.muted, { size: 17, align: 'right' });
      text(ctx, 'P = ' + fmt(Pr / 1e5, 2), AX0, vy, pc, { size: 17, weight: 600 });
      text(ctx, '½ρv² = ' + fmt(ke / 1e5, 2), AX0 + 150, vy, alpha(ec, aK), { size: 17, weight: 600 });
      text(ctx, 'ρgh = ' + fmt(pe / 1e5, 2), AX0 + 340, vy, alpha(ec, aG), { size: 17, weight: 600 });
    }
    const tx = AX0 + total * KX, tl = tx > 1040;
    line(ctx, tx, 548, tx, 714, PAL.ink, 3, [8, 10]);
    text(ctx, 'total = ' + atPow(total, 5, 2) + ' J/m³', tx + (tl ? -14 : 14), 611, PAL.ink, { size: 19, weight: 600, align: tl ? 'right' : 'left' });
    line(ctx, AX0, 714, AX1, 714, PAL.muted, 3);
    for (let i = 0; i <= 3; i++) { const x = AX0 + (i * 1e5) * KX; line(ctx, x, 708, x, 720, PAL.muted, 3); text(ctx, i === 0 ? '0' : i + ' × 10⁵', x, 740, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'J/m³', 280, 740, PAL.muted, { size: 17, align: 'right' });
    const dv = vb - va, dh = hb - ha, dPv = P2 - P1;
    const spd = dv > 0 ? 'speeds up from ' + fmt(va, 1) + ' to ' + fmt(vb, 1) + ' m/s' : dv < 0 ? 'slows from ' + fmt(va, 1) + ' to ' + fmt(vb, 1) + ' m/s' : 'keeps its speed of ' + fmt(va, 1) + ' m/s';
    const hgt = dh > 0 ? 'rises ' + fmt(dh, 1) + ' m' : dh < 0 ? 'falls ' + fmt(-dh, 1) + ' m' : 'stays at one height';
    const chg = dPv < 0 ? 'falls' : dPv > 0 ? 'rises' : 'stays';
    topline(ctx, still
      ? (level ? 'The water is at rest and both points are at one height, so the pressure is the same at both.'
        : 'The water is at rest and point 2 is ' + fmt(Math.abs(dh), 1) + ' m ' + (dh > 0 ? 'above' : 'below') + ' point 1, so its pressure is ' + atPow(Math.abs(dPv), 5, 2) + ' N/m² ' + (dh > 0 ? 'lower' : 'higher') + ' there.')
      : level
        ? 'At one depth the water ' + spd + ' between the two points, so its pressure ' + chg + ' by ' + atPow(Math.abs(dPv), 5, 2) + ' N/m².'
        : dPv === 0 ? 'Between point 1 and point 2 the water ' + spd + ' and ' + hgt + ', and its pressure comes out the same at both.'
          : 'Between point 1 and point 2 the water ' + spd + ' and ' + hgt + ', so its pressure ' + chg + ' from ' + atPow(P1, 5, 2) + ' to ' + atPow(P2, 5, 2) + ' N/m².');
    /* the equation in the form the sliders put it in */
    const [L, R] = still && level ? [['P1'], ['P2']]
      : still && ground ? [['P2'], ['P1', 'g1']]
        : still && base ? [['P1'], ['P2', 'g2']]
          : still ? [['P1', 'g1'], ['P2', 'g2']]
            : level ? [['P1', 'k1'], ['P2', 'k2']]
              : [['P1', 'k1', 'g1'], ['P2', 'k2', 'g2']];
    ro.set(form(L, R, { P1, k1: ke1, g1: pe1, P2, k2: ke2, g2: pe2 }), 'Water at 1.00 × 10³ kg/m³ and g = 9.80 m/s², with P₁ held at 1.50 × 10⁵ N/m². Whatever the water gains in speed or in height it pays for out of its pressure.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.6: entrainment, drawn once. A stream of air is driven through a
   tube that narrows, a side tube from the narrow part dips into water that
   is open to the atmosphere, and the greater pressure outside pushes the
   water up the side tube until its weight makes up the difference; once it
   reaches the stream it is carried off. Still: the stream is steady and the
   water's level answers the speed and nothing else.
===================================================================== */
(function () {
  const d = sim('sim-entrainment', 640);
  const vs = ctl(d.controls, { label: '\\kvone', cls: 'velocity', min: 0, max: 40, step: 1, value: 20, unit: 'm/s', dec: 0, aria: 'the speed of the air entering the tube' });
  const rs = ctl(d.controls, { label: '\\kareaone/\\kareatwo', cls: '', min: 1, max: 2, step: 0.05, value: 1.5, unit: '', dec: 2, aria: 'how much the tube narrows, as the ratio of the wide area to the narrow one' });
  const W1 = 70, YWALL = 330, XC0 = 560, XC1 = 840, XS = 700, TUBE = 0.20, SM = 1000, YSURF = YWALL + TUBE * SM, KV = 3;   /* 1000 units per metre in the side tube */
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('pressure'), hc = C('position'), ac = C('area'), cTube = F.ref('tube'), cSide = F.ref('side-tube');
    const v1 = vs.v, ratio = rs.v, v2 = v1 * ratio, dp = 0.5 * RHO_AIR * v2 * v2, hfull = dp / (RHO_W * G), h = Math.min(hfull, TUBE), lifted = hfull >= TUBE;
    const W2 = W1 / ratio, YC = YWALL - W2;
    const wid = (x) => W1 + (W2 - W1) * (x < XC0 ? ease((x - (XC0 - 110)) / 110) : x > XC1 ? 1 - ease((x - XC1) / 110) : 1);
    /* the tube in section, its lower wall fixed at the constriction so the side tube keeps its height */
    const top = samples(100, 1300, 80, (x) => YC - wid(x)), bot = samples(100, 1300, 80, (x) => YC + wid(x));
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); top.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); bot.slice().reverse().forEach(([x, y]) => ctx.lineTo(x, y)); ctx.closePath(); ctx.fill(); ctx.restore();
    path(ctx, top, cTube, 3);
    path(ctx, bot.filter(([x]) => x < XS - 14), cTube, 3); path(ctx, bot.filter(([x]) => x > XS + 14), cTube, 3);
    /* the streamlines, five of them, following the tube's shape */
    const mid = alpha(PAL.ink, 0.55);
    if (v1 > 0) for (let i = -2; i <= 2; i++) streamline(ctx, samples(120, 1280, 64, (x) => YC + (i / 3) * wid(x)), mid);
    /* the side tube and the beaker of water beneath the constriction */
    ctx.save(); ctx.strokeStyle = cSide; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(XS - 14, YWALL); ctx.lineTo(XS - 14, YSURF + 40); ctx.moveTo(XS + 14, YWALL); ctx.lineTo(XS + 14, YSURF + 40); ctx.stroke();
    ctx.strokeStyle = PAL.ink;
    ctx.fillStyle = alpha(PAL.ink, 0.16); ctx.fillRect(XS - 70, YSURF, 140, 70);
    ctx.beginPath(); ctx.moveTo(XS - 70, YSURF - 30); ctx.lineTo(XS - 70, YSURF + 70); ctx.lineTo(XS + 70, YSURF + 70); ctx.lineTo(XS + 70, YSURF - 30); ctx.stroke();
    /* the water in the side tube, standing h above the surface */
    ctx.fillStyle = alpha(PAL.ink, 0.16); ctx.fillRect(XS - 14, YSURF - h * SM, 28, h * SM + 40);
    ctx.restore();
    line(ctx, XS - 14, YSURF - h * SM, XS + 14, YSURF - h * SM, PAL.ink, 2.5);
    line(ctx, XS - 70, YSURF, XS - 14, YSURF, PAL.ink, 2.5); line(ctx, XS + 14, YSURF, XS + 70, YSURF, PAL.ink, 2.5);
    text(ctx, 'water', XS - 42, YSURF + 40, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'open to the air, P_0 = 1.01 × 10⁵ N/m²', XS + 100, YSURF + 50, pc, { size: 19, weight: 600 });
    /* the height the water stands above the surface, bracketed beside the beaker */
    if (h > 0.004) {
      line(ctx, XS + 14, YSURF - h * SM, XS + 100, YSURF - h * SM, alpha(PAL.ink, 0.45), 1.5, [5, 6]);
      line(ctx, XS + 70, YSURF, XS + 100, YSURF, alpha(PAL.ink, 0.45), 1.5, [5, 6]);
      vbracket(ctx, XS + 100, YSURF - h * SM, YSURF, hc, 'h = ' + hStr(h, 0.01), 1);
    }
    /* the drops the stream carries away once the water reaches it */
    if (lifted) {
      for (let k = 0; k < 14; k++) { const x = XS + 30 + k * 38, y = YC + Math.sin(k * 2.3) * wid(x) * 0.55; dot(ctx, x, y, PAL.ink, true, 4); }
      text(ctx, 'drops of water carried off in the stream', 1290, YC - wid(1290) - 22, PAL.ink, { size: 19, align: 'right', bg: alpha(PAL.panel, 0.85) });
    }
    /* the speeds and the pressures */
    if (v1 > 0) {
      arrow(ctx, 230 - v1 * KV / 2, YC, 230 + v1 * KV / 2, YC, vc, 5);
      arrow(ctx, XS - v2 * KV / 2, YC, XS + v2 * KV / 2, YC, vc, 5);
    }
    text(ctx, 'v_1 = ' + fmt(v1, 0) + ' m/s', 230, YC + W1 + 26, vc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'v_2 = ' + fmt(v2, 0) + ' m/s', XS, YC - W2 - 26, vc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'A_1', 230, YC - W1 - 26, ac, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'A_2', XS + 120, YC - W2 - 26, ac, { size: 21, weight: 600, align: 'center' });
    text(ctx, dp < 0.5 ? 'P_2 = P_0' : 'P_2 = P_0 − ' + dP(dp), XS, YC - W2 - 62, pc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, v1 === 0 ? 'With no stream through the tube the pressure inside is the pressure outside, and the water stands level in the side tube.'
      : lifted ? 'Air at ' + fmt(v2, 0) + ' m/s in the constriction has a pressure ' + dP(dp) + ' below the air outside, enough to lift the water the whole 20 cm of the tube, and the stream carries it off as a spray.'
        : 'Air at ' + fmt(v2, 0) + ' m/s in the constriction has a pressure ' + dP(dp) + ' below the air outside, and the water climbs ' + hStr(h, 0.01) + ' of the 20 cm tube.');
    readout(d.readout, `\\kPr_{0} - \\kPrtwo = \\tfrac{1}{2}\\krho\\kvtwo^2 = \\tfrac{1}{2}(1.29\\ \\text{kg/m}^3)(${fmt(v2, 0)}\\ \\text{m/s})^2 = ${dPtex(dp)}`,
      'The equation of continuity gives v₂ = v₁A₁/A₂ = ' + fmt(v2, 0) + ' m/s in the constriction. The water rises until its own weight makes up the difference in pressure, h = (P₀ − P₂)/ρg = ' + hStr(hfull, 0.01) + ' with water at 1.00 × 10³ kg/m³'
      + (lifted ? ', which is more than the 20 cm of the tube, so the water reaches the stream and is entrained. ' : '. ')
      + 'The pressure in the stream can fall no lower than zero, so no such device can lift water more than about 10 m.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.7: the wing and the sail. Air streams faster along one surface
   than the other, the pressure is lower where it moves faster, and the net
   pressure on the surface is drawn to scale. Still: a wing or a sail held
   in a steady wind is one state. The two are one idea on two surfaces, so
   the wing's profile bends into the sail and its streamlines with it, and
   the two speed sliders carry over, each keeping its place while its range
   is set for the surface, so that each keeps a fixed scale from its own
   maxima.
===================================================================== */
(function () {
  const d = sim('sim-wing-sail', 680);
  const RANGE = {
    wing: { fast: { min: 0, max: 100, step: 1, dec: 0, unit: 'm/s', value: 72 }, slow: { min: 0, max: 100, step: 1, dec: 0, unit: 'm/s', value: 60 } },
    sail: { fast: { min: 0, max: 12, step: 0.5, dec: 1, unit: 'm/s', value: 8 }, slow: { min: 0, max: 12, step: 0.5, dec: 1, unit: 'm/s', value: 5 } },
  };
  const ARIA = { wing: ['the speed of the air over the top of the wing', 'the speed of the air under the bottom of the wing'], sail: ['the speed of the air along the front of the sail', 'the speed of the air along the back of the sail'] };
  const pick = choice(d.controls, { label: '\\text{the surface}', options: [{ value: 'wing', label: 'wing' }, { value: 'sail', label: 'sail' }], value: 'wing', aria: 'whether the wing or the sail is drawn',
    onInput: (s) => {
      const was = s === 'wing' ? 'sail' : 'wing';
      RANGE[was].fast.value = fast.v; RANGE[was].slow.value = slow.v;
      fast.range(RANGE[s].fast); slow.range(RANGE[s].slow);
      fast.relabel('\\kvtwo', ARIA[s][0]); slow.relabel('\\kvone', ARIA[s][1]);
    } });
  const fast = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', ...RANGE.wing.fast, aria: ARIA.wing[0] });
  const slow = ctl(d.controls, { label: '\\kvone', cls: 'velocity', ...RANGE.wing.slow, aria: ARIA.wing[1] });
  const mid = alpha(PAL.ink, 0.55);
  /* streamlines above and below a surface: n lines a gap apart far away, bunched over the
     surface by the factor each side's speed earns, so the faster side is the closer packed */
  function flowLines(ctx, topF, botF, x0, x1, xs0, xs1, gap, kTop, kBot) {
    const win = (x) => (x < xs0 ? ease((x - (xs0 - 160)) / 160) : x > xs1 ? 1 - ease((x - xs1) / 200) : 1);
    for (let i = 1; i <= 4; i++) {
      streamline(ctx, samples(x0, x1, 72, (x) => topF(x) - i * gap * (1 + (kTop - 1) * win(x))), mid);
      streamline(ctx, samples(x0, x1, 72, (x) => botF(x) + i * gap * (1 + (kBot - 1) * win(x))), mid);
    }
  }
  const WX0 = 300, WX1 = 1000, SX0 = 560, SX1 = 940, N = 60;
  /* the wing in profile: a cambered section whose chord slopes down from the leading edge */
  const wt = (x) => clamp((x - WX0) / (WX1 - WX0), 0, 1), chord = (x) => 350 + 52 * wt(x);
  const thick = (x) => { const s = wt(x); return 95 * Math.pow(Math.sin(Math.PI * s), 0.7) * (1 - 0.35 * s); };
  const wingTop = (x) => chord(x) - thick(x), wingBot = (x) => chord(x) + 14 * Math.sin(Math.PI * wt(x));
  /* the sail seen from above: it curves from the mast to the stern, bulging toward its front */
  const sailF = (x) => { const s = clamp((x - SX0) / (SX1 - SX0), 0, 1); return 380 - 80 * s - 70 * Math.sin(Math.PI * s); };
  const WING = samples(WX0, WX1, N, wingTop).concat(samples(WX0, WX1, N, wingBot).reverse());
  const SAIL = samples(SX0, SX1, N, sailF).concat(samples(SX0, SX1, N, sailF).reverse());
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('pressure'), cWing = F.ref('wing'), cSail = F.ref('sail');
    const wing = pick.value === 'wing', q = pick.mix((s) => (s === 'sail' ? 1 : 0));
    const vFast = fast.v, vSlow = slow.v;
    const dp = 0.5 * RHO_AIR * (vFast * vFast - vSlow * vSlow), vm = (vFast + vSlow) / 2 || 1;
    const kTop = clamp(vm / (vFast || 0.01), 0.45, 1.6), kBot = clamp(vm / (vSlow || 0.01), 0.45, 1.6);
    const KV = F.lerp(2.2, 18, q), KP = wing ? 0.045 : 2.2, GAP = 36;
    const topF = (x) => F.lerp(wingTop(x), sailF(x), q), botF = (x) => F.lerp(wingBot(x), sailF(x), q);
    const aSail = pick.a('sail'), aWing = pick.a('wing');
    /* the hull arrives under the sail */
    if (aSail > 0) {
      ctx.save(); ctx.globalAlpha = aSail; ctx.beginPath(); ctx.moveTo(280, 380);
      ctx.bezierCurveTo(420, 300, 700, 282, 900, 300); ctx.bezierCurveTo(960, 306, 990, 340, 990, 380); ctx.bezierCurveTo(990, 420, 960, 454, 900, 460);
      ctx.bezierCurveTo(700, 478, 420, 460, 280, 380); ctx.closePath();
      ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    }
    flowLines(ctx, topF, botF, 60, 1340, F.lerp(WX0, SX0, q), F.lerp(WX1, SX1, q), GAP, kTop, kBot);
    shape(ctx, F.lerpPts(WING, SAIL, q, true), alpha(PAL.soft, 1 - q), F.mixColor(cWing, cSail, q), F.lerp(3, 7, q));
    faded(ctx, aWing, [0, 0], () => text(ctx, 'the wing, in profile', 450, 342, cWing, { size: 19, align: 'center' }));
    faded(ctx, aSail, [0, 0], () => {
      text(ctx, 'the hull, seen from above', 640, 500, PAL.ink, { size: 19, align: 'center' });
      dot(ctx, SX0, 380, PAL.ink, true, 8);
      text(ctx, 'the mast', SX0 - 20, 404, PAL.ink, { size: 19, align: 'right' });
      text(ctx, 'the sail', 840, 250, cSail, { size: 19, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'front', 700, sailF(700) - 20, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'back', 700, sailF(700) + 22, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.85) });
    });
    /* the two speeds, on the faster and the slower side; each arrow and its label glide from one surface's place to the other's */
    const dec = wing ? 0 : 1;
    const xT = F.lerp(560, 620, q), xB = F.lerp(560, 700, q);
    const yT = F.lerp(wingTop(560) - GAP * kTop * 1.5, sailF(640) - GAP * kTop * 2.5, q), yB = F.lerp(wingBot(560) + GAP * kBot * 1.5, sailF(700) + GAP * kBot * 2.5, q);
    arrow(ctx, xT - vFast * KV / 2, yT, xT + vFast * KV / 2, yT, vc, 5);
    arrow(ctx, xB - vSlow * KV / 2, yB, xB + vSlow * KV / 2, yB, vc, 5);
    text(ctx, 'v_2 = ' + fmt(vFast, dec) + ' m/s ' + (wing ? 'over the top' : 'along the front'), xT, yT - 28, vc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'v_1 = ' + fmt(vSlow, dec) + ' m/s ' + (wing ? 'under the bottom' : 'along the back'), xB, yB + 30, vc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the net pressure on the surface, drawn to scale from its middle: straight up or down on the wing, clear of the
       speed labels, and perpendicular to the sail, toward the front when the front is the faster side */
    if (Math.abs(dp) > 0.05) faded(ctx, pick.a(pick.value), [0, 0], () => {
      if (wing) {
        const x = 800, L = Math.abs(dp) * KP, y0 = dp > 0 ? wingBot(800) : wingTop(800), up = dp > 0 ? -1 : 1;
        arrow(ctx, x, y0, x, y0 + up * L, pc, 6);
        text(ctx, 'P_b − P_t = ' + (dp < 0 ? '−' : '') + dP(Math.abs(dp)), x + 22, y0 + up * L / 2, pc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
      } else {
        const x = 810, y0 = sailF(810), sl = (sailF(820) - sailF(800)) / 20, nx = sl / Math.hypot(1, sl), ny = -1 / Math.hypot(1, sl);
        const L = Math.abs(dp) * KP, s = dp > 0 ? 1 : -1;
        arrow(ctx, x, y0, x + s * nx * L, y0 + s * ny * L, pc, 6);
        text(ctx, 'P_back − P_front = ' + (dp < 0 ? '−' : '') + dP(Math.abs(dp)), x + s * nx * L + 20, y0 + s * ny * L - 10, pc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
      }
    });
    const a = wing ? 'over the wing' : 'along the front of the sail', b = wing ? 'under it' : 'along the back';
    topline(ctx, Math.abs(dp) < 0.05
      ? 'With the air moving equally fast on both sides there is no difference in pressure and no push on the ' + (wing ? 'wing' : 'sail') + '.'
      : 'Air at ' + fmt(vFast, dec) + ' m/s ' + a + ' and ' + fmt(vSlow, dec) + ' m/s ' + b + ' leaves the pressure ' + (wing ? 'below the wing' : 'behind it') + ' ' + dP(Math.abs(dp)) + ' ' + (dp > 0 ? 'higher' : 'lower') + ' than ' + (wing ? 'above' : 'in front') + ', '
        + (dp > 0 ? (wing ? 'a lift of ' : 'a forward push of ') : (wing ? 'a downward push of ' : 'a backward push of ')) + fmt(Math.abs(dp), 0) + ' N on each square meter.');
    const lhs = wing ? '\\kPr_{\\text{b}} - \\kPr_{\\text{t}}' : '\\kPr_{\\text{back}} - \\kPr_{\\text{front}}';
    readout(d.readout, `${lhs} = \\tfrac{1}{2}\\krho(\\kvtwo^2 - \\kvone^2) = \\tfrac{1}{2}(1.29\\ \\text{kg/m}^3)[(${fmt(vFast, dec)}\\ \\text{m/s})^2 - (${fmt(vSlow, dec)}\\ \\text{m/s})^2] = ${dp < 0 ? '-' : ''}${dPtex(Math.abs(dp))}`,
      wing ? 'A pressure difference is a force on each unit of area, so the lift on each square meter of wing is ' + fmt(dp, 0) + ' N with air at 1.29 kg/m³. A wing also gains lift by deflecting air downward, which Bernoulli’s principle alone does not count.'
        : 'A pressure difference is a force on each unit of area, so the push on each square meter of sail is ' + fmt(dp, 0) + ' N with air at 1.29 kg/m³, directed from the back of the sail toward its front, which is what lets a boat sail into the wind.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 12.8: the manometer between two tubes, and the Prandtl tube that
   folds them into one. The opening that faces the flow sits in a dead spot,
   the opening on the side has the air moving past it, and the manometer's
   fluid stands higher on the side of the lower pressure. Choosing the
   Prandtl tube glides the two mouths into place, the facing tube becoming
   the inner one and the side-opening tube the outer one and its pipe; the
   manometer's fluid settles to its new height as mercury becomes water.
   Still: a manometer at a steady speed stands still.
===================================================================== */
(function () {
  const d = sim('sim-manometer', 660);
  const vs = ctl(d.controls, { label: '\\kvtwo', cls: 'velocity', min: 0, max: 200, step: 0.2, value: 55.6, unit: 'm/s', dec: 1, aria: 'the speed of the air past the tubes' });
  const dev = choice(d.controls, { label: '\\text{the device}', options: [{ value: 'two', label: 'two tubes' }, { value: 'prandtl', label: 'Prandtl tube' }], value: 'two', aria: 'two separate tubes or one Prandtl tube' });
  const fl = choice(d.controls, { label: '\\text{in the manometer}', options: [{ value: 'hg', label: 'mercury' }, { value: 'water', label: 'water' }], value: 'hg', aria: 'the fluid in the manometer' });
  const SM = 1000, HMAX = 0.25, XL = 900, XR = 1100, YREST = 430, YBOT = 560, TW = 40, KV = 1.1;   /* 1000 units per metre; the legs hold a difference of 0.25 m */
  const mid = alpha(PAL.ink, 0.55);
  const RHO_M = { hg: 13600, water: 1000 };
  /* where each part of the device sits: tube 1 and the inner tube are one part, tube 2 and the outer tube's pipe another */
  const AT = {
    two: { y1: 300, x1: 420, w1: 14, legL: 300, legR: 210, px: 760, py: 210, x2: 380, s1x: 400, s1y: 334, s2x: 520, s2y: 246, v1x: 404, v1y: 296, vx: 520, vy: 164, p1x: 700, p1y: 334, p2x: 700, p2y: 180, end: 800 },
    prandtl: { y1: 250, x1: 400, w1: 12, legL: 250, legR: 150, px: 760, py: 250, x2: 760, s1x: 400, s1y: 286, s2x: 580, s2y: 300, v1x: 384, v1y: 246, vx: 580, vy: 192, p1x: 840, p1y: 284, p2x: 736, p2y: 196, end: 740 },
  };
  function tube(ctx, pts, w, col) { path(ctx, pts, PAL.soft, w); path(ctx, pts, col, w + 5); path(ctx, pts, PAL.soft, w); }
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), pc = C('pressure'), hc = C('position'), c1 = F.ref('tube-1'), c2 = F.ref('tube-2'), cMan = F.ref('manometer'), cPr = F.ref('prandtl');
    const v = vs.v, fluid = fl.value === 'hg' ? 'mercury' : 'water';
    const dp = 0.5 * RHO_AIR * v * v, h = dp / (RHO_M[fl.value] * G), out = h > HMAX;
    const hd = fl.mix((f) => Math.min(dp / (RHO_M[f] * G), HMAX)), shade = fl.mix((f) => (f === 'hg' ? 0.3 : 0.14));
    const g = dev.mix((k) => AT[k]), aTwo = dev.a('two'), aPr = dev.a('prandtl');
    const lab = (s, x, y, col, o) => text(ctx, s, x, y, col, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85), ...o });
    /* the air, streaming left to right past the tubes, drawn first so the tubes sit over it; the
       streamline a tube's mouth faces is the one that ends in the dead spot */
    if (v > 0) for (let i = 0; i < 7; i++) streamline(ctx, [[60, 150 + i * 30], [g.end, 150 + i * 30]], mid);
    const U = [[XL, g.legL], [XL, YBOT], [XL + 30, YBOT + 40], [XR - 30, YBOT + 40], [XR, YBOT], [XR, g.legR]];
    /* tube 2 straightens out of the pipe that joins the outer tube to the right leg, and the outer tube fills in around the inner one */
    faded(ctx, aPr, [0, 0], () => {
      tube(ctx, [[440, 250], [780, 250]], 40, cPr);
      line(ctx, 440, 229, 440, 271, cPr, 3); line(ctx, 780, 229, 780, 271, cPr, 3);
    });
    tube(ctx, [[g.x2, g.py], [g.px, g.py], [g.px, g.legR], [XR, g.legR]], 14, c2);
    faded(ctx, aPr, [0, 0], () => {
      line(ctx, 753, 230, 767, 230, PAL.soft, 6);                                                        /* where the pipe leaves the outer wall */
      line(ctx, 556, 230, 604, 230, PAL.panel, 9); line(ctx, 556, 270, 604, 270, PAL.panel, 9);         /* the side holes */
    });
    faded(ctx, aTwo, [0, 0], () => {
      dot(ctx, 380, 210, c2, true, 8);                                                               /* tube 2's closed front */
      line(ctx, 500, 202, 540, 202, PAL.panel, 9);                                                       /* its side opening, a gap in the upper wall */
    });
    tube(ctx, [[g.x1, g.y1], [XL, g.y1]], g.w1, c1);
    lab('1', g.s1x, g.s1y, c1);
    lab('2', g.s2x, g.s2y, c2);
    lab('v_1 = 0', g.v1x, g.v1y, vc, { size: 21, align: 'right' });
    if (v > 0) arrow(ctx, g.vx - v * KV / 2, g.vy, g.vx + v * KV / 2, g.vy, vc, 5);
    lab('v_2 = ' + fmt(v, 1) + ' m/s', g.vx, g.vy - 32, vc, { size: 21 });
    lab('P_1', g.p1x, g.p1y, pc);
    lab('P_2', g.p2x, g.p2y, pc, { align: aPr > 0.5 ? 'right' : 'center' });
    /* the manometer: a U of two legs drawn over the ends of the tubes; the fluid falls on the side of the higher pressure and rises on the other */
    path(ctx, U, cMan, TW + 6); path(ctx, U, PAL.soft, TW);
    const yL = YREST + (hd * SM) / 2, yR = YREST - (hd * SM) / 2;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, shade); ctx.lineWidth = TW; ctx.lineCap = 'butt'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(XL, yL); ctx.lineTo(XL, YBOT); ctx.lineTo(XL + 30, YBOT + 40); ctx.lineTo(XR - 30, YBOT + 40); ctx.lineTo(XR, YBOT); ctx.lineTo(XR, yR); ctx.stroke(); ctx.restore();
    line(ctx, XL - TW / 2, yL, XL + TW / 2, yL, PAL.ink, 2.5); line(ctx, XR - TW / 2, yR, XR + TW / 2, yR, PAL.ink, 2.5);
    text(ctx, fluid, (XL + XR) / 2, YBOT + 40 + TW / 2 + 26, PAL.ink, { size: 19, align: 'center' });
    if (hd > 0.0005) {
      line(ctx, XL + TW / 2, yL, XR + TW / 2 + 40, yL, alpha(PAL.ink, 0.5), 2, [6, 6]);
      vbracket(ctx, XR + TW / 2 + 40, yR, yL, hc, 'h = ' + hStr(h), 1);
    }
    if (out && fl.k >= 1) { dot(ctx, XR, g.legR + 30, hc, false, 10); text(ctx, 'pushed out of the tube', XR + 30, g.legR + 30, hc, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) }); }
    topline(ctx, v === 0 ? 'With no air moving past the tubes the pressure is the same at both openings, and the ' + fluid + ' stands level.'
      : out ? 'At ' + fmt(v, 1) + ' m/s the pressure at the side opening is ' + dP(dp) + ' below the dead spot’s, and the water would stand ' + hStr(h) + ' higher there, far above the top of this manometer.'
        : 'At ' + fmt(v, 1) + ' m/s the pressure at the side opening is ' + dP(dp) + ' below the pressure at the dead spot, and the ' + fluid + ' stands ' + hStr(h) + ' higher on that side.');
    readout(d.readout, `\\kh = \\frac{\\kProne - \\kPrtwo}{\\krho'\\kg} = \\frac{\\tfrac{1}{2}\\krho\\kvtwo^2}{\\krho'\\kg} = \\frac{${dPtex(dp)}}{\\krho'\\kg} = ${hTex(h)}`,
      'The moving fluid is air at ρ = 1.29 kg/m³ and the manometer holds ' + fluid + ' at ρ′ = ' + (fl.value === 'hg' ? '13.6' : '1.00') + ' × 10³ kg/m³. The height grows as the square of the speed, so the speed is proportional to √h: at twice this speed, ' + fmt(2 * v, 1) + ' m/s, the ' + fluid + ' would stand ' + hStr(4 * h) + ' apart. '
      + (fl.value === 'hg' ? 'Mercury is 13.6 times denser than water, so a water manometer would read 13.6 times as high, ' + hStr(13.6 * h) + ' here.' : 'Mercury is 13.6 times denser than water, so a mercury manometer would read ' + hStr(h / 13.6) + ' here, which is why an instrument for air speeds is filled with it.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
