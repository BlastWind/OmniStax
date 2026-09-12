/* Figures for section 7.1 Work: The Scientific Definition. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, axes, nice } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the two figures ---------- */
const G = 9.80, TAU = 2 * Math.PI, RAD = Math.PI / 180;
const SUPS = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (e) => String(e).split('').map((c) => SUPS[c]).join('');
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const sgn = (v) => (v < 0 ? '−' : '');
/* three significant figures, never in exponent form, with commas */
function sig3(x) {
  if (Math.abs(x) < 1e-9) return '0';
  const s = Math.abs(x).toPrecision(3);
  return sgn(x) + (s.includes('e') || Math.abs(x) >= 1000 ? commas(String(Math.round(Math.abs(x)))) : s);
}
/* the same number in the book's scientific notation once it is very small or very large */
function sci(x, dec) {
  if (Math.abs(x) < 1e-12) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  return e >= -2 && e <= 3 ? sig3(x) : sgn(x) + fmt(Math.abs(x) / Math.pow(10, e), dec) + ' × 10' + sup(e);
}
/* an angle arc at (x, y) opening from the horizontal down to th degrees, its label beyond the arc */
function angleArc(ctx, x, y, r, th, label, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, 0, th * RAD); ctx.stroke(); ctx.restore();
  const a = (th / 2) * RAD; text(ctx, label, x + (r + 32) * Math.cos(a), y + (r + 32) * Math.sin(a), color, { size: 20, weight: 600, align: 'center' });
}

/* ---------- sprites, in ink ---------- */
/* a lawn mower standing on the ground at (x, y), its handle reaching up and back */
function mower(ctx, x, y, color, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(-54, -14); ctx.lineTo(-54, -42); ctx.lineTo(42, -42); ctx.lineTo(42, -14); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(34, -38); ctx.lineTo(96, -104); ctx.moveTo(78, -104); ctx.lineTo(114, -104); ctx.stroke();
  ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.arc(-34, -14, 14, 0, TAU); ctx.moveTo(38, -14); ctx.arc(24, -14, 14, 0, TAU); ctx.fill();
  ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(-34, -14, 14, 0, TAU); ctx.moveTo(38, -14); ctx.arc(24, -14, 14, 0, TAU); ctx.stroke();
  ctx.restore();
}
/* a crate of side w whose base sits on (x, y) */
function crate(ctx, x, y, w, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.15); ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.fillRect(x - w / 2, y - w, w, w); ctx.strokeRect(x - w / 2, y - w, w, w);
  ctx.beginPath(); ctx.moveTo(x - w / 2, y - w); ctx.lineTo(x + w / 2, y); ctx.moveTo(x + w / 2, y - w); ctx.lineTo(x - w / 2, y); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 7.2: the five examples of work. A lawn mower is pushed along
   level ground with a force F at an angle θ to the displacement d, and
   the graph beneath follows the work as the mower goes. The work
   accumulates while the mower travels, so the figure moves and takes
   the transport; the five cases the book draws are five settings of the
   angle and the displacement.
===================================================================== */
(function () {
  const d = sim('sim-work', 780);
  const Fc = ctl(d.controls, { label: '\\kF', cls: 'force', min: 0, max: 150, step: 2.5, value: 75, unit: 'N', dec: 1, onInput: reset, aria: 'force' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 180, step: 5, value: 35, unit: 'º', dec: 0, onInput: reset, aria: 'angle between the force and the displacement' });
  const dd = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0, max: 40, step: 0.5, value: 25, unit: 'm', dec: 1, onInput: reset, aria: 'displacement' });
  const cy = cycle(() => 1, 1.2);            /* one trip per loop, counted as the fraction of it that is done */
  function reset() { cy.reset(); }
  const SC = 22, X0 = 180, GY = 360;         /* logical units to the metre, the start of the trip, the ground */
  function draw() {
    const { ctx } = begin(d.c);
    const Fv = Fc.v, ang = th.v, D = dd.v, cs = Math.cos(ang * RAD);
    const s = D * cy.now(), W = Fv * s * cs, Wtot = Fv * D * cs;
    /* the ground and the mower on it */
    line(ctx, 120, GY, 1340, GY, PAL.muted, 3);
    const mx = X0 + s * SC;
    mower(ctx, mx, GY, PAL.ink, 0.9);
    /* the force at the handle, its tail up and behind, with the angle it makes with the direction of motion */
    const gx = mx + 86, gy = GY - 94, L = 60 + Fv * 0.6;
    const tx = gx - L * cs, ty = gy - L * Math.sin(ang * RAD);
    line(ctx, tx, ty, Math.min(1370, tx + Math.max(120, L * 0.9)), ty, PAL.rule, 2, [10, 10]);
    if (ang > 6) angleArc(ctx, tx, ty, 46, ang, 'θ = ' + fmt(ang, 0) + 'º', PAL.ink);
    arrow(ctx, tx, ty, gx, gy, C('force'), 5);
    text(ctx, 'F = ' + fmt(Fv, 1) + ' N', tx - 18, ty - 28, C('force'), { size: 22, weight: 600, align: 'center' });
    /* the component of the force along the motion, which is the part of it that does the work */
    line(ctx, gx, ty, gx, gy, C('force'), 2, [4, 8]);
    arrow(ctx, tx, ty, gx, ty, C('force'), 4);
    /* the label goes above the reference line, to the right of the tail, since the angle's
       arc and its own label take the wedge below it */
    text(ctx, 'F cos θ = ' + fmt(Fv * cs, 1) + ' N', Math.min(tx + 54, 1150), ty - 32, C('force'), { size: 20, weight: 600, align: 'left' });
    /* the displacement the force acts through */
    line(ctx, X0, GY, X0, GY + 66, PAL.rule, 2, [4, 8]);
    if (D > 0.05) {
      line(ctx, X0 + D * SC, GY, X0 + D * SC, GY + 66, PAL.rule, 2, [4, 8]);
      hbracket(ctx, X0, X0 + D * SC, 420, C('position'), 'd = ' + fmt(D, 1) + ' m');
    }
    /* the graph: the work done against the distance the mower has travelled */
    const rx = nice(0, Math.max(D, 1), 4);
    const lo = Math.min(0, Wtot), hi = Math.max(0, Wtot);
    const ry = hi - lo < 1e-6 ? { lo: 0, hi: 1, n: 4 } : nice(lo, hi, 4);
    const box = { l: 200, r: 1290, t: 500, b: 690 };
    const { X, Y } = axes(ctx, box, [0, rx.hi], [ry.lo, ry.hi], {
      xl: 'distance travelled (m)', xc: C('position'), yl: 'work done (J)', yc: C('energy'),
      nx: rx.n, ny: ry.n, fx: (v) => fmt(v, rx.hi <= 5 ? 1 : 0), fy: (v) => sig3(v),
    });
    if (D > 0.05) {
      line(ctx, X(0), Y(0), X(D), Y(Wtot), PAL.rule, 3, [10, 10]);
      line(ctx, X(0), Y(0), X(s), Y(W), C('energy'), 5);
      line(ctx, X(s), Y(0), X(s), Y(W), PAL.rule, 2, [4, 8]);
      dot(ctx, X(s), Y(W), C('energy'), true, 9);
      text(ctx, 'W = ' + sig3(W) + ' J', Math.min(X(s) + 18, box.r - 150), Y(W) + (Wtot < 0 ? 30 : -28), C('energy'), { size: 22, weight: 600, bg: alpha(PAL.panel, 0.85) });
    }
    dot(ctx, X(0), Y(0), C('energy'), false, 10);
    /* the headline and the readout */
    headline(ctx, Fv < 0.05 ? 'nobody is pushing the mower, so no work is done on it'
      : D < 0.05 ? 'the mower does not move, so the force does no work on it however hard the person pushes'
      : Math.abs(cs) < 0.005 ? 'the force is perpendicular to the motion, so it does no work however far the mower goes'
      : 'the mower has gone ' + fmt(s, 1) + ' m of ' + fmt(D, 1) + ' m, and the force has done ' + sig3(W) + ' J of work on it so far');
    const caseLine = Fv < 0.05 || D < 0.05 ? 'There is no work without both a force and a displacement, which is the case of Figure 7.2(b).'
      : Math.abs(cs) < 0.005 ? 'The force is perpendicular to the motion, so cos θ is zero and no energy is transferred, which is the case of Figure 7.2(c).'
      : cs > 0 ? 'The force has a component in the direction of the motion, so the work is positive and energy is transferred to the mower, as in Figure 7.2(a) and (d).'
      : 'The force has a component opposite to the motion, so the work is negative and energy is taken out of the system, as in Figure 7.2(e).';
    readout(d.readout, `\\kW = \\kF\\kd\\cos\\theta = (${fmt(Fv, 1)}\\ \\text{N})(${fmt(D, 1)}\\ \\text{m})\\cos ${fmt(ang, 0)}^\\circ = ${sig3(Wtot)}\\ \\text{J}`, caseLine);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.2), draw });
})();

/* =====================================================================
   SIM: the size of a joule. A mass is lifted steadily through a height,
   so the force on it is its weight and the angle between that force and
   the displacement is zero, and the work is laid on a ladder of powers
   of ten beside an apple, the lawn mower of Example 7.1, a food calorie
   and a day's food energy. The figure answers its sliders and has no
   time in it, so it is a still picture with no transport.
===================================================================== */
(function () {
  const d = sim('sim-joule', 640);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 0.05, max: 100, step: 0.05, value: 0.1, unit: 'kg', dec: 2, aria: 'mass lifted' });
  const hh = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.2, max: 20, step: 0.1, value: 1, unit: 'm', dec: 2, aria: 'height it is lifted through' });
  const LO = -2, HI = 7, LX = 130, RX = 1330, BT = 420, BB = 520, GY = 330, CX = 700;
  const Xe = (E) => LX + ((Math.log10(E) - LO) / (HI - LO)) * (RX - LX);
  const DEC = ['0.01 J', '0.1 J', '1 J', '10 J', '100 J', '1 kJ', '10 kJ', '100 kJ', '1 MJ', '10 MJ'];
  const MARKS = [
    { E: 0.98, label: 'an apple lifted about a meter', row: 0 },
    { E: 1536, label: 'the lawn mower of Example 7.1', row: 1 },
    { E: 4186, label: 'one food calorie', row: 0 },
    { E: 1.0e7, label: 'a day’s food energy', row: 1 },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const m = mm.v, h = hh.v, Fw = m * G, W = Fw * h;
    /* the scene: the mass held at the height it has been lifted through */
    const side = 34 + 46 * Math.pow(m / 100, 1 / 3);
    const vh = 20 + 90 * (Math.log10(h / 0.2) / Math.log10(100));
    const base = GY - vh, top = base - side;
    line(ctx, CX - 260, GY, CX + 260, GY, PAL.muted, 3);
    crate(ctx, CX, base, side, PAL.ink);
    line(ctx, CX - side / 2 - 96, GY, CX - side / 2 - 8, GY, PAL.rule, 2, [4, 8]);
    line(ctx, CX - side / 2 - 96, base, CX - side / 2 - 8, base, PAL.rule, 2, [4, 8]);
    vbracket(ctx, CX - side / 2 - 66, base, GY, C('position'), 'd = ' + fmt(h, 2) + ' m', -1);
    arrow(ctx, CX, top - 8, CX, top - 68, C('force'), 5);
    text(ctx, 'F = mg = ' + sig3(Fw) + ' N', CX + 22, top - 46, C('force'), { size: 22, weight: 600 });
    text(ctx, 'm = ' + fmt(m, 2) + ' kg', CX + side / 2 + 22, base - side / 2, PAL.ink, { size: 22, weight: 600 });
    /* the ladder of energies, a power of ten to the rung */
    for (let e = LO; e < HI; e += 2) {
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(Xe(Math.pow(10, e)), BT, Xe(Math.pow(10, e + 1)) - Xe(Math.pow(10, e)), BB - BT); ctx.restore();
    }
    for (let e = LO; e <= HI; e++) {
      const x = Xe(Math.pow(10, e));
      line(ctx, x, BT, x, BB, PAL.rule, 1.5);
      text(ctx, DEC[e - LO], x, BB + 30, PAL.muted, { size: 17, align: 'center' });
    }
    line(ctx, LX, BB, RX, BB, PAL.muted, 2); line(ctx, LX, BT, RX, BT, PAL.rule, 1.5);
    MARKS.forEach((k) => {
      const x = Xe(k.E), ly = k.row ? 352 : 390;
      const right = x > RX - 220, left = x < LX + 220;
      line(ctx, x, ly + 12, x, BB, PAL.muted, 2, [6, 8]);
      dot(ctx, x, BB, PAL.muted, true, 7);
      text(ctx, k.label, right ? RX : left ? LX : x, ly, PAL.muted, { size: 18, align: right ? 'right' : left ? 'left' : 'center' });
    });
    /* where the work the sliders set falls among them */
    const xw = Math.max(LX, Math.min(RX, Xe(W)));
    line(ctx, xw, BT - 14, xw, BB + 12, C('energy'), 5);
    dot(ctx, xw, BB, C('energy'), true, 11);
    text(ctx, 'W = ' + sci(W, 2) + ' J', Math.max(LX + 110, Math.min(xw, RX - 110)), BB + 68, C('energy'), { size: 24, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    headline(ctx, 'lifting ' + fmt(m, 2) + ' kg through ' + fmt(h, 2) + ' m takes ' + sci(W, 2) + ' J of work'
      + (W > 0.7 && W < 1.4 ? ', which is about one joule' : ''));
    readout(d.readout, `\\kW = \\kF\\kd\\cos\\theta = (${sig3(Fw)}\\ \\text{N})(${fmt(h, 2)}\\ \\text{m})\\cos 0^\\circ = ${sci(W, 2)}\\ \\text{J}`,
      'That much work is ' + sci(W / 4186, 2) + ' kcal, and the person of Example 7.1 eats about 2400 kcal in a day, so it is '
      + sci(W / 4186 / 2400, 2) + ' of a day’s food energy.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
