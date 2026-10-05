/* Figures for section 33.2 The Four Basic Forces.
   The page binds position, time, energy and velocity. Planck's constant and the
   relative strengths are ink. The two positive charges of Figure 33.4 are the
   referents charge-1 and charge-2 and the exchanged π⁺ of Figure 33.6 is pion;
   the proton and neutron wear F.el('p+') and F.el('n0'), the photon F.el('gamma').
   A charge's sign is a + drawn on its ball, never a hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['33.2'] = function (root, F) {
const { fmt, C, PAL, alpha, choice, ctl, register, cycle, begin, line, arrow, text, topline, labeller, hover, readout, axes, strip, hbracket, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

function ball(ctx, x, y, r, color, plus) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (plus) { const s = r * 0.5; line(ctx, x - s, y, x + s, y, PAL.panel, 3.5); line(ctx, x, y - s, x, y + s, PAL.panel, 3.5); }
}
/* a photon as the book draws it: a short wave train inside an oval */
function packet(ctx, x, y, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.fillStyle = alpha(color, 0.18);
  ctx.beginPath(); ctx.ellipse(x, y, 24, 13, 0, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 2.5; ctx.beginPath();
  for (let i = 0; i <= 24; i++) { const u = i / 24, px = x - 17 + 34 * u, py = y - 8 * Math.sin(u * 2.5 * TAU) * Math.sin(u * Math.PI); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
}
/* the photon's line on a Feynman diagram: a wave along the segment */
function wavy(ctx, x1, y1, x2, y2, color) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 2) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = Math.max(2, Math.round(L / 3));
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const s = (L * i) / n, a = 7 * Math.sin(s / 7); const px = x1 + ux * s - uy * a, py = y1 + uy * s + ux * a; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
}
/* an eye looking left, the pupil toward the oncoming carrier */
function eye(ctx, x, y) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(x - 15, y); ctx.quadraticCurveTo(x, y - 17, x + 13, y - 2); ctx.quadraticCurveTo(x, y + 15, x - 15, y); ctx.fill(); ctx.stroke();
  ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(x - 5, y, 5.5, 0, TAU); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 33.4 + 33.5 + 33.6 · sim-carrier-exchange · moving · flat (rule 28.1)
   x in fm, t in units of 10⁻²⁴ s; c = 0.300 fm per 10⁻²⁴ s (3.00 × 10⁸ m/s).
   Both particles start at rest, as in Figure 33.4(a). The first emits the
   carrier at t = 7 and recoils; the carrier crosses d at c; the second recoils
   when it arrives, Δt = d/c later. The recoil speed drawn grows with the
   energy the carrier takes across (∝ 1/d), drawn, not computed. ΔE ≈ hc/4πd
   with h = 6.63 × 10⁻³⁴ J·s and 1 MeV = 1.602 × 10⁻¹³ J, as Example 33.1. The
   π⁺ needs its rest energy, 139.6 MeV, so it reaches only hc/4πE₀ = 0.71 fm;
   beyond it (past half a slider step), nothing is emitted. The eye catches the carrier at 0.6 of the gap.
   Axes fixed: x −1.5 to 1.5 fm (d = 2.00 fm puts the charges at ±1.00 and
   their recoils end inside ±1.2), t 0 to 20.
===================================================================== */
(function () {
  const H = 660, BOX = { l: 200, r: 1200, t: 140, b: 470 }, SY = 600, R = 17;
  const CV = 0.3, TE = 7, T = 20, HC = 6.63e-34 * 3e8, MEV = 1.602e-13, E0PI = 139.6;
  const DMAX = HC / (4 * Math.PI * E0PI * MEV) * 1e15;
  const d = sim('sim-carrier-exchange', H);
  let car = null;
  const D = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.4, max: 2, step: 0.01, value: 0.5, unit: 'fm', dec: 2, aria: 'the separation the carrier crosses', onInput: reset,
    specials: [{ at: () => (car && car.value === 'pion' ? DMAX : null), label: 'reach of the π⁺' }] });
  car = choice(d.controls, { label: '\\text{Carrier}', options: [{ value: 'photon', label: 'photon' }, { value: 'pion', label: 'π⁺' }], value: 'photon', aria: 'the carrier particle exchanged', key: 'carrier', onInput: reset });
  const obs = choice(d.controls, { label: '\\text{Observer}', options: [{ value: 'none', label: 'none' }, { value: 'eye', label: 'an eye' }], value: 'none', aria: 'whether an eye watches the carrier in passage', key: 'observer', onInput: reset });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); D.refresh && D.refresh(); }

  let hits = [];
  hover(d.stage, () => hits);
  const sci = (x) => { const e = Math.floor(Math.log10(x)); return fmt(x / 10 ** e, 2) + '\\times 10^{' + e + '}'; };

  function draw() {
    const { ctx } = begin(d.c);
    const dv = D.v, pion = car.value === 'pion', watched = obs.value === 'eye', tn = cy.now();
    const xs1 = -dv / 2, xs2 = dv / 2, xe = xs1 + 0.6 * dv;
    const emits = !pion || dv <= DMAX + 0.005, arrives = emits && !watched;
    const TA = TE + dv / CV, tEnd = TE + (watched ? 0.6 * dv : dv) / CV, vo = 0.012 + 0.009 / dv;
    const x1 = (t) => (emits && t > TE ? xs1 - vo * (t - TE) : xs1);
    const x2 = (t) => (arrives && t > TA ? xs2 + vo * (t - TA) : xs2);
    const P = F.el('p+'), N = F.el('n0'), G = F.el('gamma');
    const before1 = car.mixColor((v) => (v === 'pion' ? F.el('p+') : F.ref('charge-1')));
    const before2 = car.mixColor((v) => (v === 'pion' ? F.el('n0') : F.ref('charge-2')));
    const after1 = pion ? N : before1, after2 = pion ? P : before2;
    const carCol = pion ? F.ref('pion') : G, cname = pion ? 'π⁺' : 'photon';
    const dt = dv / CV * 1e-24;

    const head = !emits
      ? 'At $\\kd = ' + fmt(dv, 2) + '$ fm the π⁺ cannot cross in the time it may exist, so no strong force acts.'
      : watched
        ? (pion ? 'Seen by the eye, the π⁺ never reaches the neutron, which stays a neutron.' : 'Seen by the eye, the photon never reaches charge 2, and no force is passed on.')
        : (pion ? 'The neutron becomes a proton only when the π⁺ arrives, $\\kdt = ' + sci(dt) + '$ s after the proton became a neutron.'
          : 'Charge 2 recoils only when the virtual photon arrives, $\\kdt = ' + sci(dt) + '$ s after charge 1.');
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    const { X, Y } = axes(ctx, BOX, [-1.5, 1.5], [0, T], { nx: 6, ny: 4, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0), xl: 'x (fm)', xc: C('position'), yl: 't (10⁻²⁴ s)', yc: C('time') });

    /* brackets first, so the lines and labels sit over them */
    const by = Y(2.4);
    hbracket(ctx, X(xs1), X(xs2), by, C('position'));
    lab.add('d = ' + fmt(dv, 2) + ' fm', (X(xs1) + X(xs2)) / 2, by, 0, -1, C('position'), 20, 22);
    if (pion) {
      const ry = Y(5.2), rx = X(xs1 + DMAX);
      F.faded(ctx, car.a('pion'), [0, 0], () => hbracket(ctx, X(xs1), rx, ry, alpha(C('position'), 0.6)));
      lab.add('reach of the π⁺, ' + fmt(DMAX, 2) + ' fm', rx + 6, ry, 1, 0, C('position'), 18, 8);
    }
    if (arrives && tn >= TA) {
      const bx = X(xs2) + 24;
      vbracket(ctx, bx, Y(TE), Y(TA), C('time'), 'Δt', 1, { H });
    }

    /* world lines, each drawn up to the present */
    const seg = (xa, ta, xb, tb, col) => {
      if (tb <= ta) return;
      line(ctx, X(xa), Y(ta), X(xb), Y(tb), col, 4);
      const L = Math.hypot(X(xb) - X(xa), Y(tb) - Y(ta));
      if (L > 70) { const k0 = 0.42, k1 = 0.58; arrow(ctx, X(xa + (xb - xa) * k0), Y(ta + (tb - ta) * k0), X(xa + (xb - xa) * k1), Y(ta + (tb - ta) * k1), col, 4); }
    };
    const k1 = emits ? TE : T, k2 = arrives ? TA : T;
    seg(xs1, 0, xs1, Math.min(tn, k1), before1);
    if (tn > k1) seg(xs1, TE, x1(tn), tn, after1);
    seg(xs2, 0, xs2, Math.min(tn, k2), before2);
    if (tn > k2) seg(xs2, TA, x2(tn), tn, after2);
    if (watched) F.faded(ctx, obs.a('eye'), [0, 0], () => line(ctx, X(xe), Y(0), X(xe), Y(tn), alpha(PAL.ink, 0.45), 3, [10, 10]));
    if (emits && tn > TE) {
      const tc = Math.min(tn, tEnd), xc = xs1 + CV * (tc - TE);
      if (pion) line(ctx, X(xs1), Y(TE), X(xc), Y(tc), carCol, 4); else wavy(ctx, X(xs1), Y(TE), X(xc), Y(tc), carCol);
      if (tn >= tEnd) lab.add('virtual ' + cname, (X(xs1) + X(xc)) / 2, (Y(TE) + Y(tc)) / 2, 0, -1, carCol, 20, 28);
    }

    /* the present: a level across the diagram, dropped to the particles beneath */
    line(ctx, BOX.l, Y(tn), BOX.r, Y(tn), alpha(C('time'), 0.55), 2, [10, 10]);
    const now1 = x1(tn), now2 = x2(tn);
    [now1, now2].forEach((x) => line(ctx, X(x), Y(tn), X(x), SY - R - 6, alpha(PAL.ink, 0.3), 2, [4, 8]));

    /* the particles along x, on the same scale */
    strip(ctx, BOX.l, BOX.r, SY, 52);
    if (watched) F.faded(ctx, obs.a('eye'), [0, 0], () => eye(ctx, X(xe), SY));
    const c1 = emits && tn > TE ? after1 : before1, c2 = arrives && tn > TA ? after2 : before2;
    const plus1 = !pion || !(emits && tn > TE), plus2 = !pion || (arrives && tn > TA);
    if (emits && tn > TE) arrow(ctx, X(now1) - R - 4, SY, X(now1) - R - 4 - vo * 2500, SY, C('velocity'), 4);
    if (arrives && tn > TA) arrow(ctx, X(now2) + R + 4, SY, X(now2) + R + 4 + vo * 2500, SY, C('velocity'), 4);
    ball(ctx, X(now1), SY, R, c1, plus1);
    ball(ctx, X(now2), SY, R, c2, plus2);
    const n1 = pion ? (plus1 ? 'a proton' : 'a neutron, the proton that emitted the π⁺') : 'charge 1, a positive charge';
    const n2 = pion ? (plus2 ? 'a proton, the neutron that caught the π⁺' : 'a neutron') : 'charge 2, a positive charge';
    hits.push({ x: X(now1), y: SY, r: R + 4, name: n1 }, { x: X(now2), y: SY, r: R + 4, name: n2 });
    if (emits && tn > TE && tn < tEnd) {
      const xc = X(xs1 + CV * (tn - TE));
      if (pion) ball(ctx, xc, SY, 12, carCol, true); else packet(ctx, xc, SY, carCol);
      hits.push({ x: xc, y: SY, r: 22, name: 'the virtual ' + cname + ', which cannot be observed in passage' });
    }
    if (watched) { lab.add('eye', X(xe), SY + 18, 0, 1, PAL.ink, 20, 14); hits.push({ x: X(xe), y: SY, r: 16, name: 'an eye that would see the carrier in passage' }); }

    /* names of the lines, where each starts and, for the pion, where each leaves its vertex */
    const L1 = pion ? 'p' : 'charge 1', L2 = pion ? 'n' : 'charge 2';
    if (tn > 1.6) { lab.add(L1, X(xs1) - 8, Y(1.6), -1, 0, before1, pion ? 24 : 20, 18); lab.add(L2, X(xs2) + 8, Y(1.6), 1, 0, before2, pion ? 24 : 20, 18); }
    if (pion && emits && tn > TE + 5) lab.add('n', X(x1(TE + 4)) - 8, Y(TE + 4), -1, 0, N, 24, 18);
    if (pion && arrives && tn > TA + 3) lab.add('p', X(x2(TA + 2.5)) + 8, Y(TA + 2.5), 1, 0, P, 24, 18);
    lab.flush();

    const EJ = Number((HC / (4 * Math.PI * dv * 1e-15)).toPrecision(3)), MeV = EJ / MEV;
    const note = pion
      ? 'A π⁺ needs at least its rest energy, $\\kErest = ' + fmt(E0PI, 1) + '$ MeV, so it can cross no more than ' + fmt(DMAX, 2) + ' fm.'
      : 'A photon has no rest energy, so a virtual photon can cross any $\\kd$, however small the $\\kdE$ it borrows.';
    ro.set('\\kdE \\approx \\frac{h\\kc}{4\\pi\\kd} = \\frac{(6.63\\times 10^{-34}\\;\\text{J}\\cdot\\text{s})(3.00\\times 10^{8}\\;\\text{m/s})}{4\\pi(' + fmt(dv, 2) + '\\times 10^{-15}\\;\\text{m})} = '
      + sci(EJ) + '\\;\\text{J} = ' + fmt(MeV, 0) + '\\;\\text{MeV}', note);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 3.5), draw });
})();
};
