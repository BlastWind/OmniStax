/* Figures for section 20.1 Current. Boots against the section's text article.
   Four figures carry the section's six drawings. Two of them move, because
   the section's two ideas are rates: a current is a charge crossing an area
   in a time, and a drift velocity is a crawl that has to be told apart from
   a signal running at nearly the speed of light. The other two are still,
   because a closed circuit carrying a steady current and a shaded segment of
   wire are states rather than motions. The page binds current, charge, time,
   velocity and electric-field; the free-charge density n, the area A, the
   wire's diameter D and the factor the drift is drawn at are untyped and
   stay in ink, and every carrier is drawn from the element palette, its sign
   told by its label and its direction and never by a hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, headline, hbracket, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const QE = 1.60e-19;                     /* the magnitude of the fundamental charge, as the book rounds it */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sciParts(x, dec) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(dec), e }; }
const sci = (x, dec = 2) => { if (!x) return '0'; const { m, e } = sciParts(x, dec); return m + ' × 10' + sup(e); };
const sciTex = (x, dec = 2) => { if (!x) return '0'; const { m, e } = sciParts(x, dec); return m + ' \\times 10^{' + e + '}'; };
/* a carrier: an element-palette fill with an ink outline, so a light fill reads on a light page too */
function carrier(ctx, x, y, color, r) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a length of wire seen a little from the side: a band with a rounded end, drawn in ink on the panel */
function wireBody(ctx, l, r, t, b) {
  const ry = (b - t) / 2, cy = (t + b) / 2;
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(l, t); ctx.lineTo(r, t); ctx.ellipse(r, cy, 16, ry, 0, -Math.PI / 2, Math.PI / 2); ctx.lineTo(l, b);
  ctx.ellipse(l, cy, 16, ry, 0, Math.PI / 2, -Math.PI / 2); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the plane of a cross-section, drawn as the ellipse the wire cuts there */
function crossSection(ctx, x, t, b, color, fill) {
  const ry = (b - t) / 2, cy = (t + b) / 2;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.setLineDash([9, 8]);
  ctx.beginPath(); ctx.ellipse(x, cy, 16, ry, 0, 0, TAU);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  ctx.stroke(); ctx.restore();
}
/* a panel of readings under a figure, with its heading */
function panel(ctx, x, y, w, h) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5;
  ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h); ctx.restore();
}

/* =====================================================================
   FIGURE 20.2 + 20.4: the wire and its carriers. One cross-section of a
   wire is marked, the carriers cross it, and a counter beside the wire adds
   up the charge that has passed and the time it has taken. The carriers are
   positive charges, electrons, or both signs at once, and the conventional
   current runs the same way in all three cases. Moving, because a current
   is a rate: one loop is the time Δt, and the counter fills to ΔQ as it
   runs, which is the definition drawn.
===================================================================== */
(function () {
  const d = sim('sim-current-in-a-wire', 620);
  const dQ = ctl(d.controls, { label: '\\kdQch', cls: 'charge', min: 20, max: 800, step: 5, value: 720, unit: 'C', dec: 0, aria: 'the charge that crosses the area' });
  const dT = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.5, max: 8, step: 0.25, value: 4, unit: 's', dec: 2, onInput: () => cy.reset(), aria: 'the time the charge takes to cross' });
  const who = choice(d.controls, {
    label: '\\text{the carriers}',
    options: [{ value: 'pos', label: 'positive charges' }, { value: 'neg', label: 'electrons' }, { value: 'both', label: 'both signs' }],
    value: 'pos', aria: 'which charges carry the current',
  });
  const cy = cycle(() => dT.v, 1.2);
  const WL = 150, WR = 1260, WT = 250, WB = 372, AX = 730, ROWS = [286, 322, 358];
  const N = 12;
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('current'), qc = C('charge'), tc = C('time'), ec = C('electric-field');
    const I = dQ.v / dT.v, u = Math.min(1, cy.now() / dT.v), mode = who.value;
    /* the wire, the marked cross-section and the field that drives the carriers */
    wireBody(ctx, WL, WR, WT, WB);
    crossSection(ctx, AX, WT, WB, qc, alpha(qc, 0.28));
    text(ctx, 'the area A', AX, WT - 16, qc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    arrow(ctx, 300, 176, 470, 176, ec, 5);
    text(ctx, 'E, the electric field in the wire', 486, 176, ec, { size: 21, weight: 600, base: 'middle' });
    /* the carriers, crossing the marked area once each loop. The two signs are
       given different rows and half a slot of offset, so that with both of them
       moving neither ever hides the other. */
    const draw1 = (sign) => {
      const col = sign > 0 ? F.el('p+') : F.el('e-');
      for (let i = 0; i < N; i++) {
        const f = sign > 0 ? (i / N + u) % 1 : (i / N + 0.5 / N - u + 1) % 1;
        const x = WL + 26 + f * (WR - WL - 52), y = ROWS[(sign > 0 ? i : i + 1) % ROWS.length];
        carrier(ctx, x, y, col, 13);
        text(ctx, sign > 0 ? '+' : '−', x, y + 1, PAL.ink, { size: 18, weight: 700, align: 'center', base: 'middle' });
      }
    };
    if (mode !== 'neg') draw1(1);
    if (mode !== 'pos') draw1(-1);
    /* the legend, which names each kind of carrier once (root rule 26.6) */
    let lx = 162;
    const entry = (sign, name) => {
      carrier(ctx, lx, 212, sign > 0 ? F.el('p+') : F.el('e-'), 12);
      text(ctx, sign > 0 ? '+' : '−', lx, 213, PAL.ink, { size: 17, weight: 700, align: 'center', base: 'middle' });
      text(ctx, name, lx + 22, 212, PAL.muted, { size: 19, base: 'middle' });
      lx += 40 + name.length * 9.6;
    };
    if (mode !== 'neg') entry(1, 'a positive carrier, of charge +q');
    if (mode !== 'pos') entry(-1, 'a free electron, of charge −q');
    /* the conventional current, which runs with the field whichever sign is moving */
    arrow(ctx, 980, 430, 1200, 430, cc, 6);
    text(ctx, 'I = ' + fmt(I, I < 10 ? 2 : 0) + ' A, the conventional current', 966, 430, cc, { size: 22, weight: 600, align: 'right', base: 'middle' });
    const moving = mode === 'pos' ? 'The positive carriers move with the field, the way the conventional current is drawn.'
      : mode === 'neg' ? 'The electrons move against the field, so the conventional current is drawn the other way about.'
        : 'Both signs move, in opposite directions, and both add to the same conventional current.';
    text(ctx, moving, 150, 478, PAL.muted, { size: 19 });
    /* the counter: the charge that has crossed so far, and the time it has taken */
    panel(ctx, 150, 500, 1110, 96);
    text(ctx, 'Across the marked area so far', 172, 528, PAL.muted, { size: 17 });
    text(ctx, fmt(dQ.v * u, 0) + ' C of the ' + fmt(dQ.v, 0) + ' C', 172, 566, qc, { size: 23, weight: 600 });
    text(ctx, fmt(dT.v * u, 2) + ' s of the ' + fmt(dT.v, 2) + ' s', 640, 566, tc, { size: 23, weight: 600 });
    const bx = 950, bw = 288;
    ctx.save(); ctx.fillStyle = alpha(qc, 0.22); ctx.fillRect(bx, 540, bw * u, 30); ctx.strokeStyle = qc; ctx.lineWidth = 2.5; ctx.strokeRect(bx, 540, bw, 30); ctx.restore();
    headline(ctx, fmt(dQ.v, 0) + ' C crossing the marked area in ' + fmt(dT.v, 2) + ' s is a current of ' + fmt(I, I < 10 ? 2 : 0) + ' A.');
    readout(d.readout, `\\kIcur = \\frac{\\kdQch}{\\kdt} = \\frac{${fmt(dQ.v, 0)}\\ \\text{C}}{${fmt(dT.v, 2)}\\ \\text{s}} = ${fmt(I, I < 10 ? 2 : 0)}\\ \\text{A}`,
      'An ampere is one coulomb per second, so this current would be written ' + fmt(I, I < 10 ? 2 : 0) + ' A on a fuse or an appliance. The carriers each pass ' + sci(dQ.v / QE, 2) + ' fundamental charges across the area in that time, and whether they are positive charges moving with the field, electrons moving against it, or both signs moving at once, the conventional current is the same.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 20.3: the simple circuit and its schematic. The picture is on the
   left and the standard schematic on the right, and the situation the
   picture draws can be changed while the schematic stays exactly as it was,
   which is the reason the book gives for learning to read one. Still: a
   closed path carrying a steady current has no clock in it, and the arrows
   round the loop are notation for a direction rather than a flow the reader
   has to imagine, so the figure answers its slider and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-simple-circuit', 640);
  const Is = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0.1, max: 12, step: 0.1, value: 3, unit: 'A', dec: 1, aria: 'the current round the circuit' });
  const what = choice(d.controls, {
    label: '\\text{the situation}',
    options: [{ value: 'truck', label: 'a truck battery and a headlight' }, { value: 'pen', label: 'a small battery and a penlight' }],
    value: 'truck', aria: 'what the schematic stands for',
  });
  /* the loop of the picture and the loop of the schematic, each a closed rectangle walked clockwise */
  const loop = (l, r, t, b) => [[l, b], [l, t], [r, t], [r, b]];
  /* an arrowhead every `step` units along a closed path, pointing the way the current runs */
  function currentRound(ctx, pts, color) {
    const n = pts.length;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      line(ctx, a[0], a[1], b[0], b[1], PAL.ink, 5);
    }
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n], f = i % 2 ? 0.26 : 0.5;     /* the load and the source sit at the middle of the two horizontal sides */
      const mx = a[0] + (b[0] - a[0]) * f, my = a[1] + (b[1] - a[1]) * f;
      const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
      arrow(ctx, mx - (dx / L) * 26, my - (dy / L) * 26, mx + (dx / L) * 26, my + (dy / L) * 26, color, 6);
    }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('current'), I = Is.v, big = what.value === 'truck';
    const lamp = big ? 'the headlight' : 'the penlight bulb';
    const cell = big ? 'the truck battery' : 'the small battery';
    /* (a) the picture: a source on the left, a lamp on the right, two wires between them */
    text(ctx, '(a) ' + cell + ' and ' + lamp, 90, 122, PAL.ink, { size: 22, weight: 600 });
    const bl = big ? 110 : 150, br = big ? 300 : 260, bt = 330, bb = big ? 470 : 420;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(bl, bt, br - bl, bb - bt, 6); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(bl, bt, br - bl, 22); ctx.strokeRect(bl, bt, br - bl, 22);   /* the lid */
    ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(bl + 12, bt + 40, br - bl - 24, (bb - bt) * 0.28);       /* the label band */
    ctx.restore();
    text(ctx, cell, (bl + br) / 2, bb + 30, PAL.muted, { size: 18, align: 'center' });
    const pA = bl + 34, pB = br - 34;
    [[pA, '+'], [pB, '−']].forEach(([x, s]) => {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x - 13, bt - 18, 26, 20, 4); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, s, x, bt - 8, PAL.ink, { size: 22, weight: 600, align: 'center', base: 'middle' });
    });
    const lx = 560, ly = 246, R = big ? 66 : 38;
    const wires = [[[pA, bt - 18], [pA, 170], [lx - R - 36, 170], [lx - R - 6, ly - 12]], [[lx - R - 6, ly + 12], [lx - R - 36, 318], [pB, 318], [pB, bt - 18]]];
    wires.forEach((w) => {
      for (let i = 0; i < w.length - 1; i++) line(ctx, w[i][0], w[i][1], w[i + 1][0], w[i + 1][1], PAL.ink, 5);
      const a = w[1], b = w[2], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
      arrow(ctx, mx - (dx / L) * 28, my - (dy / L) * 28, mx + (dx / L) * 28, my + (dy / L) * 28, cc, 6);
    });
    /* the lamp: a parabolic reflector open to the right, its lens across the mouth, a bulb at
       the focus on the two leads, and a beam that widens and lengthens with the current */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.moveTo(lx + R, ly - R * 1.5);
    ctx.quadraticCurveTo(lx - R - 40, ly - R * 1.1, lx - R - 40, ly);
    ctx.quadraticCurveTo(lx - R - 40, ly + R * 1.1, lx + R, ly + R * 1.5);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.beginPath(); ctx.moveTo(lx + R, ly - R * 1.5);
    ctx.quadraticCurveTo(lx + R + 26, ly, lx + R, ly + R * 1.5); ctx.lineTo(lx + R - 10, ly + R * 1.5); ctx.lineTo(lx + R - 10, ly - R * 1.5); ctx.closePath(); ctx.fill(); ctx.stroke();
    for (let k = -1; k <= 1; k++) line(ctx, lx + R - 4 + k * 5, ly - R * 1.42, lx + R - 4 + k * 5, ly + R * 1.42, alpha(PAL.ink, 0.35), 1.5);
    ctx.restore();
    /* the bulb, on the two leads that come through the back of the reflector */
    const bx = lx - R * 0.35, bR = Math.max(10, R * 0.22);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(bx, ly, bR * 1.4, bR, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(bx - bR * 0.9, ly - bR * 0.5);
    for (let i = 0; i < 5; i++) ctx.lineTo(bx - bR * 0.9 + (i + 0.5) * (bR * 1.8 / 5), ly + (i % 2 ? bR * 0.5 : -bR * 0.5));
    ctx.lineTo(bx + bR * 0.9, ly + bR * 0.5); ctx.stroke(); ctx.restore();
    line(ctx, lx - R - 6, ly - 12, bx - bR * 1.2, ly - 6, PAL.ink, 3);
    line(ctx, lx - R - 6, ly + 12, bx - bR * 1.2, ly + 6, PAL.ink, 3);
    /* the beam: a soft wedge whose reach grows with the current, drawn as the fact it is */
    const rl = 70 + 210 * (I / 12), x0 = lx + R + 22;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.beginPath(); ctx.moveTo(x0, ly - R * 1.35); ctx.lineTo(x0 + rl, ly - R * 1.35 - rl * 0.28); ctx.lineTo(x0 + rl, ly + R * 1.35 + rl * 0.28); ctx.lineTo(x0, ly + R * 1.35); ctx.closePath(); ctx.fill(); ctx.restore();
    for (let i = 0; i < 5; i++) {
      const a = -0.26 + (0.52 * i) / 4, y0 = ly + R * 1.2 * Math.sin(a * 2.2);
      line(ctx, x0 + 6, y0, x0 + rl * 0.9, y0 + rl * 0.9 * Math.sin(a), alpha(PAL.ink, 0.35), 2.5);
    }
    text(ctx, lamp, lx + 10, ly + R * 1.5 + 44, PAL.muted, { size: 18, align: 'center' });
    /* (b) the schematic: the same circuit in the standard symbols */
    text(ctx, '(b) the schematic, which is the same for both', 800, 122, PAL.ink, { size: 22, weight: 600 });
    const sl = 830, sr = 1290, st = 200, sb = 470;
    currentRound(ctx, loop(sl, sr, st, sb), cc);
    /* the source at the bottom: a long line for the positive terminal and a short one for the negative */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect((sl + sr) / 2 - 44, sb - 40, 88, 80); ctx.restore();
    line(ctx, (sl + sr) / 2 - 16, sb - 34, (sl + sr) / 2 - 16, sb + 34, PAL.ink, 5);
    line(ctx, (sl + sr) / 2 + 16, sb - 18, (sl + sr) / 2 + 16, sb + 18, PAL.ink, 8);
    text(ctx, 'the source', (sl + sr) / 2, sb + 66, PAL.muted, { size: 18, align: 'center' });
    /* the load at the top: the zigzag, in ink */
    const zl = (sl + sr) / 2 - 70, zr = (sl + sr) / 2 + 70;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(zl - 6, st - 26, zr - zl + 12, 52); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(zl, st);
    for (let i = 0; i < 6; i++) ctx.lineTo(zl + (i + 0.5) * ((zr - zl) / 6), st + (i % 2 ? 20 : -20));
    ctx.lineTo(zr, st); ctx.stroke(); ctx.restore();
    text(ctx, 'the load', (zl + zr) / 2, st - 44, PAL.muted, { size: 18, align: 'center' });
    label(ctx, 'I = ' + fmt(I, 1) + ' A', sr, (st + sb) / 2, { side: 'left', color: cc, size: 22, gap: 26 });
    headline(ctx, 'A current of ' + fmt(I, 1) + ' A runs out of the positive terminal, through ' + lamp + ' and back, and the schematic beside the picture is the same for both situations.');
    readout(d.readout, `\\kdQch = \\kIcur\\kdt = (${fmt(I, 1)}\\ \\text{A})(1.00\\ \\text{s}) = ${fmt(I, 1)}\\ \\text{C}`,
      'A current of ' + fmt(I, 1) + ' A carries ' + fmt(I, 1) + ' C of charge past every point of the loop each second, since an ampere is one coulomb per second. The schematic draws the source as two parallel lines, the conducting wires as straight lines and the load as a zigzag, and the analysis is the same whether the source is a truck battery and the load a headlight or the source is a small battery and the load a penlight bulb.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 20.5 + 20.6: the crowd of free electrons, and the signal. Free
   electrons rattle among the atoms of a copper lattice while the whole
   crowd creeps slowly against the field, and a charge pushed in at one end
   forces one out at the other almost at once. Moving, because the two
   speeds at once are the idea and neither can be seen without a clock: a
   still picture of this scene is the book's own, and it is exactly what the
   reader has to animate in their head.
===================================================================== */
(function () {
  const d = sim('sim-drift-and-signal', 660);
  const Is = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 2, max: 40, step: 0.5, value: 20, unit: 'A', dec: 1, aria: 'the current in the wire' });
  const fac = ctl(d.controls, { label: '\\text{drawn at}', cls: '', min: 500, max: 5000, step: 100, value: 2000, unit: '× life', dec: 0, aria: 'how many times faster than life the drift is drawn' });
  const mode = choice(d.controls, {
    label: '\\text{follow}',
    options: [{ value: 'one', label: 'one electron' }, { value: 'crowd', label: 'the crowd' }, { value: 'signal', label: 'the signal' }],
    value: 'one', aria: 'what to follow down the wire',
  });
  const T = 6;
  const cy = cycle(() => T, 1.2);
  /* the 12-gauge copper wire of Example 20.3, which the figure is drawn for */
  const NDEN = 8.342e28, AREA = 3.310e-6, VD0 = 4.53e-4, VSIG = 1.0e8;
  const WL = 120, WR = 1290, WT = 250, WB = 430, SPAN = WR - WL - 80;
  const BASE = 250;                                     /* units a second at the default current and factor, so one lap takes about 4.4 s */
  /* a deterministic random walk, so that the electron's path is the same on every loop and in both themes */
  const STEP = 26, NODES = 90;
  const walk = []; let seed = 7;
  for (let i = 0; i < NODES; i++) { seed = (seed * 1103515245 + 12345) % 2147483648; walk.push(((seed / 2147483648) - 0.5) * 110); }
  const walkY = (s) => { const k = s / STEP, i = Math.floor(k), f = k - i; const a = walk[i % NODES], b = walk[(i + 1) % NODES]; return a + (b - a) * f; };
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), cc = C('current'), ec = C('electric-field');
    const I = Is.v, vd = I / (NDEN * QE * AREA), t = cy.now(), m = mode.value;
    const speed = BASE * (vd / VD0) * (fac.v / 2000);
    const cyc = (WT + WB) / 2;
    /* the wire and the lattice of copper atoms it is made of */
    wireBody(ctx, WL, WR, WT, WB);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 13; c++) {
      const x = WL + 76 + c * 92 + (r % 2 ? 46 : 0), y = WT + 42 + r * 48;
      if (x > WR - 40) continue;
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(x, y, 13, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    /* the field along the wire, the conventional current, and the drift of the electrons against both */
    arrow(ctx, 300, 200, 470, 200, ec, 5);
    text(ctx, 'E, the electric field', 486, 200, ec, { size: 21, weight: 600, base: 'middle' });
    arrow(ctx, 980, 200, 1150, 200, cc, 6);
    text(ctx, 'I = ' + fmt(I, 1) + ' A', 966, 200, cc, { size: 21, weight: 600, align: 'right', base: 'middle' });
    arrow(ctx, 470, 476, 300, 476, vc, 6);
    text(ctx, 'v_d = ' + sci(vd, 2) + ' m/s, the drift velocity', 486, 476, vc, { size: 21, weight: 600, base: 'middle' });
    /* the electrons themselves, in one of three states */
    if (m === 'one') {
      const s = (speed * t) % SPAN, x0 = WR - 50;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.38); ctx.lineWidth = 2.5; ctx.beginPath();
      for (let q = 0; q <= s; q += 6) { const px = x0 - q, py = cyc + walkY(q) * 0.5; if (q === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); }
      ctx.stroke(); ctx.restore();
      const ex = x0 - s, ey = cyc + walkY(s) * 0.5;
      carrier(ctx, ex, ey, F.el('e-'), 12);
      label(ctx, 'one free electron', ex, ey, { side: ey < cyc ? 'above' : 'below', color: PAL.ink, size: 20, gap: 30 });
      text(ctx, 'The path is nearly random, like an atom in a gas, but it creeps to the left all the same.', WL, 530, PAL.muted, { size: 19 });
    } else if (m === 'crowd') {
      for (let i = 0; i < 18; i++) {
        const ph = i * 1.37, s = (speed * t + i * (SPAN / 18)) % SPAN;
        const x = WR - 50 - s, y = cyc + 40 * Math.sin(s * 0.09 + ph) + 22 * Math.sin(s * 0.27 + ph * 2);
        carrier(ctx, x, y, F.el('e-'), 10);
      }
      carrier(ctx, WL + 40, 530, F.el('e-'), 10);
      text(ctx, 'each one a free electron, rattling from collision to collision while the whole crowd creeps to the left', WL + 62, 530, PAL.muted, { size: 19, base: 'middle' });
    } else {
      /* the charges already in the wire, which barely move, and the push that
         crosses it in the first fifth of a second of the loop */
      const front = Math.min(1, t / 0.18);
      for (let i = 0; i < 13; i++) {
        const s = (speed * t + i * (SPAN / 13)) % SPAN, x = WR - 50 - s;
        carrier(ctx, x, cyc + ((i % 2) - 0.5) * 60, F.el('e-'), 10);
      }
      if (t < 0.34) {
        const fx = WR - 50 - front * SPAN;
        line(ctx, fx, WT - 10, fx, WB + 10, alpha(cc, 0.8), 5, [12, 8]);
        text(ctx, 'the push, travelling at nearly the speed of light', fx, WT - 30, cc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      }
      const ix = WR + 60 - 100 * Math.min(1, t / 0.5);
      carrier(ctx, ix, cyc, F.el('e-'), 13);
      label(ctx, 'one electron pushed in here', ix, cyc + 14, { side: 'below', gap: 40, size: 19, color: PAL.ink });
      if (front >= 1) {
        const ox = WL - 6 - 70 * Math.min(1, (t - 0.18) / 0.5);
        carrier(ctx, ox, cyc, F.el('e-'), 13);
        label(ctx, 'and one leaves here, at once', ox, cyc + 14, { side: 'below', gap: 40, size: 19, color: PAL.ink });
      }
      text(ctx, 'The push travels at about ' + sci(VSIG, 0) + ' m/s, so the far end answers at once though no electron has gone anywhere.', WL, 530, PAL.muted, { size: 19 });
    }
    text(ctx, 'copper atoms of the lattice', WL, 570, PAL.muted, { size: 19 });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(WL + 260, 564, 13, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    headline(ctx, 'The crowd drifts at ' + sci(vd, 2) + ' m/s, drawn ' + fmt(fac.v, 0) + ' times faster than it is, while the signal crosses the wire at about ' + sci(VSIG, 0) + ' m/s.');
    readout(d.readout, `\\kvd = \\frac{\\kIcur}{n\\kq A} = \\frac{${fmt(I, 1)}\\ \\text{A}}{(${sciTex(NDEN, 3)}\\ \\text{/m}^3)(${sciTex(QE, 2)}\\ \\text{C})(${sciTex(AREA, 3)}\\ \\text{m}^2)} = ${sciTex(vd, 2)}\\ \\text{m/s}`,
      'The wire is the 12-gauge copper wire of Example 20.3, with one free electron per copper atom. At this drift velocity an electron takes ' + fmt(1 / vd / 3600, 1) + ' hours to travel one meter, while the signal covers that meter in about ' + sci(1 / VSIG, 0) + ' s, which is why the light comes on as soon as the switch is flicked. The drift is drawn ' + fmt(fac.v, 0) + ' times faster than it is, or nothing would appear to move at all.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 20.7: counting the carriers. A segment of the wire is shaded, and
   every free charge in it leaves the segment in the time Δt, so the segment
   is as long as the drift velocity carries a charge in that time. Still:
   the segment's length is a statement about a time rather than a motion in
   one, the drifting itself has just been animated in the figure above, and
   the figure answers its three sliders. Two fixed scales, both set once from
   the greatest extents the sliders reach and neither ever changed: 220 units
   to the millimetre along the wire, which is what makes the thinnest segment
   the sliders can ask for still visible, and 62 units to the millimetre
   across it. The readout states both, so no length is read off the picture
   without knowing which scale it is drawn on.
===================================================================== */
(function () {
  const d = sim('sim-drift-count', 700);
  const Is = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 5, max: 25, step: 0.5, value: 20, unit: 'A', dec: 1, aria: 'the current in the wire' });
  const Ds = ctl(d.controls, { label: 'D', cls: '', min: 1.2, max: 4, step: 0.001, value: 2.053, unit: 'mm', dec: 3, aria: 'the diameter of the wire' });
  const ns = ctl(d.controls, { label: 'n', cls: '', min: 5, max: 12, step: 0.001, value: 8.342, unit: '× 10²⁸ /m³', dec: 3, aria: 'the number of free charges in each cubic meter' });
  const DT = 1.00;                    /* the time the segment empties in, held at one second so the picture keeps its scales */
  const KX = 220, KY = 62;            /* units per millimetre along the wire and across it */
  const XL = 190, XR = 1270, CY = 300, XMAX = 4.8;
  const BMAX = CY + (4 * KY) / 2;     /* where the widest wire the slider reaches has its lower edge */
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('current'), vc = C('velocity'), qc = C('charge');
    const I = Is.v, D = Ds.v, n = ns.v * 1e28;
    const A = Math.PI * Math.pow((D * 1e-3) / 2, 2), vd = I / (n * QE * A);
    const xm = vd * DT * 1e3, drawn = Math.min(xm, XMAX);        /* the segment's length in millimetres */
    const t = CY - (D * KY) / 2, b = CY + (D * KY) / 2, sx = XL + drawn * KX;
    wireBody(ctx, XL, XR, t, b);
    /* the shaded segment, whose charges all leave it in the time Δt */
    ctx.save(); ctx.fillStyle = alpha(qc, 0.22); ctx.beginPath(); ctx.rect(XL, t, sx - XL, b - t); ctx.fill();
    ctx.strokeStyle = qc; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    crossSection(ctx, sx, t, b, PAL.ink);
    /* the carriers inside the shaded segment, where there is room to draw any */
    const cols = Math.max(1, Math.min(7, Math.round((sx - XL) / 36))), rows = Math.max(1, Math.min(4, Math.round((b - t) / 40)));
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const x = XL + ((i + 0.5) * (sx - XL)) / cols, y = t + ((j + 0.5) * (b - t)) / rows;
      if (sx - XL > 30) carrier(ctx, x, y, F.el('e-'), 8);
    }
    /* the drift, as an arrow above the wire starting over the segment, its name beside it */
    const ay = CY - (4 * KY) / 2 - 36;
    arrow(ctx, XL, ay, XL + 190, ay, vc, 6);
    text(ctx, 'v_d = ' + sci(vd, 2) + ' m/s, the drift velocity', XL + 206, ay, vc, { size: 21, weight: 600, base: 'middle' });
    F.vbracket(ctx, XR + 44, t, b, PAL.ink, 'D = ' + fmt(D, 3) + ' mm', 1);
    /* the segment's length, and the area it crosses, below the wire */
    hbracket(ctx, XL, sx, BMAX + 46, qc, 'x = v_d Δt = ' + fmt(xm, 3) + ' mm');
    text(ctx, 'A = ' + sci(A, 3) + ' m², the area of the cross-section', XL, BMAX + 128, PAL.ink, { size: 21, weight: 600 });
    text(ctx, 'Every free charge in the shaded volume Ax leaves it in Δt = 1.00 s.', XL, BMAX + 166, PAL.muted, { size: 19 });
    text(ctx, 'The length along the wire is drawn at 3.5 times the scale of its diameter, so the segment reads longer than it is.', XL, BMAX + 200, PAL.muted, { size: 19 });
    arrow(ctx, 1000, BMAX + 128, 1200, BMAX + 128, cc, 6);
    text(ctx, 'I = ' + fmt(I, 1) + ' A', 986, BMAX + 128, cc, { size: 21, weight: 600, align: 'right', base: 'middle' });
    headline(ctx, 'A current of ' + fmt(I, 1) + ' A in a wire ' + fmt(D, 3) + ' mm across, with ' + fmt(ns.v, 3) + ' × 10²⁸ free charges in each cubic meter, drifts at ' + sci(vd, 2) + ' m/s.');
    readout(d.readout, `\\kIcur = n\\kq A\\kvd = (${sciTex(n, 3)}\\ \\text{/m}^3)(${sciTex(QE, 2)}\\ \\text{C})(${sciTex(A, 3)}\\ \\text{m}^2)(${sciTex(vd, 2)}\\ \\text{m/s}) = ${fmt(I, 1)}\\ \\text{A}`,
      'The shaded segment holds nAx carriers of charge q each, and if they all leave it in the time Δt then the current is that charge divided by that time. Rearranged, v_d = I/(nqA) = ' + sci(vd, 2) + ' m/s, so in one second the carriers move ' + fmt(xm, 3) + ' mm, which is how long the shaded segment is. On the book\u2019s own numbers, a 20.0 A current in a 2.053 mm copper wire with 8.342 \u00d7 10\u00b2\u2078 free electrons in each cubic meter, the drift velocity is 4.53 \u00d7 10\u207b\u2074 m/s.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
