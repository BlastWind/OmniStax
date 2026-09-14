/* Figures for section 15.3 Introduction to the Second Law of Thermodynamics: Heat Engines and Their Efficiency.
   Boots against the section's text article. Three of the four figures have a clock in them, the
   one-way processes, the four strokes of the engine and the Otto cycle walked round its loop, and
   register a cycle; the heat engine of Figure 15.16 is a balance that answers its sliders and is still. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, labeller, car } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
/* three significant figures for a joule count, without an exponent */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (Number(s) >= 1000 ? String(Math.round(Number(s))) : s); };
/* a broad arrow from (x1, y1) to (x2, y2) whose shaft is w wide: the book draws heat transfer and
   work as arrows whose width is the energy they carry, and so does every figure here */
function wide(ctx, x1, y1, x2, y2, w, color, fill = true) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4 || w < 1) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
  const hw = Math.max(w * 0.9, 12), hl = Math.min(L * 0.45, Math.max(hw * 0.9, 18)), bx = x2 - ux * hl, by = y2 - uy * hl, h = w / 2;
  ctx.save(); ctx.fillStyle = fill ? color : PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x1 + nx * h, y1 + ny * h); ctx.lineTo(bx + nx * h, by + ny * h); ctx.lineTo(bx + nx * hw, by + ny * hw);
  ctx.lineTo(x2, y2); ctx.lineTo(bx - nx * hw, by - ny * hw); ctx.lineTo(bx - nx * h, by - ny * h); ctx.lineTo(x1 - nx * h, y1 - ny * h);
  ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a reservoir: an ink box whose label wears the temperature hue */
function reservoir(ctx, x, y, w, h, label, value) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(x - w / 2, y - h / 2, w, h); ctx.strokeRect(x - w / 2, y - h / 2, w, h); ctx.restore();
  text(ctx, label, x, y - (value ? 14 : 0), C('temperature'), { size: 24, weight: 600, align: 'center' });
  if (value) text(ctx, value, x, y + 16, C('temperature'), { size: 20, weight: 600, align: 'center' });
}
/* the engine of Figures 15.16 and 15.18: a circle between two reservoirs */
function engineCircle(ctx, x, y, r, label) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, label, x, y, PAL.ink, { size: 20, weight: 600, align: 'center' });
}
/* a seeded random sequence, so that a run of molecules is the same on every loop and at every scrub */
function seeded(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
/* free flight in a box: the coordinate after t of a particle from x0 at speed v, reflecting off 0 and L */
function bounce(x0, v, t, L) { const p = 2 * L; let x = ((x0 + v * t) % p + p) % p; return x > L ? p - x : x; }
/* hatching inside a path already traced on the context, in the given colour */
function hatch(ctx, color) {
  ctx.save(); ctx.clip(); ctx.strokeStyle = alpha(color, 0.7); ctx.lineWidth = 2; ctx.beginPath();
  for (let s = -800; s < 1400; s += 14) { ctx.moveTo(s, 800); ctx.lineTo(s + 800, 0); }
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 15.15: three one-way processes on one clock. (a) heat transfer
   crosses from the hotter body to the colder; (b) the car brakes to rest
   and its kinetic energy leaves as heat transfer; (c) a puff of gas spreads
   through a vacuum chamber. The idea is a direction in time, so it moves.
===================================================================== */
(function () {
  const d = sim('sim-one-way', 500);
  const Th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 300, max: 600, step: 5, value: 400, unit: 'K', dec: 0, onInput: reset, aria: 'temperature of the body called hot' });
  const Tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 200, max: 500, step: 5, value: 300, unit: 'K', dec: 0, onInput: reset, aria: 'temperature of the body called cold' });
  const T = 5;
  const cy = cycle(() => T, 1.6);
  function reset() { cy.reset(); }
  /* the molecules of the puff: start near the nozzle in the lower-left corner, fly straight, reflect */
  const rnd = seeded(1503), N = 44;
  const mol = Array.from({ length: N }, () => { const a = rnd() * TAU, s = 90 + 170 * rnd(); return { x0: 18 + 26 * rnd(), y0: 18 + 26 * rnd(), vx: s * Math.cos(a), vy: s * Math.sin(a) }; });
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), f = tau / T, done = tau >= T - 1e-9, cT = C('temperature'), cE = C('energy');
    const hot = Th.v, cold = Tc.v, dT = hot - cold, same = Math.abs(dT) < 1e-9;
    /* headline first, so the panels know where to start */
    const lines = topline(ctx, tau < 1e-9 ? 'Heat transfer is about to cross between the two bodies, the car is at full speed, and the gas is a puff in one corner of the chamber.'
      : done ? 'The car is at rest, its kinetic energy gone to heat transfer at its brakes, and the gas fills the chamber; nothing brings either back on its own.'
      : same ? 'The two bodies are at the same temperature and no heat transfer crosses, while the car is slowing and the gas is spreading through the chamber.'
      : 'Heat transfer goes from the body at ' + Math.max(hot, cold) + ' K to the body at ' + Math.min(hot, cold) + ' K, the car is slowing, and the gas is spreading through the chamber.');
    const top = lines === 2 ? 118 : 96;
    /* ---- (a) two bodies in contact ---- */
    const ax = 40, aw = 400, by = top + 40, bh = 220, bw = 180, gap = 10;
    const lx = ax + 10, rx = ax + 10 + bw + gap;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(lx, by, bw, bh); ctx.strokeRect(lx, by, bw, bh); ctx.fillRect(rx, by, bw, bh); ctx.strokeRect(rx, by, bw, bh); ctx.restore();
    text(ctx, 'T_h = ' + hot + ' K', lx + bw / 2, by - 20, cT, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'T_c = ' + cold + ' K', rx + bw / 2, by - 20, cT, { size: 22, weight: 600, align: 'center' });
    text(ctx, hot > cold ? 'hotter' : hot < cold ? 'colder' : 'equal', lx + bw / 2, by + bh + 24, PAL.muted, { size: 18, align: 'center' });
    text(ctx, hot > cold ? 'colder' : hot < cold ? 'hotter' : 'equal', rx + bw / 2, by + bh + 24, PAL.muted, { size: 18, align: 'center' });
    if (!same) {
      const w = clamp(14 + Math.abs(dT) * 0.22, 14, 80), ym = by + bh / 2;
      const x1 = dT > 0 ? lx + 50 : rx + bw - 50, x2 = dT > 0 ? rx + bw - 50 : lx + 50;
      wide(ctx, x1, ym, x2, ym, w, alpha(cE, 0.85));
      /* the flow: short bars that travel along the shaft */
      ctx.save(); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 3; const L = Math.abs(x2 - x1) - 40, dir = Math.sign(x2 - x1);
      for (let i = 0; i < 6; i++) { const s = ((i * L) / 6 + ((tau * 90) % (L / 6))) % L; const xx = x1 + dir * s; ctx.beginPath(); ctx.moveTo(xx, ym - w / 2 + 4); ctx.lineTo(xx, ym + w / 2 - 4); ctx.stroke(); }
      ctx.restore();
      text(ctx, 'Q', (x1 + x2) / 2, ym - Math.max(w * 0.9, 12) - 20, cE, { size: 24, weight: 600, align: 'center' });
    } else text(ctx, 'no heat transfer', (lx + rx + bw) / 2, by + bh / 2, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
    text(ctx, '(a)', ax + aw / 2, top + 336, PAL.ink, { size: 20, align: 'center' });
    /* ---- (b) the braking car ---- */
    const bx0 = 500, bx1 = 900, road = top + 200;
    line(ctx, bx0 - 10, road, bx1 + 30, road, PAL.muted, 3);
    const xs = bx0 + 40, xe = bx1 - 60, s = 2 * f - f * f;   /* constant deceleration: the fraction of the distance covered */
    const cx = xs + (xe - xs) * s;
    car(ctx, cx, road - 12, PAL.ink, 1.5);
    const lost = s;   /* the fraction of the kinetic energy already turned to heat transfer */
    if (lost > 0.02) {
      const w = 6 + 34 * lost;
      const ex = cx - 36 - 50 * (0.4 + 0.6 * lost), eyy = road + 40 + 30 * lost;
      wide(ctx, cx - 36, road + 6, ex, eyy, w, alpha(cE, 0.85));
      text(ctx, 'Q', ex - 22, eyy + 8, cE, { size: 24, weight: 600, align: 'right' });
    }
    text(ctx, done ? 'at rest' : tau < 1e-9 ? 'moving' : 'braking', cx, road - 70, PAL.ink, { size: 18, align: 'center', bg: PAL.panel });
    text(ctx, 'the brakes convert kinetic energy to heat transfer', (bx0 + bx1) / 2 + 10, top + 60, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '(b)', (bx0 + bx1) / 2 + 10, top + 336, PAL.ink, { size: 20, align: 'center' });
    /* ---- (c) the puff of gas ---- */
    const gx = 980, gy = top + 24, gw = 380, gh = 250;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(gx, gy, gw, gh); ctx.strokeRect(gx, gy, gw, gh); ctx.restore();
    /* the nozzle in the lower-left corner */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(gx + 8, gy + gh - 8); ctx.lineTo(gx + 8, gy + gh - 40); ctx.lineTo(gx + 22, gy + gh - 40); ctx.lineTo(gx + 22, gy + gh - 8); ctx.stroke(); ctx.restore();
    mol.forEach((m) => { const px = bounce(m.x0, m.vx, tau, gw - 16), py = bounce(m.y0, m.vy, tau, gh - 16); dot(ctx, gx + 8 + px, gy + gh - 8 - py, PAL.ink, true, 4.5); });
    text(ctx, done ? 'the gas fills the chamber uniformly' : tau < 1e-9 ? 'a puff of gas in a vacuum chamber' : 'the gas spreads through the vacuum', gx + gw / 2, gy + gh + 24, PAL.muted, { size: 18, align: 'center' });
    text(ctx, '(c)', gx + gw / 2, top + 336, PAL.ink, { size: 20, align: 'center' });
    /* the readout: which way the heat transfer goes */
    readout(d.readout, same ? `\\kTemph = \\kTempc = ${hot}\\ \\text{K}: \\text{ no heat transfer crosses}`
      : dT > 0 ? `\\kQh \\text{ goes from } \\kTemph = ${hot}\\ \\text{K} \\text{ to } \\kTempc = ${cold}\\ \\text{K}`
      : `\\kQh \\text{ goes from } \\kTempc = ${cold}\\ \\text{K} \\text{ to } \\kTemph = ${hot}\\ \\text{K}\\text{, since that body is the hotter one}`,
      'Heat transfer never runs from the cooler body to the hotter, the brakes never cool and set the car moving, and the gas never regroups in the corner.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 15.16: (a) the spontaneous transfer and (b) the heat engine. The
   three arrows of the engine are drawn with widths proportional to Q_h, W
   and Q_c, so the balance W = Q_h − Q_c is a picture. Nothing here has a
   clock: it is a still figure that answers its two sliders.
===================================================================== */
(function () {
  const d = sim('sim-heat-engine', 640);
  const Qh = ctl(d.controls, { label: '\\kQH', cls: 'energy', min: 5, max: 50, step: 0.1, value: 25, unit: 'kJ', dec: 1, aria: 'heat transfer from the hot reservoir' });
  const Qc = ctl(d.controls, { label: '\\kQC', cls: 'energy', min: 0, max: 50, step: 0.1, value: 14.8, unit: 'kJ', dec: 1, aria: 'heat transfer into the cold reservoir' });
  const K = 2.4;   /* arrow width per kilojoule: 50 kJ is 120 units wide */
  function draw() {
    const { ctx } = begin(d.c);
    const qh = Qh.v, qc = Math.min(Qc.v, qh), w = qh - qc, cE = C('energy'), held = Qc.v > qh + 1e-9;
    topline(ctx, qc >= qh - 1e-9 ? 'With Q_c equal to Q_h all ' + fmt(qh, 1) + ' kJ passes through to the cold reservoir and the engine does no work at all, as in (a).'
      : qc < 1e-9 ? 'With Q_c = 0 all ' + fmt(qh, 1) + ' kJ would become work: this is the engine the second law says cannot exist.'
      : 'The engine takes ' + fmt(qh, 1) + ' kJ from the hot reservoir, does ' + fmt(w, 1) + ' kJ of work and passes ' + fmt(qc, 1) + ' kJ to the cold reservoir.');
    const hotY = 140, coldY = 560, rw = 260, rh = 80;
    /* (a) */
    const ax = 330;
    reservoir(ctx, ax, hotY, rw, rh, 'T_h');
    reservoir(ctx, ax, coldY, rw, rh, 'T_c');
    wide(ctx, ax, hotY + rh / 2, ax, coldY - rh / 2 - 4, Math.max(qh * K, 4), alpha(cE, 0.85));
    text(ctx, 'Q = ' + fmt(qh, 1) + ' kJ', ax + Math.max(qh * K * 0.9, 12) + 16, 350, cE, { size: 22, weight: 600 });
    text(ctx, '(a)', ax, 628, PAL.ink, { size: 20, align: 'center' });
    /* (b) */
    const bx = 900, ey = 350, er = 84;
    reservoir(ctx, bx, hotY, rw, rh, 'T_h');
    reservoir(ctx, bx, coldY, rw, rh, 'T_c');
    wide(ctx, bx, hotY + rh / 2, bx, ey - er - 4, Math.max(qh * K, 4), alpha(cE, 0.85));
    text(ctx, 'Q_h = ' + fmt(qh, 1) + ' kJ', bx + Math.max(qh * K * 0.9, 12) + 16, (hotY + rh / 2 + ey - er) / 2, cE, { size: 22, weight: 600 });
    if (qc > 0.05) wide(ctx, bx, ey + er, bx, coldY - rh / 2 - 4, qc * K, alpha(cE, 0.85));
    text(ctx, 'Q_c = ' + fmt(qc, 1) + ' kJ', bx + Math.max(qc * K * 0.9, 12) + 16, (ey + er + coldY - rh / 2) / 2, cE, { size: 22, weight: 600 });
    if (w > 0.05) wide(ctx, bx + er, ey, bx + er + 200, ey, w * K, alpha(cE, 0.85));
    text(ctx, 'W = ' + fmt(w, 1) + ' kJ', bx + er + 100, ey - Math.max(w * K * 0.9, 12) - 18, cE, { size: 22, weight: 600, align: 'center' });
    engineCircle(ctx, bx, ey, er, 'Heat engine');
    text(ctx, '(b)', bx, 628, PAL.ink, { size: 20, align: 'center' });
    if (held) text(ctx, 'Q_c cannot exceed Q_h in an engine: it is held at ' + fmt(qh, 1) + ' kJ', bx + 60, 628, PAL.muted, { size: 17, align: 'left' });
    readout(d.readout, `\\kW = \\kQH - \\kQC = ${fmt(qh, 1)}\\ \\text{kJ} - ${fmt(qc, 1)}\\ \\text{kJ} = ${fmt(w, 1)}\\ \\text{kJ}`,
      qc < 1e-9 ? 'No heat transfer to the cold reservoir would mean every joule taken in becomes work; no cyclical engine can do this.'
        : 'The work is ' + fmt((100 * w) / qh, 1) + '% of the heat transfer from the hot reservoir; the rest, ' + fmt(qc, 1) + ' kJ, goes to the cold reservoir.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.17: the four-stroke gasoline engine, run in order. The piston
   rides its connecting rod on the crankshaft, the valves open on the intake
   and exhaust strokes, the spark fires at the top of the compression, and a
   small PV trace beside the cylinder follows the state of the gas. One cycle
   is two turns of the crank, a sequence in time, so it moves.
===================================================================== */
(function () {
  const d = sim('sim-four-stroke', 860);
  const T = 6;
  const cy = cycle(() => T, 1.0);
  /* the geometry of the cylinder: a stroke of 180 over a clearance of 60, a compression ratio of four */
  const CX = 400, HEAD = 262, BORE = 180, R = 90, L = 230, CROWN = 34, CRANK_Y = 676;
  const pinY = (th) => CRANK_Y - (R * Math.cos(th) + Math.sqrt(L * L - R * R * Math.sin(th) * Math.sin(th)));
  const GAMMA = 1.4;
  /* the molecules of the mixture: fixed relative positions inside the chamber */
  const rnd = seeded(1517), mol = Array.from({ length: 70 }, () => ({ u: 0.06 + 0.88 * rnd(), v: 0.06 + 0.88 * rnd() }));
  const strokeOf = (th) => Math.floor(th / Math.PI) % 4;   /* 0 intake, 1 compression, 2 power, 3 exhaust */
  const NAMES = ['Intake', 'Compression', 'Power', 'Exhaust'];
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), th = (tau / T) * 2 * TAU, k = strokeOf(Math.min(th, 2 * TAU - 1e-6)), cP = C('pressure'), cE = C('energy');
    const py = pinY(th), crown = py - CROWN, vol = crown - HEAD, vmin = pinY(0) - CROWN - HEAD, vmax = pinY(Math.PI) - CROWN - HEAD;
    const ignition = k === 2 && th - 2 * TAU < 0.22;
    topline(ctx, k === 0 ? 'In the intake stroke the intake valve is open and the piston descends, drawing the air-fuel mixture into the cylinder.'
      : k === 1 ? 'In the compression stroke both valves are closed and the piston rises, compressing the mixture in a nearly adiabatic process.'
      : ignition ? 'In the first part of the power stroke the spark ignites the mixture at nearly constant volume and the pressure leaps.'
      : k === 2 ? 'In the second part of the power stroke the hot gas expands nearly adiabatically and does work on the descending piston.'
      : 'In the exhaust stroke the exhaust valve is open and the rising piston expels the hot gas, ready for the next intake.');
    const lab = labeller(ctx, 860); lab.block(0, 0, 1400, 100);
    const wl = CX - BORE / 2, wr = CX + BORE / 2;
    /* the crankcase and the cylinder walls, one outline */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.moveTo(wl - 8, HEAD - 4); ctx.lineTo(wl - 8, 526); ctx.lineTo(CX - 150, 546); ctx.lineTo(CX - 150, 766); ctx.lineTo(CX - 110, 806); ctx.lineTo(CX + 110, 806); ctx.lineTo(CX + 150, 766); ctx.lineTo(CX + 150, 546); ctx.lineTo(wr + 8, 526); ctx.lineTo(wr + 8, HEAD - 4); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.moveTo(wl, HEAD); ctx.lineTo(wl, 526); ctx.lineTo(CX - 144, 546); ctx.lineTo(CX - 144, 764); ctx.lineTo(CX - 108, 800); ctx.lineTo(CX + 108, 800); ctx.lineTo(CX + 144, 764); ctx.lineTo(CX + 144, 546); ctx.lineTo(wr, 526); ctx.lineTo(wr, HEAD); ctx.closePath(); ctx.fill(); ctx.restore();
    /* the head: a plate with two valve seats, an intake pipe to the left and an exhaust pipe to the right */
    const inOpen = k === 0, exOpen = k === 3, vI = CX - 52, vE = CX + 52, seat = 22;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    const plate = (x1, x2) => { ctx.fillRect(x1, HEAD - 30, x2 - x1, 30); ctx.beginPath(); ctx.moveTo(x1, HEAD); ctx.lineTo(x1, HEAD - 30); ctx.lineTo(x2, HEAD - 30); ctx.lineTo(x2, HEAD); ctx.stroke(); };
    plate(wl - 8, vI - seat); plate(vI + seat, vE - seat); plate(vE + seat, wr + 8);
    /* the pipes: from each seat up and outward */
    ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.moveTo(vI - seat, HEAD - 30); ctx.lineTo(vI - seat - 90, HEAD - 84); ctx.lineTo(vI - seat - 90, HEAD - 112); ctx.lineTo(vI + seat - 60, HEAD - 112); ctx.lineTo(vI + seat, HEAD - 30); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(vE + seat, HEAD - 30); ctx.lineTo(vE + seat + 90, HEAD - 84); ctx.lineTo(vE + seat + 90, HEAD - 112); ctx.lineTo(vE - seat + 60, HEAD - 112); ctx.lineTo(vE - seat, HEAD - 30); ctx.closePath(); ctx.fill(); ctx.stroke();
    /* the spark plug in the middle of the head */
    ctx.fillStyle = PAL.ink; ctx.fillRect(CX - 7, HEAD - 80, 14, 52); ctx.fillRect(CX - 14, HEAD - 84, 28, 10); ctx.restore();
    line(ctx, CX, HEAD, CX, HEAD + 14, PAL.ink, 3);
    if (ignition) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; for (let i = 0; i < 8; i++) { const a = (i * TAU) / 8; ctx.beginPath(); ctx.moveTo(CX + 8 * Math.cos(a), HEAD + 18 + 8 * Math.sin(a)); ctx.lineTo(CX + 26 * Math.cos(a), HEAD + 18 + 26 * Math.sin(a)); ctx.stroke(); } ctx.restore(); }
    /* the valves: a stem and a disc that seals the seat when closed and drops into the chamber when open */
    [[vI, inOpen], [vE, exOpen]].forEach(([vx, open]) => {
      const drop = open ? 22 : 0;
      line(ctx, vx, HEAD - 100 + drop, vx, HEAD - 8 + drop, PAL.ink, 6);
      ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(vx - seat - 4, HEAD - 6 + drop); ctx.lineTo(vx + seat + 4, HEAD - 6 + drop); ctx.lineTo(vx + seat - 6, HEAD + 6 + drop); ctx.lineTo(vx - seat + 6, HEAD + 6 + drop); ctx.closePath(); ctx.fill(); ctx.restore();
    });
    /* the gas in the chamber, crowding as the volume shrinks; it enters on the intake and leaves on the exhaust */
    const share = k === 0 || k === 3 ? (vol - vmin) / (vmax - vmin) : 1;
    const nShow = Math.round(70 * clamp(share, 0, 1));
    mol.slice(0, nShow).forEach((m) => dot(ctx, wl + 10 + m.u * (BORE - 20), HEAD + 12 + m.v * Math.max(vol - 24, 2), PAL.ink, true, 4));
    /* the flow through the open pipe */
    if (inOpen) { arrow(ctx, vI - seat - 160, HEAD - 98, vI - seat - 100, HEAD - 98, PAL.ink, 4); text(ctx, 'air and fuel', vI - seat - 168, HEAD - 98, PAL.ink, { size: 18, align: 'right' }); }
    if (exOpen) { arrow(ctx, vE + seat + 100, HEAD - 98, vE + seat + 160, HEAD - 98, PAL.ink, 4); text(ctx, 'exhaust', vE + seat + 168, HEAD - 98, PAL.ink, { size: 18 }); }
    /* the crank, the rod and the piston */
    const cpx = CX + R * Math.sin(th), cpy = CRANK_Y - R * Math.cos(th);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.beginPath(); ctx.arc(CX, CRANK_Y, R, 0, TAU); ctx.stroke(); ctx.restore();
    line(ctx, CX, CRANK_Y, cpx, cpy, PAL.ink, 14);
    line(ctx, cpx, cpy, CX, py, PAL.muted, 12);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.fillRect(wl + 3, crown, BORE - 6, CROWN + 30); ctx.strokeRect(wl + 3, crown, BORE - 6, CROWN + 30); ctx.restore();
    dot(ctx, CX, py, PAL.ink, true, 9); dot(ctx, cpx, cpy, PAL.ink, true, 10); dot(ctx, CX, CRANK_Y, PAL.ink, false, 14);
    /* the piston's direction and the crank's turn */
    const down = k === 0 || k === 2;
    arrow(ctx, CX - 50, crown + 18 + (down ? 0 : 34), CX - 50, crown + 18 + (down ? 34 : 0), PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(CX, CRANK_Y, R + 26, -1.25, -0.25); ctx.stroke(); ctx.restore();
    arrow(ctx, CX + (R + 26) * Math.cos(-0.3), CRANK_Y + (R + 26) * Math.sin(-0.3), CX + (R + 26) * Math.cos(-0.12), CRANK_Y + (R + 26) * Math.sin(-0.12), PAL.ink, 3);
    /* labels, once each, leadered where the slot is taken */
    lab.add('piston', wr + 12, crown + 32, 1, 0, PAL.ink, 18);
    lab.add('crankshaft', CX + 20, CRANK_Y + 36, 1, 0.5, PAL.ink, 18);
    lab.add('intake valve', vI - seat - 60, HEAD - 56, -1, 0, PAL.ink, 18, 30);
    lab.add('exhaust valve', vE + seat + 60, HEAD - 56, 1, 0, PAL.ink, 18, 30);
    lab.add('spark plug', CX, HEAD - 88, 0, -1, PAL.ink, 18, 26);
    text(ctx, NAMES[k] + ' stroke', CX, 838, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* ---- the PV trace beside the cylinder ---- */
    const box = { l: 800, r: 1320, t: 220, b: 660 };
    const P0 = 1, PB = Math.pow(vmax / vmin, GAMMA), PC = 2.4 * PB, PD = PC * Math.pow(vmin / vmax, GAMMA);
    const g = axes(ctx, box, [0, vmax * 1.12], [0, PC * 1.08], { xl: 'V', xc: PAL.ink, yl: 'P', yc: cP, nx: 1, ny: 1, fx: () => '', fy: () => '' });
    const adia = (Pk, Vk) => (V) => Pk * Math.pow(Vk / V, GAMMA);
    curve(ctx, adia(P0, vmax), vmin, vmax, g.X, g.Y, PAL.ink, 3, 60);
    curve(ctx, adia(PC, vmin), vmin, vmax, g.X, g.Y, PAL.ink, 3, 60);
    line(ctx, g.X(vmin), g.Y(PB), g.X(vmin), g.Y(PC), PAL.ink, 3);
    line(ctx, g.X(vmax), g.Y(PD), g.X(vmax), g.Y(P0), PAL.ink, 3);
    line(ctx, g.X(vmin), g.Y(P0), g.X(vmax), g.Y(P0), alpha(PAL.ink, 0.5), 2, [8, 8]);   /* the intake and exhaust strokes, at the outside pressure */
    text(ctx, 'A', g.X(vmax) + 16, g.Y(P0) + 12, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'B', g.X(vmin) - 16, g.Y(PB), PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'C', g.X(vmin) - 16, g.Y(PC), PAL.ink, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'D', g.X(vmax) + 16, g.Y(PD) - 12, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'dashed: the intake and exhaust strokes, at the outside pressure', box.l, box.b + 58, PAL.muted, { size: 17 });
    text(ctx, 'the Otto cycle of Figure 15.18', box.r, box.t - 24, PAL.ink, { size: 20, weight: 600, align: 'right' });
    /* the state of the gas now */
    const P = k === 1 ? adia(P0, vmax)(vol) : k === 2 ? (ignition ? PB + (PC - PB) * clamp((th - 2 * TAU) / 0.22, 0, 1) : adia(PC, vmin)(vol)) : P0;
    dot(ctx, g.X(vol), g.Y(P), cP, true, 10);
    lab.flush();
    /* the readout: the relation on the current stroke */
    const paths = ['the intake stroke, with the exhaust, takes the place of the return path DA at the lower temperature', 'work is done on the gas: this is path AB of the Otto cycle', 'heat transfer Q_h enters at nearly constant volume: path BC', 'the gas does work on the piston: path CD', 'the hot gas leaves and heat transfer Q_c goes with it: the cycle returns to A'];
    const i = ignition ? 2 : k === 2 ? 3 : k === 3 ? 4 : k;
    readout(d.readout, k === 0 ? '\\text{In the intake stroke air is mixed with fuel as the piston descends.}'
      : k === 1 ? '\\text{The compression stroke is nearly adiabatic, so } \\kQh = 0 \\text{ and } \\kdEint = -\\kW \\text{ with } \\kW < 0'
      : ignition ? '\\text{At ignition the mixture burns at nearly constant volume and the pressure leaps.}'
      : k === 2 ? '\\text{The power stroke is nearly adiabatic, so } \\kQh = 0 \\text{ and } \\kdEint = -\\kW \\text{ with } \\kW > 0'
      : '\\text{In the exhaust stroke the hot gas is expelled through the exhaust valve.}', 'In the Otto cycle, ' + paths[i] + '.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 15.18 + 15.19: the Otto cycle walked round its loop on a PV
   diagram, with the engine it describes beside it. The temperature at A,
   where the compression begins, and at C, where the power stroke begins,
   are the sliders; the area inside the loop is the net work, and it grows
   as the two temperatures are pulled apart, which is Figure 15.19.
===================================================================== */
(function () {
  const d = sim('sim-otto', 660);
  const Tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 250, max: 400, step: 5, value: 300, unit: 'K', dec: 0, onInput: reset, aria: 'temperature at A, where the compression begins' });
  const Th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 1000, max: 2500, step: 10, value: 1800, unit: 'K', dec: 0, onInput: reset, aria: 'temperature at C, where the power stroke begins' });
  const T = 5, LEG = T / 4;
  const cy = cycle(() => T, 1.6);
  function reset() { cy.reset(); }
  /* the gas: a fixed charge of air, the amount that fills 0.500 L at 1.00 atm and 300 K, compressed to a quarter of that volume */
  const RGAS = 8.314, GAMMA = 1.4, r = 4, VA = 0.5, VB = VA / r;   /* volumes in L, pressures in MPa */
  const n = (0.101325e6 * VA * 1e-3) / (RGAS * 300), nCv = n * 2.5 * RGAS;
  function state() {
    const TA = Tc.v, TCc = Th.v, PA = (n * RGAS * TA) / (VA * 1e-3) / 1e6;
    const TB = TA * Math.pow(r, GAMMA - 1), TD = TCc * Math.pow(r, 1 - GAMMA);
    const PB = PA * Math.pow(r, GAMMA), PC = PB * (TCc / TB), PD = PA * (TD / TA);
    return { TA, TB, TC: TCc, TD, PA, PB, PC, PD, Qh: nCv * (TCc - TB), Qc: nCv * (TD - TA), Wab: nCv * (TB - TA), Wcd: nCv * (TCc - TD) };
  }
  const adia = (Pk, Vk) => (V) => Pk * Math.pow(Vk / V, GAMMA);
  /* the fixed axes: 0 to 0.6 L and 0 to 4 MPa hold every state of the sliders */
  const box = { l: 130, r: 860, t: 120, b: 560 };
  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), tau = cy.now(), done = tau >= T - 1e-9, leg = Math.min(3, Math.floor(tau / LEG)), f = clamp((tau - leg * LEG) / LEG, 0, 1);
    const cP = C('pressure'), cE = C('energy'), W = s.Qh - s.Qc;
    const PA = s.PA, lower = adia(PA, VA), upper = adia(s.PC, VB);
    topline(ctx, done ? 'Round the cycle the net work is the area inside the loop, ' + sig3(W) + ' J, the ' + sig3(s.Qh) + ' J taken in along BC less the ' + sig3(s.Qc) + ' J given out along DA.'
      : leg === 0 ? 'Along path AB the gas is compressed adiabatically from ' + fmt(VA, 3) + ' L to ' + fmt(VB, 3) + ' L and ' + sig3(s.Wab) + ' J of work is done on it.'
      : leg === 1 ? 'Along path BC heat transfer Q_h = ' + sig3(s.Qh) + ' J enters at constant volume and the pressure leaps to ' + fmt(s.PC, 2) + ' MPa.'
      : leg === 2 ? 'Along path CD the gas expands adiabatically and does ' + sig3(s.Wcd) + ' J of work on the outside world, more than the ' + sig3(s.Wab) + ' J done on it along AB.'
      : 'Along path DA heat transfer Q_c = ' + sig3(s.Qc) + ' J leaves at constant volume and the gas returns to its original state.');
    const g = axes(ctx, box, [0, 0.6], [0, 4], { xl: 'V (L)', xc: PAL.ink, yl: 'P (MPa)', yc: cP, nx: 6, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    /* how far each leg has been walked */
    const fAB = leg > 0 ? 1 : f, fBC = leg > 1 ? 1 : leg === 1 ? f : 0, fCD = leg > 2 ? 1 : leg === 2 ? f : 0, fDA = leg === 3 ? f : 0;
    const vAB = VA - (VA - VB) * fAB, vCD = VB + (VA - VB) * fCD;
    /* the work done on the gas along AB: the area under AB, hatched */
    if (fAB > 0) {
      ctx.save(); ctx.beginPath(); ctx.moveTo(g.X(VA), g.Y(0)); ctx.lineTo(g.X(VA), g.Y(PA));
      for (let i = 1; i <= 60; i++) { const V = VA - (VA - vAB) * (i / 60); ctx.lineTo(g.X(V), g.Y(lower(V))); }
      ctx.lineTo(g.X(vAB), g.Y(0)); ctx.closePath(); hatch(ctx, cE); ctx.restore();
    }
    /* the work the gas does along CD beyond what was done on it: the loop, filled as CD is walked */
    if (fCD > 0) {
      ctx.save(); ctx.fillStyle = alpha(cE, 0.35); ctx.beginPath(); ctx.moveTo(g.X(VB), g.Y(s.PC));
      for (let i = 1; i <= 60; i++) { const V = VB + (vCD - VB) * (i / 60); ctx.lineTo(g.X(V), g.Y(upper(V))); }
      for (let i = 60; i >= 0; i--) { const V = VB + (vCD - VB) * (i / 60); ctx.lineTo(g.X(V), g.Y(lower(V))); }
      ctx.closePath(); ctx.fill(); ctx.restore();
    }
    /* the paths, the walked part in full ink and the rest faint */
    curve(ctx, lower, VB, VA, g.X, g.Y, alpha(PAL.ink, 0.3), 3, 60);
    curve(ctx, upper, VB, VA, g.X, g.Y, alpha(PAL.ink, 0.3), 3, 60);
    line(ctx, g.X(VB), g.Y(s.PB), g.X(VB), g.Y(s.PC), alpha(PAL.ink, 0.3), 3);
    line(ctx, g.X(VA), g.Y(s.PD), g.X(VA), g.Y(PA), alpha(PAL.ink, 0.3), 3);
    if (fAB > 0) curve(ctx, lower, vAB, VA, g.X, g.Y, PAL.ink, 5, 60);
    if (fBC > 0) line(ctx, g.X(VB), g.Y(s.PB), g.X(VB), g.Y(s.PB + (s.PC - s.PB) * fBC), PAL.ink, 5);
    if (fCD > 0) curve(ctx, upper, VB, vCD, g.X, g.Y, PAL.ink, 5, 60);
    if (fDA > 0) line(ctx, g.X(VA), g.Y(s.PD), g.X(VA), g.Y(s.PD - (s.PD - PA) * fDA), PAL.ink, 5);
    /* the dashed drops to the volume axis and the corner labels */
    line(ctx, g.X(VB), g.Y(s.PC), g.X(VB), g.Y(0), alpha(PAL.ink, 0.5), 2, [6, 8]);
    line(ctx, g.X(VA), g.Y(s.PD), g.X(VA), g.Y(0), alpha(PAL.ink, 0.5), 2, [6, 8]);
    [['A', VA, PA, 16, 16], ['B', VB, s.PB, -16, 10], ['C', VB, s.PC, -16, -8], ['D', VA, s.PD, 16, -16]].forEach(([n, V, P, dx, dy]) => {
      dot(ctx, g.X(V), g.Y(P), PAL.ink, true, 7);
      text(ctx, n, g.X(V) + dx, g.Y(P) + dy, PAL.ink, { size: 22, weight: 600, align: dx < 0 ? 'right' : 'left', bg: PAL.panel });
    });
    text(ctx, 'adiabats', g.X(0.3), g.Y(upper(0.3)) - 26, PAL.ink, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    line(ctx, g.X(0.3), g.Y(upper(0.3)) - 14, g.X(0.3), g.Y(upper(0.3)) - 4, PAL.ink, 2);
    line(ctx, g.X(0.3) + 30, g.Y(upper(0.3)) - 14, g.X(0.31), g.Y(lower(0.31)) - 4, PAL.ink, 2);
    /* a legend for the two areas, in the empty top-left corner of the frame */
    const lx = box.l + 22, ly = box.t + 22;
    ctx.save(); ctx.fillStyle = alpha(cE, 0.35); ctx.fillRect(lx, ly - 10, 36, 20); ctx.restore();
    text(ctx, 'net work, the area inside ABCDA', lx + 48, ly, cE, { size: 17, weight: 600 });
    ctx.save(); ctx.beginPath(); ctx.rect(lx, ly + 22, 36, 20); hatch(ctx, cE); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(cE, 0.7); ctx.lineWidth = 1.5; ctx.strokeRect(lx, ly + 22, 36, 20); ctx.restore();
    text(ctx, 'work done on the gas along AB', lx + 48, ly + 32, cE, { size: 17, weight: 600 });
    /* the heat transfers: Q_h into BC, Q_c out of DA, each an arrow whose width is the energy */
    const KW = 0.07;   /* arrow width per joule: 600 J is 42 units */
    const yBC = g.Y((s.PB + s.PC) / 2), yDA = g.Y((s.PD + PA) / 2);
    if (fBC > 0) { wide(ctx, g.X(VB) - 130, yBC, g.X(VB) - 12, yBC, s.Qh * KW, alpha(cE, 0.85)); text(ctx, 'Q_h = ' + sig3(s.Qh) + ' J', g.X(VB) - 70, yBC - Math.max(s.Qh * KW * 0.9, 12) - 16, cE, { size: 20, weight: 600, align: 'center' }); }
    if (fDA > 0) { wide(ctx, g.X(VA) + 14, yDA, g.X(VA) + 130, yDA, s.Qc * KW, alpha(cE, 0.85)); text(ctx, 'Q_c = ' + sig3(s.Qc) + ' J', g.X(VA) + 140, yDA, cE, { size: 20, weight: 600 }); }
    /* the state point */
    const V = leg === 0 ? vAB : leg === 1 ? VB : leg === 2 ? vCD : VA;
    const P = leg === 0 ? lower(V) : leg === 1 ? s.PB + (s.PC - s.PB) * f : leg === 2 ? upper(V) : s.PD - (s.PD - PA) * f;
    dot(ctx, g.X(V), g.Y(P), cP, true, 10);
    /* ---- the engine beside the diagram ---- */
    const ex = 1160, hotY = 140, coldY = 580, rw = 220, rh = 76, ey = 355, er = 80, K2 = 0.12;
    reservoir(ctx, ex, hotY, rw, rh, 'T_h');
    reservoir(ctx, ex, coldY, rw, rh, 'T_c');
    const on = (which) => (done || leg === which ? 0.85 : 0.3);
    wide(ctx, ex, hotY + rh / 2, ex, ey - er - 4, Math.max(s.Qh * K2, 4), alpha(cE, on(1)));
    text(ctx, 'Q_h = ' + sig3(s.Qh) + ' J', ex + Math.max(s.Qh * K2 * 0.9, 12) + 14, (hotY + rh / 2 + ey - er) / 2, cE, { size: 20, weight: 600 });
    wide(ctx, ex, ey + er, ex, coldY - rh / 2 - 4, Math.max(s.Qc * K2, 4), alpha(cE, on(3)));
    text(ctx, 'Q_c = ' + sig3(s.Qc) + ' J', ex + Math.max(s.Qc * K2 * 0.9, 12) + 14, (ey + er + coldY - rh / 2) / 2, cE, { size: 20, weight: 600 });
    wide(ctx, ex + er, ey, ex + er + 130, ey, Math.max(W * K2, 4), alpha(cE, done || leg === 0 || leg === 2 ? 0.85 : 0.3));
    text(ctx, 'W = ' + sig3(W) + ' J', ex + er + 65, ey - Math.max(W * K2 * 0.9, 12) - 16, cE, { size: 20, weight: 600, align: 'center' });
    engineCircle(ctx, ex, ey, er, 'Heat engine');
    readout(d.readout, `\\kW = \\kQH - \\kQC = ${sig3(s.Qh)}\\ \\text{J} - ${sig3(s.Qc)}\\ \\text{J} = ${sig3(W)}\\ \\text{J}`,
      'The area inside ABCDA is the net work: the area under CD is the ' + sig3(s.Wcd) + ' J the gas does, and the hatched area under AB is the ' + sig3(s.Wab) + ' J done on it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
