/* Figures for section 13.5 Phase Changes. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, cycle, register, begin, line, arrow, dot, text, topline, axes, nice, pinned, labeller, REDUCED } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const R_GAS = 8.314, ATM = 101325, K_B = 1.38e-23, N_A = 6.02e23;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific form, three figures: for a headline "1.01 × 10⁵", for TeX "1.01\times10^{5}" */
function parts(x, d = 3) { let e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e); if (+m.toFixed(d - 1) >= 10) { m /= 10; e += 1; } return { m: m.toFixed(d - 1), e }; }
const sci = (x, d = 3) => { if (x === 0) return '0'; const p = parts(x, d); return p.m + ' × 10' + sup(p.e); };
const sciTex = (x, d = 3) => { if (x === 0) return '0'; const p = parts(x, d); return p.m + '\\times10^{' + p.e + '}'; };
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') ? String(Math.round(Number(s))) : s); };
const neg = (s) => s.replace('-', '−');
/* a slider's range and value changed after it is made, when the substance it serves changes */
function lastInput(controls) { return controls.lastElementChild.querySelector('input'); }
function rerange(inp, min, max, step, value) { inp.min = String(min); inp.max = String(max); inp.step = String(step); inp.value = String(value); inp.dispatchEvent(new Event('input', { bubbles: true })); }
/* a small linear congruential generator, so a scattering of molecules is the same on every draw */
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
/* the vapor pressure of water in atm, a smooth curve through the triple point, the normal boiling point and
   the critical point (Tables 13.3 and 13.4); it reproduces Table 13.5 of 13.6 to within half a percent up to 120 °C */
function vapFit(T3, P3, Tb, Tc, Pc) {
  if (Tb == null) { const b = -Math.log(Pc / P3) / (1 / Tc - 1 / T3); return { a: Math.log(P3) - b / T3, b, c: 0 }; }
  const x1 = 1 / T3, x2 = 1 / Tb, x3 = 1 / Tc, y1 = Math.log(P3), y2 = 0, y3 = Math.log(Pc);
  /* the parabola through three points in (1/T, ln P) */
  const c = ((y3 - y1) / (x3 - x1) - (y2 - y1) / (x2 - x1)) / (x3 - x2);
  const b = (y2 - y1) / (x2 - x1) - c * (x1 + x2);
  return { a: y1 - b * x1 - c * x1 * x1, b, c };
}
const vapAt = (f, T) => Math.exp(f.a + f.b / T + f.c / (T * T));
/* the temperature at which the fitted curve reaches the pressure P, in K */
function vapT(f, P) {
  const y = Math.log(P) - f.a;
  if (!f.c) return 1 / (y / f.b);
  const disc = f.b * f.b + 4 * f.c * y, r1 = (-f.b + Math.sqrt(Math.max(0, disc))) / (2 * f.c), r2 = (-f.b - Math.sqrt(Math.max(0, disc))) / (2 * f.c);
  const x = r1 > 0 && r1 < 0.2 ? r1 : r2; return 1 / x;
}
const WATER_VAP = vapFit(273.16, 0.00600, 373.15, 647.4, 219.0);
/* a water molecule at (x, y): an oxygen with its two hydrogens, in the element palette */
function water(ctx, x, y, r, tilt = 0) {
  const a1 = tilt - 0.91, a2 = tilt + 0.91, hr = r * 0.55, hd = r * 0.95;
  ctx.save(); ctx.fillStyle = F.el('H'); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(x + hd * Math.sin(a1), y - hd * Math.cos(a1), hr, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x + hd * Math.sin(a2), y - hd * Math.cos(a2), hr, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.fillStyle = F.el('O'); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.restore();
}
/* a diatomic molecule at (x, y): two atoms of one element side by side */
function diatomic(ctx, x, y, r, sym, tilt = 0) {
  const dx = r * 0.85 * Math.cos(tilt), dy = r * 0.85 * Math.sin(tilt);
  ctx.save(); ctx.fillStyle = F.el(sym); ctx.beginPath(); ctx.arc(x - dx, y - dy, r, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, TAU); ctx.fill(); ctx.restore();
}
/* a pressure gauge: a dial at (cx, cy) whose needle sits at frac of full scale, in ink */
function gauge(ctx, cx, cy, r, frac) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill(); ctx.stroke();
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  for (let i = 0; i <= 8; i++) { const a = a0 + ((a1 - a0) * i) / 8, l = i % 4 === 0 ? 10 : 6; line(ctx, cx + (r - 4) * Math.cos(a), cy + (r - 4) * Math.sin(a), cx + (r - 4 - l) * Math.cos(a), cy + (r - 4 - l) * Math.sin(a), PAL.ink, 2); }
  const a = a0 + (a1 - a0) * Math.min(1, Math.max(0, frac));
  line(ctx, cx, cy, cx + (r - 12) * Math.cos(a), cy + (r - 12) * Math.sin(a), PAL.ink, 3); dot(ctx, cx, cy, PAL.ink, true, 4); ctx.restore();
}
/* a thermometer standing at x from yTop to the bulb at yBulb, its column at frac of the tube, in ink */
function thermometer(ctx, x, yTop, yBulb, frac) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x - 8, yTop); ctx.lineTo(x - 8, yBulb - 14); ctx.arc(x, yBulb, 16, Math.PI * 1.2, Math.PI * 1.8, true); ctx.lineTo(x + 8, yTop); ctx.arc(x, yTop, 8, 0, Math.PI, true); ctx.closePath(); ctx.fill(); ctx.stroke();
  for (let i = 1; i < 10; i++) { const y = yBulb - 24 - ((yBulb - 24 - yTop - 10) * i) / 10; line(ctx, x + 8, y, x + 14, y, PAL.ink, 2); }
  const top = yBulb - 24 - (yBulb - 24 - yTop - 10) * Math.min(1, Math.max(0, frac));
  line(ctx, x, yBulb, x, top, PAL.ink, 6); dot(ctx, x, yBulb, PAL.ink, true, 11); ctx.restore();
}

/* =====================================================================
   FIGURE 13.27: one mole at 1.00 atm, its volume against its temperature.
   The ideal line V = NkT/P is the same for every gas; the substance sets
   where the curve leaves it. Still: the graph answers its controls.
   Axes fixed: −300 to 150 °C, 0 to 40 L. The liquid and solid volumes are
   drawn 100 times larger than scale and labelled so.
===================================================================== */
(function () {
  const d = sim('sim-real-gas-volume', 620);
  /* boiling and melting points at 1 atm in °C, and the volume of one mole of the liquid and the solid in litres */
  const SUBS = [
    { value: 'N2', label: 'Nitrogen', name: 'nitrogen', boil: -195.8, melt: -210.0, vliq: 0.0347, vsol: 0.0273 },
    { value: 'O2', label: 'Oxygen', name: 'oxygen', boil: -183.0, melt: -218.8, vliq: 0.0280, vsol: 0.0224 },
    { value: 'CO2', label: 'Carbon dioxide', name: 'carbon dioxide', boil: null, melt: -78.5, vliq: null, vsol: 0.0282 },
    { value: 'H2O', label: 'Water', name: 'water', boil: 100, melt: 0, vliq: 0.0188, vsol: 0.0196 },
  ];
  const sub = select(d.controls, { label: '\\text{substance}', options: SUBS.map((s) => ({ value: s.value, label: s.label })), value: 'N2', aria: 'the substance' });
  const T = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -273, max: 150, step: 1, value: 20, unit: '°C', dec: 0, aria: 'temperature' });
  const X100 = 100;                                  /* the factor the condensed volumes are drawn at */
  const ideal = (tc) => (R_GAS * (tc + 273.15)) / ATM * 1000;   /* litres of one mole at 1 atm */
  function draw() {
    const { ctx, H } = begin(d.c);
    const S = SUBS.find((s) => s.value === sub.value), tc = T.v, tk = tc + 273.15;
    const tCond = S.boil ?? S.melt;                  /* where the gas leaves the ideal line */
    const box = { l: 150, r: 1320, t: 120, b: 520 };
    const { X, Y } = axes(ctx, box, [-300, 150], [0, 40], { xl: 'Temperature T (°C)', xc: C('temperature'), yl: 'Volume V (L)', nx: 9, ny: 4, fx: (v) => (v === -300 || Math.abs(v) % 100 > 1 ? '' : neg(fmt(v, 0))), fy: (v) => fmt(v, 0) });
    line(ctx, X(-273.15), box.b - 8, X(-273.15), box.b + 8, PAL.muted, 2);
    text(ctx, '−273.15', X(-273.15), box.b + 26, PAL.muted, { size: 17, align: 'center' });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l - 3, box.t - 3, box.r - box.l + 6, box.b - box.t + 6); ctx.clip();
    /* the ideal line, dashed where the substance is no longer a gas */
    line(ctx, X(-273.15), Y(0), X(tCond), Y(ideal(tCond)), PAL.muted, 3, [10, 10]);
    line(ctx, X(tCond), Y(ideal(tCond)), X(150), Y(ideal(150)), PAL.ink, 5);
    /* the condensed part, drawn ×100 */
    const yLiq = S.vliq ? Y(S.vliq * X100) : null, ySol = Y(S.vsol * X100);
    if (S.boil != null) {
      line(ctx, X(S.boil), Y(ideal(S.boil)), X(S.boil), yLiq, PAL.ink, 5);
      line(ctx, X(S.boil), yLiq, X(S.melt), yLiq, PAL.ink, 5);
      line(ctx, X(S.melt), yLiq, X(S.melt), ySol, PAL.ink, 5);
    } else line(ctx, X(S.melt), Y(ideal(S.melt)), X(S.melt), ySol, PAL.ink, 5);
    line(ctx, X(S.melt), ySol, X(-273.15), ySol, PAL.ink, 5);
    ctx.restore();
    /* labels beside the pieces of the curve */
    const L = labeller(ctx, H); L.block(0, 0, 1400, 92);
    L.add('ideal gas line', X(80), Y(ideal(80)), -0.5, -1, PAL.ink, 20);
    const side = tCond > -60 ? -1 : 1;
    if (S.boil != null) {
      L.add('condenses to a liquid, drawn ×' + X100, X(S.boil), (Y(ideal(S.boil)) + yLiq) / 2, side, 0, PAL.ink, 20);
      L.add('freezes to a solid', X(S.melt), (yLiq + ySol) / 2 - 14, -1, 0.3, PAL.ink, 20);
    } else L.add('goes straight to a solid, drawn ×' + X100, X(S.melt), (Y(ideal(S.melt)) + ySol) / 2, side, 0, PAL.ink, 20);
    L.add('solid, drawn ×' + X100, X((S.melt - 273.15) / 2), ySol, 0, -1, PAL.ink, 17);
    /* the state at the temperature set */
    const phase = tc > tCond ? 'gas' : S.boil != null && tc > S.melt ? 'liquid' : 'solid';
    const vTrue = phase === 'gas' ? ideal(tc) : phase === 'liquid' ? S.vliq : S.vsol;
    const yPt = phase === 'gas' ? Y(vTrue) : Y(vTrue * X100);
    line(ctx, X(tc), box.b, X(tc), yPt, C('temperature'), 3, [4, 8]);
    dot(ctx, X(tc), yPt, PAL.ink, true, 10);
    if (box.b - yPt > 90) L.add('T = ' + neg(fmt(tc, 0)) + ' °C', X(tc), (box.b + yPt) / 2 + 30, tc > 60 ? -1 : 1, 0, C('temperature'), 20);
    else L.add('T = ' + neg(fmt(tc, 0)) + ' °C', X(tc), yPt - 14, 0.3, -1, C('temperature'), 20);
    L.flush();
    const nm = S.name, vI = ideal(tc);
    topline(ctx, phase === 'gas' ? 'At ' + neg(fmt(tc, 0)) + ' °C one mole of ' + nm + ' is a gas on the ideal line, filling ' + fmt(vI, 1) + ' L at 1.00 atm.'
      : phase === 'liquid' ? 'At ' + neg(fmt(tc, 0)) + ' °C ' + nm + ' is a liquid: one mole fills ' + fmt(vTrue, 3) + ' L, not the ' + fmt(vI, 1) + ' L the ideal line would give.'
      : 'At ' + neg(fmt(tc, 0)) + ' °C ' + nm + ' is a solid, and one mole fills ' + fmt(vTrue, 3) + ' L; the volume never reaches zero.');
    if (phase === 'gas') readout(d.readout, `V = \\frac{Nk\\kTemp}{\\kPr} = \\frac{(${sciTex(N_A)})(${sciTex(K_B)}\\ \\text{J/K})(${fmt(tk, 0)}\\ \\text{K})}{${sciTex(ATM)}\\ \\text{Pa}} = ${fmt(vI, 1)}\\ \\text{L}`,
      'One mole at 1.00 atm follows the same straight line whatever the gas, and that line would reach zero volume at −273.15 °C, absolute zero.');
    else readout(d.readout, `V = ${fmt(vTrue, 3)}\\ \\text{L},\\qquad \\frac{Nk\\kTemp}{\\kPr} = ${fmt(vI, 1)}\\ \\text{L}`,
      vI / vTrue >= 3 ? 'One mole of ' + (phase === 'liquid' ? 'liquid ' : 'solid ') + nm + ' fills ' + Math.round(vI / vTrue) + ' times less than the ideal line would give; the liquid and the solid are drawn ' + X100 + ' times larger than the scale of the graph.'
        : 'One mole of solid ' + nm + ' keeps its ' + fmt(vTrue, 3) + ' L all the way down to absolute zero, where the ideal line reaches zero; the liquid and the solid are drawn ' + X100 + ' times larger than the scale of the graph.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.28: the PV diagram of one mole, a family of isotherms and one
   the reader sets, with the liquid-vapor region under its dome. The
   isotherms are those of the van der Waals model in reduced form, fitted
   to the substance's critical point; the flat parts are placed by the
   equal-area rule. Still: a state is a point. Axes fixed per substance:
   0 to 6 Vc, 0 to 2.5 Pc, in L/mol and MPa.
===================================================================== */
(function () {
  const d = sim('sim-pv-isotherms', 640);
  const SUBS = [
    { value: 'H2O', label: 'Water', name: 'water', Tc: 647.4, Pc: 22.12e6 },
    { value: 'SO2', label: 'Sulfur dioxide', name: 'sulfur dioxide', Tc: 430.7, Pc: 7.88e6 },
    { value: 'NH3', label: 'Ammonia', name: 'ammonia', Tc: 405.5, Pc: 11.28e6 },
    { value: 'CO2', label: 'Carbon dioxide', name: 'carbon dioxide', Tc: 304.2, Pc: 7.39e6 },
    { value: 'O2', label: 'Oxygen', name: 'oxygen', Tc: 154.8, Pc: 5.08e6 },
    { value: 'N2', label: 'Nitrogen', name: 'nitrogen', Tc: 126.2, Pc: 3.39e6 },
    { value: 'H2', label: 'Hydrogen', name: 'hydrogen', Tc: 33.3, Pc: 1.30e6 },
    { value: 'He', label: 'Helium', name: 'helium', Tc: 5.3, Pc: 0.229e6 },
  ];
  const stepOf = (S) => (S.Tc < 50 ? 0.1 : 1);
  const VcOf = (S) => (3 * R_GAS * S.Tc) / (8 * S.Pc) * 1000;   /* the model's critical volume in L/mol */
  const sub = select(d.controls, { label: '\\text{substance}', options: SUBS.map((s) => ({ value: s.value, label: s.label })), value: 'CO2', aria: 'the substance', onInput: () => { const S = SUBS.find((s) => s.value === sub.value), st = stepOf(S), on = (x) => +(Math.round(x / st) * st).toFixed(1), Vc = VcOf(S), onV = (x) => +(Math.round(x / 0.005) * 0.005).toFixed(3); rerange(tIn, on(0.7 * S.Tc), on(1.5 * S.Tc), st, on(0.95 * S.Tc)); rerange(vIn, onV(0.4 * Vc), onV(6 * Vc), 0.005, onV(1.55 * Vc)); } });
  const T = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 213, max: 456, step: 1, value: 290, unit: 'K', dec: 1, aria: 'temperature of the isotherm' });
  const tIn = lastInput(d.controls);
  const V = ctl(d.controls, { label: 'V', cls: '', min: 0.05, max: 0.77, step: 0.005, value: 0.2, unit: 'L/mol', dec: 3, aria: 'volume of one mole' });
  const vIn = lastInput(d.controls);
  /* the reduced model: p in units of Pc, v of Vc, t of Tc */
  const p = (v, t) => (8 * t) / (3 * v - 1) - 3 / (v * v);
  const G = (v, t) => ((8 * t) / 3) * Math.log(3 * v - 1) + 3 / v;   /* ∫ p dv */
  const bisect = (f, lo, hi) => { for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (f(m) > 0) lo = m; else hi = m; } return (lo + hi) / 2; };
  /* the flat part of an isotherm below the critical temperature: its pressure and its two ends */
  function sat(t) {
    if (t >= 1) return null;
    let vmin = 0.34, vmax = 1, best = Infinity;
    for (let v = 0.34; v < 1; v += 0.002) { const q = p(v, t); if (q < best) { best = q; vmin = v; } }
    best = -Infinity; for (let v = 1; v < 12; v += 0.005) { const q = p(v, t); if (q > best) { best = q; vmax = v; } }
    const pLo = Math.max(1e-6, p(vmin, t)), pHi = p(vmax, t);
    const roots = (ps) => ({ vl: bisect((v) => p(v, t) - ps, 1 / 3 + 1e-6, vmin), vg: bisect((v) => p(v, t) - ps, vmax, 1e4) });
    const area = (ps) => { const { vl, vg } = roots(ps); return G(vg, t) - G(vl, t) - ps * (vg - vl); };
    const ps = bisect(area, pLo, pHi);
    return { ps, ...roots(ps) };
  }
  /* the dome, universal in reduced units, computed once */
  const DOME = []; for (let t = 0.55; t < 0.9995; t += 0.0075) { const s = sat(t); DOME.push({ t, ...s }); }
  const FAMILY = [0.8, 0.9, 1.0, 1.1, 1.25, 1.45];
  function draw() {
    const { ctx, H } = begin(d.c);
    const S = SUBS.find((s) => s.value === sub.value), Vc = VcOf(S);
    const t = T.v / S.Tc, v = Math.max(0.34, V.v / Vc), s = sat(t);
    const box = { l: 170, r: 1330, t: 110, b: 520 };
    /* the axes in L/mol and MPa, rounded to ticks from 6 Vc and 2.5 Pc; the model's reduced coordinates are scaled into them */
    const rx = nice(0, 6 * Vc, 4), ry = nice(0, (2.5 * S.Pc) / 1e6, 5), dx = (rx.hi - rx.lo) / rx.n, dy = (ry.hi - ry.lo) / ry.n;
    const A = axes(ctx, box, [0, rx.hi], [0, ry.hi], { xl: 'Volume V (L/mol)', yl: 'Pressure P (MPa)', yc: C('pressure'), nx: rx.n, ny: ry.n, fx: (q) => fmt(q, dx < 0.1 ? 2 : 1), fy: (q) => fmt(q, dy < 1 ? 1 : 0) });
    const X = (v) => A.X(v * Vc), Y = (pr) => A.Y((pr * S.Pc) / 1e6), VMAX = rx.hi / Vc, PMAX = (ry.hi * 1e6) / S.Pc;
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    /* the liquid-vapor region under its dome */
    ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(X(DOME[0].vl), Y(DOME[0].ps));
    DOME.forEach((q) => ctx.lineTo(X(q.vl), Y(q.ps))); ctx.lineTo(X(1), Y(1));
    DOME.slice().reverse().forEach((q) => ctx.lineTo(X(q.vg), Y(q.ps))); ctx.lineTo(X(DOME[0].vg), Y(0)); ctx.lineTo(X(DOME[0].vl), Y(0)); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X(DOME[0].vl), Y(DOME[0].ps)); DOME.forEach((q) => ctx.lineTo(X(q.vl), Y(q.ps))); ctx.lineTo(X(1), Y(1)); DOME.slice().reverse().forEach((q) => ctx.lineTo(X(q.vg), Y(q.ps))); ctx.stroke();
    /* the family, the critical isotherm in ink */
    const iso = (tt, color, w) => {
      const ss = sat(tt); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i <= 240; i++) { const vv = 0.34 + ((VMAX - 0.3) * i) / 240; const pp = ss && vv > ss.vl && vv < ss.vg ? ss.ps : p(vv, tt); if (i) ctx.lineTo(X(vv), Y(pp)); else ctx.moveTo(X(vv), Y(pp)); }
      ctx.stroke();
    };
    FAMILY.forEach((tt) => iso(tt, tt === 1 ? PAL.ink : PAL.rule, tt === 1 ? 3 : 2.5));
    iso(t, C('pressure'), 5);
    ctx.restore();
    /* labels */
    const L = labeller(ctx, H); L.block(0, 0, 1400, 92); L.block(0, box.b, 1400, H);
    text(ctx, 'Liquid', X(0.47), Y(1.75), PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'Liquid and vapor', X(1.25), Y(0.32), PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'Vapor', X(3.6), Y(0.3), PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'Gas', X(VMAX * 0.78), Y(PMAX * 0.78), PAL.ink, { size: 20, weight: 600, align: 'center' });
    L.add('critical point', X(1), Y(1), -0.4, -1, PAL.ink, 18, 28);
    dot(ctx, X(1), Y(1), PAL.ink, true, 8);
    L.add('T_c = ' + fmt(S.Tc, 1) + ' K', X(VMAX * 0.98), Y(p(VMAX * 0.98, 1)), -0.2, 1, C('temperature'), 20, 24);
    const vEnd = VMAX * 0.93, pEnd = s && vEnd > s.vl && vEnd < s.vg ? s.ps : p(vEnd, t);
    L.add('T = ' + fmt(T.v, S.Tc < 50 ? 1 : 0) + ' K', X(vEnd), Y(pEnd), -0.3, -1, C('temperature'), 20, 24);
    /* the state at V on this isotherm */
    const inFlat = !!s && v > s.vl && v < s.vg, pp = inFlat ? s.ps : p(v, t);
    const P_Pa = pp * S.Pc, V_L = v * Vc, PV = (P_Pa * V_L) / 1000 / 1000, RT = (R_GAS * T.v) / 1000;   /* kJ */
    const pt = pinned(ctx, box, X, Y, v, pp, C('pressure'), 'P = ' + fmt(P_Pa / 1e6, 1) + ' MPa');
    if (!pt.out) {
      line(ctx, box.l, pt.y, pt.x, pt.y, C('pressure'), 2.5, [4, 8]); line(ctx, pt.x, box.b, pt.x, pt.y, PAL.ink, 2.5, [4, 8]);
      L.add('V = ' + fmt(V_L, 3) + ' L', pt.x, (box.b + pt.y) / 2, v > VMAX * 0.7 ? -1 : 1, 0, PAL.ink, 18);
    }
    L.flush();
    const nm = S.name, tS = fmt(T.v, S.Tc < 50 ? 1 : 0) + ' K', pS = fmt(P_Pa / 1e6, S.Pc < 1e6 ? 2 : 1) + ' MPa';
    const state = t >= 1 ? 'gas' : inFlat ? 'flat' : v <= (s ? s.vl : 1) ? 'liquid' : 'vapor';
    topline(ctx, state === 'gas' ? 'At ' + tS + ', above the critical temperature of ' + fmt(S.Tc, 1) + ' K, the isotherm of ' + nm + ' has no flat part: no pressure liquefies it.'
      : state === 'flat' ? 'At ' + tS + ' ' + nm + ' condenses along the flat part of its isotherm, where liquid and vapor coexist at ' + pS + '.'
      : state === 'liquid' ? 'At ' + tS + ' and ' + fmt(V_L, 3) + ' L/mol ' + nm + ' is a liquid, and its volume barely changes as the pressure climbs.'
      : 'At ' + tS + ' and ' + fmt(V_L, 3) + ' L/mol ' + nm + ' is a vapor at ' + pS + ', below its boiling pressure.');
    readout(d.readout, `\\kPr V = (${fmt(P_Pa / 1e6, S.Pc < 1e6 ? 2 : 1)}\\ \\text{MPa})(${fmt(V_L, 3)}\\ \\text{L}) = ${fmt(PV, RT < 0.5 ? 3 : 2)}\\ \\text{kJ} = ${fmt(PV / RT, 2)}\\,Nk\\kTemp`,
      state === 'gas' ? 'For one mole NkT is ' + fmt(RT, RT < 0.5 ? 3 : 2) + ' kJ; the fluid is squeezed to the density of a liquid at small volumes and never condenses.'
      : state === 'flat' ? 'For one mole NkT is ' + fmt(RT, RT < 0.5 ? 3 : 2) + ' kJ; between ' + fmt(s.vl * Vc, 3) + ' and ' + fmt(s.vg * Vc, 3) + ' L/mol the pressure stays at ' + pS + ' while liquid turns to vapor.'
      : state === 'liquid' ? 'For one mole NkT is ' + fmt(RT, RT < 0.5 ? 3 : 2) + ' kJ; the isotherm rises almost vertically here, since a liquid is nearly incompressible.'
      : 'For one mole NkT is ' + fmt(RT, RT < 0.5 ? 3 : 2) + ' kJ; an ideal gas would have PV equal to it, and the vapor falls short because its molecules attract one another.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.29: the phase diagram to scale, temperature linear and
   pressure logarithmic, with a state point the reader drags. Still: a
   state is a point and moving it is the reader's choice. Axes fixed per
   substance (the xr of each row, in °C, never above absolute zero),
   pressure 0.0001 to 1000 atm.
===================================================================== */
(function () {
  const H = 660, d = sim('sim-phase-diagram', H);
  /* triple point, critical point (Tables 13.3, 13.4), normal boiling point, the melting curve's slope in K per atm,
     and the sublimation curve's steepness: water's fits the book's −50 °C value, carbon dioxide's passes 1 atm at −78.5 °C */
  const SUBS = [
    { value: 'H2O', label: 'Water', name: 'water', T3: 273.16, P3: 0.00600, Tc: 647.4, Pc: 219.0, Tb: 373.15, slope: -0.0074, Bs: 6123, xr: [-200, 500], nx: 7 },
    { value: 'CO2', label: 'Carbon dioxide', name: 'carbon dioxide', T3: 216.55, P3: 5.11, Tc: 304.2, Pc: 73.2, Tb: null, slope: 0, subPt: [194.65, 1.0], xr: [-100, 50], nx: 6 },
    { value: 'SO2', label: 'Sulfur dioxide', name: 'sulfur dioxide', T3: 197.68, P3: 0.0167, Tc: 430.7, Pc: 78.0, Tb: 263.1, slope: 0, xr: [-150, 200], nx: 7 },
    { value: 'NH3', label: 'Ammonia', name: 'ammonia', T3: 195.40, P3: 0.0600, Tc: 405.5, Pc: 111.7, Tb: 239.8, slope: 0, xr: [-150, 200], nx: 7 },
    { value: 'N2', label: 'Nitrogen', name: 'nitrogen', T3: 63.18, P3: 0.124, Tc: 126.2, Pc: 33.6, Tb: 77.35, slope: 0, xr: [-240, -120], nx: 6 },
    { value: 'O2', label: 'Oxygen', name: 'oxygen', T3: 54.36, P3: 0.00151, Tc: 154.8, Pc: 50.3, Tb: 90.19, slope: 0, xr: [-260, -80], nx: 9 },
    { value: 'H2', label: 'Hydrogen', name: 'hydrogen', T3: 13.84, P3: 0.0697, Tc: 33.3, Pc: 12.9, Tb: 20.28, slope: 0, xr: [-270, -230], nx: 8 },
  ];
  SUBS.forEach((S) => {
    S.vap = S.value === 'H2O' ? WATER_VAP : vapFit(S.T3, S.P3, S.Tb, S.Tc, S.Pc);
    const Bvap = -(S.vap.b + (2 * S.vap.c) / S.T3);
    S.Bs = S.Bs ?? (S.subPt ? Math.log(S.P3 / S.subPt[1]) / (1 / S.subPt[0] - 1 / S.T3) : 1.15 * Bvap);
  });
  const state = { T: 293.15, lp: 0 };   /* the state point: kelvin and log10 of atm */
  const sub = select(d.controls, { label: '\\text{substance}', options: SUBS.map((s) => ({ value: s.value, label: s.label })), value: 'H2O', aria: 'the substance', onInput: () => { const S = SUBS.find((s) => s.value === sub.value); state.T = S.value === 'H2O' || S.value === 'CO2' ? 293.15 : S.Tb - 0.2 * (S.Tc - S.T3); state.lp = 0; } });
  const box = { l: 170, r: 1330, t: 110, b: 540 }, YR = [-4, 3], OFF = 4;   /* the axis is drawn as log10 P + 4 so that no zero line lands on 1 atm */
  const subP = (S, T) => S.P3 * Math.exp(-S.Bs * (1 / T - 1 / S.T3));            /* sublimation curve, atm */
  const subT = (S, P) => 1 / (1 / S.T3 + Math.log(S.P3 / P) / S.Bs);
  const meltT = (S, P) => S.T3 + S.slope * (P - S.P3);
  const cur = () => SUBS.find((s) => s.value === sub.value);
  const XS = (S) => (T) => box.l + ((T - 273.15 - S.xr[0]) / (S.xr[1] - S.xr[0])) * (box.r - box.l);
  const YS = (lp) => box.b - ((lp - YR[0]) / (YR[1] - YR[0])) * (box.b - box.t);
  const clampT = (S, T) => Math.min(S.xr[1] + 273.15, Math.max(S.xr[0] + 273.15, T));
  const clampP = (lp) => Math.min(YR[1], Math.max(YR[0], lp));
  const touched = () => d.fig.dispatchEvent(new Event('input', { bubbles: true }));
  /* the pointer sets the point; the arrow keys nudge it */
  const c = d.c; c.style.touchAction = 'none'; c.style.cursor = 'crosshair'; c.tabIndex = 0;
  c.setAttribute('aria-label', 'the state point on the phase diagram; drag it, or move it with the arrow keys');
  let dragging = false;
  const place = (e) => {
    const S = cur(), rect = c.getBoundingClientRect(), lx = ((e.clientX - rect.left) * 1400) / rect.width, ly = ((e.clientY - rect.top) * H) / rect.height;
    state.T = clampT(S, S.xr[0] + 273.15 + ((lx - box.l) / (box.r - box.l)) * (S.xr[1] - S.xr[0]));
    state.lp = clampP(YR[0] + ((box.b - ly) / (box.b - box.t)) * (YR[1] - YR[0])); touched();
  };
  c.addEventListener('pointerdown', (e) => { dragging = true; c.setPointerCapture(e.pointerId); place(e); e.preventDefault(); });
  c.addEventListener('pointermove', (e) => { if (dragging) place(e); });
  c.addEventListener('pointerup', () => { dragging = false; }); c.addEventListener('pointercancel', () => { dragging = false; });
  c.addEventListener('keydown', (e) => {
    const S = cur(), big = e.shiftKey, dT = big ? 10 : 1, dP = big ? 0.5 : 0.05;
    if (e.key === 'ArrowLeft') state.T = clampT(S, state.T - dT); else if (e.key === 'ArrowRight') state.T = clampT(S, state.T + dT);
    else if (e.key === 'ArrowUp') state.lp = clampP(state.lp + dP); else if (e.key === 'ArrowDown') state.lp = clampP(state.lp - dP); else return;
    e.preventDefault(); touched();
  });
  const fmtP = (P) => (P >= 100 ? fmt(P, 0) : P >= 10 ? fmt(P, 1) : P >= 1 ? fmt(P, 2) : P >= 0.1 ? fmt(P, 3) : sci(P));
  const fmtPTex = (P) => (P >= 0.1 ? fmtP(P) : sciTex(P));
  const degC = (T, dec = 1) => neg(fmt(T - 273.15, dec)) + ' °C';
  function draw() {
    const { ctx } = begin(d.c);
    const S = cur(), X = XS(S), Y = YS, T = state.T, P = Math.pow(10, state.lp);
    axes(ctx, box, [S.xr[0], S.xr[1]], [YR[0] + OFF, YR[1] + OFF], { xl: 'Temperature T (°C)', xc: C('temperature'), yl: 'Pressure P (atm)', yc: C('pressure'), nx: S.nx, ny: 7, fx: (q) => neg(fmt(q, 0)), fy: (q) => { const e = Math.round(q - OFF); return e >= 0 ? fmt(Math.pow(10, e), 0) : Math.pow(10, e).toFixed(-e); } });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    /* the three curves */
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); for (let i = 0; i <= 120; i++) { const t = S.T3 + ((S.Tc - S.T3) * i) / 120, lp = Math.log10(vapAt(S.vap, t)); if (i) ctx.lineTo(X(t), Y(lp)); else ctx.moveTo(X(t), Y(lp)); } ctx.stroke();
    const tLow = Math.max(S.xr[0] + 273.15, subT(S, Math.pow(10, YR[0])));
    ctx.beginPath(); for (let i = 0; i <= 80; i++) { const t = tLow + ((S.T3 - tLow) * i) / 80, lp = Math.log10(subP(S, t)); if (i) ctx.lineTo(X(t), Y(lp)); else ctx.moveTo(X(t), Y(lp)); } ctx.stroke();
    ctx.beginPath(); ctx.moveTo(X(S.T3), Y(Math.log10(S.P3))); ctx.lineTo(X(meltT(S, Math.pow(10, YR[1]))), Y(YR[1])); ctx.stroke();
    ctx.restore();
    /* region names, the two named points and the state point */
    const L = labeller(ctx, H); L.block(0, 0, 1400, 92); L.block(0, box.b, 1400, H);
    const span = S.Tc - S.T3;
    text(ctx, 'solid', X(S.T3 - 0.2 * span), Y(1.2), PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'liquid', X(S.T3 + 0.3 * span), Y(Math.max(1.6, Math.log10(vapAt(S.vap, S.T3 + 0.3 * span)) + 1.4)), PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'vapor', X(S.T3 + 0.55 * span), Y(Math.min(-2.2, Math.log10(vapAt(S.vap, S.T3 + 0.55 * span)) - 1.6)), PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'gas', X(S.Tc + 0.12 * span), Y(0.2), PAL.ink, { size: 20, weight: 600, align: 'center' });
    dot(ctx, X(S.T3), Y(Math.log10(S.P3)), PAL.ink, true, 8); L.add('triple point', X(S.T3), Y(Math.log10(S.P3)), 0.7, 0.7, PAL.ink, 18, 26);
    dot(ctx, X(S.Tc), Y(Math.log10(S.Pc)), PAL.ink, true, 8); L.add('critical point', X(S.Tc), Y(Math.log10(S.Pc)), -0.7, -0.7, PAL.ink, 18, 26);
    const px = X(T), py = Y(state.lp);
    line(ctx, px, box.b, px, py, C('temperature'), 2.5, [4, 8]); line(ctx, box.l, py, px, py, C('pressure'), 2.5, [4, 8]);
    dot(ctx, px, py, PAL.ink, true, 10); dot(ctx, px, py, PAL.panel, true, 4);
    L.add('T = ' + degC(T), px, (box.b + py) / 2, T - 273.15 > (S.xr[0] + S.xr[1]) / 2 ? -1 : 1, 0, C('temperature'), 18);
    L.add('P = ' + fmtP(P) + ' atm', (box.l + px) / 2, py, 0, -1, C('pressure'), 18);
    L.flush();
    /* which phase, and where the boundaries lie at this pressure */
    const Tb = P <= S.Pc ? vapT(S.vap, P) : null, Tm = meltT(S, P), Ts = subT(S, P), nm = S.name;
    const tol = 0.012 * span;
    let phase, small;
    if (P < S.P3) {
      phase = Math.abs(T - Ts) < tol ? 'on the sublimation curve, where solid and vapor coexist' : T < Ts ? 'a solid' : 'a vapor';
      small = 'Below the triple point pressure there is no liquid: at ' + fmtP(P) + ' atm ' + nm + ' sublimates at ' + degC(Ts) + ', from solid straight to vapor.';
    } else if (T > S.Tc || (Tb == null && T > Tm)) {
      phase = T > S.Tc ? 'a gas' : 'a liquid';
      small = T > S.Tc ? 'Above the critical temperature of ' + degC(S.Tc) + ' the liquid phase does not exist at any pressure, so ' + nm + ' cannot be liquefied here however hard it is compressed.'
        : 'Above the critical pressure of ' + fmtP(S.Pc) + ' atm the liquid never boils; warmed past ' + degC(S.Tc) + ' it becomes a gas without a phase change. It melts at ' + degC(Tm) + '.';
    } else {
      const onB = Tb != null && Math.abs(T - Tb) < tol, onM = Math.abs(T - Tm) < tol;
      phase = onB ? 'on the boiling curve, where liquid and vapor coexist' : onM ? 'on the melting curve, where solid and liquid coexist' : T < Tm ? 'a solid' : T < Tb ? 'a liquid' : 'a vapor';
      small = 'At ' + fmtP(P) + ' atm ' + nm + ' melts at ' + degC(Tm, S.slope ? 2 : 1) + ' and boils at ' + degC(Tb) + (S.slope ? '; the melting temperature falls by ' + fmt(-S.slope, 4) + ' °C for every atmosphere of pressure.' : '; its melting curve is drawn vertical, since it leans by less than can be seen at this scale.');
    }
    topline(ctx, 'At ' + degC(T) + ' and ' + fmtP(P) + ' atm ' + nm + ' is ' + phase + '.');
    readout(d.readout, `\\kTemp = ${fmt(T, 0)}\\ \\text{K} = ${neg(fmt(T - 273.15, 1))}\\ ^\\circ\\text{C},\\qquad \\kPr = ${fmtPTex(P)}\\ \\text{atm}`, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.30: water and its vapor in a closed container. Molecules
   leave the surface at a rate the temperature sets and return when they
   strike it; the vapor settles where the two rates match. Moving, on an
   endless cycle: the rate is the clock. The vapor pressure is the book's
   own (Table 13.5 of 13.6); the count drawn is 40 molecules at 100 °C and
   follows P/T, as the ideal gas law says a density does.
===================================================================== */
(function () {
  const H = 660, d = sim('sim-liquid-vapor-equilibrium', H);
  const T = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 50, max: 150, step: 1, value: 100, unit: '°C', dec: 0, onInput: retune, aria: 'temperature' });
  const cy = cycle(() => Infinity, 0);
  const B = { l: 334, r: 1066, t: 164, b: 596, s: 440 };   /* the container: walls, and the liquid surface at s */
  const RM = 7, SPEED100 = 240, N100 = 40, WINDOW = 2;     /* molecule radius, speed at 100 °C, vapor count at 100 °C, the counting window in s */
  const rnd = rng(13);
  const Pvap = (tc) => vapAt(WATER_VAP, tc + 273.15) * ATM;                    /* Pa */
  const speed = (tc) => SPEED100 * Math.sqrt((tc + 273.15) / 373.15);
  const nEq = (tc) => (N100 * Pvap(tc)) / Pvap(100) * (373.15 / (tc + 273.15));
  const rate = (tc) => (nEq(tc) * (2 / Math.PI) * speed(tc)) / (2 * (B.s - B.t));   /* emissions per second that hold that count */
  let vapor = [], left = [], back = [], clock = 0, lastTau = 0, carry = 0;
  const jitter = Array.from({ length: 400 }, () => ({ a: rnd() * TAU, b: rnd() * TAU }));
  function seed() {
    const n = Math.round(nEq(T.v)), s = speed(T.v); vapor = [];
    for (let i = 0; i < n; i++) { const a = rnd() * TAU; vapor.push({ x: B.l + RM + rnd() * (B.r - B.l - 2 * RM), y: B.t + RM + rnd() * (B.s - B.t - 2 * RM), vx: s * Math.cos(a), vy: s * Math.sin(a) }); }
    left = []; back = []; carry = 0;
  }
  function retune() { const s = speed(T.v); vapor.forEach((m) => { const q = Math.hypot(m.vx, m.vy) || 1; m.vx *= s / q; m.vy *= s / q; }); if (REDUCED) seed(); }
  seed();
  function step(dt) {
    const tc = T.v, s = speed(tc);
    /* emission: a Poisson stream at the rate the temperature sets */
    carry += rate(tc) * dt; const n = Math.floor(carry); carry -= n;
    for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + (rnd() - 0.5) * 2.2; vapor.push({ x: B.l + RM + rnd() * (B.r - B.l - 2 * RM), y: B.s - RM - 1, vx: s * Math.cos(a), vy: s * Math.sin(a) }); left.push(clock); }
    /* flight, walls, and return to the liquid */
    vapor = vapor.filter((m) => {
      m.x += m.vx * dt; m.y += m.vy * dt;
      if (m.x < B.l + RM) { m.x = B.l + RM; m.vx = Math.abs(m.vx); } if (m.x > B.r - RM) { m.x = B.r - RM; m.vx = -Math.abs(m.vx); }
      if (m.y < B.t + RM) { m.y = B.t + RM; m.vy = Math.abs(m.vy); }
      if (m.y > B.s - RM) { back.push(clock); return false; }
      return true;
    });
    left = left.filter((t) => clock - t < WINDOW); back = back.filter((t) => clock - t < WINDOW);
  }
  function update(dt) { cy.step(dt, () => 1); const tau = cy.now(); if (tau < lastTau) seed(); lastTau = tau; clock += dt; step(dt); }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = T.v, tk = tc + 273.15, P = Pvap(tc), now = isFinite(cy.now()) ? clock : 0;
    /* the container and its liquid */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(B.l, B.s, B.r - B.l, B.b - B.s); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(B.l, B.t, B.r - B.l, B.b - B.t); ctx.restore();
    line(ctx, B.l, B.s, B.r, B.s, PAL.muted, 2);
    /* the liquid: packed molecules that jiggle in place */
    const amp = 1.2 + 1.6 * ((tc - 50) / 100);
    let k = 0;
    for (let row = 0; row < 8; row++) for (let col = 0; col < 40; col++, k++) {
      const j = jitter[k % jitter.length], x = B.l + 14 + col * 18 + (row % 2) * 9, y = B.s + 12 + row * 18;
      if (x > B.r - 12) continue;
      water(ctx, x + amp * Math.sin(now * 2.1 + j.a), y + amp * Math.sin(now * 1.7 + j.b), 6, j.a);
    }
    /* the vapor */
    vapor.forEach((m) => water(ctx, m.x, m.y, RM, Math.atan2(m.vy, m.vx)));
    /* the instruments: the gauge on the lid, the thermometer in the liquid */
    line(ctx, 700, B.t, 700, B.t - 8, PAL.ink, 4); gauge(ctx, 700, 122, 34, P / (5 * ATM));
    text(ctx, 'P = ' + sci(P) + ' Pa', 746, 122, C('pressure'), { size: 20, weight: 600 });
    thermometer(ctx, 990, 200, 500, (tc - 30) / 140);
    text(ctx, 'T = ' + fmt(tc, 0) + ' °C', 1086, 200, C('temperature'), { size: 20, weight: 600 });
    /* the two rates, as arrows that grow with the count in the last two seconds */
    const nl = left.length, nb = back.length, len = (n) => 40 + 200 * Math.min(1, n / 100);
    arrow(ctx, 110, B.s + 40, 110, B.s + 40 - len(nl), PAL.ink, 4); arrow(ctx, 250, B.s + 40 - len(nb), 250, B.s + 40, PAL.ink, 4);
    text(ctx, 'vaporization', 110, B.s + 66, PAL.ink, { size: 17, align: 'center' }); text(ctx, 'condensation', 250, B.s + 66, PAL.ink, { size: 17, align: 'center' });
    text(ctx, nl + ' in ' + WINDOW + ' s', 110, B.s + 90, PAL.muted, { size: 17, align: 'center' }); text(ctx, nb + ' in ' + WINDOW + ' s', 250, B.s + 90, PAL.muted, { size: 17, align: 'center' });
    /* the legend */
    water(ctx, 1110, 300, RM, -0.4); text(ctx, 'a water molecule', 1130, 300, PAL.muted, { size: 17 });
    text(ctx, vapor.length + ' in the vapor', 1110, 336, PAL.muted, { size: 17 });
    text(ctx, 'liquid', B.l + 8, B.b - 14, PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.7) }); text(ctx, 'vapor', B.l + 8, B.t + 18, PAL.muted, { size: 17 });
    topline(ctx, 'At ' + fmt(tc, 0) + ' °C the vapor pressure of water is ' + sci(P) + ' Pa and ' + vapor.length + ' molecules are in the vapor; in the last two seconds ' + nl + ' left the liquid and ' + nb + ' returned.');
    readout(d.readout, `\\kPr = ${sciTex(P)}\\ \\text{Pa} = ${fmt(P / ATM, 2)}\\ \\text{atm}\\quad\\text{at}\\quad \\kTemp = ${fmt(tk, 0)}\\ \\text{K}`,
      'When the two counts match, apart from chance, the liquid and its vapor are in equilibrium at this temperature and pressure; raise the temperature and both rates rise together while the vapor grows to its new count.');
  }
  register(d.fig, { update, draw });
})();

/* =====================================================================
   SIM: nitrogen and oxygen share a box of 22.4 L; each makes its own
   pressure and the gauge reads the sum. Still: the box answers its
   sliders. Bars capped at 3.0 × 10⁵ Pa, never rescaled.
===================================================================== */
(function () {
  const H = 560, d = sim('sim-partial-pressures', H);
  const nN = ctl(d.controls, { label: 'n_{\\text{N}_2}', cls: '', min: 0, max: 1, step: 0.001, value: 0.781, unit: 'mol', dec: 3, aria: 'moles of nitrogen' });
  const nO = ctl(d.controls, { label: 'n_{\\text{O}_2}', cls: '', min: 0, max: 1, step: 0.001, value: 0.219, unit: 'mol', dec: 3, aria: 'moles of oxygen' });
  const T = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 200, max: 400, step: 1, value: 273, unit: 'K', dec: 0, aria: 'temperature' });
  const VOL = 0.0224, PER_MOL = 60, PMAX = 3.0e5;
  const B = { l: 120, r: 760, t: 110, b: 520 };
  const rnd = rng(7);
  const spots = (n) => Array.from({ length: n }, () => ({ x: B.l + 16 + rnd() * (B.r - B.l - 32), y: B.t + 16 + rnd() * (B.b - B.t - 32), a: rnd() * Math.PI }));
  const SN = spots(PER_MOL), SO = spots(PER_MOL);
  function bar(ctx, x, w, P, label, color, base, hmax) {
    const h = Math.min(hmax, (P / PMAX) * hmax);
    ctx.save(); ctx.fillStyle = color; ctx.fillRect(x - w / 2, base - h, w, h); ctx.restore();
    text(ctx, sci(P) + ' Pa', x, base - h - 18, color, { size: 17, weight: 600, align: 'center' });
    text(ctx, label, x, base + 26, PAL.ink, { size: 20, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const PN = (nN.v * R_GAS * T.v) / VOL, PO = (nO.v * R_GAS * T.v) / VOL, P = PN + PO;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(B.l, B.t, B.r - B.l, B.b - B.t); ctx.restore();
    SN.slice(0, Math.round(nN.v * PER_MOL)).forEach((s) => diatomic(ctx, s.x, s.y, 6, 'N', s.a));
    SO.slice(0, Math.round(nO.v * PER_MOL)).forEach((s) => diatomic(ctx, s.x, s.y, 6, 'O', s.a));
    text(ctx, '22.4 L', B.l + 10, B.b - 16, PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.8) });
    /* the gauge on the wall */
    line(ctx, B.r, 190, B.r + 30, 190, PAL.ink, 4); gauge(ctx, B.r + 66, 190, 36, P / PMAX);
    text(ctx, 'P = ' + sci(P) + ' Pa', B.r + 66, 250, C('pressure'), { size: 20, weight: 600, align: 'center' });
    /* the bars */
    const base = 470, hmax = 330;
    line(ctx, 960, base, 1360, base, PAL.muted, 2);
    bar(ctx, 1020, 80, PN, 'P_{N₂}', C('pressure'), base, hmax); bar(ctx, 1150, 80, PO, 'P_{O₂}', C('pressure'), base, hmax); bar(ctx, 1290, 80, P, 'P = P_{N₂} + P_{O₂}', C('pressure'), base, hmax);
    /* the legend */
    diatomic(ctx, 976, 108, 6, 'N'); text(ctx, 'a nitrogen molecule', 998, 108, PAL.muted, { size: 17 });
    diatomic(ctx, 976, 138, 6, 'O'); text(ctx, 'an oxygen molecule', 998, 138, PAL.muted, { size: 17 });
    topline(ctx, 'In 22.4 L at ' + fmt(T.v, 0) + ' K, ' + fmt(nN.v, 3) + ' mol of nitrogen makes ' + sci(PN) + ' Pa and ' + fmt(nO.v, 3) + ' mol of oxygen ' + sci(PO) + ' Pa, and the gauge reads their sum, ' + sci(P) + ' Pa.');
    readout(d.readout, `\\kPr = P_{\\text{N}_2} + P_{\\text{O}_2} = ${sciTex(PN)}\\ \\text{Pa} + ${sciTex(PO)}\\ \\text{Pa} = ${sciTex(P)}\\ \\text{Pa}`,
      'Each gas makes its pressure by its own molecules’ collisions with the walls, P = nRT/V for that gas alone, whatever else is in the box; the total is the sum, which is Dalton’s law.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
