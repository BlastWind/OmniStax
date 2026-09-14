/* Figures for section 14.3 Phase Change and Latent Heat. Boots against the section's text article.
   Every figure here is about an amount of heat and the state it produces,
   not a rate, so all three are still pictures: none registers a cycle, none
   carries a transport, and a slider's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, register, begin, line, arrow, dot, text, headline, topline, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a number written with the typographic minus */
const num = (v, d) => (v < 0 && Math.abs(v) >= 0.5 * Math.pow(10, -d) ? '−' : '') + fmt(Math.abs(v), d);
/* a fixed pseudo-random sequence, so that a scattered drawing is the same at every redraw */
function seeded(seed) { let s = seed; return () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }; }
/* the book's water values, converted from its cal/g figures at 4.186 J/cal */
const CAL = 4.186;
const C_ICE = 0.50 * CAL, C_W = 1.00 * CAL, C_STEAM = 0.482 * CAL;   /* kJ/(kg·°C) */
const L_F = 79.8 * CAL, L_V = 539 * CAL;                                /* kJ/kg: 334.0 and 2256.3 */
/* a horizontal bar of heat on a fixed scale: from x0 to the value, clamped at the scale's end
   and marked there when the value runs past it, with the value written at its end */
function heatBar(ctx, x0, x1, y, h, frac, color, label, fill) {   /* fill 'none' when the caller has drawn the bar's segments itself */
  const w = Math.min(1, Math.max(0, frac)) * (x1 - x0), over = frac > 1;
  if (fill !== 'none') { ctx.save(); ctx.fillStyle = alpha(color, 0.35); ctx.fillRect(x0, y - h / 2, w, h); ctx.restore(); }
  if (w > 0) line(ctx, x0 + w, y - h / 2, x0 + w, y + h / 2, color, 3);
  if (over) { arrow(ctx, x1 - 30, y, x1 - 4, y, color, 3); dot(ctx, x1, y, color, false, 8); }
  text(ctx, label, over ? x1 - 66 : x0 + w + 14, y, color, { size: 20, weight: 600, align: over ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
}
/* a scale under the bars: ticks every `step` from 0 to `max`, labelled in kJ */
function kjScale(ctx, x0, x1, y, max, step) {
  line(ctx, x0, y, x1, y, PAL.muted, 2);
  for (let v = 0; v <= max + 1e-9; v += step) { const x = x0 + (v / max) * (x1 - x0); line(ctx, x, y, x, y + 8, PAL.muted, 2); text(ctx, fmt(v, 0), x, y + 26, PAL.muted, { size: 17, align: 'center' }); }
  text(ctx, 'heat, kJ', x1, y + 54, PAL.ink, { size: 20, weight: 600, align: 'right' });
}

/* ---------- the particles, in the element palette ---------- */
/* a water molecule at (x, y): an oxygen with its two hydrogens */
function water(ctx, x, y, r, tilt) {
  const a1 = tilt - 0.91, a2 = tilt + 0.91, hr = r * 0.55, hd = r * 0.95;
  ctx.save(); ctx.fillStyle = F.el('H'); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(x + hd * Math.sin(a1), y - hd * Math.cos(a1), hr, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(x + hd * Math.sin(a2), y - hd * Math.cos(a2), hr, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.fillStyle = F.el('O'); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.restore();
}
/* a diatomic molecule at (x, y): two atoms of one element side by side */
function diatomic(ctx, x, y, r, sym, tilt) {
  const dx = r * 0.85 * Math.cos(tilt), dy = r * 0.85 * Math.sin(tilt);
  ctx.save(); ctx.fillStyle = F.el(sym); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(x - dx, y - dy, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a single atom at (x, y) */
function atom(ctx, x, y, r, sym) {
  ctx.save(); ctx.fillStyle = F.el(sym); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* one particle of the chosen substance */
function particle(ctx, sub, x, y, r, tilt) {
  if (sub.form === 'water') water(ctx, x, y, r, tilt);
  else if (sub.form === 'diatomic') diatomic(ctx, x, y, r * 0.8, sub.el, tilt);
  else atom(ctx, x, y, r, sub.el);
}
/* a spring between two lattice points, drawn as a zigzag in ink */
function spring(ctx, x1, y1, x2, y2, gap) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
  const a = x1 + ux * gap, b = y1 + uy * gap, len = L - 2 * gap, n = 8, amp = 6;
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(a, b);
  for (let i = 1; i < n; i++) { const t = i / n, s = i % 2 ? amp : -amp; ctx.lineTo(a + ux * len * t + px * s, b + uy * len * t + py * s); }
  ctx.lineTo(a + ux * len, b + uy * len); ctx.stroke(); ctx.restore();
}
/* a curved arrow from (x, y) sweeping through `ang` radians on a circle of radius R, in ink */
function curl(ctx, x, y, R, a0, ang, w) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, R, a0, a0 + ang, ang < 0); ctx.stroke(); ctx.restore();
  const a = a0 + ang, t = a + (ang > 0 ? Math.PI / 2 : -Math.PI / 2);
  const hx = x + R * Math.cos(a), hy = y + R * Math.sin(a);
  arrow(ctx, hx - 14 * Math.cos(t), hy - 14 * Math.sin(t), hx, hy, PAL.ink, w);
}

/* =====================================================================
   FIGURE 14.8: the molecules of a solid, a liquid and a gas, and the
   energy that each transition costs. Still: the idea is an amount of
   energy, and the curved arrows between the phases are the book's notation
   for a transition, drawn and never animated.
===================================================================== */
(function () {
  const d = sim('sim-phases', 720);
  /* the rows of Table 14.2 whose particles the element palette can draw: L in kJ/kg, points in °C */
  const SUBS = {
    water: { name: 'water', form: 'water', Lf: 334, Lv: 2256, mp: '0.00', bp: '100.0' },
    helium: { name: 'helium', form: 'atom', el: 'He', Lf: 5.23, Lv: 20.9, mp: '−269.7', bp: '−268.9' },
    nitrogen: { name: 'nitrogen', form: 'diatomic', el: 'N', Lf: 25.5, Lv: 201, mp: '−210.0', bp: '−195.8' },
    oxygen: { name: 'oxygen', form: 'diatomic', el: 'O', Lf: 13.8, Lv: 213, mp: '−218.8', bp: '−183.0' },
    copper: { name: 'copper', form: 'atom', el: 'Cu', Lf: 134, Lv: 5069, mp: '1083', bp: '2595' },
    silver: { name: 'silver', form: 'atom', el: 'Ag', Lf: 88.3, Lv: 2336, mp: '961', bp: '2193' },
    gold: { name: 'gold', form: 'atom', el: 'Au', Lf: 64.5, Lv: 1578, mp: '1063', bp: '2660' },
  };
  const sub = select(d.controls, { label: '\\text{the substance}', options: Object.keys(SUBS).map((k) => ({ value: k, label: SUBS[k].name })), value: 'water', aria: 'the substance from Table 14.2' });
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 2, step: 0.05, value: 1, unit: 'kg', dec: 2, aria: 'the mass of the sample' });
  /* the three panels and the fixed positions of the particles in them */
  const PANEL = { t: 110, b: 470 }, SOL = { l: 50, r: 390 }, LIQ = { l: 530, r: 870 }, GAS = { l: 1010, r: 1350 };
  const rnd = seeded(7);
  const jitter = () => { const a = rnd() * TAU; return { ax: Math.cos(a), ay: Math.sin(a) }; };
  const solid = []; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) solid.push({ x: SOL.l + 44 + i * 84, y: PANEL.t + 44 + j * 84, ...jitter() });
  const liquid = [[70, 60], [180, 40], [280, 80], [50, 170], [150, 150], [260, 190], [90, 280], [200, 260], [280, 300]].map(([x, y]) => ({ x: LIQ.l + x, y: PANEL.t + y, ...jitter(), sweep: (rnd() > 0.5 ? 1 : -1) * (1.3 + rnd() * 0.9) }));
  const gas = [[40, 50], [200, 30], [310, 90], [90, 170], [240, 200], [40, 300], [180, 320], [300, 260]].map(([x, y]) => ({ x: GAS.l + x, y: PANEL.t + y, ...jitter(), len: 70 + rnd() * 50 }));
  const MAXKJ = 5000, BX0 = 330, BX1 = 1330;             /* the fixed scale of the two heat bars: 0 to 5000 kJ */
  function panel(ctx, box, name) {
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(box.l, PANEL.t, box.r - box.l, PANEL.b - PANEL.t); ctx.restore();
    text(ctx, name, (box.l + box.r) / 2, PANEL.b + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), s = SUBS[sub.value], m = ms.v, Qf = m * s.Lf, Qv = m * s.Lv;
    panel(ctx, SOL, 'solid'); panel(ctx, LIQ, 'liquid'); panel(ctx, GAS, 'gas');
    /* the solid: a lattice held by springs, each particle moving within a small limit */
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const p = solid[i * 4 + j];
      if (i < 3) spring(ctx, p.x, p.y, solid[(i + 1) * 4 + j].x, solid[(i + 1) * 4 + j].y, 18);
      if (j < 3) spring(ctx, p.x, p.y, solid[i * 4 + j + 1].x, solid[i * 4 + j + 1].y, 18);
    }
    for (const p of solid) { arrow(ctx, p.x + p.ax * 15, p.y + p.ay * 15, p.x + p.ax * 42, p.y + p.ay * 42, PAL.ink, 2.5); particle(ctx, s, p.x, p.y, 13, p.ax * 0.5); }
    { const p = solid[10]; ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(p.x, p.y, 38, 0, TAU); ctx.stroke(); ctx.restore(); }
    text(ctx, 'limits of motion', SOL.r - 10, PANEL.b - 16, PAL.muted, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the liquid: close but free, each particle wandering on a short curved path */
    for (const p of liquid) { const a0 = Math.atan2(-p.ay, -p.ax); curl(ctx, p.x + p.ax * 34, p.y + p.ay * 34, 34, a0 + Math.sign(p.sweep) * 0.5, p.sweep, 2.5); particle(ctx, s, p.x, p.y, 13, p.ax); }
    /* the gas: far apart and in flight */
    for (const p of gas) {
      /* the flight arrow is shortened where it would leave the panel */
      let L = p.len;
      if (p.ax > 0) L = Math.min(L, (GAS.r - 10 - p.x) / p.ax); if (p.ax < 0) L = Math.min(L, (GAS.l + 10 - p.x) / p.ax);
      if (p.ay > 0) L = Math.min(L, (PANEL.b - 10 - p.y) / p.ay); if (p.ay < 0) L = Math.min(L, (PANEL.t + 10 - p.y) / p.ay);
      arrow(ctx, p.x + p.ax * 16, p.y + p.ay * 16, p.x + p.ax * L, p.y + p.ay * L, PAL.ink, 2); particle(ctx, s, p.x, p.y, 13, p.ay);
    }
    /* the transitions between the panels: energy in one way, the same energy out the other */
    for (const [x0, x1, into, outof] of [[SOL.r, LIQ.l, 'melt', 'freeze'], [LIQ.r, GAS.l, 'boil', 'condense']]) {
      const cx = (x0 + x1) / 2, yi = 220, yo = 360;
      arrow(ctx, x0 + 14, yi, x1 - 14, yi, PAL.ink, 4); arrow(ctx, x1 - 14, yo, x0 + 14, yo, PAL.ink, 4);
      text(ctx, 'energy input', cx, yi - 44, PAL.ink, { size: 17, align: 'center' }); text(ctx, into, cx, yi - 22, PAL.ink, { size: 18, weight: 600, align: 'center' });
      text(ctx, outof, cx, yo + 22, PAL.ink, { size: 18, weight: 600, align: 'center' }); text(ctx, 'energy output', cx, yo + 44, PAL.ink, { size: 17, align: 'center' });
    }
    /* the heat each transition costs for this mass, on one fixed scale */
    text(ctx, 'melting', BX0 - 16, 560, PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'boiling', BX0 - 16, 616, PAL.ink, { size: 20, weight: 600, align: 'right' });
    heatBar(ctx, BX0, BX1, 560, 30, Qf / MAXKJ, ec, 'Q = mL_f = ' + fmt(Qf, Qf < 100 ? 1 : 0) + ' kJ');
    heatBar(ctx, BX0, BX1, 616, 30, Qv / MAXKJ, ec, 'Q = mL_v = ' + fmt(Qv, Qv < 100 ? 1 : 0) + ' kJ');
    kjScale(ctx, BX0, BX1, 650, MAXKJ, 1000);
    topline(ctx, 'Melting ' + fmt(m, 2) + ' kg of ' + s.name + ' takes ' + fmt(Qf, Qf < 100 ? 1 : 0) + ' kJ, and boiling it takes ' + fmt(Qv, Qv < 100 ? 1 : 0) + ' kJ, ' + fmt(s.Lv / s.Lf, 1) + ' times as much.');
    readout(d.readout, `\\kQh = mL_{\\text{f}} = (${fmt(m, 2)}\\ \\text{kg})(${s.Lf}\\ \\text{kJ/kg}) = ${fmt(Qf, Qf < 100 ? 1 : 0)}\\ \\text{kJ} \\qquad \\kQh = mL_{\\text{v}} = (${fmt(m, 2)}\\ \\text{kg})(${s.Lv}\\ \\text{kJ/kg}) = ${fmt(Qv, Qv < 100 ? 1 : 0)}\\ \\text{kJ}`,
      s.name.charAt(0).toUpperCase() + s.name.slice(1) + ' melts at ' + s.mp + ' °C and boils at ' + s.bp + ' °C at atmospheric pressure. The same ' + fmt(Qf, Qf < 100 ? 1 : 0) + ' kJ must be removed to freeze the liquid again and the same ' + fmt(Qv, Qv < 100 ? 1 : 0) + ' kJ to condense the gas, and the temperature does not change while either transition is under way.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 14.9: the heating curve of water. Heat is added per kilogram to
   ice at −20 °C and the temperature is read against it; the container at
   the left shows what the sample is at the chosen point. Still: the idea
   is an amount of heat and the state it produces, and the book's figure
   carries no rate.
===================================================================== */
(function () {
  const d = sim('sim-heating-curve', 640);
  const qs = ctl(d.controls, { label: '\\Delta Q/m', cls: '', min: 0, max: 3200, step: 5, value: 200, unit: 'kJ/kg', dec: 0, aria: 'the heat added per kilogram of the sample' });
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 2, step: 0.05, value: 1, unit: 'kg', dec: 2, aria: 'the mass of the sample' });
  const T0 = -20, Q1 = C_ICE * 20, Q2 = Q1 + L_F, Q3 = Q2 + C_W * 100, Q4 = Q3 + L_V;   /* the corners of the curve, kJ/kg */
  /* the state of one kilogram after q kJ/kg: its temperature and the fraction that is ice, water and steam */
  function state(q) {
    if (q <= Q1) return { T: T0 + q / C_ICE, ice: 1, water: 0, steam: 0, stage: 0 };
    if (q <= Q2) { const f = (q - Q1) / L_F; return { T: 0, ice: 1 - f, water: f, steam: 0, stage: 1 }; }
    if (q <= Q3) return { T: (q - Q2) / C_W, ice: 0, water: 1, steam: 0, stage: 2 };
    if (q <= Q4) { const f = (q - Q3) / L_V; return { T: 100, ice: 0, water: 1 - f, steam: f, stage: 3 }; }
    return { T: 100 + (q - Q4) / C_STEAM, ice: 0, water: 0, steam: 1, stage: 4 };
  }
  const box = { l: 440, r: 1340, t: 132, b: 500 };            /* fixed axes: 0 to 3200 kJ/kg, −20 to 180 °C */
  const CUP = { l: 90, r: 310, t: 150, b: 520 };
  const rnd = seeded(3), wisps = Array.from({ length: 36 }, () => ({ x: rnd(), y: rnd() }));
  function container(ctx, st) {
    const inner = CUP.b - CUP.t - 12, condensed = st.ice + st.water, fillH = inner * 0.78 * condensed;
    const yTop = CUP.b - 6 - fillH;
    /* the water, and the ice floating on it as blocks filling the upper part of the contents */
    if (st.water > 0.002) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(CUP.l + 6, yTop, CUP.r - CUP.l - 12, fillH); ctx.restore(); }
    if (st.ice > 0.002) {
      const iceH = fillH * (st.ice / condensed);
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.rect(CUP.l + 6, yTop, CUP.r - CUP.l - 12, iceH); ctx.clip();
      for (let y = yTop; y < yTop + iceH; y += 34) for (let x = CUP.l + 6; x < CUP.r - 6; x += 52) { ctx.fillRect(x + 2, y + 2, 48, 30); ctx.strokeRect(x + 2, y + 2, 48, 30); }
      ctx.restore();
    }
    /* the steam, as a scatter of small marks in the space above the contents */
    if (st.steam > 0.002) {
      const n = Math.round(36 * st.steam), top = CUP.t + 10, span = yTop - 20 - top;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.35);
      for (let i = 0; i < n; i++) { const w = wisps[i]; ctx.beginPath(); ctx.arc(CUP.l + 20 + w.x * (CUP.r - CUP.l - 40), top + w.y * Math.max(20, span), 4, 0, TAU); ctx.fill(); }
      ctx.restore();
    }
    /* the container itself, an open beaker */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(CUP.l, CUP.t); ctx.lineTo(CUP.l, CUP.b); ctx.lineTo(CUP.r, CUP.b); ctx.lineTo(CUP.r, CUP.t); ctx.stroke(); ctx.restore();
    line(ctx, CUP.l - 10, CUP.b + 4, CUP.r + 10, CUP.b + 4, PAL.muted, 3);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), ec = C('energy'), q = qs.v, m = ms.v, st = state(q), Q = m * q;
    container(ctx, st);
    const parts = [];
    if (st.ice > 0.002) parts.push('ice ' + fmt(st.ice * 100, 0) + '%');
    if (st.water > 0.002) parts.push('water ' + fmt(st.water * 100, 0) + '%');
    if (st.steam > 0.002) parts.push('steam ' + fmt(st.steam * 100, 0) + '%');
    text(ctx, parts.join(' · '), (CUP.l + CUP.r) / 2, CUP.b + 34, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'T = ' + num(st.T, st.stage === 1 || st.stage === 3 ? 0 : 1) + ' °C', (CUP.l + CUP.r) / 2, CUP.b + 64, tc, { size: 22, weight: 600, align: 'center' });
    text(ctx, fmt(m, 2) + ' kg, in an insulated container', (CUP.l + CUP.r) / 2, CUP.t - 22, PAL.muted, { size: 17, align: 'center' });
    /* the curve on fixed axes, with the book's names on its five segments */
    const { X, Y } = axes(ctx, box, [0, 3200], [-20, 180], { xl: 'ΔQ/m (kJ/kg)', xc: PAL.ink, yl: 'T (°C)', yc: tc, nx: 8, ny: 10 });
    const pts = [[0, T0], [Q1, 0], [Q2, 0], [Q3, 100], [Q4, 100], [3200, state(3200).T]];
    ctx.save(); ctx.strokeStyle = tc; ctx.lineWidth = 5; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)))); ctx.stroke(); ctx.restore();
    for (const [x, y] of pts.slice(1, 5)) dot(ctx, X(x), Y(y), PAL.ink, true, 6);
    text(ctx, 'ice', X(Q1) + 8, Y(-12), PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'ice + water', X((Q1 + Q2) / 2), Y(24), PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'water', X(Q2) + 12, Y(72), PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'water + steam', X((Q3 + Q4) / 2), Y(112), PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'steam', X(Q4) - 12, Y(140), PAL.ink, { size: 18, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the state the reader has chosen, with its drop lines to both axes */
    const p = pinned(ctx, box, X, Y, q, st.T, tc);
    line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, box.l, p.y, p.x, p.y, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, p.x, p.y, tc, true, 9);
    /* the headline and the readout, by stage */
    const pct = (f) => fmt(f * 100, 0) + ' percent';
    const heads = [
      'After ' + fmt(q, 0) + ' kJ/kg the ice has warmed from −20 °C to ' + num(st.T, 1) + ' °C and none of it has melted.',
      'After ' + fmt(q, 0) + ' kJ/kg the ice has reached 0 °C and ' + pct(st.water) + ' of it has melted; the temperature holds there until all of it has.',
      'After ' + fmt(q, 0) + ' kJ/kg all the ice has melted and the water has warmed to ' + fmt(st.T, 1) + ' °C.',
      'After ' + fmt(q, 0) + ' kJ/kg the water is at 100 °C and ' + pct(st.steam) + ' of it has boiled; the temperature holds there until all of it has.',
      'After ' + fmt(q, 0) + ' kJ/kg all the water is steam, and the steam has warmed to ' + fmt(st.T, 1) + ' °C.',
    ];
    topline(ctx, q === 0 ? 'No heat has been added yet: the sample is ice at −20 °C.' : heads[st.stage]);
    const kJ = (v) => fmt(v, v < 100 ? 1 : 0), kg = fmt(m, 2);
    const mains = [
      `\\kQh = mc_{\\text{ice}}\\kdTemp = (${kg}\\ \\text{kg})(${fmt(C_ICE, 2)}\\ \\text{kJ/kg}\\cdot{}^\\circ\\text{C})(${fmt(st.T - T0, 1)}^\\circ\\text{C}) = ${kJ(Q)}\\ \\text{kJ}`,
      `\\kQh = mc_{\\text{ice}}(20^\\circ\\text{C}) + m_{\\text{melted}}L_{\\text{f}} = ${kJ(m * Q1)}\\ \\text{kJ} + (${fmt(m * st.water, 2)}\\ \\text{kg})(${fmt(L_F, 0)}\\ \\text{kJ/kg}) = ${kJ(Q)}\\ \\text{kJ}`,
      `\\kQh = ${kJ(m * Q2)}\\ \\text{kJ} + mc_{\\text{w}}\\kdTemp = ${kJ(m * Q2)}\\ \\text{kJ} + (${kg}\\ \\text{kg})(${fmt(C_W, 2)}\\ \\text{kJ/kg}\\cdot{}^\\circ\\text{C})(${fmt(st.T, 1)}^\\circ\\text{C}) = ${kJ(Q)}\\ \\text{kJ}`,
      `\\kQh = ${kJ(m * Q3)}\\ \\text{kJ} + m_{\\text{boiled}}L_{\\text{v}} = ${kJ(m * Q3)}\\ \\text{kJ} + (${fmt(m * st.steam, 2)}\\ \\text{kg})(${fmt(L_V, 0)}\\ \\text{kJ/kg}) = ${kJ(Q)}\\ \\text{kJ}`,
      `\\kQh = ${kJ(m * Q4)}\\ \\text{kJ} + mc_{\\text{steam}}\\kdTemp = ${kJ(m * Q4)}\\ \\text{kJ} + (${kg}\\ \\text{kg})(${fmt(C_STEAM, 2)}\\ \\text{kJ/kg}\\cdot{}^\\circ\\text{C})(${fmt(st.T - 100, 1)}^\\circ\\text{C}) = ${kJ(Q)}\\ \\text{kJ}`,
    ];
    const smalls = [
      'The ice warms at 0.50 cal/g·°C, which is ' + fmt(C_ICE, 2) + ' kJ/kg·°C, so the first segment of the curve is steep: only ' + fmt(Q1, 1) + ' kJ/kg carries the ice from −20 °C to 0 °C.',
      'Every joule now goes into breaking the bonds of the ice rather than into its temperature. Melting the ice takes 79.8 cal/g, which is ' + fmt(L_F, 0) + ' kJ for every kilogram, eight times what warming it through 20 °C took, and the temperature stays at 0 °C until the last of the ice is gone.',
      'The ' + kJ(m * Q2) + ' kJ is what warming and melting the ice took. Water warms at 1.00 cal/g·°C, which is ' + fmt(C_W, 2) + ' kJ/kg·°C, twice the specific heat of ice, so this segment climbs half as steeply as the first.',
      'The ' + kJ(m * Q3) + ' kJ is what it took to bring the sample to water at 100 °C. Boiling the water takes 539 cal/g, which is ' + fmt(L_V, 0) + ' kJ for every kilogram, nearly seven times the heat of melting and more than everything that came before it together.',
      'The ' + kJ(m * Q4) + ' kJ is what it took to bring the sample to steam at 100 °C. Steam warms at 0.482 cal/g·°C, which is ' + fmt(C_STEAM, 2) + ' kJ/kg·°C, so the last segment climbs nearly as steeply as the ice did.',
    ];
    readout(d.readout, q === 0 ? `\\kQh = 0` : mains[st.stage], q === 0 ? 'Slide the heat added to the right and follow the sample up the curve.' : smalls[st.stage]);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the soda cooled with ice cubes of Example 14.4. The heat the soda
   gives up is set against the heat that melts the ice and warms the
   meltwater, and the final temperature is read off a bar. Still: the
   example asks for the final state, not how fast it is reached.
===================================================================== */
(function () {
  const d = sim('sim-ice-soda', 640);
  const mi = ctl(d.controls, { label: 'm_{\\text{ice}}', cls: '', min: 0, max: 100, step: 1, value: 18, unit: 'g', dec: 0, aria: 'the mass of ice, six grams to a cube', detents: Array.from({ length: 17 }, (_, i) => 6 * i) });
  const msod = ctl(d.controls, { label: 'm_{\\text{soda}}', cls: '', min: 0.1, max: 0.5, step: 0.01, value: 0.25, unit: 'kg', dec: 2, aria: 'the mass of soda' });
  const Ts = ctl(d.controls, { label: 'T_{\\text{soda}}', cls: 'temperature', min: 1, max: 40, step: 1, value: 20, unit: '°C', dec: 0, aria: 'the starting temperature of the soda' });
  const CW = 4186, LF = 334000;                                      /* J/(kg·°C) and J/kg, the example's values */
  const CUP = { l: 120, r: 380, t: 150, b: 520 }, BAR = { x: 450, t: 160, b: 520 }, HX0 = 700, HX1 = 1320, MAXKJ = 40;
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), ec = C('energy');
    const mIce = mi.v / 1000, mS = msod.v, T = Ts.v;
    const avail = mS * CW * T, need = mIce * LF;                      /* what the soda can give before it reaches 0 °C, and what melting all the ice takes */
    const allMelts = need <= avail;
    const Tf = allMelts ? (avail - need) / ((mS + mIce) * CW) : 0;
    const melted = allMelts ? mIce : avail / LF;
    const Qmelt = melted * LF, Qwarm = allMelts ? mIce * CW * Tf : 0, Qsoda = mS * CW * (T - Tf);
    /* the cup, the soda and the ice cubes floating in it */
    const fillH = 120 + 380 * mS, yTop = CUP.b - 6 - fillH;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(CUP.l + 6, yTop, CUP.r - CUP.l - 12, fillH); ctx.restore();
    const cubes = Math.round(mi.v / 6), left = allMelts ? 0 : Math.max(1, Math.round((mIce - melted) / 0.006));
    for (let k = 0; k < cubes; k++) {
      const col = k % 5, row = Math.floor(k / 5), x = CUP.l + 18 + col * 46, y = yTop + 6 + row * 38, solid = k < left;
      ctx.save(); ctx.strokeStyle = solid ? PAL.ink : PAL.muted; ctx.lineWidth = 2; if (!solid) ctx.setLineDash([4, 4]);
      if (solid) { ctx.fillStyle = PAL.panel; ctx.fillRect(x, y, 38, 30); } ctx.strokeRect(x, y, 38, 30); ctx.restore();
    }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(CUP.l, CUP.t); ctx.lineTo(CUP.l + 10, CUP.b); ctx.lineTo(CUP.r - 10, CUP.b); ctx.lineTo(CUP.r, CUP.t); ctx.stroke(); ctx.restore();
    text(ctx, 'a foam cup', (CUP.l + CUP.r) / 2, CUP.t - 22, PAL.muted, { size: 17, align: 'center' });
    text(ctx, cubes === 0 ? 'no ice' : cubes + (cubes === 1 ? ' ice cube, ' : ' ice cubes, ') + fmt(mi.v, 0) + ' g, at 0 °C', (CUP.l + CUP.r) / 2, CUP.b + 30, PAL.ink, { size: 19, align: 'center' });
    text(ctx, fmt(mS, 2) + ' kg of soda' + (allMelts ? '' : ', with ' + fmt((mIce - melted) * 1000, 0) + ' g of ice left'), (CUP.l + CUP.r) / 2, CUP.b + 58, PAL.ink, { size: 19, align: 'center' });
    /* the temperature bar: the soda's starting temperature hollow, the final temperature filled */
    const Yt = (t) => BAR.b - (t / 40) * (BAR.b - BAR.t);
    line(ctx, BAR.x, BAR.t, BAR.x, BAR.b, PAL.muted, 2);
    for (let t = 0; t <= 40; t += 10) { line(ctx, BAR.x - 6, Yt(t), BAR.x + 6, Yt(t), PAL.muted, 2); text(ctx, t + ' °C', BAR.x + 14, Yt(t), PAL.muted, { size: 17 }); }
    if (T - Tf > 0.3) arrow(ctx, BAR.x, Yt(T) - 12, BAR.x, Yt(Tf) + 12, tc, 4);
    dot(ctx, BAR.x, Yt(T), tc, false, 10);
    text(ctx, 'T_soda = ' + fmt(T, 0) + ' °C', BAR.x + 88, Yt(T) - (T - Tf < 3 ? 22 : 0), tc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    dot(ctx, BAR.x, Yt(Tf), tc, true, 10);
    text(ctx, 'T_f = ' + fmt(Tf, 1) + ' °C', BAR.x + 88, Yt(Tf) + (T - Tf < 3 ? 22 : 0), tc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the heat budget: what the soda gives up, against what the ice takes to melt and then to warm */
    text(ctx, 'the soda gives up', HX0, 200, PAL.ink, { size: 20, weight: 600 });
    heatBar(ctx, HX0, HX1, 238, 30, Qsoda / 1000 / MAXKJ, ec, 'Q_soda = ' + fmt(Qsoda / 1000, 1) + ' kJ');
    text(ctx, 'the ice takes, to melt and then to warm', HX0, 322, PAL.ink, { size: 20, weight: 600 });
    const wMelt = Math.min(1, Qmelt / 1000 / MAXKJ) * (HX1 - HX0), wAll = Math.min(1, (Qmelt + Qwarm) / 1000 / MAXKJ) * (HX1 - HX0);
    ctx.save(); ctx.fillStyle = alpha(ec, 0.35); ctx.fillRect(HX0, 345, wMelt, 30); ctx.fillStyle = alpha(ec, 0.15); ctx.fillRect(HX0 + wMelt, 345, wAll - wMelt, 30); ctx.restore();
    if (wMelt > 0) line(ctx, HX0 + wMelt, 345, HX0 + wMelt, 375, ec, 2);
    heatBar(ctx, HX0, HX1, 360, 30, (Qmelt + Qwarm) / 1000 / MAXKJ, ec, 'Q_ice = ' + fmt(Qmelt / 1000, 1) + ' + ' + fmt(Qwarm / 1000, 1) + ' kJ', 'none');
    if (wMelt > 60) text(ctx, 'm_ice L_f', HX0 + wMelt / 2, 400, ec, { size: 17, align: 'center' });
    if (wAll - wMelt > 60) text(ctx, 'm_ice c_W T_f', HX0 + (wMelt + wAll) / 2, 400, ec, { size: 17, align: 'center' });
    kjScale(ctx, HX0, HX1, 440, MAXKJ, 10);
    /* the headline and the readout */
    topline(ctx, cubes === 0 ? 'With no ice in it the soda stays at ' + fmt(T, 0) + ' °C.'
      : allMelts ? (cubes === 1 ? 'One ice cube, ' : cubes + ' ice cubes, ') + fmt(mi.v, 0) + ' g in all, melt' + (cubes === 1 ? 's' : '') + ' in ' + fmt(mS, 2) + ' kg of soda at ' + fmt(T, 0) + ' °C and bring' + (cubes === 1 ? 's' : '') + ' it to ' + fmt(Tf, 1) + ' °C.'
      : 'The soda cannot melt ' + fmt(mi.v, 0) + ' g of ice: it cools to 0 °C having melted ' + fmt(melted * 1000, 0) + ' g, and the rest floats in it.');
    if (cubes === 0) readout(d.readout, `\\kQh = 0`, 'There is no ice to melt, so no heat leaves the soda and its temperature does not change.');
    else if (allMelts) readout(d.readout, `\\kTempf = \\frac{m_{\\text{soda}}c_{\\text{W}}(${fmt(T, 0)}^\\circ\\text{C}) - m_{\\text{ice}}L_{\\text{f}}}{(m_{\\text{soda}} + m_{\\text{ice}})c_{\\text{W}}} = \\frac{${fmt(avail, 0)}\\ \\text{J} - ${fmt(need, 0)}\\ \\text{J}}{${fmt((mS + mIce) * CW, 0)}\\ \\text{J/}{}^\\circ\\text{C}} = ${fmt(Tf, 1)}^\\circ\\text{C}`,
      'The soda gives up ' + fmt(Qsoda / 1000, 1) + ' kJ in cooling from ' + fmt(T, 0) + ' °C to ' + fmt(Tf, 1) + ' °C. Of that, ' + fmt(Qmelt / 1000, 1) + ' kJ melts the ice at 0 °C and the remaining ' + fmt(Qwarm / 1000, 1) + ' kJ warms the meltwater from 0 °C to ' + fmt(Tf, 1) + ' °C, so the two sides of the budget are equal.');
    else readout(d.readout, `\\kTempf = 0^\\circ\\text{C}, \\qquad m_{\\text{melted}} = \\frac{m_{\\text{soda}}c_{\\text{W}}T_{\\text{soda}}}{L_{\\text{f}}} = \\frac{${fmt(avail, 0)}\\ \\text{J}}{${fmt(LF, 0)}\\ \\text{J/kg}} = ${fmt(melted, 3)}\\ \\text{kg}`,
      'Cooling all the way to 0 °C the soda can give up only ' + fmt(avail / 1000, 1) + ' kJ, and melting all the ice would take ' + fmt(need / 1000, 1) + ' kJ. The soda reaches 0 °C first, ' + fmt((mIce - melted) * 1000, 0) + ' g of ice is left, and with nothing warmer than 0 °C in the cup no more heat flows.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
