/* Figures for section 14.2 Temperature Change and Heat Capacity. Boots against the section's text article.
   The section is about amounts of heat, and an amount has no clock in it,
   so both figures here are still pictures: neither registers a cycle,
   neither carries a transport, and a control's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, register, begin, line, arrow, dot, text, topline, hbracket, axes, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a number to n significant figures, written out in full (3.87, 41.9, 167, 0.320) */
const sig = (v, n = 3) => { if (Math.abs(v) < 1e-12) return '0'; const d = Math.max(0, n - 1 - Math.floor(Math.log10(Math.abs(v)))); return v.toFixed(d); };
/* a temperature as the book writes one: one decimal below 100 °C, none from 100 °C on */
const degC = (T) => (Math.abs(T) >= 99.95 ? fmt(T, 0) : fmt(T, 1));
const degTex = (T) => degC(T) + '^\\circ\\text{C}';
const JKGC = '\\ \\text{J/(kg}\\cdot{}^\\circ\\text{C)}';
/* the specific heats of Table 14.1, solids and liquids, in J/(kg·°C); the human body is not a cylinder and is left out */
const SUBST = [
  { n: 'Aluminum', c: 900, p: 'solid' }, { n: 'Asbestos', c: 800, p: 'solid' }, { n: 'Concrete, granite', c: 840, p: 'solid' },
  { n: 'Copper', c: 387, p: 'solid' }, { n: 'Glass', c: 840, p: 'solid' }, { n: 'Gold', c: 129, p: 'solid' },
  { n: 'Ice', c: 2090, p: 'solid' }, { n: 'Iron, steel', c: 452, p: 'solid' }, { n: 'Lead', c: 128, p: 'solid' },
  { n: 'Silver', c: 235, p: 'solid' }, { n: 'Wood', c: 1700, p: 'solid' },
  { n: 'Benzene', c: 1740, p: 'liquid' }, { n: 'Ethanol', c: 2450, p: 'liquid' }, { n: 'Glycerin', c: 2410, p: 'liquid' },
  { n: 'Mercury', c: 139, p: 'liquid' }, { n: 'Water', c: 4186, p: 'liquid' },
];
const rowOf = (name) => SUBST.find((r) => r.n === name);
const lower = (s) => s.charAt(0).toLowerCase() + s.slice(1);
/* the book's wavy heat arrow, running from x1 to x2 at height y and ending in a head */
function heatArrow(ctx, x1, x2, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.beginPath();
  for (let x = x1; x <= x2 - 18; x += 2) { const yy = y + 8 * Math.sin(((x - x1) / 26) * TAU); if (x === x1) ctx.moveTo(x, yy); else ctx.lineTo(x, yy); }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - 20, y, x2, y, color, 4);
}
/* a cylinder standing on its end, its side between x and x + w, its base at yb and h tall; a liquid is drawn
   in an open container filled nearly to the brim, a solid as the block itself */
function cylinder(ctx, x, yb, w, h, liquid) {
  const rx = w / 2, ry = w * 0.16, cx = x + rx, yt = yb - h;
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink;
  if (!liquid) {
    ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.moveTo(x, yt); ctx.lineTo(x, yb); ctx.ellipse(cx, yb, rx, ry, 0, Math.PI, 0, true); ctx.lineTo(x + w, yt); ctx.ellipse(cx, yt, rx, ry, 0, 0, Math.PI, false); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.ellipse(cx, yt, rx, ry, 0, 0, TAU); ctx.fill(); ctx.stroke();
  } else {
    const ys = yt + h * 0.12;                                   /* the surface of the liquid, a little below the brim */
    ctx.fillStyle = alpha(PAL.ink, 0.1);
    ctx.beginPath(); ctx.moveTo(x, ys); ctx.lineTo(x, yb); ctx.ellipse(cx, yb, rx, ry, 0, Math.PI, 0, true); ctx.lineTo(x + w, ys); ctx.ellipse(cx, ys, rx, ry, 0, 0, Math.PI, false); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx, ys, rx, ry, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(x, yt); ctx.lineTo(x, yb); ctx.ellipse(cx, yb, rx, ry, 0, Math.PI, 0, true); ctx.lineTo(x + w, yt); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx, yt, rx, ry, 0, 0, TAU); ctx.stroke();
  }
  ctx.restore();
}

/* =====================================================================
   FIGURE 14.4: the three factors, one copper cylinder against one the
   reader sets. The reference is 1.00 kg of copper warmed by 10.0 °C; the
   second cylinder takes its mass, its temperature change and its substance
   from the controls, and a bar of heat beside each is drawn to one fixed
   scale. Still: an amount of heat has no clock in it, and the wavy arrow
   is the book's notation for heat delivered, drawn once and not animated.
===================================================================== */
(function () {
  const d = sim('sim-three-factors', 660);
  const ms = ctl(d.controls, { label: 'm', cls: '', min: 0.5, max: 2, step: 0.05, value: 1, unit: 'kg', dec: 2, aria: 'the mass of the lower cylinder', detents: [{ v: 1, label: 'm' }, { v: 2, label: '2m' }] });
  const ts = ctl(d.controls, { label: '\\kdTemp', cls: 'temperature', min: 5, max: 20, step: 0.5, value: 10, unit: '°C', dec: 1, aria: 'the temperature change of the lower cylinder', detents: [{ v: 10, label: 'ΔT' }, { v: 20, label: '2ΔT' }] });
  const sub = select(d.controls, { label: '\\text{the substance}', options: SUBST.map((r) => ({ value: r.n, label: r.n })), value: 'Water', aria: 'the substance of the lower cylinder' });
  /* the reference: copper, 1.00 kg, 10.0 °C, so Q = 3.87 kJ; the bar scale is fixed from the largest heat the
     controls reach, 2.00 kg of water through 20.0 °C, which is 43.3 Q and ends inside the canvas at 22 units per Q */
  const REF = { n: 'Copper', c: 387, m: 1, dT: 10 }, QREF = REF.m * REF.c * REF.dT;
  /* each cylinder stands on a fixed base and grows upward with its mass, so the lower one never reaches the upper one's labels */
  const KQ = 22, X0 = 400, CX = 190, CW = 110, YA = 178, YB = 460, BA = 228, BB = 560;
  function row(ctx, y, yb, r, m, dT, Q, primed, ec, tc) {
    const h = 100 * m;
    heatArrow(ctx, 50, CX - 8, y, ec);
    text(ctx, primed ? 'Q′' : 'Q', 108, y - 30, ec, { size: 24, weight: 600, align: 'center' });
    cylinder(ctx, CX, yb, CW, h, r.p === 'liquid');
    text(ctx, lower(r.n), CX + CW / 2, yb + 32, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'm = ' + fmt(m, 2) + ' kg', CX + CW / 2, yb + 58, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'ΔT = ' + fmt(dT, 1) + ' °C', CX + CW / 2, yb + 84, tc, { size: 19, weight: 600, align: 'center' });
    /* the bar of heat, and its reading beside it or, where the bar runs far, above its end */
    const w = (Q / QREF) * KQ, xe = X0 + w;
    ctx.save(); ctx.fillStyle = alpha(ec, 0.35); ctx.fillRect(X0, y - 20, w, 40); ctx.restore();
    line(ctx, xe, y - 20, xe, y + 20, ec, 3);
    line(ctx, X0, y - 26, X0, y + 26, PAL.muted, 2);
    const lab = (primed ? 'Q′ = ' : 'Q = ') + sig(Q / 1000) + ' kJ' + (primed ? ' = ' + sig(Q / QREF) + ' Q' : '');
    if (xe < 1120) text(ctx, lab, xe + 14, y, ec, { size: 21, weight: 600 });
    else text(ctx, lab, xe, y - 40, ec, { size: 21, weight: 600, align: 'right' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), tc = C('temperature');
    const r = rowOf(sub.value), m = ms.v, dT = ts.v, Q = m * r.c * dT, ratio = Q / QREF;
    /* the scale the two bars share, in multiples of the copper cylinder's heat */
    for (const k of [1, 2, 5, 10, 20, 40]) { const x = X0 + k * KQ; line(ctx, x, 316, x, 334, PAL.muted, 2); if (k !== 2) text(ctx, k === 1 ? 'Q' : k + 'Q', x, 352, PAL.muted, { size: 17, align: 'center' }); }
    line(ctx, X0, 325, X0 + 43.3 * KQ, 325, PAL.rule, 2);
    row(ctx, YA, BA, REF, REF.m, REF.dT, QREF, false, ec, tc);
    row(ctx, YB, BB, r, m, dT, Q, true, ec, tc);
    /* what made the difference, factor by factor */
    const parts = [];
    if (Math.abs(m - REF.m) > 1e-9) parts.push(fmt(m / REF.m, 2) + ' times the mass');
    if (Math.abs(dT - REF.dT) > 1e-9) parts.push(fmt(dT / REF.dT, 2) + ' times the temperature change');
    if (r.n !== REF.n) parts.push('a specific heat ' + sig(r.c / REF.c) + ' times copper’s');
    const same = parts.length === 0;
    topline(ctx, same
      ? fmt(m, 2) + ' kg of copper warmed by ' + fmt(dT, 1) + ' °C takes the same ' + sig(Q / 1000) + ' kJ as the copper cylinder above it.'
      : fmt(m, 2) + ' kg of ' + lower(r.n) + ' warmed by ' + fmt(dT, 1) + ' °C takes ' + sig(Q / 1000) + ' kJ, which is ' + sig(ratio) + ' times the ' + sig(QREF / 1000) + ' kJ that 1.00 kg of copper warmed by 10.0 °C takes.');
    const factors = [fmt(m / REF.m, 2), fmt(dT / REF.dT, 2), sig(r.c / REF.c)];
    readout(d.readout, `\\kQh' = mc\\kdTemp = (${fmt(m, 2)}\\ \\text{kg})(${r.c}${JKGC})(${degTex(dT)}) = ${sig(Q / 1000)}\\ \\text{kJ}`,
      same ? 'This is the copper cylinder above, the same mass through the same temperature change, so it takes the same heat. Double the mass, double the temperature change or pick another substance from the table, and the bar answers.'
        : 'Against the copper cylinder above, which takes Q = ' + sig(QREF / 1000) + ' kJ, this one has ' + parts.join(', ') + ', and the three factors multiply: Q′ = ' + factors.join(' × ') + ' Q = ' + sig(ratio) + ' Q.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: cold water poured into a hot pan, Example 14.3 drawn. Each body is
   a column on a temperature axis whose width is its mass times its
   specific heat, so that the shaded area is the heat it loses or gains,
   and the two areas are equal by construction; the final temperature is
   the level at which they balance. Still: the figure answers where the two
   bodies end, not how they get there.
===================================================================== */
(function () {
  const d = sim('sim-calorimetry', 640);
  const mp = ctl(d.controls, { label: 'm_{\\text{Al}}', cls: '', min: 0.1, max: 2, step: 0.05, value: 0.5, unit: 'kg', dec: 2, aria: 'the mass of the aluminum pan' });
  const tp = ctl(d.controls, { label: '\\kTempi\\text{, pan}', cls: 'temperature', min: 20, max: 300, step: 5, value: 150, unit: '°C', dec: 0, aria: 'the temperature of the pan before the water is poured in' });
  const mw = ctl(d.controls, { label: 'm_{\\text{W}}', cls: '', min: 0.05, max: 1, step: 0.05, value: 0.25, unit: 'kg', dec: 2, aria: 'the mass of the water' });
  const tw = ctl(d.controls, { label: '\\kTempi\\text{, water}', cls: 'temperature', min: 0, max: 100, step: 1, value: 20, unit: '°C', dec: 1, aria: 'the temperature of the water before it is poured' });
  const CAL = 900, CW = 4186;
  /* a heat in kJ with its sign, and a heat that rounds to nothing written as 0 */
  const signed = (J) => (Math.abs(J) < 0.5 ? '0' : (J < 0 ? '−' : '+') + sig(Math.abs(J) / 1000));
  /* The axis is fixed at 0 to 300 °C from the pan's slider maximum. The columns are 0.125 canvas units per J/°C,
     so the widest pair the sliders allow (1800 + 4186 J/°C) ends at 1338, inside the box; the gap between the
     axis and the first column holds the final-temperature label, and the readings stand at the left. */
  const BOX = { l: 420, r: 1360, t: 130, b: 500 }, X0 = 590, KW = 0.125, RX = 40;
  function pan(ctx) {
    /* the pan with water in it on an insulated pad, at the left */
    const x = 90, y = 440, w = 110, h = 56;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fillRect(x + 6, y + 18, w - 12, h - 24); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + w, y + 12); ctx.lineTo(x + w + 40, y + 6); ctx.stroke();
    ctx.restore();
    line(ctx, x + 6, y + 18, x + w - 6, y + 18, PAL.muted, 2);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x - 24, y + h + 4, w + 64, 14); ctx.restore();
    for (let k = x - 20; k < x + w + 40; k += 14) line(ctx, k, y + h + 18, k + 10, y + h + 4, PAL.muted, 1.5);
    text(ctx, 'the pan', x + w / 2, y - 18, PAL.ink, { size: 17, weight: 600, align: 'center' });
    text(ctx, 'the water', x + w / 2, y + 38, PAL.muted, { size: 16, align: 'center' });
    text(ctx, 'an insulated pad', x + w / 2 + 12, y + h + 40, PAL.muted, { size: 16, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy'), tc = C('temperature');
    const a = mp.v * CAL, b = mw.v * CW, Tp = tp.v, Tw = tw.v;
    const Tf = (a * Tp + b * Tw) / (a + b), Qw = b * (Tf - Tw), Qp = a * (Tf - Tp);   /* Qp < 0 when the pan is the hot body */
    const wp = a * KW, ww = b * KW, x1 = X0 + wp, x2 = x1 + ww;
    pan(ctx);
    const { Y } = axes(ctx, BOX, [0, 1], [0, 300], { yl: 'temperature (°C)', yc: tc, nx: 1, ny: 6, fx: () => '' });
    const L = labeller(ctx, 640);
    /* the two columns: the pan's from its start to Tf, the water's from its start to Tf, each named beneath */
    const cp = (X0 + x1) / 2, cw = (x1 + x2) / 2, nx = Math.max(cw, cp + 95);   /* the water's name steps right of the pan's when the columns are narrow */
    for (const [xa, xb, T0, nm, dy, lx] of [[X0, x1, Tp, 'the pan', 30, cp], [x1, x2, Tw, 'the water', 58, nx]]) {
      const yt = Math.min(Y(T0), Y(Tf)), yb = Math.max(Y(T0), Y(Tf));
      ctx.save(); ctx.fillStyle = alpha(ec, 0.35); ctx.fillRect(xa, yt, xb - xa, yb - yt); ctx.restore();
      ctx.save(); ctx.strokeStyle = ec; ctx.lineWidth = 3; ctx.strokeRect(xa, yt, xb - xa, yb - yt); ctx.restore();
      line(ctx, (xa + xb) / 2, BOX.b, lx, BOX.b + dy - 16, PAL.muted, 1.5, [4, 6]);
      text(ctx, nm, lx, BOX.b + dy, PAL.ink, { size: 18, weight: 600, align: 'center' });
    }
    text(ctx, 'the width of each column is its mass times its specific heat, and its shaded area is the heat it loses or gains', (BOX.l + BOX.r) / 2, BOX.b + 96, PAL.muted, { size: 17, align: 'center' });
    /* the final temperature, one level across the whole box, and the two starting temperatures */
    line(ctx, BOX.l, Y(Tf), BOX.r, Y(Tf), tc, 3, [10, 10]);
    dot(ctx, X0 - 1, Y(Tp), tc, false, 9); dot(ctx, x2 + 1, Y(Tw), tc, false, 9);
    /* the readings, in a panel at the left above the drawing of the pan */
    const bx = RX;
    L.block(bx - 10, 118, bx + 200, 364);
    const panHot = Tp >= Tw;                                        /* the book's names follow the bodies: the hotter one's heat is Q_hot */
    const lines = [['the pan', PAL.ink, 600, 19], ['m c = ' + fmt(a, 0) + ' J/°C', PAL.ink, 400, 17], [degC(Tp) + ' °C → ' + degC(Tf) + ' °C', tc, 600, 19], [(panHot ? 'Q_hot = ' : 'Q_cold = ') + signed(Qp) + ' kJ', ec, 600, 19],
      ['the water', PAL.ink, 600, 19], ['m c = ' + fmt(b, 0) + ' J/°C', PAL.ink, 400, 17], [degC(Tw) + ' °C → ' + degC(Tf) + ' °C', tc, 600, 19], [(panHot ? 'Q_cold = ' : 'Q_hot = ') + signed(Qw) + ' kJ', ec, 600, 19]];
    lines.forEach(([s, c, w, sz], i) => text(ctx, s, bx, 132 + i * 29 + (i > 3 ? 14 : 0), c, { size: sz, weight: w, bg: alpha(PAL.panel, 0.85) }));
    L.add('T_f = ' + degC(Tf) + ' °C', BOX.l + 6, Y(Tf), 1, -0.5, tc, 19, 24);
    L.add(degC(Tp) + ' °C', X0 - 6, Y(Tp), -1, 0, tc, 19, 20);
    if (x2 < 1240) L.add(degC(Tw) + ' °C', x2 + 6, Y(Tw), 1, 0.6, tc, 19, 20);
    else L.add(degC(Tw) + ' °C', x2, Y(Tw), -0.5, panHot ? 1 : -1, tc, 19, 24);   /* near the box's edge the label steps under or over the column's corner instead */
    L.flush();
    const hot = Tp > Tw ? 'pan' : 'water', cold = Tp > Tw ? 'water' : 'pan', Th = Math.max(Tp, Tw), Tc = Math.min(Tp, Tw);
    const even = Math.abs(a - b) / Math.max(a, b) < 0.02, wide = a > b ? 'pan' : 'water', k = Math.max(a, b) / Math.min(a, b), Qx = Math.abs(Qw) / 1000;
    topline(ctx, Math.abs(Tp - Tw) < 0.5
      ? 'The pan and the water both start at ' + degC(Tp) + ' °C, so no heat passes between them and nothing changes.'
      : 'The ' + hot + ' at ' + degC(Th) + ' °C and the ' + cold + ' at ' + degC(Tc) + ' °C meet at ' + degC(Tf) + ' °C, '
        + (even ? 'halfway between, because the two have the same mass times specific heat.' : (k > 2 ? 'much nearer the ' : 'nearer the ') + wide + ', whose mass times specific heat is the larger.'));
    const boil = Tf > 100 ? ' The water would boil before it reached ' + degC(Tf) + ' °C; the calculation assumes no phase change, which the next section takes up.' : '';
    readout(d.readout, `\\kTempf = \\frac{m_{\\text{Al}}c_{\\text{Al}}(${degTex(Tp)}) + m_{\\text{W}}c_{\\text{W}}(${degTex(Tw)})}{m_{\\text{Al}}c_{\\text{Al}} + m_{\\text{W}}c_{\\text{W}}} = \\frac{${fmt(a * Tp + b * Tw, 0)}\\ \\text{J}}{${fmt(a + b, 1)}\\ \\text{J/}^\\circ\\text{C}} = ${degTex(Tf)}`,
      Math.abs(Tp - Tw) < 0.5 ? 'Two bodies at the same temperature are already in thermal equilibrium, so the heat lost and the heat gained are both zero and the two columns have no area.' + boil
        : 'The ' + hot + ' loses ' + sig(Qx) + ' kJ and the ' + cold + ' gains the same ' + sig(Qx) + ' kJ, so the two shaded areas are equal' + (even ? '.' : '. The ' + wide + '’s mass times specific heat is ' + sig(k) + ' times the other’s, so the final temperature lies ' + sig(k) + ' times nearer the ' + wide + '’s starting temperature than the other’s.') + boil);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
