/* Figures for section 19.4 Equipotential Lines. Boots against the section's text article.
   The section draws the potential rather than computing it, so both figures
   are maps. The first folds the book's three maps of charges into one
   engine whose arrangement is a choice and whose equipotential lines are
   contoured from the potential itself; the second is the pair of parallel
   plates, whose equipotentials come out evenly spaced because the field
   between them is uniform. Neither has a time in it: a fixed arrangement of
   charges and a fixed voltage across a fixed gap answer their sliders and
   register no cycle, so neither figure takes a transport. The page binds
   voltage, electric-field, charge, position and energy; the frames, the
   scales and the count of lines are ink, and the sign of a charge is told
   by its label, never by a hue. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const K = 8.99e9;                                   /* Coulomb's constant, as this chapter's examples use it */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function sciParts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); return { m: (x / Math.pow(10, e)).toFixed(d), e }; }
const sci = (x, d = 2) => { if (x === 0) return '0'; const s = x < 0 ? '−' : ''; const { m, e } = sciParts(Math.abs(x), d); return s + m + ' × 10' + sup(e); };
const sciTex = (x, d = 2) => { if (x === 0) return '0'; const s = x < 0 ? '-' : ''; const { m, e } = sciParts(Math.abs(x), d); return s + m + ' \\times 10^{' + e + '}'; };
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);

/* =====================================================================
   FIGURE 19.8 + 19.9 + 19.10: the map of the potential around a chosen
   arrangement of point charges. The equipotential lines are contoured from
   the potential at equal steps of voltage and each carries its value; the
   field lines are traced from the field itself, so the right angle between
   the two sets is a consequence of the drawing and not an assertion of it.
   Still: a fixed arrangement of charges has no time in it, so the figure
   answers its choices and its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-equipotential-map', 880);
  const arr = choice(d.controls, {
    label: '\\text{The charges are}',
    options: [{ value: 'one', label: 'One charge' }, { value: 'pair', label: 'Opposite pair' }, { value: 'neg', label: 'Two negative' }],
    value: 'one', aria: 'the arrangement of the charges'
  });
  const shown = choice(d.controls, {
    label: '\\text{Draw}',
    options: [{ value: 'both', label: 'Both sets' }, { value: 'equi', label: 'Equipotentials' }, { value: 'field', label: 'Field lines' }],
    value: 'both', aria: 'which sets of lines are drawn'
  });
  const Qm = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: 1, max: 8, step: 0.25, value: 4, unit: 'nC', dec: 2, aria: 'magnitude of each charge' });
  const NL = ctl(d.controls, { label: '\\text{lines}', cls: '', min: 2, max: 6, step: 1, value: 4, unit: '', dec: 0, aria: 'number of equipotential lines drawn for each charge' });

  /* The window is fixed at ±35 cm across and ±18 cm up, from the widest arrangement
     the choices reach (two charges 20 cm apart with a 16 cm equipotential round each),
     and never rescales. */
  const cx = 700, cy = 400, PPC = 16, BOX = { l: 140, r: 1260, t: 110, b: 690 };
  const SEP = 20;                                   /* the separation of the pair, in centimetres, held fixed */
  const X = (x) => cx + x * PPC, Y = (y) => cy - y * PPC;
  const X0 = (BOX.r - BOX.l) / 2 / PPC, Y0 = (BOX.b - BOX.t) / 2 / PPC;

  function charges() {
    const q = Qm.v * 1e-9;
    if (arr.value === 'one') return [{ x: 0, y: 0, q, s: 1 }];
    if (arr.value === 'pair') return [{ x: -SEP / 2, y: 0, q, s: 1 }, { x: SEP / 2, y: 0, q: -q, s: -1 }];
    return [{ x: -SEP / 2, y: 0, q: -q, s: -1 }, { x: SEP / 2, y: 0, q: -q, s: -1 }];
  }
  /* the potential at a point given in centimetres, in volts; the distance is floored at
     3 mm so that no node of the grid sits on a charge and runs away to infinity */
  function pot(cs, x, y) {
    let v = 0;
    for (const c of cs) { const r = Math.max(0.003, Math.hypot(x - c.x, y - c.y) / 100); v += (K * c.q) / r; }
    return v;
  }
  /* the field at a point given in centimetres, as a vector in volts per metre */
  function fieldAt(cs, x, y) {
    let ex = 0, ey = 0;
    for (const c of cs) {
      const dx = (x - c.x) / 100, dy = (y - c.y) / 100, r = Math.max(0.004, Math.hypot(dx, dy));
      const f = (K * c.q) / (r * r * r); ex += f * dx; ey += f * dy;
    }
    return { ex, ey };
  }
  /* the levels: equal steps of voltage up to the value the potential reaches 4 cm from
     one charge, so that the lines crowd toward the charge as the book's circles do */
  function levels(cs) {
    const n = NL.v, top = (K * Qm.v * 1e-9) / 0.04;
    const out = [];
    for (let i = 1; i <= n; i++) {
      const v = (top * i) / n;
      if (arr.value === 'one') out.push(v);
      else if (arr.value === 'pair') { out.push(v); out.push(-v); }
      else out.push(-v);
    }
    return out;
  }
  /* the radius at which a ray from the charge `c` at the canvas angle `a` crosses the
     level `v`, found by bisection, or null where the ray never crosses it */
  function crossing(cs, c, a, v) {
    const ux = Math.cos(a), uy = Math.sin(a);
    const at = (r) => pot(cs, c.x + r * ux, c.y + r * uy) - v;
    let lo = 0.35, hi = 40;
    if (at(lo) * at(hi) > 0) return null;
    for (let i = 0; i < 40; i++) { const mid = (lo + hi) / 2; if (at(lo) * at(mid) <= 0) hi = mid; else lo = mid; }
    const r = (lo + hi) / 2;
    return { r, x: c.x + r * ux, y: c.y + r * uy };
  }
  /* one level contoured over a grid of the window by marching squares: every cell whose
     corners straddle the level contributes the segment between its edge crossings */
  const NX = 132, NY = 68;
  function contour(ctx, grid, v, color, w) {
    const hx = (2 * X0) / NX, hy = (2 * Y0) / NY;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < NX; i++) {
      for (let j = 0; j < NY; j++) {
        const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], e = grid[i][j + 1];
        const x0 = -X0 + i * hx, y0 = -Y0 + j * hy, x1 = x0 + hx, y1 = y0 + hy;
        const pts = [];
        const lerp = (p, q, px, py, qx, qy) => { const t = (v - p) / (q - p); pts.push([px + t * (qx - px), py + t * (qy - py)]); };
        if ((a < v) !== (b < v)) lerp(a, b, x0, y0, x1, y0);
        if ((b < v) !== (c < v)) lerp(b, c, x1, y0, x1, y1);
        if ((c < v) !== (e < v)) lerp(c, e, x1, y1, x0, y1);
        if ((e < v) !== (a < v)) lerp(e, a, x0, y1, x0, y0);
        for (let k = 0; k + 1 < pts.length; k += 2) {
          ctx.moveTo(X(pts[k][0]), Y(pts[k][1])); ctx.lineTo(X(pts[k + 1][0]), Y(pts[k + 1][1]));
        }
      }
    }
    ctx.stroke(); ctx.restore();
  }
  /* one field line, traced from a seed point along the field (from a positive charge) or
     against it (into a negative one), with an arrowhead partway along it */
  function streamline(ctx, cs, x0, y0, dir, color) {
    const pts = [[x0, y0]];
    let x = x0, y = y0;
    for (let n = 0; n < 900; n++) {
      const { ex, ey } = fieldAt(cs, x, y), m = Math.hypot(ex, ey);
      if (!m) break;
      x += (dir * 0.45 * ex) / m; y += (dir * 0.45 * ey) / m;
      if (Math.abs(x) > X0 + 1 || Math.abs(y) > Y0 + 1) { pts.push([x, y]); break; }
      let stop = false;
      for (const c of cs) if (Math.hypot(x - c.x, y - c.y) < 0.6) stop = true;
      pts.push([x, y]);
      if (stop) break;
    }
    if (pts.length < 3) return;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
    ctx.moveTo(X(pts[0][0]), Y(pts[0][1]));
    for (const p of pts) ctx.lineTo(X(p[0]), Y(p[1]));
    ctx.stroke(); ctx.restore();
    const k = Math.max(1, Math.round(pts.length * 0.45)), p = pts[k - 1], q = pts[Math.min(pts.length - 1, k + 3)];
    const ax = X(p[0]), ay = Y(p[1]), bx = X(q[0]), by = Y(q[1]);
    const m = Math.hypot(bx - ax, by - ay);
    if (m > 1) arrow(ctx, ax, ay, ax + ((bx - ax) / m) * 24 * dir, ay + ((by - ay) / m) * 24 * dir, color, 3);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), fc = C('electric-field'), qc = C('charge');
    const cs = charges(), lv = levels(cs);
    /* the frame of the map, in ink */
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    /* the field lines, traced from the field itself */
    if (shown.value !== 'equi') {
      for (const c of cs) {
        if (arr.value === 'pair' && c.s < 0) continue;   /* the pair's lines all start on the positive charge */
        for (let i = 0; i < 16; i++) {
          const a = (i / 16) * Math.PI * 2 + 0.2;
          streamline(ctx, cs, c.x + 0.7 * Math.cos(a), c.y + 0.7 * Math.sin(a), c.s, alpha(fc, 0.85));
        }
      }
    }
    /* the equipotential lines, contoured from the potential */
    if (shown.value !== 'field') {
      const hx = (2 * X0) / NX, hy = (2 * Y0) / NY, grid = [];
      for (let i = 0; i <= NX; i++) { const col = []; for (let j = 0; j <= NY; j++) col.push(pot(cs, -X0 + i * hx, -Y0 + j * hy)); grid.push(col); }
      for (const v of lv) contour(ctx, grid, v, vc, 3);
    }
    ctx.restore();
    /* the charges themselves */
    for (const c of cs) {
      dot(ctx, X(c.x), Y(c.y), qc, true, 16);
      text(ctx, c.s < 0 ? '−' : '+', X(c.x), Y(c.y), PAL.panel, { size: 22, weight: 600, align: 'center', base: 'middle' });
      text(ctx, (c.s < 0 ? '−' : '+') + fmt(Qm.v, 2) + ' nC', X(c.x), Y(c.y) + 44, qc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    }
    /* one voltage on each equipotential line, read off a ray from the charge it rings */
    if (shown.value !== 'field') {
      const seen = [];
      for (const v of lv) {
        const c = v > 0 ? cs[0] : cs[cs.length - 1];
        const a = v > 0 ? 2.25 : 0.9;
        const hit = crossing(cs, c, a, v);
        if (!hit) continue;
        const px = X(hit.x), py = Y(hit.y);
        if (px < BOX.l + 40 || px > BOX.r - 40 || py < BOX.t + 30 || py > BOX.b - 30) continue;
        if (seen.some((p) => Math.hypot(p[0] - px, p[1] - py) < 54)) continue;
        if (cs.some((c) => Math.hypot(X(c.x) - px, Y(c.y) - py) < 62)) continue;
        seen.push([px, py]);
        text(ctx, num(v, 0) + ' V', px, py, vc, { size: 19, weight: 600, align: 'center', base: 'middle', bg: PAL.panel });
      }
    }
    /* the legend, which names both sets of lines even with colour turned off */
    const ly = BOX.b + 34;
    if (shown.value !== 'equi') {
      line(ctx, BOX.l + 10, ly, BOX.l + 70, ly, fc, 3);
      arrow(ctx, BOX.l + 50, ly, BOX.l + 74, ly, fc, 3);
      text(ctx, 'electric field lines, with their arrowheads', BOX.l + 86, ly + 7, fc, { size: 19, weight: 600 });
    }
    if (shown.value !== 'field') {
      line(ctx, BOX.r - 440, ly, BOX.r - 380, ly, vc, 3);
      text(ctx, 'equipotential lines, each at its own voltage', BOX.r - 366, ly + 7, vc, { size: 19, weight: 600 });
    }
    const stepV = (K * Qm.v * 1e-9) / 0.04 / NL.v;
    const named = arr.value === 'one' ? 'An isolated +' + fmt(Qm.v, 2) + ' nC charge'
      : arr.value === 'pair' ? 'A +' + fmt(Qm.v, 2) + ' nC charge and a −' + fmt(Qm.v, 2) + ' nC charge ' + fmt(SEP, 0) + ' cm apart'
        : 'Two −' + fmt(Qm.v, 2) + ' nC charges ' + fmt(SEP, 0) + ' cm apart';
    topline(ctx, named + ', with equipotential lines drawn every ' + fmt(stepV, 0) + ' V, the outermost at ' + fmt(stepV, 0) + ' V and the innermost at ' + fmt(stepV * NL.v, 0) + ' V.');
    const near = lv.reduce((a, b) => (Math.abs(b) > Math.abs(a) ? b : a), lv[0]);
    readout(d.readout, `\\kW = -\\kq\\kdV = -\\kq(0) = 0`,
      (shown.value === 'field' ? '' : 'The innermost line drawn here stands at ' + num(near, 0) + ' V. ')
      + (shown.value === 'equi' ? 'Every line here is a line of constant potential, so a charge carried along one of them has no work done on it. The field lines are hidden: draw them in yourself by crossing every one of these lines at a right angle, and then bring them back and see whether you were right.'
        : shown.value === 'field' ? 'Only the field lines are drawn. The equipotentials are the curves that cross every one of them at a right angle, and they crowd wherever the field lines crowd, since a strong field means the potential changes quickly over a short step.'
          : 'The two sets of lines meet at a right angle everywhere on the map, which is what the zero work says. Where the lines crowd together the potential changes quickly over a short distance and the field is strong, and where they spread apart the field is weak.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.11: the field and the equipotential lines between two metal
   plates. The plates are conductors and so are equipotentials themselves,
   and between them the field is uniform, which is why the lines come out
   evenly spaced and parallel. Still: a fixed voltage across a fixed gap
   has no clock, so the figure answers its sliders and takes no transport.
===================================================================== */
(function () {
  const d = sim('sim-plate-equipotentials', 790);
  const Vab = ctl(d.controls, { label: '\\kVAB', cls: 'voltage', min: 20, max: 200, step: 5, value: 100, unit: 'V', dec: 0, aria: 'the voltage across the plates' });
  const gap = ctl(d.controls, { label: '\\kd', cls: 'position', min: 5, max: 25, step: 0.5, value: 10, unit: 'cm', dec: 1, aria: 'the separation of the plates' });
  const step = choice(d.controls, {
    label: '\\text{A line every}',
    options: [{ value: 5, label: '5 V' }, { value: 10, label: '10 V' }, { value: 20, label: '20 V' }, { value: 25, label: '25 V' }],
    value: 20, aria: 'the step in voltage between one equipotential line and the next'
  });
  /* 34 logical units to the centimetre, from the widest gap the slider reaches,
     so the 25 cm gap fills 850 units and the scale never changes */
  const cx = 700, PPC = 34, TOP = 210, BOT = 570;
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), fc = C('electric-field'), qc = C('charge'), pc = C('position');
    const V = Vab.v, dm = gap.v / 100, E = V / dm, half = (gap.v * PPC) / 2;
    const xa = cx - half, xb = cx + half;
    const dV = Number(step.value), n = Math.floor(V / dV);          /* the interior lines plus the far plate */
    /* the two plates and their charges: the frame is ink, the charges wear the charge hue */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(xa - 16, TOP, 16, BOT - TOP); ctx.strokeRect(xa - 16, TOP, 16, BOT - TOP);
    ctx.fillRect(xb, TOP, 16, BOT - TOP); ctx.strokeRect(xb, TOP, 16, BOT - TOP); ctx.restore();
    for (let i = 0; i < 7; i++) {
      const y = TOP + 30 + i * ((BOT - TOP - 60) / 6);
      text(ctx, '+', xa - 30, y, qc, { size: 22, weight: 600, align: 'center', base: 'middle' });
      text(ctx, '−', xb + 30, y, qc, { size: 22, weight: 600, align: 'center', base: 'middle' });
    }
    text(ctx, 'plate A', xa - 8, TOP - 30, PAL.ink, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'plate B', xb + 8, TOP - 30, PAL.ink, { size: 21, weight: 600, align: 'center' });
    /* the equipotential lines, evenly spaced because the field between the plates is uniform.
       Every line is labelled while six or fewer of them carry a label; beyond that the labels
       would collide, so one in every few is labelled and the rest are read off the step. */
    /* the labels are staggered over two rows, so one is written wherever the last on its
       own row lies at least 58 units away; below that they would run together */
    const pitch = (xb - xa) / (V / dV);
    const labelEvery = Math.max(1, Math.ceil(30 / pitch));
    for (let i = 0; i <= n; i++) {
      const Vi = V - i * dV, x = xa + (i / (V / dV)) * (xb - xa);
      const isPlate = i === 0 || Math.abs(Vi) < 1e-9;
      line(ctx, x, TOP + (isPlate ? 0 : 10), x, BOT - (isPlate ? 0 : 10), isPlate ? alpha(vc, 0.45) : vc, isPlate ? 4 : 3, isPlate ? [10, 10] : undefined);
      if (i % labelEvery === 0 || i === n) text(ctx, fmt(Vi, 0) + ' V', x, BOT + ((i / labelEvery) % 2 ? 64 : 34), vc, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    }
    /* the field lines, straight and evenly spaced between the plates and curving beyond their ends */
    for (let i = 0; i < 5; i++) {
      const y = TOP + 40 + i * ((BOT - TOP - 80) / 4);
      arrow(ctx, xa + 14, y, xb - 14, y, alpha(fc, 0.9), 3);
    }
    ctx.save(); ctx.strokeStyle = alpha(fc, 0.6); ctx.lineWidth = 2.5;
    for (const s of [-1, 1]) {
      const y0 = s < 0 ? TOP + 8 : BOT - 8, y1 = y0 + s * 38;
      ctx.beginPath(); ctx.moveTo(xa - 4, y0); ctx.bezierCurveTo(xa + half * 0.4, y1, xb - half * 0.4, y1, xb + 4, y0); ctx.stroke();
    }
    ctx.restore();
    /* the separation, and the field the two plates hold between them */
    hbracket(ctx, xa, xb, BOT + 122, pc, 'd = ' + fmt(gap.v, 1) + ' cm');
    text(ctx, 'E = ' + sci(E, 2) + ' V/m', cx, TOP - 80, fc, { size: 23, weight: 600, align: 'center', bg: PAL.panel });
    const spacing = dV / E * 100;
    topline(ctx, 'Across a ' + fmt(gap.v, 1) + ' cm gap held at ' + fmt(V, 0) + ' V the field is ' + sci(E, 2) + ' V/m, and equipotentials drawn every ' + fmt(dV, 0) + ' V stand ' + fmt(spacing, 2) + ' cm apart.');
    readout(d.readout, `\\kEf = \\frac{\\kVAB}{\\kd} = \\frac{${fmt(V, 0)}\\ \\text{V}}{${fmt(dm, 3)}\\ \\text{m}} = ${sciTex(E, 2)}\\ \\text{V/m}`,
      'One step of ' + fmt(dV, 0) + ' V is taken over Δs = ΔV/E = ' + fmt(spacing, 2) + ' cm, the same step everywhere between the plates, which is why the lines are evenly spaced and parallel. '
      + 'The plates themselves are conductors and so are equipotentials too, at ' + fmt(V, 0) + ' V and 0 V, and the same field could be maintained by standing conducting plates at any of the lines drawn between them.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
