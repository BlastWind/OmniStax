/* Figures for section 31.2 Radiation Detection and Detectors.
   The page binds energy (the energy deposited), voltage (the tube's voltage)
   and current (the pulse the counter registers). Counts of ion pairs and of
   electrons are ink. Electrons are F.el('e-') and the scintillator's photon
   F.el('gamma'); the incoming radiation and the positive ions are ink, an ion
   hollow and an electron filled. The Geiger tube's cylinder and wire are the
   section's referents, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['31.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, axes, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
function sciTex(x) { let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e); if (+m.toFixed(2) >= 10) { m /= 10; e++; } return fmt(m, 2) + '\\times 10^{' + e + '}'; }

/* =====================================================================
   SIM · sim-geiger-tube · moving · flat (rule 28.1)
   The tube of Figure 31.8(b) in section. A particle crosses from the thin
   window in 0.95 s; the ion pairs it leaves, N = E/30.0 eV, are drawn one
   for every 500 (7 at 0.10 MeV, 67 at 1.00 MeV). With the voltage applied,
   each pair waits 0.12 s and then drifts for 0.8 s, the electron to the wire
   and the ion to the cylinder; the first electron to reach the wire starts
   one pulse of current, the same pulse whatever the energy, and one count.
   With no voltage the pairs stay where they formed. Everything at time t
   follows from t alone.
===================================================================== */
(function () {
  const H = 560, T = 3.2, PER = 500, EV_PAIR = 30.0;
  const d = sim('sim-geiger-tube', H);
  const E = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 0.1, max: 1.0, step: 0.01, value: 0.3, unit: 'MeV', dec: 2, onInput: reset, aria: 'the energy the particle deposits in the gas' });
  const vol = choice(d.controls, { label: '\\kV', options: [{ value: 'on', label: 'applied' }, { value: 'off', label: 'off' }], value: 'on', aria: 'the voltage between the wire and the cylinder', onInput: reset });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const X0 = 170, X1 = 930, TOP = 150, BOT = 390, YC = 270;
  const SX = 30, SPEED = 1020, WAIT = 0.12, DRIFT = 0.8;
  const trackY = (x) => 196 + (x - SX) * 0.03;
  const BOX = { l: 1090, r: 1320, t: 160, b: 380 };
  const TR = { l: 1112, r: 1300, b: 352, h: 56 };

  function pairs(n) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const x = X0 + 18 + (X1 - X0 - 36) * hash(i, 1), y = trackY(x) + (hash(i, 2) - 0.5) * 18;
      out.push({ x, y, tf: (x - SX) / SPEED, ex: x + (hash(i, 3) - 0.5) * 10, iy: TOP + 9 });
    }
    return out;
  }
  const pulse = (s) => s <= 0 ? 0 : (1 - Math.exp(-s / 0.03)) * Math.exp(-s / 0.3);

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), on = vol.value === 'on';
    const Ev = E.v, N = Ev * 1e6 / EV_PAIR, n = Math.max(1, Math.round(N / PER)), P = pairs(n);
    const CYL = F.ref('cylinder'), WIRE = F.ref('wire'), VC = C('voltage'), IC = C('current'), EL = F.el('e-');
    hits = [];

    topline(ctx, on
      ? 'Ion pairs swept to the wire and the cylinder make one count, for ' + fmt(Ev, 2) + ' MeV as for any energy.'
      : 'With no voltage the ion pairs stay where they formed, and nothing is counted.');

    /* the tube in section: the gas, the cylinder's walls, the thin window and the far end */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.55); ctx.fillRect(X0, TOP, X1 - X0, BOT - TOP);
    ctx.beginPath(); ctx.ellipse(X0, YC, 24, (BOT - TOP) / 2, 0, 0, 2 * Math.PI); ctx.fill();
    ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke();
    ctx.setLineDash([6, 6]); ctx.strokeStyle = alpha(PAL.ink, 0.45);
    ctx.beginPath(); ctx.ellipse(X1, YC, 24, (BOT - TOP) / 2, 0, -Math.PI / 2, Math.PI / 2); ctx.stroke();
    ctx.restore();
    line(ctx, X0, TOP, X1, TOP, CYL, 5);
    line(ctx, X0, BOT, X1, BOT, CYL, 5);
    line(ctx, X0 + 12, YC, X1 + 150, YC, WIRE, 3);
    hits.push({ x: 600, y: TOP, r: 14, name: 'the conducting cylinder, negative' });
    hits.push({ x: 600, y: BOT, r: 14, name: 'the conducting cylinder, negative' });
    hits.push({ x: 500, y: YC, r: 10, name: 'the wire along the axis, positive' });
    hits.push({ x: X0 - 20, y: YC + 60, r: 18, name: 'the thin window the radiation enters by' });

    /* the circuit: wire to counter, counter to the battery's + plate, − plate to the cylinder */
    const BX = 1000, BY = 476, ink = alpha(PAL.ink, 0.75);
    line(ctx, X1 + 150, YC, BOX.l, YC, ink, 2.5);
    line(ctx, (BOX.l + BOX.r) / 2, BOX.b, (BOX.l + BOX.r) / 2, BY, ink, 2.5);
    line(ctx, (BOX.l + BOX.r) / 2, BY, BX, BY, ink, 2.5);
    line(ctx, BX - 16, BY, 700, BY, ink, 2.5);
    line(ctx, 700, BY, 700, BOT, ink, 2.5);
    dot(ctx, 700, BOT, PAL.ink, true, 5);
    ctx.save(); ctx.globalAlpha *= on ? 1 : 0.35;
    line(ctx, BX, BY - 22, BX, BY + 22, VC, 4);
    line(ctx, BX - 16, BY - 12, BX - 16, BY + 12, VC, 6);
    ctx.restore();
    text(ctx, on ? 'V' : 'V = 0', BX - 8, BY + 44, VC, { size: 22, weight: 600, align: 'center' });
    hits.push({ x: BX - 8, y: BY, r: 22, name: on ? 'the voltage source, + to the wire and − to the cylinder' : 'the voltage source, switched off' });

    /* the counter: its count and the pulse of current it registers */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t, 10); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'counter', (BOX.l + BOX.r) / 2, BOX.t - 18, PAL.ink, { size: 20, align: 'center' });
    let tA = Infinity;
    if (on) P.forEach((p) => { tA = Math.min(tA, p.tf + WAIT + DRIFT); });
    const count = on && t >= tA ? 1 : 0;
    text(ctx, String(count), (BOX.l + BOX.r) / 2, 212, PAL.ink, { size: 44, weight: 600, align: 'center' });
    text(ctx, count === 1 ? 'count' : 'counts', (BOX.l + BOX.r) / 2, 252, PAL.muted, { size: 17, align: 'center' });
    line(ctx, TR.l, TR.b, TR.r, TR.b, alpha(PAL.ink, 0.5), 2);
    text(ctx, 'I', TR.l - 6, TR.b - TR.h + 4, IC, { size: 20, weight: 600, align: 'right' });
    text(ctx, 't', TR.r + 4, TR.b, PAL.muted, { size: 17, align: 'left' });
    ctx.save(); ctx.strokeStyle = IC; ctx.lineWidth = 3; ctx.beginPath();
    for (let k = 0; k <= 160; k++) {
      const tt = T * k / 160; if (tt > t) break;
      const x = TR.l + (TR.r - TR.l) * k / 160, y = TR.b - TR.h * (on ? pulse(tt - tA) / 0.84 : 0);
      if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
    hits.push({ x: (BOX.l + BOX.r) / 2, y: 225, r: 40, name: count ? 'one count: the pulse of current was registered' : 'no count yet' });
    hits.push({ x: (TR.l + TR.r) / 2, y: TR.b - 20, r: 30, name: 'the current through the counter against time' });

    /* the radiation's track and the particle crossing */
    const xp = SX + SPEED * Math.min(t, (1010 - SX) / SPEED), yp = trackY(xp), gone = t * SPEED + SX > 1010;
    line(ctx, SX, trackY(SX), xp, yp, alpha(PAL.ink, gone ? 0.25 : 0.5), 2);
    if (!gone) {
      arrow(ctx, xp - 46, trackY(xp - 46), xp, yp, PAL.ink, 4);
      hits.push({ x: xp, y: yp, r: 16, name: 'a particle of ionizing radiation' });
    }
    text(ctx, 'radiation', SX, trackY(SX) - 22, PAL.ink, { size: 20, align: 'left' });

    /* the ion pairs: formed as the particle passes, then swept apart */
    P.forEach((p, i) => {
      if (t < p.tf) return;
      const k = on ? Math.min(1, Math.max(0, (t - p.tf - WAIT) / DRIFT)) : 0;
      if (k >= 1) return;
      const ex = p.x + (p.ex - p.x) * k, ey = p.y + 5 + (YC - 6 - p.y - 5) * k;
      const iy = p.y - 5 + (p.iy - p.y + 5) * k;
      dot(ctx, p.x, iy, PAL.ink, false, 5);
      dot(ctx, ex, ey, EL, true, 5);
      if (i < 12) {
        hits.push({ x: ex, y: ey, r: 9, name: 'an electron, drawn for 500, ' + (on ? 'pulled to the wire' : 'left where it formed') });
        hits.push({ x: p.x, y: iy, r: 9, name: 'a positive ion, drawn for 500, ' + (on ? 'pulled to the cylinder' : 'left where it formed') });
      }
    });

    /* the frame's names */
    text(ctx, 'thin window', X0, TOP - 26, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'cylinder (−)', X1 - 120, TOP - 22, CYL, { size: 20, align: 'center' });
    text(ctx, 'wire (+)', X1 + 90, YC + 26, WIRE, { size: 20, align: 'center' });
    dot(ctx, X0 + 10, 520, EL, true, 6);
    text(ctx, 'electron', X0 + 26, 520, PAL.ink, { size: 18, align: 'left' });
    dot(ctx, X0 + 150, 520, PAL.ink, false, 6);
    text(ctx, 'positive ion', X0 + 166, 520, PAL.ink, { size: 18, align: 'left' });

    ro.set('N = \\frac{\\kE}{30.0\\ \\text{eV}} = \\frac{' + fmt(Ev, 2) + '\\ \\text{MeV}}{30.0\\ \\text{eV}} = ' + sciTex(N) + '\\ \\text{ion pairs}',
      'Each pair drawn stands for ' + PER + ' ion pairs.', { form: 'n' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 31.9 · sim-photomultiplier · moving · flat (rule 28.1)
   The radiation reaches the scintillator in 0.35 s and makes a flash; its
   photons reach the photocathode at 0.7 s; then each of seven stages
   (photocathode to dynode 1, dynode k to k + 1, dynode 6 to the anode) takes
   0.45 s, and the output pulse leaves the anode at 3.85 s. Stage s carries
   n₀δˢ electrons, at most 64 of them drawn. The graph counts the electrons
   leaving each stage on a log axis from 1 to 10⁵, fixed (4 × 4⁶ = 16 384 at
   the slider extremes). Electrons fly straight from plate to plate at uniform
   speed; the book draws straight paths too.
===================================================================== */
(function () {
  const H = 780, T = 4.4, CAP = 64, ND = 6, T0 = 0.7, ST = 0.45;
  const d = sim('sim-photomultiplier', H);
  const n0 = ctl(d.controls, { label: '\\text{photoelectrons}', cls: '', min: 1, max: 4, step: 1, value: 1, unit: '', dec: 0, onInput: reset, aria: 'the number of photoelectrons each flash ejects', detents: [1, 2, 3, 4] });
  const del = ctl(d.controls, { label: '\\text{ejected per electron}', cls: '', min: 2, max: 4, step: 1, value: 2, unit: '', dec: 0, onInput: reset, aria: 'the number of electrons each dynode ejects for every electron that strikes it', detents: [2, 3, 4] });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const CX = 360, TL = 190, TRt = 530, SC = { t: 140, b: 200 }, PCY = 214, ANY = 708;
  const GB = { l: 740, r: 1320, t: 170, b: 640 };
  /* dynode k (1..6): odd on the left, concave to the right; even on the right, concave to the left */
  const dyn = (k) => {
    const left = k % 2 === 1, cx = left ? 290 : 430, cy = 285 + 70 * (k - 1);
    return { left, cx, cy, ox: left ? cx + 70 : cx - 70 };
  };
  const onPlate = (k, u) => {
    const D = dyn(k), a = (D.left ? Math.PI : 0) + u;
    return { x: D.ox + 70 * Math.cos(a), y: D.cy + 70 * Math.sin(a) };
  };
  const source = (s, j, m) => {
    const u = m === 1 ? 0 : ((j + 0.5) / m - 0.5) * 0.7;
    if (s === 0) return { x: CX + u * 120, y: PCY + 4 };
    return onPlate(s, u * (dyn(s).left ? -1 : 1));
  };
  const target = (s, j, m) => {
    const u = m === 1 ? 0.05 : ((j + 0.5) / m - 0.5) * 0.7 + (hash(j, s) - 0.5) * 0.08;
    if (s === ND) return { x: CX + u * 60, y: ANY };
    return onPlate(s + 1, u * (dyn(s + 1).left ? -1 : 1));
  };

  function photon(ctx, x, y, ux, uy, color) {
    const px = -uy, py = ux, L = 34, N = 28;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
    for (let j = 0; j <= N; j++) {
      const s = j / N - 0.5, a = 6 * Math.cos(Math.PI * s) * Math.sin(s * 6 * 2 * Math.PI);
      const qx = x + ux * s * L + px * a, qy = y + uy * s * L + py * a;
      if (j) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
    }
    ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), a = n0.v, b = del.v, EL = F.el('e-'), GA = F.el('gamma'), IC = C('current');
    const count = (s) => a * Math.pow(b, s), out = count(ND);
    hits = [];

    topline(ctx, 'Six dynodes multiply ' + a + ' photoelectron' + (a === 1 ? '' : 's') + ' into ' + out + ' electrons at the anode.');

    /* the tube, the scintillator on its face and the photocathode inside it */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.35); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(TL, SC.b, TRt - TL, 540, 14); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.strokeStyle = alpha(PAL.ink, 0.7);
    ctx.beginPath(); ctx.roundRect(255, SC.t, 210, SC.b - SC.t, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, TL + 12, PCY, TRt - 12, PCY, alpha(PAL.ink, 0.65), 6);
    text(ctx, 'scintillator', 240, (SC.t + SC.b) / 2, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'photocathode', TRt + 14, PCY, PAL.ink, { size: 20, align: 'left' });
    hits.push({ x: CX, y: (SC.t + SC.b) / 2, r: 30, name: 'the scintillator, which turns the radiation’s energy into a flash of light' });
    hits.push({ x: 250, y: PCY, r: 14, name: 'the photocathode, where each photon ejects a photoelectron' });

    for (let k = 1; k <= ND; k++) {
      const D = dyn(k), a0 = (D.left ? Math.PI : 0) - 0.5, a1 = (D.left ? Math.PI : 0) + 0.5;
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 8; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(D.ox, D.cy, 70, a0, a1); ctx.stroke(); ctx.restore();
      const c = onPlate(k, 0);
      hits.push({ x: c.x, y: c.y, r: 24, name: 'dynode ' + k + (k === 1 ? ', more positive than the photocathode' : ', more positive than dynode ' + (k - 1)) });
    }
    const d1 = onPlate(1, 0);
    label(ctx, 'dynodes', d1.x - 8, d1.y, { side: 'left', size: 20, color: PAL.ink, gap: 70 });
    line(ctx, CX - 40, ANY + 8, CX + 40, ANY + 8, PAL.muted, 8);
    hits.push({ x: CX, y: ANY + 8, r: 24, name: 'the anode, which collects the electrons as the output pulse' });

    /* the radiation and the flash */
    const yr = 92 + (176 - 92) * Math.min(1, t / 0.35);
    if (t < 0.45) arrow(ctx, CX, 92, CX, yr, PAL.ink, 4);
    else line(ctx, CX, 92, CX, 176, alpha(PAL.ink, 0.3), 2);
    text(ctx, 'radiation', CX + 16, 104, PAL.ink, { size: 20, align: 'left' });
    if (t >= 0.35 && t < 0.75) {
      const k = (t - 0.35) / 0.4;
      ctx.save(); ctx.globalAlpha *= 1 - k; ctx.fillStyle = alpha(GA, 0.5);
      ctx.beginPath(); ctx.arc(CX, 178, 8 + 26 * k, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      hits.push({ x: CX, y: 178, r: 24, name: 'the flash of light in the scintillator' });
    }
    if (t >= 0.4 && t < T0) {
      const k = (t - 0.4) / (T0 - 0.4);
      for (let j = 0; j < a; j++) {
        const p = source(0, j, a), dx = p.x - CX, dy = p.y - 180, L = Math.hypot(dx, dy) || 1;
        const x = CX + dx * k, y = 180 + dy * k;
        photon(ctx, x, y, dx / L, dy / L, GA);
        hits.push({ x, y, r: 16, name: 'a photon of the flash, on its way to the photocathode' });
      }
    }

    /* the cascade: the paths of every stage begun, the electrons of the stage under way */
    for (let s = 0; s <= ND; s++) {
      const ts = T0 + ST * s;
      if (t < ts) break;
      const k = Math.min(1, (t - ts) / ST), m = Math.min(CAP, count(s));
      for (let j = 0; j < m; j++) {
        const p = source(s, j, m), q = target(s, j, m), x = p.x + (q.x - p.x) * k, y = p.y + (q.y - p.y) * k;
        line(ctx, p.x, p.y, x, y, alpha(PAL.ink, k < 1 ? 0.35 : 0.2), 1.5);
        if (k < 1) dot(ctx, x, y, EL, true, 4.5);
      }
      if (k < 1) {
        const p = source(s, 0, m), q = target(s, 0, m);
        hits.push({ x: p.x + (q.x - p.x) * k, y: p.y + (q.y - p.y) * k, r: 16, name: count(s) + ' electron' + (count(s) === 1 ? '' : 's') + (s === 0 ? ' from the photocathode' : ' from dynode ' + s) });
      }
    }

    /* the output pulse */
    const tOut = T0 + ST * (ND + 1);
    line(ctx, CX + 40, ANY + 8, TRt + 30, ANY + 8, alpha(PAL.ink, 0.6), 2.5);
    if (t >= tOut) {
      const k = Math.min(1, (t - tOut) / 0.3);
      arrow(ctx, TRt + 30, ANY + 8, TRt + 30 + 70 * k, ANY + 8, IC, 5);
    }
    text(ctx, 'output pulse', TRt + 12, ANY + 40, PAL.ink, { size: 20, align: 'left' });
    hits.push({ x: TRt + 60, y: ANY + 8, r: 22, name: 'the output pulse of current, ' + out + ' electrons' });

    /* the count leaving each stage, on a scale of powers of ten */
    const TICK = ['1', '10', '100', '10' + sup(3), '10' + sup(4), '10' + sup(5)];
    const { X, Y } = axes(ctx, GB, [-1, 7], [0, 5], { nx: 8, ny: 5, fx: (v) => (v < 0 || v > 6) ? '' : v === 0 ? 'cathode' : String(Math.round(v)), fy: (v) => TICK[Math.round(v)] || '', xl: 'stage (dynode)', yl: 'electrons' });
    let prev = null;
    for (let s = 0; s <= ND; s++) {
      if (t < T0 + ST * s) break;
      const x = X(s), y = Y(Math.log10(count(s)));
      if (prev) line(ctx, prev.x, prev.y, x, y, alpha(PAL.ink, 0.6), 3);
      dot(ctx, x, y, EL, true, 8);
      hits.push({ x, y, r: 12, name: count(s) + ' electron' + (count(s) === 1 ? '' : 's') + (s === 0 ? ' leave the photocathode' : ' leave dynode ' + s) });
      prev = { x, y };
    }

    ro.set('\\text{electrons at the anode} = ' + a + '\\times ' + b + '^{6} = ' + out,
      out > CAP ? 'Each stage draws at most ' + CAP + ' of its electrons; the graph counts them all.' : '', { form: 'n' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
