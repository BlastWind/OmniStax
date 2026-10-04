/* Figures for section 27.2 Huygens's Principle: Diffraction. The page binds
   position, velocity, time and frequency: the wavelength, the distance s a
   wavelet travels and the width of a door; the speed of a wave; the time after
   which the wavelets are drawn; and the frequency of the sound in the doorway.
   Every angle wears angle; every index is untyped and in ink. The section's
   referents are the ray of 27.4, the old and new wavefronts, the mirror and
   the two media of 27.5 to 27.7, and the wall, the door and the listener of
   27.8. Light wears the colour of its wavelength through spectral(), and the
   lamp's white light in the doorway is the one other hex, both facts through
   F.fact. All three figures move, since each draws a wave travelling. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.2'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, hbracket, angleArc, view } = F;
const sim = (id, H) => F.sim(root, id, H);

const DEG = Math.PI / 180;
const CLIGHT = 3.00e8;
const LAMP = '#f3dc8a';

/* A wavelength between about 380 and 750 nm has a colour, and that colour is
   what the eye sees at that wavelength: the usual piecewise fit, dimmed at the
   two ends of the range, as in 24.3. */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
  else if (nm <= 780) { r = 1; }
  let k = 1;
  if (nm >= 380 && nm < 420) k = 0.3 + (0.7 * (nm - 380)) / 40;
  else if (nm > 700 && nm <= 780) k = 0.3 + (0.7 * (780 - nm)) / 80;
  const ch = (v) => Math.round(255 * Math.pow(Math.max(0, Math.min(1, v)) * k, 0.8)).toString(16).padStart(2, '0');
  return F.fact('#' + ch(r) + ch(g) + ch(b));
}
/* a CSS colour as [r, g, b], read back through a canvas */
const probe = document.createElement('canvas').getContext('2d');
function rgbOf(css) {
  probe.clearRect(0, 0, 1, 1); probe.fillStyle = css; probe.fillRect(0, 0, 1, 1);
  const p = probe.getImageData(0, 0, 1, 1).data; return [p[0], p[1], p[2]];
}
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k];
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

/* =====================================================================
   FIGURE 27.4 · sim-transverse-views · moving · flat with one locked view
   One wave drawn three ways from one phase: the view from above as bands
   whose strength is the crest, the view from the side as the field's graph,
   the overall view as a sheet seen from a locked perspective. 1 nm of
   wavelength is 0.24 canvas units, so 400 to 700 nm spans 96 to 168 units.
   The clock runs two periods and loops without a hold, since the wave is
   steady; one crest is marked and the distance it has moved is s = ct.
===================================================================== */
(function () {
  const H = 760;
  const d = sim('sim-transverse-views', H);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 700, step: 5, value: 500, unit: 'nm', dec: 0, aria: 'the wavelength of the light' });
  const cy = cycle(() => 2, 0);
  const PX = 0.24;
  const A = { x0: 70, x1: 630, y0: 120, y1: 330 };
  const S = { x0: 770, x1: 1330, y: 225, amp: 70 };
  function draw() {
    const { ctx } = begin(d.c);
    const XC = C('position'), TC = C('time');
    const u = cy.now();
    const lp = lam.v * PX, col = spectral(lam.v);
    const phase = (x, x0) => Math.cos(2 * Math.PI * ((x - x0) / lp - u));
    /* view from above: bands across the ray, strongest at the crests */
    for (let x = A.x0; x < A.x1; x += 4) {
      const c = phase(x + 2, A.x0);
      ctx.save(); ctx.fillStyle = alpha(col, 0.08 + 0.72 * Math.pow(Math.max(0, c), 2)); ctx.fillRect(x, A.y0, 4.5, A.y1 - A.y0); ctx.restore();
    }
    arrow(ctx, A.x0 - 20, (A.y0 + A.y1) / 2, A.x1 + 40, (A.y0 + A.y1) / 2, F.ref('ray'), 4);
    text(ctx, 'view from above', (A.x0 + A.x1) / 2, A.y1 + 34, PAL.muted, { size: 20, align: 'center' });
    /* view from the side: the field against distance along the ray */
    line(ctx, S.x0, S.y - S.amp - 30, S.x0, S.y + S.amp + 30, PAL.ink, 3);
    arrow(ctx, S.x0, S.y, S.x1 + 30, S.y, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 5; ctx.beginPath();
    for (let x = S.x0; x <= S.x1; x += 3) { const y = S.y - S.amp * phase(x, S.x0); x === S.x0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'view from side', (S.x0 + S.x1) / 2, A.y1 + 34, PAL.muted, { size: 20, align: 'center' });
    /* the marked crest: it starts one wavelength in and moves s = ct along the ray */
    const xs = S.x0 + lp, xc = xs + u * lp;
    line(ctx, xs, S.y - S.amp - 6, xs, S.y + S.amp + 10, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, xc, S.y - S.amp, PAL.ink, true, 8);
    if (u * lp > 6) hbracket(ctx, xs, xc, S.y + S.amp + 26, XC, 's');
    /* overall view: the sheet from a locked perspective, strips painted far to near */
    const V = view({ yaw: 0.62, pitch: 0.5, dist: 1500, cx: 700, cy: 560 });
    const L = 290, Dp = 110, amp = 42, n = 140;
    const hy = (x) => amp * Math.cos(2 * Math.PI * ((x + L) / lp - u));
    const xsArr = Array.from({ length: n + 1 }, (_, i) => -L + (2 * L * i) / n);
    const order = xsArr.slice(0, n).map((x, i) => i).reverse();
    order.forEach((i) => {
      const xa = xsArr[i], xb = xsArr[i + 1], ya = hy(xa), yb = hy(xb);
      const pts = [V.P([xa, ya, -Dp]), V.P([xb, yb, -Dp]), V.P([xb, yb, Dp]), V.P([xa, ya, Dp])];
      const slope = (yb - ya) / (xb - xa);
      ctx.save(); ctx.beginPath(); pts.forEach((p, j) => (j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
      ctx.fillStyle = col; ctx.fill(); ctx.fillStyle = alpha(PAL.ink, V.shade([-slope, 1, 0]) * 1.4); ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 0.8; ctx.stroke(); ctx.restore();
    });
    text(ctx, 'overall view', 700, H - 36, PAL.muted, { size: 20, align: 'center' });
    const T = lam.v * 1e-9 / CLIGHT, t = u * T;
    topline(ctx, `Crests of ${fmt(lam.v, 0)}-nm light are ${fmt(lam.v, 0)} nm apart and move along the ray at c; seen from above, they are the wavefronts.`);
    text(ctx, `t = ${fmt(t * 1e15, 2)} fs`, S.x1, S.y - S.amp - 34, TC, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    tex(d.readout, `\\ks = \\kc\\kt = (3.00\\times 10^{8}\\ \\text{m/s})(${fmt(t * 1e15, 2)}\\ \\text{fs}) = ${fmt(u * lam.v, 0)}\\ \\text{nm}`, false, { values: false });
    d.readout.appendChild(F.el('small', null, `The marked crest moves one wavelength, ${fmt(lam.v, 0)} nm, in one period of ${fmt(T * 1e15, 2)} fs.`));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 2 / 5), draw });
})();

/* =====================================================================
   FIGURE 27.5 + 27.6 + 27.7 · sim-huygens · moving · flat
   A straight wavefront and its wavelets, in open space, at a mirror, or
   crossing into a slower medium. Medium 1 is air, n = 1.00. Canvas units,
   with 1 unit taken as 10 nm for the readout, and the wave moving 1 unit
   per unit of model time. At a surface the front, W units long, meets the
   surface point by point: the point u along it arrives at time u tan θ / v₁
   at x_A + u / cos θ, and its wavelet has grown v′(t − t_u) since. The new
   front is the line through the ends of those wavelets, along k′.
===================================================================== */
(function () {
  const H = 640;
  const d = sim('sim-huygens', H);
  const surf = choice(d.controls, { label: '\\text{surface}', options: [{ value: 'open', label: 'open space' }, { value: 'mirror', label: 'mirror' }, { value: 'slower', label: 'slower medium' }], value: 'open', aria: 'what the wavefront meets', onInput: () => { regroupNow(); cy.reset(); } });
  const th = ctl(d.controls, { label: '\\theta_1', cls: 'angle', min: 0, max: 70, step: 1, value: 45, unit: '°', dec: 0, aria: 'the angle of incidence', onInput: () => cy.reset() });
  const n2 = ctl(d.controls, { label: 'n_2', cls: '', min: 1.00, max: 2.42, step: 0.01, value: 1.50, unit: '', dec: 2, aria: 'the index of refraction of the second medium',
    detents: [1.33, 1.52, 2.42], onInput: () => cy.reset() });
  function regroupNow(ms) {
    const m = surf.value;
    const on = [], off = [];
    (m === 'open' ? off : on).push(th.el);
    (m === 'slower' ? on : off).push(n2.el);
    F.regroup(d.controls, on, off, ms === 0 ? { ms: 0 } : {});
  }
  regroupNow(0);
  const NM = 10;
  const YS = 420;
  const T0 = 110;
  function span() {
    const m = surf.value;
    if (m === 'open') return { t0: 0, t1: 250 };
    const t1r = th.v * DEG, W = Math.min(300, 700 * Math.cos(t1r));
    return { t0: -T0, t1: W * Math.tan(t1r) + 130 };
  }
  const cy = cycle(() => { const s = span(); return s.t1 - s.t0; }, 1.2);
  function openCase(ctx, t) {
    const XC = C('position');
    const x0 = 430, ys = Array.from({ length: 8 }, (_, i) => 175 + i * 55);
    const OW = F.ref('old-wavefront'), NW = F.ref('new-wavefront');
    line(ctx, x0, ys[0] - 30, x0, ys[7] + 30, OW, 4);
    ys.forEach((y) => {
      if (t > 0.5) { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x0, y, t, -Math.PI / 2, Math.PI / 2); ctx.stroke(); ctx.restore(); }
      dot(ctx, x0, y, OW, true, 7);
    });
    if (t > 0.5) line(ctx, x0 + t, ys[0] - 30, x0 + t, ys[7] + 30, NW, 5);
    arrow(ctx, 250, 367, 1150, 367, alpha(PAL.ink, 0.4), 3);
    if (t > 20) {
      const a = -35 * DEG, yc = ys[1];
      arrow(ctx, x0, yc, x0 + t * Math.cos(a), yc + t * Math.sin(a), XC, 4);
      label(ctx, `s = vt = ${fmt(t * NM / 1000, 2)} µm`, x0 + t * Math.cos(a) * 0.5, yc + t * Math.sin(a) * 0.5 - 12, { side: 'above', color: XC, size: 20, gap: 10 });
    }
    label(ctx, 'old wavefront', x0 - 8, ys[7] + 30, { side: 'below', size: 20, gap: 12, color: OW });
    if (t > 60) label(ctx, 'new wavefront', x0 + t, ys[7] + 30, { side: 'below', size: 20, gap: 12, color: NW });
    return 'Every point on the old wavefront sends out a wavelet, and after a time t each has moved s = vt; the new wavefront is the line tangent to them all.';
  }
  function surfaceCase(ctx, t, mode) {
    const XC = C('position'), AC = C('angle'), OW = F.ref('old-wavefront'), NW = F.ref('new-wavefront');
    const t1r = th.v * DEG, s1 = Math.sin(t1r), c1 = Math.cos(t1r);
    const W = Math.min(300, 700 * c1), spread = W / c1, xA = 700 - spread / 2;
    const A = [xA, YS], k1 = [s1, c1], e = [c1, -s1];
    const nn = mode === 'slower' ? n2.v : 1;
    const v2 = 1 / nn;
    const s2 = s1 / nn, c2 = Math.sqrt(1 - s2 * s2);
    const kOut = mode === 'mirror' ? [s1, -c1] : [s2, c2];
    const vOut = mode === 'mirror' ? 1 : v2;
    /* the medium or the mirror */
    if (mode === 'slower') {
      ctx.save(); ctx.fillStyle = alpha(F.ref('medium-2'), 0.08); ctx.fillRect(0, YS, 1400, H - YS); ctx.restore();
      line(ctx, 0, YS, 1400, YS, PAL.ink, 3);
      text(ctx, 'medium 1, n_1 = 1.00', 40, YS - 30, F.ref('medium-1'), { size: 20, align: 'left', bg: PAL.panel });
      text(ctx, `medium 2, n_2 = ${fmt(nn, 2)}`, 40, YS + 30, F.ref('medium-2'), { size: 20, align: 'left', bg: PAL.panel });
    } else {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath();
      for (let x = 10; x < 1400; x += 22) { ctx.moveTo(x, YS + 4); ctx.lineTo(x - 14, YS + 20); }
      ctx.stroke(); ctx.restore();
      line(ctx, 0, YS, 1400, YS, F.ref('mirror'), 5);
      text(ctx, 'mirror', 40, YS + 40, F.ref('mirror'), { size: 20, align: 'left', bg: PAL.panel });
    }
    const tU = (u) => (s1 < 1e-6 ? 0 : (u * s1) / c1);
    const umax = s1 < 1e-6 ? (t >= 0 ? W : 0) : clamp((t * c1) / s1, 0, W);
    const hit = (u) => [xA + u / c1, YS];
    const N = 7, us = Array.from({ length: N }, (_, i) => (W * i) / (N - 1));
    const faint = alpha(PAL.ink, 0.55);
    /* rays through the middle of the beam, and the perpendicular there */
    const mid = hit(W / 2), src = add(mid, k1, -330);
    line(ctx, mid[0], 150, mid[0], mode === 'slower' ? H - 30 : YS, alpha(PAL.ink, 0.4), 2, [8, 8]);
    line(ctx, src[0], src[1], mid[0], mid[1], alpha(PAL.ink, 0.35), 3);
    const mA = add(src, k1, 150);
    arrow(ctx, mA[0] - k1[0] * 16, mA[1] - k1[1] * 16, mA[0] + k1[0] * 16, mA[1] + k1[1] * 16, alpha(PAL.ink, 0.5), 3);
    const outEnd = add(mid, kOut, 240);
    arrow(ctx, mid[0], mid[1], outEnd[0], outEnd[1], alpha(PAL.ink, 0.35), 3);
    if (th.v > 0.5) {
      angleArc(ctx, { x: mid[0], y: mid[1] }, 62, Math.PI / 2, Math.PI / 2 + t1r, '\u03B8_1', undefined, AC);
      if (mode === 'mirror') angleArc(ctx, { x: mid[0], y: mid[1] }, 62, Math.PI / 2 - t1r, Math.PI / 2, '\u03B8_r', undefined, AC);
      else angleArc(ctx, { x: mid[0], y: mid[1] }, 62, -Math.PI / 2, -Math.PI / 2 + Math.asin(s2), '\u03B8_2', undefined, AC);
    }
    /* the wavelets of the points that have arrived */
    us.forEach((u) => {
      const tu = tU(u);
      if (t <= tu) return;
      const p = hit(u), r = vOut * (t - tu);
      ctx.save(); ctx.strokeStyle = faint; ctx.lineWidth = 2.5; ctx.beginPath();
      if (mode === 'mirror') ctx.arc(p[0], p[1], r, Math.PI, 2 * Math.PI); else ctx.arc(p[0], p[1], r, 0, Math.PI);
      ctx.stroke(); ctx.restore();
    });
    /* the front: the part still travelling in medium 1, and the new part */
    if (umax < W) {
      const a = add(add(A, e, umax), k1, t), b = add(add(A, e, W), k1, t);
      line(ctx, a[0], a[1], b[0], b[1], OW, 5);
    }
    let q0 = null, q1 = null;
    if (t > 0 && umax > 0) {
      q0 = add(hit(0), kOut, vOut * t); q1 = add(hit(umax), kOut, vOut * (t - tU(umax)));
      line(ctx, q0[0], q0[1], q1[0], q1[1], NW, 5);
    }
    us.forEach((u) => {
      const tu = tU(u);
      const p = t > tu ? hit(u) : add(add(A, e, u), k1, t);
      dot(ctx, p[0], p[1], OW, true, 6);
    });
    /* s on the first wavelet */
    if (t > 40) {
      const r = vOut * t, p = hit(0), end = add(p, kOut, r);
      arrow(ctx, p[0], p[1], end[0], end[1], XC, 4);
      const nm = mode === 'slower' ? 's_2' : 's';
      label(ctx, nm, (p[0] + end[0]) / 2, (p[1] + end[1]) / 2, { side: 'left', color: XC, size: 22, gap: 12 });
    }
    if (q0 && t > 60) label(ctx, 'new wavefront', (q0[0] + q1[0]) / 2, (q0[1] + q1[1]) / 2, { side: mode === 'mirror' ? 'above' : 'right', size: 20, gap: 18, color: NW });
    if (mode === 'mirror') return th.v < 0.5
      ? 'A wavefront that meets the mirror head-on reaches every point of it at once and comes straight back.'
      : `The wavefront meets the mirror at ${fmt(th.v, 0)}°, left end first, so the left wavelets are the largest and the new wavefront leaves at ${fmt(th.v, 0)}° on the other side of the perpendicular.`;
    if (nn === 1) return 'With the same index on both sides the wavelets travel as far below the surface as above it, and the wavefront goes straight on.';
    return `Each wavelet in the medium of index ${fmt(nn, 2)} travels only ${fmt(1 / nn, 2)} times as far, so the new wavefront turns toward the perpendicular, to ${fmt(Math.asin(s2) / DEG, 1)}°.`;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const s = span(), t = s.t0 + cy.now();
    const m = surf.value;
    const head = m === 'open' ? openCase(ctx, t) : surfaceCase(ctx, t, m);
    topline(ctx, head);
    const tt = Math.max(0, t) * NM * 1e-9 / CLIGHT;
    const fs = fmt(tt * 1e15, 2);
    if (m === 'slower') {
      const v2 = CLIGHT / n2.v;
      tex(d.readout, `s_{2} = v_{2}\\kt = (${fmt(v2 / 1e8, 2)}\\times 10^{8}\\ \\text{m/s})(${fs}\\ \\text{fs}) = ${fmt(Math.max(0, t) * NM / n2.v / 1000, 2)}\\ \\mu\\text{m}`, false, { values: false });
      d.readout.appendChild(F.el('small', null, `In the same time a wavelet in medium 1 travels s₁ = v₁t = ${fmt(Math.max(0, t) * NM / 1000, 2)} µm, and v₂ = c/n₂ = ${fmt(v2 / 1e8, 2)} × 10⁸ m/s.`));
    } else {
      tex(d.readout, `\\ks = \\kv\\kt = (3.00\\times 10^{8}\\ \\text{m/s})(${fs}\\ \\text{fs}) = ${fmt(Math.max(0, t) * NM / 1000, 2)}\\ \\mu\\text{m}`, false, { values: false });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => { const s = span(); return (s.t1 - s.t0) / 5; }), draw });
})();

/* =====================================================================
   FIGURE 27.8 + 27.9 · sim-doorway · moving · flat, seen from above
   A wall with a door, 1 m drawn as 150 units. For sound, the incoming wave
   is a plane wave cos(k(x − x_wall) − ωt), and the wave in the room is
   Huygens's principle computed: point sources across the doorway, closer
   than a quarter wavelength, each adding e^{ikr}/√r with the obliquity
   (1 + cos φ)/2, and the sum divided by √λ and turned back by π/4 so that a
   wide opening passes the plane wave at its own amplitude and phase. The
   complex field is computed once per slider setting on a 3-unit grid; each
   frame only turns its phase. Crests are drawn in ink. Sound travels at
   330 m/s, as in the text; light is 500 nm and drawn as the lamp's light.
===================================================================== */
(function () {
  const H = 660;
  const d = sim('sim-doorway', H);
  const wave = choice(d.controls, { label: '\\text{wave}', options: [{ value: 'sound', label: 'sound' }, { value: 'light', label: 'light' }], value: 'sound', aria: 'which wave passes through the door', onInput: () => regroupNow() });
  const f = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 100, max: 3000, step: 10, value: 1000, unit: 'Hz', dec: 0, aria: 'the frequency of the sound' });
  const w = ctl(d.controls, { label: '\\text{door width}', cls: 'position', min: 0.20, max: 2.00, step: 0.05, value: 1.00, unit: 'm', dec: 2, aria: 'the width of the doorway' });
  function regroupNow(ms) { F.regroup(d.controls, wave.value === 'sound' ? [f.el] : [], wave.value === 'sound' ? [] : [f.el], ms === 0 ? { ms: 0 } : {}); }
  regroupNow(0);
  const cy = cycle(() => 2, 0);
  const VS = 330, M = 150, WX = 520, YC = 370, TOP = 88, CELL = 3;
  const GW = Math.ceil(1400 / CELL), GH = Math.ceil((H - TOP) / CELL);
  const off = document.createElement('canvas'); off.width = GW; off.height = GH;
  const octx = off.getContext('2d'), img = octx.createImageData(GW, GH);
  let key = '', re = null, im = null;
  function field() {
    const lamPx = (VS / f.v) * M, gap = w.v * M, k = (2 * Math.PI) / lamPx;
    const kk = `${f.v}|${w.v}`;
    if (kk === key) return lamPx;
    key = kk; re = new Float32Array(GW * GH); im = new Float32Array(GW * GH);
    const n = Math.max(8, Math.ceil(gap / (lamPx / 5))), dy = gap / n;
    const ys = Array.from({ length: n }, (_, j) => YC - gap / 2 + dy * (j + 0.5));
    const norm = dy / Math.sqrt(lamPx), c0 = Math.cos(-Math.PI / 4), s0 = Math.sin(-Math.PI / 4), rMin = lamPx / 4;
    for (let gy = 0; gy < GH; gy++) {
      const y = TOP + (gy + 0.5) * CELL;
      for (let gx = Math.floor(WX / CELL); gx < GW; gx++) {
        const x = (gx + 0.5) * CELL - WX;
        if (x <= 0) continue;
        let ar = 0, ai = 0;
        for (let j = 0; j < n; j++) {
          const yy = y - ys[j], r = Math.max(rMin, Math.hypot(x, yy)), ob = 0.5 * (1 + x / r), a = ob / Math.sqrt(r), ph = k * r;
          ar += a * Math.cos(ph); ai += a * Math.sin(ph);
        }
        ar *= norm; ai *= norm;
        const i = gy * GW + gx;
        re[i] = ar * c0 - ai * s0; im[i] = ar * s0 + ai * c0;
      }
    }
    return lamPx;
  }
  function soundField(ctx, u) {
    const lamPx = field(), k = (2 * Math.PI) / lamPx, wt = 2 * Math.PI * u;
    const [r, g, b] = rgbOf(PAL.ink), cw = Math.cos(wt), sw = Math.sin(wt), px = img.data;
    const wallCell = Math.floor(WX / CELL);
    for (let gy = 0; gy < GH; gy++) {
      for (let gx = 0; gx < GW; gx++) {
        const i = gy * GW + gx;
        let v;
        if (gx < wallCell) v = Math.cos(k * ((gx + 0.5) * CELL - WX) - wt);
        else v = re[i] * cw + im[i] * sw;
        const o = i * 4;
        px[o] = r; px[o + 1] = g; px[o + 2] = b; px[o + 3] = Math.round(255 * 0.5 * clamp(v, 0, 1));
      }
    }
    octx.putImageData(img, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(off, 0, TOP, GW * CELL, GH * CELL); ctx.restore();
    return lamPx;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const XC = C('position');
    const u = cy.now(), gap = w.v * M, y0 = YC - gap / 2, y1 = YC + gap / 2;
    const sound = wave.value === 'sound';
    if (sound) soundField(ctx, u);
    else {
      ctx.save(); ctx.fillStyle = alpha(F.fact(LAMP), 0.45); ctx.fillRect(0, TOP, WX, H - TOP); ctx.fillRect(WX, y0, 1400 - WX, gap); ctx.restore();
      line(ctx, WX, y0, 1400, y0, alpha(PAL.ink, 0.6), 2, [8, 8]);
      line(ctx, WX, y1, 1400, y1, alpha(PAL.ink, 0.6), 2, [8, 8]);
      label(ctx, 'straight-edge shadows', 1120, y1 + 4, { side: 'below', size: 20, gap: 14 });
      [0.25, 0.5, 0.75].forEach((k, i) => { const x = 40 + ((u / 2 + i / 3) % 1) * 380; arrow(ctx, x, y0 + gap * k, x + 90, y0 + gap * k, PAL.ink, 4); });
    }
    /* the wall and the open door, hinged at the upper jamb and swung back toward the source */
    ctx.save(); ctx.fillStyle = F.ref('wall'); ctx.fillRect(WX - 8, TOP, 16, y0 - TOP); ctx.fillRect(WX - 8, y1, 16, H - y1); ctx.restore();
    const leaf = Math.min(gap, 200);
    line(ctx, WX - 4, y0, WX - 4 - leaf * Math.SQRT1_2, y0 - leaf * Math.SQRT1_2, F.ref('door'), 6);
    text(ctx, 'wall', WX - 24, H - 40, F.ref('wall'), { size: 20, align: 'right', bg: PAL.panel });
    const bx = WX + 34;
    ctx.save(); ctx.strokeStyle = XC; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx - 10, y0); ctx.lineTo(bx, y0); ctx.lineTo(bx, y1); ctx.lineTo(bx - 10, y1); ctx.stroke(); ctx.restore();
    text(ctx, `${fmt(w.v, 2)} m`, bx + 10, YC, XC, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    const ratio = sound ? w.v / (VS / f.v) : w.v / 5e-7;
    if (sound) {
      const lam = VS / f.v;
      F.personTop(ctx, WX + 110, 590, 1.2, -Math.PI / 2, F.ref('listener'));
      label(ctx, 'listener', WX + 140, 590, { side: 'right', size: 20, gap: 12, color: F.ref('listener') });
      text(ctx, `plane wavefront of sound, \u03BB = ${fmt(lam, 2)} m`, 30, TOP + 26, PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
      topline(ctx, ratio < 1.5
        ? `Sound of wavelength ${fmt(lam, 2)} m is about as wide as the ${fmt(w.v, 2)}-m door, so it spreads into the whole room and reaches the listener around the corner.`
        : ratio < 6
          ? `Sound of wavelength ${fmt(lam, 2)} m fits ${fmt(ratio, 1)} times into the ${fmt(w.v, 2)}-m door, so it bends around the edges into most of the room.`
          : `Sound of wavelength ${fmt(lam, 2)} m fits ${fmt(ratio, 0)} times into the ${fmt(w.v, 2)}-m door, so most of it goes straight on and bends only a little at the edges.`);
      tex(d.readout, `\\klam = \\frac{\\kv}{\\kf} = \\frac{330\\ \\text{m/s}}{${fmt(f.v, 0)}\\ \\text{Hz}} = ${fmt(lam, 3)}\\ \\text{m}`);
      d.readout.appendChild(F.el('small', null, `The door is ${fmt(w.v, 2)} m wide, ${fmt(ratio, 1)} wavelengths of the sound.`));
    } else {
      text(ctx, 'light, \u03BB = 500 nm', 30, TOP + 26, PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
      topline(ctx, `The wavelength of light is ${fmt(ratio / 1e6, 1)} million times smaller than the ${fmt(w.v, 2)}-m door, so the light passes straight through and casts sharp shadows.`);
      tex(d.readout, `\\frac{\\text{door width}}{\\klam} = \\frac{${fmt(w.v, 2)}\\ \\text{m}}{5.00\\times 10^{-7}\\ \\text{m}} = ${fmt(ratio / 1e6, 2)}\\times 10^{6}`);
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 2 / 2.4), draw });
})();
};
