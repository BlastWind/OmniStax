/* Figures for section 12.5 The Onset of Turbulence. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers ---------- */
const TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* three significant figures, never in exponent form, with commas past a thousand */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Number(s)))) : s; };
/* a seeded generator, so that a run of the figure is the same at every scrub position */
function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const smooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

/* =====================================================================
   FIGURE 12.22: an artery narrowed by plaque. Four threads of dye, injected
   in pulses at the left, are carried along as material lines. Wherever the
   local Reynolds number is above 3000 (and, between 2000 and 3000, while a
   random switch is on) vortices are born, ride downstream and decay, and the
   threads wind round them into eddies. The run is integrated once per slider
   state from a seeded generator and stored frame by frame for the scrubber.
===================================================================== */
(function () {
  const H = 820, d = sim('sim-turbulence', H);
  const RHO = 1025;                         /* blood, kg/m³, the book's value */
  const R1 = 2.00;                          /* radius of the wide part, mm */
  const LEN = 20;                           /* length of vessel shown, mm */
  const XA = 7, XB = 10;                    /* the taper runs from XA to XB mm */
  const T = 6.0, PRE = 1.2;                 /* the cycle, and the run before it that lets the eddies develop, s of screen time */
  const S1 = 1.4;                           /* the mean speed of the wide part on screen, mm/s */
  const FLUIDS = [{ v: 1.002, name: 'water at 20 °C' }, { v: 1.257, name: 'blood plasma at 37 °C' }, { v: 2.084, name: 'whole blood at 37 °C' }, { v: 3.015, name: 'whole blood at 20 °C' }];
  const Q = ctl(d.controls, { label: '\\kQ', cls: 'flow-rate', min: 1.0, max: 16.0, step: 0.1, value: 8.0, unit: 'cm³/s', dec: 1, onInput: reset, aria: 'flow rate',
    specials: [2000, 3000].map((N) => ({ at: () => (N * Math.PI * ETA.v * 1e-3 * R2.v * 1e-3) / (2 * RHO) * 1e6, label: 'N_R = ' + N + ' in the narrow part' })) });
  const R2 = ctl(d.controls, { label: '\\krtwo', cls: 'position', min: 0.50, max: 2.00, step: 0.01, value: 0.75, unit: 'mm', dec: 2, onInput: reset, aria: 'radius of the narrowed part',
    specials: [2000, 3000].map((N) => ({ at: () => (2 * RHO * Q.v * 1e-6) / (Math.PI * ETA.v * 1e-3 * N) * 1e3, label: 'N_R = ' + N })) });
  const ETA = ctl(d.controls, {
    label: '\\keta', cls: 'viscosity', min: 0.5, max: 4.0, step: 0.001, value: 2.084, unit: 'mPa·s', dec: 3, onInput: reset, aria: 'viscosity', snap: true,
    detents: FLUIDS.map((f) => f.v),
  });
  Q.refresh(); R2.refresh();
  const cy = cycle(() => T, 1.2);
  const fluid = () => FLUIDS.find((q) => Math.abs(q.v - ETA.v) < 5e-4);

  /* ---------- the model ---------- */
  const radius = (x) => R1 + (R2.v - R1) * smooth((x - XA) / (XB - XA));           /* mm */
  const meanSpeed = (r) => (Q.v * 1e-6) / (Math.PI * (r * 1e-3) * (r * 1e-3));       /* m/s */
  const reynolds = (r) => (2 * RHO * meanSpeed(r) * r * 1e-3) / (ETA.v * 1e-3);
  const screenMean = (r) => S1 * (R1 / r) * (R1 / r);                                /* mm/s on screen */

  /* N_R = Kn / r with r in mm. Turbulence is full above 3000; between 2000 and 3000 it is a switch
     that flips at random times, eased over a quarter second, held in m while the run is integrated */
  let Kn = 1, flips = [], on0 = false, m = 0;
  function telegraph(t) { let on = on0; for (const f of flips) { if (f > t) break; on = !on; } return on; }
  const intensity = (r) => { const N = Kn / r; return Math.max(smooth((N - 2900) / 200), m * smooth((N - 1950) / 100)); };

  /* the vortices: each is born where the flow is turbulent, rides downstream with the flatter profile of
     turbulent flow, swells and decays over its life, and is mirrored in both walls so no dye crosses them */
  let vort = [], bins = [];
  const LANES = [-0.85, -0.45, 0.45, 0.85];
  const DT = 1 / 60, NPRE = Math.round(PRE / (2 * DT)), NF = Math.round(T / DT) + 1;
  const HMAX = 0.11, HIN = 0.06, NMAX = 1600, PULSE = 0.35, CB = 0.5, NB = Math.ceil((LEN + 2) / CB);
  let frames = [];                          /* frames[k][lane]: Float32Array of x, yf pairs; x carries +100 where the dye pulse is dark */
  let fu = 0, fw = 0;
  function field(x, yf, dtOff) {
    const r = radius(x), s = screenMean(r), I = intensity(r), sq = 1 - yf * yf, y = yf * r;
    let u = s * ((1 - I) * 2 * sq + I * (0.85 + 0.3 * sq)), v = 0;
    for (const q of bins[Math.max(0, Math.min(NB - 1, Math.floor(x / CB)))]) {
      const xv = q.x + q.u * dtOff, dx = x - xv, R2c = q.cut;
      if (dx * dx > R2c) continue;
      for (let j = 0; j < 3; j++) {
        const yv = j === 0 ? q.yf * r : j === 1 ? 2 * r - q.yf * r : -2 * r - q.yf * r, G = j ? -q.G : q.G, dy = y - yv, rr = dx * dx + dy * dy;
        if (rr > R2c) continue;
        const w1 = 1 - rr / R2c, k = (G / TAU) * w1 * w1 / (rr + q.a2);
        u -= k * dy; v += k * dx;
      }
    }
    fu = u; fw = v / r;
  }
  /* a slider change starts a new run; the run is integrated through its lead-in at once, in double steps, and
     then a frame at a time as the cycle or the scrubber asks for it, every frame kept so the scrubber can go back */
  let run = null;
  function reset() { cy.reset(); run = null; }
  /* a vortex's core turns at about half the local mean speed, but never slower than once in 1.6 s, so the
     slow eddies of a wide vessel still roll up within the run; it lives about two turns, and they sit about
     a radius apart, which sets the births per mm per second at each radius */
  const spin = (r) => Math.max(0.5 * screenMean(r), (TAU * 0.35 * r) / 1.6);
  const rate = (r) => spin(r) / (0.7 * r * 2.2 * TAU * 0.35 * r);
  function start() {
    Kn = (2 * RHO * Q.v * 1e-6) / (Math.PI * ETA.v * 1e-3) / 1e-3;
    const g = rng(0x1257 + Math.round(Q.v * 100) * 7 + Math.round(R2.v * 100) * 131 + Math.round(ETA.v * 1000) * 17);
    flips = []; on0 = g() < 0.5;
    for (let t = -PRE; t < T + 1;) { t += Math.min(1.5, Math.max(0.3, -0.7 * Math.log(1 - g()))); flips.push(t); }
    m = telegraph(-PRE) ? 0.85 : 0;
    vort = [];
    /* the threads start as the steady laminar streaklines, straight at their heights, pulsed by the time the dye left the inlet */
    const lines = LANES.map((yf0) => {
      const L = { yf0, x: [], y: [], t: [] };
      for (let x = 0, tt = 0; x <= LEN + 0.3; x += HIN, tt += HIN / (2 * screenMean(radius(x)) * (1 - yf0 * yf0))) { L.x.unshift(x); L.y.unshift(yf0); L.t.unshift(-PRE - tt); }
      return L;
    });
    run = { g, t: -PRE, acc: 0, rate0: rate(Math.min(R1, R2.v)), lines };
    frames = [];
    for (let n = 0; n < NPRE; n++) step(2 * DT);
    run.t = 0;
    snap();
  }
  function snap() {
    frames.push(run.lines.map((L) => { const a = new Float32Array(2 * L.x.length); for (let i = 0; i < L.x.length; i++) { a[2 * i] = L.x[i] + (Math.floor(L.t[i] / PULSE) & 1 ? 0 : 100); a[2 * i + 1] = L.y[i]; } return a; }));
  }
  function frameAt(k) {
    if (!run) start();
    while (frames.length <= k && frames.length < NF) { step(DT); snap(); }
    return frames[Math.min(k, frames.length - 1)];
  }
  function step(h) {
    const { g, lines } = run, t = run.t;
    run.t += h;
    /* the switch, eased */
    m += ((telegraph(t) ? 0.85 : 0) - m) * Math.min(1, h / 0.25);
    /* births, sampled along the vessel and kept where the flow is turbulent */
    run.acc += run.rate0 * LEN * h;
    while (run.acc >= 1) {
      run.acc -= 1;
      const x = g() * (LEN + 1), r = radius(x), I = intensity(r);
      if (g() > (I * rate(r)) / run.rate0) continue;
      const yf = (g() * 2 - 1) * 0.6, a = (0.25 + 0.2 * g()) * r, vt = (0.8 + 0.5 * g()) * spin(r);
      vort.push({ x, yf, a, a2: a * a, cut: 16 * a * a, sg: (g() < 0.75 ? (yf > 0 ? 1 : -1) : (yf > 0 ? -1 : 1)), g0: 2 * TAU * a * vt, tb: t, life: (1.6 + 1.2 * g()) * (TAU * a) / vt, u: 0, G: 0 });
    }
    vort = vort.filter((q) => t - q.tb < q.life && q.x < LEN + 1.5);
    bins = Array.from({ length: NB }, () => []);
    for (const q of vort) {
      const r = radius(q.x);
      q.u = screenMean(r) * (0.85 + 0.3 * (1 - q.yf * q.yf));
      q.G = q.sg * q.g0 * Math.sin(Math.PI * Math.sqrt((t - q.tb) / q.life)) * intensity(r);
      const span = 4 * q.a + q.u * h;
      for (let c = Math.max(0, Math.floor((q.x - span) / CB)); c <= Math.min(NB - 1, Math.floor((q.x + span) / CB)); c++) bins[c].push(q);
    }
    /* the dye, a midpoint step per point */
    for (const L of lines) {
      for (let i = 0; i < L.x.length; i++) {
        const x0 = L.x[i], y0 = L.y[i];
        field(x0, y0, 0);
        field(x0 + fu * h / 2, Math.max(-0.97, Math.min(0.97, y0 + fw * h / 2)), h / 2);
        L.x[i] = x0 + fu * h; L.y[i] = Math.max(-0.96, Math.min(0.96, y0 + fw * h));
      }
      /* new dye at the inlet, spent dye dropped past the outlet, and the line refined where it has stretched */
      const last = L.x.length - 1;
      if (L.x[last] >= HIN) { L.x.push(0); L.y.push(L.yf0); L.t.push(t); }
      let cut = 0; while (cut < L.x.length - 2 && L.x[cut] > LEN + 0.3) cut++;
      if (cut) { L.x.splice(0, cut); L.y.splice(0, cut); L.t.splice(0, cut); }
      if (L.x.length < NMAX) {
        const nx = [], ny = [], nt = [];
        for (let i = 0; i < L.x.length; i++) {
          if (i) {
            const r = radius(L.x[i]), dxx = L.x[i] - L.x[i - 1], dyy = (L.y[i] - L.y[i - 1]) * r;
            if (dxx * dxx + dyy * dyy > HMAX * HMAX) { nx.push((L.x[i] + L.x[i - 1]) / 2); ny.push((L.y[i] + L.y[i - 1]) / 2); nt.push((L.t[i] + L.t[i - 1]) / 2); }
          }
          nx.push(L.x[i]); ny.push(L.y[i]); nt.push(L.t[i]);
        }
        L.x = nx; L.y = ny; L.t = nt;
      }
    }
    for (const q of vort) q.x += q.u * h;
  }

  /* ---------- the drawing ---------- */
  /* the vessel: 20 mm across 80..1250, 58.5 units per mm; the graph beneath shares the same X, its N_R axis fixed 0..8000 */
  const VX0 = 80, VX1 = 1250, PX = (VX1 - VX0) / LEN, YC = 275, PR = 58.5;
  const X = (mm) => VX0 + mm * PX, Yv = (mm) => YC - mm * PR;
  const box = { l: VX0, r: VX1, t: 520, b: 735 };
  const KV = 100;                          /* arrow units per m/s, fixed */
  const YA = Yv(-R1) + 34;                 /* the speed arrows, under the vessel */
  function lumen(ctx) {
    ctx.beginPath(); ctx.moveTo(X(0), Yv(R1));
    for (let mm = 0; mm <= LEN + 1e-9; mm += 0.1) ctx.lineTo(X(mm), Yv(radius(mm)));
    for (let mm = LEN; mm >= -1e-9; mm -= 0.1) ctx.lineTo(X(mm), Yv(-radius(mm)));
    ctx.closePath();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now();
    const fr = frameAt(Math.round(tau / DT));
    const r2 = R2.v, v1 = meanSpeed(R1), v2 = meanSpeed(r2), NR1 = reynolds(R1), NR2 = reynolds(r2), uniform = r2 >= R1 - 1e-9;
    const stateOf = (NR) => (NR < 2000 ? 'laminar' : NR > 3000 ? 'turbulent' : 'unstable, ' + (telegraph(tau) ? 'turbulent' : 'laminar') + ' at this moment');
    const state1 = stateOf(NR1), state2 = stateOf(NR2);
    const rows = topline(ctx, uniform
      ? 'The vessel is a uniform 2.00 mm in radius, the Reynolds number is ' + sig3(NR1) + ' all along it, and the flow is ' + state1 + '.'
      : 'In the wide part the Reynolds number is ' + sig3(NR1) + ' and the flow is ' + state1 + '; where plaque narrows the vessel to ' + fmt(r2, 2) + ' mm it is ' + sig3(NR2) + ' and the flow is ' + state2 + '.');
    const lab = F.labeller(ctx, H, { headline: rows });
    lab.block(X(0), Yv(R1) + 6, X(LEN), Yv(-R1) - 6);   /* the vessel, eddies and all */

    /* the lumen and the plaque */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.55); lumen(ctx); ctx.fill(); ctx.restore();
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

    /* the dye, clipped to the lumen: a pale thread with the darker pulses riding on it */
    ctx.save(); lumen(ctx); ctx.clip();
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    for (const pass of [0, 1]) {
      ctx.strokeStyle = alpha(C('flow-rate'), pass ? 0.95 : 0.55); ctx.lineWidth = pass ? 3.5 : 2.5;
      ctx.beginPath();
      for (const a of fr) {
        let pen = false;
        for (let i = 0; i < a.length; i += 2) {
          const raw = a[i], dark = raw > 50, x = dark ? raw - 100 : raw, px = X(x), py = Yv(a[i + 1] * radius(x));
          if (pen && (pass && !dark)) { pen = false; continue; }
          if (!pen) { if (!pass || dark) { ctx.moveTo(px, py); pen = true; } continue; }
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    }
    ctx.restore();

    /* the walls, the outer wall straight and the inner edge of the plaque following the taper */
    ctx.save(); ctx.strokeStyle = F.ref('plaque'); ctx.lineWidth = 3.5;
    for (const sg of [1, -1]) { ctx.beginPath(); ctx.moveTo(X(0), Yv(sg * R1)); for (let mm = 0; mm <= LEN + 1e-9; mm += 0.1) ctx.lineTo(X(mm), Yv(sg * radius(mm))); ctx.stroke(); }
    ctx.restore();
    line(ctx, X(0), Yv(R1), X(LEN), Yv(R1), F.ref('artery'), 3.5); line(ctx, X(0), Yv(-R1), X(LEN), Yv(-R1), F.ref('artery'), 3.5);

    /* the speed arrows under the vessel, at a fixed scale, clipped at the end of their part with a hollow tip */
    function speedArrow(x0, xEnd, v, s) {
      const L = v * KV, cut = X(xEnd) - X(x0), clipped = L > cut, len = clipped ? cut : L;
      arrow(ctx, X(x0), YA, X(x0) + len, YA, C('velocity'), 5);
      if (clipped) dot(ctx, X(x0) + len, YA, C('velocity'), false, 7);
      lab.add(s, X(x0) + Math.max(len, 60) / 2, YA, 0, 1, C('velocity'), 21, 24);
    }
    const vs = (v) => (v < 10 ? fmt(v, 2) : fmt(v, 1));
    speedArrow(0.6, XA - 0.4, v1, 'v_1 = ' + vs(v1) + ' m/s');
    if (!uniform) speedArrow(XB + 0.5, LEN - 0.4, v2, 'v_2 = ' + vs(v2) + ' m/s');

    /* the kind labels and the radii, above the vessel */
    lab.add('r_1 = 2.00 mm', X(1.3), Yv(R1), 0, -1, C('position'), 19, 22);
    lab.add('lines of dye', X(4.6), Yv(0.85 * R1), 0, -1, C('flow-rate'), 20, 22);
    if (!uniform) lab.add('r_2 = ' + fmt(r2, 2) + ' mm', X(18.4), Yv(R1), 0, -1, C('position'), 19, 22);
    if (!uniform && R1 - r2 > 0.3) text(ctx, 'plaque', X(15), Yv((R1 + radius(15)) / 2), F.ref('plaque'), { size: 20, weight: 600, align: 'center', bg: PAL.soft });
    else if (!uniform) lab.add('plaque', X(14.6), Yv(R1), 0, -1, F.ref('plaque'), 20, 22);

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
    const missed = lab.flush(); d.fig.dataset.missed = missed.join(' | ');

    /* the readout */
    const rr = uniform ? R1 : r2, vv = uniform ? v1 : v2, NN = uniform ? NR1 : NR2, f = fluid();
    readout(d.readout,
      `N_{\\text{R}} = \\frac{2\\krho\\kv \\krad}{\\keta} = \\frac{2(${RHO}\\ \\text{kg/m}^3)(${vs(vv)}\\ \\text{m/s})(${fmt(rr, 2)}\\times 10^{-3}\\ \\text{m})}{${fmt(ETA.v, 3)}\\times 10^{-3}\\ \\text{N}\\cdot\\text{s/m}^2} = ${sig3(NN).replace(/,/g, '{,}')}`,
      (f ? '$\\keta = ' + fmt(f.v, 3) + '$ mPa·s is ' + f.name + ' in Table 12.1. ' : '')
      + 'The picture runs about ' + commas(String(Number((v1 / (S1 * 1e-3)).toPrecision(2)))) + ' times slower than the blood.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
