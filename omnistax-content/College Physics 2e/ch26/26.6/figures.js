/* Figures for section 26.6 Aberrations. The page binds position alone, as
   ch26/COLOR.md gives 26.6: the wavelength, the aperture diameter and the bracket
   between the violet and red focal points share its hue. The violet, red and chosen
   rays of Figure 26.28 are drawn in their spectral colours, the physical fact; the
   zones of Figure 26.29 + 26.30 are told apart by the categorical palette, and the
   lenses, the axis and the angle are ink. Both figures are computed from the
   published Sellmeier indices of Schott's N-BK7 crown and F2 flint glass. Nothing
   here moves, so each figure registers no cycle and redraws on its controls alone
   (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, begin, line, dot, text, topline, hbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* the refractive index at a wavelength in micrometres, from three Sellmeier terms */
const sellmeier = (B, Cs) => (um) => {
  const l2 = um * um;
  return Math.sqrt(1 + B.reduce((s, b, i) => s + (b * l2) / (l2 - Cs[i]), 0));
};
const CROWN = sellmeier([1.03961212, 0.231792344, 1.01046945], [0.00600069867, 0.0200179144, 103.560653]);
const FLINT = sellmeier([1.34533359, 0.209073176, 0.937357162], [0.00997743871, 0.0470450767, 111.886764]);

/* the hue the eye sees for light of one wavelength in nanometres, at full brightness */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = -(nm - 440) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
  else { r = 1; }
  const k = nm < 420 ? 0.75 + (0.25 * (nm - 380)) / 40 : nm > 680 ? 1 - (0.2 * (nm - 680)) / 100 : 1;
  const ch = (v) => Math.round(255 * Math.pow(Math.max(0, Math.min(1, v)) * k, 0.8)).toString(16).padStart(2, '0');
  return '#' + ch(r) + ch(g) + ch(b);
}

/* =====================================================================
   FIGURE 26.28 · sim-chromatic · still · flat, lengths along the axis to scale
   A thin lens of focal length 100 mm at 587.6 nm. The single lens is N-BK7 alone;
   the doublet is N-BK7 in contact with F2, its two curvatures chosen so that it has
   the same focal length at 587.6 nm and the same focus at 486.1 nm and 656.3 nm.
   The axis runs 9 units per millimetre from the lens at x = 230, so 100 mm falls at
   x = 1130; the heights of the rays are not to scale.
===================================================================== */
(function () {
  const d = sim('sim-chromatic', 540);
  const lens = choice(d.controls, { label: '\\text{lens}', value: 'single', aria: 'the lens',
    options: [{ value: 'single', label: 'single lens' }, { value: 'doublet', label: 'achromatic doublet' }] });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 700, step: 1, value: 550, unit: 'nm', dec: 0,
    aria: 'the wavelength of the light', detents: [400, 700] });

  const F0 = 100, K1s = 1 / (F0 * (CROWN(0.5876) - 1));
  const dC = CROWN(0.4861) - CROWN(0.6563), dF = FLINT(0.4861) - FLINT(0.6563);
  /* (n_c − 1) K1 + (n_f − 1) K2 = 1 / F0 and dC K1 + dF K2 = 0 */
  const a = CROWN(0.5876) - 1, b = FLINT(0.5876) - 1;
  const K1d = 1 / (F0 * (a - (b * dC) / dF)), K2d = (-dC * K1d) / dF;
  const focal = (kind, nm) => {
    const um = nm / 1000;
    return kind === 'single' ? 1 / ((CROWN(um) - 1) * K1s) : 1 / ((CROWN(um) - 1) * K1d + (FLINT(um) - 1) * K2d);
  };
  const Y = 260, L = 230, S = 9, HS = [-150, 150];
  const X = (mm) => L + S * mm;
  const VIOLET = spectral(400), RED = spectral(700);

  function biconvex(ctx, x0, x1, h, bulge, fill) {
    ctx.save(); ctx.beginPath();
    ctx.moveTo(x0, Y - h); ctx.lineTo(x1, Y - h);
    ctx.quadraticCurveTo(x1 + bulge, Y, x1, Y + h); ctx.lineTo(x0, Y + h);
    ctx.quadraticCurveTo(x0 - bulge, Y, x0, Y - h); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
  }
  /* the flint element: its left face fits the crown's right face, its right face flat */
  function flint(ctx, x0, x1, h, bulge, k) {
    ctx.save(); ctx.globalAlpha *= k; ctx.beginPath();
    ctx.moveTo(x0, Y - h); ctx.lineTo(x1, Y - h); ctx.lineTo(x1, Y + h); ctx.lineTo(x0, Y + h);
    ctx.quadraticCurveTo(x0 + bulge, Y, x0, Y - h); ctx.closePath();
    ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
  }

  let at = null;
  function draw() {
    const { ctx } = begin(d.c);
    const f = lens.mix((v) => ({ V: focal(v, 400), R: focal(v, 700), W: focal(v, lam.v), shift: v === 'doublet' ? 1 : 0 }));
    const kD = lens.a('doublet');
    line(ctx, 30, Y, 1370, Y, alpha(PAL.ink, 0.3), 2, [10, 10]);

    /* the doublet slides its crown left so the two elements sit together about the lens plane */
    const sh = -16 * f.shift;
    biconvex(ctx, L - 14 + sh, L + 14 + sh, 175, 16, alpha(PAL.ink, 0.08));
    if (kD > 0) flint(ctx, L + 14 + sh, L + 34 + sh, 175, 16, kD);

    for (const h of HS) {
      line(ctx, 30, Y + h, L, Y + h, alpha(PAL.ink, 0.7), 3);
      const end = (fm, col, w) => {
        const xf = X(fm), xe = 1370, ye = Y + h + ((xe - L) / (xf - L)) * -h;
        line(ctx, L, Y + h, xe, ye, col, w);
      };
      end(f.R, RED, 3);
      end(f.V, VIOLET, 3);
      end(f.W, spectral(lam.v), 4.5);
    }
    line(ctx, 30, Y, 1370, Y, alpha(PAL.ink, 0.6), 3);

    const xV = X(f.V), xR = X(f.R), xW = X(f.W);
    dot(ctx, xR, Y, RED, true, 8);
    dot(ctx, xV, Y, VIOLET, true, 8);
    dot(ctx, xW, Y, spectral(lam.v), false, 11);
    at = { xV, xR };
    const apart = Math.abs(xR - xV) > 34;
    text(ctx, 'V', xV - (apart ? 0 : 16), Y - 40, VIOLET, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'R', xR + (apart ? 0 : 16), Y - 40, RED, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'white light', 40, Y - 176, PAL.muted, { size: 18, align: 'left', bg: PAL.panel });
    if (kD > 0.5) {
      text(ctx, 'crown', L - 40 + sh, Y + 196, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
      text(ctx, 'flint', L + 50 + sh, Y + 196, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    } else text(ctx, 'crown glass', L, Y + 196, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });

    const spread = focal(lens.value, 700) - focal(lens.value, 400);
    const PC = C('position');
    hbracket(ctx, Math.min(xV, xR), Math.max(xV, xR), Y + 50, PC, fmt(Math.abs(spread), 2) + ' mm', { side: 'below' });
    hbracket(ctx, L, X(100), 490, alpha(PAL.ink, 0.5), '100 mm', { side: 'below', size: 17 });

    const single = lens.value === 'single';
    topline(ctx, single
      ? `This single crown-glass lens brings red to a focus ${fmt(spread, 1)} mm farther from the lens than violet.`
      : `The achromatic doublet brings violet and red to within ${fmt(Math.abs(spread), 2)} mm of each other.`);
    const um = lam.v / 1000;
    readout(d.readout, `\\kffoc = ${fmt(focal(lens.value, lam.v), 2)}\\ \\text{mm at}\\ \\klam = ${fmt(lam.v, 0)}\\ \\text{nm}`,
      single
        ? `Crown glass has an index of ${fmt(CROWN(um), 4)} at this wavelength, and a larger index bends the rays more.`
        : `At this wavelength the crown glass has an index of ${fmt(CROWN(um), 4)} and the flint glass ${fmt(FLINT(um), 4)}.`);
  }
  hover(d.stage, () => (at ? [
    { x: at.xV, y: Y, r: 16, name: 'the focus for violet light, 400 nm' },
    { x: at.xR, y: Y, r: 16, name: 'the focus for red light, 700 nm' },
  ] : []));
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.29 + 26.30 · sim-coma-spherical · still · flat, to scale
   An exact meridional ray trace through a biconvex N-BK7 lens with both radii
   100 mm and a centre thickness of 22 mm, focal length about 100 mm. The aperture
   stop sits at the front vertex. Parallel light arrives at the angle θ below the
   axis direction; four pairs of rays pass the stop at 1/4, 2/4, 3/4 and 4/4 of its
   radius on either side of the chief ray, and each pair's crossing is marked. The
   scale is 6 units per millimetre, the front vertex at x = 330 on the axis y = 370.
===================================================================== */
(function () {
  const d = sim('sim-coma-spherical', 660);
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 12, step: 0.5, value: 6, unit: '°', dec: 1,
    aria: 'the angle of the incoming light to the axis', detents: [0] });
  const Dm = ctl(d.controls, { label: '\\kD', cls: 'position', min: 20, max: 70, step: 1, value: 70, unit: 'mm', dec: 0,
    aria: 'the diameter of the aperture' });

  const R = 100, T = 22, N = CROWN(0.5876), SEMI = 44;
  const X0 = 330, Y0 = 370, S = 6;
  const X = (mm) => X0 + S * mm, Yc = (mm) => Y0 + S * mm;

  /* where a ray p + s u meets the sphere of centre (cx, 0), the nearer or farther root */
  function meet(p, u, cx, far) {
    const ox = p[0] - cx, oy = p[1];
    const bq = ox * u[0] + oy * u[1], cq = ox * ox + oy * oy - R * R, disc = bq * bq - cq;
    if (disc < 0) return null;
    const s = far ? -bq + Math.sqrt(disc) : -bq - Math.sqrt(disc);
    return [p[0] + s * u[0], p[1] + s * u[1]];
  }
  function refract(u, nrm, eta) {
    let nx = nrm[0], ny = nrm[1];
    let ci = -(nx * u[0] + ny * u[1]);
    if (ci < 0) { nx = -nx; ny = -ny; ci = -ci; }
    const k = 1 - eta * eta * (1 - ci * ci);
    if (k < 0) return null;
    const m = eta * ci - Math.sqrt(k);
    return [eta * u[0] + m * nx, eta * u[1] + m * ny];
  }
  /* the ray through the stop at height h (mm) with direction u: its path and the line it leaves on */
  function trace(h, u) {
    const p0 = [0, h];
    const a1 = meet(p0, u, R, false);
    if (!a1 || Math.abs(a1[1]) > SEMI) return null;
    const u1 = refract(u, [(a1[0] - R) / R, a1[1] / R], 1 / N);
    const a2 = u1 && meet(a1, u1, T - R, true);
    if (!a2) return null;
    const u2 = refract(u1, [(a2[0] - (T - R)) / R, a2[1] / R], N);
    return u2 ? { a1, a2, u2 } : null;
  }
  const cross = (r1, r2) => {
    const den = r1.u2[0] * r2.u2[1] - r1.u2[1] * r2.u2[0];
    if (Math.abs(den) < 1e-12) return null;
    const dx = r2.a2[0] - r1.a2[0], dy = r2.a2[1] - r1.a2[1];
    const s = (dx * r2.u2[1] - dy * r2.u2[0]) / den;
    return [r1.a2[0] + s * r1.u2[0], r1.a2[1] + s * r1.u2[1]];
  };
  /* the paraxial image plane, from two rays close to the axis */
  const XP = (() => {
    const r = trace(0.01, [1, 0]);
    return r.a2[0] - r.a2[1] * (r.u2[0] / r.u2[1]);
  })();
  const XE = XP + 22;

  function lensShape(ctx) {
    const sag = R - Math.sqrt(R * R - SEMI * SEMI);
    ctx.save(); ctx.beginPath();
    for (let i = 0; i <= 40; i++) { const y = -SEMI + (2 * SEMI * i) / 40; ctx.lineTo(X(R - Math.sqrt(R * R - y * y)), Yc(y)); }
    for (let i = 0; i <= 40; i++) { const y = SEMI - (2 * SEMI * i) / 40; ctx.lineTo(X(T - R + Math.sqrt(R * R - y * y)), Yc(y)); }
    ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
    return sag;
  }

  let hits = [];
  function draw() {
    const { ctx } = begin(d.c);
    const t = (th.v * Math.PI) / 180, u = [Math.cos(t), Math.sin(t)], a = Dm.v / 2;
    line(ctx, 30, Y0, 1370, Y0, alpha(PAL.ink, 0.3), 2, [10, 10]);
    lensShape(ctx);
    /* the stop: two plates in front of the lens that leave an opening of diameter D */
    const xs = X(0);
    line(ctx, xs, Yc(-SEMI), xs, Yc(-a) - 3, PAL.ink, 7);
    line(ctx, xs, Yc(a) + 3, xs, Yc(SEMI), PAL.ink, 7);
    line(ctx, X(XP), Yc(-16), X(XP), Yc(34), alpha(PAL.ink, 0.45), 2, [10, 10]);

    const x0 = -52;
    const seg = (h) => {
      const r = trace(h, u);
      if (!r) return null;
      const sIn = (x0 - 0) / u[0];
      return { r, from: [x0, h + sIn * u[1]] };
    };
    const chief = seg(0);
    const drawRay = (s, col, w) => {
      const { r, from } = s, k = (XE - r.a2[0]) / r.u2[0];
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
      ctx.moveTo(X(from[0]), Yc(from[1])); ctx.lineTo(X(r.a1[0]), Yc(r.a1[1])); ctx.lineTo(X(r.a2[0]), Yc(r.a2[1]));
      ctx.lineTo(X(r.a2[0] + k * r.u2[0]), Yc(r.a2[1] + k * r.u2[1])); ctx.stroke(); ctx.restore();
    };
    const pts = [];
    for (let i = 4; i >= 1; i--) {
      const h = (i / 4) * a, up = seg(-h), dn = seg(h);
      if (!up || !dn) continue;
      drawRay(up, cat(i - 1), 2.5); drawRay(dn, cat(i - 1), 2.5);
      const c = cross(up.r, dn.r);
      if (c) pts[i] = c;
    }
    if (chief) drawRay(chief, alpha(PAL.ink, 0.8), 2.5);
    hits = [];
    for (let i = 1; i <= 4; i++) {
      if (!pts[i]) continue;
      dot(ctx, X(pts[i][0]), Yc(pts[i][1]), cat(i - 1), true, 7);
      hits.push({ x: X(pts[i][0]), y: Yc(pts[i][1]), r: 12, name: ['the innermost pair crosses here', 'the second pair crosses here', 'the third pair crosses here', 'the outermost pair crosses here'][i - 1] });
    }
    text(ctx, 'paraxial image plane', X(XP) + 10, Yc(-24), PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, 'stop', xs - 14, Yc(SEMI) - 10, PAL.muted, { size: 17, align: 'right', bg: PAL.panel });

    const dx = pts[1] && pts[4] ? pts[1][0] - pts[4][0] : 0;
    const dy = pts[1] && pts[4] ? pts[4][1] - pts[1][1] : 0;
    const frac = (Dm.v / 70) ** 2;
    topline(ctx, th.v === 0
      ? `The outermost rays cross ${fmt(dx, 1)} mm closer to the lens than the innermost rays, with ${fmt(frac * 100, 0)}% of the full aperture's light.`
      : `The outermost pair crosses ${fmt(dx, 1)} mm closer to the lens and ${fmt(Math.abs(dy), 2)} mm off the innermost pair's crossing, with ${fmt(frac * 100, 0)}% of the full aperture's light.`);
    readout(d.readout, `\\left(\\frac{\\kD}{70\\ \\text{mm}}\\right)^{2} = \\left(\\frac{${fmt(Dm.v, 0)}\\ \\text{mm}}{70\\ \\text{mm}}\\right)^{2} = ${fmt(frac, 2)}`,
      'The light the lens gathers grows as the area of the opening, the square of its diameter.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();
};
