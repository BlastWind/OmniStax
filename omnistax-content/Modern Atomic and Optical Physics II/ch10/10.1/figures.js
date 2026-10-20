/* Figures for section 10.1 Ion traps.
   Both book figures are rasters the book may not copy, so each is recomputed from the model
   and keeps its number with `withheld`. Frequencies are shown as 2π × MHz. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.1'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, label, axes, vbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const MHz = (w) => w / TAU / 1e6;

/* =====================================================================
   FIGURE 10.1 · sim-penning · moving, 2D in a locked perspective (rule 28.2)
   A ⁹Be⁺ ion in a Penning trap of characteristic size d = 1 mm:
   ω_c = eB/m, ω_z² = eU₀/(m d²), ω± = (ω_c ± √(ω_c² − 2ω_z²))/2.
   The path r = R₊e^{iω₊t} + R₋e^{iω₋t}, z = Z cos ω_z t, both circles turning
   the same way, is projected from one fixed viewpoint above the magnetron
   plane. One loop of the clock is one magnetron circle. Slider ranges keep
   ω_z² < ω_c²/2 everywhere (stable), and ω₊/ω₋ between about 11 and 140.
===================================================================== */
(function () {
  const d = sim('sim-penning', 680);
  const QM = 1.602176634e-19 / (9.012182 * 1.66053907e-27), D2 = 1e-6;
  const RM = 330, RP = 60, Z = 60, CAP = 230, CAPR = 110, BX = 600;
  const P = F.view({ yaw: 0, pitch: 0.55, dist: 2600, cx: 700, cy: 390 }).P;
  const st = () => {
    const wc = QM * bB.v, wz = Math.sqrt((QM * uU.v) / D2), s = Math.sqrt(wc * wc - 2 * wz * wz);
    return { wc, wz, wp: (wc + s) / 2, wm: (wc - s) / 2 };
  };
  let path = null, sig = '';
  const cy = cycle(() => (path ? path.T : 1), 1.2);
  const bB = ctl(d.controls, { label: '\\kB', cls: 'magnetic-field', key: 'B', min: 0.8, max: 1.6, step: 0.01, value: 1.4, unit: 'T', dec: 2,
    aria: 'the magnetic field, in tesla', onInput: () => cy.reset() });
  const uU = ctl(d.controls, { label: 'U_0', cls: '', key: 'U0', min: 0.4, max: 1.2, step: 0.01, value: 0.6, unit: 'V', dec: 2,
    aria: 'the voltage on the endcaps, in volts', onInput: () => cy.reset() });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  /* the path in microseconds, sampled finely enough for every cyclotron loop */
  function build(s) {
    const T = (TAU / s.wm) * 1e6, n = Math.min(9000, Math.ceil((s.wp / s.wm) * 56) + 200);
    const at = (t) => { const u = t * 1e-6; return [RM * Math.cos(s.wm * u) + RP * Math.cos(s.wp * u), Z * Math.cos(s.wz * u), RM * Math.sin(s.wm * u) + RP * Math.sin(s.wp * u)]; };
    const pts = Array.from({ length: n + 1 }, (_, i) => P(at((T * i) / n)));
    return { T, n, at, pts, dur: Math.min(12, Math.max(5, s.wp / s.wm / 4)) };
  }
  const poly = (ctx, pts, m, col, w) => { if (m < 1) return; ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i <= m; i++) ctx.lineTo(pts[i][0], pts[i][1]); ctx.stroke(); ctx.restore(); };
  const ring = (y, r) => Array.from({ length: 73 }, (_, i) => P([r * Math.cos((TAU * i) / 72), y, r * Math.sin((TAU * i) / 72)]));
  function endcap(ctx, y) {
    const pts = ring(y, CAPR);
    ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.fillStyle = alpha(PAL.soft, 0.85); ctx.fill(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  }
  function draw() {
    const s = st(), key = [bB.v, uU.v].join('|');
    if (key !== sig) { sig = key; path = build(s); }
    const { ctx } = begin(d.c); hits.length = 0;
    const cf = C('frequency'), cB = C('magnetic-field'), now = cy.now(), m = Math.round((now / path.T) * path.n);
    endcap(ctx, -CAP); endcap(ctx, CAP);
    [-BX, BX].forEach((x) => { const [a, b] = P([x, -CAP, 0]), [c, e] = P([x, CAP + 40, 0]); arrow(ctx, a, b, c, e, cB, 4); hits.push({ x: c, y: (b + e) / 2, r: 30, name: 'the magnetic field B, along the trap axis' }); });
    const [bx, by] = P([BX, CAP + 40, 0]); text(ctx, '$\\kB$', bx + 22, by + 10, cB, { size: 24, weight: 600, tex: true });
    poly(ctx, ring(0, RM), 72, alpha(PAL.ink, 0.35), 2);
    poly(ctx, path.pts, path.n, alpha(PAL.ink, 0.16), 1.5);
    poly(ctx, path.pts, m, PAL.ink, 2.5);
    const [ux, uy] = P([CAPR, CAP, 0]); label(ctx, 'endcap', ux, uy, { side: 'right', color: PAL.muted, gap: 16 });
    const [lx, ly] = P([-CAPR, -CAP, 0]);
    hits.push({ x: ux - CAPR, y: uy, r: 40, name: 'the upper endcap, charged to hold the ion along B' }, { x: lx + CAPR, y: ly, r: 40, name: 'the lower endcap, charged to hold the ion along B' });
    const [mx, my] = P([RM * Math.cos(1.95), 0, RM * Math.sin(1.95)]); label(ctx, 'magnetron, ω_−', mx, my, { side: 'below', color: cf, gap: 30 });
    hits.push({ x: mx, y: my, r: 22, name: 'the magnetron circle, at ω₋ = 2π × ' + fmt(MHz(s.wm), 3) + ' MHz' });
    const tc = (0.6 / s.wm) * 1e6, [cx, cyy] = P(path.at(tc)); label(ctx, 'cyclotron, ω_+', cx, cyy, { side: 'right', color: cf, gap: 34 });
    hits.push({ x: cx, y: cyy, r: 22, name: 'a cyclotron loop, at ω₊ = 2π × ' + fmt(MHz(s.wp), 3) + ' MHz' });
    const xa = -(RM + RP + 60), [ax, ay1] = P([xa, Z, 0]), [, ay2] = P([xa, -Z, 0]); vbracket(ctx, ax, ay1, ay2, cf, 'axial, ω_z', -1);
    hits.push({ x: ax, y: (ay1 + ay2) / 2, r: 30, name: 'the axial bounce along B, at ω_z = 2π × ' + fmt(MHz(s.wz), 3) + ' MHz' });
    const [ix, iy] = P(path.at(now)); dot(ctx, ix, iy, F.el('Be'), true, 11);
    hits.push({ x: ix, y: iy, r: 20, name: 'the ⁹Be⁺ ion' });
    topline(ctx, `$\\komegaplus$ = ${fmt(s.wp / s.wm, 1)} $\\komegaminus$ and $\\komegaz$ = ${fmt(s.wz / s.wm, 1)} $\\komegaminus$: fast loops ride round the slow magnetron circle.`);
    const vm = +MHz(s.wm).toFixed(3), vc = +MHz(s.wc).toFixed(3);
    ro.set(`\\komegaplus + \\komegaminus = \\komegac = e\\kB/m:\\quad 2\\pi\\times(${fmt(vc - vm, 3)} + ${fmt(vm, 3)})\\ \\text{MHz} = 2\\pi\\times ${fmt(vc, 3)}\\ \\text{MHz}`,
      `The endcaps’ potential is Eq. (10.1) with $\\alpha = \\beta = -1$, $\\gamma = 2$, which hold the ion along $\\kB$ at $\\komegaz = 2\\pi\\times ${fmt(MHz(s.wz), 3)}$ MHz; $2\\komegaplus\\komegaminus = \\komegaz^2$.`, { form: 'penning' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (path ? path.T / path.dur : 0)), draw });
})();

/* =====================================================================
   FIGURE 10.2 · sim-paul · moving, mathematical 3D (rule 28.3), strip below
   Eq. (10.1) with α = −β = cos Ω_RF t, γ = 0: x'' = −ω₀² cos(Ω_RF t) x and
   y'' = +ω₀² cos(Ω_RF t) y for a ⁴⁰Ca⁺ ion, ω₀ = 2π × 4 MHz the swing the
   still saddle would give along x (q = 2ω₀²/Ω_RF², lost below Ω_RF ≈ 1.48 ω₀).
   RK4 at 60 steps per drive period from rest at (4, 2.5) μm; the slow swing's
   frequency is exact, from the trace of one period's monodromy matrix. One loop
   is one slow swing, or the time the ion takes to leave the 12 μm disc.
   Scene: (x, y, Φ) → (x, Φ, −y) at 8 μm a unit. Orbit free, no buttons.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-paul', 0);
  const W0 = TAU * 4, R = 12, X0 = 4, Y0 = 2.5, UNIT = 8, HMAX = 1.0, NR = 12, NA = 48;
  let run = null, sig = '';
  const cy = cycle(() => (run ? run.T : 1), 1.2);
  const fr = ctl(d.controls, { label: '\\kOmegaRF/2\\pi', cls: 'frequency', key: 'Omega_RF', min: 0, max: 16, step: 0.1, value: 10, unit: 'MHz', dec: 1,
    aria: 'the drive frequency over two pi, in megahertz', onInput: () => cy.reset(), specials: [{ at: 0, label: 'static' }] });
  const ro = readout(d);
  const kOf = (f) => (f > 0 ? (t) => W0 * W0 * Math.cos(TAU * f * t) : () => W0 * W0);
  /* one RK4 step of (x, vx, y, vy) */
  const step = (k, t, s, h) => {
    const der = (t, [x, vx, y, vy]) => { const c = k(t); return [vx, -c * x, vy, c * y]; };
    const a = der(t, s), b = der(t + h / 2, s.map((v, i) => v + (h / 2) * a[i])), c = der(t + h / 2, s.map((v, i) => v + (h / 2) * b[i])), e = der(t + h, s.map((v, i) => v + h * c[i]));
    return s.map((v, i) => v + (h / 6) * (a[i] + 2 * b[i] + 2 * c[i] + e[i]));
  };
  /* the slow swing's angular frequency in rad/μs, or null where the motion is unstable */
  function secular(f) {
    if (!(f > 0)) return null;
    const k = kOf(f), P1 = 1 / f, n = 400, h = P1 / n;
    let a = [1, 0, 0, 0], b = [0, 1, 0, 0];
    for (let i = 0; i < n; i++) { a = step(k, i * h, a, h); b = step(k, i * h, b, h); }
    const half = (a[0] + b[1]) / 2;
    return Math.abs(half) < 1 ? Math.acos(half) / P1 : null;
  }
  function simulate(f) {
    const k = kOf(f), ws = secular(f), h = f > 0 ? 1 / f / 60 : 1 / 4 / 200;
    const tmax = ws ? TAU / ws : f > 0 ? Math.min(40 / f, 4) : 1;
    const ts = [0], xs = [X0], ys = [Y0];
    let s = [X0, 0, Y0, 0], t = 0, out = false;
    while (t < tmax - 1e-12) {
      const hh = Math.min(h, tmax - t); s = step(k, t, s, hh); t += hh;
      ts.push(t); xs.push(s[0]); ys.push(s[2]);
      if (Math.hypot(s[0], s[2]) > R) { out = true; break; }
    }
    const T = ts[ts.length - 1], nRF = T * f;
    return { f, ws, T, ts, xs, ys, lost: !ws || out, dur: f > 0 && !out && ws ? Math.min(14, Math.max(5, nRF / 2.5)) : 4 };
  }
  const at = (t) => {
    const { ts, xs, ys } = run; let lo = 0, hi = ts.length - 1;
    if (t >= ts[hi]) return [xs[hi], ys[hi]];
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (ts[mid] <= t) lo = mid; else hi = mid; }
    const u = (t - ts[lo]) / (ts[hi] - ts[lo] || 1); return [xs[lo] + u * (xs[hi] - xs[lo]), ys[lo] + u * (ys[hi] - ys[lo])];
  };
  const tilt = (t) => (run.f > 0 ? Math.cos(TAU * run.f * t) : 1);
  const height = (x, y, c) => (HMAX * c * (x * x - y * y)) / (R * R);
  const scene = (x, y, h) => [x / UNIT, h, -y / UNIT];

  /* ---------- the saddle: built when a colour changes, reshaped every frame ---------- */
  let V = null, g3 = null, surf = null, wire = null, ion = null, flat = null, look = '';
  const gridLines = () => {
    const segs = [];
    for (let i = -4; i <= 4; i++) {
      const c = (i * R) / 4, e = Math.sqrt(R * R - c * c);
      for (let j = 0; j < 24; j++) { const a = -e + (2 * e * j) / 24, b = -e + (2 * e * (j + 1)) / 24; segs.push([c, a], [c, b], [a, c], [b, c]); }
    }
    for (let j = 0; j < NA; j++) { const a = (TAU * j) / NA, b = (TAU * (j + 1)) / NA; segs.push([R * Math.cos(a), R * Math.sin(a)], [R * Math.cos(b), R * Math.sin(b)]); }
    return segs;
  };
  const SEGS = gridLines();
  function build() {
    V.clear(); const g = g3, ink = PAL.muted;
    const pos = new Float32Array((NR + 1) * (NA + 1) * 3), idx = [];
    for (let r = 0; r < NR; r++) for (let a = 0; a < NA; a++) { const p = r * (NA + 1) + a, q = p + NA + 1; idx.push(p, q, p + 1, p + 1, q, q + 1); }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setIndex(idx);
    surf = new THREE.Mesh(sg, F.mesh.mat(PAL.muted, { transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false })); g.add(surf);
    V.pickable(surf, 'the potential Φ over the plane of x and y');
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SEGS.length * 3), 3));
    wire = new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: new THREE.Color(ink), transparent: true, opacity: 0.7 })); g.add(wire);
    const L = R / UNIT + 0.3;
    F.mesh.stick(g, [-L, 0, 0], [L, 0, 0], 0.008, ink); F.mesh.stick(g, [0, 0, L], [0, 0, -L], 0.008, ink); F.mesh.stick(g, [0, -0.9, 0], [0, 0.9, 0], 0.008, ink);
    const lab = (s, p) => { const e = V.label('', p, g, 0); F.tex(e, s); e.style.color = PAL.muted; e.style.transform = 'translate(-50%,-50%)'; };
    lab('x', [L + 0.14, 0, 0]); lab('y', [0, 0, -L - 0.14]); lab('\\Phi', [0, 1.02, 0]);
    ion = F.mesh.sphere(g, [0, 0, 0], 0.075, F.el('Ca')); V.pickable(ion, 'the ⁴⁰Ca⁺ ion');
  }
  function shape(c) {
    const p = surf.geometry.attributes.position;
    for (let r = 0; r <= NR; r++) for (let a = 0; a <= NA; a++) {
      const rr = (R * r) / NR, th = (TAU * a) / NA, x = rr * Math.cos(th), y = rr * Math.sin(th);
      p.setXYZ(r * (NA + 1) + a, ...scene(x, y, height(x, y, c)));
    }
    p.needsUpdate = true; surf.geometry.computeVertexNormals();
    const w = wire.geometry.attributes.position;
    SEGS.forEach(([x, y], i) => w.setXYZ(i, ...scene(x, y, height(x, y, c))));
    w.needsUpdate = true;
  }

  /* ---------- the flat view, where there is no WebGL: the plane seen from above ---------- */
  function drawFlat(now) {
    const { ctx } = begin(flat), K = 18, OX = 700, OY = 300, ink = PAL.muted;
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(OX, OY, R * K, 0, TAU); ctx.stroke(); ctx.restore();
    line(ctx, OX - R * K - 20, OY, OX + R * K + 20, OY, alpha(ink, 0.6), 1.5); line(ctx, OX, OY + R * K + 20, OX, OY - R * K - 20, alpha(ink, 0.6), 1.5);
    text(ctx, 'x', OX + R * K + 34, OY, ink, { size: 20 }); text(ctx, 'y', OX, OY - R * K - 34, ink, { size: 20, align: 'center' });
    const n = run.ts.findIndex((t) => t > now), m = n < 0 ? run.ts.length : n;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i < m; i++) { const px = OX + run.xs[i] * K, py = OY - run.ys[i] * K; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    const [x, y] = at(now); dot(ctx, OX + x * K, OY - y * K, F.el('Ca'), true, 11);
    return ctx;
  }

  if (hasGL) {
    V = F.view3d(d.stage, { h: 480, dist: 7, tilt: 0.45, spin: 'off', yaw: 'free', pitch: [-Math.PI / 2, Math.PI / 2] });
    if (!V.scene) V = null; else { g3 = V.part(0); V.look({ yaw: -0.6, pitch: 0.3, zoom: 1.2, target: [0, 0, 0] }); }
  }
  if (!V) flat = F.makeCanvas(d.stage, 600);
  const strip = F.makeCanvas(d.stage, 320);
  const hits = []; hover(d.stage, () => hits, strip);
  const BOX = { l: 170, r: 1260, t: 80, b: 250 }, TX = 1.5;
  function draw() {
    if (!run || run.f !== fr.v) run = simulate(fr.v);
    const now = cy.now(), c = tilt(now), [x, y] = at(now), f = run.f;
    const head = f === 0 ? 'Held still, the saddle spills the ion along $y$.'
      : run.lost ? `Driven at $\\kOmegaRF$ = 2π × ${fmt(f, 1)} MHz, too slowly, the saddle throws the ion out.`
      : `Driven at $\\kOmegaRF$ = 2π × ${fmt(f, 1)} MHz, the ion swings slowly at 2π × ${fmt(run.ws / TAU, 2)} MHz and jitters at the drive.`;
    if (V) {
      const key = [PAL.soft, PAL.muted, F.el('Ca')].join('|');
      if (key !== look) { look = key; build(); }
      shape(c);
      ion.position.set(...scene(x, y, height(x, y, c) + 0.075));
      V.headline(head); V.invalidate();
    } else topline(drawFlat(now), head);
    const { ctx } = begin(strip); hits.length = 0;
    const cl = C('length');
    const { X, Y } = axes(ctx, BOX, [0, TX], [-8, 8], { nx: 3, ny: 4, xl: 't (μs)', xc: C('time'), yl: 'x, y (μm)', yc: cl, fx: (v) => fmt(v, 1) });
    if (f > 0) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07);
      for (let n = 0; n / f < TX; n++) { const a = (n - 0.25) / f, b = (n + 0.25) / f; const l = X(Math.max(0, a)), r = X(Math.min(TX, b)); if (r > l) ctx.fillRect(l, BOX.t, r - l, BOX.b - BOX.t); }
      ctx.restore();
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(BOX.r - 470, 18, 26, 18); ctx.restore();
      text(ctx, 'x confined', BOX.r - 436, 27, PAL.muted, { size: 17 });
    }
    line(ctx, BOX.r - 300, 27, BOX.r - 260, 27, cl, 4); text(ctx, 'x', BOX.r - 250, 27, cl, { size: 18 });
    line(ctx, BOX.r - 200, 27, BOX.r - 160, 27, cl, 4, [10, 8]); text(ctx, 'y', BOX.r - 150, 27, cl, { size: 18 });
    dot(ctx, BOX.r - 90, 27, F.el('Ca'), true, 8); text(ctx, 'the ion', BOX.r - 76, 27, PAL.muted, { size: 17 });
    const trace = (arr, m, w, dash, a) => {
      ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
      ctx.strokeStyle = alpha(cl, a); ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
      for (let i = 0; i <= m && i < run.ts.length; i++) { const px = X(run.ts[i]), py = Y(arr[i]); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.stroke(); ctx.restore();
    };
    const all = run.ts.length - 1, n = run.ts.findIndex((t) => t > now), m = n < 0 ? all : n;
    trace(run.xs, all, 2, null, 0.25); trace(run.ys, all, 2, [10, 8], 0.25);
    trace(run.xs, m, 4, null, 1); trace(run.ys, m, 4, [10, 8], 1);
    const px = F.pinned(ctx, BOX, X, Y, now, x, cl), py = F.pinned(ctx, BOX, X, Y, now, y, cl);
    hits.push({ x: px.x, y: px.y, r: 18, name: 'the ion’s x now, ' + fmt(x, 1) + ' μm' }, { x: py.x, y: py.y, r: 18, name: 'the ion’s y now, ' + fmt(y, 1) + ' μm' });
    const coeff = f > 0 ? '\\alpha = -\\beta = \\cos \\kOmegaRF \\kt' : '\\alpha = -\\beta = 1';
    const drive = `$\\kOmegaRF = 2\\pi\\times ${fmt(f, 1)}$ MHz`;
    ro.set(`\\Phi = \\phi_0\\left(\\alpha x^2 + \\beta y^2 + \\gamma z^2\\right),\\quad ${coeff},\\ \\gamma = 0`,
      f === 0 ? 'A still saddle confines along $x$ and repels along $y$.'
        : run.lost ? `At ${drive} the drive is too slow for the averaging, and the ion is lost.`
        : `At ${drive} the slow swing runs at $\\knu = 2\\pi\\times ${fmt(run.ws / TAU, 2)}$ MHz, ${fmt((TAU * f) / run.ws, 1)} times slower than the drive.`, { form: 'paul' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (run ? run.T / run.dur : 0)), draw });
})();

};
