/* Figures for section 26.5 Telescopes. The page binds position alone, as
   ch26/COLOR.md gives 26.5: the focal lengths of objective and eyepiece and the
   mirror's radius of curvature share its hue and are told apart by their brackets.
   The angular magnification and the angles are untyped and in ink, as are the
   lenses, the mirrors, the images and the eye; the rays are the categorical
   palette's first hue. Nothing here moves: optics has no clock, so every figure
   registers no cycle and redraws on its controls alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.5'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, cat, ctl, choice, register, begin, line, dot, text, topline, hbracket, vbracket, angleArc, hover } = F;
const sim = (id, H) => F.sim(root, id, H);

function sig3(x) {
  const a = Math.abs(x);
  return a >= 100 ? fmt(x, 0) : a >= 10 ? fmt(x, 1) : a >= 1 ? fmt(x, 2) : fmt(x, 3);
}
const minus = (s) => s.replace('-', '−');

/* a thin lens at x with half-height h, bulging by b: thick at the middle when b > 0
   (converging), thin there when b < 0 (diverging) */
function lens(ctx, x, y, h, b, a = 1) {
  const w = 14;
  ctx.save(); ctx.globalAlpha *= a; ctx.beginPath();
  ctx.moveTo(x - w / 2, y - h); ctx.lineTo(x + w / 2, y - h);
  ctx.quadraticCurveTo(x + w / 2 + 2 * b, y, x + w / 2, y + h);
  ctx.lineTo(x - w / 2, y + h);
  ctx.quadraticCurveTo(x - w / 2 - 2 * b, y, x - w / 2, y - h);
  ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
}
/* a small image, an arrow from the axis to height y above it (negative: below) */
function image(ctx, x, Y, y, color, a = 1) {
  if (Math.abs(y) < 6) return;
  ctx.save(); ctx.globalAlpha *= a;
  line(ctx, x, Y, x, Y - y + Math.sign(y) * 8, color, 3);
  ctx.beginPath(); ctx.moveTo(x, Y - y); ctx.lineTo(x - 7, Y - y + Math.sign(y) * 12); ctx.lineTo(x + 7, Y - y + Math.sign(y) * 12); ctx.closePath();
  ctx.fillStyle = color; ctx.fill(); ctx.restore();
}
/* an eye seen from the side, looking left, its cornea at x */
function eye(ctx, x, y, R) {
  const ex = x + 1.26 * R;
  ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.fillStyle = alpha(PAL.ink, 0.04);
  ctx.beginPath(); ctx.arc(ex, y, R, -2.5, 2.5); ctx.quadraticCurveTo(x - 0.1 * R, y, ex + R * Math.cos(2.5), y - R * Math.sin(2.5)); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.save(); ctx.beginPath(); ctx.ellipse(ex - 0.55 * R, y, 0.12 * R, 0.4 * R, 0, 0, Math.PI * 2); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 26.23 + 26.24 · sim-telescope · still · flat
   Paraxial rays from a very distant object, traced through thin lenses: at a lens
   of power 1/f the height y is kept and the slope u becomes u − y/f. The objective
   sits at x = 180 and lengths run at 6.50 px/cm, so the longest arrangement (a
   100 cm objective, the erecting lens's 4 × 10.0 cm and a 25.0 cm eyepiece,
   165 cm) ends at x = 1253. Every arrangement is afocal: the eyepiece stands its
   focal length from the last image, so the rays leave parallel. The drawn angle is
   θ_d = min(0.12, 0.35/|M|) rad, the same factor on θ and θ', so their ratio is M.
   The arrangement morphs: lens positions and powers blend, the erecting lens's
   power grows from nothing, and the rays are traced through the blend.
===================================================================== */
(function () {
  const d = sim('sim-telescope', 540);
  const arr = choice(d.controls, { label: '\\text{arrangement}', value: 'kepler', aria: 'the arrangement of the lenses',
    options: [{ value: 'galileo', label: 'Galileo’s' }, { value: 'kepler', label: 'two convex' }, { value: 'erect', label: 'erecting lens' }] });
  const fo = ctl(d.controls, { label: '\\kfobj', cls: 'position', min: 30, max: 100, step: 1, value: 60, unit: 'cm', dec: 1, aria: 'the focal length of the objective' });
  const fe = ctl(d.controls, { label: '\\kfeye', cls: 'position', min: 5, max: 25, step: 0.5, value: 12, unit: 'cm', dec: 1, aria: 'the focal length of the eyepiece' });
  const ro = F.readout(d);

  const Y = 290, XO = 180, S = 6.5, FR = 10, A = 50, XEND = 1290;
  const cmx = (c) => XO + c * S;

  function layout(v) {
    const o = fo.v, e = fe.v;
    const M = v === 'galileo' ? o / e : v === 'kepler' ? -o / e : o / e;
    return {
      xr: cmx(o + 2 * FR), pr: v === 'erect' ? 1 / (FR * S) : 0,
      xe: cmx(v === 'galileo' ? o - e : v === 'kepler' ? o + e : o + 4 * FR + e),
      pe: (v === 'galileo' ? -1 : 1) / (e * S),
      bulge: v === 'galileo' ? -1 : 1,
      th: Math.min(0.12, 0.35 / Math.abs(M)),
    };
  }

  let parts = [];
  function draw() {
    const { ctx } = begin(d.c);
    const v = arr.value, L = arr.mix(layout), ray = cat(0), PC = C('position');
    const o = fo.v, e = fe.v, xf = cmx(o);
    const M = v === 'galileo' ? o / e : v === 'kepler' ? -o / e : o / e;

    line(ctx, 20, Y, XEND, Y, alpha(PAL.ink, 0.3), 2, [10, 10]);

    const lenses = [{ x: XO, p: 1 / (o * S) }, { x: L.xr, p: L.pr }, { x: L.xe, p: L.pe }].sort((a, b) => a.x - b.x);
    const reach = { obj: A, r: 0, e: 0 };
    const trace = (y0) => {
      let x = 20, y = y0 + L.th * (XO - 20), u = -L.th;
      const pts = [[x, y]];
      for (const l of lenses) {
        y += u * (l.x - x); x = l.x; pts.push([x, y]);
        if (l.x === L.xe) reach.e = Math.max(reach.e, Math.abs(y));
        else if (l.x === L.xr) reach.r = Math.max(reach.r, Math.abs(y));
        u -= y * l.p;
      }
      y += u * (XEND - x); pts.push([XEND, y]);
      return { pts, u };
    };
    const rays = [A, 0, -A].map(trace);

    lens(ctx, XO, Y, A + 16, 12);
    lens(ctx, L.xr, Y, Math.max(reach.r + 16, 50), 12, arr.a('erect'));
    lens(ctx, L.xe, Y, Math.max(reach.e + 16, 50), 12 * L.bulge);

    for (const r of rays) {
      for (let i = 1; i < r.pts.length; i++) line(ctx, r.pts[i - 1][0], Y - r.pts[i - 1][1], r.pts[i][0], Y - r.pts[i][1], ray, 3);
    }
    /* in Galileo's telescope the rays would have met at F_o, beyond the eyepiece */
    arr.only(ctx, 'galileo', () => {
      for (const r of rays) {
        const a = r.pts[1], b = r.pts[2], s = (b[1] - a[1]) / (b[0] - a[0]);
        line(ctx, b[0], Y - b[1], xf, Y - (a[1] + s * (xf - a[0])), alpha(ray, 0.45), 2, [6, 8]);
      }
    }, [0, 0]);

    const yi = -o * S * L.th;
    dot(ctx, xf, Y, PAL.ink, true, 6);
    text(ctx, 'F_o', xf + 10, Y + 24, PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
    if (v !== 'galileo') image(ctx, xf, Y, yi, PAL.ink);
    arr.only(ctx, 'erect', () => image(ctx, cmx(o + 4 * FR), Y, -yi, PAL.ink), [0, 0]);

    const chief = rays[1];
    angleArc(ctx, { x: XO, y: Y }, 80, Math.PI, Math.PI - L.th, 'θ');
    const ex = chief.pts[chief.pts.length - 2];
    const up = Math.atan(chief.u);
    angleArc(ctx, { x: ex[0], y: Y - ex[1] }, 46, 0, up, 'θ′');
    eye(ctx, 1300, Y, 34);

    hbracket(ctx, XO, xf, Y - 170, PC, 'f_o = ' + fmt(o, 1) + ' cm');
    const xe = cmx(v === 'galileo' ? o - e : v === 'kepler' ? o + e : o + 4 * FR + e);
    const fFrom = v === 'erect' ? cmx(o + 4 * FR) : xf;
    hbracket(ctx, Math.min(fFrom, xe), Math.max(fFrom, xe), Y + 150, PC, 'f_e = ' + minus(fmt(v === 'galileo' ? -e : e, 1)) + ' cm', { side: 'below' });

    const lab = { size: 18, align: 'center', bg: PAL.panel };
    text(ctx, 'objective', XO, Y + A + 44, PAL.muted, lab);
    text(ctx, 'eyepiece', xe, Y - Math.max(reach.e + 16, 50) - 20, PAL.muted, lab);
    arr.only(ctx, 'erect', () => text(ctx, 'erecting lens', cmx(o + 2 * FR), Y - Math.max(reach.r + 16, 50) - 20, PAL.muted, lab), [0, 0]);
    text(ctx, 'from a very distant object', 24, Y + 74, PAL.muted, { size: 18, align: 'left' });

    parts = [{ x: xf, y: Y - yi / 2, r: 20, name: v === 'galileo' ? 'where the rays would meet, the focal point of the objective' : 'the first image, at the focal point of the objective' }];
    if (v === 'erect') parts.push({ x: cmx(o + 4 * FR), y: Y + yi / 2, r: 20, name: 'the second image, upright' });
    parts.push({ x: 1330, y: Y, r: 30, name: 'the eye' });

    const upright = M > 0;
    topline(ctx, `The image is ${upright ? 'upright' : 'inverted'}, and it subtends ${sig3(Math.abs(M))} times the angle the object subtends.`);
    const m = (c) => `${minus(fmt(c / 100, 3))}\\ \\text{m}`;
    const nfo = `\\mk{nfo}{${m(o)}}`, nfe = `\\mk{nfe}{${m(v === 'galileo' ? -e : e)}}`, nM = `\\mk{nM}{${minus(sig3(M))}}`;
    const head = `\\mk{M}{M} = \\mk{r}{\\frac{\\theta'}{\\theta}}`;
    const note = `An object that subtends 0.500° to the unaided eye subtends ${sig3(0.5 * Math.abs(M))}° through the telescope${v === 'erect' ? ', and the erecting lens inverts the image once more, so that it is upright.' : '.'}`;
    ro.set(v === 'erect'
      ? `${head} = \\left(-\\frac{\\mk{fo}{\\kfobj}}{\\mk{fe}{\\kfeye}}\\right)\\mk{inv}{(-1)} = \\left(-\\frac{${nfo}}{${nfe}}\\right)\\mk{ninv}{(-1)} = ${nM}`
      : `${head} = -\\frac{\\mk{fo}{\\kfobj}}{\\mk{fe}{\\kfeye}} = -\\frac{${nfo}}{${nfe}} = ${nM}`, note, { form: v === 'erect' });
  }
  hover(d.stage, () => parts);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.25 · sim-reflecting-telescope · still · flat, not to scale
   The concave mirror's vertex is at x = 1240 on the axis y = 250. Its focal
   length R/2 is drawn on a logarithmic run, 260 px for R = 1.00 m to 680 px for
   R = 10.0 m, and the mirror is the arc of radius twice that, so a larger mirror
   is visibly flatter. Parallel rays reflect toward the focal point; a flat mirror
   at 45°, 150 px before it, turns them down to a focus 150 px below the axis. The
   eyepiece stands its focal length below that focus, 30 px for 1.00 cm to 120 px
   for 10.0 cm on a logarithmic run, and sends the rays out parallel.
===================================================================== */
(function () {
  const d = sim('sim-reflecting-telescope', 620);
  const R = ctl(d.controls, { label: 'R', cls: 'position', min: 1, max: 10, step: 0.1, value: 10, unit: 'm', dec: 2, aria: 'the radius of curvature of the mirror' });
  const fe = ctl(d.controls, { label: '\\kfeye', cls: 'position', min: 1, max: 10, step: 0.05, value: 3, unit: 'cm', dec: 2, aria: 'the focal length of the eyepiece' });
  const Y = 250, XM = 1240, H = 150, HS = [-110, -55, 55, 110], DROP = 150;
  let parts = [];

  function draw() {
    const { ctx } = begin(d.c);
    const ray = cat(0), PC = C('position');
    const fd = 260 + 420 * Math.log10(R.v), Rd = 2 * fd, xF = XM - fd, xd = xF + DROP;
    const ed = 30 + 90 * Math.log10(fe.v), yF = Y + DROP, ye = yF + ed;

    line(ctx, 20, Y, XM, Y, alpha(PAL.ink, 0.3), 2, [10, 10]);

    /* the concave mirror, an arc of radius Rd about (XM - Rd, Y), silvered on its back */
    const a = Math.asin(H / Rd);
    ctx.save(); ctx.lineWidth = 7; ctx.strokeStyle = alpha(PAL.ink, 0.25);
    ctx.beginPath(); ctx.arc(XM - Rd + 5, Y, Rd, -a, a); ctx.stroke();
    ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.beginPath(); ctx.arc(XM - Rd, Y, Rd, -a, a); ctx.stroke(); ctx.restore();

    for (const h of HS) {
      const yy = Y + h, xh = XM - Rd + Math.sqrt(Rd * Rd - h * h);
      line(ctx, 20, yy, xh, yy, ray, 3);
      const dx = xF - xh, dy = Y - yy, s = (xd - xh - (Y - yy)) / (dx - dy);
      const qx = xh + s * dx, qy = yy + s * dy;
      line(ctx, xh, yy, qx, qy, ray, 3);
      line(ctx, qx, qy, xF, Y, alpha(ray, 0.4), 2, [6, 8]);
      const t = (ye - qy) / (yF - qy), lx = qx + t * (xd - qx);
      line(ctx, qx, qy, lx, ye, ray, 3);
      line(ctx, lx, ye, lx, 610, ray, 3);
    }
    /* the flat mirror, "/" through (xd, Y) */
    line(ctx, xd - 66, Y + 66, xd + 66, Y - 66, PAL.ink, 6);
    const half = 110 * (DROP + ed) / fd + 20;
    ctx.save(); ctx.beginPath(); ctx.ellipse(xd, ye, half, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
    dot(ctx, xd, yF, PAL.ink, true, 6);
    dot(ctx, xF, Y, alpha(PAL.ink, 0.5), false, 6);

    hbracket(ctx, xF, XM, Y - 190, PC, 'f_o = R/2 = ' + sig3(R.v / 2) + ' m', { side: 'below' });
    vbracket(ctx, xd - half - 26, yF, ye, PC, 'f_e = ' + sig3(fe.v) + ' cm', -1);

    const lab = { size: 18, bg: PAL.panel };
    text(ctx, 'concave mirror (objective)', XM + 20, Y + H + 34, PAL.muted, { ...lab, align: 'right' });
    text(ctx, 'eyepiece', xd + half + 16, ye, PAL.muted, { ...lab, align: 'left' });
    text(ctx, 'flat mirror', xd + 76, Y - 70, PAL.muted, { ...lab, align: 'left' });
    text(ctx, 'not to scale', 24, 600, PAL.muted, { size: 17, align: 'left' });

    parts = [
      { x: xF, y: Y, r: 16, name: 'the focal point of the mirror, where the rays would meet without the flat mirror' },
      { x: xd, y: yF, r: 16, name: 'the image the mirror forms, turned aside by the flat mirror' },
    ];

    const M = -(R.v / 2) / (fe.v / 100);
    topline(ctx, `A mirror with a ${sig3(R.v)} m radius of curvature brings parallel light to a focus ${sig3(R.v / 2)} m in front of it.`);
    tex(d.readout, `M = -\\frac{\\kfobj}{\\kfeye} = -\\frac{R/2}{\\kfeye} = -\\frac{${sig3(R.v / 2)}\\ \\text{m}}{${fmt(fe.v / 100, 4)}\\ \\text{m}} = ${minus(sig3(M))}`);
  }
  hover(d.stage, () => parts);
  register(d.fig, { update: () => {}, draw });
})();
};
