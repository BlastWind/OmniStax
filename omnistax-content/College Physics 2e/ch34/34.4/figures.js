/* Figures for section 34.4 Dark Matter and Closure.
   The page binds velocity, position, mass, time, density and angle. The red and
   blue shift of the galaxy's two sides are facts, drawn through F.fact. The two
   curves of Figure 34.18(b) are the section's referents, luminous-curve and
   rotation-curve. The ratio of halo to luminous mass and the fractions of the
   critical density are ratios and stay in ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['34.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 34.18 · sim-rotation-curve · moving · locked view (rule 28.2)
   The galaxy is a model of the Milky Way: a bulge (Plummer, 0.88 × 10¹⁰
   solar masses, 0.85 thousand ly) and a disk (Hernquist, 0.80 × 10¹⁰,
   6.0 thousand ly), so the luminous curve peaks near 240 km/s at 1.5 thousand
   ly and falls as 1/√r beyond, to 65 km/s at the disk's edge, 50 thousand ly
   (34.1). The halo is a cored isothermal sphere (core 5.0 thousand ly) whose
   mass inside 50 thousand ly is f times the luminous mass there; at f = 10
   the curve stays between 195 and 217 km/s from 7 thousand ly out, as the
   book's graph does, with the Sun at 30 thousand ly near 212 km/s.
   v² = GM/r with G = 140 260 (km/s)² · thousand ly per 10¹⁰ solar masses.
   Model time 0 to 5 s at rate 1 is 0 to 60 million years. Graph: v from 0 to
   300 km/s (241 at most, f = 12), r from 0 to 50 thousand ly, fixed.
===================================================================== */
(function () {
  const G = 140260, MB = 0.88, AB = 0.85, MD = 0.8, AD = 6.0, RC = 5.0, EDGE = 50;
  const T = 5, MYR = 60, SUN_R = 30;
  const RED = '#d8473b', BLUE = '#3b6fd8';          /* red and blue shift, the colours of Figure 34.18(a)'s two lines of sight */
  const mLum = (r) => MB * r * r * r / Math.pow(r * r + AB * AB, 1.5) + MD * r * r / Math.pow(r + AD, 2);
  const core = (r) => r / RC - Math.atan(r / RC);
  const mHalo = (r, f) => f * mLum(EDGE) * core(r) / core(EDGE);
  const vLum = (r) => Math.sqrt(G * mLum(r) / r);
  const vOf = (r, f) => Math.sqrt(G * (mLum(r) + mHalo(r, f)) / r);
  const SEC_PER_MYR = 3.156e13, KM_PER_KLY = 9.461e15;
  const turned = (r, f, myr) => vOf(r, f) * myr * SEC_PER_MYR / (r * KM_PER_KLY);   /* radians swept in myr */

  const H = 660;
  const d = sim('sim-rotation-curve', H);
  const cy = cycle(() => T, 1.2);
  const fS = ctl(d.controls, { label: '\\kM_{\\text{halo}}/\\kM_{\\text{lum}}', cls: '', min: 0, max: 12, step: 0.1, value: 10, unit: '', dec: 1,
    aria: 'the mass of the dark halo inside the disk, as a multiple of the luminous mass', detents: [0, 10], onInput: () => cy.reset() });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  /* the disk seen from 25° above its plane; scene units are px, S per thousand ly */
  const CX = 335, CY = 385, S = 4.6, PITCH = 0.44;
  const V = F.view({ yaw: 0, pitch: PITCH, dist: 2400, cx: CX, cy: CY });
  const at = (r, phi) => V.P([r * S * Math.cos(phi), 0, -r * S * Math.sin(phi)]);
  const STARS = [];
  for (let r = 10; r <= EDGE; r += 5) { STARS.push({ r, phi0: 0, sun: r === SUN_R }); STARS.push({ r, phi0: Math.PI, sun: false }); }

  function ring(ctx, r, fill, stroke, w) {
    ctx.save(); ctx.beginPath();
    for (let i = 0; i <= 96; i++) { const p = at(r, (2 * Math.PI * i) / 96); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
    ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.stroke(); } ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const f = fS.v, myr = (cy.now() / T) * MYR;
    const vl = vLum(EDGE), ve = vOf(EDGE, f), flat = ve / vOf(10, f) >= 0.92;
    const fTxt = fmt(f, 1);
    hits = [];
    topline(ctx, f < 0.05
      ? 'With no dark matter, the outer stars fall behind: their speeds fall off with distance, as the luminous matter alone gives.'
      : flat
        ? `With dark matter of ${fTxt} times the luminous mass, the outer stars orbit as fast as the inner ones: the rotation curve is flat.`
        : `With dark matter of ${fTxt} times the luminous mass, the outer stars still fall behind: the rotation curve falls with distance.`);

    /* the dark halo, a sphere seen as a disc, as strong as its mass */
    const ha = Math.min(1, f / 10);
    if (ha > 0) {
      F.faded(ctx, ha, [0, 0], () => {
        const g = ctx.createRadialGradient(CX, CY, 20, CX, CY, 250);
        g.addColorStop(0, alpha(PAL.ink, 0.13)); g.addColorStop(1, alpha(PAL.ink, 0.02));
        ctx.save(); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(CX, CY, 250, 0, 2 * Math.PI); ctx.fill();
        ctx.setLineDash([10, 10]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
        text(ctx, 'dark halo', CX, CY - 222, PAL.muted, { size: 20, align: 'center' });
      });
      hits.push({ x: CX, y: CY - 205, r: 40, name: `the dark halo, ${fTxt} times the luminous mass inside the disk` });
    }

    /* the disk and its bulge */
    ring(ctx, 52, alpha(PAL.ink, 0.06), alpha(PAL.ink, 0.3), 2);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.beginPath(); ctx.ellipse(CX, CY, 8 * S, 5.2 * S, 0, 0, 2 * Math.PI); ctx.fill(); ctx.restore();

    /* each star from its start on the line across the disk, its path behind it */
    const losMax = 260 * Math.cos(PITCH);
    const drawn = STARS.map((s) => {
      const a = turned(s.r, f, myr), phi = s.phi0 + a, p = at(s.r, phi), v = vOf(s.r, f);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.32); ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath();
      const n = Math.max(2, Math.ceil(a / 0.04));
      for (let i = 0; i <= n; i++) { const q = at(s.r, s.phi0 + (a * i) / n); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
      ctx.stroke(); ctx.restore();
      const los = -v * Math.cos(phi) * Math.cos(PITCH), k = Math.min(1, Math.abs(los) / losMax);
      const col = F.mixColor(PAL.ink, F.fact(los > 0 ? BLUE : RED), k);
      return { s, p, v, col };
    });
    drawn.sort((a, b) => a.p[1] - b.p[1]).forEach(({ s, p, v, col }) => {
      dot(ctx, p[0], p[1], col, true, s.sun ? 9 : 7);
      if (s.sun) dot(ctx, p[0], p[1], PAL.ink, false, 15);
      hits.push({ x: p[0], y: p[1], r: 14, name: `${s.sun ? 'the Sun' : 'a star'}, ${s.r} thousand ly from the center, moving at ${fmt(v, 0)} km/s` });
    });

    /* the two sides, named as the book names them */
    text(ctx, 'blue shift', CX - 40 * S, CY + 140, F.fact(BLUE), { size: 20, align: 'center' });
    text(ctx, 'red shift', CX + 40 * S, CY + 140, F.fact(RED), { size: 20, align: 'center' });
    text(ctx, `t = ${fmt(myr, 0)} million years`, 30, 124, C('time'), { size: 20, align: 'left' });
    dot(ctx, 44, 640, PAL.ink, true, 7); dot(ctx, 44, 640, PAL.ink, false, 13);
    text(ctx, 'the Sun', 66, 640, PAL.ink, { size: 18, align: 'left' });

    /* v against r, fixed: r from 0 to 50 thousand ly, v from 0 to 300 km/s */
    const box = { l: 790, r: 1330, t: 190, b: 580 };
    const LUM = F.ref('luminous-curve'), ROT = F.ref('rotation-curve');
    line(ctx, 1010, 124, 1050, 124, LUM, 4); text(ctx, 'luminous matter alone', 1062, 124, PAL.ink, { size: 18, align: 'left' });
    line(ctx, 1010, 154, 1050, 154, ROT, 5); text(ctx, 'luminous matter and dark halo', 1062, 154, PAL.ink, { size: 18, align: 'left' });
    const { X, Y } = axes(ctx, box, [0, 50], [0, 300], { xl: 'r (thousand ly)', xc: C('position'), yl: 'v (km/s)', yc: C('velocity'), nx: 5, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, vLum, 0.2, EDGE, X, Y, LUM, 4, 160);
    curve(ctx, (r) => vOf(r, f), 0.2, EDGE, X, Y, ROT, 5, 160);
    const vs = vOf(SUN_R, f);
    dot(ctx, X(SUN_R), Y(vs), PAL.ink, true, 7); dot(ctx, X(SUN_R), Y(vs), PAL.ink, false, 13);
    text(ctx, 'Sun', X(SUN_R), Y(vs) + (vs > 150 ? 34 : -32), PAL.ink, { size: 18, align: 'center', bg: PAL.panel });
    dot(ctx, X(EDGE), Y(vl), LUM, true, 8);
    dot(ctx, X(EDGE), Y(ve), ROT, true, 9);

    ro.set(`\\krad = 5.0\\times10^{4}\\;\\text{ly}:\\quad \\kv = \\sqrt{\\dfrac{\\kM}{\\kM_{\\text{lum}}}}\\;\\kv_{\\text{lum}} = \\sqrt{${fmt(1 + f, 1)}}\\,(${fmt(vl, 0)}\\;\\text{km/s}) = ${fmt(ve, 0)}\\;\\text{km/s}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM · sim-curvature · still · mathematical 3D (rule 28.3)
   A disk of space of geodesic radius 1 whose Gaussian curvature is
   K = 4 (ρ̄/ρ_c − 1): above ρ_c a cap of a sphere of radius 1/√K (at
   ρ̄ = 2ρ_c it wraps 115° from its pole, more than a hemisphere), below it a
   saddle y = ½√−K (x² − z²), at ρ_c a plane. On it an equilateral triangle
   of circumradius 0.55; its angle A is that of a triangle of this
   circumradius on a surface of this constant curvature, cot(A/2) = √3 cos(√K R)
   above ρ_c and √3 cosh(√−K R) below, so the sum runs from 117° (ρ̄ = 0.05ρ_c)
   through 180° to 311° (2ρ_c). Its sides are drawn as arcs that meet at that
   angle, lifted onto the surface. Yaw free; pitch from 5° to 83°, so the
   surface is never seen from beneath. Without WebGL the same wires are
   projected on the canvas from a fixed view.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-curvature', hasGL ? 0 : 560);
  const rS = ctl(d.controls, { label: '\\krhobar', cls: 'density', min: 0.05, max: 2, step: 0.01, value: 0.4, unit: '× 10⁻²⁶ kg/m³', dec: 2,
    aria: 'the average density of the universe, in units of ten to the minus twenty-six kilograms per cubic meter',
    detents: [{ v: 0.1, label: '10%' }, { v: 0.4, label: '40%' }], specials: [{ at: 1, label: 'critical' }] });
  const ro = readout(d);

  const R0 = 0.55, KMAX = 4;
  const curvature = (x) => KMAX * (x - 1);
  /* the angle of an equilateral triangle of circumradius R0 on a surface of constant curvature K */
  function cornerAngle(K) {
    const c = K > 1e-9 ? Math.cos(Math.sqrt(K) * R0) : K < -1e-9 ? Math.cosh(Math.sqrt(-K) * R0) : 1;
    return 2 * Math.atan2(1, Math.sqrt(3) * c);
  }
  /* (u, w) in the disk to a point of the surface, y up */
  function surf(K, u, w) {
    if (K > 1e-9) {
      const R = 1 / Math.sqrt(K), s = Math.hypot(u, w), ph = Math.atan2(w, u), th = s / R;
      return [R * Math.sin(th) * Math.cos(ph), R * (Math.cos(th) - 1), R * Math.sin(th) * Math.sin(ph)];
    }
    if (K < -1e-9) return [u, 0.5 * Math.sqrt(-K) * (u * u - w * w), w];
    return [u, 0, w];
  }
  /* the wires and the triangle as point lists in the scene, centered on their height */
  function shape(x) {
    const K = curvature(x), A = cornerAngle(K), delta = (A - Math.PI / 3) / 2;
    const lift = K > 1e-9 ? -0.5 * (Math.cos(Math.sqrt(K)) - 1) / Math.sqrt(K) : 0;
    const P = (u, w, up = 0) => { const p = surf(K, u, w); return [p[0], p[1] + lift + up, p[2]]; };
    const rings = [0.2, 0.4, 0.6, 0.8, 1].map((s) => Array.from({ length: 97 }, (_, i) => { const a = (2 * Math.PI * i) / 96; return P(s * Math.cos(a), s * Math.sin(a)); }));
    const spokes = Array.from({ length: 16 }, (_, j) => { const a = (2 * Math.PI * j) / 16; return Array.from({ length: 31 }, (_, i) => P((i / 30) * Math.cos(a), (i / 30) * Math.sin(a))); });
    const vx = [90, 210, 330].map((g) => [R0 * Math.cos((g * Math.PI) / 180), R0 * Math.sin((g * Math.PI) / 180)]);
    /* side i from corner i to corner i + 1, bowed out (delta > 0) or in, meeting each corner at the angle A */
    const side2 = (i) => {
      const a = vx[i], b = vx[(i + 1) % 3], c = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const e = [(b[0] - a[0]) / c, (b[1] - a[1]) / c], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const n = m[0] * -e[1] + m[1] * e[0] > 0 ? [-e[1], e[0]] : [e[1], -e[0]];   /* away from the center */
      const rho = Math.abs(delta) > 1e-5 ? c / (2 * Math.sin(Math.abs(delta))) : 0;
      return Array.from({ length: 41 }, (_, i2) => {
        const xi = (i2 / 40 - 0.5) * c;
        const eta = rho ? Math.sign(delta) * (Math.sqrt(rho * rho - xi * xi) - rho * Math.cos(delta)) : 0;
        return [m[0] + e[0] * xi + n[0] * eta, m[1] + e[1] * xi + n[1] * eta];
      });
    };
    const sides2 = [0, 1, 2].map(side2);
    const sides = sides2.map((pts) => pts.map(([u, w]) => P(u, w, 0.004)));
    /* each corner's mark: an arc between the two sides leaving it */
    const marks = [0, 1, 2].map((i) => {
      const v = vx[i], out = sides2[i][2], inn = sides2[(i + 2) % 3][38];
      const a0 = Math.atan2(out[1] - v[1], out[0] - v[0]);
      let a1 = Math.atan2(inn[1] - v[1], inn[0] - v[0]);
      while (a1 - a0 > Math.PI) a1 -= 2 * Math.PI;
      while (a1 - a0 < -Math.PI) a1 += 2 * Math.PI;
      return Array.from({ length: 17 }, (_, j) => { const a = a0 + ((a1 - a0) * j) / 16; return P(v[0] + 0.12 * Math.cos(a), v[1] + 0.12 * Math.sin(a), 0.006); });
    });
    const corners = vx.map(([u, w]) => P(u, w, 0.004));
    const face = { K, lift };
    return { K, A, rings, spokes, sides, marks, corners, face, P };
  }
  const state = (x) => (Math.abs(x - 1) < 0.005 ? 'flat' : x < 1 ? 'open' : 'closed');
  const HEAD = {
    open: 'Open: space curves like a saddle and goes on without end.',
    flat: 'Flat: space has no curvature and goes on without end.',
    closed: 'Closed: space curves round like a sphere and closes on itself.',
  };
  const NAME = { open: 'space, open and negatively curved', flat: 'space, flat', closed: 'space, closed and positively curved' };

  let V = null, grp = null, sig = '';
  if (hasGL) {
    V = F.view3d(d.stage, { h: 560, dist: 5.0, tilt: 0.5, spin: 'idle', pitch: [0.09, 1.45], yaw: 'free', zoomMin: 0.6, zoomMax: 2.4,
      views: [{ label: 'from the side', yaw: 0.35, pitch: 0.12 }, { label: 'from above', yaw: 0, pitch: 1.45 }] });
    if (!V.scene) V = null; else { grp = V.part(0); grp.position.y = -0.3; }
  }

  function tube(g, pts, r, color) {
    const path = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
    const m = new THREE.Mesh(new THREE.TubeGeometry(path, Math.max(8, pts.length * 2), r, 8, false), new THREE.MeshBasicMaterial({ color: new THREE.Color(color) }));
    g.add(m); return m;
  }
  function build(x) {
    const key = [x.toFixed(2), PAL.ink, PAL.muted, PAL.soft, C('angle')].join('|');
    if (key === sig || !grp) return; sig = key;
    V.clear();
    const sh = shape(x), g = new THREE.Group(); grp.add(g);
    /* the face, a translucent sheet under the wires */
    const NS = 20, NA = 64, pos = [], idx = [];
    for (let i = 0; i <= NS; i++) for (let j = 0; j <= NA; j++) { const s = i / NS, a = (2 * Math.PI * j) / NA; pos.push(...sh.P(s * Math.cos(a), s * Math.sin(a))); }
    for (let i = 0; i < NS; i++) for (let j = 0; j < NA; j++) { const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, b, a + 1, a + 1, b, b + 1); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx);
    const sheet = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.soft), transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }));
    g.add(sheet); V.pickable(sheet, NAME[state(x)]);
    sh.rings.forEach((pts, i) => F.mesh.polyline(g, pts, i === 4 ? PAL.ink : PAL.muted));
    sh.spokes.forEach((pts) => F.mesh.polyline(g, pts, PAL.muted));
    sh.sides.forEach((pts) => V.pickable(tube(g, pts, 0.014, PAL.ink), 'a side of the triangle, the straightest path between its corners'));
    sh.marks.forEach((pts) => V.pickable(tube(g, pts, 0.018, C('angle')), `a corner of the triangle, ${fmt((sh.A * 180) / Math.PI, 0)}°`));
    sh.corners.forEach((p) => F.mesh.sphere(g, p, 0.03, PAL.ink));
  }

  /* the same wires from a fixed view, where there is no WebGL */
  function drawFlat(ctx, x) {
    const sh = shape(x), W = F.view({ yaw: 0.35, pitch: 0.5, dist: 2400, cx: 700, cy: 330 }), Sc = 230;
    const P = (p) => W.P([p[0] * Sc, p[1] * Sc, p[2] * Sc]);
    const poly = (pts, color, w) => { ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); pts.forEach((p, i) => { const q = P(p); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }); ctx.stroke(); ctx.restore(); };
    sh.rings.forEach((pts, i) => poly(pts, i === 4 ? PAL.ink : alpha(PAL.ink, 0.35), i === 4 ? 2.5 : 1.5));
    sh.spokes.forEach((pts) => poly(pts, alpha(PAL.ink, 0.35), 1.5));
    sh.sides.forEach((pts) => poly(pts, PAL.ink, 4));
    sh.marks.forEach((pts) => poly(pts, C('angle'), 3.5));
    sh.corners.forEach((p) => { const q = P(p); dot(ctx, q[0], q[1], PAL.ink, true, 6); });
  }

  function draw() {
    const x = rS.v, st = state(x), sum = (3 * cornerAngle(curvature(x)) * 180) / Math.PI;
    if (V) { build(x); V.headline(HEAD[st]); V.invalidate(); }
    else if (d.c) { const { ctx } = begin(d.c); topline(ctx, HEAD[st]); drawFlat(ctx, x); }
    const rel = st === 'flat' ? '=' : st === 'open' ? '<' : '>';
    const kind = st === 'flat' ? '\\text{flat}' : st === 'open' ? '\\text{open, negatively curved}' : '\\text{closed, positively curved}';
    const ang = st === 'flat' ? 'exactly 180°' : `${fmt(sum, 0)}°, ${st === 'open' ? 'less' : 'more'} than 180°`;
    ro.set(`\\krhobar = ${fmt(x, 2)}\\,\\krhoc ${rel} \\krhoc:\\quad ${kind}`, `The triangle’s angles add to ${ang}.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
