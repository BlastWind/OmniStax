/* Figures for section 14.5 Conduction. Boots against the section's text article.
   Both figures move, because both ideas have a clock in them: two bodies in
   contact come to one temperature through collisions at their surface, and a
   heat current runs through a slab at a rate. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, cycle, register, begin, line, arrow, dot, text, topline, hbracket, hover, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a number to n significant figures, written out in full (13.3, 2256, 0.0154) */
const sig = (v, n = 3) => { if (Math.abs(v) < 1e-12) return '0'; const d = Math.max(0, n - 1 - Math.floor(Math.log10(Math.abs(v)))); return v.toFixed(d); };
/* a large number in the book's own form, 1.15 × 10⁶, with a plain number below ten thousand */
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const sci = (v, n = 3) => { if (Math.abs(v) < 1e4) return sig(v, n); const e = Math.floor(Math.log10(Math.abs(v))); return sig(v / Math.pow(10, e), n) + ' × 10' + String(e).split('').map((c) => SUP[+c]).join(''); };
/* a temperature as the book writes one: one decimal below 100 °C, none from 100 °C on */
const degC = (T) => (Math.abs(T) >= 99.95 ? fmt(T, 0) : fmt(T, 1));
const degTex = (T) => (T < 0 ? '-' : '') + degC(Math.abs(T)) + '^\\circ\\text{C}';
/* the same as a term after a minus sign, in parentheses when negative */
const degSub = (T) => (T < 0 ? '(' + degTex(T) + ')' : degTex(T));
/* a rate in watts the way the book states one: 13.3 W, 2.26 kW, 1.68 MW */
function watts(P) {
  if (P >= 1e9) return sig(P / 1e9) + ' GW';
  if (P >= 1e6) return sig(P / 1e6) + ' MW';
  if (P >= 1e3) return sig(P / 1e3) + ' kW';
  if (P >= 1) return sig(P) + ' W';
  return sig(P * 1e3) + ' mW';
}
const wattsTex = (P) => watts(P).replace(' ', '\\ \\text{') + '}';
/* the seeded generator both figures use where they need a random number, so a run replays exactly */
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
/* the book's wavy heat arrow, running from x1 to x2 at height y and ending in a head */
function heatArrow(ctx, x1, x2, y, color, w = 4) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let x = x1; x <= x2 - 18; x += 2) { const yy = y + 7 * Math.sin(((x - x1) / 26) * TAU); if (x === x1) ctx.moveTo(x, yy); else ctx.lineTo(x, yy); }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - 20, y, x2, y, color, w);
}
/* the same arrow pointing the other way */
function heatArrowLeft(ctx, x1, x2, y, color, w = 4) { ctx.save(); ctx.translate(x1 + x2, 0); ctx.scale(-1, 1); heatArrow(ctx, x1, x2, y, color, w); ctx.restore(); }
/* a thermometer column between yb (bottom) and yt (top) for the range lo..hi, filled to T in the temperature hue */
function column(ctx, x, yb, yt, lo, hi, T, label, color) {
  const Y = (v) => yb - ((v - lo) / (hi - lo)) * (yb - yt);
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x - 14, yt, 28, yb - yt); ctx.restore();
  ctx.save(); ctx.fillStyle = color; ctx.fillRect(x - 10, Y(T), 20, yb - Y(T)); ctx.restore();
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(x - 14, yt, 28, yb - yt); ctx.restore();
  for (let v = lo; v <= hi + 1e-9; v += 100) line(ctx, x - 14, Y(v), x - 20, Y(v), PAL.muted, 2);
  text(ctx, label, x, yt - 24, color, { size: 24, weight: 600, align: 'center' });
  text(ctx, degC(T) + ' °C', x, Y(T) - 16, color, { size: 17, weight: 600, align: 'center', bg: PAL.panel });
}

/* =====================================================================
   FIGURE 14.16: molecules at a contact surface. Two bodies touch along a
   surface; the molecules of each fly about with speeds set by their side's
   temperature, and a molecule reaching the surface collides with the
   nearest molecule of the other body and swaps kinetic energy with it. The
   run is integrated in fixed steps from a fixed seed, so dragging the
   scrubber back rebuilds the same run and every frame is the same frame.
   Kinetic energy is kept per molecule in kelvin, the side's temperature is
   the mean, and a speed is drawn proportional to the square root of it.
===================================================================== */
(function () {
  const H = 640, d = sim('sim-collisions', H);
  const Th = ctl(d.controls, { label: '\\kTemphot', cls: 'temperature', min: 40, max: 500, step: 1, value: 100, unit: '°C', dec: 0, onInput: () => { if (Tc.v > Th.v - 5) Tc.set(Th.v - 5); reset(); }, aria: 'the starting temperature of the hot body' });
  const Tc = ctl(d.controls, { label: '\\kTempcold', cls: 'temperature', min: -40, max: 100, step: 1, value: 37, unit: '°C', dec: 0, onInput: () => { if (Th.v < Tc.v + 5) Th.set(Tc.v + 5); reset(); }, aria: 'the starting temperature of the cold body' });
  const PERIOD = 8, DT = 1 / 120, N = 24, R = 8, SPD = 16, KAPPA = 0.24;   /* seconds of the run, the step, molecules per side, their radius, canvas units per second per sqrt(K), the rate at which each body's temperature relaxes toward the other's */
  const S = 700, L = 140, Rt = 1260, TOP = 130, BOT = 500;                /* the surface, the outer walls and the floor and ceiling of the two bodies */
  const cy = cycle(() => PERIOD, 1.5);
  let st = null;
  /* The two bodies are drawn by two dozen molecules each and are not two dozen molecules: their temperatures follow the
     many, relaxing toward each other at a rate set by the collisions at the surface, while each drawn molecule carries a
     fixed share of its body's mean kinetic energy, so that the picture shows the mechanism and the columns show the result. */
  function build() {
    const rnd = rng(1405), ps = [];
    const side = (lo, hi, hot) => {
      for (let i = 0; i < N; i++) {
        const r = 0.6 + 0.8 * rnd(), a = rnd() * TAU;
        ps.push({ x: lo + R + rnd() * (hi - lo - 2 * R), y: TOP + R + rnd() * (BOT - TOP - 2 * R), ux: Math.cos(a), uy: Math.sin(a), r, hot });
      }
    };
    side(L, S, true); side(S, Rt, false);
    st = { t: 0, Thot: Th.v + 273.15, Tcold: Tc.v + 273.15, ps, flashes: [], toCold: 0, toHot: 0, rnd: rng(77) };
  }
  const keOf = (p) => p.r * (p.hot ? st.Thot : st.Tcold);
  const meanT = (hot) => (hot ? st.Thot : st.Tcold) - 273.15;
  /* one fixed step: the two temperatures draw together, then every molecule flies at the speed its share gives it, off the outer walls and into the surface */
  function step() {
    const { ps } = st; st.t += DT;
    const dT = st.Thot - st.Tcold; st.Thot -= KAPPA * dT * DT; st.Tcold += KAPPA * dT * DT;
    for (const p of ps) {
      const v = SPD * Math.sqrt(keOf(p));
      p.x += p.ux * v * DT; p.y += p.uy * v * DT;
      if (p.y < TOP + R) { p.y = TOP + R; p.uy = Math.abs(p.uy); } else if (p.y > BOT - R) { p.y = BOT - R; p.uy = -Math.abs(p.uy); }
      const lo = p.hot ? L : S, hi = p.hot ? S : Rt;
      if (p.x < lo + R) { p.x = lo + R; p.ux = Math.abs(p.ux); if (!p.hot) exchange(p); }
      if (p.x > hi - R) { p.x = hi - R; p.ux = -Math.abs(p.ux); if (p.hot) exchange(p); }
    }
  }
  /* the collision at the surface: the molecule that arrived meets a molecule of the other body at the surface, energy passes from the
     faster to the slower, and the two leave with each other's share of their body's energy, the faster one slower and the slower one faster */
  function exchange(p) {
    const others = st.ps.filter((q) => q.hot !== p.hot);
    const q = others[Math.floor(st.rnd() * others.length)];
    const kp = keOf(p), kq = keOf(q), toCold = p.hot ? kp > kq : kq > kp, e = Math.abs(kp - kq);
    const r = p.r; p.r = q.r; q.r = r;
    if (e > 0) { st.flashes.push({ t: st.t, y: p.y, toCold }); if (toCold) st.toCold++; else st.toHot++; }
  }
  /* the state at the scrubber's time, stepped forward from where it stands or rebuilt from the seed when time went backward */
  function at(t) {
    if (!st || t < st.t - 1e-9) build();
    while (st.t + DT / 2 < t) step();
    return st;
  }
  function reset() { cy.reset(); st = null; }
  /* the small line: how the collisions drawn so far have gone */
  function crossings(s) {
    const n = s.toCold + s.toHot;
    if (!n) return 'No molecule has reached the surface yet.';
    return `Of the ${n} collisions at the surface so far, ${s.toCold} passed energy toward the cold body and ${s.toHot} toward the hot body; the net flux of heat is that excess, repeated across every molecule of the two bodies.`;
  }
  hover(d.stage, () => (st ? st.ps.map((p) => ({ x: p.x, y: p.y, r: 22, name: p.hot ? 'a molecule of the hot body' : 'a molecule of the cold body' })) : []));
  function draw() {
    const { ctx } = begin(d.c); const tc = C('temperature'), ec = C('energy');
    const now = cy.now(), t = isFinite(now) ? now : PERIOD, s = at(t);
    const Thot = meanT(true), Tcold = meanT(false), dT = Thot - Tcold, dT0 = Th.v - Tc.v;
    /* the two bodies and the surface between them */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(L, TOP, Rt - L, BOT - TOP); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(L, TOP, Rt - L, BOT - TOP); ctx.restore();
    line(ctx, S, TOP - 10, S, BOT + 10, PAL.ink, 4);
    text(ctx, 'surface', S, TOP - 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'higher temperature', L + (S - L) / 2, BOT + 26, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'lower temperature', S + (Rt - S) / 2, BOT + 26, PAL.muted, { size: 20, align: 'center' });
    /* the molecules, each with a tail the length of its speed, in ink because the book names no substance */
    for (const p of s.ps) {
      const v = SPD * Math.sqrt(keOf(p)), tail = 0.1 * v;
      line(ctx, p.x, p.y, p.x - p.ux * tail, p.y - p.uy * tail, alpha(PAL.ink, 0.35), 3);
      dot(ctx, p.x, p.y, PAL.ink, true, R);
    }
    /* the packets of heat crossing the surface, one per collision, fading over half a second */
    for (const f of s.flashes) {
      const age = t - f.t; if (age < 0 || age > 0.5) continue;
      const a = 1 - age / 0.5, dir = f.toCold ? 1 : -1, x0 = S - dir * 34, x1 = S + dir * 34;
      arrow(ctx, x0, f.y, x1, f.y, alpha(ec, a), 5);
    }
    /* the net heat conduction, the book's wavy arrow, as long as the difference that drives it */
    const frac = dT / dT0, len = 340 * Math.abs(frac), still = Math.abs(frac) < 0.07;
    if (!still) {
      if (frac > 0) heatArrow(ctx, S - len / 2, S + len / 2, BOT + 76, ec); else heatArrowLeft(ctx, S - len / 2, S + len / 2, BOT + 76, ec);
      text(ctx, 'Q', S, BOT + 50, ec, { size: 24, weight: 600, align: 'center' });
    }
    text(ctx, still ? 'no net heat conduction: the two bodies are in equilibrium' : frac > 0 ? 'net heat conduction' : 'net heat conduction, for the moment the other way', S, BOT + 106, ec, { size: 17, align: 'center' });
    /* the two thermometer columns, following the mean kinetic energy on each side */
    column(ctx, 70, BOT, TOP + 10, -100, 600, Thot, 'T_hot', tc);
    column(ctx, 1330, BOT, TOP + 10, -100, 600, Tcold, 'T_cold', tc);
    topline(ctx, t < 0.05 ? `At the start the hot body is at ${degC(Th.v)} °C and the cold body at ${degC(Tc.v)} °C, and the collisions at the surface are about to begin.`
      : `After ${fmt(t, 1)} s the hot body has cooled from ${degC(Th.v)} °C to ${degC(Thot)} °C and the cold body has warmed from ${degC(Tc.v)} °C to ${degC(Tcold)} °C.`);
    readout(d.readout, `\\kdTemp = \\kTemphot - \\kTempcold = ${degTex(Thot)} - ${degSub(Tcold)} = ${degTex(dT)} \\qquad \\kt = ${fmt(t, 1)}\\ \\text{s}`,
      crossings(s));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 14.17: the slab. A bar of the chosen material joins a hot body to
   a cold body, drawn from the book's own viewpoint on a locked view (rule
   28.2) so that the cross-section A is a face and not a line. A current
   of packets runs through the bar at a pace that follows the rate on a
   logarithmic scale, since the rate spans twelve orders of magnitude
   across the controls; the gauge and the readout state the true watts.
   The current is steady, so the cycle is endless and there is no scrubber.
===================================================================== */
(function () {
  const H = 700, d = sim('sim-slab', H);   /* the scene above, the gauge across the bottom at 620 */
  /* Table 14.3, in J/(s·m·°C); wood is given as a range and is offered at both ends */
  const MAT = [
    ['Silver', 420], ['Copper', 390], ['Gold', 318], ['Aluminum', 220], ['Steel iron', 80], ['Steel (stainless)', 14], ['Ice', 2.2],
    ['Glass (average)', 0.84], ['Concrete brick', 0.84], ['Water', 0.6], ['Fatty tissue (without blood)', 0.2], ['Asbestos', 0.16], ['Plasterboard', 0.16],
    ['Wood (low end, 0.08)', 0.08], ['Wood (high end, 0.16)', 0.16], ['Snow (dry)', 0.10], ['Cork', 0.042], ['Glass wool', 0.042], ['Wool', 0.04],
    ['Down feathers', 0.025], ['Air', 0.023], ['Styrofoam', 0.010],
  ];
  const T2 = ctl(d.controls, { label: '\\kTemptwo', cls: 'temperature', min: 0, max: 400, step: 0.5, value: 35, unit: '°C', dec: 1, onInput: () => { if (T1.v > T2.v - 1) T1.set(T2.v - 1); }, aria: 'the temperature of the hot face' });
  const T1 = ctl(d.controls, { label: '\\kTempone', cls: 'temperature', min: -40, max: 100, step: 0.5, value: 0, unit: '°C', dec: 1, onInput: () => { if (T2.v < T1.v + 1) T2.set(T1.v + 1); }, aria: 'the temperature of the cold face' });
  const A = ctl(d.controls, { label: 'A', cls: '', min: 0.01, max: 3, step: 0.005, value: 0.95, unit: 'm²', dec: 3, aria: 'the cross-sectional area', detents: [{ v: 0.0154, label: 'pan' }, { v: 0.95, label: 'ice box' }] });
  const D = ctl(d.controls, { label: 'd', cls: '', min: 0.2, max: 15, step: 0.05, value: 2.5, unit: 'cm', dec: 2, aria: 'the thickness', detents: [0.8, 2.5] });
  const mat = select(d.controls, { label: '\\text{the material}', options: MAT.map(([n]) => ({ value: n, label: n })), value: 'Styrofoam', aria: 'the material of the slab' });
  const kOf = () => MAT.find(([n]) => n === mat.value)[1];
  const rate = () => (kOf() * A.v * (T2.v - T1.v)) / (D.v / 100);
  const cy = cycle(() => Infinity, 0);
  /* the pace of the current in scene units per second, following the logarithm of the rate from 1 mW to 1 GW */
  const pace = (P) => 24 + 36 * Math.min(12, Math.max(0, Math.log10(Math.max(P, 1e-3)) + 3));
  let run = 0, lastT = 0;                                        /* the distance the current has run, kept across a slider change so the packets never jump */
  /* the locked view: from the front, the right and above, as the book draws it */
  const V = view({ yaw: 0.5, pitch: 0.3, dist: 3200, cx: 700, cy: 300 });
  /* a box by its extents, the three faces the view sees (top, front, right end), at an opacity; `end` false leaves the right end open */
  const box = (ctx, x0, x1, y0, y1, z0, z1, a, end = true) => {
    const P = V.P;
    ctx.save(); ctx.globalAlpha = a;
    face(ctx, [P([x0, y1, z0]), P([x1, y1, z0]), P([x1, y1, z1]), P([x0, y1, z1])], V.shade([0, 1, 0]), 2);       /* top */
    face(ctx, [P([x0, y0, z1]), P([x1, y0, z1]), P([x1, y1, z1]), P([x0, y1, z1])], V.shade([0, 0, 1]), 2);       /* front */
    if (end) face(ctx, [P([x1, y0, z0]), P([x1, y0, z1]), P([x1, y1, z1]), P([x1, y1, z0])], V.shade([1, 0, 0]), 2);       /* right end */
    ctx.restore();
  };
  /* a filled polygon on the canvas */
  const poly = (ctx, pts, fill, stroke, w) => { ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); } ctx.restore(); };
  /* the gauge: a logarithmic axis from 1 mW to 1 GW across the bottom of the canvas */
  const GL = 160, GR = 1240, GY = 620, LO = -3, HI = 9;
  const GX = (P) => GL + ((Math.log10(P) - LO) / (HI - LO)) * (GR - GL);
  const TICK = ['1 mW', '10 mW', '100 mW', '1 W', '10 W', '100 W', '1 kW', '10 kW', '100 kW', '1 MW', '10 MW', '100 MW', '1 GW'];
  function draw() {
    const { ctx } = begin(d.c); const tc = C('temperature'), pc = C('power'), ec = C('energy'), P = V.P;
    const now = cy.now(), t = isFinite(now) ? now : 0; if (t < lastT) lastT = t; run += (t - lastT) * pace(rate()); lastT = t;
    const k = kOf(), Pw = rate(), dT = T2.v - T1.v;
    /* the scene: a bar of length set by d and cross-section set by A between two blocks; the bar's near half is translucent so the section shows through */
    const len = 300 + D.v * 24, s = 110 + 170 * Math.sqrt(A.v / 3), h = s / 2, BW = 100, BH = 150;
    const xh = -len / 2, xc = len / 2;
    box(ctx, xh - BW, xh, -BH, BH, -BH, BH, 1);                            /* the hot body */
    box(ctx, 0, xc, -h, h, -h, h, 0.92);                                   /* the far half of the bar */
    poly(ctx, [P([0, -h, -h]), P([0, h, -h]), P([0, h, h]), P([0, -h, h])], alpha(PAL.ink, 0.22), PAL.ink, 2.5);   /* the section, area A */
    box(ctx, xh, 0, -h, h, -h, h, 0.5, false);                             /* the near half of the bar, translucent, open at the section */
    box(ctx, xc, xc + BW, -BH, BH, -BH, BH, 1);                            /* the cold body */
    /* the current of heat through the bar: packets in four lanes, spaced 30 apart, running from the hot face to the cold face */
    const SP = 34, ph = ((run % SP) + SP) % SP;
    for (const [ly, lz] of [[-h / 2.4, -h / 2.4], [h / 2.4, -h / 2.4], [-h / 2.4, h / 2.4], [h / 2.4, h / 2.4], [0, 0]]) {
      for (let x = xh + 8 + ph; x < xc - 8; x += SP) { const q = P([x, ly, lz]); if (ly || lz) dot(ctx, q[0], q[1], pc, true, 6); }
    }
    /* the book's wavy arrow, Q, along the axis of the bar */
    const a0 = P([xh + 6, 0, 0]), a1 = P([xc - 6, 0, 0]);
    heatArrow(ctx, a0[0], a1[0], (a0[1] + a1[1]) / 2, ec, 3);
    text(ctx, 'Q', a0[0] - 6, (a0[1] + a1[1]) / 2 - 26, ec, { size: 24, weight: 600, align: 'right' });
    /* labels: the two temperatures on the bodies, the section, the thickness and the material */
    const hf = P([xh - BW / 2, -BH + 60, BH]), cf = P([xc + BW / 2, -BH + 60, BH]);
    text(ctx, 'T_2', hf[0], hf[1] - 18, tc, { size: 26, weight: 600, align: 'center' });
    text(ctx, degC(T2.v) + ' °C', hf[0], hf[1] + 16, tc, { size: 17, weight: 600, align: 'center' });
    text(ctx, 'T_1', cf[0], cf[1] - 18, tc, { size: 26, weight: 600, align: 'center' });
    text(ctx, degC(T1.v) + ' °C', cf[0], cf[1] + 16, tc, { size: 17, weight: 600, align: 'center' });
    const sec = P([0, h, h]);
    line(ctx, sec[0], sec[1] - 6, sec[0] + 40, sec[1] - 70, PAL.ink, 1.5, [4, 6]);
    text(ctx, 'area A = ' + sig(A.v) + ' m²', sec[0] + 48, sec[1] - 78, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
    const q0 = P([xh, -h, h]), q1 = P([xc, -h, h]);
    hbracket(ctx, q0[0], q1[0], Math.max(q0[1], q1[1]) + 36, PAL.ink);
    text(ctx, 'd = ' + fmt(D.v, 2) + ' cm', (q0[0] + q1[0]) / 2, Math.max(q0[1], q1[1]) + 62, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const qm = P([xh + len * 0.3, h, -h]);
    text(ctx, mat.value.replace(/ \(.*\)$/, '') + ', k = ' + sig(k, 2) + ' J/(s·m·°C)', qm[0], Math.max(100, qm[1] - 36), PAL.ink, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    /* the gauge */
    text(ctx, 'rate of heat transfer Q/t', GL, GY - 44, pc, { size: 20, weight: 600 });
    line(ctx, GL, GY, GR, GY, PAL.muted, 2);
    TICK.forEach((s, i) => { const x = GL + (i / (HI - LO)) * (GR - GL); line(ctx, x, GY - 6, x, GY + 6, PAL.muted, 2); text(ctx, s, x, GY + 26, PAL.muted, { size: 15, align: 'center' }); });
    for (const [v, lab] of [[13.3, 'ice box, 13.3 W'], [2256, 'pan, 2.26 kW']]) { const x = GX(v); line(ctx, x, GY - 16, x, GY, PAL.ink, 2, [3, 4]); text(ctx, lab, x, GY - 26, PAL.muted, { size: 15, align: 'center' }); }
    const gx = Math.min(GR, Math.max(GL, GX(Pw)));
    line(ctx, GL, GY, gx, GY, pc, 10);
    dot(ctx, gx, GY, pc, true, 10);
    text(ctx, watts(Pw), gx, GY + 50, pc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    topline(ctx, `Through ${sig(A.v)} m² of ${mat.value.replace(/ \(.*\)$/, '').toLowerCase()} ${fmt(D.v, 2)} cm thick, a difference of ${degC(dT)} °C drives ${watts(Pw)}.`);
    const Qday = Pw * 86400, mIce = Qday / 334e3;
    readout(d.readout, `\\frac{\\kQh}{\\kt} = \\frac{kA(\\kTemptwo - \\kTempone)}{d} = \\frac{(${sig(k, 2)})(${sig(A.v)}\\ \\text{m}^2)(${degTex(T2.v)} - ${degSub(T1.v)})}{${sig(D.v / 100)}\\ \\text{m}} = \\htmlClass{kv-power}{${wattsTex(Pw)}}`,
      `In one day this rate carries ${sci(Qday)} J across the slab, which would melt ${sci(mIce)} kg of ice at 0 °C.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
