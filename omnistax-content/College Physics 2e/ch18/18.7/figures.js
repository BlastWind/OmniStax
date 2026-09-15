/* Figures for section 18.7 Conductors and Electric Fields in Static Equilibrium.
   Boots against the section's text article.

   The page binds charge, electric field and force, which is what
   `ch18/COLOR.md` gives 18.7. A charge's sign is told by the sign written on
   it and by which way the arrows and the lines run, never by a hue; the
   conductors themselves are bodies and are drawn in ink, with the book's plus
   and minus marks on them in ink as well.

   Only the first figure moves. The section's argument is that free charges
   move until nothing is left to move them, and that settling has a clock in
   it, so Figure 18.26 registers a cycle and carries the transport. Everything
   after it draws an equilibrium that has already been reached: the five other
   figures answer their sliders, register no cycle and carry no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, topline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const K = 8.99e9;                                   /* Coulomb's constant, N·m²/C² */
const BREAKDOWN = 3e6;                              /* the field at which air stops insulating, N/C */
const SUPS = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (e) => String(e).split('').map((ch) => SUPS[ch] ?? ch).join('');
/* a field or a force written in the book's scientific notation, for a headline and for LaTeX */
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

/* A point charge: a filled disc in the charge hue with its sign written on it,
   the same drawing 18.4 and 18.5 use. */
function pointCharge(ctx, x, y, q, r) {
  const qc = C('charge');
  ctx.save(); ctx.fillStyle = q === 0 ? PAL.panel : qc; ctx.strokeStyle = qc; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (q !== 0) text(ctx, q < 0 ? '−' : '+', x, y + 1, PAL.panel, { size: r * 1.8, weight: 700, align: 'center' });
}

/* A plus or a minus written on the body of a conductor. A body is ink, and so
   are the marks the book draws on it. */
function signMark(ctx, x, y, positive, size) {
  text(ctx, positive ? '+' : '−', x, y, PAL.ink, { size, weight: 700, align: 'center' });
}

/* The field of a list of point charges at a point, in N/C, with the charges in
   nanocoulombs and every length in centimetres. */
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

/* One field line, stepped along the field direction from a seed point with a
   midpoint step, until it leaves the frame, reaches a charge or enters a body
   the caller says it may not enter. */
function traceLine(seed, field, sense, box, stop, step, maxSteps) {
  const pts = [[seed.x, seed.y]];
  let x = seed.x, y = seed.y;
  for (let i = 0; i < maxSteps; i++) {
    const f = field(x, y);
    if (!(f.m > 0)) break;
    const hx = x + (sense * step * f.x) / f.m / 2, hy = y + (sense * step * f.y) / f.m / 2;
    const g = field(hx, hy);
    if (!(g.m > 0)) break;
    x += (sense * step * g.x) / g.m; y += (sense * step * g.y) / g.m;
    pts.push([x, y]);
    if (x < box.x0 || x > box.x1 || y < box.y0 || y > box.y1) break;
    if (stop && stop(x, y)) break;
  }
  return pts;
}

/* A traced line drawn with arrowheads partway along it, so the sense of the
   field is read off the line and not off a colour. */
function drawLine(ctx, pts, color, w, heads) {
  if (pts.length < 2) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.stroke(); ctx.restore();
  for (const t of heads) {
    const i = Math.min(pts.length - 2, Math.max(0, Math.round(t * (pts.length - 1))));
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
    const dd = Math.hypot(bx - ax, by - ay);
    if (dd > 0.01) arrow(ctx, ax - ((bx - ax) / dd) * 9, ay - ((by - ay) / dd) * 9, ax + ((bx - ax) / dd) * 9, ay + ((by - ay) / dd) * 9, color, w + 1);
  }
}

/* =====================================================================
   FIGURE 18.26: an electric field applied to a conductor at an angle, and
   the free charge the parallel component pushes along the surface. Moving:
   the sentence the figure illustrates is that the charges move *until* the
   parallel component is gone, and the book can only draw the two ends of
   that sentence as panels (a) and (b). One loop carries the reader from the
   first to the second, and the transport lets it be watched again.
===================================================================== */
(function () {
  const d = sim('sim-parallel-component', 620);
  const T = 5.0;                                     /* one settling, in seconds */
  const cy = cycle(() => T, 1.2);
  const reset = () => cy.reset();
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 100, max: 1000, step: 20, value: 400, unit: 'N/C', dec: 0, aria: 'the strength of the applied field', onInput: reset });
  const as = ctl(d.controls, { label: '\\text{the angle}', cls: '', min: 15, max: 90, step: 5, value: 35, unit: '°', dec: 0, aria: 'the angle the applied field makes with the surface', onInput: reset });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0.1, max: 5, step: 0.1, value: 1, unit: 'μC', dec: 2, aria: 'the free charge in the conductor', onInput: reset });
  const X0 = 190, X1 = 1210, YS = 420, YB = 548, KE = 0.26, KF = 0.055;
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), fc = C('force'), qc = C('charge');
    const E0 = Es.v, al = as.v * RAD, q = qs.v;
    /* the share of the parallel component the gathered charge has already
       cancelled; it settles quickly and then holds, as a conductor does */
    const s = 1 - Math.exp(-3.4 * cy.now() / T);
    const Epar = E0 * Math.cos(al) * (1 - s), Eperp = E0 * Math.sin(al);
    const Enet = Math.hypot(Epar, Eperp), Fpar = q * Epar;        /* μC × N/C = μN */
    /* the conductor, seen edge on */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(X0, YS, X1 - X0, YB - YS); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'the conductor', (X0 + X1) / 2, (YS + YB) / 2 + 2, PAL.muted, { size: 21, align: 'center' });
    /* the field above the surface, drawn at five places */
    const ux = Epar / (Enet || 1), uy = Eperp / (Enet || 1), L = Enet * KE;
    for (const x of [280, 440, 900, 1060, 1160]) arrow(ctx, x - L * ux, YS - L * uy, x, YS, ec, 4);
    /* one place where the field is resolved into its two components */
    const PX = 670;
    arrow(ctx, PX - L * ux, YS - L * uy, PX, YS, ec, 6);
    const cy0 = YS - L * uy;
    if (Epar * KE > 4) arrow(ctx, PX - L * ux, cy0, PX, cy0, ec, 4);
    arrow(ctx, PX, cy0, PX, YS, ec, 4);
    line(ctx, PX - L * ux, cy0, PX - L * ux, YS, PAL.rule, 2, [10, 10]);
    /* the three numbers in a column of their own, so that no two labels can
       run into one another as the applied field is turned */
    text(ctx, 'the field at the surface', 120, 150, PAL.muted, { size: 19 });
    text(ctx, 'E = ' + fmt(Enet, 0) + ' N/C', 120, 190, ec, { size: 22, weight: 600 });
    text(ctx, 'E∥ = ' + fmt(Epar, 0) + ' N/C', 120, 230, ec, { size: 22, weight: 600 });
    text(ctx, 'E⊥ = ' + fmt(Eperp, 0) + ' N/C', 120, 270, ec, { size: 22, weight: 600 });
    /* the free charge, driven along the surface by the parallel component */
    /* the charge that has gathered at the two ends, on the surface and in ink
       as the book draws it */
    const n = Math.round(s * 7);
    for (let i = 0; i < n; i++) {
      signMark(ctx, X1 - 34 - i * 30, YS + 28, true, 28);
      signMark(ctx, X0 + 34 + i * 30, YS + 28, false, 28);
    }
    const cxq = 540 + s * 580, yq = YS - 24;
    pointCharge(ctx, cxq, yq, 1, 20);
    text(ctx, 'q = ' + fmt(q, 2) + ' μC', cxq, yq - 40, qc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (Fpar * KF > 5) {
      arrow(ctx, cxq + 26, yq, cxq + 26 + Fpar * KF, yq, fc, 5);
    }
    text(ctx, Fpar * KF > 5 ? 'F∥ = ' + fmt(Fpar, 0) + ' μN' : 'F∥ = 0', cxq, yq - 76, fc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, as.v >= 90
      ? 'The applied field meets the surface squarely, so none of it lies along the surface and there is nothing there to move the free charge.'
      : s < 0.03
      ? 'The applied field meets the surface at ' + fmt(as.v, 0) + '°, so ' + fmt(E0 * Math.cos(al), 0) + ' N/C of it lies along the surface and pushes the free charge with ' + fmt(q * E0 * Math.cos(al), 0) + ' μN.'
      : Epar < 0.005 * E0
        ? 'The charge that has gathered at the ends has cancelled the parallel component, so the field left at the surface is ' + fmt(Eperp, 0) + ' N/C, perpendicular to it, and nothing pushes the free charge any longer.'
        : 'The gathered charge has cancelled all but ' + fmt(Epar, 0) + ' N/C of the parallel component, and what is left pushes the free charge with ' + fmt(Fpar, 0) + ' μN.');
    readout(d.readout, `\\kFpar = \\kq\\kEfpar = (${fmt(q, 2)}\\ \\mu\\text{C})(${fmt(Epar, 0)}\\ \\text{N/C}) = ${fmt(Fpar, 0)}\\ \\mu\\text{N}`,
      'A positive free charge is drawn here, but free charges may be of either sign and in a metal they are negative; a negative charge driven to the left is the same thing as a positive one driven to the right. The perpendicular component E⊥ = ' + fmt(Eperp, 0) + ' N/C is untouched throughout, because nothing in the conductor can move across the surface, and it is the field that is left when the settling is over.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.27: a sphere in a field that was uniform before the sphere was
   put in it. The lines are traced from the field itself, so the way they
   turn to meet a conductor at right angles and die inside it is drawn
   rather than asserted. Still: the polarizing is over by the time the book
   draws the picture, and what is asked of the figure is what the finished
   arrangement looks like.
===================================================================== */
(function () {
  const d = sim('sim-sphere-in-field', 700);
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 50, max: 500, step: 10, value: 200, unit: 'N/C', dec: 0, aria: 'the strength of the applied field' });
  const as = ctl(d.controls, { label: '\\text{the radius}', cls: '', min: 5, max: 14, step: 0.5, value: 10, unit: 'cm', dec: 1, aria: 'the radius of the sphere' });
  const kind = choice(d.controls, { label: '\\text{the sphere}', options: [{ value: 'metal', label: 'a conductor' }, { value: 'insulator', label: 'an insulator' }], value: 'metal', aria: 'what the sphere is made of' });
  const CX = 700, CY = 372, S = 15;                 /* 15 logical units to the centimetre */
  const BOX = { x0: 120, x1: 1280, y0: 96, y1: 648 };
  const BETA = 0.625;                                /* how far an insulator of this kind polarizes, against a conductor's 1 */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field');
    const E0 = Es.v, a = as.v * S, metal = kind.value === 'metal';
    const b = metal ? 1 : BETA, inside = metal ? 0 : E0 * (1 - b);
    /* the field of a sphere in a uniform field: the applied field and the
       field of the charge the sphere's own surface has taken up */
    const field = (x, y) => {
      const dx = x - CX, dy = y - CY, r = Math.hypot(dx, dy);
      if (r < a) return { x: inside, y: 0, m: Math.abs(inside) };
      const r3 = r * r * r, r5 = r3 * r * r, a3 = a * a * a;
      const ex = E0 * (1 - (b * a3) / r3 + (3 * b * a3 * dx * dx) / r5);
      const ey = E0 * ((3 * b * a3 * dx * dy) / r5);
      return { x: ex, y: ey, m: Math.hypot(ex, ey) };
    };
    /* the lines, traced from the left edge, and, on a conductor, begun again
       on the excess positive charge of the right-hand face */
    const stop = (x, y) => metal && Math.hypot(x - CX, y - CY) < a + 2;
    const ys = [];
    for (let i = 0; i < 11; i++) ys.push(BOX.y0 + 26 + (i * (BOX.y1 - BOX.y0 - 52)) / 10);
    for (const y of ys) drawLine(ctx, traceLine({ x: BOX.x0 + 4, y }, field, 1, BOX, stop, 7, 420), ec, 3, [0.3, 0.75]);
    if (metal) {
      for (let i = -4; i <= 4; i++) {
        const ph = (i * 20) * RAD;
        const seed = { x: CX + (a + 4) * Math.cos(ph), y: CY + (a + 4) * Math.sin(ph) };
        drawLine(ctx, traceLine(seed, field, 1, BOX, null, 7, 420), ec, 3, [0.45]);
      }
    }
    /* the sphere itself, a body and so in ink, with the charge its two faces
       carry marked the way the book marks it */
    ctx.save(); ctx.fillStyle = metal ? alpha(PAL.ink, 0.12) : alpha(PAL.ink, 0.05);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(CX, CY, a, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    const marks = metal ? 7 : 5;
    for (let i = 0; i < marks; i++) {
      const ph = -60 * RAD + (i * 120 * RAD) / (marks - 1);
      signMark(ctx, CX + (a - 20) * Math.cos(ph), CY + (a - 20) * Math.sin(ph), true, 26);
      signMark(ctx, CX - (a - 20) * Math.cos(ph), CY + (a - 20) * Math.sin(ph), false, 26);
    }
    text(ctx, metal ? 'no field inside' : 'E = ' + fmt(inside, 0) + ' N/C inside', CX, CY, metal ? PAL.muted : ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, metal ? 'a metal sphere' : 'an insulating sphere', CX, CY + a + 44, PAL.muted, { size: 21, align: 'center' });
    text(ctx, 'the applied field, ' + fmt(E0, 0) + ' N/C', BOX.x0 + 6, BOX.y0 + 20, ec, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    topline(ctx, metal
      ? 'The free charges have moved to the two faces of the sphere, and the field they make cancels the applied field inside it exactly, leaving nothing there and meeting the surface at right angles.'
      : 'An insulator has no free charges to move to its faces, so the lines pass through it, weakened to ' + fmt(inside, 0) + ' N/C but neither cancelled nor bent to meet the surface at right angles.');
    readout(d.readout, metal
      ? `\\kEf_{\\ \\text{inside}} = 0, \\qquad \\kEf_{\\ \\text{applied}} = ${fmt(E0, 0)}\\ \\text{N/C}`
      : `\\kEf_{\\ \\text{inside}} = ${fmt(inside, 0)}\\ \\text{N/C}, \\qquad \\kEf_{\\ \\text{applied}} = ${fmt(E0, 0)}\\ \\text{N/C}`,
      metal
        ? 'The lines end on the excess negative charge of the left-hand face and begin again on the excess positive charge of the right-hand face, and they are closer together near the sphere than far from it, which is what the caption means by the field becoming stronger there. Change the radius and the picture changes size but not shape: it is the field of the applied field and of the charge the surface has taken up, and nothing else.'
        : 'This is how the object of the section’s first two conceptual questions is told from a conductor. Lines that pass straight through a body, and meet its surface at any angle they please, belong to an insulator; lines that stop at the surface, meet it at right angles and leave nothing inside belong to a conductor.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.28: excess charge on a metal sphere, and the field a probe
   reads inside it and outside it. Still: the charge has spread itself
   evenly and the picture that results does not change with time.
===================================================================== */
(function () {
  const d = sim('sim-charged-sphere', 660);
  const Qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: -20, max: 20, step: 0.5, value: 8, unit: 'nC', dec: 1, aria: 'the excess charge on the sphere' });
  const as = ctl(d.controls, { label: '\\text{the radius}', cls: '', min: 2, max: 9, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'the radius of the sphere' });
  const rs = ctl(d.controls, { label: '\\text{the probe}', cls: '', min: 1, max: 24, step: 0.5, value: 15, unit: 'cm', dec: 1, aria: 'the distance of the probe from the centre of the sphere' });
  const CX = 560, CY = 386, S = 17;                 /* 17 logical units to the centimetre */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), qc = C('charge');
    const Q = Qs.v, a = as.v, r = rs.v, sgn = Q === 0 ? 0 : Q > 0 ? 1 : -1;
    const Ein = 0, Eout = (8.99e4 * Math.abs(Q)) / (r * r);        /* nC and cm give N/C */
    const out = r > a, Eread = out ? Eout : Ein;
    /* the radial lines outside the sphere, which begin or end on the surface */
    if (Q !== 0) {
      for (let i = 0; i < 16; i++) {
        const ph = (i * 360) / 16 * RAD, cx = Math.cos(ph), sy = Math.sin(ph);
        const x0 = CX + (a * S + 3) * cx, y0 = CY + (a * S + 3) * sy;
        const x1 = CX + 286 * cx, y1 = CY + 286 * sy;
        if (sgn > 0) { line(ctx, x0, y0, x1, y1, ec, 3); arrow(ctx, CX + 190 * cx, CY + 190 * sy, CX + 212 * cx, CY + 212 * sy, ec, 4); }
        else { line(ctx, x0, y0, x1, y1, ec, 3); arrow(ctx, CX + 212 * cx, CY + 212 * sy, CX + 190 * cx, CY + 190 * sy, ec, 4); }
      }
    }
    /* the sphere, in ink, with its excess charge marked on the surface */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(CX, CY, a * S, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    if (Q !== 0) for (let i = 0; i < 10; i++) { const ph = (i * 36 + 18) * RAD; signMark(ctx, CX + (a * S - 13) * Math.cos(ph), CY + (a * S - 13) * Math.sin(ph), sgn > 0, 24); }
    if (out) text(ctx, 'E = 0', CX, CY, PAL.muted, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'q = ' + fmt(Q, 1) + ' nC on the surface', CX, CY + a * S + 36, qc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the probe, set down at the distance the slider gives it */
    const ph = -32 * RAD, px = CX + r * S * Math.cos(ph), py = CY + r * S * Math.sin(ph);
    line(ctx, CX, CY, px, py, PAL.rule, 2, [10, 10]);
    dot(ctx, px, py, PAL.ink, false, 11);
    /* inside the sphere the probe's two lines are set above the sphere, where no mark on the surface is */
    const ly = out ? py : CY - a * S - 20;
    text(ctx, 'the probe, ' + fmt(r, 1) + ' cm from the centre', out ? px : CX, ly - 32, PAL.ink, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (!out) line(ctx, px, py - 12, CX, ly - 14, alpha(PAL.ink, 0.5), 1.5, [5, 6]);
    if (Eread > 0) {
      const L = Math.min(190, Eread * 0.028), dx = Math.cos(ph) * sgn, dy = Math.sin(ph) * sgn;
      arrow(ctx, px, py, px + L * dx, py + L * dy, ec, 6);
    }
    text(ctx, out ? 'E = ' + sci(Eread, 2) + ' N/C' : 'E = 0 inside the conductor', out ? px : CX, out ? py + 34 : ly - 64, ec, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* what the same charge would read if the sphere were a point charge */
    text(ctx, 'a point charge of ' + fmt(Q, 1) + ' nC at the centre', 1120, 560, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'would read ' + (out ? sci(Eout, 2) + ' N/C' : 'more than nothing') + ' at the probe', 1120, 592, PAL.muted, { size: 20, align: 'center' });
    topline(ctx, Q === 0 ? 'With no excess charge on it the sphere makes no field at all, inside or out.'
      : out ? 'At ' + fmt(r, 1) + ' cm the probe reads ' + sci(Eout, 2) + ' N/C, which is what a point charge of ' + fmt(Q, 1) + ' nC at the centre would give there; drag the radius and the reading does not move.'
        : 'The probe is inside the metal, where the excess charge on the surface leaves no field at all, however much of it there is.');
    readout(d.readout, out
      ? `\\kEf = k\\frac{|\\kq|}{r^2} = \\frac{(8.99 \\times 10^{9})(${sciTex(Math.abs(Q) * 1e-9, 2)})}{(${fmt(r / 100, 4)})^2} = ${sciTex(Eout, 2)}\\ \\text{N/C}`
      : `\\kEf = 0 \\quad \\text{everywhere inside the conductor}`,
      out
        ? 'Excess charge is forced to the surface until nothing is left inside to push it further, so the field is zero everywhere within the metal and the field outside is exactly the field of a point charge of the same size at the centre. Double the charge and read at three times the distance and the field is 2/9 of what it was, a fall of 77.8 per cent, since it grows with the charge and falls with the square of the distance.'
        : 'Set the probe beyond ' + fmt(a, 1) + ' cm and the reading climbs from nothing to the field of a point charge at the centre. Inside there is no reading to take, which is the first of the three properties of a conductor in electrostatic equilibrium.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.29: two plates with equal and opposite excess charges. The
   lines are traced from the charge spread along the plates themselves, so
   the bowing at the ends and its falling away as the plates are brought
   together are drawn rather than described. Still: the charges have
   settled, and the field between the plates stands.
===================================================================== */
(function () {
  const d = sim('sim-parallel-plates', 700);
  const Qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 20, step: 0.5, value: 8, unit: 'nC', dec: 1, aria: 'the excess charge on each plate' });
  const ds = ctl(d.controls, { label: '\\text{the separation}', cls: '', min: 2, max: 18, step: 0.5, value: 6, unit: 'cm', dec: 1, aria: 'the distance between the plates' });
  const Ls = ctl(d.controls, { label: '\\text{the plates}', cls: '', min: 12, max: 38, step: 1, value: 30, unit: 'cm', dec: 0, aria: 'the length of each plate' });
  const CX = 700, YM = 336, S = 26, N = 30;          /* 26 logical units to the centimetre */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), qc = C('charge');
    const Q = Qs.v, gap = ds.v, L = Ls.v;
    const YT = YM - (gap * S) / 2, yb = YM + (gap * S) / 2, x0 = CX - (L * S) / 2, x1 = CX + (L * S) / 2;
    /* each plate as a row of equal charges, which is what a conductor's
       excess charge does when it spreads itself out */
    const qs = [];
    for (let i = 0; i < N; i++) {
      const x = x0 + ((i + 0.5) * (x1 - x0)) / N;
      qs.push({ x: x / S, y: YT / S, q: Q / N });
      qs.push({ x: x / S, y: yb / S, q: -Q / N });
    }
    const field = (x, y) => { const f = fieldAt(x / S, y / S, qs); return { x: f.x, y: f.y, m: f.m }; };
    const BOX = { x0: 90, x1: 1310, y0: 110, y1: 640 };
    const stop = (x, y) => y > yb - 4;
    for (let i = 0; i < 15; i++) {
      const x = x0 + 6 + ((i) * (x1 - x0 - 12)) / 14;
      drawLine(ctx, traceLine({ x, y: YT + 8 }, field, 1, BOX, stop, 6, 300), ec, 3, [0.5]);
    }
    /* the two plates, bodies in ink, with the book's marks on them */
    for (const [y, pos] of [[YT, true], [yb, false]]) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.rect(x0, y - 11, x1 - x0, 22); ctx.fill(); ctx.stroke(); ctx.restore();
      for (let i = 0; i < 12; i++) signMark(ctx, x0 + 18 + (i * (x1 - x0 - 36)) / 11, y + (pos ? 28 : -26), pos, 26);
    }
    text(ctx, 'q = +' + fmt(Q, 1) + ' nC', x1 + 18, YT, qc, { size: 21, weight: 600 });
    text(ctx, 'q = −' + fmt(Q, 1) + ' nC', x1 + 18, yb, qc, { size: 21, weight: 600 });
    /* the field in the middle of the gap and near the end of it */
    const mid = fieldAt(CX / S, (YT + yb) / 2 / S, qs), edge = fieldAt((x0 + 10) / S, (YT + yb) / 2 / S, qs);
    const Emid = K * 1e-9 * mid.m * 1e4, Eedge = K * 1e-9 * edge.m * 1e4;   /* nC and cm to N/C */
    const drop = Emid > 0 ? (100 * (Emid - Eedge)) / Emid : 0;
    dot(ctx, CX, (YT + yb) / 2, PAL.ink, true, 9);
    dot(ctx, x0 + 10, (YT + yb) / 2, PAL.ink, false, 9);
    /* the two readings stand in the clear below the plates, each leadered to its point */
    const RY = yb + 70;
    for (const [x, name, v, tx] of [[CX, 'at the middle (filled), ', Emid, CX + 250], [x0 + 10, 'at the edge (hollow), ', Eedge, CX - 250]]) {
      line(ctx, x, (YT + yb) / 2 + 14, tx, RY - 16, alpha(PAL.ink, 0.5), 1.5, [5, 6]);
      text(ctx, name + sci(v, 2) + ' N/C', tx, RY, ec, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    }
    topline(ctx, 'The plates are ' + fmt(L, 0) + ' cm long and ' + fmt(gap, 1) + ' cm apart, and the field at the very edge is ' + fmt(Math.abs(drop), 0) + ' per cent ' + (drop >= 0 ? 'weaker' : 'stronger') + ' than the field through the middle.');
    readout(d.readout, `\\kEf_{\\ \\text{middle}} = ${sciTex(Emid, 2)}\\ \\text{N/C}, \\qquad \\kEf_{\\ \\text{edge}} = ${sciTex(Eedge, 2)}\\ \\text{N/C}`,
      'Through the middle the lines run straight from one plate to the other and are evenly spaced, which is what a uniform field looks like: the same strength and the same direction everywhere. Near the ends they bow outward and thin, and that is the edge effect. Bring the plates closer together, or make them longer, and the region the edges spoil is a smaller share of the whole, which is what the book means by saying that the edge effects are less important when the plates are close together.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.31 + 18.32: one conductor with a round end and an end the
   reader sharpens. The book draws this body three times in 18.31 and a
   sharper one again in 18.32, and one live drawing whose point can be
   pulled out to a needle is that whole run of pictures at once, with the
   field at the point stated as a number so that the air can be driven past
   breaking down. Still: the charge has settled on the surface, and the
   question asked of the figure is where it has settled.
===================================================================== */
(function () {
  const d = sim('sim-sharp-end', 720);
  const sh = ctl(d.controls, { label: '\\text{the sharpness}', cls: '', min: 1, max: 12, step: 0.25, value: 3, unit: '×', dec: 2, aria: 'how many times sharper the right-hand end is than the left' });
  const Qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 5, max: 200, step: 5, value: 60, unit: 'nC', dec: 0, aria: 'the excess charge on the conductor' });
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 100, max: 1200, step: 50, value: 500, unit: 'N/C', dec: 0, aria: 'the strength of the applied field' });
  const panel = select(d.controls, {
    label: '\\text{the figure shows}',
    options: [{ value: 'a', label: 'repulsion' }, { value: 'b', label: 'the charge' }, { value: 'c', label: 'a field' }],
    value: 'b', aria: 'which of the book’s three panels is drawn',
  });
  const R1CM = 6, CLX = 470, CRX = 940, YC = 396, S = 16;   /* 16 logical units to the centimetre */
  /* The body is the outline of two circles and their common tangents, which is
     the shape the book draws and the arrangement whose charge everyone can
     work out: two conducting ends at one potential carry charge in proportion
     to their radii, so the field at each goes as one over its radius. */
  function ends() {
    const R1 = R1CM, R2 = R1CM / sh.v;
    return { R1, R2, r1: R1 * S, r2: R2 * S };
  }
  function outline(r1, r2) {
    const D = CRX - CLX, al = Math.asin(Math.max(-1, Math.min(1, (r1 - r2) / D)));
    const th = Math.PI / 2 + al, pts = [];
    for (let i = 0; i <= 48; i++) { const a = th + (i * (2 * Math.PI - 2 * th)) / 48; pts.push([CLX + r1 * Math.cos(a), YC - r1 * Math.sin(a)]); }
    for (let i = 0; i <= 48; i++) { const a = -th + (i * (2 * th)) / 48; pts.push([CRX + r2 * Math.cos(a), YC - r2 * Math.sin(a)]); }
    return pts;
  }
  /* Points along the surface, each carrying a share of the excess charge in
     proportion to the sharpness of the surface under it. */
  function surface(r1, r2) {
    const pts = outline(r1, r2), left = pts.slice(0, 49), right = pts.slice(49), out = [];
    const push = (x, y, w) => out.push({ x, y, w });
    for (const [x, y] of left) push(x, y, 1 / r1);
    /* the straight flank along the bottom, where the surface passes from the
       curvature of one end to that of the other */
    const flank = (a, b, wa, wb) => { for (let i = 1; i < 24; i++) { const t = i / 24; push(a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1]), wa + t * (wb - wa)); } };
    flank(left[left.length - 1], right[0], 1 / r1, 1 / r2);
    for (const [x, y] of right) push(x, y, 1 / r2);
    flank(right[right.length - 1], left[0], 1 / r2, 1 / r1);
    let W = 0;
    for (const p of out) W += p.w;
    for (const p of out) p.w /= W;
    return out;
  }
  function inBody(x, y, r1, r2) {
    if (Math.hypot(x - CLX, y - YC) < r1 - 1) return true;
    if (Math.hypot(x - CRX, y - YC) < r2 - 1) return true;
    if (x < CLX || x > CRX) return false;
    const t = (x - CLX) / (CRX - CLX), rr = r1 + t * (r2 - r1);
    return Math.abs(y - YC) < rr - 1;
  }
  function drawBody(ctx, r1, r2) {
    const pts = outline(r1, r2);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (const [x, y] of pts) ctx.lineTo(x, y);
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), fc = C('force'), qc = C('charge');
    const { R1, R2, r1, r2 } = ends();
    const Q = Qs.v, E0 = Es.v;
    const Etip = (8.99e4 * Q) / (R2 * (R1 + R2)), Eflat = (8.99e4 * Q) / (R1 * (R1 + R2));
    const BOX = { x0: 80, x1: 1320, y0: 120, y1: 690 };
    sh.disable(false);
    Qs.disable(panel.value === 'c');
    Es.disable(panel.value !== 'c');
    if (panel.value === 'a') {
      /* (a) an identical pair of charges at each end. The two charges of a
         pair are the same distance apart at both ends, so the force between
         them is the same size; what differs is how much of it lies along the
         surface, and that is what drives them apart. */
      drawBody(ctx, r1, r2);
      const sep = Math.min(46, 1.7 * r2), PAIR = Q / 25;                              /* how far apart the pair sits, and the charge each carries, nC */
      const Fpair = (K * (PAIR * 1e-9) * (PAIR * 1e-9)) / Math.pow(sep / S / 100, 2) * 1e6;   /* μN */
      const FL = 92;
      const dls = {};
      for (const [cx, r, ox, nm] of [[CLX, r1, -1, 'the flat end'], [CRX, r2, 1, 'the pointed end']]) {
        const dl = Math.asin(Math.min(0.94, sep / (2 * r)));
        dls[ox] = dl;
        const ux = ox * Math.cos(dl), uy = Math.sin(dl);
        const px = cx + r * ux, py = YC - r * uy;                  /* the upper charge of the pair */
        const bx = cx + r * ux, by = YC + r * uy;                  /* and the lower one */
        const tx = -ox * Math.sin(dl), ty = -Math.cos(dl);         /* along the surface, away from the other charge */
        pointCharge(ctx, px, py, 1, 15);
        pointCharge(ctx, bx, by, 1, 15);
        arrow(ctx, px, py, px, py - FL, fc, 5);
        arrow(ctx, bx, by, bx, by + FL, fc, 5);
        arrow(ctx, px, py, px + FL * Math.cos(dl) * tx, py + FL * Math.cos(dl) * ty, fc, 4);
        text(ctx, 'F = ' + fmt(Fpair, 1) + ' μN', px, py - FL - 26, fc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
        text(ctx, 'F∥ = ' + fmt(Fpair * Math.cos(dl), 1) + ' μN', px + ox * 46 + FL * Math.cos(dl) * tx, py + FL * Math.cos(dl) * ty - 4, fc, { size: 20, weight: 600, align: ox < 0 ? 'right' : 'left', bg: alpha(PAL.panel, 0.85) });
        text(ctx, nm, cx, YC + r + 132, PAL.muted, { size: 21, align: 'center' });
      }
      const dlL = dls[-1], dlR = dls[1];
      topline(ctx, 'The two charges of a pair sit the same distance apart at either end, so the force between them is the same ' + fmt(Fpair, 1) + ' μN; but ' + fmt(100 * Math.cos(dlL), 0) + ' per cent of it lies along the flat surface against only ' + fmt(100 * Math.cos(dlR), 0) + ' per cent along the pointed one.');
      readout(d.readout, `\\kFpar = \\kF\\cos\\theta: \\quad ${fmt(Fpair * Math.cos(dlL), 1)}\\ \\mu\\text{N}\\ \\text{at the flat end}, \\quad ${fmt(Fpair * Math.cos(dlR), 1)}\\ \\mu\\text{N}\\ \\text{at the point}`,
        'It is the part of the force that lies along the surface that moves a charge once it has reached the surface, since nothing can carry it off the metal. That part is largest where the surface is flattest, so the charges at the flat end are driven apart most effectively and end up least concentrated, and the charges at the point are left crowded together. Sharpen the point and the gap between the two widens.');
    } else if (panel.value === 'b') {
      /* (b) the excess charge that has settled, and the field it makes */
      const pts = surface(r1, r2), qs = pts.map((p) => ({ x: p.x / S, y: p.y / S, q: (Q * p.w) }));
      const field = (x, y) => { const f = fieldAt(x / S, y / S, qs); return { x: f.x, y: f.y, m: f.m }; };
      /* one line out of every place a mark is drawn, so the crowding of the
         charge and the crowding of the lines are the same picture */
      const seeds = [];
      let acc = 0, step = 1 / 26;
      for (const p of pts) { acc += p.w; while (acc > step) { seeds.push(p); acc -= step; } }
      for (const p of seeds) {
        const nx = p.x - (p.x < (CLX + CRX) / 2 ? CLX : CRX), ny = p.y - YC, n = Math.hypot(nx, ny) || 1;
        drawLine(ctx, traceLine({ x: p.x + (nx / n) * 6, y: p.y + (ny / n) * 6 }, field, 1, BOX, null, 8, 120), ec, 2.5, [0.7]);
      }
      drawBody(ctx, r1, r2);
      for (const p of seeds) {
        const nx = p.x - (p.x < (CLX + CRX) / 2 ? CLX : CRX), ny = p.y - YC, n = Math.hypot(nx, ny) || 1;
        signMark(ctx, p.x - (nx / n) * 11, p.y - (ny / n) * 11, Q > 0, 22);
      }
      text(ctx, 'q = ' + fmt(Q, 0) + ' nC on the surface', (CLX + CRX) / 2, YC + 2, qc, { size: 22, weight: 600, align: 'center' });
      text(ctx, 'E = ' + sci(Eflat, 2) + ' N/C', CLX - r1 - 24, YC, ec, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
      text(ctx, 'E = ' + sci(Etip, 2) + ' N/C', CRX + r2 + 24, YC - 44, ec, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
      topline(ctx, Etip >= BREAKDOWN
        ? 'At ' + sci(Etip, 2) + ' N/C the field at the point has passed the 3 × 10⁶ N/C at which air stops insulating, so charge is carried away from the point into the air, which is how a lightning rod works.'
        : sh.v < 1.05 ? 'With both ends equally round the charge spreads itself evenly, and the field is ' + sci(Etip, 2) + ' N/C at either end.'
        : 'The point carries the charge ' + fmt(sh.v, 2) + ' times as thickly as the flat end, so the field there is ' + sci(Etip, 2) + ' N/C against ' + sci(Eflat, 2) + ' N/C at the flat end.');
      readout(d.readout, `\\kEf_{\\ \\text{point}} = ${sciTex(Etip, 2)}\\ \\text{N/C}, \\qquad \\kEf_{\\ \\text{flat end}} = ${sciTex(Eflat, 2)}\\ \\text{N/C}`,
        'Both ends are part of one conductor, so the charge divides itself between them in proportion to their radii and the field at each goes as one over its own radius. Sharpen the point, or put more charge on the body, and the field at the point climbs; take it past 3 × 10⁶ N/C and the air at the point gives way and the charge is bled off there, which is what the pointed end of a lightning rod is for and what the smooth sphere of a Van de Graaff generator is shaped to avoid.');
    } else {
      /* (c) the same body, uncharged, in a field that was uniform before it
         was put there: the induced charge is most concentrated at the point */
      const pts = surface(r1, r2), xc = (CLX + CRX) / 2;
      const raw = pts.map((p) => ({ x: p.x / S, y: p.y / S, q: p.w * (p.x - xc) / S }));
      /* scale the induced charge so that it cancels the applied field at the
         middle of the body, which is what a conductor's charge does */
      const at = fieldAt(xc / S, YC / S, raw);
      const kq = at.m > 0 ? -E0 / (K * 1e-9 * 1e4 * at.x) : 0;
      const qs = raw.map((p) => ({ x: p.x, y: p.y, q: p.q * kq }));
      const field = (x, y) => {
        const f = fieldAt(x / S, y / S, qs);
        const ex = E0 + K * 1e-9 * 1e4 * f.x, ey = K * 1e-9 * 1e4 * f.y;
        return { x: ex, y: ey, m: Math.hypot(ex, ey) };
      };
      const stop = (x, y) => inBody(x, y, r1, r2);
      for (let i = 0; i < 11; i++) {
        const y = BOX.y0 + 20 + (i * (BOX.y1 - BOX.y0 - 40)) / 10;
        drawLine(ctx, traceLine({ x: BOX.x0 + 4, y }, field, 1, BOX, stop, 8, 300), ec, 3, [0.35, 0.8]);
      }
      let acc = 0; const step = 1 / 22, seeds = [];
      for (const p of pts) { acc += p.w; while (acc > step) { seeds.push(p); acc -= step; } }
      for (const p of seeds) {
        if (Math.abs(p.x - xc) < 20) continue;
        const nx = p.x - (p.x < xc ? CLX : CRX), ny = p.y - YC, n = Math.hypot(nx, ny) || 1;
        if (p.x > xc) drawLine(ctx, traceLine({ x: p.x + (nx / n) * 8, y: p.y + (ny / n) * 8 }, field, 1, BOX, null, 8, 200), ec, 2.5, [0.6]);
      }
      drawBody(ctx, r1, r2);
      for (const p of seeds) {
        const nx = p.x - (p.x < xc ? CLX : CRX), ny = p.y - YC, n = Math.hypot(nx, ny) || 1;
        signMark(ctx, p.x - (nx / n) * 11, p.y - (ny / n) * 11, p.x > xc, 22);
      }
      text(ctx, 'no field inside', xc, YC + 2, PAL.muted, { size: 21, weight: 600, align: 'center' });
      text(ctx, 'the applied field, ' + fmt(E0, 0) + ' N/C', BOX.x0 + 6, BOX.y0 + 20, ec, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
      topline(ctx, sh.v < 1.05
        ? 'The body carries no excess charge of its own, but the applied field has driven its free charges to the two ends, and with both ends equally round the two take it equally.'
        : 'The body carries no excess charge of its own, but the applied field has driven its free charges to the two ends, and the ' + fmt(sh.v, 2) + '-times sharper end takes ' + fmt(sh.v, 2) + ' times the concentration the flat end takes.');
      readout(d.readout, `\\kEf_{\\ \\text{applied}} = ${fmt(E0, 0)}\\ \\text{N/C}, \\qquad \\kEf_{\\ \\text{inside}} = 0`,
        'The lines must meet the surface at right angles and none may pass through the metal, so more of them are gathered onto the most curved part of it. This is the same concentration at the point that the charged body shows, produced here by an applied field rather than by charge put on the body, and it is why a pointed conductor under a storm cloud bleeds charge away continually instead of waiting for a strike.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (unnumbered): the square of four charges that nine of the
   section's questions and problems are asked about. A faithful copy: no
   sliders, nothing moving, the corners in the positions the book gives
   them, since what the questions need from it is which charge is where.
===================================================================== */
(function () {
  const d = sim('fig-square', 620);
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge');
    const CX = 700, CY = 330, H = 200;
    const corners = [['a', CX - H, CY - H, -1], ['b', CX + H, CY - H, 1], ['c', CX - H, CY + H, -1], ['d', CX + H, CY + H, 1]];
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 3;
    ctx.strokeRect(CX - H, CY - H, 2 * H, 2 * H); ctx.restore();
    for (const [x, y] of [[CX - H, CY - H], [CX + H, CY - H]]) line(ctx, x, y, 2 * CX - x, 2 * CY - y, PAL.rule, 2, [10, 10]);
    for (const [nm, x, y, side] of corners) {
      pointCharge(ctx, x, y, 0, 22);
      text(ctx, 'q_' + nm, x + side * 34, y, qc, { size: 24, weight: 600, align: side < 0 ? 'right' : 'left' });
    }
    pointCharge(ctx, CX, CY, 0, 22);
    text(ctx, 'q', CX + 34, CY, qc, { size: 24, weight: 600 });
    text(ctx, 'the charge at the center is the same distance from all four corners', CX, CY + H + 66, PAL.muted, { size: 21, align: 'center' });
    topline(ctx, 'Four point charges lie on the corners of a square and a fifth charge lies at its center.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
