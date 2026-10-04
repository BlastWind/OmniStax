/* Figures for section 26.1 Physics of the Eye. The figures colour position: the
   object distance and the lens-to-retina distance share its hue and are told apart
   by their brackets. The cornea, the lens, the retina and the tree are referents and
   wear F.ref in both figures; the rest of the eye, the power in diopters, the
   magnification and every index of refraction are ink. The rays from the top and the
   bottom of the tree are told apart by F.cat past the referents' places. Nothing here
   moves: focusing is a setting, not a motion, so every figure registers no cycle and
   redraws on its controls alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, register, begin, line, dot, text, topline, hbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

function sig3(x) {
  const a = Math.abs(x);
  return a >= 100 ? fmt(x, 0) : a >= 10 ? fmt(x, 1) : a >= 1 ? fmt(x, 2) : fmt(x, 3);
}
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sci(x) {
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return (m < 0 ? '−' : '') + fmt(Math.abs(m), 2) + '×10' + String(e).split('').map((c) => SUP[c]).join('');
}

/* the media light crosses, with their indices from Table 26.1 */
const MEDIA = { cornea: 'cornea, n = 1.38', aqueous: 'aqueous humor, n = 1.34', lens: 'lens, n = 1.41 average', vitreous: 'vitreous humor, n = 1.34' };

/* the outline of an eye centred at (ex, y) with radius R: the sclera, the bulge of
   the cornea through the two points where it meets the sclera, the iris either side
   of the pupil and the retina lining the back */
function eye(ctx, ex, y, R) {
  const a = (150 * Math.PI) / 180, jx = ex + R * Math.cos(a), jy = R * Math.sin(a);
  const apex = ex - R - 0.26 * R, cx = (jx * jx + jy * jy - apex * apex) / (2 * (jx - apex)), cr = cx - apex;
  const ca = Math.atan2(jy, jx - cx);
  ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = alpha(PAL.ink, 0.75);
  ctx.fillStyle = alpha(PAL.ink, 0.04);
  ctx.beginPath(); ctx.arc(ex, y, R, -a, a); ctx.arc(cx, y, cr, ca, 2 * Math.PI - ca); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.save(); ctx.strokeStyle = F.ref('cornea'); ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(cx, y, cr, ca, 2 * Math.PI - ca); ctx.stroke(); ctx.restore();
  ctx.save(); ctx.strokeStyle = F.ref('retina'); ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(ex, y, R - 7, -1.9, 1.9); ctx.stroke(); ctx.restore();
  const ix = jx + 18;
  line(ctx, ix, y - Math.sqrt(R * R - (ix - ex) ** 2) + 4, ix, y - 0.3 * R, PAL.ink, 6);
  line(ctx, ix, y + 0.3 * R, ix, y + Math.sqrt(R * R - (ix - ex) ** 2) - 4, PAL.ink, 6);
  return { apex, cx, cr, ix, retina: ex + R - 7 };
}
function eyeLens(ctx, x, y, rx, ry) {
  ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fill(); ctx.strokeStyle = F.ref('lens'); ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
}
/* where the cornea's arc sits at height s off the axis */
const corneaX = (g, s) => g.cx - Math.sqrt(g.cr * g.cr - s * s);

/* a tree standing on (x, y), h tall, drawn upside down when h < 0 */
function tree(ctx, x, y, h, color) {
  const k = h / 120;
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x - 6 * Math.abs(k), y); ctx.lineTo(x + 6 * Math.abs(k), y); ctx.lineTo(x + 6 * Math.abs(k), y - 40 * k);
  ctx.lineTo(x + 34 * Math.abs(k), y - 40 * k); ctx.lineTo(x, y - 120 * k); ctx.lineTo(x - 34 * Math.abs(k), y - 40 * k);
  ctx.lineTo(x - 6 * Math.abs(k), y - 40 * k); ctx.closePath(); ctx.fill(); ctx.restore();
}
function ray(ctx, pts, color, w) {
  for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], color, w || 3, pts[i][2]);
}
/* a label set at (lx, ly) with a faint leader back to the part it names, in the
   part's referent colour where it has one */
function tag(ctx, s, px, py, lx, ly, color) {
  const right = lx > px;
  line(ctx, px, py, lx + (right ? -8 : 8), ly, alpha(PAL.ink, 0.45), 1.5);
  dot(ctx, px, py, alpha(color || PAL.ink, 0.6), true, 3.5);
  text(ctx, s, lx, ly, color || PAL.ink, { size: 20, weight: color ? 600 : undefined, align: right ? 'left' : 'right', bg: PAL.panel });
}

/* =====================================================================
   FIGURE 26.2 · sim-eye-anatomy · still · flat, a faithful copy
   The eye in cross-section with the ten parts the book names, set in two leadered
   columns as the book sets them. The media light passes through carry their
   indices from Table 26.1 as hover names. The cornea, the lens and the retina wear
   the referent colours they wear in the text.
===================================================================== */
(function () {
  const d = sim('sim-eye-anatomy', 520);
  const Y = 260, EX = 720, R = 200;
  function draw() {
    const { ctx } = begin(d.c);
    const g = eye(ctx, EX, Y, R);
    line(ctx, g.apex - 60, Y, g.retina + 40, Y, alpha(PAL.ink, 0.3), 2, [10, 10]);
    const LX = g.ix + 55;
    for (const s of [-1, 1]) {
      for (let i = 0; i < 4; i++) line(ctx, LX + 6 - i * 4, Y + s * (72 + i * 6), g.ix + 6 + i * 10, Y + s * (0.3 * R + 22 + i * 12), alpha(PAL.ink, 0.45), 1.5);
    }
    eyeLens(ctx, LX, Y, 34, 78);
    /* the optic nerve leaves the back just below the axis, with the disc where it joins */
    const na = 0.26, nb = 0.5;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.beginPath();
    ctx.moveTo(EX + R * Math.cos(na), Y + R * Math.sin(na)); ctx.lineTo(EX + R + 150, Y + R * Math.sin(na) + 30);
    ctx.lineTo(EX + R + 150, Y + R * Math.sin(nb) + 40); ctx.lineTo(EX + R * Math.cos(nb), Y + R * Math.sin(nb)); ctx.fill(); ctx.stroke(); ctx.restore();
    const fov = [g.retina - 2, Y];
    dot(ctx, fov[0], fov[1], PAL.ink, true, 6);
    const lx = 300, rx = 1110, c = Math.cos, s = Math.sin;
    tag(ctx, 'cornea', g.apex, Y - 30, lx, Y - 30, F.ref('cornea'));
    tag(ctx, 'iris', g.ix, Y - 0.62 * R, lx, Y - 150);
    tag(ctx, 'ciliary fibers', LX - 8, Y - 100, lx, Y - 205);
    tag(ctx, 'aqueous humor', (g.apex + g.ix) / 2 + 8, Y + 40, lx, Y + 60);
    tag(ctx, 'lens', LX, Y + 50, lx, Y + 160, F.ref('lens'));
    tag(ctx, 'sclera', EX + R * c(-1.2), Y + R * s(-1.2), rx, Y - 205);
    tag(ctx, 'vitreous humor', EX + 40, Y - 70, rx, Y - 140);
    tag(ctx, 'retina', EX + (R - 7) * c(-0.55), Y + (R - 7) * s(-0.55), rx, Y - 75, F.ref('retina'));
    tag(ctx, 'fovea', fov[0], fov[1], rx, Y);
    tag(ctx, 'disc', EX + R * c(0.38), Y + R * s(0.38), rx, Y + 110);
    tag(ctx, 'optic nerve', EX + R + 120, Y + R * s(0.38) + 40, rx, Y + 190);
  }
  hover(d.stage, () => [
    { x: EX - R - 25, y: Y, r: 26, name: MEDIA.cornea },
    { x: EX - R + 32, y: Y + 12, r: 22, name: MEDIA.aqueous },
    { x: EX - R + 95 + 55 - 40, y: Y, r: 30, name: MEDIA.lens },
    { x: EX + 40, y: Y + 40, r: 110, name: MEDIA.vitreous },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.3 + 26.4 · sim-eye-accommodation · still · flat, not to scale
   A tree walks from 10 cm to 3.00 m before an eye whose retina stays 2.00 cm
   behind its lens. Distances are drawn on a logarithmic run, 0.10 m at x = 735 and
   3.00 m at x = 95. Each ray bends two thirds of the way toward its meeting point
   at the cornea and the rest at the lens, as the cornea supplies about two thirds
   of the power. The eye's power is 1/d_o + 1/d_i up to the greatest power the
   second slider allows; past it the rays meet behind the retina, at a distance
   drawn three times the true excess, and the lens is drawn fatter by 4 units per
   diopter above 50.0 D. The cornea, the lens, the retina and the tree wear their
   referent colours; the rays from the top and the bottom of the tree take F.cat(4)
   and F.cat(5), past the four referents' places.
===================================================================== */
(function () {
  const d = sim('sim-eye-accommodation', 600);
  let pMax = null;
  const dO = ctl(d.controls, { label: '\\kdobj', cls: 'position', min: 0.1, max: 3, step: 0.01, value: 0.6, unit: 'm', dec: 2, aria: 'the distance of the tree from the eye',
    detents: [0.25, 0.6], specials: [{ at: () => (pMax ? 1 / (pMax.v - 50) : null), label: 'near point' }] });
  pMax = ctl(d.controls, { label: 'P_{\\text{max}}', cls: '', min: 50.5, max: 60, step: 0.1, value: 54, unit: 'D', dec: 1, aria: 'the greatest power the eye can reach' });
  dO.refresh();

  const Y = 300, EX = 1090, R = 160, DI = 0.02, TH = 120;
  const xOf = (v) => 735 - (Math.log(v / 0.1) / Math.log(30)) * 640;
  let g = null, XL = 0;

  function draw() {
    const { ctx } = begin(d.c);
    const v = dO.v, need = 1 / v + 1 / DI, clear = need <= pMax.v + 1e-9;
    const P = clear ? need : pMax.v, dI = clear ? DI : 1 / (pMax.v - 1 / v);
    const xo = xOf(v), yt = Y - TH;
    const PC = C('position'), TR = F.ref('tree'), RT = cat(4), RB = cat(5);

    line(ctx, 40, Y, 1340, Y, alpha(PAL.ink, 0.3), 2, [10, 10]);
    g = eye(ctx, EX, Y, R);
    XL = g.ix + 32;
    const rx = 12 + (P - 50) * 4;
    eyeLens(ctx, XL, Y, rx, 60);
    tree(ctx, xo, Y, TH, TR);

    /* the meeting point of rays from the tree's top: along the line through the
       lens's center, on the retina, or beyond it by three times the true excess */
    const ux = XL - xo, uy = Y - yt, L = Math.hypot(ux, uy), nx = ux / L, ny = uy / L;
    const bx = XL - EX, by = 0, B = bx * nx + by * ny, tR = -B + Math.sqrt(B * B - (bx * bx + by * by - (R - 7) ** 2));
    const tI = tR * (1 + 3 * (dI - DI) / DI);
    const top = [XL + nx * tI, Y + ny * tI], bot = [XL + tR * (1 + 3 * (dI - DI) / DI), Y];
    const inside = (p) => Math.hypot(p[0] - EX, p[1] - Y) < R - 7;
    function trace(from, to, s, color) {
      const E = [corneaX(g, s), Y + s];
      const yIn = E[1] + ((E[1] - from[1]) / (E[0] - from[0])) * (XL - E[0]);
      const yStraight = E[1] + ((to[1] - E[1]) * (XL - E[0])) / (to[0] - E[0]);
      const Lp = [XL, yIn + (yStraight - yIn) * 0.67];
      /* where the last leg crosses the retina */
      const dx = to[0] - Lp[0], dy = to[1] - Lp[1], ex = Lp[0] - EX, ey = Lp[1] - Y;
      const qa = dx * dx + dy * dy, qb = 2 * (ex * dx + ey * dy), qc = ex * ex + ey * ey - (R - 7) ** 2;
      const t = (-qb + Math.sqrt(qb * qb - 4 * qa * qc)) / (2 * qa);
      const hit = [Lp[0] + dx * Math.min(t, 1), Lp[1] + dy * Math.min(t, 1)];
      ray(ctx, [from, E, Lp, hit], color, 3);
      if (t < 1) line(ctx, hit[0], hit[1], to[0], to[1], color, 2.5, [6, 8]);
      return hit;
    }
    const hitsTop = [-42, -8, 30].map((s) => trace([xo, yt], top, s, RT));
    const hitsBot = [-36, 36].map((s) => trace([xo, Y], bot, s, RB));

    if (clear) {
      tree(ctx, top[0] - 4, Y, -(top[1] - Y), alpha(PAL.ink, 0.8));
    } else {
      const ys = hitsTop.map((p) => p[1]);
      line(ctx, g.retina + 2, Math.min(...ys), g.retina + 2, Math.max(...ys), RT, 9);
      const yb = hitsBot.map((p) => p[1]);
      line(ctx, g.retina + 2, Math.min(...yb), g.retina + 2, Math.max(...yb), RB, 9);
    }
    text(ctx, 'cornea', g.apex - 8, Y - 110, F.ref('cornea'), { size: 18, weight: 600, align: 'right' });
    line(ctx, g.apex - 4, Y - 100, corneaX(g, -70), Y - 70, alpha(PAL.ink, 0.4), 1.5);
    text(ctx, 'lens', XL, Y + 90, F.ref('lens'), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'retina', EX + R + 14, Y - 110, F.ref('retina'), { size: 18, weight: 600, align: 'left' });
    text(ctx, 'tree', xo, Y + 30, TR, { size: 18, weight: 600, align: 'center', bg: PAL.panel });

    hbracket(ctx, xo, XL, Y + 215, PC, 'd_o = ' + sig3(v) + ' m', { side: 'below' });
    hbracket(ctx, XL, g.retina, Y + 215, PC, 'd_i = 2.00 cm', { side: 'below' });
    text(ctx, 'not to scale', 40, 580, PAL.muted, { size: 17, align: 'left' });

    const m = (x) => sig3(x) + '\\ \\text{m}';
    if (clear) {
      topline(ctx, `At ${sig3(v)} m the eye takes a power of ${sig3(P)} D, and the image falls on the retina.`);
      readout(d.readout, `P = \\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{${m(v)}} + \\frac{1}{0.0200\\ \\text{m}} = ${sig3(P)}\\ \\text{D}`,
        `A hair 1.20×10⁻² cm wide at this distance forms an image ${sci(-0.024 / (v * 100))} cm high on the retina.`);
    } else {
      topline(ctx, `At ${sig3(v)} m the eye would need ${sig3(need)} D but reaches only ${sig3(P)} D, so the image falls behind the retina.`);
      readout(d.readout, `P = \\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{${m(v)}} + \\frac{1}{${fmt(dI, 4)}\\ \\text{m}} = ${sig3(P)}\\ \\text{D}`,
        `The rays meet ${sig3(dI * 100)} cm behind the lens, beyond the retina, and the object looks blurred; a converging lens in front of the eye would add the power it lacks.`);
    }
  }
  hover(d.stage, () => (g ? [
    { x: g.apex + 8, y: Y + 60, r: 18, name: MEDIA.cornea },
    { x: (g.apex + g.ix) / 2 + 10, y: Y + 70, r: 16, name: MEDIA.aqueous },
    { x: XL, y: Y + 40, r: 20, name: MEDIA.lens },
    { x: EX + 50, y: Y + 80, r: 60, name: MEDIA.vitreous },
  ] : []));
  register(d.fig, { update: () => {}, draw });
})();
};
