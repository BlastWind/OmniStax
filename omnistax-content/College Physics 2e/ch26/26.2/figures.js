/* Figures for section 26.2 Vision Correction. The page binds position alone, as
   ch26/COLOR.md gives 26.2: the far point, the near point and the distances from
   the spectacle lens share its hue and are told apart by their brackets. Every
   power in diopters, the astigmatism and its axis are untyped and in ink, as are
   the eye, the spectacle lens and the chart; the rays are the categorical palette's
   first hue. Nothing here moves: a defect and its correction are states, so every
   figure registers no cycle and redraws on its controls alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, begin, line, dot, text, topline, hbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

function sig3(x) {
  const a = Math.abs(x);
  return a >= 100 ? fmt(x, 0) : a >= 10 ? fmt(x, 1) : a >= 1 ? fmt(x, 2) : fmt(x, 3);
}
const minus = (s) => s.replace('-', '−');

/* the outline of an eye centred at (ex, y) with radius R, as 26.1 draws it */
function eye(ctx, ex, y, R) {
  const a = (150 * Math.PI) / 180, jx = ex + R * Math.cos(a), jy = R * Math.sin(a);
  const apex = ex - R - 0.26 * R, cx = (jx * jx + jy * jy - apex * apex) / (2 * (jx - apex)), cr = cx - apex;
  const ca = Math.atan2(jy, jx - cx);
  ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = alpha(PAL.ink, 0.75);
  ctx.fillStyle = alpha(PAL.ink, 0.04);
  ctx.beginPath(); ctx.arc(ex, y, R, -a, a); ctx.arc(cx, y, cr, ca, 2 * Math.PI - ca); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(ex, y, R - 7, -1.9, 1.9); ctx.stroke(); ctx.restore();
  const ix = jx + 18;
  line(ctx, ix, y - Math.sqrt(R * R - (ix - ex) ** 2) + 4, ix, y - 0.3 * R, PAL.ink, 6);
  line(ctx, ix, y + 0.3 * R, ix, y + Math.sqrt(R * R - (ix - ex) ** 2) - 4, PAL.ink, 6);
  return { apex, ix, retina: ex + R - 7 };
}
function eyeLens(ctx, x, y, rx, ry) {
  ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
}
/* a spectacle lens at x, half-height h: thick at the middle when converging, thin
   there when diverging */
function spectacle(ctx, x, y, h, converging) {
  const w = 16, b = converging ? 12 : -12;
  ctx.save(); ctx.beginPath();
  ctx.moveTo(x - w / 2, y - h); ctx.lineTo(x + w / 2, y - h);
  ctx.quadraticCurveTo(x + w / 2 + 2 * b, y, x + w / 2, y + h);
  ctx.lineTo(x - w / 2, y + h);
  ctx.quadraticCurveTo(x - w / 2 - 2 * b, y, x - w / 2, y - h);
  ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 26.5 + 26.6 + 26.7 · sim-vision-correction · still · flat, not to scale
   An eye whose retina is 2.00 cm behind its lens, with a spectacle lens 1.50 cm in
   front of it. Distances from the eye are drawn on a logarithmic run, 0.10 m at
   x = 900 and 3.00 m at x = 100. The nearsighted eye looks at a distant object and
   relaxes to the power 1/far point + 50.0 D; the farsighted eye looks at an object
   25.0 cm away and reaches at most 1/near point + 50.0 D. Where the rays meet is
   drawn three times the true distance from the retina. With spectacles on, the
   rays leave the spectacle lens as if from the far or near point, and the eye
   brings them together on the retina.
===================================================================== */
(function () {
  const d = sim('sim-vision-correction', 560);
  const RANGES = {
    near: { min: 0.15, max: 2, step: 0.005, unit: 'm', dec: 3 },
    far: { min: 0.4, max: 3, step: 0.01, unit: 'm', dec: 2 },
  };
  const kept = { near: 0.3, far: 1 };
  let pt = null;
  const defect = choice(d.controls, { label: '\\text{eye}', value: 'near', aria: 'the defect of the eye',
    options: [{ value: 'near', label: 'nearsighted' }, { value: 'far', label: 'farsighted' }],
    onInput: (v) => {
      const was = v === 'near' ? 'far' : 'near';
      kept[was] = pt.v;
      pt.relabel(v === 'near' ? '\\text{far point}' : '\\text{near point}', v === 'near' ? 'the far point of the eye' : 'the near point of the eye');
      pt.range({ ...RANGES[v], value: kept[v] });
    } });
  const specs = choice(d.controls, { label: '\\text{spectacles}', value: 'off', aria: 'whether the spectacle lens is worn',
    options: [{ value: 'off', label: 'without' }, { value: 'on', label: 'with' }] });
  pt = ctl(d.controls, { label: '\\text{far point}', cls: 'position', min: 0.15, max: 2, step: 0.005, value: 0.3, unit: 'm', dec: 3, aria: 'the far point of the eye' });

  const Y = 250, EX = 1170, R = 140, DI = 0.02, GAP = 0.015, NEAR = 0.25;
  const xOf = (v) => 900 - (Math.log(v / 0.1) / Math.log(30)) * 800;
  const HS = [-48, -16, 16, 48];
  let g = null, XL = 0, SX = 0;

  function toRetina(p, q) {
    const dx = q[0] - p[0], dy = q[1] - p[1], ex = p[0] - EX, ey = p[1] - Y, r = R - 7;
    const qa = dx * dx + dy * dy, qb = 2 * (ex * dx + ey * dy), qc = ex * ex + ey * ey - r * r;
    const t = (-qb + Math.sqrt(qb * qb - 4 * qa * qc)) / (2 * qa);
    return { t, at: [p[0] + dx * t, p[1] + dy * t] };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const near = defect.value === 'near', on = specs.value === 'on', v = pt.v;
    const Peye = 1 / v + 1 / DI;
    const dI = on ? DI : near ? 1 / Peye : 1 / (Peye - 1 / NEAR);
    const ray = cat(0), PC = C('position');

    line(ctx, 30, Y, 1370, Y, alpha(PAL.ink, 0.3), 2, [10, 10]);
    g = eye(ctx, EX, Y, R);
    XL = g.ix + 32; SX = g.apex - 64;
    eyeLens(ctx, XL, Y, 12 + (Peye - 50) * 4, 62);
    if (on) spectacle(ctx, SX, Y, 80, !near);

    const xv = xOf(v), xo = xOf(NEAR);
    const xm = XL + (g.retina - XL) * (1 + (3 * (dI - DI)) / DI);
    const M = [xm, Y];
    ctx.save(); ctx.setLineDash([5, 7]); ctx.strokeStyle = alpha(PC, 0.7); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(xv, Y - 62); ctx.lineTo(xv, Y + 62); ctx.stroke(); ctx.restore();
    text(ctx, near ? 'far point' : 'near point', xv, Y - 80, PC, { size: 19, align: 'center', bg: PAL.panel });

    const hits = [];
    for (const h of HS) {
      let atEye;
      if (on) {
        const from = near ? [30, Y + h] : [xo, Y];
        const hs = near ? h : h * ((SX - xo) / (XL - xo));
        const ys = Y + hs;
        line(ctx, from[0], from[1], SX, ys, ray, 3);
        line(ctx, SX, ys, xv, Y, alpha(ray, 0.45), 2, [6, 8]);
        atEye = [XL, Y + hs * ((XL - xv) / (SX - xv))];
        line(ctx, SX, ys, atEye[0], atEye[1], ray, 3);
      } else {
        atEye = [XL, Y + h];
        line(ctx, near ? 30 : xo, near ? Y + h : Y, atEye[0], atEye[1], ray, 3);
      }
      const r = toRetina(atEye, M);
      line(ctx, atEye[0], atEye[1], r.at[0], r.at[1], ray, 3);
      if (r.t > 1.0001) line(ctx, r.at[0], r.at[1], M[0], M[1], ray, 2.5, [6, 8]);
      hits.push(r.at[1]);
    }
    const clear = Math.abs(dI - DI) < 1e-6;
    if (clear) dot(ctx, g.retina, Y, ray, true, 7);
    else line(ctx, g.retina + 2, Math.min(...hits), g.retina + 2, Math.max(...hits), ray, 9);

    if (near) text(ctx, 'from a distant object', 40, Y + 86, PAL.muted, { size: 18, align: 'left' });
    else {
      dot(ctx, xo, Y, PAL.ink, true, 7);
      text(ctx, 'object', xo, Y + 84, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
    }
    if (on) {
      dot(ctx, xv, Y, ray, false, 7);
      text(ctx, 'image', xv + 12, Y + 30, PAL.muted, { size: 18, align: 'left', bg: PAL.panel });
      text(ctx, 'spectacle lens', SX, Y - 100, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
    }
    text(ctx, 'lens', XL, Y + 90, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
    text(ctx, 'retina', EX + R + 12, Y - 110, PAL.muted, { size: 18, align: 'left' });

    const cm = (x) => sig3(x * 100) + ' cm';
    if (on) {
      hbracket(ctx, xv, SX, Y + 170, PC, 'd_i = ' + minus('-' + cm(v - GAP)), { side: 'below' });
      if (!near) hbracket(ctx, xo, SX, Y + 130, PC, 'd_o = ' + cm(NEAR - GAP), { side: 'below' });
    } else {
      hbracket(ctx, xv, XL, Y + 170, PC, (near ? 'far point ' : 'near point ') + cm(v), { side: 'below' });
    }
    text(ctx, 'not to scale', 30, 540, PAL.muted, { size: 17, align: 'left' });

    const m = (x) => minus(sig3(x)) + '\\ \\text{m}';
    if (on) {
      const P = (near ? 0 : 1 / (NEAR - GAP)) - 1 / (v - GAP);
      topline(ctx, `A ${near ? 'diverging' : 'converging'} lens of ${minus(sig3(P))} D puts the image at the ${near ? 'far' : 'near'} point, and the eye focuses it on the retina.`);
      readout(d.readout, `P = \\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{${near ? '\\infty' : m(NEAR - GAP)}} + \\frac{1}{${m(-(v - GAP))}} = ${minus(sig3(P))}\\ \\text{D}`,
        `The spectacle lens sits 1.50 cm in front of the eye, so the ${near ? 'far' : 'near'} point is ${cm(v - GAP)} from it.`);
    } else if (near) {
      topline(ctx, `The relaxed eye has ${sig3(Peye)} D, and rays from a distant object meet in front of the retina.`);
      readout(d.readout, `P = \\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{\\infty} + \\frac{1}{${fmt(dI, 4)}\\ \\text{m}} = ${sig3(Peye)}\\ \\text{D}`,
        `The rays meet ${sig3(dI * 100)} cm behind the lens, short of the retina 2.00 cm behind it, so the image is blurred.`);
    } else {
      topline(ctx, `The eye reaches only ${sig3(Peye)} D, and rays from an object 25.0 cm away meet behind the retina.`);
      readout(d.readout, `P = \\frac{1}{\\kdobj} + \\frac{1}{\\kdimg} = \\frac{1}{0.250\\ \\text{m}} + \\frac{1}{${fmt(dI, 4)}\\ \\text{m}} = ${sig3(Peye)}\\ \\text{D}`,
        `The rays would meet ${sig3(dI * 100)} cm behind the lens, beyond the retina 2.00 cm behind it, so the image is blurred.`);
    }
  }
  hover(d.stage, () => (g ? [
    { x: XL, y: Y + 40, r: 22, name: defect.value === 'near' ? 'a lens too powerful, or an eye too long' : 'a lens too weak, or an eye too short' },
    ...(specs.value === 'on' ? [{ x: SX, y: Y + 50, r: 20, name: defect.value === 'near' ? 'a diverging spectacle lens' : 'a converging spectacle lens' }] : []),
  ] : []));
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.8 · sim-astigmatism-chart · still · flat
   The book's chart: twelve spokes of three parallel lines every 30°, about a
   center cross. An astigmatic eye blurs lines according to their direction; a
   line at angle φ to the axis is widened and faded by the astigmatism times
   |sin φ|, so lines along the axis stay sharp and those across it look faint.
===================================================================== */
(function () {
  const d = sim('sim-astigmatism-chart', 540);
  const s = ctl(d.controls, { label: '\\text{astigmatism}', cls: '', min: 0, max: 2, step: 0.05, value: 0, unit: 'D', dec: 2, aria: 'the strength of the astigmatism' });
  const ax = ctl(d.controls, { label: '\\text{axis}', cls: '', min: 0, max: 180, step: 1, value: 90, unit: '°', dec: 0, aria: 'the axis along which lines stay sharp', detents: [0, 45, 90, 135, 180] });
  const CX = 700, CY = 290, R0 = 70, R1 = 225;

  function draw() {
    const { ctx } = begin(d.c);
    const k = s.v / 2, a = (ax.v * Math.PI) / 180;
    for (let i = 0; i < 12; i++) {
      const phi = (i * Math.PI) / 6, ux = Math.cos(phi), uy = -Math.sin(phi);
      const b = k * Math.abs(Math.sin(phi - a));
      for (const off of [-9, 0, 9]) {
        const px = -uy * off, py = ux * off;
        line(ctx, CX + ux * R0 + px, CY + uy * R0 + py, CX + ux * R1 + px, CY + uy * R1 + py, alpha(PAL.ink, 1 - 0.8 * b), 3 + 7 * b);
      }
    }
    line(ctx, CX - 18, CY, CX + 18, CY, PAL.ink, 3);
    line(ctx, CX, CY - 18, CX, CY + 18, PAL.ink, 3);
    if (s.v > 0) {
      const across = Math.round((ax.v + 90) % 180);
      topline(ctx, `Lines near ${Math.round(ax.v)}° stay sharp, and lines near ${across}° look faint.`);
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
