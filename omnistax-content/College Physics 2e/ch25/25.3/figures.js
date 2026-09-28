/* Figures for section 25.3 The Law of Refraction. The page binds velocity,
   position and time, which is what ch25/COLOR.md gives 25.3: the speed of light
   and the speeds in each medium, Michelson's distance, and his round-trip time
   and the period of his mirror. Every index of refraction and every angle is
   untyped and in ink, and light carries no wavelength here, so every ray is ink
   except the two paths of the fish tank, which F.cat tells apart. Only
   Michelson's mirror has a clock in it; the other two figures are still. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.3'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, cat, ctl, select, cycle, register, begin, line, arrow, dot, text, topline, label, hbracket, angleArc, solve } = F;
const sim = (id, H) => F.sim(root, id, H);

const DEG = Math.PI / 180;
const CLIGHT = 3.00e8;
const SUPS = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
const supOf = (e) => String(e).replace(/-/g, '\u2212').replace(/[0-9]/g, (c) => SUPS[+c]);
function sci(x, dp) {
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \u00D7 10' + supOf(e);
}
function sciTex(x, dp) {
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + '\\times 10^{' + e + '}';
}
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const dotp = (a, b) => a[0] * b[0] + a[1] * b[1];
const unit = (a) => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const reflect = (dv, n) => add(dv, n, -2 * dotp(dv, n));

function poly(ctx, pts, stroke, w, fill, dash) {
  ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.stroke(); }
  ctx.restore();
}
/* an eye seen from above or from the side, looking along the angle a (radians, on the page) */
function eye(ctx, x, y, a, s) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s);
  ctx.beginPath(); ctx.moveTo(-18, 0); ctx.quadraticCurveTo(0, -16, 18, 0); ctx.quadraticCurveTo(0, 16, -18, 0); ctx.closePath();
  ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.stroke();
  ctx.beginPath(); ctx.arc(4, 0, 6.5, 0, 2 * Math.PI); ctx.fillStyle = PAL.ink; ctx.fill();
  ctx.restore();
}

/* =====================================================================
   FIGURE 25.10 · sim-fish-tank · still · flat
   The book's inset: the tank seen from above, a square turned corner-on to
   the eye. A ray from the fish meets each front face at the one point where
   Snell's law sends it on to the eye, found by solving along the face; the
   image is where the ray the eye receives, carried back into the tank, meets
   the perpendicular to the face through the fish. Water is 1.333 and the thin
   glass walls are left out. Scene in canvas units; no physical scale.
===================================================================== */
(function () {
  const H = 700;
  const d = sim('sim-fish-tank', H);
  const across = ctl(d.controls, { label: '\\text{across}', cls: '', min: -0.8, max: 0.8, step: 0.05, value: 0, unit: '', dec: 2, aria: 'how far the fish is to either side of the tank' });
  const back = ctl(d.controls, { label: '\\text{back}', cls: '', min: 0.3, max: 0.8, step: 0.05, value: 0.6, unit: '', dec: 2, aria: 'how far the fish is back from the corner nearest the eye' });
  const NW = 1.333, NA = 1.00;
  const CX = 700, NEAR = 520, HALF = 175;             /* the tank's near corner, and its half diagonal */
  const TOP = NEAR - 2 * HALF, MID = NEAR - HALF;
  const P0 = [CX, NEAR], PL = [CX - HALF, MID], PR = [CX + HALF, MID], PF = [CX, TOP];
  const E = [CX, 655];
  const faces = [
    { a: P0, e: unit(sub(PL, P0)), n: unit([-1, 1]), len: Math.hypot(HALF, HALF) },
    { a: P0, e: unit(sub(PR, P0)), n: unit([1, 1]), len: Math.hypot(HALF, HALF) },
  ];
  function fish(ctx, p, color, ghost) {
    ctx.save(); ctx.translate(p[0], p[1]);
    ctx.beginPath(); ctx.ellipse(0, 0, 11, 26, 0, 0, 2 * Math.PI);
    ctx.moveTo(0, 22); ctx.lineTo(-11, 40); ctx.lineTo(11, 40); ctx.closePath();
    if (ghost) { ctx.setLineDash([5, 5]); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.stroke(); }
    else { ctx.fillStyle = color; ctx.fill(); }
    ctx.restore();
  }
  function path(F0, face) {
    const at = (q) => add(face.a, face.e, q);
    const g = (q) => { const Q = at(q); return NW * dotp(unit(sub(Q, F0)), face.e) - NA * dotp(unit(sub(E, Q)), face.e); };
    const q = solve(g, 1, face.len - 1);
    if (q === null) return null;
    const Q = at(q), dw = unit(sub(Q, F0)), da = unit(sub(E, Q));
    /* Q − s·da = F0 + t·n, solved for s */
    const r = sub(Q, F0), det = -da[0] * -face.n[1] + face.n[0] * da[1];
    const s = (r[0] * -face.n[1] + face.n[0] * r[1]) / det;
    const G = add(Q, da, -s);
    return { Q, G, tw: Math.asin(Math.abs(dotp(dw, face.e))) / DEG, ta: Math.asin(Math.abs(dotp(da, face.e))) / DEG };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const y = NEAR - back.v * 2 * HALF, hw = HALF - Math.abs(y - MID);
    const F0 = [CX + across.v * hw * 0.8, y];
    poly(ctx, [P0, PR, PF, PL], PAL.ink, 3, alpha(PAL.ink, 0.06));
    const paths = faces.map((f) => path(F0, f));
    paths.forEach((p, i) => {
      if (!p) return;
      const col = cat(i), f = faces[i];
      line(ctx, p.Q[0] - f.n[0] * 70, p.Q[1] - f.n[1] * 70, p.Q[0] + f.n[0] * 70, p.Q[1] + f.n[1] * 70, alpha(PAL.ink, 0.35), 2, [6, 6]);
      line(ctx, p.Q[0], p.Q[1], p.G[0], p.G[1], alpha(col, 0.8), 2.5, [8, 7]);
      fish(ctx, p.G, alpha(col, 0.9), true);
      line(ctx, F0[0], F0[1], p.Q[0], p.Q[1], col, 4);
      const m = [(p.Q[0] + E[0]) / 2, (p.Q[1] + E[1]) / 2];
      line(ctx, p.Q[0], p.Q[1], E[0], E[1], col, 4);
      arrow(ctx, m[0] - (E[0] - p.Q[0]) * 0.08, m[1] - (E[1] - p.Q[1]) * 0.08, m[0] + (E[0] - p.Q[0]) * 0.08, m[1] + (E[1] - p.Q[1]) * 0.08, col, 4);
      label(ctx, 'image', p.G[0], p.G[1] - 30, { side: i ? 'right' : 'left', color: col, gap: 26, size: 20 });
    });
    fish(ctx, F0, PAL.ink, false);
    label(ctx, 'fish', F0[0], F0[1] - 30, { side: 'above', size: 20, gap: 14 });
    eye(ctx, E[0], E[1], -Math.PI / 2, 1.1);
    label(ctx, 'observer', E[0] + 24, E[1], { side: 'right', size: 20, gap: 12 });
    text(ctx, 'water, n = 1.333', PR[0] + 20, TOP + 90, PAL.muted, { size: 19, align: 'left' });
    text(ctx, 'air, n = 1.00', 180, 620, PAL.muted, { size: 19, align: 'left' });
    topline(ctx, 'Light from the fish leaves through both front faces and bends away from the perpendicular at each, so the observer sees the fish in two places.');
    const a = paths[0], b = paths[1];
    if (!a || !b) return;
    tex(d.readout, `n_1\\sin\\theta_1 = (1.333)\\sin ${fmt(a.tw, 1)}^\\circ = ${fmt(NW * Math.sin(a.tw * DEG), 3)} = (1.00)\\sin ${fmt(a.ta, 1)}^\\circ = n_2\\sin\\theta_2`);
    d.readout.appendChild(F.el('small', null, `That is the path through the left face. Through the right face the ray meets the perpendicular at ${fmt(b.tw, 1)}° in the water and leaves at ${fmt(b.ta, 1)}° in the air.`));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.11 · sim-michelson · moving · flat
   The book's plan view. A flash leaves when a face of the eight-sided mirror
   sends the source's light toward the stationary mirror, and it travels out
   and back at a steady drawn speed while the mirror turns at the rate the
   period sets; the model time runs from just before the flash leaves to just
   after it returns. The returning ray is traced against the mirror as it
   stands when the flash arrives, so it reaches the observer only when the
   mirror has turned a whole number of faces. The gap is not to scale.
===================================================================== */
(function () {
  const H = 700;
  const d = sim('sim-michelson', H);
  const dS = ctl(d.controls, { label: '\\kd', cls: 'position', min: 10, max: 50, step: 0.5, value: 35, unit: 'km', dec: 1, aria: 'the distance to the stationary mirror' });
  const TS = ctl(d.controls, { label: '\\kT', cls: 'time', min: 1, max: 4, step: 0.001, value: (16 * 35e3 / CLIGHT) * 1e3, unit: 'ms', dec: 3, aria: 'the time the rotating mirror takes for one turn',
    specials: [{ at: () => (16 * dS.v * 1e3 / CLIGHT) * 1e3, label: 'one face' }, { at: () => (32 * dS.v * 1e3 / CLIGHT) * 1e3, label: 'two faces' }] });
  const U0 = -0.25, U1 = 1.45;
  const cy = cycle(() => U1 - U0, 1.2);
  const O = [250, 430], R = 72, AP = R * Math.cos(Math.PI / 8);
  const c45 = Math.SQRT1_2;
  const A = [O[0] + AP * c45, O[1] + AP * c45];        /* where the source's beam meets the lower right face */
  const B0 = [O[0] + AP * c45, O[1] - AP * c45];       /* where the returning beam meets the upper right face */
  const SRC = [A[0], 640];
  const MX = 1230, M = [MX, A[1]];
  const dBack = unit(sub(B0, M));
  const EYE = add(B0, reflect(dBack, [c45, -c45]), 200);
  const mirrorN = unit(sub(dBack, [1, 0]));
  const mirrorT = [-mirrorN[1], mirrorN[0]];
  const verts = (a) => Array.from({ length: 8 }, (_, k) => {
    const t = (22.5 + 45 * k) * DEG + a;
    return [O[0] + R * Math.cos(t), O[1] - R * Math.sin(t)];
  });
  /* the first face a ray from p along dv meets, and the reflected direction */
  function hit(p, dv, a) {
    const vs = verts(a); let best = null;
    for (let k = 0; k < 8; k++) {
      const s0 = vs[k], s1 = vs[(k + 1) % 8], e = sub(s1, s0);
      const den = dv[0] * -e[1] + e[0] * dv[1];
      if (Math.abs(den) < 1e-9) continue;
      const r = sub(s0, p);
      const t = (r[0] * -e[1] + e[0] * r[1]) / den, u = (dv[0] * r[1] - dv[1] * r[0]) / den;
      if (t > 1e-6 && u >= 0 && u <= 1 && (!best || t < best.t)) {
        let n = unit([e[1], -e[0]]);
        if (dotp(n, sub(s0, O)) < 0) n = [-n[0], -n[1]];
        best = { t, P: add(p, dv, t), r: reflect(dv, n) };
      }
    }
    return best;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const TC = C('time'), XC = C('position');
    const trt = 2 * dS.v * 1e3 / CLIGHT;             /* seconds */
    const T = TS.v * 1e-3;
    const u = U0 + cy.now();
    const spin = (uu) => 2 * Math.PI * uu * trt / T;
    const a = spin(u), aRet = spin(1);
    const turned = aRet / DEG, faces = Math.round(turned / 45), off = turned - 45 * faces;
    const seen = faces >= 1 && Math.abs(off) < 0.25;
    const ret = hit(M, dBack, aRet);
    const outLen = MX - A[0], backLen = Math.hypot(M[0] - B0[0], M[1] - B0[1]), total = outLen + backLen;
    const trail = alpha(PAL.ink, 0.35);
    const sd = [0, -1];
    const srcHit = hit(SRC, sd, a);
    line(ctx, SRC[0], SRC[1], srcHit ? srcHit.P[0] : A[0], srcHit ? srcHit.P[1] : A[1], PAL.ink, 3);
    if (srcHit) line(ctx, srcHit.P[0], srcHit.P[1], srcHit.P[0] + srcHit.r[0] * 130, srcHit.P[1] + srcHit.r[1] * 130, alpha(PAL.ink, 0.45), 3);
    const s = (u / 1) * total;
    if (u > 0) {
      const done = Math.min(s, total);
      const outEnd = Math.min(done, outLen);
      line(ctx, A[0], A[1], A[0] + outEnd, A[1], trail, 2.5, [10, 8]);
      if (done > outLen) { const k = (done - outLen) / backLen; line(ctx, M[0], M[1], M[0] + (B0[0] - M[0]) * k, M[1] + (B0[1] - M[1]) * k, trail, 2.5, [10, 8]); }
      const at = (x) => x <= outLen ? [A[0] + x, A[1]] : x <= total ? add(M, dBack, x - outLen) : null;
      if (s <= total) {
        const p1 = at(s), p0 = at(Math.max(0, s - 70));
        line(ctx, p0[0], p0[1], p1[0], p1[1], PAL.ink, 6);
      } else if (ret) {
        const dd = s - total, P = ret.P;
        line(ctx, M[0], M[1], P[0], P[1], trail, 2.5, [10, 8]);
        const len = Math.min(dd, 260);
        line(ctx, P[0], P[1], P[0] + ret.r[0] * len, P[1] + ret.r[1] * len, seen ? PAL.ink : alpha(PAL.ink, 0.6), 5);
      }
    }
    poly(ctx, verts(a), PAL.ink, 4, alpha(PAL.ink, 0.08));
    dot(ctx, O[0], O[1], PAL.ink, true, 5);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(O[0], O[1], 36, -0.4, -Math.PI * 1.6, true); ctx.stroke(); ctx.restore();
    const tip = [O[0] + 36 * Math.cos(-Math.PI * 1.6), O[1] + 36 * Math.sin(-Math.PI * 1.6)];
    arrow(ctx, tip[0] + 10, tip[1] + 6, tip[0], tip[1] - 2, alpha(PAL.ink, 0.6), 3);
    const mh = 70;
    line(ctx, MX + mirrorT[0] * mh, M[1] + mirrorT[1] * mh, MX - mirrorT[0] * mh, M[1] - mirrorT[1] * mh, PAL.ink, 7);
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.fillRect(SRC[0] - 22, SRC[1] - 4, 44, 40); ctx.restore();
    dot(ctx, SRC[0], SRC[1] + 16, PAL.panel, true, 10);
    eye(ctx, EYE[0], EYE[1], Math.atan2(B0[1] - EYE[1], B0[0] - EYE[0]), 1.1);
    label(ctx, 'light source', SRC[0] + 30, SRC[1] + 16, { side: 'right', size: 20, gap: 10 });
    label(ctx, 'observer', EYE[0] + 26, EYE[1], { side: 'right', size: 20, gap: 10 });
    label(ctx, 'rotating mirror', O[0] - R - 6, O[1] + 40, { side: 'left', size: 20, gap: 12 });
    label(ctx, 'stationary mirror', MX, M[1] - mh - 8, { side: 'above', size: 20, gap: 16 });
    hbracket(ctx, A[0], MX, 600, XC, `d = ${fmt(dS.v, 1)} km`);
    const tNow = Math.max(0, Math.min(u, 1)) * trt;
    text(ctx, `t = ${fmt(tNow * 1e3, 3)} ms`, 700, A[1] + 44, TC, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    if (u > 1.05 && ret) text(ctx, seen ? 'seen' : 'missed', ret.P[0] + ret.r[0] * 150 + 20, ret.P[1] + ret.r[1] * 150, seen ? PAL.ink : PAL.muted, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    const tms = fmt(trt * 1e3, 3);
    const names = ['', 'one eighth', 'two eighths'];
    topline(ctx, seen
      ? `The flash is back after ${tms} ms, just as the mirror has turned ${names[faces] || faces + ' eighths'} of a turn, so the next face sends it to the observer.`
      : `The flash is back after ${tms} ms, but by then the mirror has turned ${fmt(turned, 1)}°, not a whole number of faces, so the light misses the observer.`);
    if (!d.ro) d.ro = F.readout(d);
    const dTex = `${fmt(dS.v, 1)}\\ \\text{km}`;
    if (seen) {
      const t = faces * T / 8;
      d.ro.set(`\\mk{c}{\\kc} = \\frac{\\mk{d}{2\\kd}}{\\mk{t}{\\kt}} = \\frac{2(${dTex})}{${fmt(t * 1e3, 3)}\\ \\text{ms}} = ${sciTex(2 * dS.v * 1e3 / t, 2)}\\ \\text{m/s}`,
        `The mirror turns once every ${fmt(TS.v, 3)} ms, so ${faces === 1 ? 'one eighth' : 'two eighths'} of a turn takes ${fmt(t * 1e3, 3)} ms, and that is the time the light took for the round trip.`, { form: true });
    } else {
      d.ro.set(`\\mk{t}{\\kt} = \\frac{\\mk{d}{2\\kd}}{\\mk{c}{\\kc}} = \\frac{2(${dTex})}{3.00\\times 10^{8}\\ \\text{m/s}} = ${tms}\\ \\text{ms}`,
        `Turning once every ${fmt(TS.v, 3)} ms, the mirror turns ${fmt(turned, 1)}° in that time; it has to turn 45.0°, one face, or a whole number of faces for the light to reach the observer.`, { form: false });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (U1 - U0) / 5), draw });
})();

/* =====================================================================
   FIGURE 25.12 · sim-refraction · still · flat
   One beam crossing a flat surface, with its wavefronts drawn at equal times:
   a front is the set of points of equal phase n·(distance along the ray), so
   it is continuous across the surface wherever Snell's law holds and kinks
   there, which is the lawn mower's axle. The heavy front with its two wheels
   is the one crossing the surface a quarter of the beam from its centre.
   Media from Table 25.1, air taken as 1.00 as the examples take it.
===================================================================== */
(function () {
  const H = 650;
  const d = sim('sim-refraction', H);
  const MEDIA = [
    { value: 'air', label: 'air', n: 1.00 }, { value: 'water', label: 'water', n: 1.333 }, { value: 'ethanol', label: 'ethanol', n: 1.361 },
    { value: 'glycerine', label: 'glycerine', n: 1.473 }, { value: 'crown', label: 'crown glass', n: 1.52 }, { value: 'flint', label: 'flint glass', n: 1.66 },
    { value: 'zircon', label: 'zircon', n: 1.923 }, { value: 'diamond', label: 'diamond', n: 2.419 },
  ];
  const byV = (v) => MEDIA.find((m) => m.value === v);
  const m1 = select(d.controls, { label: '\\text{medium 1}', options: MEDIA.map(({ value, label }) => ({ value, label })), value: 'air', aria: 'the medium the light starts in' });
  const m2 = select(d.controls, { label: '\\text{medium 2}', options: MEDIA.map(({ value, label }) => ({ value, label })), value: 'water', aria: 'the medium the light crosses into' });
  const th = ctl(d.controls, { label: '\\theta_1', cls: '', min: 0, max: 80, step: 0.5, value: 30, unit: '°', dec: 1, aria: 'the angle of incidence' });
  const YI = 360, O = [640, YI], LEN = 250, W = 110, STEP = 58;
  const nStr = (n) => (n === 1 ? '1.00' : String(n));
  function front(ctx, k, n, phi, w, keep, color, lw) {
    const perp = [k[1], -k[0]];
    let a = add(add(O, k, phi / n), perp, -w / 2), b = add(add(O, k, phi / n), perp, w / 2);
    const ina = keep(a[1]), inb = keep(b[1]);
    if (!ina && !inb) return null;
    if (ina !== inb) { const t = (YI - a[1]) / (b[1] - a[1]), c = [a[0] + (b[0] - a[0]) * t, YI]; if (ina) b = c; else a = c; }
    line(ctx, a[0], a[1], b[0], b[1], color, lw);
    return [a, b];
  }
  function draw() {
    const { ctx } = begin(d.c);
    const VC = C('velocity');
    const A = byV(m1.value), B = byV(m2.value), n1 = A.n, n2 = B.n, t1 = th.v * DEG;
    const s2 = n1 * Math.sin(t1) / n2, crosses = s2 <= 1, t2 = crosses ? Math.asin(s2) : 0;
    const k1 = [Math.sin(t1), Math.cos(t1)], k2 = [Math.sin(t2), Math.cos(t2)];
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(0, YI, 1400, H - YI); ctx.restore();
    line(ctx, 0, YI, 1400, YI, PAL.ink, 3);
    line(ctx, O[0], 140, O[0], H - 30, alpha(PAL.ink, 0.45), 2, [8, 8]);
    const up = (y) => y <= YI + 0.01, down = (y) => y >= YI - 0.01;
    const W1 = Math.min(W, 240 * Math.cos(t1)), w2 = W1 * Math.cos(t2) / Math.cos(t1);
    const faint = alpha(PAL.ink, 0.3);
    for (let m = -6; m <= 6; m++) {
      const phi = m * STEP;
      if (phi / n1 > -LEN - 1 && phi <= 0.5 * STEP * n1) front(ctx, k1, n1, phi, W1, up, faint, 2);
      if (crosses && phi / n2 < LEN && phi >= -0.5 * STEP * n2) front(ctx, k2, n2, phi, w2, down, faint, 2);
    }
    const src = add(O, k1, -LEN);
    line(ctx, src[0], src[1], O[0], O[1], PAL.ink, 4);
    const mid1 = add(O, k1, -LEN * 0.55);
    arrow(ctx, mid1[0] - k1[0] * 14, mid1[1] - k1[1] * 14, mid1[0] + k1[0] * 14, mid1[1] + k1[1] * 14, PAL.ink, 4);
    let tail;
    if (crosses) {
      const phiA = -(W1 / 4) * n1 * Math.tan(t1);
      const p1 = front(ctx, k1, n1, phiA, W1, up, PAL.ink, 4);
      const p2 = front(ctx, k2, n2, phiA, w2, down, PAL.ink, 4);
      [p1 && p1[0], p1 && p1[1], p2 && p2[0], p2 && p2[1]].filter((p) => p && Math.abs(p[1] - YI) > 1).forEach((p) => dot(ctx, p[0], p[1], PAL.ink, true, 8));
      tail = add(O, k2, LEN);
      arrow(ctx, O[0], O[1], tail[0], tail[1], PAL.ink, 4);
      angleArc(ctx, { x: O[0], y: O[1] }, 70, -Math.PI / 2, -Math.PI / 2 + t2, '\u03B8_2');
    } else {
      tail = [O[0] + k1[0] * LEN, O[1] - k1[1] * LEN];
      arrow(ctx, O[0], O[1], tail[0], tail[1], PAL.ink, 4);
    }
    if (t1 > 0.5 * DEG) angleArc(ctx, { x: O[0], y: O[1] }, 70, Math.PI / 2, Math.PI / 2 + t1, '\u03B8_1');
    label(ctx, 'perpendicular', O[0], 140, { side: 'above', size: 18, gap: 16, weight: 400, color: PAL.muted });
    text(ctx, `medium 1: ${A.label}, n_1 = ${nStr(n1)}`, 40, YI - 34, PAL.ink, { size: 21, align: 'left', bg: PAL.panel });
    text(ctx, `medium 2: ${B.label}, n_2 = ${nStr(n2)}`, 40, YI + 34, PAL.ink, { size: 21, align: 'left', bg: PAL.panel });
    const v1 = CLIGHT / n1, v2 = CLIGHT / n2;
    text(ctx, `v_1 = ${sci(v1, 2)} m/s`, 1360, YI - 34, VC, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, `v_2 = ${sci(v2, 2)} m/s`, 1360, YI + 34, VC, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    const sp = (v) => fmt(v / 1e8, 2);
    let head;
    if (!crosses) head = `Going from ${A.label} toward ${B.label} at ${fmt(th.v, 1)}°, no angle in the ${B.label} satisfies the law of refraction, so no light crosses and all of it is reflected.`;
    else if (th.v < 0.25) head = `Light that meets the surface along the perpendicular changes speed but not direction.`;
    else if (n2 > n1) head = `Going from ${A.label} into ${B.label}, light slows from ${sp(v1)} to ${sp(v2)} \u00D7 10\u2078 m/s and bends toward the perpendicular.`;
    else if (n2 < n1) head = `Going from ${A.label} into ${B.label}, light speeds up from ${sp(v1)} to ${sp(v2)} \u00D7 10\u2078 m/s and bends away from the perpendicular.`;
    else head = `Both media have the same index of refraction, so the light keeps its speed and goes straight on.`;
    topline(ctx, head);
    const lhs = n1 * Math.sin(t1);
    if (crosses) {
      tex(d.readout, `n_1\\sin\\theta_1 = (${nStr(n1)})\\sin ${fmt(th.v, 1)}^\\circ = ${fmt(lhs, 3)} = (${nStr(n2)})\\sin ${fmt(t2 / DEG, 1)}^\\circ = n_2\\sin\\theta_2`);
      d.readout.appendChild(F.el('small', null, `In ${A.label} light travels at v₁ = c/n₁ = ${sci(v1, 2)} m/s and in ${B.label} at v₂ = c/n₂ = ${sci(v2, 2)} m/s; the refracted angle is ${fmt(t2 / DEG, 1)}°.`));
    } else {
      tex(d.readout, `n_1\\sin\\theta_1 = (${nStr(n1)})\\sin ${fmt(th.v, 1)}^\\circ = ${fmt(lhs, 3)} > n_2 = ${nStr(n2)}`);
      d.readout.appendChild(F.el('small', null, `Since sin θ₂ can be no greater than 1, the right side of the law of refraction can be no greater than ${nStr(n2)}.`));
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
