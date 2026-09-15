/* Figures for section 12.5 The Onset of Turbulence. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers ---------- */
const TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas past a thousand */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s; };
/* a seeded generator, so that a run of the figure is the same at every scrub position */
function rng(seed) {
  let a = seed >>> 0;
  const u = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const n = () => Math.sqrt(-2 * Math.log(1 - u())) * Math.cos(TAU * u());
  return { u, n };
}
const smooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

/* =====================================================================
   FIGURE 12.22: an artery narrowed by plaque. Dye threads enter from the
   left and are carried along; where the local Reynolds number is below
   2000 they stay straight, between 2000 and 3000 the flow switches at
   random between the two behaviours, and above 3000 they are swirled
   into eddies. The Reynolds number along the vessel is graphed beneath.
   The threads' crossing is the cycle, about 6 s, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-turbulence', 780);
  const RHO = 1025;                         /* blood, kg/m³, the book's value */
  const R1 = 2.00;                          /* radius of the wide part, mm */
  const LEN = 20;                           /* length of vessel shown, mm */
  const XA = 7, XB = 10;                    /* the taper runs from XA to XB mm */
  const T = 6.0;                            /* one crossing of the threads, s of screen time */
  const S1 = 20 / 3.4;                      /* the mean speed of the wide part on screen, mm/s: 20 mm in 3.4 s */
  const FLUIDS = [{ v: 1.002, name: 'water at 20 °C' }, { v: 1.257, name: 'blood plasma at 37 °C' }, { v: 2.084, name: 'whole blood at 37 °C' }, { v: 3.015, name: 'whole blood at 20 °C' }];
  const Q = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 1.0, max: 16.0, step: 0.1, value: 8.0, unit: 'cm³/s', dec: 1, onInput: reset, aria: 'flow rate' });
  const R2 = ctl(d.controls, { label: 'r_2', cls: '', min: 0.50, max: 2.00, step: 0.01, value: 0.75, unit: 'mm', dec: 2, onInput: reset, aria: 'radius of the narrowed part' });
  const ETA = ctl(d.controls, {
    label: '\\keta', cls: 'viscosity', min: 0.5, max: 4.0, step: 0.001, value: 2.084, unit: 'mPa·s', dec: 3, onInput: reset, aria: 'viscosity', snap: true,
    detents: FLUIDS.map((f) => f.v),
  });
  const cy = cycle(() => T, 1.2);
  const fluidNamed = () => { const f = FLUIDS.find((q) => Math.abs(q.v - ETA.v) < 5e-4); return f ? ' This is the viscosity of ' + f.name + ' from Table 12.1.' : ''; };

  /* ---------- the model ---------- */
  const radius = (x) => R1 + (R2.v - R1) * smooth((x - XA) / (XB - XA));           /* mm */
  const meanSpeed = (r) => (Q.v * 1e-6) / (Math.PI * (r * 1e-3) * (r * 1e-3));       /* m/s */
  const reynolds = (r) => (2 * RHO * meanSpeed(r) * r * 1e-3) / (ETA.v * 1e-3);
  const screenMean = (r) => S1 * (R1 / r) * (R1 / r);                                /* mm/s on screen */

  /* ---------- the threads, integrated once per run with a seeded generator ---------- */
  const LANES = [-0.85, -0.45, 0.45, 0.85];
  const DT = 1 / 60, REL = 0.025, NS = Math.ceil(T / DT) + 3, TRAIL = 2.4;   /* TRAIL: the path each parcel draws behind it, mm */
  let lanes = [], flips = [], on0 = false, phase = [0, 0];
  function telegraph(t) { let on = on0; for (const f of flips) { if (f > t) break; on = !on; } return on; }
  /* N_R = Kn / r with r in mm, so the flow is laminar where r > Kn/2000 and turbulent where r < Kn/3000 */
  let Kn = 1;
  /* turbulence intensity at radius r and time t: none below 2000, a random switch between 2000 and 3000, full above 3000 */
  const intensity = (r, t) => (r > Kn / 2000 ? 0 : r < Kn / 3000 ? 1 : telegraph(t) ? 0.85 : 0);
  let fu = 0, fw = 0;
  /* the velocity of a fluid parcel at x (mm), yf (fraction of the local radius) and t, left in fu (screen mm/s
     along the vessel) and fw (yf per second across it): a parabolic profile where the flow is laminar, and where
     it is turbulent a flatter one with cells of swirl the size of the vessel riding along with the flow, from the
     stream function A sin(k(x - st)) cos(πy/2r), whose crosswise speed vanishes at the wall */
  function flow(x, yf, t, I, g) {
    const r = radius(x), s = screenMean(r), sq = 1 - yf * yf;
    const lam = 2 * s * sq, turb = s * (0.85 + 0.3 * sq);
    let u = (1 - I) * lam + I * turb, w = 0;
    if (I > 0) {
      const l1 = 1.8 * r, l2 = 0.9 * r, k1 = TAU / l1, k2 = TAU / l2, half = (Math.PI / 2) * yf, ch = Math.cos(half), sh = Math.sin(half);
      const a1 = k1 * (x - s * t) + phase[0], a2 = k2 * (x - s * t) + phase[1];
      const A1 = (I * s * 0.36) / k1, A2 = (I * s * 0.22) / k2;
      w = -(A1 * k1 * Math.cos(a1) + A2 * k2 * Math.cos(a2)) * ch + I * 0.08 * s * g.n() * sq;
      u -= (Math.PI / (2 * r)) * sh * (A1 * Math.sin(a1) + A2 * Math.sin(a2));
    }
    fu = u; fw = w / r;
  }
  /* a slider change marks the run stale; the threads are integrated again in the next frame, once for
     however many input events a drag has fired */
  let stale = true;
  function reset() { cy.reset(); stale = true; }
  function integrate() {
    stale = false;
    Kn = (2 * RHO * Q.v * 1e-6) / (Math.PI * ETA.v * 1e-3) / 1e-3;
    const g = rng(0x1257 + Math.round(Q.v * 100) * 7 + Math.round(R2.v * 100) * 131 + Math.round(ETA.v * 1000) * 17);
    flips = []; on0 = g.u() < 0.5;
    for (let t = 0; t < T + 1;) { t += Math.min(1.5, Math.max(0.25, -0.7 * Math.log(1 - g.u()))); flips.push(t); }
    phase = [g.u() * TAU, g.u() * TAU];
    lanes = LANES.map(() => []);
    LANES.forEach((yf0, li) => {
      for (let t0 = 0; t0 < T - 1e-9; t0 += REL) {
        const xs = new Float32Array(NS), ys = new Float32Array(NS);
        let x = 0, yf = yf0, n = 0, mixed = false;
        for (let t = t0; t <= T + DT && x <= LEN + 0.5; t += DT, n++) {
          xs[n] = x; ys[n] = yf;
          const r = radius(x), I = intensity(r, t); if (I > 0) mixed = true;
          /* the laminar profile needs one step; the swirl is integrated in sub-steps fine enough for the speed */
          const sub = I > 0 ? Math.max(1, Math.ceil((screenMean(r) * DT) / 0.1)) : 1, h = DT / sub;
          for (let k = 0; k < sub; k++) {
            flow(x, yf, t + k * h, I, g);
            x += fu * h; yf += fw * h;
            if (yf > 0.93) yf = 0.93 - (yf - 0.93); if (yf < -0.93) yf = -0.93 - (yf + 0.93);
          }
        }
        lanes[li].push({ t0, n, xs, ys, mixed });
      }
    });
  }

  /* ---------- the drawing ---------- */
  /* the vessel: 20 mm across 80..1250, 58.5 units per mm; the graph beneath shares the same X, its N_R axis fixed 0..8000 */
  const VX0 = 80, VX1 = 1250, PX = (VX1 - VX0) / LEN, YC = 275, PR = 58.5;
  const X = (mm) => VX0 + mm * PX, Yv = (mm) => YC - mm * PR;
  const box = { l: VX0, r: VX1, t: 470, b: 690 };
  const KV = 100;                          /* arrow units per m/s, fixed */
  function wallPath(ctx, sign) {
    ctx.beginPath(); ctx.moveTo(X(0), Yv(sign * R1));
    for (let mm = 0; mm <= LEN + 1e-9; mm += 0.1) ctx.lineTo(X(mm), Yv(sign * radius(mm)));
  }
  function draw() {
    const { ctx } = begin(d.c);
    if (stale) integrate();
    const tau = cy.now();
    const r2 = R2.v, v1 = meanSpeed(R1), v2 = meanSpeed(r2), NR1 = reynolds(R1), NR2 = reynolds(r2), uniform = r2 >= R1 - 1e-9;
    const stateOf = (NR) => (NR < 2000 ? 'laminar' : NR > 3000 ? 'turbulent' : 'unstable, ' + (telegraph(tau) ? 'turbulent' : 'laminar') + ' at this moment');
    const state1 = stateOf(NR1), state2 = stateOf(NR2);

    /* the lumen and the plaque */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.55);
    ctx.beginPath(); ctx.moveTo(X(0), Yv(R1));
    for (let mm = 0; mm <= LEN + 1e-9; mm += 0.1) ctx.lineTo(X(mm), Yv(radius(mm)));
    for (let mm = LEN; mm >= -1e-9; mm -= 0.1) ctx.lineTo(X(mm), Yv(-radius(mm)));
    ctx.closePath(); ctx.fill(); ctx.restore();
    if (!uniform) {
      for (const sg of [1, -1]) {
        ctx.save(); ctx.beginPath(); ctx.moveTo(X(XA), Yv(sg * R1));
        for (let mm = XA; mm <= LEN + 1e-9; mm += 0.1) ctx.lineTo(X(mm), Yv(sg * radius(mm)));
        ctx.lineTo(X(LEN), Yv(sg * R1)); ctx.closePath();
        ctx.fillStyle = PAL.soft; ctx.fill(); ctx.clip();
        ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath();
        for (let s = X(XA) - 260; s < X(LEN); s += 16) { ctx.moveTo(s, Yv(-R1)); ctx.lineTo(s + (Yv(-R1) - Yv(R1)), Yv(R1)); }
        ctx.stroke(); ctx.restore();
      }
    }
    /* the walls, the outer wall straight and the inner edge of the plaque following the taper */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
    for (const sg of [1, -1]) { wallPath(ctx, sg); ctx.stroke(); }
    ctx.restore();
    line(ctx, X(0), Yv(R1), X(LEN), Yv(R1), PAL.ink, 3.5); line(ctx, X(0), Yv(-R1), X(LEN), Yv(-R1), PAL.ink, 3.5);

    /* the dye threads, clipped to the lumen: every parcel draws the last 2.4 mm of its own path, so the parcels
       of one lane overlap into one thread where the flow is laminar and into a tangle of curls where it is
       turbulent */
    ctx.save(); ctx.beginPath(); ctx.rect(X(0) - 1, Yv(R1), X(LEN) - X(0) + 2, Yv(-R1) - Yv(R1)); ctx.clip();
    ctx.strokeStyle = alpha(C('flow-rate'), 0.9); ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath();
    for (const lane of lanes) {
      for (let j = 0; j < lane.length; j++) {
        const p = lane[j];
        if (p.t0 > tau) continue;
        const i = Math.floor((tau - p.t0) / DT); if (i < 0 || i > p.n - 1) continue;   /* not yet released, or already out of the vessel */
        /* where the flow has stayed laminar the parcels of a lane retrace one another, so only every few are drawn */
        const r = radius(p.xs[i]), sp = screenMean(r) * REL;
        const stride = p.mixed ? 1 : Math.max(1, Math.floor((0.6 * TRAIL) / sp)); if (j % stride) continue;
        let i0 = i, len = 0;
        while (i0 > 0 && len < TRAIL) { len += Math.hypot(p.xs[i0] - p.xs[i0 - 1], (p.ys[i0] - p.ys[i0 - 1]) * r); i0--; }
        let px = X(p.xs[i0]), py = Yv(p.ys[i0] * radius(p.xs[i0])); ctx.moveTo(px, py);
        for (let k = i0 + 1; k <= i; k++) {
          const cx = X(p.xs[k]), cyy = Yv(p.ys[k] * radius(p.xs[k]));
          ctx.quadraticCurveTo(px, py, (px + cx) / 2, (py + cyy) / 2); px = cx; py = cyy;
        }
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
    ctx.restore();

    /* the speed arrows on the axis, at a fixed scale, clipped at the end of their part with a hollow tip */
    function speedArrow(x0, xEnd, v, label) {
      const L = v * KV, cut = X(xEnd) - X(x0), clipped = L > cut, len = clipped ? cut : L;
      arrow(ctx, X(x0), YC, X(x0) + len, YC, C('velocity'), 5);
      if (clipped) dot(ctx, X(x0) + len, YC, C('velocity'), false, 7);
      text(ctx, label, X(x0) + Math.max(len, 60) / 2, YC - 28, C('velocity'), { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    }
    speedArrow(0.6, XA - 0.4, v1, 'v_1 = ' + (v1 < 10 ? fmt(v1, 2) : fmt(v1, 1)) + ' m/s');
    if (!uniform) speedArrow(XB + 0.5, LEN - 0.4, v2, 'v_2 = ' + (v2 < 10 ? fmt(v2, 2) : fmt(v2, 1)) + ' m/s');

    /* the kind labels: the threads once, the plaque once */
    text(ctx, 'lines of flow', X(4.0), Yv(0.65 * R1), C('flow-rate'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    if (!uniform && R1 - r2 > 0.3) text(ctx, 'plaque', X(15), Yv((R1 + radius(15)) / 2), PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.soft });
    else if (!uniform) text(ctx, 'plaque', X(15), Yv(R1) - 22, PAL.ink, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'r_1 = 2.00 mm', X(0.2), Yv(R1) - 22, PAL.ink, { size: 19, weight: 600, align: 'left' });
    if (!uniform) text(ctx, 'r_2 = ' + fmt(r2, 2) + ' mm', X(LEN) - 2, Yv(R1) - 22, PAL.ink, { size: 19, weight: 600, align: 'right' });

    /* the graph: N_R along the vessel, axis fixed 0..8000 */
    const { X: GX, Y: GY } = axes(ctx, box, [0, LEN], [0, 8000], { xl: 'position along the vessel (mm)', yl: 'N_R', nx: 4, ny: 4, fy: (v) => (v ? commas(fmt(v, 0)) : '0') });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(box.l, GY(3000), box.r - box.l, GY(2000) - GY(3000)); ctx.restore();
    line(ctx, box.l, GY(2000), box.r, GY(2000), PAL.muted, 2, [10, 10]); line(ctx, box.l, GY(3000), box.r, GY(3000), PAL.muted, 2, [10, 10]);
    text(ctx, 'laminar', box.r + 12, GY(1000), PAL.muted, { size: 17 });
    text(ctx, 'unstable', box.r + 12, GY(2500), PAL.muted, { size: 17 });
    text(ctx, 'turbulent', box.r + 12, GY(5500), PAL.muted, { size: 17 });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t - 2, box.r - box.l, box.b - box.t + 4); ctx.clip();
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    for (let mm = 0; mm <= LEN + 1e-9; mm += 0.1) { const y = GY(reynolds(radius(mm))); if (mm) ctx.lineTo(GX(mm), y); else ctx.moveTo(GX(mm), y); }
    ctx.stroke(); ctx.restore();
    pinned(ctx, box, GX, GY, 3.5, NR1, PAL.ink, 'N_R = ' + sig3(NR1));
    if (!uniform) pinned(ctx, box, GX, GY, 15, NR2, PAL.ink, 'N_R = ' + sig3(NR2));
    if (NR1 <= 8000) text(ctx, 'N_R = ' + sig3(NR1), GX(3.5), GY(NR1) - 24, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    if (!uniform && NR2 <= 8000) text(ctx, 'N_R = ' + sig3(NR2), GX(15), GY(NR2) - 24, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });

    /* the headline and the readout */
    topline(ctx, uniform
      ? 'The vessel is a uniform 2.00 mm in radius, the Reynolds number is ' + sig3(NR1) + ' all along it, and the flow is ' + state1 + '.'
      : 'In the wide part the Reynolds number is ' + sig3(NR1) + ' and the flow is ' + state1 + '; where plaque narrows the vessel to ' + fmt(r2, 2) + ' mm it is ' + sig3(NR2) + ' and the flow is ' + state2 + '.');
    const rr = uniform ? R1 : r2, vv = uniform ? v1 : v2, NN = uniform ? NR1 : NR2;
    const vs = vv < 10 ? fmt(vv, 2) : fmt(vv, 1);
    readout(d.readout,
      `N_{\\text{R}} = \\frac{2\\krho\\kv r}{\\keta} = \\frac{2(${RHO}\\ \\text{kg/m}^3)(${vs}\\ \\text{m/s})(${fmt(rr, 2)}\\times 10^{-3}\\ \\text{m})}{${fmt(ETA.v, 3)}\\times 10^{-3}\\ \\text{N}\\cdot\\text{s/m}^2} = ${sig3(NN).replace(/,/g, '{,}')}`,
      (uniform ? 'The flow rate is ' + fmt(Q.v, 1) + ' cm³/s and the mean speed is ' + fmt(v1, 2) + ' m/s.'
        : 'In the wide part, where <i>r</i> = 2.00 mm and <i>v</i><sub>1</sub> = ' + fmt(v1, 2) + ' m/s, <i>N</i><sub>R</sub> = ' + sig3(NR1) + '.')
      + fluidNamed() + ' The picture runs about ' + commas(String(Number(((20 / S1 / 0.020) * v1).toPrecision(2)))) + ' times slower than the blood.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
