/* Figures for section 32.1 Diagnostics and Medical Imaging.
   The page binds activity (the dose of a radiopharmaceutical), position (the
   tumor's depth, the source's position, the distances to the detectors), time
   (the difference in arrival times) and velocity (c). Counts are ink. The γ rays
   and the scintillator's flashes are F.el('gamma'), the positron F.el('e+') and
   the electron F.el('e-'). The tumor is the section's referent, drawn with F.ref. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, label, axes, hover, readout, hbracket, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
function sciTex(x) { let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e); if (+m.toFixed(1) >= 10) { m /= 10; e++; } return fmt(m, 1) + '\\times 10^{' + e + '}'; }

/* =====================================================================
   FIGURE 32.3 · sim-anger-camera · moving · flat (rule 28.1)
   The book's camera in section: the head on the left, the tumor d cm in from
   the side facing the camera (17 units to the cm), the lead collimator of 20
   holes, the scintillator, five photomultiplier tubes, and the image as counts
   per row of the collimator. γ rays leave the tumor at 700 units/s, drawn only
   when headed for the collimator (within 25° of its axis), 10.7 a second for
   each mCi, one for every 3.5 million emitted. A ray that would cross a septum
   stops in the lead; one that runs along a hole reaches the scintillator,
   flashes, lights the tubes nearest the flash and adds a count to its row. The
   image clears each 6-s loop. Counts axis fixed at 0 to 30 (most per row is
   about 27, at 10 mCi); pinned() past it. Everything at time t
   follows from t alone.
===================================================================== */
(function () {
  const H = 620, T = 6, PER_MCI = 10.7, V = 700, CMAX = 30;
  const d = sim('sim-anger-camera', H);
  const dep = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1, max: 14, step: 0.1, value: 4, unit: 'cm', dec: 1, onInput: reset, aria: 'the depth of the tumor below the side of the head facing the camera' });
  const act = ctl(d.controls, { label: '\\kRact', cls: 'activity', min: 1.5, max: 10, step: 0.1, value: 7.5, unit: 'mCi', dec: 1, onInput: reset, aria: 'the activity of the technetium-99m dose', detents: [1.5, 2, 7.5, 10] });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const HC = { x: 240, y: 340 }, HRX = 165, HRY = 195, S = 17, YT = 300;
  const CL = 450, CR = 620, CT = 150, CB = 530, NH = 20, P = (CB - CT) / NH, SEP = 2;
  const SX = 638, TUBE = [0, 1, 2, 3, 4].map((j) => CT + 38 + 76 * j);
  const GB = { l: 960, r: 1320, t: CT, b: CB }, PX = 905;
  const edge = (y) => HC.x + HRX * Math.sqrt(Math.max(0, 1 - ((y - HC.y) / HRY) ** 2));
  const open = (k) => [CT + k * P + SEP, CT + (k + 1) * P - SEP];

  let key = '', EV = [];
  function events(dv, Rv) {
    const k0 = dv + '|' + Rv;
    if (k0 === key) return EV;
    key = k0; EV = [];
    const rate = PER_MCI * Rv, xs = edge(YT) - dv * S;
    for (let i = 0; i < rate * T; i++) {
      const t0 = (i + 0.5) / rate, th = (hash(i, 1) - 0.5) * 2 * 25 * Math.PI / 180;
      const rr = 12 * Math.sqrt(hash(i, 2)), ra = 2 * Math.PI * hash(i, 3), sx = xs + rr * Math.cos(ra), sy = YT + rr * Math.sin(ra), tn = Math.tan(th), cs = Math.cos(th);
      const yA = sy + (CL - sx) * tn, k = Math.floor((yA - CT) / P), [lo, hi] = open(k);
      let xe = CL, pass = false;
      if (k >= 0 && k < NH && yA > lo && yA < hi) {
        const yB = sy + (CR - sx) * tn;
        if (yB > lo && yB < hi) { pass = true; xe = SX; }
        else xe = CL + ((tn > 0 ? hi : lo) - yA) / tn;
      }
      const te = t0 + (xe - sx) / (V * cs);
      EV.push({ t0, sx, sy, th, cs, sn: Math.sin(th), xe, ye: sy + (xe - sx) * tn, te, pass, row: k });
    }
    return EV;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), dv = dep.v, Rv = act.v, E = events(dv, Rv);
    const TUM = F.ref('tumor'), GA = F.el('gamma');
    const xs = edge(YT) - dv * S;
    hits = [];

    topline(ctx, 'Only γ rays running along a hole reach the scintillator, so a tumor ' + fmt(dv, 1) + ' cm deep lights the image at the same height as at any depth.');

    /* the head in section and the tumor */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(HC.x, HC.y, HRX, HRY, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(TUM, 0.35); ctx.strokeStyle = TUM; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(xs, YT, 13, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    hits.push({ x: HC.x - 60, y: HC.y + 80, r: 60, name: 'the patient’s head, in section' });
    hits.push({ x: xs, y: YT, r: 16, name: 'the tumor, where the radiopharmaceutical has gathered, ' + fmt(dv, 1) + ' cm deep' });

    /* the lead collimator and its holes, the scintillator, the photomultiplier tubes */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.55); ctx.fillRect(CL, CT, CR - CL, CB - CT);
    ctx.fillStyle = PAL.panel;
    for (let k = 0; k < NH; k++) { const [lo, hi] = open(k); ctx.fillRect(CL, lo, CR - CL, hi - lo); }
    ctx.fillStyle = alpha(PAL.soft, 1); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2;
    ctx.fillRect(624, CT, 28, CB - CT); ctx.strokeRect(624, CT, 28, CB - CT); ctx.restore();
    hits.push({ x: (CL + CR) / 2, y: CB - 40, r: 40, name: 'the lead collimator: lead with holes bored through it' });
    hits.push({ x: SX, y: CT + 30, r: 16, name: 'the scintillator, which turns each γ ray into a flash of light' });

    const glow = [0, 0, 0, 0, 0], fire = [0, 0, 0, 0, 0], counts = new Array(NH).fill(0);
    E.forEach((e) => {
      if (!e.pass || t < e.te) return;
      counts[e.row]++;
      const k = (t - e.te) / 0.35;
      if (k < 1) TUBE.forEach((y, j) => { const w = Math.exp(-(((y - e.ye) / 48) ** 2)); glow[j] = Math.max(glow[j], w * (1 - k)); if (w > 0.3) fire[j] = Math.max(fire[j], k); });
    });
    TUBE.forEach((y, j) => {
      ctx.save(); ctx.beginPath();
      ctx.moveTo(656, y - 28); ctx.lineTo(748, y - 28); ctx.lineTo(782, y - 12); ctx.lineTo(800, y - 12);
      ctx.lineTo(800, y + 12); ctx.lineTo(782, y + 12); ctx.lineTo(748, y + 28); ctx.lineTo(656, y + 28); ctx.closePath();
      ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.fill();
      if (glow[j] > 0.02) { ctx.fillStyle = alpha(GA, 0.5 * glow[j]); ctx.fill(); }
      ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
      line(ctx, 804, y, 872, y, alpha(PAL.ink, 0.3), 2);
      if (fire[j] > 0) arrow(ctx, 804, y, 804 + 68 * Math.min(1, fire[j] * 1.4), y, PAL.ink, 4);
      hits.push({ x: 720, y, r: 26, name: 'a photomultiplier tube, which converts the flash into an electrical signal' });
    });
    hits.push({ x: 850, y: TUBE[2] - 20, r: 30, name: 'the electronic output to the computer for image construction' });

    /* the γ rays: in flight, stopped in the lead, or flashing in the scintillator */
    let named = 0;
    E.forEach((e) => {
      if (t < e.t0) return;
      if (t < e.te) {
        const s = V * (t - e.t0), x = e.sx + s * e.cs, y = e.sy + s * e.sn, b = Math.min(s, 34);
        arrow(ctx, x - b * e.cs, y - b * e.sn, x, y, GA, 3);
        if (named++ < 16) hits.push({ x, y, r: 12, name: 'a 0.142-MeV γ ray from technetium-99m' });
      } else if (t < e.te + 0.35) {
        const k = (t - e.te) / 0.35;
        ctx.save(); ctx.globalAlpha *= 1 - k;
        if (e.pass) { ctx.fillStyle = alpha(GA, 0.6); ctx.beginPath(); ctx.arc(e.xe, e.ye, 5 + 14 * k, 0, 2 * Math.PI); ctx.fill(); }
        else dot(ctx, e.xe, e.ye, GA, true, 4);
        ctx.restore();
        if (named++ < 16) hits.push({ x: e.xe, y: e.ye, r: 12, name: e.pass ? 'a flash of light in the scintillator' : 'a γ ray stopped in the lead' });
      }
    });

    /* the image: one pixel and one bar of counts per row of the collimator */
    const top = Math.max(1, ...counts);
    const { X } = axes(ctx, GB, [0, CMAX], [0, NH], { nx: 3, ny: 1, fy: () => '', xl: 'counts', yl: 'image' });
    counts.forEach((n, k) => {
      const [lo, hi] = open(k), y = (lo + hi) / 2;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06 + 0.9 * n / top); ctx.fillRect(PX, CT + k * P, 30, P); ctx.restore();
      if (!n) return;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.45); ctx.fillRect(GB.l, lo + 2, Math.min(X(n), GB.r) - GB.l, hi - lo - 4); ctx.restore();
      if (n > CMAX) pinned(ctx, GB, X, (v) => y, n, 0, PAL.ink, String(n));
      hits.push({ x: Math.min(X(n), GB.r) - 6, y, r: 10, name: n + ' count' + (n === 1 ? '' : 's') + ' in this row of the image' });
    });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 1.5; ctx.strokeRect(PX, CT, 30, CB - CT); ctx.restore();

    /* the frame's names */
    text(ctx, 'head', HC.x - 110, CT - 4, PAL.ink, { size: 20, align: 'center' });
    label(ctx, 'tumor', xs - 13, YT, { side: 'left', size: 20, color: TUM, gap: 24 });
    text(ctx, 'γ rays', 420, CT - 22, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'lead collimator', (CL + CR) / 2 - 20, CB + 26, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'scintillator', SX + 6, CB + 56, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'photomultiplier tubes', 728, CT - 22, PAL.ink, { size: 20, align: 'center' });

    ro.set('\\kRact = ' + fmt(Rv, 1) + '\\ \\text{mCi} = (' + fmt(Rv, 1) + ')(3.7\\times 10^{7}\\ \\text{Bq}) = ' + sciTex(Rv * 3.7e7) + '\\ \\text{Bq}',
      'One γ ray is drawn for every 3.5 million the source emits.', { form: 'r' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 32.5 · sim-pet · moving · flat (rule 28.1)
   A cut through the ring down its axis, 13 units to the cm: 48 detectors
   between 18.0 and 20.5 cm from the axis round a head 16 by 19 cm. The source
   sits x cm from the axis. Every 0.4 s from 0.2 s a positron and an electron
   meet at a point within 0.6 cm of the source and two γ rays leave back to back
   in a direction from the hash, at 30 cm/s (10⁹ times slower than light); each
   stops at the ring's inner face and lights its detector. When both have
   arrived the line between the two detectors is kept, and the lines gather
   through the 6-s loop. The timing panel shows the arrival times of the latest
   pair to have reached both detectors, (distance)/c, on a fixed 0 to 1.0 ns axis (24.0 cm is 0.80 ns).
===================================================================== */
(function () {
  const H = 660, T = 6, S = 13, RIN = 18, ROUT = 20.5, VD = 30, CC = 30, ND = 48, DT = 0.4;
  const d = sim('sim-pet', H);
  const xs = ctl(d.controls, { label: '\\kx', cls: 'position', min: -6, max: 6, step: 0.1, value: 3, unit: 'cm', dec: 1, onInput: reset, aria: 'the position of the source across the ring, measured from its axis' });
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const RC = { x: 360, y: 360 }, TB = { l: 900, r: 1320, t: 250, b: 450 };
  const P = (p) => ({ x: RC.x + p.x * S, y: RC.y - p.y * S });
  const det = (p) => { const a = Math.atan2(p.y, p.x); return ((Math.floor(a / (2 * Math.PI / ND)) % ND) + ND) % ND; };
  function reach(p, ux, uy) { const b = p.x * ux + p.y * uy, s = -b + Math.sqrt(b * b - (p.x * p.x + p.y * p.y - RIN * RIN)); return { s, q: { x: p.x + s * ux, y: p.y + s * uy } }; }

  let key = null, EV = [];
  function events(x) {
    if (x === key) return EV;
    key = x; EV = [];
    for (let i = 0; 0.2 + i * DT <= T - 1.0; i++) {
      const t0 = 0.2 + i * DT, rr = 0.6 * Math.sqrt(hash(i, 4)), ra = 2 * Math.PI * hash(i, 5);
      const p = { x: x + rr * Math.cos(ra), y: rr * Math.sin(ra) }, phi = Math.PI * hash(i, 6), ux = Math.cos(phi), uy = Math.sin(phi);
      const A = reach(p, ux, uy), B = reach(p, -ux, -uy), cA = 2 * Math.PI * hash(i, 7);
      EV.push({ t0, p, ux, uy, A, B, tA: t0 + A.s / VD, tB: t0 + B.s / VD, dA: det(A.q), dB: det(B.q), ca: Math.cos(cA), sa: Math.sin(cA) });
    }
    return EV;
  }

  function sector(ctx, j, fill, stroke, lw = 1.5) {
    const w = 2 * Math.PI / ND, a0 = -(j + 1) * w + 0.012, a1 = -j * w - 0.012;
    ctx.beginPath(); ctx.arc(RC.x, RC.y, ROUT * S, a0, a1); ctx.arc(RC.x, RC.y, RIN * S, a1, a0, true); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill(); if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
  }

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), xv = xs.v, E = events(xv), GA = F.el('gamma'), EP = F.el('e+'), EM = F.el('e-'), TC = C('time');
    const src = P({ x: xv, y: 0 });
    hits = [];

    topline(ctx, Math.abs(xv) < 0.05
      ? 'Every pair of 0.511-MeV γ rays marks a line through the source, and the lines cross on the axis.'
      : 'Every pair of 0.511-MeV γ rays marks a line through the source, and the lines cross ' + fmt(Math.abs(xv), 1) + ' cm from the axis.');

    /* the head and the source */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(RC.x, RC.y, 8 * S, 9.5 * S, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    ctx.setLineDash([5, 5]); ctx.strokeStyle = alpha(PAL.ink, 0.7);
    ctx.beginPath(); ctx.arc(src.x, src.y, 0.8 * S, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    hits.push({ x: RC.x - 60, y: RC.y + 70, r: 50, name: 'the patient’s head, in a cut through the ring' });
    hits.push({ x: src.x, y: src.y, r: 14, name: 'the source: the β⁺ emitter gathered ' + fmt(Math.abs(xv), 1) + ' cm from the axis' });

    /* the lines of the pairs detected so far */
    const lit = new Array(ND).fill(0);
    let last = E[0];
    E.forEach((e) => {
      const done = Math.max(e.tA, e.tB);
      if (t >= done) last = e;
      if (t >= done) { const a = P(e.A.q), b = P(e.B.q); line(ctx, a.x, a.y, b.x, b.y, alpha(PAL.ink, 0.3), 1.5); }
      [[e.tA, e.dA], [e.tB, e.dB]].forEach(([ta, j]) => { if (t >= ta && t < ta + 0.45) lit[j] = Math.max(lit[j], 1 - (t - ta) / 0.45); });
    });

    /* the ring of detectors */
    ctx.save();
    const pair = t >= Math.max(last.tA, last.tB) ? [last.dA, last.dB] : [];
    for (let j = 0; j < ND; j++) {
      sector(ctx, j, alpha(PAL.soft, 0.95), pair.includes(j) ? PAL.ink : alpha(PAL.ink, 0.4), pair.includes(j) ? 3 : 1.5);
      if (lit[j] > 0) sector(ctx, j, alpha(GA, 0.85 * lit[j]));
    }
    ctx.restore();
    hits.push({ x: RC.x, y: RC.y - (RIN + 1.2) * S, r: 18, name: 'a detector of the ring, 18.0 cm from the axis' });
    hits.push({ x: RC.x - (RIN + 1.2) * S, y: RC.y, r: 18, name: 'a detector of the ring, 18.0 cm from the axis' });

    /* each annihilation: the positron meets an electron, and two γ rays leave back to back */
    E.forEach((e) => {
      const c = P(e.p);
      if (t >= e.t0 - 0.25 && t < e.t0) {
        const k = (e.t0 - t) / 0.25, r = 22 * k;
        dot(ctx, c.x + r * e.ca, c.y - r * e.sa, EP, true, 5);
        dot(ctx, c.x - r * e.ca, c.y + r * e.sa, EM, true, 5);
        hits.push({ x: c.x, y: c.y, r: 16, name: 'a positron meeting an electron' });
      }
      if (t < e.t0) return;
      [[e.ux, e.uy, e.A.s, 1], [-e.ux, -e.uy, e.B.s, 2]].forEach(([ux, uy, smax]) => {
        const s = VD * (t - e.t0);
        if (s >= smax) return;
        const a = P({ x: e.p.x + ux * Math.max(0, s - 2.4), y: e.p.y + uy * Math.max(0, s - 2.4) }), b = P({ x: e.p.x + ux * s, y: e.p.y + uy * s });
        arrow(ctx, a.x, a.y, b.x, b.y, GA, 3.5);
        hits.push({ x: b.x, y: b.y, r: 12, name: 'a 0.511-MeV γ ray' });
      });
      if (t < e.t0 + 0.2) { ctx.save(); ctx.globalAlpha *= 1 - (t - e.t0) / 0.2; ctx.fillStyle = alpha(GA, 0.6); ctx.beginPath(); ctx.arc(c.x, c.y, 6 + 30 * (t - e.t0), 0, 2 * Math.PI); ctx.fill(); ctx.restore(); }
    });

    /* the latest pair's arrival times */
    const r1 = +fmt(Math.max(last.A.s, last.B.s), 1), r2 = +fmt(Math.min(last.A.s, last.B.s), 1);
    const far = last.A.s >= last.B.s ? last.tA : last.tB, near = last.A.s >= last.B.s ? last.tB : last.tA;
    const { X, Y } = axes(ctx, TB, [0, 1], [0, 2], { nx: 5, ny: 2, fx: (v) => fmt(v, 1), fy: () => '', xl: 'arrival time (ns)', yl: 'the latest pair', xc: TC });
    const rows = [[1.5, 'nearer detector', r2, near], [0.5, 'farther detector', r1, far]];
    rows.forEach(([v, name, r, ta]) => {
      const y = Y(v) + 26;
      text(ctx, name, TB.l - 14, y - 12, PAL.ink, { size: 18, align: 'right' });
      if (t < ta) return;
      const x = X(r / CC);
      ctx.save(); ctx.fillStyle = alpha(GA, 0.9); ctx.beginPath(); ctx.moveTo(x - 9, y); ctx.lineTo(x, y - 52); ctx.lineTo(x + 9, y); ctx.closePath(); ctx.fill(); ctx.restore();
      hits.push({ x, y: y - 24, r: 14, name: 'the γ ray reaches the ' + name + ' after ' + fmt(r / CC, 2) + ' ns, ' + fmt(r, 1) + ' cm from the annihilation' });
    });
    if (t >= far && X(r1 / CC) - X(r2 / CC) > 6) { hbracket(ctx, X(r2 / CC), X(r1 / CC), Y(1), TC); text(ctx, 'Δt', X(r1 / CC) + 16, Y(1), TC, { size: 20, weight: 600, align: 'left', bg: PAL.panel }); }
    hits.push({ x: X(0), y: Y(1), r: 12, name: 'the moment of annihilation' });

    /* the frame's names and the legend */
    label(ctx, 'ring of detectors', RC.x + (ROUT + 0.3) * S * Math.cos(0.65), RC.y - (ROUT + 0.3) * S * Math.sin(0.65), { side: 'right', size: 20, gap: 26 });
    text(ctx, 'head', RC.x, RC.y + 9.5 * S + 22, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    label(ctx, 'source', src.x, src.y - 0.8 * S, { side: 'above', size: 20, gap: 26 });
    const LY = 560;
    dot(ctx, TB.l - 120, LY, EP, true, 6); text(ctx, 'positron', TB.l - 104, LY, PAL.ink, { size: 18, align: 'left' });
    dot(ctx, TB.l + 20, LY, EM, true, 6); text(ctx, 'electron', TB.l + 36, LY, PAL.ink, { size: 18, align: 'left' });
    arrow(ctx, TB.l + 150, LY, TB.l + 190, LY, GA, 3.5); text(ctx, 'γ ray, 0.511 MeV', TB.l + 202, LY, PAL.ink, { size: 18, align: 'left' });

    ro.set('\\kdt = \\frac{\\krone - \\krtwo}{\\kc} = \\frac{' + fmt(r1, 1) + '\\ \\text{cm} - ' + fmt(r2, 1) + '\\ \\text{cm}}{3.00\\times 10^{8}\\ \\text{m/s}} = ' + fmt((r1 - r2) / CC, 2) + '\\ \\text{ns}',
      'The γ rays are drawn 10⁹ times slower than light.', { form: 'dt' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
