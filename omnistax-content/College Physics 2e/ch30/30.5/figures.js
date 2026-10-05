/* 30.5 Applications of Atomic Excitations and De-Excitations.
   Colour: level energies and the energy axes wear the energy hue, wavelengths
   and lengths the position hue, the eye's direction the angle hue. A visible
   photon is drawn in the colour of its wavelength through `wavelengthColor`
   and F.fact (the physical fact); an ultraviolet or infrared photon is ink.
   Electrons are F.el('e-'), helium and neon F.el('He') and F.el('Ne'). The
   lasing atoms of the cavity are of no named element and are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.5'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, labeller, hover, readout, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = Math.PI * 2;
const HC = 1240;                                            /* hc in eV·nm */
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const smooth = (x) => F.ease.smooth(clamp(x, 0, 1));

function wavelengthColor(nm) {
  if (nm < 380 || nm > 700) return PAL.ink;
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
  else r = 1;
  const k = nm < 420 ? 0.4 + 0.6 * (nm - 380) / 40 : nm > 680 ? 0.4 + 0.6 * (700 - nm) / 20 : 1;
  const c = (x) => Math.round(255 * Math.pow(x * Math.max(k, 0.55), 0.8));
  const hx = (x) => c(x).toString(16).padStart(2, '0');
  return F.fact('#' + hx(r) + hx(g) + hx(b));
}
const RED = 633;                                            /* the helium-neon line, nm */
const bandOf = (nm) => nm < 380 ? 'ultraviolet' : nm > 700 ? 'infrared' : 'visible';

/* a photon as a short wave packet centred on (x, y), running along (ux, uy); its
   crests sit at fixed places along its own path, so two packets side by side with
   the same phase are in step */
function packet(ctx, x, y, ux, uy, color, o = {}) {
  const L = o.L ?? 52, amp = o.amp ?? 8, waves = o.waves ?? 3, ph = o.phase ?? 0, w = o.w ?? 2.5, N = 40;
  const px = -uy, py = ux, along = x * ux + y * uy;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
  for (let j = 0; j <= N; j++) {
    const s = j / N - 0.5, env = Math.cos(Math.PI * s);
    const a = amp * env * env * Math.sin(TAU * ((along + s * L) * waves / L) + ph);
    const qx = x + ux * s * L + px * a, qy = y + uy * s * L + py * a;
    if (j) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
  }
  ctx.stroke(); ctx.restore();
}
const wavesOf = (nm) => clamp(1.6 + 1300 / nm, 2, 7.5);

/* =====================================================================
   SIM · sim-fluorescence · moving · flat (rule 28.1)
   An atom with levels at 0, 2.10, 2.90 and 4.90 eV. A photon of the chosen
   wavelength crosses from the left; it is absorbed only when its energy
   matches a spacing above the ground state, and the electron then comes down
   in one step or through every level in between, a photon leaving at each
   step. Energy axis: 0 to 5 eV, fixed.
===================================================================== */
(function () {
  const LV = [0, 2.10, 2.90, 4.90];
  const d = sim('sim-fluorescence', 520);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 200, max: 700, step: 1, value: 253, unit: 'nm', dec: 0, onInput: reset,
    aria: 'the wavelength of the incoming photon',
    specials: [{ at: HC / LV[3] }, { at: HC / LV[2] }, { at: HC / LV[1] }] });
  const path = choice(d.controls, { label: '\\text{de-excites}', options: [{ value: 'one', label: 'in one step' }, { value: 'steps', label: 'in smaller steps' }], value: 'steps', aria: 'how the atom de-excites', onInput: reset, ms: 0 });
  const T = 5.6, VIN = 360, VOUT = 520, ABS = 1.0, X_UP = 400, X0 = 470, DX = 75;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const Y = (E) => 470 - 68 * E, AX = 300, R0 = 320, R1 = 780, YIN = 420;
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  function plan() {
    const Ein = HC / lam.v;
    const L = LV.findIndex((e, i) => i > 0 && Math.abs(e - Ein) < 0.015);
    const steps = [];
    if (L > 0) {
      const seq = path.value === 'one' ? [L, 0] : Array.from({ length: L + 1 }, (_, i) => L - i);
      for (let i = 0; i + 1 < seq.length; i++) steps.push({ a: seq[i], b: seq[i + 1], t0: 1.8 + 0.9 * i, x: X0 + DX * i });
    }
    return { Ein, L, steps };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), P = plan(), EC = C('energy');
    hits = [];
    const lab = labeller(ctx, 520, { headline: 1 });

    /* the energy axis and the rungs */
    arrow(ctx, AX, 486, AX, 104, EC, 3);
    text(ctx, 'E (eV)', AX, 92, EC, { size: 20, weight: 600, align: 'center' });
    LV.forEach((E, i) => {
      line(ctx, R0, Y(E), R1, Y(E), PAL.ink, 3);
      line(ctx, AX - 7, Y(E), AX + 7, Y(E), EC, 2);
      text(ctx, fmt(E, 2), AX - 14, Y(E), EC, { size: 18, align: 'right' });
      hits.push({ x: (R0 + R1) / 2, y: Y(E), r: 14, name: i ? 'an excited level, ' + fmt(E, 2) + ' eV above the ground state' : 'the ground state' });
    });
    text(ctx, 'ground state', R1 + 12, Y(0), PAL.ink, { size: 18, align: 'left' });

    /* the incoming photon and its lane */
    const nmIn = lam.v, cin = wavelengthColor(nmIn);
    const xin = 40 + VIN * t, absorbed = P.L > 0;
    line(ctx, 40, YIN, absorbed ? X_UP : 1380, YIN, alpha(PAL.ink, 0.22), 2, [6, 8]);
    text(ctx, fmt(nmIn, 0) + ' nm, ' + fmt(P.Ein, 2) + ' eV', 40, YIN - 30, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
    if ((!absorbed || t < ABS) && xin < 1400) {
      const x = absorbed ? Math.min(xin, X_UP) : xin;
      packet(ctx, x, YIN, 1, 0, cin, { L: 76, amp: 13, w: 3.2, waves: wavesOf(nmIn) });
      hits.push({ x, y: YIN, r: 30, name: 'an ' + (bandOf(nmIn) === 'visible' ? 'visible' : bandOf(nmIn)) + ' photon, ' + fmt(nmIn, 0) + ' nm, ' + fmt(P.Ein, 2) + ' eV' });
    }

    /* the electron: up at the absorption, then down step by step */
    let ex = X_UP, ey = Y(0);
    if (absorbed && t >= ABS) {
      const k = smooth((t - ABS) / 0.3), top = Y(LV[P.L]);
      arrow(ctx, X_UP, Y(0), X_UP, Y(0) + (top - Y(0)) * k, PAL.ink, 3);
      ey = Y(0) + (top - Y(0)) * k;
    }
    P.steps.forEach((s, i) => {
      if (t < s.t0 - 0.2) return;
      const k = smooth((t - s.t0) / 0.3), xs = s.x, ya = Y(LV[s.a]), yb = Y(LV[s.b]);
      const slide = smooth((t - (s.t0 - 0.2)) / 0.2);
      ex = (i ? P.steps[i - 1].x : X_UP) + (xs - (i ? P.steps[i - 1].x : X_UP)) * slide; ey = ya;
      if (t >= s.t0) { arrow(ctx, xs, ya, xs, ya + (yb - ya) * k, PAL.ink, 3); ey = ya + (yb - ya) * k; ex = xs; }
      const dE = LV[s.a] - LV[s.b], nm = HC / dE, ym = (ya + yb) / 2, col = wavelengthColor(nm);
      if (t >= s.t0 + 0.3) {
        line(ctx, xs + 14, ym, 1380, ym, alpha(PAL.ink, 0.22), 2, [6, 8]);
        text(ctx, fmt(dE, 2) + ' eV, ' + fmt(nm, 0) + ' nm', 1380, ym - 22, PAL.ink, { size: 18, align: 'right', bg: PAL.panel });
        const x = xs + 50 + VOUT * (t - s.t0 - 0.3);
        if (x < 1420) {
          packet(ctx, x, ym, 1, 0, col, { L: 76, amp: 13, w: 3.2, waves: wavesOf(nm) });
          hits.push({ x, y: ym, r: 30, name: 'an emitted ' + bandOf(nm) + ' photon, ' + fmt(nm, 0) + ' nm, ' + fmt(dE, 2) + ' eV' });
        }
      }
    });
    dot(ctx, ex, ey, F.el('e-'), true, 10);
    hits.push({ x: ex, y: ey, r: 14, name: 'the electron' });
    lab.flush();

    const nm = fmt(nmIn, 0), band = bandOf(nmIn);
    if (!absorbed) topline(ctx, 'A ' + nm + '-nm photon matches no level spacing, so it passes straight through.');
    else if (P.steps.length === 1) topline(ctx, 'A ' + nm + '-nm ' + (band === 'visible' ? '' : band + ' ') + 'photon lifts the electron ' + fmt(P.Ein, 2) + ' eV, and it comes down in one step.');
    else topline(ctx, 'A ' + nm + '-nm ' + (band === 'visible' ? '' : band + ' ') + 'photon lifts the electron ' + fmt(P.Ein, 2) + ' eV, and it comes down in ' + ['', '', 'two', 'three'][P.steps.length] + ' smaller steps.');

    const tex = '\\kE = \\frac{h\\kc}{\\klam} = \\frac{1240\\ \\text{eV}\\cdot\\text{nm}}{' + nm + '\\ \\text{nm}} = ' + fmt(P.Ein, 2) + '\\ \\text{eV}';
    let note;
    if (!absorbed) note = 'No level lies ' + fmt(P.Ein, 2) + ' eV above the ground state.';
    else if (P.steps.length === 1) note = P.L === 1 && path.value === 'steps' ? 'From the lowest excited level the only way down is one step, re-emitting a ' + nm + '-nm photon.' : 'One step down re-emits a photon of the same ' + fmt(P.Ein, 2) + ' eV.';
    else note = 'The photons emitted carry ' + P.steps.map((s) => fmt(LV[s.a] - LV[s.b], 2)).join(' + ') + ' = ' + fmt(P.Ein, 2) + ' eV, each less than the photon absorbed.';
    ro.set(tex, note, { form: 'e' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.34 + 30.35 + 30.36 · sim-laser · moving · flat (rule 28.1)
   Forty-eight atoms of a lasing material between two mirrors. Ground-state
   atoms are pumped to the second or third level, which decays to the
   metastable level in 0.12 s; a metastable atom decays on its own with a
   lifetime of TAU_M (drawn slowed: the true lifetimes are 10⁻⁸ s and
   milliseconds), three in ten of its photons along the axis. A photon passing
   within DY of an atom interacts with probability 1/2: a metastable atom is
   stimulated to emit a copy of it, same direction and phase, stacked beside
   it; a ground-state atom absorbs it. Half the light reaching the partial
   mirror passes. The readout averages the metastable count over 2 s, since
   lasing holds it close to one half. The pumping slider is the pumping
   rate times TAU_M, so the steady share left in the metastable state without
   lasing is s / (1 + s), one half at s = 1. A steady process, so the clock is
   endless. Level panel: one dot per atom on its rung, half the atoms marked.
===================================================================== */
(function () {
  const d = sim('sim-laser', 710);
  const pump = ctl(d.controls, { label: '\\text{pumping}', cls: '', min: 0, max: 4, step: 0.05, value: 3, unit: '', dec: 2,
    aria: 'the pumping rate, in excitations per atom per metastable lifetime', specials: [{ at: 1, label: 'inversion' }] });
  const mir = choice(d.controls, { label: '\\text{mirrors}', options: [{ value: 'both', label: 'at both ends' }, { value: 'none', label: 'none' }], value: 'both', aria: 'the mirrors' });
  const cy = cycle(() => Infinity, 0);
  const N = 48, TAU_M = 1.2, TAU_S = 0.12, V = 500, P_HIT = 0.5, OUTCOUPLE = 0.5, CAP = 400, DY = 20;
  const TL = 160, TR = 1080, TT = 140, TB = 320;
  const atoms = [];
  for (let i = 0; i < N; i++) {
    const r = Math.floor(i / 12), c = i % 12;
    const h = (k) => { const x = Math.sin(i * 91.7 + k * 47.3) * 43758.5453; return x - Math.floor(x); };
    atoms.push({ x: TL + 45 + c * 76 + (h(1) - 0.5) * 34, y: TT + 24 + r * 44 + (h(2) - 0.5) * 12, s: 0, lvl: 0, flash: 0 });
  }
  let photons = [], events = [], pop = [], simT = 0, shown = { t: -1, tex: '', note: '' };
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  function emit(x, y, ux, uy, ph, last) { if (photons.length < CAP) photons.push({ x, y, ux, uy, ph, last }); }
  function step(dt) {
    simT += dt;
    const p = pump.v / TAU_M, mirrors = mir.value === 'both';
    for (let i = 0; i < N; i++) {
      const A = atoms[i];
      A.flash = Math.max(0, A.flash - dt);
      if (A.s === 0 && Math.random() < p * dt) { A.s = 2; A.lvl = Math.random() < 0.5 ? 2 : 3; A.flash = 0.25; }
      else if (A.s === 2 && Math.random() < dt / TAU_S) A.s = 1;
      else if (A.s === 1 && Math.random() < dt / TAU_M) {
        A.s = 0;
        let ux, uy;
        if (Math.random() < 0.3) { ux = Math.random() < 0.5 ? -1 : 1; uy = 0; }
        else { const a = Math.random() * TAU; ux = Math.cos(a); uy = Math.sin(a); }
        emit(A.x, A.y, ux, uy, Math.random() * TAU, i);
        events.push({ t: simT, k: 'spont' });
      }
    }
    const keep = [];
    for (const P of photons) {
      P.x += P.ux * V * dt; P.y += P.uy * V * dt;
      const inside = P.y > TT && P.y < TB;
      if (inside && P.x <= TL && P.ux < 0) {
        if (mirrors) { P.x = 2 * TL - P.x; P.ux = -P.ux; P.last = -1; }
      } else if (inside && P.x >= TR && P.x - P.ux * V * dt < TR && P.ux > 0) {
        if (mirrors && Math.random() > OUTCOUPLE) { P.x = 2 * TR - P.x; P.ux = -P.ux; P.last = -1; }
        else P.out = true;
      }
      if (P.x < -40 || P.x > 1440 || P.y < TT - 34 || P.y > TB + 30) continue;
      let gone = false;
      if (inside && P.x > TL && P.x < TR) {
        for (let i = 0; i < N; i++) {
          const A = atoms[i];
          if (i === P.last || Math.abs(A.x - P.x) > 9 || Math.abs(A.y - P.y) > DY) continue;
          P.last = i;
          if (Math.random() > P_HIT) continue;
          if (A.s === 1) { A.s = 0; emit(P.x, clamp(P.y + (A.y > P.y ? 7 : -7), TT + 4, TB - 4), P.ux, P.uy, P.ph, i); events.push({ t: simT, k: 'stim' }); }
          else if (A.s === 0) { A.s = 1; gone = true; events.push({ t: simT, k: 'abs' }); break; }
        }
      }
      if (!gone) keep.push(P);
    }
    photons = keep;
    events = events.filter((e) => simT - e.t < 1);
    pop.push({ t: simT, n: atoms.filter((A) => A.s === 1).length });
    while (pop.length && simT - pop[0].t > 2) pop.shift();
  }
  function update(dt) {
    cy.step(dt, () => 1);
    const n = Math.ceil(dt / 0.008);
    for (let i = 0; i < n; i++) step(dt / n);
  }
  if (F.REDUCED) for (let i = 0; i < 1500; i++) step(0.008);
  const meanMeta = () => (pop.length ? pop.reduce((a, q) => a + q.n, 0) / pop.length : 0);

  function atomShape(ctx, A) {
    if (A.s === 0) dot(ctx, A.x, A.y, PAL.muted, false, 6);
    else dot(ctx, A.x, A.y, PAL.ink, true, 6);
    if (A.s === 2) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(A.x, A.y, 12, 0, TAU); ctx.stroke(); ctx.restore(); }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const EC = C('energy'), red = wavelengthColor(RED), mirrors = mir.value === 'both';
    const am = mir.mix((v) => (v === 'both' ? 1 : 0));
    hits = [];

    /* the tube, its mirrors and the atoms */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.6); ctx.fillRect(TL, TT, TR - TL, TB - TT); ctx.restore();
    line(ctx, TL, TT, TR, TT, PAL.ink, 2.5); line(ctx, TL, TB, TR, TB, PAL.ink, 2.5);
    F.faded(ctx, am, [0, 0], () => {
      ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(TL - 22, TT - 6, 20, TB - TT + 12); ctx.restore();
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([8, 6]); ctx.beginPath(); ctx.moveTo(TR + 6, TT - 6); ctx.lineTo(TR + 6, TB + 6); ctx.stroke(); ctx.restore();
      ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.fillRect(TR + 1, TT - 6, 12, TB - TT + 12); ctx.restore();
    });
    hits.push({ x: TL - 12, y: (TT + TB) / 2, r: 30, name: mirrors ? 'the totally silvered mirror' : 'the open end of the tube' });
    hits.push({ x: TR + 7, y: (TT + TB) / 2, r: 30, name: mirrors ? 'the partially silvered mirror' : 'the open end of the tube' });
    atoms.forEach((A) => { atomShape(ctx, A); hits.push({ x: A.x, y: A.y, r: 10, name: A.s === 0 ? 'an atom in the ground state' : A.s === 1 ? 'an atom in the metastable state' : 'an atom in the ' + (A.lvl === 2 ? 'second' : 'third') + ' level, about to decay' }); });
    photons.forEach((P) => { packet(ctx, P.x, P.y, P.ux, P.uy, red, { L: 34, amp: 5, waves: 3, phase: P.ph, w: 2.2 }); });
    if (photons.length) hits.push(...photons.slice(0, 40).map((P) => ({ x: P.x, y: P.y, r: 16, name: 'a photon of the laser light' })));

    const lab = labeller(ctx, 710, { headline: 2 });
    lab.block(TL, TT, TR, TB);
    F.faded(ctx, am, [0, 0], () => {
      text(ctx, 'Totally silvered mirror', TL - 22, TB + 28, PAL.ink, { size: 18, align: 'left' });
      text(ctx, 'Partially silvered mirror', TR + 13, TB + 28, PAL.ink, { size: 18, align: 'right' });
    });
    /* the legend for the atoms */
    const LY = TB + 62;
    dot(ctx, 520, LY, PAL.muted, false, 6); text(ctx, 'ground state', 536, LY, PAL.muted, { size: 17 });
    dot(ctx, 690, LY, PAL.ink, true, 6); text(ctx, 'metastable', 706, LY, PAL.muted, { size: 17 });
    dot(ctx, 840, LY, PAL.ink, true, 6); ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(840, LY, 12, 0, TAU); ctx.stroke(); ctx.restore();
    text(ctx, 'second or third level', 860, LY, PAL.muted, { size: 17 });

    /* Figure 30.34: the level diagram with the atoms counted on each rung */
    const RY = { 0: 676, 1: 556, 2: 488, 3: 454 }, NAME = { 0: 'Ground state', 1: 'First metastable', 2: 'Second', 3: 'Third' };
    const RX0 = 330, RX1 = 930, DXD = 12;
    arrow(ctx, 120, 690, 120, 436, EC, 3);
    text(ctx, 'E', 120, 424, EC, { size: 22, weight: 600, align: 'center' });
    const count = { 0: 0, 1: 0, 2: 0, 3: 0 };
    atoms.forEach((A) => { count[A.s === 0 ? 0 : A.s === 1 ? 1 : A.lvl] += 1; });
    [0, 1, 2, 3].forEach((k) => {
      const y = RY[k];
      line(ctx, RX0, y, RX1, y, PAL.ink, 2.5);
      text(ctx, NAME[k], RX0 - 14, y, PAL.ink, { size: 18, align: 'right' });
      for (let j = 0; j < count[k]; j++) dot(ctx, RX0 + 12 + j * DXD, y - 7, F.el('e-'), true, 4.5);
      text(ctx, String(count[k]), RX1 + 14, y, PAL.ink, { size: 18, weight: 600, align: 'left' });
      hits.push({ x: (RX0 + RX1) / 2, y, r: 12, name: count[k] + ' of the ' + N + ' atoms ' + (k === 0 ? 'in the ground state' : k === 1 ? 'in the metastable state' : 'in the ' + NAME[k].toLowerCase() + ' level') });
    });
    const xh = RX0 + 12 + (N / 2 - 0.5) * DXD;
    line(ctx, xh, RY[1] - 22, xh, RY[0] + 8, alpha(PAL.ink, 0.45), 2, [6, 6]);
    text(ctx, 'half the atoms', xh + 8, RY[1] + 36, PAL.muted, { size: 17, align: 'left', bg: PAL.panel });
    lab.flush();

    const nm1 = Math.round(meanMeta()), inv = nm1 > N / 2;
    topline(ctx, !inv ? 'Without a population inversion, absorption takes photons as fast as stimulated emission makes them.'
      : mirrors ? 'With a population inversion, stimulated emission outruns absorption and the beam builds up between the mirrors.'
        : 'Without mirrors, each photon crosses the material once and the cascade stays short.');

    if (simT - shown.t > 0.3 || shown.t < 0) {
      const n1 = nm1, half = N / 2;
      const rel = n1 > half ? '>' : n1 < half ? '<' : '=';
      const st = events.filter((e) => e.k === 'stim').length, ab = events.filter((e) => e.k === 'abs').length;
      shown = { t: simT, tex: '\\text{average number metastable} = ' + n1 + ' ' + rel + ' \\tfrac{1}{2}(' + N + ')', note: 'In the last second, ' + st + ' photons were stimulated and ' + ab + ' absorbed.' };
    }
    ro.set(shown.tex, shown.note, { form: 'n', values: false });
  }
  register(d.fig, { update, draw });
})();

/* =====================================================================
   FIGURE 30.37 · sim-he-ne · moving · flat (rule 28.1)
   The book's two level diagrams, helium 20.61 eV, neon 20.66 eV with the
   state 1.96 eV below it, on one energy scale (16 units per eV). Beneath them
   a discharge electron strikes a helium atom, the helium atom meets a neon
   atom and hands its energy over, and neon emits a 633-nm photon and goes on
   down. Everything at time t follows from t alone.
===================================================================== */
(function () {
  const d = sim('sim-he-ne', 640);
  const T = 6.4, cy = cycle(() => T, 1.2);
  const G = 500, Y = (E) => G - 13.5 * E;
  const HE = { l: 200, r: 480, x: 330 }, NE = { l: 700, r: 980, x: 830 };
  const YS = 590, HE0 = 330, NE0 = 830;
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);
  const along = (k, ax, ay, bx, by) => [ax + (bx - ax) * k, ay + (by - ay) * k];

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), EC = C('energy'), red = wavelengthColor(RED);
    hits = [];
    /* the rungs, as the book draws them */
    line(ctx, HE.l, Y(0), HE.r, Y(0), PAL.ink, 3); line(ctx, HE.l, Y(20.61), HE.r, Y(20.61), PAL.ink, 3);
    line(ctx, NE.l, Y(0), NE.r, Y(0), PAL.ink, 3); line(ctx, NE.l, Y(20.66), NE.r, Y(20.66), PAL.ink, 3); line(ctx, NE.l, Y(18.70), NE.r, Y(18.70), PAL.ink, 3);
    text(ctx, 'Ground state', HE.l - 14, Y(0), PAL.ink, { size: 19, align: 'right' });
    text(ctx, 'First', HE.l - 14, Y(20.61), PAL.ink, { size: 19, align: 'right' });
    text(ctx, 'Metastable', NE.r + 14, Y(20.66), PAL.ink, { size: 19, align: 'left' });
    text(ctx, 'Helium', (HE.l + HE.r) / 2, Y(0) + 24, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'Neon', (NE.l + NE.r) / 2, Y(0) + 24, PAL.ink, { size: 20, align: 'center' });
    hits.push({ x: HE.x, y: Y(20.61), r: 14, name: 'the metastable first excited state of helium, 20.61 eV' }, { x: NE.x, y: Y(20.66), r: 12, name: 'the metastable state of neon, 20.66 eV' }, { x: NE.x + 60, y: Y(18.70), r: 12, name: 'the state of neon 1.96 eV below the metastable state' });

    /* the energies, notation held throughout */
    const xa = HE.x - 70, xb = NE.l + 30, xc = NE.r - 90;
    arrow(ctx, xa, Y(0), xa, Y(20.61) + 2, EC, 3.5); text(ctx, '20.61 eV', xa + 14, (Y(0) + Y(20.61)) / 2, EC, { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    const ym = (Y(0) + Y(20.66)) / 2; arrow(ctx, xb, ym, xb, Y(20.66) + 2, EC, 2.5); arrow(ctx, xb, ym, xb, Y(0) - 2, EC, 2.5);
    text(ctx, '20.66 eV', xb + 14, (Y(0) + Y(20.66)) / 2, EC, { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, '1.96 eV', NE.l - 12, (Y(20.66) + Y(18.70)) / 2, EC, { size: 18, weight: 600, align: 'right', bg: PAL.panel });

    /* the play: the discharge electron, the collision, the photon */
    const kE = clamp(t / 0.8, 0, 1);
    if (t < 0.8) { const [x, y] = along(kE, 40, YS - 20, HE0 - 22, YS); dot(ctx, x, y, F.el('e-'), true, 8); hits.push({ x, y, r: 12, name: 'an electron of the discharge' }); }
    let hx = HE0;
    if (t > 1.4 && t < 2.6) hx = HE0 + (NE0 - 46 - HE0) * ((t - 1.4) / 1.2);
    else if (t >= 2.6 && t < 3.6) hx = NE0 - 46 - (NE0 - 46 - 560) * ((t - 2.6) / 1.0);
    else if (t >= 3.6) hx = 560;
    dot(ctx, hx, YS, F.el('He'), true, 16); dot(ctx, NE0, YS, F.el('Ne'), true, 22);
    text(ctx, 'He', hx, YS, PAL.panel, { size: 15, weight: 600, align: 'center' }); text(ctx, 'Ne', NE0, YS, PAL.panel, { size: 15, weight: 600, align: 'center' });
    hits.push({ x: hx, y: YS, r: 18, name: 'a helium atom' }, { x: NE0, y: YS, r: 24, name: 'a neon atom' });

    /* the electron of each atom on its diagram */
    const heUp = smooth((t - 0.8) / 0.4) * (1 - smooth((t - 2.6) / 0.4));
    const heY = Y(0) + (Y(20.61) - Y(0)) * heUp;
    dot(ctx, HE.x, heY, F.el('e-'), true, 9);
    let neY = Y(0);
    if (t >= 2.6) neY = Y(0) + (Y(20.66) - Y(0)) * smooth((t - 2.6) / 0.4);
    if (t >= 4.0) neY = Y(20.66) + (Y(18.70) - Y(20.66)) * smooth((t - 4.0) / 0.3);
    if (t >= 4.9) neY = Y(18.70) + (Y(0) - Y(18.70)) * smooth((t - 4.9) / 0.4);
    dot(ctx, NE.x, neY, F.el('e-'), true, 9);
    hits.push({ x: HE.x, y: heY, r: 12, name: 'the electron of the helium atom' }, { x: NE.x, y: neY, r: 12, name: 'the electron of the neon atom' });
    if (t >= 4.0) { const k = smooth((t - 4.0) / 0.3); arrow(ctx, NE.x + 24, Y(20.66), NE.x + 24, Y(20.66) + (Y(18.70) - Y(20.66)) * k, PAL.ink, 2.5); }
    if (t >= 4.9) { const k = smooth((t - 4.9) / 0.4); arrow(ctx, NE.r - 40, Y(18.70), NE.r - 40, Y(18.70) + (Y(0) - Y(18.70)) * k, PAL.ink, 5); }

    /* "Collision transfers energy": the book's curved arrow, drawn along its length as the energy passes */
    if (t >= 2.6) {
      const k = smooth((t - 2.6) / 0.6), N = 40, pts = [];
      for (let j = 0; j <= N * k; j++) { const s = j / N, x = HE.r - 30 + (NE.l + 20 - (HE.r - 30)) * s, y = Y(20.61) - 12 - 52 * Math.sin(Math.PI * s); pts.push([x, y]); }
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
      if (pts.length > 2) { const a = pts[pts.length - 3], b = pts[pts.length - 1]; arrow(ctx, a[0], a[1], b[0], b[1], PAL.muted, 4); }
      text(ctx, 'Collision transfers energy', (HE.r + NE.l) / 2, Y(20.61) - 84, PAL.ink, { size: 19, align: 'center', bg: PAL.panel });
    }
    /* the photon from neon */
    if (t >= 4.3) {
      const x = NE0 + 50 + 520 * (t - 4.3);
      if (x < 1420) { packet(ctx, x, YS, 1, 0, red, { waves: wavesOf(RED) }); hits.push({ x, y: YS, r: 30, name: 'a red photon, 633 nm, 1.96 eV' }); }
    }
    topline(ctx, 'A helium atom raised 20.61 eV hands its energy to neon in a collision, and neon drops 1.96 eV to emit a 633-nm photon.');
    ro.set('\\klam = \\frac{h\\kc}{\\kdE} = \\frac{1240\\ \\text{eV}\\cdot\\text{nm}}{1.96\\ \\text{eV}} = 633\\ \\text{nm}', '', { form: 'l' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.40 · sim-cd · moving · flat (rule 28.1)
   The bottom of the disc seen face on, 60 units to the micrometre, the track
   passing under a fixed laser spot. Formats: CD 780 nm, track spacing 1.6 μm,
   shortest pit 0.83 μm, pit 0.5 μm wide; DVD 650 nm, 0.74, 0.40, 0.32 μm;
   Blu-ray 405 nm, 0.32, 0.15, 0.13 μm. A pit or land is 3 to 11 channel
   bits long, the shortest being 3. The spot is drawn λ/(2 NA) across (NA 0.45,
   0.60, 0.85). Beneath, a cut along the middle track with the pits drawn four
   times deeper than they are, and the light scattered back, against
   position along the track, for the part already read.
===================================================================== */
(function () {
  const FMT = {
    cd: { name: 'CD', nm: 780, pitch: 1.6, pit: 0.83, w: 0.5, na: 0.45, gb: '0.7', depth: 0.11, band: 'infrared' },
    dvd: { name: 'DVD', nm: 650, pitch: 0.74, pit: 0.40, w: 0.32, na: 0.60, gb: '4.7', depth: 0.10, band: 'red' },
    bd: { name: 'Blu-ray disc', nm: 405, pitch: 0.32, pit: 0.15, w: 0.13, na: 0.85, gb: '25', depth: 0.07, band: 'violet' },
  };
  const d = sim('sim-cd', 640);
  const fm = choice(d.controls, { label: '\\text{disc}', options: [{ value: 'cd', label: 'CD, 780 nm' }, { value: 'dvd', label: 'DVD, 650 nm' }, { value: 'bd', label: 'Blu-ray, 405 nm' }], value: 'cd', aria: 'the kind of disc and the wavelength of its laser' });
  const cy = cycle(() => Infinity, 0);
  const U = 60, WL = 150, WR = 960, WT = 96, WB = 316, YC = 206, XS = 600, SPEED = 90;
  const CUT = 392, GB = { l: 150, r: 600, t: 470, b: 590 };
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);
  const h = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
  /* a track's runs, alternately land and pit, in channel bits; positions repeat every PERIOD bits */
  const runsOf = (tr) => { const out = []; let s = 0, i = 0; while (s < 400) { const n = 3 + Math.floor(h(tr * 97 + i, 3) * 9); out.push({ s, n, pit: i % 2 === 1 }); s += n; i++; } return { out, P: s }; };
  const cache = new Map();
  const track = (tr) => { if (!cache.has(tr)) cache.set(tr, runsOf(tr)); return cache.get(tr); };
  /* is the point u bits along track tr in a pit? */
  const inPit = (tr, u) => { const { out, P } = track(tr), w = ((u % P) + P) % P; for (const r of out) if (w >= r.s && w < r.s + r.n) return r.pit; return false; };

  function draw() {
    const { ctx } = begin(d.c);
    const t = isFinite(cy.now()) ? cy.now() : 0, F0 = FMT[fm.value], XC = C('position');
    const pitch = fm.mix((v) => FMT[v].pitch), bit = fm.mix((v) => FMT[v].pit / 3), wid = fm.mix((v) => FMT[v].w), spot = fm.mix((v) => FMT[v].nm / (2 * FMT[v].na) / 1000);
    const beam = fm.mixColor((v) => wavelengthColor(FMT[v].nm));
    hits = [];
    const shift = SPEED * t;                                   /* units the track has moved left */
    const uAt = (x) => (x - XS + shift) / (U * bit);           /* bits along a track at screen x */

    /* the close-up of the disc's bottom side */
    ctx.save(); ctx.beginPath(); ctx.rect(WL, WT, WR - WL, WB - WT); ctx.clip();
    ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.fillRect(WL, WT, WR - WL, WB - WT);
    const nT = Math.ceil((WB - WT) / 2 / (pitch * U)) + 1;
    for (let k = -nT; k <= nT; k++) {
      const y = YC + k * pitch * U; if (y < WT - 20 || y > WB + 20) continue;
      const { out, P } = track(k + 50), u0 = uAt(WL), u1 = uAt(WR), rep0 = Math.floor(u0 / P);
      ctx.fillStyle = alpha(PAL.ink, 0.42);
      for (let rep = rep0; rep * P < u1; rep++) for (const r of out) {
        if (!r.pit) continue;
        const a = rep * P + r.s, b = a + r.n; if (b < u0 || a > u1) continue;
        const xa = XS + a * U * bit - shift, xb = XS + b * U * bit - shift, hw = wid * U / 2;
        ctx.beginPath(); ctx.roundRect(xa, y - hw, xb - xa, 2 * hw, hw); ctx.fill();
      }
    }
    /* the laser spot */
    const sr = spot * U / 2;
    ctx.fillStyle = alpha(beam, 0.25); ctx.beginPath(); ctx.arc(XS, YC, sr * 2, 0, TAU); ctx.fill();
    ctx.fillStyle = alpha(beam, 0.6); ctx.beginPath(); ctx.arc(XS, YC, sr, 0, TAU); ctx.fill();
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(WL, WT, WR - WL, WB - WT); ctx.restore();
    hits.push({ x: XS, y: YC, r: Math.max(16, sr), name: 'the laser spot, about ' + fmt(F0.nm / (2 * F0.na) / 1000, 2) + ' μm across' });
    hits.push({ x: 200, y: YC, r: 14, name: 'the track: pits, dark, and land between them' });

    /* the track spacing, one bracket on the left edge */
    vbracket(ctx, WL - 14, YC - pitch * U, YC, XC, '', 1);
    text(ctx, fmt(F0.pitch, 2) + ' μm', WL - 26, YC - pitch * U / 2, XC, { size: 17, weight: 600, align: 'right' });

    /* the cut along the middle track, pits four times deeper than they are */
    const dep = fm.mix((v) => FMT[v].depth) * U * 4;
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.fillRect(WL, CUT - 40, WR - WL, 40); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath();
    let prev = null;
    for (let x = WL; x <= WR; x += 2) {
      const y = inPit(50, uAt(x)) ? CUT - dep : CUT;
      if (prev === null) ctx.moveTo(x, y); else if (y !== prev) { ctx.lineTo(x, prev); ctx.lineTo(x, y); } else ctx.lineTo(x, y);
      prev = y;
    }
    ctx.stroke(); ctx.restore();
    vbracket(ctx, WR + 14, CUT - dep, CUT, PAL.ink, '', -1);
    text(ctx, 't', WR + 30, CUT - dep / 2, PAL.ink, { size: 20, weight: 600, italic: true, align: 'left' });
    hits.push({ x: WR + 20, y: CUT - dep / 2, r: 16, name: 'the pit depth t, about ' + fmt(F0.depth, 2) + ' μm, drawn four times deeper' });

    /* the laser beneath and its beam, travelling up to the disc and back */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.roundRect(XS - 26, 432, 52, 46, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = beam; ctx.lineWidth = 4; ctx.setLineDash([14, 10]); ctx.lineDashOffset = -(t * 120) % 24;
    ctx.beginPath(); ctx.moveTo(XS, 432); ctx.lineTo(XS, CUT + 2); ctx.stroke(); ctx.restore();
    arrow(ctx, XS, 420, XS, 404, beam, 4);
    hits.push({ x: XS, y: 455, r: 26, name: 'the ' + F0.band + ' laser, ' + F0.nm + ' nm' });

    /* the light scattered back, for the part of the middle track already read */
    line(ctx, GB.l, GB.b, GB.r, GB.b, PAL.muted, 2); line(ctx, GB.l, GB.b, GB.l, GB.t, PAL.muted, 2);
    const hi = GB.t + 22, lo = GB.b - 26;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); prev = null;
    for (let x = GB.l + 2; x <= XS; x += 2) {
      const y = inPit(50, uAt(x)) ? lo : hi;
      if (prev === null) ctx.moveTo(x, y); else if (y !== prev) { ctx.lineTo(x, prev); ctx.lineTo(x, y); } else ctx.lineTo(x, y);
      prev = y;
    }
    ctx.stroke(); ctx.restore();
    text(ctx, 'Light scattered back', GB.l + 6, GB.t - 14, PAL.ink, { size: 17, align: 'left' });
    text(ctx, 'position along the track', GB.r - 50, GB.b + 20, PAL.muted, { size: 17, align: 'right' });

    /* the whole disc, its spiral track turning, and where the close-up lies */
    const DX = 1180, DY = 250, DR = 150, rot = -t * 0.9;
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(DX, DY, DR, 0, TAU); ctx.moveTo(DX + 22, DY); ctx.arc(DX, DY, 22, 0, TAU, true); ctx.fill('evenodd'); ctx.stroke();
    ctx.beginPath(); ctx.arc(DX, DY, 22, 0, TAU); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 1.6; ctx.beginPath();
    for (let a = 0; a <= 6 * TAU; a += 0.05) { const r = 46 + (DR - 54) * a / (6 * TAU), x = DX + r * Math.cos(a + rot), y = DY + r * Math.sin(a + rot); if (a) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = beam; ctx.lineWidth = 3; ctx.strokeRect(DX - 8, DY + 96, 16, 16); ctx.restore();
    line(ctx, DX - 10, DY + 104, WR + 4, YC, alpha(PAL.ink, 0.35), 1.5, [5, 6]);
    label(ctx, 'Spiral track', DX + 70, DY - 92, { side: 'right', color: PAL.ink, size: 18, gap: 18 });
    hits.push({ x: DX, y: DY, r: DR, name: 'the disc, its spiral track turning past the laser' });
    /* the legend for pits and land */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.42); ctx.beginPath(); ctx.roundRect(1040, 452, 60, 18, 9); ctx.fill(); ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.fillRect(1040, 492, 60, 18); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(1040, 492, 60, 18); ctx.restore();
    text(ctx, 'Pit', 1114, 461, PAL.ink, { size: 18, align: 'left' });
    text(ctx, 'Land', 1114, 501, PAL.ink, { size: 18, align: 'left' });
    text(ctx, 'Bottom side of the disc', WL, WT - 16, PAL.ink, { size: 18, align: 'left' });

    topline(ctx, 'A ' + F0.nm + '-nm ' + F0.band + ' laser reads a ' + F0.name + ' whose tracks are ' + fmt(F0.pitch, 2) + ' μm apart.');
    ro.set('\\klam = ' + F0.nm + '\\ \\text{nm}:\\ \\text{tracks } ' + fmt(F0.pitch, 2) + '\\ \\mu\\text{m apart, shortest pit } ' + fmt(F0.pit, 2) + '\\ \\mu\\text{m, about ' + F0.gb + ' GB}',
      'The spot is about ' + fmt(F0.nm / (2 * F0.na) / 1000, 2) + ' μm across, so it falls on one track at a time.', { form: 'c' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 30.42 + 30.43 · sim-hologram · moving · flat (rule 28.1)
   A side view, 1 unit = 0.25 mm. Recording: the laser's beam is split at S;
   the part sent down lights a ball and a block, the rest reaches the mirror M
   and spreads onto the film as the reference wave; light scattered from the
   two objects falls on the film too. The inset is the film's exposure,
   |reference + object waves|², computed with the wavelength drawn about
   10⁴ times longer than 633 nm so its fringes can be seen. Viewing: the same
   reference wave passes through the hologram; the diffracted light leaves as
   if from the objects (the virtual image) and converges on their mirror
   positions (the real image). The eye sits on an arc about the film's centre
   at θ above its normal; the inset shows the two objects as seen from there.
   Crests move along every ray at a steady speed, so the clock is endless.
===================================================================== */
(function () {
  const d = sim('sim-hologram', 640);
  const mode = choice(d.controls, { label: '\\text{stage}', options: [{ value: 'rec', label: 'recording' }, { value: 'view', label: 'viewing' }], value: 'rec', aria: 'recording the hologram or viewing it', onInput: () => eye.show(mode.value === 'view') });
  const eye = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 30, step: 0.5, value: 15, unit: '°', dec: 1, aria: 'the direction of the eye above the normal to the film' });
  eye.show(false, { ms: 0 });
  const cy = cycle(() => Infinity, 0);
  const LAS = { x: 40, y: 120, w: 110, h: 40 }, S = { x: 250, y: 140 }, M = { x: 480, y: 140 };
  const FX = 700, FT = 220, FB = 460, FC = { x: FX, y: 340 };
  const BALL = { x: 330, y: 440, r: 28 }, BLOCK = { x: 180, y: 470, s: 64 };
  const MM = 0.25;                                         /* mm per unit */
  const ER = 400;
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  /* a ray with crests moving along it */
  function ray(ctx, ax, ay, bx, by, color, o = {}) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = o.w ?? 2.5; ctx.globalAlpha *= o.a ?? 1;
    ctx.setLineDash(o.dash ?? [16, 10]); ctx.lineDashOffset = o.still || !isFinite(cy.now()) ? 0 : -((cy.now() * 90) % 26);
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); ctx.restore();
    if (o.head) { const L = Math.hypot(bx - ax, by - ay), ux = (bx - ax) / L, uy = (by - ay) / L; arrow(ctx, bx - ux * 18, by - uy * 18, bx, by, color, 3); }
  }
  function ballAt(ctx, x, y, r, color, ghost) {
    ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = color; ctx.fillStyle = ghost ? 'transparent' : alpha(color, 0.35); if (ghost) ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); if (!ghost) ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function blockAt(ctx, x, y, s, color, ghost) {
    ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = color; ctx.fillStyle = alpha(color, 0.35); if (ghost) ctx.setLineDash([6, 6]);
    if (!ghost) ctx.fillRect(x - s / 2, y - s / 2, s, s); ctx.strokeRect(x - s / 2, y - s / 2, s, s); ctx.restore();
  }
  /* the film's exposure, made once: a strip of the film face, its height along the film, its width across it */
  let film = null;
  function exposure() {
    if (film) return film;
    const W = 120, Hh = FB - FT, c = document.createElement('canvas'); c.width = W; c.height = Hh;
    const g = c.getContext('2d'), img = g.createImageData(W, Hh), lam = 6, k = TAU / lam;
    const pts = [];
    for (let q = 0; q < 14; q++) {
      const u = Math.sin(q * 12.99 + 1.7) * 43758.5453, r1 = u - Math.floor(u), v = Math.sin(q * 78.23 + 4.1) * 43758.5453, r2 = v - Math.floor(v);
      if (q < 7) { const a = r1 * TAU, rr = BALL.r * Math.sqrt(r2); pts.push([BALL.x + rr * Math.cos(a), BALL.y + rr * Math.sin(a), (r2 - 0.5) * 30, 0.5]); }
      else pts.push([BLOCK.x + (r1 - 0.5) * BLOCK.s, BLOCK.y + (r2 - 0.5) * BLOCK.s, (r1 - r2) * 30, 0.4]);
    }
    for (let j = 0; j < Hh; j++) for (let i = 0; i < W; i++) {
      const y = FT + j, z = i - W / 2;
      const rr = Math.hypot(FX - M.x, y - M.y, z);
      let re = Math.cos(k * rr) * 1.6, im = Math.sin(k * rr) * 1.6;
      for (const [px, py, pz, a] of pts) { const r = Math.hypot(FX - px, y - py, z - pz); re += a * Math.cos(k * r); im += a * Math.sin(k * r); }
      const I = (re * re + im * im) / 40, v = Math.round(255 * clamp(1 - I, 0, 1)), o = 4 * (j * W + i);
      img.data[o] = img.data[o + 1] = img.data[o + 2] = v; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0); film = c; return c;
  }
  const deg = (r) => r * 180 / Math.PI;

  function draw() {
    const { ctx } = begin(d.c);
    const red = wavelengthColor(RED), cb = F.cat(0), cl = F.cat(1), AC = C('angle');
    const aR = mode.a('rec'), aV = mode.a('view');
    hits = [];
    const lab = labeller(ctx, 640, { headline: 2 });

    /* the bench: laser, splitter, mirror, film */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.roundRect(LAS.x, LAS.y, LAS.w, LAS.h, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'Laser', LAS.x + LAS.w / 2, LAS.y + LAS.h + 20, PAL.ink, { size: 18, align: 'center' });
    ray(ctx, LAS.x + LAS.w, S.y, S.x, S.y, red, { w: 4 });
    line(ctx, S.x - 20, S.y - 20, S.x + 20, S.y + 20, PAL.muted, 4, [6, 4]);
    ray(ctx, S.x, S.y, M.x, M.y, red, { w: 4 });
    line(ctx, M.x - 24, M.y - 9, M.x + 24, M.y + 9, PAL.ink, 5);
    hits.push({ x: S.x, y: S.y, r: 22, name: 'the partially silvered mirror that splits the beam' }, { x: M.x, y: M.y, r: 22, name: 'the mirror' }, { x: LAS.x + 55, y: LAS.y + 20, r: 40, name: 'the laser' });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.fillRect(FX - 5, FT, 10, FB - FT); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(FX - 5, FT, 10, FB - FT); ctx.restore();
    hits.push({ x: FX, y: FC.y, r: 24, name: mode.value === 'rec' ? 'the photographic film' : 'the developed hologram' });
    text(ctx, mode.value === 'rec' ? 'Photo plate' : 'Hologram', FX, FB + 22, PAL.ink, { size: 18, align: 'center' });
    text(ctx, 'M', M.x + 26, M.y - 26, PAL.ink, { size: 18, weight: 600, align: 'left' });

    /* the reference wave, the same in both stages: from the mirror onto the film */
    const REF = [0, 0.25, 0.5, 0.75, 1].map((s) => FT + 14 + (FB - FT - 28) * s);
    REF.forEach((y, i) => ray(ctx, M.x, M.y, FX - 5, y, red, { head: i === 4 }));
    text(ctx, 'Reference wave', 560, 214, PAL.ink, { size: 18, align: 'right', bg: PAL.panel });

    /* recording: the split beam lights the objects, which scatter onto the film */
    F.faded(ctx, aR, [0, 0], () => {
      ray(ctx, S.x, S.y, S.x, BALL.y - 70, red, { w: 4, head: true });
      text(ctx, 'Object wave', 470, 500, PAL.ink, { size: 18, align: 'left', bg: PAL.panel });
      [[BALL.x + BALL.r, BALL.y], [BLOCK.x + BLOCK.s / 2, BLOCK.y]].forEach(([ox, oy]) => [0.15, 0.5, 0.85].forEach((s) => ray(ctx, ox, oy, FX - 5, FT + (FB - FT) * s, red, { a: 0.75 })));
      /* the inset: the exposed film, close up */
      const fx = 840, fy = FT, fw = 120, fh = FB - FT;
      ctx.drawImage(exposure(), fx, fy, fw, fh);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(fx, fy, fw, fh); ctx.restore();
      line(ctx, FX + 8, FT, fx - 4, fy, alpha(PAL.ink, 0.35), 1.5, [5, 6]); line(ctx, FX + 8, FB, fx - 4, fy + fh, alpha(PAL.ink, 0.35), 1.5, [5, 6]);
      text(ctx, 'The exposed film, close up:', fx + fw + 20, FT + 30, PAL.ink, { size: 18, align: 'left' });
      text(ctx, 'dark where the interference', fx + fw + 20, FT + 60, PAL.muted, { size: 17, align: 'left' });
      text(ctx, 'was constructive', fx + fw + 20, FT + 84, PAL.muted, { size: 17, align: 'left' });
      hits.push({ x: fx + fw / 2, y: fy + fh / 2, r: 40, name: 'the interference pattern recorded on the film' });
    });

    /* the objects, or their virtual image */
    const ghost = mode.value === 'view' && mode.k > 0.5;
    blockAt(ctx, BLOCK.x, BLOCK.y, BLOCK.s, cb, ghost); ballAt(ctx, BALL.x, BALL.y, BALL.r, cl, ghost);
    hits.push({ x: BALL.x, y: BALL.y, r: BALL.r, name: ghost ? 'the virtual image of the ball' : 'the ball, nearer the film' }, { x: BLOCK.x, y: BLOCK.y, r: 34, name: ghost ? 'the virtual image of the block' : 'the block, farther from the film' });
    F.faded(ctx, aR, [0, 0], () => { text(ctx, 'Object', 255, 530, PAL.ink, { size: 18, align: 'center' }); });

    /* viewing: the diffracted light, its virtual and real images, and the eye */
    const th = eye.v * Math.PI / 180, E = { x: FC.x + ER * Math.cos(th), y: FC.y - ER * Math.sin(th) };
    F.faded(ctx, aV, [0, 0], () => {
      text(ctx, 'Virtual image', 255, 530, PAL.ink, { size: 18, align: 'center' });
      [0.15, 0.85].forEach((s) => { const y = FT + 14 + (FB - FT - 28) * s, ux = FX - M.x, uy = y - M.y, L = Math.hypot(ux, uy); ray(ctx, FX + 5, y, FX + 5 + ux / L * 260, y + uy / L * 260, red, { a: 0.35 }); });
      [[BALL.x, BALL.y], [BLOCK.x, BLOCK.y]].forEach(([ox, oy]) => {
        const rx = 2 * FX - ox;
        [0.2, 0.5, 0.8].forEach((s) => {
          const fy = FT + (FB - FT) * s;
          ray(ctx, ox, oy, FX - 5, fy, alpha(PAL.ink, 0.5), { dash: [4, 7], still: true, w: 1.5 });
          ray(ctx, FX + 5, fy, rx, oy, red, { a: 0.7 });
        });
      });
      blockAt(ctx, 2 * FX - BLOCK.x, BLOCK.y, BLOCK.s, cb, false); ballAt(ctx, 2 * FX - BALL.x, BALL.y, BALL.r, cl, false);
      text(ctx, 'Real image', 2 * FX - 255, 530, PAL.ink, { size: 18, align: 'center' });
      hits.push({ x: 2 * FX - BALL.x, y: BALL.y, r: BALL.r, name: 'the real image of the ball' }, { x: 2 * FX - BLOCK.x, y: BLOCK.y, r: 34, name: 'the real image of the block' });
      /* the light that reaches the eye leaves the film as if from the objects */
      [[BALL.x, BALL.y], [BLOCK.x, BLOCK.y]].forEach(([ox, oy]) => {
        const fy = oy + (E.y - oy) * (FX - ox) / (E.x - ox);
        ray(ctx, FX + 5, fy, E.x - 22, E.y + (fy - E.y) * 22 / (E.x - FX), red, { w: 3 });
      });
      /* the eye, looking back at the film */
      const ang = Math.atan2(FC.y - E.y, FC.x - E.x);
      ctx.save(); ctx.translate(E.x, E.y); ctx.rotate(ang); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.fillStyle = PAL.panel;
      ctx.beginPath(); ctx.moveTo(-16, -18); ctx.quadraticCurveTo(12, -18, 18, 0); ctx.quadraticCurveTo(12, 18, -16, 18); ctx.stroke();
      ctx.beginPath(); ctx.arc(4, 0, 9, 0, TAU); ctx.fillStyle = PAL.ink; ctx.fill(); ctx.restore();
      hits.push({ x: E.x, y: E.y, r: 24, name: 'the eye, ' + fmt(eye.v, 1) + '° above the normal to the film' });
      ctx.save(); ctx.strokeStyle = alpha(AC, 0.6); ctx.lineWidth = 2; ctx.setLineDash([4, 6]); ctx.beginPath(); ctx.arc(FC.x, FC.y, ER, -30 * Math.PI / 180, 0); ctx.stroke(); ctx.restore();
      line(ctx, FX + 5, FC.y, FX + ER + 30, FC.y, alpha(PAL.ink, 0.35), 2, [6, 6]);
      F.angleArc(ctx, FC, 120, -th, 0, '', null);
      text(ctx, 'θ = ' + fmt(eye.v, 1) + '°', FX + 130, FC.y - 26, AC, { size: 18, weight: 600, align: 'left', bg: PAL.panel });

      /* the inset: what the eye sees */
      const IX = 1250, IY = 196, IW = 150, IH = 150;
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.fillRect(IX - IW / 2, IY - IH / 2, IW, IH); ctx.strokeRect(IX - IW / 2, IY - IH / 2, IW, IH); ctx.restore();
      const dep = (ox, oy) => Math.atan2(oy - E.y, E.x - ox), mid = (dep(BALL.x, BALL.y) + dep(BLOCK.x, BLOCK.y)) / 2;
      const view = (ox, oy) => ({ y: IY + (dep(ox, oy) - mid) * 1100, d: Math.hypot(ox - E.x, oy - E.y) });
      const vb = view(BLOCK.x, BLOCK.y), vl = view(BALL.x, BALL.y);
      ctx.save(); ctx.beginPath(); ctx.rect(IX - IW / 2, IY - IH / 2, IW, IH); ctx.clip();
      const sb = BLOCK.s * 1100 / vb.d, rl = BALL.r * 1100 / vl.d;
      ctx.fillStyle = alpha(cb, 0.55); ctx.strokeStyle = cb; ctx.lineWidth = 2; ctx.fillRect(IX - 18 - sb / 2, vb.y - sb / 2, sb, sb); ctx.strokeRect(IX - 18 - sb / 2, vb.y - sb / 2, sb, sb);
      ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(IX + 14, vl.y, rl, 0, TAU); ctx.fill(); ctx.fillStyle = alpha(cl, 0.55); ctx.fill(); ctx.strokeStyle = cl; ctx.stroke();
      ctx.restore();
      text(ctx, 'What the eye sees', IX, IY - IH / 2 - 16, PAL.ink, { size: 17, align: 'center' });
      hits.push({ x: IX, y: IY, r: 60, name: 'the ball and the block as seen from the eye' });
    });
    lab.flush();

    const view = mode.value === 'view';
    topline(ctx, view ? 'The reference wave diffracted by the hologram rebuilds the light from the objects: a virtual image behind the film and a real image in front.'
      : 'Light scattered from the objects meets the reference wave on the film, and their interference pattern is recorded.');
    if (view) {
      const a1 = Math.atan2(BALL.y - E.y, BALL.x - E.x), a2 = Math.atan2(BLOCK.y - E.y, BLOCK.x - E.x), dA = deg(a1 - a2);
      ro.set('\\ktheta = ' + fmt(eye.v, 1) + '^\\circ:\\ \\text{the ball appears } ' + fmt(Math.abs(dA), 1) + '^\\circ\\ \\text{' + (dA >= 0 ? 'above' : 'below') + ' the block}',
        '', { form: 'v' });
    } else {
      const db = (FX - BALL.x) * MM / 10, dk = (FX - BLOCK.x) * MM / 10;
      ro.set('\\text{film to ball } ' + fmt(db, 1) + '\\ \\text{cm},\\ \\text{film to block } ' + fmt(dk, 1) + '\\ \\text{cm}', '', { form: 'r' });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
