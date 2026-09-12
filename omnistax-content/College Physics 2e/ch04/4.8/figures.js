/* Figures for section 4.8 Extended Topic: The Four Basic Forces—An Introduction.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
const pow10 = (n) => '10' + sup(n);
const ease = (u) => 1 - Math.pow(1 - Math.max(0, Math.min(1, u)), 3);

/* =====================================================================
   SIM: the ladder of relative strengths. The four basic forces of Table
   4.1 stand on a logarithmic ladder of relative strength, and a bracket
   counts the powers of ten between the two the reader picks. A
   comparison of four numbers has no time in it, so the figure registers
   no cycle and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-strengths', 466);
  const FORCE = [
    { name: 'gravitational', p: -38, tex: '10^{-38}', label: '10^{-38}' },
    { name: 'electromagnetic', p: -2, tex: '10^{-2}', label: '10^{-2}' },
    { name: 'weak nuclear', p: -6, tex: '10^{-6}', label: '10^{-6}' },
    { name: 'strong nuclear', p: 0, tex: '1', label: '1' },
  ];
  const A = ctl(d.controls, { label: '\\text{force A}', cls: '', min: 1, max: 4, step: 1, value: 4, unit: '', dec: 0, aria: 'the first force' });
  const B = ctl(d.controls, { label: '\\text{force B}', cls: '', min: 1, max: 4, step: 1, value: 2, unit: '', dec: 0, aria: 'the second force' });
  const LO = -40, L = 340, R = 1330, X = (p) => L + ((R - L) * (p - LO)) / -LO;
  const rowY = (i) => 120 + i * 58;
  function draw() {
    const { ctx } = begin(d.c);
    const a = Math.round(A.v) - 1, b = Math.round(B.v) - 1, fa = FORCE[a], fb = FORCE[b];
    /* one bar per force, running from the foot of the ladder to its own strength */
    FORCE.forEach((f, i) => {
      const y = rowY(i), on = i === a || i === b;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, on ? 0.26 : 0.09); ctx.fillRect(X(LO), y - 14, X(f.p) - X(LO), 28); ctx.restore();
      dot(ctx, X(f.p), y, PAL.ink, on, 10);
      text(ctx, (i + 1) + '   ' + f.name, L - 26, y, PAL.ink, { align: 'right', weight: on ? 600 : 400 });
      text(ctx, f.p === 0 ? '1' : pow10(f.p), X(f.p) + 18, y, on ? PAL.ink : PAL.muted, { size: 17, weight: on ? 600 : 400 });
    });
    /* the ladder itself */
    const ya = 340;
    line(ctx, X(LO), ya, X(0), ya, PAL.muted, 2);
    for (let p = LO; p <= 0; p += 5) {
      line(ctx, X(p), ya - 8, X(p), ya + 8, PAL.muted, 2);
      if (p % 10 === 0) text(ctx, pow10(p), X(p), ya + 26, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'relative strength', 60, ya + 26, PAL.ink, { weight: 600, size: 20 });
    /* the bracket that counts the powers of ten between the two picked forces */
    const e = fa.p - fb.p;
    if (a !== b) {
      const xa = X(fa.p), xb = X(fb.p), lo = Math.min(xa, xb), hi = Math.max(xa, xb);
      line(ctx, xa, rowY(a) + 14, xa, 428, PAL.ink, 2, [4, 8]);
      line(ctx, xb, rowY(b) + 14, xb, 428, PAL.ink, 2, [4, 8]);
      hbracket(ctx, lo, hi, 428, PAL.ink);
      const lab = pow10(Math.abs(e)) + ' between them', mid = Math.min(1250, Math.max(160, (lo + hi) / 2));
      text(ctx, lab, mid, 404, PAL.ink, { weight: 600, align: 'center', bg: PAL.panel });
    }
    headline(ctx, a === b ? 'force ' + (a + 1) + ' is being compared with itself, so the ratio is 1'
      : e >= 0 ? 'the ' + fa.name + ' force is ' + pow10(e) + ' times the ' + fb.name + ' force'
        : 'the ' + fa.name + ' force is ' + pow10(e) + ' of the ' + fb.name + ' force');
    readout(d.readout, `\\frac{\\text{${fa.name}}}{\\text{${fb.name}}} = \\frac{${fa.tex}}{${fb.tex}} = 10^{${e}}`,
      'The gravitational force is the weakest of the four by a very long way, and it is only because gravity is always attractive, and never cancels as the electromagnetic force does for a macroscopic object, that we notice it at all.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.24: the electric force field. A positive charge and a
   negative charge fill the space around them with a field, and a test
   charge placed anywhere in it feels a force along the field line
   through that point. The field answers nothing but its own two
   charges, so the picture is still: no cycle, no transport.
===================================================================== */
(function () {
  const d = sim('sim-field', 560);
  const TX = ctl(d.controls, { label: 'x', cls: '', min: -2.4, max: 2.4, step: 0.05, value: 0.2, unit: 'm', dec: 2, aria: 'the test charge across the field' });
  const TY = ctl(d.controls, { label: 'y', cls: '', min: -1.15, max: 1.15, step: 0.05, value: 0.7, unit: 'm', dec: 2, aria: 'the test charge up the field' });
  const TQ = ctl(d.controls, { label: 'q', cls: '', min: 1, max: 4, step: 0.5, value: 2, unit: 'units', dec: 1, aria: 'the size of the test charge' });
  const S = 190, CX = 700, CY = 305, SEP = 1;
  const px = (x) => CX + x * S, py = (y) => CY - y * S;
  /* the field of the two charges, in units where one charge at one metre gives one */
  function field(x, y) {
    const ax = x + SEP, bx = x - SEP;
    const r1 = Math.max(0.02, Math.hypot(ax, y)), r2 = Math.max(0.02, Math.hypot(bx, y));
    const c1 = 1 / (r1 * r1 * r1), c2 = 1 / (r2 * r2 * r2);
    return [ax * c1 - bx * c2, y * c1 - y * c2];
  }
  /* one field line, traced from just outside the positive charge until it reaches the negative one */
  function trace(th) {
    const pts = []; let x = -SEP + 0.14 * Math.cos(th), y = 0.14 * Math.sin(th);
    for (let i = 0; i < 1400; i++) {
      pts.push([x, y]);
      const [ex, ey] = field(x, y), m = Math.hypot(ex, ey) || 1e-9;
      x += (ex / m) * 0.03; y += (ey / m) * 0.03;
      if (Math.hypot(x - SEP, y) < 0.14) { pts.push([x, y]); break; }
      if (Math.abs(x) > 14 || Math.abs(y) > 14) break;
    }
    return pts;
  }
  const LINES = []; for (let k = 0; k < 12; k++) LINES.push(trace((k / 12) * Math.PI * 2));
  function draw() {
    const { ctx } = begin(d.c);
    const x = TX.v, y = TY.v, q = TQ.v;
    const d1 = Math.hypot(x + SEP, y), d2 = Math.hypot(x - SEP, y);
    const [ex, ey] = field(x, y), mag = Math.hypot(ex, ey);
    const E = Math.min(mag / 2, 99), Fm = q * E, ang = (Math.atan2(ey, ex) * 180) / Math.PI;
    /* the field lines, clipped to the drawing */
    ctx.save();
    ctx.beginPath(); ctx.rect(px(-3), py(1.28), 6 * S, 2.56 * S); ctx.clip();
    LINES.forEach((pts) => {
      if (pts.length < 3) return;
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.beginPath();
      pts.forEach(([ax, ay], i) => (i ? ctx.lineTo(px(ax), py(ay)) : ctx.moveTo(px(ax), py(ay))));
      ctx.stroke(); ctx.restore();
      const i = Math.max(1, Math.round(pts.length * 0.42));
      arrow(ctx, px(pts[i - 1][0]), py(pts[i - 1][1]), px(pts[i][0]), py(pts[i][1]), PAL.muted, 2.5);
    });
    ctx.restore();
    /* the two charges that make the field */
    dot(ctx, px(-SEP), py(0), PAL.ink, true, 22);
    dot(ctx, px(SEP), py(0), PAL.ink, false, 22);
    text(ctx, '+', px(-SEP), py(0) - 1, PAL.panel, { size: 26, weight: 600, align: 'center' });
    text(ctx, '−', px(SEP), py(0) - 1, PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'the positive charge', px(-SEP), py(0) + 44, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'the negative charge', px(SEP), py(0) + 44, PAL.muted, { size: 17, align: 'center' });
    /* the two distances, so the reader can see where in the field the charge sits */
    line(ctx, px(-SEP), py(0), px(x), py(y), PAL.rule, 2, [4, 8]);
    line(ctx, px(SEP), py(0), px(x), py(y), PAL.rule, 2, [4, 8]);
    const off = y >= 0 ? -15 : 15, at = (cx) => [cx + 0.45 * (px(x) - cx), py(0) + 0.45 * (py(y) - py(0)) + off];
    const [l1x, l1y] = at(px(-SEP)), [l2x, l2y] = at(px(SEP));
    text(ctx, fmt(d1, 2) + ' m', l1x, l1y, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, fmt(d2, 2) + ' m', l2x, l2y, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    /* the test charge and the force on it */
    const near = Math.min(d1, d2) < 0.18;
    const ux = ex / mag, uy = ey / mag;
    if (!near) {
      const len = Math.min(230, 60 + 44 * Math.sqrt(Fm), 0.75 * S * Math.min(d1, d2));
      arrow(ctx, px(x), py(y), px(x) + ux * len, py(y) - uy * len, C('force'), 5);
      text(ctx, 'F', px(x) + ux * (len + 18), py(y) - uy * (len + 18), C('force'),
        { weight: 600, size: 24, align: 'center', bg: PAL.panel });
    }
    dot(ctx, px(x), py(y), PAL.ink, true, 7 + 3 * q);
    text(ctx, 'q = ' + fmt(q, 1), px(x), py(y) + (uy >= 0 ? 1 : -1) * (26 + 3 * q), PAL.ink, { size: 17, align: 'center', bg: PAL.panel });
    headline(ctx, near ? 'move the test charge clear of the charge it is sitting on, where the field has no one direction'
      : Math.abs(ang) < 1 ? 'the force on the test charge is ' + fmt(Fm, 2) + ' and runs straight along the axis, following the field line through it'
        : 'the force on the test charge is ' + fmt(Fm, 2) + ' and points ' + fmt(Math.abs(ang), 0) + '° ' + (ang > 0 ? 'above' : 'below') + ' the axis');
    readout(d.readout, `\\kF = qE = (${fmt(q, 1)})(${fmt(E, 2)}) = ${fmt(Fm, 2)}`,
      'Here the field E is measured in units of its strength midway between the two charges. Raise q and the arrow grows with it, while the lines stay exactly where they are, because the field is a characteristic of the two charges that make it and not of the charge you place in it.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.25: the exchange of a particle. Two people pass a basketball
   and are pushed apart by it, and below them a proton and a neutron
   exchange a meson in the same way. An exchange takes time, so the
   figure runs a finite loop and gets the transport.
===================================================================== */
(function () {
  const d = sim('sim-exchange', 470);
  const FA = ctl(d.controls, { label: '\\kF', cls: 'force', min: 20, max: 200, step: 5, value: 80, unit: 'N', dec: 0, onInput: reset, aria: 'the force of the exchange' });
  const D = ctl(d.controls, { label: 'd', cls: '', min: 3, max: 10, step: 0.5, value: 6, unit: 'm', dec: 1, onInput: reset, aria: 'the separation of the pair' });
  const T = 4, THROW = 0.4, CATCH = 2.8, PUSH = 0.8;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const S = 90, CX = 700, px = (m) => CX + m * S;
  /* a person standing on (x, yb), facing right when s is 1 */
  function person(ctx, x, yb, color, s, armUp) {
    ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(x, yb - 84, 12, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, yb - 72); ctx.lineTo(x, yb - 30);
    ctx.moveTo(x, yb - 30); ctx.lineTo(x - 16, yb); ctx.moveTo(x, yb - 30); ctx.lineTo(x + 16, yb);
    ctx.moveTo(x, yb - 64); ctx.lineTo(x + s * 30, yb - (armUp ? 80 : 52));
    ctx.moveTo(x, yb - 64); ctx.lineTo(x - s * 15, yb - 38);
    ctx.stroke(); ctx.restore();
  }
  /* a basketball centred on (x, y) */
  function ball(ctx, x, y, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 15, y); ctx.lineTo(x + 15, y); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y, 6, 15, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), f = FA.v, sep = D.v;
    const back = 0.36 * f;                                   /* how far one exchange pushes a partner, in logical units */
    const kick1 = t > THROW ? back * ease((t - THROW) / PUSH) : 0;
    const kick2 = t > CATCH ? back * ease((t - CATCH) / PUSH) : 0;
    const xa = px(-sep / 2) - kick1, xb = px(sep / 2) + kick2;
    const flying = t >= THROW && t < CATCH, caught = t >= CATCH;
    const yb = 250, hand1 = [xa + 30, yb - 80], hand2 = [xb - 30, yb - 80];
    const u = flying ? (t - THROW) / (CATCH - THROW) : caught ? 1 : 0;
    const bx = hand1[0] + (hand2[0] - hand1[0]) * u, by = hand1[1] - 44 * Math.sin(Math.PI * u);
    /* the people, on their ground line */
    text(ctx, 'a basketball passed between two people', 60, 96, PAL.muted, { size: 20, weight: 600 });
    line(ctx, 120, yb, 1280, yb, PAL.rule, 3);
    person(ctx, xa, yb, PAL.ink, 1, !flying && !caught);
    person(ctx, xb, yb, PAL.ink, -1, caught || (flying && u > 0.72));
    ball(ctx, bx, by, PAL.ink);
    if (t > THROW && t < THROW + 1.6) {
      const L = 40 + 0.9 * f;
      arrow(ctx, xa - 18, yb - 56, xa - 18 - L, yb - 56, C('force'), 5);
      text(ctx, 'F₁ = ' + fmt(f, 0) + ' N', xa - 18 - L / 2, yb - 80, C('force'), { weight: 600, size: 22, align: 'center' });
    }
    if (t > CATCH) {
      const L = 40 + 0.9 * f;
      arrow(ctx, xb + 18, yb - 56, xb + 18 + L, yb - 56, C('force'), 5);
      text(ctx, 'F₂ = ' + fmt(f, 0) + ' N', xb + 18 + L / 2, yb - 80, C('force'), { weight: 600, size: 22, align: 'center' });
    }
    hbracket(ctx, px(-sep / 2), px(sep / 2), 286, PAL.ink, 'd = ' + fmt(sep, 1) + ' m');
    /* the proton and the neutron, doing the same thing with a meson */
    text(ctx, 'a meson exchanged between a proton and a neutron', 60, 322, PAL.muted, { size: 20, weight: 600 });
    const yn = 404;
    dot(ctx, xa, yn, PAL.ink, true, 26); dot(ctx, xb, yn, PAL.ink, false, 26);
    text(ctx, 'p', xa, yn, PAL.panel, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'n', xb, yn, PAL.ink, { size: 22, weight: 600, align: 'center' });
    const mx = xa + 26 + (xb - 26 - (xa + 26)) * u;
    dot(ctx, mx, yn, PAL.ink, true, 10);
    if (flying) text(ctx, 'meson', mx, yn - 30, PAL.muted, { size: 17, align: 'center' });
    if (t > THROW && t < THROW + 1.6) arrow(ctx, xa - 30, yn, xa - 30 - (40 + 0.9 * f), yn, C('force'), 5);
    if (t > CATCH) arrow(ctx, xb + 30, yn, xb + 30 + (40 + 0.9 * f), yn, C('force'), 5);
    headline(ctx, !flying && !caught ? 'the thrower is about to pass the ball across the ' + fmt(sep, 1) + ' m between the two'
      : flying ? 'the ball is in flight, and the ' + fmt(f, 0) + ' N it carried away has pushed the thrower back from the catcher'
        : 'the catcher has taken the ball and been pushed back in turn, so one exchange has driven the pair apart');
    readout(d.readout, `\\kFone = \\kFtwo = ${fmt(f, 0)}\\ \\text{N}`,
      'The thrower is pushed back as the ball leaves and the catcher is pushed back as it arrives, so the exchange drives the two apart although neither of them touches the other. A meson exchanged between a proton and a neutron carries the strong nuclear force between them in the same way.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();
};
