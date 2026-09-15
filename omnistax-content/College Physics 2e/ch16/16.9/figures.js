/* Figures for section 16.9 Waves. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, scale, curve, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const sgn = (v) => (v < 0 ? '−' : '+');

/* =====================================================================
   SIM 1: the idealized ocean wave of Figure 16.28. The profile travels
   to the right at v_w = λ/T, the gull bobs up and down without moving
   right, and one marked particle of water circles its own place.
   Endless: a wave has a clock in it.
===================================================================== */
(function () {
  const d = sim('sim-ocean-wave', 560);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 2, max: 14, step: 0.5, value: 10, unit: 'm', dec: 1, onInput: reset, aria: 'wavelength' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 1, max: 10, step: 0.25, value: 5, unit: 's', dec: 2, onInput: reset, aria: 'period' });
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.2, max: 1.5, step: 0.05, value: 0.8, unit: 'm', dec: 2, onInput: reset, aria: 'amplitude' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  /* The window is a fixed 30 m of sea and a fixed ±1.5 m of surface, the amplitude
     slider's own maximum, so neither scale ever moves under the reader. Thirty metres
     is twice the longest wavelength the slider reaches and a little over, so two
     crests are always in view and the wavelength can always be bracketed. */
  const WM = 30, L0 = 80, PX = 42, y0 = 350, SCV = 70, XG = 9, XP = 3.5;
  const Xs = (m) => L0 + m * PX, Ys = (v) => y0 - v * SCV;
  /* a gull sitting on the water at (x, y), facing right: a boat-shaped body with a folded wing
     laid along its back, a tail raised behind, a neck up to a round head and a beak; about 120
     wide and 60 tall, so it reads as a bird before its label is read */
  function gull(ctx, x, y) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x - 44, y - 6); ctx.quadraticCurveTo(x - 40, y + 14, x - 12, y + 16); ctx.lineTo(x + 24, y + 16);
    ctx.quadraticCurveTo(x + 44, y + 12, x + 40, y - 4); ctx.quadraticCurveTo(x + 6, y - 16, x - 44, y - 6); ctx.closePath(); ctx.fill();   /* the body */
    ctx.beginPath(); ctx.moveTo(x - 40, y - 4); ctx.lineTo(x - 66, y - 20); ctx.lineTo(x - 42, y + 4); ctx.closePath(); ctx.fill();          /* the tail */
    ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.moveTo(x - 30, y - 6); ctx.quadraticCurveTo(x - 4, y - 18, x + 28, y - 6);
    ctx.quadraticCurveTo(x, y + 2, x - 30, y - 6); ctx.closePath(); ctx.fill(); ctx.stroke();                                            /* the folded wing */
    ctx.fillStyle = PAL.ink; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(x + 26, y - 6); ctx.quadraticCurveTo(x + 34, y - 18, x + 36, y - 30); ctx.stroke();   /* the neck */
    ctx.beginPath(); ctx.arc(x + 38, y - 36, 11, 0, TAU); ctx.fill();                                                                  /* the head */
    ctx.beginPath(); ctx.moveTo(x + 47, y - 40); ctx.lineTo(x + 66, y - 34); ctx.lineTo(x + 47, y - 30); ctx.closePath(); ctx.fill();    /* the beak */
    ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(x + 41, y - 39, 2.5, 0, TAU); ctx.fill();                                       /* the eye */
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T.v / 8 : cy.now();
    const lab = labeller(ctx, 560); lab.block(0, 0, 1400, 92);
    const vw = lam.v / T.v, f = 1 / T.v;
    const u = (m) => X.v * Math.cos(TAU * (m / lam.v - t / T.v));
    /* the water: the medium is ink and its surface is an ink line; the quantities
       the section measures on it carry the colours */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(Xs(0), Ys(u(0)));
    for (let i = 1; i <= 240; i++) { const m = (WM * i) / 240; ctx.lineTo(Xs(m), Ys(u(m))); }
    ctx.lineTo(Xs(WM), 470); ctx.lineTo(Xs(0), 470); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, Xs(0), y0, Xs(WM), y0, alpha(PAL.ink, 0.35), 2, [10, 10]);
    curve(ctx, u, 0, WM, Xs, Ys, PAL.ink, 5, 240);
    /* the wavelength, bracketed between adjacent crests, and the total 2X between
       the top of a crest and the bottom of a trough, as the book brackets them */
    const base = lam.v * (t / T.v), crests = [];
    for (let n = -2; n < 40; n++) { const m = base + n * lam.v; if (m >= 0.6 && m <= WM - 0.6) crests.push(m); }
    const yb = Ys(X.v) - 40;
    if (crests.length > 1) {
      hbracket(ctx, Xs(crests[0]), Xs(crests[1]), yb, C('position'), 'λ = ' + fmt(lam.v, 1) + ' m');
      lab.block(Xs(crests[0]) - 130, yb - 34, Xs(crests[1]) + 130, yb + 14);
    }
    if (crests.length) {
      const mc = crests[crests.length - 1];
      vbracket(ctx, Xs(mc), Ys(X.v), Ys(-X.v), C('position'), null, 1);
      lab.add('2X = ' + fmt(2 * X.v, 2) + ' m', Xs(mc), y0, 1, 0, C('position'), 20);
    }
    /* the gull: it rides the surface and moves up and down only */
    const gy = Ys(u(XG)) - 12, vg = X.v * (TAU / T.v) * Math.sin(TAU * (XG / lam.v - t / T.v)), vmax = TAU * X.v / T.v;
    gull(ctx, Xs(XG), gy);
    if (Math.abs(vg) > 0.04 * vmax) {
      const al = 34 + 70 * Math.abs(vg) / vmax, s = vg > 0 ? -1 : 1;
      arrow(ctx, Xs(XG) - 56, gy, Xs(XG) - 56, gy + s * al, C('velocity'), 5);
      lab.add(sgn(vg) + fmt(Math.abs(vg), 2) + ' m/s', Xs(XG) - 56, gy + s * al, -0.6, s, C('velocity'), 20);
    }
    lab.add('the gull bobs up and down', Xs(XG) + 50, gy - 40, 0.8, -1, PAL.ink, 20);
    /* one marked particle of water, circling its own place */
    const r = X.v * SCV, ph = TAU * (XP / lam.v - t / T.v), px = Xs(XP) - r * Math.sin(ph), py = y0 - r * Math.cos(ph);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.beginPath(); ctx.arc(Xs(XP), y0, r, 0, TAU); ctx.stroke(); ctx.restore();
    dot(ctx, px, py, C('position'), true, 9);
    lab.add('a particle of water stays in place', px, py, 0.9, 1, C('position'), 20);
    /* the wave velocity */
    arrow(ctx, Xs(17.5), 176, Xs(21), 176, C('velocity'), 5);
    lab.add('v_w = ' + fmt(vw, 2) + ' m/s', Xs(21), 176, 0, -1, C('velocity'), 22);
    scale(ctx, Xs, 0, WM, 2, 486, '', 2);
    text(ctx, 'distance along the surface (m)', 700, 544, PAL.ink, { size: 20, weight: 600, align: 'center' });
    lab.flush();
    topline(ctx, 'The crests are ' + fmt(lam.v, 1) + ' m apart and pass the gull every ' + fmt(T.v, 2) + ' s, so the wave travels at ' + fmt(vw, 2) + ' m/s while the gull only moves up and down');
    readout(d.readout, `\\kvw = \\frac{\\klam}{\\kT} = \\frac{${fmt(lam.v, 1)}\\ \\text{m}}{${fmt(T.v, 2)}\\ \\text{s}} = ${fmt(vw, 2)}\\ \\text{m/s}`,
      'The frequency is f = 1/T = ' + fmt(f, 3) + ' Hz, so v_w = fλ gives the same ' + fmt(vw, 2) + ' m/s. What travels to the right is the disturbance, not the water: the gull and the marked particle both stay where they are.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();

/* =====================================================================
   SIM 2: one long cord shaken two ways, Figure 16.29 folded with 16.30.
   A choice swaps the state (rule 26.1): across the cord for a transverse
   wave, along it for a longitudinal one. Endless.
===================================================================== */
(function () {
  const d = sim('sim-wave-types', 650);
  const kind = choice(d.controls, { label: '', options: [{ value: 'transverse', label: 'Transverse' }, { value: 'longitudinal', label: 'Longitudinal' }], value: 'transverse', aria: 'Kind of wave', onInput: reset });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'm', dec: 1, onInput: reset, aria: 'wavelength' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'time', min: 0.5, max: 3, step: 0.1, value: 1, unit: 's', dec: 2, onInput: reset, aria: 'period' });
  const X = ctl(d.controls, { label: '\\kX', cls: 'position', min: 0.05, max: 0.4, step: 0.01, value: 0.25, unit: 'm', dec: 2, onInput: reset, aria: 'amplitude' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  /* A fixed 8 m of cord and a fixed ±0.4 m of disturbance, the amplitude slider's own
     maximum. The disturbance, across the cord or along it, is drawn at 80 units to the
     metre against the cord's own 142, so that a wave half a metre long is still a
     readable shape and the hand stays within the arm's reach at every setting. */
  const WM = 8, L0 = 205, PX = 141.875, y0 = 410, SCV = 80, NC = 79, MM = 2;
  const Xs = (m) => L0 + m * PX;
  function draw() {
    const { ctx } = begin(d.c);
    const t = REDUCED ? T.v / 8 : cy.now();
    const lab = labeller(ctx, 650); lab.block(0, 0, 1400, 92);
    const tr = kind.value === 'transverse', vw = lam.v / T.v;
    const u = (m) => X.v * Math.cos(TAU * (m / lam.v - t / T.v));
    const u0 = u(0), hand = { x: tr ? L0 : L0 + u0 * SCV, y: tr ? y0 - u0 * SCV : y0 };
    /* a filled person holds the near end of the cord: the near hand goes to the cord's end in
       the silhouette's own frame, the far arm hangs at the side */
    const PS = 1.8, fx = 165, fy = 540;
    F.silhouette(ctx, { x: fx, y: fy, s: PS, pose: 'stand', color: PAL.ink, hands: [{ x: (hand.x - fx) / PS, y: (hand.y - fy) / PS }, { x: -6, y: -76 }] });
    /* the cord: the medium is ink, and the quantities measured on it carry the colours */
    if (tr) {
      curve(ctx, u, 0, WM, Xs, (v) => y0 - v * SCV, PAL.ink, 5, 300);
      line(ctx, L0, y0, Xs(WM), y0, alpha(PAL.ink, 0.3), 2, [10, 10]);
    } else {
      for (let i = 0; i <= NC; i++) {
        const m = (WM * i) / NC, mark = i === Math.round((NC * MM) / WM);
        const x = Xs(m) + u(m) * SCV;
        line(ctx, x, y0 - 40, x, y0 + 40, mark ? C('position') : PAL.ink, mark ? 5 : 2.5);
      }
      line(ctx, Xs(MM), y0 - 58, Xs(MM), y0 + 58, alpha(PAL.ink, 0.35), 2, [6, 8]);
    }
    /* the wavelength: between adjacent crests, or between adjacent compressions */
    const base = lam.v * (t / T.v + (tr ? 0 : 0.25)), pts = [];
    for (let n = -2; n < 40; n++) { const m = base + n * lam.v; if (m >= 0.35 && m <= WM - 0.35) pts.push(m); }
    if (pts.length > 1) {
      const yb = y0 - (tr ? X.v * SCV + 46 : 124);
      hbracket(ctx, Xs(pts[0]), Xs(pts[1]), yb, C('position'), 'λ = ' + fmt(lam.v, 1) + ' m');
      lab.block(Xs(pts[0]) - 130, yb - 34, Xs(pts[1]) + 130, yb + 14);
    }
    /* the marked place on the cord and how far it has been moved from it */
    const um = u(MM);
    if (tr) {
      dot(ctx, Xs(MM), y0 - um * SCV, C('position'), true, 9);
      if (Math.abs(um) > 0.02) { vbracket(ctx, Xs(MM) + 34, y0, y0 - um * SCV, C('position'), null, 1); lab.add('x = ' + sgn(um) + fmt(Math.abs(um), 2) + ' m', Xs(MM) + 34, y0 - (um * SCV) / 2, 1, 0, C('position'), 20); }
    } else if (Math.abs(um) > 0.02) {
      hbracket(ctx, Xs(MM), Xs(MM) + um * SCV, y0 + 96, C('position'), 'x = ' + sgn(um) + fmt(Math.abs(um), 2) + ' m');
    }
    /* the two directions, which are the whole lesson: the disturbance at the hand,
       and the propagation along the cord */
    const vh = X.v * (TAU / T.v) * Math.sin(TAU * (0 / lam.v - t / T.v)), vmax = TAU * X.v / T.v;
    if (Math.abs(vh) > 0.04 * vmax) {
      const al = 40 + 80 * Math.abs(vh) / vmax, s = vh > 0 ? -1 : 1;
      if (tr) { arrow(ctx, hand.x + 40, hand.y, hand.x + 40, hand.y + s * al, C('velocity'), 5); lab.add('the hand moves across the cord', hand.x + 40, hand.y + s * al, 1, s * 0.4, C('velocity'), 20); }
      else { const ax = hand.x + 150, ay = hand.y - 62; arrow(ctx, ax, ay, ax - s * al, ay, C('velocity'), 5); lab.add('the hand pushes and pulls along the cord', ax, ay, 0.4, -1, C('velocity'), 20); }
    }
    arrow(ctx, Xs(6.2), 176, Xs(7.6), 176, C('velocity'), 5);
    lab.add('v_w = ' + fmt(vw, 2) + ' m/s', Xs(7.6), 176, 0, -1, C('velocity'), 22);
    if (!tr) lab.add('one marked coil', Xs(MM) + um * SCV, y0 - 40, 0, -1, C('position'), 20);
    scale(ctx, Xs, 0, WM, 1, 562, '', 2);
    text(ctx, 'distance along the cord (m)', 700, 620, PAL.ink, { size: 20, weight: 600, align: 'center' });
    lab.flush();
    topline(ctx, tr
      ? 'The hand moves up and down across the cord while the wave travels along it to the right at ' + fmt(vw, 2) + ' m/s: the disturbance is perpendicular to the direction of propagation'
      : 'The hand pushes and pulls along the cord while the wave travels to the right at ' + fmt(vw, 2) + ' m/s: the disturbance is parallel to the direction of propagation');
    readout(d.readout, `\\kvw = \\frac{\\klam}{\\kT} = \\frac{${fmt(lam.v, 1)}\\ \\text{m}}{${fmt(T.v, 2)}\\ \\text{s}} = ${fmt(vw, 2)}\\ \\text{m/s}`,
      (tr ? 'The disturbance is perpendicular to the direction of propagation, which is what makes this a transverse, or shear, wave. '
          : 'The disturbance is parallel to the direction of propagation, which is what makes this a longitudinal, or compressional, wave. ')
      + 'The size of the disturbance is its amplitude X = ' + fmt(X.v, 2) + ' m, and it is completely independent of the speed of propagation.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T.v / 5), draw });
})();
};
