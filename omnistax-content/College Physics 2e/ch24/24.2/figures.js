/* Figures for section 24.2 Production of Electromagnetic Waves. The page binds
   electric-field, magnetic-field, velocity, position, time, charge, current and
   frequency, which is what ch24/COLOR.md gives 24.2. The index of refraction, the
   metre ruler under a scene, every count and every name are untyped and in ink;
   the sign of a charge is told by the glyph drawn on it and never by a hue; the
   two receivers of Figure 24.7 are told apart by their shapes and their names,
   not by a colour the page has bound. Three of the four figures move, because
   three of the section's ideas have a period in them: the charges run up and down
   the antenna, the current that makes the magnetic part runs with them, and the
   wave itself travels. The ratio of the two field strengths is a state of the
   wave and has no clock, so its figure registers no cycle and takes no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, select, register, cycle, begin, line, arrow, dot, text, topline, label, hbracket, scale, axes, curve, pinned, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = Math.PI * 2;
const CLIGHT = 3.00e8;                   /* the speed of light, in metres per second */
const MU0 = 4 * Math.PI * 1e-7;          /* the permeability of free space */
const B_EARTH = 5e-5;                    /* the Earth's field at its surface, which the worked example measures against */

const SUPS = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
const supOf = (e) => String(e).replace(/-/g, '\u2212').replace(/[0-9]/g, (c) => SUPS[+c]);
/* a number as a × 10^b for the canvas, and the same for KaTeX */
function sci(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \u00D7 10' + supOf(e);
}
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}

/* =====================================================================
   FIGURE 24.5 · sim-antenna-cycle · moving · flat (root rule 28.1)
   The generator at the centre of the wire drives charge to one end and then
   to the other, and the field that separation makes leaves at the speed of
   light. The book prints four instants of one cycle and asks the reader to
   supply the motion between them, so this one runs: the model clock covers
   two periods, over which the wave builds out to two wavelengths exactly as
   the book's four panels do, and then holds. The scene is drawn on one fixed
   scale of 88 units to the metre over a ruler that runs to 12 m, which is as
   far as the lowest frequency's wave reaches in two periods, so nothing
   rescales when a slider moves.
===================================================================== */
(function () {
  const d = sim('sim-antenna-cycle', 640);
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 70, max: 150, step: 5, value: 100, unit: 'MHz', dec: 0, aria: 'the frequency the generator drives the antenna at', onInput: () => cy.reset() });
  const eS = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 200, max: 2000, step: 100, value: 1000, unit: 'V/m', dec: 0, aria: 'the greatest electric field strength the antenna makes beside itself' });

  const AX = 235, ATOP = 140, ABOT = 420, MID = 280, HALF = (ABOT - ATOP) / 2;
  const X0 = 305, PPM = 112, RUN = 9;                 /* the ruler: 0 to 9 m at 112 units to the metre, which is as far as the slowest wave reaches in two periods */
  const X = (m) => X0 + m * PPM;
  const AMP = 120;                                     /* the crest at the greatest field the slider gives */
  const cy = cycle(() => 2, 1.2);                      /* two periods of model time, then a hold */
  const state = () => {
    const f = fS.v * 1e6, T = 1 / f, lam = CLIGHT / f;
    return { f, T, lam, tau: cy.now(), E0: eS.v, front: Math.min(RUN, cy.now() * lam) };
  };
  const fieldAt = (st, m) => (m <= st.front + 1e-9 ? st.E0 * Math.cos(TAU * (st.tau - m / st.lam)) : 0);

  hover(d.stage, () => {
    const st = state();
    return [
      { x: AX, y: ATOP + 24, r: 44, name: 'the top of the antenna, where the charge gathers' },
      { x: AX, y: MID, r: 30, name: 'the AC generator that drives the charge up and down the wire' },
      { x: AX - 46, y: MID - 40, r: 44, name: 'E, the electric field beside the antenna, ' + fmt(fieldAt(st, 0), 0) + ' V/m just now' },
    ];
  });

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    const EC = C('electric-field'), QC = C('charge'), VC = C('velocity'), XC = C('position'), TC = C('time');
    const Ehere = fieldAt(st, 0);

    /* the antenna, its generator and the standing wave of charge along it */
    line(ctx, AX, ATOP, AX, ABOT, PAL.ink, 6);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(AX, MID, 26, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= 28; i++) { const t = i / 28, xx = AX - 15 + 30 * t, yy = MID - 9 * Math.sin(TAU * t); if (i) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'the antenna', AX, ABOT + 30, PAL.muted, { size: 19, align: 'center' });
    for (let i = 0; i <= 8; i++) {
      const yy = ATOP + 10 + (i * (ABOT - ATOP - 20)) / 8;
      const s = -Math.cos(TAU * st.tau) * ((MID - yy) / HALF);
      if (Math.abs(s) < 0.07) continue;
      const r = 7 + 9 * Math.abs(s);
      dot(ctx, AX, yy, QC, true, r);
      text(ctx, s > 0 ? '+' : '\u2212', AX, yy - 1, PAL.panel, { size: Math.round(r * 1.7), weight: 700, align: 'center' });
    }
    text(ctx, 'the charge on the wire', AX, ABOT + 56, QC, { size: 19, align: 'center', weight: 600 });

    /* the field beside the antenna, which is the wave's amplitude as it leaves */
    const h = (AMP * Ehere) / 2000;
    if (Math.abs(h) > 3) {
      arrow(ctx, AX - 48, MID, AX - 48, MID - h, EC, 5);
      text(ctx, 'E = ' + fmt(Ehere, 0) + ' V/m', AX - 62, MID - h / 2, EC, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    } else text(ctx, 'E = 0 just now', AX - 62, MID, EC, { size: 21, weight: 600, align: 'right', bg: PAL.panel });

    /* the wave that has already left, drawn only as far as it has travelled */
    ctx.save(); ctx.strokeStyle = EC; ctx.lineWidth = 5; ctx.beginPath();
    for (let px = 0; px <= st.front * PPM; px += 3) {
      const m = px / PPM, yy = MID - (AMP * fieldAt(st, m)) / 2000;
      if (px) ctx.lineTo(X(m), yy); else ctx.moveTo(X(m), yy);
    }
    ctx.stroke(); ctx.restore();
    const stepM = st.lam / 8;
    for (let m = stepM; m <= st.front - 1e-6; m += stepM) {
      const yy = MID - (AMP * fieldAt(st, m)) / 2000;
      if (Math.abs(yy - MID) > 6) arrow(ctx, X(m), MID, X(m), yy, alpha(EC, 0.45), 2.5);
    }
    line(ctx, X0, MID, X(RUN), MID, alpha(PAL.ink, 0.35), 2);

    /* the front of the wave, and the speed it moves at */
    const xf = X(st.front);
    line(ctx, xf, MID - AMP - 24, xf, MID + AMP + 24, alpha(PAL.ink, 0.4), 2, [6, 8]);
    const tail = Math.max(X0, xf - 130);
    if (xf - tail > 30) {
      arrow(ctx, tail, 118, xf, 118, VC, 5);
      text(ctx, 'c = 3.00 \u00D7 10\u2078 m/s', xf + 14, 118, VC, { size: 21, weight: 600, align: xf > 1120 ? 'right' : 'left', bg: PAL.panel });
    }
    text(ctx, 'the front of the wave', xf, MID + AMP + 46, PAL.muted, { size: 18, align: xf > 1180 ? 'right' : 'center', bg: PAL.panel });

    /* one wavelength, marked between two crests once a whole one has left */
    const frac = st.tau - Math.floor(st.tau), m1 = frac * st.lam, m2 = m1 + st.lam;
    if (m2 <= Math.min(st.front, RUN) + 1e-6 && st.E0 > 0) {
      const yb = MID + AMP + 14;
      hbracket(ctx, X(m1), X(m2), yb, XC);
      text(ctx, '\u03BB = ' + fmt(st.lam, 2) + ' m', (X(m1) + X(m2)) / 2, yb - 22, XC, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    }

    /* the metre ruler the whole scene is drawn to */
    line(ctx, X0, 492, X(RUN), 492, PAL.muted, 2);
    scale(ctx, X, 0, RUN, 1, 492, 'm', 3);
    text(ctx, 'distance from the antenna', X(RUN), 546, XC, { size: 20, weight: 600, align: 'right' });

    /* the clock, with the four instants the book draws marked along it */
    const PX0 = 300, PX1 = 1000, PY = 596;
    line(ctx, PX0, PY, PX1, PY, PAL.muted, 2);
    const PT = (t) => PX0 + (t / 2) * (PX1 - PX0);
    [[0, 't = 0'], [0.25, 'T/4'], [0.5, 'T/2'], [1, 'T'], [1.5, ''], [2, '2T']].forEach(([t, nm]) => {
      line(ctx, PT(t), PY - 8, PT(t), PY + 8, PAL.muted, 2);
      if (nm) text(ctx, nm, PT(t), PY + 28, PAL.muted, { size: 17, align: 'center' });
    });
    dot(ctx, PT(st.tau), PY, TC, true, 10);
    text(ctx, 'the instants the book draws', PX0 - 16, PY, TC, { size: 19, weight: 600, align: 'right' });

    topline(ctx, `The antenna stands ${fmt(st.tau, 2)} periods into its cycle, the field beside it is ${fmt(Ehere, 0)} V/m, and the wave has reached ${fmt(st.front, 2)} m from the source.`);
    readout(d.readout,
      `\\klam = \\kc\\kT = \\frac{\\kc}{\\kf} = \\frac{3.00 \\times 10^{8}\\ \\text{m/s}}{${fmt(fS.v, 0)} \\times 10^{6}\\ \\text{Hz}} = ${fmt(st.lam, 2)}\\ \\text{m}`,
      `In one period the field that left the antenna first travels one wavelength, so a faster oscillation makes a shorter wave: at ${fmt(fS.v, 0)} MHz the period is ${sci(st.T, 2)} s and the wave is ${fmt(st.lam, 2)} m long. The amplitude is set by how far the charges separate, and nothing else: raising the field beside the antenna makes every crest taller and leaves the spacing alone. Watch the antenna at the four instants the clock marks, and the picture at each is one of the book's four panels.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();

/* =====================================================================
   FIGURE 24.6 · sim-antenna-b · moving · a locked view (root rule 28.2)
   The same antenna, seen now for the current in it rather than the charge on
   it. Ampere's law puts circles of magnetic field round the wire, and circles
   round a wire drawn flat are either a lie or a pattern of dots and crosses,
   so the scene is projected from one viewpoint a little above and to one side
   of the antenna, which is the viewpoint the book prints it from. Nothing
   about the arrangement changes with where the reader stands, so there is no
   orbit and the figure stays a 2D figure in cost and in chrome. Moving,
   because the current has a period and the magnetic wave leaves at c; the
   model clock runs the same two periods as Figure 24.5 and the same fixed
   scale of 108 units to the metre carries the wave out to 12 m.
===================================================================== */
(function () {
  const d = sim('sim-antenna-b', 560);
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 70, max: 150, step: 5, value: 100, unit: 'MHz', dec: 0, aria: 'the frequency the generator drives the antenna at', onInput: () => cy.reset() });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 5, max: 50, step: 1, value: 20, unit: 'A', dec: 0, aria: 'the greatest current the generator drives through the antenna' });

  const V = F.view({ yaw: -0.22, pitch: 0.34, dist: 9000, cx: 250, cy: 300 });
  const P = V.P;
  const UPM = 120, RUN = 9;                  /* 120 scene units to the metre, and the same 9 m of reach as Figure 24.5 */
  const R_RING = UPM;                        /* the marked ring stands one metre out from the wire */
  const AH = 170;                            /* half the antenna, in scene units */
  const BAMP = 200;                          /* the crest of the magnetic wave at the greatest current */
  const cy = cycle(() => 2, 1.2);
  const state = () => {
    const f = fS.v * 1e6, lam = CLIGHT / f;
    const tau = cy.now(), I = iS.v * Math.sin(TAU * tau), E = Math.cos(TAU * tau);
    return { f, lam, tau, I, E, front: Math.min(RUN, tau * lam) };
  };
  const Bring = (I) => (MU0 * Math.abs(I)) / (TAU * (R_RING / UPM));   /* the field one metre from the wire */
  const Bz = (st, m) => (m <= st.front + 1e-9 ? -iS.v * Math.sin(TAU * (st.tau - m / st.lam)) : 0);

  function poly(ctx, pts, color, w, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
    ctx.beginPath(); pts.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.stroke(); ctx.restore();
  }
  function arrow3(ctx, a, b, color, w) { const p = P(a), q = P(b); arrow(ctx, p[0], p[1], q[0], q[1], color, w ?? 4); }

  /* one ring of field round the wire at height y, with two arrowheads on it */
  function ring(ctx, y, r, color, w, sign) {
    const pts = [];
    for (let i = 0; i <= 72; i++) { const a = (i / 72) * TAU; pts.push([r * Math.cos(a), y, r * Math.sin(a)]); }
    poly(ctx, pts, color, w);
    if (!sign) return;
    [0.25, 0.75].forEach((t) => {
      const a = t * TAU, da = 0.10 * sign;
      arrow3(ctx, [r * Math.cos(a - da), y, r * Math.sin(a - da)], [r * Math.cos(a + da), y, r * Math.sin(a + da)], color, 4);
    });
  }

  hover(d.stage, () => {
    const st = state();
    const g = P([0, 0, 0]), b = P([R_RING, 0, 0]);
    return [
      { x: g[0], y: g[1], r: 34, name: 'the AC generator at the center of the antenna' },
      { x: b[0], y: b[1], r: 34, name: 'B one meter from the wire, ' + sci(Bring(st.I), 2) + ' T just now' },
    ];
  });

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    const BC = C('magnetic-field'), IC = C('current'), EC = C('electric-field'), QC = C('charge'), VC = C('velocity'), XC = C('position');
    const sign = st.I >= 0 ? 1 : -1, str = Math.min(1, Math.abs(st.I) / 50);

    /* the axis the wave travels along, with a tick at every metre */
    poly(ctx, [[0, 0, 0], [RUN * UPM, 0, 0]], alpha(PAL.ink, 0.35), 2);
    for (let m = 0; m <= RUN; m++) {
      poly(ctx, [[m * UPM, -9, 0], [m * UPM, 9, 0]], PAL.muted, 2);
      if (m % 3 === 0) { const q = P([m * UPM, 0, 0]); text(ctx, fmt(m, 0) + ' m', q[0], q[1] + 26, PAL.muted, { size: 17, align: 'center' }); }
    }

    /* the rings of magnetic field round the wire, all along it */
    [-1, 0, 1].forEach((k) => {
      const y = k * 130, main = k === 0;
      ring(ctx, y, R_RING, alpha(BC, main ? 0.35 + 0.6 * str : 0.18 + 0.32 * str), main ? 4 : 2.5, Math.abs(st.I) > 0.5 ? sign : 0);
    });

    /* the antenna, its generator, its charge and the current in it */
    poly(ctx, [[0, -AH, 0], [0, AH, 0]], PAL.ink, 6);
    const g = P([0, 0, 0]);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(g[0], g[1], 24, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    [[AH - 18, -st.E], [-AH + 18, st.E]].forEach(([y, s]) => {
      if (Math.abs(s) < 0.08) return;
      const q = P([0, y, 0]), r = 8 + 9 * Math.abs(s);
      dot(ctx, q[0], q[1], QC, true, r);
      text(ctx, s > 0 ? '+' : '\u2212', q[0], q[1] - 1, PAL.panel, { size: Math.round(r * 1.7), weight: 700, align: 'center' });
    });
    if (Math.abs(st.I) > 0.5) {
      const L = (AH * 0.66 * Math.abs(st.I)) / 50 + 26, s2 = st.I >= 0 ? 1 : -1;
      arrow3(ctx, [-34, -s2 * L, 0], [-34, s2 * L, 0], IC, 5);
      const q = P([-34, s2 * L, 0]);
      text(ctx, 'I = ' + fmt(Math.abs(st.I), 1) + ' A', q[0] - 14, q[1], IC, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    }

    /* the electric field beside the wire, and the magnetic field a metre out:
       panel (b), the two of them at right angles at one point in space */
    if (Math.abs(st.E) > 0.08) {
      const h = 120 * st.E;
      arrow3(ctx, [R_RING, 0, 0], [R_RING, h, 0], EC, 5);
      const q = P([R_RING, h, 0]);
      text(ctx, 'E', q[0] + 14, q[1] - 6, EC, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    }
    if (Math.abs(st.I) > 0.5) {
      const t = 118 * str * sign;
      arrow3(ctx, [R_RING, 0, 0], [R_RING, 0, -t], BC, 5);
      const q = P([R_RING, 0, -t]);
      text(ctx, 'B', q[0] + 12, q[1] + 12, BC, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    }
    const rq = P([R_RING / 2, -52, 0]);
    text(ctx, 'r = 1.00 m', rq[0], rq[1], XC, { size: 18, weight: 600, align: 'center', bg: PAL.panel });

    /* the magnetic wave that has already left, in the horizontal plane */
    const pts = [];
    for (let px = 0; px <= st.front * UPM; px += 6) pts.push([px, 0, (BAMP * Bz(st, px / UPM)) / 50]);
    if (pts.length > 1) poly(ctx, pts, BC, 5);
    const stepM = st.lam / 8;
    for (let m = stepM; m <= st.front - 1e-6; m += stepM) {
      const z = (BAMP * Bz(st, m)) / 50;
      if (Math.abs(z) > 6) arrow3(ctx, [m * UPM, 0, 0], [m * UPM, 0, z], alpha(BC, 0.45), 2.5);
    }
    if (st.front > 0.4) {
      const a = P([Math.max(0, st.front - 1.4) * UPM, 132, 0]), b = P([st.front * UPM, 132, 0]);
      arrow(ctx, a[0], a[1], b[0], b[1], VC, 5);
      text(ctx, 'c', a[0] - 12, a[1] - 4, VC, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    }

    topline(ctx, `The current in the antenna is ${fmt(Math.abs(st.I), 1)} A ${st.I >= 0 ? 'upward' : 'downward'}, the field one meter out is ${sci(Bring(st.I), 2)} T, and the magnetic wave has reached ${fmt(st.front, 2)} m.`);
    readout(d.readout,
      `\\kBmag = \\frac{\\mu_0\\kIcur}{2\\pi\\kr} = \\frac{(4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A})(${fmt(Math.abs(st.I), 1)}\\ \\text{A})}{2\\pi(1.00\\ \\text{m})} = ${sciTex(Bring(st.I), 2)}\\ \\text{T}`,
      `The rings are the field of a long straight wire, so they grow and shrink with the current and turn the other way when it reverses; point the thumb of your right hand the way the current runs and your fingers curl the way they go. The current is greatest when the charge separation is zero, a quarter of a cycle away from the instant Figure 24.5 opens on, which is why the electric arrow and the magnetic arrow beside the wire never reach their greatest values together here at the source. Once the field has left, though, it travels as the electric part does, at ${fmt(st.lam, 2)} m to the cycle and at the speed of light, so the magnetic wave has the same period and the same wavelength as the electric one.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.4), draw });
})();

/* =====================================================================
   FIGURE 24.7 · sim-em-wave-3d · moving · a full 3D scene (root rule 28.3)
   The arrangement is the lesson: the electric field in one plane, the
   magnetic field in a plane at right angles, and the travel along the line
   where the two meet. The book has to draw it in perspective, and three of
   the section's conceptual questions are answered by turning that
   arrangement against a receiving wire or a receiving loop, which is a thing
   a reader can do here and cannot do on the page. The orbit is bounded to
   the hemisphere the wave travels into, the yaw from -140° to +14°, so the
   reader can go round past the view straight down the beam but never round
   behind the antenna to watch the wave arrive at its own source; the pitch
   is held between -70° and +70°, where neither field's plane closes to a
   line. Auto-rotate has its button but starts off, since the yaw is bounded
   and an idle spin would sit against the bound. Where there is no WebGL the
   canvas draws the book's own oblique view of the wave instead.
   Scene units: the beam is 6.00 m long and 5.20 units, so 0.867 units to the
   metre; the electric crest is 0.90 units at the greatest field the slider
   gives and the magnetic crest 0.60, each to its own scale, as the graph
   below states.
===================================================================== */
(function () {
  const THREE = window.THREE;
  /* whether the scene can be mounted has to be settled before the canvas is made,
     since the canvas is a graph alone when there is a scene above it and carries
     the wave as well when there is not; a probe context is the honest test, and
     asking for one costs nothing */
  const hasGL = (() => {
    if (!THREE) return false;
    try { const p = document.createElement('canvas'); return !!(p.getContext('webgl') || p.getContext('experimental-webgl')); } catch (e) { return false; }
  })();
  const H2D = hasGL ? 350 : 850;                 /* with no scene to mount, the canvas draws the wave as well as the graph */
  const d = sim('sim-em-wave-3d', H2D);
  const eS = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 200, max: 2000, step: 100, value: 1000, unit: 'V/m', dec: 0, aria: 'the greatest electric field strength of the wave' });
  const fS = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 70, max: 150, step: 5, value: 100, unit: 'MHz', dec: 0, aria: 'the frequency of the wave, which sets its wavelength' });
  const recC = select(d.controls, {
    label: '\\text{the receiver}',
    options: [
      { value: 'none', label: 'none' },
      { value: 'wire-e', label: 'a wire along E' },
      { value: 'wire-b', label: 'a wire along B' },
      { value: 'loop-b', label: 'a loop the field goes through' },
      { value: 'loop-edge', label: 'a loop edge-on to the field' },
    ],
    value: 'wire-e', aria: 'what is held in the path of the wave',
  });

  const BEAM_M = 6.0, X0 = -2.6, X1 = 2.6, UPM = (X1 - X0) / BEAM_M;     /* 0.867 scene units to the metre */
  const EA = 0.90, BA = 0.60;                                            /* the two crests, each to its own scale */
  const E_MAX = 2000, B_MAX = E_MAX / CLIGHT;                            /* the fixed ranges of the graph, from the slider's maximum */
  const REC_M = 4.2;                                                     /* the receiver stands 4.20 m down the beam */
  const cy = cycle(() => 1, 1.2);

  const state = () => {
    const f = fS.v * 1e6, lam = CLIGHT / f;
    return { f, lam, tau: cy.now(), E0: eS.v, B0: eS.v / CLIGHT, rec: recC.value };
  };
  const phase = (st, m) => TAU * (st.tau - m / st.lam);
  const shapeOf = (st, m) => Math.cos(phase(st, m));
  const RECNAME = {
    none: 'nothing is held in the beam',
    'wire-e': 'a straight wire lying along the electric field',
    'wire-b': 'a straight wire lying along the magnetic field',
    'loop-b': 'a loop with the magnetic field passing through it',
    'loop-edge': 'a loop turned edge-on to the magnetic field',
  };
  function verdict(st) {
    if (st.rec === 'none') return 'nothing is held in the beam to be driven';
    if (st.rec === 'wire-e') return 'the field pushes the charges along the wire, so this wire is driven hardest';
    if (st.rec === 'wire-b') return 'the field stands across the wire and pushes no charge along it, so this wire is not driven';
    if (st.rec === 'loop-b') return 'the magnetic field through the loop rises and falls, so a current is induced in it';
    return 'the magnetic field slides along the plane of the loop and never passes through it, so no current is induced';
  }

  /* ---------- the scene ---------- */
  let V = null, S = null, g3 = null;
  const paint = [];
  const pmat = (col, extra) => { const m = F.mesh.mat(col(), extra); paint.push({ m, col }); return m; };
  function vec(g, col, r, name) {
    const shaft = new THREE.Mesh(F.mesh.geo().cyl, pmat(col)); shaft.scale.set(r, 1, r); g.add(shaft);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col)); g.add(cone);
    if (name) { V.pickable(shaft, name); V.pickable(cone, name); }
    return {
      set(a, b) {
        const A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
        const dd = B.clone().sub(A), L = dd.length();
        if (L < 0.03) { shaft.visible = cone.visible = false; return; }
        shaft.visible = cone.visible = true;
        const hl = Math.min(0.22, L * 0.45), u = dd.clone().normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
        F.mesh.setStick(shaft, a, base.toArray());
        cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
        cone.scale.set(r * 3.3, hl, r * 3.3);
      },
      hide() { shaft.visible = cone.visible = false; },
    };
  }
  const N_CURVE = 130, N_COMB = 13;
  function ringPts(kind, r, cx) {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * TAU;
      pts.push(kind === 'xy' ? [cx + r * Math.cos(a), r * Math.sin(a), 0] : [cx + r * Math.cos(a), 0, r * Math.sin(a)]);
    }
    return pts;
  }

  function build() {
    if (!V || !V.scene || !g3) return;
    V.clear(); paint.length = 0;
    const EC = () => C('electric-field'), BC = () => C('magnetic-field'), VC = () => C('velocity'), inkC = () => alpha(PAL.ink, 0.5);
    S = {};
    /* the line of travel, the antenna it comes from and the arrow that says which way it goes */
    const axis = F.mesh.polyline(g3, [[X0 - 0.5, 0, 0], [X1 + 0.35, 0, 0]], PAL.rule);
    paint.push({ m: axis.material, col: () => PAL.rule });
    S.ant = F.mesh.stick(g3, [X0 - 0.42, -0.8, 0], [X0 - 0.42, 0.8, 0], 0.026, PAL.ink);
    paint.push({ m: S.ant.material, col: () => PAL.ink });
    V.pickable(S.ant, 'the antenna the wave is leaving');
    S.c = vec(g3, VC, 0.024, 'c, the direction the wave travels, at the speed of light');
    S.c.set([X1 + 0.05, 0, 0], [X1 + 0.62, 0, 0]);
    /* the two waves, as a curve each with a comb of arrows under it */
    S.eLine = F.mesh.polyline(g3, [[0, 0, 0], [0, 0, 0]], C('electric-field'));
    S.bLine = F.mesh.polyline(g3, [[0, 0, 0], [0, 0, 0]], C('magnetic-field'));
    S.eLine.frustumCulled = false; S.bLine.frustumCulled = false;
    paint.push({ m: S.eLine.material, col: EC }); paint.push({ m: S.bLine.material, col: BC });
    S.eComb = []; S.bComb = [];
    for (let i = 0; i < N_COMB; i++) {
      S.eComb.push(vec(g3, EC, 0.022, 'E, the electric field of the wave'));
      S.bComb.push(vec(g3, BC, 0.022, 'B, the magnetic field of the wave'));
    }
    /* the receiver held in the beam */
    const RX = X0 + REC_M * UPM;
    S.wire = F.mesh.stick(g3, [RX, -0.75, 0], [RX, 0.75, 0], 0.030, PAL.ink);
    paint.push({ m: S.wire.material, col: () => PAL.ink });
    V.pickable(S.wire, 'the receiving wire');
    S.loopXY = F.mesh.polyline(g3, ringPts('xy', 0.62, RX), PAL.ink);
    S.loopXZ = F.mesh.polyline(g3, ringPts('xz', 0.62, RX), PAL.ink);
    paint.push({ m: S.loopXY.material, col: () => PAL.ink }); paint.push({ m: S.loopXZ.material, col: () => PAL.ink });
    S.RX = RX;
    /* the names: five things carry one each, which is under the six of rule 26.7 */
    S.lab = {
      E: V.label('E', [0, 0, 0], g3, 12), B: V.label('B', [0, 0, 0], g3, 12),
      c: V.label('c', [X1 + 0.72, 0, 0], g3, 12),
      ant: V.label('the antenna', [X0 - 0.42, -1.05, 0], g3, -6),
      rec: V.label('', [RX, -1.28, 0], g3, -6),
    };
    S.lab.E.style.color = C('electric-field'); S.lab.B.style.color = C('magnetic-field'); S.lab.c.style.color = C('velocity');
    [S.lab.ant, S.lab.rec].forEach((e) => { e.style.background = 'transparent'; e.style.border = '0'; e.style.fontWeight = '500'; e.style.color = PAL.muted; });
    V.invalidate();
  }

  function apply(st) {
    if (!S) return;
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    S.lab.E.style.color = C('electric-field'); S.lab.B.style.color = C('magnetic-field'); S.lab.c.style.color = C('velocity');
    const kE = (EA * st.E0) / E_MAX, kB = (BA * st.E0) / E_MAX;
    const ep = [], bp = [];
    for (let i = 0; i <= N_CURVE; i++) {
      const m = (i / N_CURVE) * BEAM_M, x = X0 + m * UPM, s = shapeOf(st, m);
      ep.push(new THREE.Vector3(x, kE * s, 0)); bp.push(new THREE.Vector3(x, 0, kB * s));
    }
    S.eLine.geometry.setFromPoints(ep); S.bLine.geometry.setFromPoints(bp);
    for (let i = 0; i < N_COMB; i++) {
      const m = ((i + 0.5) / N_COMB) * BEAM_M, x = X0 + m * UPM, s = shapeOf(st, m);
      if (Math.abs(kE * s) < 0.04) S.eComb[i].hide(); else S.eComb[i].set([x, 0, 0], [x, kE * s, 0]);
      if (Math.abs(kB * s) < 0.04) S.bComb[i].hide(); else S.bComb[i].set([x, 0, 0], [x, 0, kB * s]);
    }
    /* the names ride on the crest nearest the middle of the beam, so that neither
       of them drifts up under the headline at the top of the stage */
    let bestM = BEAM_M / 2, best = -2;
    for (let i = 0; i <= N_CURVE; i++) {
      const m = (i / N_CURVE) * BEAM_M; if (m < 0.5 || m > BEAM_M - 0.5) continue;
      const q = shapeOf(st, m) - 0.14 * Math.abs(m - BEAM_M / 2);
      if (q > best) { best = q; bestM = m; }
    }
    best = shapeOf(st, bestM);
    const bx = X0 + bestM * UPM;
    V.move(S.lab.E, [bx, kE * best + 0.16, 0]); V.move(S.lab.B, [bx, 0, kB * best + 0.16]);
    S.lab.E.hidden = st.E0 <= 0; S.lab.B.hidden = st.E0 <= 0;
    S.wire.visible = st.rec === 'wire-e' || st.rec === 'wire-b';
    if (st.rec === 'wire-e') F.mesh.setStick(S.wire, [S.RX, -0.75, 0], [S.RX, 0.75, 0]);
    if (st.rec === 'wire-b') F.mesh.setStick(S.wire, [S.RX, 0, -0.75], [S.RX, 0, 0.75]);
    S.loopXY.visible = st.rec === 'loop-b'; S.loopXZ.visible = st.rec === 'loop-edge';
    S.lab.rec.textContent = st.rec === 'none' ? '' : RECNAME[st.rec];
    S.lab.rec.hidden = st.rec === 'none';
    V.headline(`The wave travels to the right at the speed of light, ${fmt(st.lam, 2)} m to the cycle, its crests ${fmt(st.E0, 0)} V/m and ${sci(st.B0, 2)} T.`);
    V.invalidate();
  }

  /* ---------- the book's own oblique view, where there is no WebGL ---------- */
  function drawFlat(ctx, st) {
    const OX = 230, OY = 300, SX = 150, KX = -110, KY = 200;    /* x to the right, y up, z back and down-left */
    const PT = (x, y, z) => [OX + (x - X0) * SX + z * KX, OY - y * 150 + z * KY];
    const EC = C('electric-field'), BC = C('magnetic-field'), VC = C('velocity');
    const kE = (EA * st.E0) / E_MAX, kB = (BA * st.E0) / E_MAX;
    const path = (f, color, w) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i <= N_CURVE; i++) { const m = (i / N_CURVE) * BEAM_M, p = f(m); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
      ctx.stroke(); ctx.restore();
    };
    const a0 = PT(X0 - 0.5, 0, 0), a1 = PT(X1 + 0.5, 0, 0);
    line(ctx, a0[0], a0[1], a1[0], a1[1], alpha(PAL.ink, 0.45), 2);
    const t0 = PT(X0 - 0.42, -0.8, 0), t1 = PT(X0 - 0.42, 0.8, 0);
    line(ctx, t0[0], t0[1], t1[0], t1[1], PAL.ink, 6);
    text(ctx, 'the antenna', t0[0], t0[1] + 26, PAL.muted, { size: 18, align: 'center' });
    path((m) => PT(X0 + m * UPM, kE * shapeOf(st, m), 0), EC, 5);
    path((m) => PT(X0 + m * UPM, 0, kB * shapeOf(st, m)), BC, 5);
    for (let i = 0; i < N_COMB; i++) {
      const m = ((i + 0.5) / N_COMB) * BEAM_M, x = X0 + m * UPM, s = shapeOf(st, m);
      const b1 = PT(x, 0, 0), e1 = PT(x, kE * s, 0), e2 = PT(x, 0, kB * s);
      if (Math.abs(kE * s) > 0.04) arrow(ctx, b1[0], b1[1], e1[0], e1[1], alpha(EC, 0.5), 2.5);
      if (Math.abs(kB * s) > 0.04) arrow(ctx, b1[0], b1[1], e2[0], e2[1], alpha(BC, 0.5), 2.5);
    }
    const c0 = PT(X1 + 0.05, 0, 0), c1 = PT(X1 + 0.62, 0, 0);
    arrow(ctx, c0[0], c0[1], c1[0], c1[1], VC, 5);
    text(ctx, 'c', c1[0] + 14, c1[1] - 10, VC, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    const eTop = PT(X0 + 0.5 * UPM, kE, 0), bTop = PT(X0 + 0.5 * UPM, 0, kB);
    text(ctx, 'E', eTop[0] - 22, eTop[1] - 18, EC, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'B', bTop[0] - 22, bTop[1] + 18, BC, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'This browser cannot turn the scene, so the wave is drawn from one viewpoint only,', 700, 470, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'with the electric field in the upright plane and the magnetic field in the plane at right angles to it.', 700, 494, PAL.muted, { size: 17, align: 'center' });
  }

  function drawGraph(ctx, st, y0) {
    const box = { l: 180, r: 1230, t: y0 + 56, b: y0 + 250 };
    const { X, Y } = axes(ctx, box, [0, BEAM_M], [-E_MAX, E_MAX], {
      xl: 'distance along the beam (m)', xc: C('position'),
      nx: 6, ny: 4, fx: (t) => fmt(t, 0), fy: (t) => fmt(t / 1000, 1),
    });
    for (let i = 0; i <= 4; i++) {
      const v = -E_MAX + (i * 2 * E_MAX) / 4;
      text(ctx, fmt((v / CLIGHT) * 1e6, 2), box.r + 14, Y(v), PAL.muted, { size: 17, align: 'left' });
    }
    text(ctx, 'B (\u03BCT)', box.r, box.t - 24, C('magnetic-field'), { size: 20, weight: 600, align: 'right' });
    text(ctx, 'E (kV/m)', box.l, box.t - 24, C('electric-field'), { size: 20, weight: 600, align: 'left' });
    curve(ctx, (m) => st.E0 * shapeOf(st, m), 0, BEAM_M, X, Y, C('electric-field'), 5, 220);
    curve(ctx, (m) => st.B0 * CLIGHT * shapeOf(st, m), 0, BEAM_M, X, Y, C('magnetic-field'), 3, 220);
    const rp = pinned(ctx, box, X, Y, REC_M, st.E0 * shapeOf(st, REC_M), C('electric-field'));
    if (!rp.out && st.rec !== 'none') {
      line(ctx, rp.x, box.t, rp.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, 'the receiver', rp.x, box.t + 18, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    }
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    if (!V) { drawFlat(ctx, st); topline(ctx, `The wave travels to the right at the speed of light, ${fmt(st.lam, 2)} m to the cycle, its crests ${fmt(st.E0, 0)} V/m and ${sci(st.B0, 2)} T.`); }
    else apply(st);
    drawGraph(ctx, st, V ? 24 : 520);
    readout(d.readout,
      `\\frac{\\kEf}{\\kBmag} = \\frac{${fmt(st.E0, 0)}\\ \\text{V/m}}{${sciTex(st.B0, 2)}\\ \\text{T}} = 3.00 \\times 10^{8}\\ \\text{m/s} = \\kc`,
      `The two fields are exactly in phase and stand at right angles to one another and to the line of travel, which is what makes an electromagnetic wave a transverse wave. On the graph the electric curve is drawn against the left scale and the magnetic curve against the right, and because each is the other divided by the speed of light the two fall on the same line. ${st.rec === 'none' ? 'Nothing is held in the beam just now, so' : RECNAME[st.rec].charAt(0).toUpperCase() + RECNAME[st.rec].slice(1) + ' stands ' + fmt(REC_M, 2) + ' m down the beam, and'} ${verdict(st)}.`);
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 440, dist: 6.4, tilt: 0.42, spin: 'off',
      views: [
        { label: 'three quarters', yaw: -0.40, pitch: 0.42 },
        { label: 'down the beam', yaw: -1.5708, pitch: 0.0 },
        { label: 'from above', yaw: -0.40, pitch: 1.15 },
      ],
      pitch: [-1.22, 1.22], yaw: [-2.45, 0.25], zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { g3 = V.part(0); g3.position.y = -0.34; V.setView(-0.40, 0.42); d.stage.appendChild(d.c); }   /* the scene sits a little low, so no crest can reach the headline band */
  }
  if (V) { try { build(); } catch (e) { console.error('sim-em-wave-3d: the scene could not be built', e); S = null; V = null; } }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.22), draw });
})();

/* =====================================================================
   SIM · sim-field-ratio · still · flat (root rule 28.1)
   The section states that the two field strengths of a wave stand in a fixed
   ratio and that the ratio is the speed of light, then works one number
   through it. The ratio is a state of the wave and has no time in it, so the
   figure registers no cycle and takes no transport (rule 14); what it adds is
   variation, since the reader can move the electric field and the medium and
   watch both the magnetic field and the wave's speed answer. The two arrows
   are drawn to their own fixed scales, the electric one full length at the
   5000 V/m the slider reaches and the magnetic one full length at the
   4.17 × 10⁻⁵ T that 5000 V/m makes in a medium of index 2.50; the strip
   below is logarithmic and runs from 10⁻⁷ T to 10⁻⁴ T, which holds every
   value the sliders can make and the Earth's own field besides.
===================================================================== */
(function () {
  const d = sim('sim-field-ratio', 580);
  const eS = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 100, max: 5000, step: 50, value: 1000, unit: 'V/m', dec: 0, aria: 'the electric field strength of the wave' });
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 1, max: 2.5, step: 0.05, value: 1, unit: '', dec: 2, aria: 'the index of refraction of the medium the wave travels through' });

  const E_MAX = 5000, N_MAX = 2.5, B_MAX = (E_MAX * N_MAX) / CLIGHT;   /* 4.17 × 10⁻⁵ T, the longest magnetic arrow */
  const BAR_X = 330, BAR_W = 640;
  const LO = -7, HI = -4;                                              /* the decades of the strip */
  const SX = 330, SW = 700, SY = 452;
  const XB = (lg) => SX + ((lg - LO) / (HI - LO)) * SW;
  const state = () => { const v = CLIGHT / nS.v, B = eS.v / v; return { v, B }; };

  hover(d.stage, () => {
    const st = state();
    return [
      { x: XB(Math.log10(B_EARTH)), y: SY - 20, r: 22, name: 'the Earth\u2019s field at its surface, 5 \u00D7 10\u207B\u2075 T' },
      { x: XB(Math.log10(Math.max(st.B, 1e-8))), y: SY, r: 22, name: 'the magnetic field of this wave, ' + sci(st.B, 2) + ' T' },
    ];
  });

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    const EC = C('electric-field'), BC = C('magnetic-field'), VC = C('velocity');

    /* the two field strengths, each drawn to its own scale */
    text(ctx, 'the electric field of the wave', BAR_X - 18, 150, EC, { size: 20, weight: 600, align: 'right' });
    arrow(ctx, BAR_X, 150, BAR_X + (BAR_W * eS.v) / E_MAX, 150, EC, 6);
    text(ctx, fmt(eS.v, 0) + ' V/m', BAR_X + (BAR_W * eS.v) / E_MAX + 16, 150, EC, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'the magnetic field of the wave', BAR_X - 18, 228, BC, { size: 20, weight: 600, align: 'right' });
    arrow(ctx, BAR_X, 228, BAR_X + (BAR_W * st.B) / B_MAX, 228, BC, 6);
    text(ctx, sci(st.B, 2) + ' T', BAR_X + (BAR_W * st.B) / B_MAX + 16, 228, BC, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'each arrow is drawn to its own scale, since the two are quantities of different kinds', 700, 278, PAL.muted, { size: 17, align: 'center' });

    /* the speed of the wave in the medium */
    text(ctx, 'the speed of the wave', BAR_X - 18, 336, VC, { size: 20, weight: 600, align: 'right' });
    line(ctx, BAR_X, 336, BAR_X + BAR_W, 336, alpha(PAL.ink, 0.35), 2);
    arrow(ctx, BAR_X, 336, BAR_X + (BAR_W * st.v) / CLIGHT, 336, VC, 6);
    line(ctx, BAR_X + BAR_W, 322, BAR_X + BAR_W, 350, PAL.muted, 2);
    text(ctx, 'c', BAR_X + BAR_W, 302, PAL.muted, { size: 19, align: 'center' });
    text(ctx, sci(st.v, 2) + ' m/s', BAR_X + (BAR_W * st.v) / CLIGHT + 16, 336, VC, { size: 21, weight: 600, align: 'left', bg: PAL.panel });

    /* the strip of magnetic field strengths, with the Earth's own on it */
    text(ctx, 'magnetic field strength (T), each step a factor of ten', SX, 372, PAL.ink, { size: 20, weight: 600, align: 'left' });
    line(ctx, SX, SY, SX + SW, SY, PAL.muted, 2);
    for (let e = LO; e <= HI; e++) {
      line(ctx, XB(e), SY - 9, XB(e), SY + 9, PAL.muted, 2);
      text(ctx, '10' + supOf(e), XB(e), SY + 30, PAL.muted, { size: 17, align: 'center' });
    }
    const xe = XB(Math.log10(B_EARTH));
    line(ctx, xe, SY - 12, xe, SY - 40, alpha(PAL.ink, 0.4), 2, [4, 6]);
    text(ctx, 'the Earth\u2019s field, 5 \u00D7 10\u207B\u2075 T', xe, SY - 58, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    const xb = XB(Math.min(HI, Math.max(LO, Math.log10(st.B))));
    dot(ctx, xb, SY, BC, true, 12);
    text(ctx, sci(st.B, 2) + ' T', xb, SY + 62, BC, { size: 20, weight: 600, align: 'center', bg: PAL.panel });

    const times = B_EARTH / st.B;
    const compare = times >= 1
      ? `about ${times >= 10 ? fmt(times, 0) : fmt(times, 1)} times weaker than the Earth\u2019s own field`
      : `about ${fmt(1 / times, 1)} times the Earth\u2019s own field`;
    topline(ctx, `An electric field of ${fmt(eS.v, 0)} V/m goes with a magnetic field of ${sci(st.B, 2)} T, ${compare}.`);
    readout(d.readout,
      `\\kBmag = \\frac{\\kEf}{\\kc / n} = \\frac{(${fmt(eS.v, 0)}\\ \\text{V/m})(${fmt(nS.v, 2)})}{3.00 \\times 10^{8}\\ \\text{m/s}} = ${sciTex(st.B, 2)}\\ \\text{T}`,
      `The figure opens on Example 24.1: a wave in a vacuum whose electric field reaches 1000 V/m carries a magnetic field of only 3.33 \u00D7 10\u207B\u2076 T, which is less than a tenth of the Earth\u2019s admittedly weak field, and that is the concrete form of the statement that the magnetic part of a wave is small beside the electric part. Raise the index of refraction and the wave slows to ${sci(st.v, 2)} m/s; the ratio of the two field strengths falls with the speed, so the same electric field now goes with a larger magnetic one.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
