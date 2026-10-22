/* Figures for section 19.1 Electric Potential Energy: Potential Difference. Boots against the section's text article.
   The section's one picture is the electrical hill: a charge between two
   plates has a potential energy, the potential is that energy per unit
   charge, and a charge released on the hill trades potential energy for
   kinetic energy as it crosses. Two figures run that crossing once per loop
   (the generic charge of Figure 19.2 and the electron gun of Figure 19.4),
   and the battery of Figure 19.3 runs its electrons without end. The page
   colours voltage, charge, energy and velocity; no field line is drawn, so
   the electric field stays in ink, and the electron, proton and helium
   nucleus take the element palette. The plates, the battery, its terminals
   and the headlight are the section's referents and wear F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const E_CH = 1.60e-19;                                   /* the fundamental charge in coulombs, as the book rounds it */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
/* a number in scientific form for a headline, 5.93 × 10⁶, and for a readout, 5.93 \times 10^{6} */
function sciParts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return m + ' × 10' + sup(e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const { m, e } = sciParts(x, d); return m + ' \\times 10^{' + e + '}'; };
/* a number with the typographic minus for the canvas, and with the LaTeX minus for a readout */
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
const texnum = (v, d) => (v < 0 ? '-' : '') + fmt(Math.abs(v), d);
const signed = (v, d) => (v < 0 ? '-' : '+') + fmt(Math.abs(v), d);
const pct = (s) => Math.round(s * 100);
/* the fraction of the gap a charge released from rest in a uniform field has crossed after the fraction u of its flight time */
const crossed = (u) => Math.min(1, u * u);
/* a metal plate standing on the canvas, its charge signs in the charge hue: a filled bar outlined in its referent's hue with n signs down its middle */
function plate(ctx, x, y1, y2, w, sign, n, color) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.fillRect(x - w / 2, y1, w, y2 - y1); ctx.strokeRect(x - w / 2, y1, w, y2 - y1); ctx.restore();
  for (let i = 0; i < n; i++) text(ctx, sign, x, y1 + ((y2 - y1) * (i + 0.5)) / n, C('charge'), { size: 24, weight: 600, align: 'center' });
}
/* a vertical bar of a signed quantity about a zero line at y0: up for positive, down for negative, capped with a broken top past the range */
function bar(ctx, x, y0, w, px, cap, color, filled) {
  const h = Math.min(Math.abs(px), cap), dir = px < 0 ? 1 : -1, yt = y0 + dir * h;
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = color; ctx.fillStyle = filled ? alpha(color, 0.55) : PAL.panel;
  if (h > 0.5) { ctx.fillRect(x - w / 2, Math.min(y0, yt), w, h); ctx.strokeRect(x - w / 2, Math.min(y0, yt), w, h); }
  if (Math.abs(px) > cap) { ctx.strokeStyle = PAL.panel; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x - w / 2 - 4, yt - dir * 10); ctx.lineTo(x - w / 6, yt - dir * 2); ctx.lineTo(x + w / 6, yt - dir * 18); ctx.lineTo(x + w / 2 + 4, yt - dir * 10); ctx.stroke(); }
  ctx.restore();
}
/* a small particle with its element colour and an ink outline, so hydrogen-light fills read on a light page too */
function particle(ctx, x, y, color, r) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 19.2: the electrical hill. A charge crosses the gap between two
   plates while, beneath, the same gap is drawn as a hill whose height is
   the potential; two bars trade potential energy for kinetic energy. A
   positive charge runs down the hill from A to B, a negative one climbs it
   from B to A. One crossing per loop, so the figure gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-electrical-hill', 640);
  const VA = ctl(d.controls, { label: '\\kVA', cls: 'voltage', min: 10, max: 100, step: 1, value: 50, unit: 'V', dec: 1, onInput: reset, aria: '极板 A 的电势' });
  const Q = ctl(d.controls, { label: '|\\kq|', cls: 'charge', min: 0.5, max: 5, step: 0.1, value: 2, unit: 'µC', dec: 2, onInput: reset, aria: '电荷的大小' });
  const sign = choice(d.controls, { label: '\\text{电荷的正负}', options: [{ value: 'pos', label: '正' }, { value: 'neg', label: '负' }], value: 'pos', aria: '电荷的正负', onInput: reset });
  const T = 4.5;   /* seconds per crossing */
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* the scene: plates at xA and xB, the charge's path between them, the hill beneath on the same x scale */
  const xA = 230, xB = 980, xs = 280, xe = 930, yPath = 230, pT = 118, pB = 330;
  const hill = { t: 400, b: 570 };            /* the hill's band; V from 0 to 100 V, the slider's range, never rescaled */
  const Yv = (v) => hill.b - ((hill.b - hill.t) * v) / 100;
  /* The bars are scaled from the default range, ±250 µJ across the cap, since the widest state
     the sliders reach (5.00 µC through 100.0 V, 500 µJ) would leave the book's 100 µJ a sliver;
     a taller bar is capped and its top drawn broken, and its value is written at the top. */
  const bars = { x1: 1150, x2: 1290, y0: 400, cap: 180, w: 64 };
  const Ypx = (uJ) => (uJ / 250) * bars.cap;
  const barTop = (px) => bars.y0 - Math.sign(px) * Math.min(Math.abs(px), bars.cap);
  function draw() {
    const { ctx } = begin(d.c);
    const pos = sign.value === 'pos', q = (pos ? 1 : -1) * Q.v, Va = VA.v;
    const dV = pos ? 0 - Va : Va - 0;                       /* V_B − V_A for the positive charge, V_A − V_B for the negative one */
    const dPE = q * dV;                                     /* µC × V = µJ, negative either way */
    const u = Math.min(1, cy.now() / T), s = crossed(u), done = u >= 1 - 1e-9, start = cy.now() < 1e-9;
    const x = pos ? xs + (xe - xs) * s : xe - (xe - xs) * s;
    const PEi = pos ? q * Va : 0, PE = PEi + dPE * s, KE = -dPE * s;
    /* the plates and the path */
    const cA = F.ref('plate-a'), cB = F.ref('plate-b');
    plate(ctx, xA, pT, pB, 28, '+', 7, cA); plate(ctx, xB, pT, pB, 28, '−', 7, cB);
    text(ctx, 'A', xA + 46, pT + 16, cA, { size: 24, weight: 600, align: 'center' }); text(ctx, 'B', xB - 46, pT + 16, cB, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'V_A = ' + fmt(Va, 1) + ' V', xA - 26, yPath, C('voltage'), { size: 22, weight: 600, align: 'right' });
    text(ctx, 'V_B = 0', xB + 26, yPath, C('voltage'), { size: 22, weight: 600 });
    line(ctx, xs, yPath, xe, yPath, alpha(PAL.ink, 0.35), 2, [6, 10]);
    if (s > 0.02) arrow(ctx, pos ? xs : xe, yPath + 50, x, yPath + 50, PAL.ink, 3);
    text(ctx, pos ? '从 A 到 B' : '从 B 到 A', (xs + xe) / 2, yPath + 78, PAL.muted, { size: 17, align: 'center' });
    /* the hill: the potential across the gap, its height in the voltage hue, the ground beneath it soft */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(xA, Yv(Va)); ctx.lineTo(xB, Yv(0)); ctx.lineTo(xB, hill.b); ctx.lineTo(xA, hill.b); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, xA, hill.b, xB, hill.b, PAL.muted, 2);
    line(ctx, xA, hill.t - 10, xA, hill.b, PAL.muted, 2);
    [0, 50, 100].forEach((v) => { line(ctx, xA - 8, Yv(v), xA, Yv(v), PAL.muted, 2); text(ctx, v + ' V', xA - 14, Yv(v), C('voltage'), { size: 17, align: 'right' }); });
    text(ctx, 'V', xA - 14, hill.t - 26, C('voltage'), { size: 24, weight: 600, align: 'right' });
    line(ctx, xA, Yv(Va), xB, Yv(0), C('voltage'), 5);
    text(ctx, '电势“山坡”：空隙两侧的电势', (xA + xB) / 2, hill.b + 30, PAL.muted, { size: 17, align: 'center' });
    line(ctx, 1060, hill.t - 40, 1060, hill.b + 10, PAL.rule, 1.5);
    /* the marker on the hill under the charge, tied to it by a drop line */
    const yh = Yv(Va * (1 - (x - xA) / (xB - xA)));
    line(ctx, x, yPath + 66, x, yh - 14, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, x, yh, C('charge'), true, 11);
    /* the charge itself */
    dot(ctx, x, yPath, C('charge'), true, 15);
    text(ctx, pos ? '+q' : '−q', x, yPath - 32, C('charge'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    /* the energy bars, PE and KE about a common zero */
    line(ctx, bars.x1 - 50, bars.y0, bars.x2 + 50, bars.y0, PAL.muted, 2);
    text(ctx, '0', bars.x1 - 58, bars.y0, PAL.muted, { size: 17, align: 'right' });
    bar(ctx, bars.x1, bars.y0, bars.w, Ypx(PE), bars.cap, C('energy'), false);
    bar(ctx, bars.x2, bars.y0, bars.w, Ypx(KE), bars.cap, C('energy'), true);
    text(ctx, 'PE', bars.x1, bars.y0 + bars.cap + 30, C('energy'), { size: 22, weight: 600, align: 'center' });
    text(ctx, 'KE', bars.x2, bars.y0 + bars.cap + 30, C('energy'), { size: 22, weight: 600, align: 'center' });
    /* each value sits just past the end of its own bar, above a bar that stands up and below one that hangs down */
    [[bars.x1, PE], [bars.x2, KE]].forEach(([bx, e]) => {
      const px = Ypx(e), yt = barTop(px), up = px >= 0;
      text(ctx, num(e, 0) + ' µJ', bx, up ? yt - 20 : yt + 20, C('energy'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    });
    text(ctx, '电荷的能量', (bars.x1 + bars.x2) / 2, bars.y0 - bars.cap - 56, PAL.muted, { size: 17, align: 'center' });
    const uJ = fmt(Math.abs(dPE), 0);
    topline(ctx, start
      ? (pos ? '正电荷静止在极板 A 处，其势能比它在极板 B 处高出 ' + uJ + ' µJ。'
        : '负电荷静止在极板 B 处，那里 $\\kVB = 0$，所以它的势能为零。')
      : done
        ? (pos ? '到达极板 B 时，全部的 ' + uJ + ' µJ 都变成了动能：对电荷所做的功为 $\\kW = -\\kdPE$ = ' + uJ + ' µJ。'
          : '到达极板 A 时，它的势能为 −' + uJ + ' µJ，动能为 ' + uJ + ' µJ：对负电荷来说，电势上坡就是能量下坡。')
        : (pos ? '正电荷从 A 处释放，已穿过空隙的 ' + pct(s) + '%，其 ' + uJ + ' µJ 势能中有 ' + pct(s) + '% 已变成动能。'
          : '负电荷从 B 处释放，沿山坡向 A 上行：走完 ' + pct(s) + '% 的路程时，它的势能已减少 ' + fmt(KE, 0) + ' µJ，动能增加了同样的量。'));
    readout(d.readout, `\\kdPE = \\kq\\kdV = (${signed(q, 2)}\\ \\mu\\text{C})(${signed(dV, 1)}\\ \\text{V}) = ${texnum(dPE, 0)}\\ \\mu\\text{J}`,
      pos ? '电荷经过 $\\kdV = \\kVB - \\kVA$，它是负的。'
        : '电荷经过 $\\kdV = \\kVA - \\kVB$，它是正的，而电荷是负的，所以 $\\kdPE$ 照样是负的。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 19.3: the battery and the headlight. Electrons leave the negative
   terminal A, pass through the headlight and return to the positive
   terminal B; the stream is thicker and faster when more charge moves each
   second. The flow has no end, so the transport has no scrubber.
===================================================================== */
(function () {
  const d = sim('sim-battery-headlight', 580);
  const dV = ctl(d.controls, { label: '\\kdV', cls: 'voltage', min: 1.5, max: 24, step: 0.1, value: 12, unit: 'V', dec: 1, detents: [{ v: 1.5, label: '1.5' }, { v: 12, label: '12' }, { v: 24, label: '24' }], snap: true, aria: '电池电压' });
  const P = ctl(d.controls, { label: '\\kdPE', cls: 'energy', min: 5, max: 60, step: 0.5, value: 30, unit: 'J 每秒', dec: 1, aria: '前照灯每秒消耗的能量' });
  const cy = cycle(() => Infinity, 0);
  /* the circuit: terminal A at the battery's left, B at its right, the wires up and across to the headlight */
  const bat = { l: 200, r: 620, t: 340, b: 520 }, tA = { x: 270, y: bat.t }, tB = { x: 550, y: bat.t };
  const lamp = { x: 1010, y: 170 };
  const path = [[tA.x, tA.y - 10], [tA.x, 130], [lamp.x - 40, 130], [lamp.x, lamp.y], [lamp.x - 40, 210], [tB.x, 210], [tB.x, tB.y - 10]];
  const segs = path.slice(1).map((p, i) => { const a = path[i]; return { a, b: p, L: Math.hypot(p[0] - a[0], p[1] - a[1]) }; });
  const total = segs.reduce((s, g) => s + g.L, 0);
  const along = (t) => { let r = t; for (const g of segs) { if (r <= g.L) { const k = r / g.L; return [g.a[0] + (g.b[0] - g.a[0]) * k, g.a[1] + (g.b[1] - g.a[1]) * k]; } r -= g.L; } return path[path.length - 1]; };
  function draw() {
    const { ctx } = begin(d.c);
    const q = -P.v / dV.v, ne = Math.abs(q) / E_CH, k = Math.abs(q) / 2.5;   /* the stream's density and speed against the book's 2.50 C */
    const tau = isFinite(cy.now()) ? cy.now() : 0;
    const cBat = F.ref('battery'), cLamp = F.ref('headlight'), cTA = F.ref('terminal-a'), cTB = F.ref('terminal-b');
    /* the battery: a box with a cap band, its voltage on its face */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = cBat; ctx.lineWidth = 3;
    ctx.fillRect(bat.l, bat.t, bat.r - bat.l, bat.b - bat.t); ctx.strokeRect(bat.l, bat.t, bat.r - bat.l, bat.b - bat.t);
    ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(bat.l, bat.t, bat.r - bat.l, 26); ctx.restore();
    line(ctx, bat.l, bat.t + 26, bat.r, bat.t + 26, cBat, 2);
    for (let i = 1; i < 6; i++) line(ctx, bat.l + 30 + i * 40, bat.t + 60, bat.l + 30 + i * 40, bat.b - 30, alpha(PAL.ink, 0.25), 3);
    text(ctx, 'ΔV = ' + fmt(dV.v, 1) + ' V', (bat.l + bat.r) / 2 + 40, (bat.t + bat.b) / 2 + 14, C('voltage'), { size: 26, weight: 600, align: 'center', bg: PAL.soft });
    text(ctx, '电池', (bat.l + bat.r) / 2 + 40, bat.b - 24, cBat, { size: 17, align: 'center' });
    /* the terminals with their signs and potentials */
    [[tA, '−', 'A', 'V_A = 0', cTA], [tB, '+', 'B', 'V_B = +' + fmt(dV.v, 1) + ' V', cTB]].forEach(([t, sg, nm, v, ct]) => {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = ct; ctx.lineWidth = 3; ctx.fillRect(t.x - 16, t.y - 12, 32, 20); ctx.strokeRect(t.x - 16, t.y - 12, 32, 20); ctx.restore();
      text(ctx, sg, t.x, t.y - 1, C('charge'), { size: 22, weight: 600, align: 'center' });
      text(ctx, nm, t.x + (nm === 'A' ? -34 : 34), t.y - 26, ct, { size: 24, weight: 600, align: 'center' });
      text(ctx, v, t.x + (nm === 'A' ? -34 : 34), t.y - 62, C('voltage'), { size: 19, weight: 600, align: nm === 'A' ? 'right' : 'left', bg: PAL.panel });
    });
    /* the wires, then the headlight: a reflector opening to the right with a filament at the wire's end */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); path.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = cLamp; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(lamp.x + 20, lamp.y - 46); ctx.quadraticCurveTo(lamp.x - 40, lamp.y, lamp.x + 20, lamp.y + 46); ctx.lineTo(lamp.x + 140, lamp.y + 74); ctx.quadraticCurveTo(lamp.x + 176, lamp.y, lamp.x + 140, lamp.y - 74); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(lamp.x + 4, lamp.y - 10); for (let i = 0; i < 4; i++) ctx.lineTo(lamp.x + 12 + (i % 2 ? 0 : 14), lamp.y - 10 + i * 7); ctx.stroke(); ctx.restore();
    const rays = 7, rl = 40 + 110 * (P.v / 60);
    for (let i = 0; i < rays; i++) { const a = -0.55 + (1.1 * i) / (rays - 1), x0 = lamp.x + 158, y0 = lamp.y + 60 * Math.sin(a); line(ctx, x0 + 8 * Math.cos(a), y0, x0 + rl * Math.cos(a), y0 + rl * 0.55 * Math.sin(a), alpha(PAL.ink, 0.4), 3); }
    text(ctx, '前照灯', lamp.x + 80, lamp.y + 104, cLamp, { size: 22, weight: 600, align: 'center' });
    /* the stream of electrons along the wires, spaced by the charge moved each second and moving at the same rate */
    const gap = Math.max(30, Math.min(150, 90 / k)), speed = 40 + 130 * k, shift = (tau * speed) % gap, n = Math.floor((total - shift) / gap) + 1;
    for (let i = 0; i < n; i++) { const p = along(Math.min(total, shift + i * gap)); particle(ctx, p[0], p[1], F.el('e-'), 8); }
    text(ctx, '−q', tA.x + 30, 168, C('charge'), { size: 22, weight: 600, bg: PAL.panel });
    arrow(ctx, tA.x + 34, 250, tA.x + 34, 210, PAL.ink, 3);
    arrow(ctx, tB.x - 34, 258, tB.x - 34, 298, PAL.ink, 3);
    text(ctx, '−q', tB.x - 30, 236, C('charge'), { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    /* the count each second, on a panel to the right of the battery */
    const px = 760, py = 350;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.fillRect(px, py, 600, 170); ctx.strokeRect(px, py, 600, 170); ctx.restore();
    text(ctx, '每秒', px + 20, py + 30, PAL.muted, { size: 17 });
    text(ctx, 'ΔPE = −' + fmt(P.v, 1) + ' J，即前照灯消耗的能量', px + 20, py + 66, C('energy'), { size: 21, weight: 600 });
    text(ctx, 'q = ΔPE/ΔV = ' + num(q, 2) + ' C 从 A 移到 B', px + 20, py + 104, C('charge'), { size: 21, weight: 600 });
    text(ctx, 'n_e = ' + sci(ne, 2) + ' 个电子', px + 20, py + 142, PAL.ink, { size: 21, weight: 600 });
    topline(ctx, '电池每秒使 ' + num(q, 2) + ' C 的电荷，即 ' + sci(ne, 2) + ' 个电子，通过前照灯，它的势能减少 ' + fmt(P.v, 1) + ' J。');
    readout(d.readout, `\\kq = \\frac{\\kdPE}{\\kdV} = \\frac{-${fmt(P.v, 1)}\\ \\text{J}}{+${fmt(dV.v, 1)}\\ \\text{V}} = ${texnum(q, 2)}\\ \\text{C}`,
      '电子从 A 走到 B，所以 $\\kdV = \\kVB - \\kVA$ 是正的而 $\\kq$ 是负的，$\\kdPE$ 是电池失去的能量。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 19.4: the electron gun. A particle leaves the plate that repels it
   and is accelerated to the plate that attracts it; a bar beside the plates
   shows its kinetic energy growing to qV, and its velocity arrow grows with
   it. One crossing per loop, so the figure gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-electron-gun', 600);
  const V = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 10, max: 5000, step: 10, value: 100, unit: 'V', dec: 0, detents: [{ v: 100, label: '100' }, { v: 1000, label: '1000' }, { v: 5000, label: '5000' }], snap: true, onInput: reset, aria: '极板之间的电压' });
  const PARTICLES = {
    e: { name: '电子', label: 'e⁻', z: -1, m: 9.11e-31, mTex: '9.11 \\times 10^{-31}', el: 'e-', article: '电子' },
    p: { name: '质子', label: 'p⁺', z: 1, m: 1.67e-27, mTex: '1.67 \\times 10^{-27}', el: 'p+', article: '质子' },
    he: { name: '氦原子核', label: 'He²⁺', z: 2, m: 6.64e-27, mTex: '6.64 \\times 10^{-27}', el: 'He', article: '氦原子核' },
  };
  const which = choice(d.controls, { label: '\\text{粒子}', options: [{ value: 'e', label: '电子' }, { value: 'p', label: '质子' }, { value: 'he', label: '氦原子核 (2e)' }], value: 'e', aria: '粒子', onInput: reset });
  const T = 4.5;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const xA = 380, xB = 900, pT = 130, pB = 470, yPath = 300, xs = 430, xe = 850;
  const kb = { x: 1120, t: 150, b: 520, w: 70 };   /* the KE bar, full at qV whatever the voltage: the reading is in the readout */
  const gauge = { y: 548, len: 280 };              /* the speed, drawn as an arrow of its own under the plates: at the particle it would run into the far plate */
  function draw() {
    const { ctx } = begin(d.c);
    const p = PARTICLES[which.value], neg = p.z < 0;
    const u = Math.min(1, cy.now() / T), s = crossed(u), done = u >= 1 - 1e-9, start = cy.now() < 1e-9;
    const KEeV = Math.abs(p.z) * V.v, KEJ = KEeV * E_CH, v = Math.sqrt((2 * KEJ) / p.m), c = 3.00e8;
    const x = neg ? xs + (xe - xs) * s : xe - (xe - xs) * s;   /* the electron leaves A, a positive particle leaves B */
    /* the plates: A negative, B positive, as the book draws them */
    const cA = F.ref('gun-plate-a'), cB = F.ref('gun-plate-b');
    plate(ctx, xA, pT, pB, 26, '−', 9, cA); plate(ctx, xB, pT, pB, 26, '+', 9, cB);
    text(ctx, 'A', xA + 46, pT + 16, cA, { size: 24, weight: 600, align: 'center' }); text(ctx, 'B', xB - 46, pT + 16, cB, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'V_A = −' + fmt(V.v, 0) + ' V', xA - 26, yPath - 70, C('voltage'), { size: 22, weight: 600, align: 'right' });
    text(ctx, 'V_B = 0', xB + 26, yPath - 70, C('voltage'), { size: 22, weight: 600 });
    text(ctx, 'V = ' + fmt(V.v, 0) + ' V（两板之间）', (xA + xB) / 2, pB + 30, C('voltage'), { size: 19, weight: 600, align: 'center' });
    line(ctx, xs, yPath, xe, yPath, alpha(PAL.ink, 0.35), 2, [6, 10]);
    text(ctx, neg ? '从 A 到 B' : '从 B 到 A', (xs + xe) / 2, yPath + 60, PAL.muted, { size: 17, align: 'center' });
    /* the speed, which grows in step with the time of flight: an arrow of its own beneath the plates, so that it never runs into them */
    const dir = neg ? 1 : -1, len = gauge.len * u, gx = (xA + xB) / 2;
    if (len > 8) arrow(ctx, gx - (dir * len) / 2, gauge.y, gx + (dir * len) / 2, gauge.y, C('velocity'), 5);
    else dot(ctx, gx, gauge.y, C('velocity'), true, 5);
    text(ctx, 'v = ' + sci(Math.sqrt((2 * KEJ * s) / p.m) || 0, 2) + ' m/s', gx, gauge.y + 28, C('velocity'), { size: 19, weight: 600, align: 'center' });
    particle(ctx, x, yPath, F.el(p.el), 14);
    text(ctx, p.label, x, yPath - 34, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the kinetic energy bar, full at qV */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.fillRect(kb.x - kb.w / 2, kb.t, kb.w, kb.b - kb.t); ctx.strokeRect(kb.x - kb.w / 2, kb.t, kb.w, kb.b - kb.t); ctx.restore();
    const h = (kb.b - kb.t) * s;
    if (h > 0.5) { ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.55); ctx.fillRect(kb.x - kb.w / 2, kb.b - h, kb.w, h); ctx.restore(); line(ctx, kb.x - kb.w / 2, kb.b - h, kb.x + kb.w / 2, kb.b - h, C('energy'), 4); }
    text(ctx, 'KE', kb.x, kb.b + 30, C('energy'), { size: 22, weight: 600, align: 'center' });
    text(ctx, '0', kb.x + kb.w / 2 + 12, kb.b, PAL.muted, { size: 17 });
    text(ctx, 'qV = ' + fmt(KEeV, 0) + ' eV', kb.x + kb.w / 2 + 12, kb.t, C('energy'), { size: 19, weight: 600 });
    text(ctx, fmt(KEeV * s, 0) + ' eV', kb.x, Math.max(kb.t + 16, kb.b - h - 18), C('energy'), { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, '获得的动能', kb.x, kb.b + 64, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, start
      ? p.article + '静止在极板 ' + (neg ? 'A' : 'B') + ' 处，即将经过 ' + fmt(V.v, 0) + ' V 加速。'
      : done
        ? p.article + '到达极板 ' + (neg ? 'B' : 'A') + ' 时带有 ' + fmt(KEeV, 0) + ' eV，即 ' + sci(KEJ, 2) + ' J，速率为 ' + sci(v, 2) + ' m/s。'
        : p.article + '已穿过空隙的 ' + pct(s) + '%，已获得 ' + fmt(KEeV * s, 0) + ' eV（共 ' + fmt(KEeV, 0) + ' eV）。');
    const qTex = (neg ? '-' : '+') + (Math.abs(p.z) === 1 ? '1.60' : '3.20') + ' \\times 10^{-19}';
    const VTex = (neg ? '-' : '+') + fmt(V.v, 0);
    readout(d.readout, `\\kKEf = \\kq\\kV = (${qTex}\\ \\text{C})(${VTex}\\ \\text{V}) = ${fmt(KEeV, 0)}\\ \\text{eV} = ${sciTex(KEJ, 2)}\\ \\text{J}`,
      '它的末速率为 $\\kv = \\sqrt{2\\kq\\kV/m} = ' + sciTex(v, 2) + '\\ \\text{m/s}$（$m = ' + sciTex(p.m, 2) + '\\ \\text{kg}$）'
      + (v > 0.1 * c ? '，是光速的 ' + Math.round((100 * v) / c) + '%，此时相对论效应开始变得重要。' : '。'));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
