/* Figures for section 26.4 Microscopes. The figures colour position and angle: the
   object and image distances of both lenses, the separation of the lenses and the
   aperture diameter share position's hue and are told apart by their brackets and
   labels; the half-angle of acceptance, the ray's tilt and the fiber's α_max are
   angles. The objective, the eyepiece, the object and its two images; the specimen,
   cover glass and objective of the acceptance cone; the fiber's ray, core and
   cladding; and the condenser lens, concave mirror, annular stop and glass reflector
   are referents and wear F.ref. Every magnification, the numerical aperture, the
   f-number and every index are ink, as is every frame. Rays the text does not name
   one by one take F.cat past their figure's referent places. Nothing here moves: a
   ray diagram is a set of paths, so every figure registers no cycle and redraws on
   its controls alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, begin, line, dot, text, topline, hbracket, hover, angleArc, view, face } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const DEG = Math.PI / 180;

/* three significant figures, as the book writes its answers */
function sig3(x) {
  const a = Math.abs(x);
  return a >= 100 ? fmt(x, 0) : a >= 10 ? fmt(x, 1) : a >= 1 ? fmt(x, 2) : fmt(x, 3);
}

/* a ray from one point to another with a small chevron at its middle, pointing the
   way the light goes */
function ray(ctx, x1, y1, x2, y2, color, w, dash) {
  line(ctx, x1, y1, x2, y2, color, w || 3.5, dash);
  if (dash) return;
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 70) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, mx = (x1 + x2) / 2 + ux * 8, my = (y1 + y2) / 2 + uy * 8;
  line(ctx, mx, my, mx - ux * 14 - uy * 8, my - uy * 14 + ux * 8, color, 3);
  line(ctx, mx, my, mx - ux * 14 + uy * 8, my - uy * 14 - ux * 8, color, 3);
}

/* a thin converging lens at x, half height h, drawn as the book draws it */
function lens(ctx, x, y, h, bulge, color) {
  const b = bulge || 40;
  ctx.save(); ctx.beginPath();
  ctx.moveTo(x, y - h); ctx.quadraticCurveTo(x + b, y, x, y + h); ctx.quadraticCurveTo(x - b, y, x, y - h);
  ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fill();
  ctx.strokeStyle = color || alpha(PAL.ink, 0.75); ctx.lineWidth = color ? 3 : 2.5; ctx.stroke(); ctx.restore();
}
function focus(ctx, x, y, name) {
  dot(ctx, x, y, PAL.ink, true, 6);
  text(ctx, name, x, y + 26, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
}
/* an image or object drawn as an upright or inverted arrow of height h (up positive) */
function arrowUp(ctx, x, y, h, color, dash) {
  if (Math.abs(h) < 3) return;
  const s = Math.sign(h), tip = y - h;
  line(ctx, x, y, x, tip + s * 10, color, 3.5, dash);
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x, tip); ctx.lineTo(x - 7, tip + s * 14); ctx.lineTo(x + 7, tip + s * 14); ctx.closePath(); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 26.16 · sim-compound-microscope · still · flat, not to scale
   The objective (f_o = 6.00 mm, Example 26.5) and the eyepiece on one axis. The
   tube and the eyepiece side are drawn at 2.2 units per millimeter; the object's
   side is stretched so that the drawn objective, whose focal points sit 60 units
   out, still obeys the thin lens equation for the drawn distances, and the rays
   stay straight. One vertical scale serves the whole drawing, chosen so that the
   final image stays in frame. Paraxial rays: a ray meeting a lens at height y
   leaves with its slope less y/f in the drawing's own units. The objective, the
   eyepiece, the object and the first and final images are the five referents; the two
   rays take F.cat(5) and F.cat(6).
===================================================================== */
(function () {
  const d = sim('sim-compound-microscope', 720);
  const FO = 6.0;
  const doS = ctl(d.controls, { label: '\\kdobj', cls: 'position', min: 6.2, max: 7.0, step: 0.01, value: 6.2, unit: 'mm', dec: 2, aria: 'the distance of the object from the objective' });
  const LS = ctl(d.controls, { label: 'L', cls: 'position', min: 190, max: 300, step: 0.5, value: 230, unit: 'mm', dec: 1, aria: 'the separation of the objective and the eyepiece',
    specials: [{ at: () => { const dI = (FO * doS.v) / (doS.v - FO); return dI + feS.v; }, label: 'image at infinity' }] });
  const feS = ctl(d.controls, { label: '\\kfeye', cls: 'position', min: 20, max: 80, step: 0.5, value: 50, unit: 'mm', dec: 1, aria: 'the focal length of the eyepiece' });

  const XO = 330, Y = 300, FD = 60, S2 = 2.2;
  const FR = { l: 16, r: 1384, t: 96, b: 708 };
  const PC = () => C('position');
  const OB = () => F.ref('objective'), EY = () => F.ref('eyepiece'), OJ = () => F.ref('object'), I1 = () => F.ref('first-image'), I2 = () => F.ref('final-image');

  function state() {
    const dO = doS.v, L = LS.v, fe = feS.v;
    const dI = (FO * dO) / (dO - FO), b = dI * S2, a = 1 / (1 / FD - 1 / b);
    const doP = L - dI, inf = Math.abs(doP - fe) < 1e-3;
    const diP = inf ? Infinity : (fe * doP) / (doP - fe);
    const mo = -dI / dO, me = inf ? Infinity : -diP / doP;
    return { dO, L, fe, dI, a, b, doP, diP, inf, mo, me, m: mo * me, XE: XO + L * S2, fdE: fe * S2 };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = state();
    PC();
    const xOb = XO - s.a, xI1 = XO + s.b, XE = s.XE;
    const mdO = -s.b / s.a;
    const fin = !s.inf && Math.abs(s.diP * S2) < 1400;
    const hd = Math.max(7, Math.min(40, 150 / Math.abs(mdO), fin ? 380 / Math.abs(mdO * s.me) : 40));
    const h1 = hd * mdO;
    const xI2 = s.inf ? Infinity : XE + s.diP * S2, h2 = s.inf ? 0 : h1 * s.me;

    ctx.save(); ctx.beginPath(); ctx.rect(FR.l, FR.t, FR.r - FR.l, FR.b - FR.t); ctx.clip();
    line(ctx, FR.l, Y, FR.r, Y, alpha(PAL.ink, 0.45), 2, [10, 8]);

    /* two rays from the tip of the object: parallel to the axis, and through the
       center of the objective; both pass through the tip of the first image */
    const rays = [
      { col: cat(5), pts: [[xOb, hd], [XO, hd]] },
      { col: cat(6), pts: [[xOb, hd], [XO, 0]] },
    ];
    const hits = [];
    rays.forEach((r) => {
      const [x0, y0] = r.pts[1];
      const k = (h1 - y0) / (xI1 - x0), hE = y0 + k * (XE - x0);
      const out = k - hE / s.fdE;
      r.pts.push([XE, hE]); r.out = out; hits.push(hE);
    });
    const HE = Math.max(110, Math.min(210, Math.max(...hits.map(Math.abs)) + 30));
    lens(ctx, XO, Y, 90, 26, OB());
    lens(ctx, XE, Y, HE, 46, EY());

    rays.forEach((r) => {
      const p = r.pts;
      ray(ctx, p[0][0], Y - p[0][1], p[1][0], Y - p[1][1], r.col, 3.5);
      ray(ctx, p[1][0], Y - p[1][1], p[2][0], Y - p[2][1], r.col, 3.5);
      const hE = p[2][1], xr = FR.r;
      ray(ctx, XE, Y - hE, xr, Y - (hE + r.out * (xr - XE)), r.col, 3.5);
      /* a virtual final image: the leaving rays traced back as dashed lines */
      if (!s.inf && s.diP < 0) {
        const xb = Math.max(FR.l, xI2);
        line(ctx, XE, Y - hE, xb, Y - (hE + r.out * (xb - XE)), alpha(r.col, 0.8), 2.5, [8, 8]);
      }
    });

    focus(ctx, XO - FD, Y, 'F_{o}'); focus(ctx, XO + FD, Y, 'F_{o}');
    focus(ctx, XE - s.fdE, Y, 'F_{e}'); focus(ctx, XE + s.fdE, Y, 'F_{e}');

    arrowUp(ctx, xOb, Y, hd, OJ());
    arrowUp(ctx, xI1, Y, h1, I1());
    const i2in = fin && xI2 > FR.l + 10 && xI2 < FR.r - 10;
    if (i2in) arrowUp(ctx, xI2, Y, h2, s.diP < 0 ? alpha(I2(), 0.6) : I2(), s.diP < 0 ? [8, 6] : undefined);
    ctx.restore();

    /* the brackets, above the axis as the book sets them */
    const yb = Y - 150;
    if (s.a > 30) hbracket(ctx, xOb, XO, yb, PC(), 'd_{o}');
    hbracket(ctx, XO, xI1, yb, PC(), 'd_{i}');
    if (s.doP * S2 > 44) hbracket(ctx, xI1, XE, yb, PC(), 'd_{o}′');
    else hbracket(ctx, xI1, XE, yb, PC());
    if (i2in && Math.abs(xI2 - XE) > 40) hbracket(ctx, Math.min(xI2, XE), Math.max(xI2, XE), FR.b - 56, PC(), 'd_{i}′', { side: 'above' });

    text(ctx, 'objective', XO, Y + 118, OB(), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'eyepiece', XE + 30, Y - HE - 4, EY(), { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'object', xOb - 12, Y - hd - 18, OJ(), { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'first image', xI1, Y - h1 + 26, I1(), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    if (i2in) text(ctx, 'final image', xI2 + (s.diP < 0 ? 14 : -14), Math.min(FR.b - 16, Y - h2 - 16), I2(), { size: 18, weight: 600, align: s.diP < 0 ? 'left' : 'right', bg: PAL.panel });
    text(ctx, 'not to scale', FR.r - 10, FR.b - 14, PAL.muted, { size: 17, align: 'right' });

    const mm = (x) => sig3(Math.abs(x)) + ' mm';
    let head;
    if (s.inf) head = 'The first image sits at the focal point of the eyepiece, so the rays leave it parallel and the final image is at infinity.';
    else if (s.diP < 0) head = `The final image is virtual and inverted, ${sig3(Math.abs(s.m))} times the size of the object and ${mm(s.diP)} to the left of the eyepiece.`;
    else head = `The eyepiece forms a real, upright image ${mm(s.diP)} to its right, which could be projected but not viewed.`;
    topline(ctx, head);

    const note = `The first image forms ${mm(s.dI)} from the objective and ${mm(s.doP)} from the eyepiece.`;
    if (s.inf) {
      const fT = fmt(s.fe, 1) + '\\ \\text{mm}';
      readout(d.readout, `\\frac{1}{\\kdimgp} = \\frac{1}{\\kfeye} - \\frac{1}{\\kdobjp} = \\frac{1}{${fT}} - \\frac{1}{${fT}} = 0`, note);
    } else {
      readout(d.readout, `m = m_{\\text{o}}m_{\\text{e}} = (${sig3(s.mo)})(${sig3(s.me)}) =${sig3(s.m)}`,
        note + ` The final image is ${mm(s.diP)} ${s.diP < 0 ? 'to the left of' : 'to the right of'} the eyepiece.`);
    }
  }
  hover(d.stage, () => {
    const s = state();
    return [
      { x: XO - s.a, y: Y - 10, r: 22, name: 'the object' },
      { x: XO, y: Y - 60, r: 26, name: 'objective lens' },
      { x: s.XE, y: Y - 90, r: 30, name: 'eyepiece' },
      { x: XO + s.b, y: Y + 20, r: 22, name: 'the first image' },
    ];
  });
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.17 + 26.19 · sim-numerical-aperture · still · flat section
   A point P on the specimen under a cover glass (n = 1.52), a medium in the gap
   and an objective above whose cone has half-angle α in that medium. A fan of
   rays leaves P every 5° inside the glass; each refracts at the top of the glass
   by the law of refraction, or is totally reflected, and reaches the objective or
   misses it. The objective's width follows α and the medium, so that its edge
   ray is exactly the edge of the cone. The specimen's point P, the cover glass and
   the objective are the referents; the rays take F.cat(3), and α is an angle.
===================================================================== */
(function () {
  const d = sim('sim-numerical-aperture', 620);
  const N = { air: 1.0, water: 1.33, oil: 1.51 }, NAME = { air: 'air', water: 'water', oil: 'oil' };
  const med = choice(d.controls, { label: '\\text{medium}', options: [{ value: 'air', label: 'air' }, { value: 'water', label: 'water' }, { value: 'oil', label: 'oil' }], value: 'air', aria: 'the medium between the objective and the cover glass' });
  const aS = ctl(d.controls, { label: '\\kalphahalf', cls: 'angle', min: 10, max: 72, step: 0.1, value: 48.6, unit: '°', dec: 1, aria: 'half the angle of acceptance',
    specials: [
      { at: () => Math.asin(0.1 / N[med.value]) / DEG, label: '0.10 NA' },
      { at: () => Math.asin(0.75 / N[med.value]) / DEG, label: '0.75 NA' },
    ] });

  const CX = 560, GB = 560, GT = 500, LY = 390, NG = 1.52, TOP = 110;
  const T = GB - GT, G = GT - LY;

  function draw() {
    const { ctx } = begin(d.c);
    const n = med.mix((v) => N[v]), nv = N[med.value], al = aS.v * DEG;
    const bA = Math.asin(Math.min(1, (n * Math.sin(al)) / NG));
    const W = T * Math.tan(bA) + G * Math.tan(al);
    const AC = C('angle'), PC = C('position'), SP = F.ref('specimen'), CG = F.ref('cover-glass'), NO = F.ref('na-objective'), RY = cat(3);

    /* the medium, a faint panel where it is a liquid; the cover glass */
    ctx.save(); ctx.globalAlpha = Math.min(1, (n - 1) / 0.33) * 0.06; ctx.fillStyle = PAL.ink; ctx.fillRect(40, LY, 1000, G); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fillRect(40, GT, 1000, T); ctx.strokeStyle = CG; ctx.lineWidth = 2.5; ctx.strokeRect(40, GT, 1000, T); ctx.restore();

    /* the objective: a barrel and its front lens */
    ctx.save(); ctx.strokeStyle = NO; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(CX - W - 14, LY); ctx.lineTo(CX - W - 14, TOP + 40); ctx.moveTo(CX + W + 14, LY); ctx.lineTo(CX + W + 14, TOP + 40); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX - W, LY); ctx.quadraticCurveTo(CX, LY - 2 * Math.min(90, W * 0.5), CX + W, LY); ctx.closePath();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.stroke(); ctx.restore();

    let inN = 0, all = 0;
    for (let bd = -85; bd <= 85; bd += 5) {
      const b = bd * DEG, xs = CX + T * Math.tan(b), sg = (NG * Math.sin(b)) / n;
      all++;
      if (Math.abs(sg) >= 1) {
        const xr = xs + T * Math.tan(b);
        line(ctx, CX, GB, xs, GT, alpha(RY, 0.3), 2);
        line(ctx, xs, GT, Math.max(40, Math.min(1040, xr)), GB, alpha(RY, 0.3), 2, [6, 6]);
        continue;
      }
      const g = Math.asin(sg), xl = xs + G * Math.tan(g);
      if (Math.abs(xl - CX) <= W + 0.5) {
        inN++;
        line(ctx, CX, GB, xs, GT, RY, 3);
        ray(ctx, xs, GT, xl, LY, RY, 3);
      } else {
        const yEnd = Math.max(TOP, LY - (Math.abs(1040 - CX) - Math.abs(xl - CX)) / Math.max(0.05, Math.abs(Math.tan(g))));
        const xEnd = xs + (GT - yEnd) * Math.tan(g);
        line(ctx, CX, GB, xs, GT, alpha(RY, 0.35), 2);
        line(ctx, xs, GT, xEnd, yEnd, alpha(RY, 0.35), 2);
      }
    }
    /* the edge of the cone and its half-angle, at the point the edge ray leaves the glass */
    const xe = CX + T * Math.tan(bA);
    line(ctx, xe, GT, xe, LY - 10, alpha(PAL.ink, 0.35), 2, [6, 6]);
    angleArc(ctx, { x: xe, y: GT }, 70, Math.PI / 2 - al, Math.PI / 2, 'α', undefined, AC);
    dot(ctx, CX, GB, SP, true, 8);
    text(ctx, 'P', CX, GB + 30, SP, { size: 22, align: 'center', weight: 600 });
    hbracket(ctx, CX - W, CX + W, TOP + 18, PC, 'D', { side: 'below' });

    text(ctx, `${NAME[med.value]}, n = ${fmt(nv, 2)}`, 1070, LY + G / 2, PAL.muted, { size: 18, align: 'left' });
    text(ctx, 'cover glass, n = 1.52', 1070, GT + T / 2, CG, { size: 18, weight: 600, align: 'left' });
    text(ctx, 'objective', CX + W + 28, TOP + 90, NO, { size: 18, weight: 600, align: 'left', bg: PAL.panel });

    const NA = nv * Math.sin(al);
    topline(ctx, `In ${NAME[med.value]}, ${inN} of the ${all} rays drawn from P reach the objective, and its numerical aperture is ${fmt(NA, 3)}.`);
    const note = med.value === 'air'
      ? `In air the f-number is about 1/(2NA) = ${fmt(1 / (2 * NA), 2)}. Rays leaving the glass beyond ${fmt(Math.asin(1 / NG) / DEG, 1)}° are totally reflected.`
      : `The ${NAME[med.value]} lets the rays leave the cover glass with ${med.value === 'oil' ? 'almost no' : 'less'} bending.`;
    readout(d.readout, `\\text{NA} = n\\sin\\kalphahalf = ${fmt(nv, 2)}\\sin ${fmt(aS.v, 1)}^\\circ = ${fmt(NA, 3)}`, note);
  }
  hover(d.stage, () => [
    { x: CX, y: GB, r: 18, name: 'a point P on the specimen' },
    { x: 900, y: (GT + GB) / 2, r: 26, name: 'cover glass' },
    { x: 900, y: (LY + GT) / 2, r: 30, name: 'the medium between objective and cover glass' },
    { x: CX, y: LY - 20, r: 30, name: 'front lens of the objective' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.18 · sim-fiber-acceptance · still · locked view
   A fiber with a core of index 1.50 and a cladding of the reader's index, seen from
   one fixed viewpoint so that its acceptance cone reads as a cone. A ray enters at
   the center of the face in the plane of the drawing; inside the cone
   (sin α_max = √(n₁² − n₂²)) it strikes the cladding beyond the critical angle and
   is reflected down the fiber, and outside it passes into the cladding. World units
   are about one logical unit each; the fiber runs along x. The ray, the core and the
   cladding are the referents, and the tilt and α_max are angles.
===================================================================== */
(function () {
  const d = sim('sim-fiber-acceptance', 540);
  const N1 = 1.5;
  const thS = ctl(d.controls, { label: '\\theta', cls: 'angle', min: 0, max: 60, step: 0.1, value: 20, unit: '°', dec: 1, aria: 'the angle the ray makes with the axis of the fiber',
    specials: [{ at: () => amax() / DEG, label: 'α max' }] });
  const n2S = ctl(d.controls, { label: 'n_{2}', cls: '', min: 1.3, max: 1.48, step: 0.01, value: 1.4, unit: '', dec: 2, aria: 'the index of the cladding' });
  function amax() { return Math.asin(Math.min(1, Math.sqrt(N1 * N1 - n2S.v * n2S.v))); }

  const V = view({ yaw: 0.35, pitch: 0.22, dist: 2600, cx: 640, cy: 330 }), P = V.P;
  const X0 = -250, X1 = 650, RC = 64, RL = 100, CL = 330;
  const ring = (x, r, n = 48) => Array.from({ length: n }, (_, i) => { const t = (i / n) * 2 * Math.PI; return P([x, r * Math.sin(t), r * Math.cos(t)]); });
  function hull(pts) {
    const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    p.forEach((q) => { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); });
    p.slice().reverse().forEach((q) => { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); });
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }
  function poly(ctx, pts, fill, stroke) {
    ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
    ctx.restore();
  }
  const pl = (ctx, pts, color, w, dash) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], color, w, dash); };

  function draw() {
    const { ctx } = begin(d.c);
    const am = amax(), th = thS.v * DEG, n2 = n2S.v;
    const AC = C('angle'), CO = F.ref('core'), CL2 = F.ref('cladding');

    /* the acceptance cone, opening back from the center of the face */
    const R = CL * Math.tan(am), apex = P([X0, 0, 0]), mouth = ring(X0 - CL, R);
    poly(ctx, hull([apex].concat(mouth)), alpha(PAL.ink, 0.06));
    poly(ctx, mouth, null, alpha(PAL.ink, 0.35));
    const e1 = P([X0 - CL, -R, 0]), e2 = P([X0 - CL, R, 0]);
    line(ctx, apex[0], apex[1], e1[0], e1[1], alpha(PAL.ink, 0.5), 2, [8, 6]);
    line(ctx, apex[0], apex[1], e2[0], e2[1], alpha(PAL.ink, 0.5), 2, [8, 6]);

    /* the cladding and the core, each the outline of its two end rings */
    const cladHull = hull(ring(X0, RL).concat(ring(X1, RL)));
    face(ctx, cladHull, 0.08, 0); poly(ctx, cladHull, null, CL2);
    poly(ctx, hull(ring(X0, RC).concat(ring(X1, RC))), alpha(PAL.ink, 0.07), CO);
    poly(ctx, ring(X0, RL), alpha(PAL.ink, 0.04), CL2);
    poly(ctx, ring(X0, RC), alpha(PAL.ink, 0.05), CO);
    const a0 = P([X0 - CL - 60, 0, 0]), a1 = P([X1 + 40, 0, 0]);
    line(ctx, a0[0], a0[1], a1[0], a1[1], alpha(PAL.ink, 0.4), 2, [10, 8]);

    /* the ray, in the plane z = 0, arriving from below the axis */
    const col = F.ref('ray'), src = [X0 - CL * Math.cos(th), -CL * Math.sin(th), 0];
    const s0 = P(src);
    ray(ctx, s0[0], s0[1], apex[0], apex[1], col, 3.5);
    const tr = Math.asin(Math.sin(th) / N1), inc = Math.PI / 2 - tr;
    const guided = N1 * Math.sin(inc) >= n2 - 1e-9;
    const pts = [[X0, 0]];
    const first = tr < 1e-4 ? Infinity : X0 + RC / Math.tan(tr);
    if (first >= X1) pts.push([X1, (X1 - X0) * Math.tan(tr)]);
    else {
      pts.push([first, RC]);
      if (guided) {
        const step = (2 * RC) / Math.tan(tr);
        let x = first, y = RC;
        while (true) {
          const nx = x + step;
          if (nx >= X1) { pts.push([X1, y - 2 * y * (X1 - x) / step]); break; }
          x = nx; y = -y; pts.push([x, y]);
        }
      }
    }
    const P3 = pts.map((q) => P([q[0], q[1], 0]));
    for (let i = 1; i < P3.length; i++) ray(ctx, P3[i - 1][0], P3[i - 1][1], P3[i][0], P3[i][1], col, 3.5);
    if (!guided && first < X1) {
      /* the ray passes into the cladding at the first wall and leaves the fiber */
      const hit = pts[1], st = Math.asin(Math.min(1, (N1 * Math.sin(inc)) / n2));
      const ux = Math.sin(st), uy = Math.cos(st);
      const q1 = [hit[0] + (ux * (RL - RC)) / uy, RL], q2 = [q1[0] + ux * 140, RL + uy * 140];
      const A = P([hit[0], hit[1], 0]), B = P([q1[0], q1[1], 0]), Cc = P([q2[0], q2[1], 0]);
      line(ctx, A[0], A[1], B[0], B[1], alpha(col, 0.7), 3);
      line(ctx, B[0], B[1], Cc[0], Cc[1], alpha(col, 0.45), 3, [8, 6]);
    }

    /* the half-angle of the cone, between the axis and its lower edge */
    const arc = []; for (let i = 0; i <= 20; i++) { const f = (i / 20) * am; arc.push(P([X0 - 120 * Math.cos(f), -120 * Math.sin(f), 0])); }
    pl(ctx, arc, AC, 2.5);
    const lm = P([X0 - 150 * Math.cos(am / 2), -150 * Math.sin(am / 2), 0]);
    text(ctx, 'α_{max}', lm[0] - 8, lm[1] + 6, AC, { size: 20, weight: 600, align: 'right', bg: PAL.panel });

    const lc = P([X1 - 80, RL + 20, 0]), lk = P([X1 - 80, 0, 0]);
    text(ctx, `cladding, n₂ = ${fmt(n2, 2)}`, lc[0], lc[1] - 22, CL2, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'core, n₁ = 1.50', lk[0], lk[1] + 26, CO, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    const lcone = P([X0 - CL, R, 0]);
    text(ctx, 'acceptance cone', lcone[0], lcone[1] - 24, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });

    const amD = am / DEG;
    topline(ctx, guided
      ? `A ray at ${fmt(thS.v, 1)}°, inside the ${fmt(amD, 1)}° cone, is totally reflected and carried along the fiber.`
      : `A ray at ${fmt(thS.v, 1)}°, outside the ${fmt(amD, 1)}° cone, passes into the cladding and is lost.`);
    readout(d.readout, `\\text{NA} = n\\sin\\kalphamax = 1.00\\sin ${fmt(amD, 1)}^\\circ = ${fmt(Math.sin(am), 3)}`,
      'The light enters from air, so n = 1.00.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.20 · sim-illumination · still · flat
   One specimen under one objective, lit four ways. The choice fades the parts only
   one scheme has and keeps the specimen and the objective in place. The condenser
   lens, the concave mirror, the annular stop and the glass reflector are referents;
   illuminating light is F.cat(4) and the light the specimen scatters is F.cat(5),
   past their places.
===================================================================== */
(function () {
  const d = sim('sim-illumination', 600);
  const opt = choice(d.controls, { label: '\\text{illumination}', options: [
    { value: 'lens', label: 'condenser lens' }, { value: 'mirror', label: 'mirror condenser' },
    { value: 'dark', label: 'dark field' }, { value: 'laser', label: 'reflected laser' }], value: 'lens', aria: 'how the specimen is illuminated' });

  const CX = 560, SY = 330, OY = 250, OW = 110, TOP = 100;
  const IL = () => cat(4), SC = () => cat(5);

  function objective(ctx) {
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(CX - OW - 12, OY); ctx.lineTo(CX - OW - 12, TOP); ctx.moveTo(CX + OW + 12, OY); ctx.lineTo(CX + OW + 12, TOP); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX - OW, OY); ctx.quadraticCurveTo(CX, OY - 70, CX + OW, OY); ctx.closePath();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function specimen(ctx) {
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.55); ctx.beginPath(); ctx.ellipse(CX, SY, 36, 7, -0.05, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
  }
  function condenser(ctx, cy, w) {
    w = w || 150;
    ctx.save(); ctx.beginPath(); ctx.moveTo(CX - w, cy + 40); ctx.quadraticCurveTo(CX, cy - 60, CX + w, cy + 40); ctx.closePath();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.strokeStyle = F.ref('condenser'); ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
  }
  /* rays from the specimen up into the objective */
  function fanUp(ctx, xs, color, w) { xs.forEach((dx) => ray(ctx, CX, SY - 8, CX + dx, OY - 4, color, w || 3)); }

  const parts = {
    lens(ctx) {
      condenser(ctx, 470);
      [-120, -60, 0, 60, 120].forEach((dx) => {
        const yc = 470 + 40 - 100 * (1 - (dx / 150) ** 2) * 0.9 + 14;
        ray(ctx, CX + dx, 590, CX + dx, yc, IL(), 3);
        line(ctx, CX + dx, yc, CX, SY + 6, IL(), 3);
        ray(ctx, CX, SY - 6, CX - dx * 0.8, OY - 4, IL(), 3);
      });
      text(ctx, 'condenser lens', CX + 170, 490, F.ref('condenser'), { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    },
    mirror(ctx) {
      const mx = CX + 170, my = 500;
      ctx.save(); ctx.strokeStyle = F.ref('concave-mirror'); ctx.lineWidth = 6; ctx.beginPath();
      ctx.moveTo(mx - 230, my + 70); ctx.quadraticCurveTo(mx - 60, my + 40, mx + 90, my - 60); ctx.stroke(); ctx.restore();
      [[0.15, 560], [0.45, 520], [0.75, 470]].forEach(([t, y]) => {
        const x = (1 - t) * (1 - t) * (mx - 230) + 2 * (1 - t) * t * (mx - 60) + t * t * (mx + 90);
        const yy = (1 - t) * (1 - t) * (my + 70) + 2 * (1 - t) * t * (my + 40) + t * t * (my - 60);
        ray(ctx, 60, yy, x, yy, IL(), 3);
        line(ctx, x, yy, CX, SY + 6, IL(), 3);
        ray(ctx, CX, SY - 6, CX - (x - CX) * 0.45, OY - 4, IL(), 3);
      });
      text(ctx, 'concave mirror', mx + 20, my + 60, F.ref('concave-mirror'), { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    },
    dark(ctx) {
      condenser(ctx, 470, 270);
      ctx.save(); ctx.fillStyle = F.ref('annular-stop'); ctx.fillRect(CX - 300, 548, 600, 12); ctx.restore();
      [-1, 1].forEach((s) => {
        const x0 = CX + s * 250;
        ray(ctx, x0, 590, x0, 500, IL(), 3.5);
        line(ctx, x0, 500, CX, SY + 4, IL(), 3.5);
        const ux = (CX - x0), uy = (SY - 500);
        const k = (SY - 150) / -uy;
        ray(ctx, CX, SY, CX + ux * k * 0.72, SY + uy * k * 0.72, IL(), 3.5);
      });
      fanUp(ctx, [-80, -40, 0, 40, 80], SC(), 2.5);
      text(ctx, 'annular stop', CX + 310, 554, F.ref('annular-stop'), { size: 18, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, 'condenser lens', CX + 170, 490, F.ref('condenser'), { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    },
    laser(ctx) {
      const ry = 170;
      ctx.save(); ctx.strokeStyle = F.ref('reflector'); ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(CX - 90, ry - 70); ctx.lineTo(CX + 90, ry + 70); ctx.stroke(); ctx.restore();
      [-40, 0, 40].forEach((dy) => {
        const xm = CX + (dy * 90) / 70;
        ray(ctx, 60, ry + dy, xm, ry + dy, IL(), 3);
        ray(ctx, xm, ry + dy, xm, OY - 20, IL(), 3);
        line(ctx, xm, OY - 20, CX, SY - 8, IL(), 3);
      });
      [-70, 70].forEach((dx) => { line(ctx, CX, SY - 8, CX + dx, OY - 20, SC(), 2.5); ray(ctx, CX + dx, OY - 20, CX + dx, TOP + 10, SC(), 2.5); });
      text(ctx, 'plain glass reflector', CX + 110, ry + 76, F.ref('reflector'), { size: 18, weight: 600, align: 'left', bg: PAL.panel });
    },
  };
  const HEAD = {
    lens: 'A condenser lens gathers the light and sends it up through the specimen into the objective.',
    mirror: 'A concave mirror condenser reflects the light up through the specimen into the objective.',
    dark: 'In dark field illumination the beam misses the objective, and only light the specimen scatters enters it.',
    laser: 'At high magnification, laser light comes down through the objective and the scattered light returns through it.',
  };
  const NOTE = {
    lens: 'The objective collects transmitted light.',
    mirror: 'The objective collects transmitted light.',
    dark: 'The objective collects scattered light, so the specimen appears bright on a dark background.',
    laser: 'The objective collects light scattered back from the specimen.',
  };

  function draw() {
    const { ctx } = begin(d.c);
    Object.keys(parts).forEach((k) => opt.only(ctx, k, () => parts[k](ctx), [0, 12]));
    objective(ctx); specimen(ctx);
    text(ctx, 'objective', CX + OW + 30, OY - 40, PAL.muted, { size: 18, align: 'left', bg: PAL.panel });
    text(ctx, 'specimen', CX - 50, SY + 4, PAL.muted, { size: 18, align: 'right', bg: PAL.panel });
    /* the legend */
    line(ctx, 1080, 150, 1140, 150, IL(), 3); text(ctx, 'illuminating light', 1154, 150, PAL.ink, { size: 18, align: 'left' });
    line(ctx, 1080, 186, 1140, 186, SC(), 2.5); text(ctx, 'scattered light', 1154, 186, PAL.ink, { size: 18, align: 'left' });
    topline(ctx, HEAD[opt.value]);
    d.readout.textContent = ''; d.readout.appendChild(el('small', null, NOTE[opt.value]));
  }
  hover(d.stage, () => [
    { x: CX, y: SY, r: 30, name: 'specimen' },
    { x: CX, y: OY - 30, r: 40, name: 'objective lens' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();
};
