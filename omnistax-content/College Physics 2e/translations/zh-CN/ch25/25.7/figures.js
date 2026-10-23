/* Figures for section 25.7 Image Formation by Mirrors. The figures colour
   position: the focal length, the radius of curvature, the object and image
   distances and heights, and the height of the eye. The magnification, the power
   and the width of a mirror as a fraction of its radius are ratings and stay in
   ink, as do the rays of the first two figures. The bottle, its image, the flat
   mirror and the eye of Figure 25.38, the spherical mirror of Figure 25.39 + 25.40,
   and the object, its image, the mirror and the three numbered rays of Figure 25.41
   are the section's referents and wear F.ref. An image is a place and not a history, so
   every figure is still: no cycle, no transport, a redraw on its controls alone
   (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, topline, label, hbracket, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }
const MINUS = '−';
const sgn = (x, dp) => (x < 0 ? MINUS : '') + fmt(Math.abs(x), dp);

/* a ray from p to q with a small arrowhead partway along it, showing which way the
   light travels; a dashed ray is a backward extension and carries no arrowhead */
function ray(ctx, p, q, color, o) {
  const w = (o && o.w) || 3;
  if (o && o.dash) { line(ctx, p[0], p[1], q[0], q[1], alpha(color, 0.7), 2.5, [10, 10]); return; }
  line(ctx, p[0], p[1], q[0], q[1], color, w);
  const at = (o && o.at) ?? 0.5, dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy);
  if (L < 60) return;
  const mx = p[0] + dx * at, my = p[1] + dy * at, ux = dx / L, uy = dy / L;
  arrow(ctx, mx - ux * 14, my - uy * 14, mx + ux * 8, my + uy * 8, color, w);
}
/* the point where the line through a and b reaches x, or null where the line is upright */
function atX(a, b, x) {
  if (Math.abs(b[0] - a[0]) < 1e-9) return null;
  const t = (x - a[0]) / (b[0] - a[0]);
  return [x, a[1] + t * (b[1] - a[1])];
}
/* a spherical mirror seen edge on: an arc through its vertex (vx, y0), bowed toward
   the light (to the left) when concave and away from it when convex, with a
   shaded back so the reflecting face reads as the front */
function mirrorArc(ctx, vx, y0, half, Rd, bow, color) {
  const pts = [];
  for (let i = 0; i <= 40; i++) {
    const y = -half + (2 * half * i) / 40;
    const sag = Rd - Math.sqrt(Math.max(Rd * Rd - y * y, 0));
    pts.push([vx - bow * sag, y0 + y]);
  }
  ctx.save();
  ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
  for (let i = pts.length - 1; i >= 0; i--) ctx.lineTo(pts[i][0] + 16, pts[i][1]);
  ctx.closePath(); ctx.fill();
  ctx.strokeStyle = color ?? PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 25.38 · sim-flat-mirror · still · flat (root rule 28.1)
   A bottle in front of a flat mirror and an eye to one side. Two rays leave the
   top of the bottle and two its base, each pair aimed at the two edges of the
   pupil, and every ray obeys the law of reflection at the glass. The reflected
   rays traced backward meet behind the mirror, as far behind it as the bottle
   stands in front, and the image is the same height, whatever the eye's place.
   Scale: 5 units per centimeter, so the 100 cm reach of the object slider and
   the 100 cm behind the glass both fit.
===================================================================== */
(function () {
  const d = sim('sim-flat-mirror', 560);
  const doS = ctl(d.controls, { label: '\\kdobj', cls: 'position', min: 20, max: 100, step: 1, value: 50, unit: 'cm', dec: 0, aria: '瓶子到面镜的距离' });
  const eyS = ctl(d.controls, { label: '\\text{眼睛高度}', cls: 'position', min: 25, max: 60, step: 1, value: 30, unit: 'cm', dec: 0, aria: '眼睛在地面线以上的高度' });
  const S = 5, MX = 700, AY = 430, HB = 24;           /* the bottle is 24 cm tall */
  const EX = MX - 600;                                 /* the eye stands 120 cm in front of the glass */

  function bottle(ctx, x, h, color, faded) {
    const top = AY - h * S, w = 36;
    ctx.save(); ctx.globalAlpha *= faded ? 0.55 : 1; ctx.strokeStyle = color; ctx.lineWidth = 3;
    if (faded) ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(x - w / 2, AY); ctx.lineTo(x - w / 2, top + 50); ctx.quadraticCurveTo(x - w / 2, top + 30, x - 7, top + 22);
    ctx.lineTo(x - 7, top); ctx.lineTo(x + 7, top); ctx.lineTo(x + 7, top + 22);
    ctx.quadraticCurveTo(x + w / 2, top + 30, x + w / 2, top + 50); ctx.lineTo(x + w / 2, AY); ctx.closePath();
    ctx.stroke(); ctx.restore();
  }
  function eye(ctx, x, y, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.moveTo(x - 34, y); ctx.quadraticCurveTo(x, y - 30, x + 34, y); ctx.quadraticCurveTo(x, y + 30, x - 34, y); ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x + 14, y, 10, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  }

  hover(d.stage, () => {
    const xo = MX - doS.v * S, xi = MX + doS.v * S, ye = AY - eyS.v * S;
    return [
      { x: xo, y: AY - HB * S / 2, r: 30, name: '瓶子，即物体' },
      { x: xi, y: AY - HB * S / 2, r: 30, name: '瓶子的虚像' },
      { x: EX, y: ye, r: 34, name: '观察者的眼睛' },
    ];
  });

  function draw() {
    const { ctx } = begin(d.c);
    const dO = doS.v, xo = MX - dO * S, xi = MX + dO * S, ye = AY - eyS.v * S, XC = C('position');
    topline(ctx, `瓶子在面镜前方 ${fmt(dO, 0)} cm 处，它的像在面镜后方 ${fmt(dO, 0)} cm 处。`);
    line(ctx, 40, AY, 1360, AY, alpha(PAL.ink, 0.35), 2);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(MX, 96, 14, AY - 96); ctx.restore();
    const cM = F.ref('flat-mirror');
    line(ctx, MX, 96, MX, AY, cM, 4);
    text(ctx, '面镜', MX + 22, 110, cM, { size: 18, align: 'left' });

    bottle(ctx, xi, HB, F.ref('bottle-image'), true);
    bottle(ctx, xo, HB, F.ref('bottle'), false);
    eye(ctx, EX, ye, F.ref('eye'));

    [[AY - HB * S + 4], [AY - 4]].forEach(([yp]) => {
      [-9, 9].forEach((off) => {
        const target = [EX + 14, ye + off];
        const hit = atX([xi, yp], target, MX);
        if (!hit) return;
        ray(ctx, [xo, yp], hit, PAL.ink, { at: 0.55, w: 2.5 });
        ray(ctx, hit, target, PAL.ink, { at: 0.5, w: 2.5 });
        ray(ctx, hit, [xi, yp], PAL.ink, { dash: true });
      });
    });

    hbracket(ctx, xo, MX, AY + 46, XC, 'd_o');
    hbracket(ctx, MX, xi, AY + 46, XC, 'd_i');
    vbracket(ctx, xo - 50, AY - HB * S, AY, XC, 'h_o', -1);
    vbracket(ctx, xi + 50, AY - HB * S, AY, XC, 'h_i', 1);
    readout(d.readout,
      `\\kdimg = -\\kdobj = -${fmt(dO, 0)}\\text{ cm},\\quad \\khimg = \\khobj = ${fmt(HB, 0)}\\text{ cm}`,
      `像距为负，因为像在面镜后面，光线不会到达那里，所以它是虚像。`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.39 + 25.40 · sim-mirror-focus · still · flat (root rule 28.1)
   Rays parallel to the axis reflected exactly, by the law of reflection at the
   sphere, from a mirror whose width the reader sets. A concave mirror small
   compared with its radius brings them to the one point F at R/2; widened, its
   edge rays cross nearer the mirror and the focus smears, which is Figure
   25.39(a) against 25.39(b). A convex mirror spreads them, and their backward
   extensions meet at F behind it, which is Figure 25.40. The mirror slides to
   the left when it turns convex so that its focal point and center of curvature,
   which then lie behind it, stay on the canvas.
   Scale: 6 units per centimeter; R runs to 60 cm, 360 units, and the widest
   mirror, 0.9 R, reaches 324 units either side of the axis at y = 390.
===================================================================== */
(function () {
  const d = sim('sim-mirror-focus', 780);
  const mode = choice(d.controls, { label: '面镜', options: [{ value: 'concave', label: '凹' }, { value: 'convex', label: '凸' }], value: 'concave', aria: '面镜的形状' });
  const rS = ctl(d.controls, { label: '\\kRcur', cls: 'position', min: 20, max: 60, step: 1, value: 40, unit: 'cm', dec: 0, aria: '面镜的曲率半径' });
  const wS = ctl(d.controls, { label: '\\text{宽度}/\\kRcur', cls: '', min: 0.1, max: 0.9, step: 0.01, value: 0.25, unit: '', dec: 2, aria: '面镜的半宽，以其曲率半径的分数表示' });
  const S = 6, AY = 400, N = 9, X0 = 50;

  function trace(convex, MX, R, half) {
    const cx = convex ? MX + R : MX - R;
    return Array.from({ length: N }, (_, i) => {
      const y = -half + (2 * half * i) / (N - 1);
      const px = convex ? cx - Math.sqrt(R * R - y * y) : cx + Math.sqrt(R * R - y * y);
      const nx = (px - cx) / R, ny = y / R;
      const dot_ = nx;                                  /* the incoming direction is (1, 0) */
      const rx = 1 - 2 * dot_ * nx, ry = -2 * dot_ * ny;
      /* where the reflected line, or its extension, crosses the axis */
      const tc = Math.abs(ry) > 1e-9 ? -y / ry : null;
      return { y, px, py: AY + y, rx, ry, cross: tc === null ? null : px + rx * tc };
    });
  }

  hover(d.stage, () => {
    const convex = mode.value === 'convex', R = rS.v * S, MX = convex ? 760 : 1060;
    const fx = convex ? MX + R / 2 : MX - R / 2, cx = convex ? MX + R : MX - R;
    return [{ x: fx, y: AY, r: 16, name: '焦点 F' }, { x: cx, y: AY, r: 16, name: '曲率中心 C' }];
  });

  function draw() {
    const { ctx } = begin(d.c);
    const convex = mode.value === 'convex', k = mode.k;
    const Rcm = rS.v, R = Rcm * S, half = Math.min(wS.v * R, 330);
    const MX = mode.mix((v) => (v === 'convex' ? 760 : 1060));
    const bow = mode.mix((v) => (v === 'convex' ? -1 : 1));
    const XC = C('position');
    const rays = trace(convex, MX, R, half);
    const edge = rays[0].cross, fx = convex ? MX + R / 2 : MX - R / 2, cx = convex ? MX + R : MX - R;
    const spread = edge === null ? 0 : Math.abs(edge - fx) / S;

    if (convex) topline(ctx, `平行光线离开凸面镜时，就像来自它后方 ${fmt(Rcm / 2, 1)} cm 处的一个焦点，所以 f = ${MINUS}${fmt(Rcm / 2, 1)} cm。`);
    else if (spread < 0.05 * Rcm / 2) topline(ctx, `平行于光轴的光线相交于面镜前方 ${fmt(Rcm / 2, 1)} cm 处，即其曲率半径的一半。`);
    else topline(ctx, `面镜边缘处的光线相交在比 F 更靠近面镜 ${fmt(spread, 1)} cm 的地方，所以没有唯一的焦点。`);

    line(ctx, X0 - 10, AY, 1380, AY, alpha(PAL.ink, 0.35), 2);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 112, 1400, 668); ctx.clip(); ctx.globalAlpha = k;
    rays.forEach((r) => {
      ray(ctx, [X0, r.py], [r.px, r.py], PAL.ink, { at: 0.35, w: 2.5 });
      let L = (r.px - X0) / Math.max(-r.rx, 0.2);
      /* a ray from near the rim of a deep concave mirror meets the glass again, and stops there */
      const t2 = -2 * ((r.px - cx) * r.rx + r.y * r.ry);
      if (!convex && t2 > 1 && Math.abs(r.y + r.ry * t2) <= half) L = Math.min(L, t2);
      const end = [r.px + r.rx * L, r.py + r.ry * L];
      ray(ctx, [r.px, r.py], end, PAL.ink, { at: convex ? 0.3 : 0.25, w: 2.5 });
      if (convex && r.cross !== null) ray(ctx, [r.px, r.py], [r.cross, AY], PAL.ink, { dash: true });
    });
    ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(0, 80, 1400, 700); ctx.clip();
    mirrorArc(ctx, MX, AY, half + 12, R, bow, F.ref('spherical-mirror'));
    ctx.restore();

    ctx.save(); ctx.globalAlpha = k;
    dot(ctx, fx, AY, PAL.ink, true, 9);
    dot(ctx, cx, AY, PAL.ink, false, 9);
    label(ctx, 'F', fx, AY, { side: 'below', gap: 28, size: 22 });
    label(ctx, 'C', cx, AY, { side: 'below', gap: 28, size: 22 });
    const yb = AY + Math.max(half, 60) + 50;
    if (yb < 750) {
      hbracket(ctx, Math.min(fx, MX), Math.max(fx, MX), yb, XC, 'f');
      if (yb + 60 < 760) hbracket(ctx, Math.min(cx, MX), Math.max(cx, MX), yb + 60, XC, 'R');
    }
    ctx.restore();

    const P = 100 / (Rcm / 2);
    readout(d.readout,
      convex ? `\\kffoc = -\\frac{\\kRcur}{2} = -\\frac{${fmt(Rcm, 0)}\\text{ cm}}{2} = -${fmt(Rcm / 2, 1)}\\text{ cm}`
             : `\\kffoc = \\frac{\\kRcur}{2} = \\frac{${fmt(Rcm, 0)}\\text{ cm}}{2} = ${fmt(Rcm / 2, 1)}\\text{ cm}`,
      convex ? `凸面镜是发散面镜，所以它的焦距和光焦度都为负：$P = 1/\\kffoc$ = ${MINUS}${fmt(P, 2)} D。`
             : `凹面镜是会聚面镜，焦距为正，光焦度为 $P = 1/\\kffoc$ = ${fmt(P, 2)} D。只有当面镜相对于其曲率半径很小时，这一关系才成立。`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.41 · sim-mirror-images · still · flat (root rule 28.1)
   The three rays of the ray tracing rules from the top of an object, reflected
   at the plane of a mirror small compared with its radius (the thin mirror
   approximation the text makes), and the image where they, or their extensions
   behind the mirror, cross. The object slider walks a concave mirror through
   case 1 into case 2, with dashed circles where the object reaches 2f (an image
   the same size) and f (no image); the choice turns the mirror convex, case 3.
   Scale: 9 units per centimeter, so a 90 cm object distance fits in front of the
   mirror and 51 cm behind it; an image beyond the canvas is named at the edge.
===================================================================== */
(function () {
  const d = sim('sim-mirror-images', 680);
  const mode = choice(d.controls, { label: '面镜', options: [{ value: 'concave', label: '凹' }, { value: 'convex', label: '凸' }], value: 'concave', aria: '面镜的形状',
    onInput: () => doS.refresh() });
  const fS = ctl(d.controls, { label: '|\\kffoc|', cls: 'position', min: 10, max: 40, step: 0.5, value: 20, unit: 'cm', dec: 1, aria: '焦距的大小' });
  const doS = ctl(d.controls, { label: '\\kdobj', cls: 'position', min: 5, max: 90, step: 0.1, value: 30, unit: 'cm', dec: 1, aria: '物距',
    specials: [{ at: () => (mode.value === 'concave' ? fS.v : null), label: 'f' }, { at: () => (mode.value === 'concave' ? 2 * fS.v : null), label: '2f' }] });
  const hS = ctl(d.controls, { label: '\\khobj', cls: 'position', min: 2, max: 10, step: 0.5, value: 6, unit: 'cm', dec: 1, aria: '物高' });
  const S = 9, MX = 920, AY = 360, XL = 24, XR = 1376, YT = 96, YB = 664;

  const state = () => {
    const f = mode.value === 'convex' ? -fS.v : fS.v, dO = doS.v, hO = hS.v;
    const atF = Math.abs(dO - f) < 1e-6;
    const dI = atF ? Infinity : 1 / (1 / f - 1 / dO);
    const m = atF ? Infinity : -dI / dO;
    return { f, dO, hO, dI, m, atF, hI: m * hO };
  };

  hover(d.stage, () => {
    const s = state(), out = [{ x: MX - s.dO * S, y: AY - s.hO * S / 2, r: 24, name: '物体' }];
    if (!s.atF) out.push({ x: MX - s.dI * S, y: AY - s.hI * S / 2, r: 24, name: s.dI > 0 ? '实像' : '虚像' });
    out.push({ x: MX - s.f * S, y: AY, r: 14, name: '焦点 F' });
    return out;
  });

  function objArrow(ctx, x, h, color, dashed) {
    const top = AY - h * S;
    if (dashed) { line(ctx, x, AY, x, top, color, 4, [8, 6]); arrow(ctx, x, top + Math.sign(h) * 18, x, top, color, 4); }
    else arrow(ctx, x, AY, x, top, color, 5);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = state(), convex = s.f < 0, k = mode.k, XC = C('position');
    const xo = MX - s.dO * S, yt = AY - s.hO * S, xF = MX - s.f * S, xC = MX - 2 * s.f * S;
    const xi = MX - s.dI * S, yi = AY - s.hI * S;
    const inView = !s.atF && xi > XL && xi < XR && yi > YT && yi < YB;

    if (s.atF) topline(ctx, '物体位于焦点时，反射光线平行射出，不形成像。');
    else if (convex) topline(ctx, `情形 3：正立的虚像，在面镜后方 ${fmt(-s.dI, 1)} cm 处，像高是物高的 ${fmt(s.m, 2)} 倍。`);
    else if (s.dI > 0) topline(ctx, `情形 1：倒立的实像，在面镜前方 ${fmt(s.dI, 1)} cm 处，像高是物高的 ${fmt(-s.m, 2)} 倍。`);
    else topline(ctx, `情形 2：正立的虚像，在面镜后方 ${fmt(-s.dI, 1)} cm 处，像高是物高的 ${fmt(s.m, 2)} 倍。`);

    line(ctx, XL, AY, XR, AY, alpha(PAL.ink, 0.35), 2);
    const bow = mode.mix((v) => (v === 'convex' ? -1 : 1));
    mirrorArc(ctx, MX, AY, 250, 900 + 2 * fS.v * S, bow, F.ref('curved-mirror'));
    const RC = [F.ref('mirror-ray-1'), F.ref('mirror-ray-2'), F.ref('mirror-ray-3')];

    ctx.save(); ctx.beginPath(); ctx.rect(0, YT - 10, 1400, YB - YT + 20); ctx.clip();
    ctx.globalAlpha = k;
    /* ray 1: parallel to the axis, then through F or as if from F */
    const h1 = [MX, yt];
    ray(ctx, [xo, yt], h1, RC[0], { at: 0.5 });
    const r1 = atX(h1, [xF, AY], XL) || [XL, AY];
    ray(ctx, h1, r1, RC[0], { at: 0.3 });
    /* ray 2: to the center, leaving at the same angle to the axis */
    const r2 = [XL, AY + (AY - yt) * (MX - XL) / Math.max(MX - xo, 1)];
    ray(ctx, [xo, yt], [MX, AY], RC[1], { at: 0.5 });
    ray(ctx, [MX, AY], atX([MX, AY], r2, XL) || r2, RC[1], { at: 0.3 });
    /* ray 3: along the line through F, then parallel to the axis */
    const h3 = Math.abs(xF - xo) > 1e-6 ? atX([xo, yt], [xF, AY], MX) : null;
    if (h3 && !s.atF) {
      ray(ctx, [xo, yt], h3, RC[2], { at: 0.5 });
      ray(ctx, h3, [XL, h3[1]], RC[2], { at: 0.3 });
      if (!convex && s.dO < s.f) ray(ctx, [xF, AY], [xo, yt], RC[2], { dash: true });
    }
    if (!s.atF && s.dI < 0) {
      ray(ctx, h1, [xi, yi], RC[0], { dash: true });
      ray(ctx, [MX, AY], [xi, yi], RC[1], { dash: true });
      if (h3) ray(ctx, h3, [xi, yi], RC[2], { dash: true });
    }
    if (convex && h3) ray(ctx, h3, [xF, AY], RC[2], { dash: true });
    ctx.restore();

    dot(ctx, xF, AY, PAL.ink, true, 8);
    label(ctx, 'F', xF, AY, { side: 'below', gap: 26, size: 22 });
    if (xC > XL && xC < XR) { dot(ctx, xC, AY, PAL.ink, false, 8); label(ctx, 'C', xC, AY, { side: 'below', gap: 26, size: 22 }); }

    objArrow(ctx, xo, s.hO, F.ref('object'), false);
    if (inView) objArrow(ctx, xi, s.hI, F.ref('object-image'), s.dI < 0);
    else if (!s.atF) {
      const ex = s.dI > 0 ? XL + 10 : XR - 10;
      text(ctx, s.dI > 0 ? `像在前方 ${fmt(s.dI, 0)} cm 处，超出图外` : `像在后方 ${fmt(-s.dI, 0)} cm 处，超出图外`,
        ex, YB - 20, PAL.muted, { size: 18, align: s.dI > 0 ? 'left' : 'right', bg: PAL.panel });
    }

    const ray1y = yt;
    [0, 1, 2].forEach((i) => {
      const yy = i === 0 ? ray1y : i === 1 ? yt + (AY - yt) * 0.55 : (h3 ? yt + (h3[1] - yt) * 0.8 : null);
      if (yy === null || s.atF && i === 2) return;
      const xx = i === 1 ? xo + (MX - xo) * 0.55 : i === 2 ? xo + (MX - xo) * 0.8 : xo + (MX - xo) * 0.3;   /* rays 2 and 3 named at different points, so they never share a slot */
      text(ctx, String(i + 1), xx, yy - 18, RC[i], { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    });

    const y1 = AY + 150, y2 = AY + 200, y3 = AY + 250;
    hbracket(ctx, xo, MX, y1, XC, 'd_o');
    if (!s.atF) {
      const xe = Math.min(Math.max(xi, XL), XR);
      hbracket(ctx, Math.min(xe, MX), Math.max(xe, MX), y2, XC, 'd_i');
    }
    hbracket(ctx, Math.min(xF, MX), Math.max(xF, MX), y3, XC, 'f');

    if (s.atF) {
      readout(d.readout,
        `\\frac{1}{\\kdimg} = \\frac{1}{\\kffoc} - \\frac{1}{\\kdobj} = \\frac{1}{${fmt(s.f, 1)}\\text{ cm}} - \\frac{1}{${fmt(s.dO, 1)}\\text{ cm}} = 0`,
        '像距为无穷大：反射光线彼此平行地射出，取暖器或手电筒就是这样射出光束的。');
      return;
    }
    const fT = s.f < 0 ? `-${fmt(-s.f, 1)}` : fmt(s.f, 1), dT = s.dI < 0 ? `-${fmt(-s.dI, 1)}` : fmt(s.dI, 1);
    readout(d.readout,
      `\\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{\\kffoc}: \\quad \\frac{1}{${fmt(s.dO, 1)}\\text{ cm}} + \\frac{1}{${dT}\\text{ cm}} = \\frac{1}{${fT}\\text{ cm}}`,
      `放大率为 $m = -\\kdimg/\\kdobj$ = ${sgn(s.m, 2)}，所以像高 ${fmt(Math.abs(s.hI), 1)} cm，${s.m < 0 ? '倒立' : '正立'}；${s.dI > 0 ? '像距为正，所以像是实像，在面镜前方。' : '像距为负，所以像是虚像，在面镜后方。'}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
