/* Figures for section 21.1 Resistors in Series and Parallel.
   A connection of resistors that is only being looked at has no time in it, so
   every figure here is a still picture: none registers a cycle, none carries a
   transport, and a slider or a choice alone redraws it. The page binds the
   resistance, the current, the voltage and the power, which is what ch21/COLOR.md
   gives 21.1; the wires, the battery, the resistor boxes and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces every schematic here is drawn from ---------- */
const BOXW = 128, BOXH = 46;            /* a resistor, drawn as a plain box in ink */
/* A resistor centred at (x, y), lying along the wire or standing across it. The box
   is ink; its name and its resistance are set beside it in the resistance hue. */
function resistor(ctx, x, y, horiz, name, ohms, opts) {
  const o = opts || {}, w = horiz ? BOXW : BOXH, h = horiz ? BOXH : BOXW, rc = C('resistance');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
  const val = ohms === null ? null : fmt(ohms, ohms < 10 ? 2 : 1) + ' Ω';
  if (horiz && o.inline) {
    if (name) text(ctx, name, x - w / 2 - 14, y, rc, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    if (val) text(ctx, val, x + w / 2 + 14, y, rc, { size: 21, align: 'left', bg: PAL.panel });
  } else if (horiz) {
    if (name) text(ctx, name, x, y - h / 2 - 24, rc, { size: 24, weight: 600, align: 'center' });
    if (val) text(ctx, val, x, y + h / 2 + 24, rc, { size: 21, align: 'center' });
  } else {
    if (name) text(ctx, name, x - w / 2 - 14, y, rc, { size: 24, weight: 600, align: 'right' });
    if (val) text(ctx, val, x + w / 2 + 14, y, rc, { size: 21, align: 'left' });
  }
}
/* A battery standing on the left-hand wire, its long plate uppermost, with the
   voltage it puts out written beside it in the voltage hue. */
function battery(ctx, x, y, volts) {
  const plates = [[26, 5], [13, 5], [26, 5], [13, 5]];
  let yy = y - 33;
  plates.forEach(([half, w], i) => { line(ctx, x - half, yy, x + half, yy, PAL.ink, w); yy += i % 2 === 0 ? 20 : 22; });
  if (volts !== null && volts !== undefined) text(ctx, fmt(volts, 1) + ' V', x - 40, y, C('voltage'), { size: 22, weight: 600, align: 'right' });
}
/* An arrow set along a wire in the current hue, with its name beside it. */
function flow(ctx, x, y, dx, dy, name) {
  const cc = C('current'), L = 46;
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, cc, 5);
  if (name) text(ctx, name, x + (dy ? 26 : 0), y - (dy ? 0 : 24), cc, { size: 21, weight: 600, align: dy ? 'left' : 'center' });
}
/* The soft panel that picks the group of a network being combined out of the rest. */
function spot(ctx, l, t, r, b) {
  ctx.save(); ctx.fillStyle = alpha(C('resistance'), 0.14); ctx.strokeStyle = alpha(C('resistance'), 0.5);
  ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.roundRect(l, t, r - l, b - t, 14); ctx.fill(); ctx.stroke(); ctx.restore();
}
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
const par = (...rs) => 1 / rs.reduce((s, r) => s + 1 / r, 0);
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';

/* =====================================================================
   FIGURE 21.2: four resistors, wired one after the other or each on a path
   of its own. Still: the reader is choosing a wiring and two resistances,
   and nothing in the picture has a clock.
===================================================================== */
(function () {
  const d = sim('sim-four-resistors', 560);
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 13, unit: 'Ω', dec: 1, aria: 'the third resistance' });
  const R4 = ctl(d.controls, { label: '\\kResfour', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the fourth resistance' });
  const how = choice(d.controls, { label: '\\text{the wiring}', options: [{ value: 'series', label: 'in series' }, { value: 'parallel', label: 'in parallel' }], value: 'series', aria: 'how the four resistors are wired' });
  const R1 = 1.00, R2 = 6.00;
  function draw() {
    const { ctx } = begin(d.c);
    const rs = [R1, R2, R3.v, R4.v], names = ['R_1', 'R_2', 'R_3', 'R_4'];
    const series = how.value === 'series';
    const tot = series ? rs.reduce((a, b) => a + b, 0) : par(...rs);
    const big = Math.max(...rs), small = Math.min(...rs);
    headline(ctx, series
      ? 'Wired one after the other, the four resistors together come to ' + fmt(tot, 1) + ' Ω, which is more than the largest of them on its own.'
      : 'Wired each on a path of its own, the four resistors together come to ' + fmt(tot, 2) + ' Ω, which is less than the smallest of them on its own.');
    if (series) {
      wires(ctx, [[180, 200], [180, 470], [1240, 470], [1240, 200], [180, 200]]);
      battery(ctx, 180, 335, null);
      [300, 560, 820, 1080].forEach((x, i) => resistor(ctx, x, 200, true, names[i], rs[i]));
      flow(ctx, 700, 470, -1, 0, 'I');
      flow(ctx, 430, 200, 1, 0, null);
      flow(ctx, 690, 200, 1, 0, null);
      flow(ctx, 950, 200, 1, 0, null);
      text(ctx, 'the same current passes through every one of them', 710, 530, PAL.muted, { size: 19, align: 'center' });
    } else {
      wires(ctx, [[180, 200], [1200, 200]]);
      wires(ctx, [[180, 470], [1200, 470]]);
      wires(ctx, [[180, 200], [180, 470]]);
      battery(ctx, 180, 335, null);
      [420, 680, 940, 1200].forEach((x, i) => { wires(ctx, [[x, 200], [x, 470]]); resistor(ctx, x, 335, false, names[i], rs[i]); });
      flow(ctx, 300, 200, 1, 0, 'I');
      [420, 680, 940, 1200].forEach((x) => flow(ctx, x, 242, 0, 1, null));
      text(ctx, 'the current divides among the four paths', 710, 530, PAL.muted, { size: 19, align: 'center' });
    }
    readout(d.readout,
      series
        ? '\\kRess = ' + rs.map((r) => ohm(r)).join(' + ') + ' = ' + ohm(tot)
        : '\\dfrac{1}{\\kResp} = ' + rs.map((r) => '\\dfrac{1}{' + ohm(r) + '}').join(' + ')
          + ' \\quad\\Rightarrow\\quad \\kResp = ' + ohm(tot),
      series
        ? 'The largest of the four on its own is ' + fmt(big, big < 10 ? 2 : 1) + ' Ω, and the four in series come to more than that, because the current has to pass through each of them in turn.'
        : 'The smallest of the four on its own is ' + fmt(small, small < 10 ? 2 : 1) + ' Ω, and the four in parallel come to less than that, because every path added gives the current somewhere else to go.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 21.3 + 21.4 + 21.6 folded: one battery and three resistors in the
   three wirings this section works through, each beside the single resistance
   it reduces to. Still, for the same reason as Figure 21.2.
===================================================================== */
(function () {
  const d = sim('sim-three-resistors', 660);
  const Vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the voltage the source puts out' });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 1, unit: 'Ω', dec: 2, aria: 'the first resistance' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 2, aria: 'the second resistance' });
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 13, unit: 'Ω', dec: 2, aria: 'the third resistance' });
  const how = F.select(d.controls, {
    label: '\\text{the wiring}',
    options: [{ value: 'series', label: 'all three in series' }, { value: 'parallel', label: 'all three in parallel' }, { value: 'mixed', label: 'R₂ and R₃ in parallel, in series with R₁' }],
    value: 'series', aria: 'how the three resistors are wired',
  });
  /* the equivalent circuit, drawn to the right of whichever wiring is shown */
  function equivalent(ctx, name, ohms, V) {
    wires(ctx, [[900, 230], [1300, 230], [1300, 480], [900, 480], [900, 230]]);
    battery(ctx, 900, 355, V);
    resistor(ctx, 1100, 230, true, name, ohms);
    text(ctx, 'the one resistance it comes to', 1100, 530, PAL.muted, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const V = Vs.v, r1 = R1.v, r2 = R2.v, r3 = R3.v, vc = C('voltage'), cc = C('current');
    let main = '', small = '', head = '';
    if (how.value === 'series') {
      const Rs = r1 + r2 + r3, I = V / Rs, vs = [I * r1, I * r2, I * r3], P = V * I;
      head = 'The three resistors in series come to ' + fmt(Rs, 2) + ' Ω, so the source drives ' + fmt(I, 3) + ' A through all three of them.';
      wires(ctx, [[160, 230], [720, 230], [720, 480], [160, 480], [160, 230]]);
      battery(ctx, 160, 355, V);
      [280, 440, 600].forEach((x, i) => {
        resistor(ctx, x, 230, true, 'R_' + (i + 1), [r1, r2, r3][i]);
        text(ctx, 'V_' + (i + 1) + ' = ' + fmt(vs[i], 2) + ' V', x, 330, vc, { size: 20, weight: 600, align: 'center' });
      });
      flow(ctx, 440, 480, -1, 0, 'I = ' + fmt(I, 3) + ' A');
      text(ctx, 'the same current in every resistor', 440, 540, PAL.muted, { size: 19, align: 'center' });
      equivalent(ctx, 'R_s', Rs, V);
      main = '\\kRess = \\kResone + \\kRestwo + \\kResthree = ' + ohm(Rs) + ',\\quad \\kIcur = \\dfrac{\\kV}{\\kRess} = ' + fmt(I, 3) + '\\ \\text{A}';
      small = 'The three voltage drops are ' + vs.map((v) => fmt(v, 2) + ' V').join(', ') + ', and they add to the ' + fmt(V, 1) + ' V the source puts out. The source delivers ' + fmt(P, 2) + ' W.';
    } else if (how.value === 'parallel') {
      const Rp = par(r1, r2, r3), I = V / Rp, is = [V / r1, V / r2, V / r3], P = V * I;
      head = 'The three resistors in parallel come to ' + fmt(Rp, 3) + ' Ω, less than the smallest of them, so the source drives ' + fmt(I, 2) + ' A.';
      wires(ctx, [[160, 230], [740, 230]]);
      wires(ctx, [[160, 480], [740, 480]]);
      wires(ctx, [[160, 230], [160, 480]]);
      battery(ctx, 160, 355, V);
      [300, 520, 740].forEach((x, i) => {
        wires(ctx, [[x, 230], [x, 480]]);
        resistor(ctx, x, 355, false, 'R_' + (i + 1), [r1, r2, r3][i]);
        text(ctx, 'I_' + (i + 1) + ' = ' + fmt(is[i], 2) + ' A', x, 520, cc, { size: 20, weight: 600, align: 'center' });
      });
      flow(ctx, 250, 230, 1, 0, 'I = ' + fmt(I, 2) + ' A');
      text(ctx, 'every resistor has the full ' + fmt(V, 1) + ' V across it', 450, 175, vc, { size: 20, align: 'center' });
      equivalent(ctx, 'R_p', Rp, V);
      main = '\\dfrac{1}{\\kResp} = \\dfrac{1}{\\kResone} + \\dfrac{1}{\\kRestwo} + \\dfrac{1}{\\kResthree} \\quad\\Rightarrow\\quad \\kResp = ' + ohm(Rp) + ',\\quad \\kIcur = ' + fmt(I, 2) + '\\ \\text{A}';
      small = 'The three branch currents are ' + is.map((i) => fmt(i, 2) + ' A').join(', ') + ', and they add to the ' + fmt(I, 2) + ' A the source drives. The source delivers ' + fmt(P, 1) + ' W.';
    } else {
      const Rp = par(r2, r3), Rt = r1 + Rp, I = V / Rt, V1 = I * r1, Vp = V - V1, i2 = Vp / r2, i3 = Vp / r3, P2 = i2 * i2 * r2;
      head = 'A parallel pair behind a resistor in series with it comes to ' + fmt(Rt, 2) + ' Ω, and of the ' + fmt(V, 1) + ' V the source puts out only ' + fmt(Vp, 2) + ' V reaches the pair.';
      wires(ctx, [[160, 200], [720, 200], [720, 480], [160, 480], [160, 200]]);
      wires(ctx, [[480, 200], [480, 350], [720, 350]]);
      battery(ctx, 160, 340, V);
      resistor(ctx, 310, 200, true, 'R_1', r1);
      resistor(ctx, 600, 200, true, 'R_2', r2);
      resistor(ctx, 600, 350, true, 'R_3', r3);
      flow(ctx, 420, 480, -1, 0, 'I = ' + fmt(I, 2) + ' A');
      text(ctx, 'V_1 = ' + fmt(V1, 2) + ' V', 310, 288, vc, { size: 20, weight: 600, align: 'center' });
      text(ctx, 'V_p = ' + fmt(Vp, 2) + ' V across the pair', 600, 430, vc, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, 'I_2 = ' + fmt(i2, 2) + ' A', 690, 155, cc, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, 'I_3 = ' + fmt(i3, 2) + ' A', 690, 305, cc, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      equivalent(ctx, 'R_tot', Rt, V);
      main = '\\kRestot = \\kResone + \\kResp = ' + ohm(r1) + ' + ' + ohm(Rp) + ' = ' + ohm(Rt) + ',\\quad \\kIcur = ' + fmt(I, 2) + '\\ \\text{A}';
      small = 'The resistor in series takes ' + fmt(V1, 2) + ' V, so the pair behind it has only ' + fmt(Vp, 2) + ' V, and the current through R₂ is ' + fmt(i2, 2) + ' A, which dissipates ' + fmt(P2, 1) + ' W in it.';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.5: seven resistors reduced to one, a step at a time. Still: the
   reduction is a piece of arithmetic the reader walks through, not a motion.
   The seven names stay on, past root rule 26.7's six, because a schematic
   whose resistors are unnamed cannot be read; they sit on a fixed lattice
   that no slider moves and they collide at neither slider extreme.
===================================================================== */
(function () {
  const d = sim('sim-reduce-network', 660);
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the second resistance' });
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 1, aria: 'the third resistance' });
  const step = choice(d.controls, {
    label: '\\text{the step}',
    options: [1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: String(n) })),
    value: '1', aria: 'how far the reduction has been carried',
  });
  const r1 = 1.0, r4 = 12.0, r5 = 3.0, r6 = 6.0, r7 = 20.0;
  const TOP = 260, LOW = 450, BOT = 580, A = 430, B = 1180;
  function draw() {
    const { ctx } = begin(d.c);
    const k = +step.value, r2 = R2.v, r3 = R3.v;
    const Rp = par(r2, r3, r4), Rq = par(r5, r6), Rs = Rp + Rq, Rpp = par(Rs, r7), Rtot = r1 + Rpp;
    const HEADS = [
      'The three resistors in parallel and the pair in parallel are each combined first, because a parallel group is the easiest part of the network to pick out.',
      'The two equivalent resistances now sit one after the other, so they simply add.',
      'That one resistance and R₇ lie on two paths between the same pair of points, so they combine as a parallel pair.',
      'What is left is one resistance in series with R₁, and the network has come down to a single resistance.',
      'The whole network of seven resistors is one resistance of ' + fmt(Rtot, 2) + ' Ω across the source.',
    ];
    headline(ctx, HEADS[k - 1]);
    /* the frame every step keeps: the source, the two side wires and the return */
    wires(ctx, [[150, TOP], [150, BOT], [B, BOT], [B, TOP]]);
    battery(ctx, 150, (TOP + BOT) / 2, null);
    if (k <= 4) { wires(ctx, [[150, TOP], [A, TOP]]); resistor(ctx, 290, TOP, true, 'R_1', r1); }
    if (k <= 3) {                                   /* the lower path R₇ takes between the same two points */
      wires(ctx, [[A, TOP], [A, LOW], [B, LOW], [B, TOP]]);
      resistor(ctx, 805, LOW, true, 'R_7', r7, { inline: true });
    }
    if (k === 1) {
      spot(ctx, 452, 130, 812, 400); spot(ctx, 828, 180, 1162, 350);
      [[170, 'R_2', r2], [265, 'R_3', r3], [360, 'R_4', r4]].forEach(([y, n, r]) => {
        wires(ctx, [[A, y], [810, y]]); resistor(ctx, 645, y, true, n, r, { inline: true });
      });
      wires(ctx, [[A, 170], [A, 360]]); wires(ctx, [[810, 170], [810, 360]]);
      [[220, 'R_5', r5], [315, 'R_6', r6]].forEach(([y, n, r]) => {
        wires(ctx, [[840, y], [1150, y]]); resistor(ctx, 995, y, true, n, r, { inline: true });
      });
      wires(ctx, [[810, 220], [810, 315]]); wires(ctx, [[840, 220], [840, 315]]);
      wires(ctx, [[810, 265], [840, 265]]);
      wires(ctx, [[1150, 220], [1150, 315]]); wires(ctx, [[1150, 265], [B, 265]]);
      wires(ctx, [[B, 265], [B, TOP]]);
    } else if (k === 2) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      spot(ctx, 500, TOP - 100, 1100, TOP + 100);
      resistor(ctx, 660, TOP, true, 'R_p', Rp);
      resistor(ctx, 950, TOP, true, 'R_p′', Rq);
    } else if (k === 3) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      spot(ctx, 690, TOP - 100, 920, TOP + 100); spot(ctx, 690, LOW - 70, 920, LOW + 70);
      resistor(ctx, 805, TOP, true, 'R_s', Rs);
    } else if (k === 4) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      spot(ctx, 200, TOP - 100, 385, TOP + 100); spot(ctx, 690, TOP - 100, 920, TOP + 100);
      resistor(ctx, 805, TOP, true, 'R_p″', Rpp);
    } else {
      wires(ctx, [[150, TOP], [B, TOP]]);
      spot(ctx, 570, TOP - 100, 800, TOP + 100);
      resistor(ctx, 685, TOP, true, 'R_s′', Rtot);
    }
    const MAIN = [
      '\\dfrac{1}{\\kResp} = \\dfrac{1}{' + ohm(r2) + '} + \\dfrac{1}{' + ohm(r3) + '} + \\dfrac{1}{' + ohm(r4) + '} \\Rightarrow \\kResp = ' + ohm(Rp),
      '\\kRess = ' + ohm(Rp) + ' + ' + ohm(Rq) + ' = ' + ohm(Rs),
      '\\dfrac{1}{\\kResp} = \\dfrac{1}{' + ohm(Rs) + '} + \\dfrac{1}{' + ohm(r7) + '} \\Rightarrow \\kResp = ' + ohm(Rpp),
      '\\kRestot = \\kResone + ' + ohm(Rpp) + ' = ' + ohm(Rtot),
      '\\kRestot = ' + ohm(Rtot),
    ];
    const SMALL = [
      'The pair R₅ and R₆ is combined in the same step, and it comes to ' + fmt(Rq, 2) + ' Ω. Four steps in all bring the seven resistances down to ' + fmt(Rtot, 2) + ' Ω.',
      'Each of the two came from a parallel group, and in series they add to ' + fmt(Rs, 2) + ' Ω.',
      'The pair in parallel comes to ' + fmt(Rpp, 2) + ' Ω, which is less than either of them.',
      'R₁ carries the whole current of the circuit, so it is in series with everything behind it.',
      'Every one of the seven resistances is inside this one number, and the source sees nothing else.',
    ];
    readout(d.readout, MAIN[k - 1], SMALL[k - 1]);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.7: why the light dims when the motor comes on. Still: switching
   the motor on is a state of the circuit and not a motion, so the figure
   answers its choice and its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-dimming-light', 580);
  const Rw = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0, max: 1.6, step: 0.05, value: 0.4, unit: 'Ω', dec: 2, aria: 'the resistance of the wires' });
  const Rb = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 100, max: 400, step: 4, value: 192, unit: 'Ω', dec: 0, aria: 'the resistance of the bulb' });
  const Rm = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 4, max: 40, step: 0.5, value: 9.5, unit: 'Ω', dec: 1, aria: 'the resistance of the motor' });
  const sw = choice(d.controls, { label: '\\text{the motor}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'running' }], value: 'off', aria: 'whether the motor is running' });
  const V = 120.0;
  /* a light bulb on a vertical wire, its glow set by how much power it dissipates */
  function bulb(ctx, x, y, frac) {
    for (let i = 3; i >= 1; i--) { ctx.save(); ctx.fillStyle = alpha(C('power'), 0.30 * frac / i); ctx.beginPath(); ctx.arc(x, y, 44 + i * 22, 0, 2 * Math.PI); ctx.fill(); ctx.restore(); }
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(x, y, 44, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 24, y - 24); ctx.lineTo(x + 24, y + 24); ctx.moveTo(x + 24, y - 24); ctx.lineTo(x - 24, y + 24); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const rw = Rw.v, rb = Rb.v, rm = Rm.v, on = sw.value === 'on';
    const Rload = on ? par(rb, rm) : rb, I = V / (rw + Rload), Vp = V - I * rw, Pb = Vp * Vp / rb;
    const Pfull = V * V / rb, frac = Math.max(0, Math.min(1, Pb / Pfull));
    headline(ctx, on
      ? 'With the motor running the wires carry ' + fmt(I, 1) + ' A, the drop in them leaves the bulb ' + fmt(Vp, 1) + ' V of the supply, and it gives out ' + fmt(Pb, 1) + ' W.'
      : 'With the motor switched off the wires carry only ' + fmt(I, 2) + ' A, the bulb keeps ' + fmt(Vp, 1) + ' V of the supply, and it gives out ' + fmt(Pb, 1) + ' W.');
    wires(ctx, [[170, 200], [1030, 200]]);
    wires(ctx, [[170, 480], [1030, 480]]);
    wires(ctx, [[170, 200], [170, 480]]);
    battery(ctx, 170, 340, V);
    resistor(ctx, 380, 200, true, 'R_1', rw);
    text(ctx, 'the wires', 380, 130, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 550, 200, 1, 0, 'I = ' + fmt(I, 2) + ' A');
    /* the bulb on its own path, and the motor on a path of its own behind a switch */
    wires(ctx, [[700, 200], [700, 296]]); wires(ctx, [[700, 384], [700, 480]]);
    bulb(ctx, 700, 340, frac);
    text(ctx, 'R_2', 630, 340, C('resistance'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, fmt(rb, 0) + ' Ω', 770, 340, C('resistance'), { size: 21, align: 'left', bg: PAL.panel });
    text(ctx, 'the bulb', 700, 452, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
    wires(ctx, [[1030, 200], [1030, 262]]);
    if (on) wires(ctx, [[1030, 262], [1030, 292]]);
    else line(ctx, 1030, 262, 1074, 236, PAL.ink, 3.5);
    dot(ctx, 1030, 262, PAL.ink, true, 6); dot(ctx, 1030, 292, PAL.ink, true, 6);
    wires(ctx, [[1030, 292], [1030, 480]]);
    resistor(ctx, 1030, 380, false, 'R_3', rm);
    text(ctx, on ? 'the motor, running' : 'the motor, switched off', 1030, 520, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'V_p = ' + fmt(Vp, 1) + ' V reaches the bulb', 700, 546, C('voltage'), { size: 21, weight: 600, align: 'center' });
    readout(d.readout,
      '\\kVp = \\kV - \\kIcur\\kResone = ' + fmt(V, 1) + '\\ \\text{V} - (' + fmt(I, 2) + '\\ \\text{A})(' + ohm(rw) + ') = ' + fmt(Vp, 1) + '\\ \\text{V}, \\quad \\kPtwopow = \\dfrac{\\kVp^{2}}{\\kRestwo} = ' + fmt(Pb, 1) + '\\ \\text{W}',
      on
        ? 'The motor draws a large current through the wires, the drop in them grows, and the bulb is left with ' + fmt(100 * Pb / Pfull, 0) + ' per cent of the power it has when the motor is off.'
        : 'With nothing but the bulb on the supply the current is small, so the wires take almost nothing and the bulb has practically the full supply voltage.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
