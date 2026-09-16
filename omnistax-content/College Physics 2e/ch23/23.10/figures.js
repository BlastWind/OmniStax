/* Figures for section 23.10 RL Circuits.
   The page binds inductance, resistance, current, voltage and time, which is what
   ch23/COLOR.md gives 23.10. The coil and the henries beside it are the inductance
   hue, the resistor and its ohms the resistance hue, the current in the loop and
   both curves the current hue, the battery and the emf the inductor raises against
   the change the voltage hue, and the time axis with its marks at one, two and
   three time constants the time hue. The battery plates, the switch, the wires and
   the frame of every graph are ink, since a device is never tinted. The fractions
   0.632 and 0.368 and the target percentage are untyped and in ink.
   The first figure has a clock in it, since the current is a function of time and
   the whole result is how long it takes, so it registers a cycle and takes the
   transport. The second is a ladder of values at whole time constants, which is a
   table of states and not a process, so it registers no cycle and carries no
   transport (rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.10'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, pinned, note } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces the schematic is drawn from ---------- */
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, 3.5); };
/* A resistance lying along a horizontal wire, drawn as a plain box. The box is the
   device and stays ink; what is written beside it is a resistance and wears its hue. */
function resistor(ctx, x, y, w, h) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* A coil on a horizontal wire: four half turns above the line it sits on. */
function coil(ctx, x, y, w, turns) {
  const r = w / (2 * turns);
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
  ctx.beginPath();
  for (let i = 0; i < turns; i++) ctx.arc(x - w / 2 + r * (2 * i + 1), y, r, Math.PI, 0, false);
  ctx.stroke(); ctx.restore();
}
/* One cell across a vertical wire: a long plate for the positive terminal and a
   short one for the negative, the positive plate the upper of the two. */
function cell(ctx, x, y) {
  line(ctx, x - 27, y - 11, x + 27, y - 11, PAL.ink, 5);
  line(ctx, x - 14, y + 11, x + 14, y + 11, PAL.ink, 5);
  text(ctx, '+', x + 40, y - 20, PAL.muted, { size: 22, align: 'center' });
}
/* An arrow set along a wire in the current hue, (dx, dy) the way it runs. */
function flow(ctx, x, y, dx, dy, L) {
  arrow(ctx, x - dx * L / 2, y - dy * L / 2, x + dx * L / 2, y + dy * L / 2, C('current'), 5);
}

/* =====================================================================
   FIGURE 23.42: the switching circuit of panel (a) with the growth curve
   of panel (b) and the decay curve of panel (c) drawn beneath it, one
   number with one original and not a fold (ch23/config.md). Moving: the
   current is a function of time and the whole result is how long it
   takes, so the figure registers a cycle over a fixed 25 ms window and
   takes the app's transport. The defaults are Example 23.9's own, a
   7.50 mH coil and a 3.00 Ω resistor giving tau = 2.50 ms, with a 30.0 V
   battery so that the final current is the 10.0 A the example starts
   from.
===================================================================== */
(function () {
  const H = 940;
  const d = sim('sim-rl-switching', H);
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 20, step: 0.25, value: 7.5, unit: 'mH', dec: 2, onInput: reset, aria: 'the inductance of the coil' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 10, step: 0.25, value: 3, unit: 'Ω', dec: 2, onInput: reset, aria: 'the total resistance of the circuit' });
  const vS = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 5, max: 30, step: 1, value: 30, unit: 'V', dec: 1, onInput: reset, aria: 'the emf of the battery' });
  /* a dropdown rather than a button row, since three sliders leave a segmented
     control too narrow for either state to be named (rule 26.1) */
  const pos = select(d.controls, {
    label: '\\text{the switch is at}',
    options: [{ value: '1', label: 'position 1' }, { value: '2', label: 'position 2' }],
    value: '1', aria: 'which of the switch’s two positions the blade rests on', onInput: reset,
  });

  /* Fixed ranges, never rescaled: 25 ms of time, which is ten time constants of the
     default circuit and the "about 25 ms" the example's discussion names, and 0 to
     30 A of current, which is the greatest final current the sliders reach, 30.0 V
     through 1.00 Ω. Nothing the sliders can set leaves the frame. */
  const TWIN = 0.025, IMAX = 30;
  const BOX = { l: 250, r: 1230, t: 600, b: 820 };
  const cy = cycle(() => TWIN, 1.2);
  function reset() { cy.reset(); }

  function draw() {
    const { ctx } = begin(d.c);
    const L = lS.v / 1000, R = rS.v, V = vS.v, on = pos.value === '1';
    const tau = L / R, I0 = V / R, t = cy.now();
    const I = on ? I0 * (1 - Math.exp(-t / tau)) : I0 * Math.exp(-t / tau);
    const coilEmf = on ? V - I * R : I * R;      /* the magnitude of L dI/dt at this instant */
    const cL = C('inductance'), cR = C('resistance'), cI = C('current'), cV = C('voltage'), cT = C('time');

    /* ---- the circuit ---- */
    wires(ctx, [[430, 200], [1150, 200], [1150, 480], [200, 480]]);
    wires(ctx, [[300, 130], [200, 130], [200, 480]]);
    wires(ctx, [[300, 262], [300, 480]]);
    cell(ctx, 200, 320);
    text(ctx, 'the battery', 160, 296, PAL.ink, { size: 21, align: 'right', bg: PAL.panel });
    text(ctx, fmt(V, 1) + ' V', 160, 330, cV, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    /* the two contacts and the blade resting on the one the choice names */
    dot(ctx, 300, 130, PAL.ink, true, 7); dot(ctx, 300, 262, PAL.ink, true, 7);
    dot(ctx, 430, 200, PAL.ink, true, 7);
    line(ctx, 430, 200, on ? 300 : 300, on ? 130 : 262, PAL.ink, 4.5);
    text(ctx, '1', 300, 96, on ? PAL.ink : PAL.muted, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, '2', 340, 296, on ? PAL.muted : PAL.ink, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, on ? 'the battery is in the circuit' : 'the battery is cut out', 480, 396, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    /* the coil and the resistor along the top wire */
    coil(ctx, 680, 200, 180, 4);
    text(ctx, 'L', 680, 148, cL, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(lS.v, 2) + ' mH', 680, 248, cL, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    resistor(ctx, 960, 200, 132, 48);
    text(ctx, 'R', 960, 148, cR, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, fmt(R, 2) + ' Ω', 960, 248, cR, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    /* the current, which runs the same way round in both positions: in position 2
       the coil keeps it going after the battery has gone */
    if (I > 0.005) {
      flow(ctx, 540, 200, 1, 0, 56);
      flow(ctx, 700, 480, -1, 0, 56);
      text(ctx, 'I = ' + fmt(I, 2) + ' A', 700, 528, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    } else {
      text(ctx, on ? 'no current yet' : 'the current has died away', 700, 528, cI, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    }
    text(ctx, (on ? 'the coil opposes the rise, ' : 'the coil opposes the fall, ') + fmt(coilEmf, 2) + ' V', 680, 300, cV, { size: 21, weight: 600, align: 'center', bg: PAL.panel });

    /* ---- the graph: the current against time ---- */
    const { X, Y } = axes(ctx, BOX, [0, TWIN * 1000], [0, IMAX], {
      xl: 'time t (ms)', xc: cT, yl: 'current I (A)', yc: cI, nx: 5, ny: 3, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 0),
    });
    const f = (ms) => (on ? I0 * (1 - Math.exp(-ms / (tau * 1000))) : I0 * Math.exp(-ms / (tau * 1000)));
    line(ctx, BOX.l, Y(I0), BOX.r, Y(I0), alpha(cI, 0.5), 3, [10, 10]);
    text(ctx, 'I₀ = V/R = ' + fmt(I0, 2) + ' A', BOX.r - 10, Y(I0) - 20, cI, { size: 19, align: 'right', bg: PAL.panel });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, f, 0, TWIN * 1000, X, Y, alpha(cI, 0.35), 3, 120);
    curve(ctx, f, 0, Math.max(t * 1000, 0.0001), X, Y, cI, 5, 120);
    ctx.restore();
    /* the marks at one, two and three time constants, which slide along the axis as
       the inductance and the resistance are changed */
    let lastMark = -1e9;
    [1, 2, 3].forEach((n) => {
      const ms = n * tau * 1000;
      if (ms > TWIN * 1000) return;
      /* a very fast circuit crowds its three marks into the first few units of the
         axis, where the labels would sit on each other; there only the ones that
         have room are drawn, and the headline and the readout carry the rest */
      if (X(ms) - lastMark < 46) return;
      lastMark = X(ms);
      line(ctx, X(ms), BOX.t, X(ms), BOX.b, alpha(cT, 0.5), 2, [4, 8]);
      text(ctx, n === 1 ? 'τ' : n + 'τ', X(ms), BOX.b + 74, cT, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      const pc = 100 * (on ? 1 - Math.exp(-n) : Math.exp(-n));
      text(ctx, fmt(pc, 1) + '%', X(ms), BOX.t + 22 + (n - 1) * 26, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    });
    pinned(ctx, BOX, X, Y, t * 1000, I, cI, fmt(I, 2) + ' A');
    line(ctx, X(t * 1000), Y(I), X(t * 1000), BOX.b, alpha(cI, 0.4), 2, [4, 8]);

    topline(ctx, t < 1e-9
      ? (on
        ? 'The switch has just been thrown to position 1, so the current is still nothing and the whole of the ' + fmt(V, 1) + ' V stands across the coil.'
        : 'The switch has just been thrown to position 2, so the battery is out of the circuit and the ' + fmt(I0, 2) + ' A the coil was carrying has only begun to fall.')
      : (on
        ? 'At ' + fmt(t * 1000, 2) + ' ms, which is ' + fmt(t / tau, 2) + ' time constants, the current has climbed to ' + fmt(I, 2) + ' A of its final ' + fmt(I0, 2) + ' A.'
        : 'At ' + fmt(t * 1000, 2) + ' ms, which is ' + fmt(t / tau, 2) + ' time constants, the current has fallen to ' + fmt(I, 2) + ' A of the ' + fmt(I0, 2) + ' A it started from.'));
    readout(d.readout,
      on
        ? `\\kIcur = \\kIocur\\left(1 - e^{-\\kt/\\ktauRL}\\right) = (${fmt(I0, 2)}\\ \\text{A})\\left(1 - e^{-${fmt(t * 1000, 2)}/${fmt(tau * 1000, 2)}}\\right) = ${fmt(I, 2)}\\ \\text{A}`
        : `\\kIcur = \\kIocur e^{-\\kt/\\ktauRL} = (${fmt(I0, 2)}\\ \\text{A})\\,e^{-${fmt(t * 1000, 2)}/${fmt(tau * 1000, 2)}} = ${fmt(I, 2)}\\ \\text{A}`,
      'The time constant is τ = L/R = ' + fmt(lS.v, 2) + ' mH divided by ' + fmt(R, 2) + ' Ω, which is ' + fmt(tau * 1000, 2) + ' ms, so the 25 ms drawn here is ' + fmt(TWIN / tau, 1) + ' time constants wide.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TWIN / 5), draw });
})();

/* =====================================================================
   SIM: the counted ladder against the exponential. The section's method
   is to count rather than to solve, 0.632 of what is left in every time
   constant going up and 0.368 of what is there in every one coming down,
   and it sets two problems on how far the counting stands from the exact
   answer. Still: a ladder of values at whole time constants is a table of
   states, so there is no cycle and no transport.
===================================================================== */
(function () {
  const H = 780;
  const d = sim('sim-counting-time-constants', H);
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 20, step: 0.25, value: 7.5, unit: 'mH', dec: 2, aria: 'the inductance of the coil' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 10, step: 0.25, value: 3, unit: 'Ω', dec: 2, aria: 'the total resistance of the circuit' });
  const fS = ctl(d.controls, { label: '\\text{target}', cls: '', min: 50, max: 99.9, step: 0.1, value: 99, unit: '%', dec: 1, aria: 'the fraction of the final current the circuit is asked to reach' });
  const dir = select(d.controls, {
    label: '\\text{the circuit is}',
    options: [{ value: 'on', label: 'turning on' }, { value: 'off', label: 'turning off' }],
    value: 'on', aria: 'whether the current is growing toward its final value or dying away from it',
  });

  /* Fixed ranges: seven time constants across, written in τ and in milliseconds
     together, and 0 to 100 percent of the final current up the side. Neither
     depends on a slider, since the horizontal axis is counted in time constants. */
  const NMAX = 6, BOX = { l: 230, r: 1250, t: 196, b: 636 };

  function draw() {
    const { ctx } = begin(d.c);
    const L = lS.v / 1000, R = rS.v, tau = L / R, on = dir.value === 'on';
    const frac = fS.v / 100;
    /* the exact answer, and the whole number of time constants the counting needs
       before it first passes the target */
    /* the same count either way: turning on, 1 - e^-n = f; turning off, e^-n = 1 - f */
    const nExact = -Math.log(1 - frac);
    const nCount = Math.ceil(nExact - 1e-9);
    const tExact = nExact * tau * 1000, tCount = nCount * tau * 1000;
    const cI = C('current'), cT = C('time'), cL = C('inductance'), cR = C('resistance');
    const level = on ? frac : 1 - frac;          /* where the target sits up the side */

    const { X, Y } = axes(ctx, BOX, [0, NMAX], [0, 100], {
      xl: 'time, counted in time constants τ = ' + fmt(tau * 1000, 2) + ' ms', xc: cT,
      yl: 'current (% of I₀)', yc: cI, nx: 6, ny: 4,
      fx: (u) => (Math.abs(u - Math.round(u)) < 0.01 ? String(Math.round(u)) : fmt(u, 1)), fy: (u) => fmt(u, 0),
    });
    /* the bars: the value the counting lands on at every whole time constant */
    const bw = (X(1) - X(0)) * 0.26;
    for (let n = 0; n <= 5; n++) {
      const pc = 100 * (on ? 1 - Math.pow(Math.exp(-1), n) : Math.pow(Math.exp(-1), n));
      const x = X(n), yTop = Y(pc), yBot = Y(0);
      if (pc > 0.4) {
        ctx.save(); ctx.fillStyle = alpha(cI, 0.28); ctx.strokeStyle = cI; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.rect(x - bw / 2, yTop, bw, yBot - yTop); ctx.fill(); ctx.stroke(); ctx.restore();
      }
      /* the first bar of a decay stands at the top of the frame, where a label above
         it would sit on the axis title, so that one is written inside the bar */
      if (pc > 0.4) text(ctx, fmt(pc, 1) + '%', x, yTop + (pc > 98 ? 26 : -20), cI, { size: 17, align: 'center', bg: PAL.panel });
    }
    /* the exact exponential drawn through them */
    curve(ctx, (n) => 100 * (on ? 1 - Math.exp(-n) : Math.exp(-n)), 0, NMAX, X, Y, cI, 5, 120);
    /* the target the reader asks for, and the two times that reach it */
    line(ctx, BOX.l, Y(100 * level), BOX.r, Y(100 * level), alpha(PAL.ink, 0.45), 3, [10, 10]);
    text(ctx, 'the target, ' + fmt(fS.v, 1) + '%', BOX.r - 12, Y(100 * level) + (on ? 26 : -18), PAL.ink, { size: 19, align: 'right', bg: PAL.panel });
    if (nExact <= NMAX) {
      line(ctx, X(nExact), BOX.t, X(nExact), BOX.b, cT, 3);
      text(ctx, 'the exponential gets there at ' + fmt(tExact, 2) + ' ms', on ? BOX.l + 14 : BOX.r - 14, BOX.b - 26, cT, { size: 18, align: on ? 'left' : 'right', bg: PAL.panel });
    }
    if (nCount <= NMAX) {
      line(ctx, X(nCount), BOX.t, X(nCount), BOX.b, alpha(cT, 0.5), 3, [10, 10]);
      text(ctx, 'counting needs ' + nCount + ' of them, ' + fmt(tCount, 2) + ' ms', on ? BOX.l + 14 : BOX.r - 14, BOX.b - 60, cT, { size: 18, align: on ? 'left' : 'right', bg: PAL.panel });
    }

    topline(ctx, on
      ? 'Counting in whole time constants puts the current past ' + fmt(fS.v, 1) + ' percent of its final value after ' + nCount + ' of them, at ' + fmt(tCount, 2) + ' ms, where the exponential gets there at ' + fmt(tExact, 2) + ' ms.'
      : 'Counting in whole time constants puts the current down past ' + fmt(fS.v, 1) + ' percent of the way to zero after ' + nCount + ' of them, at ' + fmt(tCount, 2) + ' ms, where the exponential gets there at ' + fmt(tExact, 2) + ' ms.');
    readout(d.readout,
      on
        ? `\\kt = -\\ktauRL\\ln\\left(1 - ${fmt(frac, 3)}\\right) = -(${fmt(tau * 1000, 2)}\\ \\text{ms})\\ln\\left(1 - ${fmt(frac, 3)}\\right) = ${fmt(tExact, 2)}\\ \\text{ms}`
        : `\\kt = -\\ktauRL\\ln\\left(${fmt(1 - frac, 3)}\\right) = -(${fmt(tau * 1000, 2)}\\ \\text{ms})\\ln\\left(${fmt(1 - frac, 3)}\\right) = ${fmt(tExact, 2)}\\ \\text{ms}`,
      'Counting ' + nCount + ' whole time constants gives ' + fmt(tCount, 2) + ' ms, which is ' + fmt(100 * (tCount - tExact) / tExact, 1) + ' percent longer than the exact answer; the two agree exactly at every whole time constant, where the bars stand on the curve, and part company in between.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
