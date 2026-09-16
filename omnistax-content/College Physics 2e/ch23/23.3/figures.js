/* Figures for section 23.3 Motional Emf. The page binds magnetic-field,
   magnetic-flux, voltage, current, velocity, force, position, time and power,
   which is what ch23/COLOR.md gives the page together with the two the plan
   argues for, the time on the axis of a graph that has a clock in it and the
   power the tether takes out of the shuttle's orbit. The field lines drawn in
   space wear the field's hue and the count of them that passes through the
   circuit wears the flux's, since the whole difficulty of the chapter is that
   the two are not the same quantity; no rail, rod, resistor or satellite is
   tinted, and the area, the length, the angle and the number of turns stay in
   ink. The two rail figures stand on one locked view (root rule 28.2): the
   rails lie flat like a table top and the field runs straight down through
   them, so that B, ℓ and v are seen to be mutually perpendicular. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, topline, label, hbracket, vbracket, axes, curve, pinned, angleArc, hover, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180;

/* ---------- the locked view the two rail figures share ----------
   One viewpoint, from above and to the right, fixed for both figures and never
   turned by the reader: the rails run away to the right along x, the rod lies
   across them along z, and the field runs straight down the y axis. 560 canvas
   units to the metre for both figures, which is the one scale every length in
   them is drawn on, so the swept area can be read off the drawing at any
   setting of the sliders. */
const U = 560;
const V3 = view({ yaw: 0.36, pitch: 0.60, dist: 3400, cx: 700, cy: 384 });
/* a point of the apparatus: x along the rails and z across them, both in metres,
   y in canvas units above the plane; the drawing is centred on x = 0.8 m and on
   the middle of the rails, so widening the rails does not walk the scene off */
const P3 = (x, z, y, L) => V3.P([(x - 0.8) * U, y || 0, (z - L / 2) * U]);
const seg = (ctx, a, b, color, w, dash) => line(ctx, a[0], a[1], b[0], b[1], color, w, dash);
const arr = (ctx, a, b, color, w) => arrow(ctx, a[0], a[1], b[0], b[1], color, w);
/* the lattice a uniform field is drawn on: the same spacing everywhere, so that
   widening the rails or advancing the rod really does put more lines through the
   circuit, which is what the flux counts */
const FX = [0.075, 0.325, 0.575, 0.825, 1.075, 1.325, 1.575];
const FZ = [-0.06, 0.09, 0.24, 0.39, 0.54];
const fieldWidth = (B) => Math.max(1.4, Math.min(5.5, 1.4 + 2.4 * B));

/* The apparatus on its locked view: the face the circuit encloses, shaded in the
   flux hue and pierced by the field lines that pass through it, the rails, the
   resistor and the rod. `xa` is where the resistor stands and `xr` the rod, both
   in metres; `ox` slides the field's own lattice, for the figure in which the
   field moves instead of the rod. */
function apparatus(ctx, o) {
  const { L, xa, xr, B, ox, hits } = o;
  const cB = C('magnetic-field'), cPhi = C('magnetic-flux');
  const p = (x, z, y) => P3(x, z, y, L);
  const lo = Math.min(xa, xr), hi = Math.max(xa, xr);
  /* the flux through the circuit: the face it encloses, deepening as the field
     strengthens, and one marker on every field line that crosses that face */
  if (hi - lo > 0.004 && B > 0.001) {
    const q = [p(lo, 0, 0), p(hi, 0, 0), p(hi, L, 0), p(lo, L, 0)];
    ctx.save(); ctx.beginPath(); q.forEach((c, i) => (i ? ctx.lineTo(c[0], c[1]) : ctx.moveTo(c[0], c[1]))); ctx.closePath();
    ctx.fillStyle = alpha(cPhi, 0.12 + 0.26 * Math.min(1, B / 2)); ctx.fill(); ctx.restore();
  }
  /* the rails, the resistor and the rod, every one of them in ink */
  const railA = o.rails[0], railB = o.rails[1];
  [0, L].forEach((z) => seg(ctx, p(railA, z, 0), p(railB, z, 0), PAL.ink, 4));
  /* the resistor: four teeth across the rails, the way a circuit diagram draws one */
  const rw = 0.05;
  const zig = [];
  for (let i = 0; i <= 8; i++) { const t = i / 8, side = i === 0 || i === 8 ? 0 : (i % 2 ? 1 : -1); zig.push(p(xa + side * rw, L * t, 0)); }
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
  zig.forEach((c, i) => (i ? ctx.lineTo(c[0], c[1]) : ctx.moveTo(c[0], c[1]))); ctx.stroke(); ctx.restore();
  /* the rod, drawn thicker than the rails because it is the source */
  seg(ctx, p(xr, -0.02, 0), p(xr, L + 0.02, 0), PAL.ink, 8);
  /* the field: one line straight down onto the plane at every point of the
     lattice, and a marker in the flux hue where a line pierces the circuit */
  const w = fieldWidth(B), pierced = [];
  if (B > 0.001) {
    FX.forEach((fx0) => {
      const fx = fx0 + (ox || 0);
      FZ.forEach((fz) => {
        const top = p(fx, fz, 170), foot = p(fx, fz, 10);
        arr(ctx, top, foot, cB, w);
        if (fx > lo && fx < hi && fz > 0 && fz < L) pierced.push(p(fx, fz, 0));
      });
    });
    pierced.forEach((c) => dot(ctx, c[0], c[1], cPhi, true, 7));
  }
  if (hits) {
    const mid = p((lo + hi) / 2, L / 2, 0), rod = p(xr, L / 2, 0), res = p(xa, L / 2, 0);
    hits.push({ x: rod[0], y: rod[1], r: 48, name: 'the rod, which slides along the rails and is the source of the emf' });
    hits.push({ x: res[0], y: res[1], r: 42, name: 'the resistor the rails are connected to, which could be a light bulb or a voltmeter' });
    hits.push({ x: mid[0], y: mid[1], r: 60, name: 'the area the rod, the rails and the resistor enclose, and the flux the field sends through it' });
  }
  return { pierced, p };
}

/* =====================================================================
   FIGURE 23.10: the rod on its rails. The rails lie flat and the field
   runs down through them, so the three perpendicular directions the
   result depends on are there to be seen rather than asserted. The rod
   slides the length of the rails once every loop and the flux grows as
   it goes, so the figure has a clock in it and takes the transport. The
   choice carries the book's two panels: the area swept and the polarity
   of the rod in (a), the induced current, the field it raises and the
   drag on the rod in (b). The graph below is the flux against time, and
   its slope is the emf. The figure opens on the 1.50 T, 30.0 cm and
   2.22 m/s of the section's fifth problem, so it reads 1.00 V on load.
===================================================================== */
(function () {
  const H = 900;
  const d = sim('sim-rod-rails', H);
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 2, step: 0.05, value: 1.5, unit: 'T', dec: 2, onInput: reset, aria: 'the strength of the magnetic field through the rails' });
  const lS = ctl(d.controls, { label: '\\ell', cls: '', min: 0.1, max: 0.6, step: 0.02, value: 0.3, unit: 'm', dec: 2, onInput: reset, aria: 'the distance between the rails' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.8, max: 3, step: 0.02, value: 2.22, unit: 'm/s', dec: 2, onInput: reset, aria: 'the speed of the rod along the rails' });
  /* a dropdown rather than a button row, since four controls in one row leave a
     segmented control too narrow for either state to be named (rule 26.1) */
  const showC = select(d.controls, {
    label: '\\text{the drawing shows}',
    options: [{ value: 'emf', label: 'the area it sweeps' }, { value: 'lenz', label: 'the current and the drag' }],
    value: 'emf', aria: 'whether the drawing carries the area swept and the polarity of the rod or the induced current, its field and the drag',
  });

  const X0 = 0.20, XEND = 1.40;                 /* where the rod starts and where it leaves the rails */
  const TRAV = XEND - X0;
  /* Fixed ranges, taken from the slider maxima and never rescaled: the slowest
     rod, 0.80 m/s, takes 1.50 s to cross, and the greatest flux the sliders can
     enclose, 2.00 T across 0.60 m rails at the far end, is 1.68 Wb. */
  const TMAX = 1.5, PHIMAX = 1.8;
  const cy = cycle(() => TRAV / vS.v, 1.2);
  function reset() { cy.reset(); }
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const B = bS.v, L = lS.v, v = vS.v, lenz = showC.value === 'lenz';
    const T = TRAV / v, tau = cy.now(), xr = X0 + v * tau, dx = xr - X0;
    const emf = B * L * v, phi = B * L * xr, phi0 = B * L * X0, dA = L * dx;
    const cB = C('magnetic-field'), cPhi = C('magnetic-flux'), cV = C('velocity'), cI = C('current'), cF = C('force'), cX = C('position'), cE = C('voltage'), cT = C('time');

    hits = [];
    ctx.save(); ctx.beginPath(); ctx.rect(0, 92, 1400, 480); ctx.clip();
    const { p } = apparatus(ctx, { L, xa: 0, xr, B, ox: 0, hits, rails: [-0.12, 1.62] });
    /* where the rod started, and how far it has come */
    if (dx > 0.005) {
      seg(ctx, p(X0, -0.02, 0), p(X0, L + 0.02, 0), alpha(PAL.ink, 0.45), 4, [10, 10]);
    }
    const yA = 26;                                 /* the arrows ride a little above the plane so the shading reads under them */
    const rodMid = p(xr, L / 2, yA), rodFront = p(xr, 0, yA), rodBack = p(xr, L, yA);
    /* the velocity of the rod, which both states carry */
    const vHead = p(Math.min(xr + 0.26, 1.58), L / 2, yA);
    if (v > 0) arr(ctx, rodMid, vHead, cV, 5);
    if (!lenz) {
      /* (a) the area swept, the distance travelled and the polarity of the rod */
      const eF = p(xr, -0.13, yA), eB = p(xr, L + 0.13, yA);
      text(ctx, '+', eF[0], eF[1] - 4, PAL.ink, { size: 30, weight: 700, align: 'center', bg: PAL.panel });
      text(ctx, '−', eB[0], eB[1] - 4, PAL.ink, { size: 30, weight: 700, align: 'center', bg: PAL.panel });
    } else {
      /* (b) the induced current round the circuit, the field it raises inside the
         loop and the drag the field lays on the rod, all of which vanish with the
         emf; the current runs the way Lenz's law asks, so that the field it makes
         inside the circuit points back up against a flux that is growing downward */
      if (emf > 1e-6 && dx > 0.02) {
        const cur = (x1, z1, x2, z2) => arr(ctx, p(x1, z1, yA), p(x2, z2, yA), cI, 5);
        cur(xr, L * 0.82, xr, L * 0.18);                       /* along the rod, toward its positive end */
        cur(xr - 0.04, 0, X0 + (xr - X0) * 0.30, 0);            /* back along the near rail */
        cur(0, L * 0.2, 0, L * 0.8);                            /* up through the resistor */
        cur(X0 * 0.6, L, xr - 0.06, L);                         /* out along the far rail */
        /* the field the induced current raises inside the circuit, out of the plane */
        [0.35, 0.65].forEach((k) => {
          const b0 = p(X0 + (xr - X0) * k, L / 2, 6), b1 = p(X0 + (xr - X0) * k, L / 2, 118);
          arr(ctx, b0, b1, cB, 4.5);
        });
        /* the drag: the field pushes the current-carrying rod back the way it came */
        const fHead = p(Math.max(xr - 0.24, 0.06), L / 2, yA);
        arr(ctx, p(xr, L / 2, yA), fHead, cF, 5);
      }
    }
    ctx.restore();

    /* the names: five in either state, each beside its own thing (rule 26.7) */
    const labs = [];
    const fieldAt = P3(1.575, -0.075, 170, L);
    labs.push(['B = ' + fmt(B, 2) + ' T', fieldAt[0], fieldAt[1], 'right', cB]);
    const resAt = p(0, L / 2, 0);
    labs.push(['R', resAt[0], resAt[1] - 10, 'above', PAL.ink]);
    if (v > 0) labs.push(['v = ' + fmt(v, 2) + ' m/s', vHead[0], vHead[1], 'above', cV]);
    if (!lenz && dA > 0.004) {
      const aAt = p((X0 + xr) / 2, L / 2, 72);
      labs.push(['ΔA = ℓΔx = ' + fmt(dA, 2) + ' m²', aAt[0], aAt[1], 'above', PAL.ink]);
    }
    if (lenz && emf > 1e-6 && dx > 0.02) {
      const iAt = p((X0 * 0.6 + xr) / 2, L, yA), bAt = p(X0 + (xr - X0) * 0.5, L / 2, 118), fAt = p(Math.max(xr - 0.24, 0.06), L / 2, yA);
      labs.push(['the induced current', iAt[0], iAt[1], 'below', cI, 64]);
      labs.push(['the induced field', bAt[0], bAt[1], 'above', cB, 24]);
      labs.push(['the drag on the rod', fAt[0], fAt[1], 'above', cF, 78]);
    }
    if (!lenz && dx > 0.01) {
      const a1 = p(X0, L / 2, 0), a2 = p(xr, L / 2, 0);
      hbracket(ctx, a1[0], a2[0], 548, cX, 'Δx = ' + fmt(dx, 2) + ' m', { side: 'below', H });
    }
    const lAt1 = p(0.02, 0, 0), lAt2 = p(0.02, L, 0);
    vbracket(ctx, Math.min(lAt1[0], lAt2[0]) - 34, lAt1[1], lAt2[1], PAL.ink, 'ℓ = ' + fmt(L, 2) + ' m', -1, { side: 'left', H });
    labs.forEach(([s, x, y, side, col, gap]) => label(ctx, s, x, y, { side, size: 21, color: col, gap: gap || 20, H }));

    /* the graph: the flux against time, whose slope is the emf */
    const box = { l: 230, r: 1230, t: 622, b: 828 };
    const { X, Y } = axes(ctx, box, [0, TMAX], [0, PHIMAX], { xl: 'time t (s)', xc: cT, yl: 'flux Φ (Wb)', yc: cPhi, nx: 5, ny: 3, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 1) });
    if (B > 0.001) {
      curve(ctx, (t) => phi0 + B * L * v * t, 0, T, X, Y, alpha(cPhi, 0.4), 3, 2);
      curve(ctx, (t) => phi0 + B * L * v * t, 0, Math.max(tau, 0), X, Y, cPhi, 5, 2);
      pinned(ctx, box, X, Y, tau, phi, cPhi, fmt(phi, 2) + ' Wb');
      line(ctx, X(tau), Y(phi), X(tau), box.b, alpha(cPhi, 0.4), 2, [4, 8]);
    }
    text(ctx, 'the slope of this line is the emf, ' + fmt(emf, 2) + ' V', box.r - 12, box.t + 22, cE, { size: 17, align: 'right', bg: PAL.panel });

    topline(ctx, tau < 1e-9
      ? 'The rod stands still on its rails, and although the field through the circuit is ' + fmt(B, 2) + ' T the flux is not changing, so there is no emf.'
      : 'The rod has moved ' + fmt(dx, 2) + ' m in ' + fmt(tau, 2) + ' s, sweeping ' + fmt(dA, 2) + ' m² of new area, so the flux through the circuit has grown by ' + fmt(B * dA, 2) + ' Wb.');
    readout(d.readout,
      `\\kemf = \\kBmag\\ell\\kv = (${fmt(B, 2)}\\ \\text{T})(${fmt(L, 3)}\\ \\text{m})(${fmt(v, 2)}\\ \\text{m/s}) = ${fmt(emf, 2)}\\ \\text{V}`,
      tau < 1e-9
        ? 'The rod has not started yet, so the flux through the circuit stands at ' + fmt(phi0, 2) + ' Wb and nothing is induced.'
        : 'In the ' + fmt(tau, 2) + ' s since it started the flux has grown from ' + fmt(phi0, 2) + ' Wb to ' + fmt(phi, 2) + ' Wb, and ' + fmt(B * dA, 2) + ' Wb divided by ' + fmt(tau, 2) + ' s is the ' + fmt(emf, 2) + ' V the rod develops.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (TRAV / vS.v) / 4.8), draw });
})();

/* =====================================================================
   SIM: what has to be moving. The same rails and the same field, with a
   choice of which part carries the speed. The rod on stationary rails and
   the rails carried the other way under a stationary rod give the same
   emf, because the circuit encloses new area at the same rate in both;
   the whole apparatus carried together gives none at all. Moving, since
   the figure is a comparison of three motions and the third one is the
   exception that makes the point. The graph below holds all three.
===================================================================== */
(function () {
  const H = 820;
  const d = sim('sim-relative-motion', H);
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.5, max: 3, step: 0.05, value: 2, unit: 'm/s', dec: 2, onInput: reset, aria: 'the speed of whichever part of the apparatus is moving' });
  const whatC = choice(d.controls, {
    label: '\\text{what moves}',
    options: [{ value: 'rod', label: 'the rod' }, { value: 'field', label: 'the rails and the field' }, { value: 'both', label: 'both together' }],
    value: 'rod', aria: 'which part of the apparatus carries the speed',
  });

  const B = 1.5, L = 0.3, GAP = 0.30, TRAV = 0.85;      /* the field and the rails are fixed here; only the motion is in question */
  const TMAX = 1.8, PHIMAX = 0.6;                       /* 0.85 m at 0.50 m/s takes 1.70 s, and the widest loop holds 0.52 Wb */
  const cy = cycle(() => TRAV / vS.v, 1.2);
  function reset() { cy.reset(); }
  let hits = [];
  hover(d.stage, () => hits);

  /* where the resistor and the rod stand at the model time tau, and how fast
     they are separating, which is the only speed the emf knows about */
  function state(tau) {
    const v = vS.v, s = v * tau, w = whatC.value;
    if (w === 'rod') return { xa: 0.25, xr: 0.55 + s, ox: 0, vRod: v, vRail: 0 };
    if (w === 'field') return { xa: 0.90 - s, xr: 1.20, ox: -s, vRod: 0, vRail: v };
    return { xa: 0.25 + s, xr: 0.55 + s, ox: 0, vRod: v, vRail: 0 };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v = vS.v, w = whatC.value, T = TRAV / v, tau = cy.now(), st = state(tau);
    const rel = w === 'both' ? 0 : v, emf = B * L * rel, width = st.xr - st.xa, phi = B * L * width;
    const cV = C('velocity'), cPhi = C('magnetic-flux'), cE = C('voltage'), cT = C('time');
    hits = [];

    ctx.save(); ctx.beginPath(); ctx.rect(0, 92, 1400, 420); ctx.clip();
    const { p } = apparatus(ctx, { L, xa: st.xa, xr: st.xr, B, ox: st.ox, hits, rails: [st.xa - 0.35, st.xa + 1.28] });
    const yA = 26;
    /* the velocity of whatever is moving: one arrow on the rod, one on the rails */
    if (st.vRod > 0) {
      const a = p(st.xr, L / 2, yA), b = p(st.xr + 0.26, L / 2, yA);
      arr(ctx, a, b, cV, 5);
      label(ctx, 'the rod, ' + fmt(st.vRod, 2) + ' m/s', b[0], b[1], { side: 'above', size: 21, color: cV, H });
    }
    if (st.vRail > 0) {
      const a = p(st.xa - 0.10, L + 0.12, yA), b = p(st.xa - 0.36, L + 0.12, yA);
      arr(ctx, a, b, cV, 5);
      label(ctx, 'the rails and the field, ' + fmt(st.vRail, 2) + ' m/s', b[0], b[1], { side: 'above', size: 21, color: cV, H });
    }
    if (w === 'both') {
      const a = p(st.xa - 0.10, L + 0.12, yA), b = p(st.xa + 0.16, L + 0.12, yA);
      arr(ctx, a, b, cV, 5);
      label(ctx, 'the rails, ' + fmt(v, 2) + ' m/s', b[0], b[1], { side: 'above', size: 21, color: cV, H });
    }
    /* the width of the loop, which is what the flux follows */
    ctx.restore();
    const g1 = p(st.xa, L / 2, 0), g2 = p(st.xr, L / 2, 0);
    hbracket(ctx, g1[0], g2[0], 512, PAL.ink, fmt(width, 2) + ' m of rail enclosed', { side: 'below', H });

    const fieldAt = P3(1.575 + st.ox, -0.075, 170, L);
    label(ctx, 'B = ' + fmt(B, 2) + ' T', fieldAt[0], fieldAt[1], { side: 'right', size: 21, color: C('magnetic-field'), H });

    const box = { l: 230, r: 1200, t: 606, b: 748 };
    const { X, Y } = axes(ctx, box, [0, TMAX], [0, PHIMAX], { xl: 'time t (s)', xc: cT, yl: 'flux Φ (Wb)', yc: cPhi, nx: 6, ny: 3, fx: (u) => fmt(u, 1), fy: (u) => fmt(u, 1) });
    const phi0 = B * L * GAP;
    curve(ctx, (t) => phi0 + B * L * rel * t, 0, T, X, Y, alpha(cPhi, 0.4), 3, 2);
    curve(ctx, (t) => phi0 + B * L * rel * t, 0, Math.max(tau, 0), X, Y, cPhi, 5, 2);
    pinned(ctx, box, X, Y, tau, phi, cPhi, fmt(phi, 2) + ' Wb');
    text(ctx, w === 'both' ? 'the flux does not change, so no emf appears' : 'the slope of this line is the emf, ' + fmt(emf, 2) + ' V',
      box.r - 12, box.t + 22, cE, { size: 17, align: 'right', bg: PAL.panel });

    topline(ctx, w === 'both'
      ? 'The rod and the rails are carried along together at ' + fmt(v, 2) + ' m/s, so the circuit encloses the same ' + fmt(GAP, 2) + ' m of rail throughout and no emf appears.'
      : 'The rod and the resistor are separating at ' + fmt(rel, 2) + ' m/s, so the circuit encloses ' + fmt(width, 2) + ' m of rail and the emf is ' + fmt(emf, 2) + ' V.');
    readout(d.readout,
      `\\kemf = \\kBmag\\ell\\kv = (${fmt(B, 2)}\\ \\text{T})(${fmt(L, 3)}\\ \\text{m})(${fmt(rel, 2)}\\ \\text{m/s}) = ${fmt(emf, 2)}\\ \\text{V}`,
      w === 'rod' ? 'The rails and the field stand still while the rod is pushed along them, which is the arrangement Figure 23.10 draws.'
        : w === 'field' ? 'The rod stands still now and the rails and the field are carried the other way, and because the rod and the field are separating at the same ' + fmt(rel, 2) + ' m/s as before, the emf is the same.'
          : 'Everything is moving, but nothing is moving relative to anything else, so the area the circuit encloses never changes and the speed in the expression is zero.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (TRAV / vS.v) / 4.8), draw });
})();

/* =====================================================================
   FIGURE 23.11: the Tethered Satellite. The tether, the shuttle and the
   return path through the ionosphere are drawn flat, since the whole
   arrangement is a length, a velocity and a field in one plane, and the
   angle between the velocity and the field, which the section states but
   does not draw, is carried in a small view from along the tether. Still:
   an orbiting tether develops a steady emf and nothing here has a clock,
   so there is no cycle and no transport. One fixed scale, 15 canvas units
   to the kilometre, so that the 20.0 km of the worked example stands 300
   units tall and the couple of hundred metres the first flight managed is
   the stub it really was. The figure opens on the example and reads
   7.80 kV.
===================================================================== */
(function () {
  const H = 700;
  const d = sim('sim-tether', H);
  const lS = ctl(d.controls, { label: '\\ell', cls: '', min: 0.25, max: 20, step: 0.25, value: 20, unit: 'km', dec: 2, aria: 'the length of the tether let out from the shuttle' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 8, step: 0.05, value: 7.8, unit: 'km/s', dec: 2, aria: 'the orbital speed of the shuttle' });
  const thS = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 90, step: 1, value: 90, unit: '°', dec: 0, aria: 'the angle between the velocity of the shuttle and the Earth’s magnetic field' });

  const BE = 5.0e-5;                 /* the Earth's field, the one number the section fixes */
  const I0 = 10.0;                   /* the current the experiment expected to draw, which the section's last problem uses */
  const SC = 15;                     /* canvas units to the kilometre of tether, fixed */
  const XS = 430, YS = 460;          /* where the shuttle flies */
  let hits = [];
  hover(d.stage, () => hits);

  /* the shuttle, nose to the right, its wings and fin about 110 by 70 at s = 1 */
  function shuttle(ctx, x, y, s, color) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = color;
    ctx.beginPath(); ctx.moveTo(54, 0); ctx.lineTo(18, -13); ctx.lineTo(-42, -14); ctx.lineTo(-54, -4); ctx.lineTo(-54, 9); ctx.lineTo(-8, 13); ctx.lineTo(34, 6); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-4, 8); ctx.lineTo(-46, 32); ctx.lineTo(-16, 32); ctx.lineTo(8, 9); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-28, -13); ctx.lineTo(-46, -40); ctx.lineTo(-54, -40); ctx.lineTo(-50, -13); ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const l = lS.v * 1000, v = vS.v * 1000, th = thS.v, sn = th === 0 ? 0 : Math.sin(th * RAD);
    const emf = BE * l * v * sn, drag = I0 * l * BE * sn, power = emf * I0;
    const cV = C('velocity'), cB = C('magnetic-field'), cI = C('current'), cF = C('force'), cE = C('voltage');
    const yTop = YS - lS.v * SC, mid = (YS + yTop) / 2;
    hits = [];

    /* the Earth below and the ionosphere over it, which is the return path */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(700, 2300, 1720, -Math.PI / 2 - 0.42, -Math.PI / 2 + 0.42); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([12, 10]); ctx.beginPath(); ctx.arc(700, 2300, 1790, -Math.PI / 2 - 0.40, -Math.PI / 2 + 0.40); ctx.stroke(); ctx.restore();
    text(ctx, 'the Earth', 700, 654, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'the ionosphere, which conducts and carries the current back', 700, 574, PAL.muted, { size: 17, align: 'center' });

    /* the tether, the shuttle at its foot and the satellite at its head */
    line(ctx, XS, YS - 10, XS, yTop, PAL.ink, 4);
    shuttle(ctx, XS, YS + 14, 1, PAL.ink);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(XS, yTop - 15, 15, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    [-1, 1].forEach((s) => { ctx.beginPath(); ctx.rect(XS + s * 44 - 14, yTop - 24, 28, 17); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(XS + s * 15, yTop - 15); ctx.lineTo(XS + s * 30, yTop - 15); ctx.stroke(); });
    ctx.restore();
    label(ctx, 'the satellite', XS, yTop - 38, { side: 'above', size: 20, color: PAL.ink, H });
    label(ctx, 'the shuttle', XS - 66, YS + 10, { side: 'left', size: 20, color: PAL.ink, H });
    vbracket(ctx, XS + 66, yTop, YS, PAL.ink, 'ℓ = ' + fmt(lS.v, 2) + ' km', 1, { side: 'right', H });

    /* the circuit: up the tether, out at the top and back through the ionosphere */
    if (emf > 1e-9) {
      arrow(ctx, XS + 18, YS - 30, XS + 18, yTop + 26, cI, 4.5);
      ctx.save(); ctx.strokeStyle = cI; ctx.lineWidth = 3; ctx.setLineDash([11, 9]); ctx.beginPath();
      ctx.moveTo(XS + 18, yTop + 14); ctx.lineTo(880, yTop + 14); ctx.lineTo(880, 544); ctx.lineTo(XS + 6, 544); ctx.lineTo(XS + 6, YS + 34); ctx.stroke(); ctx.restore();
      arrow(ctx, 700, 544, 620, 544, cI, 4);
      label(ctx, 'I = 10.0 A', 880, (yTop + 14 + 544) / 2, { side: 'left', size: 21, color: cI, H });
      /* the drag on the current, which is the work that pays for the electrical energy;
         it is held clear of the shuttle so that a short tether's labels do not pile up */
      const yF = Math.min(YS - 46, mid);
      arrow(ctx, XS - 10, yF, XS - 150, yF, cF, 5);
      label(ctx, 'F = ' + fmt(drag, 1) + ' N', XS - 150, yF, { side: 'above', size: 21, color: cF, H });
    }
    /* the velocity, along the orbit */
    arrow(ctx, XS + 24, YS + 62, XS + 224, YS + 62, cV, 5);
    label(ctx, 'v = ' + fmt(vS.v, 2) + ' km/s', XS + 224, YS + 62, { side: 'right', size: 21, color: cV, H });

    /* the view from along the tether: the angle between the velocity and the
       field is the whole of the sine in the result, and no flat drawing of the
       orbit can carry it, since the field there stands across the page */
    const bx = { l: 960, r: 1340, t: 170, b: 470 }, cx0 = 1046, cy0 = 380;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(bx.l, bx.t, bx.r - bx.l, bx.b - bx.t); ctx.restore();
    text(ctx, 'seen from along the tether', (bx.l + bx.r) / 2, bx.t + 24, PAL.muted, { size: 17, align: 'center' });
    arrow(ctx, cx0, cy0, cx0 + 178, cy0, cV, 5);
    text(ctx, 'v', cx0 + 190, cy0 + 2, cV, { size: 24, weight: 600 });
    const bl = 162, bxh = cx0 + bl * Math.cos(th * RAD), byh = cy0 - bl * Math.sin(th * RAD);
    arrow(ctx, cx0, cy0, bxh, byh, cB, 5);
    text(ctx, 'B', bxh + (th > 60 ? 14 : 8), byh - (th > 60 ? 8 : 16), cB, { size: 24, weight: 600 });
    if (th > 3) angleArc(ctx, { x: cx0, y: cy0 }, 66, 0, th * RAD, 'θ = ' + fmt(th, 0) + '°');
    dot(ctx, cx0, cy0, PAL.ink, false, 9);
    text(ctx, 'the tether, end on', cx0, cy0 + 56, PAL.muted, { size: 17, align: 'center' });

    hits.push({ x: XS, y: mid, r: 56, name: 'the conducting tether, ' + fmt(lS.v, 2) + ' km of it, moving across the Earth’s field' });
    hits.push({ x: XS, y: YS + 14, r: 52, name: 'the space shuttle, at the lower end of the tether' });
    hits.push({ x: XS, y: yTop - 15, r: 44, name: 'the Tethered Satellite, at the upper end' });

    topline(ctx, emf < 1e-9
      ? 'The tether is moving along the Earth’s field rather than across it, so no emf appears between its ends however long it is.'
      : 'A ' + fmt(lS.v, 2) + ' km tether moving at ' + fmt(vS.v, 2) + ' km/s across the Earth’s 5.00 × 10⁻⁵ T field develops ' + fmt(emf / 1000, 2) + ' kV between its ends.');
    readout(d.readout,
      `\\kemf = \\kBmag\\ell\\kv\\sin\\theta = (5.00 \\times 10^{-5}\\ \\text{T})(${fmt(l, 0)}\\ \\text{m})(${fmt(v, 0)}\\ \\text{m/s})\\sin ${fmt(th, 0)}^\\circ = ${fmt(emf, 0)}\\ \\text{V}`,
      emf < 1e-9
        ? 'With the velocity along the field there is nothing to drive a current, and the shuttle gives up none of its orbital energy to the tether.'
        : 'With the ' + fmt(I0, 1) + ' A the experiment expected to draw, the magnetic force on the tether is ' + fmt(drag, 1) + ' N against the motion, and the power that force takes out of the shuttle’s orbit is ' + fmt(power / 1000, 1) + ' kW, which is the electrical power the tether delivers.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
