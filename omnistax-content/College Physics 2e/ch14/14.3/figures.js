/* Figures for section 14.3 Phase Change and Latent Heat. Boots against the section's text article.
   The heating curve and the soda are about an amount of heat and the state
   it produces, not a rate, so they are still pictures that answer their
   sliders; the molecules of Figure 14.8 move as the book's arrows say. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, register, cycle, begin, line, arrow, dot, text, headline, topline, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

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
  const inside = over || x0 + w + 14 + F.measure(ctx, label, { size: 20, weight: 600 }) > 1385;   /* a label that would run past the stage sits inside the bar's end */
  text(ctx, label, over ? x1 - 66 : inside ? x0 + w - 14 : x0 + w + 14, y, color, { size: 20, weight: 600, align: inside ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
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
/* =====================================================================
   FIGURE 14.8: the molecules of a solid, a liquid and a gas, and the
   energy that each transition costs. The book's arrows on the molecules
   are motion, so the molecules move: the solid's jiggle inside their
   limits, the liquid's wander close together, the gas's fly and bounce.
   The arrows between the phases are notation for a transition and stay.
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
  const sub = select(d.controls, { label: '\\text{the substance}', options: Object.keys(SUBS).map((k) => ({ value: k, label: SUBS[k].name })), value: 'water', aria: 'the substance from Table 14.2', onInput: () => cy.reset() });
  const ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 0.1, max: 2, step: 0.05, value: 1, unit: 'kg', dec: 2, aria: 'the mass of the sample', onInput: () => cy.reset() });
  const T = 5, cy = cycle(() => T, 1.2), w = (k, t) => TAU * k * t / T;   /* integer k: every loop closes on itself */
  /* the three panels and the fixed positions of the particles in them */
  const PANEL = { t: 110, b: 470 }, SOL = { l: 50, r: 390 }, LIQ = { l: 530, r: 870 }, GAS = { l: 1010, r: 1350 };
  const rnd = seeded(7);
  const wob = (k0, k1) => ({ kx: k0 + Math.floor(rnd() * (k1 - k0 + 1)), ky: k0 + Math.floor(rnd() * (k1 - k0 + 1)), px: rnd() * TAU, py: rnd() * TAU, tilt: rnd() * TAU });
  /* the solid: each particle shakes about its lattice point, never more than AS from it */
  const AS = 9, solid = []; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) solid.push({ x: SOL.l + 44 + i * 84, y: PANEL.t + 44 + j * 84, ...wob(3, 5) });
  const atSolid = (p, t) => [p.x + AS * Math.sin(w(p.kx, t) + p.px), p.y + AS * Math.sin(w(p.ky, t) + p.py)];
  /* the liquid: each particle wanders a closed loop about AL across, near its neighbours (they never touch) */
  const AL = 30, liquid = [[70, 64], [180, 58], [280, 84], [56, 170], [150, 150], [262, 190], [90, 280], [196, 262], [280, 296]].map(([x, y]) => ({ x: LIQ.l + x, y: PANEL.t + y, ...wob(1, 2) }));
  const atLiquid = (p, t) => [p.x + AL * Math.sin(w(p.kx, t) + p.px), p.y + AL * Math.cos(w(p.ky, t) + p.py)];
  /* the gas: free flight, bouncing off the walls and off one another, worked out once at
     steps of DT so the same time always draws the same frame */
  const DT = 1 / 120, GR = 20, GD = 30, gas = [[40, 50], [200, 40], [300, 90], [90, 170], [240, 200], [40, 300], [180, 320], [300, 260]].map(([x, y]) => {
    const a = rnd() * TAU, v = 170 + rnd() * 70; return { x: GAS.l + x, y: PANEL.t + y, vx: v * Math.cos(a), vy: v * Math.sin(a), path: [], tilt: rnd() * TAU, spin: (rnd() - 0.5) * 6 };
  });
  for (let n = 0; n <= T / DT; n++) {
    for (const p of gas) p.path.push([p.x, p.y]);
    for (const p of gas) {
      p.x += p.vx * DT; p.y += p.vy * DT;
      if (p.x < GAS.l + GR) { p.x = GAS.l + GR; p.vx = Math.abs(p.vx); } if (p.x > GAS.r - GR) { p.x = GAS.r - GR; p.vx = -Math.abs(p.vx); }
      if (p.y < PANEL.t + GR) { p.y = PANEL.t + GR; p.vy = Math.abs(p.vy); } if (p.y > PANEL.b - GR) { p.y = PANEL.b - GR; p.vy = -Math.abs(p.vy); }
    }
    for (let i = 0; i < gas.length; i++) for (let j = i + 1; j < gas.length; j++) {   /* equal masses: swap the velocity parts along the line of centres */
      const a = gas[i], b = gas[j], dx = b.x - a.x, dy = b.y - a.y, r = Math.hypot(dx, dy);
      if (r >= GD || r === 0) continue; const nx = dx / r, ny = dy / r, u = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
      if (u < 0) { a.vx += u * nx; a.vy += u * ny; b.vx -= u * nx; b.vy -= u * ny; }
    }
  }
  const atGas = (p, t) => p.path[Math.max(0, Math.min(p.path.length - 1, Math.round(t / DT)))];
  /* a faint trace of where a particle has just been, the book's arrow in motion */
  function trail(ctx, at, p, t, span) {
    const t0 = Math.max(0, t - span); if (t - t0 < 0.02) return;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.beginPath();
    for (let k = 0; k <= 16; k++) { const [x, y] = at(p, t0 + (t - t0) * k / 16); k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
  }
  const MAXKJ = 5000, BX0 = 330, BX1 = 1330;             /* the fixed scale of the two heat bars: 0 to 5000 kJ */
  function panel(ctx, box, name) {
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(box.l, PANEL.t, box.r - box.l, PANEL.b - PANEL.t); ctx.restore();
    text(ctx, name, (box.l + box.r) / 2, PANEL.b + 26, PAL.ink, { size: 22, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), s = SUBS[sub.value], m = ms.v, Qf = m * s.Lf, Qv = m * s.Lv, t = cy.now();
    panel(ctx, SOL, 'solid'); panel(ctx, LIQ, 'liquid'); panel(ctx, GAS, 'gas');
    /* the solid: a lattice held by springs, each particle moving within a small limit */
    const sp = solid.map((p) => atSolid(p, t));
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const [x, y] = sp[i * 4 + j];
      if (i < 3) spring(ctx, x, y, ...sp[(i + 1) * 4 + j], 18);
      if (j < 3) spring(ctx, x, y, ...sp[i * 4 + j + 1], 18);
    }
    { const p = solid[10]; ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(p.x, p.y, 34, 0, TAU); ctx.stroke(); ctx.restore(); }
    solid.forEach((p, i) => particle(ctx, s, sp[i][0], sp[i][1], 13, p.tilt + 0.15 * Math.sin(w(p.kx, t))));
    text(ctx, 'limits of motion', SOL.r - 10, PANEL.b - 16, PAL.muted, { size: 17, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the liquid: close but free, each particle wandering */
    for (const p of liquid) trail(ctx, atLiquid, p, t, 0.6);
    for (const p of liquid) { const [x, y] = atLiquid(p, t); particle(ctx, s, x, y, 13, p.tilt + 0.8 * Math.sin(w(p.ky, t))); }
    /* the gas: far apart and in flight */
    for (const p of gas) trail(ctx, atGas, p, t, 0.35);
    for (const p of gas) { const [x, y] = atGas(p, t); particle(ctx, s, x, y, 13, p.tilt + p.spin * t); }
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
    readout(d.readout, `\\kQh = \\km\\kLf = (${fmt(m, 2)}\\ \\text{kg})(${s.Lf}\\ \\text{kJ/kg}) = ${fmt(Qf, Qf < 100 ? 1 : 0)}\\ \\text{kJ} \\qquad \\kQh = \\km\\kLv = (${fmt(m, 2)}\\ \\text{kg})(${s.Lv}\\ \\text{kJ/kg}) = ${fmt(Qv, Qv < 100 ? 1 : 0)}\\ \\text{kJ}`,
      s.name.charAt(0).toUpperCase() + s.name.slice(1) + ' melts at ' + s.mp + ' °C and boils at ' + s.bp + ' °C at atmospheric pressure. The same ' + fmt(Qf, Qf < 100 ? 1 : 0) + ' kJ must be removed to freeze the liquid again and the same ' + fmt(Qv, Qv < 100 ? 1 : 0) + ' kJ to condense the gas, and the temperature does not change while either transition is under way.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
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
  const qs = ctl(d.controls, { label: '\\Delta Q/m', cls: '', min: 0, max: 3200, step: 5, value: 200, unit: 'kJ/kg', dec: 0, aria: 'the heat added per kilogram of the sample', specials: [{ at: C_ICE * 20, label: 'melting' }, { at: C_ICE * 20 + L_F, label: 'melted' }, { at: C_ICE * 20 + L_F + C_W * 100, label: 'boiling' }, { at: C_ICE * 20 + L_F + C_W * 100 + L_V, label: 'boiled' }] });
  const ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 0.1, max: 2, step: 0.05, value: 1, unit: 'kg', dec: 2, aria: 'the mass of the sample' });
  const T0 = -20, Q1 = C_ICE * 20, Q2 = Q1 + L_F, Q3 = Q2 + C_W * 100, Q4 = Q3 + L_V;   /* the corners of the curve, kJ/kg */
  /* the state of one kilogram after q kJ/kg: its temperature and the fraction that is ice, water and steam */
  function state(q) {
    if (q <= Q1) return { T: T0 + q / C_ICE, ice: 1, water: 0, steam: 0, stage: 0 };
    if (q <= Q2) { const f = (q - Q1) / L_F; return { T: 0, ice: 1 - f, water: f, steam: 0, stage: 1 }; }
    if (q <= Q3) return { T: (q - Q2) / C_W, ice: 0, water: 1, steam: 0, stage: 2 };
    if (q <= Q4) { const f = (q - Q3) / L_V; return { T: 100, ice: 0, water: 1 - f, steam: f, stage: 3 }; }
    return { T: 100 + (q - Q4) / C_STEAM, ice: 0, water: 0, steam: 1, stage: 4 };
  }
  const ro = F.readout(d);
  let was = 0;
  const box = { l: 440, r: 1340, t: 132, b: 500 };            /* fixed axes: 0 to 3200 kJ/kg, −20 to 180 °C */
  const CUP = { l: 90, r: 310, t: 150, b: 520 };
  const rnd = seeded(3), wisps = Array.from({ length: 36 }, () => ({ x: rnd(), y: rnd() }));
  function container(ctx, st) {
    const rs = F.ref('sample'), inner = CUP.b - CUP.t - 12, condensed = st.ice + st.water, fillH = inner * 0.78 * condensed;
    const yTop = CUP.b - 6 - fillH;
    /* the water, and the ice floating on it as blocks filling the upper part of the contents */
    if (st.water > 0.002) { ctx.save(); ctx.fillStyle = alpha(rs, 0.18); ctx.fillRect(CUP.l + 6, yTop, CUP.r - CUP.l - 12, fillH); ctx.restore(); }
    if (st.ice > 0.002) {
      const iceH = fillH * (st.ice / condensed);
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = rs; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.rect(CUP.l + 6, yTop, CUP.r - CUP.l - 12, iceH); ctx.clip();
      for (let y = yTop; y < yTop + iceH; y += 34) for (let x = CUP.l + 6; x < CUP.r - 6; x += 52) { ctx.fillRect(x + 2, y + 2, 48, 30); ctx.strokeRect(x + 2, y + 2, 48, 30); }
      ctx.restore();
    }
    /* the steam, as a scatter of small marks in the space above the contents */
    if (st.steam > 0.002) {
      const n = Math.round(36 * st.steam), top = CUP.t + 10, span = yTop - 20 - top;
      ctx.save(); ctx.fillStyle = alpha(rs, 0.45);
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
    text(ctx, parts.join(' · '), (CUP.l + CUP.r) / 2, CUP.b + 34, F.ref('sample'), { size: 19, align: 'center' });
    text(ctx, 'T = ' + num(st.T, st.stage === 1 || st.stage === 3 ? 0 : 1) + ' °C', (CUP.l + CUP.r) / 2, CUP.b + 64, tc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'in an insulated container', (CUP.l + CUP.r) / 2, CUP.t - 22, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'm = ' + fmt(m, 2) + ' kg', (CUP.l + CUP.r) / 2, CUP.b + 94, C('mass'), { size: 19, weight: 600, align: 'center' });
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
    const kJ = (v) => fmt(v, v < 100 ? 1 : 0), kg = fmt(m, 2), U = (u) => `\\ \\text{${u}}`, CU = '\\ \\text{kJ/kg}\\cdot{}^\\circ\\text{C}';
    /* each stage: the heat already spent (b, its value bv), the stage's own term (t, tv) and the total; on to the next stage
       the spent heat and the stage's term bend together into the next one's spent heat, and back again they bend apart */
    const mk = (k, x) => `\\mk{${k}}{${x}}`;
    const form = [
      () => `${mk('Q', '\\kQh')} = ${mk('t0', '\\km\\kcspec_{\\text{ice}}\\kdTemp')} = ${mk('tv0', `(${kg}${U('kg')})(${fmt(C_ICE, 2)}${CU})(${fmt(st.T - T0, 1)}^\\circ\\text{C})`)} = ${mk('Qv', kJ(Q))}${U('kJ')}`,
      () => `${mk('Q', '\\kQh')} = ${mk('b', '\\km\\kcspec_{\\text{ice}}(20^\\circ\\text{C})')} + ${mk('t1', '\\km_{\\text{melted}}\\kLf')} = ${mk('bv', kJ(m * Q1) + U('kJ'))} + ${mk('tv1', `(${fmt(m * st.water, 2)}${U('kg')})(${fmt(L_F, 0)}${U('kJ/kg')})`)} = ${mk('Qv', kJ(Q))}${U('kJ')}`,
      () => `${mk('Q', '\\kQh')} = ${mk('b', kJ(m * Q2) + U('kJ'))} + ${mk('t2', '\\km\\kcspec_{\\text{w}}\\kdTemp')} = ${mk('bv', kJ(m * Q2) + U('kJ'))} + ${mk('tv2', `(${kg}${U('kg')})(${fmt(C_W, 2)}${CU})(${fmt(st.T, 1)}^\\circ\\text{C})`)} = ${mk('Qv', kJ(Q))}${U('kJ')}`,
      () => `${mk('Q', '\\kQh')} = ${mk('b', kJ(m * Q3) + U('kJ'))} + ${mk('t3', '\\km_{\\text{boiled}}\\kLv')} = ${mk('bv', kJ(m * Q3) + U('kJ'))} + ${mk('tv3', `(${fmt(m * st.steam, 2)}${U('kg')})(${fmt(L_V, 0)}${U('kJ/kg')})`)} = ${mk('Qv', kJ(Q))}${U('kJ')}`,
      () => `${mk('Q', '\\kQh')} = ${mk('b', kJ(m * Q4) + U('kJ'))} + ${mk('t4', '\\km\\kcspec_{\\text{steam}}\\kdTemp')} = ${mk('bv', kJ(m * Q4) + U('kJ'))} + ${mk('tv4', `(${kg}${U('kg')})(${fmt(C_STEAM, 2)}${CU})(${fmt(st.T - 100, 1)}^\\circ\\text{C})`)} = ${mk('Qv', kJ(Q))}${U('kJ')}`,
    ];
    const s0 = was, s1 = st.stage; was = s1;
    const keyMap = s1 === s0 + 1 ? (s0 === 0 ? { t0: 'b', tv0: 'bv' } : { b: 'b', ['t' + s0]: 'b', bv: 'bv', ['tv' + s0]: 'bv' })
      : s1 === s0 - 1 ? (s1 === 0 ? { b: 't0', bv: 'tv0' } : { b: ['b', 't' + s1], bv: ['bv', 'tv' + s1] }) : undefined;
    const smalls = [
      'The ice warms at 0.50 cal/g·°C, which is ' + fmt(C_ICE, 2) + ' kJ/kg·°C, so the first segment of the curve is steep: only ' + fmt(Q1, 1) + ' kJ/kg carries the ice from −20 °C to 0 °C.',
      'Melting the ice takes 79.8 cal/g, which is ' + fmt(L_F, 0) + ' kJ for every kilogram, eight times what warming it through 20 °C took.',
      'The ' + kJ(m * Q2) + ' kJ is what warming and melting the ice took. Water warms at 1.00 cal/g·°C, which is ' + fmt(C_W, 2) + ' kJ/kg·°C, twice the specific heat of ice, so this segment climbs half as steeply as the first.',
      'Boiling the water takes 539 cal/g, which is ' + fmt(L_V, 0) + ' kJ for every kilogram, nearly seven times the heat of melting.',
      'The ' + kJ(m * Q4) + ' kJ is what it took to bring the sample to steam at 100 °C. Steam warms at 0.482 cal/g·°C, which is ' + fmt(C_STEAM, 2) + ' kJ/kg·°C, so the last segment climbs nearly as steeply as the ice did.',
    ];
    ro.set(form[st.stage](), smalls[st.stage], keyMap ? { keyMap } : undefined);
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
  const mi = ctl(d.controls, { label: '\\kmice', cls: 'mass', min: 0, max: 100, step: 1, value: 18, unit: 'g', dec: 0, aria: 'the mass of ice, six grams to a cube', detents: Array.from({ length: 17 }, (_, i) => 6 * i) });
  const msod = ctl(d.controls, { label: '\\kmsoda', cls: 'mass', min: 0.1, max: 0.5, step: 0.01, value: 0.25, unit: 'kg', dec: 2, aria: 'the mass of soda' });
  const Ts = ctl(d.controls, { label: 'T_{\\text{soda}}', cls: 'temperature', min: 1, max: 40, step: 1, value: 20, unit: '°C', dec: 0, aria: 'the starting temperature of the soda' });
  const { formula, note } = F.readout(d);
  const CW = 4186, LF = 334000;                                      /* J/(kg·°C) and J/kg, the example's values */
  const CUP = { l: 120, r: 380, t: 150, b: 520 }, BAR = { x: 450, t: 160, b: 520 }, HX0 = 700, HX1 = 1320, MAXKJ = 40;
  function draw() {
    const { ctx } = begin(d.c);
    const tc = C('temperature'), ec = C('energy'), ri = F.ref('ice'), rs = F.ref('soda'), rc = F.ref('cup');
    const mIce = mi.v / 1000, mS = msod.v, T = Ts.v;
    const avail = mS * CW * T, need = mIce * LF;                      /* what the soda can give before it reaches 0 °C, and what melting all the ice takes */
    const allMelts = need <= avail;
    const Tf = allMelts ? (avail - need) / ((mS + mIce) * CW) : 0;
    const melted = allMelts ? mIce : avail / LF;
    const Qmelt = melted * LF, Qwarm = allMelts ? mIce * CW * Tf : 0, Qsoda = mS * CW * (T - Tf);
    /* the cup, the soda in it and the ice that is still ice floating at its surface; the cubes that have melted are gone */
    const fillH = 120 + 380 * mS, yTop = CUP.b - 6 - fillH;
    ctx.save(); ctx.fillStyle = alpha(rs, 0.2); ctx.fillRect(CUP.l + 6, yTop, CUP.r - CUP.l - 12, fillH); ctx.restore();
    line(ctx, CUP.l + 6, yTop, CUP.r - 6, yTop, rs, 2);
    const cubes = Math.round(mi.v / 6), left = allMelts ? 0 : Math.max(1, Math.round((mIce - melted) / 0.006));
    for (let k = 0; k < left; k++) {
      const col = k % 5, row = Math.floor(k / 5), x = CUP.l + 18 + col * 46, y = yTop - 12 + row * 34;
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = ri; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(x, y, 38, 30, 4); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(CUP.l, CUP.t); ctx.lineTo(CUP.l + 10, CUP.b); ctx.lineTo(CUP.r - 10, CUP.b); ctx.lineTo(CUP.r, CUP.t); ctx.stroke(); ctx.restore();
    text(ctx, 'a foam cup', (CUP.l + CUP.r) / 2, CUP.t - 22, rc, { size: 17, align: 'center' });
    text(ctx, cubes === 0 ? 'no ice' : cubes + (cubes === 1 ? ' ice cube, ' : ' ice cubes, ') + fmt(mi.v, 0) + ' g, at 0 °C' + (cubes > 0 && allMelts ? ', all melted' : ''), (CUP.l + CUP.r) / 2, CUP.b + 30, ri, { size: 19, align: 'center' });
    text(ctx, fmt(mS, 2) + ' kg of soda' + (allMelts ? '' : ', with ' + fmt((mIce - melted) * 1000, 0) + ' g of ice left'), (CUP.l + CUP.r) / 2, CUP.b + 58, rs, { size: 19, align: 'center' });
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
    /* past the mass the soda can just melt, the all-melts formula bends into the one that stops at 0 °C: the soda's side, m_soda c_W T_soda, keeps its place */
    const mk = (k, x) => `\\mk{${k}}{${x}}`, soda = mk('a', `\\kmsoda\\kcW(${fmt(T, 0)}^\\circ\\text{C})`), sodaV = mk('av', `${fmt(avail, 0)}\\ \\text{J}`);
    if (cubes === 0) F.morph(formula, `${mk('Q', '\\kQh')} = ${mk('z', '0')}`);
    else if (allMelts) F.morph(formula, `${mk('Tf', '\\kTempf')} = \\frac{${soda} - ${mk('n', '\\kmice\\kLf')}}{${mk('dn', '(\\kmsoda + \\kmice)\\kcW')}} = \\frac{${sodaV} - ${mk('nv', `${fmt(need, 0)}\\ \\text{J}`)}}{${mk('dv', `${fmt((mS + mIce) * CW, 0)}\\ \\text{J/}{}^\\circ\\text{C}`)}} = ${mk('Tv', fmt(Tf, 1))}^\\circ\\text{C}`);
    else F.morph(formula, `${mk('Tf', '\\kTempf')} = ${mk('Tv', '0')}^\\circ\\text{C}, \\qquad ${mk('mm', '\\km_{\\text{melted}}')} = \\frac{${soda}}{${mk('n', '\\kLf')}} = \\frac{${sodaV}}{${mk('nv', `${fmt(LF, 0)}\\ \\text{J/kg}`)}} = ${mk('mv', fmt(melted, 3))}\\ \\text{kg}`);
    note.textContent = cubes === 0 ? 'There is no ice to melt, so no heat leaves the soda and its temperature does not change.'
      : allMelts ? 'Of the ' + fmt(Qsoda / 1000, 1) + ' kJ the soda gives up, ' + fmt(Qmelt / 1000, 1) + ' kJ melts the ice and ' + fmt(Qwarm / 1000, 1) + ' kJ warms the meltwater to ' + fmt(Tf, 1) + ' °C.'
      : 'Melting all the ice would take ' + fmt(need / 1000, 1) + ' kJ, more than the ' + fmt(avail / 1000, 1) + ' kJ the soda can give before it reaches 0 °C.';
  }
  register(d.fig, { update: () => {}, draw });
})();
};
