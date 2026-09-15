/* Figures for section 18.5 Electric Field Lines: Multiple Charges. Boots against the section's text article.
   The page binds charge and electric field: the charges and their sliders and
   labels wear the charge hue, and every field arrow and field line wears the
   electric-field hue, as `ch18/COLOR.md` asks. A charge's sign is told by the
   sign on its label and by which way the lines run, never by a second hue.
   Every figure here is still. A field is there all at once around charges that
   stay where they are, so none of the five registers a cycle, none carries a
   transport, and a slider's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const K = 8.99e9;                                  /* Coulomb's constant, N·m²/C² */
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const wd = (n) => (n < WORDS.length ? WORDS[n] : String(n));
/* a number with the typographic minus, and one that always carries its sign */
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
const plus = (v, d) => (v === 0 ? '' : v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* a field strength in N/C, written for a headline and for LaTeX */
function sci(v, d) {
  if (!(Math.abs(v) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return fmt(m, d) + ' × 10' + sup(e);
}
function sciTex(v, d) {
  if (!(Math.abs(v) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return fmt(m, d) + ' \\times 10^{' + e + '}';
}
const SUPS = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (e) => String(e).split('').map((ch) => SUPS[ch] ?? ch).join('');

/* A point charge: a filled disc in the charge hue with its sign on it. The
   disc grows a little with the charge it carries, and never enough to hide
   where the lines start. */
function pointCharge(ctx, x, y, q, r) {
  const qc = C('charge');
  ctx.save(); ctx.fillStyle = q === 0 ? PAL.panel : qc; ctx.strokeStyle = qc; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (q !== 0) text(ctx, q < 0 ? '−' : '+', x, y + 1, PAL.panel, { size: r * 1.8, weight: 700, align: 'center' });
}

/* The field of a list of charges at a point, in units of k·q/r² with q in
   nanocoulombs and r in centimetres; the figures that only draw directions
   never convert it, and the ones that state a number do. */
function fieldAt(x, y, qs) {
  let ex = 0, ey = 0;
  for (const c of qs) {
    const dx = x - c.x, dy = y - c.y, r2 = dx * dx + dy * dy;
    if (r2 < 1e-9) continue;
    const f = c.q / (r2 * Math.sqrt(r2));
    ex += f * dx; ey += f * dy;
  }
  return { x: ex, y: ey, m: Math.hypot(ex, ey) };
}

/* One field line, traced from a seed point by stepping along the field
   direction until it leaves the frame or reaches a charge of the other sign.
   `sense` is +1 for a line leaving a positive charge and −1 for one traced
   backwards out of a negative charge. */
function traceLine(seed, qs, sense, box, stop, step, maxSteps) {
  const pts = [[seed.x, seed.y]];
  let x = seed.x, y = seed.y;
  for (let i = 0; i < maxSteps; i++) {
    const f = fieldAt(x, y, qs);
    if (!(f.m > 0)) break;
    /* a midpoint step, so a line that curves sharply near a charge stays smooth */
    const hx = x + (sense * step * f.x) / f.m / 2, hy = y + (sense * step * f.y) / f.m / 2;
    const g = fieldAt(hx, hy, qs);
    if (!(g.m > 0)) break;
    x += (sense * step * g.x) / g.m; y += (sense * step * g.y) / g.m;
    pts.push([x, y]);
    if (x < box.x0 || x > box.x1 || y < box.y0 || y > box.y1) break;
    let done = false;
    for (const c of qs) if (Math.hypot(x - c.x, y - c.y) < stop) { done = true; break; }
    if (done) break;
  }
  return pts;
}

/* A traced line drawn with an arrowhead partway along it, so the sense of the
   field is read off the line and not off a colour. */
function drawLine(ctx, pts, color, w, heads) {
  if (pts.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.stroke(); ctx.restore();
  for (const t of heads) {
    const i = Math.min(pts.length - 2, Math.max(1, Math.round(t * (pts.length - 1))));
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
    const d = Math.hypot(bx - ax, by - ay);
    if (d > 0.01) arrow(ctx, ax - ((bx - ax) / d) * 9, ay - ((by - ay) / d) * 9, ax + ((bx - ax) / d) * 9, ay + ((by - ay) / d) * 9, color, w + 1);
  }
}

/* A grid of field arrows over a frame, each one as long as the field is strong
   up to a cap, and left out where the field is stronger than the cap so that a
   blank circle surrounds every charge. This is the book's own arrow map. */
function arrowGrid(ctx, qs, box, gap, unit, cap2, color) {
  for (let x = box.x0 + gap / 2; x < box.x1; x += gap) {
    for (let y = box.y0 + gap / 2; y < box.y1; y += gap) {
      const f = fieldAt(x, y, qs);
      if (!(f.m > 0)) continue;
      const L = f.m * unit;
      if (L > cap2) continue;                        /* very large vectors are omitted for clarity */
      if (L < 3) continue;
      arrow(ctx, x - (f.x / f.m) * L / 2, y - (f.y / f.m) * L / 2, x + (f.x / f.m) * L / 2, y + (f.y / f.m) * L / 2, color, 2.5);
    }
  }
}

/* =====================================================================
   FIGURE 18.19 + 18.20: one point charge, drawn as separate arrows and as
   continuous lines. The book draws the same charge twice in 18.19 and three
   charges side by side in 18.20, and one live drawing whose charge the reader
   sets is every one of those five panels. Still: the field around a charge
   that stays where it is has no time in it, so the figure answers its
   controls and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-one-charge', 620);
  const qs = ctl(d.controls, { label: '\\kQch', cls: 'charge', min: -20, max: 20, step: 0.5, value: 5, unit: 'nC', dec: 1,
    aria: 'the size and the sign of the point charge', detents: [-10, -5, 5, 10] });
  const how = choice(d.controls, { label: '\\text{the drawing}', options: [
    { value: 'lines', label: 'field lines' }, { value: 'arrows', label: 'arrows' }], value: 'lines', aria: 'whether the field is drawn as continuous lines or as separate arrows' });
  const CX = 700, CY = 330, R0 = 30;                  /* the charge sits here, and the lines start at its rim */
  const S = 46;                                       /* 46 units to the centimetre, so 6 cm reaches the frame */
  const BOX = { x0: 180, x1: 1220, y0: 96, y1: 566 };
  const PROBE = 3.0;                                  /* the field is stated at this distance, in centimetres */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), qc = C('charge');
    const q = qs.v, mag = Math.abs(q), sgn = q < 0 ? -1 : 1;
    /* rule 2 of the section: the number of lines is proportional to the charge */
    const n = Math.max(4, Math.min(48, Math.round(2.4 * mag)));
    const E = (K * mag * 1e-9) / Math.pow(PROBE * 1e-2, 2);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(BOX.x0, BOX.y0, BOX.x1 - BOX.x0, BOX.y1 - BOX.y0); ctx.restore();
    if (mag > 0) {
      if (how.value === 'lines') {
        for (let i = 0; i < n; i++) {
          const a = (i / n) * TAU - Math.PI / 2;
          const ux = Math.cos(a), uy = Math.sin(a);
          /* the line runs from the rim to the frame; the head sits partway along it and points the way the field does */
          const t = Math.min((ux > 0 ? BOX.x1 - CX : CX - BOX.x0) / Math.abs(ux || 1e-6), (uy > 0 ? BOX.y1 - CY : CY - BOX.y0) / Math.abs(uy || 1e-6));
          const x1 = CX + ux * R0, y1 = CY + uy * R0, x2 = CX + ux * t, y2 = CY + uy * t;
          line(ctx, x1, y1, x2, y2, ec, 2.5);
          for (const s of [0.42, 0.78]) {
            const mx = x1 + (x2 - x1) * s, my = y1 + (y2 - y1) * s;
            arrow(ctx, mx - sgn * ux * 9, my - sgn * uy * 9, mx + sgn * ux * 9, my + sgn * uy * 9, ec, 3.5);
          }
        }
      } else {
        /* separate arrows on rings, each as long as the field is strong there */
        const A = 54;                                /* set so the innermost ring draws a readable arrow at the book's own charge */
        for (const rcm of [1.6, 2.6, 4.0, 5.6]) {
          const ring = Math.max(8, Math.round((TAU * rcm) / 1.15));
          for (let i = 0; i < ring; i++) {
            const a = (i / ring) * TAU - Math.PI / 2;
            const ux = Math.cos(a), uy = Math.sin(a);
            const L = Math.min(110, (A * mag) / (rcm * rcm));
            const bx = CX + ux * rcm * S, by = CY + uy * rcm * S;
            if (bx < BOX.x0 + 8 || bx > BOX.x1 - 8 || by < BOX.y0 + 8 || by > BOX.y1 - 8) continue;
            arrow(ctx, bx, by, bx + sgn * ux * L, by + sgn * uy * L, ec, 3);
          }
        }
      }
    }
    pointCharge(ctx, CX, CY, q, R0 * (0.78 + 0.22 * Math.min(1, mag / 10)));
    text(ctx, 'Q = ' + plus(q, 1) + ' nC', CX, CY + R0 + 34, qc, { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the scale the reader measures the closeness of the lines against */
    line(ctx, BOX.x0 + 24, BOX.y1 - 30, BOX.x0 + 24 + 2 * S, BOX.y1 - 30, PAL.muted, 3);
    line(ctx, BOX.x0 + 24, BOX.y1 - 38, BOX.x0 + 24, BOX.y1 - 22, PAL.muted, 3);
    line(ctx, BOX.x0 + 24 + 2 * S, BOX.y1 - 38, BOX.x0 + 24 + 2 * S, BOX.y1 - 22, PAL.muted, 3);
    text(ctx, '2 cm', BOX.x0 + 24 + S, BOX.y1 - 48, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, mag === 0 ? 'A charge of nothing makes no field at all, and no line leaves the point.'
      : 'The charge of ' + plus(q, 1) + ' nC ' + (q > 0 ? 'sends out ' : 'takes in ') + wd(n) + ' lines, and the field 3.0 cm from it is ' + sci(E, 2) + ' N/C.');
    readout(d.readout, `\\kEf = k\\frac{|\\kQch|}{r^2} = ${sciTex(E, 2)}\\ \\text{N/C at } r = 3.0\\ \\text{cm}`,
      how.value === 'lines' ? 'The lines are closer together near the charge, which is where the field is strong.' : 'Each arrow is the force a positive test charge of one unit would feel at that point.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.21: the two fields of Example 18.4 added at the origin. The book
   works the example once, and the figure lets the reader move either charge
   and either distance and watch the right triangle and its angle change.
   Still, for the reason the figure above is.
===================================================================== */
(function () {
  const d = sim('sim-adding-fields', 640);
  const q1s = ctl(d.controls, { label: '\\kqone', cls: 'charge', min: 1, max: 10, step: 0.5, value: 5, unit: 'nC', dec: 2, aria: 'the charge on the y-axis' });
  const q2s = ctl(d.controls, { label: '\\kqtwo', cls: 'charge', min: 1, max: 10, step: 0.5, value: 10, unit: 'nC', dec: 2, aria: 'the charge on the x-axis' });
  const r1s = ctl(d.controls, { label: 'r_1', cls: '', min: 2, max: 6, step: 0.25, value: 2, unit: 'cm', dec: 2, aria: 'the distance from the origin to the charge on the y-axis' });
  const r2s = ctl(d.controls, { label: 'r_2', cls: '', min: 2, max: 6, step: 0.25, value: 4, unit: 'cm', dec: 2, aria: 'the distance from the origin to the charge on the x-axis' });
  const OX = 770, OY = 555, S = 46;                   /* the origin O, and 46 units to the centimetre */
  /* One scale for both arrows, fixed from the widest field the sliders reach,
     10.0 nC at 2.00 cm, so that the longest arrow just fills the frame and no
     arrow is ever clipped or rescaled. */
  const KS = 440 / ((K * 10e-9) / Math.pow(2e-2, 2));
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), qc = C('charge');
    const q1 = q1s.v, q2 = q2s.v, r1 = r1s.v, r2 = r2s.v;
    const E1 = (K * q1 * 1e-9) / Math.pow(r1 * 1e-2, 2), E2 = (K * q2 * 1e-9) / Math.pow(r2 * 1e-2, 2);
    const Et = Math.hypot(E1, E2), th = Math.atan2(E1, E2) / RAD;
    /* the axes, drawn only as far as the frame allows */
    line(ctx, OX - 500, OY, OX + 360, OY, PAL.rule, 2);
    line(ctx, OX, OY - 470, OX, OY + 70, PAL.rule, 2);
    text(ctx, 'x', OX + 376, OY + 4, PAL.muted, { size: 20, base: 'middle' });
    text(ctx, 'y', OX + 12, OY - 466, PAL.muted, { size: 20 });
    for (let k = 1; k <= 6; k++) {
      line(ctx, OX + k * S, OY - 7, OX + k * S, OY + 7, PAL.muted, 2);
      line(ctx, OX - 7, OY - k * S, OX + 7, OY - k * S, PAL.muted, 2);
      if (k % 2 === 0) {
        text(ctx, k + ' cm', OX + k * S, OY + 36, PAL.muted, { size: 17, align: 'center' });
        text(ctx, k + ' cm', OX - 28, OY - k * S, PAL.muted, { size: 17, align: 'right', base: 'middle' });
      }
    }
    /* the two charges, the first above the origin and the second to its right */
    const p1 = { x: OX, y: OY - r1 * S }, p2 = { x: OX + r2 * S, y: OY };
    pointCharge(ctx, p1.x, p1.y, q1, 17);
    pointCharge(ctx, p2.x, p2.y, q2, 17);
    text(ctx, 'q₁ = ' + plus(q1, 2) + ' nC', p1.x + 28, p1.y - 6, qc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'q₂ = ' + plus(q2, 2) + ' nC', p2.x + 4, p2.y - 30, qc, { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    line(ctx, OX, OY, p1.x, p1.y, PAL.muted, 2, [6, 8]);
    line(ctx, OX, OY, p2.x, p2.y, PAL.muted, 2, [6, 8]);
    /* the two fields at O and their sum, drawn as the book draws them */
    const L1 = E1 * KS, L2 = E2 * KS;
    ctx.save(); ctx.strokeStyle = alpha(ec, 0.42); ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
    ctx.beginPath(); ctx.moveTo(OX, OY - L1); ctx.lineTo(OX - L2, OY - L1); ctx.lineTo(OX - L2, OY); ctx.stroke(); ctx.restore();
    arrow(ctx, OX, OY, OX - L2 * 1.0, OY - L1 * 1.0, ec, 6);
    arrow(ctx, OX, OY, OX, OY - L1, ec, 4.5);
    arrow(ctx, OX, OY, OX - L2, OY, ec, 4.5);
    /* each field's name beyond the head of its own arrow, so the three never
       crowd the origin when the sliders make the arrows short */
    const hyp = Math.hypot(L1, L2) || 1;
    text(ctx, 'E₁', OX + 12, OY - L1 - 12, ec, { size: 24, weight: 600, base: 'bottom' });
    text(ctx, 'E₂', OX - L2 - 12, OY - 12, ec, { size: 24, weight: 600, align: 'right', base: 'bottom' });
    text(ctx, 'Eₜₒₜ', OX - (L2 / hyp) * (hyp + 30), OY - (L1 / hyp) * (hyp + 30), ec, { size: 24, weight: 600, align: 'right', base: 'bottom' });
    text(ctx, 'O', OX - 18, OY + 26, PAL.ink, { size: 21, weight: 600, align: 'right' });
    dot(ctx, OX, OY, PAL.ink, true, 6);
    /* the angle the sum makes with the axis it is measured from */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(OX, OY, Math.min(74, 0.55 * hyp), Math.PI, Math.PI + th * RAD); ctx.stroke(); ctx.restore();
    topline(ctx, 'The two fields at O add to ' + sci(Et, 2) + ' N/C, at ' + fmt(th, 1) + '° above the x-axis.');
    readout(d.readout, `\\kEftot = \\left(\\kEfone^2 + \\kEftwo^2\\right)^{1/2} = ${sciTex(Et, 2)}\\ \\text{N/C},\\quad \\theta = \\tan^{-1}\\!\\left(\\frac{\\kEfone}{\\kEftwo}\\right) = ${fmt(th, 1)}^\\circ`,
      'The field of each charge points directly away from it, since the field is defined for a positive test charge.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.22 + 18.23: the field of two charges. The book draws three fixed
   pairs, two positive, two negative and one of each, and one live drawing
   whose two charges the reader sets is all three. Still, for the reason the
   figures above are.
===================================================================== */
(function () {
  const d = sim('sim-two-charges', 700);
  const q1s = ctl(d.controls, { label: '\\kqone', cls: 'charge', min: -3, max: 3, step: 0.5, value: 1, unit: 'q', dec: 1, aria: 'the charge on the left, in units of q', detents: [-3, -2, -1, 1, 2, 3] });
  const q2s = ctl(d.controls, { label: '\\kqtwo', cls: 'charge', min: -3, max: 3, step: 0.5, value: 1, unit: 'q', dec: 1, aria: 'the charge on the right, in units of q', detents: [-3, -2, -1, 1, 2, 3] });
  const ss = ctl(d.controls, { label: '\\text{separation}', cls: '', min: 4, max: 14, step: 0.5, value: 8, unit: 'cm', dec: 1, aria: 'the distance between the two charges' });
  const how = choice(d.controls, { label: '\\text{the drawing}', options: [
    { value: 'lines', label: 'field lines' }, { value: 'arrows', label: 'arrows' }], value: 'lines', aria: 'whether the field is drawn as continuous lines or as separate arrows' });
  const CX = 700, CY = 340, S = 34;                   /* the pair is centred here, at 34 units to the centimetre */
  const BOX = { x0: 120, x1: 1280, y0: 96, y1: 610 };
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), qc = C('charge');
    const q1 = q1s.v, q2 = q2s.v, sep = ss.v;
    const a = { x: CX - (sep * S) / 2, y: CY, q: q1 }, b = { x: CX + (sep * S) / 2, y: CY, q: q2 };
    const qs = [a, b].filter((c) => c.q !== 0);
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(BOX.x0, BOX.y0, BOX.x1 - BOX.x0, BOX.y1 - BOX.y0); ctx.restore();
    if (how.value === 'lines') {
      /* one bundle of lines from each charge, as many as the charge is large */
      for (const c of qs) {
        const n = Math.max(6, Math.round(6 * Math.abs(c.q)));
        for (let i = 0; i < n; i++) {
          const ang = (i / n) * TAU + (c === a ? 0 : Math.PI / n) - Math.PI / 2;
          const seed = { x: c.x + Math.cos(ang) * 26, y: c.y + Math.sin(ang) * 26 };
          const pts = traceLine(seed, qs, c.q > 0 ? 1 : -1, BOX, 22, 7, 900);
          drawLine(ctx, pts, ec, 2.5, [0.25, 0.62]);
        }
      }
    } else {
      arrowGrid(ctx, qs, BOX, 62, 2.5e5, 55, ec);
    }
    for (const c of [a, b]) {
      pointCharge(ctx, c.x, c.y, c.q, 16 + 5 * Math.min(1, Math.abs(c.q) / 3));
      text(ctx, (c === a ? 'q₁ = ' : 'q₂ = ') + (c.q === 0 ? '0' : plus(c.q, 1) + 'q'), c.x, c.y + (c === a ? -40 : 48), qc,
        { size: 23, weight: 600, align: 'center', base: c === a ? 'bottom' : 'top', bg: alpha(PAL.panel, 0.85) });
    }
    /* the separation, so the closeness of the lines can be read against a length */
    line(ctx, a.x, CY - 120, b.x, CY - 120, PAL.muted, 2, [6, 8]);
    text(ctx, fmt(sep, 1) + ' cm', CX, CY - 130, PAL.muted, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the field halfway between the charges, against the field the same distance outside the pair */
    const like = q1 * q2 > 0, mid = fieldAt(CX, CY, qs).m, out = fieldAt(a.x - (sep * S) / 2, CY, qs).m;
    const ratio = out > 0 ? mid / out : 0;
    topline(ctx, q1 === 0 && q2 === 0 ? 'With no charge anywhere there is no field, and no line to draw.'
      : q1 === 0 || q2 === 0 ? 'One charge alone makes the field of a single point charge, whose lines run straight out to infinity.'
      : like ? 'Two ' + (q1 > 0 ? 'positive' : 'negative') + ' charges: the lines bend away from the middle, where the field is weakest.'
      : 'Two unlike charges: every line runs from the positive charge to the negative one, and the field is strongest between them.');
    readout(d.readout, `\\kEf = \\kEfone + \\kEftwo`,
      q1 === 0 || q2 === 0 ? 'Set both charges to see how two fields add.'
        : 'Halfway between the charges the field is ' + fmt(ratio, 2) + ' times what it is the same distance outside the pair, because there the two fields '
          + (like ? 'oppose each other.' : 'point the same way and add.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   A faithful copy, unnumbered: the square W X Y Z of the test-prep items.
   No sliders and no animation, since the arrangement is fixed and the only
   thing the copy adds is that the four labels and the side can be read.
===================================================================== */
(function () {
  const d = sim('fig-square-wxyz', 620);
  const CXL = 500, TOP = 140, SIDE = 340;             /* the square's upper-left corner and its side */
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge');
    const L = CXL, R = CXL + SIDE, T = TOP, B = TOP + SIDE;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.setLineDash([9, 9]);
    ctx.strokeRect(L, T, SIDE, SIDE); ctx.restore();
    const pts = [
      { x: L, y: T, name: 'W', lx: -38, ly: -28 },
      { x: (L + R) / 2, y: T, name: 'X', lx: 0, ly: -28 },
      { x: R, y: T, name: 'Y', lx: 38, ly: -28 },
      { x: (L + R) / 2, y: B, name: 'Z', lx: 0, ly: 34 },
    ];
    for (const p of pts) {
      pointCharge(ctx, p.x, p.y, 1, 16);
      text(ctx, p.name, p.x + p.lx, p.y + p.ly, PAL.ink, { size: 27, weight: 700, align: 'center', base: p.ly < 0 ? 'bottom' : 'top' });
    }
    /* the charge every one of them carries, said once rather than four times */
    text(ctx, 'each object carries the charge +q', (L + R) / 2, B + 104, qc, { size: 22, weight: 600, align: 'center' });
    /* the side of the square, marked the way the book marks it */
    const MX = R + 110;
    line(ctx, R + 20, T, MX + 26, T, PAL.muted, 2);
    line(ctx, R + 20, B, MX + 26, B, PAL.muted, 2);
    arrow(ctx, MX, (T + B) / 2 - 10, MX, T, PAL.muted, 3);
    arrow(ctx, MX, (T + B) / 2 + 10, MX, B, PAL.muted, 3);
    text(ctx, 'd', MX + 16, (T + B) / 2, PAL.ink, { size: 24, weight: 600, base: 'middle' });
    topline(ctx, 'Four objects of charge +q are held fixed on a square of side d, with X and Z at the midpoints of two sides.');
    readout(d.readout, `\\kF = k\\frac{|\\kqone \\kqtwo|}{r^2}`,
      'The force object W exerts on object X is the F every other force in the items is measured against.');
  }
  hover(d.stage, () => [
    { x: CXL, y: TOP, r: 26, name: 'object W, at a corner' },
    { x: CXL + SIDE / 2, y: TOP, r: 26, name: 'object X, at the midpoint of the upper side' },
    { x: CXL + SIDE, y: TOP, r: 26, name: 'object Y, at a corner' },
    { x: CXL + SIDE / 2, y: TOP + SIDE, r: 26, name: 'object Z, at the midpoint of the lower side' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   A faithful copy, unnumbered: the field of the three objects R, S and T.
   The item asks the reader to compare the lengths of the arrows near each
   object and to say how far out they begin, so the copy draws the same grid
   of arrows at a size those comparisons can be made at. No controls.
===================================================================== */
(function () {
  const d = sim('fig-three-objects', 700);
  const CX = 700, CY = 350, D = 200;                  /* the origin, and the distance d in canvas units */
  const BOX = { x0: 150, x1: 1250, y0: 100, y1: 600 };
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), qc = C('charge');
    const qs = [{ x: CX - D, y: CY, q: -1 }, { x: CX, y: CY, q: 2 }, { x: CX + D, y: CY, q: -1 }];
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(BOX.x0, BOX.y0, BOX.x1 - BOX.x0, BOX.y1 - BOX.y0); ctx.restore();
    arrowGrid(ctx, qs, BOX, 50, 1.5e5, 46, ec);
    /* the axes the item measures positions along */
    line(ctx, BOX.x0 + 12, CY, BOX.x1 - 12, CY, alpha(PAL.ink, 0.35), 2);
    line(ctx, CX, BOX.y0 + 12, CX, BOX.y1 - 12, alpha(PAL.ink, 0.35), 2);
    text(ctx, 'x', BOX.x1 - 6, CY - 12, PAL.muted, { size: 20, align: 'right' });
    const names = [['R', '−q', -D], ['S', '+2q', 0], ['T', '−q', D]];
    for (const [n, lab, dx] of names) {
      const c = qs.find((z) => z.x === CX + dx);
      pointCharge(ctx, c.x, c.y, c.q, 15);
      text(ctx, n, c.x, c.y - 30, PAL.ink, { size: 26, weight: 700, align: 'center', base: 'bottom' });
      text(ctx, lab, c.x, c.y + 34, qc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, dx === 0 ? '0' : dx < 0 ? '−d' : 'd', c.x, c.y + 62, PAL.muted, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.85) });
    }
    topline(ctx, 'Three charged objects R, S and T lie on the x-axis at −d, 0 and d, with the field they make drawn as an arrow at each point of a grid.');
    readout(d.readout, `\\kEf = k\\left[-\\frac{\\kq}{(d+x)^2} + \\frac{2\\kq}{x^2} + \\frac{\\kq}{(d-x)^2}\\right]`,
      'Field vectors of very large magnitude are omitted for clarity, so a blank circle surrounds each object and the size of that circle says how much charge it carries.');
  }
  hover(d.stage, () => [
    { x: CX - D, y: CY, r: 26, name: 'object R, of charge −q' },
    { x: CX, y: CY, r: 26, name: 'object S, of charge +2q' },
    { x: CX + D, y: CY, r: 26, name: 'object T, of charge −q' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();
};
