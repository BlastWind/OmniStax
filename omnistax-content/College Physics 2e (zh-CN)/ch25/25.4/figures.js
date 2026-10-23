/* Figures for section 25.4 Total Internal Reflection. Every angle wears the
   angle hue; the index of refraction is a rating and stays in ink, and no ray
   here carries a wavelength. A ray is drawn in ink with its brightness as its
   opacity, the perpendiculars dashed, and a denser medium under a faint neutral
   panel. The two media of Figure 25.13, the fiber, its cladding and the fiber
   touching it, the two ends of the bundle, the two prisms and the cut gem are the
   section's referents and wear F.ref on their outlines and names. Every
   figure is still: a ray diagram is a set of paths and has no clock, so each
   registers no cycle, takes no transport and redraws on its controls alone. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, select, register, begin, line, arrow, text, topline, label, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);

const RAD = Math.PI / 180;
const deg = (a) => a / RAD;
const N_AIR = 1.00;
/* indices of refraction from Table 25.1 */
const IDX = { air: 1.00, water: 1.333, polystyrene: 1.49, crown: 1.52, flint: 1.66, zircon: 1.923, cz: 2.17, diamond: 2.419 };
const critical = (n1, n2) => (n1 > n2 ? deg(Math.asin(n2 / n1)) : null);
/* an index as Table 25.1 prints it */
const nStr = (n) => (n === 1 ? '1.00' : String(n));

/* the fraction of unpolarized light reflected where a ray meets a boundary from
   index n1 into n2 with cos i = ci; 1 beyond the critical angle */
function fresnel(n1, n2, ci) {
  const s2 = (n1 / n2) ** 2 * (1 - ci * ci);
  if (s2 >= 1) return 1;
  const ct = Math.sqrt(1 - s2);
  const rs = ((n1 * ci - n2 * ct) / (n1 * ci + n2 * ct)) ** 2, rp = ((n1 * ct - n2 * ci) / (n1 * ct + n2 * ci)) ** 2;
  return (rs + rp) / 2;
}

/* a ray drawn with its brightness as opacity, an arrowhead a little past its middle */
function ray(ctx, a, b, I, head) {
  const col = alpha(PAL.ink, 0.14 + 0.86 * Math.min(1, I)), w = 2 + 2 * Math.min(1, I);
  line(ctx, a[0], a[1], b[0], b[1], col, w);
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (head === false || L < 70 || I < 0.25) return;
  const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, m = Math.min(0.55 * L, L - 30);
  arrow(ctx, a[0] + ux * (m - 20), a[1] + uy * (m - 20), a[0] + ux * (m + 6), a[1] + uy * (m + 6), col, w);
}
function fillPoly(ctx, pts, fill, stroke, w) {
  ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w || 2.5; ctx.stroke(); }
  ctx.restore();
}
/* the angle of a direction on the page, counterclockwise from +x with y up, as angleArc takes it */
const pageAngle = (v) => Math.atan2(-v[1], v[0]);
function arcBetween(ctx, q, r, u, v, s, color) {
  const a0 = pageAngle(u); let a1 = pageAngle(v);
  while (a1 - a0 > Math.PI) a1 -= 2 * Math.PI;
  while (a0 - a1 > Math.PI) a1 += 2 * Math.PI;
  angleArc(ctx, { x: q[0], y: q[1] }, r, a0, a1, s, undefined, color ?? C('angle'));
}

/* ---------- a ray traced through polygons of glass ----------
   Each polygon has an index and a tag per edge; outside every polygon is the
   surround. At each boundary the ray splits into a reflected and a transmitted
   ray by the Fresnel fractions (all reflected beyond the critical angle), and
   every branch brighter than a twentieth of the incoming light is followed. */
function inside(pts, q) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if ((yi > q[1]) !== (yj > q[1]) && q[0] < ((xj - xi) * (q[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function nearest(polys, p, d) {
  let best = null;
  polys.forEach((P, pi) => P.pts.forEach((a, i) => {
    const b = P.pts[(i + 1) % P.pts.length], ex = b[0] - a[0], ey = b[1] - a[1];
    const den = d[0] * ey - d[1] * ex; if (Math.abs(den) < 1e-12) return;
    const t = ((a[0] - p[0]) * ey - (a[1] - p[1]) * ex) / den, s = ((a[0] - p[0]) * d[1] - (a[1] - p[1]) * d[0]) / den;
    if (t < 1e-4 || s < -1e-9 || s > 1 + 1e-9 || (best && t >= best.t)) return;
    const L = Math.hypot(ex, ey);
    best = { t, q: [p[0] + d[0] * t, p[1] + d[1] * t], nx: -ey / L, ny: ex / L, tag: P.tags ? P.tags[i] : '', poly: pi };
  }));
  return best;
}
function trace(polys, n0, p0, d0, cap, floor = 0.05) {
  const segs = [], hits = [], stack = [{ p: p0, d: d0, I: 1, main: true }];
  const where = (q) => polys.findIndex((P) => inside(P.pts, q));
  const idx = (m) => (m < 0 ? n0 : polys[m].n);
  while (stack.length && segs.length < 600) {
    let { p, d, I, main } = stack.pop();
    let cur = where([p[0] + d[0] * 0.6, p[1] + d[1] * 0.6]);
    for (let k = 0; k < 90 && I > floor; k++) {
      const h = nearest(polys, p, d);
      if (!h) { const L = cur < 0 ? cap : 2000; segs.push({ a: p, b: [p[0] + d[0] * L, p[1] + d[1] * L], I, main, out: true }); break; }
      segs.push({ a: p, b: h.q, I, main });
      const nxt = where([h.q[0] + d[0] * 0.6, h.q[1] + d[1] * 0.6]), n1 = idx(cur), n2 = idx(nxt);
      if (Math.abs(n1 - n2) < 1e-9) { p = [h.q[0] + d[0] * 0.01, h.q[1] + d[1] * 0.01]; cur = nxt; continue; }
      let nx = h.nx, ny = h.ny, ci = -(d[0] * nx + d[1] * ny);
      if (ci < 0) { nx = -nx; ny = -ny; ci = -ci; }
      ci = Math.min(1, ci);
      const R = fresnel(n1, n2, ci), refl = [d[0] + 2 * ci * nx, d[1] + 2 * ci * ny];
      const r = n1 / n2, s = r * Math.sqrt(1 - ci * ci);
      const tr = s < 1 ? [r * d[0] + (r * ci - Math.sqrt(1 - s * s)) * nx, r * d[1] + (r * ci - Math.sqrt(1 - s * s)) * ny] : null;
      hits.push({ q: h.q, theta: deg(Math.acos(ci)), total: !tr, tag: h.tag, poly: h.poly, from: cur, to: nxt, nrm: [nx, ny], d, I, main });
      /* the brighter branch keeps the name of the main ray */
      const trMain = main && tr && 1 - R >= R;
      if (tr && I * (1 - R) > floor) stack.push({ p: [h.q[0] + tr[0] * 0.01, h.q[1] + tr[1] * 0.01], d: tr, I: I * (1 - R), main: trMain });
      d = refl; I *= R; main = main && !trMain;
      p = [h.q[0] + d[0] * 0.01, h.q[1] + d[1] * 0.01];
    }
  }
  return { segs, hits };
}
function drawTrace(ctx, tr) {
  ctx.save(); ctx.beginPath(); ctx.rect(0, 96, 1400, 2000); ctx.clip();
  tr.segs.filter((s) => s.I > 0.04).sort((a, b) => a.I - b.I).forEach((s) => ray(ctx, s.a, s.b, s.I));
  ctx.restore();
}

/* =====================================================================
   FIGURE 25.13 · sim-critical-angle · still · flat (root rule 28.1)
   The book's three panels are three positions of one slider: the refracted ray
   swings away from the perpendicular, lies along the surface at the critical
   angle, and is gone beyond it. The brightness of the reflected and refracted
   rays follows the Fresnel fractions, so the reflected ray, faint at first,
   takes all the light past the critical angle. The critical angle is a dashed
   circle on the slider for the pair chosen, and air into water has none.
===================================================================== */
(function () {
  const PAIRS = {
    poly: { n1: IDX.polystyrene, n2: IDX.air, m1: '聚苯乙烯', m2: '空气' },
    water: { n1: IDX.water, n2: IDX.air, m1: '水', m2: '空气' },
    diamond: { n1: IDX.diamond, n2: IDX.air, m1: '金刚石', m2: '空气' },
    flint: { n1: IDX.flint, n2: IDX.crown, m1: '火石玻璃', m2: '冕牌玻璃' },
    airwater: { n1: IDX.air, n2: IDX.water, m1: '空气', m2: '水' },
  };
  const d = sim('sim-critical-angle', 600);
  const pick = select(d.controls, { label: '\\text{介质}', value: 'poly', aria: '光线所在的介质与界面另一侧的介质', options: [
    { value: 'poly', label: '聚苯乙烯到空气' }, { value: 'water', label: '水到空气' }, { value: 'diamond', label: '金刚石到空气' },
    { value: 'flint', label: '火石玻璃到冕牌玻璃' }, { value: 'airwater', label: '空气到水' }] });
  const th = ctl(d.controls, { label: '\\kthetaone', cls: 'angle', min: 0, max: 89, step: 0.1, value: 30, unit: '°', dec: 1, aria: '入射角',
    specials: [{ at: () => critical(PAIRS[pick.value].n1, PAIRS[pick.value].n2), label: 'θc' }] });
  const ro = F.readout(d);
  const X0 = 700, Y0 = 330, L = 300;

  function draw() {
    const P = PAIRS[pick.value], t1 = th.v * RAD, tc = critical(P.n1, P.n2);
    const atC = tc !== null && Math.abs(th.v - tc) < 0.051;
    const s2 = (P.n1 / P.n2) * Math.sin(t1), tir = !atC && s2 > 1;
    const t2 = atC ? Math.PI / 2 : tir ? null : Math.asin(Math.min(1, s2));
    const R = atC ? 1 : fresnel(P.n1, P.n2, Math.cos(t1));
    const { ctx } = begin(d.c);
    ctx.fillStyle = alpha(PAL.ink, P.n1 > P.n2 ? 0.07 : 0.03); ctx.fillRect(40, Y0, 1320, 250);
    ctx.fillStyle = alpha(PAL.ink, P.n1 > P.n2 ? 0.03 : 0.07); ctx.fillRect(40, 100, 1320, Y0 - 100);
    line(ctx, 40, Y0, 1360, Y0, PAL.muted, 3);
    line(ctx, X0, 110, X0, 570, alpha(PAL.ink, 0.4), 2, [10, 10]);
    const n1s = nStr(P.n1), n2s = nStr(P.n2);
    text(ctx, `介质 2：${P.m2}   n_2 = ${n2s}`, 70, 130, F.ref('medium-2'), { size: 22, align: 'left' });
    text(ctx, `介质 1：${P.m1}   n_1 = ${n1s}`, 70, 552, F.ref('medium-1'), { size: 22, align: 'left' });
    const src = [X0 - L * Math.sin(t1), Y0 + L * Math.cos(t1)];
    const rfl = [X0 + L * Math.sin(t1), Y0 + L * Math.cos(t1)];
    ray(ctx, [X0, Y0], rfl, tir ? 1 : Math.max(R, 0.02));
    if (t2 !== null) ray(ctx, [X0, Y0], [X0 + L * Math.sin(t2), Y0 - L * Math.cos(t2)], atC ? 0.35 : 1 - R);
    ray(ctx, src, [X0, Y0], 1);
    const dn = [0, 1], back = [-Math.sin(t1), Math.cos(t1)];
    if (th.v > 0.5) arcBetween(ctx, [X0, Y0], 86, dn, back, tir || atC ? (atC ? 'θ_c' : 'θ_1') : 'θ_1');
    if (tir && th.v > 0.5) arcBetween(ctx, [X0, Y0], 86, dn, [Math.sin(t1), Math.cos(t1)], 'θ_1');
    if (t2 !== null && t2 > 0.01) arcBetween(ctx, [X0, Y0], 86, [0, -1], [Math.sin(t2), -Math.cos(t2)], atC ? 'θ_2 = 90°' : 'θ_2');
    if (atC) {
      topline(ctx, `在 ${fmt(tc, 1)}° 的临界角处，折射光线沿着界面传播。`);
      ro.set(`\\mk{tc}{\\kthetac} = \\sin^{-1}(\\mk{n2}{n_2}/\\mk{n1}{n_1}) = \\sin^{-1}(\\mk{v2}{${n2s}}/\\mk{v1}{${n1s}}) = \\mk{r}{${fmt(tc, 1)}^\\circ}`,
        `在这个入射角处，折射角为 90°，入射角再大，就根本没有折射角了。`, { form: 'crit' });
    } else if (tir) {
      topline(ctx, `在 ${fmt(th.v, 1)}° 时，${P.m1}中的光线发生全反射，因为这个角大于 ${fmt(tc, 1)}° 的临界角。`);
      ro.set(`\\mk{q}{\\frac{n_1\\sin\\kthetaone}{n_2}} = \\mk{v}{\\frac{(${n1s})\\sin ${fmt(th.v, 1)}^\\circ}{${n2s}}} = \\mk{r}{${fmt(s2, 3)} > 1}`,
        `没有哪个角的正弦大于 1，所以没有光线被折射，所有的光都被反射回${P.m1}中。`, { form: 'tir' });
    } else {
      topline(ctx, `在 ${fmt(th.v, 1)}° 时，${P.m1}中的光线以 ${fmt(deg(t2), 1)}° 折射进入${P.m2}，有 ${fmt(R * 100, 0)}% 的光被反射。`);
      ro.set(`\\mk{s}{\\sin\\kthetatwo} = \\mk{q}{\\frac{n_1\\sin\\kthetaone}{n_2}} = \\mk{v}{\\frac{(${n1s})\\sin ${fmt(th.v, 1)}^\\circ}{${n2s}}} = \\mk{r}{${fmt(s2, 3)}}`,
        tc === null ? `光进入折射率较大的介质时向法线偏折，所以折射角永远达不到 90°，也就没有临界角。`
          : `折射角 $\\kthetatwo$ 在 $\\kthetaone$ 达到临界角 ${fmt(tc, 1)}° 时达到 90°。`, { form: 'refr' });
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.14 + 25.16 · sim-light-pipe · still · flat (root rule 28.1)
   One flint-glass fiber, straight, bent through 45° and straight again, with a
   ray entering its end. The book's 25.14 (the bare fiber round a bend) and 25.16
   (the same fiber clad) are one scene, so they fold, and the surround is a
   choice of three states: air, a cladding of crown glass, and a bare fiber of
   the same glass touching it along the first straight run. The two sliders are
   the entering angle and the radius of the bend in fiber widths; the smallest
   angle any reflection makes is compared with the critical angle. Every scene
   length is fixed: the fiber is 80 units wide and the bend's radius runs from
   120 to 480 units.
===================================================================== */
(function () {
  const d = sim('sim-light-pipe', 700);
  const mode = select(d.controls, { label: '\\text{纤芯周围}', value: 'air', ms: 0, options: [
    { value: 'air', label: '空气' }, { value: 'clad', label: '冕牌玻璃包层' }, { value: 'touch', label: '与之接触的裸光纤' }] });
  const al = ctl(d.controls, { label: '\\alpha', cls: 'angle', min: 0, max: 80, step: 1, value: 30, unit: '°', dec: 0, aria: '光线进入光纤端面的角度' });
  const rb = ctl(d.controls, { label: '\\text{弯曲半径}', cls: '', min: 1.5, max: 6, step: 0.1, value: 4, unit: '倍宽度', dec: 1, aria: '弯曲半径，以光纤宽度计' });
  const ro = F.readout(d);
  const W = 80, X0 = 160, Y0 = 240, L1 = 360, L2 = 380, PHI = 45 * RAD, NC = IDX.flint;

  function centerline(R) {
    const pts = [[X0, Y0, 0]];
    pts.push([X0 + L1, Y0, 0]);
    const cx = X0 + L1, cy = Y0 + R;
    for (let i = 1; i <= 40; i++) { const f = (PHI * i) / 40; pts.push([cx + R * Math.sin(f), cy - R * Math.cos(f), f]); }
    const e = pts[pts.length - 1];
    pts.push([e[0] + L2 * Math.cos(PHI), e[1] + L2 * Math.sin(PHI), PHI]);
    return pts;
  }
  /* the outline of a band of half-width h about the centerline, as one polygon:
     the upper wall forward, the far end, the lower wall back, the near end */
  function band(cl, h) {
    const up = cl.map(([x, y, f]) => [x + h * Math.sin(f), y - h * Math.cos(f)]);
    const lo = cl.map(([x, y, f]) => [x - h * Math.sin(f), y + h * Math.cos(f)]);
    const pts = [...up, ...lo.reverse()];
    const tags = pts.map((_, i) => (i === up.length - 1 ? 'end' : i === pts.length - 1 ? 'start' : 'wall'));
    return { pts, tags };
  }

  function draw() {
    const m = mode.value, R = rb.v * W, cl = centerline(R), core = band(cl, W / 2);
    const n2 = m === 'clad' ? IDX.crown : N_AIR, tc = critical(NC, n2);
    const polys = [{ pts: core.pts, tags: core.tags, n: NC }];
    const nb = [[X0, Y0 + W / 2], [X0 + L1, Y0 + W / 2], [X0 + L1, Y0 + 1.5 * W], [X0, Y0 + 1.5 * W]];
    if (m === 'touch') polys.push({ pts: nb, tags: ['wall', 'end', 'wall', 'start'], n: NC });
    const cb = m === 'clad' ? band(cl, W / 2 + 18) : null;      /* listed after the core, so a point in the core is in the core */
    if (cb) polys.push({ pts: cb.pts, tags: cb.tags, n: IDX.crown });
    const { ctx } = begin(d.c);
    const cFib = F.ref('fiber'), cClad = F.ref('cladding'), cNb = F.ref('second-fiber');
    if (cb) fillPoly(ctx, cb.pts, alpha(PAL.ink, 0.04), cClad, 2);
    fillPoly(ctx, core.pts, alpha(PAL.ink, 0.08), cFib, 2.5);
    if (m === 'touch') fillPoly(ctx, nb, alpha(PAL.ink, 0.08), cNb, 2.5);
    const a = al.v * RAD, dir = [Math.cos(a), Math.sin(a)], aim = [X0, Y0 - 8], L0 = 140;
    const tr = trace(polys, N_AIR, [aim[0] - dir[0] * L0, aim[1] - dir[1] * L0], dir, 200);
    drawTrace(ctx, tr);
    const walls = tr.hits.filter((h) => h.main && h.tag === 'wall' && h.from === 0);
    const low = walls.reduce((b, h) => (!b || h.theta < b.theta ? h : b), null);
    const leak = walls.find((h) => !h.total);
    const crossed = tr.hits.some((h) => h.main && h.poly === 0 && h.to === 1) || (m === 'touch' && tr.segs.some((s) => s.main && inside(nb, [(s.a[0] + s.b[0]) / 2, (s.a[1] + s.b[1]) / 2])));
    if (low && m !== 'touch') {
      const back = [-low.d[0], -low.d[1]];
      arcBetween(ctx, low.q, 52, low.nrm, back, `${fmt(low.theta, 1)}°`);
    }
    text(ctx, `纤芯，火石玻璃   n_1 = ${fmt(NC, 2)}`, X0 + L1 / 2 + 60, Y0 - W / 2 - (m === 'clad' ? 44 : 26), cFib, { size: 20, align: 'center' });
    if (m === 'clad') label(ctx, `包层，冕牌玻璃   n_2 = ${fmt(IDX.crown, 2)}`, X0 + 200, Y0 + W / 2 + 18, { side: 'below', size: 20, weight: 400, color: cClad });
    else if (m === 'touch') text(ctx, `另一根火石玻璃光纤   n_2 = ${fmt(NC, 2)}`, X0, Y0 + 1.5 * W + 26, cNb, { size: 20, align: 'left' });
    else text(ctx, `空气   n_2 = 1.00`, X0 + 20, Y0 + W / 2 + 34, PAL.ink, { size: 20, align: 'left' });
    const nIn = Math.asin(Math.sin(a) / NC);
    if (m === 'touch') {
      topline(ctx, crossed ? '它接触的光纤是同一种玻璃，所以光穿过进入了它。' : '光线还没有到达下方的光纤，但任何射到它的光都会穿过去。');
      ro.set(`\\mk{n2}{n_2} = \\mk{n1}{n_1} = \\mk{v}{${fmt(NC, 2)}}`,
        '两根裸光纤相接触的地方，不同折射率之间没有界面，所以没有临界角，也没有任何反射。', { form: 'touch' });
      return;
    }
    const lowS = low ? `${fmt(low.theta, 1)}°` : '';
    const dp = leak && fmt(leak.theta, 1) === fmt(tc, 1) ? 2 : 1;
    topline(ctx, leak ? `在 ${fmt(leak.theta, dp)}° 处的一次反射小于 ${fmt(tc, dp)}° 的临界角，所以光在那里从光纤中漏了出去。`
      : `最小的反射角是 ${lowS}，大于 ${fmt(tc, 1)}° 的临界角，所以每次反射都是全反射。`);
    ro.set(`\\mk{tc}{\\kthetac} = \\sin^{-1}(\\mk{n2}{n_2}/\\mk{n1}{n_1}) = \\sin^{-1}(\\mk{v}{${fmt(n2, 2)}/${fmt(NC, 2)}}) = \\mk{r}{${fmt(tc, 1)}^\\circ}`,
      `光线以 ${fmt(al.v, 0)}° 射入端面，在纤芯内折射为 ${fmt(deg(nIn), 1)}°，${walls.length} 次反射把它${leak ? '一直带到其中一次反射失效' : '带到远端'}。`, { form: 'tc' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.15 · sim-image-bundle · still · flat (root rule 28.1)
   The near face of a bundle of fibers, lit in the shape of a letter, and the
   far face. With fixed neighbors each fiber's light arrives where it left; with
   the fibers shuffled, each lit spot slides to the place its fiber ends up, so
   the choice itself carries the light from one arrangement to the other.
===================================================================== */
(function () {
  const d = sim('sim-image-bundle', 560);
  const mode = choice(d.controls, { label: '\\text{各光纤}', value: 'fixed', options: [
    { value: 'fixed', label: '保持相邻位置' }, { value: 'shuffled', label: '被打乱' }] });
  const ro = F.readout(d);
  const RF = 150, CY = 320, AX = 290, BX = 1110, r = 11;
  const cells = [];
  for (let j = -8; j <= 8; j++) for (let i = -8; i <= 8; i++) {
    const u = (i + (j & 1 ? 0.5 : 0)) * 2 * r * 1.02, v = j * 2 * r * 0.88;
    if (Math.hypot(u, v) <= RF - r) cells.push([u, v]);
  }
  const segD = (p, a, b) => { const ex = b[0] - a[0], ey = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * ex + (p[1] - a[1]) * ey) / (ex * ex + ey * ey))); return Math.hypot(p[0] - a[0] - t * ex, p[1] - a[1] - t * ey); };
  const S = RF * 0.8, strokes = [[[-0.62 * S, 0.85 * S], [0, -0.85 * S]], [[0, -0.85 * S], [0.62 * S, 0.85 * S]], [[-0.33 * S, 0.22 * S], [0.33 * S, 0.22 * S]]];
  const lit = cells.map((c) => strokes.some(([a, b]) => segD(c, a, b) < 0.16 * S));
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const perm = cells.map((_, i) => i);
  for (let i = perm.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  const nLit = lit.filter(Boolean).length;

  function face(ctx, cx, spots, color) {
    ctx.save(); ctx.beginPath(); ctx.arc(cx, CY, RF + 6, 0, 2 * Math.PI); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    cells.forEach(([u, v]) => { ctx.save(); ctx.beginPath(); ctx.arc(cx + u, CY + v, r - 1.5, 0, 2 * Math.PI); ctx.strokeStyle = alpha(PAL.ink, 0.28); ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore(); });
    spots.forEach(([u, v]) => { ctx.save(); ctx.beginPath(); ctx.arc(cx + u, CY + v, r - 3, 0, 2 * Math.PI); ctx.fillStyle = PAL.ink; ctx.fill(); ctx.restore(); });
  }
  function draw() {
    const { ctx } = begin(d.c);
    /* the bundle between the faces, drawn as its outline and a few of its fibers */
    const bez = (ya, yb, col, w) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(AX, CY + ya); ctx.bezierCurveTo(AX + 300, CY + ya + 90, BX - 300, CY + yb - 90, BX, CY + yb); ctx.stroke(); ctx.restore(); };
    bez(-RF - 6, -RF - 6, PAL.muted, 2.5); bez(RF + 6, RF + 6, PAL.muted, 2.5);
    const shown = [3, 17, 30, 45, 60, 74, 88].filter((i) => i < cells.length);
    const far = (i) => mode.mix((v) => (v === 'fixed' ? cells[i] : cells[perm[i]]));
    shown.forEach((i) => { const f = far(i); bez(cells[i][1], f[1], alpha(PAL.ink, 0.22), 2); });
    const cNear = F.ref('near-face'), cFar = F.ref('far-face');
    face(ctx, AX, cells.filter((_, i) => lit[i]), cNear);
    face(ctx, BX, cells.map((_, i) => i).filter((i) => lit[i]).map(far), cFar);
    text(ctx, '被照亮的近端', AX, CY + RF + 44, cNear, { size: 20, align: 'center' });
    text(ctx, '远端', BX, CY + RF + 44, cFar, { size: 20, align: 'center' });
    const fixed = mode.value === 'fixed';
    const kept = cells.filter((_, i) => lit[i] && (fixed || lit[perm[i]])).length;
    topline(ctx, fixed ? '每根光纤都留在原位，所以字母原样到达。' : '每根光纤仍然传送着它的光，但各部分到达了错误的位置。');
    ro.set(`\\text{被照亮的光纤数} = \\mk{n}{${nLit}},\\quad \\text{落在字母上的光纤数} = \\mk{k}{${fixed ? nLit : kept}}`,
      '', { form: mode.value });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.18 · sim-porro-prisms · still · flat (root rule 28.1)
   One barrel of the binoculars with its two right-angle prisms. The light rises
   through the objective, is turned back twice by the first prism and twice by the
   second, and rises to the eyepiece. The index of the prisms is a slider with the
   book's materials as detents and a dashed circle at 1.414, where the critical
   angle is 45°; the tilt of the entering ray shows the returned ray staying
   parallel to it. The prisms' legs are 184 units, fixed.
===================================================================== */
(function () {
  const d = sim('sim-porro-prisms', 640);
  const nS = ctl(d.controls, { label: 'n', cls: '', min: 1.30, max: 2.42, step: 0.001, value: 1.52, unit: '', dec: 3, aria: '棱镜玻璃的折射率',
    detents: [{ v: 1.333, label: '水' }, { v: 1.52, label: '冕牌' }, 1.66, { v: 2.419, label: '金刚石' }],
    specials: [{ at: Math.SQRT2, label: '√2' }] });
  const tS = ctl(d.controls, { label: '\\text{倾斜}', cls: 'angle', min: -8, max: 8, step: 0.5, value: 0, unit: '°', dec: 1, aria: '入射光线的倾斜角' });
  const ro = F.readout(d);
  const A = 130, XA = 760, YA = 300, XB = XA - A, YB = 400;
  const prA = [[XA - A, YA], [XA + A, YA], [XA, YA - A]];
  const prB = [[XB - A, YB], [XB + A, YB], [XB, YB + A]];

  function draw() {
    const n = nS.v, tau = tS.v * RAD, tc = critical(n, N_AIR);
    const polys = [{ pts: prA, tags: ['hyp', 'leg', 'leg'], n }, { pts: prB, tags: ['hyp', 'leg', 'leg'], n }];
    const { ctx } = begin(d.c);
    /* the barrel, its objective at the bottom and its eyepiece at the top */
    fillPoly(ctx, [[XB - A - 60, 560], [XA + A + 60, 560], [XA + A + 60, 150], [XB - A - 60, 150]], null, alpha(PAL.ink, 0.25), 2);
    fillPoly(ctx, [[XA + A / 2 - 70, 590], [XA + A / 2 + 70, 590], [XA + A / 2 + 70, 572], [XA + A / 2 - 70, 572]], alpha(PAL.ink, 0.1), PAL.muted, 2);
    fillPoly(ctx, [[XB - A / 2 - 50, 112], [XB - A / 2 + 50, 112], [XB - A / 2 + 50, 96], [XB - A / 2 - 50, 96]], alpha(PAL.ink, 0.1), PAL.muted, 2);
    const cA = F.ref('prism-1'), cB = F.ref('prism-2');
    fillPoly(ctx, prA, alpha(PAL.ink, 0.08), cA, 2.5);
    fillPoly(ctx, prB, alpha(PAL.ink, 0.08), cB, 2.5);
    const dir = [Math.sin(tau), -Math.cos(tau)], p0 = [XA + A / 2 - Math.tan(tau) * (640 - YA), 640];
    const tr = trace(polys, N_AIR, p0, dir, 420);
    drawTrace(ctx, tr);
    const legs = tr.hits.filter((h) => h.main && h.tag === 'leg' && h.from >= 0);
    const fail = legs.find((h) => !h.total);
    if (legs[0]) arcBetween(ctx, legs[0].q, 48, legs[0].nrm, [-legs[0].d[0], -legs[0].d[1]], `${fmt(legs[0].theta, 1)}°`);
    label(ctx, '棱镜', XA + A, YA - A / 2, { side: 'right', size: 20, weight: 400, color: cA });
    label(ctx, '棱镜', XB - A, YB + A / 2, { side: 'left', size: 20, weight: 400, color: cB });
    text(ctx, '物镜', XA + A / 2 + 90, 581, PAL.ink, { size: 20, align: 'left' });
    text(ctx, '目镜', XB - A / 2 - 70, 104, PAL.ink, { size: 20, align: 'right' });
    const angs = legs.map((h) => `${fmt(h.theta, 1)}°`);
    topline(ctx, fail ? `在 ${fmt(fail.theta, 1)}° 处有一次反射不是全反射，因为临界角是 ${fmt(tc, 1)}°，光从棱镜中漏了出去。`
      : `光线射到各面时的角度是 ${angs.length > 1 ? angs.slice(0, -1).join('、') + ' 和 ' + angs[angs.length - 1] : angs.join('')}，每一个都大于 ${fmt(tc, 1)}° 的临界角。`);
    ro.set(`\\mk{tc}{\\kthetac} = \\sin^{-1}(\\mk{n2}{n_2}/\\mk{n1}{n_1}) = \\sin^{-1}(\\mk{v}{1.00/${fmt(n, 3)}}) = \\mk{r}{${fmt(tc, 1)}^\\circ}`,
      fail ? (n < Math.SQRT2 ? '折射率低于 1.414 时，临界角大于 45°，射到接近 45° 的面上的光线只被部分反射。'
        : '倾斜使某一个面上的角低于 45° 的幅度超出了玻璃所允许的范围，所以光线在那里只被部分反射。')
        : `每次反射都是全反射，光线离开目镜时倾斜了 ${fmt(Math.abs(tS.v), 1)}°，与射入的光线平行。`, { form: 'tc' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.19 · sim-diamond · still · flat (root rule 28.1)
   A round brilliant in profile, drawn to the ideal proportions (table 57% of the
   width, crown at 34.5°, pavilion at 40.75°), 660 units across. A ray enters the
   table where and at the angle the sliders say, and every branch is followed from
   facet to facet by the Fresnel fractions. The share of the entering light that
   leaves through the top of the stone is the figure's reading, and changing the
   gem to one of smaller index shows the light leaking out of the pavilion.
===================================================================== */
(function () {
  const GEMS = { diamond: { n: IDX.diamond, name: '金刚石' }, cz: { n: IDX.cz, name: '立方氧化锆' }, zircon: { n: IDX.zircon, name: '锆石' }, crown: { n: IDX.crown, name: '冕牌玻璃' } };
  const d = sim('sim-diamond', 640);
  const gem = select(d.controls, { label: '\\text{宝石}', value: 'diamond', aria: '切割宝石的材料', options: [
    { value: 'diamond', label: '金刚石' }, { value: 'cz', label: '立方氧化锆' }, { value: 'zircon', label: '锆石' }, { value: 'crown', label: '冕牌玻璃' }] });
  const xS = ctl(d.controls, { label: '\\text{入射点}', cls: '', min: -0.95, max: 0.95, step: 0.01, value: -0.35, unit: '', dec: 2, aria: '光线进入台面的位置，以台面半宽的分数表示' });
  const aS = ctl(d.controls, { label: '\\kthetaone', cls: 'angle', min: -60, max: 60, step: 1, value: -10, unit: '°', dec: 0, aria: '台面上的入射角，向左的光线为负' });
  const ro = F.readout(d);
  const U = 330, CX = 700, TOP = 210;
  const shape = [[-0.57, 0], [0.57, 0], [1, 0.296], [1, 0.326], [0, 1.187], [-1, 0.326], [-1, 0.296]];
  const pts = shape.map(([x, y]) => [CX + x * U, TOP + y * U]);
  const tags = ['top', 'top', 'girdle', 'pavilion', 'pavilion', 'girdle', 'top'];

  function draw() {
    const G = GEMS[gem.value], tc = critical(G.n, N_AIR), a = aS.v * RAD;
    const { ctx } = begin(d.c);
    const cGem = F.ref('gem');
    fillPoly(ctx, pts, alpha(PAL.ink, 0.07), cGem, 2.5);
    const entry = [CX + xS.v * 0.57 * U, TOP], dir = [Math.sin(a), Math.cos(a)];
    const tr = trace([{ pts, tags, n: G.n }], N_AIR, [entry[0] - dir[0] * 110, entry[1] - dir[1] * 110], dir, 170, 0.002);
    drawTrace(ctx, tr);
    const into = tr.hits.find((h) => h.from < 0);
    const entered = into ? into.I * (1 - fresnel(N_AIR, G.n, Math.cos(into.theta * RAD))) : 1;
    const leave = tr.hits.filter((h) => h.from === 0 && !h.total);
    const out = (t) => leave.filter((h) => h.tag === t).reduce((s, h) => s + h.I * (1 - fresnel(G.n, N_AIR, Math.cos(h.theta * RAD))), 0);
    const up = Math.min(1, out('top') / entered), down = 1 - up;
    const nTotal = tr.hits.filter((h) => h.main && h.from === 0 && h.total).length;
    const first = tr.hits.find((h) => h.main && h.from === 0);
    const escape = tr.hits.find((h) => h.main && h.from === 0 && !h.total && fresnel(G.n, N_AIR, Math.cos(h.theta * RAD)) < 0.5);
    if (first) arcBetween(ctx, first.q, 46, first.nrm, [-first.d[0], -first.d[1]], `${fmt(first.theta, 1)}°`);
    text(ctx, '空气', 150, 170, PAL.ink, { size: 22, align: 'left' });
    label(ctx, `${G.name}   n = ${fmt(G.n, 3)}`, CX + 0.55 * U, TOP + 0.62 * U, { side: 'right', size: 20, weight: 400, gap: 60, color: cGem });
    topline(ctx, `在${G.name}中，进入顶部的光有 ${fmt(up * 100, 0)}% 从顶部射出，${fmt(down * 100, 0)}% 从下方的刻面射出。`);
    ro.set(`\\mk{tc}{\\kthetac} = \\sin^{-1}(\\mk{n2}{n_2}/\\mk{n1}{n_1}) = \\sin^{-1}(\\mk{v}{1.00/${fmt(G.n, 3)}}) = \\mk{r}{${fmt(tc, 1)}^\\circ}`,
      escape && escape.tag !== 'top'
        ? `光线最亮的部分以 ${fmt(escape.theta, 1)}° 射到下方的一个刻面，小于 ${fmt(tc, 1)}°，其中大部分从宝石中射出。`
        : `沿着最亮的路径，光线被全反射了 ${nTotal} 次，因为它以大于 ${fmt(tc, 1)}° 的角射到的每个刻面都把全部的光反射回去。`, { form: 'tc' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
