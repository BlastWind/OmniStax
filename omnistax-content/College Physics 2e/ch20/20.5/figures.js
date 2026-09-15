/* Figures for section 20.5 Alternating Current versus Direct Current. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, pinned, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); const v = s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s; return (x < 0 ? '−' : '') + v; };
/* the same three significant figures for a number that goes inside math, where a comma is a separator and not a grouping mark */
const sigM = (x) => { const s = Math.abs(x).toPrecision(3); const v = s.includes('e') || Math.abs(x) >= 1000 ? String(Math.round(Number(s))) : s; return (x < 0 ? '-' : '') + v; };

/* ---------- the pieces of a circuit schematic, all of them in ink ---------- */
/* a resistor lying along the wire from (x1, y) to (x2, y), its zigzag in ink */
function resistor(ctx, x1, x2, y, h) {
  const n = 6, w = (x2 - x1) / (n + 1);
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x1, y);
  for (let i = 0; i <= n; i++) ctx.lineTo(x1 + w * (i + 0.5), y + (i % 2 ? h : -h));
  ctx.lineTo(x2, y); ctx.stroke(); ctx.restore();
}
/* a battery of two cells standing on the wire at (x, y), the long plate uppermost */
function battery(ctx, x, y, s) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
  [[-14, 26], [-2, 13], [10, 26], [22, 13]].forEach(([dy, half]) => { ctx.beginPath(); ctx.moveTo(x - half * s, y + dy * s); ctx.lineTo(x + half * s, y + dy * s); ctx.stroke(); });
  ctx.restore();
}
/* an alternating source: a circle on the wire at (x, y) with one cycle of a sine drawn inside it */
function acSource(ctx, x, y, r) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i <= 40; i++) { const u = i / 40, px = x - r * 0.62 + r * 1.24 * u, py = y - Math.sin(u * TAU) * r * 0.42; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
}
/* the free electrons of one straight run of wire, spaced every gap units and shifted by off */
function electrons(ctx, x1, x2, y, off, gap) {
  const span = x2 - x1, sh = ((off % gap) + gap) % gap;
  for (let x = x1 + sh; x <= x2 + 1e-6; x += gap) { if (x < x1 || x > x2) continue; dot(ctx, x, y, F.el('e-'), true, 8); }
  return span;
}

/* =====================================================================
   FIGURE 20.14 + 20.15: one source, one resistor, and the choice of
   direct or alternating current. The scene is the circuit and the graph
   beneath it follows the voltage and the current through a fixed window
   of 50 ms. It moves because the whole subject is a periodic time: the
   point sweeps the window once each loop and the electrons in the wire
   drift one way on DC and shuttle back and forth on AC, reversing every
   time the trace crosses zero.
===================================================================== */
(function () {
  const d = sim('sim-ac-versus-dc', 800);
  const WIN = 0.05;                       /* the window the graph shows, 50 ms, fixed */
  const kind = choice(d.controls, { label: 'Source', options: [{ value: 'dc', label: 'DC' }, { value: 'ac', label: 'AC' }], value: 'ac', aria: 'kind of source', onInput: () => reset() });
  const V0 = ctl(d.controls, { label: '\\kVo', cls: 'voltage', min: 60, max: 200, step: 5, value: 170, unit: 'V', dec: 0, onInput: reset, aria: 'peak voltage' });
  const fq = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 20, max: 120, step: 5, value: 60, unit: 'Hz', dec: 0, onInput: reset, aria: 'frequency' });
  const Rr = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 20, max: 100, step: 5, value: 40, unit: 'Ω', dec: 0, onInput: reset, aria: 'resistance' });
  const cy = cycle(() => WIN, 1.2);
  function reset() { cy.reset(); }
  const I0 = () => V0.v / Rr.v;
  const Vof = (t) => (kind.value === 'dc' ? V0.v : V0.v * Math.sin(TAU * fq.v * t));
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), ac = kind.value === 'ac';
    const V = Vof(t), I = V / Rr.v, i0 = I0();
    /* the loop: the source on the left edge, the resistor on the top edge, the free electrons on the bottom */
    const L = 430, R = 980, T = 215, B = 425, my = (T + B) / 2;
    const lab = labeller(ctx, 800, { headline: 2 });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(L, my + 36); ctx.lineTo(L, B); ctx.lineTo(R, B); ctx.lineTo(R, T); ctx.lineTo(R - 90, T); ctx.moveTo(L + 90, T); ctx.lineTo(L, T); ctx.lineTo(L, my - 36); ctx.stroke(); ctx.restore();
    resistor(ctx, L + 90, R - 90, T, 22);
    if (ac) acSource(ctx, L, my, 36); else battery(ctx, L, my, 1.25);
    /* the conventional current round the loop, its direction the sign of I */
    const dir = I >= 0 ? 1 : -1;
    if (Math.abs(I) > 0.02 * (i0 || 1)) {
      const w = 4, cx = (L + R) / 2;
      arrow(ctx, cx - 60 * dir, B + 40, cx + 60 * dir, B + 40, C('current'), w);
      arrow(ctx, R, my + 40 * dir, R, my - 40 * dir, C('current'), w);
    }
    /* the electrons, which run the other way: a steady drift on DC and a shuttle on AC */
    const q = ac ? (i0 / (TAU * fq.v)) * (1 - Math.cos(TAU * fq.v * t)) : i0 * t;
    const swing = ac ? Math.max(30, Math.min(150, 2600 * (i0 / (TAU * fq.v)))) : 0;
    const off = ac ? -(q / Math.max(1e-9, (2 * i0) / (TAU * fq.v))) * swing : -2600 * q;
    electrons(ctx, L + 26, R - 26, B, off, 78);
    lab.add('free electrons', (L + R) / 2 + 210, B, 0.2, -1, F.el('e-'), 20, 30);
    lab.add(' ' + sig3(Math.abs(I)) + ' A', R, my, 1, 0, C('current'), 22, 46);
    lab.add(fmt(Rr.v, 0) + ' Ω', (L + R) / 2, T - 22, 0, -1, C('resistance'), 22, 30);
    lab.add((ac ? 'peak ' : '') + fmt(V0.v, 0) + ' V', L, my, -1, 0, C('voltage'), 22, 52);
    /* the graph: 50 ms across, ±200 V on the left axis and ±10 A on the right, both fixed
       from the slider maxima (V0 up to 200 V, and I0 up to 200 V / 20 Ω = 10 A) */
    const box = { l: 190, r: 1240, t: 515, b: 715 }, VMAX = 200, IMAX = 12;
    const { X, Y } = axes(ctx, box, [0, WIN * 1000], [-VMAX, VMAX], { nx: 5, ny: 4, xl: 'time (ms)', yl: 'voltage (V)', yc: C('voltage'), fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const Yi = (a) => Y(a * (VMAX / IMAX));
    for (let k = -10; k <= 10; k += 5) text(ctx, fmt(k, 0), box.r + 14, Yi(k), C('current'), { size: 17, align: 'left' });
    text(ctx, 'current (A)', box.r, box.t - 24, C('current'), { size: 20, weight: 600, align: 'right' });
    curve(ctx, (ms) => Vof(ms / 1000), 0, WIN * 1000, X, Y, C('voltage'), 5, 220);
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (ms) => Vof(ms / 1000) / Rr.v * (VMAX / IMAX), 0, WIN * 1000, X, Y, C('current'), 4, 220);
    ctx.restore();
    line(ctx, X(t * 1000), box.t, X(t * 1000), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, box, X, Y, t * 1000, V, C('voltage'));
    pinned(ctx, box, X, Y, t * 1000, I * (VMAX / IMAX), C('current'));
    lab.flush();
    topline(ctx, ac
      ? 'At ' + fmt(t * 1000, 1) + ' ms the source stands at ' + sig3(V) + ' V and drives ' + sig3(I) + ' A, so the electrons are running ' + (I > 0.01 ? 'to the left' : I < -0.01 ? 'to the right' : 'nowhere at all, as the current passes through zero') + '.'
      : 'The battery holds a steady ' + fmt(V0.v, 0) + ' V, so a constant ' + sig3(I) + ' A flows and the electrons drift one way for as long as the circuit is closed.');
    readout(d.readout, ac
      ? `\\kV = \\kVo\\sin 2\\pi \\kf\\kt = ${fmt(V0.v, 0)}\\ \\text{V}\\sin\\!\\big(2\\pi(${fmt(fq.v, 0)}\\ \\text{Hz})(${fmt(t * 1000, 1)}\\ \\text{ms})\\big) = ${sig3(V)}\\ \\text{V}`
      : `\\kV = ${fmt(V0.v, 0)}\\ \\text{V},\\qquad \\kIcur = \\frac{\\kV}{\\kRes} = \\frac{${fmt(V0.v, 0)}\\ \\text{V}}{${fmt(Rr.v, 0)}\\ \\Omega} = ${sig3(I)}\\ \\text{A}`,
      ac ? 'The peak current is ' + sig3(i0) + ' A, and the current reaches it at the same instant as the voltage reaches its own peak, since the two are in phase.'
         : 'Nothing in the circuit changes with time, which is what makes this direct current.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.01), draw });
})();

/* =====================================================================
   FIGURE 20.16: the power an alternating current delivers. The voltage
   and the current run in the upper frame and their product in the lower
   one, through the same fixed window of 50 ms. It moves for the same
   reason the figure above does: the reader has to see the product sweep
   out its curve to see that it never goes below zero and that half of it
   stands above the average.
===================================================================== */
(function () {
  const d = sim('sim-ac-power', 880);
  const WIN = 0.05;
  const V0 = ctl(d.controls, { label: '\\kVo', cls: 'voltage', min: 60, max: 200, step: 5, value: 170, unit: 'V', dec: 0, onInput: reset, aria: 'peak voltage' });
  const Rr = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 20, max: 100, step: 5, value: 40, unit: 'Ω', dec: 0, onInput: reset, aria: 'resistance' });
  const fq = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 20, max: 120, step: 5, value: 60, unit: 'Hz', dec: 0, onInput: reset, aria: 'frequency' });
  const cy = cycle(() => WIN, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), i0 = V0.v / Rr.v, p0 = V0.v * i0, pave = p0 / 2;
    const V = V0.v * Math.sin(TAU * fq.v * t), I = V / Rr.v, P = V * I;
    const lab = labeller(ctx, 880, { headline: 2 });
    /* the upper frame: 50 ms across, ±200 V on the left and ±10 A on the right, both fixed from the slider maxima */
    const up = { l: 190, r: 1240, t: 150, b: 370 }, VMAX = 200, IMAX = 12;
    const a1 = axes(ctx, up, [0, WIN * 1000], [-VMAX, VMAX], { nx: 5, ny: 4, yl: 'voltage (V)', yc: C('voltage'), fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const Yi = (a) => a1.Y(a * (VMAX / IMAX));
    for (let k = -10; k <= 10; k += 5) text(ctx, fmt(k, 0), up.r + 14, Yi(k), C('current'), { size: 17, align: 'left' });
    text(ctx, 'current (A)', up.r, up.t - 24, C('current'), { size: 20, weight: 600, align: 'right' });
    curve(ctx, (ms) => V0.v * Math.sin(TAU * fq.v * ms / 1000), 0, WIN * 1000, a1.X, a1.Y, C('voltage'), 5, 220);
    ctx.save(); ctx.setLineDash([10, 10]);
    curve(ctx, (ms) => (V0.v * Math.sin(TAU * fq.v * ms / 1000) / Rr.v) * (VMAX / IMAX), 0, WIN * 1000, a1.X, a1.Y, C('current'), 4, 220);
    ctx.restore();
    line(ctx, a1.X(t * 1000), up.t, a1.X(t * 1000), up.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, up, a1.X, a1.Y, t * 1000, V, C('voltage'));
    pinned(ctx, up, a1.X, a1.Y, t * 1000, I * (VMAX / IMAX), C('current'));
    /* the lower frame: the same 50 ms across, 0 to 2000 W up, which is the greatest peak
       power the sliders reach (200 V into 20 Ω) */
    const lo = { l: 190, r: 1240, t: 500, b: 750 }, PMAX = 2000;
    const a2 = axes(ctx, lo, [0, WIN * 1000], [0, PMAX], { nx: 5, ny: 4, xl: 'time (ms)', yl: 'power (W)', yc: C('power'), fx: (v) => fmt(v, 0), fy: (v) => commas(String(Math.round(v))) });
    const Pf = (ms) => p0 * Math.pow(Math.sin(TAU * fq.v * ms / 1000), 2);
    /* the areas the average line cuts off, which are equal: above it shaded, below it shaded the same way */
    ctx.save(); ctx.fillStyle = alpha(C('power'), 0.16); ctx.beginPath(); ctx.moveTo(a2.X(0), a2.Y(pave));
    for (let i = 0; i <= 220; i++) { const ms = (WIN * 1000 * i) / 220; ctx.lineTo(a2.X(ms), a2.Y(Pf(ms))); }
    ctx.lineTo(a2.X(WIN * 1000), a2.Y(pave)); ctx.closePath(); ctx.fill(); ctx.restore();
    curve(ctx, Pf, 0, WIN * 1000, a2.X, a2.Y, C('power'), 5, 220);
    line(ctx, lo.l, a2.Y(pave), lo.r, a2.Y(pave), C('power'), 3, [10, 10]);
    line(ctx, a2.X(t * 1000), lo.t, a2.X(t * 1000), lo.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, lo, a2.X, a2.Y, t * 1000, P, C('power'));
    lab.add('average ' + sig3(pave) + ' W', lo.r - 150, a2.Y(pave), 0, -1, C('power'), 20, 26);
    lab.add('peak ' + sig3(p0) + ' W', lo.l + 210, a2.Y(p0), 0, -1, C('power'), 20, 26);
    lab.flush();
    topline(ctx, 'At ' + fmt(t * 1000, 1) + ' ms the voltage is ' + sig3(V) + ' V and the current ' + sig3(I) + ' A, and their product is ' + sig3(P) + ' W, which is never negative because the two change sign together.');
    readout(d.readout, `\\kPave = \\frac{1}{2}\\kIocur\\kVo = \\frac{1}{2}(${sigM(i0)}\\ \\text{A})(${fmt(V0.v, 0)}\\ \\text{V}) = ${sigM(pave)}\\ \\text{W}`,
      'The rms values of this source are ' + sig3(i0 / Math.SQRT2) + ' A and ' + sig3(V0.v / Math.SQRT2) + ' V, and their product is the same average power.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.01), draw });
})();

/* =====================================================================
   SIM: why the power is sent at a high voltage. A plant sends a fixed
   power down a line of fixed resistance, and the loss the line takes is
   read against the voltage it is sent at. Still: it answers its sliders,
   registers no cycle and gets no transport.
===================================================================== */
(function () {
  const d = sim('sim-transmission', 820);
  const Pw = ctl(d.controls, { label: '\\kPave', cls: 'power', min: 10, max: 200, step: 5, value: 100, unit: 'MW', dec: 0, aria: 'power sent' });
  const Vt = ctl(d.controls, { label: '\\kVrms', cls: 'voltage', min: 25, max: 400, step: 5, value: 200, unit: 'kV', dec: 0, aria: 'transmission voltage' });
  const Rl = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 0.5, max: 5, step: 0.1, value: 1, unit: 'Ω', dec: 1, aria: 'resistance of the line' });
  /* the current in amperes and the loss in watts, from the power in megawatts and the voltage in kilovolts */
  const curr = () => (Pw.v * 1e6) / (Vt.v * 1e3);
  const loss = (V) => Math.pow((Pw.v * 1e6) / (V * 1e3), 2) * Rl.v;
  const pct = (V) => (100 * loss(V)) / (Pw.v * 1e6);
  /* a tower standing on the line at (x, y), h tall */
  function tower(ctx, x, y, h) {
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x - 22, y + h); ctx.lineTo(x - 7, y); ctx.lineTo(x + 7, y); ctx.lineTo(x + 22, y + h);
    ctx.moveTo(x - 16, y + h * 0.55); ctx.lineTo(x + 16, y + h * 0.55);
    ctx.moveTo(x - 30, y + 14); ctx.lineTo(x + 30, y + 14); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const I = curr(), lw = loss(Vt.v), fr = pct(Vt.v);
    const lab = labeller(ctx, 820, { headline: 2 });
    /* the scene: the plant on the left, the line across, the city on the right */
    const y = 305, x1 = 240, x2 = 1180;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.fillStyle = PAL.soft; ctx.lineJoin = 'round';
    /* the cooling tower, a waisted shell */
    ctx.beginPath(); ctx.moveTo(40, y + 70); ctx.quadraticCurveTo(64, y - 30, 58, y - 110); ctx.lineTo(102, y - 110); ctx.quadraticCurveTo(96, y - 30, 120, y + 70); ctx.closePath(); ctx.fill(); ctx.stroke();
    /* the boiler house, taller, with two stacks */
    ctx.fillRect(130, y - 60, 70, 130); ctx.strokeRect(130, y - 60, 70, 130);
    ctx.fillRect(140, y - 150, 14, 90); ctx.strokeRect(140, y - 150, 14, 90);
    ctx.fillRect(176, y - 150, 14, 90); ctx.strokeRect(176, y - 150, 14, 90);
    /* the turbine hall, lower and longer, with a row of windows */
    ctx.fillRect(200, y - 10, 80, 80); ctx.strokeRect(200, y - 10, 80, 80);
    ctx.fillStyle = alpha(PAL.ink, 0.35);
    for (let k = 0; k < 3; k++) ctx.fillRect(210 + k * 22, y + 8, 12, 18);
    /* the plumes from the stacks, in ink */
    ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2.5;
    for (const sx of [147, 183]) { ctx.beginPath(); ctx.moveTo(sx, y - 152); ctx.quadraticCurveTo(sx + 10, y - 176, sx + 2, y - 194); ctx.stroke(); }
    ctx.restore();
    F.house(ctx, 1200, y + 70, 100, 2); F.house(ctx, 1290, y + 70, 76, 1);
    [460, 720, 980].forEach((x) => tower(ctx, x, y - 86, 86));
    line(ctx, 250, y - 10, 250, y - 72, PAL.ink, 4);
    line(ctx, x1, y - 72, x2, y - 72, PAL.ink, 4);
    /* the current the line carries, and the share of the power it turns into heat */
    arrow(ctx, 520, y - 72, 700, y - 72, C('current'), 5);
    arrow(ctx, 880, y - 72, 1060, y - 72, C('current'), 5);
    const band = Math.max(6, Math.min(30, (fr / 20) * 30));
    ctx.save(); ctx.strokeStyle = alpha(C('power'), 0.3); ctx.lineWidth = band * 2 + 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x1 + 20, y - 72); ctx.lineTo(x2 - 20, y - 72); ctx.stroke(); ctx.restore();
    lab.add('the plant, ' + fmt(Pw.v, 0) + ' MW sent', 160, y + 70, 0, 1, C('power'), 20, 30);
    lab.add('the city', 1240, y + 76, 0, 1, PAL.ink, 20, 34);
    lab.add(sig3(I) + ' A in the line', 790, y - 72, 0, 1, C('current'), 22, 34 + band);
    lab.add(sig3(lw / 1e6) + ' MW lost as heat', 600, y - 72 - band, 0, -1, C('power'), 22, 28);
    lab.add(fmt(Rl.v, 1) + ' Ω of line', 400, y - 72, 0, 1, C('resistance'), 20, 34 + band);
    /* the graph: the loss against the voltage it is sent at, 25 to 400 kV across and 0 to 20 per cent up,
       which is what 100 MW down a 1.0 Ω line loses at the lowest voltage the slider reaches */
    const box = { l: 190, r: 1240, t: 510, b: 730 };
    const { X, Y } = axes(ctx, box, [0, 400], [0, 20], { nx: 4, ny: 4, xl: 'transmission voltage (kV)', xc: C('voltage'), yl: 'power lost (%)', yc: C('power'), fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 3, box.r - box.l, box.b - box.t + 3); ctx.clip();
    curve(ctx, (V) => Math.min(60, pct(Math.max(5, V))), 25, 400, X, Y, C('power'), 5, 160);
    ctx.restore();
    const pt = pinned(ctx, box, X, Y, Vt.v, Math.min(20, fr), C('power'));
    lab.add(sig3(fr) + ' % lost here', pt.x, pt.y, 0.6, -1, C('power'), 20, 26);
    line(ctx, X(Vt.v), box.b, X(Vt.v), Y(Math.min(20, fr)), alpha(PAL.ink, 0.35), 2, [4, 8]);
    lab.flush();
    topline(ctx, 'Sending ' + fmt(Pw.v, 0) + ' MW at ' + fmt(Vt.v, 0) + ' kV needs a current of ' + sig3(I) + ' A, and a line of ' + fmt(Rl.v, 1) + ' Ω turns ' + sig3(lw / 1e6) + ' MW of that power into heat, which is ' + sig3(fr) + ' per cent of it.');
    readout(d.readout, `\\kIrms = \\frac{\\kPave}{\\kVrms} = ${sigM(I)}\\ \\text{A},\\qquad \\kPave = \\kIrms^{2}\\kRes = (${sigM(I)}\\ \\text{A})^{2}(${fmt(Rl.v, 1)}\\ \\Omega) = ${sigM(lw / 1e6)}\\ \\text{MW}`,
      'Doubling the voltage halves the current, and since the loss goes as the square of the current it falls to a quarter of what it was.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
