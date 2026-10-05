/* Figures for section 23.10 RL Circuits.
   The page binds inductance, resistance, current, voltage and time, which is what
   ch23/COLOR.md gives 23.10. The coil and the henries beside it are the inductance
   hue, the resistor and its ohms the resistance hue, the current in the loop and
   both curves the current hue, the battery and the emf the inductor raises against
   the change the voltage hue, and the time axis with its marks at one, two and
   three time constants the time hue. The battery, the switch, the inductor and the
   resistor are the section's referents and are drawn in their referent colours
   through F.ref, their names beside them; the wires and the frame of every graph
   are ink. The fractions
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
   device and wears its referent colour; what is written beside it is a resistance
   and wears its hue. */
function resistor(ctx, x, y, w, h) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('resistor'); ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* A coil on a horizontal wire: four half turns above the line it sits on. */
function coil(ctx, x, y, w, turns) {
  const r = w / (2 * turns);
  ctx.save(); ctx.strokeStyle = F.ref('inductor'); ctx.lineWidth = 3.5; ctx.lineCap = 'round';
  ctx.beginPath();
  for (let i = 0; i < turns; i++) ctx.arc(x - w / 2 + r * (2 * i + 1), y, r, Math.PI, 0, false);
  ctx.stroke(); ctx.restore();
}
/* One cell across a vertical wire: a long plate for the positive terminal and a
   short one for the negative, the positive plate the upper of the two. */
function cell(ctx, x, y) {
  const c = F.ref('battery');
  line(ctx, x - 27, y - 11, x + 27, y - 11, c, 5);
  line(ctx, x - 14, y + 11, x + 14, y + 11, c, 5);
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
  /* throwing the switch rewrites the law by meaning: I₀ and the exponential keep their places, and
     the "1 −" the battery supplies fades with its brackets */
  const { formula: eqHost, note: small } = F.readout(d);
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
    text(ctx, 'the battery', 160, 296, F.ref('battery'), { size: 21, align: 'right', bg: PAL.panel });
    text(ctx, fmt(V, 1) + ' V', 160, 330, cV, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    /* the two contacts and the blade resting on the one the choice names */
    const cSw = F.ref('switch');
    dot(ctx, 300, 130, cSw, true, 7); dot(ctx, 300, 262, cSw, true, 7);
    dot(ctx, 430, 200, cSw, true, 7);
    line(ctx, 430, 200, on ? 300 : 300, on ? 130 : 262, cSw, 4.5);
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
    const kOn = pos.mix((p) => (p === '1' ? 1 : 0));   /* the curve bends from the growth into the decay rather than cutting */
    const f = (ms) => { const e = Math.exp(-ms / (tau * 1000)); return I0 * (kOn * (1 - e) + (1 - kOn) * e); };
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
      text(ctx, n === 1 ? 'τ' : n + 'τ', X(ms), X(ms) > BOX.r - 140 ? BOX.b + 104 : BOX.b + 74, cT, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
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
    const ex = `e^{-${fmt(t * 1000, 2)}/${fmt(tau * 1000, 2)}}`, I0v = `(\\mk{I0v}{${fmt(I0, 2)}}\\ \\text{A})`, res = `\\mk{r}{${fmt(I, 2)}}\\ \\text{A}`;
    F.morph(eqHost, on
      ? `\\mk{I}{\\kIcur} = \\mk{I0}{\\kIocur}\\mk{o}{(1 - }\\mk{e}{e^{-\\kt/\\ktauRL}}\\mk{c}{)} = ${I0v}\\mk{o2}{(1 - }\\mk{ev}{${ex}}\\mk{c2}{)} = ${res}`
      : `\\mk{I}{\\kIcur} = \\mk{I0}{\\kIocur}\\mk{e}{e^{-\\kt/\\ktauRL}} = ${I0v}\\mk{ev}{${ex}} = ${res}`);
    const said = 'The time constant is $\\ktauRL = \\kLind/\\kRes$ = ' + fmt(lS.v, 2) + ' mH divided by ' + fmt(R, 2) + ' Ω, which is ' + fmt(tau * 1000, 2) + ' ms, so 25 ms is ' + fmt(TWIN / tau, 1) + ' time constants.';
    if (small.dataset.said !== said) { small.dataset.said = said; small.textContent = said; F.renderMath(small); }
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
  const H = 730;
  const d = sim('sim-counting-time-constants', H);
  const lS = ctl(d.controls, { label: '\\kLind', cls: 'inductance', min: 1, max: 20, step: 0.25, value: 7.5, unit: 'mH', dec: 2, aria: 'the inductance of the coil' });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 10, step: 0.25, value: 3, unit: 'Ω', dec: 2, aria: 'the total resistance of the circuit' });
  const fS = ctl(d.controls, { label: '\\text{target}', cls: '', min: 50, max: 99.9, step: 0.1, value: 99, unit: '%', dec: 1, aria: 'the fraction of the final current the circuit is asked to reach' });
  const dir = F.choice(d.controls, {
    label: '\\text{the circuit is}',
    options: [{ value: 'on', label: 'turning on' }, { value: 'off', label: 'turning off' }],
    value: 'on', aria: 'whether the current is growing toward its final value or dying away from it',
  });
  d.controls.lastElementChild.style.gridColumn = '1 / -1';

  /* Fixed ranges: half a time constant either side of 0 and 7, so 99.9 percent (6.9 τ,
     counted 7) stays on the axis and no bar straddles the frame, and 0 to 100 percent of
     the final current up the side. Neither depends on a slider, since the horizontal axis
     is counted in time constants. The band above the plot holds the two time tags. */
  const NMAX = 7, BOX = { l: 230, r: 1180, t: 250, b: 640 }, ROW1 = 124, ROW2 = 156;
  const { formula: eqHost, note: small } = F.readout(d);

  function draw() {
    const { ctx } = begin(d.c);
    const L = lS.v / 1000, R = rS.v, tau = L / R, on = dir.value === 'on';
    const frac = fS.v / 100;
    /* the same count either way: turning on, 1 - e^-n = f; turning off, e^-n = 1 - f */
    const nExact = -Math.log(1 - frac);
    const nCount = Math.ceil(nExact - 1e-9);
    const tExact = nExact * tau * 1000, tCount = nCount * tau * 1000;
    const cI = C('current'), cT = C('time');
    const kOn = dir.mix((v) => (v === 'on' ? 1 : 0));   /* turning round, every bar and the curve bend from the climb into the decay */
    const up = (x) => kOn * (1 - x) + (1 - kOn) * x;     /* x is what is left, e^-n */
    const level = 100 * up(1 - frac);                    /* where the target sits up the side */

    const lines = topline(ctx, on
      ? 'Counting in whole time constants puts the current past ' + fmt(fS.v, 1) + ' percent of its final value after ' + nCount + ' of them, at ' + fmt(tCount, 2) + ' ms, where the exponential gets there at ' + fmt(tExact, 2) + ' ms.'
      : 'Counting in whole time constants puts the current down past ' + fmt(fS.v, 1) + ' percent of the way to zero after ' + nCount + ' of them, at ' + fmt(tCount, 2) + ' ms, where the exponential gets there at ' + fmt(tExact, 2) + ' ms.');
    const lab = F.labeller(ctx, H, { headline: lines });
    const yl = 'current (% of I₀)';
    /* the gridlines fall between the bars, and the whole time constants are written under them */
    const { X: X0, Y } = axes(ctx, BOX, [0, NMAX + 1], [0, 100], {
      xl: 'time, counted in time constants τ = ' + fmt(tau * 1000, 2) + ' ms', xc: cT,
      yl, yc: cI, nx: NMAX + 1, ny: 4, fx: () => '', fy: (u) => fmt(u, 0),
    });
    const X = (n) => X0(n + 0.5);
    for (let n = 0; n <= NMAX; n++) {
      const c = n === nCount;   /* the count's own mark wears the time hue, so a bar too short to see still says where it stops */
      text(ctx, n === 0 ? '0' : n === 1 ? 'τ' : n + 'τ', X(n), BOX.b + 26, c ? cT : PAL.muted, { size: c ? 19 : 17, weight: c ? 600 : 400, align: 'center' });
    }
    lab.place({ l: BOX.l - 7, r: BOX.l + F.measure(ctx, yl, { size: 20, weight: 600 }) + 7, t: BOX.t - 38, b: BOX.t - 10 });

    /* the bars: the value the counting lands on at every whole time constant, the one
       the count stops at filled deeper */
    const bw = (X(1) - X(0)) * 0.3;
    const bars = [];
    for (let n = 0; n <= NMAX; n++) {
      const pc = 100 * up(Math.exp(-n)), x = X(n), yTop = Math.min(Y(pc), Y(0) - 2);
      if (pc < 0.05) continue;
      bars.push({ n, pc, x, yTop });
      const strong = n === nCount;
      ctx.save(); ctx.fillStyle = alpha(cI, strong ? 0.5 : 0.2); ctx.strokeStyle = cI; ctx.lineWidth = strong ? 4 : 3;
      ctx.beginPath(); ctx.rect(x - bw / 2, yTop, bw, Y(0) - yTop); ctx.fill(); ctx.stroke(); ctx.restore();
      lab.place({ l: x - bw / 2, r: x + bw / 2, t: yTop, b: Y(0) });
    }
    /* the target, named at the right end of its line */
    line(ctx, BOX.l, Y(level), BOX.r + 4, Y(level), alpha(PAL.ink, 0.45), 3, [10, 10]);
    lab.place({ l: BOX.l, r: BOX.r, t: Y(level) - 2, b: Y(level) + 2 });
    text(ctx, 'target ' + fmt(level, 1) + '%', BOX.r + 12, Math.min(Y(level), BOX.b - 12), PAL.ink, { size: 19, align: 'left', bg: PAL.panel });
    /* the exact exponential drawn through the bars, its path held clear of the labels,
       and the time it reaches the target dropped to the axis */
    curve(ctx, (u) => 100 * up(Math.exp(-(u - 0.5))), 0.5, NMAX + 1, X0, Y, cI, 5, 150);
    for (let n = 0; n <= NMAX + 0.5; n += 0.04) { const x = X(n), y = Y(100 * up(Math.exp(-n))); lab.place({ l: x - 3, r: x + 3, t: y - 3, b: y + 3 }); }
    line(ctx, X(nExact), Y(level), X(nExact), BOX.b, cT, 3);
    dot(ctx, X(nExact), Y(level), cT, true, 8);
    lab.place({ l: X(nExact) - 2, r: X(nExact) + 2, t: Y(level) - 8, b: BOX.b });

    /* the two times as tags in the band, each on its own line behind a key: the drop
       line for the exponential, the deeper bar and its mark on the axis for the count */
    const tagL = BOX.r - 260;
    const tag = (row, s, key) => {
      key(tagL, row);
      text(ctx, s, tagL + 50, row, cT, { size: 19, weight: 600, align: 'left', bg: PAL.panel });
      lab.place({ l: tagL - 4, r: tagL + 57 + F.measure(ctx, s, { size: 19, weight: 600 }), t: row - 15, b: row + 15 });
    };
    tag(ROW1, 'exact ' + fmt(tExact, 2) + ' ms', (x, y) => { line(ctx, x, y, x + 36, y, cT, 3); dot(ctx, x + 36, y, cT, true, 6); });
    tag(ROW2, 'counted ' + fmt(tCount, 2) + ' ms', (x, y) => {
      ctx.save(); ctx.fillStyle = alpha(cI, 0.5); ctx.strokeStyle = cI; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.rect(x + 10, y - 12, 18, 24); ctx.fill(); ctx.stroke(); ctx.restore();
    });

    /* every bar's value above it, stepped up and leadered where the curve or the target is in
       the way; where the climb is steep, up and to the left, the side the curve lies below */
    bars.forEach((b) => {
      const ux = kOn >= 0.5 && 100 * Math.exp(-b.n) > 20 ? -0.6 : 0;
      lab.add(fmt(b.pc, 1) + '%', b.x, b.yTop, ux, ux ? -0.8 : -1, cI, 17, 22);
    });
    lab.flush();

    const tv = `(\\mk{tv}{${fmt(tau * 1000, 2)}}\\ \\text{ms})`, res = `\\mk{r}{${fmt(tExact, 2)}}\\ \\text{ms}`;
    F.morph(eqHost, on
      ? `\\mk{t}{\\kt} = -\\mk{tau}{\\ktauRL}\\ln(\\mk{o}{1 - }\\mk{f}{${fmt(frac, 3)}}) = -${tv}\\ln(\\mk{o2}{1 - }\\mk{f2}{${fmt(frac, 3)}}) = ${res}`
      : `\\mk{t}{\\kt} = -\\mk{tau}{\\ktauRL}\\ln(\\mk{f}{${fmt(1 - frac, 3)}}) = -${tv}\\ln(\\mk{f2}{${fmt(1 - frac, 3)}}) = ${res}`);
    const said = 'Counting gives $\\kt = ' + nCount + '\\ktauRL$, ' + fmt(100 * (tCount - tExact) / tExact, 1) + ' percent longer than the exact time.';
    if (small.dataset.said !== said) { small.dataset.said = said; small.textContent = said; F.renderMath(small); }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
