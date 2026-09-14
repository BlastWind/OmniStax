/* Figures for section 13.6 Humidity, Evaporation, and Boiling. Boots against the section's text article.
   One figure moves: the exchange of molecules between water and its vapor, where
   equilibrium is two rates becoming equal and no still can show a rate. The
   humidity graph and the bubble in the heated beaker answer their sliders,
   register no cycle and carry no transport. Every number comes from Table 13.5,
   read in a straight line between its rows, which is how the book's key reads
   the dew point of problem 15. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, cycle, begin, line, arrow, dot, text, topline, axes, pinned, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- Table 13.5: temperature in °C, vapor pressure in Pa, saturation vapor density in g/m³ ---------- */
const TABLE = [
  [-50, 4.0, 0.039], [-20, 104, 0.89], [-10, 260, 2.36], [0, 610, 4.84], [5, 868, 6.80], [10, 1190, 9.40], [15, 1690, 12.8],
  [20, 2330, 17.2], [25, 3170, 23.0], [30, 4240, 30.4], [37, 6310, 44.0], [40, 7340, 51.1], [50, 12300, 82.4], [60, 19900, 130],
  [70, 31200, 197], [80, 47300, 294], [90, 70100, 418], [95, 85900, 505], [100, 101000, 598], [120, 199000, 1095],
  [150, 476000, 2430], [200, 1550000, 7090], [220, 2320000, 10200],
];
const ATM = 1.01e5;                                  /* the book's atmosphere, Pa */
/* the value of column k (1 pressure, 2 density) at temperature T, in a straight line between rows */
function tableAt(T, k) {
  if (T <= TABLE[0][0]) return TABLE[0][k]; if (T >= TABLE[TABLE.length - 1][0]) return TABLE[TABLE.length - 1][k];
  for (let i = 1; i < TABLE.length; i++) if (T <= TABLE[i][0]) { const a = TABLE[i - 1], b = TABLE[i]; return a[k] + (b[k] - a[k]) * (T - a[0]) / (b[0] - a[0]); }
  return TABLE[TABLE.length - 1][k];
}
/* the temperature at which column k reaches the value v: the dew point for a density, the boiling point for a pressure */
function tableInv(v, k) {
  if (v <= TABLE[0][k]) return TABLE[0][0]; if (v >= TABLE[TABLE.length - 1][k]) return TABLE[TABLE.length - 1][0];
  for (let i = 1; i < TABLE.length; i++) if (v <= TABLE[i][k]) { const a = TABLE[i - 1], b = TABLE[i]; return a[0] + (b[0] - a[0]) * (v - a[k]) / (b[k] - a[k]); }
  return TABLE[TABLE.length - 1][0];
}
const vapP = (T) => tableAt(T, 1), satD = (T) => tableAt(T, 2);
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sci(v, sig = 3) {
  if (v === 0) return { txt: '0', tex: '0' };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e), ms = m.toFixed(sig - 1);
  if (Math.abs(+ms) >= 10) { e += 1; ms = (m / 10).toFixed(sig - 1); }
  return { txt: ms + ' × 10' + sup(e), tex: ms + '\\times 10^{' + e + '}' };
}
/* a density to three significant figures, as the table prints it */
const dens = (v) => (v >= 100 ? fmt(v, 0) : v >= 10 ? fmt(v, 1) : fmt(v, 2));
const degC = (T, d = 0) => fmt(T, d).replace('-', '−') + ' °C';
/* a small seeded generator, so a run is the same at every scrub position */
function rng(seed) { let s = seed >>> 0 || 1; return { u() { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; } }; }
const TAU = Math.PI * 2;

/* =====================================================================
   FIGURE 13.32: water and its vapor in an open container and in a sealed
   one. Moving: the loop is the five seconds after the lid goes on, during
   which the vapor builds up until molecules return to the surface as fast
   as they leave it; the open container runs the same five seconds as a
   steady stream out of its mouth.
===================================================================== */
(function () {
  const d = sim('sim-evaporation', 620);
  const PERIOD = 5.0;
  let mode = 'sealed';
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 0, max: 100, step: 1, value: 20, unit: '°C', dec: 0, onInput: reset, aria: 'temperature of the water' });
  choice(d.controls, { label: '\\text{container}', options: [{ value: 'open', label: 'Open' }, { value: 'sealed', label: 'Sealed' }], value: mode, aria: 'open or sealed container',
    onInput: (v) => { mode = v; reset(); } });
  const cy = cycle(() => PERIOD, 1.5);
  /* the container in section: walls at XL and XR, the rim at YR, the surface at YS, the bottom at YB; molecules of radius R */
  const XL = 260, XR = 860, YR = 150, YS = 410, YB = 580, R = 7, HS = YS - YR - R;   /* HS: the height a vapor molecule can rise under the lid */
  const GONE = YS - YR + 40;               /* an open container: a molecule this far above the surface has drifted into the room */
  const S0 = 180;                          /* molecular speed at 20 °C, canvas units per second, so a molecule crosses the vapor space in about a second and a half */
  const THMAX = 50 * Math.PI / 180;        /* launch directions within 50° of straight up */
  const PER_DENS = 0.6;                    /* drawn molecules in the vapor space at saturation, per g/m³ */
  /* the model at the set temperature: the speed factor, the equilibrium count and the launch rate that produces it */
  function model() {
    const T = Ts.v, c = Math.sqrt((T + 273.15) / 293.15);
    const meanInvS = Math.log(1.3 / 0.7) / 0.6 / (S0 * c);                                   /* E[1/s] for s uniform in 0.7 to 1.3 times S0 c */
    const meanSec = Math.log(1 / Math.cos(THMAX) + Math.tan(THMAX)) / THMAX;               /* E[1/cos θ] for θ uniform in −θmax to θmax */
    const life = 2 * HS * meanInvS * meanSec;                                              /* the mean time a molecule spends aloft under the lid, s */
    const nEq = PER_DENS * satD(T);
    return { T, c, life, nEq, rate: nEq / life };
  }
  /* the launches of one run: quasi-regular in time so that the count aloft hardly flickers, each with a start, a
     place on the surface, a speed and a direction; scheduled over two periods so that the open container is a
     steady stream and the sealed one has molecules already in flight when the lid goes on at t = 0 */
  let launches = [], m = model(), stale = true;
  function reset() { cy.reset(); stale = true; }
  function schedule() {
    stale = false; m = model();
    const g = rng(0x1336 + Math.round(m.T) * 977 + (mode === 'sealed' ? 1 : 0));
    const n = Math.max(1, Math.round(m.rate * PERIOD)), out = [];
    for (let j = 0; j < n; j++) {
      const t0 = ((j + 0.5 + 0.6 * (g.u() - 0.5)) / n) * PERIOD;
      const s = S0 * m.c * (0.7 + 0.6 * g.u()), th = (2 * g.u() - 1) * THMAX;
      const one = { x0: XL + R + 12 + (XR - XL - 2 * R - 24) * g.u(), vx: s * Math.sin(th), vy: s * Math.cos(th) };
      out.push({ ...one, t0: t0 - PERIOD }); out.push({ ...one, t0 });
    }
    launches = out;
  }
  /* a coordinate bouncing between 0 and L: where a point that has travelled u along a reflecting segment sits, and which way it is going */
  const refl = (u, L) => { const p = ((u % (2 * L)) + 2 * L) % (2 * L); return p <= L ? { x: p, dir: 1 } : { x: 2 * L - p, dir: -1 }; };
  const W = XR - XL - 2 * R;
  /* where a launched molecule is at time t, or null once it has condensed, drifted away, or was already past the lid when it closed */
  function place(q, t) {
    const dt = t - q.t0; if (dt < 0) return null;
    const x0 = q.x0 - XL - R;
    if (mode === 'sealed') {
      if (q.t0 < 0 && q.vy * -q.t0 > HS) return null;                       /* out of the mouth before the lid went on */
      const d = q.vy * dt; if (d >= 2 * HS) return null;                    /* back at the surface: condensed */
      return { x: XL + R + refl(x0 + q.vx * dt, W).x, y: YS - refl(d, HS).x, up: d < HS };
    }
    const h = q.vy * dt; if (h > GONE) return null;
    if (h < YS - YR) return { x: XL + R + refl(x0 + q.vx * dt, W).x, y: YS - h, up: true };
    const tr = (YS - YR) / q.vy, at = refl(x0 + q.vx * tr, W);            /* above the rim there is no wall */
    return { x: XL + R + at.x + at.dir * Math.sign(q.vx) * Math.abs(q.vx) * (dt - tr), y: YS - h, up: true };
  }
  /* the liquid: a staggered lattice that jiggles in place, harder when hotter */
  const LIQ = [];
  for (let row = 0, y = YS + 10; y < YB - 8; row++, y += 17) for (let x = XL + R + 4 + (row % 2) * 10; x < XR - R - 2; x += 20) LIQ.push({ x, y, p: (x * 7 + y * 13) % 97 / 97 * TAU, q: (x * 3 + y * 5) % 89 / 89 * TAU });
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    if (stale) schedule();
    const t = cy.now(), T = m.T, oxy = F.el('O'), tc = C('temperature'), pc = C('pressure'), dc = C('density');
    /* the container */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fillRect(XL, YS, XR - XL, YB - YS); ctx.restore();
    line(ctx, XL, YR - 6, XL, YB, PAL.ink, 4); line(ctx, XR, YR - 6, XR, YB, PAL.ink, 4); line(ctx, XL, YB, XR, YB, PAL.ink, 4);
    line(ctx, XL, YS, XR, YS, alpha(PAL.ink, 0.5), 2);
    if (mode === 'sealed') { ctx.save(); ctx.fillStyle = PAL.ink; ctx.fillRect(XL - 12, YR - 12, XR - XL + 24, 12); ctx.restore(); text(ctx, 'lid', XR + 22, YR - 6, PAL.ink, { size: 20, weight: 600 }); }
    else text(ctx, 'open to the room', XR + 22, YR - 6, PAL.ink, { size: 20, weight: 600 });
    /* the liquid */
    ctx.save(); ctx.fillStyle = oxy;
    for (const q of LIQ) { const a = 2.6 * m.c; ctx.beginPath(); ctx.arc(q.x + a * Math.sin(3.1 * m.c * t + q.p), q.y + a * Math.sin(2.7 * m.c * t + q.q), R - 1, 0, TAU); ctx.fill(); }
    ctx.restore();
    /* the vapor */
    let alive = 0;
    ctx.save(); ctx.fillStyle = oxy;
    for (const q of launches) {
      const p = place(q, t); if (!p) continue; alive++;
      ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, TAU); ctx.fill();
      if (hits.length < 400) hits.push({ x: p.x, y: p.y, r: R + 6, name: p.up ? (mode === 'sealed' ? 'a water molecule in the vapor, rising' : 'a water molecule leaving the water') : 'a water molecule returning to the surface' });
    }
    ctx.restore();
    for (let k = 0; k < 4; k++) hits.push({ x: XL + 75 + k * 150, y: (YS + YB) / 2, r: 84, name: 'liquid water: molecules jiggling in place, the fastest at the surface breaking away' });
    text(ctx, 'liquid', XL + 14, YB - 22, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, 'vapor', XL + 14, YR + 22, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
    /* the two rates as arrows beside the container, and the vapor density as a bar against saturation */
    const share = mode === 'sealed' ? Math.min(1, alive / m.nEq) : 0, pct = Math.round(share * 100);
    const AX = 950, CX = 1110, L = 170;
    arrow(ctx, AX, YS, AX, YS - L, PAL.ink, 4); text(ctx, 'evaporation', AX, YS + 26, PAL.ink, { size: 18, weight: 600, align: 'center' });
    if (share > 0.02) arrow(ctx, CX, YS - L, CX, YS - L + L * share, PAL.ink, 4); else line(ctx, CX - 8, YS - L, CX + 8, YS - L, PAL.ink, 3);
    text(ctx, 'condensation', CX, YS + 26, PAL.ink, { size: 18, weight: 600, align: 'center' });
    text(ctx, mode === 'sealed' ? pct + '% of it' : 'none returns', CX, YS + 50, PAL.muted, { size: 17, align: 'center' });
    const BX = 1230, BW = 56;
    line(ctx, BX, YS, BX, YR, PAL.muted, 2); line(ctx, BX - 10, YR, BX + BW + 10, YR, dc, 3, [10, 10]);
    if (mode === 'sealed') { ctx.save(); ctx.fillStyle = alpha(dc, 0.3); ctx.fillRect(BX, YS - (YS - YR) * share, BW, (YS - YR) * share); ctx.restore(); line(ctx, BX, YS - (YS - YR) * share, BX + BW, YS - (YS - YR) * share, dc, 3); }
    line(ctx, BX, YS, BX + BW, YS, PAL.muted, 2);
    text(ctx, 'vapor density', BX + BW / 2, YS + 26, dc, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'saturation, ' + dens(satD(T)) + ' g/m³', BX + BW / 2, YR - 18, dc, { size: 17, weight: 600, align: 'center' });
    if (mode === 'sealed') text(ctx, dens(satD(T) * share) + ' g/m³', BX + BW + 12, YS - (YS - YR) * share, dc, { size: 17, weight: 600, bg: PAL.panel });
    else text(ctx, 'drifts away', BX + BW / 2, (YS + YR) / 2, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'T = ' + degC(T), XL + 14, YS - 18, tc, { size: 22, weight: 600, bg: PAL.panel });
    /* the words */
    if (mode === 'sealed') topline(ctx, share >= 0.99
      ? `${fmt(t, 1)} s after sealing at ${degC(T)} the vapor has reached saturation, and molecules condense as fast as they evaporate.`
      : `${fmt(t, 1)} s after sealing at ${degC(T)} the vapor is at ${pct}% of saturation, so molecules condense at ${pct}% of the rate they evaporate.`);
    else topline(ctx, `Open at ${degC(T)}: molecules leave the surface at the rate the temperature sets and drift away, so nothing balances the evaporation.`);
    const P = sci(vapP(T));
    readout(d.readout, `{\\kPr}_{\\text{vapor}} = ${P.tex}\\ \\text{Pa},\\qquad {\\krho}_{\\text{sat}} = ${dens(satD(T))}\\ \\text{g/m}^3\\qquad\\text{at } \\kTemp = ${fmt(T, 0)}^\\circ\\text{C}`,
      mode === 'sealed'
        ? `The vapor space holds ${alive} molecules of the ${Math.round(m.nEq)} it holds at saturation. Each drawn molecule stands for the same amount of vapor at every temperature, ${T === 20 ? 'and at 100 °C the space is 35 times as crowded as it is here while the molecules move only 13% faster' : 'so the space is ' + fmt(satD(T) / satD(20), 1) + ' times as crowded as at 20 °C while the molecules move ' + (T > 20 ? 'only ' + fmt((m.c - 1) * 100, 0) + '% faster' : fmt((1 - m.c) * 100, 0) + '% slower') + ' than they do at 20 °C'}.`
        : `Molecules leave the surface at the rate the temperature sets, ${T === 20 ? 'and at 100 °C they leave 35 times as fast while moving only 13% faster' : fmt(satD(T) / satD(20), 1) + ' times the rate at 20 °C, while the molecules move ' + (T > 20 ? 'only ' + fmt((m.c - 1) * 100, 0) + '% faster' : fmt((1 - m.c) * 100, 0) + '% slower') + ' than they do at 20 °C'}. With nothing to send them back, the vapor never builds up and evaporation goes on.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the saturation vapor density of Table 13.5 as a curve, the air as
   a point below it, the humidity as a ratio of heights and the dew point
   where the vapor density meets the curve. Still.
===================================================================== */
(function () {
  const d = sim('sim-humidity', 560);
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -20, max: 40, step: 0.5, value: 25, unit: '°C', dec: 1, aria: 'air temperature' });
  const Rs = ctl(d.controls, { label: '\\krho', cls: 'density', min: 0.5, max: 60, step: 0.1, value: 9.4, unit: 'g/m³', dec: 2, aria: 'vapor density of the air' });
  /* axes fixed at −20 to 40 °C and 0 to 60 g/m³, the range of the humidity problems; a dew point beyond 40 °C is pinned */
  const box = { l: 170, r: 1300, t: 120, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const T = Ts.v, rho = Rs.v, tc = C('temperature'), dc = C('density');
    const rs = satD(T), rh = rho / rs * 100, tdew = tableInv(rho, 2), over = rho > rs;
    const { X, Y } = axes(ctx, box, [-20, 40], [0, 60], { xl: 'T (°C)', xc: tc, yl: 'saturation vapor density (g/m³)', yc: dc, nx: 6, ny: 6, fx: (v) => fmt(v, 0).replace('-', '−') });
    /* the curve through the rows of the table, each row marked */
    const rows = TABLE.filter((r) => r[0] >= -20 && r[0] <= 40);
    ctx.save(); ctx.strokeStyle = dc; ctx.lineWidth = 5; ctx.beginPath();
    rows.forEach((r, i) => (i ? ctx.lineTo(X(r[0]), Y(r[2])) : ctx.moveTo(X(r[0]), Y(r[2])))); ctx.stroke(); ctx.restore();
    rows.forEach((r) => dot(ctx, X(r[0]), Y(r[2]), dc, true, 5));
    text(ctx, 'saturation vapor density, the rows of Table 13.5', X(-19), Y(45), dc, { size: 19, weight: 600 });
    /* the air's state, the saturation point above or below it, and the dew point */
    const px = X(T), py = Y(rho), sy = Y(rs);
    line(ctx, px, py, px, sy, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
    const lab = labeller(ctx, 560); lab.block(0, 0, 1400, 96);
    const dp = pinned(ctx, box, X, Y, tdew, rho, tc);
    if (!dp.out) { line(ctx, dp.x, dp.y, dp.x, box.b, tc, 2.5, [4, 8]); lab.add('dew point ' + degC(tdew, 1), dp.x, dp.y, -0.7, -0.7, tc, 19, 24); }
    else lab.add('dew point ' + degC(tdew, 1) + ', off the graph', dp.x, dp.y, -1, 0.4, tc, 19);
    line(ctx, Math.min(px, dp.x), py, Math.max(px, dp.x), py, tc, 2.5, [10, 10]);
    dot(ctx, px, sy, dc, false, 10); dot(ctx, px, py, dc, true, 10);
    lab.add('ρ_sat = ' + dens(rs) + ' g/m³', px, sy, over ? -0.3 : 0.3, over ? 0.9 : -0.9, dc, 19);
    lab.add('ρ = ' + dens(rho) + ' g/m³', px, py, 0.9, 0.5, dc, 19);
    lab.add(over ? dens(rho - rs) + ' g/m³ condenses' : fmt(rh, 1) + '% of saturation', px, (py + sy) / 2, -1, 0, PAL.ink, 19, 24);
    lab.flush();
    if (!over) topline(ctx, `At ${degC(T, 1)} air carrying ${dens(rho)} g/m³ of water vapor is at ${fmt(rh, 1)}% relative humidity and reaches its dew point at ${degC(tdew, 1)}.`);
    else topline(ctx, `At ${degC(T, 1)} air cannot carry ${dens(rho)} g/m³ of water vapor: ${dens(rho - rs)} g/m³ condenses out as dew or fog, leaving the air saturated.`);
    readout(d.readout, `\\text{percent relative humidity} = \\frac{\\krho}{{\\krho}_{\\text{sat}}}\\times 100 = \\frac{${dens(rho)}\\ \\text{g/m}^3}{${dens(rs)}\\ \\text{g/m}^3}\\times 100 = ${fmt(rh, 1)}\\%`,
      over ? `The dew point, ${degC(tdew, 1)}, is above the air temperature, so the humidity cannot exceed 100% and ${dens(rho - rs)} g/m³ condenses out of each cubic meter.`
        : `The dew point is ${degC(tdew, 1)}, the temperature at which ${dens(rho)} g/m³ is the saturation vapor density. The air cannot cool below it without water condensing out.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.33: a bubble of air in heated water, saturated with water
   vapor, growing as the vapor's partial pressure grows and breaking away
   when the vapor pressure reaches the pressure over the water. Still.
===================================================================== */
(function () {
  const d = sim('sim-boiling', 640);
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 20, max: 150, step: 0.5, value: 20, unit: '°C', dec: 1, aria: 'temperature of the water' });
  const Ps = ctl(d.controls, { label: '\\kPr', cls: 'pressure', min: 0.3, max: 2, step: 0.01, value: 1, unit: 'atm', dec: 2, aria: 'pressure over the water', detents: [{ v: 1, label: 'sea level' }], snap: true });
  /* the beaker: walls at XL and XR, rim at YR, bottom at YB, water to YW; the burner beneath; the bar of partial pressures at right */
  const XL = 300, XR = 700, YR = 130, YB = 520, YW = 190, R0 = 14;
  const BX = 850, BW = 440, BY = 400, BH = 54;
  const hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const T = Ts.v, P = Ps.v * ATM, tc = C('temperature'), pc = C('pressure');
    const pv = vapP(T), pair = P - pv, boils = pair <= 0, tb = tableInv(P, 1);
    /* the bubble's volume from the ideal gas law with its air fixed, against the book's 20 °C, 1.00 atm start */
    const ratio = boils ? Infinity : ((T + 273.15) / 293.15) * (ATM - vapP(20)) / pair;
    const r = boils ? 0 : Math.min(60, R0 * Math.cbrt(ratio));
    /* the beaker and the water */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(XL, YW, XR - XL, YB - YW); ctx.restore();
    line(ctx, XL, YR, XL, YB, PAL.ink, 4); line(ctx, XR, YR, XR, YB, PAL.ink, 4); line(ctx, XL, YB, XR, YB, PAL.ink, 4);
    line(ctx, XL - 14, YR, XL, YR + 8, PAL.ink, 4); line(ctx, XR + 14, YR, XR, YR + 8, PAL.ink, 4);
    line(ctx, XL, YW, XR, YW, alpha(PAL.ink, 0.5), 2);
    /* the burner, in ink */
    const cxb = (XL + XR) / 2;
    line(ctx, cxb - 60, YB + 8, cxb + 60, YB + 8, PAL.ink, 3); line(ctx, cxb - 10, YB + 40, cxb + 10, YB + 40, PAL.ink, 10); line(ctx, cxb, YB + 40, cxb, YB + 100, PAL.ink, 8); line(ctx, cxb - 34, YB + 100, cxb + 34, YB + 100, PAL.ink, 8);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(cxb - 14, YB + 36); ctx.quadraticCurveTo(cxb - 16, YB + 14, cxb, YB + 12); ctx.quadraticCurveTo(cxb + 16, YB + 14, cxb + 14, YB + 36); ctx.stroke(); ctx.restore();
    text(ctx, 'heat', cxb + 50, YB + 24, PAL.ink, { size: 17 });
    text(ctx, 'T = ' + degC(T, 1), XL + 16, YW + 30, tc, { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, 'P = ' + fmt(Ps.v, 2) + ' atm over the water', XL, YR - 26, pc, { size: 20, weight: 600 });
    /* the bubble: on the bottom while the vapor pressure is below the pressure over the water, broken away and rising once it reaches it */
    const bubble = (x, y, rr) => { ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, rr, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore(); };
    if (!boils) {
      const bx = cxb + 60, by = YB - r - 3; bubble(bx, by, r);
      hits.push({ x: bx, y: by, r: r + 8, name: `a bubble of air saturated with water vapor, ${fmt(r / R0, 2)} times its radius at 20 °C` });
      text(ctx, 'a bubble of air and water vapor', bx + r + 16, by, PAL.ink, { size: 18, bg: PAL.panel });
    } else {
      [[cxb + 60, YB - 34, 24], [cxb + 20, YB - 120, 32], [cxb + 90, YB - 220, 40]].forEach(([x, y, rr]) => { bubble(x, y, rr); hits.push({ x, y, r: rr + 8, name: 'a bubble growing without limit as it rises' }); });
      arrow(ctx, cxb + 90, YB - 220 - 40 - 6, cxb + 90, YW + 16, PAL.ink, 4);
      text(ctx, 'bubbles break away and rise', XR + 20, YB - 220, PAL.ink, { size: 18, bg: PAL.panel });
    }
    /* the bar of partial pressures inside the bubble: the vapor's share and the air's, summing to the pressure over the water */
    const fv = boils ? 1 : pv / P;
    text(ctx, 'inside the bubble, the two partial pressures add to P', BX, BY - 44, PAL.ink, { size: 19, weight: 600 });
    ctx.save(); ctx.fillStyle = alpha(pc, 0.35); ctx.fillRect(BX, BY, BW * fv, BH); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(BX + BW * fv, BY, BW * (1 - fv), BH); ctx.restore();
    ctx.save(); ctx.strokeStyle = pc; ctx.lineWidth = 3; ctx.strokeRect(BX, BY, BW, BH); ctx.restore();
    line(ctx, BX + BW * fv, BY - 6, BX + BW * fv, BY + BH + 6, pc, 3);
    text(ctx, 'water vapor ' + fmt(fv * 100, boils ? 0 : 1) + '%', BX, BY + BH + 26, pc, { size: 18, weight: 600 });
    if (!boils) text(ctx, 'air ' + fmt((1 - fv) * 100, 1) + '%', BX + BW, BY + BH + 26, PAL.ink, { size: 18, weight: 600, align: 'right' });
    text(ctx, 'P = ' + sci(P).txt + ' Pa', BX + BW, BY - 16, pc, { size: 18, weight: 600, align: 'right' });
    text(ctx, boils ? 'the vapor pressure has reached P: the bubble cannot hold its pressure' : 'the vapor pressure of water at T is the vapor’s share', BX, BY + BH + 56, PAL.muted, { size: 17 });
    hits.push({ x: BX + BW * fv / 2, y: BY + BH / 2, r: Math.max(20, BW * fv / 2), name: 'the partial pressure of water vapor, ' + sci(pv).txt + ' Pa' });
    if (!boils) hits.push({ x: BX + BW * fv + BW * (1 - fv) / 2, y: BY + BH / 2, r: Math.max(20, BW * (1 - fv) / 2), name: 'the partial pressure of the air, ' + sci(pair).txt + ' Pa' });
    /* the words */
    if (!boils) topline(ctx, `At ${degC(T, 1)} the bubble is ${fmt(fv * 100, 1)}% water vapor and ${fmt((1 - fv) * 100, 1)}% air, and it sits on the bottom${r > 40 ? ', swollen to keep its pressure at ' + fmt(Ps.v, 2) + ' atm' : ''}.`);
    else topline(ctx, `At ${degC(T, 1)} the vapor pressure of water ${pv - P < 0.02 * P ? 'reaches' : 'exceeds'} the ${fmt(Ps.v, 2)} atm over the water, so vapor enters the bubble without limit: it grows, breaks away and rises. The water boils.`);
    const Pv = sci(pv), Pa = sci(Math.max(0, pair)), Pt = sci(P);
    readout(d.readout, boils
      ? `{\\kPr}_{\\text{vapor}}(\\kTemp) = ${Pv.tex}\\ \\text{Pa} \\ge \\kPr = ${Pt.tex}\\ \\text{Pa}`
      : `{\\kPr}_{\\text{vapor}}(\\kTemp) = ${Pv.tex}\\ \\text{Pa},\\qquad {\\kPr}_{\\text{air}} = ${Pa.tex}\\ \\text{Pa},\\qquad \\kPr = ${Pt.tex}\\ \\text{Pa}`,
      `At ${fmt(Ps.v, 2)} atm water boils at ${degC(tb, 1)}, where Table 13.5 puts the vapor pressure of water at ${sci(P).txt} Pa.${boils ? '' : ' The bubble’s volume is ' + fmt(ratio, 2) + ' times what it was at 20 °C and 1.00 atm.'}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
