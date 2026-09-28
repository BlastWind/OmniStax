/* Figures for section 25.6 Image Formation by Lenses. The page binds position
   alone, as ch25/COLOR.md gives 25.6: the focal length, the object and image
   distances and the two heights share its hue and are told apart by their
   brackets and labels. The power in diopters, the magnification, the index of
   refraction and every angle are untyped and in ink, as are the lenses, the axis,
   the people and every frame. The three rays of a ray diagram are told apart by
   the categorical palette. Nothing here moves: a ray diagram is a set of paths and
   an image is a state of the arrangement, so every figure registers no cycle and
   redraws on its controls alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, begin, line, dot, text, topline, hbracket, vbracket, hover, silhouette, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* three significant figures, as the book writes its answers */
function sig3(x) {
  const a = Math.abs(x);
  return a >= 100 ? fmt(x, 0) : a >= 10 ? fmt(x, 1) : a >= 1 ? fmt(x, 2) : fmt(x, 3);
}
const par = (x, s) => (x < 0 ? '(' + s + ')' : s);

/* a ray from one point to another with a small chevron at its middle, pointing the
   way the light goes */
function ray(ctx, x1, y1, x2, y2, color, w, dash) {
  line(ctx, x1, y1, x2, y2, color, w || 3.5, dash);
  if (dash) return;
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 60) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, mx = (x1 + x2) / 2 + ux * 8, my = (y1 + y2) / 2 + uy * 8;
  line(ctx, mx, my, mx - ux * 14 - uy * 8, my - uy * 14 + ux * 8, color, 3);
  line(ctx, mx, my, mx - ux * 14 + uy * 8, my - uy * 14 - ux * 8, color, 3);
}
/* where the line through (x0, y0) along (ux, uy) reaches x = X */
const atX = (x0, y0, ux, uy, X) => y0 + (uy / ux) * (X - x0);

/* a thin lens at x, half height h, drawn as the book draws it: a lentil for a
   converging lens and a waisted slab for a diverging one */
function lens(ctx, x, y, h, conv) {
  ctx.save(); ctx.beginPath();
  if (conv) {
    ctx.moveTo(x, y - h); ctx.quadraticCurveTo(x + 44, y, x, y + h); ctx.quadraticCurveTo(x - 44, y, x, y - h);
  } else {
    ctx.moveTo(x - 20, y - h); ctx.lineTo(x + 20, y - h); ctx.quadraticCurveTo(x - 2, y, x + 20, y + h);
    ctx.lineTo(x - 20, y + h); ctx.quadraticCurveTo(x + 2, y, x - 20, y - h);
  }
  ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fill();
  ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
}
function focus(ctx, x, y, name) {
  dot(ctx, x, y, PAL.ink, true, 7);
  text(ctx, name || 'F', x, y + 28, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
}

/* =====================================================================
   FIGURE 25.25 + 25.27 + 25.28 + 25.29 + 25.30 · sim-lens-focus · still · flat
   One thin lens and three rays. The light comes in parallel to the axis
   (25.25, 25.27), out from a focal point or toward the far one (25.28, the
   reverse), or through the center (25.30), from the left or from the right
   (25.29). The expanded view on the right traces ray 1 through a lens of glass
   (n = 1.50) with two spherical faces by the law of refraction itself, which is
   what the thin lens rules summarise. Scale: 55 units per cm, so the longest
   focal length, 8.00 cm, reaches 440 units from the lens at x = 520.
===================================================================== */
(function () {
  const d = sim('sim-lens-focus', 640);
  const kind = choice(d.controls, { label: '\\text{the lens}', options: [{ value: 'conv', label: 'converging' }, { value: 'div', label: 'diverging' }], value: 'conv', aria: 'the kind of lens' });
  const light = choice(d.controls, { label: '\\text{the light}', options: [{ value: 'par', label: 'parallel to the axis' }, { value: 'foc', label: 'from a focal point' }, { value: 'ctr', label: 'through the center' }], value: 'par', aria: 'how the light enters the lens' });
  const side = choice(d.controls, { label: '\\text{it comes from}', options: [{ value: 'l', label: 'the left' }, { value: 'r', label: 'the right' }], value: 'l', aria: 'the side the light comes from' });
  const fS = ctl(d.controls, { label: '|\\kffoc|', cls: 'position', min: 2, max: 8, step: 0.05, value: 5, unit: 'cm', dec: 2, aria: 'the size of the focal length', detents: [5] });

  const LX = 520, Y = 330, U = 55, HL = 170, H3 = 110, X0 = 40, X1 = 1000;
  const IB = { l: 1030, r: 1380, t: 96, b: 560 };            /* the expanded view */
  const N_GLASS = 1.5;

  /* the three rays of the main drawing, in the frame where light runs left to right:
     each is its incoming segment and its outgoing one, and the dashed lines the
     book draws where a ray only seems to come from, or head for, a focal point */
  function rays(conv, mode, f) {
    const fx = f * U, out = [];
    [H3, 0, -H3].forEach((h, i) => {
      const r = { i, segs: [], dash: [] };
      if (mode === 'ctr') {
        const k = [-0.28, 0, 0.28][i];
        r.segs.push([X0 - LX, -k * (X0 - LX), 0, 0], [0, 0, X1 - LX, k * (X1 - LX)]);
      } else if (mode === 'par') {
        r.segs.push([X0 - LX, -h, 0, -h]);
        if (conv) r.segs.push([0, -h, X1 - LX, atX(0, -h, fx, h, X1 - LX)]);
        else {
          r.segs.push([0, -h, X1 - LX, atX(0, -h, fx, -h, X1 - LX)]);
          if (h) r.dash.push([-fx, 0, 0, -h]);
        }
      } else if (conv) {
        if (h === 0) r.segs.push([-fx, 0, X1 - LX, 0]);
        else r.segs.push([-fx, 0, 0, -h], [0, -h, X1 - LX, -h]);
      } else {
        r.segs.push([X0 - LX, atX(0, -h, fx, h, X0 - LX), 0, -h], [0, -h, X1 - LX, -h]);
        if (h) r.dash.push([0, -h, fx, 0]);
      }
      out.push(r);
    });
    return out;
  }

  /* the expanded view: ray 1 through two spherical faces by Snell's law */
  function inter(p, u, c, R, pick) {
    const ox = p[0] - c[0], oy = p[1] - c[1], b = ox * u[0] + oy * u[1], q = ox * ox + oy * oy - R * R, D = b * b - q;
    if (D < 0) return null;
    const ts = [-b - Math.sqrt(D), -b + Math.sqrt(D)].filter((t) => t > 1e-6);
    const pts = ts.map((t) => [p[0] + t * u[0], p[1] + t * u[1]]);
    return pts.find(pick) || null;
  }
  function refract(u, n, n1, n2) {
    let nx = n[0], ny = n[1];
    if (nx * u[0] + ny * u[1] > 0) { nx = -nx; ny = -ny; }
    const ci = -(nx * u[0] + ny * u[1]), r = n1 / n2, k = 1 - r * r * (1 - ci * ci);
    if (k < 0) return null;
    const ct = Math.sqrt(k);
    return [r * u[0] + (r * ci - ct) * nx, r * u[1] + (r * ci - ct) * ny];
  }
  const ang = (v) => Math.atan2(-v[1], v[0]);
  function between(ctx, p, a, b, r, s) {
    const a0 = ang(a); let dd = ang(b) - a0;
    while (dd > Math.PI) dd -= 2 * Math.PI; while (dd < -Math.PI) dd += 2 * Math.PI;
    angleArc(ctx, { x: p[0], y: p[1] }, r, a0, a0 + dd, s);
  }
  function expanded(ctx, conv, u0, s) {
    const cx = (IB.l + IB.r) / 2, ay = IB.b + 150, R = 1400, T = conv ? 200 : 36, hy = ay - (IB.t + IB.b) / 2;
    const c1 = conv ? [cx + R - T / 2, ay] : [cx - R - T / 2, ay];
    const c2 = conv ? [cx - R + T / 2, ay] : [cx + R + T / 2, ay];
    const face1 = (y) => (conv ? c1[0] - Math.sqrt(R * R - (y - ay) ** 2) : c1[0] + Math.sqrt(R * R - (y - ay) ** 2));
    const face2 = (y) => (conv ? c2[0] + Math.sqrt(R * R - (y - ay) ** 2) : c2[0] - Math.sqrt(R * R - (y - ay) ** 2));
    ctx.save();
    ctx.beginPath(); ctx.rect(IB.l, IB.t, IB.r - IB.l, IB.b - IB.t); ctx.clip();
    ctx.translate(cx, 0); ctx.scale(s, 1); ctx.translate(-cx, 0);
    /* the glass */
    ctx.beginPath();
    for (let y = IB.t - 10; y <= IB.b + 10; y += 6) ctx.lineTo(face1(y), y);
    for (let y = IB.b + 10; y >= IB.t - 10; y -= 6) ctx.lineTo(face2(y), y);
    ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fill();
    ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.stroke();
    /* ray 1: it meets the first face at height hy above the axis */
    const yA = ay - hy, pA = [face1(yA), yA];
    const start = [pA[0] - u0[0] * 400, pA[1] - u0[1] * 400];
    const nA = [(pA[0] - c1[0]) / R, (pA[1] - c1[1]) / R];
    const u1 = refract(u0, nA, 1, N_GLASS);
    const pB = u1 && inter(pA, u1, c2, R, (q) => Math.abs(q[0] - face2(q[1])) < 2);
    const nB = pB && [(pB[0] - c2[0]) / R, (pB[1] - c2[1]) / R];
    const u2 = pB && refract(u1, nB, N_GLASS, 1);
    const RC = cat(0);
    ray(ctx, start[0], start[1], pA[0], pA[1], RC, 4);
    const out = [];
    if (u2) {
      ray(ctx, pA[0], pA[1], pB[0], pB[1], RC, 4);
      ray(ctx, pB[0], pB[1], pB[0] + u2[0] * 400, pB[1] + u2[1] * 400, RC, 4);
      /* the perpendiculars, dotted, and the three angles the book marks */
      const oA = nA[0] * u0[0] + nA[1] * u0[1] > 0 ? [-nA[0], -nA[1]] : nA;
      const oB = nB[0] * u2[0] + nB[1] * u2[1] < 0 ? [-nB[0], -nB[1]] : nB;
      [[pA, oA], [pB, oB]].forEach(([p, n]) => line(ctx, p[0] - n[0] * 90, p[1] - n[1] * 90, p[0] + n[0] * 90, p[1] + n[1] * 90, alpha(PAL.ink, 0.55), 2, [4, 6]));
      out.push({ pA, oA, pB, oB, u0, u1, u2 });
    }
    ctx.restore();
    if (!out.length) return;
    /* the angle names are set in the unflipped frame, so they read the right way */
    const o = out[0], fl = (p) => [cx + (p[0] - cx) * s, p[1]], fv = (v) => [v[0] * s, v[1]];
    between(ctx, fl(o.pA), fv([-o.u0[0], -o.u0[1]]), fv(o.oA), 54, 'θ₁');
    between(ctx, fl(o.pA), fv(o.u1), fv([-o.oA[0], -o.oA[1]]), 54, 'θ₂');
    between(ctx, fl(o.pB), fv(o.u2), fv(o.oB), 54, 'θ₁′');
  }

  function draw() {
    const { ctx } = begin(d.c);
    const conv = kind.value === 'conv', mode = light.value, s = side.value === 'l' ? 1 : -1;
    const fa = fS.v, f = conv ? fa : -fa, P = 1 / (f / 100);
    const X = (x) => LX + s * x;

    line(ctx, X0 - 10, Y, X1 + 10, Y, alpha(PAL.ink, 0.45), 2);
    lens(ctx, LX, Y, HL, conv);
    focus(ctx, LX - fa * U, Y); focus(ctx, LX + fa * U, Y);

    const rs = rays(conv, mode, f);
    rs.forEach((r) => {
      const col = cat(r.i);
      r.segs.forEach((g) => ray(ctx, X(g[0]), Y + g[1], X(g[2]), Y + g[3], col, 4));
      r.dash.forEach((g) => line(ctx, X(g[0]), Y + g[1], X(g[2]), Y + g[3], alpha(col, 0.8), 2.5, [8, 8]));
      const g0 = r.segs[0];
      text(ctx, String(r.i + 1), X(g0[0]) - s * 20, Y + g0[1], col, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    });

    /* the focal length, measured from the center of the lens to the focal point the
       figure's rays use */
    const fSide = (mode === 'par') === conv ? 1 : -1;
    const fEnd = X(fSide * fa * U);
    hbracket(ctx, Math.min(LX, fEnd), Math.max(LX, fEnd), Y + HL + 50, C('position'), (conv ? 'f = ' : 'f = −') + fmt(fa, 2) + ' cm');
    text(ctx, 'axis', s > 0 ? X1 + 6 : X0 - 6, Y - 18, PAL.muted, { size: 17, align: s > 0 ? 'right' : 'left' });

    /* the expanded view, of the incoming part of ray 1 */
    text(ctx, 'ray 1, expanded', (IB.l + IB.r) / 2, IB.t - 22, PAL.muted, { size: 18, align: 'center' });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 1.5; ctx.strokeRect(IB.l, IB.t, IB.r - IB.l, IB.b - IB.t); ctx.restore();
    const seg = rs[0].segs[0];
    const L = Math.hypot(seg[2] - seg[0], seg[3] - seg[1]);
    expanded(ctx, conv, [(seg[2] - seg[0]) / L, (seg[3] - seg[1]) / L], s);

    const lensName = conv ? 'A converging lens' : 'A diverging lens';
    const fs = fmt(fa, 2) + ' cm';
    const head = mode === 'par'
      ? (conv ? `${lensName} of focal length ${fs} brings parallel rays together at its focal point F.` : `${lensName} spreads parallel rays so that they seem to come from its focal point F, ${fs} away.`)
      : mode === 'foc'
        ? (conv ? `Light spreading from the focal point leaves a converging lens as a parallel beam.` : `Rays headed for the far focal point leave a diverging lens parallel to its axis.`)
        : `A ray through the center of a thin lens does not change direction.`;
    topline(ctx, head);
    readout(d.readout, `P = \\frac{1}{\\kffoc} = \\frac{1}{${conv ? '' : '-'}${fmt(fa / 100, 4)}\\ \\text{m}} = ${conv ? '' : '-'}${sig3(Math.abs(P))}\\ \\text{D}`,
      conv ? 'The focal length and the power of a converging lens are positive.' : 'The focal length and the power of a diverging lens are negative.');
  }
  hover(d.stage, () => [
    { x: LX, y: Y - HL + 20, r: 30, name: kind.value === 'conv' ? 'converging lens' : 'diverging lens' },
    { x: LX - fS.v * U, y: Y, r: 16, name: 'focal point F' }, { x: LX + fS.v * U, y: Y, r: 16, name: 'focal point F' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.31 + 25.33 + 25.35 + 25.37 · sim-image-by-lens · still · flat
   One lens and one person, and the rays of the rules from the top of her head.
   The image is where the rays cross, or, for a virtual image, where the dashed
   lines traced back from them meet. The scale follows the values (up to 10 units per cm, lens at
   x = 560) so that the object, both focal points and a nearby image fit
   the frame; a far image runs off the drawing and the headline
   and readout carry its numbers. Everything in the scene is clipped to the
   drawing's frame.
===================================================================== */
(function () {
  const d = sim('sim-image-by-lens', 780);
  const kind = choice(d.controls, { label: '\\text{the lens}', options: [{ value: 'conv', label: 'converging' }, { value: 'div', label: 'diverging' }], value: 'conv', aria: 'the kind of lens' });
  const fS = ctl(d.controls, { label: '|\\kffoc|', cls: 'position', min: 5, max: 60, step: 0.5, value: 50, unit: 'cm', dec: 1, aria: 'the size of the focal length', detents: [10, 50] });
  const doS = ctl(d.controls, { label: '\\kdobj', cls: 'position', min: 3, max: 150, step: 0.5, value: 75, unit: 'cm', dec: 1, aria: 'the object distance',
    detents: [7.5],
    specials: [
      { at: () => (kind.value === 'conv' ? fS.v : null), label: 'f' },
      { at: () => (kind.value === 'conv' && 2 * fS.v <= 150 ? 2 * fS.v : null), label: '2f' },
    ] });
  const hoS = ctl(d.controls, { label: '\\khobj', cls: 'position', min: 5, max: 40, step: 0.5, value: 30, unit: 'cm', dec: 1, aria: 'the height of the object' });

  const LX = 560, Y = 420, HL = 250;
  let U = 3.4;
  const FR = { l: 16, r: 1384, t: 84, b: 764 };
  const PC = () => C('position');

  function state() {
    const conv = kind.value === 'conv', fa = fS.v, f = conv ? fa : -fa, dO = doS.v, hO = hoS.v;
    const atF = conv && Math.abs(dO - f) < 1e-6;
    const dI = atF ? Infinity : (f * dO) / (dO - f);
    const m = atF ? Infinity : -dI / dO;
    /* the scale follows the values: the object, both focal points and a nearby
       image stay in the frame, and the object is never taller than 250 units */
    const near = isFinite(dI) && Math.abs(dI) < 2.5 * dO;
    U = Math.min(10, 480 / Math.max(dO, 1.2 * fa), 250 / hO, near ? (dI > 0 ? 740 : 520) / Math.abs(dI) : 10);
    return { conv, fa, f, dO, hO, dI, m, atF, hI: m * hO };
  }

  function person(ctx, x, h, flip) {
    const s = Math.abs(h) / silhouette.height(1);
    ctx.save(); ctx.translate(x, Y); ctx.scale(1, flip ? -1 : 1);
    silhouette(ctx, { x: 0, y: 0, s, face: 1, pose: 'stand', color: alpha(PAL.ink, 0.8) });
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const st = state(), fx = st.f * U;
    const xo = LX - st.dO * U, yt = Y - st.hO * U;
    const virt = !st.atF && st.dI < 0;
    const xi = LX + st.dI * U, yi = Y - st.hI * U;
    const XE = FR.r, XB = FR.l;

    ctx.save(); ctx.beginPath(); ctx.rect(FR.l, FR.t, FR.r - FR.l, FR.b - FR.t); ctx.clip();
    line(ctx, FR.l, Y, FR.r, Y, alpha(PAL.ink, 0.45), 2);
    lens(ctx, LX, Y, HL, st.conv);
    focus(ctx, LX - st.fa * U, Y); focus(ctx, LX + st.fa * U, Y);

    person(ctx, xo, st.hO * U, false);
    if (isFinite(st.dI)) {
      ctx.save(); ctx.globalAlpha = virt ? 0.4 : 1;
      person(ctx, xi, st.hI * U, st.hI < 0);
      ctx.restore();
    }

    /* ray 1: in parallel to the axis, out along the line through the lens point and
       the focal point on the far side (converging) or the near side (diverging) */
    const c1 = cat(0), c2 = cat(1), c3 = cat(2);
    ray(ctx, xo, yt, LX, yt, c1, 4);
    let ux = fx, uy = Y - yt; if (ux < 0) { ux = -ux; uy = -uy; }
    ray(ctx, LX, yt, XE, atX(LX, yt, ux, uy, XE), c1, 4);
    /* ray 2: straight through the center */
    ray(ctx, xo, yt, LX, Y, c2, 4);
    ray(ctx, LX, Y, XE, atX(LX, Y, LX - xo, Y - yt, XE), c2, 4);
    /* ray 3: toward (or away from) the focal point F on the object's side for a
       converging lens, toward the far one for a diverging lens; out parallel */
    const p3 = LX - fx, y3ok = Math.abs(p3 - xo) > 4;
    const y3 = y3ok ? yt + ((Y - yt) * (LX - xo)) / (p3 - xo) : 0;
    if (y3ok && Math.abs(y3 - Y) < HL) {
      ray(ctx, xo, yt, LX, y3, c3, 4);
      ray(ctx, LX, y3, XE, y3, c3, 4);
      if (!st.conv) line(ctx, LX, y3, p3, Y, alpha(c3, 0.8), 2.5, [8, 8]);
      if (st.conv && p3 < xo) line(ctx, p3, Y, xo, yt, alpha(c3, 0.8), 2.5, [8, 8]);
    }
    if (!st.conv) line(ctx, LX, yt, LX + fx, Y, alpha(c1, 0.8), 2.5, [8, 8]);
    if (virt) {
      const xb = Math.max(XB, xi);
      line(ctx, LX, yt, xb, atX(LX, yt, ux, uy, xb), alpha(c1, 0.8), 2.5, [8, 8]);
      line(ctx, LX, Y, xb, atX(LX, Y, LX - xo, Y - yt, xb), alpha(c2, 0.8), 2.5, [8, 8]);
      if (y3ok && Math.abs(y3 - Y) < HL) line(ctx, LX, y3, xb, y3, alpha(c3, 0.8), 2.5, [8, 8]);
    }
    dot(ctx, xo, yt, PAL.ink, true, 6);
    const inFrame = isFinite(st.dI) && xi > FR.l + 10 && xi < FR.r - 10 && yi > FR.t && yi < FR.b;
    if (inFrame) dot(ctx, xi, yi, PAL.ink, !virt, 7);
    ctx.restore();

    /* the brackets: d_o below the axis on the object's side; d_i above the axis for a
       real image and below it, one row lower, for a virtual one */
    hbracket(ctx, xo, LX, Y + 60, PC(), 'd_o', { side: 'below' });
    if (inFrame && Math.abs(xi - LX) > 24) {
      if (virt) hbracket(ctx, xi, LX, Y + 130, PC(), 'd_i', { side: 'below' });
      else hbracket(ctx, LX, xi, Y - HL - 20, PC(), 'd_i');
    }
    vbracket(ctx, xo - 34, yt, Y, PC(), 'h_o', -1);
    if (inFrame && Math.abs(yi - Y) > 24) vbracket(ctx, xi + 34, Math.min(yi, Y), Math.max(yi, Y), PC(), 'h_i', 1);
    hbracket(ctx, LX, LX + st.fa * U, FR.b - 34, PC(), 'f', { side: 'above' });
    [c1, c2, c3].forEach((c, i) => text(ctx, String(i + 1), LX + 36 + i * 24, FR.t + 18, c, { size: 20, weight: 600, align: 'center', bg: PAL.panel }));
    text(ctx, 'rays', LX - 8, FR.t + 18, PAL.muted, { size: 17, align: 'right' });

    const cm = (x) => sig3(Math.abs(x)) + ' cm';
    let head;
    if (st.atF) head = 'At the focal point the rays leave the lens parallel, so the image is at infinity.';
    else if (!st.conv) head = `Case 3: the image is virtual, upright and ${sig3(st.m)} times as tall, ${cm(st.dI)} from the lens on the object’s side.`;
    else if (virt) head = `Case 2: the image is virtual, upright and ${sig3(st.m)} times as tall, ${cm(st.dI)} from the lens on the object’s side.`;
    else head = `Case 1: the image is real, inverted and ${sig3(Math.abs(st.m))} times as tall, ${cm(st.dI)} behind the lens.`;
    topline(ctx, head);

    const fN = sig3(st.f) + '\\ \\text{cm}', fT = par(st.f, fN), oT = sig3(st.dO) + '\\ \\text{cm}';
    if (st.atF) {
      readout(d.readout, `\\frac{1}{\\kdimg} = \\frac{1}{\\kffoc} - \\frac{1}{\\kdobj} = \\frac{1}{${fT}} - \\frac{1}{${oT}} = 0`,
        'With 1/dᵢ equal to zero the image distance is infinite, and no image is formed at any finite distance.');
    } else {
      const iT = sig3(st.dI) + '\\ \\text{cm}';
      readout(d.readout, `\\kdimg = \\frac{\\kffoc\\kdobj}{\\kdobj - \\kffoc} = \\frac{(${fN})(${oT})}{${oT} - ${fT}} = ${iT},\\quad m = -\\frac{\\kdimg}{\\kdobj} = ${sig3(st.m)}`,
        `The image is ${sig3(st.hI).replace('-', '\u2212')} cm tall, ${virt ? 'with a negative image distance, since it is virtual' : 'on the far side of the lens, since it is real'}.`);
    }
  }
  hover(d.stage, () => {
    const st = state(), out = [
      { x: LX - st.dO * U, y: Y - st.hO * U / 2, r: 30, name: 'the object' },
      { x: LX - st.fa * U, y: Y, r: 16, name: 'focal point F' }, { x: LX + st.fa * U, y: Y, r: 16, name: 'focal point F' },
      { x: LX, y: Y - HL + 30, r: 30, name: st.conv ? 'converging lens' : 'diverging lens' },
    ];
    if (isFinite(st.dI)) out.push({ x: LX + st.dI * U, y: Y - st.hI * U / 2, r: 30, name: st.dI < 0 ? 'the virtual image' : 'the real image' });
    return out;
  });
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.32 · sim-projected-image · still · flat, not to scale
   A camera and an eye, each forming a real image of the same person. The
   drawing places the person on a logarithmic run of distances, 0.25 m at
   x = 560 and 10.0 m at x = 90, and exaggerates the lens's travel in the camera
   (40 units per millimeter beyond 50.0 mm) and the swelling of the eye's lens,
   since both are too small to see; the readout gives the true numbers.
===================================================================== */
(function () {
  const d = sim('sim-projected-image', 560);
  const what = choice(d.controls, { label: '\\text{the image falls on}', options: [{ value: 'cam', label: 'the film of a camera' }, { value: 'eye', label: 'the retina of an eye' }], value: 'cam', aria: 'what the image is projected onto' });
  const doS = ctl(d.controls, { label: '\\kdobj', cls: 'position', min: 0.25, max: 10, step: 0.05, value: 3, unit: 'm', dec: 2, aria: 'the distance of the person from the lens' });

  const Y = 330, FCAM = 0.05, DEYE = 0.02, FILM = 1250;
  const px = (dO) => 560 - (Math.log(dO / 0.25) / Math.log(40)) * 470;

  function draw() {
    const { ctx } = begin(d.c);
    const cam = what.value === 'cam', dO = doS.v;
    const dI = cam ? (FCAM * dO) / (dO - FCAM) : DEYE;
    const P = 1 / dO + 1 / dI;
    const xo = px(dO), HO = 150, yt = Y - HO;
    let xl;
    line(ctx, 40, Y, 1340, Y, alpha(PAL.ink, 0.4), 2);
    silhouette(ctx, { x: xo, y: Y, s: HO / silhouette.height(1), face: 1, pose: 'stand', color: alpha(PAL.ink, 0.8) });

    if (cam) {
      xl = FILM - 330 - (dI - FCAM) * 1000 * 40;
      /* the body of the camera, and the bellows that let the lens move out */
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5; ctx.fillStyle = alpha(PAL.ink, 0.05);
      ctx.beginPath(); ctx.rect(FILM - 250, Y - 130, 270, 260); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(FILM - 250, Y - 100); ctx.lineTo(xl + 10, Y - 80); ctx.lineTo(xl + 10, Y + 80); ctx.lineTo(FILM - 250, Y + 100); ctx.stroke();
      ctx.restore();
      line(ctx, FILM, Y - 110, FILM, Y + 110, PAL.ink, 5);
      text(ctx, 'film', FILM, Y - 150, PAL.muted, { size: 18, align: 'center' });
      lens(ctx, xl, Y, 80, true);
    } else {
      const ex = 1090, R = 170;
      xl = FILM - 330;
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5; ctx.fillStyle = alpha(PAL.ink, 0.04);
      ctx.beginPath(); ctx.arc(ex, Y, R, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(ex, Y, R, -0.75, 0.75); ctx.stroke(); ctx.restore();
      text(ctx, 'retina', ex + R + 14, Y - 110, PAL.muted, { size: 18, align: 'left' });
      /* the lens of the eye grows fatter as its power rises from 50 D */
      const k = 1 + (P - 50) * 0.35;
      ctx.save(); ctx.beginPath(); ctx.ellipse(xl, Y, 16 * k, 62, 0, 0, Math.PI * 2);
      ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
    }
    /* the image of the top of her head, where the ray through the center meets the
       film or the retina */
    const yImg = Y + ((Y - yt) * (FILM - xl)) / (xl - xo);
    const hi = yImg - Y;
    ray(ctx, xo, yt, xl, Y, cat(1), 3.5); ray(ctx, xl, Y, FILM, yImg, cat(1), 3.5);
    ray(ctx, xo, yt, xl, Y - 60, cat(0), 3.5); ray(ctx, xl, Y - 60, FILM, yImg, cat(0), 3.5);
    ctx.save(); ctx.translate(FILM - 6, Y); ctx.scale(1, -1);
    silhouette(ctx, { x: 0, y: 0, s: hi / silhouette.height(1), face: 1, pose: 'stand', color: alpha(PAL.ink, 0.85) });
    ctx.restore();

    const PC = C('position');
    hbracket(ctx, xo, xl, Y + 150, PC, 'd_o', { side: 'below' });
    hbracket(ctx, xl, FILM, Y + 150, PC, 'd_i', { side: 'below' });
    text(ctx, 'not to scale', 40, 520, PAL.muted, { size: 17, align: 'left' });

    const m2 = (x) => sig3(x) + '\\ \\text{m}';
    if (cam) {
      topline(ctx, `At ${sig3(dO)} m the image forms ${sig3(dI * 1000)} mm behind the lens, so the lens is set that far from the film.`);
      readout(d.readout, `\\kdimg = \\frac{\\kffoc\\kdobj}{\\kdobj - \\kffoc} = \\frac{(0.0500\\ \\text{m})(${m2(dO)})}{${m2(dO)} - 0.0500\\ \\text{m}} = ${sig3(dI * 1000)}\\ \\text{mm}`,
        'The focal length of the camera lens is fixed at 50.0 mm, so the lens moves.');
    } else {
      topline(ctx, `At ${sig3(dO)} m the lens of the eye takes a power of ${sig3(P)} D to keep the image on the retina.`);
      readout(d.readout, `P = \\frac{1}{\\kffoc} = \\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{${m2(dO)}} + \\frac{1}{0.0200\\ \\text{m}} = ${sig3(P)}\\ \\text{D}`,
        'The retina stays 2.00 cm behind the lens, so the lens changes its power.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
